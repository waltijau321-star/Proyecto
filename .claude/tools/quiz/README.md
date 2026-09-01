# Utilidades de revisión del quiz

Herramientas de desarrollo (no forman parte de la app ni de `CORE` en `sw.js`) para auditar los
arreglos `quiz` de `topics/<tema>/study.js`. Nacieron en la auditoría de agosto de 2026, que
revisó los 47 temas; se conservan aquí porque el mismo trabajo hace falta cada vez que se escribe
o edita un tema.

Todas se corren **desde la raíz del repositorio**, con `uv` (no hay `pip` en esta máquina):

```bash
uv run python3 .claude/tools/quiz/metrics.py topics/sepsis/study.js
```

En PowerShell, exporta antes `$env:PYTHONIOENCODING = "utf-8"` o los acentos salen mal.

## Qué hace cada una

| Script | Para qué |
|---|---|
| `metrics.py` | Los cuatro umbrales de un tema y el "atajo de la más larga" |
| `extract_fails.py` | JSON con las preguntas que fallan algún umbral |
| `show.py <json> <desde> <hasta>` | Muestra esas preguntas con longitudes y marca la correcta |
| `apply.py <study.js> <fixes.json>` | Reemplaza arreglos `options` completos, por subcadena del enunciado |
| `abs.py` | Preguntas con absolutismo solo en los distractores |
| `verify_correct.py` | Diff contra `HEAD`: índices movidos, enunciados perdidos, correcta antes→después |
| `dupes.py` | Enunciados duplicados dentro de un tema |
| `mismatch2.py <margen> <archivos...>` | Claves de respuesta que no concuerdan con su explicación |
| `dump_qa.py <study.js> [desde] [hasta]` | Vuelca pregunta + opciones + `correct` + explicación para leer a mano |

## El formato de `fixes.json` que consume `apply.py`

```json
{ "subcadena única del enunciado": ["opción 0", "opción 1", "opción 2", "opción 3"] }
```

`apply.py` **nunca toca el índice `correct`**: solo sustituye el arreglo `options` completo,
respetando el orden. Si una clave coincide con más de una pregunta, aborta sin escribir nada
(esa guardia evitó corromper preguntas media docena de veces durante la auditoría).

## Tres cosas que hay que saber antes de confiar en la salida

1. **Leen el texto del archivo, no el módulo.** `metrics.py` cuenta también bloques que no están
   en `quiz` (por ejemplo `caseSteps`), así que sobreestima en los temas que los tienen. El número
   autoritativo lo da `tests.html`, que importa el módulo real.
2. **El regex tolera espacios opcionales tras los dos puntos** (`q:'...'` y `q: '...'`). Antes no,
   y por eso `cirrosis-hepatica` y `sepsis` aparecían con "0 preguntas" sin que nada fallara. Si
   se añade una utilidad nueva, copiar el patrón de `dupes.py`.
3. **Comparar siempre el total** que reporta la utilidad contra
   `grep -c "correct: [0-9]" topics/<tema>/study.js`. Si no coinciden, el regex está ciego a algo.

## Flujo que funcionó

1. `dupes.py` y `mismatch2.py 4` sobre el tema, antes de tocar nada.
2. `extract_fails.py` → `show.py` para ver qué falla y por qué.
3. Escribir el `fixes.json` y aplicarlo con `apply.py`.
4. `metrics.py` **y** `abs.py` (los distractores nuevos suelen reintroducir absolutismos).
5. `verify_correct.py` y leer una por una las respuestas correctas antes→después: deben afirmar
   el mismo hecho clínico. **Al acortar la correcta es fácil quitarle el dato que la hace
   correcta**; si eso pasa, la salida es alargar los distractores, no recortar más.
6. `tests.html` en el navegador: es la fuente de verdad.
