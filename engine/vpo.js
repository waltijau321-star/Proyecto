// engine/vpo.js
// Motor de la sección Valoración Preoperatoria (VPO).
//
// VPO no es un tema del registry: es un área propia del shell con pestañas internas
// (Ruta · Escalas · Fármacos · Estudios · Nota). Este módulo solo gestiona la barra de
// pestañas, el montaje perezoso de cada una y la persistencia de la pestaña activa; el
// contenido de cada pestaña vive en protocols/vpo-*.js y se monta con el motor que le
// corresponda (el de calculadoras para Escalas, propios para el resto).
//
// Las pestañas se declaran en TABS y solo se renderiza la barra cuando hay más de una,
// de modo que cada fase de desarrollo puede dar de alta la suya sin exponer pestañas
// vacías en producción.

import { calculators, combinedNote } from '../protocols/vpo-calc.js';
import { farmacos, grupos as farmacoGrupos, CONDUCTAS } from '../protocols/vpo-farmacos.js';
import { pasos, veredictos, TONOS, PRIMER_PASO, FUENTE as RUTA_FUENTE } from '../protocols/vpo-ruta.js';
import { estudios, gruposEstudio } from '../protocols/vpo-estudios.js';
import { mountCalculators, setCalcTopic, openCalc, openModalShell, setResultListener } from './calculators.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { loadTopic } from '../topics/registry.js';

const TAB_KEY = 'rm:vpo:tab';
const FARMACOS_KEY = 'rm:vpo:farmacos';
const RUTA_KEY = 'rm:vpo:ruta';
const ACCENT = '#3d5a73';

// El motor de calculadoras consume la forma { meta, calculators, combinedNote } de un tema.
// VPO no es un tema, así que se le pasa este objeto sintético con el acento del área.
const calcTopic = { meta: { accent: ACCENT }, calculators, combinedNote };

// Escalas que ya viven en un tema de estudio y que la VPO necesita a menudo. Se enlazan en
// vez de duplicarse: una segunda copia de Child-Pugh es una segunda copia que mantener.
const ESCALAS_DE_TEMAS = [
  { topicId: 'cirrosis-hepatica', key: 'childpugh', titulo: 'Child-Pugh', porque: 'Gravedad de la cirrosis: el riesgo quirúrgico del cirrótico se dispara a partir de Child-Pugh B.' },
  { topicId: 'cirrosis-hepatica', key: 'meldna', titulo: 'MELD-Na', porque: 'Mortalidad a 90 días; orienta si conviene diferir una cirugía electiva en el paciente con hepatopatía.' }
];

function mountEscalas(pane) {
  mountCalculators(calcTopic, pane, {
    heading: 'Valoración preoperatoria (VPO)',
    intro: 'Escalas de riesgo perioperatorio. La nota combinada incluye las 6 escalas de riesgo ya expandidas, ya que casi siempre se calculan juntas para el mismo paciente. El puente de anticoagulación va aparte: solo aplica al paciente anticoagulado.',
    showExtras: false
  });
  const body = pane.querySelector('.sec-body');
  if (!body) return;
  const cards = ESCALAS_DE_TEMAS.map(e => `
    <div class="comp-card" style="--c:${ACCENT}" onclick="rmVpoEscalaTema('${e.topicId}','${e.key}')">
      <h4>${e.titulo}</h4><p>${e.porque}</p>
      <div class="open-hint">Abrir →</div>
    </div>`).join('');
  const extra = document.createElement('div');
  extra.innerHTML = `
    <h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:28px 0 6px;">Escalas de otros temas</h3>
    <p style="color:var(--ink-faint);font-size:12.5px;margin:0 0 12px;">Viven en su tema de estudio; se abren desde aquí para no mantener una segunda copia.</p>
    <div class="calc-launch-grid">${cards}</div>`;
  body.appendChild(extra);
}

// Abre una calculadora que pertenece a un tema del registro. Carga el tema si hace falta
// (ALL_TOPICS solo se puebla al visitar la sección Calc, así que no se puede dar por hecho)
// y devuelve el contexto a VPO enseguida: una vez abierto, el modal ya no consulta
// CALC_TOPIC, pero la siguiente escala de VPO que se abra sí lo hace.
export async function abrirEscalaDeTema(topicId, key) {
  const topic = await loadTopic(topicId);
  if (!topic) return;
  setCalcTopic(topic);
  openCalc(key);
  setCalcTopic(calcTopic);
}

/* ==================== Listas marcables (Fármacos y Estudios) ====================
   Las dos pestañas comparten toda la mecánica: buscador que ignora acentos, acordeón por
   grupo, chip de color y botón para marcar el ítem hacia la nota. Lo único que cambia son
   los datos y cómo se rotula cada fila, así que se declara una vez y se instancia dos.
   Antes eran seis pares de funciones casi idénticas, con el riesgo de arreglar un lado y
   olvidar el otro. */

// Normaliza para buscar sin acentos ni mayúsculas: "apixaban" debe encontrar "Apixában".
function norm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const LISTAS = {};

function listaMarcable(cfg) {
  const { prefijo, clave, items, grupos, nombre, sub, chip, heno, tituloBoton, abrir } = cfg;
  const marcados = () => syncGet(clave, {});

  const coincide = (it, q) => {
    if (!q) return true;
    const texto = norm(heno(it));
    return norm(q).split(/\s+/).filter(Boolean).every(t => texto.includes(t));
  };

  const filaHTML = (it, on) => {
    const c = chip(it);
    return `
    <li class="vpo-drug${on ? ' marcada' : ''}" id="${prefijo}-${it.id}">
      <button type="button" class="vpo-drug-main" onclick="${abrir}('${it.id}')">
        <span class="vpo-drug-name">${nombre(it)}</span>
        <span class="vpo-drug-sum">${sub(it)}</span>
      </button>
      <span class="vpo-chip" style="--chip:${c.color}">${c.label}</span>
      <button type="button" class="vpo-drug-add" title="${tituloBoton}"
        aria-pressed="${on}" onclick="rmVpoListaMarcar('${prefijo}','${it.id}', this)">${on ? '\u2713' : '+'}</button>
    </li>`;
  };

  const listaHTML = q => {
    const marks = marcados();
    const bloques = grupos.map(g => {
      const propios = items.filter(it => it.grupo === g.id && coincide(it, q));
      if (!propios.length) return '';
      return `
      <section class="vpo-drug-group" style="--c:${g.accent}">
        <h3>${g.label} <span class="vpo-drug-count">${propios.length}</span></h3>
        <ul class="vpo-drug-list">${propios.map(it => filaHTML(it, !!marks[it.id])).join('')}</ul>
      </section>`;
    }).join('');
    return bloques || `<p class="vpo-empty">Ningún resultado coincide con "${q}".</p>`;
  };

  const repintar = () => {
    const caja = document.getElementById(prefijo + '-results');
    if (caja) caja.innerHTML = listaHTML(((document.getElementById(prefijo + '-q') || {}).value || '').trim());
  };

  const toggle = (id, btn) => {
    const marks = marcados();
    if (marks[id]) delete marks[id]; else marks[id] = true;
    syncSet(clave, marks);
    const on = !!marks[id];
    if (btn) {
      btn.textContent = on ? '\u2713' : '+';
      btn.setAttribute('aria-pressed', String(on));
      const fila = document.getElementById(prefijo + '-' + id);
      if (fila) fila.classList.toggle('marcada', on);
    }
  };

  const api = { listaHTML, repintar, toggle, limpiar: () => { syncSet(clave, {}); repintar(); },
                paraNota: () => items.filter(it => marcados()[it.id]) };
  LISTAS[prefijo] = api;
  return api;
}

window.rmVpoListaMarcar = (prefijo, id, btn) => { const l = LISTAS[prefijo]; if (l) l.toggle(id, btn); };
window.rmVpoListaBuscar = prefijo => { const l = LISTAS[prefijo]; if (l) l.repintar(); };

/* ==================== Pestaña: Fármacos ==================== */

const byId = id => farmacos.find(f => f.id === id);
const conducta = f => CONDUCTAS[f.conducta] || CONDUCTAS.individualizar;

const listaFarmacos = listaMarcable({
  prefijo: 'vpo-drug', clave: FARMACOS_KEY, items: farmacos, grupos: farmacoGrupos,
  nombre: f => f.farmaco, sub: f => f.resumen, chip: conducta,
  heno: f => [f.farmaco, f.resumen, (f.alias || []).join(' ')].join(' '),
  tituloBoton: 'Añadir esta conducta a la nota de VPO', abrir: 'rmVpoFarmaco'
});

function mountFarmacos(pane) {
  pane.innerHTML = `
    <div class="sec-header">
      <h2>Manejo perioperatorio de fármacos</h2>
      <p>Qué suspender, qué continuar y cuándo reiniciar. Toca un fármaco para ver el detalle y la fuente;
         el botón <strong>+</strong> marca su conducta para la nota de VPO.</p>
    </div>
    <div class="sec-body">
      <div class="vpo-drug-search">
        <input type="text" id="vpo-drug-q" autocomplete="off" placeholder="Buscar fármaco, hábito o grupo: apixaban, stent, esteroides, ayuno…"
          oninput="rmVpoListaBuscar('vpo-drug')">
      </div>
      <div id="vpo-drug-results">${listaFarmacos.listaHTML('')}</div>
    </div>`;
}

function bloqueHTML(titulo, cuerpo) {
  return cuerpo ? `<h3 class="vpo-d-h">${titulo}</h3><div class="vpo-d-b">${cuerpo}</div>` : '';
}

// Distingue una recomendación formal de sociedad de una práctica aceptada sin guía propia.
// Es información clínica: cambia cuánto peso darle frente al protocolo de la institución.
function evidenciaHTML(nivel) {
  const esGuia = nivel === 'guia';
  return `<span class="vpo-ev ${esGuia ? 'vpo-ev-guia' : 'vpo-ev-consenso'}">${
    esGuia ? 'Recomendación de guía' : 'Consenso de práctica'}</span>`;
}

export function abrirFarmaco(id) {
  const f = byId(id);
  if (!f) return;
  const g = farmacoGrupos.find(x => x.id === f.grupo) || { accent: ACCENT, label: '' };
  const c = conducta(f);
  const riesgos = [
    f.riesgoSuspender ? `<div class="val-row"><span class="val-name">Si se suspende<span class="val-note">${f.riesgoSuspender}</span></span></div>` : '',
    f.riesgoContinuar ? `<div class="val-row"><span class="val-name">Si se continúa<span class="val-note">${f.riesgoContinuar}</span></span></div>` : ''
  ].join('');
  const notas = (f.notas && f.notas.length)
    ? `<ul class="proto-keypoints">${f.notas.map(n => `<li>${n}</li>`).join('')}</ul>` : '';

  openModalShell(g.accent, `
    <button class="modal-close" onclick="closeModal()">\u2715</button>
    <span class="modal-tag" style="color:${g.accent};">${g.label}</span>
    <h2>${f.farmaco}</h2>
    <p class="vpo-d-lead"><span class="vpo-chip" style="--chip:${c.color}">${c.label}</span> ${f.resumen}</p>
    ${bloqueHTML('Antes de la cirugía', f.preop)}
    ${bloqueHTML('Reinicio', f.postop)}
    ${riesgos ? bloqueHTML('Riesgo de cada opción', `<div class="proto-drugs">${riesgos}</div>`) : ''}
    ${notas ? bloqueHTML('Notas', notas) : ''}
    <p class="proto-source">${evidenciaHTML(f.evidencia)} Fuente: ${f.fuente}</p>`);
}

export const toggleFarmacoNota = (id, btn) => listaFarmacos.toggle(id, btn);
export const farmacosParaNota = () => listaFarmacos.paraNota();
export const buscarFarmaco = () => listaFarmacos.repintar();

/* ==================== Pestaña: Ruta ==================== */
// Asistente paso a paso del algoritmo ACC/AHA 2024. El estado es el camino recorrido:
// un array de { paso, opcion } más el veredicto al que llegó. Se guarda con la estrategia
// escalar (gana el último dispositivo), porque un camino de decisiones no se puede unir
// con otro sin producir ramas contradictorias.

function rutaEstado() {
  const st = syncGet(RUTA_KEY, null);
  return st && Array.isArray(st.camino) ? st : { camino: [], veredicto: null };
}
function guardarRuta(st) { syncSet(RUTA_KEY, st); }

function pasoActual(st) {
  if (st.veredicto) return null;
  if (!st.camino.length) return pasos[PRIMER_PASO];
  const ultimo = st.camino[st.camino.length - 1];
  return pasos[ultimo.siguiente] || null;
}

function migaHTML(st) {
  if (!st.camino.length) return '';
  const items = st.camino.map((c, i) => {
    const p = pasos[c.paso];
    return `<li><span class="vpo-miga-paso">${p ? p.titulo : c.paso}</span>
      <button type="button" class="vpo-miga-op" onclick="rmVpoRutaVolver(${i})"
        title="Volver a este paso y cambiar la respuesta">${c.label}</button></li>`;
  }).join('');
  return `<ol class="vpo-miga">${items}</ol>`;
}

function pasoHTML(p) {
  const opciones = p.opciones.map((o, i) => `
    <button type="button" class="vpo-op" onclick="rmVpoRutaElegir(${i})">
      <span class="vpo-op-label">${o.label}</span>
      ${o.nota ? `<span class="vpo-op-nota">${o.nota}</span>` : ''}
    </button>`).join('');
  return `
    <div class="vpo-paso">
      <span class="vpo-paso-tag">${p.titulo}</span>
      <h3>${p.pregunta}</h3>
      ${p.ayuda ? `<p class="vpo-paso-ayuda">${p.ayuda}</p>` : ''}
      ${p.detalle ? `<div class="calc-note">${p.detalle}</div>` : ''}
      <div class="vpo-op-grid">${opciones}</div>
    </div>`;
}

function veredictoHTML(id) {
  const v = veredictos[id];
  if (!v) return '';
  const t = TONOS[v.tono] || TONOS.proceder;
  const acciones = (v.acciones && v.acciones.length)
    ? `<ul class="proto-keypoints">${v.acciones.map(a => `<li>${a}</li>`).join('')}</ul>` : '';
  return `
    <div class="vpo-veredicto" style="--v:${t.color}">
      <span class="vpo-chip" style="--chip:${t.color}">${t.label}</span>
      <h3>${v.titulo}</h3>
      <p>${v.texto}</p>
      ${acciones}
      ${v.nota ? `<div class="calc-note">${v.nota}</div>` : ''}
    </div>`;
}

function rutaCuerpoHTML() {
  const st = rutaEstado();
  const p = pasoActual(st);
  const cuerpo = st.veredicto ? veredictoHTML(st.veredicto) : (p ? pasoHTML(p) : '');
  const acciones = st.camino.length
    ? `<button type="button" class="proto-reset" onclick="rmVpoRutaReiniciar()">Empezar de nuevo</button>` : '';
  return `${migaHTML(st)}${cuerpo}${acciones}
    <p class="proto-source">Fuente: ${RUTA_FUENTE}</p>`;
}

function pintarRuta() {
  const box = document.getElementById('vpo-ruta-body');
  if (box) box.innerHTML = rutaCuerpoHTML();
}

function mountRuta(pane) {
  pane.innerHTML = `
    <div class="sec-header">
      <h2>Ruta perioperatoria</h2>
      <p>El enfoque por pasos de la evaluación cardiaca preoperatoria. Responde cada pregunta y la ruta
         llega a una conducta concreta; puedes volver a cualquier paso para cambiar la respuesta.</p>
    </div>
    <div class="sec-body">
      <div class="calc-note" style="margin-bottom:18px;">La propia guía advierte que los desenlaces del
        cuidado guiado por este algoritmo no se han estudiado de forma prospectiva: es una ayuda de
        decisión, no un sustituto del juicio clínico.</div>
      <div id="vpo-ruta-body">${rutaCuerpoHTML()}</div>
    </div>`;
}

export function rutaElegir(i) {
  const st = rutaEstado();
  const p = pasoActual(st);
  if (!p) return;
  const op = p.opciones[i];
  if (!op) return;
  const d = op.destino || {};
  st.camino.push({ paso: p.id, label: op.label, siguiente: d.paso || null });
  st.veredicto = d.veredicto || null;
  guardarRuta(st);
  pintarRuta();
}

// Vuelve al paso de índice i: descarta ese paso y todo lo que vino después, para poder
// cambiar la respuesta sin reiniciar la ruta entera.
export function rutaVolver(i) {
  const st = rutaEstado();
  st.camino = st.camino.slice(0, i);
  st.veredicto = null;
  guardarRuta(st);
  pintarRuta();
}

export function rutaReiniciar() {
  guardarRuta({ camino: [], veredicto: null });
  pintarRuta();
}

// Consumido por la pestaña Nota (fase 5).
export function rutaParaNota() {
  const st = rutaEstado();
  if (!st.veredicto) return null;
  return { camino: st.camino.map(c => ({ paso: (pasos[c.paso] || {}).titulo || c.paso, respuesta: c.label })),
           veredicto: veredictos[st.veredicto] };
}

/* ==================== Pestaña: Estudios ==================== */
// Misma mecánica que Fármacos (ver listaMarcable). Lo que cambia es el énfasis: cada entrada
// declara tanto sus indicaciones como el escenario en el que NO se pide, que es donde está el
// error frecuente.

const ESTUDIOS_KEY = 'rm:vpo:estudios';
const estudioPorId = id => estudios.find(e => e.id === id);
const chipEstudio = e => (e.rutina
  ? { label: 'De rutina', color: '#3f6b52' }
  : { label: 'No de rutina', color: '#8c3a34' });

const listaEstudios = listaMarcable({
  prefijo: 'vpo-est', clave: ESTUDIOS_KEY, items: estudios, grupos: gruposEstudio,
  nombre: e => e.estudio, sub: e => e.resumen, chip: chipEstudio,
  heno: e => [e.estudio, e.resumen, e.noIndicado, (e.alias || []).join(' ')].join(' '),
  tituloBoton: 'Marcar como solicitado en la nota de VPO', abrir: 'rmVpoEstudio'
});

function mountEstudios(pane) {
  pane.innerHTML = `
    <div class="sec-header">
      <h2>Estudios preoperatorios</h2>
      <p>Cuándo se pide cada estudio y, sobre todo, cuándo no. Ninguno se solicita a todo paciente:
         el botón <strong>+</strong> marca los que sí indicaste para que entren en la nota.</p>
    </div>
    <div class="sec-body">
      <div class="calc-note" style="margin-bottom:18px;">La pregunta que filtra cualquier estudio es siempre
        la misma: <strong>¿qué haría distinto si el resultado sale anormal?</strong> Si la respuesta es "nada",
        el estudio solo retrasa la cirugía y abre una cascada diagnóstica con riesgo propio.
        <br>Varias indicaciones dependen de que la cirugía sea de <strong>riesgo elevado</strong>, que la guía
        define combinando paciente y procedimiento: riesgo de evento cardiovascular mayor de 1 % o más
        (por debajo de 1 % es riesgo bajo).</div>
      <div class="vpo-drug-search">
        <input type="text" id="vpo-est-q" autocomplete="off" placeholder="Buscar estudio: electrocardiograma, coagulación, tórax…"
          oninput="rmVpoListaBuscar('vpo-est')">
      </div>
      <div id="vpo-est-results">${listaEstudios.listaHTML('')}</div>
    </div>`;
}

export function abrirEstudio(id) {
  const e = estudioPorId(id);
  if (!e) return;
  const g = gruposEstudio.find(x => x.id === e.grupo) || { accent: ACCENT, label: '' };
  const lista = arr => `<ul class="proto-keypoints">${arr.map(x => `<li>${x}</li>`).join('')}</ul>`;
  openModalShell(g.accent, `
    <button class="modal-close" onclick="closeModal()">\u2715</button>
    <span class="modal-tag" style="color:${g.accent};">${g.label}</span>
    <h2>${e.estudio}</h2>
    ${bloqueHTML('Cuándo sí pedirlo', lista(e.indicaciones))}
    ${bloqueHTML('Cuándo no pedirlo', e.noIndicado)}
    ${e.vigencia ? bloqueHTML('Vigencia', e.vigencia) : ''}
    ${(e.notas && e.notas.length) ? bloqueHTML('Notas', lista(e.notas)) : ''}
    <p class="proto-source">Fuente: ${e.fuente}</p>`);
}

export const toggleEstudioNota = (id, btn) => listaEstudios.toggle(id, btn);
export const estudiosParaNota = () => listaEstudios.paraNota();
export const buscarEstudio = () => listaEstudios.repintar();

// Entrada desde el buscador global a un estudio concreto.
export function openVpoEstudio(id) {
  showTab('estudios', { scroll: false });
  abrirEstudio(id);
}

/* ==================== Pestaña: Nota ==================== */
// Reúne lo de las otras tres pestañas en un texto listo para el expediente. Los resultados de
// las escalas llegan por el aviso que expone engine/calculators.js: cada vez que una escala de
// VPO da resultado se guarda su fragmento, que es la frase clínica compacta pensada justo para
// esto. Todo se guarda por paciente y se limpia con "Paciente nuevo".

const ESCALAS_KEY = 'rm:vpo:escalas';
// Exportado para poder comprobar en tests.js que ninguna escala se queda fuera de la nota.
export const ORDEN_NOTA = ['asa', 'leeindex', 'guptamica', 'guptaprf', 'detsky', 'dasi', 'ariscat',
  'stopbang', 'apfel', 'fragilidad', 'charlson', 'delirium', 'caprini', 'puenteac'];

function escalasGuardadas() { return syncGet(ESCALAS_KEY, {}); }

// Recoge el resultado de una escala de VPO. Un resultado null (faltan datos) borra lo que
// hubiera: si el usuario vacía un campo, la nota no debe seguir citando el número anterior.
function recogerResultado(key, r, calc) {
  if (!calculators.some(c => c.key === key)) return; // solo escalas de VPO
  const guardadas = escalasGuardadas();
  if (r === null || r === undefined) {
    if (!guardadas[key]) return;
    delete guardadas[key];
  } else {
    const frase = calc.fragment ? calc.fragment(r) : calc.format(r);
    if (guardadas[key] && guardadas[key].frase === frase) return; // sin cambios, no reescribir
    guardadas[key] = { titulo: calc.title, frase, ts: Date.now() };
  }
  syncSet(ESCALAS_KEY, guardadas);
  if (ACTIVE === 'nota') pintarNota();
}

function seccionNota(titulo, cuerpo) {
  return cuerpo ? `<section class="vpo-nota-sec"><h3>${titulo}</h3>${cuerpo}</section>` : '';
}

function notaHTML() {
  const escalas = escalasGuardadas();
  const ruta = rutaParaNota();
  const drogas = farmacosParaNota();

  const bloqueRuta = ruta ? `
    <p><strong>${ruta.veredicto.titulo}.</strong> ${ruta.veredicto.texto}</p>
    <ul class="cr-list">${ruta.veredicto.acciones.map(a => `<li>${a}</li>`).join('')}</ul>
    <p class="vpo-nota-fina">Ruta recorrida: ${ruta.camino.map(c => `${c.paso} (${c.respuesta})`).join(' → ')}.</p>` : '';

  const usadas = ORDEN_NOTA.filter(k => escalas[k]);
  const bloqueEscalas = usadas.length
    ? `<ul class="cr-list">${usadas.map(k => `<li>${escalas[k].frase}.</li>`).join('')}</ul>` : '';

  const bloqueFarmacos = drogas.length
    ? `<ul class="cr-list">${drogas.map(f => {
        const c = conducta(f);
        return `<li><strong>${f.farmaco}</strong> (${c.label.toLowerCase()}): ${f.resumen} ${f.postop}</li>`;
      }).join('')}</ul>` : '';

  const pedidos = estudiosParaNota();
  // En la nota va solo el nombre: la indicación completa de cada estudio es un párrafo entero
  // y convierte la lista en algo ilegible. El porqué ya quedó razonado al marcarlo.
  const bloqueEstudios = pedidos.length
    ? `<p>Se solicitan: ${pedidos.map(e => e.estudio.toLowerCase()).join(', ')}.</p>` : '';

  const vacia = !bloqueRuta && !bloqueEscalas && !bloqueFarmacos && !bloqueEstudios;
  if (vacia) {
    return `<p class="vpo-empty">Todavía no hay nada que reunir. Recorre la <button type="button" class="vpo-inline-link" onclick="rmVpoTab('ruta')">Ruta</button>,
      calcula alguna <button type="button" class="vpo-inline-link" onclick="rmVpoTab('escalas')">Escala</button> o marca conductas en
      <button type="button" class="vpo-inline-link" onclick="rmVpoTab('farmacos')">Fármacos</button>, y la nota se arma sola.</p>`;
  }

  return `
    <div class="calc-result vpo-nota-caja">
      <span class="cr-label">Nota de valoración preoperatoria</span>
      <div class="cr-text" id="vpo-nota-texto">
        ${seccionNota('Conducta', bloqueRuta)}
        ${seccionNota('Riesgo estimado', bloqueEscalas)}
        ${seccionNota('Manejo perioperatorio de fármacos', bloqueFarmacos)}
        ${seccionNota('Estudios solicitados', bloqueEstudios)}
      </div>
      <button class="calc-copy" onclick="rmVpoNotaCopiar(this)">Copiar nota</button>
    </div>`;
}

function pintarNota() {
  const box = document.getElementById('vpo-nota-body');
  if (box) box.innerHTML = notaHTML();
}

function mountNota(pane) {
  pane.innerHTML = `
    <div class="sec-header">
      <h2>Nota de VPO</h2>
      <p>Reúne el veredicto de la ruta, las escalas que hayas calculado y las conductas de fármacos que
         hayas marcado. Se actualiza sola conforme trabajas en las otras pestañas.</p>
    </div>
    <div class="sec-body">
      <div id="vpo-nota-body">${notaHTML()}</div>
      <button type="button" class="proto-reset" style="margin-top:18px" onclick="rmVpoNuevoPaciente()">Paciente nuevo: limpiar todo</button>
      <p class="proto-source">Material de apoyo: la nota es un borrador para el expediente, no sustituye el juicio clínico ni la valoración por anestesiología.</p>
    </div>`;
}

export function copiarNota(btn) {
  const el = document.getElementById('vpo-nota-texto');
  if (!el) return;
  const txt = (el.innerText || el.textContent).replace(/\n{3,}/g, '\n\n').trim();
  navigator.clipboard.writeText(txt).then(() => {
    const old = btn.textContent;
    btn.textContent = 'Copiado ✓';
    setTimeout(() => { btn.textContent = old; }, 1400);
  }).catch(() => {});
}

// Limpia todo lo que es de un paciente concreto: ruta, fármacos marcados y escalas calculadas.
// La pestaña activa no se toca, porque es una preferencia de uso, no un dato del paciente.
export function nuevoPaciente() {
  syncSet(RUTA_KEY, { camino: [], veredicto: null });
  syncSet(ESCALAS_KEY, {});
  listaFarmacos.limpiar();
  listaEstudios.limpiar();
  pintarNota();
  const ruta = document.getElementById('vpo-ruta-body');
  if (ruta) ruta.innerHTML = rutaCuerpoHTML();
}

// focus() se ejecuta cada vez que la pestaña vuelve a quedar activa. Escalas lo necesita
// porque la sección Calc reapunta CALC_TOPIC a otro tema al abrir una calculadora desde ahí.
const TABS = [
  { id: 'ruta', label: 'Ruta', mount: mountRuta },
  { id: 'escalas', label: 'Escalas', mount: mountEscalas, focus: () => setCalcTopic(calcTopic) },
  { id: 'farmacos', label: 'Fármacos', mount: mountFarmacos },
  { id: 'estudios', label: 'Estudios', mount: mountEstudios },
  { id: 'nota', label: 'Nota', mount: mountNota, focus: pintarNota }
];

let ROOT = null;
let ACTIVE = null;

function tabbarHTML(tabs, activeId) {
  const pills = tabs.map(t =>
    `<button type="button" class="pill${t.id === activeId ? ' active' : ''}" id="vpo-tab-${t.id}" onclick="rmVpoTab('${t.id}')">${t.label}</button>`
  ).join('');
  return `<nav class="pillbar vpo-tabbar">${pills}</nav>`;
}

export function mountVpo(root) {
  ROOT = root;
  const first = syncGet(TAB_KEY, TABS[0].id);
  const start = TABS.some(t => t.id === first) ? first : TABS[0].id;
  root.innerHTML = `${TABS.length > 1 ? tabbarHTML(TABS, start) : ''}<div id="vpo-tabbody"></div>`;
  showTab(start, { scroll: false });
}

export function showTab(id, { scroll = true } = {}) {
  const tab = TABS.find(t => t.id === id);
  const body = document.getElementById('vpo-tabbody');
  if (!tab || !body) return;
  ACTIVE = id;
  syncSet(TAB_KEY, id);
  document.querySelectorAll('.vpo-tabbar .pill').forEach(p => {
    p.classList.toggle('active', p.id === 'vpo-tab-' + id);
  });

  let pane = document.getElementById('vpo-pane-' + id);
  if (!pane) {
    pane = document.createElement('div');
    pane.id = 'vpo-pane-' + id;
    body.appendChild(pane);
    tab.mount(pane);
  }
  if (tab.focus) tab.focus();
  Array.from(body.children).forEach(el => { el.style.display = el === pane ? '' : 'none'; });
  if (scroll) window.scrollTo({ top: 0, behavior: 'auto' });
}

// Se llama al volver a la sección VPO sin remontarla, para restaurar el contexto que otras
// secciones pudieron haber cambiado (ver focus() arriba).
export function refocusVpo() {
  const tab = TABS.find(t => t.id === ACTIVE);
  if (tab && tab.focus) tab.focus();
}

// Entrada desde el buscador global: garantiza que la pestaña Escalas esté montada y activa
// antes de abrir la calculadora, ya que openCalc depende de CALC_TOPIC.
export function openVpoCalc(key) {
  showTab('escalas', { scroll: false });
  openCalc(key);
}

// Entrada desde el buscador global a un fármaco concreto.
export function openVpoFarmaco(id) {
  showTab('farmacos', { scroll: false });
  abrirFarmaco(id);
}

window.rmVpoTab = showTab;
window.rmVpoOpenCalc = openVpoCalc;
window.rmVpoFarmaco = abrirFarmaco;
window.rmVpoOpenFarmaco = openVpoFarmaco;
window.rmVpoRutaElegir = rutaElegir;
window.rmVpoRutaVolver = rutaVolver;
window.rmVpoRutaReiniciar = rutaReiniciar;
window.rmVpoEscalaTema = abrirEscalaDeTema;
window.rmVpoEstudio = abrirEstudio;
window.rmVpoOpenEstudio = openVpoEstudio;
window.rmVpoNotaCopiar = copiarNota;
window.rmVpoNuevoPaciente = nuevoPaciente;

// El motor de calculadoras avisa cada resultado; la nota de VPO se queda con los suyos.
setResultListener(recogerResultado);

// Entradas de VPO para el buscador global. Lo arma app.js, pero VPO es quien sabe qué
// contiene cada pestaña; cada fase nueva añade aquí las suyas.
export function vpoSearchEntries() {
  const entries = calculators.map(c => ({
    label: c.title, type: 'Calculadora', scope: 'VPO', section: 'vpo',
    action: `rmVpoOpenCalc('${c.key}')`
  }));
  if (combinedNote) {
    entries.push({
      label: combinedNote.title, type: 'Nota clínica', scope: 'VPO', section: 'vpo',
      action: "rmVpoOpenCalc('notacombinada')"
    });
  }
  farmacos.forEach(f => {
    entries.push({
      label: f.farmaco, type: 'Manejo perioperatorio', scope: 'VPO', section: 'vpo',
      action: `rmVpoOpenFarmaco('${f.id}')`
    });
  });
  entries.push({
    label: 'Ruta perioperatoria', type: 'Algoritmo', scope: 'VPO', section: 'vpo',
    action: "rmVpoTab('ruta')"
  });
  estudios.forEach(e => {
    entries.push({
      label: e.estudio, type: 'Estudio preoperatorio', scope: 'VPO', section: 'vpo',
      action: `rmVpoOpenEstudio('${e.id}')`
    });
  });
  entries.push({
    label: 'Nota de VPO', type: 'Nota clínica', scope: 'VPO', section: 'vpo',
    action: "rmVpoTab('nota')"
  });
  return entries;
}
