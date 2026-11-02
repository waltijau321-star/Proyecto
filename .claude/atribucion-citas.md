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

De los 1941 campos atribuidos, **unos 1250 lo estan a nivel de ficha y no de campo**: la cita dice
"esta ficha se apoya en estas fuentes", no "este campo concreto sale de esta fuente". Es un salto
grande frente a no tener nada, y es fiel a lo que el autor declaro, pero **no es lo mismo que las
111 atribuciones hechas a mano** el 1 y el 2 de noviembre, donde cada campo se leyo y se asigno a
la fuente cuyo asunto lo cubre. Afinar las heredadas campo por campo es una pasada posterior, y en
los temas con 15 o 16 fuentes es trabajo de leerlas.

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
