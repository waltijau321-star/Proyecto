// topics/lesion-renal-aguda/study.js: Autoevaluacion de lesion renal aguda.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Que limitación principal tiene la creatinina como marcador?', options: ['Que sube tarde', 'Que se mide en orina', 'Que varia con la dieta', 'Que precisa ayuno previo'], correct: 0, explanation: 'Cuando asciende ya se ha perdido buena parte del filtrado. Y en el paciente crítico la enmascaran la pérdida de masa muscular y la dilución por fluidos, que la mantienen falsamente baja.', dificultad: 'intermedio' },
  { q: 'Que criterio detecta antes la lesión renal aguda?', options: ['La urea plasmática', 'El filtrado estimado', 'La diuresis', 'El cociente urea-creatinina'], correct: 2, explanation: 'Cae cuando cae la perfusión, sin el retraso cinetico de la creatinina, y no cuesta nada. Es también el dato peor registrado del hospital: cuantificarla de verdad adelanta el diagnóstico horas.', dificultad: 'facil' },
  { q: 'Que ascenso de creatinina en 48 horas define lesión renal aguda?', options: ['0.1 mg/dL o más', '0.3 mg/dL o más', '0.8 mg/dL o más', '1.5 mg/dL o más'], correct: 1, explanation: 'Es un umbral deliberadamente bajo, porque incluso ascensos pequeños se asocian a peor pronóstico. Por eso hace falta rescatar el basal de analíticas previas para poder aplicarlo.', dificultad: 'intermedio' },
  { q: 'Que cociente sobre la creatinina basal define lesión renal aguda?', options: ['1.1 veces en 24 horas', '1.2 veces en 48 horas', '2.0 veces en 7 días', '1.5 veces en 7 días'], correct: 3, explanation: 'Los criterios tienen plazo, y ese detalle se olvida: 48 horas para el ascenso absoluto de 0.3 mg/dL y 7 días para el cociente respecto al basal.', dificultad: 'intermedio' },
  { q: 'Cual es el criterio de diuresis para el diagnóstico?', options: ['Menos de 1 mL/kg/h durante 4 horas', 'Menos de 0.5 mL/kg/h durante 6 horas', 'Menos de 0.3 mL/kg/h durante 3 horas', 'Anuria de cualquier duración'], correct: 1, explanation: 'Basta con ese criterio para diagnosticar, sin necesidad de que la creatinina se haya movido. Es el que permite reconocer el cuadro más temprano.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente ingresado por una sepsis abdominal. Su creatinina basal, de una analítica de hace tres meses, era de 0.9 mg/dL. La actual es de 2.4 mg/dL, con 60 horas transcurridas desde entonces. La diuresis lleva 26 horas por debajo de 0.3 mL/kg/h.',
    steps: [
      { q: 'Que estadio le corresponde?', options: ['Un estadio 1', 'Un estadio 2', 'Un estadio 3', 'Ningún estadio'], correct: 2 },
      { q: 'Que eje determina ese estadio?', options: ['El de la creatinina', 'El del biomarcador', 'El del tiempo transcurrido', 'El de la diuresis'], correct: 3 },
      { q: 'Como se clasifica por su duración?', options: ['Como persistente', 'Como transitoria', 'Como enfermedad renal aguda', 'Como recurrente'], correct: 0 }
    ],
    explanation: 'La creatinina esta 2.67 veces el basal, lo que por si solo corresponde a un estadio 2. La diuresis, en cambio, lleva 26 horas por debajo de 0.3 mL/kg/h, lo que corresponde a un estadio 3. Como el estadio se toma del eje MÁS ALTO, el paciente esta en ESTADIO 3, y lo determina la diuresis y no la creatinina. Ese desajuste es precisamente el argumento del borrador de la guía de 2026 para dejar de dar un estadio único e informar los ejes por separado: este paciente sería un C2 U3, y esa notacion conserva una información que el número único pierde. Con 60 horas de evolución, es decir más de 48 y menos de 7 días, la lesión se clasifica como PERSISTENTE, lo que se asocia a daño estructural y a mayor riesgo de enfermedad renal crónica posterior.'
  },
  { q: 'Como se asigna el estadio cuando la creatinina y la diuresis discrepan?', options: ['Se promedian los dos ejes', 'Manda siempre la creatinina', 'Se toma el eje más alto', 'Se repite en 24 horas'], correct: 2, explanation: 'El estadio recoge la peor de las dos alteraciones. El borrador de 2026 propone informarlos por separado precisamente porque colapsarlos en un número pierde información útil.', dificultad: 'intermedio' },
  { q: 'Que estadio corresponde al paciente en el que se inicia depuración extrarrenal?', options: ['El estadio 3', 'El estadio 2', 'Depende de la creatinina', 'Depende de la diuresis'], correct: 0, explanation: 'Iniciar la técnica clasifica automáticamente como estadio 3, con independencia de las cifras. Es una de las reglas que más se olvidan al estadiar.', dificultad: 'intermedio' },
  { q: 'Que cambio propone el borrador de la guía de 2026 en el estadiaje?', options: ['Reducirlo a dos estadios', 'Añadir un cuarto estadio', 'Usar solo la diuresis', 'Informar tres ejes por separado'], correct: 3, explanation: 'Los ejes son C de creatinina, U de diuresis y B de biomarcador de daño. Un paciente C1 U3 y otro C3 U0 tienen problemas distintos que el estadio único no distingue.', dificultad: 'dificil' },
  { q: 'Que dos elementos añade el borrador de 2026 a los criterios diagnósticos?', options: ['La urea y el ácido úrico plasmáticos', 'La cistatina C y un biomarcador', 'La proteinuria y la hematuria microscopica', 'La ecografía y el doppler intrarrenal'], correct: 1, explanation: 'La cistatina C es útil cuando la creatinina no es fiable, por masa muscular extrema o desnutrición. Y el biomarcador introduce un criterio ESTRUCTURAL donde antes todo era funcional.', dificultad: 'dificil' },
  { q: 'A partir de que duración se considera persistente una lesión renal aguda?', options: ['De 12 horas', 'De 24 horas', 'De 48 horas', 'De 7 días'], correct: 2, explanation: 'Por debajo de ese plazo se habla de lesión transitoria, que suele ser funcional y reversible. La persistente se asocia a daño estructural y a peor pronóstico renal a largo plazo.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Varón de 78 años con hipertrofia prostática conocida, traído por malestar general. No orina desde hace 12 horas. La creatinina es de 3.8 mg/dL frente a un basal de 1.1 mg/dL. La ecografía muestra dilatación bilateral del sistema colector y una vejiga con 900 mL de contenido.',
    steps: [
      { q: 'Cual es la causa más probable?', options: ['Prerrenal', 'Posrenal', 'Necrosis tubular', 'Glomerular'], correct: 1 },
      { q: 'Que corresponde hacer de inmediato?', options: ['Sondar la vejiga', 'Iniciar hemodiálisis', 'Administrar diuréticos', 'Solicitar biopsia renal'], correct: 0 },
      { q: 'Que hay que vigilar en las horas siguientes?', options: ['Una crisis hipertensiva', 'Una hemorragia vesical', 'Una hiponatremia dilucional', 'Una poliuria posobstructiva'], correct: 3 }
    ],
    explanation: 'Anuria brusca en un varón mayor con prostatismo, dilatación bilateral y una vejiga con 900 mL es una obstrucción infravesical: causa POSRENAL. Es la causa que más rápido se resuelve de todo el tema y la que más se pasa por alto, y por eso la ecografía con medida de la vejiga es la primera prueba. El tratamiento es sondar, que es diagnóstico y terapéutico a la vez, y no espera a nada más. Lo que hay que vigilar después es la POLIURIA POSOBSTRUCTIVA: al liberarse la obstrucción puede producirse una diuresis masiva, con deshidratación y pérdida de electrolitos, que exige reponer y controlar el ionograma durante las primeras horas.'
  },
  { q: 'Cual es la primera prueba de imagen ante una lesión renal aguda?', options: ['La tomografía con contraste', 'La resonancia renal', 'La gammagrafía renal', 'La ecografía'], correct: 3, explanation: 'Descarta la obstrucción, que es la causa más rápidamente reversible, y valora el tamaño y la ecogenicidad para distinguir lo agudo de lo crónico. Y hay que medir también la vejiga.', dificultad: 'facil' },
  { q: 'Que significa que un paciente con obstrucción mantenga la diuresis?', options: ['Que la obstrucción se ha resuelto', 'Que la obstrucción puede ser parcial', 'Que hay una fístula urinaria', 'Que el diagnóstico es incorrecto'], correct: 1, explanation: 'La obstrucción parcial puede cursar con diuresis conservada e incluso con poliuria. Que el paciente orine no la descarta, y por eso la ecografía se hace igual.', dificultad: 'dificil' },
  { q: 'En que situación puede una obstrucción NO producir dilatación en la ecografía?', options: ['Cuando hay hipertrofia prostática', 'Cuando hay litiasis única', 'Cuando hay fibrosis retroperitoneal', 'Cuando hay vejiga neurógena'], correct: 2, explanation: 'El sistema colector queda atrapado y no puede dilatarse. El otro falso negativo es la obstrucción muy precoz, antes de que de tiempo a dilatar. Ambos justifican repetir o ampliar el estudio.', dificultad: 'dificil' },
  { q: 'Que hallazgo del sedimento orienta a necrosis tubular aguda?', options: ['Cilindros granulosos pardos', 'Cilindros hialinos aislados', 'Cristales de oxalato cálcico', 'Cilindros hemáticos'], correct: 0, explanation: 'Son células tubulares descamadas y detritus. Su presencia confirma que el daño ya no es funcional sino estructural, y que dar más volumen no va a resolver el cuadro.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Paciente ingresado por insuficiencia cardiaca descompensada, en tratamiento con furosemida intravenosa. La creatinina ha subido de 1.1 a 1.9 mg/dL. Se solicitan iones en orina y la excreción fraccional de sodio resulta del 2.4%. El sedimento urinario es limpio.',
    steps: [
      { q: 'Es interpretable esa excreción fraccional de sodio?', options: ['Si, orienta a causa renal', 'Si, orienta a causa prerrenal', 'Solo si se repite manana', 'No, por los diuréticos'], correct: 3 },
      { q: 'Que índice conviene usar en su lugar?', options: ['El sodio urinario aislado', 'La excreción fraccional de urea', 'La osmolalidad urinaria', 'El cociente urea-creatinina'], correct: 1 },
      { q: 'Que apoya el sedimento limpio?', options: ['Una necrosis tubular', 'Una nefritis intersticial', 'Una causa prerrenal', 'Una glomerulonefritis'], correct: 2 }
    ],
    explanation: 'Los DIURÉTICOS elevan de forma artificial la excreción fraccional de sodio, porque su efecto es precisamente impedir que el tubulo lo reabsorba. En un paciente que los recibe, un valor del 2.4% no significa nada y no permite descartar una causa prerrenal: el índice no es interpretable. Lo que corresponde usar en su lugar es la excreción fraccional de UREA, cuyo manejo tubular es menos dependiente de los diuréticos, con un umbral orientativo en torno al 35%. Y el sedimento LIMPIO apoya que no hay daño estructural del parénquima, es decir, orienta a una causa prerrenal o a una obstrucción, que es exactamente lo esperable en una insuficiencia cardiaca descompensada con diuresis intensiva.'
  },
  { q: 'Que sugiere la presencia de hematies dismorficos y cilindros hemáticos?', options: ['Una obstrucción urinaria', 'Una necrosis tubular', 'Una nefritis intersticial', 'Una lesión glomerular'], correct: 3, explanation: 'Cambia por completo el estudio: obliga a pedir inmunologia sin demora y a plantear biopsia, porque hay glomerulonefritis rápidamente progresivas que se tratan y en las que cada dia cuesta nefronas.', dificultad: 'intermedio' },
  { q: 'Que ocurre con la excreción fraccional de sodio en el paciente con diuréticos?', options: ['Desciende de forma artificial', 'Se eleva y deja de ser útil', 'No se modifica en absoluto', 'Se vuelve más específica'], correct: 1, explanation: 'El diurético impide que el tubulo reabsorba sodio, que es justo lo que el índice pretende medir. En ese caso hay que recurrir a la excreción fraccional de urea.', dificultad: 'intermedio' },
  { q: 'Que causa renal puede cursar con sodio urinario BAJO?', options: ['El contraste yodado', 'La nefritis intersticial', 'La necrosis tubular tardía', 'La nefropatía obstructiva'], correct: 0, explanation: 'Junto con la rabdomiólisis y el síndrome hepatorrenal. Por eso la excreción fraccional de sodio es una ayuda y no un arbitro: el sedimento y la ecografía aportan más.', dificultad: 'dificil' },
  { q: 'Que dos gestos preceden a cualquier razonamiento sobre la causa?', options: ['Ecografía y lista de fármacos', 'Biopsia renal e inmunologia completa', 'Doppler renal y gammagrafía', 'Urea, ácido úrico y calcio'], correct: 0, explanation: 'Los dos se resuelven en minutos y se olvidan a diario. La ecografía descarta la obstrucción, que es lo que más rápido se resuelve, y la revisión de la medicación identifica lo más prevenible de todo el tema.', dificultad: 'intermedio' },
  { q: 'Que complicación hay que vigilar tras desobstruir la via urinaria?', options: ['Una crisis hipertensiva', 'Una retención recurrente', 'Una poliuria posobstructiva', 'Una infección urinaria alta'], correct: 2, explanation: 'Puede ser masiva y producir deshidratación y pérdida de electrolitos si no se repone. Exige control de la diuresis y del ionograma durante las primeras horas.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 72 años con hipertensión e insuficiencia cardiaca, en tratamiento crónico con enalapril y furosemida. Hace cinco días comenzo a tomar ibuprofeno por una lumbalgia. La creatinina ha pasado de 1.0 a 2.3 mg/dL. La ecografía es normal y el sedimento esta limpio.',
    steps: [
      { q: 'Que explica mejor este deterioro?', options: ['La combinación de los tres fármacos', 'Una nefritis intersticial aislada', 'Una obstrucción no detectada', 'Una glomerulonefritis aguda'], correct: 0 },
      { q: 'Cual es el mecanismo?', options: ['Toxicidad tubular directa', 'Pérdida de la autorregulación glomerular', 'Obstrucción intratubular por cristales', 'Reacción inmunoalergica'], correct: 1 },
      { q: 'Que corresponde hacer?', options: ['Añadir corticoides a dosis alta', 'Iniciar depuración extrarrenal urgente', 'Retirar el antiinflamatorio', 'Aumentar la dosis de furosemida'], correct: 2 }
    ],
    explanation: 'Es la combinación clásica y una de las causas más frecuentes y más prevenibles de lesión renal aguda: antiinflamatorio, inhibidor del sistema renina-angiotensina y diurético. El mecanismo no es tóxico sino HEMODINÁMICO: el antiinflamatorio bloquea las prostaglandinas que dilatan la arteriola aferente, el inhibidor del eje dilata la eferente, y el diurético reduce la volemia. Cada uno por separado se tolera, pero juntos anulan la autorregulación del filtrado glomerular. El sedimento limpio y la ecografía normal encajan con ese mecanismo funcional. El tratamiento es retirar el antiinflamatorio, corregir la volemia y suspender temporalmente el inhibidor del eje, con lo que la función suele recuperarse en días.'
  },
  { q: 'Que efecto tiene la dopamina a dosis baja sobre el riñón?', options: ['Aumenta el filtrado de forma sostenida', 'Previene la necrosis tubular', 'Acorta la duración de la lesión', 'No lo protege'], correct: 3, explanation: 'Se uso durante décadas con esa intención y los ensayos no encontraron beneficio, si arritmias. Es uno de los tratamientos abandonados que conviene conocer para no reintroducirlos.', dificultad: 'intermedio' },
  { q: 'Que papel tienen los diuréticos en la prevención de la lesión renal aguda?', options: ['No la previenen ni la acortan', 'La previenen en el paciente séptico', 'Acortan la fase oligurica', 'Mejoran la recuperación tubular'], correct: 0, explanation: 'Son útiles para manejar la sobrecarga de volumen en quien responde a ellos, pero no protegen el riñón ni cambian el curso de la lesión. Usarlos con esa intención es un error frecuente.', dificultad: 'intermedio' },
  { q: 'Que combinación de fármacos es especialmente peligrosa para el riñón?', options: ['Betabloqueante, estatina y aspirina', 'Metformina, insulina y diurético', 'Antiinflamatorio, inhibidor del eje y diurético', 'Anticoagulante, antiagregante y protector'], correct: 2, explanation: 'Cada uno por separado se tolera, pero juntos anulan la autorregulación del filtrado glomerular. Es una de las causas más frecuentes y más evitables de lesión renal aguda ambulatoria.', dificultad: 'intermedio' },
  { q: 'Que profilaxis tiene respaldo antes de administrar contraste yodado al paciente de riesgo?', options: ['La N-acetilcisteina oral', 'La hidratación con cristaloide', 'El bicarbonato intravenoso', 'La hemofiltracion profiláctica'], correct: 1, explanation: 'Un ensayo amplio no encontró beneficio de la N-acetilcisteina ni del bicarbonato frente al suero salino. Y conviene no negar una prueba necesaria por un miedo desproporcionado al contraste.', dificultad: 'dificil' },
  { q: 'Con que frecuencia esta completa la triada de fiebre, exantema y eosinofilia en la nefritis intersticial?', options: ['En casi todos los casos', 'En tres de cada cuatro', 'En la mitad de los casos', 'En una minoría'], correct: 3, explanation: 'Su ausencia no descarta el diagnóstico, que se sospecha por la relación temporal con un fármaco y por el sedimento con leucocitos. El tratamiento empieza por retirar el sospechoso.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Paciente en la unidad de críticos con lesión renal aguda en estadio 3 por sepsis, oligurico. El potasio es de 5.4 mEq/L y se mantiene estable con tratamiento médico. No hay acidosis grave, ni sobrecarga con compromiso respiratorio, ni síntomas urémicos. Se plantea iniciar depuración extrarrenal de forma preventiva.',
    steps: [
      { q: 'Cumple alguna indicación establecida?', options: ['Si, por el estadio 3', 'Si, por la oliguria', 'Si, por el potasio', 'No cumple ninguna'], correct: 3 },
      { q: 'Que han mostrado los ensayos sobre adelantarse?', options: ['Que reduce la mortalidad', 'Que no mejora la supervivencia', 'Que acorta el ingreso', 'Que evita la dependencia'], correct: 1 },
      { q: 'Que corresponde priorizar mientras tanto?', options: ['Colocar ya el catéter de diálisis', 'Forzar diuresis con furosemida', 'Restringir por completo el aporte proteico', 'Retirar nefrotóxicos y ajustar dosis'], correct: 3 }
    ],
    explanation: 'Ninguna de las cinco indicaciones establecidas esta presente: la acidosis no es grave ni refractaria, el potasio esta controlado, no hay intoxicación, no hay sobrecarga refractaria y no hay uremia sintomática. Ni el estadio 3 ni la oliguria por si solos son indicación. Los grandes ensayos aleatorizados que compararon el inicio PRECOZ frente a esperar a que apareciera una indicación no encontraron beneficio en supervivencia con adelantarse, y si más complicaciones asociadas al catéter y a la técnica; además, una parte relevante de los pacientes manejados de forma conservadora nunca llegó a necesitarla. Lo que corresponde priorizar es lo que más rinde y menos se hace de forma sistemática: retirar nefrotóxicos, ajustar TODAS las dosis a la función renal, no sobrecargar de volumen y vigilar el potasio de forma estrecha.'
  },
  { q: 'Que consigue el calcio intravenoso en la hiperpotasemia?', options: ['Estabiliza la membrana', 'Elimina potasio por la orina', 'Introduce potasio en la célula', 'Corrige la acidosis asociada'], correct: 0, explanation: 'Protege el corazón pero no baja el potasio ni un miliequivalente. Se administra cuando hay alteraciones en el electrocardiograma, y su efecto dura poco.', dificultad: 'intermedio' },
  { q: 'Que hacen la insulina con glucosa y los agonistas beta en la hiperpotasemia?', options: ['Eliminan potasio por el intestino', 'Bloquean su absorción digestiva', 'Redistribuyen el potasio', 'Aumentan su excreción renal'], correct: 2, explanation: 'Lo introducen en la célula, de modo que el potasio corporal total no cambia y vuelve a subir en unas horas. Para eliminarlo hacen falta un quelante o la depuración extrarrenal.', dificultad: 'intermedio' },
  { q: 'Cuantas son las indicaciones clásicas de depuración extrarrenal urgente?', options: ['Tres', 'Cinco', 'Siete', 'Nueve'], correct: 1, explanation: 'Acidosis refractaria, alteraciones electrolíticas graves, intoxicación por tóxico dializable, sobrecarga refractaria y uremia sintomática. Ninguna de ellas depende del estadio ni de la cifra de creatinina.', dificultad: 'intermedio' },
  { q: 'Que han mostrado los ensayos sobre iniciar la depuración antes de que haya indicación?', options: ['Que reduce la mortalidad', 'Que acorta la estancia', 'Que mejora la recuperación renal', 'Que no mejora la supervivencia'], correct: 3, explanation: 'Y si se asocia a más complicaciones del catéter y de la técnica. Además, una parte relevante de los pacientes manejados de forma conservadora nunca llegó a necesitarla.', dificultad: 'dificil' },
  { q: 'Que técnica se prefiere en el paciente hemodinámicamente inestable?', options: ['La técnica continua', 'La hemodiálisis intermitente', 'La diálisis peritoneal', 'La hemoperfusion con carbón'], correct: 0, explanation: 'Se tolera mejor desde el punto de vista hemodinámico, aunque conviene saber que no ha demostrado ventaja en supervivencia frente a la intermitente en pacientes que toleran ambas.', dificultad: 'intermedio' },
  { q: 'Que hay que dejar organizado al alta tras una lesión renal aguda?', options: ['Una dieta baja en proteínas', 'Una restricción hídrica estricta', 'Una revisión a los 3 meses', 'Un control diario de la tensión'], correct: 2, explanation: 'Con creatinina y cociente albúmina-creatinina. Un episodio multiplica el riesgo de enfermedad renal crónica posterior, y el seguimiento tras el alta sigue siendo la excepción y no la norma.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente que ingreso por una neumonía grave y presento una lesión renal aguda en estadio 3 que preciso depuración extrarrenal durante 8 días. Sale del hospital sin necesitarla ya. Su creatinina basal previa era de 0.9 mg/dL y la del alta es de 1.25 mg/dL.',
    steps: [
      { q: 'Como se clasifica esa recuperación?', options: ['Como sin recuperación', 'Como completa', 'Como parcial', 'Como no valorable'], correct: 2 },
      { q: 'Que riesgo tiene este paciente a largo plazo?', options: ['Riesgo de litiasis recurrente', 'Riesgo de enfermedad renal crónica', 'Riesgo de hipertensión pulmonar', 'Riesgo de anemia ferropénica'], correct: 1 },
      { q: 'Que hay que dejar organizado al alta?', options: ['Cita con analítica a los 3 meses', 'Ecografía renal mensual', 'Dieta estricta sin proteínas', 'Diurético de mantenimiento'], correct: 0 }
    ],
    explanation: 'Con una creatinina de 1.25 mg/dL sobre un basal de 0.9, el cociente es de 1.39, es decir entre 1.2 y 1.5 veces el basal: eso corresponde a una resolución PARCIAL, no completa. La completa exigiria quedar por debajo de 1.2 veces el basal. Un episodio grave, prolongado y que preciso depuración, más una resolución solo parcial, situan a este paciente en riesgo elevado de ENFERMEDAD RENAL CRÓNICA posterior, además de mayor riesgo cardiovascular y de mortalidad. Y sin embargo esto es lo que más se omite: hay que dejar en el informe el estadio, la causa y los fármacos retirados, y una CITA de revisión a los 3 meses con creatinina y cociente albúmina-creatinina, porque la proteinuria residual es el mejor marcador de que ha quedado daño.'
  }
];

export const flashcards = [
  { front: 'La limitación de la creatinina', back: 'Sube TARDE. Y la masa muscular y la dilución la falsean en el crítico.' },
  { front: 'El criterio que avisa antes', back: 'La DIURESIS. Es gratis y es el dato peor registrado del hospital.' },
  { front: 'Los tres criterios diagnósticos', back: '0.3 mg/dL en 48 h, 1.5 veces el basal en 7 días, o diuresis baja 6 h.' },
  { front: 'Cuantos criterios hacen falta', back: 'Uno solo. Y cada uno tiene su plazo.' },
  { front: 'Como se asigna el estadio', back: 'Se toma el eje MÁS ALTO entre creatinina y diuresis.' },
  { front: 'Iniciar depuración extrarrenal', back: 'Clasifica automáticamente como estadio 3.' },
  { front: 'La propuesta del borrador de 2026', back: 'Informar tres ejes: C de creatinina, U de diuresis y B de biomarcador.' },
  { front: 'Que añade el borrador a los criterios', back: 'La CISTATINA C y un biomarcador de daño, que es un criterio estructural.' },
  { front: 'Transitoria frente a persistente', back: '48 horas. Más allá se asocia a daño estructural.' },
  { front: 'Enfermedad renal aguda', back: 'Lo que va de los 7 días a los 3 meses tras el episodio.' },
  { front: 'Resolución completa', back: 'Creatinina por debajo de 1.2 veces el basal en 7 días.' },
  { front: 'La primera prueba de imagen', back: 'ECOGRAFÍA, midiendo también la vejiga.' },
  { front: 'Obstrucción con diuresis conservada', back: 'Existe: la parcial puede incluso dar poliuria. Orinar no la descarta.' },
  { front: 'Ecografía sin dilatación', back: 'No descarta del todo: obstrucción muy precoz o fibrosis retroperitoneal.' },
  { front: 'Sedimento limpio', back: 'Orienta a prerrenal u obstructivo, no a daño del parénquima.' },
  { front: 'Cilindros granulosos pardos', back: 'Necrosis tubular aguda: el daño ya es estructural.' },
  { front: 'Hematies dismorficos y cilindros hemáticos', back: 'Lesión GLOMERULAR: inmunologia sin demora y valorar biopsia.' },
  { front: 'Excreción fraccional de sodio con diuréticos', back: 'Se eleva y deja de servir. Usar la de UREA, umbral en torno al 35%.' },
  { front: 'Causas renales con sodio urinario bajo', back: 'Contraste, rabdomiólisis y síndrome hepatorrenal.' },
  { front: 'Tras desobstruir', back: 'Vigilar la POLIURIA POSOBSTRUCTIVA y reponer.' },
  { front: 'La triada de fármacos peligrosa', back: 'Antiinflamatorio + inhibidor del eje + diurético. Anulan la autorregulación.' },
  { front: 'Dopamina a dosis baja', back: 'NO protege el riñón. Abandonada.' },
  { front: 'Diuréticos para prevenir', back: 'No previenen ni acortan la lesión. Solo sirven para la sobrecarga.' },
  { front: 'Profilaxis antes del contraste', back: 'HIDRATACIÓN con cristaloide. La N-acetilcisteina y el bicarbonato, no.' },
  { front: 'Nefritis intersticial', back: 'La triada de fiebre, exantema y eosinofilia esta completa en una minoría.' },
  { front: 'Las cinco indicaciones de depuración', back: 'Acidosis, electrolitos, intoxicación, sobrecarga y uremia sintomática.' },
  { front: 'Adelantar la depuración sin indicación', back: 'NO mejora la supervivencia y añade complicaciones.' },
  { front: 'Calcio en la hiperpotasemia', back: 'Estabiliza la membrana. NO baja el potasio.' },
  { front: 'Insulina y agonistas beta', back: 'REDISTRIBUYEN. Para eliminar hace falta quelante o depuración.' },
  { front: 'Técnica en el paciente inestable', back: 'Continua, por tolerancia hemodinámica. Sin ventaja en supervivencia.' },
  { front: 'Lo que más rinde en la lesión renal aguda', back: 'Retirar nefrotóxicos y ajustar TODAS las dosis.' },
  { front: 'La omisión más repetida', back: 'Alta sin cita: revisión a los 3 meses con creatinina y albuminuria.' }
];

export default { quiz, flashcards };
