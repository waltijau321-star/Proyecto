// topics/anemia-enfermedad-cronica/calculators.js
// Índice sTfR/log ferritina (Punnonen K, Irjala K, Rajamäki A. Blood. 1997;89(3):1052-1057):
// distingue la AEC pura de la coexistencia con ferropenia verdadera cuando la ferritina, elevada
// como reactante de fase aguda, deja de ser un marcador confiable de depósitos de hierro por sí
// sola.

export const calculators = [
  {
    key: 'stfrferritina', title: 'Índice sTfR/log ferritina', accent: '#4a5c73',
    subtitle: 'AEC pura vs. ferropenia verdadera (con o sin AEC concomitante)',
    incompleteMsg: 'Completa el receptor soluble de transferrina y la ferritina.',
    fields: [
      { name: 'stfr', id: 'sf-stfr', type: 'number', step: '0.1', label: 'Receptor soluble de transferrina, sTfR (mg/L)', placeholder: 'ej. 1.8', row: 'a' },
      { name: 'ferritina', id: 'sf-ferr', type: 'number', step: '0.1', label: 'Ferritina (ng/mL)', placeholder: 'ej. 60', row: 'a' },
      { type: 'note', text: 'Rangos de referencia de sTfR varían por ensayo; verifica el rango normal de tu laboratorio antes de interpretar.' }
    ],
    compute(v) {
      if (v.stfr === null || v.stfr === undefined || v.ferritina === null || v.ferritina === undefined || v.ferritina <= 0) return null;
      const index = Math.round((v.stfr / Math.log10(v.ferritina)) * 100) / 100;
      let banda, interp;
      if (index < 1) { banda = 'bajo (&lt;1)'; interp = 'sugestivo de AEC pura, sin ferropenia verdadera'; }
      else if (index > 2) { banda = 'alto (&gt;2)'; interp = 'sugestivo de ferropenia verdadera, con o sin AEC concomitante'; }
      else { banda = 'indeterminado (1-2)'; interp = 'zona indeterminada, sugestiva de anemia combinada (AEC + componente carencial de hierro); correlacionar con el contexto clínico'; }
      return { index, banda, interp };
    },
    format: r => `<strong>Índice sTfR/log ferritina: ${r.index}</strong> (${r.banda}): ${r.interp}.`,
    fragment: r => `Índice: ${r.index} (${r.banda})`
  }
];
