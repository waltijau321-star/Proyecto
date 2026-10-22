// topics/manifestaciones-cutaneas-sistemicas/content.js - Modulo 81: Manifestaciones cutaneas de
// enfermedad sistemica.
// Fuentes: revision en dos partes de Anais Brasileiros de Dermatologia (Sampaio AL, et al. 2021,
// parte I: reumatologicas, vasculares y granulomatosas; Leal JM, et al. 2021, parte II:
// endocrino-metabolicas, cardiovasculares, renales, digestivas, oncologicas y prurito).
// QUE ES ESTE MODULO: no es un tema de enfermedad, es un INDICE DE DERIVACION. Cada ficha es un
// SIGNO o una familia de signos, no un diagnostico, y termina diciendo a donde lleva: que hay que
// buscar, con que frecuencia aparece esa asociacion y que tema de la app continua la historia.
// Se escribio asi a proposito, porque el catalogo ya esta repartido por otros nueve temas y
// repetirlo no a&#241;adiria nada.
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
  titulo: 'Manifestaciones cutaneas de enfermedad sistemica',
  subtitulo: 'Modulo 81 &middot; Dermatologia',
  accent: '#6b5a8c',
  accentDim: '#8a7aa8'
};

export const definicionText = `<p style="margin:0 0 14px;">Este modulo funciona distinto de todos los demas de la app. No ense&#241;a una enfermedad: es un <strong>indice de derivacion</strong>. La piel ense&#241;a por fuera lo que pasa por dentro, y con frecuencia el signo aparece <strong>antes</strong> que el diagnostico, de modo que la pregunta no es nunca "&#191;que lesion es esta?" sino <strong>"&#191;a que esta apuntando y a donde voy ahora?"</strong>.</p>
<p style="margin:0 0 14px;">Por eso cada ficha es un <strong>SIGNO</strong> o una familia de signos, no un diagnostico. Cada una dice tres cosas y en este orden: que hay que buscar, con que frecuencia aparece esa asociacion, y <strong>que tema de la app continua la historia</strong>. Cuando el destino es un tema ya construido, se nombra, y el buscador global lo encuentra escribiendo ese nombre. Un signo bien reconocido no es el final del trabajo: es la indicacion para empezarlo.</p>
<p style="margin:0 0 14px;">Y una advertencia sobre lo que este modulo NO hace, porque es lo que lo mantiene util. Todo lo que tiene tema propio se enlaza y no se repite: el <strong>pioderma gangrenoso</strong>, el <strong>sindrome de Sweet</strong> y el <strong>eritema nodoso</strong> viven en el modulo 78; la piel del <strong>inmunodeprimido</strong> y los carcinomas queratinociticos, en el 80; las <strong>lesiones elementales</strong>, en Exploracion de piel y faneras; las reacciones a <strong>farmacos</strong>, en el 77; los <strong>estigmas hepaticos</strong>, en Cirrosis; el sindrome de <strong>Lofgren</strong>, en Sarcoidosis. Lo que si se queda aqui, porque todavia no tiene bloque propio en el temario, son los signos cutaneos de las enfermedades <strong>reumatologicas</strong>.</p>`;

export const bibliografia = [
  'Sampaio AL, Bressan AL, Vasconcelos BN, Gripp AC. Skin manifestations associated with systemic diseases - Part I. An Bras Dermatol. 2021;96(6):655-671. doi:10.1016/j.abd.2021.02.008.',
  'Leal JM, de Souza GH, Marsillac PF, Gripp AC. Skin manifestations associated with systemic diseases - Part II. An Bras Dermatol. 2021;96(6):672-687. doi:10.1016/j.abd.2021.06.003.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Cuando la piel va por delante del diagnostico',
      tituloB: 'Los signos que obligan a moverse hoy',
      compensada: 'Son los signos que aparecen ANTES de que la enfermedad se conozca, y por eso valen tanto. La ACANTOSIS NIGRICANS precede con frecuencia al diagnostico de diabetes y puede aparecer en un estado de hiperinsulinemia con hemoglobina glucosilada todavia normal. Las INFECCIONES CUTANEAS DE REPETICION son motivo para investigar una diabetes. Los XANTOMAS ESTRIADOS PALMARES solo aparecen con cifras altas de colesterol Y de trigliceridos a la vez. El PRURITO sin lesion primaria obliga a un estudio escalonado que termina encontrando una enfermedad sistemica en una parte de los casos. Y la HIPERPIGMENTACION difusa de piel, mucosas y pelo, con perdida de vello axilar y pubico, es la presentacion de la insuficiencia suprarrenal primaria.',
      descompensada: 'Lo que no puede esperar a la proxima consulta. PURPURA RETIFORME dolorosa y de inicio agudo: es el patron del sindrome antifosfolipidico y de las vasculopatias tromboticas, y en el enfermo renal en dialisis, de la CALCIFILAXIS, que tiene alta morbilidad por sepsis de las areas necroticas. PETEQUIAS con recuento de plaquetas por debajo de 10.000. PURPURA PALPABLE, que es vasculitis leucocitoclastica hasta demostrar lo contrario. Una ampollosa con MUCOSITIS exuberante e inmunofluorescencia directa negativa, que apunta a penfigo paraneoplasico y a una neoplasia linforreticular. Una ACANTOSIS NIGRICANS de aparicion SUBITA en una persona NO obesa y sin endocrinopatia, que obliga a buscar un adenocarcinoma gastrico. Y en el diabetico con cetoacidosis, la sinusitis con secrecion serosanguinolenta que progresa a edema periorbitario y necrosis: mucormicosis rinocerebral.'
    },
    laboratorio: [
      { prueba: 'Panel de primera linea del prurito sin lesion primaria', utilidad: 'Es el estudio basico que propone la revision cuando no se identifica una dermatosis y ya se han revisado los farmacos: hemograma completo, funcion renal, funcion hepatica, funcion tiroidea, hierro y ferritina, proteina C reactiva y velocidad de sedimentacion. Con eso se cubren las causas sistemicas mas frecuentes y se decide si hace falta seguir.' },
      { prueba: 'Panel de segunda linea del prurito', utilidad: 'Si el primero no explica nada: serologia de VIH, serologias de hepatitis B y C, imagen de torax y abdomen, inmunoelectroforesis de proteinas, hormona paratiroidea, colesterol y fracciones, y biopsia cutanea. El orden importa, porque pedirlo todo de entrada en un prurito es caro y rinde poco.' },
      { prueba: 'Revision de farmacos antes de cualquier analitica', utilidad: 'En el prurito, el paso previo a pedir nada: los farmacos pueden producirlo por alergia, por colestasis, por xerosis, por acumulo de metabolitos en piel o nervios y por fototoxicidad. Si hay un sospechoso, se suspende de 4 a 6 SEMANAS; si el prurito cede, el vinculo causal se refuerza y se cambia el farmaco.' },
      { prueba: 'Glucemia y hemoglobina glucosilada', utilidad: 'Ante acantosis nigricans, infecciones cutaneas de repeticion, necrobiosis lipoidica, granuloma anular, ampollas sin inflamacion en los pies o colagenosis perforante. Aviso util: la acantosis nigricans puede aparecer con hiperinsulinemia y hemoglobina glucosilada todavia NORMAL, de modo que un valor normal no cierra el caso.' },
      { prueba: 'Perfil lipidico completo', utilidad: 'Ante cualquier xantoma. El estriado palmar solo aparece con colesterol Y trigliceridos altos. El xantoma plano difuso es la excepcion que cambia el estudio: aparece en personas con dislipidemia o SIN ella, y con frecuencia tienen una PARAPROTEINEMIA, incluida la del mieloma multiple, de modo que ahi lo que hay que pedir es un proteinograma.' },
      { prueba: 'Proteinograma e inmunoelectroforesis', utilidad: 'Ante xantoma plano difuso, purpura que se induce al pellizcar la piel (amiloidosis de cadenas ligeras), escleredema de Buschke y purpura hipergammaglobulinemica de Waldenstrom. Tambien forma parte del panel de segunda linea del prurito.' },
      { prueba: 'Calcio, fosforo y paratohormona en el enfermo renal', utilidad: 'La calcifilaxis aparece en el 1 al 4% de los pacientes con enfermedad renal cronica en hemodialisis que tienen hiperparatiroidismo secundario y un producto calcio-fosforo elevado, por encima de 60 a 70. La calcinosis cutis, en el 1%, por aumento de la relacion calcio-fosforo.' },
      { prueba: 'Porfirinas en orina, heces y suero', utilidad: 'Ante ampollas y erosiones en el dorso de las manos de un paciente en hemodialisis. La porfiria cutanea tarda aparece en el 1 al 18% de ellos porque las porfirinas no se dializan bien, y el hierro serico alto y la hepatitis C aumentan la predisposicion. Si las porfirinas son normales, es una PSEUDOPORFIRIA, que tiene la misma clinica sin hipertricosis ni hiperpigmentacion facial y la provocan amiodarona, furosemida, tetraciclinas, isotretinoina, naproxeno o el acido nalidixico.' }
    ],
    no_invasivos: [
      { metodo: 'Morfologia de la purpura (calculadora disponible)', interpretacion: 'La forma de la purpura dice el MECANISMO, y el mecanismo dice el estudio. Hemorragia simple: petequias por trombocitopenia o disfuncion plaquetaria. Hemorragia con inflamacion del vaso: purpura PALPABLE, que es vasculitis. Hemorragia oclusiva con inflamacion minima: purpura RETIFORME, estrellada y dolorosa, que es trombosis. Es la clasificacion mas rentable de todo el modulo porque se hace mirando.', cutoff: 'Palpable es vasculitis; retiforme es trombosis' },
      { metodo: 'Umbrales de plaquetas de la purpura', interpretacion: 'Las petequias pueden aparecer con plaquetas por debajo de 50.000 por mm3, pero lo tipico es verlas con 10.000 o menos. La disfuncion plaquetaria, en cambio, da mas equimosis ante traumatismos minimos que petequias. La trombocitopenia grave deteriora la adhesion endotelial y aumenta la permeabilidad vascular.', cutoff: 'Petequias tipicas con 10.000 o menos' },
      { metodo: 'Criterios de Curth', interpretacion: 'Son los que permiten juzgar si la asociacion entre una dermatosis y una neoplasia es verdadera o casual, y la revision los usa como marco de todo el apartado oncologico. En la practica, lo que mas rinde de ellos es la cronologia: que las dos cosas empiecen a la vez y que la piel mejore al tratar el tumor.', cutoff: 'Marco para juzgar si la asociacion es real' },
      { metodo: 'Cuando una acantosis nigricans es paraneoplasica', interpretacion: 'Tres se&#241;ales juntas: aparicion SUBITA, en una persona NO obesa, y sin endocrinopatia que la explique. Lo mas frecuente entonces es el adenocarcinoma GASTRICO, aunque puede asociarse a otros tumores de la cavidad abdominal, digestivos y genitourinarios; en mas del 95% de los casos el tumor es un adenocarcinoma.', cutoff: 'Subita + no obeso + sin endocrinopatia' },
      { metodo: 'Cuando una ampollosa es paraneoplasica', interpretacion: 'Dos pistas que la propia revision da: la inmunofluorescencia directa NEGATIVA (o con depositos lineales de IgA en la membrana basal) y la presencia de lesiones MUCOSAS exuberantes. El penfigo paraneoplasico se asocia a neoplasias del sistema linforreticular (Castleman, linfoma no hodgkiniano, timoma, sarcoma de celulas dendriticas foliculares, leucemia linfocitica cronica) y puede dar lesiones bronquiales con insuficiencia respiratoria y mal pronostico.', cutoff: 'IFD negativa + mucositis exuberante' },
      { metodo: 'Prurito: agudo frente a cronico (calculadora disponible)', interpretacion: 'Agudo es el de hasta 6 semanas y se relaciona mas con urticaria, reacciones a farmacos e infecciones. Cronico es el de mas de 6 semanas y se asocia mas a enfermedades cutaneas y sistemicas; ademas es mas refractario y, al entrar en el ciclo picor-rascado, genera lesiones secundarias (excoriaciones, cambios de pigmentacion, liquenificacion) que confunden el cuadro.', cutoff: '6 semanas separa agudo de cronico' }
    ],
    imagen: [
      { modalidad: 'Radiografia simple de la lesion', hallazgos: 'En la calcinosis cutis los depositos se ven como material radioopaco en el tejido subcutaneo. Es una comprobacion barata ante nodulos indurados que ulceran y eliminan material blanquecino en un paciente en dialisis.' },
      { modalidad: 'Imagen de torax y abdomen', hallazgos: 'Forma parte del panel de SEGUNDA linea del prurito, cuando el estudio basico no explica nada. Tambien es lo que corresponde ante una acantosis nigricans con las tres se&#241;ales de paraneoplasia, dirigida al abdomen, y ante un sindrome de Bazex, dirigida a cabeza, cuello y pelvis.' },
      { modalidad: 'Lo que NO hay que pedir de entrada', hallazgos: 'Imagen en un prurito antes de haber revisado los farmacos y hecho el panel basico. La revision ordena el estudio en escalones justamente para no empezar por ahi: primero la anamnesis y la exploracion completa (incluidas las regiones genital, interdigital, ocular y del pezon), despues los farmacos, despues la analitica basica, y solo entonces la imagen.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las escalas de este modulo no gradan gravedad: <strong>ordenan la derivacion</strong>. Son cuatro marcos de decision y dos listas de se&#241;ales. Los marcos: la <strong>morfologia de la purpura</strong>, que traduce lo que se ve en un mecanismo y por tanto en un estudio; el <strong>escalonado del prurito</strong>, que impide pedirlo todo de golpe; los <strong>criterios de Curth</strong>, que dicen si una asociacion con una neoplasia es creible; y el <strong>mapa de derivacion</strong>, que es el indice propiamente dicho. Y las dos listas de se&#241;ales son las que convierten un signo banal en una urgencia diagnostica: cuando una acantosis nigricans es paraneoplasica y cuando una ampollosa lo es.`,
    escalas: [
      { nombre: 'Morfologia de la purpura (calculadora disponible)', componentes: 'Aspecto de la lesion (petequia, equimosis, purpura palpable, purpura retiforme), recuento de plaquetas y contexto clinico.', formula: 'Tres mecanismos: hemorragia simple, hemorragia con inflamacion del vaso, y hemorragia oclusiva con inflamacion minima.', interpretacion: 'PETEQUIAS: trombocitopenia (tipicas con 10.000 o menos, posibles por debajo de 50.000) o disfuncion plaquetaria, que da mas equimosis ante traumatismo minimo. PALPABLE: inflamacion del vaso, es decir vasculitis, con la leucocitoclastica como causa importante; si es por inmunocomplejos, predomina en zonas declives. RETIFORME dolorosa y aguda: trombosis, tipica del sindrome antifosfolipidico y otras vasculopatias tromboticas, con trombosis difusa no inflamatoria en la histologia y SIN vasculitis. Y dos extravasculares que se reconocen a ojo: la purpura que se induce al PELLIZCAR la piel, que es amiloidosis de cadenas ligeras, y la hemorragia PERIFOLICULAR, que es escorbuto.' },
      { nombre: 'Prurito: estudio escalonado (calculadora disponible)', componentes: 'Duracion, presencia o no de lesion primaria, farmacos, y resultado de cada escalon.', formula: 'Anamnesis y exploracion completa, revision de farmacos con suspension de 4 a 6 semanas, panel basico, y panel ampliado.', interpretacion: 'El orden es el valor de la escala. Primero buscar una dermatosis primaria explorando TODO, incluidas las regiones genital, interdigital, ocular y del pezon. Si no la hay, revisar farmacos y suspender el sospechoso de 4 a 6 semanas. Si no hay sospechoso, panel basico: hemograma, funcion renal, hepatica y tiroidea, hierro y ferritina, PCR y VSG. Y solo si ese no explica nada, el ampliado: VIH, hepatitis B y C, imagen de torax y abdomen, inmunoelectroforesis, paratohormona, colesterol y biopsia.' },
      { nombre: 'Criterios de Curth', componentes: 'Conjunto de criterios para juzgar la verosimilitud de la asociacion entre una dermatosis y una neoplasia interna.', formula: 'Marco cualitativo, no puntuacion.', interpretacion: 'Lo que hay que llevarse es la idea: no toda dermatosis en un paciente con cancer es paraneoplasica, y la forma de distinguirlo es la cronologia (aparicion simultanea) y el comportamiento (la piel mejora al tratar el tumor y reaparece con la recidiva). La revision los usa como marco de todo el apartado oncologico.' },
      { nombre: 'Se&#241;ales de acantosis nigricans paraneoplasica', componentes: 'Velocidad de aparicion, indice de masa corporal y presencia de endocrinopatia.', formula: 'Las tres se&#241;ales juntas, no por separado.', interpretacion: 'Subita, en persona no obesa y sin endocrinopatia. Entonces lo mas frecuente es el adenocarcinoma gastrico, y mas del 95% de los tumores asociados son adenocarcinomas. En cambio, la acantosis nigricans de las regiones cervical y axilar de un paciente diabetico u obeso, o con ovario poliquistico, no es paraneoplasica: apunta a hiperinsulinemia, y puede preceder al diagnostico de diabetes con hemoglobina glucosilada normal.' },
      { nombre: 'Se&#241;ales de ampollosa paraneoplasica', componentes: 'Resultado de la inmunofluorescencia directa y extension de la afectacion mucosa.', formula: 'Dos pistas que se valoran juntas.', interpretacion: 'Una enfermedad ampollosa es mas probablemente paraneoplasica si la inmunofluorescencia directa es NEGATIVA, o muestra depositos lineales de IgA a lo largo de la membrana basal, y si hay lesiones mucosas exuberantes. El penfigo paraneoplasico se asocia al sistema linforreticular y puede dar afectacion bronquial con insuficiencia respiratoria. Para el resto del grupo, ver el modulo 76 de Ampollosas autoinmunes.' },
      { nombre: 'El mapa de derivacion', componentes: 'Signo cutaneo, enfermedad a la que apunta, frecuencia de la asociacion y tema de la app que continua.', formula: 'Es el indice mismo: un signo, un destino.', interpretacion: 'Es la forma de usar el modulo. Reconocer el signo no es el final: es la indicacion de empezar a buscar, y el mapa dice por donde. Cuando el destino es un tema ya construido, se nombra para que el buscador global lo encuentre; cuando no lo es todavia, se nombra la enfermedad.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Purpura: la morfologia dice el mecanismo',
      color: '#8c3a34',
      definicion: 'Extravasacion de sangre en la piel. Puede ser la expresion de una enfermedad banal y cronica o de una enfermedad que amenaza la vida, y en los dos casos es un signo INESPECIFICO de muchas enfermedades.',
      fisiopatologia: 'Tres mecanismos, y la morfologia los separa: hemorragia simple, hemorragia secundaria a inflamacion del vaso, y hemorragia oclusiva con inflamacion minima. En la mayoria de los casos, una anamnesis detallada y la exploracion, con algunas pruebas de laboratorio, bastan para clasificarla.',
      clinica: 'PETEQUIAS: tipicas con plaquetas de 10.000 o menos, posibles por debajo de 50.000. La disfuncion plaquetaria da mas equimosis tras traumatismos minimos que petequias. Petequias por encima de las claviculas tras un parto, accesos de tos o de vomitos, o llanto intenso en el ni&#241;o: son picos de presion intravascular, y no hay que estudiar nada mas; el torniquete hace lo mismo por encima del punto comprimido. PURPURA PALPABLE: inflamacion del vaso. PURPURA RETIFORME (arboriforme o estrellada), dolorosa y de inicio agudo: oclusion.',
      criterios_dx: 'La clasificacion se hace mirando y palpando. La biopsia confirma: en la retiforme no inflamatoria se ve trombosis difusa de los vasos dermicos SIN vasculitis.',
      laboratorio: 'Hemograma con recuento y frotis, pruebas de coagulacion, y despues lo que dicte el mecanismo: autoinmunidad y crioglobulinas si es palpable, anticuerpos antifosfolipidicos si es retiforme, proteinograma si se induce al pellizcar.',
      dx_diferencial: 'Purpuras pigmentarias cronicas, que afectan a vasos de peque&#241;o calibre de la dermis y dejan la coloracion ocre del hemosiderina: Schamberg (aspecto de pimienta de cayena), Doucas-Kapetanakis, purpura anular telangiectodes de Majocchi y liquen aureus. Y la purpura hipergammaglobulinemica de Waldenstrom, en zonas declives y bajo ropa ajustada, asociada a gammapatias policlonales como las del sindrome de Sjogren y la sarcoidosis.',
      complementarios: 'Las causas EXTRAVASCULARES se reconocen por el contexto: purpura ante traumatismo minimo por tejido conectivo defectuoso (purpura actinica, exceso de corticoide local o sistemico, Ehlers-Danlos, pseudoxantoma elastico) y la amiloidosis de cadenas ligeras, en la que la purpura se induce facilmente al PELLIZCAR la piel. La hemorragia PERIFOLICULAR sugiere escorbuto.',
      tx_medico: 'No hay tratamiento de la purpura: hay tratamiento de su causa. Lo que si hay es una urgencia de clasificacion, porque la retiforme dolorosa y la palpable extensa no admiten esperar.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: trombocitopenia a Alteraciones plaquetarias cuantitativas; trastorno de la coagulacion a Trastornos de la coagulacion y trombofilias y a Coagulacion intravascular diseminada; purpura palpable a vasculitis; retiforme en el enfermo renal a la ficha de la piel del enfermo renal de este mismo modulo; purpura al pellizcar a Mieloma multiple.',
      pronostico: 'Enteramente el de la causa, que es justo lo que justifica clasificarla bien y deprisa.',
      algoritmo: ['Mirar la forma: &#191;petequia, equimosis, palpable o retiforme?', 'Palpar: si se palpa, es vasculitis', '&#191;Retiforme, dolorosa y aguda? Pensar en trombosis y actuar hoy', 'Pedir hemograma con recuento y coagulacion', 'Buscar causas extravasculares: corticoide, piel actinica, pellizco positivo', 'Mirar los foliculos: la hemorragia perifolicular es escorbuto', 'Derivar al tema que corresponda al mecanismo'],
      figura: 'purpura-arbol'
    },
    {
      nombre: 'Prurito sin lesion primaria: el estudio escalonado',
      color: '#5a7a8a',
      definicion: 'Sensacion desagradable que desencadena el deseo de rascarse, cuando la exploracion no encuentra una dermatosis primaria que lo explique.',
      fisiopatologia: 'Puede originarse en la piel por estimulos mecanicos o termicos, o de forma indirecta por mediadores quimicos; en el sistema nervioso periferico por cambios de la inervacion local; o en el central sin estimulo periferico. Los mediadores principales son la histamina, los neuropeptidos, las prostaglandinas, la serotonina, la acetilcolina y la bradicinina.',
      epidemiologia: 'En la enfermedad renal es un sintoma de los mas frecuentes, presente en el 50 al 90% de los casos.',
      clinica: 'Agudo, hasta 6 semanas, mas ligado a urticaria, reacciones a farmacos e infecciones. Cronico, mas de 6 semanas, mas ligado a enfermedades cutaneas y sistemicas, mas refractario y con lesiones secundarias del ciclo picor-rascado: excoriaciones, cambios de pigmentacion y liquenificacion, que a la larga afectan al sue&#241;o, al estado de animo y a la calidad de vida.',
      criterios_dx: 'Caracterizarlo: generalizado o localizado, cuando empezo, como varia a lo largo del dia, que lo intensifica y que lo alivia. Y preguntar por farmacos, viajes recientes, si afecta a otros convivientes, el trabajo, el contacto con animales o alergenos, y los sintomas sistemicos: fiebre, sudoracion nocturna, perdida de peso, dolor abdominal, mareo, artritis o parestesias.',
      laboratorio: 'PRIMER escalon: hemograma, funcion renal, hepatica y tiroidea, hierro y ferritina, PCR y VSG. SEGUNDO escalon, si el primero no explica nada: VIH, hepatitis B y C, imagen de torax y abdomen, inmunoelectroforesis de proteinas, paratohormona, colesterol y fracciones, y biopsia cutanea.',
      complementarios: 'Antes de la analitica, los FARMACOS: pueden producir prurito por alergia, colestasis, xerosis, acumulo de metabolitos en piel o nervios y fototoxicidad. Si hay sospechoso, suspenderlo de 4 a 6 semanas; si cede, el vinculo se refuerza y se cambia.',
      dx_diferencial: 'Causas NEUROLOGICAS que se reconocen por su mapa: neuralgia postherpetica (lesiones secundarias en el dermatoma), notalgia parestesica (placa hiperpigmentada dorsal a la altura de T2-T6) y prurito braquiorradial (en las caras laterales de brazos y hombros). Las generalizadas son polineuropatias: diabetica, carenciales, alcoholismo y autoinmunes. Las centrales son raras: tumores del sistema nervioso central, esclerosis multiple e ictus. Y las PSICOGENAS, que se consideran cuando no hay causa somatica ni cutanea, dura mas de 6 meses, hay relacion temporal con hechos psicologicos, varia con el estres, predomina en reposo y mejora con psicofarmacos o terapia.',
      tx_medico: 'El del prurito neuropatico tiene nombre propio: topico con capsaicina y mentol, y por via oral gabapentina, pregabalina, mirtazapina y paroxetina. Lo demas es tratar la causa.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: funcion renal alterada a Lesion renal aguda y a la ficha renal de este modulo; funcion hepatica alterada a Cirrosis; tiroidea a Hipotiroidismo o a Hipertiroidismo y tiroiditis; ferropenia a Anemia ferropenica; inmunoelectroforesis positiva a Mieloma multiple; adenopatias o sintomas B a Linfomas; y sospecha neurologica a Neuropatias perifericas o Esclerosis multiple.',
      pronostico: 'El prurito cronico es mas refractario y empeora la calidad de vida de forma desproporcionada a su aparente banalidad.',
      algoritmo: ['Explorar TODO, incluidas regiones genital, interdigital, ocular y del pezon', '&#191;Hay dermatosis primaria? Entonces es otro tema', 'Revisar farmacos y suspender el sospechoso 4 a 6 semanas', 'Panel basico: hemograma, renal, hepatico, tiroideo, hierro, PCR y VSG', 'Si no explica nada: panel ampliado con imagen e inmunoelectroforesis', 'Valorar causa neurologica por el MAPA del prurito', 'Dejar la causa psicogena para el final, no para el principio']
    },
    {
      nombre: 'La piel del diabetico',
      color: '#8a5a2e',
      definicion: 'Conjunto de signos cutaneos que acompa&#241;an a la diabetes, algunos de los cuales la PRECEDEN y son por tanto una oportunidad de diagnosticarla antes.',
      clinica: 'ACANTOSIS NIGRICANS: placas hiperpigmentadas intertriginosas, sobre todo cervicales y axilares; precede con frecuencia al diagnostico y puede darse con hemoglobina glucosilada normal, en estado de hiperinsulinemia. NECROBIOSIS LIPOIDICA: empieza como papulas eritematosas y progresa a una placa pardo-amarillenta con centro atrofico y telangiectasias, simetrica y en la cara anterior de las piernas, mas frecuente en mujeres; en el 35% de los casos se ULCERA y se sobreinfecta. BULLOSIS DIABETICORUM: ampollas tensas e INDOLORAS, sin inflamacion alrededor, sobre todo en pies; crecen rapido y curan en semanas; la presenta alrededor del 0,5% de los diabeticos. GRANULOMA ANULAR: papulas que forman placas anulares en dorso de pies y manos o en superficies de extension.',
      epidemiologia: 'Alrededor de una cuarta parte de los pacientes con LIQUEN PLANO tiene diabetes. El escleredema de Buschke, la colagenosis perforante reactiva adquirida y la carotenodermia completan el cuadro.',
      factores_riesgo: ['Diabetes de larga evolucion, en la bullosis', 'Hiperinsulinemia, en la acantosis nigricans', 'Obesidad y ovario poliquistico, tambien en la acantosis', 'Enfermedad renal cronica e hiperuricemia, en la colagenosis perforante', 'Mal control metabolico, en las infecciones'],
      criterios_dx: 'Clinico en casi todos. Lo importante no es el nombre de la lesion sino lo que obliga a hacer: medir la glucemia.',
      complementarios: 'INFECCIONES, que son la parte que mas le toca al internista: las infecciones cutaneas de repeticion son motivo para investigar una diabetes. Estafilococicas (foliculitis, abscesos, impetigo), estreptococicas (ectima, celulitis), fascitis necrosante y su variante perineal, la gangrena de Fournier, de alta mortalidad. OTITIS EXTERNA MALIGNA, invasiva, que empieza asintomatica y da otalgia con supuracion, y en casos graves alcanza el craneo y el sistema nervioso central. Candidiasis cutanea, mucosa y periungueal, y dermatofitosis y onicomicosis. Y la MUCORMICOSIS RINOCEREBRAL, asociada a la cetoacidosis: empieza como sinusitis con secrecion serosanguinolenta y progresa a edema periorbitario, coloracion eritematoviolacea y necrosis de piel y mucosas, con evolucion rapida al sistema nervioso central.',
      dx_diferencial: 'El granuloma anular no es exclusivo del diabetico: tambien se describe en hepatitis, VIH, linfoma y carcinoma. La colagenosis perforante reactiva aparece ademas en la enfermedad renal cronica y en la hiperuricemia.',
      tx_medico: 'El de la diabetes y el de la infeccion que corresponda. La necrobiosis lipoidica tiene curso cronico, aunque a veces mejora sola; la mayoria de los granulomas anulares cura espontaneamente.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Diabetes mellitus en todos los casos, y a Cetoacidosis diabetica y estado hiperosmolar si hay mucormicosis. La acantosis nigricans con las tres se&#241;ales de alarma lleva en cambio a la ficha de signos paraneoplasicos de este modulo.',
      algoritmo: ['Ante cualquiera de estos signos, medir glucemia y hemoglobina glucosilada', 'Recordar que la acantosis puede preceder al diagnostico con HbA1c normal', 'Infecciones cutaneas de repeticion: investigar diabetes', 'En cetoacidosis con sinusitis: pensar en mucormicosis y actuar deprisa', 'Comprobar si la acantosis cumple las tres se&#241;ales de paraneoplasia', 'Derivar a Diabetes mellitus']
    },
    {
      nombre: 'La piel del enfermo renal',
      color: '#3d5a73',
      definicion: 'Signos cutaneos de la enfermedad renal cronica, sobre todo en el paciente en hemodialisis, donde son muy frecuentes y algunos marcan el pronostico.',
      epidemiologia: 'Por frecuencia: PRURITO en el 50 al 90%, XEROSIS en el 50 al 80% de los que estan en hemodialisis, dermatosis perforante adquirida en el 4,5 al 10%, porfiria cutanea tarda y pseudoporfiria en el 1 al 18% cada una, calcifilaxis en el 1 al 4%, calcinosis cutis en el 1% y escarcha uremica en el 1 al 3%.',
      clinica: 'CALCIFILAXIS: es la que no puede esperar. Empieza pareciendo una livedo reticularis y progresa a placas de purpura retiforme simetricas y EXTREMADAMENTE dolorosas, con ulceracion y necrosis, en zonas de mayor grasa (gluteos, abdomen, muslos y piernas), mas frecuente en mujeres. CALCINOSIS CUTIS: papulas, placas o nodulos indurados que ulceran y eliminan material blanco-amarillento. DERMATOSIS PERFORANTE (enfermedad de Kyrle): nodulos o papulas muy pruriginosas, hipercromicas, umbilicadas y con hiperqueratosis central, en superficies de extension. ESCARCHA UREMICA: con urea de 250 a 300 mg/dL, se elimina por el sudor y queda en la superficie al evaporarse el agua.',
      fisiopatologia: 'La calcifilaxis es una vasculopatia trombotica por deposito de calcio en la capa media de las arteriolas, con hiperplasia de la intima. La porfiria cutanea tarda aparece porque las porfirinas no se dializan bien y se acumulan.',
      factores_riesgo: ['Hiperparatiroidismo secundario y producto calcio-fosforo por encima de 60 a 70', 'Trombofilia: alteraciones de proteina C y S, anticuerpos antifosfolipidicos', 'Hipercalcemia y quelantes de fosforo con calcio', 'Reposicion de vitamina D e hiperfosfatemia', 'Diabetes, obesidad, corticoides sistemicos, inmunosupresion y traumatismo'],
      criterios_dx: 'La calcinosis se ve en la radiografia como depositos radioopacos y en la histologia como material homogeneo azulado, confirmable con Von Kossa. La dermatosis perforante tiene histologia especifica: acantosis, tapones queratosicos en copa y eliminacion transepidermica de detritus.',
      laboratorio: 'Calcio, fosforo y paratohormona. Porfirinas si hay ampollas en el dorso de las manos; si son normales, es pseudoporfiria, y entonces hay que mirar la lista de farmacos: amiodarona, furosemida, tetraciclinas, isotretinoina, naproxeno, acido nalidixico.',
      dx_diferencial: 'La fibrosis sistemica nefrogenica, ligada al contraste de GADOLINIO de la resonancia, que da placas induradas simetricas y puede llegar a contracturas; su diferencial es con el escleromixedema, la esclerosis sistemica y la fascitis eosinofilica. Y la oxalosis, que imita a la calcifilaxis con livedo y purpura retiforme, aunque sus lesiones son mas superficiales y menos dolorosas.',
      tx_medico: 'El de la causa metabolica y el soporte de la herida. La discromia (pigmentacion pardo-grisacea por hemosiderina, amarillenta por carotenos y urocromos) no tiene tratamiento propio.',
      pronostico: 'La calcifilaxis tiene alta morbilidad, habitualmente por sepsis a partir de la infeccion secundaria de las areas necroticas. La fibrosis sistemica nefrogenica tiene una evolucion fulminante con afectacion multiorganica en el 5% de los casos.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Lesion renal aguda y al Sindrome cardiovascular-renal-metabolico; la porfiria cutanea tarda, a Porfirias; el prurito, a la ficha de prurito de este modulo; y la purpura retiforme, a la de purpura.',
      algoritmo: ['En el paciente en dialisis, mirar la piel aunque no la mencione', '&#191;Purpura retiforme dolorosa? Calcifilaxis: urgente', 'Pedir calcio, fosforo y paratohormona', '&#191;Ampollas en el dorso de las manos? Porfirinas', 'Si las porfirinas son normales, revisar la lista de farmacos de la pseudoporfiria', '&#191;Resonancia con gadolinio reciente? Pensar en fibrosis sistemica nefrogenica', 'Tratar el prurito y la xerosis, que son lo mas frecuente y lo mas olvidado']
    },
    {
      nombre: 'La piel del enfermo digestivo',
      color: '#5c7a3a',
      definicion: 'Signos cutaneos de la enfermedad inflamatoria intestinal y de los sindromes de malabsorcion, que son los dos grupos digestivos con mas expresion en la piel.',
      epidemiologia: 'ERITEMA NODOSO en hasta el 15% de los pacientes con enfermedad de Crohn y el 10% con colitis ulcerosa; hasta el 90% de los casos de eritema nodoso se asocia a ACTIVIDAD de la enfermedad intestinal, aunque su gravedad no sea necesariamente proporcional. Estomatitis aftosa en mas del 7% de todos los pacientes.',
      clinica: 'Ulceras orales, que pueden ser lesiones por contiguidad con la misma histologia que la enfermedad intestinal o una reaccion a ella. PIOSTOMATITIS VEGETANTE: pustulas friables, ulceras y placas vegetantes amarillentas en mucosa oral; si afecta tambien a la piel se llama piodermatitis-piostomatitis vegetante. ERITEMA NODOSO, PIODERMA GANGRENOSO y, mas raramente, SINDROME DE SWEET. Y el BADAS, sindrome de dermatosis-artritis asociada al intestino, con episodios recurrentes de fiebre, dolor abdominal y artritis, y maculas, papulas, vesiculas y pustulas.',
      fisiopatologia: 'En el BADAS, la proliferacion bacteriana excesiva libera antigenos y se depositan inmunocomplejos. Las vasculitis asociadas son frecuentes y se presentan con purpura palpable, ulceras, nodulos, vasculitis digital y exantema maculopapular; los subtipos mas descritos son la leucocitoclastica, la necrotizante y la linfocitica, y entre las necrotizantes, la panarteritis nodosa.',
      complementarios: 'MALABSORCION, que es el otro gran grupo y se reconoce por signos muy concretos: hiperqueratosis folicular o frinodermia por deficit de VITAMINA A; queilitis angular por deficit de VITAMINA B12; escorbuto por deficit de VITAMINA C; y acrodermatitis enteropatica por deficit de ZINC.',
      dx_diferencial: 'Con el advenimiento de los inmunobiologicos aparecen ademas alteraciones PARADOJICAS tras el uso de terapia anti-TNF, como la psoriasis, que no son de la enfermedad sino del tratamiento.',
      tx_medico: 'El de la enfermedad intestinal. Que hasta el 90% de los eritemas nodosos siga la actividad intestinal es la razon practica: controlar el intestino suele arreglar la piel.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: el eritema nodoso, el pioderma gangrenoso y el Sweet, al modulo 78 de Eritemas reactivos, paniculitis y dermatosis neutrofilicas, que los desarrolla enteros. Los signos carenciales, a Soporte nutricional del critico y a Anemia megaloblastica si hay deficit de B12. Y la dermatitis herpetiforme, a Ampollosas autoinmunes y a la celiaquia.',
      algoritmo: ['Ante eritema nodoso, preguntar por sintomas digestivos', 'Ante ulceras orales de repeticion, pensar en enfermedad inflamatoria intestinal', 'Buscar los signos carenciales: frinodermia, queilitis angular, escorbuto, acrodermatitis', 'Ante purpura palpable en un paciente con colitis, pensar en vasculitis asociada', 'Si esta con anti-TNF, considerar la psoriasis paradojica', 'Derivar al modulo 78 para el manejo de las dermatosis neutrofilicas']
    },
    {
      nombre: 'Signos endocrinos: tiroides, suprarrenal e hipofisis',
      color: '#b05a2e',
      definicion: 'Signos cutaneos que delatan una endocrinopatia, en varios de los cuales la piel es la primera pista.',
      clinica: 'ENFERMEDAD DE ADDISON: hiperpigmentacion DIFUSA de piel, pelo y mucosas, con perdida de vello axilar y pubico y bandas ungueales longitudinales hiperpigmentadas. SINDROME DE CUSHING: cara de luna llena, giba dorsocervical, cuello ancho y corto por la grasa supraclavicular, exoftalmos por grasa retroorbitaria, hematomas espontaneos, retraso de cicatrizacion, atrofia cutanea, estrias de distension, hiperpigmentacion, acantosis nigricans y acne corticoideo. FEOCROMOCITOMA: su unica manifestacion cutanea relevante es el rubor PAROXISTICO muy llamativo en cara, torax y extremidades superiores. HIPOPITUITARISMO: la piel y el tejido subcutaneo se adelgazan, el pelo se hace ralo y la piel se vuelve palida o amarillenta; las lesiones cutaneas pueden ser la PRIMERA indicacion para sospecharlo.',
      epidemiologia: 'En el hipotiroidismo se han descrito asociadas varias enfermedades autoinmunes: dermatitis herpetiforme, alopecia areata, vitiligo y urticaria autoinmune. El vitiligo acompa&#241;a con frecuencia a otras autoinmunes, entre ellas la diabetes insulinodependiente y la enfermedad tiroidea.',
      criterios_dx: 'Clinico, con confirmacion hormonal. Lo util del signo es que acorta el camino hasta pedir la hormona correcta.',
      laboratorio: 'Funcion tiroidea, cortisol y ACTH segun el cuadro. Ante hiperpigmentacion especialmente intensa, mas intensa de lo habitual en un Cushing, pensar en el sindrome de ACTH ECTOPICO, asociado al carcinoma microcitico de pulmon.',
      dx_diferencial: 'La acantosis nigricans aparece tanto en el Cushing como en la diabetes y en la obesidad, de modo que por si sola no decide; lo que decide es el contexto. Y el vitiligo, que es facil de diagnosticar, obliga a mirar el resto del eje autoinmune.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Hipotiroidismo, a Hipertiroidismo y tiroiditis, a Urgencias tiroideas si el cuadro es agudo, y a Diabetes mellitus cuando aparece vitiligo o acantosis. La hiperpigmentacion muy intensa con sospecha de ACTH ectopico lleva a Nodulo pulmonar y cancer de pulmon.',
      algoritmo: ['Hiperpigmentacion difusa con perdida de vello: pedir cortisol y ACTH', 'Estrias, giba y hematomas espontaneos: pensar en Cushing', 'Rubor paroxistico llamativo: considerar feocromocitoma', 'Hiperpigmentacion mas intensa de lo esperable: buscar ACTH ectopico y microcitico', 'Vitiligo: revisar funcion tiroidea y glucemia', 'Piel fina, pelo ralo y palidez: puede ser la primera pista de un hipopituitarismo']
    },
    {
      nombre: 'Xantomas y depositos: lo que delatan',
      color: '#8a7a3a',
      definicion: 'Depositos cutaneos visibles de lipidos o de otras sustancias, cuyo valor esta en que cada tipo apunta a una alteracion metabolica distinta.',
      clinica: 'XANTOMA ESTRIADO PALMAR: lesiones planas, de amarillentas a anaranjadas, en los pliegues palmares. Solo aparece en pacientes con cifras altas de colesterol Y de trigliceridos. XANTOMA PLANO DIFUSO: cubre areas extensas de cara, cuello, torax y miembros superiores, y aparece en personas con dislipidemia o SIN ella.',
      criterios_dx: 'La morfologia y la localizacion orientan al perfil lipidico, pero la decision practica es mas simple: ante cualquier xantoma, pedir perfil lipidico completo; y ante un xantoma plano difuso, pedir ademas proteinograma.',
      laboratorio: 'Colesterol y fracciones y trigliceridos. Proteinograma e inmunoelectroforesis en el plano difuso.',
      dx_diferencial: 'El xantoma plano difuso es la trampa del grupo: con frecuencia estos pacientes tienen una PARAPROTEINEMIA, incluidas las relacionadas con el MIELOMA MULTIPLE, de modo que un perfil lipidico normal no cierra el caso sino que lo abre.',
      complementarios: 'Otros depositos del modulo que se reconocen igual de bien: la carotenodermia del diabetico (piel y u&#241;as amarillentas), la discromia del enfermo renal y el escleredema de Buschke, que ademas de en la diabetes aparece en neoplasias, paraproteinemias e infecciones.',
      tx_medico: 'El de la dislipidemia o el de la gammapatia. El deposito es el sintoma, no la enfermedad.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Dislipidemias en todos los casos, y a Mieloma multiple y a Sindrome de hiperviscosidad cuando el xantoma es plano difuso o hay paraproteina.',
      algoritmo: ['Ante cualquier xantoma, perfil lipidico completo', 'Estriado palmar: buscar colesterol Y trigliceridos altos', 'Plano difuso: pedir ademas proteinograma', 'Si el perfil lipidico es normal en un plano difuso, el caso se abre, no se cierra', 'Derivar a Dislipidemias, y a Mieloma multiple si hay paraproteina']
    },
    {
      nombre: 'Signos paraneoplasicos: cuando la piel anuncia un tumor',
      color: '#7a3a6b',
      definicion: 'Dermatosis que se correlacionan con una neoplasia interna. El problema practico no es reconocerlas sino decidir cuando la asociacion es real, y para eso existen los criterios de Curth.',
      clinica: 'ACANTOSIS NIGRICANS con las tres se&#241;ales: subita, en no obeso y sin endocrinopatia. SINDROME DE BAZEX (acroqueratosis paraneoplasica): erupcion psoriasiforme en superficies acras que puede progresar a queratodermia palmoplantar y distrofia ungueal, y afecta con frecuencia a orejas, nariz, region del buccinador, manos, pies y rodillas. ERITRODERMIA, que es rara y se asocia a neoplasia. ERITEMA NECROLITICO MIGRATORIO, la manifestacion cutanea del glucagonoma. Y la hiperpigmentacion intensa del sindrome de ACTH ectopico.',
      criterios_dx: 'Los criterios de Curth juzgan la verosimilitud de la asociacion. Lo que mas rinde de ellos en la practica es la cronologia: aparicion simultanea de las dos enfermedades y mejoria de la piel al tratar el tumor.',
      complementarios: 'A que tumor apunta cada una. Acantosis nigricans paraneoplasica: adenocarcinoma GASTRICO sobre todo, y otros tumores de la cavidad abdominal, digestivos y genitourinarios; en mas del 95% de los casos son adenocarcinomas. Bazex: carcinomas EPIDERMOIDES de la via aerodigestiva superior (laringe, faringe, traquea, bronquios, esofago superior), habitualmente con metastasis en ganglios cervicales, de modo que hay que estudiar cabeza, cuello y pelvis. Penfigo paraneoplasico: sistema LINFORRETICULAR, es decir enfermedad de Castleman, linfoma no hodgkiniano, timoma, sarcoma de celulas dendriticas foliculares y leucemia linfocitica cronica. Penfigoide cicatricial antiepiligrina: adenocarcinomas. Dermatitis herpetiforme: riesgo relativo aumentado de linfoma intestinal, igual que en la propia celiaquia. Glucagonoma: eritema necrolitico migratorio.',
      dx_diferencial: 'Una prudencia que la propia revision se&#241;ala: la porfiria cutanea tarda se ha relacionado con tumores hepaticos, pero esa asociacion parece casual, porque la infeccion por el virus de la hepatitis C es factor de riesgo de las dos cosas a la vez. Es un buen ejemplo de para que sirven los criterios de Curth.',
      laboratorio: 'El dirigido por el signo. Y en las ampollosas, la inmunofluorescencia directa, cuya NEGATIVIDAD hace mas probable el origen paraneoplasico.',
      imagen: 'Dirigida: abdomen en la acantosis nigricans; cabeza, cuello y pelvis en el Bazex; torax en la sospecha de ACTH ectopico.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Linfomas, a Leucemia linfocitica cronica y a Mieloma multiple en las asociaciones linforreticulares; a Nodulo pulmonar y cancer de pulmon en el ACTH ectopico; y a Ampollosas autoinmunes para el penfigo paraneoplasico, que alli esta desarrollado entero.',
      pronostico: 'El del tumor. El valor del signo esta en el tiempo que gana.',
      algoritmo: ['&#191;La dermatosis y el tumor empezaron a la vez? Criterio de Curth', '&#191;Acantosis subita, en no obeso y sin endocrinopatia? Buscar adenocarcinoma gastrico', '&#191;Erupcion psoriasiforme acra? Estudiar via aerodigestiva superior', '&#191;Ampollosa con mucositis e inmunofluorescencia negativa? Buscar linforreticular', '&#191;Eritrodermia sin causa? Es rara y se asocia a neoplasia', 'Comprobar si la piel mejora al tratar el tumor: confirma la asociacion'],
      figura: 'paraneoplasicos'
    },
    {
      nombre: 'Signos de enfermedad reumatologica',
      color: '#9c3a52',
      definicion: 'Signos cutaneos de las conectivopatias y de las vasculitis. Es la parte del modulo que todavia no tiene bloque propio en el temario, de modo que por ahora este es su sitio en la app.',
      clinica: 'LUPUS ERITEMATOSO SISTEMICO: la revision separa las lesiones ESPECIFICAS (agudas, subagudas y cronicas, mas las formas atipicas) de las NO ESPECIFICAS, entre las que estan las vasculopatias y la alopecia. DERMATOMIOSITIS, cuya eritrodermia asociada es rara y se asocia a malignidad. ARTRITIS REUMATOIDE y ENFERMEDAD DE STILL. FENOMENO DE RAYNAUD, que la revision separa en primario y SECUNDARIO, con su propia lista de causas asociadas. SINDROME DE SJOGREN y ESCLERODERMIA.',
      complementarios: 'Las VASCULITIS, que la revision ordena por calibre: de vaso grande (arteritis de Takayasu y arteritis de celulas gigantes), de vaso mediano (panarteritis nodosa y enfermedad de Kawasaki), asociadas a ANCA, asociadas a inmunocomplejos, de vaso variable, y las secundarias. La expresion cutanea compartida es la purpura PALPABLE, que remite a la ficha de purpura de este modulo.',
      dx_diferencial: 'Las enfermedades GRANULOMATOSAS que la revision incluye en este bloque: la NECROBIOSIS LIPOIDICA, que ya se trata en la ficha del diabetico, y el GRANULOMA ANULAR, que aparece en diabeticos pero tambien en hepatitis, VIH, linfoma y carcinoma. Y las NEUTROFILICAS: enfermedad de Behcet, BADAS y pioderma gangrenoso, con sus variantes.',
      criterios_dx: 'Clinico y serologico, y fuera del alcance de este modulo, que solo pretende que el signo no pase desapercibido.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: el pioderma gangrenoso, el Behcet y el BADAS, al modulo 78 de Eritemas reactivos, que los desarrolla; la purpura palpable, a la ficha de purpura de este modulo; el fenomeno de Raynaud con sospecha de enfermedad arterial, a Enfermedad arterial periferica; y el resto, al bloque de reumatologia cuando se construya. Mientras tanto, la referencia es la parte I de la revision que sostiene este modulo.',
      pronostico: 'El de la enfermedad de fondo. Lo que el signo cutaneo aporta es la sospecha y, a veces, varios meses de ventaja.',
      algoritmo: ['Separar las lesiones especificas de lupus de las no especificas', 'Ante purpura palpable, ordenar las vasculitis por calibre de vaso', '&#191;Raynaud? Decidir si es primario o secundario antes de nada', '&#191;Eritrodermia en una dermatomiositis? Es rara y obliga a descartar malignidad', 'Derivar las neutrofilicas al modulo 78', 'Dejar constancia del signo aunque el diagnostico reumatologico tarde']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este modulo no se usa como los demas. No se estudia de principio a fin para saber tratar una enfermedad: se consulta cuando hay un signo delante y no se sabe a donde lleva. Por eso lo que sigue no son parametros de monitorizacion, sino las reglas de uso del indice.',
    parametros: [
      'Mirar la piel del paciente ingresado por otra cosa es la unica forma de encontrar estos signos. Ninguno se encuentra si no se busca.',
      'Ante una PURPURA, lo primero es palparla: si se palpa es vasculitis, y si es retiforme, dolorosa y aguda, es trombosis y no admite esperar.',
      'Ante un PRURITO sin lesion primaria, revisar los farmacos ANTES de pedir analitica, y suspender el sospechoso de 4 a 6 semanas.',
      'Las infecciones cutaneas de repeticion son motivo para investigar una diabetes, no solo para tratar la infeccion.',
      'Una acantosis nigricans no es lo mismo en un obeso que en una persona delgada: subita, en no obeso y sin endocrinopatia, obliga a buscar un adenocarcinoma gastrico.',
      'En el paciente en dialisis, el prurito y la xerosis son lo mas frecuente (50 al 90% y 50 al 80%) y lo que mas se olvida preguntar.',
      'Ante un xantoma plano difuso, un perfil lipidico normal no cierra el caso: pide el proteinograma.',
      'Si hay ampollas con mucositis exuberante y la inmunofluorescencia directa sale negativa, piensa en penfigo paraneoplasico y busca una neoplasia linforreticular.',
      'La hemorragia perifolicular es escorbuto, y la purpura que sale al pellizcar la piel es amiloidosis. Dos signos que se ven en diez segundos.',
      'Y la regla general del modulo: reconocer el signo no es el final del trabajo, es la indicacion para empezarlo.'
    ],
    criterios_uci_general: 'Los signos de este modulo que anuncian una situacion critica: la calcifilaxis por su morbilidad por sepsis de las areas necroticas, la mucormicosis rinocerebral del diabetico en cetoacidosis por su evolucion rapida al sistema nervioso central, la gangrena de Fournier por su alta mortalidad, el penfigo paraneoplasico por la afectacion bronquial con insuficiencia respiratoria, y la fibrosis sistemica nefrogenica, fulminante con afectacion multiorganica en el 5% de los casos.',
    criterios_tips_general: 'No aplica como intervencion. Lo que si hay es un umbral de derivacion: cuando el signo cumple las se&#241;ales de alarma de su ficha, la consulta deja de ser diferible.',
    criterios_trasplante_general: 'No aplica. La piel del trasplantado y del inmunodeprimido esta en el modulo 80 de Cancer cutaneo no melanoma y sarcoma de Kaposi.',
    prevencion: 'La prevencion de este modulo es de proceso y no de enfermedad: explorar la piel en la valoracion inicial, revisar los farmacos antes de estudiar un prurito, y no cerrar un signo como banal sin haber comprobado las se&#241;ales de alarma que tiene asociadas. Y una de contenido: el fenomeno de Koebner es frecuente en la colagenosis perforante del diabetico y del enfermo renal, de modo que el rascado perpetua las lesiones y tratar el prurito es tratar la dermatosis.'
  }
};

export const compCites = {
  'Purpura: la morfologia dice el mecanismo': { definicion: [1], fisiopatologia: [1], clinica: [1], criterios_dx: [1], dx_diferencial: [1], complementarios: [1] },
  'Prurito sin lesion primaria: el estudio escalonado': { definicion: [2], fisiopatologia: [2], epidemiologia: [2], clinica: [2], criterios_dx: [2], laboratorio: [2], complementarios: [2], dx_diferencial: [2], tx_medico: [2] },
  'La piel del diabetico': { clinica: [2], epidemiologia: [2], criterios_dx: [2], complementarios: [2], dx_diferencial: [2] },
  'La piel del enfermo renal': { epidemiologia: [2], clinica: [2], fisiopatologia: [2], factores_riesgo: [2], criterios_dx: [2], laboratorio: [2], dx_diferencial: [2], pronostico: [2] },
  'La piel del enfermo digestivo': { epidemiologia: [2], clinica: [2], fisiopatologia: [2], complementarios: [2], dx_diferencial: [2] },
  'Signos endocrinos: tiroides, suprarrenal e hipofisis': { clinica: [2], epidemiologia: [2], laboratorio: [2] },
  'Xantomas y depositos: lo que delatan': { clinica: [2], dx_diferencial: [2], complementarios: [2] },
  'Signos paraneoplasicos: cuando la piel anuncia un tumor': { definicion: [2], clinica: [2], criterios_dx: [2], complementarios: [2], dx_diferencial: [2] },
  'Signos de enfermedad reumatologica': { definicion: [1], clinica: [1], complementarios: [1], dx_diferencial: [1] }
};

export const estigmasTitulo = 'Signos que se reconocen en diez segundos y cambian el plan';
export const estigmas = [
  { nombre: 'Purpura palpable', descripcion: 'Si se palpa, hay inflamacion del vaso: es vasculitis, con la leucocitoclastica como causa importante. La perivascularitis sin vasculitis NO da purpura palpable. Si es por inmunocomplejos, predomina en zonas declives.' },
  { nombre: 'Purpura retiforme dolorosa', descripcion: 'Estrellada o arboriforme, de inicio agudo y muy dolorosa: es oclusion, no inflamacion. Es el patron del sindrome antifosfolipidico y de las vasculopatias tromboticas, y en el enfermo renal en dialisis, de la calcifilaxis.' },
  { nombre: 'Purpura al pellizcar la piel', descripcion: 'En la amiloidosis de cadenas ligeras la purpura se induce con facilidad al pellizcar. Es una maniobra de dos segundos que reorienta el estudio entero hacia una gammapatia.' },
  { nombre: 'Hemorragia perifolicular', descripcion: 'La hemorragia alrededor del foliculo sugiere escorbuto, es decir deficit de vitamina C. Aparece en malabsorcion y en dietas muy restrictivas, y es de los pocos signos que dan el diagnostico casi solos.' },
  { nombre: 'Acantosis nigricans subita en persona delgada', descripcion: 'Las tres se&#241;ales de paraneoplasia van juntas: aparicion subita, persona NO obesa y sin endocrinopatia. Entonces lo mas frecuente es el adenocarcinoma gastrico, y mas del 95% de los tumores asociados son adenocarcinomas.' },
  { nombre: 'Xantoma plano difuso', descripcion: 'Cubre areas extensas de cara, cuello, torax y miembros superiores, y aparece con dislipidemia o sin ella. Lo importante es lo segundo: con frecuencia hay una paraproteinemia detras, incluida la del mieloma multiple.' },
  { nombre: 'Hiperpigmentacion difusa con perdida de vello', descripcion: 'Piel, pelo y mucosas hiperpigmentados, con perdida de vello axilar y pubico y bandas ungueales longitudinales: es la presentacion de la insuficiencia suprarrenal primaria. Si la hiperpigmentacion es mas intensa de lo esperable, pensar en ACTH ectopico y microcitico de pulmon.' },
  { nombre: 'Ampollas tensas e indoloras en los pies', descripcion: 'Sin inflamacion alrededor, de crecimiento rapido y curacion en semanas: es la bullosis diabeticorum, que presenta alrededor del 0,5% de los diabeticos y que tambien puede ser la manifestacion inicial de la diabetes.' }
];

export const biopsiaTitulo = 'Biopsia: cuando a&#241;ade algo en este modulo';
export const biopsia = {
  indicaciones: [
    'Purpura retiforme, para confirmar trombosis sin vasculitis',
    'Prurito sin causa tras el panel ampliado, como ultimo escalon del estudio',
    'Sospecha de ampollosa paraneoplasica, con inmunofluorescencia directa',
    'Dermatosis perforante y calcinosis cutis del enfermo renal, que tienen histologia especifica',
    'Sospecha de fibrosis sistemica nefrogenica tras contraste con gadolinio'
  ],
  ventajas: [
    'En la purpura retiforme demuestra trombosis difusa de vasos dermicos SIN vasculitis',
    'En la calcinosis cutis muestra material homogeneo azulado, confirmable con la tincion de Von Kossa',
    'En la dermatosis perforante muestra tapones queratosicos en copa y eliminacion transepidermica',
    'En la oxalosis muestra cristales de oxalato calcico, refringentes bajo luz polarizada'
  ],
  limitaciones: [
    'En la mayoria de los signos de este modulo la biopsia no a&#241;ade nada: el diagnostico es el de la enfermedad sistemica',
    'En el prurito es el ultimo escalon, no el primero',
    'En las ampollosas, lo que orienta a paraneoplasia es la inmunofluorescencia NEGATIVA, que es un resultado facil de malinterpretar como "normal"',
    'La histologia de las purpuras pigmentarias cronicas es inespecifica y rara vez cambia la conducta'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion',
    'Evitar biopsiar sobre una zona necrotica o sobreinfectada, sobre todo en la calcifilaxis',
    'En el paciente fragil, valorar antes si el resultado va a cambiar la conducta',
    'No retrasar el tratamiento de una calcifilaxis o una mucormicosis esperando la histologia'
  ]
};

export const escalaRefs = {
  'Morfologia de la purpura (calculadora disponible)': [1],
  'Prurito: estudio escalonado (calculadora disponible)': [2],
  'Criterios de Curth': [2],
  'Se&#241;ales de acantosis nigricans paraneoplasica': [2],
  'Se&#241;ales de ampollosa paraneoplasica': [2],
  'El mapa de derivacion': [1, 2]
};

export const escalaCalc = {
  'Morfologia de la purpura (calculadora disponible)': 'purpura-mecanismo',
  'Prurito: estudio escalonado (calculadora disponible)': 'prurito-estudio',
  'El mapa de derivacion': 'signo-a-donde'
};

export const compGroups = [
  { title: 'Signos que se ven primero', items: ['Purpura: la morfologia dice el mecanismo', 'Prurito sin lesion primaria: el estudio escalonado'] },
  { title: 'Por aparato', items: ['La piel del diabetico', 'La piel del enfermo renal', 'La piel del enfermo digestivo', 'Signos endocrinos: tiroides, suprarrenal e hipofisis', 'Xantomas y depositos: lo que delatan'] },
  { title: 'Lo que no hay que pasar por alto', items: ['Signos paraneoplasicos: cuando la piel anuncia un tumor', 'Signos de enfermedad reumatologica'] }
];

export const complicacionesIntro = 'Las fichas de este modulo son SIGNOS, no enfermedades, y cada una termina en la misma linea: a donde lleva. Las dos primeras son los dos signos que mas veces aparecen delante sin diagnostico, la purpura y el prurito, y las dos se resuelven con un metodo mas que con un dato: la morfologia en una y el escalonado en la otra. Las cinco del medio van por aparato, y son las que convierten una exploracion de rutina en una sospecha concreta. Las dos ultimas son las que no se pueden pasar por alto: los signos paraneoplasicos, donde la piel puede ganar meses, y los reumatologicos, que estan aqui porque ese bloque del temario todavia no se ha construido.';

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
    { title: 'Purpura', sub: 'La morfologia dice el mecanismo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Palpable', sub: 'Vasculitis', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Retiforme', sub: 'Trombosis &middot; no espera', color: '#7a2a2a', target: 'complicaciones' },
      { title: 'Petequias', sub: 'Plaquetas de 10.000 o menos', color: '#a1442e', target: 'complicaciones' }
    ] },
    { title: 'Prurito sin lesion', sub: 'Farmacos, luego panel basico', color: '#5a7a8a', target: 'complicaciones' },
    { title: 'Por aparato', sub: 'De la piel al organo', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Diabetes', sub: 'La acantosis precede al diagnostico', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Ri&#241;on', sub: 'Prurito 50-90% &middot; calcifilaxis', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Digestivo', sub: 'Eritema nodoso sigue la actividad', color: '#5c7a3a', target: 'complicaciones' },
      { title: 'Endocrino', sub: 'Addison, Cushing, ACTH ectopico', color: '#b05a2e', target: 'complicaciones' }
    ] },
    { title: 'No pasarlo por alto', sub: 'La piel gana meses', color: '#7a3a6b', target: 'complicaciones', leaves: [
      { title: 'Paraneoplasicos', sub: 'Curth &middot; acantosis subita', color: '#7a3a6b', target: 'clasificacion' },
      { title: 'Reumatologicos', sub: 'Sin bloque propio todavia', color: '#9c3a52', target: 'complicaciones' }
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
            <tr><td class="figure-org">Purpura palpable</td><td>Vasculitis</td><td>&mdash;</td><td>Ficha de purpura, aqui</td></tr>
            <tr><td class="figure-org">Purpura retiforme dolorosa</td><td>Trombosis &middot; antifosfolipido &middot; calcifilaxis</td><td>Calcifilaxis: 1-4% en dialisis</td><td>Trastornos de la coagulacion</td></tr>
            <tr><td class="figure-org">Petequias</td><td>Trombocitopenia</td><td>Tipicas con 10.000 o menos</td><td>Alteraciones plaquetarias</td></tr>
            <tr><td class="figure-org">Purpura al pellizcar</td><td>Amiloidosis de cadenas ligeras</td><td>&mdash;</td><td>Mieloma multiple</td></tr>
            <tr><td class="figure-org">Hemorragia perifolicular</td><td>Escorbuto (vitamina C)</td><td>&mdash;</td><td>Soporte nutricional</td></tr>
            <tr><td class="figure-org">Acantosis nigricans</td><td>Hiperinsulinemia; si es subita en delgado, adenocarcinoma gastrico</td><td>Puede preceder al diagnostico con HbA1c normal</td><td>Diabetes mellitus</td></tr>
            <tr><td class="figure-org">Infecciones cutaneas de repeticion</td><td>Diabetes</td><td>&mdash;</td><td>Diabetes mellitus</td></tr>
            <tr><td class="figure-org">Prurito en dialisis</td><td>Enfermedad renal cronica</td><td><span class="figure-tag">50-90%</span></td><td>Ficha renal, aqui</td></tr>
            <tr><td class="figure-org">Ampollas en dorso de manos en dialisis</td><td>Porfiria cutanea tarda</td><td>1-18% en hemodialisis</td><td>Porfirias</td></tr>
            <tr><td class="figure-org">Eritema nodoso</td><td>Enfermedad inflamatoria intestinal, sarcoidosis, estreptococo</td><td>15% del Crohn, 10% de la colitis</td><td>Modulo 78</td></tr>
            <tr><td class="figure-org">Pioderma gangrenoso o Sweet</td><td>EII, hematologico, artritis</td><td>&mdash;</td><td>Modulo 78</td></tr>
            <tr><td class="figure-org">Xantoma estriado palmar</td><td>Colesterol Y trigliceridos altos</td><td>&mdash;</td><td>Dislipidemias</td></tr>
            <tr><td class="figure-org">Xantoma plano difuso</td><td>Paraproteinemia</td><td>&mdash;</td><td>Mieloma multiple</td></tr>
            <tr><td class="figure-org">Hiperpigmentacion difusa</td><td>Insuficiencia suprarrenal; si es muy intensa, ACTH ectopico</td><td>&mdash;</td><td>Cancer de pulmon si es ectopico</td></tr>
            <tr><td class="figure-org">Ampollosa con mucositis e IFD negativa</td><td>Penfigo paraneoplasico &middot; linforreticular</td><td>&mdash;</td><td>Ampollosas autoinmunes</td></tr>
            <tr><td class="figure-org">Lesion pigmentada que cambia</td><td>Melanoma</td><td>&mdash;</td><td>Modulo 79</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Asi se usa el modulo: se entra por la primera columna y se sale por la ultima. Lo que la tabla NO hace es contar cada enfermedad, porque eso ya esta hecho en el tema de destino, y repetirlo seria duplicar nueve temas. Si el destino que buscas no aparece, escribe su nombre en el <strong>buscador global</strong> de la app, que cubre todos los temas, los protocolos y la valoracion preoperatoria.</div>`
  },
  'purpura-arbol': {
    titulo: 'Purpura: de la morfologia al mecanismo',
    fuente: 'Sampaio AL, Bressan AL, Vasconcelos BN, Gripp AC. Skin manifestations associated with systemic diseases - Part I. An Bras Dermatol 2021;96(6):655-671.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lo que se ve</th><th>Mecanismo</th><th>Que hay detras</th><th>Que se pide</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Petequias</td><td rowspan="2" style="vertical-align:middle;">Hemorragia simple</td><td>Trombocitopenia: tipicas con 10.000 o menos, posibles por debajo de 50.000</td><td>Hemograma y frotis</td></tr>
            <tr><td class="figure-org">Equimosis tras traumatismo minimo</td><td>Disfuncion plaquetaria, o tejido conectivo defectuoso</td><td>Funcion plaquetaria; revisar corticoides</td></tr>
            <tr><td class="figure-org">Purpura PALPABLE</td><td>Inflamacion del vaso</td><td><span class="figure-tag dys">Vasculitis</span>, con la leucocitoclastica a la cabeza; si es por inmunocomplejos, en zonas declives</td><td>Autoinmunidad, crioglobulinas, biopsia</td></tr>
            <tr><td class="figure-org">Purpura RETIFORME dolorosa y aguda</td><td>Oclusion con inflamacion minima</td><td><span class="figure-tag fail">Trombosis</span>: antifosfolipido y vasculopatias tromboticas; en dialisis, calcifilaxis</td><td>Anticuerpos antifosfolipidicos; calcio, fosforo y PTH</td></tr>
            <tr><td class="figure-org">Purpura que sale al PELLIZCAR</td><td rowspan="2" style="vertical-align:middle;">Extravascular</td><td>Amiloidosis de cadenas ligeras</td><td>Proteinograma e inmunoelectroforesis</td></tr>
            <tr><td class="figure-org">Hemorragia PERIFOLICULAR</td><td>Escorbuto</td><td>Historia dietetica; vitamina C</td></tr>
            <tr><td class="figure-org">Petequias sobre las claviculas</td><td>Pico de presion intravascular</td><td>Parto, tos, vomitos, llanto, torniquete</td><td>Nada: es mecanico</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las dos maniobras que mas rinden estan en la tabla y no cuestan nada: <strong>palpar</strong> (si se palpa, es vasculitis) y <strong>pellizcar</strong> (si sale purpura, es amiloidosis). Y la fila que no admite esperar es la retiforme dolorosa de inicio agudo, porque es oclusion y no inflamacion: en la histologia se ve trombosis difusa de los vasos dermicos <strong>sin</strong> vasculitis. La ultima fila esta para no estudiar lo que no hay que estudiar.</div>`
  },
  'paraneoplasicos': {
    titulo: 'Cuando la piel anuncia un tumor',
    fuente: 'Leal JM, de Souza GH, Marsillac PF, Gripp AC. Skin manifestations associated with systemic diseases - Part II. An Bras Dermatol 2021;96(6):672-687.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Signo cutaneo</th><th>Tumor al que apunta</th><th>Donde dirigir el estudio</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Acantosis nigricans subita, en no obeso y sin endocrinopatia</td><td>Adenocarcinoma GASTRICO sobre todo; mas del 95% son adenocarcinomas</td><td>Abdomen: digestivo y genitourinario</td></tr>
            <tr><td class="figure-org">Sindrome de Bazex (erupcion psoriasiforme acra)</td><td>Carcinoma EPIDERMOIDE de la via aerodigestiva superior</td><td>Cabeza, cuello y pelvis; suele haber adenopatias cervicales</td></tr>
            <tr><td class="figure-org">Penfigo paraneoplasico</td><td>Sistema LINFORRETICULAR: Castleman, linfoma no hodgkiniano, timoma, leucemia linfocitica cronica</td><td>Hematologia; vigilar afectacion bronquial</td></tr>
            <tr><td class="figure-org">Penfigoide cicatricial antiepiligrina</td><td>Adenocarcinomas</td><td>Segun la clinica</td></tr>
            <tr><td class="figure-org">Dermatitis herpetiforme</td><td>Linfoma intestinal (riesgo relativo aumentado, como en la celiaquia)</td><td>Digestivo</td></tr>
            <tr><td class="figure-org">Eritema necrolitico migratorio</td><td>Glucagonoma</td><td>Pancreas</td></tr>
            <tr><td class="figure-org">Hiperpigmentacion mas intensa que en un Cushing</td><td>ACTH ectopico: carcinoma microcitico de pulmon</td><td>Torax</td></tr>
            <tr><td class="figure-org">Eritrodermia sin causa</td><td>Es rara y se asocia a malignidad</td><td>Estudio amplio</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Antes de lanzar un estudio oncologico por una dermatosis, los <strong>criterios de Curth</strong> sirven para juzgar si la asociacion es creible, y lo que mas rinde de ellos es la cronologia: que las dos cosas empiecen a la vez y que la piel mejore al tratar el tumor. El contraejemplo esta en la propia revision: la porfiria cutanea tarda se ha relacionado con tumores hepaticos, pero la asociacion parece <strong>casual</strong>, porque la hepatitis C es factor de riesgo de las dos cosas a la vez. En las ampollosas, las dos pistas de paraneoplasia son la inmunofluorescencia directa <strong>negativa</strong> y la mucositis exuberante.</div>`
  }
};
