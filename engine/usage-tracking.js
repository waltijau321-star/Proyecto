// engine/usage-tracking.js
// Analítica de uso mínima: solo cuenta (secciones visitadas, temas abiertos,
// inicios/finalizaciones de quiz/examen/fichas/caso). Nada de terceros, nada de contenido
// de las respuestas ni identificación del usuario. Se informa en los términos y condiciones,
// no es una preferencia configurable.
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
