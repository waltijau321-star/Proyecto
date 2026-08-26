// topics/valoracion-preoperatoria/content.js
// Tema de estudio de Valoración Preoperatoria (VPO).
//
// VPO es un proceso clínico, no una entidad nosológica, así que sigue el molde de
// topics/_template-semiologia/ (igual que historia-clinica) y no el de una enfermedad:
// las "complicaciones" del contrato del motor se reetiquetan como escenarios y poblaciones
// especiales, que es como el residente se encuentra realmente el problema.
//
// Las herramientas interactivas (escalas, ruta por pasos, manejo de fármacos y constructor de
// nota) viven en la sección VPO del shell, no aquí: este archivo es la parte de estudio.

export const meta = {
  id: 'valoracion-preoperatoria',
  titulo: 'Valoración Preoperatoria',
  subtitulo: 'Habilidades transversales · Medicina Interna',
  accent: '#3d5a73'
};

export const definicionText = 'La valoración preoperatoria es la evaluación médica que se hace antes de una cirugía no cardiaca para estimar el riesgo de complicaciones perioperatorias, identificar lo que puede optimizarse a tiempo y decidir la conducta con el tratamiento crónico del paciente. Es una de las interconsultas más frecuentes que recibe el internista, y su propósito no es "autorizar" ni "dar de alta para cirugía": es cuantificar un riesgo, reducir el que sea reducible y comunicar el resto al paciente y al equipo quirúrgico. Una valoración bien hecha rara vez cancela cirugías; lo que hace es cambiar el momento, la preparación y la vigilancia. El error más común no es pasar por alto una patología, sino pedir estudios que no van a cambiar la conducta: retrasan la cirugía, encarecen el proceso y abren una cascada diagnóstica con riesgo propio.';

export const diagnosticoIntro = '';

export const bibliografia = [
  'Thompson A, Fleischmann KE, Smilowitz NR, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery. Circulation. 2024;150(19):e351-e442.',
  'Douketis JD, Spyropoulos AC, Murad MH, et al. Perioperative Management of Antithrombotic Therapy: An American College of Chest Physicians Clinical Practice Guideline. Chest. 2022;162(5):e207-e243.',
  'American Society of Anesthesiologists. Consensus-Based Guidance on Preoperative Management of Patients on Glucagon-Like Peptide-1 (GLP-1) Receptor Agonists. 2023.',
  'Lee TH, Marcantonio ER, Mangione CM, et al. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999;100(10):1043-1049.',
  'Gupta PK, Gupta H, Sundaram A, et al. Development and validation of a risk calculator for prediction of cardiac risk after surgery. Circulation. 2011;124(4):381-387.',
  'Canet J, Gallart L, Gomar C, et al. Prediction of postoperative pulmonary complications in a population-based surgical cohort. Anesthesiology. 2010;113(6):1338-1350.',
  'Chung F, Yegneswaran B, Liao P, et al. STOP questionnaire: a tool to screen patients for obstructive sleep apnea. Anesthesiology. 2008;108(5):812-821.',
  'Halvorsen S, Mehilli J, Cassese S, et al. 2022 ESC Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery. Eur Heart J. 2022;43(39):3826-3924.'
];

export const modalLabels = {
  itemName: 'Escenario',
  factores_riesgo: 'Qué hace distinto a este paciente',
  clinica: 'Qué buscar en la valoración',
  criterios_dx: 'Cómo estratificar el riesgo',
  tx_medico: 'Conducta preoperatoria',
  tx_farmacologico: 'Manejo de fármacos',
  seguimiento_hospitalario: 'Vigilancia posoperatoria',
  algoritmo: 'Secuencia práctica'
};

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Lo que sí cambia el desenlace',
      tituloB: 'Lo que solo retrasa la cirugía',
      compensada: 'Una anamnesis y exploración dirigidas: capacidad funcional real (¿sube dos pisos de escaleras?), síntomas cardiacos y respiratorios activos, lista completa de fármacos incluidos los que el paciente no considera "medicamentos" (herbolarios, suplementos, inyecciones para bajar de peso), antecedente de stent y su fecha, y episodios previos de delirium o de náusea posoperatoria. Con eso se calcula el riesgo, se decide la conducta con cada fármaco, se indica tromboprofilaxis y se comunica al equipo quirúrgico lo que hay que vigilar. Optimizar anemia, control glucémico, EPOC y presión arterial cuando queda tiempo sí modifica el resultado.',
      descompensada: 'Un panel de laboratorio completo "de rutina" en un paciente sano y asintomático, una radiografía de tórax sin indicación, pruebas de coagulación sin antecedente hemorrágico, un ecocardiograma en un paciente estable de bajo riesgo, o una prueba de estrés cuyo resultado no va a cambiar nada. Todo eso encarece, retrasa y desencadena estudios adicionales que sí tienen riesgo. La pregunta que filtra es siempre la misma: ¿qué haría distinto si el resultado sale anormal?'
    }
  },
  clasificacion: {
    escalas: [
      {
        nombre: 'Índice de Lee (RCRI)',
        componentes: 'Cirugía de alto riesgo, cardiopatía isquémica, insuficiencia cardiaca, enfermedad cerebrovascular, diabetes en tratamiento con insulina y creatinina mayor de 2 mg/dL.',
        formula: 'Un punto por cada predictor presente, de 0 a 6.',
        interpretacion: 'Clases I a IV según 0, 1, 2 o 3 o más predictores, con riesgo de complicación cardiovascular mayor de 0.4%, 0.9%, 7% y 11%. Un RCRI mayor de 1 es el umbral clásico de riesgo elevado.'
      },
      {
        nombre: 'Gupta-MICA',
        componentes: 'Edad, clase ASA, estado funcional, creatinina de 1.5 mg/dL o más, y tipo de cirugía.',
        formula: 'Regresión logística sobre la cohorte NSQIP.',
        interpretacion: 'Probabilidad porcentual de infarto o paro cardiaco perioperatorio a 30 días. Un riesgo calculado mayor de 1% se considera elevado.'
      },
      {
        nombre: 'Clasificación ASA',
        componentes: 'Estado físico preanestésico de I a VI, con sufijo E si la cirugía es de emergencia.',
        formula: 'Asignación clínica, no numérica.',
        interpretacion: 'Es el lenguaje común con anestesiología y alimenta las dos escalas de Gupta. No es por sí sola una escala de riesgo quirúrgico.'
      },
      {
        nombre: 'ARISCAT',
        componentes: 'Edad, saturación de oxígeno, infección respiratoria en el último mes, anemia, tipo de incisión, duración de la cirugía y carácter de emergencia.',
        formula: 'Suma ponderada, de 0 a 123 puntos.',
        interpretacion: 'Menos de 26 puntos es riesgo bajo (1.6%), de 26 a 44 intermedio (13.3%) y 45 o más alto (42.1%) de complicación pulmonar posoperatoria.'
      },
      {
        nombre: 'Caprini',
        componentes: 'Edad, tipo de cirugía, movilidad, enfermedad venosa o trombofilia, y antecedentes personales.',
        formula: 'Suma ponderada de factores de riesgo.',
        interpretacion: 'Estratifica el riesgo de enfermedad tromboembólica venosa y traduce el puntaje en una recomendación concreta de profilaxis mecánica, farmacológica o ambas.'
      },
      {
        nombre: 'DASI',
        componentes: 'Doce actividades cotidianas con peso propio, de 0 a 58.2 puntos.',
        formula: 'VO₂ pico estimado igual a 0.43 por el DASI más 9.6, dividido entre 3.5 para obtener los MET.',
        interpretacion: 'El umbral de mala capacidad funcional son 4 MET. Por encima de ese umbral la ruta permite proceder aunque el riesgo calculado sea elevado.'
      },
      {
        nombre: 'STOP-BANG',
        componentes: 'Ronquido, cansancio diurno, apneas observadas, hipertensión, índice de masa corporal, edad, circunferencia del cuello y sexo.',
        formula: 'Un punto por ítem, de 0 a 8.',
        interpretacion: 'De 0 a 2 riesgo bajo, de 3 a 4 intermedio y de 5 a 8 alto de apnea obstructiva del sueño. Es cribado, no diagnóstico.'
      }
    ]
  },
  complicaciones: [
    {
      nombre: 'El paciente con stent coronario',
      color: '#8c3a34',
      definicion: 'Paciente con intervención coronaria percutánea previa que requiere cirugía no cardiaca. El conflicto es directo: suspender la antiagregación protege del sangrado quirúrgico pero expone a trombosis del stent, que es catastrófica y tiene mortalidad alta.',
      factores_riesgo: ['Tiempo transcurrido desde la intervención coronaria: es el dato que más pesa', 'Indicación del stent: el colocado por síndrome coronario agudo es de mayor riesgo que el colocado por enfermedad crónica', 'Tipo de stent, farmacoactivo o metálico', 'Riesgo hemorrágico del procedimiento previsto'],
      clinica: 'Establecer con precisión la fecha del procedimiento, el tipo de stent, el motivo por el que se colocó y qué antiagregantes toma exactamente. El paciente suele saber que "le pusieron un stent" pero no cuándo ni por qué: vale la pena buscar el reporte.',
      criterios_dx: 'Con cirugía electiva que exija interrumpir uno o más antiagregantes: diferir 14 días tras angioplastia con balón sin stent, 12 meses o más tras stent farmacoactivo por síndrome coronario agudo, y 6 meses o más si fue por enfermedad crónica. Con cirugía sensible al tiempo puede considerarse a partir de los 3 meses. Dentro de los primeros 30 días de cualquier stent, la cirugía electiva que exija interrumpir antiagregantes es potencialmente dañina.',
      tx_farmacologico: 'Continuar la aspirina de 75 a 100 mg siempre que sea posible. Suspender clopidogrel 5 días antes, ticagrelor de 3 a 5 días y prasugrel 7 días. Reanudar la doble antiagregación en las primeras 24 a 72 horas, cuando la hemostasia lo permita.',
      tx_medico: 'La decisión corresponde a un equipo multidisciplinario con decisión compartida, pesando sangrado, trombosis y el costo de retrasar la cirugía. No usar de rutina puente con inhibidores de la glucoproteína IIb-IIIa, cangrelor ni heparina de bajo peso molecular.',
      seguimiento_hospitalario: 'Vigilancia estrecha de isquemia perioperatoria y reanudación temprana de la antiagregación.',
      algoritmo: [
        'Documentar fecha, tipo e indicación del stent.',
        'Calcular el tiempo transcurrido y compararlo con los umbrales de la guía.',
        'Decidir en equipo si se difiere o se opera.',
        'Definir qué antiagregante se continúa y cuál se suspende, con su fecha exacta.',
        'Programar la reanudación posoperatoria.'
      ]
    },
    {
      nombre: 'El paciente anticoagulado',
      color: '#3d5a73',
      definicion: 'Paciente con anticoagulación oral crónica por fibrilación auricular, válvula mecánica o enfermedad tromboembólica venosa que requiere cirugía o un procedimiento invasivo.',
      factores_riesgo: ['Fármaco concreto: antagonista de vitamina K o anticoagulante oral directo', 'Riesgo hemorrágico del procedimiento', 'Función renal, que solo cambia el intervalo con dabigatrán', 'Indicación de la anticoagulación y riesgo tromboembólico', 'Anestesia neuroaxial prevista, con intervalos más estrictos que los quirúrgicos'],
      clinica: 'Precisar el fármaco exacto y su dosis, la indicación, la función renal, y el riesgo hemorrágico del procedimiento previsto. Preguntar además si hay anestesia neuroaxial planeada, porque sus intervalos son más estrictos que los quirúrgicos.',
      criterios_dx: 'Warfarina: suspender al menos 5 días antes. Acenocumarol: 2 a 3 días. Apixabán, rivaroxabán y edoxabán: 1 día si el riesgo hemorrágico es bajo o moderado y 2 si es alto. Dabigatrán: 1, 2, 2 o 4 días según riesgo hemorrágico y aclaramiento mayor o menor de 50 mL/min.',
      tx_medico: 'El cambio de práctica más importante de la última década es que el puente con heparina dejó de ser la conducta por defecto. La recomendación va en contra del puente en fibrilación auricular (recomendación fuerte, ensayo BRIDGE), válvula mecánica, enfermedad tromboembólica venosa aislada, colonoscopia con polipectomía y con cualquier anticoagulante oral directo. El puente sistemático multiplica el sangrado mayor sin reducir los eventos tromboembólicos.',
      tx_farmacologico: 'Reiniciar la warfarina 12 a 24 horas después con hemostasia adecuada; los anticoagulantes directos, más de 24 horas después, alrededor de 24 horas si el riesgo hemorrágico fue bajo o moderado y de 48 a 72 horas si fue alto. En implante de marcapasos o desfibrilador, el antagonista de vitamina K se continúa sin interrumpir.',
      algoritmo: [
        'Identificar fármaco, indicación y función renal.',
        'Clasificar el riesgo hemorrágico del procedimiento.',
        'Calcular los días exactos de suspensión.',
        'Decidir puente solo si el riesgo trombótico es excepcionalmente alto.',
        'Fijar por escrito la fecha y hora de reinicio.'
      ]
    },
    {
      nombre: 'El paciente diabético',
      color: '#966b35',
      definicion: 'Paciente con diabetes o intolerancia a la glucosa que requiere cirugía. Además del control glucémico perioperatorio, el problema hoy son dos clases de fármacos nuevos con riesgos específicos.',
      factores_riesgo: ['Hiperglucemia perioperatoria, asociada a infección de herida y peor cicatrización', 'Hipoglucemia intraoperatoria, difícil de detectar bajo anestesia general', 'Inhibidor de SGLT2 no suspendido: cetoacidosis euglucémica', 'Agonista del receptor de GLP-1 no suspendido: broncoaspiración'],
      clinica: 'Solicitar hemoglobina glucosilada si no se ha medido en los últimos 3 meses. Precisar el esquema completo, incluidos los inyectables semanales que el paciente puede no mencionar si los asocia solo a la pérdida de peso.',
      criterios_dx: 'Los dos datos que cambian la conducta son si toma un inhibidor de SGLT2 y si toma un agonista del receptor de GLP-1.',
      tx_farmacologico: 'Inhibidores de SGLT2: suspender de 3 a 4 días antes por riesgo de cetoacidosis diabética euglucémica. Agonistas del receptor de GLP-1: omitir el día del procedimiento si son diarios y suspender una semana antes si son semanales, por retraso del vaciamiento gástrico. Metformina: continuar, al contrario de lo que se enseñaba. Sulfonilureas: omitir la mañana de la cirugía. Insulina basal: mantener una fracción de la dosis; omitir la prandial en ayuno.',
      seguimiento_hospitalario: 'Ante acidosis metabólica posoperatoria inexplicada, medir cetonas aunque la glucemia sea normal: la cetoacidosis euglucémica se pasa por alto justamente porque la glucosa no alarma.',
      algoritmo: [
        'Revisar el esquema completo, incluidos inyectables semanales.',
        'Suspender el inhibidor de SGLT2 con 3 a 4 días de anticipación.',
        'Ajustar el agonista de GLP-1 según sea diario o semanal.',
        'Definir el ajuste de insulina para el día de la cirugía.',
        'Programar el control glucémico posoperatorio.'
      ]
    },
    {
      nombre: 'El paciente con EPOC o apnea del sueño',
      color: '#8c3a34',
      definicion: 'Paciente con enfermedad pulmonar crónica o apnea obstructiva del sueño, en quien el riesgo dominante es respiratorio y no cardiaco. Las complicaciones pulmonares posoperatorias son al menos tan frecuentes como las cardiacas y se subestiman de forma sistemática.',
      factores_riesgo: ['Edad avanzada', 'Saturación de oxígeno baja en aire ambiente', 'Infección respiratoria en el último mes', 'Anemia preoperatoria', 'Incisión abdominal alta o torácica', 'Cirugía prolongada, de más de 3 horas', 'Carácter de emergencia del procedimiento'],
      clinica: 'Medir la saturación en aire ambiente, buscar infección respiratoria en el último mes y aplicar STOP-BANG. Un paciente con apnea no diagnosticada llega al quirófano sin que nadie lo sepa, y es el que más se beneficia del cribado.',
      criterios_dx: 'ARISCAT estratifica el riesgo pulmonar. STOP-BANG de 5 o más indica riesgo alto de apnea obstructiva del sueño.',
      tx_medico: 'Continuar broncodilatadores y corticoide inhalado, incluida la dosis de la mañana; el paciente debe llevar su inhalador al quirófano. Optimizar el control del asma o la EPOC antes de la cirugía electiva es de las intervenciones preoperatorias con mejor rendimiento. Suspender el tabaco, idealmente con semanas de anticipación.',
      seguimiento_hospitalario: 'Con apnea del sueño, avisar a anestesiología: vía aérea difícil más probable y sensibilidad aumentada a opioides y sedantes. Analgesia multimodal para reducir la carga de opioides.',
      algoritmo: [
        'Medir saturación en aire ambiente.',
        'Calcular ARISCAT.',
        'Aplicar STOP-BANG.',
        'Optimizar tratamiento inhalado y suspender el tabaco.',
        'Comunicar el riesgo a anestesiología.'
      ]
    },
    {
      nombre: 'El paciente cirrótico',
      color: '#3f6b52',
      definicion: 'Paciente con hepatopatía crónica que requiere cirugía. Es de los escenarios con mayor mortalidad perioperatoria y de los peor estimados si se usan solo las escalas cardiacas.',
      factores_riesgo: ['Coagulopatía y trombocitopenia', 'Ascitis y encefalopatía', 'Hipertensión portal', 'Desnutrición', 'Cirugía abdominal o de urgencia, que multiplican el riesgo'],
      clinica: 'Buscar signos de descompensación, evaluar ascitis y encefalopatía, y revisar plaquetas, INR, bilirrubina, albúmina, creatinina y sodio.',
      criterios_dx: 'Child-Pugh y MELD-Na estratifican la gravedad. El riesgo quirúrgico sube marcadamente a partir de Child-Pugh B, y la cirugía electiva suele desaconsejarse en Child-Pugh C.',
      tx_medico: 'Corregir lo corregible: ascitis, encefalopatía, hiponatremia y desnutrición. Un INR prolongado en el cirrótico no equivale a protección frente a la trombosis: la hemostasia está reequilibrada, no anticoagulada, así que la tromboprofilaxis sigue estando indicada según el riesgo.',
      seguimiento_hospitalario: 'Vigilar descompensación posoperatoria, lesión renal aguda y encefalopatía. Evitar fármacos hepatotóxicos y ajustar sedantes.',
      algoritmo: [
        'Calcular Child-Pugh y MELD-Na.',
        'Buscar y tratar descompensaciones activas.',
        'Valorar si la cirugía electiva debe diferirse.',
        'Indicar tromboprofilaxis según riesgo, sin dejarse guiar solo por el INR.',
        'Planear la vigilancia posoperatoria de función hepática y renal.'
      ]
    },
    {
      nombre: 'El paciente con enfermedad renal crónica o en diálisis',
      color: '#3d5a73',
      definicion: 'Paciente con deterioro de la función renal, que modifica tanto el riesgo cardiovascular como la dosificación de casi todo el tratamiento perioperatorio.',
      factores_riesgo: ['Creatinina elevada: predictor tanto en el índice de Lee como en Gupta-MICA', 'Anemia de la enfermedad renal', 'Alteraciones electrolíticas, sobre todo hiperpotasemia', 'Disfunción plaquetaria urémica', 'Sobrecarga de volumen'],
      clinica: 'Revisar función renal, potasio, hemoglobina, estado de volumen y, en diálisis, el esquema y el acceso vascular. Proteger el brazo de la fístula.',
      criterios_dx: 'El aclaramiento de creatinina cambia directamente el intervalo de suspensión del dabigatrán y la dosificación de numerosos fármacos.',
      tx_medico: 'Programar la diálisis para el día previo a la cirugía, no el mismo día, para evitar hipovolemia e hipopotasemia en la inducción. Corregir la hiperpotasemia antes de entrar a quirófano. Evitar nefrotóxicos, incluidos los antiinflamatorios no esteroideos y el contraste yodado cuando sea posible.',
      seguimiento_hospitalario: 'Vigilar lesión renal aguda, potasio y volumen.',
      algoritmo: [
        'Calcular el aclaramiento de creatinina.',
        'Revisar potasio y estado de volumen.',
        'Coordinar la sesión de diálisis el día previo.',
        'Ajustar dosis de todos los fármacos de eliminación renal.',
        'Proteger el acceso vascular.'
      ]
    },
    {
      nombre: 'El anciano frágil',
      color: '#4a5c73',
      definicion: 'Paciente mayor cuya reserva fisiológica está disminuida. La fragilidad predice mortalidad, complicaciones, delirium, estancia prolongada e institucionalización al alta de forma independiente de la edad y de las escalas cardiacas.',
      factores_riesgo: ['Deterioro cognitivo previo', 'Dependencia funcional', 'Polifarmacia', 'Desnutrición', 'Caídas de repetición', 'Déficit visual o auditivo no corregido'],
      clinica: 'Aplicar una escala de fragilidad basada en la situación de dos semanas antes de la enfermedad actual, no en cómo está el paciente hoy en cama. Evaluar cognición basal, porque sin ella no se puede reconocer el delirium después.',
      criterios_dx: 'Fragilidad clínica de grado 5 o más marca riesgo perioperatorio elevado. El índice de Charlson dimensiona cuánto beneficio puede esperar el paciente de una cirugía electiva.',
      tx_medico: 'Valoración geriátrica integral cuando esté disponible, revisión de la polifarmacia, optimización nutricional y una conversación explícita sobre objetivos de la cirugía y sobre qué desenlaces son aceptables para el paciente.',
      tx_farmacologico: 'Evitar fármacos anticolinérgicos, benzodiacepinas y meperidina. Preferir analgesia multimodal.',
      seguimiento_hospitalario: 'Paquete de prevención no farmacológica del delirium: orientación repetida, movilización temprana, hidratación, control del dolor, lentes y auxiliar auditivo puestos, y protección del sueño. Es lo único que ha demostrado reducir la incidencia; los antipsicóticos no sirven como profilaxis.',
      algoritmo: [
        'Puntuar fragilidad según la situación basal.',
        'Documentar la cognición previa.',
        'Revisar y depurar la polifarmacia.',
        'Conversar sobre objetivos y desenlaces aceptables.',
        'Indicar el paquete de prevención de delirium desde el ingreso.'
      ]
    },
    {
      nombre: 'El paciente con obesidad',
      color: '#966b35',
      definicion: 'Paciente con obesidad que requiere cirugía. El riesgo se concentra en la vía aérea, la ventilación, la tromboembolia y la dosificación de fármacos.',
      factores_riesgo: ['Apnea obstructiva del sueño, con frecuencia no diagnosticada', 'Síndrome de hipoventilación asociado a obesidad', 'Enfermedad por reflujo gastroesofágico', 'Diabetes concomitante', 'Riesgo tromboembólico aumentado', 'Vía aérea previsiblemente difícil'],
      clinica: 'Aplicar STOP-BANG, buscar datos de hipoventilación e indagar sobre reflujo. Revisar si toma fármacos para bajar de peso, en particular agonistas del receptor de GLP-1.',
      criterios_dx: 'El índice de masa corporal mayor de 35 suma en STOP-BANG y el mayor de 25 suma en Caprini.',
      tx_medico: 'Anticipar la vía aérea difícil y comunicarla a anestesiología. Posición semisentada, oxigenación previa cuidadosa y movilización temprana.',
      tx_farmacologico: 'Tromboprofilaxis con dosis ajustada al peso. Suspender el agonista de GLP-1 según sea diario o semanal.',
      seguimiento_hospitalario: 'Vigilar hipoventilación y desaturación posoperatorias, sobre todo con opioides.',
      algoritmo: [
        'Calcular Caprini y STOP-BANG.',
        'Preguntar explícitamente por fármacos para bajar de peso.',
        'Definir la tromboprofilaxis ajustada al peso.',
        'Avisar a anestesiología del riesgo de vía aérea.',
        'Planear analgesia con el mínimo de opioides posible.'
      ]
    },
    {
      nombre: 'El paciente inmunosuprimido',
      color: '#7c2d2d',
      definicion: 'Paciente en tratamiento inmunosupresor por enfermedad autoinmune, trasplante o corticoterapia crónica. El conflicto es entre el riesgo de infección y mala cicatrización, y el de brote de la enfermedad de base o rechazo del injerto.',
      factores_riesgo: ['Corticoterapia crónica con supresión del eje suprarrenal', 'Tratamiento biológico activo', 'Inhibidores de calcineurina', 'Neutropenia', 'Mala cicatrización y riesgo de infección de herida'],
      clinica: 'Precisar dosis y duración exactas del corticoide, el intervalo de dosificación de cada biológico, y revisar biometría hemática.',
      criterios_dx: 'La supresión del eje hipotálamo-hipófisis-suprarrenal es probable con más de 20 mg diarios de prednisona por más de 3 semanas o con Cushing clínico; es improbable con menos de 5 mg diarios o con cualquier dosis por menos de 3 semanas. Entre 5 y 20 mg hay que individualizar.',
      tx_farmacologico: 'Nunca suspender el corticoide: continuar la dosis habitual y añadir dosis de estrés según el grado de supresión del eje y la magnitud de la cirugía. Programar la cirugía al final del intervalo de dosificación del biológico. Suspender los inhibidores de JAK 3 días antes. Continuar metotrexato e hidroxicloroquina. Los inmunosupresores de trasplante no se interrumpen: se coordina con el equipo de trasplante y se pasa a vía intravenosa si hace falta.',
      seguimiento_hospitalario: 'Ante hipotensión perioperatoria inexplicada en un paciente con corticoterapia crónica, pensar en crisis suprarrenal antes de escalar vasopresores. Reanudar los biológicos alrededor de 2 semanas después, con la herida cicatrizada y sin infección.',
      algoritmo: [
        'Documentar dosis y duración del corticoide.',
        'Decidir si corresponde dosis de estrés.',
        'Calcular la ventana óptima para cada biológico.',
        'Coordinar con el equipo de trasplante si aplica.',
        'Programar la reanudación posoperatoria.'
      ]
    },
    {
      nombre: 'El portador de marcapasos o desfibrilador',
      color: '#5c4a73',
      definicion: 'Paciente con dispositivo cardiaco implantable que requiere cirugía. El problema es la interferencia electromagnética del electrobisturí, que puede inhibir el marcapasos o provocar descargas inapropiadas del desfibrilador.',
      factores_riesgo: ['Dependencia del marcapasos', 'Uso de electrobisturí monopolar', 'Cercanía del campo quirúrgico al dispositivo', 'Desfibrilador con terapias antitaquicardia activas'],
      clinica: 'Identificar tipo de dispositivo, fabricante, indicación, fecha de la última revisión y si el paciente es dependiente del marcapasos. Solicitar interrogación del dispositivo si no es reciente.',
      criterios_dx: 'La conducta depende de si es marcapasos o desfibrilador, de la dependencia y de la localización de la cirugía.',
      tx_medico: 'Coordinar con electrofisiología o con el servicio que sigue el dispositivo. En general, desactivar las terapias antitaquicardia del desfibrilador durante la cirugía y reactivarlas después, con vigilancia continua y desfibrilador externo disponible mientras estén desactivadas. Preferir electrobisturí bipolar y colocar la placa de retorno lejos del dispositivo.',
      tx_farmacologico: 'En implante o recambio del dispositivo, el antagonista de vitamina K se continúa sin interrumpir: continuar gana sobre interrumpir y puentear.',
      seguimiento_hospitalario: 'Reactivar y reinterrogar el dispositivo antes de retirar la monitorización.',
      algoritmo: [
        'Identificar el dispositivo y la dependencia.',
        'Solicitar interrogación reciente.',
        'Acordar con electrofisiología la conducta intraoperatoria.',
        'Asegurar desfibrilador externo si se desactivan las terapias.',
        'Reactivar y reinterrogar antes del alta de la unidad de cuidados posanestésicos.'
      ]
    }
  ]
};

export const compCites = {
  'El paciente con stent coronario': { criterios_dx: [1], tx_farmacologico: [1, 2], tx_medico: [1] },
  'El paciente anticoagulado': { criterios_dx: [2], tx_medico: [2], tx_farmacologico: [2] },
  'El paciente diabético': { tx_farmacologico: [1, 3], criterios_dx: [1] },
  'El paciente con EPOC o apnea del sueño': { criterios_dx: [6, 7], factores_riesgo: [6] },
  'El anciano frágil': { criterios_dx: [1] },
  'El paciente con obesidad': { tx_farmacologico: [3] },
  'El paciente inmunosuprimido': { criterios_dx: [1] },
  'El portador de marcapasos o desfibrilador': { tx_farmacologico: [2] }
};

export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Índice de Lee (RCRI)': [4],
  'Gupta-MICA': [5],
  'Clasificación ASA': [1],
  'ARISCAT': [6],
  'Caprini': [1],
  'DASI': [1],
  'STOP-BANG': [7]
};
export const escalaCalc = {
  'Índice de Lee (RCRI)': 'leeindex',
  'Gupta-MICA': 'guptamica',
  'Clasificación ASA': 'asa',
  'ARISCAT': 'ariscat',
  'Caprini': 'caprini',
  'DASI': 'dasi',
  'STOP-BANG': 'stopbang'
};
export const diagCites = { clinica: [1] };
export const clasificacionCite = [1, 4, 5, 6];
export const seguimientoCite = [];

export const compGroups = [
  { title: 'Riesgo cardiovascular y antitrombótico', items: ['El paciente con stent coronario', 'El paciente anticoagulado', 'El portador de marcapasos o desfibrilador'] },
  { title: 'Riesgo metabólico y respiratorio', items: ['El paciente diabético', 'El paciente con EPOC o apnea del sueño', 'El paciente con obesidad'] },
  { title: 'Riesgo por falla orgánica', items: ['El paciente cirrótico', 'El paciente con enfermedad renal crónica o en diálisis'] },
  { title: 'Riesgo por reserva y por inmunidad', items: ['El anciano frágil', 'El paciente inmunosuprimido'] }
];

export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Qué pedir y qué no' },
  { id: 'clasificacion', label: 'Escalas de riesgo' },
  { id: 'complicaciones', label: 'Escenarios y poblaciones' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];

export const complicacionesIntro = 'La valoración preoperatoria casi nunca se presenta como un problema general: se presenta como un paciente concreto con una condición que cambia la conducta. Estos son los escenarios que concentran la mayoría de las interconsultas.';

export const arbol = {
  root: { title: 'VALORACIÓN PREOPERATORIA', color: '#3d5a73', target: 'definicion' },
  branches: [
    {
      title: 'Estudios', sub: 'qué pedir y qué no', color: '#3f6b52', target: 'diagnostico',
      leaves: [
        { title: 'Sí cambian', sub: 'la conducta', color: '#3f6b52', target: 'diagnostico' },
        { title: 'No de rutina', sub: 'solo retrasan', color: '#966b35', target: 'diagnostico' }
      ]
    },
    {
      title: 'Escalas', sub: 'estratificar', color: '#8c3a34', target: 'clasificacion',
      leaves: [
        { title: 'Cardiaco', sub: 'Lee · Gupta', color: '#8c3a34', target: 'clasificacion' },
        { title: 'Pulmonar', sub: 'ARISCAT · STOP-BANG', color: '#5c4a73', target: 'clasificacion' },
        { title: 'Funcional', sub: 'DASI · MET', color: '#3f6b52', target: 'clasificacion' }
      ]
    },
    {
      title: 'Escenarios', sub: 'el paciente concreto', color: '#4a5c73', target: 'complicaciones',
      leaves: [
        { title: 'Stent', sub: 'y anticoagulado', color: '#3d5a73', target: 'complicaciones' },
        { title: 'Frágil', sub: 'y comórbido', color: '#7c2d2d', target: 'complicaciones' }
      ]
    }
  ]
};
