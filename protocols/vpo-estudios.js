// protocols/vpo-estudios.js
// Estudios preoperatorios: cuándo pedir cada uno y, sobre todo, cuándo no. Alimenta la pestaña
// Estudios de la sección VPO (engine/vpo.js).
//
// El valor didáctico está tanto en el "cuándo sí" como en el "no de rutina": el error más
// frecuente de la valoración preoperatoria no es pasar por alto una patología, sino pedir un
// panel completo a todo el mundo. Cada estudio pedido sin indicación retrasa la cirugía,
// encarece el proceso y genera hallazgos incidentales que abren una cascada con riesgo propio.
// La pregunta que filtra cada uno es siempre la misma: ¿qué haría distinto si sale anormal?
//
// Fuentes primarias (PDF en Bibliografia/XV. VPO/):
//  - Thompson A, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for
//    Perioperative Cardiovascular Management for Noncardiac Surgery.
//    Circulation. 2024;150(19):e351-e442.
//  - Halvorsen S, et al. 2022 ESC Guidelines on cardiovascular assessment and management of
//    patients undergoing non-cardiac surgery. Eur Heart J. 2022;43(39):3826-3924.
//
// Contrato de cada entrada:
//   { id, estudio, alias[], rutina, resumen, indicaciones[], noIndicado, vigencia?, notas[]?, fuente }
// `resumen` es la frase que se lee en la lista sin abrir el detalle: la idea central de
// cuándo se pide, para que la lista sea escaneable de un vistazo.
// `rutina` es false en todos: ningún estudio preoperatorio se pide a todo paciente sin más.
// Los textos se inyectan con innerHTML: usar &lt; y &gt; en vez de < y >.

export const gruposEstudio = [
  { id: 'basicos', label: 'Laboratorio básico', accent: '#3f6b52' },
  { id: 'cardiaco', label: 'Evaluación cardiaca', accent: '#8c3a34' },
  { id: 'respiratorio', label: 'Evaluación respiratoria', accent: '#5c4a73' },
  { id: 'transfusional', label: 'Preparación transfusional', accent: '#966b35' }
];

const ACCAHA = 'ACC/AHA 2024 (Thompson A, et al. Circulation. 2024;150(19):e351-e442)';
const ESC = 'ESC 2022 (Halvorsen S, et al. Eur Heart J. 2022;43(39):3826-3924)';
const USO = 'Criterios de uso apropiado de recursos en la valoración preoperatoria';

export const estudios = [
  /* ============ Laboratorio básico ============ */
  {
    id: 'biometria', grupo: 'basicos', estudio: 'Biometría hemática',
    alias: ['hemograma', 'hemoglobina', 'BH'], rutina: false,
    resumen: 'Solo si se prevé sangrado o hay sospecha de anemia.',
    indicaciones: [
      'Cirugía con pérdida sanguínea prevista significativa',
      'Sospecha clínica o antecedente de anemia',
      'Enfermedad renal crónica, hepatopatía o neoplasia',
      'Tratamiento con quimioterapia o inmunosupresores'
    ],
    noIndicado: 'Paciente sano y asintomático que va a cirugía menor con pérdida sanguínea mínima.',
    vigencia: 'Suele aceptarse hasta 3 meses si no hubo cambios clínicos.',
    notas: ['La anemia preoperatoria no corregida es un factor de riesgo modificable: detectarla con tiempo permite tratarla antes de la cirugía, que es una de las intervenciones preoperatorias con mejor rendimiento.'],
    fuente: USO
  },
  {
    id: 'creatinina', grupo: 'basicos', estudio: 'Creatinina y electrolitos',
    alias: ['función renal', 'química sanguínea', 'potasio', 'sodio'], rutina: false,
    resumen: 'Con comorbilidad, diuréticos o fármacos de eliminación renal.',
    indicaciones: [
      'Edad avanzada o comorbilidad cardiovascular',
      'Enfermedad renal conocida, diabetes o hipertensión',
      'Tratamiento con diuréticos, IECA, ARA-II o digoxina',
      'Cirugía mayor, o cualquier cirugía en la que se prevea un anticoagulante de eliminación renal'
    ],
    noIndicado: 'Paciente joven y sano sin comorbilidad ni tratamiento crónico que va a cirugía menor.',
    vigencia: 'Idealmente de las últimas semanas si hay enfermedad renal o tratamiento diurético.',
    notas: [
      'La creatinina elevada es predictor en el índice de Lee (más de 2 mg/dL) y en Gupta-MICA (1.5 mg/dL o más).',
      'El aclaramiento de creatinina cambia directamente el intervalo de suspensión del dabigatrán.',
      'La hipopotasemia es arritmogénica bajo anestesia: conviene corregirla antes de entrar a quirófano.'
    ],
    fuente: ACCAHA + ' · ' + USO
  },
  {
    id: 'coagulacion', grupo: 'basicos', estudio: 'Pruebas de coagulación',
    alias: ['TP', 'TTP', 'INR', 'tiempos'], rutina: false,
    resumen: 'Solo con antecedente hemorrágico. Es el peor tamizaje del panel.',
    indicaciones: [
      'Antecedente hemorrágico personal o familiar detectado en el interrogatorio',
      'Tratamiento anticoagulante en curso',
      'Hepatopatía conocida o sospechada',
      'Desnutrición o malabsorción que hagan probable un déficit de vitamina K'
    ],
    noIndicado: 'Cribado de rutina en paciente sin antecedente hemorrágico. Es el estudio preoperatorio con peor rendimiento como tamizaje: su valor predictivo en un paciente sin historia de sangrado es muy bajo, y un resultado levemente alterado desencadena estudios y retrasos sin beneficio.',
    notas: [
      'El interrogatorio dirigido sobre sangrado (epistaxis, sangrado con extracciones dentales, menorragia, hematomas fáciles, antecedentes familiares) rinde mucho más que las pruebas de laboratorio como tamizaje.',
      'En el cirrótico, un INR prolongado no significa protección frente a la trombosis: su hemostasia está reequilibrada, no anticoagulada.'
    ],
    fuente: USO
  },
  {
    id: 'glucosa', grupo: 'basicos', estudio: 'Glucosa y hemoglobina glucosilada',
    alias: ['HbA1c', 'glucemia', 'diabetes'], rutina: false,
    resumen: 'HbA1c si el diabético no la tiene de los últimos 3 meses.',
    indicaciones: [
      'Diabetes conocida en la que no se ha medido HbA1c en los últimos 3 meses',
      'Sospecha de diabetes no diagnosticada por obesidad u otros factores de riesgo',
      'Tratamiento con corticoides que pueda haber descompensado el control'
    ],
    noIndicado: 'Paciente sin diabetes ni factores de riesgo metabólico.',
    vigencia: 'La HbA1c es razonable si no se ha realizado en 3 meses o menos.',
    notas: ['En pacientes programados para cirugía electiva, medir HbA1c cuando no se ha hecho en los últimos 3 meses es razonable según la guía de 2024.'],
    fuente: ACCAHA
  },
  {
    id: 'ego', grupo: 'basicos', estudio: 'Examen general de orina',
    alias: ['EGO', 'urocultivo', 'orina'], rutina: false,
    resumen: 'Solo con síntomas, cirugía urológica o material protésico.',
    indicaciones: [
      'Síntomas urinarios activos',
      'Cirugía urológica con instrumentación de la vía urinaria',
      'Colocación de material protésico, en la que una bacteriuria podría sembrar el implante'
    ],
    noIndicado: 'Cribado de bacteriuria asintomática antes de una cirugía no protésica y no urológica: tratarla no reduce la infección de sitio quirúrgico y contribuye a la resistencia antimicrobiana.',
    fuente: USO
  },
  {
    id: 'embarazo', grupo: 'basicos', estudio: 'Prueba de embarazo',
    alias: ['gonadotropina', 'hCG', 'gestación'], rutina: false,
    resumen: 'Umbral bajo: si el embarazo no puede descartarse, se pide.',
    indicaciones: [
      'Toda mujer en edad reproductiva en la que el embarazo no pueda descartarse con certeza',
      'Antes de procedimientos con radiación ionizante o fármacos teratógenos'
    ],
    noIndicado: 'No aplica cuando existe certeza razonable de ausencia de embarazo, pero el umbral para solicitarla debe ser bajo: un embarazo no reconocido cambia por completo la conducta anestésica y quirúrgica.',
    notas: ['Es de los pocos estudios donde conviene pecar de solicitarlo de más y no de menos, por las consecuencias de pasarlo por alto.'],
    fuente: USO
  },

  /* ============ Evaluación cardiaca ============ */
  {
    id: 'ecg', grupo: 'cardiaco', estudio: 'Electrocardiograma de 12 derivaciones',
    alias: ['ECG', 'EKG', 'electro'], rutina: false,
    resumen: 'Con cardiopatía o síntomas y cirugía de riesgo elevado.',
    indicaciones: [
      'Enfermedad coronaria conocida, arritmia significativa, enfermedad arterial periférica, enfermedad cerebrovascular u otra cardiopatía estructural relevante, cuando la cirugía es de riesgo elevado (clase 2a)',
      'Síntomas sugestivos de enfermedad cardiovascular, en cirugía de riesgo elevado (clase 2a)',
      'Paciente asintomático sin enfermedad cardiovascular conocida que va a cirugía de riesgo elevado: puede considerarse para establecer una basal (clase 2b)'
    ],
    noIndicado: 'Paciente asintomático que va a un procedimiento de bajo riesgo: el electrocardiograma de rutina no mejora los desenlaces (clase 3, sin beneficio).',
    vigencia: 'Suele aceptarse hasta 3 meses si no hubo cambios clínicos ni eventos nuevos.',
    notas: ['Ante un electrocardiograma con anomalías nuevas, es razonable ampliar la evaluación para afinar el riesgo cardiovascular (clase 2a).'],
    fuente: ACCAHA
  },
  {
    id: 'ecocardiograma', grupo: 'cardiaco', estudio: 'Ecocardiograma',
    alias: ['ecocardio', 'función ventricular', 'FEVI'], rutina: false,
    resumen: 'Solo con disnea nueva o sospecha de disfunción ventricular.',
    indicaciones: [
      'Disnea de nueva aparición, hallazgos de insuficiencia cardiaca en la exploración, o sospecha de disfunción ventricular nueva o en empeoramiento (clase 1)',
      'Insuficiencia cardiaca conocida con empeoramiento de la disnea u otro cambio del estado clínico (clase 2a)',
      'Sospecha de valvulopatía significativa, en particular estenosis aórtica grave'
    ],
    noIndicado: 'Paciente asintomático y clínicamente estable: la evaluación de rutina de la función ventricular no está recomendada por falta de beneficio (clase 3).',
    notas: ['La pregunta no es si el ecocardiograma dará información, sino si esa información cambiará la conducta perioperatoria. En el paciente estable, no lo hace.'],
    fuente: ACCAHA
  },
  {
    id: 'estres', grupo: 'cardiaco', estudio: 'Prueba de estrés',
    alias: ['ergometría', 'perfusión miocárdica', 'ecocardiograma de estrés', 'dobutamina'], rutina: false,
    resumen: 'Solo si el resultado va a cambiar la conducta.',
    indicaciones: [
      'Cirugía de riesgo elevado con capacidad funcional mala o desconocida y riesgo cardiovascular elevado por una escala validada: puede considerarse (clase 2b)',
      'Sospecha de isquemia de alto riesgo por síntomas u otros factores'
    ],
    noIndicado: 'Paciente de bajo riesgo, con capacidad funcional adecuada y síntomas estables, o que va a un procedimiento de bajo riesgo: la prueba de estrés de rutina no está recomendada por falta de beneficio (clase 3).',
    notas: [
      'El objetivo de la prueba no es descubrir enfermedad coronaria no diagnosticada, sino identificar a los pacientes en quienes la revascularización mejoraría el desenlace, es decir enfermedad de tronco coronario izquierdo o enfermedad multivaso grave con fracción de eyección reducida.',
      'La revascularización coronaria preoperatoria de rutina en enfermedad que no es de tronco no reduce los eventos perioperatorios (clase 3, sin beneficio).',
      'Está contraindicada mientras haya una condición cardiaca aguda: síndrome coronario agudo, insuficiencia cardiaca descompensada, estenosis aórtica grave o sintomática, arritmia no controlada, hipertensión grave (por ejemplo 200/110 mmHg o más), disección aórtica aguda, pericarditis o miocarditis, tromboembolia pulmonar e hipertensión pulmonar grave.',
      'Mala capacidad funcional se define como menos de 4 MET o un DASI de 34 o menos.'
    ],
    fuente: ACCAHA
  },
  {
    id: 'biomarcadores', grupo: 'cardiaco', estudio: 'Biomarcadores cardiacos',
    alias: ['BNP', 'NT-proBNP', 'troponina', 'péptido natriurético'], rutina: false,
    resumen: 'BNP o NT-proBNP en riesgo elevado; troponina como complemento.',
    indicaciones: [
      'BNP o NT-proBNP: enfermedad cardiovascular conocida, edad de 65 años o más, o edad de 45 años o más con síntomas sugestivos, cuando la cirugía es de riesgo elevado (clase 2a)',
      'Troponina: la misma población, como complemento de la evaluación del riesgo (clase 2b)'
    ],
    noIndicado: 'Paciente de bajo riesgo o cirugía de bajo riesgo: la utilidad de los biomarcadores preoperatorios en esa población no se ha evaluado.',
    notas: [
      'Umbrales anormales según la guía: troponina por encima del percentil 99 del ensayo, BNP mayor de 92 ng/L y NT-proBNP de 300 ng/L o más.',
      'No hay estudios que demuestren qué manejo mejora los desenlaces en pacientes con biomarcadores preoperatorios elevados: su valor está en afinar el pronóstico y la intensidad de la vigilancia, no en indicar un tratamiento concreto.',
      'Medirlos abre la puerta a estudios posteriores desencadenados por el resultado, que es un riesgo propio a considerar antes de pedirlos.'
    ],
    fuente: ACCAHA
  },

  /* ============ Evaluación respiratoria ============ */
  {
    id: 'rxtorax', grupo: 'respiratorio', estudio: 'Radiografía de tórax',
    alias: ['placa de tórax', 'telerradiografía', 'Rx'], rutina: false,
    resumen: 'Solo con síntomas respiratorios o cardiopatía con cambio reciente.',
    indicaciones: [
      'Síntomas o signos respiratorios activos',
      'Enfermedad cardiopulmonar conocida con cambio clínico reciente',
      'Sospecha de infección respiratoria en el último mes',
      'Cirugía torácica programada'
    ],
    noIndicado: 'Paciente asintomático sin enfermedad cardiopulmonar: rara vez cambia la conducta y con frecuencia genera hallazgos incidentales que retrasan la cirugía.',
    vigencia: 'Suele aceptarse hasta 6 meses en ausencia de cambios clínicos.',
    fuente: USO + ' · ' + ESC
  },
  {
    id: 'espirometria', grupo: 'respiratorio', estudio: 'Espirometría y gasometría arterial',
    alias: ['pruebas de función pulmonar', 'gases arteriales', 'PFP'], rutina: false,
    resumen: 'Sobre todo antes de una resección pulmonar.',
    indicaciones: [
      'Resección pulmonar programada, donde definen la operabilidad',
      'Enfermedad pulmonar de gravedad no caracterizada, cuando el resultado cambiaría la técnica anestésica o la decisión quirúrgica',
      'Disnea sin explicación tras la evaluación clínica'
    ],
    noIndicado: 'Cribado de rutina en el paciente con EPOC ya conocida y estable: no predice complicaciones mejor que la evaluación clínica y no cambia la conducta perioperatoria.',
    notas: ['ARISCAT estima el riesgo pulmonar con datos clínicos y de la propia cirugía, sin necesidad de pruebas funcionales.'],
    fuente: USO + ' · ' + ESC
  },
  {
    id: 'cribadoSaos', grupo: 'respiratorio', estudio: 'Cribado de apnea del sueño',
    alias: ['STOP-BANG', 'SAOS', 'polisomnografía'], rutina: false,
    resumen: 'STOP-BANG a todo obeso o roncador; la polisomnografía no urge.',
    indicaciones: [
      'Obesidad, ronquido, somnolencia diurna o apneas presenciadas',
      'Hipertensión de difícil control',
      'Cirugía en la que se prevea uso importante de opioides'
    ],
    noIndicado: 'Polisomnografía antes de una cirugía electiva en un paciente con cribado positivo: retrasaría la cirugía sin cambiar la conducta perioperatoria, que ya queda definida por el propio cribado.',
    notas: ['STOP-BANG es una herramienta de cribado, no diagnóstica. Un resultado de 5 o más indica riesgo alto y lo que cambia el desenlace es que anestesiología lo sepa: vía aérea difícil más probable y sensibilidad aumentada a opioides y sedantes.'],
    fuente: 'Chung F, et al. Anesthesiology. 2008;108(5):812-821'
  },

  /* ============ Preparación transfusional ============ */
  {
    id: 'tipoRh', grupo: 'transfusional', estudio: 'Grupo sanguíneo y pruebas cruzadas',
    alias: ['tipo y Rh', 'cruzadas', 'reserva de sangre'], rutina: false,
    resumen: 'Según la probabilidad real de transfundir en ese procedimiento.',
    indicaciones: [
      'Cirugía con probabilidad significativa de transfusión, según el procedimiento y el centro',
      'Anemia preoperatoria',
      'Antecedente de transfusión previa o de anticuerpos irregulares'
    ],
    noIndicado: 'Cirugía menor con pérdida sanguínea mínima prevista. Solicitar pruebas cruzadas de forma indiscriminada consume reservas del banco de sangre que no se van a usar.',
    notas: ['Muchos centros distinguen entre solicitar solo grupo y Rh con tamizaje de anticuerpos, y reservar unidades cruzadas. La decisión debe seguir el protocolo local de cada procedimiento.'],
    fuente: USO
  }
];

export default { estudios, gruposEstudio };
