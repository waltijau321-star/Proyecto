// engine/pediatria.js
// Cascarón de la sección Pediatría.
//
// Pediatría no es un tema del registry: es un área propia del shell con pestañas internas
// (Fármacos · Por enfermedad), igual que VPO. Este archivo solo gestiona la barra de pestañas, el
// montaje perezoso de cada una, la persistencia de la pestaña activa, la ficha del niño y las
// entradas desde fuera (buscador global, app.js). El contenido vive en
// protocols/pediatria-farmacos.js y cada vista en el engine/pediatria-*.js que le corresponde:
//
//   engine/pediatria-acceso.js       quién ve la sección
//   engine/pediatria-estado.js       las claves y el repintado cruzado
//   engine/pediatria-ficha.js        la cabecera con el peso y la edad
//   engine/pediatria-dosis.js        la aritmética, pura y probada con casos
//   engine/pediatria-farmacos.js     la pestaña de búsqueda por fármaco
//   engine/pediatria-enfermedades.js la pestaña de búsqueda por enfermedad
//
// Ninguna pestaña importa a otra: lo que las dos necesitan (la ficha del niño, la aritmética)
// está en módulos que no importan a nadie del área, y el repintado pasa por pediatria-estado.js.
// Hay una prueba en tests.js que vigila esas aristas, porque en módulos ES un ciclo no falla al
// cargar: falla más tarde, con un undefined difícil de rastrear.

import { farmacos, indicaciones } from '../protocols/pediatria-farmacos.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { ACCENT, TAB_KEY, setPestanaActiva } from './pediatria-estado.js';
import { fichaPediaHTML, fichaPediaPlegar, limpiarPacientePedia, pediaCampo } from './pediatria-ficha.js';
import { abrirFarmacoPedia, mountFarmacosPedia } from './pediatria-farmacos.js';
import { abrirCuadroPedia, mountEnfermedadesPedia } from './pediatria-enfermedades.js';

export { abrirFarmacoPedia, abrirCuadroPedia };
// Exportadas para tests.js: la búsqueda se resuelve al pintar la lista (el pajar incluye los
// alias y la etiqueta del grupo), así que probar los datos de cada entrada no la cubre.
export { listaFarmacosPediaHTML } from './pediatria-farmacos.js';
export { listaCuadrosPediaHTML, farmacosDeCuadro } from './pediatria-enfermedades.js';

const TABS = [
  { id: 'farmacos', label: 'Fármacos', mount: mountFarmacosPedia },
  { id: 'enfermedades', label: 'Por enfermedad', mount: mountEnfermedadesPedia }
];

let ROOT = null;
let ACTIVE = null;

/* La barra es un juego de pestañas de verdad, no dos botones sueltos: quien navega con lector de
   pantalla necesita saber cuántas hay, cuál está activa y qué panel controla cada una, y quien
   navega con teclado espera moverse con las flechas (ver bindTabKeys). `tabindex` rotatorio: solo
   la activa entra en el orden de tabulación, así que el tabulador salta de la barra al contenido
   en vez de recorrer las pestañas. Mismo patrón que engine/vpo.js. */
function tabbarHTML(tabs, activeId) {
  const pills = tabs.map(t => {
    const activa = t.id === activeId;
    return `<button type="button" role="tab" class="pill${activa ? ' active' : ''}" id="pedia-tab-${t.id}"
      aria-selected="${activa}" aria-controls="pedia-pane-${t.id}" tabindex="${activa ? '0' : '-1'}"
      onclick="rmPediaTab('${t.id}')">${t.label}</button>`;
  }).join('');
  return `<nav class="pillbar pedia-tabbar" role="tablist" aria-label="Secciones de farmacología pediátrica">${pills}</nav>`;
}

function bindTabKeys() {
  const barra = ROOT && ROOT.querySelector('.pedia-tabbar');
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
    const boton = document.getElementById('pedia-tab-' + TABS[destino].id);
    if (boton) boton.focus();
  });
}

export function mountPediatria(root) {
  ROOT = root;
  const first = syncGet(TAB_KEY, TABS[0].id);
  const start = TABS.some(t => t.id === first) ? first : TABS[0].id;
  root.innerHTML = `
    <div class="sec-header">
      <h2>Farmacología pediátrica</h2>
      <p>Cuánto, cada cuánto y cuántos mililitros. Pon el peso del niño en la ficha y cada línea de
         dosis muestra además los miligramos y el volumen que le corresponden.</p>
      <p class="calc-note">Material educativo. Las dosis se transcriben de los manuales citados en cada
         línea: confirma siempre contra la presentación que tengas en la mano y el protocolo de tu
         servicio. Las concentraciones de las presentaciones son las habituales del mercado, no las de
         un producto concreto.</p>
    </div>
    ${tabbarHTML(TABS, start)}
    ${fichaPediaHTML()}
    <div id="pedia-tabbody"></div>`;
  bindTabKeys();
  showTab(start, { scroll: false });
}

export function showTab(id, { scroll = true } = {}) {
  const tab = TABS.find(t => t.id === id);
  const body = document.getElementById('pedia-tabbody');
  if (!tab || !body) return;
  ACTIVE = id;
  // Qué repinta la ficha cuando cambia el peso depende de cuál se esté viendo.
  setPestanaActiva(id);
  syncSet(TAB_KEY, id);
  document.querySelectorAll('.pedia-tabbar .pill').forEach(p => {
    const activa = p.id === 'pedia-tab-' + id;
    p.classList.toggle('active', activa);
    p.setAttribute('aria-selected', String(activa));
    p.tabIndex = activa ? 0 : -1;
  });

  let pane = document.getElementById('pedia-pane-' + id);
  if (!pane) {
    pane = document.createElement('div');
    pane.id = 'pedia-pane-' + id;
    pane.setAttribute('role', 'tabpanel');
    pane.setAttribute('aria-labelledby', 'pedia-tab-' + id);
    pane.tabIndex = 0;
    body.appendChild(pane);
    tab.mount(pane);
  }
  // `hidden` además de display: el panel oculto sale también del árbol de accesibilidad y de la
  // búsqueda del navegador, que con display:none a secas depende del estilo.
  Array.from(body.children).forEach(el => {
    const visible = el === pane;
    el.style.display = visible ? '' : 'none';
    el.hidden = !visible;
  });
  if (scroll) window.scrollTo({ top: 0, behavior: 'auto' });
}

// Se llama al volver a la sección sin remontarla.
export function refocusPediatria() {
  setPestanaActiva(ACTIVE);
}

// "Paciente nuevo" de la sección: solo el niño, que es lo único que hay de un paciente concreto.
// Deliberadamente NO toca el paciente de VPO, que es otra clave (ver pediatria-estado.js).
export function nuevoPacientePedia() {
  limpiarPacientePedia();
}

/* ---------------- Entradas desde el buscador global ---------------- */
export function abrirFarmacoDesdeBuscador(id) {
  showTab('farmacos', { scroll: false });
  abrirFarmacoPedia(id);
}

export function abrirCuadroDesdeBuscador(id) {
  showTab('enfermedades', { scroll: false });
  abrirCuadroPedia(id);
}

/* Entradas de Pediatría para el buscador global. Lo arma app.js, pero esta sección es quien sabe
   qué contiene. app.js solo las añade al índice si el usuario ve la sección: una entrada que
   navega a una pestaña oculta es un callejón sin salida. */
export function pediaSearchEntries() {
  const entries = farmacos.map(f => ({
    label: f.farmaco, type: 'Fármaco pediátrico', scope: 'Pediatría', section: 'pediatria',
    action: () => window.rmPediaOpenFarmaco(f.id)
  }));
  indicaciones.forEach(i => {
    entries.push({
      label: i.nombre, type: 'Cuadro pediátrico', scope: 'Pediatría', section: 'pediatria',
      action: () => window.rmPediaOpenCuadro(i.id)
    });
  });
  return entries;
}

window.rmPediaTab = showTab;
window.rmPediaFarmaco = abrirFarmacoPedia;
window.rmPediaCuadro = abrirCuadroPedia;
window.rmPediaOpenFarmaco = abrirFarmacoDesdeBuscador;
window.rmPediaOpenCuadro = abrirCuadroDesdeBuscador;
window.rmPediaFicha = pediaCampo;
window.rmPediaFichaPlegar = fichaPediaPlegar;
window.rmPediaNuevoPaciente = nuevoPacientePedia;
export { ACCENT };
