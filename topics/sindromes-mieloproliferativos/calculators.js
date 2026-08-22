// topics/sindromes-mieloproliferativos/calculators.js
// IPSET-thrombosis (Barbui et al., Blood 2012;120(26):5128-5133) y DIPSS
// (Passamonti et al., Blood 2010;115(9):1703-1708).

function ipsetBanda(score) {
  if (score === 0) return { banda: 'bajo', tasa: '~1%/año' };
  if (score <= 2) return { banda: 'intermedio', tasa: '~2.3%/año' };
  return { banda: 'alto', tasa: '~3.6%/año' };
}

function dipssBanda(score) {
  if (score === 0) return { banda: 'bajo', os: '11.3 años' };
  if (score <= 2) return { banda: 'intermedio-1', os: '7.9 años' };
  if (score <= 3) return { banda: 'intermedio-2', os: '4.0 años' };
  return { banda: 'alto', os: '2.3 años' };
}

export const calculators = [
  {
    key: 'ipset', title: 'IPSET-trombosis', accent: '#966b35',
    subtitle: 'Riesgo trombótico en trombocitemia esencial',
    incompleteMsg: 'Completa los 4 componentes.',
    fields: [
      { name: 'edad60', id: 'ipset-edad', type: 'checkbox', label: 'Edad &gt;60 años (1 punto)' },
      { name: 'frcv', id: 'ipset-frcv', type: 'checkbox', label: 'Factores de riesgo cardiovascular presentes (1 punto)' },
      { name: 'trombosis', id: 'ipset-trom', type: 'checkbox', label: 'Antecedente de trombosis previa (2 puntos)' },
      { name: 'jak2', id: 'ipset-jak2', type: 'checkbox', label: 'Mutación de JAK2 positiva (2 puntos)' }
    ],
    compute(v) {
      const score = (v.edad60 ? 1 : 0) + (v.frcv ? 1 : 0) + (v.trombosis ? 2 : 0) + (v.jak2 ? 2 : 0);
      const r = ipsetBanda(score);
      let rec;
      if (r.banda === 'bajo') rec = 'considerar solo aspirina o vigilancia, sin citorreducción de rutina';
      else if (r.banda === 'intermedio') rec = 'individualizar según el resto del cuadro clínico';
      else rec = 'citorreducción indicada, además de antiagregación';
      return { score, ...r, rec };
    },
    format: r => `<strong>IPSET-trombosis: ${r.score} puntos</strong> — riesgo ${r.banda} (incidencia de trombosis ≈ ${r.tasa}). ${r.rec}.`,
    fragment: r => `IPSET-trombosis ${r.score} (${r.banda})`
  },
  {
    key: 'dipss', title: 'DIPSS', accent: '#7a1f3d',
    subtitle: 'Pronóstico dinámico en mielofibrosis (primaria o secundaria)',
    incompleteMsg: 'Completa los 5 componentes.',
    fields: [
      { name: 'edad65', id: 'dipss-edad', type: 'checkbox', label: 'Edad &gt;65 años (1 punto)' },
      { name: 'sintomas', id: 'dipss-sint', type: 'checkbox', label: 'Síntomas constitucionales presentes (1 punto)' },
      { name: 'hb10', id: 'dipss-hb', type: 'checkbox', label: 'Hemoglobina &lt;10 g/dL (2 puntos)' },
      { name: 'leuco25', id: 'dipss-leu', type: 'checkbox', label: 'Leucocitos &gt;25×10⁹/L (1 punto)' },
      { name: 'blastos1', id: 'dipss-bla', type: 'checkbox', label: 'Blastos circulantes ≥1% (1 punto)' }
    ],
    compute(v) {
      const score = (v.edad65 ? 1 : 0) + (v.sintomas ? 1 : 0) + (v.hb10 ? 2 : 0) + (v.leuco25 ? 1 : 0) + (v.blastos1 ? 1 : 0);
      const r = dipssBanda(score);
      let rec;
      if (r.banda === 'bajo' || r.banda === 'intermedio-1') rec = 'trasplante alogénico no indicado de rutina; tratar síntomas/esplenomegalia si presentes';
      else rec = 'evaluar trasplante alogénico temprano en el paciente elegible: es la única opción curativa en este riesgo';
      return { score, ...r, rec };
    },
    format: r => `<strong>DIPSS: ${r.score} puntos</strong> — riesgo ${r.banda} (supervivencia mediana ≈ ${r.os}). ${r.rec}.`,
    fragment: r => `DIPSS ${r.score} (${r.banda})`
  }
];
