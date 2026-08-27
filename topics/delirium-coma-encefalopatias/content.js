// topics/delirium-coma-encefalopatias/content.js: Delirium, Coma y Encefalopatías Metabólicas.
// Agrupa 2 ítems del temario ("Delirium y coma" + "Encefalopatías metabólicas") dentro del
// clúster "Alteración de conciencia y enfermedad neuromuscular" de Neurología. Es además el tema
// COMPARTIDO con Geriatría (ítem "Delirium en el adulto mayor"), por decisión explícita del
// usuario: se construye una sola vez y se enlaza a ambos bloques (ver temario-index.js).
//
// IMPORTANTE: la encefalopatía hepática YA está cubierta como ficha de complicación completa en
// topics/cirrosis-hepatica/content.js (con su propia clasificación West Haven); este tema NO la
// repite, solo la referencia como diagnóstico diferencial.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre categories): array de objetos {id, label}, NUNCA
// strings sueltos (bug encontrado y corregido en los 5 temas anteriores de esta sesión).
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// Estructura confirmada por el usuario: 4 fichas de entidad/causa (delirium, coma y evaluación
// del paciente comatoso, encefalopatías metabólicas tóxicas sin la hepática, encefalopatía de
// Wernicke) + 4 fichas de complicación (agitación y manejo farmacológico, muerte cerebral,
// síndrome de Korsakoff, delirium persistente y deterioro cognitivo a largo plazo). Calculadora:
// CAM (Confusion Assessment Method). 1 figura SVG: evaluación del paciente comatoso (reflejos de
// tronco y patrones respiratorios por nivel).

export const meta = {
  id: 'delirium-coma-encefalopatias',
  titulo: 'Delirium, Coma y Encefalopatías Metabólicas',
  subtitulo: 'Módulo 37 · Medicina Interna',
  accent: '#5c3a4a',
  accentDim: '#9c7686'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const comaHtml = `
<div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap;max-width:560px;margin:0 auto;font-size:11px;color:var(--ink);">
  <div>
    <svg viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:220px;">
      <ellipse cx="70" cy="40" rx="45" ry="35" fill="none" stroke="var(--line)" stroke-width="2"/>
      <text x="70" y="18" text-anchor="middle" font-size="9" fill="var(--ink-dim)">Diencéfalo</text>
      <rect x="45" y="80" width="50" height="45" rx="10" fill="none" stroke="var(--line)" stroke-width="2"/>
      <text x="70" y="72" text-anchor="middle" font-size="9" fill="var(--ink-dim)">Mesencéfalo</text>
      <rect x="48" y="135" width="44" height="40" rx="8" fill="none" stroke="var(--line)" stroke-width="2"/>
      <text x="70" y="129" text-anchor="middle" font-size="9" fill="var(--ink-dim)">Protuberancia</text>
      <rect x="52" y="185" width="36" height="40" rx="6" fill="none" stroke="var(--line)" stroke-width="2"/>
      <text x="70" y="179" text-anchor="middle" font-size="9" fill="var(--ink-dim)">Bulbo</text>
    </svg>
  </div>
  <div style="flex:1;min-width:220px;">
    <table style="width:100%;border-collapse:collapse;font-size:10.5px;">
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:3px 6px;font-weight:700;color:#5c3a4a;">Nivel</td><td style="padding:3px 6px;font-weight:700;color:#5c3a4a;">Reflejo/patrón</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:3px 6px;">Diencéfalo</td><td style="padding:3px 6px;">Cheyne-Stokes (crece-decrece con apnea)</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:3px 6px;">Mesencéfalo</td><td style="padding:3px 6px;">Pupilar (II/III); hiperventilación central neurógena</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:3px 6px;">Protuberancia</td><td style="padding:3px 6px;">Corneal y oculocefálico/vestibular (V/VII/VIII); apnéustica</td></tr>
      <tr><td style="padding:3px 6px;">Bulbo</td><td style="padding:3px 6px;">Nauseoso/tusígeno (IX/X); atáxica (Biot), paro respiratorio inminente</td></tr>
    </table>
  </div>
  <div style="flex:1 1 100%;color:var(--ink-dim);font-size:10.5px;">La preservación SIMÉTRICA de los reflejos de tronco, con pupilas reactivas, favorece una causa metabólica/tóxica sobre una estructural; la pérdida progresiva de reflejos en sentido rostro-caudal sugiere herniación.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema agrupa 3 síndromes de alteración aguda de la función cerebral, extremadamente frecuentes en el paciente hospitalizado, que comparten un principio central: ninguno es un diagnóstico final por sí mismo, sino la manifestación de una causa subyacente que debe buscarse y tratarse activamente.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Las 4 entidades de este tema.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Delirium</strong>: síndrome confusional agudo y fluctuante, extremadamente frecuente en el hospitalizado y con frecuencia subdiagnosticado en su forma hipoactiva.</li>
    <li><strong>Coma y evaluación del paciente comatoso</strong>: el espectro de alteración de conciencia y el examen sistemático (reflejos de tronco, patrón respiratorio) que distingue causa estructural de metabólica.</li>
    <li><strong>Encefalopatías metabólicas y tóxicas</strong>: urémica, hipoglucémica, hipercápnica, mixedematosa (la hepática se desarrolla en el tema de Cirrosis).</li>
    <li><strong>Encefalopatía de Wernicke</strong>: por deficiencia de tiamina, una urgencia potencialmente reversible que se subdiagnostica con frecuencia.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Evaluación del paciente con alteración de conciencia.</strong>${figBlock('Imagen 1', 'Evaluación del paciente comatoso: reflejos de tronco y patrón respiratorio por nivel', comaHtml)} El examen sistemático de los reflejos de tronco encefálico y el patrón respiratorio permite localizar el nivel de disfunción y distinguir una causa estructural (asimétrica, con pérdida progresiva rostro-caudal) de una metabólica (simétrica, con reflejos pupilares preservados).</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de manejo.</strong> El delirium se diagnostica con el CAM (calculadora más abajo) y se maneja primariamente con medidas no farmacológicas; el coma requiere descartar de inmediato causas rápidamente reversibles (hipoglucemia, opioides, deficiencia de tiamina) antes de completar el estudio estructural y metabólico. El desarrollo completo de las 4 complicaciones se detalla en Complicaciones.</p>`;

export const bibliografia = [
  'Inouye SK, van Dyck CH, Alessi CA, et al. Clarifying confusion: the confusion assessment method. Ann Intern Med. 1990;113(12):941-948.',
  'Wilson JE, Mart MF, Cunningham C, et al. Delirium. Nat Rev Dis Primers. 2020;6(1):90.',
  'Marcantonio ER. Delirium in Hospitalized Older Adults. N Engl J Med. 2017;377(15):1456-1466.',
  'Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922.',
  'Posner JB, Saper CB, Schiff ND, Plum F. Plum and Posner\'s Diagnosis of Stupor and Coma. 4th ed. Oxford University Press; 2007.',
  'Wijdicks EF, Varelas PN, Gronseth GS, Greer DM. Evidence-based guideline update: determining brain death in adults. Neurology. 2010;74(23):1911-1918.',
  'Greer DM, Shemie SD, Lewis A, et al. Determination of Brain Death/Death by Neurologic Criteria. JAMA. 2020;324(11):1078-1097.',
  'Sechi G, Serra A. Wernicke\'s encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol. 2007;6(5):442-455.',
  'Kopelman MD, Thomson AD, Guerrini I, Marshall EJ. The Korsakoff syndrome: clinical aspects, psychology and treatment. Alcohol Alcohol. 2009;44(2):148-154.',
  'Angel MJ, Young GB. Metabolic encephalopathies. Neurol Clin. 2011;29(4):837-882.',
  'Seifter JL, Samuels MA. Uremic encephalopathy and other brain disorders associated with renal failure. Semin Neurol. 2011;31(2):139-143.',
  'Sutter R, Kaplan PW. Electroencephalographic criteria for nonconvulsive status epilepticus. Epilepsia. 2012;53 Suppl 3:1-51.',
  'Girard TD, Exline MC, Carson SS, et al. Haloperidol and Ziprasidone for Treatment of Delirium in Critical Illness. N Engl J Med. 2018;379(26):2506-2516.',
  'Ely EW, Inouye SK, Bernard GR, et al. Delirium in mechanically ventilated patients: validity and reliability of the confusion assessment method for the intensive care unit (CAM-ICU). JAMA. 2001;286(21):2703-2710.',
  'Chandrasekhar R, Tsai AN, Girard TD. Metabolic and endocrine causes of delirium. Neurol Clin. 2011;29(4):879-894.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Alteración leve/subclínica (delirium hipoactivo o confusión leve)',
      tituloB: 'Alteración establecida (delirium hiperactivo florido o coma)',
      compensada: 'Enlentecimiento psicomotor, letargia, o inatención sutil, con frecuencia confundida con fatiga o depresión; el delirium hipoactivo se subdiagnostica sistemáticamente si no se busca activamente con el CAM.',
      descompensada: 'Agitación psicomotora franca con alucinaciones (delirium hiperactivo) o ausencia completa de respuesta a estímulos externos (coma); ambos extremos requieren identificación urgente de la causa subyacente.'
    },
    laboratorio: [
      { prueba: 'Glucosa capilar inmediata', utilidad: 'Descarta hipoglucemia, una causa rápidamente reversible y potencialmente devastadora si se retrasa el tratamiento.' },
      { prueba: 'Electrolitos, función renal y hepática', utilidad: 'Identifica alteraciones metabólicas (sodio, calcio, urea) y disfunción orgánica como causa del cuadro.' },
      { prueba: 'Gasometría arterial', utilidad: 'Evalúa hipoxemia e hipercapnia como causas de encefalopatía.' },
      { prueba: 'Tamizaje toxicológico y niveles de fármacos', utilidad: 'Identifica intoxicación o efecto acumulado de fármacos sedantes/anticolinérgicos.' }
    ],
    no_invasivos: [
      { metodo: 'CAM (Confusion Assessment Method, calculadora)', interpretacion: 'Combina inicio agudo/curso fluctuante, inatención, y pensamiento desorganizado o alteración del nivel de conciencia, para el diagnóstico de delirium.', cutoff: 'Inicio agudo + inatención + (pensamiento desorganizado O alteración de conciencia)' }
    ],
    imagen: [
      { modalidad: 'Tomografía computarizada cerebral urgente', hallazgos: 'Indicada en todo paciente con alteración aguda e inexplicada de conciencia para descartar causa estructural (hemorragia, gran infarto, masa) antes de atribuir el cuadro a una causa metabólica.' },
      { modalidad: 'Resonancia magnética cerebral (sospecha de Wernicke)', hallazgos: 'Hiperintensidad T2/FLAIR simétrica en cuerpos mamilares y tálamo medial; su ausencia NO descarta el diagnóstico clínico de encefalopatía de Wernicke.' },
      { modalidad: 'Electroencefalograma', hallazgos: 'Descarta estado epiléptico no convulsivo, un diagnóstico diferencial importante y tratable de la alteración de conciencia inexplicada.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es entre las 4 entidades (delirium, coma, encefalopatías metabólicas/tóxicas, encefalopatía de Wernicke), que comparten el principio de ser síndromes secundarios a una causa identificable y con frecuencia reversible si se trata a tiempo.',
    escalas: [
      { nombre: 'CAM (Confusion Assessment Method)', componentes: 'Inicio agudo y curso fluctuante, inatención, pensamiento desorganizado, alteración del nivel de conciencia. Calculadora disponible más abajo.', formula: 'Inicio agudo/fluctuante + inatención + (pensamiento desorganizado O alteración de conciencia)', interpretacion: 'La herramienta diagnóstica estándar para delirium, validada tanto en planta como en UCI (versión CAM-ICU).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Agitación y manejo farmacológico del delirium',
      color: '#5c3a4a',
      definicion: 'Manifestación conductual del delirium hiperactivo o mixto que pone en riesgo la seguridad del propio paciente (caídas, autolesión, retiro de dispositivos médicos) o del personal, y que requiere manejo activo cuando las medidas no farmacológicas son insuficientes.',
      fisiopatologia: 'Refleja la misma disfunción neuroquímica subyacente al delirium (desequilibrio colinérgico-dopaminérgico relativo), con frecuencia exacerbada por dolor no controlado, retención urinaria o fecal, o deprivación de sueño no corregidas.',
      epidemiologia: 'Ocurre en una proporción considerable de los episodios de delirium, particularmente en el subtipo hiperactivo o mixto; el subtipo puramente hipoactivo, mucho más frecuente en conjunto, rara vez presenta agitación significativa.',
      factores_riesgo: ['Dolor no controlado', 'Retención urinaria o fecal no reconocida', 'Deprivación de sueño', 'Privación sensorial (déficit visual/auditivo no corregido)', 'Uso de restricciones físicas (pueden empeorar paradójicamente la agitación)'],
      clinica: 'Inquietud psicomotora, intentos de retirar catéteres/sondas/vías, verbalización desorganizada, y en ocasiones agresividad física hacia el personal o los familiares.',
      criterios_dx: 'Clínico, en el contexto de un delirium ya diagnosticado por CAM.',
      tx_medico: 'Reevaluar y tratar activamente las causas reversibles de agitación (dolor, retención urinaria/fecal, hipoxemia) antes de escalar a manejo farmacológico; evitar restricciones físicas siempre que sea posible.',
      tx_farmacologico: 'Antipsicóticos en dosis bajas (haloperidol, quetiapina, risperidona) como primera línea farmacológica cuando es estrictamente necesario; evitar benzodiacepinas salvo en el delirium por abstinencia de alcohol o de benzodiacepinas, donde SÍ son el tratamiento de elección.',
      tx_intervencionista: 'No aplica de forma rutinaria.',
      criterios_uci: 'Agitación que pone en riesgo inminente la seguridad del paciente pese al manejo inicial, o que se asocia a inestabilidad fisiológica significativa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación frecuente de la necesidad continuada de antipsicóticos, con suspensión tan pronto como la agitación se resuelve.',
      seguimiento_ambulatorio: 'No suele requerir seguimiento específico más allá de la resolución del episodio agudo, salvo evaluación cognitiva si el delirium fue prolongado (ver esa complicación).',
      pronostico: 'La agitación tiende a resolverse con el tratamiento de la causa subyacente del delirium; el uso prolongado de antipsicóticos más allá del episodio agudo no está indicado ni respaldado por evidencia.',
      algoritmo: ['Agitación en el contexto de delirium ya diagnosticado por CAM', 'Buscar y tratar activamente causas reversibles (dolor, retención urinaria/fecal, hipoxemia)', 'Medidas no farmacológicas y evitar restricciones físicas', 'Antipsicóticos en dosis bajas si es necesario, salvo abstinencia alcohólica/benzodiacepínica (usar benzodiacepinas en ese caso)', 'Suspender el antipsicótico tan pronto como se resuelva la agitación']
    },
    {
      nombre: 'Muerte cerebral y sus criterios diagnósticos',
      color: '#3d3d5c',
      definicion: 'Cese completo e irreversible de toda la función cerebral, incluyendo la del tronco encefálico, que constituye la muerte del individuo desde el punto de vista legal y médico, pese a que la función cardiaca pueda mantenerse artificialmente con soporte.',
      fisiopatologia: 'Representa el punto final de una lesión cerebral catastrófica (hemorragia masiva, trauma grave, anoxia prolongada) que produce edema cerebral progresivo, herniación, y cese completo e irreversible del flujo sanguíneo cerebral.',
      epidemiologia: 'Ocurre en una proporción de los pacientes con lesión cerebral catastrófica manejados en cuidados críticos; su determinación oportuna y correcta es esencial tanto para evitar la prolongación innecesaria del soporte vital como para la discusión oportuna de donación de órganos.',
      factores_riesgo: ['Hemorragia intracraneal masiva', 'Traumatismo craneoencefálico grave', 'Anoxia cerebral prolongada (paro cardiorrespiratorio prolongado)', 'Edema cerebral difuso no controlado'],
      clinica: 'Ausencia completa de respuesta a cualquier estímulo, incluyendo el doloroso, sin ningún movimiento espontáneo de origen cerebral (pueden persistir reflejos espinales).',
      criterios_dx: 'Precondiciones (causa conocida e irreversible, ausencia de factores confusores: hipotermia, intoxicación, bloqueo neuromuscular, alteración metabólica grave) + ausencia completa de todos los reflejos de tronco encefálico (pupilar, corneal, oculocefálico/oculovestibular, nauseoso, tusígeno) + prueba de apnea positiva (ausencia de esfuerzo respiratorio con hipercapnia documentada por gasometría).',
      complementarios: 'Estudios confirmatorios de flujo sanguíneo cerebral (angiografía cerebral, gammagrafía de perfusión, Doppler transcraneal) cuando la exploración clínica no puede completarse de forma confiable (por ejemplo, trauma facial grave que impide el examen pupilar, o inestabilidad que impide la prueba de apnea).',
      dx_diferencial: 'Estado vegetativo persistente (preserva reflejos de tronco y ciclos de sueño-vigilia, a diferencia de la muerte cerebral), síndrome de enclaustramiento (el paciente está consciente, no debe confundirse con ningún grado de coma), hipotermia profunda o intoxicación grave (pueden simular la ausencia de reflejos de tronco de forma reversible, por lo que deben excluirse como precondición antes de proceder al diagnóstico).',
      tx_medico: 'No aplica tratamiento una vez confirmado el diagnóstico; el manejo se centra en la comunicación con la familia y, cuando aplica, la coordinación con el programa de donación de órganos.',
      criterios_uci: 'El paciente en evaluación de muerte cerebral, por definición, ya se encuentra en un entorno de cuidados críticos con soporte vital completo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'La determinación de muerte cerebral requiere protocolos institucionales estrictos, con frecuencia 2 exploraciones independientes separadas por un intervalo definido según la normativa local.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Diagnóstico irreversible por definición; permite la discusión oportuna de donación de órganos y la limitación apropiada del soporte vital, evitando la prolongación de medidas sin ningún beneficio posible para el paciente.',
      algoritmo: ['Confirmar precondiciones: causa conocida e irreversible, ausencia de factores confusores (hipotermia, intoxicación, bloqueo neuromuscular, alteración metabólica grave)', 'Exploración clínica: ausencia completa de todos los reflejos de tronco encefálico', 'Prueba de apnea: ausencia de esfuerzo respiratorio con hipercapnia documentada', 'Estudios confirmatorios de flujo cerebral si la exploración clínica es incompleta', 'Seguir el protocolo institucional (típicamente 2 exploraciones independientes)']
    },
    {
      nombre: 'Síndrome de Korsakoff',
      color: '#8a6a1f',
      definicion: 'Síndrome amnésico crónico e irreversible que resulta del tratamiento tardío o ausente de la encefalopatía de Wernicke, caracterizado por amnesia anterógrada grave (incapacidad de formar nuevos recuerdos) con relativa preservación de otras funciones cognitivas.',
      fisiopatologia: 'Daño neuronal permanente en los cuerpos mamilares y el núcleo talámico dorsomedial, las mismas estructuras afectadas de forma aguda y potencialmente reversible en la encefalopatía de Wernicke, que se vuelve irreversible cuando el tratamiento con tiamina se retrasa o se omite.',
      epidemiologia: 'Se desarrolla en una proporción considerable de los casos de encefalopatía de Wernicke no tratados oportunamente, particularmente en el contexto de alcoholismo crónico continuado.',
      factores_riesgo: ['Encefalopatía de Wernicke no reconocida o tratada tardíamente', 'Alcoholismo crónico continuado', 'Episodios repetidos de deficiencia de tiamina'],
      clinica: 'Amnesia anterógrada grave y desproporcionada respecto al resto de las funciones cognitivas, con frecuencia acompañada de confabulación (el paciente genera relatos inventados, sin intención de engañar, para llenar los vacíos de memoria) y desorientación temporal.',
      criterios_dx: 'Clínico, en un paciente con antecedente de encefalopatía de Wernicke (tratada tardíamente o no tratada) que desarrolla un patrón amnésico característico persistente tras la resolución del cuadro agudo.',
      dx_diferencial: 'Otras causas de amnesia (lesión hipocampal bilateral de otra causa), demencia de otra etiología (en el Korsakoff, otras funciones cognitivas están relativamente preservadas, a diferencia de las demencias corticales, ver ese tema).',
      tx_medico: 'Continuar la suplementación de tiamina, aunque la mejoría de la amnesia ya establecida es limitada; rehabilitación cognitiva dirigida a estrategias compensatorias.',
      tx_farmacologico: 'Tiamina de mantenimiento; no existe un tratamiento farmacológico específico que revierta la amnesia establecida.',
      pronostico: 'La amnesia establecida es generalmente permanente e irreversible, a diferencia de los signos agudos de la encefalopatía de Wernicke (oftalmoplejia, ataxia), que sí responden al tratamiento oportuno; subraya la importancia crítica del tratamiento temprano de la encefalopatía de Wernicke antes de que progrese a este estado.',
      algoritmo: ['Antecedente de encefalopatía de Wernicke tratada tardíamente o no tratada + amnesia anterógrada persistente → sospechar síndrome de Korsakoff', 'Evaluar confabulación y desorientación temporal asociadas', 'Continuar tiamina de mantenimiento pese al beneficio limitado sobre la amnesia establecida', 'Rehabilitación cognitiva con estrategias compensatorias', 'Distinguir de otras demencias por la preservación relativa de otras funciones cognitivas']
    },
    {
      nombre: 'Delirium persistente y deterioro cognitivo a largo plazo',
      color: '#3f6b52',
      definicion: 'Persistencia de síntomas de delirium más allá de la resolución esperada de la causa aguda, y la asociación bien documentada entre un episodio de delirium (particularmente si es prolongado o recurrente) y un mayor riesgo de deterioro cognitivo permanente y progresión a demencia en el seguimiento a largo plazo.',
      fisiopatologia: 'Se propone que el delirium, particularmente en el paciente con reserva cognitiva ya disminuida, puede acelerar procesos neurodegenerativos subyacentes previamente subclínicos, o que el propio episodio de neuroinflamación y disfunción neuronal aguda produce daño acumulativo que contribuye directamente al deterioro cognitivo posterior.',
      epidemiologia: 'El delirium en el paciente hospitalizado de edad avanzada se asocia a un riesgo considerablemente mayor de deterioro cognitivo nuevo o de progresión de un deterioro cognitivo preexistente en los meses y años siguientes, independientemente de la causa precipitante del episodio agudo.',
      factores_riesgo: ['Mayor duración y gravedad del episodio de delirium', 'Delirium recurrente (múltiples episodios)', 'Demencia o deterioro cognitivo leve preexistente', 'Edad avanzada'],
      clinica: 'Tras la aparente resolución del episodio agudo, el paciente o su familia refieren que "nunca volvió a ser el mismo" cognitivamente, con déficits sutiles de memoria o función ejecutiva que antes no estaban presentes.',
      criterios_dx: 'Evaluación cognitiva formal (seriada, comparando con el estado cognitivo previo documentado si está disponible) semanas a meses después de la resolución del episodio agudo de delirium.',
      dx_diferencial: 'Demencia preexistente ya presente antes del delirium (revisar historia previa cuidadosamente), depresión posterior al episodio agudo (puede simular deterioro cognitivo).',
      tx_medico: 'Seguimiento cognitivo estructurado tras cualquier episodio de delirium significativo, particularmente en el paciente de edad avanzada; no existe un tratamiento específico que revierta el deterioro una vez establecido, por lo que la prevención del delirium en sí (medidas no farmacológicas multicomponente) es la intervención más costo-efectiva.',
      seguimiento_ambulatorio: 'Evaluación cognitiva de seguimiento tras el alta en el paciente que tuvo un episodio de delirium significativo durante la hospitalización, particularmente si fue prolongado.',
      pronostico: 'Variable; una proporción de los pacientes con deterioro cognitivo nuevo tras un delirium no se recupera completamente al estado cognitivo basal previo, lo que subraya que el delirium no debe considerarse un evento benigno y completamente reversible en todos los casos.',
      algoritmo: ['Documentar el estado cognitivo basal antes del episodio de delirium siempre que sea posible', 'Vigilar la resolución completa de los síntomas tras tratar la causa subyacente', 'Si persisten síntomas más allá de lo esperado, evaluación cognitiva formal', 'Seguimiento cognitivo estructurado tras el alta en el paciente de alto riesgo', 'Priorizar la prevención del delirium (medidas multicomponente) como la intervención más costo-efectiva']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El paciente con delirium, coma, o encefalopatía metabólica requiere vigilancia neurológica estrecha y la identificación activa y el tratamiento de la causa subyacente, dado que ninguno de estos síndromes es un diagnóstico final por sí mismo.',
    parametros: ['Evaluación con CAM al menos una vez por turno en el paciente hospitalizado de alto riesgo', 'Examen neurológico seriado (pupilas, reflejos de tronco, escala de Glasgow) en el paciente con alteración del estado de conciencia', 'Glucosa capilar y electrolitos seriados según la causa sospechada', 'Medidas no farmacológicas multicomponente de prevención de delirium (reorientación, movilización temprana, higiene de sueño, corrección de déficits sensoriales) en todo paciente de alto riesgo'],
    criterios_uci_general: 'Glasgow ≤8 o incapacidad de proteger la vía aérea, inestabilidad hemodinámica asociada, o necesidad de monitorización neurológica continua.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Administrar tiamina antes de cualquier solución glucosada en el paciente con riesgo de deficiencia (alcoholismo, desnutrición); implementar protocolos multicomponente de prevención de delirium en el paciente hospitalizado de alto riesgo (particularmente en UCI y posoperatorio); revisión y suspensión oportuna de fármacos de alto riesgo (anticolinérgicos, benzodiacepinas) en el paciente mayor.'
  }
};

export const compCites = {
  'Agitación y manejo farmacológico del delirium': [12, 0],
  'Muerte cerebral y sus criterios diagnósticos': [5, 6],
  'Síndrome de Korsakoff': [8, 7],
  'Delirium persistente y deterioro cognitivo a largo plazo': [2, 3]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'CAM (Confusion Assessment Method)': [0] };
export const escalaCalc = { 'CAM (Confusion Assessment Method)': 'cam-delirium' };
export const compGroups = [
  { name: 'Manejo agudo', items: ['Agitación y manejo farmacológico del delirium', 'Muerte cerebral y sus criterios diagnósticos'] },
  { name: 'Secuelas a largo plazo', items: ['Síndrome de Korsakoff', 'Delirium persistente y deterioro cognitivo a largo plazo'] }
];
export const complicacionesIntro = 'Las primeras 2 fichas son escenarios de manejo agudo (la agitación que acompaña al delirium, y el extremo opuesto del espectro de conciencia, la muerte cerebral). Las siguientes 2 son secuelas a largo plazo cuando el tratamiento oportuno falla o se retrasa: el síndrome de Korsakoff tras una encefalopatía de Wernicke no tratada, y el deterioro cognitivo persistente tras un episodio de delirium.';
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
  root: { title: 'DELIRIUM, COMA Y ENCEFALOPATÍAS', color: '#5c3a4a', target: 'definicion' },
  branches: [
    { title: 'Entidades', sub: 'Síndromes de alteración de conciencia', color: '#3d3d5c', target: 'complicaciones', leaves: [
      { title: 'Delirium', sub: 'Agudo, fluctuante, CAM', color: '#5c3a4a', target: 'complicaciones' },
      { title: 'Coma', sub: 'Evaluación estructural vs. metabólica', color: '#3d3d5c', target: 'complicaciones' },
      { title: 'Encefalopatías metabólicas', sub: 'Urémica, hipoglucémica, mixedema', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Encefalopatía de Wernicke', sub: 'Déficit de tiamina, reversible si se trata a tiempo', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Consecuencias', sub: 'Manejo agudo y secuelas', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Agitación', sub: 'Manejo del delirium hiperactivo', color: '#5c3a4a', target: 'complicaciones' },
      { title: 'Muerte cerebral', sub: 'Criterios diagnósticos', color: '#3d3d5c', target: 'complicaciones' },
      { title: 'Korsakoff', sub: 'Amnesia irreversible', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Deterioro cognitivo', sub: 'Secuela a largo plazo del delirium', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [0] };
export const clasificacionCite = [0];
export const seguimientoCite = [3];
