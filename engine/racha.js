// engine/racha.js
// La semana a la vista y la racha EN SEMANAS, no en dias.
//
// DONDE SE TOCA. El dia se marca en `updateQuizSRS()` (engine/quiz-srs.js), un solo sitio que
// cubre las dos rutas por las que se responde una pregunta, el quiz del tema y el examen
// simulado, y en las dos calificaciones de ficha, `rateCard()` de flashcard-deck.js y
// `rateFlashcard()` de study-view.js. Lo pinta `semanaHTML()` en engine/home.js, arriba de la
// tarjeta "Tu progreso". Y la clave esta declarada 'bool-map' en `strategyFor()` de
// cloud-sync.js: con la estrategia escalar por defecto, el documento de la nube pisaba el mapa
// local y estudiar en el telefono borraba los dias de la computadora.
//
// POR QUE EN SEMANAS. La puerta del habito del proyecto se mide en que el residente vuelva
// cada semana, no en dias encadenados, y una cadena diaria castiga exactamente lo que la vida
// de un residente garantiza: la guardia de 24 horas y el dia de post-guardia. Una racha que se
// rompe por trabajar es una razon para desinstalar la app, asi que aqui una semana se da por
// cumplida con DIAS_META dias de estudio, cualesquiera, y la racha cuenta semanas cumplidas
// seguidas. Eso sobrevive a una guardia y sigue midiendo lo unico que importa.
//
// LA RACHA NO SE ROMPE A MEDIA SEMANA. Se cuenta desde la semana en curso solo si ya esta
// cumplida; si no, se cuenta desde la semana pasada. De otro modo, abrir la app un lunes por la
// mañana mostraria "0 semanas" despues de dos meses sin faltar, que es una mentira desmotivadora.
//
// EL DATO. Un mapa { 'YYYY-MM-DD': true } con los dias en que se respondio una pregunta o se
// califico una ficha, del propio usuario y para el propio usuario. No es una metrica nueva de
// analitica: es progreso de estudio, lo mismo que ya guardan el banco y las fichas, y vive en el
// mismo documento privado (users/{uid}) via syncSet, que es lo que cubre la seccion 4 de los
// terminos. Deliberadamente NO se guarda la hora, solo el dia.
import { syncGet, syncSet } from './cloud-sync.js';

const DIAS_KEY = 'rm:dias-estudio';

// Dias de estudio que dan una semana por cumplida. Tres y no cinco porque el umbral tiene que
// ser alcanzable en una semana con dos guardias, y tres ya es "cada dos dias", que es un habito.
// Tampoco dos, que es casi cualquier semana en que abras la app y entonces no dirige nada.
export const DIAS_META = 3;

// Medio año de historia. Acota el campo en Firestore (unos 20 bytes por dia, ~3.6 KB en total)
// y de paso es el techo de la racha: 26 semanas seguidas es mas de lo que hace falta para
// decidir si esta jugada funciona.
export const SEMANAS_HISTORIA = 26;
const DIAS_HISTORIA = SEMANAS_HISTORIA * 7;

const RE_DIA = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
const INICIALES = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const NOMBRES = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

/* ---------------- Dias en hora local ---------------- */

// 'YYYY-MM-DD' en la hora LOCAL del residente, nunca en UTC ni con toISOString(): a las 23:30 en
// Ciudad de México (UTC-6) el dia UTC ya es el siguiente, asi que la app encenderia el punto de
// un dia en que la persona dormia y dejaria vacio el de hoy.
export function diaLocal(ts) {
  const d = ts instanceof Date ? ts : new Date(ts);
  if (isNaN(d.getTime())) return '';
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + m + '-' + dd;
}

// Medianoche local del dia que nombra la cadena, o null si no es un dia real. new Date('2026-11-11')
// NO sirve aqui: la norma dice que una fecha sola se interpreta en UTC, o sea la tarde del dia
// anterior en America. El ida y vuelta por diaLocal() descarta de paso un '2026-02-31', que el
// constructor aceptaria corriendolo al 3 de marzo.
function fechaDe(dia) {
  if (!RE_DIA.test(dia)) return null;
  const p = dia.split('-');
  const f = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  if (isNaN(f.getTime()) || diaLocal(f) !== dia) return null;
  return f;
}

// Suma dias sobre una medianoche local sin aritmetica de milisegundos: en el cambio de horario
// de verano un dia no mide 86400000 ms, y el salto corrido movia la semana entera.
function masDias(f, n) {
  return new Date(f.getFullYear(), f.getMonth(), f.getDate() + n);
}

// El lunes de la semana que contiene esa fecha. La semana empieza en lunes, que es la convencion
// del calendario en español; getDay() devuelve 0 para el domingo, de ahi el (dia + 6) % 7.
export function lunesDe(fecha) {
  const f = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
  return masDias(f, -((f.getDay() + 6) % 7));
}

/* ---------------- Lectura y escritura ---------------- */

function normalizar(mapa) {
  const set = new Set();
  if (!mapa || typeof mapa !== 'object') return set;
  Object.keys(mapa).forEach(k => { if (mapa[k] && fechaDe(k)) set.add(k); });
  return set;
}

export function leerDiasDeEstudio() { return syncGet(DIAS_KEY, {}) || {}; }

// Marca hoy como dia de estudio. Idempotente a proposito: se llama en CADA pregunta respondida y
// en cada ficha calificada, asi que si el dia ya esta marcado no escribe nada y no hay una
// escritura a Firestore por respuesta, solo una por dia.
export function registrarDiaDeEstudio(ahora = Date.now()) {
  const hoy = diaLocal(ahora);
  if (!hoy) return null;
  const mapa = leerDiasDeEstudio();
  if (mapa[hoy] === true && Object.keys(mapa).length <= DIAS_HISTORIA) return hoy;
  const limite = diaLocal(masDias(new Date(ahora), -DIAS_HISTORIA));
  const siguiente = {};
  // Se conservan los dias dentro de la ventana y se tiran los de antes. Un dia del FUTURO
  // (reloj mal puesto en otro dispositivo, o un documento viejo de la nube) tambien se tira:
  // encender el punto de un jueves que no ha llegado es peor que no pintar nada.
  Object.keys(mapa).forEach(k => {
    if (mapa[k] && fechaDe(k) && k >= limite && k <= hoy) siguiente[k] = true;
  });
  siguiente[hoy] = true;
  syncSet(DIAS_KEY, siguiente);
  return hoy;
}

/* ---------------- El resumen, puro ---------------- */

function diasCumplidosEnSemana(set, lunesBase, semanasAtras) {
  let n = 0;
  for (let i = 0; i < 7; i++) {
    if (set.has(diaLocal(masDias(lunesBase, -semanasAtras * 7 + i)))) n++;
  }
  return n;
}

function plural(n, uno, varios) { return n === 1 ? '1 ' + uno : n + ' ' + varios; }

// Funcion pura (el `ahora` entra por parametro) para que las pruebas puedan fijar el dia.
// Devuelve los siete dias de la semana en curso, cuantos se cumplieron, y la racha en semanas.
export function resumenRacha(mapa, ahora = Date.now()) {
  const set = normalizar(mapa);
  const hoyF = new Date(ahora);
  const hoy = diaLocal(hoyF);
  const lunes = lunesDe(hoyF);
  const semana = [];
  for (let i = 0; i < 7; i++) {
    const f = masDias(lunes, i);
    const dia = diaLocal(f);
    semana.push({
      dia, inicial: INICIALES[i], nombre: NOMBRES[i],
      // Las cadenas 'YYYY-MM-DD' se ordenan igual que las fechas, asi que comparar texto basta.
      futuro: dia > hoy,
      // Un dia del futuro NUNCA se pinta como estudiado, aunque venga marcado en el mapa (reloj
      // mal puesto en otro dispositivo, o un documento de la nube escrito con esa hora). El
      // escritor ya los descarta, pero el que solo lee no debe encender un jueves que no llego.
      estudiado: dia <= hoy && set.has(dia),
      esHoy: dia === hoy
    });
  }
  const diasEstaSemana = semana.filter(d => d.estudiado).length;
  const cumplidaEstaSemana = diasEstaSemana >= DIAS_META;
  const faltan = Math.max(0, DIAS_META - diasEstaSemana);

  // La semana en curso entra en la racha solo si ya esta cumplida; si no, se cuenta desde la
  // pasada, para que la racha no aparezca rota el lunes por la mañana (ver cabecera).
  let rachaSemanas = 0;
  for (let k = cumplidaEstaSemana ? 0 : 1; k <= SEMANAS_HISTORIA; k++) {
    if (diasCumplidosEnSemana(set, lunes, k) >= DIAS_META) rachaSemanas++;
    else break;
  }

  let mensaje;
  if (cumplidaEstaSemana) {
    mensaje = rachaSemanas >= 2
      ? 'Semana cumplida. Llevas ' + plural(rachaSemanas, 'semana seguida', 'semanas seguidas') + '.'
      : 'Semana cumplida. Vuelve la próxima y empiezas racha.';
  } else if (rachaSemanas >= 1) {
    mensaje = 'Llevas ' + plural(rachaSemanas, 'semana seguida', 'semanas seguidas') + '. '
      + (faltan === 1 ? 'Te falta 1 día para no perderla.' : 'Te faltan ' + faltan + ' días para no perderla.');
  } else if (diasEstaSemana) {
    mensaje = plural(diasEstaSemana, 'día esta semana', 'días esta semana') + '. '
      + (faltan === 1 ? 'Uno más y la semana cuenta.' : faltan + ' más y la semana cuenta.');
  } else {
    mensaje = 'Aún no estudias esta semana. Con ' + DIAS_META + ' días cuenta.';
  }

  return { semana, diasEstaSemana, meta: DIAS_META, faltan, cumplidaEstaSemana, rachaSemanas, mensaje };
}
