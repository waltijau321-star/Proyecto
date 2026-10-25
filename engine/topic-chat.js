// engine/topic-chat.js
// "Notas del tema": panel lateral de comentarios, uno por tema, compartido entre todos los
// residentes que estudian ese tema. Mnemotecnias, enlaces, correcciones y dudas.
//
// CÓMO ENCAJA CON EL RESTO
//
// - El panel vive FUERA de .app-shell, como hijo directo de <body> (ver index.html). Dos razones,
//   y las dos son obligatorias: mountStudy() reconstruye #study-root entero en cada cambio de
//   tema, y .app-section.active arrastra para siempre un `transform` (la animación section-in usa
//   fill-mode:both), que convertiría a la sección en bloque contenedor de cualquier hijo
//   position:fixed. Colgado ahí dentro, el panel se comportaría distinto según la preferencia de
//   movimiento reducido del usuario.
// - NO usa syncGet/syncSet para los mensajes, y eso es deliberado: cloud-sync.js sincroniza el
//   progreso PRIVADO de una persona en users/{uid}. Esto es contenido compartido, con su propia
//   colección y sus propias reglas (ver firestore.rules). La única clave que sí pasa por syncSet
//   es la aceptación de las normas, que sí es del usuario.
// - El id del tema es la clave de la colección: renombrar un id en topics/registry.js huerfana en
//   silencio todas las notas de ese tema. Un id de tema es para siempre.

import {
  collection, doc, query, orderBy, where, limit, limitToLast,
  onSnapshot, getCountFromServer, writeBatch, setDoc, updateDoc, deleteDoc, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js';
import { db, firebaseReady } from './firebase-config.js';
import { isAdmin } from './admin.js';
import { syncGet, syncSet } from './cloud-sync.js';
import {
  escHtml, textoComentarioHTML, nombreCorto, validarComentario,
  tiempoRelativo, fusionarComentarios, idReporte, MAX_COMENTARIO
} from './texto-seguro.js';

const COL = 'temaComentarios';
const LIMITE = 50;             // mensajes que se traen por tema
const LIMITE_FIJADOS = 10;
const ENFRIAMIENTO_MS = 15000; // tiene que ser >= al de firestore.rules
const ACEPTO_KEY = 'rm:notas-aceptadas';
// Sin prefijo 'rm:' a propósito: isSyncedKey() de cloud-sync.js considera sincronizable cualquier
// clave que empiece por 'rm:', y esta marca es antiabuso local, no progreso de estudio.
const ULTIMO_ENVIO_KEY = 'miosler:ultima-nota';
const MOTIVOS = ['Datos de un paciente', 'Error clínico', 'Contenido inapropiado'];

/* ---------------- Estado ---------------- */
let usuario = null;
let temaId = null;
let temaTitulo = '';
let seccion = null;
let abierto = false;      // cajón desplegado (pantallas estrechas)
let acoplado = false;     // >=1280px
let suscritoA = null;
let unsubs = [];

let mensajes = [];        // confirmados por el snapshot, en orden ascendente
let fijados = [];
let pendientes = [];      // burbujas optimistas todavía en vuelo
let cargando = false;
let sinConexion = false;
let errorCarga = '';
let conteo = null;        // para la insignia del botón flotante cuando no hay suscripción
let nuevasSinVer = 0;
let ultimaVista = 0;
let reportando = null;    // id del mensaje con la fila de motivos abierta
let borrando = null;      // id del mensaje con la confirmación abierta
let avisoComposer = '';
let primeraPintura = true;

let elPanel, elLista, elFijados, elCompose, elEstado, elFab, elFabCount, elScrim, elSub, elSalto;

/* ---------------- Utilidades ---------------- */
function firmaActual() {
  return nombreCorto(syncGet('rm:profile-firstname', ''), syncGet('rm:profile-lastname', ''));
}
function aceptoNormas() { return !!syncGet(ACEPTO_KEY, false); }
function ultimoEnvio() {
  try { return Number(localStorage.getItem(ULTIMO_ENVIO_KEY)) || 0; } catch (e) { return 0; }
}
function anotarEnvio() {
  try { localStorage.setItem(ULTIMO_ENVIO_KEY, String(Date.now())); } catch (e) {}
}
function buscarMensaje(id) {
  return mensajes.find(m => m.id === id) || fijados.find(m => m.id === id) || null;
}
function docAMensaje(d) {
  const x = d.data() || {};
  return {
    id: d.id,
    uid: x.uid || '',
    autor: x.autor || 'Residente',
    texto: x.texto || '',
    fijado: !!x.fijado,
    // createdAt vale null mientras el servidor no confirma la escritura.
    ms: x.createdAt && x.createdAt.toMillis ? x.createdAt.toMillis() : null
  };
}
function textoDeError(err) {
  const code = (err && err.code) || '';
  if (code === 'permission-denied') {
    return 'No se pudo publicar. Si acabas de escribir otra nota, espera unos segundos.';
  }
  if (code === 'unavailable' || (typeof navigator !== 'undefined' && navigator.onLine === false)) {
    return 'Sin conexión: la nota no se envió.';
  }
  return 'No se pudo publicar. Intenta de nuevo.';
}
function esTactil() {
  return !!(window.matchMedia && window.matchMedia('(pointer:coarse)').matches);
}

/* ---------------- Ciclo de vida del listener ----------------
   Un único reconciliador. Los setters exportados solo guardan estado y lo llaman: así no hay
   cuatro sitios distintos suscribiendo y desuscribiendo, que es como se acaba con listeners
   colgados saltando entre temas.

   La suscripción es perezosa: exige que el panel esté a la vista. Quien recorra veinte temas en
   el móvil sin abrir el cajón no gasta ni una lectura. */
function reconciliar() {
  const visible = abierto || acoplado;
  const quiere = (usuario && firebaseReady && temaId && seccion === 'estudio' && visible) ? temaId : null;

  if (quiere !== suscritoA) {
    unsubs.forEach(u => { try { u(); } catch (e) {} });
    unsubs = [];
    suscritoA = quiere;
    mensajes = [];
    fijados = [];
    pendientes = [];
    nuevasSinVer = 0;
    errorCarga = '';
    sinConexion = false;
    reportando = null;
    borrando = null;
    avisoComposer = '';
    primeraPintura = true;
    cargando = !!quiere;

    if (quiere) {
      const base = collection(db, COL, quiere, 'mensajes');
      unsubs.push(onSnapshot(
        query(base, orderBy('createdAt', 'asc'), limitToLast(LIMITE)),
        onMensajes, onErrorSnapshot
      ));
      // Listener aparte para los destacados: con una sola consulta limitada a los últimos 50, un
      // mensaje fijado hace tiempo desaparecería de la tira. Una igualdad sobre un solo campo se
      // resuelve con el índice automático, así que esto no obliga a crear ningún índice compuesto.
      unsubs.push(onSnapshot(
        query(base, where('fijado', '==', true), limit(LIMITE_FIJADOS)),
        onFijados, () => {}
      ));
    }
  }

  pintar();
  if (!suscritoA) refrescarConteo();
}

function onMensajes(snap) {
  cargando = false;
  errorCarga = '';
  sinConexion = snap.metadata.fromCache && snap.empty;
  const pegadoAbajo = estaAbajo();

  mensajes = snap.docs.map(docAMensaje);
  // Una burbuja optimista deja de estarlo cuando su documento llega YA confirmado por el servidor
  // (sin escrituras pendientes). Comprobar solo la presencia del id no basta: Firestore entrega el
  // documento en un snapshot local inmediato, con createdAt todavía en null.
  const confirmados = new Set(snap.docs.filter(d => !d.metadata.hasPendingWrites).map(d => d.id));
  pendientes = pendientes.filter(p => !confirmados.has(p.id));

  conteo = mensajes.length;
  if (!primeraPintura && !pegadoAbajo) {
    const mias = usuario ? usuario.uid : '';
    const nuevas = mensajes.filter(m => m.ms && m.ms > ultimaVista && m.uid !== mias).length;
    if (nuevas) nuevasSinVer = nuevas;
  }
  pintar({ irAlFondo: primeraPintura || pegadoAbajo });
  primeraPintura = false;
}

function onFijados(snap) {
  fijados = snap.docs.map(docAMensaje).sort((a, b) => (b.ms || 0) - (a.ms || 0));
  pintar();
}

// Tras un error, el SDK MATA la suscripción y no la reintenta solo. Hay que soltar `suscritoA`, o
// el reconciliador creerá que sigue suscrito y el botón de reintentar no hará nada.
function onErrorSnapshot(err) {
  cargando = false;
  suscritoA = null;
  unsubs.forEach(u => { try { u(); } catch (e) {} });
  unsubs = [];
  errorCarga = (err && err.code === 'permission-denied')
    ? 'No tienes permiso para ver estas notas.'
    : 'No se pudieron cargar las notas.';
  pintar();
}

// Insignia del botón flotante cuando todavía no hay suscripción (móvil con el cajón cerrado). Una
// consulta de agregación cuesta una lectura por cada mil documentos, así que es casi gratis y
// evita que el panel haya que abrirlo para saber si tiene algo dentro.
async function refrescarConteo() {
  if (!usuario || !firebaseReady || !temaId || seccion !== 'estudio') {
    conteo = null;
    actualizarChrome();
    return;
  }
  const deTema = temaId;
  try {
    const r = await getCountFromServer(collection(db, COL, deTema, 'mensajes'));
    if (deTema !== temaId || suscritoA) return;
    conteo = r.data().count;
  } catch (e) {
    conteo = null;
  }
  actualizarChrome();
}

/* ---------------- API para app.js ---------------- */
export function setChatUser(user) {
  usuario = user || null;
  abierto = false;
  reconciliar();
}
export function setChatTopic(id, titulo) {
  temaId = id || null;
  temaTitulo = titulo || '';
  abierto = false;
  reconciliar();
}
export function setChatSection(sec) {
  seccion = sec || null;
  if (document.body) document.body.dataset.sec = sec || '';
  if (sec !== 'estudio') abierto = false;
  reconciliar();
}

/* ---------------- Render ---------------- */
function estaAbajo() {
  if (!elLista) return true;
  return elLista.scrollHeight - elLista.scrollTop - elLista.clientHeight < 80;
}

function actualizarChrome() {
  const activo = !!(usuario && firebaseReady);
  // El hueco del panel acoplado se reserva SIEMPRE mientras haya sesión, no solo en Estudio:
  // condicionarlo a la sección haría saltar 340px de ancho en cada toque del nav inferior.
  document.body.classList.toggle('chat-docked', activo && acoplado);
  document.body.classList.toggle('chat-open', activo && abierto && !acoplado);

  if (elPanel) {
    elPanel.classList.toggle('open', abierto);
    elPanel.hidden = !activo;
    // inert en vez de aria-hidden: aria-hidden sobre un contenedor que tiene el foco dentro es un
    // error de accesibilidad, e inert además saca sus hijos del orden de tabulación.
    elPanel.inert = acoplado ? false : !abierto;
    // El rol de diálogo solo aplica cuando el panel se comporta como cajón modal.
    if (acoplado) {
      elPanel.removeAttribute('role');
      elPanel.removeAttribute('aria-modal');
    } else {
      elPanel.setAttribute('role', 'dialog');
      elPanel.setAttribute('aria-modal', 'true');
    }
  }
  if (elScrim) elScrim.classList.toggle('open', activo && abierto && !acoplado);
  if (elFab) {
    // La visibilidad del botón flotante se decide aquí y no en CSS: con reglas condicionadas a
    // body[data-sec] y a body.chat-docked a la vez, quién gana depende de la especificidad y se
    // rompe en cuanto alguien reordena la hoja.
    elFab.hidden = !activo || acoplado || seccion !== 'estudio';
    elFab.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  }
  if (elFabCount) {
    elFabCount.textContent = conteo ? String(conteo) : '';
    elFabCount.hidden = !conteo;
  }
  if (elSub) elSub.textContent = (seccion === 'estudio' && temaTitulo) ? temaTitulo : '';
}

function burbujaHTML(m, opciones) {
  const propio = !!(usuario && m.uid === usuario.uid);
  const admin = isAdmin();
  const marca = m.pendiente ? 'enviando…'
    : m.fallo ? 'no se envió'
      : m.ms ? tiempoRelativo(m.ms, Date.now())
        : '';

  const acciones = [];
  if (!m.pendiente && !m.fallo) {
    if (admin) {
      acciones.push(`<button type="button" class="chat-act" data-accion="fijar" data-id="${m.id}" data-val="${m.fijado ? '0' : '1'}">${m.fijado ? 'Quitar de destacadas' : 'Destacar'}</button>`);
    }
    if (propio || admin) {
      acciones.push(`<button type="button" class="chat-act chat-act-danger" data-accion="pedir-borrar" data-id="${m.id}">Borrar</button>`);
    }
    if (!propio) {
      acciones.push(`<button type="button" class="chat-act" data-accion="pedir-reporte" data-id="${m.id}">Reportar</button>`);
    }
  } else if (m.fallo) {
    acciones.push(`<button type="button" class="chat-act" data-accion="reintentar" data-id="${m.id}">Reintentar</button>`);
    acciones.push(`<button type="button" class="chat-act chat-act-danger" data-accion="descartar" data-id="${m.id}">Descartar</button>`);
  }

  let extra = '';
  if (borrando === m.id) {
    extra = `<div class="chat-inline">
      <span>¿Borrar esta nota?</span>
      <button type="button" class="chat-act chat-act-danger" data-accion="borrar" data-id="${m.id}">Sí, borrar</button>
      <button type="button" class="chat-act" data-accion="cancelar">Cancelar</button>
    </div>`;
  } else if (reportando === m.id) {
    extra = `<div class="chat-inline chat-inline-col">
      <span>¿Por qué lo reportas?</span>
      <div class="chat-motivos">${MOTIVOS.map(mo => `<button type="button" class="chat-act" data-accion="reportar" data-id="${m.id}" data-motivo="${escHtml(mo)}">${escHtml(mo)}</button>`).join('')}</div>
      <button type="button" class="chat-act" data-accion="cancelar">Cancelar</button>
    </div>`;
  }

  const clases = ['chat-msg'];
  if (propio) clases.push('chat-msg-propio');
  if (m.pendiente) clases.push('chat-msg-pendiente');
  if (m.fallo) clases.push('chat-msg-fallo');
  if (opciones && opciones.destacada) clases.push('chat-msg-destacada');

  return `<article class="${clases.join(' ')}">
    <div class="chat-msg-head">
      <span class="chat-autor">${escHtml(m.autor)}</span>
      <span class="chat-marca">${escHtml(marca)}</span>
    </div>
    <div class="chat-cuerpo">${textoComentarioHTML(m.texto)}</div>
    ${acciones.length ? `<div class="chat-acciones">${acciones.join('')}</div>` : ''}
    ${extra}
  </article>`;
}

function listaHTML() {
  if (!usuario) return '';
  if (seccion !== 'estudio' || !temaId) {
    return `<p class="chat-vacio">Las notas son de cada tema.<br>Abre un tema desde Inicio para ver las suyas.</p>`;
  }
  if (errorCarga) {
    return `<div class="chat-vacio"><p>${escHtml(errorCarga)}</p>
      <button type="button" class="home-quick" data-accion="reintentar-carga">Reintentar</button></div>`;
  }
  if (cargando) {
    return `<div class="chat-cargando">${[68, 44, 80].map(w => `<div class="skeleton chat-skel" style="width:${w}%"></div>`).join('')}</div>`;
  }
  const todos = fusionarComentarios(mensajes, pendientes);
  if (!todos.length) {
    if (sinConexion) return `<p class="chat-vacio">Sin conexión: no se pudieron cargar las notas de este tema.</p>`;
    return `<p class="chat-vacio">Todavía no hay notas en este tema.<br>Escribe la primera: una mnemotecnia, un enlace o una corrección.</p>`;
  }
  return todos.map(m => burbujaHTML(m)).join('');
}

function fijadosHTML() {
  if (!fijados.length || seccion !== 'estudio') return '';
  return `<details class="chat-fijados-box" open>
    <summary>Destacadas (${fijados.length})</summary>
    ${fijados.map(m => burbujaHTML(m, { destacada: true })).join('')}
  </details>`;
}

function composeHTML() {
  if (!usuario) return '';
  if (seccion !== 'estudio' || !temaId) {
    return `<p class="chat-vacio-compose">Abre un tema para escribir en sus notas.</p>`;
  }
  if (!aceptoNormas()) {
    return `<div class="chat-normas">
      <p><strong>Antes de tu primera nota</strong></p>
      <p>Lo que escribas aquí lo lee cualquier residente con cuenta, y se publica con tu nombre y la inicial de tu apellido. Sirve para mnemotecnias, enlaces, correcciones y dudas. <strong>No publiques datos que identifiquen a un paciente.</strong> El autor puede borrar o destacar cualquier nota.</p>
      <button type="button" class="home-quick" data-accion="aceptar-normas">Entendido</button>
    </div>`;
  }
  return `<div class="chat-campo">
      <textarea id="chat-texto" rows="1" maxlength="${MAX_COMENTARIO}" aria-label="Escribe una nota sobre este tema" placeholder="Mnemotecnia, enlace, corrección o duda. Sin datos de pacientes."></textarea>
      <button type="button" class="chat-enviar" data-accion="publicar" aria-label="Publicar nota">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l16-8-6 8 6 8z"/></svg>
      </button>
    </div>
    ${avisoComposer ? `<p class="chat-aviso">${escHtml(avisoComposer)}</p>` : ''}
    <p class="chat-cuenta" id="chat-cuenta"></p>`;
}

function pintar(opciones) {
  if (!elPanel) return;
  if (elFijados) {
    elFijados.innerHTML = fijadosHTML();
    elFijados.hidden = !fijados.length || seccion !== 'estudio';
  }
  if (elLista) elLista.innerHTML = listaHTML();
  if (elCompose) elCompose.innerHTML = composeHTML();
  if (elSalto) elSalto.hidden = !nuevasSinVer;
  if (elEstado) {
    elEstado.textContent = nuevasSinVer
      ? `${nuevasSinVer} nota${nuevasSinVer === 1 ? '' : 's'} nueva${nuevasSinVer === 1 ? '' : 's'}`
      : '';
  }
  actualizarChrome();
  if (opciones && opciones.irAlFondo) alFondo();
  const ta = document.getElementById('chat-texto');
  if (ta) { autoAlto(ta); contarCaracteres(ta); }
}

function alFondo() {
  if (!elLista) return;
  // scrollTop directo, no scrollIntoView: scrollIntoView arrastraría también el scroll de la
  // página que queda detrás.
  elLista.scrollTop = elLista.scrollHeight;
  nuevasSinVer = 0;
  ultimaVista = Date.now();
  if (elSalto) elSalto.hidden = true;
  if (elEstado) elEstado.textContent = '';
}

function autoAlto(ta) {
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 130) + 'px';
}
function contarCaracteres(ta) {
  const c = document.getElementById('chat-cuenta');
  if (!c) return;
  const n = ta.value.length;
  c.textContent = n > 800 ? `${n} / ${MAX_COMENTARIO}` : '';
}

/* ---------------- Acciones ---------------- */
function abrir() {
  abierto = true;
  reconciliar();
  const ta = document.getElementById('chat-texto');
  if (ta) ta.focus();
  alFondo();
}
function cerrar() {
  abierto = false;
  reconciliar();
  if (elFab) elFab.focus();
}

function publicar() {
  const ta = document.getElementById('chat-texto');
  if (!ta || !usuario || !suscritoA) return;
  const v = validarComentario(ta.value);
  if (!v.ok) { avisoComposer = v.error; pintar(); return; }

  const espera = ENFRIAMIENTO_MS - (Date.now() - ultimoEnvio());
  if (espera > 0) {
    avisoComposer = `Espera ${Math.ceil(espera / 1000)} s antes de publicar otra nota.`;
    pintar();
    return;
  }

  const tema = suscritoA;
  const ref = doc(collection(db, COL, tema, 'mensajes'));
  const burbuja = {
    id: ref.id, uid: usuario.uid, autor: firmaActual(), texto: v.texto,
    ms: Date.now(), fijado: false, pendiente: true, fallo: false
  };
  pendientes.push(burbuja);
  anotarEnvio();
  avisoComposer = '';
  ta.value = '';
  pintar({ irAlFondo: true });

  // Nada de await antes de limpiar la caja: sin conexión, commit() no resuelve hasta que la
  // escritura llega al servidor y la interfaz se quedaría colgada.
  enviarLote(ref, tema, burbuja);
}

function enviarLote(ref, tema, burbuja) {
  const lote = writeBatch(db);
  // Las dos escrituras TIENEN que ir en el mismo lote: la regla del mensaje exige, con getAfter(),
  // que flood/{uid}.ultimo valga exactamente el request.time de esta operación, y un lote es una
  // sola transacción con un único request.time. Eso es lo que hace que el enfriamiento no se pueda
  // saltar desde la consola del navegador.
  lote.set(doc(db, 'flood', usuario.uid), { ultimo: serverTimestamp() });
  lote.set(ref, {
    uid: usuario.uid, autor: burbuja.autor, texto: burbuja.texto,
    createdAt: serverTimestamp(), fijado: false, temaId: tema
  });
  lote.commit().catch(err => {
    burbuja.pendiente = false;
    burbuja.fallo = true;
    avisoComposer = textoDeError(err);
    pintar();
  });
}

function reintentar(id) {
  const b = pendientes.find(p => p.id === id);
  if (!b || !suscritoA) return;
  b.fallo = false;
  b.pendiente = true;
  avisoComposer = '';
  pintar();
  enviarLote(doc(db, COL, suscritoA, 'mensajes', b.id), suscritoA, b);
}

function descartar(id) {
  pendientes = pendientes.filter(p => p.id !== id);
  avisoComposer = '';
  pintar();
}

function borrar(id) {
  if (!suscritoA) return;
  borrando = null;
  deleteDoc(doc(db, COL, suscritoA, 'mensajes', id)).catch(() => {
    avisoComposer = 'No se pudo borrar la nota.';
    pintar();
  });
  pintar();
}

function fijar(id, val) {
  if (!suscritoA) return;
  updateDoc(doc(db, COL, suscritoA, 'mensajes', id), { fijado: val }).catch(() => {
    avisoComposer = 'No se pudo cambiar el destacado.';
    pintar();
  });
}

function reportar(id, motivo) {
  if (!suscritoA || !usuario) return;
  const m = buscarMensaje(id);
  if (!m) return;
  reportando = null;
  setDoc(doc(db, 'reportes', idReporte(id, usuario.uid)), {
    temaId: suscritoA,
    mensajeId: id,
    uid: usuario.uid,
    autorUid: m.uid,
    textoCopia: m.texto.slice(0, 1000),
    motivo,
    createdAt: serverTimestamp()
  }).then(() => {
    avisoComposer = 'Gracias: el reporte le llegó al autor.';
    pintar();
  }).catch(err => {
    // El id del reporte es mensajeId_uid y la regla solo permite `create`, nunca `update`: un
    // segundo reporte de la misma persona sobre la misma nota se rechaza, y eso no es un fallo.
    avisoComposer = (err && err.code === 'permission-denied')
      ? 'Ya habías reportado esta nota.'
      : 'No se pudo enviar el reporte.';
    pintar();
  });
  pintar();
}

/* ---------------- Montaje ---------------- */
export function mountTopicChat() {
  elPanel = document.getElementById('topic-chat');
  if (!elPanel) return;
  elLista = document.getElementById('chat-list');
  elFijados = document.getElementById('chat-pinned');
  elCompose = document.getElementById('chat-compose');
  elEstado = document.getElementById('chat-status');
  elFab = document.getElementById('chat-fab');
  elFabCount = document.getElementById('chat-fab-count');
  elScrim = document.getElementById('chat-scrim');
  elSub = document.getElementById('chat-sub');
  elSalto = document.getElementById('chat-jump');

  elFab.addEventListener('click', () => (abierto ? cerrar() : abrir()));
  elScrim.addEventListener('click', cerrar);
  elSalto.addEventListener('click', alFondo);
  document.getElementById('chat-close').addEventListener('click', cerrar);

  // Delegación: la lista se repinta entera en cada snapshot, así que no se pueden colgar
  // escuchadores en cada burbuja.
  elPanel.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-accion]');
    if (!btn) return;
    const id = btn.dataset.id;
    switch (btn.dataset.accion) {
      case 'publicar': publicar(); break;
      case 'aceptar-normas': syncSet(ACEPTO_KEY, 1); pintar(); break;
      case 'pedir-borrar': borrando = id; reportando = null; pintar(); break;
      case 'borrar': borrar(id); break;
      case 'pedir-reporte': reportando = id; borrando = null; pintar(); break;
      case 'reportar': reportar(id, btn.dataset.motivo); break;
      case 'fijar': fijar(id, btn.dataset.val === '1'); break;
      case 'reintentar': reintentar(id); break;
      case 'descartar': descartar(id); break;
      case 'cancelar': borrando = null; reportando = null; pintar(); break;
      case 'reintentar-carga': reconciliar(); break;
    }
  });

  elPanel.addEventListener('input', (e) => {
    if (e.target.id !== 'chat-texto') return;
    autoAlto(e.target);
    contarCaracteres(e.target);
  });

  elPanel.addEventListener('keydown', (e) => {
    if (e.target.id !== 'chat-texto') return;
    // Enter publica solo con teclado físico. En táctil, Enter es salto de línea y se envía con el
    // botón: en el móvil no hay Shift cómodo y la tecla de envío del teclado virtual manda Enter.
    if (e.key === 'Enter' && !e.shiftKey && !esTactil()) {
      e.preventDefault();
      publicar();
    }
  });

  elLista.addEventListener('scroll', () => {
    if (estaAbajo() && nuevasSinVer) {
      nuevasSinVer = 0;
      ultimaVista = Date.now();
      if (elSalto) elSalto.hidden = true;
      if (elEstado) elEstado.textContent = '';
    }
  });

  // Escape cierra el cajón, pero solo si no hay un modal encima: el handler global de
  // study-view.js llama a closeModal() sin condición, y sin esta comprobación una sola pulsación
  // cerraría el modal del quiz y el cajón a la vez.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !abierto) return;
    const ov = document.getElementById('overlay');
    if (ov && ov.classList.contains('active')) return;
    cerrar();
  });

  const mq = window.matchMedia('(min-width:1280px)');
  acoplado = mq.matches;
  mq.addEventListener('change', (e) => {
    acoplado = e.matches;
    if (acoplado) abierto = false;
    reconciliar();
  });

  window.addEventListener('online', () => { if (temaId) reconciliar(); });

  actualizarChrome();
}
