// topics/abdomen-agudo/content.js - Modulo 84: Abdomen agudo.
// Basado en la revision de Rogers y Kirton "Acute Abdomen in the Modern Era" (N Engl J Med
// 2024;391:60-67, doi:10.1056/NEJMra2304821), que ya estaba en Bibliografia/, para el enfoque
// general: analgesia, imagen, consulta quirurgica y sesgos cognitivos. Los cuadros que tienen
// criterios propios se apoyan en las guias de Tokio 2018 de colecistitis y colangitis y en la
// guia de la AGA de 2018 sobre el manejo inicial de la pancreatitis aguda, tambien en
// Bibliografia/. Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'abdomen-agudo',
  titulo: 'Abdomen agudo',
  subtitulo: 'Modulo 84 &middot; Medicina Critica',
  accent: '#8a5a2e',
  accentDim: '#a6784a'
};

export const definicionText = `<p style="margin:0 0 14px;">El dolor abdominal agudo es uno de los motivos de consulta mas frecuentes en urgencias: supone entre el <strong>5% y el 10%</strong> de todas las visitas. La mayoria de sus causas son benignas, pero varias son <strong>dependientes del tiempo</strong>, y los procesos que acaban en cirugia se reducen a cuatro mecanismos: <strong>obstruccion, hemorragia, isquemia y perforacion</strong>. La necesidad de cirugia general urgente es por si misma un factor de riesgo independiente de complicaciones y muerte.</p>
<p style="margin:0 0 14px;">En 1921 Zachary Cope escribio su tratado sobre el diagnostico precoz del abdomen agudo porque demasiados pacientes sufrian un retraso en el diagnostico y el tratamiento. Un siglo despues, la revision de Rogers y Kirton de 2024 constata que, pese a la ecografia, la tomografia y la resonancia, <strong>los errores y los retrasos siguen ocurriendo</strong>, y los atribuye a cuatro puntos: la analgesia que se retrasa sin motivo, el uso de la imagen, la consulta quirurgica tardia y los <strong>sesgos cognitivos</strong>.</p>
<p style="margin:0 0 14px;">Hoy el primero en ver al paciente casi nunca es un cirujano: es el medico de urgencias, el de atencion primaria o el internista. Ese primer clinico decide la analgesia, la imagen y el momento de llamar al cirujano, y de esas tres decisiones depende buena parte del resultado. Este tema esta escrito para ese clinico.</p>`;

export const bibliografia = [
  'Rogers SO Jr, Kirton OC. Acute Abdomen in the Modern Era. N Engl J Med. 2024;391(1):60-67. doi:10.1056/NEJMra2304821.',
  'Yokoe M, Hata J, Takada T, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018;25(1):41-54.',
  'Kiriyama S, Kozaka K, Takada T, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018;25(1):17-30.',
  'Crockett SD, Wani S, Gardner TB, et al. American Gastroenterological Association Institute Guideline on Initial Management of Acute Pancreatitis. Gastroenterology. 2018;154(4):1096-1101.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El abdomen que se deja leer',
      tituloB: 'El abdomen que enga&#241;a',
      compensada: 'Dolor localizado por cuadrantes (epigastrio, hipocondrio derecho o izquierdo, fosas iliacas) o difuso, con una historia coherente y una exploracion que orienta. La historia y la exploracion siguen siendo el primer paso, como queria Cope: crean el indice de sospecha que luego la imagen confirma o descarta. Y una regla que Rogers y Kirton subrayan: si los sintomas no son congruentes con el diagnostico sospechado, hay que reevaluar y considerar otras posibilidades.',
      descompensada: 'El paciente mayor, con historia poco fiable, sintomas vagos, alteracion del estado mental, multiples enfermedades, una exploracion dificil y poca reserva fisiologica. El paciente que toma glucocorticoides u otros inmunosupresores, que enmascaran la respuesta inflamatoria. En ellos la exploracion puede no reflejar la gravedad, y la tomografia gana valor: el aire libre, los cambios inflamatorios o la isquemia intestinal pueden llevar antes a la laparotomia y al control del foco.'
    },
    laboratorio: [
      { prueba: 'Hemograma y proteina C reactiva', utilidad: 'La leucocitosis y la proteina C reactiva elevada son signos sistemicos de inflamacion, y forman parte de los criterios de Tokio de colecistitis y colangitis. Un recuento normal no descarta un proceso quirurgico, sobre todo en el anciano o el inmunodeprimido.' },
      { prueba: 'Amilasa y lipasa', utilidad: 'Apoyan la pancreatitis, pero son un ejemplo clasico de sesgo: una amilasa elevada en un paciente con consumo de alcohol lleva a diagnosticar pancreatitis, y una perforacion de intestino delgado tambien puede elevarla. Un dato aislado no cierra el diagnostico.' },
      { prueba: 'Bilirrubina y pruebas hepaticas', utilidad: 'La colestasis (ictericia, elevacion de fosfatasa alcalina, GGT y transaminasas) es uno de los dominios de los criterios de Tokio de colangitis. Una bilirrubina de 5 mg/dL o mas es criterio de colangitis moderada.' },
      { prueba: 'Lactato y gasometria', utilidad: 'Orientan sobre la hipoperfusion y la isquemia. Un lactato normal no descarta la isquemia mesenterica en su fase inicial.' },
      { prueba: 'Funcion renal, coagulacion y plaquetas', utilidad: 'Definen la disfuncion de organo que gradua como grave una colecistitis o una colangitis: creatinina mayor de 2 mg/dL, INR mayor de 1.5 o plaquetas por debajo de 100.000.' },
      { prueba: 'Prueba de embarazo', utilidad: 'En toda mujer en edad fertil antes de decidir la imagen, porque cambia la tecnica de primera eleccion y el diagnostico diferencial (embarazo ectopico roto).' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de Tokio de colecistitis (calculadora disponible)', interpretacion: 'Diagnostico de sospecha y definitivo, y grado de gravedad segun la guia de 2018.', cutoff: 'Sospecha: un signo local mas uno sistemico. Definitivo: ademas, imagen caracteristica' },
      { metodo: 'Criterios de Tokio de colangitis (calculadora disponible)', interpretacion: 'Diagnostico de sospecha y definitivo, y grado de gravedad.', cutoff: 'Definitivo: inflamacion sistemica, colestasis e imagen' },
      { metodo: 'Que imagen pedir (calculadora disponible)', interpretacion: 'Aplica el orden que recoge la revision de 2024 segun embarazo, sospecha biliar y peritonitis franca.', cutoff: 'Adulto no gestante: tomografia con contraste intravenoso' },
      { metodo: 'Cuando llamar al cirujano (calculadora disponible)', interpretacion: 'Recoge los datos que, segun la revision, obligan a no demorar la consulta quirurgica.', cutoff: 'La consulta precoz reduce complicaciones y muertes' },
      { metodo: 'Signo de Murphy', interpretacion: 'Signo local de inflamacion en los criterios de Tokio. En el estudio de validacion tuvo una sensibilidad del 20.5% y una especificidad del 87.5%: su ausencia no descarta la colecistitis.', cutoff: 'Especifico pero poco sensible' },
      { metodo: 'Triada de Charcot', interpretacion: 'Fiebre, ictericia y dolor. Muy especifica de colangitis, pero en series multicentricas recientes solo la presentaba el 21% al 26% de los pacientes.', cutoff: 'Su ausencia no descarta la colangitis' }
    ],
    imagen: [
      { modalidad: 'Tomografia con contraste intravenoso', hallazgos: 'Tecnica principal en el adulto no gestante en urgencias. Localiza la inflamacion, la perforacion o la isquemia con alto valor predictivo positivo; en un estudio aumento la certeza diagnostica, redujo los ingresos un 23.8% y adelanto la cirugia. Sin contraste es aproximadamente un 30% menos exacta. El contraste oral no es un componente estandar.' },
      { modalidad: 'Radiografia simple de abdomen', hallazgos: 'Poco sensible y poco especifica frente a la tomografia. Conserva un papel concreto: ante signos francos de peritonitis puede identificar rapidamente el aire libre y llevar a la cirugia sin demora.' },
      { modalidad: 'Ecografia', hallazgos: 'Preferida para la patologia biliar aguda y la apendicitis en la practica actual, y prueba inicial de eleccion en la embarazada. Muy dependiente del operador, con una curva de aprendizaje empinada.' },
      { modalidad: 'Resonancia magnetica', hallazgos: 'Alternativa a la tomografia, limitada por la disponibilidad. Util en la mujer que puede estar embarazada y en el dolor pelvico, junto a la ecografia transvaginal.' },
      { modalidad: 'Ecografia a pie de cama', hallazgos: 'Potencial diagnostico y de triaje para la patologia biliar, la perforacion, la pancreatitis, la colitis, la obstruccion y los aneurismas, siempre en manos entrenadas.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion que mas sirve al primer clinico no es la anatomica sino la del <strong>mecanismo</strong>: <strong>obstruccion, hemorragia, isquemia o perforacion</strong>, que son los procesos que acaban en cirugia. La segunda es la localizacion, por cuadrantes o difusa, que orienta el diagnostico diferencial. La tercera es la del <strong>paciente</strong>: el mayor, el inmunodeprimido o el que tiene alterado el estado mental se exploran mal y se benefician antes de la tomografia. Y para los cuadros biliares y pancreaticos hay criterios propios: los de <strong>Tokio 2018</strong> para colecistitis y colangitis, con tres grados de gravedad, y las recomendaciones de la AGA para el manejo inicial de la pancreatitis.`,
    escalas: [
      { nombre: 'Criterios de Tokio de colecistitis (calculadora disponible)', componentes: 'A: signos locales (Murphy; masa, dolor o defensa en hipocondrio derecho). B: signos sistemicos (fiebre, proteina C reactiva o leucocitos elevados). C: imagen caracteristica.', formula: 'Sospecha: un A mas un B. Definitivo: un A, un B y C.', interpretacion: 'Grado III si hay disfuncion de algun organo; grado II si hay leucocitos por encima de 18.000, masa dolorosa palpable, mas de 72 horas de evolucion o inflamacion local marcada (gangrena, absceso, peritonitis biliar, enfisematosa); grado I en el resto.' },
      { nombre: 'Criterios de Tokio de colangitis (calculadora disponible)', componentes: 'A: inflamacion sistemica (fiebre o escalofrios, analitica inflamatoria). B: colestasis (ictericia, pruebas hepaticas alteradas). C: imagen (dilatacion biliar, causa visible).', formula: 'Sospecha: un A mas un B o un C. Definitivo: un A, un B y un C.', interpretacion: 'Grado III si hay disfuncion de organo; grado II si hay dos de: leucocitos por encima de 12.000 o por debajo de 4.000, fiebre de 39 o mas, edad de 75 o mas, bilirrubina de 5 mg/dL o mas, hipoalbuminemia. En todos los grados el drenaje biliar precoz o el tratamiento de la causa son fundamentales si no hay respuesta al tratamiento inicial.' },
      { nombre: 'Que imagen pedir (calculadora disponible)', componentes: 'Embarazo, sospecha biliar o de apendicitis, signos francos de peritonitis y riesgo percibido del contraste.', formula: 'Orden de eleccion segun la revision de 2024.', interpretacion: 'Tomografia con contraste intravenoso en el adulto no gestante; ecografia primero en la embarazada y en la sospecha biliar; radiografia solo para buscar aire libre ante una peritonitis franca. Retirar el contraste por miedo a la nefropatia tiene un coste diagnostico.' },
      { nombre: 'Cuando llamar al cirujano (calculadora disponible)', componentes: 'Peritonitis, inestabilidad, edad avanzada, alteracion del estado mental, inmunosupresion o glucocorticoides, y sintomas incongruentes con el diagnostico de trabajo.', formula: 'Lista de datos que no permiten esperar.', interpretacion: 'La consulta quirurgica precoz se ha asociado de forma constante a menos complicaciones y muertes, y la consulta con cirujanos presentes en el hospital reduce la mortalidad en los cuadros que requieren cirugia urgente.' },
      { nombre: 'Mecanismo quirurgico', componentes: 'Obstruccion, hemorragia, isquemia y perforacion.', formula: 'Clasificacion fisiopatologica.', interpretacion: 'Son los cuatro procesos que llevan a cirugia. Pensar en ellos de forma explicita ayuda a no cerrar el diagnostico en una causa benigna antes de tiempo.' },
      { nombre: 'Estrategias de decision de Croskerry', componentes: 'Reconocimiento de patrones, descartar lo peor, metodo exhaustivo, hipotetico-deductivo, heuristicas y estudio de los errores.', formula: 'Seis formas de razonar ante la incertidumbre.', interpretacion: 'La de descartar lo peor es la estrategia de seguridad en el abdomen agudo. El reconocimiento de patrones es rapido pero alimenta el sesgo de anclaje.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Analgesia precoz: no enmascara el diagnostico',
      color: '#8a5a2e',
      definicion: 'Administracion de analgesia, incluidos opioides, durante la evaluacion inicial y antes de la imagen y de la consulta quirurgica.',
      fisiopatologia: 'La creencia clasica es que el analgesico borra los signos que necesita el cirujano. La evidencia muestra que puede modificar algunos hallazgos de la exploracion, pero que esos cambios no se traducen en mas errores de manejo, definidos como cirugias innecesarias o cirugias necesarias no hechas a tiempo.',
      epidemiologia: 'En una encuesta a 495 cirujanos alemanes, el 45% daria analgesia antes del diagnostico a la mayoria de sus pacientes. Entre medicos de urgencias, el 85% pensaba que la analgesia prudente no cambia la exploracion, pero el 76% no prescribia opioides hasta que los viera el cirujano.',
      factores_riesgo: ['Creencia de que el analgesico enmascara', 'Esperar al cirujano para tratar el dolor', 'Sesgo racial en la valoracion del dolor', 'Falta de protocolo sobre dosis y momento'],
      clinica: 'Paciente con dolor abdominal agudo en evaluacion.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Reevaluacion de la exploracion tras la analgesia.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Rogers y Kirton respaldan con firmeza la analgesia a dosis moderadas en el dolor abdominal agudo, incluso antes de la imagen y de la consulta quirurgica: no altera de forma apreciable el diagnostico ni el plan de tratamiento.',
      tx_farmacologico: 'Ensayos aleatorizados con morfina, meperidina, papaveretum y tramadol frente a placebo aliviaron el dolor sin interferir con la exactitud diagnostica. En la sospecha de apendicitis, un metaanalisis encontro que los opioides pueden influir en el enfoque pero no parecen alterar la exactitud del diagnostico.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revalorar el dolor y la exploracion de forma seriada.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'En las series publicadas no hubo casos de morbilidad mayor ni muerte atribuibles a la administracion de opioides.',
      algoritmo: ['Tratar el dolor durante la evaluacion inicial', 'Dosis moderadas, opioides incluidos si hacen falta', 'No esperar a la imagen ni al cirujano', 'Revalorar la exploracion de forma seriada', 'Vigilar el sesgo en quien recibe analgesia']
    },
    {
      nombre: 'Imagen: tomografia con contraste y sin esperas',
      color: '#3d5a73',
      definicion: 'Uso de la imagen en el dolor abdominal agudo, donde la tomografia con contraste intravenoso es hoy la tecnica principal en el adulto no gestante.',
      fisiopatologia: 'El contraste intravenoso permite ver la inflamacion, el absceso, la isquemia y el sangrado activo. Sin el, la tomografia pierde aproximadamente un 30% de exactitud para el diagnostico principal y para los hallazgos secundarios relevantes.',
      epidemiologia: 'El numero de tomografias en el dolor abdominal no traumatico no ha dejado de crecer, y en un estudio el 20% no estaban indicadas a juicio de radiologos externos. No hay pruebas convincentes de que la mayor exactitud mejore la estancia, las complicaciones o la mortalidad.',
      factores_riesgo: ['Retirar el contraste por miedo a la nefropatia', 'Esperar dos horas o mas al informe definitivo', 'Usar la radiografia simple como prueba de cribado', 'Pedir tomografia de rutina sin indicacion'],
      clinica: 'Todo paciente en el que la historia y la exploracion no permiten descartar con seguridad una causa dependiente del tiempo.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Funcion renal para el contraste, sin que retrase la prueba cuando la sospecha es alta. La incidencia de nefropatia por contraste es baja.',
      imagen: 'Tomografia de abdomen y pelvis con contraste intravenoso en el adulto no gestante. Ecografia en la sospecha biliar y en la apendicitis cuando es posible, y como primera prueba en la embarazada. Radiografia simple solo ante una peritonitis franca, para buscar aire libre.',
      complementarios: 'Lectura prioritaria de la tomografia del dolor abdominal por radiologia, que acorta el tiempo hasta la intervencion.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Que la imagen no detenga todo lo demas: transmitir las imagenes y conciliar la lectura entre especialistas con rapidez. Esperar 2 horas o mas al informe definitivo se asocia a mas complicaciones sistemicas y muertes por el retraso en la consulta y el control del foco.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si la imagen no explica el cuadro, la exploracion seriada sigue mandando.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La campa&#241;a Choosing Wisely del American College of Radiology pide un uso juicioso de los protocolos multifase, con criterios de adecuacion integrados en la peticion.',
      algoritmo: ['Historia y exploracion primero', 'Adulto no gestante: tomografia con contraste intravenoso', 'No retirar el contraste sin valorar el coste diagnostico', 'Embarazada: ecografia primero', 'Peritonitis franca: radiografia para aire libre y cirujano ya', 'No esperar al informe para llamar al cirujano']
    },
    {
      nombre: 'El paciente mayor y el inmunodeprimido',
      color: '#5a4a8c',
      definicion: 'Pacientes en los que la presentacion del abdomen agudo es atipica y la exploracion poco fiable, y en los que el retraso se paga mas caro.',
      fisiopatologia: 'La menor reserva fisiologica, la respuesta inflamatoria atenuada (por la edad o por glucocorticoides e inmunosupresores) y la alteracion del estado mental hacen que el peritonismo sea menos evidente y que la progresion a enfermedad sistemica y disfuncion de organo sea mas rapida.',
      epidemiologia: 'En 2021 uno de cada seis estadounidenses tenia 65 a&#241;os o mas, y los cuadros que requieren cirugia general urgente son mas frecuentes en ellos que en los jovenes.',
      factores_riesgo: ['Edad avanzada', 'Alteracion del estado mental', 'Glucocorticoides u otros inmunosupresores', 'Multiples comorbilidades', 'Historia poco fiable o sintomas vagos'],
      clinica: 'Historia poco fiable, sintomas vagos, alteracion del estado mental, exploracion dificil y poca reserva. La edad de 75 a&#241;os o mas es, por si misma, uno de los criterios de colangitis moderada en Tokio.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Los recuentos y reactantes pueden ser normales pese a un proceso grave.',
      imagen: 'La tomografia con contraste tiene aqui un beneficio particular: detectar aire libre, inflamacion o isquemia puede adelantar la laparotomia y el control del foco.',
      complementarios: 'Lactato y gasometria si hay sospecha de isquemia o hipoperfusion.',
      dx_diferencial: 'Isquemia mesenterica, perforacion contenida, colecistitis alitiasica, diverticulitis complicada y causas extraabdominales.',
      tx_medico: 'Umbral bajo para la imagen y para la consulta quirurgica.',
      tx_farmacologico: 'Analgesia a dosis moderadas, igual que en el joven.',
      tx_intervencionista: 'Control precoz del foco cuando la imagen lo indica.',
      criterios_uci: 'Disfuncion de organo o progresion a enfermedad sistemica grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Exploracion seriada y reevaluacion ante cualquier cambio del estado mental.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Detectar antes permite evitar la progresion a enfermedad sistemica grave, disfuncion de organo y muerte en una poblacion vulnerable.',
      algoritmo: ['No fiarse de una exploracion anodina', 'Pensar en isquemia y perforacion', 'Tomografia con contraste precoz', 'Llamar antes al cirujano', 'Reevaluar ante cualquier cambio mental']
    },
    {
      nombre: 'Consulta quirurgica precoz y control del foco',
      color: '#8c2e2e',
      definicion: 'Decision de solicitar la valoracion del cirujano sin esperar a completar todo el estudio, porque el retraso se asocia a complicaciones y muerte.',
      fisiopatologia: 'Lo que mejora el resultado es la intervencion a tiempo y el control del foco. Cada eslabon que se retrasa (imagen, informe, consulta) aplaza ese control.',
      epidemiologia: 'La consulta quirurgica precoz se ha asociado de forma constante a menos complicaciones y muertes, y la consulta con cirujanos presentes en el hospital reduce la mortalidad en los cuadros que requieren cirugia general urgente. Pero la disponibilidad de cirujanos las 24 horas no es real en muchos entornos rurales o desatendidos.',
      factores_riesgo: ['Esperar al informe de la tomografia', 'Desacuerdos sobre la lectura de la imagen', 'Falta de cirujano presente', 'Sesgos cognitivos del primer clinico', 'Disparidades raciales en el acceso a la consulta'],
      clinica: 'Cualquier sospecha de obstruccion, hemorragia, isquemia o perforacion, signos de peritonitis o inestabilidad.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No deben retrasar la consulta.',
      imagen: 'Las decisiones clinicas no deben quedar bloqueadas por desacuerdos en la interpretacion de la imagen.',
      complementarios: 'Un circuito que asegure la adquisicion e interpretacion rapidas de la tomografia.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Pedir la consulta quirurgica pronto, en paralelo al estudio y no al final. Si los sintomas no encajan con el diagnostico sospechado, reevaluar.',
      tx_farmacologico: 'Analgesia y, si hay infeccion intraabdominal o sepsis, el tratamiento correspondiente sin esperar a la cirugia.',
      tx_intervencionista: 'Control del foco: cirugia o drenaje segun el cuadro.',
      criterios_uci: 'Sepsis o disfuncion de organo de origen abdominal.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion conjunta y seriada.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Los pacientes negros incluidos en Medicare tuvieron menos probabilidad de recibir una consulta quirurgica tras ingresar desde urgencias con un cuadro de cirugia urgente, y la diferencia no se explicaba por comorbilidad, seguro ni hospital. Ser consciente de ese sesgo forma parte del manejo.',
      algoritmo: ['Sospecha de causa quirurgica: llamar pronto', 'Consulta en paralelo, no al final', 'No esperar al informe definitivo', 'Si los sintomas no encajan, reevaluar', 'Control del foco a tiempo']
    },
    {
      nombre: 'Sesgos cognitivos: frenar a tiempo',
      color: '#7a4363',
      definicion: 'Atajos mentales que hacen eficiente el razonamiento pero que, bajo presion, llevan a diagnosticos equivocados o tardios.',
      fisiopatologia: 'Kahneman describe dos sistemas, la intuicion rapida y el pensamiento lento. Bajo estres el cerebro recurre a atajos. Los sesgos descendentes nacen de la formacion, la experiencia y las expectativas; los ascendentes, de basar todo en un unico dato clinico, analitico o de imagen. Su efecto es maximo cuando hay que decidir rapido con mucho en juego.',
      epidemiologia: 'Son una causa reconocida de diagnosticos perdidos en el abdomen agudo, especialmente en la historia clinica electronica, donde el diagnostico previo arrastra a los siguientes.',
      factores_riesgo: ['Presion asistencial y prisa', 'Diagnostico previo heredado de otro clinico', 'Un dato aislado muy llamativo', 'Paciente inestable o enfermedad grave'],
      clinica: 'Sesgo de atribucion: atribuir los sintomas a algo segun nuestras creencias. Sesgo de confirmacion: buscar solo los datos que apoyan la hipotesis favorita. Anclaje: depender en exceso del primer dato. Momento diagnostico: el diagnostico de la ambulancia llega a urgencias y nadie lo discute.',
      criterios_dx: 'No aplica.',
      laboratorio: 'El ejemplo de la revision: una amilasa elevada en un paciente con consumo de alcohol lleva a la pancreatitis, y una perforacion de intestino delgado tambien puede elevarla.',
      imagen: 'Un hallazgo de imagen puede anclar el razonamiento igual que un dato analitico.',
      complementarios: 'Analizar los errores despues, que es la sexta estrategia de Croskerry.',
      dx_diferencial: 'Mantener abierto el diferencial hasta que los datos encajen.',
      tx_medico: 'Obligarse a ir mas despacio en la incertidumbre. Como en el trauma, cuando no se avanza en la estabilizacion se para, se reevalua y se vuelve al ABC. Descartar lo peor es la estrategia de seguridad.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revisar el diagnostico de trabajo en cada reevaluacion.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Ser consciente de los propios sesgos, junto con el uso eficaz de la imagen y la consulta quirurgica a tiempo, reduce el estres y la incertidumbre del diagnostico.',
      algoritmo: ['Desconfiar del diagnostico heredado', 'No cerrar el caso con un unico dato', 'Buscar activamente lo que contradice la hipotesis', 'Descartar lo peor antes que lo probable', 'Si no se avanza, parar y reevaluar']
    },
    {
      nombre: 'Via biliar y pancreas: los cuadros con criterios',
      color: '#3f6b52',
      definicion: 'Colecistitis, colangitis y pancreatitis agudas, tres causas frecuentes de abdomen agudo que cuentan con criterios diagnosticos o recomendaciones de manejo propios.',
      fisiopatologia: 'La obstruccion del cistico produce la colecistitis; la obstruccion de la via biliar con infeccion produce la colangitis, que puede progresar a sepsis; la pancreatitis es una inflamacion que puede ser leve o necrotizante.',
      epidemiologia: 'La triada de Charcot, clasica para la colangitis, solo aparecio en el 21% al 26% de los pacientes en series multicentricas recientes. El signo de Murphy tuvo una sensibilidad del 20.5% en la validacion de los criterios de colecistitis.',
      factores_riesgo: ['Litiasis biliar', 'Procedimientos biliares previos', 'Protesis biliar', 'Consumo de alcohol en la pancreatitis', 'Edad avanzada en la colangitis grave'],
      clinica: 'Colecistitis: dolor en hipocondrio derecho, Murphy, fiebre. Colangitis: fiebre o escalofrios, ictericia, dolor. Pancreatitis: dolor epigastrico con elevacion de enzimas pancreaticas.',
      criterios_dx: 'Colecistitis (Tokio 2018): sospecha con un signo local y uno sistemico; definitiva si ademas hay imagen caracteristica. Colangitis (Tokio 2018): sospecha con inflamacion sistemica mas colestasis o imagen; definitiva con los tres.',
      laboratorio: 'Leucocitos, proteina C reactiva, bilirrubina, enzimas hepaticas, lipasa, creatinina, INR y plaquetas.',
      imagen: 'Ecografia para la via biliar. Tomografia si hay dudas o complicaciones.',
      complementarios: 'Graduar la gravedad con los criterios de Tokio, que comparten la definicion de grado III por disfuncion de organo.',
      dx_diferencial: 'La colecistitis da falsos positivos en los criterios de colangitis cuando se incluye el dolor abdominal: por eso Tokio excluyo el dolor de los criterios.',
      tx_medico: 'Pancreatitis (AGA 2018): fluidoterapia guiada por objetivos, sin hidroxietil almidon; nutricion oral precoz, en las primeras 24 horas, segun tolerancia, mejor que el ayuno; nutricion enteral mejor que parenteral si no puede comer.',
      tx_farmacologico: 'Pancreatitis: la AGA sugiere NO usar antibioticos profilacticos en la pancreatitis grave prevista ni en la necrotizante. Colangitis: antibiotico en todos los grados.',
      tx_intervencionista: 'Colangitis: drenaje biliar precoz o tratamiento de la causa si no responde al tratamiento inicial, en cualquier grado. Pancreatitis biliar sin colangitis: la AGA sugiere no hacer colangiografia retrograda urgente de rutina, y recomienda la colecistectomia durante el mismo ingreso.',
      criterios_uci: 'Grado III de colecistitis o colangitis: disfuncion cardiovascular, neurologica, respiratoria, renal, hepatica o hematologica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar la gravedad, porque un grado I puede progresar.',
      seguimiento_ambulatorio: 'En la pancreatitis alcoholica, la AGA recomienda una intervencion breve sobre el alcohol durante el ingreso.',
      pronostico: 'El grado de gravedad de Tokio orienta el pronostico y el momento del drenaje o de la cirugia.',
      algoritmo: ['Aplicar los criterios de Tokio en la sospecha biliar', 'Graduar la gravedad: disfuncion de organo es grado III', 'Colangitis: antibiotico y drenaje si no responde', 'Pancreatitis: fluidos guiados y dieta oral precoz', 'Sin antibiotico profilactico en la pancreatitis', 'Biliar: colecistectomia en el mismo ingreso']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La revision de Rogers y Kirton resume el manejo moderno del abdomen agudo en cuatro gestos: una historia y una exploracion completas, la analgesia juiciosa, el uso eficaz de la imagen y la consulta quirurgica a tiempo, sin perder de vista los propios sesgos.',
    parametros: [
      'Historia y exploracion completas, como primer paso, para crear el indice de sospecha.',
      'Analgesia a dosis moderadas desde el principio, incluidos opioides si hacen falta: no altera de forma apreciable el diagnostico.',
      'Tomografia con contraste intravenoso en el adulto no gestante; ecografia primero en la embarazada.',
      'No retirar el contraste sin valorar el coste: sin el, la tomografia es un 30% menos exacta.',
      'No esperar al informe definitivo para avisar al cirujano: 2 horas o mas de espera se asocian a mas complicaciones y muertes.',
      'Umbral bajo para la imagen y la consulta en el mayor, el inmunodeprimido y el que tiene alterado el estado mental.',
      'Si los sintomas no encajan con el diagnostico de trabajo, reevaluar y ampliar el diferencial.',
      'Exploracion seriada: el abdomen cambia, y el diagnostico tambien.'
    ],
    criterios_uci_general: 'Sepsis, choque o disfuncion de organo de origen abdominal; colecistitis o colangitis de grado III.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Circuitos que prioricen la lectura de la tomografia del dolor abdominal y aseguren la consulta quirurgica precoz, protocolos de analgesia que corrijan las disparidades, y formacion explicita en sesgos cognitivos.'
  }
};

export const compCites = {
  'Analgesia precoz: no enmascara el diagnostico': { tx_medico: [1], tx_farmacologico: [1], epidemiologia: [1], pronostico: [1] },
  'Imagen: tomografia con contraste y sin esperas': { imagen: [1], tx_medico: [1], epidemiologia: [1], fisiopatologia: [1] },
  'El paciente mayor y el inmunodeprimido': { clinica: [1, 3], imagen: [1], epidemiologia: [1] },
  'Consulta quirurgica precoz y control del foco': { epidemiologia: [1], tx_medico: [1], pronostico: [1] },
  'Sesgos cognitivos: frenar a tiempo': { clinica: [1], laboratorio: [1], tx_medico: [1] },
  'Via biliar y pancreas: los cuadros con criterios': { criterios_dx: [2, 3], epidemiologia: [2, 3], tx_medico: [4], tx_farmacologico: [3, 4], tx_intervencionista: [3, 4] }
};

export const estigmasTitulo = 'Lo que hay que buscar en la exploracion';
export const estigmas = [
  { nombre: 'Defensa y rigidez abdominal', descripcion: 'Signos francos de peritonitis. Ante ellos, una radiografia puede mostrar aire libre de inmediato, pero lo que no puede esperar es la llamada al cirujano.' },
  { nombre: 'Signo de Murphy', descripcion: 'Signo local de colecistitis: especifico (87.5%) pero poco sensible (20.5%). Su ausencia no descarta nada.' },
  { nombre: 'Ictericia con fiebre', descripcion: 'Inflamacion sistemica mas colestasis: sospecha de colangitis. La triada completa de Charcot solo aparece en una cuarta parte de los casos.' },
  { nombre: 'Dolor desproporcionado a la exploracion', descripcion: 'Patron clasico de la isquemia mesenterica en su fase inicial, cuando el abdomen todavia es blando. Es la trampa que mas cuesta.' },
  { nombre: 'Masa dolorosa en hipocondrio derecho', descripcion: 'En la colecistitis, una masa palpable dolorosa es criterio de grado II (moderado).' },
  { nombre: 'Alteracion del estado mental', descripcion: 'En el anciano puede ser la unica manifestacion de un abdomen grave. Obliga a imagen precoz y a reevaluar.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Criterios de Tokio de colecistitis (calculadora disponible)': [2],
  'Criterios de Tokio de colangitis (calculadora disponible)': [3],
  'Que imagen pedir (calculadora disponible)': [1],
  'Cuando llamar al cirujano (calculadora disponible)': [1],
  'Mecanismo quirurgico': [1],
  'Estrategias de decision de Croskerry': [1]
};

export const escalaCalc = {
  'Criterios de Tokio de colecistitis (calculadora disponible)': 'tokio-colecistitis',
  'Criterios de Tokio de colangitis (calculadora disponible)': 'tokio-colangitis',
  'Que imagen pedir (calculadora disponible)': 'imagen-abdomen',
  'Cuando llamar al cirujano (calculadora disponible)': 'consulta-quirurgica'
};

export const compGroups = [
  { title: 'Lo que se hace al llegar', items: ['Analgesia precoz: no enmascara el diagnostico', 'Imagen: tomografia con contraste y sin esperas'] },
  { title: 'A quien y cuando', items: ['El paciente mayor y el inmunodeprimido', 'Consulta quirurgica precoz y control del foco'] },
  { title: 'Como se razona', items: ['Sesgos cognitivos: frenar a tiempo', 'Via biliar y pancreas: los cuadros con criterios'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son lo que se hace al llegar el paciente, y las dos contradicen habitos arraigados: la analgesia no enmascara el diagnostico, y la tomografia sin contraste o esperando el informe cuesta caro. Las dos siguientes son a quien hay que mirar con mas cuidado y cuando hay que llamar al cirujano. La quinta es el error que no depende de ninguna prueba: los sesgos. Y la ultima reune los cuadros biliares y pancreaticos que tienen criterios propios.';

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
  root: { title: 'ABDOMEN AGUDO', color: '#8a5a2e', target: 'definicion' },
  branches: [
    { title: 'Al llegar', sub: 'Analgesia e imagen', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Analgesia ya', sub: 'No enmascara', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Tomografia con contraste', sub: 'Sin esperar el informe', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Quien y cuando', sub: 'No esperar', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Mayor o inmunodeprimido', sub: 'Exploracion enga&#241;osa', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Cirujano pronto', sub: 'Control del foco', color: '#8c2e2e', target: 'complicaciones' }
    ] },
    { title: 'Como razonar', sub: 'Sesgos y criterios', color: '#7a4363', target: 'complicaciones', leaves: [
      { title: 'Sesgos', sub: 'Anclaje y confirmacion', color: '#7a4363', target: 'complicaciones' },
      { title: 'Biliar y pancreas', sub: 'Tokio y AGA', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 2, 3], no_invasivos: [1, 2, 3], imagen: [1] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1];
export const figurasDefinicion = ['abdomen-cuatro-errores'];
export const figurasClasificacion = ['abdomen-imagen', 'abdomen-tokio'];

export const figuras = {
  'abdomen-cuatro-errores': {
    titulo: 'Los cuatro puntos donde se pierde el diagnostico',
    fuente: 'Adaptado del diagrama de causa y efecto de Rogers SO Jr, Kirton OC. Acute Abdomen in the Modern Era. N Engl J Med 2024;391:60-67.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Punto</th><th>Lo que enfrenta la revision de 2024</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Analgesia</td><td>La creencia de que enmascara. <strong>No altera de forma apreciable el diagnostico</strong> ni el plan, y se respalda darla en dosis moderadas antes de la imagen y del cirujano</td></tr>
            <tr><td class="figure-org">Imagen</td><td>La tomografia <strong>con contraste intravenoso</strong> es la tecnica principal en el adulto no gestante; sin contraste es un 30% menos exacta; esperar <strong>2 horas o mas</strong> al informe se asocia a complicaciones y muertes</td></tr>
            <tr><td class="figure-org">Consulta quirurgica</td><td>La consulta <strong>precoz</strong> reduce complicaciones y muertes; las decisiones no deben quedar bloqueadas por desacuerdos sobre la imagen</td></tr>
            <tr><td class="figure-org">Sesgos cognitivos</td><td><strong>Atribucion, confirmacion, anclaje</strong> y momento diagnostico. En la incertidumbre, frenar a proposito</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El diagrama de la revision a&#241;ade los factores del paciente que agravan cada punto: <strong>edad avanzada</strong>, <strong>alteracion del estado mental</strong>, <strong>glucocorticoides u otros inmunosupresores</strong> y la <strong>raza o grupo etnico</strong>, porque los pacientes negros y de otros grupos desatendidos recibieron entre un 22% y un 30% menos analgesia en urgencias y menos consultas quirurgicas. Y el principio que no ha cambiado desde Cope: una historia y una exploracion completas son el primer paso, y si los sintomas no encajan con el diagnostico, hay que reevaluar.</div>`
  },
  'abdomen-imagen': {
    titulo: 'Que imagen, en quien',
    fuente: 'Rogers SO Jr, Kirton OC. Acute Abdomen in the Modern Era. N Engl J Med 2024;391:60-67.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tecnica</th><th>Cuando</th><th>Limite</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Tomografia con contraste intravenoso</td><td><span class="figure-tag fail">Principal</span> Adulto no gestante en urgencias</td><td>Sobreuso: 20% no indicadas en un estudio</td></tr>
            <tr><td class="figure-org">Tomografia sin contraste</td><td>Solo si el contraste se descarta tras valorar riesgo y beneficio</td><td>Un 30% menos exacta</td></tr>
            <tr><td class="figure-org">Ecografia</td><td>Patologia biliar, apendicitis y <strong>primera prueba en la embarazada</strong></td><td>Muy dependiente del operador</td></tr>
            <tr><td class="figure-org">Radiografia simple</td><td>Peritonitis franca: buscar aire libre rapido</td><td>Poco sensible y especifica</td></tr>
            <tr><td class="figure-org">Resonancia</td><td>Alternativa; mujer que puede estar embarazada y dolor pelvico</td><td>Disponibilidad</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El contraste <strong>oral</strong> no es un componente estandar de la tomografia del dolor abdominal agudo. La nefropatia por contraste es poco frecuente, y retirar el contraste intravenoso tiene un <strong>coste diagnostico</strong> que debe entrar en la decision. Y la imagen no sustituye al juicio: no hay pruebas convincentes de que la mayor exactitud de la tomografia mejore por si sola la estancia, las complicaciones o la mortalidad. Lo que si se asocia a mejor resultado es no dejar que la imagen retrase la consulta quirurgica.</div>`
  },
  'abdomen-tokio': {
    titulo: 'Colecistitis y colangitis: criterios de Tokio 2018',
    fuente: 'Yokoe M, et al. J Hepatobiliary Pancreat Sci 2018;25:41-54. Kiriyama S, et al. J Hepatobiliary Pancreat Sci 2018;25:17-30.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Colecistitis</th><th>Colangitis</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">A</td><td>Signos locales: Murphy; masa, dolor o defensa en hipocondrio derecho</td><td>Inflamacion sistemica: fiebre o escalofrios; analitica inflamatoria</td></tr>
            <tr><td class="figure-org">B</td><td>Signos sistemicos: fiebre; proteina C reactiva o leucocitos elevados</td><td>Colestasis: ictericia; pruebas hepaticas alteradas</td></tr>
            <tr><td class="figure-org">C</td><td>Imagen caracteristica</td><td>Dilatacion biliar o causa visible (litiasis, estenosis, protesis)</td></tr>
            <tr><td class="figure-org">Sospecha</td><td>A + B</td><td>A + (B o C)</td></tr>
            <tr><td class="figure-org">Definitivo</td><td>A + B + C</td><td>A + B + C</td></tr>
            <tr><td class="figure-org">Grado III</td><td colspan="2"><span class="figure-tag fail">Disfuncion de organo</span> Hipotension con noradrenalina o dopamina de 5 o mas; alteracion de conciencia; PaO2/FiO2 menor de 300; oliguria o creatinina mayor de 2; INR mayor de 1.5; plaquetas menores de 100.000</td></tr>
            <tr><td class="figure-org">Grado II</td><td>Uno de: leucocitos mayores de 18.000; masa dolorosa; mas de 72 h; inflamacion local marcada</td><td>Dos de: leucocitos mayores de 12.000 o menores de 4.000; fiebre de 39 o mas; edad de 75 o mas; bilirrubina de 5 o mas; hipoalbuminemia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos detalles que explican el dise&#241;o. El <strong>signo de Murphy</strong> es especifico pero solo tuvo un 20.5% de sensibilidad, de modo que su ausencia no descarta la colecistitis. Y el <strong>dolor abdominal</strong> se excluyo de los criterios de colangitis porque al incluirlo la especificidad caia al 66% por los falsos positivos de colecistitis; sin el, la sensibilidad fue del 91.8% y la especificidad del 77.7%. La triada de Charcot completa solo aparecio en el 21% al 26% de los pacientes.</div>`
  }
};
