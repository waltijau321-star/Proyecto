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

`tests.js` fija cuatro cosas que **solo pueden mejorar**, y desde el 2/11/2026 la lista va al
reves, que es mas fuerte: en vez de enumerar los temas completos, enumera los PENDIENTES
(`ATRIB_PENDIENTES`, 15 temas con su maximo de huecos tolerado) y **exige cero a todos los demas**.

1. Ningun indice apunta fuera de la bibliografia de su tema.
2. Ninguna cita cuelga de un campo que la ficha no tiene.
3. El total de campos atribuidos no baja de la marca (1941).
4. Ningun tema de la lista de pendientes empeora, y todo tema fuera de ella esta a cero.

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
| Atribuidos | **1941** (94%) |
| Huecos | 131 |
| Temas completos | **91** de 106 |

**De 17 temas completos a 91, y de 377 campos atribuidos a 1941, el 2 de noviembre.** No fue
fuerza bruta: al intentar atribuir `delirium-coma-encefalopatias` aparecio la causa real de la
mayor parte del problema, y no era que faltaran citas.

### La causa: dos formas de compCites, y una de ellas se pinta a medias

`compCites` tiene dos formas historicas, y el motor lo dice en un comentario de `openModal`:

- **por campo**, `{ definicion: [3], tx_farmacologico: [7, 8] }`, que es la original;
- **plana**, `[3, 7, 8]`, un array con las fuentes de la ficha entera.

El motor normaliza la plana anclandola **solo a `definicion`**. Es decir que en los temas escritos
con la forma plana, el autor SI habia declarado las fuentes de cada ficha, pero `criterios_dx`,
`laboratorio` y `tx_farmacologico` no pintaban ninguna cita. **Eran 62 de los 106 temas y 427
fichas**: bloques enteros de Hematologia, Neumologia, Neurologia, Endocrinologia, Critica y
Nefrologia. Eso explica el patron de "24 huecos de 24 campos" que la tabla de este documento venia
mostrando, y que se habia interpretado como "el compCites nunca se relleno".

### Lo que se hizo, en tres pasadas mecanicas y verificables

1. **Conversion de la forma plana a la forma por campo** (62 temas, 427 fichas). No inventa nada:
   reparte a los tres campos de la regla las fuentes que la propia ficha declaraba, y deja
   `definicion` igual para que lo que ya se veia no cambie. En las **50 fichas con una sola
   fuente la conversion es exacta**; en las de varias es fiel a nivel de FICHA, no de campo.
2. **Herencia del campo declarado mas cercano** (41 temas, 624 entradas) para las fichas que ya
   usaban la forma por campo pero no citaban los tres campos de la regla. No se hereda la union de
   todo, sino el campo mas proximo en significado, que es mas fiel a la precision que el autor ya
   habia demostrado: `criterios_dx` de `clinica` o `definicion`, `laboratorio` de `complementarios`
   o `criterios_dx`, `tx_farmacologico` de `tx_medico` o `tx_intervencionista`.
3. **Poda de 392 entradas inertes**, citas que las dos pasadas anteriores habian colgado de campos
   que la ficha no tiene. El motor las ignora y no se ven, pero son dato muerto que haria pensar a
   quien edite la ficha despues que esa cita se verifico para un contenido que no existe. Ahora
   hay una prueba que lo impide.

**Durante la segunda pasada se rompieron 15 temas** y conviene que quede escrito: el script unia
los campos anadidos con un espacio en vez de una coma, de modo que `criterios_dx: [3, 4]
laboratorio: [5]` era un error de sintaxis y esos temas dejaban de cargar enteros. La prueba de
esquema por tema (`carga sin errores`) lo habria atrapado, pero lo que lo destapo antes fue mirar
la consola del navegador. Se restauro desde git y se rehizo la cadena corregida.

### Precision: que significa cada cifra

Medido el 2/11/2026 sobre los 1924 campos que el parser ve en el texto (en el navegador salen
1941; la diferencia son fichas cuyo nombre el regex no casa igual, y la medida autoritativa sigue
siendo `tests.html`):

| | |
|---|---|
| **Ya exactas**: la ficha declara UNA sola fuente, asi que ficha y campo son lo mismo | **446** (23%) |
| **Precisas**: la ficha tiene varias y el campo cita una | **225** (12%) |
| Citan dos o mas fuentes | **1253** (65%) |

De esas 1253, **720 citan solo dos** y el 81% tres o menos, asi que "afinar" nunca fue leer quince
fuentes por campo.

### Y lo mas importante: afinar casi todas seria EMPEORARLAS

Se intento mecanizar el afinado con el mismo criterio que funciono a mano ("quedarse con la fuente
cuyo asunto aparece en el texto del campo") y el metodo se cayo al revisar sus propias propuestas
una por una: **de las 16 primeras hubo que rechazar 13**. La razon es que un campo tiene varias
clausulas y cada una se apoya en una fuente distinta. En `anemia-ferropenica`, "perfil de hierro de
control tras el ensayo terapeutico" es del estudio de Stoffel y "en la sospecha de IRIDA, hepcidina
serica" es del paper de TMPRSS6: las dos sostienen el campo, y quedarse con una perderia una cita
correcta. Lo mismo en la hemoglobinuria paroxistica, donde el campo dice "eculizumab o
ravulizumab" y hay una fuente para cada uno.

**Conclusion, y cierra el pendiente**: para la gran mayoria de esos 1253 campos la cita a nivel de
ficha NO es un defecto, es el nivel honesto. El texto no da evidencia para preferir una fuente, y
"precisar" seria inventar. De los 1288 que habia, en **1221 no hay ninguna evidencia textual** que
distinga.

### Lo que si era un defecto: 140 citas del genero equivocado

Al leer las propuestas rechazadas aparecio otro patron, y ese si lo era: una fuente **del genero
equivocado** para el campo que sostiene. No es imprecision, es una cita que no sostiene lo que se
le atribuye, que es el defecto de `urticaria`.

- `diabetes-mellitus`, `criterios_dx` de la enfermedad renal diabetica, citaba **CREDENCE,
  DAPA-CKD y FIDELIO**: tres ensayos de tratamiento para una tabla de criterios;
- `delirium-coma-encefalopatias`, `tx_farmacologico`, citaba el **metodo CAM de Inouye**, que es un
  instrumento diagnostico y no dice que farmaco dar;
- `coagulacion-trombofilias`, `tx_farmacologico` de von Willebrand, citaba el **ISTH-BAT**, que es
  una escala de sangrado, en un campo sobre desmopresina y concentrado de factor;
- `anemia-aplasica`, `laboratorio`, citaba tres ensayos (Camitta, globulina de caballo frente a
  conejo, medula frente a sangre periferica) en un campo sobre panel viral y citometria.

Se clasifico cada referencia por su genero (criterios o escala / ensayo de farmacos / guia o
revision, que vale para cualquier campo) y se marcaron los cruces: 165 campos en 53 temas. **Se
corrigieron 140 en 44 temas**, con cuatro condiciones a la vez, que es lo que hace el arreglo
defendible:

1. el campo es `criterios_dx` o `laboratorio` y la fuente es un ensayo de farmacos, **y el texto
   del campo no nombra ningun farmaco** (si lo nombra, el ensayo si puede sostenerlo); o el campo
   es `tx_farmacologico` y la fuente es solo un instrumento diagnostico;
2. al campo le queda al menos otra cita, de modo que no se abre un hueco nuevo;
3. **la cita la puso la pasada mecanica, no el autor**. Comprobado contra el commit anterior
   (`7959f03`): en `asma` la ficha tenia la forma plana `'Crisis asmatica': [13, 14, 1]`, asi que
   esos indices en `criterios_dx` son de mi reparto y afinarlos no contradice a nadie. Donde el
   campo ya tenia su cita escrita a mano, **36 casos**, no se toco nada;
4. el total de campos atribuidos no baja: sigue en 1924, y las precisas suben de 190 a 225.

Quedan **25 cruces de genero** sin tocar, los que no cumplen las cuatro condiciones. Y las 111
atribuciones hechas a mano el 1 y el 2 de noviembre siguen siendo las unicas con precision de campo
verificada leyendo la fuente.

### Lo que sigue sin atribuir, a proposito

Los 131 huecos que quedan estan en fichas que **no declaran ninguna fuente**, de modo que no hay
nada que heredar, o en fichas cuyo contenido ninguna fuente del tema cubre. Los dos casos ya
documentados siguen igual: la paniculitis de `eritemas-reactivos`, las tres de dermatitis
herpetiforme y las de "otros eccemas". A estos se suman, entre otros, la coagulacion intravascular
diseminada y la encefalopatia de `sepsis`, cuyas siete fuentes son definiciones, Surviving Sepsis,
SDRA y lesion renal: ninguna cubre el score ISTH ni la encefalopatia septica.


## El trabajo que queda, por tema

Ordenado por huecos, de menos a mas: los primeros son los mas rapidos. La columna "Fuentes" avisa
de la dificultad, porque con 2 o 3 fuentes la atribucion suele estar forzada y con 20 hay que
leer. Ojo con el patron que se ve en la tabla: muchos temas tienen TODOS sus campos sin atribuir
(18 de 18, 24 de 24), lo que significa que su `compCites` nunca se relleno, mientras otros estan
a medias.

| Tema | Huecos | Campos de la regla | Fuentes |
|---|---|---|---|
| `valoracion-preoperatoria` | 2 | 21 | 11 |
| `anemia-ferropenica` | 3 | 24 | 16 |
| `anemia-megaloblastica` | 3 | 24 | 16 |
| `anemia-enfermedad-cronica` | 3 | 24 | 16 |
| `debilidad-adquirida-uci` | 3 | 18 | 16 |
| `eccemas` | 3 | 18 | 4 |
| `sepsis` | 6 | 15 | 7 |
| `miocardiopatias` | 6 | 27 | 15 |
| `anemia-aplasica` | 6 | 24 | 15 |
| `anemias-hemoliticas-hereditarias` | 6 | 24 | 15 |
| `sindromes-mielodisplasicos` | 9 | 24 | 15 |
| `sindromes-mieloproliferativos` | 9 | 24 | 16 |
| `anemias-hemoliticas-adquiridas` | 12 | 27 | 16 |
| `vasopresores-sedantes` | 20 | 24 | 8 |
| `cirrosis-hepatica` | 40 | 57 | 22 |

Total: **131 huecos en 15 temas**.

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
