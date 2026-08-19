// topics/miocardiopatias/calculators.js
// No se duplica CHA₂DS₂-VASc (ya vive en engine/general-calc.js): se referencia en el texto de
// content.js en su lugar.

export const calculators = [
  {
    key: 'hcmriskscd', title: 'HCM Risk-SCD', accent: '#8c3a34',
    subtitle: 'Riesgo de muerte súbita cardiaca a 5 años en miocardiopatía hipertrófica',
    incompleteMsg: 'Completa edad, grosor parietal máximo, diámetro de aurícula izquierda y gradiente del TSVI.',
    fields: [
      { name: 'age', id: 'hcm-age', type: 'number', label: 'Edad (años, ≥16)', placeholder: 'ej. 45', row: 'a' },
      { name: 'mwt', id: 'hcm-mwt', type: 'number', step: '0.1', label: 'Grosor parietal máximo (mm)', placeholder: 'ej. 20', row: 'a' },
      { name: 'lad', id: 'hcm-lad', type: 'number', step: '0.1', label: 'Diámetro de aurícula izquierda (mm)', placeholder: 'ej. 42', row: 'b' },
      { name: 'lvot', id: 'hcm-lvot', type: 'number', step: '0.1', label: 'Gradiente máximo TSVI reposo/Valsalva (mmHg)', placeholder: 'ej. 10', row: 'b' },
      { name: 'fhscd', id: 'hcm-fhscd', type: 'checkbox', label: 'Antecedente familiar de muerte súbita' },
      { name: 'nsvt', id: 'hcm-nsvt', type: 'checkbox', label: 'Taquicardia ventricular no sostenida documentada' },
      { name: 'syncope', id: 'hcm-syncope', type: 'checkbox', label: 'Síncope inexplicado' },
      { type: 'note', text: 'Modelo O\'Mahony et al. (ESC 2014). No validado en &lt;16 años, atletas de alto rendimiento con hipertrofia fisiológica, ni tras miectomía/ablación septal previas.' }
    ],
    compute(v) {
      if (v.age === null || v.age === undefined || v.mwt === null || v.mwt === undefined ||
          v.lad === null || v.lad === undefined || v.lvot === null || v.lvot === undefined) return null;
      const fh = v.fhscd ? 1 : 0, nsvt = v.nsvt ? 1 : 0, syn = v.syncope ? 1 : 0;
      const pi = 0.15939858 * v.mwt - 0.00294271 * v.mwt * v.mwt + 0.0259082 * v.lad +
        0.00446131 * v.lvot + 0.4583082 * fh + 0.82639195 * nsvt + 0.71650361 * syn -
        0.01799934 * v.age;
      const prob5y = (1 - Math.pow(0.998, Math.exp(pi))) * 100;
      const pct = Math.max(0, Math.round(prob5y * 10) / 10);
      let banda, rec;
      if (pct < 4) { banda = 'bajo'; rec = 'CDI generalmente no indicado por este riesgo aislado'; }
      else if (pct < 6) { banda = 'intermedio'; rec = 'individualizar según factores adicionales no incluidos en el modelo'; }
      else { banda = 'alto'; rec = 'considerar cardiodesfibrilador implantable (CDI)'; }
      return { pct, banda, rec };
    },
    format: r => `<strong>HCM Risk-SCD: ${r.pct}%</strong> de riesgo de muerte súbita cardiaca a 5 años (riesgo ${r.banda}). ${r.rec}.`,
    fragment: r => `HCM Risk-SCD ${r.pct}% (${r.banda})`
  }
];
