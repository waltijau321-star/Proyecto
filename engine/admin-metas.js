// engine/admin-metas.js
// Panel "Camino a la meta" del Admin: el embudo de crecimiento y el estado de la monetización.
//
// Por qué existe: el Admin ya medía MUY bien el contenido (precisión por tema, finalización por
// actividad, temas más abiertos) y no medía NADA del negocio. Esto no sustituye a nada de lo que
// había; se monta encima, antes de los reportes, porque es lo que decide en qué trabajar.
//
// Dos reglas de diseño que no son estilo:
//
// 1. **Todo se calcula de datos que YA se escriben.** No se añade telemetría nueva para pintar
//    este panel. `updatedAt` lo pone cloud-sync.js en cada escritura, así que sirve de "última
//    señal de vida" para TODOS los usuarios, no solo para los que tienen contadores de uso
//    (`rm:usage-stats`, que falta en quien no ha abierto la app desde que existen); de ahí sale
//    actividad semanal y mensual sin pedir permiso de nada nuevo. La única cifra que todavía no puede existir es la de suscriptores: no hay cobro.
//    Se lee de `rm:suscripcion` y vale 0 hasta que lo haya, dicho en pantalla y no disimulado.
//
// 2. **Las funciones de cálculo son puras** (`calcularMetricas`, `puertas`), para que tests.js
//    las cubra con cohortes inventadas. Un panel de dirección que miente es peor que no tenerlo.
import { escHtml as esc } from './texto-seguro.js';
import { ANCLA, TIPOS, MONEDAS, precioDe, monedaDe, normalizaPais, catalogoPrecios, formatoPrecio } from './precios.js';

const DIA = 86400000;

/* ------------------------------------------------------------------ MODELO
   La ÚNICA fuente de los números de la meta. `Osler.md` explica por qué cada uno es el que es;
   si cambia aquí, cambia el panel y cambia la prueba que lo vigila.

   La meta se mide en DINERO AL MES, no en número de suscriptores, y eso es deliberado: con
   precios distintos por país, 300 suscripciones pueden ser 59 000 MXN o 110 000 segun de donde
   vengan. Contar cabezas escondería esa diferencia justo cuando empieza a importar. El número de
   suscriptores que hace falta se DERIVA del ingreso medio de la gente que hay (`arpuHipotetico`),
   así que se mueve solo cuando cambia la mezcla de países. Los precios viven en `precios.js`. */
export const MODELO = {
  monedaBase: 'MXN',
  metaIngresoMensual: 60000,    // MXN/mes: el horizonte "Sustituye"
  metaActivosSemana: 150,       // la estrella polar: residentes que estudian CADA semana
  umbralEnganche: 50,           // preguntas respondidas que definen a un usuario "enganchado"
  conversionEnganchados: 25,    // % de enganchados que se supone que paga, para la proyección
  metaTraccion: 150,            // registros
  metaActivacion: 60,           // % de registrados que responde al menos una pregunta
  metaHabito: 35,               // % activos-semana / activos-mes
  metaRetencion: 40,            // % de la cohorte de más de 30 días que sigue viva
  metaNucleo: 100,              // usuarios enganchados
  metaCobertura: 60,            // % del temario con tema construido
  /* Tres horizontes, no una meta. El de en medio es la meta declarada; el primero dice cuándo
     el proyecto deja de costar dinero y el tercero existe porque el techo no lo pone el nicho,
     lo pone hasta dónde se quiera llevar. */
  horizontes: [
    { id: 'sostiene', nombre: 'Sostiene', mxn: 15000, que: 'Paga infraestructura, herramientas y fuentes. El proyecto deja de costar dinero.' },
    { id: 'sustituye', nombre: 'Sustituye', mxn: 60000, que: 'Equivale a una plaza. El tiempo que se le dedica deja de restarse de otro lado.' },
    { id: 'escala', nombre: 'Escala', mxn: 250000, que: 'LATAM entera, con dinero para editores, diseño y revisión clínica externa.' }
  ]
};

/* Firestore devuelve Timestamp; rm:usage-stats.lastActive es un número de Date.now(); una cohorte
   de prueba puede traer cualquiera de los dos. Un solo lector para los tres casos. */
function millis(v) {
  if (!v) return 0;
  if (typeof v === 'number') return v;
  if (typeof v.toMillis === 'function') return v.toMillis();
  if (typeof v.seconds === 'number') return v.seconds * 1000;
  if (v instanceof Date) return v.getTime();
  return 0;
}

/* Última señal de vida: la más reciente entre la escritura al documento (todos) y el latido de los
   contadores de uso (solo quien los tiene). Nunca se usa solo la segunda: dejaría fuera a la
   mayoría y el panel pintaría una app muerta que no lo está. */
export function ultimaActividad(u) {
  const stats = u['rm:usage-stats'] || {};
  return Math.max(millis(u.updatedAt), millis(stats.lastActive));
}

export function preguntasRespondidas(u) {
  const p = u['rm:quiz-progress'] || {};
  return Object.keys(p).reduce((n, k) => {
    const t = p[k] || {};
    return n + (t.correct || 0) + (t.incorrect || 0);
  }, 0);
}

/* El campo de suscripción todavía no lo escribe nadie. Se acepta en las dos formas que puede
   tomar el día que exista (cadena o objeto) para que el panel no haya que reescribirlo, y solo
   'activa' cuenta como ingreso: una prueba gratuita no es dinero. */
export function esSuscriptor(u) {
  const s = u['rm:suscripcion'];
  if (!s) return false;
  if (typeof s === 'string') return s === 'activa';
  return s.estado === 'activa';
}

const pct = (a, b) => (b ? Math.round((a / b) * 100) : null);

export function calcularMetricas(users, ahora = Date.now()) {
  let nuevos7 = 0, nuevos30 = 0, activos7 = 0, activos30 = 0;
  let activados = 0, enganchados = 0, cohorteMadura = 0, retenidos = 0;
  let suscriptores = 0, preguntasTotales = 0;
  let mrr = 0, precioAcumulado = 0, conPrecio = 0, proyectado = 0, sinPais = 0;
  const canales = {};
  const paises = new Set(), hospitales = new Set();

  users.forEach(u => {
    const alta = millis(u.createdAt);
    const act = ultimaActividad(u);
    const preguntas = preguntasRespondidas(u);
    preguntasTotales += preguntas;

    if (alta && ahora - alta <= 7 * DIA) nuevos7++;
    if (alta && ahora - alta <= 30 * DIA) nuevos30++;
    if (act && ahora - act <= 7 * DIA) activos7++;
    if (act && ahora - act <= 30 * DIA) activos30++;
    if (preguntas >= 1) activados++;
    if (preguntas >= MODELO.umbralEnganche) enganchados++;

    // Retención: solo tiene sentido preguntarla a quien tuvo tiempo de irse. Una cuenta de ayer
    // no es "retenida", es nueva, y meterla en el divisor infla la cifra justo cuando más se
    // registra gente.
    if (alta && ahora - alta > 30 * DIA) {
      cohorteMadura++;
      if (act && ahora - act <= 14 * DIA) retenidos++;
    }

    // El dinero se cuenta con el precio de la moneda de cada quien. Con precio único por paridad
    // las cifras quedan parecidas, pero no idénticas: el redondeo atractivo mueve cada moneda unos
    // puntos, y quien no declaró país se cobra en la moneda por defecto, como la tienda por
    // defecto de una app.
    const precio = precioDe(u['rm:profile-country']);
    precioAcumulado += precio.mensualMXN;
    conPrecio++;
    if (!precio.reconocido) sinPais++;
    if (esSuscriptor(u)) { suscriptores++; mrr += precio.mensualMXN; }
    if (preguntas >= MODELO.umbralEnganche) proyectado += precio.mensualMXN * MODELO.conversionEnganchados / 100;

    const canal = String(u['rm:profile-referral'] || '').trim();
    if (canal) canales[canal] = (canales[canal] || 0) + 1;
    if (u['rm:profile-country']) paises.add(normalizaPais(u['rm:profile-country']));
    if (u['rm:profile-hospital']) hospitales.add(String(u['rm:profile-hospital']).trim().toLowerCase());
  });

  const total = users.length;
  // Lo que pagaría en promedio un residente de los que YA están, dada su mezcla de países. De
  // aquí sale cuántas suscripciones hacen falta para la meta, en vez de fijar el número a mano.
  const arpuHipotetico = conPrecio ? Math.round(precioAcumulado / conPrecio) : 0;
  return {
    total, nuevos7, nuevos30, activos7, activos30,
    activados, enganchados, cohorteMadura, retenidos, suscriptores, preguntasTotales,
    pctActivados: pct(activados, total),
    pctEnganchados: pct(enganchados, total),
    habito: pct(activos7, activos30),
    retencion: pct(retenidos, cohorteMadura),
    arpuHipotetico,
    arpuReal: suscriptores ? Math.round(mrr / suscriptores) : 0,
    mrr,
    mrrMeta: MODELO.metaIngresoMensual,
    ingresoProyectado: Math.round(proyectado),
    suscriptoresParaMeta: arpuHipotetico ? Math.ceil(MODELO.metaIngresoMensual / arpuHipotetico) : null,
    sinPais,
    canales,
    paises: paises.size,
    hospitales: hospitales.size
  };
}

/* ------------------------------------------------------- Mapa de ingreso
   Dónde están los residentes y qué paga cada uno en su moneda. La proyección se ancla en los
   ENGANCHADOS y no en los registrados: un registro no dice nada sobre pagar, y proyectar sobre él
   es como contar pacientes por la sala de espera. La tasa está declarada en `MODELO`. */
export function resumenPorMoneda(users, ahora = Date.now()) {
  const filas = {};
  users.forEach(u => {
    const codigo = monedaDe(u['rm:profile-country']);
    const precio = precioDe(u['rm:profile-country']);
    const fila = filas[codigo] || (filas[codigo] = {
      moneda: codigo, mensual: precio.mensual, anual: precio.anual, mensualMXN: precio.mensualMXN,
      registrados: 0, activos30: 0, enganchados: 0, proyectado: 0, sinPais: 0, paises: new Set()
    });
    fila.registrados++;
    if (!precio.reconocido) fila.sinPais++;
    else fila.paises.add(normalizaPais(u['rm:profile-country']));
    if (ultimaActividad(u) && ahora - ultimaActividad(u) <= 30 * DIA) fila.activos30++;
    if (preguntasRespondidas(u) >= MODELO.umbralEnganche) {
      fila.enganchados++;
      fila.proyectado += precio.mensualMXN * MODELO.conversionEnganchados / 100;
    }
  });
  return Object.values(filas)
    .map(f => ({ ...f, paises: f.paises.size, proyectado: Math.round(f.proyectado) }))
    .sort((a, b) => b.registrados - a.registrados || a.moneda.localeCompare(b.moneda));
}

/* Cobertura del temario: cuántos de los ítems del temario holístico tienen tema construido.
   Recibe los bloques en vez de importarlos para poder probarla con un árbol de juguete, y porque
   un bloque puede traer `groups` o `clusters` sueltos (las dos formas existen hoy). */
export function coberturaTemario(blocks) {
  const clustersOf = b => (b.groups ? b.groups.flatMap(g => g.clusters) : b.clusters) || [];
  let totales = 0, construidos = 0;
  (blocks || []).forEach(b => clustersOf(b).forEach(c => (c.items || []).forEach(it => {
    totales++;
    if (typeof it !== 'string' && it && it.topicId) construidos++;
  })));
  return { totales, construidos, pct: totales ? Math.round((construidos / totales) * 100) : 0 };
}

/* ------------------------------------------------------- Las cinco puertas
   Una escalera, no un tablero: cada puerta solo se abre con la anterior abierta, y mientras una
   esté cerrada las de abajo son una distracción. `valor` y `meta` son comparables en la misma
   unidad para que la barra no mienta. `cobertura` es el % del temario con tema construido, que
   se calcula fuera (lo sabe el registry, no los usuarios). */
export function puertas(m, cobertura) {
  const lista = [
    {
      titulo: 'Tracción',
      meta: `${MODELO.metaTraccion} residentes registrados`,
      porque: 'Debajo de esto no hay señal: cualquier cifra de uso es ruido de una decena de personas.',
      valor: m.total, objetivo: MODELO.metaTraccion, unidad: ''
    },
    {
      titulo: 'Activación',
      meta: `${MODELO.metaActivacion}% contesta al menos una pregunta`,
      porque: 'Registrarse no es usar. Quien no contestó una sola pregunta nunca vio lo que la herramienta hace.',
      valor: m.pctActivados || 0, objetivo: MODELO.metaActivacion, unidad: '%'
    },
    {
      titulo: 'Hábito',
      meta: `${MODELO.metaHabito}% de los activos del mes vuelve cada semana`,
      porque: 'Nadie paga una mensualidad por algo que abre una vez al mes. El hábito es el permiso para cobrar.',
      valor: m.habito || 0, objetivo: MODELO.metaHabito, unidad: '%'
    },
    {
      titulo: 'Retención',
      meta: `${MODELO.metaRetencion}% de la cohorte de más de 30 días sigue viva`,
      porque: 'Sin retención, cada peso de difusión se gasta en reponer a quien se fue.',
      valor: m.retencion || 0, objetivo: MODELO.metaRetencion, unidad: '%'
    },
    {
      titulo: 'Cobro',
      meta: `${MODELO.metaIngresoMensual.toLocaleString('es-MX')} ${MODELO.monedaBase} al mes`,
      porque: `La meta es el dinero, no el número de cabezas: con la mezcla de países de hoy son ${m.suscriptoresParaMeta === null ? 'todavía incalculables las' : m.suscriptoresParaMeta} suscripciones.`,
      valor: m.mrr, objetivo: MODELO.metaIngresoMensual, unidad: ' MXN', miles: true
    }
  ];

  // La puerta del producto no va en la escalera porque no depende de los usuarios, pero decide lo
  // mismo: nadie paga por un temario a medias. Se intercala antes del cobro.
  if (typeof cobertura === 'number') {
    lista.splice(4, 0, {
      titulo: 'Producto',
      meta: `${MODELO.metaCobertura}% del temario con tema construido`,
      porque: 'Un residente paga por el temario completo de su año, no por las áreas que ya hay.',
      valor: cobertura, objetivo: MODELO.metaCobertura, unidad: '%'
    });
  }

  let anteriorAbierta = true;
  return lista.map((p, i) => {
    const abierta = p.valor >= p.objetivo;
    const estado = abierta ? 'abierta' : anteriorAbierta ? 'actual' : 'pendiente';
    anteriorAbierta = anteriorAbierta && abierta;
    return {
      ...p,
      n: i + 1,
      abierta,
      estado,
      avance: p.objetivo ? Math.min(100, Math.round((p.valor / p.objetivo) * 100)) : 0
    };
  });
}

/* ------------------------------------------------------------------ Pintado */

const mxn = n => Math.round(n).toLocaleString('es-MX');
const cifra = (p, v) => (p.miles ? mxn(v) : v) + p.unidad;

function barraHTML(avance, estado) {
  const color = estado === 'abierta' ? 'var(--shell)' : estado === 'actual' ? 'var(--accent-fg)' : 'var(--ink-faint)';
  return `<div class="meta-barra"><span style="width:${avance}%;background:${color};"></span></div>`;
}

function puertasHTML(lista) {
  const ETIQUETA = { abierta: 'Abierta', actual: 'Aquí estamos', pendiente: 'Después' };
  return lista.map(p => `
    <div class="meta-puerta meta-puerta--${p.estado}">
      <div class="meta-puerta-cab">
        <span class="meta-puerta-n">${p.n}</span>
        <span class="meta-puerta-tit">${esc(p.titulo)}</span>
        <span class="meta-puerta-estado">${ETIQUETA[p.estado]}</span>
      </div>
      <div class="meta-puerta-meta">${esc(p.meta)}</div>
      ${barraHTML(p.avance, p.estado)}
      <div class="meta-puerta-cifra">${cifra(p, p.valor)} de ${cifra(p, p.objetivo)}<span> · ${p.avance}%</span></div>
      <div class="meta-puerta-porque">${esc(p.porque)}</div>
    </div>`).join('');
}

function embudoHTML(m) {
  const fila = (etiqueta, valor, nota) => `
    <tr>
      <td>${esc(etiqueta)}</td>
      <td class="mono" style="font-weight:600;">${valor}</td>
      <td>${m.total ? Math.round((valor / m.total) * 100) + '%' : '–'}</td>
      <td class="meta-nota-celda">${esc(nota)}</td>
    </tr>`;
  return `<div class="admin-table-wrap"><table class="admin-table">
    <thead><tr><th>Peldaño</th><th>Residentes</th><th>Del total</th><th>Qué significa</th></tr></thead>
    <tbody>
      ${fila('Registrados', m.total, 'Crearon cuenta.')}
      ${fila('Activados', m.activados, 'Respondieron al menos una pregunta.')}
      ${fila('Activos (30 días)', m.activos30, 'Dejaron huella en el último mes.')}
      ${fila('Activos (7 días)', m.activos7, 'Estudiaron esta semana. La estrella polar.')}
      ${fila('Enganchados', m.enganchados, `${MODELO.umbralEnganche} preguntas o más. Son los que pagarían.`)}
      ${fila('Suscriptores', m.suscriptores, 'Pagan. Todavía no hay cobro, así que vale 0 por diseño.')}
    </tbody>
  </table></div>`;
}

function canalesHTML(canales) {
  const filas = Object.entries(canales).sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `<tr><td>${esc(k)}</td><td class="mono">${v}</td></tr>`).join('');
  if (!filas) return `<p class="home-subhead-note">Nadie ha declarado cómo nos conoció.</p>`;
  return `<div class="admin-table-wrap"><table class="admin-table">
    <thead><tr><th>Cómo nos conoció</th><th>Residentes</th></tr></thead>
    <tbody>${filas}</tbody></table></div>`;
}

function preciosHTML(users, m, ahora) {
  const porMoneda = {};
  resumenPorMoneda(users, ahora).forEach(f => { porMoneda[f.moneda] = f; });
  const cuerpo = catalogoPrecios()
    .map(c => ({ ...c, uso: porMoneda[c.moneda] || { registrados: 0, enganchados: 0, proyectado: 0 } }))
    .sort((a, b) => b.uso.registrados - a.uso.registrados || a.moneda.localeCompare(b.moneda))
    .map(c => `<tr${c.uso.registrados ? '' : ' style="opacity:.55;"'}>
      <td class="meta-celda-ancha">${esc(c.nombre)} · ${esc(c.moneda)}</td>
      <td class="mono">${esc(formatoPrecio(c.mensual, c.moneda, false))}</td>
      <td class="mono">${esc(formatoPrecio(c.anual, c.moneda, false))}</td>
      <td class="mono">${mxn(c.mensualMXN)}</td>
      <td class="mono">${c.uso.registrados}</td>
      <td class="mono" style="font-weight:600;">${mxn(c.uso.proyectado)}</td>
    </tr>`).join('');
  const totalProy = Object.values(porMoneda).reduce((n, f) => n + f.proyectado, 0);
  return `<p class="home-subhead-note">Un solo precio en todo el mundo, en la moneda de cada quien:
      el ancla es <strong>${ANCLA.mensual} ${ANCLA.moneda} al mes</strong> y lo demás es esa misma
      ancla convertida y redondeada a un número atractivo de cada moneda. La columna en MXN enseña
      cuánto se separa cada una de la paridad por el redondeo. La proyección supone que paga
      ${MODELO.conversionEnganchados} de cada 100 <strong>enganchados</strong>, no de los
      registrados. Tipos de cambio aproximados a ${esc(TIPOS.fecha)}: sirven para dirigir, no para
      facturar, y antes de publicar un precio se confirma con la pasarela.</p>
    <div class="admin-table-wrap"><table class="admin-table">
      <thead><tr><th>Moneda</th><th>Al mes</th><th>Al año</th><th>≈ MXN</th><th>Res.</th><th>Proy./mes</th></tr></thead>
      <tbody>${cuerpo}</tbody>
      <tfoot><tr>
        <td style="font-weight:600;">Total</td><td></td><td></td><td></td>
        <td class="mono">${m.total}</td>
        <td class="mono" style="font-weight:600;">${mxn(totalProy)}</td>
      </tr></tfoot>
    </table></div>
    ${m.sinPais ? `<p class="home-subhead-note">${m.sinPais} ${m.sinPais === 1 ? 'residente no declaró un país reconocible, así que se le cobraría' : 'residentes no declararon un país reconocible, así que se les cobraría'} en ${MONEDAS['USD'].nombre}. Si aparece un país nuevo, añádelo a <span class="mono">engine/precios.js</span>.</p>` : ''}`;
}

function horizontesHTML(m) {
  const filas = MODELO.horizontes.map(h => {
    const avance = Math.min(100, Math.round((m.mrr / h.mxn) * 100));
    const suscripciones = m.arpuHipotetico ? Math.ceil(h.mxn / m.arpuHipotetico) : null;
    return `<tr>
      <td style="font-weight:600;">${esc(h.nombre)}</td>
      <td class="mono">${mxn(h.mxn)} MXN</td>
      <td class="mono">${suscripciones === null ? '–' : suscripciones}</td>
      <td class="mono">${avance}%</td>
      <td class="meta-nota-celda">${esc(h.que)}</td>
    </tr>`;
  }).join('');
  return `<p class="home-subhead-note">La meta declarada es la de en medio. La primera dice cuándo
      el proyecto deja de costar dinero; la tercera está aquí porque el techo no lo pone el nicho.
      Las suscripciones se calculan con el ingreso medio de los residentes que ya hay
      (${mxn(m.arpuHipotetico)} MXN), así que se mueven solas cuando cambia la mezcla de países.</p>
    <div class="admin-table-wrap"><table class="admin-table">
      <thead><tr><th>Horizonte</th><th>Al mes</th><th>Suscripciones</th><th>Avance</th><th>Qué desbloquea</th></tr></thead>
      <tbody>${filas}</tbody>
    </table></div>`;
}

/* `cobertura` es { construidos, totales, pct } o null si no se pudo calcular. */
export function metasHTML(users, cobertura, ahora = Date.now()) {
  const m = calcularMetricas(users, ahora);
  const lista = puertas(m, cobertura ? cobertura.pct : undefined);
  const abiertas = lista.filter(p => p.abierta).length;
  const actual = lista.find(p => p.estado === 'actual');

  return `
    <div class="meta-norte">
      <div class="meta-norte-cifras">
        <div class="meta-norte-uno">
          <span class="meta-norte-n">${m.activos7}</span>
          <span class="meta-norte-l">Estudiaron esta semana</span>
          <span class="meta-norte-sub">Meta: ${MODELO.metaActivosSemana}</span>
        </div>
        <div class="meta-norte-uno">
          <span class="meta-norte-n">${mxn(m.mrr)}</span>
          <span class="meta-norte-l">${MODELO.monedaBase} al mes</span>
          <span class="meta-norte-sub">Meta: ${mxn(m.mrrMeta)}${m.suscriptoresParaMeta === null ? '' : ' (' + m.suscriptoresParaMeta + ' suscripciones)'}</span>
        </div>
        <div class="meta-norte-uno">
          <span class="meta-norte-n">${abiertas}/${lista.length}</span>
          <span class="meta-norte-l">Puertas abiertas</span>
          <span class="meta-norte-sub">${actual ? 'Toca: ' + esc(actual.titulo) : 'Todas abiertas'}</span>
        </div>
      </div>
      <p class="meta-norte-pie">La estrella polar no es el número de registros: es cuántos residentes
        abren MIOsler en una semana cualquiera. Un registro es una promesa; una semana de uso es una
        deuda que se puede cobrar.</p>
    </div>

    <div class="meta-puertas">${puertasHTML(lista)}</div>

    <h3 class="meta-h3">El embudo, hoy</h3>
    ${embudoHTML(m)}

    <h3 class="meta-h3">Alcance y difusión</h3>
    <div class="home-progress-stats">
      <div class="home-stat"><span class="home-stat-n">${m.nuevos30}</span><span class="home-stat-l">Registros en 30 días</span></div>
      <div class="home-stat"><span class="home-stat-n">${m.nuevos7}</span><span class="home-stat-l">Registros en 7 días</span></div>
      <div class="home-stat"><span class="home-stat-n">${m.hospitales}</span><span class="home-stat-l">Hospitales distintos</span></div>
      <div class="home-stat"><span class="home-stat-n">${m.paises}</span><span class="home-stat-l">Países distintos</span></div>
      <div class="home-stat"><span class="home-stat-n">${m.habito === null ? '–' : m.habito + '%'}</span><span class="home-stat-l">Hábito (semana/mes)</span></div>
      <div class="home-stat"><span class="home-stat-n">${m.retencion === null ? '–' : m.retencion + '%'}</span><span class="home-stat-l">Retención a 30 días</span></div>
    </div>
    ${canalesHTML(m.canales)}

    <h3 class="meta-h3">La lista de precios del mundo</h3>
    ${preciosHTML(users, m, ahora)}

    <h3 class="meta-h3">Los tres horizontes</h3>
    ${horizontesHTML(m)}

    <h3 class="meta-h3">Producto y precio</h3>
    <div class="home-progress-stats">
      <div class="home-stat"><span class="home-stat-n">${cobertura ? cobertura.construidos + '/' + cobertura.totales : '–'}</span><span class="home-stat-l">Temario cubierto${cobertura ? ' (' + cobertura.pct + '%)' : ''}</span></div>
      <div class="home-stat"><span class="home-stat-n">${ANCLA.mensual}</span><span class="home-stat-l">${ANCLA.moneda}/mes (ancla)</span></div>
      <div class="home-stat"><span class="home-stat-n">${ANCLA.anual}</span><span class="home-stat-l">${ANCLA.moneda}/año (ancla)</span></div>
      <div class="home-stat"><span class="home-stat-n">${mxn(m.arpuHipotetico)}</span><span class="home-stat-l">Ingreso medio por residente (MXN)</span></div>
      <div class="home-stat"><span class="home-stat-n">${m.preguntasTotales.toLocaleString('es-MX')}</span><span class="home-stat-l">Preguntas respondidas (grupo)</span></div>
    </div>
    <p class="home-subhead-note">Los precios son hipótesis, no compromisos: se validan con un botón
      de pago a los enganchados, no con una encuesta. Viven en <span class="mono">engine/precios.js</span>;
      los umbrales de la meta, en <span class="mono">MODELO</span> dentro de
      <span class="mono">engine/admin-metas.js</span>. El razonamiento de cada número está en
      <span class="mono">Osler.md</span>.</p>`;
}
