// topics/_template/content.js — Plantilla para un tema nuevo.
// Copia esta carpeta a topics/<mi-tema>/ y rellena los campos. Borra lo que no uses
// (estigmas y biopsia son opcionales: el motor los omite si son [] o null).

export const meta = {
  id: 'mi-tema',                         // debe coincidir con la carpeta y con registry.js
  titulo: 'Título del tema',
  subtitulo: 'Módulo N · Medicina Interna',
  accent: '#7c2d2d'                      // color de acento del tema
};

export const definicionText = 'Párrafo integral de definición del tema…';

export const bibliografia = [
  'Autor A, Autor B. Título. Revista. Año;Vol(Núm):págs.'
];

export const content = {
  diagnostico: {
    // tituloA/tituloB son los encabezados de las dos tarjetas de presentación clínica
    // (ej. "Compensada"/"Descompensada", o "Sepsis"/"Choque séptico"). Sin ellos, el motor
    // usa "Presentación inicial"/"Presentación avanzada" por defecto — evita dejarlos así,
    // personalízalos siempre para que no queden genéricos.
    clinica: { tituloA: 'Forma leve / temprana', tituloB: 'Forma grave / avanzada', compensada: 'Forma leve / temprana…', descompensada: 'Forma grave / avanzada…' },
    laboratorio: [{ prueba: 'Nombre', utilidad: 'Para qué sirve' }],
    // etiologicos: [{ prueba, utilidad }],
    no_invasivos: [{ metodo: 'Escala', interpretacion: '…', cutoff: '…' }],
    imagen: [{ modalidad: 'TC/eco', hallazgos: '…' }]
  },
  clasificacion: {
    compensada_descompensada: 'Texto introductorio de las escalas…',
    escalas: [{ nombre: 'Escala', componentes: '…', formula: '…', interpretacion: '…' }]
  },
  complicaciones: [
    {
      nombre: 'Complicación 1', color: '#8c3a34',
      definicion: '…', fisiopatologia: '…', epidemiologia: '…',
      factores_riesgo: ['…'], clinica: '…', criterios_dx: '…',
      laboratorio: '…', imagen: '…', complementarios: '…', dx_diferencial: '…',
      tx_medico: '…', tx_farmacologico: '…', tx_intervencionista: '…',
      criterios_uci: '…', criterios_tips: 'No aplica.', criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: '…', seguimiento_ambulatorio: '…', pronostico: '…',
      algoritmo: ['Paso 1', 'Paso 2']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: '…', parametros: ['…'],
    criterios_uci_general: '…', criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.', prevencion: '…'
  }
};

// Presentación
export const compCites = {};                 // { 'Complicación 1': { definicion:[1] } }
export const estigmas = [];                  // opcional
export const biopsia = null;                 // opcional
export const escalaRefs = {};                // { 'Escala': [1] }
export const escalaCalc = {};                // { 'Escala': 'keyDeLaCalculadora' }
// Citas de la sección Diagnóstico (números que existen en TU bibliografía, no copies los de otro tema).
export const diagCites = {};                 // { laboratorio:[1], etiologicos:[1], no_invasivos:[1], imagen:[1], biopsia:[1] }
export const clasificacionCite = [];         // cita junto a la intro de la sección Escalas
export const seguimientoCite = [];           // cita junto a la intro de la sección Seguimiento
// Solo si el tema usa biopsia/estigmas (opcional; el motor usa valores genéricos si se omiten):
// export const biopsiaTitulo = 'Biopsia de <órgano>';
// export const estigmasTitulo = 'Signos clásicos de <enfermedad>, en orden de frecuencia';
export const compGroups = [                  // agrupa las complicaciones en la sección
  { title: 'Grupo A', items: ['Complicación 1'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'TEMA', color: '#7c2d2d', target: 'definicion' },
  branches: [
    { title: 'Rama A', sub: '…', color: '#3f6b52', target: 'diagnostico' },
    { title: 'Rama B', sub: '…', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Hoja', sub: '…', color: '#3d5a73', target: 'complicaciones' }
    ] }
  ]
};
