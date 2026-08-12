// engine/quiz-srs.js
// Repetición espaciada para preguntas de quiz (mismo sistema Leitner que ya usan las fichas:
// 5 cajas, intervalos 0/1/3/7/14 días), pero aplicado al banco de preguntas de cada tema.
// Compartido entre el quiz por tema (study-view.js) y el generador de exámenes (exam-mode.js),
// así toda práctica (dentro de un tema o en un examen simulado) alimenta el mismo calendario.
import { syncGet, syncSet } from './cloud-sync.js';

const INTERVALS = { 1: 0, 2: 1 * 86400000, 3: 3 * 86400000, 4: 7 * 86400000, 5: 14 * 86400000 };

function key(topicId) { return 'rm:quiz-srs:' + topicId; }

export function loadQuizSRS(topicId) { return syncGet(key(topicId), {}); }

export function updateQuizSRS(topicId, qIndex, correct) {
  const store = loadQuizSRS(topicId);
  const box = correct ? Math.min(5, ((store[qIndex] && store[qIndex].box) || 1) + 1) : 1;
  store[qIndex] = { box, next: Date.now() + (INTERVALS[box] || 0) };
  syncSet(key(topicId), store);
}

// Índices vencidos dentro de un tema de `total` preguntas. Una pregunta nunca respondida NO
// cuenta como vencida (a diferencia de versiones previas): primero hay que responderla una vez
// como parte del banco completo antes de que entre al ciclo de repaso espaciado.
export function dueQuestionIndices(topicId, total) {
  const store = loadQuizSRS(topicId);
  const now = Date.now();
  const due = [];
  for (let i = 0; i < total; i++) {
    const e = store[i];
    if (e && e.next <= now) due.push(i);
  }
  return due;
}

// Verdadero si las `total` preguntas del banco ya se respondieron al menos una vez cada una
// (acumulado entre sesiones, sin importar si se acertaron o no). Se usa para desbloquear las
// fichas de repaso del tema: antes de completar el banco, quedan bloqueadas.
export function isQuizCompleted(topicId, total) {
  if (!total) return false;
  const store = loadQuizSRS(topicId);
  for (let i = 0; i < total; i++) {
    if (!store[i]) return false;
  }
  return true;
}

// Cuántas preguntas del banco faltan por responder al menos una vez (para el mensaje del candado).
export function remainingToComplete(topicId, total) {
  const store = loadQuizSRS(topicId);
  let n = 0;
  for (let i = 0; i < total; i++) if (!store[i]) n++;
  return n;
}
