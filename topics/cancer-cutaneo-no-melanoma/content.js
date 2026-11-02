// topics/cancer-cutaneo-no-melanoma/content.js - Modulo 80: Cancer cutaneo no melanoma y
// sarcoma de Kaposi.
// Fuentes: guia GRADE de carcinoma basocelular de la Asociacion Italiana de Oncologia Medica
// (Queirolo P, et al. ESMO Open 2023), guia GRADE de carcinoma epidermoide cutaneo de la misma
// asociacion (Queirolo P, et al. ESMO Open 2024) y el primer de sarcoma de Kaposi de Nature
// Reviews Disease Primers (Cesarman E, et al. 2019), que esta en Bibliografia/.
// NOTA DE ALCANCE 1: las dos guias italianas son GRADE y las firma Ketty Peris, que lidera las
// guias EADO europeas; cubren el mismo terreno y ademas declaran la FUERZA de cada recomendacion
// y la CALIDAD de la evidencia, que en este tema es baja con mucha frecuencia. Cuando el texto da
// una recomendacion, dice las dos cosas, porque "fuerte a favor con calidad muy baja" significa
// algo distinto de "fuerte a favor con calidad alta" y aqui pasan las dos.
// NOTA DE ALCANCE 2: la fuente de Kaposi es de 2019. Se eligio porque es un primer completo de 21
// paginas y porque en acceso abierto no hay guia ni revision amplia posterior; su limite es que
// no recoge los cambios terapeuticos mas recientes, y eso queda dicho en la ficha de tratamiento.
// ALCANCE 3: la morfologia de la lesion (perla, telangiectasias, borde enrollado, nodulo
// hiperqueratosico) vive en Exploracion de piel y faneras y NO se repite; el melanoma es el
// modulo 79. Aqui empieza cuando la lesion ya es sospechosa: riesgo, margenes y que hacer cuando
// la cirugia no basta.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'cancer-cutaneo-no-melanoma',
  titulo: 'Cáncer cutáneo no melanoma y sarcoma de Kaposi',
  subtitulo: 'Módulo 80 &middot; Dermatología',
  accent: '#4a6b7a',
  accentDim: '#6b8a99'
};

export const definicionText = `<p style="margin:0 0 14px;">Los dos <strong>carcinomas queratinociticos</strong>, el basocelular y el epidermoide, son el cáncer más frecuente del ser humano, y su historia entera es la <strong>radiación ultravioleta acumulada</strong>. Lo que los separa es una sola cosa, y es la que ordena el tema: la <strong>capacidad de metastatizar</strong>. El basocelular prácticamente no lo hace, con una incidencia de metástasis estimada entre el 0,0028% y el 0,55%, de modo que su problema es la <strong>destrucción local</strong>; el epidermoide si puede, y por eso tiene criterios de alto riesgo, estadificación y tratamiento sistémico. De ahi que la pregunta útil ante un epidermoide no sea "¿qué es?" sino <strong>"¿es de alto riesgo?"</strong>, y la respuesta este en el informe de patología.</p>
<p style="margin:0 0 14px;">El <strong>sarcoma de Kaposi</strong> esta en este módulo por una razón de medicina interna, no de dermatología: no es un tumor de queratinocitos ni lo causa el sol, sino un <strong>virus</strong>, el herpesvirus humano 8, que se convierte en tumor cuando la inmunidad del huésped falla. Y ese es justamente el hilo que une los tres: el <strong>paciente inmunodeprimido</strong>. El receptor de un trasplante de órgano sólido tiene un riesgo de carcinoma epidermoide <strong>de 65 a 250 veces mayor</strong> que la población general, y el Kaposi yatrogeno aparece después del injerto con un riesgo que sigue al grado de inmunosupresión. Quien lleva la inmunosupresión de ese paciente es el internista.</p>
<p style="margin:0 0 14px;">Una advertencia sobre como leer este tema. Las dos guías en las que se apoya son <strong>GRADE</strong>, de modo que cada recomendación viene con su fuerza y con la calidad de la evidencia que la sostiene, y aquí esas dos cosas se separan mucho: hay recomendaciones <strong>fuertes a favor con calidad de evidencia muy baja</strong>, como los inhibidores de Hedgehog en el basocelular localmente avanzado, porque sencillamente no hay alternativa y por eso no se pudo hacer un ensayo aleatorizado. Saber distinguir "esto funciona" de "esto es lo único que hay" es parte de lo que el tema enseña.</p>`;

export const bibliografia = [
  'Queirolo P, Cinquini M, Argenziano G, et al. Guidelines for the diagnosis and treatment of basal cell carcinoma: a GRADE approach for evidence evaluation and recommendations by the Italian Association of Medical Oncology. ESMO Open. 2023;8(6):102037. doi:10.1016/j.esmoop.2023.102037.',
  'Queirolo P, Cinquini M, Argenziano G, et al. Guidelines for the diagnosis and treatment of cutaneous squamous cell carcinoma: a GRADE approach for evidence evaluation and recommendations by the Italian Association of Medical Oncology. ESMO Open. 2024;9(5):103005. doi:10.1016/j.esmoop.2024.103005.',
  'Cesarman E, Damania B, Krown SE, Martin J, Bower M, Whitby D. Kaposi sarcoma. Nat Rev Dis Primers. 2019;5(1):9. doi:10.1038/s41572-019-0060-9.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Los dos carcinomas queratinociticos',
      tituloB: 'Lo que cambia la conducta',
      compensada: 'BASOCELULAR: es el cáncer más frecuente y su pronóstico es excelente. Lo que importa de su presentación es que el subtipo se corresponde con el patrón de exposición solar, y eso ayuda a reconocerlo: el NODULAR se asocia a exposición crónica, predomina en cabeza y cuello y aumenta con la edad; el SUPERFICIAL se asocia a exposición solar INTERMITENTE y predomina en el TRONCO. Un detalle que explica por que el basocelular aparece antes en la vida que el epidermoide y en sitios menos expuestos: necesita una dosis acumulada de ultravioleta MENOR. EPIDERMIDE: en el 90% de los casos nace en zonas crónicamente expuestas, cabeza, cuello y dorso de manos y antebrazos, y su incidencia sube de forma marcada con la edad. Su diagnóstico clínico y dermatoscopico es más difícil que el del basocelular, porque las formas tempranas pueden parecer un basocelular o incluso una enfermedad inflamatoria.',
      descompensada: 'Lo que convierte el caso en otro problema. En el BASOCELULAR: que no sea abordable ni con cirugía ni con radioterapia con intención curativa razonable, que es la definición práctica de LOCALMENTE AVANZADO y lo que abre la puerta al tratamiento sistémico. En el EPIDERMIDE, los rasgos de ALTO RIESGO del informe: espesor mayor de 6 mm, mala diferenciación celular, tumor recurrente, invasión perineural, extensión profunda al tejido subcutáneo, y la localización en OREJA o LABIO. Y en los tres tumores, el dato del paciente que más pesa: la INMUNOSUPRESIÓN, sea por trasplante de órgano sólido o de progenitores, por enfermedad autoinmune tratada, por neoplasia avanzada o por una hemopatia. Ojo también con los inhibidores de BRAF, que pueden provocar epidermoides eruptivos.'
    },
    laboratorio: [
      { prueba: 'Biopsia e histología', utilidad: 'Es el diagnóstico, y en el epidermoide es además la estratificación del riesgo: el espesor, el grado de diferenciación, la invasión perineural y la extensión al subcutáneo salen de ahi. En la variante PIGMENTADA de la queratosis actínica, que comparte rasgos clínicos y dermatoscopicos con el lentigo maligna, la guía considera obligatoria la biopsia, aunque sea incisional, para confirmar el diagnóstico.' },
      { prueba: 'Análisis de márgenes', utilidad: 'La extirpacion quirúrgica permite confirmar el diagnóstico y evaluar los márgenes, intraoperatorios o posoperatorios, con tasas de curación del 95%. Es la razón por la que las técnicas destructivas (crioterapia, curetaje y electrocoagulacion, terapia fotodinamica) y los tópicos tienen un limite estructural: NO permiten analizar el margen histológico.' },
      { prueba: 'Inmunohistoquímica en el sarcoma de Kaposi', utilidad: 'El diagnóstico de Kaposi es histológico. Y hay un motivo muy concreto para no quedarse en la inspección: en un estudio de África oriental el diagnóstico VISUAL aislado tuvo solo un 80% de valor predictivo positivo, de modo que algunos pacientes recibieron quimioterapia sin necesitarla y a otros se les paso un diagnóstico tratable, como la angiomatosis bacilar.' },
      { prueba: 'Serología de VIH y recuento de CD4', utilidad: 'Ante un Kaposi, obligado. El riesgo de Kaposi asociado al sida sube al bajar el recuento de CD4 y baja con el tratamiento antirretroviral. Y funciona en los dos sentidos: un Kaposi puede ser la forma de presentación de una infección por VIH no conocida.' },
      { prueba: 'Valoración de la inmunosupresión', utilidad: 'En el trasplantado, saber que lleva y cuanto: el riesgo de Kaposi yatrogeno se correlaciona con el GRADO de inmunosupresión, de modo que es mayor en los trasplantes multiorgano y con mayor disparidad HLA. En el epidermoide, todos los inmunosupresores y biológicos aumentan el riesgo, aunque en grado distinto.' },
      { prueba: 'Quimioprevencion: a quien', utilidad: 'En personas de alto riesgo de epidermoide, la guía permite considerar quimioprevencion (recomendación condicional a favor, calidad baja). En el análisis de ocho ensayos con 626 pacientes, el beneficio se concentro en los RETINOIDES y en el celecoxib; para la nicotinamida y los antioxidantes el intervalo de confianza quedaba alrededor de cero, es decir, sin efecto demostrado.' }
    ],
    no_invasivos: [
      { metodo: 'Dermatoscopia', interpretacion: 'En el BASOCELULAR la recomendación es FUERTE a favor y, lo que es poco habitual en este tema, con calidad de evidencia ALTA: debe usarse como primera opción frente a la inspección visual sola. En el EPIDERMIDE la recomendación es también a favor pero CONDICIONAL y por opinion de expertos, porque no hay estudios que la validen específicamente para este tumor; se extrapola de su papel en el melanoma y en otras lesiones.', cutoff: 'Basocelular: fuerte a favor, calidad alta' },
      { metodo: 'Microscopia confocal de reflectancia', interpretacion: 'En lesiones sospechosas, puede considerarse como primera opción frente a la dermatoscopia sola para detectar el basocelular (condicional a favor, calidad moderada). Es una herramienta de segundo nivel y su disponibilidad es el limite real.', cutoff: 'Condicional a favor, calidad moderada' },
      { metodo: 'Criterios de alto riesgo del epidermoide (calculadora disponible)', interpretacion: 'Espesor vertical mayor de 6 mm, mala diferenciación, tumor recurrente, invasión perineural, extensión profunda al subcutáneo, y localización en oreja o labio. No es una puntuación: es una lista, y basta uno para cambiar el margen, la indicación de imagen y el seguimiento.', cutoff: 'Basta UN rasgo para ser de alto riesgo' },
      { metodo: 'Margen quirúrgico por riesgo (calculadora disponible)', interpretacion: 'Basocelular operable: margen clínico de 3 mm o más (fuerte a favor, calidad moderada). Epidermoide de BAJO riesgo: 4 mm o más, que en lesiones menores de 2 cm consigue extirpacion completa en más del 95% de los casos; por encima de 2 cm se recomiendan 6 mm. Epidermoide de ALTO riesgo: 6 mm o más. Las guías europeas EDF-EADO-EORTC piden 5 mm como mínimo en el de bajo riesgo y de 6 a 10 mm en el de alto riesgo.', cutoff: 'Basocelular 3 mm &middot; epidermoide 4 o 6 mm' },
      { metodo: 'Clasificación ACTG TIS del Kaposi', interpretacion: 'El Kaposi NO esta en el sistema TNM de la AJCC. Para el asociado al sida se usa la clasificación modificada del AIDS Clinical Trials Group, que es un TIS: Tumor, estado Inmunitario y enfermedad Sistémica. El Kaposi clásico tiene su propia clasificación, centrada solo en el tumor y nacida de una serie de 300 pacientes. Para el endémico y el yatrogeno no hay sistema específico.', cutoff: 'TIS: tumor, inmunidad y enfermedad sistémica' },
      { metodo: 'Como leer la fuerza GRADE', interpretacion: 'Cada recomendación de las dos guías trae dos etiquetas independientes. La FUERZA (fuerte o condicional, a favor o en contra) dice cuanto se confia en que los beneficios superen a los daños; la CALIDAD (alta, moderada, baja, muy baja, u opinion de expertos) dice cuanto se confia en los datos. Pueden ir en direcciones opuestas: el caso extremo del tema es el de los inhibidores de Hedgehog, con recomendación FUERTE a favor y calidad MUY BAJA.', cutoff: 'Fuerza y calidad son dos cosas distintas' }
    ],
    imagen: [
      { modalidad: 'Estadificación basal en el basocelular avanzado', hallazgos: 'En el localmente avanzado y en el metastásico puede recomendarse una valoración radiológica basal, y también en el seguimiento (las dos, condicionales a favor y por opinion de expertos). En el basocelular operable común no hay indicación de imagen.' },
      { modalidad: 'Estadificación en el epidermoide de alto riesgo', hallazgos: 'En el de alto riesgo puede considerarse una estadificación instrumental basal para detectar metástasis extracutaneas, y también imagen en el seguimiento (condicionales a favor, calidad muy baja en las dos). En el epidermoide de bajo riesgo no procede.' },
      { modalidad: 'Lo que NO se pide en el sarcoma de Kaposi', hallazgos: 'Las lesiones viscerales son INFRECUENTES: en un estudio, solo el 15% de 469 pacientes con Kaposi asociado al sida las tenia al diagnóstico. La TC, la broncoscopia y la endoscopia NO están justificadas en ausencia de síntomas que las sugieran, y el cribado del aparato respiratorio y del digestivo tampoco se recomienda, porque es raro que haya Kaposi visceral sin lesiones visibles en piel o mucosas.' },
      { modalidad: 'La excepción que si merece mirarse', hallazgos: 'La CAVIDAD ORAL. Es con frecuencia la primera localización del Kaposi asociado al sida y es la que el propio paciente puede no ver, de modo que es el único sitio donde el cribado tiene sentido. Mirar la boca cuesta diez segundos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `No hay una clasificación única para los tres tumores, porque son tres enfermedades distintas. Lo que hay son <strong>tres preguntas</strong>, una por tumor. En el <strong>basocelular</strong>: ¿es operable, es localmente avanzado o es metastásico? El escalón que importa es el segundo, porque "localmente avanzado" significa que no es abordable con cirugía ni con radioterapia con intención curativa razonable, y ahi entra el tratamiento sistémico. En el <strong>epidermoide</strong>: ¿es de alto riesgo? Y eso se responde con una lista de seis rasgos del informe, de los que basta uno. En el <strong>Kaposi</strong>: ¿cuál de las formas epidemiológicas es? Porque la forma determina el tratamiento mucho más que la extensión, hasta el punto de que en dos de ellas el tratamiento consiste en arreglar la inmunidad y no en tratar el tumor.`,
    escalas: [
      { nombre: 'Riesgo del carcinoma epidermoide (calculadora disponible)', componentes: 'Espesor vertical, grado de diferenciación, antecedente de recurrencia, invasión perineural, extensión al tejido subcutáneo y localización.', formula: 'Lista de rasgos, no puntuación: basta UNO para clasificar el tumor como de alto riesgo.', interpretacion: 'Los seis rasgos son: espesor mayor de 6 mm, mala diferenciación celular, tumor recurrente, invasión perineural, extensión profunda al subcutáneo y localización en OREJA o LABIO. De esta respuesta dependen el margen quirúrgico, la indicación de cirugía de Mohs, la de radioterapia adyuvante y la de imagen basal y de seguimiento. Las guías europeas añaden el umbral de 6 mm de espesor como criterio por si solo.' },
      { nombre: 'Margen quirúrgico según el tumor y el riesgo (calculadora disponible)', componentes: 'Tipo de tumor, tamaño y clasificación de riesgo.', formula: 'Basocelular operable: 3 mm o más. Epidermoide de bajo riesgo: 4 mm o más, y 6 mm si supera los 2 cm. Epidermoide de alto riesgo: 6 mm o más.', interpretacion: 'El margen de 3 mm del basocelular tiene recomendación FUERTE a favor con calidad moderada, que es de lo más sólido del tema. Los del epidermoide son condicionales y por opinion de expertos, porque no hay estudios que fijen el mínimo: se apoyan en el trabajo prospectivo de Brodland y Zitelli de 1992, en el que 4 mm bastaban para extirpar por completo más del 95% de las lesiones de menos de 2 cm. Ampliar márgenes no es gratis: más complicaciones, más cicatriz, más dolor y más sangrado.' },
      { nombre: 'Basocelular: operable, localmente avanzado o metastásico', componentes: 'Posibilidad de cirugía o de radioterapia con intención curativa razonable, y presencia de metástasis confirmadas.', formula: 'Tres categorías, de las que la intermedia es funcional y no anatómica.', interpretacion: 'El basocelular metastásico es EXTREMADAMENTE raro: la incidencia estimada esta entre el 0,0028% y el 0,55%. El localmente avanzado no se define por un tamaño sino por una imposibilidad, la de tratarlo con cirugía o radioterapia con intención curativa razonable, y es la categoría que abre la puerta a los inhibidores de la via Hedgehog.' },
      { nombre: 'Clasificación ACTG TIS del Kaposi asociado al sida', componentes: 'Tumor (T), estado inmunitario (I) y enfermedad sistémica (S), cada uno en dos categorías.', formula: 'Clasificación modificada del AIDS Clinical Trials Group. No forma parte del TNM de la AJCC.', interpretacion: 'Es la única estadificación con uso extendido en el Kaposi, y solo para la forma asociada al sida. Su lógica es la del tema entero: el pronóstico no depende solo del tumor, sino también de cuanta inmunidad le queda al paciente y de si hay enfermedad sistémica. El Kaposi clásico tiene una clasificación propia centrada solo en el tumor; para el endémico y el yatrogeno no hay ninguna.' },
      { nombre: 'Las cinco formas epidemiológicas del sarcoma de Kaposi', componentes: 'Contexto inmunitario, población, distribución de las lesiones y curso.', formula: 'Clásico o esporádico, endémico, epidemico o asociado al sida, yatrogeno, y una quinta forma emergente.', interpretacion: 'Las cuatro clásicas son: ESPORÁDICA en varones de edad media y avanzada de zonas de alta prevalencia del virus (Mediterráneo, Oriente Medio, Europa del este), limitada a miembros inferiores e indolente; ENDÉMICA en el África subsahariana, agresiva en niños con adenopatías y linfedema, indolente en adultos; EPIDÉMICA asociada al VIH; y YATRÓGENA tras trasplante de órgano sólido. La quinta, cada vez más reconocida, es el Kaposi en hombres que tienen sexo con hombres SIN infección por VIH ni inmunodepresion.' },
      { nombre: 'Como se lee una recomendación GRADE', componentes: 'Fuerza de la recomendación y calidad de la evidencia, que son dos etiquetas independientes.', formula: 'Fuerza: fuerte o condicional, a favor o en contra. Calidad: alta, moderada, baja, muy baja, u opinion de expertos.', interpretacion: 'Conviene tenerlo presente al estudiar este tema, porque la disociación entre las dos es constante. Ejemplos reales de las guías: dermatoscopia en el basocelular, fuerte a favor con calidad ALTA; cirugía frente a imiquimod, condicional a favor con calidad MUY BAJA; inhibidores de Hedgehog en el avanzado, FUERTE a favor con calidad MUY BAJA, y el propio panel explica por que: no hay alternativa terapéutica y por eso no se pudieron hacer ensayos aleatorizados.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Queratosis actínica y campo de cancerizacion',
      color: '#8a7a3a',
      definicion: 'Lesiones queratosicas sobre piel crónicamente fotoexpuesta, marcador reconocido de daño solar acumulado y precursoras de una parte de los carcinomas epidermoides.',
      fisiopatologia: 'La exposición crónica acumulada a la radiación ultravioleta no daña una célula sino un área entera, y de ahi la nocion de CAMPO de cancerizacion: alrededor de la lesión visible hay piel con el mismo daño genético, de la que pueden ir surgiendo lesiones nuevas. Por eso el tratamiento de campo tiene sentido como concepto.',
      epidemiologia: 'El uso regular y correcto de fotoprotector ha demostrado reducir la aparición de queratosis actínicas. En el ensayo australiano de Nambour, la fracción de canceres cutáneos evitables con fotoprotección regular se estimo en el 9,3% para el epidermoide y el 14% para el melanoma.',
      factores_riesgo: ['Exposición solar crónica acumulada', 'Trabajo al aire libre', 'Fototipo claro', 'Edad avanzada', 'Inmunosupresion', 'Fuentes artificiales de ultravioleta: PUVA y cabinas de bronceado'],
      clinica: 'Lesiones múltiples sobre piel fotoexpuesta. Cuando el epidermoide nace sobre múltiples queratosis actínicas o en áreas con tumores múltiples, el problema deja de ser una lesión y pasa a ser un área.',
      criterios_dx: 'Clínico y dermatoscopico en la mayoría de los casos. La excepción que la guía marca como OBLIGATORIA: la variante PIGMENTADA comparte rasgos clínicos y dermatoscopicos con el lentigo maligna, de modo que ahi hay que biopsiar, aunque sea de forma incisional.',
      tx_medico: 'Fotoprotección de por vida, que es a la vez prevención primaria y secundaria. En los trabajadores expuestos, el equipo de protección personal es una medida secundaria y NO sustituye a limitar la exposición.',
      tx_farmacologico: 'Para el campo de cancerizacion hay tópicos (imiquimod al 5% o al 3,75%, diclofenaco en gel al 3%, mebutato de ingenol) y técnicas destructivas (crioterapia, curetaje con electrocoagulacion, terapia fotodinamica con ácido aminolevulínico o metil-aminolevulínico). En un ensayo aleatorizado con 225 lesiones de epidermoide no invasivo y enfermedad de Bowen, la terapia fotodinamica logro la mayor tasa de respuesta completa (93%), seguida de la crioterapia (86%) y del 5-fluorouracilo (83%).',
      dx_diferencial: 'Queratosis seborreica, lentigo solar, basocelular superficial, enfermedad de Bowen y, en la variante pigmentada, lentigo maligna. Esa última es la que obliga a la biopsia.',
      complementarios: 'Quimioprevencion en el paciente de alto riesgo: condicional a favor, calidad baja. En el análisis de ocho ensayos con 626 pacientes el beneficio fue real pero modesto, y se concentro en los RETINOIDES (tres estudios) y en el celecoxib (uno); la nicotinamida y los antioxidantes no mostraron efecto significativo en ese análisis.',
      pronostico: 'La mayoría de las queratosis actínicas no progresa. Su valor es doble: como marcador del daño acumulado, que identifica al paciente que hay que vigilar, y como lesión tratable.',
      algoritmo: ['Reconocer que hay un CAMPO, no una lesión aislada', '¿Es una queratosis actínica PIGMENTADA? Biopsiar: puede ser un lentigo maligna', 'Tratar el campo: tópico o técnica destructiva', 'Recordar que ninguna de esas técnicas permite analizar el margen histológico', 'Fotoprotección de por vida y revisión periódica', 'Si el paciente es de alto riesgo, valorar quimioprevencion con retinoides'],
      figura: 'mapa-tres-tumores'
    },
    {
      nombre: 'Carcinoma basocelular: reconocerlo y operarlo',
      color: '#4a6b7a',
      definicion: 'Proliferación maligna de queratinocitos basales. Es el cáncer más frecuente del ser humano y su pronóstico es excelente, pero si se le deja progresar, o en el subgrupo con comportamiento biológico agresivo, produce destrucción local importante.',
      fisiopatologia: 'El factor principal es la radiación ultravioleta, y el patrón de exposición se refleja en el subtipo: el NODULAR se asocia a exposición crónica, predomina en cabeza y cuello y aumenta con la edad, y el SUPERFICIAL se asocia a exposición INTERMITENTE y predomina en el tronco. Que el basocelular aparezca antes en la vida que el epidermoide y con frecuencia en el tronco sugiere que necesita una dosis acumulada de ultravioleta MENOR.',
      epidemiologia: 'En el informe AIRTUM de 2019 se estimaron 64.000 nuevos basocelulares y 19.000 epidermoides al año en Italia. En datos estadounidenses, la incidencia del basocelular fue de 525 por 100.000 y la prevalencia de 51,2 por 100.000, con una mortalidad de CERO. La exposición solar en edad temprana predice el desarrollo posterior, y el uso frecuente de cabinas de bronceado es el factor más importante en los jóvenes.',
      factores_riesgo: ['Exposición solar crónica y también intermitente, según el subtipo', 'Fototipo claro', 'Exposición solar en la infancia y la juventud', 'Cabinas de bronceado, sobre todo en jóvenes', 'Trabajo al aire libre: en el 95% de los estudios el riesgo fue mayor', 'Inmunosupresion', 'Radiación ionizante y exposición a arsénico'],
      clinica: 'La morfología esta en el tema de Exploración de piel y faneras. Lo que añade este módulo es que el subtipo orienta la conducta y que el tumor recurrente o de alto riesgo cambia la técnica quirúrgica.',
      criterios_dx: 'Dermatoscopia por delante de la inspección visual sola: es de las pocas recomendaciones FUERTES con calidad de evidencia ALTA de todo el tema. La microscopia confocal de reflectancia puede considerarse por delante de la dermatoscopia sola (condicional, calidad moderada).',
      tx_intervencionista: 'Cirugía con margen clínico de 3 mm o más (fuerte a favor, calidad moderada). En el tumor RECURRENTE o de ALTO RIESGO puede considerarse la cirugía de MOHS frente a la exeresis estándar (condicional a favor, pero con calidad de evidencia muy baja). Tras una exeresis con márgenes positivos, la guía recomienda la REEXERESIS por delante de la radioterapia (condicional en contra de la radioterapia, calidad muy baja).',
      tx_medico: 'La cirugía es la primera opción frente a todas las alternativas evaluadas, y la guía lo dice una por una: frente a imiquimod, a 5-fluorouracilo tópico, a terapia fotodinamica, a crioterapia, a láser, a cauterizacion y a radioterapia. La fuerza varia: es FUERTE frente a la terapia fotodinamica, la crioterapia y la radioterapia, y condicional frente al resto. La electroquimioterapia NO debe considerarse primera opción ni siquiera en pacientes con contraindicaciones relativas a cirugía y radioterapia.',
      tx_farmacologico: 'En el basocelular operable no hay papel para el tratamiento sistémico. Ver la ficha siguiente para el localmente avanzado y el metastásico.',
      seguimiento_ambulatorio: 'Revisión periódica de toda la piel: quien ha tenido un basocelular tiene daño actinico y tendra más lesiones. Fotoprotección con factor 30 o superior como medida de primera opción en expuestos (condicional a favor, calidad moderada).',
      pronostico: 'Excelente, con mortalidad prácticamente nula. El riesgo real es la destrucción local y la morbilidad de tratar tarde una lesión en una zona comprometida de la cara.',
      algoritmo: ['Dermatoscopia antes que inspección sola: fuerte a favor y calidad alta', 'Confirmar y planificar la exeresis', 'Margen clínico de 3 mm o más', '¿Recurrente o de alto riesgo? Valorar cirugía de Mohs', '¿Márgenes positivos? Reexeresis, no radioterapia', 'Si no es abordable con cirugía ni radioterapia: es localmente avanzado, ver la ficha siguiente', 'Seguimiento de toda la piel y fotoprotección']
    },
    {
      nombre: 'Basocelular avanzado: los inhibidores de Hedgehog',
      color: '#5a7a8a',
      definicion: 'Basocelular localmente avanzado (el que no es abordable con cirugía ni con radioterapia con intención curativa razonable) y basocelular metastásico.',
      fisiopatologia: 'La via de señalización Hedgehog esta activada de forma aberrante en el basocelular, y es la diana de vismodegib y sonidegib.',
      epidemiologia: 'El metastásico es extremadamente raro, con una incidencia estimada entre el 0,0028% y el 0,55%. El localmente avanzado es más frecuente y se define por una imposibilidad terapéutica, no por un tamaño.',
      clinica: 'Tumores extensos o en localizaciones donde la cirugía dejaria un defecto inaceptable, con frecuencia en la cara y en pacientes que han ido demorando la consulta durante años.',
      criterios_dx: 'La definición es funcional: hay que haber concluido que ni la cirugía ni la radioterapia ofrecen una intención curativa razonable. Esa conclusion se toma en comite, no en consulta.',
      imagen: 'Valoración radiológica basal al diagnóstico y también durante el seguimiento: las dos son recomendaciones condicionales a favor y por opinion de expertos.',
      tx_farmacologico: 'Inhibidores de la via Hedgehog, con recomendación FUERTE a favor frente a seguimiento o mejor tratamiento de soporte. Vismodegib y sonidegib están aprobados para el localmente avanzado; solo vismodegib tiene además la indicación en el metastásico.',
      tx_medico: 'Aquí esta la leccion metodologica del tema. La calidad de la evidencia que sostiene esa recomendación fuerte es MUY BAJA, y el propio panel explica por que decidió adoptarla igualmente: la ausencia de un estándar terapéutico para el basocelular localmente avanzado y metastásico hizo imposible realizar ensayos aleatorizados, y en la práctica diaria no existe hoy alternativa terapéutica. Es decir, la recomendación es fuerte porque no hay nada más, no porque la evidencia sea buena.',
      complementarios: 'La toxicidad de los inhibidores de Hedgehog condiciona el tratamiento tanto como su eficacia, y es la que suele llevar al paciente a consultar: espasmos musculares, alopecia, disgeusia, pérdida de apetito y pérdida de peso. Son efectos de clase, aparecen pronto y explican buena parte de las suspensiones.',
      seguimiento_ambulatorio: 'Valoración radiológica periódica y vigilancia de la tolerancia. El paciente que abandona el tratamiento por toxicidad suele recidivar.',
      pronostico: 'El tratamiento sistémico permite respuestas y preservación de órgano en una parte de los pacientes, pero la recidiva tras suspenderlo es frecuente.',
      algoritmo: ['Confirmar en comite que no es abordable con cirugía ni radioterapia', 'Valoración radiológica basal', 'Iniciar inhibidor de Hedgehog: vismodegib o sonidegib', 'Si es metastásico, solo vismodegib tiene la indicación', 'Informar de la toxicidad de clase antes de empezar, no después', 'Valoración radiológica en el seguimiento', 'Recordar que la recomendación es fuerte por falta de alternativa, no por calidad de la evidencia']
    },
    {
      nombre: 'Carcinoma epidermoide: el riesgo esta en el informe',
      color: '#8c5a3a',
      definicion: 'Carcinoma de queratinocitos con capacidad de metastatizar, a diferencia del basocelular. Supone alrededor del 20-25% de todos los tumores cutáneos.',
      fisiopatologia: 'Exposición ultravioleta crónica acumulada: en el 90% de los casos nace en áreas crónicamente expuestas (cabeza, cuello, dorso de manos y antebrazos), y la incidencia sube de forma marcada con la edad. La inflamación crónica es la otra via: epidermolisis ampollosa, heridas crónicas, quemaduras, cicatrices y úlceras de miembros inferiores.',
      epidemiologia: 'Unos 19.000 casos nuevos al año en Italia según AIRTUM 2019. La incidencia es mayor a latitudes bajas, en correlación con la intensidad lumínica, y en quienes trabajan al aire libre.',
      factores_riesgo: ['Exposición ultravioleta crónica acumulada y trabajo al aire libre', 'Fototipo claro y edad avanzada', 'PUVA y cabinas de bronceado, sobre todo si la exposición fue joven', 'INMUNOSUPRESIÓN, que es el factor que más cambia el riesgo', 'Genodermatosis: albinismo, xeroderma pigmentoso, epidermodisplasia verruciforme', 'Inflamación crónica: epidermolisis ampollosa, quemaduras, cicatrices, úlceras crónicas', 'Inhibidores de BRAF, que pueden provocar epidermoides eruptivos', 'Infección por virus del papiloma humano en el contexto de inmunosupresión'],
      clinica: 'El diagnóstico clínico y dermatoscopico es más difícil que el del basocelular, porque depende del estadio: el nodular ya desarrollado no plantea problema, pero las formas tempranas pueden parecer un basocelular o incluso una enfermedad inflamatoria, y en esas no se suele hacer confirmación histológica en la rutina diaria. Las variantes hiperqueratósicas y las ulceradas ocultan y modifican los rasgos dermatoscopicos.',
      criterios_dx: 'Histológico. Y lo que el informe tiene que permitir decir es si el tumor es de ALTO RIESGO: espesor mayor de 6 mm, mala diferenciación celular, tumor recurrente, invasión perineural, extensión profunda al tejido subcutáneo, localización en oreja o labio. Basta uno.',
      laboratorio: 'No hay analítica. El riesgo sale del informe y de la exploración.',
      dx_diferencial: 'Queratosis actínica, enfermedad de Bowen, basocelular, queratoacantoma y, en la forma pigmentada de la queratosis actínica, lentigo maligna.',
      tx_intervencionista: 'Exeresis quirúrgica completa, que cura en torno al 95% y es lo único que permite analizar el margen. Margen de 4 mm o más en el de bajo riesgo (6 mm si supera los 2 cm) y de 6 mm o más en el de alto riesgo. En el recurrente o de alto riesgo puede considerarse la cirugía de Mohs frente a la exeresis simple.',
      tx_medico: 'Frente a radioterapia, a cauterizacion y a crioterapia, la cirugía con márgenes libres es la primera opción en el tumor no recurrente y operable (condicionales a favor). Las técnicas destructivas y los tópicos tienen su sitio en el campo de cancerizacion, no en el carcinoma invasivo, y con un limite que conviene repetir: no permiten analizar el margen.',
      pronostico: 'Favorable en la mayoría. El problema se concentra en las formas localmente avanzadas y metastásicas, que aparecen sobre todo en inmunodeprimidos, en receptores de trasplante y en personas con dificultades sociales que consultan tarde.',
      algoritmo: ['Biopsiar y pedir un informe que permita clasificar el riesgo', 'Revisar los seis rasgos: espesor, diferenciación, recurrencia, perineural, subcutáneo, oreja o labio', '¿Alguno presente? Es de ALTO riesgo', 'Fijar el margen: 4 mm si es bajo riesgo, 6 mm si es alto', '¿Recurrente o alto riesgo? Valorar Mohs', 'En el de alto riesgo, seguir con la ficha siguiente'],
      figura: 'riesgo-epidermoide'
    },
    {
      nombre: 'Epidermoide de alto riesgo: lo que si y lo que no',
      color: '#8c3a34',
      definicion: 'Carcinoma epidermoide con al menos uno de los seis rasgos de alto riesgo. Es donde se concentran la recidiva, la metástasis y las decisiones difíciles.',
      clinica: 'El paciente típico combina varios: tumor grande en oreja o labio, en piel crónicamente dañada, con frecuencia ya operado una vez, y muchas veces inmunodeprimido.',
      criterios_dx: 'Los seis rasgos del informe. Las guías europeas añaden que un espesor vertical mayor de 6 mm basta por si solo, y que entre 6 y 10 mm de margen es lo que piden para estos tumores.',
      tx_intervencionista: 'Margen de 6 mm o más (condicional a favor, opinion de expertos) y cirugía de Mohs a considerar frente a la exeresis simple. Radioterapia ADYUVANTE tras la exeresis: puede considerarse frente a no dar nada (condicional a favor, y con calidad de evidencia MODERADA, que en este tema es mucho).',
      tx_medico: 'Y aquí están las dos recomendaciones EN CONTRA que más separan a este tumor del melanoma. La biopsia selectiva del GANGLIO CENTINELA no debe considerarse opción primaria frente a solo seguimiento (condicional en contra, calidad muy baja). Y la linfadenectomia PROFILÁCTICA tampoco (condicional en contra, opinion de expertos). Quien venga de estudiar melanoma tiene que desaprender el reflejo: en el epidermoide cutáneo no se estadifica el ganglio de rutina.',
      imagen: 'Estadificación instrumental BASAL para detectar metástasis extracutaneas, y también imagen en el SEGUIMIENTO: las dos condicionales a favor con calidad muy baja. Es la diferencia práctica con el de bajo riesgo, donde no se pide nada.',
      complementarios: 'La quimiorradioterapia concomitante NO debe considerarse primera opción tras la exeresis de un epidermoide de alto riesgo, frente a la radioterapia posoperatoria sola (condicional en contra). Es distinto del escenario del tumor irresecable, donde si puede considerarse.',
      seguimiento_ambulatorio: 'Clínico e instrumental. En el paciente inmunodeprimido con diagnóstico de epidermoide, el seguimiento clínico-instrumental puede considerarse opción primaria (condicional a favor, opinion de expertos), justamente por el riesgo de recidiva cutánea y de nuevas neoplasias cutáneas y extracutaneas que esa inmunosupresión sostenida genera.',
      pronostico: 'Peor que el del de bajo riesgo, y peor cuanto más se acumulan los rasgos. La mayoría sigue curandose con cirugía adecuada.',
      algoritmo: ['Confirmar el alto riesgo con el informe', 'Margen de 6 mm o más, y valorar Mohs', 'Estadificación instrumental basal', 'Valorar radioterapia adyuvante (condicional a favor, calidad moderada)', 'NO ganglio centinela de rutina', 'NO linfadenectomia profiláctica', 'NO quimiorradioterapia concomitante tras la cirugía', 'Seguimiento clínico e instrumental, más estrecho si hay inmunosupresión']
    },
    {
      nombre: 'Epidermoide avanzado: cemiplimab',
      color: '#7a3a6b',
      definicion: 'Carcinoma epidermoide recurrente o metastásico que no es candidato a tratamiento curativo, y carcinoma irresecable.',
      epidemiologia: 'Es una minoría de los epidermoides, y aparece sobre todo en inmunodeprimidos, receptores de trasplante de órgano sólido y personas con dificultades sociales que llegan tarde.',
      clinica: 'Tumor que ya no se puede resecar con intención curativa, o enfermedad a distancia.',
      tx_farmacologico: 'CEMIPLIMAB debe recomendarse como primera opción frente a la quimioterapia en el recurrente o metastásico no candidato a tratamiento curativo. Es la recomendación más fuerte del tema en terapia sistémica: FUERTE a favor, aunque la calidad de la evidencia sea baja. El cambio es real: durante años lo único que había era quimioterapia y terapia dirigida, y la aprobacion de los anti PD-1 (cemiplimab y pembrolizumab) reordeno el escenario.',
      tx_medico: 'La quimioterapia basada en platino puede considerarse frente a cuidados paliativos o mejor tratamiento de soporte en el paciente no candidato a tratamiento curativo (condicional a favor, calidad muy baja). Es decir: queda por detrás del cemiplimab, pero por delante de no tratar.',
      tx_intervencionista: 'En el tumor NO RESECABLE, la quimiorradioterapia concomitante puede considerarse primera opción (condicional a favor, calidad muy baja). Conviene no confundir este escenario con el posoperatorio, donde la misma intervención esta recomendada EN CONTRA.',
      complementarios: 'El paciente trasplantado plantea un problema propio y no resuelto en estas guías: el anti PD-1 puede desencadenar rechazo del injerto, de modo que la decisión se toma caso por caso y con el equipo de trasplante.',
      pronostico: 'Ha mejorado con la inmunoterapia, aunque sigue siendo el extremo malo del tumor queratinocitico más frecuente después del basocelular.',
      algoritmo: ['Confirmar que no es candidato a tratamiento curativo', '¿Recurrente o metastásico? Cemiplimab de primera opción', '¿Irresecable pero sin metástasis? Valorar quimiorradioterapia concomitante', '¿No candidato a inmunoterapia? Quimioterapia con platino antes que solo soporte', 'Si es trasplantado, decidir con el equipo de trasplante por el riesgo de rechazo']
    },
    {
      nombre: 'El inmunodeprimido y el trasplantado',
      color: '#3d5a73',
      definicion: 'El hilo que une los tres tumores de este módulo, y la parte que corresponde al internista más que al dermatólogo.',
      epidemiologia: 'La cifra que hay que recordar: los receptores de trasplante de órgano sólido tienen un riesgo de carcinoma epidermoide de 65 a 250 VECES mayor que la población general. Y en el sarcoma de Kaposi yatrogeno, el riesgo se correlaciona con el GRADO de inmunosupresión, de modo que es mayor en los trasplantes multiorgano y con mayor disparidad HLA.',
      fisiopatologia: 'La inmunosupresión favorece el desarrollo y la progresión del epidermoide por dos vías: menos vigilancia inmunitaria frente a las células tumorales y menos control de la infección por virus del papiloma humano. En el Kaposi el mecanismo es más directo: el herpesvirus humano 8 ya esta ahi y lo que falla es el control inmunitario que lo mantenia a raya.',
      factores_riesgo: ['Trasplante de órgano sólido o de progenitores hematopoyéticos', 'Enfermedad autoinmune que requiere inmunosupresión sistémica', 'Neoplasia sólida avanzada', 'Hemopatia maligna, linfoma o leucemia', 'Infección por VIH', 'Todos los inmunosupresores y biológicos influyen, aunque en grado distinto'],
      clinica: 'Lo que cambia en este paciente no es el aspecto de las lesiones, es el número, la velocidad y el pronóstico: más tumores, más agresivos y con más recidivas.',
      criterios_dx: 'Lo mismo que en el inmunocompetente, con más umbral de sospecha y menos tolerancia a esperar.',
      tx_medico: 'Las dos recomendaciones que la guía dedica a este paciente son de organizacion asistencial, no de fármaco, y por eso se olvidan: las VISITAS DERMATOLÓGICAS pueden considerarse opción primaria frente a no hacerlas en el inmunodeprimido (condicional a favor, opinion de expertos, y la guía precisa que se refiere sobre todo al receptor de trasplante de órgano sólido); y el SEGUIMIENTO clínico-instrumental puede considerarse opción primaria en el inmunodeprimido que ya tiene un epidermoide diagnosticado.',
      tx_farmacologico: 'Quimioprevencion a valorar en el de alto riesgo, con los retinoides como el grupo con beneficio más consistente. Y en el Kaposi yatrogeno, la medida que más rinde no es un citostatico: es REDUCIR o MODIFICAR la inmunosupresión, porque el tumor puede regresar con eso solo.',
      complementarios: 'Un detalle con nombre propio: los inhibidores de la via PI3K-AKT-mTOR, como el sirolimus, tienen actividad frente al Kaposi yatrogeno y frente al asociado al sida, lo que los convierte en una opción interesante al replantear el esquema inmunosupresor de un trasplantado con Kaposi.',
      seguimiento_ambulatorio: 'Revisión dermatológica periódica de TODA la piel, educación en fotoprotección y umbral bajo para biopsiar. Es barato y es lo único que adelanta el diagnóstico en esta población.',
      pronostico: 'Peor que en el inmunocompetente para el epidermoide. En cambio, en el Kaposi yatrogeno el pronóstico puede cambiar radicalmente con solo tocar la inmunosupresión.',
      algoritmo: ['Identificar al paciente: trasplante, autoinmune tratada, hemopatia, VIH', 'Programar revisión dermatológica periódica, no a demanda', 'Explorar TODA la piel, incluida la boca', 'Umbral bajo para biopsiar cualquier lesión que cambie', 'Valorar quimioprevencion con retinoides en el de alto riesgo', 'Si aparece Kaposi: replantear la inmunosupresión antes que tratar el tumor', 'Si aparece epidermoide avanzado y es trasplantado: decidir el anti PD-1 con el equipo de trasplante']
    },
    {
      nombre: 'Sarcoma de Kaposi: las cinco formas',
      color: '#7a3a4a',
      definicion: 'Neoplasia vascular causada por el herpesvirus humano 8, también llamado herpesvirus del sarcoma de Kaposi. La enfermedad no la produce el virus solo: hace falta la combinación de infección por el virus y deterioro de la inmunidad del huésped.',
      fisiopatologia: 'El virus se descubrio en 1994, veintidos años después de que Moritz Kaposi describiera la enfermedad en 1872 en varones europeos de edad avanzada. Sus proteínas inducen los cambios celulares que permiten al virus evadir la respuesta inmunitaria y a la célula infectada sobrevivir y proliferar. En el Kaposi clásico el deterioro inmunitario no es evidente y se atribuye a la INMUNOSENESCENCIA, es decir, al envejecimiento del sistema inmunitario.',
      epidemiologia: 'Hoy la mayoría de los casos ocurre en el África subsahariana, donde la infección por el virus es prevalente por transmisión SALIVAL en la infancia, sumada a la epidemia de sida. En el Kaposi asociado al sida, el riesgo sube al bajar los CD4 y baja con el tratamiento antirretroviral.',
      factores_riesgo: ['Infección por el herpesvirus humano 8', 'Infección por VIH con CD4 bajos', 'Trasplante de órgano sólido, con riesgo proporcional a la inmunosupresión', 'Origen en zonas de alta prevalencia del virus: Mediterráneo, Oriente Medio, Europa del este', 'Edad avanzada, por inmunosenescencia, en la forma clásica', 'Ser hombre que tiene sexo con hombres, incluso sin infección por VIH'],
      clinica: 'CLÁSICO o esporádico: típicamente confinado a miembros inferiores, con pocas lesiones; la enfermedad visceral y mucosa es rara y, cuando aparece, suele ser digestiva. Afecta a personas de edad media y avanzada, más a hombres. ENDÉMICO: en niños se presenta con múltiples adenopatías y linfedema y tiene una historia natural muy agresiva, con diseminación visceral; en adultos da lesiones en miembros inferiores parecidas al clásico. EPIDEMICO o asociado al sida: puede dar edema asociado al tumor; la afectación visceral NO es infrecuente y puede ser agresiva. YATROGENO: suele presentarse como lesiones cutáneas, aunque puede haber enfermedad mucosa y, rara vez, visceral. Y la QUINTA forma, en hombres que tienen sexo con hombres sin infección por VIH, jóvenes o de edad media y no inmunodeprimidos: lesiones escasas en cualquier localización, con enfermedad visceral y mucosa rara.',
      criterios_dx: 'BIOPSIA. El diagnóstico visual aislado tuvo un valor predictivo positivo de solo el 80% en un estudio de África oriental, con dos consecuencias: pacientes que recibieron quimioterapia sin necesitarla y pacientes a los que se les paso un diagnóstico distinto y a menudo fácil de tratar, como la angiomatosis bacilar.',
      laboratorio: 'Serología de VIH y recuento de CD4 en todos. En el trasplantado, revisión del esquema inmunosupresor.',
      imagen: 'Casi siempre, ninguna. Solo el 15% de 469 pacientes con Kaposi asociado al sida tenia lesiones viscerales al diagnóstico, de modo que la TC, la broncoscopia y la endoscopia NO están justificadas sin síntomas que las sugieran. El cribado del aparato respiratorio y del digestivo tampoco se recomienda: es raro que haya Kaposi visceral sin lesiones visibles en piel o mucosas.',
      complementarios: 'La excepción que si merece buscarse activamente es la CAVIDAD ORAL, porque es con frecuencia la primera localización del Kaposi asociado al sida y es la que el paciente puede no ver.',
      dx_diferencial: 'Angiomatosis bacilar, que es el error que más importa porque se trata con antibiótico; granuloma piógeno, angiosarcoma, dermatofibroma, hematoma y, en el paciente con VIH, otras lesiones violáceas.',
      pronostico: 'Depende por completo de la forma: indolente en el clásico, muy agresivo en el endémico infantil, reversible en el yatrogeno si se toca la inmunosupresión, y dependiente del control del VIH en el epidermico. En el África subsahariana el pronóstico sigue siendo malo.',
      algoritmo: ['Ante una lesión violácea sospechosa, BIOPSIAR: el ojo solo acierta el 80%', 'Serología de VIH y CD4 en todos', 'Identificar la forma: clásica, endémica, epidémica, yatrógena o la quinta', 'Mirar la boca', 'No pedir TC, broncoscopia ni endoscopia sin síntomas', 'Clasificar con el ACTG TIS si es asociado al sida'],
      figura: 'kaposi-formas'
    },
    {
      nombre: 'Kaposi: el tratamiento empieza por la inmunidad',
      color: '#5a4a8c',
      definicion: 'Tratamiento del sarcoma de Kaposi, que en dos de sus formas consiste en corregir el defecto inmunitario y no en atacar el tumor.',
      tx_medico: 'En el Kaposi asociado al sida NO tratado previamente y en fase precoz, el tratamiento debe EMPEZAR por el control del VIH con antirretrovirales, que con frecuencia produce la regresión del Kaposi. En el yatrogeno, la enfermedad puede regresar al reducir la inmunosupresión o al modificar el esquema inmunosupresor. En las dos, la primera medida no es un citostatico.',
      tx_farmacologico: 'En la enfermedad en estadio avanzado, la quimioterapia más habitual es la DOXORUBICINA LIPOSOMAL PEGILADA o el PACLITAXEL, aunque rara vez es curativa. Entre las opciones exploradas están los inmunomoduladores (talidomida, lenalidomida, pomalidomida), los inhibidores del proteasoma como el bortezomib, los inhibidores de la via PI3K-AKT-mTOR como el sirolimus, con actividad en el yatrogeno y en el asociado al sida, y agentes como el timolol y el propranolol, que inhiben la señalización beta-adrenergica por la que el virus impulsa la proliferación.',
      complementarios: 'SÍNDROME INFLAMATORIO DE RECONSTITUCIÓN INMUNITARIA del Kaposi. Es el empeoramiento clínico de un Kaposi existente o, menos veces, la aparición o el desenmascaramiento de uno no diagnosticado, después de que el tratamiento antirretroviral reconstituya la inmunidad. Su frecuencia comunicada va de menos del 10% a casi el 40%, según la definición que se use. La mayoría de las definiciones exige progresión del Kaposi en las 12 SEMANAS siguientes al inicio del antirretroviral, junto a una supresión del ARN del VIH de 0,5 a 1 logaritmo o más, o un aumento de los CD4 de al menos 50 por microlitro.',
      factores_riesgo: ['Estadio T1 del Kaposi al iniciar el antirretroviral', 'Carga viral de VIH alta en plasma', 'ADN del virus del Kaposi detectable en plasma', 'Entorno de África subsahariana, donde es más frecuente que en el Reino Unido'],
      criterios_dx: 'El del síndrome de reconstitución es clínico y de cronología: progresión dentro de las 12 semanas del inicio del antirretroviral con prueba de que la inmunidad se esta recuperando. No hay forma estandarizada de distinguir esa progresión de la historia natural del Kaposi, y conviene saberlo antes de etiquetar.',
      seguimiento_ambulatorio: 'Vigilancia estrecha las primeras doce semanas de antirretroviral en quien ya tiene Kaposi, porque es la ventana en la que aparece el síndrome de reconstitución.',
      pronostico: 'La quimioterapia rara vez cura. Lo que cambia el pronóstico de verdad es el control de la inmunidad: el antirretroviral en el epidemico y el ajuste de la inmunosupresión en el yatrogeno.',
      algoritmo: ['¿Asociado al sida y en fase precoz? Empezar por el antirretroviral', '¿Yatrogeno? Reducir o modificar la inmunosupresión antes que nada', 'Valorar el sirolimus al replantear el esquema del trasplantado', '¿Enfermedad avanzada? Doxorubicina liposomal pegilada o paclitaxel', 'Vigilar las 12 primeras semanas de antirretroviral: síndrome de reconstitución', 'No confundir la reconstitución con un fracaso del tratamiento']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Estos tres tumores llegan al internista por una puerta distinta de la del dermatólogo. No llegan como una lesión que hay que diagnosticar, sino como un paciente que ya esta bajo su cuidado por otra cosa: el trasplantado al que le ajusta la inmunosupresión, el paciente con VIH recién diagnosticado, el anciano con daño solar de toda una vida al que ingresa por otro motivo y al que nadie le ha mirado la piel.',
    parametros: [
      'Al trasplantado, mirale la piel. Tiene de 65 a 250 veces más riesgo de carcinoma epidermoide que la población general, y la guía recomienda visitas dermatológicas programadas, no a demanda.',
      'Mira la BOCA en todo paciente con VIH o con Kaposi conocido: la cavidad oral es con frecuencia la primera localización del Kaposi asociado al sida y es la que el paciente no ve.',
      'Ante una lesión violácea sospechosa de Kaposi, biopsia. El diagnóstico visual aislado acierta solo el 80%, y el error más caro es tratar como Kaposi una angiomatosis bacilar, que se cura con antibiótico.',
      'No pidas TC, broncoscopia ni endoscopia en un Kaposi sin síntomas que las justifiquen: las lesiones viscerales aparecieron en solo el 15% al diagnóstico.',
      'Si aparece un Kaposi en un trasplantado, lo primero no es la quimioterapia: es replantear la inmunosupresión, porque el tumor puede regresar con eso solo.',
      'Si aparece un Kaposi en alguien con VIH sin tratar, lo primero es el antirretroviral, que con frecuencia produce regresión.',
      'Vigila las 12 primeras semanas de antirretroviral en quien ya tiene Kaposi: es la ventana del síndrome inflamatorio de reconstitución inmunitaria, y empeorar ahi no significa que el tratamiento haya fracasado.',
      'En el epidermoide, la pregunta útil es si es de alto riesgo, y se responde con el informe: espesor mayor de 6 mm, mala diferenciación, recurrencia, invasión perineural, extensión al subcutáneo, oreja o labio.',
      'Y una que hay que desaprender si vienes del melanoma: en el carcinoma epidermoide NO se hace ganglio centinela de rutina, y la linfadenectomia profiláctica esta recomendada en contra.'
    ],
    criterios_uci_general: 'Ninguno de los tres ingresa en críticos por sí mismo. Las razones reales son la toxicidad del tratamiento sistémico, la sobreinfección de un tumor ulcerado extenso, y en el Kaposi la afectación visceral agresiva de la forma epidémica o endémica, con compromiso respiratorio o hemorragia digestiva.',
    criterios_tips_general: 'En el basocelular localmente avanzado, el escalón es el tratamiento sistémico con inhibidores de Hedgehog, y la decisión de que ya no es abordable con cirugía ni radioterapia se toma en comite. En el epidermoide de alto riesgo, el escalón es la radioterapia adyuvante y la estadificación instrumental.',
    criterios_trasplante_general: 'Al revés de lo habitual: aquí el trasplante no es el destino sino el origen del problema. El antecedente de trasplante multiplica el riesgo de epidermoide y es la causa del Kaposi yatrogeno, y modificar la inmunosupresión es a la vez tratamiento y prevención.',
    prevencion: 'Fotoprotección con factor 30 o superior en los expuestos, como medida de primera opción (condicional a favor, calidad moderada en el basocelular; condicional a favor con calidad muy baja en el epidermoide). Protección con ropa, sombrero y gafas, y evitar la exposición directa; en los trabajadores al aire libre el equipo de protección personal es una medida SECUNDARIA y no sustituye a limitar la exposición. Evitar las cabinas de bronceado, sobre todo en jóvenes. Quimioprevencion con retinoides en el paciente de alto riesgo. Y revisión dermatológica programada en el inmunodeprimido.'
  }
};

export const compCites = {
  'Queratosis actínica y campo de cancerizacion': { definicion: [2], fisiopatologia: [2], epidemiologia: [1, 2], criterios_dx: [2], tx_medico: [2], tx_farmacologico: [2], complementarios: [2] },
  'Carcinoma basocelular: reconocerlo y operarlo': { definicion: [1], fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], tx_intervencionista: [1], tx_medico: [1], seguimiento_ambulatorio: [1], pronostico: [1], tx_farmacologico: [1] },
  'Basocelular avanzado: los inhibidores de Hedgehog': { definicion: [1], epidemiologia: [1], imagen: [1], tx_farmacologico: [1], tx_medico: [1], criterios_dx: [1] },
  'Carcinoma epidermoide: el riesgo esta en el informe': { definicion: [2], fisiopatologia: [2], epidemiologia: [1, 2], criterios_dx: [2], clinica: [2], tx_intervencionista: [2], tx_medico: [2], pronostico: [2], laboratorio: [2] },
  'Epidermoide de alto riesgo: lo que si y lo que no': { criterios_dx: [2], tx_intervencionista: [2], tx_medico: [2], imagen: [2], complementarios: [2], seguimiento_ambulatorio: [2] },
  'Epidermoide avanzado: cemiplimab': { definicion: [2], epidemiologia: [2], tx_farmacologico: [2], tx_medico: [2], tx_intervencionista: [2] },
  'El inmunodeprimido y el trasplantado': { epidemiologia: [2, 3], fisiopatologia: [2, 3], tx_medico: [2], tx_farmacologico: [2, 3], complementarios: [3], criterios_dx: [2] },
  'Sarcoma de Kaposi: las cinco formas': { definicion: [3], fisiopatologia: [3], epidemiologia: [3], clinica: [3], criterios_dx: [3], imagen: [3], complementarios: [3], pronostico: [3], laboratorio: [3] },
  'Kaposi: el tratamiento empieza por la inmunidad': { tx_medico: [3], tx_farmacologico: [3], complementarios: [3], criterios_dx: [3], factores_riesgo: [3] }
};

export const estigmasTitulo = 'Datos que cambian la conducta en estos tres tumores';
export const estigmas = [
  { nombre: 'Espesor mayor de 6 mm', descripcion: 'En el carcinoma epidermoide basta por si solo para clasificar el tumor como de alto riesgo según las guías europeas, y con ello cambian el margen (6 mm o más), la indicación de imagen basal y la de radioterapia adyuvante.' },
  { nombre: 'Invasión perineural', descripcion: 'Uno de los seis rasgos de alto riesgo del epidermoide. Aparece en el informe de patología y es de los que más se pasan por alto al leerlo deprisa, porque no cambia el aspecto de la lesión.' },
  { nombre: 'Localización en oreja o labio', descripcion: 'Es rasgo de alto riesgo por sí misma en el carcinoma epidermoide. Dos localizaciones concretas que conviene memorizar, porque no se deducen de ningún principio general.' },
  { nombre: 'Basocelular superficial en el tronco', descripcion: 'Orienta a exposición solar INTERMITENTE, mientras que el nodular de cabeza y cuello orienta a exposición crónica. Que el basocelular aparezca en el tronco y antes en la vida que el epidermoide sugiere que necesita una dosis acumulada de ultravioleta menor.' },
  { nombre: 'Queratosis actínica PIGMENTADA', descripcion: 'Comparte rasgos clínicos y dermatoscopicos con el lentigo maligna, de modo que la guía considera OBLIGATORIA la biopsia, aunque sea incisional. Es la excepción a tratar el campo sin confirmar.' },
  { nombre: 'Lesión violácea en paciente con VIH', descripcion: 'Obliga a biopsiar antes de tratar: el diagnóstico visual aislado de Kaposi tuvo solo un 80% de valor predictivo positivo, y el error que más importa es confundirlo con una angiomatosis bacilar, que se cura con antibiótico.' },
  { nombre: 'Kaposi en la cavidad oral', descripcion: 'Es con frecuencia la PRIMERA localización del Kaposi asociado al sida y la que el paciente no se ve. Es el único sitio donde el cribado del Kaposi tiene sentido, y mirarlo cuesta diez segundos.' },
  { nombre: 'Epidermoides eruptivos bajo inhibidor de BRAF', descripcion: 'Los inhibidores de BRAF pueden provocar la aparición de carcinomas epidermoides eruptivos, por potenciar mutaciones preexistentes en áreas crónicamente fotoexpuestas o por reducir las defensas frente al virus del papiloma humano.' }
];

export const biopsiaTitulo = 'Biopsia: que confirma y que además clasifica';
export const biopsia = {
  indicaciones: [
    'Toda lesión con sospecha clínica o dermatoscopica de carcinoma queratinocitico',
    'Toda queratosis actínica PIGMENTADA, por el diferencial con el lentigo maligna',
    'Toda lesión violácea con sospecha de sarcoma de Kaposi, antes de tratar',
    'Cualquier lesión nueva o cambiante en un paciente inmunodeprimido o trasplantado',
    'Toda lesión sobre cicatriz, quemadura o úlcera crónica que no cura'
  ],
  ventajas: [
    'En el epidermoide, el informe no solo diagnóstica: CLASIFICA el riesgo y con ello decide el margen',
    'La exeresis permite además analizar los márgenes, con tasas de curación del 95%',
    'En el Kaposi evita dos errores caros: quimioterapia innecesaria y pasar por alto una angiomatosis bacilar',
    'Permite identificar el subtipo histológico, que en el basocelular orienta sobre el comportamiento'
  ],
  limitaciones: [
    'Las técnicas destructivas y los tópicos NO permiten analizar el margen histológico',
    'En el epidermoide temprano la clínica y la dermatoscopia son menos fiables que en el basocelular',
    'En las formas hiperqueratósicas y ulceradas, la queratina y la ulceracion ocultan los rasgos dermatoscopicos',
    'En entornos con recursos limitados el diagnóstico de Kaposi se hace a ojo, y eso tiene un coste medible'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección',
    'En zonas comprometidas de la cara, planificar la biopsia pensando ya en la reconstrucción',
    'No destruir una lesión sospechosa sin diagnóstico: se pierde la posibilidad de clasificar el riesgo',
    'En el paciente frágil, valorar si el resultado va a cambiar la conducta antes de biopsiar'
  ]
};

export const escalaRefs = {
  'Riesgo del carcinoma epidermoide (calculadora disponible)': [2],
  'Margen quirúrgico según el tumor y el riesgo (calculadora disponible)': [1, 2],
  'Basocelular: operable, localmente avanzado o metastásico': [1],
  'Clasificación ACTG TIS del Kaposi asociado al sida': [3],
  'Las cinco formas epidemiológicas del sarcoma de Kaposi': [3],
  'Como se lee una recomendación GRADE': [1, 2]
};

export const escalaCalc = {
  'Riesgo del carcinoma epidermoide (calculadora disponible)': 'riesgo-epidermoide',
  'Margen quirúrgico según el tumor y el riesgo (calculadora disponible)': 'margen-queratinocitico'
};

export const compGroups = [
  { title: 'Carcinoma basocelular', items: ['Carcinoma basocelular: reconocerlo y operarlo', 'Basocelular avanzado: los inhibidores de Hedgehog'] },
  { title: 'Carcinoma epidermoide', items: ['Queratosis actínica y campo de cancerizacion', 'Carcinoma epidermoide: el riesgo esta en el informe', 'Epidermoide de alto riesgo: lo que si y lo que no', 'Epidermoide avanzado: cemiplimab'] },
  { title: 'El huésped', items: ['El inmunodeprimido y el trasplantado'] },
  { title: 'Sarcoma de Kaposi', items: ['Sarcoma de Kaposi: las cinco formas', 'Kaposi: el tratamiento empieza por la inmunidad'] }
];

export const complicacionesIntro = 'Las fichas van por tumor, y dentro de cada uno separan lo que se opera de lo que ya no. El basocelular tiene dos: la enfermedad común, que se cura con cirugía, y la localmente avanzada, que es donde aparece la leccion metodologica del tema sobre como leer una recomendación fuerte apoyada en evidencia muy mala. El epidermoide tiene cuatro, empezando por la queratosis actínica y el campo de cancerizacion, porque es de donde sale buena parte de ellos, y siguiendo por la pregunta que lo ordena todo: si es de alto riesgo. En medio hay una ficha que no es de ningún tumor y es la que más importa a un internista, la del paciente inmunodeprimido y trasplantado, que es el hilo que une los tres. Y el Kaposi cierra con dos: reconocer la forma, y un tratamiento que en dos de las cinco formas consiste en arreglar la inmunidad y no en atacar el tumor.';

export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Riesgo' },
  { id: 'complicaciones', label: 'Fichas' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'TUMOR CUTÁNEO NO MELANOMA', color: '#4a6b7a', target: 'definicion' },
  branches: [
    { title: 'Basocelular', sub: 'Casi nunca metastatiza', color: '#4a6b7a', target: 'complicaciones', leaves: [
      { title: 'Operable', sub: 'Cirugía con 3 mm de margen', color: '#4a6b7a', target: 'complicaciones' },
      { title: 'Localmente avanzado', sub: 'Inhibidores de Hedgehog', color: '#5a7a8a', target: 'complicaciones' }
    ] },
    { title: 'Epidermoide', sub: 'SI metastatiza &middot; ¿alto riesgo?', color: '#8c5a3a', target: 'clasificacion', leaves: [
      { title: 'Los seis rasgos', sub: 'Basta uno del informe', color: '#8c5a3a', target: 'clasificacion' },
      { title: 'Alto riesgo', sub: '6 mm, Mohs, imagen, NO centinela', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Avanzado', sub: 'Cemiplimab de primera línea', color: '#7a3a6b', target: 'complicaciones' }
    ] },
    { title: 'Kaposi', sub: 'Virus VHH-8 + inmunidad rota', color: '#7a3a4a', target: 'complicaciones', leaves: [
      { title: 'Cinco formas', sub: 'La forma manda sobre la extensión', color: '#7a3a4a', target: 'clasificacion' },
      { title: 'Arreglar la inmunidad', sub: 'Antirretroviral o bajar inmunosupresión', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'El huésped', sub: 'Trasplantado: 65 a 250 veces más riesgo', color: '#3d5a73', target: 'complicaciones' }
  ]
};

export const diagCites = { laboratorio: [1, 2, 3], no_invasivos: [1, 2, 3], imagen: [1, 2, 3], biopsia: [2, 3] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 2, 3];
export const figurasDefinicion = ['mapa-tres-tumores'];
export const figurasClasificacion = ['riesgo-epidermoide', 'kaposi-formas'];

export const figuras = {
  'mapa-tres-tumores': {
    titulo: 'Tres tumores que solo comparten el huésped',
    fuente: 'Basocelular y epidermoide: Queirolo P, et al. ESMO Open 2023;8(6):102037 y 2024;9(5):103005. Kaposi: Cesarman E, et al. Nat Rev Dis Primers 2019;5(1):9.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Basocelular</th><th>Epidermoide</th><th>Sarcoma de Kaposi</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">De que célula sale</td><td>Queratinocito basal</td><td>Queratinocito</td><td>Célula endotelial (tumor vascular)</td></tr>
            <tr><td class="figure-org">Que lo causa</td><td>Ultravioleta acumulada</td><td>Ultravioleta acumulada</td><td><strong>Virus</strong> (herpesvirus humano 8) + inmunidad rota</td></tr>
            <tr><td class="figure-org">¿Metastatiza?</td><td><span class="figure-tag">Casi nunca: 0,0028 a 0,55%</span></td><td><span class="figure-tag dys">Si, y por eso hay alto riesgo</span></td><td>Visceral en el 15% al diagnóstico</td></tr>
            <tr><td class="figure-org">La pregunta que lo ordena</td><td>¿Es operable, localmente avanzado o metastásico?</td><td>¿Es de alto riesgo?</td><td>¿Cuál de las cinco formas es?</td></tr>
            <tr><td class="figure-org">Tratamiento del caso común</td><td>Cirugía, 3 mm de margen</td><td>Cirugía, 4 o 6 mm según el riesgo</td><td>Arreglar la inmunidad</td></tr>
            <tr><td class="figure-org">Cuando eso no basta</td><td>Inhibidores de Hedgehog</td><td>Cemiplimab</td><td>Doxorubicina liposomal o paclitaxel</td></tr>
            <tr><td class="figure-org">El paciente de riesgo</td><td colspan="3"><strong>El inmunodeprimido.</strong> El trasplantado de órgano sólido tiene de 65 a 250 veces más riesgo de epidermoide, y el Kaposi yatrogeno sigue al grado de inmunosupresión</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La fila que justifica que los tres esten en el mismo módulo es la última. Por lo demás, lo que hay que llevarse es la segunda y la tercera: el basocelular y el epidermoide comparten causa y se diferencian en que uno disemina y el otro prácticamente no, mientras que el Kaposi <strong>no es un tumor del sol sino de un virus</strong>, y por eso su tratamiento empieza donde no empieza el de los otros dos: devolviendole al paciente la inmunidad que ha perdido.</div>`
  },
  'riesgo-epidermoide': {
    titulo: 'Carcinoma epidermoide: de los seis rasgos a la conducta',
    fuente: 'Queirolo P, et al. Guidelines for the diagnosis and treatment of cutaneous squamous cell carcinoma: a GRADE approach... ESMO Open 2024;9(5):103005. Margenes europeos: EDF-EADO-EORTC, citados en esa guia.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Los seis rasgos de alto riesgo</th><th>Bajo riesgo</th><th>Alto riesgo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Espesor mayor de 6 mm</td><td rowspan="6" style="vertical-align:middle;">Ninguno de los seis</td><td rowspan="6" style="vertical-align:middle;"><strong>Basta UNO</strong></td></tr>
            <tr><td class="figure-org">Mala diferenciación celular</td></tr>
            <tr><td class="figure-org">Tumor recurrente</td></tr>
            <tr><td class="figure-org">Invasión perineural</td></tr>
            <tr><td class="figure-org">Extensión profunda al subcutáneo</td></tr>
            <tr><td class="figure-org">Localización en OREJA o LABIO</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lo que cambia</th><th>Bajo riesgo</th><th>Alto riesgo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Margen quirúrgico</td><td>4 mm o más (6 mm si pasa de 2 cm)</td><td><strong>6 mm o más</strong> (6 a 10 mm en las guías europeas)</td></tr>
            <tr><td class="figure-org">Cirugía de Mohs</td><td>No procede</td><td>A considerar, también si es recurrente</td></tr>
            <tr><td class="figure-org">Imagen basal</td><td>No</td><td>Si, para buscar metástasis extracutaneas</td></tr>
            <tr><td class="figure-org">Imagen en el seguimiento</td><td>No</td><td>Si</td></tr>
            <tr><td class="figure-org">Radioterapia adyuvante</td><td>No</td><td>A considerar <span class="figure-tag">calidad moderada</span></td></tr>
            <tr><td class="figure-org">Ganglio centinela</td><td colspan="2"><span class="figure-tag fail">NO de rutina, en ninguno de los dos</span></td></tr>
            <tr><td class="figure-org">Linfadenectomia profiláctica</td><td colspan="2"><span class="figure-tag fail">Recomendada EN CONTRA</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las dos filas rojas son las que hay que <strong>desaprender</strong> si uno viene de estudiar el melanoma, donde el ganglio centinela es el eje de la estadificación. En el carcinoma epidermoide cutáneo no se hace de rutina (condicional en contra) y la linfadenectomia profiláctica tampoco (condicional en contra). Y una nota sobre el margen: no hay ningún estudio que fije el mínimo, de modo que estas cifras son opinion de expertos apoyada en el trabajo de Brodland y Zitelli de 1992, en el que 4 mm bastaban para extirpar por completo más del 95% de las lesiones de menos de 2 cm.</div>`
  },
  'kaposi-formas': {
    titulo: 'Las cinco formas del sarcoma de Kaposi',
    fuente: 'Cesarman E, Damania B, Krown SE, Martin J, Bower M, Whitby D. Kaposi sarcoma. Nat Rev Dis Primers 2019;5(1):9, Tabla 1.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Forma</th><th>Quien</th><th>Como se presenta</th><th>Que hacer primero</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Clásica o esporádica</td><td>Edad media y avanzada, más hombres; Mediterráneo, Oriente Medio y Europa del este</td><td>Pocas lesiones en miembros inferiores; visceral y mucosa raras</td><td>Tratamiento local; es indolente</td></tr>
            <tr><td class="figure-org">Endémica</td><td>África subsahariana, sin VIH</td><td>Niños: adenopatías y linfedema, <span class="figure-tag fail">muy agresiva</span>. Adultos: como la clásica</td><td>Quimioterapia en la forma infantil</td></tr>
            <tr><td class="figure-org">Epidémica (sida)</td><td>Infección por VIH; el riesgo sube al bajar los CD4</td><td>Puede dar edema tumoral; la afectación visceral NO es infrecuente</td><td><strong>Antirretroviral</strong>: con frecuencia regresa</td></tr>
            <tr><td class="figure-org">Yatrógena</td><td>Trasplante de órgano sólido; el riesgo sigue al grado de inmunosupresión</td><td>Sobre todo cutánea; mucosa posible, visceral rara</td><td><strong>Reducir o cambiar la inmunosupresión</strong></td></tr>
            <tr><td class="figure-org">La quinta</td><td>Hombres que tienen sexo con hombres SIN VIH, jóvenes o de edad media, no inmunodeprimidos</td><td>Pocas lesiones en cualquier localización</td><td>Tratamiento local</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La columna que cambia la práctica es la última: en <strong>dos de las cinco formas el primer tratamiento no es oncológico</strong>. En la epidémica se empieza por el antirretroviral, que con frecuencia hace regresar el tumor, y en la yatrógena por reducir o modificar la inmunosupresión. Dos avisos más. Al iniciar el antirretroviral hay que vigilar <strong>12 semanas</strong>, que es la ventana del síndrome inflamatorio de reconstitución inmunitaria, en el que el Kaposi empeora sin que el tratamiento haya fallado. Y antes de nada, <strong>biopsiar</strong>: el ojo solo acierta el 80%, y lo que más se confunde es la angiomatosis bacilar, que se cura con antibiótico.</div>`
  }
};
