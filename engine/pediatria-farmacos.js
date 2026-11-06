// engine/pediatria-farmacos.js
// Pestaña Fármacos: búsqueda por nombre (y por alias, y por clase) sobre los datos de
// protocols/pediatria-farmacos.js. La mecánica de la lista la pone engine/listas-marcables.js, la
// misma que usan las listas de VPO.

import { farmacos, grupos, indicaciones } from '../protocols/pediatria-farmacos.js';
import { openModalShell } from './calculators.js';
import { listaMarcable, bloqueHTML } from './listas-marcables.js';
import { ACCENT, registrarPintor } from './pediatria-estado.js';
import { VIAS } from './pediatria-dosis.js';
import { pacientePedia } from './pediatria-ficha.js';
import { elegirPresentacion, lineaHTML, repartirPorFranja, selectorPresentacionHTML } from './pediatria-vista.js';

const byId = id => farmacos.find(f => f.id === id);
const NOMBRES_CUADROS = {};
indicaciones.forEach(i => { NOMBRES_CUADROS[i.id] = i.nombre; });

/* El chip de cada fila dice las VÍAS del fármaco, no su clase: la clase ya es el encabezado del
   acordeón, y una columna idéntica en todas las filas de un bloque no informa de nada (la misma
   lección que dejó escrita la pestaña Estudios de VPO). Las vías, en cambio, son lo que se busca
   al ojear la lista: cuál puedo dar por boca. */
const COLOR_VIA = {
  oral: '#3f6b52', iv: '#3d5a73', im: '#3d5a73', sc: '#3d5a73',
  nebulizada: '#5c4a73', inhalada: '#5c4a73', rectal: '#85602e'
};
const ABREVIATURA = { oral: 'oral', iv: 'IV', im: 'IM', sc: 'SC', rectal: 'rectal',
  nebulizada: 'nebulizada', inhalada: 'inhalada', intranasal: 'intranasal',
  topica: 'tópica', oftalmica: 'oftálmica', otica: 'ótica' };

export function viasDe(f) {
  const vistas = [];
  (f.dosis || []).forEach(d => { if (d.via && !vistas.includes(d.via)) vistas.push(d.via); });
  return vistas;
}

const chipVias = f => {
  const vias = viasDe(f);
  return {
    label: vias.map(v => ABREVIATURA[v] || v).join(' · ') || 'sin vía',
    color: vias.length === 1 ? (COLOR_VIA[vias[0]] || ACCENT) : '#85602e'
  };
};

const listaFarmacos = listaMarcable({
  prefijo: 'pedia-drug', items: farmacos, grupos, marcable: false,
  nombre: f => f.farmaco,
  sub: f => f.resumen,
  chip: chipVias,
  // El pajar: el nombre, el resumen, los alias, los cuadros que trata y las VÍAS. Así "otitis"
  // encuentra la amoxicilina desde la pestaña de fármacos, sin cambiar de pestaña, y "nebulizada"
  // encuentra el salbutamol. Las vías tienen que estar aquí porque la palabra solo vive en el
  // chip de la fila: buscarla devolvía cero teniéndola delante, que es exactamente el defecto que
  // dejó documentado la lista de VPO con las etiquetas de grupo.
  heno: f => [
    f.farmaco, f.resumen, (f.alias || []).join(' '),
    (f.dosis || []).map(d => (d.indicaciones || []).map(i => NOMBRES_CUADROS[i] || '').join(' ')).join(' '),
    viasDe(f).map(v => `${VIAS[v]} ${ABREVIATURA[v] || ''}`).join(' ')
  ].join(' '),
  abrir: 'rmPediaFarmaco'
});

export function mountFarmacosPedia(pane) {
  pane.innerHTML = `
    <div class="sec-body">
      <div class="vpo-drug-search">
        <input type="text" id="pedia-drug-q" autocomplete="off"
          placeholder="Buscar fármaco, alias, clase o enfermedad: amoxi, otitis, corticoides…"
          oninput="rmListaBuscar('pedia-drug')">
      </div>
      <div id="pedia-drug-results">${listaFarmacos.listaHTML('')}</div>
    </div>`;
  // La ficha del niño avisa cuando cambia el peso. Esta pestaña no pinta dosis en la lista, así
  // que no hay nada que repintar, pero se registra para que el día que la lista muestre algo
  // calculado no haya que acordarse de esto.
  registrarPintor('farmacos', () => {});
}

/* ---------------- La ficha del fármaco ---------------- */
function bloqueLista(titulo, items) {
  if (!items || !items.length) return '';
  return bloqueHTML(titulo, `<ul class="proto-keypoints">${items.map(i => `<li>${i}</li>`).join('')}</ul>`);
}

export function abrirFarmacoPedia(id) {
  const f = byId(id);
  if (!f) return;
  const g = grupos.find(x => x.id === f.grupo) || { accent: ACCENT, label: '' };
  const c = chipVias(f);
  const { aplican, otras } = repartirPorFranja(f.dosis || [], pacientePedia());

  const lineas = (arr) => arr.map(l => lineaHTML(l, f, { mostrarCuadros: true, nombresCuadros: NOMBRES_CUADROS })).join('');
  // Las franjas que no corresponden al niño de la ficha se agrupan, pero quedan a un toque y con
  // su franja impresa. <details> lo resuelve sin JavaScript y es accesible de serie.
  const otrasHTML = otras.length
    ? `<details class="pedia-otras"><summary>Otras franjas de edad o de peso (${otras.length})</summary>${lineas(otras)}</details>`
    : '';

  openModalShell(g.accent, `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:${g.accent};">${g.label}</span>
    <h2>${f.farmaco}</h2>
    <p class="vpo-d-lead"><span class="vpo-chip" style="--chip:${c.color}">${c.label}</span> ${f.resumen}</p>
    ${f.sinNeonatal ? `<p class="pedia-sin-neonatal">${f.sinNeonatal}</p>` : ''}
    ${selectorPresentacionHTML(f)}
    ${bloqueHTML('Dosis', lineas(aplican) + otrasHTML)}
    ${f.noTriturar ? `<p class="pedia-calc-aviso">No debe triturarse ni partirse.</p>` : ''}
    ${bloqueLista('Efectos adversos', f.adversos)}
    ${bloqueLista('Precauciones', f.precauciones)}
    ${f.dilucion ? bloqueHTML('Dilución y preparación', f.dilucion) : ''}
    ${f.ajusteRenal ? bloqueHTML('Ajuste en disfunción renal', f.ajusteRenal) : ''}
    ${f.administracion ? bloqueHTML('Administración', f.administracion) : ''}
    ${f.mecanismo ? bloqueHTML('Mecanismo', f.mecanismo) : ''}
    ${bloqueLista('Notas', f.notas)}`);
}

// Cambiar la presentación repinta la ficha entera: todas las líneas de dosis calculan su volumen
// con ella, así que ninguna puede quedarse con la anterior.
window.rmPediaPresentacion = (farmacoId, presId) => {
  elegirPresentacion(farmacoId, presId);
  abrirFarmacoPedia(farmacoId);
};

// Exportada solo para tests.js: la búsqueda se resuelve al pintar la lista (el pajar incluye los
// alias, la clase y los cuadros), así que probar los datos de cada entrada no la cubre.
export const listaFarmacosPediaHTML = q => listaFarmacos.listaHTML(q);
export { VIAS };
