/* ResidenteMed — Service Worker
   Estrategia: cache-first para el "app shell" y los módulos, con actualización en segundo plano.
   Sube CACHE_VERSION cuando cambies archivos del engine para forzar el refresco. */
const CACHE_VERSION = 'residentemed-v33';
const CORE = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './engine/styles.css',
  './engine/study-view.js',
  './engine/calculators.js',
  './engine/general-calc.js',
  './engine/calendar.js',
  './engine/protocols.js',
  './engine/home.js',
  './engine/schedule-import.js',
  './engine/infusion-calc.js',
  './engine/vendor/pdfjs/pdf.min.mjs',
  './engine/vendor/pdfjs/pdf.worker.min.mjs',
  './topics/registry.js',
  './topics/temario-index.js',
  './topics/cirrosis-hepatica/content.js',
  './topics/cirrosis-hepatica/calculators.js',
  './topics/cirrosis-hepatica/study.js',
  './topics/cirrosis-hepatica/assets/aclf-figura2-easl2023.png',
  './topics/sepsis/content.js',
  './topics/sepsis/calculators.js',
  './topics/sepsis/study.js',
  './topics/vasopresores-sedantes/content.js',
  './topics/vasopresores-sedantes/calculators.js',
  './topics/vasopresores-sedantes/study.js',
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

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
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
