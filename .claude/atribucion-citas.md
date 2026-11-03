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
3. El total de campos atribuidos no baja de la marca (1962), salvo que se retire una cita
   por equivocada, y entonces se escribe el motivo en `tests.js` con la frase de la fuente.
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

## Estado a 2 de noviembre de 2026

| | |
|---|---|
| Campos de la regla | 2072 |
| Atribuidos | **1986** (95.8%) |
| Huecos | 86 |
| Temas completos | **92** de 106 |

(El dia anterior eran 1941 y 131 huecos. Tres pasadas el mismo dia: se cerraron 23, se
**retiraron 3 por equivocadas** al releer los pasajes, y **una volvio al arreglar el texto del
campo**. Las tres, mas abajo.)

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

### La premisa de este pendiente estaba equivocada (2 de noviembre de 2026)

Este apartado decia que los 131 huecos estaban "en fichas que **no declaran ninguna fuente**, de
modo que no hay nada que heredar", y que cerrarlos "exige fuentes nuevas, no reparto". Al ponerme
a ello, las dos afirmaciones resultaron falsas, cada una por su lado. Se cerraron **23 huecos**,
131 a 108, y ninguno necesito una fuente que no estuviera ya en el repositorio.

**Primero: 63 de los 131 estaban en fichas que SI declaran fuentes.** Basta separarlos al medirlos
(`Object.keys(compCites[ficha]).length > 0`) para verlo: 63 con citas en otros campos, 68 sin
ninguna. En `cirrosis-hepatica` el patron es inequivoco: Ascitis, PBE, ascitis refractaria,
sindrome hepatorrenal y encefalopatia **ya citaban la fuente correcta** en `criterios_dx` y en
`tx_farmacologico`, y solo `laboratorio` se habia quedado vacio. No era una ficha sin fuente, era
un campo sin rellenar.

**Segundo, y es lo que mas vale la pena recordar: la fuente que "faltaba" estaba en
`Bibliografia/`.** El caso que este documento ponia como ejemplo claro era la CID de `sepsis`,
"cuyas siete fuentes no cubren el score ISTH". Es cierto que las siete no lo cubren. Pero el
repositorio tiene 330 PDF, y entre ellos
`VI. Hematologia y Oncologia/Hemostasia y trombosis/Iba-et-al-2025-ISTH-DIC-updated-definition.pdf`,
que es exactamente esa fuente, en su carpeta correcta, nunca anadida a la `bibliografia` de ese
tema. Igual la encefalopatia septica, con
`IX. Neurologia/.../Wijdicks-2022-metabolic-encephalopathies.pdf`. **Antes de concluir que una
fuente falta, hay que buscarla en `Bibliografia/`**, no solo en la `bibliografia[]` del tema.

Mirando la carpeta con los huecos en la mano aparecen ademas, sin usar en el tema que las
necesita: `Freifeld-et-al-2011-IDSA-neutropenic-fever-guideline.pdf` (los 3 huecos de neutropenia
febril de `sindromes-mielodisplasicos`), `NCCN-2026-AML-guideline.pdf` (las dos transformaciones a
leucemia), `Kulasekararaj-et-al-2024-BSH-aplastic-anaemia-guideline.pdf` (`anemia-aplasica`),
`Obeid-et-al-2024-B12-deficiency-Delphi-consensus.pdf` (`anemia-megaloblastica`),
`Kaplan-et-al-2024-AASLD-portal-hypertension-varices-guidance.pdf` y
`Cederholm-Jensen-et-al-2019-GLIM-malnutrition-criteria.pdf` (varios de `cirrosis-hepatica`).
Ese es el camino para los 108 que quedan.

**Como se verifico cada uno de los 23.** No por el titulo de la fuente: buscando en el PDF las
afirmaciones concretas del campo y anotando las apariciones y las paginas en un comentario junto a
la cita. Por ejemplo, el `laboratorio` de Ascitis dice paracentesis, SAAG, recuento celular y
frascos de hemocultivo a pie de cama, y en el PDF de la AASLD hay paracentesis 45 veces, SAAG 9
(paginas 3-5), recuento celular 3 y "blood culture bottles" en la pagina 16. El `laboratorio` de
la encefalopatia subraya que un amonio normal obliga a reconsiderar el diagnostico, y la guia EASL
trae "normal ammonia" en su pagina 4.

### Contar apariciones no basta: 3 de 11 citas estaban mal (segunda pasada del 2/11/2026)

Las 23 citas de la primera pasada se verificaron buscando en el PDF los terminos del campo y
anotando cuantas veces aparecian y en que paginas. De esas 23, en **11** la cita se habia inferido
de que los terminos coincidieran, sin leer el pasaje. Al releerlas una por una, **3 no se
sostenian**, y por eso el total baja de 1964 a 1961.

**Las tres, y como enganaba el recuento:**

1. **La midodrina de la ascitis refractaria** (`cirrosis-hepatica`). "midodrine" aparecia 5 veces en
   la guia AASLD. Leidas: en la pagina 7 es el ensayo MACTH, donde midodrina mas albumina frente a
   placebo dio "no difference ... in the complication rates or death"; en las 23-24 es en el
   SINDROME HEPATORRENAL, como tercera opcion cuando no hay terlipresina ni noradrenalina, "yet the
   efficacy is low". Un recuento da 5 igual si la guia lo recomienda que si lo descarta.
2. y 3. **El `laboratorio` de la dopamina y de la dobutamina** (`vasopresores-sedantes`). La
   arritmia aparecia 8 veces en Surviving Sepsis, una de ellas en la misma pagina que la dopamina.
   Leidas: es un **desenlace de ensayo** ("The incidence of life-threatening arrhythmia was similar
   in both groups") y un factor de eleccion de farmaco, nunca una recomendacion de monitorizar el
   ECG. Ademas "urine output" tiene cero apariciones en toda la guia, asi que la diuresis horaria
   no esta, y del gasto cardiaco la guia dice que hay "insufficient evidence to make a
   recommendation".

**Las 8 que si se sostienen quedaron con la frase de la guia escrita en el comentario**, en vez del
recuento. Ejemplos: la ascitis refractaria se apoya en la declaracion de la pagina 6, "In patients
receiving diuretics, body weight and serum creatinine and sodium should be regularly monitored"; el
fentanilo en la declaracion no graduada de la pagina 5 de PADIS, "the ... Critical-Care Pain
Observation Tool (CPOT) demonstrate the greatest validity and reliability for monitoring pain"; la
fibrilacion auricular en la recomendacion de clase I B de la pagina 41 de la guia ESC, "recommended
in all patients with HCM or cardiac amyloidosis and AF or atrial flutter".

**Y en 4 de las 8 el pasaje dejo ver que una clausula del campo no esta sostenida**, cosa que el
recuento no podia mostrar, y queda anotada junto a la cita: la resonancia para el trombo (la guia
solo nombra el transesofagico), el "tethering" de la dilatada (cero apariciones en las dos guias),
la miocardiopatia periparto (esa guia no la cubre) y el umbral de sodio urinario <10 mEq/L del
hepatorrenal (la guia nombra el sodio urinario, no ese numero).

**Dos preguntas de CONTENIDO, no de cita, que esto saco a la luz** y que decide el autor:

- el `tx_farmacologico` de la ascitis refractaria recomienda midodrina, y la mejor fuente del tema
  trae un ensayo sin diferencia en complicaciones ni muerte;
- las fichas de vecuronio y rocuronio piden monitorizar con tren de cuatro, y esa guia recomienda
  **en contra de usarlo solo**: "We suggest against the use of peripheral nerve stimulation with
  train of four alone ... in patients receiving continuous infusion", pidiendo combinarlo con la
  valoracion clinica.

**La regla de decision que quedo**, para que las proximas sean consistentes: se cita cuando la
fuente sostiene **lo que el campo manda hacer principalmente**; se deja el hueco cuando solo
sostiene una clausula incidental. Por eso el `laboratorio` del propofol (1 de 3 clausulas) y el de
la dopamina (1 de 3) se quedan sin cita, y el del hepatorrenal si la lleva: ahi la fuente sostiene
que medir, y lo que falta es un numero concreto.

### Cuando la cita no se sostiene, a veces lo que hay que arreglar es el TEXTO

De las 3 citas retiradas, una volvio el mismo dia, y el camino merece quedar escrito porque es
reutilizable.

El `tx_farmacologico` de la ascitis refractaria decia "considerar midodrina... para mejorar volumen
arterial efectivo **y permitir reintroduccion de diureticos**". La guia AASLD no sostenia eso. Pero
al leer el pasaje con cuidado aparecio el matiz: el ensayo MACTH encontro "**some improvement in
parameters reflecting improved effective plasma volume**, no difference was observed in the
complication rates or death during 12 months". Es decir que **la primera mitad del campo era
exactamente lo que el ensayo encontro**; lo que no habia era el salto al beneficio clinico.

Asi que no era un campo equivocado, era un campo que decia mas de lo que su fuente aguanta. El
autor decidio arreglar el texto en vez de borrar la conducta: la midodrina se queda, con lo que
mejora y con lo que el ensayo no mostro, y pierde la clausula de los diureticos. **Con el campo
ajustado a la fuente, la cita volvio a ser defendible**, y el total subio de 1961 a 1962.

La pregunta que conviene hacerse cuando una cita no se sostiene es, entonces, doble: puede que la
cita este mal, o puede que el campo afirme mas de lo que su fuente dice. La segunda se arregla
escribiendo, y es la que deja el contenido mejor.

### El matiz hay que ponerlo donde aparece, no donde se noto

La otra decision de contenido del 2/11/2026 era el tren de cuatro. La guia de bloqueo neuromuscular
recomienda **en contra** de guiarse por el solo: "We suggest against the use of peripheral nerve
stimulation with train of four alone ... in patients receiving continuous infusion", y pide
integrarlo en la valoracion clinica. Lo note en los dos campos `laboratorio` que la citaban, que
eran los que estaba verificando.

**Pero el tema menciona el tren de cuatro en SEIS sitios**: esos dos `laboratorio`, la `clinica` y
los `criterios_tips` del vecuronio, su `algoritmo`, y la lista de monitorizacion del tema. Cuatro de
ellos no llevan cita, asi que no aparecian en ninguna medida de atribucion. Poner el matiz solo en
los dos citados habria dejado el tema diciendose lo contrario a si mismo, y ademas habria dejado el
aviso justo en los dos sitios que menos se leen. Se puso en los seis.

La leccion: cuando una fuente obliga a matizar una conducta, **buscar todas las menciones de esa
conducta en el tema** (`grep` por el nombre del metodo), no solo las que tienen cita.

### Lo que NO se cerro, y por que (medido, no supuesto)

**Las guias no dosifican.** Es el motivo de 10 de los 12 huecos que quedan en
`vasopresores-sedantes`, todos ellos `tx_farmacologico` con rangos de dosis, presentaciones y
diluciones. En el PDF de PADIS **"mg/kg/h" y "mcg/kg" tienen cero apariciones**, y la guia de
bloqueo neuromuscular tiene **un unico "mg/kg" en 25 paginas**. Dicen que farmaco preferir, no a
cuanto. Y las presentaciones ("ampolla 200 mg/5 mL") no las da ninguna guia: son de formulario. El
tema declara a Katzung y no lo usa en ningun sitio, que es probablemente para lo que se anadio,
pero ese libro no esta en `Bibliografia/` y no se puede comprobar. Es la misma forma del hallazgo
de Reumatologia: las guias de manejo no traen los criterios de clasificacion. Antes de dar por
cubierto un campo, comprobar que la fuente es del **genero** del campo.

**Campos cubiertos solo a medias, que se dejaron sin cita a proposito.** El `laboratorio` del
propofol tiene tres clausulas y PADIS solo sostiene una: "triglycerides" y "creatine kinase"
tienen cero apariciones. El `tx_farmacologico` de la CID tiene dos y el ISTH solo sostiene la
anticoagulacion: "transfus" y "cryoprecipitate" tienen cero en ese PDF, y "platelet transfusion",
"plasma transfusion" y "disseminated intravascular" tienen cero en Surviving Sepsis 2026. Citar
ahi mandaria al lector a buscar un consejo que la fuente no da, que es el defecto de `urticaria`
en pequeno.

**El paciente cirrotico de `valoracion-preoperatoria`** sigue sin cita porque ninguna de sus 11
fuentes es de hepatologia, y ahora con evidencia: en el PDF de la guia perioperatoria de la AHA y
el ACC, "cirrhosis", "Child-Pugh" y "MELD" tienen **cero apariciones** cada una.

**Nueve de los huecos no afirman nada que se pueda citar**, y cinco de esos nueve son remisiones a
otra tarjeta: "Sin hallazgo especifico salvo los propios de un evento embolico agudo", "No hay
tratamiento farmacologico especifico de la insuficiencia mitral en si, mas alla del tratamiento de
la miocardiopatia de base ya descrito en cada tarjeta". El trinquete los cuenta como huecos porque
su filtro solo reconoce la cadena exacta "No aplica". Los tres que le quedan a `miocardiopatias`
son de este tipo, asi que ese tema esta de hecho cerrado. **Es un artefacto de la medida, no un
pendiente**, y conviene decidir si el filtro debe reconocerlos antes de que alguien intente
"cerrarlos" citando algo.

Los casos ya documentados de antes siguen igual: la paniculitis de `eritemas-reactivos`, las tres
de dermatitis herpetiforme y las de "otros eccemas".


## Tercera tanda del 2 de noviembre de 2026: 24 huecos mas, y donde esta el techo

De 110 a **86**, con la misma regla de siempre: se lee el pasaje, se escribe la frase de la fuente
en la cabecera del `content.js` y, cuando la fuente solo sostiene una clausula incidental, se deja
el hueco anotado. Ninguna de las 24 se dedujo del titulo de la fuente.

| Tema | Antes | Ahora | Con que |
|---|---|---|---|
| `cirrosis-hepatica` | 34 | 24 | AASLD 2024 de hipertension portal y varices (NUEVA, fuente 23, estaba en `Bibliografia/` sin usar), AASLD 2023 de HCC (18), EASL 2023 de ACLF (22) y GLIM 2019 (NUEVA, fuente 24) |
| `anemia-aplasica` | 6 | **0** | BSH 2024 de aplasica (NUEVA, 16) e IDSA de neutropenia febril (NUEVA, 17), las dos en `Bibliografia/` sin usar |
| `sindromes-mielodisplasicos` | 9 | 5 | IDSA (NUEVA, 16) y la clasificacion OMS 5a ed. (1), leida en PMC |
| `anemia-ferropenica` | 3 | 1 | la guia BSG (3), que ya estaba declarada en el tema |
| `sindromes-mieloproliferativos` | 9 | 8 | clasificacion OMS 5a ed. (1) |
| `debilidad-adquirida-uci` | 3 | 2 | Hermans (6), leida entera en PMC |

**Lo que confirma el patron del 2 de noviembre**: de los 24, **veintiuno se cerraron con fuentes que
ya estaban**, cuatro de ellas en `Bibliografia/` sin usar y el resto declaradas en el propio tema.
Solo dos necesitaron salir a PubMed Central, y las dos estaban ya en la `bibliografia` del tema.

### Tres hallazgos que cambian como se trabaja esto

**1. La guia NCCN no se puede usar, y hay siete en el repositorio.** El PDF de LMA dice en cada
pagina: "use of this NCCN Content is governed by the End-User License Agreement, and you MAY NOT
distribute this Content or **use it with any artificial intelligence model or tool**". Se leyo lo
justo para encontrar la clausula y se dejo ahi, de modo que los 2 huecos de transformacion a LMA de
`sindromes-mielodisplasicos` y los de `sindromes-mieloproliferativos` siguen abiertos aunque la
fuente este en el disco. Afecta tambien a los NCCN de colon, esofago, gastrico, pancreas, recto y
cabeza y cuello. Decision del autor: conseguir otra fuente, o usarla el mismo a mano.

**2. "Esta en PubMed Central" no quiere decir que se pueda leer.** De los nueve articulos que se
sondearon, solo tres dan texto completo (la OMS 5a ed., Hermans, y el consenso de B12 que resulto
no servir). **O Leary, las dos EASL, Guichelaar, Needham, Herridge, Cullis, Fan y Krowka no tienen
PMCID**, y de **Brodsky y Carmel PMC devuelve solo el resumen**. Citar desde un resumen no es leer
el pasaje, asi que no se hizo. El sitio de la revista tampoco sirve de salida: una peticion al
texto completo de la EASL de cirrosis descompensada responde **403**.

**3. La fuente que mas rendiria ahora es la TIF 5a edicion (2025)**, las guias de la Thalassaemia
International Federation: cerraria los **nueve** huecos de "Sobrecarga de hierro transfusional" que
hay repartidos entre `anemias-hemoliticas-hereditarias`, `anemias-hemoliticas-adquiridas` y
`anemia-enfermedad-cronica`, que son los mismos tres campos escritos tres veces (ferritina sostenida,
cuantificacion por RM T2*, y los tres quelantes). No esta en `Bibliografia/`. El unico documento
abierto que se encontro citando sus umbrales ("maintaining serum ferritin below 1000 ng/mL and
achieving a cardiac T2* of over 20 milliseconds") es un marco de cribado endocrino pediatrico de
Pakistan, genero y poblacion equivocados: citarlo seria el defecto de `urticaria` otra vez.

### Y tres preguntas de CONTENIDO que decide el autor

Las tres salieron de leer los pasajes, no de medir nada, y las tres estan anotadas junto a su cita:

- **El `tx_farmacologico` del ACLF recomienda corticoides** para la hepatitis alcoholica grave
  sobreanadida, y su propia fuente declarada (22) recomienda lo contrario en dos escenarios:
  "Corticosteroids are not recommended in patients with severe alcohol-related hepatitis and ACLF-3,
  nor in patients with uncontrolled bacterial infection" (recomendacion fuerte), y anade que "with
  increasing severity of ACLF, corticosteroid responsiveness is progressively reduced whilst the risk
  of infection increases". El campo no nombra ninguna de las dos exclusiones. Por eso quedo sin cita.
- **El `laboratorio` de la hipertension portal llama a la trombocitopenia "marcador indirecto mas
  sensible"**, y la AASLD 2024 dice "There are insufficient data to support the utilization of any
  serological markers such as platelet count alone ... to exclude CSPH". Ademas "hypersplenism" y
  "leukopenia" tienen cero apariciones en esa guia.
- **El G-CSF de la neutropenia febril**: en `anemia-aplasica` el campo lo ofrece en la infeccion grave
  activa, y la recomendacion 42 de la IDSA dice "CSFs are not generally recommended for treatment of
  established fever and neutropenia (B-II)". En `sindromes-mielodisplasicos` el mismo campo si
  concuerda con la guia, que es la prueba de que no es un problema de la fuente sino de ese texto.

De paso, ninguna de las dos guias que lo mencionan **fija la ventana de la primera hora** para el
antibiotico empirico que los dos campos dan por sentada: el unico "within 1 h" de la IDSA habla de
llegar a un centro medico.
## El trabajo que queda, por tema

Ordenado por huecos, de menos a mas: los primeros son los mas rapidos. La columna "Fuentes" avisa
de la dificultad, porque con 2 o 3 fuentes la atribucion suele estar forzada y con 20 hay que
leer. Ojo con el patron que se ve en la tabla: muchos temas tienen TODOS sus campos sin atribuir
(18 de 18, 24 de 24), lo que significa que su `compCites` nunca se relleno, mientras otros estan
a medias.

| Tema | Huecos | Fuentes del tema | Que lo cierra, y si se puede leer |
|---|---|---|---|
| `sepsis` | 1 | 10 | guia de transfusion de plaquetas y plasma; el repo solo tiene la de hematies (Carson AABB 2023) |
| `valoracion-preoperatoria` | 1 | 11 | riesgo quirurgico en cirrosis (Mayo / VOCAL-Penn, o una guia AASLD); ninguna de sus 11 es de hepatologia |
| `anemia-ferropenica` | 1 | 16 | **nada**: el campo dice "ninguno especifico" y su clausula de las heces oscuras no esta en la guia BSG (cero apariciones de "melaena") |
| `miocardiopatias` | 3 | 15 | **ninguna: los tres son enunciados de ausencia**, el tema esta cerrado de hecho |
| `anemia-megaloblastica` | 3 | 16 | Carmel (11) seria la buena, y **PMC solo da su resumen** (PMC2532799); el consenso Delphi de B12 del repo NO sirve: cero apariciones de LDH, haptoglobina, esquistocitos y microangiopatia |
| `anemia-enfermedad-cronica` | 3 | 16 | la de sobrecarga de hierro transfusional: **TIF 5a edicion (2025)**, que no esta en el repo |
| `eccemas` | 3 | 4 | pendiente de verdad: 4 fuentes y ninguna cubre "otros eccemas" |
| `debilidad-adquirida-uci` | 2 | 16 | nada: Hermans (6) se leyo entera y no propone cribado analitico ni farmaco para el sindrome |
| `sindromes-mielodisplasicos` | 5 | 16 | 3 de sangrado (Fenaux o NCCN de SMD, ninguna en el repo) y 2 de transformacion a LMA, que **la licencia de la NCCN prohibe usar** |
| `anemias-hemoliticas-hereditarias` | 6 | 15 | la de sobrecarga de hierro (TIF 5a ed.) y la crisis megaloblastica; ojo, la de parvovirus (12) es para la crisis APLASICA |
| `sindromes-mieloproliferativos` | 8 | 16 | los criterios de la prefibrotica y del IWG-MRT no estan en el documento de la OMS, y el resto lo cubriria la NCCN de LMA, prohibida por licencia |
| `anemias-hemoliticas-adquiridas` | 12 | 16 | Brodsky (13) para la trombosis de la HPN: **PMC solo da su resumen** (PMC4215311); mas la de sobrecarga de hierro |
| `vasopresores-sedantes` | 14 | 8 | **10 son dosis y presentaciones: ninguna guia las da.** Hace falta una referencia de dosificacion y el formulario institucional |
| `cirrosis-hepatica` | 24 | 24 | O Leary (13), EASL vascular (12), EASL descompensada (5), Fallon (10), ILTS (11) y Guichelaar (15): **ninguna tiene texto completo en PMC y el sitio de la revista responde 403** |

Total: **86 huecos en 14 temas**. La columna de la derecha ya no dice "si se sabe": se midio. En
nueve de los catorce lo que falta es una fuente que **no se puede leer** (no esta en el repositorio,
no esta abierta en PubMed Central, o su licencia prohibe usarla), y en tres no hay nada que citar
porque el campo no afirma nada.
los 15 temas la fuente ya esta, o en la `bibliografia` del tema o en `Bibliografia/` sin usar.

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
