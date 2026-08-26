// topics/trastornos-del-movimiento/content.js: Trastornos del Movimiento.
// Cubre "Enfermedad de Parkinson" + "Otros trastornos del movimiento" del bloque XII
// (Neurología), tercero de los 11 temas del plan de Neurología (Traumatismo Craneoencefálico y
// Neoplasias del SNC e Hipertensión Intracraneal ya construidos).
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
// (Parkinson, temblor esencial, distonía, corea/Huntington: 1 patrón hipocinético + 3
// hipercinéticos) + 4 fichas de complicaciones, TODAS centradas en la enfermedad de Parkinson por
// decisión explícita del usuario (concentra la mayoría de la morbilidad tratable de este tema):
// complicaciones motoras del tratamiento dopaminérgico, demencia/deterioro cognitivo, disfunción
// autonómica, psicosis inducida por fármacos dopaminérgicos. Calculadora: escala de Hoehn y Yahr.
// 2 figuras SVG (tipos de temblor, circuito de ganglios basales).

export const meta = {
  id: 'trastornos-del-movimiento',
  titulo: 'Trastornos del Movimiento',
  subtitulo: 'Módulo 34 · Medicina Interna',
  accent: '#3f6b52',
  accentDim: '#7aa38c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const temblorHtml = `
<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;max-width:560px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="flex:1;min-width:160px;text-align:center;">
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:60px;">
      <path d="M10 30 Q20 15 30 30 Q40 45 50 30 Q60 15 70 30 Q80 45 90 30 Q100 15 110 30" fill="none" stroke="#8c3a34" stroke-width="3"/>
    </svg>
    <div style="font-weight:700;color:#8c3a34;">De reposo</div>
    <div style="color:var(--ink-dim);">Presente con el miembro totalmente relajado, mejora con el movimiento voluntario. Parkinson.</div>
  </div>
  <div style="flex:1;min-width:160px;text-align:center;">
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:60px;">
      <path d="M10 30 Q17 24 24 30 Q31 36 38 30 Q45 24 52 30 Q59 36 66 30 Q73 24 80 30 Q87 36 94 30 Q101 24 108 30" fill="none" stroke="#3d5a73" stroke-width="3"/>
    </svg>
    <div style="font-weight:700;color:#3d5a73;">Postural/de acción</div>
    <div style="color:var(--ink-dim);">Aparece al mantener una postura contra gravedad (brazos extendidos). Temblor esencial.</div>
  </div>
  <div style="flex:1;min-width:160px;text-align:center;">
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:60px;">
      <path d="M10 45 Q30 40 45 25 Q55 15 60 8" fill="none" stroke="#8a6a1f" stroke-width="2" stroke-dasharray="1 3"/>
      <path d="M10 45 L18 40 L14 36 L24 33 L18 28 L30 24 L24 20 L38 15 L32 12 L44 8 L60 8" fill="none" stroke="#8a6a1f" stroke-width="3"/>
    </svg>
    <div style="font-weight:700;color:#8a6a1f;">Intencional</div>
    <div style="color:var(--ink-dim);">Empeora al acercarse al objetivo (prueba dedo-nariz). Enfermedad cerebelosa.</div>
  </div>
</div>`;

const gangliosHtml = `
<div style="display:flex;flex-direction:column;gap:8px;max-width:480px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="text-align:center;font-weight:700;color:var(--accent-fg);">Sustancia negra (dopamina) → estriado</div>
  <div style="display:flex;gap:12px;justify-content:center;">
    <div style="flex:1;background:#3f6b5222;border:1px solid #3f6b52;border-radius:8px;padding:8px;text-align:center;">
      <strong>Vía directa</strong><br>Dopamina la FACILITA<br>→ facilita el movimiento
    </div>
    <div style="flex:1;background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:8px;text-align:center;">
      <strong>Vía indirecta</strong><br>Dopamina la INHIBE<br>→ frena el movimiento
    </div>
  </div>
  <div style="color:var(--ink-dim);text-align:center;">Parkinson (↓dopamina): predomina la vía indirecta sin freno → hipocinesia, rigidez.<br>Corea/discinesias (dopamina relativamente excesiva o vía directa hiperactiva): predomina la vía directa → hipercinesia, movimientos excesivos.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Los trastornos del movimiento se clasifican en 2 grandes categorías según el circuito de los ganglios basales que predomina: hipocinéticos (menos movimiento del esperado, dominados por la enfermedad de Parkinson) e hipercinéticos (movimiento involuntario excesivo, que incluye el temblor esencial, la distonía, y la corea).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Los 4 patrones principales.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Enfermedad de Parkinson</strong>: el trastorno hipocinético más frecuente, por pérdida de neuronas dopaminérgicas de la sustancia negra; bradicinesia, rigidez, temblor de reposo, e inestabilidad postural.</li>
    <li><strong>Temblor esencial</strong>: el trastorno de temblor más frecuente en general; temblor postural/de acción, a menudo familiar.</li>
    <li><strong>Distonía</strong>: contracciones musculares sostenidas o intermitentes que producen posturas anormales o movimientos repetitivos, focal o generalizada.</li>
    <li><strong>Corea y enfermedad de Huntington</strong>: movimientos involuntarios, irregulares, e impredecibles; la enfermedad de Huntington es la causa hereditaria más caracterizada.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología compartida.</strong>${figBlock('Imagen 2', 'El circuito de los ganglios basales: vía directa e indirecta', gangliosHtml)} La dopamina de la sustancia negra modula 2 vías con efectos opuestos sobre el movimiento: la vía directa (que facilita el movimiento) y la indirecta (que lo frena); el equilibrio entre ambas explica por qué la pérdida dopaminérgica produce hipocinesia (Parkinson) mientras que un exceso relativo de actividad dopaminérgica o de la vía directa produce hipercinesia (corea, discinesias).</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de complicaciones.</strong> La enfermedad de Parkinson concentra la mayoría de la morbilidad tratable a largo plazo de este tema: las complicaciones motoras del tratamiento dopaminérgico, el deterioro cognitivo asociado, la disfunción autonómica, y la psicosis inducida por fármacos dopaminérgicos, desarrolladas en Complicaciones.</p>`;

export const bibliografia = [
  'Postuma RB, Berg D, Stern M, et al. MDS clinical diagnostic criteria for Parkinson\'s disease. Mov Disord. 2015;30(12):1591-1601.',
  'Armstrong MJ, Okun MS. Diagnosis and Treatment of Parkinson Disease: A Review. JAMA. 2020;323(6):548-560.',
  'Hoehn MM, Yahr MD. Parkinsonism: onset, progression and mortality. Neurology. 1967;17(5):427-442.',
  'Bhidayasiri R, Tarsy D. Movement Disorders: A Video Atlas. Humana Press; 2012.',
  'Louis ED. Essential tremor. N Engl J Med. 2001;345(12):887-891.',
  'Albanese A, Bhatia K, Bressman SB, et al. Phenomenology and classification of dystonia: a consensus update. Mov Disord. 2013;28(7):863-873.',
  'Bates GP, Dorsey R, Gusella JF, et al. Huntington disease. Nat Rev Dis Primers. 2015;1:15005.',
  'Fasano A, Aquino CC, Krauss JK, et al. Axial disability and deep brain stimulation in patients with Parkinson disease. Nat Rev Neurol. 2015;11(2):98-110.',
  'Emre M, Aarsland D, Brown R, et al. Clinical diagnostic criteria for dementia associated with Parkinson\'s disease. Mov Disord. 2007;22(12):1689-1707.',
  'McKeith IG, Boeve BF, Dickson DW, et al. Diagnosis and management of dementia with Lewy bodies. Neurology. 2017;89(1):88-100.',
  'Palma JA, Kaufmann H. Treatment of autonomic dysfunction in Parkinson disease and other synucleinopathies. Mov Disord. 2018;33(3):372-390.',
  'Ffytche DH, Creese B, Politis M, et al. The psychosis spectrum in Parkinson disease. Nat Rev Neurol. 2017;13(2):81-95.',
  'Espay AJ, Morgante F, Merola A, et al. Levodopa-induced dyskinesia in Parkinson disease: current and evolving concepts. Ann Neurol. 2018;84(6):797-811.',
  'Olanow CW, Kieburtz K, Rascol O, et al. Factors predictive of the development of Levodopa-induced dyskinesia and wearing-off in Parkinson\'s disease. Mov Disord. 2013;28(8):1064-1071.',
  'Poewe W, Seppi K, Tanner CM, et al. Parkinson disease. Nat Rev Dis Primers. 2017;3:17013.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Trastorno hipocinético',
      tituloB: 'Trastorno hipercinético',
      compensada: 'Bradicinesia, rigidez, temblor de reposo, e inestabilidad postural, característicos de la enfermedad de Parkinson y otros parkinsonismos.',
      descompensada: 'Movimiento involuntario excesivo: temblor postural/de acción (temblor esencial), posturas anormales sostenidas (distonía), o movimientos irregulares impredecibles (corea).'
    },
    laboratorio: [
      { prueba: 'Cobre sérico y ceruloplasmina', utilidad: 'Descarta enfermedad de Wilson como causa secundaria tratable de un trastorno del movimiento en el paciente joven (temblor, distonía, o parkinsonismo de inicio temprano).' },
      { prueba: 'Estudio genético (repetición CAG del gen HTT)', utilidad: 'Confirma la enfermedad de Huntington ante sospecha clínica de corea con antecedente familiar compatible.' }
    ],
    no_invasivos: [
      { metodo: 'Escala de Hoehn y Yahr (calculadora)', interpretacion: 'Estadifica la gravedad y progresión de la enfermedad de Parkinson.', cutoff: '0 (sin signos) a 5 (dependiente de silla de ruedas o encamado)' },
      { metodo: 'Respuesta a levodopa', interpretacion: 'Una respuesta clara y sostenida apoya fuertemente el diagnóstico de enfermedad de Parkinson idiopática, a diferencia de los parkinsonismos atípicos, que responden poco o de forma transitoria.' }
    ],
    imagen: [
      { modalidad: 'Resonancia magnética cerebral', hallazgos: 'Habitualmente normal en la enfermedad de Parkinson idiopática (diagnóstico clínico); se solicita principalmente para descartar causas estructurales secundarias (parkinsonismo vascular, hidrocefalia) o hallazgos atípicos sugestivos de otro parkinsonismo.' },
      { modalidad: 'DaTSCAN (SPECT de transportador de dopamina)', hallazgos: 'Confirma la pérdida de terminales dopaminérgicos presinápticos, útil cuando el diagnóstico clínico es incierto (ej. distinguir de temblor esencial atípico), aunque no distingue entre la enfermedad de Parkinson y los parkinsonismos atípicos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es entre los trastornos hipocinéticos (enfermedad de Parkinson, dominada por la pérdida dopaminérgica) y los hipercinéticos (temblor esencial, distonía, corea), cada uno con un patrón de movimiento anormal característico y reconocible.',
    escalas: [
      { nombre: 'Escala de Hoehn y Yahr', componentes: 'Estadio clínico de la enfermedad de Parkinson según lateralidad, compromiso del equilibrio, y dependencia funcional. Calculadora disponible más abajo.', formula: '0 a 5 (incluye estadios intermedios 1.5 y 2.5)', interpretacion: 'Estadios más altos indican mayor gravedad y menor independencia funcional.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfermedad de Parkinson',
      color: '#3f6b52',
      definicion: 'El trastorno del movimiento hipocinético más frecuente, producido por la degeneración progresiva de las neuronas dopaminérgicas de la sustancia negra pars compacta con depósito de alfa-sinucleína (cuerpos de Lewy); se manifiesta clásicamente con bradicinesia, rigidez, temblor de reposo, e inestabilidad postural.',
      fisiopatologia: 'La pérdida progresiva de neuronas dopaminérgicas en la sustancia negra pars compacta reduce la dopamina disponible para el estriado, desplazando el equilibrio entre la vía directa e indirecta de los ganglios basales hacia una inhibición neta del movimiento (ver Imagen 2); los cuerpos de Lewy (agregados de alfa-sinucleína mal plegada) son el sustrato patológico característico, y su distribución progresiva más allá de la sustancia negra explica la aparición tardía de síntomas no motores (cognitivos, autonómicos, ver Complicaciones).',
      epidemiologia: 'El segundo trastorno neurodegenerativo más frecuente después de la enfermedad de Alzheimer; la incidencia aumenta marcadamente con la edad, con inicio típico después de los 60 años.',
      factores_riesgo: ['Edad avanzada (el factor de riesgo más fuerte)', 'Antecedente familiar en una minoría de casos (formas genéticas identificadas: LRRK2, GBA, entre otras)', 'Exposición a ciertos pesticidas/toxinas ambientales', 'Sexo masculino (incidencia algo mayor)'],
      clinica: 'Bradicinesia (lentitud y reducción de la amplitud del movimiento, con frecuencia el criterio cardinal requerido para el diagnóstico), rigidez en "rueda dentada", temblor de reposo asimétrico (típicamente "en cuenta monedas"), inestabilidad postural (hallazgo tardío), hipomimia, micrografía, marcha festinante con reducción del braceo.',
      criterios_dx: 'Diagnóstico clínico (criterios MDS): bradicinesia obligatoria más al menos 1 de rigidez o temblor de reposo, sin criterios de exclusión (ausencia de respuesta a levodopa en dosis adecuada, signos cerebelosos, parálisis supranuclear de la mirada, entre otros que sugieren un parkinsonismo atípico).',
      laboratorio: 'No específico; dirigido a descartar causas secundarias (cobre/ceruloplasmina en el paciente joven para enfermedad de Wilson).',
      imagen: 'Resonancia magnética habitualmente normal (descarta causas estructurales secundarias); DaTSCAN si el diagnóstico clínico es incierto.',
      complementarios: 'Respuesta terapéutica a levodopa como criterio de apoyo diagnóstico retrospectivo.',
      dx_diferencial: 'Parkinsonismo atípico (atrofia multisistémica, parálisis supranuclear progresiva, degeneración corticobasal: progresión más rápida, respuesta pobre a levodopa, signos atípicos tempranos), parkinsonismo vascular (inicio predominante en miembros inferiores, antecedente de enfermedad cerebrovascular), parkinsonismo inducido por fármacos (antipsicóticos, antieméticos antagonistas dopaminérgicos).',
      tx_medico: 'Levodopa/carbidopa como el tratamiento sintomático más eficaz, iniciado cuando los síntomas afectan la función; agonistas dopaminérgicos o inhibidores de la MAO-B considerados como estrategia inicial en el paciente más joven para retrasar las complicaciones motoras (ver esa complicación) asociadas al uso prolongado de levodopa.',
      tx_farmacologico: 'Levodopa/carbidopa (el más eficaz); agonistas dopaminérgicos (pramipexol, ropinirol); inhibidores de la MAO-B (selegilina, rasagilina); inhibidores de la COMT (entacapona) como adyuvante de levodopa; amantadina, particularmente útil para las discinesias (ver esa complicación).',
      tx_intervencionista: 'Estimulación cerebral profunda (núcleo subtalámico o globo pálido interno) en la enfermedad avanzada con complicaciones motoras significativas pese al ajuste médico óptimo, en el paciente sin deterioro cognitivo significativo.',
      criterios_uci: 'No aplica de forma característica a la enfermedad no complicada; la crisis acinética grave (acinesia extrema con riesgo de complicaciones inmovilizadoras) puede requerir manejo hospitalario intensivo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Nunca suspender abruptamente la levodopa en el paciente hospitalizado (riesgo de síndrome neuroléptico maligno-símil); mantener el horario habitual de dosificación durante cualquier hospitalización.',
      seguimiento_ambulatorio: 'Seguimiento neurológico regular con ajuste progresivo del esquema dopaminérgico conforme evoluciona la enfermedad; vigilancia activa de las 4 complicaciones desarrolladas en esta sección.',
      pronostico: 'Progresivo mientras que la expectativa de vida es cercana a la de la población general con el tratamiento moderno; la calidad de vida a largo plazo depende sustancialmente del manejo oportuno de las complicaciones motoras y no motoras.',
      algoritmo: ['Bradicinesia + rigidez o temblor de reposo, sin criterios de exclusión → enfermedad de Parkinson (criterios MDS)', 'Iniciar tratamiento sintomático cuando afecta la función (levodopa, agonista dopaminérgico, o inhibidor de la MAO-B según la edad y el contexto)', 'Nunca suspender la levodopa abruptamente durante una hospitalización', 'Vigilar activamente complicaciones motoras, cognitivas, autonómicas, y psiquiátricas conforme progresa', 'Considerar estimulación cerebral profunda en la enfermedad avanzada con complicaciones motoras refractarias']
    },
    {
      nombre: 'Temblor esencial',
      color: '#3d5a73',
      definicion: 'El trastorno de temblor más frecuente en la población general: temblor postural y de acción, bilateral y habitualmente simétrico, que afecta predominantemente las manos y con menor frecuencia la cabeza o la voz, con frecuencia de herencia autosómica dominante.',
      fisiopatologia: 'El mecanismo exacto no está completamente esclarecido, pero se propone disfunción de circuitos cerebelo-talámico-corticales que generan oscilaciones anómalas durante el mantenimiento de una postura o la ejecución de un movimiento voluntario, a diferencia del temblor de reposo de la enfermedad de Parkinson (que refleja disfunción de los ganglios basales, ver Imagen 1 para la comparación completa de los 3 tipos de temblor).',
      epidemiologia: 'El trastorno del movimiento más frecuente en general (más que la enfermedad de Parkinson); la prevalencia aumenta con la edad, y una proporción considerable tiene antecedente familiar (herencia autosómica dominante con penetrancia variable).',
      factores_riesgo: ['Antecedente familiar de temblor esencial', 'Edad avanzada (aumenta la prevalencia y con frecuencia la amplitud del temblor)'],
      clinica: 'Temblor postural/de acción bilateral, predominantemente de manos (al sostener una postura contra gravedad o al realizar una tarea como escribir o llevar una taza a la boca), con frecuencia también de la cabeza (temblor "sí-sí" o "no-no") o la voz; característicamente mejora transitoriamente con la ingesta de alcohol (un dato útil en la historia, no una recomendación terapéutica).',
      criterios_dx: 'Diagnóstico clínico: temblor de acción bilateral, de al menos varios años de evolución, con o sin temblor de cabeza/voz asociado, en ausencia de otros signos neurológicos (a diferencia del temblor de reposo asimétrico con bradicinesia y rigidez de la enfermedad de Parkinson).',
      laboratorio: 'Función tiroidea (el hipertiroidismo puede producir o agravar un temblor de acción) si hay sospecha clínica asociada.',
      imagen: 'No indicada de rutina; DaTSCAN considerado solo si hay duda diagnóstica genuina con parkinsonismo.',
      complementarios: 'Historia familiar detallada, dado el patrón hereditario frecuente.',
      dx_diferencial: 'Temblor de reposo de la enfermedad de Parkinson (asimétrico, con bradicinesia y rigidez asociadas, ver esa tarjeta), temblor fisiológico exacerbado (ansiedad, hipertiroidismo, cafeína, ciertos fármacos).',
      tx_medico: 'Tratamiento sintomático reservado para cuando el temblor interfiere con la función (escribir, comer, actividades ocupacionales); una proporción de los pacientes con temblor leve no requiere tratamiento farmacológico.',
      tx_farmacologico: 'Propranolol o primidona como primera línea, con eficacia comparable; topiramato como alternativa en casos refractarios a ambos.',
      tx_intervencionista: 'Estimulación cerebral profunda del núcleo ventral intermedio del tálamo, o ultrasonido focalizado guiado por resonancia magnética (talamotomía no invasiva), en el temblor grave, incapacitante, y refractario al tratamiento farmacológico.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica (manejo predominantemente ambulatorio).',
      seguimiento_ambulatorio: 'Reevaluación periódica de la respuesta al tratamiento farmacológico y del impacto funcional; considerar intervención si el temblor progresa o se vuelve incapacitante pese al tratamiento médico.',
      pronostico: 'Generalmente benigno y de progresión muy lenta a lo largo de décadas; el impacto funcional y social puede ser considerable en casos de mayor amplitud, particularmente si compromete la voz o produce vergüenza social.',
      algoritmo: ['Temblor de acción bilateral, con frecuencia familiar, sin bradicinesia ni rigidez → temblor esencial', 'Distinguir del temblor de reposo asimétrico de Parkinson (ver Imagen 1)', 'Tratamiento solo si interfiere con la función: propranolol o primidona primera línea', 'Topiramato si refractario a ambos', 'Estimulación cerebral profunda o ultrasonido focalizado en el temblor grave e incapacitante refractario']
    },
    {
      nombre: 'Distonía',
      color: '#8a6a1f',
      definicion: 'Trastorno del movimiento caracterizado por contracciones musculares sostenidas o intermitentes que producen posturas anormales, movimientos repetitivos, o ambos; puede ser focal (limitada a una región corporal) o generalizada, y de causa idiopática o secundaria.',
      fisiopatologia: 'La distonía refleja una alteración de la inhibición normal a nivel de los ganglios basales, el tronco encefálico, y la corteza motora, produciendo co-contracción simultánea de músculos agonistas y antagonistas que normalmente se inhiben recíprocamente durante el movimiento voluntario; las formas focales (cervical, blefaroespasmo, calambre del escritor) predominan en el adulto, mientras que las formas generalizadas, con frecuencia de origen genético (ej. mutación en el gen DYT1/TOR1A), predominan en el niño y el adulto joven.',
      epidemiologia: 'La distonía cervical (tortícolis espasmódica) es la forma focal más frecuente en el adulto; las formas generalizadas de origen genético son infrecuentes pero clínicamente relevantes en el paciente de inicio temprano.',
      factores_riesgo: ['Antecedente familiar de distonía (formas genéticas generalizadas)', 'Uso de antagonistas dopaminérgicos (antipsicóticos, antieméticos), que pueden producir distonía aguda o tardía', 'Trauma periférico previo en la región afectada (distonía focal postraumática, infrecuente pero descrita)'],
      clinica: 'Distonía cervical: posición anormal sostenida del cuello (rotación, inclinación, o ambas), con frecuencia dolorosa. Blefaroespasmo: cierre involuntario y sostenido de los párpados. Calambre del escritor: contracción anormal de la mano específicamente al escribir, sin afectar otras tareas manuales. Distonía generalizada: posturas anormales que afectan múltiples regiones corporales, con frecuencia iniciando en una extremidad en el niño/adulto joven y generalizándose progresivamente.',
      criterios_dx: 'Diagnóstico clínico por el patrón característico de contracción sostenida y postura anormal; estudio genético dirigido en la distonía generalizada de inicio temprano.',
      laboratorio: 'Cobre/ceruloplasmina para descartar enfermedad de Wilson en el paciente joven con distonía de inicio temprano.',
      imagen: 'Resonancia magnética cerebral para descartar una causa estructural secundaria, particularmente en la distonía de inicio atípico o con otros signos neurológicos asociados.',
      complementarios: 'Estudio genético (DYT1/TOR1A y otros genes de distonía) en la forma generalizada de inicio temprano con antecedente familiar compatible.',
      dx_diferencial: 'Distonía secundaria a fármacos (antagonistas dopaminérgicos, reversible al suspender el agente causal en la forma aguda), otras causas de postura anormal no distónica (contractura ortopédica, dolor musculoesquelético primario).',
      tx_medico: 'Toxina botulínica como tratamiento de primera línea para la distonía focal (cervical, blefaroespasmo, calambre del escritor), inyectada directamente en los músculos hiperactivos identificados; tratamiento oral (anticolinérgicos, baclofeno, benzodiacepinas) considerado en la distonía generalizada, con eficacia variable.',
      tx_farmacologico: 'Toxina botulínica intramuscular (repetida cada 3-4 meses aproximadamente, dado que el efecto no es permanente) para la distonía focal; trihexifenidilo u otros anticolinérgicos en dosis progresivas para la distonía generalizada, particularmente en el niño (mejor tolerancia que el adulto).',
      tx_intervencionista: 'Estimulación cerebral profunda del globo pálido interno en la distonía generalizada grave y refractaria al tratamiento farmacológico oral, particularmente eficaz en las formas genéticas (DYT1).',
      criterios_uci: 'La crisis distónica generalizada grave (status dystonicus), infrecuente pero potencialmente fatal por las complicaciones respiratorias/metabólicas de la contracción muscular sostenida masiva, requiere manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica salvo en la crisis distónica generalizada grave.',
      seguimiento_ambulatorio: 'Reinyección periódica de toxina botulínica en la forma focal; seguimiento neurológico continuado del ajuste farmacológico en la forma generalizada.',
      pronostico: 'La distonía focal responde bien a la toxina botulínica en la mayoría de los casos, con buen control sintomático sostenido mediante reinyección periódica; la distonía generalizada tiene un curso más variable, con mejor respuesta a la estimulación cerebral profunda en las formas genéticas específicas.',
      algoritmo: ['Contracción muscular sostenida con postura anormal, focal o generalizada → distonía', 'Descartar causa secundaria por fármacos (antagonistas dopaminérgicos) o enfermedad de Wilson en el paciente joven', 'Distonía focal → toxina botulínica de primera línea, reinyección periódica', 'Distonía generalizada → anticolinérgicos orales, considerar estudio genético si inicio temprano', 'Estimulación cerebral profunda del globo pálido interno en la forma generalizada refractaria']
    },
    {
      nombre: 'Corea y enfermedad de Huntington',
      color: '#7a4363',
      definicion: 'La corea es un patrón de movimiento involuntario, irregular, impredecible, y de distribución variable que fluye de una región corporal a otra; la enfermedad de Huntington es su causa hereditaria mejor caracterizada, un trastorno autosómico dominante con la tríada de corea progresiva, deterioro cognitivo, y síntomas psiquiátricos.',
      fisiopatologia: 'La enfermedad de Huntington es producida por una expansión de repeticiones CAG en el gen HTT (que codifica la proteína huntingtina), con un número de repeticiones por encima del umbral patológico que produce una proteína tóxica de ganancia de función que degenera preferencialmente las neuronas espinosas medianas del estriado que proyectan hacia la vía indirecta; la pérdida selectiva de esta vía desinhibe el movimiento (por el desequilibrio hacia la vía directa, ver Imagen 2), explicando la corea como manifestación motora inicial característica, antes de que la enfermedad progrese hacia un compromiso más generalizado con rigidez en etapas avanzadas.',
      epidemiologia: 'La enfermedad de Huntington tiene una prevalencia baja pero es la causa hereditaria de corea mejor caracterizada, con herencia autosómica dominante y penetrancia completa; el fenómeno de anticipación genética (mayor número de repeticiones e inicio más temprano en generaciones sucesivas, particularmente por transmisión paterna) es característico.',
      factores_riesgo: ['Antecedente familiar de enfermedad de Huntington (herencia autosómica dominante, 50% de riesgo en cada hijo de un progenitor afectado)', 'Otras causas de corea a considerar en el diagnóstico diferencial: corea de Sydenham (fiebre reumática), corea gravídica, lupus eritematoso sistémico, hipertiroidismo, fármacos (anticonceptivos orales, antipsicóticos por discinesia tardía), causas paraneoplásicas'],
      clinica: 'Corea generalizada progresiva (movimientos involuntarios irregulares que el paciente con frecuencia intenta disimular incorporándolos a un movimiento voluntario), deterioro cognitivo progresivo (inicialmente disfunción ejecutiva, luego demencia franca), y síntomas psiquiátricos con frecuencia preceden a la corea (depresión, irritabilidad, psicosis); en etapas avanzadas, la corea puede dar paso a rigidez y bradicinesia (variante rígida, particularmente en la forma juvenil).',
      criterios_dx: 'Confirmación por estudio genético (número de repeticiones CAG en el gen HTT por encima del umbral patológico) en el paciente con corea progresiva y antecedente familiar compatible o sospecha clínica fuerte.',
      laboratorio: 'Estudio genético (repetición CAG del gen HTT) como confirmación definitiva; descartar causas secundarias de corea según el contexto clínico (anticuerpos antifosfolípido/ANA si se sospecha lupus, función tiroidea, prueba de embarazo).',
      imagen: 'Resonancia magnética cerebral mostrando atrofia del núcleo caudado en etapas más avanzadas, un hallazgo de apoyo pero no requerido para el diagnóstico (que es genético).',
      complementarios: 'Consejería genética estructurada antes y después de la prueba genética predictiva en el familiar asintomático en riesgo, dado el impacto psicológico y las implicaciones para la planificación familiar.',
      dx_diferencial: 'Corea de Sydenham (contexto de fiebre reumática, autolimitada), corea gravídica (se resuelve tras el parto), discinesia tardía por antipsicóticos (antecedente de exposición prolongada a antagonistas dopaminérgicos), otras coreas genéticas infrecuentes (neuroacantocitosis, ataxias espinocerebelosas específicas).',
      tx_medico: 'No existe tratamiento que modifique el curso de la enfermedad de Huntington; el manejo es sintomático (control de la corea, tratamiento de los síntomas psiquiátricos y cognitivos asociados) y de soporte multidisciplinario a largo plazo.',
      tx_farmacologico: 'Tetrabenazina o deutetrabenazina (inhibidores del transportador vesicular de monoaminas tipo 2) como tratamiento específico de la corea; antipsicóticos atípicos considerados si predominan síntomas psicóticos concomitantes; antidepresivos para el componente depresivo, con frecuencia prominente y con riesgo de suicidio que debe vigilarse activamente.',
      tx_intervencionista: 'No hay un tratamiento intervencionista establecido para la enfermedad de Huntington en sí (a diferencia de otros trastornos del movimiento de este tema).',
      criterios_uci: 'No aplica de forma característica a la enfermedad en sí; las complicaciones aspirativas o infecciosas de la disfagia en etapas avanzadas pueden requerir manejo hospitalario.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica a la enfermedad no complicada.',
      seguimiento_ambulatorio: 'Seguimiento multidisciplinario a largo plazo (neurología, psiquiatría, terapia ocupacional/del lenguaje conforme progresa la disfagia); vigilancia activa del riesgo suicida dado el componente psiquiátrico y depresivo frecuente; consejería genética para familiares en riesgo.',
      pronostico: 'Progresivo e inexorable durante 15-20 años en promedio desde el inicio de los síntomas motores hasta la muerte, habitualmente por complicaciones de la inmovilidad avanzada (aspiración, infección); la forma juvenil (inicio antes de los 20 años, con frecuencia por transmisión paterna con mayor número de repeticiones) tiene un curso más agresivo.',
      algoritmo: ['Corea progresiva + antecedente familiar compatible → sospechar enfermedad de Huntington, estudio genético confirmatorio', 'Descartar causas secundarias de corea según el contexto (Sydenham, gravídica, lupus, fármacos) si no hay antecedente familiar claro', 'Tetrabenazina o deutetrabenazina como tratamiento específico de la corea', 'Manejo multidisciplinario del componente cognitivo y psiquiátrico, con vigilancia activa del riesgo suicida', 'Consejería genética estructurada para familiares asintomáticos en riesgo antes de la prueba predictiva']
    },
    {
      nombre: 'Complicaciones motoras del tratamiento dopaminérgico',
      color: '#8c3a34',
      definicion: 'Espectro de fluctuaciones motoras (wearing-off, fenómenos on-off) y movimientos involuntarios inducidos por el tratamiento (discinesias) que se desarrollan con el uso prolongado de levodopa en la enfermedad de Parkinson, reflejando tanto la progresión de la enfermedad como la naturaleza no fisiológica de la estimulación dopaminérgica pulsátil.',
      fisiopatologia: 'Conforme progresa la degeneración dopaminérgica, la capacidad del estriado de almacenar y liberar dopamina de forma sostenida entre dosis de levodopa disminuye progresivamente, haciendo que la respuesta clínica dependa cada vez más directamente de los niveles plasmáticos fluctuantes del fármaco (en lugar de la liberación amortiguada fisiológica normal), produciendo el fenómeno de "wearing-off" (reaparición de síntomas antes de la siguiente dosis); la estimulación pulsátil no fisiológica de los receptores dopaminérgicos postsinápticos, mantenida durante años, produce además cambios plásticos progresivos en esos receptores y en las neuronas de salida del estriado que se manifiestan como discinesias (movimientos coreiformes involuntarios), típicamente en el pico de concentración plasmática del fármaco (discinesia "peak-dose").',
      epidemiologia: 'Ocurre en una proporción considerable de los pacientes con enfermedad de Parkinson tras varios años de tratamiento con levodopa; el riesgo aumenta con la duración del tratamiento, la dosis acumulada, y el inicio más temprano de la enfermedad (mayor tiempo de exposición acumulada a lo largo de la vida).',
      factores_riesgo: ['Duración prolongada del tratamiento con levodopa', 'Dosis diaria total más alta de levodopa', 'Inicio de la enfermedad de Parkinson a edad más temprana', 'Enfermedad más avanzada/mayor gravedad basal'],
      clinica: 'Wearing-off: reaparición predecible de los síntomas parkinsonianos (bradicinesia, rigidez, temblor) antes de la siguiente dosis programada de levodopa. Discinesia peak-dose: movimientos coreiformes involuntarios que coinciden con el pico de concentración plasmática del fármaco, entre 30-90 minutos después de la toma. Discinesia difásica (menos frecuente): movimientos distónicos/coreiformes al inicio y al final del efecto de cada dosis, con buen control motor en el pico intermedio. Fenómenos on-off: transiciones impredecibles y abruptas entre un buen control motor ("on") y un estado parkinsoniano marcado ("off"), sin relación clara con el horario de dosificación.',
      criterios_dx: 'Diagnóstico clínico mediante la correlación temporal cuidadosa entre el horario de dosificación de levodopa y el patrón de síntomas, idealmente documentada con un diario de síntomas motor llevado por el paciente o el cuidador.',
      laboratorio: 'No específico para el diagnóstico de estas complicaciones en sí.',
      imagen: 'No indicada de rutina para el diagnóstico de estas complicaciones.',
      complementarios: 'Diario motor estructurado (registro horario de los estados on/off y la presencia de discinesias) como herramienta central para guiar el ajuste terapéutico.',
      dx_diferencial: 'Progresión natural de la enfermedad sin verdadera fluctuación relacionada con la dosis (requiere ajuste de la estrategia terapéutica global, no solo del horario de dosificación).',
      tx_medico: 'Wearing-off: fraccionar la dosis de levodopa en tomas más frecuentes y de menor cantidad, o agregar un inhibidor de la COMT (entacapona) o un inhibidor de la MAO-B para prolongar la vida media efectiva de cada dosis. Discinesia peak-dose: reducir la dosis individual de levodopa (fraccionando en más tomas para mantener la dosis diaria total), o agregar amantadina (con evidencia específica para reducir discinesias). Casos avanzados refractarios a estos ajustes: considerar estimulación cerebral profunda o infusión continua de levodopa-carbidopa intestinal.',
      tx_farmacologico: 'Entacapona (inhibidor de la COMT) o inhibidores de la MAO-B como adyuvantes para el wearing-off; amantadina para las discinesias peak-dose; ajuste fino del fraccionamiento y la dosis de levodopa como la intervención más frecuentemente empleada en ambos escenarios.',
      tx_intervencionista: 'Estimulación cerebral profunda del núcleo subtalámico, o infusión continua intestinal de levodopa-carbidopa mediante gastrostomía, en las complicaciones motoras avanzadas y refractarias al ajuste farmacológico oral óptimo.',
      criterios_uci: 'No aplica de forma característica; un estado "off" prolongado y grave con inmovilidad significativa podría requerir manejo hospitalario de soporte en casos extremos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Mantener estrictamente el horario habitual de dosificación de levodopa del paciente durante cualquier hospitalización, dado el riesgo de un estado "off" grave o incluso un síndrome neuroléptico maligno-símil si se omite o retrasa significativamente.',
      seguimiento_ambulatorio: 'Seguimiento neurológico especializado con ajuste progresivo del esquema de dosificación mediante diario motor, y evaluación oportuna para terapias avanzadas (estimulación cerebral profunda, infusión intestinal) cuando el ajuste oral ya no es suficiente.',
      pronostico: 'Manejable con ajuste terapéutico cuidadoso en la mayoría de los casos durante varios años adicionales; eventualmente, una proporción de pacientes requiere terapias avanzadas (estimulación cerebral profunda, infusión continua) cuando el ajuste oral se vuelve insuficiente.',
      algoritmo: ['Correlacionar el horario de síntomas con el horario de dosificación de levodopa mediante diario motor', 'Wearing-off → fraccionar dosis, agregar inhibidor de la COMT o MAO-B', 'Discinesia peak-dose → reducir dosis individual (fraccionando más), considerar amantadina', 'Nunca omitir ni retrasar significativamente la levodopa durante una hospitalización', 'Complicaciones refractarias al ajuste oral → evaluar estimulación cerebral profunda o infusión intestinal continua']
    },
    {
      nombre: 'Demencia y deterioro cognitivo asociado a Parkinson',
      color: '#6b4a2e',
      definicion: 'Deterioro cognitivo progresivo que se desarrolla en el curso de la enfermedad de Parkinson establecida, distinguido de la demencia por cuerpos de Lewy mediante la "regla del año" (el deterioro cognitivo que aparece más de 1 año después del inicio motor se clasifica como demencia asociada a Parkinson; si aparece antes o simultáneamente, se clasifica como demencia por cuerpos de Lewy), reflejando un espectro patológico compartido de depósito de alfa-sinucleína.',
      fisiopatologia: 'La misma patología de cuerpos de Lewy (depósito de alfa-sinucleína) que inicialmente predomina en la sustancia negra en la enfermedad de Parkinson se distribuye progresivamente hacia estructuras corticales y límbicas con el tiempo, produciendo un perfil cognitivo característico de predominio disejecutivo y visuoespacial (a diferencia del predominio amnésico típico de la enfermedad de Alzheimer), con frecuencia acompañado de fluctuaciones cognitivas y alucinaciones visuales.',
      epidemiologia: 'Una proporción considerable de los pacientes con enfermedad de Parkinson de larga evolución desarrolla demencia; el riesgo aumenta con la duración de la enfermedad y la edad de inicio más avanzada.',
      factores_riesgo: ['Duración prolongada de la enfermedad de Parkinson', 'Edad de inicio más avanzada', 'Deterioro cognitivo leve ya presente en etapas más tempranas de la enfermedad', 'Alucinaciones visuales tempranas (marcador de mayor riesgo de progresión a demencia)'],
      clinica: 'Disfunción ejecutiva (dificultad de planificación, flexibilidad cognitiva), déficit visuoespacial, enlentecimiento cognitivo (bradifrenia), con relativa preservación de la memoria episódica en etapas iniciales (a diferencia del Alzheimer); fluctuaciones cognitivas día a día y alucinaciones visuales complejas (con frecuencia bien formadas, de personas o animales) son características asociadas frecuentes.',
      criterios_dx: 'Diagnóstico clínico mediante evaluación neurocognitiva formal en un paciente con enfermedad de Parkinson establecida (típicamente varios años de evolución motora) que desarrolla deterioro cognitivo suficiente para afectar la independencia funcional.',
      laboratorio: 'Panel metabólico y función tiroidea para descartar causas alternativas o contribuyentes reversibles del deterioro cognitivo.',
      imagen: 'Resonancia magnética para descartar otras causas contribuyentes (enfermedad cerebrovascular concomitante, atrofia desproporcionada sugestiva de otro diagnóstico).',
      complementarios: 'Evaluación neuropsicológica formal para caracterizar el perfil cognitivo específico (disejecutivo/visuoespacial) y diferenciarlo de otras causas de demencia.',
      dx_diferencial: 'Demencia por cuerpos de Lewy (deterioro cognitivo que precede o coincide con el inicio motor, en lugar de aparecer años después, ver la "regla del año"), enfermedad de Alzheimer concomitante (perfil amnésico predominante, puede coexistir), delirium superpuesto (de inicio agudo, fluctuante, con causa precipitante identificable, a diferencia del curso crónico progresivo).',
      tx_medico: 'Inhibidores de la colinesterasa (particularmente rivastigmina, con la evidencia más sólida en este contexto específico) para el componente cognitivo; evitar activamente los fármacos anticolinérgicos (usados en otros contextos de trastornos del movimiento) y minimizar los agonistas dopaminérgicos si contribuyen a alucinaciones o confusión, ajustando el esquema motor con precaución para no empeorar excesivamente el control motor.',
      tx_farmacologico: 'Rivastigmina como el inhibidor de colinesterasa con mejor evidencia específica en la demencia asociada a Parkinson; evitar anticolinérgicos (empeoran la cognición) y usar con cautela los antipsicóticos si se requieren para síntomas conductuales (ver Psicosis en esta sección para el manejo específico de las alucinaciones).',
      tx_intervencionista: 'La estimulación cerebral profunda NO está indicada, y de hecho está relativamente contraindicada, en el paciente con deterioro cognitivo significativo ya establecido, dado el riesgo de empeoramiento cognitivo posquirúrgico.',
      criterios_uci: 'No aplica de forma característica a esta complicación en sí.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de delirium superpuesto durante cualquier hospitalización, dado que el paciente con deterioro cognitivo de base tiene mayor riesgo de descompensación cognitiva aguda ante cualquier estrés fisiológico.',
      seguimiento_ambulatorio: 'Seguimiento neurocognitivo periódico; apoyo estructurado al cuidador dado el impacto funcional progresivo; planificación anticipada de cuidados conforme progresa la enfermedad.',
      pronostico: 'Progresivo, con impacto sustancial en la independencia funcional y la carga del cuidador; la demencia establecida es también un marcador de mal pronóstico global en la enfermedad de Parkinson.',
      algoritmo: ['Deterioro cognitivo &gt;1 año después del inicio motor en Parkinson establecido → demencia asociada a Parkinson (regla del año)', 'Evaluación neuropsicológica para confirmar el perfil disejecutivo/visuoespacial característico', 'Rivastigmina como tratamiento de primera línea del componente cognitivo', 'Evitar anticolinérgicos; minimizar agonistas dopaminérgicos si contribuyen a alucinaciones/confusión', 'Contraindicación relativa de estimulación cerebral profunda si ya hay deterioro cognitivo significativo']
    },
    {
      nombre: 'Disfunción autonómica',
      color: '#7a1f3d',
      definicion: 'Espectro de manifestaciones de disfunción del sistema nervioso autónomo en la enfermedad de Parkinson (hipotensión ortostática, estreñimiento, disfunción urinaria, sialorrea, disfunción sexual, y anomalías de la termorregulación), reflejando la afectación progresiva de estructuras autonómicas periféricas y centrales por el mismo proceso patológico de depósito de alfa-sinucleína.',
      fisiopatologia: 'El depósito de alfa-sinucleína en la enfermedad de Parkinson no se limita al sistema nigroestriatal, sino que afecta también los núcleos autonómicos del tronco encefálico, los ganglios simpáticos periféricos, y el plexo mientérico entérico; la hipotensión ortostática refleja tanto la denervación simpática cardiovascular periférica como, en parte, un efecto contribuyente de la propia medicación dopaminérgica (que puede tener un efecto vasodilatador leve); el estreñimiento refleja la afectación temprana del plexo mientérico (con frecuencia precede a los síntomas motores por años, un dato de interés fisiopatológico).',
      epidemiologia: 'La disfunción autonómica es extremadamente frecuente en la enfermedad de Parkinson establecida, y el estreñimiento en particular puede preceder el diagnóstico motor por años, siendo reconocido como un posible marcador prodrómico temprano.',
      factores_riesgo: ['Duración más prolongada de la enfermedad de Parkinson', 'Dosis más altas de tratamiento dopaminérgico (contribuye a la hipotensión ortostática)', 'Deshidratación o depleción de volumen concomitante (agrava la hipotensión ortostática)'],
      clinica: 'Hipotensión ortostática: mareo, presíncope, o síncope franco al incorporarse, con frecuencia agravado tras las comidas (hipotensión posprandial) o en ambientes calurosos. Estreñimiento: con frecuencia significativo y de difícil manejo. Disfunción urinaria: urgencia y frecuencia predominantemente (patrón hiperactivo más que retención, a diferencia de otras causas neurológicas). Sialorrea: por reducción de la deglución automática de saliva más que por hipersecreción verdadera.',
      criterios_dx: 'Medición de presión arterial en decúbito y de pie (a los 1 y 3 minutos) para documentar la hipotensión ortostática (caída ≥20 mmHg sistólica o ≥10 mmHg diastólica); diagnóstico clínico para los demás componentes según el síntoma predominante.',
      laboratorio: 'No específico; descartar causas contribuyentes alternativas (anemia, deshidratación) si la hipotensión ortostática es desproporcionada.',
      imagen: 'No indicada de rutina para el diagnóstico de la disfunción autonómica en sí.',
      complementarios: 'Monitorización ambulatoria de la presión arterial en casos seleccionados para caracterizar el patrón de hipotensión ortostática/posprandial a lo largo del día.',
      dx_diferencial: 'Hipotensión ortostática por otras causas (deshidratación aislada, efecto de otros fármacos antihipertensivos concomitantes que deben revisarse activamente), atrofia multisistémica (disfunción autonómica considerablemente más grave y de inicio más temprano en el curso de la enfermedad, un dato que ayuda a distinguirla del Parkinson idiopático).',
      tx_medico: 'Hipotensión ortostática: medidas no farmacológicas primero (hidratación adecuada, elevación de la cabecera durante el sueño, medias de compresión, evitar levantarse rápidamente), revisión y reducción de fármacos antihipertensivos concomitantes innecesarios, y tratamiento farmacológico específico si persiste sintomática. Estreñimiento: manejo escalonado con fibra, hidratación, y laxantes según necesidad. Sialorrea: toxina botulínica en las glándulas salivales en casos refractarios a medidas simples.',
      tx_farmacologico: 'Fludrocortisona o midodrina para la hipotensión ortostática sintomática que no responde a medidas no farmacológicas; laxantes osmóticos o estimulantes escalonados para el estreñimiento; anticolinérgicos vesicales con precaución (pueden empeorar la cognición, particularmente relevante si coexiste deterioro cognitivo, ver esa complicación) para la urgencia urinaria.',
      tx_intervencionista: 'Toxina botulínica en glándulas salivales para la sialorrea refractaria a manejo conservador.',
      criterios_uci: 'Síncope recurrente con traumatismo asociado o hipotensión ortostática grave refractaria podría justificar evaluación hospitalaria, aunque no es característico el manejo en cuidados críticos de esta complicación en sí.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la presión arterial en decúbito y de pie durante cualquier hospitalización, dado el riesgo de caídas asociado a la hipotensión ortostática.',
      seguimiento_ambulatorio: 'Reevaluación periódica de síntomas autonómicos y ajuste escalonado del manejo; educación sobre medidas posturales y de hidratación para minimizar el riesgo de caídas.',
      pronostico: 'Manejable en la mayoría de los casos con medidas escalonadas, aunque puede tener un impacto funcional y en la calidad de vida considerable, particularmente la hipotensión ortostática sintomática recurrente con riesgo de caídas.',
      algoritmo: ['Medir presión arterial en decúbito y de pie (1 y 3 min) en todo paciente con Parkinson y síntomas sugestivos de hipotensión ortostática', 'Medidas no farmacológicas primero: hidratación, elevación de cabecera, medias de compresión, revisar antihipertensivos concomitantes', 'Fludrocortisona o midodrina si persiste sintomática', 'Manejo escalonado específico del estreñimiento, la disfunción urinaria, y la sialorrea según el síntoma predominante', 'Vigilar riesgo de caídas asociado, particularmente durante hospitalizaciones']
    },
    {
      nombre: 'Psicosis inducida por fármacos dopaminérgicos',
      color: '#8c6b2d',
      definicion: 'Alucinaciones (predominantemente visuales) y/o delirios que se desarrollan o se agravan en el contexto del tratamiento dopaminérgico de la enfermedad de Parkinson, reflejando tanto un efecto farmacológico directo del exceso relativo de estimulación dopaminérgica como la vulnerabilidad neurodegenerativa subyacente del paciente.',
      fisiopatologia: 'El tratamiento dopaminérgico (levodopa, agonistas dopaminérgicos) puede producir un exceso relativo de estimulación dopaminérgica en vías mesolímbicas/mesocorticales no relacionadas con el control motor, produciendo alucinaciones y delirios de forma análoga al mecanismo de la psicosis inducida por otros agonistas dopaminérgicos; la vulnerabilidad a este efecto aumenta considerablemente conforme progresa la neurodegeneración cortical/límbica subyacente (particularmente cuando coexiste demencia, ver esa complicación), explicando por qué la misma dosis de tratamiento tolerada durante años puede volverse psicotogénica conforme evoluciona la enfermedad.',
      epidemiologia: 'Ocurre en una proporción considerable de los pacientes con enfermedad de Parkinson de larga evolución, particularmente en presencia de deterioro cognitivo concomitante, infección intercurrente, o ajustes recientes del tratamiento dopaminérgico.',
      factores_riesgo: ['Deterioro cognitivo o demencia concomitante (el factor de riesgo más fuerte)', 'Duración prolongada de la enfermedad y del tratamiento dopaminérgico', 'Infección intercurrente u otra alteración metabólica aguda (factor precipitante frecuente de un episodio agudo sobre una vulnerabilidad crónica de base)', 'Aumento reciente de la dosis dopaminérgica'],
      clinica: 'Alucinaciones visuales características (con frecuencia bien formadas: personas, animales, o figuras), inicialmente con frecuencia con conciencia parcial de que no son reales (insight preservado en etapas tempranas, que se pierde conforme progresa); delirios (con frecuencia de tipo paranoide, celotípico) en casos más avanzados; puede coexistir o ser precipitada por un episodio de delirium superpuesto.',
      criterios_dx: 'Diagnóstico clínico en el contexto de tratamiento dopaminérgico activo, tras descartar activamente una causa metabólica o infecciosa aguda precipitante (delirium) que requiera tratamiento específico independiente.',
      laboratorio: 'Panel metabólico, examen general de orina, y biometría hemática para descartar un factor precipitante metabólico o infeccioso agudo antes de atribuir la psicosis exclusivamente al tratamiento dopaminérgico.',
      imagen: 'No indicada de rutina, salvo para descartar una causa estructural alternativa si el cuadro es atípico.',
      complementarios: 'Revisión completa y cronológica de todos los cambios recientes en el esquema dopaminérgico, dado que con frecuencia hay un ajuste temporal claro que precede al inicio de la psicosis.',
      dx_diferencial: 'Delirium por causa metabólica/infecciosa intercurrente (debe descartarse y tratarse activamente antes o en paralelo al ajuste dopaminérgico), demencia con cuerpos de Lewy con alucinaciones ya presentes independientemente del tratamiento (ver esa entidad en el diferencial de la demencia asociada a Parkinson), trastorno psiquiátrico primario no relacionado (infrecuente como diagnóstico nuevo en este grupo etario).',
      tx_medico: 'Primer paso: descartar y tratar cualquier causa metabólica/infecciosa precipitante. Segundo paso: simplificar y reducir el esquema dopaminérgico en el orden habitual de menor a mayor impacto motor (suspender primero los agentes con mayor propensión psicotogénica y menor beneficio motor relativo: anticolinérgicos, luego amantadina, luego agonistas dopaminérgicos, dejando la levodopa como el agente de mayor beneficio motor para el final del ajuste), aceptando cierto compromiso motor transitorio si es necesario para controlar la psicosis.',
      tx_farmacologico: 'Si la simplificación del esquema dopaminérgico es insuficiente o no es posible sin comprometer gravemente la función motora: pimavanserina (agente antipsicótico atípico sin actividad antagonista dopaminérgica significativa, por lo que no empeora el parkinsonismo motor) como primera línea específica; quetiapina o clozapina en dosis bajas como alternativas si la pimavanserina no está disponible, dado su perfil relativamente más favorable sobre el sistema motor comparado con otros antipsicóticos; EVITAR activamente los antipsicóticos típicos y la mayoría de los atípicos de alta potencia dopaminérgica (haloperidol, risperidona, olanzapina), que empeoran marcadamente el parkinsonismo motor.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Psicosis grave con agitación significativa o riesgo para el paciente/terceros podría requerir manejo hospitalario intensivo, aunque no es característico el manejo en cuidados críticos exclusivamente por esta complicación.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Descartar activamente delirium superpuesto por causa metabólica/infecciosa en todo paciente hospitalizado con Parkinson que desarrolla nuevas alucinaciones o confusión.',
      seguimiento_ambulatorio: 'Seguimiento neurológico/psiquiátrico coordinado para el ajuste continuado del esquema dopaminérgico y antipsicótico según la evolución; educación del cuidador sobre el reconocimiento temprano de los síntomas psicóticos.',
      pronostico: 'Manejable en muchos casos con simplificación cuidadosa del esquema y, si es necesario, pimavanserina; la psicosis establecida es un marcador de mal pronóstico global y un factor de riesgo conocido para la institucionalización.',
      algoritmo: ['Alucinaciones/delirios en paciente con Parkinson en tratamiento dopaminérgico → descartar y tratar primero causa metabólica/infecciosa precipitante', 'Simplificar el esquema dopaminérgico: suspender primero anticolinérgicos, luego amantadina, luego agonistas dopaminérgicos, dejando levodopa para el final', 'Si persiste pese a la simplificación → pimavanserina como primera línea específica (no empeora el parkinsonismo motor)', 'EVITAR antipsicóticos típicos y atípicos de alta potencia dopaminérgica (empeoran marcadamente el parkinsonismo)', 'Vigilar activamente el desarrollo de demencia concomitante, el factor de riesgo más fuerte para esta complicación']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en la enfermedad de Parkinson (dado que las otras 3 entidades rara vez requieren manejo hospitalario agudo): nunca suspender ni retrasar la levodopa, y vigilar activamente las 4 complicaciones desarrolladas en este tema.',
    parametros: ['Horario estricto de dosificación de levodopa/tratamiento dopaminérgico habitual', 'Presión arterial en decúbito y de pie (riesgo de hipotensión ortostática y caídas)', 'Estado cognitivo y aparición de nuevas alucinaciones/confusión', 'Función motora basal para detectar deterioro por omisión o retraso del tratamiento habitual'],
    criterios_uci_general: 'No característico para las 4 entidades de este tema; complicaciones específicas (crisis distónica generalizada grave, psicosis grave con agitación significativa) pueden justificar manejo intensivo en casos seleccionados.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Nunca suspender abruptamente la levodopa en el paciente hospitalizado (riesgo de síndrome neuroléptico maligno-símil); evitar antagonistas dopaminérgicos (muchos antieméticos y antipsicóticos típicos) en cualquier paciente con enfermedad de Parkinson conocida, dado que empeoran marcadamente el control motor; diario motor estructurado para el ajuste temprano de las complicaciones motoras antes de que se vuelvan incapacitantes.'
  }
};

export const compCites = {
  'Enfermedad de Parkinson': [0, 1, 2],
  'Temblor esencial': [4],
  'Distonía': [5],
  'Corea y enfermedad de Huntington': [6],
  'Complicaciones motoras del tratamiento dopaminérgico': [12, 13],
  'Demencia y deterioro cognitivo asociado a Parkinson': [8, 9],
  'Disfunción autonómica': [10],
  'Psicosis inducida por fármacos dopaminérgicos': [11]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'Escala de Hoehn y Yahr': [2] };
export const escalaCalc = { 'Escala de Hoehn y Yahr': 'hoehn-yahr' };
export const compGroups = [
  { name: 'Entidades', items: ['Enfermedad de Parkinson', 'Temblor esencial', 'Distonía', 'Corea y enfermedad de Huntington'] },
  { name: 'Complicaciones (enfermedad de Parkinson)', items: ['Complicaciones motoras del tratamiento dopaminérgico', 'Demencia y deterioro cognitivo asociado a Parkinson', 'Disfunción autonómica', 'Psicosis inducida por fármacos dopaminérgicos'] }
];
export const complicacionesIntro = 'Las primeras 4 fichas son los patrones principales: 1 hipocinético (enfermedad de Parkinson) y 3 hipercinéticos (temblor esencial, distonía, corea/Huntington). Las siguientes 4 son las complicaciones reales, todas centradas en la enfermedad de Parkinson por concentrar la mayoría de la morbilidad tratable a largo plazo: complicaciones motoras del tratamiento dopaminérgico, demencia/deterioro cognitivo, disfunción autonómica, y psicosis inducida por fármacos dopaminérgicos.';
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
  root: { title: 'TRASTORNOS DEL MOVIMIENTO', color: '#3f6b52', target: 'definicion' },
  branches: [
    { title: 'Patrones principales', sub: 'Hipocinético e hipercinéticos', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Enfermedad de Parkinson', sub: 'Hipocinético', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Temblor esencial', sub: 'El temblor más frecuente', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Distonía', sub: 'Focal o generalizada', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Corea y Huntington', sub: 'CAG repeats, gen HTT', color: '#7a4363', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones de Parkinson', sub: 'Concentran la morbilidad tratable', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Complicaciones motoras', sub: 'Wearing-off, discinesias', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Demencia/deterioro cognitivo', sub: 'Regla del año vs. cuerpos de Lewy', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Disfunción autonómica', sub: 'Hipotensión ortostática, estreñimiento', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Psicosis dopaminérgica', sub: 'Alucinaciones visuales', color: '#8c6b2d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [2] };
export const clasificacionCite = [2];
export const seguimientoCite = [13];
