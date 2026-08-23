// topics/alteraciones-serie-blanca/calculators.js
// Conteo Absoluto de Neutrófilos (RAN): RAN = leucocitos totales x (%neutrófilos segmentados +
// %bandas) / 100. Clasifica la severidad de la neutropenia (leve/moderada/grave/agranulocitosis),
// el cálculo central de este tema y el que determina si aplican los criterios de neutropenia
// febril (ver Complicaciones y el tema de Oncología general).

function ranBanda(ran) {
  if (ran >= 1500) return { banda: 'Normal', color: 'ok' };
  if (ran >= 1000) return { banda: 'Neutropenia leve', color: 'warn' };
  if (ran >= 500) return { banda: 'Neutropenia moderada', color: 'warn' };
  if (ran >= 100) return { banda: 'Neutropenia grave', color: 'danger' };
  return { banda: 'Agranulocitosis', color: 'danger' };
}

export const calculators = [
  {
    key: 'ran', title: 'Conteo Absoluto de Neutrófilos (RAN)', accent: '#3d6b8c',
    subtitle: 'Severidad de la neutropenia',
    incompleteMsg: 'Completa los leucocitos totales y el porcentaje de neutrófilos (bandas es opcional).',
    fields: [
      { name: 'leucocitos', id: 'ran-leuco', type: 'number', label: 'Leucocitos totales (células/µL)', placeholder: 'p. ej. 3200' },
      { name: 'neutrofilos', id: 'ran-neutro', type: 'number', label: 'Neutrófilos segmentados (%)', placeholder: 'p. ej. 30' },
      { name: 'bandas', id: 'ran-bandas', type: 'number', label: 'Bandas / cayados (%, opcional)', placeholder: 'p. ej. 2', required: false },
      { type: 'note', text: 'RAN = leucocitos totales x (%neutrófilos + %bandas) / 100. Umbrales: normal ≥1500, leve 1000-1499, moderada 500-999, grave 100-499, agranulocitosis &lt;100 células/µL.' }
    ],
    compute(v) {
      if (v.leucocitos == null || v.neutrofilos == null || v.leucocitos <= 0 || v.neutrofilos < 0) return null;
      const bandas = v.bandas == null ? 0 : v.bandas;
      const ran = Math.round(v.leucocitos * (v.neutrofilos + bandas) / 100);
      const { banda, color } = ranBanda(ran);
      return { ran, banda, color };
    },
    format: r => `<strong>RAN: ${r.ran.toLocaleString('es')} células/µL</strong> · ${r.banda}.`,
    fragment: r => `RAN ${r.ran.toLocaleString('es')} (${r.banda})`
  }
];
