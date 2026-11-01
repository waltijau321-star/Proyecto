// engine/usage-tracking.js
// Analítica de uso mínima: solo cuenta (secciones visitadas, temas abiertos,
// inicios/finalizaciones de quiz/examen/fichas/caso). Nada de terceros y nada del contenido de
// las respuestas. Lo que SÍ queda asociado a la persona: los contadores se guardan con syncSet,
// o sea en users/{uid}, el mismo documento que lleva el correo, el nombre y el hospital, y
// Admin los muestra por usuario. Es deliberado y está informado en los términos y condiciones;
// no es una preferencia configurable. (El comentario anterior decía "ni identificación del
// usuario", que no era cierto.)
import { syncGet, syncSet } from './cloud-sync.js';

const STATS_KEY = 'rm:usage-stats';

function bump(path) {
  const stats = syncGet(STATS_KEY, {});
  const parts = path.split('.');
  let node = stats;
  for (let i = 0; i < parts.length - 1; i++) {
    node[parts[i]] = node[parts[i]] || {};
    node = node[parts[i]];
  }
  const leaf = parts[parts.length - 1];
  node[leaf] = (node[leaf] || 0) + 1;
  stats.lastActive = Date.now();
  syncSet(STATS_KEY, stats);
}

export function trackSection(sec) { bump('sections.' + sec); }
export function trackTopic(topicId) { bump('topics.' + topicId); }
export function trackEvent(name) { bump('events.' + name); }
