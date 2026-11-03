# Infectología: plan de fuentes

Bloque **X del temario, 20 ítems, 0 construidos**. Es, con Reumatología, uno de los dos únicos
bloques enteros en cero, y el más grande de los dos. Este documento es el paso previo a escribir:
qué módulos se hacen, qué fuente sostiene cada uno, qué solapa con lo que ya existe y **qué falta
por conseguir**.

Sigue el patrón que funcionó en Dermatología (13 ítems → 9 módulos) y en Reumatología (16 → 13):
las fuentes antes de escribir, leídas del PDF y no deducidas del nombre del archivo.

## Lo que ya hay en el repo

`Bibliografia/VII. Enfermedades Infecciosas/` trae **32 PDF**, la carpeta más grande del
repositorio, ya ordenados en subcarpetas que calcan los cuatro grupos del temario: 8 en
"Infecciones frecuentes por sistema", 3 en "Huésped inmunocomprometido", 3 en "Principios
generales" y 18 en "Infecciones tropicales, zoonosis y parasitosis". **Los 32 se abrieron para
leer su portada**, y ninguno miente en el nombre (a diferencia de los dos de Reumatología).

Hay además **tres fuentes de este bloque guardadas en otras carpetas**, y conviene anotarlas
porque un `find` dentro de la carpeta de Infectología no las encuentra:

| Fuente | Dónde vive | Para qué ítem |
|---|---|---|
| `EBJIS-2023-SANJO-septic-arthritis-guideline.pdf` | VIII. Reumatología / Artropatías inflamatorias | artritis séptica (ítem 4) |
| `Freifeld-et-al-2011-IDSA-neutropenic-fever-guideline.pdf` | VI. Hematología y Oncología / Oncología general | neutropenia febril (ítem 9) |
| `Kalogeropoulos-et-al-2022-ocular-toxoplasmosis.pdf` | XI. Ambulatoria / Oftalmología | toxoplasmosis ocular (ítem 18) |

## Los 19 módulos propuestos, para los 20 ítems

| # | Módulo | Ítems del temario | Fuente principal (y dónde está) |
|---|---|---|---|
| 121 | Endocarditis infecciosa | Endocarditis infecciosa | **ESC 2023** (Delgado, *Eur Heart J*, 95 págs) |
| 122 | VIH/SIDA e infecciones oportunistas | VIH/SIDA e infecciones oportunistas | **HHS 2026** de antirretrovirales + **NIH/CDC/HIVMA-IDSA 2024** de oportunistas |
| 123 | Infecciones de transmisión sexual | ITS (sífilis, uretritis) | **CDC 2021** (Workowski, *MMWR Recomm Rep* 70(4)) |
| 124 | Infecciones de piel y tejidos blandos | Piel y tejidos blandos | **IDSA 2014** (Stevens, *Clin Infect Dis* 59(2):e10) |
| 125 | Infecciones del tracto urinario | ITU | **IDSA/ESCMID 2011** (Gupta), cistitis y pielonefritis NO complicadas en la mujer |
| 126 | Infecciones osteoarticulares | Infecciones osteoarticulares | **IDSA 2015** de osteomielitis vertebral (Berbari) + **EBJIS/SANJO 2023** de artritis séptica |
| 127 | Infecciones por herpesvirus | Herpesvirus (HSV, zóster, mononucleosis) | Cohen 2013 del zóster (*NEJM*) + Luzuriaga 2010 de la mononucleosis (*NEJM*) |
| 128 | Infecciones en el neutropénico y el trasplantado | Neutropénico y trasplantado | **IDSA 2011** de neutropenia febril (Freifeld) + Tomblyn 2009 del trasplante hematopoyético |
| 129 | Vacunación en el adulto | Vacunación en el adulto | **CDC/ACIP 2025**, calendario del adulto |
| 130 | Enfermedades transmitidas por vectores | Dengue, paludismo, leishmaniasis | **WHO 2025** de arbovirosis + **WHO 2024** de malaria + **PAHO 2022** de leishmaniasis en las Américas |
| 131 | Zoonosis y bacterianas clásicas | Brucelosis, tifoidea, leptospirosis, tétanos | Qureshi 2024 (brucelosis) + Meiring 2023 (*Nat Rev Dis Primers*, tifoidea) + Lee 2026 (leptospirosis) + Sudarshan 2025 (*Lancet Infect Dis*, tétanos) |
| 132 | Parasitosis intestinales y tisulares | Amibiasis, giardiasis, helmintiasis, cisticercosis, triquinosis | Haque 2003 (*NEJM*, amibiasis) + **WHO 2017** de helmintos + **IDSA/ASTMH 2018** de neurocisticercosis (White) + Mitic 2026 (triquinosis) |
| 133 | Micosis endémicas y oportunistas | Histoplasmosis, coccidioidomicosis, criptococosis, neumocistosis | **IDSA 2016** de coccidioidomicosis (Galgiani) + **IDSA 2025** de histoplasmosis (Arnold) + la guía de oportunistas del 122 para criptococosis (cap. H) y neumocistosis (cap. Y) |
| 134 | Candidosis mucocutánea e invasiva | Candidosis | **IDSA 2016** (Pappas) |
| 135 | Citomegalovirus y toxoplasmosis | Citomegalovirus + Toxoplasmosis | Griffiths-Reeves 2021 (CMV) + Daher 2021 (toxoplasmosis) + Kalogeropoulos 2022 (ocular) + la guía de oportunistas |
| 136 | Lepra | Lepra | **WHO 2018** de diagnóstico, tratamiento y prevención |
| 137 | Shigelosis y diarreas bacterianas invasivas | Shigelosis y otras diarreas invasivas | Williams-Berkley 2018, revisión sistemática del tratamiento de la disentería |
| 138 | Micosis superficiales | Tiña, pitiriasis versicolor, onicomicosis | Leung 2020, revisión de **tinea corporis** solamente |
| 139 | Uso racional de antimicrobianos y resistencia | Uso racional y resistencia | **IDSA 2024** de gramnegativos resistentes (Tamma) + WHO 2026, plan de acción |

**CMV y toxoplasmosis van juntos en el 135 y no sueltos**, porque clínicamente son la misma
escena (reactivación en el inmunodeprimido, las dos con capítulo propio en la guía de
oportunistas) y porque sus fuentes individuales son delgadas: un módulo por cada una nacería
anémico y repetiría el cribado. Si prefieres respetar el temario a la letra, se separan y son 20
módulos; los dos ítems pueden apuntar al 135 igual, como ya hacen varios de Dermatología.

## Solape con los 106 temas construidos

Medido sobre las **1441 fichas** del repo, normalizando tildes en los dos lados y con límites de
palabra. (La primera pasada no los puso y dio 1391 menciones de "VIH" en 102 temas: `sida` casa
dentro de **nece-sida-d**, `tina ` dentro de **crea-tina**, y `hansen` dentro del signo de
Asboe-Hansen. Con límites quedan 259 en 34 temas, que ya es creíble. Cualquier barrido de este
tipo sin `\b` sobre-reporta.)

**17 de los 20 ítems no tienen ni una ficha en ningún tema.** Los tres que sí, y que hay que
enlazar en vez de repetir:

| Ya existe | Dónde | Qué debe hacer el módulo nuevo |
|---|---|---|
| Encefalitis herpética | `meningoencefalitis-infecciosa`: 1 ficha | El 127 va al herpes simple cutáneo y mucoso, al zóster y a la mononucleosis; la encefalitis se enlaza |
| Kaposi y lesión violácea en VIH | `cancer-cutaneo-no-melanoma`: 2 fichas | El 122 va al VIH como enfermedad (TARV, recuentos, oportunistas); las dos fichas dermatológicas se enlazan |
| Neutropenia febril | `alteraciones-serie-blanca` (2 fichas), `anemia-aplasica` (1), `cancer-cutaneo-no-melanoma` (el inmunodeprimido y el trasplantado) | **Este ítem está casi cubierto.** El 128 aporta el trasplantado (Tomblyn) y la profilaxis, y enlaza las cuatro fichas en vez de reescribirlas |

Lo contrario también importa, y es el argumento del bloque: **estas entidades aparecen sin parar
en los temas ya hechos y el residente no tiene a dónde ir**. VIH se menciona **259 veces en 34
temas**, la vacunación **194 veces en 32**, el herpes **101 en 22**, la endocarditis **26 en 7**.
Y donde el hueco es total: **"parasitosis" tiene CERO menciones en los 106 temas**, y las
zoonosis clásicas 3, la lepra 2, la toxoplasmosis 4 y las diarreas invasivas 7. El bloque
tropical no es que esté mal cubierto: no existe.

## Lo que FALTA, y es la parte accionable

Los 32 PDF cubren 16 de los 19 módulos de punta a punta. Lo que sigue son los huecos reales,
comprobados abriendo la carpeta y no suponiendo:

### 1. Tres módulos nacerían con el campo `criterios_dx` o el tratamiento sin fuente

- **138, micosis superficiales.** La única fuente es la revisión de Leung 2020 y cubre **tinea
  corporis**, no la pitiriasis versicolor ni la onicomicosis, que son dos de los tres nombres del
  ítem. Es el hueco más claro del bloque. Falta una guía de dermatofitosis y onicomicosis.
- **139, uso racional de antimicrobianos.** Tamma 2024 es excelente para **tratar** gramnegativos
  resistentes, y el documento de la OMS es un plan de acción de política sanitaria, no clínica.
  **No hay ninguna guía de "antimicrobial stewardship"** (la de IDSA/SHEA), que es justo la mitad
  del ítem: desescalada, duración, cultivos antes del antibiótico. Mismo patrón que el hallazgo de
  Reumatología: la fuente es del género equivocado para el campo.
- **137, diarreas invasivas.** Williams-Berkley 2018 es una revisión sistemática buena, pero
  publicada en *Paediatrics and International Child Health* y orientada a la disentería infantil.
  Para un módulo de medicina interna falta una guía de adultos (la IDSA 2017 de diarrea
  infecciosa no está en la carpeta).

### 2. Dos fuentes cubren solo una parte de su enfermedad

- **133, histoplasmosis.** La IDSA 2025 de Arnold es una **actualización parcial**: su título dice
  "Treatment of Asymptomatic Histoplasma Pulmonary Nodules and Mild or Moderate Acute Pulmonary
  Histoplasmosis". La histoplasmosis diseminada y grave, que es la que importa en el VIH, no está
  ahí; la cubre la guía de oportunistas del 122, que le dedica su capítulo O. Hay que citar cada parte a su fuente, no la
  actualización entera.
- **135, CMV.** Griffiths-Reeves 2021 es de **patogenia**, no de manejo. Sirve para
  `fisiopatologia`, no para `tx_farmacologico`. El CMV del paciente con VIH lo cubre la guía de
  oportunistas en su capítulo K, y la toxoplasmosis cerebral tiene capítulo propio; el CMV del trasplantado de órgano sólido no lo cubre nada en el repo.

### 3. Dos ítems quedan cubiertos solo en su mitad no complicada

- **125, ITU.** Gupta es explícitamente de cistitis y pielonefritis **no complicadas en la mujer**.
  La ITU complicada, la asociada a catéter y la del varón no están. El módulo puede nacer
  declarando ese límite en la cabecera, como hizo `glomerulopatias` con las figuras de la KDIGO.
- **126, osteoarticulares.** Berbari cubre la osteomielitis vertebral y EBJIS/SANJO la artritis
  séptica; la **infección de prótesis articular** no la cubre ninguna de las dos.

## Por dónde empezar

**El 121, endocarditis infecciosa**, y por cuatro razones que se refuerzan: la guía está en el
repo, es **de 2023 y completa** (95 páginas con recomendaciones graduadas, que es lo que permite
escribir `criterios_dx` citando el grado), es un tema clásico de medicina interna que la app
menciona **26 veces en 7 temas sin poder abrirlo**, y es el único módulo del bloque que puede
nacer cumpliendo la regla mínima de citas sin depender de ninguna fuente que no esté.

Después, por orden de fuente disponible y de rendimiento:

1. **122, VIH y oportunistas.** Las dos mejores fuentes de la carpeta y el mayor rendimiento
   clínico: 259 menciones en 34 temas sin destino. Es el módulo más grande del bloque y además
   alimenta al 133 y al 135, así que conviene hacerlo antes que ellos.
2. **123 (ITS), 124 (piel y blandos), 134 (candidosis)**: guías completas, de una sola fuente, sin
   huecos declarados. Son los tres más rápidos después del 121.
3. **130, 131, 132, 136**: el bloque tropical, que es donde la app está literalmente vacía, y
   donde cada enfermedad del ítem tiene su propia fuente (una por enfermedad, cuatro en el 131).
4. **125 y 126**, declarando el límite en la cabecera.
5. **128**, que es sobre todo enlazar las cuatro fichas que ya existen y añadir el trasplantado.
6. **129**, el calendario del adulto, que es un módulo de tablas más que de fichas.

**Dejar para cuando haya fuente**: el 138 (micosis superficiales), el 139 (uso racional) y el 137
(diarreas invasivas). Escribirlos hoy obligaría a citar una fuente que no cubre lo que el campo
dice, que es exactamente el defecto de `urticaria` que se corrigió el 1 de noviembre.
