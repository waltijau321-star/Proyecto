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
> formulario de acceso, las diez carpetas vacías, el comentario de `usage-tracking` y el
> `width:100%` de la nav. (De esa accesibilidad, la trampa de foco se dio por buena sin
> comprobarla y **no sujetaba**: ver 2.8, arreglado el 2 de noviembre.) Suite en **2391/2391** después de todo, con el
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

### 1.3 Producción no manda una sola cabecera de seguridad (media) · RESUELTO el 2/11/2026

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
`X-Frame-Options`, HSTS a un año, `Permissions-Policy` y `Cross-Origin-Opener-Policy`.

**La CSP, el 2/11/2026, y en modo `Report-Only`.** Lo que mantenía este punto abierto era doble:
hacía falta la lista exacta de destinos, y "verificarla con una sesión real" parecía la única
manera de no dejar a nadie fuera. Las dos mitades tenían salida.

**La lista sale del código, no de suposiciones.** Medido sobre lo que se publica (descontando
`graphify-out/`, que no se sirve): el SDK de Firebase 12.15.0 se importa como tres módulos de
`www.gstatic.com`; la hoja de Google Fonts viene de `fonts.googleapis.com` y sus `.woff2` de
`fonts.gstatic.com`; las 34 imágenes clínicas externas son todas de `upload.wikimedia.org`; los
vídeos incrustados son 9 `iframe` de `www.youtube.com`; y el SDK habla con cuatro hosts de Google
(`identitytoolkit`, `securetoken`, `firestore` y `www.googleapis.com`). **No hay un solo `fetch`**
**a un host externo en todo el código**, ni `eval`, ni `new Function`, ni URIs `data:`, ni
inyección de estilos en tiempo de ejecución, y `index.html` no tiene ni un `<script>` ni un
`<style>` en línea. Lo demás que aparece en el código son enlaces salientes (`<a href>` a Merck,
Cleveland Clinic, Wikipedia, PubMed y los audios de la Universidad de Washington), y la CSP no
gobierna la navegación, así que no hay que listarlos. El `xmlns` de los SVG (`www.w3.org`) tampoco
es una petición de red.

**Y el riesgo de dejar a alguien fuera se quita con `Report-Only`**: el navegador informa de lo que
habría bloqueado y no bloquea nada. El propio archivo explica cómo pasarla a obligatoria después
de unos días de uso con sesión real, y por qué no hacerlo sin haber iniciado sesión al menos una
vez.

**Pero antes de publicarla se probó en modo OBLIGATORIO**, que es más fuerte que confiar en el
informe: se cargó la app en el navegador con la política inyectada como `<meta>` en el mismo
origen, y bajo ella arrancó limpia (sin un solo mensaje en consola), cargó las 61 fuentes y los
tres módulos del SDK, **cargaron dos imágenes reales de Wikimedia a 960 px**, **cargó un `iframe`**
**de YouTube** y **se registró el service worker**. Con dos controles negativos para demostrar que
la política estaba de verdad activa y no ignorada: un `<script>` de `cdn.jsdelivr.net` y una imagen
de `example.com`, **los dos bloqueados**, con el mensaje de consola nombrando la directiva
(`script-src 'self' 'unsafe-inline' https://www.gstatic.com`). Lo único que no se puede probar sin
sesión es el intercambio con `identitytoolkit`/`securetoken`/`firestore`, que es exactamente para
lo que está el `Report-Only`.

**`'unsafe-inline'` sigue siendo necesario, y hoy son más de los 104 que decía este informe**: hay
**188 `onclick`**, 5 `oninput`, 4 `onchange`, 1 `onerror` y **8084 atributos `style=`**. Con
`'unsafe-inline'` la política ya no frena un XSS que inyecte un `onclick`, pero sí acota de dónde
puede venir el código, prohíbe `eval` y corta la exfiltración a un host ajeno, que es la segunda
mitad de cualquier XSS. Quitarlo es convertir 188 manejadores a `addEventListener`: un trabajo
aparte, no una línea.

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

### 2.5 Los acentos (media) · CERRADO el 2/11/2026

| | Octubre | 1/11/2026 | Hoy |
|---|---|---|---|
| `content.js` sin una sola vocal acentuada | 50 de 104 | 50 de 106 | **0** |
| `study.js` sin una sola vocal acentuada | 55 de 104 | 56 de 106 | **0** |
| Entidades `&#NNN;` | 1770 en 41 archivos | 0 | 0 |

**Las entidades se cerraron el 1/11** (4026 convertidas a caracteres reales en 131 archivos). Lo
que quedaba era la otra mitad: los temas que escribieron las vocales directamente sin tilde
("Neumonia", "Definicion", "segun", "mas"). El informe decia que no era mecanizable, porque
"diagnostico" puede ser sustantivo o verbo y una tilde mal puesta es peor que la falta. **Lo era en
su mayor parte, con el criterio puesto en el sitio correcto: no en el tema, sino en la palabra.**

**83 489 palabras acentuadas en 314 archivos**, y ni un
archivo de `topics/` queda sin tildes. `engine/`, `protocols/`, `app.js`, `registry.js`,
`temario-index.js` e `index.html` ya estaban bien: el problema era solo de los temas.

**Lo que habia que resolver primero no era la ortografia, era saber donde se puede escribir.** En
estos archivos el texto del residente convive con el codigo, y varias palabras del esquema son
nombres de propiedad: `definicion`, `clinica`, `pronostico`, `farmacologico`. Acentuar una de esas
deja al motor buscando una clave que ya no existe, en silencio. Hay mas sitios intocables:

- los valores que el motor compara, como `dificultad: 'facil'` contra el `<option value="facil">`
  del examen simulado, o el `id` del tema, que es la clave de su coleccion de notas;
- las etiquetas y atributos de HTML dentro de las cadenas, las URL y los comentarios;
- `bibliografia` y `fuente`, donde viven `Martin ML`, `Alvarez RD` y
  `Berlin definition. JAMA. 2012`: apellidos y titulos tal como se publicaron, y ponerles tilde
  falsifica la referencia. En la prosa, en cambio, "definicion de Berlin" si la lleva.

Asi que lo primero fue un extractor del texto VISIBLE, comprobado de forma independiente: de las
35 775 claves de codigo y las 14 395 etiquetas HTML de los temas, **cero** quedaron dentro de la
zona escribible, y el conjunto de nombres de etiqueta, atributo, clase y variable CSS de cada
archivo es identico antes y despues.

**La ambiguedad se resolvio por morfologia, no por tema.** La prueba util resulto ser si existe el
infinitivo: `diagnosticar`, `formular` y `practicar` existen, asi que `diagnostico`, `formula` y
`practica` pueden ser verbo; `tecnicar` y `biologicar` no existen, asi que `tecnica` y `biologico`
son sustantivo y adjetivo y nada mas. Lo que quedo ambiguo de verdad se decidio midiendo el
registro del corpus: **4 "yo" y 1 "considero" en 8,6 millones de caracteres**, y **cero** formas en
-o precedidas de "se", de modo que "yo diagnostico" no existe aqui y `diagnostico` solo puede ser
el sustantivo.

**Lo que NO se toco, y es correcto que siga asi:**

- los pares sustantivo/preterito: `estudio`, `inicio`, `cambio`, `paso`, `fallo`, `motivo`,
  `desarrollo`, `uso`. Sin tilde ya son el sustantivo, que es la lectura correcta en casi todos los
  casos: `estudio` aparece 1531 veces y `estudio` acentuado 3. Acentuarlos en bloque habria metido
  un error cada vez;
- `continua` y `amplia`, donde la forma sin tilde es el adjetivo ("infusion continua") y la
  acentuada el verbo;
- las palabras de doble acentuacion, donde las dos grafias son validas: `cardiaca` (que el autor
  escribe sin tilde 1041 veces frente a 5 con ella), `triada`, `varices`, `alveolo`. No hay error
  que corregir y normalizarlas seria cambiarle el estilo al autor;
- los interrogativos fuera del signo de apertura. Se acentuaron los 581 `¿que`, 85 `¿cual` y
  los demas que van justo detras del signo, porque ahi la tilde es segura; dentro de la frase, "el
  farmaco que se usa" sigue siendo relativo;
- `el`/`el`, `si`/`si`, `esta`/`esta`, `este`/`este`, `solo`, `aun`: piden analisis sintactico de
  verdad y la forma sin tilde es la correcta en la mayoria de los casos.

**Dos errores propios que conviene dejar escritos**, porque los dos eran del tipo que no se ve:

1. La regla "una cadena de una sola palabra es un identificador" tiraba tambien los trozos de
   etiqueta partidos por una interpolacion, como `;font-size:14.5px;">`. Al perderse ese trozo se
   perdia su `>`, el rastreador de etiquetas se quedaba abierto y apagaba el texto de las etiquetas
   siguientes: **tres temas se quedaron sin acentuar y lo destapo la prueba nueva**, no la lectura
   del diff.
2. La primera version de la lista de palabras de la prueba incluia `lesiones`, `infecciones` y
   `funciones`. El plural de las agudas en -on **pierde** la tilde, asi que estaban bien y la lista
   estaba mal. Es el error contrario y el mas facil de cometer.

**Guardarrail**: una prueba por tema en `tests.js` (`tildes[<id>]`) recorre los valores de texto
del tema ya cargado y falla si reaparece una palabra de una lista que, sin tilde, no es palabra
espanola. Mira el objeto y no el archivo, de modo que no puede confundir un nombre de propiedad con
prosa, y deja fuera `bibliografia`, `fuente` y las cadenas de una palabra.

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

**Tres bloques hechos, el 1 y el 2 de noviembre: de 266 a 377 campos atribuidos y de 3 a 17 temas completos**, Semiologia 6 de 9.
Se eligieron los temas donde la atribución está **forzada** porque cada fuente tiene un asunto
propio, de modo que el texto del campo dice a cuál pertenece: la Parte I y la Parte II de la
revisión de An Bras Dermatol (vascular y reumatológico frente a endocrino, renal y
paraneoplásico), las dos guías AIOM frente al Kaposi, la ESMO del melanoma, y la guía de
ahogamiento frente a la de ARDS. 111 atribuciones en total, cada una justificada por el asunto de su fuente. Semiologia, que parecia imposible de repartir porque sus nueve temas comparten cinco libros generales, si tenia criterio: el valor diagnostico va a McGee, el hallazgo con paper propio a su paper, la exploracion cardiaca a Perloff y Constant, y la tecnica a Bates y Argente. Al segundo bloque
entraron anafilaxia, broncoaspiracion, abdomen agudo, supresion alcoholica, urticaria, ampollosas
y eccemas, elegidos por el mismo criterio: pocas fuentes y cada una con su asunto.

**Y lo que NO se atribuyó, que importa igual.** La paniculitis de `eritemas-reactivos` se queda
sin cita porque ninguna de sus cuatro fuentes la cubre de verdad, y de `quemaduras` solo se
atribuyeron los dos campos del protocolo de traslado, que son claramente del ATLS: los otros
siete reparten entre la revisión de Jeschke y el manual sin que el texto permita decidir.
Adivinar habría sido repetir el defecto de `urticaria`.

**CERRADO EN SU MAYOR PARTE EL 2/11/2026: 1962 de 2072 campos (94.7%) y 91 de 106 temas
completos**, frente a los 377 y los 17 del parrafo anterior. Y no fue fuerza bruta: la causa de la
mayor parte del problema **no era que faltaran citas**. `compCites` admite dos formas, por campo
(`{ criterios_dx: [3] }`) y plana (`[3, 4]`, las fuentes de la ficha entera), y `openModal`
normaliza la plana **anclandola solo a `definicion`**. Eran **62 de los 106 temas y 427 fichas** con
las fuentes declaradas por el autor y sin pintar nada en `criterios_dx`, `laboratorio` ni
`tx_farmacologico`. Eso explica el patron de "24 huecos de 24 campos" que este informe venia
leyendo como "el compCites nunca se relleno": estaba relleno y no se veia.

Se arreglo en tres pasadas mecanicas (conversion de las 427 fichas, herencia del campo declarado
mas cercano en 41 temas, y poda de 392 entradas inertes colgadas de campos que la ficha no tiene)
mas 51 atribuciones a mano que cerraron Semiologia 9 de 9.

**Lo que queda, con honestidad: de los 1962, unos 1250 estan atribuidos a nivel de FICHA y no de
campo.** La cita dice que la ficha se apoya en esas fuentes, no que ese campo salga de esa fuente.
Es fiel a lo que el autor declaro y es un salto frente a no pintar nada, pero no es lo mismo que
las 111 hechas a mano leyendo cada campo. Afinarlas es trabajo de leer fuentes y sigue abierto.

**Quedan 110 huecos en 15 temas** (eran 131 el mismo dia; se cerraron 23, se retiraron 3 por
equivocadas y una volvio al arreglar el texto del campo), en `ATRIB_PENDIENTES` de `tests.js` y
en `.claude/atribucion-citas.md`.

**La premisa con la que se habian dejado era equivocada, y se vio al ponerse a cerrarlos.** Este
apartado decia que estaban "en fichas que no declaran ninguna fuente" y que cerrarlos "exige
fuentes nuevas, no reparto". Las dos cosas resultaron falsas: **63 de los 131 estaban en fichas que
SI declaran fuentes** (en `cirrosis-hepatica`, Ascitis, PBE y la encefalopatia ya citaban la fuente
correcta en los otros campos y solo `laboratorio` estaba vacio), y donde de verdad hacia falta una
fuente nueva, **la fuente ya estaba en `Bibliografia/`**. El ejemplo que este informe ponia como
caso claro, el score ISTH de la CID de `sepsis`, esta en el repositorio desde hace tiempo:
`Iba-et-al-2025-ISTH-DIC-updated-definition.pdf`, en su carpeta de hemostasia, nunca anadido a la
`bibliografia` de ese tema. Se cerraron **23 huecos sin necesitar una sola fuente de fuera**, cada
uno verificado buscando en el PDF las afirmaciones del campo y anotando paginas y apariciones.

**Y una cuarta cosa, de metodo, que salio al revisar la propia pasada.** Las 23 citas se habian
verificado contando apariciones de los terminos del campo en el PDF. Al releer los 11 pasajes en
que la cita se habia inferido de esa coincidencia, **3 no se sostenian** y hubo que retirarlas: la
midodrina de la ascitis refractaria (la guia trae un ensayo sin diferencia y la recomienda solo en
el hepatorrenal con eficacia baja) y el `laboratorio` de la dopamina y de la dobutamina (en
Surviving Sepsis la arritmia es un desenlace de ensayo, no una recomendacion de monitorizar).
**Un recuento da el mismo numero si la fuente recomienda algo que si lo descarta.** El estandar que
queda es leer el pasaje y dejar la frase de la guia escrita junto a la cita; asi quedaron las 8
restantes, y en 4 de ellas el pasaje dejo ver una clausula del campo que ninguna fuente sostiene.

**Y leer dejo ademas dos arreglos de CONTENIDO, que el autor aprobo el mismo dia.** El primero
devolvio una de las tres citas retiradas: el campo de la midodrina afirmaba mas de lo que su fuente
aguanta, no estaba equivocado, asi que se arreglo el texto (se queda la conducta, con lo que el
ensayo encontro y lo que no) y con el campo ajustado la cita volvio a ser defendible. El segundo es
el tren de cuatro: la guia de bloqueo neuromuscular recomienda en contra de guiarse por el solo en
infusion continua, y el matiz se puso en los **seis** sitios del tema que lo mencionan, no solo en
los dos que lo citaban; cuatro de los seis no llevan cita, asi que no salian en ninguna medida de
atribucion.

Tres cosas que esa pasada dejo medidas y conviene no volver a suponer:

- **las guias no dosifican.** 10 de los 12 huecos que le quedan a `vasopresores-sedantes` son
  rangos de dosis y presentaciones, y en PADIS "mg/kg/h" y "mcg/kg" tienen **cero apariciones**,
  con un unico "mg/kg" en las 25 paginas de la guia de bloqueo neuromuscular;
- **nueve de los huecos no afirman nada citable**, y cinco son remisiones a otra tarjeta ("no hay
  tratamiento farmacologico especifico... mas alla del de la miocardiopatia de base"). El
  trinquete los cuenta porque su filtro solo reconoce la cadena exacta "No aplica". Los tres que
  le quedan a `miocardiopatias` son todos de este tipo: ese tema esta cerrado de hecho, y esto es
  un artefacto de la medida que conviene decidir antes de que alguien lo "cierre" citando algo;
- **el paciente cirrotico de `valoracion-preoperatoria`** no se cierra con lo que hay, y ahora con
  evidencia: en la guia perioperatoria de la AHA y el ACC, "cirrhosis", "Child-Pugh" y "MELD"
  tienen cero apariciones cada una.

**El trinquete va ahora al reves y es mas fuerte**: en vez de enumerar los temas completos, enumera
los 15 pendientes con su maximo tolerado y **exige cero a los otros 91**, mas dos pruebas globales
nuevas (ningun indice fuera de la bibliografia de su tema, ninguna cita colgada de un campo
inexistente).

### 2.7 Menores

- **Las fichas por tema van de 20 a 32** y **51 de 106** temas no están en 32, que es la norma
  escrita del proyecto. Sigue pendiente la decisión de octubre: si la norma es el número o la
  cobertura. Hoy la prueba solo exige que existan.
- ~~`Function(entry.action)()` en `app.js`.~~ **RESUELTO.** `entry.action` es una funcion y se
  invoca como tal; ya no hay evaluacion de codigo armado por interpolacion.
- ~~**Nueve carpetas vacias `topicsXXX`** mas una "New folder".~~ **RESUELTO**, la raiz esta limpia.
- ~~El encabezado de `engine/usage-tracking.js` decia "ni identificacion del usuario".~~
  **RESUELTO.** Ahora dice explicitamente que los contadores se guardan con `syncSet`, o sea en
  `users/{uid}`, junto al correo y el nombre, y que Admin los muestra por usuario.
- ~~**La nav inferior y el desborde horizontal a 375 px.**~~ **RESUELTO** con
  `inset-inline:0; margin-inline:auto`, que era gratis y quita la dependencia del tipo de barra
  de desplazamiento del navegador.

### 2.8 La trampa de foco no sujetaba la puerta de acceso (alta) · RESUELTO el 2/11/2026

Este apartado era, hasta hoy, el bullet de **accesibilidad de la puerta de entrada**, y estaba
mal por los dos lados. Primero por viejo: las 12 etiquetas ya estaban asociadas con `for` y el
modal compartido ya tenia `role="dialog"` y `aria-modal` desde el 1 de noviembre. Y despues
porque lo que el informe daba por hecho ese dia, "una trampa de foco que acota el tabulador al
modal mientras esta abierto", **no era verdad en el estado en que arranca cualquier usuario**.

Medido en el navegador, no deducido: **dos pulsaciones de tabulador desde la pantalla de acceso
recien cargada y el foco estaba en `#nav-inicio`**, la nav de la app, detras de una puerta de la
que por diseno no se puede salir.

La causa es que la trampa solo actuaba en los dos extremos del recorrido
(`activeElement === primero` o `=== ultimo`). Al cargar la pagina el foco esta en `<body>`, que no
es ninguno de los dos, asi que la tecla pasaba y el navegador seguia el orden natural del
documento, donde `.app-shell` va **antes** que `#overlay`.

El modal de terminos y condiciones estaba peor, y es la unica pieza de la puerta que alguien
**tiene** que abrir para registrarse. Vive en `#terms-overlay`, un overlay propio por encima del
login, que sigue activo debajo. De ahi tres fallos a la vez:

- la trampa miraba solo `#overlay`, asi que con los terminos abiertos el tabulador recorria el
  formulario de registro tapado detras, y en cuatro pulsaciones llegaba a la nav;
- **no habia salida por teclado**. El guardia de Escape de `auth.js` se traga la tecla mientras el
  gate esta activo, y el manejador global de `study-view.js` llama a `closeModal()`, que actua
  sobre `#overlay`, el del login, no sobre este;
- sin `role="dialog"` ni `aria-modal`, un lector de pantalla lo lee como contenido mas de la
  pagina, y el foco se quedaba en `<body>`: no habia forma de llegar al boton de cerrar.

**Arreglado.** La trampa pasa a elegir la capa de arriba de una lista en orden de apilamiento
(`#overlay`, `#terms-overlay`, `#img-lightbox`) y **devuelve el foco desde fuera**, no solo en los
extremos. Las dos decisiones salieron a funciones puras exportadas (`capaModalSuperior`,
`focoDelTabulador`) porque el fallo no se veia en ninguna metrica: seis pruebas nuevas las
vigilan, mas el orden de la lista y que cada id exista en `index.html`. `auth.js` cierra los
terminos con Escape antes de que el guardia se trague la tecla, mete el foco al abrir y lo
devuelve al enlace al cerrar.

Verificado en el navegador: 27 tabulaciones en la pantalla de acceso sin salirse; con los
terminos abiertos el foco se queda en su capa; Escape los cierra y **deja la puerta en pie**; y el
foco vuelve a `#auth-terms-link`.

**Lo que esto deja como leccion**, y es la misma de siempre en este proyecto: el informe del 1 de
noviembre dio por cerrada la trampa de foco porque el codigo existia, no porque alguien hubiera
tabulado. Dos pulsaciones habrian bastado.

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
9. ~~Pasada de acentos (2.5).~~ **Hecha entera.** Las 4026 entidades el 1/11 y las 83 489
   palabras sin tilde el 2/11, con prueba por tema para que no vuelva.
10. ~~Accesibilidad de la puerta de entrada (2.7).~~ Hecho el 1/11: las 12 etiquetas asociadas
    con `for`, y `role="dialog"` mas `aria-modal` en el modal compartido. **La trampa de foco de
    ese mismo dia no sujetaba, y se dio por buena sin tabular ni una vez**: dos pulsaciones
    llevaban el foco a la nav de la app, detras de la puerta. Corregido el 2/11 junto con el
    modal de terminos, que ademas no tenia salida por teclado. Ver 2.8.
11. ~~Las tildes que faltan en 50 temas, la otra mitad de 2.5.~~ **Hecho el 2/11/2026**: ver 2.5.
    No hizo falta ir tema por tema; el criterio iba en la palabra, y la parte que de verdad pedia
    juicio se quedo sin tocar a proposito.
12. La CSP, la parte de 1.3 que no se pudo cerrar. **Pendiente**, ver la seccion 7.
13. ~~Las citas (2.6).~~ **Cerrado en su mayor parte el 2/11/2026: 1962 de 2072 campos (94.7%)
    y 91 de 106 temas completos.** La mayor parte no eran citas que faltaran sino la forma plana de
    `compCites`, que el motor ancla solo a `definicion`: 62 temas y 427 fichas con las fuentes
    declaradas y sin pintar. Siguen abiertas dos cosas: **afinar a nivel de campo los ~1250
    atribuidos a nivel de ficha** y los **110 huecos de 15 temas** (eran 131; se cerraron 23, se
    retiraron 3 por equivocadas al releer los pasajes y una volvio al arreglar el texto, y la
    premisa con que se habian dejado era falsa: ver 2.6).
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

- ~~**Las tildes que faltan en 50 temas (la otra mitad de 2.5).**~~ **Cerrado el 2/11/2026**, 83 489
  palabras. La premisa de este punto era falsa: el criterio no habia que ponerlo por tema sino por
  palabra, y la prueba del infinitivo separa el sustantivo del verbo sin leer el diff. Lo que de
  verdad pedia juicio (los pares `estudio`/`estudio`, `continua`/`continua`, el `el`/`el`) sigue
  sin tocar, y en esos casos la forma sin tilde ya era la correcta. Ver 2.5.
- **Las citas (2.6): cerradas al 94.7%, y lo que queda es de precision, no de cobertura.** 1962
  de 2072 campos y 91 de 106 temas completos (2/11/2026, ver 2.6). Quedan dos cosas, y conviene no
  confundirlas:
  - **afinar a nivel de campo los ~1250 que estan atribuidos a nivel de ficha.** La cita dice que
    la ficha se apoya en esas fuentes, no que ese campo salga de esa fuente. Esto si es leer
    fuentes tema por tema, y en los temas con 15 o 16 es trabajo de verdad;
  - los **110 huecos de 15 temas** listados en `ATRIB_PENDIENTES` (eran 131). Lo de "exige
    fuentes nuevas, no reparto" era falso: en 9 de los 15 temas la fuente ya esta, o declarada en
    el propio tema o en `Bibliografia/` sin usar, y la tabla de `.claude/atribucion-citas.md`
    nombra ahora la fuente candidata de cada uno. Lo que sigue en pie es no adivinar: cada cita se
    verifica buscando en el PDF lo que el campo afirma, o se deja el hueco. Una cita equivocada
    sigue siendo peor que un hueco.
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

- ~~**La CSP (parte de 1.3).**~~ **Cerrada el 2/11/2026, en modo `Report-Only`.** La premisa de este
pendiente era que hacía falta una sesión real: con `Report-Only` no hace falta, porque no puede
bloquear nada. La lista de destinos se sacó del código y se probó la política en modo obligatorio
en el navegador, con controles negativos. Lo que queda es **tuyo y de un minuto**: usar la app unos
días con la consola abierta y, si no sale ningún aviso, quitarle el sufijo `-Report-Only` a la
cabecera. Las instrucciones están escritas en el propio `_headers`.
