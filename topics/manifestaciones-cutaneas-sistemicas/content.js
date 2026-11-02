// topics/manifestaciones-cutaneas-sistemicas/content.js - Modulo 81: Manifestaciones cutaneas de
// enfermedad sistemica.
// Fuentes: revision en dos partes de Anais Brasileiros de Dermatologia (Sampaio AL, et al. 2021,
// parte I: reumatologicas, vasculares y granulomatosas; Leal JM, et al. 2021, parte II:
// endocrino-metabolicas, cardiovasculares, renales, digestivas, oncologicas y prurito).
// QUE ES ESTE MODULO: no es un tema de enfermedad, es un INDICE DE DERIVACION. Cada ficha es un
// SIGNO o una familia de signos, no un diagnostico, y termina diciendo a donde lleva: que hay que
// buscar, con que frecuencia aparece esa asociacion y que tema de la app continua la historia.
// Se escribio asi a proposito, porque el catalogo ya esta repartido por otros nueve temas y
// repetirlo no añadiria nada.
// ALCANCE: lo que tiene modulo propio se ENLAZA y no se repite. El pioderma gangrenoso, el
// sindrome de Sweet y el eritema nodoso estan en el modulo 78; la piel del inmunodeprimido y los
// carcinomas queratinociticos en el 80; las lesiones elementales en Exploracion de piel y
// faneras; las reacciones a farmacos en el 77; los estigmas hepaticos en Cirrosis; el sindrome de
// Lofgren en Sarcoidosis. De reumatologia todavia no hay bloque construido, de modo que los
// signos cutaneos del lupus, la dermatomiositis y la esclerodermia estan aqui por ahora.
// LIMITE DE LA FUENTE: es de 2021, y su apartado de COVID esta desfasado; se ha dejado fuera.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'manifestaciones-cutaneas-sistemicas',
  titulo: 'Manifestaciones cutáneas de enfermedad sistémica',
  subtitulo: 'Módulo 81 &middot; Dermatología',
  accent: '#6b5a8c',
  accentDim: '#8a7aa8'
};

export const definicionText = `<p style="margin:0 0 14px;">Este módulo funciona distinto de todos los demás de la app. No enseña una enfermedad: es un <strong>índice de derivación</strong>. La piel enseña por fuera lo que pasa por dentro, y con frecuencia el signo aparece <strong>antes</strong> que el diagnóstico, de modo que la pregunta no es nunca "¿qué lesión es esta?" sino <strong>"¿a que esta apuntando y a donde voy ahora?"</strong>.</p>
<p style="margin:0 0 14px;">Por eso cada ficha es un <strong>SIGNO</strong> o una familia de signos, no un diagnóstico. Cada una dice tres cosas y en este orden: que hay que buscar, con que frecuencia aparece esa asociación, y <strong>que tema de la app continua la historia</strong>. Cuando el destino es un tema ya construido, se nombra, y el buscador global lo encuentra escribiendo ese nombre. Un signo bien reconocido no es el final del trabajo: es la indicación para empezarlo.</p>
<p style="margin:0 0 14px;">Y una advertencia sobre lo que este módulo NO hace, porque es lo que lo mantiene útil. Todo lo que tiene tema propio se enlaza y no se repite: el <strong>pioderma gangrenoso</strong>, el <strong>síndrome de Sweet</strong> y el <strong>eritema nodoso</strong> viven en el módulo 78; la piel del <strong>inmunodeprimido</strong> y los carcinomas queratinociticos, en el 80; las <strong>lesiones elementales</strong>, en Exploración de piel y faneras; las reacciones a <strong>fármacos</strong>, en el 77; los <strong>estigmas hepáticos</strong>, en Cirrosis; el síndrome de <strong>Lofgren</strong>, en Sarcoidosis. Lo que si se queda aquí, porque todavía no tiene bloque propio en el temario, son los signos cutáneos de las enfermedades <strong>reumatologicas</strong>.</p>`;

export const bibliografia = [
  'Sampaio AL, Bressan AL, Vasconcelos BN, Gripp AC. Skin manifestations associated with systemic diseases - Part I. An Bras Dermatol. 2021;96(6):655-671. doi:10.1016/j.abd.2021.02.008.',
  'Leal JM, de Souza GH, Marsillac PF, Gripp AC. Skin manifestations associated with systemic diseases - Part II. An Bras Dermatol. 2021;96(6):672-687. doi:10.1016/j.abd.2021.06.003.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Cuando la piel va por delante del diagnóstico',
      tituloB: 'Los signos que obligan a moverse hoy',
      compensada: 'Son los signos que aparecen ANTES de que la enfermedad se conozca, y por eso valen tanto. La ACANTOSIS NIGRICANS precede con frecuencia al diagnóstico de diabetes y puede aparecer en un estado de hiperinsulinemia con hemoglobina glucosilada todavía normal. Las INFECCIONES CUTÁNEAS DE REPETICIÓN son motivo para investigar una diabetes. Los XANTOMAS ESTRIADOS PALMARES solo aparecen con cifras altas de colesterol Y de triglicéridos a la vez. El PRURITO sin lesión primaria obliga a un estudio escalonado que termina encontrando una enfermedad sistémica en una parte de los casos. Y la HIPERPIGMENTACIÓN difusa de piel, mucosas y pelo, con pérdida de vello axilar y pubico, es la presentación de la insuficiencia suprarrenal primaria.',
      descompensada: 'Lo que no puede esperar a la próxima consulta. PÚRPURA RETIFORME dolorosa y de inicio agudo: es el patrón del síndrome antifosfolipidico y de las vasculopatías trombóticas, y en el enfermo renal en diálisis, de la CALCIFILAXIS, que tiene alta morbilidad por sepsis de las áreas necróticas. PETEQUIAS con recuento de plaquetas por debajo de 10.000. PÚRPURA PALPABLE, que es vasculitis leucocitoclástica hasta demostrar lo contrario. Una ampollosa con MUCOSITIS exuberante e inmunofluorescencia directa negativa, que apunta a pénfigo paraneoplásico y a una neoplasia linforreticular. Una ACANTOSIS NIGRICANS de aparición SÚBITA en una persona NO obesa y sin endocrinopatía, que obliga a buscar un adenocarcinoma gástrico. Y en el diabético con cetoacidosis, la sinusitis con secreción serosanguinolenta que progresa a edema periorbitario y necrosis: mucormicosis rinocerebral.'
    },
    laboratorio: [
      { prueba: 'Panel de primera línea del prurito sin lesión primaria', utilidad: 'Es el estudio básico que propone la revisión cuando no se identifica una dermatosis y ya se han revisado los fármacos: hemograma completo, función renal, función hepática, función tiroidea, hierro y ferritina, proteína C reactiva y velocidad de sedimentación. Con eso se cubren las causas sistémicas más frecuentes y se decide si hace falta seguir.' },
      { prueba: 'Panel de segunda línea del prurito', utilidad: 'Si el primero no explica nada: serología de VIH, serologías de hepatitis B y C, imagen de tórax y abdomen, inmunoelectroforesis de proteínas, hormona paratiroidea, colesterol y fracciones, y biopsia cutánea. El orden importa, porque pedirlo todo de entrada en un prurito es caro y rinde poco.' },
      { prueba: 'Revisión de fármacos antes de cualquier analítica', utilidad: 'En el prurito, el paso previo a pedir nada: los fármacos pueden producirlo por alergia, por colestasis, por xerosis, por acumulo de metabolitos en piel o nervios y por fototoxicidad. Si hay un sospechoso, se suspende de 4 a 6 SEMANAS; si el prurito cede, el vínculo causal se refuerza y se cambia el fármaco.' },
      { prueba: 'Glucemia y hemoglobina glucosilada', utilidad: 'Ante acantosis nigricans, infecciones cutáneas de repetición, necrobiosis lipoidica, granuloma anular, ampollas sin inflamación en los pies o colagenosis perforante. Aviso útil: la acantosis nigricans puede aparecer con hiperinsulinemia y hemoglobina glucosilada todavía NORMAL, de modo que un valor normal no cierra el caso.' },
      { prueba: 'Perfil lipídico completo', utilidad: 'Ante cualquier xantoma. El estriado palmar solo aparece con colesterol Y triglicéridos altos. El xantoma plano difuso es la excepción que cambia el estudio: aparece en personas con dislipidemia o SIN ella, y con frecuencia tienen una PARAPROTEINEMIA, incluida la del mieloma múltiple, de modo que ahi lo que hay que pedir es un proteinograma.' },
      { prueba: 'Proteinograma e inmunoelectroforesis', utilidad: 'Ante xantoma plano difuso, púrpura que se induce al pellizcar la piel (amiloidosis de cadenas ligeras), escleredema de Buschke y púrpura hipergammaglobulinemica de Waldenstrom. También forma parte del panel de segunda línea del prurito.' },
      { prueba: 'Calcio, fósforo y paratohormona en el enfermo renal', utilidad: 'La calcifilaxis aparece en el 1 al 4% de los pacientes con enfermedad renal crónica en hemodiálisis que tienen hiperparatiroidismo secundario y un producto calcio-fósforo elevado, por encima de 60 a 70. La calcinosis cutis, en el 1%, por aumento de la relación calcio-fósforo.' },
      { prueba: 'Porfirinas en orina, heces y suero', utilidad: 'Ante ampollas y erosiones en el dorso de las manos de un paciente en hemodiálisis. La porfiria cutánea tarda aparece en el 1 al 18% de ellos porque las porfirinas no se dializan bien, y el hierro sérico alto y la hepatitis C aumentan la predisposición. Si las porfirinas son normales, es una PSEUDOPORFIRIA, que tiene la misma clínica sin hipertricosis ni hiperpigmentación facial y la provocan amiodarona, furosemida, tetraciclinas, isotretinoina, naproxeno o el ácido nalidixico.' }
    ],
    no_invasivos: [
      { metodo: 'Morfología de la púrpura (calculadora disponible)', interpretacion: 'La forma de la púrpura dice el MECANISMO, y el mecanismo dice el estudio. Hemorragia simple: petequias por trombocitopenia o disfunción plaquetaria. Hemorragia con inflamación del vaso: púrpura PALPABLE, que es vasculitis. Hemorragia oclusiva con inflamación mínima: púrpura RETIFORME, estrellada y dolorosa, que es trombosis. Es la clasificación más rentable de todo el módulo porque se hace mirando.', cutoff: 'Palpable es vasculitis; retiforme es trombosis' },
      { metodo: 'Umbrales de plaquetas de la púrpura', interpretacion: 'Las petequias pueden aparecer con plaquetas por debajo de 50.000 por mm3, pero lo típico es verlas con 10.000 o menos. La disfunción plaquetaria, en cambio, da más equimosis ante traumatismos mínimos que petequias. La trombocitopenia grave deteriora la adhesión endotelial y aumenta la permeabilidad vascular.', cutoff: 'Petequias típicas con 10.000 o menos' },
      { metodo: 'Criterios de Curth', interpretacion: 'Son los que permiten juzgar si la asociación entre una dermatosis y una neoplasia es verdadera o casual, y la revisión los usa como marco de todo el apartado oncológico. En la práctica, lo que más rinde de ellos es la cronología: que las dos cosas empiecen a la vez y que la piel mejore al tratar el tumor.', cutoff: 'Marco para juzgar si la asociación es real' },
      { metodo: 'Cuando una acantosis nigricans es paraneoplásica', interpretacion: 'Tres señales juntas: aparición SÚBITA, en una persona NO obesa, y sin endocrinopatía que la explique. Lo más frecuente entonces es el adenocarcinoma GÁSTRICO, aunque puede asociarse a otros tumores de la cavidad abdominal, digestivos y genitourinarios; en más del 95% de los casos el tumor es un adenocarcinoma.', cutoff: 'Súbita + no obeso + sin endocrinopatía' },
      { metodo: 'Cuando una ampollosa es paraneoplásica', interpretacion: 'Dos pistas que la propia revisión da: la inmunofluorescencia directa NEGATIVA (o con depósitos lineales de IgA en la membrana basal) y la presencia de lesiones MUCOSAS exuberantes. El pénfigo paraneoplásico se asocia a neoplasias del sistema linforreticular (Castleman, linfoma no hodgkiniano, timoma, sarcoma de células dendriticas foliculares, leucemia linfocítica crónica) y puede dar lesiones bronquiales con insuficiencia respiratoria y mal pronóstico.', cutoff: 'IFD negativa + mucositis exuberante' },
      { metodo: 'Prurito: agudo frente a crónico (calculadora disponible)', interpretacion: 'Agudo es el de hasta 6 semanas y se relaciona más con urticaria, reacciones a fármacos e infecciones. Crónico es el de más de 6 semanas y se asocia más a enfermedades cutáneas y sistémicas; además es más refractario y, al entrar en el ciclo picor-rascado, genera lesiones secundarias (excoriaciones, cambios de pigmentación, liquenificación) que confunden el cuadro.', cutoff: '6 semanas separa agudo de crónico' }
    ],
    imagen: [
      { modalidad: 'Radiografía simple de la lesión', hallazgos: 'En la calcinosis cutis los depósitos se ven como material radioopaco en el tejido subcutáneo. Es una comprobacion barata ante nódulos indurados que ulceran y eliminan material blanquecino en un paciente en diálisis.' },
      { modalidad: 'Imagen de tórax y abdomen', hallazgos: 'Forma parte del panel de SEGUNDA línea del prurito, cuando el estudio básico no explica nada. También es lo que corresponde ante una acantosis nigricans con las tres señales de paraneoplasia, dirigida al abdomen, y ante un síndrome de Bazex, dirigida a cabeza, cuello y pelvis.' },
      { modalidad: 'Lo que NO hay que pedir de entrada', hallazgos: 'Imagen en un prurito antes de haber revisado los fármacos y hecho el panel básico. La revisión ordena el estudio en escalones justamente para no empezar por ahi: primero la anamnesis y la exploración completa (incluidas las regiones genital, interdigital, ocular y del pezon), después los fármacos, después la analítica básica, y solo entonces la imagen.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las escalas de este módulo no gradan gravedad: <strong>ordenan la derivación</strong>. Son cuatro marcos de decisión y dos listas de señales. Los marcos: la <strong>morfología de la púrpura</strong>, que traduce lo que se ve en un mecanismo y por tanto en un estudio; el <strong>escalonado del prurito</strong>, que impide pedirlo todo de golpe; los <strong>criterios de Curth</strong>, que dicen si una asociación con una neoplasia es creible; y el <strong>mapa de derivación</strong>, que es el índice propiamente dicho. Y las dos listas de señales son las que convierten un signo banal en una urgencia diagnóstica: cuando una acantosis nigricans es paraneoplásica y cuando una ampollosa lo es.`,
    escalas: [
      { nombre: 'Morfología de la púrpura (calculadora disponible)', componentes: 'Aspecto de la lesión (petequia, equimosis, púrpura palpable, púrpura retiforme), recuento de plaquetas y contexto clínico.', formula: 'Tres mecanismos: hemorragia simple, hemorragia con inflamación del vaso, y hemorragia oclusiva con inflamación mínima.', interpretacion: 'PETEQUIAS: trombocitopenia (típicas con 10.000 o menos, posibles por debajo de 50.000) o disfunción plaquetaria, que da más equimosis ante traumatismo mínimo. PALPABLE: inflamación del vaso, es decir vasculitis, con la leucocitoclástica como causa importante; si es por inmunocomplejos, predomina en zonas declives. RETIFORME dolorosa y aguda: trombosis, típica del síndrome antifosfolipidico y otras vasculopatías trombóticas, con trombosis difusa no inflamatoria en la histología y SIN vasculitis. Y dos extravasculares que se reconocen a ojo: la púrpura que se induce al PELLIZCAR la piel, que es amiloidosis de cadenas ligeras, y la hemorragia PERIFOLICULAR, que es escorbuto.' },
      { nombre: 'Prurito: estudio escalonado (calculadora disponible)', componentes: 'Duración, presencia o no de lesión primaria, fármacos, y resultado de cada escalón.', formula: 'Anamnesis y exploración completa, revisión de fármacos con suspensión de 4 a 6 semanas, panel básico, y panel ampliado.', interpretacion: 'El orden es el valor de la escala. Primero buscar una dermatosis primaria explorando TODO, incluidas las regiones genital, interdigital, ocular y del pezon. Si no la hay, revisar fármacos y suspender el sospechoso de 4 a 6 semanas. Si no hay sospechoso, panel básico: hemograma, función renal, hepática y tiroidea, hierro y ferritina, PCR y VSG. Y solo si ese no explica nada, el ampliado: VIH, hepatitis B y C, imagen de tórax y abdomen, inmunoelectroforesis, paratohormona, colesterol y biopsia.' },
      { nombre: 'Criterios de Curth', componentes: 'Conjunto de criterios para juzgar la verosimilitud de la asociación entre una dermatosis y una neoplasia interna.', formula: 'Marco cualitativo, no puntuación.', interpretacion: 'Lo que hay que llevarse es la idea: no toda dermatosis en un paciente con cáncer es paraneoplásica, y la forma de distinguirlo es la cronología (aparición simultánea) y el comportamiento (la piel mejora al tratar el tumor y reaparece con la recidiva). La revisión los usa como marco de todo el apartado oncológico.' },
      { nombre: 'Señales de acantosis nigricans paraneoplásica', componentes: 'Velocidad de aparición, índice de masa corporal y presencia de endocrinopatía.', formula: 'Las tres señales juntas, no por separado.', interpretacion: 'Súbita, en persona no obesa y sin endocrinopatía. Entonces lo más frecuente es el adenocarcinoma gástrico, y más del 95% de los tumores asociados son adenocarcinomas. En cambio, la acantosis nigricans de las regiones cervical y axilar de un paciente diabético u obeso, o con ovario poliquistico, no es paraneoplásica: apunta a hiperinsulinemia, y puede preceder al diagnóstico de diabetes con hemoglobina glucosilada normal.' },
      { nombre: 'Señales de ampollosa paraneoplásica', componentes: 'Resultado de la inmunofluorescencia directa y extensión de la afectación mucosa.', formula: 'Dos pistas que se valoran juntas.', interpretacion: 'Una enfermedad ampollosa es más probablemente paraneoplásica si la inmunofluorescencia directa es NEGATIVA, o muestra depósitos lineales de IgA a lo largo de la membrana basal, y si hay lesiones mucosas exuberantes. El pénfigo paraneoplásico se asocia al sistema linforreticular y puede dar afectación bronquial con insuficiencia respiratoria. Para el resto del grupo, ver el módulo 76 de Ampollosas autoinmunes.' },
      { nombre: 'El mapa de derivación', componentes: 'Signo cutáneo, enfermedad a la que apunta, frecuencia de la asociación y tema de la app que continua.', formula: 'Es el índice mismo: un signo, un destino.', interpretacion: 'Es la forma de usar el módulo. Reconocer el signo no es el final: es la indicación de empezar a buscar, y el mapa dice por donde. Cuando el destino es un tema ya construido, se nombra para que el buscador global lo encuentre; cuando no lo es todavía, se nombra la enfermedad.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Púrpura: la morfología dice el mecanismo',
      color: '#8c3a34',
      definicion: 'Extravasación de sangre en la piel. Puede ser la expresión de una enfermedad banal y crónica o de una enfermedad que amenaza la vida, y en los dos casos es un signo INESPECÍFICO de muchas enfermedades.',
      fisiopatologia: 'Tres mecanismos, y la morfología los separa: hemorragia simple, hemorragia secundaria a inflamación del vaso, y hemorragia oclusiva con inflamación mínima. En la mayoría de los casos, una anamnesis detallada y la exploración, con algunas pruebas de laboratorio, bastan para clasificarla.',
      clinica: 'PETEQUIAS: típicas con plaquetas de 10.000 o menos, posibles por debajo de 50.000. La disfunción plaquetaria da más equimosis tras traumatismos mínimos que petequias. Petequias por encima de las clavículas tras un parto, accesos de tos o de vómitos, o llanto intenso en el niño: son picos de presión intravascular, y no hay que estudiar nada más; el torniquete hace lo mismo por encima del punto comprimido. PÚRPURA PALPABLE: inflamación del vaso. PÚRPURA RETIFORME (arboriforme o estrellada), dolorosa y de inicio agudo: oclusión.',
      criterios_dx: 'La clasificación se hace mirando y palpando. La biopsia confirma: en la retiforme no inflamatoria se ve trombosis difusa de los vasos dérmicos SIN vasculitis.',
      laboratorio: 'Hemograma con recuento y frotis, pruebas de coagulación, y después lo que dicte el mecanismo: autoinmunidad y crioglobulinas si es palpable, anticuerpos antifosfolipidicos si es retiforme, proteinograma si se induce al pellizcar.',
      dx_diferencial: 'Púrpuras pigmentarias crónicas, que afectan a vasos de pequeño calibre de la dermis y dejan la coloración ocre del hemosiderina: Schamberg (aspecto de pimienta de cayena), Doucas-Kapetanakis, púrpura anular telangiectodes de Majocchi y liquen aureus. Y la púrpura hipergammaglobulinemica de Waldenstrom, en zonas declives y bajo ropa ajustada, asociada a gammapatías policlonales como las del síndrome de Sjogren y la sarcoidosis.',
      complementarios: 'Las causas EXTRAVASCULARES se reconocen por el contexto: púrpura ante traumatismo mínimo por tejido conectivo defectuoso (púrpura actínica, exceso de corticoide local o sistémico, Ehlers-Danlos, pseudoxantoma elástico) y la amiloidosis de cadenas ligeras, en la que la púrpura se induce fácilmente al PELLIZCAR la piel. La hemorragia PERIFOLICULAR sugiere escorbuto.',
      tx_medico: 'No hay tratamiento de la púrpura: hay tratamiento de su causa. Lo que si hay es una urgencia de clasificación, porque la retiforme dolorosa y la palpable extensa no admiten esperar.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: trombocitopenia a Alteraciones plaquetarias cuantitativas; trastorno de la coagulación a Trastornos de la coagulación y trombofilias y a Coagulación intravascular diseminada; púrpura palpable a vasculitis; retiforme en el enfermo renal a la ficha de la piel del enfermo renal de este mismo módulo; púrpura al pellizcar a Mieloma múltiple.',
      pronostico: 'Enteramente el de la causa, que es justo lo que justifica clasificarla bien y deprisa.',
      algoritmo: ['Mirar la forma: ¿petequia, equimosis, palpable o retiforme?', 'Palpar: si se palpa, es vasculitis', '¿Retiforme, dolorosa y aguda? Pensar en trombosis y actuar hoy', 'Pedir hemograma con recuento y coagulación', 'Buscar causas extravasculares: corticoide, piel actínica, pellizco positivo', 'Mirar los folículos: la hemorragia perifolicular es escorbuto', 'Derivar al tema que corresponda al mecanismo'],
      figura: 'purpura-arbol'
    },
    {
      nombre: 'Prurito sin lesión primaria: el estudio escalonado',
      color: '#5a7a8a',
      definicion: 'Sensación desagradable que desencadena el deseo de rascarse, cuando la exploración no encuentra una dermatosis primaria que lo explique.',
      fisiopatologia: 'Puede originarse en la piel por estímulos mecánicos o térmicos, o de forma indirecta por mediadores químicos; en el sistema nervioso periférico por cambios de la inervación local; o en el central sin estímulo periférico. Los mediadores principales son la histamina, los neuropéptidos, las prostaglandinas, la serotonina, la acetilcolina y la bradicinina.',
      epidemiologia: 'En la enfermedad renal es un síntoma de los más frecuentes, presente en el 50 al 90% de los casos.',
      clinica: 'Agudo, hasta 6 semanas, más ligado a urticaria, reacciones a fármacos e infecciones. Crónico, más de 6 semanas, más ligado a enfermedades cutáneas y sistémicas, más refractario y con lesiones secundarias del ciclo picor-rascado: excoriaciones, cambios de pigmentación y liquenificación, que a la larga afectan al sueño, al estado de ánimo y a la calidad de vida.',
      criterios_dx: 'Caracterizarlo: generalizado o localizado, cuando empezo, como varia a lo largo del dia, que lo intensifica y que lo alivia. Y preguntar por fármacos, viajes recientes, si afecta a otros convivientes, el trabajo, el contacto con animales o alérgenos, y los síntomas sistémicos: fiebre, sudoración nocturna, pérdida de peso, dolor abdominal, mareo, artritis o parestesias.',
      laboratorio: 'PRIMER escalón: hemograma, función renal, hepática y tiroidea, hierro y ferritina, PCR y VSG. SEGUNDO escalón, si el primero no explica nada: VIH, hepatitis B y C, imagen de tórax y abdomen, inmunoelectroforesis de proteínas, paratohormona, colesterol y fracciones, y biopsia cutánea.',
      complementarios: 'Antes de la analítica, los FÁRMACOS: pueden producir prurito por alergia, colestasis, xerosis, acumulo de metabolitos en piel o nervios y fototoxicidad. Si hay sospechoso, suspenderlo de 4 a 6 semanas; si cede, el vínculo se refuerza y se cambia.',
      dx_diferencial: 'Causas NEUROLÓGICAS que se reconocen por su mapa: neuralgia postherpetica (lesiones secundarias en el dermatoma), notalgia parestesica (placa hiperpigmentada dorsal a la altura de T2-T6) y prurito braquiorradial (en las caras laterales de brazos y hombros). Las generalizadas son polineuropatías: diabética, carenciales, alcoholismo y autoinmunes. Las centrales son raras: tumores del sistema nervioso central, esclerosis múltiple e ictus. Y las PSICÓGENAS, que se consideran cuando no hay causa somática ni cutánea, dura más de 6 meses, hay relación temporal con hechos psicológicos, varia con el estrés, predomina en reposo y mejora con psicofarmacos o terapia.',
      tx_medico: 'El del prurito neuropático tiene nombre propio: tópico con capsaicina y mentol, y por via oral gabapentina, pregabalina, mirtazapina y paroxetina. Lo demás es tratar la causa.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: función renal alterada a Lesión renal aguda y a la ficha renal de este módulo; función hepática alterada a Cirrosis; tiroidea a Hipotiroidismo o a Hipertiroidismo y tiroiditis; ferropenia a Anemia ferropénica; inmunoelectroforesis positiva a Mieloma múltiple; adenopatías o síntomas B a Linfomas; y sospecha neurológica a Neuropatías periféricas o Esclerosis múltiple.',
      pronostico: 'El prurito crónico es más refractario y empeora la calidad de vida de forma desproporcionada a su aparente banalidad.',
      algoritmo: ['Explorar TODO, incluidas regiones genital, interdigital, ocular y del pezon', '¿Hay dermatosis primaria? Entonces es otro tema', 'Revisar fármacos y suspender el sospechoso 4 a 6 semanas', 'Panel básico: hemograma, renal, hepático, tiroideo, hierro, PCR y VSG', 'Si no explica nada: panel ampliado con imagen e inmunoelectroforesis', 'Valorar causa neurológica por el MAPA del prurito', 'Dejar la causa psicógena para el final, no para el principio']
    },
    {
      nombre: 'La piel del diabético',
      color: '#8a5a2e',
      definicion: 'Conjunto de signos cutáneos que acompañan a la diabetes, algunos de los cuales la PRECEDEN y son por tanto una oportunidad de diagnosticarla antes.',
      clinica: 'ACANTOSIS NIGRICANS: placas hiperpigmentadas intertriginosas, sobre todo cervicales y axilares; precede con frecuencia al diagnóstico y puede darse con hemoglobina glucosilada normal, en estado de hiperinsulinemia. NECROBIOSIS LIPOIDICA: empieza como papulas eritematosas y progresa a una placa pardo-amarillenta con centro atrófico y telangiectasias, simétrica y en la cara anterior de las piernas, más frecuente en mujeres; en el 35% de los casos se ÚLCERA y se sobreinfecta. BULLOSIS DIABETICORUM: ampollas tensas e INDOLORAS, sin inflamación alrededor, sobre todo en pies; crecen rápido y curan en semanas; la presenta alrededor del 0,5% de los diabéticos. GRANULOMA ANULAR: papulas que forman placas anulares en dorso de pies y manos o en superficies de extensión.',
      epidemiologia: 'Alrededor de una cuarta parte de los pacientes con LIQUEN PLANO tiene diabetes. El escleredema de Buschke, la colagenosis perforante reactiva adquirida y la carotenodermia completan el cuadro.',
      factores_riesgo: ['Diabetes de larga evolución, en la bullosis', 'Hiperinsulinemia, en la acantosis nigricans', 'Obesidad y ovario poliquistico, también en la acantosis', 'Enfermedad renal crónica e hiperuricemia, en la colagenosis perforante', 'Mal control metabólico, en las infecciones'],
      criterios_dx: 'Clínico en casi todos. Lo importante no es el nombre de la lesión sino lo que obliga a hacer: medir la glucemia.',
      complementarios: 'INFECCIONES, que son la parte que más le toca al internista: las infecciones cutáneas de repetición son motivo para investigar una diabetes. Estafilocócicas (foliculitis, abscesos, impetigo), estreptocócicas (ectima, celulitis), fascitis necrosante y su variante perineal, la gangrena de Fournier, de alta mortalidad. OTITIS EXTERNA MALIGNA, invasiva, que empieza asintomática y da otalgia con supuracion, y en casos graves alcanza el cráneo y el sistema nervioso central. Candidiasis cutánea, mucosa y periungueal, y dermatofitosis y onicomicosis. Y la MUCORMICOSIS RINOCEREBRAL, asociada a la cetoacidosis: empieza como sinusitis con secreción serosanguinolenta y progresa a edema periorbitario, coloración eritematoviolacea y necrosis de piel y mucosas, con evolución rápida al sistema nervioso central.',
      dx_diferencial: 'El granuloma anular no es exclusivo del diabético: también se describe en hepatitis, VIH, linfoma y carcinoma. La colagenosis perforante reactiva aparece además en la enfermedad renal crónica y en la hiperuricemia.',
      tx_medico: 'El de la diabetes y el de la infección que corresponda. La necrobiosis lipoidica tiene curso crónico, aunque a veces mejora sola; la mayoría de los granulomas anulares cura espontáneamente.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Diabetes mellitus en todos los casos, y a Cetoacidosis diabética y estado hiperosmolar si hay mucormicosis. La acantosis nigricans con las tres señales de alarma lleva en cambio a la ficha de signos paraneoplásicos de este módulo.',
      algoritmo: ['Ante cualquiera de estos signos, medir glucemia y hemoglobina glucosilada', 'Recordar que la acantosis puede preceder al diagnóstico con HbA1c normal', 'Infecciones cutáneas de repetición: investigar diabetes', 'En cetoacidosis con sinusitis: pensar en mucormicosis y actuar deprisa', 'Comprobar si la acantosis cumple las tres señales de paraneoplasia', 'Derivar a Diabetes mellitus']
    },
    {
      nombre: 'La piel del enfermo renal',
      color: '#3d5a73',
      definicion: 'Signos cutáneos de la enfermedad renal crónica, sobre todo en el paciente en hemodiálisis, donde son muy frecuentes y algunos marcan el pronóstico.',
      epidemiologia: 'Por frecuencia: PRURITO en el 50 al 90%, XEROSIS en el 50 al 80% de los que están en hemodiálisis, dermatosis perforante adquirida en el 4,5 al 10%, porfiria cutánea tarda y pseudoporfiria en el 1 al 18% cada una, calcifilaxis en el 1 al 4%, calcinosis cutis en el 1% y escarcha urémica en el 1 al 3%.',
      clinica: 'CALCIFILAXIS: es la que no puede esperar. Empieza pareciendo una livedo reticularis y progresa a placas de púrpura retiforme simétricas y EXTREMADAMENTE dolorosas, con ulceracion y necrosis, en zonas de mayor grasa (glúteos, abdomen, muslos y piernas), más frecuente en mujeres. CALCINOSIS CUTIS: papulas, placas o nódulos indurados que ulceran y eliminan material blanco-amarillento. DERMATOSIS PERFORANTE (enfermedad de Kyrle): nódulos o papulas muy pruriginosas, hipercromicas, umbilicadas y con hiperqueratosis central, en superficies de extensión. ESCARCHA URÉMICA: con urea de 250 a 300 mg/dL, se elimina por el sudor y queda en la superficie al evaporarse el agua.',
      fisiopatologia: 'La calcifilaxis es una vasculopatía trombótica por depósito de calcio en la capa media de las arteriolas, con hiperplasia de la íntima. La porfiria cutánea tarda aparece porque las porfirinas no se dializan bien y se acumulan.',
      factores_riesgo: ['Hiperparatiroidismo secundario y producto calcio-fósforo por encima de 60 a 70', 'Trombofilia: alteraciones de proteína C y S, anticuerpos antifosfolipidicos', 'Hipercalcemia y quelantes de fósforo con calcio', 'Reposición de vitamina D e hiperfosfatemia', 'Diabetes, obesidad, corticoides sistémicos, inmunosupresión y traumatismo'],
      criterios_dx: 'La calcinosis se ve en la radiografía como depósitos radioopacos y en la histología como material homogéneo azulado, confirmable con Von Kossa. La dermatosis perforante tiene histología específica: acantosis, tapones queratosicos en copa y eliminación transepidermica de detritus.',
      laboratorio: 'Calcio, fósforo y paratohormona. Porfirinas si hay ampollas en el dorso de las manos; si son normales, es pseudoporfiria, y entonces hay que mirar la lista de fármacos: amiodarona, furosemida, tetraciclinas, isotretinoina, naproxeno, ácido nalidixico.',
      dx_diferencial: 'La fibrosis sistémica nefrogenica, ligada al contraste de GADOLINIO de la resonancia, que da placas induradas simétricas y puede llegar a contracturas; su diferencial es con el escleromixedema, la esclerosis sistémica y la fascitis eosinofílica. Y la oxalosis, que imita a la calcifilaxis con livedo y púrpura retiforme, aunque sus lesiones son más superficiales y menos dolorosas.',
      tx_medico: 'El de la causa metabólica y el soporte de la herida. La discromia (pigmentación pardo-grisacea por hemosiderina, amarillenta por carotenos y urocromos) no tiene tratamiento propio.',
      pronostico: 'La calcifilaxis tiene alta morbilidad, habitualmente por sepsis a partir de la infección secundaria de las áreas necróticas. La fibrosis sistémica nefrogenica tiene una evolución fulminante con afectación multiorgánica en el 5% de los casos.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Lesión renal aguda y al Síndrome cardiovascular-renal-metabólico; la porfiria cutánea tarda, a Porfirias; el prurito, a la ficha de prurito de este módulo; y la púrpura retiforme, a la de púrpura.',
      algoritmo: ['En el paciente en diálisis, mirar la piel aunque no la mencione', '¿Púrpura retiforme dolorosa? Calcifilaxis: urgente', 'Pedir calcio, fósforo y paratohormona', '¿Ampollas en el dorso de las manos? Porfirinas', 'Si las porfirinas son normales, revisar la lista de fármacos de la pseudoporfiria', '¿Resonancia con gadolinio reciente? Pensar en fibrosis sistémica nefrogenica', 'Tratar el prurito y la xerosis, que son lo más frecuente y lo más olvidado']
    },
    {
      nombre: 'La piel del enfermo digestivo',
      color: '#5c7a3a',
      definicion: 'Signos cutáneos de la enfermedad inflamatoria intestinal y de los síndromes de malabsorción, que son los dos grupos digestivos con más expresión en la piel.',
      epidemiologia: 'ERITEMA NODOSO en hasta el 15% de los pacientes con enfermedad de Crohn y el 10% con colitis ulcerosa; hasta el 90% de los casos de eritema nodoso se asocia a ACTIVIDAD de la enfermedad intestinal, aunque su gravedad no sea necesariamente proporcional. Estomatitis aftosa en más del 7% de todos los pacientes.',
      clinica: 'Úlceras orales, que pueden ser lesiones por contiguidad con la misma histología que la enfermedad intestinal o una reacción a ella. PIOSTOMATITIS VEGETANTE: pústulas friables, úlceras y placas vegetantes amarillentas en mucosa oral; si afecta también a la piel se llama piodermatitis-piostomatitis vegetante. ERITEMA NODOSO, PIODERMA GANGRENOSO y, más raramente, SÍNDROME DE SWEET. Y el BADAS, síndrome de dermatosis-artritis asociada al intestino, con episodios recurrentes de fiebre, dolor abdominal y artritis, y maculas, papulas, vesiculas y pústulas.',
      fisiopatologia: 'En el BADAS, la proliferación bacteriana excesiva libera antígenos y se depositan inmunocomplejos. Las vasculitis asociadas son frecuentes y se presentan con púrpura palpable, úlceras, nódulos, vasculitis digital y exantema maculopapular; los subtipos más descritos son la leucocitoclástica, la necrotizante y la linfocítica, y entre las necrotizantes, la panarteritis nodosa.',
      complementarios: 'MALABSORCIÓN, que es el otro gran grupo y se reconoce por signos muy concretos: hiperqueratosis folicular o frinodermia por déficit de VITAMINA A; queilitis angular por déficit de VITAMINA B12; escorbuto por déficit de VITAMINA C; y acrodermatitis enteropatica por déficit de ZINC.',
      dx_diferencial: 'Con el advenimiento de los inmunobiologicos aparecen además alteraciones PARADÓJICAS tras el uso de terapia anti-TNF, como la psoriasis, que no son de la enfermedad sino del tratamiento.',
      tx_medico: 'El de la enfermedad intestinal. Que hasta el 90% de los eritemas nodosos siga la actividad intestinal es la razón práctica: controlar el intestino suele arreglar la piel.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: el eritema nodoso, el pioderma gangrenoso y el Sweet, al módulo 78 de Eritemas reactivos, paniculitis y dermatosis neutrofílicas, que los desarrolla enteros. Los signos carenciales, a Soporte nutricional del crítico y a Anemia megaloblástica si hay déficit de B12. Y la dermatitis herpetiforme, a Ampollosas autoinmunes y a la celiaquía.',
      algoritmo: ['Ante eritema nodoso, preguntar por síntomas digestivos', 'Ante úlceras orales de repetición, pensar en enfermedad inflamatoria intestinal', 'Buscar los signos carenciales: frinodermia, queilitis angular, escorbuto, acrodermatitis', 'Ante púrpura palpable en un paciente con colitis, pensar en vasculitis asociada', 'Si esta con anti-TNF, considerar la psoriasis paradójica', 'Derivar al módulo 78 para el manejo de las dermatosis neutrofílicas']
    },
    {
      nombre: 'Signos endocrinos: tiroides, suprarrenal e hipófisis',
      color: '#b05a2e',
      definicion: 'Signos cutáneos que delatan una endocrinopatía, en varios de los cuales la piel es la primera pista.',
      clinica: 'ENFERMEDAD DE ADDISON: hiperpigmentación DIFUSA de piel, pelo y mucosas, con pérdida de vello axilar y pubico y bandas ungueales longitudinales hiperpigmentadas. SÍNDROME DE CUSHING: cara de luna llena, giba dorsocervical, cuello ancho y corto por la grasa supraclavicular, exoftalmos por grasa retroorbitaria, hematomas espontáneos, retraso de cicatrización, atrofia cutánea, estrías de distensión, hiperpigmentación, acantosis nigricans y acne corticoideo. FEOCROMOCITOMA: su única manifestación cutánea relevante es el rubor PAROXÍSTICO muy llamativo en cara, tórax y extremidades superiores. HIPOPITUITARISMO: la piel y el tejido subcutáneo se adelgazan, el pelo se hace ralo y la piel se vuelve pálida o amarillenta; las lesiones cutáneas pueden ser la PRIMERA indicación para sospecharlo.',
      epidemiologia: 'En el hipotiroidismo se han descrito asociadas varias enfermedades autoinmunes: dermatitis herpetiforme, alopecia areata, vitíligo y urticaria autoinmune. El vitíligo acompaña con frecuencia a otras autoinmunes, entre ellas la diabetes insulinodependiente y la enfermedad tiroidea.',
      criterios_dx: 'Clínico, con confirmación hormonal. Lo útil del signo es que acorta el camino hasta pedir la hormona correcta.',
      laboratorio: 'Función tiroidea, cortisol y ACTH según el cuadro. Ante hiperpigmentación especialmente intensa, más intensa de lo habitual en un Cushing, pensar en el síndrome de ACTH ECTÓPICO, asociado al carcinoma microcitico de pulmón.',
      dx_diferencial: 'La acantosis nigricans aparece tanto en el Cushing como en la diabetes y en la obesidad, de modo que por si sola no decide; lo que decide es el contexto. Y el vitíligo, que es fácil de diagnosticar, obliga a mirar el resto del eje autoinmune.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Hipotiroidismo, a Hipertiroidismo y tiroiditis, a Urgencias tiroideas si el cuadro es agudo, y a Diabetes mellitus cuando aparece vitíligo o acantosis. La hiperpigmentación muy intensa con sospecha de ACTH ectópico lleva a Nódulo pulmonar y cáncer de pulmón.',
      algoritmo: ['Hiperpigmentación difusa con pérdida de vello: pedir cortisol y ACTH', 'Estrías, giba y hematomas espontáneos: pensar en Cushing', 'Rubor paroxístico llamativo: considerar feocromocitoma', 'Hiperpigmentación más intensa de lo esperable: buscar ACTH ectópico y microcitico', 'Vitíligo: revisar función tiroidea y glucemia', 'Piel fina, pelo ralo y palidez: puede ser la primera pista de un hipopituitarismo']
    },
    {
      nombre: 'Xantomas y depósitos: lo que delatan',
      color: '#8a7a3a',
      definicion: 'Depósitos cutáneos visibles de lípidos o de otras sustancias, cuyo valor esta en que cada tipo apunta a una alteración metabólica distinta.',
      clinica: 'XANTOMA ESTRIADO PALMAR: lesiones planas, de amarillentas a anaranjadas, en los pliegues palmares. Solo aparece en pacientes con cifras altas de colesterol Y de triglicéridos. XANTOMA PLANO DIFUSO: cubre áreas extensas de cara, cuello, tórax y miembros superiores, y aparece en personas con dislipidemia o SIN ella.',
      criterios_dx: 'La morfología y la localización orientan al perfil lipídico, pero la decisión práctica es más simple: ante cualquier xantoma, pedir perfil lipídico completo; y ante un xantoma plano difuso, pedir además proteinograma.',
      laboratorio: 'Colesterol y fracciones y triglicéridos. Proteinograma e inmunoelectroforesis en el plano difuso.',
      dx_diferencial: 'El xantoma plano difuso es la trampa del grupo: con frecuencia estos pacientes tienen una PARAPROTEINEMIA, incluidas las relacionadas con el MIELOMA MÚLTIPLE, de modo que un perfil lipídico normal no cierra el caso sino que lo abre.',
      complementarios: 'Otros depósitos del módulo que se reconocen igual de bien: la carotenodermia del diabético (piel y uñas amarillentas), la discromia del enfermo renal y el escleredema de Buschke, que además de en la diabetes aparece en neoplasias, paraproteinemias e infecciones.',
      tx_medico: 'El de la dislipidemia o el de la gammapatía. El depósito es el síntoma, no la enfermedad.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Dislipidemias en todos los casos, y a Mieloma múltiple y a Síndrome de hiperviscosidad cuando el xantoma es plano difuso o hay paraproteína.',
      algoritmo: ['Ante cualquier xantoma, perfil lipídico completo', 'Estriado palmar: buscar colesterol Y triglicéridos altos', 'Plano difuso: pedir además proteinograma', 'Si el perfil lipídico es normal en un plano difuso, el caso se abre, no se cierra', 'Derivar a Dislipidemias, y a Mieloma múltiple si hay paraproteína']
    },
    {
      nombre: 'Signos paraneoplásicos: cuando la piel anuncia un tumor',
      color: '#7a3a6b',
      definicion: 'Dermatosis que se correlacionan con una neoplasia interna. El problema practico no es reconocerlas sino decidir cuando la asociación es real, y para eso existen los criterios de Curth.',
      clinica: 'ACANTOSIS NIGRICANS con las tres señales: súbita, en no obeso y sin endocrinopatía. SÍNDROME DE BAZEX (acroqueratosis paraneoplásica): erupción psoriasiforme en superficies acras que puede progresar a queratodermia palmoplantar y distrofia ungueal, y afecta con frecuencia a orejas, nariz, región del buccinador, manos, pies y rodillas. ERITRODERMIA, que es rara y se asocia a neoplasia. ERITEMA NECROLITICO MIGRATORIO, la manifestación cutánea del glucagonoma. Y la hiperpigmentación intensa del síndrome de ACTH ectópico.',
      criterios_dx: 'Los criterios de Curth juzgan la verosimilitud de la asociación. Lo que más rinde de ellos en la práctica es la cronología: aparición simultánea de las dos enfermedades y mejoría de la piel al tratar el tumor.',
      complementarios: 'A que tumor apunta cada una. Acantosis nigricans paraneoplásica: adenocarcinoma GÁSTRICO sobre todo, y otros tumores de la cavidad abdominal, digestivos y genitourinarios; en más del 95% de los casos son adenocarcinomas. Bazex: carcinomas EPIDERMOIDES de la via aerodigestiva superior (laringe, faringe, tráquea, bronquios, esófago superior), habitualmente con metástasis en ganglios cervicales, de modo que hay que estudiar cabeza, cuello y pelvis. Pénfigo paraneoplásico: sistema LINFORRETICULAR, es decir enfermedad de Castleman, linfoma no hodgkiniano, timoma, sarcoma de células dendriticas foliculares y leucemia linfocítica crónica. Penfigoide cicatricial antiepiligrina: adenocarcinomas. Dermatitis herpetiforme: riesgo relativo aumentado de linfoma intestinal, igual que en la propia celiaquía. Glucagonoma: eritema necrolitico migratorio.',
      dx_diferencial: 'Una prudencia que la propia revisión señala: la porfiria cutánea tarda se ha relacionado con tumores hepáticos, pero esa asociación parece casual, porque la infección por el virus de la hepatitis C es factor de riesgo de las dos cosas a la vez. Es un buen ejemplo de para que sirven los criterios de Curth.',
      laboratorio: 'El dirigido por el signo. Y en las ampollosas, la inmunofluorescencia directa, cuya NEGATIVIDAD hace más probable el origen paraneoplásico.',
      imagen: 'Dirigida: abdomen en la acantosis nigricans; cabeza, cuello y pelvis en el Bazex; tórax en la sospecha de ACTH ectópico.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Linfomas, a Leucemia linfocítica crónica y a Mieloma múltiple en las asociaciones linforreticulares; a Nódulo pulmonar y cáncer de pulmón en el ACTH ectópico; y a Ampollosas autoinmunes para el pénfigo paraneoplásico, que alli esta desarrollado entero.',
      pronostico: 'El del tumor. El valor del signo esta en el tiempo que gana.',
      algoritmo: ['¿La dermatosis y el tumor empezaron a la vez? Criterio de Curth', '¿Acantosis súbita, en no obeso y sin endocrinopatía? Buscar adenocarcinoma gástrico', '¿Erupción psoriasiforme acra? Estudiar via aerodigestiva superior', '¿Ampollosa con mucositis e inmunofluorescencia negativa? Buscar linforreticular', '¿Eritrodermia sin causa? Es rara y se asocia a neoplasia', 'Comprobar si la piel mejora al tratar el tumor: confirma la asociación'],
      figura: 'paraneoplasicos'
    },
    {
      nombre: 'Signos de enfermedad reumatologica',
      color: '#9c3a52',
      definicion: 'Signos cutáneos de las conectivopatias y de las vasculitis. Es la parte del módulo que todavía no tiene bloque propio en el temario, de modo que por ahora este es su sitio en la app.',
      clinica: 'LUPUS ERITEMATOSO SISTÉMICO: la revisión separa las lesiones ESPECÍFICAS (agudas, subagudas y crónicas, más las formas atípicas) de las NO ESPECÍFICAS, entre las que están las vasculopatías y la alopecia. DERMATOMIOSITIS, cuya eritrodermia asociada es rara y se asocia a malignidad. ARTRITIS REUMATOIDE y ENFERMEDAD DE STILL. FENÓMENO DE RAYNAUD, que la revisión separa en primario y SECUNDARIO, con su propia lista de causas asociadas. SÍNDROME DE SJOGREN y ESCLERODERMIA.',
      complementarios: 'Las VASCULITIS, que la revisión ordena por calibre: de vaso grande (arteritis de Takayasu y arteritis de células gigantes), de vaso mediano (panarteritis nodosa y enfermedad de Kawasaki), asociadas a ANCA, asociadas a inmunocomplejos, de vaso variable, y las secundarias. La expresión cutánea compartida es la púrpura PALPABLE, que remite a la ficha de púrpura de este módulo.',
      dx_diferencial: 'Las enfermedades GRANULOMATOSAS que la revisión incluye en este bloque: la NECROBIOSIS LIPOIDICA, que ya se trata en la ficha del diabético, y el GRANULOMA ANULAR, que aparece en diabéticos pero también en hepatitis, VIH, linfoma y carcinoma. Y las NEUTROFÍLICAS: enfermedad de Behcet, BADAS y pioderma gangrenoso, con sus variantes.',
      criterios_dx: 'Clínico y serológico, y fuera del alcance de este módulo, que solo pretende que el signo no pase desapercibido.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: el pioderma gangrenoso, el Behcet y el BADAS, al módulo 78 de Eritemas reactivos, que los desarrolla; la púrpura palpable, a la ficha de púrpura de este módulo; el fenómeno de Raynaud con sospecha de enfermedad arterial, a Enfermedad arterial periférica; y el resto, al bloque de reumatología cuando se construya. Mientras tanto, la referencia es la parte I de la revisión que sostiene este módulo.',
      pronostico: 'El de la enfermedad de fondo. Lo que el signo cutáneo aporta es la sospecha y, a veces, varios meses de ventaja.',
      algoritmo: ['Separar las lesiones específicas de lupus de las no específicas', 'Ante púrpura palpable, ordenar las vasculitis por calibre de vaso', '¿Raynaud? Decidir si es primario o secundario antes de nada', '¿Eritrodermia en una dermatomiositis? Es rara y obliga a descartar malignidad', 'Derivar las neutrofílicas al módulo 78', 'Dejar constancia del signo aunque el diagnóstico reumatológico tarde']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este módulo no se usa como los demás. No se estudia de principio a fin para saber tratar una enfermedad: se consulta cuando hay un signo delante y no se sabe a donde lleva. Por eso lo que sigue no son parámetros de monitorización, sino las reglas de uso del índice.',
    parametros: [
      'Mirar la piel del paciente ingresado por otra cosa es la única forma de encontrar estos signos. Ninguno se encuentra si no se busca.',
      'Ante una PÚRPURA, lo primero es palparla: si se palpa es vasculitis, y si es retiforme, dolorosa y aguda, es trombosis y no admite esperar.',
      'Ante un PRURITO sin lesión primaria, revisar los fármacos ANTES de pedir analítica, y suspender el sospechoso de 4 a 6 semanas.',
      'Las infecciones cutáneas de repetición son motivo para investigar una diabetes, no solo para tratar la infección.',
      'Una acantosis nigricans no es lo mismo en un obeso que en una persona delgada: súbita, en no obeso y sin endocrinopatía, obliga a buscar un adenocarcinoma gástrico.',
      'En el paciente en diálisis, el prurito y la xerosis son lo más frecuente (50 al 90% y 50 al 80%) y lo que más se olvida preguntar.',
      'Ante un xantoma plano difuso, un perfil lipídico normal no cierra el caso: pide el proteinograma.',
      'Si hay ampollas con mucositis exuberante y la inmunofluorescencia directa sale negativa, piensa en pénfigo paraneoplásico y busca una neoplasia linforreticular.',
      'La hemorragia perifolicular es escorbuto, y la púrpura que sale al pellizcar la piel es amiloidosis. Dos signos que se ven en diez segundos.',
      'Y la regla general del módulo: reconocer el signo no es el final del trabajo, es la indicación para empezarlo.'
    ],
    criterios_uci_general: 'Los signos de este módulo que anuncian una situación crítica: la calcifilaxis por su morbilidad por sepsis de las áreas necróticas, la mucormicosis rinocerebral del diabético en cetoacidosis por su evolución rápida al sistema nervioso central, la gangrena de Fournier por su alta mortalidad, el pénfigo paraneoplásico por la afectación bronquial con insuficiencia respiratoria, y la fibrosis sistémica nefrogenica, fulminante con afectación multiorgánica en el 5% de los casos.',
    criterios_tips_general: 'No aplica como intervención. Lo que si hay es un umbral de derivación: cuando el signo cumple las señales de alarma de su ficha, la consulta deja de ser diferible.',
    criterios_trasplante_general: 'No aplica. La piel del trasplantado y del inmunodeprimido esta en el módulo 80 de Cáncer cutáneo no melanoma y sarcoma de Kaposi.',
    prevencion: 'La prevención de este módulo es de proceso y no de enfermedad: explorar la piel en la valoración inicial, revisar los fármacos antes de estudiar un prurito, y no cerrar un signo como banal sin haber comprobado las señales de alarma que tiene asociadas. Y una de contenido: el fenómeno de Koebner es frecuente en la colagenosis perforante del diabético y del enfermo renal, de modo que el rascado perpetua las lesiones y tratar el prurito es tratar la dermatosis.'
  }
};

export const compCites = {
  'Púrpura: la morfología dice el mecanismo': { definicion: [1], fisiopatologia: [1], clinica: [1], criterios_dx: [1], dx_diferencial: [1], complementarios: [1], laboratorio: [1] },
  'Prurito sin lesión primaria: el estudio escalonado': { definicion: [2], fisiopatologia: [2], epidemiologia: [2], clinica: [2], criterios_dx: [2], laboratorio: [2], complementarios: [2], dx_diferencial: [2], tx_medico: [2] },
  'La piel del diabético': { clinica: [2], epidemiologia: [2], criterios_dx: [2], complementarios: [2], dx_diferencial: [2] },
  'La piel del enfermo renal': { epidemiologia: [2], clinica: [2], fisiopatologia: [2], factores_riesgo: [2], criterios_dx: [2], laboratorio: [2], dx_diferencial: [2], pronostico: [2] },
  'La piel del enfermo digestivo': { epidemiologia: [2], clinica: [2], fisiopatologia: [2], complementarios: [2], dx_diferencial: [2] },
  'Signos endocrinos: tiroides, suprarrenal e hipófisis': { clinica: [2], epidemiologia: [2], laboratorio: [2], criterios_dx: [2] },
  'Xantomas y depósitos: lo que delatan': { clinica: [2], dx_diferencial: [2], complementarios: [2], criterios_dx: [2], laboratorio: [2] },
  'Signos paraneoplásicos: cuando la piel anuncia un tumor': { definicion: [2], clinica: [2], criterios_dx: [2], complementarios: [2], dx_diferencial: [2], laboratorio: [2] },
  'Signos de enfermedad reumatologica': { definicion: [1], clinica: [1], complementarios: [1], dx_diferencial: [1], criterios_dx: [1] }
};

export const estigmasTitulo = 'Signos que se reconocen en diez segundos y cambian el plan';
export const estigmas = [
  { nombre: 'Púrpura palpable', descripcion: 'Si se palpa, hay inflamación del vaso: es vasculitis, con la leucocitoclástica como causa importante. La perivascularitis sin vasculitis NO da púrpura palpable. Si es por inmunocomplejos, predomina en zonas declives.' },
  { nombre: 'Púrpura retiforme dolorosa', descripcion: 'Estrellada o arboriforme, de inicio agudo y muy dolorosa: es oclusión, no inflamación. Es el patrón del síndrome antifosfolipidico y de las vasculopatías trombóticas, y en el enfermo renal en diálisis, de la calcifilaxis.' },
  { nombre: 'Púrpura al pellizcar la piel', descripcion: 'En la amiloidosis de cadenas ligeras la púrpura se induce con facilidad al pellizcar. Es una maniobra de dos segundos que reorienta el estudio entero hacia una gammapatía.' },
  { nombre: 'Hemorragia perifolicular', descripcion: 'La hemorragia alrededor del foliculo sugiere escorbuto, es decir déficit de vitamina C. Aparece en malabsorción y en dietas muy restrictivas, y es de los pocos signos que dan el diagnóstico casi solos.' },
  { nombre: 'Acantosis nigricans súbita en persona delgada', descripcion: 'Las tres señales de paraneoplasia van juntas: aparición súbita, persona NO obesa y sin endocrinopatía. Entonces lo más frecuente es el adenocarcinoma gástrico, y más del 95% de los tumores asociados son adenocarcinomas.' },
  { nombre: 'Xantoma plano difuso', descripcion: 'Cubre áreas extensas de cara, cuello, tórax y miembros superiores, y aparece con dislipidemia o sin ella. Lo importante es lo segundo: con frecuencia hay una paraproteinemia detrás, incluida la del mieloma múltiple.' },
  { nombre: 'Hiperpigmentación difusa con pérdida de vello', descripcion: 'Piel, pelo y mucosas hiperpigmentados, con pérdida de vello axilar y pubico y bandas ungueales longitudinales: es la presentación de la insuficiencia suprarrenal primaria. Si la hiperpigmentación es más intensa de lo esperable, pensar en ACTH ectópico y microcitico de pulmón.' },
  { nombre: 'Ampollas tensas e indoloras en los pies', descripcion: 'Sin inflamación alrededor, de crecimiento rápido y curación en semanas: es la bullosis diabeticorum, que presenta alrededor del 0,5% de los diabéticos y que también puede ser la manifestación inicial de la diabetes.' }
];

export const biopsiaTitulo = 'Biopsia: cuando añade algo en este módulo';
export const biopsia = {
  indicaciones: [
    'Púrpura retiforme, para confirmar trombosis sin vasculitis',
    'Prurito sin causa tras el panel ampliado, como último escalón del estudio',
    'Sospecha de ampollosa paraneoplásica, con inmunofluorescencia directa',
    'Dermatosis perforante y calcinosis cutis del enfermo renal, que tienen histología específica',
    'Sospecha de fibrosis sistémica nefrogenica tras contraste con gadolinio'
  ],
  ventajas: [
    'En la púrpura retiforme demuestra trombosis difusa de vasos dérmicos SIN vasculitis',
    'En la calcinosis cutis muestra material homogéneo azulado, confirmable con la tinción de Von Kossa',
    'En la dermatosis perforante muestra tapones queratosicos en copa y eliminación transepidermica',
    'En la oxalosis muestra cristales de oxalato cálcico, refringentes bajo luz polarizada'
  ],
  limitaciones: [
    'En la mayoría de los signos de este módulo la biopsia no añade nada: el diagnóstico es el de la enfermedad sistémica',
    'En el prurito es el último escalón, no el primero',
    'En las ampollosas, lo que orienta a paraneoplasia es la inmunofluorescencia NEGATIVA, que es un resultado fácil de malinterpretar como "normal"',
    'La histología de las púrpuras pigmentarias crónicas es inespecífica y rara vez cambia la conducta'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección',
    'Evitar biopsiar sobre una zona necrótica o sobreinfectada, sobre todo en la calcifilaxis',
    'En el paciente frágil, valorar antes si el resultado va a cambiar la conducta',
    'No retrasar el tratamiento de una calcifilaxis o una mucormicosis esperando la histología'
  ]
};

export const escalaRefs = {
  'Morfología de la púrpura (calculadora disponible)': [1],
  'Prurito: estudio escalonado (calculadora disponible)': [2],
  'Criterios de Curth': [2],
  'Señales de acantosis nigricans paraneoplásica': [2],
  'Señales de ampollosa paraneoplásica': [2],
  'El mapa de derivación': [1, 2]
};

export const escalaCalc = {
  'Morfología de la púrpura (calculadora disponible)': 'purpura-mecanismo',
  'Prurito: estudio escalonado (calculadora disponible)': 'prurito-estudio',
  'El mapa de derivación': 'signo-a-donde'
};

export const compGroups = [
  { title: 'Signos que se ven primero', items: ['Púrpura: la morfología dice el mecanismo', 'Prurito sin lesión primaria: el estudio escalonado'] },
  { title: 'Por aparato', items: ['La piel del diabético', 'La piel del enfermo renal', 'La piel del enfermo digestivo', 'Signos endocrinos: tiroides, suprarrenal e hipófisis', 'Xantomas y depósitos: lo que delatan'] },
  { title: 'Lo que no hay que pasar por alto', items: ['Signos paraneoplásicos: cuando la piel anuncia un tumor', 'Signos de enfermedad reumatologica'] }
];

export const complicacionesIntro = 'Las fichas de este módulo son SIGNOS, no enfermedades, y cada una termina en la misma línea: a donde lleva. Las dos primeras son los dos signos que más veces aparecen delante sin diagnóstico, la púrpura y el prurito, y las dos se resuelven con un método más que con un dato: la morfología en una y el escalonado en la otra. Las cinco del medio van por aparato, y son las que convierten una exploración de rutina en una sospecha concreta. Las dos últimas son las que no se pueden pasar por alto: los signos paraneoplásicos, donde la piel puede ganar meses, y los reumatológicos, que están aquí porque ese bloque del temario todavía no se ha construido.';

export const categories = [
  { id: 'definicion', label: 'Como se usa' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Marcos' },
  { id: 'complicaciones', label: 'Signos' },
  { id: 'seguimiento', label: 'Reglas de uso' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'UN SIGNO EN LA PIEL', color: '#6b5a8c', target: 'definicion' },
  branches: [
    { title: 'Purpura', sub: 'La morfología dice el mecanismo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Palpable', sub: 'Vasculitis', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Retiforme', sub: 'Trombosis &middot; no espera', color: '#7a2a2a', target: 'complicaciones' },
      { title: 'Petequias', sub: 'Plaquetas de 10.000 o menos', color: '#a1442e', target: 'complicaciones' }
    ] },
    { title: 'Prurito sin lesión', sub: 'Fármacos, luego panel básico', color: '#5a7a8a', target: 'complicaciones' },
    { title: 'Por aparato', sub: 'De la piel al órgano', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Diabetes', sub: 'La acantosis precede al diagnóstico', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Riñon', sub: 'Prurito 50-90% &middot; calcifilaxis', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Digestivo', sub: 'Eritema nodoso sigue la actividad', color: '#5c7a3a', target: 'complicaciones' },
      { title: 'Endocrino', sub: 'Addison, Cushing, ACTH ectópico', color: '#b05a2e', target: 'complicaciones' }
    ] },
    { title: 'No pasarlo por alto', sub: 'La piel gana meses', color: '#7a3a6b', target: 'complicaciones', leaves: [
      { title: 'Paraneoplasicos', sub: 'Curth &middot; acantosis súbita', color: '#7a3a6b', target: 'clasificacion' },
      { title: 'Reumatologicos', sub: 'Sin bloque propio todavía', color: '#9c3a52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [2], no_invasivos: [1, 2], imagen: [2], biopsia: [1, 2] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['mapa-derivacion'];
export const figurasClasificacion = ['purpura-arbol', 'paraneoplasicos'];

export const figuras = {
  'mapa-derivacion': {
    titulo: 'El mapa: de un signo a un tema de la app',
    fuente: 'Sampaio AL, et al. An Bras Dermatol 2021;96(6):655-671 y Leal JM, et al. An Bras Dermatol 2021;96(6):672-687. Los destinos son temas de esta aplicacion.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Si ves...</th><th>Busca...</th><th>Con que frecuencia</th><th>Sigue en</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Púrpura palpable</td><td>Vasculitis</td><td>&mdash;</td><td>Ficha de púrpura, aquí</td></tr>
            <tr><td class="figure-org">Púrpura retiforme dolorosa</td><td>Trombosis &middot; antifosfolípido &middot; calcifilaxis</td><td>Calcifilaxis: 1-4% en diálisis</td><td>Trastornos de la coagulación</td></tr>
            <tr><td class="figure-org">Petequias</td><td>Trombocitopenia</td><td>Típicas con 10.000 o menos</td><td>Alteraciones plaquetarias</td></tr>
            <tr><td class="figure-org">Púrpura al pellizcar</td><td>Amiloidosis de cadenas ligeras</td><td>&mdash;</td><td>Mieloma múltiple</td></tr>
            <tr><td class="figure-org">Hemorragia perifolicular</td><td>Escorbuto (vitamina C)</td><td>&mdash;</td><td>Soporte nutricional</td></tr>
            <tr><td class="figure-org">Acantosis nigricans</td><td>Hiperinsulinemia; si es súbita en delgado, adenocarcinoma gástrico</td><td>Puede preceder al diagnóstico con HbA1c normal</td><td>Diabetes mellitus</td></tr>
            <tr><td class="figure-org">Infecciones cutáneas de repetición</td><td>Diabetes</td><td>&mdash;</td><td>Diabetes mellitus</td></tr>
            <tr><td class="figure-org">Prurito en diálisis</td><td>Enfermedad renal crónica</td><td><span class="figure-tag">50-90%</span></td><td>Ficha renal, aquí</td></tr>
            <tr><td class="figure-org">Ampollas en dorso de manos en diálisis</td><td>Porfiria cutánea tarda</td><td>1-18% en hemodiálisis</td><td>Porfirias</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Enfermedad inflamatoria intestinal, sarcoidosis, estreptococo</td><td>15% del Crohn, 10% de la colitis</td><td>Módulo 78</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso o Sweet</td><td>EII, hematológico, artritis</td><td>&mdash;</td><td>Módulo 78</td></tr>
            <tr><td class="figure-org">Xantoma estriado palmar</td><td>Colesterol Y triglicéridos altos</td><td>&mdash;</td><td>Dislipidemias</td></tr>
            <tr><td class="figure-org">Xantoma plano difuso</td><td>Paraproteinemia</td><td>&mdash;</td><td>Mieloma múltiple</td></tr>
            <tr><td class="figure-org">Hiperpigmentación difusa</td><td>Insuficiencia suprarrenal; si es muy intensa, ACTH ectópico</td><td>&mdash;</td><td>Cáncer de pulmón si es ectópico</td></tr>
            <tr><td class="figure-org">Ampollosa con mucositis e IFD negativa</td><td>Pénfigo paraneoplásico &middot; linforreticular</td><td>&mdash;</td><td>Ampollosas autoinmunes</td></tr>
            <tr><td class="figure-org">Lesión pigmentada que cambia</td><td>Melanoma</td><td>&mdash;</td><td>Módulo 79</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Así se usa el módulo: se entra por la primera columna y se sale por la última. Lo que la tabla NO hace es contar cada enfermedad, porque eso ya esta hecho en el tema de destino, y repetirlo sería duplicar nueve temas. Si el destino que buscas no aparece, escribe su nombre en el <strong>buscador global</strong> de la app, que cubre todos los temas, los protocolos y la valoración preoperatoria.</div>`
  },
  'purpura-arbol': {
    titulo: 'Púrpura: de la morfología al mecanismo',
    fuente: 'Sampaio AL, Bressan AL, Vasconcelos BN, Gripp AC. Skin manifestations associated with systemic diseases - Part I. An Bras Dermatol 2021;96(6):655-671.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lo que se ve</th><th>Mecanismo</th><th>Que hay detrás</th><th>Que se pide</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Petequias</td><td rowspan="2" style="vertical-align:middle;">Hemorragia simple</td><td>Trombocitopenia: típicas con 10.000 o menos, posibles por debajo de 50.000</td><td>Hemograma y frotis</td></tr>
            <tr><td class="figure-org">Equimosis tras traumatismo mínimo</td><td>Disfunción plaquetaria, o tejido conectivo defectuoso</td><td>Función plaquetaria; revisar corticoides</td></tr>
            <tr><td class="figure-org">Púrpura PALPABLE</td><td>Inflamación del vaso</td><td><span class="figure-tag dys">Vasculitis</span>, con la leucocitoclástica a la cabeza; si es por inmunocomplejos, en zonas declives</td><td>Autoinmunidad, crioglobulinas, biopsia</td></tr>
            <tr><td class="figure-org">Púrpura RETIFORME dolorosa y aguda</td><td>Oclusión con inflamación mínima</td><td><span class="figure-tag fail">Trombosis</span>: antifosfolípido y vasculopatías trombóticas; en diálisis, calcifilaxis</td><td>Anticuerpos antifosfolipidicos; calcio, fósforo y PTH</td></tr>
            <tr><td class="figure-org">Púrpura que sale al PELLIZCAR</td><td rowspan="2" style="vertical-align:middle;">Extravascular</td><td>Amiloidosis de cadenas ligeras</td><td>Proteinograma e inmunoelectroforesis</td></tr>
            <tr><td class="figure-org">Hemorragia PERIFOLICULAR</td><td>Escorbuto</td><td>Historia dietética; vitamina C</td></tr>
            <tr><td class="figure-org">Petequias sobre las clavículas</td><td>Pico de presión intravascular</td><td>Parto, tos, vómitos, llanto, torniquete</td><td>Nada: es mecánico</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las dos maniobras que más rinden están en la tabla y no cuestan nada: <strong>palpar</strong> (si se palpa, es vasculitis) y <strong>pellizcar</strong> (si sale púrpura, es amiloidosis). Y la fila que no admite esperar es la retiforme dolorosa de inicio agudo, porque es oclusión y no inflamación: en la histología se ve trombosis difusa de los vasos dérmicos <strong>sin</strong> vasculitis. La última fila esta para no estudiar lo que no hay que estudiar.</div>`
  },
  'paraneoplasicos': {
    titulo: 'Cuando la piel anuncia un tumor',
    fuente: 'Leal JM, de Souza GH, Marsillac PF, Gripp AC. Skin manifestations associated with systemic diseases - Part II. An Bras Dermatol 2021;96(6):672-687.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Signo cutáneo</th><th>Tumor al que apunta</th><th>Donde dirigir el estudio</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Acantosis nigricans súbita, en no obeso y sin endocrinopatía</td><td>Adenocarcinoma GÁSTRICO sobre todo; más del 95% son adenocarcinomas</td><td>Abdomen: digestivo y genitourinario</td></tr>
            <tr><td class="figure-org">Síndrome de Bazex (erupción psoriasiforme acra)</td><td>Carcinoma EPIDERMOIDE de la via aerodigestiva superior</td><td>Cabeza, cuello y pelvis; suele haber adenopatías cervicales</td></tr>
            <tr><td class="figure-org">Pénfigo paraneoplásico</td><td>Sistema LINFORRETICULAR: Castleman, linfoma no hodgkiniano, timoma, leucemia linfocítica crónica</td><td>Hematología; vigilar afectación bronquial</td></tr>
            <tr><td class="figure-org">Penfigoide cicatricial antiepiligrina</td><td>Adenocarcinomas</td><td>Según la clínica</td></tr>
            <tr><td class="figure-org">Dermatitis herpetiforme</td><td>Linfoma intestinal (riesgo relativo aumentado, como en la celiaquía)</td><td>Digestivo</td></tr>
            <tr><td class="figure-org">Eritema necrolitico migratorio</td><td>Glucagonoma</td><td>Páncreas</td></tr>
            <tr><td class="figure-org">Hiperpigmentación más intensa que en un Cushing</td><td>ACTH ectópico: carcinoma microcitico de pulmón</td><td>Tórax</td></tr>
            <tr><td class="figure-org">Eritrodermia sin causa</td><td>Es rara y se asocia a malignidad</td><td>Estudio amplio</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Antes de lanzar un estudio oncológico por una dermatosis, los <strong>criterios de Curth</strong> sirven para juzgar si la asociación es creible, y lo que más rinde de ellos es la cronología: que las dos cosas empiecen a la vez y que la piel mejore al tratar el tumor. El contraejemplo esta en la propia revisión: la porfiria cutánea tarda se ha relacionado con tumores hepáticos, pero la asociación parece <strong>casual</strong>, porque la hepatitis C es factor de riesgo de las dos cosas a la vez. En las ampollosas, las dos pistas de paraneoplasia son la inmunofluorescencia directa <strong>negativa</strong> y la mucositis exuberante.</div>`
  }
};
