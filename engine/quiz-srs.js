// engine/quiz-srs.js
// Repetición espaciada para preguntas de quiz (mismo sistema Leitner que ya usan las fichas:
// 5 cajas, intervalos 0/1/3/7/14 días), pero aplicado al banco de preguntas de cada tema.
// Compartido entre el quiz por tema (study-view.js) y el generador de exámenes (exam-mode.js),
// así toda práctica (dentro de un tema o en un examen simulado) alimenta el mismo calendario.
//
// IDENTIDAD DE LA PREGUNTA: el progreso se guarda bajo un id derivado del ENUNCIADO, no de la
// posición en el array. Antes se usaba el índice, y como los bancos se editan constantemente
// (insertar, borrar o reordenar una pregunta), el calendario de repaso de todos los usuarios
// quedaba apuntando a preguntas distintas, en silencio. El id se calcula sobre el texto
// normalizado (sin acentos, sin entidades HTML, sin etiquetas, sin puntuación), de modo que
// corregir la ortografía de una pregunta NO borra el progreso de nadie; reescribir el enunciado
// de fondo sí lo reinicia, que es justo lo que corresponde porque ya es otra pregunta.
import { syncGet, syncSet } from './cloud-sync.js';

const INTERVALS = { 1: 0, 2: 1 * 86400000, 3: 3 * 86400000, 4: 7 * 86400000, 5: 14 * 86400000 };

function key(topicId) { return 'rm:quiz-srs:' + topicId; }

/* ---------- Id estable por pregunta ---------- */

// Normaliza el enunciado a su esqueleto comparable: decodifica entidades numéricas (&#241; es
// la "ñ" en los temas escritos sin acentos), quita etiquetas, quita diacríticos y se queda solo
// con letras y dígitos en minúscula. Así "¿Qué define una APNEA en el estudio de sueño?" y
// "Que define una APNEA en el estudio de sue&#241;o?" producen el mismo id.
function normalizeStem(s) {
  return String(s == null ? '' : s)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&[a-zA-Z]+;/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

// El enunciado de una pregunta suelta es `q`; el de un caso en cascada es su viñeta más el
// primer paso (la viñeta sola puede repetirse entre casos hermanos de un mismo tema).
function stemOf(q) {
  if (!q || typeof q !== 'object') return '';
  if (q.type === 'cascade') {
    const steps = Array.isArray(q.steps) ? q.steps : [];
    const first = steps.length ? steps[0].q : '';
    const stem = normalizeStem(q.vignette) + '|' + normalizeStem(first);
    if (stem !== '|') return stem;
  } else {
    const stem = normalizeStem(q.q);
    if (stem) return stem;
  }
  // Respaldo para una pregunta sin enunciado utilizable: las opciones, y si tampoco hay, el
  // objeto entero. Nunca devolvemos cadena vacía, porque un id vacío dejaría la pregunta fuera
  // del conteo de "respondidas" y las fichas del tema no se desbloquearían jamás.
  const opts = Array.isArray(q.options) ? q.options.join('|') : '';
  return normalizeStem(opts) || normalizeStem(JSON.stringify(q));
}

function fnv1a(str, seed) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

// 64 bits (dos FNV-1a con semillas distintas) en vez de 32: con ~3700 preguntas en la
// biblioteca, 32 bits ya daría una probabilidad de colisión del orden de 1 en 1000, y una
// colisión fusionaría el progreso de dos preguntas sin que nada lo delate.
export function questionId(q) {
  const s = stemOf(q);
  const a = fnv1a(s, 0x811c9dc5).toString(16).padStart(8, '0');
  const b = fnv1a(s, 0x7fffffff).toString(16).padStart(8, '0');
  return a + b;
}

/* ---------- Migración del formato viejo (claves = índice) ---------- */

// Convierte las claves numéricas que dejó la versión anterior a ids, usando el banco actual como
// mejor aproximación disponible. Las claves que ya son ids se conservan tal cual (incluidas las
// de preguntas que hoy no están en el banco: si la pregunta vuelve, su progreso sigue ahí).
function migrate(store, quiz) {
  const numeric = Object.keys(store).filter(k => /^\d+$/.test(k));
  if (!numeric.length || !Array.isArray(quiz) || !quiz.length) return { store, changed: false };
  const out = {};
  Object.keys(store).forEach(k => { if (!/^\d+$/.test(k)) out[k] = store[k]; });
  numeric.forEach(k => {
    const q = quiz[Number(k)];
    if (!q) return; // índice fuera del banco actual: ya no se puede saber a qué pregunta era
    const id = questionId(q);
    const prev = out[id];
    const cur = store[k];
    if (!prev || ((cur && cur.box) || 0) > ((prev && prev.box) || 0)) out[id] = cur;
  });
  return { store: out, changed: true };
}

// `quiz` es el ARRAY de preguntas del tema (no su longitud). Si se pasa, se migra al vuelo el
// progreso guardado en el formato viejo y se persiste convertido, para que la nube también
// reciba el formato nuevo.
export function loadQuizSRS(topicId, quiz) {
  const store = syncGet(key(topicId), {}) || {};
  if (!quiz) return store;
  const { store: next, changed } = migrate(store, quiz);
  if (changed) syncSet(key(topicId), next);
  return next;
}

export function updateQuizSRS(topicId, question, correct) {
  const id = questionId(question);
  const store = loadQuizSRS(topicId);
  const box = correct ? Math.min(5, ((store[id] && store[id].box) || 1) + 1) : 1;
  store[id] = { box, next: Date.now() + (INTERVALS[box] || 0) };
  syncSet(key(topicId), store);
}

// Índices vencidos dentro del banco `quiz`. Una pregunta nunca respondida NO cuenta como
// vencida: primero hay que responderla una vez como parte del banco completo antes de que entre
// al ciclo de repaso espaciado. Se devuelven índices (no ids) porque quien llama los usa para
// posicionarse dentro del array que acaba de pasar.
export function dueQuestionIndices(topicId, quiz) {
  const list = Array.isArray(quiz) ? quiz : [];
  const store = loadQuizSRS(topicId, list);
  const now = Date.now();
  const due = [];
  list.forEach((q, i) => {
    const e = store[questionId(q)];
    if (e && e.next <= now) due.push(i);
  });
  return due;
}

// Verdadero si todas las preguntas del banco ya se respondieron al menos una vez cada una
// (acumulado entre sesiones, sin importar si se acertaron o no). Se usa para desbloquear las
// fichas de repaso del tema: antes de completar el banco, quedan bloqueadas.
export function isQuizCompleted(topicId, quiz) {
  const list = Array.isArray(quiz) ? quiz : [];
  if (!list.length) return false;
  const store = loadQuizSRS(topicId, list);
  return list.every(q => !!store[questionId(q)]);
}

// Cuántas preguntas del banco faltan por responder al menos una vez (para el mensaje del candado).
export function remainingToComplete(topicId, quiz) {
  const list = Array.isArray(quiz) ? quiz : [];
  if (!list.length) return 0;
  const store = loadQuizSRS(topicId, list);
  return list.reduce((n, q) => n + (store[questionId(q)] ? 0 : 1), 0);
}
