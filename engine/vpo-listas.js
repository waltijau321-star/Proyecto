// engine/vpo-listas.js
// La mecánica que comparten las pestañas Fármacos y Estudios: buscador que ignora acentos,
// acordeón por grupo, chip de color y botón para marcar el ítem hacia la nota. Lo único que
// cambia entre las dos son los datos y cómo se rotula cada fila, así que se declara una vez
// y se instancia dos (ver engine/vpo-farmacos.js y engine/vpo-estudios.js).
//
// Antes eran seis pares de funciones casi idénticas, con el riesgo de arreglar un lado y
// olvidar el otro.

import { syncGet, syncSet } from './cloud-sync.js';

// Normaliza para buscar sin acentos ni mayúsculas: "apixaban" debe encontrar "Apixában".
function norm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

const LISTAS = {};

export function listaMarcable(cfg) {
  const { prefijo, clave, items, grupos, nombre, sub, chip, heno, tituloBoton, abrir } = cfg;
  const marcados = () => syncGet(clave, {});

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
      <span class="vpo-chip" style="--chip:${c.color}">${c.label}</span>
      <button type="button" class="vpo-drug-add" title="${tituloBoton}"
        aria-pressed="${on}" onclick="rmVpoListaMarcar('${prefijo}','${it.id}', this)">${on ? '✓' : '+'}</button>
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

  const api = { listaHTML, repintar, toggle, limpiar: () => { syncSet(clave, {}); repintar(); },
                paraNota: () => items.filter(it => marcados()[it.id]) };
  LISTAS[prefijo] = api;
  return api;
}

// El bloque con título que arma el detalle de un fármaco y el de un estudio.
export function bloqueHTML(titulo, cuerpo) {
  return cuerpo ? `<h3 class="vpo-d-h">${titulo}</h3><div class="vpo-d-b">${cuerpo}</div>` : '';
}

window.rmVpoListaMarcar = (prefijo, id, btn) => { const l = LISTAS[prefijo]; if (l) l.toggle(id, btn); };
window.rmVpoListaBuscar = prefijo => { const l = LISTAS[prefijo]; if (l) l.repintar(); };
