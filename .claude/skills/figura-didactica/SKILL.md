---
name: figura-didactica
description: "Use cuando el usuario pida una figura, infografía, diagrama o imagen didáctica para un tema de MIOsler (topics/<tema>/content.js). Cubre dos caminos: figuras clínicas exactas dibujadas a mano en SVG/HTML (por defecto, sin herramientas externas), y arte decorativo generado con la API gratuita de Gemini vía tools/generar-figura.py. Trigger: /figura-didactica"
---

# /figura-didactica

Receta para producir figuras del sistema `topic.figuras` de MIOsler: consistentes con la
identidad visual de la app, correctas en modo claro/oscuro, y sin arriesgar exactitud clínica.

## Decisión: ¿SVG a mano o imagen generada?

**Por defecto, SVG/HTML a mano.** Es gratis, instantáneo, exacto y hereda el tema. Úsalo para
CUALQUIER cosa con información clínica real: algoritmos, mecanismos fisiopatológicos, anatomía
etiquetada, escalas, tablas, flujos de decisión.

**Imagen generada (`tools/generar-figura.py`), solo para arte decorativo/conceptual** — algo sin
datos que puedan estar "mal" (una portada, una escena ambiental, una textura). Un modelo de
imagen puede alucinar anatomía, texto o valores; nunca lo uses para algo que un residente vaya a
memorizar como dato clínico.

Si dudas, pregúntate: "¿esta imagen afirma algo clínico verificable?" Si sí → SVG a mano.

## Camino 1: figura SVG/HTML a mano

1. **Esquema.** Cada tema exporta un objeto `figuras` en `topics/<tema>/content.js`:
   ```js
   export const figuras = {
     'clave-unica': {
       titulo: 'Título visible de la figura',
       fuente: 'Cita de la guía/paper de donde salen los datos (o "Adaptado de..." si aplica)',
       html: `<svg viewBox="0 0 W H" role="img" aria-labelledby="x-title x-desc">
         <title id="x-title">...</title>
         <desc id="x-desc">Descripción completa para lectores de pantalla.</desc>
         ...
       </svg>`
     }
   };
   ```
   Se renderiza automáticamente dentro de `.modal-figure` / `.figure-body` (ver
   `engine/study-view.js`, funciones `figuraHTML()`/`oneFiguraHTML()`). No toques ese motor.

2. **Cómo se adjunta** (elige el hook que ya existe, no inventes uno nuevo):
   - A una complicación específica: campo `figura: 'clave'` (o array de claves) en el objeto de
     esa complicación dentro de `D.complicaciones`.
   - A la sección Clasificación: agregar la clave a `export const figurasClasificacion = [...]`.
   - A la sección Definición: agregar la clave a `export const figurasDefinicion = [...]`.
   - Si un tema necesita adjuntar figuras en otra sección que aún no tiene el hook, es la única
     situación que justifica tocar `engine/study-view.js`: copia el patrón de una línea que ya
     usa `figurasClasificacion` (buscar `figuraHTML(TOPIC.figuras` en ese archivo) y replícalo
     para el nuevo campo — nunca reescribas `figuraHTML()`/`oneFiguraHTML()` en sí.

3. **Regla de theming (obligatoria).** El SVG NUNCA usa colores hex fijos para fondo/texto/líneas
   estructurales. Solo estas variables (ya definidas en `engine/styles.css`, con equivalentes en
   modo oscuro):
   - `var(--ink)` — texto principal · `var(--ink-dim)` / `var(--ink-faint)` — texto secundario
   - `var(--accent-fg)` — énfasis del tema actual · `var(--line)` — bordes/separadores
   - `var(--panel)` / `var(--panel2)` — fondos de caja
   - Colores clínicos con significado fijo (rojo=grave, verde=bien) SÍ pueden ser hex directos,
     igual que ya hace el resto de la app (`#8c3a34` alerta, `#3f6b52` bien, `#8a5a1a` intermedio)
     — esos son semánticos, no decorativos, y se mantienen iguales en ambos temas a propósito.

4. **Accesibilidad.** Todo `<svg>` lleva `role="img"`, un `<title>` y un `<desc>` con `id`s
   enlazados por `aria-labelledby`, describiendo lo que dice la figura en una frase completa (no
   "diagrama de flujo", sino el contenido real).

5. **Checklist de exactitud clínica antes de entregar la figura:**
   - [ ] Cada dato/valor/corte numérico viene de `fuente` citada, o del propio `content.js` del
     tema (nunca inventado para "que se vea completo").
   - [ ] Si la figura resume texto ya existente en el tema (p. ej. `definicionText`), no agrega
     afirmaciones que ese texto no respalda.
   - [ ] `fuente` está rellenado con la cita real (guía + año + figura/tabla si aplica), o con
     "Adaptado del texto de definición de este tema" si no hay fuente externa.
   - [ ] Los primitivos de HTML ya existentes se reusan cuando aplican en vez de reinventar SVG:
     `.table-wrap table` para tablas, `.algo-flow`/`.algo-flow-branches` para diagramas de
     decisión con ramas, `.figure-grade-box` para una nota destacada. Mirar `figuras` de
     `topics/cirrosis-hepatica/content.js` como referencia.

## Camino 2: arte decorativo generado (API gratuita de Gemini / "Nano Banana")

Solo cuando el pedido es explícitamente decorativo (portada de un tema, ilustración ambiental,
textura de fondo) y no codifica ningún dato clínico.

1. **Setup de la clave (una sola vez, lo hace el usuario — Claude no puede crear cuentas ni
   claves).** Guía al usuario a:
   - Ir a https://aistudio.google.com/apikey con su cuenta de Google.
   - Crear una clave (nivel gratuito: cientos de imágenes/día, sin tarjeta).
   - Guardarla en `.claude/gemini-key.txt` (una sola línea, ya está en `.gitignore` — nunca se
     commitea ni viaja al PWA) o exportarla como variable de entorno `GEMINI_API_KEY`.

2. **Redactar el prompt lo más específico posible** (esto es lo que evita errores de generación):
   incluir composición exacta, paleta con los hex reales de la app (`--bg:#f6f3ec`,
   `--accent:#7c2d2d`, `--shell:#2f6f5e`, tonos cálidos tipo papel), estilo (ilustración editorial
   plana, sin fotorrealismo médico), y aspecto/encuadre. Si la imagen debe representar una
   progresión con etapas (p. ej. un mecanismo), sí se le puede pedir texto/etiquetas — el modelo
   actual (`gemini-2.5-flash-image`) suele acertar el texto corto en español razonablemente bien,
   pero SIEMPRE revisar ortografía/acentos a ojo (ver paso 4). Suele tomar 2-3 iteraciones de
   prompt hasta dar con el resultado correcto (ver ejemplo real abajo); pide al usuario feedback
   concreto entre iteraciones en vez de asumir qué falta.
   - Caso real que funcionó bien (`fibrogenesis-ilustrativo` en Cirrosis): "5 etapas en fila
     horizontal conectadas por flechas, cada etapa en una caja con un ícono ilustrativo de esa
     etapa (no solo texto/diagrama plano) y su caption debajo, paleta X, sin fotorrealismo."

3. **Generar con el script:**
   ```bash
   uv run --with google-genai tools/generar-figura.py "<prompt detallado>" topics/<tema>/assets/<nombre>.png
   ```
   Escribe el PNG directo en `assets/` con `Path.write_bytes()` (nunca por stdout — evita el
   problema de encoding binario en PowerShell/Windows).

4. **Revisar la imagen a ojo** antes de usarla (texto mal escrito, anatomía rara, artefactos). Si
   el modelo devuelve mucho margen vacío o un marco de color sólido alrededor del contenido real
   (común al pedir "wide banner": el modelo suele ignorar el aspect ratio y entregar cuadrado con
   el contenido centrado), recortarlo con Pillow (`uv run --with pillow <script>`) — **lecciones
   reales de la primera vez que se hizo esto (`fibrogenesis-ilustrativo`):**
   - Detectar el bbox del marco por **umbral de negro puro** (`r<55 and g<55 and b<55`), NO por
     "distancia al color de fondo" — el fondo generado tiene grano/textura y esa heurística
     clasificó casi todo el canvas como "contenido", dando un bbox inútil (casi el canvas entero).
   - Recortar **hacia AFUERA del marco detectado, con margen generoso en los 4 lados** (~30-45px),
     nunca hacia adentro — el primer intento recortó justo por dentro del marco y cortó texto y
     bordes de las cajas en los 4 lados (usuario: "se cortó arriba", luego "a la izquierda y a la
     derecha también"). Verificar después escaneando fila/columna 0 y última de cada borde: si
     algún pixel no-fondo las toca, falta margen — repetir.

5. **Referenciarla como figura, SIN revelar que es generada por IA.** El usuario decidió
   explícitamente que ningún texto visible en la app debe mencionar Gemini/Nano Banana/"generado
   por IA" — ni en `fuente` ni en ningún otro lado. Dos formas válidas:
   - Sin nota de fuente (si no hace falta ninguna aclaración):
     ```js
     'clave-decorativa': {
       titulo: '...',
       html: `<img src="topics/<tema>/assets/<nombre>.png" alt="Descripción completa para accesibilidad.">`
     }
     ```
   - Con una nota genérica, PERO sin usar el campo `fuente` (que antepone el texto "Fuente:", una
     cita, no cabe aquí) — se escribe el caption a mano dentro de `html` reusando la misma clase:
     ```js
     'clave-decorativa': {
       titulo: '...',
       html: `<img src="topics/<tema>/assets/<nombre>.png" alt="...">
         <div class="figure-source">Adaptado del texto de definición de este tema (ver Definición, arriba).</div>`
     }
     ```

## Archivos de este sistema

- `engine/study-view.js` — motor de render (`figuraHTML`/`oneFiguraHTML`), no se reescribe.
- `engine/styles.css` — bloque "FIGURAS DIDÁCTICAS" documenta el contrato de theming.
- `topics/<tema>/content.js` — donde vive cada `figuras`/`figurasClasificacion`/`figurasDefinicion`.
- `tools/generar-figura.py` — script del camino 2 (arte decorativo).
- `.claude/gemini-key.txt` — clave local, gitignoreada (no existe hasta que el usuario la crea).
