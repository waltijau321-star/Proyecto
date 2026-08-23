// topics/anemias-hemoliticas-adquiridas/calculators.js
// PLASMIC score (Bendapudi PK, et al. Lancet Haematol. 2017;4(4):e157-e164): estima la
// probabilidad de deficiencia grave de ADAMTS13 (<10%) antes de tener el resultado del ensayo,
// para decidir el inicio urgente de plasmaféresis en la sospecha de PTT.
// Simplificación: el criterio "hemólisis combinada" (reticulocitos >2.5%, haptoglobina
// indetectable, o bilirrubina indirecta >2 mg/dL) se modela como un único checkbox, tal como se
// usa habitualmente en la práctica clínica.

export const calculators = [
  {
    key: 'plasmic', title: 'PLASMIC score', accent: '#6b2d4a',
    subtitle: 'Probabilidad de deficiencia grave de ADAMTS13 (PTT)',
    incompleteMsg: 'Completa plaquetas, VCM, INR y creatinina.',
    fields: [
      { name: 'plt', id: 'plm-plt', type: 'number', label: 'Plaquetas (×10⁹/L)', placeholder: 'ej. 12', row: 'a' },
      { name: 'mcv', id: 'plm-mcv', type: 'number', step: '0.1', label: 'VCM (fL)', placeholder: 'ej. 88', row: 'a' },
      { name: 'inr', id: 'plm-inr', type: 'number', step: '0.01', label: 'INR', placeholder: 'ej. 1.1', row: 'b' },
      { name: 'creat', id: 'plm-creat', type: 'number', step: '0.01', label: 'Creatinina (mg/dL)', placeholder: 'ej. 1.0', row: 'b' },
      { name: 'hemolisis', id: 'plm-hem', type: 'checkbox', label: 'Datos combinados de hemólisis (reticulocitos >2.5%, haptoglobina indetectable, o bilirrubina indirecta >2 mg/dL)' },
      { name: 'cancer', id: 'plm-cancer', type: 'checkbox', label: 'Cáncer activo (diagnosticado o tratado en el último año)' },
      { name: 'trasplante', id: 'plm-tx', type: 'checkbox', label: 'Antecedente de trasplante de órgano sólido o de células madre' },
      { type: 'note', text: 'La ausencia de cáncer activo y la ausencia de antecedente de trasplante suman 1 punto cada una (son criterios "favorables").' }
    ],
    compute(v) {
      if (v.plt === null || v.plt === undefined || v.mcv === null || v.mcv === undefined ||
          v.inr === null || v.inr === undefined || v.creat === null || v.creat === undefined) return null;
      let points = 0;
      if (v.plt < 30) points++;
      if (v.hemolisis) points++;
      if (!v.cancer) points++;
      if (!v.trasplante) points++;
      if (v.mcv < 90) points++;
      if (v.inr < 1.5) points++;
      if (v.creat < 2.0) points++;
      let banda, prob, rec;
      if (points <= 4) { banda = 'bajo riesgo'; prob = '~0-4%'; rec = 'PTT poco probable; considerar otras causas de microangiopatía (SHU, entre otras)'; }
      else if (points === 5) { banda = 'riesgo intermedio'; prob = '~5-24%'; rec = 'vigilancia estrecha, individualizar el inicio de plasmaféresis según el juicio clínico mientras se espera ADAMTS13'; }
      else { banda = 'alto riesgo'; prob = '~62-82%'; rec = 'iniciar plasmaféresis + corticoide de inmediato, sin esperar la confirmación de ADAMTS13'; }
      return { points, banda, prob, rec };
    },
    format: r => `<strong>PLASMIC score: ${r.points}/7</strong>, ${r.banda} de deficiencia grave de ADAMTS13 (&lt;10%) (probabilidad ${r.prob}). Conducta: ${r.rec}.`,
    fragment: r => `PLASMIC: ${r.points}/7 (${r.banda})`
  }
];
