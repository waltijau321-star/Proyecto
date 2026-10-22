// engine/vpo-nota.js
// Pestaña Nota: reúne lo de las otras cuatro en un texto listo para el expediente.
//
// Es la única pestaña que lee a las demás, y solo datos: el veredicto de la ruta, lo marcado
// en Fármacos y Estudios, la ficha del paciente y las escalas que el motor fue dejando en el
// estado. Nadie la llama a ella directamente: cuando algo cambia, el estado pide
// `repintarSiActiva('nota')` y aquí se responde con el pintor que se registra abajo.

import { calculators, DOMINIOS } from '../protocols/vpo-calc.js';
import { escalasGuardadas, registrarPintor } from './vpo-estado.js';
import { rutaParaNota } from './vpo-ruta.js';
import { conducta, farmacosParaNota } from './vpo-farmacos.js';
import { estudiosParaNota } from './vpo-estudios.js';
import { pacienteGuardado, resumenPaciente } from './vpo-ficha.js';

// El orden de la nota y el reparto entre sus bloques salen del propio descriptor de cada
// escala (`dominio` y `bloqueNota`, ver protocols/vpo-calc.js), agrupando por dominio clínico
// en el orden de DOMINIOS. Antes eran listas escritas a mano aquí, y añadir una escala
// obligaba a acordarse de todas: la que se olvidara se calculaba pero no salía en la nota.
// Se sigue exportando ORDEN_NOTA porque tests.js comprueba contra ella que no falte ninguna.
const porDominio = (a, b) => {
  const i = k => { const n = DOMINIOS.findIndex(d => d.id === k.dominio); return n === -1 ? DOMINIOS.length : n; };
  return i(a) - i(b) || calculators.indexOf(a) - calculators.indexOf(b);
};
export const ORDEN_NOTA = [...calculators].sort(porDominio).map(c => c.key);
// Las que, aun calculándose como escalas, no estiman un riesgo: dicen qué optimizar antes de
// operar, deciden una conducta con un fármaco, o dejan indicada una vigilancia para después.
const delBloque = b => calculators.filter(c => c.bloqueNota === b).map(c => c.key);
const EN_FARMACOS = delBloque('farmacos');
const EN_VIGILANCIA = delBloque('vigilancia');
const EN_OPTIMIZACION = delBloque('optimizacion');

function seccionNota(titulo, cuerpo) {
  return cuerpo ? `<section class="vpo-nota-sec"><h3>${titulo}</h3>${cuerpo}</section>` : '';
}

// Exportada para tests.js: que cada cosa caiga en su seccion es contenido clinico, no
// maquetacion, y se comprueba sobre el HTML que se genera.
export function notaHTML() {
  const escalas = escalasGuardadas();
  const ruta = rutaParaNota();
  const drogas = farmacosParaNota();

  const bloqueRuta = ruta ? `
    <p><strong>${ruta.veredicto.titulo}.</strong> ${ruta.veredicto.texto}</p>
    <ul class="cr-list">${ruta.veredicto.acciones.map(a => `<li>${a}</li>`).join('')}</ul>
    <p class="vpo-nota-fina">Ruta recorrida: ${ruta.camino.map(c => `${c.paso} (${c.respuesta})`).join(' → ')}.</p>` : '';

  // No todas las escalas estiman un riesgo: unas dicen qué optimizar antes de operar, otras
  // qué hacer con un fármaco y otras qué vigilar después. Cada una se lee en su bloque.
  const fuera = [...EN_FARMACOS, ...EN_VIGILANCIA, ...EN_OPTIMIZACION];
  const usadas = ORDEN_NOTA.filter(k => escalas[k] && !fuera.includes(k));
  const bloqueEscalas = usadas.length
    ? `<ul class="cr-list">${usadas.map(k => `<li>${escalas[k].frase}.</li>`).join('')}</ul>` : '';

  const antitrombotico = EN_FARMACOS.filter(k => escalas[k]);
  const bloqueFarmacos = (antitrombotico.length || drogas.length)
    ? `<ul class="cr-list">${antitrombotico.map(k => `<li>${escalas[k].frase}.</li>`).join('')}${drogas.map(f => {
        const c = conducta(f);
        return `<li><strong>${f.farmaco}</strong> (${c.label.toLowerCase()}): ${f.resumen} ${f.postop}</li>`;
      }).join('')}</ul>` : '';

  // Lo que se puede mejorar antes de operar va junto, y antes de los fármacos: es lo que da
  // sentido a adelantar la valoración en vez de hacerla la víspera.
  const optimizables = EN_OPTIMIZACION.filter(k => escalas[k]);
  const bloqueOptimizacion = optimizables.length
    ? `<ul class="cr-list">${optimizables.map(k => `<li>${escalas[k].frase}.</li>`).join('')}</ul>` : '';

  // Lo que hay que vigilar después cierra la nota, que es donde se lee: una valoración
  // preoperatoria que no dice qué mirar en el posoperatorio deja el trabajo a medias.
  const vigiladas = EN_VIGILANCIA.filter(k => escalas[k]);
  const bloqueVigilancia = vigiladas.length
    ? `<ul class="cr-list">${vigiladas.map(k => `<li>${escalas[k].frase}.</li>`).join('')}</ul>` : '';

  const pedidos = estudiosParaNota();
  // En la nota va solo el nombre: la indicación completa de cada estudio es un párrafo entero
  // y convierte la lista en algo ilegible. El porqué ya quedó razonado al marcarlo.
  const bloqueEstudios = pedidos.length
    ? `<p>Se solicitan: ${pedidos.map(e => e.estudio.toLowerCase()).join(', ')}.</p>` : '';

  const ficha = resumenPaciente(pacienteGuardado(), { largo: true });
  // La nota acaba en un expediente: lleva la fecha en que se escribe, y el paciente y el
  // procedimiento salen de la ficha.
  const fecha = new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
  const bloqueFicha = `<p class="vpo-nota-paciente">${ficha ? ficha + '. ' : ''}<span class="vpo-nota-fecha">Valoración del ${fecha}.</span></p>`;

  const vacia = !bloqueRuta && !bloqueEscalas && !bloqueFarmacos && !bloqueEstudios
    && !bloqueVigilancia && !bloqueOptimizacion;
  if (vacia) {
    return `<p class="vpo-empty">Todavía no hay nada que reunir. Recorre la <button type="button" class="vpo-inline-link" onclick="rmVpoTab('ruta')">Ruta</button>,
      calcula alguna <button type="button" class="vpo-inline-link" onclick="rmVpoTab('escalas')">Escala</button>, marca conductas en
      <button type="button" class="vpo-inline-link" onclick="rmVpoTab('farmacos')">Fármacos</button> o estudios en
      <button type="button" class="vpo-inline-link" onclick="rmVpoTab('estudios')">Estudios</button>, y la nota se arma sola.</p>`;
  }

  return `
    <div class="calc-result vpo-nota-caja">
      <span class="cr-label">Nota de valoración preoperatoria</span>
      <div class="cr-text" id="vpo-nota-texto">
        ${bloqueFicha}
        ${seccionNota('Conducta', bloqueRuta)}
        ${seccionNota('Riesgo estimado', bloqueEscalas)}
        ${seccionNota('Optimización preoperatoria', bloqueOptimizacion)}
        ${seccionNota('Manejo perioperatorio de fármacos', bloqueFarmacos)}
        ${seccionNota('Estudios solicitados', bloqueEstudios)}
        ${seccionNota('Vigilancia posoperatoria', bloqueVigilancia)}
      </div>
      <div class="vpo-nota-acciones">
        <button class="calc-copy" onclick="rmVpoNotaCopiar(this)">Copiar nota</button>
        <button type="button" class="calc-btn" onclick="rmVpoNotaImprimir()">Imprimir</button>
      </div>
    </div>`;
}

export function pintarNota() {
  const box = document.getElementById('vpo-nota-body');
  if (box) box.innerHTML = notaHTML();
}
registrarPintor('nota', pintarNota);

export function mountNota(pane) {
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

// Imprime solo la nota: la clase en <body> deja visible la caja de la nota y esconde el resto
// (ver @media print en styles.css). Se quita al volver, y tambien si el navegador avisa con
// afterprint, porque en algunos el dialogo no bloquea.
export function imprimirNota() {
  document.body.classList.add('imprimiendo-nota');
  const limpiar = () => document.body.classList.remove('imprimiendo-nota');
  window.addEventListener('afterprint', limpiar, { once: true });
  try { window.print(); } finally { limpiar(); }
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
