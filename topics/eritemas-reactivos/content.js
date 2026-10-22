// topics/eritemas-reactivos/content.js - Modulo 78: Eritemas reactivos, paniculitis y
// dermatosis neutrofilicas.
// Fuentes: revision de eritema nodoso (Schwartz RA, Nervi SJ. Am Fam Physician 2007), revision de
// eritema multiforme (Sokumbi O, Wetter DA. Int J Dermatol 2012), revision de sindrome de Sweet
// (Joshi TP, et al. Am J Clin Dermatol 2022) y revision sistematica de las asociaciones sistemicas
// del pioderma gangrenoso (Nadarajah N, et al. Skin Health Dis 2026).
// NOTA DE ALCANCE: ninguna de estas entidades tiene guia de practica clinica. Las dos fuentes de
// los eritemas son revisiones de 2007 y 2012, que son las que hay en Bibliografia/ y cuyo
// contenido clinico no ha cambiado; el tratamiento del Sweet y del pioderma apenas tiene
// evidencia controlada (en el pioderma, dos ensayos aleatorizados publicados en total). Donde el
// texto da una recomendacion, se dice de donde sale y con que respaldo.
// ALCANCE 2: el Stevens-Johnson y la necrolisis epidermica toxica viven en el modulo 77
// (Farmacodermias y eritrodermia); aqui solo aparece la frontera con el eritema multiforme. El
// sindrome de Lofgren vive en el tema de Sarcoidosis y se enlaza, no se repite.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'eritemas-reactivos',
  titulo: 'Eritemas reactivos, paniculitis y dermatosis neutrofilicas',
  subtitulo: 'Modulo 78 &middot; Dermatologia',
  accent: '#9c3a52',
  accentDim: '#b35c74'
};

export const definicionText = `<p style="margin:0 0 14px;">Este tema agrupa enfermedades que no tienen nada que ver entre si salvo lo unico que de verdad importa: <strong>ninguna de ellas es una enfermedad de la piel</strong>. Son la piel REACCIONANDO a otra cosa, que puede ser una infeccion, un farmaco, una enfermedad inflamatoria sistemica o una neoplasia. Por eso la pregunta util nunca es "&#191;que erupcion es esta?", sino <strong>"&#191;a que esta apuntando?"</strong>. Reconocer el patron no es el final del trabajo: es la indicacion para empezar a buscar.</p>
<p style="margin:0 0 14px;">La forma de ordenarlas es la <strong>profundidad</strong> de la lesion, porque la profundidad se ve y se palpa. Si la reaccion ocurre en la <strong>union de la epidermis con la dermis</strong>, se forma una lesion en DIANA con el centro oscuro: eso es el eritema multiforme. Si ocurre en la <strong>dermis</strong>, se forma una placa infiltrada, caliente y dolorosa, con edema tan marcado que parece jugosa: eso son las dermatosis neutrofilicas, el sindrome de Sweet y el pioderma gangrenoso. Y si ocurre en la <strong>grasa subcutanea</strong>, se forma un nodulo profundo, mal delimitado, que se palpa mas de lo que se ve: eso es una paniculitis, y la mas frecuente con diferencia es el eritema nodoso.</p>
<p style="margin:0 0 14px;">Dos consecuencias practicas que recorren todo el tema. La primera es de tecnica: para ver la grasa hay que llegar a la grasa, de modo que la paniculitis exige <strong>biopsia incisional o excisional profunda</strong> y un punch da una muestra insuficiente. La segunda es de criterio: en el Sweet y en el pioderma los <strong>cultivos son negativos y los antibioticos no funcionan</strong>, y eso no es un dato accesorio, es parte del diagnostico. El error mas caro del tema es tratar una de estas lesiones como una infeccion: desbridar un pioderma lo agranda, porque responde al traumatismo con mas enfermedad.</p>`;

export const bibliografia = [
  'Schwartz RA, Nervi SJ. Erythema nodosum: a sign of systemic disease. Am Fam Physician. 2007;75(5):695-700.',
  'Sokumbi O, Wetter DA. Clinical features, diagnosis, and treatment of erythema multiforme: a review for the practicing dermatologist. Int J Dermatol. 2012;51(8):889-902. doi:10.1111/j.1365-4632.2011.05348.x.',
  'Joshi TP, Friske SK, Hsiou DA, Duvic M. New Practical Aspects of Sweet Syndrome. Am J Clin Dermatol. 2022;23(3):301-318. doi:10.1007/s40257-022-00673-4.',
  'Nadarajah N, et al. Systemic associations of pyoderma gangrenosum: a systematic review. Skin Health Dis. 2026;6(4):393-405. doi:10.1093/skinhd/vzag037.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Las tres formas de reaccionar, por profundidad',
      tituloB: 'Los datos que obligan a buscar algo mas',
      compensada: 'NODULO PROFUNDO, mal delimitado, de 1 a 10 cm, que se palpa mas de lo que se ve, doloroso al tacto y simetrico en la cara anterior de las piernas: es una paniculitis, y lo mas probable es un ERITEMA NODOSO. Las lesiones individuales duran unas dos semanas, siguen saliendo brotes nuevos hasta seis semanas, tardan uno o dos meses en curar del todo y al apagarse dejan un aspecto de MORETON. PLACA O NODULO DOLOROSO en la dermis, infiltrado, con edema papilar tan marcado que la lesion parece jugosa, en miembros superiores, cara y cuello, con FIEBRE y neutrofilia: es el SINDROME DE SWEET. LESION EN DIANA con zonas concentricas de color y un centro oscuro, de distribucion ACRAL, que aparece entera en las primeras 72 horas: es el ERITEMA MULTIFORME. Y la ULCERA de borde elevado, socavado y violaceo, que empezo como una papula o una pustula esteril y crecio muy rapido, desproporcionadamente dolorosa: es el PIODERMA GANGRENOSO.',
      descompensada: 'Lo que cambia el plan. Un nodulo de aspecto de eritema nodoso que SE ULCERA o que deja atrofia o cicatriz: el eritema nodoso no hace ninguna de las dos cosas, de modo que hay que pensar en otra paniculitis (lupica, pancreatica, por deficit de alfa-1-antitripsina) o en un linfoma T subcutaneo. Fiebre con placas dolorosas y CITOPENIAS o un hemograma raro: Sweet asociado a sindrome mielodisplasico o a leucemia aguda mieloide. Un Sweet que aparece dias despues de empezar un FACTOR ESTIMULANTE DE COLONIAS, ATRA o un inhibidor de tirosina cinasa: es yatrogeno, y se resuelve retirandolo. Una ulcera que empeora despues de cada desbridamiento: es PATERGIA, y apunta a pioderma. Y en el pioderma, una gammapatia monoclonal o una citopenia obligan a estudio hematologico, porque la gammapatia aparece en el 27% y predice neoplasia.'
    },
    laboratorio: [
      { prueba: 'Hemograma con diferencial', utilidad: 'Doble papel. En el eritema nodoso puede haber leucocitosis por encima de 10.000 por mm3, que es inespecifica. En el sindrome de Sweet la NEUTROFILIA forma parte del cuadro desde la descripcion original. Y en los dos, lo que de verdad hay que mirar son las CITOPENIAS y las formas anormales: son la pista de un sindrome mielodisplasico o de una leucemia detras.' },
      { prueba: 'VSG y proteina C reactiva', utilidad: 'Elevadas en el eritema nodoso y en el sindrome de Sweet. No diagnostican nada, pero sirven de referencia para seguir la actividad y, en el eritema multiforme, su elevacion junto a la de las enzimas hepaticas marca enfermedad grave.' },
      { prueba: 'Estudio de estreptococo', utilidad: 'Obligado en todo eritema nodoso, porque es la causa identificable mas frecuente: hasta el 44% de los casos del adulto y el 48% de los del ni&#241;o. Cultivo faringeo para estreptococo del grupo A, prueba de antigeno rapido y titulo de ANTIESTREPTOLISINA O. El titulo se pide al diagnostico y SE REPITE a las cuatro semanas, porque lo que demuestra la infeccion reciente es el ascenso. La PCR a tiempo real es una alternativa valida, con sensibilidad del 93% y especificidad del 98%.' },
      { prueba: 'Cribado de tuberculosis', utilidad: 'TODO paciente con eritema nodoso debe estratificarse por riesgo de exposicion a tuberculosis: prueba de tuberculina, radiografia de torax y baciloscopia de esputo si procede. El eritema nodoso puede aparecer en la tuberculosis primaria, incluso ANTES de que la tuberculina se positivice, y tambien en pacientes con tuberculina muy positiva sin foco identificable. La revision recomienda iniciar tratamiento antituberculoso ante una tuberculina positiva, con foco identificado o sin el.' },
      { prueba: 'Estudio digestivo', utilidad: 'Coprocultivo y estudio de huevos y parasitos si hay diarrea o sintomas digestivos, y valoracion de enfermedad inflamatoria intestinal. En el eritema nodoso las enteropatias explican del 1 al 4% de los casos; en el pioderma gangrenoso la enfermedad inflamatoria intestinal es LA asociacion, presente en el 26 al 41% de las series.' },
      { prueba: 'Virus del herpes simple y Mycoplasma pneumoniae', utilidad: 'En el eritema multiforme la infeccion explica alrededor del 90% de los casos y el virus del herpes simple es el agente mas frecuente, sobre todo el tipo 1, aunque el tipo 2 tambien puede. Mycoplasma pneumoniae es el otro agente con asociacion clara y tiene especial importancia en el ni&#241;o. En el eritema multiforme recurrente idiopatico se ha detectado ADN del virus en la piel lesional hasta en el 50% de los casos.' },
      { prueba: 'Cultivos y hemocultivos', utilidad: 'Se piden para que salgan NEGATIVOS. En el Sweet similar a celulitis, en el pioderma, en la dermatosis neutrofilica del dorso de las manos y en el Sweet necrosante los cultivos son negativos y el antibiotico no induce remision: eso es lo que separa el cuadro de una infeccion. La revision de Sweet llega a admitir que, descartada la infeccion, una PRUEBA TERAPEUTICA con corticoide que funcione apoya el diagnostico.' },
      { prueba: 'Proteinograma e inmunofijacion', utilidad: 'En el pioderma gangrenoso, una cohorte canadiense encontro gammapatia monoclonal en el 27% de los pacientes, con la IgA como subtipo mas frecuente (41%). Y no es un hallazgo inocente: la neoplasia aparecio en el 28% de los pacientes con gammapatia frente al 6% de los que no la tenian, sobre todo mieloma multiple.' }
    ],
    no_invasivos: [
      { metodo: 'Enfoque del nodulo eritematoso doloroso (calculadora disponible)', interpretacion: 'Inamadar y Adya propusieron en 2019 ordenar el nodulo doloroso por tres caracteristicas: CRONICIDAD, distribucion (localizada o generalizada) y configuracion (centrifuga o centripeta). El sindrome de Sweet suele ser de inicio agudo, generalizado y centripeto; el eritema nodoso es simetrico y pretibial. A esas tres hay que a&#241;adir la profundidad y una pregunta que decide mucho: &#191;se ulcera?', cutoff: 'Agudo + generalizado + centripeto orienta a Sweet' },
      { metodo: 'Criterios de Sweet de von den Driesch', interpretacion: 'Su y Liu los propusieron en 1986 y von den Driesch los modifico en 1994. Exigen cumplir los DOS criterios mayores mas DOS de los cuatro menores. El detalle que importa: los criterios de von den Driesch EXIGEN infiltrado neutrofilico, y la propia revision advierte que se han diagnosticado casos de Sweet sin infiltrado neutrofilico predominante, pero recomienda no usar el nombre para cuadros con infiltrado eosinofilico o linfocitico aunque se parezcan en la clinica.', cutoff: '2 criterios mayores + 2 de 4 menores' },
      { metodo: 'Criterios de Sweet inducido por farmaco (Walker y Cohen)', interpretacion: 'Establecidos en 1996. A diferencia de los de von den Driesch, aqui hay que cumplir TODOS los criterios para poder atribuir el cuadro a un farmaco. Para graduar la probabilidad de que el farmaco sea el responsable, la revision usa la escala de NARANJO, que puntua de 1 a 13: de 1 a 4 reaccion posible, de 5 a 8 probable y de 9 a 13 definitiva.', cutoff: 'Todos los criterios; Naranjo 9 o mas es definitiva' },
      { metodo: 'Criterios diagnosticos del pioderma gangrenoso', interpretacion: 'Hay tres juegos propuestos: los de Su, el consenso Delphi y la puntuacion PARACELSUS. En la comparacion que cita la revision, PARACELSUS identifico la mayor proporcion de pacientes con pioderma, un 89%, frente al 74% de los criterios Delphi y de los de Su. Todos comparten la misma logica: el diagnostico es CLINICO y la biopsia esta para excluir otras causas de ulcera, no para confirmar.', cutoff: 'PARACELSUS identifica el 89%' },
      { metodo: 'Biopsia profunda de la grasa', interpretacion: 'No es una escala, es un requisito. Para ver la paniculitis hay que obtener una muestra INCISIONAL o EXCISIONAL profunda, porque un punch da casi siempre una muestra insuficiente. Lo que se busca en el eritema nodoso es paniculitis SEPTAL, infiltrado linfocitico con neutrofilos, granulomas radiales de Miescher (agregados peque&#241;os de histiocitos alrededor de una hendidura estrellada central), AUSENCIA de vasculitis y ausencia de microorganismos.', cutoff: 'Incisional o excisional, nunca punch' },
      { metodo: 'Eritema multiforme menor frente a mayor', interpretacion: 'La unica diferencia es la mucosa: con afectacion mucosa es eritema multiforme MAYOR y sin ella es MENOR. En una serie de 65 pacientes con eritema multiforme recurrente, el 69% tenia afectacion oral, el 25% genital y el 17% ocular. Y la recurrencia tiene su propia definicion: mas de seis episodios al a&#241;o, con una duracion media de la enfermedad de 6 a 10 a&#241;os.', cutoff: 'Recurrente: mas de 6 episodios al a&#241;o' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Es la prueba de imagen de todo eritema nodoso. Busca dos cosas: adenopatias hiliares bilaterales, que apuntan a sarcoidosis y explican del 11 al 25% de los casos, y lesiones de tuberculosis. En el sindrome de Lofgren completo (eritema nodoso, adenopatias hiliares bilaterales y artritis de tobillos) la especificidad es tan alta que no hace falta biopsia: ver el tema de Sarcoidosis.' },
      { modalidad: 'Ecografia de partes blandas', hallazgos: 'No distingue entre estas entidades, pero sirve para lo que si importa a pie de cama: descartar un absceso o una coleccion drenable en una placa caliente y dolorosa que se parece a una celulitis.' },
      { modalidad: 'Imagen dirigida por la sospecha', hallazgos: 'En el Sweet con citopenias o con mala evolucion, lo que hace falta no es mas imagen de la piel sino estudio de medula osea. En el pioderma, imagen y colonoscopia segun la sospecha de enfermedad inflamatoria intestinal. Y en el eritema nodoso, el estudio se dirige por la historia y la geografia: las micosis sistemicas (histoplasmosis, coccidioidomicosis) dependen del lugar de residencia y de los viajes.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `No hay una sola clasificacion que valga para el tema, porque son enfermedades distintas. Lo que si hay es un <strong>orden por profundidad</strong> que permite colocar cualquier lesion nueva: diana en la union dermoepidermica (eritema multiforme), placa infiltrada en la dermis (dermatosis neutrofilicas) y nodulo en la grasa (paniculitis). Dentro de la paniculitis, la clasificacion que usa el patologo es <strong>septal frente a lobulillar</strong> y <strong>con vasculitis o sin ella</strong>: el eritema nodoso es la paniculitis SEPTAL SIN vasculitis, y es la mas frecuente de todas. Despues, cada entidad tiene su propio juego de criterios, y lo util de conocerlos no es recitarlos sino saber <strong>que exige cada uno</strong>: los de Sweet piden dos mayores y dos de cuatro menores, los de Sweet por farmaco piden TODOS, y los del pioderma no confirman nada porque su diagnostico es clinico.`,
    escalas: [
      { nombre: 'Paniculitis: septal o lobulillar (calculadora disponible)', componentes: 'Localizacion del infiltrado en la grasa (en los tabiques o dentro del lobulillo) y presencia o ausencia de vasculitis.', formula: 'Cuatro combinaciones: septal sin vasculitis, septal con vasculitis, lobulillar sin vasculitis y lobulillar con vasculitis.', interpretacion: 'El ERITEMA NODOSO es la septal sin vasculitis, con granulomas radiales de Miescher, y es la paniculitis mas frecuente. Las lobulillares son las que hay que sospechar cuando el nodulo se ULCERA o deja atrofia: paniculitis lupica (lupus profundo), paniculitis pancreatica, deficit de alfa-1-antitripsina, paniculitis facticia y la paniculitis histiocitica citofagica, que en realidad es un linfoma. Para separarlas hace falta una muestra profunda: con un punch no se llega.' },
      { nombre: 'Criterios de Sweet de von den Driesch', componentes: 'Dos criterios mayores y cuatro menores, que incluyen la clinica de placas o nodulos dolorosos, el infiltrado neutrofilico dermico, la fiebre, la asociacion a una enfermedad o farmaco, los marcadores inflamatorios y la respuesta al corticoide.', formula: 'Se exigen los DOS mayores mas DOS de los cuatro menores.', interpretacion: 'Propuestos por Su y Liu en 1986 y modificados por von den Driesch en 1994. Exigen infiltrado neutrofilico, y ese es el punto fino: hay casos descritos de Sweet sin infiltrado neutrofilico predominante, pero la revision recomienda NO usar el nombre Sweet para cuadros con infiltrado eosinofilico o linfocitico aunque clinicamente lo imiten. Lo que nunca debe verse es vasculitis leucocitoclastica.' },
      { nombre: 'Criterios de Sweet inducido por farmaco (Walker y Cohen)', componentes: 'Relacion temporal con la introduccion del farmaco, clinica e histologia compatibles, fiebre, mejoria al retirarlo y, en su caso, recaida al reintroducirlo.', formula: 'Hay que cumplir TODOS los criterios, no una parte.', interpretacion: 'La diferencia con los de von den Driesch es exactamente esa exigencia. Los desencadenantes yatrogenos descritos con mas frecuencia son el factor estimulante de colonias de granulocitos y los inhibidores de tirosina cinasa dirigidos a la leucemia mieloide aguda, ademas de antimicrobianos y antineoplasicos. Para graduar la causalidad, la escala de Naranjo: de 1 a 4 posible, de 5 a 8 probable, de 9 a 13 definitiva.' },
      { nombre: 'Criterios diagnosticos del pioderma gangrenoso', componentes: 'Tres juegos propuestos: los de Su, el consenso Delphi y la puntuacion PARACELSUS.', formula: 'Combinan la morfologia de la ulcera, la exclusion de otras causas, la patergia, la respuesta a inmunosupresion y la asociacion sistemica.', interpretacion: 'PARACELSUS identifico el 89% de los pacientes con pioderma, frente al 74% de Delphi y de Su. Pero lo que hay que llevarse no es cual puntua mejor: es que el diagnostico del pioderma es CLINICO y que la histologia es inespecifica. La biopsia se hace para EXCLUIR otras causas de ulcera (oclusion vascular, enfermedad venosa, vasculitis, cancer, infeccion primaria, ulcera por farmacos), no para confirmar el pioderma.' },
      { nombre: 'Eritema multiforme frente a Stevens-Johnson (calculadora disponible)', componentes: 'Morfologia de la lesion cutanea (papular o macular), distribucion (acral o troncular), desencadenante predominante y velocidad de aparicion.', formula: 'No es una puntuacion: es una separacion categorica entre dos enfermedades distintas.', interpretacion: 'Durante a&#241;os se ensenaba que el eritema multiforme mayor, el Stevens-Johnson y la necrolisis epidermica toxica eran un espectro. Una clasificacion clinica de consenso aporto la evidencia de que el eritema multiforme mayor y el Stevens-Johnson son enfermedades SEPARADAS Y DISTINTAS, que comparten erosiones mucosas parecidas pero tienen lesiones cutaneas diferentes: el eritema multiforme es PAPULAR y acral, y el Stevens-Johnson es MACULAR, mas prominente en el tronco y de ahi se extiende. El Stevens-Johnson y la necrolisis viven en el modulo de Farmacodermias.' },
      { nombre: 'Predictores de eritema multiforme recurrente resistente', componentes: 'Cinco rasgos descritos en la serie de la Clinica Mayo: no identificar una causa, no mejorar con antiviral continuo, afectacion oral grave, uso casi continuo de corticoide mas de un a&#241;o, y haber usado dos o mas inmunosupresores.', formula: 'Conjunto de rasgos clinicos, no puntuacion.', interpretacion: 'Sirven para anticipar el curso tortuoso y para no insistir en una estrategia que no va a funcionar. En la serie de 48 pacientes de la Mayo, el virus del herpes simple fue la causa mas frecuente del eritema multiforme recurrente, pero con asociacion clara en solo el 23%, y el 60% quedo etiquetado como idiopatico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Eritema nodoso: la paniculitis que apunta a otra cosa',
      color: '#9c3a52',
      definicion: 'Paniculitis septal sin vasculitis, con nodulos subcutaneos dolorosos, eritematosos y simetricos, tipicamente en la cara anterior de las piernas. Es la paniculitis mas frecuente.',
      fisiopatologia: 'Es un patron de reaccion cutanea INESPECIFICO frente a antigenos muy distintos. La evidencia directa e indirecta apunta a una respuesta de hipersensibilidad retardada de tipo IV, y aparece con frecuencia en el contexto de enfermedades granulomatosas: sarcoidosis, tuberculosis y colitis granulomatosa.',
      epidemiologia: 'Incidencia de 1 a 5 casos por 100.000 personas. En el adulto es mucho mas frecuente en la mujer, con una razon varon-mujer de 1 a 6; en el ni&#241;o la razon es 1 a 1. El pico de incidencia esta entre los 20 y los 30 a&#241;os, aunque puede aparecer a cualquier edad.',
      factores_riesgo: ['Faringitis estreptococica reciente, dos a tres semanas antes', 'Sarcoidosis', 'Enfermedad inflamatoria intestinal', 'Anticonceptivos orales y otros farmacos (sulfonamidas, amoxicilina)', 'Embarazo', 'Tuberculosis y micobacterias atipicas', 'Micosis sistemicas segun la zona geografica', 'Infeccion por Yersinia, frecuente en Europa'],
      clinica: 'Nodulos de 1 a 10 cm, MAL DELIMITADOS porque estan en la grasa, muy sensibles al tacto. La localizacion pretibial es la mas frecuente, aunque pueden salir en la cara de extension de los antebrazos, en los muslos y en el tronco. Al principio son firmes y luego se vuelven mas fluctuantes. Cada nodulo dura unas dos semanas y pueden seguir saliendo brotes hasta seis semanas; tardan uno o dos meses en curar y al apagarse adoptan un aspecto de MORETON. Hay un prodromo una a tres semanas antes, cualquiera que sea la causa: perdida de peso, malestar, febricula, tos y artralgia con o sin artritis.',
      criterios_dx: 'Clinica compatible mas, si hay duda, biopsia EXCISIONAL. Los hallazgos clave son paniculitis septal, infiltrado linfocitico con neutrofilos, granulomas radiales de Miescher, ausencia de vasculitis y ausencia de microorganismos. Los dos rasgos negativos valen tanto como los positivos: el eritema nodoso NO SE ULCERA y cura sin atrofia ni cicatriz.',
      laboratorio: 'Hemograma con diferencial, VSG y proteina C reactiva, estudio completo de estreptococo con titulo de antiestreptolisina O al diagnostico y repetido a las cuatro semanas. Puede haber leucocitosis por encima de 10.000 por mm3.',
      imagen: 'Radiografia de torax en todos, buscando adenopatias hiliares bilaterales y tuberculosis.',
      complementarios: 'Prueba de tuberculina en todo paciente estratificado por riesgo. Coprocultivo y estudio de parasitos si hay sintomas digestivos, con valoracion de enfermedad inflamatoria intestinal. Las artralgias pueden persistir hasta DOS A&#209;OS despues de que el eritema nodoso se haya resuelto, son seronegativas y no destruyen la articulacion: saberlo evita estudios innecesarios.',
      dx_diferencial: 'Las otras paniculitis, que son las que hay que pensar si el nodulo se ulcera o deja atrofia: deficit de alfa-1-antitripsina, paniculitis histiocitica citofagica (que es un linfoma), lupus profundo, necrosis grasa nodular. Menos frecuentes: necrobiosis lipoidica, xantogranuloma necrobiotico, esclerodermia. Raras: paniculitis por frio, paniculitis infecciosa, infiltrados leucemicos de la grasa, lipodistrofias, paniculitis esclerosante.',
      tx_medico: 'Reposo y elevacion de las piernas, y sobre todo TRATAR LA CAUSA: la revision dice de forma explicita que el paso mas importante del manejo es tratar el trastorno subyacente. Tiende a ser autolimitado.',
      tx_farmacologico: 'Antiinflamatorios no esteroideos para el dolor. Corticoide sistemico a 1 mg por kilo y dia hasta la resolucion, pero SOLO despues de haber excluido con un estudio completo una infeccion, el riesgo de diseminacion bacteriana o sepsis, y una neoplasia. Colchicina si coexiste con enfermedad de Behcet. Y tratamiento antituberculoso si la tuberculina es positiva, con foco identificado o sin el.',
      pronostico: 'Bueno: es autolimitado y cura sin secuelas. El pronostico real es el de la enfermedad que lo origina, y de ahi que valga la pena buscarla.',
      algoritmo: ['Confirmar que son nodulos profundos, dolorosos y simetricos', '&#191;Se ulceran o dejan atrofia? Entonces NO es eritema nodoso', 'Historia dirigida: faringitis, farmacos, embarazo, viajes, sintomas digestivos', 'Hemograma, VSG o PCR, y estudio de estreptococo con ASLO', 'Radiografia de torax y estratificar riesgo de tuberculosis', 'Biopsia INCISIONAL o excisional profunda si hay duda', 'Tratar la causa; antiinflamatorios para el dolor', 'Reservar el corticoide a despues de excluir infeccion y neoplasia'],
      figura: 'mapa-profundidad'
    },
    {
      nombre: 'Paniculitis: el nodulo profundo y su diferencial',
      color: '#7a5a3a',
      definicion: 'Inflamacion de la grasa subcutanea. Se clasifica por donde esta el infiltrado, en los tabiques o en el lobulillo, y por si hay vasculitis o no.',
      fisiopatologia: 'La grasa reacciona de pocas maneras, y cada causa elige una. El eritema nodoso inflama los TABIQUES y respeta el lobulillo; las paniculitis que destruyen el lobulillo son las que dan necrosis grasa, y por eso son las que ulceran y dejan atrofia o depresion de la piel.',
      epidemiologia: 'El eritema nodoso es, con diferencia, la paniculitis mas frecuente. Las demas son raras, y su importancia no esta en la frecuencia sino en lo que significan.',
      clinica: 'Un nodulo profundo que se palpa mas de lo que se ve. Las tres preguntas que mas rinden: &#191;se ULCERA? &#191;deja ATROFIA o una depresion? &#191;es simetrico y pretibial o esta en un sitio raro, como la cara, los brazos o las nalgas? El eritema nodoso es simetrico, pretibial, no se ulcera y no deja huella.',
      criterios_dx: 'Biopsia INCISIONAL o EXCISIONAL profunda, que incluya grasa suficiente. Un punch produce casi siempre una muestra insuficiente, y ese error tecnico es la causa mas frecuente de un informe que no concluye nada.',
      laboratorio: 'Dirigido por la sospecha: alfa-1-antitripsina si hay ulceracion y afectacion del tronco, amilasa y lipasa si se piensa en paniculitis pancreatica, autoinmunidad si se piensa en lupus profundo, y estudio hematologico completo si la histologia sugiere infiltrado linfoide.',
      imagen: 'Ecografia para descartar coleccion. La imagen no distingue el tipo de paniculitis: eso lo hace la biopsia profunda.',
      dx_diferencial: 'Por orden de lo que mas hay que pensar cuando el nodulo no se comporta como un eritema nodoso: deficit de alfa-1-antitripsina, paniculitis histiocitica citofagica (un linfoma), lupus eritematoso profundo, necrosis grasa nodular; despues necrobiosis lipoidica, xantogranuloma necrobiotico, esclerodermia y granuloma subcutaneo; y las raras, paniculitis por frio, infecciosa, infiltrados leucemicos, lipodistrofias, paniculitis posesteroidea, por povidona y esclerosante.',
      tx_medico: 'No hay un tratamiento de la paniculitis: hay un tratamiento de cada causa. Lo unico transversal es el soporte, el reposo y la analgesia.',
      complementarios: 'Las variantes del propio eritema nodoso que antes se consideraban enfermedades aparte (eritema nodoso migrans, paniculitis nodular migratoria subaguda y eritema nodoso cronico) hoy se consideran parte del mismo espectro y son una minoria de los casos.',
      pronostico: 'Depende por completo de la causa: desde la resolucion espontanea del eritema nodoso hasta el pronostico de un linfoma subcutaneo.',
      algoritmo: ['Localizar la lesion en profundidad: esta en la grasa', '&#191;Ulcera, atrofia o localizacion atipica? Sospechar paniculitis lobulillar', 'Pedir biopsia INCISIONAL o excisional, nunca punch', 'Pedir al patologo: septal o lobulillar, con vasculitis o sin ella', 'Dirigir el laboratorio por lo que diga la histologia', 'Si hay infiltrado linfoide, descartar linfoma T subcutaneo'],
      figura: 'mapa-profundidad'
    },
    {
      nombre: 'Eritema multiforme: la diana del herpes',
      color: '#b05a2e',
      definicion: 'Enfermedad mucocutanea aguda mediada por inmunidad, caracterizada por lesiones en diana de distribucion acral con variacion concentrica del color, con o sin erosiones mucosas. Con mucosa afectada es eritema multiforme MAYOR; sin ella, MENOR.',
      fisiopatologia: 'En el eritema multiforme asociado al virus del herpes simple, los hallazgos se atribuyen a una reaccion inmunitaria mediada por celulas contra celulas que expresan antigeno viral y contienen el gen de la ADN polimerasa del virus. Hay predisposicion genetica: el alelo HLA-DQB1*0301 estaba presente en el 66% de los pacientes frente al 31% de los controles, y la asociacion era mas fuerte en el eritema multiforme asociado al herpes.',
      epidemiologia: 'Incidencia exacta desconocida, probablemente muy por debajo del 1% pero por encima del 0,01%. Predomina en adultos jovenes, con ligero predominio femenino y sin predileccion racial.',
      factores_riesgo: ['Infeccion por virus del herpes simple, sobre todo el tipo 1', 'Infeccion por Mycoplasma pneumoniae, con especial peso en el ni&#241;o', 'Farmacos: antiinflamatorios no esteroideos, sulfonamidas, antiepilepticos y antibioticos', 'Alelo HLA-DQB1*0301', 'Hepatitis C, candidiasis vulvovaginal y menstruacion en las formas recurrentes'],
      clinica: 'Lesiones en DIANA, papulosas y elevadas, con zonas concentricas de color y centro oscuro, de distribucion ACRAL. Aparecen en 3 a 5 dias y se resuelven en 1 a 2 semanas, y todas las lesiones salen en las primeras 72 horas: son FIJAS, no van y vienen. Puede haber erosiones orales, genitales u oculares. En la serie de 65 pacientes con forma recurrente, el 69% tenia afectacion oral, el 25% genital y el 17% ocular.',
      criterios_dx: 'Es clinico. La histologia sirve para diferenciarlo de sus imitadores y muestra degeneracion licuefactiva de las celulas basales, queratinocitos necroticos y exocitosis de linfocitos, con infiltrado linfohistiocitario liquenoide que puede borrar la union dermoepidermica.',
      laboratorio: 'En enfermedad grave puede haber elevacion de la VSG, de los leucocitos y de las enzimas hepaticas. Los anticuerpos antinucleares son utiles si se plantea un sindrome de Rowell, que es lupus cutaneo con lesiones de tipo eritema multiforme.',
      dx_diferencial: 'La lista de imitadores es larga y por eso importa: urticaria, Stevens-Johnson, exantema fijo medicamentoso, penfigoide ampolloso, penfigo paraneoplasico, sindrome de Sweet, sindrome de Rowell, erupcion polimorfa luminica y vasculitis cutanea de vaso peque&#241;o. La urticaria se separa facil: cada habon dura MENOS de 24 horas y salen nuevos cada dia, mientras que la lesion del eritema multiforme es fija; y el centro del habon es eritematoso o de piel normal, no oscuro ni ampolloso.',
      tx_medico: 'Retirar todo desencadenante, empezando por los farmacos. En enfermedad leve, antisepticos topicos y antihistaminicos orales. En la afectacion mucosa, gel de corticoide de alta potencia, soluciones anestesicas orales y enjuagues antisepticos; consulta a oftalmologia y preparados oftalmicos topicos si hay afectacion ocular. Puede hacer falta INGRESO si la afectacion mucosa es grave y compromete la ingesta, por el desequilibrio hidroelectrolitico que sigue.',
      tx_farmacologico: 'En la mucositis grave, corticoide oral: prednisona de 40 a 60 mg al dia con descenso en 2 a 4 semanas. En el eritema multiforme inducido por herpes, el antiviral iniciado DESPUES de que aparezcan las lesiones no modifica el curso clinico: su papel es la profilaxis, no el episodio. Si se asocia a Mycoplasma pneumoniae, puede incluir antibiotico.',
      seguimiento_ambulatorio: 'Identificar si hay recurrencia, porque cambia el tratamiento por completo: ver la ficha de la forma recurrente dentro de este mismo apartado de tratamiento.',
      pronostico: 'El eritema multiforme clasico es autolimitado. Un subgrupo tiene episodios frecuentes durante a&#241;os, y muy raramente la enfermedad es continua (forma persistente), con lesiones papulonecroticas o ampollosas y afectacion extensa.',
      algoritmo: ['Confirmar la diana PAPULAR de distribucion acral', 'Comprobar que todas las lesiones salieron en las primeras 72 horas', 'Buscar el desencadenante: herpes simple primero, Mycoplasma en el ni&#241;o', 'Revisar farmacos: explican menos del 10% de los casos', 'Valorar la mucosa: define menor frente a mayor', '&#191;Afectacion ocular? Consulta a oftalmologia', '&#191;Mucositis que impide comer? Valorar ingreso y corticoide oral', 'Contar los episodios: mas de seis al a&#241;o cambia la estrategia']
    },
    {
      nombre: 'Eritema multiforme recurrente: el que se previene',
      color: '#8a6a2e',
      definicion: 'Mas de seis episodios de eritema multiforme al a&#241;o. Es la forma en la que el tratamiento deja de ser sintomatico y pasa a ser profilactico.',
      epidemiologia: 'Los pacientes con forma recurrente tienen una media de seis episodios al a&#241;o y una duracion media de la enfermedad de 6 a 10 a&#241;os. Estudios previos atribuyeron del 61 al 100% de los casos recurrentes al virus del herpes simple; en la serie de 48 pacientes de la Clinica Mayo el herpes fue la causa mas frecuente pero con asociacion clara en solo el 23%, y el 60% quedo como idiopatico.',
      fisiopatologia: 'Ese 60% idiopatico probablemente no lo es: con PCR se detecto ADN del virus del herpes simple en la piel lesional de 3 de 5 pacientes en un estudio y en el 50% de 12 pacientes con forma recurrente idiopatica en otro. De ahi que la profilaxis antiviral se ofrezca TAMBIEN a los idiopaticos.',
      clinica: 'Los mismos brotes, repetidos. Lo que hay que buscar aparte son los otros desencadenantes descritos: infecciones repetidas por Mycoplasma pneumoniae, hepatitis C, candidiasis vulvovaginal, menstruacion, aftosis compleja y una ingesta alta de acido benzoico como conservante alimentario.',
      criterios_dx: 'El recuento de episodios al a&#241;o. Es un dato de la anamnesis, no de una prueba.',
      tx_farmacologico: 'Prueba de SEIS MESES de antiviral continuo, que es el abordaje documentado como mas eficaz, por encima del intermitente y del topico. Las pautas son aciclovir 400 mg dos veces al dia, valaciclovir 500 mg dos veces al dia o famciclovir 250 mg dos veces al dia. Si no responde, se puede doblar la dosis o cambiar de antiviral. La mejor respuesta se ve cuando la asociacion con el herpes es clara.',
      tx_medico: 'Mantener la remision es dificil: en un estudio de pacientes que lograron respuesta con seis meses de antiviral continuo, solo 4 de 15 la mantuvieron al suspenderlo. Por eso, a quien responde se le trata de 1 a 2 a&#241;os antes de retirar, y si recurre al retirar se reinicia a la dosis minima eficaz y se vuelve a intentar la retirada en 6 a 12 meses.',
      tx_intervencionista: 'No aplica.',
      complementarios: 'En la forma resistente a la profilaxis antiviral se han usado azatioprina, micofenolato de mofetilo y dapsona, y en menor medida inmunoglobulina intravenosa, hidroxicloroquina, ciclosporina, talidomida y cimetidina. La mayoria no se ha validado en ensayos controlados, son de eficacia inconsistente y tienen efectos adversos. La azatioprina se uso con exito a 100-150 mg al dia en 11 pacientes con enfermedad grave que no habia respondido a otros tratamientos.',
      pronostico: 'Cinco rasgos anticipan un curso resistente: no identificar la causa, no mejorar con antiviral continuo, afectacion oral grave, uso casi continuo de corticoide mas de un a&#241;o y haber usado dos o mas inmunosupresores.',
      algoritmo: ['Contar los episodios del ultimo a&#241;o', 'Buscar herpes, Mycoplasma, hepatitis C, candidiasis y menstruacion', 'Preguntar por conservantes alimentarios (acido benzoico)', 'Ofrecer antiviral continuo 6 meses aunque parezca idiopatico', 'Si no responde: doblar dosis o cambiar de antiviral', 'Si responde: mantener 1 a 2 a&#241;os antes de retirar', 'Si recurre al retirar: reiniciar a la dosis minima eficaz']
    },
    {
      nombre: 'Eritema multiforme frente a Stevens-Johnson: dos enfermedades',
      color: '#8c3a34',
      definicion: 'La frontera que mas se falla del tema. No son grados de lo mismo: son dos enfermedades distintas que comparten erosiones mucosas parecidas y tienen lesiones cutaneas diferentes.',
      fisiopatologia: 'Durante a&#241;os se considero que el eritema multiforme mayor, el Stevens-Johnson y la necrolisis epidermica toxica formaban un espectro continuo. Una clasificacion clinica de consenso aporto la evidencia de que el eritema multiforme mayor y el Stevens-Johnson son trastornos SEPARADOS Y DISTINTOS. El mecanismo tambien separa: el eritema multiforme es una reaccion mediada por celulas frente a un antigeno VIRAL, y el Stevens-Johnson es una reaccion a FARMACOS.',
      clinica: 'La diferencia se ve en la lesion y en el mapa. ERITEMA MULTIFORME: lesiones PAPULARES, elevadas, en diana tipica, con predominio ACRAL, que aparecen todas en las primeras 72 horas. STEVENS-JOHNSON: maculas eritematosas o purpuricas y dianas ATIPICAS que son MACULARES, no papulosas, mas prominentes en el TRONCO y que se extienden en sentido distal.',
      criterios_dx: 'Clinico y de distribucion. La afectacion mucosa NO sirve para separarlos, porque los dos la tienen y es parecida: el eritema multiforme con mucosa afectada es eritema multiforme mayor, no un Stevens-Johnson.',
      dx_diferencial: 'Dentro de la misma frontera: exantema fijo medicamentoso, penfigo paraneoplasico, penfigoide ampolloso y el propio sindrome de Sweet. El Stevens-Johnson, la necrolisis epidermica toxica, el SCORTEN y el manejo del despegamiento cutaneo estan en el modulo de Farmacodermias y eritrodermia, no aqui.',
      tx_medico: 'La consecuencia practica de separarlos es el tratamiento. En el eritema multiforme se busca el VIRUS y se previene con antiviral; en el Stevens-Johnson se busca el FARMACO y se retira de inmediato. Confundirlos lleva a retirar farmacos inocentes en un cuadro herpetico, o peor, a mantener el farmaco culpable en una reaccion grave.',
      pronostico: 'El del eritema multiforme es bueno y autolimitado; el del Stevens-Johnson y la necrolisis se mide con mortalidad y se estima con una escala propia. Esa diferencia de pronostico es la razon de que la distincion importe.',
      algoritmo: ['Mirar si la lesion es PAPULAR o MACULAR', 'Mirar el mapa: acral o troncular', 'Preguntar por herpes labial reciente y por farmacos nuevos', 'Si es papular y acral tras un herpes: eritema multiforme', 'Si es macular, troncular y tras un farmaco: ir al modulo de Farmacodermias', 'La mucosa afectada NO decide: solo separa menor de mayor'],
      figura: 'em-vs-sjs'
    },
    {
      nombre: 'Sindrome de Sweet: reconocerlo',
      color: '#8a5a2e',
      definicion: 'Dermatosis neutrofilica febril aguda: reaccion cutanea inflamatoria y NO infecciosa con papulas, placas, pustulas o nodulos eritematosos y dolorosos, acompa&#241;ada de fiebre y con infiltrado neutrofilico denso en la dermis.',
      fisiopatologia: 'La patogenia no tiene un dogma unico: parece multifactorial, producto de agresiones quimicas y fisicas externas (patergia), de desregulacion inmunitaria del huesped por autoinmunidad o por neoplasia, y de elementos geneticos predisponentes. En las formas asociadas a neoplasia hematologica se ha demostrado que el clon mieloide maligno y los neutrofilos que infiltran la piel comparten un progenitor clonal comun.',
      epidemiologia: 'Rara, y su incidencia real sigue sin establecerse. Suele presentarse en la SEXTA decada de la vida. La forma pediatrica es excepcional, en torno al 5-8% de los casos. La razon mujer-varon varia segun la causa: 4 a 1 en la idiopatica, 1 a 1 en la asociada a neoplasia hematologica, 1,4 a 1 en la asociada a tumor solido y 2,4 a 1 en la inducida por farmacos.',
      clinica: 'Lo que describio Robert Douglas Sweet en 1964 en ocho mujeres sigue siendo el cuadro: fiebre, leucocitosis con neutrofilia en sangre, placas dolorosas y elevadas en miembros, cara y cuello, e histologia con infiltrado dermico denso de neutrofilos maduros. Las lesiones son tipicamente de miembros superiores, cara y cuello. Sweet observo que el cuadro se parecia al eritema multiforme, y aun hoy este sigue en su diagnostico diferencial.',
      criterios_dx: 'Criterios de Su y Liu de 1986 modificados por von den Driesch en 1994: dos criterios mayores mas dos de cuatro menores. La histologia muestra infiltracion neutrofilica difusa de la dermis superior, que puede presentar cariorrexis, y edema papilar marcado; lo que NO debe verse es vasculitis leucocitoclastica. Pueden aparecer celulas leucemicas acompa&#241;antes.',
      laboratorio: 'Hemograma con neutrofilia, VSG y proteina C reactiva elevadas. Y cultivos: negativos. Si el cuadro parece una celulitis pero los cultivos no crecen y el antibiotico no induce remision, eso apoya el Sweet.',
      imagen: 'Ecografia solo para descartar coleccion. La imagen no diagnostica.',
      dx_diferencial: 'Vasto, y en el estan las trampas: paniculitis como el eritema nodoso, vasculitis como la panarteritis nodosa, e infecciones como la meningococemia cronica, la erisipela y la foliculitis infecciosa. Tambien dermatosis eosinofilicas y leucemia o linfoma cutis. Hay variantes practicamente indistinguibles de una infeccion: el Sweet subcutaneo no se puede separar de una celulitis solo con la exploracion, el Sweet similar a celulitis y el necrosante se confunden con un proceso infeccioso, el Sweet neuro es indistinguible de una meningoencefalitis viral y el Sweet pulmonar imita una neumonia.',
      tx_medico: 'Puede resolverse SOLO, o al tratar la enfermedad de base, o al retirar el farmaco sospechoso. En la enfermedad leve o moderada, la tranquilizacion, el tratamiento de la neoplasia subyacente o la retirada del farmaco son opciones razonables por si mismas.',
      tx_farmacologico: 'El corticoide es el tratamiento de primera linea, porque la respuesta es llamativamente rapida en la mayoria de los pacientes. Si no responde, la indometacina es el tratamiento con el nivel de evidencia mas alto. La acitretina, la colchicina y la dapsona se apoyan en estudios retrospectivos, y los biologicos solo en casos aislados. La eleccion de segunda linea se personaliza segun comorbilidad, antecedentes y preferencias.',
      complementarios: 'Variantes clinicas que conviene reconocer para no descartar el diagnostico cuando no parece lo clasico: Sweet AMPOLLOSO (hasta el 30% de los pacientes puede presentar ampollas), similar a celulitis, NECROSANTE y la dermatosis neutrofilica del DORSO DE LAS MANOS. Variantes histologicas: criptococoide, histiocitoide y subcutanea. Manifestaciones extracutaneas descritas: oculares, musculoesqueleticas, neurologicas, pulmonares, digestivas, hepaticas y renales, y hay comunicadas miocarditis e incluso miositis neutrofilica con rabdomiolisis.',
      pronostico: 'Bueno en cuanto a la piel, por la respuesta al corticoide. El pronostico real lo marca lo que haya detras, y de eso se ocupa la ficha siguiente.',
      algoritmo: ['Placa dolorosa con fiebre: hemograma con diferencial', 'Tomar cultivos y hemocultivos, esperando que sean negativos', 'Biopsiar: infiltrado neutrofilico dermico, SIN vasculitis leucocitoclastica', 'Aplicar los criterios: 2 mayores + 2 de 4 menores', 'Revisar la lista de farmacos de las ultimas semanas', 'Buscar la enfermedad de base (ver la ficha siguiente)', 'Si la infeccion esta descartada, corticoide; respuesta rapida apoya el diagnostico'],
      figura: 'que-buscar-detras'
    },
    {
      nombre: 'Sweet: buscar el farmaco y la neoplasia',
      color: '#7a3a6b',
      definicion: 'La parte del sindrome de Sweet que corresponde al internista: no tratar la piel, sino averiguar que lo ha provocado.',
      epidemiologia: 'En la leucemia mieloide aguda, un estudio de 2178 pacientes encontro una incidencia de Sweet del 1%, y otro mas reciente de 216 pacientes la situo en el 5,5%. En el primero, el cariotipo con perdida del cromosoma 5 o deleccion 5q era mas prevalente entre los pacientes con leucemia que desarrollaban Sweet. Tambien esta descrito en el sindrome mielodisplasico: en una serie de 23 pacientes con mielodisplasia y Sweet, 2 se diagnosticaron antes, 6 a la vez y 15 DESPUES del Sweet.',
      fisiopatologia: 'El mecanismo mejor explicado es el de los farmacos: el factor estimulante de colonias de granulocitos moviliza granulocitos desde la medula y puede provocar una respuesta neutrofilica exuberante; los inhibidores de tirosina cinasa inducen la diferenciacion de blastos mieloides a neutrofilos maduros que se localizan en la dermis; y el ATRA, usado en la leucemia promielocitica aguda, hace lo propio con los promielocitos.',
      factores_riesgo: ['Factor estimulante de colonias de granulocitos', 'Inhibidores de tirosina cinasa dirigidos a la leucemia mieloide aguda', 'ATRA (acido retinoico todo trans)', 'Antimicrobianos y antineoplasicos de varias clases', 'Leucemia mieloide aguda y sindrome mielodisplasico', 'Infecciones, con las micobacterias no tuberculosas a la cabeza'],
      clinica: 'El Sweet puede PRECEDER a la neoplasia, ser concurrente o aparecer despues, y tambien puede anunciar la RECAIDA de un cancer ya tratado. Esta descrito un caso que anuncio la transformacion de una anemia de Fanconi en leucemia mieloide aguda. Por eso un Sweet sin causa aparente no es un Sweet idiopatico: es un Sweet todavia sin explicar.',
      criterios_dx: 'Para atribuirlo a un farmaco hay que cumplir TODOS los criterios de Walker y Cohen de 1996, y la causalidad se gradua con la escala de Naranjo: de 1 a 4 posible, de 5 a 8 probable, de 9 a 13 definitiva.',
      laboratorio: 'Hemograma con diferencial y frotis, con atencion a citopenias y a formas anormales; si hay sospecha, estudio de medula osea. Marcadores inflamatorios. Y revision sistematica del tratamiento de las ultimas semanas.',
      complementarios: 'Otras asociaciones descritas: enfermedades autoinmunes (Behcet, enfermedad mixta del tejido conectivo, polimialgia reumatica, artritis reumatoide, Sjogren, lupus, granulomatosis eosinofilica con poliangeitis, tiroiditis de Hashimoto), nefropatia amiloide, hidradenitis supurativa y sarcoidosis. Y, de forma paradojica, estados de INMUNODEFICIENCIA: inmunodeficiencia comun variable, linfopenia T primaria y secundaria, enfermedad granulomatosa cronica, y la inmunodeficiencia del adulto por autoanticuerpos frente al interferon gamma, que aumento el riesgo de Sweet incluso descontando la infeccion por micobacterias no tuberculosas.',
      dx_diferencial: 'Tumores solidos descritos en asociacion: cervix, colangiocarcinoma, colorrectal, adenocarcinoma gastrico y pulmon. Es decir, el Sweet puede considerarse un sindrome paraneoplasico cutaneo infrecuente asociado a un abanico amplio de neoplasias.',
      tx_medico: 'La consecuencia practica: si el desencadenante es un farmaco, retirarlo puede ser todo el tratamiento. Si hay una neoplasia, tratarla puede hacer que la piel se resuelva sola.',
      seguimiento_ambulatorio: 'Un Sweet etiquetado de idiopatico merece seguimiento hematologico, porque en la mielodisplasia la mayoria de los diagnosticos de la serie citada se hicieron DESPUES del episodio cutaneo.',
      pronostico: 'El de la enfermedad de base. La piel responde al corticoide; el pronostico no lo pone la piel.',
      algoritmo: ['Revisar todos los farmacos, con los hematologicos en primer lugar', 'Aplicar los criterios de Walker y Cohen si hay un candidato', 'Graduar la causalidad con la escala de Naranjo', 'Hemograma con diferencial y frotis en todos', '&#191;Citopenias o formas anormales? Estudio de medula osea', 'Buscar infeccion, con micobacterias no tuberculosas en mente', 'Si no aparece nada: no cerrarlo como idiopatico, seguirlo']
    },
    {
      nombre: 'Pioderma gangrenoso: la ulcera que no hay que desbridar',
      color: '#8c3a34',
      definicion: 'Dermatosis neutrofilica rara que se presenta como una papula o pustula ESTERIL que evoluciona rapidamente a una ulcera dolorosa de borde elevado, socavado, violaceo e inflamado.',
      epidemiologia: 'Incidencia anual estimada de 3 a 10 casos por millon de habitantes, con mayor prevalencia en mujeres. El subtipo ULCERATIVO supone alrededor del 85% de los casos; las formas ampollosa, pustulosa y vegetante son menos frecuentes. La morbilidad y la mortalidad son altas, y por eso el diagnostico precoz importa.',
      fisiopatologia: 'No esta aclarada. Parece una interaccion compleja entre predisposicion genetica, variantes sindromicas autoinflamatorias y desregulacion de la inmunidad innata y adaptativa. El rasgo que mas consecuencias practicas tiene es la PATERGIA: el traumatismo minimo precipita o agrava las lesiones.',
      factores_riesgo: ['Enfermedad inflamatoria intestinal, sobre todo en actividad', 'Artritis inflamatoria, reumatoide o seronegativa', 'Neoplasia hematologica y gammapatia monoclonal', 'Enfermedad renal cronica y dialisis', 'Diabetes mellitus', 'Traumatismo o cirugia reciente sobre la zona (patergia)'],
      clinica: 'Las ulceras afectan sobre todo a los miembros inferiores, aunque tambien se describen en nalgas, tronco, genitales y regiones periorbitaria y perioral. El dolor es desproporcionado al tama&#241;o. La patergia se documenta con frecuencia, y la recurrencia tras la remision es especialmente comun en el pioderma asociado a vasculitis, donde se comunico en 5 de 7 casos.',
      criterios_dx: 'El diagnostico es CLINICO. Existen los criterios de Su, el consenso Delphi y la puntuacion PARACELSUS, que identifico al 89% de los pacientes frente al 74% de los otros dos. La biopsia es util, pero para EXCLUIR otras causas de ulceracion: enfermedad vascular oclusiva o venosa, vasculitis, cancer, infeccion primaria y ulceras por farmacos. La histologia por si misma es inespecifica.',
      laboratorio: 'Lo que pide el estudio de la enfermedad de base: hemograma con diferencial, proteinograma e inmunofijacion, marcadores inflamatorios, funcion renal, glucemia y estudio digestivo. Cultivos, para descartar infeccion.',
      imagen: 'Segun la sospecha sistemica. No hay imagen que diagnostique el pioderma.',
      dx_diferencial: 'Es el nucleo del problema: una ulcera de miembro inferior en un paciente con comorbilidad tiene muchas explicaciones mas frecuentes que el pioderma, y todas se tratan de otra forma. Insuficiencia venosa, arteriopatia, vasculitis, infeccion, neoplasia ulcerada y ulcera por farmacos.',
      tx_medico: 'Lo primero es lo que NO se hace: no desbridar de entrada. El pioderma responde al traumatismo con mas enfermedad, de modo que el desbridamiento agranda la ulcera y es el error que mas da&#241;o hace. Los cuidados de la herida y la optimizacion de los factores de cicatrizacion son esenciales como tratamiento adyuvante.',
      tx_farmacologico: 'Primera linea: un inmunosupresor de accion RAPIDA, corticoide sistemico o ciclosporina, seguido con frecuencia de un ahorrador de corticoide. La evidencia es limitada por la rareza de la enfermedad: solo hay DOS ensayos aleatorizados publicados hasta la fecha. En las series de casos los esquemas mas usados combinan el corticoide con ciclofosfamida, azatioprina, ciclosporina, metotrexato, inmunoglobulina intravenosa o hidroxicloroquina. Hay un caso de pioderma asociado a arteritis de Takayasu que solo respondio a tofacitinib, lo que sugiere un posible papel de la inhibicion de las cinasas Janus en las dermatosis neutrofilicas.',
      criterios_uci: 'No por el pioderma. Si por la sepsis sobre la ulcera o por la enfermedad sistemica de base.',
      seguimiento_hospitalario: 'Control del dolor, que suele estar subtratado, cuidado de la herida sin traumatismo y vigilancia de sobreinfeccion.',
      pronostico: 'Variable: desde la remision completa con el tratamiento de primera linea hasta las recaidas multiples que obligan a cambiar de inmunosupresor. En el pioderma asociado a vasculitis la recurrencia es la regla y hace falta inmunosupresion sostenida.',
      algoritmo: ['Ulcera de crecimiento rapido con borde socavado violaceo y dolor desproporcionado', 'NO desbridar: preguntar si empeoro tras un traumatismo o una cirugia', 'Tomar cultivos para descartar infeccion', 'Biopsiar para EXCLUIR otras causas, no para confirmar', 'Aplicar los criterios (Su, Delphi o PARACELSUS)', 'Empezar un inmunosupresor de accion rapida: corticoide o ciclosporina', 'A&#241;adir un ahorrador de corticoide y cuidar la herida', 'Buscar en paralelo la enfermedad sistemica de base'],
      figura: 'que-buscar-detras'
    },
    {
      nombre: 'Pioderma gangrenoso: la enfermedad sistemica de detras',
      color: '#3d5a73',
      definicion: 'El pioderma gangrenoso rara vez es un trastorno aislado de la piel. La revision sistematica de 2026 lo resume asi: aparece con frecuencia ligado a enfermedades sistemicas, y caracterizarlas importa para el diagnostico, el pronostico y el tratamiento.',
      epidemiologia: 'La asociacion con enfermedad sistemica se ha comunicado hasta en el 80% de los casos, y un metaanalisis de 2018 dio una estimacion agrupada del 56,8%. Las asociaciones mas frecuentes fueron enfermedad inflamatoria intestinal (17,6%), artritis (12,8%), neoplasias hematologicas (8,9%) y tumores solidos (7,4%).',
      clinica: 'Lo que cambia segun la edad: la enfermedad inflamatoria intestinal es significativamente mas frecuente por debajo de los 65 a&#241;os, mientras que la artritis, los tumores solidos y los trastornos hematologicos lo son por encima de esa edad. Ese dato por si solo reordena la busqueda.',
      criterios_dx: 'No hay criterios para la busqueda sistemica: hay una lista por frecuencia y una historia dirigida. Lo que si esta claro es el momento: el pioderma se diagnostica con frecuencia durante las fases ACTIVAS de la enfermedad inflamatoria intestinal o poco despues de su diagnostico.',
      laboratorio: 'Dirigido a lo frecuente. Enfermedad inflamatoria intestinal: presente en el 26 al 41% de los pacientes con pioderma en dos grandes bases de datos estadounidenses, con una razon de probabilidades de 6,2 frente a controles en un estudio nacional y de 47,5 en el registro danes (ese intervalo tan amplio refleja la rareza del pioderma, no un efecto mayor). El pioderma fue mas frecuente en enfermedad activa (45%) que en remision (18%), y hay descrita resolucion del pioderma al controlar la colitis ulcerosa. No hay diferencia entre Crohn y colitis ulcerosa. Hematologia: trastornos hematologicos en el 3 al 6%; gammapatia monoclonal en el 27% de una cohorte canadiense, IgA el subtipo mas frecuente (41%), y neoplasia en el 28% de los que tenian gammapatia frente al 6% de los que no.',
      imagen: 'Segun la sospecha: colonoscopia ante clinica digestiva, imagen y estudio hematologico ante citopenias o gammapatia.',
      complementarios: 'Las menos frecuentes pero relevantes. Vasculitis: pioderma en el 1,1% de los pacientes con granulomatosis con poliangeitis, y vasculitis en el 2,5% de los ingresados por pioderma, con una razon de probabilidades de mortalidad intrahospitalaria de 6,0 frente a los que tenian enfermedad inflamatoria intestinal. Behcet: pioderma en el 30% de una cohorte de 20 pacientes, todos en miembros inferiores. Renal: riesgo aumentado de insuficiencia renal cronica (HR ajustada 3,68) y de dialisis (HR ajustada 27,79), y bidireccional, porque la enfermedad renal previa tambien aumenta las probabilidades de pioderma. Metabolico y cardiaco: diabetes sin complicaciones (OR 1,92), insuficiencia cardiaca (OR 2,01) y hepatopatia leve (OR 2,70).',
      dx_diferencial: 'Un punto de prudencia que la propia revision subraya: la asociacion con tumores SOLIDOS es incierta. Un estudio israeli no encontro asociacion bidireccional significativa (HR ajustada 1,02 para desarrollar tumor solido tras el pioderma), y los pacientes con las dos cosas eran bastante mayores (71,7 frente a 51,9 a&#241;os), lo que sugiere que puede tratarse del riesgo de cancer propio de la edad y no de un vinculo causal.',
      tx_medico: 'Lo que justifica todo este apartado: controlar la enfermedad de base puede resolver la piel. Esta descrita la desaparicion del pioderma en un mes al tratar la colitis ulcerosa.',
      pronostico: 'La comorbilidad pesa. Los pacientes con pioderma y neoplasia hematologica tuvieron una razon de probabilidades de mortalidad intrahospitalaria de 4,31 frente a los que tenian enfermedad inflamatoria intestinal, y el subgrupo con comorbilidad metabolica y organica casi triplico la mortalidad frente a controles (HR ajustada 2,79).',
      seguimiento_ambulatorio: 'Seguimiento prolongado y multidisciplinar, con atencion especial al pioderma asociado a vasculitis, que es el mas propenso a recaer.',
      algoritmo: ['Asumir que el pioderma apunta a algo: hasta el 80% tiene asociacion sistemica', 'Mirar la edad: por debajo de 65 a&#241;os, primero el intestino', 'Por encima de 65: artritis, tumor solido y hematologia', 'Estudio digestivo: es la asociacion mas solida y responde al control de la EII', 'Proteinograma e inmunofijacion en todos', 'Hemograma con frotis y, si hay citopenias, estudio hematologico', 'Funcion renal, glucemia y valoracion cardiaca', 'Si hay vasculitis asociada, prever recaidas y mantener la inmunosupresion']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Estas enfermedades llegan al internista casi siempre por la puerta equivocada: como una celulitis que no responde al antibiotico, como una ulcera que empeora despues de cada cura, o como una fiebre con una erupcion que nadie sabe donde encajar. El hilo comun es que la piel esta se&#241;alando algo, y el trabajo consiste en seguir el dedo, no en mirar el dedo.',
    parametros: [
      'Si vas a biopsiar un NODULO, pide biopsia incisional o excisional PROFUNDA. Un punch no llega a la grasa y el informe no concluira nada.',
      'Un nodulo tipo eritema nodoso que se ULCERA o deja atrofia no es un eritema nodoso: piensa en paniculitis lobulillar y en linfoma T subcutaneo.',
      'En todo eritema nodoso: estudio de estreptococo con ASLO al diagnostico y REPETIDO a las cuatro semanas, radiografia de torax y estratificacion del riesgo de tuberculosis.',
      'No des corticoide sistemico en un eritema nodoso antes de haber excluido infeccion, riesgo de diseminacion bacteriana y neoplasia.',
      'Placa caliente y dolorosa con fiebre que no responde al antibiotico y con cultivos negativos: piensa en sindrome de Sweet antes de subir de antibiotico.',
      'Ante un Sweet, revisa los farmacos de las ultimas semanas: el factor estimulante de colonias, el ATRA y los inhibidores de tirosina cinasa son desencadenantes frecuentes y retirarlos puede ser todo el tratamiento.',
      'Un Sweet sin causa aparente no se cierra como idiopatico: en la mielodisplasia, la mayoria de los diagnosticos se hicieron DESPUES del episodio cutaneo.',
      'Una ulcera de borde socavado violaceo que empeora tras cada desbridamiento es patergia: deja de desbridar y replantea el diagnostico.',
      'En el pioderma, pide proteinograma: la gammapatia monoclonal aparece en el 27% y predice neoplasia.',
      'En el eritema multiforme, el antiviral empezado cuando ya hay lesiones no cambia el curso: su papel es la profilaxis de las recurrencias.'
    ],
    criterios_uci_general: 'Ninguna de estas enfermedades ingresa en criticos por si misma. Las razones reales son la sepsis sobre una ulcera de pioderma, la mucositis grave del eritema multiforme con deshidratacion y desequilibrio hidroelectrolitico, y las manifestaciones extracutaneas graves del Sweet, entre las que estan descritas la miocarditis y la miositis neutrofilica con rabdomiolisis.',
    criterios_tips_general: 'El ingreso hospitalario del eritema multiforme se decide por la mucosa: afectacion grave que impide la ingesta, con el desequilibrio hidroelectrolitico que sigue. En el pioderma, lo que se evita es justamente la intervencion: no desbridar.',
    criterios_trasplante_general: 'No aplica. Nota al margen con sentido inverso: el trasplante renal aumento las probabilidades de pioderma (OR ajustada 5,03), de modo que el antecedente cuenta.',
    prevencion: 'En el eritema multiforme recurrente, la prevencion ES el tratamiento: antiviral continuo durante al menos seis meses, y de 1 a 2 a&#241;os en quien responde. En el pioderma, prevenir significa evitar el traumatismo sobre la zona y controlar la enfermedad de base, porque el pioderma sigue la actividad de la enfermedad inflamatoria intestinal. En el eritema nodoso y en el Sweet, prevenir es identificar y retirar el desencadenante: la faringitis tratada, el farmaco suspendido, la neoplasia tratada.'
  }
};

export const compCites = {
  'Eritema nodoso: la paniculitis que apunta a otra cosa': { definicion: [1], fisiopatologia: [1], epidemiologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1], complementarios: [1], dx_diferencial: [1], tx_medico: [1], tx_farmacologico: [1] },
  'Paniculitis: el nodulo profundo y su diferencial': { definicion: [1], criterios_dx: [1], dx_diferencial: [1], complementarios: [1] },
  'Eritema multiforme: la diana del herpes': { definicion: [2], fisiopatologia: [2], epidemiologia: [2], clinica: [2], criterios_dx: [2], laboratorio: [2], dx_diferencial: [2], tx_medico: [2], tx_farmacologico: [2] },
  'Eritema multiforme recurrente: el que se previene': { definicion: [2], epidemiologia: [2], fisiopatologia: [2], clinica: [2], tx_farmacologico: [2], tx_medico: [2], complementarios: [2], pronostico: [2] },
  'Eritema multiforme frente a Stevens-Johnson: dos enfermedades': { definicion: [2], fisiopatologia: [2], clinica: [2], dx_diferencial: [2] },
  'Sindrome de Sweet: reconocerlo': { definicion: [3], fisiopatologia: [3], epidemiologia: [3], clinica: [3], criterios_dx: [3], laboratorio: [3], dx_diferencial: [3], tx_medico: [3], tx_farmacologico: [3], complementarios: [3] },
  'Sweet: buscar el farmaco y la neoplasia': { epidemiologia: [3], fisiopatologia: [3], clinica: [3], criterios_dx: [3], complementarios: [3], dx_diferencial: [3], seguimiento_ambulatorio: [3] },
  'Pioderma gangrenoso: la ulcera que no hay que desbridar': { definicion: [4], epidemiologia: [4], fisiopatologia: [4], clinica: [4], criterios_dx: [4], tx_medico: [4], tx_farmacologico: [4], pronostico: [4] },
  'Pioderma gangrenoso: la enfermedad sistemica de detras': { definicion: [4], epidemiologia: [4], clinica: [4], criterios_dx: [4], laboratorio: [4], complementarios: [4], dx_diferencial: [4], tx_medico: [4], pronostico: [4] }
};

export const estigmasTitulo = 'Signos que orientan ante una lesion reactiva';
export const estigmas = [
  { nombre: 'Patergia', descripcion: 'El traumatismo minimo precipita o agrava la lesion. Es el rasgo del pioderma gangrenoso con mas consecuencias practicas, porque convierte el desbridamiento en una forma de empeorar la enfermedad, y tambien se invoca en la patogenia del sindrome de Sweet.' },
  { nombre: 'El nodulo que NO se ulcera', descripcion: 'El eritema nodoso no se ulcera y cura sin atrofia ni cicatriz. Si el nodulo se ulcera o deja una depresion, hay que pensar en una paniculitis lobulillar (lupica, pancreatica, por deficit de alfa-1-antitripsina) o en un linfoma T subcutaneo.' },
  { nombre: 'Aspecto de moreton al apagarse', descripcion: 'Los nodulos del eritema nodoso adoptan un aspecto equimotico mientras se resuelven, en uno o dos meses. Es un dato de evolucion que ayuda cuando el paciente llega con lesiones de distintas edades.' },
  { nombre: 'Borde elevado, socavado y violaceo', descripcion: 'El borde de la ulcera del pioderma gangrenoso: elevado, con el margen despegado de la base y de color violaceo, sobre una ulcera que crecio rapido desde una papula o pustula esteril y duele mas de lo que su tama&#241;o justifica.' },
  { nombre: 'La placa jugosa del Sweet', descripcion: 'Placa infiltrada, caliente y dolorosa cuyo edema papilar dermico es tan marcado que la lesion parece turgente o jugosa. Con fiebre y neutrofilia, es el cuadro que describio Sweet en 1964 en miembros, cara y cuello.' },
  { nombre: 'Cultivo negativo y antibiotico que no funciona', descripcion: 'En el Sweet similar a celulitis, en la dermatosis neutrofilica del dorso de las manos y en el Sweet necrosante los cultivos no crecen y el antibiotico no induce remision. No es un fallo del tratamiento: es un dato diagnostico.' },
  { nombre: 'Diana papulosa y acral frente a macula troncular', descripcion: 'La diana del eritema multiforme es PAPULAR, elevada y de predominio acral. La lesion del Stevens-Johnson es MACULAR, mas prominente en el tronco y se extiende en sentido distal. Es la diferencia que separa dos enfermedades distintas.' },
  { nombre: 'Lesion fija frente a habon fugaz', descripcion: 'Todas las lesiones del eritema multiforme aparecen en las primeras 72 horas y se quedan. El habon de la urticaria dura menos de 24 horas y salen nuevos cada dia, y su centro es eritematoso o de piel normal, no oscuro ni ampolloso.' }
];

export const biopsiaTitulo = 'Biopsia: profunda, y para que exactamente';
export const biopsia = {
  indicaciones: [
    'Todo nodulo profundo en el que se plantee una paniculitis distinta del eritema nodoso',
    'Eritema nodoso cuando el diagnostico clinico es dudoso',
    'Toda sospecha de sindrome de Sweet, para documentar el infiltrado neutrofilico',
    'Toda ulcera sospechosa de pioderma gangrenoso, para EXCLUIR otras causas',
    'Eritema multiforme cuando hay que separarlo de sus imitadores'
  ],
  ventajas: [
    'En la paniculitis dice lo unico que la clasifica: septal o lobulillar, con vasculitis o sin ella',
    'En el eritema nodoso busca granulomas radiales de Miescher y confirma la ausencia de vasculitis',
    'En el Sweet muestra infiltrado neutrofilico dermico difuso con edema papilar y sin vasculitis leucocitoclastica',
    'En el pioderma descarta oclusion vascular, vasculitis, infeccion y neoplasia ulcerada'
  ],
  limitaciones: [
    'Un PUNCH no llega a la grasa: en la paniculitis da una muestra insuficiente',
    'En el pioderma gangrenoso la histologia es INESPECIFICA y no confirma el diagnostico',
    'En el Sweet se han descrito casos sin infiltrado neutrofilico predominante, aunque el nombre no debe usarse para infiltrados eosinofilicos o linfociticos',
    'El subtipo histologico del eritema multiforme depende del sitio y del momento evolutivo de la lesion biopsiada'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion',
    'En el pioderma, elegir el borde y evitar el traumatismo innecesario por la patergia',
    'En el nodulo profundo, no sustituir la biopsia incisional por un punch para ahorrar tiempo',
    'Evitar biopsiar sobre una zona ya sobreinfectada'
  ]
};

export const escalaRefs = {
  'Paniculitis: septal o lobulillar (calculadora disponible)': [1],
  'Criterios de Sweet de von den Driesch': [3],
  'Criterios de Sweet inducido por farmaco (Walker y Cohen)': [3],
  'Criterios diagnosticos del pioderma gangrenoso': [4],
  'Eritema multiforme frente a Stevens-Johnson (calculadora disponible)': [2],
  'Predictores de eritema multiforme recurrente resistente': [2]
};

export const escalaCalc = {
  'Paniculitis: septal o lobulillar (calculadora disponible)': 'nodulo-doloroso',
  'Eritema multiforme frente a Stevens-Johnson (calculadora disponible)': 'em-vs-sjs'
};

export const compGroups = [
  { title: 'Paniculitis', items: ['Eritema nodoso: la paniculitis que apunta a otra cosa', 'Paniculitis: el nodulo profundo y su diferencial'] },
  { title: 'Eritema multiforme', items: ['Eritema multiforme: la diana del herpes', 'Eritema multiforme recurrente: el que se previene', 'Eritema multiforme frente a Stevens-Johnson: dos enfermedades'] },
  { title: 'Dermatosis neutrofilicas', items: ['Sindrome de Sweet: reconocerlo', 'Sweet: buscar el farmaco y la neoplasia', 'Pioderma gangrenoso: la ulcera que no hay que desbridar', 'Pioderma gangrenoso: la enfermedad sistemica de detras'] }
];

export const complicacionesIntro = 'Las fichas van por profundidad y, dentro de cada familia, separan reconocer de buscar. Las dos primeras son la grasa: el eritema nodoso y despues el diferencial de cuando el nodulo no se comporta como un eritema nodoso. Las tres siguientes son el eritema multiforme: reconocerlo, prevenirlo cuando recurre, y la frontera con el Stevens-Johnson, que es la que mas se falla y la que tiene consecuencias de tratamiento. Las cuatro ultimas son las dermatosis neutrofilicas, y en el Sweet y en el pioderma la ficha de reconocer y la de buscar estan deliberadamente separadas: reconocerlos es facil comparado con averiguar que los ha provocado, y lo segundo es el trabajo del internista.';

export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Criterios' },
  { id: 'complicaciones', label: 'Fichas' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'LA PIEL REACCIONA', color: '#9c3a52', target: 'definicion' },
  branches: [
    { title: 'Union dermoepidermica', sub: 'DIANA acral y papulosa', color: '#b05a2e', target: 'complicaciones', leaves: [
      { title: 'Eritema multiforme', sub: 'Herpes simple en el 90%', color: '#b05a2e', target: 'complicaciones' },
      { title: 'No es Stevens-Johnson', sub: 'Papular y acral, no macular', color: '#8c3a34', target: 'clasificacion' }
    ] },
    { title: 'Dermis', sub: 'PLACA infiltrada y dolorosa', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Sindrome de Sweet', sub: 'Fiebre y neutrofilia', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Pioderma gangrenoso', sub: 'Borde socavado &middot; NO desbridar', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Que hay detras', sub: 'Farmaco, EII, hematologia', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Grasa subcutanea', sub: 'NODULO profundo', color: '#7a5a3a', target: 'complicaciones', leaves: [
      { title: 'Eritema nodoso', sub: 'Septal sin vasculitis &middot; no ulcera', color: '#9c3a52', target: 'complicaciones' },
      { title: 'Si ulcera, otra cosa', sub: 'Lobulillar o linfoma', color: '#7a5a3a', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 2, 3, 4], no_invasivos: [1, 2, 3, 4], imagen: [1, 3], biopsia: [1, 3, 4] };
export const clasificacionCite = [1, 2, 3, 4];
export const seguimientoCite = [1, 2, 3, 4];
export const figurasDefinicion = ['mapa-profundidad'];
export const figurasClasificacion = ['em-vs-sjs', 'que-buscar-detras'];

export const figuras = {
  'mapa-profundidad': {
    titulo: 'La profundidad ordena el tema',
    fuente: 'Paniculitis septal y granulomas de Miescher de Schwartz RA, Nervi SJ. Am Fam Physician 2007;75(5):695-700; infiltrado neutrofilico dermico de Joshi TP, et al. Am J Clin Dermatol 2022;23(3):301-318; lesion en diana de Sokumbi O, Wetter DA. Int J Dermatol 2012;51(8):889-902.',
    html: `<svg viewBox="0 0 740 400" role="img" aria-labelledby="prof-title prof-desc" style="width:100%;height:auto;">
      <title id="prof-title">Corte de la piel con la capa en la que ocurre cada reaccion y la lesion que produce</title>
      <desc id="prof-desc">Corte esquematico de la piel en tres niveles. En la union de la epidermis con la dermis se produce el eritema multiforme, que se ve como una lesion en diana papulosa de distribucion acral. En la dermis se producen las dermatosis neutrofilicas, el sindrome de Sweet y el pioderma gangrenoso, que se ven como placas infiltradas y dolorosas o como una ulcera de borde socavado. En la grasa subcutanea se producen las paniculitis, que se ven como nodulos profundos mal delimitados; la mas frecuente es el eritema nodoso, que es septal y sin vasculitis y no se ulcera.</desc>

      <text x="8" y="22" font-size="12" font-weight="600" fill="var(--ink)">Donde ocurre la reaccion y que lesion produce</text>

      <rect x="60" y="44" width="420" height="26" fill="var(--panel2)" stroke="var(--line)" stroke-width="1"/>
      <text x="52" y="61" font-size="10" text-anchor="end" fill="var(--ink-dim)">epidermis</text>
      <rect x="60" y="70" width="420" height="140" fill="var(--panel)" stroke="var(--line)" stroke-width="1"/>
      <text x="52" y="142" font-size="10" text-anchor="end" fill="var(--ink-dim)">dermis</text>
      <rect x="60" y="210" width="420" height="150" fill="var(--panel2)" stroke="var(--line)" stroke-width="1"/>
      <text x="52" y="285" font-size="10" text-anchor="end" fill="var(--ink-dim)">grasa</text>

      <circle cx="140" cy="248" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <circle cx="235" cy="248" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <circle cx="330" cy="248" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <circle cx="425" cy="248" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <circle cx="187" cy="315" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <circle cx="282" cy="315" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <circle cx="377" cy="315" r="30" fill="none" stroke="var(--line)" stroke-width="1"/>
      <text x="270" y="207" font-size="9.5" text-anchor="middle" fill="var(--ink-faint)">lobulillos de grasa, separados por tabiques</text>

      <line x1="60" y1="70" x2="480" y2="70" stroke="#b05a2e" stroke-width="3"/>
      <circle cx="150" cy="70" r="13" fill="none" stroke="#b05a2e" stroke-width="2"/>
      <circle cx="150" cy="70" r="7" fill="#b05a2e" opacity="0.85"/>
      <text x="498" y="60" font-size="11" font-weight="600" fill="var(--ink)">Union dermoepidermica</text>
      <text x="498" y="76" font-size="10" fill="var(--ink-dim)">Diana PAPULOSA, acral</text>
      <text x="498" y="90" font-size="10" fill="var(--ink-dim)">Eritema multiforme &middot; herpes</text>

      <ellipse cx="270" cy="128" rx="92" ry="34" fill="#8a5a2e" opacity="0.55"/>
      <text x="270" y="133" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--ink)">infiltrado de neutrofilos</text>
      <text x="498" y="124" font-size="11" font-weight="600" fill="var(--ink)">Dermis</text>
      <text x="498" y="140" font-size="10" fill="var(--ink-dim)">PLACA infiltrada y dolorosa</text>
      <text x="498" y="154" font-size="10" fill="var(--ink-dim)">Sweet &middot; pioderma gangrenoso</text>
      <text x="498" y="168" font-size="10" fill="var(--ink-dim)">Cultivos negativos</text>

      <rect x="186" y="212" width="8" height="146" fill="#9c3a52" opacity="0.75"/>
      <rect x="281" y="212" width="8" height="146" fill="#9c3a52" opacity="0.75"/>
      <rect x="376" y="212" width="8" height="146" fill="#9c3a52" opacity="0.75"/>
      <text x="498" y="248" font-size="11" font-weight="600" fill="var(--ink)">Grasa subcutanea</text>
      <text x="498" y="264" font-size="10" fill="var(--ink-dim)">NODULO profundo, mal delimitado</text>
      <text x="498" y="278" font-size="10" fill="var(--ink-dim)">Eritema nodoso: TABIQUES,</text>
      <text x="498" y="292" font-size="10" fill="var(--ink-dim)">sin vasculitis, y NO se ulcera</text>
      <text x="498" y="312" font-size="10" fill="#8c3a34">Si ulcera o deja atrofia:</text>
      <text x="498" y="326" font-size="10" fill="#8c3a34">lobulillar, o linfoma T subcutaneo</text>
      <text x="498" y="346" font-size="10" fill="var(--accent-fg)">Biopsia INCISIONAL: el punch no llega</text>
    </svg>
    <div class="figure-grade-box">La figura resume las dos reglas tecnicas del tema. La primera: <strong>para ver la grasa hay que llegar a la grasa</strong>, de modo que la paniculitis se biopsia con una muestra incisional o excisional y un punch da casi siempre material insuficiente. La segunda: el eritema nodoso inflama los <strong>tabiques</strong> y respeta el lobulillo, y por eso no destruye la grasa, no se ulcera y no deja cicatriz; cuando un nodulo si lo hace, el infiltrado esta dentro del lobulillo y el diferencial cambia por completo.</div>`
  },
  'em-vs-sjs': {
    titulo: 'Eritema multiforme y Stevens-Johnson: dos enfermedades, no un espectro',
    fuente: 'Sokumbi O, Wetter DA. Clinical features, diagnosis, and treatment of erythema multiforme. Int J Dermatol 2012;51(8):889-902, que recoge la clasificacion clinica de consenso.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Eritema multiforme</th><th>Stevens-Johnson</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Lesion cutanea</td><td><span class="figure-tag">PAPULAR</span>, diana tipica elevada</td><td><span class="figure-tag dys">MACULAR</span>, diana atipica plana</td></tr>
            <tr><td class="figure-org">Distribucion</td><td>Predominio <strong>ACRAL</strong></td><td>Predominio en <strong>TRONCO</strong>, se extiende distalmente</td></tr>
            <tr><td class="figure-org">Desencadenante</td><td>Infeccion en el 90%; herpes simple el primero</td><td>FARMACO</td></tr>
            <tr><td class="figure-org">Mucosas</td><td>Puede haberlas: con ellas es eritema multiforme MAYOR</td><td>Erosiones mucosas parecidas</td></tr>
            <tr><td class="figure-org">Velocidad</td><td>Todas las lesiones en las primeras 72 h; son fijas</td><td>Progresion con despegamiento</td></tr>
            <tr><td class="figure-org">Que se hace</td><td>Buscar el VIRUS; profilaxis antiviral si recurre</td><td>Retirar el FARMACO; ver el modulo 77</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Durante a&#241;os se ense&#241;o que el eritema multiforme mayor, el Stevens-Johnson y la necrolisis epidermica toxica eran un espectro. Una <strong>clasificacion clinica de consenso</strong> aporto la evidencia de que el eritema multiforme mayor y el Stevens-Johnson son <strong>enfermedades separadas y distintas</strong>: comparten erosiones mucosas parecidas y se diferencian por la lesion cutanea. La consecuencia no es academica: en uno se busca un virus y en el otro se retira un farmaco. La mucosa afectada NO decide cual es, solo separa el eritema multiforme menor del mayor.</div>`
  },
  'que-buscar-detras': {
    titulo: 'Que hay que buscar detras de cada una',
    fuente: 'Causas del eritema nodoso de Schwartz RA, Nervi SJ. Am Fam Physician 2007;75(5):695-700; asociaciones del Sweet de Joshi TP, et al. Am J Clin Dermatol 2022;23(3):301-318; asociaciones del pioderma de Nadarajah N, et al. Skin Health Dis 2026;6(4):393-405.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lesion</th><th>Lo primero que se busca</th><th>Con que frecuencia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Eritema nodoso</td><td>Faringitis estreptococica</td><td>44% de los adultos y 48% de los ni&#241;os</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Sarcoidosis, con adenopatias hiliares bilaterales</td><td>11 a 25%</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Farmacos (sulfonamidas, amoxicilina, anticonceptivos)</td><td>3 a 10%</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Enteropatia inflamatoria &middot; embarazo</td><td>1 a 4% &middot; 2 a 5%</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Idiopatico, despues de buscar</td><td>hasta 55%</td></tr>
            <tr><td class="figure-org">Eritema multiforme</td><td>Virus del herpes simple</td><td>Infeccion en el 90% de los casos</td></tr>
            <tr><td class="figure-org">Eritema multiforme</td><td>Farmaco</td><td>menos del 10%</td></tr>
            <tr><td class="figure-org">Sindrome de Sweet</td><td>Farmaco: G-CSF, ATRA, inhibidores de tirosina cinasa</td><td>Desencadenantes yatrogenos frecuentes</td></tr>
            <tr><td class="figure-org">Sindrome de Sweet</td><td>Leucemia mieloide aguda y mielodisplasia</td><td>Sweet en el 1 a 5,5% de las leucemias</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso</td><td>Enfermedad inflamatoria intestinal</td><td>17,6% agrupado; 26 a 41% en bases de datos</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso</td><td>Artritis inflamatoria</td><td>12,8%</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso</td><td>Neoplasia hematologica &middot; gammapatia monoclonal</td><td>8,9% &middot; 27% en una cohorte</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La tabla es el tema entero en una pagina: <strong>cada lesion es una indicacion de busqueda</strong>, y la busqueda tiene un orden dado por la frecuencia. Dos matices que cambian la conducta. En el <strong>pioderma</strong>, la edad reordena la lista: por debajo de los 65 a&#241;os la enfermedad inflamatoria intestinal es significativamente mas frecuente, y por encima lo son la artritis, el tumor solido y los trastornos hematologicos. Y en el <strong>Sweet</strong>, la ausencia de causa no cierra el caso: en una serie de mielodisplasia, 15 de 23 diagnosticos hematologicos se hicieron DESPUES del episodio cutaneo.</div>`
  }
};
