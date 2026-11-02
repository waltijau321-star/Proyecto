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
  titulo: 'Eritemas reactivos, paniculitis y dermatosis neutrofílicas',
  subtitulo: 'Módulo 78 &middot; Dermatología',
  accent: '#9c3a52',
  accentDim: '#b35c74'
};

export const definicionText = `<p style="margin:0 0 14px;">Este tema agrupa enfermedades que no tienen nada que ver entre si salvo lo único que de verdad importa: <strong>ninguna de ellas es una enfermedad de la piel</strong>. Son la piel REACCIONANDO a otra cosa, que puede ser una infección, un fármaco, una enfermedad inflamatoria sistémica o una neoplasia. Por eso la pregunta útil nunca es "¿qué erupción es esta?", sino <strong>"¿a que esta apuntando?"</strong>. Reconocer el patrón no es el final del trabajo: es la indicación para empezar a buscar.</p>
<p style="margin:0 0 14px;">La forma de ordenarlas es la <strong>profundidad</strong> de la lesión, porque la profundidad se ve y se palpa. Si la reacción ocurre en la <strong>unión de la epidermis con la dermis</strong>, se forma una lesión en DIANA con el centro oscuro: eso es el eritema multiforme. Si ocurre en la <strong>dermis</strong>, se forma una placa infiltrada, caliente y dolorosa, con edema tan marcado que parece jugosa: eso son las dermatosis neutrofílicas, el síndrome de Sweet y el pioderma gangrenoso. Y si ocurre en la <strong>grasa subcutánea</strong>, se forma un nódulo profundo, mal delimitado, que se palpa más de lo que se ve: eso es una paniculitis, y la más frecuente con diferencia es el eritema nodoso.</p>
<p style="margin:0 0 14px;">Dos consecuencias prácticas que recorren todo el tema. La primera es de técnica: para ver la grasa hay que llegar a la grasa, de modo que la paniculitis exige <strong>biopsia incisional o excisional profunda</strong> y un punch da una muestra insuficiente. La segunda es de criterio: en el Sweet y en el pioderma los <strong>cultivos son negativos y los antibióticos no funcionan</strong>, y eso no es un dato accesorio, es parte del diagnóstico. El error más caro del tema es tratar una de estas lesiones como una infección: desbridar un pioderma lo agranda, porque responde al traumatismo con más enfermedad.</p>`;

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
      tituloB: 'Los datos que obligan a buscar algo más',
      compensada: 'NÓDULO PROFUNDO, mal delimitado, de 1 a 10 cm, que se palpa más de lo que se ve, doloroso al tacto y simétrico en la cara anterior de las piernas: es una paniculitis, y lo más probable es un ERITEMA NODOSO. Las lesiones individuales duran unas dos semanas, siguen saliendo brotes nuevos hasta seis semanas, tardan uno o dos meses en curar del todo y al apagarse dejan un aspecto de MORETÓN. PLACA O NÓDULO DOLOROSO en la dermis, infiltrado, con edema papilar tan marcado que la lesión parece jugosa, en miembros superiores, cara y cuello, con FIEBRE y neutrofilia: es el SÍNDROME DE SWEET. LESIÓN EN DIANA con zonas concéntricas de color y un centro oscuro, de distribución ACRAL, que aparece entera en las primeras 72 horas: es el ERITEMA MULTIFORME. Y la ÚLCERA de borde elevado, socavado y violaceo, que empezo como una papula o una pústula estéril y crecio muy rápido, desproporcionadamente dolorosa: es el PIODERMA GANGRENOSO.',
      descompensada: 'Lo que cambia el plan. Un nódulo de aspecto de eritema nodoso que SE ÚLCERA o que deja atrofia o cicatriz: el eritema nodoso no hace ninguna de las dos cosas, de modo que hay que pensar en otra paniculitis (lupica, pancreática, por déficit de alfa-1-antitripsina) o en un linfoma T subcutáneo. Fiebre con placas dolorosas y CITOPENIAS o un hemograma raro: Sweet asociado a síndrome mielodisplásico o a leucemia aguda mieloide. Un Sweet que aparece días después de empezar un FACTOR ESTIMULANTE DE COLONIAS, ATRA o un inhibidor de tirosina cinasa: es yatrogeno, y se resuelve retirandolo. Una úlcera que empeora después de cada desbridamiento: es PATERGIA, y apunta a pioderma. Y en el pioderma, una gammapatía monoclonal o una citopenia obligan a estudio hematológico, porque la gammapatía aparece en el 27% y predice neoplasia.'
    },
    laboratorio: [
      { prueba: 'Hemograma con diferencial', utilidad: 'Doble papel. En el eritema nodoso puede haber leucocitosis por encima de 10.000 por mm3, que es inespecífica. En el síndrome de Sweet la NEUTROFILIA forma parte del cuadro desde la descripción original. Y en los dos, lo que de verdad hay que mirar son las CITOPENIAS y las formas anormales: son la pista de un síndrome mielodisplásico o de una leucemia detrás.' },
      { prueba: 'VSG y proteína C reactiva', utilidad: 'Elevadas en el eritema nodoso y en el síndrome de Sweet. No diagnostican nada, pero sirven de referencia para seguir la actividad y, en el eritema multiforme, su elevación junto a la de las enzimas hepáticas marca enfermedad grave.' },
      { prueba: 'Estudio de estreptococo', utilidad: 'Obligado en todo eritema nodoso, porque es la causa identificable más frecuente: hasta el 44% de los casos del adulto y el 48% de los del niño. Cultivo faringeo para estreptococo del grupo A, prueba de antígeno rápido y título de ANTIESTREPTOLISINA O. El título se pide al diagnóstico y SE REPITE a las cuatro semanas, porque lo que demuestra la infección reciente es el ascenso. La PCR a tiempo real es una alternativa valida, con sensibilidad del 93% y especificidad del 98%.' },
      { prueba: 'Cribado de tuberculosis', utilidad: 'TODO paciente con eritema nodoso debe estratificarse por riesgo de exposición a tuberculosis: prueba de tuberculina, radiografía de tórax y baciloscopia de esputo si procede. El eritema nodoso puede aparecer en la tuberculosis primaria, incluso ANTES de que la tuberculina se positivice, y también en pacientes con tuberculina muy positiva sin foco identificable. La revisión recomienda iniciar tratamiento antituberculoso ante una tuberculina positiva, con foco identificado o sin el.' },
      { prueba: 'Estudio digestivo', utilidad: 'Coprocultivo y estudio de huevos y parásitos si hay diarrea o síntomas digestivos, y valoración de enfermedad inflamatoria intestinal. En el eritema nodoso las enteropatias explican del 1 al 4% de los casos; en el pioderma gangrenoso la enfermedad inflamatoria intestinal es LA asociación, presente en el 26 al 41% de las series.' },
      { prueba: 'Virus del herpes simple y Mycoplasma pneumoniae', utilidad: 'En el eritema multiforme la infección explica alrededor del 90% de los casos y el virus del herpes simple es el agente más frecuente, sobre todo el tipo 1, aunque el tipo 2 también puede. Mycoplasma pneumoniae es el otro agente con asociación clara y tiene especial importancia en el niño. En el eritema multiforme recurrente idiopático se ha detectado ADN del virus en la piel lesional hasta en el 50% de los casos.' },
      { prueba: 'Cultivos y hemocultivos', utilidad: 'Se piden para que salgan NEGATIVOS. En el Sweet similar a celulitis, en el pioderma, en la dermatosis neutrofílica del dorso de las manos y en el Sweet necrosante los cultivos son negativos y el antibiótico no induce remisión: eso es lo que separa el cuadro de una infección. La revisión de Sweet llega a admitir que, descartada la infección, una PRUEBA TERAPÉUTICA con corticoide que funcione apoya el diagnóstico.' },
      { prueba: 'Proteinograma e inmunofijación', utilidad: 'En el pioderma gangrenoso, una cohorte canadiense encontró gammapatía monoclonal en el 27% de los pacientes, con la IgA como subtipo más frecuente (41%). Y no es un hallazgo inocente: la neoplasia aparecio en el 28% de los pacientes con gammapatía frente al 6% de los que no la tenian, sobre todo mieloma múltiple.' }
    ],
    no_invasivos: [
      { metodo: 'Enfoque del nódulo eritematoso doloroso (calculadora disponible)', interpretacion: 'Inamadar y Adya propusieron en 2019 ordenar el nódulo doloroso por tres características: CRONICIDAD, distribución (localizada o generalizada) y configuración (centrífuga o centripeta). El síndrome de Sweet suele ser de inicio agudo, generalizado y centripeto; el eritema nodoso es simétrico y pretibial. A esas tres hay que añadir la profundidad y una pregunta que decide mucho: ¿se úlcera?', cutoff: 'Agudo + generalizado + centripeto orienta a Sweet' },
      { metodo: 'Criterios de Sweet de von den Driesch', interpretacion: 'Su y Liu los propusieron en 1986 y von den Driesch los modifico en 1994. Exigen cumplir los DOS criterios mayores más DOS de los cuatro menores. El detalle que importa: los criterios de von den Driesch EXIGEN infiltrado neutrofílico, y la propia revisión advierte que se han diagnosticado casos de Sweet sin infiltrado neutrofílico predominante, pero recomienda no usar el nombre para cuadros con infiltrado eosinofilico o linfocítico aunque se parezcan en la clínica.', cutoff: '2 criterios mayores + 2 de 4 menores' },
      { metodo: 'Criterios de Sweet inducido por fármaco (Walker y Cohen)', interpretacion: 'Establecidos en 1996. A diferencia de los de von den Driesch, aquí hay que cumplir TODOS los criterios para poder atribuir el cuadro a un fármaco. Para graduar la probabilidad de que el fármaco sea el responsable, la revisión usa la escala de NARANJO, que puntúa de 1 a 13: de 1 a 4 reacción posible, de 5 a 8 probable y de 9 a 13 definitiva.', cutoff: 'Todos los criterios; Naranjo 9 o más es definitiva' },
      { metodo: 'Criterios diagnósticos del pioderma gangrenoso', interpretacion: 'Hay tres juegos propuestos: los de Su, el consenso Delphi y la puntuación PARACELSUS. En la comparación que cita la revisión, PARACELSUS identifico la mayor proporción de pacientes con pioderma, un 89%, frente al 74% de los criterios Delphi y de los de Su. Todos comparten la misma lógica: el diagnóstico es CLÍNICO y la biopsia esta para excluir otras causas de úlcera, no para confirmar.', cutoff: 'PARACELSUS identifica el 89%' },
      { metodo: 'Biopsia profunda de la grasa', interpretacion: 'No es una escala, es un requisito. Para ver la paniculitis hay que obtener una muestra INCISIONAL o EXCISIONAL profunda, porque un punch da casi siempre una muestra insuficiente. Lo que se busca en el eritema nodoso es paniculitis SEPTAL, infiltrado linfocítico con neutrófilos, granulomas radiales de Miescher (agregados pequeños de histiocitos alrededor de una hendidura estrellada central), AUSENCIA de vasculitis y ausencia de microorganismos.', cutoff: 'Incisional o excisional, nunca punch' },
      { metodo: 'Eritema multiforme menor frente a mayor', interpretacion: 'La única diferencia es la mucosa: con afectación mucosa es eritema multiforme MAYOR y sin ella es MENOR. En una serie de 65 pacientes con eritema multiforme recurrente, el 69% tenia afectación oral, el 25% genital y el 17% ocular. Y la recurrencia tiene su propia definición: más de seis episodios al año, con una duración media de la enfermedad de 6 a 10 años.', cutoff: 'Recurrente: más de 6 episodios al año' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Es la prueba de imagen de todo eritema nodoso. Busca dos cosas: adenopatías hiliares bilaterales, que apuntan a sarcoidosis y explican del 11 al 25% de los casos, y lesiones de tuberculosis. En el síndrome de Lofgren completo (eritema nodoso, adenopatías hiliares bilaterales y artritis de tobillos) la especificidad es tan alta que no hace falta biopsia: ver el tema de Sarcoidosis.' },
      { modalidad: 'Ecografía de partes blandas', hallazgos: 'No distingue entre estas entidades, pero sirve para lo que si importa a pie de cama: descartar un absceso o una colección drenable en una placa caliente y dolorosa que se parece a una celulitis.' },
      { modalidad: 'Imagen dirigida por la sospecha', hallazgos: 'En el Sweet con citopenias o con mala evolución, lo que hace falta no es más imagen de la piel sino estudio de medula ósea. En el pioderma, imagen y colonoscopia según la sospecha de enfermedad inflamatoria intestinal. Y en el eritema nodoso, el estudio se dirige por la historia y la geografia: las micosis sistémicas (histoplasmosis, coccidioidomicosis) dependen del lugar de residencia y de los viajes.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `No hay una sola clasificación que valga para el tema, porque son enfermedades distintas. Lo que si hay es un <strong>orden por profundidad</strong> que permite colocar cualquier lesión nueva: diana en la unión dermoepidérmica (eritema multiforme), placa infiltrada en la dermis (dermatosis neutrofílicas) y nódulo en la grasa (paniculitis). Dentro de la paniculitis, la clasificación que usa el patologo es <strong>septal frente a lobulillar</strong> y <strong>con vasculitis o sin ella</strong>: el eritema nodoso es la paniculitis SEPTAL SIN vasculitis, y es la más frecuente de todas. Después, cada entidad tiene su propio juego de criterios, y lo útil de conocerlos no es recitarlos sino saber <strong>que exige cada uno</strong>: los de Sweet piden dos mayores y dos de cuatro menores, los de Sweet por fármaco piden TODOS, y los del pioderma no confirman nada porque su diagnóstico es clínico.`,
    escalas: [
      { nombre: 'Paniculitis: septal o lobulillar (calculadora disponible)', componentes: 'Localización del infiltrado en la grasa (en los tabiques o dentro del lobulillo) y presencia o ausencia de vasculitis.', formula: 'Cuatro combinaciones: septal sin vasculitis, septal con vasculitis, lobulillar sin vasculitis y lobulillar con vasculitis.', interpretacion: 'El ERITEMA NODOSO es la septal sin vasculitis, con granulomas radiales de Miescher, y es la paniculitis más frecuente. Las lobulillares son las que hay que sospechar cuando el nódulo se ÚLCERA o deja atrofia: paniculitis lupica (lupus profundo), paniculitis pancreática, déficit de alfa-1-antitripsina, paniculitis facticia y la paniculitis histiocitica citofagica, que en realidad es un linfoma. Para separarlas hace falta una muestra profunda: con un punch no se llega.' },
      { nombre: 'Criterios de Sweet de von den Driesch', componentes: 'Dos criterios mayores y cuatro menores, que incluyen la clínica de placas o nódulos dolorosos, el infiltrado neutrofílico dérmico, la fiebre, la asociación a una enfermedad o fármaco, los marcadores inflamatorios y la respuesta al corticoide.', formula: 'Se exigen los DOS mayores más DOS de los cuatro menores.', interpretacion: 'Propuestos por Su y Liu en 1986 y modificados por von den Driesch en 1994. Exigen infiltrado neutrofílico, y ese es el punto fino: hay casos descritos de Sweet sin infiltrado neutrofílico predominante, pero la revisión recomienda NO usar el nombre Sweet para cuadros con infiltrado eosinofilico o linfocítico aunque clínicamente lo imiten. Lo que nunca debe verse es vasculitis leucocitoclástica.' },
      { nombre: 'Criterios de Sweet inducido por fármaco (Walker y Cohen)', componentes: 'Relación temporal con la introducción del fármaco, clínica e histología compatibles, fiebre, mejoría al retirarlo y, en su caso, recaída al reintroducirlo.', formula: 'Hay que cumplir TODOS los criterios, no una parte.', interpretacion: 'La diferencia con los de von den Driesch es exactamente esa exigencia. Los desencadenantes yatrogenos descritos con más frecuencia son el factor estimulante de colonias de granulocitos y los inhibidores de tirosina cinasa dirigidos a la leucemia mieloide aguda, además de antimicrobianos y antineoplásicos. Para graduar la causalidad, la escala de Naranjo: de 1 a 4 posible, de 5 a 8 probable, de 9 a 13 definitiva.' },
      { nombre: 'Criterios diagnósticos del pioderma gangrenoso', componentes: 'Tres juegos propuestos: los de Su, el consenso Delphi y la puntuación PARACELSUS.', formula: 'Combinan la morfología de la úlcera, la exclusión de otras causas, la patergia, la respuesta a inmunosupresión y la asociación sistémica.', interpretacion: 'PARACELSUS identifico el 89% de los pacientes con pioderma, frente al 74% de Delphi y de Su. Pero lo que hay que llevarse no es cual puntúa mejor: es que el diagnóstico del pioderma es CLÍNICO y que la histología es inespecífica. La biopsia se hace para EXCLUIR otras causas de úlcera (oclusión vascular, enfermedad venosa, vasculitis, cáncer, infección primaria, úlcera por fármacos), no para confirmar el pioderma.' },
      { nombre: 'Eritema multiforme frente a Stevens-Johnson (calculadora disponible)', componentes: 'Morfología de la lesión cutánea (papular o macular), distribución (acral o troncular), desencadenante predominante y velocidad de aparición.', formula: 'No es una puntuación: es una separación categórica entre dos enfermedades distintas.', interpretacion: 'Durante años se ensenaba que el eritema multiforme mayor, el Stevens-Johnson y la necrólisis epidérmica tóxica eran un espectro. Una clasificación clínica de consenso aporto la evidencia de que el eritema multiforme mayor y el Stevens-Johnson son enfermedades SEPARADAS Y DISTINTAS, que comparten erosiones mucosas parecidas pero tienen lesiones cutáneas diferentes: el eritema multiforme es PAPULAR y acral, y el Stevens-Johnson es MACULAR, más prominente en el tronco y de ahi se extiende. El Stevens-Johnson y la necrólisis viven en el módulo de Farmacodermias.' },
      { nombre: 'Predictores de eritema multiforme recurrente resistente', componentes: 'Cinco rasgos descritos en la serie de la Clínica Mayo: no identificar una causa, no mejorar con antiviral continuo, afectación oral grave, uso casi continuo de corticoide más de un año, y haber usado dos o más inmunosupresores.', formula: 'Conjunto de rasgos clínicos, no puntuación.', interpretacion: 'Sirven para anticipar el curso tortuoso y para no insistir en una estrategia que no va a funcionar. En la serie de 48 pacientes de la Mayo, el virus del herpes simple fue la causa más frecuente del eritema multiforme recurrente, pero con asociación clara en solo el 23%, y el 60% quedo etiquetado como idiopático.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Eritema nodoso: la paniculitis que apunta a otra cosa',
      color: '#9c3a52',
      definicion: 'Paniculitis septal sin vasculitis, con nódulos subcutáneos dolorosos, eritematosos y simétricos, típicamente en la cara anterior de las piernas. Es la paniculitis más frecuente.',
      fisiopatologia: 'Es un patrón de reacción cutánea INESPECÍFICO frente a antígenos muy distintos. La evidencia directa e indirecta apunta a una respuesta de hipersensibilidad retardada de tipo IV, y aparece con frecuencia en el contexto de enfermedades granulomatosas: sarcoidosis, tuberculosis y colitis granulomatosa.',
      epidemiologia: 'Incidencia de 1 a 5 casos por 100.000 personas. En el adulto es mucho más frecuente en la mujer, con una razón varón-mujer de 1 a 6; en el niño la razón es 1 a 1. El pico de incidencia esta entre los 20 y los 30 años, aunque puede aparecer a cualquier edad.',
      factores_riesgo: ['Faringitis estreptocócica reciente, dos a tres semanas antes', 'Sarcoidosis', 'Enfermedad inflamatoria intestinal', 'Anticonceptivos orales y otros fármacos (sulfonamidas, amoxicilina)', 'Embarazo', 'Tuberculosis y micobacterias atípicas', 'Micosis sistémicas según la zona geográfica', 'Infección por Yersinia, frecuente en Europa'],
      clinica: 'Nódulos de 1 a 10 cm, MAL DELIMITADOS porque están en la grasa, muy sensibles al tacto. La localización pretibial es la más frecuente, aunque pueden salir en la cara de extensión de los antebrazos, en los muslos y en el tronco. Al principio son firmes y luego se vuelven más fluctuantes. Cada nódulo dura unas dos semanas y pueden seguir saliendo brotes hasta seis semanas; tardan uno o dos meses en curar y al apagarse adoptan un aspecto de MORETÓN. Hay un pródromo una a tres semanas antes, cualquiera que sea la causa: pérdida de peso, malestar, febrícula, tos y artralgia con o sin artritis.',
      criterios_dx: 'Clínica compatible más, si hay duda, biopsia EXCISIONAL. Los hallazgos clave son paniculitis septal, infiltrado linfocítico con neutrófilos, granulomas radiales de Miescher, ausencia de vasculitis y ausencia de microorganismos. Los dos rasgos negativos valen tanto como los positivos: el eritema nodoso NO SE ÚLCERA y cura sin atrofia ni cicatriz.',
      laboratorio: 'Hemograma con diferencial, VSG y proteína C reactiva, estudio completo de estreptococo con título de antiestreptolisina O al diagnóstico y repetido a las cuatro semanas. Puede haber leucocitosis por encima de 10.000 por mm3.',
      imagen: 'Radiografía de tórax en todos, buscando adenopatías hiliares bilaterales y tuberculosis.',
      complementarios: 'Prueba de tuberculina en todo paciente estratificado por riesgo. Coprocultivo y estudio de parásitos si hay síntomas digestivos, con valoración de enfermedad inflamatoria intestinal. Las artralgias pueden persistir hasta DOS AÑOS después de que el eritema nodoso se haya resuelto, son seronegativas y no destruyen la articulación: saberlo evita estudios innecesarios.',
      dx_diferencial: 'Las otras paniculitis, que son las que hay que pensar si el nódulo se úlcera o deja atrofia: déficit de alfa-1-antitripsina, paniculitis histiocitica citofagica (que es un linfoma), lupus profundo, necrosis grasa nodular. Menos frecuentes: necrobiosis lipoidica, xantogranuloma necrobiotico, esclerodermia. Raras: paniculitis por frío, paniculitis infecciosa, infiltrados leucémicos de la grasa, lipodistrofias, paniculitis esclerosante.',
      tx_medico: 'Reposo y elevación de las piernas, y sobre todo TRATAR LA CAUSA: la revisión dice de forma explícita que el paso más importante del manejo es tratar el trastorno subyacente. Tiende a ser autolimitado.',
      tx_farmacologico: 'Antiinflamatorios no esteroideos para el dolor. Corticoide sistémico a 1 mg por kilo y dia hasta la resolución, pero SOLO después de haber excluido con un estudio completo una infección, el riesgo de diseminación bacteriana o sepsis, y una neoplasia. Colchicina si coexiste con enfermedad de Behcet. Y tratamiento antituberculoso si la tuberculina es positiva, con foco identificado o sin el.',
      pronostico: 'Bueno: es autolimitado y cura sin secuelas. El pronóstico real es el de la enfermedad que lo origina, y de ahi que valga la pena buscarla.',
      algoritmo: ['Confirmar que son nódulos profundos, dolorosos y simétricos', '¿Se ulceran o dejan atrofia? Entonces NO es eritema nodoso', 'Historia dirigida: faringitis, fármacos, embarazo, viajes, síntomas digestivos', 'Hemograma, VSG o PCR, y estudio de estreptococo con ASLO', 'Radiografía de tórax y estratificar riesgo de tuberculosis', 'Biopsia INCISIONAL o excisional profunda si hay duda', 'Tratar la causa; antiinflamatorios para el dolor', 'Reservar el corticoide a después de excluir infección y neoplasia'],
      figura: 'mapa-profundidad'
    },
    {
      nombre: 'Paniculitis: el nódulo profundo y su diferencial',
      color: '#7a5a3a',
      definicion: 'Inflamación de la grasa subcutánea. Se clasifica por donde esta el infiltrado, en los tabiques o en el lobulillo, y por si hay vasculitis o no.',
      fisiopatologia: 'La grasa reacciona de pocas maneras, y cada causa elige una. El eritema nodoso inflama los TABIQUES y respeta el lobulillo; las paniculitis que destruyen el lobulillo son las que dan necrosis grasa, y por eso son las que ulceran y dejan atrofia o depresión de la piel.',
      epidemiologia: 'El eritema nodoso es, con diferencia, la paniculitis más frecuente. Las demás son raras, y su importancia no esta en la frecuencia sino en lo que significan.',
      clinica: 'Un nódulo profundo que se palpa más de lo que se ve. Las tres preguntas que más rinden: ¿se ÚLCERA? ¿deja ATROFIA o una depresión? ¿es simétrico y pretibial o esta en un sitio raro, como la cara, los brazos o las nalgas? El eritema nodoso es simétrico, pretibial, no se úlcera y no deja huella.',
      criterios_dx: 'Biopsia INCISIONAL o EXCISIONAL profunda, que incluya grasa suficiente. Un punch produce casi siempre una muestra insuficiente, y ese error tecnico es la causa más frecuente de un informe que no concluye nada.',
      laboratorio: 'Dirigido por la sospecha: alfa-1-antitripsina si hay ulceracion y afectación del tronco, amilasa y lipasa si se piensa en paniculitis pancreática, autoinmunidad si se piensa en lupus profundo, y estudio hematológico completo si la histología sugiere infiltrado linfoide.',
      imagen: 'Ecografía para descartar colección. La imagen no distingue el tipo de paniculitis: eso lo hace la biopsia profunda.',
      dx_diferencial: 'Por orden de lo que más hay que pensar cuando el nódulo no se comporta como un eritema nodoso: déficit de alfa-1-antitripsina, paniculitis histiocitica citofagica (un linfoma), lupus eritematoso profundo, necrosis grasa nodular; después necrobiosis lipoidica, xantogranuloma necrobiotico, esclerodermia y granuloma subcutáneo; y las raras, paniculitis por frío, infecciosa, infiltrados leucémicos, lipodistrofias, paniculitis posesteroidea, por povidona y esclerosante.',
      tx_medico: 'No hay un tratamiento de la paniculitis: hay un tratamiento de cada causa. Lo único transversal es el soporte, el reposo y la analgesia.',
      complementarios: 'Las variantes del propio eritema nodoso que antes se consideraban enfermedades aparte (eritema nodoso migrans, paniculitis nodular migratoria subaguda y eritema nodoso crónico) hoy se consideran parte del mismo espectro y son una minoría de los casos.',
      pronostico: 'Depende por completo de la causa: desde la resolución espontánea del eritema nodoso hasta el pronóstico de un linfoma subcutáneo.',
      algoritmo: ['Localizar la lesión en profundidad: esta en la grasa', '¿Úlcera, atrofia o localización atípica? Sospechar paniculitis lobulillar', 'Pedir biopsia INCISIONAL o excisional, nunca punch', 'Pedir al patologo: septal o lobulillar, con vasculitis o sin ella', 'Dirigir el laboratorio por lo que diga la histología', 'Si hay infiltrado linfoide, descartar linfoma T subcutáneo'],
      figura: 'mapa-profundidad'
    },
    {
      nombre: 'Eritema multiforme: la diana del herpes',
      color: '#b05a2e',
      definicion: 'Enfermedad mucocutánea aguda mediada por inmunidad, caracterizada por lesiones en diana de distribución acral con variación concéntrica del color, con o sin erosiones mucosas. Con mucosa afectada es eritema multiforme MAYOR; sin ella, MENOR.',
      fisiopatologia: 'En el eritema multiforme asociado al virus del herpes simple, los hallazgos se atribuyen a una reacción inmunitaria mediada por células contra células que expresan antígeno viral y contienen el gen de la ADN polimerasa del virus. Hay predisposición genética: el alelo HLA-DQB1*0301 estaba presente en el 66% de los pacientes frente al 31% de los controles, y la asociación era más fuerte en el eritema multiforme asociado al herpes.',
      epidemiologia: 'Incidencia exacta desconocida, probablemente muy por debajo del 1% pero por encima del 0,01%. Predomina en adultos jóvenes, con ligero predominio femenino y sin predilección racial.',
      factores_riesgo: ['Infección por virus del herpes simple, sobre todo el tipo 1', 'Infección por Mycoplasma pneumoniae, con especial peso en el niño', 'Fármacos: antiinflamatorios no esteroideos, sulfonamidas, antiepilépticos y antibióticos', 'Alelo HLA-DQB1*0301', 'Hepatitis C, candidiasis vulvovaginal y menstruación en las formas recurrentes'],
      clinica: 'Lesiones en DIANA, papulosas y elevadas, con zonas concéntricas de color y centro oscuro, de distribución ACRAL. Aparecen en 3 a 5 días y se resuelven en 1 a 2 semanas, y todas las lesiones salen en las primeras 72 horas: son FIJAS, no van y vienen. Puede haber erosiones orales, genitales u oculares. En la serie de 65 pacientes con forma recurrente, el 69% tenia afectación oral, el 25% genital y el 17% ocular.',
      criterios_dx: 'Es clínico. La histología sirve para diferenciarlo de sus imitadores y muestra degeneración licuefactiva de las células basales, queratinocitos necróticos y exocitosis de linfocitos, con infiltrado linfohistiocitario liquenoide que puede borrar la unión dermoepidérmica.',
      laboratorio: 'En enfermedad grave puede haber elevación de la VSG, de los leucocitos y de las enzimas hepáticas. Los anticuerpos antinucleares son útiles si se plantea un síndrome de Rowell, que es lupus cutáneo con lesiones de tipo eritema multiforme.',
      dx_diferencial: 'La lista de imitadores es larga y por eso importa: urticaria, Stevens-Johnson, exantema fijo medicamentoso, penfigoide ampolloso, pénfigo paraneoplásico, síndrome de Sweet, síndrome de Rowell, erupción polimorfa lumínica y vasculitis cutánea de vaso pequeño. La urticaria se separa fácil: cada habón dura MENOS de 24 horas y salen nuevos cada dia, mientras que la lesión del eritema multiforme es fija; y el centro del habón es eritematoso o de piel normal, no oscuro ni ampolloso.',
      tx_medico: 'Retirar todo desencadenante, empezando por los fármacos. En enfermedad leve, antisepticos tópicos y antihistamínicos orales. En la afectación mucosa, gel de corticoide de alta potencia, soluciones anestésicas orales y enjuagues antisepticos; consulta a oftalmologia y preparados oftalmicos tópicos si hay afectación ocular. Puede hacer falta INGRESO si la afectación mucosa es grave y compromete la ingesta, por el desequilibrio hidroelectrolítico que sigue.',
      tx_farmacologico: 'En la mucositis grave, corticoide oral: prednisona de 40 a 60 mg al dia con descenso en 2 a 4 semanas. En el eritema multiforme inducido por herpes, el antiviral iniciado DESPUÉS de que aparezcan las lesiones no modifica el curso clínico: su papel es la profilaxis, no el episodio. Si se asocia a Mycoplasma pneumoniae, puede incluir antibiótico.',
      seguimiento_ambulatorio: 'Identificar si hay recurrencia, porque cambia el tratamiento por completo: ver la ficha de la forma recurrente dentro de este mismo apartado de tratamiento.',
      pronostico: 'El eritema multiforme clásico es autolimitado. Un subgrupo tiene episodios frecuentes durante años, y muy raramente la enfermedad es continua (forma persistente), con lesiones papulonecroticas o ampollosas y afectación extensa.',
      algoritmo: ['Confirmar la diana PAPULAR de distribución acral', 'Comprobar que todas las lesiones salieron en las primeras 72 horas', 'Buscar el desencadenante: herpes simple primero, Mycoplasma en el niño', 'Revisar fármacos: explican menos del 10% de los casos', 'Valorar la mucosa: define menor frente a mayor', '¿Afectación ocular? Consulta a oftalmologia', '¿Mucositis que impide comer? Valorar ingreso y corticoide oral', 'Contar los episodios: más de seis al año cambia la estrategia']
    },
    {
      nombre: 'Eritema multiforme recurrente: el que se previene',
      color: '#8a6a2e',
      definicion: 'Más de seis episodios de eritema multiforme al año. Es la forma en la que el tratamiento deja de ser sintomático y pasa a ser profiláctico.',
      epidemiologia: 'Los pacientes con forma recurrente tienen una media de seis episodios al año y una duración media de la enfermedad de 6 a 10 años. Estudios previos atribuyeron del 61 al 100% de los casos recurrentes al virus del herpes simple; en la serie de 48 pacientes de la Clínica Mayo el herpes fue la causa más frecuente pero con asociación clara en solo el 23%, y el 60% quedo como idiopático.',
      fisiopatologia: 'Ese 60% idiopático probablemente no lo es: con PCR se detecto ADN del virus del herpes simple en la piel lesional de 3 de 5 pacientes en un estudio y en el 50% de 12 pacientes con forma recurrente idiopática en otro. De ahi que la profilaxis antiviral se ofrezca TAMBIÉN a los idiopáticos.',
      clinica: 'Los mismos brotes, repetidos. Lo que hay que buscar aparte son los otros desencadenantes descritos: infecciones repetidas por Mycoplasma pneumoniae, hepatitis C, candidiasis vulvovaginal, menstruación, aftosis compleja y una ingesta alta de ácido benzoico como conservante alimentario.',
      criterios_dx: 'El recuento de episodios al año. Es un dato de la anamnesis, no de una prueba.',
      tx_farmacologico: 'Prueba de SEIS MESES de antiviral continuo, que es el abordaje documentado como más eficaz, por encima del intermitente y del tópico. Las pautas son aciclovir 400 mg dos veces al dia, valaciclovir 500 mg dos veces al dia o famciclovir 250 mg dos veces al dia. Si no responde, se puede doblar la dosis o cambiar de antiviral. La mejor respuesta se ve cuando la asociación con el herpes es clara.',
      tx_medico: 'Mantener la remisión es difícil: en un estudio de pacientes que lograron respuesta con seis meses de antiviral continuo, solo 4 de 15 la mantuvieron al suspenderlo. Por eso, a quien responde se le trata de 1 a 2 años antes de retirar, y si recurre al retirar se reinicia a la dosis mínima eficaz y se vuelve a intentar la retirada en 6 a 12 meses.',
      tx_intervencionista: 'No aplica.',
      complementarios: 'En la forma resistente a la profilaxis antiviral se han usado azatioprina, micofenolato de mofetilo y dapsona, y en menor medida inmunoglobulina intravenosa, hidroxicloroquina, ciclosporina, talidomida y cimetidina. La mayoría no se ha validado en ensayos controlados, son de eficacia inconsistente y tienen efectos adversos. La azatioprina se uso con éxito a 100-150 mg al dia en 11 pacientes con enfermedad grave que no había respondido a otros tratamientos.',
      pronostico: 'Cinco rasgos anticipan un curso resistente: no identificar la causa, no mejorar con antiviral continuo, afectación oral grave, uso casi continuo de corticoide más de un año y haber usado dos o más inmunosupresores.',
      algoritmo: ['Contar los episodios del último año', 'Buscar herpes, Mycoplasma, hepatitis C, candidiasis y menstruación', 'Preguntar por conservantes alimentarios (ácido benzoico)', 'Ofrecer antiviral continuo 6 meses aunque parezca idiopático', 'Si no responde: doblar dosis o cambiar de antiviral', 'Si responde: mantener 1 a 2 años antes de retirar', 'Si recurre al retirar: reiniciar a la dosis mínima eficaz']
    },
    {
      nombre: 'Eritema multiforme frente a Stevens-Johnson: dos enfermedades',
      color: '#8c3a34',
      definicion: 'La frontera que más se falla del tema. No son grados de lo mismo: son dos enfermedades distintas que comparten erosiones mucosas parecidas y tienen lesiones cutáneas diferentes.',
      fisiopatologia: 'Durante años se considero que el eritema multiforme mayor, el Stevens-Johnson y la necrólisis epidérmica tóxica formaban un espectro continuo. Una clasificación clínica de consenso aporto la evidencia de que el eritema multiforme mayor y el Stevens-Johnson son trastornos SEPARADOS Y DISTINTOS. El mecanismo también separa: el eritema multiforme es una reacción mediada por células frente a un antígeno VIRAL, y el Stevens-Johnson es una reacción a FÁRMACOS.',
      clinica: 'La diferencia se ve en la lesión y en el mapa. ERITEMA MULTIFORME: lesiones PAPULARES, elevadas, en diana típica, con predominio ACRAL, que aparecen todas en las primeras 72 horas. STEVENS-JOHNSON: maculas eritematosas o purpúricas y dianas ATÍPICAS que son MACULARES, no papulosas, más prominentes en el TRONCO y que se extienden en sentido distal.',
      criterios_dx: 'Clínico y de distribución. La afectación mucosa NO sirve para separarlos, porque los dos la tienen y es parecida: el eritema multiforme con mucosa afectada es eritema multiforme mayor, no un Stevens-Johnson.',
      dx_diferencial: 'Dentro de la misma frontera: exantema fijo medicamentoso, pénfigo paraneoplásico, penfigoide ampolloso y el propio síndrome de Sweet. El Stevens-Johnson, la necrólisis epidérmica tóxica, el SCORTEN y el manejo del despegamiento cutáneo están en el módulo de Farmacodermias y eritrodermia, no aquí.',
      tx_medico: 'La consecuencia práctica de separarlos es el tratamiento. En el eritema multiforme se busca el VIRUS y se previene con antiviral; en el Stevens-Johnson se busca el FÁRMACO y se retira de inmediato. Confundirlos lleva a retirar fármacos inocentes en un cuadro herpetico, o peor, a mantener el fármaco culpable en una reacción grave.',
      pronostico: 'El del eritema multiforme es bueno y autolimitado; el del Stevens-Johnson y la necrólisis se mide con mortalidad y se estima con una escala propia. Esa diferencia de pronóstico es la razón de que la distinción importe.',
      algoritmo: ['Mirar si la lesión es PAPULAR o MACULAR', 'Mirar el mapa: acral o troncular', 'Preguntar por herpes labial reciente y por fármacos nuevos', 'Si es papular y acral tras un herpes: eritema multiforme', 'Si es macular, troncular y tras un fármaco: ir al módulo de Farmacodermias', 'La mucosa afectada NO decide: solo separa menor de mayor'],
      figura: 'em-vs-sjs'
    },
    {
      nombre: 'Síndrome de Sweet: reconocerlo',
      color: '#8a5a2e',
      definicion: 'Dermatosis neutrofílica febril aguda: reacción cutánea inflamatoria y NO infecciosa con papulas, placas, pústulas o nódulos eritematosos y dolorosos, acompañada de fiebre y con infiltrado neutrofílico denso en la dermis.',
      fisiopatologia: 'La patogenia no tiene un dogma único: parece multifactorial, producto de agresiones químicas y físicas externas (patergia), de desregulación inmunitaria del huésped por autoinmunidad o por neoplasia, y de elementos genéticos predisponentes. En las formas asociadas a neoplasia hematológica se ha demostrado que el clon mieloide maligno y los neutrófilos que infiltran la piel comparten un progenitor clonal común.',
      epidemiologia: 'Rara, y su incidencia real sigue sin establecerse. Suele presentarse en la SEXTA década de la vida. La forma pediátrica es excepcional, en torno al 5-8% de los casos. La razón mujer-varón varia según la causa: 4 a 1 en la idiopática, 1 a 1 en la asociada a neoplasia hematológica, 1,4 a 1 en la asociada a tumor sólido y 2,4 a 1 en la inducida por fármacos.',
      clinica: 'Lo que describió Robert Douglas Sweet en 1964 en ocho mujeres sigue siendo el cuadro: fiebre, leucocitosis con neutrofilia en sangre, placas dolorosas y elevadas en miembros, cara y cuello, e histología con infiltrado dérmico denso de neutrófilos maduros. Las lesiones son típicamente de miembros superiores, cara y cuello. Sweet observo que el cuadro se parecia al eritema multiforme, y aun hoy este sigue en su diagnóstico diferencial.',
      criterios_dx: 'Criterios de Su y Liu de 1986 modificados por von den Driesch en 1994: dos criterios mayores más dos de cuatro menores. La histología muestra infiltración neutrofílica difusa de la dermis superior, que puede presentar cariorrexis, y edema papilar marcado; lo que NO debe verse es vasculitis leucocitoclástica. Pueden aparecer células leucémicas acompañantes.',
      laboratorio: 'Hemograma con neutrofilia, VSG y proteína C reactiva elevadas. Y cultivos: negativos. Si el cuadro parece una celulitis pero los cultivos no crecen y el antibiótico no induce remisión, eso apoya el Sweet.',
      imagen: 'Ecografía solo para descartar colección. La imagen no diagnóstica.',
      dx_diferencial: 'Vasto, y en el están las trampas: paniculitis como el eritema nodoso, vasculitis como la panarteritis nodosa, e infecciones como la meningococemia crónica, la erisipela y la foliculitis infecciosa. También dermatosis eosinofílicas y leucemia o linfoma cutis. Hay variantes prácticamente indistinguibles de una infección: el Sweet subcutáneo no se puede separar de una celulitis solo con la exploración, el Sweet similar a celulitis y el necrosante se confunden con un proceso infeccioso, el Sweet neuro es indistinguible de una meningoencefalitis viral y el Sweet pulmonar imita una neumonía.',
      tx_medico: 'Puede resolverse SOLO, o al tratar la enfermedad de base, o al retirar el fármaco sospechoso. En la enfermedad leve o moderada, la tranquilizacion, el tratamiento de la neoplasia subyacente o la retirada del fármaco son opciones razonables por sí mismas.',
      tx_farmacologico: 'El corticoide es el tratamiento de primera línea, porque la respuesta es llamativamente rápida en la mayoría de los pacientes. Si no responde, la indometacina es el tratamiento con el nivel de evidencia más alto. La acitretina, la colchicina y la dapsona se apoyan en estudios retrospectivos, y los biológicos solo en casos aislados. La elección de segunda línea se personaliza según comorbilidad, antecedentes y preferencias.',
      complementarios: 'Variantes clínicas que conviene reconocer para no descartar el diagnóstico cuando no parece lo clásico: Sweet AMPOLLOSO (hasta el 30% de los pacientes puede presentar ampollas), similar a celulitis, NECROSANTE y la dermatosis neutrofílica del DORSO DE LAS MANOS. Variantes histológicas: criptococoide, histiocitoide y subcutánea. Manifestaciones extracutaneas descritas: oculares, musculoesqueleticas, neurológicas, pulmonares, digestivas, hepáticas y renales, y hay comunicadas miocarditis e incluso miositis neutrofílica con rabdomiólisis.',
      pronostico: 'Bueno en cuanto a la piel, por la respuesta al corticoide. El pronóstico real lo marca lo que haya detrás, y de eso se ocupa la ficha siguiente.',
      algoritmo: ['Placa dolorosa con fiebre: hemograma con diferencial', 'Tomar cultivos y hemocultivos, esperando que sean negativos', 'Biopsiar: infiltrado neutrofílico dérmico, SIN vasculitis leucocitoclástica', 'Aplicar los criterios: 2 mayores + 2 de 4 menores', 'Revisar la lista de fármacos de las últimas semanas', 'Buscar la enfermedad de base (ver la ficha siguiente)', 'Si la infección esta descartada, corticoide; respuesta rápida apoya el diagnóstico'],
      figura: 'que-buscar-detras'
    },
    {
      nombre: 'Sweet: buscar el fármaco y la neoplasia',
      color: '#7a3a6b',
      definicion: 'La parte del síndrome de Sweet que corresponde al internista: no tratar la piel, sino averiguar que lo ha provocado.',
      epidemiologia: 'En la leucemia mieloide aguda, un estudio de 2178 pacientes encontró una incidencia de Sweet del 1%, y otro más reciente de 216 pacientes la situo en el 5,5%. En el primero, el cariotipo con pérdida del cromosoma 5 o deleccion 5q era más prevalente entre los pacientes con leucemia que desarrollaban Sweet. También esta descrito en el síndrome mielodisplásico: en una serie de 23 pacientes con mielodisplasia y Sweet, 2 se diagnosticaron antes, 6 a la vez y 15 DESPUÉS del Sweet.',
      fisiopatologia: 'El mecanismo mejor explicado es el de los fármacos: el factor estimulante de colonias de granulocitos moviliza granulocitos desde la medula y puede provocar una respuesta neutrofílica exuberante; los inhibidores de tirosina cinasa inducen la diferenciación de blastos mieloides a neutrófilos maduros que se localizan en la dermis; y el ATRA, usado en la leucemia promielocítica aguda, hace lo propio con los promielocitos.',
      factores_riesgo: ['Factor estimulante de colonias de granulocitos', 'Inhibidores de tirosina cinasa dirigidos a la leucemia mieloide aguda', 'ATRA (ácido retinoico todo trans)', 'Antimicrobianos y antineoplásicos de varias clases', 'Leucemia mieloide aguda y síndrome mielodisplásico', 'Infecciones, con las micobacterias no tuberculosas a la cabeza'],
      clinica: 'El Sweet puede PRECEDER a la neoplasia, ser concurrente o aparecer después, y también puede anunciar la RECAÍDA de un cáncer ya tratado. Esta descrito un caso que anuncio la transformación de una anemia de Fanconi en leucemia mieloide aguda. Por eso un Sweet sin causa aparente no es un Sweet idiopático: es un Sweet todavía sin explicar.',
      criterios_dx: 'Para atribuirlo a un fármaco hay que cumplir TODOS los criterios de Walker y Cohen de 1996, y la causalidad se gradua con la escala de Naranjo: de 1 a 4 posible, de 5 a 8 probable, de 9 a 13 definitiva.',
      laboratorio: 'Hemograma con diferencial y frotis, con atención a citopenias y a formas anormales; si hay sospecha, estudio de medula ósea. Marcadores inflamatorios. Y revisión sistemática del tratamiento de las últimas semanas.',
      complementarios: 'Otras asociaciones descritas: enfermedades autoinmunes (Behcet, enfermedad mixta del tejido conectivo, polimialgia reumática, artritis reumatoide, Sjogren, lupus, granulomatosis eosinofílica con poliangeítis, tiroiditis de Hashimoto), nefropatía amiloide, hidradenitis supurativa y sarcoidosis. Y, de forma paradójica, estados de INMUNODEFICIENCIA: inmunodeficiencia común variable, linfopenia T primaria y secundaria, enfermedad granulomatosa crónica, y la inmunodeficiencia del adulto por autoanticuerpos frente al interferón gamma, que aumento el riesgo de Sweet incluso descontando la infección por micobacterias no tuberculosas.',
      dx_diferencial: 'Tumores sólidos descritos en asociación: cervix, colangiocarcinoma, colorrectal, adenocarcinoma gástrico y pulmón. Es decir, el Sweet puede considerarse un síndrome paraneoplásico cutáneo infrecuente asociado a un abanico amplio de neoplasias.',
      tx_medico: 'La consecuencia práctica: si el desencadenante es un fármaco, retirarlo puede ser todo el tratamiento. Si hay una neoplasia, tratarla puede hacer que la piel se resuelva sola.',
      seguimiento_ambulatorio: 'Un Sweet etiquetado de idiopático merece seguimiento hematológico, porque en la mielodisplasia la mayoría de los diagnósticos de la serie citada se hicieron DESPUÉS del episodio cutáneo.',
      pronostico: 'El de la enfermedad de base. La piel responde al corticoide; el pronóstico no lo pone la piel.',
      algoritmo: ['Revisar todos los fármacos, con los hematológicos en primer lugar', 'Aplicar los criterios de Walker y Cohen si hay un candidato', 'Graduar la causalidad con la escala de Naranjo', 'Hemograma con diferencial y frotis en todos', '¿Citopenias o formas anormales? Estudio de medula ósea', 'Buscar infección, con micobacterias no tuberculosas en mente', 'Si no aparece nada: no cerrarlo como idiopático, seguirlo']
    },
    {
      nombre: 'Pioderma gangrenoso: la úlcera que no hay que desbridar',
      color: '#8c3a34',
      definicion: 'Dermatosis neutrofílica rara que se presenta como una papula o pústula ESTÉRIL que evoluciona rápidamente a una úlcera dolorosa de borde elevado, socavado, violaceo e inflamado.',
      epidemiologia: 'Incidencia anual estimada de 3 a 10 casos por millón de habitantes, con mayor prevalencia en mujeres. El subtipo ULCERATIVO supone alrededor del 85% de los casos; las formas ampollosa, pustulosa y vegetante son menos frecuentes. La morbilidad y la mortalidad son altas, y por eso el diagnóstico precoz importa.',
      fisiopatologia: 'No esta aclarada. Parece una interacción compleja entre predisposición genética, variantes sindrómicas autoinflamatorias y desregulación de la inmunidad innata y adaptativa. El rasgo que más consecuencias prácticas tiene es la PATERGIA: el traumatismo mínimo precipita o agrava las lesiones.',
      factores_riesgo: ['Enfermedad inflamatoria intestinal, sobre todo en actividad', 'Artritis inflamatoria, reumatoide o seronegativa', 'Neoplasia hematológica y gammapatía monoclonal', 'Enfermedad renal crónica y diálisis', 'Diabetes mellitus', 'Traumatismo o cirugía reciente sobre la zona (patergia)'],
      clinica: 'Las úlceras afectan sobre todo a los miembros inferiores, aunque también se describen en nalgas, tronco, genitales y regiones periorbitaria y perioral. El dolor es desproporcionado al tamaño. La patergia se documenta con frecuencia, y la recurrencia tras la remisión es especialmente común en el pioderma asociado a vasculitis, donde se comunico en 5 de 7 casos.',
      criterios_dx: 'El diagnóstico es CLÍNICO. Existen los criterios de Su, el consenso Delphi y la puntuación PARACELSUS, que identifico al 89% de los pacientes frente al 74% de los otros dos. La biopsia es útil, pero para EXCLUIR otras causas de ulceracion: enfermedad vascular oclusiva o venosa, vasculitis, cáncer, infección primaria y úlceras por fármacos. La histología por sí misma es inespecífica.',
      laboratorio: 'Lo que pide el estudio de la enfermedad de base: hemograma con diferencial, proteinograma e inmunofijación, marcadores inflamatorios, función renal, glucemia y estudio digestivo. Cultivos, para descartar infección.',
      imagen: 'Según la sospecha sistémica. No hay imagen que diagnostique el pioderma.',
      dx_diferencial: 'Es el nucleo del problema: una úlcera de miembro inferior en un paciente con comorbilidad tiene muchas explicaciones más frecuentes que el pioderma, y todas se tratan de otra forma. Insuficiencia venosa, arteriopatia, vasculitis, infección, neoplasia ulcerada y úlcera por fármacos.',
      tx_medico: 'Lo primero es lo que NO se hace: no desbridar de entrada. El pioderma responde al traumatismo con más enfermedad, de modo que el desbridamiento agranda la úlcera y es el error que más daño hace. Los cuidados de la herida y la optimización de los factores de cicatrización son esenciales como tratamiento adyuvante.',
      tx_farmacologico: 'Primera línea: un inmunosupresor de acción RÁPIDA, corticoide sistémico o ciclosporina, seguido con frecuencia de un ahorrador de corticoide. La evidencia es limitada por la rareza de la enfermedad: solo hay DOS ensayos aleatorizados publicados hasta la fecha. En las series de casos los esquemas más usados combinan el corticoide con ciclofosfamida, azatioprina, ciclosporina, metotrexato, inmunoglobulina intravenosa o hidroxicloroquina. Hay un caso de pioderma asociado a arteritis de Takayasu que solo respondio a tofacitinib, lo que sugiere un posible papel de la inhibición de las cinasas Janus en las dermatosis neutrofílicas.',
      criterios_uci: 'No por el pioderma. Si por la sepsis sobre la úlcera o por la enfermedad sistémica de base.',
      seguimiento_hospitalario: 'Control del dolor, que suele estar subtratado, cuidado de la herida sin traumatismo y vigilancia de sobreinfección.',
      pronostico: 'Variable: desde la remisión completa con el tratamiento de primera línea hasta las recaídas múltiples que obligan a cambiar de inmunosupresor. En el pioderma asociado a vasculitis la recurrencia es la regla y hace falta inmunosupresión sostenida.',
      algoritmo: ['Úlcera de crecimiento rápido con borde socavado violaceo y dolor desproporcionado', 'NO desbridar: preguntar si empeoró tras un traumatismo o una cirugía', 'Tomar cultivos para descartar infección', 'Biopsiar para EXCLUIR otras causas, no para confirmar', 'Aplicar los criterios (Su, Delphi o PARACELSUS)', 'Empezar un inmunosupresor de acción rápida: corticoide o ciclosporina', 'Añadir un ahorrador de corticoide y cuidar la herida', 'Buscar en paralelo la enfermedad sistémica de base'],
      figura: 'que-buscar-detras'
    },
    {
      nombre: 'Pioderma gangrenoso: la enfermedad sistémica de detrás',
      color: '#3d5a73',
      definicion: 'El pioderma gangrenoso rara vez es un trastorno aislado de la piel. La revisión sistemática de 2026 lo resume así: aparece con frecuencia ligado a enfermedades sistémicas, y caracterizarlas importa para el diagnóstico, el pronóstico y el tratamiento.',
      epidemiologia: 'La asociación con enfermedad sistémica se ha comunicado hasta en el 80% de los casos, y un metaanálisis de 2018 dio una estimación agrupada del 56,8%. Las asociaciones más frecuentes fueron enfermedad inflamatoria intestinal (17,6%), artritis (12,8%), neoplasias hematológicas (8,9%) y tumores sólidos (7,4%).',
      clinica: 'Lo que cambia según la edad: la enfermedad inflamatoria intestinal es significativamente más frecuente por debajo de los 65 años, mientras que la artritis, los tumores sólidos y los trastornos hematológicos lo son por encima de esa edad. Ese dato por si solo reordena la búsqueda.',
      criterios_dx: 'No hay criterios para la búsqueda sistémica: hay una lista por frecuencia y una historia dirigida. Lo que si esta claro es el momento: el pioderma se diagnostica con frecuencia durante las fases ACTIVAS de la enfermedad inflamatoria intestinal o poco después de su diagnóstico.',
      laboratorio: 'Dirigido a lo frecuente. Enfermedad inflamatoria intestinal: presente en el 26 al 41% de los pacientes con pioderma en dos grandes bases de datos estadounidenses, con una razón de probabilidades de 6,2 frente a controles en un estudio nacional y de 47,5 en el registro danes (ese intervalo tan amplio refleja la rareza del pioderma, no un efecto mayor). El pioderma fue más frecuente en enfermedad activa (45%) que en remisión (18%), y hay descrita resolución del pioderma al controlar la colitis ulcerosa. No hay diferencia entre Crohn y colitis ulcerosa. Hematología: trastornos hematológicos en el 3 al 6%; gammapatía monoclonal en el 27% de una cohorte canadiense, IgA el subtipo más frecuente (41%), y neoplasia en el 28% de los que tenian gammapatía frente al 6% de los que no.',
      imagen: 'Según la sospecha: colonoscopia ante clínica digestiva, imagen y estudio hematológico ante citopenias o gammapatía.',
      complementarios: 'Las menos frecuentes pero relevantes. Vasculitis: pioderma en el 1,1% de los pacientes con granulomatosis con poliangeítis, y vasculitis en el 2,5% de los ingresados por pioderma, con una razón de probabilidades de mortalidad intrahospitalaria de 6,0 frente a los que tenian enfermedad inflamatoria intestinal. Behcet: pioderma en el 30% de una cohorte de 20 pacientes, todos en miembros inferiores. Renal: riesgo aumentado de insuficiencia renal crónica (HR ajustada 3,68) y de diálisis (HR ajustada 27,79), y bidireccional, porque la enfermedad renal previa también aumenta las probabilidades de pioderma. Metabólico y cardiaco: diabetes sin complicaciones (OR 1,92), insuficiencia cardiaca (OR 2,01) y hepatopatía leve (OR 2,70).',
      dx_diferencial: 'Un punto de prudencia que la propia revisión subraya: la asociación con tumores SÓLIDOS es incierta. Un estudio israeli no encontró asociación bidireccional significativa (HR ajustada 1,02 para desarrollar tumor sólido tras el pioderma), y los pacientes con las dos cosas eran bastante mayores (71,7 frente a 51,9 años), lo que sugiere que puede tratarse del riesgo de cáncer propio de la edad y no de un vínculo causal.',
      tx_medico: 'Lo que justifica todo este apartado: controlar la enfermedad de base puede resolver la piel. Esta descrita la desaparición del pioderma en un mes al tratar la colitis ulcerosa.',
      pronostico: 'La comorbilidad pesa. Los pacientes con pioderma y neoplasia hematológica tuvieron una razón de probabilidades de mortalidad intrahospitalaria de 4,31 frente a los que tenian enfermedad inflamatoria intestinal, y el subgrupo con comorbilidad metabólica y orgánica casi triplico la mortalidad frente a controles (HR ajustada 2,79).',
      seguimiento_ambulatorio: 'Seguimiento prolongado y multidisciplinar, con atención especial al pioderma asociado a vasculitis, que es el más propenso a recaer.',
      algoritmo: ['Asumir que el pioderma apunta a algo: hasta el 80% tiene asociación sistémica', 'Mirar la edad: por debajo de 65 años, primero el intestino', 'Por encima de 65: artritis, tumor sólido y hematología', 'Estudio digestivo: es la asociación más sólida y responde al control de la EII', 'Proteinograma e inmunofijación en todos', 'Hemograma con frotis y, si hay citopenias, estudio hematológico', 'Función renal, glucemia y valoración cardiaca', 'Si hay vasculitis asociada, prever recaídas y mantener la inmunosupresión']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Estas enfermedades llegan al internista casi siempre por la puerta equivocada: como una celulitis que no responde al antibiótico, como una úlcera que empeora después de cada cura, o como una fiebre con una erupción que nadie sabe donde encajar. El hilo común es que la piel esta señalando algo, y el trabajo consiste en seguir el dedo, no en mirar el dedo.',
    parametros: [
      'Si vas a biopsiar un NÓDULO, pide biopsia incisional o excisional PROFUNDA. Un punch no llega a la grasa y el informe no concluira nada.',
      'Un nódulo tipo eritema nodoso que se ÚLCERA o deja atrofia no es un eritema nodoso: piensa en paniculitis lobulillar y en linfoma T subcutáneo.',
      'En todo eritema nodoso: estudio de estreptococo con ASLO al diagnóstico y REPETIDO a las cuatro semanas, radiografía de tórax y estratificación del riesgo de tuberculosis.',
      'No des corticoide sistémico en un eritema nodoso antes de haber excluido infección, riesgo de diseminación bacteriana y neoplasia.',
      'Placa caliente y dolorosa con fiebre que no responde al antibiótico y con cultivos negativos: piensa en síndrome de Sweet antes de subir de antibiótico.',
      'Ante un Sweet, revisa los fármacos de las últimas semanas: el factor estimulante de colonias, el ATRA y los inhibidores de tirosina cinasa son desencadenantes frecuentes y retirarlos puede ser todo el tratamiento.',
      'Un Sweet sin causa aparente no se cierra como idiopático: en la mielodisplasia, la mayoría de los diagnósticos se hicieron DESPUÉS del episodio cutáneo.',
      'Una úlcera de borde socavado violaceo que empeora tras cada desbridamiento es patergia: deja de desbridar y replantea el diagnóstico.',
      'En el pioderma, pide proteinograma: la gammapatía monoclonal aparece en el 27% y predice neoplasia.',
      'En el eritema multiforme, el antiviral empezado cuando ya hay lesiones no cambia el curso: su papel es la profilaxis de las recurrencias.'
    ],
    criterios_uci_general: 'Ninguna de estas enfermedades ingresa en críticos por sí misma. Las razones reales son la sepsis sobre una úlcera de pioderma, la mucositis grave del eritema multiforme con deshidratación y desequilibrio hidroelectrolítico, y las manifestaciones extracutaneas graves del Sweet, entre las que están descritas la miocarditis y la miositis neutrofílica con rabdomiólisis.',
    criterios_tips_general: 'El ingreso hospitalario del eritema multiforme se decide por la mucosa: afectación grave que impide la ingesta, con el desequilibrio hidroelectrolítico que sigue. En el pioderma, lo que se evita es justamente la intervención: no desbridar.',
    criterios_trasplante_general: 'No aplica. Nota al margen con sentido inverso: el trasplante renal aumento las probabilidades de pioderma (OR ajustada 5,03), de modo que el antecedente cuenta.',
    prevencion: 'En el eritema multiforme recurrente, la prevención ES el tratamiento: antiviral continuo durante al menos seis meses, y de 1 a 2 años en quien responde. En el pioderma, prevenir significa evitar el traumatismo sobre la zona y controlar la enfermedad de base, porque el pioderma sigue la actividad de la enfermedad inflamatoria intestinal. En el eritema nodoso y en el Sweet, prevenir es identificar y retirar el desencadenante: la faringitis tratada, el fármaco suspendido, la neoplasia tratada.'
  }
};

export const compCites = {
  'Eritema nodoso: la paniculitis que apunta a otra cosa': { definicion: [1], fisiopatologia: [1], epidemiologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1], complementarios: [1], dx_diferencial: [1], tx_medico: [1], tx_farmacologico: [1] },
  'Paniculitis: el nódulo profundo y su diferencial': { definicion: [1], criterios_dx: [1], dx_diferencial: [1], complementarios: [1], laboratorio: [1] },
  'Eritema multiforme: la diana del herpes': { definicion: [2], fisiopatologia: [2], epidemiologia: [2], clinica: [2], criterios_dx: [2], laboratorio: [2], dx_diferencial: [2], tx_medico: [2], tx_farmacologico: [2] },
  'Eritema multiforme recurrente: el que se previene': { definicion: [2], epidemiologia: [2], fisiopatologia: [2], clinica: [2], tx_farmacologico: [2], tx_medico: [2], complementarios: [2], pronostico: [2], criterios_dx: [2] },
  'Eritema multiforme frente a Stevens-Johnson: dos enfermedades': { definicion: [2], fisiopatologia: [2], clinica: [2], dx_diferencial: [2], criterios_dx: [2] },
  'Síndrome de Sweet: reconocerlo': { definicion: [3], fisiopatologia: [3], epidemiologia: [3], clinica: [3], criterios_dx: [3], laboratorio: [3], dx_diferencial: [3], tx_medico: [3], tx_farmacologico: [3], complementarios: [3] },
  'Sweet: buscar el fármaco y la neoplasia': { epidemiologia: [3], fisiopatologia: [3], clinica: [3], criterios_dx: [3], complementarios: [3], dx_diferencial: [3], seguimiento_ambulatorio: [3], laboratorio: [3] },
  'Pioderma gangrenoso: la úlcera que no hay que desbridar': { definicion: [4], epidemiologia: [4], fisiopatologia: [4], clinica: [4], criterios_dx: [4], tx_medico: [4], tx_farmacologico: [4], pronostico: [4], laboratorio: [4] },
  'Pioderma gangrenoso: la enfermedad sistémica de detrás': { definicion: [4], epidemiologia: [4], clinica: [4], criterios_dx: [4], laboratorio: [4], complementarios: [4], dx_diferencial: [4], tx_medico: [4], pronostico: [4] }
};

export const estigmasTitulo = 'Signos que orientan ante una lesión reactiva';
export const estigmas = [
  { nombre: 'Patergia', descripcion: 'El traumatismo mínimo precipita o agrava la lesión. Es el rasgo del pioderma gangrenoso con más consecuencias prácticas, porque convierte el desbridamiento en una forma de empeorar la enfermedad, y también se invoca en la patogenia del síndrome de Sweet.' },
  { nombre: 'El nódulo que NO se úlcera', descripcion: 'El eritema nodoso no se úlcera y cura sin atrofia ni cicatriz. Si el nódulo se úlcera o deja una depresión, hay que pensar en una paniculitis lobulillar (lupica, pancreática, por déficit de alfa-1-antitripsina) o en un linfoma T subcutáneo.' },
  { nombre: 'Aspecto de moretón al apagarse', descripcion: 'Los nódulos del eritema nodoso adoptan un aspecto equimotico mientras se resuelven, en uno o dos meses. Es un dato de evolución que ayuda cuando el paciente llega con lesiones de distintas edades.' },
  { nombre: 'Borde elevado, socavado y violaceo', descripcion: 'El borde de la úlcera del pioderma gangrenoso: elevado, con el margen despegado de la base y de color violaceo, sobre una úlcera que crecio rápido desde una papula o pústula estéril y duele más de lo que su tamaño justifica.' },
  { nombre: 'La placa jugosa del Sweet', descripcion: 'Placa infiltrada, caliente y dolorosa cuyo edema papilar dérmico es tan marcado que la lesión parece turgente o jugosa. Con fiebre y neutrofilia, es el cuadro que describió Sweet en 1964 en miembros, cara y cuello.' },
  { nombre: 'Cultivo negativo y antibiótico que no funciona', descripcion: 'En el Sweet similar a celulitis, en la dermatosis neutrofílica del dorso de las manos y en el Sweet necrosante los cultivos no crecen y el antibiótico no induce remisión. No es un fallo del tratamiento: es un dato diagnóstico.' },
  { nombre: 'Diana papulosa y acral frente a macula troncular', descripcion: 'La diana del eritema multiforme es PAPULAR, elevada y de predominio acral. La lesión del Stevens-Johnson es MACULAR, más prominente en el tronco y se extiende en sentido distal. Es la diferencia que separa dos enfermedades distintas.' },
  { nombre: 'Lesión fija frente a habón fugaz', descripcion: 'Todas las lesiones del eritema multiforme aparecen en las primeras 72 horas y se quedan. El habón de la urticaria dura menos de 24 horas y salen nuevos cada dia, y su centro es eritematoso o de piel normal, no oscuro ni ampolloso.' }
];

export const biopsiaTitulo = 'Biopsia: profunda, y para que exactamente';
export const biopsia = {
  indicaciones: [
    'Todo nódulo profundo en el que se plantee una paniculitis distinta del eritema nodoso',
    'Eritema nodoso cuando el diagnóstico clínico es dudoso',
    'Toda sospecha de síndrome de Sweet, para documentar el infiltrado neutrofílico',
    'Toda úlcera sospechosa de pioderma gangrenoso, para EXCLUIR otras causas',
    'Eritema multiforme cuando hay que separarlo de sus imitadores'
  ],
  ventajas: [
    'En la paniculitis dice lo único que la clasifica: septal o lobulillar, con vasculitis o sin ella',
    'En el eritema nodoso busca granulomas radiales de Miescher y confirma la ausencia de vasculitis',
    'En el Sweet muestra infiltrado neutrofílico dérmico difuso con edema papilar y sin vasculitis leucocitoclástica',
    'En el pioderma descarta oclusión vascular, vasculitis, infección y neoplasia ulcerada'
  ],
  limitaciones: [
    'Un PUNCH no llega a la grasa: en la paniculitis da una muestra insuficiente',
    'En el pioderma gangrenoso la histología es INESPECÍFICA y no confirma el diagnóstico',
    'En el Sweet se han descrito casos sin infiltrado neutrofílico predominante, aunque el nombre no debe usarse para infiltrados eosinofilicos o linfocíticos',
    'El subtipo histológico del eritema multiforme depende del sitio y del momento evolutivo de la lesión biopsiada'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección',
    'En el pioderma, elegir el borde y evitar el traumatismo innecesario por la patergia',
    'En el nódulo profundo, no sustituir la biopsia incisional por un punch para ahorrar tiempo',
    'Evitar biopsiar sobre una zona ya sobreinfectada'
  ]
};

export const escalaRefs = {
  'Paniculitis: septal o lobulillar (calculadora disponible)': [1],
  'Criterios de Sweet de von den Driesch': [3],
  'Criterios de Sweet inducido por fármaco (Walker y Cohen)': [3],
  'Criterios diagnósticos del pioderma gangrenoso': [4],
  'Eritema multiforme frente a Stevens-Johnson (calculadora disponible)': [2],
  'Predictores de eritema multiforme recurrente resistente': [2]
};

export const escalaCalc = {
  'Paniculitis: septal o lobulillar (calculadora disponible)': 'nodulo-doloroso',
  'Eritema multiforme frente a Stevens-Johnson (calculadora disponible)': 'em-vs-sjs'
};

export const compGroups = [
  { title: 'Paniculitis', items: ['Eritema nodoso: la paniculitis que apunta a otra cosa', 'Paniculitis: el nódulo profundo y su diferencial'] },
  { title: 'Eritema multiforme', items: ['Eritema multiforme: la diana del herpes', 'Eritema multiforme recurrente: el que se previene', 'Eritema multiforme frente a Stevens-Johnson: dos enfermedades'] },
  { title: 'Dermatosis neutrofílicas', items: ['Síndrome de Sweet: reconocerlo', 'Sweet: buscar el fármaco y la neoplasia', 'Pioderma gangrenoso: la úlcera que no hay que desbridar', 'Pioderma gangrenoso: la enfermedad sistémica de detrás'] }
];

export const complicacionesIntro = 'Las fichas van por profundidad y, dentro de cada familia, separan reconocer de buscar. Las dos primeras son la grasa: el eritema nodoso y después el diferencial de cuando el nódulo no se comporta como un eritema nodoso. Las tres siguientes son el eritema multiforme: reconocerlo, prevenirlo cuando recurre, y la frontera con el Stevens-Johnson, que es la que más se falla y la que tiene consecuencias de tratamiento. Las cuatro últimas son las dermatosis neutrofílicas, y en el Sweet y en el pioderma la ficha de reconocer y la de buscar están deliberadamente separadas: reconocerlos es fácil comparado con averiguar que los ha provocado, y lo segundo es el trabajo del internista.';

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
    { title: 'Unión dermoepidérmica', sub: 'DIANA acral y papulosa', color: '#b05a2e', target: 'complicaciones', leaves: [
      { title: 'Eritema multiforme', sub: 'Herpes simple en el 90%', color: '#b05a2e', target: 'complicaciones' },
      { title: 'No es Stevens-Johnson', sub: 'Papular y acral, no macular', color: '#8c3a34', target: 'clasificacion' }
    ] },
    { title: 'Dermis', sub: 'PLACA infiltrada y dolorosa', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Síndrome de Sweet', sub: 'Fiebre y neutrofilia', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Pioderma gangrenoso', sub: 'Borde socavado &middot; NO desbridar', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Que hay detrás', sub: 'Fármaco, EII, hematología', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Grasa subcutánea', sub: 'NÓDULO profundo', color: '#7a5a3a', target: 'complicaciones', leaves: [
      { title: 'Eritema nodoso', sub: 'Septal sin vasculitis &middot; no úlcera', color: '#9c3a52', target: 'complicaciones' },
      { title: 'Si úlcera, otra cosa', sub: 'Lobulillar o linfoma', color: '#7a5a3a', target: 'complicaciones' }
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
      <title id="prof-title">Corte de la piel con la capa en la que ocurre cada reacción y la lesión que produce</title>
      <desc id="prof-desc">Corte esquemático de la piel en tres niveles. En la unión de la epidermis con la dermis se produce el eritema multiforme, que se ve como una lesión en diana papulosa de distribución acral. En la dermis se producen las dermatosis neutrofílicas, el síndrome de Sweet y el pioderma gangrenoso, que se ven como placas infiltradas y dolorosas o como una úlcera de borde socavado. En la grasa subcutánea se producen las paniculitis, que se ven como nódulos profundos mal delimitados; la más frecuente es el eritema nodoso, que es septal y sin vasculitis y no se úlcera.</desc>

      <text x="8" y="22" font-size="12" font-weight="600" fill="var(--ink)">Donde ocurre la reacción y que lesión produce</text>

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
      <text x="498" y="60" font-size="11" font-weight="600" fill="var(--ink)">Unión dermoepidérmica</text>
      <text x="498" y="76" font-size="10" fill="var(--ink-dim)">Diana PAPULOSA, acral</text>
      <text x="498" y="90" font-size="10" fill="var(--ink-dim)">Eritema multiforme &middot; herpes</text>

      <ellipse cx="270" cy="128" rx="92" ry="34" fill="#8a5a2e" opacity="0.55"/>
      <text x="270" y="133" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--ink)">infiltrado de neutrófilos</text>
      <text x="498" y="124" font-size="11" font-weight="600" fill="var(--ink)">Dermis</text>
      <text x="498" y="140" font-size="10" fill="var(--ink-dim)">PLACA infiltrada y dolorosa</text>
      <text x="498" y="154" font-size="10" fill="var(--ink-dim)">Sweet &middot; pioderma gangrenoso</text>
      <text x="498" y="168" font-size="10" fill="var(--ink-dim)">Cultivos negativos</text>

      <rect x="186" y="212" width="8" height="146" fill="#9c3a52" opacity="0.75"/>
      <rect x="281" y="212" width="8" height="146" fill="#9c3a52" opacity="0.75"/>
      <rect x="376" y="212" width="8" height="146" fill="#9c3a52" opacity="0.75"/>
      <text x="498" y="248" font-size="11" font-weight="600" fill="var(--ink)">Grasa subcutánea</text>
      <text x="498" y="264" font-size="10" fill="var(--ink-dim)">NÓDULO profundo, mal delimitado</text>
      <text x="498" y="278" font-size="10" fill="var(--ink-dim)">Eritema nodoso: TABIQUES,</text>
      <text x="498" y="292" font-size="10" fill="var(--ink-dim)">sin vasculitis, y NO se úlcera</text>
      <text x="498" y="312" font-size="10" fill="#8c3a34">Si úlcera o deja atrofia:</text>
      <text x="498" y="326" font-size="10" fill="#8c3a34">lobulillar, o linfoma T subcutáneo</text>
      <text x="498" y="346" font-size="10" fill="var(--accent-fg)">Biopsia INCISIONAL: el punch no llega</text>
    </svg>
    <div class="figure-grade-box">La figura resume las dos reglas técnicas del tema. La primera: <strong>para ver la grasa hay que llegar a la grasa</strong>, de modo que la paniculitis se biopsia con una muestra incisional o excisional y un punch da casi siempre material insuficiente. La segunda: el eritema nodoso inflama los <strong>tabiques</strong> y respeta el lobulillo, y por eso no destruye la grasa, no se úlcera y no deja cicatriz; cuando un nódulo si lo hace, el infiltrado esta dentro del lobulillo y el diferencial cambia por completo.</div>`
  },
  'em-vs-sjs': {
    titulo: 'Eritema multiforme y Stevens-Johnson: dos enfermedades, no un espectro',
    fuente: 'Sokumbi O, Wetter DA. Clinical features, diagnosis, and treatment of erythema multiforme. Int J Dermatol 2012;51(8):889-902, que recoge la clasificacion clinica de consenso.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Eritema multiforme</th><th>Stevens-Johnson</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Lesión cutánea</td><td><span class="figure-tag">PAPULAR</span>, diana típica elevada</td><td><span class="figure-tag dys">MACULAR</span>, diana atípica plana</td></tr>
            <tr><td class="figure-org">Distribución</td><td>Predominio <strong>ACRAL</strong></td><td>Predominio en <strong>TRONCO</strong>, se extiende distalmente</td></tr>
            <tr><td class="figure-org">Desencadenante</td><td>Infección en el 90%; herpes simple el primero</td><td>FÁRMACO</td></tr>
            <tr><td class="figure-org">Mucosas</td><td>Puede haberlas: con ellas es eritema multiforme MAYOR</td><td>Erosiones mucosas parecidas</td></tr>
            <tr><td class="figure-org">Velocidad</td><td>Todas las lesiones en las primeras 72 h; son fijas</td><td>Progresión con despegamiento</td></tr>
            <tr><td class="figure-org">Que se hace</td><td>Buscar el VIRUS; profilaxis antiviral si recurre</td><td>Retirar el FÁRMACO; ver el módulo 77</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Durante años se enseño que el eritema multiforme mayor, el Stevens-Johnson y la necrólisis epidérmica tóxica eran un espectro. Una <strong>clasificación clínica de consenso</strong> aporto la evidencia de que el eritema multiforme mayor y el Stevens-Johnson son <strong>enfermedades separadas y distintas</strong>: comparten erosiones mucosas parecidas y se diferencian por la lesión cutánea. La consecuencia no es académica: en uno se busca un virus y en el otro se retira un fármaco. La mucosa afectada NO decide cual es, solo separa el eritema multiforme menor del mayor.</div>`
  },
  'que-buscar-detras': {
    titulo: 'Que hay que buscar detrás de cada una',
    fuente: 'Causas del eritema nodoso de Schwartz RA, Nervi SJ. Am Fam Physician 2007;75(5):695-700; asociaciones del Sweet de Joshi TP, et al. Am J Clin Dermatol 2022;23(3):301-318; asociaciones del pioderma de Nadarajah N, et al. Skin Health Dis 2026;6(4):393-405.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lesión</th><th>Lo primero que se busca</th><th>Con que frecuencia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Eritema nodoso</td><td>Faringitis estreptocócica</td><td>44% de los adultos y 48% de los niños</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Sarcoidosis, con adenopatías hiliares bilaterales</td><td>11 a 25%</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Fármacos (sulfonamidas, amoxicilina, anticonceptivos)</td><td>3 a 10%</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Enteropatia inflamatoria &middot; embarazo</td><td>1 a 4% &middot; 2 a 5%</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Idiopático, después de buscar</td><td>hasta 55%</td></tr>
            <tr><td class="figure-org">Eritema multiforme</td><td>Virus del herpes simple</td><td>Infección en el 90% de los casos</td></tr>
            <tr><td class="figure-org">Eritema multiforme</td><td>Fármaco</td><td>menos del 10%</td></tr>
            <tr><td class="figure-org">Síndrome de Sweet</td><td>Fármaco: G-CSF, ATRA, inhibidores de tirosina cinasa</td><td>Desencadenantes yatrogenos frecuentes</td></tr>
            <tr><td class="figure-org">Síndrome de Sweet</td><td>Leucemia mieloide aguda y mielodisplasia</td><td>Sweet en el 1 a 5,5% de las leucemias</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso</td><td>Enfermedad inflamatoria intestinal</td><td>17,6% agrupado; 26 a 41% en bases de datos</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso</td><td>Artritis inflamatoria</td><td>12,8%</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso</td><td>Neoplasia hematológica &middot; gammapatía monoclonal</td><td>8,9% &middot; 27% en una cohorte</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La tabla es el tema entero en una pagina: <strong>cada lesión es una indicación de búsqueda</strong>, y la búsqueda tiene un orden dado por la frecuencia. Dos matices que cambian la conducta. En el <strong>pioderma</strong>, la edad reordena la lista: por debajo de los 65 años la enfermedad inflamatoria intestinal es significativamente más frecuente, y por encima lo son la artritis, el tumor sólido y los trastornos hematológicos. Y en el <strong>Sweet</strong>, la ausencia de causa no cierra el caso: en una serie de mielodisplasia, 15 de 23 diagnósticos hematológicos se hicieron DESPUÉS del episodio cutáneo.</div>`
  }
};
