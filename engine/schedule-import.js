// engine/schedule-import.js
// Importa guardias/clases desde un PDF de rol (horario), buscando las filas que
// mencionan tu nombre y proponiendo fechas para revisar y agregar al calendario.
// Todo ocurre en el navegador (pdf.js vendorizado localmente) — el PDF nunca sale del dispositivo.

import { syncGet, syncSet } from './cloud-sync.js';

const MONTH_NAMES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const NAME_KEY = 'rm:cal-my-name';

let onImportCb = null;
let lastCandidates = [];

function normalize(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
}
function pad(n) { return String(n).padStart(2, '0'); }

export function mountScheduleImport(root, { onImport }) {
  onImportCb = onImport;
  const savedName = syncGet(NAME_KEY, '') || '';
  root.innerHTML = `
    <details class="cal-import">
      <summary>Importar guardias desde un PDF</summary>
      <div class="cal-import-body">
        <p class="cal-import-hint">Sube el PDF de tu rol de guardias, indica cómo aparece tu nombre en el documento y revisa las fechas detectadas antes de agregarlas. El archivo no sale de este dispositivo.</p>
        <div class="cal-add">
          <div class="calc-field" style="flex:2;"><label>Tu nombre (como aparece en el PDF)</label><input type="text" id="ci-name" placeholder="ej. Jáuregui, o Walter Jáuregui" value="${savedName.replace(/"/g, '&quot;')}"></div>
          <div class="calc-field"><label>Mes de referencia (para fechas sin mes explícito)</label><input type="month" id="ci-refmonth"></div>
        </div>
        <div class="cal-add">
          <div class="calc-field" style="flex:2;"><label>Archivo PDF</label><input type="file" id="ci-file" accept="application/pdf"></div>
          <button id="ci-analyze">Analizar PDF</button>
        </div>
        <div id="ci-status" class="cal-import-status"></div>
        <div id="ci-results"></div>
      </div>
    </details>`;

  const refInput = root.querySelector('#ci-refmonth');
  const now = new Date();
  refInput.value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}`;

  root.querySelector('#ci-analyze').addEventListener('click', () => analyze(root));
}

async function analyze(root) {
  const status = root.querySelector('#ci-status');
  const resultsEl = root.querySelector('#ci-results');
  const fileInput = root.querySelector('#ci-file');
  const nameInput = root.querySelector('#ci-name');
  const refMonth = root.querySelector('#ci-refmonth').value; // 'YYYY-MM'

  const file = fileInput.files[0];
  const rawName = nameInput.value.trim();
  if (!file) { status.textContent = 'Selecciona un archivo PDF.'; return; }
  if (!rawName) { status.textContent = 'Indica tu nombre como aparece en el documento.'; return; }
  syncSet(NAME_KEY, rawName);

  status.textContent = 'Leyendo el PDF…';
  resultsEl.innerHTML = '';

  try {
    const pdfjsLib = await import('./vendor/pdfjs/pdf.min.mjs');
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('./vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;

    const buf = await file.arrayBuffer();
    const doc = await pdfjsLib.getDocument({ data: buf }).promise;

    const nameNorm = normalize(rawName);
    const nameTokens = nameNorm.split(/\s+/).filter(Boolean);
    const candidates = [];
    let docRefMonth = refMonth; // may be overridden by a detected header like "JULIO 2026"

    for (let p = 1; p <= doc.numPages; p++) {
      status.textContent = `Analizando página ${p} de ${doc.numPages}…`;
      const page = await doc.getPage(p);
      const content = await page.getTextContent();
      const items = content.items.map(it => ({
        text: it.str, x: it.transform[4], y: it.transform[5]
      })).filter(it => it.text && it.text.trim());

      // Detectar encabezado de mes/año en la página (ej. "JULIO 2026")
      const pageText = items.map(it => it.text).join(' ');
      const headerMatch = normalize(pageText).match(/(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\s+(?:de\s+)?(\d{4})/);
      if (headerMatch) {
        const mIdx = MONTH_NAMES.indexOf(headerMatch[1]) + 1;
        docRefMonth = `${headerMatch[2]}-${pad(mIdx)}`;
      }

      // Agrupar en filas por coordenada Y (tolerancia por jitter de renderizado)
      const rows = [];
      items.sort((a, b) => b.y - a.y || a.x - b.x);
      items.forEach(it => {
        let row = rows.find(r => Math.abs(r.y - it.y) < 4);
        if (!row) { row = { y: it.y, items: [] }; rows.push(row); }
        row.items.push(it);
      });

      rows.forEach(row => {
        row.items.sort((a, b) => a.x - b.x);
        const lineText = row.items.map(it => it.text).join(' ').replace(/\s+/g, ' ').trim();
        const lineNorm = normalize(lineText);
        const matched = nameTokens.length && (nameTokens.every(t => lineNorm.includes(t)) || lineNorm.includes(nameNorm));
        if (!matched) return;

        const date = extractDate(lineText, docRefMonth);
        candidates.push({ page: p, text: lineText, date, type: guessType(lineText) });
      });
    }

    lastCandidates = candidates;
    renderResults(root, candidates);
    status.textContent = candidates.length
      ? `${candidates.length} coincidencia(s) encontradas. Revisa y ajusta antes de agregar.`
      : 'No se encontraron filas con ese nombre. Prueba con solo el apellido, o verifica el PDF.';
  } catch (err) {
    console.error(err);
    status.textContent = 'No se pudo leer el PDF (¿está protegido o dañado?). Detalle: ' + (err.message || err);
  }
}

function extractDate(text, refMonth) {
  // DD/MM/YYYY o DD-MM-YYYY
  let m = text.match(/\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})\b/);
  if (m) return `${m[3]}-${pad(+m[2])}-${pad(+m[1])}`;
  // DD/MM (sin año) — usa el mes de referencia como año
  m = text.match(/\b(\d{1,2})[\/\-](\d{1,2})\b/);
  if (m && refMonth) return `${refMonth.slice(0, 4)}-${pad(+m[2])}-${pad(+m[1])}`;
  // "15 de julio (de 2026)"
  m = normalize(text).match(/\b(\d{1,2})\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)(?:\s+de\s+(\d{4}))?\b/);
  if (m) {
    const mi = MONTH_NAMES.indexOf(m[2]) + 1;
    const yr = m[3] || (refMonth ? refMonth.slice(0, 4) : new Date().getFullYear());
    return `${yr}-${pad(mi)}-${pad(+m[1])}`;
  }
  // Número de día suelto (1-31) — solo con mes de referencia disponible
  m = text.match(/(?:^|\s)([0-3]?\d)(?:\s|$)/);
  if (m && refMonth) {
    const d = +m[1];
    if (d >= 1 && d <= 31) return `${refMonth}-${pad(d)}`;
  }
  return '';
}

function guessType(text) {
  const t = normalize(text);
  if (/\bclase|semin|catedra|clase teorica|academi/.test(t)) return 'clase';
  return 'guardia';
}

function renderResults(root, candidates) {
  const el = root.querySelector('#ci-results');
  if (!candidates.length) { el.innerHTML = ''; return; }
  el.innerHTML = `
    <div class="table-wrap" style="margin:14px 0;">
      <table>
        <thead><tr><th></th><th>Fecha</th><th>Tipo</th><th>Texto detectado (pág.)</th></tr></thead>
        <tbody>
          ${candidates.map((c, i) => `
            <tr>
              <td><input type="checkbox" class="ci-check" data-i="${i}" ${c.date ? 'checked' : ''}></td>
              <td><input type="date" class="ci-date" data-i="${i}" value="${c.date}" style="min-width:150px;"></td>
              <td><select class="ci-type" data-i="${i}"><option value="guardia" ${c.type === 'guardia' ? 'selected' : ''}>Guardia</option><option value="clase" ${c.type === 'clase' ? 'selected' : ''}>Clase</option></select></td>
              <td style="font-size:12px;color:var(--ink-faint);">${escapeHTML(c.text)} <span class="mono">(p.${c.page})</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <button class="calc-copy" id="ci-commit">Agregar seleccionadas al calendario</button>
  `;
  el.querySelector('#ci-commit').addEventListener('click', () => commit(root));
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function commit(root) {
  const rows = [...root.querySelectorAll('#ci-results tbody tr')];
  const toAdd = [];
  rows.forEach((tr, i) => {
    const checked = tr.querySelector('.ci-check').checked;
    const date = tr.querySelector('.ci-date').value;
    const type = tr.querySelector('.ci-type').value;
    if (checked && date) toAdd.push({ date, type, label: 'Importado de PDF' });
  });
  if (!toAdd.length) return;
  if (onImportCb) onImportCb(toAdd);
  root.querySelector('#ci-status').textContent = `${toAdd.length} evento(s) agregado(s) al calendario.`;
  root.querySelector('#ci-results').innerHTML = '';
}
