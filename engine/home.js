// engine/home.js
// Página de Inicio: portada de la app. No conoce el contenido de cada tema en detalle,
// solo consume un resumen que le pasa app.js (que sí conoce todos los temas y secciones).
import { getAnsweredSummary, resetAnsweredSummary, isTopicReviewed, setTopicReviewed } from './study-view.js';
import { syncGet, syncSet } from './cloud-sync.js';
import { leerDiasDeEstudio, resumenRacha } from './racha.js';
import { mountExamSummary } from './exam-mode.js';
import { mountFlashcardDeck, resumenVencidas } from './flashcard-deck.js';

let LAST_ROOT = null, LAST_OPTS = null;
let examEditMode = false;

function ring(correct, incorrect) {
  const answered = correct + incorrect;
  const size = 132, stroke = 14, r = (size - stroke) / 2, cx = size / 2, cy = size / 2;
  const circ = 2 * Math.PI * r;
  if (!answered) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
    </svg>`;
  }
  const correctLen = circ * (correct / answered);
  const incorrectLen = circ * (incorrect / answered);
  // Los arcos arrancan "vacíos" (stroke-dasharray="0 circ") — animateRing() los completa hasta
  // su valor real justo después del montaje, vía atributos SVG con transición CSS (ring-arc).
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform:rotate(-90deg);">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
    <circle class="ring-arc" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--prog-bad)" stroke-width="${stroke}"
      data-len="${incorrectLen}" data-gap="${circ - incorrectLen}" data-offset="${-correctLen}"
      stroke-dasharray="0 ${circ}" stroke-dashoffset="0"/>
    <circle class="ring-arc" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--prog-ok)" stroke-width="${stroke}"
      data-len="${correctLen}" data-gap="${circ - correctLen}" data-offset="0"
      stroke-dasharray="0 ${circ}" stroke-linecap="butt"/>
  </svg>`;
}

// Anima los arcos del anillo de "vacío" a su valor real en el siguiente frame (doble rAF para
// asegurar que el navegador pinte el estado inicial antes de aplicar la transición). Respeta
// prefers-reduced-motion saltando directo al valor final sin animar.
function animateRing(root) {
  const arcs = root.querySelectorAll('.ring-arc');
  if (!arcs.length) return;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const apply = c => {
    c.setAttribute('stroke-dasharray', `${c.dataset.len} ${c.dataset.gap}`);
    c.setAttribute('stroke-dashoffset', c.dataset.offset);
  };
  if (reduceMotion) { arcs.forEach(apply); return; }
  // rAF no se dispara en pestañas en segundo plano (o paneles sin compositing activo) —
  // sin red de seguridad el anillo quedaría vacío indefinidamente hasta que la pestaña
  // recupere foco. apply() es idempotente, así que un setTimeout de respaldo no rompe nada
  // si el rAF sí llegó a correr primero; solo garantiza que el valor final siempre se aplique.
  let done = false;
  const finish = () => { if (done) return; done = true; arcs.forEach(apply); };
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (done) return;
    done = true;
    arcs.forEach(c => { c.style.transition = 'stroke-dasharray .9s var(--ease), stroke-dashoffset .9s var(--ease)'; apply(c); });
  }));
  setTimeout(finish, 400);
}

/* ---------------- Barra de progreso apilada (bloques del temario y portada) ----------------
   Verde lo acertado, rojo lo fallado, gris lo que falta. Los tres trozos se miden sobre el
   mismo total, PREGUNTAS DISTINTAS del banco, no intentos: el color sale de la caja de Leitner
   de cada pregunta (ver answeredBreakdown() en engine/quiz-srs.js), que dice como fue el ultimo
   intento. Con intentos los trozos podrian sumar mas que el banco, y entonces no seria una
   barra de progreso. El aro de "Tu progreso" si cuenta intentos, y por eso su porcentaje y el
   de la barra no tienen por que coincidir; el modal de ayuda lo dice. */
function progressBar(acertadas, falladas, total, label) {
  if (!total) return '';
  const pA = ((acertadas / total) * 100).toFixed(2);
  const pF = ((falladas / total) * 100).toFixed(2);
  const hecho = Math.round(((acertadas + falladas) / total) * 100);
  // El nombre accesible lleva los tres numeros, no solo el porcentaje: quien no distingue el
  // verde del rojo (o no ve la barra) se queda si no con un dato que no dice que te falta.
  const detalle = `${label}: ${acertadas} acertadas, ${falladas} falladas, ${total - acertadas - falladas} sin contestar`;
  return `<div class="prog-bar" role="progressbar" aria-valuenow="${hecho}" aria-valuemin="0" aria-valuemax="100" aria-label="${detalle}" title="${detalle}">
    <span class="prog-ok" style="width:${pA}%"></span><span class="prog-bad" style="width:${pF}%"></span>
  </div>`;
}

function progressLegend(acertadas, falladas, pendientes) {
  return `<div class="prog-legend">
    <span><i class="prog-dot ok"></i>${acertadas} preguntas acertadas</span>
    <span><i class="prog-dot bad"></i>${falladas} falladas</span>
    <span><i class="prog-dot none"></i>${pendientes} sin contestar</span>
  </div>`;
}

/* ---------------- La semana a la vista (la racha, en semanas) ----------------
   Siete columnas, una por dia de la semana en curso, y debajo una sola frase que dice en que
   punto esta. Lo que decide todo esta en engine/racha.js; aqui solo se pinta.
   Los dias no se distinguen SOLO por color: el estudiado lleva palomita sobre relleno, el que
   paso vacio es un aro, el que no ha llegado es un aro punteado y el de hoy lleva un anillo
   extra. Quien no distingue el verde del gris sigue leyendo la tira, y quien no la ve tiene la
   frase, que lleva los mismos numeros. */
export function semanaHTML(resumen) {
  const dias = resumen.semana.map(d => {
    const num = String(Number(d.dia.slice(8, 10)));
    const estado = d.estudiado ? 'estudiado' : (d.futuro ? 'futuro' : 'vacio');
    const dicho = d.estudiado ? 'estudiaste' : (d.futuro ? 'aún no llega' : 'sin estudiar');
    const etiqueta = d.nombre + ' ' + num + ', ' + dicho + (d.esHoy ? ', hoy' : '');
    return `<span class="hs-dia ${estado}${d.esHoy ? ' hoy' : ''}" role="img" aria-label="${etiqueta}" title="${etiqueta}">
      <i class="hs-ini">${d.inicial}</i><b class="hs-punto">${d.estudiado ? '✓' : ''}</b></span>`;
  }).join('');
  // La racha se anuncia a partir de DOS semanas: "1 semana seguida" es solo esta semana, y
  // ponerle nombre de racha a eso abarata la palabra justo cuando hay que hacerla valer.
  const chip = resumen.rachaSemanas >= 2
    ? `<span class="hs-racha">${resumen.rachaSemanas} semanas seguidas</span>` : '';
  return `<div class="home-semana">
    <div class="hs-head"><span class="hs-titulo">Tu semana</span>${chip}</div>
    <div class="hs-tira" role="group" aria-label="Días de estudio de esta semana">${dias}</div>
    <p class="hs-msg">${resumen.mensaje}</p>
  </div>`;
}

// Placeholder mientras mountFlashcardDeck()/mountExamSummary() resuelven su carga (ambas son
// async: leen progreso vía syncGet/Firestore). Aproxima la forma final (2 stats + botón) sin
// tener que conocer los datos reales todavía.
function loadingSkeleton() {
  return `<div class="home-progress-stats" aria-hidden="true">
    <div class="home-stat"><span class="home-stat-n skeleton">00</span><span class="home-stat-l skeleton">Cargando</span></div>
    <div class="home-stat"><span class="home-stat-n skeleton">00</span><span class="home-stat-l skeleton">Cargando</span></div>
  </div>`;
}

/* ---------------- La accion del dia ("Que estudio hoy") ----------------
   Inicio pintaba el estado (cuanto llevas) pero no decia que hacer, y la tarjeta de la derecha
   quedaba medio vacia. Para un R1 que abre la app entre dos pacientes, esa es LA pregunta.
   Se decide solo con lo que ya hay en memoria (el registro y el almacen del repaso espaciado),
   sin cargar ningun tema, que es la regla de Inicio.
   El orden no es caprichoso: primero REPASAR LO VENCIDO, luego terminar lo empezado (es lo que
   desbloquea las fichas del tema, o sea lo que convierte una visita en un habito), luego empezar
   algo, y solo al final el examen simulado, que es para quien ya no tiene banco pendiente.

   Lo vencido va arriba por una asimetria real, no por gusto: una pregunta sin contestar sigue
   ahi manana, igual de contestable; una ficha vencida se esta olvidando mientras no se repasa.
   Es lo unico de esta portada que se PIERDE por no hacerlo hoy, asi que es lo unico que merece
   el primer sitio. Y no hay umbral (una sola ficha vencida ya gana) porque el umbral honesto
   seria el del olvido, que es uno, y porque repasar una ficha cuesta segundos: en cuanto se
   repasa, la portada pasa sola a la accion siguiente. */
export function accionDelDia(topics, temarioBlocks, mazo) {
  if (mazo && mazo.vencidas > 0) {
    const nombres = (mazo.temas || []).slice(0, 2).map(t => t.titulo).filter(Boolean);
    const otros = Math.max(0, (mazo.temas || []).length - nombres.length);
    // "Asma y EPOC" con dos, "Asma, EPOC y 2 temas más" con mas: se nombran dos como mucho y el
    // resto se cuenta, para que el texto de la portada no crezca con el mazo.
    const partes = nombres.concat(otros ? [`${otros} tema${otros === 1 ? '' : 's'} más`] : []);
    const de = partes.length > 1
      ? partes.slice(0, -1).join(', ') + ' y ' + partes[partes.length - 1]
      : (partes[0] || '');
    const una = mazo.vencidas === 1;
    return {
      tipo: 'repasar',
      etiqueta: 'Te toca repasar',
      titulo: una ? '1 ficha vencida' : `${mazo.vencidas} fichas vencidas`,
      detalle: (nombres.length ? `De ${de}. ` : '')
        + (una ? 'Va antes que el banco' : 'Van antes que el banco')
        + ': las preguntas siguen ahí mañana, esto se está olvidando.',
      boton: una ? 'Repasarla →' : 'Repasarlas →'
    };
  }
  const conBanco = (topics || []).filter(t => t.quizCount > 0);
  if (!conBanco.length) return null;
  const empezados = conBanco.filter(t => (t.contestadas || 0) > 0);
  // Entre los temas a medias, el mas avanzado: es el que esta mas cerca de desbloquear sus fichas.
  const aMedias = empezados
    .filter(t => t.contestadas < t.quizCount)
    .sort((a, b) => (b.contestadas / b.quizCount) - (a.contestadas / a.quizCount));
  if (aMedias.length) {
    const t = aMedias[0];
    const faltan = t.quizCount - t.contestadas;
    return {
      tipo: 'seguir', topicId: t.id, etiqueta: 'Sigue donde lo dejaste', titulo: t.titulo,
      detalle: `Te ${faltan === 1 ? 'falta' : 'faltan'} ${faltan} pregunta${faltan === 1 ? '' : 's'} del banco. Al terminarlo se desbloquean las fichas de repaso de este tema.`,
      boton: 'Seguir →'
    };
  }
  const sinEmpezar = conBanco.filter(t => !(t.contestadas || 0));
  if (sinEmpezar.length) {
    const t = empezados.length ? sinEmpezar[0] : (temaDeEntrada(temarioBlocks, conBanco) || sinEmpezar[0]);
    return {
      tipo: empezados.length ? 'siguiente' : 'empezar',
      topicId: t.id,
      etiqueta: empezados.length ? 'Siguiente tema' : 'Empieza por aquí',
      titulo: t.titulo,
      detalle: `${t.quizCount} preguntas de opción múltiple, cada una con su explicación.`,
      boton: 'Abrir el banco →'
    };
  }
  return {
    tipo: 'aldia', etiqueta: 'Estás al día', titulo: 'Respondiste todo el banco',
    detalle: 'Un examen simulado mezcla temas y te dice dónde estás flojo.',
    boton: 'Examen simulado →'
  };
}

// Por donde se empieza cuando no hay nada contestado: el primer tema construido del temario,
// que es Semiologia, y no el primero del registro (que es el orden en que se fueron escribiendo).
function temaDeEntrada(temarioBlocks, conBanco) {
  const porId = {};
  conBanco.forEach(t => { porId[t.id] = t; });
  for (const b of (temarioBlocks || []).filter(x => !x.quickAccess)) {
    for (const c of blockClusters(b)) {
      for (const it of c.items) {
        if (it && typeof it !== 'string' && porId[it.topicId]) return porId[it.topicId];
      }
    }
  }
  return null;
}

function accionDelDiaHTML(accion) {
  if (!accion) return '';
  // El repaso no cuelga de ningun tema: abre el mazo con las vencidas de todos, que es lo que
  // hace `rmRepasarVencidas` (flashcard-deck.js), registrado al cargar el modulo y no al montar
  // el mazo, para que este boton funcione al primer clic.
  const onclick = accion.tipo === 'repasar' ? 'rmRepasarVencidas()'
    : accion.topicId ? `rmEstudiarHoy('${accion.topicId}')` : 'rmAbrirConfigExamen()';
  return `<div class="home-hoy">
    <span class="home-hoy-tag">${accion.etiqueta}</span>
    <h3 class="home-hoy-titulo">${accion.titulo}</h3>
    <p class="home-hoy-detalle">${accion.detalle}</p>
    <button class="home-hoy-btn" onclick="${onclick}">${accion.boton}</button>
  </div>`;
}

/* ---------------- Temario completo (acordeón) ---------------- */
let wipIndex = [];

function wipIconSVG() {
  return `<svg viewBox="0 0 64 64" fill="none" stroke="var(--modal-accent,var(--accent))" stroke-width="1.6">
    <circle cx="32" cy="32" r="27" stroke-dasharray="3 6" opacity=".45"/>
    <path transform="translate(16,15) scale(1.3)" fill="var(--modal-accent,var(--accent))" stroke="none" opacity=".85"
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>`;
}

function wipModalHTML(entry) {
  return `<div class="wip-modal">
    ${wipIconSVG()}
    <h2>Sección en desarrollo</h2>
    <p>Este subtema del temario todavía no tiene contenido construido en la app. Se irá agregando en próximas actualizaciones, igual que los temas ya disponibles.</p>
    <span class="wip-scope">${entry.blockTitle} · ${entry.clusterName}</span>
  </div>`;
}

function openWip(idx) {
  const entry = wipIndex[idx];
  if (!entry) return;
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#8d8570');
  m.innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>${wipModalHTML(entry)}`;
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// La fila era un <div onclick>: se abria con el raton y con nada mas. Ni el tabulador la
// alcanzaba ni un lector de pantalla la anunciaba como algo que se pueda abrir, y como el boton
// "Repasar" de dentro si era un <button>, quien navega con teclado podia marcar un tema como
// repasado pero no abrirlo. Ahora el texto clicable es un <button> de verdad, hermano del de
// repasar (y no su contenedor: un boton dentro de otro boton no es HTML valido), asi que el
// teclado, el foco y el lector de pantalla funcionan sin codigo propio.
export function temarioItemRow(item, blockTitle, clusterName, topicsById) {
  const label = typeof item === 'string' ? item : item.label;
  const topicId = typeof item === 'string' ? null : item.topicId;
  const topic = topicId ? topicsById[topicId] : null;
  if (topic) {
    const reviewed = isTopicReviewed(topicId);
    return `<div class="temario-item available" style="--tc:${(topic.accent || '#2f6f5e') + '22'};--tc-dark:${topic.accent || '#2f6f5e'}">
      <button type="button" class="ti-open" onclick="rmGoTopic('${topicId}')">
        <span class="ti-label">${label}</span>
        <span class="ti-tag">Abrir</span>
      </button>
      <button type="button" class="ti-review${reviewed ? ' checked' : ''}" data-topic="${topicId}" aria-pressed="${reviewed}" title="Marcar como repasado" onclick="rmToggleReviewed('${topicId}')">${reviewed ? '✓ Repasado' : 'Repasar'}</button>
    </div>`;
  }
  const idx = wipIndex.length;
  wipIndex.push({ blockTitle, clusterName });
  return `<div class="temario-item wip">
    <button type="button" class="ti-open" onclick="rmOpenWip(${idx})">
      <span class="ti-label">${label}</span><span class="ti-tag">En desarrollo</span>
    </button></div>`;
}

// Un bloque normal trae `clusters` (lista plana). Un bloque de acceso rápido como R1
// puede traer `groups` en su lugar — cada grupo es un tema con sus propios clusters,
// para que también se pueda abrir/cerrar de forma independiente. blockClusters() junta
// los clusters de cualquiera de las dos formas para calcular la cobertura del bloque.
function blockClusters(b) {
  return b.groups ? b.groups.flatMap(g => g.clusters) : b.clusters;
}
// Dos recuentos distintos y conviene no mezclarlos: `built`/`total`/`pct` son SUBTEMAS del
// temario (items de la lista, y un mismo tema puede estar colgado de varios: `neumonia` aparece
// en cinco items y `deterioro-cognitivo-demencias` en cinco mas), mientras que el progreso del
// usuario se mide en PREGUNTAS y por eso suma cada tema UNA sola vez. Sin ese `Set`, un bloque
// con temas repetidos contaria su banco varias veces y la barra prometeria mas preguntas de las
// que existen.
export function blockCoverage(b, topicsById) {
  const allItems = blockClusters(b).flatMap(c => c.items);
  const total = allItems.length;
  const builtIds = allItems.filter(it => typeof it !== 'string' && topicsById[it.topicId]).map(it => it.topicId);
  const built = builtIds.length;
  const pct = total ? Math.round((built / total) * 100) : 0;
  const unicos = [...new Set(builtIds)];
  const preguntas = unicos.reduce((n, id) => n + (topicsById[id].quizCount || 0), 0);
  const acertadas = unicos.reduce((n, id) => n + (topicsById[id].acertadas || 0), 0);
  const falladas = unicos.reduce((n, id) => n + (topicsById[id].falladas || 0), 0);
  const contestadas = acertadas + falladas;
  return { total, built, pct, preguntas, acertadas, falladas, contestadas };
}

// Texto de la etiqueta del bloque: el progreso del usuario, no la cobertura de contenido (que
// vive dentro del bloque, abierto). El % de acierto se calcula sobre lo contestado, porque
// medirlo sobre el banco entero castigaria por no haber empezado.
export function blockChip(cov) {
  if (!cov.preguntas) return 'Sin preguntas todavía';
  if (!cov.contestadas) return `0/${cov.preguntas} contestadas`;
  const pct = Math.round((cov.acertadas / cov.contestadas) * 100);
  return `${cov.contestadas}/${cov.preguntas} contestadas · ${pct}% acertadas`;
}

function clusterHTML(c, blockTitle, topicsById) {
  return `
    <div class="temario-cluster">
      <h5>${c.name}</h5>
      ${c.items.map(it => temarioItemRow(it, blockTitle, c.name, topicsById)).join('')}
    </div>`;
}

// Que bloques del temario estan desplegados. Vive fuera de mountHome() a proposito: cualquier
// cosa que vuelva a montar Inicio (guardar la fecha del examen, por ejemplo) cerraba de golpe
// todo lo que el usuario tenia abierto y lo dejaba mirando otra parte de la lista.
const bloquesAbiertos = new Set();

function temarioTreeHTML(blocks, topicsById) {
  wipIndex = [];
  return `<div class="temario-list">${blocks.map(b => {
    const cov = blockCoverage(b, topicsById);
    const body = b.groups
      ? b.groups.map(g => `
        <details class="temario-group">
          <summary><span class="temario-group-title">${g.name}</span></summary>
          ${g.clusters.map(c => clusterHTML(c, b.title, topicsById)).join('')}
        </details>`).join('')
      : b.clusters.map(c => clusterHTML(c, b.title, topicsById)).join('');
    return `
    <details class="temario-block"${bloquesAbiertos.has(b.title) ? ' open' : ''}>
      <summary>
        <div class="temario-block-head">
          <span class="temario-block-title">${b.title}</span>
          <span class="temario-block-cov">${blockChip(cov)}</span>
        </div>
        ${progressBar(cov.acertadas, cov.falladas, cov.preguntas, 'Tu progreso en ' + b.title)}
      </summary>
      <div class="temario-block-cobertura">
        <span>${cov.built}/${cov.total} subtemas construidos · ${cov.pct}%</span>
        <div class="temario-block-bar" role="progressbar" aria-valuenow="${cov.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Contenido construido de ${b.title}"><span style="width:${cov.pct}%"></span></div>
      </div>
      <p class="temario-block-intro">${b.intro}</p>
      ${body}
    </details>`;
  }).join('')}</div>`;
}

function openResetConfirm() {
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', '#8c3a34');
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#8c3a34;">Reiniciar progreso</span>
    <h2>¿Estás seguro?</h2>
    <p class="fbody" style="color:var(--ink-dim);margin-bottom:20px;">Se borrará el conteo de intentos correctos e incorrectos de todos los temas, que es lo que muestra el aro. Tu avance en el banco se queda como está: las preguntas que ya contestaste, la barra verde/rojo y el calendario de repaso no se tocan. Esta acción no se puede deshacer.</p>
    <button class="calc-copy" onclick="rmResetProgress()">Sí, reiniciar</button>
    <button class="calc-copy" style="margin-left:8px;" onclick="closeModal()">Cancelar</button>`;
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function resetProgressNow() {
  resetAnsweredSummary();
  window.closeModal();
  if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS);
}

/* ---------------- Cuenta regresiva de examen (persistencia localStorage) ---------------- */
const EXAM_KEY = 'rm:exam-date';
function loadExamDate() { return syncGet(EXAM_KEY, ''); }
function saveExamDateStore(v) { syncSet(EXAM_KEY, v || ''); }
function daysUntilExam(dateStr) {
  const target = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((target - today) / 86400000);
}
function formatExamDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });
}
function examSectionHTML() {
  const dateStr = loadExamDate();
  if (!dateStr || examEditMode) {
    return `<div class="home-exam home-exam-form">
      <p class="home-subhead-note" style="margin:0 0 10px;">${dateStr ? 'Elige la nueva fecha de tu examen.' : 'Agrega la fecha de tu examen para ver cuántos días te faltan.'}</p>
      <div class="home-exam-row">
        <input type="date" id="home-exam-input" class="home-exam-input" aria-label="Fecha de tu examen" value="${dateStr}">
        <button class="home-quick" onclick="rmSaveExamDate()">Guardar</button>
      </div>
    </div>`;
  }
  const days = daysUntilExam(dateStr);
  const label = days > 1 ? 'días para tu examen' : days === 1 ? 'día para tu examen' : days === 0 ? 'Tu examen es hoy' : 'El examen ya pasó';
  return `<div class="home-exam">
    <div class="home-exam-count">${days > 0 ? days : 0}</div>
    <div class="home-exam-body">
      <div class="home-exam-label">${label}</div>
      <div class="home-exam-date">${formatExamDate(dateStr)}</div>
    </div>
    <button class="home-reset" onclick="rmEditExamDate()">Cambiar fecha</button>
  </div>`;
}
/* ---------------- Modales de ayuda ("?" junto a cada bloque de Inicio) ---------------- */
const HELP_CONTENT = {
  progreso: {
    color: '#3d5a73',
    tag: 'Cómo funciona',
    title: 'Tu progreso',
    body: `<p class="fbody" style="color:var(--ink-dim);">"Preguntas en el banco" es el total de preguntas de opción múltiple de todos los temas construidos. "Contestadas" cuenta cuántas de esas ya respondiste al menos una vez (sin importar si acertaste); ese mismo conteo, por tema, es el que desbloquea las fichas de repaso de cada tema. "Temas empezados" son los temas con al menos una pregunta contestada, y "terminados" aquellos cuyo banco ya respondiste completo. "Respuestas correctas"/"Respuestas incorrectas" acumulan todos tus intentos históricos, incluyendo reintentos, y el aro central es su porcentaje: mide cómo respondes, no cuánto llevas.</p>
    <p class="fbody" style="color:var(--ink-dim);">La barra de abajo, y la de cada bloque del Temario, miden otra cosa: cuentan <strong>preguntas</strong>, una sola vez cada una, según cómo te fue la última vez que la respondiste. Verde es la que acertaste, rojo la que fallaste y gris la que todavía no contestas, así que los tres trozos suman el banco entero. Por eso el porcentaje de la barra y el del aro no tienen por qué coincidir: el aro dice cómo respondes, la barra dice cuánto llevas y qué te falta repasar. Una pregunta pasa de rojo a verde en cuanto la aciertas de nuevo.</p>
    <p class="fbody" style="color:var(--ink-dim);">Arriba, <strong>"Tu semana"</strong> marca los días en que respondiste una pregunta o calificaste una ficha. Con <strong>3 días cualesquiera</strong> la semana cuenta como cumplida, y la racha suma <strong>semanas</strong> cumplidas seguidas, no días: una cadena diaria se rompe en la primera guardia de 24 horas, y lo que importa es que vuelvas cada semana, no que no faltes nunca. La semana en curso no rompe la racha mientras no termine, así que un lunes sin estudiar todavía no te quita nada.</p>`
  },
  fichas: {
    color: '#5c4a73',
    tag: 'Cómo funciona',
    title: 'Fichas de repaso',
    body: `<p class="fbody" style="color:var(--ink-dim);">Cada tema tiene su propio mazo de fichas, pero permanece bloqueado hasta que respondas, al menos una vez, todas las preguntas del banco de ese tema. Una vez desbloqueado, las fichas usan repetición espaciada (sistema Leitner de 9 cajas, con intervalos de 0, 1, 3, 7, 14, 30, 60, 120 y 240 días): "Bien" sube la ficha una caja y "Fácil" la sube dos, así que tarda más en volver a aparecer; "Difícil" la deja en la caja en la que está y "Otra vez" la devuelve a la primera. Cada sesión prioriza las fichas vencidas, y cuando tienes alguna vencida la acción del día de la portada te manda a ellas antes que al banco: una pregunta sin contestar sigue ahí mañana, una ficha vencida se está olvidando.</p>`
  },
  examen: {
    color: '#8c3a34',
    tag: 'Cómo funciona',
    title: 'Exámenes simulados',
    body: `<p class="fbody" style="color:var(--ink-dim);">Mezcla preguntas de los temas que elijas (a diferencia del banco de preguntas, que vive dentro de un solo tema) en un examen cronometrado. Puedes fijar cuántas preguntas y la dificultad: por nivel (Fácil/Intermedio/Difícil), Mixta (de todo un poco) o Repaso inteligente (prioriza lo que ya respondiste antes y está vencido para repaso; si no hay nada vencido, arma un examen mixto). Cada examen queda guardado en tu historial con fecha, puntaje y dificultad.</p>`
  }
};
function openHelp(key) {
  const info = HELP_CONTENT[key];
  if (!info) return;
  const m = document.getElementById('modal');
  m.style.setProperty('--modal-accent', info.color);
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:${info.color};">${info.tag}</span>
    <h2>${info.title}</h2>
    ${info.body}`;
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function editExamDate() { examEditMode = true; if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS); }
function saveExamDateNow() {
  const input = document.getElementById('home-exam-input');
  if (!input || !input.value) return;
  saveExamDateStore(input.value);
  examEditMode = false;
  if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS);
}

export function mountHome(root, opts = {}) {
  LAST_ROOT = root;
  LAST_OPTS = opts;
  const { topics = [], totalQuestions = 0, answeredQuestions = 0, navigateToTopic, temarioBlocks = [] } = opts;
  const topicsById = {};
  topics.forEach(t => { topicsById[t.id] = t; });
  window.rmGoTopic = (id, opciones) => navigateToTopic && navigateToTopic(id, opciones);
  // La accion del dia no deja al residente en la portada del tema: lo lleva a Autoevaluacion y le
  // abre el banco. Son los dos clics que separaban "abrir la app" de "responder una pregunta".
  window.rmEstudiarHoy = (id) => navigateToTopic && navigateToTopic(id, { ancla: 'autoevaluacion', quiz: true });
  window.rmOpenResetConfirm = openResetConfirm;
  window.rmResetProgress = resetProgressNow;
  window.rmEditExamDate = editExamDate;
  window.rmSaveExamDate = saveExamDateNow;
  window.rmOpenWip = openWip;
  window.rmOpenHelp = openHelp;
  // Marcar un tema como repasado solo cambia ese boton, no vuelve a montar Inicio: el remonte
  // cerraba todos los bloques del temario y dejaba al usuario perdido en la lista cada vez que
  // marcaba algo. Son varios botones por tema, porque un mismo tema cuelga de varios subtemas
  // del temario, asi que se actualizan todos los que lleven su id.
  window.rmToggleReviewed = (id) => {
    const marcado = !isTopicReviewed(id);
    setTopicReviewed(id, marcado);
    document.querySelectorAll(`.ti-review[data-topic="${id}"]`).forEach(b => {
      b.classList.toggle('checked', marcado);
      b.setAttribute('aria-pressed', String(marcado));
      b.textContent = marcado ? '✓ Repasado' : 'Repasar';
    });
  };

  const { correct, incorrect, answered } = getAnsweredSummary();
  const pct = answered ? Math.round((correct / answered) * 100) : null;
  const bankPct = totalQuestions ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
  // El aro cuenta INTENTOS (`correct`/`incorrect`, con los reintentos dentro) y la barra cuenta
  // PREGUNTAS DISTINTAS por su ultimo resultado, asi que los dos porcentajes pueden no coincidir
  // y es correcto: el aro dice como respondes, la barra dice cuanto banco llevas y en que estado.
  const gAcertadas = topics.reduce((n, t) => n + (t.acertadas || 0), 0);
  const gFalladas = topics.reduce((n, t) => n + (t.falladas || 0), 0);
  const gPendientes = Math.max(0, totalQuestions - gAcertadas - gFalladas);
  // "Empezado" = al menos una pregunta contestada; "terminado" = el banco entero contestado al
  // menos una vez, que es el mismo criterio que desbloquea las fichas del tema (aqui se mide
  // contra `preguntas` del registro, porque Inicio no carga ningun tema).
  const temasEmpezados = topics.filter(t => (t.contestadas || 0) > 0).length;
  const temasTerminados = topics.filter(t => t.quizCount > 0 && (t.contestadas || 0) >= t.quizCount).length;
  // El numero de bloques se CALCULA, igual que `itemCount` en auth.js: escrito a mano se
  // quedo en 14 cuando el temario se renumero a 21, y nadie lo noto. El bloque "R1" no se
  // cuenta, porque es un acceso rapido a items que ya viven en su bloque tematico.
  const bloquesNumerados = temarioBlocks.filter(b => !b.quickAccess).length;
  // La semana sale de un mapa de dias en memoria (`rm:dias-estudio`), asi que no carga ningun
  // tema: la regla de Inicio sigue en pie.
  const racha = resumenRacha(leerDiasDeEstudio());
  // Las fichas vencidas tambien salen del progreso guardado, sin cargar ningun tema (ver
  // resumenVencidas en flashcard-deck.js), asi que la accion del dia se decide sincrona.
  const mazo = resumenVencidas();

  root.innerHTML = `
    <div class="home-hero">
      <h1>MIOsler</h1>
      <img src="icons/icon-192.png" alt="MIOsler" class="home-logo">
    </div>

    <div class="sec-body">
      <div class="grid home-dash-row">
        <div class="home-dash-card">
          <h2 class="home-subhead">Tu progreso <button class="home-help-btn" onclick="rmOpenHelp('progreso')" aria-label="Cómo funciona tu progreso" title="Cómo funciona">?</button></h2>
          ${semanaHTML(racha)}
          <div class="home-progress">
            <div class="home-progress-ring">${ring(correct, incorrect)}
              <div class="home-progress-center">${pct !== null ? pct + '%' : 'Sin datos'}${pct !== null ? '<span>de tus respuestas</span>' : ''}</div>
            </div>
            <div class="home-progress-stats">
              <div class="home-stat"><span class="home-stat-n">${totalQuestions}</span><span class="home-stat-l">Preguntas en el banco</span></div>
              <div class="home-stat"><span class="home-stat-n">${answeredQuestions}</span><span class="home-stat-l">Contestadas <span class="mono" style="color:var(--ink-faint);">(${bankPct}%)</span></span></div>
              <div class="home-stat"><span class="home-stat-n" style="color:var(--prog-ok);">${correct}</span><span class="home-stat-l">Respuestas correctas</span></div>
              <div class="home-stat"><span class="home-stat-n" style="color:var(--prog-bad);">${incorrect}</span><span class="home-stat-l">Respuestas incorrectas</span></div>
              <div class="home-stat"><span class="home-stat-n">${temasEmpezados}</span><span class="home-stat-l">Temas empezados <span class="mono" style="color:var(--ink-faint);">(de ${topics.length})</span></span></div>
              <div class="home-stat"><span class="home-stat-n">${temasTerminados}</span><span class="home-stat-l">Temas terminados</span></div>
            </div>
            ${answered || answeredQuestions ? '<button class="home-reset" onclick="rmOpenResetConfirm()">Reiniciar progreso</button>' : ''}
          </div>
          <div class="home-bank">
            <div class="home-bank-head"><span>Tu avance en el banco</span><span class="mono">${bankPct}%</span></div>
            ${progressBar(gAcertadas, gFalladas, totalQuestions, 'Tu avance en el banco de preguntas')}
            ${progressLegend(gAcertadas, gFalladas, gPendientes)}
          </div>
          <div class="home-progress-divider"></div>
          ${examSectionHTML()}
        </div>

        <div class="home-dash-card">
          <h2 class="home-subhead">Repasa y practica</h2>
          ${accionDelDiaHTML(accionDelDia(topics, temarioBlocks, mazo))}
          <div class="home-study-box">
            <div class="home-study-col">
              <h3 class="home-study-col-title">Fichas de repaso <button class="home-help-btn" onclick="rmOpenHelp('fichas')" aria-label="Cómo funcionan las fichas de repaso" title="Cómo funciona">?</button></h3>
              <div id="fc-deck-root">${loadingSkeleton()}</div>
            </div>
            <div class="home-study-col">
              <h3 class="home-study-col-title">Exámenes simulados <button class="home-help-btn" onclick="rmOpenHelp('examen')" aria-label="Cómo funcionan los exámenes simulados" title="Cómo funciona">?</button></h3>
              <div id="exam-root">${loadingSkeleton()}</div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="home-subhead" style="margin-top:26px;">Temario</h2>
      <p class="home-subhead-note">Programa completo de Medicina Interna en ${bloquesNumerados} bloques. Los subtemas marcados "Abrir" ya tienen contenido construido; el resto se irá agregando en próximas actualizaciones.</p>
      ${temarioTreeHTML(temarioBlocks, topicsById)}
    </div>`;

  animateRing(root);
  root.querySelectorAll('details.temario-block').forEach(d => {
    const titulo = (d.querySelector('.temario-block-title') || {}).textContent || '';
    d.addEventListener('toggle', () => {
      if (d.open) bloquesAbiertos.add(titulo); else bloquesAbiertos.delete(titulo);
    });
  });
  mountFlashcardDeck(document.getElementById('fc-deck-root'));
  mountExamSummary(document.getElementById('exam-root'));
  window.rmRefreshHome = () => { if (LAST_ROOT) mountHome(LAST_ROOT, LAST_OPTS); };
}
