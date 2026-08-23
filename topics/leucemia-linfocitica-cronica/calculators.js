// topics/leucemia-linfocitica-cronica/calculators.js
// CLL-IPI (International Prognostic Index for CLL): índice pronóstico validado que combina edad,
// estadio clínico, estado mutacional de IGHV, alteración de TP53, y beta-2-microglobulina para
// estratificar el riesgo en 4 grupos (International CLL-IPI working group. Lancet Oncol.
// 2016;17(6):779-790).

function cllIpiBanda(score) {
  if (score <= 1) return { banda: 'Riesgo bajo', color: 'ok', sv5: '~93%' };
  if (score <= 3) return { banda: 'Riesgo intermedio', color: 'warn', sv5: '~79%' };
  if (score <= 6) return { banda: 'Riesgo alto', color: 'danger', sv5: '~64%' };
  return { banda: 'Riesgo muy alto', color: 'danger', sv5: '~23%' };
}

export const calculators = [
  {
    key: 'cllipi', title: 'CLL-IPI', accent: '#5c3d8c',
    subtitle: 'Índice pronóstico internacional para LLC',
    incompleteMsg: 'Completa los 5 factores del CLL-IPI.',
    fields: [
      { name: 'tp53', id: 'ipi-tp53', type: 'checkbox', label: 'Deleción 17p o mutación de TP53 (4 puntos)' },
      { name: 'ighv', id: 'ipi-ighv', type: 'checkbox', label: 'IGHV no mutado (2 puntos)' },
      { name: 'b2m', id: 'ipi-b2m', type: 'checkbox', label: 'Beta-2-microglobulina &gt;3.5 mg/L (2 puntos)' },
      { name: 'estadio', id: 'ipi-estadio', type: 'checkbox', label: 'Estadio clínico Binet B/C o Rai I-IV (1 punto)' },
      { name: 'edad', id: 'ipi-edad', type: 'checkbox', label: 'Edad &gt;65 años (1 punto)' },
      { type: 'note', text: 'Puntaje total 0-10. Bajo: 0-1. Intermedio: 2-3. Alto: 4-6. Muy alto: 7-10.' }
    ],
    compute(v) {
      if (v.tp53 == null || v.ighv == null || v.b2m == null || v.estadio == null || v.edad == null) return null;
      const score = (v.tp53 ? 4 : 0) + (v.ighv ? 2 : 0) + (v.b2m ? 2 : 0) + (v.estadio ? 1 : 0) + (v.edad ? 1 : 0);
      const { banda, color, sv5 } = cllIpiBanda(score);
      return { score, banda, color, sv5 };
    },
    format: r => `<strong>Puntaje ${r.score}: ${r.banda}</strong>. Supervivencia estimada a 5 años ${r.sv5}.`,
    fragment: r => `CLL-IPI ${r.score} (${r.banda})`
  }
];
