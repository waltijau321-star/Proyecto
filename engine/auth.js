// engine/auth.js
// Autenticación por correo/contraseña (Firebase Auth) + modal de login/registro que reutiliza
// el overlay existente (#overlay/#modal). Mientras no haya sesión iniciada, el modal queda
// "bloqueado" (sin botón de cerrar, sin cierre por click-fuera ni tecla Escape).

import {
  onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js';
import { auth, firebaseReady } from './firebase-config.js';
import { flushPendingWrites, syncSet } from './cloud-sync.js';
import { temarioBlocks } from '../topics/temario-index.js';

let authGateActive = true;
let mode = 'login'; // 'login' | 'signup'

const REMEMBER_USER_KEY = 'rm:remember-user';
const REMEMBER_EMAIL_KEY = 'rm:remember-email';

const ERROR_MESSAGES = {
  'auth/email-already-in-use': 'Ese correo ya tiene una cuenta. Intenta iniciar sesión.',
  'auth/invalid-email': 'El correo no es válido.',
  'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'auth/wrong-password': 'Contraseña incorrecta.',
  'auth/user-not-found': 'No hay una cuenta con ese correo.',
  'auth/invalid-credential': 'Correo o contraseña incorrectos.',
  'auth/too-many-requests': 'Demasiados intentos. Espera un momento e intenta de nuevo.'
};
function friendlyError(err) {
  return ERROR_MESSAGES[err && err.code] || 'Ocurrió un error. Intenta de nuevo.';
}

export function checkPasswordRules(pw) {
  return { len: pw.length >= 8, upper: /[A-Z]/.test(pw), lower: /[a-z]/.test(pw), number: /[0-9]/.test(pw) };
}

function showOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('active', 'auth-page');
  document.body.style.overflow = 'hidden';
}
function hideOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('active', 'auth-page');
  document.body.style.overflow = '';
}

// Bloquea el cierre del modal (Escape / click en el fondo) mientras el gate esté activo,
// interceptando en fase de captura antes que los handlers globales de study-view.js.
document.addEventListener('keydown', (e) => {
  if (authGateActive && e.key === 'Escape') e.stopImmediatePropagation();
}, true);
document.addEventListener('click', (e) => {
  if (authGateActive && e.target && e.target.id === 'overlay') e.stopImmediatePropagation();
}, true);

export const RESIDENCY_YEARS = ['R1 (primer año)', 'R2 (segundo año)', 'R3 (tercer año)', 'R4 (cuarto año)', 'Adscrito / otro'];
const REFERRAL_SOURCES = ['Redes sociales (Instagram, Facebook, X)', 'Recomendación de un colega o profesor', 'Búsqueda en Google', 'Congreso o evento académico', 'Otro'];
// Excluye el bloque "R1" (acceso rápido) de la cuenta: sus ítems son los mismos que ya
// se cuentan en su bloque temático de siempre, no temas nuevos.
const itemCount = temarioBlocks.filter(b => !b.quickAccess).reduce((acc, b) => acc + b.clusters.reduce((a2, c) => a2 + c.items.length, 0), 0);

function footerHTML() {
  return `<footer class="home-footer">
    <p>MIOsler es una herramienta de apoyo académico elaborada por el Dr. Walter Jáuregui para la formación de residentes de Medicina Interna. Es material educativo: no sustituye el juicio clínico ni las guías de práctica vigentes en tu institución.</p>
    <p class="home-footer-copy">© ${new Date().getFullYear()} MIOsler</p>
  </footer>`;
}

function renderAuthModal(errorMsg) {
  if (mode === 'signup') renderSignupPage(errorMsg);
  else renderLoginPage(errorMsg);
}

function renderLoginPage(errorMsg) {
  const modal = document.getElementById('modal');
  const rememberUser = localStorage.getItem(REMEMBER_USER_KEY) === '1';
  const rememberedEmail = rememberUser ? (localStorage.getItem(REMEMBER_EMAIL_KEY) || '') : '';
  modal.innerHTML = `
    <div class="auth-page-inner">
      <div class="auth-brand">
        <img src="icons/icon-192.png" alt="MIOsler" class="auth-logo">
        <span class="auth-kicker">Plataforma de estudio y apoyo para residentes de Medicina Interna</span>
        <h1>MIOsler</h1>
        <p class="auth-desc">Temario completo, autoevaluación por tema, calculadoras clínicas validadas, protocolos de manejo y calendario de guardias, todo respaldado por guías internacionales vigentes.</p>

        <div class="home-features">
          <div class="home-feature">
            <svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12"/><path d="M9 8h6M9 12h4"/></svg>
            <h3>Guías internacionales vigentes</h3>
            <p>Cada tema y calculadora cita su fuente: ACC/AHA, ESC, IDSA, KDIGO y consensos actualizados.</p>
          </div>
          <div class="home-feature">
            <svg viewBox="0 0 24 24"><path d="M7 18a4.5 4.5 0 0 1-1-8.9A6 6 0 0 1 17.6 8H18a4 4 0 0 1 0 8H7z"/><path d="M12 11v6M9.5 14.5 12 12l2.5 2.5"/></svg>
            <h3>Progreso sincronizado</h3>
            <p>Tu cuenta guarda tu avance en la nube: estudia desde tu computadora, celular o tablet sin perder nada.</p>
          </div>
          <div class="home-feature">
            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M7.5 14.5h2M11 14.5h2M14.5 14.5h2M7.5 17.5h2M11 17.5h2"/></svg>
            <h3>Calendario de guardias</h3>
            <p>Sube el horario de tus guardias y llévalo junto con la cuenta regresiva de tu examen, siempre a la mano.</p>
          </div>
          <div class="home-feature">
            <svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4M8 3v4M4 11h16"/><path d="M9 15l2 2 4-4"/></svg>
            <h3>En actualización constante</h3>
            <p>El temario y la bibliografía se revisan y amplían de forma continua, contrastados contra CMMI, ACGME y MKSAP.</p>
          </div>
          <div class="home-feature">
            <svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20v-3"/><path d="M3 8l6-4 6 4 6-4"/></svg>
            <h3>${itemCount} temas y en crecimiento</h3>
            <p>Ya cubrimos ${itemCount} temas del programa de Medicina Interna, y seguimos sumando más cada semana.</p>
          </div>
        </div>
      </div>

      <div class="auth-formside">
        <div class="auth-modal">
          <h2>Iniciar sesión</h2>
          <p class="auth-note">Tu progreso se guarda en tu cuenta y se sincroniza entre dispositivos.</p>
          ${errorMsg ? `<div class="auth-error">${errorMsg}</div>` : ''}
          <form id="auth-form">
            <div class="calc-field"><label>Correo</label><input type="email" id="auth-email" required autocomplete="email" value="${rememberedEmail.replace(/"/g, '&quot;')}"></div>
            <div class="calc-field"><label>Contraseña</label><input type="password" id="auth-password" required minlength="6" autocomplete="current-password"></div>
            <div class="auth-remember-row">
              <label class="auth-checkbox-row"><input type="checkbox" id="auth-remember-user" ${rememberUser ? 'checked' : ''}> Recordar usuario</label>
            </div>
            <button type="submit">Entrar</button>
          </form>
          <div class="auth-links">
            <a href="#" id="auth-toggle">¿No tienes cuenta? Regístrate</a> · <a href="#" id="auth-forgot">Olvidé mi contraseña</a>
          </div>
        </div>
      </div>

      ${footerHTML()}
    </div>`;

  modal.querySelector('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = modal.querySelector('#auth-email').value.trim();
    const password = modal.querySelector('#auth-password').value;
    const wantsRememberUser = modal.querySelector('#auth-remember-user').checked;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (wantsRememberUser) { localStorage.setItem(REMEMBER_USER_KEY, '1'); localStorage.setItem(REMEMBER_EMAIL_KEY, email); }
      else { localStorage.removeItem(REMEMBER_USER_KEY); localStorage.removeItem(REMEMBER_EMAIL_KEY); }
    } catch (err) {
      renderAuthModal(friendlyError(err));
    }
  });
  modal.querySelector('#auth-toggle').addEventListener('click', (e) => { e.preventDefault(); mode = 'signup'; renderAuthModal(); });
  modal.querySelector('#auth-forgot').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = modal.querySelector('#auth-email').value.trim();
    if (!email) { renderAuthModal('Escribe tu correo arriba y vuelve a hacer clic en "Olvidé mi contraseña".'); return; }
    try { await sendPasswordResetEmail(auth, email); renderAuthModal('Te enviamos un correo para restablecer tu contraseña.'); }
    catch (err) { renderAuthModal(friendlyError(err)); }
  });
  showOverlay();
}

function renderSignupPage(errorMsg) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="auth-page-inner">
      <div class="auth-brand auth-brand--compact">
        <img src="icons/icon-192.png" alt="MIOsler" class="auth-logo auth-logo--sm">
        <h1>MIOsler</h1>
      </div>

      <div class="auth-formside auth-formside--wide">
        <div class="auth-modal">
          <h2>Crear cuenta</h2>
          <p class="auth-note">Cuéntanos un poco de ti para personalizar tu progreso. Tu avance se guarda en tu cuenta y se sincroniza entre dispositivos.</p>
          ${errorMsg ? `<div class="auth-error">${errorMsg}</div>` : ''}
          <form id="auth-form" class="auth-form-grid">
            <div class="calc-field"><label>Nombre</label><input type="text" id="auth-firstname" required autocomplete="given-name"></div>
            <div class="calc-field"><label>Apellido</label><input type="text" id="auth-lastname" required autocomplete="family-name"></div>
            <div class="calc-field"><label>Hospital / institución</label><input type="text" id="auth-hospital" required autocomplete="organization"></div>
            <div class="calc-field"><label>Año de residencia</label>
              <select id="auth-year">${RESIDENCY_YEARS.map(y => `<option value="${y}">${y}</option>`).join('')}</select>
            </div>
            <div class="calc-field"><label>País</label><input type="text" id="auth-country" required autocomplete="country-name"></div>
            <div class="calc-field"><label>Estado / provincia</label><input type="text" id="auth-state" required autocomplete="address-level1"></div>
            <div class="calc-field field-full"><label>¿Dónde escuchaste de nosotros?</label>
              <select id="auth-referral">${REFERRAL_SOURCES.map(r => `<option value="${r}">${r}</option>`).join('')}</select>
            </div>
            <div class="calc-field field-full"><label>Correo</label><input type="email" id="auth-email" required autocomplete="email"></div>
            <div class="calc-field"><label>Contraseña</label><input type="password" id="auth-password" required minlength="8" autocomplete="new-password"></div>
            <div class="calc-field"><label>Confirmar contraseña</label><input type="password" id="auth-password-confirm" required minlength="8" autocomplete="new-password"></div>
            <ul class="pw-rules field-full" id="pw-rules">
              <li data-rule="len"><span class="pw-rule-mark">○</span>Mínimo 8 caracteres</li>
              <li data-rule="upper"><span class="pw-rule-mark">○</span>Una letra mayúscula</li>
              <li data-rule="lower"><span class="pw-rule-mark">○</span>Una letra minúscula</li>
              <li data-rule="number"><span class="pw-rule-mark">○</span>Un número</li>
            </ul>
            <label class="auth-checkbox-row field-full"><input type="checkbox" id="auth-terms" required>Acepto los <a href="#" id="auth-terms-link">términos y condiciones</a></label>
            <button type="submit" class="field-full">Crear cuenta</button>
          </form>
          <div class="auth-links">
            <a href="#" id="auth-toggle">¿Ya tienes cuenta? Inicia sesión</a>
          </div>
        </div>
      </div>

      <div class="auth-donate">
        <svg class="auth-donate-icon" viewBox="0 0 24 24"><path d="M4 10h13a3 3 0 0 1 0 6h-1"/><path d="M4 10v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6"/><path d="M8 3c-.6.8-.6 1.4 0 2.2M12 3c-.6.8-.6 1.4 0 2.2"/></svg>
        <h3>Apoya este proyecto</h3>
        <p>Si MIOsler te ha sido útil en tu formación, puedes invitarme un café. Este proyecto lo hago en mis tiempos libres, sin fines de lucro, y cualquier apoyo ayuda a mantenerlo actualizado y en crecimiento. ¡Gracias por acompañarme en este camino!</p>
        <p class="auth-donate-account"><!-- TODO: agregar número de cuenta para donaciones --></p>
      </div>

      ${footerHTML()}
    </div>`;

  const pwInput = modal.querySelector('#auth-password');
  const pwRulesList = modal.querySelector('#pw-rules');
  pwInput.addEventListener('input', () => {
    const rules = checkPasswordRules(pwInput.value);
    pwRulesList.querySelectorAll('li').forEach(li => {
      const ok = rules[li.dataset.rule];
      li.classList.toggle('ok', ok);
      li.querySelector('.pw-rule-mark').textContent = ok ? '✓' : '○';
    });
  });

  modal.querySelector('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = modal.querySelector('#auth-firstname').value.trim();
    const lastName = modal.querySelector('#auth-lastname').value.trim();
    const hospital = modal.querySelector('#auth-hospital').value.trim();
    const year = modal.querySelector('#auth-year').value;
    const country = modal.querySelector('#auth-country').value.trim();
    const state = modal.querySelector('#auth-state').value.trim();
    const referral = modal.querySelector('#auth-referral').value;
    const email = modal.querySelector('#auth-email').value.trim();
    const password = modal.querySelector('#auth-password').value;
    const passwordConfirm = modal.querySelector('#auth-password-confirm').value;
    const rules = checkPasswordRules(password);
    if (!rules.len || !rules.upper || !rules.lower || !rules.number) { renderAuthModal('La contraseña no cumple los requisitos mínimos.'); return; }
    if (password !== passwordConfirm) { renderAuthModal('Las contraseñas no coinciden.'); return; }
    try {
      syncSet('rm:profile-firstname', firstName);
      syncSet('rm:profile-lastname', lastName);
      syncSet('rm:profile-hospital', hospital);
      syncSet('rm:profile-year', year);
      syncSet('rm:profile-country', country);
      syncSet('rm:profile-state', state);
      syncSet('rm:profile-referral', referral);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      renderAuthModal(friendlyError(err));
    }
  });
  modal.querySelector('#auth-toggle').addEventListener('click', (e) => { e.preventDefault(); mode = 'login'; renderAuthModal(); });
  modal.querySelector('#auth-terms-link').addEventListener('click', (e) => { e.preventDefault(); openTermsModal(); });
  showOverlay();
}

function termsAndConditionsHTML() {
  return `
    <div class="terms-body">
      <h3>1. Aceptación</h3>
      <p>Al crear una cuenta en MIOsler aceptas estos términos y condiciones. Si no estás de acuerdo, no debes registrarte ni usar la plataforma.</p>

      <h3>2. Qué es MIOsler</h3>
      <p>MIOsler es una herramienta de apoyo académico, elaborada por el Dr. Walter Jáuregui, dirigida a residentes de Medicina Interna. Es material educativo: no sustituye el juicio clínico ni las guías de práctica vigentes en tu institución, y no debe usarse para tomar decisiones sobre pacientes reales.</p>

      <h3>3. Tu cuenta</h3>
      <p>Eres responsable de la veracidad de los datos que proporcionas (nombre, hospital, año de residencia, país, etc.) y de mantener la confidencialidad de tu contraseña. Puedes solicitar la eliminación de tu cuenta y tus datos escribiendo a waltijau321@gmail.com.</p>

      <h3>4. Datos y sincronización</h3>
      <p>Tu progreso de estudio (temas completados, resultados de autoevaluación, fichas, calendario de guardias) y los datos de tu perfil se guardan de forma asociada a tu cuenta mediante Firebase, para que puedas acceder a ellos desde distintos dispositivos.</p>

      <h3>5. Analítica de uso</h3>
      <p>MIOsler comparte de forma anónima qué secciones y funciones usas, para ayudarme a mejorar la app. No se comparte el contenido de tus respuestas ni tu identidad. Al crear tu cuenta aceptas esta analítica como parte del funcionamiento de la plataforma.</p>

      <h3>6. Propiedad intelectual</h3>
      <p>Los contenidos, calculadoras y protocolos de MIOsler se elaboran con fines educativos a partir de guías internacionales públicas. Su reproducción o distribución fuera de la plataforma requiere autorización previa.</p>

      <h3>7. Limitación de responsabilidad</h3>
      <p>MIOsler se ofrece "tal cual", sin garantía de exactitud absoluta ni disponibilidad continua. El autor no se hace responsable por decisiones clínicas tomadas con base en el contenido de la app.</p>

      <h3>8. Cambios a estos términos</h3>
      <p>Estos términos pueden actualizarse conforme evolucione la plataforma. Los cambios relevantes se notificarán dentro de la app.</p>

      <p class="terms-updated">Última actualización: julio de 2026.</p>
    </div>`;
}

function openTermsModal() {
  const termsModal = document.getElementById('terms-modal');
  termsModal.innerHTML = `<button class="modal-close" id="terms-close" type="button">✕</button><h2>Términos y condiciones</h2>${termsAndConditionsHTML()}`;
  termsModal.querySelector('#terms-close').addEventListener('click', closeTermsModal);
  const termsOverlay = document.getElementById('terms-overlay');
  termsOverlay.classList.add('active');
  termsOverlay.onclick = (e) => { if (e.target.id === 'terms-overlay') closeTermsModal(); };
}
function closeTermsModal() {
  document.getElementById('terms-overlay').classList.remove('active');
}

export function getCurrentUser() { return auth.currentUser; }

export function initAuth(onChange) {
  if (!firebaseReady) {
    // Config sin configurar todavía: no bloquear el desarrollo local, solo avisar.
    console.warn('ResidenteMed: falta configurar engine/firebase-config.js con las claves reales del proyecto Firebase.');
    authGateActive = false;
    onChange(null);
    return;
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authGateActive = false;
      hideOverlay();
    } else {
      authGateActive = true;
      mode = 'login';
      renderAuthModal();
    }
    onChange(user);
  });
}

export async function signOutUser() {
  await flushPendingWrites();
  await signOut(auth);
}
