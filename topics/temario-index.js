// topics/temario-index.js
// Temario holístico completo de Medicina Interna (15 bloques numerados + un bloque de
// acceso rápido "R1" al inicio), usado por la sección "Temario" de Inicio para mostrar el
// desglose completo del programa. Cada ítem que ya tiene un tema construido en el motor
// (ver topics/registry.js) trae `topicId`; el resto se muestra como "en desarrollo" hasta
// que se construya su contenido.
//
// Los clusters de los 5 temas evaluados en el kardex de R1 (Semiología, Fallas orgánicas,
// Neurología, Neumología, Dermatología) se definen una sola vez como constantes y se
// reutilizan tanto en su bloque temático de siempre como en el bloque "R1" de acceso
// rápido — así no hay dos copias del mismo dato que se puedan desincronizar.

const SEMIOLOGIA_CLUSTERS = [
  { name: 'Historia clínica y anamnesis dirigida', items: [
    { label: 'Historia clínica y anamnesis dirigida (estructura, interrogatorio por aparatos y sistemas, semiología del síntoma guía)', topicId: 'historia-clinica' }
  ] },
  { name: 'Exploración cardiovascular', items: [
    { label: 'Exploración cardiovascular (precordio, pulsos, presión venosa yugular, ruidos, soplos y extratonos)', topicId: 'exploracion-cardiovascular' }
  ] },
  { name: 'Exploración respiratoria', items: [
    { label: 'Exploración respiratoria (inspección, palpación, percusión y auscultación: ruidos normales y agregados)', topicId: 'exploracion-respiratoria' }
  ] },
  { name: 'Exploración abdominal', items: [
    { label: 'Exploración abdominal (IAPP, regiones, ascitis, hepatomegalia/esplenomegalia, signos de Murphy/McBurney/Rovsing/Blumberg)', topicId: 'exploracion-abdominal' }
  ] },
  { name: 'Exploración neurológica', items: [
    { label: 'Exploración neurológica (estado mental, Glasgow, pares craneales, fuerza/tono/reflejos, sensibilidad, coordinación, marcha, signos meníngeos y de liberación piramidal)', topicId: 'exploracion-neurologica' }
  ] },
  { name: 'Exploración de piel y faneras', items: [
    { label: 'Exploración de piel y faneras (lesiones elementales, patrones de distribución, ABCDE del melanoma, neoplasias cutáneas, uñas y cabello)', topicId: 'exploracion-piel-faneras' }
  ] },
  { name: 'Exploración osteoarticular y de extremidades', items: [
    { label: 'Exploración osteoarticular y de extremidades (articular, derrame, patrones, edema, TVP, insuficiencia venosa, ITB, isquemia arterial aguda, úlceras)', topicId: 'exploracion-osteoarticular' }
  ] },
  { name: 'Exploración de cabeza, cuello y ganglios', items: [
    { label: 'Exploración de cabeza, cuello y ganglios (tiroides, bocio, cadenas ganglionares, ganglio de Virchow, masas cervicales, soplo carotídeo)', topicId: 'exploracion-cabeza-cuello' }
  ] },
  { name: 'Signos y maniobras clásicas (referencia transversal)', items: [
    { label: 'Signos y maniobras clásicas (índice maestro + tétrada de insuficiencia aórtica, Courvoisier, Kehr, Chvostek/Trousseau, Lhermitte, Battle, Hoover, Gowers, Auspitz, Darier, Levine)', topicId: 'signos-clasicos' }
  ] }
];

const FALLAS_ORGANICAS_ITEMS = [
  'Síndrome de disfunción orgánica múltiple (SDMO/MODS): definición y fisiopatología',
  'Escalas de disfunción orgánica (SOFA, SOFA-2, APACHE II)',
  'Falla respiratoria aguda (enfoque integrador; detalle en Neumología)',
  'Falla renal aguda (enfoque integrador; detalle en Nefrología)',
  'Falla cardiovascular / estado de choque (enfoque integrador; detalle en Cardiovascular)',
  { label: 'Falla hepática aguda / ACLF', topicId: 'cirrosis-hepatica' },
  'Falla hematológica y coagulopatía (CID)',
  'Falla neurológica aguda (encefalopatía, coma)',
  'Manejo integral del paciente con falla orgánica múltiple (soporte, criterios de UCI, pronóstico)',
  'Ventilación asistida',
  'Alimentación parenteral y enteral',
  'Desnutrición del paciente crítico',
  'Síndrome de realimentación',
  'Miopatía y neuropatía del paciente crítico'
];

const NEUROLOGIA_CLUSTERS = [
  { name: 'Enfermedad cerebrovascular', items: [
    { label: 'Enfermedad vascular cerebral isquémica', topicId: 'enfermedad-cerebrovascular' },
    { label: 'Hemorragia intracraneal y subaracnoidea', topicId: 'enfermedad-cerebrovascular' },
    'Neoplasias del sistema nervioso central', 'Síndrome de hipertensión intracraneal', 'Traumatismo craneoencefálico', 'Vértigo central (síndrome vestibular agudo)'
  ] },
  { name: 'Trastornos paroxísticos y del movimiento', items: [
    { label: 'Estado epiléptico y epilepsia', topicId: 'estado-epileptico' },
    { label: 'Cefaleas', topicId: 'cefaleas' },
    'Enfermedad de Parkinson', 'Otros trastornos del movimiento', 'Esclerosis múltiple y otras enfermedades desmielinizantes'
  ] },
  { name: 'Alteración de conciencia y enfermedad neuromuscular', items: ['Delirium y coma', 'Síndrome demencial', 'Deterioro cognitivo', 'Enfermedad por priones', 'Encefalopatías metabólicas', 'Neuropatías periféricas', 'Parálisis facial', 'Disautonomía', 'Síndrome de Guillain-Barré y miastenia gravis', 'Distrofias musculares', 'Esclerosis lateral amiotrófica', 'Meningoencefalitis infecciosa', 'Encefalitis autoinmune'] }
];

// Solo los clusters de enfermedad respiratoria propiamente dicha (no medicina crítica
// general, que vive en Choque/Sepsis/Fallas orgánicas dentro del mismo bloque II).
const NEUMOLOGIA_R1_CLUSTERS = [
  { name: 'Enfermedad respiratoria crónica', items: ['EPOC estable y exacerbación', 'Asma', 'Enfermedad pulmonar intersticial e hipertensión pulmonar', 'Enfermedad pulmonar restrictiva', 'Nódulo pulmonar solitario y cáncer de pulmón', 'Apnea obstructiva del sueño', 'Sarcoidosis y otras enfermedades granulomatosas', 'Bronquiectasias', 'Neumoconiosis'] },
  { name: 'Infecciones respiratorias', items: ['Neumonía adquirida en la comunidad y nosocomial', 'Neumonía por aspiración', 'Tuberculosis', 'Absceso pulmonar', 'COVID-19 y sus complicaciones', 'Influenza y neumonía viral', 'Bronquitis aguda'] },
  { name: 'Insuficiencia respiratoria y ventilación', items: ['Insuficiencia respiratoria aguda y SDRA', 'Ventilación mecánica invasiva y no invasiva', 'Derrame pleural y patología pleural', 'Empiema pleural', 'Neumotórax', 'Hemoptisis'] }
];

const DERMATOLOGIA_ITEMS = [
  'Dermatología frecuente (psoriasis, urticaria, dermatitis, pénfigo y penfigoide, melanoma y otras neoplasias cutáneas)',
  'Dermatitis atópica',
  'Eritema nodoso y eritema multiforme',
  'Eritrodermia (dermatitis exfoliativa)',
  'Paniculitis',
  'Dermatosis neutrofílicas',
  'Dermatitis herpetiforme',
  'Dermatitis medicamentosa',
  'Dermatitis por contacto',
  'Carcinoma basocelular',
  'Carcinoma espinocelular',
  'Sarcoma de Kaposi',
  'Manifestaciones cutáneas de enfermedad sistémica'
];

export const temarioBlocks = [
  {
    title: 'R1',
    quickAccess: true,
    intro: 'Acceso rápido a los 5 temas evaluados en el kardex de primer año (Semiología y Exploración Física, Fallas orgánicas, Neurología, Neumología, Dermatología). Son los mismos subtemas que ya están en su bloque de siempre más abajo — esto es solo un atajo, no un temario aparte. Cada uno se abre por separado.',
    groups: [
      { name: 'Semiología y Exploración Física', clusters: SEMIOLOGIA_CLUSTERS },
      { name: 'Fallas orgánicas', clusters: [{ name: 'Fallas orgánicas', items: FALLAS_ORGANICAS_ITEMS }] },
      { name: 'Neurología', clusters: NEUROLOGIA_CLUSTERS },
      { name: 'Neumología', clusters: NEUMOLOGIA_R1_CLUSTERS },
      { name: 'Dermatología', clusters: [{ name: 'Dermatología', items: DERMATOLOGIA_ITEMS }] }
    ]
  },
  {
    title: 'I. Semiología y Exploración Física',
    intro: 'Base propedéutica sobre la que se apoya todo el resto del temario: obtención sistemática de la información clínica mediante el interrogatorio y la exploración física (inspección, palpación, percusión, auscultación).',
    clusters: SEMIOLOGIA_CLUSTERS
  },
  {
    title: 'II. Sistema Cardiovascular',
    intro: 'Reconocimiento, estabilización y manejo longitudinal de la enfermedad cardiovascular, la primera causa de morbimortalidad en el adulto.',
    clusters: [
      { name: 'Cardiopatía isquémica', items: ['Angina estable y pruebas de isquemia', 'Síndromes coronarios agudos (SCACEST, SCASEST) y reperfusión', 'Choque cardiogénico'] },
      { name: 'Insuficiencia cardiaca', items: ['IC aguda descompensada y edema agudo de pulmón', 'IC crónica con FEVI reducida y preservada', 'Dispositivos y terapias avanzadas (resincronización, asistencia ventricular)'] },
      { name: 'Arritmias y electrofisiología', items: ['Fibrilación y flutter auricular, anticoagulación', 'Taquiarritmias y bradiarritmias sintomáticas', 'Marcapasos y desfibriladores'] },
      { name: 'Enfermedad valvular, pericárdica y miocárdica', items: ['Valvulopatías nativas y protésicas', 'Cardiopatía reumática', 'Pericarditis y taponamiento cardiaco', { label: 'Miocardiopatías (hipertrófica, dilatada, restrictiva, arritmogénica del ventrículo derecho, periparto)', topicId: 'miocardiopatias' }, 'Miocarditis', 'Cor pulmonale', 'Cardiopatías congénitas en el adulto'] },
      { name: 'Hipertensión arterial y enfermedad tromboembólica', items: ['HTA esencial y urgencias/emergencias hipertensivas', 'HTA secundaria', 'Trombosis venosa profunda y tromboembolia pulmonar', 'Tromboflebitis superficial', 'Aneurisma y disección aórtica', 'Enfermedad arterial periférica'] }
    ]
  },
  {
    title: 'III. Neumología y Medicina Crítica',
    intro: 'Del manejo ambulatorio de la enfermedad respiratoria crónica al soporte vital del paciente críticamente enfermo.',
    clusters: [
      ...NEUMOLOGIA_R1_CLUSTERS,
      { name: 'Choque, sepsis y soporte vital', items: [
        { label: 'Sepsis y choque séptico', topicId: 'sepsis' },
        'Estado de choque (hipovolémico y distributivo)',
        { label: 'Sedación, analgesia y bloqueo neuromuscular en UCI (vasopresores y sedantes)', topicId: 'vasopresores-sedantes' },
        'Soporte vital avanzado y reanimación cardiopulmonar',
        'Anafilaxia'
      ] },
      { name: 'Fallas orgánicas', items: FALLAS_ORGANICAS_ITEMS },
      { name: 'Emergencias traumáticas y ambientales', items: ['Abdomen agudo', 'Síndrome de supresión alcohólica', 'Politraumatismo', 'Quemaduras', 'Ahogamiento', 'Broncoaspiración'] }
    ]
  },
  {
    title: 'IV. Gastroenterología y Hepatología',
    intro: 'Enfermedades del tubo digestivo, hígado y vía biliar, con énfasis en las complicaciones agudas que definen el ingreso hospitalario.',
    clusters: [
      { name: 'Tubo digestivo alto y bajo', items: ['ERGE y trastornos esofágicos', 'Enfermedad ácido-péptica y H. pylori', 'Enfermedad inflamatoria intestinal y síndrome de intestino irritable', 'Hemorragia digestiva alta y baja', 'Enfermedad diverticular del colon', 'Enfermedad vascular del intestino (isquemia mesentérica)', 'Neoplasias del esófago, estómago y colon-recto', 'Síndrome diarreico crónico y malabsorción intestinal', 'Constipación', 'Disfagia'] },
      { name: 'Páncreas y vía biliar', items: ['Pancreatitis aguda y crónica', 'Colestasis y enfermedades de la vía biliar', 'Neoplasias del páncreas y vía biliar'] },
      { name: 'Hepatología', items: [
        'Hepatitis virales',
        'Enfermedad hepática por alcohol y MASLD',
        'Hepatitis tóxica y lesión hepática inducida por fármacos (DILI)',
        { label: 'Cirrosis hepática y sus complicaciones (ascitis, PBE, encefalopatía, síndrome hepatorrenal, hemorragia variceal)', topicId: 'cirrosis-hepatica' },
        'Tumores hepáticos y carcinoma hepatocelular',
        'Enfermedades hepáticas por depósito (hemocromatosis, enfermedad de Wilson) y amiloidosis',
        'Síndrome ictérico (enfoque diagnóstico)'
      ] },
      { name: 'Interpretación de pruebas de función hepática', items: ['Interpretación de pruebas de función hepática anormales', 'Hipertransaminasemia en el paciente críticamente enfermo'] }
    ]
  },
  {
    title: 'V. Nefrología y Trastornos Hidroelectrolíticos',
    intro: 'Función renal, equilibrio ácido-base y electrolítico, ejes transversales a prácticamente todo paciente hospitalizado.',
    clusters: [
      { name: 'Función renal', items: ['Lesión renal aguda', 'Enfermedad renal crónica y sus complicaciones', 'Glomerulopatías', 'Síndrome nefrótico y síndrome nefrítico', 'Hematuria (enfoque diagnóstico)', 'Proteinuria (enfoque diagnóstico)', 'Nefropatía diabética e hipertensiva', 'Litiasis urinaria y nefropatía obstructiva', 'Enfermedad renal poliquística', 'Enfermedades de la próstata y neoplasias urológicas (riñón, vejiga, próstata)', 'Trasplante renal', 'Nefrotoxicidad por fármacos', 'Nefropatía túbulo-intersticial'] },
      { name: 'Equilibrio interno', items: ['Trastornos ácido-base', 'Trastornos del sodio y del agua', 'Trastornos del potasio, calcio, magnesio y fósforo'] },
      { name: 'Terapias de reemplazo renal', items: ['Hemodiálisis y diálisis peritoneal', 'Terapias de reemplazo renal continuas'] }
    ]
  },
  {
    title: 'VI. Endocrinología y Metabolismo',
    intro: 'Diabetes, tiroides y eje hormonal, con sus urgencias metabólicas características.',
    clusters: [
      { name: 'Diabetes mellitus', items: ['Diagnóstico y metas de control en tipo 1 y tipo 2', 'Cetoacidosis diabética y estado hiperosmolar hiperglucémico', 'Complicaciones crónicas microvasculares y macrovasculares', 'Pie diabético', 'Hipoglucemia y diabetes gestacional'] },
      { name: 'Tiroides y paratiroides', items: ['Hipotiroidismo e hipertiroidismo', 'Tiroiditis', 'Bocio difuso y multinodular no tóxico', 'Tormenta tiroidea y coma mixedematoso', 'Nódulo tiroideo y trastornos del metabolismo óseo y mineral', 'Neoplasias del tiroides'] },
      { name: 'Eje suprarrenal e hipofisario', items: ['Insuficiencia suprarrenal y crisis addisoniana', 'Síndrome de Cushing', 'Trastornos hipofisarios', 'Acromegalia e hiperprolactinemia', 'Síndromes poliúricos (diabetes insípida)', 'Hiperaldosteronismo primario', 'Incidentaloma y neoplasias suprarrenales', 'Hipogonadismo y ginecomastia', 'Neoplasia endocrina múltiple y síndromes de secreción hormonal ectópica'] },
      { name: 'Metabolismo', items: ['Dislipidemias', 'Obesidad', 'Síndrome cardiovascular-renal-metabólico (CKM)', 'Osteoporosis'] }
    ]
  },
  {
    title: 'VII. Hematología y Oncología',
    intro: 'Trastornos de las líneas celulares sanguíneas y principios oncológicos esenciales para el internista.',
    clusters: [
      { name: 'Anemias y trastornos de la serie roja', items: [{ label: 'Anemia ferropénica (pérdida de sangre, aporte/absorción, embarazo, refractaria)', topicId: 'anemia-ferropenica' }, { label: 'Anemia megaloblástica (deficiencia de B12 y folato)', topicId: 'anemia-megaloblastica' }, { label: 'Anemias hemolíticas hereditarias (esferocitosis, eliptocitosis, deficiencia de G6PD, deficiencia de piruvato cinasa)', topicId: 'anemias-hemoliticas-hereditarias' }, { label: 'Anemias hemolíticas adquiridas (autoinmunes, microangiopáticas, HPN)', topicId: 'anemias-hemoliticas-adquiridas' }, { label: 'Anemia de la enfermedad crónica (AEC clásica, enfermedad renal crónica, combinada, paciente crítico)', topicId: 'anemia-enfermedad-cronica' }, { label: 'Policitemia secundaria (eritrocitosis)', topicId: 'policitemia-secundaria' }, { label: 'Alteraciones de la serie blanca (leucocitosis, leucopenia, eosinofilia)', topicId: 'alteraciones-serie-blanca' }, 'Porfirias', { label: 'Anemia aplásica (idiopática, no grave, secundaria, congénita)', topicId: 'anemia-aplasica' }, 'Hemoglobinopatías (talasemias, drepanocitosis)'] },
      { name: 'Hemostasia y trombosis', items: ['Trastornos de la coagulación y trombofilias', 'Trombocitopenia y púrpuras', 'Trombocitosis reactiva', 'Transfusión de hemoderivados', 'Coagulación intravascular diseminada'] },
      { name: 'Neoplasias hematológicas', items: [{ label: 'Síndromes mielodisplásicos (bajo riesgo, alto riesgo, hipoplásico, relacionado a tratamiento)', topicId: 'sindromes-mielodisplasicos' }, { label: 'Neoplasias mieloproliferativas (policitemia vera, trombocitemia esencial, mielofibrosis)', topicId: 'sindromes-mieloproliferativos' }, 'Leucemias agudas y crónicas', 'Linfomas, incluyendo linfoma de Hodgkin', 'Mieloma múltiple', 'Linfadenopatías, hiperesplenismo y síndrome de hiperviscosidad'] },
      { name: 'Oncología general', items: ['Urgencias oncológicas (síndrome de lisis tumoral, compresión medular, síndrome de vena cava superior)', 'Neutropenia febril', 'Cuidados de soporte y control de síntomas en cáncer', 'Síndromes paraneoplásicos y metástasis de primario desconocido', 'Complicaciones de quimioterapia y radioterapia'] }
    ]
  },
  {
    title: 'VIII. Enfermedades Infecciosas',
    intro: 'Diagnóstico sindrómico, uso racional de antimicrobianos y manejo del huésped inmunocomprometido.',
    clusters: [
      { name: 'Infecciones frecuentes por sistema', items: ['Infecciones del tracto urinario', 'Infecciones de piel y tejidos blandos', 'Micosis superficiales (tiña, pitiriasis versicolor, onicomicosis)', 'Infecciones osteoarticulares', 'Endocarditis infecciosa', 'Infecciones de transmisión sexual (sífilis, uretritis)', 'Infecciones por herpesvirus (herpes simple, herpes zóster, mononucleosis infecciosa)'] },
      { name: 'Huésped inmunocomprometido', items: ['VIH/SIDA e infecciones oportunistas', 'Infecciones en el paciente neutropénico y trasplantado'] },
      { name: 'Principios generales', items: ['Uso racional de antimicrobianos y resistencia antimicrobiana', 'Vacunación en el adulto'] },
      { name: 'Infecciones tropicales, zoonosis y parasitosis', items: [
        'Enfermedades transmitidas por vectores (dengue, paludismo, leishmaniasis)',
        'Zoonosis y enfermedades bacterianas clásicas (brucelosis, fiebre tifoidea, leptospirosis, tétanos)',
        'Parasitosis intestinales y tisulares (amibiasis, giardiasis, helmintiasis, cisticercosis, triquinosis)',
        'Micosis endémicas e infecciones oportunistas (histoplasmosis, coccidioidomicosis, criptococosis, neumocistosis)',
        'Infección por citomegalovirus',
        'Shigelosis y otras diarreas bacterianas invasivas',
        'Toxoplasmosis',
        'Lepra',
        'Candidosis mucocutánea e invasiva'
      ] }
    ]
  },
  {
    title: 'IX. Reumatología e Inmunología Clínica',
    intro: 'Enfermedades autoinmunes sistémicas y artropatías, frecuentemente subdiagnosticadas fuera de la subespecialidad.',
    clusters: [
      { name: 'Artropatías inflamatorias', items: ['Artritis reumatoide', 'Espondiloartritis', 'Gota y enfermedad por depósito de cristales', 'Osteoartritis y artritis séptica'] },
      { name: 'Enfermedades autoinmunes sistémicas', items: ['Lupus eritematoso sistémico', 'Esclerosis sistémica y otras conectivopatías', 'Vasculitis sistémicas', 'Síndrome antifosfolípido y síndrome de Sjögren', 'Miopatías inflamatorias (polimiositis y dermatomiositis)', 'Síndrome de Raynaud'] },
      { name: 'Reumatismos de partes blandas y síndromes regionales', items: ['Bursitis y tendinitis', 'Lumbalgia', 'Síndrome de canal estrecho lumbar', 'Hernia de disco', 'Fibromialgia'] },
      { name: 'Enfoque diagnóstico', items: ['Fiebre de origen desconocido'] }
    ]
  },
  {
    title: 'X. Neurología',
    intro: 'Reconocimiento y manejo agudo de la enfermedad neurológica tiempo-dependiente.',
    clusters: NEUROLOGIA_CLUSTERS
  },
  {
    title: 'XI. Geriatría',
    intro: 'Particularidades fisiológicas y síndromes propios del adulto mayor hospitalizado.',
    clusters: [
      { name: 'Valoración y síndromes geriátricos', items: ['Valoración geriátrica integral', 'Biología del envejecimiento', 'Caídas, fragilidad y sarcopenia', 'Polifarmacia y deprescripción', 'Abdomen agudo en el adulto mayor'] },
      { name: 'Cognición', items: ['Delirium en el adulto mayor', 'Demencias', 'Enfermedad de Alzheimer', 'Depresión en el adulto mayor'] }
    ]
  },
  {
    title: 'XII. Medicina Interna Ambulatoria y Preventiva',
    intro: 'El internista como médico de cabecera del adulto: prevención, cribado y problemas frecuentes en consulta externa.',
    clusters: [
      { name: 'Prevención y cribado', items: ['Control de factores de riesgo cardiovascular', 'Tamizaje oncológico', 'Vacunación y medicina preventiva del adulto'] },
      { name: 'Salud de la mujer y embarazo', items: [
        'Salud de la mujer (climaterio, anticoncepción, cribado ginecológico)',
        'Complicaciones médicas del embarazo (preeclampsia-eclampsia, síndrome de HELLP) y cáncer ginecológico',
        'Cardiopatía y embarazo',
        'Lupus eritematoso y embarazo',
        'Convulsiones y embarazo',
        'Tiroiditis posparto',
        'Sepsis posaborto',
        'Cáncer de mama'
      ] },
      { name: 'Trastornos psiquiátricos frecuentes', items: [
        'Trastornos psiquiátricos frecuentes (depresión, ansiedad)',
        'Esquizofrenia',
        'Trastornos psicosexuales',
        'Síndromes somatomorfos',
        'Anorexia nerviosa',
        'Otros trastornos psiquiátricos frecuentes (trastornos del sueño, adicciones y alcoholismo, riesgo suicida)'
      ] },
      { name: 'Otros problemas frecuentes', items: ['Dermatología básica para el internista', 'Desnutrición y evaluación del estado nutricional'] },
      { name: 'Dermatología', items: DERMATOLOGIA_ITEMS },
      { name: 'Oftalmología', items: ['Oftalmología básica (ojo rojo y manifestaciones oculares de enfermedad sistémica)', 'Coriorretinitis'] },
      { name: 'Otorrinolaringología', items: ['Otorrinolaringología básica (rinosinusitis, otitis media, vértigo)', 'Laberintitis', 'Cáncer de laringe', 'Rinitis alérgica'] }
    ]
  },
  {
    title: 'XIII. Cuidados Paliativos, Bioética y Comunicación',
    intro: 'Competencias esenciales para el acompañamiento integral del paciente y su familia.',
    clusters: [
      { name: 'Control de síntomas', items: ['Manejo del dolor y síntomas al final de la vida', 'Sedación paliativa'] },
      { name: 'Toma de decisiones', items: ['Planificación anticipada de cuidados', 'Principios de bioética clínica', 'Comunicación de malas noticias', 'Futilidad terapéutica y limitación del esfuerzo terapéutico', 'Consentimiento informado y confidencialidad'] },
      { name: 'Tanatología y relación médico-paciente', items: ['Tanatología: el proceso de morir y el duelo', 'Duelo y apoyo a la familia', 'Relación médico-paciente'] }
    ]
  },
  {
    title: 'XIV. Farmacología Clínica y Toxicología',
    intro: 'Uso seguro del medicamento y reconocimiento de las intoxicaciones más frecuentes.',
    clusters: [
      { name: 'Prescripción segura', items: ['Reconciliación medicamentosa', 'Interacciones farmacológicas relevantes', 'Ajuste de dosis en falla renal y hepática', 'Reacciones adversas a medicamentos y farmacovigilancia'] },
      { name: 'Toxicología', items: ['Intoxicación por depresores del sistema nervioso central (benzodiacepinas, opioides, alcohol)', 'Intoxicación por insecticidas y raticidas (organofosforados, carbamatos)', 'Intoxicación por paracetamol (acetaminofén)', 'Intoxicación por salicilatos', 'Intoxicación por alcoholes tóxicos (metanol, etilenglicol)', 'Síndrome serotoninérgico y síndrome neuroléptico maligno', 'Antídotos y su uso'] }
    ]
  },
  {
    title: 'XV. Habilidades Transversales y Procedimientos',
    intro: 'Competencias prácticas e interpretativas que atraviesan todas las subespecialidades.',
    clusters: [
      { name: 'Procedimientos', items: ['Paracentesis, toracocentesis y punción lumbar', 'Colocación de accesos venosos centrales', 'Artrocentesis (aspiración articular)'] },
      { name: 'Interpretación diagnóstica', items: ['Electrocardiograma', 'Gasometría arterial', 'Radiografía de tórax', 'Radiografía de abdomen', 'Tomografía computada básica (tórax y abdomen)', 'Ecografía clínica a pie de cama (POCUS)'] },
      { name: 'Práctica profesional', items: ['Seguridad del paciente y calidad de la atención', 'Metodología de la investigación y lectura crítica de la literatura', 'Bioestadística clínica y epidemiología (sensibilidad, especificidad, riesgo relativo, NNT)', 'Razonamiento clínico y diagnóstico', 'Transiciones de cuidado y continuidad', 'Documentación clínica y nota médica'] }
    ]
  }
];
