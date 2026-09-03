// topics/neoplasias-snc-hipertension-intracraneal/content.js: Neoplasias del Sistema Nervioso
// Central e Hipertensión Intracraneal.
// Segundo de 11 temas independientes que construyen el bloque XII (Neurología) del temario
// (el primero, Traumatismo Craneoencefálico, ya construido).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras/calculadoras): 4 fichas de entidad
// (meningioma, glioma, metástasis cerebrales, hipertensión intracraneal idiopática/pseudotumor
// cerebri) + 5 fichas de complicaciones (edema peritumoral, crisis convulsivas, hidrocefalia
// obstructiva, papiledema/pérdida visual, herniación por tumor), por decisión explícita del
// usuario (incluir herniación por tumor pese a que la herniación aguda ya se desarrolló a fondo
// en Traumatismo Craneoencefálico, aquí con enfoque específico de tumor de fosa posterior y
// contraindicación de punción lumbar). Calculadora: Karnofsky/ECOG (estado funcional), no un
// score de "enfermedad" per se pero genuinamente útil y reutilizable en otros temas de
// oncología. 1 figura SVG (edema vasogénico vs. citotóxico) + 1 imagen real de papiledema
// (Wikimedia Commons, CC BY 2.0, ya usada como referencia en Wikipedia en inglés/ruso/catalán).

export const meta = {
  id: 'neoplasias-snc-hipertension-intracraneal',
  titulo: 'Neoplasias del SNC e Hipertensión Intracraneal',
  subtitulo: 'Módulo 32 · Medicina Interna',
  accent: '#5c4a2e',
  accentDim: '#9a8560'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const edemaHtml = `
<div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;max-width:520px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="flex:1;min-width:180px;text-align:center;">
    <svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" style="width:130px;height:110px;">
      <circle cx="70" cy="60" r="30" fill="#8a6a1f" opacity="0.75"/>
      <path d="M 45 35 Q 20 45 25 70 Q 20 95 45 90 M 95 35 Q 120 45 115 70 Q 120 95 95 90" fill="none" stroke="#3d5a73" stroke-width="6" opacity="0.6"/>
    </svg>
    <div style="font-weight:700;color:#3d5a73;">Vasogénico (peritumoral)</div>
    <div style="color:var(--ink-dim);">La barrera hematoencefálica del tumor está rota: el líquido se filtra hacia la sustancia BLANCA circundante. Responde bien a corticoides.</div>
  </div>
  <div style="flex:1;min-width:180px;text-align:center;">
    <svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" style="width:130px;height:110px;">
      <circle cx="70" cy="60" r="45" fill="#8c3a34" opacity="0.55"/>
      <circle cx="70" cy="60" r="45" fill="none" stroke="#8c3a34" stroke-width="2"/>
    </svg>
    <div style="font-weight:700;color:#8c3a34;">Citotóxico (isquémico)</div>
    <div style="color:var(--ink-dim);">La barrera hematoencefálica está intacta: falla la bomba Na+/K+ neuronal y el agua entra a la célula. NO responde a corticoides.</div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las neoplasias del sistema nervioso central y la hipertensión intracraneal comparten un desenlace común (el aumento de la presión dentro de un compartimento rígido de volumen fijo, ver la doctrina de Monro-Kellie en el tema de Traumatismo Craneoencefálico) pero con mecanismos de fondo muy distintos: en las neoplasias, un proceso expansivo estructural desplaza el tejido cerebral; en la hipertensión intracraneal idiopática, la presión se eleva sin ninguna lesión estructural identificable.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Los 4 patrones principales.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Meningioma</strong>: el tumor primario del SNC más frecuente en general, habitualmente benigno, originado en las meninges.</li>
    <li><strong>Glioma (astrocitoma difuso y glioblastoma)</strong>: el tumor maligno primario más frecuente, originado en las células gliales de soporte.</li>
    <li><strong>Metástasis cerebrales</strong>: el tumor cerebral más frecuente de todos en conjunto, más frecuente que cualquier tumor primario del SNC, reflejando la alta incidencia de cáncer sistémico con diseminación hematógena al cerebro.</li>
    <li><strong>Hipertensión intracraneal idiopática (pseudotumor cerebri)</strong>: presión intracraneal elevada sin lesión estructural ni hidrocefalia, clásicamente en mujeres jóvenes con obesidad.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología comparativa.</strong> Las metástasis son, en conjunto, más frecuentes que todos los tumores primarios del SNC combinados (el pulmón, la mama, y el melanoma son las fuentes primarias más frecuentes); entre los tumores primarios, el meningioma es el más frecuente en general pero el glioblastoma es el más letal.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de complicaciones.</strong> El manejo de cualquier proceso expansivo intracraneal comparte principios comunes (control del edema peritumoral, prevención y tratamiento de crisis convulsivas, vigilancia de hidrocefalia obstructiva) mientras se define el tratamiento oncológico específico dirigido a la causa; el desarrollo completo de cada entidad y sus complicaciones se detalla en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Ostrom QT, Price M, Neff C, et al. CBTRUS Statistical Report: Primary Brain and Other Central Nervous System Tumors Diagnosed in the United States in 2016-2020. Neuro Oncol. 2023;25(Supplement_4):iv1-iv99.',
  'Wen PY, Weller M, Lee EQ, et al. Glioblastoma in adults: a Society for Neuro-Oncology (SNO) and European Society of Neuro-Oncology (EANO) consensus review. Neuro Oncol. 2020;22(8):1073-1113.',
  'Goldbrunner R, Stavrinou P, Jenkinson MD, et al. EANO guideline on the diagnosis and management of meningiomas. Neuro Oncol. 2021;23(11):1821-1834.',
  'Vogelbaum MA, Brown PD, Messersmith H, et al. Treatment for Brain Metastases: ASCO-SNO-ASTRO Guideline. J Clin Oncol. 2022;40(5):492-516.',
  'Mokri B. The Monro-Kellie hypothesis: applications in CSF volume depletion. Neurology. 2001;56(12):1746-1748.',
  'Friedman DI, Liu GT, Digre KB. Revised diagnostic criteria for the pseudotumor cerebri syndrome in adults and children. Neurology. 2013;81(13):1159-1165.',
  'Wall M. Update on Idiopathic Intracranial Hypertension. Neurol Clin. 2017;35(1):45-57.',
  'Ryken TC, McDermott M, Robinson PD, et al. The role of steroids in the management of brain metastases: a systematic review and evidence-based clinical practice guideline. J Neurooncol. 2010;96(1):103-114.',
  'Glantz MJ, Cole BF, Forsyth PA, et al. Practice parameter: anticonvulsant prophylaxis in patients with newly diagnosed brain tumors. Neurology. 2000;54(10):1886-1893.',
  'Rogers L, Barani I, Chamberlain M, et al. Meningiomas: knowledge base, treatment outcomes, and uncertainties. J Neurosurg. 2015;122(1):4-23.',
  'Louis DN, Perry A, Wesseling P, et al. The 2021 WHO Classification of Tumors of the Central Nervous System: a summary. Neuro Oncol. 2021;23(8):1231-1251.',
  'Karnofsky DA, Burchenal JH. The Clinical Evaluation of Chemotherapeutic Agents in Cancer. In: Evaluation of Chemotherapeutic Agents. Columbia Univ Press; 1949.',
  'Oken MM, Creech RH, Tormey DC, et al. Toxicity and response criteria of the Eastern Cooperative Oncology Group. Am J Clin Oncol. 1982;5(6):649-655.',
  'Freilich RJ, Krol G, DeAngelis LM. Neuroimaging and treatment implications of patients with multiple epidural spinal metastases. Cancer. 1995;76(3):521-526.',
  'Julayanont P, Ruthirago D, DeToledo JC. Idiopathic intracranial hypertension: ongoing clinical challenges and future prospects. J Pain Res. 2016;9:87-99.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hipertensión intracraneal crónica/compensada',
      tituloB: 'Hipertensión intracraneal aguda/descompensada',
      compensada: 'Cefalea progresiva de predominio matutino, papiledema en el examen de fondo de ojo, y con frecuencia meses de evolución antes del diagnóstico; el estado de alerta se mantiene preservado.',
      descompensada: 'Deterioro agudo del estado de alerta, signos de herniación inminente (midriasis unilateral, tríada de Cushing), o crisis convulsiva de novo; requiere manejo urgente (ver el tema de Traumatismo Craneoencefálico para el desarrollo completo de la doctrina de Monro-Kellie y los síndromes de herniación).'
    },
    laboratorio: [
      { prueba: 'Panel metabólico básico y pruebas de función hepática', utilidad: 'Orienta hacia causas secundarias de hipertensión intracraneal idiopática (fármacos, endocrinopatías) y establece la línea basal antes de iniciar acetazolamida.' }
    ],
    no_invasivos: [
      { metodo: 'Campimetría (campos visuales)', interpretacion: 'Documenta y monitoriza la pérdida de campo visual periférico, la secuela más temida de la hipertensión intracraneal crónica no tratada.', cutoff: 'Cualquier defecto progresivo obliga a escalar el tratamiento' },
      { metodo: 'Karnofsky Performance Status / ECOG (calculadora)', interpretacion: 'Cuantifica el estado funcional del paciente oncológico, guiando la intensidad del tratamiento (cirugía, radioterapia, quimioterapia) que puede tolerar.', cutoff: 'Karnofsky ≥70 (ECOG 0-2) generalmente tolera tratamiento activo' }
    ],
    imagen: [
      { modalidad: 'Resonancia magnética con contraste', hallazgos: 'Estudio de elección para caracterizar cualquier tumor del SNC (realce, edema perilesional, efecto de masa, número de lesiones); la ausencia de lesión estructural en el paciente con hipertensión intracraneal orienta hacia la forma idiopática.' },
      { modalidad: 'Venografía por resonancia magnética', hallazgos: 'Descarta trombosis de senos venosos cerebrales como causa secundaria de hipertensión intracraneal antes de establecer el diagnóstico de la forma idiopática.' },
      { modalidad: 'Punción lumbar con medición de presión de apertura', hallazgos: 'Confirma la presión elevada en la hipertensión intracraneal idiopática (con estudio citoquímico normal); CONTRAINDICADA si hay sospecha de lesión con efecto de masa no descartada por imagen previa, particularmente en fosa posterior (riesgo de herniación, ver esa complicación).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema combina el tipo de lesión (tumor primario, metástasis, o ausencia de lesión estructural en la forma idiopática) con la velocidad de instauración de la hipertensión intracraneal resultante (crónica/compensada vs. aguda/descompensada), que determina la urgencia del manejo.',
    escalas: [
      { nombre: 'Karnofsky Performance Status / ECOG', componentes: 'Evaluación funcional del paciente oncológico. Calculadora disponible más abajo.', formula: 'Karnofsky 0-100 (intervalos de 10); ECOG 0-5', interpretacion: 'Guía la intensidad del tratamiento oncológico que el paciente puede tolerar razonablemente.' },
      { nombre: 'Criterios diagnósticos revisados de hipertensión intracraneal idiopática', componentes: 'Papiledema, examen neurológico normal salvo paresia del VI par, presión de apertura elevada con LCR normal, neuroimagen sin lesión estructural ni hidrocefalia ni trombosis venosa.', formula: 'Todos los criterios deben cumplirse', interpretacion: 'Diagnóstico de exclusión: requiere descartar activamente toda causa secundaria antes de establecerlo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Meningioma',
      color: '#3f6b52',
      definicion: 'El tumor primario del sistema nervioso central más frecuente en general, originado en las células meningoteliales de las meninges (con mayor frecuencia la aracnoides); habitualmente benigno (grado 1 de la OMS) y de crecimiento lento, aunque una minoría tiene comportamiento atípico o maligno.',
      fisiopatologia: 'El meningioma surge de las células meningoteliales de la aracnoides, con mayor frecuencia cerca de los senos venosos durales, la convexidad cerebral, o la base del cráneo; al ser extraaxial (fuera del tejido cerebral propiamente dicho), comprime el parénquima adyacente por efecto de masa progresivo en lugar de infiltrarlo, lo que explica por qué muchos permanecen asintomáticos durante años y con frecuencia se descubren incidentalmente en estudios de imagen solicitados por otra razón.',
      epidemiologia: 'El tumor primario del SNC más frecuente en general; más frecuente en mujeres (posible relación con receptores hormonales, particularmente de progesterona, presentes en muchos meningiomas) y en la edad media/avanzada.',
      factores_riesgo: ['Sexo femenino', 'Radiación craneal previa', 'Neurofibromatosis tipo 2 (asociada a meningiomas múltiples)', 'Edad media a avanzada'],
      clinica: 'Con frecuencia asintomático y hallado incidentalmente; cuando es sintomático, los síntomas dependen de la localización (cefalea, crisis convulsivas, déficit focal según la región cortical comprimida, alteración visual si compromete la vía óptica o la órbita).',
      criterios_dx: 'Resonancia magnética con contraste mostrando una masa extraaxial de base dural amplia, con realce homogéneo intenso, y con frecuencia un "signo de la cola dural" (realce lineal de la duramadre adyacente); la confirmación histológica definitiva requiere biopsia o resección.',
      laboratorio: 'No específico para el diagnóstico.',
      imagen: 'Resonancia magnética con contraste de elección: masa extraaxial de base dural amplia, realce homogéneo, signo de la cola dural; la tomografía puede mostrar hiperostosis del hueso adyacente en tumores de larga evolución.',
      complementarios: 'Angiografía o angio-RM preoperatoria en tumores muy vascularizados o de gran tamaño, para planificar la resección y considerar embolización prequirúrgica.',
      dx_diferencial: 'Metástasis dural (puede simular un meningioma en imagen, particularmente si hay antecedente oncológico), otros tumores extraaxiales infrecuentes (schwannoma).',
      tx_medico: 'Observación con imagen seriada en el meningioma pequeño, asintomático, y de crecimiento lento (particularmente en el adulto mayor o con comorbilidad significativa); resección quirúrgica en el sintomático, de gran tamaño, o con crecimiento documentado.',
      tx_farmacologico: 'No hay tratamiento farmacológico sistémico establecido de primera línea; corticoides para el edema peritumoral sintomático (ver esa complicación) mientras se define el manejo definitivo.',
      tx_intervencionista: 'Resección quirúrgica (el tratamiento definitivo cuando está indicado); radiocirugía estereotáctica o radioterapia fraccionada en tumores no resecables por completo, recurrentes, o en localizaciones de alto riesgo quirúrgico (base de cráneo).',
      criterios_uci: 'Deterioro neurológico agudo por edema peritumoral significativo o hidrocefalia obstructiva aguda (ver esas complicaciones).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica perioperatoria estándar tras la resección.',
      seguimiento_ambulatorio: 'Resonancia magnética seriada (inicialmente más frecuente, espaciándose con el tiempo) tanto en el manejo expectante como después de la resección, dado el riesgo de recurrencia incluso en tumores histológicamente benignos.',
      pronostico: 'Excelente en la mayoría de los meningiomas grado 1 con resección completa; los grados atípico (2) y maligno (3) tienen mayor tasa de recurrencia y requieren radioterapia adyuvante con más frecuencia.',
      algoritmo: ['Masa extraaxial de base dural con realce homogéneo y signo de la cola dural en RM → meningioma', 'Pequeño, asintomático, adulto mayor → observación con imagen seriada', 'Sintomático o de gran tamaño → resección quirúrgica', 'No resecable completamente o de alto riesgo quirúrgico → radiocirugía/radioterapia', 'Vigilancia por imagen a largo plazo dado el riesgo de recurrencia']
    },
    {
      nombre: 'Glioma (astrocitoma difuso y glioblastoma)',
      color: '#8c3a34',
      definicion: 'El tumor maligno primario del sistema nervioso central más frecuente, originado en las células gliales de soporte (astrocitos con mayor frecuencia); espectro desde el astrocitoma difuso de bajo grado hasta el glioblastoma (grado 4 de la OMS), la forma más agresiva y de peor pronóstico.',
      fisiopatologia: 'A diferencia del meningioma extraaxial, el glioma es intraaxial (infiltra el propio tejido cerebral) y carece de un margen bien definido, lo que explica tanto la dificultad de lograr una resección completa como la inevitabilidad de la recurrencia local incluso tras un tratamiento agresivo; el glioblastoma en particular se caracteriza por proliferación vascular anómala (angiogénesis desregulada) y necrosis central, hallazgos histológicos que lo distinguen de los astrocitomas de menor grado y explican su comportamiento clínico más agresivo.',
      epidemiologia: 'El glioblastoma es el tumor maligno primario del SNC más frecuente en adultos y uno de los tumores sólidos de peor pronóstico en oncología en general; el astrocitoma difuso de menor grado ocurre característicamente en adultos más jóvenes y tiene un curso más indolente, aunque con frecuencia progresa a un grado mayor con el tiempo.',
      factores_riesgo: ['Radiación craneal previa', 'Síndromes genéticos infrecuentes (síndrome de Li-Fraumeni, neurofibromatosis tipo 1)', 'Edad avanzada (mayor riesgo de glioblastoma específicamente)'],
      clinica: 'Cefalea progresiva, crisis convulsivas de novo (con frecuencia la manifestación inicial), déficit neurológico focal progresivo según la localización, y en el glioblastoma con frecuencia deterioro cognitivo y funcional relativamente rápido en semanas.',
      criterios_dx: 'Resonancia magnética con contraste mostrando una masa intraaxial infiltrante, con realce anular irregular y necrosis central característica del glioblastoma (los astrocitomas de menor grado con frecuencia realzan poco o nada); la clasificación definitiva de la OMS 2021 combina la histología con marcadores moleculares (estado de IDH, codeleción 1p/19q, metilación de MGMT), que también orientan el pronóstico y la respuesta a quimioterapia.',
      laboratorio: 'Marcadores moleculares tumorales (IDH, MGMT, codeleción 1p/19q) en el tejido resecado, esenciales para la clasificación OMS 2021 y para orientar el tratamiento y el pronóstico.',
      imagen: 'Resonancia magnética con contraste de elección; espectroscopia y perfusión por RM útiles para diferenciar grado tumoral y distinguir recurrencia tumoral de cambios por radioterapia (pseudoprogresión) en el seguimiento.',
      complementarios: 'Biopsia estereotáctica cuando la resección completa no es segura por la localización, para obtener el diagnóstico histomolecular que guía el tratamiento.',
      dx_diferencial: 'Metástasis cerebral única (puede simular un glioma de alto grado en imagen, particularmente si no hay antecedente oncológico conocido, ver esa tarjeta), absceso cerebral (el realce anular puede simular un glioblastoma, la difusión restringida central en la RM ayuda a distinguirlos).',
      tx_medico: 'Resección quirúrgica máxima segura como primer paso siempre que sea factible, seguida de radioterapia y quimioterapia adyuvante (temozolomida) según el grado y los marcadores moleculares; en el astrocitoma de bajo grado, la vigilancia activa se considera en casos muy seleccionados de bajo riesgo.',
      tx_farmacologico: 'Temozolomida concurrente con radioterapia y luego de mantenimiento en el glioblastoma (esquema estándar Stupp); la respuesta a temozolomida es mayor cuando el promotor de MGMT está metilado (silenciando la reparación del daño inducido por el fármaco); corticoides para el edema peritumoral sintomático (ver esa complicación).',
      tx_intervencionista: 'Resección quirúrgica máxima segura como estándar inicial; en casos seleccionados, dispositivos de campos de tratamiento de tumores (TTFields) como terapia adyuvante en el glioblastoma.',
      criterios_uci: 'Deterioro neurológico agudo por edema peritumoral significativo, crisis convulsiva refractaria, o hidrocefalia obstructiva aguda.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica perioperatoria estándar; inicio oportuno de radioterapia/quimioterapia adyuvante tras la recuperación quirúrgica.',
      seguimiento_ambulatorio: 'Resonancia magnética seriada para vigilar recurrencia, con atención a distinguir pseudoprogresión post-radioterapia de recurrencia tumoral verdadera mediante técnicas avanzadas de imagen o, en casos ambiguos, reevaluación clínica y por imagen a corto plazo.',
      pronostico: 'El glioblastoma tiene un pronóstico reservado pese al tratamiento máximo (supervivencia mediana de aproximadamente 1 a 2 años en la mayoría de las series); el astrocitoma difuso de menor grado tiene un curso más prolongado pero con frecuencia progresa a un grado mayor con el tiempo.',
      algoritmo: ['Masa intraaxial infiltrante con realce anular y necrosis central en RM → sospechar glioblastoma', 'Resección quirúrgica máxima segura como primer paso siempre que sea factible', 'Marcadores moleculares (IDH, MGMT, 1p/19q) para clasificación OMS 2021 y pronóstico', 'Esquema de Stupp (radioterapia + temozolomida concurrente y luego de mantenimiento) en el glioblastoma', 'Vigilar pseudoprogresión post-radioterapia al interpretar la imagen de seguimiento']
    },
    {
      nombre: 'Metástasis cerebrales',
      color: '#3d5a73',
      definicion: 'El tumor cerebral más frecuente de todos en conjunto, más frecuente que cualquier tumor primario del SNC, por diseminación hematógena de un cáncer sistémico; el pulmón, la mama, y el melanoma son las fuentes primarias más frecuentes.',
      fisiopatologia: 'Las células tumorales circulantes de un cáncer sistémico alcanzan la microvasculatura cerebral (con predilección por la unión de la sustancia gris-blanca, donde el calibre vascular se reduce abruptamente, favoreciendo el atrapamiento de émbolos tumorales) y proliferan localmente, formando una o múltiples lesiones que producen efecto de masa y con frecuencia edema vasogénico peritumoral desproporcionadamente extenso en relación con el tamaño de la lesión misma (ver esa complicación).',
      epidemiologia: 'Considerablemente más frecuentes que todos los tumores primarios del SNC combinados, reflejando la alta incidencia global de cáncer sistémico; el pulmón es la fuente primaria más frecuente en la mayoría de las series, seguido de mama y melanoma (este último con una probabilidad particularmente alta de diseminación cerebral en relación con su incidencia sistémica).',
      factores_riesgo: ['Cáncer de pulmón, mama, o melanoma conocido (las 3 fuentes más frecuentes)', 'Cáncer sistémico avanzado o metastásico a otros órganos', 'Ciertos subtipos moleculares de mayor tropismo cerebral (ej. cáncer de mama HER2-positivo o triple negativo, melanoma con mutación BRAF)'],
      clinica: 'Cefalea, crisis convulsivas de novo, déficit neurológico focal progresivo, y con frecuencia deterioro cognitivo si hay múltiples lesiones o edema extenso; puede ser la manifestación inicial que lleva al diagnóstico del cáncer sistémico subyacente aún no conocido.',
      criterios_dx: 'Resonancia magnética con contraste mostrando una o múltiples lesiones bien circunscritas en la unión sustancia gris-blanca, con realce en anillo y edema vasogénico desproporcionado; la confirmación histológica se obtiene por biopsia si el primario no es conocido o el diagnóstico es incierto.',
      laboratorio: 'Estudio dirigido a identificar el primario si no es conocido (marcadores tumorales orientadores, aunque de utilidad limitada como cribado aislado).',
      imagen: 'Resonancia magnética con contraste de elección, dado que detecta lesiones más pequeñas y múltiples que la tomografía; tomografía de tórax/abdomen/pelvis para buscar el primario si no es conocido.',
      complementarios: 'Biopsia de la lesión cerebral o de un sitio metastásico más accesible si el primario no es conocido y se requiere confirmación histológica para dirigir el tratamiento sistémico.',
      dx_diferencial: 'Glioma de alto grado (particularmente si es una lesión única sin antecedente oncológico conocido, ver esa tarjeta), absceso cerebral, linfoma primario del SNC.',
      tx_medico: 'El manejo combina control local (cirugía o radioterapia dirigida a la lesión cerebral) con el tratamiento sistémico del cáncer primario; la elección entre cirugía, radiocirugía estereotáctica, o radioterapia holocraneal depende del número de lesiones, el tamaño, la localización, y el estado funcional del paciente (ver la calculadora de Karnofsky/ECOG).',
      tx_farmacologico: 'Corticoides para el edema peritumoral sintomático (ver esa complicación); terapias sistémicas dirigidas según el primario (algunas con penetración intracraneal relevante, particularmente en melanoma con mutación BRAF y cáncer de pulmón/mama con alteraciones moleculares específicas tratables).',
      tx_intervencionista: 'Resección quirúrgica en la lesión única, sintomática, y accesible, particularmente con efecto de masa significativo; radiocirugía estereotáctica preferida sobre la radioterapia holocraneal en el paciente con pocas lesiones y buen estado funcional, dado su menor impacto cognitivo a largo plazo; radioterapia holocraneal reservada para la enfermedad más extensa.',
      criterios_uci: 'Deterioro neurológico agudo por edema peritumoral significativo, crisis convulsiva refractaria, o hidrocefalia obstructiva aguda.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica perioperatoria si se realiza resección; coordinación estrecha con oncología para el tratamiento sistémico concurrente.',
      seguimiento_ambulatorio: 'Resonancia magnética cerebral seriada para vigilar nuevas lesiones o recurrencia, coordinada con el seguimiento oncológico sistémico del primario.',
      pronostico: 'Variable, dependiendo sustancialmente del número de lesiones, el estado funcional, el control del cáncer sistémico primario, y la disponibilidad de terapias dirigidas con penetración intracraneal; el pronóstico ha mejorado considerablemente en años recientes con el desarrollo de terapias sistémicas más efectivas.',
      algoritmo: ['Lesión(es) en la unión sustancia gris-blanca con realce en anillo y edema desproporcionado en RM → sospechar metástasis', 'Buscar el primario (pulmón, mama, melanoma más frecuentes) si no es conocido', 'Decidir control local (cirugía, radiocirugía, o radioterapia holocraneal) según número/tamaño/localización y estado funcional', 'Coordinar con tratamiento sistémico oncológico del primario', 'Corticoides para el edema peritumoral sintomático mientras se define el tratamiento definitivo']
    },
    {
      nombre: 'Hipertensión intracraneal idiopática (pseudotumor cerebri)',
      color: '#8a6a1f',
      definicion: 'Síndrome de presión intracraneal elevada SIN lesión estructural, hidrocefalia, ni trombosis venosa identificable, clásicamente en mujeres jóvenes con obesidad; un diagnóstico de exclusión que requiere descartar activamente toda causa secundaria antes de establecerse.',
      fisiopatologia: 'El mecanismo exacto no está completamente esclarecido, pero se propone una alteración en la reabsorción del líquido cefalorraquídeo a nivel de las granulaciones aracnoideas, posiblemente relacionada con alteraciones metabólicas/hormonales asociadas a la obesidad (incluyendo el papel del tejido adiposo como órgano endocrino activo); el resultado es una presión intracraneal crónicamente elevada sin ningún proceso expansivo que la explique, que se transmite a lo largo de las vainas del nervio óptico produciendo papiledema y, si no se trata, daño progresivo e irreversible de las fibras del nervio óptico.',
      epidemiologia: 'Ocurre predominantemente en mujeres en edad reproductiva con obesidad; la incidencia ha aumentado en paralelo con el aumento de la prevalencia de obesidad en la población general.',
      factores_riesgo: ['Sexo femenino en edad reproductiva', 'Obesidad, particularmente con ganancia de peso reciente', 'Uso de ciertos fármacos (tetraciclinas, vitamina A y retinoides en dosis altas, algunos anticonceptivos, hormona de crecimiento)', 'Apnea obstructiva del sueño concomitante'],
      clinica: 'Cefalea progresiva (con frecuencia el síntoma predominante), oscurecimientos visuales transitorios (episodios breves de pérdida visual con los cambios posturales), acúfeno pulsátil, diplopía por paresia del VI par (falso signo localizador, no indica lesión estructural del propio nervio), y papiledema en el examen de fondo de ojo (ver esa complicación).',
      criterios_dx: 'Criterios diagnósticos revisados: papiledema, examen neurológico normal salvo paresia del VI par, presión de apertura elevada en la punción lumbar con estudio citoquímico de LCR normal, y neuroimagen sin lesión estructural, hidrocefalia, ni trombosis de senos venosos (ver Clasificación).',
      laboratorio: 'Estudio citoquímico de LCR normal (esencial para descartar un proceso infeccioso o inflamatorio alternativo).',
      imagen: 'Resonancia magnética cerebral (sin lesión estructural ni hidrocefalia) y venografía por resonancia magnética (descarta trombosis de senos venosos) ANTES de la punción lumbar, dado que ambas causas secundarias deben excluirse primero.',
      complementarios: 'Campimetría basal y seriada (ver Diagnóstico) para documentar y vigilar la función visual, el parámetro más importante para guiar la intensidad del tratamiento.',
      dx_diferencial: 'Trombosis de senos venosos cerebrales (descartada por venografía antes de establecer el diagnóstico idiopático), tumor de fosa posterior u otra lesión con efecto de masa (descartada por RM), meningitis crónica (descartada por el estudio citoquímico normal de LCR).',
      tx_medico: 'Pérdida de peso (incluso una reducción moderada mejora sustancialmente el cuadro) como intervención central a largo plazo; acetazolamida como tratamiento farmacológico de primera línea para reducir la producción de LCR; punciones lumbares seriadas consideradas en casos seleccionados como medida temporal.',
      tx_farmacologico: 'Acetazolamida (inhibidor de la anhidrasa carbónica, reduce la producción de LCR) como primera línea; topiramato como alternativa con el beneficio adicional de facilitar la pérdida de peso.',
      tx_intervencionista: 'Fenestración de la vaina del nervio óptico o derivación de LCR (ventriculoperitoneal o lumboperitoneal) en el paciente con pérdida visual progresiva pese al tratamiento médico máximo, o con cefalea incapacitante refractaria.',
      criterios_uci: 'No aplica de forma característica, salvo pérdida visual fulminante que requiera intervención quirúrgica urgente.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica (manejo predominantemente ambulatorio salvo el estudio diagnóstico inicial).',
      seguimiento_ambulatorio: 'Campimetría seriada (el parámetro central de seguimiento) y examen de fondo de ojo periódico para vigilar la resolución o progresión del papiledema; seguimiento nutricional estructurado para la pérdida de peso sostenida.',
      pronostico: 'Favorable en la mayoría de los casos con tratamiento oportuno y pérdida de peso sostenida; el riesgo principal no tratado es la pérdida visual permanente por daño progresivo del nervio óptico.',
      algoritmo: ['Cefalea + papiledema en mujer joven con obesidad → sospechar hipertensión intracraneal idiopática', 'RM cerebral + venografía por RM para descartar lesión estructural y trombosis venosa ANTES de la punción lumbar', 'Punción lumbar con presión de apertura elevada y LCR citoquímico normal confirma el diagnóstico', 'Pérdida de peso + acetazolamida como manejo inicial', 'Campimetría seriada guía la necesidad de escalar a manejo quirúrgico']
    },
    {
      nombre: 'Edema peritumoral y manejo con corticoides',
      color: '#7a4363',
      definicion: 'Acumulación de líquido en la sustancia blanca circundante a un tumor cerebral (edema vasogénico), producido por la disrupción de la barrera hematoencefálica a nivel de la vasculatura tumoral anómala; con frecuencia desproporcionadamente extenso en relación con el tamaño del tumor, particularmente en las metástasis cerebrales.',
      fisiopatologia: `Los vasos sanguíneos que irrigan el tumor (particularmente en metástasis y gliomas de alto grado) carecen de las uniones estrechas normales de la barrera hematoencefálica, permitiendo la extravasación de líquido rico en proteínas plasmáticas hacia el espacio extracelular de la sustancia blanca circundante (edema vasogénico); este mecanismo es fundamentalmente distinto del edema citotóxico isquémico (donde la barrera está intacta pero falla la bomba de sodio-potasio neuronal, permitiendo la entrada de agua a la célula misma), una distinción clínicamente crucial porque explica por qué el edema peritumoral responde notablemente bien a los corticoides (que restauran parcialmente la integridad de la barrera) mientras que el edema citotóxico isquémico no responde a ellos.${figBlock('Imagen 1', 'Edema vasogénico (peritumoral) vs. citotóxico (isquémico)', edemaHtml)}`,
      epidemiologia: 'Particularmente prominente en las metástasis cerebrales (donde el edema con frecuencia excede varias veces el volumen de la lesión misma) y en el glioblastoma; menos prominente en el meningioma extraaxial de crecimiento lento.',
      factores_riesgo: ['Metástasis cerebral (mayor desproporción edema/tamaño tumoral)', 'Glioblastoma y otros gliomas de alto grado', 'Localización en un área con menor reserva de espacio compensatorio (efecto de masa clínicamente significativo con menor volumen absoluto)'],
      clinica: 'Cefalea, somnolencia, déficit neurológico focal que puede fluctuar con el grado de edema (a diferencia del déficit fijo atribuible solo al tumor en sí), y en casos extremos deterioro del estado de alerta por efecto de masa combinado (tumor + edema).',
      criterios_dx: 'Hiperintensidad en secuencias T2/FLAIR de la resonancia magnética que se extiende desde el tumor hacia la sustancia blanca circundante, con un patrón "en dedos de guante" característico que sigue los tractos de sustancia blanca.',
      laboratorio: 'Glucosa sérica basal y seriada antes y durante el tratamiento con corticoides (riesgo de hiperglucemia, particularmente relevante en el paciente diabético o con factores de riesgo).',
      imagen: 'Resonancia magnética con secuencias T2/FLAIR para cuantificar la extensión del edema y su respuesta al tratamiento.',
      complementarios: 'No hay un estudio complementario único adicional más allá de los ya descritos.',
      dx_diferencial: 'Progresión tumoral verdadera (a diferencia del edema, no mejora con corticoides), pseudoprogresión post-radioterapia (ver la tarjeta de Glioma).',
      tx_medico: 'Corticoides (dexametasona) como tratamiento de elección para el edema vasogénico peritumoral sintomático, con mejoría clínica con frecuencia notable dentro de horas a 1-2 días; se usa la dosis mínima eficaz por el tiempo más corto posible, dado el perfil de efectos adversos con el uso prolongado.',
      tx_farmacologico: 'Dexametasona en dosis ajustada a la gravedad del edema y los síntomas, con reducción gradual (nunca suspensión abrupta) conforme el edema se controla con el tratamiento definitivo del tumor; profilaxis gástrica y monitorización glucémica durante el tratamiento.',
      tx_intervencionista: 'No aplica de forma directa; el edema mejora con el tratamiento definitivo del tumor subyacente (cirugía, radioterapia, quimioterapia según la entidad).',
      criterios_uci: 'Deterioro del estado de alerta por efecto de masa combinado (tumor + edema) que no responde rápidamente a corticoides.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta clínica a corticoides y de la glucemia durante el tratamiento inicial.',
      seguimiento_ambulatorio: 'Reducción gradual programada de la dosis de corticoides conforme el tratamiento definitivo del tumor controla la causa de fondo; vigilancia de efectos adversos por el uso prolongado (hiperglucemia, miopatía esteroidea, osteoporosis) si el curso se extiende.',
      pronostico: 'Excelente respuesta sintomática a corticoides en la gran mayoría de los casos de edema vasogénico verdadero; el pronóstico global depende del tumor subyacente, no del edema en sí.',
      algoritmo: ['Hiperintensidad en T2/FLAIR en "dedos de guante" desde el tumor hacia la sustancia blanca → edema vasogénico peritumoral', 'Dexametasona como tratamiento de elección, dosis mínima eficaz por el tiempo más corto posible', 'Monitorizar glucemia durante el tratamiento', 'Reducción gradual (nunca abrupta) conforme el tratamiento definitivo del tumor controla la causa', 'Distinguir de progresión tumoral verdadera: el edema mejora con corticoides, la progresión no']
    },
    {
      nombre: 'Crisis convulsivas asociadas a tumor cerebral',
      color: '#966b35',
      definicion: 'Crisis epilépticas focales o secundariamente generalizadas producidas por la irritación cortical directa del tumor o de su edema peritumoral asociado; con frecuencia la manifestación clínica inicial que lleva al diagnóstico del tumor.',
      fisiopatologia: 'El tumor y el edema peritumoral circundante alteran la excitabilidad neuronal local (por compresión mecánica directa, alteración de la microcirculación regional, y cambios en el microambiente iónico y de neurotransmisores), creando un foco cortical irritativo capaz de generar descargas eléctricas anómalas; los tumores de crecimiento lento y localización cortical (particularmente los gliomas de bajo grado) se asocian con mayor frecuencia a crisis como manifestación inicial que las metástasis o los tumores de crecimiento muy rápido, que con frecuencia se presentan primero con déficit focal progresivo.',
      epidemiologia: 'Las crisis convulsivas son la manifestación inicial en una proporción considerable de los tumores cerebrales, particularmente los gliomas de bajo grado de localización cortical.',
      factores_riesgo: ['Localización cortical del tumor (mayor riesgo que la localización profunda/subcortical)', 'Gliomas de bajo grado (mayor asociación con crisis como presentación inicial que los tumores de crecimiento rápido)', 'Edema peritumoral extenso concomitante'],
      clinica: 'Crisis focal (con o sin generalización secundaria) de novo en un paciente sin epilepsia previa conocida; la semiología de la crisis con frecuencia orienta hacia la localización del tumor según la corteza afectada.',
      criterios_dx: 'Diagnóstico clínico de la crisis, con resonancia magnética urgente en cualquier primera crisis del adulto sin causa evidente, dado que puede revelar un tumor no sospechado previamente.',
      laboratorio: 'Panel metabólico para descartar causas alternativas o contribuyentes de la crisis (hiponatremia, hipoglucemia) antes de atribuirla exclusivamente al tumor.',
      imagen: 'Resonancia magnética urgente tras cualquier primera crisis del adulto sin causa clara, que puede ser el estudio que revela el tumor subyacente.',
      complementarios: 'Electroencefalograma para caracterizar el foco epileptógeno y apoyar la elección del anticonvulsivante, aunque el diagnóstico y el manejo inicial no dependen exclusivamente de este estudio.',
      dx_diferencial: 'Crisis por otras causas estructurales o metabólicas no relacionadas con el tumor, síncope convulsivo (puede simular una crisis epiléptica verdadera).',
      tx_medico: 'Tratamiento anticonvulsivante estándar tras la primera crisis (a diferencia de la profilaxis anticonvulsivante primaria en el paciente sin crisis previa, que NO está recomendada de rutina en el tumor cerebral recién diagnosticado sin historia de crisis); el tratamiento definitivo del tumor (cirugía, radioterapia) con frecuencia reduce también la frecuencia de crisis al eliminar o reducir el foco irritativo.',
      tx_farmacologico: 'Levetiracetam frecuentemente preferido por su perfil favorable de interacciones farmacológicas (relevante dado el uso concomitante frecuente de quimioterapia) en comparación con anticonvulsivantes inductores enzimáticos más antiguos (fenitoína, carbamazepina), que pueden alterar el metabolismo de agentes quimioterapéuticos.',
      tx_intervencionista: 'No aplica de forma directa; el tratamiento definitivo del tumor subyacente es la intervención con mayor impacto a mediano plazo sobre la frecuencia de crisis.',
      criterios_uci: 'Estado epiléptico asociado a tumor cerebral (ver el tema de Estado Epiléptico y Epilepsia para el manejo general).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta al anticonvulsivante iniciado y de nuevas crisis durante la hospitalización.',
      seguimiento_ambulatorio: 'Seguimiento neurológico continuado del control de crisis, con ajuste del anticonvulsivante según la respuesta y las interacciones con el tratamiento oncológico concurrente.',
      pronostico: 'El control de crisis mejora con frecuencia tras el tratamiento definitivo del tumor, aunque puede persistir la necesidad de anticonvulsivante de mantenimiento a largo plazo en muchos pacientes.',
      algoritmo: ['Primera crisis convulsiva del adulto sin causa evidente → RM urgente para descartar tumor', 'Tumor confirmado + crisis ya ocurrida → iniciar anticonvulsivante estándar (no antes de la primera crisis)', 'Preferir levetiracetam sobre inductores enzimáticos por las interacciones con quimioterapia', 'El tratamiento definitivo del tumor con frecuencia reduce también la frecuencia de crisis', 'NO usar profilaxis anticonvulsivante primaria de rutina sin historia de crisis']
    },
    {
      nombre: 'Hidrocefalia obstructiva',
      color: '#6b4a2e',
      definicion: 'Acumulación de líquido cefalorraquídeo por obstrucción mecánica de su circulación normal, producida cuando un tumor (particularmente de la fosa posterior, el tercer ventrículo, o el acueducto de Silvio) comprime u obstruye físicamente las vías de flujo del LCR.',
      fisiopatologia: 'El LCR se produce continuamente en los plexos coroideos y circula a través de un sistema de ventrículos y espacios subaracnoideos hasta ser reabsorbido en las granulaciones aracnoideas; un tumor localizado en un punto estratégico de este circuito (el acueducto de Silvio, el cuarto ventrículo, o el tercer ventrículo son los puntos de mayor vulnerabilidad por su calibre estrecho) bloquea el flujo anterógrado, produciendo dilatación progresiva de los ventrículos proximales a la obstrucción y el consiguiente aumento de la presión intracraneal.',
      epidemiologia: 'Particularmente asociada a tumores de la fosa posterior (más frecuentes en la población pediátrica, aunque también ocurren en adultos) y a cualquier tumor que comprima el tercer ventrículo o el acueducto de Silvio.',
      factores_riesgo: ['Tumor localizado en la fosa posterior', 'Tumor del tercer ventrículo o la región pineal', 'Tumor que comprime el acueducto de Silvio específicamente (el punto más estrecho y vulnerable del sistema ventricular)'],
      clinica: 'Cefalea progresiva (con frecuencia peor en decúbito, mejorando parcialmente al sentarse o pararse), náusea y vómito (particularmente matutino), papiledema, y en casos avanzados alteración del estado de alerta; en el paciente pediátrico puede observarse aumento del perímetro cefálico si las suturas craneales aún no han cerrado.',
      criterios_dx: 'Dilatación ventricular desproporcionada al grado de atrofia cerebral esperado para la edad en la tomografía o resonancia magnética, con un punto de obstrucción identificable correspondiente a la localización del tumor.',
      laboratorio: 'No específico para el diagnóstico de la hidrocefalia en sí.',
      imagen: 'Tomografía computarizada urgente ante deterioro agudo del estado de alerta (rápida disponibilidad); resonancia magnética para caracterizar completamente el tumor causal y el punto exacto de obstrucción.',
      complementarios: 'No hay un estudio complementario único adicional más allá de los ya descritos.',
      dx_diferencial: 'Hidrocefalia comunicante por otra causa (alteración de la reabsorción de LCR, no obstrucción mecánica, un mecanismo distinto), atrofia cerebral simple sin verdadera hidrocefalia (la dilatación ventricular es proporcional, no desproporcionada).',
      tx_medico: 'El tratamiento definitivo es aliviar la obstrucción, ya sea resecando el tumor causal directamente o derivando el LCR alrededor del punto de obstrucción mientras se define el tratamiento oncológico definitivo.',
      tx_farmacologico: 'No hay tratamiento farmacológico definitivo de la obstrucción mecánica en sí; los corticoides pueden reducir transitoriamente el edema peritumoral contribuyente mientras se organiza la intervención definitiva.',
      tx_intervencionista: 'Derivación ventricular externa (medida temporal urgente) o ventriculoperitoneal (más definitiva) para desviar el LCR alrededor de la obstrucción; ventriculostomía endoscópica del tercer ventrículo como alternativa en obstrucciones específicas del acueducto; resección del tumor causal cuando sea posible, que puede resolver la hidrocefalia sin necesidad de derivación permanente.',
      criterios_uci: 'Hidrocefalia aguda con deterioro del estado de alerta, indicación de manejo urgente en cuidados críticos con derivación de urgencia.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica estrecha tras la colocación de cualquier derivación, dado el riesgo de mal funcionamiento o infección del dispositivo.',
      seguimiento_ambulatorio: 'Vigilancia a largo plazo de la función de la derivación si se coloca de forma permanente, con reconocimiento temprano de signos de disfunción (recurrencia de la cefalea, náusea, alteración del estado de alerta).',
      pronostico: 'Favorable si se reconoce y trata oportunamente; el retraso en el reconocimiento de una hidrocefalia aguda con deterioro del estado de alerta puede ser rápidamente fatal.',
      algoritmo: ['Cefalea progresiva peor en decúbito + vómito matutino + papiledema → sospechar hidrocefalia obstructiva', 'TC urgente si hay deterioro agudo del estado de alerta', 'Derivación ventricular externa como medida temporal urgente si hay compromiso agudo', 'Resección del tumor causal cuando sea posible, puede resolver la hidrocefalia sin derivación permanente', 'Derivación ventriculoperitoneal definitiva si la obstrucción no se resuelve con el tratamiento del tumor']
    },
    {
      nombre: 'Papiledema y pérdida visual por hipertensión intracraneal crónica',
      color: '#8c6b2d',
      definicion: `Edema del disco óptico bilateral por transmisión directa de la presión intracraneal elevada a lo largo de la vaina del nervio óptico (que es continua con el espacio subaracnoideo intracraneal), la complicación visual característica de cualquier causa de hipertensión intracraneal crónica sostenida, con riesgo de progresión a pérdida visual permanente si no se trata.${figBlock('Imagen 2', 'Papiledema en el examen de fondo de ojo', '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Fundal_photograph_showing_severe_papilloedema_in_the_right_eye.jpg" alt="Fotografía de fondo de ojo mostrando papiledema severo: borde del disco óptico borroso y elevado, con ingurgitación venosa asociada." style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">')}`,
      fisiopatologia: 'El espacio subaracnoideo intracraneal es continuo con el espacio que rodea al nervio óptico dentro de su vaina; cuando la presión intracraneal está crónicamente elevada (por cualquier causa: tumor, hidrocefalia, o hipertensión intracraneal idiopática), esa presión se transmite directamente al nervio óptico, produciendo estasis del flujo axoplásmico dentro de las fibras del nervio (no un verdadero edema inflamatorio) que se manifiesta como el borde borroso y elevado característico del disco óptico en el examen de fondo de ojo; si la presión elevada persiste sin tratamiento, la estasis axoplásmica sostenida progresa a daño axonal irreversible y pérdida visual permanente.',
      epidemiologia: 'Puede ocurrir con cualquier causa de hipertensión intracraneal crónica sostenida (tumor, hidrocefalia, hipertensión intracraneal idiopática); es característicamente bilateral (a diferencia de otras causas de edema del disco óptico unilateral, como la neuropatía óptica isquémica).',
      factores_riesgo: ['Cualquier causa de hipertensión intracraneal crónica no tratada o insuficientemente controlada', 'Duración prolongada de la hipertensión intracraneal antes del diagnóstico', 'Ausencia de vigilancia oftalmológica periódica en el paciente con hipertensión intracraneal crónica conocida'],
      clinica: 'Con frecuencia asintomático en etapas tempranas (detectado en el examen de fondo de ojo de rutina); conforme progresa, oscurecimientos visuales transitorios (episodios breves de pérdida visual con los cambios posturales o a la maniobra de Valsalva), y en etapas avanzadas pérdida de campo visual periférico progresiva y, si no se trata, pérdida de agudeza visual central irreversible.',
      criterios_dx: 'Examen de fondo de ojo mostrando el borde del disco óptico borroso y elevado, con frecuencia acompañado de hemorragias peripapilares e ingurgitación venosa, en el contexto de hipertensión intracraneal confirmada o sospechada.',
      laboratorio: 'No específico para el papiledema en sí; dirigido a la causa subyacente de la hipertensión intracraneal.',
      imagen: 'Tomografía de coherencia óptica (OCT) para cuantificar objetivamente el grosor de la capa de fibras nerviosas peripapilares y vigilar la progresión o resolución con el tratamiento.',
      complementarios: 'Campimetría (campos visuales) seriada, el estudio más importante para detectar el daño funcional temprano y guiar la necesidad de escalar el tratamiento (ver Diagnóstico).',
      dx_diferencial: 'Neuropatía óptica isquémica anterior (habitualmente unilateral, de instauración súbita, no bilateral ni progresiva como el papiledema verdadero), pseudopapiledema por drusas del nervio óptico (sin verdadera elevación de la presión intracraneal, distinguible por imagen específica del nervio óptico).',
      tx_medico: 'Tratamiento urgente y dirigido de la causa subyacente de la hipertensión intracraneal (resección del tumor, derivación de la hidrocefalia, o manejo médico de la hipertensión intracraneal idiopática, ver esas tarjetas), dado que el papiledema es un marcador de la presión elevada, no una entidad a tratar de forma aislada.',
      tx_farmacologico: 'Acetazolamida si la causa es hipertensión intracraneal idiopática (ver esa tarjeta); corticoides si contribuye edema peritumoral tratable (ver esa complicación).',
      tx_intervencionista: 'Fenestración de la vaina del nervio óptico en el paciente con pérdida visual progresiva pese al tratamiento médico máximo de la causa subyacente, particularmente relevante en la hipertensión intracraneal idiopática.',
      criterios_uci: 'No aplica de forma directa al papiledema en sí; depende de la causa subyacente de la hipertensión intracraneal.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación oftalmológica basal en todo paciente con hipertensión intracraneal recién diagnosticada, antes del alta si es posible.',
      seguimiento_ambulatorio: 'Campimetría y examen de fondo de ojo (idealmente con OCT) seriados para vigilar la resolución del papiledema con el tratamiento de la causa subyacente, o la progresión que obligue a escalar la intervención.',
      pronostico: 'Favorable si se reconoce y se trata la causa subyacente antes de que ocurra daño axonal significativo; el riesgo principal no tratado es la pérdida visual permanente, potencialmente prevenible con el reconocimiento y tratamiento oportunos.',
      algoritmo: ['Borde de disco óptico borroso y elevado, bilateral, en el fondo de ojo → papiledema, buscar la causa de hipertensión intracraneal', 'Tratar la causa subyacente de forma urgente y dirigida (tumor, hidrocefalia, o hipertensión intracraneal idiopática)', 'Campimetría seriada para vigilar el daño funcional y guiar la necesidad de escalar el tratamiento', 'OCT para cuantificar objetivamente la resolución o progresión', 'Fenestración de la vaina del nervio óptico si la pérdida visual progresa pese al tratamiento médico máximo']
    },
    {
      nombre: 'Herniación por tumor',
      color: '#7a1f3d',
      definicion: 'Desplazamiento del tejido cerebral hacia un compartimento adyacente por el efecto de masa de un tumor (a diferencia de la herniación aguda postraumática, ver el tema de Traumatismo Craneoencefálico para el desarrollo completo de los 3 síndromes de herniación), con una consideración adicional crítica específica de este contexto: la contraindicación de la punción lumbar en el tumor de fosa posterior no descartado por imagen previa.',
      fisiopatologia: 'El mecanismo de fondo es el mismo descrito en el tema de Traumatismo Craneoencefálico (doctrina de Monro-Kellie: el proceso expansivo agota la capacidad compensatoria del compartimento craneal rígido, desplazando el tejido cerebral hacia zonas de menor presión), pero en el contexto tumoral la instauración es habitualmente más gradual que en el trauma agudo, permitiendo cierto grado de adaptación progresiva; sin embargo, el riesgo específico y potencialmente catastrófico en este contexto es la herniación amigdalina precipitada por una punción lumbar en un paciente con un tumor de fosa posterior no reconocido: al retirar LCR desde el espacio lumbar, el gradiente de presión resultante puede empujar súbitamente las amígdalas cerebelosas ya comprimidas hacia el foramen magno, con compresión bulbar y paro respiratorio.',
      epidemiologia: 'Riesgo presente en cualquier tumor con efecto de masa significativo, particularmente crítico en los tumores de fosa posterior (más frecuentes en la población pediátrica, aunque también ocurren en adultos) dada su proximidad anatómica al foramen magno.',
      factores_riesgo: ['Tumor de fosa posterior con efecto de masa significativo', 'Hidrocefalia obstructiva concomitante (ver esa complicación)', 'Punción lumbar realizada sin neuroimagen previa en un paciente con signos sugestivos de lesión con efecto de masa'],
      clinica: 'Deterioro progresivo del estado de alerta, signos de compresión de tronco encefálico (alteración de pares craneales bajos, patrón respiratorio anormal), y en la herniación amigdalina precipitada por punción lumbar, paro respiratorio súbito que puede ocurrir durante o poco después del procedimiento.',
      criterios_dx: 'Sospecha clínica por el deterioro neurológico progresivo en un paciente con tumor conocido o sospechado, confirmada por neuroimagen mostrando desplazamiento de estructuras de línea media o descenso de las amígdalas cerebelosas a través del foramen magno.',
      laboratorio: 'No específico para esta complicación en sí.',
      imagen: 'Tomografía o resonancia magnética urgente ante cualquier deterioro neurológico agudo en un paciente con tumor conocido, SIEMPRE antes de considerar una punción lumbar si existe cualquier sospecha de efecto de masa.',
      complementarios: 'Ninguno adicional; la prevención mediante neuroimagen previa a la punción lumbar es la medida central en este contexto específico.',
      dx_diferencial: 'Deterioro neurológico por causa extracraneal concomitante (hipoxia, hipotensión) que debe descartarse activamente en paralelo.',
      tx_medico: 'Medidas de manejo urgente de la hipertensión intracraneal (ver el tema de Traumatismo Craneoencefálico para el desarrollo completo: elevación de cabecera, soluciones hiperosmolares, manejo de la vía aérea) mientras se organiza la intervención definitiva sobre el tumor causal.',
      tx_farmacologico: 'Soluciones hiperosmolares (manitol o solución salina hipertónica) para reducir la presión intracraneal de forma aguda mientras se organiza la intervención definitiva; corticoides si contribuye edema peritumoral significativo (ver esa complicación).',
      tx_intervencionista: 'Descompresión quirúrgica urgente (resección del tumor causal, o derivación ventricular si hay hidrocefalia obstructiva asociada) ante cualquier signo de herniación inminente o establecida.',
      criterios_uci: 'Indicación absoluta de manejo en cuidados críticos ante cualquier signo de herniación por tumor.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica continua tras la intervención de descompresión.',
      pronostico: 'Reservado si ocurre paro respiratorio por herniación amigdalina precipitada; la prevención (neuroimagen antes de la punción lumbar en cualquier paciente con sospecha de efecto de masa) es completamente eficaz cuando se aplica sistemáticamente.',
      algoritmo: ['NUNCA realizar punción lumbar sin neuroimagen previa si hay cualquier sospecha de efecto de masa o tumor de fosa posterior', 'Deterioro neurológico progresivo en paciente con tumor conocido → neuroimagen urgente antes de cualquier otro procedimiento', 'Soluciones hiperosmolares como medida temporal mientras se organiza la intervención definitiva', 'Descompresión quirúrgica urgente (resección tumoral o derivación ventricular) ante herniación inminente o establecida']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en la vigilancia neurológica seriada y en el reconocimiento temprano de las complicaciones agudas (edema significativo, crisis convulsivas, hidrocefalia, herniación) mientras se define y organiza el tratamiento oncológico definitivo.',
    parametros: ['Estado neurológico y nivel de alerta seriados', 'Examen de fondo de ojo (papiledema) en la evaluación inicial', 'Glucemia durante el tratamiento con corticoides', 'Nuevas crisis convulsivas o déficit focal progresivo'],
    criterios_uci_general: 'Deterioro agudo del estado de alerta, signos de herniación inminente o establecida, hidrocefalia obstructiva aguda, o estado epiléptico asociado a tumor.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Neuroimagen previa a cualquier punción lumbar cuando exista sospecha de efecto de masa (previene la herniación precipitada por el procedimiento); campimetría y examen de fondo de ojo periódicos en el paciente con hipertensión intracraneal crónica conocida (previene la pérdida visual permanente); dosis mínima eficaz de corticoides por el tiempo más corto posible (minimiza los efectos adversos del uso prolongado).'
  }
};

export const compCites = {
  'Meningioma': [1, 3, 10, 11],
  'Glioma (astrocitoma difuso y glioblastoma)': [2, 11],
  'Metástasis cerebrales': [4, 1],
  'Hipertensión intracraneal idiopática (pseudotumor cerebri)': [6, 7, 15],
  'Edema peritumoral y manejo con corticoides': [8],
  'Crisis convulsivas asociadas a tumor cerebral': [9],
  'Hidrocefalia obstructiva': [5],
  'Papiledema y pérdida visual por hipertensión intracraneal crónica': [7, 15],
  'Herniación por tumor': [5]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Karnofsky Performance Status / ECOG': [12, 13],
  'Criterios diagnósticos revisados de hipertensión intracraneal idiopática': [6]
};
export const escalaCalc = { 'Karnofsky Performance Status / ECOG': 'karnofsky-ecog' };
export const compGroups = [
  { name: 'Entidades', items: ['Meningioma', 'Glioma (astrocitoma difuso y glioblastoma)', 'Metástasis cerebrales', 'Hipertensión intracraneal idiopática (pseudotumor cerebri)'] },
  { name: 'Complicaciones', items: ['Edema peritumoral y manejo con corticoides', 'Crisis convulsivas asociadas a tumor cerebral', 'Hidrocefalia obstructiva', 'Papiledema y pérdida visual por hipertensión intracraneal crónica', 'Herniación por tumor'] }
];
export const complicacionesIntro = 'Las primeras 4 fichas son las entidades principales: meningioma (tumor primario más frecuente), glioma (maligno primario más frecuente), metástasis cerebrales (el más frecuente en conjunto), e hipertensión intracraneal idiopática (elevación de presión SIN lesión estructural). Las siguientes 5 son las complicaciones reales del proceso expansivo intracraneal: edema peritumoral, crisis convulsivas, hidrocefalia obstructiva, papiledema/pérdida visual, y herniación por tumor (con la contraindicación crítica de punción lumbar sin imagen previa).';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Clasificación' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'NEOPLASIAS DEL SNC E HIPERTENSIÓN INTRACRANEAL', color: '#5c4a2e', target: 'definicion' },
  branches: [
    { title: 'Entidades', sub: 'Por tipo de lesión', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Meningioma', sub: 'Primario benigno más frecuente', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Glioma', sub: 'Astrocitoma y glioblastoma', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Metástasis cerebrales', sub: 'El más frecuente en conjunto', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Hipertensión intracraneal idiopática', sub: 'Sin lesión estructural', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Del proceso expansivo', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Edema peritumoral', sub: 'Vasogénico, responde a corticoides', color: '#7a4363', target: 'complicaciones' },
      { title: 'Crisis convulsivas', sub: 'A veces la presentación inicial', color: '#966b35', target: 'complicaciones' },
      { title: 'Hidrocefalia obstructiva', sub: 'Fosa posterior, 3er ventrículo', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Papiledema y pérdida visual', sub: 'Bilateral, campimetría seriada', color: '#8c6b2d', target: 'complicaciones' },
      { title: 'Herniación por tumor', sub: 'PL contraindicada sin imagen previa', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [13, 14] };
export const clasificacionCite = [13, 14, 6];
export const seguimientoCite = [8, 9];
