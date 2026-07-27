// engine/protocols.js
// Renderiza protocolos/checklists interactivos con pasos marcables y persistencia local.
// Consume datos declarativos desde protocols/protocols.js.

import { protocols } from '../protocols/protocols.js';
import { syncGet, syncSet } from './cloud-sync.js';

let ROOT = null;
function key(id) { return 'rm:proto:' + id; }
function loadState(id) { return syncGet(key(id), {}); }
function saveState(id, st) { syncSet(key(id), st); }

export function mountProtocols(root) {
  ROOT = root;
  renderList();
}

function renderList() {
  const cards = protocols.map(p => `
    <div class="comp-card" style="--c:${p.accent}" onclick="rmProtoOpen('${p.id}')">
      <h4>${p.title}</h4><p>${p.subtitle}</p>
      <div class="open-hint">Abrir →</div>
    </div>`).join('');
  ROOT.innerHTML = `
    <div class="sec-header"><h2>Protocolos</h2>
      <p>Teoría, fármacos/dosis y checklist interactivo para maniobras críticas. El progreso del checklist se guarda en este dispositivo.</p></div>
    <div class="sec-body"><div class="proto-grid">${cards}</div></div>`;
}

function drugsTable(drugs, accent) {
  if (!drugs || !drugs.length) return '';
  const rows = drugs.map(d => `
    <div class="val-row">
      <span class="val-name">${d.name}<span class="val-note">${d.indication}${d.note ? ' — ' + d.note : ''}</span></span>
      <span class="val-range">${d.dose}</span>
    </div>`).join('');
  return `<h3 style="color:${accent}">Fármacos y dosis</h3><div class="proto-drugs">${rows}</div>`;
}

function theoryHTML(theory, accent) {
  if (!theory) return '';
  const caveat = theory.caveat ? `<div class="calc-note" style="margin-bottom:14px;">${theory.caveat}</div>` : '';
  const intro = theory.intro ? `<p>${theory.intro}</p>` : '';
  const points = (theory.keyPoints && theory.keyPoints.length)
    ? `<h3 style="color:${accent}">Conceptos clave</h3><ul class="proto-keypoints">${theory.keyPoints.map(k => `<li>${k}</li>`).join('')}</ul>`
    : '';
  const drugs = drugsTable(theory.drugs, accent);
  return `<div class="proto-theory">${caveat}${intro}${points}${drugs}</div><hr class="proto-divider">`;
}

export function openProtocol(id) {
  const p = protocols.find(x => x.id === id);
  if (!p) return;
  const st = loadState(id);
  let lastPhase = null;
  const rows = p.steps.map((s, i) => {
    const phaseHeader = s.phase && s.phase !== lastPhase ? `<div class="ps-phase" style="color:${p.accent}">${s.phase}</div>` : '';
    lastPhase = s.phase;
    const checked = st[i] ? ' checked' : '';
    return `${phaseHeader}
      <li class="proto-step${checked}" style="--modal-accent:${p.accent}" onclick="rmProtoToggle('${id}',${i},this)">
        <span class="proto-check">✓</span>
        <div class="ps-body"><div class="ps-text">${s.text}</div>${s.note ? `<div class="ps-note">${s.note}</div>` : ''}</div>
      </li>`;
  }).join('');
  ROOT.innerHTML = `
    <div class="sec-header" style="--modal-accent:${p.accent}">
      <button class="proto-reset" style="margin-bottom:10px" onclick="rmProtoBack()">← Protocolos</button>
      <h2>${p.title}</h2><p>${p.subtitle}</p>
    </div>
    <div class="sec-body">
      ${theoryHTML(p.theory, p.accent)}
      <div class="proto-checklist-head"><h3>Checklist interactivo</h3></div>
      <ul class="proto-steps" style="--modal-accent:${p.accent}">${rows}</ul>
      <button class="proto-reset" onclick="rmProtoReset('${id}')">Reiniciar checklist</button>
      <p class="proto-source">Fuente: ${p.source}</p>
    </div>`;
}

export function toggleStep(id, i, el) {
  const st = loadState(id);
  st[i] = !st[i];
  saveState(id, st);
  el.classList.toggle('checked', !!st[i]);
}
function resetProtocol(id) { saveState(id, {}); openProtocol(id); }

window.rmProtoOpen = openProtocol;
window.rmProtoToggle = toggleStep;
window.rmProtoReset = resetProtocol;
window.rmProtoBack = renderList;
