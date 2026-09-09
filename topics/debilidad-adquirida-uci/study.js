// topics/debilidad-adquirida-uci/study.js: Autoevaluacion de debilidad adquirida en la UCI.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Cual es la complicacion neurologica mas frecuente del paciente critico?', options: ['La debilidad adquirida', 'El ictus isquemico', 'La encefalopatia hipoxica', 'La neuropatia diabetica'], correct: 0, explanation: 'Y es tambien la que menos se busca, porque se atribuye a que el paciente esta debil por haber estado ingresado. Es una entidad con nombre, con criterios y con prevencion.', dificultad: 'facil' },
  { q: 'Con que escala se mide la debilidad adquirida?', options: ['Con la escala de Rankin', 'Con el indice de Barthel', 'Con la suma de fuerza del MRC', 'Con la escala de Ashworth'], correct: 2, explanation: 'Puntua de 0 a 5 la fuerza de seis grupos musculares en cada lado, con un maximo de 60. No necesita ningun aparato, pero si un paciente que colabore.', dificultad: 'intermedio' },
  { q: 'Que puntuacion define debilidad adquirida en la unidad de criticos?', options: ['Menos de 55 sobre 60', 'Menos de 48 sobre 60', 'Menos de 30 sobre 60', 'Menos de 20 sobre 60'], correct: 1, explanation: 'Y por debajo de 36 se habla de debilidad grave, que se asocia a mas dias de ventilacion, mayor dependencia al alta y peor situacion funcional al a&#241;o.', dificultad: 'intermedio' },
  { q: 'Que requisito imprescindible tiene la escala de fuerza?', options: ['Que hayan pasado 7 dias', 'Que no reciba corticoides', 'Que este extubado', 'Que el paciente colabore'], correct: 3, explanation: 'Puntuar a alguien sedado o confuso produce un numero sin ningun valor. Lo correcto es anotar que no es valorable y repetir la exploracion cuando despierte.', dificultad: 'intermedio' },
  { q: 'Que musculatura respeta caracteristicamente la debilidad adquirida?', options: ['La musculatura distal', 'La facial y la ocular', 'La musculatura axial', 'La musculatura respiratoria'], correct: 1, explanation: 'Ese detalle es muy util: si hay ptosis, oftalmoparesia o debilidad facial marcada, hay que pensar en otra cosa, porque eso no pertenece a este cuadro.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente que despierta tras 12 dias de ventilacion mecanica por una neumonia grave. Obedece ordenes con normalidad. En la exploracion de fuerza obtiene: abduccion del hombro 3 y 3, flexion del codo 3 y 3, extension de la mu&#241;eca 4 y 4, flexion de la cadera 2 y 2, extension de la rodilla 3 y 3, y dorsiflexion del pie 2 y 2. La musculatura facial y los movimientos oculares son normales.',
    steps: [
      { q: 'Cuanto suma su fuerza total?', options: ['28 puntos', '31 puntos', '34 puntos', '41 puntos'], correct: 2 },
      { q: 'Como se clasifica esa puntuacion?', options: ['Sin debilidad', 'Debilidad dudosa', 'Debilidad leve', 'Debilidad grave'], correct: 3 },
      { q: 'Que dato de la exploracion apoya el diagnostico?', options: ['Que respeta cara y ojos', 'Que la fuerza es de 3', 'Que lleva 12 dias intubado', 'Que obedece ordenes'], correct: 0 }
    ],
    explanation: 'La suma es 6 mas 6 mas 8 mas 4 mas 6 mas 4, es decir 34 sobre 60. Por debajo de 48 se cumple el criterio de debilidad adquirida, y por debajo de 36 se considera DEBILIDAD GRAVE, que es la categoria de este paciente y que se asocia a mas dias de ventilacion y a peor situacion funcional al a&#241;o. El dato de la exploracion que mas apoya el diagnostico es que la musculatura facial y ocular esta RESPETADA: la debilidad adquirida no las afecta, de modo que su indemnidad encaja con el cuadro y su afectacion habria obligado a pensar en una miastenia, un botulismo o una lesion de tronco. Conviene ademas fijarse en que el patron es simetrico y de predominio proximal, que es lo esperable.'
  },
  { q: 'Como es el patron de debilidad de este cuadro?', options: ['Asimetrico y distal', 'Focal y de predominio bulbar', 'Simetrico y proximal', 'Fluctuante a lo largo del dia'], correct: 2, explanation: 'Con reflejos disminuidos o abolidos. Ese patron, junto con la ausencia de afectacion facial y ocular, es lo que define el cuadro tipico.', dificultad: 'intermedio' },
  { q: 'Que significa encontrar ptosis y oftalmoparesia en un paciente critico debil?', options: ['Que NO es debilidad adquirida', 'Que la debilidad es mas grave', 'Que hay componente neuropatico', 'Que se recuperara mas rapido'], correct: 0, explanation: 'Obliga a pensar en miastenia gravis, botulismo, sindrome de Miller Fisher o una lesion de tronco. Es la bandera que mas rapido reorienta el estudio y se busca simplemente mirando al paciente.', dificultad: 'dificil' },
  { q: 'Que obliga a hacer un nivel sensitivo en el paciente critico debil?', options: ['Repetir la escala en 24 horas', 'Solicitar un electromiograma', 'Ampliar la analitica ionica', 'Una resonancia medular urgente'], correct: 3, explanation: 'Junto con la afectacion de esfinteres, obliga a descartar una compresion medular, que es una urgencia con ventana terapeutica y que no pertenece en absoluto a este cuadro.', dificultad: 'dificil' },
  { q: 'Cual es la primera analitica que hay que pedir ante una debilidad en el paciente critico?', options: ['Los anticuerpos neuronales', 'Los iones, con fosforo y magnesio', 'La velocidad de sedimentacion', 'El perfil de autoinmunidad'], correct: 1, explanation: 'La hipofosfatemia y la hipopotasemia producen debilidad grave y se corrigen en horas. Buscarlas antes de encargar un electromiograma ahorra tiempo y explica muchos casos.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Se solicita valorar la fuerza de un paciente que lleva nueve dias en la unidad de criticos. Esta profundamente sedado, no abre los ojos a la llamada y no obedece ninguna orden sencilla.',
    steps: [
      { q: 'Se puede aplicar la escala de fuerza?', options: ['Si, con estimulo doloroso', 'No', 'Si, puntuando 0 en todo', 'Solo en los miembros superiores'], correct: 1 },
      { q: 'Que corresponde anotar y hacer?', options: ['Que no es valorable, y repetirla', 'Una puntuacion de 0 sobre 60', 'Que tiene debilidad grave', 'Que la exploracion es normal'], correct: 0 },
      { q: 'Que se puede hacer mientras tanto?', options: ['Esperar sin intervenir', 'Solicitar un electromiograma', 'Iniciar corticoides preventivos', 'Movilizar y revisar iones y farmacos'], correct: 3 }
    ],
    explanation: 'La suma de fuerza exige un paciente DESPIERTO y capaz de obedecer ordenes: es su requisito y el que mas se olvida. Puntuar a alguien profundamente sedado produce un numero sin ningun valor, y anotar un 0 sobre 60 seria peor todavia, porque quedaria registrado como una debilidad extrema que en realidad no se ha medido. Lo correcto es dejar constancia de que la escala NO es valorable y repetirla cuando despierte. Mientras tanto si se puede hacer bastante: aligerar la sedacion si es posible, iniciar movilizacion PASIVA, que no requiere colaboracion, y revisar el fosforo, el potasio, el magnesio y la lista de farmacos, que son causas tratables y frecuentes.'
  },
  { q: 'Que significa una creatina cinasa marcadamente elevada en este contexto?', options: ['Que confirma la miopatia del critico', 'Que indica componente neuropatico', 'Que hay que pensar en otra miopatia', 'Que el pronostico es mejor'], correct: 2, explanation: 'En la debilidad adquirida suele ser normal o poco elevada. Una elevacion marcada apunta a rabdomiolisis, miopatia necrotizante o miopatia inflamatoria, que tienen manejo propio.', dificultad: 'intermedio' },
  { q: 'Cual de las dos formas se recupera mejor?', options: ['La miopatia', 'La neuropatia', 'Se recuperan igual', 'Ninguna se recupera'], correct: 0, explanation: 'La fibra muscular conserva la capacidad de regenerarse, mientras que la reparacion axonal depende de un crecimiento lento desde el cuerpo neuronal y puede quedar incompleta.', dificultad: 'intermedio' },
  { q: 'Que dato clinico separa la neuropatia de la miopatia del paciente critico?', options: ['La intensidad de la debilidad', 'La simetria del cuadro', 'La cifra de creatina cinasa', 'La alteracion sensitiva'], correct: 3, explanation: 'La neuropatia es sensitivomotora y la miopatia no afecta a la sensibilidad. Explorarla en el paciente critico es dificil y poco fiable, pero es la diferencia clinica clave.', dificultad: 'dificil' },
  { q: 'Cual es la forma mas frecuente en la practica?', options: ['La neuropatia pura', 'La forma mixta', 'La miopatia pura', 'La forma desmielinizante'], correct: 1, explanation: 'Comparten los mismos factores de riesgo y los mismos mecanismos, de modo que suelen coexistir. La separacion tiene interes pronostico, no terapeutico.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Paciente que lleva ocho dias ventilado por una neumonia y que al despertar presenta debilidad generalizada. Al explorarlo se aprecia ptosis bilateral y la familia refiere que la debilidad es mucho mas marcada por la tarde que por la ma&#241;ana. Los reflejos estan conservados y no hay alteracion sensitiva.',
    steps: [
      { q: 'Encaja con una debilidad adquirida?', options: ['Si, es el cuadro tipico', 'Si, con componente neuropatico', 'Si, en su forma grave', 'No encaja'], correct: 3 },
      { q: 'Que diagnostico sugiere el cuadro?', options: ['Un sindrome de Guillain-Barre', 'Una miastenia gravis', 'Una mielopatia cervical', 'Una miopatia por corticoides'], correct: 1 },
      { q: 'Que pruebas confirman esa sospecha?', options: ['Resonancia medular y liquido', 'Biopsia muscular y creatina cinasa', 'Anticuerpos y estimulacion repetitiva', 'Ecografia muscular y diafragmatica'], correct: 2 }
    ],
    explanation: 'Dos datos rompen el molde a la vez. El primero es la PTOSIS: la debilidad adquirida respeta caracteristicamente la musculatura facial y ocular, de modo que su afectacion obliga a buscar otra cosa. El segundo es la FLUCTUACION a lo largo del dia, con empeoramiento vespertino, que es la firma de la fatigabilidad y que este cuadro no produce. La combinacion de afectacion ocular y debilidad fluctuante apunta a una MIASTENIA GRAVIS, que puede haber estado sin diagnosticar y haberse descompensado durante el ingreso, o incluso haber sido la causa del fracaso respiratorio inicial. Se confirma con anticuerpos frente al receptor de acetilcolina o frente a MuSK y con el estudio de estimulacion repetitiva, y su tratamiento es completamente distinto.'
  },
  { q: 'Cuando es maxima la perdida de masa y de fuerza muscular en el paciente critico?', options: ['A partir del mes de ingreso', 'A las tres semanas', 'En la primera semana', 'Tras el alta de criticos'], correct: 2, explanation: 'Eso significa que la ventana para prevenir es estrecha y muy precoz: lo que se haga en los primeros dias pesa mas que todo lo que se haga despues.', dificultad: 'dificil' },
  { q: 'Que tratamiento farmacologico ha demostrado eficacia en la debilidad adquirida?', options: ['Ninguno', 'Los anabolizantes', 'La creatina oral', 'Las inmunoglobulinas'], correct: 0, explanation: 'Por eso la prevencion es lo unico que funciona, y toda la prevencion consiste en hacer menos de algo: menos sedacion, menos inmovilidad, menos bloqueo y menos hiperglucemia.', dificultad: 'intermedio' },
  { q: 'Cual es la medida preventiva con mas respaldo?', options: ['El aporte proteico elevado', 'La estimulacion electrica', 'El control glucemico estricto', 'La movilizacion precoz'], correct: 3, explanation: 'Un ensayo aleatorizado de fisioterapia y terapia ocupacional precoces en pacientes ventilados mostro mejor situacion funcional al alta y menos dias de delirium.', dificultad: 'intermedio' },
  { q: 'Cuando conviene empezar a movilizar al paciente critico?', options: ['Cuando este extubado', 'El primer o segundo dia', 'Al salir de la unidad', 'Cuando pueda sentarse solo'], correct: 1, explanation: 'Incluso en el paciente ventilado, y esa es la parte que mas cuesta implantar. Esperar a la extubacion desaprovecha justo la semana en la que mas musculo se pierde.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente con diez dias de ventilacion mecanica que fracasa la prueba de respiracion espontanea. La radiografia de torax es aceptable, no hay sobrecarga de volumen ni broncoespasmo, y la funcion cardiaca es normal. Durante la prueba presenta taquipnea progresiva y el abdomen se hunde durante la inspiracion. La suma de fuerza en los miembros es de 46 sobre 60.',
    steps: [
      { q: 'Que hay que explorar a continuacion?', options: ['El diafragma', 'La via aerea alta', 'El nervio recurrente', 'La musculatura cervical'], correct: 0 },
      { q: 'Que mide la ecografia de ese musculo?', options: ['La velocidad de conduccion', 'El grosor y su engrosamiento', 'La presion transdiafragmatica', 'La distensibilidad toracica'], correct: 1 },
      { q: 'Que ajuste ventilatorio conviene?', options: ['Sedar mas para que descanse', 'Aumentar el soporte al maximo', 'Permitir un esfuerzo moderado', 'Pasar a modo controlado'], correct: 2 }
    ],
    explanation: 'La respiracion PARADOJICA, con el abdomen que se hunde en inspiracion en lugar de expandirse, junto con un pulmon y un corazon aceptables, apunta directamente al DIAFRAGMA. La debilidad diafragmatica es mas frecuente que la de los miembros y puede ir por libre, como aqui, donde la fuerza periferica es casi normal. La ecografia lo resuelve en minutos midiendo el grosor y la fraccion de engrosamiento durante la inspiracion. Y el ajuste ventilatorio tiene una logica propia: el diafragma se atrofia si el respirador hace todo el trabajo, pero tambien se lesiona si el esfuerzo es excesivo, de modo que el objetivo es un nivel de esfuerzo INTERMEDIO. Sedar mas o subir el soporte al maximo empeoraria exactamente el problema que se intenta resolver.'
  },
  { q: 'Que politica de sedacion previene la debilidad adquirida?', options: ['Sedacion ligera con objetivo definido', 'Sedacion profunda para evitar el dolor', 'Sedacion continua sin interrupciones', 'Sedacion a demanda del paciente'], correct: 0, explanation: 'Con interrupcion diaria cuando proceda. Un paciente sedado no se mueve, no colabora, no se le puede explorar la fuerza y desarrolla delirium: es el motor silencioso de todo el problema.', dificultad: 'intermedio' },
  { q: 'Como deben usarse los bloqueantes neuromusculares?', options: ['De forma continua si esta ventilado', 'Como sedacion complementaria', 'Solo con indicacion y poco tiempo', 'En perfusion durante todo el destete'], correct: 2, explanation: 'Y hay que revisar cada dia si siguen indicados, algo que se olvida con facilidad. Su acumulacion es mayor en la insuficiencia renal y hepatica.', dificultad: 'intermedio' },
  { q: 'Que mostro el ensayo amplio sobre control glucemico estricto en el paciente critico?', options: ['Que reducia la debilidad', 'Que acortaba la ventilacion', 'Que no tenia ningun efecto', 'Que aumento la mortalidad'], correct: 3, explanation: 'De modo que el objetivo es evitar la hiperglucemia mantenida, no normalizar a toda costa. Es un matiz importante, porque la hiperglucemia si es un factor de riesgo.', dificultad: 'dificil' },
  { q: 'Que efecto tiene la ventilacion mecanica controlada sobre el diafragma?', options: ['Lo atrofia', 'Lo fortalece con el tiempo', 'No lo modifica', 'Lo hipertrofia por sobrecarga'], correct: 0, explanation: 'Es una paradoja util de entender: el respirador que sustituye al diafragma tambien lo inactiva, y su grosor disminuye de forma medible en pocos dias, mas rapido que en los miembros.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Tercer dia de ingreso de un paciente con sepsis de origen urinario. Esta profundamente sedado, sin objetivo de sedacion escrito en la historia. No tiene pautada movilizacion de ningun tipo. Recibe cisatracurio en perfusion desde hace 48 horas, iniciado por desadaptacion al respirador que ya esta resuelta. Las glucemias rondan los 240 mg/dL.',
    steps: [
      { q: 'Cuantos factores MODIFICABLES tiene ahora mismo?', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], correct: 3 },
      { q: 'Que medida tiene mas respaldo para prevenir?', options: ['El aporte proteico alto', 'La movilizacion precoz', 'La estimulacion electrica', 'La reposicion de vitaminas'], correct: 1 },
      { q: 'Que objetivo glucemico corresponde?', options: ['Normalizar por debajo de 110', 'Mantener por encima de 200', 'Dejarla sin tratar', 'Evitar la hiperglucemia sin ser estricto'], correct: 3 }
    ],
    explanation: 'Este paciente acumula cuatro factores que se pueden corregir hoy mismo: sedacion profunda sin objetivo definido, ausencia de movilizacion, bloqueo neuromuscular que ya no tiene indicacion e hiperglucemia mantenida. A eso se suman dos factores no modificables, la sepsis y los dias de ventilacion. Como no existe ningun tratamiento farmacologico para la debilidad adquirida, actuar sobre esa lista es literalmente lo unico que puede cambiar el resultado. La medida con mas respaldo es la MOVILIZACION PRECOZ, incluso en el paciente ventilado. Y sobre la glucemia hay un matiz que conviene tener claro: la hiperglucemia mantenida es un factor de riesgo, pero perseguir un control ESTRICTO no es la solucion, porque en un ensayo amplio aumento la mortalidad.'
  },
  { q: 'Que sugiere el fracaso del destete cuando el pulmon y el corazon son aceptables?', options: ['Una ansiedad no tratada', 'Una obstruccion de la via aerea', 'Una debilidad diafragmatica', 'Un exceso de secreciones'], correct: 2, explanation: 'Es mas frecuente que la debilidad de los miembros y puede aparecer de forma independiente. La ecografia la detecta en minutos y evita repetir pruebas que van a volver a fallar.', dificultad: 'intermedio' },
  { q: 'Que caracteriza a la respiracion paradojica?', options: ['El torax se expande de forma asimetrica', 'El abdomen se hunde en inspiracion', 'La espiracion se hace activa y ruidosa', 'La frecuencia baja al esforzarse'], correct: 1, explanation: 'En lugar de expandirse. Junto con la taquipnea y el uso de musculatura accesoria, es el signo de cabecera que apunta al diafragma como causa del fracaso del destete.', dificultad: 'dificil' },
  { q: 'Que dos parametros mide la ecografia diafragmatica?', options: ['La excursion y la presion', 'El area y la velocidad', 'La distensibilidad y el flujo', 'El grosor y su engrosamiento'], correct: 3, explanation: 'La fraccion de engrosamiento durante la inspiracion refleja el esfuerzo y la fuerza del musculo. Un valor bajo se asocia a fracaso del destete y a mas dias de ventilacion.', dificultad: 'dificil' },
  { q: 'En que consiste la ventilacion protectora del diafragma?', options: ['En permitir un esfuerzo moderado', 'En suprimir todo esfuerzo del paciente', 'En maximizar el esfuerzo inspiratorio', 'En alternar modos cada pocas horas'], correct: 0, explanation: 'El diafragma se atrofia si no trabaja nada y se lesiona si el esfuerzo es excesivo. Esa doble vulnerabilidad es la razon de buscar un nivel intermedio.', dificultad: 'dificil' },
  { q: 'Cuantos dominios tiene el sindrome post-cuidados intensivos?', options: ['Uno, el fisico', 'Dos, fisico y cognitivo', 'Tres dominios', 'Cinco dominios'], correct: 2, explanation: 'Fisico, cognitivo y afectivo. Muchos pacientes no relacionan estos sintomas con su ingreso y no los cuentan si no se les pregunta de forma expresa.', dificultad: 'intermedio' },
  { q: 'Que predice mejor el deterioro cognitivo posterior al ingreso en criticos?', options: ['La edad del paciente', 'La duracion del delirium', 'El numero de organos afectados', 'La dosis total de opioides'], correct: 1, explanation: 'Es una de las asociaciones mas consistentes de la medicina intensiva, y convierte la prevencion del delirium en una intervencion con efectos que van mucho mas alla del ingreso.', dificultad: 'dificil' },
  { q: 'A quien mas afecta el sindrome post-cuidados intensivos?', options: ['Solo al propio paciente', 'Al personal de la unidad', 'A los pacientes mas jovenes', 'Tambien a la familia'], correct: 3, explanation: 'Una proporcion relevante de los familiares presenta sintomas de ansiedad, depresion o estres postraumatico, lo que se conoce como sindrome post-cuidados intensivos familiar.', dificultad: 'intermedio' },
  { q: 'Que intervencion sencilla reduce los sintomas postraumaticos del superviviente?', options: ['Los diarios de la unidad', 'La restriccion de visitas', 'La sedacion mas profunda', 'El alta lo antes posible'], correct: 0, explanation: 'Escritos por el personal y la familia durante el ingreso, ayudan al paciente a reconstruir una historia de la que tiene lagunas y recuerdos delirantes que no sabe interpretar.', dificultad: 'dificil' },
  { q: 'Que significa que la debilidad progrese tras salir de la unidad de criticos?', options: ['Que la rehabilitacion es insuficiente', 'Que el componente es neuropatico', 'Que NO encaja con este diagnostico', 'Que la recuperacion sera mas lenta'], correct: 2, explanation: 'La debilidad adquirida no progresa una vez resuelta la enfermedad critica: mejora despacio. Un empeoramiento posterior obliga a replantear el diagnostico por completo.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Consulta de revision tres meses despues del alta de un paciente que estuvo tres semanas en la unidad de criticos por un sindrome de distres respiratorio, con delirium durante ocho dias. Camina poco y se cansa enseguida, olvida cosas y ha tenido que dejar su trabajo. Tiene pesadillas y evita hablar del ingreso. Su mujer, que le acompa&#241;a, comenta que ella tampoco duerme y esta constantemente angustiada.',
    steps: [
      { q: 'Que cuadro describe todo esto?', options: ['Una depresion mayor aislada', 'Una secuela respiratoria', 'Un sindrome post-cuidados intensivos', 'Un deterioro cognitivo previo'], correct: 2 },
      { q: 'Que factor predice mejor su deterioro cognitivo?', options: ['Los dias de ventilacion', 'La duracion del delirium', 'La gravedad al ingreso', 'La edad del paciente'], correct: 1 },
      { q: 'Que hay que tener en cuenta sobre su mujer?', options: ['Que tambien puede estar afectada', 'Que su papel es solo acompanar', 'Que no procede valorarla', 'Que mejorara sola con el tiempo'], correct: 0 }
    ],
    explanation: 'Los tres dominios estan presentes: FISICO (debilidad, fatiga, limitacion funcional), COGNITIVO (fallos de memoria que le han costado el trabajo) y AFECTIVO (pesadillas y evitacion, compatibles con estres postraumatico). Eso define el SINDROME POST-CUIDADOS INTENSIVOS, que puede durar a&#241;os y que muchos pacientes no relacionan con su ingreso ni cuentan si no se les pregunta. De todos los factores del ingreso, el que mejor predice el deterioro cognitivo posterior es la DURACION DEL DELIRIUM, y esos ocho dias pesan mas que la gravedad inicial o los dias de ventilacion. Y la mujer no es solo una acompa&#241;ante: el sindrome tiene una forma familiar bien descrita, con ansiedad, depresion y estres postraumatico en los cuidadores, que tambien merece atencion.'
  }
];

export const flashcards = [
  { front: 'La complicacion neurologica mas frecuente del critico', back: 'La debilidad adquirida. Y la que menos se busca.' },
  { front: 'Como se mide', back: 'Suma de fuerza del MRC: 6 grupos por lado, maximo 60.' },
  { front: 'Umbral diagnostico', back: 'Menos de 48 sobre 60. Menos de 36, debilidad GRAVE.' },
  { front: 'El requisito que mas se olvida', back: 'El paciente debe estar DESPIERTO y obedecer ordenes.' },
  { front: 'Que hacer si no colabora', back: 'Anotar que NO es valorable y repetirla. Nunca puntuar 0.' },
  { front: 'El patron esperado', back: 'Simetrico, proximal, con hiporreflexia y RESPETANDO cara y ojos.' },
  { front: 'Ptosis u oftalmoparesia', back: 'NO es debilidad adquirida: miastenia, botulismo o lesion de tronco.' },
  { front: 'Debilidad asimetrica', back: 'Buscar lesion focal: ictus, mielopatia, plexopatia o compresion.' },
  { front: 'Nivel sensitivo o esfinteres', back: 'RESONANCIA MEDULAR urgente: compresion con ventana terapeutica.' },
  { front: 'Progresion tras salir de criticos', back: 'No encaja. La debilidad adquirida no progresa, mejora despacio.' },
  { front: 'La primera analitica', back: 'Fosforo, potasio, magnesio y calcio. Se corrigen en horas.' },
  { front: 'Creatina cinasa muy elevada', back: 'Pensar en rabdomiolisis o miopatia necrotizante o inflamatoria.' },
  { front: 'Miopatia frente a neuropatia', back: 'La miopatia se recupera mejor; la neuropatia puede dejar secuela.' },
  { front: 'Que separa clinicamente ambas formas', back: 'La alteracion SENSITIVA, presente solo en la neuropatia.' },
  { front: 'La forma mas frecuente', back: 'La MIXTA. Comparten mecanismos y factores de riesgo.' },
  { front: 'Cuando se pierde mas musculo', back: 'En la PRIMERA SEMANA. La ventana de prevencion es estrecha.' },
  { front: 'Tratamiento farmacologico', back: 'NINGUNO. Solo funciona la prevencion.' },
  { front: 'La medida con mas respaldo', back: 'MOVILIZACION PRECOZ, tambien en el paciente ventilado.' },
  { front: 'Cuando empezar a movilizar', back: 'El primer o segundo dia. No al extubar.' },
  { front: 'Politica de sedacion', back: 'Ligera, con objetivo definido e interrupcion diaria.' },
  { front: 'Bloqueantes neuromusculares', back: 'Solo con indicacion y el menor tiempo. Revisar a diario.' },
  { front: 'Control glucemico estricto', back: 'AUMENTO la mortalidad. Evitar la hiperglucemia, sin ser estricto.' },
  { front: 'Ventilacion mecanica y diafragma', back: 'La ventilacion controlada lo ATROFIA en pocos dias.' },
  { front: 'Destete que falla con pulmon aceptable', back: 'Mirar el DIAFRAGMA. Es mas frecuente que la debilidad periferica.' },
  { front: 'Respiracion paradojica', back: 'El abdomen se HUNDE en inspiracion. Signo de diafragma debil.' },
  { front: 'Ecografia diafragmatica', back: 'Mide grosor y fraccion de engrosamiento. Resuelve en minutos.' },
  { front: 'Ventilacion protectora del diafragma', back: 'Permitir un esfuerzo MODERADO: ni nulo ni excesivo.' },
  { front: 'Sindrome post-cuidados intensivos', back: 'Tres dominios: fisico, cognitivo y afectivo. Puede durar a&#241;os.' },
  { front: 'Mejor predictor del deterioro cognitivo', back: 'La DURACION DEL DELIRIUM durante el ingreso.' },
  { front: 'A quien mas afecta el sindrome', back: 'Tambien a la FAMILIA. Existe una forma familiar descrita.' },
  { front: 'Diarios de la unidad', back: 'Reducen los sintomas postraumaticos del superviviente.' },
  { front: 'Donde se interrumpe la rehabilitacion', back: 'Justo al salir de criticos, cuando mas podria rendir.' }
];

export default { quiz, flashcards };
