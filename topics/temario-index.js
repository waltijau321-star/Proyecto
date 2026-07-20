// topics/temario-index.js
// Temario holístico completo de Medicina Interna (14 bloques), usado por la sección
// "Temario" de Inicio para mostrar el desglose completo del programa. Cada ítem que ya
// tiene un tema construido en el motor (ver topics/registry.js) trae `topicId`; el resto
// se muestra como "en desarrollo" hasta que se construya su contenido.

export const temarioBlocks = [
  {
    title: 'I. Sistema Cardiovascular',
    intro: 'Reconocimiento, estabilización y manejo longitudinal de la enfermedad cardiovascular, la primera causa de morbimortalidad en el adulto.',
    clusters: [
      { name: 'Cardiopatía isquémica', items: ['Angina estable y pruebas de isquemia', 'Síndromes coronarios agudos (SCACEST, SCASEST) y reperfusión', 'Choque cardiogénico'] },
      { name: 'Insuficiencia cardiaca', items: ['IC aguda descompensada y edema agudo de pulmón', 'IC crónica con FEVI reducida y preservada', 'Dispositivos y terapias avanzadas (resincronización, asistencia ventricular)'] },
      { name: 'Arritmias y electrofisiología', items: ['Fibrilación y flutter auricular, anticoagulación', 'Taquiarritmias y bradiarritmias sintomáticas', 'Marcapasos y desfibriladores'] },
      { name: 'Enfermedad valvular, pericárdica y miocárdica', items: ['Valvulopatías nativas y protésicas', 'Pericarditis y taponamiento cardiaco', 'Miocardiopatías (dilatada, hipertrófica, restrictiva)'] },
      { name: 'Hipertensión arterial y enfermedad tromboembólica', items: ['HTA esencial y urgencias/emergencias hipertensivas', 'Trombosis venosa profunda y tromboembolia pulmonar'] }
    ]
  },
  {
    title: 'II. Neumología y Medicina Crítica',
    intro: 'Del manejo ambulatorio de la enfermedad respiratoria crónica al soporte vital del paciente críticamente enfermo.',
    clusters: [
      { name: 'Enfermedad respiratoria crónica', items: ['EPOC estable y exacerbación', 'Asma', 'Enfermedad pulmonar intersticial e hipertensión pulmonar'] },
      { name: 'Infecciones respiratorias', items: ['Neumonía adquirida en la comunidad y nosocomial', 'Tuberculosis'] },
      { name: 'Insuficiencia respiratoria y ventilación', items: ['Insuficiencia respiratoria aguda y SDRA', 'Ventilación mecánica invasiva y no invasiva', 'Derrame pleural y patología pleural'] },
      { name: 'Cuidados críticos y reanimación', items: [
        { label: 'Sepsis y choque séptico', topicId: 'sepsis' },
        'Disfunción orgánica múltiple',
        { label: 'Sedación, analgesia y bloqueo neuromuscular en UCI (vasopresores y sedantes)', topicId: 'vasopresores-sedantes' },
        'Soporte vital avanzado y reanimación cardiopulmonar'
      ] }
    ]
  },
  {
    title: 'III. Gastroenterología y Hepatología',
    intro: 'Enfermedades del tubo digestivo, hígado y vía biliar, con énfasis en las complicaciones agudas que definen el ingreso hospitalario.',
    clusters: [
      { name: 'Tubo digestivo alto y bajo', items: ['ERGE y trastornos esofágicos', 'Enfermedad ácido-péptica y H. pylori', 'Enfermedad inflamatoria intestinal y síndrome de intestino irritable', 'Hemorragia digestiva alta y baja'] },
      { name: 'Páncreas y vía biliar', items: ['Pancreatitis aguda y crónica', 'Colestasis y enfermedades de la vía biliar'] },
      { name: 'Hepatología', items: [
        'Hepatitis virales',
        'Enfermedad hepática por alcohol y MASLD',
        { label: 'Cirrosis hepática y sus complicaciones (ascitis, PBE, encefalopatía, síndrome hepatorrenal, hemorragia variceal)', topicId: 'cirrosis-hepatica' },
        'Tumores hepáticos y carcinoma hepatocelular'
      ] }
    ]
  },
  {
    title: 'IV. Nefrología y Trastornos Hidroelectrolíticos',
    intro: 'Función renal, equilibrio ácido-base y electrolítico, ejes transversales a prácticamente todo paciente hospitalizado.',
    clusters: [
      { name: 'Función renal', items: ['Lesión renal aguda', 'Enfermedad renal crónica y sus complicaciones', 'Glomerulopatías', 'Nefropatía diabética e hipertensiva'] },
      { name: 'Equilibrio interno', items: ['Trastornos ácido-base', 'Trastornos del sodio y del agua', 'Trastornos del potasio, calcio, magnesio y fósforo'] },
      { name: 'Terapias de reemplazo renal', items: ['Hemodiálisis y diálisis peritoneal', 'Terapias de reemplazo renal continuas'] }
    ]
  },
  {
    title: 'V. Endocrinología y Metabolismo',
    intro: 'Diabetes, tiroides y eje hormonal, con sus urgencias metabólicas características.',
    clusters: [
      { name: 'Diabetes mellitus', items: ['Diagnóstico y metas de control en tipo 1 y tipo 2', 'Cetoacidosis diabética y estado hiperosmolar hiperglucémico', 'Complicaciones crónicas microvasculares y macrovasculares'] },
      { name: 'Tiroides y paratiroides', items: ['Hipotiroidismo e hipertiroidismo', 'Tormenta tiroidea y coma mixedematoso', 'Nódulo tiroideo y trastornos del metabolismo óseo y mineral'] },
      { name: 'Eje suprarrenal e hipofisario', items: ['Insuficiencia suprarrenal y crisis addisoniana', 'Síndrome de Cushing', 'Trastornos hipofisarios'] },
      { name: 'Metabolismo', items: ['Dislipidemias', 'Obesidad'] }
    ]
  },
  {
    title: 'VI. Hematología y Oncología',
    intro: 'Trastornos de las líneas celulares sanguíneas y principios oncológicos esenciales para el internista.',
    clusters: [
      { name: 'Anemias y trastornos de la serie roja', items: ['Anemia ferropénica y megaloblástica', 'Anemias hemolíticas', 'Anemia de la enfermedad crónica'] },
      { name: 'Hemostasia y trombosis', items: ['Trastornos de la coagulación y trombofilias', 'Trombocitopenia y púrpuras', 'Transfusión de hemoderivados'] },
      { name: 'Neoplasias hematológicas', items: ['Síndromes mielodisplásicos', 'Neoplasias mieloproliferativas'] },
      { name: 'Oncología general', items: ['Urgencias oncológicas (síndrome de lisis tumoral, compresión medular, síndrome de vena cava superior)', 'Neutropenia febril', 'Cuidados de soporte y control de síntomas en cáncer'] }
    ]
  },
  {
    title: 'VII. Enfermedades Infecciosas',
    intro: 'Diagnóstico sindrómico, uso racional de antimicrobianos y manejo del huésped inmunocomprometido.',
    clusters: [
      { name: 'Infecciones frecuentes por sistema', items: ['Infecciones del tracto urinario', 'Infecciones de piel y tejidos blandos', 'Infecciones osteoarticulares', 'Endocarditis infecciosa'] },
      { name: 'Huésped inmunocomprometido', items: ['VIH/SIDA e infecciones oportunistas', 'Infecciones en el paciente neutropénico y trasplantado'] },
      { name: 'Principios generales', items: ['Uso racional de antimicrobianos y resistencia antimicrobiana', 'Vacunación en el adulto'] }
    ]
  },
  {
    title: 'VIII. Reumatología e Inmunología Clínica',
    intro: 'Enfermedades autoinmunes sistémicas y artropatías, frecuentemente subdiagnosticadas fuera de la subespecialidad.',
    clusters: [
      { name: 'Artropatías inflamatorias', items: ['Artritis reumatoide', 'Espondiloartritis', 'Gota y enfermedad por depósito de cristales'] },
      { name: 'Enfermedades autoinmunes sistémicas', items: ['Lupus eritematoso sistémico', 'Esclerosis sistémica y otras conectivopatías', 'Vasculitis sistémicas'] },
      { name: 'Enfoque diagnóstico', items: ['Fiebre de origen desconocido'] }
    ]
  },
  {
    title: 'IX. Neurología',
    intro: 'Reconocimiento y manejo agudo de la enfermedad neurológica tiempo-dependiente.',
    clusters: [
      { name: 'Enfermedad cerebrovascular', items: ['Enfermedad vascular cerebral isquémica', 'Hemorragia intracraneal y subaracnoidea'] },
      { name: 'Trastornos paroxísticos y del movimiento', items: ['Estado epiléptico y epilepsia', 'Cefaleas', 'Trastornos del movimiento'] },
      { name: 'Alteración de conciencia y enfermedad neuromuscular', items: ['Delirium y coma', 'Neuropatías periféricas', 'Síndrome de Guillain-Barré y miastenia gravis'] }
    ]
  },
  {
    title: 'X. Geriatría',
    intro: 'Particularidades fisiológicas y síndromes propios del adulto mayor hospitalizado.',
    clusters: [
      { name: 'Valoración y síndromes geriátricos', items: ['Valoración geriátrica integral', 'Caídas, fragilidad y sarcopenia', 'Polifarmacia y deprescripción'] },
      { name: 'Cognición', items: ['Delirium en el adulto mayor', 'Demencias'] }
    ]
  },
  {
    title: 'XI. Medicina Interna Ambulatoria y Preventiva',
    intro: 'El internista como médico de cabecera del adulto: prevención, cribado y problemas frecuentes en consulta externa.',
    clusters: [
      { name: 'Prevención y cribado', items: ['Control de factores de riesgo cardiovascular', 'Tamizaje oncológico', 'Vacunación y medicina preventiva del adulto'] },
      { name: 'Problemas frecuentes en consulta', items: ['Salud de la mujer (climaterio, anticoncepción, cribado ginecológico)', 'Dermatología básica para el internista', 'Trastornos psiquiátricos frecuentes (depresión, ansiedad)'] }
    ]
  },
  {
    title: 'XII. Cuidados Paliativos, Bioética y Comunicación',
    intro: 'Competencias esenciales para el acompañamiento integral del paciente y su familia.',
    clusters: [
      { name: 'Control de síntomas', items: ['Manejo del dolor y síntomas al final de la vida'] },
      { name: 'Toma de decisiones', items: ['Planificación anticipada de cuidados', 'Principios de bioética clínica', 'Comunicación de malas noticias'] }
    ]
  },
  {
    title: 'XIII. Farmacología Clínica y Toxicología',
    intro: 'Uso seguro del medicamento y reconocimiento de las intoxicaciones más frecuentes.',
    clusters: [
      { name: 'Prescripción segura', items: ['Reconciliación medicamentosa', 'Interacciones farmacológicas relevantes', 'Ajuste de dosis en falla renal y hepática'] },
      { name: 'Toxicología', items: ['Intoxicaciones agudas más frecuentes', 'Antídotos y su uso'] }
    ]
  },
  {
    title: 'XIV. Habilidades Transversales y Procedimientos',
    intro: 'Competencias prácticas e interpretativas que atraviesan todas las subespecialidades.',
    clusters: [
      { name: 'Procedimientos', items: ['Paracentesis, toracocentesis y punción lumbar', 'Colocación de accesos venosos centrales'] },
      { name: 'Interpretación diagnóstica', items: ['Electrocardiograma', 'Gasometría arterial', 'Imagen básica (radiografía de tórax, tomografía)'] },
      { name: 'Práctica profesional', items: ['Seguridad del paciente y calidad de la atención', 'Metodología de la investigación y lectura crítica de la literatura'] }
    ]
  }
];
