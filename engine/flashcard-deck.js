// engine/flashcard-deck.js
// Resumen del "mazo" de fichas en Inicio: solo cuenta fichas que el usuario ya calificó al
// menos una vez desde algún tema (progreso existente en flashcard-progress:<topicId>). Si
// nunca ha calificado ninguna, la sección muestra una invitación a empezar desde un tema.
import { registry, loadTopic } from '../topics/registry.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { trackEvent } from './usage-tracking.js';

let CARD_POOL = null; // [{topicId, topicTitulo, cardIndex, front, back}]
let reviewState = { deck: [], index: 0, showBack: false };

function fcKey(topicId) { return 'flashcard-progress:' + topicId; }

async function loadCardPool() {
  if (CARD_POOL) return CARD_POOL;
  const cards = [];
  for (const t of registry) {
    const topic = await loadTopic(t.id);
    if (!topic) continue;
    const flashcards = (topic.study && topic.study.flashcards) || [];
    flashcards.forEach((c, i) => cards.push({ topicId: t.id, topicTitulo: topic.meta.titulo, cardIndex: i, front: c.front, back: c.back }));
  }
  CARD_POOL = cards;
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
  if (rating === 1) box = 1; else if (rating === 2) box = Math.max(1, box); else if (rating === 3) box = Math.min(5, box + 1); else box = Math.min(5, box + 2);
  const intervals = { 1: 0, 2: 1 * 86400000, 3: 3 * 86400000, 4: 7 * 86400000, 5: 14 * 86400000 };
  progress[card.cardIndex] = { box, next: Date.now() + (intervals[box] || 0) };
  syncSet(fcKey(card.topicId), progress);
  reviewState.index++; reviewState.showBack = false; renderReview();
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
        ? `<button class="home-quick" onclick="rmOpenDeckReview()">Repasar vencidas →</button>`
        : `<span class="fc-deck-uptodate">Estás al día ✓</span>`}
    </div>`;

  window.rmOpenDeckReview = () => openReview(due);
}

Object.assign(window, { rmFlipDeckCard: flipCard, rmRateDeckCard: rateCard });
