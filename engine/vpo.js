// engine/vpo.js
// Cascarón de la sección Valoración Preoperatoria (VPO).
//
// VPO no es un tema del registry: es un área propia del shell con pestañas internas
// (Ruta · Escalas · Fármacos · Estudios · Nota). Este archivo solo gestiona la barra de
// pestañas, el montaje perezoso de cada una, la persistencia de la pestaña activa y las
// entradas desde fuera (buscador global, app.js); el contenido de cada pestaña vive en
// protocols/vpo-*.js y su vista en el engine/vpo-*.js que le corresponde:
//
//   engine/vpo-estado.js    el borrador del paciente y el repintado cruzado entre pestañas
//   engine/vpo-ficha.js     la cabecera con los datos que todas las escalas comparten
//   engine/vpo-ruta.js      el asistente paso a paso
//   engine/vpo-escalas.js   la rejilla de escalas y las tres puertas de entrada a una
//   engine/vpo-listas.js    la mecánica común de Fármacos y Estudios
//   engine/vpo-farmacos.js, engine/vpo-estudios.js   las dos pestañas de lista
//   engine/vpo-nota.js      lo que reúne todo lo anterior en un texto
//
// Ninguna pestaña importa a otra para repintarla: eso pasa por vpo-estado.js, y por eso las
// dependencias van en una sola dirección. La nota sí lee datos de las demás, que es su
// trabajo. Las pestañas se declaran en TABS y la barra solo se renderiza cuando hay más de
// una, de modo que cada fase de desarrollo puede dar de alta la suya sin exponer pestañas
// vacías en producción.

import { calculators, combinedNote } from '../protocols/vpo-calc.js';
import { farmacos } from '../protocols/vpo-farmacos.js';
import { estudios } from '../protocols/vpo-estudios.js';
import { openCalc, setResultListener, setSharedListener } from './calculators.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { TAB_KEY, limpiarEscalas, recogerResultado, setPestanaActiva } from './vpo-estado.js';
import { fichaCampo, fichaHTML, fichaPlegar, limpiarPaciente,
  recogerCompartidos, sembrarCompartidos } from './vpo-ficha.js';
import { abrirEscalaDeTema, abrirEscalaDesdeRuta, enfocarEscalas, mountEscalas } from './vpo-escalas.js';
import { mountRuta, rutaElegir, rutaReiniciar, rutaVolver } from './vpo-ruta.js';
import { abrirFarmaco, limpiarFarmacos, mountFarmacos } from './vpo-farmacos.js';
import { abrirEstudio, limpiarEstudios, mountEstudios } from './vpo-estudios.js';
import { copiarNota, imprimirNota, mountNota, pintarNota } from './vpo-nota.js';

// Lo que la sección ofrecía antes desde un solo archivo se sigue ofreciendo desde aquí: app.js
// y tests.js importan de engine/vpo.js, no de las partes. Lo que esta de paso, de paso; lo que
// además se usa aquí, en el bloque de arriba.
export { ESCALAS_DE_TEMAS } from './vpo-escalas.js';
export { rutaParaNota } from './vpo-ruta.js';
export { toggleFarmacoNota, farmacosParaNota, buscarFarmaco, listaFarmacosHTML } from './vpo-farmacos.js';
export { toggleEstudioNota, estudiosParaNota, buscarEstudio, listaEstudiosHTML } from './vpo-estudios.js';
export { ORDEN_NOTA, notaHTML } from './vpo-nota.js';
export { resumenPaciente } from './vpo-ficha.js';
export { abrirEscalaDeTema, abrirEscalaDesdeRuta, rutaElegir, rutaVolver, rutaReiniciar,
  abrirFarmaco, abrirEstudio, imprimirNota, copiarNota, fichaCampo, fichaPlegar };

// focus() se ejecuta cada vez que la pestaña vuelve a quedar activa. Escalas lo necesita
// porque la sección Calc reapunta CALC_TOPIC a otro tema al abrir una calculadora desde ahí.
const TABS = [
  { id: 'ruta', label: 'Ruta', mount: mountRuta },
  { id: 'escalas', label: 'Escalas', mount: mountEscalas, focus: enfocarEscalas },
  { id: 'farmacos', label: 'Fármacos', mount: mountFarmacos },
  { id: 'estudios', label: 'Estudios', mount: mountEstudios },
  { id: 'nota', label: 'Nota', mount: mountNota, focus: pintarNota }
];

let ROOT = null;
let ACTIVE = null;

// Limpia todo lo que es de un paciente concreto: ruta, ficha, fármacos y estudios marcados y
// escalas calculadas. La pestaña activa no se toca, porque es una preferencia de uso, no un
// dato del paciente. Vive aquí porque es la única acción que cruza las cinco pestañas.
export function nuevoPaciente() {
  rutaReiniciar();
  limpiarEscalas();
  limpiarPaciente();
  limpiarFarmacos();
  limpiarEstudios();
  pintarNota();
}

// La barra es un juego de pestañas de verdad, no cinco botones sueltos: quien navega con
// lector de pantalla necesita saber cuántas hay, cuál está activa y qué panel controla cada
// una, y quien navega con teclado espera moverse entre ellas con las flechas (ver
// bindTabKeys). `tabindex` rotatorio: solo la activa entra en el orden de tabulación, así
// que el tabulador salta de la barra al contenido en vez de recorrer las cinco.
function tabbarHTML(tabs, activeId) {
  const pills = tabs.map(t => {
    const activa = t.id === activeId;
    return `<button type="button" role="tab" class="pill${activa ? ' active' : ''}" id="vpo-tab-${t.id}"
      aria-selected="${activa}" aria-controls="vpo-pane-${t.id}" tabindex="${activa ? '0' : '-1'}"
      onclick="rmVpoTab('${t.id}')">${t.label}</button>`;
  }).join('');
  return `<nav class="pillbar vpo-tabbar" role="tablist" aria-label="Secciones de la valoración preoperatoria">${pills}</nav>`;
}

// Flechas para moverse entre pestañas, Inicio y Fin para ir a los extremos. La pestaña se
// activa al recibir el foco, que es lo que se espera de una barra que cambia el panel al
// instante. Se llama al montar, porque la barra se repinta con el resto de la sección.
function bindTabKeys() {
  const barra = ROOT && ROOT.querySelector('.vpo-tabbar');
  if (!barra) return;
  barra.addEventListener('keydown', e => {
    const teclas = { ArrowRight: 1, ArrowLeft: -1, Home: 'primera', End: 'ultima' };
    const mov = teclas[e.key];
    if (mov === undefined) return;
    e.preventDefault();
    const i = TABS.findIndex(t => t.id === ACTIVE);
    const destino = mov === 'primera' ? 0
      : mov === 'ultima' ? TABS.length - 1
      : (i + mov + TABS.length) % TABS.length;
    showTab(TABS[destino].id, { scroll: false });
    const boton = document.getElementById('vpo-tab-' + TABS[destino].id);
    if (boton) boton.focus();
  });
}

export function mountVpo(root) {
  ROOT = root;
  const first = syncGet(TAB_KEY, TABS[0].id);
  const start = TABS.some(t => t.id === first) ? first : TABS[0].id;
  root.innerHTML = `${TABS.length > 1 ? tabbarHTML(TABS, start) : ''}${fichaHTML()}<div id="vpo-tabbody"></div>`;
  // La ficha siembra los campos compartidos al montar; el camino de vuelta se registra al
  // importar el modulo (ver el final del archivo), porque una escala se puede abrir desde el
  // tema de estudio o desde Calc sin que la seccion VPO se haya montado nunca.
  sembrarCompartidos();
  bindTabKeys();
  showTab(start, { scroll: false });
}

export function showTab(id, { scroll = true } = {}) {
  const tab = TABS.find(t => t.id === id);
  const body = document.getElementById('vpo-tabbody');
  if (!tab || !body) return;
  ACTIVE = id;
  // Qué repinta una pestaña cuando otra la toca depende de cuál se está viendo.
  setPestanaActiva(id);
  syncSet(TAB_KEY, id);
  document.querySelectorAll('.vpo-tabbar .pill').forEach(p => {
    const activa = p.id === 'vpo-tab-' + id;
    p.classList.toggle('active', activa);
    p.setAttribute('aria-selected', String(activa));
    p.tabIndex = activa ? 0 : -1;
  });

  let pane = document.getElementById('vpo-pane-' + id);
  if (!pane) {
    pane = document.createElement('div');
    pane.id = 'vpo-pane-' + id;
    // El panel se anuncia como tal y dice de qué pestaña viene; tabindex 0 para que el
    // tabulador entre en él al salir de la barra, aunque su primer elemento no sea un control.
    pane.setAttribute('role', 'tabpanel');
    pane.setAttribute('aria-labelledby', 'vpo-tab-' + id);
    pane.tabIndex = 0;
    body.appendChild(pane);
    tab.mount(pane);
  }
  if (tab.focus) tab.focus();
  // `hidden` además de display: el panel oculto sale también del árbol de accesibilidad y de
  // la búsqueda del navegador, que con display:none a secas depende del estilo.
  Array.from(body.children).forEach(el => {
    const visible = el === pane;
    el.style.display = visible ? '' : 'none';
    el.hidden = !visible;
  });
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

// Entrada desde el buscador global a un estudio concreto.
export function openVpoEstudio(id) {
  showTab('estudios', { scroll: false });
  abrirEstudio(id);
}

window.rmVpoTab = showTab;
window.rmVpoOpenCalc = openVpoCalc;
window.rmVpoFarmaco = abrirFarmaco;
window.rmVpoOpenFarmaco = openVpoFarmaco;
window.rmVpoRutaElegir = rutaElegir;
window.rmVpoRutaVolver = rutaVolver;
window.rmVpoRutaReiniciar = rutaReiniciar;
window.rmVpoRutaEscala = abrirEscalaDesdeRuta;
window.rmVpoEscalaTema = abrirEscalaDeTema;
window.rmVpoEstudio = abrirEstudio;
window.rmVpoOpenEstudio = openVpoEstudio;
window.rmVpoNotaCopiar = copiarNota;
window.rmVpoNotaImprimir = imprimirNota;
window.rmVpoNuevoPaciente = nuevoPaciente;
window.rmVpoFicha = fichaCampo;
window.rmVpoFichaPlegar = fichaPlegar;

// El motor de calculadoras avisa cada resultado; la nota de VPO se queda con los suyos.
setResultListener(recogerResultado);
// Y avisa de cada campo compartido que cambia; la ficha del paciente se queda con los suyos.
// Hoy las unicas escalas con campos compartidos son las de VPO, asi que no hay dato de otro
// tema que se pueda colar aqui (tests.js lo vigila).
setSharedListener(recogerCompartidos);

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
