// engine/pediatria-vista.js
// Cómo se pinta una línea de dosis. Lo comparten las dos pestañas de la sección, y vive aquí y no
// en una de ellas porque una pestaña no importa a la otra (ver la cabecera de engine/pediatria.js
// y la prueba que lo vigila). Solo importa la aritmética y la ficha, que no importan a nadie del
// área.
//
// La línea se pinta en tres partes apiladas, y solo la primera es incondicional:
//
//   1. SIEMPRE, el dato tal cual: "80 a 90 mg/kg/día · cada 12 h · oral · 10 días".
//   2. Solo con peso, lo calculado: "Con 12.4 kg → 992 a 1120 mg/día = 496 a 560 mg cada 12 h".
//   3. Solo con peso y presentación, el volumen: "suspensión 250 mg/5 mL → 11 mL (550 mg)".
//
// Sin peso, las filas 2 y 3 no están: nada se bloquea, nada se pone en gris y ningún modal exige
// un peso. La sección es un libro de consulta antes que una calculadora.
//
// La fila 2 REPITE el peso que usó. Si alguien teclea 70 para un lactante de 7.0 kg, la fila dice
// "Con 70 kg" y el absurdo queda impreso al lado del número que produjo. Esa repetición es la
// defensa principal contra el error de factor diez y no cuesta nada.

import { EVIDENCIA, FUENTES } from '../protocols/pediatria-farmacos.js';
import { calcularDosis, lineaAplica, redondearMg, textoDosis, textoFranja, VIAS } from './pediatria-dosis.js';
import { pacientePedia } from './pediatria-ficha.js';

// La presentación elegida para cada fármaco, mientras su ficha está abierta. NO se guarda: una
// concentración recordada de la semana pasada, cuando la farmacia ya cambió de presentación, es
// justo el error de factor dos que esta sección trata de evitar. Se elige cada vez y se nombra
// cada vez.
const ELEGIDA = {};

export function presentacionElegida(farmaco) {
  const pres = farmaco.presentaciones || [];
  if (!pres.length) return null;
  const id = ELEGIDA[farmaco.id];
  return pres.find(p => p.id === id) || pres[0];
}

export function elegirPresentacion(farmacoId, presId) {
  ELEGIDA[farmacoId] = presId;
}

const num = v => (typeof v === 'number' && isFinite(v));

// Un par {min, max} en texto, con una sola cifra cuando los dos extremos coinciden.
function parTexto(par, sufijo) {
  if (!par || !num(par.min)) return '';
  const a = redondearMg(par.min);
  const b = redondearMg(par.max);
  const n = (a === b) ? `${a}` : `${a} a ${b}`;
  return sufijo ? `${n} ${sufijo}` : n;
}

/* ---------------- El bloque de lo calculado ---------------- */
function calculadoHTML(linea, farmaco) {
  const p = pacientePedia();
  const pres = presentacionElegida(farmaco);
  const r = calcularDosis(linea, p, pres);
  if (!r) return '';

  const filas = [];

  // Los mg. Se imprimen la lectura por toma Y la lectura por día siempre que se conozcan las dos:
  // una línea mal etiquetada (mg/kg/día escrito como mg/kg/dosis, o al revés) produce así un
  // total diario visiblemente absurdo en vez de una toma plausiblemente equivocada.
  const porToma = parTexto(r.dosis, 'mg');
  // Con una sola toma al dia, el total diario es la misma cifra: repetirla no informa de nada y
  // ensucia la linea. Las dos lecturas valen cuando de verdad son dos numeros distintos.
  const alDia = (num(r.dia && r.dia.min) && r.tomas && r.tomas > 1) ? parTexto(r.dia, 'mg') : '';
  const cadaCuanto = num(linea.cada) ? ` cada ${linea.cada} h` : (linea.unica ? ' en dosis única' : '');
  const conPeso = r.peso !== null
    ? `Con ${r.peso} kg` : 'Dosis fija, no depende del peso';
  const mgTexto = alDia
    ? `${porToma}${cadaCuanto} = ${alDia} al día`
    : `${porToma}${cadaCuanto}`;
  if (r.carga) {
    // Primero la carga, que es la que se pone primero. Va en su propia fila y dice que es una
    // sola vez: confundirla con la de mantenimiento es dar el doble cada seis horas.
    const vol = r.carga.volumen
      ? ` · ${r.carga.volumen.etiqueta} → ${Math.round(r.carga.volumen.mL * 100) / 100} mL (${redondearMg(r.carga.volumen.mg)} mg)`
      : (r.carga.unidades ? ` · ${r.carga.unidades.etiqueta} → ${r.carga.unidades.n} (${redondearMg(r.carga.unidades.mg)} mg)` : '');
    filas.push(`<div class="pedia-calc-carga"><strong>Carga, una sola vez: ${
      parTexto(r.carga, 'mg')}</strong>${vol}</div>`);
  }
  filas.push(`<div class="pedia-calc-mg"><strong>${
    r.carga ? 'Después, ' + conPeso.charAt(0).toLowerCase() + conPeso.slice(1) : conPeso} → ${mgTexto}</strong></div>`);

  // El tope, cuando muerde: se dice el techo, a cuántos mg/kg queda y lo que habría dado la
  // aritmética sin topar. Un número que deja de seguir al peso sin explicación es un número que
  // el residente no puede comprobar.
  if (r.topeMordio) {
    const cual = r.topeMordio === 'dia' ? 'al día'
      : r.topeMordio === 'ambos' ? 'por toma y al día' : 'por toma';
    const techo = r.topeMordio === 'dia' ? r.topes.dia : r.topes.dosis;
    const sinTope = r.topeMordio === 'dia' ? parTexto(r.sinTope.dia, 'mg') : parTexto(r.sinTope.dosis, 'mg');
    const real = r.mgkgReal ? `${redondearMg(r.mgkgReal.max)} mg/kg por toma` : '';
    filas.push(`<div class="pedia-calc-tope">Tope aplicado ${cual}: ${redondearMg(techo)} mg${
      real ? ` · queda en ${real}` : ''} · sin tope serían ${sinTope}</div>`);
  }

  // El volumen o las unidades, nombrando SIEMPRE la presentación que se usó. Ni un mililitro
  // suelto: 5 mL de 125 mg/5 mL y 5 mL de 250 mg/5 mL se ven igual en la jeringa.
  if (r.volumen) {
    filas.push(`<div class="pedia-calc-vol">${r.volumen.etiqueta} → <strong>${
      Math.round(r.volumen.mL * 100) / 100} mL</strong>${cadaCuanto} (${redondearMg(r.volumen.mg)} mg)</div>`);
  } else if (r.unidades) {
    filas.push(`<div class="pedia-calc-vol">${r.unidades.etiqueta} → <strong>${
      r.unidades.n}</strong>${cadaCuanto} (${redondearMg(r.unidades.mg)} mg)</div>`);
  }

  (r.avisos || []).forEach(a => filas.push(`<div class="pedia-calc-aviso">${a}</div>`));

  return `<div class="pedia-calc">${filas.join('')}</div>`;
}

/* ---------------- La fuente de la línea ----------------
   Van por línea y no por fármaco, porque es el caso normal que la dosis neonatal venga de un
   manual y la pediátrica de otro. La insignia distingue una recomendación de guía de un manual de
   dosificación y de una práctica de consenso: saber cuál es cambia cuánto peso darle frente al
   protocolo de la institución. */
function fuenteHTML(linea) {
  const ev = EVIDENCIA[linea.evidencia] || EVIDENCIA.consenso;
  const f = FUENTES[(linea.fuente || {}).ref] || {};
  const pagina = (linea.fuente || {}).pagina;
  return `<p class="proto-source"><span class="vpo-ev ${ev.clase}">${ev.label}</span> ${
    f.etiqueta || 'Fuente no declarada'}${pagina ? `, p. ${pagina}` : ''}</p>`;
}

/* ---------------- Una línea de dosis entera ----------------
   `mostrarCuadros` solo en la ficha del fármaco: en la vista por enfermedad ya se sabe de qué
   cuadro se viene, y repetirlo en cada línea es ruido. */
export function lineaHTML(linea, farmaco, { mostrarCuadros = false, nombresCuadros = null } = {}) {
  const aplica = lineaAplica(linea, pacientePedia());
  const cuadros = (mostrarCuadros && nombresCuadros)
    ? `<div class="pedia-linea-cuadros">${linea.indicaciones.map(id => nombresCuadros[id] || id).join(' · ')}</div>`
    : '';
  return `
    <div class="pedia-linea${aplica === true ? ' aplica' : ''}">
      ${cuadros}
      <div class="pedia-linea-dato">${textoDosis(linea)}</div>
      <div class="pedia-linea-franja">${textoFranja(linea)}</div>
      ${calculadoHTML(linea, farmaco)}
      ${linea.nota ? `<div class="pedia-linea-nota">${linea.nota}</div>` : ''}
      ${fuenteHTML(linea)}
    </div>`;
}

/* ---------------- El selector de presentación ----------------
   Se nombra la concentración en la etiqueta de cada opción, y debajo se dice que son las
   habituales y no las de un producto concreto: el volumen calculado solo vale para la
   concentración que de verdad está en el frasco. */
export function selectorPresentacionHTML(farmaco) {
  const pres = farmaco.presentaciones || [];
  if (pres.length < 1) return '';
  const elegida = presentacionElegida(farmaco);
  if (pres.length === 1) {
    return `<p class="pedia-pres-unica">Volumen calculado sobre <strong>${pres[0].etiqueta}</strong>.
      Comprueba la concentración del frasco que tengas: es la que decide el volumen.</p>`;
  }
  return `
    <div class="calc-field pedia-pres">
      <label for="pedia-pres-${farmaco.id}">Presentación con la que se calcula el volumen</label>
      <select id="pedia-pres-${farmaco.id}" onchange="rmPediaPresentacion('${farmaco.id}', this.value)">${
        pres.map(p => `<option value="${p.id}"${elegida && p.id === elegida.id ? ' selected' : ''}>${p.etiqueta}</option>`).join('')
      }</select>
      <p class="calc-note">Son las concentraciones habituales del mercado, no las de un producto
        concreto. Comprueba la del frasco que tengas: es la que decide el volumen.</p>
    </div>`;
}

// Las franjas que NO aplican al niño de la ficha no se borran: se agrupan y se dejan a un toque.
// Esconder una dosis por una edad que nadie pidió es una dosis que el residente no llegó a ver.
export function repartirPorFranja(lineas, paciente) {
  const aplican = [];
  const otras = [];
  lineas.forEach(l => {
    const r = lineaAplica(l, paciente);
    if (r === false) otras.push(l); else aplican.push(l);
  });
  return { aplican, otras };
}

export const viaLabel = v => VIAS[v] || v;
