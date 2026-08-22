// topics/sindromes-mielodisplasicos/calculators.js
// IPSS-R (Greenberg et al., Blood 2012;120(12):2454-2465).

function riesgoBanda(score) {
  if (score <= 1.5) return { banda: 'muy bajo', os: '8.8 años', lma25: 'no alcanzado (muy prolongado)' };
  if (score <= 3) return { banda: 'bajo', os: '5.3 años', lma25: '10.8 años' };
  if (score <= 4.5) return { banda: 'intermedio', os: '3.0 años', lma25: '3.2 años' };
  if (score <= 6) return { banda: 'alto', os: '1.6 años', lma25: '1.4 años' };
  return { banda: 'muy alto', os: '0.8 años', lma25: '0.73 años' };
}

export const calculators = [
  {
    key: 'ipssr', title: 'IPSS-R', accent: '#2d5c47',
    subtitle: 'Estratificación de riesgo pronóstico en síndromes mielodisplásicos',
    incompleteMsg: 'Completa las 5 variables: cariotipo, blastos, hemoglobina, plaquetas y neutrófilos.',
    fields: [
      { name: 'cito', id: 'ipssr-cito', type: 'select', numeric: true, label: 'Categoría citogenética', options: [
        { value: 0, label: 'Muy buena: -Y aislada, del(11q) aislada (0)' },
        { value: 1, label: 'Buena: normal, del(5q), del(12p), del(20q) aisladas, o doble incluyendo del(5q) (1)' },
        { value: 2, label: 'Intermedia: del(7q), +8, +19, i(17q), cualquier otro clon único o doble (2)' },
        { value: 3, label: 'Mala: -7, inv(3)/t(3q)/del(3q), doble incluyendo -7/del(7q), complejo con 3 alteraciones (3)' },
        { value: 4, label: 'Muy mala: complejo con &gt;3 alteraciones (4)' }] },
      { name: 'blastos', id: 'ipssr-blastos', type: 'select', numeric: true, label: 'Blastos en médula ósea (%)', options: [
        { value: 0, label: '≤2% (0)' }, { value: 1, label: '&gt;2% a &lt;5% (1)' },
        { value: 2, label: '5-10% (2)' }, { value: 3, label: '&gt;10% (3)' }] },
      { name: 'hb', id: 'ipssr-hb', type: 'number', step: '0.1', label: 'Hemoglobina (g/dL)', placeholder: 'ej. 9.5', row: 'a' },
      { name: 'plt', id: 'ipssr-plt', type: 'number', label: 'Plaquetas (×10⁹/L)', placeholder: 'ej. 80', row: 'a' },
      { name: 'anc', id: 'ipssr-anc', type: 'number', step: '0.1', label: 'Neutrófilos absolutos (×10⁹/L)', placeholder: 'ej. 1.2', row: 'b' },
      { type: 'note', text: 'La categoría citogenética se asigna previamente por cariotipo (ver Diagnóstico), no se recalcula aquí a partir del cariotipo crudo.' }
    ],
    compute(v) {
      if (v.cito === null || v.cito === undefined || v.blastos === null || v.blastos === undefined ||
          v.hb === null || v.hb === undefined || v.plt === null || v.plt === undefined ||
          v.anc === null || v.anc === undefined) return null;
      let hbPts; if (v.hb >= 10) hbPts = 0; else if (v.hb >= 8) hbPts = 1; else hbPts = 1.5;
      let pltPts; if (v.plt >= 100) pltPts = 0; else if (v.plt >= 50) pltPts = 0.5; else pltPts = 1;
      let ancPts; if (v.anc >= 0.8) ancPts = 0; else ancPts = 0.5;
      const score = v.cito + v.blastos + hbPts + pltPts + ancPts;
      const r = riesgoBanda(score);
      return { score: Math.round(score * 10) / 10, ...r };
    },
    format: r => `<strong>IPSS-R ${r.score}/10</strong>: riesgo ${r.banda}. Supervivencia mediana ≈ ${r.os}; tiempo mediano a progresión del 25% de los pacientes a LMA ≈ ${r.lma25}.`,
    fragment: r => `IPSS-R ${r.score} (${r.banda})`
  }
];
