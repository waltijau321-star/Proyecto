// engine/cloud-sync.js
// Capa de sincronización: reemplazo "drop-in" de localStorage que además escribe a Firestore
// cuando hay sesión iniciada. syncGet/syncSet mantienen la misma firma síncrona que ya usaban
// las funciones load/save de cada módulo, para no convertir el código existente en asíncrono.
//
// Documento único por usuario: users/{uid}, un campo por cada clave de localStorage (el nombre
// de la clave se usa tal cual como nombre de campo, sin mapeo, así cualquier protocolo o
// tema nuevo funciona automáticamente sin tocar este archivo).
//
// Tres reglas que sostienen la sincronización entre dispositivos:
//   1. Se LEE la nube en cada arranque, no solo la primera vez en el dispositivo. Antes, tras la
//      primera fusión, el dispositivo solo escribía: estudiar en el celular no se veía nunca en
//      la computadora.
//   2. Lo que no se alcanzó a enviar (sin red, o una escritura que falló) queda anotado en
//      localStorage y se reintenta en el siguiente arranque, antes de leer la nube.
//   3. El navegador recuerda de quién es el estado local. Si entra otra persona, se descarta lo
//      anterior: en una tablet compartida, el residente nuevo no hereda el progreso del previo.

import { doc, getDoc, getDocs, collection, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js';
import { db, firebaseReady } from './firebase-config.js';

const DEBOUNCE_MS = 2000;
const MAX_WAIT_MS = 10000;
// Presupuesto de espera en el arranque. Sin red, la promesa de Firestore no se resuelve (ni
// falla) hasta mucho después, y el arranque de una PWA no puede quedarse colgado esperándola:
// si se agota, se sigue con lo local y se reintenta en el próximo arranque.
const BOOT_SYNC_MS = 2500;

const OWNER_KEY = 'rm:local-owner-uid';     // de quién es el estado local de este navegador
const PENDING_KEY = 'rm:sync-pending';      // claves escritas que todavía no llegaron a la nube
const KEEP_ON_CLEAR = ['rm:remember-user', 'rm:remember-email'];
const META_FIELDS = ['updatedAt', 'createdAt', 'schemaVersion', 'email'];

let currentUser = null;
let userDocRef = null;
let mirror = {};              // espejo en memoria de todas las claves conocidas
let dirtyKeys = new Set();
let debounceTimer = null;
let maxWaitTimer = null;

function isControlKey(k) {
  return k === OWNER_KEY || k === PENDING_KEY || k.startsWith('rm:cloud-synced:');
}
function isSyncedKey(k) {
  return !isControlKey(k) && (k.startsWith('rm:') || k.startsWith('flashcard-progress:'));
}

function rawLocalGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch (e) { return fallback; }
}
function rawLocalSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

/* ---------- Cola de escrituras pendientes (sobrevive a recargar la página) ---------- */
function readPending() {
  try {
    const v = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]');
    return Array.isArray(v) ? v.filter(k => typeof k === 'string') : [];
  } catch (e) { return []; }
}
function persistPending() {
  try {
    if (dirtyKeys.size) localStorage.setItem(PENDING_KEY, JSON.stringify([...dirtyKeys]));
    else localStorage.removeItem(PENDING_KEY);
  } catch (e) {}
}

// Corre `promise` con tope de tiempo: devuelve null si tarda de más o si falla.
function withTimeout(promise, ms) {
  let timer = null;
  return Promise.race([
    Promise.resolve(promise).catch(() => null),
    new Promise(resolve => { timer = setTimeout(() => resolve(null), ms); })
  ]).then(v => { if (timer) clearTimeout(timer); return v; });
}

/* ---------- Estrategia de fusión por tipo de clave ---------- */
function strategyFor(key) {
  if (key === 'rm:quiz-progress') return 'quiz';
  // Leitner (una caja y una fecha por elemento): fichas de repaso y repetición espaciada del
  // banco de preguntas. Fusionar elemento por elemento, no como un bloque: si no, practicar en
  // dos dispositivos hacía que el documento de la nube pisara entero el calendario local.
  if (key.startsWith('flashcard-progress:') || key.startsWith('rm:quiz-srs:')) return 'leitner';
  if (key.startsWith('rm:proto:')) return 'bool-map';
  if (key === 'rm:topics-reviewed') return 'bool-map';
  // VPO: lo marcado para la nota (fármacos y estudios) es acumulativo y se une entre dispositivos
  // (marcar en el celular durante el pase y terminar la nota en la computadora). No vale
  // marcar todo el prefijo 'rm:vpo:' como bool-map: 'rm:vpo:tab' guarda una cadena y
  // 'rm:vpo:ruta' un camino de decisiones, y unir dos caminos daría ramas contradictorias.
  // Para esos dos la estrategia escalar es la correcta: gana el último dispositivo.
  if (key === 'rm:vpo:farmacos' || key === 'rm:vpo:estudios') return 'bool-map';
  return 'scalar';
}

export function mergeValue(key, localVal, cloudVal) {
  if (cloudVal === undefined) return localVal;
  if (localVal === undefined || localVal === null) return cloudVal;
  const strategy = strategyFor(key);

  if (strategy === 'quiz') {
    const merged = {};
    const topics = new Set([...Object.keys(localVal || {}), ...Object.keys(cloudVal || {})]);
    topics.forEach(t => {
      const l = (localVal && localVal[t]) || { correct: 0, incorrect: 0 };
      const c = (cloudVal && cloudVal[t]) || { correct: 0, incorrect: 0 };
      merged[t] = { correct: Math.max(l.correct || 0, c.correct || 0), incorrect: Math.max(l.incorrect || 0, c.incorrect || 0) };
    });
    return merged;
  }

  if (strategy === 'leitner') {
    const merged = {};
    const cards = new Set([...Object.keys(localVal || {}), ...Object.keys(cloudVal || {})]);
    cards.forEach(idx => {
      const l = (localVal && localVal[idx]) || null;
      const c = (cloudVal && cloudVal[idx]) || null;
      if (!l) { merged[idx] = c; return; }
      if (!c) { merged[idx] = l; return; }
      if (l.box !== c.box) merged[idx] = l.box > c.box ? l : c;
      else merged[idx] = (l.next || 0) >= (c.next || 0) ? l : c;
    });
    return merged;
  }

  if (strategy === 'bool-map') {
    const merged = { ...(cloudVal || {}) };
    Object.keys(localVal || {}).forEach(k => {
      merged[k] = !!(localVal[k]) || !!(merged[k]);
    });
    return merged;
  }

  // scalar: preferir el valor de la nube si no está vacío, si no, conservar el local.
  if (cloudVal !== '' && cloudVal !== null && cloudVal !== undefined) return cloudVal;
  return localVal;
}

/* ---------- API pública: mismo contrato síncrono que localStorage ---------- */
export function syncGet(key, fallback) {
  if (Object.prototype.hasOwnProperty.call(mirror, key)) return mirror[key];
  const v = rawLocalGet(key, fallback);
  mirror[key] = v;
  return v;
}

export function syncSet(key, value) {
  mirror[key] = value;
  rawLocalSet(key, value);
  if (!currentUser || !firebaseReady) return;
  dirtyKeys.add(key);
  persistPending();
  scheduleFlush();
}

function scheduleFlush() {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(flushPendingWrites, DEBOUNCE_MS);
  if (!maxWaitTimer) maxWaitTimer = setTimeout(flushPendingWrites, MAX_WAIT_MS);
}

export async function flushPendingWrites() {
  if (debounceTimer) { clearTimeout(debounceTimer); debounceTimer = null; }
  if (maxWaitTimer) { clearTimeout(maxWaitTimer); maxWaitTimer = null; }
  if (!currentUser || !firebaseReady || !userDocRef) return;

  // Se envían tanto lo sucio de esta sesión como lo que quedó anotado de una sesión anterior.
  const keys = [...new Set([...dirtyKeys, ...readPending()])].filter(isSyncedKey);
  if (!keys.length) return;

  const payload = {};
  keys.forEach(k => {
    // Una clave anotada como pendiente que ya no existe ni en el espejo ni en disco se omite:
    // escribirla como null borraría ese campo en la nube, que es lo contrario de lo que se quiere.
    if (Object.prototype.hasOwnProperty.call(mirror, k)) {
      payload[k] = mirror[k] === undefined ? null : mirror[k];
      return;
    }
    let crudo = null;
    try { crudo = localStorage.getItem(k); } catch (e) { crudo = null; }
    if (crudo === null) { dirtyKeys.delete(k); return; }
    payload[k] = rawLocalGet(k, null);
  });
  if (!Object.keys(payload).length) { persistPending(); return; }
  payload.updatedAt = serverTimestamp();
  payload.schemaVersion = 1;

  try {
    await setDoc(userDocRef, payload, { merge: true });
    keys.forEach(k => dirtyKeys.delete(k));
  } catch (e) {
    // Importante: las claves NO se dan por enviadas. Antes se limpiaban antes del await y el
    // error se tragaba, así que una escritura fallida se perdía para siempre.
    keys.forEach(k => dirtyKeys.add(k));
  }
  persistPending();
}

/* ---------- Borrado del estado local (cierre de sesión o cambio de usuario) ---------- */
// Deja el navegador como recién instalado, salvo la comodidad de "recordar usuario". Se usa al
// cerrar sesión y al detectar que el estado local es de otra persona.
export function clearLocalData() {
  try {
    Object.keys(localStorage).forEach(k => {
      if (KEEP_ON_CLEAR.includes(k)) return;
      if (k.startsWith('rm:') || k.startsWith('flashcard-progress:')) localStorage.removeItem(k);
    });
  } catch (e) {}
  mirror = {};
  dirtyKeys.clear();
}

/* ---------- Arranque de sesión: siembra o fusión ---------- */
export async function initCloudSync(user) {
  currentUser = user;
  if (!user || !firebaseReady) { userDocRef = null; return; }

  userDocRef = doc(db, 'users', user.uid);

  // (1) Dispositivo compartido: lo que haya quedado de otra persona se descarta ANTES de
  // sembrar o fusionar nada, o el documento del usuario nuevo nacería con el progreso del anterior.
  const owner = localStorage.getItem(OWNER_KEY);
  if (owner && owner !== user.uid) clearLocalData();
  try { localStorage.removeItem('rm:cloud-synced:' + user.uid); } catch (e) {} // marcador de la versión anterior

  // (2) Primero empujar lo pendiente, para que la fusión de abajo vea ese trabajo y no lo pise
  // con un valor más viejo de la nube.
  if (readPending().length) await withTimeout(flushPendingWrites(), BOOT_SYNC_MS);

  // (3) Leer la nube. Se envuelve en un objeto para distinguir "no hay documento" (snap.s
  // existe y exists() es false) de "no se pudo leer" (sin red: null). La diferencia importa:
  // tratar un fallo de red como documento inexistente sembraría la nube con lo local y podría
  // pisar el progreso real del usuario.
  const read = await withTimeout(getDoc(userDocRef).then(s => ({ s })), BOOT_SYNC_MS);
  if (!read || !read.s) return; // sin red: se opera con lo local y se reintenta al próximo arranque
  const cloudDoc = read.s.exists() ? read.s.data() : null;

  if (!cloudDoc) {
    // Documento nuevo: sembrar desde lo que ya haya en localStorage de este navegador (que tras
    // el paso (1) es de este usuario, no de otro).
    const seeded = { updatedAt: serverTimestamp(), createdAt: serverTimestamp(), schemaVersion: 1, email: user.email || '' };
    Object.keys(localStorage).forEach(k => {
      if (isSyncedKey(k)) seeded[k] = rawLocalGet(k, null);
    });
    try { await setDoc(userDocRef, seeded, { merge: true }); } catch (e) {}
    try { localStorage.setItem(OWNER_KEY, user.uid); } catch (e) {}
    return;
  }

  // Mantiene el correo (y, si falta por ser una cuenta anterior a este campo, la fecha de alta)
  // al día. No se espera: es un dato de perfil, no bloquea el arranque.
  const profilePatch = {};
  if (cloudDoc.email !== (user.email || '')) profilePatch.email = user.email || '';
  if (!cloudDoc.createdAt) profilePatch.createdAt = serverTimestamp();
  if (Object.keys(profilePatch).length) {
    setDoc(userDocRef, profilePatch, { merge: true }).catch(() => {});
  }

  // Fusionar campo por campo y dejar el resultado en local. Lo que cambió respecto a la nube se
  // marca como sucio: lo sube el flush normal, con reintento si falla.
  let changed = false;
  Object.keys(cloudDoc).forEach(k => {
    if (META_FIELDS.includes(k)) return;
    const localVal = rawLocalGet(k, undefined);
    const value = mergeValue(k, localVal, cloudDoc[k]);
    mirror[k] = value;
    rawLocalSet(k, value);
    if (JSON.stringify(value) !== JSON.stringify(cloudDoc[k])) { dirtyKeys.add(k); changed = true; }
  });
  if (changed) { persistPending(); scheduleFlush(); }

  try { localStorage.setItem(OWNER_KEY, user.uid); } catch (e) {}
}

/* ---------- Panel de administración: lista de todos los usuarios registrados ---------- */
export async function fetchAllUsers() {
  const snap = await getDocs(collection(db, 'users'));
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}

window.addEventListener('visibilitychange', () => { if (document.hidden) flushPendingWrites(); });
// pagehide es el único evento fiable en iOS cuando la pestaña se descarta; beforeunload se deja
// como respaldo en escritorio. Si ninguno alcanza a entregar la escritura, las claves quedan
// anotadas en PENDING_KEY y se reintentan en el siguiente arranque.
window.addEventListener('pagehide', () => { flushPendingWrites(); });
window.addEventListener('beforeunload', () => { flushPendingWrites(); });
window.addEventListener('online', () => flushPendingWrites());
