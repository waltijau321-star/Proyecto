// topics/neoplasias-snc-hipertension-intracraneal/calculators.js
// 1 herramienta real:
// - Karnofsky Performance Status / ECOG: escalas de estado funcional oncológico, presentadas
//   como un único selector (el usuario elige la descripción que mejor aplica) que devuelve ambas
//   equivalencias, dado que en la práctica se reportan de forma intercambiable (Karnofsky DA,
//   Burchenal JH. 1949; Oken MM, et al. Am J Clin Oncol. 1982;5(6):649-655).

export const calculators = [
  {
    key: 'karnofsky-ecog', title: 'Karnofsky Performance Status / ECOG', accent: '#5c4a2e',
    subtitle: 'Estado funcional del paciente oncológico',
    incompleteMsg: 'Selecciona la descripción que mejor aplica al paciente.',
    fields: [
      { name: 'nivel', id: 'ke-nivel', type: 'select', label: 'Estado funcional', options: [
        { value: '', label: 'Selecciona...' },
        { value: '10', label: 'Actividad normal completa, sin quejas ni evidencia de enfermedad' },
        { value: '9', label: 'Actividad normal con esfuerzo; signos/síntomas menores de enfermedad' },
        { value: '8', label: 'Actividad normal con esfuerzo; algunos signos/síntomas de enfermedad' },
        { value: '7', label: 'Cuida de sí mismo; incapaz de actividad normal o trabajo activo' },
        { value: '6', label: 'Requiere asistencia ocasional pero cuida la mayoría de sus necesidades' },
        { value: '5', label: 'Requiere asistencia considerable y atención médica frecuente' },
        { value: '4', label: 'Incapacitado; requiere cuidado y asistencia especiales' },
        { value: '3', label: 'Muy incapacitado; hospitalización indicada aunque la muerte no sea inminente' },
        { value: '2', label: 'Muy enfermo; hospitalización necesaria; tratamiento de soporte activo' },
        { value: '1', label: 'Moribundo; el proceso fatal progresa rápidamente' }
      ] }
    ],
    compute(v) {
      if (!v.nivel) return null;
      const nivel = parseInt(v.nivel, 10);
      const karnofsky = nivel * 10;
      const ecogMap = { 10: 0, 9: 1, 8: 1, 7: 2, 6: 2, 5: 3, 4: 3, 3: 4, 2: 4, 1: 4 };
      const ecog = ecogMap[nivel];
      const tolera = karnofsky >= 70;
      return { karnofsky, ecog, tolera };
    },
    format: r => `<strong>Karnofsky ${r.karnofsky}</strong> (equivalente aproximado ECOG ${r.ecog}). ${r.tolera
      ? 'Generalmente tolera tratamiento oncológico activo (cirugía, radioterapia, quimioterapia).'
      : 'Estado funcional limitado: reevaluar la intensidad del tratamiento oncológico apropiado, con frecuencia priorizando cuidados de soporte.'}`,
    fragment: r => `Karnofsky ${r.karnofsky} / ECOG ${r.ecog}`
  }
];
