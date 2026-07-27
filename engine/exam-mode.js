// engine/exam-mode.js
// Generador de exámenes simulados: mezcla preguntas de todos los temas construidos
// (interleaving), a diferencia del quiz de study-view.js que vive dentro de un solo tema.
// El resumen y el botón viven en Inicio; la configuración se abre en el overlay/modal
// existente; el examen en sí corre en su propia página (sección "examen"), con cronómetro,
// para que se sienta como un examen real y no como un modal más.
import { registry, loadTopic } from '../topics/registry.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { updateQuizSRS, dueQuestionIndices } from './quiz-srs.js';
import { trackEvent } from './usage-tracking.js';

const DIFF_LABEL = { facil: 'Fácil', intermedio: 'Intermedio', dificil: 'Difícil', inteligente: 'Repaso inteligente' };
const PROGRESS_KEY = 'rm:quiz-progress';
const HISTORY_KEY = 'rm:exam-history';
const HISTORY_MAX = 50;

let TOPIC_POOL = null; // [{id, titulo, accent, quiz:[...]}]
let examState = { deck: [], qIndex: 0, score: 0, answered: false, startedAt: 0 };
let timerInterval = null;
let EXAM_ROOT = null;

async function loadTopicPool() {
  if (TOPIC_POOL) return TOPIC_POOL;
  const loaded = [];
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const quiz = (topic.study && topic.study.quiz) || [];
    if (quiz.length) loaded.push({ id: t.id, titulo: topic.meta.titulo, accent: topic.meta.accent || '#3d5a73', quiz });
  }
  TOPIC_POOL = loaded;
  return loaded;
}

function recordExamProgress(topicId, correct) {
  const store = syncGet(PROGRESS_KEY, {});
  if (!store[topicId]) store[topicId] = { correct: 0, incorrect: 0 };
  store[topicId][correct ? 'correct' : 'incorrect']++;
  syncSet(PROGRESS_KEY, store);
}

function pushExamHistory(record) {
  const list = syncGet(HISTORY_KEY, []);
  list.unshift(record);
  if (list.length > HISTORY_MAX) list.length = HISTORY_MAX;
  syncSet(HISTORY_KEY, list);
}

function shuffle(arr) { return arr.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(([, v]) => v); }

function buildPool(pool, difficulty, topicIds) {
  const bag = [];
  pool.filter(t => topicIds.includes(t.id)).forEach(t => {
    const dueIdx = difficulty === 'inteligente' ? new Set(dueQuestionIndices(t.id, t.quiz.length)) : null;
    t.quiz.forEach((q, qIndex) => {
      const lvl = q.dificultad || 'facil';
      const include = difficulty === 'mixta' ? true
        : difficulty === 'inteligente' ? dueIdx.has(qIndex)
        : difficulty === lvl;
      if (include) bag.push({ ...q, topicId: t.id, topicTitulo: t.titulo, topicAccent: t.accent, srsIndex: qIndex });
    });
  });
  // Si nadie ha respondido nada todavía (o no hay vencidas), cae a "mixta" completo en vez de un examen vacío.
  if (difficulty === 'inteligente' && !bag.length) return buildPool(pool, 'mixta', topicIds);
  return bag;
}

function formatElapsed(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

function stopTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }
function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    const el = document.getElementById('exam-timer');
    if (!el) { stopTimer(); return; }
    el.textContent = formatElapsed(Date.now() - examState.startedAt);
  }, 1000);
}

function exitExam() {
  stopTimer();
  const navInicio = document.getElementById('nav-inicio');
  if (navInicio) navInicio.click();
}

/* ---------------- Configuración (modal) ---------------- */
function formHTML(pool) {
  const maxQ = pool.reduce((a, t) => a + t.quiz.length, 0);
  const topicChecks = pool.map(t => `
    <label class="exam-topic-check"><input type="checkbox" value="${t.id}" checked>${t.titulo}</label>`).join('');
  return `
    <form id="exam-form" class="auth-form-grid">
      <div class="calc-field"><label>Número de preguntas</label><input type="number" id="exam-numq" min="1" max="${maxQ}" value="${Math.min(20, maxQ)}"></div>
      <div class="calc-field"><label>Dificultad</label>
        <select id="exam-difficulty">
          <option value="mixta">Mixta</option>
          <option value="inteligente">Priorizar lo que te cuesta</option>
          <option value="facil">Fácil</option>
          <option value="intermedio">Intermedio</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>
      <div class="calc-field field-full"><label>Temas a incluir</label>
        <div class="exam-topic-checks">${topicChecks}</div>
      </div>
      <button type="submit" class="field-full">Comenzar examen simulado</button>
    </form>`;
}

async function openExamConfigModal() {
  const pool = await loadTopicPool();
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#3d5a73');
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Examen simulado</span>
    <h2>Configura tu examen</h2>
    ${pool.length ? formHTML(pool) : '<p class="fbody" style="color:var(--ink-dim);">El generador de exámenes estará disponible cuando haya al menos un tema con preguntas construido.</p>'}`;
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  const form = m.querySelector('#exam-form');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const n = Math.max(1, parseInt(m.querySelector('#exam-numq').value, 10) || 20);
    const difficulty = m.querySelector('#exam-difficulty').value;
    const topicIds = [...m.querySelectorAll('.exam-topic-check input:checked')].map(el => el.value);
    if (!topicIds.length) return;
    window.closeModal();
    startExam(n, difficulty, topicIds);
  });
}

function startExam(numQuestions, difficulty, topicIds) {
  const bag = shuffle(buildPool(TOPIC_POOL, difficulty, topicIds));
  const deck = bag.slice(0, numQuestions);
  examState = { deck, qIndex: 0, score: 0, answered: false, difficulty, startedAt: Date.now() };
  trackEvent('examStart');
  if (window.rmGoToExam) window.rmGoToExam();
}

/* ---------------- Página del examen (sección aparte, con cronómetro) ---------------- */
function pageShellHTML(inner) {
  return `<div class="sec-body">
    <div class="exam-page-header">
      <span class="exam-page-timer mono" id="exam-timer">${formatElapsed(Date.now() - examState.startedAt)}</span>
      <button class="home-reset" onclick="rmExitExam()">Salir</button>
    </div>
    ${inner}
  </div>`;
}

function renderExamPage() {
  if (!EXAM_ROOT) return;
  const deck = examState.deck;

  if (!deck.length) {
    stopTimer();
    EXAM_ROOT.innerHTML = pageShellHTML(`
      <span class="modal-tag" style="color:#3d5a73;">Examen simulado</span>
      <h2>No hay ningún examen en curso</h2>
      <p class="fbody" style="color:var(--ink-dim);">Vuelve a Inicio y usa "Comenzar examen simulado" para configurar uno.</p>`);
    return;
  }

  if (examState.qIndex >= deck.length) {
    stopTimer();
    const pct = Math.round((examState.score / deck.length) * 100);
    const elapsed = formatElapsed(Date.now() - examState.startedAt);
    if (!examState.saved) {
      examState.saved = true;
      trackEvent('examComplete');
      pushExamHistory({ date: Date.now(), numQuestions: deck.length, difficulty: examState.difficulty, score: examState.score, pct, elapsedMs: Date.now() - examState.startedAt });
    }
    EXAM_ROOT.innerHTML = pageShellHTML(`
      <span class="modal-tag" style="color:#3d5a73;">Resultado del examen</span>
      <h2>${examState.score} / ${deck.length} correctas (${pct}%)</h2>
      <p class="fbody" style="color:var(--ink-dim);">Tiempo total: ${elapsed}.</p>
      <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">${pct >= 80 ? 'Excelente dominio del material mezclado.' : pct >= 60 ? 'Buen desempeño, repasa los temas donde fallaste.' : 'Conviene repasar antes de tu próximo intento.'}</p>
      <button class="calc-copy" onclick="rmExitExam()">Volver a Inicio</button>`);
    return;
  }

  const q = deck[examState.qIndex];
  EXAM_ROOT.innerHTML = pageShellHTML(`
    <span class="modal-tag" style="color:#3d5a73;">Pregunta ${examState.qIndex + 1} / ${deck.length} · ${q.topicTitulo} · Puntaje: ${examState.score}</span>
    <h2 style="font-size:1.3rem;">${q.q}</h2>
    <div class="quiz-options" id="exam-options">${q.options.map((opt, i) => `<button class="quiz-opt" onclick="rmAnswerExam(${i})">${opt}</button>`).join('')}</div>
    <div id="exam-feedback"></div>`);
}

function answerExam(i) {
  if (examState.answered) return;
  examState.answered = true;
  const q = examState.deck[examState.qIndex];
  const correct = i === q.correct;
  if (correct) examState.score++;
  recordExamProgress(q.topicId, correct);
  updateQuizSRS(q.topicId, q.srsIndex, correct);
  document.querySelectorAll('#exam-options .quiz-opt').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('incorrect');
  });
  document.getElementById('exam-feedback').innerHTML = `
    <div class="quiz-feedback-box ${correct ? 'correct' : 'incorrect'}"><strong>${correct ? 'Correcto.' : 'Incorrecto.'}</strong> ${q.explanation}</div>
    <button class="calc-copy" style="margin-top:14px;" onclick="rmNextExam()">${examState.qIndex + 1 < examState.deck.length ? 'Siguiente →' : 'Ver resultado →'}</button>`;
}
function nextExam() { examState.qIndex++; examState.answered = false; renderExamPage(); }

export function mountExamPage(root) {
  EXAM_ROOT = root;
  renderExamPage();
  if (examState.qIndex < examState.deck.length) startTimer();
}

/* ---------------- Resumen en Inicio (estadísticas + botón) ---------------- */
function formatDate(ms) {
  return new Date(ms).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
}

function historyTableHTML(list) {
  const rows = list.slice(0, 20).map(r => `
    <tr>
      <td>${formatDate(r.date)}</td>
      <td>${r.numQuestions}</td>
      <td>${DIFF_LABEL[r.difficulty] || 'Mixta'}</td>
      <td>${r.elapsedMs ? formatElapsed(r.elapsedMs) : '–'}</td>
      <td class="mono" style="color:${r.pct >= 70 ? '#2f6f5e' : '#8c3a34'};font-weight:600;">${r.score}/${r.numQuestions} (${r.pct}%)</td>
    </tr>`).join('');
  return `<div class="table-wrap"><table class="admin-table"><thead><tr><th>Fecha</th><th>Preguntas</th><th>Dificultad</th><th>Tiempo</th><th>Resultado</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function openHistoryModal() {
  const list = syncGet(HISTORY_KEY, []);
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#3d5a73');
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Historial</span>
    <h2>Tus exámenes simulados</h2>
    ${list.length ? historyTableHTML(list) : '<p class="fbody" style="color:var(--ink-dim);">Aún no has hecho ningún examen simulado.</p>'}`;
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

export async function mountExamSummary(root) {
  const pool = await loadTopicPool();
  if (!pool.length) {
    root.innerHTML = `<p class="home-subhead-note">El generador de exámenes estará disponible cuando haya al menos un tema con preguntas construido.</p>`;
    return;
  }
  const list = syncGet(HISTORY_KEY, []);
  const hasHistory = list.length > 0;
  const avg = hasHistory ? Math.round(list.reduce((a, r) => a + r.pct, 0) / list.length) : null;
  const best = hasHistory ? Math.max(...list.map(r => r.pct)) : null;

  root.innerHTML = `
    <div class="exam-summary">
      ${hasHistory ? `
        <div class="home-progress-stats">
          <div class="home-stat"><span class="home-stat-n">${list.length}</span><span class="home-stat-l">Exámenes hechos</span></div>
          <div class="home-stat"><span class="home-stat-n">${avg}%</span><span class="home-stat-l">Promedio</span></div>
          <div class="home-stat"><span class="home-stat-n">${best}%</span><span class="home-stat-l">Mejor resultado</span></div>
        </div>` : `<p class="home-subhead-note">Aún no has hecho ningún examen simulado.</p>`}
      <div class="exam-summary-actions">
        <button class="home-quick" id="exam-start-btn">Comenzar examen simulado</button>
        ${hasHistory ? '<button class="home-quick" id="exam-history-btn">Ver historial</button>' : ''}
      </div>
    </div>`;

  root.querySelector('#exam-start-btn').addEventListener('click', openExamConfigModal);
  const historyBtn = root.querySelector('#exam-history-btn');
  if (historyBtn) historyBtn.addEventListener('click', openHistoryModal);
}

Object.assign(window, { rmAnswerExam: answerExam, rmNextExam: nextExam, rmExitExam: exitExam });
