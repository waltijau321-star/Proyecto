---
name: reglas-preguntas
description: "Reglas obligatorias de redacción para CUALQUIER pregunta de opción múltiple que se genere o edite en topics/<tema>/study.js (quiz sueltas y pasos de cascade). Se aplican SIEMPRE, sin que el usuario tenga que pedirlo cada vez — no solo cuando se invoca /reglas-preguntas explícitamente. Trigger: /reglas-preguntas"
---

# /reglas-preguntas

Reglas de redacción para preguntas médicas de opción múltiple en MIOsler, definidas por el
usuario (Dr. Walter Jáuregui) en agosto de 2026. Se guardan aquí, versionadas en el repo, para
que se apliquen de forma consistente en **todos** los temas — no solo en el que las originó
(Historia Clínica).

**Regla de uso: esto no es opcional ni se limita a cuando se invoca el comando.** Cualquier
tarea que cree, edite o revise el array `quiz` de un `study.js` (preguntas sueltas o pasos de
`type: 'cascade'`) debe cumplir esta guía antes de darse por terminada — igual que
`.claude/skills/figura-didactica/SKILL.md` aplica siempre que se toca `topic.figuras`.

## El objetivo

Las preguntas deben evaluar **conocimiento médico, comprensión y razonamiento clínico**, nunca
"trucos" de examen. La dificultad debe venir de lo médico, no de pistas superficiales de
redacción, estructura o posición.

## Checklist de redacción (aplicar a CADA pregunta antes de darla por terminada)

1. **Misma categoría lógica.** Si se pide un diagnóstico, las 4 opciones son diagnósticos; si se
   pide un tratamiento, las 4 son tratamientos; si se pide un mecanismo, las 4 son mecanismos.
   Nunca mezclar categorías — mezclar categorías delata la respuesta sin necesidad de saber
   medicina.

2. **Longitud y nivel de detalle comparables entre las 4 opciones.** La respuesta correcta
   NUNCA debe ser sistemáticamente la más larga, más técnica o la única con una cláusula
   explicativa extra. Si el contenido médico obliga a que la correcta lleve más información,
   hay que "inflar" las incorrectas a un nivel de detalle equivalente (aunque sigan siendo
   incorrectas) — nunca dejar una diferencia de longitud que funcione como pista. La explicación
   detallada va en `explanation` (se muestra DESPUÉS de responder), nunca dentro de la opción.

3. **Todas las opciones deben ser plausibles.** Nada de distractores absurdos o evidentemente
   incompatibles con el caso (ej. "el color de su cabello" como antecedente relevante). Los
   distractores deben ser errores conceptuales frecuentes, diferenciales razonables o
   alternativas reales que un estudiante con conocimiento incompleto consideraría.

4. **Sin pistas gramaticales.** Todas las opciones deben concordar igual de bien en género,
   número y tiempo verbal con el enunciado — que la correcta sea la única gramaticalmente
   compatible es una fuga de información.

5. **Sin pistas semánticas.** Evitar "siempre", "nunca", "únicamente", "exclusivamente" en los
   distractores salvo que sean médicamente indispensables para la distinción que se evalúa. La
   terminología debe ser igual de precisa/profesional en las 4 opciones — la correcta no debe
   "sonar" más experta.

6. **Posición de la respuesta correcta distribuida sin patrón.** A lo largo de todo el banco de
   un tema, el índice correcto (0-3) debe repartirse ~parejo entre las 4 posiciones, sin tramos
   largos repitiendo la misma posición y sin ciclos reconocibles (ej. nunca "B, B, B, B..." ni
   "A, B, C, D, A, B, C, D..."). Antes de cerrar un lote de preguntas, listar los índices
   `correct` en orden y verificar a ojo que no hay sesgo ni ciclo.

7. **El caso clínico debe tener una única respuesta correcta.** Si en la práctica real podría
   haber más de una conducta válida, usar formulaciones que dejen claro qué se evalúa: "el
   diagnóstico más probable", "el siguiente paso más apropiado", "el tratamiento inicial de
   elección", "la mejor conducta en este momento".

8. **Nada de reconocimiento de palabra clave.** El caso no debe contener una palabra que
   prácticamente regale el diagnóstico — el dato característico puede estar, pero integrado
   naturalmente, de forma que haga falta interpretar el cuadro completo.

9. **Coherencia clínica total.** Edad, sexo, antecedentes, síntomas, signos, laboratorio,
   imagen y evolución deben ser compatibles entre sí y con la respuesta correcta. Cualquier dato
   atípico debe tener una razón educativa explícita.

10. **Dificultad por razonamiento, no por redacción confusa.** Nada de frases enredadas, dobles
    negaciones ni ambigüedad deliberada. El estudiante debe fallar por no saber medicina, nunca
    por no entender la pregunta.

11. **Preguntas negativas ("¿cuál NO...?") solo si son necesarias**, con el "NO" resaltado
    (mayúsculas) y aplicando el mismo criterio a las 4 opciones.

12. **Revisión final antes de entregar cada pregunta:** ¿hay una sola respuesta correcta? ¿las 4
    opciones son de la misma categoría? ¿tienen longitud/detalle comparables? ¿algún distractor
    tiene una pista gramatical o semántica? ¿la correcta se puede adivinar por ser la más
    completa? ¿son todos los distractores plausibles? ¿hay alguna contradicción clínica? Si
    cualquier respuesta preocupa, reformular antes de guardar — no dejarlo "para después".

13. **La retroalimentación (`explanation`) debe ser mucho más rica que las opciones**: explicar
    por qué la correcta es correcta, el razonamiento clínico para llegar a ella, y por qué cada
    distractor es incorrecto. Ahí sí cabe toda la profundidad que no cupo en las opciones.

## Texto original del usuario

El documento fuente completo (idéntico, sin editar) vive también fuera del repo en
`Reglas para preguntas .txt` (raíz de Proyecto, no trackeado en git) — esta copia en
`.claude/skills/` es la versión de referencia que persiste y viaja con el repo.
