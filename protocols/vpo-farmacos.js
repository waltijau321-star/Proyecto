// protocols/vpo-farmacos.js
// Manejo perioperatorio de fármacos: base de datos declarativa que alimenta la pestaña
// Fármacos de la sección VPO (engine/vpo.js). Es la pregunta que más veces recibe el
// residente de Medicina Interna en la interconsulta preoperatoria.
//
// Fuentes primarias (PDF en Bibliografia/XV. VPO/):
//  - Thompson A, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for
//    Perioperative Cardiovascular Management for Noncardiac Surgery.
//    Circulation. 2024;150(19):e351-e442.
//  - Douketis JD, et al. Perioperative Management of Antithrombotic Therapy: An American
//    College of Chest Physicians Clinical Practice Guideline. Chest. 2022;162(5):e207-e243.
//  - American Society of Anesthesiologists. Consensus-Based Guidance on Preoperative
//    Management of Patients on Glucagon-Like Peptide-1 (GLP-1) Receptor Agonists. 2023.
//
// Contrato de cada entrada:
//   { id, grupo, farmaco, alias[], conducta, resumen, preop, postop,
//     riesgoSuspender?, riesgoContinuar?, notas[]?, evidencia, fuente }
// `evidencia` es 'guia' cuando existe una recomendación formal de sociedad que respalda la
// conducta, y 'consenso' cuando es práctica aceptada sin guía propia. Se muestra al usuario:
// distinguir una cosa de la otra cambia cuánto peso darle frente al protocolo local.
// `conducta` es una de CONDUCTAS y define el color del chip en la lista.
// Los textos se inyectan con innerHTML: usar &lt; y &gt; en vez de < y >.

export const CONDUCTAS = {
  continuar:      { label: 'Continuar',      color: '#3f6b52' },
  suspender:      { label: 'Suspender',      color: '#8c3a34' },
  // Un tono más oscuro que el ámbar #966b35 del resto de la app: a 10.5 px el original se
  // queda en 4.26:1 sobre el fondo claro, por debajo del mínimo legible de 4.5:1.
  ajustar:        { label: 'Ajustar dosis',  color: '#85602e' },
  individualizar: { label: 'Individualizar', color: '#5c4a73' }
};

export const grupos = [
  { id: 'antiagregantes',   label: 'Antiagregantes y stent coronario',  accent: '#8c3a34' },
  { id: 'anticoagulantes',  label: 'Anticoagulantes',                   accent: '#3d5a73' },
  { id: 'cardiovasculares', label: 'Cardiovasculares',                  accent: '#3f6b52' },
  { id: 'antidiabeticos',   label: 'Antidiabéticos',                    accent: '#966b35' },
  { id: 'endocrinos',       label: 'Endocrinos y esteroides',           accent: '#5c4a73' },
  { id: 'inmunosupresores', label: 'Inmunosupresores y biológicos',     accent: '#7c2d2d' },
  { id: 'neuropsico',       label: 'Neurológicos y psicotrópicos',      accent: '#4a5c73' },
  { id: 'respiratorios',    label: 'Analgésicos, AINE y respiratorios', accent: '#6b5335' },
  { id: 'herbolarios',      label: 'Herbolarios y suplementos',         accent: '#5a6b35' },
  { id: 'habitos',          label: 'Hábitos y preparación',              accent: '#4a5c73' }
];

const CHEST = 'CHEST 2022 (Douketis JD, et al. Chest. 2022;162(5):e207-e243)';
const ACCAHA = 'ACC/AHA 2024 (Thompson A, et al. Circulation. 2024;150(19):e351-e442)';
// Guías específicas por especialidad, para los grupos que las tres guías perioperatorias
// principales no cubren.
const ACR22 = 'ACR/AAHKS 2022, Guideline for the Perioperative Management of Antirheumatic Medication in Patients With Rheumatic Diseases Undergoing Elective Total Hip or Total Knee Arthroplasty (su alcance es la artroplastia electiva de cadera o rodilla; aquí se extrapola al resto de cirugías)';
const WOODCOCK20 = 'Woodcock T, et al. Guidelines for the management of glucocorticoids during the peri-operative period for patients with adrenal insufficiency. Association of Anaesthetists, Royal College of Physicians y Society for Endocrinology. Anaesthesia. 2020';
const ANGLEE01 = 'Ang-Lee MK, Moss J, Yuan CS. Herbal medicines and perioperative care. JAMA. 2001;286(2):208-216';
const KOHAN21 = 'Kohan L, et al. Buprenorphine management in the perioperative period: educational review and recommendations from a multisociety expert panel. Reg Anesth Pain Med. 2021';
const ASAAYUNO = 'ASA 2023, Practice Guidelines for Preoperative Fasting and the Use of Pharmacologic Agents to Reduce the Risk of Pulmonary Aspiration. Anesthesiology';
// Las revisiones Cochrane se actualizan: se identifica el documento sin fijar un ano, que
// seria inventarlo. La marca 'revision viva' se la deja explicita al lector.
const COCHRANE_TABACO = 'Thomsen T, Villebro N, Moller AM. Interventions for preoperative smoking cessation. Cochrane Database of Systematic Reviews (revision viva: consultar la version vigente)';
// Para los fármacos sin guía de sociedad propia: decirlo, en vez de invocar una "práctica
// estándar" que el lector no puede verificar. Saber que algo es consenso y no recomendación
// formal es información clínica útil, no una carencia que haya que disimular.
const CONSENSO = 'Consenso de práctica perioperatoria: no existe guía de sociedad específica para este fármaco. Contrastar con el protocolo de tu institución';

const ASA23 = 'ASA 2023, Consensus-Based Guidance on Preoperative Management of GLP-1 Receptor Agonists';

export const farmacos = [
  /* ============ Antiagregantes y stent coronario ============ */
  {
    id: 'aspirina', grupo: 'antiagregantes', farmaco: 'Ácido acetilsalicílico',
    alias: ['aspirina', 'AAS', 'ASA'], conducta: 'individualizar',
    resumen: 'Continuar si hay ICP previa. En prevención primaria, suspender.',
    preop: 'Con ICP previa: continuar 75-100 mg/día siempre que sea posible (clase 1). En enfermedad coronaria crónica <em>sin</em> ICP previa: continuar solo en pacientes seleccionados, cuando el riesgo cardiovascular supere al hemorrágico (clase 2b). Sin enfermedad coronaria conocida, o en prevención primaria: suspender 7 días antes.',
    postop: 'Reiniciar en cuanto la hemostasia sea adecuada, habitualmente en las primeras 24 horas.',
    riesgoSuspender: 'Trombosis del stent e infarto perioperatorio en el paciente con ICP previa.',
    riesgoContinuar: 'Aumento del sangrado quirúrgico, en general sin más mortalidad ni más reintervenciones.',
    notas: [
      'Iniciar aspirina de rutina antes de una cirugía no cardiaca en pacientes con enfermedad coronaria <em>sin</em> ICP previa <strong>no aporta beneficio</strong> (clase 3, sin beneficio).',
      'En cirugía de revascularización coronaria (CABG) la aspirina se continúa.',
      'Escenarios donde suele suspenderse pese a la ICP previa: neurocirugía intracraneal, cirugía de médula espinal y cirugía de cámara posterior del ojo.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA + ' · ' + CHEST
  },
  {
    id: 'clopidogrel', grupo: 'antiagregantes', farmaco: 'Clopidogrel',
    alias: ['Plavix', 'P2Y12'], conducta: 'suspender',
    resumen: 'Suspender 5 días antes. Mantener la aspirina.',
    preop: 'Suspender 5 días antes de la cirugía. CHEST 2022 prefiere 5 días sobre los 7 a 10 clásicos.',
    postop: 'Reiniciar en las primeras 24 horas si la hemostasia lo permite. Valorar dosis de carga si el stent es reciente y el riesgo trombótico es alto.',
    riesgoSuspender: 'Trombosis del stent, catastrófica y con mortalidad alta.',
    riesgoContinuar: 'Sangrado quirúrgico y transfusión.',
    notas: [
      'Antes de suspenderlo, revisar <em>cuándo</em> y <em>por qué</em> se colocó el stent: eso decide si la cirugía debe diferirse (ver "Tiempos de espera tras ICP").',
      'No usar pruebas de función plaquetaria de rutina para guiar la decisión.',
      'En CABG se suspende el P2Y12 y se continúa la aspirina.'
    ],
    evidencia: 'guia',
    fuente: CHEST + ' · ' + ACCAHA
  },
  {
    id: 'ticagrelor', grupo: 'antiagregantes', farmaco: 'Ticagrelor',
    alias: ['Brilinta', 'P2Y12'], conducta: 'suspender',
    resumen: 'Suspender 3 a 5 días antes.',
    preop: 'Suspender 3 a 5 días antes, en lugar de los 7 a 10 días que se recomendaban antes.',
    postop: 'Reiniciar en las primeras 24 horas si hay hemostasia adecuada.',
    riesgoSuspender: 'Trombosis del stent.',
    riesgoContinuar: 'Sangrado quirúrgico. Su inhibición es reversible pero más potente que la del clopidogrel.',
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'prasugrel', grupo: 'antiagregantes', farmaco: 'Prasugrel',
    alias: ['Effient', 'P2Y12'], conducta: 'suspender',
    resumen: 'Suspender 7 días antes. Es el que más tiempo requiere.',
    preop: 'Suspender 7 días antes de la cirugía.',
    postop: 'Reiniciar en las primeras 24 horas si la hemostasia es adecuada.',
    riesgoSuspender: 'Trombosis del stent.',
    riesgoContinuar: 'Es el P2Y12 con mayor riesgo hemorrágico de los tres.',
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'tiempos-icp', grupo: 'antiagregantes', farmaco: 'Tiempos de espera tras ICP',
    alias: ['stent', 'DES', 'BMS', 'angioplastia', 'DAPT', 'doble antiagregación'],
    conducta: 'individualizar',
    resumen: 'El tiempo transcurrido desde la ICP decide si la cirugía electiva procede o se difiere.',
    preop: 'Con cirugía <strong>electiva</strong> que exija interrumpir uno o más antiagregantes, diferirla:' +
      '<ul class="cr-list">' +
      '<li><strong>Angioplastia con balón sin stent:</strong> mínimo 14 días (clase 1).</li>' +
      '<li><strong>Stent farmacoactivo por síndrome coronario agudo:</strong> idealmente ≥12 meses (clase 1).</li>' +
      '<li><strong>Stent farmacoactivo por enfermedad coronaria crónica:</strong> ≥6 meses (clase 2a).</li>' +
      '<li><strong>Stent farmacoactivo con cirugía sensible al tiempo:</strong> puede considerarse a partir de los 3 meses si el riesgo de diferir supera al de un evento cardiovascular mayor (clase 2b).</li>' +
      '<li><strong>Stent metálico o farmacoactivo colocado hace ≤30 días:</strong> la cirugía electiva que exija interrumpir antiagregantes es <strong>potencialmente dañina</strong> (clase 3, daño).</li>' +
      '</ul>',
    postop: 'Reanudar la doble antiagregación tan pronto como la hemostasia lo permita, en las primeras 24 a 72 horas.',
    riesgoSuspender: 'Trombosis aguda del stent, con infarto extenso y mortalidad elevada.',
    notas: [
      'Si la cirugía es sensible al tiempo y cae dentro de los 30 días de un stent metálico o de los 3 meses de uno farmacoactivo, se <strong>continúa</strong> la doble antiagregación, salvo que el riesgo hemorrágico supere al de trombosis del stent (clase 1).',
      'La decisión corresponde a un equipo multidisciplinario, con decisión compartida, pesando sangrado, trombosis y el costo de retrasar la cirugía (clase 1).',
      'No usar de rutina puente con inhibidores de la glucoproteína IIb-IIIa, cangrelor ni HBPM. Solo cabe considerarlo en pacientes seleccionados de riesgo trombótico alto, a menos de 6 meses de un stent farmacoactivo o de 30 días de uno metálico (clase 2b).'
    ],
    evidencia: 'guia',
    fuente: ACCAHA + ' · ' + CHEST
  },

  /* ============ Anticoagulantes ============ */
  {
    id: 'warfarina', grupo: 'anticoagulantes', farmaco: 'Warfarina',
    alias: ['Coumadin', 'antagonista de vitamina K', 'AVK'], conducta: 'suspender',
    resumen: 'Suspender 5 días antes. En la mayoría, sin puente con heparina.',
    preop: 'Suspender al menos 5 días antes de la cirugía. Verificar INR el día previo: si sigue elevado (&gt;1.5) a 1 o 2 días de la cirugía, se sugiere vitamina K oral a dosis baja.',
    postop: 'Reiniciar 12 a 24 horas después de la cirugía (esa misma noche o al día siguiente), cuando la hemostasia sea adecuada.',
    riesgoSuspender: 'Evento tromboembólico arterial en fibrilación auricular o válvula mecánica.',
    riesgoContinuar: 'Sangrado quirúrgico.',
    notas: [
      'En ancianos con comorbilidad, en quienes requieren dosis muy bajas y en quienes tienen un INR objetivo alto, puede hacer falta suspenderla con más anticipación.',
      'Se <strong>continúa</strong> sin interrumpir en el implante de marcapasos o desfibrilador: continuar gana sobre interrumpir y puentear (recomendación fuerte).',
      'Revisar "Puente con heparina" antes de indicar HBPM: la recomendación actual va en contra del puente en casi todos los escenarios.'
    ],
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'acenocumarol', grupo: 'anticoagulantes', farmaco: 'Acenocumarol',
    alias: ['Sintrom', 'antagonista de vitamina K', 'AVK'], conducta: 'suspender',
    resumen: 'Suspender 2 a 3 días antes, no 5 como la warfarina.',
    preop: 'Suspender 2 a 3 días antes. Su vida media es más corta que la de la warfarina, así que aplicarle el intervalo de 5 días lo deja sin anticoagulación más tiempo del necesario.',
    postop: 'Reiniciar 12 a 24 horas después, con hemostasia adecuada.',
    notas: ['El fenprocumón, en el otro extremo, requiere 10 a 12 días.'],
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'apixaban', grupo: 'anticoagulantes', farmaco: 'Apixabán',
    alias: ['Eliquis', 'DOAC', 'ACOD'], conducta: 'suspender',
    resumen: '1 día antes si el riesgo hemorrágico es bajo o moderado; 2 días si es alto.',
    preop: 'Suspender <strong>1 día antes</strong> en procedimientos de riesgo hemorrágico bajo o moderado, y <strong>2 días antes</strong> en los de riesgo alto. El intervalo es el mismo tanto si la indicación es fibrilación auricular como enfermedad tromboembólica venosa.',
    postop: 'Reiniciar más de 24 horas después: en torno a 24 horas tras procedimientos de riesgo bajo o moderado, y 48 a 72 horas tras los de riesgo alto.',
    notas: [
      'No requiere puente con heparina: su inicio y fin de acción son rápidos.',
      'No pedir pruebas de coagulación de rutina para guiar el manejo.',
      'A diferencia del dabigatrán, el intervalo no cambia con la función renal.'
    ],
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'rivaroxaban', grupo: 'anticoagulantes', farmaco: 'Rivaroxabán',
    alias: ['Xarelto', 'DOAC', 'ACOD'], conducta: 'suspender',
    resumen: '1 día antes si el riesgo hemorrágico es bajo o moderado; 2 días si es alto.',
    preop: 'Suspender <strong>1 día antes</strong> en procedimientos de riesgo hemorrágico bajo o moderado y <strong>2 días antes</strong> en los de riesgo alto, sea cual sea la indicación.',
    postop: 'Reiniciar más de 24 horas después: cerca de 24 horas en riesgo bajo o moderado, 48 a 72 horas en riesgo alto.',
    notas: ['Sin puente con heparina. Sin pruebas de coagulación de rutina.'],
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'edoxaban', grupo: 'anticoagulantes', farmaco: 'Edoxabán',
    alias: ['Lixiana', 'Savaysa', 'DOAC', 'ACOD'], conducta: 'suspender',
    resumen: '1 día antes si el riesgo hemorrágico es bajo o moderado; 2 días si es alto.',
    preop: 'Suspender <strong>1 día antes</strong> en procedimientos de riesgo hemorrágico bajo o moderado y <strong>2 días antes</strong> en los de riesgo alto.',
    postop: 'Reiniciar más de 24 horas después, con el mismo criterio que los demás DOAC.',
    notas: ['Sin puente con heparina.'],
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'dabigatran', grupo: 'anticoagulantes', farmaco: 'Dabigatrán',
    alias: ['Pradaxa', 'DOAC', 'ACOD'], conducta: 'suspender',
    resumen: 'Único DOAC cuyo intervalo depende de la función renal: 1 a 4 días.',
    preop: 'El intervalo depende del riesgo hemorrágico del procedimiento <strong>y</strong> del aclaramiento de creatinina:' +
      '<ul class="cr-list">' +
      '<li>Riesgo bajo o moderado con TFG ≥50 mL/min: <strong>1 día</strong>.</li>' +
      '<li>Riesgo bajo o moderado con TFG &lt;50 mL/min: <strong>2 días</strong>.</li>' +
      '<li>Riesgo alto con TFG ≥50 mL/min: <strong>2 días</strong>.</li>' +
      '<li>Riesgo alto con TFG &lt;50 mL/min: <strong>4 días</strong>.</li>' +
      '</ul>',
    postop: 'Reiniciar más de 24 horas después: cerca de 24 horas en riesgo bajo o moderado, 48 a 72 horas en riesgo alto.',
    notas: [
      'Los 4 días del escenario de riesgo alto con TFG &lt;50 mL/min son la excepción del grupo: ningún otro DOAC exige más de 2 días.',
      'Sin puente con heparina.'
    ],
    evidencia: 'guia',
    fuente: CHEST
  },
  {
    id: 'puente-heparina', grupo: 'anticoagulantes', farmaco: 'Puente con heparina',
    alias: ['bridging', 'HBPM', 'enoxaparina', 'puenteo', 'BRIDGE'], conducta: 'individualizar',
    resumen: 'La recomendación actual va en contra del puente en casi todos los escenarios.',
    preop: 'CHEST 2022 recomienda <strong>no</strong> puentear:' +
      '<ul class="cr-list">' +
      '<li><strong>Fibrilación auricular:</strong> recomendación fuerte en contra, con certeza moderada. Es el escenario con mejor evidencia (ensayo BRIDGE).</li>' +
      '<li><strong>Válvula cardiaca mecánica:</strong> sugerencia en contra.</li>' +
      '<li><strong>Enfermedad tromboembólica venosa como única indicación:</strong> sugerencia en contra.</li>' +
      '<li><strong>Colonoscopia con polipectomía prevista:</strong> sugerencia en contra durante la interrupción del anticoagulante oral.</li>' +
      '<li><strong>Cualquier DOAC:</strong> sugerencia en contra. Su inicio y fin de acción rápidos hacen innecesario el puente.</li>' +
      '</ul>',
    postop: 'Si pese a todo se puenteó, reiniciar la HBPM más de 24 horas después de la cirugía. La última dosis preoperatoria se administra la mañana del día previo.',
    riesgoContinuar: 'El puente sistemático multiplica el sangrado mayor sin reducir los eventos tromboembólicos.',
    notas: [
      'No medir anti-Xa de rutina para guiar la HBPM de puente.',
      'El puente queda para casos individualizados de riesgo trombótico muy alto, no como conducta por defecto.',
      'Si hay que suspender el anticoagulante oral en un paciente con ICP previa, sustituirlo por aspirina mientras tanto y reanudarlo en cuanto sea seguro.'
    ],
    evidencia: 'guia',
    fuente: CHEST + ' · ' + ACCAHA
  },

  {
    id: 'hbpm-terapeutica', grupo: 'anticoagulantes', farmaco: 'HBPM y heparina no fraccionada',
    alias: ['enoxaparina', 'dalteparina', 'nadroparina', 'heparina', 'fondaparinux'],
    conducta: 'suspender',
    resumen: 'Última dosis terapéutica 24 h antes. La heparina intravenosa, 4 a 6 h antes.',
    preop: 'HBPM a dosis terapéutica: última dosis la mañana del día previo, es decir unas 24 horas antes. A dosis profiláctica basta con 12 horas. Heparina no fraccionada intravenosa: suspender la infusión 4 a 6 horas antes y comprobar el TTPa. Fondaparinux: por su vida media larga, suspenderlo de 3 a 4 días antes.',
    postop: 'Reiniciar más de 24 horas después de la cirugía, cuando la hemostasia sea adecuada.',
    riesgoContinuar: 'Hematoma quirúrgico y, con anestesia neuroaxial, hematoma epidural.',
    notas: [
      'Los intervalos de la anestesia neuroaxial son más estrictos que los quirúrgicos: coordinar siempre con anestesiología antes de programar un bloqueo.',
      'No medir anti-Xa de rutina para guiar el manejo perioperatorio de la HBPM.'
    ],
    evidencia: 'guia',
    fuente: CHEST
  },

  /* ============ Cardiovasculares ============ */
  {
    id: 'antiarritmicos', grupo: 'cardiovasculares', farmaco: 'Antiarrítmicos y digoxina',
    alias: ['amiodarona', 'digoxina', 'sotalol', 'flecainida', 'propafenona'],
    conducta: 'continuar',
    resumen: 'Continuar. Revisar electrolitos y, con digoxina, la digoxinemia.',
    preop: 'Continuar sin interrupción: suspenderlos expone a recurrencia de la arritmia justo bajo el estrés quirúrgico. Antes de la cirugía, corregir potasio y magnesio, y revisar el ECG.',
    postop: 'Reanudar con la vía oral; si el ayuno se prolonga, usar la formulación intravenosa.',
    riesgoSuspender: 'Recurrencia de la arritmia de base, sobre todo fibrilación auricular con respuesta ventricular rápida.',
    riesgoContinuar: 'Con digoxina, toxicidad favorecida por hipopotasemia o deterioro renal. Con sotalol y amiodarona, prolongación del QT sumada a la de otros fármacos perioperatorios.',
    notas: ['La amiodarona tiene una vida media de semanas: suspenderla en el preoperatorio no aporta nada.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'betabloqueadores', grupo: 'cardiovasculares', farmaco: 'Betabloqueadores',
    alias: ['metoprolol', 'bisoprolol', 'carvedilol', 'atenolol', 'propranolol'],
    conducta: 'continuar',
    resumen: 'Continuar si ya los tomaba. Nunca iniciarlos el día de la cirugía.',
    preop: 'En pacientes con dosis estable, continuarlos durante todo el periodo perioperatorio (clase 1). Si hay una indicación <em>nueva</em>, iniciarlos con suficiente anticipación, idealmente más de 7 días antes, para poder evaluar tolerancia y titular la dosis (clase 2b).',
    postop: 'Continuar sin interrupción y asegurarse de que sigan indicados al alta.',
    riesgoSuspender: 'Taquicardia de rebote, isquemia miocárdica y fibrilación auricular posoperatoria.',
    notas: [
      'Iniciar un betabloqueador <strong>el día de la cirugía</strong> es potencialmente dañino: aumenta la mortalidad posoperatoria (clase 3, daño).',
      'La práctica de betabloquear a todo el mundo para "reducir el riesgo perioperatorio" quedó desacreditada: el beneficio isquémico se compensa con exceso de ictus y mortalidad.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'estatinas', grupo: 'cardiovasculares', farmaco: 'Estatinas',
    alias: ['atorvastatina', 'rosuvastatina', 'simvastatina', 'pravastatina'],
    conducta: 'continuar',
    resumen: 'Continuar siempre. Incluso conviene iniciarlas si hay indicación y no las toma.',
    preop: 'En quien ya las toma, continuarlas para reducir el riesgo de evento cardiovascular mayor (clase 1). En quien no las toma pero cumple criterios por enfermedad aterosclerótica o por riesgo a 10 años, se recomienda iniciarlas en el perioperatorio con intención de uso prolongado (clase 1).',
    postop: 'Reanudar en cuanto tolere la vía oral.',
    riesgoSuspender: 'Efecto rebote proinflamatorio y mayor riesgo de evento cardiovascular perioperatorio.',
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'ieca-ara', grupo: 'cardiovasculares', farmaco: 'IECA y ARA-II',
    alias: ['enalapril', 'lisinopril', 'losartán', 'valsartán', 'captopril', 'RAASi', 'ARNI', 'sacubitrilo'],
    conducta: 'individualizar',
    resumen: 'En hipertensión y cirugía de riesgo elevado, omitir la dosis de 24 h antes. En IC con FEVI reducida, continuar.',
    preop: 'En pacientes con presión controlada que toman estos fármacos <strong>por hipertensión</strong> y van a cirugía de riesgo elevado, omitir la dosis de las 24 horas previas puede ser beneficioso para limitar la hipotensión intraoperatoria (clase 2b). En quienes los toman <strong>por insuficiencia cardiaca con fracción de eyección reducida</strong>, es razonable continuarlos (clase 2a).',
    postop: 'Reanudar en cuanto el paciente esté euvolémico, con presión estable y función renal sin deterioro.',
    riesgoContinuar: 'Hipotensión intraoperatoria (presión arterial media &lt;60 mmHg), más frecuente al continuarlos.',
    riesgoSuspender: 'Hipertensión de rebote y descompensación de la insuficiencia cardiaca.',
    notas: [
      'Continuarlos no empeoró los desenlaces clínicos duros (por ejemplo lesión miocárdica tras cirugía no cardiaca) en los ensayos: lo que aumenta es la hipotensión.',
      'Los ensayos excluyeron a los extremos de presión (sistólica &gt;160 o &lt;105 mmHg) y reclutaron pocos pacientes de alto riesgo.',
      'No hay datos sobre el sacubitrilo/valsartán en el perioperatorio.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'calcioantagonistas', grupo: 'cardiovasculares', farmaco: 'Calcioantagonistas',
    alias: ['amlodipino', 'nifedipino', 'verapamilo', 'diltiazem', 'felodipino'],
    conducta: 'continuar',
    resumen: 'Continuar los crónicos. No iniciarlos para reducir riesgo perioperatorio.',
    preop: 'Continuar el tratamiento crónico, sobre todo los no dihidropiridínicos (verapamilo, diltiazem) cuando controlan una arritmia.',
    postop: 'Reanudar con la vía oral.',
    notas: [
      'Iniciarlos en el perioperatorio no reduce mortalidad ni infarto. En los ensayos se asociaron a hipotensión y bradicardia significativas.',
      'Los dihidropiridínicos se usan sobre todo como antihipertensivos; los no dihidropiridínicos, para control de frecuencia.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'clonidina', grupo: 'cardiovasculares', farmaco: 'Clonidina y agonistas alfa-2',
    alias: ['clonidina', 'dexmedetomidina', 'alfa-2'], conducta: 'continuar',
    resumen: 'Continuar la crónica por el rebote. No iniciarla para reducir riesgo cardiovascular.',
    preop: 'Continuar el tratamiento crónico. Iniciar clonidina a dosis baja en el perioperatorio <strong>no</strong> se recomienda para reducir el riesgo cardiovascular (clase 3, sin beneficio).',
    postop: 'Reanudar pronto; si no tolera la vía oral, valorar parche transdérmico.',
    riesgoSuspender: 'Crisis hipertensiva de rebote, que es la razón principal para no suspenderla.',
    notas: [
      'El ensayo que probó iniciar clonidina no mostró beneficio y planteó dudas de seguridad.',
      'La continuación del tratamiento crónico no se ha estudiado en ensayos aleatorizados, pero el rebote es un riesgo bien conocido.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'diureticos', grupo: 'cardiovasculares', farmaco: 'Diuréticos',
    alias: ['furosemida', 'hidroclorotiazida', 'espironolactona', 'clortalidona'],
    conducta: 'individualizar',
    resumen: 'Omitir la dosis de la mañana de la cirugía en la mayoría; mantener en la IC congestiva.',
    preop: 'Omitir la dosis de la mañana del día de la cirugía cuando se usan como antihipertensivos, para evitar hipovolemia e hipotensión con la inducción. Mantenerlos si controlan una insuficiencia cardiaca congestiva descompensada.',
    postop: 'Reanudar cuando el paciente esté estable y con la volemia valorada.',
    riesgoContinuar: 'Hipovolemia, hipotensión de inducción, hipopotasemia y lesión renal aguda.',
    notas: ['Revisar potasio y magnesio antes de la cirugía: la hipopotasemia es arritmogénica bajo anestesia.'],
    evidencia: 'guia',
    fuente: ACCAHA
  },

  /* ============ Antidiabéticos ============ */
  {
    id: 'isglt2', grupo: 'antidiabeticos', farmaco: 'Inhibidores de SGLT2',
    alias: ['empagliflozina', 'dapagliflozina', 'canagliflozina', 'ertugliflozina', 'gliflozina'],
    conducta: 'suspender',
    resumen: 'Suspender 3 a 4 días antes por cetoacidosis diabética euglucémica.',
    preop: 'Suspender <strong>3 a 4 días antes</strong> de la cirugía para reducir el riesgo de acidosis metabólica perioperatoria (clase 2a). En concreto: canagliflozina, dapagliflozina y empagliflozina al menos 3 días antes; ertugliflozina al menos 4 días antes.',
    postop: 'No hay guía clara sobre el reinicio. Idealmente, no reanudarlos hasta que el paciente esté clínicamente estable y haya recuperado una dieta normal.',
    riesgoContinuar: 'Cetoacidosis diabética <strong>euglucémica</strong>: glucosa &lt;250 mg/dL con pH &lt;7.3, bicarbonato &lt;18 mEq/L y cetonas elevadas en suero y orina. Es fácil de pasar por alto justamente porque la glucemia es normal.',
    notas: [
      'La FDA actualizó la ficha técnica de esta clase precisamente para recomendar su suspensión preoperatoria.',
      'Ante acidosis metabólica posoperatoria inexplicada en un paciente diabético, medir cetonas aunque la glucosa sea normal.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'arglp1', grupo: 'antidiabeticos', farmaco: 'Agonistas del receptor de GLP-1',
    alias: ['semaglutida', 'liraglutida', 'dulaglutida', 'Ozempic', 'Saxenda', 'tirzepatida', 'exenatida'],
    conducta: 'suspender',
    resumen: 'Diario: omitir el día del procedimiento. Semanal: suspender 1 semana antes.',
    preop: 'En dosificación <strong>diaria</strong>, omitir la dosis del día del procedimiento. En dosificación <strong>semanal</strong>, suspender una semana antes. Esto aplica sin importar la indicación (diabetes tipo 2 o pérdida de peso), la dosis o el tipo de procedimiento.',
    postop: 'Reanudar cuando el paciente tolere la vía oral y esté estable.',
    riesgoContinuar: 'Retraso del vaciamiento gástrico, con riesgo de regurgitación y broncoaspiración del contenido gástrico durante la anestesia general o la sedación profunda.',
    notas: [
      'El día del procedimiento: si hay náusea o vómito intensos, distensión o dolor abdominal, considerar diferir el procedimiento electivo.',
      'Si no hay síntomas digestivos pero <em>no</em> se suspendió como se indicó: proceder con precauciones de estómago lleno, o valorar el volumen gástrico por ecografía si se domina la técnica.',
      'En procedimientos urgentes o de emergencia, tratar al paciente como estómago lleno desde el inicio.',
      'Si se suspende por más tiempo que el intervalo de dosificación y el fármaco era para diabetes, considerar interconsulta a endocrinología para puentear el control glucémico.',
      'No hay evidencia sobre el ayuno óptimo en estos pacientes: se siguen las guías de ayuno habituales de la ASA.'
    ],
    evidencia: 'guia',
    fuente: ASA23
  },
  {
    id: 'metformina', grupo: 'antidiabeticos', farmaco: 'Metformina',
    alias: ['biguanida', 'Glucophage'], conducta: 'continuar',
    resumen: 'Continuar. La recomendación clásica de suspenderla quedó atrás.',
    preop: 'Es razonable continuarla durante el perioperatorio para mantener el control glucémico (clase 2a).',
    postop: 'Continuar, vigilando función renal.',
    notas: [
      'La indicación previa de suspenderla nacía del temor a la acidosis láctica bajo estrés fisiológico, pero los datos recientes no muestran esa asociación.',
      'Sigue siendo prudente suspenderla si se prevé deterioro renal agudo o administración de contraste yodado.'
    ],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'insulina', grupo: 'antidiabeticos', farmaco: 'Insulina',
    alias: ['glargina', 'NPH', 'detemir', 'degludec', 'rápida', 'lispro', 'aspart'],
    conducta: 'ajustar',
    resumen: 'Reducir la basal la noche previa o la mañana de la cirugía; omitir la prandial en ayuno.',
    preop: 'Mantener una fracción de la insulina basal (habitualmente entre el 50 % y el 80 % de la dosis) la noche previa o la mañana de la cirugía, según el control y el riesgo de hipoglucemia. Omitir la insulina prandial mientras el paciente esté en ayuno. En bomba de infusión continua, mantener la tasa basal y coordinar con el equipo de anestesia.',
    postop: 'Reanudar el esquema habitual al reiniciar la dieta, con esquema de corrección mientras tanto.',
    riesgoContinuar: 'Hipoglucemia intraoperatoria, difícil de detectar bajo anestesia general.',
    notas: ['Solicitar HbA1c preoperatoria si no se ha medido en los últimos 3 meses.'],
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'sulfonilureas', grupo: 'antidiabeticos', farmaco: 'Sulfonilureas y meglitinidas',
    alias: ['glibenclamida', 'glimepirida', 'gliclazida', 'repaglinida'],
    conducta: 'suspender',
    resumen: 'Omitir la mañana de la cirugía por el riesgo de hipoglucemia en ayuno.',
    preop: 'Omitir la dosis de la mañana del día de la cirugía. En el paciente en ayuno no tienen sustrato sobre el cual actuar y el riesgo es solo de hipoglucemia.',
    postop: 'Reanudar cuando reinicie la dieta.',
    riesgoContinuar: 'Hipoglucemia prolongada, sobre todo con glibenclamida y en el anciano o el paciente con deterioro renal.',
    evidencia: 'guia',
    fuente: ACCAHA
  },
  {
    id: 'idpp4', grupo: 'antidiabeticos', farmaco: 'Inhibidores de DPP-4',
    alias: ['sitagliptina', 'linagliptina', 'vildagliptina', 'saxagliptina', 'gliptina'],
    conducta: 'continuar',
    resumen: 'Pueden continuarse: riesgo de hipoglucemia muy bajo.',
    preop: 'Pueden continuarse hasta el día de la cirugía. Su riesgo de hipoglucemia en ayuno es mínimo porque su efecto es dependiente de la glucosa.',
    postop: 'Continuar con la reintroducción de la dieta.',
    evidencia: 'guia',
    fuente: ACCAHA
  },

  {
    id: 'pioglitazona', grupo: 'antidiabeticos', farmaco: 'Tiazolidinedionas',
    alias: ['pioglitazona', 'rosiglitazona', 'glitazona'], conducta: 'suspender',
    resumen: 'Omitir el día de la cirugía por retención hídrica.',
    preop: 'Omitir la dosis del día de la cirugía. En el paciente con insuficiencia cardiaca conocida, valorar suspenderlas con más anticipación.',
    postop: 'Reanudar cuando el paciente esté euvolémico y con dieta normal.',
    riesgoContinuar: 'Retención de líquidos y descompensación de insuficiencia cardiaca, sumadas a la carga hídrica perioperatoria.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },

  /* ============ Endocrinos y esteroides ============ */
  {
    id: 'corticoides', grupo: 'endocrinos', farmaco: 'Corticoides sistémicos',
    alias: ['prednisona', 'hidrocortisona', 'dexametasona', 'dosis de estrés', 'eje HHA'],
    conducta: 'ajustar',
    resumen: 'Nunca suspenderlos. Valorar dosis de estrés según el grado de supresión del eje.',
    preop: 'Continuar la dosis habitual y decidir si añadir dosis de estrés según el grado de supresión del eje hipotálamo-hipófisis-suprarrenal:' +
      '<ul class="cr-list">' +
      '<li><strong>Eje íntegro</strong> (menos de 5 mg/día de prednisona, o cualquier dosis por menos de 3 semanas): solo la dosis habitual, sin suplemento.</li>' +
      '<li><strong>Supresión probable</strong> (más de 20 mg/día de prednisona por más de 3 semanas, o Cushing clínico): dar dosis de estrés.</li>' +
      '<li><strong>Zona intermedia</strong> (5 a 20 mg/día): individualizar, o medir cortisol matutino si el tiempo lo permite.</li>' +
      '</ul>',
    postop: 'Descender la dosis de estrés en 1 a 2 días hasta volver a la dosis habitual, guiándose por la evolución clínica.',
    riesgoSuspender: 'Crisis suprarrenal: hipotensión refractaria a volumen y vasopresores, hiponatremia e hipoglucemia.',
    riesgoContinuar: 'Hiperglucemia, mala cicatrización e infección de la herida quirúrgica.',
    notas: [
      'Orientación de dosis de estrés por magnitud de la cirugía: menor, hidrocortisona 25 mg IV el día del procedimiento; moderada, 50 a 75 mg/día por 1 a 2 días; mayor, 100 a 150 mg/día por 2 a 3 días.',
      'Ante hipotensión perioperatoria inexplicada en un paciente con corticoterapia crónica, pensar en crisis suprarrenal antes de escalar vasopresores.'
    ],
    evidencia: 'guia',
    fuente: WOODCOCK20
  },
  {
    id: 'levotiroxina', grupo: 'endocrinos', farmaco: 'Levotiroxina',
    alias: ['tiroxina', 'T4', 'Eutirox', 'hipotiroidismo'], conducta: 'continuar',
    resumen: 'Continuar. Su vida media larga tolera algún día sin dosis.',
    preop: 'Continuar hasta el día de la cirugía. Su vida media es de unos 7 días, así que omitir una o dos dosis no tiene consecuencias.',
    postop: 'Reanudar con la vía oral. Si el ayuno se prolonga más de 5 a 7 días, valorar levotiroxina intravenosa a cerca del 75 % de la dosis oral.',
    notas: ['El hipotiroidismo grave no tratado sí aumenta el riesgo perioperatorio: diferir la cirugía electiva hasta corregirlo.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'antitiroideos', grupo: 'endocrinos', farmaco: 'Antitiroideos',
    alias: ['metimazol', 'tiamazol', 'propiltiouracilo', 'hipertiroidismo'], conducta: 'continuar',
    resumen: 'Continuar. El hipertiroidismo no controlado contraindica la cirugía electiva.',
    preop: 'Continuar sin interrupción. Diferir la cirugía electiva hasta lograr el eutiroidismo.',
    postop: 'Reanudar en cuanto tolere la vía oral.',
    riesgoSuspender: 'Tormenta tiroidea perioperatoria, desencadenada por el estrés quirúrgico.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'estrogenos', grupo: 'endocrinos', farmaco: 'Estrógenos, anticonceptivos y terapia hormonal',
    alias: ['anticonceptivos orales', 'THS', 'estradiol', 'tamoxifeno', 'raloxifeno'],
    conducta: 'individualizar',
    resumen: 'Suspender 4 a 6 semanas antes si el riesgo trombótico de la cirugía es alto.',
    preop: 'En cirugía de riesgo tromboembólico alto, suspender 4 a 6 semanas antes. En cirugía de riesgo bajo con tromboprofilaxis adecuada, pueden continuarse. El tamoxifeno y el raloxifeno se valoran junto con el oncólogo por su indicación de fondo.',
    postop: 'Reanudar cuando el paciente esté deambulando y sin riesgo tromboembólico elevado.',
    riesgoContinuar: 'Aumento del riesgo de trombosis venosa profunda y tromboembolia pulmonar.',
    riesgoSuspender: 'Embarazo no planeado si eran anticonceptivos: indicar método alternativo.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },

  /* ============ Inmunosupresores y biológicos ============ */
  {
    id: 'metotrexato', grupo: 'inmunosupresores', farmaco: 'Metotrexato',
    alias: ['MTX', 'artritis reumatoide'], conducta: 'continuar',
    resumen: 'Continuar en la mayoría. Suspender solo si hay deterioro renal.',
    preop: 'Continuarlo en el perioperatorio de la mayoría de las cirugías: no aumenta la infección de herida y suspenderlo desencadena brotes de la enfermedad de base.',
    postop: 'Continuar sin cambios.',
    riesgoSuspender: 'Brote de la enfermedad reumatológica, con más dolor y peor rehabilitación.',
    notas: ['Suspenderlo sí es razonable si hay lesión renal aguda, sepsis o un procedimiento de riesgo infeccioso muy alto.'],
    evidencia: 'guia',
    fuente: ACR22
  },
  {
    id: 'biologicos', grupo: 'inmunosupresores', farmaco: 'Biológicos (anti-TNF y otros)',
    alias: ['adalimumab', 'infliximab', 'etanercept', 'rituximab', 'tocilizumab', 'abatacept'],
    conducta: 'suspender',
    resumen: 'Programar la cirugía al final del intervalo de dosificación.',
    preop: 'Suspenderlos y programar la cirugía justo al final del intervalo entre dosis del fármaco. Por ejemplo: etanercept semanal, cirugía en la semana 2; adalimumab cada 2 semanas, cirugía en la semana 3; infliximab cada 8 semanas, cirugía en la semana 9.',
    postop: 'Reanudar a las 2 semanas aproximadamente, cuando la herida esté cicatrizada y no haya datos de infección.',
    riesgoContinuar: 'Infección de la herida quirúrgica y peor cicatrización.',
    riesgoSuspender: 'Brote de la enfermedad de base.',
    evidencia: 'guia',
    fuente: ACR22
  },
  {
    id: 'jak', grupo: 'inmunosupresores', farmaco: 'Inhibidores de JAK',
    alias: ['tofacitinib', 'baricitinib', 'upadacitinib'], conducta: 'suspender',
    resumen: 'Suspender 3 días antes de la cirugía.',
    preop: 'Suspender al menos 3 días antes del procedimiento.',
    postop: 'Reanudar a las 2 semanas aproximadamente, con la herida cicatrizada y sin infección.',
    riesgoContinuar: 'Infección y, como clase, mayor riesgo tromboembólico.',
    evidencia: 'guia',
    fuente: ACR22
  },
  {
    id: 'inmunosupresores-trasplante', grupo: 'inmunosupresores',
    farmaco: 'Inmunosupresores de trasplante',
    alias: ['tacrolimús', 'ciclosporina', 'micofenolato', 'azatioprina', 'sirolimús'],
    conducta: 'continuar',
    resumen: 'Nunca suspenderlos. Coordinar siempre con el equipo de trasplante.',
    preop: 'Continuarlos sin interrupción. Si el ayuno impide la vía oral, cambiar a la formulación intravenosa equivalente.',
    postop: 'Reanudar la vía oral en cuanto sea posible, con niveles séricos según protocolo.',
    riesgoSuspender: 'Rechazo agudo del injerto.',
    notas: [
      'El sirolimús se asocia a mala cicatrización: el equipo de trasplante puede indicar cambiarlo transitoriamente.',
      'Estos pacientes suelen requerir además dosis de estrés de corticoide.'
    ],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'hidroxicloroquina', grupo: 'inmunosupresores', farmaco: 'Hidroxicloroquina',
    alias: ['Plaquenil', 'cloroquina', 'lupus'], conducta: 'continuar',
    resumen: 'Continuar sin interrupción.',
    preop: 'Continuar en todos los casos, incluido el lupus eritematoso sistémico.',
    postop: 'Continuar sin cambios.',
    riesgoSuspender: 'Brote lúpico.',
    evidencia: 'guia',
    fuente: ACR22
  },

  {
    id: 'antirretrovirales', grupo: 'inmunosupresores', farmaco: 'Antirretrovirales',
    alias: ['VIH', 'TAR', 'tenofovir', 'dolutegravir', 'efavirenz'], conducta: 'continuar',
    resumen: 'Continuar sin interrumpir: la pausa selecciona resistencias.',
    preop: 'Continuar el esquema completo sin saltarse tomas. Si el ayuno se prolonga, coordinar con infectología la vía o el ajuste, en vez de suspender.',
    postop: 'Reanudar en cuanto tolere la vía oral, respetando los horarios del esquema.',
    riesgoSuspender: 'Rebote de la carga viral y selección de resistencias, que puede costar el esquema completo.',
    notas: [
      'Revisar interacciones antes de indicar cualquier fármaco perioperatorio nuevo: los potenciadores como ritonavir y cobicistat alteran el metabolismo de sedantes, opioides y estatinas.',
      'La cifra de linfocitos CD4 y la carga viral ayudan a dimensionar el riesgo infeccioso de la cirugía.'
    ],
    evidencia: 'consenso',
    fuente: CONSENSO
  },

  /* ============ Neurológicos y psicotrópicos ============ */
  {
    id: 'antiepilepticos', grupo: 'neuropsico', farmaco: 'Antiepilépticos',
    alias: ['levetiracetam', 'fenitoína', 'valproato', 'carbamazepina', 'lamotrigina'],
    conducta: 'continuar',
    resumen: 'Continuar sin falta, incluida la mañana de la cirugía.',
    preop: 'Continuar, incluida la dosis de la mañana del día de la cirugía, con un sorbo de agua.',
    postop: 'Si el ayuno se prolonga, cambiar a la formulación intravenosa equivalente.',
    riesgoSuspender: 'Crisis convulsivas por deprivación, incluido el estado epiléptico.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'levodopa', grupo: 'neuropsico', farmaco: 'Levodopa y antiparkinsonianos',
    alias: ['carbidopa', 'Sinemet', 'pramipexol', 'Parkinson'], conducta: 'continuar',
    resumen: 'Continuar con el horario exacto. Las omisiones se pagan caro.',
    preop: 'Continuar respetando el horario habitual, incluida la dosis de la mañana. Programar al paciente como primer caso del día para minimizar el tiempo sin dosis.',
    postop: 'Reanudar de inmediato. Si no tolera la vía oral, valorar sonda nasogástrica o rotigotina transdérmica.',
    riesgoSuspender: 'Empeoramiento motor agudo, disfagia con riesgo de broncoaspiración y, en casos extremos, síndrome neuroléptico maligno por deprivación.',
    notas: ['Evitar antieméticos antidopaminérgicos (metoclopramida, haloperidol): empeoran el parkinsonismo. Preferir ondansetrón.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'isrs', grupo: 'neuropsico', farmaco: 'ISRS e IRSN',
    alias: ['fluoxetina', 'sertralina', 'escitalopram', 'venlafaxina', 'duloxetina'],
    conducta: 'continuar',
    resumen: 'Continuar en general, avisando del riesgo hemorrágico leve.',
    preop: 'Continuarlos. Suspenderlos produce síndrome de discontinuación y recaída depresiva, riesgos que superan al hemorrágico.',
    postop: 'Continuar sin cambios.',
    riesgoContinuar: 'Ligero aumento del sangrado por inhibición de la captación plaquetaria de serotonina, e hiponatremia.',
    riesgoSuspender: 'Síndrome de discontinuación, sobre todo con paroxetina y venlafaxina.',
    notas: ['Vigilar el síndrome serotoninérgico si se usan opioides serotoninérgicos como tramadol, fentanilo o meperidina.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'imao', grupo: 'neuropsico', farmaco: 'IMAO',
    alias: ['fenelzina', 'tranilcipromina', 'selegilina', 'moclobemida'], conducta: 'individualizar',
    resumen: 'Requiere coordinación con anestesia por interacciones potencialmente letales.',
    preop: 'Decidir junto con psiquiatría y anestesiología. La conducta moderna prefiere continuarlos y usar una técnica anestésica "segura para IMAO", en vez de suspenderlos 2 semanas antes y arriesgar una recaída psiquiátrica grave.',
    postop: 'Continuar con la técnica acordada.',
    riesgoContinuar: 'Crisis hipertensiva con simpaticomiméticos indirectos (efedrina) y síndrome serotoninérgico con meperidina, tramadol y dextrometorfano. Ambas interacciones pueden ser mortales.',
    riesgoSuspender: 'Recaída depresiva grave con riesgo suicida.',
    notas: ['Si hace falta un vasopresor, usar fenilefrina a dosis reducida (agonista directo), nunca efedrina.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'litio', grupo: 'neuropsico', farmaco: 'Litio',
    alias: ['carbonato de litio', 'trastorno bipolar'], conducta: 'individualizar',
    resumen: 'Omitir 24 a 72 h antes de cirugía mayor. Vigilar niveles y electrolitos.',
    preop: 'En cirugía menor puede continuarse. En cirugía mayor, con cambios de volumen o riesgo renal previstos, omitirlo 24 a 72 horas antes. Medir litemia, función renal y electrolitos.',
    postop: 'Reanudar cuando el paciente esté euvolémico, con función renal estable y tolerando la vía oral.',
    riesgoContinuar: 'Toxicidad por litio, favorecida por la depleción de volumen, los AINE y los diuréticos. Prolonga además el efecto de los relajantes musculares.',
    riesgoSuspender: 'Recaída maníaca.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'opioides-cronicos', grupo: 'neuropsico', farmaco: 'Opioides crónicos, buprenorfina y metadona',
    alias: ['metadona', 'buprenorfina', 'naltrexona', 'morfina', 'oxicodona'],
    conducta: 'continuar',
    resumen: 'Continuar la dosis basal. La naltrexona sí se suspende.',
    preop: 'Continuar la dosis basal de opioide, metadona o buprenorfina: suspenderla produce abstinencia y descontrol del dolor posoperatorio. La <strong>naltrexona</strong> es la excepción: suspenderla 72 horas antes (o 4 semanas si es la formulación inyectable de depósito), porque bloquea el efecto analgésico de los opioides.',
    postop: 'Mantener la dosis basal y añadir analgesia multimodal por encima. Estos pacientes requieren dosis de rescate mayores que las habituales.',
    riesgoSuspender: 'Síndrome de abstinencia y dolor posoperatorio incontrolable.',
    notas: ['Involucrar a la clínica del dolor antes de la cirugía cuando sea posible.'],
    evidencia: 'guia',
    fuente: KOHAN21
  },
  {
    id: 'benzodiacepinas', grupo: 'neuropsico', farmaco: 'Benzodiacepinas',
    alias: ['alprazolam', 'clonazepam', 'diazepam', 'lorazepam'], conducta: 'continuar',
    resumen: 'Continuar el tratamiento crónico por el riesgo de abstinencia.',
    preop: 'Continuar el tratamiento crónico. Suspenderlo de golpe puede producir abstinencia con convulsiones.',
    postop: 'Reanudar pronto; vigilar sedación excesiva junto con los opioides.',
    riesgoSuspender: 'Abstinencia, con ansiedad, delirium y convulsiones.',
    riesgoContinuar: 'Contribuyen al delirium posoperatorio, sobre todo en el anciano.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'anticolinesterasicos', grupo: 'neuropsico', farmaco: 'Anticolinesterásicos',
    alias: ['donepezilo', 'rivastigmina', 'galantamina', 'piridostigmina', 'demencia', 'miastenia'],
    conducta: 'individualizar',
    resumen: 'Avisar a anestesia: prolongan el efecto de la succinilcolina.',
    preop: 'Pueden continuarse, pero es indispensable informar a anestesiología. En miastenia gravis, la piridostigmina se continúa y su manejo se coordina con neurología.',
    postop: 'Reanudar con la vía oral.',
    riesgoContinuar: 'Prolongan el bloqueo neuromuscular de la succinilcolina y pueden producir bradicardia con los relajantes despolarizantes.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },

  {
    id: 'antipsicoticos', grupo: 'neuropsico', farmaco: 'Antipsicóticos',
    alias: ['haloperidol', 'quetiapina', 'olanzapina', 'risperidona', 'clozapina'],
    conducta: 'continuar',
    resumen: 'Continuar. Revisar el QT en el ECG preoperatorio.',
    preop: 'Continuar el tratamiento crónico. Revisar el intervalo QT en el ECG preoperatorio y corregir potasio y magnesio.',
    postop: 'Reanudar en cuanto tolere la vía oral.',
    riesgoSuspender: 'Recaída psicótica y, en el caso de la clozapina, necesidad de retitular desde el inicio si se interrumpe más de 48 horas.',
    riesgoContinuar: 'Prolongación del QT sumada a la de otros fármacos perioperatorios, hipotensión y mayor riesgo de síndrome neuroléptico maligno.',
    notas: ['Con clozapina, vigilar además la biometría hemática: la neutropenia cambia el riesgo infeccioso de la cirugía.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },

  /* ============ Analgésicos, AINE y respiratorios ============ */
  {
    id: 'aines', grupo: 'respiratorios', farmaco: 'AINE',
    alias: ['ibuprofeno', 'naproxeno', 'diclofenaco', 'ketorolaco', 'celecoxib'],
    conducta: 'suspender',
    resumen: 'Suspender según su vida media: de 1 a 3 días antes.',
    preop: 'Suspender antes de la cirugía según su vida media: ibuprofeno 1 día, diclofenaco 1 día, naproxeno 3 días. Los coxib (celecoxib) no afectan la función plaquetaria y pueden continuarse en muchos casos.',
    postop: 'Reanudar cuando la hemostasia sea adecuada y la función renal esté estable.',
    riesgoContinuar: 'Disfunción plaquetaria reversible con más sangrado quirúrgico, lesión renal aguda perioperatoria y menor efecto de antihipertensivos.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'broncodilatadores', grupo: 'respiratorios', farmaco: 'Broncodilatadores inhalados y corticoide inhalado',
    alias: ['salbutamol', 'tiotropio', 'budesonida', 'formoterol', 'EPOC', 'asma'],
    conducta: 'continuar',
    resumen: 'Continuar todos, incluida la mañana de la cirugía.',
    preop: 'Continuarlos, incluida la dosis de la mañana del día de la cirugía. El paciente debe llevar su inhalador consigo al quirófano.',
    postop: 'Reanudar de inmediato.',
    riesgoSuspender: 'Broncoespasmo perioperatorio, que complica la inducción y la extubación.',
    notas: ['Considerar optimizar el control del asma o la EPOC antes de la cirugía electiva: es de las intervenciones preoperatorias con mejor rendimiento.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'gabapentinoides', grupo: 'respiratorios', farmaco: 'Gabapentinoides',
    alias: ['gabapentina', 'pregabalina'], conducta: 'continuar',
    resumen: 'Continuar el tratamiento crónico. Cuidado con la sedación aditiva.',
    preop: 'Continuar el tratamiento crónico.',
    postop: 'Reanudar con la vía oral, ajustando a función renal.',
    riesgoContinuar: 'Sedación y depresión respiratoria aditivas con los opioides, sobre todo en el anciano y en el paciente con apnea del sueño.',
    evidencia: 'consenso',
    fuente: CONSENSO
  },

  /* ============ Herbolarios y suplementos ============ */
  {
    id: 'herbolarios', grupo: 'herbolarios', farmaco: 'Herbolarios (las cuatro G)',
    alias: ['ginkgo', 'ginseng', 'jengibre', 'ajo', 'garlic', 'ginger'], conducta: 'suspender',
    resumen: 'Suspender 7 a 14 días antes. Casi ningún paciente los reporta si no se le pregunta.',
    preop: 'Suspender al menos 7 días antes, y hasta 14 en cirugía de riesgo hemorrágico alto. Las cuatro G son las de mayor efecto antiplaquetario: <strong>g</strong>inkgo biloba, <strong>g</strong>inseng, <strong>g</strong>engibre (jengibre) y a<strong>j</strong>o.',
    postop: 'No hay urgencia por reanudarlos.',
    riesgoContinuar: 'Efecto antiplaquetario aditivo con más sangrado quirúrgico. El ginseng además puede producir hipoglucemia.',
    notas: ['Preguntar explícitamente por productos naturales, tés y suplementos: los pacientes no los consideran "medicamentos" y no los mencionan en el interrogatorio de rutina.'],
    evidencia: 'guia',
    fuente: ANGLEE01
  },
  {
    id: 'hierba-san-juan', grupo: 'herbolarios', farmaco: 'Hierba de San Juan',
    alias: ['hipérico', 'St John wort'], conducta: 'suspender',
    resumen: 'Suspender 5 días antes. Es un inductor enzimático potente.',
    preop: 'Suspender al menos 5 días antes.',
    postop: 'Revisar interacciones antes de reanudarla.',
    riesgoContinuar: 'Induce el citocromo P450 y acelera el metabolismo de ciclosporina, warfarina y anticonceptivos, entre otros. Riesgo de síndrome serotoninérgico con antidepresivos y opioides serotoninérgicos.',
    evidencia: 'guia',
    fuente: ANGLEE01
  },
  {
    id: 'kava-valeriana', grupo: 'herbolarios', farmaco: 'Kava y valeriana',
    alias: ['kava', 'valeriana'], conducta: 'suspender',
    resumen: 'Suspender 24 h antes (kava) y con descenso gradual (valeriana).',
    preop: 'Suspender la kava al menos 24 horas antes. La valeriana, si se usa a diario y en dosis altas, conviene descenderla de forma gradual en las semanas previas en vez de suspenderla de golpe.',
    postop: 'No hay urgencia por reanudarlos.',
    riesgoContinuar: 'Ambos potencian el efecto sedante de los anestésicos. La kava se ha asociado a hepatotoxicidad.',
    riesgoSuspender: 'Suspender la valeriana bruscamente puede producir un cuadro similar a la abstinencia de benzodiacepinas.',
    evidencia: 'guia',
    fuente: ANGLEE01
  },
  {
    id: 'vitamina-e', grupo: 'herbolarios', farmaco: 'Vitamina E y omega 3',
    alias: ['vitamina E', 'omega 3', 'aceite de pescado', 'tocoferol'], conducta: 'suspender',
    resumen: 'Suspender 7 días antes por su efecto antiplaquetario.',
    preop: 'Suspender al menos 7 días antes, sobre todo a dosis altas.',
    postop: 'No hay urgencia por reanudarlos.',
    riesgoContinuar: 'Efecto antiplaquetario aditivo, relevante si el paciente ya toma aspirina o un anticoagulante.',
    evidencia: 'guia',
    fuente: ANGLEE01
  },
  /* ============ Hábitos y preparación ============ */
  {
    id: 'tabaco', grupo: 'habitos', farmaco: 'Tabaco',
    alias: ['fumar', 'cigarro', 'tabaquismo', 'dejar de fumar'], conducta: 'suspender',
    resumen: 'Suspender cuanto antes: el beneficio crece con las semanas.',
    preop: 'Indicar el abandono en la propia consulta de valoración, con el mayor margen posible. Las intervenciones intensivas en las 4 a 8 semanas previas son las que reducen complicaciones respiratorias y de herida quirúrgica. Incluso dejarlo pocos días antes mejora los niveles de carboxihemoglobina y la oxigenación tisular.',
    postop: 'Aprovechar el ingreso, que es una ventana de alta receptividad, para consolidar el abandono definitivo.',
    riesgoContinuar: 'Complicaciones pulmonares posoperatorias, infección y dehiscencia de herida, y peor cicatrización.',
    notas: [
      'Es de las intervenciones preoperatorias con mejor relación entre esfuerzo y beneficio, y de las que más se omiten por considerarse ajenas a la valoración.',
      'La preocupación clásica de que dejarlo justo antes de operar empeore las secreciones no se sostiene frente al beneficio de suspenderlo.'
    ],
    evidencia: 'guia',
    fuente: COCHRANE_TABACO
  },
  {
    id: 'alcohol', grupo: 'habitos', farmaco: 'Alcohol',
    alias: ['etanol', 'bebida', 'abstinencia', 'delirium tremens'], conducta: 'individualizar',
    resumen: 'Cuantificar el consumo y anticipar la abstinencia por escrito.',
    preop: 'Cuantificar el consumo real con una herramienta de cribado. En consumo de riesgo, la abstinencia de 4 semanas antes reduce complicaciones. Lo que no se puede improvisar es el manejo de la abstinencia: hay que anticiparla y dejarla indicada por escrito.',
    postop: 'Vigilar la abstinencia desde las primeras 6 a 24 horas y tratarla con benzodiacepinas guiadas por síntomas. Reponer tiamina antes que glucosa.',
    riesgoContinuar: 'Hepatopatía, coagulopatía, desnutrición, cardiomiopatía y mayor riesgo de infección.',
    riesgoSuspender: 'Síndrome de abstinencia no anticipado, que en su forma grave (delirium tremens) tiene mortalidad relevante.',
    notas: ['El paciente casi siempre subestima el consumo: conviene preguntar por cantidad y frecuencia concretas, no por si "toma".'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'cannabis', grupo: 'habitos', farmaco: 'Cannabis y otras drogas recreativas',
    alias: ['marihuana', 'THC', 'cocaína', 'metanfetamina'], conducta: 'individualizar',
    resumen: 'Preguntar siempre: cambia los requerimientos anestésicos.',
    preop: 'Preguntar de forma explícita y sin juicio, porque rara vez se declara. Suspender el cannabis idealmente 72 horas antes. Con estimulantes como cocaína o metanfetamina, el consumo reciente contraindica la cirugía electiva por riesgo de arritmia, isquemia y crisis hipertensiva.',
    postop: 'Anticipar mayor requerimiento analgésico en el consumidor crónico de cannabis.',
    riesgoContinuar: 'El cannabis aumenta los requerimientos de anestésicos y se asocia a más irritabilidad de la vía aérea. Los estimulantes añaden riesgo cardiovascular agudo.',
    notas: ['Informar al equipo de anestesia: el dato cambia la conducción de la anestesia aunque no cambie la indicación quirúrgica.'],
    evidencia: 'consenso',
    fuente: CONSENSO
  },
  {
    id: 'ayuno', grupo: 'habitos', farmaco: 'Ayuno preoperatorio',
    alias: ['NPO', 'nada por vía oral', 'líquidos claros', 'nada por boca'], conducta: 'ajustar',
    resumen: '2 h líquidos claros, 6 h comida ligera, 8 h comida grasa.',
    preop: 'Intervalos mínimos de ayuno antes de anestesia general, regional o sedación:' +
      '<ul class="cr-list">' +
      '<li><strong>2 horas</strong> para líquidos claros (agua, jugo sin pulpa, té o café sin leche).</li>' +
      '<li><strong>4 horas</strong> para leche materna.</li>' +
      '<li><strong>6 horas</strong> para fórmula infantil, leche no humana o una comida ligera.</li>' +
      '<li><strong>8 horas o más</strong> para comida con carne o alto contenido graso.</li>' +
      '</ul>',
    postop: 'Reiniciar la vía oral según la cirugía y la indicación del equipo quirúrgico.',
    riesgoContinuar: 'El ayuno prolongado innecesario produce deshidratación, hipoglucemia, malestar y peor recuperación, sin reducir el riesgo de aspiración.',
    notas: [
      'El error frecuente no es ayunar poco, sino demasiado: mandar "nada por boca desde medianoche" a un paciente programado para la tarde no aporta seguridad y sí malestar.',
      'Los medicamentos que deben continuarse se toman con un sorbo de agua, que no rompe el ayuno.',
      'Con agonistas del receptor de GLP-1 no hay evidencia de cuál es el ayuno óptimo: se siguen estos mismos intervalos y se aplican precauciones de estómago lleno cuando no se suspendió el fármaco.'
    ],
    evidencia: 'guia',
    fuente: ASAAYUNO
  }
];

export default { farmacos, grupos, CONDUCTAS };
