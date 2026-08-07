// engine/account-menu.js
// Menú de cuenta (ícono de tuerca, esquina superior derecha del header): mi cuenta,
// cambiar contraseña, reportar un problema, acerca de MIOsler y cerrar sesión.
// Reutiliza el overlay/modal existente para las vistas de "Mi cuenta" y "Acerca de".
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js';
import { auth } from './firebase-config.js';
import { getCurrentUser, signOutUser, RESIDENCY_YEARS } from './auth.js';
import { syncGet, syncSet } from './cloud-sync.js';

const SUPPORT_EMAIL = 'waltijau321@gmail.com';
const THEME_KEY = 'rm:theme-pref';

function applyTheme(pref) {
  const root = document.documentElement;
  if (pref === 'dark' || pref === 'light') root.setAttribute('data-theme', pref);
  else root.removeAttribute('data-theme');
}

function openModal(html) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>${html}`;
  // Limpia una posible clase 'auth-page' pegada del login (mismo #overlay reutilizado en toda
  // la app) — si queda, el modal hereda max-width:none y se ve a ancho completo.
  document.getElementById('overlay').classList.remove('auth-page');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderMyAccount() {
  const user = getCurrentUser();
  openModal(`
    <span class="modal-tag">Mi cuenta</span>
    <h2>${user && user.email ? user.email : ''}</h2>
    <form id="account-form" class="auth-form-grid" style="margin-top:16px;">
      <div class="calc-field"><label>Nombre</label><input type="text" id="acc-firstname" value="${syncGet('rm:profile-firstname', '')}"></div>
      <div class="calc-field"><label>Apellido</label><input type="text" id="acc-lastname" value="${syncGet('rm:profile-lastname', '')}"></div>
      <div class="calc-field"><label>Hospital / institución</label><input type="text" id="acc-hospital" value="${syncGet('rm:profile-hospital', '')}"></div>
      <div class="calc-field"><label>Año de residencia</label>
        <select id="acc-year">${RESIDENCY_YEARS.map(y => `<option value="${y}" ${syncGet('rm:profile-year', '') === y ? 'selected' : ''}>${y}</option>`).join('')}</select>
      </div>
      <div class="calc-field"><label>País</label><input type="text" id="acc-country" value="${syncGet('rm:profile-country', '')}"></div>
      <div class="calc-field"><label>Estado / provincia</label><input type="text" id="acc-state" value="${syncGet('rm:profile-state', '')}"></div>
      <button type="submit" class="field-full">Guardar cambios</button>
    </form>
    <p class="auth-note" id="acc-saved-note" style="display:none;">Cambios guardados.</p>
  `);
  document.getElementById('account-form').addEventListener('submit', (e) => {
    e.preventDefault();
    syncSet('rm:profile-firstname', document.getElementById('acc-firstname').value.trim());
    syncSet('rm:profile-lastname', document.getElementById('acc-lastname').value.trim());
    syncSet('rm:profile-hospital', document.getElementById('acc-hospital').value.trim());
    syncSet('rm:profile-year', document.getElementById('acc-year').value);
    syncSet('rm:profile-country', document.getElementById('acc-country').value.trim());
    syncSet('rm:profile-state', document.getElementById('acc-state').value.trim());
    document.getElementById('acc-saved-note').style.display = 'block';
  });
}

function renderAbout() {
  openModal(`
    <span class="modal-tag">Acerca de</span>
    <h2>MIOsler</h2>
    <p class="fbody" style="color:var(--ink-dim); margin-bottom:14px;">Plataforma de estudio y apoyo para residentes de Medicina Interna: temario completo, autoevaluación por tema, calculadoras clínicas validadas, protocolos de manejo y calendario de guardias.</p>
    <p class="auth-note">Es material educativo: no sustituye el juicio clínico ni las guías de práctica vigentes en tu institución. Elaborado por el Dr. Walter Jáuregui.</p>
  `);
}

async function handleChangePassword() {
  const user = getCurrentUser();
  if (!user || !user.email) return;
  try {
    await sendPasswordResetEmail(auth, user.email);
    openModal(`
      <span class="modal-tag">Cambiar contraseña</span>
      <h2>Revisa tu correo</h2>
      <p class="fbody" style="color:var(--ink-dim);">Te enviamos un enlace a <strong>${user.email}</strong> para elegir una nueva contraseña.</p>
    `);
  } catch (err) {
    openModal(`
      <span class="modal-tag" style="color:#8c3a34;">Cambiar contraseña</span>
      <h2>No se pudo enviar el correo</h2>
      <p class="fbody" style="color:var(--ink-dim);">Intenta de nuevo en unos minutos.</p>
    `);
  }
}

export function mountAccountMenu() {
  const gearBtn = document.getElementById('account-gear');
  const dropdown = document.getElementById('account-dropdown');
  if (!gearBtn || !dropdown) return;

  applyTheme(syncGet(THEME_KEY, 'auto'));
  const themeSelect = document.getElementById('menu-theme-select');
  if (themeSelect) {
    themeSelect.value = syncGet(THEME_KEY, 'auto');
    themeSelect.addEventListener('change', () => {
      syncSet(THEME_KEY, themeSelect.value);
      applyTheme(themeSelect.value);
    });
  }

  const close = () => dropdown.classList.remove('open');
  gearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (dropdown.classList.contains('open') && !dropdown.contains(e.target) && e.target !== gearBtn) close();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  document.getElementById('menu-my-account').addEventListener('click', (e) => { e.preventDefault(); close(); renderMyAccount(); });
  document.getElementById('menu-change-password').addEventListener('click', (e) => { e.preventDefault(); close(); handleChangePassword(); });
  document.getElementById('menu-about').addEventListener('click', (e) => { e.preventDefault(); close(); renderAbout(); });
  document.getElementById('menu-signout').addEventListener('click', (e) => { e.preventDefault(); close(); signOutUser(); });
}
