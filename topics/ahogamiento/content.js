// topics/ahogamiento/content.js - Modulo 87: Ahogamiento.
// Basado en las guias de practica de la Wilderness Medical Society para la prevencion y el
// tratamiento del ahogamiento (Schmidt AC, Sempsrott JR, Hawkins SC, et al. Wilderness Environ
// Med 2016;27(2):236-251, doi:10.1016/j.wem.2015.12.019), que ya estaban en Bibliografia/. La
// ventilacion protectora remite a la guia de SDRA de la ESICM de 2023. Texto sin acentos; la
// enye va como entidad.

export const meta = {
  id: 'ahogamiento',
  titulo: 'Ahogamiento',
  subtitulo: 'Módulo 87 &middot; Medicina Crítica',
  accent: '#2f5f7a',
  accentDim: '#4f7f9a'
};

export const definicionText = `<p style="margin:0 0 14px;">El Congreso Mundial sobre Ahogamiento de 2002 lo definio como <strong>el proceso de sufrir un deterioro respiratorio por sumersion o inmersion en un líquido</strong>, y admite solo tres desenlaces: con morbilidad, sin morbilidad o muerte. Los términos antiguos (casi ahogamiento, ahogamiento húmedo o seco, activo o pasivo, en agua dulce o salada, secundario) <strong>no deben usarse</strong>: los datos de décadas muestran que no tienen relevancia fisiológica, porque la via final común es siempre la misma, la <strong>hipoxemia</strong> que acaba en parada cardiorrespiratoria.</p>
<p style="margin:0 0 14px;">Esa idea lo ordena todo. Como la lesión primaria es la <strong>hipoxia cerebral</strong>, la reanimación del ahogado no sigue el orden de la parada cardiaca habitual: aquí se recupera el modelo <strong>A-B-C</strong>, con la via aérea y las ventilaciones por delante, porque la RCP solo con compresiones no sirve para un problema que empezo en el pulmón. La fibrilación ventricular es rara (menos del 10%), y el ritmo típico es taquicardia, luego bradicardia, actividad eléctrica sin pulso y asistolia.</p>
<p style="margin:0 0 14px;">Se estiman unas <strong>372.000 muertes al año</strong> en el mundo. El grupo de mayor riesgo son los niños de 1 a 4 años en piscinas domésticas, seguidos de adolescentes y adultos jóvenes en aguas naturales. Hasta un 10% de los ahogamientos pueden deberse a quedar atrapado en un vehiculo sumergido, y el alcohol aparece en el 30% al 70% de las muertes. La prevención salva más vidas que cualquier rescate o tratamiento.</p>`;

export const bibliografia = [
  'Schmidt AC, Sempsrott JR, Hawkins SC, Arastu AS, Cushing TA, Auerbach PS. Wilderness Medical Society Practice Guidelines for the Prevention and Treatment of Drowning. Wilderness Environ Med. 2016;27(2):236-251. doi:10.1016/j.wem.2015.12.019.',
  'Grasselli G, Calfee CS, Camporota L, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med. 2023;49(7):727-759.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El ahogado que llega bien',
      tituloB: 'El ahogado que empeora',
      compensada: 'Paciente rescatado con tos leve como único síntoma y auscultación normal. En el gran estudio de casi 42.000 rescates de socorristas en el oceano, este grupo tuvo una mortalidad del 0%. Puede liberarse en el lugar o, en urgencias, darse de alta tras un periodo de observación si la función respiratoria es normal y no se deteriora.',
      descompensada: 'Estertores con espuma en la via aérea, edema agudo de pulmón, hipotensión, parada respiratoria o cardiorrespiratoria, con una mortalidad que sube del 0.6% al 93% según el grado. Y el paciente inicialmente leve que se deteriora: en series pediátricas, todo deterioro ocurrió en las primeras 4 a 4.5 horas, con un caso a las 7. La radiografía inicial puede ser normal y alterarse en las primeras horas.'
    },
    laboratorio: [
      { prueba: 'Gasometría arterial', utilidad: 'Indicada si hay hipoxemia o dificultad respiratoria (cianosis, saturación baja, taquipnea, taquicardia persistente) para guiar el soporte respiratorio.' },
      { prueba: 'Hemograma y electrolitos', utilidad: 'NO de rutina. Las alteraciones descritas en perros con grandes volúmenes instilados (11 mL/kg o más) no aparecen con los 1 a 3 mL/kg que aspira el ahogado humano, y ningún estudio ha mostrado alteraciones que guien el tratamiento.' },
      { prueba: 'Glucemia y tóxicos', utilidad: 'Si la conciencia no se recupera con la reanimación o no se sabe por que se sumergio el paciente: la hipoglucemia o una intoxicación pueden ser la causa del ahogamiento.' },
      { prueba: 'Cultivos de esputo o aspirado y antígenos urinarios', utilidad: 'Solo si tras la reanimación inicial aparece una neumonía, para guiar el antibiótico. Los gérmenes del agua son a menudo atípicos u hongos resistentes a los tratamientos empíricos habituales.' },
      { prueba: 'Temperatura central', utilidad: 'La hipotermia es frecuente porque casi siempre el agua esta por debajo de unos 33 grados, y revertirla es prioritario.' },
      { prueba: 'Electrocardiograma', utilidad: 'Tras la reanimación, por la lesión miocárdica hipóxica, y para buscar causas como el QT largo, que se asocia a más ahogamientos.' }
    ],
    no_invasivos: [
      { metodo: 'Grado de Szpilman (calculadora disponible)', interpretacion: 'Clasifica por la auscultación, la presencia de espuma, el edema pulmonar, la tensión y la parada, y asocia una mortalidad a cada grado.', cutoff: 'Del grado 0 (0%) al 6 (93%)' },
      { metodo: 'Cuando cesar el rescate (calculadora disponible)', interpretacion: 'Aplica los umbrales de la guía de tiempo de sumersion, temperatura del agua y duración de la reanimación.', cutoff: 'Más de 30 min en agua de más de 6 grados, o más de 90 min en agua de menos de 6' },
      { metodo: 'Alta tras observación (calculadora disponible)', interpretacion: 'Criterios para liberar en el lugar o dar de alta desde urgencias.', cutoff: 'Observación de 4 a 6 horas con función respiratoria normal' },
      { metodo: 'Ventilación protectora (calculadora disponible)', interpretacion: 'Volumen corriente por peso predicho y objetivos que la guía toma de los protocolos de SDRA.', cutoff: 'Volumen corriente de 6 a 8 mL/kg; meseta menor de 30' },
      { metodo: 'Auscultación pulmonar', interpretacion: 'Es el dato que más pesa para clasificar y decidir. Unos pulmones normales con tos leve se asociaron a mortalidad del 0%.', cutoff: 'Estertores o espuma: evacuar o ingresar' },
      { metodo: 'Escala de Glasgow', interpretacion: 'El estado mental condiciona la ventilación no invasiva, la inmovilización cervical y el alta.', cutoff: 'Normal para el alta; alterado contraindica relativamente la no invasiva' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'La inicial NO se correlaciona con la gasometría, el pronóstico ni el destino del paciente, aunque los que desarrollan SDRA suelen alterarla en las primeras horas. Sirve para seguir la evolución, no para pronosticar al ingreso. Pocos mililitros aspirados pueden imitar una neumonía.' },
      { modalidad: 'Tomografía craneal', hallazgos: 'Una tomografía inicial NORMAL no tiene valor pronóstico; una anormal se asoció a lesión cerebral grave o muerte. No se pide de rutina en el paciente despierto y alerta salvo que cambie su estado.' },
      { modalidad: 'Imagen de columna cervical', hallazgos: 'Solo si hay sospecha de lesión: la incidencia en ahogados es baja (0.5% a 5%), casi siempre por zambullida desde altura.' },
      { modalidad: 'Ecografía pulmonar', hallazgos: 'Puede ayudar a seguir el edema y la pérdida de aireacion en el paciente ventilado, como en otros cuadros de SDRA.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación útil es la de <strong>gravedad clínica</strong> de Szpilman, que la guía reproduce: del <strong>grado 0</strong> (auscultación normal sin tos, mortalidad 0%) al <strong>grado 6</strong> (parada cardiorrespiratoria, mortalidad 93%), pasando por la tos con auscultación normal (grado 1), los estertores con poca espuma (grado 2, 0.6%), el edema agudo de pulmón con pulso radial (grado 3, 5.2%) o con hipotensión (grado 4, 19%) y la parada respiratoria (grado 5, 44%). Lo que la guía descarta son las clasificaciones antiguas: <strong>agua dulce o salada, húmedo o seco, casi ahogamiento o ahogamiento secundario</strong> no cambian ni el tratamiento ni el pronóstico.`,
    escalas: [
      { nombre: 'Grado de Szpilman (calculadora disponible)', componentes: 'Auscultación, tos, espuma en la via aérea, edema agudo de pulmón, pulso radial o hipotensión, y parada respiratoria o cardiorrespiratoria.', formula: 'Grados 0 a 6.', interpretacion: 'Mortalidad de 0%, 0%, 0.6%, 5.2%, 19%, 44% y 93%. El mayor salto llega con la aparición de estertores y, después, con la caída de la tensión (sistólica menor de 90 o media menor de 60).' },
      { nombre: 'Cuando cesar el rescate (calculadora disponible)', componentes: 'Tiempo de sumersion conocido, temperatura del agua, duración de la RCP continua y seguridad del equipo.', formula: 'Umbrales de la guía.', interpretacion: 'Puede ser razonable cesar con una sumersion de más de 30 minutos en agua de más de 6 grados, de más de 90 minutos en agua de menos de 6, o tras 25 minutos de RCP continua. Si peligra la seguridad del equipo, se cesa siempre.' },
      { nombre: 'Alta tras observación (calculadora disponible)', componentes: 'Síntomas, auscultación, estado mental, tensión y horas de observación.', formula: 'Criterios de la guía para el lugar y para urgencias.', interpretacion: 'Asintomático salvo tos leve y auscultación normal: puede liberarse en el lugar. En urgencias, alta tras 4 a 6 horas con estado mental normal, función respiratoria normalizada y sin deterioro.' },
      { nombre: 'Ventilación protectora (calculadora disponible)', componentes: 'Sexo y talla para el peso predicho.', formula: 'Volumen corriente de 6 a 8 mL/kg de peso predicho.', interpretacion: 'Protocolo de SDRA: meseta menor de 30 cmH2O, y PEEP y FiO2 ajustadas para una PaO2 de 55 a 80 mmHg.' },
      { nombre: 'Tiempo de sumersion', componentes: 'Minutos bajo el agua.', formula: 'Factor pronóstico principal.', interpretacion: 'Es el predictor más importante del resultado. Más de 10 minutos se asocian a mayor mortalidad o supervivencia con daño neurológico grave; el pronóstico es malo por encima de 30 minutos sea cual sea la temperatura del agua.' },
      { nombre: 'Criterios de inmovilización cervical', componentes: 'Mecanismo significativo, estado mental alterado (Glasgow menor de 15 o intoxicación), déficit focal y lesión que distraiga.', formula: 'Considerar si hay traumatismo cerrado y alguno de ellos.', interpretacion: 'La inmovilización de rutina es innecesaria sin signos de trauma ni zambullida, y nunca debe retrasar la via aérea en el paciente con dificultad respiratoria grave.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Rescate seguro y reanimación en el agua',
      color: '#2f5f7a',
      definicion: 'Conjunto de decisiones para sacar al ahogado del agua sin añadir victimas y para decidir si se ventila antes de llegar a tierra.',
      fisiopatologia: 'Las mismas condiciones que hicieron ahogarse al paciente siguen presentes y ponen en riesgo al rescatador. Dentro del agua no es posible hacer compresiones torácicas eficaces, y el objetivo es revertir la hipoxia cerebral cuanto antes.',
      epidemiologia: 'Hay una alta prevalencia de ahogamientos mortales y no mortales entre personas sin formación que intentan un rescate dentro del agua. En las inundaciones, hasta un 10% de los accidentes de tráfico acaban en ahogamiento en el vehiculo.',
      factores_riesgo: ['Rescatador sin formación que entra en el agua', 'Aguas rápidas, oleaje o hielo', 'Vehiculo que se hunde', 'Ausencia de dispositivos de flotación'],
      clinica: 'Paciente en el agua, consciente o no, con o sin respiración eficaz.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Quien no tiene formación rescata desde un lugar seguro: alcanzar, lanzar, remar, no entrar (Reach, Throw, Row, Don\'t Go), con una rama, una cuerda, una boya o cualquier objeto que flote. Quien tiene formación actúa según su nivel y con el equipo de protección adecuado. Del vehiculo que se hunde se sale de inmediato, en la fase inicial de flotación (los primeros 30 segundos a 2 minutos), y no esperando a que toque fondo.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'Reanimación en el agua: solo ventilaciones, nunca compresiones, por un rescatador formado capaz de comprobar el pulso en el agua, en un paciente inconsciente CON pulso y con respiración ausente o ineficaz, con condiciones seguras y una distancia hasta tierra que lo justifique. Si no hay pulso, se saca del agua lo antes posible sin demorarse.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Los datos de la reanimación en el agua proceden de un único estudio retrospectivo de socorristas brasileños en el oceano, que mostró mejor supervivencia y resultado neurológico.',
      algoritmo: ['Seguridad del rescatador ante todo', 'Sin formación: alcanzar, lanzar, remar, no entrar', 'Vehiculo: salir en los primeros segundos de flotación', 'En el agua: solo ventilaciones y solo si hay pulso', 'Sin pulso: sacar del agua cuanto antes', 'Nunca compresiones dentro del agua']
    },
    {
      nombre: 'Reanimación inicial: la via aérea primero',
      color: '#8c2e2e',
      definicion: 'Reanimación del ahogado en parada o con dificultad respiratoria, en la que la oxigenación y la ventilación tienen prioridad sobre las compresiones.',
      fisiopatologia: 'El ahogamiento obstruye la via aérea con agua y produce hipoxia cerebral; pequeñas cantidades llegan al pulmón y causan atelectasias, lesión celular y edema. El corazón se para por hipoxia: taquicardia por la lucha, después bradicardia, actividad eléctrica sin pulso y asistolia. Si la hipoxia miocárdica persiste, la desfibrilacion puede fallar sin oxigenar y ventilar a la vez.',
      epidemiologia: 'La fibrilación ventricular aparece en menos del 10% de los ahogados.',
      factores_riesgo: ['Iniciar con compresiones sin ventilar', 'Retrasar las ventilaciones por la maniobra de Heimlich', 'Inmovilización cervical que retrasa la via aérea', 'Hipotermia no tratada'],
      clinica: 'Paciente en parada o con respiración ineficaz tras la sumersion.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Desfibrilador externo automático: debe usarse si esta disponible, y su uso en un entorno mojado no esta contraindicado si los parches están bien pegados y nadie toca al paciente.',
      dx_diferencial: 'Causa previa del ahogamiento: síndrome coronario, arritmia por QT largo, convulsión, hipoglucemia o intoxicación.',
      tx_medico: 'Modelo A-B-C tradicional: abrir la via aérea y dar ventilaciones con presión positiva además de las compresiones. Los cambios hacia la RCP solo con compresiones NO se aplican al ahogado. Con via aérea avanzada, una ventilación cada 6 a 8 segundos con compresiones continuas. Tratar la hipotermia de forma activa.',
      tx_farmacologico: 'Oxígeno a la concentración más alta disponible. Cualquier oxígeno, incluso boca a boca o bolsa con aire ambiente, es mejor que ninguno.',
      tx_intervencionista: 'La bolsa y mascarilla, si consigue que el tórax se eleve, puede ser preferible a algunos dispositivos supragloticos, que pueden fugar por la lesión pulmonar y el edema. La maniobra de Heimlich NO se recomienda: retrasa las ventilaciones y prolonga la hipoxemia. La inmovilización cervical solo si hay signos de lesión, déficit focal, mecanismo de riesgo o alteración mental, y nunca antes que la via aérea.',
      criterios_uci: 'Todo paciente que requiera reanimación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuidados posparada y búsqueda de la causa del ahogamiento.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Interrumpir el proceso de ahogamiento llevando oxígeno al cerebro lo antes posible es lo que decide el resultado.',
      algoritmo: ['A-B-C: via aérea y ventilaciones primero', 'Oxígeno a la máxima concentración', 'Compresiones con ventilaciones, no solo compresiones', 'Desfibrilador si hay, sin retrasar las ventilaciones', 'Sin Heimlich', 'Cuello solo si hay sospecha de lesión', 'Tratar la hipotermia']
    },
    {
      nombre: 'Soporte respiratorio en el hospital',
      color: '#3d5a73',
      definicion: 'Ventilación invasiva y no invasiva del ahogado con insuficiencia respiratoria, cuya lesión pulmonar se trata como un síndrome de dificultad respiratoria aguda.',
      fisiopatologia: 'El agua aspirada lava el surfactante y lesiona el epitelio y el endotelio alveolar, con atelectasias y edema por aumento de permeabilidad, un patrón similar al del SDRA.',
      epidemiologia: 'En 2010 hubo 12.900 visitas a urgencias por ahogamiento en Estados Unidos, y el 20% de los pacientes ingreso.',
      factores_riesgo: ['Edema pulmonar en la valoración inicial', 'Sumersion prolongada', 'Alteración del estado mental', 'Vómitos y aspiración'],
      clinica: 'Hipoxemia, taquipnea, estertores y espuma en la via aérea.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Gasometría arterial si hay hipoxemia o dificultad respiratoria.',
      imagen: 'Radiografía para seguir la evolución, no para pronosticar.',
      complementarios: 'Pulsioximetría y capnografia continuas.',
      dx_diferencial: 'Neumonía precoz frente a neumonitis inflamatoria por el agua: la fiebre y la leucocitosis pueden deberse al estrés y a la irritación, sin infección.',
      tx_medico: 'Ventilación mecánica según los protocolos de SDRA: volumen corriente de 6 a 8 mL/kg, ajustando volumen y frecuencia para una presión meseta menor de 30, y PEEP y FiO2 para una PaO2 de 55 a 80 mmHg. La ventilación no invasiva puede usarse en el paciente ALERTA con síntomas leves o moderados; precaución si hay alteración mental o vómitos, por el riesgo de aspiración.',
      tx_farmacologico: 'Corticoides: NO de rutina; una revisión de 35 años no encontró ensayos aleatorizados. Antibióticos: NO de forma empírica; solo si hay neumonía tras la reanimación inicial, guiados por los cultivos.',
      tx_intervencionista: 'Intubación si la ventilación no invasiva fracasa, hay alteración mental o vómitos.',
      criterios_uci: 'Edema pulmonar, hipotensión, necesidad de ventilación o deterioro neurológico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la aparición de neumonía: fiebre, más esputo y cambios en la auscultación que persisten tras la fase inicial.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La lesión pulmonar del ahogado sin daño cerebral grave suele recuperarse.',
      algoritmo: ['Gasometría si hay hipoxemia', 'Paciente alerta y leve o moderado: no invasiva posible', 'Alteración mental o vómitos: precaución o intubar', 'Ventilación protectora: 6 a 8 mL/kg, meseta menor de 30', 'PaO2 objetivo de 55 a 80', 'Sin corticoides ni antibiótico empírico']
    },
    {
      nombre: 'Lo que no hace falta: pruebas y tratamientos de rutina',
      color: '#5a4a8c',
      definicion: 'Prácticas extendidas en el ahogamiento que la guía desaconseja o considera sin evidencia suficiente.',
      fisiopatologia: 'Muchas de estas prácticas nacen de modelos animales con volúmenes de agua muy superiores a los que aspira el ser humano, o de la vieja distinción entre agua dulce y salada, que no tiene relevancia clínica.',
      epidemiologia: 'Los estudios caninos de los años sesenta instilaban hasta 44 mL/kg; el ahogado humano aspira de 1 a 3 mL/kg, y las alteraciones electrolíticas solo aparecieron con 11 mL/kg o más.',
      factores_riesgo: ['Clasificar por agua dulce o salada', 'Pedir analítica completa a todos', 'Antibiótico empírico por una radiografía alterada', 'Corticoides para el pulmón'],
      clinica: 'El paciente estable tras un ahogamiento.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Hemograma y electrolitos NO de rutina. Gasometría solo si hay hipoxemia o dificultad respiratoria. Glucemia y tóxicos si no se recupera la conciencia o la causa de la sumersion es desconocida.',
      imagen: 'Radiografía inicial sin valor pronóstico. Tomografía craneal inicial normal sin valor pronóstico; no de rutina en el paciente despierto.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Abandonar los términos casi ahogamiento, ahogamiento húmedo o seco, activo o pasivo, de agua dulce o salada y secundario.',
      tx_farmacologico: 'Sin corticoides de rutina (recomendación 1C). Sin antibiótico empírico (recomendación 1A). La hipotermia terapéutica tras la recuperación de la circulación tiene evidencia insuficiente para recomendarla o desaconsejarla en el ahogado.',
      tx_intervencionista: 'Sin maniobra de Heimlich.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Evitar estas prácticas no empeora el resultado y evita costes, resistencias y retrasos.',
      algoritmo: ['Sin términos antiguos', 'Sin analítica de rutina', 'Gasometría solo si hay hipoxemia', 'Sin corticoides', 'Sin antibiótico empírico', 'Sin Heimlich']
    },
    {
      nombre: 'Gravedad, pronóstico y cuando parar',
      color: '#7a4363',
      definicion: 'Estimación del pronóstico por la clínica inicial y el tiempo de sumersion, y decisión de cesar el rescate o la reanimación.',
      fisiopatologia: 'La duración de la hipoxia cerebral es lo que determina el daño, y por eso el tiempo de sumersion es el predictor principal. El agua muy fría puede proteger el cerebro, sobre todo en niños pequeños.',
      epidemiologia: 'En una serie holandesa de 160 niños ahogados con hipotermia, de los 98 que recibieron más de 30 minutos de RCP solo sobrevivieron 11, todos con daño neurológico grave.',
      factores_riesgo: ['Sumersion de más de 10 minutos', 'Más de 25 minutos de reanimación', 'Tiempo prolongado hasta la atención avanzada', 'Edema pulmonar con hipotensión', 'Parada cardiorrespiratoria'],
      clinica: 'Grados de Szpilman de 0 a 6 según auscultación, espuma, edema, tensión y parada.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'Tomografía craneal anormal al inicio: asociada a lesión grave o muerte.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Puede ser razonable cesar el rescate y la reanimación con una sumersion conocida de más de 30 minutos en agua de más de 6 grados, de más de 90 minutos en agua de menos de 6, o tras 25 minutos de RCP continua. El tiempo de sumersion se cuenta desde la llegada de los servicios de emergencia, porque el total suele desconocerse. Si peligra el equipo, se cesa siempre.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'Hay casos de buena recuperación neurológica tras sumersiones prolongadas, sobre todo en niños de 6 años o menos en agua de menos de 6 grados, y con oxigenación extracorpórea.',
      criterios_uci: 'Grados 3 a 6.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Valoración neurológica seriada.',
      seguimiento_ambulatorio: 'Seguimiento neurológico y apoyo a la familia.',
      pronostico: 'Mortalidad por grados: 0 y 1, 0%; 2, 0.6%; 3, 5.2%; 4, 19%; 5, 44%; 6, 93%. El pronóstico es malo con sumersiones de más de 30 minutos, sea cual sea la temperatura del agua.',
      algoritmo: ['Graduar con Szpilman', 'Estimar el tiempo de sumersion', 'Más de 10 min: peor pronóstico', 'Agua de más de 6 grados: cesar tras 30 min de sumersion', 'Agua de menos de 6: hasta 90 min', 'O tras 25 min de RCP continua', 'Seguridad del equipo por encima de todo']
    },
    {
      nombre: 'Alta, observación y prevención',
      color: '#3f6b52',
      definicion: 'Decisión de liberar, observar o ingresar al ahogado leve, y medidas que evitan el siguiente ahogamiento.',
      fisiopatologia: 'La lesión pulmonar puede manifestarse en las horas siguientes, pero casi todo deterioro aparece en las primeras 4 a 7 horas.',
      epidemiologia: 'En un estudio de seguimiento telefónico, ninguno de los pacientes liberados en el lugar o dados de alta tras 1 a 6 horas presento efectos tardíos.',
      factores_riesgo: ['Estertores, tos intensa o espuma', 'Alteración del estado mental', 'Hipotension', 'Imposibilidad de observar o evacuar'],
      clinica: 'Paciente asintomático o con tos leve tras el rescate.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'No aplica.',
      complementarios: 'Reevaluación de la auscultación y la saturación durante la observación.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'En el lugar: asintomático salvo tos leve con auscultación normal, puede liberarse; estertores, tos intensa, espuma, alteración mental o hipotensión obligan a evacuar; si la evacuación es difícil, observar 4 a 6 horas al paciente leve con estado mental normal. En urgencias: alta tras 4 a 6 horas de observación con estado mental normal, función respiratoria normalizada y sin deterioro.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Deterioro durante la observación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ingreso si no se cumplen los criterios de alta.',
      seguimiento_ambulatorio: 'Consejo sobre el riesgo a quien tiene cardiopatía isquémica, QT largo, epilepsia u otras limitaciones, que se asocian a más ahogamientos.',
      pronostico: 'La prevención salva más vidas que el rescate o el tratamiento: chaleco salvavidas bien ajustado en toda actividad nautica (el 85% de los fallecidos en accidentes de embarcaciones no lo llevaba), evitar el alcohol (presente en el 30% al 70% de las muertes), capacidad de flotar y avanzar 25 metros, y socorristas en las playas (23 muertes en playas vigiladas frente a 92 en no vigiladas).',
      algoritmo: ['Tos leve y auscultación normal: liberar posible', 'Estertores, espuma, mente alterada o hipotensión: evacuar', 'Urgencias: observar 4 a 6 horas', 'Alta si mente normal y respiración normal sin deterioro', 'Aconsejar a cardiopatas, QT largo y epilépticos', 'Chaleco, sin alcohol, saber nadar 25 m']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En el hospital, el ahogado se trata como lo que es: un paciente hipoxemico con una lesión pulmonar parecida al SDRA, al que no hay que someter a las pruebas y tratamientos que heredamos de modelos animales.',
    parametros: [
      'Oxígeno a la máxima concentración tolerada mientras haya hipoxemia.',
      'Gasometría solo si hay hipoxemia o dificultad respiratoria; sin analítica de rutina.',
      'Ventilación no invasiva en el paciente alerta con síntomas leves o moderados; precaución con alteración mental o vómitos.',
      'Ventilación invasiva según protocolos de SDRA: 6 a 8 mL/kg, meseta menor de 30, PaO2 de 55 a 80.',
      'Sin corticoides ni antibiótico empírico; cultivos si aparece neumonía.',
      'Tratar la hipotermia de forma activa.',
      'Buscar la causa del ahogamiento si no esta clara: hipoglucemia, tóxicos, arritmia o convulsión.',
      'Observación de 4 a 6 horas antes del alta en el paciente leve.'
    ],
    criterios_uci_general: 'Edema pulmonar, hipotensión, necesidad de ventilación, parada cardiorrespiratoria recuperada o deterioro neurológico.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Chaleco salvavidas en toda actividad nautica, evitar el alcohol y otras sustancias antes y durante las actividades acuaticas, saber flotar y avanzar 25 metros, socorristas en aguas abiertas, salir del vehiculo en cuanto cae al agua, y consejo específico a quienes tienen cardiopatía, QT largo o epilepsia.'
  }
};

export const compCites = {
  'Rescate seguro y reanimación en el agua': { tx_medico: [1], tx_intervencionista: [1], epidemiologia: [1] },
  'Reanimación inicial: la via aérea primero': { tx_medico: [1], tx_intervencionista: [1], epidemiologia: [1], complementarios: [1], tx_farmacologico: [1] },
  'Soporte respiratorio en el hospital': { tx_medico: [1, 2], tx_farmacologico: [1], laboratorio: [1] },
  'Lo que no hace falta: pruebas y tratamientos de rutina': { laboratorio: [1], imagen: [1], tx_farmacologico: [1] },
  'Gravedad, pronóstico y cuando parar': { tx_medico: [1], pronostico: [1], epidemiologia: [1] },
  'Alta, observación y prevención': { tx_medico: [1], pronostico: [1], seguimiento_ambulatorio: [1] }
};

export const estigmasTitulo = 'Lo que decide el destino del paciente';
export const estigmas = [
  { nombre: 'Tos leve con auscultación normal', descripcion: 'Grado 1 de Szpilman, mortalidad del 0%. Puede liberarse en el lugar o darse de alta tras la observación.' },
  { nombre: 'Estertores con poca espuma', descripcion: 'Grado 2, mortalidad del 0.6%. Es el limite a partir del cual hay que evacuar o ingresar.' },
  { nombre: 'Edema agudo de pulmón', descripcion: 'Grado 3 con pulso radial (5.2%) o grado 4 con hipotensión (19%). Oxígeno, soporte ventilatorio y críticos.' },
  { nombre: 'Hipotension', descripcion: 'Sistólica menor de 90 o media menor de 60: el segundo gran salto de mortalidad tras la aparición de estertores.' },
  { nombre: 'Alteración del estado mental', descripcion: 'Contraindica relativamente la ventilación no invasiva por el riesgo de vómito y aspiración, y obliga a buscar la causa de la sumersion.' },
  { nombre: 'Signos de trauma o zambullida', descripcion: 'Solo entonces se considera la inmovilización cervical, y nunca por delante de la via aérea. La lesión cervical en ahogados es rara (0.5% a 5%).' }
];

export const biopsia = null;

export const escalaRefs = {
  'Grado de Szpilman (calculadora disponible)': [1],
  'Cuando cesar el rescate (calculadora disponible)': [1],
  'Alta tras observación (calculadora disponible)': [1],
  'Ventilación protectora (calculadora disponible)': [1, 2],
  'Tiempo de sumersion': [1],
  'Criterios de inmovilización cervical': [1]
};

export const escalaCalc = {
  'Grado de Szpilman (calculadora disponible)': 'szpilman',
  'Cuando cesar el rescate (calculadora disponible)': 'cese-ahogamiento',
  'Alta tras observación (calculadora disponible)': 'alta-ahogamiento',
  'Ventilación protectora (calculadora disponible)': 'ventilacion-ahogado'
};

export const compGroups = [
  { title: 'En el agua y en la orilla', items: ['Rescate seguro y reanimación en el agua', 'Reanimación inicial: la via aérea primero'] },
  { title: 'En el hospital', items: ['Soporte respiratorio en el hospital', 'Lo que no hace falta: pruebas y tratamientos de rutina'] },
  { title: 'Decidir', items: ['Gravedad, pronóstico y cuando parar', 'Alta, observación y prevención'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son el agua y la orilla: rescatar sin añadir victimas y reanimar con la via aérea por delante, que es lo que distingue al ahogado de la parada cardiaca habitual. Las dos siguientes son el hospital: el pulmón se ventila como un SDRA, y buena parte de lo que se hacia por costumbre (analítica completa, corticoides, antibiótico empírico, Heimlich) no tiene respaldo. Las dos últimas son las decisiones: el pronóstico y cuando parar, y cuando puede irse a casa.';

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
    { title: 'En el agua', sub: 'Rescate y via aérea', color: '#2f5f7a', target: 'complicaciones', leaves: [
      { title: 'No entrar sin formación', sub: 'Alcanzar, lanzar, remar', color: '#2f5f7a', target: 'complicaciones' },
      { title: 'A-B-C', sub: 'Ventilar primero', color: '#8c2e2e', target: 'complicaciones' }
    ] },
    { title: 'Hospital', sub: 'Pulmón como SDRA', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Ventilación protectora', sub: '6 a 8 mL/kg', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Lo que sobra', sub: 'Sin corticoide ni antibiótico', color: '#5a4a8c', target: 'complicaciones' }
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
            <tr><td class="figure-org">Ahogamiento: deterioro respiratorio por sumersion o inmersion en un líquido</td><td>Casi ahogamiento</td></tr>
            <tr><td class="figure-org">Ahogamiento con morbilidad</td><td>Ahogamiento húmedo o seco</td></tr>
            <tr><td class="figure-org">Ahogamiento sin morbilidad</td><td>Ahogamiento activo o pasivo</td></tr>
            <tr><td class="figure-org">Ahogamiento con resultado de muerte</td><td>Ahogamiento en agua dulce o salada; ahogamiento secundario</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las distinciones antiguas se creian relevantes para la fisiología, pero los datos de décadas muestran que <strong>no lo son</strong>: la via final común es la <strong>hipoxemia</strong> y la parada cardiorrespiratoria. Usar la definición estándar, inspirada en el estilo Utstein de la parada cardiaca, hace comparables los datos de clínicos, registros, investigadores y responsables de salud publica. Y su consecuencia práctica: no hay un tratamiento distinto para el agua dulce y para la salada.</div>`
  },
  'ahogamiento-szpilman': {
    titulo: 'Grados de gravedad y mortalidad',
    fuente: 'Tabla 2 de las guias de la Wilderness Medical Society de 2016, adaptada de Cushing et al., sobre casi 42.000 rescates de socorristas.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Grado</th><th>Pulmón</th><th>Circulación</th><th>Mortalidad</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">0</td><td>Auscultación normal, sin tos</td><td>Pulso radial</td><td>0%</td></tr>
            <tr><td class="figure-org">1</td><td>Auscultación normal, con tos</td><td>Pulso radial</td><td>0%</td></tr>
            <tr><td class="figure-org">2</td><td>Estertores, poca espuma en la via aérea</td><td>Pulso radial</td><td>0.6%</td></tr>
            <tr><td class="figure-org">3</td><td>Edema agudo de pulmón</td><td>Pulso radial</td><td>5.2%</td></tr>
            <tr><td class="figure-org">4</td><td>Edema agudo de pulmón</td><td><span class="figure-tag fail">Hipotensión</span></td><td>19%</td></tr>
            <tr><td class="figure-org">5</td><td>Parada respiratoria</td><td>Hipotensión</td><td>44%</td></tr>
            <tr><td class="figure-org">6</td><td colspan="2">Parada cardiorrespiratoria</td><td>93%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos datos de exploración hacen todo el trabajo: la <strong>auscultación</strong> y la <strong>tensión</strong>. Quien solo tiene tos leve y pulmones limpios tuvo una mortalidad del 0% y puede liberarse en el lugar. La aparición de estertores marca el limite para evacuar, y la caída de la tensión (sistólica menor de 90 o media menor de 60) produce el siguiente gran salto. En niños con síntomas leves y Glasgow de 13 o más, todo deterioro ocurrió en las primeras 4 horas, y de ahi la observación de 4 a 6 horas antes del alta.</div>`
  },
  'ahogamiento-recomendaciones': {
    titulo: 'Recomendaciones clave y su grado',
    fuente: 'Guias de la Wilderness Medical Society de 2016, con el sistema de grados del American College of Chest Physicians.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Recomendación</th><th>Grado</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Usar el desfibrilador si esta disponible; no esta contraindicado en un entorno mojado</td><td>1A</td></tr>
            <tr><td class="figure-org">Sin antibiótico empírico; tratar la neumonía guiandose por cultivos</td><td>1A</td></tr>
            <tr><td class="figure-org"><span class="figure-tag fail">No</span> maniobra de Heimlich</td><td>1B</td></tr>
            <tr><td class="figure-org">Via aérea y oxígeno como prioridad; modelo A-B-C</td><td>1C</td></tr>
            <tr><td class="figure-org">Ventilación mecánica según protocolos de SDRA</td><td>1C</td></tr>
            <tr><td class="figure-org">Sin corticoides de rutina</td><td>1C</td></tr>
            <tr><td class="figure-org">Ventilación no invasiva en el paciente alerta leve o moderado</td><td>2C</td></tr>
            <tr><td class="figure-org">Hipotermia terapéutica tras recuperar la circulación</td><td><span class="figure-tag dys">Evidencia insuficiente</span> 2C</td></tr>
            <tr><td class="figure-org">Alta desde urgencias tras 4 a 6 horas sin deterioro</td><td>2C</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Las dos recomendaciones de mayor grado (1A) van contra la intuición: el desfibrilador <strong>si</strong> se usa aunque todo este mojado, y el antibiótico <strong>no</strong> se da de entrada aunque el agua estuviera sucia y la radiografía este alterada. La fibrilación ventricular es rara en el ahogado (menos del 10%), de modo que el desfibrilador no debe retrasar la oxigenación y la ventilación, que son las que deciden el resultado.</div>`
  }
};
