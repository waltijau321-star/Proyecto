// engine/texto-seguro.js
// Utilidades puras para pintar texto escrito por los USUARIOS (panel de notas por tema).
// Hasta que existió ese panel, todo lo que la app inyecta con innerHTML lo había escrito el
// autor; a partir de aquí hay texto de terceros, y este módulo es la única puerta por la que
// debe pasar antes de llegar al DOM.
//
// Sin dependencias y sin DOM a propósito: así se puede probar entero con el runner síncrono de
// tests.js (que no hace await dentro de test()).
//
// CUIDADO: engine/study-view.js tiene una función llamada esc() que NO escapa nada (es un guard
// de null, deliberado porque el contenido de los temas trae HTML intencional). No la confundas
// con escHtml() de aquí ni intentes unificarlas.

export const MAX_COMENTARIO = 1000;
// Tope de la firma. Tiene que coincidir con el `autor.size() <= 60` de firestore.rules, o una
// firma larga se rechaza en el servidor después de que el usuario ya escribió su comentario.
export const MAX_FIRMA = 60;

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escHtml(s) {
  return String(s === undefined || s === null ? '' : s).replace(/[&<>"']/g, c => ESCAPES[c]);
}

// Solo http(s). El esquema se ancla en el patrón, así que javascript:, data: y vbscript: nunca
// llegan a convertirse en enlace: quedan como texto plano escapado.
const URL_RE = /https?:\/\/[^\s<>"']+/g;
// Puntuación que casi siempre pertenece a la frase y no a la URL ("mira https://x.com." o
// "(ver https://x.com)"). Se devuelve al texto en vez de meterla dentro del href.
const COLA_RE = /[.,;:!?)\]}>'"]+$/;

// Texto visible del enlace: sin esquema, sin barra final y recortado, para que una URL larga no
// reviente el ancho del panel.
export function recortarUrl(url, max = 45) {
  const limpio = String(url || '').replace(/^https?:\/\//i, '').replace(/\/$/, '');
  return limpio.length > max ? limpio.slice(0, max - 1) + '\u2026' : limpio;
}

// Convierte el texto CRUDO de un comentario en HTML seguro.
//
// El orden importa y es al revés de lo que parece natural: se trocea el texto crudo buscando
// URLs y se escapa cada trozo por separado, en vez de escapar primero y buscar URLs después.
// Escapando primero, una URL con "&" pasa a contener "&amp;" y recortar el texto visible podría
// partir la entidad por la mitad ("&am"), que el navegador pinta literalmente.
export function textoComentarioHTML(texto) {
  const crudo = String(texto === undefined || texto === null ? '' : texto);
  let salida = '';
  let desde = 0;
  let m;
  URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(crudo)) !== null) {
    let url = m[0];
    const cola = url.match(COLA_RE);
    if (cola) url = url.slice(0, url.length - cola[0].length);
    if (!url) continue;
    salida += escHtml(crudo.slice(desde, m.index));
    salida += `<a href="${escHtml(url)}" target="_blank" rel="noopener noreferrer nofollow ugc">${escHtml(recortarUrl(url))}</a>`;
    desde = m.index + url.length;
  }
  salida += escHtml(crudo.slice(desde));
  return salida.replace(/\n/g, '<br>');
}

// Firma del comentario: nombre de pila + inicial del apellido ("Walter J."). Se desnormaliza en
// cada mensaje porque las reglas no dejan que un usuario lea el perfil de otro.
export function nombreCorto(nombre, apellido) {
  const n = String(nombre || '').trim();
  const a = String(apellido || '').trim();
  let firma;
  if (!n && !a) firma = 'Residente';
  else if (!n) firma = a;
  else if (!a) firma = n;
  else firma = `${n} ${[...a][0].toUpperCase()}.`;
  return firma.length > MAX_FIRMA ? firma.slice(0, MAX_FIRMA) : firma;
}

export function validarComentario(texto) {
  const limpio = String(texto === undefined || texto === null ? '' : texto).trim();
  if (!limpio) return { ok: false, error: 'Escribe algo antes de publicar.', texto: '' };
  if (limpio.length > MAX_COMENTARIO) {
    return { ok: false, error: `Maximo ${MAX_COMENTARIO} caracteres (llevas ${limpio.length}).`, texto: limpio };
  }
  return { ok: true, error: '', texto: limpio };
}

// `ahora` se recibe como parámetro en vez de leer Date.now() dentro: así el test puede fijarlo.
export function tiempoRelativo(ms, ahora = Date.now()) {
  const delta = Math.max(0, ahora - ms);
  const min = Math.floor(delta / 60000);
  if (min < 1) return 'ahora';
  if (min < 60) return `hace ${min} min`;
  const horas = Math.floor(min / 60);
  if (horas < 24) return `hace ${horas} h`;
  const dias = Math.floor(horas / 24);
  if (dias === 1) return 'ayer';
  if (dias < 7) return `hace ${dias} dias`;
  return new Date(ms).toLocaleDateString('es', { day: 'numeric', month: 'short' });
}

// Une lo confirmado por el servidor con las burbujas que todavía están en vuelo.
//
// Firestore entrega el documento recién escrito en un snapshot local ANTES de que el servidor
// confirme, y en ese snapshot `creado` todavía vale null. Con orderBy('creado','asc') los nulos
// ordenan primero, así que el comentario propio aparecería arriba del todo (y fuera de la
// ventana en un tema con muchos mensajes) hasta que llegara la confirmación. Por eso se descarta
// del snapshot lo que siga pendiente y se añade al final, que es donde el usuario lo espera.
export function fusionarComentarios(confirmados, pendientes) {
  const pend = pendientes || [];
  const enVuelo = new Set(pend.map(p => p.id));
  return [...(confirmados || []).filter(c => !enVuelo.has(c.id)), ...pend];
}

// Id determinista del reporte: una persona solo puede reportar una vez cada comentario, y la
// regla de firestore.rules comprueba exactamente esta misma concatenación.
export function idReporte(comentarioId, uid) {
  return `${comentarioId}_${uid}`;
}
