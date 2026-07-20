// app.js — shell/router de ResidenteMed.
// Une el motor (engine/*) con el contenido por tema (topics/*) y gestiona la navegación.

import { registry, loadTopic } from './topics/registry.js';
import { temarioBlocks } from './topics/temario-index.js';
import { mountStudy, setGlobalSearch, slugify } from './engine/study-view.js';
import { setCalcTopic, setGeneralCalcs, mountCalculators } from './engine/calculators.js';
import { generalCalculators } from './engine/general-calc.js';
import { mountCalendar } from './engine/calendar.js';
import { mountProtocols } from './engine/protocols.js';
import { mountHome } from './engine/home.js';
import './engine/infusion-calc.js';
import { calculators as vpoCalculators, combinedNote as vpoCombinedNote } from './protocols/vpo-calc.js';
import { protocols } from './protocols/protocols.js';

setGeneralCalcs(generalCalculators);

const vpoTopic = { meta: { accent: '#3d5a73' }, calculators: vpoCalculators, combinedNote: vpoCombinedNote };
const mounted = { calendario: false, protocolos: false, vpo: false };
let currentTopic = null;

/* ---------- Navegación de secciones ---------- */
function showSection(sec) {
  document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const secEl = document.getElementById('sec-' + sec);
  const navEl = document.getElementById('nav-' + sec);
  if (secEl) secEl.classList.add('active');
  if (navEl) navEl.classList.add('active');

  // En Inicio, el encabezado y el selector de tema no deben mostrar ningún tema
  // seleccionado (Inicio no pertenece a un tema en particular); al salir, se restauran.
  const sel = document.getElementById('topic-select');
  if (sec === 'inicio') {
    document.getElementById('app-title').textContent = 'Inicio';
    document.getElementById('app-subtitle').textContent = '';
    if (sel) sel.selectedIndex = -1;
  } else if (currentTopic) {
    document.getElementById('app-title').textContent = currentTopic.meta.titulo;
    document.getElementById('app-subtitle').textContent = currentTopic.meta.subtitulo || 'Medicina Interna';
    if (sel) sel.value = currentTopic.meta.id;
  }

  if (sec === 'calendario' && !mounted.calendario) { mountCalendar(document.getElementById('cal-root')); mounted.calendario = true; }
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
  if (sec === 'calc' && currentTopic) { setCalcTopic(currentTopic); }
  if (sec === 'inicio') { mountHomeSection(); }

  window.scrollTo({ top: 0, behavior: 'auto' });
}

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.sec));
});

/* ---------- Carga de tema ---------- */
async function selectTopic(id) {
  const topic = await loadTopic(id);
  if (!topic) return;
  currentTopic = topic;
  document.getElementById('app-title').textContent = topic.meta.titulo;
  document.getElementById('app-subtitle').textContent = topic.meta.subtitulo || 'Medicina Interna';
  document.documentElement.style.setProperty('--accent', topic.meta.accent || '#7c2d2d');

  mountStudy(topic);
  setCalcTopic(topic);
  mountCalculators(topic, document.getElementById('calc-root'));

  // refleja el tema en la URL sin recargar
  const url = new URL(location.href);
  url.searchParams.set('tema', id);
  history.replaceState(null, '', url);
}

/* ---------- Selector de tema ---------- */
function buildTopicSelect() {
  const sel = document.getElementById('topic-select');
  sel.innerHTML = registry.map(t => `<option value="${t.id}">${t.titulo}</option>`).join('');
  sel.addEventListener('change', () => selectTopic(sel.value));
  return sel;
}

/* ---------- Inicio (portada: temario + progreso acumulado del quiz) ---------- */
async function mountHomeSection() {
  const topics = [];
  let totalQuestions = 0;
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const quizCount = (topic.study && topic.study.quiz && topic.study.quiz.length) || 0;
    totalQuestions += quizCount;
    topics.push({ id: t.id, titulo: topic.meta.titulo, subtitulo: topic.meta.subtitulo, accent: topic.meta.accent, quizCount });
  }
  mountHome(document.getElementById('home-root'), {
    topics, totalQuestions, temarioBlocks,
    navigateToTopic: async (id) => {
      document.getElementById('topic-select').value = id;
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
      index.push({ label: c.title, type: 'Calculadora', scope: t.titulo, section: 'calc', topicId: t.id, action: `openCalc('${c.key}')` });
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
    const sel = document.getElementById('topic-select');
    sel.value = entry.topicId;
    await selectTopic(entry.topicId);
  }
  showSection(entry.section || 'estudio');
  if (entry.action) {
    try { Function(entry.action)(); } catch (e) { console.error('Búsqueda: no se pudo abrir el resultado', e); }
  }
}

/* ---------- Arranque ---------- */
async function init() {
  const sel = buildTopicSelect();
  const params = new URLSearchParams(location.search);
  const initial = params.get('tema') && registry.some(t => t.id === params.get('tema'))
    ? params.get('tema') : registry[0].id;
  sel.value = initial;
  await selectTopic(initial);
  showSection('inicio');
  buildAndSetGlobalIndex();

  // Service worker (PWA) — solo bajo http/https, no en file://
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();
