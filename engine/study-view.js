// engine/study-view.js
// Motor genérico del módulo de ESTUDIO. No conoce ningún tema en concreto:
// recibe un `topic` (content + presentación + study) y renderiza las secciones,
// el mapa conceptual, los modales, el buscador, el quiz, las fichas y el caso clínico.
// Migrado desde el prototipo de Cirrosis y parametrizado.

import { syncGet, syncSet } from './cloud-sync.js';
import { updateQuizSRS, dueQuestionIndices } from './quiz-srs.js';
import { trackEvent } from './usage-tracking.js';

// Datos del tema activo (poblados por mountStudy)
let TOPIC, D, BIB, COMP_CITES, ESTIGMAS_FREQ, BIOPSIA_LISTS, ESCALA_REFS, ESCALA_CALC,
    COMP_GROUPS, ARBOL, CATEGORIES, QUIZ_QUESTIONS, FLASHCARDS, CASE_STEPS, COMP_ORDER, FIGURAS;

/* ---------------- Helpers de texto y citas ---------------- */
function esc(s) { return (s === undefined || s === null) ? '' : s; }
function citeHTML(nums) {
  if (!nums || !nums.length) return '';
  const uniq = [...new Set(nums)];
  return '<sup class="cite">' + uniq.map(n => '<a class="cite-link" onclick="highlightBib(' + n + ')">' + n + '</a>').join(',') + '</sup>';
}
function highlightBib(n) {
  const el = document.getElementById('bib-' + n);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 1400);
}
export function slugify(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function jumpToEscala(id) {
  const el = document.getElementById('escala-' + id);
  if (!el) { jumpTo('clasificacion'); return; }
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('flash');
  setTimeout(() => el.classList.remove('flash'), 1400);
}
function fieldHTML(label, text, citeNums) {
  if (!text) return '';
  return `<div class="modal-field"><span class="flabel">${label}</span><div class="fbody">${esc(text)}${citeHTML(citeNums)}</div></div>`;
}
function listFieldHTML(label, arr) {
  if (!arr || !arr.length) return '';
  return `<div class="modal-field"><span class="flabel">${label}</span><ul>${arr.map(x => '<li>' + esc(x) + '</li>').join('')}</ul></div>`;
}
function oneFiguraHTML(key) {
  const fig = key && FIGURAS[key];
  if (!fig) return '';
  return `<div class="modal-field modal-figure">
    <span class="flabel">${esc(fig.titulo)}</span>
    <div class="figure-body">${fig.html}</div>
    ${fig.fuente ? `<div class="figure-source">Fuente: ${esc(fig.fuente)}</div>` : ''}
  </div>`;
}
// Acepta una key, un array de keys, o nada — así una complicación (o el tema) puede adjuntar 0, 1 o varias figuras.
function figuraHTML(keys) {
  if (!keys) return '';
  const arr = Array.isArray(keys) ? keys : [keys];
  return arr.map(oneFiguraHTML).join('');
}
function calcBtn(key) {
  return `<button type="button" class="calc-btn" onclick="openCalc('${key}')" title="Abrir calculadora">Calcular</button>`;
}
function findComp(nombre) { return D.complicaciones.findIndex(c => c.nombre === nombre); }
function jumpTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function section(id, num, title, intro, body) {
  return `<section class="section study-section" id="${id}">
    <div class="section-head"><span class="section-num mono">${num}</span><h2>${title}</h2></div>
    ${intro ? `<p class="section-intro">${intro}</p>` : ''}
    ${body}
  </section>`;
}

/* ---------------- Mapa conceptual (árbol) ---------------- */
function treeNode(title, sub, color, onclickAttr, extraClass) {
  return `<a class="tree-node ${extraClass || ''}" style="--nc:${color}" ${onclickAttr}>
    <span class="tn-title">${title}</span>
    ${sub ? `<span class="tn-sub">${sub}</span>` : ''}
  </a>`;
}
function buildTree() {
  if (!ARBOL) return '';
  const branches = ARBOL.branches.map(b => {
    const leaves = (b.leaves || []).map(l =>
      `<li>${treeNode(l.title, l.sub, l.color, `onclick="jumpTo('${l.target || 'complicaciones'}')"`)}</li>`).join('');
    return `<li>
      ${treeNode(b.title, b.sub, b.color, `onclick="jumpTo('${b.target}')"`)}
      ${leaves ? `<div class="tree-stem"></div><ul>${leaves}</ul>` : ''}
    </li>`;
  }).join('');
  return `<div class="tree-scroll"><ul class="tree">
    <li>
      ${treeNode(ARBOL.root.title, null, ARBOL.root.color, `onclick="jumpTo('${ARBOL.root.target}')"`, 'root')}
      <div class="tree-stem"></div>
      <ul>${branches}</ul>
    </li>
  </ul></div>`;
}

/* ---------------- Secciones ---------------- */
function buildDefinicion() {
  const txt = TOPIC.definicionText || (typeof D.definicion === 'string' ? D.definicion : '');
  const defLabel = (CATEGORIES.find(c => c.id === 'definicion') || {}).label || 'Definición';
  // Mismo patrón que TOPIC.figurasClasificacion en buildClasificacion(): un tema puede adjuntar
  // 0+ figuras a la sección de Definición (p. ej. un diagrama de mecanismo/fisiopatología).
  return section('definicion', '01', defLabel, null, `
    <div class="card"><p style="font-size:15.5px; color:var(--ink);">${txt}${citeHTML([1])}</p></div>
    ${figuraHTML(TOPIC.figurasDefinicion)}`);
}

function buildDiagnostico() {
  const dg = D.diagnostico;
  if (!dg) return '';
  const dc = TOPIC.diagCites || {};
  const estigmasTitulo = TOPIC.estigmasTitulo || 'Signos clínicos clásicos, en orden de frecuencia';
  const biopsiaTitulo = TOPIC.biopsiaTitulo || 'Biopsia';
  const tituloA = (dg.clinica && dg.clinica.tituloA) || 'Presentación inicial';
  const tituloB = (dg.clinica && dg.clinica.tituloB) || 'Presentación avanzada';
  const estigmas = (ESTIGMAS_FREQ || []).map((e, i) => `<div class="rank-item rank-clickable" onclick="openStigma(${i})"><span class="rank-num mono">${String(i + 1).padStart(2, '0')}</span><span class="rank-text">${e.s}</span><span class="rank-pct mono">${e.p}</span><span class="rank-icon">${e.photo || e.embed ? 'Foto' : 'Info'}</span></div>`).join('');
  const lab = (dg.laboratorio || []).map(l => `<tr><td style="color:var(--ink);font-weight:600;">${l.prueba}</td><td>${l.utilidad}</td></tr>`).join('');
  const etio = (dg.etiologicos || []).map(l => `<tr><td style="color:var(--ink);font-weight:600;">${l.prueba}</td><td>${l.utilidad}</td></tr>`).join('');
  const ni = (dg.no_invasivos || []).map(m => `<tr><td style="color:var(--ink);font-weight:600;">${m.metodo}</td><td>${m.interpretacion}</td><td class="mono">${m.cutoff}</td><td>${(m.metodo === 'FIB-4' || m.metodo === 'APRI') ? calcBtn('fibrosis') : ''}</td></tr>`).join('');
  const img = (dg.imagen || []).map(m => `<tr><td style="color:var(--ink);font-weight:600;">${m.modalidad}</td><td>${m.hallazgos}</td></tr>`).join('');
  const bio = BIOPSIA_LISTS ? `
    <h3 class="study-subhead">${biopsiaTitulo}${citeHTML(dc.biopsia)}</h3>
    <div class="biopsy-grid">
      <div class="biopsy-card positive"><h3>Indicaciones</h3><ul class="biopsy-list">${BIOPSIA_LISTS.indicaciones.map(x => `<li><span class="bio-mark">✓</span>${x}</li>`).join('')}</ul></div>
      <div class="biopsy-card positive"><h3>Ventajas</h3><ul class="biopsy-list">${BIOPSIA_LISTS.ventajas.map(x => `<li><span class="bio-mark">✓</span>${x}</li>`).join('')}</ul></div>
      <div class="biopsy-card negative"><h3>Limitaciones</h3><ul class="biopsy-list">${BIOPSIA_LISTS.limitaciones.map(x => `<li><span class="bio-mark warn">⚠</span>${x}</li>`).join('')}</ul></div>
      <div class="biopsy-card negative"><h3>Contraindicaciones</h3><ul class="biopsy-list">${BIOPSIA_LISTS.contraindicaciones.map(x => `<li><span class="bio-mark stop">✕</span>${x}</li>`).join('')}</ul></div>
    </div>` : '';
  const diagLabel = (CATEGORIES.find(c => c.id === 'diagnostico') || {}).label || 'Abordaje Diagnóstico';
  const diagIntro = TOPIC.diagnosticoIntro !== undefined ? TOPIC.diagnosticoIntro : 'Historia clínica, laboratorio general, estudios dirigidos, métodos no invasivos e imagen — en ese orden de invasividad creciente.';
  return section('diagnostico', '02', diagLabel, diagIntro, `
    <div class="grid" style="margin-bottom:18px;">
      <div class="card"><h3>${tituloA}</h3><p>${dg.clinica ? dg.clinica.compensada : ''}</p></div>
      <div class="card"><h3>${tituloB}</h3><p>${dg.clinica ? dg.clinica.descompensada : ''}</p></div>
    </div>
    ${estigmas ? `<h3 class="study-subhead">${estigmasTitulo}</h3>
    <div style="margin-bottom:8px;">${estigmas}</div>
    <p style="color:var(--ink-faint); font-size:12.5px; margin:0 0 30px;">Prevalencias aproximadas; varían según serie, etiología y grado de descompensación.</p>` : ''}
    ${lab ? `<h3 class="study-subhead">Laboratorio general${citeHTML(dc.laboratorio)}</h3>
    <div class="table-wrap" style="margin-bottom:30px;"><table><thead><tr><th>Prueba</th><th>Utilidad clínica</th></tr></thead><tbody>${lab}</tbody></table></div>` : ''}
    ${etio ? `<h3 class="study-subhead">Estudios etiológicos dirigidos${citeHTML(dc.etiologicos)}</h3>
    <div class="table-wrap" style="margin-bottom:30px;"><table><thead><tr><th>Prueba</th><th>Utilidad clínica</th></tr></thead><tbody>${etio}</tbody></table></div>` : ''}
    ${ni ? `<h3 class="study-subhead">Escalas y métodos no invasivos${citeHTML(dc.no_invasivos)}</h3>
    <div class="table-wrap" style="margin-bottom:30px;"><table><thead><tr><th>Método</th><th>Interpretación</th><th>Corte</th><th></th></tr></thead><tbody>${ni}</tbody></table></div>` : ''}
    ${img ? `<h3 class="study-subhead">Imagen${citeHTML(dc.imagen)}</h3>
    <div class="table-wrap" style="margin-bottom:30px;"><table><thead><tr><th>Modalidad</th><th>Hallazgos</th></tr></thead><tbody>${img}</tbody></table></div>` : ''}
    ${bio}
  `);
}

function buildClasificacion() {
  const cl = D.clasificacion;
  if (!cl || !cl.escalas) return '';
  const rows = cl.escalas.map(e => `<tr id="escala-${slugify(e.nombre)}"><td style="color:var(--ink);font-weight:600;">${e.nombre}</td><td>${e.componentes}</td><td class="mono">${e.formula}</td><td>${e.interpretacion}</td><td>${citeHTML(ESCALA_REFS[e.nombre] || [])}${ESCALA_CALC[e.nombre] ? calcBtn(ESCALA_CALC[e.nombre]) : ''}</td></tr>`).join('');
  const clasifLabel = (CATEGORIES.find(c => c.id === 'clasificacion') || {}).label || 'Clasificación y Escalas Pronósticas';
  return section('clasificacion', '03', clasifLabel, (cl.compensada_descompensada || '') + citeHTML(TOPIC.clasificacionCite), `
    <div class="table-wrap"><table><thead><tr><th>Escala</th><th>Componentes</th><th>Fórmula</th><th>Interpretación</th><th>Ref.</th></tr></thead><tbody>${rows}</tbody></table></div>
    ${figuraHTML(TOPIC.figurasClasificacion)}`);
}

function buildComplicaciones() {
  const groups = (COMP_GROUPS && COMP_GROUPS.length) ? COMP_GROUPS : [{ title: null, items: D.complicaciones.map(c => c.nombre) }];
  const catLabel = (CATEGORIES.find(c => c.id === 'complicaciones') || {}).label || 'Complicaciones';
  const groupsHTML = groups.map(g => {
    const cards = g.items.map(name => {
      const i = findComp(name);
      const c = D.complicaciones[i];
      if (!c) return '';
      return `<div class="comp-card" style="--c:${c.color}" onclick="openModal(${i})">
        ${c.icono ? `<div class="comp-icon">${c.icono}</div>` : ''}
        <h4>${c.nombre}</h4><p>${c.definicion}</p><div class="open-hint">Ver detalle completo →</div></div>`;
    }).join('');
    return `${g.title ? `<h3 class="study-subhead study-subhead--loose">${g.title}</h3>` : ''}<div class="comp-grid">${cards}</div>`;
  }).join('');
  return section('complicaciones', '04', catLabel, null, groupsHTML);
}

function buildSeguimiento() {
  const S = D.seguimiento_intrahospitalario;
  if (!S) return '';
  const seguLabel = (CATEGORIES.find(c => c.id === 'seguimiento') || {}).label || 'Seguimiento Intrahospitalario';
  return section('seguimiento', '05', seguLabel, (S.intro || '') + citeHTML(TOPIC.seguimientoCite), `
    <h3 class="study-subhead study-subhead--tight">${(TOPIC.modalLabels && TOPIC.modalLabels.monitorizacionTitulo) || 'Monitorización diaria intrahospitalaria'}</h3>
    <div class="grid" style="margin-bottom:30px;">${(S.parametros || []).map(p => `<div class="card"><p>${p}</p></div>`).join('')}</div>
    <div class="grid">
      <div class="card"><h3>${(TOPIC.modalLabels && TOPIC.modalLabels.criterios_uci) || 'Criterios de UCI'}</h3><p>${S.criterios_uci_general || ''}</p></div>
      <div class="card"><h3>${(TOPIC.modalLabels && TOPIC.modalLabels.criterios_tips) || 'Criterios de intervención'}</h3><p>${S.criterios_tips_general || ''}</p></div>
      <div class="card"><h3>${(TOPIC.modalLabels && TOPIC.modalLabels.criterios_trasplante) || 'Referencia a trasplante'}</h3><p>${S.criterios_trasplante_general || ''}</p></div>
      <div class="card"><h3>${(TOPIC.modalLabels && TOPIC.modalLabels.prevencion) || 'Prevención'}</h3><p>${S.prevencion || ''}</p></div>
    </div>`);
}

function buildAutoevaluacion() {
  const cards = [
    { key: 'quiz', title: 'Banco de preguntas', sub: QUIZ_QUESTIONS.length + ' preguntas de opción múltiple · casos clínicos y teoría', color: '#3d5a73', fn: 'openQuiz()' },
    { key: 'flashcards', title: 'Fichas de repaso', sub: FLASHCARDS.length + ' fichas · repetición espaciada, se adapta a tu progreso', color: '#5c4a73', fn: 'openFlashcards()' },
    { key: 'case', title: 'Caso clínico interactivo', sub: 'Un caso completo, paso a paso, con decisiones y retroalimentación', color: '#8c3a34', fn: 'openCase()' }
  ].filter(c => c.key === 'quiz' ? QUIZ_QUESTIONS.length : c.key === 'flashcards' ? FLASHCARDS.length : CASE_STEPS.length)
    .map(c => `<div class="comp-card" style="--c:${c.color}" onclick="${c.fn}"><h4>${c.title}</h4><p>${c.sub}</p><div class="open-hint">Comenzar →</div></div>`).join('');
  const autoevalLabel = (CATEGORIES.find(c => c.id === 'autoevaluacion') || {}).label || 'Autoevaluación';
  return section('autoevaluacion', '06', autoevalLabel, 'Pon a prueba lo aprendido. Se irá ampliando con más preguntas y casos.', `<div class="comp-grid">${cards}</div>`);
}

function buildBibliografia() {
  const items = BIB.map((b, i) => `<li id="bib-${i + 1}"><span class="bnum">[${i + 1}]</span>${b}</li>`).join('');
  return section('bibliografia', '07', 'Bibliografía', null, `<ul class="bib-list">${items}</ul>`);
}

/* ---------------- Modal de complicación (o fármaco / ítem genérico) ---------------- */
const DEFAULT_LABELS = {
  itemName: 'Complicación',
  definicion: 'Definición', fisiopatologia: 'Fisiopatología', epidemiologia: 'Epidemiología',
  factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clínicas', criterios_dx: 'Criterios diagnósticos',
  laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnóstico diferencial',
  tx_medico: 'Tratamiento médico', tx_farmacologico: 'Tratamiento farmacológico', tx_intervencionista: 'Tratamiento intervencionista',
  criterios_uci: 'Criterios de UCI', criterios_tips: 'Criterios de intervención', criterios_trasplante: 'Criterios de trasplante',
  seguimiento_hospitalario: 'Seguimiento hospitalario', seguimiento_ambulatorio: 'Seguimiento ambulatorio', pronostico: 'Pronóstico',
  algoritmo: 'Algoritmo diagnóstico-terapéutico'
};
// Las líneas divisorias (<hr class="modal-divider">) solo tienen sentido entre dos bloques que
// ambos tengan contenido real — si no, queda una línea suelta sin nada alrededor (ej. un tema de
// semiología que no usa campos de tratamiento/seguimiento). blockHTML() arma cada bloque y
// joinBlocks() intercala <hr> únicamente entre bloques no vacíos consecutivos.
function blockHTML(...parts) { return parts.join(''); }
function joinBlocks(blocks) {
  return blocks.filter(b => b && b.trim()).join('<hr class="modal-divider">');
}
function openModal(i) {
  const c = D.complicaciones[i];
  const L = Object.assign({}, DEFAULT_LABELS, TOPIC.modalLabels || {});
  const cites = COMP_CITES[c.nombre] || {};
  const pos = COMP_ORDER.indexOf(c.nombre);
  const prevIdx = findComp(COMP_ORDER[(pos - 1 + COMP_ORDER.length) % COMP_ORDER.length]);
  const nextIdx = findComp(COMP_ORDER[(pos + 1) % COMP_ORDER.length]);
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', c.color);

  const blockDefinicion = blockHTML(
    fieldHTML(L.definicion, c.definicion, cites.definicion),
    fieldHTML(L.fisiopatologia, c.fisiopatologia, cites.fisiopatologia),
    fieldHTML(L.epidemiologia, c.epidemiologia, cites.epidemiologia),
    listFieldHTML(L.factores_riesgo, c.factores_riesgo)
  );
  const blockDiagnostico = blockHTML(
    fieldHTML(L.clinica, c.clinica, cites.clinica),
    fieldHTML(L.criterios_dx, c.criterios_dx, cites.criterios_dx),
    figuraHTML(c.figura),
    (c.laboratorio || c.imagen) ? `<div class="modal-grid">
      ${fieldHTML(L.laboratorio, c.laboratorio, cites.laboratorio)}
      ${fieldHTML(L.imagen, c.imagen, cites.imagen)}
    </div>` : '',
    fieldHTML(L.complementarios, c.complementarios, cites.complementarios),
    fieldHTML(L.dx_diferencial, c.dx_diferencial, cites.dx_diferencial)
  );
  const blockTratamiento = blockHTML(
    fieldHTML(L.tx_medico, c.tx_medico, cites.tx_medico),
    fieldHTML(L.tx_farmacologico, c.tx_farmacologico, cites.tx_farmacologico),
    fieldHTML(L.tx_intervencionista, c.tx_intervencionista, cites.tx_intervencionista),
    (c.criterios_uci || c.criterios_tips) ? `<div class="modal-grid">
      ${fieldHTML(L.criterios_uci, c.criterios_uci, cites.criterios_uci)}
      ${fieldHTML(L.criterios_tips, c.criterios_tips, cites.criterios_tips)}
    </div>` : '',
    fieldHTML(L.criterios_trasplante, c.criterios_trasplante, cites.criterios_trasplante)
  );
  const blockSeguimiento = blockHTML(
    (c.seguimiento_hospitalario || c.seguimiento_ambulatorio) ? `<div class="modal-grid">
      ${fieldHTML(L.seguimiento_hospitalario, c.seguimiento_hospitalario, cites.seguimiento_hospitalario)}
      ${fieldHTML(L.seguimiento_ambulatorio, c.seguimiento_ambulatorio, cites.seguimiento_ambulatorio)}
    </div>` : '',
    fieldHTML(L.pronostico, c.pronostico, cites.pronostico)
  );
  const blockAlgoritmo = c.algoritmo ? `<span class="flabel" style="font-family:'IBM Plex Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:${c.color};display:block;margin-bottom:12px;">${L.algoritmo}</span>
    <div class="modal-algo">${c.algoritmo.map((s, idx) => `<div class="algo-step"><div class="an" style="background:${c.color}">${idx + 1}</div><div>${s}</div></div>`).join('')}</div>` : '';

  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-nav">
      <button class="modal-nav-btn" onclick="openModal(${prevIdx})">← Anterior</button>
      <span class="modal-nav-pos mono">${pos + 1} / ${COMP_ORDER.length}</span>
      <button class="modal-nav-btn" onclick="openModal(${nextIdx})">Siguiente →</button>
    </div>
    <span class="modal-tag" style="color:${c.color};">${L.itemName} ${i + 1} / ${D.complicaciones.length}</span>
    <h2>${c.nombre}</h2>
    ${joinBlocks([blockDefinicion, blockDiagnostico, blockTratamiento, blockSeguimiento, blockAlgoritmo])}
  `;
  showOverlay();
}
function closeModal() {
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}
function showOverlay() {
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ---------------- Quiz ---------------- */
const DIFF_LABEL = { facil: 'Fácil', intermedio: 'Intermedio', dificil: 'Difícil', inteligente: 'Repaso inteligente' };
const DIFF_ORDER = ['facil', 'intermedio', 'dificil'];
// Un ítem del banco puede ser una pregunta única (misma forma de siempre: {q, options, correct,
// explanation}) o una pregunta en cascada ({type:'cascade', vignette, steps:[{q,options,correct}],
// explanation}) — 2-3 preguntas que comparten una viñeta y dan retroalimentación consolidada al
// final, en vez de una por una. itemWeight() cuenta cada paso de una cascada como una pregunta
// para el puntaje final, sin romper el conteo de temas que ya usan solo preguntas únicas.
function itemWeight(item) { return item.type === 'cascade' ? item.steps.length : 1; }
let quizState = { level: 'todas', deck: [], qIndex: 0, score: 0, answered: false, subStep: 0, subAnswers: [] };

function quizByLevel(level) {
  if (level === 'todas') return QUIZ_QUESTIONS;
  if (level === 'inteligente') {
    const due = dueQuestionIndices(TOPIC.meta.id, QUIZ_QUESTIONS.length);
    const idx = due.length ? due : QUIZ_QUESTIONS.map((_, i) => i);
    return idx.map(i => QUIZ_QUESTIONS[i]);
  }
  return QUIZ_QUESTIONS.filter(q => (q.dificultad || 'facil') === level);
}

function openQuiz() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#3d5a73');
  const dueCount = dueQuestionIndices(TOPIC.meta.id, QUIZ_QUESTIONS.length).length;
  const levelButtons = DIFF_ORDER.filter(lvl => quizByLevel(lvl).length > 0)
    .map(lvl => `<button class="quiz-opt" onclick="startQuiz('${lvl}')">${DIFF_LABEL[lvl]} <span class="mono" style="color:var(--ink-faint);">(${quizByLevel(lvl).length})</span></button>`)
    .join('');
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Banco de preguntas</span>
    <h2>Elige la dificultad</h2>
    <div class="quiz-options">
      <button class="quiz-opt" onclick="startQuiz('inteligente')">Repaso inteligente <span class="mono" style="color:var(--ink-faint);">(${dueCount})</span></button>
      ${levelButtons}
      <button class="quiz-opt" onclick="startQuiz('todas')">Todas <span class="mono" style="color:var(--ink-faint);">(${QUIZ_QUESTIONS.length})</span></button>
    </div>
    <p class="auth-note" style="margin-top:14px;">"Repaso inteligente" prioriza las preguntas que has fallado o no has repasado recientemente, con el mismo sistema de repetición espaciada que las fichas.</p>`;
  showOverlay();
}
function startQuiz(level) {
  const deck = level === 'inteligente' ? shuffleQuiz(quizByLevel(level)) : quizByLevel(level);
  quizState = { level, deck, qIndex: 0, score: 0, answered: false, subStep: 0, subAnswers: [] };
  trackEvent('quizStart');
  renderQuiz();
}
function shuffleQuiz(arr) { return arr.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(([, v]) => v); }
function renderQuiz() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#3d5a73');
  const deck = quizState.deck;
  const levelTag = quizState.level !== 'todas' ? ` · ${DIFF_LABEL[quizState.level]}` : '';
  if (quizState.qIndex >= deck.length) {
    const total = deck.reduce((s, it) => s + itemWeight(it), 0);
    const pct = total ? Math.round((quizState.score / total) * 100) : 0;
    trackEvent('quizComplete');
    m.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <span class="modal-tag" style="color:#3d5a73;">Resultado final${levelTag}</span>
      <h2>${quizState.score} / ${total} correctas (${pct}%)</h2>
      <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">${pct >= 80 ? 'Excelente dominio del tema.' : pct >= 60 ? 'Buen desempeño, repasa los temas fallados.' : 'Conviene repasar las secciones de Complicaciones y Escalas antes de reintentar.'}</p>
      <button class="calc-copy" onclick="startQuiz('${quizState.level}')">Reintentar →</button>
      <button class="calc-copy" style="margin-left:8px;" onclick="openQuiz()">Cambiar dificultad</button>`;
    return;
  }
  const item = deck[quizState.qIndex];
  if (item.type === 'cascade') { renderCascadeStep(item); return; }
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Pregunta ${quizState.qIndex + 1} / ${deck.length}${levelTag} · Puntaje: ${quizState.score}</span>
    <h2 style="font-size:1.3rem;">${item.q}</h2>
    <div class="quiz-options" id="quiz-options">${item.options.map((opt, i) => `<button class="quiz-opt" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div>
    <div id="quiz-feedback"></div>`;
}
function renderCascadeStep(item) {
  const m = document.getElementById('modal');
  const step = item.steps[quizState.subStep];
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Caso ${quizState.qIndex + 1} / ${quizState.deck.length} · Paso ${quizState.subStep + 1} / ${item.steps.length}</span>
    <div class="case-vignette">${item.vignette}</div>
    <h2 style="font-size:1.3rem;">${step.q}</h2>
    <div class="quiz-options" id="quiz-options">${step.options.map((opt, i) => `<button class="quiz-opt" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div>
    <div id="quiz-feedback"></div>`;
}
function answerQuiz(i) {
  if (quizState.answered) return;
  quizState.answered = true;
  const item = quizState.deck[quizState.qIndex];
  if (item.type === 'cascade') { answerCascade(item, i); return; }
  const correct = i === item.correct;
  if (correct) quizState.score++;
  recordProgress(correct);
  updateQuizSRS(TOPIC.meta.id, QUIZ_QUESTIONS.indexOf(item), correct);
  document.querySelectorAll('#quiz-options .quiz-opt').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === item.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('incorrect');
  });
  document.getElementById('quiz-feedback').innerHTML = `
    <div class="quiz-feedback-box ${correct ? 'correct' : 'incorrect'}"><strong>${correct ? 'Correcto.' : 'Incorrecto.'}</strong> ${item.explanation}</div>
    <button class="calc-copy" style="margin-top:14px;" onclick="nextQuiz()">${quizState.qIndex + 1 < quizState.deck.length ? 'Siguiente →' : 'Ver resultado →'}</button>`;
}
// Cascada: NO se marca correcto/incorrecto paso a paso — solo se registra la respuesta y se
// avanza. La retroalimentación (qué se acertó, qué no, y la explicación integradora) se muestra
// junta recién al terminar el último paso, como pidió el usuario.
function answerCascade(item, i) {
  quizState.subAnswers[quizState.subStep] = i;
  document.querySelectorAll('#quiz-options .quiz-opt').forEach(btn => { btn.disabled = true; });
  const isLastStep = quizState.subStep + 1 >= item.steps.length;
  if (!isLastStep) {
    document.getElementById('quiz-feedback').innerHTML = `
      <button class="calc-copy" style="margin-top:14px;" onclick="nextCascadeStep()">Continuar caso →</button>`;
    return;
  }
  const correctCount = item.steps.reduce((n, s, idx) => n + (quizState.subAnswers[idx] === s.correct ? 1 : 0), 0);
  quizState.score += correctCount;
  const allCorrect = correctCount === item.steps.length;
  recordProgress(allCorrect);
  updateQuizSRS(TOPIC.meta.id, QUIZ_QUESTIONS.indexOf(item), allCorrect);
  const stepsReview = item.steps.map((s, idx) => {
    const chosen = quizState.subAnswers[idx];
    const ok = chosen === s.correct;
    return `<div class="quiz-feedback-box ${ok ? 'correct' : 'incorrect'}" style="margin-bottom:8px;">
      <strong>${idx + 1}. ${s.q}</strong><br>Tu respuesta: ${s.options[chosen]}${ok ? '' : ` · Correcta: ${s.options[s.correct]}`}
    </div>`;
  }).join('');
  document.getElementById('quiz-feedback').innerHTML = `
    ${stepsReview}
    <div class="quiz-feedback-box ${allCorrect ? 'correct' : 'incorrect'}"><strong>${correctCount} / ${item.steps.length} correctas en este caso.</strong> ${item.explanation}</div>
    <button class="calc-copy" style="margin-top:14px;" onclick="nextQuiz()">${quizState.qIndex + 1 < quizState.deck.length ? 'Siguiente →' : 'Ver resultado →'}</button>`;
}
function nextCascadeStep() { quizState.subStep++; quizState.answered = false; renderQuiz(); }
function nextQuiz() { quizState.qIndex++; quizState.subStep = 0; quizState.subAnswers = []; quizState.answered = false; renderQuiz(); }

/* ---------------- Progreso acumulado del quiz (persistencia sincronizada, para Inicio) ---------------- */
const PROGRESS_KEY = 'rm:quiz-progress';
function loadProgressStore() { return syncGet(PROGRESS_KEY, {}); }
function saveProgressStore(p) { syncSet(PROGRESS_KEY, p); }
function recordProgress(correct) {
  const store = loadProgressStore();
  const id = TOPIC.meta.id;
  if (!store[id]) store[id] = { correct: 0, incorrect: 0 };
  store[id][correct ? 'correct' : 'incorrect']++;
  saveProgressStore(store);
}
export function resetAnsweredSummary() { syncSet(PROGRESS_KEY, {}); }
export function getAnsweredSummary() {
  const store = loadProgressStore();
  let correct = 0, incorrect = 0;
  Object.values(store).forEach(t => { correct += t.correct || 0; incorrect += t.incorrect || 0; });
  return { correct, incorrect, answered: correct + incorrect };
}

/* ---------------- Temas repasados (persistencia sincronizada) ---------------- */
const REVIEWED_KEY = 'rm:topics-reviewed';
export function isTopicReviewed(topicId) { return !!syncGet(REVIEWED_KEY, {})[topicId]; }
export function setTopicReviewed(topicId, val) {
  const store = syncGet(REVIEWED_KEY, {});
  if (val) store[topicId] = true; else delete store[topicId];
  syncSet(REVIEWED_KEY, store);
}

/* ---------------- Fichas (repetición espaciada, persistencia sincronizada) ---------------- */
let fcState = { deck: [], index: 0, showBack: false };
function fcKey() { return 'flashcard-progress:' + TOPIC.meta.id; }
function loadFlashcardProgress() { return syncGet(fcKey(), {}); }
function saveFlashcardProgress(progress) { syncSet(fcKey(), progress); }
function openFlashcards() {
  const progress = loadFlashcardProgress();
  const now = Date.now();
  let due = FLASHCARDS.map((c, i) => ({ ...c, id: i, prog: progress[i] || { box: 1, next: 0 } })).filter(c => c.prog.next <= now);
  if (!due.length) due = FLASHCARDS.map((c, i) => ({ ...c, id: i, prog: progress[i] || { box: 1, next: 0 } }));
  due = due.sort(() => Math.random() - 0.5);
  fcState = { deck: due, index: 0, showBack: false };
  trackEvent('flashcardStart');
  renderFlashcard();
  showOverlay();
}
function renderFlashcard() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#5c4a73');
  if (fcState.index >= fcState.deck.length) {
    trackEvent('flashcardComplete');
    m.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <span class="modal-tag" style="color:#5c4a73;">Sesión completa</span>
      <h2>Repasaste ${fcState.deck.length} fichas.</h2>
      <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">Las fichas calificadas como "Otra vez" o "Difícil" volverán a aparecer pronto; las demás según su intervalo de repaso.</p>
      <button class="calc-copy" onclick="openFlashcards()">Nueva sesión →</button>`;
    return;
  }
  const card = fcState.deck[fcState.index];
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#5c4a73;">Ficha ${fcState.index + 1} / ${fcState.deck.length}</span>
    <div class="flashcard" onclick="${fcState.showBack ? '' : 'flipFlashcard()'}">
      <div class="flashcard-inner">${fcState.showBack ? card.back : card.front}</div>
      ${fcState.showBack ? '' : '<div class="flashcard-hint">Toca la tarjeta para ver la respuesta</div>'}
    </div>
    ${fcState.showBack ? `<div class="fc-rate-row">
        <button class="fc-rate" onclick="rateFlashcard(1)">Otra vez</button>
        <button class="fc-rate" onclick="rateFlashcard(2)">Difícil</button>
        <button class="fc-rate" onclick="rateFlashcard(3)">Bien</button>
        <button class="fc-rate" onclick="rateFlashcard(4)">Fácil</button>
      </div>` : ''}`;
}
function flipFlashcard() { fcState.showBack = true; renderFlashcard(); }
function rateFlashcard(rating) {
  const card = fcState.deck[fcState.index];
  const progress = loadFlashcardProgress();
  let box = (progress[card.id] && progress[card.id].box) || 1;
  if (rating === 1) box = 1; else if (rating === 2) box = Math.max(1, box); else if (rating === 3) box = Math.min(5, box + 1); else box = Math.min(5, box + 2);
  const intervals = { 1: 0, 2: 1 * 86400000, 3: 3 * 86400000, 4: 7 * 86400000, 5: 14 * 86400000 };
  progress[card.id] = { box, next: Date.now() + (intervals[box] || 0) };
  saveFlashcardProgress(progress);
  fcState.index++; fcState.showBack = false; renderFlashcard();
}

/* ---------------- Caso clínico ---------------- */
let caseState = { step: 0, answered: false };
function openCase() { caseState = { step: 0, answered: false }; trackEvent('caseStart'); renderCase(); showOverlay(); }
function renderCase() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#8c3a34');
  if (caseState.step >= CASE_STEPS.length) {
    trackEvent('caseComplete');
    const summary = (TOPIC.study && TOPIC.study.caseSummary) || 'Revisa las secciones de Complicaciones si alguna decisión no quedó clara.';
    m.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <span class="modal-tag" style="color:#8c3a34;">Caso completado</span>
      <h2>Resumen del caso</h2>
      <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">${summary}</p>
      <button class="calc-copy" onclick="openCase()">Reiniciar caso →</button>`;
    return;
  }
  const s = CASE_STEPS[caseState.step];
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#8c3a34;">Caso clínico · Paso ${caseState.step + 1} / ${CASE_STEPS.length}</span>
    <div class="case-vignette">${s.vignette}</div>
    <div class="quiz-options" id="case-options">${s.options.map((opt, i) => `<button class="quiz-opt" onclick="answerCase(${i})">${opt}</button>`).join('')}</div>
    <div id="case-feedback"></div>`;
}
function answerCase(i) {
  if (caseState.answered) return;
  caseState.answered = true;
  const s = CASE_STEPS[caseState.step];
  const correct = i === s.correct;
  document.querySelectorAll('#case-options .quiz-opt').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === s.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('incorrect');
  });
  document.getElementById('case-feedback').innerHTML = `
    <div class="quiz-feedback-box ${correct ? 'correct' : 'incorrect'}"><strong>${correct ? 'Correcto.' : 'Revisa esto:'}</strong> ${s.explanation}</div>
    <button class="calc-copy" style="margin-top:14px;" onclick="nextCase()">${caseState.step + 1 < CASE_STEPS.length ? 'Continuar caso →' : 'Ver resumen →'}</button>`;
}
function nextCase() { caseState.step++; caseState.answered = false; renderCase(); }

/* ---------------- Estigmas ---------------- */
function openStigma(i) {
  const e = ESTIGMAS_FREQ[i];
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#3d5a73');
  let visual;
  if (e.embed) {
    visual = `<div class="stigma-embed">
        <img src="${e.embed.url}" alt="${e.s}" loading="lazy">
        <span class="stigma-photo-source">${e.embed.credit}</span>
        ${e.photo ? `<a class="stigma-photo-link secondary" href="${e.photo.url}" target="_blank" rel="noopener noreferrer">Más fotos (${e.photo.source}) ↗</a>` : ''}
      </div>`;
  } else if (e.photo) {
    visual = `<div class="stigma-photo">
        <a class="stigma-photo-link" href="${e.photo.url}" target="_blank" rel="noopener noreferrer">Ver fotografía clínica real ↗</a>
        <span class="stigma-photo-source">Fuente: ${e.photo.source}</span>
      </div>`;
  } else {
    visual = '<div class="stigma-noimg"><span>Sin representación visual disponible.</span></div>';
  }
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Estigma clásico · ${e.p}</span>
    <h2>${e.s}</h2>
    <div class="stigma-illustration">${visual}</div>
    <div class="modal-field"><div class="fbody">${e.desc}</div></div>`;
  showOverlay();
}

/* ---------------- Buscador (global: cubre todos los temas y secciones de la app) ---------------- */
// El índice y la navegación los arma app.js (que sí conoce todos los temas, VPO y protocolos);
// este módulo solo renderiza el input/resultados y delega el clic.
let GLOBAL_INDEX = [];
let NAVIGATE = null;
export function setGlobalSearch(index, navigateFn) { GLOBAL_INDEX = index || []; NAVIGATE = navigateFn || null; }
function normalize(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
// Solo cuenta si q aparece al inicio de una "palabra" (inicio de cadena o tras un separador),
// para que p. ej. "SOFA" no encuentre falsos positivos dentro de "esofágicas".
function matchesQuery(label, q) {
  const norm = normalize(label);
  let idx = norm.indexOf(q);
  while (idx !== -1) {
    if (idx === 0 || !/[a-z0-9]/.test(norm[idx - 1])) return true;
    idx = norm.indexOf(q, idx + 1);
  }
  return false;
}
function runSearch(query) {
  const box = document.getElementById('search-results');
  const q = normalize(query.trim());
  if (!q) { box.classList.remove('active'); box.innerHTML = ''; return; }
  const matches = GLOBAL_INDEX.filter(item => matchesQuery(item.label, q)).slice(0, 8);
  box.innerHTML = matches.length
    ? matches.map((m, i) => `<div class="search-item" data-idx="${i}"><span class="search-item-label">${m.label}</span><span class="search-item-type">${m.type}${m.scope ? ' · ' + m.scope : ''}</span></div>`).join('')
    : '<div class="search-empty">Sin resultados.</div>';
  box.classList.add('active');
  box.querySelectorAll('.search-item').forEach(el => {
    el.addEventListener('click', () => {
      const m = matches[+el.dataset.idx];
      clearSearch();
      if (NAVIGATE) NAVIGATE(m);
    });
  });
}
function clearSearch() {
  const inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  const box = document.getElementById('search-results');
  if (box) box.classList.remove('active');
}

/* ---------------- Scrollspy (pills) ---------------- */
function initScrollspy() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        const pill = document.getElementById('pill-' + e.target.id);
        if (pill) pill.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('.study-section').forEach(s => obs.observe(s));
}

/* ---------------- Montaje ---------------- */
export function mountStudy(topic) {
  TOPIC = topic;
  D = topic.content;
  BIB = topic.bibliografia || [];
  COMP_CITES = topic.compCites || {};
  ESTIGMAS_FREQ = topic.estigmas || [];
  BIOPSIA_LISTS = topic.biopsia || null;
  ESCALA_REFS = topic.escalaRefs || {};
  ESCALA_CALC = topic.escalaCalc || {};
  COMP_GROUPS = topic.compGroups || [];
  ARBOL = topic.arbol || null;
  CATEGORIES = topic.categories || [];
  FIGURAS = topic.figuras || {};
  QUIZ_QUESTIONS = (topic.study && topic.study.quiz) || [];
  FLASHCARDS = (topic.study && topic.study.flashcards) || [];
  CASE_STEPS = (topic.study && topic.study.caseSteps) || [];
  COMP_ORDER = (COMP_GROUPS.length ? COMP_GROUPS.flatMap(g => g.items) : D.complicaciones.map(c => c.nombre));

  const navPills = CATEGORIES.map(c => `<button type="button" class="pill" id="pill-${c.id}" onclick="jumpTo('${c.id}')">${c.label}</button>`).join('');
  const autor = (topic.meta && topic.meta.autor) || 'Dr. Walter Jáuregui';
  const root = document.getElementById('study-root');
  root.innerHTML = `
    <div class="hero">
      <h1>${topic.meta.titulo}</h1>
      <div class="author">${autor}</div>
      ${buildTree()}
    </div>
    <nav class="pillbar">${navPills}</nav>
    <div class="searchbar-wrap">
      <div class="searchbar">
        <input type="text" id="search-input" placeholder="Buscar en toda la app: temas, escalas, calculadoras, VPO, protocolos…" autocomplete="off" oninput="runSearch(this.value)">
        <div class="search-results" id="search-results"></div>
      </div>
    </div>
    ${buildDefinicion()}
    ${buildDiagnostico()}
    ${buildClasificacion()}
    ${buildComplicaciones()}
    ${buildSeguimiento()}
    ${buildAutoevaluacion()}
    ${buildBibliografia()}
  `;
  initScrollspy();

  // overlay: click fuera cierra
  const overlay = document.getElementById('overlay');
  overlay.onclick = e => { if (e.target.id === 'overlay') closeModal(); };
}

/* ---------------- Handlers globales (para onclick inline) ---------------- */
Object.assign(window, {
  jumpTo, jumpToEscala, highlightBib, openModal, closeModal,
  openQuiz, startQuiz, answerQuiz, nextQuiz, nextCascadeStep,
  openFlashcards, flipFlashcard, rateFlashcard,
  openCase, answerCase, nextCase,
  openStigma, runSearch, clearSearch
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
document.addEventListener('click', e => {
  if (!e.target.closest('.searchbar')) {
    const box = document.getElementById('search-results');
    if (box) box.classList.remove('active');
  }
});
