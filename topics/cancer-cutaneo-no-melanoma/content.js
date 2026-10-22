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
  titulo: 'Cancer cutaneo no melanoma y sarcoma de Kaposi',
  subtitulo: 'Modulo 80 &middot; Dermatologia',
  accent: '#4a6b7a',
  accentDim: '#6b8a99'
};

export const definicionText = `<p style="margin:0 0 14px;">Los dos <strong>carcinomas queratinociticos</strong>, el basocelular y el epidermoide, son el cancer mas frecuente del ser humano, y su historia entera es la <strong>radiacion ultravioleta acumulada</strong>. Lo que los separa es una sola cosa, y es la que ordena el tema: la <strong>capacidad de metastatizar</strong>. El basocelular practicamente no lo hace, con una incidencia de metastasis estimada entre el 0,0028% y el 0,55%, de modo que su problema es la <strong>destruccion local</strong>; el epidermoide si puede, y por eso tiene criterios de alto riesgo, estadificacion y tratamiento sistemico. De ahi que la pregunta util ante un epidermoide no sea "&#191;que es?" sino <strong>"&#191;es de alto riesgo?"</strong>, y la respuesta este en el informe de patologia.</p>
<p style="margin:0 0 14px;">El <strong>sarcoma de Kaposi</strong> esta en este modulo por una razon de medicina interna, no de dermatologia: no es un tumor de queratinocitos ni lo causa el sol, sino un <strong>virus</strong>, el herpesvirus humano 8, que se convierte en tumor cuando la inmunidad del huesped falla. Y ese es justamente el hilo que une los tres: el <strong>paciente inmunodeprimido</strong>. El receptor de un trasplante de organo solido tiene un riesgo de carcinoma epidermoide <strong>de 65 a 250 veces mayor</strong> que la poblacion general, y el Kaposi yatrogeno aparece despues del injerto con un riesgo que sigue al grado de inmunosupresion. Quien lleva la inmunosupresion de ese paciente es el internista.</p>
<p style="margin:0 0 14px;">Una advertencia sobre como leer este tema. Las dos guias en las que se apoya son <strong>GRADE</strong>, de modo que cada recomendacion viene con su fuerza y con la calidad de la evidencia que la sostiene, y aqui esas dos cosas se separan mucho: hay recomendaciones <strong>fuertes a favor con calidad de evidencia muy baja</strong>, como los inhibidores de Hedgehog en el basocelular localmente avanzado, porque sencillamente no hay alternativa y por eso no se pudo hacer un ensayo aleatorizado. Saber distinguir "esto funciona" de "esto es lo unico que hay" es parte de lo que el tema ense&#241;a.</p>`;

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
      compensada: 'BASOCELULAR: es el cancer mas frecuente y su pronostico es excelente. Lo que importa de su presentacion es que el subtipo se corresponde con el patron de exposicion solar, y eso ayuda a reconocerlo: el NODULAR se asocia a exposicion cronica, predomina en cabeza y cuello y aumenta con la edad; el SUPERFICIAL se asocia a exposicion solar INTERMITENTE y predomina en el TRONCO. Un detalle que explica por que el basocelular aparece antes en la vida que el epidermoide y en sitios menos expuestos: necesita una dosis acumulada de ultravioleta MENOR. EPIDERMIDE: en el 90% de los casos nace en zonas cronicamente expuestas, cabeza, cuello y dorso de manos y antebrazos, y su incidencia sube de forma marcada con la edad. Su diagnostico clinico y dermatoscopico es mas dificil que el del basocelular, porque las formas tempranas pueden parecer un basocelular o incluso una enfermedad inflamatoria.',
      descompensada: 'Lo que convierte el caso en otro problema. En el BASOCELULAR: que no sea abordable ni con cirugia ni con radioterapia con intencion curativa razonable, que es la definicion practica de LOCALMENTE AVANZADO y lo que abre la puerta al tratamiento sistemico. En el EPIDERMIDE, los rasgos de ALTO RIESGO del informe: espesor mayor de 6 mm, mala diferenciacion celular, tumor recurrente, invasion perineural, extension profunda al tejido subcutaneo, y la localizacion en OREJA o LABIO. Y en los tres tumores, el dato del paciente que mas pesa: la INMUNOSUPRESION, sea por trasplante de organo solido o de progenitores, por enfermedad autoinmune tratada, por neoplasia avanzada o por una hemopatia. Ojo tambien con los inhibidores de BRAF, que pueden provocar epidermoides eruptivos.'
    },
    laboratorio: [
      { prueba: 'Biopsia e histologia', utilidad: 'Es el diagnostico, y en el epidermoide es ademas la estratificacion del riesgo: el espesor, el grado de diferenciacion, la invasion perineural y la extension al subcutaneo salen de ahi. En la variante PIGMENTADA de la queratosis actinica, que comparte rasgos clinicos y dermatoscopicos con el lentigo maligna, la guia considera obligatoria la biopsia, aunque sea incisional, para confirmar el diagnostico.' },
      { prueba: 'Analisis de margenes', utilidad: 'La extirpacion quirurgica permite confirmar el diagnostico y evaluar los margenes, intraoperatorios o posoperatorios, con tasas de curacion del 95%. Es la razon por la que las tecnicas destructivas (crioterapia, curetaje y electrocoagulacion, terapia fotodinamica) y los topicos tienen un limite estructural: NO permiten analizar el margen histologico.' },
      { prueba: 'Inmunohistoquimica en el sarcoma de Kaposi', utilidad: 'El diagnostico de Kaposi es histologico. Y hay un motivo muy concreto para no quedarse en la inspeccion: en un estudio de Africa oriental el diagnostico VISUAL aislado tuvo solo un 80% de valor predictivo positivo, de modo que algunos pacientes recibieron quimioterapia sin necesitarla y a otros se les paso un diagnostico tratable, como la angiomatosis bacilar.' },
      { prueba: 'Serologia de VIH y recuento de CD4', utilidad: 'Ante un Kaposi, obligado. El riesgo de Kaposi asociado al sida sube al bajar el recuento de CD4 y baja con el tratamiento antirretroviral. Y funciona en los dos sentidos: un Kaposi puede ser la forma de presentacion de una infeccion por VIH no conocida.' },
      { prueba: 'Valoracion de la inmunosupresion', utilidad: 'En el trasplantado, saber que lleva y cuanto: el riesgo de Kaposi yatrogeno se correlaciona con el GRADO de inmunosupresion, de modo que es mayor en los trasplantes multiorgano y con mayor disparidad HLA. En el epidermoide, todos los inmunosupresores y biologicos aumentan el riesgo, aunque en grado distinto.' },
      { prueba: 'Quimioprevencion: a quien', utilidad: 'En personas de alto riesgo de epidermoide, la guia permite considerar quimioprevencion (recomendacion condicional a favor, calidad baja). En el analisis de ocho ensayos con 626 pacientes, el beneficio se concentro en los RETINOIDES y en el celecoxib; para la nicotinamida y los antioxidantes el intervalo de confianza quedaba alrededor de cero, es decir, sin efecto demostrado.' }
    ],
    no_invasivos: [
      { metodo: 'Dermatoscopia', interpretacion: 'En el BASOCELULAR la recomendacion es FUERTE a favor y, lo que es poco habitual en este tema, con calidad de evidencia ALTA: debe usarse como primera opcion frente a la inspeccion visual sola. En el EPIDERMIDE la recomendacion es tambien a favor pero CONDICIONAL y por opinion de expertos, porque no hay estudios que la validen especificamente para este tumor; se extrapola de su papel en el melanoma y en otras lesiones.', cutoff: 'Basocelular: fuerte a favor, calidad alta' },
      { metodo: 'Microscopia confocal de reflectancia', interpretacion: 'En lesiones sospechosas, puede considerarse como primera opcion frente a la dermatoscopia sola para detectar el basocelular (condicional a favor, calidad moderada). Es una herramienta de segundo nivel y su disponibilidad es el limite real.', cutoff: 'Condicional a favor, calidad moderada' },
      { metodo: 'Criterios de alto riesgo del epidermoide (calculadora disponible)', interpretacion: 'Espesor vertical mayor de 6 mm, mala diferenciacion, tumor recurrente, invasion perineural, extension profunda al subcutaneo, y localizacion en oreja o labio. No es una puntuacion: es una lista, y basta uno para cambiar el margen, la indicacion de imagen y el seguimiento.', cutoff: 'Basta UN rasgo para ser de alto riesgo' },
      { metodo: 'Margen quirurgico por riesgo (calculadora disponible)', interpretacion: 'Basocelular operable: margen clinico de 3 mm o mas (fuerte a favor, calidad moderada). Epidermoide de BAJO riesgo: 4 mm o mas, que en lesiones menores de 2 cm consigue extirpacion completa en mas del 95% de los casos; por encima de 2 cm se recomiendan 6 mm. Epidermoide de ALTO riesgo: 6 mm o mas. Las guias europeas EDF-EADO-EORTC piden 5 mm como minimo en el de bajo riesgo y de 6 a 10 mm en el de alto riesgo.', cutoff: 'Basocelular 3 mm &middot; epidermoide 4 o 6 mm' },
      { metodo: 'Clasificacion ACTG TIS del Kaposi', interpretacion: 'El Kaposi NO esta en el sistema TNM de la AJCC. Para el asociado al sida se usa la clasificacion modificada del AIDS Clinical Trials Group, que es un TIS: Tumor, estado Inmunitario y enfermedad Sistemica. El Kaposi clasico tiene su propia clasificacion, centrada solo en el tumor y nacida de una serie de 300 pacientes. Para el endemico y el yatrogeno no hay sistema especifico.', cutoff: 'TIS: tumor, inmunidad y enfermedad sistemica' },
      { metodo: 'Como leer la fuerza GRADE', interpretacion: 'Cada recomendacion de las dos guias trae dos etiquetas independientes. La FUERZA (fuerte o condicional, a favor o en contra) dice cuanto se confia en que los beneficios superen a los da&#241;os; la CALIDAD (alta, moderada, baja, muy baja, u opinion de expertos) dice cuanto se confia en los datos. Pueden ir en direcciones opuestas: el caso extremo del tema es el de los inhibidores de Hedgehog, con recomendacion FUERTE a favor y calidad MUY BAJA.', cutoff: 'Fuerza y calidad son dos cosas distintas' }
    ],
    imagen: [
      { modalidad: 'Estadificacion basal en el basocelular avanzado', hallazgos: 'En el localmente avanzado y en el metastasico puede recomendarse una valoracion radiologica basal, y tambien en el seguimiento (las dos, condicionales a favor y por opinion de expertos). En el basocelular operable comun no hay indicacion de imagen.' },
      { modalidad: 'Estadificacion en el epidermoide de alto riesgo', hallazgos: 'En el de alto riesgo puede considerarse una estadificacion instrumental basal para detectar metastasis extracutaneas, y tambien imagen en el seguimiento (condicionales a favor, calidad muy baja en las dos). En el epidermoide de bajo riesgo no procede.' },
      { modalidad: 'Lo que NO se pide en el sarcoma de Kaposi', hallazgos: 'Las lesiones viscerales son INFRECUENTES: en un estudio, solo el 15% de 469 pacientes con Kaposi asociado al sida las tenia al diagnostico. La TC, la broncoscopia y la endoscopia NO estan justificadas en ausencia de sintomas que las sugieran, y el cribado del aparato respiratorio y del digestivo tampoco se recomienda, porque es raro que haya Kaposi visceral sin lesiones visibles en piel o mucosas.' },
      { modalidad: 'La excepcion que si merece mirarse', hallazgos: 'La CAVIDAD ORAL. Es con frecuencia la primera localizacion del Kaposi asociado al sida y es la que el propio paciente puede no ver, de modo que es el unico sitio donde el cribado tiene sentido. Mirar la boca cuesta diez segundos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `No hay una clasificacion unica para los tres tumores, porque son tres enfermedades distintas. Lo que hay son <strong>tres preguntas</strong>, una por tumor. En el <strong>basocelular</strong>: &#191;es operable, es localmente avanzado o es metastasico? El escalon que importa es el segundo, porque "localmente avanzado" significa que no es abordable con cirugia ni con radioterapia con intencion curativa razonable, y ahi entra el tratamiento sistemico. En el <strong>epidermoide</strong>: &#191;es de alto riesgo? Y eso se responde con una lista de seis rasgos del informe, de los que basta uno. En el <strong>Kaposi</strong>: &#191;cual de las formas epidemiologicas es? Porque la forma determina el tratamiento mucho mas que la extension, hasta el punto de que en dos de ellas el tratamiento consiste en arreglar la inmunidad y no en tratar el tumor.`,
    escalas: [
      { nombre: 'Riesgo del carcinoma epidermoide (calculadora disponible)', componentes: 'Espesor vertical, grado de diferenciacion, antecedente de recurrencia, invasion perineural, extension al tejido subcutaneo y localizacion.', formula: 'Lista de rasgos, no puntuacion: basta UNO para clasificar el tumor como de alto riesgo.', interpretacion: 'Los seis rasgos son: espesor mayor de 6 mm, mala diferenciacion celular, tumor recurrente, invasion perineural, extension profunda al subcutaneo y localizacion en OREJA o LABIO. De esta respuesta dependen el margen quirurgico, la indicacion de cirugia de Mohs, la de radioterapia adyuvante y la de imagen basal y de seguimiento. Las guias europeas a&#241;aden el umbral de 6 mm de espesor como criterio por si solo.' },
      { nombre: 'Margen quirurgico segun el tumor y el riesgo (calculadora disponible)', componentes: 'Tipo de tumor, tama&#241;o y clasificacion de riesgo.', formula: 'Basocelular operable: 3 mm o mas. Epidermoide de bajo riesgo: 4 mm o mas, y 6 mm si supera los 2 cm. Epidermoide de alto riesgo: 6 mm o mas.', interpretacion: 'El margen de 3 mm del basocelular tiene recomendacion FUERTE a favor con calidad moderada, que es de lo mas solido del tema. Los del epidermoide son condicionales y por opinion de expertos, porque no hay estudios que fijen el minimo: se apoyan en el trabajo prospectivo de Brodland y Zitelli de 1992, en el que 4 mm bastaban para extirpar por completo mas del 95% de las lesiones de menos de 2 cm. Ampliar margenes no es gratis: mas complicaciones, mas cicatriz, mas dolor y mas sangrado.' },
      { nombre: 'Basocelular: operable, localmente avanzado o metastasico', componentes: 'Posibilidad de cirugia o de radioterapia con intencion curativa razonable, y presencia de metastasis confirmadas.', formula: 'Tres categorias, de las que la intermedia es funcional y no anatomica.', interpretacion: 'El basocelular metastasico es EXTREMADAMENTE raro: la incidencia estimada esta entre el 0,0028% y el 0,55%. El localmente avanzado no se define por un tama&#241;o sino por una imposibilidad, la de tratarlo con cirugia o radioterapia con intencion curativa razonable, y es la categoria que abre la puerta a los inhibidores de la via Hedgehog.' },
      { nombre: 'Clasificacion ACTG TIS del Kaposi asociado al sida', componentes: 'Tumor (T), estado inmunitario (I) y enfermedad sistemica (S), cada uno en dos categorias.', formula: 'Clasificacion modificada del AIDS Clinical Trials Group. No forma parte del TNM de la AJCC.', interpretacion: 'Es la unica estadificacion con uso extendido en el Kaposi, y solo para la forma asociada al sida. Su logica es la del tema entero: el pronostico no depende solo del tumor, sino tambien de cuanta inmunidad le queda al paciente y de si hay enfermedad sistemica. El Kaposi clasico tiene una clasificacion propia centrada solo en el tumor; para el endemico y el yatrogeno no hay ninguna.' },
      { nombre: 'Las cinco formas epidemiologicas del sarcoma de Kaposi', componentes: 'Contexto inmunitario, poblacion, distribucion de las lesiones y curso.', formula: 'Clasico o esporadico, endemico, epidemico o asociado al sida, yatrogeno, y una quinta forma emergente.', interpretacion: 'Las cuatro clasicas son: ESPORADICA en varones de edad media y avanzada de zonas de alta prevalencia del virus (Mediterraneo, Oriente Medio, Europa del este), limitada a miembros inferiores e indolente; ENDEMICA en el Africa subsahariana, agresiva en ni&#241;os con adenopatias y linfedema, indolente en adultos; EPIDEMICA asociada al VIH; y YATROGENA tras trasplante de organo solido. La quinta, cada vez mas reconocida, es el Kaposi en hombres que tienen sexo con hombres SIN infeccion por VIH ni inmunodepresion.' },
      { nombre: 'Como se lee una recomendacion GRADE', componentes: 'Fuerza de la recomendacion y calidad de la evidencia, que son dos etiquetas independientes.', formula: 'Fuerza: fuerte o condicional, a favor o en contra. Calidad: alta, moderada, baja, muy baja, u opinion de expertos.', interpretacion: 'Conviene tenerlo presente al estudiar este tema, porque la disociacion entre las dos es constante. Ejemplos reales de las guias: dermatoscopia en el basocelular, fuerte a favor con calidad ALTA; cirugia frente a imiquimod, condicional a favor con calidad MUY BAJA; inhibidores de Hedgehog en el avanzado, FUERTE a favor con calidad MUY BAJA, y el propio panel explica por que: no hay alternativa terapeutica y por eso no se pudieron hacer ensayos aleatorizados.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Queratosis actinica y campo de cancerizacion',
      color: '#8a7a3a',
      definicion: 'Lesiones queratosicas sobre piel cronicamente fotoexpuesta, marcador reconocido de da&#241;o solar acumulado y precursoras de una parte de los carcinomas epidermoides.',
      fisiopatologia: 'La exposicion cronica acumulada a la radiacion ultravioleta no da&#241;a una celula sino un area entera, y de ahi la nocion de CAMPO de cancerizacion: alrededor de la lesion visible hay piel con el mismo da&#241;o genetico, de la que pueden ir surgiendo lesiones nuevas. Por eso el tratamiento de campo tiene sentido como concepto.',
      epidemiologia: 'El uso regular y correcto de fotoprotector ha demostrado reducir la aparicion de queratosis actinicas. En el ensayo australiano de Nambour, la fraccion de canceres cutaneos evitables con fotoproteccion regular se estimo en el 9,3% para el epidermoide y el 14% para el melanoma.',
      factores_riesgo: ['Exposicion solar cronica acumulada', 'Trabajo al aire libre', 'Fototipo claro', 'Edad avanzada', 'Inmunosupresion', 'Fuentes artificiales de ultravioleta: PUVA y cabinas de bronceado'],
      clinica: 'Lesiones multiples sobre piel fotoexpuesta. Cuando el epidermoide nace sobre multiples queratosis actinicas o en areas con tumores multiples, el problema deja de ser una lesion y pasa a ser un area.',
      criterios_dx: 'Clinico y dermatoscopico en la mayoria de los casos. La excepcion que la guia marca como OBLIGATORIA: la variante PIGMENTADA comparte rasgos clinicos y dermatoscopicos con el lentigo maligna, de modo que ahi hay que biopsiar, aunque sea de forma incisional.',
      tx_medico: 'Fotoproteccion de por vida, que es a la vez prevencion primaria y secundaria. En los trabajadores expuestos, el equipo de proteccion personal es una medida secundaria y NO sustituye a limitar la exposicion.',
      tx_farmacologico: 'Para el campo de cancerizacion hay topicos (imiquimod al 5% o al 3,75%, diclofenaco en gel al 3%, mebutato de ingenol) y tecnicas destructivas (crioterapia, curetaje con electrocoagulacion, terapia fotodinamica con acido aminolevulinico o metil-aminolevulinico). En un ensayo aleatorizado con 225 lesiones de epidermoide no invasivo y enfermedad de Bowen, la terapia fotodinamica logro la mayor tasa de respuesta completa (93%), seguida de la crioterapia (86%) y del 5-fluorouracilo (83%).',
      dx_diferencial: 'Queratosis seborreica, lentigo solar, basocelular superficial, enfermedad de Bowen y, en la variante pigmentada, lentigo maligna. Esa ultima es la que obliga a la biopsia.',
      complementarios: 'Quimioprevencion en el paciente de alto riesgo: condicional a favor, calidad baja. En el analisis de ocho ensayos con 626 pacientes el beneficio fue real pero modesto, y se concentro en los RETINOIDES (tres estudios) y en el celecoxib (uno); la nicotinamida y los antioxidantes no mostraron efecto significativo en ese analisis.',
      pronostico: 'La mayoria de las queratosis actinicas no progresa. Su valor es doble: como marcador del da&#241;o acumulado, que identifica al paciente que hay que vigilar, y como lesion tratable.',
      algoritmo: ['Reconocer que hay un CAMPO, no una lesion aislada', '&#191;Es una queratosis actinica PIGMENTADA? Biopsiar: puede ser un lentigo maligna', 'Tratar el campo: topico o tecnica destructiva', 'Recordar que ninguna de esas tecnicas permite analizar el margen histologico', 'Fotoproteccion de por vida y revision periodica', 'Si el paciente es de alto riesgo, valorar quimioprevencion con retinoides'],
      figura: 'mapa-tres-tumores'
    },
    {
      nombre: 'Carcinoma basocelular: reconocerlo y operarlo',
      color: '#4a6b7a',
      definicion: 'Proliferacion maligna de queratinocitos basales. Es el cancer mas frecuente del ser humano y su pronostico es excelente, pero si se le deja progresar, o en el subgrupo con comportamiento biologico agresivo, produce destruccion local importante.',
      fisiopatologia: 'El factor principal es la radiacion ultravioleta, y el patron de exposicion se refleja en el subtipo: el NODULAR se asocia a exposicion cronica, predomina en cabeza y cuello y aumenta con la edad, y el SUPERFICIAL se asocia a exposicion INTERMITENTE y predomina en el tronco. Que el basocelular aparezca antes en la vida que el epidermoide y con frecuencia en el tronco sugiere que necesita una dosis acumulada de ultravioleta MENOR.',
      epidemiologia: 'En el informe AIRTUM de 2019 se estimaron 64.000 nuevos basocelulares y 19.000 epidermoides al a&#241;o en Italia. En datos estadounidenses, la incidencia del basocelular fue de 525 por 100.000 y la prevalencia de 51,2 por 100.000, con una mortalidad de CERO. La exposicion solar en edad temprana predice el desarrollo posterior, y el uso frecuente de cabinas de bronceado es el factor mas importante en los jovenes.',
      factores_riesgo: ['Exposicion solar cronica y tambien intermitente, segun el subtipo', 'Fototipo claro', 'Exposicion solar en la infancia y la juventud', 'Cabinas de bronceado, sobre todo en jovenes', 'Trabajo al aire libre: en el 95% de los estudios el riesgo fue mayor', 'Inmunosupresion', 'Radiacion ionizante y exposicion a arsenico'],
      clinica: 'La morfologia esta en el tema de Exploracion de piel y faneras. Lo que a&#241;ade este modulo es que el subtipo orienta la conducta y que el tumor recurrente o de alto riesgo cambia la tecnica quirurgica.',
      criterios_dx: 'Dermatoscopia por delante de la inspeccion visual sola: es de las pocas recomendaciones FUERTES con calidad de evidencia ALTA de todo el tema. La microscopia confocal de reflectancia puede considerarse por delante de la dermatoscopia sola (condicional, calidad moderada).',
      tx_intervencionista: 'Cirugia con margen clinico de 3 mm o mas (fuerte a favor, calidad moderada). En el tumor RECURRENTE o de ALTO RIESGO puede considerarse la cirugia de MOHS frente a la exeresis estandar (condicional a favor, pero con calidad de evidencia muy baja). Tras una exeresis con margenes positivos, la guia recomienda la REEXERESIS por delante de la radioterapia (condicional en contra de la radioterapia, calidad muy baja).',
      tx_medico: 'La cirugia es la primera opcion frente a todas las alternativas evaluadas, y la guia lo dice una por una: frente a imiquimod, a 5-fluorouracilo topico, a terapia fotodinamica, a crioterapia, a laser, a cauterizacion y a radioterapia. La fuerza varia: es FUERTE frente a la terapia fotodinamica, la crioterapia y la radioterapia, y condicional frente al resto. La electroquimioterapia NO debe considerarse primera opcion ni siquiera en pacientes con contraindicaciones relativas a cirugia y radioterapia.',
      tx_farmacologico: 'En el basocelular operable no hay papel para el tratamiento sistemico. Ver la ficha siguiente para el localmente avanzado y el metastasico.',
      seguimiento_ambulatorio: 'Revision periodica de toda la piel: quien ha tenido un basocelular tiene da&#241;o actinico y tendra mas lesiones. Fotoproteccion con factor 30 o superior como medida de primera opcion en expuestos (condicional a favor, calidad moderada).',
      pronostico: 'Excelente, con mortalidad practicamente nula. El riesgo real es la destruccion local y la morbilidad de tratar tarde una lesion en una zona comprometida de la cara.',
      algoritmo: ['Dermatoscopia antes que inspeccion sola: fuerte a favor y calidad alta', 'Confirmar y planificar la exeresis', 'Margen clinico de 3 mm o mas', '&#191;Recurrente o de alto riesgo? Valorar cirugia de Mohs', '&#191;Margenes positivos? Reexeresis, no radioterapia', 'Si no es abordable con cirugia ni radioterapia: es localmente avanzado, ver la ficha siguiente', 'Seguimiento de toda la piel y fotoproteccion']
    },
    {
      nombre: 'Basocelular avanzado: los inhibidores de Hedgehog',
      color: '#5a7a8a',
      definicion: 'Basocelular localmente avanzado (el que no es abordable con cirugia ni con radioterapia con intencion curativa razonable) y basocelular metastasico.',
      fisiopatologia: 'La via de se&#241;alizacion Hedgehog esta activada de forma aberrante en el basocelular, y es la diana de vismodegib y sonidegib.',
      epidemiologia: 'El metastasico es extremadamente raro, con una incidencia estimada entre el 0,0028% y el 0,55%. El localmente avanzado es mas frecuente y se define por una imposibilidad terapeutica, no por un tama&#241;o.',
      clinica: 'Tumores extensos o en localizaciones donde la cirugia dejaria un defecto inaceptable, con frecuencia en la cara y en pacientes que han ido demorando la consulta durante a&#241;os.',
      criterios_dx: 'La definicion es funcional: hay que haber concluido que ni la cirugia ni la radioterapia ofrecen una intencion curativa razonable. Esa conclusion se toma en comite, no en consulta.',
      imagen: 'Valoracion radiologica basal al diagnostico y tambien durante el seguimiento: las dos son recomendaciones condicionales a favor y por opinion de expertos.',
      tx_farmacologico: 'Inhibidores de la via Hedgehog, con recomendacion FUERTE a favor frente a seguimiento o mejor tratamiento de soporte. Vismodegib y sonidegib estan aprobados para el localmente avanzado; solo vismodegib tiene ademas la indicacion en el metastasico.',
      tx_medico: 'Aqui esta la leccion metodologica del tema. La calidad de la evidencia que sostiene esa recomendacion fuerte es MUY BAJA, y el propio panel explica por que decidio adoptarla igualmente: la ausencia de un estandar terapeutico para el basocelular localmente avanzado y metastasico hizo imposible realizar ensayos aleatorizados, y en la practica diaria no existe hoy alternativa terapeutica. Es decir, la recomendacion es fuerte porque no hay nada mas, no porque la evidencia sea buena.',
      complementarios: 'La toxicidad de los inhibidores de Hedgehog condiciona el tratamiento tanto como su eficacia, y es la que suele llevar al paciente a consultar: espasmos musculares, alopecia, disgeusia, perdida de apetito y perdida de peso. Son efectos de clase, aparecen pronto y explican buena parte de las suspensiones.',
      seguimiento_ambulatorio: 'Valoracion radiologica periodica y vigilancia de la tolerancia. El paciente que abandona el tratamiento por toxicidad suele recidivar.',
      pronostico: 'El tratamiento sistemico permite respuestas y preservacion de organo en una parte de los pacientes, pero la recidiva tras suspenderlo es frecuente.',
      algoritmo: ['Confirmar en comite que no es abordable con cirugia ni radioterapia', 'Valoracion radiologica basal', 'Iniciar inhibidor de Hedgehog: vismodegib o sonidegib', 'Si es metastasico, solo vismodegib tiene la indicacion', 'Informar de la toxicidad de clase antes de empezar, no despues', 'Valoracion radiologica en el seguimiento', 'Recordar que la recomendacion es fuerte por falta de alternativa, no por calidad de la evidencia']
    },
    {
      nombre: 'Carcinoma epidermoide: el riesgo esta en el informe',
      color: '#8c5a3a',
      definicion: 'Carcinoma de queratinocitos con capacidad de metastatizar, a diferencia del basocelular. Supone alrededor del 20-25% de todos los tumores cutaneos.',
      fisiopatologia: 'Exposicion ultravioleta cronica acumulada: en el 90% de los casos nace en areas cronicamente expuestas (cabeza, cuello, dorso de manos y antebrazos), y la incidencia sube de forma marcada con la edad. La inflamacion cronica es la otra via: epidermolisis ampollosa, heridas cronicas, quemaduras, cicatrices y ulceras de miembros inferiores.',
      epidemiologia: 'Unos 19.000 casos nuevos al a&#241;o en Italia segun AIRTUM 2019. La incidencia es mayor a latitudes bajas, en correlacion con la intensidad luminica, y en quienes trabajan al aire libre.',
      factores_riesgo: ['Exposicion ultravioleta cronica acumulada y trabajo al aire libre', 'Fototipo claro y edad avanzada', 'PUVA y cabinas de bronceado, sobre todo si la exposicion fue joven', 'INMUNOSUPRESION, que es el factor que mas cambia el riesgo', 'Genodermatosis: albinismo, xeroderma pigmentoso, epidermodisplasia verruciforme', 'Inflamacion cronica: epidermolisis ampollosa, quemaduras, cicatrices, ulceras cronicas', 'Inhibidores de BRAF, que pueden provocar epidermoides eruptivos', 'Infeccion por virus del papiloma humano en el contexto de inmunosupresion'],
      clinica: 'El diagnostico clinico y dermatoscopico es mas dificil que el del basocelular, porque depende del estadio: el nodular ya desarrollado no plantea problema, pero las formas tempranas pueden parecer un basocelular o incluso una enfermedad inflamatoria, y en esas no se suele hacer confirmacion histologica en la rutina diaria. Las variantes hiperqueratosicas y las ulceradas ocultan y modifican los rasgos dermatoscopicos.',
      criterios_dx: 'Histologico. Y lo que el informe tiene que permitir decir es si el tumor es de ALTO RIESGO: espesor mayor de 6 mm, mala diferenciacion celular, tumor recurrente, invasion perineural, extension profunda al tejido subcutaneo, localizacion en oreja o labio. Basta uno.',
      laboratorio: 'No hay analitica. El riesgo sale del informe y de la exploracion.',
      dx_diferencial: 'Queratosis actinica, enfermedad de Bowen, basocelular, queratoacantoma y, en la forma pigmentada de la queratosis actinica, lentigo maligna.',
      tx_intervencionista: 'Exeresis quirurgica completa, que cura en torno al 95% y es lo unico que permite analizar el margen. Margen de 4 mm o mas en el de bajo riesgo (6 mm si supera los 2 cm) y de 6 mm o mas en el de alto riesgo. En el recurrente o de alto riesgo puede considerarse la cirugia de Mohs frente a la exeresis simple.',
      tx_medico: 'Frente a radioterapia, a cauterizacion y a crioterapia, la cirugia con margenes libres es la primera opcion en el tumor no recurrente y operable (condicionales a favor). Las tecnicas destructivas y los topicos tienen su sitio en el campo de cancerizacion, no en el carcinoma invasivo, y con un limite que conviene repetir: no permiten analizar el margen.',
      pronostico: 'Favorable en la mayoria. El problema se concentra en las formas localmente avanzadas y metastasicas, que aparecen sobre todo en inmunodeprimidos, en receptores de trasplante y en personas con dificultades sociales que consultan tarde.',
      algoritmo: ['Biopsiar y pedir un informe que permita clasificar el riesgo', 'Revisar los seis rasgos: espesor, diferenciacion, recurrencia, perineural, subcutaneo, oreja o labio', '&#191;Alguno presente? Es de ALTO riesgo', 'Fijar el margen: 4 mm si es bajo riesgo, 6 mm si es alto', '&#191;Recurrente o alto riesgo? Valorar Mohs', 'En el de alto riesgo, seguir con la ficha siguiente'],
      figura: 'riesgo-epidermoide'
    },
    {
      nombre: 'Epidermoide de alto riesgo: lo que si y lo que no',
      color: '#8c3a34',
      definicion: 'Carcinoma epidermoide con al menos uno de los seis rasgos de alto riesgo. Es donde se concentran la recidiva, la metastasis y las decisiones dificiles.',
      clinica: 'El paciente tipico combina varios: tumor grande en oreja o labio, en piel cronicamente da&#241;ada, con frecuencia ya operado una vez, y muchas veces inmunodeprimido.',
      criterios_dx: 'Los seis rasgos del informe. Las guias europeas a&#241;aden que un espesor vertical mayor de 6 mm basta por si solo, y que entre 6 y 10 mm de margen es lo que piden para estos tumores.',
      tx_intervencionista: 'Margen de 6 mm o mas (condicional a favor, opinion de expertos) y cirugia de Mohs a considerar frente a la exeresis simple. Radioterapia ADYUVANTE tras la exeresis: puede considerarse frente a no dar nada (condicional a favor, y con calidad de evidencia MODERADA, que en este tema es mucho).',
      tx_medico: 'Y aqui estan las dos recomendaciones EN CONTRA que mas separan a este tumor del melanoma. La biopsia selectiva del GANGLIO CENTINELA no debe considerarse opcion primaria frente a solo seguimiento (condicional en contra, calidad muy baja). Y la linfadenectomia PROFILACTICA tampoco (condicional en contra, opinion de expertos). Quien venga de estudiar melanoma tiene que desaprender el reflejo: en el epidermoide cutaneo no se estadifica el ganglio de rutina.',
      imagen: 'Estadificacion instrumental BASAL para detectar metastasis extracutaneas, y tambien imagen en el SEGUIMIENTO: las dos condicionales a favor con calidad muy baja. Es la diferencia practica con el de bajo riesgo, donde no se pide nada.',
      complementarios: 'La quimiorradioterapia concomitante NO debe considerarse primera opcion tras la exeresis de un epidermoide de alto riesgo, frente a la radioterapia posoperatoria sola (condicional en contra). Es distinto del escenario del tumor irresecable, donde si puede considerarse.',
      seguimiento_ambulatorio: 'Clinico e instrumental. En el paciente inmunodeprimido con diagnostico de epidermoide, el seguimiento clinico-instrumental puede considerarse opcion primaria (condicional a favor, opinion de expertos), justamente por el riesgo de recidiva cutanea y de nuevas neoplasias cutaneas y extracutaneas que esa inmunosupresion sostenida genera.',
      pronostico: 'Peor que el del de bajo riesgo, y peor cuanto mas se acumulan los rasgos. La mayoria sigue curandose con cirugia adecuada.',
      algoritmo: ['Confirmar el alto riesgo con el informe', 'Margen de 6 mm o mas, y valorar Mohs', 'Estadificacion instrumental basal', 'Valorar radioterapia adyuvante (condicional a favor, calidad moderada)', 'NO ganglio centinela de rutina', 'NO linfadenectomia profilactica', 'NO quimiorradioterapia concomitante tras la cirugia', 'Seguimiento clinico e instrumental, mas estrecho si hay inmunosupresion']
    },
    {
      nombre: 'Epidermoide avanzado: cemiplimab',
      color: '#7a3a6b',
      definicion: 'Carcinoma epidermoide recurrente o metastasico que no es candidato a tratamiento curativo, y carcinoma irresecable.',
      epidemiologia: 'Es una minoria de los epidermoides, y aparece sobre todo en inmunodeprimidos, receptores de trasplante de organo solido y personas con dificultades sociales que llegan tarde.',
      clinica: 'Tumor que ya no se puede resecar con intencion curativa, o enfermedad a distancia.',
      tx_farmacologico: 'CEMIPLIMAB debe recomendarse como primera opcion frente a la quimioterapia en el recurrente o metastasico no candidato a tratamiento curativo. Es la recomendacion mas fuerte del tema en terapia sistemica: FUERTE a favor, aunque la calidad de la evidencia sea baja. El cambio es real: durante a&#241;os lo unico que habia era quimioterapia y terapia dirigida, y la aprobacion de los anti PD-1 (cemiplimab y pembrolizumab) reordeno el escenario.',
      tx_medico: 'La quimioterapia basada en platino puede considerarse frente a cuidados paliativos o mejor tratamiento de soporte en el paciente no candidato a tratamiento curativo (condicional a favor, calidad muy baja). Es decir: queda por detras del cemiplimab, pero por delante de no tratar.',
      tx_intervencionista: 'En el tumor NO RESECABLE, la quimiorradioterapia concomitante puede considerarse primera opcion (condicional a favor, calidad muy baja). Conviene no confundir este escenario con el posoperatorio, donde la misma intervencion esta recomendada EN CONTRA.',
      complementarios: 'El paciente trasplantado plantea un problema propio y no resuelto en estas guias: el anti PD-1 puede desencadenar rechazo del injerto, de modo que la decision se toma caso por caso y con el equipo de trasplante.',
      pronostico: 'Ha mejorado con la inmunoterapia, aunque sigue siendo el extremo malo del tumor queratinocitico mas frecuente despues del basocelular.',
      algoritmo: ['Confirmar que no es candidato a tratamiento curativo', '&#191;Recurrente o metastasico? Cemiplimab de primera opcion', '&#191;Irresecable pero sin metastasis? Valorar quimiorradioterapia concomitante', '&#191;No candidato a inmunoterapia? Quimioterapia con platino antes que solo soporte', 'Si es trasplantado, decidir con el equipo de trasplante por el riesgo de rechazo']
    },
    {
      nombre: 'El inmunodeprimido y el trasplantado',
      color: '#3d5a73',
      definicion: 'El hilo que une los tres tumores de este modulo, y la parte que corresponde al internista mas que al dermatologo.',
      epidemiologia: 'La cifra que hay que recordar: los receptores de trasplante de organo solido tienen un riesgo de carcinoma epidermoide de 65 a 250 VECES mayor que la poblacion general. Y en el sarcoma de Kaposi yatrogeno, el riesgo se correlaciona con el GRADO de inmunosupresion, de modo que es mayor en los trasplantes multiorgano y con mayor disparidad HLA.',
      fisiopatologia: 'La inmunosupresion favorece el desarrollo y la progresion del epidermoide por dos vias: menos vigilancia inmunitaria frente a las celulas tumorales y menos control de la infeccion por virus del papiloma humano. En el Kaposi el mecanismo es mas directo: el herpesvirus humano 8 ya esta ahi y lo que falla es el control inmunitario que lo mantenia a raya.',
      factores_riesgo: ['Trasplante de organo solido o de progenitores hematopoyeticos', 'Enfermedad autoinmune que requiere inmunosupresion sistemica', 'Neoplasia solida avanzada', 'Hemopatia maligna, linfoma o leucemia', 'Infeccion por VIH', 'Todos los inmunosupresores y biologicos influyen, aunque en grado distinto'],
      clinica: 'Lo que cambia en este paciente no es el aspecto de las lesiones, es el numero, la velocidad y el pronostico: mas tumores, mas agresivos y con mas recidivas.',
      criterios_dx: 'Lo mismo que en el inmunocompetente, con mas umbral de sospecha y menos tolerancia a esperar.',
      tx_medico: 'Las dos recomendaciones que la guia dedica a este paciente son de organizacion asistencial, no de farmaco, y por eso se olvidan: las VISITAS DERMATOLOGICAS pueden considerarse opcion primaria frente a no hacerlas en el inmunodeprimido (condicional a favor, opinion de expertos, y la guia precisa que se refiere sobre todo al receptor de trasplante de organo solido); y el SEGUIMIENTO clinico-instrumental puede considerarse opcion primaria en el inmunodeprimido que ya tiene un epidermoide diagnosticado.',
      tx_farmacologico: 'Quimioprevencion a valorar en el de alto riesgo, con los retinoides como el grupo con beneficio mas consistente. Y en el Kaposi yatrogeno, la medida que mas rinde no es un citostatico: es REDUCIR o MODIFICAR la inmunosupresion, porque el tumor puede regresar con eso solo.',
      complementarios: 'Un detalle con nombre propio: los inhibidores de la via PI3K-AKT-mTOR, como el sirolimus, tienen actividad frente al Kaposi yatrogeno y frente al asociado al sida, lo que los convierte en una opcion interesante al replantear el esquema inmunosupresor de un trasplantado con Kaposi.',
      seguimiento_ambulatorio: 'Revision dermatologica periodica de TODA la piel, educacion en fotoproteccion y umbral bajo para biopsiar. Es barato y es lo unico que adelanta el diagnostico en esta poblacion.',
      pronostico: 'Peor que en el inmunocompetente para el epidermoide. En cambio, en el Kaposi yatrogeno el pronostico puede cambiar radicalmente con solo tocar la inmunosupresion.',
      algoritmo: ['Identificar al paciente: trasplante, autoinmune tratada, hemopatia, VIH', 'Programar revision dermatologica periodica, no a demanda', 'Explorar TODA la piel, incluida la boca', 'Umbral bajo para biopsiar cualquier lesion que cambie', 'Valorar quimioprevencion con retinoides en el de alto riesgo', 'Si aparece Kaposi: replantear la inmunosupresion antes que tratar el tumor', 'Si aparece epidermoide avanzado y es trasplantado: decidir el anti PD-1 con el equipo de trasplante']
    },
    {
      nombre: 'Sarcoma de Kaposi: las cinco formas',
      color: '#7a3a4a',
      definicion: 'Neoplasia vascular causada por el herpesvirus humano 8, tambien llamado herpesvirus del sarcoma de Kaposi. La enfermedad no la produce el virus solo: hace falta la combinacion de infeccion por el virus y deterioro de la inmunidad del huesped.',
      fisiopatologia: 'El virus se descubrio en 1994, veintidos a&#241;os despues de que Moritz Kaposi describiera la enfermedad en 1872 en varones europeos de edad avanzada. Sus proteinas inducen los cambios celulares que permiten al virus evadir la respuesta inmunitaria y a la celula infectada sobrevivir y proliferar. En el Kaposi clasico el deterioro inmunitario no es evidente y se atribuye a la INMUNOSENESCENCIA, es decir, al envejecimiento del sistema inmunitario.',
      epidemiologia: 'Hoy la mayoria de los casos ocurre en el Africa subsahariana, donde la infeccion por el virus es prevalente por transmision SALIVAL en la infancia, sumada a la epidemia de sida. En el Kaposi asociado al sida, el riesgo sube al bajar los CD4 y baja con el tratamiento antirretroviral.',
      factores_riesgo: ['Infeccion por el herpesvirus humano 8', 'Infeccion por VIH con CD4 bajos', 'Trasplante de organo solido, con riesgo proporcional a la inmunosupresion', 'Origen en zonas de alta prevalencia del virus: Mediterraneo, Oriente Medio, Europa del este', 'Edad avanzada, por inmunosenescencia, en la forma clasica', 'Ser hombre que tiene sexo con hombres, incluso sin infeccion por VIH'],
      clinica: 'CLASICO o esporadico: tipicamente confinado a miembros inferiores, con pocas lesiones; la enfermedad visceral y mucosa es rara y, cuando aparece, suele ser digestiva. Afecta a personas de edad media y avanzada, mas a hombres. ENDEMICO: en ni&#241;os se presenta con multiples adenopatias y linfedema y tiene una historia natural muy agresiva, con diseminacion visceral; en adultos da lesiones en miembros inferiores parecidas al clasico. EPIDEMICO o asociado al sida: puede dar edema asociado al tumor; la afectacion visceral NO es infrecuente y puede ser agresiva. YATROGENO: suele presentarse como lesiones cutaneas, aunque puede haber enfermedad mucosa y, rara vez, visceral. Y la QUINTA forma, en hombres que tienen sexo con hombres sin infeccion por VIH, jovenes o de edad media y no inmunodeprimidos: lesiones escasas en cualquier localizacion, con enfermedad visceral y mucosa rara.',
      criterios_dx: 'BIOPSIA. El diagnostico visual aislado tuvo un valor predictivo positivo de solo el 80% en un estudio de Africa oriental, con dos consecuencias: pacientes que recibieron quimioterapia sin necesitarla y pacientes a los que se les paso un diagnostico distinto y a menudo facil de tratar, como la angiomatosis bacilar.',
      laboratorio: 'Serologia de VIH y recuento de CD4 en todos. En el trasplantado, revision del esquema inmunosupresor.',
      imagen: 'Casi siempre, ninguna. Solo el 15% de 469 pacientes con Kaposi asociado al sida tenia lesiones viscerales al diagnostico, de modo que la TC, la broncoscopia y la endoscopia NO estan justificadas sin sintomas que las sugieran. El cribado del aparato respiratorio y del digestivo tampoco se recomienda: es raro que haya Kaposi visceral sin lesiones visibles en piel o mucosas.',
      complementarios: 'La excepcion que si merece buscarse activamente es la CAVIDAD ORAL, porque es con frecuencia la primera localizacion del Kaposi asociado al sida y es la que el paciente puede no ver.',
      dx_diferencial: 'Angiomatosis bacilar, que es el error que mas importa porque se trata con antibiotico; granuloma piogeno, angiosarcoma, dermatofibroma, hematoma y, en el paciente con VIH, otras lesiones violaceas.',
      pronostico: 'Depende por completo de la forma: indolente en el clasico, muy agresivo en el endemico infantil, reversible en el yatrogeno si se toca la inmunosupresion, y dependiente del control del VIH en el epidermico. En el Africa subsahariana el pronostico sigue siendo malo.',
      algoritmo: ['Ante una lesion violacea sospechosa, BIOPSIAR: el ojo solo acierta el 80%', 'Serologia de VIH y CD4 en todos', 'Identificar la forma: clasica, endemica, epidemica, yatrogena o la quinta', 'Mirar la boca', 'No pedir TC, broncoscopia ni endoscopia sin sintomas', 'Clasificar con el ACTG TIS si es asociado al sida'],
      figura: 'kaposi-formas'
    },
    {
      nombre: 'Kaposi: el tratamiento empieza por la inmunidad',
      color: '#5a4a8c',
      definicion: 'Tratamiento del sarcoma de Kaposi, que en dos de sus formas consiste en corregir el defecto inmunitario y no en atacar el tumor.',
      tx_medico: 'En el Kaposi asociado al sida NO tratado previamente y en fase precoz, el tratamiento debe EMPEZAR por el control del VIH con antirretrovirales, que con frecuencia produce la regresion del Kaposi. En el yatrogeno, la enfermedad puede regresar al reducir la inmunosupresion o al modificar el esquema inmunosupresor. En las dos, la primera medida no es un citostatico.',
      tx_farmacologico: 'En la enfermedad en estadio avanzado, la quimioterapia mas habitual es la DOXORUBICINA LIPOSOMAL PEGILADA o el PACLITAXEL, aunque rara vez es curativa. Entre las opciones exploradas estan los inmunomoduladores (talidomida, lenalidomida, pomalidomida), los inhibidores del proteasoma como el bortezomib, los inhibidores de la via PI3K-AKT-mTOR como el sirolimus, con actividad en el yatrogeno y en el asociado al sida, y agentes como el timolol y el propranolol, que inhiben la se&#241;alizacion beta-adrenergica por la que el virus impulsa la proliferacion.',
      complementarios: 'SINDROME INFLAMATORIO DE RECONSTITUCION INMUNITARIA del Kaposi. Es el empeoramiento clinico de un Kaposi existente o, menos veces, la aparicion o el desenmascaramiento de uno no diagnosticado, despues de que el tratamiento antirretroviral reconstituya la inmunidad. Su frecuencia comunicada va de menos del 10% a casi el 40%, segun la definicion que se use. La mayoria de las definiciones exige progresion del Kaposi en las 12 SEMANAS siguientes al inicio del antirretroviral, junto a una supresion del ARN del VIH de 0,5 a 1 logaritmo o mas, o un aumento de los CD4 de al menos 50 por microlitro.',
      factores_riesgo: ['Estadio T1 del Kaposi al iniciar el antirretroviral', 'Carga viral de VIH alta en plasma', 'ADN del virus del Kaposi detectable en plasma', 'Entorno de Africa subsahariana, donde es mas frecuente que en el Reino Unido'],
      criterios_dx: 'El del sindrome de reconstitucion es clinico y de cronologia: progresion dentro de las 12 semanas del inicio del antirretroviral con prueba de que la inmunidad se esta recuperando. No hay forma estandarizada de distinguir esa progresion de la historia natural del Kaposi, y conviene saberlo antes de etiquetar.',
      seguimiento_ambulatorio: 'Vigilancia estrecha las primeras doce semanas de antirretroviral en quien ya tiene Kaposi, porque es la ventana en la que aparece el sindrome de reconstitucion.',
      pronostico: 'La quimioterapia rara vez cura. Lo que cambia el pronostico de verdad es el control de la inmunidad: el antirretroviral en el epidemico y el ajuste de la inmunosupresion en el yatrogeno.',
      algoritmo: ['&#191;Asociado al sida y en fase precoz? Empezar por el antirretroviral', '&#191;Yatrogeno? Reducir o modificar la inmunosupresion antes que nada', 'Valorar el sirolimus al replantear el esquema del trasplantado', '&#191;Enfermedad avanzada? Doxorubicina liposomal pegilada o paclitaxel', 'Vigilar las 12 primeras semanas de antirretroviral: sindrome de reconstitucion', 'No confundir la reconstitucion con un fracaso del tratamiento']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Estos tres tumores llegan al internista por una puerta distinta de la del dermatologo. No llegan como una lesion que hay que diagnosticar, sino como un paciente que ya esta bajo su cuidado por otra cosa: el trasplantado al que le ajusta la inmunosupresion, el paciente con VIH recien diagnosticado, el anciano con da&#241;o solar de toda una vida al que ingresa por otro motivo y al que nadie le ha mirado la piel.',
    parametros: [
      'Al trasplantado, mirale la piel. Tiene de 65 a 250 veces mas riesgo de carcinoma epidermoide que la poblacion general, y la guia recomienda visitas dermatologicas programadas, no a demanda.',
      'Mira la BOCA en todo paciente con VIH o con Kaposi conocido: la cavidad oral es con frecuencia la primera localizacion del Kaposi asociado al sida y es la que el paciente no ve.',
      'Ante una lesion violacea sospechosa de Kaposi, biopsia. El diagnostico visual aislado acierta solo el 80%, y el error mas caro es tratar como Kaposi una angiomatosis bacilar, que se cura con antibiotico.',
      'No pidas TC, broncoscopia ni endoscopia en un Kaposi sin sintomas que las justifiquen: las lesiones viscerales aparecieron en solo el 15% al diagnostico.',
      'Si aparece un Kaposi en un trasplantado, lo primero no es la quimioterapia: es replantear la inmunosupresion, porque el tumor puede regresar con eso solo.',
      'Si aparece un Kaposi en alguien con VIH sin tratar, lo primero es el antirretroviral, que con frecuencia produce regresion.',
      'Vigila las 12 primeras semanas de antirretroviral en quien ya tiene Kaposi: es la ventana del sindrome inflamatorio de reconstitucion inmunitaria, y empeorar ahi no significa que el tratamiento haya fracasado.',
      'En el epidermoide, la pregunta util es si es de alto riesgo, y se responde con el informe: espesor mayor de 6 mm, mala diferenciacion, recurrencia, invasion perineural, extension al subcutaneo, oreja o labio.',
      'Y una que hay que desaprender si vienes del melanoma: en el carcinoma epidermoide NO se hace ganglio centinela de rutina, y la linfadenectomia profilactica esta recomendada en contra.'
    ],
    criterios_uci_general: 'Ninguno de los tres ingresa en criticos por si mismo. Las razones reales son la toxicidad del tratamiento sistemico, la sobreinfeccion de un tumor ulcerado extenso, y en el Kaposi la afectacion visceral agresiva de la forma epidemica o endemica, con compromiso respiratorio o hemorragia digestiva.',
    criterios_tips_general: 'En el basocelular localmente avanzado, el escalon es el tratamiento sistemico con inhibidores de Hedgehog, y la decision de que ya no es abordable con cirugia ni radioterapia se toma en comite. En el epidermoide de alto riesgo, el escalon es la radioterapia adyuvante y la estadificacion instrumental.',
    criterios_trasplante_general: 'Al reves de lo habitual: aqui el trasplante no es el destino sino el origen del problema. El antecedente de trasplante multiplica el riesgo de epidermoide y es la causa del Kaposi yatrogeno, y modificar la inmunosupresion es a la vez tratamiento y prevencion.',
    prevencion: 'Fotoproteccion con factor 30 o superior en los expuestos, como medida de primera opcion (condicional a favor, calidad moderada en el basocelular; condicional a favor con calidad muy baja en el epidermoide). Proteccion con ropa, sombrero y gafas, y evitar la exposicion directa; en los trabajadores al aire libre el equipo de proteccion personal es una medida SECUNDARIA y no sustituye a limitar la exposicion. Evitar las cabinas de bronceado, sobre todo en jovenes. Quimioprevencion con retinoides en el paciente de alto riesgo. Y revision dermatologica programada en el inmunodeprimido.'
  }
};

export const compCites = {
  'Queratosis actinica y campo de cancerizacion': { definicion: [2], fisiopatologia: [2], epidemiologia: [1, 2], criterios_dx: [2], tx_medico: [2], tx_farmacologico: [2], complementarios: [2] },
  'Carcinoma basocelular: reconocerlo y operarlo': { definicion: [1], fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], tx_intervencionista: [1], tx_medico: [1], seguimiento_ambulatorio: [1], pronostico: [1] },
  'Basocelular avanzado: los inhibidores de Hedgehog': { definicion: [1], epidemiologia: [1], imagen: [1], tx_farmacologico: [1], tx_medico: [1] },
  'Carcinoma epidermoide: el riesgo esta en el informe': { definicion: [2], fisiopatologia: [2], epidemiologia: [1, 2], criterios_dx: [2], clinica: [2], tx_intervencionista: [2], tx_medico: [2], pronostico: [2] },
  'Epidermoide de alto riesgo: lo que si y lo que no': { criterios_dx: [2], tx_intervencionista: [2], tx_medico: [2], imagen: [2], complementarios: [2], seguimiento_ambulatorio: [2] },
  'Epidermoide avanzado: cemiplimab': { definicion: [2], epidemiologia: [2], tx_farmacologico: [2], tx_medico: [2], tx_intervencionista: [2] },
  'El inmunodeprimido y el trasplantado': { epidemiologia: [2, 3], fisiopatologia: [2, 3], tx_medico: [2], tx_farmacologico: [2, 3], complementarios: [3] },
  'Sarcoma de Kaposi: las cinco formas': { definicion: [3], fisiopatologia: [3], epidemiologia: [3], clinica: [3], criterios_dx: [3], imagen: [3], complementarios: [3], pronostico: [3] },
  'Kaposi: el tratamiento empieza por la inmunidad': { tx_medico: [3], tx_farmacologico: [3], complementarios: [3], criterios_dx: [3], factores_riesgo: [3] }
};

export const estigmasTitulo = 'Datos que cambian la conducta en estos tres tumores';
export const estigmas = [
  { nombre: 'Espesor mayor de 6 mm', descripcion: 'En el carcinoma epidermoide basta por si solo para clasificar el tumor como de alto riesgo segun las guias europeas, y con ello cambian el margen (6 mm o mas), la indicacion de imagen basal y la de radioterapia adyuvante.' },
  { nombre: 'Invasion perineural', descripcion: 'Uno de los seis rasgos de alto riesgo del epidermoide. Aparece en el informe de patologia y es de los que mas se pasan por alto al leerlo deprisa, porque no cambia el aspecto de la lesion.' },
  { nombre: 'Localizacion en oreja o labio', descripcion: 'Es rasgo de alto riesgo por si misma en el carcinoma epidermoide. Dos localizaciones concretas que conviene memorizar, porque no se deducen de ningun principio general.' },
  { nombre: 'Basocelular superficial en el tronco', descripcion: 'Orienta a exposicion solar INTERMITENTE, mientras que el nodular de cabeza y cuello orienta a exposicion cronica. Que el basocelular aparezca en el tronco y antes en la vida que el epidermoide sugiere que necesita una dosis acumulada de ultravioleta menor.' },
  { nombre: 'Queratosis actinica PIGMENTADA', descripcion: 'Comparte rasgos clinicos y dermatoscopicos con el lentigo maligna, de modo que la guia considera OBLIGATORIA la biopsia, aunque sea incisional. Es la excepcion a tratar el campo sin confirmar.' },
  { nombre: 'Lesion violacea en paciente con VIH', descripcion: 'Obliga a biopsiar antes de tratar: el diagnostico visual aislado de Kaposi tuvo solo un 80% de valor predictivo positivo, y el error que mas importa es confundirlo con una angiomatosis bacilar, que se cura con antibiotico.' },
  { nombre: 'Kaposi en la cavidad oral', descripcion: 'Es con frecuencia la PRIMERA localizacion del Kaposi asociado al sida y la que el paciente no se ve. Es el unico sitio donde el cribado del Kaposi tiene sentido, y mirarlo cuesta diez segundos.' },
  { nombre: 'Epidermoides eruptivos bajo inhibidor de BRAF', descripcion: 'Los inhibidores de BRAF pueden provocar la aparicion de carcinomas epidermoides eruptivos, por potenciar mutaciones preexistentes en areas cronicamente fotoexpuestas o por reducir las defensas frente al virus del papiloma humano.' }
];

export const biopsiaTitulo = 'Biopsia: que confirma y que ademas clasifica';
export const biopsia = {
  indicaciones: [
    'Toda lesion con sospecha clinica o dermatoscopica de carcinoma queratinocitico',
    'Toda queratosis actinica PIGMENTADA, por el diferencial con el lentigo maligna',
    'Toda lesion violacea con sospecha de sarcoma de Kaposi, antes de tratar',
    'Cualquier lesion nueva o cambiante en un paciente inmunodeprimido o trasplantado',
    'Toda lesion sobre cicatriz, quemadura o ulcera cronica que no cura'
  ],
  ventajas: [
    'En el epidermoide, el informe no solo diagnostica: CLASIFICA el riesgo y con ello decide el margen',
    'La exeresis permite ademas analizar los margenes, con tasas de curacion del 95%',
    'En el Kaposi evita dos errores caros: quimioterapia innecesaria y pasar por alto una angiomatosis bacilar',
    'Permite identificar el subtipo histologico, que en el basocelular orienta sobre el comportamiento'
  ],
  limitaciones: [
    'Las tecnicas destructivas y los topicos NO permiten analizar el margen histologico',
    'En el epidermoide temprano la clinica y la dermatoscopia son menos fiables que en el basocelular',
    'En las formas hiperqueratosicas y ulceradas, la queratina y la ulceracion ocultan los rasgos dermatoscopicos',
    'En entornos con recursos limitados el diagnostico de Kaposi se hace a ojo, y eso tiene un coste medible'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion',
    'En zonas comprometidas de la cara, planificar la biopsia pensando ya en la reconstruccion',
    'No destruir una lesion sospechosa sin diagnostico: se pierde la posibilidad de clasificar el riesgo',
    'En el paciente fragil, valorar si el resultado va a cambiar la conducta antes de biopsiar'
  ]
};

export const escalaRefs = {
  'Riesgo del carcinoma epidermoide (calculadora disponible)': [2],
  'Margen quirurgico segun el tumor y el riesgo (calculadora disponible)': [1, 2],
  'Basocelular: operable, localmente avanzado o metastasico': [1],
  'Clasificacion ACTG TIS del Kaposi asociado al sida': [3],
  'Las cinco formas epidemiologicas del sarcoma de Kaposi': [3],
  'Como se lee una recomendacion GRADE': [1, 2]
};

export const escalaCalc = {
  'Riesgo del carcinoma epidermoide (calculadora disponible)': 'riesgo-epidermoide',
  'Margen quirurgico segun el tumor y el riesgo (calculadora disponible)': 'margen-queratinocitico'
};

export const compGroups = [
  { title: 'Carcinoma basocelular', items: ['Carcinoma basocelular: reconocerlo y operarlo', 'Basocelular avanzado: los inhibidores de Hedgehog'] },
  { title: 'Carcinoma epidermoide', items: ['Queratosis actinica y campo de cancerizacion', 'Carcinoma epidermoide: el riesgo esta en el informe', 'Epidermoide de alto riesgo: lo que si y lo que no', 'Epidermoide avanzado: cemiplimab'] },
  { title: 'El huesped', items: ['El inmunodeprimido y el trasplantado'] },
  { title: 'Sarcoma de Kaposi', items: ['Sarcoma de Kaposi: las cinco formas', 'Kaposi: el tratamiento empieza por la inmunidad'] }
];

export const complicacionesIntro = 'Las fichas van por tumor, y dentro de cada uno separan lo que se opera de lo que ya no. El basocelular tiene dos: la enfermedad comun, que se cura con cirugia, y la localmente avanzada, que es donde aparece la leccion metodologica del tema sobre como leer una recomendacion fuerte apoyada en evidencia muy mala. El epidermoide tiene cuatro, empezando por la queratosis actinica y el campo de cancerizacion, porque es de donde sale buena parte de ellos, y siguiendo por la pregunta que lo ordena todo: si es de alto riesgo. En medio hay una ficha que no es de ningun tumor y es la que mas importa a un internista, la del paciente inmunodeprimido y trasplantado, que es el hilo que une los tres. Y el Kaposi cierra con dos: reconocer la forma, y un tratamiento que en dos de las cinco formas consiste en arreglar la inmunidad y no en atacar el tumor.';

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
  root: { title: 'TUMOR CUTANEO NO MELANOMA', color: '#4a6b7a', target: 'definicion' },
  branches: [
    { title: 'Basocelular', sub: 'Casi nunca metastatiza', color: '#4a6b7a', target: 'complicaciones', leaves: [
      { title: 'Operable', sub: 'Cirugia con 3 mm de margen', color: '#4a6b7a', target: 'complicaciones' },
      { title: 'Localmente avanzado', sub: 'Inhibidores de Hedgehog', color: '#5a7a8a', target: 'complicaciones' }
    ] },
    { title: 'Epidermoide', sub: 'SI metastatiza &middot; &#191;alto riesgo?', color: '#8c5a3a', target: 'clasificacion', leaves: [
      { title: 'Los seis rasgos', sub: 'Basta uno del informe', color: '#8c5a3a', target: 'clasificacion' },
      { title: 'Alto riesgo', sub: '6 mm, Mohs, imagen, NO centinela', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Avanzado', sub: 'Cemiplimab de primera linea', color: '#7a3a6b', target: 'complicaciones' }
    ] },
    { title: 'Kaposi', sub: 'Virus VHH-8 + inmunidad rota', color: '#7a3a4a', target: 'complicaciones', leaves: [
      { title: 'Cinco formas', sub: 'La forma manda sobre la extension', color: '#7a3a4a', target: 'clasificacion' },
      { title: 'Arreglar la inmunidad', sub: 'Antirretroviral o bajar inmunosupresion', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'El huesped', sub: 'Trasplantado: 65 a 250 veces mas riesgo', color: '#3d5a73', target: 'complicaciones' }
  ]
};

export const diagCites = { laboratorio: [1, 2, 3], no_invasivos: [1, 2, 3], imagen: [1, 2, 3], biopsia: [2, 3] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 2, 3];
export const figurasDefinicion = ['mapa-tres-tumores'];
export const figurasClasificacion = ['riesgo-epidermoide', 'kaposi-formas'];

export const figuras = {
  'mapa-tres-tumores': {
    titulo: 'Tres tumores que solo comparten el huesped',
    fuente: 'Basocelular y epidermoide: Queirolo P, et al. ESMO Open 2023;8(6):102037 y 2024;9(5):103005. Kaposi: Cesarman E, et al. Nat Rev Dis Primers 2019;5(1):9.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Basocelular</th><th>Epidermoide</th><th>Sarcoma de Kaposi</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">De que celula sale</td><td>Queratinocito basal</td><td>Queratinocito</td><td>Celula endotelial (tumor vascular)</td></tr>
            <tr><td class="figure-org">Que lo causa</td><td>Ultravioleta acumulada</td><td>Ultravioleta acumulada</td><td><strong>Virus</strong> (herpesvirus humano 8) + inmunidad rota</td></tr>
            <tr><td class="figure-org">&#191;Metastatiza?</td><td><span class="figure-tag">Casi nunca: 0,0028 a 0,55%</span></td><td><span class="figure-tag dys">Si, y por eso hay alto riesgo</span></td><td>Visceral en el 15% al diagnostico</td></tr>
            <tr><td class="figure-org">La pregunta que lo ordena</td><td>&#191;Es operable, localmente avanzado o metastasico?</td><td>&#191;Es de alto riesgo?</td><td>&#191;Cual de las cinco formas es?</td></tr>
            <tr><td class="figure-org">Tratamiento del caso comun</td><td>Cirugia, 3 mm de margen</td><td>Cirugia, 4 o 6 mm segun el riesgo</td><td>Arreglar la inmunidad</td></tr>
            <tr><td class="figure-org">Cuando eso no basta</td><td>Inhibidores de Hedgehog</td><td>Cemiplimab</td><td>Doxorubicina liposomal o paclitaxel</td></tr>
            <tr><td class="figure-org">El paciente de riesgo</td><td colspan="3"><strong>El inmunodeprimido.</strong> El trasplantado de organo solido tiene de 65 a 250 veces mas riesgo de epidermoide, y el Kaposi yatrogeno sigue al grado de inmunosupresion</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La fila que justifica que los tres esten en el mismo modulo es la ultima. Por lo demas, lo que hay que llevarse es la segunda y la tercera: el basocelular y el epidermoide comparten causa y se diferencian en que uno disemina y el otro practicamente no, mientras que el Kaposi <strong>no es un tumor del sol sino de un virus</strong>, y por eso su tratamiento empieza donde no empieza el de los otros dos: devolviendole al paciente la inmunidad que ha perdido.</div>`
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
            <tr><td class="figure-org">Mala diferenciacion celular</td></tr>
            <tr><td class="figure-org">Tumor recurrente</td></tr>
            <tr><td class="figure-org">Invasion perineural</td></tr>
            <tr><td class="figure-org">Extension profunda al subcutaneo</td></tr>
            <tr><td class="figure-org">Localizacion en OREJA o LABIO</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lo que cambia</th><th>Bajo riesgo</th><th>Alto riesgo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Margen quirurgico</td><td>4 mm o mas (6 mm si pasa de 2 cm)</td><td><strong>6 mm o mas</strong> (6 a 10 mm en las guias europeas)</td></tr>
            <tr><td class="figure-org">Cirugia de Mohs</td><td>No procede</td><td>A considerar, tambien si es recurrente</td></tr>
            <tr><td class="figure-org">Imagen basal</td><td>No</td><td>Si, para buscar metastasis extracutaneas</td></tr>
            <tr><td class="figure-org">Imagen en el seguimiento</td><td>No</td><td>Si</td></tr>
            <tr><td class="figure-org">Radioterapia adyuvante</td><td>No</td><td>A considerar <span class="figure-tag">calidad moderada</span></td></tr>
            <tr><td class="figure-org">Ganglio centinela</td><td colspan="2"><span class="figure-tag fail">NO de rutina, en ninguno de los dos</span></td></tr>
            <tr><td class="figure-org">Linfadenectomia profilactica</td><td colspan="2"><span class="figure-tag fail">Recomendada EN CONTRA</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las dos filas rojas son las que hay que <strong>desaprender</strong> si uno viene de estudiar el melanoma, donde el ganglio centinela es el eje de la estadificacion. En el carcinoma epidermoide cutaneo no se hace de rutina (condicional en contra) y la linfadenectomia profilactica tampoco (condicional en contra). Y una nota sobre el margen: no hay ningun estudio que fije el minimo, de modo que estas cifras son opinion de expertos apoyada en el trabajo de Brodland y Zitelli de 1992, en el que 4 mm bastaban para extirpar por completo mas del 95% de las lesiones de menos de 2 cm.</div>`
  },
  'kaposi-formas': {
    titulo: 'Las cinco formas del sarcoma de Kaposi',
    fuente: 'Cesarman E, Damania B, Krown SE, Martin J, Bower M, Whitby D. Kaposi sarcoma. Nat Rev Dis Primers 2019;5(1):9, Tabla 1.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Forma</th><th>Quien</th><th>Como se presenta</th><th>Que hacer primero</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Clasica o esporadica</td><td>Edad media y avanzada, mas hombres; Mediterraneo, Oriente Medio y Europa del este</td><td>Pocas lesiones en miembros inferiores; visceral y mucosa raras</td><td>Tratamiento local; es indolente</td></tr>
            <tr><td class="figure-org">Endemica</td><td>Africa subsahariana, sin VIH</td><td>Ni&#241;os: adenopatias y linfedema, <span class="figure-tag fail">muy agresiva</span>. Adultos: como la clasica</td><td>Quimioterapia en la forma infantil</td></tr>
            <tr><td class="figure-org">Epidemica (sida)</td><td>Infeccion por VIH; el riesgo sube al bajar los CD4</td><td>Puede dar edema tumoral; la afectacion visceral NO es infrecuente</td><td><strong>Antirretroviral</strong>: con frecuencia regresa</td></tr>
            <tr><td class="figure-org">Yatrogena</td><td>Trasplante de organo solido; el riesgo sigue al grado de inmunosupresion</td><td>Sobre todo cutanea; mucosa posible, visceral rara</td><td><strong>Reducir o cambiar la inmunosupresion</strong></td></tr>
            <tr><td class="figure-org">La quinta</td><td>Hombres que tienen sexo con hombres SIN VIH, jovenes o de edad media, no inmunodeprimidos</td><td>Pocas lesiones en cualquier localizacion</td><td>Tratamiento local</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La columna que cambia la practica es la ultima: en <strong>dos de las cinco formas el primer tratamiento no es oncologico</strong>. En la epidémica se empieza por el antirretroviral, que con frecuencia hace regresar el tumor, y en la yatrogena por reducir o modificar la inmunosupresion. Dos avisos mas. Al iniciar el antirretroviral hay que vigilar <strong>12 semanas</strong>, que es la ventana del sindrome inflamatorio de reconstitucion inmunitaria, en el que el Kaposi empeora sin que el tratamiento haya fallado. Y antes de nada, <strong>biopsiar</strong>: el ojo solo acierta el 80%, y lo que mas se confunde es la angiomatosis bacilar, que se cura con antibiotico.</div>`
  }
};
