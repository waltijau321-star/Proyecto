// topics/anemia-aplasica/calculators.js
// Criterios de gravedad de Camitta (Camitta et al., Blood 1976;48(1):63-70).
// Simplificación: usa celularidad medular <25% como umbral único (la variante 25-50% con <30%
// de células hematopoyéticas, menos frecuente en la práctica, se explica en el texto pero no se
// modela aquí para mantener la calculadora simple de usar).

export const calculators = [
  {
    key: 'camitta', title: 'Criterios de Camitta', accent: '#8c4a3d',
    subtitle: 'Gravedad de la anemia aplásica',
    incompleteMsg: 'Completa la celularidad medular y las 3 citopenias.',
    fields: [
      { name: 'cel', id: 'cam-cel', type: 'number', step: '0.1', label: 'Celularidad medular (%)', placeholder: 'ej. 10', row: 'a' },
      { name: 'anc', id: 'cam-anc', type: 'number', step: '0.01', label: 'Neutrófilos absolutos (×10⁹/L)', placeholder: 'ej. 0.3', row: 'a' },
      { name: 'plt', id: 'cam-plt', type: 'number', label: 'Plaquetas (×10⁹/L)', placeholder: 'ej. 15', row: 'b' },
      { name: 'retic', id: 'cam-retic', type: 'number', label: 'Reticulocitos absolutos (×10⁹/L)', placeholder: 'ej. 15', row: 'b' },
      { type: 'note', text: 'Reticulocitos &lt;20×10⁹/L equivale aproximadamente a un recuento corregido &lt;1%.' }
    ],
    compute(v) {
      if (v.cel === null || v.cel === undefined || v.anc === null || v.anc === undefined ||
          v.plt === null || v.plt === undefined || v.retic === null || v.retic === undefined) return null;
      const citopenias = (v.anc < 0.5 ? 1 : 0) + (v.plt < 20 ? 1 : 0) + (v.retic < 20 ? 1 : 0);
      const hipocelular = v.cel < 25;
      let banda, rec;
      if (hipocelular && citopenias >= 2) {
        if (v.anc < 0.2) { banda = 'muy grave'; rec = 'tratamiento urgente: trasplante alogénico de primera línea si es joven con donante HLA-idéntico, o inmunosupresión (ATG + ciclosporina + eltrombopag)'; }
        else { banda = 'grave'; rec = 'tratamiento urgente: trasplante alogénico de primera línea si es joven con donante HLA-idéntico, o inmunosupresión (ATG + ciclosporina + eltrombopag)'; }
      } else {
        banda = 'no grave (moderada)';
        rec = 'vigilancia expectante si no hay dependencia transfusional ni citopenias sintomáticas progresivas';
      }
      return { banda, citopenias, rec };
    },
    format: r => `<strong>Anemia aplásica ${r.banda}</strong> (${r.citopenias}/3 citopenias en rango de gravedad). ${r.rec}.`,
    fragment: r => `Camitta: ${r.banda}`
  }
];
