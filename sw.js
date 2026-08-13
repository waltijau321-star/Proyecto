/* ResidenteMed: Service Worker
   Estrategia: cache-first para el "app shell" y los módulos, con actualización en segundo plano.
   CACHE_VERSION se calcula automáticamente a partir del contenido de CORE: correr
   .claude/bump-cache-version.ps1 después de cambiar cualquier archivo cacheado. */
const CACHE_VERSION = 'residentemed-2e4831b6a2';
const CORE = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './engine/styles.css',
  './engine/study-view.js',
  './engine/calculators.js',
  './engine/general-calc.js',
  './engine/protocols.js',
  './engine/home.js',
  './engine/infusion-calc.js',
  './engine/firebase-config.js',
  './engine/auth.js',
  './engine/cloud-sync.js',
  './engine/admin.js',
  './engine/account-menu.js',
  './engine/exam-mode.js',
  './engine/flashcard-deck.js',
  './engine/quiz-srs.js',
  './engine/usage-tracking.js',
  './engine/logo-splash.js',
  './icons/logo-pieces/pulmon-izq.png',
  './icons/logo-pieces/pulmon-der.png',
  './icons/logo-pieces/centro.png',
  './icons/logo-pieces/rinon-izq.png',
  './icons/logo-pieces/rinon-der.png',
  './topics/registry.js',
  './topics/temario-index.js',
  './topics/cirrosis-hepatica/content.js',
  './topics/cirrosis-hepatica/calculators.js',
  './topics/cirrosis-hepatica/study.js',
  './topics/cirrosis-hepatica/assets/aclf-figura2-easl2023.png',
  './topics/cirrosis-hepatica/assets/fibrogenesis-ilustrativo-ia.png',
  './topics/sepsis/content.js',
  './topics/sepsis/calculators.js',
  './topics/sepsis/study.js',
  './topics/vasopresores-sedantes/content.js',
  './topics/vasopresores-sedantes/calculators.js',
  './topics/vasopresores-sedantes/study.js',
  './topics/historia-clinica/content.js',
  './topics/historia-clinica/calculators.js',
  './topics/historia-clinica/study.js',
  './topics/historia-clinica/assets/dolor-referido-infografia.png',
  './topics/historia-clinica/assets/socrates-ilustracion.png',
  './topics/exploracion-cardiovascular/content.js',
  './topics/exploracion-cardiovascular/calculators.js',
  './topics/exploracion-cardiovascular/study.js',
  './topics/exploracion-cardiovascular/assets/focos-auscultacion-cardiaca.png',
  './topics/exploracion-respiratoria/content.js',
  './topics/exploracion-respiratoria/calculators.js',
  './topics/exploracion-respiratoria/study.js',
  './topics/exploracion-respiratoria/assets/auscultacion-pulmonar-topografia.png',
  './topics/exploracion-respiratoria/assets/patrones-respiratorios-patologicos.png',
  './topics/exploracion-abdominal/content.js',
  './topics/exploracion-abdominal/calculators.js',
  './topics/exploracion-abdominal/study.js',
  './topics/exploracion-abdominal/assets/regiones-topograficas-abdomen.png',
  './topics/exploracion-abdominal/assets/matidez-cambiante.png',
  './topics/exploracion-neurologica/content.js',
  './topics/exploracion-neurologica/calculators.js',
  './topics/exploracion-neurologica/study.js',
  './topics/exploracion-neurologica/assets/escala-glasgow.png',
  './topics/exploracion-neurologica/assets/dermatomas-referencia-clinica.png',
  './topics/exploracion-neurologica/assets/signos-meningeos.png',
  './topics/exploracion-piel-faneras/content.js',
  './topics/exploracion-piel-faneras/calculators.js',
  './topics/exploracion-piel-faneras/study.js',
  './topics/exploracion-piel-faneras/assets/lesiones-primarias.png',
  './topics/exploracion-piel-faneras/assets/lesiones-secundarias.png',
  './topics/exploracion-piel-faneras/assets/patrones-distribucion.png',
  './topics/exploracion-piel-faneras/assets/abcde-melanoma.png',
  './topics/exploracion-piel-faneras/assets/hallazgos-ungueales.png',
  './topics/exploracion-piel-faneras/assets/patrones-alopecia.png',
  './topics/exploracion-osteoarticular/content.js',
  './topics/exploracion-osteoarticular/calculators.js',
  './topics/exploracion-osteoarticular/study.js',
  './topics/exploracion-osteoarticular/assets/maniobras-rodilla-liquido.png',
  './topics/exploracion-osteoarticular/assets/6p-isquemia-arterial.png',
  './topics/exploracion-cabeza-cuello/content.js',
  './topics/exploracion-cabeza-cuello/calculators.js',
  './topics/exploracion-cabeza-cuello/study.js',
  './topics/exploracion-cabeza-cuello/assets/cadenas-ganglionares-cervicales.png',
  './topics/exploracion-cabeza-cuello/assets/ganglio-virchow.png',
  './topics/signos-clasicos/content.js',
  './topics/signos-clasicos/calculators.js',
  './topics/signos-clasicos/study.js',
  './topics/signos-clasicos/assets/battle-ojos-mapache.png',
  './topics/enfermedad-cerebrovascular/content.js',
  './topics/enfermedad-cerebrovascular/calculators.js',
  './topics/enfermedad-cerebrovascular/study.js',
  './topics/enfermedad-cerebrovascular/assets/territorios-vasculares-sindromes.png',
  './topics/enfermedad-cerebrovascular/assets/aspects-guia-visual.png',
  './topics/estado-epileptico/content.js',
  './topics/estado-epileptico/calculators.js',
  './topics/estado-epileptico/study.js',
  './topics/cefaleas/content.js',
  './topics/cefaleas/calculators.js',
  './topics/cefaleas/study.js',
  './protocols/protocols.js',
  './protocols/vpo-calc.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

const FIREBASE_API_HOSTS = ['identitytoolkit.googleapis.com', 'securetoken.googleapis.com', 'firestore.googleapis.com', 'firebaseio.com'];

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Llamadas reales a la API de Firebase (auth/firestore): siempre a la red, nunca cache-first
  // (tokens de sesión y datos en vivo no deben servirse desde caché).
  const url = new URL(req.url);
  if (FIREBASE_API_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith('.' + h))) {
    e.respondWith(fetch(req));
    return;
  }

  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        // Cachea respuestas válidas (mismo origen y fuentes de Google) para uso offline.
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
