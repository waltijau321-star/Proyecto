// engine/listas-marcables.js
// La mecánica de una lista buscable: buscador que ignora acentos, acordeón por grupo, chip de
// color y botón para marcar el ítem. Lo único que cambia entre una lista y otra son los datos y
// cómo se rotula cada fila, así que se declara una vez y se instancia tantas veces como haga
// falta (hoy: Fármacos y Estudios de VPO, y las dos pestañas de Pediatría).
//
// Antes vivía en engine/vpo-listas.js, que hoy es solo una reexportación para no tocar los
// cuatro módulos de VPO que la importan por ese nombre. Se movió aquí al construir Pediatría:
// un área nueva que importara de `vpo-listas.js` quedaría atada para siempre al nombre de otra
// área, y la prueba que vigila que las dependencias de VPO vayan en una sola dirección
// (tests.js) existe precisamente para que esas aristas no aparezcan.
//
// Antes de la fábrica eran seis pares de funciones casi idénticas, con el riesgo de arreglar un
// lado y olvidar el otro.

import { syncGet, syncSet } from './cloud-sync.js';

// Normaliza para buscar sin acentos ni mayúsculas: "apixaban" debe encontrar "Apixában".
function norm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

const LISTAS = {};

export function listaMarcable(cfg) {
  const { prefijo, clave, items, grupos, nombre, sub, chip, heno, tituloBoton, abrir,
          marcable = true } = cfg;
  // `marcable: false` pinta la lista sin el botón de marcar. No es una preferencia estética: en
  // VPO ese botón añade el ítem a la nota, que es una acción con un resultado visible en otra
  // pestaña; en una lista donde no hay nota a la que añadir nada, el botón ocupa sitio en cada
  // fila y no hace nada que el usuario pueda ver. Sin botón tampoco hay clave que guardar.
  const marcados = () => (marcable && clave) ? syncGet(clave, {}) : {};

  // La etiqueta del grupo entra en el pajar aunque no la escriba cada lista: el placeholder
  // ofrece buscar "por grupo" y "esteroides" o "anticoagulantes" no devolvían nada, porque la
  // palabra solo vive en el encabezado del acordeón y no en ninguna entrada.
  const etiquetaGrupo = id => (grupos.find(g => g.id === id) || {}).label || '';
  const coincide = (it, q) => {
    if (!q) return true;
    const texto = norm(heno(it) + ' ' + etiquetaGrupo(it.grupo));
    return norm(q).split(/\s+/).filter(Boolean).every(t => texto.includes(t));
  };

  const filaHTML = (it, on) => {
    const c = chip(it);
    return `
    <li class="vpo-drug${on ? ' marcada' : ''}" id="${prefijo}-${it.id}">
      <button type="button" class="vpo-drug-main" onclick="${abrir}('${it.id}')">
        <span class="vpo-drug-name">${nombre(it)}</span>
        <span class="vpo-drug-sum">${sub(it)}</span>
      </button>
      <span class="vpo-chip" style="--chip:${c.color}">${c.label}</span>${marcable ? `
      <button type="button" class="vpo-drug-add" title="${tituloBoton}"
        aria-pressed="${on}" onclick="rmListaMarcar('${prefijo}','${it.id}', this)">${on ? '✓' : '+'}</button>` : ''}
    </li>`;
  };

  const listaHTML = q => {
    const marks = marcados();
    const bloques = grupos.map(g => {
      const propios = items.filter(it => it.grupo === g.id && coincide(it, q));
      if (!propios.length) return '';
      return `
      <section class="vpo-drug-group" style="--c:${g.accent}">
        <h3>${g.label} <span class="vpo-drug-count">${propios.length}</span></h3>
        <ul class="vpo-drug-list">${propios.map(it => filaHTML(it, !!marks[it.id])).join('')}</ul>
      </section>`;
    }).join('');
    return bloques || `<p class="vpo-empty">Ningún resultado coincide con "${q}".</p>`;
  };

  const repintar = () => {
    const caja = document.getElementById(prefijo + '-results');
    if (caja) caja.innerHTML = listaHTML(((document.getElementById(prefijo + '-q') || {}).value || '').trim());
  };

  const toggle = (id, btn) => {
    if (!marcable || !clave) return;
    const marks = marcados();
    if (marks[id]) delete marks[id]; else marks[id] = true;
    syncSet(clave, marks);
    const on = !!marks[id];
    if (btn) {
      btn.textContent = on ? '✓' : '+';
      btn.setAttribute('aria-pressed', String(on));
      const fila = document.getElementById(prefijo + '-' + id);
      if (fila) fila.classList.toggle('marcada', on);
    }
  };

  const api = { listaHTML, repintar, toggle,
                limpiar: () => { if (marcable && clave) syncSet(clave, {}); repintar(); },
                paraNota: () => items.filter(it => marcados()[it.id]) };
  LISTAS[prefijo] = api;
  return api;
}

// El bloque con título que arma el detalle de un fármaco y el de un estudio.
export function bloqueHTML(titulo, cuerpo) {
  return cuerpo ? `<h3 class="vpo-d-h">${titulo}</h3><div class="vpo-d-b">${cuerpo}</div>` : '';
}

window.rmListaMarcar = (prefijo, id, btn) => { const l = LISTAS[prefijo]; if (l) l.toggle(id, btn); };
window.rmListaBuscar = prefijo => { const l = LISTAS[prefijo]; if (l) l.repintar(); };
// Alias con el nombre viejo: los onclick en línea de las pestañas de VPO llaman a estos dos, y
// están escritos dentro de cadenas de HTML, no como referencias que un renombrado alcance.
window.rmVpoListaMarcar = window.rmListaMarcar;
window.rmVpoListaBuscar = window.rmListaBuscar;
