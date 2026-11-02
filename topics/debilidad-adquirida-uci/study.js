// topics/debilidad-adquirida-uci/study.js: Autoevaluacion de debilidad adquirida en la UCI.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Cual es la complicación neurológica más frecuente del paciente crítico?', options: ['La debilidad adquirida', 'El ictus isquémico', 'La encefalopatía hipóxica', 'La neuropatía diabética'], correct: 0, explanation: 'Y es también la que menos se busca, porque se atribuye a que el paciente esta débil por haber estado ingresado. Es una entidad con nombre, con criterios y con prevención.', dificultad: 'facil' },
  { q: 'Con que escala se mide la debilidad adquirida?', options: ['Con la escala de Rankin', 'Con el índice de Barthel', 'Con la suma de fuerza del MRC', 'Con la escala de Ashworth'], correct: 2, explanation: 'Puntúa de 0 a 5 la fuerza de seis grupos musculares en cada lado, con un máximo de 60. No necesita ningún aparato, pero si un paciente que colabore.', dificultad: 'intermedio' },
  { q: 'Que puntuación define debilidad adquirida en la unidad de críticos?', options: ['Menos de 55 sobre 60', 'Menos de 48 sobre 60', 'Menos de 30 sobre 60', 'Menos de 20 sobre 60'], correct: 1, explanation: 'Y por debajo de 36 se habla de debilidad grave, que se asocia a más días de ventilación, mayor dependencia al alta y peor situación funcional al año.', dificultad: 'intermedio' },
  { q: 'Que requisito imprescindible tiene la escala de fuerza?', options: ['Que hayan pasado 7 días', 'Que no reciba corticoides', 'Que este extubado', 'Que el paciente colabore'], correct: 3, explanation: 'Puntuar a alguien sedado o confuso produce un número sin ningún valor. Lo correcto es anotar que no es valorable y repetir la exploración cuando despierte.', dificultad: 'intermedio' },
  { q: 'Que musculatura respeta característicamente la debilidad adquirida?', options: ['La musculatura distal', 'La facial y la ocular', 'La musculatura axial', 'La musculatura respiratoria'], correct: 1, explanation: 'Ese detalle es muy útil: si hay ptosis, oftalmoparesia o debilidad facial marcada, hay que pensar en otra cosa, porque eso no pertenece a este cuadro.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente que despierta tras 12 días de ventilación mecánica por una neumonía grave. Obedece órdenes con normalidad. En la exploración de fuerza obtiene: abducción del hombro 3 y 3, flexión del codo 3 y 3, extensión de la muñeca 4 y 4, flexión de la cadera 2 y 2, extensión de la rodilla 3 y 3, y dorsiflexión del pie 2 y 2. La musculatura facial y los movimientos oculares son normales.',
    steps: [
      { q: 'Cuanto suma su fuerza total?', options: ['28 puntos', '31 puntos', '34 puntos', '41 puntos'], correct: 2 },
      { q: 'Como se clasifica esa puntuación?', options: ['Sin debilidad', 'Debilidad dudosa', 'Debilidad leve', 'Debilidad grave'], correct: 3 },
      { q: 'Que dato de la exploración apoya el diagnóstico?', options: ['Que respeta cara y ojos', 'Que la fuerza es de 3', 'Que lleva 12 días intubado', 'Que obedece órdenes'], correct: 0 }
    ],
    explanation: 'La suma es 6 más 6 más 8 más 4 más 6 más 4, es decir 34 sobre 60. Por debajo de 48 se cumple el criterio de debilidad adquirida, y por debajo de 36 se considera DEBILIDAD GRAVE, que es la categoría de este paciente y que se asocia a más días de ventilación y a peor situación funcional al año. El dato de la exploración que más apoya el diagnóstico es que la musculatura facial y ocular esta RESPETADA: la debilidad adquirida no las afecta, de modo que su indemnidad encaja con el cuadro y su afectación habría obligado a pensar en una miastenia, un botulismo o una lesión de tronco. Conviene además fijarse en que el patrón es simétrico y de predominio proximal, que es lo esperable.'
  },
  { q: 'Como es el patrón de debilidad de este cuadro?', options: ['Asimétrico y distal', 'Focal y de predominio bulbar', 'Simétrico y proximal', 'Fluctuante a lo largo del dia'], correct: 2, explanation: 'Con reflejos disminuidos o abolidos. Ese patrón, junto con la ausencia de afectación facial y ocular, es lo que define el cuadro típico.', dificultad: 'intermedio' },
  { q: 'Que significa encontrar ptosis y oftalmoparesia en un paciente crítico débil?', options: ['Que NO es debilidad adquirida', 'Que la debilidad es más grave', 'Que hay componente neuropático', 'Que se recuperara más rápido'], correct: 0, explanation: 'Obliga a pensar en miastenia gravis, botulismo, síndrome de Miller Fisher o una lesión de tronco. Es la bandera que más rápido reorienta el estudio y se busca simplemente mirando al paciente.', dificultad: 'dificil' },
  { q: 'Que obliga a hacer un nivel sensitivo en el paciente crítico débil?', options: ['Repetir la escala en 24 horas', 'Solicitar un electromiograma', 'Ampliar la analítica ionica', 'Una resonancia medular urgente'], correct: 3, explanation: 'Junto con la afectación de esfínteres, obliga a descartar una compresión medular, que es una urgencia con ventana terapéutica y que no pertenece en absoluto a este cuadro.', dificultad: 'dificil' },
  { q: 'Cual es la primera analítica que hay que pedir ante una debilidad en el paciente crítico?', options: ['Los anticuerpos neuronales', 'Los iones, con fósforo y magnesio', 'La velocidad de sedimentación', 'El perfil de autoinmunidad'], correct: 1, explanation: 'La hipofosfatemia y la hipopotasemia producen debilidad grave y se corrigen en horas. Buscarlas antes de encargar un electromiograma ahorra tiempo y explica muchos casos.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Se solicita valorar la fuerza de un paciente que lleva nueve días en la unidad de críticos. Esta profundamente sedado, no abre los ojos a la llamada y no obedece ninguna orden sencilla.',
    steps: [
      { q: 'Se puede aplicar la escala de fuerza?', options: ['Si, con estímulo doloroso', 'No', 'Si, puntuando 0 en todo', 'Solo en los miembros superiores'], correct: 1 },
      { q: 'Que corresponde anotar y hacer?', options: ['Que no es valorable, y repetirla', 'Una puntuación de 0 sobre 60', 'Que tiene debilidad grave', 'Que la exploración es normal'], correct: 0 },
      { q: 'Que se puede hacer mientras tanto?', options: ['Esperar sin intervenir', 'Solicitar un electromiograma', 'Iniciar corticoides preventivos', 'Movilizar y revisar iones y fármacos'], correct: 3 }
    ],
    explanation: 'La suma de fuerza exige un paciente DESPIERTO y capaz de obedecer órdenes: es su requisito y el que más se olvida. Puntuar a alguien profundamente sedado produce un número sin ningún valor, y anotar un 0 sobre 60 sería peor todavía, porque quedaria registrado como una debilidad extrema que en realidad no se ha medido. Lo correcto es dejar constancia de que la escala NO es valorable y repetirla cuando despierte. Mientras tanto si se puede hacer bastante: aligerar la sedación si es posible, iniciar movilización PASIVA, que no requiere colaboracion, y revisar el fósforo, el potasio, el magnesio y la lista de fármacos, que son causas tratables y frecuentes.'
  },
  { q: 'Que significa una creatina cinasa marcadamente elevada en este contexto?', options: ['Que confirma la miopatía del crítico', 'Que indica componente neuropático', 'Que hay que pensar en otra miopatía', 'Que el pronóstico es mejor'], correct: 2, explanation: 'En la debilidad adquirida suele ser normal o poco elevada. Una elevación marcada apunta a rabdomiólisis, miopatía necrotizante o miopatía inflamatoria, que tienen manejo propio.', dificultad: 'intermedio' },
  { q: 'Cual de las dos formas se recupera mejor?', options: ['La miopatía', 'La neuropatía', 'Se recuperan igual', 'Ninguna se recupera'], correct: 0, explanation: 'La fibra muscular conserva la capacidad de regenerarse, mientras que la reparación axonal depende de un crecimiento lento desde el cuerpo neuronal y puede quedar incompleta.', dificultad: 'intermedio' },
  { q: 'Que dato clínico separa la neuropatía de la miopatía del paciente crítico?', options: ['La intensidad de la debilidad', 'La simetría del cuadro', 'La cifra de creatina cinasa', 'La alteración sensitiva'], correct: 3, explanation: 'La neuropatía es sensitivomotora y la miopatía no afecta a la sensibilidad. Explorarla en el paciente crítico es difícil y poco fiable, pero es la diferencia clínica clave.', dificultad: 'dificil' },
  { q: 'Cual es la forma más frecuente en la práctica?', options: ['La neuropatía pura', 'La forma mixta', 'La miopatía pura', 'La forma desmielinizante'], correct: 1, explanation: 'Comparten los mismos factores de riesgo y los mismos mecanismos, de modo que suelen coexistir. La separación tiene interés pronóstico, no terapéutico.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Paciente que lleva ocho días ventilado por una neumonía y que al despertar presenta debilidad generalizada. Al explorarlo se aprecia ptosis bilateral y la familia refiere que la debilidad es mucho más marcada por la tarde que por la mañana. Los reflejos están conservados y no hay alteración sensitiva.',
    steps: [
      { q: 'Encaja con una debilidad adquirida?', options: ['Si, es el cuadro típico', 'Si, con componente neuropático', 'Si, en su forma grave', 'No encaja'], correct: 3 },
      { q: 'Que diagnóstico sugiere el cuadro?', options: ['Un síndrome de Guillain-Barré', 'Una miastenia gravis', 'Una mielopatía cervical', 'Una miopatía por corticoides'], correct: 1 },
      { q: 'Que pruebas confirman esa sospecha?', options: ['Resonancia medular y líquido', 'Biopsia muscular y creatina cinasa', 'Anticuerpos y estimulación repetitiva', 'Ecografía muscular y diafragmática'], correct: 2 }
    ],
    explanation: 'Dos datos rompen el molde a la vez. El primero es la PTOSIS: la debilidad adquirida respeta característicamente la musculatura facial y ocular, de modo que su afectación obliga a buscar otra cosa. El segundo es la FLUCTUACIÓN a lo largo del dia, con empeoramiento vespertino, que es la firma de la fatigabilidad y que este cuadro no produce. La combinación de afectación ocular y debilidad fluctuante apunta a una MIASTENIA GRAVIS, que puede haber estado sin diagnosticar y haberse descompensado durante el ingreso, o incluso haber sido la causa del fracaso respiratorio inicial. Se confirma con anticuerpos frente al receptor de acetilcolina o frente a MuSK y con el estudio de estimulación repetitiva, y su tratamiento es completamente distinto.'
  },
  { q: 'Cuando es máxima la pérdida de masa y de fuerza muscular en el paciente crítico?', options: ['A partir del mes de ingreso', 'A las tres semanas', 'En la primera semana', 'Tras el alta de críticos'], correct: 2, explanation: 'Eso significa que la ventana para prevenir es estrecha y muy precoz: lo que se haga en los primeros días pesa más que todo lo que se haga después.', dificultad: 'dificil' },
  { q: 'Que tratamiento farmacológico ha demostrado eficacia en la debilidad adquirida?', options: ['Ninguno', 'Los anabolizantes', 'La creatina oral', 'Las inmunoglobulinas'], correct: 0, explanation: 'Por eso la prevención es lo único que funciona, y toda la prevención consiste en hacer menos de algo: menos sedación, menos inmovilidad, menos bloqueo y menos hiperglucemia.', dificultad: 'intermedio' },
  { q: 'Cual es la medida preventiva con más respaldo?', options: ['El aporte proteico elevado', 'La estimulación eléctrica', 'El control glucémico estricto', 'La movilización precoz'], correct: 3, explanation: 'Un ensayo aleatorizado de fisioterapia y terapia ocupacional precoces en pacientes ventilados mostró mejor situación funcional al alta y menos días de delirium.', dificultad: 'intermedio' },
  { q: 'Cuando conviene empezar a movilizar al paciente crítico?', options: ['Cuando este extubado', 'El primer o segundo dia', 'Al salir de la unidad', 'Cuando pueda sentarse solo'], correct: 1, explanation: 'Incluso en el paciente ventilado, y esa es la parte que más cuesta implantar. Esperar a la extubación desaprovecha justo la semana en la que más músculo se pierde.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente con diez días de ventilación mecánica que fracasa la prueba de respiración espontánea. La radiografía de tórax es aceptable, no hay sobrecarga de volumen ni broncoespasmo, y la función cardiaca es normal. Durante la prueba presenta taquipnea progresiva y el abdomen se hunde durante la inspiración. La suma de fuerza en los miembros es de 46 sobre 60.',
    steps: [
      { q: 'Que hay que explorar a continuación?', options: ['El diafragma', 'La via aérea alta', 'El nervio recurrente', 'La musculatura cervical'], correct: 0 },
      { q: 'Que mide la ecografía de ese músculo?', options: ['La velocidad de conducción', 'El grosor y su engrosamiento', 'La presión transdiafragmatica', 'La distensibilidad torácica'], correct: 1 },
      { q: 'Que ajuste ventilatorio conviene?', options: ['Sedar más para que descanse', 'Aumentar el soporte al máximo', 'Permitir un esfuerzo moderado', 'Pasar a modo controlado'], correct: 2 }
    ],
    explanation: 'La respiración PARADÓJICA, con el abdomen que se hunde en inspiración en lugar de expandirse, junto con un pulmón y un corazón aceptables, apunta directamente al DIAFRAGMA. La debilidad diafragmática es más frecuente que la de los miembros y puede ir por libre, como aquí, donde la fuerza periférica es casi normal. La ecografía lo resuelve en minutos midiendo el grosor y la fracción de engrosamiento durante la inspiración. Y el ajuste ventilatorio tiene una lógica propia: el diafragma se atrofia si el respirador hace todo el trabajo, pero también se lesiona si el esfuerzo es excesivo, de modo que el objetivo es un nivel de esfuerzo INTERMEDIO. Sedar más o subir el soporte al máximo empeoraria exactamente el problema que se intenta resolver.'
  },
  { q: 'Que politica de sedación previene la debilidad adquirida?', options: ['Sedación ligera con objetivo definido', 'Sedación profunda para evitar el dolor', 'Sedación continua sin interrupciones', 'Sedación a demanda del paciente'], correct: 0, explanation: 'Con interrupción diaria cuando proceda. Un paciente sedado no se mueve, no colabora, no se le puede explorar la fuerza y desarrolla delirium: es el motor silencioso de todo el problema.', dificultad: 'intermedio' },
  { q: 'Como deben usarse los bloqueantes neuromusculares?', options: ['De forma continua si esta ventilado', 'Como sedación complementaria', 'Solo con indicación y poco tiempo', 'En perfusión durante todo el destete'], correct: 2, explanation: 'Y hay que revisar cada dia si siguen indicados, algo que se olvida con facilidad. Su acumulación es mayor en la insuficiencia renal y hepática.', dificultad: 'intermedio' },
  { q: 'Que mostró el ensayo amplio sobre control glucémico estricto en el paciente crítico?', options: ['Que reducia la debilidad', 'Que acortaba la ventilación', 'Que no tenia ningún efecto', 'Que aumento la mortalidad'], correct: 3, explanation: 'De modo que el objetivo es evitar la hiperglucemia mantenida, no normalizar a toda costa. Es un matiz importante, porque la hiperglucemia si es un factor de riesgo.', dificultad: 'dificil' },
  { q: 'Que efecto tiene la ventilación mecánica controlada sobre el diafragma?', options: ['Lo atrofia', 'Lo fortalece con el tiempo', 'No lo modifica', 'Lo hipertrofia por sobrecarga'], correct: 0, explanation: 'Es una paradoja útil de entender: el respirador que sustituye al diafragma también lo inactiva, y su grosor disminuye de forma medible en pocos días, más rápido que en los miembros.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Tercer dia de ingreso de un paciente con sepsis de origen urinario. Esta profundamente sedado, sin objetivo de sedación escrito en la historia. No tiene pautada movilización de ningún tipo. Recibe cisatracurio en perfusión desde hace 48 horas, iniciado por desadaptacion al respirador que ya esta resuelta. Las glucemias rondan los 240 mg/dL.',
    steps: [
      { q: 'Cuantos factores MODIFICABLES tiene ahora mismo?', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], correct: 3 },
      { q: 'Que medida tiene más respaldo para prevenir?', options: ['El aporte proteico alto', 'La movilización precoz', 'La estimulación eléctrica', 'La reposición de vitaminas'], correct: 1 },
      { q: 'Que objetivo glucémico corresponde?', options: ['Normalizar por debajo de 110', 'Mantener por encima de 200', 'Dejarla sin tratar', 'Evitar la hiperglucemia sin ser estricto'], correct: 3 }
    ],
    explanation: 'Este paciente acumula cuatro factores que se pueden corregir hoy mismo: sedación profunda sin objetivo definido, ausencia de movilización, bloqueo neuromuscular que ya no tiene indicación e hiperglucemia mantenida. A eso se suman dos factores no modificables, la sepsis y los días de ventilación. Como no existe ningún tratamiento farmacológico para la debilidad adquirida, actuar sobre esa lista es literalmente lo único que puede cambiar el resultado. La medida con más respaldo es la MOVILIZACIÓN PRECOZ, incluso en el paciente ventilado. Y sobre la glucemia hay un matiz que conviene tener claro: la hiperglucemia mantenida es un factor de riesgo, pero perseguir un control ESTRICTO no es la solución, porque en un ensayo amplio aumento la mortalidad.'
  },
  { q: 'Que sugiere el fracaso del destete cuando el pulmón y el corazón son aceptables?', options: ['Una ansiedad no tratada', 'Una obstrucción de la via aérea', 'Una debilidad diafragmática', 'Un exceso de secreciones'], correct: 2, explanation: 'Es más frecuente que la debilidad de los miembros y puede aparecer de forma independiente. La ecografía la detecta en minutos y evita repetir pruebas que van a volver a fallar.', dificultad: 'intermedio' },
  { q: 'Que caracteriza a la respiración paradójica?', options: ['El tórax se expande de forma asimétrica', 'El abdomen se hunde en inspiración', 'La espiración se hace activa y ruidosa', 'La frecuencia baja al esforzarse'], correct: 1, explanation: 'En lugar de expandirse. Junto con la taquipnea y el uso de musculatura accesoria, es el signo de cabecera que apunta al diafragma como causa del fracaso del destete.', dificultad: 'dificil' },
  { q: 'Que dos parámetros mide la ecografía diafragmática?', options: ['La excursión y la presión', 'El área y la velocidad', 'La distensibilidad y el flujo', 'El grosor y su engrosamiento'], correct: 3, explanation: 'La fracción de engrosamiento durante la inspiración refleja el esfuerzo y la fuerza del músculo. Un valor bajo se asocia a fracaso del destete y a más días de ventilación.', dificultad: 'dificil' },
  { q: 'En que consiste la ventilación protectora del diafragma?', options: ['En permitir un esfuerzo moderado', 'En suprimir todo esfuerzo del paciente', 'En maximizar el esfuerzo inspiratorio', 'En alternar modos cada pocas horas'], correct: 0, explanation: 'El diafragma se atrofia si no trabaja nada y se lesiona si el esfuerzo es excesivo. Esa doble vulnerabilidad es la razón de buscar un nivel intermedio.', dificultad: 'dificil' },
  { q: 'Cuantos dominios tiene el síndrome post-cuidados intensivos?', options: ['Uno, el físico', 'Dos, físico y cognitivo', 'Tres dominios', 'Cinco dominios'], correct: 2, explanation: 'Físico, cognitivo y afectivo. Muchos pacientes no relacionan estos síntomas con su ingreso y no los cuentan si no se les pregunta de forma expresa.', dificultad: 'intermedio' },
  { q: 'Que predice mejor el deterioro cognitivo posterior al ingreso en críticos?', options: ['La edad del paciente', 'La duración del delirium', 'El número de órganos afectados', 'La dosis total de opioides'], correct: 1, explanation: 'Es una de las asociaciones más consistentes de la medicina intensiva, y convierte la prevención del delirium en una intervención con efectos que van mucho más allá del ingreso.', dificultad: 'dificil' },
  { q: 'A quien más afecta el síndrome post-cuidados intensivos?', options: ['Solo al propio paciente', 'Al personal de la unidad', 'A los pacientes más jóvenes', 'También a la familia'], correct: 3, explanation: 'Una proporción relevante de los familiares presenta síntomas de ansiedad, depresión o estrés postraumático, lo que se conoce como síndrome post-cuidados intensivos familiar.', dificultad: 'intermedio' },
  { q: 'Que intervención sencilla reduce los síntomas postraumáticos del superviviente?', options: ['Los diarios de la unidad', 'La restricción de visitas', 'La sedación más profunda', 'El alta lo antes posible'], correct: 0, explanation: 'Escritos por el personal y la familia durante el ingreso, ayudan al paciente a reconstruir una historia de la que tiene lagunas y recuerdos delirantes que no sabe interpretar.', dificultad: 'dificil' },
  { q: 'Que significa que la debilidad progrese tras salir de la unidad de críticos?', options: ['Que la rehabilitación es insuficiente', 'Que el componente es neuropático', 'Que NO encaja con este diagnóstico', 'Que la recuperación será más lenta'], correct: 2, explanation: 'La debilidad adquirida no progresa una vez resuelta la enfermedad crítica: mejora despacio. Un empeoramiento posterior obliga a replantear el diagnóstico por completo.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Consulta de revisión tres meses después del alta de un paciente que estuvo tres semanas en la unidad de críticos por un síndrome de distres respiratorio, con delirium durante ocho días. Camina poco y se cansa enseguida, olvida cosas y ha tenido que dejar su trabajo. Tiene pesadillas y evita hablar del ingreso. Su mujer, que le acompaña, comenta que ella tampoco duerme y esta constantemente angustiada.',
    steps: [
      { q: 'Que cuadro describe todo esto?', options: ['Una depresión mayor aislada', 'Una secuela respiratoria', 'Un síndrome post-cuidados intensivos', 'Un deterioro cognitivo previo'], correct: 2 },
      { q: 'Que factor predice mejor su deterioro cognitivo?', options: ['Los días de ventilación', 'La duración del delirium', 'La gravedad al ingreso', 'La edad del paciente'], correct: 1 },
      { q: 'Que hay que tener en cuenta sobre su mujer?', options: ['Que también puede estar afectada', 'Que su papel es solo acompanar', 'Que no procede valorarla', 'Que mejorara sola con el tiempo'], correct: 0 }
    ],
    explanation: 'Los tres dominios están presentes: FÍSICO (debilidad, fatiga, limitación funcional), COGNITIVO (fallos de memoria que le han costado el trabajo) y AFECTIVO (pesadillas y evitación, compatibles con estrés postraumático). Eso define el SÍNDROME POST-CUIDADOS INTENSIVOS, que puede durar años y que muchos pacientes no relacionan con su ingreso ni cuentan si no se les pregunta. De todos los factores del ingreso, el que mejor predice el deterioro cognitivo posterior es la DURACIÓN DEL DELIRIUM, y esos ocho días pesan más que la gravedad inicial o los días de ventilación. Y la mujer no es solo una acompañante: el síndrome tiene una forma familiar bien descrita, con ansiedad, depresión y estrés postraumático en los cuidadores, que también merece atención.'
  }
];

export const flashcards = [
  { front: 'La complicación neurológica más frecuente del crítico', back: 'La debilidad adquirida. Y la que menos se busca.' },
  { front: 'Como se mide', back: 'Suma de fuerza del MRC: 6 grupos por lado, máximo 60.' },
  { front: 'Umbral diagnóstico', back: 'Menos de 48 sobre 60. Menos de 36, debilidad GRAVE.' },
  { front: 'El requisito que más se olvida', back: 'El paciente debe estar DESPIERTO y obedecer órdenes.' },
  { front: 'Que hacer si no colabora', back: 'Anotar que NO es valorable y repetirla. Nunca puntuar 0.' },
  { front: 'El patrón esperado', back: 'Simétrico, proximal, con hiporreflexia y RESPETANDO cara y ojos.' },
  { front: 'Ptosis u oftalmoparesia', back: 'NO es debilidad adquirida: miastenia, botulismo o lesión de tronco.' },
  { front: 'Debilidad asimétrica', back: 'Buscar lesión focal: ictus, mielopatía, plexopatia o compresión.' },
  { front: 'Nivel sensitivo o esfínteres', back: 'RESONANCIA MEDULAR urgente: compresión con ventana terapéutica.' },
  { front: 'Progresión tras salir de críticos', back: 'No encaja. La debilidad adquirida no progresa, mejora despacio.' },
  { front: 'La primera analítica', back: 'Fósforo, potasio, magnesio y calcio. Se corrigen en horas.' },
  { front: 'Creatina cinasa muy elevada', back: 'Pensar en rabdomiólisis o miopatía necrotizante o inflamatoria.' },
  { front: 'Miopatía frente a neuropatía', back: 'La miopatía se recupera mejor; la neuropatía puede dejar secuela.' },
  { front: 'Que separa clínicamente ambas formas', back: 'La alteración SENSITIVA, presente solo en la neuropatía.' },
  { front: 'La forma más frecuente', back: 'La MIXTA. Comparten mecanismos y factores de riesgo.' },
  { front: 'Cuando se pierde más músculo', back: 'En la PRIMERA SEMANA. La ventana de prevención es estrecha.' },
  { front: 'Tratamiento farmacológico', back: 'NINGUNO. Solo funciona la prevención.' },
  { front: 'La medida con más respaldo', back: 'MOVILIZACIÓN PRECOZ, también en el paciente ventilado.' },
  { front: 'Cuando empezar a movilizar', back: 'El primer o segundo dia. No al extubar.' },
  { front: 'Politica de sedación', back: 'Ligera, con objetivo definido e interrupción diaria.' },
  { front: 'Bloqueantes neuromusculares', back: 'Solo con indicación y el menor tiempo. Revisar a diario.' },
  { front: 'Control glucémico estricto', back: 'AUMENTO la mortalidad. Evitar la hiperglucemia, sin ser estricto.' },
  { front: 'Ventilación mecánica y diafragma', back: 'La ventilación controlada lo ATROFIA en pocos días.' },
  { front: 'Destete que falla con pulmón aceptable', back: 'Mirar el DIAFRAGMA. Es más frecuente que la debilidad periférica.' },
  { front: 'Respiración paradójica', back: 'El abdomen se HUNDE en inspiración. Signo de diafragma débil.' },
  { front: 'Ecografía diafragmática', back: 'Mide grosor y fracción de engrosamiento. Resuelve en minutos.' },
  { front: 'Ventilación protectora del diafragma', back: 'Permitir un esfuerzo MODERADO: ni nulo ni excesivo.' },
  { front: 'Síndrome post-cuidados intensivos', back: 'Tres dominios: físico, cognitivo y afectivo. Puede durar años.' },
  { front: 'Mejor predictor del deterioro cognitivo', back: 'La DURACIÓN DEL DELIRIUM durante el ingreso.' },
  { front: 'A quien más afecta el síndrome', back: 'También a la FAMILIA. Existe una forma familiar descrita.' },
  { front: 'Diarios de la unidad', back: 'Reducen los síntomas postraumáticos del superviviente.' },
  { front: 'Donde se interrumpe la rehabilitación', back: 'Justo al salir de críticos, cuando más podría rendir.' }
];

export default { quiz, flashcards };
