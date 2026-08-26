// engine/cloud-sync.js
// Capa de sincronización: reemplazo "drop-in" de localStorage que además escribe a Firestore
// cuando hay sesión iniciada. syncGet/syncSet mantienen la misma firma síncrona que ya usaban
// las funciones load/save de cada módulo, para no convertir el código existente en asíncrono.
//
// Documento único por usuario: users/{uid}, un campo por cada clave de localStorage (el nombre
// de la clave se usa tal cual como nombre de campo, sin mapeo, así cualquier protocolo o
// tema nuevo funciona automáticamente sin tocar este archivo).

import { doc, getDoc, getDocs, collection, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js';
import { db, firebaseReady } from './firebase-config.js';

const DEBOUNCE_MS = 2000;
const MAX_WAIT_MS = 10000;

let currentUser = null;
let userDocRef = null;
let mirror = {};              // espejo en memoria de todas las claves conocidas
let dirtyKeys = new Set();
let debounceTimer = null;
let maxWaitTimer = null;
let syncedMarkerKey = null;

function rawLocalGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch (e) { return fallback; }
}
function rawLocalSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

/* ---------- Estrategia de fusión por tipo de clave ---------- */
function strategyFor(key) {
  if (key === 'rm:quiz-progress') return 'quiz';
  if (key.startsWith('flashcard-progress:')) return 'flashcards';
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

  if (strategy === 'flashcards') {
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
  if (!currentUser || !firebaseReady || dirtyKeys.size === 0 || !userDocRef) return;
  const payload = {};
  dirtyKeys.forEach(k => { payload[k] = mirror[k]; });
  dirtyKeys.clear();
  payload.updatedAt = serverTimestamp();
  payload.schemaVersion = 1;
  try { await setDoc(userDocRef, payload, { merge: true }); } catch (e) { /* se reintenta en el próximo syncSet */ }
}

/* ---------- Arranque de sesión: siembra o fusión ---------- */
export async function initCloudSync(user) {
  currentUser = user;
  if (!user || !firebaseReady) { userDocRef = null; return; }

  userDocRef = doc(db, 'users', user.uid);
  syncedMarkerKey = `rm:cloud-synced:${user.uid}`;
  const alreadySynced = localStorage.getItem(syncedMarkerKey) === '1';

  let cloudDoc = null;
  try {
    const snap = await getDoc(userDocRef);
    if (snap.exists()) cloudDoc = snap.data();
  } catch (e) { /* sin conexión: seguimos con lo local, se reintentará */ }

  if (!cloudDoc) {
    // Documento nuevo: sembrar desde lo que ya haya en localStorage de este navegador.
    const seeded = { updatedAt: serverTimestamp(), createdAt: serverTimestamp(), schemaVersion: 1, email: user.email || '' };
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('rm:cloud-synced:')) return; // marcador local de control, no se sincroniza
      if (k.startsWith('rm:') || k.startsWith('flashcard-progress:')) seeded[k] = rawLocalGet(k, null);
    });
    try { await setDoc(userDocRef, seeded, { merge: true }); } catch (e) {}
    localStorage.setItem(syncedMarkerKey, '1');
    return;
  }

  // Mantiene el correo (y, si falta por ser una cuenta anterior a este campo, la fecha de alta)
  // siempre al día, sin importar si este dispositivo ya se fusionó antes.
  const profilePatch = { email: user.email || '' };
  if (!cloudDoc.createdAt) profilePatch.createdAt = serverTimestamp();
  try { await setDoc(userDocRef, profilePatch, { merge: true }); } catch (e) {}

  if (alreadySynced) return; // ya se fusionó antes en este dispositivo; operar normal.

  // Fusionar cada campo de la nube con lo local, campo por campo, y escribir el resultado.
  const merged = {};
  Object.keys(cloudDoc).forEach(k => {
    if (k === 'updatedAt' || k === 'schemaVersion' || k === 'createdAt' || k === 'email') return;
    const localVal = rawLocalGet(k, undefined);
    merged[k] = mergeValue(k, localVal, cloudDoc[k]);
    mirror[k] = merged[k];
    rawLocalSet(k, merged[k]);
  });
  merged.updatedAt = serverTimestamp();
  merged.schemaVersion = 1;
  merged.email = user.email || '';
  try { await setDoc(userDocRef, merged, { merge: true }); } catch (e) {}
  localStorage.setItem(syncedMarkerKey, '1');
}

/* ---------- Panel de administración: lista de todos los usuarios registrados ---------- */
export async function fetchAllUsers() {
  const snap = await getDocs(collection(db, 'users'));
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}

window.addEventListener('visibilitychange', () => { if (document.hidden) flushPendingWrites(); });
window.addEventListener('beforeunload', () => { flushPendingWrites(); });
window.addEventListener('online', () => flushPendingWrites());
