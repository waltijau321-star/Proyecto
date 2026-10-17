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
  subtitulo: 'Modulo 83 &middot; Medicina Critica',
  accent: '#8a3a52',
  accentDim: '#a65a72'
};

export const definicionText = `<p style="margin:0 0 14px;">La anafilaxia es una <strong>reaccion alergica sistemica aguda y potencialmente mortal</strong>, con manifestaciones clinicas muy variadas. Es un diagnostico <strong>clinico</strong>: las pruebas confirmatorias tienen poca sensibilidad y llegan tarde, de modo que todo se decide a pie de cama con los criterios que propusieron en 2006 el National Institute of Allergy and Infectious Diseases y la Food Allergy and Anaphylaxis Network. Esos criterios tienen una sensibilidad del 95% y una especificidad del 71% en urgencias, y la guia insiste en algo que se olvida: <strong>cumplirlos no es requisito para administrar adrenalina</strong>.</p>
<p style="margin:0 0 14px;">El practice parameter de 2020 de la Joint Task Force on Practice Parameters se centra en lo que sigue a la adrenalina, que es donde mas se equivoca la practica habitual. Concluye que los <strong>antihistaminicos y los corticoides no son intervenciones fiables para prevenir la anafilaxia bifasica</strong>, que la <strong>adrenalina es la primera linea</strong> tanto en la reaccion inicial como en la bifasica, que su administracion <strong>no debe retrasarse</strong>, y que la gravedad de la reaccion y la necesidad de mas de una dosis de adrenalina son los marcadores que deben alargar la observacion.</p>
<p style="margin:0 0 14px;">Para dimensionarla: la prevalencia a lo largo de la vida se estima entre el <strong>1.6% y el 5.1%</strong>, con una incidencia de 42 por cada 100.000 personas y a&#241;o. La muerte es rara (entre 0.47 y 0.69 por millon de personas, o un 0.25% a 0.33% de las hospitalizaciones o visitas a urgencias por anafilaxia), pero el retraso de la adrenalina se asocia a mayor mortalidad. En adultos los desencadenantes principales son los <strong>farmacos y los venenos de himenopteros</strong>; en ni&#241;os y adolescentes, los alimentos y los himenopteros.</p>`;

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
      compensada: 'Inicio en minutos u horas tras la exposicion, con afectacion de piel y mucosas (urticaria generalizada, prurito, rubor, edema de labios, lengua o uvula) acompa&#241;ada de compromiso respiratorio (disnea, sibilancias, estridor, hipoxemia) o de hipotension con signos de disfuncion de organo (sincope, hipotonia, incontinencia). Es la forma que todo el mundo reconoce, y aun asi la adrenalina se infrautiliza: en una serie de anafilaxia por farmacos atendida en urgencias, solo el 8% de los pacientes la recibio.',
      descompensada: 'La guia subraya que los criterios permiten diagnosticar anafilaxia SIN compromiso hemodinamico, SIN manifestaciones cutaneas y en presentaciones leves, como un exantema con vomitos tras la exposicion a un desencadenante probable. Tambien debe diagnosticarse al paciente que llega estable y asintomatico pero cuyos sintomas, ya resueltos, cumplian criterios, aunque en ese momento la adrenalina ya no este indicada. Y la hipotension aislada tras la exposicion a un alergeno conocido para ese paciente basta por si sola.'
    },
    laboratorio: [
      { prueba: 'Triptasa serica', utilidad: 'Su valor predictivo positivo es alto (93%) pero el negativo es bajo (17%): una triptasa normal NO descarta la anafilaxia, sobre todo en la desencadenada por alimentos, donde se eleva con menos constancia. Se asocia a la gravedad. Nunca debe retrasar el tratamiento.' },
      { prueba: 'Histamina, IL-6, IL-10 y receptor 1 del TNF', utilidad: 'Se correlacionan con la hipotension y con el deterioro tardio en estudios prospectivos de urgencias, lo que apoya que la gravedad inicial esta ligada a los sintomas prolongados. Son herramientas de investigacion, no de rutina.' },
      { prueba: 'Factor activador de plaquetas', utilidad: 'En un estudio fue el mediador que mejor se correlaciono con la gravedad: elevado en el 20%, 67% y 100% de las reacciones de grado 1, 2 y 3. Explica en parte por que los antihistaminicos no bastan. No se mide en la practica.' },
      { prueba: 'Gasometria y lactato', utilidad: 'En la anafilaxia con compromiso respiratorio o choque, para valorar la oxigenacion y la perfusion. Sirven para seguir la respuesta, no para diagnosticar.' },
      { prueba: 'Electrocardiograma y troponina', utilidad: 'En el paciente mayor o con cardiopatia, y tras dosis repetidas o adrenalina intravenosa, porque la adrenalina intravenosa en bolo se asocia a arritmias e infarto.' },
      { prueba: 'Pruebas de alergia diferidas', utilidad: 'No en la fase aguda. El desencadenante inicial sospechado a menudo no se confirma en el estudio posterior: en una serie de Florida solo el 37% de los pacientes identificaba un desencadenante concreto al llegar. De ahi la derivacion al alergologo.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios clinicos de anafilaxia (calculadora disponible)', interpretacion: 'Los tres criterios del National Institute of Allergy and Infectious Diseases y la Food Allergy and Anaphylaxis Network. Basta con cumplir uno.', cutoff: 'Sensibilidad 95%, especificidad 71%; cociente de probabilidad negativo 0.07' },
      { metodo: 'Dosis de adrenalina intramuscular (calculadora disponible)', interpretacion: 'Calcula 0.01 mg/kg de la solucion 1 mg/mL con el techo por edad.', cutoff: 'Maximo 0.5 mg en el adulto y 0.3 mg en el ni&#241;o' },
      { metodo: 'Perfusion de adrenalina en la refractaria (calculadora disponible)', interpretacion: 'Convierte la dosis deseada en mL/h con la preparacion que describe la guia para entornos sin bomba de precision.', cutoff: 'De 2 a 10 mcg/min, titulando por tension, frecuencia y oxigenacion' },
      { metodo: 'Tiempo de observacion (calculadora disponible)', interpretacion: 'Aplica los factores de riesgo de reaccion bifasica y de anafilaxia mortal que recoge la guia.', cutoff: 'Sin factores de riesgo: 1 h asintomatico puede ser razonable; con ellos, hasta 6 h o ingreso' },
      { metodo: 'Tension arterial y presion de pulso', interpretacion: 'La hipotension define el criterio 3 y una presion de pulso amplia es factor de riesgo de reaccion bifasica (odds ratio 2.11). Se vigilan de forma seriada.', cutoff: 'La presion de pulso amplia se considera marcador de gravedad' },
      { metodo: 'Pulsioximetria y auscultacion', interpretacion: 'El compromiso respiratorio es uno de los dominios de los criterios. El estridor y la disfonia avisan de edema de la via aerea superior.', cutoff: 'Cualquier compromiso respiratorio con afectacion cutanea cumple el criterio 1' }
    ],
    imagen: [
      { modalidad: 'Ninguna en la fase aguda', hallazgos: 'La anafilaxia es un diagnostico clinico y el tratamiento no espera a ninguna prueba de imagen. Pedirla en ese momento solo retrasa la adrenalina.' },
      { modalidad: 'Radiografia de torax', hallazgos: 'Si persiste la hipoxemia tras el tratamiento, para descartar edema pulmonar, broncoaspiracion o neumotorax, sobre todo si hubo reanimacion.' },
      { modalidad: 'Ecografia a pie de cama', hallazgos: 'En el choque que no responde, para valorar la volemia, la funcion ventricular y descartar otras causas de choque. Ayuda a orientar los sueros y el soporte vasoactivo.' },
      { modalidad: 'Laringoscopia', hallazgos: 'En el angioedema de la via aerea con estridor o disfonia, en manos expertas y con todo preparado para asegurar la via aerea.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La primera clasificacion es la que decide el tratamiento: <strong>anafilaxia o reaccion alergica sin anafilaxia</strong>. La urticaria aislada tras un alergeno puede responder a antihistaminicos; la anafilaxia exige adrenalina inmediata. La segunda es el <strong>curso temporal</strong>: unifasica, <strong>bifasica</strong> (recurrencia tras la mejoria completa, entre 1 y 72 horas despues, aunque se ha propuesto un limite de 78) o persistente, que no responde del todo al tratamiento inicial y que <strong>no debe confundirse con la bifasica</strong>. La tercera es la <strong>gravedad</strong>, que junto a la necesidad de mas de una dosis de adrenalina es el principal factor de riesgo de reaccion bifasica.`,
    escalas: [
      { nombre: 'Criterios clinicos de anafilaxia (calculadora disponible)', componentes: 'Criterio 1: inicio agudo con piel o mucosas MAS compromiso respiratorio o hipotension con disfuncion de organo. Criterio 2: dos o mas de piel-mucosas, respiratorio, hipotension o sintomas, y gastrointestinal, tras un alergeno PROBABLE. Criterio 3: hipotension tras un alergeno CONOCIDO.', formula: 'Anafilaxia probable si se cumple al menos uno de los tres.', interpretacion: 'Validados de forma prospectiva en urgencias con sensibilidad del 95% y especificidad del 71%. Son una ayuda y no sustituyen el juicio clinico: la adrenalina no se limita a quien los cumple.' },
      { nombre: 'Dosis de adrenalina intramuscular (calculadora disponible)', componentes: 'Peso, edad y solucion de 1 mg/mL.', formula: '0.01 mg/kg, con un maximo de 0.5 mg en el adulto y 0.3 mg en el ni&#241;o, en la cara anterolateral del muslo.', interpretacion: 'Se puede repetir cada 5 a 15 minutos segun la respuesta. La necesidad de mas de una dosis es por si misma un factor de riesgo de reaccion bifasica.' },
      { nombre: 'Perfusion de adrenalina (calculadora disponible)', componentes: 'Dosis deseada en mcg/min y preparacion.', formula: '1 mg en 1000 mL de suero salino = 1 mcg/mL. 2 mcg/min = 2 mL/min = 120 mL/h; 10 mcg/min = 600 mL/h.', interpretacion: 'Para la respuesta inadecuada a la adrenalina intramuscular y al suero intravenoso, preferiblemente con bomba y monitorizacion. La adrenalina intravenosa NO es la primera linea, ni siquiera en el hospital.' },
      { nombre: 'Tiempo de observacion (calculadora disponible)', componentes: 'Gravedad, numero de dosis, presion de pulso amplia, desencadenante desconocido, farmaco en el ni&#241;o, y factores de riesgo de muerte.', formula: 'Sin factores: 1 h asintomatico puede ser razonable. Con riesgo de bifasica de 17% o mas o factores de riesgo de muerte: hasta 6 h o mas, incluido ingreso.', interpretacion: 'Todo paciente queda en observacion hasta la resolucion completa, sea cual sea la gravedad. El valor predictivo negativo de 1 h de observacion es del 95%, y el de 6 h del 97.3%.' },
      { nombre: 'Grados de reaccion', componentes: 'Grado 1: solo signos cutaneos. Grado 2: anafilaxia leve o moderada. Grado 3: anafilaxia grave.', formula: 'Clasificacion clinica por gravedad.', interpretacion: 'La gravedad se asocia a la elevacion de mediadores y a la reaccion bifasica (odds ratio 2.11). Una reaccion de grado 1 en un paciente con riesgo puede justificar adrenalina si se sospecha anafilaxia inminente.' },
      { nombre: 'Factores de riesgo de anafilaxia grave o mortal', componentes: 'Enfermedad cardiovascular, asma, edad avanzada, mastocitosis, betabloqueantes, inhibidores de la enzima convertidora y falta de acceso a adrenalina o a emergencias.', formula: 'Valoracion clinica de la comorbilidad.', interpretacion: 'Modifican el tiempo de observacion y pueden justificar premedicacion en situaciones concretas, aunque la evidencia es escasa. No contraindican la adrenalina: la guia recuerda que no existe contraindicacion absoluta para usarla en la anafilaxia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer la anafilaxia: el diagnostico es clinico',
      color: '#8a3a52',
      definicion: 'Reaccion alergica sistemica aguda que se diagnostica con criterios clinicos, sin esperar a pruebas, y cuya forma de presentacion es muy variable.',
      fisiopatologia: 'En muchos casos el mecanismo es la union de la IgE al receptor de alta afinidad de mastocitos y basofilos, que libera mediadores preformados y sintetiza otros nuevos. Pero hay anafilaxias con IgE especifica baja o indetectable, implicacion de IgG, complemento (C3a, C4a, C5a), neutrofilos, monocitos, macrofagos y plaquetas, y mediadores como los leucotrienos cisteinilicos o el factor activador de plaquetas. Esa diversidad explica por que bloquear solo la histamina no basta.',
      epidemiologia: 'Prevalencia a lo largo de la vida del 1.6% al 5.1%, incidencia de 42 por 100.000 personas y a&#241;o. En adultos predominan los farmacos (antibioticos, antiinflamatorios no esteroideos, inmunomoduladores y biologicos) y los himenopteros; en ni&#241;os, los alimentos y los himenopteros. En el adulto de mediana edad ocurre sobre todo en casa.',
      factores_riesgo: ['Enfermedad cardiovascular', 'Asma', 'Edad avanzada', 'Trastornos de mastocitos', 'Tratamiento con betabloqueantes o inhibidores de la enzima convertidora', 'Atopia en la anafilaxia por alimentos, ejercicio o latex', 'Reaccion previa en la alergia alimentaria'],
      clinica: 'Cualquier combinacion de piel y mucosas, respiratorio, cardiovascular y gastrointestinal. Puede faltar la piel y puede faltar la hipotension. Los criterios permiten identificarla tambien en presentaciones leves, como un exantema con vomitos tras un desencadenante probable.',
      criterios_dx: 'Anafilaxia probable si se cumple uno de los tres criterios: (1) inicio agudo con piel o mucosas y compromiso respiratorio o hipotension con disfuncion de organo; (2) dos o mas dominios tras un alergeno probable; (3) hipotension tras un alergeno conocido.',
      laboratorio: 'Triptasa serica si se puede extraer sin retrasar nada: un valor alto apoya el diagnostico, uno normal no lo descarta.',
      imagen: 'No aplica en la fase aguda.',
      complementarios: 'Monitorizacion de tension, frecuencia, presion de pulso y saturacion.',
      dx_diferencial: 'La urticaria aislada tras un alergeno, que puede responder a antihistaminicos y no requiere adrenalina. El angioedema mediado por bradicinina, que no responde a adrenalina ni antihistaminicos. El sincope vasovagal, la crisis asmatica, el ataque de panico, la intoxicacion escombroide por histamina y otras causas de choque.',
      tx_medico: 'Retirar el desencadenante si es posible, pedir ayuda y colocar al paciente segun su situacion. La adrenalina intramuscular no espera a confirmar el diagnostico.',
      tx_farmacologico: 'Adrenalina intramuscular en la cara anterolateral del muslo. Es la primera linea.',
      tx_intervencionista: 'Asegurar la via aerea si hay edema progresivo de la via aerea superior.',
      criterios_uci: 'Choque que no responde, compromiso de la via aerea o necesidad de perfusion de adrenalina.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observacion hasta la resolucion completa y mas alla si hay factores de riesgo de reaccion bifasica.',
      seguimiento_ambulatorio: 'Derivacion al alergologo para confirmar el diagnostico e identificar el desencadenante.',
      pronostico: 'La mortalidad por episodio es inferior al 0.5%. La paradoja de la anafilaxia es que muchos pacientes sobreviven sin tratamiento, pero no hay forma de saber de antemano quien no lo hara.',
      algoritmo: ['Sospechar ante sintomas multisistemicos de inicio agudo', 'Comprobar si se cumple alguno de los tres criterios', 'No exigir piel ni hipotension para el diagnostico', 'Adrenalina intramuscular sin esperar a pruebas', 'Extraer triptasa si no retrasa nada', 'Distinguir de la urticaria aislada y del angioedema por bradicinina']
    },
    {
      nombre: 'Adrenalina intramuscular: la primera linea',
      color: '#8c2e2e',
      definicion: 'Tratamiento de primera linea de la anafilaxia, tanto de la reaccion inicial como de la bifasica, cuya administracion no debe retrasarse.',
      fisiopatologia: 'Es un agonista no selectivo de todos los receptores adrenergicos. Por los alfa-1 aumenta la resistencia periferica y revierte la hipotension, la urticaria, el angioedema y el edema de la mucosa de la via aerea superior; por los beta-1 aumenta el gasto cardiaco; por los beta-2 revierte el broncoespasmo y, ademas, estabiliza mastocitos y basofilos, frenando la liberacion de mas mediadores. Trata todos los sintomas y puede evitar la escalada.',
      epidemiologia: 'Sigue infrautilizada pese al consenso internacional. El retraso de la adrenalina se asocia a mayor riesgo de muerte y de deterioro tardio.',
      factores_riesgo: ['Usar antihistaminicos o corticoides como primer tratamiento', 'Esperar a cumplir todos los criterios', 'Miedo infundado a los efectos adversos', 'Via subcutanea o deltoidea en lugar del muslo', 'No repetir la dosis cuando no hay respuesta'],
      clinica: 'Indicada ante la anafilaxia y, a juicio clinico, ante una anafilaxia inminente: por ejemplo, la urticaria generalizada inmediata tras una inyeccion de inmunoterapia, aunque todavia no se cumplan los criterios.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Monitorizacion tras cada dosis.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Via INTRAMUSCULAR en la cara anterolateral del MUSLO, preferida a la subcutanea y al deltoides. En voluntarios sanos alcanza su efecto maximo en unos 10 minutos y concentraciones maximas mas altas que en el deltoides; en ni&#241;os el muslo reduce ademas el riesgo de inyeccion intraosea inadvertida.',
      tx_farmacologico: '0.01 mg/kg de la solucion de 1 mg/mL (1:1000), con un maximo de 0.5 mg en el adulto y 0.3 mg en el ni&#241;o, repetible cada 5 a 15 minutos segun la respuesta. Los autoinyectores incluyen formulaciones de 0.1 mg para lactantes, y la de 0.15 mg es una alternativa razonable si no se dispone de esa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Falta de respuesta a dosis repetidas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Registrar el numero de dosis: mas de una es factor de riesgo de reaccion bifasica (odds ratio 4.82) y obliga a alargar la observacion.',
      seguimiento_ambulatorio: 'Prescribir autoinyector y ense&#241;ar a usarlo, incluida la sujecion de ni&#241;os peque&#241;os para evitar lesiones por la aguja.',
      pronostico: 'No existe contraindicacion absoluta para la adrenalina en la anafilaxia, aunque en ancianos con comorbilidad, cardiopatias congenitas complejas, hipertension pulmonar o miocardiopatia previa por adrenalina hay que sopesar sus efectos.',
      algoritmo: ['Diagnosticar o sospechar anafilaxia inminente', 'Adrenalina 0.01 mg/kg intramuscular en el muslo', 'Maximo 0.5 mg en adulto, 0.3 mg en ni&#241;o', 'Repetir cada 5 a 15 min si no hay respuesta', 'Contar las dosis: mas de una alarga la observacion', 'No sustituirla por antihistaminicos ni corticoides']
    },
    {
      nombre: 'Anafilaxia refractaria y choque',
      color: '#3d5a73',
      definicion: 'Anafilaxia con respuesta inadecuada a la adrenalina intramuscular y al suero intravenoso, que requiere adrenalina en perfusion y soporte en un entorno monitorizado.',
      fisiopatologia: 'El choque anafilactico combina vasodilatacion y fuga capilar masiva, con perdida de volumen intravascular. La adrenalina contrarresta la vasodilatacion y la fuga, pero si el volumen no se repone no hay precarga sobre la que actuar.',
      epidemiologia: 'En un estudio prospectivo australiano hubo deterioro tardio durante la observacion en urgencias en el 17% de las reacciones, y el 69% de los que necesitaron adrenalina por ese deterioro empezo en las primeras 4 horas. El retraso de la adrenalina o una dosis insuficiente se consideran factores de riesgo.',
      factores_riesgo: ['Retraso de la primera dosis de adrenalina', 'Dosis insuficiente', 'Tratamiento con betabloqueantes', 'Cardiopatia de base', 'Mastocitosis', 'Anafilaxia por farmacos o venenos, donde predomina el choque'],
      clinica: 'Hipotension que persiste pese a adrenalina intramuscular repetida y suero intravenoso, con mala perfusion de organo.',
      criterios_dx: 'Respuesta inadecuada a la adrenalina intramuscular y al suero intravenoso.',
      laboratorio: 'Gasometria, lactato, electrocardiograma y troponina, sobre todo tras adrenalina intravenosa.',
      imagen: 'Ecografia a pie de cama para orientar volumen y funcion cardiaca.',
      complementarios: 'Monitorizacion continua de tension, frecuencia y saturacion.',
      dx_diferencial: 'Otras causas de choque, sindrome coronario agudo inducido por la anafilaxia o por la propia adrenalina, y la reaccion persistente frente a la bifasica.',
      tx_medico: 'Suero intravenoso y monitorizacion en un entorno hospitalario. Si la anafilaxia evoluciona a parada cardiaca, se aplica el soporte vital avanzado habitual, y en ese contexto la via intravenosa sigue siendo la de primera eleccion para los farmacos.',
      tx_farmacologico: 'Adrenalina intravenosa en PERFUSION continua por microgoteo, preferiblemente con bomba en un entorno monitorizado. En lugares remotos sin bomba, la guia describe a&#241;adir 1 mg (1 mL de 1:1000) a 1000 mL de suero salino e iniciar a 2 mcg/min (2 mL/min, 120 mL/h), subiendo hasta 10 mcg/min (10 mL/min, 600 mL/h), titulando de forma continua por tension, frecuencia y oxigenacion. La adrenalina intravenosa en bolo NO es la primera linea, ni siquiera en el hospital, por el riesgo de arritmias e infarto.',
      tx_intervencionista: 'Asegurar la via aerea si el edema progresa. Soporte vasoactivo y ventilatorio en la unidad de criticos.',
      criterios_uci: 'Toda anafilaxia que requiera perfusion de adrenalina, soporte de la via aerea o tenga choque persistente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizacion estrecha y observacion prolongada tras la estabilizacion.',
      seguimiento_ambulatorio: 'Estudio del desencadenante con alergologia y revision de los farmacos que agravan, como los betabloqueantes.',
      pronostico: 'Es la forma con mayor riesgo de muerte, y el retraso del tratamiento la favorece.',
      algoritmo: ['Repetir la adrenalina intramuscular cada 5 a 15 min', 'Suero intravenoso para la fuga capilar', 'Si no responde: adrenalina en perfusion, no en bolo', 'Iniciar a 2 mcg/min y titular hasta 10 mcg/min', 'Monitorizar ritmo, tension y oxigenacion', 'Asegurar la via aerea si el edema progresa', 'Si hay parada: soporte vital avanzado habitual']
    },
    {
      nombre: 'Antihistaminicos y corticoides: segunda linea',
      color: '#5a4a8c',
      definicion: 'Tratamientos coadyuvantes que se siguen usando de forma rutinaria pero que no tratan la hipotension ni el broncoespasmo y no previenen la reaccion bifasica.',
      fisiopatologia: 'Los antihistaminicos son agonistas inversos de los receptores de histamina. Tratan bien el prurito, el rubor y la urticaria, pero carecen del efecto vasoconstrictor, broncodilatador, inotropico y estabilizador de mastocitos de la adrenalina, y la histamina es solo uno de muchos mediadores. Por via oral empiezan a actuar en unos 30 minutos, alcanzan su pico a los 60 a 120 y pueden tardar otros 60 a 90 en difundir a los tejidos. Los corticoides actuan sobre la expresion genica y pueden tardar de 4 a 6 horas en producir mejoria, sea cual sea la via.',
      epidemiologia: 'Se administran de forma rutinaria en la mayoria de las anafilaxias pese a la falta de evidencia de beneficio clinico, y su uso antes de la adrenalina retrasa el tratamiento de primera linea.',
      factores_riesgo: ['Administrarlos antes que la adrenalina', 'Usarlos en lugar de la adrenalina', 'Atribuirles la prevencion de la reaccion bifasica', 'Dar el alta antes por haberlos administrado'],
      clinica: 'Utiles para la comodidad del paciente: prurito, urticaria y rubor. No resuelven la hipotension ni el broncoespasmo.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Pueden considerarse como tratamiento SECUNDARIO, siempre despues de la adrenalina. Los antihistaminicos H1 intravenosos pueden usarse en el hospital o por los servicios de emergencia, pero nunca en lugar de la adrenalina intramuscular a tiempo.',
      tx_farmacologico: 'La guia sugiere NO administrar corticoides ni antihistaminicos como intervencion para prevenir la anafilaxia bifasica (recomendacion condicional, certeza muy baja). No se demostro beneficio claro de los H1 (odds ratio 0.71), los H2 (1.21) ni los corticoides (0.87). En ni&#241;os, los corticoides incluso se asociaron a mas bifasicas (1.55), aunque no se pudo excluir el efecto de la gravedad. El numero necesario a tratar con H1 o corticoides para evitar una bifasica seria de 72 y 161.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Su administracion no acorta ni sustituye la observacion indicada por los factores de riesgo.',
      seguimiento_ambulatorio: 'Los antihistaminicos de segunda generacion tienen mayor duracion de accion y menos sedacion que los de primera, con un inicio de accion similar.',
      pronostico: 'Los corticoides se asociaron a menor estancia hospitalaria, pero no a menos reconsultas en urgencias tras el alta.',
      algoritmo: ['Adrenalina primero, siempre', 'Antihistaminico solo despues, para la piel y la comodidad', 'Corticoide opcional, sabiendo que tarda horas', 'No usarlos para prevenir la bifasica', 'No acortar la observacion por haberlos dado']
    },
    {
      nombre: 'Reaccion bifasica y tiempo de observacion',
      color: '#3f6b52',
      definicion: 'Recurrencia de la anafilaxia tras la mejoria completa del episodio inicial, entre 1 y 72 horas despues, aunque se ha propuesto un limite de 78 horas.',
      fisiopatologia: 'No se conoce bien. Los mismos mediadores que se asocian a la gravedad inicial (histamina, triptasa, IL-6, IL-10 y receptor 1 del TNF) se asocian al deterioro tardio, lo que sugiere que la intensidad de la reaccion inicial esta ligada a la prolongacion de los sintomas.',
      epidemiologia: 'Los estudios antiguos, con pacientes graves y sin criterios uniformes, daban hasta un 20%. Los estudios contemporaneos con los criterios actuales situan la bifasica en torno al 4% a 5% (rango 0.18% a 14.7%).',
      factores_riesgo: ['Anafilaxia inicial grave (odds ratio 2.11)', 'Mas de una dosis de adrenalina (odds ratio 4.82)', 'Presion de pulso amplia (odds ratio 2.11)', 'Desencadenante desconocido (odds ratio 1.63)', 'Signos cutaneos (odds ratio 2.54)', 'Farmaco como desencadenante en el ni&#241;o (odds ratio 2.35)'],
      clinica: 'Reaparicion de los sintomas tras una mejoria COMPLETA. Hay que distinguirla de la reaccion que no responde del todo al tratamiento y persiste o reaparece enseguida.',
      criterios_dx: 'Anafilaxia recurrente tras la resolucion completa del episodio inicial, en la ventana de 1 a 72 horas.',
      laboratorio: 'Ninguno predice la bifasica en la practica.',
      imagen: 'No aplica.',
      complementarios: 'Observacion en un entorno capaz de tratar la anafilaxia.',
      dx_diferencial: 'La reaccion persistente o resistente al tratamiento inicial, que no es bifasica.',
      tx_medico: 'Todo paciente queda en observacion en un entorno capaz de tratar la anafilaxia hasta la resolucion COMPLETA. La guia sugiere observacion PROLONGADA si la anafilaxia fue grave o requirio mas de una dosis de adrenalina (recomendacion condicional, certeza muy baja). Sin factores de riesgo graves, el alta tras 1 hora asintomatico puede ser razonable.',
      tx_farmacologico: 'El tratamiento de la bifasica es el mismo que el de la reaccion inicial: adrenalina como piedra angular. Antihistaminicos y corticoides no la previenen.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Segun la gravedad de la recurrencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si el riesgo estimado de bifasica es del 17% o mas, o hay factores de riesgo de anafilaxia mortal (comorbilidad cardiovascular, falta de acceso a adrenalina o a emergencias, escasa capacidad de autocuidado), puede ser apropiado observar hasta 6 horas o mas, incluido el ingreso.',
      seguimiento_ambulatorio: 'Educar a todos los pacientes sobre la posibilidad de una reaccion bifasica, aunque no tengan factores de riesgo.',
      pronostico: 'El numero de pacientes que hay que observar de forma prolongada para detectar una bifasica antes del alta seria de 41 en la anafilaxia grave y de 13 en la que requirio varias dosis. El valor predictivo negativo de 1 hora de observacion es del 95%, y el de 6 horas o mas del 97.3%.',
      algoritmo: ['Observar a TODOS hasta la resolucion completa', 'Grave o mas de una dosis de adrenalina: observacion prolongada', 'Valorar tambien presion de pulso amplia y desencadenante desconocido', 'Sin factores: alta tras 1 h asintomatico puede ser razonable', 'Riesgo alto o factores de muerte: hasta 6 h o ingreso', 'Si recurre: adrenalina de nuevo']
    },
    {
      nombre: 'Premedicacion, alta y prevencion',
      color: '#7a4363',
      definicion: 'Conjunto de decisiones sobre la premedicacion en situaciones concretas y sobre lo que necesita el paciente al alta para no morir en el siguiente episodio.',
      fisiopatologia: 'La premedicacion con antihistaminicos o corticoides puede reducir reacciones de hipersensibilidad en algunos protocolos, pero no impide la anafilaxia de forma fiable. La prevencion real del siguiente episodio depende de identificar y evitar el desencadenante y de tener la adrenalina a mano.',
      epidemiologia: 'La mayoria de las reacciones mortales son impredecibles. Quien muere por alimentos suele tener una reaccion alimentaria previa, mientras que quien muere por venenos o farmacos habitualmente no la tiene. En el registro britanico, la parada respiratoria predomino en las muertes por alimentos (86%) y el choque en las de farmacos y venenos.',
      factores_riesgo: ['Desencadenante no identificado', 'Falta de autoinyector o de formacion para usarlo', 'Ausencia de seguimiento por alergologia', 'Comorbilidad cardiovascular', 'Tratamiento con betabloqueantes'],
      clinica: 'El paciente que se va de alta tras una anafilaxia resuelta.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Estudio alergologico diferido.',
      dx_diferencial: 'Distinguir la reaccion inmediata al contraste de la reaccion cutanea tardia grave mediada por linfocitos T, en la que la premedicacion si puede aportar.',
      tx_medico: 'Educar a todos los pacientes sobre la anafilaxia, la evitacion del desencadenante, los sintomas, la reaccion bifasica, la adrenalina y el uso del autoinyector, y derivarlos al alergologo. En algunas situaciones, como un farmaco desencadenante facil de evitar, la prescripcion de autoinyector puede diferirse con decision compartida.',
      tx_farmacologico: 'Premedicacion: la guia la SUGIERE en protocolos concretos de quimioterapia (odds ratio 0.49) y en la inmunoterapia rapida con aeroalergenos (riesgo relativo 0.62). Sugiere NO usarla de rutina con infliximab sin reaccion previa ni en pacientes con reaccion previa al contraste que van a recibir un contraste no ionico de baja osmolaridad o isoosmolar (riesgo relativo 1.07). Puede considerarse si el riesgo percibido es muy alto o hay comorbilidad de riesgo, aunque la evidencia es escasa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar antes del alta que el paciente sabe usar el autoinyector y cuando volver.',
      seguimiento_ambulatorio: 'Alergologia para confirmar el diagnostico, identificar el desencadenante y reducir el riesgo de reacciones futuras. Identificar el desencadenante tras una reaccion grave puede reducir el riesgo de otra grave, incluida la mortal.',
      pronostico: 'La premedicacion no sustituye nunca la disponibilidad inmediata de adrenalina, porque puede fallar.',
      algoritmo: ['Educar sobre desencadenante, sintomas y bifasica', 'Prescribir y ense&#241;ar el autoinyector', 'Derivar a alergologia', 'Premedicar solo donde hay evidencia: quimioterapia concreta e inmunoterapia rapida', 'No premedicar de rutina el contraste de baja osmolaridad', 'Tener siempre adrenalina disponible aunque se premedique']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La anafilaxia no termina cuando el paciente mejora. La guia de 2020 dedica la mayor parte de su analisis a lo que ocurre despues de la adrenalina, porque es ahi donde la practica habitual se aparta de la evidencia.',
    parametros: [
      'Adrenalina intramuscular en el muslo como primera linea, sin esperar a cumplir todos los criterios y sin retrasarla.',
      'Contar las dosis: la necesidad de mas de una es el factor de riesgo de bifasica de mayor peso (odds ratio 4.82).',
      'Antihistaminicos y corticoides solo como tratamiento secundario y nunca antes de la adrenalina.',
      'No contar con ellos para prevenir la reaccion bifasica: la guia sugiere no usarlos con ese fin.',
      'Observar a todos hasta la resolucion completa, en un entorno capaz de tratar la anafilaxia.',
      'Prolongar la observacion si la reaccion fue grave o necesito mas de una dosis; valorar tambien presion de pulso amplia, desencadenante desconocido y farmaco en el ni&#241;o.',
      'Hasta 6 horas o ingreso si el riesgo es alto o hay factores de riesgo de anafilaxia mortal.',
      'Antes del alta: educacion, autoinyector y derivacion al alergologo.'
    ],
    criterios_uci_general: 'Choque que no responde a adrenalina intramuscular y suero, necesidad de perfusion de adrenalina o compromiso de la via aerea.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Identificar y evitar el desencadenante con ayuda del alergologo, disponer siempre de adrenalina autoinyectable y saber usarla, y premedicar solo en las situaciones con evidencia: protocolos concretos de quimioterapia e inmunoterapia rapida con aeroalergenos.'
  }
};

export const compCites = {
  'Reconocer la anafilaxia: el diagnostico es clinico': { clinica: [1], criterios_dx: [1], epidemiologia: [1], laboratorio: [1], dx_diferencial: [1, 3] },
  'Adrenalina intramuscular: la primera linea': { tx_medico: [1], tx_farmacologico: [1], pronostico: [1] },
  'Anafilaxia refractaria y choque': { tx_farmacologico: [1], epidemiologia: [1], tx_medico: [1, 2] },
  'Antihistaminicos y corticoides: segunda linea': { fisiopatologia: [1], tx_farmacologico: [1] },
  'Reaccion bifasica y tiempo de observacion': { factores_riesgo: [1], tx_medico: [1], seguimiento_hospitalario: [1], pronostico: [1] },
  'Premedicacion, alta y prevencion': { tx_farmacologico: [1], tx_medico: [1], epidemiologia: [1] }
};

export const estigmasTitulo = 'Lo que hay que buscar en el primer minuto';
export const estigmas = [
  { nombre: 'Urticaria generalizada y edema de labios o lengua', descripcion: 'La afectacion de piel y mucosas es lo mas visible, pero puede faltar. Su ausencia NO descarta la anafilaxia.' },
  { nombre: 'Estridor o disfonia', descripcion: 'Avisan de edema de la via aerea superior. Es el sintoma que mas rapido puede convertir una anafilaxia en una emergencia de via aerea.' },
  { nombre: 'Sibilancias y disnea', descripcion: 'Compromiso respiratorio bajo. Junto a la afectacion cutanea basta para cumplir el criterio 1. Los antihistaminicos no lo resuelven.' },
  { nombre: 'Hipotension, sincope o incontinencia', descripcion: 'Signos de disfuncion de organo. La hipotension aislada tras un alergeno CONOCIDO para ese paciente basta por si sola para el diagnostico.' },
  { nombre: 'Presion de pulso amplia', descripcion: 'Marcador de gravedad y factor de riesgo de reaccion bifasica. Conviene anotarla porque influye en el tiempo de observacion.' },
  { nombre: 'Vomitos y dolor abdominal tras el alergeno', descripcion: 'Los sintomas gastrointestinales cuentan como dominio en el criterio 2. Un exantema con vomitos tras un desencadenante probable puede ser ya anafilaxia.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Criterios clinicos de anafilaxia (calculadora disponible)': [1],
  'Dosis de adrenalina intramuscular (calculadora disponible)': [1],
  'Perfusion de adrenalina (calculadora disponible)': [1],
  'Tiempo de observacion (calculadora disponible)': [1],
  'Grados de reaccion': [1],
  'Factores de riesgo de anafilaxia grave o mortal': [1]
};

export const escalaCalc = {
  'Criterios clinicos de anafilaxia (calculadora disponible)': 'criterios-anafilaxia',
  'Dosis de adrenalina intramuscular (calculadora disponible)': 'adrenalina-im',
  'Perfusion de adrenalina (calculadora disponible)': 'perfusion-adrenalina',
  'Tiempo de observacion (calculadora disponible)': 'observacion-bifasica'
};

export const compGroups = [
  { title: 'Reconocer', items: ['Reconocer la anafilaxia: el diagnostico es clinico'] },
  { title: 'Tratar', items: ['Adrenalina intramuscular: la primera linea', 'Anafilaxia refractaria y choque', 'Antihistaminicos y corticoides: segunda linea'] },
  { title: 'Despues', items: ['Reaccion bifasica y tiempo de observacion', 'Premedicacion, alta y prevencion'] }
];

export const complicacionesIntro = 'La primera ficha es el diagnostico, que es clinico y mas amplio de lo que se cree: puede faltar la piel y puede faltar la hipotension. Las tres siguientes son el tratamiento, ordenado como deberia administrarse: adrenalina intramuscular primero, perfusion si no responde, y antihistaminicos y corticoides solo despues y sin atribuirles lo que no hacen. Las dos ultimas son lo que la guia de 2020 analiza con mas detalle: cuanto tiempo observar y que se lleva el paciente al alta.';

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
      { title: 'Piel mas otro dominio', sub: 'Respiratorio o hipotension', color: '#8a3a52', target: 'complicaciones' },
      { title: 'Sin piel tambien', sub: 'Alergeno probable o conocido', color: '#8a3a52', target: 'complicaciones' }
    ] },
    { title: 'Tratar', sub: 'Adrenalina primero', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Intramuscular en muslo', sub: '0.01 mg/kg, max 0.5 mg', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Refractaria', sub: 'Perfusion, no bolo', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Despues', sub: 'Observar y educar', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Bifasica', sub: 'Grave o mas de una dosis', color: '#3f6b52', target: 'complicaciones' },
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
            <tr><td class="figure-org">1</td><td>Inicio agudo (minutos a horas) con <strong>piel o mucosas</strong> MAS <strong>compromiso respiratorio</strong> o <strong>hipotension</strong> con sintomas de disfuncion de organo</td><td>La presentacion clasica, aunque no se conozca el alergeno</td></tr>
            <tr><td class="figure-org">2</td><td><strong>Dos o mas</strong> de: piel-mucosas, respiratorio, hipotension o sintomas asociados, <strong>gastrointestinal</strong>; de forma rapida tras un alergeno <strong>PROBABLE</strong> para ese paciente</td><td>La anafilaxia <strong>sin piel</strong>, y las formas leves como exantema con vomitos</td></tr>
            <tr><td class="figure-org">3</td><td><strong>Hipotension</strong> tras la exposicion a un alergeno <strong>CONOCIDO</strong> para ese paciente</td><td>El choque aislado, sin piel ni sintomas respiratorios</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">En urgencias tienen una <strong>sensibilidad del 95%</strong> y una especificidad del 71%, con un cociente de probabilidad positivo de 3.26 y negativo de 0.07. Pero la guia es explicita: <strong>cumplirlos no es requisito para administrar adrenalina</strong>. Un paciente en inmunoterapia con urticaria generalizada inmediata tras la inyeccion puede recibirla si se sospecha anafilaxia inminente. Y al reves: el paciente que llega asintomatico pero cuyos sintomas ya resueltos cumplian criterios debe recibir el diagnostico de anafilaxia.</div>`
  },
  'anafilaxia-lineas': {
    titulo: 'Primera y segunda linea: lo que hace cada una',
    fuente: 'Practice parameter de anafilaxia de 2020 (Shaker MS, et al. J Allergy Clin Immunol 2020;145(4):1082-1123).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Adrenalina</th><th>Antihistaminicos</th><th>Corticoides</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Lugar</td><td><span class="figure-tag fail">Primera linea</span></td><td>Segunda linea</td><td>Segunda linea</td></tr>
            <tr><td class="figure-org">Hipotension y broncoespasmo</td><td>Los revierte</td><td>Poco eficaces</td><td>No actuan en la fase aguda</td></tr>
            <tr><td class="figure-org">Piel</td><td>La trata</td><td>Prurito, rubor y urticaria</td><td>No en la fase aguda</td></tr>
            <tr><td class="figure-org">Mastocitos</td><td>Los estabiliza (beta-2)</td><td>No los estabilizan</td><td>Efecto lento</td></tr>
            <tr><td class="figure-org">Rapidez</td><td>Efecto maximo en unos 10 min por via intramuscular</td><td>Pico oral a los 60 a 120 min</td><td>Mejoria a las 4 a 6 h</td></tr>
            <tr><td class="figure-org">Previene la bifasica</td><td>Tratarla pronto y bien parece reducirla</td><td><span class="figure-tag dys">No fiable</span></td><td><span class="figure-tag dys">No fiable</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Ni los antihistaminicos ni los corticoides deben administrarse <strong>antes</strong> ni <strong>en lugar</strong> de la adrenalina. La adrenalina intravenosa en bolo tampoco es la primera linea, ni siquiera en el hospital, por el riesgo de arritmias e infarto: si la intramuscular y el suero no bastan, se pasa a <strong>perfusion</strong> titulada, preferiblemente con bomba y monitorizacion. Y la guia recuerda que <strong>no existe contraindicacion absoluta</strong> para la adrenalina en la anafilaxia.</div>`
  },
  'anafilaxia-observacion': {
    titulo: 'Cuanto observar: factores de riesgo de reaccion bifasica',
    fuente: 'Revision sistematica y metaanalisis del practice parameter de 2020 (Shaker MS, et al. J Allergy Clin Immunol 2020;145(4):1082-1123).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Factor</th><th>Odds ratio</th><th>Que implica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Mas de una dosis de adrenalina</td><td>4.82</td><td><span class="figure-tag fail">Observacion prolongada</span></td></tr>
            <tr><td class="figure-org">Anafilaxia inicial grave</td><td>2.11</td><td><span class="figure-tag fail">Observacion prolongada</span></td></tr>
            <tr><td class="figure-org">Signos cutaneos</td><td>2.54</td><td>Poco util para decidir, porque son muy frecuentes</td></tr>
            <tr><td class="figure-org">Farmaco como desencadenante en el ni&#241;o</td><td>2.35</td><td>Considerar observacion prolongada</td></tr>
            <tr><td class="figure-org">Presion de pulso amplia</td><td>2.11</td><td>Marcador de gravedad</td></tr>
            <tr><td class="figure-org">Desencadenante desconocido</td><td>1.63</td><td>Considerar observacion prolongada</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Todo paciente queda en observacion hasta la <strong>resolucion completa</strong>. Sin factores de riesgo graves, el alta tras <strong>1 hora asintomatico</strong> puede ser razonable (valor predictivo negativo del 95%). Con un riesgo estimado de bifasica del 17% o mas, o con factores de riesgo de anafilaxia mortal (comorbilidad cardiovascular, falta de acceso a adrenalina o a emergencias, escasa capacidad de autocuidado), puede ser apropiado observar <strong>hasta 6 horas o mas</strong>, incluido el ingreso. Y conviene recordar el dato que desmonta un habito: la disnea al inicio se asocio a <strong>menos</strong> bifasicas (odds ratio 0.6), con baja confianza.</div>`
  }
};
