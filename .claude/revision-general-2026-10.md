# Revisión general de MIOsler, octubre de 2026

Revisión en tres lentes: ingeniería, educación médica y contenido clínico.
Método: todo lo que se afirma aquí se midió ejecutando la app, no leyendo el código.

- Suite real en el navegador: **2178/2178 OK**.
- Carga en vivo de los 102 temas del registro (0 errores de carga).
- Ejecución de las **278 calculadoras** con entradas vacías, mínimas, máximas y parciales.
- Verificación de 12 citas al azar y 5 citas de 2026 contra PubMed.
- Render real de la vista de estudio en el DOM, en escritorio y en 375 px.

> **Estado al 22 de octubre de 2026.** Los tres defectos que tocan datos de usuarios reales
> (1.1, 1.2 y 1.3) están corregidos, junto con la pérdida silenciosa de escrituras (1.6), la
> afirmación de 318 temas de la portada (3.2), el protocolo de ACLS (3.3, salvo su bloque
> posparo) y el peso del precache (1.4, salvo la re-descarga por despliegue). La suite pasó de 2178 a 2288 pruebas, todas en verde. El resto del informe sigue
> vigente.

---

## 0. Lo que está sólido (medido, no supuesto)

| Área | Evidencia |
|---|---|
| Calculadoras | 278 ejecutadas: 0 excepciones, 0 `NaN`/`Infinity` visibles, 0 opciones de `select` mal formadas. El guard `missingRequired` de `engine/calculators.js:128` tapa bien los campos incompletos, incluidos los 78 descriptores con campos `required:false`. |
| Aritmética clínica | Child-Pugh (5=A, 7=B, 15=C), CURB-65 (0 y 5), FIB-4 (3.16 con edad 60/AST 50/ALT 40/plaq 150), Mentzer (11.7 talasemia / 17.5 ferropenia, con la interpretación en la dirección correcta), ROX (6.39), Cockcroft-Gault (78 y 66 mL/min con el factor 0.85), anion gap 30 con cociente delta 1.29, Parkland con la fórmula actual de 2 mL/kg/%SCQ. |
| Bibliografía | 12 citas al azar contra PubMed: 10 resuelven a un PMID exacto; las 2 restantes fallan por artefacto de formato (página con sufijo `S`, autor no indexado), no por invención. Ninguna cita fabricada en la muestra. 1417 citas, mediana de 15 por tema. |
| Contenido de alto riesgo | Todas las sondas salieron correctas y vigentes: K <3.3 bloquea la insulina en CAD, bicarbonato solo con pH <6.9-7.0, adrenalina de primera línea con antihistamínicos y corticoides fuera del control de la bifásica, lorazepam 0.1 mg/kg, cristaloides 30 mL/kg en 3 h, umbrales transfusionales 7/8/10, GOLD ABE. |
| Redacción de reactivos | 5327 enunciados: 0.2% con tronco negativo, 0.1% con "todas las anteriores". Es mejor higiene de ítems que la de muchos bancos comerciales. |
| Service worker | Las 381 rutas de `CORE` existen en disco y cubren los 102 temas. El `_redirects` y el `.assetsignore` están al día. |
| Accesibilidad de la vista de estudio | 27 encabezados en jerarquía correcta, 4 tablas con `th`, 0 imágenes sin `alt`, 0 botones sin nombre accesible. |

---

## 1. Ingeniería

### 1.1 El SRS se indexa por posición del array (alta) · RESUELTO el 22/10/2026

`engine/quiz-srs.js:13` guarda el progreso como `store[qIndex]`, donde `qIndex` es la posición
dentro de `topic.study.quiz`. `engine/exam-mode.js:60` hace lo mismo con `srsIndex`.

**113 commits han tocado archivos `study.js`.** Cada vez que se inserta, borra o reordena una
pregunta, el calendario de repaso de todos los usuarios queda apuntando a preguntas distintas:
la caja 5 de la pregunta 12 pasa a ser la caja 5 de otra pregunta. No falla, no avisa, y no hay
forma de detectarlo desde la app.

Arreglo: un `id` estable por pregunta (`q.id`, generado una vez y nunca reusado) y migración de
las claves existentes con el índice como respaldo. Conviene hacerlo **antes** de la próxima
tanda de edición de bancos.

### 1.2 La sincronización es de una sola vía después del primer login (alta) · RESUELTO el 22/10/2026

`engine/cloud-sync.js:131` marca `rm:cloud-synced:{uid}` tras la primera fusión y a partir de
ahí `initCloudSync` retorna temprano (`if (alreadySynced) return`). No hay `onSnapshot` ni
ninguna lectura periódica en todo el proyecto.

Consecuencia: un residente que estudia en el celular y luego abre la laptop (ya sincronizada
antes) **no ve nada de lo del celular**. La nube recibe escrituras pero el dispositivo nunca
vuelve a leer. La portada promete exactamente lo contrario ("estudia desde tu computadora,
celular o tablet sin perder nada").

Arreglo mínimo: leer el documento y fusionar en cada arranque, no solo la primera vez.
Arreglo bueno: `onSnapshot` sobre `users/{uid}`.

### 1.3 Contaminación entre usuarios en un dispositivo compartido (alta) · RESUELTO el 22/10/2026

`signOutUser()` (`engine/auth.js:321`) solo hace flush y `signOut`: no limpia ninguna clave
`rm:*` de localStorage. `initCloudSync` (`engine/cloud-sync.js:136`), cuando el usuario nuevo no
tiene documento, lo siembra barriendo **todo** `localStorage` con prefijo `rm:` o
`flashcard-progress:`.

Repro: residente A estudia en la tablet del servicio y cierra sesión. Residente B se registra en
la misma tablet. El documento en la nube de B nace con el progreso de quiz, las fichas y los
datos de paciente de VPO de A. `app.js` ya reconoce el problema en un comentario y lo resuelve
solo para VPO (`nuevoPaciente()`); el progreso de estudio queda contaminado.

Arreglo: limpiar las claves `rm:*` y el espejo en memoria al cambiar de uid, y sembrar solo
cuando el `lastUid` coincide.

### 1.4 El precache del service worker pesa 55.5 MB y se vuelve a bajar en cada despliegue (alta) · RESUELTO EN PARTE el 22/10/2026

- `CORE` son 381 rutas: 10.9 MB de JS y **43.8 MB en 27 PNG** de ~1.8 MB cada uno
  (1536x1024 sin optimizar).
- `install` usa `cache.addAll(CORE)`, que es atómico: si una sola petición falla, el install
  entero se rechaza, el SW no activa y **el usuario se queda sin offline, en silencio**. Con
  55 MB sobre datos móviles eso no es hipotético, y en iOS además hay cuota de origen.
- `activate` borra todas las cachés con nombre distinto a `CACHE_VERSION`, y
  `bump-cache-version.ps1` deriva ese nombre del hash del contenido de `CORE`. Es decir: corregir
  una tilde en un tema obliga a los 102 temas y los 44 MB de imágenes a bajarse otra vez, en
  todos los dispositivos.

Hecho el 22/10/2026: los 27 PNG son WebP a 1100 px (**43.0 MB a 2.9 MB, 93% menos**) y el
precache está partido en dos listas. `SHELL` (43 entradas) se instala de forma atómica, y
`CONTENT` (339) con tolerancia a fallos, después del `skipWaiting`. **El precache total baja de
55.5 MB a 15.4 MB.** Comprobado con dos service workers de prueba: con una ruta rota en
`CONTENT` el worker queda `activated` y cachea las 382 entradas buenas (antes se quedaba sin
offline entero); con una ruta rota en `SHELL` queda `redundant`, que es lo correcto.

**Lo que sigue pendiente de este punto**: cada despliegue vuelve a bajar los 15.4 MB, porque el
`activate` sigue borrando la caché anterior y `CACHE_VERSION` sale del hash de todo. La idea
sería separar la caché de assets (inmutables) de la de código para no tirar las imágenes en cada
bump.

### 1.5 Inicio espera a los 102 temas antes de pintar (media)

`mountHomeSection()`, `buildAndSetGlobalIndex()` y `mountAllCalculatorsSection()` recorren el
registro entero llamando a `loadTopic`. Medido en localhost: **7.5 MB, 212 peticiones, 2.7 s**
solo para poder mostrar la portada. En red móvil real eso es más de 10 s con la pantalla vacía.

Arreglo: poner `titulo`, `subtitulo`, `accent` y `quizCount` en la entrada del registro, para que
Inicio pinte sin cargar un solo `content.js`, y construir el índice global en `requestIdleCallback`.

### 1.6 Pérdida silenciosa de escrituras (media) · RESUELTO el 22/10/2026

`flushPendingWrites` (`engine/cloud-sync.js:113`) vacía `dirtyKeys` **antes** del `await setDoc`
y traga el error con `catch (e) {}`. El comentario dice "se reintenta en el próximo syncSet",
pero las claves ya se perdieron: solo vuelven si esa misma clave cambia otra vez. Además el
`beforeunload` dispara una promesa que el navegador no garantiza entregar.

Arreglo: devolver las claves a `dirtyKeys` en el `catch`, y usar `pagehide` además de
`visibilitychange`.

### 1.7 Las reglas de Firestore no están en el repositorio (media)

No hay ningún archivo de reglas en el proyecto, y `fetchAllUsers()` lee la colección `users`
completa (correo, nombre, hospital, país y progreso de cada residente). `isAdmin()` solo oculta
la pestaña en la UI. Si las reglas en consola son `allow read: if request.auth != null`,
cualquier usuario registrado puede leer los datos de todos.

Acción: verificar las reglas hoy y versionarlas en el repo (aunque el despliegue siga siendo
manual) para que se puedan revisar.

### 1.8 Accesibilidad del formulario de acceso (media)

En `engine/auth.js:117` las etiquetas son `<label>Correo</label>` sueltas, sin `for` y sin
envolver al input, así que `auth-email` y `auth-password` quedan sin nombre accesible (el árbol
de accesibilidad no los expone). El `#modal` tampoco tiene `role="dialog"`, `aria-modal` ni
trampa de foco. Lo irónico es que la vista de estudio está mucho mejor que la puerta de entrada.

### 1.9 Menores

- `.app-nav` (`engine/styles.css:608`) usa `width:100%` con `position:fixed`, que se resuelve
  contra el viewport incluyendo la barra de desplazamiento: a 375 px el documento mide 386 px y
  la página se desplaza 11 px en horizontal, con la última pestaña recortada. Cambiar a
  `inset-inline:0; margin-inline:auto; max-width:900px`.
- `navigateToSearchResult` (`app.js`) ejecuta `Function(entry.action)()` sobre cadenas armadas
  por interpolación. Hoy funciona porque el contenido es propio; una comilla en el nombre de una
  escala lo rompe. Pasar una función en lugar de una cadena.
- 9 carpetas vacías en la raíz: `topicscoagulacion-intravascular-diseminada`,
  `topicsdelirium-coma-encefalopatias`, etc. (falta el separador de ruta). Son basura de algún
  script; borrarlas.
- No hay `_headers` de Netlify: sin CSP, sin `X-Content-Type-Options`, sin HSTS. Nota: los 104
  `onclick` en línea obligarían a `'unsafe-inline'` mientras no se migren a listeners.
- El comentario de `engine/usage-tracking.js` dice "nada de identificación del usuario", pero las
  estadísticas viven en `users/{uid}` junto al correo. Es correcto que se haga; el comentario es
  el que miente.

---

## 2. Educación médica

### 2.1 El banco es sobre todo de recuerdo, no de razonamiento (alta)

Medido sobre los 5327 enunciados:

| | Cantidad | % |
|---|---|---|
| Preguntas sueltas | 4762 | |
| ...con escena clínica (paciente, edad, presentación) | 140 | **2.9%** |
| ...pregunta plana de dato ("¿Qué define...?", "¿Cuál es...?") | 1608 | **33.8%** |
| Casos en cascada (con viñeta, 1636 pasos) | 545 | |

Las cascadas son lo mejor del producto y son exactamente el formato correcto. El problema es la
proporción: el 85% de los ítems evalúa evocación de datos, cuando el examen que el residente va a
presentar y la consulta que va a resolver son de aplicación. Un banco con esta distribución
entrena el reconocimiento y no la decisión.

Meta razonable: llevar las viñetas al 40-50% convirtiendo las preguntas planas existentes
(muchas se vuelven viñeta con una sola frase de contexto delante), priorizando los temas de
urgencias y de falla orgánica.

### 2.2 La repetición espaciada se topa a los 14 días (alta)

`engine/quiz-srs.js:8` define cajas 0/1/3/7/14 días, igual que las fichas. El intervalo máximo es
de dos semanas, así que una pregunta dominada vuelve a aparecer **26 veces al año**, para
siempre. Con 3671 preguntas y 3060 fichas, el volumen diario de repaso solo crece y termina
empujando al usuario a abandonar la cola.

Arreglo: extender a 30/60/120/240 días (cajas 6 a 8) e introducir un factor de facilidad por
ítem, estilo SM-2 ligero. Es un cambio de dos constantes y una multiplicación, pero cambia el
producto de "repaso infinito" a "sistema que libera tiempo".

### 2.3 El examen simulado no deja revisar los errores (media)

En `engine/exam-mode.js:187` la pantalla final da puntaje, porcentaje, tiempo y la frase "repasa
los temas donde fallaste", sin decir **cuáles**. La revisión del error es donde ocurre el
aprendizaje de un simulacro. Hay feedback inmediato por pregunta durante el examen (línea 230),
que es bueno para aprender pero rompe la fidelidad del simulacro; lo que falta es el resumen
final navegable: lista de falladas, con el tema y un enlace para abrirlo.

### 2.4 Las fichas están bloqueadas tras el banco completo (media)

Una ficha solo se desbloquea cuando se respondieron las ~35 preguntas del tema. Para un residente
con 10 minutos entre pases, la tarjeta es justamente el formato de entrada, y el candado lo deja
fuera. La intención (forzar recuperación antes de reconocimiento) es defendible, pero el costo
en adherencia es alto. Alternativa: desbloquear por subtema, o tras las primeras 10 preguntas.

### 2.5 No hay objetivos de aprendizaje explícitos (media)

Ningún `content.js` exporta objetivos, competencias ni "qué debes poder hacer al terminar". El
esquema es definición, clasificación, diagnóstico, complicaciones, seguimiento, estigmas,
biopsia, árbol, bibliografía: excelente como referencia, mudo como currículo. Tres o cuatro
objetivos por tema, enlazados a los ítems que los evalúan, permitirían además decirle al residente
*qué* domina, no solo *cuánto* porcentaje lleva.

### 2.6 Menores

- La retroalimentación es una `explanation` global por pregunta. La razón por distractor
  ("por qué B es tentador y por qué está mal") es lo que convierte un ítem fallado en aprendizaje.
- No hay cola de repaso diaria entre temas en Inicio: la vía más corta es "Repaso inteligente"
  dentro de Examen, que no es donde el usuario la busca.
- Las fichas van de 20 a 34 por tema pese a que la norma del proyecto dice 32 (51 temas fuera de
  esa cifra). No es un defecto, pero conviene decidir si la norma es el número o la cobertura.
- Nada registra la confianza ni el tiempo por pregunta, que son las dos señales baratas para
  distinguir "lo sé" de "acerté".

---

## 3. Contenido y cobertura temática

### 3.1 La cobertura real es del 46%, y hay bloques en cero (alta)

Contado sobre `temarioBlocks` en vivo, descontando el bloque duplicado R1: **146 de 318 ítems**
tienen tema construido.

| Bloque | Cubierto |
|---|---|
| Semiología, Neumología, Medicina Crítica, Hematología, Neurología, Dermatología | 100% |
| Endocrinología | 64% |
| Geriatría | 44% |
| Cardiovascular | **18%** (4/22) |
| Gastroenterología y Hepatología | **5%** (1/22) |
| Nefrología e hidroelectrolítico | **0%** (0/18) |
| Infectología | **0%** (0/20) |
| Reumatología | **0%** (0/16) |
| Oncología | **0%** (0/5) |
| Farmacología y Toxicología | **0%** (0/11) |
| Psiquiatría, Salud de la mujer, Paliativos, Oftalmo/ORL | **0%** |
| Habilidades y procedimientos | 6% (1/16) |

Lo que esto significa en la guardia: no hay TVP ni TEP (**ni escala de Wells ni PERC en ninguna
de las 278 calculadoras**), ni síndrome coronario agudo, ni fibrilación auricular, ni enfermedad
renal crónica, ni trastornos del sodio, potasio o ácido-base, ni VIH, ni infección urinaria, ni
celulitis, ni endocarditis, ni artritis séptica, ni gota, ni lupus, ni intoxicación por
paracetamol. Son, en conjunto, la mayor parte de lo que un R1 de Medicina Interna ve en un mes.

El patrón de construcción (hematología y dermatología completas, de punta a punta) está probado y
funciona: conviene aplicarlo a Nefrología e Infectología, que son las dos de mayor rendimiento
por tema construido.

### 3.2 La portada afirma 318 temas (alta) · RESUELTO el 22/10/2026

"Ya cubrimos 318 temas del programa de Medicina Interna" en la pantalla de acceso, con 102 temas
construidos y 146 ítems cubiertos. 318 es el tamaño del temario, no el de lo construido. Un
residente que se registra por esa frase y encuentra Nefrología vacía va a asumir que el resto
tampoco está. Decirlo bien ("102 temas construidos de un temario de 318, y creciendo") es más
creíble y además convierte el temario en promesa de hoja de ruta.

Dos afirmaciones vecinas conviene revisarlas también: "calculadoras clínicas validadas" (validadas
por quién: la escala original está validada, la implementación la valida el autor) y "contrastados
contra CMMI, ACGME y **MKSAP**", que es un producto con derechos de la ACP y mejor no invocarlo
como vara de contraste.

### 3.3 El protocolo de ACLS cita las guías de 2020 (alta) · RESUELTO el 22/10/2026

`protocols/protocols.js` da como fuente "American Heart Association, Guías de ACLS 2020
(Circulation 2020;142:S366)". Las guías 2025 de AHA para RCP y atención cardiovascular de
emergencia existen desde octubre de 2025 (verificado en PubMed, 16 registros). En el protocolo
que más se usa a pie de cama, estar un ciclo completo atrás es lo más urgente de todo este
informe en términos de riesgo.

Relacionado: solo hay **3 protocolos** (ACLS, intubación de secuencia rápida, paquete de sepsis).
Hiperkalemia, hemorragia digestiva, estado epiléptico, código ictus, anafilaxia y transfusión
masiva ya tienen el contenido escrito en sus temas; convertirlos en lista de pasos es barato.

### 3.4 La mitad de la biblioteca está escrita sin acentos (media)

- **50 de 104** `content.js` no contienen una sola vocal acentuada.
- **55 de 104** `study.js` tampoco.
- **1770** entidades `&#241;` sueltas repartidas en 41 archivos (eccemas 100, urticaria 86,
  ampollosas 84).

No es cosmético: se ve en pantalla. El tema de neumonía renderiza "Neumonia", "Definicion",
"Diagnostico", "Neumonia comunitaria tipica", y la nota de Parkland dice "quemadura termica" y
"segun la diuresis". Y es inconsistente dentro de un mismo tema, porque conviven encabezados con
acento ("Escalas y métodos no invasivos") y sin él. Además las entidades HTML solo funcionan
porque todo se pinta con `innerHTML`: el día que algo pase por `textContent`, o que se copie el
texto a una nota, aparece `&#241;` crudo.

Es reparable de una pasada con un script de normalización por tema, revisando el diff.

### 3.5 La densidad de citas es desigual (media)

Mediana de 15 citas por tema, pero los más nuevos van con 2 o 3: `ahogamiento` (2),
`quemaduras` (2), `manifestaciones-cutaneas-sistemicas` (2), `anafilaxia` (3),
`broncoaspiracion` (3), `cancer-cutaneo-no-melanoma` (3). La portada promete que "cada tema y
calculadora cita su fuente", así que conviene fijar un piso (digamos 8) y cerrar esos seis.

### 3.6 Nota sobre figuras

Solo 19 temas tienen `figuras` (58 en total) y 83 no tienen ninguna. Según la norma del proyecto
eso está bien, porque la figura se agrega cuando hace falta didácticamente y no por cuota. Lo
señalo solo porque el reparto no sigue la dificultad del tema: ventilación mecánica, ácido-base
aplicado y las anemias se benefician más de un esquema que varios de los que sí lo tienen.

---

## 4. Orden sugerido

**Esta semana**
1. ~~Corregir la afirmación de 318 temas en la portada.~~ Hecho el 22/10/2026: ahora dice
   "146 de 318". Quedan las dos afirmaciones vecinas ("calculadoras validadas" y el contraste
   contra MKSAP), que son decisión del autor.
2. ~~Revisar el protocolo de ACLS contra las guías AHA 2025.~~ Hecho el 22/10/2026 contra la
   Parte 9, que estaba en `Bibliografia/`. **Queda el bloque posparo**, que depende de la Parte 11
   (Hirsch KG, et al. Circulation. 2025;152(supl 2):S673-S718): no está en `Bibliografia/` ni en
   PMC, así que hay que conseguir el PDF. Los dos pasos afectados van marcados en la app.
3. ~~Dar `id` estable a las preguntas antes de seguir editando bancos (1.1).~~ Hecho el 22/10/2026.

**Este mes**
4. ~~Leer la nube en cada arranque y limpiar el estado al cambiar de usuario (1.2 y 1.3).~~ Hecho el 22/10/2026, junto con la cola de escrituras pendientes (1.6).
5. ~~Adelgazar el precache: WebP y `CORE` reducido (1.4).~~ Hecho el 22/10/2026. Queda separar
   la caché de assets de la de código, para no re-descargar 15 MB en cada despliegue.
6. Metadatos en el registro para que Inicio no espere a 102 temas (1.5).
7. Pasada de acentos sobre los 50 temas afectados (3.4).
8. Resumen de falladas al terminar el examen (2.3).

**Este trimestre**
9. Nefrología e Infectología completas, con Wells y PERC entre las calculadoras.
10. Extender los intervalos del SRS y añadir factor de facilidad (2.2).
11. Convertir preguntas planas en viñetas, empezando por crítica y urgencias (2.1).
12. Objetivos de aprendizaje por tema (2.5).
