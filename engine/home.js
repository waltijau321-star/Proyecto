// engine/home.js
// Página de Inicio: portada de la app. No conoce el contenido de cada tema en detalle,
// solo consume un resumen que le pasa app.js (que sí conoce todos los temas y secciones).
import { getAnsweredSummary, resetAnsweredSummary, isTopicReviewed, setTopicReviewed } from './study-view.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { mountExamSummary } from './exam-mode.js';
import { mountFlashcardDeck } from './flashcard-deck.js';

let LAST_ROOT = null, LAST_OPTS = null;
let examEditMode = false;

function ring(correct, incorrect) {
  const answered = correct + incorrect;
  const size = 132, stroke = 14, r = (size - stroke) / 2, cx = size / 2, cy = size / 2;
  const circ = 2 * Math.PI * r;
  if (!answered) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
    </svg>`;
  }
  const correctLen = circ * (correct / answered);
  const incorrectLen = circ * (incorrect / answered);
  // Los arcos arrancan "vacíos" (stroke-dasharray="0 circ") — animateRing() los completa hasta
  // su valor real justo después del montaje, vía atributos SVG con transición CSS (ring-arc).
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform:rotate(-90deg);">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
    <circle class="ring-arc" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#8c3a34" stroke-width="${stroke}"
      data-len="${incorrectLen}" data-gap="${circ - incorrectLen}" data-offset="${-correctLen}"
      stroke-dasharray="0 ${circ}" stroke-dashoffset="0"/>
    <circle class="ring-arc" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2f6f5e" stroke-width="${stroke}"
      data-len="${correctLen}" data-gap="${circ - correctLen}" data-offset="0"
      stroke-dasharray="0 ${circ}" stroke-linecap="butt"/>
  </svg>`;
}

// Anima los arcos del anillo de "vacío" a su valor real en el siguiente frame (doble rAF para
// asegurar que el navegador pinte el estado inicial antes de aplicar la transición). Respeta
// prefers-reduced-motion saltando directo al valor final sin animar.
function animateRing(root) {
  const arcs = root.querySelectorAll('.ring-arc');
  if (!arcs.length) return;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const apply = c => {
    c.setAttribute('stroke-dasharray', `${c.dataset.len} ${c.dataset.gap}`);
    c.setAttribute('stroke-dashoffset', c.dataset.offset);
  };
  if (reduceMotion) { arcs.forEach(apply); return; }
  // rAF no se dispara en pestañas en segundo plano (o paneles sin compositing activo) —
  // sin red de seguridad el anillo quedaría vacío indefinidamente hasta que la pestaña
  // recupere foco. apply() es idempotente, así que un setTimeout de respaldo no rompe nada
  // si el rAF sí llegó a correr primero; solo garantiza que el valor final siempre se aplique.
  let done = false;
  const finish = () => { if (done) return; done = true; arcs.forEach(apply); };
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (done) return;
    done = true;
    arcs.forEach(c => { c.style.transition = 'stroke-dasharray .9s var(--ease), stroke-dashoffset .9s var(--ease)'; apply(c); });
  }));
  setTimeout(finish, 400);
}

// Placeholder mientras mountFlashcardDeck()/mountExamSummary() resuelven su carga (ambas son
// async: leen progreso vía syncGet/Firestore). Aproxima la forma final (2 stats + botón) sin
// tener que conocer los datos reales todavía.
function loadingSkeleton() {
  return `<div class="home-progress-stats" aria-hidden="true">
    <div class="home-stat"><span class="home-stat-n skeleton">00</span><span class="home-stat-l skeleton">Cargando</span></div>
    <div class="home-stat"><span class="home-stat-n skeleton">00</span><span class="home-stat-l skeleton">Cargando</span></div>
  </div>`;
}

/* ---------------- Temario completo (acordeón) ---------------- */
let wipIndex = [];

function wipIconSVG() {
  return `<svg viewBox="0 0 64 64" fill="none" stroke="var(--modal-accent,var(--accent))" stroke-width="1.6">
    <circle cx="32" cy="32" r="27" stroke-dasharray="3 6" opacity=".45"/>
    <path transform="translate(16,15) scale(1.3)" fill="var(--modal-accent,var(--accent))" stroke="none" opacity=".85"
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>`;
}

function wipModalHTML(entry) {
  return `<div class="wip-modal">
    ${wipIconSVG()}
    <h2>Sección en desarrollo</h2>
    <p>Este subtema del temario todavía no tiene contenido construido en la app. Se irá agregando en próximas actualizaciones, igual que los temas ya disponibles.</p>
    <span class="wip-scope">${entry.blockTitle} · ${entry.clusterName}</span>
  </div>`;
}

function openWip(idx) {
  const entry = wipIndex[idx];
  if (!entry) return;
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#8d8570');
  m.innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>${wipModalHTML(entry)}`;
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function temarioItemRow(item, blockTitle, clusterName, topicsById) {
  const label = typeof item === 'string' ? item : item.label;
  const topicId = typeof item === 'string' ? null : item.topicId;
  const topic = topicId ? topicsById[topicId] : null;
  if (topic) {
    const reviewed = isTopicReviewed(topicId);
    return `<div class="temario-item available" style="--tc:${(topic.accent || '#2f6f5e') + '22'};--tc-dark:${topic.accent || '#2f6f5e'}" onclick="rmGoTopic('${topicId}')">
      <span>${label}</span>
      <span style="display:flex;align-items:center;flex:none;">
        <span class="ti-tag">Abrir</span>
        <button class="ti-review${reviewed ? ' checked' : ''}" title="Marcar como repasado" onclick="event.stopPropagation(); rmToggleReviewed('${topicId}')">${reviewed ? '✓ Repasado' : 'Repasar'}</button>
      </span></div>`;
  }
  const idx = wipIndex.length;
  wipIndex.push({ blockTitle, clusterName });
  return `<div class="temario-item wip" onclick="rmOpenWip(${idx})">
    <span>${label}</span><span class="ti-tag">En desarrollo</span></div>`;
}

// Un bloque normal trae `clusters` (lista plana). Un bloque de acceso rápido como R1
// puede traer `groups` en su lugar — cada grupo es un tema con sus propios clusters,
// para que también se pueda abrir/cerrar de forma independiente. blockClusters() junta
// los clusters de cualquiera de las dos formas para calcular la cobertura del bloque.
function blockClusters(b) {
  return b.groups ? b.groups.flatMap(g => g.clusters) : b.clusters;
}
function blockCoverage(b, topicsById) {
  const allItems = blockClusters(b).flatMap(c => c.items);
  const total = allItems.length;
  const builtIds = allItems.filter(it => typeof it !== 'string' && topicsById[it.topicId]).map(it => it.topicId);
  const built = builtIds.length;
  const pct = total ? Math.round((built / total) * 100) : 0;
  const questionCount = builtIds.reduce((sum, id) => sum + (topicsById[id].quizCount || 0), 0);
  return { total, built, pct, questionCount };
}

function clusterHTML(c, blockTitle, topicsById) {
  return `
    <div class="temario-cluster">
      <h5>${c.name}</h5>
      ${c.items.map(it => temarioItemRow(it, blockTitle, c.name, topicsById)).join('')}
    </div>`;
}

function temarioTreeHTML(blocks, topicsById) {
  wipIndex = [];
  return `<div class="temario-list">${blocks.map(b => {
    const cov = blockCoverage(b, topicsById);
    const body = b.groups
      ? b.groups.map(g => `
        <details class="temario-group">
          <summary><span class="temario-group-title">${g.name}</span></summary>
          ${g.clusters.map(c => clusterHTML(c, b.title, topicsById)).join('')}
        </details>`).join('')
      : b.clusters.map(c => clusterHTML(c, b.title, topicsById)).join('');
    return `
    <details class="temario-block">
      <summary>
        <span class="temario-block-title">${b.title}</span>
        <span class="temario-block-cov">${cov.built}/${cov.total} temas · ${cov.pct}% · ${cov.questionCount} preguntas</span>
      </summary>
      <div class="temario-block-bar" role="progressbar" aria-valuenow="${cov.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Cobertura de ${b.title}"><span style="width:${cov.pct}%"></span></div>
      <p class="temario-block-intro">${b.intro}</p>
      ${body}
    </details>`;
  }).join('')}</div>`;
}

function openResetConfirm() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#8c3a34');
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#8c3a34;">Reiniciar progreso</span>
    <h2>¿Estás seguro?</h2>
    <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">Se borrará el conteo de preguntas correctas e incorrectas de todos los temas. Esta acción no se puede deshacer.</p>
    <button class="calc-copy" onclick="rmResetProgress()">Sí, reiniciar</button>
    <button class="calc-copy" style="margin-left:8px;" onclick="closeModal()">Cancelar</button>`;
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function resetProgressNow() {
  resetAnsweredSummary();
  window.closeModal();
  if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS);
}

/* ---------------- Cuenta regresiva de examen (persistencia localStorage) ---------------- */
const EXAM_KEY = 'rm:exam-date';
function loadExamDate() { return syncGet(EXAM_KEY, ''); }
function saveExamDateStore(v) { syncSet(EXAM_KEY, v || ''); }
function daysUntilExam(dateStr) {
  const target = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((target - today) / 86400000);
}
function formatExamDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });
}
function examSectionHTML() {
  const dateStr = loadExamDate();
  if (!dateStr || examEditMode) {
    return `<div class="home-exam home-exam-form">
      <p class="home-subhead-note" style="margin:0 0 10px;">${dateStr ? 'Elige la nueva fecha de tu examen.' : 'Agrega la fecha de tu examen para ver cuántos días te faltan.'}</p>
      <div class="home-exam-row">
        <input type="date" id="home-exam-input" class="home-exam-input" value="${dateStr}">
        <button class="home-quick" onclick="rmSaveExamDate()">Guardar</button>
      </div>
    </div>`;
  }
  const days = daysUntilExam(dateStr);
  const label = days > 1 ? 'días para tu examen' : days === 1 ? 'día para tu examen' : days === 0 ? 'Tu examen es hoy' : 'El examen ya pasó';
  return `<div class="home-exam">
    <div class="home-exam-count">${days > 0 ? days : 0}</div>
    <div class="home-exam-body">
      <div class="home-exam-label">${label}</div>
      <div class="home-exam-date">${formatExamDate(dateStr)}</div>
    </div>
    <button class="home-reset" onclick="rmEditExamDate()">Cambiar fecha</button>
  </div>`;
}
function editExamDate() { examEditMode = true; if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS); }
function saveExamDateNow() {
  const input = document.getElementById('home-exam-input');
  if (!input || !input.value) return;
  saveExamDateStore(input.value);
  examEditMode = false;
  if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS);
}

export function mountHome(root, opts = {}) {
  LAST_ROOT = root;
  LAST_OPTS = opts;
  const { topics = [], totalQuestions = 0, navigateToTopic, temarioBlocks = [] } = opts;
  const topicsById = {};
  topics.forEach(t => { topicsById[t.id] = t; });
  window.rmGoTopic = (id) => navigateToTopic && navigateToTopic(id);
  window.rmOpenResetConfirm = openResetConfirm;
  window.rmResetProgress = resetProgressNow;
  window.rmEditExamDate = editExamDate;
  window.rmSaveExamDate = saveExamDateNow;
  window.rmOpenWip = openWip;
  window.rmToggleReviewed = (id) => { setTopicReviewed(id, !isTopicReviewed(id)); if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS); };

  const { correct, incorrect, answered } = getAnsweredSummary();
  const pct = answered ? Math.round((correct / answered) * 100) : null;

  root.innerHTML = `
    <div class="home-hero">
      <h1>MIOsler</h1>
      <img src="icons/icon-192.png" alt="MIOsler" class="home-logo">
    </div>

    <div class="sec-body">
      <div class="grid home-dash-row">
        <div class="home-dash-card">
          <h2 class="home-subhead">Tu progreso</h2>
          <div class="home-progress">
            <div class="home-progress-ring">${ring(correct, incorrect)}
              <div class="home-progress-center">${pct !== null ? pct + '%' : 'Sin datos'}${pct !== null ? '<span>acierto</span>' : ''}</div>
            </div>
            <div class="home-progress-stats">
              <div class="home-stat"><span class="home-stat-n">${totalQuestions}</span><span class="home-stat-l">Preguntas en el banco</span></div>
              <div class="home-stat"><span class="home-stat-n" style="color:#2f6f5e;">${correct}</span><span class="home-stat-l">Correctas</span></div>
              <div class="home-stat"><span class="home-stat-n" style="color:#8c3a34;">${incorrect}</span><span class="home-stat-l">Incorrectas</span></div>
            </div>
            <button class="home-reset" onclick="rmOpenResetConfirm()">Reiniciar progreso</button>
          </div>
          <div class="home-progress-divider"></div>
          ${examSectionHTML()}
        </div>

        <div class="home-dash-card">
          <h2 class="home-subhead">Repasa y practica</h2>
          <div class="home-study-box">
            <div class="home-study-col">
              <h3 class="home-study-col-title">Fichas de repaso</h3>
              <div id="fc-deck-root">${loadingSkeleton()}</div>
            </div>
            <div class="home-study-col">
              <h3 class="home-study-col-title">Exámenes simulados</h3>
              <div id="exam-root">${loadingSkeleton()}</div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="home-subhead" style="margin-top:26px;">Temario</h2>
      <p class="home-subhead-note">Programa completo de Medicina Interna en 14 bloques. Los subtemas marcados "Abrir" ya tienen contenido construido; el resto se irá agregando en próximas actualizaciones.</p>
      ${temarioTreeHTML(temarioBlocks, topicsById)}
    </div>`;

  animateRing(root);
  mountFlashcardDeck(document.getElementById('fc-deck-root'));
  mountExamSummary(document.getElementById('exam-root'));
  window.rmRefreshHome = () => { if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS); };
}
