// engine/firebase-config.js
// Configuración de Firebase para ResidenteMed (Auth + Firestore).
//
// IMPORTANTE: los valores de abajo son PLACEHOLDER. Para conectar la app a un proyecto
// Firebase real, sigue los pasos manuales en console.firebase.google.com (ver el plan de
// implementación) y reemplaza el objeto `firebaseConfig` con el que Firebase te muestre al
// registrar la app web. Estos valores (apiKey incluida) son seguros de exponer en el cliente:
// no son secretos, la seguridad real la dan las reglas de Firestore.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCWg9m9YqwZDqU369gA14isv3ZaRYt4R30',
  authDomain: 'residentemed-43dd7.firebaseapp.com',
  projectId: 'residentemed-43dd7',
  storageBucket: 'residentemed-43dd7.firebasestorage.app',
  messagingSenderId: '136396554599',
  appId: '1:136396554599:web:704b370ba9d6c8c3426fc2'
};

export const firebaseReady = firebaseConfig.apiKey !== 'REEMPLAZAR_API_KEY';

// Correos con acceso a la vista de administración (lista de usuarios registrados).
export const ADMIN_EMAILS = ['waltijau321@gmail.com'];

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
