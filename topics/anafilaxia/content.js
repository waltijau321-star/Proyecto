// topics/anafilaxia/content.js - Modulo 83: Anafilaxia.
// Basado en el practice parameter de 2020 de la Joint Task Force on Practice Parameters
// (AAAAI/ACAAI) con revision sistematica y analisis GRADE (Shaker MS, Wallace DV, et al.
// J Allergy Clin Immunol 2020;145(4):1082-1123, doi:10.1016/j.jaci.2020.01.017), que ya estaba
// en Bibliografia/. La parte de parada cardiaca remite a la Parte 9 de la AHA de 2025, y el
// diagnostico diferencial con la urticaria y el angioedema aislados a la guia internacional de
// urticaria de 2026. Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'anafilaxia',
  titulo: 'Anafilaxia',
  subtitulo: 'Módulo 83 &middot; Medicina Crítica',
  accent: '#8a3a52',
  accentDim: '#a65a72'
};

export const definicionText = `<p style="margin:0 0 14px;">La anafilaxia es una <strong>reacción alérgica sistémica aguda y potencialmente mortal</strong>, con manifestaciones clínicas muy variadas. Es un diagnóstico <strong>clínico</strong>: las pruebas confirmatorias tienen poca sensibilidad y llegan tarde, de modo que todo se decide a pie de cama con los criterios que propusieron en 2006 el National Institute of Allergy and Infectious Diseases y la Food Allergy and Anaphylaxis Network. Esos criterios tienen una sensibilidad del 95% y una especificidad del 71% en urgencias, y la guía insiste en algo que se olvida: <strong>cumplirlos no es requisito para administrar adrenalina</strong>.</p>
<p style="margin:0 0 14px;">El practice parameter de 2020 de la Joint Task Force on Practice Parameters se centra en lo que sigue a la adrenalina, que es donde más se equivoca la práctica habitual. Concluye que los <strong>antihistamínicos y los corticoides no son intervenciones fiables para prevenir la anafilaxia bifásica</strong>, que la <strong>adrenalina es la primera línea</strong> tanto en la reacción inicial como en la bifásica, que su administración <strong>no debe retrasarse</strong>, y que la gravedad de la reacción y la necesidad de más de una dosis de adrenalina son los marcadores que deben alargar la observación.</p>
<p style="margin:0 0 14px;">Para dimensionarla: la prevalencia a lo largo de la vida se estima entre el <strong>1.6% y el 5.1%</strong>, con una incidencia de 42 por cada 100.000 personas y año. La muerte es rara (entre 0.47 y 0.69 por millón de personas, o un 0.25% a 0.33% de las hospitalizaciones o visitas a urgencias por anafilaxia), pero el retraso de la adrenalina se asocia a mayor mortalidad. En adultos los desencadenantes principales son los <strong>fármacos y los venenos de himenopteros</strong>; en niños y adolescentes, los alimentos y los himenopteros.</p>`;

export const bibliografia = [
  'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis: a 2020 practice parameter update, systematic review, and Grading of Recommendations, Assessment, Development and Evaluation (GRADE) analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123. doi:10.1016/j.jaci.2020.01.017.',
  'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(suppl 2):S538-S577. doi:10.1161/CIR.0000000000001376.',
  'Zuberbier T, Abdul Latiff AH, Bernstein JA, et al. The International Guideline for the Definition, Classification, Diagnosis and Management of Urticaria. Allergy. 2026;81(8):2582-2632. doi:10.1111/all.70210.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La anafilaxia evidente',
      tituloB: 'La anafilaxia que se escapa',
      compensada: 'Inicio en minutos u horas tras la exposición, con afectación de piel y mucosas (urticaria generalizada, prurito, rubor, edema de labios, lengua o uvula) acompañada de compromiso respiratorio (disnea, sibilancias, estridor, hipoxemia) o de hipotensión con signos de disfunción de órgano (síncope, hipotonía, incontinencia). Es la forma que todo el mundo reconoce, y aun así la adrenalina se infrautiliza: en una serie de anafilaxia por fármacos atendida en urgencias, solo el 8% de los pacientes la recibió.',
      descompensada: 'La guía subraya que los criterios permiten diagnosticar anafilaxia SIN compromiso hemodinámico, SIN manifestaciones cutáneas y en presentaciones leves, como un exantema con vómitos tras la exposición a un desencadenante probable. También debe diagnosticarse al paciente que llega estable y asintomático pero cuyos síntomas, ya resueltos, cumplian criterios, aunque en ese momento la adrenalina ya no este indicada. Y la hipotensión aislada tras la exposición a un alérgeno conocido para ese paciente basta por si sola.'
    },
    laboratorio: [
      { prueba: 'Triptasa sérica', utilidad: 'Su valor predictivo positivo es alto (93%) pero el negativo es bajo (17%): una triptasa normal NO descarta la anafilaxia, sobre todo en la desencadenada por alimentos, donde se eleva con menos constancia. Se asocia a la gravedad. Nunca debe retrasar el tratamiento.' },
      { prueba: 'Histamina, IL-6, IL-10 y receptor 1 del TNF', utilidad: 'Se correlacionan con la hipotensión y con el deterioro tardío en estudios prospectivos de urgencias, lo que apoya que la gravedad inicial esta ligada a los síntomas prolongados. Son herramientas de investigación, no de rutina.' },
      { prueba: 'Factor activador de plaquetas', utilidad: 'En un estudio fue el mediador que mejor se correlaciono con la gravedad: elevado en el 20%, 67% y 100% de las reacciones de grado 1, 2 y 3. Explica en parte por que los antihistamínicos no bastan. No se mide en la práctica.' },
      { prueba: 'Gasometría y lactato', utilidad: 'En la anafilaxia con compromiso respiratorio o choque, para valorar la oxigenación y la perfusión. Sirven para seguir la respuesta, no para diagnosticar.' },
      { prueba: 'Electrocardiograma y troponina', utilidad: 'En el paciente mayor o con cardiopatía, y tras dosis repetidas o adrenalina intravenosa, porque la adrenalina intravenosa en bolo se asocia a arritmias e infarto.' },
      { prueba: 'Pruebas de alergia diferidas', utilidad: 'No en la fase aguda. El desencadenante inicial sospechado a menudo no se confirma en el estudio posterior: en una serie de Florida solo el 37% de los pacientes identificaba un desencadenante concreto al llegar. De ahi la derivación al alergologo.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios clínicos de anafilaxia (calculadora disponible)', interpretacion: 'Los tres criterios del National Institute of Allergy and Infectious Diseases y la Food Allergy and Anaphylaxis Network. Basta con cumplir uno.', cutoff: 'Sensibilidad 95%, especificidad 71%; cociente de probabilidad negativo 0.07' },
      { metodo: 'Dosis de adrenalina intramuscular (calculadora disponible)', interpretacion: 'Calcula 0.01 mg/kg de la solución 1 mg/mL con el techo por edad.', cutoff: 'Máximo 0.5 mg en el adulto y 0.3 mg en el niño' },
      { metodo: 'Perfusión de adrenalina en la refractaria (calculadora disponible)', interpretacion: 'Convierte la dosis deseada en mL/h con la preparación que describe la guía para entornos sin bomba de precisión.', cutoff: 'De 2 a 10 mcg/min, titulando por tensión, frecuencia y oxigenación' },
      { metodo: 'Tiempo de observación (calculadora disponible)', interpretacion: 'Aplica los factores de riesgo de reacción bifásica y de anafilaxia mortal que recoge la guía.', cutoff: 'Sin factores de riesgo: 1 h asintomático puede ser razonable; con ellos, hasta 6 h o ingreso' },
      { metodo: 'Tensión arterial y presión de pulso', interpretacion: 'La hipotensión define el criterio 3 y una presión de pulso amplia es factor de riesgo de reacción bifásica (odds ratio 2.11). Se vigilan de forma seriada.', cutoff: 'La presión de pulso amplia se considera marcador de gravedad' },
      { metodo: 'Pulsioximetría y auscultación', interpretacion: 'El compromiso respiratorio es uno de los dominios de los criterios. El estridor y la disfonia avisan de edema de la via aérea superior.', cutoff: 'Cualquier compromiso respiratorio con afectación cutánea cumple el criterio 1' }
    ],
    imagen: [
      { modalidad: 'Ninguna en la fase aguda', hallazgos: 'La anafilaxia es un diagnóstico clínico y el tratamiento no espera a ninguna prueba de imagen. Pedirla en ese momento solo retrasa la adrenalina.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Si persiste la hipoxemia tras el tratamiento, para descartar edema pulmonar, broncoaspiración o neumotórax, sobre todo si hubo reanimación.' },
      { modalidad: 'Ecografía a pie de cama', hallazgos: 'En el choque que no responde, para valorar la volemia, la función ventricular y descartar otras causas de choque. Ayuda a orientar los sueros y el soporte vasoactivo.' },
      { modalidad: 'Laringoscopia', hallazgos: 'En el angioedema de la via aérea con estridor o disfonia, en manos expertas y con todo preparado para asegurar la via aérea.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La primera clasificación es la que decide el tratamiento: <strong>anafilaxia o reacción alérgica sin anafilaxia</strong>. La urticaria aislada tras un alérgeno puede responder a antihistamínicos; la anafilaxia exige adrenalina inmediata. La segunda es el <strong>curso temporal</strong>: unifasica, <strong>bifásica</strong> (recurrencia tras la mejoría completa, entre 1 y 72 horas después, aunque se ha propuesto un limite de 78) o persistente, que no responde del todo al tratamiento inicial y que <strong>no debe confundirse con la bifásica</strong>. La tercera es la <strong>gravedad</strong>, que junto a la necesidad de más de una dosis de adrenalina es el principal factor de riesgo de reacción bifásica.`,
    escalas: [
      { nombre: 'Criterios clínicos de anafilaxia (calculadora disponible)', componentes: 'Criterio 1: inicio agudo con piel o mucosas MÁS compromiso respiratorio o hipotensión con disfunción de órgano. Criterio 2: dos o más de piel-mucosas, respiratorio, hipotensión o síntomas, y gastrointestinal, tras un alérgeno PROBABLE. Criterio 3: hipotensión tras un alérgeno CONOCIDO.', formula: 'Anafilaxia probable si se cumple al menos uno de los tres.', interpretacion: 'Validados de forma prospectiva en urgencias con sensibilidad del 95% y especificidad del 71%. Son una ayuda y no sustituyen el juicio clínico: la adrenalina no se limita a quien los cumple.' },
      { nombre: 'Dosis de adrenalina intramuscular (calculadora disponible)', componentes: 'Peso, edad y solución de 1 mg/mL.', formula: '0.01 mg/kg, con un máximo de 0.5 mg en el adulto y 0.3 mg en el niño, en la cara anterolateral del muslo.', interpretacion: 'Se puede repetir cada 5 a 15 minutos según la respuesta. La necesidad de más de una dosis es por sí misma un factor de riesgo de reacción bifásica.' },
      { nombre: 'Perfusión de adrenalina (calculadora disponible)', componentes: 'Dosis deseada en mcg/min y preparación.', formula: '1 mg en 1000 mL de suero salino = 1 mcg/mL. 2 mcg/min = 2 mL/min = 120 mL/h; 10 mcg/min = 600 mL/h.', interpretacion: 'Para la respuesta inadecuada a la adrenalina intramuscular y al suero intravenoso, preferiblemente con bomba y monitorización. La adrenalina intravenosa NO es la primera línea, ni siquiera en el hospital.' },
      { nombre: 'Tiempo de observación (calculadora disponible)', componentes: 'Gravedad, número de dosis, presión de pulso amplia, desencadenante desconocido, fármaco en el niño, y factores de riesgo de muerte.', formula: 'Sin factores: 1 h asintomático puede ser razonable. Con riesgo de bifásica de 17% o más o factores de riesgo de muerte: hasta 6 h o más, incluido ingreso.', interpretacion: 'Todo paciente queda en observación hasta la resolución completa, sea cual sea la gravedad. El valor predictivo negativo de 1 h de observación es del 95%, y el de 6 h del 97.3%.' },
      { nombre: 'Grados de reacción', componentes: 'Grado 1: solo signos cutáneos. Grado 2: anafilaxia leve o moderada. Grado 3: anafilaxia grave.', formula: 'Clasificación clínica por gravedad.', interpretacion: 'La gravedad se asocia a la elevación de mediadores y a la reacción bifásica (odds ratio 2.11). Una reacción de grado 1 en un paciente con riesgo puede justificar adrenalina si se sospecha anafilaxia inminente.' },
      { nombre: 'Factores de riesgo de anafilaxia grave o mortal', componentes: 'Enfermedad cardiovascular, asma, edad avanzada, mastocitosis, betabloqueantes, inhibidores de la enzima convertidora y falta de acceso a adrenalina o a emergencias.', formula: 'Valoración clínica de la comorbilidad.', interpretacion: 'Modifican el tiempo de observación y pueden justificar premedicación en situaciones concretas, aunque la evidencia es escasa. No contraindican la adrenalina: la guía recuerda que no existe contraindicación absoluta para usarla en la anafilaxia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer la anafilaxia: el diagnóstico es clínico',
      color: '#8a3a52',
      definicion: 'Reacción alérgica sistémica aguda que se diagnostica con criterios clínicos, sin esperar a pruebas, y cuya forma de presentación es muy variable.',
      fisiopatologia: 'En muchos casos el mecanismo es la unión de la IgE al receptor de alta afinidad de mastocitos y basófilos, que libera mediadores preformados y sintetiza otros nuevos. Pero hay anafilaxias con IgE específica baja o indetectable, implicación de IgG, complemento (C3a, C4a, C5a), neutrófilos, monocitos, macrófagos y plaquetas, y mediadores como los leucotrienos cisteinilicos o el factor activador de plaquetas. Esa diversidad explica por que bloquear solo la histamina no basta.',
      epidemiologia: 'Prevalencia a lo largo de la vida del 1.6% al 5.1%, incidencia de 42 por 100.000 personas y año. En adultos predominan los fármacos (antibióticos, antiinflamatorios no esteroideos, inmunomoduladores y biológicos) y los himenopteros; en niños, los alimentos y los himenopteros. En el adulto de mediana edad ocurre sobre todo en casa.',
      factores_riesgo: ['Enfermedad cardiovascular', 'Asma', 'Edad avanzada', 'Trastornos de mastocitos', 'Tratamiento con betabloqueantes o inhibidores de la enzima convertidora', 'Atopia en la anafilaxia por alimentos, ejercicio o latex', 'Reacción previa en la alergia alimentaria'],
      clinica: 'Cualquier combinación de piel y mucosas, respiratorio, cardiovascular y gastrointestinal. Puede faltar la piel y puede faltar la hipotensión. Los criterios permiten identificarla también en presentaciones leves, como un exantema con vómitos tras un desencadenante probable.',
      criterios_dx: 'Anafilaxia probable si se cumple uno de los tres criterios: (1) inicio agudo con piel o mucosas y compromiso respiratorio o hipotensión con disfunción de órgano; (2) dos o más dominios tras un alérgeno probable; (3) hipotensión tras un alérgeno conocido.',
      laboratorio: 'Triptasa sérica si se puede extraer sin retrasar nada: un valor alto apoya el diagnóstico, uno normal no lo descarta.',
      imagen: 'No aplica en la fase aguda.',
      complementarios: 'Monitorización de tensión, frecuencia, presión de pulso y saturación.',
      dx_diferencial: 'La urticaria aislada tras un alérgeno, que puede responder a antihistamínicos y no requiere adrenalina. El angioedema mediado por bradicinina, que no responde a adrenalina ni antihistamínicos. El síncope vasovagal, la crisis asmática, el ataque de panico, la intoxicación escombroide por histamina y otras causas de choque.',
      tx_medico: 'Retirar el desencadenante si es posible, pedir ayuda y colocar al paciente según su situación. La adrenalina intramuscular no espera a confirmar el diagnóstico.',
      tx_farmacologico: 'Adrenalina intramuscular en la cara anterolateral del muslo. Es la primera línea.',
      tx_intervencionista: 'Asegurar la via aérea si hay edema progresivo de la via aérea superior.',
      criterios_uci: 'Choque que no responde, compromiso de la via aérea o necesidad de perfusión de adrenalina.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observación hasta la resolución completa y más allá si hay factores de riesgo de reacción bifásica.',
      seguimiento_ambulatorio: 'Derivación al alergologo para confirmar el diagnóstico e identificar el desencadenante.',
      pronostico: 'La mortalidad por episodio es inferior al 0.5%. La paradoja de la anafilaxia es que muchos pacientes sobreviven sin tratamiento, pero no hay forma de saber de antemano quien no lo hara.',
      algoritmo: ['Sospechar ante síntomas multisistemicos de inicio agudo', 'Comprobar si se cumple alguno de los tres criterios', 'No exigir piel ni hipotensión para el diagnóstico', 'Adrenalina intramuscular sin esperar a pruebas', 'Extraer triptasa si no retrasa nada', 'Distinguir de la urticaria aislada y del angioedema por bradicinina']
    },
    {
      nombre: 'Adrenalina intramuscular: la primera línea',
      color: '#8c2e2e',
      definicion: 'Tratamiento de primera línea de la anafilaxia, tanto de la reacción inicial como de la bifásica, cuya administración no debe retrasarse.',
      fisiopatologia: 'Es un agonista no selectivo de todos los receptores adrenérgicos. Por los alfa-1 aumenta la resistencia periférica y revierte la hipotensión, la urticaria, el angioedema y el edema de la mucosa de la via aérea superior; por los beta-1 aumenta el gasto cardiaco; por los beta-2 revierte el broncoespasmo y, además, estabiliza mastocitos y basófilos, frenando la liberación de más mediadores. Trata todos los síntomas y puede evitar la escalada.',
      epidemiologia: 'Sigue infrautilizada pese al consenso internacional. El retraso de la adrenalina se asocia a mayor riesgo de muerte y de deterioro tardío.',
      factores_riesgo: ['Usar antihistamínicos o corticoides como primer tratamiento', 'Esperar a cumplir todos los criterios', 'Miedo infundado a los efectos adversos', 'Via subcutánea o deltoidea en lugar del muslo', 'No repetir la dosis cuando no hay respuesta'],
      clinica: 'Indicada ante la anafilaxia y, a juicio clínico, ante una anafilaxia inminente: por ejemplo, la urticaria generalizada inmediata tras una inyección de inmunoterapia, aunque todavía no se cumplan los criterios.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Monitorización tras cada dosis.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Via INTRAMUSCULAR en la cara anterolateral del MUSLO, preferida a la subcutánea y al deltoides. En voluntarios sanos alcanza su efecto máximo en unos 10 minutos y concentraciones máximas más altas que en el deltoides; en niños el muslo reduce además el riesgo de inyección intraósea inadvertida.',
      tx_farmacologico: '0.01 mg/kg de la solución de 1 mg/mL (1:1000), con un máximo de 0.5 mg en el adulto y 0.3 mg en el niño, repetible cada 5 a 15 minutos según la respuesta. Los autoinyectores incluyen formulaciones de 0.1 mg para lactantes, y la de 0.15 mg es una alternativa razonable si no se dispone de esa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Falta de respuesta a dosis repetidas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Registrar el número de dosis: más de una es factor de riesgo de reacción bifásica (odds ratio 4.82) y obliga a alargar la observación.',
      seguimiento_ambulatorio: 'Prescribir autoinyector y enseñar a usarlo, incluida la sujecion de niños pequeños para evitar lesiones por la aguja.',
      pronostico: 'No existe contraindicación absoluta para la adrenalina en la anafilaxia, aunque en ancianos con comorbilidad, cardiopatías congénitas complejas, hipertensión pulmonar o miocardiopatía previa por adrenalina hay que sopesar sus efectos.',
      algoritmo: ['Diagnosticar o sospechar anafilaxia inminente', 'Adrenalina 0.01 mg/kg intramuscular en el muslo', 'Máximo 0.5 mg en adulto, 0.3 mg en niño', 'Repetir cada 5 a 15 min si no hay respuesta', 'Contar las dosis: más de una alarga la observación', 'No sustituirla por antihistamínicos ni corticoides']
    },
    {
      nombre: 'Anafilaxia refractaria y choque',
      color: '#3d5a73',
      definicion: 'Anafilaxia con respuesta inadecuada a la adrenalina intramuscular y al suero intravenoso, que requiere adrenalina en perfusión y soporte en un entorno monitorizado.',
      fisiopatologia: 'El choque anafiláctico combina vasodilatación y fuga capilar masiva, con pérdida de volumen intravascular. La adrenalina contrarresta la vasodilatación y la fuga, pero si el volumen no se repone no hay precarga sobre la que actuar.',
      epidemiologia: 'En un estudio prospectivo australiano hubo deterioro tardío durante la observación en urgencias en el 17% de las reacciones, y el 69% de los que necesitaron adrenalina por ese deterioro empezo en las primeras 4 horas. El retraso de la adrenalina o una dosis insuficiente se consideran factores de riesgo.',
      factores_riesgo: ['Retraso de la primera dosis de adrenalina', 'Dosis insuficiente', 'Tratamiento con betabloqueantes', 'Cardiopatía de base', 'Mastocitosis', 'Anafilaxia por fármacos o venenos, donde predomina el choque'],
      clinica: 'Hipotensión que persiste pese a adrenalina intramuscular repetida y suero intravenoso, con mala perfusión de órgano.',
      criterios_dx: 'Respuesta inadecuada a la adrenalina intramuscular y al suero intravenoso.',
      laboratorio: 'Gasometría, lactato, electrocardiograma y troponina, sobre todo tras adrenalina intravenosa.',
      imagen: 'Ecografía a pie de cama para orientar volumen y función cardiaca.',
      complementarios: 'Monitorización continua de tensión, frecuencia y saturación.',
      dx_diferencial: 'Otras causas de choque, síndrome coronario agudo inducido por la anafilaxia o por la propia adrenalina, y la reacción persistente frente a la bifásica.',
      tx_medico: 'Suero intravenoso y monitorización en un entorno hospitalario. Si la anafilaxia evoluciona a parada cardiaca, se aplica el soporte vital avanzado habitual, y en ese contexto la via intravenosa sigue siendo la de primera elección para los fármacos.',
      tx_farmacologico: 'Adrenalina intravenosa en PERFUSIÓN continua por microgoteo, preferiblemente con bomba en un entorno monitorizado. En lugares remotos sin bomba, la guía describe añadir 1 mg (1 mL de 1:1000) a 1000 mL de suero salino e iniciar a 2 mcg/min (2 mL/min, 120 mL/h), subiendo hasta 10 mcg/min (10 mL/min, 600 mL/h), titulando de forma continua por tensión, frecuencia y oxigenación. La adrenalina intravenosa en bolo NO es la primera línea, ni siquiera en el hospital, por el riesgo de arritmias e infarto.',
      tx_intervencionista: 'Asegurar la via aérea si el edema progresa. Soporte vasoactivo y ventilatorio en la unidad de críticos.',
      criterios_uci: 'Toda anafilaxia que requiera perfusión de adrenalina, soporte de la via aérea o tenga choque persistente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización estrecha y observación prolongada tras la estabilización.',
      seguimiento_ambulatorio: 'Estudio del desencadenante con alergologia y revisión de los fármacos que agravan, como los betabloqueantes.',
      pronostico: 'Es la forma con mayor riesgo de muerte, y el retraso del tratamiento la favorece.',
      algoritmo: ['Repetir la adrenalina intramuscular cada 5 a 15 min', 'Suero intravenoso para la fuga capilar', 'Si no responde: adrenalina en perfusión, no en bolo', 'Iniciar a 2 mcg/min y titular hasta 10 mcg/min', 'Monitorizar ritmo, tensión y oxigenación', 'Asegurar la via aérea si el edema progresa', 'Si hay parada: soporte vital avanzado habitual']
    },
    {
      nombre: 'Antihistamínicos y corticoides: segunda línea',
      color: '#5a4a8c',
      definicion: 'Tratamientos coadyuvantes que se siguen usando de forma rutinaria pero que no tratan la hipotensión ni el broncoespasmo y no previenen la reacción bifásica.',
      fisiopatologia: 'Los antihistamínicos son agonistas inversos de los receptores de histamina. Tratan bien el prurito, el rubor y la urticaria, pero carecen del efecto vasoconstrictor, broncodilatador, inotrópico y estabilizador de mastocitos de la adrenalina, y la histamina es solo uno de muchos mediadores. Por via oral empiezan a actuar en unos 30 minutos, alcanzan su pico a los 60 a 120 y pueden tardar otros 60 a 90 en difundir a los tejidos. Los corticoides actuan sobre la expresión génica y pueden tardar de 4 a 6 horas en producir mejoría, sea cual sea la via.',
      epidemiologia: 'Se administran de forma rutinaria en la mayoría de las anafilaxias pese a la falta de evidencia de beneficio clínico, y su uso antes de la adrenalina retrasa el tratamiento de primera línea.',
      factores_riesgo: ['Administrarlos antes que la adrenalina', 'Usarlos en lugar de la adrenalina', 'Atribuirles la prevención de la reacción bifásica', 'Dar el alta antes por haberlos administrado'],
      clinica: 'Útiles para la comodidad del paciente: prurito, urticaria y rubor. No resuelven la hipotensión ni el broncoespasmo.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Pueden considerarse como tratamiento SECUNDARIO, siempre después de la adrenalina. Los antihistamínicos H1 intravenosos pueden usarse en el hospital o por los servicios de emergencia, pero nunca en lugar de la adrenalina intramuscular a tiempo.',
      tx_farmacologico: 'La guía sugiere NO administrar corticoides ni antihistamínicos como intervención para prevenir la anafilaxia bifásica (recomendación condicional, certeza muy baja). No se demostró beneficio claro de los H1 (odds ratio 0.71), los H2 (1.21) ni los corticoides (0.87). En niños, los corticoides incluso se asociaron a más bifásicas (1.55), aunque no se pudo excluir el efecto de la gravedad. El número necesario a tratar con H1 o corticoides para evitar una bifásica sería de 72 y 161.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Su administración no acorta ni sustituye la observación indicada por los factores de riesgo.',
      seguimiento_ambulatorio: 'Los antihistamínicos de segunda generación tienen mayor duración de acción y menos sedación que los de primera, con un inicio de acción similar.',
      pronostico: 'Los corticoides se asociaron a menor estancia hospitalaria, pero no a menos reconsultas en urgencias tras el alta.',
      algoritmo: ['Adrenalina primero, siempre', 'Antihistamínico solo después, para la piel y la comodidad', 'Corticoide opcional, sabiendo que tarda horas', 'No usarlos para prevenir la bifásica', 'No acortar la observación por haberlos dado']
    },
    {
      nombre: 'Reacción bifásica y tiempo de observación',
      color: '#3f6b52',
      definicion: 'Recurrencia de la anafilaxia tras la mejoría completa del episodio inicial, entre 1 y 72 horas después, aunque se ha propuesto un limite de 78 horas.',
      fisiopatologia: 'No se conoce bien. Los mismos mediadores que se asocian a la gravedad inicial (histamina, triptasa, IL-6, IL-10 y receptor 1 del TNF) se asocian al deterioro tardío, lo que sugiere que la intensidad de la reacción inicial esta ligada a la prolongación de los síntomas.',
      epidemiologia: 'Los estudios antiguos, con pacientes graves y sin criterios uniformes, daban hasta un 20%. Los estudios contemporáneos con los criterios actuales situan la bifásica en torno al 4% a 5% (rango 0.18% a 14.7%).',
      factores_riesgo: ['Anafilaxia inicial grave (odds ratio 2.11)', 'Más de una dosis de adrenalina (odds ratio 4.82)', 'Presión de pulso amplia (odds ratio 2.11)', 'Desencadenante desconocido (odds ratio 1.63)', 'Signos cutáneos (odds ratio 2.54)', 'Fármaco como desencadenante en el niño (odds ratio 2.35)'],
      clinica: 'Reaparición de los síntomas tras una mejoría COMPLETA. Hay que distinguirla de la reacción que no responde del todo al tratamiento y persiste o reaparece enseguida.',
      criterios_dx: 'Anafilaxia recurrente tras la resolución completa del episodio inicial, en la ventana de 1 a 72 horas.',
      laboratorio: 'Ninguno predice la bifásica en la práctica.',
      imagen: 'No aplica.',
      complementarios: 'Observación en un entorno capaz de tratar la anafilaxia.',
      dx_diferencial: 'La reacción persistente o resistente al tratamiento inicial, que no es bifásica.',
      tx_medico: 'Todo paciente queda en observación en un entorno capaz de tratar la anafilaxia hasta la resolución COMPLETA. La guía sugiere observación PROLONGADA si la anafilaxia fue grave o requirió más de una dosis de adrenalina (recomendación condicional, certeza muy baja). Sin factores de riesgo graves, el alta tras 1 hora asintomático puede ser razonable.',
      tx_farmacologico: 'El tratamiento de la bifásica es el mismo que el de la reacción inicial: adrenalina como piedra angular. Antihistamínicos y corticoides no la previenen.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Según la gravedad de la recurrencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si el riesgo estimado de bifásica es del 17% o más, o hay factores de riesgo de anafilaxia mortal (comorbilidad cardiovascular, falta de acceso a adrenalina o a emergencias, escasa capacidad de autocuidado), puede ser apropiado observar hasta 6 horas o más, incluido el ingreso.',
      seguimiento_ambulatorio: 'Educar a todos los pacientes sobre la posibilidad de una reacción bifásica, aunque no tengan factores de riesgo.',
      pronostico: 'El número de pacientes que hay que observar de forma prolongada para detectar una bifásica antes del alta sería de 41 en la anafilaxia grave y de 13 en la que requirió varias dosis. El valor predictivo negativo de 1 hora de observación es del 95%, y el de 6 horas o más del 97.3%.',
      algoritmo: ['Observar a TODOS hasta la resolución completa', 'Grave o más de una dosis de adrenalina: observación prolongada', 'Valorar también presión de pulso amplia y desencadenante desconocido', 'Sin factores: alta tras 1 h asintomático puede ser razonable', 'Riesgo alto o factores de muerte: hasta 6 h o ingreso', 'Si recurre: adrenalina de nuevo']
    },
    {
      nombre: 'Premedicación, alta y prevención',
      color: '#7a4363',
      definicion: 'Conjunto de decisiones sobre la premedicación en situaciones concretas y sobre lo que necesita el paciente al alta para no morir en el siguiente episodio.',
      fisiopatologia: 'La premedicación con antihistamínicos o corticoides puede reducir reacciones de hipersensibilidad en algunos protocolos, pero no impide la anafilaxia de forma fiable. La prevención real del siguiente episodio depende de identificar y evitar el desencadenante y de tener la adrenalina a mano.',
      epidemiologia: 'La mayoría de las reacciones mortales son impredecibles. Quien muere por alimentos suele tener una reacción alimentaria previa, mientras que quien muere por venenos o fármacos habitualmente no la tiene. En el registro britanico, la parada respiratoria predomino en las muertes por alimentos (86%) y el choque en las de fármacos y venenos.',
      factores_riesgo: ['Desencadenante no identificado', 'Falta de autoinyector o de formación para usarlo', 'Ausencia de seguimiento por alergologia', 'Comorbilidad cardiovascular', 'Tratamiento con betabloqueantes'],
      clinica: 'El paciente que se va de alta tras una anafilaxia resuelta.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Estudio alergologico diferido.',
      dx_diferencial: 'Distinguir la reacción inmediata al contraste de la reacción cutánea tardía grave mediada por linfocitos T, en la que la premedicación si puede aportar.',
      tx_medico: 'Educar a todos los pacientes sobre la anafilaxia, la evitación del desencadenante, los síntomas, la reacción bifásica, la adrenalina y el uso del autoinyector, y derivarlos al alergologo. En algunas situaciones, como un fármaco desencadenante fácil de evitar, la prescripcion de autoinyector puede diferirse con decisión compartida.',
      tx_farmacologico: 'Premedicación: la guía la SUGIERE en protocolos concretos de quimioterapia (odds ratio 0.49) y en la inmunoterapia rápida con aeroalergenos (riesgo relativo 0.62). Sugiere NO usarla de rutina con infliximab sin reacción previa ni en pacientes con reacción previa al contraste que van a recibir un contraste no iónico de baja osmolaridad o isoosmolar (riesgo relativo 1.07). Puede considerarse si el riesgo percibido es muy alto o hay comorbilidad de riesgo, aunque la evidencia es escasa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar antes del alta que el paciente sabe usar el autoinyector y cuando volver.',
      seguimiento_ambulatorio: 'Alergologia para confirmar el diagnóstico, identificar el desencadenante y reducir el riesgo de reacciones futuras. Identificar el desencadenante tras una reacción grave puede reducir el riesgo de otra grave, incluida la mortal.',
      pronostico: 'La premedicación no sustituye nunca la disponibilidad inmediata de adrenalina, porque puede fallar.',
      algoritmo: ['Educar sobre desencadenante, síntomas y bifásica', 'Prescribir y enseñar el autoinyector', 'Derivar a alergologia', 'Premedicar solo donde hay evidencia: quimioterapia concreta e inmunoterapia rápida', 'No premedicar de rutina el contraste de baja osmolaridad', 'Tener siempre adrenalina disponible aunque se premedique']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La anafilaxia no termina cuando el paciente mejora. La guía de 2020 dedica la mayor parte de su análisis a lo que ocurre después de la adrenalina, porque es ahi donde la práctica habitual se aparta de la evidencia.',
    parametros: [
      'Adrenalina intramuscular en el muslo como primera línea, sin esperar a cumplir todos los criterios y sin retrasarla.',
      'Contar las dosis: la necesidad de más de una es el factor de riesgo de bifásica de mayor peso (odds ratio 4.82).',
      'Antihistamínicos y corticoides solo como tratamiento secundario y nunca antes de la adrenalina.',
      'No contar con ellos para prevenir la reacción bifásica: la guía sugiere no usarlos con ese fin.',
      'Observar a todos hasta la resolución completa, en un entorno capaz de tratar la anafilaxia.',
      'Prolongar la observación si la reacción fue grave o necesito más de una dosis; valorar también presión de pulso amplia, desencadenante desconocido y fármaco en el niño.',
      'Hasta 6 horas o ingreso si el riesgo es alto o hay factores de riesgo de anafilaxia mortal.',
      'Antes del alta: educación, autoinyector y derivación al alergologo.'
    ],
    criterios_uci_general: 'Choque que no responde a adrenalina intramuscular y suero, necesidad de perfusión de adrenalina o compromiso de la via aérea.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Identificar y evitar el desencadenante con ayuda del alergologo, disponer siempre de adrenalina autoinyectable y saber usarla, y premedicar solo en las situaciones con evidencia: protocolos concretos de quimioterapia e inmunoterapia rápida con aeroalergenos.'
  }
};

export const compCites = {
  'Reconocer la anafilaxia: el diagnóstico es clínico': { clinica: [1], criterios_dx: [1], epidemiologia: [1], laboratorio: [1], dx_diferencial: [1, 3], tx_farmacologico: [1] },
  'Adrenalina intramuscular: la primera línea': { tx_medico: [1], tx_farmacologico: [1], pronostico: [1] },
  'Anafilaxia refractaria y choque': { tx_farmacologico: [1], epidemiologia: [1], tx_medico: [1, 2], criterios_dx: [1], laboratorio: [1] },
  'Antihistamínicos y corticoides: segunda línea': { fisiopatologia: [1], tx_farmacologico: [1] },
  'Reacción bifásica y tiempo de observación': { factores_riesgo: [1], tx_medico: [1], seguimiento_hospitalario: [1], pronostico: [1], criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1] },
  'Premedicación, alta y prevención': { tx_farmacologico: [1], tx_medico: [1], epidemiologia: [1] }
};

export const estigmasTitulo = 'Lo que hay que buscar en el primer minuto';
export const estigmas = [
  { nombre: 'Urticaria generalizada y edema de labios o lengua', descripcion: 'La afectación de piel y mucosas es lo más visible, pero puede faltar. Su ausencia NO descarta la anafilaxia.' },
  { nombre: 'Estridor o disfonia', descripcion: 'Avisan de edema de la via aérea superior. Es el síntoma que más rápido puede convertir una anafilaxia en una emergencia de via aérea.' },
  { nombre: 'Sibilancias y disnea', descripcion: 'Compromiso respiratorio bajo. Junto a la afectación cutánea basta para cumplir el criterio 1. Los antihistamínicos no lo resuelven.' },
  { nombre: 'Hipotensión, síncope o incontinencia', descripcion: 'Signos de disfunción de órgano. La hipotensión aislada tras un alérgeno CONOCIDO para ese paciente basta por si sola para el diagnóstico.' },
  { nombre: 'Presión de pulso amplia', descripcion: 'Marcador de gravedad y factor de riesgo de reacción bifásica. Conviene anotarla porque influye en el tiempo de observación.' },
  { nombre: 'Vómitos y dolor abdominal tras el alérgeno', descripcion: 'Los síntomas gastrointestinales cuentan como dominio en el criterio 2. Un exantema con vómitos tras un desencadenante probable puede ser ya anafilaxia.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Criterios clínicos de anafilaxia (calculadora disponible)': [1],
  'Dosis de adrenalina intramuscular (calculadora disponible)': [1],
  'Perfusión de adrenalina (calculadora disponible)': [1],
  'Tiempo de observación (calculadora disponible)': [1],
  'Grados de reacción': [1],
  'Factores de riesgo de anafilaxia grave o mortal': [1]
};

export const escalaCalc = {
  'Criterios clínicos de anafilaxia (calculadora disponible)': 'criterios-anafilaxia',
  'Dosis de adrenalina intramuscular (calculadora disponible)': 'adrenalina-im',
  'Perfusión de adrenalina (calculadora disponible)': 'perfusion-adrenalina',
  'Tiempo de observación (calculadora disponible)': 'observacion-bifasica'
};

export const compGroups = [
  { title: 'Reconocer', items: ['Reconocer la anafilaxia: el diagnóstico es clínico'] },
  { title: 'Tratar', items: ['Adrenalina intramuscular: la primera línea', 'Anafilaxia refractaria y choque', 'Antihistamínicos y corticoides: segunda línea'] },
  { title: 'Despues', items: ['Reacción bifásica y tiempo de observación', 'Premedicación, alta y prevención'] }
];

export const complicacionesIntro = 'La primera ficha es el diagnóstico, que es clínico y más amplio de lo que se cree: puede faltar la piel y puede faltar la hipotensión. Las tres siguientes son el tratamiento, ordenado como debería administrarse: adrenalina intramuscular primero, perfusión si no responde, y antihistamínicos y corticoides solo después y sin atribuirles lo que no hacen. Las dos últimas son lo que la guía de 2020 analiza con más detalle: cuanto tiempo observar y que se lleva el paciente al alta.';

export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Fichas' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'ANAFILAXIA', color: '#8a3a52', target: 'definicion' },
  branches: [
    { title: 'Reconocer', sub: 'Uno de tres criterios', color: '#8a3a52', target: 'complicaciones', leaves: [
      { title: 'Piel más otro dominio', sub: 'Respiratorio o hipotensión', color: '#8a3a52', target: 'complicaciones' },
      { title: 'Sin piel también', sub: 'Alérgeno probable o conocido', color: '#8a3a52', target: 'complicaciones' }
    ] },
    { title: 'Tratar', sub: 'Adrenalina primero', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Intramuscular en muslo', sub: '0.01 mg/kg, max 0.5 mg', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Refractaria', sub: 'Perfusión, no bolo', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Despues', sub: 'Observar y educar', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Bifasica', sub: 'Grave o más de una dosis', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Alta', sub: 'Autoinyector y alergologo', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1], imagen: [1] };
export const clasificacionCite = [1];
export const seguimientoCite = [1];
export const figurasDefinicion = ['anafilaxia-criterios'];
export const figurasClasificacion = ['anafilaxia-lineas', 'anafilaxia-observacion'];

export const figuras = {
  'anafilaxia-criterios': {
    titulo: 'Los tres criterios: basta con uno',
    fuente: 'Criterios del National Institute of Allergy and Infectious Diseases y la Food Allergy and Anaphylaxis Network, segun el practice parameter de 2020 (Shaker MS, et al. J Allergy Clin Immunol 2020;145(4):1082-1123).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Criterio</th><th>Que exige</th><th>Lo que permite reconocer</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">1</td><td>Inicio agudo (minutos a horas) con <strong>piel o mucosas</strong> MÁS <strong>compromiso respiratorio</strong> o <strong>hipotensión</strong> con síntomas de disfunción de órgano</td><td>La presentación clásica, aunque no se conozca el alérgeno</td></tr>
            <tr><td class="figure-org">2</td><td><strong>Dos o más</strong> de: piel-mucosas, respiratorio, hipotensión o síntomas asociados, <strong>gastrointestinal</strong>; de forma rápida tras un alérgeno <strong>PROBABLE</strong> para ese paciente</td><td>La anafilaxia <strong>sin piel</strong>, y las formas leves como exantema con vómitos</td></tr>
            <tr><td class="figure-org">3</td><td><strong>Hipotensión</strong> tras la exposición a un alérgeno <strong>CONOCIDO</strong> para ese paciente</td><td>El choque aislado, sin piel ni síntomas respiratorios</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">En urgencias tienen una <strong>sensibilidad del 95%</strong> y una especificidad del 71%, con un cociente de probabilidad positivo de 3.26 y negativo de 0.07. Pero la guía es explícita: <strong>cumplirlos no es requisito para administrar adrenalina</strong>. Un paciente en inmunoterapia con urticaria generalizada inmediata tras la inyección puede recibirla si se sospecha anafilaxia inminente. Y al revés: el paciente que llega asintomático pero cuyos síntomas ya resueltos cumplian criterios debe recibir el diagnóstico de anafilaxia.</div>`
  },
  'anafilaxia-lineas': {
    titulo: 'Primera y segunda línea: lo que hace cada una',
    fuente: 'Practice parameter de anafilaxia de 2020 (Shaker MS, et al. J Allergy Clin Immunol 2020;145(4):1082-1123).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Adrenalina</th><th>Antihistamínicos</th><th>Corticoides</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Lugar</td><td><span class="figure-tag fail">Primera línea</span></td><td>Segunda línea</td><td>Segunda línea</td></tr>
            <tr><td class="figure-org">Hipotensión y broncoespasmo</td><td>Los revierte</td><td>Poco eficaces</td><td>No actuan en la fase aguda</td></tr>
            <tr><td class="figure-org">Piel</td><td>La trata</td><td>Prurito, rubor y urticaria</td><td>No en la fase aguda</td></tr>
            <tr><td class="figure-org">Mastocitos</td><td>Los estabiliza (beta-2)</td><td>No los estabilizan</td><td>Efecto lento</td></tr>
            <tr><td class="figure-org">Rapidez</td><td>Efecto máximo en unos 10 min por via intramuscular</td><td>Pico oral a los 60 a 120 min</td><td>Mejoría a las 4 a 6 h</td></tr>
            <tr><td class="figure-org">Previene la bifásica</td><td>Tratarla pronto y bien parece reducirla</td><td><span class="figure-tag dys">No fiable</span></td><td><span class="figure-tag dys">No fiable</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Ni los antihistamínicos ni los corticoides deben administrarse <strong>antes</strong> ni <strong>en lugar</strong> de la adrenalina. La adrenalina intravenosa en bolo tampoco es la primera línea, ni siquiera en el hospital, por el riesgo de arritmias e infarto: si la intramuscular y el suero no bastan, se pasa a <strong>perfusión</strong> titulada, preferiblemente con bomba y monitorización. Y la guía recuerda que <strong>no existe contraindicación absoluta</strong> para la adrenalina en la anafilaxia.</div>`
  },
  'anafilaxia-observacion': {
    titulo: 'Cuanto observar: factores de riesgo de reacción bifásica',
    fuente: 'Revision sistematica y metaanalisis del practice parameter de 2020 (Shaker MS, et al. J Allergy Clin Immunol 2020;145(4):1082-1123).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Factor</th><th>Odds ratio</th><th>Que implica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Más de una dosis de adrenalina</td><td>4.82</td><td><span class="figure-tag fail">Observación prolongada</span></td></tr>
            <tr><td class="figure-org">Anafilaxia inicial grave</td><td>2.11</td><td><span class="figure-tag fail">Observación prolongada</span></td></tr>
            <tr><td class="figure-org">Signos cutáneos</td><td>2.54</td><td>Poco útil para decidir, porque son muy frecuentes</td></tr>
            <tr><td class="figure-org">Fármaco como desencadenante en el niño</td><td>2.35</td><td>Considerar observación prolongada</td></tr>
            <tr><td class="figure-org">Presión de pulso amplia</td><td>2.11</td><td>Marcador de gravedad</td></tr>
            <tr><td class="figure-org">Desencadenante desconocido</td><td>1.63</td><td>Considerar observación prolongada</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Todo paciente queda en observación hasta la <strong>resolución completa</strong>. Sin factores de riesgo graves, el alta tras <strong>1 hora asintomático</strong> puede ser razonable (valor predictivo negativo del 95%). Con un riesgo estimado de bifásica del 17% o más, o con factores de riesgo de anafilaxia mortal (comorbilidad cardiovascular, falta de acceso a adrenalina o a emergencias, escasa capacidad de autocuidado), puede ser apropiado observar <strong>hasta 6 horas o más</strong>, incluido el ingreso. Y conviene recordar el dato que desmonta un habito: la disnea al inicio se asoció a <strong>menos</strong> bifásicas (odds ratio 0.6), con baja confianza.</div>`
  }
};
