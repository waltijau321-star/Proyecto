// topics/_template-semiologia/calculators.js — La mayoría de los temas de semiología no
// tienen calculadora (son técnica, no una escala numérica). Se deja el arreglo vacío: el
// motor ya maneja `calculators: []` sin problema (ver compose() en topics/registry.js) y
// la pestaña de calculadoras simplemente no muestra nada para este tema.
//
// Si el sistema SÍ tiene una escala validada de exploración (ej. Glasgow, NIHSS), copiá el
// patrón de topics/_template/calculators.js — el contrato es idéntico al de un tema de enfermedad.

export const calculators = [];
export const combinedNote = null;

export default { calculators, combinedNote };
