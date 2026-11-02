# Reumatología e Inmunología Clínica: plan de fuentes

Bloque **XI del temario, 16 items, 0 construidos**. Es, con Infectología, uno de los dos únicos
bloques enteros en cero. Este documento es el paso previo a escribir: qué módulos se hacen, qué
fuente sostiene cada uno, qué solapa con lo que ya existe y **qué falta por conseguir**.

Sigue el patrón que funcionó en Dermatología (13 items → 9 módulos, fuentes antes de escribir).

## Lo que ya hay en el repo

`Bibliografia/VIII. Reumatología e Inmunología Clínica/` trae **18 PDF**, ya ordenados en
subcarpetas que calcan los cuatro grupos del temario. Las referencias de abajo están **leídas del
PDF**, no deducidas del nombre del archivo, porque dos no coinciden:

- `Del Galdo-et-al-2025-...` se titula **"2023 update"** y se publicó en 2025;
- `Fanouriakis-et-al-2024-...` se titula **"2023 update"** y se publicó en 2024
  (*Ann Rheum Dis* 2024;83:15-29).

Citar cualquiera de los dos como "EULAR 2023" a secas induce a error. En `bibliografia[]` va el año
de publicación y el título tal como lo escribe la revista, que es lo que permite encontrarlo.

## Los 13 módulos propuestos

| # | Módulo | Items del temario | Fuente principal (en el repo) |
|---|---|---|---|
| 107 | Artritis reumatoide | Artritis reumatoide | Smolen 2023 EULAR (*Ann Rheum Dis* 2023;82:3-18) + Fraenkel 2021 ACR (*Arthritis Care Res*) |
| 108 | Espondiloartritis | Espondiloartritis | Ramiro 2022 ASAS-EULAR axSpA, "2022 update" |
| 109 | Gota y enfermedad por depósito de cristales | Gota y cristales | FitzGerald 2020 ACR gota (35 pp) |
| 110 | Osteoartritis y artritis séptica | Osteoartritis y artritis séptica | Bannuru 2019 OARSI (rodilla, cadera y poliarticular) + EBJIS/SANJO 2023 (*J Bone Joint Infect* 2023;8:29-37) |
| 111 | Lupus eritematoso sistémico | Lupus | Fanouriakis 2024 EULAR, "2023 update" |
| 112 | Esclerosis sistémica, conectivopatías y Raynaud | Esclerosis sistémica y otras conectivopatías + **Raynaud** | Del Galdo 2025 EULAR, "2023 update" + Wigley-Flavahan 2016 (*N Engl J Med* 2016;375:556) |
| 113 | Vasculitis sistémicas | Vasculitis sistémicas | Chung 2021 ACR/VF ANCA + Maz 2021 ACR/VF arteritis de células gigantes y Takayasu |
| 114 | Síndrome antifosfolípido y Sjögren | Antifosfolípido y Sjögren | Tektonidou 2019 EULAR (*Ann Rheum Dis* 2019;78:1296-304) + Ramos-Casals 2020 EULAR (*Ann Rheum Dis* 2020;79:3-18) |
| 115 | Miopatías inflamatorias | Polimiositis y dermatomiositis | Lundberg 2017 EULAR/ACR, criterios de clasificación |
| 116 | Lumbalgia, hernia de disco y canal estrecho | Lumbalgia + Hernia de disco + Canal estrecho lumbar | Qaseem 2017 ACP lumbalgia + Katz 2022 *JAMA* (estenosis de canal) |
| 117 | Fibromialgia y reumatismos de partes blandas | Fibromialgia + **Bursitis y tendinitis** | Macfarlane 2017 EULAR fibromialgia. **Bursitis y tendinitis sin fuente** |
| 118 | Fiebre de origen desconocido | Fiebre de origen desconocido | Haidar-Singh 2022 |

**Raynaud va dentro del 112 y no suelto**, porque clínicamente es la puerta de entrada a la
conectivopatía (capilaroscopia, anticuerpos, cribado de hipertensión pulmonar) y su única fuente es
una revisión de 10 páginas: un tema propio quedaría anémico y repetiría el cribado. Si prefieres
respetar la estructura del temario literalmente, se separa y son 14 módulos; el item del temario
puede apuntar al 112 igual, como ya hacen varios de Dermatología.

## Solape con los 106 temas construidos

Medido sobre las **1384 fichas** del repo, normalizando tildes en los dos lados. (La primera versión
de este barrido buscaba `antifosfolip` sin tilde, daba 0 en `coagulacion-trombofilias` y me hizo
concluir que faltaba el síndrome antifosfolípido. Falso: el tema lo cubre, escrito
"antifosfolípido". Después de acentuar 83 489 palabras, cualquier grep sin tildes sub-reporta.)

**13 de los 16 items no tienen ni una ficha en ningún tema.** Los tres que sí, y que hay que
enlazar en vez de repetir:

| Ya existe | Dónde | Qué debe hacer el módulo nuevo |
|---|---|---|
| Artritis psoriásica | `psoriasis`: 2 fichas, incluida la calculadora de cribado | El 108 va a espondiloartritis axial, criterios ASAS e imagen; el cribado se enlaza |
| Arteritis de células gigantes | `cefaleas`: 1 ficha | El 113 va a la clasificación, la biopsia y el tratamiento; la cefalea se enlaza |
| Miopatías inflamatorias | `ela-miopatias`: 2 fichas (clasificación, y inflamatorias y tóxicas) | El 115 va a autoanticuerpos, cribado de intersticial y de neoplasia, y tratamiento; el enfoque de la debilidad y la CK se enlazan |
| Síndrome antifosfolípido | `coagulacion-trombofilias`: dentro de "Trombofilias hereditarias y adquiridas", con los tres anticuerpos de Sydney | El 114 va al síndrome como enfermedad: obstétrico, catastrófico, criterios; la trombofilia se enlaza |

Y un detalle de buscabilidad que conviene arreglar al construir el 114: el buscador global indexa
los **nombres de ficha**, y ninguna ficha se llama "síndrome antifosfolípido", así que hoy un
residente que lo busque no encuentra nada aunque el contenido esté.

Lo contrario también importa: estas enfermedades aparecen sin parar como diagnóstico diferencial en
los temas ya hechos (artritis reumatoide en 17 temas, lupus en 18, vasculitis en 35, gota en 37) y
el residente no tiene a dónde ir. Eso es el argumento del bloque.

## Lo que FALTA, y es la parte accionable

### 1. Los criterios de clasificación no están en las guías de manejo

Comprobado abriendo los PDF y contando menciones: las guías de **AR, gota y ANCA no mencionan** los
criterios de clasificación, y la de **lupus los menciona pero no los reproduce**. Son guías de
*tratamiento*. Y `criterios_dx` es uno de los tres campos que la regla mínima de citas obliga a
atribuir, así que sin estos papers el módulo nace con hueco.

Sondeado en PubMed con el filtro `"pubmed pmc"[sb]` (el filtro `"open access"` no existe y devuelve
0 sin avisar):

| Criterios | Estado |
|---|---|
| **Lupus EULAR/ACR 2019** (Aringer) | **ABIERTO**: *Arthritis Rheumatol* 2019;71(9):1400-12, PMC6827566, doi 10.1002/art.40930 |
| **Gota ACR/EULAR 2015** (Neogi) | **ABIERTO**: los 4 resultados pasan el filtro de PMC |
| **AR ACR/EULAR 2010** (Aletaha) | **NO abierto**. Ni *Ann Rheum Dis* 2010;69:1580-8 (doi 10.1136/ard.2010.138461) ni la gemela de *Arthritis Rheum*. Solo el informe metodológico de fase 2 (PMC3077961), que no trae la tabla |
| Esclerosis sistémica ACR/EULAR 2013 | sin sondear |
| Sjögren ACR/EULAR 2016 | sin sondear |
| Antifosfolípido ACR/EULAR 2023 | sin sondear a fondo; la búsqueda por autor devuelve 3 con PMC, todas anteriores a 2023 |
| Vasculitis ACR/EULAR 2022 (las cinco) | sin sondear |
| axSpA ASAS (Rudwaleit) | sin sondear; puede estar referenciado en Ramiro 2022 |
| Fibromialgia ACR 2016 (Wolfe) | sin sondear; puede estar en Macfarlane 2017 |

Lo marcado "sin sondear" es eso y no "no existe": el sondeo de Dermatología falló en los cuatro
casos que se comprobaron, y la lección fue no dar por cerrada una ausencia.

### 2. Dos items sin fuente propia

- **Bursitis y tendinitis** (módulo 117): no hay nada en la carpeta. Es el hueco más claro.
- **Hernia de disco** (módulo 116): Qaseem 2017 cubre el dolor lumbar con componente radicular y
  Katz 2022 la estenosis, pero no hay una fuente dedicada a la hernia.

## Por dónde empezar

**El 111, lupus**, y por tres razones que se refuerzan: la guía de manejo está en el repo y es
reciente (2024), **sus criterios de clasificación son los únicos verificados como abiertos y con
tabla completa** (PMC6827566), y es la enfermedad que más aparece como diferencial sin tener tema
(18 temas la mencionan). Es el módulo que puede nacer cumpliendo la regla mínima de citas sin
esperar nada.

Después el **109 (gota)**, que también tiene criterios abiertos, y el **113 (vasculitis)**, que
tiene dos guías ACR completas.

El **107 (artritis reumatoide)**, pese a ser el más representativo del bloque, conviene dejarlo
para cuando haya cómo sostener `criterios_dx`: hoy habría que escribirlo citando la guía de manejo
para una tabla que esa guía no contiene, y eso es exactamente el defecto de `urticaria` que se
corrigió el 1 de noviembre.
