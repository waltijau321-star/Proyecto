// topics/embolia-grasa/calculators.js
// 1 herramienta real:
// - Criterios de Gurd y Wilson: diagnóstico clínico del síndrome de embolismo graso; no existe
//   una prueba confirmatoria única. Requiere >=1 criterio mayor + >=4 criterios menores (Gurd AR,
//   Wilson RI. J Bone Joint Surg Br. 1974;56-B(3):408-416).

export const calculators = [
  {
    key: 'gurd-wilson', title: 'Criterios de Gurd y Wilson', accent: '#6b4a2e',
    subtitle: 'Diagnóstico clínico del síndrome de embolismo graso',
    incompleteMsg: 'Marca los criterios presentes en cada categoría (deja sin marcar los ausentes).',
    fields: [
      { type: 'note', text: 'El diagnóstico requiere ≥2 criterios mayores, o 1 criterio mayor + ≥4 criterios menores.' },
      { name: 'petequias', id: 'gw-petequias', type: 'checkbox', label: 'Criterio mayor: púrpura petequial (conjuntiva, axilas, tórax superior)' },
      { name: 'respiratorio', id: 'gw-respiratorio', type: 'checkbox', label: 'Criterio mayor: síntomas respiratorios con infiltrados bilaterales' },
      { name: 'cerebral', id: 'gw-cerebral', type: 'checkbox', label: 'Criterio mayor: signos cerebrales sin relación con traumatismo craneal' },
      { name: 'taquicardia', id: 'gw-taquicardia', type: 'checkbox', label: 'Criterio menor: taquicardia &gt;110 lpm' },
      { name: 'fiebre', id: 'gw-fiebre', type: 'checkbox', label: 'Criterio menor: fiebre &gt;38.5°C' },
      { name: 'retina', id: 'gw-retina', type: 'checkbox', label: 'Criterio menor: cambios retinianos (grasa o petequias) en el fondo de ojo' },
      { name: 'renal', id: 'gw-renal', type: 'checkbox', label: 'Criterio menor: signos renales (anuria u oliguria)' },
      { name: 'ictericia', id: 'gw-ictericia', type: 'checkbox', label: 'Criterio menor: ictericia' },
      { name: 'trombocitopenia', id: 'gw-trombocitopenia', type: 'checkbox', label: 'Criterio menor: trombocitopenia (caída &gt;20% del basal)' },
      { name: 'anemia', id: 'gw-anemia', type: 'checkbox', label: 'Criterio menor: anemia (caída de hemoglobina)' },
      { name: 'vsg', id: 'gw-vsg', type: 'checkbox', label: 'Criterio menor: velocidad de sedimentación globular elevada' },
      { name: 'macroglobulinemia', id: 'gw-macroglobulinemia', type: 'checkbox', label: 'Criterio menor: macroglobulinemia grasa' }
    ],
    compute(v) {
      const mayores = [v.petequias, v.respiratorio, v.cerebral];
      const menores = [v.taquicardia, v.fiebre, v.retina, v.renal, v.ictericia, v.trombocitopenia, v.anemia, v.vsg, v.macroglobulinemia];
      const todos = [...mayores, ...menores];
      if (todos.some(d => d == null)) return null;
      const nMayores = mayores.filter(Boolean).length;
      const nMenores = menores.filter(Boolean).length;
      const cumple = nMayores >= 2 || (nMayores >= 1 && nMenores >= 4);
      return { nMayores, nMenores, cumple };
    },
    format: r => {
      if (r.cumple) {
        return `<strong>${r.nMayores} criterio(s) mayor(es) · ${r.nMenores} criterio(s) menor(es)</strong>. Cumple criterios diagnósticos de síndrome de embolismo graso.`;
      }
      return `<strong>${r.nMayores} criterio(s) mayor(es) · ${r.nMenores} criterio(s) menor(es)</strong>. No cumple criterios diagnósticos por el momento (requiere ≥2 mayores, o 1 mayor y ≥4 menores); reevaluar si aparecen nuevos hallazgos.`;
    },
    fragment: r => `Gurd-Wilson ${r.nMayores}M/${r.nMenores}m${r.cumple ? ' (cumple)' : ''}`
  }
];
