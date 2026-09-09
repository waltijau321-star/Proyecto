// topics/estado-de-choque/study.js: Autoevaluacion de estado de choque.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Por que se define el estado de choque?', options: ['Por la hipoperfusion tisular', 'Por la hipotension arterial', 'Por la taquicardia mantenida', 'Por el lactato elevado'], correct: 0, explanation: 'La tension puede estar normal mientras la vasoconstriccion aguanta. La hipotension no es el comienzo del choque sino el momento en que la compensacion se agota, y esperarla es esperar demasiado.', dificultad: 'facil' },
  { q: 'Que es el choque normotenso?', options: ['Un choque ya reanimado', 'Un error de medicion frecuente', 'Hipoperfusion con tension conservada', 'Una fase terminal del choque'], correct: 2, explanation: 'Una proporcion relevante de los pacientes en choque llega con la tension dentro de rango. Es la forma en que este cuadro se escapa, y se detecta mirando la piel, la diuresis y la conciencia.', dificultad: 'intermedio' },
  { q: 'Que parametro tensional se altera primero en la hemorragia?', options: ['La tension sistolica', 'La presion de pulso', 'La tension arterial media', 'La tension diastolica aislada'], correct: 1, explanation: 'La vasoconstriccion eleva la diastolica por el aumento de catecolaminas, de modo que la presion de pulso se estrecha mucho antes de que caiga la sistolica.', dificultad: 'intermedio' },
  { q: 'Hasta que grado de hemorragia se mantiene normal la tension sistolica?', options: ['Hasta el grado I', 'No llega a mantenerse', 'Hasta el grado IV', 'Hasta el grado III'], correct: 3, explanation: 'Solo cae cuando la perdida supera el 30% del volumen sanguineo. Confiar en la sistolica para detectar una hemorragia significativa retrasa el diagnostico de forma sistematica.', dificultad: 'dificil' },
  { q: 'Que significa una hemoglobina normal en las primeras horas de una hemorragia?', options: ['Que el sangrado es de origen venoso', 'Que NO descarta un sangrado importante', 'Que la perdida es menor del 10% del volumen', 'Que hay hemoconcentracion'], correct: 1, explanation: 'Todavia no ha habido tiempo de hemodilucion, de modo que una hemoglobina normal es lo esperable al principio. Tomarla como tranquilizadora es un error clasico y con consecuencias.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varon de 28 a&#241;os traido tras un accidente de moto. Esta consciente y orientado, con un Glasgow de 15. La frecuencia cardiaca es de 112 por minuto, la tension arterial de 118 sobre 92 mmHg, la frecuencia respiratoria de 20 por minuto y la diuresis esta conservada. La hemoglobina de la analitica urgente es de 13 g/dL.',
    steps: [
      { q: 'Que llama la atencion en la tension arterial?', options: ['Que la sistolica esta claramente por debajo', 'Que la media resulta insuficiente', 'Que la presion de pulso esta estrechada', 'Que no se aprecia alteracion relevante'], correct: 2 },
      { q: 'Que grado de hemorragia corresponde?', options: ['Grado I', 'Grado III', 'Grado IV', 'Grado II'], correct: 3 },
      { q: 'Que aporta esa hemoglobina de 13 g/dL?', options: ['No descarta un sangrado importante', 'Descarta una perdida relevante', 'Confirma hemoconcentracion', 'Indica sangrado cronico previo'], correct: 0 }
    ],
    explanation: 'La sistolica de 118 mmHg parece normal, pero la diastolica de 92 deja una PRESION DE PULSO de solo 26 mmHg. Ese estrechamiento es el primer signo tensional de la hemorragia y se debe al ascenso de la diastolica por la vasoconstriccion catecolaminergica. Con taquicardia moderada, presion de pulso estrechada, tension y diuresis todavia conservadas y sin alteracion de la conciencia, el cuadro corresponde a una hemorragia de GRADO II, es decir una perdida del 15 al 30% del volumen sanguineo. Y la hemoglobina de 13 g/dL no aporta tranquilidad ninguna: en las primeras horas todavia no ha habido hemodilucion, de modo que es exactamente lo que cabe esperar en un sangrado agudo importante.'
  },
  { q: 'Que perfil de choque cursa con la piel caliente y bien perfundida?', options: ['El hipovolemico', 'El cardiogenico', 'El distributivo', 'El obstructivo'], correct: 2, explanation: 'El gasto cardiaco esta alto y lo que ha caido son las resistencias. Un paciente rosado y caliente puede estar profundamente hipoperfundido a nivel tisular, con lactato elevado y sin orinar.', dificultad: 'facil' },
  { q: 'Que descarta la presencia de ingurgitacion yugular en un paciente hipotenso?', options: ['El origen hipovolemico', 'El origen cardiogenico', 'El origen obstructivo', 'El origen septico'], correct: 0, explanation: 'Es una exploracion gratuita que separa en segundos el hipovolemico del cardiogenico y del obstructivo, y reorienta por completo el tratamiento. Se omite con enorme frecuencia.', dificultad: 'intermedio' },
  { q: 'Que hallazgo clasico acompa&#241;a al taponamiento cardiaco?', options: ['El soplo de eyeccion aortico', 'El roce pleural inspiratorio', 'La matidez de la percusion apical', 'El pulso paradojico'], correct: 3, explanation: 'Junto con los tonos apagados y la ingurgitacion yugular completa la triada clasica, aunque hoy la ecografia a pie de cama ha desplazado a la exploracion como herramienta diagnostica.', dificultad: 'intermedio' },
  { q: 'Que perfil de choque cursa con el gasto cardiaco ALTO?', options: ['El distributivo', 'El cardiogenico', 'El hipovolemico', 'El obstructivo'], correct: 0, explanation: 'Los otros tres cursan con gasto bajo. Esa es la razon de que la piel este caliente y el relleno capilar sea rapido en su fase inicial, y de que el cuadro enga&#241;e a quien busca un paciente frio.', dificultad: 'intermedio' },
  { q: 'Que sugiere un ventriculo derecho dilatado con el septo aplanado?', options: ['Un taponamiento cardiaco', 'Una embolia pulmonar masiva', 'Un infarto de cara anterior', 'Una hipovolemia grave'], correct: 1, explanation: 'La obstruccion vascular eleva de golpe la poscarga del ventriculo derecho, que se dilata y desplaza el septo, reduciendo el llenado izquierdo. Se ve en segundos con ecografia.', dificultad: 'intermedio' },
  { q: 'Que corresponde hacer ante la sospecha de neumotorax a tension?', options: ['Confirmarlo con radiografia', 'Solicitar tomografia urgente', 'Descomprimir de inmediato', 'Iniciar ventilacion no invasiva'], correct: 2, explanation: 'Es un diagnostico CLINICO y el tratamiento no espera a ninguna imagen: descompresion con aguja seguida de drenaje toracico. Esperar la radiografia puede costar la vida del paciente.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Mujer de 34 a&#241;os que recibio la primera dosis de amoxicilina hace 10 minutos. Presenta urticaria generalizada, edema de labios y lengua, estridor y sensacion de muerte inminente. La tension arterial es de 78 sobre 40 mmHg y la piel esta caliente y enrojecida.',
    steps: [
      { q: 'Que perfil hemodinamico tiene?', options: ['Hipovolemico', 'Distributivo', 'Cardiogenico', 'Obstructivo'], correct: 1 },
      { q: 'Cual es el tratamiento inmediato?', options: ['Adrenalina intramuscular', 'Corticoide intravenoso', 'Antihistaminico intravenoso', 'Broncodilatador inhalado'], correct: 0 },
      { q: 'Que no puede faltar al darle el alta?', options: ['Un ciclo de corticoide oral', 'Una analitica de control', 'Una dieta de exclusion amplia', 'Adrenalina autoinyectable'], correct: 3 }
    ],
    explanation: 'La instauracion en minutos con urticaria, angioedema, estridor e hipotension con piel CALIENTE define una anafilaxia, que es un choque DISTRIBUTIVO. El tratamiento es ADRENALINA INTRAMUSCULAR en la cara anterolateral del muslo, repetible cada 5 a 15 minutos: no tiene sustituto, y los antihistaminicos y los corticoides son coadyuvantes que no deben retrasarla. Tampoco hay que esperar a la triptasa, porque el diagnostico es clinico. Y al alta hay dos cosas que se omiten con enorme frecuencia y que forman parte del tratamiento: prescribir ADRENALINA AUTOINYECTABLE con formacion sobre su uso, y derivar a alergologia con un plan escrito. Antes del alta, ademas, hay que vigilar la reaccion bifasica.'
  },
  { q: 'Que papel tienen los antihistaminicos y los corticoides en la anafilaxia?', options: ['Son el tratamiento de eleccion', 'Sustituyen a la adrenalina si no hay', 'Se dan antes que la adrenalina', 'Son coadyuvantes'], correct: 3, explanation: 'No deben retrasar ni sustituir a la adrenalina intramuscular. Las muertes por anafilaxia se concentran en los casos en que la adrenalina se retrasa o no llega a administrarse.', dificultad: 'facil' },
  { q: 'Que combinacion caracteriza al choque neurogenico?', options: ['Hipotension con taquicardia extrema', 'Hipotension con bradicardia', 'Hipertension con bradicardia', 'Hipotension con piel fria y humeda'], correct: 1, explanation: 'La perdida del tono simpatico por lesion medular alta produce vasodilatacion SIN taquicardia compensadora, y la piel queda caliente y seca. En el politraumatizado hay que descartar antes la hemorragia.', dificultad: 'dificil' },
  { q: 'Que hay que descartar antes de atribuir una hipotension a un origen neurogenico?', options: ['Una hemorragia', 'Una arritmia', 'Una sepsis', 'Una intoxicacion'], correct: 0, explanation: 'En el politraumatizado con lesion medular coexisten con frecuencia ambos mecanismos. Asumir que la hipotension es neurogenica sin buscar sangrado es un error grave y evitable.', dificultad: 'dificil' },
  { q: 'Que corresponde hacer ante la agitacion de un paciente hipoperfundido?', options: ['Administrar una benzodiacepina', 'Pautar un antipsicotico', 'Perfundirlo, no sedarlo', 'Sujetarlo mecanicamente'], correct: 2, explanation: 'La agitacion es hipoperfusion cerebral, no ansiedad. Sedarla baja aun mas la tension y enmascara el deterioro, y es uno de los errores que mas da&#241;o hacen en el paciente en choque.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente ventilado en la unidad de criticos por un sindrome de distres respiratorio. Se deteriora de forma brusca: la tension cae a 70 sobre 45 mmHg, las presiones del respirador suben y las venas yugulares estan ingurgitadas. No se ausculta murmullo vesicular en el hemitorax derecho y la ecografia no muestra deslizamiento pleural en ese lado.',
    steps: [
      { q: 'Que perfil hemodinamico tiene?', options: ['Hipovolemico', 'Distributivo', 'Cardiogenico', 'Obstructivo'], correct: 3 },
      { q: 'Que corresponde hacer en primer lugar?', options: ['Aumentar la noradrenalina', 'Descomprimir el hemitorax', 'Administrar un bolo de volumen', 'Bajar la presion positiva'], correct: 1 },
      { q: 'Hay que esperar la radiografia de confirmacion?', options: ['Si, hay que confirmarlo antes', 'Si, salvo en parada cardiaca', 'No, el diagnostico es clinico', 'Solo si hay ecografia disponible'], correct: 2 }
    ],
    explanation: 'El deterioro brusco de un paciente VENTILADO con hipotension, ingurgitacion yugular, ausencia de murmullo y ausencia de deslizamiento pleural es un neumotorax a tension, es decir un choque OBSTRUCTIVO. El aire a presion colapsa el pulmon, desplaza el mediastino y comprime las venas cavas, impidiendo el retorno venoso, y por eso las yugulares estan ingurgitadas pese a la hipotension. El tratamiento es la DESCOMPRESION inmediata con aguja seguida de drenaje toracico, y no espera a ninguna imagen. Ni la noradrenalina ni el volumen resuelven un obstaculo mecanico: solo compran unos segundos. Regla practica: en todo paciente ventilado que se deteriora de golpe, hay que pensar en neumotorax.'
  },
  { q: 'Que utilidad tiene la presion venosa central para decidir si dar volumen?', options: ['Ninguna: no predice la respuesta', 'Es el mejor predictor disponible', 'Predice bien por debajo de 8 mmHg', 'Predice solo en el ventilado'], correct: 0, explanation: 'Los metaanalisis lo han mostrado de forma consistente. Puede aportar informacion sobre congestion, pero no responde a la pregunta de si el paciente va a aumentar su gasto con un bolo.', dificultad: 'intermedio' },
  { q: 'Cual es la prueba mas util para predecir la respuesta a volumen?', options: ['La presion venosa central', 'El diametro de la vena cava aislado', 'La diuresis de la ultima hora', 'La elevacion pasiva de las piernas'], correct: 3, explanation: 'Equivale a un bolo REVERSIBLE, porque si resulta negativa no ha dejado liquido dentro del paciente. Requiere medir el efecto sobre el gasto, no solo mirar la tension.', dificultad: 'intermedio' },
  { q: 'Que proporcion de los pacientes en choque responde a un bolo de volumen?', options: ['Practicamente todos', 'Alrededor de la mitad', 'Menos de uno de cada diez', 'Solo los hipovolemicos'], correct: 1, explanation: 'Al resto se le a&#241;ade edema pulmonar, intestinal y renal sin ganar nada. Por eso la pregunta util no es cuanto volumen dar sino a quien darselo y cuando parar.', dificultad: 'dificil' },
  { q: 'Cual es el vasopresor de primera linea en el choque?', options: ['La noradrenalina', 'La dopamina', 'La adrenalina', 'La fenilefrina'], correct: 0, explanation: 'Se prefiere a la dopamina, que en un ensayo aleatorizado se asocio a mas arritmias. La adrenalina tiene su indicacion propia en la anafilaxia y en la parada cardiaca.', dificultad: 'facil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Paciente con choque septico de origen urinario. Ha recibido ya 3 litros de cristaloide y mantiene una tension arterial media de 58 mmHg con noradrenalina. Se realiza una elevacion pasiva de las piernas sin que se aprecie cambio en el gasto cardiaco medido por ecografia. En el pulmon aparecen lineas B bilaterales que antes no estaban.',
    steps: [
      { q: 'Es respondedor a volumen?', options: ['No', 'Si, pero poco', 'No se puede saber', 'Si, claramente'], correct: 0 },
      { q: 'Que corresponde hacer con los fluidos?', options: ['Dar otro bolo de 500 mL', 'Parar el volumen', 'Cambiar a coloides', 'Dar volumen mas despacio'], correct: 1 },
      { q: 'Que corresponde hacer entonces?', options: ['Esperar y reevaluar en dos horas', 'Iniciar sedacion profunda', 'Subir el vasopresor y revisar el foco', 'Solicitar cateterismo derecho'], correct: 2 }
    ],
    explanation: 'Una elevacion pasiva de las piernas sin cambio en el gasto significa que el paciente NO es respondedor: mas volumen no va a aumentar el gasto cardiaco y solo se distribuira al intersticio. Las lineas B bilaterales de nueva aparicion lo confirman desde el otro lado, porque son un signo ecografico de sobrecarga y por si solas ya serian una indicacion de parar. Lo que corresponde es ajustar el vasopresor para alcanzar el objetivo de perfusion y, sobre todo, volver sobre la CAUSA: en un choque septico que no responde hay que preguntarse si el foco esta realmente controlado, si el antibiotico es el adecuado y si hay una complicacion nueva. Ninguna dosis de noradrenalina sustituye al control del foco.'
  },
  { q: 'Cuando hay que iniciar la noradrenalina en el choque?', options: ['Tras completar 30 mL/kg de volumen', 'Solo si el lactato supera 4 mmol/L', 'Precozmente, sin esperar el volumen', 'Cuando falle el segundo bolo de volumen'], correct: 2, explanation: 'Iniciarla pronto acorta el tiempo en hipotension y permite dar MENOS fluido, lo que evita parte del edema que produce la reanimacion excesiva.', dificultad: 'intermedio' },
  { q: 'Se puede iniciar la noradrenalina por una via periferica?', options: ['No, hace falta via central', 'Solo en la parada cardiaca', 'Solo si es una via femoral', 'Si, con vigilancia'], correct: 3, explanation: 'Mientras se canaliza una via central, y con una via de buen calibre bien vigilada. Retrasar el vasopresor por no tener acceso central prolonga la hipoperfusion sin ninguna necesidad.', dificultad: 'intermedio' },
  { q: 'Cual es el objetivo habitual de tension arterial media en el choque?', options: ['Alrededor de 65 mmHg', 'Al menos 85 mmHg', 'Por encima de 100 mmHg', 'El que tenia el paciente en casa'], correct: 0, explanation: 'Individualizado segun el basal: en el hipertenso cronico puede hacer falta algo mas. Pero por encima del numero, lo que importa son los objetivos de perfusion.', dificultad: 'intermedio' },
  { q: 'Que objetivo de reanimacion se comparo con el lactato en un ensayo aleatorizado?', options: ['La presion venosa central', 'La saturacion venosa central', 'El relleno capilar', 'La diuresis horaria'], correct: 2, explanation: 'Con resultados al menos comparables, lo que devolvio valor a la exploracion mas simple: se puede repetir cada 30 minutos, no cuesta nada y no depende de ningun aparato.', dificultad: 'dificil' },
  { q: 'Que aspecto del lactato tiene mas valor pronostico?', options: ['El valor maximo alcanzado', 'Su aclaramiento con el tratamiento', 'El valor de la primera medida', 'La diferencia arteriovenosa'], correct: 1, explanation: 'Un lactato que no desciende con la reanimacion obliga a replantear el mecanismo, no a repetir el mismo bolo. Ademas sube por otras causas: adrenergicos, hepatopatia y convulsiones.', dificultad: 'intermedio' },
  { q: 'Que fluido se prefiere para la reanimacion del paciente critico?', options: ['La albumina al 5%', 'El almidon coloidal', 'El suero salino al 0.9%', 'El cristaloide balanceado'], correct: 3, explanation: 'Mostro ventajas frente al suero salino en el paciente critico, sobre todo en desenlaces renales. Los almidones se han abandonado por da&#241;o renal y los coloides no han demostrado superioridad.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Varon de 68 a&#241;os con un infarto agudo de miocardio de cara anterior. La tension arterial es de 82 sobre 60 mmHg, la piel esta fria y sudorosa, hay crepitantes hasta campos medios y las venas yugulares estan ingurgitadas. El ecocardiograma muestra una fraccion de eyeccion del 25% y la coronariografia, enfermedad de tres vasos con oclusion de la descendente anterior.',
    steps: [
      { q: 'Que perfil hemodinamico tiene?', options: ['Hipovolemico', 'Distributivo', 'Obstructivo', 'Cardiogenico'], correct: 3 },
      { q: 'Que medida modifica mas el pronostico?', options: ['El balon de contrapulsacion', 'La revascularizacion urgente', 'La perfusion de dobutamina', 'La ventilacion no invasiva'], correct: 1 },
      { q: 'Que arterias corresponde revascularizar de entrada?', options: ['Los tres vasos en el mismo acto', 'Los dos vasos de mayor calibre', 'Ninguna hasta estabilizarlo', 'Solo la arteria responsable'], correct: 3 }
    ],
    explanation: 'La combinacion de hipoperfusion (piel fria, hipotension) CON congestion (crepitantes, ingurgitacion yugular) es la firma del choque CARDIOGENICO, y la separa del hipovolemico, donde las yugulares estarian planas. Lo que mas modifica el pronostico cuando la causa es isquemica es la REVASCULARIZACION urgente. El balon de contrapulsacion, en cambio, no demostro reducir la mortalidad en el infarto con choque, lo que cambio su papel. Y sobre la extension de la revascularizacion, un ensayo aleatorizado mostro que en el choque con enfermedad de varios vasos conviene tratar de entrada SOLO la arteria responsable, y no revascularizar todo en el mismo acto.'
  },
  { q: 'Que demostro el balon de contrapulsacion intraaortico en el infarto con choque?', options: ['Una reduccion clara de la mortalidad', 'Un beneficio solo en mayores de 75', 'Que no reduce la mortalidad', 'Una mejoria del pronostico a un a&#241;o'], correct: 2, explanation: 'El resultado de ese ensayo cambio su papel, que paso de ser casi automatico a quedar reservado a situaciones concretas dentro de una estrategia de soporte mas amplia.', dificultad: 'dificil' },
  { q: 'Como se revasculariza el infarto con choque y enfermedad de varios vasos?', options: ['Revascularizando todo en un acto', 'Solo la arteria responsable de entrada', 'Difiriendo toda la revascularizacion', 'Con cirugia coronaria de entrada'], correct: 1, explanation: 'Un ensayo aleatorizado comparo ambas estrategias y favorecio tratar de entrada solo la arteria culpable. La revascularizacion del resto se plantea de forma diferida.', dificultad: 'dificil' },
  { q: 'Que tres elementos forman la triada letal del traumatizado?', options: ['Anemia, hipoxia e hipotension', 'Dolor, hipotermia y taquicardia', 'Hipoglucemia, anemia y acidosis', 'Hipotermia, acidosis y coagulopatia'], correct: 3, explanation: 'Cada una empeora a las otras dos, de modo que se retroalimentan. Por eso la reanimacion moderna intenta romper el circulo desde el primer minuto en lugar de corregirlas por separado.', dificultad: 'intermedio' },
  { q: 'Cuando hay que administrar acido tranexamico en el traumatizado que sangra?', options: ['De forma precoz', 'Tras la primera transfusion', 'Solo si falla la hemostasia quirurgica', 'Pasadas las primeras 6 horas'], correct: 0, explanation: 'El beneficio se concentra en la administracion temprana y se pierde, e incluso puede invertirse, cuando se administra tarde. Es una intervencion barata y ampliamente disponible.', dificultad: 'intermedio' },
  { q: 'Que ion hay que vigilar y reponer en la transfusion masiva?', options: ['El sodio', 'El fosforo', 'El calcio', 'El magnesio'], correct: 2, explanation: 'El citrato de los hemoderivados lo quela y produce hipocalcemia, que empeora la coagulopatia y la contractilidad. Es una correccion sencilla que se olvida en medio de la urgencia.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Mujer de 74 a&#241;os con hipertension de largo tiempo, cuyas cifras habituales rondan 165 sobre 90 mmHg. Ingresa por pielonefritis. La tension arterial es de 118 sobre 70 mmHg y la frecuencia cardiaca de 104 por minuto. Esta confusa, no ha orinado en seis horas, tiene la piel moteada en las rodillas y el lactato es de 4.2 mmol/L.',
    steps: [
      { q: 'Esta esta paciente en choque?', options: ['No, la tension es normal', 'No, falta la hipotension', 'Si, pese a la tension', 'Solo si la tension baja mas'], correct: 2 },
      { q: 'Por que enga&#241;a su tension arterial?', options: ['Porque el manguito es peque&#241;o', 'Por su basal hipertensivo', 'Por la taquicardia asociada', 'Por la fiebre concomitante'], correct: 1 },
      { q: 'Que corresponde hacer?', options: ['Reanimar y tratarla como choque septico', 'Repetir la tension en una hora', 'Iniciar solo antibiotico oral', 'Esperar al resultado del urocultivo'], correct: 0 }
    ],
    explanation: 'Esta paciente esta en choque aunque su tension parezca normal: tiene las tres ventanas de hipoperfusion alteradas (piel moteada, oliguria de seis horas y confusion) y un lactato de 4.2 mmol/L. Es el CHOQUE NORMOTENSO, y es la forma en que este cuadro se escapa a diario. Su tension enga&#241;a por dos motivos que se suman: la vasoconstriccion compensadora todavia aguanta, y sobre todo su basal es de 165 sobre 90, de modo que 118 sobre 70 representa una caida de casi 50 mmHg respecto a lo que su organismo considera normal. Lo que corresponde es tratarla como lo que es: hemocultivos, antibiotico precoz, reanimacion con cristaloides balanceados guiada por la respuesta y control del foco urinario.'
  }
];

export const flashcards = [
  { front: 'Como se define el choque', back: 'Por la HIPOPERFUSION tisular, no por la tension arterial.' },
  { front: 'Choque normotenso', back: 'Hipoperfusion con tension conservada. Es como se escapa el diagnostico.' },
  { front: 'Las tres ventanas de hipoperfusion', back: 'Piel (moteado, relleno), ri&#241;on (oliguria) y cerebro (agitacion).' },
  { front: 'Agitacion en el paciente frio', back: 'Es hipoperfusion cerebral. Perfundir, NO sedar.' },
  { front: 'Lactato: que aporta', back: 'El ACLARAMIENTO, no la cifra. Sube tambien por adrenergicos y hepatopatia.' },
  { front: 'La tension del hipertenso cronico', back: '118/70 en quien vive en 165/90 puede ser hipotension grave.' },
  { front: 'Primer signo tensional de la hemorragia', back: 'El estrechamiento de la PRESION DE PULSO, por ascenso de la diastolica.' },
  { front: 'Cuando cae la sistolica en la hemorragia', back: 'En el grado III, con mas del 30% de perdida. Antes, no.' },
  { front: 'Los cuatro grados de hemorragia', back: 'I menos del 15%, II del 15 al 30%, III del 31 al 40%, IV mas del 40%.' },
  { front: 'Hemoglobina inicial normal', back: 'Esperable: aun no hay hemodilucion. NO descarta sangrado importante.' },
  { front: 'Deficit de base', back: 'Se altera antes que la tension. Aportacion de la ultima edicion del manual de trauma.' },
  { front: 'La triada letal', back: 'Hipotermia, acidosis y coagulopatia. Cada una empeora a las otras dos.' },
  { front: 'Acido tranexamico', back: 'PRECOZ en el traumatizado que sangra. Tarde pierde el beneficio.' },
  { front: 'Ion a reponer en la transfusion masiva', back: 'CALCIO: el citrato lo quela y agrava la coagulopatia.' },
  { front: 'Los cuatro perfiles', back: 'Hipovolemico, distributivo, cardiogenico y obstructivo. Y se MEZCLAN.' },
  { front: 'Piel caliente con hipotension', back: 'Distributivo: gasto alto y resistencias bajas.' },
  { front: 'Yugulares ingurgitadas con hipotension', back: 'NO es hipovolemico: cardiogenico u obstructivo.' },
  { front: 'Hipoperfusion CON congestion', back: 'La firma del choque cardiogenico.' },
  { front: 'Choque neurogenico', back: 'Hipotension con BRADICARDIA y piel caliente y seca. Descartar hemorragia antes.' },
  { front: 'Anafilaxia: tratamiento', back: 'ADRENALINA INTRAMUSCULAR en el muslo, repetible cada 5 a 15 minutos.' },
  { front: 'Antihistaminicos y corticoides en la anafilaxia', back: 'Coadyuvantes. No retrasan ni sustituyen a la adrenalina.' },
  { front: 'Al alta tras una anafilaxia', back: 'Adrenalina autoinyectable, plan escrito y derivacion a alergologia.' },
  { front: 'Neumotorax a tension', back: 'Diagnostico CLINICO. Descomprimir sin esperar la radiografia.' },
  { front: 'Paciente ventilado que se deteriora de golpe', back: 'Pensar SIEMPRE en neumotorax.' },
  { front: 'Ventriculo derecho dilatado con septo aplanado', back: 'Embolia pulmonar masiva. Cuidado con el volumen.' },
  { front: 'La presion venosa central para dar volumen', back: 'NO predice la respuesta. No debe usarse para eso.' },
  { front: 'La mejor prueba de respuesta a volumen', back: 'Elevacion pasiva de las piernas: un bolo REVERSIBLE.' },
  { front: 'Cuantos responden a un bolo', back: 'Alrededor de la mitad. Al resto solo se le a&#241;ade edema.' },
  { front: 'Vasopresor de primera linea', back: 'NORADRENALINA. Precoz, y por via periferica si hace falta.' },
  { front: 'Objetivos de reanimacion', back: 'Relleno capilar, diuresis, conciencia y aclaramiento del lactato.' },
  { front: 'Choque cardiogenico isquemico', back: 'Lo que mas cambia el pronostico es la REVASCULARIZACION urgente.' },
  { front: 'Revascularizacion con varios vasos y choque', back: 'Solo la arteria responsable de entrada.' }
];

export default { quiz, flashcards };
