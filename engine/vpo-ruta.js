// engine/vpo-ruta.js
// Pestaña Ruta: el asistente paso a paso del algoritmo ACC/AHA 2024, cuyo contenido vive en
// protocols/vpo-ruta.js.
//
// El estado es el camino recorrido: un array de { paso, opcion } más el veredicto al que
// llegó. Se guarda con la estrategia escalar (gana el último dispositivo), porque un camino
// de decisiones no se puede unir con otro sin producir ramas contradictorias.

import { pasos, veredictos, TONOS, PRIMER_PASO, FUENTE as RUTA_FUENTE } from '../protocols/vpo-ruta.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { RUTA_KEY, escalasGuardadas, registrarPintor } from './vpo-estado.js';

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

// Colores de la lectura automatica de un paso (ver `lectura` en el contrato de vpo-ruta.js).
const TONOS_LECTURA = { elevado: '#8c3a34', bajo: '#3f6b52', mixto: '#966b35' };

// Lo que ya se calculo para este paciente se repite bajo el paso: la pregunta se contesta
// mirando el numero, y tenerlo que recordar de otra pestana es justo lo que se queria evitar.
// Vale igual para un paso y para un veredicto: los dos pueden declarar `herramientas`.
function herramientasHTML(p) {
  if (!p.herramientas || !p.herramientas.length) return '';
  const calculadas = escalasGuardadas();
  const botones = p.herramientas.map(h => h.tipo === 'estudio'
    ? `<button type="button" class="calc-btn" onclick="rmVpoEstudio('${h.key}')">${h.label}</button>`
    : `<button type="button" class="calc-btn" onclick="rmVpoRutaEscala('${h.key}')">Calcular ${h.label}</button>`
  ).join('');
  const hechas = p.herramientas
    .filter(h => h.tipo !== 'estudio' && calculadas[h.key])
    .map(h => `<li>${calculadas[h.key].frase}.</li>`).join('');
  // Algunos pasos saben leer lo que ya se calculo y decir hacia donde apunta. No contestan por
  // el usuario: el umbral es de la guia, pero la decision sigue siendo suya.
  const lectura = typeof p.lectura === 'function' ? p.lectura(calculadas) : null;
  const cajaLectura = lectura
    ? `<div class="vpo-lectura" style="--v:${(TONOS_LECTURA[lectura.tono] || TONOS_LECTURA.mixto)}">${lectura.texto}</div>`
    : '';
  return `
    <div class="vpo-paso-tools">${botones}</div>
    ${hechas ? `<ul class="vpo-paso-hechas cr-list">${hechas}</ul>` : ''}
    ${cajaLectura}`;
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
      ${herramientasHTML(p)}
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
      ${herramientasHTML(v)}
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
registrarPintor('ruta', pintarRuta);

export function mountRuta(pane) {
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

// También es lo que hace "Paciente nuevo" con la ruta: el camino es un dato del paciente.
export function rutaReiniciar() {
  guardarRuta({ camino: [], veredicto: null });
  pintarRuta();
}

// Consumido por la pestaña Nota.
export function rutaParaNota() {
  const st = rutaEstado();
  if (!st.veredicto) return null;
  return { camino: st.camino.map(c => ({ paso: (pasos[c.paso] || {}).titulo || c.paso, respuesta: c.label })),
           veredicto: veredictos[st.veredicto] };
}
