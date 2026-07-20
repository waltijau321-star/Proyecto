# ResidenteMed — Plataforma de estudio para residentes de Medicina Interna

App unificada (PWA instalable, sin herramientas de build) con un **motor reutilizable** y **contenido separado por tema**. Combina el módulo de estudio profundo (Cirrosis, Sepsis…) con calculadoras, protocolos académicos con checklist y calendario de guardias.

Autor del contenido clínico: **Dr. Walter Jáuregui**. Material educativo — no sustituye el juicio clínico ni las guías vigentes.

## Cómo ejecutar en local

Los módulos ES requieren HTTP (no funcionan con `file://`). Sirve la carpeta con cualquier servidor estático, por ejemplo:

- **VS Code**: extensión *Live Server* → "Open with Live Server".
- **Node**: `npx serve` en esta carpeta.
- **Python**: `python -m http.server`.

Luego abre `http://localhost:<puerto>/index.html`.

## Desplegar (Netlify)

Arrastra la carpeta completa a Netlify (o conéctala a un repo). No requiere build: es HTML/CSS/JS estático. El `manifest.webmanifest` y `sw.js` la hacen instalable como app y funcional offline.
Al publicar cambios en `engine/`, sube `CACHE_VERSION` en [`sw.js`](sw.js) para forzar el refresco de la caché.

## Estructura

```
index.html              Shell de la app: header, secciones, navegación inferior, modal
app.js                  Router + carga del tema activo (?tema=…)
manifest.webmanifest    Metadatos PWA
sw.js                   Service worker (cache-first, offline)
engine/                 Motor genérico (no conoce ningún tema)
  styles.css            Sistema de diseño (shell app + tipografía editorial)
  study-view.js         Render del módulo de estudio (mapa, modales, quiz, fichas, caso, buscador, citas)
  calculators.js        Motor declarativo de calculadoras + nota combinada
  general-calc.js       Calculadoras generales de MI (CURB-65, CKD-EPI, Wells, CHA₂DS₂-VASc)
  calendar.js           Calendario de guardias/clases (localStorage)
  schedule-import.js     Importa guardias desde un PDF de rol (pdf.js local, busca tu nombre)
  vendor/pdfjs/          pdf.js vendorizado (sin CDN) para leer PDFs en el navegador
  protocols.js          Protocolos académicos (teoría + fármacos + checklist interactivo)
topics/
  registry.js           Catálogo de temas (carga perezosa + composición)
  cirrosis-hepatica/    content.js · calculators.js · study.js
  sepsis/               content.js · calculators.js · study.js
  _template/            Plantilla para un tema nuevo
protocols/protocols.js  Datos de los protocolos (RCP/ACLS, RSI, bundle de sepsis)
```

## Agregar un tema nuevo

1. Copia `topics/_template/` a `topics/<mi-tema>/`.
2. Rellena los tres archivos siguiendo el contrato (ver comentarios en la plantilla):
   - **content.js** — `meta`, `content` (definición, diagnóstico, clasificación, complicaciones[], seguimiento), `bibliografia`, y presentación (`compCites`, `compGroups`, `categories`, `arbol`, `escalaRefs`, `escalaCalc`, `definicionText`; `estigmas`/`biopsia` son opcionales — el motor los omite si no existen). Importante: `content.diagnostico.clinica` debe incluir `tituloA`/`tituloB` (encabezados de las dos tarjetas de presentación clínica — nunca los dejes vacíos ni copiados de otro tema), y exporta `diagCites`/`clasificacionCite`/`seguimientoCite` con números que apunten a **tu propia** `bibliografia`, no a la de otro tema.
   - **calculators.js** — array `calculators` de descriptores `{ key, title, fields[], compute, format, fragment }` y, opcional, `combinedNote`.
   - **study.js** — `quiz[]`, `flashcards[]`, `caseSteps[]`, `caseSummary`.
3. Añade una entrada en [`topics/registry.js`](topics/registry.js).
4. (Opcional, para offline) agrega los tres archivos a `CORE` en [`sw.js`](sw.js).

No se toca la interfaz: el motor consume la forma de datos.

## Agregar un protocolo

Añade un objeto al array de [`protocols/protocols.js`](protocols/protocols.js):

```js
{
  id, title, subtitle, accent, source,
  theory: {
    caveat: '…',              // opcional — nota de advertencia/verificación destacada
    intro: '…',                // párrafo introductorio
    keyPoints: ['…'],          // conceptos clave (lista)
    drugs: [{ name, dose, indication, note }]  // tabla de fármacos
  },
  steps: [{ phase, text, note }]  // checklist interactivo (persistencia local por paso)
}
```

Aparece automáticamente en la sección Protocolos: primero la teoría (intro + conceptos clave + fármacos), luego el checklist marcable.

## Contrato de la calculadora (resumen)

```js
{
  key: 'childpugh', title: 'Child-Pugh', accent: '#5c4a73', subtitle: '…',
  fields: [
    { name:'bili', id:'cp-bili', type:'select', numeric:true, label:'…', options:[{value:'1',label:'…'}] },
    { name:'creat', id:'mn-creat', type:'number', step:'0.1', label:'…', placeholder:'…', row:'a' },
    { type:'note', text:'…' }
  ],
  compute(v) { /* función pura → objeto resultado, o null si faltan datos */ },
  format(r) { return 'HTML de la nota clínica'; },
  fragment(r) { return 'fragmento para la nota combinada'; }  // opcional
}
```

- `type`: `number` | `select` | `checkbox` | `text` | `note`.
- `row`: agrupa campos contiguos con el mismo valor en una fila de dos columnas.
- `numeric:true` en un `select` convierte su valor a número.
- `required:false` marca un campo numérico como opcional.
