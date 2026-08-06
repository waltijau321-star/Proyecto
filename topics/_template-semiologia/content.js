// topics/_template-semiologia/content.js — Plantilla para un tema de SEMIOLOGÍA
// (una técnica de exploración física por sistema), distinta de la plantilla de enfermedad
// en topics/_template/. Reutiliza exactamente el mismo contrato del motor (mismos campos
// que consume study-view.js) — no requiere ningún cambio de motor — pero reinterpreta el
// arreglo `complicaciones` como "maniobras y hallazgos" en vez de "complicaciones de una
// enfermedad", y dejamos vacíos/omitidos los campos de tratamiento que no aplican (el motor
// ya omite cualquier campo vacío, ver fieldHTML en study-view.js).
//
// Mapeo de sentido (motor → semiología):
//   diagnostico.clinica.tituloA/B     → "Hallazgo normal" / "Hallazgo patológico"
//   complicaciones[]                  → una entrada por CADA maniobra o signo del sistema
//     .nombre                         → nombre de la maniobra o signo (ej. "Auscultación cardiaca")
//     .definicion                     → técnica: cómo se hace, en qué posición, con qué instrumento
//     .clinica                        → qué se busca: hallazgo normal vs. hallazgo patológico
//     .criterios_dx                   → significado clínico si el hallazgo es anormal/positivo
//     .dx_diferencial                 → qué otras causas dan un hallazgo similar (diagnóstico diferencial semiológico)
//     .algoritmo                      → pasos de la maniobra, si conviene desglosarlos
//     (tx_medico, tx_farmacologico, criterios_uci, etc. se omiten — no aplican a semiología)
//   compGroups                        → agrupa las maniobras por sub-región si el cluster es grande
//                                        (ej. "Inspección", "Palpación", "Percusión", "Auscultación")
//
// Copia esta carpeta a topics/<mi-tema-semiologia>/ y rellena los campos. Usa como referencia
// real topics/cirrosis-hepatica/content.js para ver el contrato completo en un tema construido.

export const meta = {
  id: 'mi-tema-semiologia',                 // debe coincidir con la carpeta y con registry.js
  titulo: 'Exploración de <sistema>',
  subtitulo: 'Semiología · Medicina Interna',
  accent: '#3d5a73'
};

export const definicionText = 'Párrafo integral: qué información aporta la exploración de este sistema, en qué orden se hace (inspección → palpación → percusión → auscultación) y por qué es relevante clínicamente…';

export const bibliografia = [
  'Autor A, Autor B. Título del texto de semiología/propedéutica. Editorial. Año.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hallazgo normal',
      tituloB: 'Hallazgo patológico',
      compensada: 'Qué se espera encontrar en un examen normal de este sistema…',
      descompensada: 'Qué hallazgos anormales pueden aparecer y por qué son relevantes…'
    }
    // laboratorio / no_invasivos / imagen: normalmente NO aplican a semiología pura — se omiten.
  },
  // clasificacion: solo si el sistema tiene una escala validada de exploración (ej. Glasgow);
  // si no, se omite todo el bloque (el motor no renderiza la sección si no hay `clasificacion`).
  complicaciones: [
    {
      nombre: 'Nombre de la maniobra o signo',
      color: '#3d5a73',
      definicion: 'Técnica: cómo se hace, posición del paciente, instrumento.',
      clinica: 'Qué se busca: hallazgo normal vs. patológico.',
      criterios_dx: 'Significado clínico si el hallazgo es anormal/positivo.',
      dx_diferencial: 'Otras causas que dan un hallazgo semiológico similar.',
      algoritmo: ['Paso 1 de la maniobra', 'Paso 2', 'Paso 3']
    }
  ]
  // seguimiento_intrahospitalario: normalmente no aplica — se omite.
};

export const compCites = {};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = {};
export const clasificacionCite = [];
export const compGroups = [
  { title: 'Inspección', items: ['Nombre de la maniobra o signo'] }
  // agrega más grupos según corresponda: 'Palpación', 'Percusión', 'Auscultación'…
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },  // label reetiquetado — no dice "Complicaciones"
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
  // 'clasificacion' y 'seguimiento' se omiten si no aplican a este tema.
];
export const arbol = {
  root: { title: 'EXPLORACIÓN DE <SISTEMA>', color: '#3d5a73', target: 'definicion' },
  branches: [
    { title: 'Técnica', sub: 'IPPA', color: '#3f6b52', target: 'diagnostico' },
    { title: 'Maniobras', sub: 'signos clave', color: '#8c3a34', target: 'complicaciones' }
  ]
};
