// topics/leucemia-aguda/study.js: Autoevaluación de Leucemia Aguda.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoría lógica y longitud comparable
// entre opciones, distractores plausibles, sin pistas gramaticales/semánticas, posición de
// `correct` distribuida sin patrón (verificar el listado de índices antes de dar el archivo por
// terminado).
// IMPORTANTE (ver memoria del proyecto): cada `correct` se construyó colocando el texto correcto
// FÍSICAMENTE en el índice objetivo (no reordenando después) y se releyó options+correct+
// explanation juntos por pregunta antes de cerrar el archivo, no solo el conteo de distribución.
//
// Índices `correct` de las 30 preguntas sueltas, en orden: 2,0,3,1,2,1,3,0,2,1,0,3,1,2,0,3,1,2,0,
// 3,1,0,2,3,1,0,2,3,1,0. Recuento: 0×8, 1×8, 2×7, 3×7. Sin racha >2 ni ciclo fijo.
// Índices `correct` de los pasos de las 5 preguntas en cascada (3 pasos c/u), en orden: 0,1,2 /
// 2,0,3 / 1,3,0 / 0,2,1 / 3,1,2. Recuento: 0×4, 1×4, 2×4, 3×3.

export const quiz = [
  { q: '¿Cuál es el defecto celular central de toda leucemia aguda?', options: ['Exceso de producción de eritrocitos', 'Deficiencia de hierro en precursores', 'Bloqueo de la maduración celular', 'Destrucción autoinmune de precursores'], correct: 2, explanation: 'El defecto central de toda leucemia aguda es el bloqueo de la maduración: los blastos proliferan sin diferenciarse a células maduras funcionales.', dificultad: 'facil' },
  { q: '¿Cuál es la leucemia aguda más frecuente en el adulto?', options: ['Leucemia mieloide aguda', 'Leucemia linfoblástica aguda', 'Leucemia promielocítica aguda', 'Leucemia mieloide crónica'], correct: 0, explanation: 'La leucemia mieloide aguda (LMA) es la leucemia aguda más frecuente en el adulto.', dificultad: 'facil' },
  { q: '¿Qué hallazgo morfológico en el frotis es patognomónico de origen mieloide cuando está presente?', options: ['Los linfocitos atípicos', 'Los cuerpos de Howell-Jolly', 'Las células en diana', 'Los bastones de Auer'], correct: 3, explanation: 'Los bastones de Auer (agregados de gránulos primarios) son patognomónicos de origen mieloide cuando están presentes.', dificultad: 'intermedio' },
  { q: '¿Qué determina el grupo de riesgo ELN en la leucemia mieloide aguda?', options: ['La edad del paciente al diagnóstico', 'Las alteraciones citogenéticas', 'El recuento leucocitario inicial', 'El sexo biológico del paciente'], correct: 1, explanation: 'El grupo de riesgo ELN se determina por las anomalías citogenéticas y moleculares recurrentes, clasificadas como favorable, intermedio, o adverso.', dificultad: 'intermedio' },
  { q: '¿Qué determina si se recomienda trasplante alogénico en primera remisión en la LMA?', options: ['La preferencia del paciente', 'El grupo sanguíneo ABO', 'El grupo de riesgo ELN', 'El tiempo desde el diagnóstico'], correct: 2, explanation: 'El grupo de riesgo citogenético/molecular ELN determina si se recomienda trasplante alogénico en primera remisión (grupo intermedio/adverso).', dificultad: 'intermedio' },
  { q: '¿Cuál es la translocación característica que define la leucemia promielocítica aguda?', options: ['La t(9;22), BCR-ABL1', 'La t(15;17), PML-RARA', 'La t(8;21), RUNX1-RUNX1T1', 'La inv(16), CBFB-MYH11'], correct: 1, explanation: 'La leucemia promielocítica aguda está definida por la translocación t(15;17), que produce el gen de fusión PML-RARA.', dificultad: 'facil' },
  { q: '¿Cuál es el mecanismo de acción del ATRA en la leucemia promielocítica aguda?', options: ['Destruye por citotoxicidad directa', 'Inhibe la angiogénesis tumoral', 'Bloquea el receptor de andrógenos', 'Induce la diferenciación terminal'], correct: 3, explanation: 'El ATRA induce la diferenciación terminal de los promielocitos leucémicos hacia granulocitos maduros, revirtiendo el bloqueo de maduración.', dificultad: 'intermedio' },
  { q: '¿Cuál es la conducta apropiada ante la sospecha morfológica de leucemia promielocítica aguda?', options: ['Iniciar ATRA sin esperar confirmación', 'Esperar la confirmación molecular', 'Quimioterapia convencional sin ATRA', 'Referir a biopsia quirúrgica abierta'], correct: 0, explanation: 'Ante la sospecha morfológica de LPA, debe iniciarse ATRA de inmediato sin esperar la confirmación molecular, dado el riesgo de muerte hemorrágica temprana.', dificultad: 'dificil' },
  { q: '¿Cuál es la causa más frecuente de muerte temprana en la leucemia promielocítica aguda no tratada a tiempo?', options: ['Sepsis fulminante temprana', 'Síndrome de lisis tumoral', 'Hemorragia intracraneal', 'Insuficiencia cardiaca aguda'], correct: 2, explanation: 'La hemorragia, particularmente intracraneal, por la coagulopatía característica es la causa más frecuente de muerte temprana en la LPA no tratada a tiempo.', dificultad: 'intermedio' },
  { q: '¿Cuál es la leucemia más frecuente en la infancia?', options: ['Leucemia mieloide aguda', 'Leucemia linfoblástica aguda', 'Leucemia promielocítica aguda', 'Leucemia mieloide crónica'], correct: 1, explanation: 'La leucemia linfoblástica aguda (LLA) es la leucemia más frecuente en la infancia.', dificultad: 'facil' },
  { q: '¿Qué reordenamiento cromosómico debe buscarse sistemáticamente en la LLA por sus implicaciones terapéuticas?', options: ['La t(9;22), Filadelfia', 'La t(15;17), PML-RARA', 'La inv(16), CBFB-MYH11', 'La t(8;21), RUNX1-RUNX1T1'], correct: 0, explanation: 'El cromosoma Filadelfia, t(9;22)/BCR-ABL1, debe buscarse sistemáticamente en la LLA dado que responde a inhibidores de tirosina cinasa.', dificultad: 'intermedio' },
  { q: '¿Por qué se realiza punción lumbar sistemática al diagnóstico en la LLA, a diferencia de la LMA?', options: ['Para descartar meningitis bacteriana', 'Es un requisito administrativo', 'Para medir la presión intracraneal', 'Por su propensión a infiltrar el SNC'], correct: 3, explanation: 'La LLA tiene mayor propensión a la infiltración del sistema nervioso central que la LMA, de ahí el cribado sistemático con punción lumbar.', dificultad: 'intermedio' },
  { q: '¿Qué subtipo de LLA se asocia característicamente a masa mediastínica anterior?', options: ['La LLA de linaje B', 'La LLA de linaje T', 'La LLA con Filadelfia', 'La LLA de células maduras'], correct: 1, explanation: 'La LLA de linaje T se asocia característicamente a masa mediastínica anterior, con riesgo de síndrome de vena cava superior.', dificultad: 'intermedio' },
  { q: '¿Cuál es el pronóstico relativo de la LLA en el adulto comparado con el niño?', options: ['Considerablemente mejor en el adulto', 'Idéntico en ambos grupos', 'Considerablemente peor en el adulto', 'La LLA no ocurre en adultos'], correct: 2, explanation: 'El pronóstico de la LLA en el adulto es considerablemente peor que en el niño, en parte por diferencias biológicas y por menor tolerancia a protocolos intensivos.', dificultad: 'facil' },
  { q: '¿Qué caracteriza a la leucemia aguda relacionada a agentes alquilantes previos?', options: ['Latencia larga y cariotipo complejo', 'Latencia corta, con reordenamiento KMT2A', 'Se presenta solo en la edad pediátrica', 'Sin citogenética de alto riesgo'], correct: 0, explanation: 'La leucemia relacionada a agentes alquilantes tiene típicamente latencia larga (5-7 años) con anomalías citogenéticas complejas o pérdida de los cromosomas 5/7.', dificultad: 'dificil' },
  { q: '¿Cómo es el pronóstico de la leucemia aguda secundaria/relacionada a tratamiento comparado con la de novo?', options: ['Considerablemente mejor pronóstico', 'Pronóstico idéntico al de novo', 'No hay diferencia establecida', 'Considerablemente peor pronóstico'], correct: 3, explanation: 'El pronóstico de la leucemia aguda secundaria es considerablemente peor que la de novo, por el perfil citogenético de mayor riesgo y menor tolerancia al tratamiento intensivo.', dificultad: 'intermedio' },
  { q: '¿Cuáles son las 4 alteraciones metabólicas características del síndrome de lisis tumoral?', options: ['Hipopotasemia, hipofosfatemia, hipercalcemia', 'Hiperpotasemia, hiperfosfatemia, hipocalcemia', 'Hiperglucemia e hipernatremia aisladas', 'Hiponatremia e hipocloremia aisladas'], correct: 1, explanation: 'El síndrome de lisis tumoral produce hiperpotasemia, hiperfosfatemia, hipocalcemia secundaria, e hiperuricemia.', dificultad: 'facil' },
  { q: '¿Cuál es la manifestación más temida del síndrome de lisis tumoral?', options: ['Cefalea leve persistente', 'Rinorrea acuosa continua', 'Arritmia por hiperpotasemia', 'Prurito generalizado intenso'], correct: 2, explanation: 'La arritmia cardiaca fatal por hiperpotasemia es la manifestación más temida del síndrome de lisis tumoral.', dificultad: 'facil' },
  { q: '¿Qué fármaco es considerablemente más eficaz que el alopurinol para reducir el ácido úrico ya formado en el síndrome de lisis tumoral establecido?', options: ['Rasburicasa, urato oxidasa', 'Ibuprofeno en dosis altas', 'Furosemida por vía intravenosa', 'Insulina con solución glucosada'], correct: 0, explanation: 'La rasburicasa (urato oxidasa recombinante) es considerablemente más eficaz que el alopurinol para reducir el ácido úrico ya formado.', dificultad: 'intermedio' },
  { q: '¿Por qué la LLA tiene particularmente alto riesgo de síndrome de lisis tumoral?', options: ['No se trata con quimioterapia intensiva', 'Cursa con recuentos leucocitarios bajos', 'No produce ácido úrico en exceso', 'Por su alta quimiosensibilidad inicial'], correct: 3, explanation: 'La alta quimiosensibilidad inicial de la LLA produce lisis celular masiva y rápida, elevando el riesgo de síndrome de lisis tumoral.', dificultad: 'intermedio' },
  { q: '¿Qué contienen los gránulos de los promielocitos leucémicos que explican la coagulopatía de la LPA?', options: ['Hemoglobina fetal residual', 'Factor tisular procoagulante', 'Insulina y proinsulina', 'Eritropoyetina almacenada'], correct: 1, explanation: 'Los gránulos de los promielocitos leucémicos contienen factor tisular y otras sustancias procoagulantes, explicando la coagulopatía característica.', dificultad: 'intermedio' },
  { q: '¿Cuál es la conducta transfusional recomendada durante la inducción de la LPA?', options: ['Transfusión proactiva de plaquetas', 'Transfusión reactiva solo ante sangrado', 'Evitar toda transfusión en la inducción', 'Transfundir solo si el paciente lo pide'], correct: 0, explanation: 'Se recomienda transfusión agresiva y proactiva (no solo reactiva) de plaquetas y fibrinógeno durante toda la inducción de la LPA.', dificultad: 'intermedio' },
  { q: '¿Cuáles son los síntomas característicos del síndrome de diferenciación tras iniciar ATRA/trióxido de arsénico?', options: ['Solo fiebre aislada sin otros datos', 'Solo diarrea crónica persistente', 'Fiebre, disnea e infiltrados nuevos', 'Solo cefalea sin otros hallazgos'], correct: 2, explanation: 'El síndrome de diferenciación se caracteriza por fiebre, disnea progresiva, infiltrados pulmonares nuevos, derrames, y edema.', dificultad: 'intermedio' },
  { q: '¿Cuál es el tratamiento del síndrome de diferenciación ante la sospecha clínica?', options: ['Suspender el ATRA de forma permanente', 'Antibiótico de amplio espectro solo', 'Observación sin tratamiento activo', 'Dexametasona sistémica de inmediato'], correct: 3, explanation: 'Ante la sospecha de síndrome de diferenciación, debe iniciarse corticoide sistémico (dexametasona) de inmediato, sin esperar confirmación adicional.', dificultad: 'intermedio' },
  { q: '¿Qué es la leucostasis?', options: ['Una anemia hemolítica autoinmune', 'Leucocitos que ocluyen los capilares', 'Una deficiencia de vitamina B12', 'Una infección viral generalizada'], correct: 1, explanation: 'La leucostasis es la oclusión de la microcirculación de órganos vitales por un recuento leucocitario extremadamente elevado.', dificultad: 'facil' },
  { q: '¿Por qué debe evitarse la transfusión eritrocitaria no urgente en el paciente con leucostasis activa?', options: ['Aumenta la viscosidad sanguínea', 'No modifica la viscosidad sanguínea', 'Produce una reacción alérgica grave', 'Reduce el recuento leucocitario'], correct: 0, explanation: 'La transfusión eritrocitaria puede aumentar la viscosidad sanguínea y empeorar agudamente la leucostasis.', dificultad: 'dificil' },
  { q: '¿Qué procedimiento se considera como medida puente urgente en la leucostasis grave sintomática, particularmente en la LMA?', options: ['Esplenectomía urgente', 'Trasplante de médula inmediato', 'Leucaféresis terapéutica', 'Radioterapia craneal urgente'], correct: 2, explanation: 'La leucaféresis (aféresis terapéutica) se considera como medida puente urgente en la leucostasis grave sintomática, particularmente en la LMA.', dificultad: 'intermedio' },
  { q: '¿Qué sitios anatómicos actúan como "santuarios farmacológicos" en la leucemia aguda?', options: ['El hígado y el bazo', 'Los ganglios linfáticos', 'La propia médula ósea', 'El SNC y el testículo'], correct: 3, explanation: 'El sistema nervioso central y el testículo actúan como santuarios farmacológicos por la limitada penetración de la quimioterapia sistémica convencional.', dificultad: 'intermedio' },
  { q: '¿Qué es el cloroma (sarcoma mieloide)?', options: ['Un tipo de anemia hemolítica', 'Masa sólida de blastos mieloides', 'Una infección fúngica invasiva', 'Un trastorno de la coagulación'], correct: 1, explanation: 'El cloroma (sarcoma mieloide) es una masa tumoral sólida de blastos mieloides en un sitio extramedular.', dificultad: 'intermedio' },
  { q: '¿Cómo se confirma el diagnóstico de infiltración del sistema nervioso central en la leucemia aguda?', options: ['Blastos en la citología del LCR', 'Solo por los síntomas clínicos', 'Solo por electroencefalograma', 'Solo por tomografía sin contraste'], correct: 0, explanation: 'La infiltración del sistema nervioso central se confirma por blastos identificados en la citología del líquido cefalorraquídeo obtenido por punción lumbar.', dificultad: 'facil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Varón de 45 años presenta fatiga progresiva, equimosis fáciles y gingivorragia de 3 días de evolución. Biometría hemática: Hb 8 g/dL, leucocitos 3,500/µL, plaquetas 25,000/µL. El frotis muestra promielocitos anómalos con múltiples bastones de Auer.',
    steps: [
      { q: '¿Cuál es la sospecha diagnóstica más apropiada dado este cuadro?', options: ['Leucemia promielocítica aguda', 'Anemia aplásica', 'Mononucleosis infecciosa', 'Púrpura trombocitopénica inmune aislada'], correct: 0 },
      { q: '¿Cuál es la conducta más apropiada mientras se espera la confirmación molecular?', options: ['Esperar el resultado de PML-RARA', 'Iniciar ATRA de inmediato', 'Quimioterapia convencional sin ATRA', 'Alta con seguimiento ambulatorio'], correct: 1 },
      { q: '¿Qué medida adicional es esencial durante toda la inducción dado el cuadro hemorrágico y la trombocitopenia?', options: ['No se requiere medida adicional', 'Suspender la transfusión con ATRA', 'Transfusión proactiva de plaquetas', 'Iniciar anticoagulación sistémica'], correct: 2 }
    ],
    explanation: 'El cuadro hemorrágico con promielocitos anómalos y bastones de Auer múltiples es característico de leucemia promielocítica aguda. Debe iniciarse ATRA de inmediato sin esperar la confirmación molecular, dado el riesgo de muerte hemorrágica temprana. Durante toda la inducción es esencial la transfusión agresiva y proactiva de plaquetas y fibrinógeno.'
  },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 8 años presenta dolor óseo, palidez, y fiebre recurrente de 2 semanas de evolución. La biometría hemática muestra pancitopenia con 40% de blastos circulantes. El aspirado de médula ósea confirma linfoblastos de linaje B.',
    steps: [
      { q: '¿Cuál es el diagnóstico más probable?', options: ['Leucemia mieloide aguda', 'Leucemia promielocítica aguda', 'Leucemia linfoblástica aguda', 'Síndrome mielodisplásico'], correct: 2 },
      { q: '¿Qué estudio adicional debe realizarse sistemáticamente al diagnóstico, independientemente de la presencia de síntomas neurológicos?', options: ['Punción lumbar con citología', 'Biopsia hepática percutánea', 'Biopsia renal diagnóstica', 'Endoscopia digestiva alta'], correct: 0 },
      { q: '¿Qué reordenamiento cromosómico debe buscarse sistemáticamente dado que altera el tratamiento si está presente?', options: ['La t(15;17), PML-RARA', 'La inv(16), CBFB-MYH11', 'La t(8;21), RUNX1-RUNX1T1', 'La t(9;22), Filadelfia'], correct: 3 }
    ],
    explanation: 'El cuadro de pancitopenia con blastos linfoides de linaje B en una niña es característico de leucemia linfoblástica aguda. La punción lumbar con citología es sistemática al diagnóstico dado el riesgo de infiltración del sistema nervioso central. Debe buscarse sistemáticamente el cromosoma Filadelfia (BCR-ABL1), dado que su presencia justifica añadir un inhibidor de tirosina cinasa al tratamiento.'
  },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varón de 60 años con leucemia mieloide aguda recién diagnosticada presenta leucocitos de 150,000/µL. Antes de iniciar quimioterapia, desarrolla disnea progresiva y cefalea con confusión leve.',
    steps: [
      { q: '¿Qué sospecha diagnóstica plantea este cuadro?', options: ['Neumonía adquirida en la comunidad aislada', 'Leucostasis por hiperleucocitosis', 'Migraña sin relación', 'Reacción alérgica a un fármaco'], correct: 1 },
      { q: '¿Cuál es la conducta terapéutica más urgente?', options: ['Observar hasta iniciar la quimioterapia', 'Transfusión eritrocitaria inmediata', 'Alta con seguimiento ambulatorio', 'Citorreducción urgente con hidroxiurea'], correct: 3 },
      { q: '¿Qué otra complicación debe cribarse simultáneamente dado que comparte el mismo factor de riesgo de alta carga tumoral?', options: ['Síndrome de lisis tumoral', 'Deficiencia de hierro', 'Hipotiroidismo', 'Deficiencia de vitamina B12'], correct: 0 }
    ],
    explanation: 'La hiperleucocitosis marcada con síntomas respiratorios y neurológicos sugiere leucostasis. La conducta urgente es citorreducción (hidroxiurea) en paralelo con la preparación de la quimioterapia definitiva. Dado que comparte el factor de riesgo de alta carga tumoral, debe cribarse simultáneamente el síndrome de lisis tumoral.'
  },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 55 años con leucemia linfoblástica aguda de alta carga tumoral inicia quimioterapia de inducción. A las 30 horas presenta calambres musculares, y el laboratorio muestra potasio 6.2 mEq/L, fósforo elevado, y calcio bajo.',
    steps: [
      { q: '¿Qué diagnóstico explica mejor el cuadro?', options: ['Síndrome de lisis tumoral', 'Deshidratación aislada', 'Insuficiencia suprarrenal aguda', 'Hipertiroidismo'], correct: 0 },
      { q: '¿Cuál es la manifestación más temida de esta complicación que debe vigilarse activamente?', options: ['Rinorrea acuosa persistente', 'Prurito generalizado intenso', 'Arritmia por hiperpotasemia', 'Cefalea leve y aislada'], correct: 2 },
      { q: '¿Qué medida es apropiada dado el ácido úrico probablemente ya elevado en este contexto agudo?', options: ['Suspender la hidratación intravenosa', 'Rasburicasa, más eficaz que alopurinol', 'Iniciar quimioterapia adicional ya', 'Observación sin intervención activa'], correct: 1 }
    ],
    explanation: 'La hiperpotasemia, hiperfosfatemia e hipocalcemia tras iniciar quimioterapia en una leucemia de alta carga tumoral son características del síndrome de lisis tumoral. La arritmia cardiaca fatal por hiperpotasemia es la manifestación más temida. La rasburicasa es más eficaz que el alopurinol para reducir el ácido úrico ya formado en el síndrome establecido.'
  },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varón de 3 años con leucemia linfoblástica aguda en tratamiento presenta aumento de volumen testicular derecho, indoloro, de 2 semanas de evolución. Está en remisión medular documentada.',
    steps: [
      { q: '¿Cuál es la sospecha diagnóstica más apropiada dado este hallazgo pese a la remisión medular?', options: ['Torsión testicular aguda del cordón', 'Hidrocele congénito no relacionado', 'Orquitis viral aislada y benigna', 'Infiltración testicular leucémica'], correct: 3 },
      { q: '¿Por qué puede ocurrir esta infiltración pese a la remisión medular documentada?', options: ['La remisión medular no era real', 'La barrera hematotesticular', 'El testículo carece de flujo sanguíneo', 'La leucemia reaparece antes ahí'], correct: 1 },
      { q: '¿Cuál es el manejo más apropiado si se confirma la infiltración testicular?', options: ['Observación sin tratamiento adicional', 'Suspender la quimioterapia sistémica', 'Irradiación testicular dirigida', 'Esplenectomía programada'], correct: 2 }
    ],
    explanation: 'El aumento testicular indoloro en un niño con LLA en remisión medular sugiere infiltración testicular, un santuario farmacológico. Esto ocurre por una barrera hematotesticular que limita la penetración de la quimioterapia sistémica convencional, permitiendo que las células leucémicas persistan localmente. El manejo apropiado incluye irradiación testicular dirigida además de la quimioterapia sistémica.'
  }
];

export const flashcards = [
  { front: 'Defecto celular central de la leucemia aguda', back: 'Bloqueo de la maduración: proliferación sin diferenciación a células maduras.' },
  { front: 'Leucemia aguda más frecuente en el adulto', back: 'Leucemia mieloide aguda (LMA).' },
  { front: 'Hallazgo patognomónico de origen mieloide', back: 'Bastones de Auer.' },
  { front: 'Determinante de trasplante alogénico en primera remisión (LMA)', back: 'Grupo de riesgo citogenético/molecular ELN (intermedio/adverso).' },
  { front: 'Translocación de la leucemia promielocítica aguda', back: 't(15;17), gen de fusión PML-RARA.' },
  { front: 'Mecanismo del ATRA', back: 'Induce diferenciación terminal de promielocitos leucémicos a granulocitos maduros.' },
  { front: 'Conducta ante sospecha morfológica de LPA', back: 'Iniciar ATRA de inmediato, sin esperar confirmación molecular.' },
  { front: 'Causa más frecuente de muerte temprana en LPA', back: 'Hemorragia (particularmente intracraneal) por la coagulopatía.' },
  { front: 'Leucemia más frecuente en la infancia', back: 'Leucemia linfoblástica aguda (LLA).' },
  { front: 'Reordenamiento a buscar sistemáticamente en LLA', back: 't(9;22), BCR-ABL1 (cromosoma Filadelfia) — responde a inhibidores de tirosina cinasa.' },
  { front: 'Por qué punción lumbar sistemática en LLA', back: 'Mayor propensión a infiltración del sistema nervioso central que la LMA.' },
  { front: 'Subtipo de LLA con masa mediastínica anterior', back: 'LLA de linaje T.' },
  { front: 'Pronóstico de LLA: adulto vs. niño', back: 'Considerablemente peor en el adulto.' },
  { front: 'Leucemia secundaria a alquilantes', back: 'Latencia larga (5-7 años), anomalías complejas o pérdida de cromosomas 5/7.' },
  { front: 'Leucemia secundaria a inhibidores de topoisomerasa II', back: 'Latencia corta (1-3 años), reordenamiento de KMT2A.' },
  { front: 'Pronóstico de leucemia aguda secundaria', back: 'Peor que la de novo (citogenética + menor tolerancia al tratamiento).' },
  { front: '4 alteraciones del síndrome de lisis tumoral', back: 'Hiperpotasemia, hiperfosfatemia, hipocalcemia, hiperuricemia.' },
  { front: 'Manifestación más temida del síndrome de lisis tumoral', back: 'Arritmia cardiaca fatal por hiperpotasemia.' },
  { front: 'Fármaco más eficaz para ácido úrico ya formado', back: 'Rasburicasa (urato oxidasa recombinante).' },
  { front: 'Por qué la LLA tiene alto riesgo de lisis tumoral', back: 'Alta quimiosensibilidad inicial → lisis celular masiva y rápida.' },
  { front: 'Contenido de los gránulos de promielocitos leucémicos', back: 'Factor tisular y otras sustancias procoagulantes.' },
  { front: 'Transfusión durante inducción de LPA', back: 'Agresiva y PROACTIVA (no solo reactiva) de plaquetas y fibrinógeno.' },
  { front: 'Síntomas del síndrome de diferenciación', back: 'Fiebre, disnea progresiva, infiltrados pulmonares, derrames, edema.' },
  { front: 'Tratamiento del síndrome de diferenciación', back: 'Corticoide (dexametasona) de inmediato, sin esperar confirmación.' },
  { front: 'Leucostasis', back: 'Hiperleucocitosis extrema que ocluye la microcirculación de órganos vitales.' },
  { front: 'Por qué evitar transfusión eritrocitaria en leucostasis activa', back: 'Aumenta la viscosidad sanguínea, puede empeorar agudamente el cuadro.' },
  { front: 'Medida puente en leucostasis grave (LMA)', back: 'Leucaféresis (aféresis terapéutica).' },
  { front: 'Santuarios farmacológicos en leucemia aguda', back: 'Sistema nervioso central y testículo (barrera limita penetración de quimioterapia).' },
  { front: 'Cloroma (sarcoma mieloide)', back: 'Masa tumoral sólida de blastos mieloides en sitio extramedular.' }
];
