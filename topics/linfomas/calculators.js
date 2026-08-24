// topics/linfomas/calculators.js
// 2 calculadoras pronósticas reales y validadas:
// - IPI (International Prognostic Index): linfomas agresivos no Hodgkin (International Non-
//   Hodgkin's Lymphoma Prognostic Factors Project. N Engl J Med. 1993;329(14):987-994).
// - IPS de Hasenclever (International Prognostic Score): linfoma de Hodgkin avanzado
//   (Hasenclever D, Diehl V. N Engl J Med. 1998;339(21):1506-1514).

function ipiBanda(score) {
  if (score <= 1) return { banda: 'Riesgo bajo', color: 'ok' };
  if (score === 2) return { banda: 'Riesgo intermedio-bajo', color: 'warn' };
  if (score === 3) return { banda: 'Riesgo intermedio-alto', color: 'warn' };
  return { banda: 'Riesgo alto', color: 'danger' };
}

function ipsBanda(score) {
  if (score <= 1) return { banda: 'Riesgo muy favorable' };
  if (score <= 3) return { banda: 'Riesgo intermedio' };
  return { banda: 'Riesgo desfavorable' };
}

export const calculators = [
  {
    key: 'ipi', title: 'IPI (Índice Pronóstico Internacional)', accent: '#6b3d5c',
    subtitle: 'Linfomas agresivos no Hodgkin',
    incompleteMsg: 'Completa los 5 factores del IPI.',
    fields: [
      { name: 'edad', id: 'ipi-edad', type: 'checkbox', label: 'Edad &gt;60 años' },
      { name: 'ldh', id: 'ipi-ldh', type: 'checkbox', label: 'LDH sérica elevada' },
      { name: 'ecog', id: 'ipi-ecog', type: 'checkbox', label: 'Estado funcional ECOG ≥2' },
      { name: 'estadio', id: 'ipi-estadio', type: 'checkbox', label: 'Estadio de Ann Arbor III o IV' },
      { name: 'extranodal', id: 'ipi-extranodal', type: 'checkbox', label: 'Más de 1 sitio extraganglionar afectado' },
      { type: 'note', text: 'Puntaje 0-5 (1 punto por cada factor presente). Bajo: 0-1. Intermedio-bajo: 2. Intermedio-alto: 3. Alto: 4-5.' }
    ],
    compute(v) {
      if (v.edad == null || v.ldh == null || v.ecog == null || v.estadio == null || v.extranodal == null) return null;
      const score = (v.edad ? 1 : 0) + (v.ldh ? 1 : 0) + (v.ecog ? 1 : 0) + (v.estadio ? 1 : 0) + (v.extranodal ? 1 : 0);
      const { banda, color } = ipiBanda(score);
      return { score, banda, color };
    },
    format: r => `<strong>IPI ${r.score}: ${r.banda}</strong>.`,
    fragment: r => `IPI ${r.score} (${r.banda})`
  },
  {
    key: 'ips', title: 'IPS de Hasenclever', accent: '#8c6b2d',
    subtitle: 'Linfoma de Hodgkin avanzado',
    incompleteMsg: 'Completa los 7 factores del IPS.',
    fields: [
      { name: 'albumina', id: 'ips-albumina', type: 'checkbox', label: 'Albúmina &lt;4 g/dL' },
      { name: 'hb', id: 'ips-hb', type: 'checkbox', label: 'Hemoglobina &lt;10.5 g/dL' },
      { name: 'sexo', id: 'ips-sexo', type: 'checkbox', label: 'Sexo masculino' },
      { name: 'estadioIV', id: 'ips-estadioIV', type: 'checkbox', label: 'Estadio IV de Ann Arbor' },
      { name: 'edad', id: 'ips-edad', type: 'checkbox', label: 'Edad ≥45 años' },
      { name: 'leucocitos', id: 'ips-leucocitos', type: 'checkbox', label: 'Leucocitos ≥15,000/µL' },
      { name: 'linfocitos', id: 'ips-linfocitos', type: 'checkbox', label: 'Linfocitos &lt;8% del recuento leucocitario o &lt;600/µL' },
      { type: 'note', text: 'Puntaje 0-7 (1 punto por cada factor presente). A mayor puntaje, menor supervivencia libre de progresión estimada.' }
    ],
    compute(v) {
      const fields = [v.albumina, v.hb, v.sexo, v.estadioIV, v.edad, v.leucocitos, v.linfocitos];
      if (fields.some(f => f == null)) return null;
      const score = fields.filter(Boolean).length;
      const { banda } = ipsBanda(score);
      return { score, banda };
    },
    format: r => `<strong>IPS ${r.score}: ${r.banda}</strong>.`,
    fragment: r => `IPS ${r.score} (${r.banda})`
  }
];
