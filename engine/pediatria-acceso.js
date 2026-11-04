// engine/pediatria-acceso.js
// Quién ve la sección Pediatría. En un solo archivo para que la pregunta se responda en un solo
// sitio: el botón del nav, el buscador global y el reinicio de sesión preguntan todos lo mismo.
//
// NO ES UNA FRONTERA DE SEGURIDAD, y no pretende serlo. La bandera vive en el documento del
// propio usuario (users/{uid}, campo 'rm:profile-pediatria') y firestore.rules le permite
// escribir su propio documento sin validación de campos, así que cualquiera puede ponérsela
// desde la consola del navegador. Está bien así, y la razón importa: detrás no hay datos de
// nadie, ni un privilegio, ni nada que cueste dinero, hay material educativo. La bandera existe
// para no poner una sexta pestaña de farmacología pediátrica delante de los más de cien
// residentes de Medicina Interna que no la necesitan. Quien se la ponga "haciendo trampa" ha
// conseguido una lista de lecturas.
//
// Corolario, y es deliberado: firestore.rules NO se toca por esto. No hay regla nueva, no hay
// campo nuevo que validar y ADMIN_EMAILS se queda como está.
//
// Tampoco hay lista de correos de pediatría. engine/firebase-config.js se sirve al sitio
// público: ADMIN_EMAILS publica el correo del propio autor, que él ya publica como contacto de
// soporte, pero poner ahí el correo de una residente publicaría el dato personal de un tercero
// para ahorrarle un toque, y además obligaría a un commit y un despliegue por cada residente
// nuevo. Quien ya está registrado la enciende desde "Mi cuenta" (engine/account-menu.js).
//
// La dependencia va en una sola dirección: este archivo conoce a admin.js, admin.js no conoce a
// este. El panel de administración lee 'rm:profile-pediatria' como literal del documento de
// Firestore, igual que ya lee 'rm:profile-hospital', así que no necesita importar nada de aquí.

import { syncGet, syncSet } from './cloud-sync.js';
import { isAdmin } from './admin.js';

export const PEDIATRIA_KEY = 'rm:profile-pediatria';

// El autor la ve siempre: es quien escribe el contenido, y no va a marcarse una casilla de
// residente de pediatría para poder revisarlo.
//
// OJO con el momento de la llamada: syncGet lee primero el espejo en memoria de cloud-sync, y
// ese espejo no tiene el perfil hasta que initCloudSync() lo fusionó desde Firestore. Llamar a
// esta función antes de ese await deja sin pestaña a quien entra en un dispositivo nuevo, donde
// localStorage todavía está vacío (ver app.js).
export function esPediatra() {
  return !!syncGet(PEDIATRIA_KEY, false) || isAdmin();
}

export function setPediatra(valor) {
  syncSet(PEDIATRIA_KEY, !!valor);
}
