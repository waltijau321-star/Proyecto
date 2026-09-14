// topics/farmacodermias/content.js - Modulo 77: Farmacodermias y eritrodermia.
// Basado en las guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy
// Organ J 2025;18(4):101046), en Hoetzenecker W, et al. Semin Immunopathol 2016 y en Tso S,
// et al. Clin Exp Dermatol 2021;46(6):1001, los tres ya en Bibliografia/.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'farmacodermias',
  titulo: 'Farmacodermias y eritrodermia',
  subtitulo: 'Modulo 77 &middot; Dermatologia',
  accent: '#7a3a6b',
  accentDim: '#94568a'
};

export const definicionText = `<p style="margin:0 0 14px;">La mayoria de las reacciones cutaneas a farmacos son <strong>benignas y autolimitadas</strong>: un exantema maculopapular que aparece a la semana o dos de empezar el farmaco, pica, y se resuelve al retirarlo. Pero alrededor del <strong>2%</strong> de las erupciones cutaneas por farmacos son graves y pueden matar. El trabajo del internista no es memorizar listas de farmacos: es <strong>separar esas dos categorias delante del paciente</strong>, y hacerlo pronto.</p>
<p style="margin:0 0 14px;">Las cuatro graves tienen nombre propio y se distinguen entre si por tres cosas: la <strong>latencia</strong> desde que empezo el farmaco, la <strong>morfologia</strong> de la lesion y el <strong>organo</strong> que se afecta ademas de la piel. El sindrome de Stevens-Johnson y la necrolisis epidermica toxica son un mismo espectro que se separa por la superficie despegada. El DRESS tiene la latencia mas larga de todas y afecta a higado, ri&#241;on y corazon. La pustulosis exantematica generalizada aguda tiene la latencia mas corta y se confunde con una psoriasis pustulosa. Y la <strong>eritrodermia</strong> no es una enfermedad sino un estado en el que la piel deja de funcionar como organo.</p>
<p style="margin:0 0 14px;">Hay una regla practica que resume casi todo: ante un exantema por farmaco, buscar <strong>fiebre, afectacion de mucosas, dolor cutaneo, edema facial, ampollas y alteracion analitica</strong>. Si no hay nada de eso, casi siempre es benigno. Si hay algo, hay que parar y pensar, porque esas seis cosas son la frontera entre retirar un farmaco en consulta y un ingreso en una unidad de quemados.</p>`;

export const bibliografia = [
  'Murillo-Casas AD, Zwiener R, Giavina-Bianchi P, et al. Latin American guidelines for the diagnosis and treatment of Stevens-Johnson syndrome and toxic epidermal necrolysis. World Allergy Organ J. 2025;18(4):101046. doi:10.1016/j.waojou.2025.101046.',
  'Hoetzenecker W, N&#228;geli M, Mehra ET, et al. Adverse cutaneous drug eruptions: current understanding. Semin Immunopathol. 2016. doi:10.1007/s00281-015-0540-2.',
  'Tso S, Satchwell F, Moiz H, et al. Erythroderma (exfoliative dermatitis). Part 1: underlying causes, clinical presentation and pathogenesis. Clin Exp Dermatol. 2021;46(6):1001-1010.',
  'Zuberbier T, Abdul Latiff AH, Bernstein JA, et al. The International Guideline for the Definition, Classification, Diagnosis and Management of Urticaria. Allergy. 2026;81(8):2582-2632. doi:10.1111/all.70210.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El exantema benigno',
      tituloB: 'Las seis banderas de gravedad',
      compensada: 'Exantema MACULOPAPULAR simetrico que empieza en tronco y raiz de miembros y se extiende, con maculas y papulas eritematosas que confluyen. Aparece entre 4 y 14 dias despues de iniciar el farmaco, o antes si ya hubo exposicion previa. PICA. No hay fiebre alta, ni afectacion de mucosas, ni dolor de la piel, ni ampollas, y la analitica es normal. Se resuelve en una o dos semanas tras retirar el farmaco, a menudo con descamacion. Este cuadro representa la gran mayoria de las reacciones cutaneas a farmacos.',
      descompensada: 'Las seis banderas que obligan a parar: FIEBRE alta; afectacion de MUCOSAS (boca, ojos, genitales); DOLOR de la piel, que precede al despegamiento; EDEMA FACIAL, muy caracteristico del DRESS; AMPOLLAS o signo de Nikolsky, que indican despegamiento; y ALTERACION ANALITICA (eosinofilia, linfocitos atipicos, transaminasas altas, creatinina alta). A ellas se suman dos datos de alarma: la extension rapida y progresiva pese a haber retirado el farmaco, y las lesiones EN DIANA ATIPICAS con centro oscuro, que son el preludio del despegamiento epidermico.'
    },
    laboratorio: [
      { prueba: 'Hemograma con formula', utilidad: 'Busca EOSINOFILIA y linfocitos atipicos, que son los dos marcadores del DRESS y que separan un exantema banal de uno que va a dar la cara en otros organos. Tambien detecta la leucocitosis con neutrofilia propia de la pustulosis exantematica aguda.' },
      { prueba: 'Funcion hepatica', utilidad: 'Es el organo mas afectado en el DRESS y el que marca su pronostico. Hay que pedirla ante cualquier exantema con fiebre o eosinofilia, y repetirla, porque la afectacion puede aparecer o empeorar DESPUES de retirar el farmaco.' },
      { prueba: 'Funcion renal, ionograma y bicarbonato', utilidad: 'La urea y el bicarbonato forman parte del SCORTEN, que es la escala pronostica de la necrolisis epidermica toxica. Ademas el DRESS produce nefritis intersticial.' },
      { prueba: 'Glucemia', utilidad: 'Tambien entra en el SCORTEN. Y es relevante porque muchos de estos pacientes reciben corticoides.' },
      { prueba: 'Reactantes de fase aguda y hemocultivos', utilidad: 'En la necrolisis epidermica toxica la causa principal de muerte es la SEPSIS. Los signos habituales de infeccion son poco fiables en una piel denudada, de modo que hay que buscarla de forma activa y repetida.' },
      { prueba: 'Serologias virales', utilidad: 'En el DRESS se estudia la reactivacion de virus del grupo herpes, en particular el herpesvirus humano 6, que se asocia a los brotes tardios y a la recaida al bajar el corticoide.' },
      { prueba: 'Biopsia cutanea', utilidad: 'Confirma el diagnostico en las formas graves: necrosis de todo el espesor epidermico con despegamiento en la necrolisis epidermica toxica, pustulas subcorneas en la pustulosis exantematica aguda, y en la eritrodermia ayuda a buscar la causa de base.' },
      { prueba: 'Cultivo del contenido de las pustulas', utilidad: 'En la pustulosis exantematica generalizada aguda las pustulas son ESTERILES. El cultivo negativo apoya el diagnostico y separa de una infeccion.' }
    ],
    no_invasivos: [
      { metodo: 'SCORTEN (calculadora disponible)', interpretacion: 'Siete variables al ingreso que estiman la mortalidad de la necrolisis epidermica toxica. Incluye la superficie despegada, que ademas clasifica el cuadro.', cutoff: 'Cada punto sube la mortalidad de forma marcada' },
      { metodo: 'Banderas de gravedad (calculadora disponible)', interpretacion: 'Comprueba de forma ordenada las seis banderas y orienta hacia cual de las farmacodermias graves encaja mejor.', cutoff: 'Una sola bandera ya cambia el nivel de cuidados' },
      { metodo: 'Cronologia del farmaco (calculadora disponible)', interpretacion: 'Cruza el tipo de reaccion con el tiempo transcurrido desde que se inicio cada farmaco, que es el dato mas util para se&#241;alar al culpable.', cutoff: 'Cada reaccion tiene su ventana de latencia' },
      { metodo: 'Soporte en la eritrodermia (calculadora disponible)', interpretacion: 'Estima las necesidades de reposicion y recuerda lo que hay que corregir cuando la piel deja de funcionar como barrera.', cutoff: 'Temperatura, volumen, albumina y busqueda de infeccion' },
      { metodo: 'Algoritmo ALDEN', interpretacion: 'Herramienta especifica para atribuir la causalidad de una necrolisis epidermica a un farmaco concreto: valora latencia, presencia del farmaco el dia del inicio, exposicion previa, notoriedad del farmaco y causas alternativas.', cutoff: 'La guia latinoamericana lo sugiere ante duda sobre el culpable' },
      { metodo: 'Superficie corporal despegada', interpretacion: 'Se calcula con la regla de los nueves de Wallace o, mejor, con el metodo de Lund-Browder, que es mas preciso. Solo cuenta la piel DESPEGADA o despegable, no el eritema.', cutoff: 'Menos del 10%, del 10 al 30%, o mas del 30%' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'La afectacion pulmonar es una de las causas de muerte en la necrolisis epidermica toxica, y el epitelio bronquial puede descamarse igual que la piel. Tambien busca infeccion.' },
      { modalidad: 'Ecografia abdominal', hallazgos: 'En el DRESS con afectacion hepatica, para valorar el higado y descartar otras causas.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'En el DRESS ante sospecha de miocarditis, que es una complicacion tardia, grave y que se pasa por alto con facilidad.' },
      { modalidad: 'Tomografia', hallazgos: 'En la eritrodermia de causa no aclarada, dentro del estudio de un posible linfoma cutaneo o de una neoplasia subyacente.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Primero, <strong>benigna o grave</strong>: las seis banderas resuelven esa pregunta a pie de cama. Despues, dentro de las graves, la <strong>latencia</strong> y la <strong>morfologia</strong> separan las cuatro entidades: pustulosis exantematica generalizada aguda (latencia muy corta, pustulas esteriles), sindrome de Stevens-Johnson y necrolisis epidermica toxica (una a tres semanas, ampollas y despegamiento con mucosas), y DRESS (la latencia mas larga, de dos a ocho semanas, con edema facial, eosinofilia y organos internos). Y el espectro de Stevens-Johnson y necrolisis se gradua por la <strong>superficie despegada</strong>: menos del 10%, del 10 al 30%, o el 30% o mas.`,
    escalas: [
      { nombre: 'Superficie despegada (calculadora disponible)', componentes: 'Porcentaje de superficie corporal con epidermis despegada o despegable, medido por la regla de los nueves de Wallace o por el metodo de Lund-Browder.', formula: 'Porcentaje de superficie corporal total.', interpretacion: 'Sindrome de Stevens-Johnson por debajo del 10%; sindrome de solapamiento entre el 10 y menos del 30%; necrolisis epidermica toxica en el 30% o mas. El error habitual es contar el ERITEMA: solo cuenta la piel despegada o que se despega al rozarla.' },
      { nombre: 'SCORTEN (calculadora disponible)', componentes: 'Edad de 40 a&#241;os o mas, neoplasia, frecuencia cardiaca de 120 o mas, superficie despegada mayor del 10%, urea elevada, bicarbonato bajo y glucemia elevada.', formula: 'Un punto por variable, de 0 a 7, medido en las primeras 24 horas.', interpretacion: 'Estima la mortalidad y sube de forma marcada con cada punto. Se calcula al ingreso y conviene repetirlo al tercer dia, porque mejora su capacidad predictiva. No decide el tratamiento, pero si el nivel de cuidados.' },
      { nombre: 'Banderas de gravedad (calculadora disponible)', componentes: 'Fiebre, afectacion de mucosas, dolor cutaneo, edema facial, ampollas o signo de Nikolsky, y alteracion analitica.', formula: 'Presencia o ausencia de cada una.', interpretacion: 'Es la herramienta mas util del tema y no necesita nada mas que la exploracion. Ninguna bandera hace muy probable un exantema benigno; una sola bandera obliga a replantear el nivel de cuidados.' },
      { nombre: 'Cronologia del farmaco (calculadora disponible)', componentes: 'Tipo de reaccion y dias transcurridos desde el inicio de cada farmaco sospechoso.', formula: 'Comparacion con la ventana de latencia propia de cada reaccion.', interpretacion: 'Es el dato que mas rinde para se&#241;alar al culpable: la pustulosis aparece en uno o dos dias, el exantema maculopapular entre 4 y 14, el Stevens-Johnson entre una y tres semanas, y el DRESS entre dos y ocho semanas. Un farmaco que empezo ayer casi nunca explica un DRESS.' },
      { nombre: 'Criterios de DRESS', componentes: 'Exantema, fiebre, adenopatias, eosinofilia o linfocitos atipicos, afectacion de al menos un organo interno y curso prolongado.', formula: 'Sistemas de puntuacion que graduan el caso en posible, probable o definitivo.', interpretacion: 'Su utilidad practica es recordar que el DRESS es un diagnostico SISTEMICO y no cutaneo: sin analitica no se puede diagnosticar ni excluir, y el organo que mas veces marca el pronostico es el higado.' },
      { nombre: 'Algoritmo ALDEN', componentes: 'Latencia, presencia del farmaco el dia del inicio, exposicion previa, notoriedad del farmaco como causa de necrolisis y presencia de causas alternativas.', formula: 'Puntuacion por farmaco.', interpretacion: 'La guia latinoamericana lo sugiere cuando hay dudas sobre cual de varios farmacos es el responsable, que es la situacion habitual en un paciente polimedicado. Identificar al culpable no es academico: de ello depende que el paciente pueda recibir tratamientos seguros en el futuro.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Exantema maculopapular: lo frecuente y benigno',
      color: '#3f6b52',
      definicion: 'Erupcion maculopapular simetrica y pruriginosa que aparece dias despues de iniciar un farmaco y se resuelve al retirarlo, sin afectacion de mucosas ni de organos internos.',
      fisiopatologia: 'Es una hipersensibilidad retardada mediada por linfocitos T que reconocen el farmaco o sus metabolitos unidos a moleculas del complejo mayor de histocompatibilidad. La activacion de esos linfocitos en la piel produce el infiltrado y el exantema, pero sin la citotoxicidad masiva sobre el queratinocito que caracteriza a la necrolisis epidermica.',
      epidemiologia: 'Es la forma mas frecuente de reaccion cutanea a farmacos con diferencia. Los antibioticos, sobre todo betalactamicos y sulfamidas, y los antiepilepticos encabezan la lista.',
      factores_riesgo: ['Antibioticos betalactamicos y sulfamidas', 'Antiepilepticos aromaticos', 'Alopurinol', 'Antiinflamatorios no esteroideos', 'Infeccion virica concurrente, que aumenta la probabilidad', 'Polimedicacion', 'Exposicion previa al mismo farmaco'],
      clinica: 'Maculas y papulas eritematosas simetricas que empiezan en tronco y raiz de miembros y se extienden, a veces confluyendo. Prurito. SIN fiebre alta, sin mucosas, sin dolor cutaneo y sin ampollas. Aparece entre 4 y 14 dias tras iniciar el farmaco.',
      criterios_dx: 'Clinico, apoyado en la cronologia. La ausencia de las seis banderas de gravedad es lo que permite quedarse tranquilo.',
      laboratorio: 'Hemograma y funcion hepatica y renal para comprobar que no hay eosinofilia ni afectacion de organos. Si son normales y no hay banderas, no hace falta mas.',
      imagen: 'No se necesita.',
      complementarios: 'Cronologia escrita de todos los farmacos con fechas de inicio, que es lo que despues permitira se&#241;alar al culpable.',
      dx_diferencial: 'Exantema virico (que puede ser indistinguible, y de hecho a menudo coexisten), exantema por enfermedad de base, sifilis secundaria y las fases iniciales de una farmacodermia grave, que empiezan pareciendose a esta.',
      tx_medico: 'RETIRAR el farmaco sospechoso. Emolientes, y explicar que la resolucion tarda una o dos semanas y que suele haber descamacion, para que el paciente no crea que empeora.',
      tx_farmacologico: 'Corticoide topico y antihistaminico para el prurito, sabiendo que el alivio es parcial. El corticoide sistemico rara vez hace falta.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si el paciente esta ingresado, revisar a diario que no aparece ninguna bandera: un exantema aparentemente banal puede ser el primer dia de un DRESS o de un Stevens-Johnson.',
      seguimiento_ambulatorio: 'Documentar el farmaco en la historia y entregar al paciente la informacion por escrito. Sin ese paso, la reaccion se repetira.',
      pronostico: 'Excelente. Se resuelve al retirar el farmaco.',
      algoritmo: ['Comprobar las seis banderas de gravedad', 'Cronologia escrita de todos los farmacos', 'Hemograma, funcion hepatica y renal', 'Retirar el farmaco sospechoso', 'Corticoide topico y antihistaminico para el picor', 'Vigilar por si aparece una bandera', 'Documentar la alergia por escrito']
    },
    {
      nombre: 'Stevens-Johnson y necrolisis epidermica toxica',
      color: '#8c2e3a',
      definicion: 'Reaccion de hipersensibilidad grave con epidermolisis y despegamiento cutaneo difuso acompa&#241;ado de necrosis y afectacion de mucosas. Son un espectro de la misma enfermedad, separado por el porcentaje de superficie despegada.',
      fisiopatologia: 'Es una hipersensibilidad de tipo IVc: linfocitos T citotoxicos y celulas asesinas naturales reconocen el farmaco y destruyen los queratinocitos de forma masiva, con granulisina como mediador principal. El resultado es la necrosis de TODO el espesor de la epidermis, que se despega de la dermis como una sabana. Los mecanismos exactos que inician el da&#241;o siguen sin estar bien entendidos.',
      epidemiologia: 'Poco frecuente pero de altisima gravedad: la mortalidad en fase aguda va del 10 al 40% segun la extension. La causa principal de muerte es la SEPSIS con fallo multiorganico posinfeccioso, seguida de la afectacion pulmonar.',
      factores_riesgo: ['Alopurinol', 'Antiepilepticos aromaticos: carbamazepina, fenitoina, lamotrigina', 'Sulfamidas', 'Antiinflamatorios de tipo oxicam', 'Nevirapina', 'Infeccion por VIH', 'Determinados alelos HLA segun el farmaco y la etnia'],
      clinica: 'Prodromos inespecificos, despues eritema extenso doloroso, lesiones EN DIANA ATIPICAS de centro oscuro y ampollas flacidas grandes con signo de NIKOLSKY positivo (la epidermis se despega al frotar suavemente). En torno al 80% de los casos hay afectacion de DOS O MAS mucosas: nasofaringe, orofaringe, ojos, genitales. El dolor cutaneo suele preceder al despegamiento y es una pista precoz.',
      criterios_dx: 'Clinico, apoyado en la biopsia, que muestra necrosis de todo el espesor epidermico. La clasificacion depende de la superficie DESPEGADA: menos del 10% es Stevens-Johnson, del 10 a menos del 30% es solapamiento y el 30% o mas es necrolisis epidermica toxica.',
      laboratorio: 'Hemograma, funcion renal con urea, bicarbonato, glucemia (las cuatro entran en el SCORTEN), funcion hepatica, reactantes y hemocultivos seriados.',
      imagen: 'Radiografia de torax por la afectacion pulmonar y por la busqueda de infeccion.',
      complementarios: 'SCORTEN al ingreso y repetido al tercer dia. Valoracion OFTALMOLOGICA precoz, porque las secuelas oculares son la complicacion cronica mas incapacitante y son en buena parte evitables. Valoracion ginecologica o urologica segun las mucosas afectadas.',
      dx_diferencial: 'Sindrome de la piel escaldada estafilococica (que afecta a la capa granulosa y RESPETA las mucosas), penfigo paraneoplasico, enfermedad injerto contra huesped aguda, eritema multiforme mayor y quemadura.',
      tx_medico: 'Lo que salva vidas es el soporte, no el inmunomodulador: RETIRADA INMEDIATA del farmaco, ingreso en una unidad de quemados o de criticos con experiencia, control de temperatura ambiental, reposicion de liquidos y electrolitos, soporte nutricional precoz, analgesia adecuada (el dolor es intenso) y curas no adherentes con manipulacion minima. Vigilancia activa de la infeccion, evitando la profilaxis antibiotica sistemica de rutina.',
      tx_farmacologico: 'Es el area de mayor incertidumbre. La guia latinoamericana revisa la evidencia sobre inhibidores del factor de necrosis tumoral: un ensayo aleatorizado no ciego de 2018 con 91 pacientes comparo etanercept (25 o 50 mg dos veces por semana) con prednisolona intravenosa (1 a 1.5 mg/kg/dia); la mortalidad fue menor con etanercept (8.3% frente a 16.3%) sin alcanzar significacion estadistica, y el tiempo hasta la reepitelizacion fue mas corto (14 frente a 19 dias). Una revision de 2022 con nueve estudios y 308 pacientes sugirio menor mortalidad con etanercept frente a corticoides sistemicos, con certeza BAJA. La ciclosporina y la inmunoglobulina intravenosa tambien se han usado, con evidencia igualmente limitada.',
      tx_intervencionista: 'Cuidados de enfermeria especializados en piel, que son determinantes. Desbridamiento segun protocolo de la unidad. Cuidado oftalmologico intensivo en la fase aguda para prevenir simblefaron y cicatrices corneales.',
      criterios_uci: 'Practicamente todos: superficie despegada relevante, inestabilidad, afectacion de via aerea o SCORTEN elevado. El traslado a una unidad de quemados debe ser PRECOZ, no cuando el paciente ya esta inestable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Balance hidrico, temperatura, superficie despegada y busqueda activa de infeccion a diario. Los signos clasicos de infeccion son poco fiables en una piel denudada.',
      seguimiento_ambulatorio: 'Las secuelas son la otra mitad de la enfermedad: oculares (ojo seco, simblefaron, ceguera), cutaneas (discromias, cicatrices), ungueales, genitales y psicologicas. Requiere seguimiento multidisciplinar prolongado. Y una tarjeta de alergia con el farmaco identificado, porque una reexposicion puede ser mortal.',
      pronostico: 'Mortalidad del 10 al 40% en la fase aguda segun la extension. Entre los supervivientes, las secuelas son frecuentes y la reexposicion al farmaco puede ser mortal.',
      algoritmo: ['Reconocer: dolor cutaneo, dianas atipicas, mucosas y Nikolsky', 'RETIRAR de inmediato el farmaco sospechoso', 'Calcular la superficie DESPEGADA y clasificar', 'SCORTEN al ingreso y al tercer dia', 'Traslado PRECOZ a unidad de quemados o criticos', 'Soporte: temperatura, volumen, nutricion, analgesia y curas', 'Valoracion oftalmologica precoz', 'Identificar el culpable con ALDEN y documentarlo']
    },
    {
      nombre: 'DRESS: la que llega tarde y afecta a organos',
      color: '#5a4a8c',
      definicion: 'Reaccion a farmacos con exantema, fiebre, adenopatias, alteraciones hematologicas (eosinofilia o linfocitos atipicos) y afectacion de al menos un organo interno, con la latencia mas larga de todas las farmacodermias.',
      fisiopatologia: 'Hipersensibilidad retardada con expansion de linfocitos T especificos frente al farmaco y activacion eosinofilica intensa. Un rasgo propio es la REACTIVACION de virus del grupo herpes, sobre todo el herpesvirus humano 6, que se asocia a los brotes tardios y a las recaidas cuando se baja el corticoide. Esa reactivacion explica el curso prolongado y ondulante, tan distinto del de las demas farmacodermias.',
      epidemiologia: 'Poco frecuente pero con mortalidad relevante, en buena parte por la afectacion hepatica. El retraso diagnostico es la norma, porque la latencia larga hace que se descarte el farmaco como causa precisamente por llevar semanas tomandolo.',
      factores_riesgo: ['Antiepilepticos aromaticos: carbamazepina, fenitoina, lamotrigina, fenobarbital', 'Alopurinol', 'Sulfamidas', 'Vancomicina', 'Minociclina', 'Antituberculosos', 'Determinados alelos HLA'],
      clinica: 'Exantema extenso que puede llegar a eritrodermia, FIEBRE, EDEMA FACIAL (muy caracteristico y de gran valor diagnostico), adenopatias generalizadas y afectacion visceral. El higado es el organo mas frecuente y el que marca el pronostico; tambien ri&#241;on (nefritis intersticial), pulmon, corazon (miocarditis, que puede ser tardia) y tiroides.',
      criterios_dx: 'Combinacion de exantema, fiebre, adenopatias, eosinofilia o linfocitos atipicos, afectacion de al menos un organo y curso prolongado. Existen sistemas de puntuacion que lo graduan en posible, probable o definitivo.',
      laboratorio: 'Hemograma con EOSINOFILIA y linfocitos atipicos, transaminasas, funcion renal y sedimento, y serologias o carga viral de herpesvirus. Hay que REPETIR la analitica: la afectacion de organos puede aparecer o empeorar despues de retirar el farmaco.',
      imagen: 'Ecografia abdominal si hay afectacion hepatica. Ecocardiograma ante sospecha de miocarditis.',
      complementarios: 'Vigilancia de la funcion tiroidea a MESES vista, porque la tiroiditis autoinmune es una secuela tardia caracteristica y se diagnostica cuando ya nadie relaciona los sintomas con aquel episodio.',
      dx_diferencial: 'Infeccion virica aguda (mononucleosis), linfoma, sindrome hipereosinofilico, vasculitis y sepsis.',
      tx_medico: 'Retirada del farmaco y soporte. La clave que diferencia a esta entidad es que el curso es PROLONGADO y ondulante: hay que avisar al paciente y al equipo de que puede haber brotes tardios y recaidas, sobre todo al reducir el corticoide.',
      tx_farmacologico: 'Corticoide sistemico en los casos con afectacion visceral significativa, con descenso LENTO a lo largo de semanas o meses, porque un descenso rapido produce recaida. En formas leves puede bastar con corticoide topico potente. Evitar a&#241;adir farmacos nuevos innecesarios durante la fase aguda, porque hay riesgo de reacciones cruzadas y de confundir el cuadro.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Fallo hepatico, miocarditis o inestabilidad hemodinamica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El trasplante hepatico se ha planteado en casos excepcionales de fallo hepatico fulminante.',
      seguimiento_hospitalario: 'Analitica seriada de higado y ri&#241;on. Vigilancia de la reactivacion viral y de la aparicion de miocarditis, que puede ser tardia.',
      seguimiento_ambulatorio: 'Seguimiento PROLONGADO, de meses: funcion tiroidea, funcion hepatica y vigilancia de autoinmunidad de aparicion tardia. Tarjeta de alergia con el farmaco y sus congeneres.',
      pronostico: 'Mortalidad relevante, sobre todo por la afectacion hepatica. Las secuelas autoinmunes tardias son una particularidad de esta entidad.',
      algoritmo: ['Sospechar ante exantema con fiebre y EDEMA FACIAL', 'Pedir hemograma con formula y funcion hepatica y renal', 'Calcular la latencia: de 2 a 8 semanas orienta aqui', 'Retirar el farmaco y NO reintroducirlo', 'Corticoide sistemico si hay afectacion visceral', 'Descenso LENTO del corticoide para evitar recaida', 'Vigilar tiroides y autoinmunidad a meses vista']
    },
    {
      nombre: 'Pustulosis exantematica generalizada aguda',
      color: '#8a5a2e',
      definicion: 'Erupcion aguda de multiples pustulas esteriles peque&#241;as sobre piel eritematosa y edematosa, con fiebre y leucocitosis, desencadenada casi siempre por un farmaco y con la latencia mas corta de las farmacodermias graves.',
      fisiopatologia: 'Linfocitos T especificos frente al farmaco producen interleucina 8 y otros factores quimiotacticos, que reclutan neutrofilos de forma masiva hacia la epidermis y forman pustulas SUBCORNEAS esteriles. Es el mismo resultado morfologico que en la psoriasis pustulosa, con la que comparte parte de la via, y de ahi la enorme dificultad para separarlas.',
      epidemiologia: 'Poco frecuente. El desencadenante es un farmaco en la gran mayoria de los casos, tipicamente un antibiotico, y la latencia se mide en HORAS o pocos dias, no en semanas.',
      factores_riesgo: ['Aminopenicilinas', 'Pristinamicina y otros macrolidos', 'Antagonistas del calcio, sobre todo diltiazem', 'Antipaludicos', 'Antifungicos', 'Antecedente personal o familiar de psoriasis, que complica el diferencial'],
      clinica: 'Aparicion brusca de decenas o cientos de pustulas no foliculares de 2 a 3 milimetros sobre una base de eritema y edema, que empieza en pliegues y cara y se generaliza. FIEBRE y leucocitosis con neutrofilia. Al resolverse, en una o dos semanas, deja una descamacion caracteristica en collarete.',
      criterios_dx: 'Clinico, apoyado en la biopsia (pustulas subcorneas o intraepidermicas espongiformes con edema dermico) y en el cultivo NEGATIVO del contenido pustuloso.',
      laboratorio: 'Leucocitosis con neutrofilia marcada, a veces eosinofilia moderada. Cultivo del pus, que debe ser esteril. Funcion hepatica y renal, porque puede haber afectacion sistemica leve.',
      imagen: 'No se necesita salvo sospecha de foco infeccioso.',
      complementarios: 'Historia dirigida a la latencia: un farmaco iniciado ayer o anteayer es el sospechoso principal, al contrario que en el DRESS.',
      dx_diferencial: 'PSORIASIS PUSTULOSA GENERALIZADA, que es el diferencial principal y el mas dificil: a favor de la pustulosis por farmacos juegan la latencia corta y clara respecto al farmaco, la fiebre de aparicion simultanea y la resolucion rapida al retirarlo; a favor de la psoriasis, el antecedente personal de psoriasis y la recurrencia sin farmaco. Tambien foliculitis, infeccion cutanea y necrolisis epidermica en su inicio.',
      tx_medico: 'Retirada del farmaco, que suele bastar. Soporte, cuidado de la piel y control de la temperatura. La resolucion espontanea en una o dos semanas es la regla.',
      tx_farmacologico: 'Corticoide topico potente para acortar el curso. El corticoide sistemico se reserva a casos extensos o con afectacion sistemica. No hacen falta antibioticos: las pustulas son esteriles, y a&#241;adir un antibiotico nuevo en este contexto es a la vez inutil y arriesgado.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: afectacion muy extensa con inestabilidad o alteracion de la termorregulacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la temperatura y el estado general. Comprobar que las pustulas no se sobreinfectan.',
      seguimiento_ambulatorio: 'Documentar el farmaco. Explicar la descamacion en collarete de la resolucion para que no se interprete como empeoramiento.',
      pronostico: 'Bueno: se resuelve al retirar el farmaco, con mortalidad baja.',
      algoritmo: ['Reconocer: pustulas peque&#241;as no foliculares con fiebre', 'Calcular la latencia: horas o pocos dias', 'Cultivar el pus para confirmar que es esteril', 'Retirar el farmaco sospechoso', 'Corticoide topico potente', 'NO a&#241;adir antibiotico', 'Separar de la psoriasis pustulosa por la cronologia']
    },
    {
      nombre: 'Eritrodermia: cuando la piel deja de ser un organo',
      color: '#8c3a34',
      definicion: 'Eritema y descamacion que afectan a mas del 90% de la superficie corporal. Es un patron de reaccion, no una enfermedad: siempre hay una causa detras.',
      fisiopatologia: 'La vasodilatacion cutanea masiva y la perdida de la barrera producen perdida de calor (hipotermia, aunque tambien puede haber fiebre), perdida de agua por evaporacion (deshidratacion), perdida de proteinas por descamacion (hipoalbuminemia) e insuficiencia cardiaca de alto gasto por el aumento del flujo cutaneo. Y la piel denudada es una puerta de entrada enorme para la infeccion. Es, literalmente, un fallo de organo.',
      epidemiologia: 'Predomina en varones de edad media o avanzada. Las causas son, por orden: dermatosis inflamatoria previa que se generaliza (psoriasis, dermatitis atopica, dermatitis seborreica), reacciones a FARMACOS, linfoma cutaneo de celulas T y, en una minoria, causa desconocida.',
      factores_riesgo: ['Dermatosis inflamatoria previa extensa', 'Retirada brusca de corticoides sistemicos en un psoriasico', 'Inicio reciente de un farmaco', 'Edad avanzada', 'Linfoma cutaneo de celulas T subyacente', 'Infeccion intercurrente'],
      clinica: 'Eritema generalizado con descamacion laminar, escalofrios y sensacion de frio, prurito, edema (sobre todo de parpados y miembros), taquicardia y adenopatias, que en este contexto suelen ser reactivas. Buscar las pistas de la causa: placas psoriasicas residuales en codos o cuero cabelludo, afectacion ungueal, historia de atopia, o un farmaco nuevo.',
      criterios_dx: 'Clinico por la extension. Lo que exige trabajo no es el diagnostico de eritrodermia sino el de su CAUSA.',
      laboratorio: 'Hemograma (buscando eosinofilia y celulas de Sezary), albumina, ionograma, funcion renal y hepatica, reactantes y hemocultivos si hay fiebre. Frotis de sangre periferica y citometria si se sospecha linfoma.',
      imagen: 'Tomografia y estudio de extension si se confirma un linfoma cutaneo. Ecocardiograma si hay datos de insuficiencia cardiaca de alto gasto.',
      complementarios: 'BIOPSIA, que puede necesitar repetirse en varias localizaciones y en el tiempo, porque en la eritrodermia la histologia suele ser inespecifica al principio y solo despues muestra el patron de la enfermedad de base.',
      dx_diferencial: 'Entre las causas: psoriasis, dermatitis atopica, dermatitis seborreica, farmacos, linfoma cutaneo de celulas T y sindrome de Sezary, pitiriasis rubra pilaris y penfigo foliaceo.',
      tx_medico: 'INGRESO en la mayoria de los casos. El soporte es lo que salva: control de la temperatura ambiental, reposicion de liquidos y electrolitos, correccion de la hipoalbuminemia, nutricion, emolientes en abundancia y curas suaves, y busqueda activa de infeccion. Retirar todo farmaco no imprescindible.',
      tx_farmacologico: 'Depende de la causa. Corticoide topico de potencia media bajo vendaje humedo como medida sintomatica inicial. El corticoide SISTEMICO es peligroso si la causa es una psoriasis, porque su retirada precipita un brote pustuloso: por eso conviene identificar la causa antes de instaurarlo.',
      tx_intervencionista: 'No aplica. Los cuidados de enfermeria especializados son determinantes.',
      criterios_uci: 'Inestabilidad hemodinamica, hipotermia refractaria, insuficiencia cardiaca de alto gasto o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Constantes con temperatura, balance hidrico, albumina, ionograma y funcion renal a diario. Vigilancia activa de infeccion, que es la causa principal de mortalidad.',
      seguimiento_ambulatorio: 'Seguir hasta identificar la causa. Si no se aclara, repetir biopsias en el tiempo: parte de las eritrodermias idiopaticas acaban revelandose como linfoma cutaneo a&#241;os despues.',
      pronostico: 'Depende de la causa y de la edad. Las de origen farmacologico y las secundarias a una dermatosis conocida tienen mejor pronostico que las asociadas a linfoma.',
      algoritmo: ['Confirmar la extension y valorar el estado general', 'Ingresar y estabilizar: temperatura, volumen y albumina', 'Retirar todo farmaco no imprescindible', 'Buscar pistas de la causa en piel, u&#241;as e historia', 'Biopsiar, y repetir si es inespecifica', 'Vigilancia activa de infeccion', 'Cuidado con el corticoide sistemico si puede ser psoriasis']
    },
    {
      nombre: 'Identificar al culpable y evitar la reexposicion',
      color: '#3d5a73',
      definicion: 'Proceso de atribuir la reaccion a un farmaco concreto entre varios posibles, y de dejar constancia de forma que la informacion llegue a quien prescriba en el futuro.',
      fisiopatologia: 'No aplica: es un problema de razonamiento y de sistema, no de mecanismo. Pero se apoya en uno: cada tipo de reaccion tiene una VENTANA DE LATENCIA propia, determinada por el tiempo que tarda en montarse la respuesta inmunitaria correspondiente.',
      epidemiologia: 'El paciente tipico es polimedicado y lleva varios farmacos nuevos a la vez. Sin un metodo, se acaba retirando el farmaco mas facil de sustituir en lugar del responsable, y el paciente queda etiquetado de alergico a algo que tolera.',
      factores_riesgo: ['Polimedicacion', 'Varios farmacos iniciados en la misma semana', 'Historia clinica incompleta o sin fechas', 'Cambio de nivel asistencial durante el episodio', 'Ausencia de un sistema de registro de alergias'],
      clinica: 'La herramienta principal es una CRONOLOGIA escrita: todos los farmacos con su fecha de inicio y de fin, cruzada con la fecha de inicio de la reaccion. Suele bastar para descartar la mitad de los sospechosos.',
      criterios_dx: 'La guia latinoamericana sugiere usar el algoritmo ALDEN cuando hay dudas sobre el farmaco causante de una necrolisis epidermica. Valora la latencia, si el farmaco estaba presente el dia del inicio, la exposicion previa, la notoriedad del farmaco como causa conocida y la presencia de causas alternativas.',
      laboratorio: 'Las pruebas cutaneas en fase tardia (epicutaneas o intradermicas de lectura retardada) y las pruebas de transformacion linfocitaria pueden ayudar en algunos casos, y se hacen SIEMPRE en fase de resolucion y en centros con experiencia.',
      imagen: 'No aplica.',
      complementarios: 'La REEXPOSICION controlada esta contraindicada de forma absoluta tras una necrolisis epidermica, un DRESS o una pustulosis generalizada: puede ser mortal.',
      dx_diferencial: 'Causa infecciosa (sobre todo virica) que imita una farmacodermia, y enfermedad de base que produce exantema.',
      tx_medico: 'Lo que cierra el caso no es el diagnostico sino el REGISTRO: anotar el farmaco, la reaccion concreta y la fecha en la historia, entregar al paciente un informe y una tarjeta, y explicarle que debe mencionarlo siempre. Incluir los farmacos con reactividad cruzada conocida.',
      tx_farmacologico: 'Dejar por escrito alternativas seguras concretas para las indicaciones que el paciente necesita. Un informe que solo dice lo que no puede tomar deja al siguiente medico sin salida.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar antes del alta que la alergia esta registrada en el sistema y que consta en el informe.',
      seguimiento_ambulatorio: 'Derivacion a alergologia para el estudio en fase de resolucion cuando el culpable no esta claro y el farmaco es dificil de sustituir.',
      pronostico: 'Excelente si se identifica y se evita. Una reexposicion tras una reaccion grave puede ser mortal, y ese es todo el motivo de este trabajo.',
      algoritmo: ['Cronologia escrita de TODOS los farmacos con fechas', 'Cruzarla con la ventana de latencia del tipo de reaccion', 'Aplicar ALDEN si persiste la duda', 'Retirar el sospechoso principal', 'Registrar en la historia con la reaccion concreta', 'Entregar informe y tarjeta al paciente', 'Anotar alternativas seguras, no solo prohibiciones']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Casi todas las farmacodermias graves empiezan en un paciente que ya esta ingresado por otra cosa. El internista es quien las ve primero, y lo que hace en las primeras horas cambia el resultado.',
    parametros: [
      'Ante cualquier exantema en un paciente ingresado, comprobar las SEIS BANDERAS: fiebre, mucosas, dolor cutaneo, edema facial, ampollas o Nikolsky, y alteracion analitica.',
      'Hacer una cronologia escrita de todos los farmacos con sus fechas de inicio antes de retirar nada, porque despues la informacion se pierde.',
      'Dolor cutaneo que precede a las lesiones: es el aviso precoz de la necrolisis epidermica. No esperar a las ampollas.',
      'Edema facial con eosinofilia: pedir funcion hepatica hoy y repetirla, porque el DRESS puede empeorar despues de retirar el farmaco.',
      'En la necrolisis epidermica, el traslado a una unidad de quemados debe ser PRECOZ, y la valoracion oftalmologica tambien: las secuelas oculares son en buena parte evitables.',
      'No a&#241;adir farmacos nuevos innecesarios durante la fase aguda de una farmacodermia, y evitar la profilaxis antibiotica sistemica de rutina en la necrolisis.',
      'Antes del alta, comprobar que la alergia esta registrada en el sistema, en el informe y en una tarjeta para el paciente.'
    ],
    criterios_uci_general: 'Necrolisis epidermica toxica con superficie despegada relevante o SCORTEN elevado; DRESS con fallo hepatico o miocarditis; eritrodermia con inestabilidad, hipotermia refractaria o sepsis.',
    criterios_tips_general: 'No aplica en farmacodermias.',
    criterios_trasplante_general: 'Trasplante hepatico en casos excepcionales de fallo hepatico fulminante por DRESS.',
    prevencion: 'Revisar siempre las alergias registradas antes de prescribir, evitar los farmacos con reactividad cruzada conocida, no reexponer nunca tras una reaccion grave, limitar la polimedicacion innecesaria, y dejar constancia por escrito de la reaccion y de las alternativas seguras.'
  }
};

export const compCites = {
  'Exantema maculopapular: lo frecuente y benigno': { epidemiologia: [2], fisiopatologia: [2] },
  'Stevens-Johnson y necrolisis epidermica toxica': { definicion: [1], criterios_dx: [1], fisiopatologia: [1], epidemiologia: [1], tx_farmacologico: [1], complementarios: [1] },
  'DRESS: la que llega tarde y afecta a organos': { fisiopatologia: [2], criterios_dx: [2] },
  'Pustulosis exantematica generalizada aguda': { fisiopatologia: [2], dx_diferencial: [2] },
  'Eritrodermia: cuando la piel deja de ser un organo': { fisiopatologia: [3], epidemiologia: [3], complementarios: [3] },
  'Identificar al culpable y evitar la reexposicion': { criterios_dx: [1] }
};

export const estigmasTitulo = 'Signos que hay que buscar de forma activa';
export const estigmas = [
  { nombre: 'Signo de Nikolsky', descripcion: 'Al frotar suavemente la piel aparentemente sana, la epidermis se despega. Indica despegamiento activo y es propio de la necrolisis epidermica toxica y del sindrome de la piel escaldada estafilococica.' },
  { nombre: 'Dolor cutaneo', descripcion: 'Que la piel DUELA antes de que aparezcan ampollas es uno de los avisos mas precoces de la necrolisis epidermica. Se pregunta y casi nunca se pregunta.' },
  { nombre: 'Diana atipica', descripcion: 'Lesion con dos zonas y bordes mal definidos, de centro oscuro o purpurico, distinta de la diana tipica de tres anillos del eritema multiforme. Anuncia el despegamiento.' },
  { nombre: 'Edema facial', descripcion: 'Muy caracteristico del DRESS y de gran valor diagnostico. Un exantema con la cara hinchada obliga a pedir hemograma y funcion hepatica ese mismo dia.' },
  { nombre: 'Descamacion en collarete', descripcion: 'Al resolverse la pustulosis exantematica generalizada aguda, la piel se descama en collaretes. Es un dato de la fase de resolucion que ayuda a confirmar retrospectivamente el diagnostico.' },
  { nombre: 'Afectacion de dos o mas mucosas', descripcion: 'Presente en alrededor del 80% de los casos de necrolisis epidermica: nasofaringe, orofaringe, ojos y genitales. Su ausencia es uno de los datos que apoya el sindrome de la piel escaldada.' }
];

export const biopsiaTitulo = 'Biopsia cutanea: que confirma cada patron';
export const biopsia = {
  indicaciones: [
    'Sospecha de necrolisis epidermica toxica, para confirmar y separar del sindrome de la piel escaldada',
    'Pustulosis generalizada, para confirmar las pustulas subcorneas y descartar psoriasis pustulosa',
    'Eritrodermia de causa no aclarada, buscando el patron de la enfermedad de base',
    'Exantema atipico que no encaja con ninguna de las entidades conocidas',
    'Sospecha de linfoma cutaneo de celulas T como causa de eritrodermia'
  ],
  ventajas: [
    'Necrolisis epidermica: necrosis de TODO el espesor epidermico con despegamiento subepidermico',
    'Sindrome de la piel escaldada: despegamiento alto, en la capa granulosa, que es la clave del diferencial',
    'Pustulosis exantematica: pustulas subcorneas o intraepidermicas espongiformes con edema dermico',
    'Permite una muestra por congelacion para un resultado rapido cuando el diferencial es urgente'
  ],
  limitaciones: [
    'En la eritrodermia la histologia suele ser INESPECIFICA al principio y obliga a repetirla en el tiempo',
    'No distingue la pustulosis por farmacos de la psoriasis pustulosa: esa separacion es clinica y cronologica',
    'No identifica el farmaco responsable',
    'El resultado no debe retrasar la retirada del farmaco ni el traslado a la unidad adecuada'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la coagulacion y el riesgo de infeccion en piel denudada',
    'Elegir una zona de borde activo y evitar las areas ya despegadas o sobreinfectadas',
    'En un paciente inestable, la prioridad es el soporte y el traslado, no la muestra'
  ]
};

export const escalaRefs = { 'Superficie despegada (calculadora disponible)': [1], 'SCORTEN (calculadora disponible)': [1], 'Banderas de gravedad (calculadora disponible)': [2], 'Cronologia del farmaco (calculadora disponible)': [2], 'Criterios de DRESS': [2], 'Algoritmo ALDEN': [1] };

export const escalaCalc = {
  'Superficie despegada (calculadora disponible)': 'scorten',
  'SCORTEN (calculadora disponible)': 'scorten',
  'Banderas de gravedad (calculadora disponible)': 'banderas-farmaco',
  'Cronologia del farmaco (calculadora disponible)': 'cronologia-farmaco'
};

export const compGroups = [
  { title: 'Lo frecuente', items: ['Exantema maculopapular: lo frecuente y benigno'] },
  { title: 'Las graves', items: ['Stevens-Johnson y necrolisis epidermica toxica', 'DRESS: la que llega tarde y afecta a organos', 'Pustulosis exantematica generalizada aguda'] },
  { title: 'La piel como organo en fallo', items: ['Eritrodermia: cuando la piel deja de ser un organo'] },
  { title: 'Despues', items: ['Identificar al culpable y evitar la reexposicion'] }
];

export const complicacionesIntro = 'La primera ficha es lo que se ve casi siempre y no pasa nada, y sirve sobre todo para saber reconocer que NO es. Las tres siguientes son las farmacodermias graves, ordenadas por lo que de verdad las separa en la cabecera del paciente: la latencia y el organo afectado. La quinta es la eritrodermia, que no es una enfermedad sino un estado en el que la piel deja de funcionar como organo y en el que el soporte importa mas que el diagnostico las primeras horas. Y la ultima es la parte que casi nunca se hace bien y que decide si el paciente vuelve a pasar por lo mismo: identificar al culpable y dejarlo escrito.';

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
  root: { title: 'FARMACODERMIA', color: '#7a3a6b', target: 'definicion' },
  branches: [
    { title: 'Benigna', sub: 'Exantema maculopapular &middot; la mayoria', color: '#3f6b52', target: 'complicaciones' },
    { title: 'Grave', sub: 'Seis banderas &middot; ~2% de los casos', color: '#8c2e3a', target: 'complicaciones', leaves: [
      { title: 'Pustulosis aguda', sub: 'Latencia de 1 a 2 dias', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Stevens-Johnson y necrolisis', sub: '1 a 3 semanas &middot; mucosas', color: '#8c2e3a', target: 'complicaciones' },
      { title: 'DRESS', sub: '2 a 8 semanas &middot; organos', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'Eritrodermia', sub: 'Mas del 90% &middot; fallo de organo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Buscar la causa', sub: 'Dermatosis, farmaco o linfoma', color: '#3d5a73', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 2], imagen: [1, 3] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1];
export const figurasDefinicion = ['farmaco-banderas'];
export const figurasClasificacion = ['farmaco-latencias', 'scorten-tabla'];

export const figuras = {
  'farmaco-banderas': {
    titulo: 'Las seis banderas que separan lo benigno de lo grave',
    fuente: 'Hoetzenecker W, et al. Adverse cutaneous drug eruptions: current understanding. Semin Immunopathol 2016 (doi:10.1007/s00281-015-0540-2).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Bandera</th><th>Que sugiere</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Fiebre alta</td><td>Cualquiera de las graves. Un exantema banal no da fiebre alta</td></tr>
            <tr><td class="figure-org">Afectacion de MUCOSAS</td><td>Stevens-Johnson y necrolisis epidermica (en el 80% hay dos o mas mucosas)</td></tr>
            <tr><td class="figure-org">DOLOR de la piel</td><td>Necrolisis epidermica. Precede al despegamiento: es el aviso mas precoz</td></tr>
            <tr><td class="figure-org">EDEMA FACIAL</td><td>DRESS. Muy caracteristico y de gran valor diagnostico</td></tr>
            <tr><td class="figure-org">Ampollas o signo de Nikolsky</td><td>Despegamiento activo: necrolisis epidermica</td></tr>
            <tr><td class="figure-org">Alteracion ANALITICA</td><td>Eosinofilia y linfocitos atipicos: DRESS. Neutrofilia: pustulosis aguda</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos datos mas que no son banderas pero que alarman igual: la <strong>extension rapida y progresiva</strong> pese a haber retirado el farmaco, y las <strong>lesiones en diana atipicas</strong> de centro oscuro. Si no hay ninguna de las seis banderas ni estos dos datos, la probabilidad de que sea un exantema benigno es muy alta y basta con retirar el farmaco y vigilar. Si hay una sola, hay que parar y pensar: la diferencia entre estas dos situaciones es la que hay entre una consulta y una unidad de quemados.</div>`
  },
  'farmaco-latencias': {
    titulo: 'La latencia se&#241;ala al culpable',
    fuente: 'Hoetzenecker W, et al. Semin Immunopathol 2016, y guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy Organ J 2025;18(4):101046).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Reaccion</th><th>Latencia tipica</th><th>Pista que la identifica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Urticaria o anafilaxia</td><td><span class="figure-tag fail">Minutos a horas</span></td><td>Habones fugaces; si hay hipotension o broncoespasmo, es anafilaxia</td></tr>
            <tr><td class="figure-org">Pustulosis exantematica aguda</td><td><span class="figure-tag fail">1 a 2 dias</span></td><td>Pustulas peque&#241;as esteriles, fiebre y neutrofilia</td></tr>
            <tr><td class="figure-org">Exantema maculopapular</td><td>4 a 14 dias</td><td>Pica, no hay mucosas ni analitica alterada</td></tr>
            <tr><td class="figure-org">Stevens-Johnson y necrolisis</td><td>1 a 3 semanas</td><td>Dolor cutaneo, dianas atipicas, mucosas, Nikolsky</td></tr>
            <tr><td class="figure-org">DRESS</td><td><span class="figure-tag dys">2 a 8 semanas</span></td><td>Edema facial, eosinofilia, higado</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Aqui esta el error que mas se repite: <strong>descartar un farmaco por llevar semanas tomandolo</strong>. En el DRESS eso es justamente lo esperable, porque su latencia es la mas larga de todas. Y al reves: un farmaco iniciado ayer casi nunca explica un DRESS, pero es el sospechoso principal de una pustulosis aguda. Antes de retirar nada conviene escribir la <strong>cronologia completa</strong> con las fechas de inicio de todos los farmacos, porque despues esa informacion se pierde.</div>`
  },
  'scorten-tabla': {
    titulo: 'SCORTEN y clasificacion por superficie despegada',
    fuente: 'Guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy Organ J 2025;18(4):101046, doi:10.1016/j.waojou.2025.101046).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Superficie DESPEGADA</th><th>Diagnostico</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Menos del 10%</td><td>Sindrome de Stevens-Johnson</td></tr>
            <tr><td class="figure-org">Del 10 a menos del 30%</td><td>Sindrome de solapamiento</td></tr>
            <tr><td class="figure-org">30% o mas</td><td><span class="figure-tag fail">Necrolisis epidermica toxica</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>SCORTEN: un punto por cada variable</th></tr></thead>
          <tbody>
            <tr><td>Edad de 40 a&#241;os o mas</td></tr>
            <tr><td>Neoplasia asociada</td></tr>
            <tr><td>Frecuencia cardiaca de 120 por minuto o mas</td></tr>
            <tr><td>Superficie despegada mayor del 10%</td></tr>
            <tr><td>Urea serica elevada</td></tr>
            <tr><td>Bicarbonato serico bajo</td></tr>
            <tr><td>Glucemia elevada</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos precisiones que cambian el resultado. La primera: solo cuenta la piel <strong>DESPEGADA o despegable</strong>, no el eritema; contar el eritema sobrestima la gravedad y es el error mas comun. Se calcula con la regla de los nueves de Wallace o, mejor, con el metodo de <strong>Lund-Browder</strong>, que es mas preciso. La segunda: el SCORTEN se calcula en las primeras 24 horas y conviene <strong>repetirlo al tercer dia</strong>, porque asi predice mejor. La mortalidad en fase aguda va del 10 al 40% segun la extension, y la causa principal de muerte es la <strong>sepsis</strong>.</div>`
  }
};
