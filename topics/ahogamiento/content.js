// topics/ahogamiento/content.js - Modulo 87: Ahogamiento.
// Basado en las guias de practica de la Wilderness Medical Society para la prevencion y el
// tratamiento del ahogamiento (Schmidt AC, Sempsrott JR, Hawkins SC, et al. Wilderness Environ
// Med 2016;27(2):236-251, doi:10.1016/j.wem.2015.12.019), que ya estaban en Bibliografia/. La
// ventilacion protectora remite a la guia de SDRA de la ESICM de 2023. Texto sin acentos; la
// enye va como entidad.

export const meta = {
  id: 'ahogamiento',
  titulo: 'Ahogamiento',
  subtitulo: 'Modulo 87 &middot; Medicina Critica',
  accent: '#2f5f7a',
  accentDim: '#4f7f9a'
};

export const definicionText = `<p style="margin:0 0 14px;">El Congreso Mundial sobre Ahogamiento de 2002 lo definio como <strong>el proceso de sufrir un deterioro respiratorio por sumersion o inmersion en un liquido</strong>, y admite solo tres desenlaces: con morbilidad, sin morbilidad o muerte. Los terminos antiguos (casi ahogamiento, ahogamiento humedo o seco, activo o pasivo, en agua dulce o salada, secundario) <strong>no deben usarse</strong>: los datos de decadas muestran que no tienen relevancia fisiologica, porque la via final comun es siempre la misma, la <strong>hipoxemia</strong> que acaba en parada cardiorrespiratoria.</p>
<p style="margin:0 0 14px;">Esa idea lo ordena todo. Como la lesion primaria es la <strong>hipoxia cerebral</strong>, la reanimacion del ahogado no sigue el orden de la parada cardiaca habitual: aqui se recupera el modelo <strong>A-B-C</strong>, con la via aerea y las ventilaciones por delante, porque la RCP solo con compresiones no sirve para un problema que empezo en el pulmon. La fibrilacion ventricular es rara (menos del 10%), y el ritmo tipico es taquicardia, luego bradicardia, actividad electrica sin pulso y asistolia.</p>
<p style="margin:0 0 14px;">Se estiman unas <strong>372.000 muertes al a&#241;o</strong> en el mundo. El grupo de mayor riesgo son los ni&#241;os de 1 a 4 a&#241;os en piscinas domesticas, seguidos de adolescentes y adultos jovenes en aguas naturales. Hasta un 10% de los ahogamientos pueden deberse a quedar atrapado en un vehiculo sumergido, y el alcohol aparece en el 30% al 70% de las muertes. La prevencion salva mas vidas que cualquier rescate o tratamiento.</p>`;

export const bibliografia = [
  'Schmidt AC, Sempsrott JR, Hawkins SC, Arastu AS, Cushing TA, Auerbach PS. Wilderness Medical Society Practice Guidelines for the Prevention and Treatment of Drowning. Wilderness Environ Med. 2016;27(2):236-251. doi:10.1016/j.wem.2015.12.019.',
  'Grasselli G, Calfee CS, Camporota L, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med. 2023;49(7):727-759.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El ahogado que llega bien',
      tituloB: 'El ahogado que empeora',
      compensada: 'Paciente rescatado con tos leve como unico sintoma y auscultacion normal. En el gran estudio de casi 42.000 rescates de socorristas en el oceano, este grupo tuvo una mortalidad del 0%. Puede liberarse en el lugar o, en urgencias, darse de alta tras un periodo de observacion si la funcion respiratoria es normal y no se deteriora.',
      descompensada: 'Estertores con espuma en la via aerea, edema agudo de pulmon, hipotension, parada respiratoria o cardiorrespiratoria, con una mortalidad que sube del 0.6% al 93% segun el grado. Y el paciente inicialmente leve que se deteriora: en series pediatricas, todo deterioro ocurrio en las primeras 4 a 4.5 horas, con un caso a las 7. La radiografia inicial puede ser normal y alterarse en las primeras horas.'
    },
    laboratorio: [
      { prueba: 'Gasometria arterial', utilidad: 'Indicada si hay hipoxemia o dificultad respiratoria (cianosis, saturacion baja, taquipnea, taquicardia persistente) para guiar el soporte respiratorio.' },
      { prueba: 'Hemograma y electrolitos', utilidad: 'NO de rutina. Las alteraciones descritas en perros con grandes volumenes instilados (11 mL/kg o mas) no aparecen con los 1 a 3 mL/kg que aspira el ahogado humano, y ningun estudio ha mostrado alteraciones que guien el tratamiento.' },
      { prueba: 'Glucemia y toxicos', utilidad: 'Si la conciencia no se recupera con la reanimacion o no se sabe por que se sumergio el paciente: la hipoglucemia o una intoxicacion pueden ser la causa del ahogamiento.' },
      { prueba: 'Cultivos de esputo o aspirado y antigenos urinarios', utilidad: 'Solo si tras la reanimacion inicial aparece una neumonia, para guiar el antibiotico. Los germenes del agua son a menudo atipicos u hongos resistentes a los tratamientos empiricos habituales.' },
      { prueba: 'Temperatura central', utilidad: 'La hipotermia es frecuente porque casi siempre el agua esta por debajo de unos 33 grados, y revertirla es prioritario.' },
      { prueba: 'Electrocardiograma', utilidad: 'Tras la reanimacion, por la lesion miocardica hipoxica, y para buscar causas como el QT largo, que se asocia a mas ahogamientos.' }
    ],
    no_invasivos: [
      { metodo: 'Grado de Szpilman (calculadora disponible)', interpretacion: 'Clasifica por la auscultacion, la presencia de espuma, el edema pulmonar, la tension y la parada, y asocia una mortalidad a cada grado.', cutoff: 'Del grado 0 (0%) al 6 (93%)' },
      { metodo: 'Cuando cesar el rescate (calculadora disponible)', interpretacion: 'Aplica los umbrales de la guia de tiempo de sumersion, temperatura del agua y duracion de la reanimacion.', cutoff: 'Mas de 30 min en agua de mas de 6 grados, o mas de 90 min en agua de menos de 6' },
      { metodo: 'Alta tras observacion (calculadora disponible)', interpretacion: 'Criterios para liberar en el lugar o dar de alta desde urgencias.', cutoff: 'Observacion de 4 a 6 horas con funcion respiratoria normal' },
      { metodo: 'Ventilacion protectora (calculadora disponible)', interpretacion: 'Volumen corriente por peso predicho y objetivos que la guia toma de los protocolos de SDRA.', cutoff: 'Volumen corriente de 6 a 8 mL/kg; meseta menor de 30' },
      { metodo: 'Auscultacion pulmonar', interpretacion: 'Es el dato que mas pesa para clasificar y decidir. Unos pulmones normales con tos leve se asociaron a mortalidad del 0%.', cutoff: 'Estertores o espuma: evacuar o ingresar' },
      { metodo: 'Escala de Glasgow', interpretacion: 'El estado mental condiciona la ventilacion no invasiva, la inmovilizacion cervical y el alta.', cutoff: 'Normal para el alta; alterado contraindica relativamente la no invasiva' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'La inicial NO se correlaciona con la gasometria, el pronostico ni el destino del paciente, aunque los que desarrollan SDRA suelen alterarla en las primeras horas. Sirve para seguir la evolucion, no para pronosticar al ingreso. Pocos mililitros aspirados pueden imitar una neumonia.' },
      { modalidad: 'Tomografia craneal', hallazgos: 'Una tomografia inicial NORMAL no tiene valor pronostico; una anormal se asocio a lesion cerebral grave o muerte. No se pide de rutina en el paciente despierto y alerta salvo que cambie su estado.' },
      { modalidad: 'Imagen de columna cervical', hallazgos: 'Solo si hay sospecha de lesion: la incidencia en ahogados es baja (0.5% a 5%), casi siempre por zambullida desde altura.' },
      { modalidad: 'Ecografia pulmonar', hallazgos: 'Puede ayudar a seguir el edema y la perdida de aireacion en el paciente ventilado, como en otros cuadros de SDRA.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion util es la de <strong>gravedad clinica</strong> de Szpilman, que la guia reproduce: del <strong>grado 0</strong> (auscultacion normal sin tos, mortalidad 0%) al <strong>grado 6</strong> (parada cardiorrespiratoria, mortalidad 93%), pasando por la tos con auscultacion normal (grado 1), los estertores con poca espuma (grado 2, 0.6%), el edema agudo de pulmon con pulso radial (grado 3, 5.2%) o con hipotension (grado 4, 19%) y la parada respiratoria (grado 5, 44%). Lo que la guia descarta son las clasificaciones antiguas: <strong>agua dulce o salada, humedo o seco, casi ahogamiento o ahogamiento secundario</strong> no cambian ni el tratamiento ni el pronostico.`,
    escalas: [
      { nombre: 'Grado de Szpilman (calculadora disponible)', componentes: 'Auscultacion, tos, espuma en la via aerea, edema agudo de pulmon, pulso radial o hipotension, y parada respiratoria o cardiorrespiratoria.', formula: 'Grados 0 a 6.', interpretacion: 'Mortalidad de 0%, 0%, 0.6%, 5.2%, 19%, 44% y 93%. El mayor salto llega con la aparicion de estertores y, despues, con la caida de la tension (sistolica menor de 90 o media menor de 60).' },
      { nombre: 'Cuando cesar el rescate (calculadora disponible)', componentes: 'Tiempo de sumersion conocido, temperatura del agua, duracion de la RCP continua y seguridad del equipo.', formula: 'Umbrales de la guia.', interpretacion: 'Puede ser razonable cesar con una sumersion de mas de 30 minutos en agua de mas de 6 grados, de mas de 90 minutos en agua de menos de 6, o tras 25 minutos de RCP continua. Si peligra la seguridad del equipo, se cesa siempre.' },
      { nombre: 'Alta tras observacion (calculadora disponible)', componentes: 'Sintomas, auscultacion, estado mental, tension y horas de observacion.', formula: 'Criterios de la guia para el lugar y para urgencias.', interpretacion: 'Asintomatico salvo tos leve y auscultacion normal: puede liberarse en el lugar. En urgencias, alta tras 4 a 6 horas con estado mental normal, funcion respiratoria normalizada y sin deterioro.' },
      { nombre: 'Ventilacion protectora (calculadora disponible)', componentes: 'Sexo y talla para el peso predicho.', formula: 'Volumen corriente de 6 a 8 mL/kg de peso predicho.', interpretacion: 'Protocolo de SDRA: meseta menor de 30 cmH2O, y PEEP y FiO2 ajustadas para una PaO2 de 55 a 80 mmHg.' },
      { nombre: 'Tiempo de sumersion', componentes: 'Minutos bajo el agua.', formula: 'Factor pronostico principal.', interpretacion: 'Es el predictor mas importante del resultado. Mas de 10 minutos se asocian a mayor mortalidad o supervivencia con da&#241;o neurologico grave; el pronostico es malo por encima de 30 minutos sea cual sea la temperatura del agua.' },
      { nombre: 'Criterios de inmovilizacion cervical', componentes: 'Mecanismo significativo, estado mental alterado (Glasgow menor de 15 o intoxicacion), deficit focal y lesion que distraiga.', formula: 'Considerar si hay traumatismo cerrado y alguno de ellos.', interpretacion: 'La inmovilizacion de rutina es innecesaria sin signos de trauma ni zambullida, y nunca debe retrasar la via aerea en el paciente con dificultad respiratoria grave.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Rescate seguro y reanimacion en el agua',
      color: '#2f5f7a',
      definicion: 'Conjunto de decisiones para sacar al ahogado del agua sin a&#241;adir victimas y para decidir si se ventila antes de llegar a tierra.',
      fisiopatologia: 'Las mismas condiciones que hicieron ahogarse al paciente siguen presentes y ponen en riesgo al rescatador. Dentro del agua no es posible hacer compresiones toracicas eficaces, y el objetivo es revertir la hipoxia cerebral cuanto antes.',
      epidemiologia: 'Hay una alta prevalencia de ahogamientos mortales y no mortales entre personas sin formacion que intentan un rescate dentro del agua. En las inundaciones, hasta un 10% de los accidentes de trafico acaban en ahogamiento en el vehiculo.',
      factores_riesgo: ['Rescatador sin formacion que entra en el agua', 'Aguas rapidas, oleaje o hielo', 'Vehiculo que se hunde', 'Ausencia de dispositivos de flotacion'],
      clinica: 'Paciente en el agua, consciente o no, con o sin respiracion eficaz.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Quien no tiene formacion rescata desde un lugar seguro: alcanzar, lanzar, remar, no entrar (Reach, Throw, Row, Don\'t Go), con una rama, una cuerda, una boya o cualquier objeto que flote. Quien tiene formacion actua segun su nivel y con el equipo de proteccion adecuado. Del vehiculo que se hunde se sale de inmediato, en la fase inicial de flotacion (los primeros 30 segundos a 2 minutos), y no esperando a que toque fondo.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'Reanimacion en el agua: solo ventilaciones, nunca compresiones, por un rescatador formado capaz de comprobar el pulso en el agua, en un paciente inconsciente CON pulso y con respiracion ausente o ineficaz, con condiciones seguras y una distancia hasta tierra que lo justifique. Si no hay pulso, se saca del agua lo antes posible sin demorarse.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Los datos de la reanimacion en el agua proceden de un unico estudio retrospectivo de socorristas brasile&#241;os en el oceano, que mostro mejor supervivencia y resultado neurologico.',
      algoritmo: ['Seguridad del rescatador ante todo', 'Sin formacion: alcanzar, lanzar, remar, no entrar', 'Vehiculo: salir en los primeros segundos de flotacion', 'En el agua: solo ventilaciones y solo si hay pulso', 'Sin pulso: sacar del agua cuanto antes', 'Nunca compresiones dentro del agua']
    },
    {
      nombre: 'Reanimacion inicial: la via aerea primero',
      color: '#8c2e2e',
      definicion: 'Reanimacion del ahogado en parada o con dificultad respiratoria, en la que la oxigenacion y la ventilacion tienen prioridad sobre las compresiones.',
      fisiopatologia: 'El ahogamiento obstruye la via aerea con agua y produce hipoxia cerebral; peque&#241;as cantidades llegan al pulmon y causan atelectasias, lesion celular y edema. El corazon se para por hipoxia: taquicardia por la lucha, despues bradicardia, actividad electrica sin pulso y asistolia. Si la hipoxia miocardica persiste, la desfibrilacion puede fallar sin oxigenar y ventilar a la vez.',
      epidemiologia: 'La fibrilacion ventricular aparece en menos del 10% de los ahogados.',
      factores_riesgo: ['Iniciar con compresiones sin ventilar', 'Retrasar las ventilaciones por la maniobra de Heimlich', 'Inmovilizacion cervical que retrasa la via aerea', 'Hipotermia no tratada'],
      clinica: 'Paciente en parada o con respiracion ineficaz tras la sumersion.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Desfibrilador externo automatico: debe usarse si esta disponible, y su uso en un entorno mojado no esta contraindicado si los parches estan bien pegados y nadie toca al paciente.',
      dx_diferencial: 'Causa previa del ahogamiento: sindrome coronario, arritmia por QT largo, convulsion, hipoglucemia o intoxicacion.',
      tx_medico: 'Modelo A-B-C tradicional: abrir la via aerea y dar ventilaciones con presion positiva ademas de las compresiones. Los cambios hacia la RCP solo con compresiones NO se aplican al ahogado. Con via aerea avanzada, una ventilacion cada 6 a 8 segundos con compresiones continuas. Tratar la hipotermia de forma activa.',
      tx_farmacologico: 'Oxigeno a la concentracion mas alta disponible. Cualquier oxigeno, incluso boca a boca o bolsa con aire ambiente, es mejor que ninguno.',
      tx_intervencionista: 'La bolsa y mascarilla, si consigue que el torax se eleve, puede ser preferible a algunos dispositivos supragloticos, que pueden fugar por la lesion pulmonar y el edema. La maniobra de Heimlich NO se recomienda: retrasa las ventilaciones y prolonga la hipoxemia. La inmovilizacion cervical solo si hay signos de lesion, deficit focal, mecanismo de riesgo o alteracion mental, y nunca antes que la via aerea.',
      criterios_uci: 'Todo paciente que requiera reanimacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuidados posparada y busqueda de la causa del ahogamiento.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Interrumpir el proceso de ahogamiento llevando oxigeno al cerebro lo antes posible es lo que decide el resultado.',
      algoritmo: ['A-B-C: via aerea y ventilaciones primero', 'Oxigeno a la maxima concentracion', 'Compresiones con ventilaciones, no solo compresiones', 'Desfibrilador si hay, sin retrasar las ventilaciones', 'Sin Heimlich', 'Cuello solo si hay sospecha de lesion', 'Tratar la hipotermia']
    },
    {
      nombre: 'Soporte respiratorio en el hospital',
      color: '#3d5a73',
      definicion: 'Ventilacion invasiva y no invasiva del ahogado con insuficiencia respiratoria, cuya lesion pulmonar se trata como un sindrome de dificultad respiratoria aguda.',
      fisiopatologia: 'El agua aspirada lava el surfactante y lesiona el epitelio y el endotelio alveolar, con atelectasias y edema por aumento de permeabilidad, un patron similar al del SDRA.',
      epidemiologia: 'En 2010 hubo 12.900 visitas a urgencias por ahogamiento en Estados Unidos, y el 20% de los pacientes ingreso.',
      factores_riesgo: ['Edema pulmonar en la valoracion inicial', 'Sumersion prolongada', 'Alteracion del estado mental', 'Vomitos y aspiracion'],
      clinica: 'Hipoxemia, taquipnea, estertores y espuma en la via aerea.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Gasometria arterial si hay hipoxemia o dificultad respiratoria.',
      imagen: 'Radiografia para seguir la evolucion, no para pronosticar.',
      complementarios: 'Pulsioximetria y capnografia continuas.',
      dx_diferencial: 'Neumonia precoz frente a neumonitis inflamatoria por el agua: la fiebre y la leucocitosis pueden deberse al estres y a la irritacion, sin infeccion.',
      tx_medico: 'Ventilacion mecanica segun los protocolos de SDRA: volumen corriente de 6 a 8 mL/kg, ajustando volumen y frecuencia para una presion meseta menor de 30, y PEEP y FiO2 para una PaO2 de 55 a 80 mmHg. La ventilacion no invasiva puede usarse en el paciente ALERTA con sintomas leves o moderados; precaucion si hay alteracion mental o vomitos, por el riesgo de aspiracion.',
      tx_farmacologico: 'Corticoides: NO de rutina; una revision de 35 a&#241;os no encontro ensayos aleatorizados. Antibioticos: NO de forma empirica; solo si hay neumonia tras la reanimacion inicial, guiados por los cultivos.',
      tx_intervencionista: 'Intubacion si la ventilacion no invasiva fracasa, hay alteracion mental o vomitos.',
      criterios_uci: 'Edema pulmonar, hipotension, necesidad de ventilacion o deterioro neurologico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la aparicion de neumonia: fiebre, mas esputo y cambios en la auscultacion que persisten tras la fase inicial.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La lesion pulmonar del ahogado sin da&#241;o cerebral grave suele recuperarse.',
      algoritmo: ['Gasometria si hay hipoxemia', 'Paciente alerta y leve o moderado: no invasiva posible', 'Alteracion mental o vomitos: precaucion o intubar', 'Ventilacion protectora: 6 a 8 mL/kg, meseta menor de 30', 'PaO2 objetivo de 55 a 80', 'Sin corticoides ni antibiotico empirico']
    },
    {
      nombre: 'Lo que no hace falta: pruebas y tratamientos de rutina',
      color: '#5a4a8c',
      definicion: 'Practicas extendidas en el ahogamiento que la guia desaconseja o considera sin evidencia suficiente.',
      fisiopatologia: 'Muchas de estas practicas nacen de modelos animales con volumenes de agua muy superiores a los que aspira el ser humano, o de la vieja distincion entre agua dulce y salada, que no tiene relevancia clinica.',
      epidemiologia: 'Los estudios caninos de los a&#241;os sesenta instilaban hasta 44 mL/kg; el ahogado humano aspira de 1 a 3 mL/kg, y las alteraciones electroliticas solo aparecieron con 11 mL/kg o mas.',
      factores_riesgo: ['Clasificar por agua dulce o salada', 'Pedir analitica completa a todos', 'Antibiotico empirico por una radiografia alterada', 'Corticoides para el pulmon'],
      clinica: 'El paciente estable tras un ahogamiento.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Hemograma y electrolitos NO de rutina. Gasometria solo si hay hipoxemia o dificultad respiratoria. Glucemia y toxicos si no se recupera la conciencia o la causa de la sumersion es desconocida.',
      imagen: 'Radiografia inicial sin valor pronostico. Tomografia craneal inicial normal sin valor pronostico; no de rutina en el paciente despierto.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Abandonar los terminos casi ahogamiento, ahogamiento humedo o seco, activo o pasivo, de agua dulce o salada y secundario.',
      tx_farmacologico: 'Sin corticoides de rutina (recomendacion 1C). Sin antibiotico empirico (recomendacion 1A). La hipotermia terapeutica tras la recuperacion de la circulacion tiene evidencia insuficiente para recomendarla o desaconsejarla en el ahogado.',
      tx_intervencionista: 'Sin maniobra de Heimlich.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Evitar estas practicas no empeora el resultado y evita costes, resistencias y retrasos.',
      algoritmo: ['Sin terminos antiguos', 'Sin analitica de rutina', 'Gasometria solo si hay hipoxemia', 'Sin corticoides', 'Sin antibiotico empirico', 'Sin Heimlich']
    },
    {
      nombre: 'Gravedad, pronostico y cuando parar',
      color: '#7a4363',
      definicion: 'Estimacion del pronostico por la clinica inicial y el tiempo de sumersion, y decision de cesar el rescate o la reanimacion.',
      fisiopatologia: 'La duracion de la hipoxia cerebral es lo que determina el da&#241;o, y por eso el tiempo de sumersion es el predictor principal. El agua muy fria puede proteger el cerebro, sobre todo en ni&#241;os peque&#241;os.',
      epidemiologia: 'En una serie holandesa de 160 ni&#241;os ahogados con hipotermia, de los 98 que recibieron mas de 30 minutos de RCP solo sobrevivieron 11, todos con da&#241;o neurologico grave.',
      factores_riesgo: ['Sumersion de mas de 10 minutos', 'Mas de 25 minutos de reanimacion', 'Tiempo prolongado hasta la atencion avanzada', 'Edema pulmonar con hipotension', 'Parada cardiorrespiratoria'],
      clinica: 'Grados de Szpilman de 0 a 6 segun auscultacion, espuma, edema, tension y parada.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'Tomografia craneal anormal al inicio: asociada a lesion grave o muerte.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Puede ser razonable cesar el rescate y la reanimacion con una sumersion conocida de mas de 30 minutos en agua de mas de 6 grados, de mas de 90 minutos en agua de menos de 6, o tras 25 minutos de RCP continua. El tiempo de sumersion se cuenta desde la llegada de los servicios de emergencia, porque el total suele desconocerse. Si peligra el equipo, se cesa siempre.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'Hay casos de buena recuperacion neurologica tras sumersiones prolongadas, sobre todo en ni&#241;os de 6 a&#241;os o menos en agua de menos de 6 grados, y con oxigenacion extracorporea.',
      criterios_uci: 'Grados 3 a 6.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Valoracion neurologica seriada.',
      seguimiento_ambulatorio: 'Seguimiento neurologico y apoyo a la familia.',
      pronostico: 'Mortalidad por grados: 0 y 1, 0%; 2, 0.6%; 3, 5.2%; 4, 19%; 5, 44%; 6, 93%. El pronostico es malo con sumersiones de mas de 30 minutos, sea cual sea la temperatura del agua.',
      algoritmo: ['Graduar con Szpilman', 'Estimar el tiempo de sumersion', 'Mas de 10 min: peor pronostico', 'Agua de mas de 6 grados: cesar tras 30 min de sumersion', 'Agua de menos de 6: hasta 90 min', 'O tras 25 min de RCP continua', 'Seguridad del equipo por encima de todo']
    },
    {
      nombre: 'Alta, observacion y prevencion',
      color: '#3f6b52',
      definicion: 'Decision de liberar, observar o ingresar al ahogado leve, y medidas que evitan el siguiente ahogamiento.',
      fisiopatologia: 'La lesion pulmonar puede manifestarse en las horas siguientes, pero casi todo deterioro aparece en las primeras 4 a 7 horas.',
      epidemiologia: 'En un estudio de seguimiento telefonico, ninguno de los pacientes liberados en el lugar o dados de alta tras 1 a 6 horas presento efectos tardios.',
      factores_riesgo: ['Estertores, tos intensa o espuma', 'Alteracion del estado mental', 'Hipotension', 'Imposibilidad de observar o evacuar'],
      clinica: 'Paciente asintomatico o con tos leve tras el rescate.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Reevaluacion de la auscultacion y la saturacion durante la observacion.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'En el lugar: asintomatico salvo tos leve con auscultacion normal, puede liberarse; estertores, tos intensa, espuma, alteracion mental o hipotension obligan a evacuar; si la evacuacion es dificil, observar 4 a 6 horas al paciente leve con estado mental normal. En urgencias: alta tras 4 a 6 horas de observacion con estado mental normal, funcion respiratoria normalizada y sin deterioro.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Deterioro durante la observacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ingreso si no se cumplen los criterios de alta.',
      seguimiento_ambulatorio: 'Consejo sobre el riesgo a quien tiene cardiopatia isquemica, QT largo, epilepsia u otras limitaciones, que se asocian a mas ahogamientos.',
      pronostico: 'La prevencion salva mas vidas que el rescate o el tratamiento: chaleco salvavidas bien ajustado en toda actividad nautica (el 85% de los fallecidos en accidentes de embarcaciones no lo llevaba), evitar el alcohol (presente en el 30% al 70% de las muertes), capacidad de flotar y avanzar 25 metros, y socorristas en las playas (23 muertes en playas vigiladas frente a 92 en no vigiladas).',
      algoritmo: ['Tos leve y auscultacion normal: liberar posible', 'Estertores, espuma, mente alterada o hipotension: evacuar', 'Urgencias: observar 4 a 6 horas', 'Alta si mente normal y respiracion normal sin deterioro', 'Aconsejar a cardiopatas, QT largo y epilepticos', 'Chaleco, sin alcohol, saber nadar 25 m']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En el hospital, el ahogado se trata como lo que es: un paciente hipoxemico con una lesion pulmonar parecida al SDRA, al que no hay que someter a las pruebas y tratamientos que heredamos de modelos animales.',
    parametros: [
      'Oxigeno a la maxima concentracion tolerada mientras haya hipoxemia.',
      'Gasometria solo si hay hipoxemia o dificultad respiratoria; sin analitica de rutina.',
      'Ventilacion no invasiva en el paciente alerta con sintomas leves o moderados; precaucion con alteracion mental o vomitos.',
      'Ventilacion invasiva segun protocolos de SDRA: 6 a 8 mL/kg, meseta menor de 30, PaO2 de 55 a 80.',
      'Sin corticoides ni antibiotico empirico; cultivos si aparece neumonia.',
      'Tratar la hipotermia de forma activa.',
      'Buscar la causa del ahogamiento si no esta clara: hipoglucemia, toxicos, arritmia o convulsion.',
      'Observacion de 4 a 6 horas antes del alta en el paciente leve.'
    ],
    criterios_uci_general: 'Edema pulmonar, hipotension, necesidad de ventilacion, parada cardiorrespiratoria recuperada o deterioro neurologico.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Chaleco salvavidas en toda actividad nautica, evitar el alcohol y otras sustancias antes y durante las actividades acuaticas, saber flotar y avanzar 25 metros, socorristas en aguas abiertas, salir del vehiculo en cuanto cae al agua, y consejo especifico a quienes tienen cardiopatia, QT largo o epilepsia.'
  }
};

export const compCites = {
  'Rescate seguro y reanimacion en el agua': { tx_medico: [1], tx_intervencionista: [1], epidemiologia: [1] },
  'Reanimacion inicial: la via aerea primero': { tx_medico: [1], tx_intervencionista: [1], epidemiologia: [1], complementarios: [1] },
  'Soporte respiratorio en el hospital': { tx_medico: [1, 2], tx_farmacologico: [1] },
  'Lo que no hace falta: pruebas y tratamientos de rutina': { laboratorio: [1], imagen: [1], tx_farmacologico: [1] },
  'Gravedad, pronostico y cuando parar': { tx_medico: [1], pronostico: [1], epidemiologia: [1] },
  'Alta, observacion y prevencion': { tx_medico: [1], pronostico: [1], seguimiento_ambulatorio: [1] }
};

export const estigmasTitulo = 'Lo que decide el destino del paciente';
export const estigmas = [
  { nombre: 'Tos leve con auscultacion normal', descripcion: 'Grado 1 de Szpilman, mortalidad del 0%. Puede liberarse en el lugar o darse de alta tras la observacion.' },
  { nombre: 'Estertores con poca espuma', descripcion: 'Grado 2, mortalidad del 0.6%. Es el limite a partir del cual hay que evacuar o ingresar.' },
  { nombre: 'Edema agudo de pulmon', descripcion: 'Grado 3 con pulso radial (5.2%) o grado 4 con hipotension (19%). Oxigeno, soporte ventilatorio y criticos.' },
  { nombre: 'Hipotension', descripcion: 'Sistolica menor de 90 o media menor de 60: el segundo gran salto de mortalidad tras la aparicion de estertores.' },
  { nombre: 'Alteracion del estado mental', descripcion: 'Contraindica relativamente la ventilacion no invasiva por el riesgo de vomito y aspiracion, y obliga a buscar la causa de la sumersion.' },
  { nombre: 'Signos de trauma o zambullida', descripcion: 'Solo entonces se considera la inmovilizacion cervical, y nunca por delante de la via aerea. La lesion cervical en ahogados es rara (0.5% a 5%).' }
];

export const biopsia = null;

export const escalaRefs = {
  'Grado de Szpilman (calculadora disponible)': [1],
  'Cuando cesar el rescate (calculadora disponible)': [1],
  'Alta tras observacion (calculadora disponible)': [1],
  'Ventilacion protectora (calculadora disponible)': [1, 2],
  'Tiempo de sumersion': [1],
  'Criterios de inmovilizacion cervical': [1]
};

export const escalaCalc = {
  'Grado de Szpilman (calculadora disponible)': 'szpilman',
  'Cuando cesar el rescate (calculadora disponible)': 'cese-ahogamiento',
  'Alta tras observacion (calculadora disponible)': 'alta-ahogamiento',
  'Ventilacion protectora (calculadora disponible)': 'ventilacion-ahogado'
};

export const compGroups = [
  { title: 'En el agua y en la orilla', items: ['Rescate seguro y reanimacion en el agua', 'Reanimacion inicial: la via aerea primero'] },
  { title: 'En el hospital', items: ['Soporte respiratorio en el hospital', 'Lo que no hace falta: pruebas y tratamientos de rutina'] },
  { title: 'Decidir', items: ['Gravedad, pronostico y cuando parar', 'Alta, observacion y prevencion'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son el agua y la orilla: rescatar sin a&#241;adir victimas y reanimar con la via aerea por delante, que es lo que distingue al ahogado de la parada cardiaca habitual. Las dos siguientes son el hospital: el pulmon se ventila como un SDRA, y buena parte de lo que se hacia por costumbre (analitica completa, corticoides, antibiotico empirico, Heimlich) no tiene respaldo. Las dos ultimas son las decisiones: el pronostico y cuando parar, y cuando puede irse a casa.';

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
  root: { title: 'AHOGAMIENTO', color: '#2f5f7a', target: 'definicion' },
  branches: [
    { title: 'En el agua', sub: 'Rescate y via aerea', color: '#2f5f7a', target: 'complicaciones', leaves: [
      { title: 'No entrar sin formacion', sub: 'Alcanzar, lanzar, remar', color: '#2f5f7a', target: 'complicaciones' },
      { title: 'A-B-C', sub: 'Ventilar primero', color: '#8c2e2e', target: 'complicaciones' }
    ] },
    { title: 'Hospital', sub: 'Pulmon como SDRA', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Ventilacion protectora', sub: '6 a 8 mL/kg', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Lo que sobra', sub: 'Sin corticoide ni antibiotico', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'Decidir', sub: 'Gravedad y destino', color: '#7a4363', target: 'complicaciones', leaves: [
      { title: 'Szpilman', sub: 'Del 0% al 93%', color: '#7a4363', target: 'complicaciones' },
      { title: 'Alta', sub: 'Tras 4 a 6 horas', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 2], imagen: [1] };
export const clasificacionCite = [1];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['ahogamiento-terminos'];
export const figurasClasificacion = ['ahogamiento-szpilman', 'ahogamiento-recomendaciones'];

export const figuras = {
  'ahogamiento-terminos': {
    titulo: 'Lo que se dice y lo que ya no',
    fuente: 'Definicion del Congreso Mundial sobre Ahogamiento de 2002, segun las guias de la Wilderness Medical Society de 2016 (Wilderness Environ Med 2016;27:236-251).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Se usa</th><th>Ya no se usa</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Ahogamiento: deterioro respiratorio por sumersion o inmersion en un liquido</td><td>Casi ahogamiento</td></tr>
            <tr><td class="figure-org">Ahogamiento con morbilidad</td><td>Ahogamiento humedo o seco</td></tr>
            <tr><td class="figure-org">Ahogamiento sin morbilidad</td><td>Ahogamiento activo o pasivo</td></tr>
            <tr><td class="figure-org">Ahogamiento con resultado de muerte</td><td>Ahogamiento en agua dulce o salada; ahogamiento secundario</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las distinciones antiguas se creian relevantes para la fisiologia, pero los datos de decadas muestran que <strong>no lo son</strong>: la via final comun es la <strong>hipoxemia</strong> y la parada cardiorrespiratoria. Usar la definicion estandar, inspirada en el estilo Utstein de la parada cardiaca, hace comparables los datos de clinicos, registros, investigadores y responsables de salud publica. Y su consecuencia practica: no hay un tratamiento distinto para el agua dulce y para la salada.</div>`
  },
  'ahogamiento-szpilman': {
    titulo: 'Grados de gravedad y mortalidad',
    fuente: 'Tabla 2 de las guias de la Wilderness Medical Society de 2016, adaptada de Cushing et al., sobre casi 42.000 rescates de socorristas.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Grado</th><th>Pulmon</th><th>Circulacion</th><th>Mortalidad</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">0</td><td>Auscultacion normal, sin tos</td><td>Pulso radial</td><td>0%</td></tr>
            <tr><td class="figure-org">1</td><td>Auscultacion normal, con tos</td><td>Pulso radial</td><td>0%</td></tr>
            <tr><td class="figure-org">2</td><td>Estertores, poca espuma en la via aerea</td><td>Pulso radial</td><td>0.6%</td></tr>
            <tr><td class="figure-org">3</td><td>Edema agudo de pulmon</td><td>Pulso radial</td><td>5.2%</td></tr>
            <tr><td class="figure-org">4</td><td>Edema agudo de pulmon</td><td><span class="figure-tag fail">Hipotension</span></td><td>19%</td></tr>
            <tr><td class="figure-org">5</td><td>Parada respiratoria</td><td>Hipotension</td><td>44%</td></tr>
            <tr><td class="figure-org">6</td><td colspan="2">Parada cardiorrespiratoria</td><td>93%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos datos de exploracion hacen todo el trabajo: la <strong>auscultacion</strong> y la <strong>tension</strong>. Quien solo tiene tos leve y pulmones limpios tuvo una mortalidad del 0% y puede liberarse en el lugar. La aparicion de estertores marca el limite para evacuar, y la caida de la tension (sistolica menor de 90 o media menor de 60) produce el siguiente gran salto. En ni&#241;os con sintomas leves y Glasgow de 13 o mas, todo deterioro ocurrio en las primeras 4 horas, y de ahi la observacion de 4 a 6 horas antes del alta.</div>`
  },
  'ahogamiento-recomendaciones': {
    titulo: 'Recomendaciones clave y su grado',
    fuente: 'Guias de la Wilderness Medical Society de 2016, con el sistema de grados del American College of Chest Physicians.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Recomendacion</th><th>Grado</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Usar el desfibrilador si esta disponible; no esta contraindicado en un entorno mojado</td><td>1A</td></tr>
            <tr><td class="figure-org">Sin antibiotico empirico; tratar la neumonia guiandose por cultivos</td><td>1A</td></tr>
            <tr><td class="figure-org"><span class="figure-tag fail">No</span> maniobra de Heimlich</td><td>1B</td></tr>
            <tr><td class="figure-org">Via aerea y oxigeno como prioridad; modelo A-B-C</td><td>1C</td></tr>
            <tr><td class="figure-org">Ventilacion mecanica segun protocolos de SDRA</td><td>1C</td></tr>
            <tr><td class="figure-org">Sin corticoides de rutina</td><td>1C</td></tr>
            <tr><td class="figure-org">Ventilacion no invasiva en el paciente alerta leve o moderado</td><td>2C</td></tr>
            <tr><td class="figure-org">Hipotermia terapeutica tras recuperar la circulacion</td><td><span class="figure-tag dys">Evidencia insuficiente</span> 2C</td></tr>
            <tr><td class="figure-org">Alta desde urgencias tras 4 a 6 horas sin deterioro</td><td>2C</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las dos recomendaciones de mayor grado (1A) van contra la intuicion: el desfibrilador <strong>si</strong> se usa aunque todo este mojado, y el antibiotico <strong>no</strong> se da de entrada aunque el agua estuviera sucia y la radiografia este alterada. La fibrilacion ventricular es rara en el ahogado (menos del 10%), de modo que el desfibrilador no debe retrasar la oxigenacion y la ventilacion, que son las que deciden el resultado.</div>`
  }
};
