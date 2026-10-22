// engine/vpo-ficha.js
// La ficha del paciente: la cabecera plegable que encabeza toda la sección.
//
// Los datos que varias escalas repiten (edad, sexo, peso, creatinina, clase ASA, estado
// funcional y tipo de cirugía) vivían solo dentro de cada calculadora: el motor los copiaba
// entre las escalas abiertas, pero se perdían al recargar y no cruzaban de dispositivo. Aquí
// tienen una casa única, sincronizada como el resto del borrador del paciente. Da igual dónde
// se escriba el dato: el motor avisa de cualquier cambio (setSharedListener) y la ficha le
// siembra lo que guarda (setSharedValues), de modo que los dos lados dicen lo mismo.
//
// Las opciones de cirugía, clase ASA y estado funcional no se escriben otra vez: se leen del
// descriptor de la escala que ya las declara, para que añadir un tipo de cirugía siga siendo
// un cambio en un solo sitio.

import { calculators } from '../protocols/vpo-calc.js';
import { clearSharedValues, setSharedValues } from './calculators.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { PACIENTE_KEY, repintarSiActiva } from './vpo-estado.js';

const campoDe = (key, name) => {
  const calc = calculators.find(c => c.key === key);
  return (calc && calc.fields.find(f => f.name === name)) || { options: [] };
};
const opcionesCirugia = () => campoDe('guptamica', 'surg').options;
const opcionesAsa = () => campoDe('guptamica', 'asa').options;
const opcionesFunc = () => campoDe('guptamica', 'func').options;

const FICHA_CAMPOS = ['edad', 'sexo', 'peso', 'creatinina', 'asa', 'func', 'surg'];
// La ficha habla el mismo idioma que los campos compartidos del motor, salvo la edad, que allí
// se llama 'age' porque así la declaran las escalas.
const A_SHARED = { edad: 'age', sexo: 'sexo', peso: 'peso', creatinina: 'creatinina',
                   asa: 'asa', func: 'func', surg: 'surg' };

export function pacienteGuardado() {
  const p = syncGet(PACIENTE_KEY, {});
  return (p && typeof p === 'object') ? p : {};
}
function guardarPaciente(p) { syncSet(PACIENTE_KEY, p); }

// Del motor a la ficha: un campo compartido que cambie DENTRO de una escala también se guarda.
export function recogerCompartidos(valores) {
  const p = pacienteGuardado();
  let cambio = false;
  FICHA_CAMPOS.forEach(c => {
    const v = valores[A_SHARED[c]];
    if (v === undefined || v === null || v === '') return;
    if (String(p[c]) === String(v)) return;
    p[c] = String(v);
    cambio = true;
  });
  if (!cambio) return;
  guardarPaciente(p);
  pintarResumenFicha();
}

// De la ficha al motor.
export function sembrarCompartidos() {
  const p = pacienteGuardado();
  const out = {};
  FICHA_CAMPOS.forEach(c => { if (p[c] !== undefined && p[c] !== '') out[A_SHARED[c]] = p[c]; });
  setSharedValues(out);
}

const etiquetaOpcion = (opciones, valor) => {
  const o = opciones.find(x => String(x.value) === String(valor));
  return o ? o.label : valor;
};
const SEXO_LABEL = { m: 'Varón', f: 'Mujer' };

// Resumen de una línea: corto para la cabecera plegada, largo para encabezar la nota.
// Exportado para tests.js: es una función pura y es lo que acaba en el expediente.
export function resumenPaciente(p, { largo = false } = {}) {
  const partes = [];
  const sexo = SEXO_LABEL[p.sexo];
  if (p.edad && sexo) partes.push(`${sexo} de ${p.edad} años`);
  else if (p.edad) partes.push(`${p.edad} años`);
  else if (sexo) partes.push(sexo);
  if (largo && p.peso) partes.push(`${p.peso} kg`);
  if (largo && p.creatinina) partes.push(`creatinina de ${p.creatinina} mg/dL`);
  if (p.asa) partes.push(`ASA ${etiquetaOpcion(opcionesAsa(), p.asa)}`);
  if (largo && p.func) partes.push(`estado funcional ${etiquetaOpcion(opcionesFunc(), p.func).toLowerCase()}`);
  // El tipo de cirugía se imprime tal cual, sin intentar concordarlo: las 21 etiquetas son
  // heterogéneas ("Aórtica", "Hernia", "Intestino (bajo el duodeno...)") y cualquier
  // plantilla produce alguna frase rota. El "(referencia)" de la hernia es del modelo de
  // Gupta, no del paciente, así que no entra en la nota.
  if (p.surg) partes.push(`cirugía: ${etiquetaOpcion(opcionesCirugia(), p.surg).replace(' (referencia)', '')}`);
  if (!partes.length) return '';
  const texto = partes.join(', ');
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

let FICHA_ABIERTA = false;

function fichaCuerpoHTML() {
  const p = pacienteGuardado();
  const val = c => (p[c] === undefined ? '' : p[c]);
  const opts = (c, opciones) => opciones.map(o =>
    `<option value="${o.value}"${String(val(c)) === String(o.value) ? ' selected' : ''}>${o.label}</option>`).join('');
  const numero = (c, label, ph, step) => `
    <div class="calc-field"><label for="vpf-${c}">${label}</label>
      <input type="number" id="vpf-${c}"${step ? ` step="${step}"` : ''} placeholder="${ph}" value="${val(c)}"
        oninput="rmVpoFicha('${c}', this.value)"></div>`;
  const lista = (c, label, opciones) => `
    <div class="calc-field"><label for="vpf-${c}">${label}</label>
      <select id="vpf-${c}" onchange="rmVpoFicha('${c}', this.value)">
        <option value="">Sin dato</option>${opts(c, opciones)}</select></div>`;
  return `
    <div class="vpo-ficha-grid">
      ${numero('edad', 'Edad (años)', 'ej. 72')}
      ${lista('sexo', 'Sexo', [{ value: 'm', label: 'Varón' }, { value: 'f', label: 'Mujer' }])}
      ${numero('peso', 'Peso (kg)', 'ej. 70')}
      ${numero('creatinina', 'Creatinina (mg/dL)', 'ej. 1.2', '0.01')}
      ${lista('asa', 'Clase ASA', opcionesAsa())}
      ${lista('func', 'Estado funcional', opcionesFunc())}
      ${lista('surg', 'Cirugía prevista', opcionesCirugia())}
    </div>
    <p class="vpo-ficha-pie">Lo que escribas aquí llega relleno a todas las escalas, y al revés: lo que
      escribas dentro de una escala se guarda aquí. La creatinina marca sola los umbrales del índice de
      Lee (más de 2.0) y de Gupta-MICA (1.5 o más). Se borra con <strong>Paciente nuevo</strong>.</p>`;
}

export function fichaHTML() {
  const resumen = resumenPaciente(pacienteGuardado());
  return `
    <section class="vpo-ficha${FICHA_ABIERTA ? ' abierta' : ''}" id="vpo-ficha">
      <button type="button" class="vpo-ficha-cab" onclick="rmVpoFichaPlegar()" aria-expanded="${FICHA_ABIERTA}">
        <span class="vpo-ficha-tit">Paciente</span>
        <span class="vpo-ficha-resumen" id="vpo-ficha-resumen">${resumen || 'Sin datos todavía'}</span>
        <span class="vpo-ficha-mas">${FICHA_ABIERTA ? 'Ocultar' : 'Editar'}</span>
      </button>
      <div class="vpo-ficha-cuerpo" style="display:${FICHA_ABIERTA ? 'block' : 'none'}">${
        FICHA_ABIERTA ? fichaCuerpoHTML() : ''}</div>
    </section>`;
}

function pintarResumenFicha() {
  const el = document.getElementById('vpo-ficha-resumen');
  if (el) el.textContent = resumenPaciente(pacienteGuardado()) || 'Sin datos todavía';
}

function pintarFicha() {
  const el = document.getElementById('vpo-ficha');
  if (el) el.outerHTML = fichaHTML();
}

export function fichaPlegar() {
  FICHA_ABIERTA = !FICHA_ABIERTA;
  pintarFicha();
}

// Guarda, siembra y refresca el resumen y la nota, pero NO repinta el formulario: repintarlo
// robaría el foco a media cifra.
export function fichaCampo(campo, valor) {
  if (!FICHA_CAMPOS.includes(campo)) return;
  const p = pacienteGuardado();
  if (valor === '' || valor === null || valor === undefined) delete p[campo];
  else p[campo] = String(valor);
  guardarPaciente(p);
  if (p[campo] === undefined) {
    // Borrar un dato no puede dejar puesto el anterior, y los valores compartidos no saben
    // quitar uno: se vacían y se vuelve a sembrar lo que queda en la ficha.
    clearSharedValues();
    sembrarCompartidos();
  } else {
    setSharedValues({ [A_SHARED[campo]]: p[campo] });
  }
  pintarResumenFicha();
  repintarSiActiva('nota');
}

// "Paciente nuevo": la ficha se vacía y con ella los campos que el motor tenía sembrados.
export function limpiarPaciente() {
  syncSet(PACIENTE_KEY, {});
  clearSharedValues();
  pintarFicha();
}
