// engine/pediatria-ficha.js
// La ficha del niño: la cabecera plegable que encabeza la sección Pediatría. Tres datos, y cada
// uno está por un motivo concreto:
//
//   peso (kg)   es el que multiplica todas las dosis. Sin él la sección sigue siendo un libro
//               de consulta completo, solo que sin los mg calculados.
//   edad        decide qué línea de dosis aplica. Se pregunta en días, meses o años porque
//               obligar a convertir es pedir el error: "3 meses" escrito como 3 días cambia la
//               dosis de muchos antibióticos. Dentro se guarda siempre en días.
//   edad gestacional (semanas)  solo la piden las líneas neonatales, y solo ellas la usan.
//
// Reutiliza las clases .vpo-ficha* de engine/styles.css, que ya resuelven la cabecera plegable.
// Son nombres de clase, no una dependencia: no se importa nada de VPO.

import { aDias, diasEnPalabras, PESO_MAX, PESO_MIN } from './pediatria-dosis.js';
import { pacienteGuardado, guardarPaciente, PACIENTE_KEY, repintarActiva } from './pediatria-estado.js';
import { syncSet } from './cloud-sync.js';

const CAMPOS = ['peso', 'edad', 'edadUnidad', 'eg', 'pesoNacimiento'];
const UNIDADES = [
  { value: 'd', label: 'días' },
  { value: 'm', label: 'meses' },
  { value: 'a', label: 'años' }
];

const num = v => { const n = parseFloat(v); return isFinite(n) ? n : null; };

/* ---------------- Lo que consume la aritmética ----------------
   La vista nunca lee el almacenamiento en crudo: pide el paciente por aquí y recibe los días de
   vida ya calculados, para que la conversión de meses a días viva en un solo sitio. Exportada
   para tests.js, que es donde se comprueba que 3 meses no son 3 días. */
export function pacientePedia() {
  const p = pacienteGuardado();
  const peso = num(p.peso);
  const edad = num(p.edad);
  const eg = num(p.eg);
  const edadDias = edad !== null ? aDias(edad, p.edadUnidad || 'a') : null;
  return {
    peso: (peso !== null && peso >= PESO_MIN && peso <= PESO_MAX) ? peso : null,
    edadDias,
    eg,
    pesoNacimiento: num(p.pesoNacimiento),
    /* La edad POSMENSTRUAL, que no se pregunta porque se calcula: es la gestacional al nacer más
       el tiempo que lleva fuera. NeoFax lo dice con todas las letras en la gentamicina ("PMA;
       equivalent to gestational age plus postnatal age") y la reparte así porque lo que madura
       es el riñón, no el calendario: un prematuro de 28 semanas con tres semanas de vida maneja
       el fármaco como uno de 31, no como un recién nacido.
       Hace falta tener las dos cosas: sin edad gestacional no hay posmenstrual que valga, y
       devolver aquí la edad gestacional a secas sería dosificar a las 28 semanas para siempre. */
    pma: (eg !== null && edadDias !== null) ? eg + edadDias / 7 : null,
    // El peso tal como se escribió, para poder avisar de que está fuera de rango en vez de
    // ignorarlo en silencio: un 700 teclado por 7.00 no debe limitarse a no calcular nada.
    pesoCrudo: peso
  };
}

// Resumen de una línea para la cabecera plegada. Puro, y exportado para las pruebas.
export function resumenPedia(p) {
  const partes = [];
  if (p.peso !== null) partes.push(`${p.peso} kg`);
  if (p.edadDias !== null) partes.push(diasEnPalabras(p.edadDias));
  if (p.eg !== null) partes.push(`${p.eg} sem al nacer`);
  // La posmenstrual se enseña porque es la que decide la dosis neonatal, y porque verla sale
  // más barato que recalcularla de cabeza cada vez.
  if (p.pma !== null) partes.push(`${Math.round(p.pma * 10) / 10} sem posmenstrual`);
  if (p.pesoNacimiento !== null) partes.push(`${p.pesoNacimiento} g al nacer`);
  return partes.join(' · ');
}

let ABIERTA = false;

function cuerpoHTML() {
  const p = pacienteGuardado();
  const val = c => (p[c] === undefined ? '' : p[c]);
  const unidad = val('edadUnidad') || 'a';
  return `
    <div class="vpo-ficha-grid">
      <div class="calc-field"><label for="pedf-peso">Peso (kg)</label>
        <input type="number" id="pedf-peso" step="0.01" min="0" placeholder="ej. 12.4" value="${val('peso')}"
          oninput="rmPediaFicha('peso', this.value)"></div>
      <div class="calc-field"><label for="pedf-edad">Edad</label>
        <input type="number" id="pedf-edad" step="0.5" min="0" placeholder="ej. 3" value="${val('edad')}"
          oninput="rmPediaFicha('edad', this.value)"></div>
      <div class="calc-field"><label for="pedf-edadUnidad">Edad en</label>
        <select id="pedf-edadUnidad" onchange="rmPediaFicha('edadUnidad', this.value)">${
          UNIDADES.map(u => `<option value="${u.value}"${unidad === u.value ? ' selected' : ''}>${u.label}</option>`).join('')
        }</select></div>
      <div class="calc-field"><label for="pedf-eg">Edad gestacional al nacer (semanas)</label>
        <input type="number" id="pedf-eg" step="1" min="20" max="44" placeholder="solo neonatos" value="${val('eg')}"
          oninput="rmPediaFicha('eg', this.value)"></div>
      <div class="calc-field"><label for="pedf-pesoNacimiento">Peso al nacer (g)</label>
        <input type="number" id="pedf-pesoNacimiento" step="10" min="300" max="6000" placeholder="solo neonatos" value="${val('pesoNacimiento')}"
          oninput="rmPediaFicha('pesoNacimiento', this.value)"></div>
    </div>
    <p class="vpo-ficha-pie">Con el peso puesto, cada línea de dosis muestra además los miligramos y
      los mililitros de este niño. La edad decide qué franja aplica: mientras falte, se muestran todas.
      En el neonato hacen falta además las dos últimas: con la edad gestacional al nacer y los días de
      vida se calcula sola la <strong>edad posmenstrual</strong>, que es con la que NeoFax reparte casi
      toda la dosis neonatal, y el <strong>peso al nacer</strong> no es el de hoy en un prematuro de
      tres semanas, pero es el que usan varias tablas. Este peso es solo de la sección Pediatría, no se
      comparte con la valoración preoperatoria. Se borra con <strong>Paciente nuevo</strong>.</p>`;
}

export function fichaPediaHTML() {
  const p = pacientePedia();
  const resumen = resumenPedia(p);
  // El aviso del peso imposible va en la cabecera, donde se ve plegada: si solo apareciera
  // dentro del formulario, quien escribió 700 kg y lo cerró vería las dosis sin calcular y sin
  // saber por qué.
  const aviso = (p.pesoCrudo !== null && p.peso === null)
    ? `<span class="pedia-aviso-peso">Revisa el peso: ${p.pesoCrudo} kg está fuera del rango que se puede calcular (${PESO_MIN} a ${PESO_MAX} kg)</span>`
    : '';
  return `
    <section class="vpo-ficha${ABIERTA ? ' abierta' : ''}" id="pedia-ficha" style="--c:var(--accent-fg)">
      <button type="button" class="vpo-ficha-cab" onclick="rmPediaFichaPlegar()" aria-expanded="${ABIERTA}">
        <span class="vpo-ficha-tit">Niño</span>
        <span class="vpo-ficha-resumen" id="pedia-ficha-resumen">${
          aviso || resumen || 'Pon el peso para ver los mg y los mL por dosis'}</span>
        <span class="vpo-ficha-mas">${ABIERTA ? 'Ocultar' : 'Editar'}</span>
      </button>
      <div class="vpo-ficha-cuerpo" style="display:${ABIERTA ? 'block' : 'none'}">${ABIERTA ? cuerpoHTML() : ''}</div>
    </section>`;
}

function pintarResumen() {
  const el = document.getElementById('pedia-ficha-resumen');
  if (!el) return;
  const p = pacientePedia();
  if (p.pesoCrudo !== null && p.peso === null) {
    el.textContent = `Revisa el peso: ${p.pesoCrudo} kg está fuera del rango que se puede calcular (${PESO_MIN} a ${PESO_MAX} kg)`;
    return;
  }
  el.textContent = resumenPedia(p) || 'Pon el peso para ver los mg y los mL por dosis';
}

function pintarFicha() {
  const el = document.getElementById('pedia-ficha');
  if (el) el.outerHTML = fichaPediaHTML();
}

export function fichaPediaPlegar() {
  ABIERTA = !ABIERTA;
  pintarFicha();
}

// Guarda y refresca el resumen y la pestaña activa, pero NO repinta el formulario: repintarlo
// robaría el foco a media cifra, que con un peso es exactamente el momento en que no se puede.
export function pediaCampo(campo, valor) {
  if (!CAMPOS.includes(campo)) return;
  const p = pacienteGuardado();
  if (valor === '' || valor === null || valor === undefined) delete p[campo];
  else p[campo] = String(valor);
  guardarPaciente(p);
  pintarResumen();
  repintarActiva();
}

// "Paciente nuevo". Vive aquí porque el paciente es de la ficha; la pestaña activa se repinta
// porque puede estar mostrando dosis calculadas con el peso que acaba de desaparecer.
export function limpiarPacientePedia() {
  syncSet(PACIENTE_KEY, {});
  pintarFicha();
  repintarActiva();
}
