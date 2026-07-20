// topics/_template/calculators.js — Plantilla de calculadoras del tema.
// Cada descriptor: { key, title, accent, subtitle, fields[], compute, format, fragment? }.
// compute es una función pura que devuelve un objeto resultado (o null si faltan datos).

export const calculators = [
  {
    key: 'ejemplo', title: 'Escala de ejemplo', accent: '#3d5a73',
    subtitle: 'Descripción breve',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'a', id: 'ej-a', type: 'number', step: '0.1', label: 'Variable A', placeholder: 'ej. 1.2', row: 'r1' },
      { name: 'b', id: 'ej-b', type: 'number', label: 'Variable B', placeholder: 'ej. 40', row: 'r1' },
      { name: 'sexo', id: 'ej-sexo', type: 'select', label: 'Sexo', options: [
        { value: 'm', label: 'Masculino' }, { value: 'f', label: 'Femenino' }] },
      { name: 'grave', id: 'ej-grave', type: 'checkbox', label: 'Factor de gravedad presente' },
      { type: 'note', text: 'Nota o fórmula de referencia.' }
    ],
    compute(v) {
      const score = v.a + v.b + (v.grave ? 2 : 0);
      return { score, riesgo: score > 40 ? 'alto' : 'bajo' };
    },
    format: r => `<strong>Escala ${r.score}</strong> — riesgo ${r.riesgo}.`,
    fragment: r => `Escala ${r.score} (${r.riesgo})`
  }
];

// Opcional: combina varias escalas del tema en un párrafo.
export const combinedNote = {
  title: 'Nota combinada', accent: '#3d5a73',
  subtitle: 'Combina varias escalas',
  items: ['ejemplo'],
  build(results, missing) {
    const parts = [];
    if (results.ejemplo) parts.push(`Escala ${results.ejemplo.score}.`);
    let html = parts.join(' ');
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html || 'Selecciona al menos una escala.';
  }
};

export default { calculators, combinedNote };
