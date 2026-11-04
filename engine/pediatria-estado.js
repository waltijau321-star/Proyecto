// engine/pediatria-estado.js
// Las claves de almacenamiento de la sección Pediatría y el repintado entre sus piezas.
//
// Este archivo NO importa a ninguno de sus hermanos, y eso es la regla del área, no una
// casualidad: es lo que permite que la ficha avise a la pestaña activa sin conocerla, y que la
// pestaña no tenga que conocer a la ficha. La misma disposición que engine/vpo-estado.js, y por
// el mismo motivo: en módulos ES un ciclo no falla al cargar, falla más tarde y con un undefined
// difícil de rastrear. Hay una prueba en tests.js que vigila estas aristas.

import { syncGet, syncSet } from './cloud-sync.js';

export const TAB_KEY       = 'rm:pedia:tab';
// El paciente de Pediatría es DELIBERADAMENTE otra clave que el de VPO (rm:vpo:paciente). Quien
// valora a un adulto de 70 kg y luego consulta una dosis pediátrica no debe heredar ese peso:
// compartir la clave convertiría una comodidad en un riesgo de dosificación.
export const PACIENTE_KEY  = 'rm:pedia:paciente';

// Verde salvia: el acento propio de la sección, distinto del granate del contenido de Medicina
// Interna y del verde del shell, para que se vea de un golpe en qué área se está.
export const ACCENT = '#3f6b52';

/* ---------------- El paciente ---------------- */
export function pacienteGuardado() {
  const p = syncGet(PACIENTE_KEY, {});
  return (p && typeof p === 'object') ? p : {};
}
export function guardarPaciente(p) { syncSet(PACIENTE_KEY, p); }

/* ---------------- Repintado entre piezas ----------------
   Cada pestaña se registra al montarse; la ficha pide el repintado cuando cambia el peso o la
   edad, sin saber qué pestaña hay delante. Solo se repinta la activa: repintar una oculta roba
   trabajo y, si tiene un campo con el foco, lo pierde. */
const PINTORES = {};
let ACTIVA = null;

export function registrarPintor(id, fn) { PINTORES[id] = fn; }
export function setPestanaActiva(id) { ACTIVA = id; }
export function pestanaActiva() { return ACTIVA; }

export function repintarActiva() {
  const fn = PINTORES[ACTIVA];
  if (typeof fn === 'function') fn();
}
