// topics/_template/study.js — Plantilla de autoevaluación del tema.

export const quiz = [
  { q: '¿Pregunta de ejemplo?', options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'], correct: 1, explanation: 'Por qué la opción B es correcta.' }
];

export const flashcards = [
  { front: 'Anverso de la ficha', back: 'Reverso con la respuesta.' }
];

export const caseSteps = [
  { vignette: 'Viñeta del caso, paso 1…', options: ['A', 'B', 'C'], correct: 0, explanation: 'Explicación de la decisión correcta.' }
];

export const caseSummary = 'Resumen que integra las decisiones del caso y remite a las secciones relevantes.';

export default { quiz, flashcards, caseSteps, caseSummary };
