// topics/anemia-megaloblastica/calculators.js
// Diferencial B12 vs. folato por ácido metilmalónico (MMA) y homocisteína séricos: el folato y
// la B12 comparten la vía de síntesis de timidina (que eleva la homocisteína si cualquiera de las
// 2 falta), pero solo la B12 participa en la vía de la metilmalonil-CoA mutasa (que eleva el MMA
// SOLO si falta B12). Umbrales orientativos (varían por ensayo/laboratorio): MMA >0.4 µmol/L,
// homocisteína >15 µmol/L.

export const calculators = [
  {
    key: 'mmahcy', title: 'Diferencial B12 vs. folato', accent: '#5c3d8c',
    subtitle: 'Interpretación combinada de ácido metilmalónico (MMA) y homocisteína',
    incompleteMsg: 'Completa el MMA y la homocisteína séricos.',
    fields: [
      { name: 'mma', id: 'mmh-mma', type: 'number', step: '0.01', label: 'Ácido metilmalónico, MMA (µmol/L)', placeholder: 'ej. 0.2', row: 'a' },
      { name: 'hcy', id: 'mmh-hcy', type: 'number', step: '0.1', label: 'Homocisteína (µmol/L)', placeholder: 'ej. 12', row: 'a' },
      { type: 'note', text: 'Umbrales orientativos (varían por ensayo): MMA &gt;0.4 µmol/L, homocisteína &gt;15 µmol/L.' }
    ],
    compute(v) {
      if (v.mma === null || v.mma === undefined || v.hcy === null || v.hcy === undefined) return null;
      const mmaAlta = v.mma > 0.4;
      const hcyAlta = v.hcy > 15;
      let patron, interp;
      if (mmaAlta && hcyAlta) {
        patron = 'MMA y homocisteína elevados';
        interp = 'sugestivo de deficiencia de vitamina B12 (bloquea tanto la vía de la metionina sintasa como la de la metilmalonil-CoA mutasa)';
      } else if (!mmaAlta && hcyAlta) {
        patron = 'solo homocisteína elevada, MMA normal';
        interp = 'sugestivo de deficiencia de folato (solo bloquea la vía de la metionina sintasa, compartida con B12; la vía de la metilmalonil-CoA mutasa, exclusiva de B12, permanece intacta)';
      } else if (mmaAlta && !hcyAlta) {
        patron = 'MMA elevado con homocisteína normal';
        interp = 'patrón atípico para deficiencia vitamínica aislada; reconsiderar otras causas de MMA elevado (insuficiencia renal, sobrecrecimiento bacteriano) antes de concluir deficiencia de B12';
      } else {
        patron = 'ambos normales';
        interp = 'deficiencia de B12 o folato poco probable como causa de la anemia macrocítica; reconsiderar el diagnóstico';
      }
      return { patron, interp };
    },
    format: r => `<strong>${r.patron}</strong>: ${r.interp}.`,
    fragment: r => r.patron
  }
];
