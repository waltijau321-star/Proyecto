// topics/farmacodermias/content.js - Modulo 77: Farmacodermias y eritrodermia.
// Basado en las guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy
// Organ J 2025;18(4):101046), en Hoetzenecker W, et al. Semin Immunopathol 2016 y en Tso S,
// et al. Clin Exp Dermatol 2021;46(6):1001, los tres ya en Bibliografia/.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'farmacodermias',
  titulo: 'Farmacodermias y eritrodermia',
  subtitulo: 'Módulo 77 &middot; Dermatología',
  accent: '#7a3a6b',
  accentDim: '#94568a'
};

export const definicionText = `<p style="margin:0 0 14px;">La mayoría de las reacciones cutáneas a fármacos son <strong>benignas y autolimitadas</strong>: un exantema maculopapular que aparece a la semana o dos de empezar el fármaco, pica, y se resuelve al retirarlo. Pero alrededor del <strong>2%</strong> de las erupciones cutáneas por fármacos son graves y pueden matar. El trabajo del internista no es memorizar listas de fármacos: es <strong>separar esas dos categorías delante del paciente</strong>, y hacerlo pronto.</p>
<p style="margin:0 0 14px;">Las cuatro graves tienen nombre propio y se distinguen entre si por tres cosas: la <strong>latencia</strong> desde que empezo el fármaco, la <strong>morfología</strong> de la lesión y el <strong>órgano</strong> que se afecta además de la piel. El síndrome de Stevens-Johnson y la necrólisis epidérmica tóxica son un mismo espectro que se separa por la superficie despegada. El DRESS tiene la latencia más larga de todas y afecta a hígado, riñón y corazón. La pustulosis exantematica generalizada aguda tiene la latencia más corta y se confunde con una psoriasis pustulosa. Y la <strong>eritrodermia</strong> no es una enfermedad sino un estado en el que la piel deja de funcionar como órgano.</p>
<p style="margin:0 0 14px;">Hay una regla práctica que resume casi todo: ante un exantema por fármaco, buscar <strong>fiebre, afectación de mucosas, dolor cutáneo, edema facial, ampollas y alteración analítica</strong>. Si no hay nada de eso, casi siempre es benigno. Si hay algo, hay que parar y pensar, porque esas seis cosas son la frontera entre retirar un fármaco en consulta y un ingreso en una unidad de quemados.</p>`;

export const bibliografia = [
  'Murillo-Casas AD, Zwiener R, Giavina-Bianchi P, et al. Latin American guidelines for the diagnosis and treatment of Stevens-Johnson syndrome and toxic epidermal necrolysis. World Allergy Organ J. 2025;18(4):101046. doi:10.1016/j.waojou.2025.101046.',
  'Hoetzenecker W, Nägeli M, Mehra ET, et al. Adverse cutaneous drug eruptions: current understanding. Semin Immunopathol. 2016. doi:10.1007/s00281-015-0540-2.',
  'Tso S, Satchwell F, Moiz H, et al. Erythroderma (exfoliative dermatitis). Part 1: underlying causes, clinical presentation and pathogenesis. Clin Exp Dermatol. 2021;46(6):1001-1010.',
  'Zuberbier T, Abdul Latiff AH, Bernstein JA, et al. The International Guideline for the Definition, Classification, Diagnosis and Management of Urticaria. Allergy. 2026;81(8):2582-2632. doi:10.1111/all.70210.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El exantema benigno',
      tituloB: 'Las seis banderas de gravedad',
      compensada: 'Exantema MACULOPAPULAR simétrico que empieza en tronco y raíz de miembros y se extiende, con maculas y papulas eritematosas que confluyen. Aparece entre 4 y 14 días después de iniciar el fármaco, o antes si ya hubo exposición previa. PICA. No hay fiebre alta, ni afectación de mucosas, ni dolor de la piel, ni ampollas, y la analítica es normal. Se resuelve en una o dos semanas tras retirar el fármaco, a menudo con descamación. Este cuadro representa la gran mayoría de las reacciones cutáneas a fármacos.',
      descompensada: 'Las seis banderas que obligan a parar: FIEBRE alta; afectación de MUCOSAS (boca, ojos, genitales); DOLOR de la piel, que precede al despegamiento; EDEMA FACIAL, muy característico del DRESS; AMPOLLAS o signo de Nikolsky, que indican despegamiento; y ALTERACIÓN ANALÍTICA (eosinofilia, linfocitos atípicos, transaminasas altas, creatinina alta). A ellas se suman dos datos de alarma: la extensión rápida y progresiva pese a haber retirado el fármaco, y las lesiones EN DIANA ATÍPICAS con centro oscuro, que son el preludio del despegamiento epidermico.'
    },
    laboratorio: [
      { prueba: 'Hemograma con fórmula', utilidad: 'Busca EOSINOFILIA y linfocitos atípicos, que son los dos marcadores del DRESS y que separan un exantema banal de uno que va a dar la cara en otros órganos. También detecta la leucocitosis con neutrofilia propia de la pustulosis exantematica aguda.' },
      { prueba: 'Función hepática', utilidad: 'Es el órgano más afectado en el DRESS y el que marca su pronóstico. Hay que pedirla ante cualquier exantema con fiebre o eosinofilia, y repetirla, porque la afectación puede aparecer o empeorar DESPUÉS de retirar el fármaco.' },
      { prueba: 'Función renal, ionograma y bicarbonato', utilidad: 'La urea y el bicarbonato forman parte del SCORTEN, que es la escala pronostica de la necrólisis epidérmica tóxica. Además el DRESS produce nefritis intersticial.' },
      { prueba: 'Glucemia', utilidad: 'También entra en el SCORTEN. Y es relevante porque muchos de estos pacientes reciben corticoides.' },
      { prueba: 'Reactantes de fase aguda y hemocultivos', utilidad: 'En la necrólisis epidérmica tóxica la causa principal de muerte es la SEPSIS. Los signos habituales de infección son poco fiables en una piel denudada, de modo que hay que buscarla de forma activa y repetida.' },
      { prueba: 'Serologías virales', utilidad: 'En el DRESS se estudia la reactivación de virus del grupo herpes, en particular el herpesvirus humano 6, que se asocia a los brotes tardíos y a la recaída al bajar el corticoide.' },
      { prueba: 'Biopsia cutánea', utilidad: 'Confirma el diagnóstico en las formas graves: necrosis de todo el espesor epidermico con despegamiento en la necrólisis epidérmica tóxica, pústulas subcorneas en la pustulosis exantematica aguda, y en la eritrodermia ayuda a buscar la causa de base.' },
      { prueba: 'Cultivo del contenido de las pústulas', utilidad: 'En la pustulosis exantematica generalizada aguda las pústulas son ESTERILES. El cultivo negativo apoya el diagnóstico y separa de una infección.' }
    ],
    no_invasivos: [
      { metodo: 'SCORTEN (calculadora disponible)', interpretacion: 'Siete variables al ingreso que estiman la mortalidad de la necrólisis epidérmica tóxica. Incluye la superficie despegada, que además clasifica el cuadro.', cutoff: 'Cada punto sube la mortalidad de forma marcada' },
      { metodo: 'Banderas de gravedad (calculadora disponible)', interpretacion: 'Comprueba de forma ordenada las seis banderas y orienta hacia cual de las farmacodermias graves encaja mejor.', cutoff: 'Una sola bandera ya cambia el nivel de cuidados' },
      { metodo: 'Cronología del fármaco (calculadora disponible)', interpretacion: 'Cruza el tipo de reacción con el tiempo transcurrido desde que se inicio cada fármaco, que es el dato más útil para señalar al culpable.', cutoff: 'Cada reacción tiene su ventana de latencia' },
      { metodo: 'Soporte en la eritrodermia (calculadora disponible)', interpretacion: 'Estima las necesidades de reposición y recuerda lo que hay que corregir cuando la piel deja de funcionar como barrera.', cutoff: 'Temperatura, volumen, albúmina y búsqueda de infección' },
      { metodo: 'Algoritmo ALDEN', interpretacion: 'Herramienta específica para atribuir la causalidad de una necrólisis epidérmica a un fármaco concreto: valora latencia, presencia del fármaco el dia del inicio, exposición previa, notoriedad del fármaco y causas alternativas.', cutoff: 'La guía latinoamericana lo sugiere ante duda sobre el culpable' },
      { metodo: 'Superficie corporal despegada', interpretacion: 'Se calcula con la regla de los nueves de Wallace o, mejor, con el método de Lund-Browder, que es más preciso. Solo cuenta la piel DESPEGADA o despegable, no el eritema.', cutoff: 'Menos del 10%, del 10 al 30%, o más del 30%' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'La afectación pulmonar es una de las causas de muerte en la necrólisis epidérmica tóxica, y el epitelio bronquial puede descamarse igual que la piel. También busca infección.' },
      { modalidad: 'Ecografía abdominal', hallazgos: 'En el DRESS con afectación hepática, para valorar el hígado y descartar otras causas.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'En el DRESS ante sospecha de miocarditis, que es una complicación tardía, grave y que se pasa por alto con facilidad.' },
      { modalidad: 'Tomografia', hallazgos: 'En la eritrodermia de causa no aclarada, dentro del estudio de un posible linfoma cutáneo o de una neoplasia subyacente.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Primero, <strong>benigna o grave</strong>: las seis banderas resuelven esa pregunta a pie de cama. Después, dentro de las graves, la <strong>latencia</strong> y la <strong>morfología</strong> separan las cuatro entidades: pustulosis exantematica generalizada aguda (latencia muy corta, pústulas esteriles), síndrome de Stevens-Johnson y necrólisis epidérmica tóxica (una a tres semanas, ampollas y despegamiento con mucosas), y DRESS (la latencia más larga, de dos a ocho semanas, con edema facial, eosinofilia y órganos internos). Y el espectro de Stevens-Johnson y necrólisis se gradua por la <strong>superficie despegada</strong>: menos del 10%, del 10 al 30%, o el 30% o más.`,
    escalas: [
      { nombre: 'Superficie despegada (calculadora disponible)', componentes: 'Porcentaje de superficie corporal con epidermis despegada o despegable, medido por la regla de los nueves de Wallace o por el método de Lund-Browder.', formula: 'Porcentaje de superficie corporal total.', interpretacion: 'Síndrome de Stevens-Johnson por debajo del 10%; síndrome de solapamiento entre el 10 y menos del 30%; necrólisis epidérmica tóxica en el 30% o más. El error habitual es contar el ERITEMA: solo cuenta la piel despegada o que se despega al rozarla.' },
      { nombre: 'SCORTEN (calculadora disponible)', componentes: 'Edad de 40 años o más, neoplasia, frecuencia cardiaca de 120 o más, superficie despegada mayor del 10%, urea elevada, bicarbonato bajo y glucemia elevada.', formula: 'Un punto por variable, de 0 a 7, medido en las primeras 24 horas.', interpretacion: 'Estima la mortalidad y sube de forma marcada con cada punto. Se calcula al ingreso y conviene repetirlo al tercer dia, porque mejora su capacidad predictiva. No decide el tratamiento, pero si el nivel de cuidados.' },
      { nombre: 'Banderas de gravedad (calculadora disponible)', componentes: 'Fiebre, afectación de mucosas, dolor cutáneo, edema facial, ampollas o signo de Nikolsky, y alteración analítica.', formula: 'Presencia o ausencia de cada una.', interpretacion: 'Es la herramienta más útil del tema y no necesita nada más que la exploración. Ninguna bandera hace muy probable un exantema benigno; una sola bandera obliga a replantear el nivel de cuidados.' },
      { nombre: 'Cronología del fármaco (calculadora disponible)', componentes: 'Tipo de reacción y días transcurridos desde el inicio de cada fármaco sospechoso.', formula: 'Comparación con la ventana de latencia propia de cada reacción.', interpretacion: 'Es el dato que más rinde para señalar al culpable: la pustulosis aparece en uno o dos días, el exantema maculopapular entre 4 y 14, el Stevens-Johnson entre una y tres semanas, y el DRESS entre dos y ocho semanas. Un fármaco que empezo ayer casi nunca explica un DRESS.' },
      { nombre: 'Criterios de DRESS', componentes: 'Exantema, fiebre, adenopatías, eosinofilia o linfocitos atípicos, afectación de al menos un órgano interno y curso prolongado.', formula: 'Sistemas de puntuación que graduan el caso en posible, probable o definitivo.', interpretacion: 'Su utilidad práctica es recordar que el DRESS es un diagnóstico SISTÉMICO y no cutáneo: sin analítica no se puede diagnosticar ni excluir, y el órgano que más veces marca el pronóstico es el hígado.' },
      { nombre: 'Algoritmo ALDEN', componentes: 'Latencia, presencia del fármaco el dia del inicio, exposición previa, notoriedad del fármaco como causa de necrólisis y presencia de causas alternativas.', formula: 'Puntuación por fármaco.', interpretacion: 'La guía latinoamericana lo sugiere cuando hay dudas sobre cual de varios fármacos es el responsable, que es la situación habitual en un paciente polimedicado. Identificar al culpable no es académico: de ello depende que el paciente pueda recibir tratamientos seguros en el futuro.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Exantema maculopapular: lo frecuente y benigno',
      color: '#3f6b52',
      definicion: 'Erupción maculopapular simétrica y pruriginosa que aparece días después de iniciar un fármaco y se resuelve al retirarlo, sin afectación de mucosas ni de órganos internos.',
      fisiopatologia: 'Es una hipersensibilidad retardada mediada por linfocitos T que reconocen el fármaco o sus metabolitos unidos a moleculas del complejo mayor de histocompatibilidad. La activación de esos linfocitos en la piel produce el infiltrado y el exantema, pero sin la citotoxicidad masiva sobre el queratinocito que caracteriza a la necrólisis epidérmica.',
      epidemiologia: 'Es la forma más frecuente de reacción cutánea a fármacos con diferencia. Los antibióticos, sobre todo betalactámicos y sulfamidas, y los antiepilépticos encabezan la lista.',
      factores_riesgo: ['Antibióticos betalactámicos y sulfamidas', 'Antiepilépticos aromáticos', 'Alopurinol', 'Antiinflamatorios no esteroideos', 'Infección virica concurrente, que aumenta la probabilidad', 'Polimedicacion', 'Exposición previa al mismo fármaco'],
      clinica: 'Maculas y papulas eritematosas simétricas que empiezan en tronco y raíz de miembros y se extienden, a veces confluyendo. Prurito. SIN fiebre alta, sin mucosas, sin dolor cutáneo y sin ampollas. Aparece entre 4 y 14 días tras iniciar el fármaco.',
      criterios_dx: 'Clínico, apoyado en la cronología. La ausencia de las seis banderas de gravedad es lo que permite quedarse tranquilo.',
      laboratorio: 'Hemograma y función hepática y renal para comprobar que no hay eosinofilia ni afectación de órganos. Si son normales y no hay banderas, no hace falta más.',
      imagen: 'No se necesita.',
      complementarios: 'Cronología escrita de todos los fármacos con fechas de inicio, que es lo que después permitira señalar al culpable.',
      dx_diferencial: 'Exantema virico (que puede ser indistinguible, y de hecho a menudo coexisten), exantema por enfermedad de base, sífilis secundaria y las fases iniciales de una farmacodermia grave, que empiezan pareciendose a esta.',
      tx_medico: 'RETIRAR el fármaco sospechoso. Emolientes, y explicar que la resolución tarda una o dos semanas y que suele haber descamación, para que el paciente no crea que empeora.',
      tx_farmacologico: 'Corticoide tópico y antihistamínico para el prurito, sabiendo que el alivio es parcial. El corticoide sistémico rara vez hace falta.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si el paciente esta ingresado, revisar a diario que no aparece ninguna bandera: un exantema aparentemente banal puede ser el primer dia de un DRESS o de un Stevens-Johnson.',
      seguimiento_ambulatorio: 'Documentar el fármaco en la historia y entregar al paciente la información por escrito. Sin ese paso, la reacción se repetira.',
      pronostico: 'Excelente. Se resuelve al retirar el fármaco.',
      algoritmo: ['Comprobar las seis banderas de gravedad', 'Cronología escrita de todos los fármacos', 'Hemograma, función hepática y renal', 'Retirar el fármaco sospechoso', 'Corticoide tópico y antihistamínico para el picor', 'Vigilar por si aparece una bandera', 'Documentar la alergia por escrito']
    },
    {
      nombre: 'Stevens-Johnson y necrólisis epidérmica tóxica',
      color: '#8c2e3a',
      definicion: 'Reacción de hipersensibilidad grave con epidermolisis y despegamiento cutáneo difuso acompañado de necrosis y afectación de mucosas. Son un espectro de la misma enfermedad, separado por el porcentaje de superficie despegada.',
      fisiopatologia: 'Es una hipersensibilidad de tipo IVc: linfocitos T citotóxicos y células asesinas naturales reconocen el fármaco y destruyen los queratinocitos de forma masiva, con granulisina como mediador principal. El resultado es la necrosis de TODO el espesor de la epidermis, que se despega de la dermis como una sábana. Los mecanismos exactos que inician el daño siguen sin estar bien entendidos.',
      epidemiologia: 'Poco frecuente pero de altísima gravedad: la mortalidad en fase aguda va del 10 al 40% según la extensión. La causa principal de muerte es la SEPSIS con fallo multiorgánico posinfeccioso, seguida de la afectación pulmonar.',
      factores_riesgo: ['Alopurinol', 'Antiepilépticos aromáticos: carbamazepina, fenitoína, lamotrigina', 'Sulfamidas', 'Antiinflamatorios de tipo oxicam', 'Nevirapina', 'Infección por VIH', 'Determinados alelos HLA según el fármaco y la etnia'],
      clinica: 'Pródromos inespecíficos, después eritema extenso doloroso, lesiones EN DIANA ATÍPICAS de centro oscuro y ampollas flácidas grandes con signo de NIKOLSKY positivo (la epidermis se despega al frotar suavemente). En torno al 80% de los casos hay afectación de DOS O MÁS mucosas: nasofaringe, orofaringe, ojos, genitales. El dolor cutáneo suele preceder al despegamiento y es una pista precoz.',
      criterios_dx: 'Clínico, apoyado en la biopsia, que muestra necrosis de todo el espesor epidermico. La clasificación depende de la superficie DESPEGADA: menos del 10% es Stevens-Johnson, del 10 a menos del 30% es solapamiento y el 30% o más es necrólisis epidérmica tóxica.',
      laboratorio: 'Hemograma, función renal con urea, bicarbonato, glucemia (las cuatro entran en el SCORTEN), función hepática, reactantes y hemocultivos seriados.',
      imagen: 'Radiografía de tórax por la afectación pulmonar y por la búsqueda de infección.',
      complementarios: 'SCORTEN al ingreso y repetido al tercer dia. Valoración OFTALMOLÓGICA precoz, porque las secuelas oculares son la complicación crónica más incapacitante y son en buena parte evitables. Valoración ginecológica o urológica según las mucosas afectadas.',
      dx_diferencial: 'Síndrome de la piel escaldada estafilocócica (que afecta a la capa granulosa y RESPETA las mucosas), pénfigo paraneoplásico, enfermedad injerto contra huésped aguda, eritema multiforme mayor y quemadura.',
      tx_medico: 'Lo que salva vidas es el soporte, no el inmunomodulador: RETIRADA INMEDIATA del fármaco, ingreso en una unidad de quemados o de críticos con experiencia, control de temperatura ambiental, reposición de líquidos y electrolitos, soporte nutricional precoz, analgesia adecuada (el dolor es intenso) y curas no adherentes con manipulación mínima. Vigilancia activa de la infección, evitando la profilaxis antibiótica sistémica de rutina.',
      tx_farmacologico: 'Es el área de mayor incertidumbre. La guía latinoamericana revisa la evidencia sobre inhibidores del factor de necrosis tumoral: un ensayo aleatorizado no ciego de 2018 con 91 pacientes comparo etanercept (25 o 50 mg dos veces por semana) con prednisolona intravenosa (1 a 1.5 mg/kg/dia); la mortalidad fue menor con etanercept (8.3% frente a 16.3%) sin alcanzar significacion estadistica, y el tiempo hasta la reepitelizacion fue más corto (14 frente a 19 días). Una revisión de 2022 con nueve estudios y 308 pacientes sugirio menor mortalidad con etanercept frente a corticoides sistémicos, con certeza BAJA. La ciclosporina y la inmunoglobulina intravenosa también se han usado, con evidencia igualmente limitada.',
      tx_intervencionista: 'Cuidados de enfermeria especializados en piel, que son determinantes. Desbridamiento según protocolo de la unidad. Cuidado oftalmológico intensivo en la fase aguda para prevenir simblefaron y cicatrices corneales.',
      criterios_uci: 'Prácticamente todos: superficie despegada relevante, inestabilidad, afectación de via aérea o SCORTEN elevado. El traslado a una unidad de quemados debe ser PRECOZ, no cuando el paciente ya esta inestable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Balance hídrico, temperatura, superficie despegada y búsqueda activa de infección a diario. Los signos clásicos de infección son poco fiables en una piel denudada.',
      seguimiento_ambulatorio: 'Las secuelas son la otra mitad de la enfermedad: oculares (ojo seco, simblefaron, ceguera), cutáneas (discromias, cicatrices), ungueales, genitales y psicológicas. Requiere seguimiento multidisciplinar prolongado. Y una tarjeta de alergia con el fármaco identificado, porque una reexposición puede ser mortal.',
      pronostico: 'Mortalidad del 10 al 40% en la fase aguda según la extensión. Entre los supervivientes, las secuelas son frecuentes y la reexposición al fármaco puede ser mortal.',
      algoritmo: ['Reconocer: dolor cutáneo, dianas atípicas, mucosas y Nikolsky', 'RETIRAR de inmediato el fármaco sospechoso', 'Calcular la superficie DESPEGADA y clasificar', 'SCORTEN al ingreso y al tercer dia', 'Traslado PRECOZ a unidad de quemados o críticos', 'Soporte: temperatura, volumen, nutrición, analgesia y curas', 'Valoración oftalmológica precoz', 'Identificar el culpable con ALDEN y documentarlo']
    },
    {
      nombre: 'DRESS: la que llega tarde y afecta a órganos',
      color: '#5a4a8c',
      definicion: 'Reacción a fármacos con exantema, fiebre, adenopatías, alteraciones hematológicas (eosinofilia o linfocitos atípicos) y afectación de al menos un órgano interno, con la latencia más larga de todas las farmacodermias.',
      fisiopatologia: 'Hipersensibilidad retardada con expansión de linfocitos T específicos frente al fármaco y activación eosinofílica intensa. Un rasgo propio es la REACTIVACIÓN de virus del grupo herpes, sobre todo el herpesvirus humano 6, que se asocia a los brotes tardíos y a las recaídas cuando se baja el corticoide. Esa reactivación explica el curso prolongado y ondulante, tan distinto del de las demás farmacodermias.',
      epidemiologia: 'Poco frecuente pero con mortalidad relevante, en buena parte por la afectación hepática. El retraso diagnóstico es la norma, porque la latencia larga hace que se descarte el fármaco como causa precisamente por llevar semanas tomandolo.',
      factores_riesgo: ['Antiepilépticos aromáticos: carbamazepina, fenitoína, lamotrigina, fenobarbital', 'Alopurinol', 'Sulfamidas', 'Vancomicina', 'Minociclina', 'Antituberculosos', 'Determinados alelos HLA'],
      clinica: 'Exantema extenso que puede llegar a eritrodermia, FIEBRE, EDEMA FACIAL (muy característico y de gran valor diagnóstico), adenopatías generalizadas y afectación visceral. El hígado es el órgano más frecuente y el que marca el pronóstico; también riñón (nefritis intersticial), pulmón, corazón (miocarditis, que puede ser tardía) y tiroides.',
      criterios_dx: 'Combinación de exantema, fiebre, adenopatías, eosinofilia o linfocitos atípicos, afectación de al menos un órgano y curso prolongado. Existen sistemas de puntuación que lo graduan en posible, probable o definitivo.',
      laboratorio: 'Hemograma con EOSINOFILIA y linfocitos atípicos, transaminasas, función renal y sedimento, y serologías o carga viral de herpesvirus. Hay que REPETIR la analítica: la afectación de órganos puede aparecer o empeorar después de retirar el fármaco.',
      imagen: 'Ecografía abdominal si hay afectación hepática. Ecocardiograma ante sospecha de miocarditis.',
      complementarios: 'Vigilancia de la función tiroidea a MESES vista, porque la tiroiditis autoinmune es una secuela tardía característica y se diagnostica cuando ya nadie relaciona los síntomas con aquel episodio.',
      dx_diferencial: 'Infección virica aguda (mononucleosis), linfoma, síndrome hipereosinofílico, vasculitis y sepsis.',
      tx_medico: 'Retirada del fármaco y soporte. La clave que diferencia a esta entidad es que el curso es PROLONGADO y ondulante: hay que avisar al paciente y al equipo de que puede haber brotes tardíos y recaídas, sobre todo al reducir el corticoide.',
      tx_farmacologico: 'Corticoide sistémico en los casos con afectación visceral significativa, con descenso LENTO a lo largo de semanas o meses, porque un descenso rápido produce recaída. En formas leves puede bastar con corticoide tópico potente. Evitar añadir fármacos nuevos innecesarios durante la fase aguda, porque hay riesgo de reacciones cruzadas y de confundir el cuadro.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Fallo hepático, miocarditis o inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El trasplante hepático se ha planteado en casos excepcionales de fallo hepático fulminante.',
      seguimiento_hospitalario: 'Analítica seriada de hígado y riñón. Vigilancia de la reactivación viral y de la aparición de miocarditis, que puede ser tardía.',
      seguimiento_ambulatorio: 'Seguimiento PROLONGADO, de meses: función tiroidea, función hepática y vigilancia de autoinmunidad de aparición tardía. Tarjeta de alergia con el fármaco y sus congeneres.',
      pronostico: 'Mortalidad relevante, sobre todo por la afectación hepática. Las secuelas autoinmunes tardías son una particularidad de esta entidad.',
      algoritmo: ['Sospechar ante exantema con fiebre y EDEMA FACIAL', 'Pedir hemograma con fórmula y función hepática y renal', 'Calcular la latencia: de 2 a 8 semanas orienta aquí', 'Retirar el fármaco y NO reintroducirlo', 'Corticoide sistémico si hay afectación visceral', 'Descenso LENTO del corticoide para evitar recaída', 'Vigilar tiroides y autoinmunidad a meses vista']
    },
    {
      nombre: 'Pustulosis exantematica generalizada aguda',
      color: '#8a5a2e',
      definicion: 'Erupción aguda de múltiples pústulas esteriles pequeñas sobre piel eritematosa y edematosa, con fiebre y leucocitosis, desencadenada casi siempre por un fármaco y con la latencia más corta de las farmacodermias graves.',
      fisiopatologia: 'Linfocitos T específicos frente al fármaco producen interleucina 8 y otros factores quimiotacticos, que reclutan neutrófilos de forma masiva hacia la epidermis y forman pústulas SUBCORNEAS esteriles. Es el mismo resultado morfológico que en la psoriasis pustulosa, con la que comparte parte de la via, y de ahi la enorme dificultad para separarlas.',
      epidemiologia: 'Poco frecuente. El desencadenante es un fármaco en la gran mayoría de los casos, típicamente un antibiótico, y la latencia se mide en HORAS o pocos días, no en semanas.',
      factores_riesgo: ['Aminopenicilinas', 'Pristinamicina y otros macrolidos', 'Antagonistas del calcio, sobre todo diltiazem', 'Antipaludicos', 'Antifungicos', 'Antecedente personal o familiar de psoriasis, que complica el diferencial'],
      clinica: 'Aparición brusca de decenas o cientos de pústulas no foliculares de 2 a 3 milimetros sobre una base de eritema y edema, que empieza en pliegues y cara y se generaliza. FIEBRE y leucocitosis con neutrofilia. Al resolverse, en una o dos semanas, deja una descamación característica en collarete.',
      criterios_dx: 'Clínico, apoyado en la biopsia (pústulas subcorneas o intraepidérmicas espongiformes con edema dérmico) y en el cultivo NEGATIVO del contenido pustuloso.',
      laboratorio: 'Leucocitosis con neutrofilia marcada, a veces eosinofilia moderada. Cultivo del pus, que debe ser estéril. Función hepática y renal, porque puede haber afectación sistémica leve.',
      imagen: 'No se necesita salvo sospecha de foco infeccioso.',
      complementarios: 'Historia dirigida a la latencia: un fármaco iniciado ayer o anteayer es el sospechoso principal, al contrario que en el DRESS.',
      dx_diferencial: 'PSORIASIS PUSTULOSA GENERALIZADA, que es el diferencial principal y el más difícil: a favor de la pustulosis por fármacos juegan la latencia corta y clara respecto al fármaco, la fiebre de aparición simultánea y la resolución rápida al retirarlo; a favor de la psoriasis, el antecedente personal de psoriasis y la recurrencia sin fármaco. También foliculitis, infección cutánea y necrólisis epidérmica en su inicio.',
      tx_medico: 'Retirada del fármaco, que suele bastar. Soporte, cuidado de la piel y control de la temperatura. La resolución espontánea en una o dos semanas es la regla.',
      tx_farmacologico: 'Corticoide tópico potente para acortar el curso. El corticoide sistémico se reserva a casos extensos o con afectación sistémica. No hacen falta antibióticos: las pústulas son esteriles, y añadir un antibiótico nuevo en este contexto es a la vez inútil y arriesgado.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: afectación muy extensa con inestabilidad o alteración de la termorregulación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la temperatura y el estado general. Comprobar que las pústulas no se sobreinfectan.',
      seguimiento_ambulatorio: 'Documentar el fármaco. Explicar la descamación en collarete de la resolución para que no se interprete como empeoramiento.',
      pronostico: 'Bueno: se resuelve al retirar el fármaco, con mortalidad baja.',
      algoritmo: ['Reconocer: pústulas pequeñas no foliculares con fiebre', 'Calcular la latencia: horas o pocos días', 'Cultivar el pus para confirmar que es estéril', 'Retirar el fármaco sospechoso', 'Corticoide tópico potente', 'NO añadir antibiótico', 'Separar de la psoriasis pustulosa por la cronología']
    },
    {
      nombre: 'Eritrodermia: cuando la piel deja de ser un órgano',
      color: '#8c3a34',
      definicion: 'Eritema y descamación que afectan a más del 90% de la superficie corporal. Es un patrón de reacción, no una enfermedad: siempre hay una causa detrás.',
      fisiopatologia: 'La vasodilatación cutánea masiva y la pérdida de la barrera producen pérdida de calor (hipotermia, aunque también puede haber fiebre), pérdida de agua por evaporacion (deshidratación), pérdida de proteínas por descamación (hipoalbuminemia) e insuficiencia cardiaca de alto gasto por el aumento del flujo cutáneo. Y la piel denudada es una puerta de entrada enorme para la infección. Es, literalmente, un fallo de órgano.',
      epidemiologia: 'Predomina en varones de edad media o avanzada. Las causas son, por orden: dermatosis inflamatoria previa que se generaliza (psoriasis, dermatitis atópica, dermatitis seborreica), reacciones a FÁRMACOS, linfoma cutáneo de células T y, en una minoría, causa desconocida.',
      factores_riesgo: ['Dermatosis inflamatoria previa extensa', 'Retirada brusca de corticoides sistémicos en un psoriasico', 'Inicio reciente de un fármaco', 'Edad avanzada', 'Linfoma cutáneo de células T subyacente', 'Infección intercurrente'],
      clinica: 'Eritema generalizado con descamación laminar, escalofríos y sensación de frío, prurito, edema (sobre todo de párpados y miembros), taquicardia y adenopatías, que en este contexto suelen ser reactivas. Buscar las pistas de la causa: placas psoriásicas residuales en codos o cuero cabelludo, afectación ungueal, historia de atopia, o un fármaco nuevo.',
      criterios_dx: 'Clínico por la extensión. Lo que exige trabajo no es el diagnóstico de eritrodermia sino el de su CAUSA.',
      laboratorio: 'Hemograma (buscando eosinofilia y células de Sezary), albúmina, ionograma, función renal y hepática, reactantes y hemocultivos si hay fiebre. Frotis de sangre periférica y citometría si se sospecha linfoma.',
      imagen: 'Tomografía y estudio de extensión si se confirma un linfoma cutáneo. Ecocardiograma si hay datos de insuficiencia cardiaca de alto gasto.',
      complementarios: 'BIOPSIA, que puede necesitar repetirse en varias localizaciones y en el tiempo, porque en la eritrodermia la histología suele ser inespecífica al principio y solo después muestra el patrón de la enfermedad de base.',
      dx_diferencial: 'Entre las causas: psoriasis, dermatitis atópica, dermatitis seborreica, fármacos, linfoma cutáneo de células T y síndrome de Sezary, pitiriasis rubra pilaris y pénfigo foliaceo.',
      tx_medico: 'INGRESO en la mayoría de los casos. El soporte es lo que salva: control de la temperatura ambiental, reposición de líquidos y electrolitos, corrección de la hipoalbuminemia, nutrición, emolientes en abundancia y curas suaves, y búsqueda activa de infección. Retirar todo fármaco no imprescindible.',
      tx_farmacologico: 'Depende de la causa. Corticoide tópico de potencia media bajo vendaje húmedo como medida sintomática inicial. El corticoide SISTÉMICO es peligroso si la causa es una psoriasis, porque su retirada precipita un brote pustuloso: por eso conviene identificar la causa antes de instaurarlo.',
      tx_intervencionista: 'No aplica. Los cuidados de enfermeria especializados son determinantes.',
      criterios_uci: 'Inestabilidad hemodinámica, hipotermia refractaria, insuficiencia cardiaca de alto gasto o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Constantes con temperatura, balance hídrico, albúmina, ionograma y función renal a diario. Vigilancia activa de infección, que es la causa principal de mortalidad.',
      seguimiento_ambulatorio: 'Seguir hasta identificar la causa. Si no se aclara, repetir biopsias en el tiempo: parte de las eritrodermias idiopáticas acaban revelandose como linfoma cutáneo años después.',
      pronostico: 'Depende de la causa y de la edad. Las de origen farmacológico y las secundarias a una dermatosis conocida tienen mejor pronóstico que las asociadas a linfoma.',
      algoritmo: ['Confirmar la extensión y valorar el estado general', 'Ingresar y estabilizar: temperatura, volumen y albúmina', 'Retirar todo fármaco no imprescindible', 'Buscar pistas de la causa en piel, uñas e historia', 'Biopsiar, y repetir si es inespecífica', 'Vigilancia activa de infección', 'Cuidado con el corticoide sistémico si puede ser psoriasis']
    },
    {
      nombre: 'Identificar al culpable y evitar la reexposición',
      color: '#3d5a73',
      definicion: 'Proceso de atribuir la reacción a un fármaco concreto entre varios posibles, y de dejar constancia de forma que la información llegue a quien prescriba en el futuro.',
      fisiopatologia: 'No aplica: es un problema de razonamiento y de sistema, no de mecanismo. Pero se apoya en uno: cada tipo de reacción tiene una VENTANA DE LATENCIA propia, determinada por el tiempo que tarda en montarse la respuesta inmunitaria correspondiente.',
      epidemiologia: 'El paciente típico es polimedicado y lleva varios fármacos nuevos a la vez. Sin un método, se acaba retirando el fármaco más fácil de sustituir en lugar del responsable, y el paciente queda etiquetado de alérgico a algo que tolera.',
      factores_riesgo: ['Polimedicacion', 'Varios fármacos iniciados en la misma semana', 'Historia clínica incompleta o sin fechas', 'Cambio de nivel asistencial durante el episodio', 'Ausencia de un sistema de registro de alergias'],
      clinica: 'La herramienta principal es una CRONOLOGÍA escrita: todos los fármacos con su fecha de inicio y de fin, cruzada con la fecha de inicio de la reacción. Suele bastar para descartar la mitad de los sospechosos.',
      criterios_dx: 'La guía latinoamericana sugiere usar el algoritmo ALDEN cuando hay dudas sobre el fármaco causante de una necrólisis epidérmica. Valora la latencia, si el fármaco estaba presente el dia del inicio, la exposición previa, la notoriedad del fármaco como causa conocida y la presencia de causas alternativas.',
      laboratorio: 'Las pruebas cutáneas en fase tardía (epicutaneas o intradermicas de lectura retardada) y las pruebas de transformación linfocitaria pueden ayudar en algunos casos, y se hacen SIEMPRE en fase de resolución y en centros con experiencia.',
      imagen: 'No aplica.',
      complementarios: 'La REEXPOSICIÓN controlada esta contraindicada de forma absoluta tras una necrólisis epidérmica, un DRESS o una pustulosis generalizada: puede ser mortal.',
      dx_diferencial: 'Causa infecciosa (sobre todo virica) que imita una farmacodermia, y enfermedad de base que produce exantema.',
      tx_medico: 'Lo que cierra el caso no es el diagnóstico sino el REGISTRO: anotar el fármaco, la reacción concreta y la fecha en la historia, entregar al paciente un informe y una tarjeta, y explicarle que debe mencionarlo siempre. Incluir los fármacos con reactividad cruzada conocida.',
      tx_farmacologico: 'Dejar por escrito alternativas seguras concretas para las indicaciones que el paciente necesita. Un informe que solo dice lo que no puede tomar deja al siguiente médico sin salida.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar antes del alta que la alergia esta registrada en el sistema y que consta en el informe.',
      seguimiento_ambulatorio: 'Derivación a alergologia para el estudio en fase de resolución cuando el culpable no esta claro y el fármaco es difícil de sustituir.',
      pronostico: 'Excelente si se identifica y se evita. Una reexposición tras una reacción grave puede ser mortal, y ese es todo el motivo de este trabajo.',
      algoritmo: ['Cronología escrita de TODOS los fármacos con fechas', 'Cruzarla con la ventana de latencia del tipo de reacción', 'Aplicar ALDEN si persiste la duda', 'Retirar el sospechoso principal', 'Registrar en la historia con la reacción concreta', 'Entregar informe y tarjeta al paciente', 'Anotar alternativas seguras, no solo prohibiciones']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Casi todas las farmacodermias graves empiezan en un paciente que ya esta ingresado por otra cosa. El internista es quien las ve primero, y lo que hace en las primeras horas cambia el resultado.',
    parametros: [
      'Ante cualquier exantema en un paciente ingresado, comprobar las SEIS BANDERAS: fiebre, mucosas, dolor cutáneo, edema facial, ampollas o Nikolsky, y alteración analítica.',
      'Hacer una cronología escrita de todos los fármacos con sus fechas de inicio antes de retirar nada, porque después la información se pierde.',
      'Dolor cutáneo que precede a las lesiones: es el aviso precoz de la necrólisis epidérmica. No esperar a las ampollas.',
      'Edema facial con eosinofilia: pedir función hepática hoy y repetirla, porque el DRESS puede empeorar después de retirar el fármaco.',
      'En la necrólisis epidérmica, el traslado a una unidad de quemados debe ser PRECOZ, y la valoración oftalmológica también: las secuelas oculares son en buena parte evitables.',
      'No añadir fármacos nuevos innecesarios durante la fase aguda de una farmacodermia, y evitar la profilaxis antibiótica sistémica de rutina en la necrólisis.',
      'Antes del alta, comprobar que la alergia esta registrada en el sistema, en el informe y en una tarjeta para el paciente.'
    ],
    criterios_uci_general: 'Necrólisis epidérmica tóxica con superficie despegada relevante o SCORTEN elevado; DRESS con fallo hepático o miocarditis; eritrodermia con inestabilidad, hipotermia refractaria o sepsis.',
    criterios_tips_general: 'No aplica en farmacodermias.',
    criterios_trasplante_general: 'Trasplante hepático en casos excepcionales de fallo hepático fulminante por DRESS.',
    prevencion: 'Revisar siempre las alergias registradas antes de prescribir, evitar los fármacos con reactividad cruzada conocida, no reexponer nunca tras una reacción grave, limitar la polimedicacion innecesaria, y dejar constancia por escrito de la reacción y de las alternativas seguras.'
  }
};

export const compCites = {
  'Exantema maculopapular: lo frecuente y benigno': { epidemiologia: [2], fisiopatologia: [2], criterios_dx: [2], laboratorio: [2], tx_farmacologico: [2] },
  'Stevens-Johnson y necrólisis epidérmica tóxica': { definicion: [1], criterios_dx: [1], fisiopatologia: [1], epidemiologia: [1], tx_farmacologico: [1], complementarios: [1], laboratorio: [1] },
  'DRESS: la que llega tarde y afecta a órganos': { fisiopatologia: [2], criterios_dx: [2], laboratorio: [2], tx_farmacologico: [2] },
  'Pustulosis exantematica generalizada aguda': { fisiopatologia: [2], dx_diferencial: [2], criterios_dx: [2], laboratorio: [2], tx_farmacologico: [2] },
  'Eritrodermia: cuando la piel deja de ser un órgano': { fisiopatologia: [3], epidemiologia: [3], complementarios: [3], criterios_dx: [3], laboratorio: [3], tx_farmacologico: [3] },
  'Identificar al culpable y evitar la reexposición': { criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1] }
};

export const estigmasTitulo = 'Signos que hay que buscar de forma activa';
export const estigmas = [
  { nombre: 'Signo de Nikolsky', descripcion: 'Al frotar suavemente la piel aparentemente sana, la epidermis se despega. Indica despegamiento activo y es propio de la necrólisis epidérmica tóxica y del síndrome de la piel escaldada estafilocócica.' },
  { nombre: 'Dolor cutáneo', descripcion: 'Que la piel DUELA antes de que aparezcan ampollas es uno de los avisos más precoces de la necrólisis epidérmica. Se pregunta y casi nunca se pregunta.' },
  { nombre: 'Diana atípica', descripcion: 'Lesión con dos zonas y bordes mal definidos, de centro oscuro o purpúrico, distinta de la diana típica de tres anillos del eritema multiforme. Anuncia el despegamiento.' },
  { nombre: 'Edema facial', descripcion: 'Muy característico del DRESS y de gran valor diagnóstico. Un exantema con la cara hinchada obliga a pedir hemograma y función hepática ese mismo dia.' },
  { nombre: 'Descamación en collarete', descripcion: 'Al resolverse la pustulosis exantematica generalizada aguda, la piel se descama en collaretes. Es un dato de la fase de resolución que ayuda a confirmar retrospectivamente el diagnóstico.' },
  { nombre: 'Afectación de dos o más mucosas', descripcion: 'Presente en alrededor del 80% de los casos de necrólisis epidérmica: nasofaringe, orofaringe, ojos y genitales. Su ausencia es uno de los datos que apoya el síndrome de la piel escaldada.' }
];

export const biopsiaTitulo = 'Biopsia cutánea: que confirma cada patrón';
export const biopsia = {
  indicaciones: [
    'Sospecha de necrólisis epidérmica tóxica, para confirmar y separar del síndrome de la piel escaldada',
    'Pustulosis generalizada, para confirmar las pústulas subcorneas y descartar psoriasis pustulosa',
    'Eritrodermia de causa no aclarada, buscando el patrón de la enfermedad de base',
    'Exantema atípico que no encaja con ninguna de las entidades conocidas',
    'Sospecha de linfoma cutáneo de células T como causa de eritrodermia'
  ],
  ventajas: [
    'Necrólisis epidérmica: necrosis de TODO el espesor epidermico con despegamiento subepidérmico',
    'Síndrome de la piel escaldada: despegamiento alto, en la capa granulosa, que es la clave del diferencial',
    'Pustulosis exantematica: pústulas subcorneas o intraepidérmicas espongiformes con edema dérmico',
    'Permite una muestra por congelación para un resultado rápido cuando el diferencial es urgente'
  ],
  limitaciones: [
    'En la eritrodermia la histología suele ser INESPECÍFICA al principio y obliga a repetirla en el tiempo',
    'No distingue la pustulosis por fármacos de la psoriasis pustulosa: esa separación es clínica y cronológica',
    'No identifica el fármaco responsable',
    'El resultado no debe retrasar la retirada del fármaco ni el traslado a la unidad adecuada'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la coagulación y el riesgo de infección en piel denudada',
    'Elegir una zona de borde activo y evitar las áreas ya despegadas o sobreinfectadas',
    'En un paciente inestable, la prioridad es el soporte y el traslado, no la muestra'
  ]
};

export const escalaRefs = { 'Superficie despegada (calculadora disponible)': [1], 'SCORTEN (calculadora disponible)': [1], 'Banderas de gravedad (calculadora disponible)': [2], 'Cronología del fármaco (calculadora disponible)': [2], 'Criterios de DRESS': [2], 'Algoritmo ALDEN': [1] };

export const escalaCalc = {
  'Superficie despegada (calculadora disponible)': 'scorten',
  'SCORTEN (calculadora disponible)': 'scorten',
  'Banderas de gravedad (calculadora disponible)': 'banderas-farmaco',
  'Cronología del fármaco (calculadora disponible)': 'cronologia-farmaco'
};

export const compGroups = [
  { title: 'Lo frecuente', items: ['Exantema maculopapular: lo frecuente y benigno'] },
  { title: 'Las graves', items: ['Stevens-Johnson y necrólisis epidérmica tóxica', 'DRESS: la que llega tarde y afecta a órganos', 'Pustulosis exantematica generalizada aguda'] },
  { title: 'La piel como órgano en fallo', items: ['Eritrodermia: cuando la piel deja de ser un órgano'] },
  { title: 'Despues', items: ['Identificar al culpable y evitar la reexposición'] }
];

export const complicacionesIntro = 'La primera ficha es lo que se ve casi siempre y no pasa nada, y sirve sobre todo para saber reconocer que NO es. Las tres siguientes son las farmacodermias graves, ordenadas por lo que de verdad las separa en la cabecera del paciente: la latencia y el órgano afectado. La quinta es la eritrodermia, que no es una enfermedad sino un estado en el que la piel deja de funcionar como órgano y en el que el soporte importa más que el diagnóstico las primeras horas. Y la última es la parte que casi nunca se hace bien y que decide si el paciente vuelve a pasar por lo mismo: identificar al culpable y dejarlo escrito.';

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
    { title: 'Benigna', sub: 'Exantema maculopapular &middot; la mayoría', color: '#3f6b52', target: 'complicaciones' },
    { title: 'Grave', sub: 'Seis banderas &middot; ~2% de los casos', color: '#8c2e3a', target: 'complicaciones', leaves: [
      { title: 'Pustulosis aguda', sub: 'Latencia de 1 a 2 días', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Stevens-Johnson y necrólisis', sub: '1 a 3 semanas &middot; mucosas', color: '#8c2e3a', target: 'complicaciones' },
      { title: 'DRESS', sub: '2 a 8 semanas &middot; órganos', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'Eritrodermia', sub: 'Más del 90% &middot; fallo de órgano', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Buscar la causa', sub: 'Dermatosis, fármaco o linfoma', color: '#3d5a73', target: 'complicaciones' }
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
            <tr><td class="figure-org">Afectación de MUCOSAS</td><td>Stevens-Johnson y necrólisis epidérmica (en el 80% hay dos o más mucosas)</td></tr>
            <tr><td class="figure-org">DOLOR de la piel</td><td>Necrólisis epidérmica. Precede al despegamiento: es el aviso más precoz</td></tr>
            <tr><td class="figure-org">EDEMA FACIAL</td><td>DRESS. Muy característico y de gran valor diagnóstico</td></tr>
            <tr><td class="figure-org">Ampollas o signo de Nikolsky</td><td>Despegamiento activo: necrólisis epidérmica</td></tr>
            <tr><td class="figure-org">Alteración ANALÍTICA</td><td>Eosinofilia y linfocitos atípicos: DRESS. Neutrofilia: pustulosis aguda</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos datos más que no son banderas pero que alarman igual: la <strong>extensión rápida y progresiva</strong> pese a haber retirado el fármaco, y las <strong>lesiones en diana atípicas</strong> de centro oscuro. Si no hay ninguna de las seis banderas ni estos dos datos, la probabilidad de que sea un exantema benigno es muy alta y basta con retirar el fármaco y vigilar. Si hay una sola, hay que parar y pensar: la diferencia entre estas dos situaciones es la que hay entre una consulta y una unidad de quemados.</div>`
  },
  'farmaco-latencias': {
    titulo: 'La latencia señala al culpable',
    fuente: 'Hoetzenecker W, et al. Semin Immunopathol 2016, y guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy Organ J 2025;18(4):101046).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Reacción</th><th>Latencia típica</th><th>Pista que la identifica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Urticaria o anafilaxia</td><td><span class="figure-tag fail">Minutos a horas</span></td><td>Habones fugaces; si hay hipotensión o broncoespasmo, es anafilaxia</td></tr>
            <tr><td class="figure-org">Pustulosis exantematica aguda</td><td><span class="figure-tag fail">1 a 2 días</span></td><td>Pústulas pequeñas esteriles, fiebre y neutrofilia</td></tr>
            <tr><td class="figure-org">Exantema maculopapular</td><td>4 a 14 días</td><td>Pica, no hay mucosas ni analítica alterada</td></tr>
            <tr><td class="figure-org">Stevens-Johnson y necrólisis</td><td>1 a 3 semanas</td><td>Dolor cutáneo, dianas atípicas, mucosas, Nikolsky</td></tr>
            <tr><td class="figure-org">DRESS</td><td><span class="figure-tag dys">2 a 8 semanas</span></td><td>Edema facial, eosinofilia, hígado</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Aquí esta el error que más se repite: <strong>descartar un fármaco por llevar semanas tomandolo</strong>. En el DRESS eso es justamente lo esperable, porque su latencia es la más larga de todas. Y al revés: un fármaco iniciado ayer casi nunca explica un DRESS, pero es el sospechoso principal de una pustulosis aguda. Antes de retirar nada conviene escribir la <strong>cronología completa</strong> con las fechas de inicio de todos los fármacos, porque después esa información se pierde.</div>`
  },
  'scorten-tabla': {
    titulo: 'SCORTEN y clasificación por superficie despegada',
    fuente: 'Guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy Organ J 2025;18(4):101046, doi:10.1016/j.waojou.2025.101046).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Superficie DESPEGADA</th><th>Diagnóstico</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Menos del 10%</td><td>Síndrome de Stevens-Johnson</td></tr>
            <tr><td class="figure-org">Del 10 a menos del 30%</td><td>Síndrome de solapamiento</td></tr>
            <tr><td class="figure-org">30% o más</td><td><span class="figure-tag fail">Necrólisis epidérmica tóxica</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>SCORTEN: un punto por cada variable</th></tr></thead>
          <tbody>
            <tr><td>Edad de 40 años o más</td></tr>
            <tr><td>Neoplasia asociada</td></tr>
            <tr><td>Frecuencia cardiaca de 120 por minuto o más</td></tr>
            <tr><td>Superficie despegada mayor del 10%</td></tr>
            <tr><td>Urea sérica elevada</td></tr>
            <tr><td>Bicarbonato sérico bajo</td></tr>
            <tr><td>Glucemia elevada</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos precisiones que cambian el resultado. La primera: solo cuenta la piel <strong>DESPEGADA o despegable</strong>, no el eritema; contar el eritema sobrestima la gravedad y es el error más común. Se calcula con la regla de los nueves de Wallace o, mejor, con el método de <strong>Lund-Browder</strong>, que es más preciso. La segunda: el SCORTEN se calcula en las primeras 24 horas y conviene <strong>repetirlo al tercer dia</strong>, porque así predice mejor. La mortalidad en fase aguda va del 10 al 40% según la extensión, y la causa principal de muerte es la <strong>sepsis</strong>.</div>`
  }
};
