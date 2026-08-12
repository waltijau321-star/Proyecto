// engine/logo-splash.js
// Animación de bienvenida: las piezas del logo (pulmones, corazón+tráquea, riñones) entran
// desde afuera y se ensamblan en el logo de MIOsler. Se muestra una sola vez por sesión de
// navegador (sessionStorage, no localStorage: se repite si cierras el navegador y vuelves),
// justo mientras arranca la app y antes de mostrar Inicio (ver app.js → bootApp()).
// Respeta prefers-reduced-motion (no anima nada, resuelve directo) — mismo criterio que
// animateRing() en home.js.
//
// Las piezas (icons/logo-pieces/*.png) salen de separar por conectividad de píxeles el ícono
// original (icons/icon-512.png, ya sin fondo) — ver .claude/skills si se necesita regenerarlas
// a partir de un logo nuevo.
const SHOWN_KEY = 'rm:splash-shown';
const CANVAS = 512; // lienzo original del que salieron las piezas
const DISPLAY = 220; // tamaño final del logo ensamblado en pantalla, px

// x/y/w/h = posición y tamaño de la pieza dentro del lienzo de 512×512 del ícono original.
// dx/dy = dirección desde la que entra (se multiplica por una distancia al armar la animación).
const PIECES = [
  { file: 'pulmon-izq.png', x: 40, y: 65, w: 180, h: 222, dx: -1, dy: -0.5 },
  { file: 'pulmon-der.png', x: 274, y: 65, w: 180, h: 222, dx: 1, dy: -0.5 },
  { file: 'centro.png', x: 147, y: 62, w: 195, h: 416, dx: 0, dy: -1 },
  { file: 'rinon-izq.png', x: 39, y: 276, w: 127, h: 154, dx: -1, dy: 1 },
  { file: 'rinon-der.png', x: 328, y: 276, w: 127, h: 151, dx: 1, dy: 1 }
];
const STAGGER_MS = 90;
const TRAVEL_PX = 130;

export function maybeShowSplash() {
  return new Promise((resolve) => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || sessionStorage.getItem(SHOWN_KEY)) { resolve(); return; }
    sessionStorage.setItem(SHOWN_KEY, '1');

    const scale = DISPLAY / CANVAS;
    const overlay = document.createElement('div');
    overlay.className = 'splash-overlay';
    overlay.innerHTML = `
      <div class="splash-stage" style="width:${DISPLAY}px;height:${DISPLAY}px;">
        ${PIECES.map(p => {
          const rot = p.dx < 0 ? -10 : p.dx > 0 ? 10 : 0;
          return `<img class="splash-piece" src="icons/logo-pieces/${p.file}" alt="" width="${Math.round(p.w * scale)}" height="${Math.round(p.h * scale)}"
            style="left:${p.x * scale}px; top:${p.y * scale}px; width:${p.w * scale}px; height:${p.h * scale}px;
              --dx:${p.dx * TRAVEL_PX}px; --dy:${p.dy * TRAVEL_PX}px; --rot:${rot}deg;">`;
        }).join('')}
      </div>
      <div class="splash-word">MIOsler</div>`;
    document.body.appendChild(overlay);

    const imgs = overlay.querySelectorAll('.splash-piece');
    // Doble rAF: deja que el navegador pinte el estado inicial (piezas afuera, invisibles)
    // antes de aplicar la transición al estado final — si no, algunos navegadores se saltan
    // la animación y aparece todo ya armado, sin transición. rAF no se dispara en pestañas en
    // segundo plano (o paneles sin compositing activo) — sin red de seguridad las piezas
    // quedarían invisibles indefinidamente. animate() es idempotente, así que un setTimeout de
    // respaldo no rompe nada si el rAF sí llegó a correr primero (mismo patrón que
    // animateRing() en home.js).
    let animated = false;
    const animate = () => {
      if (animated) return;
      animated = true;
      imgs.forEach((img, i) => {
        img.style.transitionDelay = (i * STAGGER_MS) + 'ms';
        img.classList.add('in');
      });
      // El resto de la secuencia (esperar a que asiente + salir) se agenda a partir de
      // cuándo la animación arrancó de verdad, no desde el llamado a maybeShowSplash() — si
      // arrancó tarde por el respaldo de setTimeout, igual tiene su tiempo completo en pantalla.
      const settleMs = STAGGER_MS * PIECES.length + 700 + 550;
      setTimeout(() => {
        overlay.classList.add('leaving');
        setTimeout(() => { overlay.remove(); resolve(); }, 420);
      }, settleMs);
    };
    requestAnimationFrame(() => requestAnimationFrame(animate));
    setTimeout(animate, 200);
  });
}
