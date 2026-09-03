// topics/hipertiroidismo-tiroiditis/calculators.js
// Sin calculadora propia, y es deliberado. Las dos herramientas numericas que este tema usaria
// ya viven en otros temas del mismo eje, y duplicarlas seria duplicar su mantenimiento:
//
// - La interpretacion del perfil tiroideo (TSH y T4 libre a patron, incluida la tirotoxicosis y
//   el hipertiroidismo subclinico) esta en `hipotiroidismo` como `perfil-tiroideo`.
// - El indice de Burch-Wartofsky para la tormenta tiroidea esta en `urgencias-tiroideas`.
//
// Lo que decide el tratamiento aqui no es una puntuacion sino una prueba de imagen funcional
// (captacion alta frente a baja, Figura 2 de Definicion) y, en la orbitopatia, la puntuacion CAS,
// que es una suma de 7 items presentes o ausentes y se explora, no se calcula.
// El motor maneja `calculators: []` sin problema (mismo criterio que `exploracion-abdominal`).

export const calculators = [];
export const combinedNote = null;

export default { calculators, combinedNote };
