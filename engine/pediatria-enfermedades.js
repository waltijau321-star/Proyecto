// engine/pediatria-enfermedades.js
// Pestaña Por enfermedad: el índice inverso.
//
// NO hay una segunda lista de datos. Esta vista se DERIVA de las mismas `dosis[]` que alimentan la
// pestaña Fármacos, agrupando por su campo `indicaciones[]`. Escribir la relación dos veces es
// como se acaba con un fármaco que en la lista de la enfermedad sale con la dosis que ya se
// corrigió en su propia ficha, y nadie se enteró. Hay dos pruebas que comprueban la integridad en
// los dos sentidos: que cada indicación citada exista, y que cada indicación declarada la cite al
// menos una línea (una indicación huérfana es una enfermedad que se abre vacía).
//
// LA VISTA NO ORDENA. Ninguna de las fuentes de este archivo es una guía de tratamiento: Taketomo,
// NeoFax y Harriet Lane son manuales de dosificación, dicen cuánto y no qué primero. Presentar
// estos fármacos bajo un encabezado que diga "primera línea" les atribuiría una recomendación que
// no hacen, y quien abra "Neumonía" y lea "primera línea" lo prescribe. Así que se agrupan por
// clase terapéutica, se dice en pantalla que no es un orden de elección, y el `contexto` de cada
// cuadro (que es obligatorio) dice a qué paciente aplica la lista y a cuál no.

import { areas, farmacos, grupos, indicaciones } from '../protocols/pediatria-farmacos.js';
import { openModalShell } from './calculators.js';
import { listaMarcable } from './listas-marcables.js';
import { ACCENT, registrarPintor } from './pediatria-estado.js';
import { pacientePedia } from './pediatria-ficha.js';
import { lineaHTML, repartirPorFranja } from './pediatria-vista.js';

const porId = id => indicaciones.find(i => i.id === id);

/* ---------------- El índice inverso ----------------
   Para un cuadro, qué fármacos tienen al menos una línea de dosis que lo cita, y cuáles son esas
   líneas. Exportada para tests.js: es la derivación que sostiene toda la pestaña, y lo que hay que
   probar es que no pierde ni inventa relaciones. */
export function farmacosDeCuadro(cuadroId) {
  const out = [];
  farmacos.forEach(f => {
    const lineas = (f.dosis || []).filter(d => (d.indicaciones || []).includes(cuadroId));
    if (lineas.length) out.push({ farmaco: f, lineas });
  });
  return out;
}

const nombresDe = cuadroId => farmacosDeCuadro(cuadroId).map(x => x.farmaco.farmaco);

// listaMarcable agrupa por `it.grupo`; en la taxonomía de cuadros el eje se llama `area`, que es
// su nombre propio. Se adapta aquí, en una línea, en vez de renombrar el campo en los datos para
// acomodar a la fábrica.
const items = indicaciones.map(i => ({ ...i, grupo: i.area }));

const listaCuadros = listaMarcable({
  prefijo: 'pedia-enf', items, grupos: areas, marcable: false,
  nombre: i => i.nombre,
  // El adelanto de la fila son los fármacos mismos: es lo que se viene a ver, y ahorra abrir.
  sub: i => {
    const n = nombresDe(i.id);
    if (!n.length) return 'Sin fármacos registrados todavía';
    return n.length <= 3 ? n.join(' · ') : `${n.slice(0, 3).join(' · ')} y ${n.length - 3} más`;
  },
  chip: i => {
    const n = farmacosDeCuadro(i.id).length;
    return { label: `${n} fármaco${n === 1 ? '' : 's'}`, color: ACCENT };
  },
  // El pajar incluye los nombres de los fármacos que tratan el cuadro: así escribir "amoxicilina"
  // en esta pestaña encuentra los cuadros que trata, y no solo al revés.
  heno: i => [i.nombre, (i.alias || []).join(' '), i.contexto, nombresDe(i.id).join(' ')].join(' '),
  abrir: 'rmPediaCuadro'
});

export function mountEnfermedadesPedia(pane) {
  pane.innerHTML = `
    <div class="sec-body">
      <div class="vpo-drug-search">
        <input type="text" id="pedia-enf-q" autocomplete="off"
          placeholder="Buscar enfermedad, alias o fármaco: otitis, OMA, crisis asmática, ceftriaxona…"
          oninput="rmListaBuscar('pedia-enf')">
      </div>
      <div id="pedia-enf-results">${listaCuadros.listaHTML('')}</div>
    </div>`;
  registrarPintor('enfermedades', () => {});
}

/* ---------------- La ficha del cuadro ----------------
   El armado del HTML y su apertura van separados: `cuadroHTML` es puro y es lo que prueba
   tests.js, que no tiene el par #overlay/#modal de index.html. Mismo criterio que las funciones
   de lista exportadas solo para la suite: lo que solo existe al pintar hay que poder pintarlo
   sin abrir nada. */
export function cuadroHTML(id) {
  const cuadro = porId(id);
  if (!cuadro) return null;
  const a = areas.find(x => x.id === cuadro.area) || { accent: ACCENT, label: '' };
  const encontrados = farmacosDeCuadro(id);
  const paciente = pacientePedia();

  // Agrupados por clase terapéutica, en el orden en que se declaran las clases, y alfabéticamente
  // dentro de cada una. Es un orden estable y sin jerarquía clínica, que es justo lo que se quiere.
  const bloques = grupos.map(g => {
    const propios = encontrados.filter(x => x.farmaco.grupo === g.id)
      .sort((x, y) => x.farmaco.farmaco.localeCompare(y.farmaco.farmaco, 'es'));
    if (!propios.length) return '';
    const fichas = propios.map(({ farmaco, lineas }) => {
      const { aplican, otras } = repartirPorFranja(lineas, paciente);
      const pintar = arr => arr.map(l => lineaHTML(l, farmaco)).join('');
      const otrasHTML = otras.length
        ? `<details class="pedia-otras"><summary>Otras franjas de edad o de peso (${otras.length})</summary>${pintar(otras)}</details>`
        : '';
      return `
        <div class="pedia-enf-farmaco">
          <button type="button" class="pedia-enf-nombre" onclick="rmPediaFarmaco('${farmaco.id}')">
            ${farmaco.farmaco}<span class="pedia-enf-ver">ver la ficha completa →</span>
          </button>
          ${pintar(aplican)}${otrasHTML}
        </div>`;
    }).join('');
    return `<section class="pedia-enf-grupo" style="--c:${g.accent}"><h3>${g.label}</h3>${fichas}</section>`;
  }).join('');

  // La frase que impide que la lista se lea como una recomendación. Se pinta siempre que ninguna
  // línea del cuadro declare `linea` (orden de elección), que hoy es siempre, porque ninguna
  // fuente de este archivo ordena tratamientos. Hay una prueba que lo comprueba.
  const hayOrden = encontrados.some(x => x.lineas.some(l => l.linea));
  const descargo = hayOrden ? '' : `<p class="calc-note">No es un orden de elección: la elección
    depende del escenario, de la gravedad y de la resistencia local. Aquí están los fármacos con
    dosis pediátrica registrada para este cuadro, agrupados por clase.</p>`;

  return {
    accent: a.accent,
    html: `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:${a.accent};">${a.label}</span>
    <h2>${cuadro.nombre}</h2>
    <p class="vpo-d-lead">${cuadro.contexto}</p>
    ${descargo}
    ${bloques || '<p class="vpo-empty">Todavía no hay fármacos registrados para este cuadro.</p>'}`
  };
}

export function abrirCuadroPedia(id) {
  const r = cuadroHTML(id);
  if (r) openModalShell(r.accent, r.html);
}

// Exportada solo para tests.js, igual que la de la otra pestaña.
export const listaCuadrosPediaHTML = q => listaCuadros.listaHTML(q);
