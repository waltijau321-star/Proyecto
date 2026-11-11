// app.js — shell/router de ResidenteMed.
// Une el motor (engine/*) con el contenido por tema (topics/*) y gestiona la navegación.

import { registry, loadTopic } from './topics/registry.js';
import { temarioBlocks } from './topics/temario-index.js';
import { mountStudy, setGlobalSearch, slugify } from './engine/study-view.js';
import { setGeneralCalcs, mountAllCalculators } from './engine/calculators.js';
import { generalCalculators } from './engine/general-calc.js';
import { mountProtocols } from './engine/protocols.js';
import { mountHome } from './engine/home.js';
import { answeredBreakdown } from './engine/quiz-srs.js';
import { maybeShowSplash } from './engine/logo-splash.js';
import { initAuth } from './engine/auth.js';
import { initCloudSync } from './engine/cloud-sync.js';
import { isAdmin, mountAdmin } from './engine/admin.js';
import { mountExamPage } from './engine/exam-mode.js';
import { mountAccountMenu } from './engine/account-menu.js';
import { trackSection, trackTopic } from './engine/usage-tracking.js';
import { mountTopicChat, setChatTopic, setChatSection, setChatUser } from './engine/topic-chat.js';
import { firebaseReady } from './engine/firebase-config.js';
import './engine/infusion-calc.js';
import { mountVpo, refocusVpo, vpoSearchEntries, nuevoPaciente } from './engine/vpo.js';
import { esPediatra } from './engine/pediatria-acceso.js';
import { mountPediatria, nuevoPacientePedia, pediaSearchEntries, refocusPediatria } from './engine/pediatria.js';
import { protocols } from './protocols/protocols.js';

setGeneralCalcs(generalCalculators);

const mounted = { protocolos: false, vpo: false, calc: false, pediatria: false };
let currentTopic = null;

// Títulos de encabezado para las secciones que no giran en torno a un solo tema
// (Estudio sigue mostrando el título/subtítulo del tema activo).
const SECTION_TITLES = {
  inicio: ['Inicio', ''],
  calc: ['Calculadoras', 'MIOsler'],
  protocolos: ['Protocolos', 'MIOsler'],
  vpo: ['Valoración preoperatoria', 'MIOsler'],
  pediatria: ['Pediatría', 'Farmacología'],
  admin: ['Admin', 'MIOsler'],
  examen: ['Examen simulado', 'MIOsler']
};

/* ---------- Botones "Volver al temario" / "Siguiente tema" (reemplazan el selector de tema en
   Estudio, que ya no tiene pestaña propia en el nav inferior) ---------- */
function renderTopicSwitchSlot(sec) {
  const slot = document.getElementById('topic-switch-slot');
  if (!slot) return;
  if (sec !== 'estudio' || !currentTopic) { slot.innerHTML = ''; return; }
  // Siguiente tema = el que sigue a currentTopic en el orden de registry.js, con vuelta al
  // inicio tras el último (mismo criterio de "anterior/siguiente" que ya usa el modal de
  // complicaciones en study-view.js). Si solo hay un tema construido, no hay a dónde ir.
  const idx = registry.findIndex(t => t.id === currentTopic.meta.id);
  const next = idx >= 0 && registry.length > 1 ? registry[(idx + 1) % registry.length] : null;
  slot.innerHTML = `
    <button id="btn-volver-temario" class="home-quick">← Volver al temario</button>
    ${next ? `<button id="btn-siguiente-tema" class="home-quick" title="${next.titulo}">Siguiente: ${next.titulo} →</button>` : ''}`;
  const btn = document.getElementById('btn-volver-temario');
  if (btn) btn.addEventListener('click', () => showSection('inicio'));
  const btnNext = document.getElementById('btn-siguiente-tema');
  if (btnNext && next) btnNext.addEventListener('click', async () => { await selectTopic(next.id); showSection('estudio'); });
}

/* ---------- Navegación de secciones ---------- */
function showSection(sec) {
  trackSection(sec);
  document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const secEl = document.getElementById('sec-' + sec);
  const navEl = document.getElementById('nav-' + sec);
  if (secEl) secEl.classList.add('active');
  if (navEl) navEl.classList.add('active');
  renderTopicSwitchSlot(sec);
  // El panel de notas solo tiene sentido en Estudio, y además necesita saber la sección para
  // decidir si suscribirse: ver el reconciliador de engine/topic-chat.js.
  setChatSection(sec);

  if (sec === 'estudio' && currentTopic) {
    document.getElementById('app-title').textContent = currentTopic.meta.titulo;
    document.getElementById('app-subtitle').textContent = currentTopic.meta.subtitulo || 'Medicina Interna';
  } else {
    const [title, subtitle] = SECTION_TITLES[sec] || ['MIOsler', ''];
    document.getElementById('app-title').textContent = title;
    document.getElementById('app-subtitle').textContent = subtitle;
  }

  if (sec === 'protocolos' && !mounted.protocolos) { mountProtocols(document.getElementById('proto-root')); mounted.protocolos = true; }
  if (sec === 'vpo') {
    if (!mounted.vpo) { mountVpo(document.getElementById('vpo-root')); mounted.vpo = true; }
    else refocusVpo();
  }
  if (sec === 'pediatria') {
    if (!mounted.pediatria) { mountPediatria(document.getElementById('pedia-root')); mounted.pediatria = true; }
    else refocusPediatria();
  }
  if (sec === 'calc' && !mounted.calc) { mountAllCalculatorsSection(); mounted.calc = true; }
  if (sec === 'inicio') { mountHomeSection(); }
  if (sec === 'admin') { mountAdmin(document.getElementById('admin-root')); }
  if (sec === 'examen') { mountExamPage(document.getElementById('examen-root')); }

  window.scrollTo({ top: 0, behavior: 'auto' });
}
window.rmGoToExam = () => showSection('examen');

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.sec));
});

/* ---------- Calculadoras: todas las de los temas construidos, agrupadas ---------- */
async function mountAllCalculatorsSection() {
  const topics = [];
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (topic) topics.push(topic);
  }
  mountAllCalculators(document.getElementById('calc-root'), topics);
}

/* ---------- Carga de tema ---------- */
async function selectTopic(id, { reflectUrl = true } = {}) {
  const topic = await loadTopic(id);
  if (!topic) return;
  trackTopic(id);
  currentTopic = topic;
  document.getElementById('app-title').textContent = topic.meta.titulo;
  document.getElementById('app-subtitle').textContent = topic.meta.subtitulo || 'Medicina Interna';
  document.documentElement.style.setProperty('--accent', topic.meta.accent || '#7c2d2d');

  mountStudy(topic);
  // Único punto por el que pasan todos los cambios de tema (arranque, Inicio, "Siguiente tema" y
  // el buscador), así que es el sitio correcto para que las notas cambien de tema con él.
  setChatTopic(topic.meta.id, topic.meta.titulo);

  // Refleja el tema en la URL sin recargar — pero solo si el llamador lo pide (reflectUrl):
  // el arranque con un tema por defecto (nadie eligió nada todavía) NO debe escribir ?tema=
  // en una URL que llegó limpia; una vez que el usuario elige un tema explícitamente, sí.
  if (reflectUrl) {
    const url = new URL(location.href);
    url.searchParams.set('tema', id);
    history.replaceState(null, '', url);
  }
}

/* ---------- Inicio (portada: temario + progreso acumulado del quiz) ---------- */
// NO carga ningún tema, y es deliberado. Antes llamaba a loadTopic() por cada entrada del
// registro para leer dos campos (`accent` y el tamaño del banco), lo que costaba 208 peticiones
// y 7.3 MB antes de pintar: la portada tardaba 2.7 s en localhost y más de 10 s en red móvil,
// con la pantalla vacía, y empeoraba con cada tema añadido. Esos dos campos viven ahora en la
// entrada del registro, con una prueba que los compara con los módulos reales, y el progreso
// sale del almacén del repaso espaciado (answeredCount), que tampoco necesita el banco.
// Ya no es `async`: la portada se pinta en el mismo cuadro.
function mountHomeSection() {
  // "Contestada" = ya se respondió al menos una vez, el mismo criterio que desbloquea las fichas
  // de repaso del tema (ver engine/quiz-srs.js), no el total de intentos. El desglose
  // acertadas/falladas viene de la caja de Leitner de cada pregunta, así que también cuenta
  // preguntas distintas y no intentos: es lo que pinta la barra verde/rojo/gris de Inicio.
  const topics = registry.map(t => {
    const quizCount = t.preguntas || 0;
    return { id: t.id, titulo: t.titulo, accent: t.accent, quizCount, ...answeredBreakdown(t.id, quizCount) };
  });
  const totalQuestions = topics.reduce((n, t) => n + t.quizCount, 0);
  const answeredQuestions = topics.reduce((n, t) => n + t.contestadas, 0);
  mountHome(document.getElementById('home-root'), {
    topics, totalQuestions, answeredQuestions, temarioBlocks,
    navigateToTopic: async (id) => {
      await selectTopic(id);
      showSection('estudio');
    },
    navigateToSection: (sec) => showSection(sec)
  });
}

/* Corre `fn` cuando el navegador quede libre. Tres precauciones, y ninguna es de adorno:
    - se llama como `window.requestIdleCallback(...)`, con su receptor, porque desprendido del
      objeto (`const f = window.requestIdleCallback; f(...)`) hay motores que lanzan
      "Illegal invocation";
    - va envuelto en try/catch y con repliegue a setTimeout, para que ni eso ni la falta de la API
      en un navegador viejo (Safari no la trajo hasta 2024) deje el buscador sin índice para
      siempre;
    - con `timeout`, porque sin él requestIdleCallback puede no dispararse nunca si la pestaña
      queda de fondo, que es justo lo que pasa cuando alguien abre la app y se va.
   Vive en el ámbito del módulo porque lo usan el arranque y el cambio de sesión. */
const alRatito = (fn) => {
  try {
    if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(fn, { timeout: 3000 });
    else setTimeout(fn, 200);
  } catch (e) {
    setTimeout(fn, 200);
  }
};

/* ---------- Visibilidad de la pestaña Pediatría ----------
   Mismo mecanismo que nav-admin: el botón nace oculto en index.html y se enciende según el
   perfil. Se llama desde el callback de initAuth (y solo DESPUÉS de initCloudSync: la bandera es
   un campo del documento del usuario y syncGet no la ve hasta que esa llamada fusionó el espejo
   en memoria; antes de eso, un residente de pediatría entrando en un dispositivo nuevo no vería
   su pestaña) y desde 'rm:perfil-guardado', que es lo que dispara Mi cuenta al guardar.

   Un caso honesto que no se arregla con código: si initCloudSync agota su tope de tiempo sin red,
   en un dispositivo ESTRENADO la bandera todavía no está en local y la pestaña no aparece en ese
   primer arranque. En cuanto la lectura de la nube llega una vez, queda en localStorage y
   sobrevive. Es el mismo compromiso que ya hace el resto del perfil. */
function aplicarVisibilidadPediatria() {
  const btn = document.getElementById('nav-pediatria');
  if (!btn) return;
  const puede = esPediatra();
  btn.style.display = puede ? '' : 'none';
  // Quitarse la bandera estando dentro de la sección dejaría la sección a la vista sin ninguna
  // pestaña que la señale y sin forma de volver a ella: se sale a Inicio.
  const sec = document.getElementById('sec-pediatria');
  if (!puede && sec && sec.classList.contains('active')) showSection('inicio');
}
window.addEventListener('rm:perfil-guardado', aplicarVisibilidadPediatria);

/* ---------- Cambio de sesión tras el arranque ----------
   Las secciones montadas una sola vez conservan en el DOM lo que renderizaron con los datos
   del usuario anterior. En VPO eso son datos de un paciente concreto (fármacos y estudios
   marcados, ruta recorrida), así que hay que descartarlas y volver a montarlas con lo que
   initCloudSync acaba de fusionar, no solo refrescar Inicio. */
function resetSectionsForNewSession({ otroUsuario }) {
  // Con OTRO usuario hay que descartar además los datos del paciente que VPO tenía a medias:
  // clearLocalData() (en el cierre de sesión) ya vació localStorage y el espejo en memoria de
  // cloud-sync, pero vpo.js guarda el paciente en curso en variables de su propio módulo, que
  // ningún borrado de almacenamiento alcanza. Si es el mismo usuario que vuelve a entrar, su
  // borrador se respeta.
  if (otroUsuario) { nuevoPaciente(); nuevoPacientePedia(); }
  mounted.protocolos = false;
  mounted.vpo = false;
  mounted.calc = false;
  mounted.pediatria = false;
  ['proto-root', 'vpo-root', 'calc-root', 'pedia-root'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
  // Estudio no se desmonta nunca (no tiene bandera en `mounted`), así que sin esto seguiría
  // mostrando el progreso del quiz y el candado de las fichas del usuario anterior.
  if (currentTopic) mountStudy(currentTopic);
  // El índice del buscador ya no es el mismo para todos: las entradas de Pediatría dependen de la
  // bandera del perfil. Sin esto, tras un cambio de sesión en un dispositivo compartido el índice
  // sigue siendo el de la persona anterior. Es barato la segunda vez: los módulos de tema ya están
  // en el registro del navegador y loadTopic no vuelve a pedir nada a la red.
  alRatito(() => buildAndSetGlobalIndex());
  showSection('inicio');
}

/* ---------- Buscador global (todos los temas, VPO y protocolos, sin importar la sección activa) ---------- */
async function buildAndSetGlobalIndex() {
  const index = [];
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const D = topic.content || {};
    const itemLabel = (topic.modalLabels && topic.modalLabels.itemName) || 'Complicación';
    (D.complicaciones || []).forEach((c, i) => {
      index.push({ label: c.nombre, type: itemLabel, scope: t.titulo, section: 'estudio', topicId: t.id, action: () => window.openModal(i) });
    });
    (topic.estigmas || []).forEach((e, i) => {
      index.push({ label: e.s, type: 'Estigma clásico', scope: t.titulo, section: 'estudio', topicId: t.id, action: () => window.openStigma(i) });
    });
    if (D.clasificacion && D.clasificacion.escalas) {
      D.clasificacion.escalas.forEach(e => {
        index.push({ label: e.nombre, type: 'Escala', scope: t.titulo, section: 'estudio', topicId: t.id, action: () => window.jumpToEscala(slugify(e.nombre)) });
      });
    }
    // Las escalas de VPO las aporta vpoSearchEntries() apuntando a la sección VPO, que es su
    // casa. El tema 'valoracion-preoperatoria' reexporta esas mismas escalas para que salgan
    // en Calc, así que indexarlas aquí también las duplicaría en el buscador.
    if (t.id !== 'valoracion-preoperatoria') {
      (topic.calculators || []).forEach(c => {
        index.push({ label: c.title, type: 'Calculadora', scope: t.titulo, section: 'calc', topicId: t.id, action: () => window.openCalcFor(t.id, c.key) });
      });
    }
  }
  // Las calculadoras generales no pertenecen a ningún tema, así que el recorrido de arriba no
  // las ve: sin esto, una escala general existe en la sección Calc pero no se puede buscar.
  generalCalculators.forEach(c => {
    index.push({ label: c.title, type: 'Calculadora', scope: 'General', section: 'calc', action: () => window.openCalc(c.key) });
  });
  vpoSearchEntries().forEach(e => index.push(e));
  if (esPediatra()) pediaSearchEntries().forEach(e => index.push(e));
  protocols.forEach(p => {
    index.push({ label: p.title, type: 'Protocolo', scope: 'Protocolos', section: 'protocolos', action: () => window.rmProtoOpen(p.id) });
  });
  setGlobalSearch(index, navigateToSearchResult);
}

async function navigateToSearchResult(entry) {
  if (entry.topicId && (!currentTopic || currentTopic.meta.id !== entry.topicId)) {
    await selectTopic(entry.topicId);
  }
  showSection(entry.section || 'estudio');
  // entry.action es una FUNCION, no una cadena. Antes se evaluaba con Function(entry.action)(),
  // es decir evaluacion de codigo armado por interpolacion: funcionaba porque el contenido es
  // propio, pero una comilla en el nombre de una escala lo rompia.
  if (typeof entry.action === 'function') {
    try { entry.action(); } catch (e) { console.error('Búsqueda: no se pudo abrir el resultado', e); }
  }
}

/* ---------- Arranque ---------- */
/* ---------- Foco de los modales (uno para toda la app) ---------- */
// Al abrir un modal el foco se quedaba en el boton de atras, asi que un lector de pantalla no
// anunciaba el dialogo y el primer Tab seguia recorriendo la pagina de debajo; al cerrarlo se
// quedaba en el boton de cerrar, ya oculto, y el siguiente Tab empezaba desde el principio del
// documento. Se vigila la clase del #overlay en vez de tocar a cada modulo: todos abren el
// mismo #overlay/#modal anadiendo .active (ayuda de Inicio, fichas, calculadoras, examen, VPO,
// Pediatria), asi que una sola vigilancia los cubre a todos. auth.js ya hacia esto para su
// propio modal, y su .focus() explicito sigue mandando porque corre despues.
function vigilarFocoDeModales() {
  const ov = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  if (!ov || !modal) return;
  let focoPrevio = null;
  new MutationObserver(() => {
    const abierto = ov.classList.contains('active');
    if (abierto && !focoPrevio) {
      focoPrevio = document.activeElement;
      modal.setAttribute('tabindex', '-1');
      // El contenedor, no el primer boton: el lector anuncia el dialogo entero y el primer Tab
      // entra en orden al primer control.
      modal.focus();
    } else if (!abierto && focoPrevio) {
      if (document.contains(focoPrevio) && typeof focoPrevio.focus === 'function') focoPrevio.focus();
      focoPrevio = null;
    }
  }).observe(ov, { attributes: true, attributeFilter: ['class'] });
}

async function init() {
  vigilarFocoDeModales();
  mountAccountMenu();
  mountTopicChat();
  const params = new URLSearchParams(location.search);
  const hasValidTemaParam = params.get('tema') && registry.some(t => t.id === params.get('tema'));
  const initial = hasValidTemaParam ? params.get('tema') : registry[0].id;

  let booted = false;
  async function bootApp() {
    booted = true;
    // Si la URL ya traía un ?tema= válido, se conserva. Si no, se elige un tema por defecto
    // internamente (el primero del registro) pero SIN escribirlo en la URL — la URL queda
    // limpia hasta que el usuario elija un tema de verdad.
    // El splash de bienvenida corre en paralelo con la carga del tema inicial (no uno
    // después del otro) para no duplicar tiempo de espera; Inicio se muestra recién cuando
    // ambos terminan.
    await Promise.all([
      selectTopic(initial, { reflectUrl: hasValidTemaParam }),
      maybeShowSplash()
    ]);
    showSection('inicio');

    // Service worker (PWA): solo bajo http/https, no en file://
    // Va ANTES de programar el índice del buscador a propósito: es lo que hace que la app
    // funcione sin conexión, y no puede quedar a merced de que la línea siguiente falle.
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    // El índice del buscador sí recorre los 106 temas (necesita las complicaciones, los estigmas
    // y las escalas de cada uno, que solo están en los módulos), así que construirlo aquí mismo
    // volvía a meter la descarga completa en el camino crítico del arranque: se construye cuando
    // el navegador queda libre. Hasta entonces el buscador devuelve menos resultados, que es
    // mejor que una portada en blanco durante segundos.
    // Tres precauciones, y ninguna es de adorno:
    //  - se llama como `window.requestIdleCallback(...)`, con su receptor, porque desprendido del
    //    objeto (`const f = window.requestIdleCallback; f(...)`) hay motores que lanzan
    //    "Illegal invocation";
    //  - va envuelto en try/catch y con repliegue a setTimeout, para que ni eso ni la falta de
    //    la API en un navegador viejo (Safari no la trajo hasta 2024) deje el buscador sin
    //    índice para siempre;
    //  - con `timeout`, porque sin él requestIdleCallback puede no dispararse nunca si la
    //    pestaña queda de fondo, que es justo lo que pasa cuando alguien abre la app y se va.
    alRatito(() => buildAndSetGlobalIndex());
  }

  // El arranque real de la app espera a que Firebase Auth confirme si hay sesión iniciada
  // (initAuth ya se encarga de mostrar el modal de login cuando no la hay). Si Firebase
  // todavía no está configurado (engine/firebase-config.js con placeholders), firebaseReady
  // es false y la app arranca igual, sin gate, para no bloquear el desarrollo local.
  // Un cierre de sesión deja lastUid puesto, así que al volver a entrar se distingue si es la
  // misma persona (conserva su trabajo) u otra (se descarta lo del paciente anterior).
  let lastUid = null;
  initAuth(async (user) => {
    const otroUsuario = !!(booted && user && lastUid && user.uid !== lastUid);
    await initCloudSync(user);
    // Después de initCloudSync, no antes: la firma de las notas sale del perfil que esa llamada
    // acaba de fusionar en el espejo de cloud-sync.
    setChatUser(user);
    if (user) lastUid = user.uid;
    document.getElementById('nav-admin').style.display = isAdmin() ? '' : 'none';
    aplicarVisibilidadPediatria();
    if (!user && firebaseReady) return;
    if (!booted) await bootApp();
    else resetSectionsForNewSession({ otroUsuario }); // cambio de sesión tras el arranque
  });
}

init();
