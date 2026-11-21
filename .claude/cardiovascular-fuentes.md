# Cardiovascular: plan de fuentes

Bloque **II del temario, 22 ítems, 4 construidos** (`miocardiopatias`, `hipertension-arterial`,
`sindrome-aortico-agudo`, `enfermedad-arterial-periferica`). Escrito el 19 de noviembre de 2026,
cuando Walter eligió seguir los temas por este bloque. Mismo patrón que
`.claude/infectologia-fuentes.md` y `.claude/reumatologia-fuentes.md`: las fuentes antes de
escribir, leídas del PDF y no deducidas del nombre del archivo.

## Por qué este bloque y no el orden que traía T8

T8 del plan de mejoras mandaba seguir con VIH y después lupus. Medido el 19 de noviembre:

- **Ítems por módulo.** Infectología son 19 módulos para 20 ítems y Reumatología 13 para 16: algo
  más de un ítem por tema. Aquí la mayoría de los módulos cubren **dos o tres**. La puerta de
  Producto abre en 190 ítems y el temario va en 158; con este bloque se llega en la mitad de
  sesiones.
- **Demanda sin destino.** Contado sobre `content.js` con límites de palabra: "insuficiencia
  cardiaca" sale **431 veces en 56 temas**, "fibrilación auricular" 183 en 23, TEP o TVP 79 en 26,
  pericarditis o taponamiento 85 en 15. Como comparación, VIH sale 190 en 30.
- **Fuentes.** `Bibliografia/I. Sistema Cardiovascular/` trae **25 PDF**, casi todos guías de 2021
  a 2026 con recomendaciones graduadas, que es lo que deja escribir `criterios_dx` citando el grado.

## Las 25 portadas, abiertas una por una

Todas dicen lo que su nombre de archivo, con dos matices de fecha: `Baumgartner-2021` es la guía
**ESC 2020** de cardiopatías congénitas del adulto (publicada en el número de 2021) y
`Joglar-2024` es la **ACC/AHA/ACCP/HRS 2023** de fibrilación auricular (publicada en
*Circulation* en 2024). Hay que citarlas con el año del título.

### Tres PDF que no se pueden usar sin que Walter lo decida

Igual que las NCCN (ver `.claude/atribucion-citas.md`), tres archivos llevan una cláusula que
excluye expresamente el uso con inteligencia artificial:

| Archivo | Cláusula | Qué módulo afecta |
|---|---|---|
| `Contemporary_Management_of_Acute_Heart_Failure_JACC_2026_Memodi.pdf` | "All rights reserved, including those for text and data mining, AI training, and similar technologies". Además, la portada lleva la marca de un canal de Telegram que redistribuye artículos | insuficiencia cardiaca. **Se deja fuera**: el módulo se escribe con la ESC 2021 y la AHA 2022 |
| `Baumgartner-et-al-2021-ESC-ACHD-guideline.pdf` | "No part of this publication may be ... used for text and data mining, or used for training artificial intelligence" | cardiopatías congénitas del adulto, que se queda sin fuente |
| `Mazzolai-et-al-2024-ESC-PAD-aortic-guideline.pdf` | la misma cláusula de Oxford University Press | ninguno nuevo; **pero `enfermedad-arterial-periferica`, ya publicado, la cita** |

Las demás guías ESC (2021 de IC, 2023 de SCA, 2024 de SCC, 2024 de FA, 2025 de miocarditis y
pericarditis) dicen "for personal and educational use only" sin mencionar la minería ni la IA, y las
AHA/ACC dicen "Multiple copies, modification, alteration ... are not permitted". En la AHA/ACC 2026
de TEP la cláusula de minería aparece solo al pie de **una figura adaptada** de *JAMA*, no en la guía.

**Decisión de Walter pendiente**: si la cláusula de OUP pesa como la de la NCCN, el tema
`enfermedad-arterial-periferica` tiene que revisarse.

### Ediciones que faltan

Comprobado con `find Bibliografia -iname`:

- **Falta la actualización ESC 2023 de insuficiencia cardiaca** (McDonagh, *Eur Heart J*
  2023;44:3627). Es la que sube los iSGLT2 a clase I en la FEVI levemente reducida y en la
  preservada. Mientras no esté, ese punto se cita a la **AHA/ACC/HFSA 2022**, con su grado (2a), y
  el módulo lo dice.
- **La de valvulopatías es la ESC/EACTS 2021**, y existe una ESC/EACTS 2025. Antes de escribir el
  módulo de valvulopatías hay que conseguir la 2025 o declarar el límite.
- **No hay guía de taquicardia supraventricular** (la ESC 2019 no está). Las taquicardias por
  reentrada nodal y por vía accesoria se quedan sin fuente propia; las ventriculares las cubre la
  ESC 2022.

## Los módulos propuestos, para los 18 ítems que faltan

| Módulo | Ítems del temario | Fuente principal |
|---|---|---|
| `insuficiencia-cardiaca` | IC aguda descompensada y EAP; IC crónica con FEVI reducida y preservada; dispositivos y terapias avanzadas (**3**) | ESC 2021 (McDonagh) + AHA/ACC/HFSA 2022 (Heidenreich) + Definición Universal 2026 (Walsh) + ISHLT 2023 de asistencia circulatoria (Saeed) |
| `cardiopatia-isquemica` | angina estable y pruebas de isquemia; SCA y reperfusión; choque cardiogénico (**3**) | ESC 2024 de SCC (Vrints) + ESC 2023 de SCA (Byrne) + ACC/AHA 2025 de SCA (Rao) + AHA 2017 de choque cardiogénico (van Diepen) |
| `fibrilacion-auricular` | FA y flutter, anticoagulación (**1**) | ESC 2024 (Van Gelder) + ACC/AHA 2023 (Joglar) |
| `arritmias` | taqui y bradiarritmias sintomáticas; marcapasos y desfibriladores (**2**) | ESC 2021 de estimulación y resincronización (Glikson) + ESC 2022 de arritmias ventriculares (Zeppenfeld). Sin fuente para la TSV |
| `enfermedad-tromboembolica-venosa` | TVP y TEP; tromboflebitis superficial (**2**) | AHA/ACC 2026 de TEP (Creager) + CHEST 2021 (Stevens), que es la que trata la trombosis venosa superficial |
| `pericarditis-miocarditis` | pericarditis y taponamiento; miocarditis (**2**) | ESC 2025 de miocarditis y pericarditis, una sola guía para los dos |
| `valvulopatias` | valvulopatías nativas y protésicas; cardiopatía reumática (**2**) | ESC/EACTS 2021 (falta la 2025) + OMS 2024 de fiebre reumática |
| cardiopatías congénitas del adulto | **1** | ninguna utilizable (ver la tabla de licencias) |
| cor pulmonale | **1** | Rubin 2018 (tres páginas de revisión histórica); el contenido clínico ya vive en `hipertension-pulmonar` (grupo 3), que no tiene ficha con ese nombre |
| HTA secundaria | **1** | **no se enlaza** a `hipertension-arterial`: su propia ficha dice "Este tema no la desarrolla a fondo (es objeto de un tema propio)". Pide módulo, y comparte terreno con el hiperaldosteronismo del bloque VII |

Los siete primeros módulos cubren **15 de los 18 ítems** con fuentes que ya están en el repo.

## Solape con lo construido: enlazar, no repetir

| Ya existe | Dónde | Qué hace el módulo nuevo |
|---|---|---|
| IC avanzada refractaria | `miocardiopatias` | `insuficiencia-cardiaca` la enlaza; su ficha de dispositivos va a las indicaciones de resincronización, DAI y asistencia |
| Arritmias ventriculares malignas; FA y tromboembolismo | `miocardiopatias` | se escriben desde la miocardiopatía; los módulos de arritmias van a la enfermedad en general |
| Choque cardiogénico | `estado-de-choque` | `cardiopatia-isquemica` cubre el del infarto (van Diepen) y enlaza la ficha general |
| Ritmos de paro | `soporte-vital-avanzado` | `arritmias` no repite la reanimación |
| Portador de marcapasos o desfibrilador; paciente con stent | `valoracion-preoperatoria` | se enlazan desde `arritmias` y `cardiopatia-isquemica` |
| Trombofilias | `coagulacion-trombofilias` | `enfermedad-tromboembolica-venosa` enlaza el estudio de trombofilia |

## Orden

1. **`insuficiencia-cardiaca`**: la mayor demanda del repo (431 menciones), tres ítems y cuatro
   fuentes completas.
2. **`cardiopatia-isquemica`**: tres ítems y las cuatro guías más nuevas de la carpeta.
3. **`fibrilacion-auricular`** y **`enfermedad-tromboembolica-venosa`**: dos guías por tema, y
   juntos cierran la anticoagulación.
4. **`pericarditis-miocarditis`**, de una sola guía de 2025.
5. **`arritmias`**, declarando que la TSV no tiene fuente.
6. **`valvulopatias`**, cuando esté la ESC/EACTS 2025.

## Estado

- **19 nov 2026**: plan escrito y **`insuficiencia-cardiaca` construido**: 12 fichas (8 formas de
  la enfermedad o de su tratamiento y 4 complicaciones), 40 preguntas (36 sueltas y 4 cascadas),
  32 fichas de memoria, 6 calculadoras y 2 figuras de tabla, a **cero huecos** en la regla mínima
  de citas (`ATRIB_TOTAL_MINIMO` de 2054 a 2090). Cubre los tres ítems de IC del temario, que pasa
  de 158 a 161 de 319. Suite 3029/3029, caché `residentemed-9ffe4964a8`. **Sin commit**.
  Lo que conviene saber antes del siguiente módulo:
  - la bibliografía quedó en **tres** fuentes (ESC 2021, AHA 2022 y la Definición Universal
    2026); la ISHLT 2023 está en la carpeta pero no se citó, porque lo que el tema dice de la
    asistencia ventricular sale entero de la ESC;
  - el motor **no pinta citas en `factores_riesgo`**: una ficha con 17 campos citados enseña 16
    superíndices, y está bien;
  - la calculadora de péptidos se cruzó contra el caso 3 del quiz y por eso, en el obeso, un valor
    bajo ya no se titula "hace improbable": era la misma cifra enseñando dos cosas distintas.
- **Siguiente**: `cardiopatia-isquemica`, con la ESC 2024 de SCC, la ESC 2023 de SCA, la ACC/AHA
  2025 de SCA y la AHA 2017 de choque cardiogénico.
