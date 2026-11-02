# Atribucion minima de citas: regla, estado y trabajo pendiente

Creado el 1 de noviembre de 2026, al replantear el apartado 2.6 de
`revision-general-2026-11.md`.

## Por que existe esto

El informe pedia "cerrar los 21 temas con menos de 8 citas". Medido sobre los modulos reales eran
20, y sobre todo **contar citas no media lo que importa**: `melanoma` tiene 4 y son exactamente
las 4 fuentes con las que se escribio. Perseguir un numero solo podia producir relleno, que es
justo lo que se encontro en `urticaria`: dos de sus tres citas eran de otros modulos (la guia de
psoriasis y la de Stevens-Johnson) y no sostenian nada.

Lo que si mide algo: **de los 13 536 campos clinicos de la app, 12 516 (el 92%) no estan
atribuidos a ninguna fuente**, y 453 fichas de 76 temas no tienen ni una cita. En 104 temas
seguidos eso no es un descuido, es la convencion con la que se escribio la app.

El autor decidio el 1 de noviembre **fijar una regla minima** en vez de aceptar la convencion o
intentar atribuirlo todo.

## La regla

En cada ficha de `complicaciones[]`, estos TRES campos llevan cita en `compCites` siempre que
tengan contenido (y no sean "No aplica"):

- **`criterios_dx`**
- **`laboratorio`**
- **`tx_farmacologico`**

Son los tres donde una afirmacion sin fuente pesa mas junto a la cama del paciente. Los demas
campos siguen la convencion anterior: se atribuyen cuando el autor quiere marcar algo.

**Alcance:** 2072 campos en los 106 temas. Un tema nuevo nace cumpliendola, que es mucho mas
barato que volver meses despues (ver el parrafo de `CLAUDE.md`).

## El trinquete

`tests.js` fija dos cosas que **solo pueden mejorar**:

1. El total de campos atribuidos no puede bajar de su marca actual.
2. Los temas declarados COMPLETOS tienen que seguir al 100%.

Asi el trabajo se hace por bloques sin que nada se desande y sin dejar la suite en rojo mientras
queda trabajo. Al cerrar un bloque se suben los dos numeros de `tests.js`.

## Lo que NO se atribuye a ciegas

Una cita equivocada es peor que ninguna: es exactamente lo que hacia `urticaria`. Cuando no se
puede saber cual de las fuentes del tema sostiene el campo, **se deja el hueco** y se anota. Dos
ejemplos de este primer bloque:

- `eritemas-reactivos`, la paniculitis: ninguna de sus cuatro fuentes la cubre de verdad (ya
  quedo anotado como limite en la cabecera de su `content.js`), asi que su `laboratorio` sigue sin
  cita. Es el unico hueco que le queda.
- `quemaduras`: siete campos reparten entre la revision de Jeschke y el manual del ATLS sin que
  el texto permita decidir cual. Solo se atribuyeron los dos del protocolo de traslado, que son
  claramente del ATLS.

## Estado a 1 de noviembre de 2026

| | |
|---|---|
| Campos de la regla | 2072 |
| Atribuidos | **287** (14%) |
| Huecos | 1785 |
| Temas completos | **7** |

Los siete completos: `historia-clinica`, `melanoma`, `cancer-cutaneo-no-melanoma`,
`manifestaciones-cutaneas-sistemicas`, `ahogamiento`, `glomerulopatias-sindromes-glomerulares` y
`nefropatia-diabetica-hipertensiva`. Cuatro se cerraron en este primer bloque, aprovechando que
sus fuentes tienen **un asunto propio cada una** y la atribucion queda forzada por el texto del
campo: la Parte I y la Parte II de la revision de An Bras Dermatol, las dos guias AIOM
(basocelular y epidermoide) frente al Kaposi, la ESMO del melanoma, y la guia de ahogamiento
frente a la de ARDS.

## El trabajo que queda, por tema

Ordenado por huecos, de menos a mas: los primeros son los mas rapidos. La columna "Fuentes" avisa
de la dificultad, porque con 2 o 3 fuentes la atribucion suele estar forzada y con 20 hay que
leer. Ojo con el patron que se ve en la tabla: muchos temas tienen TODOS sus campos sin atribuir
(18 de 18, 24 de 24), lo que significa que su `compCites` nunca se relleno, mientras otros estan
a medias.

| Tema | Huecos | Campos de la regla | Fuentes |
|---|---|---|---|
| `eritemas-reactivos` | 1 | 21 | 4 |
| `exploracion-cardiovascular` | 6 | 12 | 8 |
| `exploracion-abdominal` | 6 | 12 | 9 |
| `delirium-coma-encefalopatias` | 6 | 6 | 15 |
| `valoracion-preoperatoria` | 6 | 21 | 11 |
| `anafilaxia` | 6 | 12 | 3 |
| `abdomen-agudo` | 6 | 10 | 4 |
| `broncoaspiracion` | 6 | 12 | 3 |
| `esclerosis-multiple` | 7 | 7 | 15 |
| `quemaduras` | 7 | 17 | 2 |
| `exploracion-cabeza-cuello` | 8 | 10 | 8 |
| `supresion-alcoholica` | 8 | 15 | 3 |
| `exploracion-piel-faneras` | 9 | 10 | 9 |
| `exploracion-osteoarticular` | 9 | 11 | 9 |
| `urticaria` | 9 | 17 | 3 |
| `ampollosas` | 9 | 17 | 5 |
| `exploracion-respiratoria` | 10 | 12 | 8 |
| `sepsis` | 11 | 15 | 7 |
| `exploracion-neurologica` | 11 | 13 | 9 |
| `psoriasis` | 11 | 18 | 6 |
| `soporte-vital-avanzado` | 11 | 15 | 3 |
| `signos-clasicos` | 13 | 13 | 9 |
| `eccemas` | 13 | 18 | 4 |
| `farmacodermias` | 14 | 18 | 4 |
| `embolia-grasa` | 15 | 15 | 15 |
| `urgencias-tiroideas` | 15 | 15 | 17 |
| `disfuncion-organica-multiple` | 16 | 16 | 16 |
| `enfermedad-renal-cronica` | 17 | 17 | 12 |
| `sodio-potasio-acido-base` | 17 | 17 | 7 |
| `sindrome-cardiovascular-renal-metabolico` | 18 | 18 | 19 |
| `osteoporosis` | 18 | 18 | 20 |
| `hipotiroidismo` | 18 | 18 | 18 |
| `epoc` | 18 | 18 | 18 |
| `asma` | 18 | 18 | 18 |
| `neumonia` | 18 | 18 | 18 |
| `insuficiencia-respiratoria-sdra` | 18 | 18 | 18 |
| `patologia-pleural` | 18 | 18 | 18 |
| `enfermedad-intersticial` | 18 | 18 | 18 |
| `hipertension-pulmonar` | 18 | 18 | 18 |
| `nodulo-cancer-pulmon` | 18 | 18 | 18 |
| `apnea-sueno` | 18 | 18 | 16 |
| `tuberculosis` | 18 | 18 | 16 |
| `sarcoidosis` | 18 | 18 | 16 |
| `bronquiectasias` | 18 | 18 | 16 |
| `bronquitis-aguda` | 18 | 18 | 16 |
| `deterioro-cognitivo-demencias` | 18 | 18 | 16 |
| `neuropatias-perifericas` | 18 | 18 | 16 |
| `guillain-barre-miastenia` | 18 | 18 | 16 |
| `ela-miopatias` | 18 | 18 | 16 |
| `meningoencefalitis-infecciosa` | 18 | 18 | 16 |
| `encefalitis-autoinmune` | 18 | 18 | 16 |
| `vertigo-sindrome-vestibular` | 18 | 18 | 16 |
| `estado-de-choque` | 18 | 18 | 16 |
| `lesion-renal-aguda` | 18 | 18 | 16 |
| `soporte-nutricional-critico` | 18 | 18 | 16 |
| `debilidad-adquirida-uci` | 18 | 18 | 16 |
| `cefaleas` | 19 | 27 | 16 |
| `sindromes-mielodisplasicos` | 19 | 24 | 15 |
| `miocardiopatias` | 20 | 27 | 15 |
| `anemias-hemoliticas-hereditarias` | 20 | 24 | 15 |
| `sindromes-mieloproliferativos` | 21 | 24 | 16 |
| `anemia-aplasica` | 21 | 24 | 15 |
| `diabetes-mellitus` | 21 | 21 | 25 |
| `cetoacidosis-estado-hiperosmolar` | 21 | 21 | 23 |
| `obesidad` | 21 | 21 | 22 |
| `enfermedad-cerebrovascular` | 22 | 33 | 28 |
| `estado-epileptico` | 22 | 27 | 14 |
| `anemias-hemoliticas-adquiridas` | 22 | 27 | 16 |
| `anemia-ferropenica` | 22 | 24 | 16 |
| `anemia-megaloblastica` | 23 | 24 | 16 |
| `anemia-enfermedad-cronica` | 23 | 24 | 16 |
| `alteraciones-serie-blanca` | 23 | 23 | 15 |
| `leucemia-linfocitica-cronica` | 23 | 23 | 15 |
| `mieloma-multiple` | 23 | 23 | 15 |
| `vasopresores-sedantes` | 24 | 24 | 8 |
| `policitemia-secundaria` | 24 | 24 | 16 |
| `porfirias` | 24 | 24 | 15 |
| `hemoglobinopatias` | 24 | 24 | 15 |
| `leucemia-aguda` | 24 | 24 | 15 |
| `linfomas` | 24 | 24 | 15 |
| `linfadenopatias` | 24 | 24 | 15 |
| `hiperesplenismo` | 24 | 24 | 15 |
| `sindrome-hiperviscosidad` | 24 | 24 | 15 |
| `coagulacion-trombofilias` | 24 | 24 | 15 |
| `alteraciones-plaquetarias-cuantitativas` | 24 | 24 | 15 |
| `coagulacion-intravascular-diseminada` | 24 | 24 | 15 |
| `traumatismo-craneoencefalico` | 24 | 24 | 15 |
| `sindrome-aortico-agudo` | 24 | 24 | 15 |
| `trastornos-del-movimiento` | 24 | 24 | 15 |
| `enfermedad-arterial-periferica` | 24 | 24 | 20 |
| `hipertension-arterial` | 24 | 24 | 21 |
| `dislipidemias` | 24 | 24 | 21 |
| `hipertiroidismo-tiroiditis` | 24 | 24 | 19 |
| `nodulo-cancer-tiroides` | 24 | 24 | 19 |
| `metabolismo-oseo-mineral` | 24 | 24 | 19 |
| `neoplasias-snc-hipertension-intracraneal` | 27 | 27 | 15 |
| `transfusion-hemoderivados` | 29 | 29 | 15 |
| `ventilacion-mecanica` | 30 | 30 | 20 |
| `cirrosis-hepatica` | 40 | 57 | 22 |

Total: **1785 huecos en 99 temas**.

## Como ver los huecos de un tema

En la consola de `tests.html`:

```js
const { registry, loadTopic } = await import('/topics/registry.js');
const REGLA = ['criterios_dx', 'laboratorio', 'tx_farmacologico'];
for (const t of registry) {
  const tp = await loadTopic(t.id);
  const cc = tp.compCites || {};
  (tp.content.complicaciones || []).forEach(c => {
    const citas = cc[c.nombre] || {};
    REGLA.forEach(k => {
      const v = c[k];
      if (!v || /^no aplica[.]?$/i.test(String(v).trim())) return;
      if (!(Array.isArray(citas[k]) && citas[k].length)) console.log(t.id, c.nombre, k);
    });
  });
}
```
