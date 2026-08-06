// topics/_template-semiologia/study.js — Autoevaluación de un tema de semiología.
// Mismo contrato que topics/_template/study.js (quiz/flashcards/caso clínico). Para
// semiología, el quiz suele preguntar "¿qué maniobra corresponde a este hallazgo?" o
// "¿qué significa este signo positivo?"; el caso clínico puede ser una viñeta de examen
// físico paso a paso en vez de una viñeta de manejo.

export const quiz = [
  { q: '¿Qué maniobra permite detectar…?', options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'], correct: 1, explanation: 'Por qué la opción B es la maniobra correcta.' }
];

export const flashcards = [
  { front: 'Nombre del signo/maniobra', back: 'Técnica + significado si es positivo.' }
];

export const caseSteps = [
  { vignette: 'Durante la exploración de… encuentras que…', options: ['A', 'B', 'C'], correct: 0, explanation: 'Por qué ese hallazgo lleva a esa interpretación.' }
];

export const caseSummary = 'Resumen que integra los hallazgos del caso con las maniobras revisadas arriba.';

export default { quiz, flashcards, caseSteps, caseSummary };
