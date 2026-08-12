// topics/enfermedad-cerebrovascular/calculators.js
// No se duplica CHA₂DS₂-VASc (ya vive en engine/general-calc.js) ni Glasgow (ya vive en
// topics/exploracion-neurologica), se referencian en el texto de content.js en su lugar.

function banda(score) {
  if (score === 0) return 'sin síntomas';
  if (score <= 4) return 'leve';
  if (score <= 15) return 'moderado';
  if (score <= 20) return 'moderado-grave';
  return 'grave';
}

export const calculators = [
  {
    key: 'nihss', title: 'NIHSS', accent: '#8c3a34',
    subtitle: 'Gravedad neurológica del ECV isquémico agudo',
    incompleteMsg: 'Completa todos los ítems.',
    fields: [
      { name: 'i1a', id: 'ecv-1a', type: 'select', numeric: true, label: '1a. Nivel de consciencia', options: [
        { value: 0, label: 'Alerta (0)' }, { value: 1, label: 'No alerta, despierta con estímulo menor (1)' },
        { value: 2, label: 'No alerta, requiere estímulo repetido/doloroso (2)' }, { value: 3, label: 'Sin respuesta (reflejo o ninguna) (3)' }] },
      { name: 'i1b', id: 'ecv-1b', type: 'select', numeric: true, label: '1b. Preguntas orientadas (mes, edad)', options: [
        { value: 0, label: 'Responde ambas correctamente (0)' }, { value: 1, label: 'Responde una correctamente (1)' }, { value: 2, label: 'No responde ninguna (2)' }] },
      { name: 'i1c', id: 'ecv-1c', type: 'select', numeric: true, label: '1c. Órdenes (abrir/cerrar ojos, mano)', options: [
        { value: 0, label: 'Ejecuta ambas correctamente (0)' }, { value: 1, label: 'Ejecuta una correctamente (1)' }, { value: 2, label: 'No ejecuta ninguna (2)' }] },
      { name: 'gaze', id: 'ecv-gaze', type: 'select', numeric: true, label: '2. Mirada conjugada', options: [
        { value: 0, label: 'Normal (0)' }, { value: 1, label: 'Parálisis parcial de la mirada (1)' }, { value: 2, label: 'Desviación forzada (2)' }] },
      { name: 'visual', id: 'ecv-visual', type: 'select', numeric: true, label: '3. Campos visuales', options: [
        { value: 0, label: 'Sin pérdida visual (0)' }, { value: 1, label: 'Hemianopsia parcial (1)' }, { value: 2, label: 'Hemianopsia completa (2)' }, { value: 3, label: 'Hemianopsia bilateral (3)' }] },
      { name: 'facial', id: 'ecv-facial', type: 'select', numeric: true, label: '4. Paresia facial', options: [
        { value: 0, label: 'Normal (0)' }, { value: 1, label: 'Paresia leve (1)' }, { value: 2, label: 'Paresia parcial (2)' }, { value: 3, label: 'Parálisis completa (3)' }] },
      { name: 'arml', id: 'ecv-arml', type: 'select', numeric: true, row: 'brazos', label: '5a. Brazo izquierdo', options: [
        { value: 0, label: 'Sin claudicación (0)' }, { value: 1, label: 'Claudica (1)' }, { value: 2, label: 'Esfuerzo contra gravedad (2)' }, { value: 3, label: 'Sin esfuerzo contra gravedad (3)' }, { value: 4, label: 'Sin movimiento (4)' }] },
      { name: 'armr', id: 'ecv-armr', type: 'select', numeric: true, row: 'brazos', label: '5b. Brazo derecho', options: [
        { value: 0, label: 'Sin claudicación (0)' }, { value: 1, label: 'Claudica (1)' }, { value: 2, label: 'Esfuerzo contra gravedad (2)' }, { value: 3, label: 'Sin esfuerzo contra gravedad (3)' }, { value: 4, label: 'Sin movimiento (4)' }] },
      { name: 'legl', id: 'ecv-legl', type: 'select', numeric: true, row: 'piernas', label: '6a. Pierna izquierda', options: [
        { value: 0, label: 'Sin claudicación (0)' }, { value: 1, label: 'Claudica (1)' }, { value: 2, label: 'Esfuerzo contra gravedad (2)' }, { value: 3, label: 'Sin esfuerzo contra gravedad (3)' }, { value: 4, label: 'Sin movimiento (4)' }] },
      { name: 'legr', id: 'ecv-legr', type: 'select', numeric: true, row: 'piernas', label: '6b. Pierna derecha', options: [
        { value: 0, label: 'Sin claudicación (0)' }, { value: 1, label: 'Claudica (1)' }, { value: 2, label: 'Esfuerzo contra gravedad (2)' }, { value: 3, label: 'Sin esfuerzo contra gravedad (3)' }, { value: 4, label: 'Sin movimiento (4)' }] },
      { name: 'ataxia', id: 'ecv-ataxia', type: 'select', numeric: true, label: '7. Ataxia de las extremidades', options: [
        { value: 0, label: 'Ausente (0)' }, { value: 1, label: 'Presente en una extremidad (1)' }, { value: 2, label: 'Presente en dos extremidades (2)' }] },
      { name: 'sensory', id: 'ecv-sensory', type: 'select', numeric: true, label: '8. Sensibilidad', options: [
        { value: 0, label: 'Normal (0)' }, { value: 1, label: 'Pérdida leve-moderada (1)' }, { value: 2, label: 'Pérdida severa o total (2)' }] },
      { name: 'language', id: 'ecv-language', type: 'select', numeric: true, label: '9. Mejor lenguaje', options: [
        { value: 0, label: 'Sin afasia (0)' }, { value: 1, label: 'Afasia leve-moderada (1)' }, { value: 2, label: 'Afasia severa (2)' }, { value: 3, label: 'Mudo/afasia global (3)' }] },
      { name: 'dysarthria', id: 'ecv-dysarthria', type: 'select', numeric: true, label: '10. Disartria', options: [
        { value: 0, label: 'Normal (0)' }, { value: 1, label: 'Leve-moderada (1)' }, { value: 2, label: 'Severa/anartria (2)' }] },
      { name: 'extincion', id: 'ecv-extincion', type: 'select', numeric: true, label: '11. Extinción / inatención', options: [
        { value: 0, label: 'Sin anormalidad (0)' }, { value: 1, label: 'Inatención en una modalidad (1)' }, { value: 2, label: 'Inatención profunda, más de una modalidad (2)' }] }
    ],
    compute(v) {
      const score = v.i1a + v.i1b + v.i1c + v.gaze + v.visual + v.facial + v.arml + v.armr + v.legl + v.legr + v.ataxia + v.sensory + v.language + v.dysarthria + v.extincion;
      return { score, b: banda(score) };
    },
    format: r => `<strong>NIHSS ${r.score}/42</strong>: gravedad ${r.b}. NIHSS ≥6 se asocia a mayor probabilidad de oclusión de gran vaso (evaluar candidatura a trombectomía); puntajes muy altos (&gt;25) son criterio relativo de exclusión para trombólisis IV.`,
    fragment: r => `NIHSS ${r.score} (${r.b})`
  },
  {
    key: 'abcd2', title: 'ABCD2', accent: '#5c6b8c',
    subtitle: 'Riesgo de ECV a 2 días tras un AIT',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'edad', id: 'ecv-abcd2-edad', type: 'select', numeric: true, label: 'Edad', options: [{ value: 0, label: '<60 años' }, { value: 1, label: '≥60 años' }] },
      { name: 'pa', id: 'ecv-abcd2-pa', type: 'select', numeric: true, label: 'Presión arterial al ingreso', options: [{ value: 0, label: '<140/90 mmHg' }, { value: 1, label: '≥140/90 mmHg (en cualquier medición)' }] },
      { name: 'clinica', id: 'ecv-abcd2-clinica', type: 'select', numeric: true, label: 'Características clínicas', options: [
        { value: 0, label: 'Otros síntomas (sin debilidad ni alteración aislada del habla)' }, { value: 1, label: 'Alteración del habla, sin debilidad' }, { value: 2, label: 'Debilidad unilateral (con o sin alteración del habla)' }] },
      { name: 'duracion', id: 'ecv-abcd2-duracion', type: 'select', numeric: true, label: 'Duración de los síntomas', options: [
        { value: 0, label: '<10 minutos' }, { value: 1, label: '10-59 minutos' }, { value: 2, label: '≥60 minutos' }] },
      { name: 'diabetes', id: 'ecv-abcd2-dm', type: 'checkbox', label: 'Diabetes mellitus' }
    ],
    compute(v) {
      const score = v.edad + v.pa + v.clinica + v.duracion + (v.diabetes ? 1 : 0);
      const riesgo = score <= 3 ? 'bajo (~1% de ECV a 2 días)' : score <= 5 ? 'moderado (~4%)' : 'alto (~8%)';
      return { score, riesgo };
    },
    format: r => `<strong>ABCD2 ${r.score}/7</strong>: riesgo ${r.riesgo}. Un puntaje ≥4 favorece hospitalización u observación urgente con doble antiagregación si aplica.`,
    fragment: r => `ABCD2 ${r.score}`
  },
  {
    key: 'aspects', title: 'ASPECTS', accent: '#966b35',
    subtitle: 'Extensión del infarto isquémico temprano en la TC simple',
    incompleteMsg: 'Marca las regiones evaluadas (puede dejar todas sin marcar si la TC es normal).',
    fields: [
      { name: 'caudado', id: 'ecv-asp-caudado', type: 'checkbox', label: 'Caudado' },
      { name: 'lentiforme', id: 'ecv-asp-lentiforme', type: 'checkbox', label: 'Lentiforme' },
      { name: 'capsula', id: 'ecv-asp-capsula', type: 'checkbox', label: 'Cápsula interna' },
      { name: 'insula', id: 'ecv-asp-insula', type: 'checkbox', label: 'Ínsula' },
      { name: 'm1', id: 'ecv-asp-m1', type: 'checkbox', label: 'M1' },
      { name: 'm2', id: 'ecv-asp-m2', type: 'checkbox', label: 'M2' },
      { name: 'm3', id: 'ecv-asp-m3', type: 'checkbox', label: 'M3' },
      { name: 'm4', id: 'ecv-asp-m4', type: 'checkbox', label: 'M4' },
      { name: 'm5', id: 'ecv-asp-m5', type: 'checkbox', label: 'M5' },
      { name: 'm6', id: 'ecv-asp-m6', type: 'checkbox', label: 'M6' },
      { type: 'note', text: 'Marca cada región con hipodensidad o pérdida de la diferenciación gris-blanca temprana.' }
    ],
    compute(v) {
      const regiones = ['caudado', 'lentiforme', 'capsula', 'insula', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6'];
      const afectadas = regiones.filter(r => v[r]).length;
      const score = 10 - afectadas;
      return { score, afectadas };
    },
    format: r => `<strong>ASPECTS ${r.score}/10</strong> (${r.afectadas} región/regiones afectada(s)). ${r.score >= 6 ? 'Candidato razonable a trombectomía si hay oclusión de gran vaso.' : 'Infarto ya extenso: mayor riesgo de transformación hemorrágica y peor respuesta a la reperfusión.'}`,
    fragment: r => `ASPECTS ${r.score}/10`
  },
  {
    key: 'ichscore', title: 'ICH Score', accent: '#7c2d2d',
    subtitle: 'Mortalidad a 30 días en la hemorragia intracerebral',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'glasgow', id: 'ecv-ich-gcs', type: 'select', numeric: true, label: 'Glasgow al ingreso', options: [
        { value: 0, label: '13-15' }, { value: 1, label: '5-12' }, { value: 2, label: '3-4' }] },
      { name: 'volumen', id: 'ecv-ich-vol', type: 'select', numeric: true, label: 'Volumen del hematoma', options: [
        { value: 0, label: '<30 cc' }, { value: 1, label: '≥30 cc' }] },
      { name: 'hiv', id: 'ecv-ich-hiv', type: 'checkbox', label: 'Hemorragia intraventricular presente' },
      { name: 'infratentorial', id: 'ecv-ich-infra', type: 'checkbox', label: 'Origen infratentorial (tronco/cerebelo)' },
      { name: 'edad80', id: 'ecv-ich-edad', type: 'checkbox', label: 'Edad ≥80 años' }
    ],
    compute(v) {
      const score = v.glasgow + v.volumen + (v.hiv ? 1 : 0) + (v.infratentorial ? 1 : 0) + (v.edad80 ? 1 : 0);
      const mortalidad = ['~0%', '~13%', '~26%', '~72%', '~97%', '~100%', '~100%'][score];
      return { score, mortalidad };
    },
    format: r => `<strong>ICH Score ${r.score}/6</strong>: mortalidad a 30 días estimada ${r.mortalidad}. No debe usarse de forma aislada para limitar el esfuerzo terapéutico temprano (riesgo documentado de profecía autocumplida).`,
    fragment: r => `ICH Score ${r.score}/6`
  },
  {
    key: 'hunthess', title: 'Hunt y Hess', accent: '#966b35',
    subtitle: 'Gravedad clínica de la hemorragia subaracnoidea',
    incompleteMsg: 'Selecciona el grado.',
    fields: [
      { name: 'grado', id: 'ecv-hh-grado', type: 'select', numeric: true, label: 'Grado clínico', options: [
        { value: 1, label: 'I: asintomático o cefalea leve, rigidez de nuca leve' },
        { value: 2, label: 'II: cefalea moderada-severa, rigidez de nuca, sin déficit salvo parálisis de par craneal' },
        { value: 3, label: 'III: somnolencia, confusión, o déficit focal leve' },
        { value: 4, label: 'IV: estupor, hemiparesia moderada-severa, posible descerebración temprana' },
        { value: 5, label: 'V: coma profundo, rigidez de descerebración, aspecto moribundo' }] }
    ],
    compute(v) {
      const mortalidadQx = ['~1-2%', '~5%', '~15-20%', '~30-40%', '~50-80%'][v.grado - 1];
      return { grado: v.grado, mortalidadQx };
    },
    format: r => `<strong>Grado ${r.grado}/V</strong>: mortalidad quirúrgica históricamente asociada ${r.mortalidadQx}. Correlaciona con el momento óptimo de la intervención y el pronóstico global.`,
    fragment: r => `Hunt-Hess ${r.grado}`
  },
  {
    key: 'fishermod', title: 'Fisher modificada', accent: '#2d5f6b',
    subtitle: 'Riesgo de vasoespasmo en la hemorragia subaracnoidea',
    incompleteMsg: 'Selecciona el grado.',
    fields: [
      { name: 'grado', id: 'ecv-fisher-grado', type: 'select', numeric: true, label: 'Hallazgo en la TC', options: [
        { value: 0, label: 'Sin HSA ni hemorragia intraventricular (HIV) (0)' },
        { value: 1, label: 'HSA focal/difusa delgada, sin HIV (1)' },
        { value: 2, label: 'HSA focal/difusa delgada, CON HIV (2)' },
        { value: 3, label: 'HSA gruesa, sin HIV (3)' },
        { value: 4, label: 'HSA gruesa, CON HIV (4)' }] }
    ],
    compute(v) {
      const riesgo = ['muy bajo', 'bajo', 'moderado', 'alto', 'el más alto de la escala'][v.grado];
      return { grado: v.grado, riesgo };
    },
    format: r => `<strong>Fisher modificada ${r.grado}/4</strong>: riesgo de vasoespasmo/isquemia cerebral tardía ${r.riesgo}. La hemorragia intraventricular asociada aumenta el riesgo independientemente de la cantidad de sangre subaracnoidea.`,
    fragment: r => `Fisher mod. ${r.grado}`
  }
];

export const combinedNote = {
  title: 'Resumen pronóstico', accent: '#4a2d5e',
  subtitle: 'Combina ICH Score, Hunt-Hess y Fisher modificada en un solo párrafo',
  items: ['ichscore', 'hunthess', 'fishermod'],
  build(results, missing) {
    const parts = [];
    if (results.ichscore) parts.push(`ICH Score ${results.ichscore.score}/6 (mortalidad a 30 días estimada ${results.ichscore.mortalidad}).`);
    if (results.hunthess) parts.push(`Hunt y Hess grado ${results.hunthess.grado}/V (mortalidad quirúrgica histórica ${results.hunthess.mortalidadQx}).`);
    if (results.fishermod) parts.push(`Fisher modificada ${results.fishermod.grado}/4 (riesgo de vasoespasmo ${results.fishermod.riesgo}).`);
    let html = parts.join(' ');
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html || 'Selecciona al menos una escala.';
  }
};

export default { calculators, combinedNote };
