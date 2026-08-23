// topics/anemias-hemoliticas-hereditarias/calculators.js
// Índice de producción reticulocitaria (Brugnara, Crit Rev Clin Lab Sci 2000;37(2):93-130) y
// clasificación de gravedad de la esferocitosis hereditaria (Bolton-Maggs et al., Br J Haematol
// 2012;156(1):37-49).

function maturationFactor(hto) {
  if (hto >= 40) return 1.0;
  if (hto >= 30) return 1.5;
  if (hto >= 20) return 2.0;
  return 2.5;
}

export const calculators = [
  {
    key: 'ipr', title: 'Índice de producción reticulocitaria', accent: '#5c4a7a',
    subtitle: 'Confirma la respuesta medular a la anemia (hemólisis vs. hipoproliferación)',
    incompleteMsg: 'Completa el hematocrito y los reticulocitos del paciente.',
    fields: [
      { name: 'retic', id: 'ipr-retic', type: 'number', step: '0.1', label: 'Reticulocitos (%)', placeholder: 'ej. 8', row: 'a' },
      { name: 'hto', id: 'ipr-hto', type: 'number', step: '0.1', label: 'Hematocrito del paciente (%)', placeholder: 'ej. 28', row: 'a' },
      { name: 'htoNl', id: 'ipr-htonl', type: 'number', step: '0.1', label: 'Hematocrito normal de referencia (%)', placeholder: '45', row: 'b' },
      { type: 'note', text: 'El hematocrito normal de referencia por defecto es 45% si se deja en blanco.' }
    ],
    compute(v) {
      if (v.retic === null || v.retic === undefined || v.hto === null || v.hto === undefined) return null;
      const htoNl = (v.htoNl === null || v.htoNl === undefined || v.htoNl === 0) ? 45 : v.htoNl;
      const correctedRetic = v.retic * (v.hto / htoNl);
      const mf = maturationFactor(v.hto);
      const ipr = correctedRetic / mf;
      const iprR = Math.round(ipr * 10) / 10;
      let interp;
      if (iprR >= 3) interp = 'respuesta medular adecuada, consistente con hemólisis o pérdida sanguínea aguda';
      else if (iprR >= 2) interp = 'respuesta intermedia; correlacionar con el cuadro clínico';
      else interp = 'respuesta medular inadecuada (hipoproliferativa); reconsiderar el diagnóstico o sospechar una crisis aplásica sobreañadida';
      return { correctedRetic: Math.round(correctedRetic * 10) / 10, ipr: iprR, interp };
    },
    format: r => `Reticulocitos corregidos: <strong>${r.correctedRetic}%</strong>. <strong>IPR: ${r.ipr}</strong>, ${r.interp}.`,
    fragment: r => `IPR ${r.ipr}`
  },
  {
    key: 'hsgravedad', title: 'Gravedad de la esferocitosis hereditaria', accent: '#8c3a34',
    subtitle: 'Clasifica la hemólisis crónica en leve, moderada o grave',
    incompleteMsg: 'Completa hemoglobina, reticulocitos y bilirrubina.',
    fields: [
      { name: 'hb', id: 'hsg-hb', type: 'number', step: '0.1', label: 'Hemoglobina (g/dL)', placeholder: 'ej. 10', row: 'a' },
      { name: 'retic', id: 'hsg-retic', type: 'number', step: '0.1', label: 'Reticulocitos (%)', placeholder: 'ej. 8', row: 'a' },
      { name: 'bili', id: 'hsg-bili', type: 'number', step: '0.1', label: 'Bilirrubina total (mg/dL)', placeholder: 'ej. 2.5', row: 'b' }
    ],
    compute(v) {
      if (v.hb === null || v.hb === undefined || v.retic === null || v.retic === undefined ||
          v.bili === null || v.bili === undefined) return null;
      let banda, rec;
      if (v.hb < 8 || v.retic > 10 || v.bili > 3) {
        banda = 'grave'; rec = 'con frecuencia dependiente de transfusión; esplenectomía habitualmente indicada';
      } else if (v.hb <= 11 || (v.retic >= 6 && v.retic <= 10) || (v.bili >= 2 && v.bili <= 3)) {
        banda = 'moderada'; rec = 'esplenectomía frecuentemente indicada si es sintomática';
      } else {
        banda = 'leve'; rec = 'esplenectomía rara vez necesaria; vigilancia periódica';
      }
      return { banda, rec };
    },
    format: r => `<strong>Esferocitosis hereditaria ${r.banda}</strong>. ${r.rec}.`,
    fragment: r => `HS: ${r.banda}`
  }
];
