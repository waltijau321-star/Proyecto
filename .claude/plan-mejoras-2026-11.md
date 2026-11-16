# Plan de mejoras de MIOsler (16 nov 2026)

Sale de la revisión general del 16 de noviembre de 2026. Está escrito para que lo ejecute un
modelo que no estuvo en esa sesión: cada tarea trae su meta, lo que se midió, qué hacer, cómo
saber que quedó hecha y las trampas conocidas. Lo que ya está en `CLAUDE.md` no se repite aquí;
léelo antes de empezar, porque las reglas del proyecto viven ahí.

**Punto de partida**: `main` en `94cdd05`, publicado. `tests.html` 2956/2956. Caché
`residentemed-8f533d53b9`, la misma que sirve miosler.com. 107 temas, 3863 preguntas, 157 de 318
ítems del temario (49%).

**Ya hecho en esa misma sesión, no lo repitas**:
- El panel de Admin contaba dos veces el bloque de atajo R1 y daba por abierta la puerta de
  Producto (243/404 en vez de 157/318). Corregido en `ee610a7`.
- El panel guarda una foto semanal de la escalera y la pinta como tabla "Semana a semana"
  (`engine/admin-fotos.js`). Hecho en `94cdd05`. Falta que Walter lo vea con su sesión.

---

## 0. Cómo trabajar con este plan

### Para qué sirve todo esto

La meta del proyecto está en `Osler.md`: que un residente de medicina interna estudie su año
completo aquí, y que eso sostenga el proyecto con suscripciones. El orden es utilidad, luego
hábito, luego cobro. El panel de Admin pinta seis puertas que se abren en orden (tracción,
activación, hábito, retención, producto, cobro). Hoy la puerta en juego es la primera o la
tercera según las cifras, que solo ve Walter. Si una tarea no sirve a una puerta, va al final.

Si Walter escribe "Osler" u "Osli", carga la skill `osler` antes de responder.

### Reglas que no se deducen del código

1. **Nunca hagas commit ni push sin que Walter lo pida, cada vez.** Un permiso no se hereda al
   cambio siguiente. Un push a `main` publica en producción.
2. **Un push no es un despliegue.** Después de empujar comprueba tres cosas: que el check
   `Workers Builds: proyecto` del commit cerró en `success`, que `CACHE_VERSION` del `sw.js` de
   miosler.com es la del repo, y que el archivo que cambiaste se sirve con el cambio. En esta
   máquina no existe `gh`: usa `curl` contra
   `https://api.github.com/repos/waltijau321-star/Proyecto/commits/<sha>/check-runs`. El sitio
   puede servir ya la versión nueva mientras el check sigue "in_progress" unos minutos; lee la
   conclusión aparte.
3. **La medida que vale es `tests.html`** (`http://localhost:8788/tests.html`, servidor
   `static-server` de `.claude/launch.json`). Un error de sintaxis en `tests.js` no sale en rojo:
   deja la suite colgada con el título "Smoke tests". Mira la consola.
4. **Después de tocar un archivo precargado** corre
   `powershell -ExecutionPolicy Bypass -File .claude/bump-cache-version.ps1`.
5. **Verifica en el DOM, no leyendo el código.** Y un manejador de foco o de teclado se verifica
   pulsando la tecla.
6. **El desarrollo local usa el proyecto real de Firebase.** No envíes el formulario de registro
   ni el de inicio de sesión con datos inventados: crearías cuentas de verdad en producción.
7. **No puedes entrar como Admin.** El panel se comprueba pintando `metasHTML()` con una cohorte
   inventada dentro de la página de pruebas. Lo que dependa de la sesión de Walter se declara como
   no comprobado, no se da por bueno.
8. **Trampa del navegador de pruebas**: con el panel del navegador oculto las transiciones CSS no
   avanzan. Las celdas de `.admin-table` llevan `transition: background 0.6s`, así que tras
   cambiar de tema el fondo calculado sigue siendo el anterior. Para medir contraste, apaga las
   transiciones con una regla `*{transition:none !important}` antes de leer.
9. Escribe a Walter en español y sin el carácter de raya larga.

### Cómo leer cada tarea

- **Decide**: quién tiene que decidir antes de tocar nada. "Nadie" significa que puedes hacerla.
  "Walter" significa que preguntas primero y no eliges por él.
- **Hecho cuando**: el criterio de cierre. Si no puedes comprobarlo, dilo.

### Orden propuesto

| # | Tarea | Decide | Esfuerzo | Sirve a |
|---|-------|--------|----------|---------|
| T1 | `.gitignore` fuera del sitio | Nadie | 10 min | Higiene |
| T2 | Textos desfasados | Nadie | 30 min | Higiene |
| T3 | Puerta de entrada en teléfono | Nadie (una parte, Walter) | 1 sesión | Puerta 1 |
| T4 | Bloque de donación | Walter | 15 min | Confianza |
| T5 | Contar en el panel quién desbloqueó fichas | Nadie | 2 h | Puerta 3 |
| T6 | Candado de las fichas | Walter, con el dato de T5 | 1 h | Puerta 3 |
| T7 | CSP obligatoria | Walter confirma antes | 15 min | Seguridad |
| T8 | Contenido hacia la puerta de Producto | Nadie | 1 sesión por módulo | Puerta 5 |
| T9 | Citas que faltan | Depende de fuentes | Variable | Credibilidad |
| T10 | Pediatría: medir antes de seguir | Walter da el dato | 5 min | Enfoque |
| T11 | Repo privado: seguimiento | Walter hace el cambio | 30 min | Higiene |
| T12 | Limpieza de ramas y de memoria | Walter (ramas) | 30 min | Higiene |
| T13 | Leer la serie semanal en sus fechas | Walter abre Admin | 30 min cada vez | Dirección |

T1 y T2 pueden ir en un mismo commit. T6 no se empieza sin T5. Lo demás es independiente.

---

## 1. Lo que solo puede hacer Walter

No intentes resolver nada de esta lista por tu cuenta. Recuérdaselo cuando venga al caso.

- **Abrir Admin** para tomar la primera foto semanal y comprobar que se guarda (cerrar la pestaña,
  volver a entrar, y que la fila siga ahí). Es lo único de la foto semanal que no se pudo probar.
- **Pasar las cifras** de Admin > Camino a la meta: registrados, activación, hábito y retención.
  Sin ellas no se propone otra jugada de hábito. Nunca inventes una cifra de usuarios.
- **Vigilar la consola unos días** antes de T7.
- **Dar o no un número de cuenta** para donaciones (T4).
- **Elegir la regla del candado** (T6) y los campos del registro (T3, parte C).
- **Cambiar el repo a privado** en GitHub, si lo decide (T11).
- **Avisar a la residente de Pediatría** para quien se abrió la sección de que encienda ella misma
  el interruptor en "Mi cuenta". No se puede hacer por ella.
- **Conseguir fuentes** que no están en `Bibliografia/` (T9).

---

## 2. Tareas

### T1. Sacar `.gitignore` del sitio publicado

**Decide**: nadie.

**Medido**: `https://miosler.com/.gitignore` responde 200 con 1634 bytes. No hay secretos, pero
sus comentarios nombran la ruta de la clave de Gemini y los tres manuales de pediatría. Todo lo
demás que no debe servirse da 404 (`Osler.md`, `CLAUDE.md`, `tests.html`, `tests.js`,
`firestore.rules`, `Bibliografia/`, `.claude/`, `_headers`, `.assetsignore`).

**Qué hacer**: añadir `.gitignore` a `.assetsignore`, en el bloque de material de trabajo.

**Hecho cuando**: tras publicar, `/.gitignore` da 404 y la portada sigue en 200. `.assetsignore`
no está precargado, así que no hace falta bump de caché.

**Trampa**: un `.assetsignore` mal escrito puede dejar fuera algo que sí debe servirse. Tras el
despliegue comprueba también `sw.js`, `manifest.webmanifest` e `icons/og-card-v2.png` en 200.

### T2. Textos que quedaron desfasados

**Decide**: nadie. Son textos que contradicen una decisión ya tomada y anotada.

**Qué hay**:
- `Osler.md` guarda restos del modelo de precios por zonas, descartado el 9 nov 2026 a favor de un
  solo precio mundial. Busca "zona": la fila de la puerta 6 ("con precios por zona, 300
  suscripciones pueden ser 59,000 MXN o 110,000"), la tarifa de fundador ("precio de zona
  congelado"), la unidad económica ("un suscriptor de zona B") y la pregunta 1 de la sección 9
  ("La tabla de zonas: tres zonas..."). La bitácora y el filtro del no también dicen "zona", pero
  ahí cuentan la historia y no se tocan.
- `engine/admin-metas.js` rotula un bloque "Las cinco puertas" y pinta seis. Su comentario de
  `MODELO` repite el argumento de los precios distintos por país.

**Qué hacer**: reescribir esas frases para que digan lo que rige hoy. El número de la unidad
económica se sostiene (24 meses por 199 MXN son 4776). La pregunta 1 de la sección 9 ya no es una
pregunta abierta: quítala o cámbiala por la que siga viva.

**Hecho cuando**: `grep -n -i zona Osler.md` solo devuelve la bitácora y el filtro del no, y la
suite sigue en verde. Hay una prueba ("los números de Osler.md no se separan del código") que
busca cadenas literales en ese archivo, como "60,000 MXN al mes" y los umbrales de las puertas:
no las reformules.

### T3. La puerta de entrada en teléfono

**Decide**: nadie para las partes A y B; Walter para la C y la D.

**Por qué**: es la puerta 1. Desde el 13 nov el enlace compartido en WhatsApp trae tarjeta, y esa
tarjeta lleva a esta pantalla. El público llega en teléfono.

**Medido** (local, 375x812, 16 nov 2026; la puerta es `renderAuthModal` en `engine/auth.js`):
- Vista de inicio de sesión: 1915 px de alto. La primera pantalla no tiene ningún botón. El
  título "Iniciar sesión" está a 1193 px, el botón "Entrar" a 1478 y el enlace "¿No tienes
  cuenta? Regístrate" a 1534, casi dos pantallas abajo y debajo del formulario de quien ya tiene
  cuenta.
- Vista de registro: 2101 px de alto, 12 campos, 9 obligatorios (nombre, apellido, hospital, país,
  estado, correo, contraseña dos veces y términos). El botón "Crear cuenta" está a 1423 px.
- El texto de entrada dice "Temario completo" y, tres tarjetas después, "157 de 318 temas".
- No se midió en escritorio. Mídelo antes de cambiar nada: ahí la marca y el formulario pueden ir
  en dos columnas y el problema ser solo de teléfono.

**Qué hacer**:
- **A.** Que en la primera pantalla de un teléfono haya un botón primario "Crear cuenta" que lleve
  al formulario de registro en un toque, y uno secundario para quien ya tiene cuenta.
- **B.** Que el foco caiga en el primer campo del formulario al que se llega.
- **C. (Walter)** Recortar los campos obligatorios. Propuesta: dejar nombre, correo, contraseña,
  términos y país; pedir hospital y estado después del primer uso. Costo que tiene que conocer: el
  hospital alimenta el canal "sede por sede" del panel y el país decide la moneda del precio.
- **D. (Walter)** La frase "Temario completo". Es suya; proponle una redacción que no prometa más
  que el "157 de 318" de abajo.

**Hecho cuando**: a 375x812 el botón primario queda entero dentro de los primeros 812 px; con
teclado, Tab llega a él, Enter lo activa y el foco aterriza en el formulario; la trampa de foco de
la puerta sigue sujetando (recorre el ciclo completo de Tab, no lo deduzcas); hay prueba nueva en
`tests.js`; el contraste de lo nuevo pasa de 4.5:1 en claro y en oscuro.

**Trampas**: la regla 6 de arriba (no envíes el formulario). La trampa de foco de esta puerta ya
se dio por buena una vez sin tabular y no sujetaba. `mode` es una variable de módulo que arranca
en `'login'`: cambiar el valor por defecto mandaría al registro a quien vuelve sin "recordar
usuario", así que es preferible el botón.

### T4. El bloque de donación

**Decide**: Walter.

**Qué hay**: en la vista de registro, `engine/auth.js` pinta "Apoya este proyecto... puedes
invitarme un café" y debajo un párrafo vacío con un `TODO` donde iría la cuenta. Invita a algo que
no se puede hacer. Además dice "sin fines de lucro", y `Osler.md` planea suscripciones: esa frase
va a pesar el día que haya precio.

**Qué preguntar**: si da un número de cuenta, o si se quita el bloque hasta que lo haya. Y si se
quita "sin fines de lucro" en cualquiera de los dos casos, que es la recomendación.

**Hecho cuando**: no queda en pantalla una invitación sin forma de aceptarla.

### T5. Contar en el panel quién desbloqueó las fichas

**Decide**: nadie. Es medir con datos que ya se leen.

**Por qué**: las fichas de un tema se desbloquean solo al contestar su banco entero (unas 36
preguntas de media). La jugada del 11 nov, "las fichas vencidas van primero en Inicio", solo
alcanza a quien ya llegó ahí. Hace falta saber a cuántos antes de decidir T6.

**Qué hacer**: añadir al panel "Camino a la meta" dos cifras: residentes con al menos un tema
desbloqueado y residentes que calificaron alguna ficha. Los documentos de usuario que ya lee
`fetchAllUsers` traen `rm:quiz-srs:<tema>` y `flashcard-progress:<tema>`, y el registro lleva
`preguntas` por tema, así que no hace falta cargar ningún banco. Mira `answeredCount` en
`engine/quiz-srs.js`: necesitas la misma cuenta, pero pura y sobre el documento de otro usuario.

**Hecho cuando**: las dos cifras se pintan, hay prueba con cohorte inventada, y el panel no pinta
`undefined` ni `NaN`.

**Trampas**: no se recoge ningún dato nuevo; si te hace falta uno, se declara antes en los
términos. Si quieres meter estas cifras en la foto semanal, cuidado: `esFoto` en
`engine/admin-fotos.js` exige todos los campos de `CAMPOS`, así que añadir uno sin tolerar su
ausencia en las fotos viejas **descarta la serie entera en silencio**.

### T6. El candado de las fichas

**Decide**: Walter, con el número de T5 delante. Es diseño didáctico suyo, pendiente desde octubre.

**Las dos alternativas**: desbloquear tras las primeras 10 preguntas respondidas del tema
(recomendada: es la que antes mete al residente en el ciclo de repaso), o desbloquear por subtema.

**Dónde toca**: `engine/study-view.js` (`fcLocked`, la guarda de `openFlashcards` y
`lockedFlashcardsNotice`), `engine/quiz-srs.js` (`isQuizCompleted`, `remainingToComplete`) y los
textos de `engine/home.js` que dicen "al terminarlo se desbloquean las fichas", incluido el modal
de ayuda.

**Hecho cuando**: la regla nueva tiene prueba, los textos dicen la regla nueva en todos los sitios,
y hay fila en la bitácora de `Osler.md` con el dato que la revertiría.

**Trampa**: "tema terminado" en Inicio usa hoy el mismo criterio que el candado. Son dos cosas:
terminar sigue siendo contestar el banco entero. No las muevas juntas.

### T7. Pasar la CSP a obligatoria

**Decide**: Walter confirma antes. Solo se hace si usó la app varios días con la consola abierta y
no vio ningún aviso "would have been blocked".

**Qué hay**: desde el 2 nov la cabecera va como `Content-Security-Policy-Report-Only` en
`_headers`. Las instrucciones para el cambio están escritas dentro de ese archivo.

**Qué hacer**: quitar el sufijo `-Report-Only`. Nada más.

**Hecho cuando**: build en verde, la cabecera publicada ya no lleva el sufijo, la portada carga
sin avisos en consola, y **Walter inicia sesión justo después** y confirma que entra.

**Trampas**: el intercambio con `identitytoolkit`, `securetoken` y `firestore` nunca se probó en
modo obligatorio porque pide sesión. Si el inicio de sesión falla, se revierte el commit en el
momento. Un `_headers` mal formado hace fallar el despliegue entero.

### T8. Contenido hacia la puerta de Producto

**Decide**: nadie. Es el único frente que avanza sin las cifras de Admin.

**Medido**: 157 de 318 ítems. El panel redondea, así que la puerta abre en 190: faltan 33.
Infectología va en 1 de 20 y Reumatología en 0 de 16; entre las dos casi la abren solas. Unos 3
ítems de Infectología esperan fuente, y lo que falte sale de Nefrología, que va en 10 de 18.

**Orden**: el módulo 122 (VIH y oportunistas) según `.claude/infectologia-fuentes.md`; después el
resto de ese plan. Reumatología según `.claude/reumatologia-fuentes.md`, que dice empezar por
lupus. Un módulo por sesión.

**Qué hacer**: seguir `CLAUDE.md` al pie de la letra (plantilla, registro con `accent` y
`preguntas`, `CONTENT` de `sw.js`, temario, `REVISADOS`, 32 fichas, citas por campo en base 1) y
la skill `reglas-preguntas` para todo `study.js`.

**Hecho cuando**: el tema nace con cero huecos de citas en los tres campos de la regla mínima,
pasa los umbrales de opciones a la primera, sus calculadoras están probadas con casos, y se abrió
un modal de ficha en el navegador.

**Trampas**: la verdad clínica va antes que la puerta. No se apura contenido para abrirla, y
ninguna cita se pone sin haber leído el pasaje.

### T9. Las citas que faltan

**Decide**: depende de fuentes que hoy no están.

**Medido**: 84 huecos en 14 temas, declarados en `ATRIB_PENDIENTES` de `tests.js`. El detalle por
tema y la fuente candidata de cada uno están en `.claude/atribucion-citas.md`.

**Qué hacer**: solo cuando llegue una fuente. La que más rinde es la 5.a edición de la guía TIF
(2025), que cerraría 9 huecos de sobrecarga de hierro en tres temas. Al cerrar huecos, baja el
máximo del tema en `ATRIB_PENDIENTES` y sube `ATRIB_TOTAL_MINIMO`.

**Trampas**: no abras los PDF de la NCCN que hay en `Bibliografia/`: su licencia prohíbe usarlos
con una IA. Y no "afines" las citas que ya están a nivel de ficha: se intentó y es una regresión
(ver ese mismo documento).

### T10. Pediatría: medir antes de seguir

**Decide**: Walter da el dato.

**Qué hay**: 20 fármacos de un núcleo previsto de 70 a 80. La tabla de usuarios de Admin tiene una
columna "Pediatría" con quién encendió el interruptor.

**Qué hacer**: antes del siguiente bloque de fármacos, preguntar cuántos lo tienen encendido. Si
son muy pocos, el siguiente bloque espera y el tiempo va a T8.

### T11. Repo privado: seguimiento

**Decide**: Walter hace el cambio en GitHub, si quiere.

**Por qué se sugirió**: el repositorio es público y lleva `Osler.md` (precios y estrategia) y los
PDF de `Bibliografia/`. Pasarlo a privado no reescribe el historial. Sacar los PDF del historial
ya lo decidió Walter el 26 ago 2026: se quedan. No lo vuelvas a plantear.

**Qué hacer si lo cambia**: confirmar en el siguiente push real que Workers Builds sigue
construyendo, y corregir en `CLAUDE.md` el párrafo que dice que el check del build se lee sin
credenciales porque el repo es público. La comprobación por `CACHE_VERSION` en el `sw.js`
publicado sigue valiendo.

### T12. Limpieza

- **Ramas (decide Walter)**: hay 34 ramas locales y 29 remotas, todas ya fusionadas en `main`.
  Antes de borrar, enséñale la lista. `claude/gallant-euler-155d65` se dejó a propósito el 3 nov
  para una sesión detenida: pregunta por esa en concreto.
- **Memoria de sesión (nadie)**: si trabajas en esta máquina, el archivo
  `residentemed-estado-y-siguiente-paso.md` de la carpeta de memoria del proyecto pasa de 1200
  líneas y ya no cabe en una lectura, aunque está marcado "leer primero". Consolídalo: arriba lo
  vigente, y lo anterior al 1 nov resumido o fuera.

### T13. Leer la serie semanal en sus fechas

**Decide**: Walter abre Admin; tú lees con él.

- **Semana del 23 nov 2026**: segunda foto. Aparece la primera comparación. Comprobar que la fila
  de la semana del 16 sigue ahí y que los cambios se pintan.
- **Semana del 11 ene 2027**: ocho semanas. Es el plazo de cuatro filas de la bitácora de
  `Osler.md` (la acción del día, la racha en semanas, las fichas vencidas primero y la tarjeta del
  enlace). Con la tabla "Semana a semana" delante, anotar en la bitácora si cada jugada se queda o
  se cambia. La jugada que la propia bitácora nombra como siguiente para el hábito es el
  recordatorio; para la tracción, el botón de compartir o la difusión sede por sede.

Si hay más semanas sin foto que con ella, la serie no sirve así y la foto tendría que tomarse
sola. Eso pide un cron en el Worker con acceso de servidor a Firestore: es infraestructura nueva y
se decide aparte.

---

## 3. Lo que no hay que hacer

Ya se decidió, y tiene su motivo anotado. No lo propongas de nuevo sin un dato nuevo.

- Trabajo de cobro o de pasarela: no hasta que retención y producto estén abiertas.
- Un `_redirects`, un `sitemap.xml` o un `robots.txt` propio.
- Precocinar el índice del buscador.
- Reescribir el historial de git para sacar los PDF.
- Cuadrar los dos pendientes de coherencia de Inicio (los bloques suman 4208 preguntas contra
  3863; "tema" tiene tres denominadores). Se dejaron así a propósito.
- Construir un mecanismo de aviso de cambios en los términos solo porque la sección 9 lo promete.
- Anuncios, precios por zona, degradar el índice de Detsky, reactivar las calculadoras generales.
- Mencionar en texto visible de la app que una figura se generó con IA.
- "Arreglar" `engine/topic-chat.js` para que use `syncGet`/`syncSet`: es la excepción deliberada.

Pendientes heredados que siguen abiertos y no son de esta revisión (objetivos de aprendizaje por
tema, la norma de 32 fichas por tema, el estado vacío de Inicio) están en la sección 7 de
`.claude/revision-general-2026-11.md`.

---

## 4. Qué entregar al terminar cada tarea

1. Qué cambió, en una o dos líneas.
2. Cómo lo comprobaste, con el número que mediste (pruebas, posición en px, contraste, código de
   respuesta). No "debería funcionar".
3. Qué no pudiste comprobar y quién puede.
4. Qué queda esperando una decisión de Walter.

Y deja actualizados: este archivo (marca la tarea con fecha y commit), la bitácora de `Osler.md`
si hubo una decisión, y la memoria de estado si cambió el estado técnico.
