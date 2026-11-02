# Revisión general de MIOsler, noviembre de 2026

Continuación de [`revision-general-2026-10.md`](revision-general-2026-10.md). Mismo método: todo
lo que se afirma aquí se midió ejecutando la app, no leyendo el código. Lo que no se pudo medir
va dicho como tal en la sección 5.

Lo que se ejecutó para este informe:

- Suite real en el navegador: **2391/2391 OK**, cero fallos.
- Carga en vivo de los **106 temas** del registro, con **816 fichas de complicación** y
  **494 estigmas** abiertos uno por uno en el DOM.
- **315 calculadoras** y **2008 campos**, simulando la ruta real del motor (los `select` y las
  casillas ya traen valor, los numéricos vacíos) y no solo `compute()` por debajo.
- 14 casos clínicos con respuesta conocida por las calculadoras de Nefrología, que es el
  contenido más nuevo.
- Integridad del precache en disco y en producción, y las cabeceras reales del sitio en vivo.

> **Estado al 1 de noviembre de 2026.** Producción está al día por primera vez desde el 16 de
> octubre: ese día un `_redirects` con sintaxis de Netlify empezó a abortar todos los
> despliegues del Worker, y los 50 commits siguientes nunca se publicaron. Corregido hoy. El
> sitio sirve los 106 temas, el panel de notas y, por fin, ya no sirve la bibliografía con
> derechos de autor.

> **El hallazgo mas grave aparecio al verificar los arreglos**, no en la revision: el examen
> simulado se quedaba en blanco en cuanto salia un caso en cascada, lo que con el valor por
> defecto de 20 preguntas ocurria el **96%** de las veces. Ver 1.4. Corregido y con prueba.

> **Arreglado el 1 de noviembre de 2026, el mismo día.** Once de los hallazgos de este informe
> quedaron corregidos y verificados: el recuento de la calculadora de los cuatro pilares (1.1),
> el README (1.2), las cabeceras de seguridad salvo la CSP (1.3), los intervalos del SRS y el
> factor de facilidad (2.2), el resumen de falladas del examen (2.3), las 4026 entidades HTML
> (mitad de 2.5), y los cinco menores de 2.7: `Function(entry.action)`, la accesibilidad del
> formulario de acceso con trampa de foco incluida, las diez carpetas vacías, el comentario de
> `usage-tracking` y el `width:100%` de la nav. Suite en **2391/2391** después de todo, con el
> barrido de 816 fichas y 494 estigmas otra vez en cero anomalías. Lo que sigue abierto, y por
> qué, está en la sección 7.

---

## 0. Lo que está sólido (medido, no supuesto)

| Área | Evidencia |
|---|---|
| Integridad de los temas | Los 106 cargan y componen. Ninguna carpeta sin entrada en el registro ni al contrario, ningún `topicId` del temario apuntando a un tema inexistente, ninguna cita fuera del rango de su propia bibliografía, ninguna clave de figura huérfana, ninguna tarjeta sin `front`/`back`. |
| Render en el DOM | 816 fichas de complicación y 494 estigmas abiertos: **0 excepciones** y **0** apariciones de `undefined`, `NaN`, `[object Object]` o entidades HTML crudas en el texto renderizado. Es el barrido que en septiembre y octubre destapó cuatro defectos silenciosos; hoy sale limpio. |
| Calculadoras | 315 descriptores, 2008 campos. Reproduciendo la apertura real: **0** resultados con `NaN` o `undefined` visibles. Incluye las 162 que no tienen ningún campo numérico obligatorio (donde el guard `missingRequired` nunca salta) y las 89 que tienen campos opcionales (donde el guard tampoco llega). El motor ya acepta las dos formas de `options`, `{value,label}` y `{v,t}`. |
| Aritmética clínica nueva | Nefrología, 14 casos: Winter da 22.5-26.5 con bicarbonato de 11 y el observado de 25 cae dentro; anión gap 29 con cociente delta 1.31; G3a A2 en riesgo alto y G4 A3 en muy alto, como el mapa de KDIGO; la regla del 30% distingue bien 25% (continuar) de 40% (replantear); el techo de corrección de sodio marca los 10 mmol y señala el exceso de 2; hiperpotasemia de 6.8 con cambios en el ECG saca gluconato cálcico y el esquema de insulina de dos fases; 2 mL/kg de salino al 3% da 140 mL para 70 kg. |
| Service worker | 395 rutas precacheadas (44 en `SHELL`, 351 en `CONTENT`), todas existen en disco. En producción, las 44 del `SHELL` responden 200 y 59 de 351 muestreadas de `CONTENT` también. |
| Producción | `CACHE_VERSION` en vivo igual al commiteado, 106 temas, panel de notas en el DOM colgando de `<body>`, cero errores de consola en una carga limpia, y las 9 rutas de material de trabajo en 404. |
| Capa de sincronización | Los tres arreglos de octubre que tocan datos reales siguen en pie: se lee la nube en cada arranque (el marcador `rm:cloud-synced:` ahora solo se borra), `clearLocalData()` se llama al cambiar de uid y al cerrar sesión, y la cola de escrituras pendientes **persiste en `localStorage`**, que es mejor que lo que se propuso en octubre. |
| Protocolos | Los 3 sin una sola anomalía de forma. El ACLS ya cita la Parte 9 de las guías AHA **2025** y el bundle de sepsis la Surviving Sepsis Campaign **2026**. |

---

## 1. Hallazgos nuevos

### 1.1 La calculadora de los cuatro pilares cuenta cinco (alta en confianza) · RESUELTO el 1/11/2026

En `topics/nefropatia-diabetica-hipertensiva/calculators.js:100` la frase de cierre se arma con
`r.si.length`, que es la lista completa de tratamientos indicados, y esa lista incluye la
metformina. Reproducido:

| Caso | Dice | Debería decir |
|---|---|---|
| TFG 50, UACR 300, K normal, ya en bloqueo máximo, fuera de objetivo glucémico | **"Le corresponden 5 de los pilares"** | 4 |
| TFG 50, potasio **5.6** | "Le corresponden 4 de los pilares", con el antagonista no esteroideo listado abajo en *no indicado por ahora* | 3 |

El segundo caso es el que más confunde: el potasio alto excluye correctamente el no esteroideo,
pero la metformina ocupa el hueco y el recuento no se mueve. Y contradice lo que enseña el propio
tema: el árbol, la tarjeta "Los cuatro pilares, en una línea" y el quiz dicen que los cuatro son
bloqueo, cotransportador, no esteroideo y GLP-1, y que la metformina va aparte con su umbral de
30. El tema está construido alrededor de esa idea, así que el número importa.

Arreglo: contar solo las cuatro entradas que son pilares, o cambiar la frase a "tratamientos
indicados". Una línea.

### 1.2 El README anuncia tres calculadoras generales que no existen (baja) · RESUELTO el 1/11/2026

`engine/general-calc.js` tiene hoy **una sola** calculadora, el CHA₂DS₂-VASc. CURB-65, CKD-EPI y
Wells se quitaron el 18 de julio de 2026 a pedido del autor y el código quedó dentro de un bloque
comentado. El README sigue describiendo el archivo como "Calculadoras generales de MI (CURB-65,
CKD-EPI, Wells, CHA₂DS₂-VASc)". Relacionado con el 3.1 de octubre, que señalaba que no hay Wells
ni PERC en ninguna calculadora: sigue siendo cierto, y ahora además está mal documentado.

### 1.3 Producción no manda una sola cabecera de seguridad (media) · RESUELTO EN PARTE el 1/11/2026

Medido contra el sitio en vivo: `content-security-policy`, `x-content-type-options`,
`strict-transport-security`, `x-frame-options`, `referrer-policy` y `permissions-policy` están
las seis **ausentes**. En octubre esto se anotó como "no hay `_headers` de Netlify" y se quedó
ahí. Lo que cambia hoy es el coste: el sitio es un Worker con assets estáticos, que **sí** lee un
archivo `_headers` en la raíz, así que son cuatro líneas y un push. Con el matiz que ya estaba
anotado: los 104 `onclick` en línea obligarían a `'unsafe-inline'` en la CSP mientras no se
migren a listeners, así que conviene empezar por las cabeceras que no dependen de eso
(`x-content-type-options`, `referrer-policy`, HSTS).

Cuidado al escribirlo: un `_headers` mal formado **no** es como un `_redirects` mal formado (que
aborta el despliegue entero), pero conviene comprobar el build igual, porque hoy sabemos que un
build fallido no avisa.

**Hecho el 1/11/2026.** `_headers` en la raíz con `X-Content-Type-Options`, `Referrer-Policy`,
`X-Frame-Options`, HSTS a un año, `Permissions-Policy` y `Cross-Origin-Opener-Policy`. **Queda la
CSP a propósito**, por lo dicho arriba: necesita `'unsafe-inline'` mientras existan los 104
`onclick`, y la lista de destinos hay que verificarla con una sesión real para no dejar a nadie
fuera. El archivo lleva escrito ese razonamiento.

### 1.4 El examen simulado se rompia con los casos en cascada (critica) · RESUELTO el 1/11/2026

Encontrado al verificar el arreglo de 2.3, no en la revision: el examen fallaba unas veces y
otras no, y lo atribui a mi arnes de pruebas hasta que vi que dependia de QUE preguntas salian.

`loadTopicPool()` mete en el mazo `topic.study.quiz` **entero**, y `renderExamPage()` pinta
`q.options.map(...)`. Un caso en cascada no tiene `options`: las tienen sus `steps`. Asi que en
cuanto una cascada caia en el mazo, la pantalla del examen se quedaba **en blanco** con un
`TypeError` en consola y sin forma de continuar: ni resultado, ni siguiente, nada.

Las cascadas son **565 de las 3823 entradas (14.8%)**, de modo que la probabilidad de que un
examen de 20 preguntas, que es el valor por defecto, se rompiera era de
`1 - 0.852^20` = **96%**. Un examen de 4 preguntas se rompia una de cada dos veces, que es
exactamente el patron intermitente que observe.

Que no lo hubiera visto nadie antes encaja con lo demas de este informe: fallaba en silencio, en
una seccion que hay que atravesar entera para llegar al error.

**Arreglo**: las cascadas entran por su **primer paso**, que es el unico que no depende de haber
contestado los anteriores, con la vineta delante para que el escenario viaje con la pregunta. Se
conservan `type` y `steps` en la entrada del mazo a proposito, porque `questionId()` identifica
una cascada por su vineta y su primer paso: asi el repaso espaciado del examen sigue apuntando al
MISMO item que el quiz del tema, y nadie pierde progreso. Y un cinturon: nada sin `options` y
`correct` utilizables llega a la pantalla.

**Verificado** corriendo un examen de 20 preguntas de punta a punta, las 20 sin un error, hasta la
pantalla final. Y queda una prueba nueva por tema (106 en total, la suite pasa de 2391 a 2497)
que vigila el contrato: toda entrada del banco es o una pregunta suelta con opciones utilizables,
o una cascada cuyo primer paso las tiene.

---

## 2. Lo que sigue abierto de octubre, re-medido

### 2.1 Inicio carga los 106 temas antes de pintar, y empeoró (media) · RESUELTO el 1/11/2026

| | Octubre (102 temas) | Hoy (106 temas) |
|---|---|---|
| Tiempo | 2.7 s | **3.29 s** |
| Peticiones | 212 | 208 |
| Transferido | 7.5 MB | **7.97 MB** |

Cada tema nuevo encarece la portada, porque `mountHomeSection()`,
`buildAndSetGlobalIndex()` y `mountAllCalculatorsSection()` recorren el registro entero llamando
a `loadTopic`. Medido en localhost, que es el mejor caso posible: en red móvil son más de 10 s
con la pantalla vacía. El arreglo propuesto en octubre sigue siendo el correcto: meter `titulo`,
`subtitulo`, `accent` y el número de preguntas en la entrada del registro, y construir el índice
global en `requestIdleCallback`.

**Cerrado el 1 de noviembre de 2026, y resultó ser tres cosas, no una.** Al medirlo de verdad
apareció que `mountHomeSection` era solo el primer tercio: `mountExamSummary` también cargaba el
banco completo (205 peticiones) para evaluar un `if (!pool.length)`, es decir para saber si existe
algún tema con preguntas, y el mazo de fichas de la portada recorría los 106 temas para quedarse
con las fichas de dos o tres, porque `deckSummary()` descarta toda ficha sin progreso guardado.
Las tres cerradas, y las tres de forma exacta, sin aproximar ninguna cifra que el usuario ve:

| | Antes | Ahora |
|---|---|---|
| Clic en Inicio a portada pintada | 2667 ms | **15 ms** |
| Peticiones | 208 | **0** |
| Transferido | 7.28 MB | **0 MB** |

De paso quedó claro que hacían falta dos campos en el registro, no cuatro: `home.js` nunca usó
`titulo` ni `subtitulo` del tema (toma las etiquetas del temario), solo `accent` y el tamaño del
banco. El progreso sale de `answeredCount()`, que cuenta las claves del almacén del repaso
espaciado sin necesitar el banco, con tope para que la portada no pueda pasar del 100%. Y el
índice del buscador, que sí necesita los módulos, se construye en `requestIdleCallback` con
repliegue a `setTimeout`, fuera del camino crítico: hasta que termina, el buscador devuelve menos
resultados en lugar de retrasar la portada.

### 2.2 El SRS sigue topando en 14 días (alta) · RESUELTO el 1/11/2026

`engine/quiz-srs.js` define `INTERVALS = { 1: 0, 2: 1 día, 3: 3, 4: 7, 5: 14 }`. Con **4954
subpreguntas** y **3188 tarjetas**, una pregunta dominada vuelve 26 veces al año para siempre, y
el volumen diario de repaso solo crece. Sigue siendo un cambio de dos constantes y una
multiplicación.

Nota buena del mismo archivo: la identidad de la pregunta ya se deriva del enunciado normalizado
y no de la posición en el array, con el razonamiento escrito en el encabezado. El 1.1 de octubre
quedó bien cerrado.

### 2.3 El examen simulado sigue sin decir qué se falló (media) · RESUELTO el 1/11/2026

Confirmado en `engine/exam-mode.js`: la pantalla final da puntaje, porcentaje, tiempo, una frase
genérica según el tramo y un botón de volver. No hay lista de falladas ni enlace al tema. La
revisión del error es donde ocurre el aprendizaje de un simulacro.

### 2.4 Las fichas siguen bloqueadas tras el banco completo (media)

`study-view.js` sigue pintando la tarjeta con candado y el texto "Responde N preguntas". Para
quien tiene diez minutos entre pases, la ficha es el formato de entrada.

### 2.5 Los acentos: el problema creció (media) · RESUELTO EN PARTE el 1/11/2026

| | Octubre | Hoy |
|---|---|---|
| `content.js` sin una sola vocal acentuada | 50 de 104 | **50 de 106** |
| `study.js` sin una sola vocal acentuada | 55 de 104 | **56 de 106** |
| Entidades `&#NNN;` | 1770 en 41 archivos | **3612 en 45 temas** |

Las entidades se duplicaron, así que los temas nuevos se seguian escribiendo así. Dato nuevo de
esta revisión: en el DOM **se ven bien**, eso quedó comprobado en el barrido de las 816 fichas
(cero entidades crudas en el texto renderizado), porque todo se pinta con `innerHTML`. El riesgo
era el que se anotó: el día que algo pase por `textContent`, y la inconsistencia visible dentro
de un mismo tema.

**Hecho el 1/11/2026, la mitad.** Las **4026 entidades numéricas pasaron a caracteres reales** en
131 archivos de `topics/`, dejando intacto `engine/` (donde los tres `&#...;` que hay son parte de
expresiones regulares) y cualquier código por debajo de 160, para no convertir un `&#39;` en una
comilla y romper el JavaScript. Se comprobó antes lo único que podía doler: `normalizeStem()` de
`quiz-srs.js` decodifica las entidades y quita las tildes **antes** de calcular el id de la
pregunta, así que ningún id cambió y nadie perdió su calendario de repaso. La suite siguió en
2391/2391, que importaba porque los umbrales de calidad del quiz miden longitudes de opción y
decodificar las acorta.

**Lo que NO se tocó, y es la otra mitad**: los 50 `content.js` y 56 `study.js` que no tienen una
sola vocal acentuada siguen igual, porque esos archivos usaban entidades solo para la ñ y el ¿,
y las vocales las escribieron directamente sin tilde ("Neumonia", "Definicion", "segun"). Eso no
es mecanizable sin criterio: "diagnostico" puede ser sustantivo o primera persona, y una tilde mal
puesta en texto clínico es peor que la falta. Va tema por tema, revisando el diff, como decía el
informe de octubre.

### 2.6 Las citas: el umbral de 8 era la medida equivocada (media) · REPLANTEADO el 1/11/2026

Lo que decía este apartado: mediana de 15 citas por tema, 1441 en total, y **21 temas** por
debajo de 8, con cuatro en 2. Al medirlo sobre los módulos reales para cerrarlo, **son 20, no
21**, y lo más importante: **contar citas no mide lo que importa.**

Tres cosas aparecieron al mirarlo de cerca.

**Varios de los 20 están completa y correctamente citados.** `melanoma` tiene 4 citas y son
exactamente las 4 fuentes con las que se escribió (ESMO, AJCC 8, SEOM-GEM y el consenso de
lentigo maligno); `cancer-cutaneo-no-melanoma` tiene 3 y son sus 3; `eritemas-reactivos` tiene 4
y son sus 4. Perseguir el 8 en esos temas solo podía producir **relleno**, que es peor que una
lista corta.

**La maquinaria de citas está sana.** Ni un solo índice fuera de rango en los 106 temas, así que
no hay ninguna cita que apunte al vacío.

**El defecto real estaba en otro sitio, y era de atribución.** `urticaria` tenía 3 citas, pero
dos eran **de otros módulos**: la guía de psoriasis de SOLAPSO y la de Stevens-Johnson. Las
únicas menciones de "psoriasis" y de "Stevens" en todo el tema eran las propias cadenas de esas
citas, es decir que no sostenían nada. Y al revés: la ficha "Angioedema: con habones y sin
habones", con **20 campos de contenido clínico** sobre el hereditario (C4 bajo, cuantificación y
función del inhibidor de C1, riesgo laríngeo, retirada del inhibidor de la enzima convertidora,
profilaxis antes de procedimientos), tenía el `compCites` **vacío** y ninguna de sus dos fuentes
en la lista. Corregido: fuera las dos ajenas, dentro la WAO/EAACI de angioedema hereditario
(Maurer 2022, PMC9023902) y la International/Canadian de 2026 (Betschel, PMC13123228), las dos
abiertas y comprobadas en PubMed, y los 18 campos atribuidos uno por uno. Verificado abriendo la
ficha: las marcas 1, 1-2, 2, 2-3 y 3 se pintan y las tres referencias salen en la bibliografía.

**Y la medida que sí dice algo**, tomada sobre los 106 temas: **453 fichas en 76 temas no tienen
ni una cita**, y **12516 de 13536 campos clínicos (el 92%) no están atribuidos**. El típico tema
cita 2 campos de los 20 de una ficha. Visto en 104 temas seguidos, eso no parece un descuido sino
**la convención con la que se escribió la app**: bibliografía por tema, con atribución puntual en
lo que el autor quiso marcar. Cerrarlo entero son 13 mil campos a mano, así que era una
decisión de alcance y no un arreglo.

**El autor la tomó el 1 de noviembre: regla mínima.** `criterios_dx`, `laboratorio` y
`tx_farmacologico` llevan cita siempre que tengan contenido. Eso acota el trabajo de 13 536
campos a **2072**, que es el 15% y cubre justo donde una afirmación sin fuente pesa más junto a
la cama del paciente. La regla, el estado y la lista de trabajo por tema están en
`.claude/atribucion-citas.md`; la regla también quedó en `CLAUDE.md` para que un tema nuevo nazca
cumpliéndola.

**Dos bloques hechos, el 1 y el 2 de noviembre: de 266 a 338 campos atribuidos y de 3 a 12 temas completos.**
Se eligieron los temas donde la atribución está **forzada** porque cada fuente tiene un asunto
propio, de modo que el texto del campo dice a cuál pertenece: la Parte I y la Parte II de la
revisión de An Bras Dermatol (vascular y reumatológico frente a endocrino, renal y
paraneoplásico), las dos guías AIOM frente al Kaposi, la ESMO del melanoma, y la guía de
ahogamiento frente a la de ARDS. 72 atribuciones en total, cada una justificada por el asunto de su fuente. Al segundo bloque
entraron anafilaxia, broncoaspiracion, abdomen agudo, supresion alcoholica, urticaria, ampollosas
y eccemas, elegidos por el mismo criterio: pocas fuentes y cada una con su asunto.

**Y lo que NO se atribuyó, que importa igual.** La paniculitis de `eritemas-reactivos` se queda
sin cita porque ninguna de sus cuatro fuentes la cubre de verdad, y de `quemaduras` solo se
atribuyeron los dos campos del protocolo de traslado, que son claramente del ATLS: los otros
siete reparten entre la revisión de Jeschke y el manual sin que el texto permita decidir.
Adivinar habría sido repetir el defecto de `urticaria`.

**El resto queda con trinquete, no con umbral.** `tests.js` fija que el total atribuido solo
puede subir y que los 7 temas completos siguen completos (14 pruebas, suite 2620).
Comprobado que salta: al quitar una cita de `melanoma` el candado nombra el hueco, y un índice
fuera de rango lo detecta la otra prueba. Quedan **1734 huecos en 94 temas**, con la lista
ordenada de menos a más trabajo.

### 2.7 Menores

- **Las fichas por tema van de 20 a 32** y **51 de 106** temas no están en 32, que es la norma
  escrita del proyecto. Sigue pendiente la decisión de octubre: si la norma es el número o la
  cobertura. Hoy la prueba solo exige que existan.
- `Function(entry.action)()` sigue en `app.js:234`. Funciona porque el contenido es propio; una
  comilla en el nombre de una escala lo rompe.
- **Accesibilidad de la puerta de entrada** (1.8 de octubre): sin cambios. Las etiquetas de
  `engine/auth.js` siguen siendo `<label>Correo</label>` sueltas, sin `for`, y en todo
  `index.html` y `auth.js` hay **cero** `role="dialog"` y cero `aria-modal`. La vista de estudio
  sigue estando mejor que el formulario de acceso.
- **Nueve carpetas vacías `topicsXXX`** sin el separador de ruta, más una "New folder". Octubre
  ya las señaló. No se publican (git no versiona carpetas vacías) pero ensucian la raíz.
- El encabezado de `engine/usage-tracking.js` sigue diciendo "nada de contenido de las respuestas
  ni identificación del usuario" mientras las estadísticas se guardan con `syncSet`, es decir en
  `users/{uid}`, junto al correo y el nombre, y Admin las muestra por usuario. Que se haga está
  bien y está en los términos; el comentario es el que induce a error.
- **La nav inferior y el desborde horizontal a 375 px**: no se reproduce. Con una barra vertical
  forzada, el documento mide 375 y la nav va de 0 a 375, desborde 0. El CSS que lo causaba sigue
  igual (`position:fixed` con `width:100%`), así que lo más probable es que el motor de este
  navegador use barras superpuestas y el defecto aparezca solo donde la barra ocupa espacio.
  Cambiar a `inset-inline:0; margin-inline:auto` sigue siendo gratis y quita la dependencia.

---

## 3. Lo que mejoró desde octubre

| | Octubre | Hoy |
|---|---|---|
| Temas construidos | 102 | **106** |
| Pruebas | 2288 | **2391** |
| Cobertura del temario | 146/318 (46%) | **156/318 (49%)** |
| Nefrología | 0/18 | **10/18 (56%)** |
| Calculadoras | 278 | **315** |
| Citas | 1417 | **1441** |
| Preguntas sueltas con escena clínica | 2.9% | **12.7%** |
| Preguntas planas de dato | 33.8% | **23.6%** |
| Reglas de Firestore en el repo | no | **sí** (`firestore.rules`, 1.7 cerrado) |
| Bibliografía con derechos de autor en el sitio | se servía | **404** |

El punto 2.1 de octubre pedía llevar el razonamiento al 40-50% del banco. Contando los pasos de
cascada, que son el formato correcto y de los que 1672 de 1696 llevan viñeta, hoy **2110 de las
4954 subpreguntas (42.6%)** se apoyan en una escena clínica. La meta está alcanzada; lo que
queda es que las preguntas sueltas suban su propio 12.7%.

---

## 4. Cobertura por bloque

156 de 318 ítems, descontando el bloque duplicado R1.

| Bloque | Cubierto |
|---|---|
| Semiología, Neumología, Medicina Crítica, Hematología, Neurología, Dermatología | 100% |
| Endocrinología y Metabolismo | 64% (16/25) |
| **Nefrología e hidroelectrolítico** | **56% (10/18)** |
| Geriatría | 44% (4/9) |
| Cardiovascular | 18% (4/22) |
| Habilidades y procedimientos | 6% (1/16) |
| Gastroenterología y Hepatología | 5% (1/22) |
| Infectología | **0% (0/20)** |
| Reumatología e Inmunología | **0% (0/16)** |
| Farmacología y Toxicología | **0% (0/11)** |
| Paliativos y Bioética | 0% (0/10) |
| Salud de la Mujer | 0% (0/8) |
| Psiquiatría, Oftalmo/ORL | 0% (0/6 cada uno) |
| Oncología | 0% (0/5) |
| Ambulatoria y Preventiva | 0% (0/4) |

Nefrología pasó de cero a 56% desde octubre, con el patrón de construcción ya probado. Las dos de
mayor rendimiento por tema construido siguen siendo **Infectología** y **Reumatología**, que
suman 36 ítems entre las dos y están las dos en cero.

---

## 5. Lo que no pude verificar

- **El ciclo completo del panel de notas**: publicar, borrar, destacar y reportar. Necesita dos
  sesiones reales y no puedo iniciar sesión en las cuentas del autor. Lo que sí está comprobado:
  el panel se monta en producción, `topic-chat.js` y `texto-seguro.js` responden 200, las
  funciones puras de escape están cubiertas por 12 pruebas, y el panel cuelga de `<body>` como
  debe.
- **Que las reglas de Firestore publicadas sean las del repo.** El autor confirmó el 1 de
  noviembre que están puestas. Una sonda sin sesión devuelve permiso denegado con las reglas
  viejas y con las nuevas, así que desde fuera no se distingue.
- **El contenido clínico de los 106 temas uno por uno.** Esta revisión comprobó estructura,
  render y aritmética. La verificación clínica a fondo del contenido nuevo (Dermatología y
  Nefrología) está en sus propias notas de construcción.

---

## 6. Orden sugerido, con lo hecho tachado

La lista completa de lo que sigue abierto, con el motivo de cada cosa, esta en la seccion 7. Esta
de aqui es el orden en que conviene atacarlo, y guarda tachado lo que ya se hizo para que se vea
de donde venia cada arreglo.

**Ahora, son minutos**
1. ~~El recuento de la calculadora de los cuatro pilares (1.1).~~ Hecho. De paso salio a la luz
   una concordancia: con un solo pilar decia "Le corresponden 1", corregido tambien.
2. ~~Corregir el README sobre `general-calc.js` (1.2).~~ Hecho.
3. ~~Borrar las diez carpetas vacias de la raiz (2.7).~~ Hecho.

**Esta semana**
4. ~~Las cascadas del examen simulado (1.4).~~ Hecho, y era lo mas urgente de todo el informe
   aunque aparecio al final: el examen se quedaba en blanco el 96% de las veces. `buildPool`
   aplana la cascada a su primer paso conservando `type` y `steps`, y 106 pruebas nuevas vigilan
   el contrato.
5. ~~`_headers` con las cabeceras que no dependen de la CSP (1.3).~~ Hecho; la CSP queda aparte,
   y sigue pendiente: es el punto 11 de esta lista.
6. ~~Resumen de falladas al terminar el examen (2.3).~~ Hecho, agrupado por tema y con boton al
   tema. Verificado corriendo un examen de 4 preguntas y fallando 3 a proposito.
7. ~~Metadatos en el registro para que Inicio no espere a 106 temas (2.1).~~ Hecho el 1/11/2026.
   Eran tres sitios y no uno (ver 2.1): la portada pasa de 2667 ms, 208 peticiones y 7.28 MB a
   15 ms, cero peticiones y cero bytes. Una prueba por tema vigila los dos campos duplicados.

**Este mes**
8. ~~Extender los intervalos del SRS y anadir factor de facilidad (2.2).~~ Hecho: 9 cajas,
   0/1/3/7/14/30/60/120/240 dias, y los intervalos dejaron de estar copiados en tres archivos.
9. ~~Pasada de acentos (2.5).~~ Hecha la mitad: las 4026 entidades. La otra mitad, las tildes que
   faltan en 50 temas, en la seccion 7.
10. ~~Accesibilidad de la puerta de entrada (2.7).~~ Hecho: las 12 etiquetas asociadas con `for`,
    `role="dialog"` y `aria-modal` en el modal compartido, y una trampa de foco que acota el
    tabulador al modal mientras esta abierto.
11. Las tildes que faltan en 50 temas, la otra mitad de 2.5. **Pendiente**, ver la seccion 7.
12. La CSP, la parte de 1.3 que no se pudo cerrar. **Pendiente**, ver la seccion 7.
13. Las citas (2.6). **Replanteado y en marcha desde el 1/11/2026**: el umbral de 8 era la
    medida equivocada, `urticaria` quedo corregida y el autor fijo la regla minima
    (`criterios_dx`, `laboratorio`, `tx_farmacologico`). Dos bloques hechos, 12 temas completos,
    y el resto con trinquete en `tests.js`. Lista de trabajo en `.claude/atribucion-citas.md`.
14. El candado de las fichas (2.4). **Pendiente**, y es una decision del autor entre dos
    alternativas, ver la seccion 7.

**Este trimestre**
15. Infectologia y Reumatologia, los dos bloques en cero de mayor rendimiento (36 items entre los
    dos).
16. Decidir la norma de las fichas: 32 por tema, o cobertura del tema. **Es una decision del
    autor**, no un defecto, y es distinta del candado del punto 14: esta es cuantas fichas lleva
    un tema, aquella es cuando se desbloquean.
17. Objetivos de aprendizaje por tema (2.5 de octubre, sin empezar).

---

## 7. Lo que queda abierto, y por que no se cerro hoy

Esta seccion es la lista **completa** de lo abierto, y la seccion 6 ordena lo mismo en el tiempo:
cada pendiente de alla aparece aqui con su motivo. Lo que esta a la espera de **comprobacion**, no
de trabajo, vive aparte en la seccion 5 y no se repite aqui.

**Mias, puedo hacerlas sin que nadie decida nada**

_(Los metadatos de Inicio, que abrian esta lista, se cerraron el 1 de noviembre: ver 2.1.)_

- **Las tildes que faltan en 50 temas (la otra mitad de 2.5).** No es mecanizable: "diagnostico"
  puede ser sustantivo o verbo, y una tilde mal puesta en texto clinico es peor que la falta. Va
  tema por tema revisando el diff.
- **Las citas (2.6): decidido y en marcha, no pendiente de decisión.** El autor fijó la regla
  mínima (`criterios_dx`, `laboratorio`, `tx_farmacologico`), que acota el trabajo a 2072 campos.
  Hechos dos bloques (338 atribuidos, 12 temas completos) y puesto el trinquete en `tests.js`
  para que no se desande. **Quedan 1734 huecos en 94 temas**, que es leer fuentes tema por tema,
  con la lista ordenada por esfuerzo en `.claude/atribucion-citas.md`. Lo único que no se hace
  solo: cuando varias fuentes del tema podrían sostener el campo hay que leerlas, porque una cita
  equivocada es peor que un hueco.
- **La cobertura (seccion 4).** Es escribir temas nuevos. Infectologia (0/20) y Reumatologia
  (0/16) son los dos bloques de mayor rendimiento, 36 items entre los dos.
- **Los objetivos de aprendizaje por tema.** Venia del informe de octubre (su 2.5) y sigue sin
  empezar. No se habia vuelto a nombrar en ningun sitio salvo el orden sugerido, que es como paso
  inadvertido hasta el 1 de noviembre.

**Tuyas, son decisiones del autor y no defectos**

- **El candado de las fichas (2.4).** `study-view.js` pinta la tarjeta con candado y el texto
  "Responde N preguntas". El informe propone dos alternativas (desbloquear por subtema o tras las
  primeras 10 preguntas) y elegir una es una decision sobre el diseno didactico de la app, no un
  defecto que arreglar por cuenta propia. Un cambio de una linea en cuanto se decida.
- **La norma de las fichas: 32 por tema, o cobertura del tema.** Distinta de la anterior: aquella
  es *cuando* se desbloquean, esta es *cuantas* lleva cada tema. Hoy son 32 fijas y `tests.js` lo
  exige, asi que cambiarlo toca tambien el umbral de las pruebas.

**A medias: necesitan una sesion real**

- **La CSP (parte de 1.3).** Necesita la lista exacta de destinos y una sesion real para
  comprobar que nadie se queda sin iniciar sesion. Las otras seis cabeceras ya estan puestas y
  verificadas en produccion; esta es la unica que puede dejar a alguien fuera si se escribe mal.
