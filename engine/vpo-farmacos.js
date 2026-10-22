// engine/vpo-farmacos.js
// Pestaña Fármacos: qué suspender, qué continuar y cuándo reiniciar, sobre los datos de
// protocols/vpo-farmacos.js. La mecánica de la lista la pone engine/vpo-listas.js.

import { farmacos, grupos as farmacoGrupos, CONDUCTAS } from '../protocols/vpo-farmacos.js';
import { openModalShell } from './calculators.js';
import { ACCENT, FARMACOS_KEY } from './vpo-estado.js';
import { listaMarcable, bloqueHTML } from './vpo-listas.js';

const byId = id => farmacos.find(f => f.id === id);
export const conducta = f => CONDUCTAS[f.conducta] || CONDUCTAS.individualizar;

const listaFarmacos = listaMarcable({
  prefijo: 'vpo-drug', clave: FARMACOS_KEY, items: farmacos, grupos: farmacoGrupos,
  nombre: f => f.farmaco, sub: f => f.resumen, chip: conducta,
  heno: f => [f.farmaco, f.resumen, (f.alias || []).join(' ')].join(' '),
  tituloBoton: 'Añadir esta conducta a la nota de VPO', abrir: 'rmVpoFarmaco'
});

export function mountFarmacos(pane) {
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
    <button class="modal-close" onclick="closeModal()">✕</button>
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
export const limpiarFarmacos = () => listaFarmacos.limpiar();
// Exportada solo para tests.js: la búsqueda se resuelve al pintar la lista (el pajar incluye
// alias y etiqueta de grupo), así que probar los datos de cada entrada no la cubre.
export const listaFarmacosHTML = q => listaFarmacos.listaHTML(q);
