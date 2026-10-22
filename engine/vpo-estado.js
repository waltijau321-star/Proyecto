// engine/vpo-estado.js
// El borrador del paciente: las claves donde vive, lo que el motor de calculadoras deja en él
// y el modo en que una pestaña pide que se repinte otra.
//
// Es el único archivo de VPO que no importa a ningún hermano, y por eso se puede importar
// desde todos ellos sin ciclos. La regla del área es esa: las pestañas dependen del estado,
// nunca unas de las otras para repintarse. Cuando la nota tiene que refrescarse porque se
// calculó una escala, quien lo pide no llama a la nota: llama a `repintarSiActiva('nota')`,
// y la nota es quien registró qué hacer con eso.

import { calculators, combinedNote } from '../protocols/vpo-calc.js';
import { syncGet, syncSet } from './cloud-sync.js';

export const ACCENT = '#3d5a73';

// Todo lo que es de un paciente concreto se borra junto con "Paciente nuevo"; la pestaña
// activa no, porque es una preferencia de uso.
export const TAB_KEY = 'rm:vpo:tab';
export const PACIENTE_KEY = 'rm:vpo:paciente';
export const FARMACOS_KEY = 'rm:vpo:farmacos';
export const RUTA_KEY = 'rm:vpo:ruta';
export const ESTUDIOS_KEY = 'rm:vpo:estudios';
export const ESCALAS_KEY = 'rm:vpo:escalas';

// El motor de calculadoras consume la forma { meta, calculators, combinedNote } de un tema.
// VPO no es un tema, así que se le pasa este objeto sintético con el acento del área.
export const calcTopic = { meta: { accent: ACCENT }, calculators, combinedNote };

/* ---------- Pestaña activa y repintado cruzado ---------- */

const PINTORES = {};
let ACTIVA = null;

// Cada pestaña declara al importarse cómo se repinta a sí misma. Quien la monta no necesita
// saberlo, y quien la quiere refrescar tampoco.
export function registrarPintor(id, fn) { PINTORES[id] = fn; }
export function repintar(id) { const f = PINTORES[id]; if (f) f(); }

export const pestanaActiva = () => ACTIVA;
export function setPestanaActiva(id) { ACTIVA = id; }

// Repintar una pestaña que no se está viendo es trabajo tirado: al volver a ella se repinta
// sola (ver `focus` en TABS). Esto es lo que se llama desde fuera de una pestaña.
export function repintarSiActiva(id) { if (ACTIVA === id) repintar(id); }

/* ---------- Escalas calculadas ---------- */

export function escalasGuardadas() { return syncGet(ESCALAS_KEY, {}); }
export function limpiarEscalas() { syncSet(ESCALAS_KEY, {}); }

// Recoge el resultado de una escala de VPO. Un resultado null (faltan datos) borra lo que
// hubiera: si el usuario vacía un campo, la nota no debe seguir citando el número anterior.
// `inicial` marca el cálculo que el motor hace solo al abrir la calculadora, sobre los valores
// por defecto: ese número no lo ha afirmado nadie, así que no entra en la nota de un paciente
// ni borra lo que ya había calculado antes. Abrir una escala para mirarla, desde aquí o desde
// el tema de estudio, no debe escribir nada en el expediente.
export function recogerResultado(key, r, calc, inicial) {
  if (!calculators.some(c => c.key === key)) return; // solo escalas de VPO
  if (inicial) return;
  const guardadas = escalasGuardadas();
  if (r === null || r === undefined) {
    if (!guardadas[key]) return;
    delete guardadas[key];
  } else {
    const frase = calc.fragment ? calc.fragment(r) : calc.format(r);
    if (guardadas[key] && guardadas[key].frase === frase) return; // sin cambios, no reescribir
    // Junto a la frase se guarda el resultado en crudo: la nota solo necesita el texto, pero la
    // ruta lee los numeros para decir que dicen las escalas sobre el umbral de su paso.
    guardadas[key] = { titulo: calc.title, frase, valor: r, ts: Date.now() };
  }
  syncSet(ESCALAS_KEY, guardadas);
  repintarSiActiva('nota');
  // Si la escala se abrio desde un paso de la ruta, el paso tiene que ensenar ya el resultado.
  repintarSiActiva('ruta');
}
