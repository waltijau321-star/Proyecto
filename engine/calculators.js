// engine/calculators.js
// Motor genérico de calculadoras clínicas. No conoce ningún tema en concreto:
// consume descriptores declarativos { key, title, accent, subtitle, fields[], compute, format, fragment }.
// Ver el contrato en README y ejemplos en topics/*/calculators.js.

let CALC_TOPIC = null; // { calculators:[...], combinedNote:{...}, accent }
let GENERAL = [];      // calculadoras generales (todas las secciones)
let ALL_TOPICS = {};   // id -> topic completo, poblado por mountAllCalculators (vista agrupada de Calc)

export function setGeneralCalcs(arr) { GENERAL = arr || []; }

// Aviso opcional de "esta escala acaba de dar un resultado", para que un consumidor pueda
// recogerlo sin que este motor sepa quién lo escucha (lo usa la nota de VPO en engine/vpo.js).
// Recibe (key, resultado, calc); un resultado null significa que faltan datos.
let RESULT_LISTENER = null;
export function setResultListener(fn) { RESULT_LISTENER = typeof fn === 'function' ? fn : null; }
function notifyResult(key, r, calc) {
  if (!RESULT_LISTENER) return;
  try { RESULT_LISTENER(key, r, calc); } catch (e) { console.error('VPO: fallo al recoger el resultado', e); }
}

export function setCalcTopic(topic) {
  CALC_TOPIC = {
    calculators: topic.calculators || [],
    combinedNote: topic.combinedNote || null,
    accent: (topic.meta && topic.meta.accent) || '#3d6b6b'
  };
}

function lookupCalc(key) {
  return (CALC_TOPIC.calculators || []).find(c => c.key === key) || GENERAL.find(c => c.key === key);
}

/* ---------- Modal helpers (compartidos con study-view vía el DOM) ---------- */
function overlay() { return document.getElementById('overlay'); }
function modalEl() { return document.getElementById('modal'); }
// Exportado para que otros módulos (engine/vpo.js) reutilicen el mismo #overlay/#modal
// en vez de montar uno propio. Exportarlo no cambia el comportamiento de este archivo.
export function openModalShell(accent, innerHTML) {
  const m = modalEl();
  m.style.setProperty('--modal-accent', accent);
  m.innerHTML = innerHTML;
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  overlay().classList.remove('auth-page');
  overlay().classList.add('active');
  document.body.style.overflow = 'hidden';
}
export function closeModal() {
  overlay().classList.remove('active');
  document.body.style.overflow = '';
}
window.closeModal = closeModal;

/* ---------- Render de campos ---------- */
function fieldHTML(f) {
  if (f.type === 'note') return `<div class="calc-note">${f.text}</div>`;
  const sharedAttr = f.shared ? ` data-shared="${f.shared}"` : '';
  if (f.type === 'select') {
    const opts = f.options.map(o =>
      `<option value="${o.value}"${o.selected ? ' selected' : ''}>${o.label}</option>`).join('');
    return `<div class="calc-field"><label>${f.label}</label><select id="${f.id}"${sharedAttr}>${opts}</select></div>`;
  }
  if (f.type === 'checkbox') {
    return `<div class="calc-check"><input type="checkbox" id="${f.id}"${sharedAttr}><label for="${f.id}">${f.label}</label></div>`;
  }
  // number | text
  const step = f.step ? ` step="${f.step}"` : '';
  const ph = f.placeholder ? ` placeholder="${f.placeholder}"` : '';
  return `<div class="calc-field"><label>${f.label}</label><input type="${f.type || 'number'}"${step} id="${f.id}"${ph}${sharedAttr}></div>`;
}

// Agrupa campos marcados con row:'x' en filas de dos columnas (.calc-row2)
function fieldsHTML(fields) {
  let html = '';
  let i = 0;
  while (i < fields.length) {
    const f = fields[i];
    if (f.row) {
      const group = [];
      const rowId = f.row;
      while (i < fields.length && fields[i].row === rowId) { group.push(fields[i]); i++; }
      html += `<div class="calc-row2">${group.map(fieldHTML).join('')}</div>`;
    } else {
      html += fieldHTML(f);
      i++;
    }
  }
  return html;
}

/* ---------- Lectura de valores ---------- */
function readField(f) {
  const el = document.getElementById(f.id);
  if (!el) return undefined;
  if (f.type === 'checkbox') return el.checked;
  if (f.type === 'select') return f.numeric ? +el.value : el.value;
  if (f.type === 'text') return el.value.trim();
  // number
  const v = parseFloat(el.value);
  return isNaN(v) ? null : v;
}
function readAll(calc) {
  const v = {};
  let missingRequired = false;
  calc.fields.forEach(f => {
    if (f.type === 'note') return;
    const val = readField(f);
    v[f.name] = val;
    if (f.required !== false && (f.type === 'number') && (val === null || val === undefined)) missingRequired = true;
  });
  return { v, missingRequired };
}

/* ---------- Shell de la calculadora ---------- */
function calcShell(title, accent, formInner) {
  return `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:${accent};">Calculadora</span>
    <h2>${title}</h2>
    <div class="calc-form">${formInner}</div>
    <div class="calc-result">
      <span class="cr-label">Nota clínica</span>
      <div class="cr-text" id="calc-result-text">Completa los campos.</div>
      <button class="calc-copy" onclick="copyCalcResult(this)">Copiar nota</button>
    </div>`;
}
function setResult(html) { const el = document.getElementById('calc-result-text'); if (el) el.innerHTML = html; }

export function copyCalcResult(btn) {
  const el = document.getElementById('calc-result-text');
  if (!el) return;
  const txt = el.innerText || el.textContent;
  navigator.clipboard.writeText(txt).then(() => {
    const old = btn.textContent; btn.textContent = 'Copiado ✓';
    setTimeout(() => btn.textContent = old, 1400);
  }).catch(() => {});
}
window.copyCalcResult = copyCalcResult;

/* ---------- Abrir una calculadora individual ---------- */
export function openCalc(key) {
  if (key === 'notacombinada') return openCombined();
  const calc = lookupCalc(key);
  if (!calc) return;
  const accent = calc.accent || CALC_TOPIC.accent;
  openModalShell(accent, calcShell(calc.title, accent, fieldsHTML(calc.fields)));
  bindSharedFields();
  const recalc = () => {
    const { v, missingRequired } = readAll(calc);
    if (missingRequired) { setResult(calc.incompleteMsg || 'Completa todos los campos.'); notifyResult(key, null, calc); return; }
    const r = calc.compute(v);
    if (r === null || r === undefined) { setResult(calc.incompleteMsg || 'Completa todos los campos.'); notifyResult(key, null, calc); return; }
    setResult(calc.format(r));
    notifyResult(key, r, calc);
  };
  bindInputs(calc.fields, recalc);
  recalc();
}
window.openCalc = openCalc;

// Para la vista agrupada de Calc (varios temas a la vez): fija el contexto del tema
// correcto (acento, nota combinada) antes de abrir, ya que CALC_TOPIC es un solo tema activo.
export function openCalcFor(topicId, key) {
  const topic = ALL_TOPICS[topicId];
  if (topic) setCalcTopic(topic);
  openCalc(key);
}
window.openCalcFor = openCalcFor;

function bindInputs(fields, handler) {
  fields.forEach(f => {
    if (f.type === 'note') return;
    const el = document.getElementById(f.id);
    if (!el) return;
    const evt = (f.type === 'checkbox' || f.type === 'select') ? 'change' : 'input';
    el.addEventListener(evt, handler);
  });
}

/* ---------- Nota combinada ---------- */
function openCombined() {
  const cn = CALC_TOPIC.combinedNote;
  if (!cn) return;
  const accent = cn.accent || CALC_TOPIC.accent;
  const byKey = k => (CALC_TOPIC.calculators || []).find(c => c.key === k);
  const def = !!cn.defaultChecked;
  const blocks = cn.items.map(k => {
    const calc = byKey(k);
    if (!calc) return '';
    return `<div class="nc-block">
      <label class="calc-check"><input type="checkbox" class="nc-toggle" data-key="${k}"${def ? ' checked' : ''} onchange="ncToggle('${k}')"> ${calc.title}</label>
      <div class="nc-fields" id="nc-fields-${k}" style="display:${def ? 'flex' : 'none'};${def ? 'flex-direction:column;gap:14px;' : ''}">${fieldsHTML(calc.fields)}</div>
    </div>`;
  }).join('');
  const inner = `<div class="calc-note" style="margin:-4px 0 4px;">Selecciona las escalas a incluir — se combinarán en un solo párrafo para el expediente.</div>${blocks}`;
  openModalShell(accent, calcShell(cn.title || 'Nota combinada', accent, inner));
  bindSharedFields();
  if (def) {
    cn.items.forEach(k => { if (byKey(k)) bindCombinedFields(k); });
    recalcCombined();
  } else {
    setResult('Selecciona al menos una escala para comenzar.');
  }
}

function bindCombinedFields(key) {
  const box = document.getElementById('nc-fields-' + key);
  box.querySelectorAll('input,select').forEach(el => {
    const evt = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(evt, recalcCombined);
  });
}

// Campos con el mismo f.shared (p. ej. "edad" repetida en varias escalas) se autocompletan entre
// sí, incluso si se abren en calculadoras distintas por separado (no solo dentro de la nota
// combinada): el último valor escrito se recuerda en SHARED_VALUES y se aplica cada vez que se
// abre una calculadora con ese mismo campo. Si dos escalas codifican el mismo dato distinto
// (p. ej. ASA "II" vs ASA "2"), el campo puede declarar sharedOut/sharedIn para convertir
// hacia/desde ese valor canónico compartido; sin transform se copia tal cual.
let SHARED_VALUES = {};
function bindSharedFields() {
  const groups = {};
  (CALC_TOPIC.calculators || []).forEach(calc => {
    (calc.fields || []).forEach(f => {
      if (!f.shared) return;
      const el = document.getElementById(f.id);
      if (!el) return;
      (groups[f.shared] = groups[f.shared] || []).push({ el, f });
    });
  });
  Object.values(groups).forEach(group => {
    group.forEach(({ el, f }) => {
      if (f.shared in SHARED_VALUES) {
        const canonical = SHARED_VALUES[f.shared];
        const val = f.sharedIn ? f.sharedIn(canonical) : canonical;
        if (val !== null && val !== undefined) { if (f.type === 'checkbox') el.checked = val; else el.value = val; }
      }
      const evt = (f.type === 'checkbox' || f.type === 'select') ? 'change' : 'input';
      el.addEventListener(evt, () => {
        const raw = f.type === 'checkbox' ? el.checked : el.value;
        const canonical = f.sharedOut ? f.sharedOut(raw) : raw;
        if (canonical === null || canonical === undefined) return;
        SHARED_VALUES[f.shared] = canonical;
        group.forEach(other => {
          if (other.el === el) return;
          const val = other.f.sharedIn ? other.f.sharedIn(canonical) : canonical;
          if (val === null || val === undefined) return;
          if (other.f.type === 'checkbox') other.el.checked = val;
          else other.el.value = val;
        });
        recalcCombined();
      });
    });
  });
}

export function ncToggle(key) {
  const box = document.getElementById('nc-fields-' + key);
  const checked = document.querySelector('.nc-toggle[data-key="' + key + '"]').checked;
  box.style.display = checked ? 'flex' : 'none';
  box.style.flexDirection = 'column';
  box.style.gap = '14px';
  if (checked) bindCombinedFields(key);
  recalcCombined();
}
window.ncToggle = ncToggle;

function recalcCombined() {
  const cn = CALC_TOPIC.combinedNote;
  if (!cn || !document.querySelector('.nc-toggle')) return;
  const checked = [...document.querySelectorAll('.nc-toggle:checked')].map(cb => cb.dataset.key);
  if (!checked.length) { setResult('Selecciona al menos una escala.'); return; }
  const byKey = k => (CALC_TOPIC.calculators || []).find(c => c.key === k);
  const results = {};
  const missing = [];
  checked.forEach(k => {
    const calc = byKey(k);
    const { v, missingRequired } = readAll(calc);
    const r = missingRequired ? null : calc.compute(v);
    notifyResult(k, r, calc);
    if (r === null || r === undefined) { missing.push(calc.title); return; }
    results[k] = r;
  });
  let html = cn.build(results, missing);
  setResult(html || 'Completa los campos de las escalas seleccionadas.');
}

/* ---------- Grid de lanzamiento (sección Calculadoras) ---------- */
export function mountCalculators(topic, root, opts = {}) {
  setCalcTopic(topic);
  const accent = (topic.meta && topic.meta.accent) || CALC_TOPIC.accent;
  const cards = [];
  if (topic.combinedNote) {
    cards.push(cardHTML('notacombinada', topic.combinedNote.title || 'Nota combinada',
      topic.combinedNote.subtitle || 'Combina varias escalas en un solo párrafo clínico', accent));
  }
  (topic.calculators || []).forEach(c =>
    cards.push(cardHTML(c.key, c.title, c.subtitle || '', c.accent || accent)));

  const heading = opts.heading || 'Calculadoras';
  const topicTitle = topic.meta ? topic.meta.titulo : '';
  const showExtras = opts.showExtras !== false;
  if (showExtras) GENERAL.forEach(c => cards.push(cardHTML(c.key, c.title, c.subtitle || '', c.accent || accent)));
  const infusionCard = `<div class="comp-card" style="--c:#3d5a73" onclick="openInfusionCalc()">
    <h4>Velocidad de infusión (goteo)</h4><p>Dosis ↔ mL/h para vasopresores y sedantes, con dilución precargada o personalizada.</p><div class="open-hint">Abrir calculadora →</div></div>`;
  root.innerHTML = `
    <div class="sec-header"><h2>${heading}</h2>
      <p>${opts.intro || 'Escalas interactivas. Toca una para abrirla; el resultado incluye una nota lista para el expediente.'}</p></div>
    <div class="sec-body">
      ${topicTitle ? `<h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:2px 0 12px;">${topicTitle}</h3>` : ''}
      <div class="calc-launch-grid">${cards.join('')}</div>
      ${showExtras ? `<h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:28px 0 12px;">Herramientas de dosificación</h3>
      <div class="calc-launch-grid">${infusionCard}</div>` : ''}
    </div>`;
}
function cardHTML(key, title, sub, accent) {
  return `<div class="comp-card" style="--c:${accent}" onclick="openCalc('${key}')">
    <h4>${title}</h4><p>${sub}</p><div class="open-hint">Abrir calculadora →</div></div>`;
}
function cardHTMLFor(topicId, key, title, sub, accent) {
  return `<div class="comp-card" style="--c:${accent}" onclick="openCalcFor('${topicId}','${key}')">
    <h4>${title}</h4><p>${sub}</p><div class="open-hint">Abrir calculadora →</div></div>`;
}

// Vista de la sección Calc: todas las calculadoras de todos los temas construidos,
// agrupadas por tema (ya no depende de un "tema activo" único como mountCalculators).
export function mountAllCalculators(root, topics) {
  ALL_TOPICS = {};
  topics.forEach(t => { if (t.meta) ALL_TOPICS[t.meta.id] = t; });

  const groups = topics.map(t => {
    const accent = (t.meta && t.meta.accent) || '#3d6b6b';
    const cards = [];
    if (t.combinedNote) {
      cards.push(cardHTMLFor(t.meta.id, 'notacombinada', t.combinedNote.title || 'Nota combinada',
        t.combinedNote.subtitle || 'Combina varias escalas en un solo párrafo clínico', accent));
    }
    (t.calculators || []).forEach(c => cards.push(cardHTMLFor(t.meta.id, c.key, c.title, c.subtitle || '', accent)));
    if (!cards.length) return '';
    return `<h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:28px 0 12px;">${t.meta.titulo}</h3>
      <div class="calc-launch-grid">${cards.join('')}</div>`;
  }).join('');

  const generalCards = GENERAL.map(c => cardHTML(c.key, c.title, c.subtitle || '', c.accent || '#3d6b6b'));
  const infusionCard = `<div class="comp-card" style="--c:#3d5a73" onclick="openInfusionCalc()">
    <h4>Velocidad de infusión (goteo)</h4><p>Dosis ↔ mL/h para vasopresores y sedantes, con dilución precargada o personalizada.</p><div class="open-hint">Abrir calculadora →</div></div>`;

  root.innerHTML = `
    <div class="sec-header"><h2>Calculadoras</h2>
      <p>Todas las calculadoras clínicas de la app, agrupadas por tema. Se irán agregando más a medida que se construyan nuevos temas.</p></div>
    <div class="sec-body">
      ${groups}
      ${generalCards.length ? `<h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:28px 0 12px;">Generales</h3>
      <div class="calc-launch-grid">${generalCards.join('')}</div>` : ''}
      <h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:28px 0 12px;">Herramientas de dosificación</h3>
      <div class="calc-launch-grid">${infusionCard}</div>
    </div>`;
}
