// engine/vpo-estudios.js
// Pestaña Estudios: misma mecánica que Fármacos (ver engine/vpo-listas.js). Lo que cambia es
// el énfasis: cada entrada de protocols/vpo-estudios.js declara tanto sus indicaciones como el
// escenario en el que NO se pide, que es donde está el error frecuente.

import { estudios, gruposEstudio, DISPARADORES } from '../protocols/vpo-estudios.js';
import { openModalShell } from './calculators.js';
import { ACCENT, ESTUDIOS_KEY } from './vpo-estado.js';
import { listaMarcable, bloqueHTML } from './vpo-listas.js';

const estudioPorId = id => estudios.find(e => e.id === id);
// El chip dice qué dispara cada estudio, no si es "de rutina": ninguno lo es, así que esa
// etiqueta salía idéntica en los catorce y no ayudaba a decidir nada.
const chipEstudio = e => ({
  label: e.disparador.label,
  color: (DISPARADORES[e.disparador.tipo] || DISPARADORES.clinica).color
});

const listaEstudios = listaMarcable({
  prefijo: 'vpo-est', clave: ESTUDIOS_KEY, items: estudios, grupos: gruposEstudio,
  nombre: e => e.estudio, sub: e => e.resumen, chip: chipEstudio,
  heno: e => [e.estudio, e.resumen, e.noIndicado, e.disparador.label, (e.alias || []).join(' ')].join(' '),
  tituloBoton: 'Marcar como solicitado en la nota de VPO', abrir: 'rmVpoEstudio'
});

export function mountEstudios(pane) {
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
    <button class="modal-close" onclick="closeModal()">✕</button>
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
export const limpiarEstudios = () => listaEstudios.limpiar();
// Exportada solo para tests.js, por lo mismo que la de fármacos.
export const listaEstudiosHTML = q => listaEstudios.listaHTML(q);
