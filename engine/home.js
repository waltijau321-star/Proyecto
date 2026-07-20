// engine/home.js
// Página de Inicio: portada de la app. No conoce el contenido de cada tema en detalle,
// solo consume un resumen que le pasa app.js (que sí conoce todos los temas y secciones).
import { getAnsweredSummary, resetAnsweredSummary } from './study-view.js';

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
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform:rotate(-90deg);">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#8c3a34" stroke-width="${stroke}"
      stroke-dasharray="${incorrectLen} ${circ - incorrectLen}" stroke-dashoffset="${-correctLen}"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2f6f5e" stroke-width="${stroke}"
      stroke-dasharray="${correctLen} ${circ - correctLen}" stroke-linecap="butt"/>
  </svg>`;
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
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function temarioItemRow(item, blockTitle, clusterName, topicsById) {
  const label = typeof item === 'string' ? item : item.label;
  const topicId = typeof item === 'string' ? null : item.topicId;
  const topic = topicId ? topicsById[topicId] : null;
  if (topic) {
    return `<div class="temario-item available" style="--tc:${(topic.accent || '#2f6f5e') + '22'};--tc-dark:${topic.accent || '#2f6f5e'}" onclick="rmGoTopic('${topicId}')">
      <span>${label}</span><span class="ti-tag">Abrir</span></div>`;
  }
  const idx = wipIndex.length;
  wipIndex.push({ blockTitle, clusterName });
  return `<div class="temario-item wip" onclick="rmOpenWip(${idx})">
    <span>${label}</span><span class="ti-tag">En desarrollo</span></div>`;
}

function temarioTreeHTML(blocks, topicsById) {
  wipIndex = [];
  return `<div class="temario-list">${blocks.map(b => `
    <details class="temario-block">
      <summary>${b.title}</summary>
      <p class="temario-block-intro">${b.intro}</p>
      ${b.clusters.map(c => `
        <div class="temario-cluster">
          <h5>${c.name}</h5>
          ${c.items.map(it => temarioItemRow(it, b.title, c.name, topicsById)).join('')}
        </div>`).join('')}
    </details>`).join('')}</div>`;
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
function loadExamDate() { try { return localStorage.getItem(EXAM_KEY) || ''; } catch (e) { return ''; } }
function saveExamDateStore(v) { try { if (v) localStorage.setItem(EXAM_KEY, v); else localStorage.removeItem(EXAM_KEY); } catch (e) {} }
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

  const { correct, incorrect, answered } = getAnsweredSummary();
  const pct = answered ? Math.round((correct / answered) * 100) : null;

  root.innerHTML = `
    <div class="home-hero">
      <img src="icons/icon-192.png" alt="ResidenteMed" class="home-logo">
      <h1>Medicina Interna</h1>
      <p class="home-desc">Plataforma de estudio para residentes de Medicina Interna. Incluye mapas conceptuales, calculadoras clínicas validadas, protocolos de manejo, valoración preoperatoria y autoevaluación por tema, todo basado en guías internacionales recientes.</p>
    </div>

    <div class="sec-body">
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

      <h2 class="home-subhead">Fecha de examen</h2>
      ${examSectionHTML()}

      <h2 class="home-subhead" style="margin-top:30px;">Temario</h2>
      <p class="home-subhead-note">Programa completo de Medicina Interna en 14 bloques. Los subtemas marcados "Abrir" ya tienen contenido construido; el resto se irá agregando en próximas actualizaciones.</p>
      ${temarioTreeHTML(temarioBlocks, topicsById)}
    </div>`;
}
