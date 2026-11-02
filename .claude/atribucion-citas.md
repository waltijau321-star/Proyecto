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
- `ampollosas`, las tres de **dermatitis herpetiforme**: su unica fuente posible es un
  metaanalisis de PREVALENCIA en celiaquia, que no sostiene ni el patron granular de la
  inmunofluorescencia ni la dapsona. Ya estaba anotado en la nota de fuentes que falta una
  revision clinica de la entidad.
- `eccemas`, las tres de "Otros eccemas y lo que se disfraza de eccema": la ficha mezcla eccema
  de estasis, tinea y escabiosis, y ninguna de las cuatro fuentes del tema cubre las dos ultimas.

**El patron de los que se dejan** es siempre el mismo: la ficha habla de algo que ninguna fuente
del tema cubre de verdad. Eso no se arregla atribuyendo, se arregla consiguiendo la fuente (o
aceptando el limite y dejandolo escrito, como ya se hizo en la cabecera de esos `content.js`).

## Estado a 1 de noviembre de 2026

| | |
|---|---|
| Campos de la regla | 2072 |
| Atribuidos | **377** (18%) |
| Huecos | 1695 |
| Temas completos | **17** |

Los diecisiete completos: `historia-clinica`, `exploracion-cardiovascular`,
`exploracion-respiratoria`, `exploracion-abdominal`, `exploracion-osteoarticular`,
`exploracion-cabeza-cuello`, `melanoma`, `cancer-cutaneo-no-melanoma`,
`manifestaciones-cutaneas-sistemicas`, `urticaria`, `anafilaxia`, `abdomen-agudo`,
`supresion-alcoholica`, `ahogamiento`, `broncoaspiracion`,
`glomerulopatias-sindromes-glomerulares` y `nefropatia-diabetica-hipertensiva`. Catorce se
cerraron entre el 1 y el 2 de noviembre. **Semiologia va 6 de 9.**

**El criterio para elegirlos no fue el tamano sino la seguridad de la atribucion**: temas donde
cada fuente tiene **un asunto propio**, de modo que el texto del campo dice a cual pertenece y no
hay que adivinar. La Parte I y la Parte II de la revision de An Bras Dermatol; las dos guias AIOM
(basocelular y epidermoide) frente al Kaposi; la ESMO del melanoma; la guia de ahogamiento frente
a la de ARDS; Marik (neumonitis frente a neumonia) frente a la guia de neumonia frente a la
revision de absceso; la revision del abdomen agudo frente a las dos de Tokyo y la de pancreatitis;
la guia ASAM de abstinencia; el parametro de practica de anafilaxia; la guia internacional de
urticaria.

### Semiologia tenia reparto, contra lo que parecia

Los nueve temas de Semiologia comparten cinco libros de texto generales, y a primera vista eso
hacia imposible decidir cual sostiene un hallazgo concreto. Pero **las citas que el propio autor
ya habia puesto revelaban su criterio**, y es un criterio solido:

| Tipo de afirmacion | Fuente |
|---|---|
| Valor diagnostico (sensibilidad, especificidad, "virtualmente diagnostico", rendimiento) | **McGee**, que es el libro de las caracteristicas operativas de los hallazgos |
| Un hallazgo con su propio paper de evidencia | **ese paper**: Naylor para el higado, Cattau para la ascitis, Barkun para el bazo, Wagner para la apendicitis, Cook para la presion venosa, Etchells para los soplos, Piirila para los estertores, Eberhardt para la insuficiencia venosa, Haynes para las masas cervicales |
| Exploracion cardiaca (tecnica, focos, ruidos, extratonos) | **Perloff y Constant**, monografias dedicadas al examen del corazon |
| Tecnica general y topografia | Bates y Argente, los dos textos de ensenanza |

Con eso, cinco temas de Semiologia se cerraron sin adivinar nada. Lo que NO se pudo repartir asi
se dejo: las 6 P de la isquemia arterial AGUDA no las cubre McGee-Boyko, que es de isquemia
cronica, de modo que fueron a los textos generales.

## El trabajo que queda, por tema

Ordenado por huecos, de menos a mas: los primeros son los mas rapidos. La columna "Fuentes" avisa
de la dificultad, porque con 2 o 3 fuentes la atribucion suele estar forzada y con 20 hay que
leer. Ojo con el patron que se ve en la tabla: muchos temas tienen TODOS sus campos sin atribuir
(18 de 18, 24 de 24), lo que significa que su `compCites` nunca se relleno, mientras otros estan
a medias.

| Tema | Huecos | Campos de la regla | Fuentes |
|---|---|---|---|
| `eritemas-reactivos` | 1 | 21 | 4 |
| `eccemas` | 3 | 18 | 4 |
| `ampollosas` | 3 | 17 | 5 |
| `delirium-coma-encefalopatias` | 6 | 6 | 15 |
| `valoracion-preoperatoria` | 6 | 21 | 11 |
| `esclerosis-multiple` | 7 | 7 | 15 |
| `quemaduras` | 7 | 17 | 2 |
| `exploracion-piel-faneras` | 9 | 10 | 9 |
| `sepsis` | 11 | 15 | 7 |
| `exploracion-neurologica` | 11 | 13 | 9 |
| `psoriasis` | 11 | 18 | 6 |
| `soporte-vital-avanzado` | 11 | 15 | 3 |
| `signos-clasicos` | 13 | 13 | 9 |
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

Total: **1695 huecos en 89 temas**.

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
