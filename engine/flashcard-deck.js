// engine/flashcard-deck.js
// Resumen del "mazo" de fichas en Inicio: solo cuenta fichas que el usuario ya calificó al
// menos una vez desde algún tema (progreso existente en flashcard-progress:<topicId>). Si
// nunca ha calificado ninguna, la sección muestra una invitación a empezar desde un tema.
import { registry, loadTopic } from '../topics/registry.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { trackEvent } from './usage-tracking.js';
import { SRS_INTERVALS, SRS_MAX_BOX } from './quiz-srs.js';
import { registrarDiaDeEstudio } from './racha.js';

let reviewState = { deck: [], index: 0, showBack: false };

function fcKey(topicId) { return 'flashcard-progress:' + topicId; }

/* ------------------- Lo vencido, sin cargar ni un tema -------------------
   La fecha de vencimiento de una ficha vive en el PROGRESO guardado (`flashcard-progress:<id>`),
   no en el modulo del tema, asi que contar lo vencido no cuesta una sola peticion: basta leer el
   progreso de cada tema del registro, que ya esta en memoria o en localStorage. Eso es lo que
   permite que la accion del dia de Inicio se pinte de golpe, sin esperar al mazo y sin romper la
   regla de que nada montado por Inicio carga temas.

   El titulo sale del registro, que lo lleva duplicado a proposito (igual que `accent` y
   `preguntas`), de modo que nombrar los temas vencidos tampoco cuesta una peticion.

   Cuenta una ficha MAS de las que el repaso puede servir en un solo caso: si el tema perdio
   fichas desde que el usuario califico esa, porque el progreso guarda el indice y un indice que
   ya no existe no puede entrar al mazo. No se disimula restandolo cada vez: `loadCardPool()`
   poda esos indices en cuanto carga el tema, asi que el desajuste dura, como mucho, hasta la
   primera visita a Inicio y se corrige en la fuente. */
export function resumenVencidas(ahora = Date.now()) {
  let enMazo = 0, vencidas = 0;
  const temas = [];
  registry.forEach(t => {
    const prog = syncGet(fcKey(t.id), {}) || {};
    const claves = Object.keys(prog);
    if (!claves.length) return;
    let n = 0;
    claves.forEach(k => {
      const p = prog[k];
      // `next` tiene que ser un numero: un documento viejo de la nube puede traer la ficha sin
      // fecha, y `undefined <= ahora` es false, pero mas vale decirlo que depender de eso.
      if (p && typeof p.next === 'number' && p.next <= ahora) n++;
    });
    enMazo += claves.length;
    vencidas += n;
    if (n) temas.push({ id: t.id, titulo: t.titulo, vencidas: n });
  });
  // De mas a menos vencidas, y a igualdad por titulo: con los mismos datos, dos pintados tienen
  // que nombrar los temas en el mismo orden.
  temas.sort((a, b) => b.vencidas - a.vencidas || String(a.titulo).localeCompare(String(b.titulo), 'es'));
  return { enMazo, vencidas, temas };
}

// Progreso que apunta a fichas que ya no existen en el tema. Devuelve el mapa podado, o null si
// no habia nada que podar, para no escribir a Firestore cuando no hay cambio. Pura, para que
// las pruebas la cubran sin tocar el mazo.
export function podarFantasmas(prog, nFichas) {
  const limpio = {};
  let sobran = 0;
  Object.keys(prog || {}).forEach(k => {
    const i = Number(k);
    if (Number.isInteger(i) && i >= 0 && i < nFichas) limpio[k] = prog[k];
    else sobran++;
  });
  return sobran ? limpio : null;
}

// Carga SOLO los temas en los que ya se calificó alguna ficha, y es exacto, no una
// aproximación: deckSummary() descarta toda ficha sin progreso guardado, así que un tema sin
// progreso no puede aportar nada al mazo. Antes recorría los 106 temas (205 peticiones y 7.1 MB
// en la portada) para acabar quedándose con las fichas de dos o tres. Para quien no ha
// calificado ninguna ficha todavía, ahora no carga ni un tema.
//
// Ya no se memoriza el resultado, y la memoria tenía que irse justo por este cambio: el conjunto
// de temas con progreso CAMBIA mientras la app está abierta (basta calificar una ficha en un
// tema nuevo y volver a Inicio). Un mazo memorizado se habría quedado sin ese tema hasta
// recargar la página. Reconstruirlo es barato porque loadTopic() sí memoriza los módulos: lo
// que se repite es armar un array sobre lo que ya está en memoria.
async function loadCardPool() {
  const cards = [];
  for (const t of registry) {
    const prog = syncGet(fcKey(t.id), {});
    if (!prog || !Object.keys(prog).length) continue;
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const flashcards = (topic.study && topic.study.flashcards) || [];
    const podado = podarFantasmas(prog, flashcards.length);
    if (podado) syncSet(fcKey(t.id), podado);
    flashcards.forEach((c, i) => cards.push({ topicId: t.id, topicTitulo: topic.meta.titulo, cardIndex: i, front: c.front, back: c.back }));
  }
  return cards;
}

function deckSummary(pool) {
  const now = Date.now();
  const inDeck = [];
  const progressByTopic = {};
  pool.forEach(c => {
    if (!(c.topicId in progressByTopic)) progressByTopic[c.topicId] = syncGet(fcKey(c.topicId), {});
    const prog = progressByTopic[c.topicId][c.cardIndex];
    if (prog) inDeck.push({ ...c, prog });
  });
  const due = inDeck.filter(c => c.prog.next <= now);
  return { inDeck, due };
}

function openReview(deck) {
  reviewState = { deck: shuffle(deck), index: 0, showBack: false };
  trackEvent('deckReviewStart');
  renderReview();
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function shuffle(arr) { return arr.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(([, v]) => v); }

function renderReview() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#5c4a73');
  if (reviewState.index >= reviewState.deck.length) {
    trackEvent('deckReviewComplete');
    m.innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <span class="modal-tag" style="color:#5c4a73;">Sesión completa</span>
      <h2>Repasaste ${reviewState.deck.length} fichas.</h2>
      <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">Las fichas calificadas como "Otra vez" o "Difícil" volverán a aparecer pronto.</p>
      <button class="calc-copy" onclick="closeModal(); if (window.rmRefreshHome) window.rmRefreshHome();">Cerrar</button>`;
    return;
  }
  const card = reviewState.deck[reviewState.index];
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#5c4a73;">Ficha ${reviewState.index + 1} / ${reviewState.deck.length} · ${card.topicTitulo}</span>
    <div class="flashcard" onclick="${reviewState.showBack ? '' : 'rmFlipDeckCard()'}">
      <div class="flashcard-inner">${reviewState.showBack ? card.back : card.front}</div>
      ${reviewState.showBack ? '' : '<div class="flashcard-hint">Toca la tarjeta para ver la respuesta</div>'}
    </div>
    ${reviewState.showBack ? `<div class="fc-rate-row">
        <button class="fc-rate" onclick="rmRateDeckCard(1)">Otra vez</button>
        <button class="fc-rate" onclick="rmRateDeckCard(2)">Difícil</button>
        <button class="fc-rate" onclick="rmRateDeckCard(3)">Bien</button>
        <button class="fc-rate" onclick="rmRateDeckCard(4)">Fácil</button>
      </div>` : ''}`;
}
function flipCard() { reviewState.showBack = true; renderReview(); }
function rateCard(rating) {
  const card = reviewState.deck[reviewState.index];
  const progress = syncGet(fcKey(card.topicId), {});
  let box = (progress[card.cardIndex] && progress[card.cardIndex].box) || 1;
  if (rating === 1) box = 1; else if (rating === 2) box = Math.max(1, box); else if (rating === 3) box = Math.min(SRS_MAX_BOX, box + 1); else box = Math.min(SRS_MAX_BOX, box + 2);
  progress[card.cardIndex] = { box, next: Date.now() + (SRS_INTERVALS[box] || 0) };
  syncSet(fcKey(card.topicId), progress);
  registrarDiaDeEstudio();
  reviewState.index++; reviewState.showBack = false; renderReview();
}

// Abre el repaso de las vencidas desde cualquier sitio. Existe aparte de mountFlashcardDeck()
// porque la accion del dia de Inicio se pinta ANTES de que el resumen del mazo termine de
// cargar: su boton tiene que responder al primer clic, no a partir del segundo. Lo que espera
// aqui es `loadTopic()`, que memoriza, asi que en la practica ya esta resuelto.
export async function abrirRepasoVencidas() {
  const { due } = deckSummary(await loadCardPool());
  if (!due.length) {
    // Ya no hay nada vencido: se repaso en otra pestaña, o el conteo barato contaba un indice
    // fantasma que loadCardPool() acaba de podar. Repintar Inicio deja la portada diciendo la
    // verdad, que es mejor que abrir un repaso de cero fichas.
    if (window.rmRefreshHome) window.rmRefreshHome();
    return;
  }
  openReview(due);
}

export async function mountFlashcardDeck(root) {
  const pool = await loadCardPool();
  const { inDeck, due } = deckSummary(pool);

  if (!inDeck.length) {
    root.innerHTML = `<p class="home-subhead-note">Aún no tienes fichas en tu mazo. Ve a un tema → Autoevaluación → Fichas de repaso y califica al menos una para empezar a verlas aquí.</p>`;
    return;
  }

  root.innerHTML = `
    <div class="fc-deck-summary">
      <div class="home-stat"><span class="home-stat-n">${inDeck.length}</span><span class="home-stat-l">Fichas en tu mazo</span></div>
      <div class="home-stat"><span class="home-stat-n" style="color:${due.length ? '#8c3a34' : '#2f6f5e'};">${due.length}</span><span class="home-stat-l">Vencidas hoy</span></div>
      ${due.length
        ? `<button class="home-quick" onclick="rmRepasarVencidas()">Repasar vencidas →</button>`
        : `<span class="fc-deck-uptodate">Estás al día ✓</span>`}
    </div>`;
}

Object.assign(window, { rmFlipDeckCard: flipCard, rmRateDeckCard: rateCard, rmRepasarVencidas: abrirRepasoVencidas });
