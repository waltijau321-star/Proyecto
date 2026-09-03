// topics/linfomas/study.js: Autoevaluación de Linfomas.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoría lógica y longitud comparable
// entre opciones, distractores plausibles, sin pistas gramaticales/semánticas, posición de
// `correct` distribuida sin patrón (verificar el listado de índices antes de dar el archivo por
// terminado).

export const quiz = [
  { q: '¿Qué célula define histológicamente al linfoma de Hodgkin?', options: ['El linfoblasto inmaduro', 'El promielocito anómalo', 'La célula de Reed-Sternberg', 'El drepanocito falciforme'], correct: 2, explanation: 'La célula de Reed-Sternberg define histológicamente al linfoma de Hodgkin.', dificultad: 'facil' },
  { q: '¿Qué caracteriza el patrón de diseminación del linfoma de Hodgkin, distinguiéndolo del linfoma no Hodgkin?', options: ['Diseminación contigua predecible', 'Diseminación aleatoria impredecible', 'No se disemina fuera del ganglio', 'Diseminación hematógena inicial'], correct: 0, explanation: 'El linfoma de Hodgkin tiene un patrón de diseminación contigua predecible entre cadenas ganglionares adyacentes.', dificultad: 'intermedio' },
  { q: '¿Cuál es el subtipo más frecuente de linfoma no Hodgkin en general?', options: ['Linfoma folicular indolente', 'Linfoma de Burkitt endémico', 'Linfoma de células del manto', 'Linfoma difuso de células B'], correct: 3, explanation: 'El linfoma difuso de células B grandes es el subtipo más frecuente de linfoma no Hodgkin en general.', dificultad: 'facil' },
  { q: '¿Cuál es el subtipo más frecuente de linfoma no Hodgkin indolente?', options: ['Linfoma difuso de células B grandes', 'Linfoma folicular', 'Linfoma de Burkitt', 'Linfoma de Hodgkin'], correct: 1, explanation: 'El linfoma folicular es el subtipo más frecuente de linfoma no Hodgkin indolente.', dificultad: 'facil' },
  { q: '¿Qué distribución de edad característica tiene el linfoma de Hodgkin?', options: ['Solo en la infancia temprana', 'Solo en mayores de 70 años', 'Bimodal: jóvenes y mayores', 'Uniforme en todas las edades'], correct: 2, explanation: 'El linfoma de Hodgkin tiene una distribución de edad bimodal: un pico en adultos jóvenes (20-30 años) y otro en adultos mayores.', dificultad: 'intermedio' },
  { q: '¿Qué particularidad biológica distintiva tiene el linfoma de Hodgkin respecto a la proporción de células neoplásicas en el tumor?', options: ['Las neoplásicas son casi todo el tumor', 'Las Reed-Sternberg son una minoría', 'No hay células reactivas en el tumor', 'El tumor es solo de eosinófilos'], correct: 1, explanation: 'Las células de Reed-Sternberg representan una minoría del volumen tumoral, rodeadas de un infiltrado inflamatorio reactivo masivo que reclutan activamente.', dificultad: 'dificil' },
  { q: '¿Cuál es la translocación característica del linfoma folicular?', options: ['La t(8;14), con MYC', 'La t(9;22), BCR-ABL1', 'La t(15;17), PML-RARA', 'La t(14;18), con BCL2'], correct: 3, explanation: 'El linfoma folicular está caracterizado por la translocación t(14;18), que produce sobreexpresión de BCL2.', dificultad: 'intermedio' },
  { q: '¿Cuál es el mecanismo por el que la sobreexpresión de BCL2 produce la acumulación del linfoma folicular?', options: ['Resistencia a la apoptosis normal', 'Proliferación muy acelerada', 'Destrucción autoinmune de linfocitos', 'Deficiencia de hierro en precursores'], correct: 0, explanation: 'BCL2 produce resistencia a la apoptosis, explicando la acumulación lenta característica del linfoma folicular, más que proliferación acelerada.', dificultad: 'dificil' },
  { q: '¿Cuál es la translocación característica del linfoma de Burkitt?', options: ['La t(14;18), con BCL2', 'La t(9;22), BCR-ABL1', 'La t(8;14), con MYC', 'La t(15;17), PML-RARA'], correct: 2, explanation: 'El linfoma de Burkitt está caracterizado por la translocación t(8;14), que produce desregulación del oncogén MYC.', dificultad: 'intermedio' },
  { q: '¿Qué caracteriza al linfoma de Burkitt en cuanto a su velocidad de crecimiento?', options: ['De las de crecimiento más lento', 'De crecimiento más rápido conocido', 'Igual al del linfoma folicular', 'Su velocidad carece de relevancia'], correct: 1, explanation: 'El linfoma de Burkitt es la neoplasia humana de crecimiento más rápido conocida, con un tiempo de duplicación tumoral de horas a pocos días.', dificultad: 'facil' },
  { q: '¿Qué virus está asociado a la variante endémica del linfoma de Burkitt?', options: ['Virus de Epstein-Barr', 'Virus de la hepatitis C', 'Virus del papiloma humano', 'Citomegalovirus'], correct: 0, explanation: 'El virus de Epstein-Barr está asociado casi universalmente a la variante endémica del linfoma de Burkitt.', dificultad: 'intermedio' },
  { q: '¿Qué hallazgo histológico característico se describe en el linfoma de Burkitt?', options: ['Bastones de Auer múltiples', 'Sombras de Gumprecht', 'Células de Reed-Sternberg', 'Patrón en cielo estrellado'], correct: 3, explanation: 'El patrón "en cielo estrellado" (macrófagos con detritos celulares fagocitados entremezclados con las células tumorales) es característico del linfoma de Burkitt.', dificultad: 'intermedio' },
  { q: '¿Qué es el linfoma de "doble/triple hit" dentro del linfoma difuso de células B grandes?', options: ['Un subtipo de mejor pronóstico', 'MYC junto con BCL2 y/o BCL6', 'Sinónimo de linfoma de Hodgkin', 'Un subtipo propio de la infancia'], correct: 1, explanation: 'El linfoma de "doble/triple hit" tiene reordenamientos concurrentes de MYC con BCL2 y/o BCL6, una categoría de peor pronóstico.', dificultad: 'dificil' },
  { q: '¿Qué componentes incluye el IPI (Índice Pronóstico Internacional)?', options: ['Solo la edad del paciente', 'Solo el recuento leucocitario', 'Edad, LDH, ECOG, estadio y sitios', 'Solo el tamaño de la masa tumoral'], correct: 2, explanation: 'El IPI incluye edad, LDH, estado funcional ECOG, estadio de Ann Arbor, y número de sitios extraganglionares.', dificultad: 'facil' },
  { q: '¿A qué tipo de linfoma se aplica principalmente el IPI?', options: ['Linfoma no Hodgkin agresivo', 'Linfoma de Hodgkin clásico', 'Linfoma folicular indolente', 'No se aplica a los linfomas'], correct: 0, explanation: 'El IPI se aplica principalmente al linfoma no Hodgkin agresivo.', dificultad: 'intermedio' },
  { q: '¿Qué componentes incluye el IPS de Hasenclever?', options: ['Solo la edad del paciente', 'Solo el estadio de Ann Arbor', 'Solo la LDH sérica basal', 'Albúmina, Hb, sexo y estadio'], correct: 3, explanation: 'El IPS de Hasenclever incluye 7 factores: albúmina, hemoglobina, sexo, estadio IV, edad, leucocitos, y linfocitos.', dificultad: 'facil' },
  { q: '¿A qué tipo de linfoma se aplica el IPS de Hasenclever?', options: ['Linfoma no Hodgkin agresivo', 'Linfoma de Hodgkin avanzado', 'Linfoma de Burkitt endémico', 'Linfoma folicular indolente'], correct: 1, explanation: 'El IPS de Hasenclever se aplica al linfoma de Hodgkin avanzado (estadio III-IV).', dificultad: 'intermedio' },
  { q: '¿Cuál es el estudio de imagen de elección para la estadificación de Ann Arbor en la mayoría de los linfomas?', options: ['Radiografía simple de tórax', 'Ecografía abdominal aislada', 'PET-TC de cuerpo completo', 'Electrocardiograma'], correct: 2, explanation: 'El PET-TC de cuerpo completo es el estudio de elección para la estadificación de Ann Arbor en la mayoría de los linfomas.', dificultad: 'facil' },
  { q: '¿Cuál es el esquema estándar de primera línea del linfoma de Hodgkin clásico?', options: ['Esquema ABVD', 'Esquema R-CHOP', 'Esquema FOLFOX', 'ATRA con arsénico'], correct: 0, explanation: 'ABVD (doxorrubicina, bleomicina, vinblastina, dacarbazina) es el esquema estándar histórico de primera línea del linfoma de Hodgkin.', dificultad: 'facil' },
  { q: '¿Cuál es el esquema estándar de primera línea del linfoma difuso de células B grandes?', options: ['Esquema ABVD', 'Ciclos cortos tipo Burkitt', 'ATRA con arsénico', 'Esquema R-CHOP'], correct: 3, explanation: 'R-CHOP es el esquema estándar de primera línea del linfoma difuso de células B grandes.', dificultad: 'facil' },
  { q: '¿Qué terapia ha transformado el manejo del linfoma no Hodgkin agresivo refractario o en recaída temprana?', options: ['Radioterapia corporal total', 'Células CAR-T anti-CD19', 'Corticoides en monoterapia', 'Antibióticos de amplio espectro'], correct: 1, explanation: 'La terapia de células CAR-T dirigida contra CD19 ha transformado el manejo del linfoma no Hodgkin agresivo refractario o en recaída temprana.', dificultad: 'intermedio' },
  { q: '¿Cuál es el manejo apropiado del linfoma folicular asintomático de bajo volumen?', options: ['Vigilancia activa, sin tratar', 'Quimioterapia intensiva inmediata', 'Trasplante alogénico inmediato', 'Radioterapia de todo el cuerpo'], correct: 0, explanation: 'La vigilancia activa es apropiada en el linfoma folicular asintomático de bajo volumen, dado que el tratamiento temprano no ha demostrado beneficio de supervivencia.', dificultad: 'intermedio' },
  { q: '¿Qué hallazgo debe hacer sospechar transformación de un linfoma folicular a un componente agresivo?', options: ['Estabilidad clínica durante años', 'Ausencia sostenida de síntomas', 'Crecimiento rápido con LDH alta', 'LDH persistentemente normal'], correct: 2, explanation: 'El crecimiento ganglionar asimétrico rápido con LDH marcadamente elevada sugiere transformación a un componente agresivo.', dificultad: 'intermedio' },
  { q: '¿Cuál es la causa más frecuente de síndrome de vena cava superior de origen neoplásico en la práctica clínica actual en general?', options: ['Linfoma de Hodgkin', 'Linfoma folicular', 'Mieloma múltiple', 'Cáncer de pulmón'], correct: 3, explanation: 'El cáncer de pulmón es la causa más frecuente de síndrome de vena cava superior de origen neoplásico en general, aunque el linfoma es una causa relevante en el paciente más joven.', dificultad: 'intermedio' },
  { q: '¿Qué medida general se recomienda de inmediato ante la sospecha de síndrome de vena cava superior?', options: ['Colocar en posición de Trendelenburg', 'Elevar la cabecera de la cama', 'Restringir los líquidos intravenosos', 'Iniciar anticoagulación sistémica'], correct: 1, explanation: 'Elevar la cabecera de la cama reduce la presión venosa cefálica y es una medida general recomendada de inmediato.', dificultad: 'facil' },
  { q: '¿Por qué es importante obtener la biopsia diagnóstica ANTES de administrar corticoides en la sospecha de linfoma con síndrome de vena cava superior, cuando es clínicamente seguro hacerlo?', options: ['Los corticoides alteran la histología', 'Los corticoides son tóxicos al equipo', 'No hay razón real para ese orden', 'Los corticoides curan el linfoma'], correct: 0, explanation: 'Los corticoides pueden alterar la histología de un linfoma, por lo que debe biopsiarse antes de administrarlos cuando sea clínicamente seguro.', dificultad: 'dificil' },
  { q: '¿En qué subtipo de linfoma es prácticamente universal el riesgo de síndrome de lisis tumoral, pudiendo estar presente ya al momento del diagnóstico?', options: ['El linfoma folicular indolente', 'El Hodgkin de predominio linfocítico', 'El linfoma de Burkitt', 'El linfoma de la zona marginal'], correct: 2, explanation: 'El linfoma de Burkitt tiene un riesgo prácticamente universal de síndrome de lisis tumoral, dado su altísimo índice proliferativo.', dificultad: 'intermedio' },
  { q: '¿Cuál es el síntoma inicial más frecuente de compresión medular por linfoma, con frecuencia precediendo a los síntomas neurológicos?', options: ['Retención urinaria aislada', 'Cefalea aislada', 'Fiebre aislada sin otro síntoma', 'Dolor de espalda progresivo'], correct: 3, explanation: 'El dolor de espalda progresivo es el síntoma inicial más frecuente de compresión medular, con frecuencia precediendo a los síntomas neurológicos por días a semanas.', dificultad: 'facil' },
  { q: '¿Cuál es el estudio de elección urgente ante sospecha de compresión medular?', options: ['Radiografía simple de columna', 'Resonancia de toda la columna', 'Electromiografía de miembros', 'Ecografía abdominal completa'], correct: 1, explanation: 'La resonancia magnética de toda la columna es el estudio de elección urgente ante sospecha de compresión medular.', dificultad: 'intermedio' },
  { q: '¿Qué fármaco de uso en el tratamiento del linfoma de Hodgkin (esquema ABVD) produce fibrosis pulmonar como toxicidad tardía característica?', options: ['Bleomicina', 'Doxorrubicina', 'Vinblastina', 'Dacarbazina'], correct: 0, explanation: 'La bleomicina, componente del esquema ABVD, produce fibrosis pulmonar como toxicidad tardía característica.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varón de 24 años presenta adenopatía cervical izquierda indolora de 6 semanas de evolución, sudoración nocturna profusa, y prurito generalizado. La biopsia excisional muestra células de Reed-Sternberg en un infiltrado inflamatorio reactivo.',
    steps: [
      { q: '¿Cuál es el diagnóstico más probable?', options: ['Linfoma de Hodgkin', 'Linfoma difuso de células B grandes', 'Leucemia linfocítica crónica', 'Linfoma folicular'], correct: 0 },
      { q: '¿Qué estudio es apropiado para la estadificación inicial?', options: ['Radiografía simple de tórax aislada', 'PET-TC de cuerpo completo', 'Ecografía abdominal aislada', 'Electrocardiograma'], correct: 1 },
      { q: 'La estadificación confirma enfermedad estadio III. ¿Qué herramienta pronóstica es apropiada calcular?', options: ['El índice IPI clásico', 'El índice CLL-IPI de LLC', 'El IPS de Hasenclever', 'El índice de Sanz de LPA'], correct: 2 }
    ],
    explanation: 'Las células de Reed-Sternberg en un infiltrado inflamatorio reactivo confirman linfoma de Hodgkin. El PET-TC de cuerpo completo es el estudio de estadificación inicial apropiado. En enfermedad avanzada (estadio III-IV), corresponde calcular el IPS de Hasenclever, la herramienta pronóstica específica para el linfoma de Hodgkin avanzado.'
  },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Mujer de 8 años en zona endémica de África ecuatorial presenta masa de crecimiento explosivo en la mandíbula de 5 días de evolución. LDH marcadamente elevada. La biopsia muestra un patrón "en cielo estrellado".',
    steps: [
      { q: '¿Qué diagnóstico explica mejor el cuadro?', options: ['Linfoma folicular indolente', 'Linfoma de Hodgkin clásico', 'Linfoma de Burkitt endémico', 'Linfoma de la zona marginal'], correct: 2 },
      { q: '¿Qué complicación metabólica debe anticiparse y manejarse en paralelo al estudio diagnóstico, dado que puede estar presente ya al momento del diagnóstico?', options: ['Síndrome de lisis tumoral', 'Hipoglucemia aislada', 'Hipertiroidismo', 'Deficiencia de vitamina B12'], correct: 0 },
      { q: '¿Cuál es el enfoque terapéutico más apropiado?', options: ['Vigilancia activa sin tratar', 'Esquema R-CHOP de ciclos largos', 'Radioterapia aislada sin quimio', 'Quimioterapia de ciclos cortos'], correct: 3 }
    ],
    explanation: 'La masa de crecimiento explosivo con LDH elevada y patrón "en cielo estrellado" confirma linfoma de Burkitt (variante endémica en este contexto epidemiológico). El síndrome de lisis tumoral debe anticiparse y manejarse en paralelo, dado el riesgo prácticamente universal. El tratamiento apropiado es quimioterapia intensiva urgente de ciclos cortos con manejo metabólico simultáneo agresivo.'
  },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Varón de 55 años con linfoma difuso de células B grandes conocido presenta edema facial y de cuello, distensión de las venas del cuello, y disnea que empeora al acostarse. TC de tórax muestra masa mediastínica voluminosa con compresión vascular.',
    steps: [
      { q: '¿Cuál es la entidad más probable en este caso?', options: ['Insuficiencia cardiaca aguda aislada', 'Síndrome de vena cava superior', 'Neumotórax espontáneo', 'Taponamiento cardiaco aislado'], correct: 1 },
      { q: '¿Cuál es una medida general inmediata apropiada mientras se organiza el tratamiento definitivo?', options: ['Colocar al paciente en decúbito supino plano', 'Restricción hídrica extrema sin otra medida', 'Indicar reposo en posición de Trendelenburg', 'Elevar la cabecera de la cama'], correct: 3 },
      { q: 'Dado que el linfoma de base es altamente quimiosensible, ¿cuál es el enfoque terapéutico más apropiado para resolver el síndrome?', options: ['Iniciar el tratamiento oncológico', 'Solo endoprótesis vascular', 'Observación sin tratamiento activo', 'Esplenectomía urgente programada'], correct: 0 }
    ],
    explanation: 'El edema facial/cervical con distensión venosa y masa mediastínica compresiva confirma síndrome de vena cava superior. Elevar la cabecera de la cama es una medida general inmediata apropiada. Dado que el linfoma de base es altamente quimiosensible, el inicio urgente del tratamiento oncológico definitivo puede resolver el síndrome rápidamente.'
  },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 62 años con linfoma no Hodgkin agresivo conocido, con enfermedad paravertebral documentada, presenta dolor de espalda progresivo de 1 semana y debilidad leve de ambas piernas de aparición en las últimas 24 horas.',
    steps: [
      { q: '¿Cuál es la sospecha diagnóstica más apropiada dado este cuadro?', options: ['Compresión medular por el linfoma', 'Migraña con aura visual prolongada', 'Gastroenteritis aguda infecciosa', 'Neuropatía periférica diabética'], correct: 0 },
      { q: '¿Cuál es la medida inicial más urgente mientras se organiza el estudio de imagen definitivo?', options: ['Observación hasta el día siguiente', 'Solo analgésicos por vía oral', 'Corticoides en dosis altas ya', 'Alta con seguimiento en 1 semana'], correct: 2 },
      { q: '¿Cuál es el estudio de elección urgente para confirmar el diagnóstico?', options: ['Radiografía simple de columna', 'Resonancia de toda la columna', 'Electromiografía de miembros', 'Ecografía abdominal completa'], correct: 1 }
    ],
    explanation: 'El dolor de espalda progresivo con debilidad de piernas de nueva aparición en un paciente con enfermedad paravertebral sugiere compresión medular. Los corticoides en dosis altas deben iniciarse de inmediato ante la sospecha razonable. La resonancia magnética de toda la columna es el estudio de elección urgente para confirmar el diagnóstico.'
  },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 32 años, sobreviviente de linfoma de Hodgkin tratado con ABVD y radioterapia torácica de campo extendido a los 22 años, acude a consulta de seguimiento a largo plazo, actualmente asintomática.',
    steps: [
      { q: '¿Qué complicación tardía relacionada con la radioterapia torácica en la juventud debe vigilarse activamente en esta paciente?', options: ['Diabetes mellitus tipo 1 de novo', 'Hipotiroidismo congénito tardío', 'Enfermedad renal poliquística', 'Segundas neoplasias, mama'], correct: 3 },
      { q: '¿Qué componente del esquema ABVD recibido requiere vigilancia cardiológica periódica a largo plazo?', options: ['La vinblastina, por neurotoxicidad', 'La doxorrubicina (antraciclina)', 'La dacarbazina, por hepatotoxicidad', 'La bleomicina, por toxicidad pulmonar'], correct: 1 },
      { q: '¿Qué medida de cribado específico es apropiada dado el antecedente de radioterapia torácica a edad joven?', options: ['No se requiere cribado adicional', 'Solo colonoscopia de tamizaje', 'Mamografía o RM mamaria temprana', 'Solo densitometría ósea seriada'], correct: 2 }
    ],
    explanation: 'El antecedente de radioterapia torácica en la juventud confiere riesgo aumentado de segundas neoplasias, particularmente cáncer de mama. La doxorrubicina (antraciclina) del esquema ABVD requiere vigilancia cardiológica periódica por su cardiotoxicidad acumulativa. Dado el riesgo aumentado, se recomienda mamografía/resonancia mamaria de cribado iniciada más tempranamente que el cribado poblacional estándar.'
  }
];

export const flashcards = [
  { front: 'Célula que define el linfoma de Hodgkin', back: 'Célula de Reed-Sternberg.' },
  { front: 'Patrón de diseminación del linfoma de Hodgkin', back: 'Contigua y predecible entre cadenas ganglionares adyacentes.' },
  { front: 'Subtipo más frecuente de linfoma no Hodgkin en general', back: 'Linfoma difuso de células B grandes.' },
  { front: 'Subtipo más frecuente de linfoma no Hodgkin indolente', back: 'Linfoma folicular.' },
  { front: 'Distribución de edad del linfoma de Hodgkin', back: 'Bimodal: pico en adultos jóvenes y pico en adultos mayores.' },
  { front: 'Proporción de células neoplásicas en el linfoma de Hodgkin', back: 'Minoría del volumen tumoral, rodeada de infiltrado inflamatorio reactivo reclutado activamente.' },
  { front: 'Translocación del linfoma folicular', back: 't(14;18), sobreexpresión de BCL2 (resistencia a apoptosis).' },
  { front: 'Translocación del linfoma de Burkitt', back: 't(8;14), desregulación de MYC (proliferación extrema).' },
  { front: 'Velocidad de crecimiento del linfoma de Burkitt', back: 'La neoplasia humana de crecimiento más rápido conocida.' },
  { front: 'Virus asociado a Burkitt endémico', back: 'Virus de Epstein-Barr.' },
  { front: 'Hallazgo histológico del linfoma de Burkitt', back: 'Patrón "en cielo estrellado".' },
  { front: 'Linfoma de "doble/triple hit"', back: 'MYC + BCL2/BCL6 concurrentes, peor pronóstico dentro del DLBCL.' },
  { front: 'Componentes del IPI', back: 'Edad, LDH, ECOG, estadio Ann Arbor, sitios extraganglionares.' },
  { front: 'IPI: aplicación', back: 'Linfoma no Hodgkin agresivo.' },
  { front: 'Componentes del IPS de Hasenclever', back: 'Albúmina, Hb, sexo, estadio IV, edad, leucocitos, linfocitos.' },
  { front: 'IPS de Hasenclever: aplicación', back: 'Linfoma de Hodgkin avanzado (estadio III-IV).' },
  { front: 'Estudio de elección para estadificación de linfoma', back: 'PET-TC de cuerpo completo.' },
  { front: 'Esquema estándar de primera línea del linfoma de Hodgkin', back: 'ABVD.' },
  { front: 'Esquema estándar de primera línea del DLBCL', back: 'R-CHOP.' },
  { front: 'Terapia que transformó el LNH agresivo refractario/recaída temprana', back: 'CAR-T anti-CD19.' },
  { front: 'Manejo del linfoma folicular asintomático de bajo volumen', back: 'Vigilar y esperar (sin beneficio de supervivencia del tratamiento temprano).' },
  { front: 'Signo de transformación de linfoma folicular', back: 'Crecimiento asimétrico rápido + LDH marcadamente elevada.' },
  { front: 'Por qué biopsiar antes de corticoides en sospecha de linfoma', back: 'Los corticoides pueden alterar la histología.' },
  { front: 'Subtipo con riesgo casi universal de lisis tumoral', back: 'Linfoma de Burkitt.' },
  { front: 'Síntoma inicial más frecuente de compresión medular', back: 'Dolor de espalda progresivo (precede a síntomas neurológicos).' },
  { front: 'Estudio urgente ante sospecha de compresión medular', back: 'Resonancia magnética de toda la columna.' },
  { front: 'Fármaco del ABVD que produce fibrosis pulmonar', back: 'Bleomicina.' }
];
