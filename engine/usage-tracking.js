// engine/usage-tracking.js
// Analítica de uso mínima y opt-in: solo cuenta (secciones visitadas, temas abiertos,
// inicios/finalizaciones de quiz/examen/fichas/caso). Nada de terceros, nada de contenido
// de las respuestas. Si el usuario no activó "Analítica de uso" en el menú de cuenta, bump()
// no escribe nada, ni siquiera localmente.
import { syncGet, syncSet } from './cloud-sync.js';

const OPT_IN_KEY = 'rm:analytics-opt-in';
const STATS_KEY = 'rm:usage-stats';

export function isAnalyticsEnabled() { return !!syncGet(OPT_IN_KEY, false); }
export function setAnalyticsEnabled(val) { syncSet(OPT_IN_KEY, !!val); }

function bump(path) {
  if (!isAnalyticsEnabled()) return;
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
