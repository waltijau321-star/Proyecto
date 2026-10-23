// topics/sodio-potasio-acido-base/content.js
// Módulo 90 (bloque VI, Nefrología). Cubre los tres ítems del cluster "Equilibrio interno".
//
// Fuentes, todas leídas del PDF que está en Bibliografia/IV. Nefrología y Trastornos
// Hidroelectrolíticos/Equilibrio interno/:
//   - Hiponatremia: guía europea de 2014 (Spasovski et al.), que es la que fija el protocolo de
//     las primeras horas y los límites de corrección.
//   - Hiperpotasemia: guía de la UK Kidney Association de 2023, que es la que cambió dos cosas
//     que mucha gente sigue haciendo como antes (el calcio en 10 minutos y la retirada del
//     resonium del tratamiento agudo).
//   - Ácido-base: Berend, NEJM 2018, de donde salen las fórmulas de respuesta esperada y la
//     corrección del anion gap por albúmina.
//   - Magnesio: Touyz y Yao, NEJM 2024.
//
// Lo que este tema NO cubre, porque ya tiene dueño en la app:
//   - Calcio, fósforo y PTH: tema `metabolismo-oseo-mineral`. Aquí solo aparece el calcio como
//     acompañante de la hipomagnesemia.
//   - El anion gap y el déficit de agua aplicados a la cetoacidosis y al estado hiperosmolar:
//     tema `cetoacidosis-estado-hiperosmolar`, que los trata con sus umbrales propios.
//   - La hiperpotasemia del paciente con enfermedad renal crónica como obstáculo para el
//     tratamiento que frena la progresión: tema `enfermedad-renal-cronica`.

export const meta = {
  id: 'sodio-potasio-acido-base',
  titulo: 'Sodio, Potasio y Equilibrio Ácido-Base',
  subtitulo: 'Medicina Interna',
  accent: '#3a5f8c'
};

export const definicionText = `Tres ejes que comparten una misma lógica de trabajo: <strong>la cifra no es el diagnóstico</strong>. El sodio no mide sal sino agua, el potasio plasmático no mide el potasio del cuerpo y el pH no dice qué trastorno hay sino solo hacia dónde se ha desplazado.

Por eso los tres se abordan igual: primero se clasifica (con qué tonicidad, con qué volemia, con qué respuesta esperada) y solo después se trata. Saltarse ese paso es el origen de los dos errores que más daño hacen en esta área: <strong>corregir un sodio demasiado deprisa</strong> y <strong>tratar un potasio alto sin mirar el electrocardiograma</strong>.`;

export const bibliografia = [
  'Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Nephrol Dial Transplant. 2014;29(Suppl 2):i1-i39.',
  'Sterns RH. Disorders of plasma sodium: causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65.',
  'UK Kidney Association. Clinical practice guideline: treatment of acute hyperkalaemia in adults. Version 2. 2023.',
  'Berend K. Diagnostic use of base excess in acid-base disorders. N Engl J Med. 2018;378(15):1419-1428.',
  'Touyz RM, Yao G. Magnesium disorders. N Engl J Med. 2024;390(21):1998-2009.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024;105(4S):S117-S314.',
  'Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-S42.'
];

export const content = {
  id: 'sodio-potasio-acido-base',
  titulo: 'Sodio, Potasio y Equilibrio Ácido-Base',
  subtitulo: 'Medicina Interna',
  accent: '#3a5f8c',
  accentDim: '#3a5f8c22',

  diagnostico: {
    laboratorio: [
      { prueba: 'Sodio sérico con glucosa', utilidad: 'La hiperglucemia desplaza agua al plasma y baja el sodio sin que sobre agua corporal. La guía europea corrige <strong>sumando 2.4 mmol/L al sodio medido por cada 100 mg/dL de glucosa por encima de 100</strong>. El factor clásico de 1.6 infraestima la corrección.' },
      { prueba: 'Osmolalidad plasmática', utilidad: 'Separa la hiponatremia hipotónica (la que importa) de la isotónica y la hipertónica. Sin este paso se trata como exceso de agua lo que es un artefacto o una hiperglucemia.' },
      { prueba: 'Osmolalidad urinaria', utilidad: 'Primer paso del algoritmo diagnóstico (1D). Si es <strong>100 mOsm/kg o menos</strong>, la causa es un exceso relativo de ingesta de agua y no hace falta buscar más.' },
      { prueba: 'Sodio urinario', utilidad: 'Se interpreta cuando la osmolalidad urinaria supera 100. <strong>30 mmol/L o menos</strong> apunta a volumen arterial efectivo bajo (2D); por encima, hay que valorar el estado del líquido extracelular y el uso de diuréticos.' },
      { prueba: 'Potasio con magnesio', utilidad: 'La hipopotasemia refractaria suele responder solo después de reponer el magnesio. Pedir el potasio sin el magnesio es la causa más frecuente de reposición que no funciona.' },
      { prueba: 'Gasometría con electrolitos y albúmina', utilidad: 'El anion gap se calcula como sodio menos cloro menos bicarbonato, y <strong>se corrige sumando 2.5 mmol/L por cada g/dL de albúmina por debajo de lo normal</strong>. Sin esa corrección, el paciente crítico hipoalbuminémico aparenta un anion gap normal que no lo es.' },
      { prueba: 'Osmolalidad medida', utilidad: 'Cuando hay acidosis con anion gap elevado sin causa clara, la diferencia entre la osmolalidad medida y la calculada abre la puerta a los alcoholes tóxicos.' }
    ],
    no_invasivos: [
      { metodo: 'Electrocardiograma en la hiperpotasemia', interpretacion: 'No es un dato más: es el que decide si hay que dar calcio. Los cambios sugestivos obligan a proteger la membrana de inmediato, con independencia de la cifra. Su ausencia tampoco tranquiliza del todo, porque no todos los pacientes con potasio muy alto los presentan.', cutoff: 'Cualquier cambio sugestivo indica calcio intravenoso' },
      { metodo: 'Valoración del estado del líquido extracelular', interpretacion: 'Hipovolemia, euvolemia o hipervolemia cambian por completo el tratamiento de la hiponatremia, aunque la cifra de sodio sea la misma. Es una valoración clínica imperfecta y por eso se apoya en el sodio y la osmolalidad urinarios.', cutoff: 'Clínica, apoyada en los índices urinarios' },
      { metodo: 'Gravedad sintomática de la hiponatremia', interpretacion: 'Lo que decide la urgencia no es la cifra sino los síntomas. Vómitos, somnolencia profunda, convulsiones o coma son síntomas graves y obligan a tratar de inmediato sin esperar al diagnóstico etiológico.', cutoff: 'Síntomas graves: tratar ya; moderados: tratar pronto' },
      { metodo: 'Respuesta esperada en la gasometría', interpretacion: 'Cada trastorno primario tiene una respuesta secundaria previsible. Si la respuesta observada queda fuera del rango esperado, hay un segundo trastorno superpuesto, y esa es la forma de detectar los trastornos mixtos.', cutoff: 'PaCO2 esperada = 1.5 x HCO3 + 8, con margen de 2' }
    ],
    imagen: [
      { modalidad: 'Imagen cerebral', hallazgos: 'No forma parte del estudio de la hiponatremia, pero sí del diagnóstico diferencial de los síntomas neurológicos que se le atribuyen: si no mejoran tras elevar el sodio 5 mmol/L, la guía indica buscar otras causas de los síntomas.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Orientada a la causa del síndrome de secreción inadecuada de hormona antidiurética (neoplasia pulmonar, infección) y a la valoración de la volemia.' }
    ]
  },

  clasificacion: {
    compensada_descompensada: `Los tres ejes se clasifican antes de tratarse, y cada uno con su propia pregunta.

<strong>El sodio</strong> se clasifica por tres cosas a la vez: por la <strong>tonicidad</strong> (hipotónica, isotónica o hipertónica), por la <strong>gravedad de los síntomas</strong> (que es lo que decide la urgencia) y por el <strong>tiempo de instauración</strong> (aguda si lleva menos de 48 horas, crónica si más o si no se sabe). La duración importa porque el cerebro se adapta: en la crónica, corregir deprisa es más peligroso que la propia hiponatremia.

<strong>El potasio</strong> se clasifica por la cifra, pero el tratamiento lo decide el electrocardiograma.

<strong>El equilibrio ácido-base</strong> se lee siempre en el mismo orden: primero el pH, después el trastorno primario, después si la respuesta secundaria es la esperada, y por último el anion gap corregido con el cociente delta.`,
    escalas: [
      {
        nombre: 'Gravedad sintomática de la hiponatremia',
        componentes: 'Síntomas atribuibles a la hiponatremia, no la cifra de sodio.',
        formula: 'Graves: vómitos, somnolencia profunda, convulsiones, coma. Moderados: náuseas sin vómito, confusión, cefalea.',
        interpretacion: 'Los síntomas graves obligan a tratar de inmediato con salino hipertónico, antes de completar el estudio etiológico. Un sodio de 118 asintomático y uno de 125 con convulsiones no se manejan igual.'
      },
      {
        nombre: 'Algoritmo diagnóstico de la hiponatremia (calculadora disponible)',
        componentes: 'Osmolalidad plasmática, osmolalidad urinaria y sodio urinario.',
        formula: 'Osmolalidad urinaria de 100 mOsm/kg o menos: exceso de agua. Si es mayor, se mira el sodio urinario: 30 mmol/L o menos indica volumen arterial efectivo bajo.',
        interpretacion: 'Resuelve la causa en la mayoría de los casos con dos determinaciones de orina. La guía sugiere EN CONTRA de medir vasopresina para confirmar el síndrome de secreción inadecuada (2D).'
      },
      {
        nombre: 'Límites de corrección del sodio (calculadora disponible)',
        componentes: 'Sodio inicial, sodio actual y horas transcurridas.',
        formula: 'Máximo 10 mmol/L en las primeras 24 horas y 8 mmol/L en cada periodo de 24 horas siguiente, hasta alcanzar 130 mmol/L.',
        interpretacion: 'Superar el límite expone al síndrome de desmielinización osmótica, que es una complicación del tratamiento y no de la enfermedad. Es el único error de esta área que deja secuelas irreversibles.'
      },
      {
        nombre: 'Protocolo del salino hipertónico al 3%',
        componentes: 'Infusiones de 150 mL en 20 minutos, repetidas.',
        formula: '150 mL de salino al 3% en 20 minutos; recontrolar el sodio a los 20 minutos mientras se repite otra infusión igual; repetir hasta un ascenso de 5 mmol/L.',
        interpretacion: 'Alternativa por peso: 2 mL/kg en lugar de los 150 mL fijos cuando la composición corporal se desvía mucho de la media. La guía aconseja que la farmacia tenga bolsas de 150 mL ya preparadas, porque prepararlas a mano lleva tiempo y se cometen errores de cálculo.'
      },
      {
        nombre: 'Gravedad de la hiperpotasemia (calculadora disponible)',
        componentes: 'Potasio sérico y cambios electrocardiográficos.',
        formula: 'Leve 5.5 a 5.9 mmol/L; moderada 6.0 a 6.4; grave 6.5 o más.',
        interpretacion: 'La cifra decide el escalón de tratamiento y el destino asistencial; el electrocardiograma decide el calcio. Una hiperpotasemia grave detectada en la comunidad es criterio de valoración hospitalaria urgente.'
      },
      {
        nombre: 'Respuesta esperada en la gasometría (calculadora disponible)',
        componentes: 'pH, PaCO2, bicarbonato, sodio, cloro y albúmina.',
        formula: 'Acidosis metabólica: PaCO2 esperada = 1.5 x HCO3 + 8 (margen de 2). Alcalosis metabólica: PaCO2 esperada = 0.7 x (HCO3 - 24) + 40 (margen de 2). Respiratorios crónicos: el bicarbonato cambia 4 a 5 mmol/L por cada 10 mmHg de PaCO2.',
        interpretacion: 'Si la respuesta observada cae fuera del rango esperado, hay un segundo trastorno. Es la única forma de detectar un trastorno mixto, y se escapa si solo se mira el pH.'
      }
    ]
  },

  complicaciones: [
    {
      nombre: 'Hiponatremia: clasificar antes de tratar',
      color: '#3a5f8c',
      definicion: 'Sodio sérico menor de 135 mmol/L. Es el trastorno hidroelectrolítico más frecuente y casi siempre refleja un exceso relativo de agua, no un déficit de sal.',
      fisiopatologia: 'El sodio plasmático es un cociente entre sodio corporal y agua corporal: baja cuando sobra agua, aunque el sodio total sea normal o incluso alto. Por eso el paciente con insuficiencia cardiaca o cirrosis, que tiene sodio corporal aumentado, puede estar hiponatrémico. Entender esto evita el reflejo de "dar sal" cuando lo que hay que hacer es quitar agua.',
      epidemiologia: 'Es el trastorno electrolítico más común del paciente hospitalizado, y su presencia se asocia de forma independiente a peor pronóstico en prácticamente todas las patologías en que se ha estudiado.',
      factores_riesgo: ['Diuréticos tiazídicos', 'Insuficiencia cardiaca y cirrosis', 'Síndrome de secreción inadecuada de hormona antidiurética', 'Insuficiencia suprarrenal e hipotiroidismo', 'Antidepresivos inhibidores de la recaptación de serotonina', 'Antiepilépticos como carbamazepina', 'Edad avanzada', 'Polidipsia primaria', 'Náuseas y dolor, que estimulan la hormona antidiurética'],
      clinica: 'Depende más de la VELOCIDAD de instauración que de la cifra. Las formas crónicas pueden ser casi asintomáticas con cifras muy bajas, porque el cerebro se adapta expulsando osmoles. Las agudas dan cefalea, náuseas, confusión y, si progresan, convulsiones y coma por edema cerebral. En la crónica aparentemente asintomática hay alteraciones sutiles de la marcha y la atención que explican las caídas.',
      criterios_dx: 'Sodio menor de 135 mmol/L medido por electrodo selectivo. El estudio sigue tres pasos: confirmar que es hipotónica, medir la osmolalidad urinaria y, si supera 100 mOsm/kg, medir el sodio urinario.',
      laboratorio: 'Sodio, glucosa, osmolalidad plasmática, osmolalidad urinaria y sodio urinario en muestra simultánea. Función tiroidea y cortisol cuando el cuadro encaje con secreción inadecuada.',
      dx_diferencial: 'Pseudohiponatremia por hiperproteinemia o hipertrigliceridemia (isotónica) e hiponatremia por hiperglucemia o manitol (hipertónica). Las dos se descartan con la osmolalidad plasmática antes de dar un solo mililitro de tratamiento.',
      tx_medico: 'El tratamiento sale del cruce de dos cosas: la gravedad de los síntomas y la causa. Con síntomas graves se trata de inmediato con salino hipertónico; sin ellos, se trata la causa y se corrige despacio.',
      tx_farmacologico: 'En la hiponatremia por volumen arterial efectivo bajo, la expansión con salino isotónico corrige la causa. En el síndrome de secreción inadecuada, la restricción hídrica es la primera medida.',
      seguimiento_hospitalario: 'Control del sodio a las 6 y 12 horas, y después a diario hasta que se estabilice con tratamiento estable (2D).',
      pronostico: 'La hiponatremia crónica corregida despacio tiene buen pronóstico. La corregida deprisa puede dejar una desmielinización osmótica irreversible.',
      algoritmo: ['Confirmar que es hipotónica con la osmolalidad plasmática', 'Corregir el sodio por la glucosa si hay hiperglucemia', 'Medir la osmolalidad urinaria: 100 o menos es exceso de agua', 'Si supera 100, medir el sodio urinario: 30 o menos es volumen efectivo bajo', 'Clasificar la gravedad por los SÍNTOMAS y tratar según ella']
    },
    {
      nombre: 'Hiponatremia grave: el protocolo de las primeras horas',
      color: '#3a5f8c',
      definicion: 'Hiponatremia con síntomas graves atribuibles a ella: vómitos, somnolencia profunda, convulsiones o coma. Es una urgencia que se trata antes de terminar el estudio etiológico.',
      fisiopatologia: 'Los síntomas graves son la expresión del edema cerebral. Subir el sodio unos pocos milimoles basta para reducir ese edema, y por eso el objetivo inicial no es normalizar el sodio sino ganar un margen de seguridad de 5 mmol/L.',
      epidemiologia: 'La forma sintomática grave es minoritaria dentro del total de hiponatremias, pero es la que concentra la mortalidad inmediata.',
      factores_riesgo: ['Instauración en menos de 48 horas', 'Polidipsia asociada a ejercicio extremo', 'Posoperatorio con sueros hipotónicos', 'Consumo de éxtasis', 'Uso reciente de tiazidas'],
      clinica: 'Vómitos, somnolencia profunda, convulsiones y coma. La guía advierte de que no hay que esperar una recuperación completa inmediata: el cerebro tarda en recuperarse, y en el paciente intubado y sedado puede no ser posible valorar la mejoría.',
      criterios_dx: 'La presencia de síntomas graves, no una cifra concreta de sodio.',
      tx_medico: 'Infusión intravenosa rápida de <strong>150 mL de salino al 3%</strong> en 20 minutos (o 2 mL/kg si la composición corporal se desvía mucho). Recontrolar el sodio a los 20 minutos mientras se repite una segunda infusión igual. Repetir esas dos medidas hasta un ascenso de 5 mmol/L.',
      tx_farmacologico: 'Si los síntomas mejoran tras el ascenso de 5 mmol/L: se detiene el hipertónico, se deja la vía permeable con salino al 0.9% al mínimo y se inicia el tratamiento específico de la causa. Si NO mejoran: se continúa el hipertónico buscando 1 mmol/L por hora adicional, y se para cuando mejoren los síntomas, el ascenso total llegue a 10 mmol/L o el sodio alcance 130, lo que ocurra primero. En ese escenario hay que buscar además otras causas de los síntomas.',
      dx_diferencial: 'Si los síntomas no mejoran tras elevar el sodio 5 mmol/L, la guía indica explorar otras causas neurológicas: la hiponatremia puede ser un hallazgo acompañante y no el origen del cuadro.',
      seguimiento_hospitalario: 'Sodio cada 4 horas mientras se mantenga la infusión de hipertónico. Y respetar los límites de 24 horas aunque el paciente haya estado sintomático.',
      pronostico: 'El riesgo se desplaza de la enfermedad al tratamiento en cuanto pasan las primeras horas: a partir de ahí, lo que hay que vigilar es no pasarse.',
      algoritmo: ['150 mL de salino al 3% en 20 minutos, o 2 mL/kg', 'Recontrolar el sodio a los 20 minutos y repetir la infusión', 'Objetivo inicial: ascenso de 5 mmol/L, no la normalización', 'Si mejora: parar el hipertónico y tratar la causa', 'Si no mejora: seguir a 1 mmol/L por hora y buscar otras causas de los síntomas']
    },
    {
      nombre: 'Corrección excesiva y desmielinización osmótica',
      color: '#8c3a34',
      definicion: 'Complicación del tratamiento, no de la enfermedad: lesión desmielinizante del puente y de otras áreas tras un ascenso demasiado rápido del sodio en una hiponatremia crónica.',
      fisiopatologia: 'El cerebro adaptado a la hiponatremia ha expulsado osmoles para no hincharse. Si el sodio plasmático sube deprisa, las células no pueden recuperar esos osmoles al mismo ritmo y se deshidratan: esa es la lesión. Por eso el riesgo es propio de la hiponatremia CRÓNICA, donde la adaptación ya ocurrió, y no de la aguda.',
      epidemiologia: 'Es infrecuente pero devastadora, y casi siempre yatrogénica.',
      factores_riesgo: ['Hiponatremia crónica o de duración desconocida', 'Sodio muy bajo al inicio', 'Alcoholismo', 'Desnutrición', 'Hepatopatía avanzada', 'Hipopotasemia concomitante', 'Corrección simultánea de la causa, que acelera la subida por sí sola'],
      clinica: 'Aparece de forma diferida, dos a seis días después de la corrección, con disartria, disfagia, paraparesia o cuadriparesia, alteraciones de la conducta y, en los casos extremos, síndrome de cautiverio.',
      criterios_dx: 'Clínico, con apoyo de la resonancia magnética, que puede ser normal en los primeros días.',
      tx_medico: 'La prevención es el tratamiento: <strong>no superar 10 mmol/L en las primeras 24 horas ni 8 mmol/L en cada 24 horas siguientes</strong>, hasta llegar a 130 mmol/L.',
      tx_farmacologico: 'Hay un detalle que se escapa con facilidad: corregir una hipopotasemia concomitante SUBE el sodio por sí misma. Si no se cuenta en el balance, el límite se supera sin que nadie haya infundido sodio.',
      dx_diferencial: 'Otras causas de deterioro neurológico diferido en el paciente hospitalizado, incluidas las metabólicas y las vasculares.',
      seguimiento_hospitalario: 'Medir el sodio con la frecuencia que marque el ritmo de corrección, y no a demanda.',
      pronostico: 'Variable y con frecuencia con secuelas permanentes, lo que convierte esta complicación en la razón de ser de todos los límites de esta área.',
      algoritmo: ['Fijar el límite ANTES de empezar a corregir', 'Contar también lo que sube el sodio al corregir el potasio', 'Medir el sodio a las 6 y 12 horas, y luego a diario', 'Revisar el balance acumulado de 24 horas, no solo la última cifra', 'Ante un deterioro neurológico diferido, sospecharla aunque la resonancia sea normal']
    },
    {
      nombre: 'Hiperpotasemia: gravedad, electrocardiograma y las tres acciones',
      color: '#7a2f5c',
      definicion: 'Potasio sérico por encima de 5.5 mmol/L. Se clasifica en leve (5.5 a 5.9), moderada (6.0 a 6.4) y grave (6.5 o más).',
      fisiopatologia: 'El potasio extracelular determina el potencial de membrana en reposo. Al subir, lo despolariza e inactiva los canales de sodio: de ahí las alteraciones de la conducción y el riesgo de parada. El calcio no baja el potasio, sino que restaura el gradiente de activación y protege la membrana mientras las otras medidas hacen efecto.',
      epidemiologia: 'Frecuente en la enfermedad renal crónica, la diabetes y el paciente que toma bloqueo del sistema renina-angiotensina. La forma grave se asocia a más del 30% de mortalidad intrahospitalaria en las series citadas por la guía.',
      factores_riesgo: ['Enfermedad renal crónica', 'Bloqueo del sistema renina-angiotensina y antagonistas mineralocorticoides', 'Diabetes mellitus', 'Acidosis metabólica', 'Antiinflamatorios no esteroideos', 'Trimetoprim y heparina', 'Rabdomiólisis y lisis tumoral', 'Estreñimiento, que reduce la excreción intestinal'],
      clinica: 'Silente hasta que da alteraciones de la conducción. Cuando hay síntomas (debilidad, parestesias, palpitaciones) la situación ya es avanzada. Por eso el cribado es analítico y el electrocardiograma es obligatorio ante toda cifra elevada.',
      criterios_dx: 'Confirmar que no es una pseudohiperpotasemia por hemólisis de la muestra, torniquete prolongado o trombocitosis extrema, antes de tratar a un paciente asintomático con electrocardiograma normal.',
      laboratorio: 'Potasio, función renal, glucosa, bicarbonato y calcio. Vigilar la glucemia durante 6 horas tras el tratamiento con insulina.',
      tx_medico: 'Tres acciones con objetivos distintos, y en este orden: <strong>proteger</strong> la membrana (calcio, si hay cambios electrocardiográficos), <strong>desplazar</strong> el potasio al interior de la célula (insulina con glucosa, salbutamol) y <strong>eliminarlo</strong> del cuerpo (quelantes, diuréticos, diálisis). Las dos primeras son transitorias: si no se hace la tercera, el potasio vuelve.',
      tx_farmacologico: 'Calcio ante cambios electrocardiográficos: <strong>30 mL de gluconato cálcico al 10% en 10 minutos</strong>, o 10 mL de cloruro cálcico al 10% en el contexto de reanimación. Insulina-glucosa: <strong>10 unidades de insulina soluble con 25 g de glucosa</strong> intravenosa, con protocolo de dos fases para evitar la hipoglucemia. Salbutamol nebulizado 10 a 20 mg como adyuvante. Ciclosilicato de sodio y circonio 10 g tres veces al día hasta 72 horas en la grave, a considerar en la moderada; patirómero 8.4 g en la moderada o grave.',
      dx_diferencial: 'El <strong>resonium cálcico ya no se recomienda de rutina</strong> en el tratamiento agudo, y ese es uno de los cambios de la versión de 2023 que más tarda en llegar a la práctica.',
      seguimiento_hospitalario: 'Glucemia durante 6 horas tras la insulina, que es la complicación yatrogénica más frecuente de este tratamiento.',
      seguimiento_ambulatorio: 'Una hiperpotasemia grave detectada en la comunidad es criterio de valoración hospitalaria urgente. En la moderada, la guía recomienda valoración el mismo día.',
      pronostico: 'Bueno si se trata a tiempo y se corrige la causa; el riesgo real está en la hiperpotasemia tratada a medias, con las medidas que desplazan pero sin las que eliminan.',
      algoritmo: ['Confirmar que no es pseudohiperpotasemia', 'Electrocardiograma inmediato', 'Si hay cambios: gluconato cálcico 30 mL al 10% en 10 minutos', 'Insulina 10 unidades con 25 g de glucosa, y salbutamol como adyuvante', 'Añadir un quelante y tratar la causa: sin eso, el potasio vuelve']
    },
    {
      nombre: 'Hipopotasemia e hipomagnesemia, que van juntas',
      color: '#7a2f5c',
      definicion: 'Potasio por debajo de 3.5 mmol/L y magnesio por debajo de 1.7 mg/dL (0.7 mmol/L). Se tratan juntas porque la segunda hace fracasar el tratamiento de la primera.',
      fisiopatologia: 'El magnesio bloquea desde el interior los canales ROMK de la célula principal del túbulo colector. Cuando falta magnesio, ese bloqueo desaparece y el potasio se escapa por la orina por más que se reponga. Por eso la hipopotasemia refractaria responde solo tras reponer el magnesio: no es un dicho clínico, es un mecanismo concreto.',
      epidemiologia: 'La hipomagnesemia se asocia con frecuencia a otras alteraciones: hipocalcemia, hipopotasemia y alcalosis metabólica.',
      factores_riesgo: ['Diuréticos de asa y tiazidas', 'Pérdidas digestivas, sobre todo diarrea', 'Inhibidores de la bomba de protones, para el magnesio', 'Alcoholismo', 'Cetoacidosis en tratamiento con insulina', 'Nutrición parenteral y realimentación', 'Anfotericina y algunos antineoplásicos'],
      clinica: 'Debilidad muscular, calambres, íleo y, en las formas graves, rabdomiólisis y arritmias. En el electrocardiograma, aplanamiento de la onda T y aparición de onda U. La hipomagnesemia añade tetania, temblor y convulsiones.',
      criterios_dx: 'Medir siempre el magnesio ante una hipopotasemia que no responde a la reposición. El magnesio sérico normal del adulto es de 1.7 a 2.4 mg/dL.',
      laboratorio: 'Potasio, magnesio, calcio, bicarbonato y, si la causa no está clara, potasio en orina para separar las pérdidas renales de las digestivas.',
      tx_medico: 'Reponer el magnesio a la vez que el potasio, no después. Y buscar la causa: casi siempre está en la lista de fármacos.',
      tx_farmacologico: 'La reposición oral es preferible cuando se tolera. La intravenosa se reserva para la hipopotasemia grave o sintomática, con las precauciones de concentración y velocidad de la vía utilizada.',
      dx_diferencial: 'Hipopotasemia por desplazamiento al interior de la célula (insulina, agonistas beta, alcalosis, parálisis periódica), en la que el potasio corporal total es normal y la reposición agresiva puede producir hiperpotasemia de rebote.',
      seguimiento_hospitalario: 'Recontrolar potasio y magnesio juntos tras la reposición, y revisar los fármacos responsables antes del alta.',
      pronostico: 'Bueno, salvo por las arritmias de las formas graves y por el riesgo de perpetuarla si no se corrige la causa farmacológica.',
      algoritmo: ['Medir magnesio junto con el potasio, no después', 'Reponer los dos a la vez', 'Separar pérdidas renales de digestivas con el potasio urinario', 'Descartar que sea un desplazamiento al interior de la célula', 'Revisar la lista de fármacos antes de dar el alta']
    },
    {
      nombre: 'Lectura sistemática de la gasometría',
      color: '#2d6b5c',
      definicion: 'Secuencia fija de interpretación que permite nombrar el trastorno primario, comprobar si la respuesta secundaria es la esperada y detectar los trastornos mixtos.',
      fisiopatologia: 'Cada trastorno primario provoca una respuesta compensadora previsible del otro sistema: los metabólicos se compensan por vía respiratoria y los respiratorios por vía metabólica. La compensación respiratoria es rápida; la metabólica tarda días, y de ahí la distinción entre agudo y crónico en los trastornos respiratorios.',
      epidemiologia: 'Los trastornos mixtos son frecuentes en el paciente hospitalizado y son justamente los que se escapan si solo se mira el pH.',
      factores_riesgo: ['Paciente crítico con varias causas simultáneas', 'Enfermedad pulmonar crónica con descompensación aguda', 'Vómitos y diuréticos sobre una acidosis previa', 'Hipoalbuminemia, que enmascara el anion gap'],
      clinica: 'La gasometría se interpreta junto a la clínica: la misma cifra significa cosas distintas en un paciente con enfermedad pulmonar crónica compensada y en uno agudo.',
      criterios_dx: 'Orden de lectura: pH (acidemia por debajo de 7.38, alcalemia por encima de 7.42); trastorno primario (PaCO2 por encima de 42 orienta a respiratorio, exceso de base por debajo de -2 a metabólico); respuesta secundaria esperada; y anion gap con su corrección y su cociente delta.',
      laboratorio: 'Gasometría con sodio, cloro, bicarbonato y albúmina. Sin albúmina no se puede corregir el anion gap, y sin corregirlo el resultado engaña en el paciente crítico.',
      tx_medico: 'El tratamiento es el de la causa. La corrección del pH por sí misma rara vez es el objetivo.',
      dx_diferencial: 'Un trastorno mixto se diagnostica cuando la respuesta secundaria queda fuera del rango esperado: por ejemplo, en una acidosis respiratoria, una alcalosis metabólica añadida si el bicarbonato es mayor del previsto.',
      algoritmo: ['Mirar el pH: acidemia o alcalemia', 'Identificar el trastorno primario', 'Calcular la respuesta esperada y compararla con la observada', 'Calcular el anion gap y corregirlo por albúmina', 'Si el anion gap está elevado, aplicar el cociente delta']
    },
    {
      nombre: 'Acidosis metabólica: anion gap, albúmina y cociente delta',
      color: '#2d6b5c',
      definicion: 'Acidosis de origen metabólico, que se separa en dos grandes grupos según el anion gap esté elevado o normal, porque el diagnóstico diferencial de cada uno es distinto.',
      fisiopatologia: 'El anion gap mide los aniones no medidos. Sube cuando se añade un ácido cuyo anión no se mide en el ionograma habitual (lactato, cetoácidos, metabolitos de alcoholes tóxicos, aniones retenidos en la uremia). Se mantiene normal cuando lo que se pierde es bicarbonato y el cloro ocupa su lugar: por eso las de anion gap normal se llaman hiperclorémicas.',
      epidemiologia: 'La acidosis láctica y la cetoacidosis son las causas más frecuentes de anion gap elevado en el hospital; la diarrea y la acidosis tubular renal, las de anion gap normal.',
      factores_riesgo: ['Hipoperfusión y sepsis', 'Diabetes mal controlada', 'Enfermedad renal avanzada', 'Diarrea prolongada', 'Ingesta de alcoholes tóxicos', 'Hipoalbuminemia, que enmascara el anion gap elevado'],
      criterios_dx: 'Anion gap = sodio menos cloro menos bicarbonato. <strong>Se corrige sumando 2.5 mmol/L por cada g/dL de albúmina por debajo de lo normal.</strong>',
      laboratorio: 'Sodio, cloro, bicarbonato y albúmina siempre. Lactato, cetonas y osmolalidad medida según la sospecha.',
      complementarios: 'El hueco osmolal (osmolalidad medida menos calculada) abre la puerta a los alcoholes tóxicos cuando hay anion gap elevado sin causa que lo explique.',
      dx_diferencial: 'El <strong>cociente delta</strong> compara cuánto ha subido el anion gap con cuánto ha bajado el bicarbonato. Si el bicarbonato ha caído mucho más de lo que ha subido el anion gap, hay además una acidosis de anion gap normal; si ha caído mucho menos, hay una alcalosis metabólica superpuesta.',
      tx_medico: 'Tratar la causa. El bicarbonato no es un tratamiento general de la acidosis metabólica y sus indicaciones son concretas.',
      algoritmo: ['Calcular el anion gap', 'Corregirlo por albúmina: 2.5 por cada g/dL que falte', 'Si está elevado, buscar lactato, cetonas y alcoholes tóxicos', 'Si es normal, orientar a pérdidas digestivas o tubulares', 'Aplicar el cociente delta para descubrir el trastorno acompañante']
    }
  ],

  seguimiento_intrahospitalario: `Tres hábitos de planta que previenen la mayoría de los problemas de esta área.

<strong>Escribir el límite antes de empezar.</strong> En toda hiponatremia que se va a corregir, el límite de 24 horas se anota en la indicación junto con la hora de inicio y el sodio de partida. El error de corrección excesiva casi nunca lo comete quien calculó el límite: lo comete el turno siguiente, que no sabía de dónde venía el paciente.

<strong>Pedir el magnesio con el potasio.</strong> Cuesta lo mismo y evita la reposición que no funciona.

<strong>Mirar el electrocardiograma antes que la cifra.</strong> En la hiperpotasemia, la decisión de dar calcio no espera a la confirmación analítica ni al nefrólogo.

Y una advertencia sobre el alta: las medidas que desplazan el potasio al interior de la célula son transitorias. Un paciente dado de alta de urgencias tras insulina y salbutamol, sin quelante ni corrección de la causa, vuelve con la misma cifra en unas horas.`
};

export const compCites = {
  'Hiponatremia: clasificar antes de tratar': [1, 2, 7],
  'Hiponatremia grave: el protocolo de las primeras horas': [1],
  'Corrección excesiva y desmielinización osmótica': [1, 2],
  'Hiperpotasemia: gravedad, electrocardiograma y las tres acciones': [3],
  'Hipopotasemia e hipomagnesemia, que van juntas': [5],
  'Lectura sistemática de la gasometría': [4],
  'Acidosis metabólica: anion gap, albúmina y cociente delta': [4]
};

export const estigmasTitulo = 'Datos que cambian la conducta';
export const estigmas = [
  { s: 'Síntomas graves con sodio de 125', p: 'Trata ya', photo: null, desc: 'La urgencia la marcan los síntomas, no la cifra. Un sodio de 118 asintomático se corrige despacio; uno de 125 con convulsiones se trata con hipertónico de inmediato.' },
  { s: 'Hiperglucemia con sodio bajo', p: 'Corregir primero', photo: null, desc: 'Hay que sumar 2.4 mmol/L al sodio medido por cada 100 mg/dL de glucosa por encima de 100. El factor clásico de 1.6 se queda corto.' },
  { s: 'Osmolalidad urinaria de 100 o menos', p: 'Exceso de agua', photo: null, desc: 'Con ese dato el algoritmo termina: la causa es un exceso relativo de ingesta de agua y no hace falta seguir buscando.' },
  { s: 'Corregir la hipopotasemia', p: 'Sube el sodio solo', photo: null, desc: 'Reponer potasio eleva el sodio plasmático por sí mismo. Si no se cuenta en el balance, el límite de 24 horas se supera sin haber infundido sodio.' },
  { s: 'Potasio alto con electrocardiograma normal', p: 'Sigue siendo urgente', photo: null, desc: 'La ausencia de cambios no descarta el riesgo: no todos los pacientes con potasio muy alto los presentan. La cifra marca el escalón de tratamiento igual.' },
  { s: 'Resonium en la hiperpotasemia aguda', p: 'Ya no de rutina', photo: null, desc: 'La guía de 2023 lo retiró del protocolo de tratamiento agudo. Los quelantes actuales son el ciclosilicato de sodio y circonio y el patirómero.' },
  { s: 'Insulina para bajar el potasio', p: 'Vigilar 6 horas', photo: null, desc: 'La hipoglucemia es la complicación yatrogénica más frecuente de este tratamiento. La guía de 2023 fija 6 horas de vigilancia de la glucemia.' },
  { s: 'Hipopotasemia que no responde', p: 'Pedir magnesio', photo: null, desc: 'Sin magnesio, el potasio se pierde por la orina por más que se reponga: el bloqueo de los canales ROMK depende de él.' },
  { s: 'Anion gap normal con albúmina baja', p: 'Corregirlo', photo: null, desc: 'Hay que sumar 2.5 mmol/L al anion gap por cada g/dL de albúmina que falte. Sin esa corrección, el paciente crítico aparenta un anion gap normal que no lo es.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Gravedad sintomática de la hiponatremia': [1],
  'Algoritmo diagnóstico de la hiponatremia (calculadora disponible)': [1],
  'Límites de corrección del sodio (calculadora disponible)': [1, 2],
  'Protocolo del salino hipertónico al 3%': [1],
  'Gravedad de la hiperpotasemia (calculadora disponible)': [3],
  'Respuesta esperada en la gasometría (calculadora disponible)': [4]
};

export const escalaCalc = {
  'Algoritmo diagnóstico de la hiponatremia (calculadora disponible)': 'hiponatremia',
  'Límites de corrección del sodio (calculadora disponible)': 'correccion-sodio',
  'Gravedad de la hiperpotasemia (calculadora disponible)': 'hiperpotasemia',
  'Respuesta esperada en la gasometría (calculadora disponible)': 'acido-base'
};

export const compGroups = [
  { name: 'Sodio y agua', items: ['Hiponatremia: clasificar antes de tratar', 'Hiponatremia grave: el protocolo de las primeras horas', 'Corrección excesiva y desmielinización osmótica'] },
  { name: 'Potasio y magnesio', items: ['Hiperpotasemia: gravedad, electrocardiograma y las tres acciones', 'Hipopotasemia e hipomagnesemia, que van juntas'] },
  { name: 'Equilibrio ácido-base', items: ['Lectura sistemática de la gasometría', 'Acidosis metabólica: anion gap, albúmina y cociente delta'] }
];

export const complicacionesIntro = 'Siete fichas en tres bloques. Las tres primeras siguen el recorrido completo de una hiponatremia, desde clasificarla hasta el riesgo de corregirla de más, que es el único error de esta área que deja secuelas irreversibles.';

export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];

export const arbol = {
  root: { title: 'LA CIFRA NO ES EL DIAGNÓSTICO', color: '#3a5f8c', target: 'definicion' },
  branches: [
    {
      title: 'SODIO', sub: 'Mide agua, no sal', color: '#3a5f8c', target: 'complicaciones', leaves: [
        { title: '¿Síntomas graves?', sub: 'Eso marca la urgencia', color: '#3a5f8c', target: 'clasificacion' },
        { title: 'Osmolalidad urinaria', sub: '100 o menos: sobra agua', color: '#3a5f8c', target: 'diagnostico' },
        { title: 'Límite de 24 horas', sub: '10 mmol/L, y luego 8', color: '#8c3a34', target: 'complicaciones' }
      ]
    },
    {
      title: 'POTASIO', sub: 'El ECG decide', color: '#7a2f5c', target: 'complicaciones', leaves: [
        { title: 'Proteger', sub: 'Calcio si hay cambios', color: '#7a2f5c', target: 'complicaciones' },
        { title: 'Desplazar', sub: 'Insulina y salbutamol', color: '#7a2f5c', target: 'complicaciones' },
        { title: 'Eliminar', sub: 'Sin esto, vuelve', color: '#7a2f5c', target: 'complicaciones' }
      ]
    },
    {
      title: 'ÁCIDO-BASE', sub: 'Siempre en el mismo orden', color: '#2d6b5c', target: 'clasificacion', leaves: [
        { title: 'Respuesta esperada', sub: 'Fuera de rango: mixto', color: '#2d6b5c', target: 'clasificacion' },
        { title: 'Anion gap corregido', sub: '2.5 por g/dL de albúmina', color: '#2d6b5c', target: 'complicaciones' },
        { title: 'Cociente delta', sub: 'Descubre el acompañante', color: '#2d6b5c', target: 'complicaciones' }
      ]
    }
  ]
};

export const diagCites = { laboratorio: [1, 4, 5], no_invasivos: [1, 3, 4], imagen: [1] };
export const clasificacionCite = [1, 3, 4];
export const seguimientoCite = [1, 3];
