// topics/mieloma-multiple/calculators.js
// 2 herramientas reales:
// - R-ISS (Revised International Staging System): estadificación pronóstica validada que combina
//   ISS (albúmina, beta-2-microglobulina), LDH, y citogenética de alto riesgo (Palumbo A, et al.
//   J Clin Oncol. 2015;33(26):2863-2869).
// - Criterios CRAB/SLiM: herramienta categórica que distingue mieloma activo (requiere
//   tratamiento) de la enfermedad asintomática (MGUS/smoldering, vigilar) (Rajkumar SV, et al.
//   Lancet Oncol. 2014;15(12):e538-e548).

function rissBanda(b2m, albuminaBaja, ldhAlta, citogeneticaAltoRiesgo) {
  const issI = b2m === 'bajo' && !albuminaBaja;
  const issIII = b2m === 'alto';
  if (issI && !citogeneticaAltoRiesgo && !ldhAlta) return { banda: 'R-ISS I', color: 'ok' };
  if (issIII && (citogeneticaAltoRiesgo || ldhAlta)) return { banda: 'R-ISS III', color: 'danger' };
  return { banda: 'R-ISS II', color: 'warn' };
}

export const calculators = [
  {
    key: 'riss', title: 'R-ISS (Estadificación Revisada)', accent: '#7a1f3d',
    subtitle: 'Estadificación pronóstica del mieloma múltiple',
    incompleteMsg: 'Completa la beta-2-microglobulina y los demás factores.',
    fields: [
      { name: 'b2m', id: 'riss-b2m', type: 'select', label: 'Beta-2-microglobulina sérica', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'bajo', label: '&lt;3.5 mg/L' },
        { value: 'intermedio', label: '3.5-5.5 mg/L' },
        { value: 'alto', label: '≥5.5 mg/L' }
      ] },
      { name: 'albuminaBaja', id: 'riss-albumina', type: 'checkbox', label: 'Albúmina sérica &lt;3.5 g/dL' },
      { name: 'ldhAlta', id: 'riss-ldh', type: 'checkbox', label: 'LDH sérica elevada' },
      { name: 'citogeneticaAltoRiesgo', id: 'riss-citogenetica', type: 'checkbox', label: 'Citogenética de alto riesgo (del17p, t(4;14), o t(14;16))' },
      { type: 'note', text: 'R-ISS I: β2M &lt;3.5 + albúmina normal + citogenética estándar + LDH normal. R-ISS III: β2M ≥5.5 + (citogenética de alto riesgo o LDH elevada). R-ISS II: el resto.' }
    ],
    compute(v) {
      if (!v.b2m || v.albuminaBaja == null || v.ldhAlta == null || v.citogeneticaAltoRiesgo == null) return null;
      const { banda, color } = rissBanda(v.b2m, v.albuminaBaja, v.ldhAlta, v.citogeneticaAltoRiesgo);
      return { banda, color };
    },
    format: r => `<strong>${r.banda}</strong>.`,
    fragment: r => r.banda
  },
  {
    key: 'crab', title: 'Criterios CRAB/SLiM', accent: '#8c6b2d',
    subtitle: 'Mieloma activo vs. enfermedad asintomática (MGUS/smoldering)',
    incompleteMsg: 'Marca los criterios presentes (deja sin marcar los ausentes).',
    fields: [
      { name: 'calcio', id: 'crab-calcio', type: 'checkbox', label: 'Calcio elevado (&gt;11 mg/dL o &gt;1 mg/dL sobre el límite superior normal)' },
      { name: 'renal', id: 'crab-renal', type: 'checkbox', label: 'Insuficiencia renal (creatinina &gt;2 mg/dL o depuración &lt;40 mL/min)' },
      { name: 'anemia', id: 'crab-anemia', type: 'checkbox', label: 'Anemia (Hb &lt;10 g/dL o &gt;2 g/dL por debajo de lo normal)' },
      { name: 'hueso', id: 'crab-hueso', type: 'checkbox', label: 'Lesión ósea lítica (≥1 en imagen)' },
      { name: 'slim', id: 'crab-slim', type: 'checkbox', label: 'Biomarcador SLiM presente (≥60% células plasmáticas clonales, razón de cadenas ligeras ≥100, o &gt;1 lesión focal en RM)' },
      { type: 'note', text: 'La presencia de CUALQUIER criterio CRAB o biomarcador SLiM define mieloma activo (requiere tratamiento). Su ausencia completa sugiere MGUS o mieloma smoldering (vigilar).' }
    ],
    compute(v) {
      const fields = [v.calcio, v.renal, v.anemia, v.hueso, v.slim];
      if (fields.some(f => f == null)) return null;
      const activo = fields.some(Boolean);
      const nCriterios = fields.filter(Boolean).length;
      return { activo, nCriterios };
    },
    format: r => r.activo
      ? `<strong>Mieloma activo</strong> (${r.nCriterios} criterio${r.nCriterios > 1 ? 's' : ''} CRAB/SLiM presente${r.nCriterios > 1 ? 's' : ''}): requiere tratamiento.`
      : '<strong>Sin criterios CRAB/SLiM</strong>: sugiere MGUS o mieloma smoldering, vigilancia activa sin tratamiento.',
    fragment: r => r.activo ? 'Mieloma activo' : 'Sin criterios (vigilar)'
  }
];
