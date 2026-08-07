// topics/exploracion-neurologica/calculators.js — Sin calculadora: la Escala de Coma de Glasgow
// se muestra como escala de exploración (content.clasificacion) igual que un tema de enfermedad
// con clasificación, pero no requiere una calculadora dedicada (es una suma simple de 3 campos
// que el propio examinador reporta desglosada). Mismo criterio que los demás temas de
// Semiología: el motor maneja `calculators: []` sin problema.

export const calculators = [];
export const combinedNote = null;

export default { calculators, combinedNote };
