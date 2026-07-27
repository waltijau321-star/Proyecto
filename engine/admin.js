// engine/admin.js
// Panel de administración: lista de todos los usuarios registrados (solo visible para
// los correos en ADMIN_EMAILS). Lee directo de Firestore vía fetchAllUsers(); las reglas
// de seguridad son las que realmente restringen el acceso, esto solo oculta la sección en la UI.
import { ADMIN_EMAILS } from './firebase-config.js';
import { getCurrentUser } from './auth.js';
import { fetchAllUsers } from './cloud-sync.js';
import { registry } from '../topics/registry.js';

export function isAdmin() {
  const user = getCurrentUser();
  return !!(user && user.email && ADMIN_EMAILS.includes(user.email));
}

function formatDate(ts) {
  if (!ts || !ts.toDate) return '–';
  return ts.toDate().toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function topicTitle(id) { return (registry.find(t => t.id === id) || {}).titulo || id; }

function cohortStatsHTML(users) {
  const perTopic = {};
  const reviewedCount = {};
  let totalAnswered = 0;
  users.forEach(u => {
    const progress = u['rm:quiz-progress'] || {};
    Object.keys(progress).forEach(topicId => {
      const { correct = 0, incorrect = 0 } = progress[topicId] || {};
      if (!perTopic[topicId]) perTopic[topicId] = { correct: 0, incorrect: 0 };
      perTopic[topicId].correct += correct;
      perTopic[topicId].incorrect += incorrect;
      totalAnswered += correct + incorrect;
    });
    const reviewed = u['rm:topics-reviewed'] || {};
    Object.keys(reviewed).forEach(topicId => { if (reviewed[topicId]) reviewedCount[topicId] = (reviewedCount[topicId] || 0) + 1; });
  });

  const topicIds = Object.keys(perTopic);
  if (!topicIds.length) {
    return `<p class="home-subhead-note">Todavía no hay respuestas de quiz registradas en el grupo.</p>`;
  }
  const accuracyRows = topicIds
    .map(id => {
      const t = perTopic[id];
      const answered = t.correct + t.incorrect;
      const acc = answered ? Math.round((t.correct / answered) * 100) : 0;
      return { id, acc, answered, reviewedPct: users.length ? Math.round(((reviewedCount[id] || 0) / users.length) * 100) : 0 };
    })
    .sort((a, b) => a.acc - b.acc)
    .map(r => `
      <tr>
        <td>${esc(topicTitle(r.id))}</td>
        <td class="mono" style="color:${r.acc >= 70 ? '#2f6f5e' : '#8c3a34'};font-weight:600;">${r.acc}%</td>
        <td>${r.answered}</td>
        <td>${r.reviewedPct}%</td>
      </tr>`).join('');

  return `
    <div class="home-progress-stats">
      <div class="home-stat"><span class="home-stat-n">${totalAnswered}</span><span class="home-stat-l">Preguntas respondidas (grupo)</span></div>
      <div class="home-stat"><span class="home-stat-n">${topicIds.length}</span><span class="home-stat-l">Temas con actividad</span></div>
    </div>
    <p class="home-subhead-note">Ordenado del tema con menor precisión al de mayor, para ver dónde reforzar en el grupo.</p>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Tema</th><th>Precisión del grupo</th><th>Preguntas respondidas</th><th>% que lo repasó</th></tr></thead>
        <tbody>${accuracyRows}</tbody>
      </table>
    </div>`;
}

const EVENT_LABELS = {
  quiz: { start: 'quizStart', complete: 'quizComplete', label: 'Quiz por tema' },
  exam: { start: 'examStart', complete: 'examComplete', label: 'Examen simulado' },
  flashcard: { start: 'flashcardStart', complete: 'flashcardComplete', label: 'Fichas (por tema)' },
  deckReview: { start: 'deckReviewStart', complete: 'deckReviewComplete', label: 'Fichas (mazo, Inicio)' },
  case: { start: 'caseStart', complete: 'caseComplete', label: 'Caso clínico' }
};
const SECTION_LABELS = { inicio: 'Inicio', estudio: 'Estudio', calc: 'Calc', protocolos: 'Protocolos', calendario: 'Calendario', vpo: 'VPO', admin: 'Admin' };

function usageStatsHTML(users) {
  const optedIn = users.filter(u => u['rm:usage-stats']);
  if (!optedIn.length) {
    return `<p class="home-subhead-note">Nadie ha activado "Analítica de uso" todavía (es opcional, desde el menú de cuenta de cada usuario).</p>`;
  }

  const sections = {}, topics = {}, events = {};
  optedIn.forEach(u => {
    const s = u['rm:usage-stats'] || {};
    Object.entries(s.sections || {}).forEach(([k, v]) => { sections[k] = (sections[k] || 0) + v; });
    Object.entries(s.topics || {}).forEach(([k, v]) => { topics[k] = (topics[k] || 0) + v; });
    Object.entries(s.events || {}).forEach(([k, v]) => { events[k] = (events[k] || 0) + v; });
  });

  const sectionRows = Object.entries(sections).sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `<tr><td>${esc(SECTION_LABELS[k] || k)}</td><td>${v}</td></tr>`).join('');
  const topicRows = Object.entries(topics).sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `<tr><td>${esc(topicTitle(k))}</td><td>${v}</td></tr>`).join('');
  const completionRows = Object.values(EVENT_LABELS).map(({ start, complete, label }) => {
    const s = events[start] || 0, c = events[complete] || 0;
    const rate = s ? Math.round((c / s) * 100) : null;
    return `<tr><td>${label}</td><td>${s}</td><td>${c}</td><td class="mono" style="color:${rate === null ? 'var(--ink-faint)' : rate >= 70 ? '#2f6f5e' : '#8c3a34'};font-weight:600;">${rate === null ? '–' : rate + '%'}</td></tr>`;
  }).join('');

  return `
    <div class="home-progress-stats">
      <div class="home-stat"><span class="home-stat-n">${optedIn.length}</span><span class="home-stat-l">Usuarios con analítica activada</span></div>
    </div>
    <h3 style="color:var(--ink);font-weight:600;margin:20px 0 10px;font-size:14px;">Finalización por actividad</h3>
    <p class="home-subhead-note">Cuántas sesiones se inician vs. se completan, para ver dónde abandonan.</p>
    <div class="admin-table-wrap">
      <table class="admin-table"><thead><tr><th>Actividad</th><th>Inicios</th><th>Completadas</th><th>Tasa</th></tr></thead><tbody>${completionRows}</tbody></table>
    </div>
    <h3 style="color:var(--ink);font-weight:600;margin:20px 0 10px;font-size:14px;">Secciones más visitadas</h3>
    <div class="admin-table-wrap">
      <table class="admin-table"><thead><tr><th>Sección</th><th>Visitas</th></tr></thead><tbody>${sectionRows || '<tr><td colspan="2">Sin datos.</td></tr>'}</tbody></table>
    </div>
    <h3 style="color:var(--ink);font-weight:600;margin:20px 0 10px;font-size:14px;">Temas más abiertos</h3>
    <div class="admin-table-wrap">
      <table class="admin-table"><thead><tr><th>Tema</th><th>Aperturas</th></tr></thead><tbody>${topicRows || '<tr><td colspan="2">Sin datos.</td></tr>'}</tbody></table>
    </div>`;
}

export async function mountAdmin(root) {
  root.innerHTML = `<div class="sec-body"><p class="home-subhead-note">Cargando usuarios registrados...</p></div>`;

  let users = [];
  let loadError = null;
  try {
    users = await fetchAllUsers();
  } catch (e) {
    loadError = e;
  }

  if (loadError) {
    root.innerHTML = `<div class="sec-body">
      <h2 class="home-subhead">Usuarios registrados</h2>
      <div class="auth-error">No se pudo cargar la lista de usuarios. Revisa que las reglas de Firestore permitan la lectura al correo administrador.</div>
    </div>`;
    return;
  }

  users.sort((a, b) => {
    const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
    const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
    return tb - ta;
  });

  const rows = users.map(u => `
    <tr>
      <td>${esc(u['rm:profile-firstname'])} ${esc(u['rm:profile-lastname'])}</td>
      <td>${esc(u.email)}</td>
      <td>${esc(u['rm:profile-hospital'])}</td>
      <td>${esc(u['rm:profile-year'])}</td>
      <td>${esc(u['rm:profile-country'])}${u['rm:profile-state'] ? ', ' + esc(u['rm:profile-state']) : ''}</td>
      <td>${esc(u['rm:profile-referral'])}</td>
      <td>${formatDate(u.createdAt)}</td>
    </tr>`).join('');

  root.innerHTML = `<div class="sec-body">
    <h2 class="home-subhead">Estadísticas del grupo</h2>
    ${cohortStatsHTML(users)}

    <h2 class="home-subhead" style="margin-top:30px;">Uso de la plataforma (opt-in)</h2>
    ${usageStatsHTML(users)}

    <h2 class="home-subhead" style="margin-top:30px;">Usuarios registrados</h2>
    <p class="home-subhead-note">${users.length} cuenta${users.length === 1 ? '' : 's'} creada${users.length === 1 ? '' : 's'} hasta ahora.</p>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr>
          <th>Nombre</th><th>Correo</th><th>Hospital</th><th>Año</th><th>País / Estado</th><th>Cómo nos conoció</th><th>Registrado</th>
        </tr></thead>
        <tbody>${rows || `<tr><td colspan="7">Todavía no hay usuarios registrados.</td></tr>`}</tbody>
      </table>
    </div>
  </div>`;
}
