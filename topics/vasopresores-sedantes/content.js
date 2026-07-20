// topics/vasopresores-sedantes/content.js — Módulo 3: Vasopresores, Sedantes, Analgesia y Bloqueo Neuromuscular.
// Formato adaptado: no son enfermedades sino fármacos, así que las mismas "complicaciones" del motor
// se reutilizan como monografías de fármaco (ver modalLabels más abajo para el mapeo de etiquetas).
// Guía de referencia para dosis/diluciones: hoja de cálculo "Calculos dosis.xlsx" del usuario.

export const meta = {
  id: 'vasopresores-sedantes',
  titulo: 'Vasopresores y Sedantes',
  subtitulo: 'Módulo 3 · Farmacología de cuidados críticos',
  accent: '#3d5a73',
  accentDim: '#5c7a9a'
};

export const definicionText = 'Los vasopresores, inotrópicos, sedantes, analgésicos y bloqueadores neuromusculares son fármacos de uso diario en el paciente crítico, todos con ventanas terapéuticas estrechas que exigen titulación individualizada según objetivos clínicos: presión arterial media para los vasopresores, escalas validadas de sedación (RASS) y dolor (CPOT) para la analgosedación, y el tren de cuatro para la profundidad del bloqueo neuromuscular. La práctica actual prioriza la estrategia "analgesia primero" (tratar el dolor antes de escalar sedación) y prefiere agentes no benzodiacepínicos (propofol, dexmedetomidina) sobre benzodiacepinas para sedación de rutina, dado su menor asociación con delirium y tiempo prolongado de ventilación mecánica (guías PADIS 2018).';

export const bibliografia = [
  'Devlin JW, Skrobik Y, Gélinas C, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Withdrawal, and Delirium in Adult Critically Ill Patients (PADIS). Crit Care Med. 2018;46(9):e825-e873.',
  'Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Crit Care Med. 2026;54(4):725-812.',
  'Overgaard CB, Džavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation. 2008;118(10):1047-1056.',
  'Murray MJ, DeBlock H, Erstad B, et al. Clinical Practice Guidelines for Sustained Neuromuscular Blockade in the Adult Critically Ill Patient. Crit Care Med. 2016;44(11):2079-2103.',
  'Kotani Y, Di Gioia A, Landoni G, Belletti A, Khanna AK. An updated "norepinephrine equivalent" score in intensive care as a marker of shock severity. Crit Care. 2023;27(1):29.',
  'Kurdi MS, Theerth KA, Deva RS. Ketamine: Current applications in anesthesia, pain, and critical care. Anesth Essays Res. 2014;8(3):283-290.',
  'Wieruszewski PM, Leone M, Kaas-Hansen BS, et al. Position Paper on the Reporting of Norepinephrine Formulations in Critical Care. Crit Care Med. 2024;52(4):521-530.',
  'Katzung BG, Vanderah TW. Basic & Clinical Pharmacology. 16th ed. McGraw Hill; 2024.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Vasopresores e inotrópicos',
      tituloB: 'Sedantes, analgesia y bloqueo neuromuscular',
      compensada: 'Restauran o sostienen la presión de perfusión (vasopresores) o el gasto cardiaco (inotrópicos) en estados de choque. Se titulan a un objetivo hemodinámico explícito (típicamente PAM ≥65 mmHg), no a una dosis fija — la dosis "correcta" es la que logra el objetivo con el menor efecto adverso posible.',
      descompensada: 'Controlan dolor, ansiedad, agitación y posibilitan la ventilación mecánica cuando es necesario. Se titulan con escalas validadas (RASS para sedación, CPOT/EVA para dolor, tren de cuatro para bloqueo neuromuscular) — nunca a dosis fija sin reevaluación diaria.'
    },
    laboratorio: [],
    no_invasivos: [],
    imagen: []
  },
  clasificacion: {
    compensada_descompensada: 'Comparativa rápida de los 12 fármacos de esta sección — clase, dosis habitual y uso principal. Toca cada fármaco en la sección siguiente para ver la monografía completa (mecanismo de acción, contraindicaciones, efectos adversos, dosis y presentación).',
    escalas: [
      { nombre: 'Norepinefrina', componentes: 'Catecolamina, agonista α1 predominante', formula: '0.05-0.5 mcg/kg/min', interpretacion: 'Vasopresor de primera línea en choque séptico' },
      { nombre: 'Adrenalina', componentes: 'Catecolamina, agonista α1+β1+β2', formula: '0.01-0.5 mcg/kg/min (choque); 1 mg c/3-5min (paro)', interpretacion: 'Paro cardiaco, anafilaxia, choque con disfunción cardiaca' },
      { nombre: 'Dopamina', componentes: 'Catecolamina, efecto dosis-dependiente', formula: '2-10(-20) mcg/kg/min', interpretacion: 'Alternativa si no hay noradrenalina disponible' },
      { nombre: 'Dobutamina', componentes: 'Catecolamina sintética, agonista β1', formula: '2-20 mcg/kg/min', interpretacion: 'Inotrópico en choque cardiogénico / disfunción miocárdica' },
      { nombre: 'Vasopresina', componentes: 'Análogo de ADH, receptores V1', formula: '0.01-0.07 U/min (dosis fija)', interpretacion: 'Segundo vasopresor, ahorrador de catecolaminas' },
      { nombre: 'Midazolam', componentes: 'Benzodiacepina', formula: '0.02-0.1 mg/kg/h', interpretacion: 'Sedación (2ª línea); de elección en estado epiléptico/abstinencia' },
      { nombre: 'Propofol', componentes: 'Sedante-hipnótico GABAérgico', formula: '5-85 mcg/kg/min (0.3-5 mg/kg/h)', interpretacion: 'Sedación de elección en VM' },
      { nombre: 'Dexmedetomidina', componentes: 'Agonista α2 selectivo', formula: '0.2-0.7 mcg/kg/h', interpretacion: 'Sedación ligera "cooperativa", sin depresión respiratoria' },
      { nombre: 'Ketamina', componentes: 'Antagonista NMDA', formula: '1-2 mg/kg bolo; 5-85 mcg/kg/min infusión', interpretacion: 'Inducción en inestabilidad hemodinámica/broncoespasmo' },
      { nombre: 'Fentanilo', componentes: 'Opioide agonista mu', formula: '0.5-10 mcg/kg/h', interpretacion: 'Analgésico de elección en el paciente crítico' },
      { nombre: 'Vecuronio', componentes: 'Bloqueador neuromuscular aminoesteroide', formula: '1-2 mcg/kg/min', interpretacion: 'Parálisis de mantenimiento en VM' },
      { nombre: 'Rocuronio', componentes: 'Bloqueador neuromuscular aminoesteroide', formula: '1.2 mg/kg (secuencia rápida)', interpretacion: 'Alternativa a succinilcolina; reversible con sugammadex' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Norepinefrina (Noradrenalina)',
      color: '#8c3a34',
      definicion: 'Catecolamina endógena, vasopresor de primera línea en choque séptico y otros estados de choque distributivo. Agonista predominantemente α1-adrenérgico con actividad β1 moderada.',
      fisiopatologia: 'Agonista α1 potente (vasoconstricción arterial y venosa) con actividad β1 moderada (inotropismo y cronotropismo leves). El efecto neto es aumento de la resistencia vascular sistémica y de la presión arterial media, con mínimo efecto directo sobre la frecuencia cardiaca.',
      epidemiologia: 'Inicio de acción casi inmediato (1-2 min) por vía IV; vida media plasmática ~2-2.5 min; metabolizada por COMT y MAO; el efecto cesa minutos después de suspender la infusión.',
      factores_riesgo: ['Hipovolemia no corregida (dar fluido antes o simultáneamente)', 'Taquiarritmias no controladas', 'Hipersensibilidad conocida al fármaco'],
      clinica: 'Aumenta PAM y resistencia vascular sistémica; el gasto cardiaco generalmente no cambia o aumenta levemente; puede reducir la perfusión esplácnica y renal a dosis altas por vasoconstricción excesiva.',
      laboratorio: 'Presión arterial invasiva (línea arterial) recomendada con uso prolongado o dosis crecientes; lactato seriado; perfusión periférica (relleno capilar); diuresis horaria.',
      complementarios: 'Potenciación con IMAO (riesgo de crisis hipertensiva); antagonismo parcial con alfabloqueadores; los antidepresivos tricíclicos pueden potenciar el efecto presor.',
      tx_medico: 'Vasopresor de primera línea en choque séptico (SSC 2026); también en choque cardiogénico e hipotensión refractaria de otras causas distributivas.',
      tx_farmacologico: '0.05-0.5 mcg/kg/min IV en infusión continua, titulada a PAM objetivo (habitualmente ≥65 mmHg); puede iniciarse por vía periférica de forma transitoria. Presentación habitual: ampolla 4 mg/4 mL; diluciones comunes: 4 mg en 100 mL (40 mcg/mL), 8 mg en 50 mL u 8 mg en 100 mL.',
      tx_intervencionista: 'No tiene antídoto específico; el efecto cede minutos tras suspender la infusión. La extravasación se trata con infiltración local de fentolamina (antagonista α).',
      criterios_uci: 'Isquemia periférica/digital por vasoconstricción excesiva, arritmias (menos frecuente que con dopamina), necrosis tisular por extravasación, hipertensión de rebote al suspender abruptamente.',
      criterios_tips: 'Preferir acceso venoso central para infusiones prolongadas; la vía periférica es aceptable de forma transitoria con monitorización estrecha del sitio de infusión (SSC 2026).',
      seguimiento_hospitalario: 'Vigilar isquemia de extremidades, arritmias, y signos de vasoconstricción excesiva (piel moteada, oliguria pese a PAM adecuada).',
      algoritmo: ['Vasopresor de primera línea en choque séptico (recomendación fuerte, SSC 2026)', 'Titular según PAM objetivo, no según dosis fija', 'Puede iniciarse por vía periférica sin retrasar su inicio esperando acceso central', 'Preferir sobre dopamina: menor arritmogenicidad']
    },
    {
      nombre: 'Adrenalina (Epinefrina)',
      color: '#8c3a34',
      definicion: 'Catecolamina endógena con actividad α1, β1 y β2 combinada. Fármaco de elección en el paro cardiaco y en la anafilaxia; vasopresor alternativo de primera línea en choque séptico con disfunción cardiaca.',
      fisiopatologia: 'A dosis bajas predomina el efecto β (inotropismo, cronotropismo, broncodilatación, vasodilatación en músculo esquelético); a dosis altas predomina el efecto α1 (vasoconstricción). Efecto combinado: aumenta gasto cardiaco, frecuencia cardiaca y PAM.',
      epidemiologia: 'Inicio de acción inmediato IV; vida media plasmática ~2 min; metabolizada por COMT y MAO.',
      factores_riesgo: ['Taquiarritmias no controladas', 'Cardiopatía isquémica no controlada (relativa)', 'Feocromocitoma'],
      clinica: 'Aumenta frecuencia cardiaca, gasto cardiaco y PAM; puede aumentar el consumo miocárdico de oxígeno y el lactato sérico por efecto β2 propio del fármaco (no siempre refleja hipoperfusión), lo que complica su interpretación como marcador de perfusión.',
      laboratorio: 'ECG continuo (riesgo arrítmico), presión arterial invasiva, lactato con cautela interpretativa.',
      complementarios: 'Potenciación con IMAO y antidepresivos tricíclicos; antagonismo con betabloqueadores (puede predominar efecto alfa sin oposición).',
      tx_medico: 'Fármaco de elección en paro cardiaco (todos los ritmos) y en anafilaxia. En choque séptico: alternativa de primera línea junto con noradrenalina cuando hay disfunción cardiaca concomitante (SSC 2026), o agregada si la PAM es inadecuada pese a noradrenalina + vasopresina.',
      tx_farmacologico: 'Choque/vasopresor: iniciar en dosis bajas y titular (rango habitual 0.01-0.5 mcg/kg/min). Paro cardiaco: 1 mg IV/IO cada 3-5 min. Anafilaxia: 0.3-0.5 mg IM (1 mg/mL) cada 5-15 min según respuesta. Presentación: ampolla 1 mg/1 mL (1:1000) para IM, diluida para uso IV.',
      tx_intervencionista: 'No tiene antídoto específico; el efecto cede minutos tras suspender la infusión.',
      criterios_uci: 'Taquiarritmias, isquemia miocárdica por aumento del consumo de oxígeno, hiperglucemia, aumento del lactato sérico (efecto farmacológico directo), isquemia periférica a dosis altas.',
      criterios_tips: 'Preferir noradrenalina en taquiarritmia o taquicardia sinusal significativa; preferir adrenalina en bradiarritmia (SSC 2026).',
      algoritmo: ['Fármaco de elección en paro cardiaco y anafilaxia', 'En choque séptico: alternativa de primera línea si hay disfunción cardiaca, junto con o en vez de noradrenalina', 'El aumento de lactato con adrenalina puede ser un efecto farmacológico directo, no solo hipoperfusión']
    },
    {
      nombre: 'Dopamina',
      color: '#966b35',
      definicion: 'Precursor de noradrenalina con efectos dosis-dependientes sobre receptores dopaminérgicos, β1 y α1. Uso actual limitado por su mayor arritmogenicidad frente a noradrenalina.',
      fisiopatologia: 'Dosis bajas (<3 mcg/kg/min): efecto dopaminérgico (vasodilatación renal/esplácnica, sin beneficio clínico demostrado — la "dosis renal" está abandonada). Dosis intermedias (3-10 mcg/kg/min): predomina β1 (inotropismo, cronotropismo). Dosis altas (>10 mcg/kg/min): predomina α1 (vasoconstricción).',
      epidemiologia: 'Inicio de acción rápido IV; vida media plasmática ~2 min.',
      factores_riesgo: ['Taquiarritmias (mayor riesgo que noradrenalina)', 'Feocromocitoma', 'Hipovolemia no corregida'],
      clinica: 'Efecto variable según dosis: vasodilatación renal a dosis bajas (sin beneficio clínico probado), inotropismo/cronotropismo a dosis intermedias, vasoconstricción a dosis altas. Mayor incidencia de taquiarritmias que noradrenalina.',
      laboratorio: 'ECG continuo (mayor riesgo arrítmico), presión arterial invasiva, diuresis horaria.',
      tx_medico: 'Alternativa cuando noradrenalina no está disponible; considerar en bradicardia relativa con bajo riesgo de taquiarritmia. Ya no es de primera línea en choque séptico (SSC 2026 recomienda noradrenalina sobre dopamina).',
      tx_farmacologico: '2-10 mcg/kg/min IV (efecto predominantemente adrenérgico/inotrópico); dosis >10-20 mcg/kg/min para efecto vasopresor más marcado, dosis máxima habitual 20 mcg/kg/min. Presentación: ampolla 200 mg/5 mL; dilución habitual 400 mg en 250 mL.',
      criterios_uci: 'Taquiarritmias (la más frecuente y limitante), isquemia miocárdica, náusea/vómito, necrosis por extravasación.',
      criterios_tips: 'La llamada "dosis renal" (1-3 mcg/kg/min) para proteger la función renal no tiene respaldo en la evidencia actual y no se recomienda con ese fin.',
      algoritmo: ['Recomendación fuerte de la SSC: noradrenalina sobre dopamina como vasopresor de primera línea (mayor arritmogenicidad de la dopamina)', 'La "dosis renal" está abandonada — no reduce lesión renal ni mortalidad', 'Considerar solo si no hay noradrenalina disponible, o en bradicardia relativa']
    },
    {
      nombre: 'Dobutamina',
      color: '#3d5a73',
      definicion: 'Catecolamina sintética, agonista β1 predominante con actividad β2 y α1 leve. Inotrópico de elección en choque cardiogénico y disfunción miocárdica asociada a sepsis.',
      fisiopatologia: 'Agonista β1 potente (aumenta contractilidad e inotropismo, con cronotropismo moderado); efecto vasodilatador leve por actividad β2 que puede contrarrestar parcialmente el efecto α1, resultando en efecto neto variable o levemente reductor sobre la PA.',
      epidemiologia: 'Inicio de acción 1-2 min IV; vida media plasmática ~2 min.',
      factores_riesgo: ['Estenosis subaórtica hipertrófica idiopática', 'Taquiarritmias no controladas', 'Hipovolemia no corregida (puede empeorar la hipotensión por su efecto vasodilatador)'],
      clinica: 'Aumenta el gasto cardiaco por inotropismo; puede reducir la PAM por vasodilatación periférica leve, por lo que frecuentemente se combina con un vasopresor si hay hipotensión concomitante.',
      laboratorio: 'ECG continuo, presión arterial (invasiva si se combina con vasopresor), gasto/índice cardiaco si hay monitorización hemodinámica avanzada.',
      tx_medico: 'Choque cardiogénico con hipoperfusión pese a precarga adecuada; disfunción miocárdica asociada a sepsis con hipoperfusión persistente pese a reanimación adecuada y PAM objetivo alcanzada.',
      tx_farmacologico: '2-20 mcg/kg/min IV (hasta 40 mcg/kg/min en casos extremos según algunos textos); titular según respuesta clínica/hemodinámica. Presentación: ampolla 250 mg/5 mL; dilución habitual 250 mg en 250 mL (1 mg/mL) o 500 mg en 250 mL.',
      criterios_uci: 'Taquiarritmias, hipotensión (por vasodilatación), isquemia miocárdica por aumento del consumo de oxígeno, taquifilaxia con uso prolongado (>72h).',
      criterios_tips: 'Se usa como inotrópico ADICIONAL a un vasopresor si persiste hipoperfusión con disfunción cardiaca pese a fluidos y PAM adecuada — no reemplaza al vasopresor si hay hipotensión (SSC 2026).',
      algoritmo: ['Inotrópico de elección para disfunción cardiaca con hipoperfusión persistente pese a fluidos y PAM adecuada', 'Se agrega a un vasopresor, no lo reemplaza, si coexiste hipotensión', 'Vigilar taquifilaxia con uso >72h']
    },
    {
      nombre: 'Vasopresina',
      color: '#3f6b52',
      definicion: 'Hormona antidiurética sintética; vasoconstrictor no catecolaminérgico usado como agente de segunda línea (ahorrador de catecolaminas) en choque séptico refractario.',
      fisiopatologia: 'Actúa sobre receptores V1 en músculo liso vascular (vasoconstricción, independiente de receptores adrenérgicos — útil cuando hay hiporrespuesta a catecolaminas por regulación a la baja de receptores adrenérgicos en choque prolongado) y V2 (efecto antidiurético renal).',
      epidemiologia: 'Vida media plasmática 10-35 min (más prolongada que las catecolaminas); inicio de acción en minutos.',
      factores_riesgo: ['Enfermedad vascular coronaria o periférica grave (riesgo de isquemia)', 'Insuficiencia cardiaca no compensada'],
      clinica: 'Vasoconstricción sistémica sin efecto inotrópico ni cronotrópico directo; puede reducir el gasto cardiaco por aumento de la poscarga; efecto antidiurético (retención de agua libre).',
      laboratorio: 'Perfusión periférica y digital (riesgo de isquemia), sodio sérico (efecto antidiurético), presión arterial invasiva.',
      tx_medico: 'Choque séptico con dosis crecientes de noradrenalina — se agrega como segundo vasopresor para reducir la dosis de catecolamina requerida (SSC 2026: iniciar típicamente con equivalente de noradrenalina ≈0.3 mcg/kg/min).',
      tx_farmacologico: '0.01-0.07 U/min IV, dosis FIJA — NO se ajusta por peso ni se titula al alza como las catecolaminas (dosis mayores no mejoran el efecto y aumentan el riesgo de isquemia). Presentación: ampolla 20 UI/mL; dilución habitual 100 U en 100 mL de solución salina (1 U/mL). Si se conoce el peso del paciente, puede calcularse el equivalente informativo en U/kg/min para documentación, aunque no guía el ajuste de dosis.',
      criterios_uci: 'Isquemia digital/periférica y mesentérica (la más temida), hiponatremia por retención de agua libre, disminución del gasto cardiaco.',
      criterios_tips: 'A diferencia de las catecolaminas, la dosis es fija y no se titula al alza; si el efecto es insuficiente se agrega otro agente (adrenalina) en vez de aumentar la dosis de vasopresina.',
      algoritmo: ['Se añade a noradrenalina en dosis crecientes, no se usa como monoterapia de primera línea', 'Dosis fija en U/min — NO se ajusta por peso ni se titula al alza como los demás vasopresores', 'Vigilar isquemia digital/mesentérica de forma estrecha']
    },
    {
      nombre: 'Midazolam',
      color: '#5c4a73',
      definicion: 'Benzodiacepina de acción corta-intermedia; sedante con propiedades ansiolíticas, amnésicas y anticonvulsivantes, sin efecto analgésico.',
      fisiopatologia: 'Agonista del receptor GABA-A, potencia la inhibición neuronal mediada por GABA aumentando la frecuencia de apertura del canal de cloro.',
      epidemiologia: 'Inicio de acción IV 2-5 min; vida media de eliminación 3-11 h en sujetos sanos, considerablemente prolongada en insuficiencia hepática/renal, obesidad y uso prolongado (acumulación del metabolito activo alfa-hidroxi-midazolam, sobre todo en falla renal).',
      factores_riesgo: ['Insuficiencia respiratoria no protegida sin soporte ventilatorio', 'Miastenia gravis', 'Glaucoma de ángulo cerrado no tratado', 'Hipersensibilidad a benzodiacepinas'],
      clinica: 'Sedación, ansiolisis, amnesia anterógrada; depresión respiratoria dosis-dependiente, hipotensión leve (más marcada si hipovolemia); sin efecto analgésico.',
      laboratorio: 'Escala de sedación (RASS) para titular; vigilancia respiratoria continua; función renal/hepática (afectan la duración del efecto).',
      complementarios: 'Potenciación con opioides, otros depresores del SNC y alcohol (riesgo de depresión respiratoria aditiva); metabolizado por CYP3A4 (interacciones con inhibidores/inductores potentes).',
      tx_medico: 'Sedación en ventilación mecánica (agente de segunda línea tras propofol/dexmedetomidina según PADIS 2018, salvo en abstinencia alcohólica/benzodiacepínica o estado epiléptico, donde es de elección); ansiolisis para procedimientos.',
      tx_farmacologico: 'Infusión continua 0.02-0.1 mg/kg/h IV, titulada según RASS objetivo; bolo inicial 0.01-0.05 mg/kg si se requiere sedación rápida. Presentación: ampolla 15 mg/3 mL o 50 mg/10 mL; dilución habitual 200 mg en 100 mL (2 mg/mL) o 150 mg en 150 mL (1 mg/mL).',
      tx_intervencionista: 'Flumazenilo (antagonista competitivo del receptor benzodiacepínico) revierte la sedación; usar con precaución por riesgo de convulsiones en uso crónico de benzodiacepinas o coingesta de proconvulsivantes.',
      criterios_uci: 'Depresión respiratoria, hipotensión, delirium (factor de riesgo independiente — PADIS 2018), tolerancia y síndrome de abstinencia con uso prolongado, acumulación en falla renal.',
      criterios_tips: 'PADIS 2018 recomienda sedación ligera con propofol o dexmedetomidina sobre benzodiacepinas cuando sea posible, por su asociación con mayor delirium y tiempo de VM prolongado.',
      algoritmo: ['Preferir propofol o dexmedetomidina sobre midazolam cuando sea posible (PADIS 2018)', 'De elección en estado epiléptico y en abstinencia alcohólica/benzodiacepínica', 'Vigilar acumulación en falla renal (metabolito activo)']
    },
    {
      nombre: 'Propofol',
      color: '#7a4363',
      definicion: 'Sedante-hipnótico de acción ultracorta, sin efecto analgésico ni amnésico consistente; agente de elección para sedación en ventilación mecánica junto con dexmedetomidina.',
      fisiopatologia: 'Potencia la actividad del receptor GABA-A y, en menor grado, inhibe receptores NMDA; produce hipnosis rápida y de rápida resolución al suspender la infusión.',
      epidemiologia: 'Inicio de acción IV 30-60 s; vida media de distribución muy corta; despertar rápido tras suspender la infusión incluso después de uso prolongado, lo que facilita las pruebas de despertar diario.',
      factores_riesgo: ['Alergia al huevo o soya (la emulsión lipídica contiene lecitina de huevo y aceite de soya)', 'Inestabilidad hemodinámica no corregida', 'Antecedente de síndrome de infusión de propofol'],
      clinica: 'Hipnosis rápida, hipotensión por vasodilatación y depresión miocárdica leve (más marcada en hipovolemia), depresión respiratoria dosis-dependiente, sin efecto analgésico.',
      laboratorio: 'Triglicéridos séricos cada 2-3 días con uso prolongado (aporta ~1.1 kcal/mL como lípido); creatina-cinasa y estado ácido-base si se sospecha síndrome de infusión de propofol; RASS.',
      complementarios: 'La emulsión lipídica es un medio de cultivo bacteriano — usar técnica estéril estricta y cambiar el equipo de infusión cada 12h.',
      tx_medico: 'Sedación en ventilación mecánica (de elección junto con dexmedetomidina, PADIS 2018); inducción y mantenimiento anestésico; sedación para procedimientos breves.',
      tx_farmacologico: 'Inducción: 1-3 mg/kg IV en bolo lento. Mantenimiento/sedación en UCI: infusión continua 5-85 mcg/kg/min (0.3-5 mg/kg/h), titulada según RASS; iniciar en el extremo bajo, sobre todo en inestabilidad hemodinámica. Presentación: 200 mg/20 mL (10 mg/mL); habitualmente se administra sin diluir.',
      criterios_uci: 'Hipotensión, depresión respiratoria, hipertrigliceridemia, pancreatitis (raro), y el síndrome de infusión de propofol (SIP): acidosis metabólica, rabdomiólisis, arritmias, insuficiencia cardiaca e hiperkalemia — infrecuente pero potencialmente letal, asociado a dosis altas (>4-5 mg/kg/h) y uso prolongado (>48h).',
      criterios_tips: 'Vigilar dosis acumulada y duración por riesgo de síndrome de infusión de propofol; suspender e investigar ante acidosis metabólica inexplicada, rabdomiólisis o arritmia de nueva aparición durante la infusión.',
      algoritmo: ['Agente de elección para sedación en VM junto con dexmedetomidina (PADIS 2018)', 'Despertar rápido al suspender — facilita pruebas de despertar diario y extubación', 'Vigilar síndrome de infusión de propofol en infusiones prolongadas o a dosis altas', 'Aporta calorías como lípido — considerar en el cálculo nutricional']
    },
    {
      nombre: 'Dexmedetomidina',
      color: '#3f6b52',
      definicion: 'Agonista α2-adrenérgico selectivo con efecto sedante, ansiolítico y analgésico leve, sin depresión respiratoria significativa; permite un paciente sedado pero despertable ("sedación cooperativa").',
      fisiopatologia: 'Agonista α2 presináptico en el locus coeruleus, reduce la liberación de noradrenalina, produciendo sedación similar al sueño fisiológico; también actúa a nivel espinal contribuyendo a un efecto analgésico leve.',
      epidemiologia: 'Inicio de acción 5-10 min IV; vida media de eliminación ~2-3 h; metabolismo hepático (ajustar en insuficiencia hepática).',
      factores_riesgo: ['Bloqueo cardiaco avanzado sin marcapasos', 'Hipotensión no controlada', 'Bradicardia significativa preexistente'],
      clinica: 'Sedación con paciente despertable, sin depresión respiratoria relevante a dosis habituales; bradicardia e hipotensión dosis-dependientes (efecto simpaticolítico); puede haber hipertensión transitoria con la dosis de carga por efecto α2B periférico.',
      laboratorio: 'Frecuencia cardiaca y presión arterial continuas; RASS.',
      tx_medico: 'Sedación ligera en ventilación mecánica (agente de elección junto con propofol, PADIS 2018), especialmente cuando se busca mantener al paciente despertable/cooperativo o facilitar el destete ventilatorio; también en delirium hiperactivo.',
      tx_farmacologico: 'Infusión continua 0.2-0.7 mcg/kg/h IV (algunos protocolos hasta 1.5 mcg/kg/h), sin bolo de carga de rutina en pacientes críticos (aumenta el riesgo de hipotensión/bradicardia). Presentación: 200 mcg/2 mL; dilución habitual 400 mcg en 100 mL (4 mcg/mL).',
      criterios_uci: 'Bradicardia, hipotensión (más frecuentes), hipertensión transitoria con la dosis de carga, sequedad de boca; no causa depresión respiratoria clínicamente significativa incluso en sobredosis.',
      criterios_tips: 'No requiere ajuste por función renal; ajustar en insuficiencia hepática. No causa depresión respiratoria — puede mantenerse en pacientes no intubados que requieren sedación ligera.',
      algoritmo: ['Agente de elección junto con propofol para sedación ligera en VM (PADIS 2018)', 'Único sedante mayor que no deprime el impulso respiratorio de forma clínicamente relevante', 'Vigilar bradicardia e hipotensión, sobre todo con bolo de carga (evitar en pacientes críticos inestables)']
    },
    {
      nombre: 'Ketamina',
      color: '#966b35',
      definicion: 'Anestésico disociativo, antagonista no competitivo del receptor NMDA; con propiedades analgésicas, sedantes y broncodilatadoras, preservando el impulso respiratorio y la estabilidad hemodinámica en la mayoría de los pacientes.',
      fisiopatologia: 'Antagonismo del receptor NMDA (bloquea la transmisión glutamatérgica), produciendo un estado disociativo (analgesia y amnesia con preservación relativa de reflejos protectores); también estimula la liberación de catecolaminas endógenas, lo que explica su relativa estabilidad hemodinámica.',
      epidemiologia: 'Inicio de acción IV 30-60 s; vida media de distribución rápida; metabolito activo (norketamina) con actividad analgésica residual.',
      factores_riesgo: ['Hipertensión no controlada o cardiopatía isquémica grave (efecto simpaticomimético, usar con precaución)', 'Psicosis activa (puede exacerbar síntomas)', 'Hipertensión intracraneal no controlada (controvertido; la evidencia reciente cuestiona el dogma clásico de contraindicación absoluta)'],
      clinica: 'Analgesia y sedación con preservación relativa de la vía aérea y del impulso respiratorio; efecto simpaticomimético (taquicardia, hipertensión leve) útil en inestabilidad hemodinámica o broncoespasmo; puede producir alucinaciones/reacciones de emergencia al despertar (mitigadas con benzodiacepinas concomitantes).',
      laboratorio: 'Frecuencia cardiaca y presión arterial (vigilar hipertensión); escala de sedación.',
      tx_medico: 'Inducción en secuencia rápida en inestabilidad hemodinámica o broncoespasmo activo; analgesia y sedación en procedimientos; adjunto analgésico ahorrador de opioides; sedación en asma/EPOC por su efecto broncodilatador.',
      tx_farmacologico: 'Inducción: 1-2 mg/kg IV en bolo (hasta 1-3 mg/kg según protocolo). Sedoanalgesia/infusión: 0.3-5 mg/kg/h (5-85 mcg/kg/min) IV, titulada según respuesta. Presentación: 200 mg/20 mL o 500 mg/10 mL según formulación; diluir según protocolo institucional.',
      criterios_uci: 'Hipertensión, taquicardia, hipersalivación, reacciones de emergencia/alucinaciones al despertar (más frecuentes en adultos, mitigadas con benzodiacepinas), nistagmo.',
      criterios_tips: 'Considerar coadministración de una benzodiacepina para reducir reacciones de emergencia; precaución (no contraindicación absoluta según evidencia reciente) en hipertensión intracraneal.',
      algoritmo: ['Preferida en inducción de pacientes hemodinámicamente inestables o con broncoespasmo activo', 'Preserva el impulso respiratorio — útil cuando se busca evitar apnea', 'Efecto ahorrador de opioides como adjunto analgésico', 'Vigilar reacciones de emergencia/alucinaciones al despertar']
    },
    {
      nombre: 'Fentanilo',
      color: '#8a5a1a',
      definicion: 'Opioide sintético agonista del receptor mu, ~100 veces más potente que la morfina; analgésico de elección en el paciente crítico por su rápido inicio de acción y perfil hemodinámico relativamente estable.',
      fisiopatologia: 'Agonista puro del receptor opioide mu, produce analgesia potente, sedación leve y depresión respiratoria dosis-dependiente; su alta liposolubilidad explica el inicio de acción rápido y, con infusiones prolongadas, la acumulación en tejido graso (efecto contextual prolongado).',
      epidemiologia: 'Inicio de acción IV 1-2 min; vida media corta con dosis única, pero se prolonga considerablemente (horas) con infusiones continuas prolongadas por acumulación en tejido graso; metabolismo hepático (CYP3A4).',
      factores_riesgo: ['Depresión respiratoria no protegida sin soporte ventilatorio disponible', 'Uso concomitante de IMAO (interacción grave)', 'Hipersensibilidad a opioides'],
      clinica: 'Analgesia potente con sedación leve; depresión respiratoria y de la tos; rigidez de la pared torácica con dosis altas administradas rápidamente (infrecuente); mínimo efecto directo sobre la presión arterial comparado con morfina (sin liberación significativa de histamina).',
      laboratorio: 'Escala de dolor validada (ej. CPOT en pacientes no comunicativos), escala de sedación, frecuencia respiratoria y saturación continuas.',
      complementarios: 'Potenciación aditiva con benzodiacepinas y otros depresores del SNC (riesgo de depresión respiratoria); contraindicado con IMAO (riesgo de síndrome serotoninérgico/crisis).',
      tx_medico: 'Analgesia de primera línea en el paciente crítico (estrategia "analgesia primero" — analgosedación, PADIS 2018); adjunto en intubación de secuencia rápida; analgesia para procedimientos.',
      tx_farmacologico: 'Bolo: 0.5-2 mcg/kg IV para analgesia/procedimientos. Infusión continua: 0.5-10 mcg/kg/h, titulada según escala de dolor. Presentación: ampolla 100 mcg/2 mL o 250 mcg/5 mL (concentraciones variables según presentación institucional); diluir según protocolo.',
      tx_intervencionista: 'Naloxona (antagonista opioide competitivo) revierte la depresión respiratoria y la sedación; su duración de acción es más corta que la del fentanilo, por lo que puede requerirse redosificación o infusión.',
      criterios_uci: 'Depresión respiratoria, hipotensión (menos marcada que con morfina), estreñimiento/íleo, tolerancia y síndrome de abstinencia con uso prolongado, rigidez torácica (dosis altas en bolo rápido).',
      criterios_tips: 'La estrategia "analgesia primero" (PADIS 2018) prioriza tratar el dolor antes de agregar sedantes, lo que puede reducir la necesidad de sedación adicional.',
      algoritmo: ['Analgésico opioide de elección en el paciente crítico por su perfil hemodinámico estable', 'Estrategia "analgesia primero" antes de escalar sedación (PADIS 2018)', 'Vigilar acumulación con infusiones prolongadas (efecto contextual prolongado)', 'Naloxona como antídoto si depresión respiratoria significativa']
    },
    {
      nombre: 'Vecuronio',
      color: '#5c4a73',
      definicion: 'Bloqueador neuromuscular no despolarizante de duración intermedia, aminoesteroide; usado en mantenimiento de parálisis en ventilación mecánica y como adjunto en intubación.',
      fisiopatologia: 'Antagonista competitivo del receptor nicotínico de acetilcolina en la placa motora, impidiendo la despolarización de la membrana muscular y produciendo parálisis flácida; no tiene efecto analgésico ni sedante — debe usarse siempre junto con sedoanalgesia adecuada.',
      epidemiologia: 'Inicio de acción 2-3 min IV; duración de acción 25-40 min con dosis única; metabolismo hepático con eliminación biliar y renal parcial — la duración se prolonga en insuficiencia hepática o renal.',
      factores_riesgo: ['Ausencia de sedoanalgesia adecuada concomitante (nunca paralizar a un paciente despierto)', 'Miastenia gravis y otras enfermedades neuromusculares (sensibilidad aumentada)', 'Uso prolongado en UCI: riesgo de miopatía/neuropatía del paciente crítico, mayor con uso concomitante de corticoides'],
      clinica: 'Parálisis flácida generalizada sin efecto sobre el nivel de conciencia ni el dolor — requiere sedación y analgesia adecuadas y monitorización objetiva de la profundidad del bloqueo (tren de cuatro).',
      laboratorio: 'Monitorización del bloqueo neuromuscular con estimulador de nervio periférico (tren de cuatro, TOF) para evitar sobredosificación; vigilar función hepática y renal.',
      tx_medico: 'Facilita la ventilación mecánica en SDRA grave con asincronía persistente pese a sedoanalgesia óptima; adjunto en intubación de secuencia rápida cuando la succinilcolina está contraindicada.',
      tx_farmacologico: 'Intubación: 0.08-0.1 mg/kg IV. Infusión de mantenimiento en UCI: 1-2 mcg/kg/min IV, titulada según tren de cuatro (objetivo habitual 1-2 respuestas de 4). Presentación: vial liofilizado, reconstituido típicamente a 4 mg/mL; dilución habitual 40 mg en 100 mL.',
      tx_intervencionista: 'Reversión con inhibidores de la acetilcolinesterasa (neostigmina + anticolinérgico) según profundidad del bloqueo; verificar disponibilidad y protocolo institucional para sugammadex en este fármaco.',
      criterios_uci: 'Debilidad muscular prolongada tras suspender el fármaco (sobre todo con uso >24-48h, disfunción renal/hepática, o corticoides concomitantes — miopatía/polineuropatía del paciente crítico), bloqueo residual si no se monitoriza adecuadamente.',
      criterios_tips: 'Requiere sedoanalgesia profunda y monitorización objetiva continua (profundidad de sedación y tren de cuatro); reevaluar diariamente la necesidad de continuar el bloqueo neuromuscular.',
      algoritmo: ['Nunca administrar sin sedoanalgesia adecuada y ya establecida', 'Monitorizar el bloqueo con tren de cuatro para evitar sobredosificación', 'Reevaluar diariamente la indicación — el uso prolongado aumenta el riesgo de miopatía/neuropatía del paciente crítico', 'Ajustar en falla hepática/renal por prolongación del efecto']
    },
    {
      nombre: 'Rocuronio',
      color: '#3d5a73',
      definicion: 'Bloqueador neuromuscular no despolarizante, aminoesteroide, de inicio de acción rápido; alternativa a la succinilcolina en intubación de secuencia rápida cuando esta está contraindicada.',
      fisiopatologia: 'Mismo mecanismo que vecuronio (antagonista competitivo del receptor nicotínico de acetilcolina); su inicio de acción más rápido a dosis altas lo hace apto para secuencia rápida.',
      epidemiologia: 'Inicio de acción 45-60 s a dosis de intubación (1.2 mg/kg); duración de acción prolongada a esa dosis (45-70 min, más larga que succinilcolina); metabolismo hepático principalmente, con eliminación biliar.',
      factores_riesgo: ['Ausencia de sedoanalgesia/inducción adecuada previa', 'Miastenia gravis y enfermedades neuromusculares', 'Vía aérea difícil anticipada sin plan de rescate (la parálisis prolongada limita recuperar la respiración espontánea rápidamente, a diferencia de succinilcolina)'],
      clinica: 'Parálisis flácida generalizada; sin efecto sedante ni analgésico — requiere inducción adecuada previa.',
      laboratorio: 'Monitorización del bloqueo neuromuscular con tren de cuatro si se usa en infusión prolongada.',
      tx_medico: 'Alternativa a la succinilcolina en intubación de secuencia rápida cuando esta está contraindicada (hiperkalemia, quemados >24-72h, lesión medular, enfermedad neuromuscular); mantenimiento de parálisis en UCI.',
      tx_farmacologico: 'Intubación de secuencia rápida: 1.2 mg/kg IV (inicio ultrarrápido, ~45-60 s). Dosis de intubación estándar (no urgente): 0.6-1.0 mg/kg. Infusión de mantenimiento en UCI: dosis similar a vecuronio, titulada según tren de cuatro. Presentación: vial líquido 50 mg/5 mL (10 mg/mL).',
      tx_intervencionista: 'Sugammadex (agente reversor específico que encapsula la molécula de rocuronio) permite reversión rápida y completa incluso de bloqueo profundo — ventaja importante sobre otros bloqueadores no despolarizantes, útil en el escenario de "no se puede intubar, no se puede ventilar".',
      criterios_uci: 'Parálisis prolongada si se usa a dosis altas repetidas, miopatía/neuropatía del paciente crítico con uso prolongado, anafilaxia (posible reacción cruzada con otros bloqueadores neuromusculares).',
      criterios_tips: 'A dosis de 1.2 mg/kg (secuencia rápida) el inicio de acción se aproxima al de la succinilcolina, con la ventaja de que el bloqueo es reversible con sugammadex si surge una vía aérea difícil inesperada.',
      algoritmo: ['Alternativa de elección a succinilcolina cuando esta está contraindicada', 'Dosis 1.2 mg/kg para inicio de acción ultrarrápido en secuencia rápida', 'Sugammadex permite reversión rápida — ventaja clave en vía aérea difícil inesperada', 'Duración de acción más prolongada que succinilcolina — considerar en la planeación de la vía aérea']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Principios generales aplicables a todo paciente bajo infusión de vasopresores, sedantes, analgésicos o bloqueadores neuromusculares.',
    parametros: [
      'Vasopresores/inotrópicos: presión arterial (idealmente invasiva), frecuencia cardiaca, perfusión periférica, lactato seriado, diuresis horaria.',
      'Sedación: escala RASS objetivo explícito y reevaluado por turno; interrupción diaria de sedación cuando sea seguro (PADIS 2018).',
      'Analgesia: escala de dolor validada (CPOT/EVA) evaluada antes de escalar sedación — "analgesia primero".',
      'Bloqueo neuromuscular: tren de cuatro (TOF) para evitar sobre/subdosificación; nunca sin sedoanalgesia profunda concomitante.',
      'Delirium: tamizaje sistemático con CAM-ICU; benzodiacepinas son un factor de riesgo independiente a minimizar cuando sea posible.'
    ],
    criterios_uci_general: 'Todo paciente con infusión de vasopresores, bloqueo neuromuscular continuo, o sedación profunda requiere monitorización de nivel UCI.',
    criterios_tips_general: 'Reevaluar diariamente la indicación de cada fármaco (sedación, analgesia, bloqueo) — evitar la infusión prolongada sin reevaluación activa.',
    criterios_trasplante_general: 'No aplica a esta sección.',
    prevencion: 'Protocolos de sedación ligera dirigida por objetivos, interrupción diaria de sedación, movilización precoz y tamizaje sistemático de delirium reducen el tiempo de ventilación mecánica y la estancia en UCI.'
  }
};

export const compCites = {
  'Norepinefrina (Noradrenalina)': { tx_medico: [2], criterios_tips: [2] },
  'Adrenalina (Epinefrina)': { tx_medico: [2], criterios_tips: [2] },
  'Dopamina': { tx_medico: [2, 3] },
  'Dobutamina': { criterios_tips: [2] },
  'Vasopresina': { tx_medico: [2] },
  'Midazolam': { tx_medico: [1], criterios_tips: [1] },
  'Propofol': { tx_medico: [1] },
  'Dexmedetomidina': { tx_medico: [1] },
  'Ketamina': { fisiopatologia: [6] },
  'Fentanilo': { tx_medico: [1], criterios_tips: [1] },
  'Vecuronio': { tx_medico: [4] },
  'Rocuronio': { tx_medico: [4] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const compGroups = [
  { title: 'Catecolaminas vasopresoras / inotrópicas', items: ['Norepinefrina (Noradrenalina)', 'Adrenalina (Epinefrina)', 'Dopamina', 'Dobutamina'] },
  { title: 'Vasopresor no catecolaminérgico', items: ['Vasopresina'] },
  { title: 'Sedantes', items: ['Midazolam', 'Propofol', 'Dexmedetomidina', 'Ketamina'] },
  { title: 'Analgesia', items: ['Fentanilo'] },
  { title: 'Bloqueadores neuromusculares', items: ['Vecuronio', 'Rocuronio'] }
];
export const categories = [
  { id: 'definicion', label: 'Principios generales' },
  { id: 'diagnostico', label: 'Vasopresores vs. sedantes' },
  { id: 'clasificacion', label: 'Comparativa rápida' },
  { id: 'complicaciones', label: 'Fármacos' },
  { id: 'seguimiento', label: 'Monitorización' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'FÁRMACOS DE UCI', color: '#3d5a73', target: 'definicion' },
  branches: [
    { title: 'Vasopresores, inotrópicos, sedantes y bloqueo', sub: '12 fármacos de cuidados críticos', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Catecolaminas', sub: 'Norepi, Adrenalina, Dopa, Dobuta', color: '#8c3a34', target: 'complicaciones' },
      { title: 'No catecolaminérgico', sub: 'Vasopresina', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sedantes', sub: 'Midazolam, Propofol, Dexmedetomidina, Ketamina', color: '#7a4363', target: 'complicaciones' },
      { title: 'Analgesia', sub: 'Fentanilo', color: '#8a5a1a', target: 'complicaciones' },
      { title: 'Bloqueo neuromuscular', sub: 'Vecuronio, Rocuronio', color: '#3d5a73', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = {};
export const clasificacionCite = [];
export const seguimientoCite = [1];

export const modalLabels = {
  itemName: 'Fármaco',
  definicion: 'Clase farmacológica y resumen',
  fisiopatologia: 'Mecanismo de acción',
  epidemiologia: 'Farmacocinética',
  factores_riesgo: 'Contraindicaciones',
  clinica: 'Efectos hemodinámicos y clínicos',
  laboratorio: 'Monitorización requerida',
  complementarios: 'Interacciones relevantes',
  tx_medico: 'Indicaciones principales',
  tx_farmacologico: 'Dosis y presentación',
  tx_intervencionista: 'Antídoto / reversión',
  criterios_uci: 'Efectos adversos',
  criterios_tips: 'Consideraciones especiales',
  seguimiento_hospitalario: 'Signos de alarma a vigilar',
  algoritmo: 'Puntos clave',
  monitorizacionTitulo: 'Principios generales de monitorización',
  prevencion: 'Buenas prácticas'
};
