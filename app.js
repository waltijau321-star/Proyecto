// app.js — shell/router de ResidenteMed.
// Une el motor (engine/*) con el contenido por tema (topics/*) y gestiona la navegación.

import { registry, loadTopic } from './topics/registry.js';
import { temarioBlocks } from './topics/temario-index.js';
import { mountStudy, setGlobalSearch, slugify } from './engine/study-view.js';
import { setCalcTopic, setGeneralCalcs, mountCalculators, mountAllCalculators } from './engine/calculators.js';
import { generalCalculators } from './engine/general-calc.js';
import { mountProtocols } from './engine/protocols.js';
import { mountHome } from './engine/home.js';
import { remainingToComplete } from './engine/quiz-srs.js';
import { initAuth } from './engine/auth.js';
import { initCloudSync } from './engine/cloud-sync.js';
import { isAdmin, mountAdmin } from './engine/admin.js';
import { mountExamPage } from './engine/exam-mode.js';
import { mountAccountMenu } from './engine/account-menu.js';
import { trackSection, trackTopic } from './engine/usage-tracking.js';
import { firebaseReady } from './engine/firebase-config.js';
import './engine/infusion-calc.js';
import { calculators as vpoCalculators, combinedNote as vpoCombinedNote } from './protocols/vpo-calc.js';
import { protocols } from './protocols/protocols.js';

setGeneralCalcs(generalCalculators);

const vpoTopic = { meta: { accent: '#3d5a73' }, calculators: vpoCalculators, combinedNote: vpoCombinedNote };
const mounted = { protocolos: false, vpo: false, calc: false };
let currentTopic = null;

// Títulos de encabezado para las secciones que no giran en torno a un solo tema
// (Estudio sigue mostrando el título/subtítulo del tema activo).
const SECTION_TITLES = {
  inicio: ['Inicio', ''],
  calc: ['Calculadoras', 'MIOsler'],
  protocolos: ['Protocolos', 'MIOsler'],
  vpo: ['Valoración preoperatoria', 'MIOsler'],
  admin: ['Admin', 'MIOsler'],
  examen: ['Examen simulado', 'MIOsler']
};

/* ---------- Botón "Volver al temario" (reemplaza el selector de tema en Estudio) ---------- */
function renderTopicSwitchSlot(sec) {
  const slot = document.getElementById('topic-switch-slot');
  if (!slot) return;
  slot.innerHTML = sec === 'estudio'
    ? `<button id="btn-volver-temario" class="home-quick">← Volver al temario</button>`
    : '';
  const btn = document.getElementById('btn-volver-temario');
  if (btn) btn.addEventListener('click', () => showSection('inicio'));
}

/* ---------- Navegación de secciones ---------- */
function showSection(sec) {
  trackSection(sec);
  document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const secEl = document.getElementById('sec-' + sec);
  const navEl = document.getElementById('nav-' + sec);
  if (secEl) secEl.classList.add('active');
  if (navEl) navEl.classList.add('active');
  renderTopicSwitchSlot(sec);

  if (sec === 'estudio' && currentTopic) {
    document.getElementById('app-title').textContent = currentTopic.meta.titulo;
    document.getElementById('app-subtitle').textContent = currentTopic.meta.subtitulo || 'Medicina Interna';
  } else {
    const [title, subtitle] = SECTION_TITLES[sec] || ['MIOsler', ''];
    document.getElementById('app-title').textContent = title;
    document.getElementById('app-subtitle').textContent = subtitle;
  }

  if (sec === 'protocolos' && !mounted.protocolos) { mountProtocols(document.getElementById('proto-root')); mounted.protocolos = true; }
  if (sec === 'vpo') {
    if (!mounted.vpo) {
      mountCalculators(vpoTopic, document.getElementById('vpo-root'), {
        heading: 'Valoración preoperatoria (VPO)',
        intro: 'Escalas de riesgo perioperatorio. La nota combinada incluye las 6 escalas ya expandidas, ya que casi siempre se calculan juntas para el mismo paciente.',
        showExtras: false
      });
      mounted.vpo = true;
    } else {
      setCalcTopic(vpoTopic);
    }
  }
  if (sec === 'calc' && !mounted.calc) { mountAllCalculatorsSection(); mounted.calc = true; }
  if (sec === 'inicio') { mountHomeSection(); }
  if (sec === 'admin') { mountAdmin(document.getElementById('admin-root')); }
  if (sec === 'examen') { mountExamPage(document.getElementById('examen-root')); }

  window.scrollTo({ top: 0, behavior: 'auto' });
}
window.rmGoToExam = () => showSection('examen');

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.sec));
});

/* ---------- Calculadoras: todas las de los temas construidos, agrupadas ---------- */
async function mountAllCalculatorsSection() {
  const topics = [];
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (topic) topics.push(topic);
  }
  mountAllCalculators(document.getElementById('calc-root'), topics);
}

/* ---------- Carga de tema ---------- */
async function selectTopic(id, { reflectUrl = true } = {}) {
  const topic = await loadTopic(id);
  if (!topic) return;
  trackTopic(id);
  currentTopic = topic;
  document.getElementById('app-title').textContent = topic.meta.titulo;
  document.getElementById('app-subtitle').textContent = topic.meta.subtitulo || 'Medicina Interna';
  document.documentElement.style.setProperty('--accent', topic.meta.accent || '#7c2d2d');

  mountStudy(topic);

  // Refleja el tema en la URL sin recargar — pero solo si el llamador lo pide (reflectUrl):
  // el arranque con un tema por defecto (nadie eligió nada todavía) NO debe escribir ?tema=
  // en una URL que llegó limpia; una vez que el usuario elige un tema explícitamente, sí.
  if (reflectUrl) {
    const url = new URL(location.href);
    url.searchParams.set('tema', id);
    history.replaceState(null, '', url);
  }
}

/* ---------- Inicio (portada: temario + progreso acumulado del quiz) ---------- */
async function mountHomeSection() {
  const topics = [];
  let totalQuestions = 0;
  let answeredQuestions = 0;
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const quizCount = (topic.study && topic.study.quiz && topic.study.quiz.length) || 0;
    totalQuestions += quizCount;
    // "Contestada" = ya se respondió al menos una vez (mismo criterio que desbloquea las fichas
    // de repaso del tema, ver engine/quiz-srs.js), no el total de intentos.
    if (quizCount) answeredQuestions += quizCount - remainingToComplete(t.id, quizCount);
    topics.push({ id: t.id, titulo: topic.meta.titulo, subtitulo: topic.meta.subtitulo, accent: topic.meta.accent, quizCount });
  }
  mountHome(document.getElementById('home-root'), {
    topics, totalQuestions, answeredQuestions, temarioBlocks,
    navigateToTopic: async (id) => {
      await selectTopic(id);
      showSection('estudio');
    },
    navigateToSection: (sec) => showSection(sec)
  });
}

/* ---------- Buscador global (todos los temas, VPO y protocolos, sin importar la sección activa) ---------- */
async function buildAndSetGlobalIndex() {
  const index = [];
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const D = topic.content || {};
    const itemLabel = (topic.modalLabels && topic.modalLabels.itemName) || 'Complicación';
    (D.complicaciones || []).forEach((c, i) => {
      index.push({ label: c.nombre, type: itemLabel, scope: t.titulo, section: 'estudio', topicId: t.id, action: `openModal(${i})` });
    });
    (topic.estigmas || []).forEach((e, i) => {
      index.push({ label: e.s, type: 'Estigma clásico', scope: t.titulo, section: 'estudio', topicId: t.id, action: `openStigma(${i})` });
    });
    if (D.clasificacion && D.clasificacion.escalas) {
      D.clasificacion.escalas.forEach(e => {
        index.push({ label: e.nombre, type: 'Escala', scope: t.titulo, section: 'estudio', topicId: t.id, action: `jumpToEscala('${slugify(e.nombre)}')` });
      });
    }
    (topic.calculators || []).forEach(c => {
      index.push({ label: c.title, type: 'Calculadora', scope: t.titulo, section: 'calc', topicId: t.id, action: `openCalcFor('${t.id}','${c.key}')` });
    });
  }
  vpoCalculators.forEach(c => {
    index.push({ label: c.title, type: 'Calculadora', scope: 'VPO', section: 'vpo', action: `openCalc('${c.key}')` });
  });
  protocols.forEach(p => {
    index.push({ label: p.title, type: 'Protocolo', scope: 'Protocolos', section: 'protocolos', action: `rmProtoOpen('${p.id}')` });
  });
  setGlobalSearch(index, navigateToSearchResult);
}

async function navigateToSearchResult(entry) {
  if (entry.topicId && (!currentTopic || currentTopic.meta.id !== entry.topicId)) {
    await selectTopic(entry.topicId);
  }
  showSection(entry.section || 'estudio');
  if (entry.action) {
    try { Function(entry.action)(); } catch (e) { console.error('Búsqueda: no se pudo abrir el resultado', e); }
  }
}

/* ---------- Arranque ---------- */
async function init() {
  mountAccountMenu();
  const params = new URLSearchParams(location.search);
  const hasValidTemaParam = params.get('tema') && registry.some(t => t.id === params.get('tema'));
  const initial = hasValidTemaParam ? params.get('tema') : registry[0].id;

  let booted = false;
  async function bootApp() {
    booted = true;
    // Si la URL ya traía un ?tema= válido, se conserva. Si no, se elige un tema por defecto
    // internamente (el primero del registro) pero SIN escribirlo en la URL — la URL queda
    // limpia hasta que el usuario elija un tema de verdad.
    await selectTopic(initial, { reflectUrl: hasValidTemaParam });
    showSection('inicio');
    buildAndSetGlobalIndex();

    // Service worker (PWA): solo bajo http/https, no en file://
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  // El arranque real de la app espera a que Firebase Auth confirme si hay sesión iniciada
  // (initAuth ya se encarga de mostrar el modal de login cuando no la hay). Si Firebase
  // todavía no está configurado (engine/firebase-config.js con placeholders), firebaseReady
  // es false y la app arranca igual, sin gate, para no bloquear el desarrollo local.
  initAuth(async (user) => {
    await initCloudSync(user);
    document.getElementById('nav-admin').style.display = isAdmin() ? '' : 'none';
    if (!user && firebaseReady) return;
    if (!booted) await bootApp();
    else if (user) mountHomeSection(); // cambio de sesión tras el arranque: refrescar con datos fusionados
  });
}

init();
