// engine/calendar.js
// Calendario de guardias y clases. Persistencia local (localStorage).
// Portado y ampliado desde el prototipo ResidenteMed (que ya usaba localStorage).

import { mountScheduleImport } from './schedule-import.js';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
const STORE_KEY = 'rm:cal-events';

let events = [];               // [{ date:'YYYY-MM-DD', type:'guardia'|'clase', label:'' }]
let today = new Date();
let curMonth = today.getMonth();
let curYear = today.getFullYear();

function load() { try { events = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { events = []; } }
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(events)); } catch (e) {} }
function pad(n) { return String(n).padStart(2, '0'); }
function iso(y, m, d) { return `${y}-${pad(m + 1)}-${pad(d)}`; }
function eventsOn(dateStr) { return events.filter(e => e.date === dateStr); }

export function mountCalendar(root) {
  load();
  root.innerHTML = `
    <div class="sec-header"><h2>Calendario</h2>
      <p>Registra tus guardias y días de clase. Se guardan en este dispositivo.</p></div>
    <div class="sec-body">
      <div id="cal-import-root"></div>
      <div class="cal-add">
        <div class="calc-field"><label>Fecha</label><input type="date" id="cal-date"></div>
        <div class="calc-field"><label>Tipo</label>
          <select id="cal-type"><option value="guardia">Guardia</option><option value="clase">Clase</option></select></div>
        <div class="calc-field" style="flex:2;"><label>Nota (opcional)</label><input type="text" id="cal-label" placeholder="ej. Urgencias, seminario de nefro"></div>
        <button id="cal-add-btn">Agregar</button>
      </div>
      <div class="cal-legend">
        <span><i style="background:#f6e7cf"></i> Guardia</span>
        <span><i style="background:#e5e9f2"></i> Clase</span>
        <span><i style="background:var(--shell-soft)"></i> Hoy</span>
      </div>
      <div class="cal-toolbar">
        <button class="cal-arrow" id="cal-prev">‹</button>
        <div class="cal-month" id="cal-month"></div>
        <button class="cal-arrow" id="cal-next">›</button>
      </div>
      <div class="cal-grid" id="cal-grid"></div>
      <div id="cal-list"></div>
    </div>`;

  root.querySelector('#cal-add-btn').addEventListener('click', addEvent);
  root.querySelector('#cal-prev').addEventListener('click', () => changeMonth(-1));
  root.querySelector('#cal-next').addEventListener('click', () => changeMonth(1));
  const dateInput = root.querySelector('#cal-date');
  dateInput.value = iso(curYear, curMonth, today.getDate());
  mountScheduleImport(root.querySelector('#cal-import-root'), { onImport: addEvents });
  renderMonth();
}

// Agrega varios eventos a la vez (usado por la importación de PDF), evitando duplicados exactos.
export function addEvents(newEvents) {
  let added = 0;
  newEvents.forEach(ev => {
    const dup = events.some(e => e.date === ev.date && e.type === ev.type && e.label === ev.label);
    if (!dup) { events.push(ev); added++; }
  });
  if (added) {
    save();
    const last = newEvents[newEvents.length - 1];
    if (last) { const [y, m] = last.date.split('-').map(Number); curYear = y; curMonth = m - 1; }
    renderMonth();
  }
}

function changeMonth(delta) {
  curMonth += delta;
  if (curMonth > 11) { curMonth = 0; curYear++; }
  if (curMonth < 0) { curMonth = 11; curYear--; }
  renderMonth();
}

function addEvent() {
  const date = document.getElementById('cal-date').value;
  if (!date) return;
  const type = document.getElementById('cal-type').value;
  const label = document.getElementById('cal-label').value.trim();
  events.push({ date, type, label });
  save();
  document.getElementById('cal-label').value = '';
  // saltar al mes del evento agregado
  const [y, m] = date.split('-').map(Number);
  curYear = y; curMonth = m - 1;
  renderMonth();
}

export function removeEvent(date, type, label) {
  const i = events.findIndex(e => e.date === date && e.type === type && e.label === label);
  if (i >= 0) { events.splice(i, 1); save(); renderMonth(); }
}
window.rmCalRemove = removeEvent;

function renderMonth() {
  const monthEl = document.getElementById('cal-month');
  if (!monthEl) return;
  monthEl.textContent = MONTHS[curMonth] + ' ' + curYear;
  const grid = document.getElementById('cal-grid');
  grid.innerHTML = DAYS.map(d => `<div class="cal-dayname">${d}</div>`).join('');
  const first = new Date(curYear, curMonth, 1).getDay();
  const days = new Date(curYear, curMonth + 1, 0).getDate();
  const prevDays = new Date(curYear, curMonth, 0).getDate();
  for (let i = 0; i < first; i++) grid.innerHTML += `<div class="cal-cell other">${prevDays - first + 1 + i}</div>`;
  for (let d = 1; d <= days; d++) {
    const dateStr = iso(curYear, curMonth, d);
    const evs = eventsOn(dateStr);
    const isToday = d === today.getDate() && curMonth === today.getMonth() && curYear === today.getFullYear();
    let cls = 'cal-cell';
    if (isToday) cls += ' today';
    if (evs.some(e => e.type === 'guardia')) cls += ' guardia';
    else if (evs.some(e => e.type === 'clase')) cls += ' clase';
    grid.innerHTML += `<div class="${cls}">${d}${evs.length ? '<div class="cal-dot"></div>' : ''}</div>`;
  }
  renderList();
}

function renderList() {
  const list = document.getElementById('cal-list');
  const prefix = `${curYear}-${pad(curMonth + 1)}`;
  const monthEvents = events.filter(e => e.date.startsWith(prefix)).sort((a, b) => a.date.localeCompare(b.date));
  if (!monthEvents.length) {
    list.innerHTML = '<div class="event-empty">No hay eventos este mes.</div>';
    return;
  }
  list.innerHTML = monthEvents.map(e => {
    const [y, m, d] = e.date.split('-').map(Number);
    const nice = `${d} ${MONTHS[m - 1]}`;
    const color = e.type === 'guardia' ? '#c98b2e' : '#3d5a73';
    const tag = e.type === 'guardia' ? 'Guardia' : 'Clase';
    return `<div class="event-item" style="--c:${color}">
      <span><strong>${nice}</strong> · ${tag}${e.label ? ' — ' + e.label : ''}</span>
      <button class="ev-del" title="Eliminar" onclick="rmCalRemove('${e.date}','${e.type}','${e.label.replace(/'/g, "\\'")}')">✕</button>
    </div>`;
  }).join('');
}
