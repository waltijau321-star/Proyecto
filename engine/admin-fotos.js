// engine/admin-fotos.js
// La foto semanal del panel "Camino a la meta": la serie que al panel le faltaba.
//
// POR QUÉ EXISTE. El panel enseñaba el día de hoy y nada más, y la bitácora de `Osler.md` tiene
// decisiones que se revierten "si a los dos meses no sube X". Sin una serie esa pregunta no la
// puede contestar nadie: ni si la acción del día movió el hábito, ni si la tarjeta del enlace
// trajo registros. Aquí se guarda una foto de los totales del panel por semana, y con dos fotos
// ya hay comparación.
//
// QUÉ ES EL DATO. Los mismos totales que el panel ya pinta (cuántos registrados, cuántos activos,
// cuántos retenidos), con numerador y denominador por separado para que una definición que se
// corrija más adelante se pueda recalcular sobre lo guardado. NO lleva nada de ningún residente:
// ni un nombre, ni un uid, ni un tema. No es un dato nuevo que se recoja de nadie, es la suma de
// lo que este panel ya lee, y vive en el documento del propio administrador (`users/{uid}`) vía
// syncSet. Cada administrador lleva su serie.
//
// TRES COSAS QUE NO SON ESTILO:
// 1. **La foto se toma al abrir el Admin, no sola.** No hay servidor que la tome el domingo a
//    medianoche. Una semana en que nadie abre el panel no tiene foto, y la tabla lo dice con una
//    fila propia en vez de hacer pasar un salto de tres semanas por el cambio de una.
// 2. **De cada semana queda la última vista**, que es la más cercana a la semana completa, y solo
//    se reescribe si alguna cifra cambió: abrir el panel diez veces no son diez escrituras.
// 3. **Antes de escribir se une con la copia de la nube** que el propio panel acaba de traer (el
//    documento del administrador viene en `fetchAllUsers`, y `admin.js` lo aparta ANTES de sacar
//    al administrador de la lista). Sin eso, un segundo dispositivo con el estado local atrasado
//    escribiría su mapa y podría pisar la semana que guardó el primero. La misma unión está
//    declarada en `strategyFor` de cloud-sync.js ('mapa-reciente') para la fusión del arranque:
//    semanas de los dos lados y, de una misma semana, la foto más reciente.
import { syncGet, syncSet, mergeValue } from './cloud-sync.js';
import { diaLocal, lunesDe, fechaDe } from './racha.js';

export const FOTOS_KEY = 'rm:admin-fotos';

// Filas que pinta la tabla: un trimestre. La serie guardada no se recorta (ver `anotarFoto`).
export const SEMANAS_A_LA_VISTA = 12;

// La comparación de cabecera mira ocho semanas atrás porque ese es el plazo de la bitácora:
// "si a los dos meses no sube...". Con una serie más corta se compara contra la foto más antigua
// y se dice cuántas semanas son, en vez de callar hasta que pasen dos meses.
export const SEMANAS_DE_JUICIO = 8;

// Lo que lleva una foto además de su marca de tiempo `t`. Todo son enteros.
const CAMPOS = ['total', 'activados', 'activos7', 'activos30', 'enganchados', 'madura', 'retenidos',
  'suscriptores', 'mrr', 'preguntas', 'construidos', 'items'];

/* Cifras que se anadieron DESPUES de las primeras fotos (19/11/2026, el uso de las fichas de
   repaso: ver `usoDeFichas` en admin-metas.js). Las fotos viejas no las traen y SIGUEN SIENDO
   VALIDAS: meterlas en CAMPOS habria hecho que `esFoto` descartara, en silencio, la serie entera ya
   guardada, sin un error ni una fila menos que lo delatara. Si estan presentes tienen que ser
   numeros; si no lo son, se quitan de la foto y la foto se queda.
   Una foto solo las lleva si el panel pudo contarlas (se le pasaron los bancos): un cero inventado
   seria una foto falsa. Y si algun dia cambia PREGUNTAS_PARA_FICHAS, la serie de `conDiez` deja de
   ser comparable con la anterior: anotarlo en la bitacora de Osler.md. */
const OPCIONALES = ['conDiez', 'desbloquearon', 'conFichas'];

const DIA = 86400000;

// La misma fórmula que `pct` en admin-metas.js. Una prueba compara las dos sobre la misma cohorte:
// si algún día una redondea distinto, la tabla y las puertas dejarían de decir lo mismo.
const pct = (a, b) => (b ? Math.round((a / b) * 100) : null);

/* ---------------- La foto, pura ---------------- */

// La semana se nombra por su lunes en hora LOCAL ('YYYY-MM-DD'), igual que la racha de Inicio.
export function semanaDe(ahora = Date.now()) {
  return diaLocal(lunesDe(new Date(ahora)));
}

/* `m` es lo que devuelve `calcularMetricas` y `cobertura` lo que devuelve `coberturaTemario`.
   Se reciben ya calculados para que este módulo no importe admin-metas.js: es admin-metas el que
   importa de aquí la tabla, y los dos no pueden importarse entre sí. */
export function fotoDe(m, cobertura, ahora = Date.now()) {
  const n = v => (Number.isFinite(v) ? Math.round(v) : 0);
  const f = {
    t: ahora,
    total: n(m.total),
    activados: n(m.activados),
    activos7: n(m.activos7),
    activos30: n(m.activos30),
    enganchados: n(m.enganchados),
    madura: n(m.cohorteMadura),
    retenidos: n(m.retenidos),
    suscriptores: n(m.suscriptores),
    mrr: n(m.mrr),
    preguntas: n(m.preguntasTotales),
    construidos: n(cobertura && cobertura.construidos),
    items: n(cobertura && cobertura.totales)
  };
  if (m.fichas) {
    f.conDiez = n(m.fichas.conDiez);
    f.desbloquearon = n(m.fichas.desbloquearon);
    f.conFichas = n(m.fichas.conFichas);
  }
  return f;
}

function esFoto(v) {
  return !!v && typeof v === 'object' && Number.isFinite(v.t) && CAMPOS.every(c => Number.isFinite(v[c]));
}

// Un opcional presente que no es un numero se quita de la foto, y la foto se queda (ver OPCIONALES).
function sinOpcionalesTorcidos(f) {
  const malos = OPCIONALES.filter(c => c in f && !Number.isFinite(f[c]));
  if (!malos.length) return f;
  const g = { ...f };
  malos.forEach(c => { delete g[c]; });
  return g;
}

// Solo lo que de verdad es una foto, con las semanas en orden. Lo que venga torcido (un campo de
// la nube escrito por otra versión, una clave que no es una fecha) se queda fuera en vez de
// llegar a la tabla, y como todo lo que pasa son números la tabla no tiene nada que escapar.
export function fotosValidas(fotos) {
  const out = {};
  if (!fotos || typeof fotos !== 'object' || Array.isArray(fotos)) return out;
  Object.keys(fotos).sort().forEach(k => { if (fechaDe(k) && esFoto(fotos[k])) out[k] = sinOpcionalesTorcidos(fotos[k]); });
  return out;
}

/* Une lo local con la copia de la nube y anota la foto de esta semana. Devuelve la serie y si
   hay algo que escribir.

   No se recorta nunca: una foto pesa unos 190 bytes, así que un año entero son 10 KB en un
   documento que admite 1 MiB. Recortar ahorraría nada y tiraría justo la historia que este
   módulo existe para guardar. */
export function anotarFoto(local, nube, foto, semana) {
  const unidas = fotosValidas(mergeValue(FOTOS_KEY, fotosValidas(local), fotosValidas(nube)));
  const previa = unidas[semana];
  // Si las cifras son las mismas se conserva la foto que ya había, con su hora: el `t` dice cuándo
  // se VIO ese estado por primera vez, no cuándo se abrió el panel por última vez.
  // Las cifras opcionales solo cuentan si la foto nueva las trae: una semana guardada SIN ellas
  // (con la version anterior del panel) se rehace con ellas, y una foto tomada sin los bancos no
  // borra las que la semana ya tenia.
  const distinta = !previa
    || CAMPOS.some(c => previa[c] !== foto[c])
    || OPCIONALES.some(c => foto[c] !== undefined && previa[c] !== foto[c]);
  if (distinta) {
    unidas[semana] = { ...foto };
    OPCIONALES.forEach(c => {
      if (foto[c] === undefined && previa && previa[c] !== undefined) unidas[semana][c] = previa[c];
    });
  }
  const fotos = fotosValidas(unidas);
  return { fotos, cambio: JSON.stringify(fotos) !== JSON.stringify(local || {}) };
}

// Las siete cifras que pinta la tabla, derivadas de una foto. Exportada para la prueba que las
// compara con las del panel.
export function lecturaDeFoto(f) {
  // Una foto sin las cifras de fichas (las de antes del 19/11/2026) las lee como null, que la
  // tabla pinta con un guion; nunca como cero, que diria que nadie las uso.
  const opcional = c => (Number.isFinite(f[c]) ? f[c] : null);
  return {
    registrados: f.total,
    activacion: pct(f.activados, f.total),
    activos7: f.activos7,
    habito: pct(f.activos7, f.activos30),
    retencion: pct(f.retenidos, f.madura),
    enganchados: f.enganchados,
    temario: pct(f.construidos, f.items),
    conDiez: opcional('conDiez'),
    desbloquearon: opcional('desbloquearon'),
    conFichas: opcional('conFichas')
  };
}

/* ---------------- Lectura y escritura ---------------- */

export function leerFotos() { return syncGet(FOTOS_KEY, {}) || {}; }

// `nube` es el campo `rm:admin-fotos` del documento del administrador tal como acaba de llegar de
// Firestore, o undefined si no lo trae. Devuelve la serie ya unida, que es la que se pinta.
export function registrarFotoSemanal(m, cobertura, nube, ahora = Date.now()) {
  const { fotos, cambio } = anotarFoto(leerFotos(), nube, fotoDe(m, cobertura, ahora), semanaDe(ahora));
  if (cambio) syncSet(FOTOS_KEY, fotos);
  return fotos;
}

/* ---------------- Pintado ---------------- */

const COLUMNAS = [
  { k: 'registrados', titulo: 'Registrados', u: '' },
  { k: 'activacion', titulo: 'Activación', u: '%' },
  { k: 'activos7', titulo: 'Activos (7 días)', u: '' },
  { k: 'habito', titulo: 'Hábito', u: '%' },
  { k: 'retencion', titulo: 'Retención', u: '%' },
  { k: 'enganchados', titulo: 'Enganchados', u: '' },
  { k: 'temario', titulo: 'Temario', u: '%' }
];

// Las tres cifras del uso de las fichas van en una SEGUNDA tabla y no como tres columnas mas: la
// principal ya llena los 935 px de un portatil con ocho, y con once habria que desplazarla de lado.
// `umbral` es PREGUNTAS_PARA_FICHAS, que vive en admin-metas.js y no se puede importar aqui (ese
// modulo importa este): lo pasa quien llama.
function columnasDeFichas(umbral) {
  return [
    { k: 'conDiez', titulo: umbral ? `Con ${umbral} preguntas` : 'Con pocas preguntas', u: '' },
    { k: 'desbloquearon', titulo: 'Desbloquearon fichas', u: '' },
    { k: 'conFichas', titulo: 'Calificaron fichas', u: '' }
  ];
}

// Semanas de la `a` (más antigua) a la `b`. Se redondea porque entre dos medianoches locales no
// siempre hay un múltiplo exacto de 24 horas: el cambio de horario mete o quita una.
function semanasEntre(a, b) {
  return Math.round((fechaDe(b) - fechaDe(a)) / (7 * DIA));
}

function fechaCorta(semana) {
  return fechaDe(semana).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
}

const valor = (v, u) => (v === null ? '–' : v + u);

// El cambio frente a la foto anterior, con signo escrito: no depende del color para leerse. En
// las columnas de porcentaje son puntos, no un porcentaje del porcentaje.
function deltaHTML(ahora, antes, u) {
  if (ahora === null || antes === null) return '';
  const d = ahora - antes;
  const texto = d === 0 ? '=' : (d > 0 ? '+' : '−') + Math.abs(d) + (u === '%' ? ' pts' : '');
  // El espacio de delante es para quien copia la fila o la oye leída: sin él, "118" y "+6" se
  // juntan en "118+6".
  return ` <span class="foto-delta">${texto}</span>`;
}

function resumenHTML(orden) {
  if (!orden.length) return `<p class="home-subhead-note">Todavía no hay ninguna foto guardada.</p>`;
  const ultima = orden[0];
  if (orden.length === 1) {
    const f = fechaDe(ultima.semana);
    const proximoLunes = diaLocal(new Date(f.getFullYear(), f.getMonth(), f.getDate() + 7));
    return `<p class="home-subhead-note"><strong>Esta es la primera foto de la serie.</strong> La
      comparación aparece con la segunda, a partir del lunes ${fechaCorta(proximoLunes)}.</p>`;
  }
  // La referencia es la foto más reciente que ya tenga el plazo de juicio; si la serie es más
  // corta, la más antigua que haya.
  const ref = orden.slice(1).find(x => semanasEntre(x.semana, ultima.semana) >= SEMANAS_DE_JUICIO)
    || orden[orden.length - 1];
  const n = semanasEntre(ref.semana, ultima.semana);
  const dato = (v, u) => (v === null ? 'sin dato' : v + u);
  const par = (nombre, k, u) => `${nombre} de ${dato(ref.l[k], u)} a ${dato(ultima.l[k], u)}`;
  return `<p class="home-subhead-note">En ${n === 1 ? 'una semana' : n + ' semanas'}, desde la foto
    del ${fechaCorta(ref.semana)}: <strong>${par('registrados', 'registrados', '')}</strong>;
    ${par('activación', 'activacion', '%')}; ${par('hábito', 'habito', '%')};
    ${par('retención', 'retencion', '%')}.</p>`;
}

export function tendenciaHTML(fotos, ahora = Date.now(), umbralFichas = null) {
  const estaSemana = semanaDe(ahora);
  // Una semana del futuro (reloj mal puesto en otro dispositivo) no se pinta: sería la primera
  // fila de la tabla y la referencia de todos los cambios.
  const orden = Object.entries(fotosValidas(fotos))
    .filter(([semana]) => semana <= estaSemana)
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([semana, foto]) => ({ semana, l: lecturaDeFoto(foto) }));

  const filas = orden.slice(0, SEMANAS_A_LA_VISTA).map((x, i) => {
    const anterior = orden[i + 1] || null;
    const celdas = COLUMNAS.map(c => `<td class="mono">${valor(x.l[c.k], c.u)}${
      anterior ? deltaHTML(x.l[c.k], anterior.l[c.k], c.u) : ''}</td>`).join('');
    const enCurso = x.semana === estaSemana ? ' <span class="foto-encurso">en curso</span>' : '';
    const sinFoto = anterior && i + 1 < SEMANAS_A_LA_VISTA ? semanasEntre(anterior.semana, x.semana) - 1 : 0;
    return `<tr><td>${fechaCorta(x.semana)}${enCurso}</td>${celdas}</tr>${sinFoto > 0
      ? `<tr class="foto-hueco"><td colspan="${COLUMNAS.length + 1}">Sin foto: ${sinFoto === 1
        ? '1 semana' : sinFoto + ' semanas'} en que no se abrió este panel.</td></tr>` : ''}`;
  }).join('');

  // El uso de las fichas: solo si alguna foto lo trae. Sin eso seria una tabla entera de guiones.
  const colsF = columnasDeFichas(umbralFichas);
  const hayFichas = orden.some(x => colsF.some(c => x.l[c.k] !== null));
  const filasF = !hayFichas ? '' : orden.slice(0, SEMANAS_A_LA_VISTA).map((x, i) => {
    const anterior = orden[i + 1] || null;
    const celdas = colsF.map(c => `<td class="mono">${valor(x.l[c.k], c.u)}${
      anterior ? deltaHTML(x.l[c.k], anterior.l[c.k], c.u) : ''}</td>`).join('');
    const enCurso = x.semana === estaSemana ? ' <span class="foto-encurso">en curso</span>' : '';
    return `<tr><td>${fechaCorta(x.semana)}${enCurso}</td>${celdas}</tr>`;
  }).join('');

  return `<p class="home-subhead-note">Una foto de estos totales por semana, guardada al abrir
      este panel: de cada semana queda la última vista. La cifra pequeña es el cambio frente a la
      foto anterior. Son sumas, sin datos de ningún residente, y viven en tu propio documento.</p>
    ${resumenHTML(orden)}
    ${filas ? `<div class="admin-table-wrap"><table class="admin-table">
      <thead><tr><th>Semana del</th>${COLUMNAS.map(c => `<th>${c.titulo}</th>`).join('')}</tr></thead>
      <tbody>${filas}</tbody>
    </table></div>` : ''}
    ${filasF ? `<p class="home-subhead-note" style="margin-top:18px;"><strong>Uso de las fichas de repaso, semana a semana.</strong>
      Las semanas guardadas antes de que existieran estas cifras no las traen y se ven con un guion.</p>
    <div class="admin-table-wrap"><table class="admin-table">
      <thead><tr><th>Semana del</th>${colsF.map(c => `<th>${c.titulo}</th>`).join('')}</tr></thead>
      <tbody>${filasF}</tbody>
    </table></div>` : ''}`;
}
