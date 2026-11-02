// topics/estado-de-choque/study.js: Autoevaluacion de estado de choque.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Por que se define el estado de choque?', options: ['Por la hipoperfusión tisular', 'Por la hipotensión arterial', 'Por la taquicardia mantenida', 'Por el lactato elevado'], correct: 0, explanation: 'La tensión puede estar normal mientras la vasoconstricción aguanta. La hipotensión no es el comienzo del choque sino el momento en que la compensación se agota, y esperarla es esperar demasiado.', dificultad: 'facil' },
  { q: 'Que es el choque normotenso?', options: ['Un choque ya reanimado', 'Un error de medición frecuente', 'Hipoperfusión con tensión conservada', 'Una fase terminal del choque'], correct: 2, explanation: 'Una proporción relevante de los pacientes en choque llega con la tensión dentro de rango. Es la forma en que este cuadro se escapa, y se detecta mirando la piel, la diuresis y la conciencia.', dificultad: 'intermedio' },
  { q: 'Que parámetro tensional se altera primero en la hemorragia?', options: ['La tensión sistólica', 'La presión de pulso', 'La tensión arterial media', 'La tensión diastólica aislada'], correct: 1, explanation: 'La vasoconstricción eleva la diastólica por el aumento de catecolaminas, de modo que la presión de pulso se estrecha mucho antes de que caiga la sistólica.', dificultad: 'intermedio' },
  { q: 'Hasta que grado de hemorragia se mantiene normal la tensión sistólica?', options: ['Hasta el grado I', 'No llega a mantenerse', 'Hasta el grado IV', 'Hasta el grado III'], correct: 3, explanation: 'Solo cae cuando la pérdida supera el 30% del volumen sanguíneo. Confiar en la sistólica para detectar una hemorragia significativa retrasa el diagnóstico de forma sistemática.', dificultad: 'dificil' },
  { q: 'Que significa una hemoglobina normal en las primeras horas de una hemorragia?', options: ['Que el sangrado es de origen venoso', 'Que NO descarta un sangrado importante', 'Que la pérdida es menor del 10% del volumen', 'Que hay hemoconcentración'], correct: 1, explanation: 'Todavía no ha habido tiempo de hemodilución, de modo que una hemoglobina normal es lo esperable al principio. Tomarla como tranquilizadora es un error clásico y con consecuencias.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varón de 28 años traído tras un accidente de moto. Esta consciente y orientado, con un Glasgow de 15. La frecuencia cardiaca es de 112 por minuto, la tensión arterial de 118 sobre 92 mmHg, la frecuencia respiratoria de 20 por minuto y la diuresis esta conservada. La hemoglobina de la analítica urgente es de 13 g/dL.',
    steps: [
      { q: 'Que llama la atención en la tensión arterial?', options: ['Que la sistólica esta claramente por debajo', 'Que la media resulta insuficiente', 'Que la presión de pulso esta estrechada', 'Que no se aprecia alteración relevante'], correct: 2 },
      { q: 'Que grado de hemorragia corresponde?', options: ['Grado I', 'Grado III', 'Grado IV', 'Grado II'], correct: 3 },
      { q: 'Que aporta esa hemoglobina de 13 g/dL?', options: ['No descarta un sangrado importante', 'Descarta una pérdida relevante', 'Confirma hemoconcentración', 'Indica sangrado crónico previo'], correct: 0 }
    ],
    explanation: 'La sistólica de 118 mmHg parece normal, pero la diastólica de 92 deja una PRESIÓN DE PULSO de solo 26 mmHg. Ese estrechamiento es el primer signo tensional de la hemorragia y se debe al ascenso de la diastólica por la vasoconstricción catecolaminérgica. Con taquicardia moderada, presión de pulso estrechada, tensión y diuresis todavía conservadas y sin alteración de la conciencia, el cuadro corresponde a una hemorragia de GRADO II, es decir una pérdida del 15 al 30% del volumen sanguíneo. Y la hemoglobina de 13 g/dL no aporta tranquilidad ninguna: en las primeras horas todavía no ha habido hemodilución, de modo que es exactamente lo que cabe esperar en un sangrado agudo importante.'
  },
  { q: 'Que perfil de choque cursa con la piel caliente y bien perfundida?', options: ['El hipovolémico', 'El cardiogénico', 'El distributivo', 'El obstructivo'], correct: 2, explanation: 'El gasto cardiaco esta alto y lo que ha caído son las resistencias. Un paciente rosado y caliente puede estar profundamente hipoperfundido a nivel tisular, con lactato elevado y sin orinar.', dificultad: 'facil' },
  { q: 'Que descarta la presencia de ingurgitación yugular en un paciente hipotenso?', options: ['El origen hipovolémico', 'El origen cardiogénico', 'El origen obstructivo', 'El origen séptico'], correct: 0, explanation: 'Es una exploración gratuita que separa en segundos el hipovolémico del cardiogénico y del obstructivo, y reorienta por completo el tratamiento. Se omite con enorme frecuencia.', dificultad: 'intermedio' },
  { q: 'Que hallazgo clásico acompaña al taponamiento cardiaco?', options: ['El soplo de eyección aórtico', 'El roce pleural inspiratorio', 'La matidez de la percusión apical', 'El pulso paradójico'], correct: 3, explanation: 'Junto con los tonos apagados y la ingurgitación yugular completa la triada clásica, aunque hoy la ecografía a pie de cama ha desplazado a la exploración como herramienta diagnóstica.', dificultad: 'intermedio' },
  { q: 'Que perfil de choque cursa con el gasto cardiaco ALTO?', options: ['El distributivo', 'El cardiogénico', 'El hipovolémico', 'El obstructivo'], correct: 0, explanation: 'Los otros tres cursan con gasto bajo. Esa es la razón de que la piel este caliente y el relleno capilar sea rápido en su fase inicial, y de que el cuadro engañe a quien busca un paciente frío.', dificultad: 'intermedio' },
  { q: 'Que sugiere un ventrículo derecho dilatado con el septo aplanado?', options: ['Un taponamiento cardiaco', 'Una embolia pulmonar masiva', 'Un infarto de cara anterior', 'Una hipovolemia grave'], correct: 1, explanation: 'La obstrucción vascular eleva de golpe la poscarga del ventrículo derecho, que se dilata y desplaza el septo, reduciendo el llenado izquierdo. Se ve en segundos con ecografía.', dificultad: 'intermedio' },
  { q: 'Que corresponde hacer ante la sospecha de neumotórax a tensión?', options: ['Confirmarlo con radiografía', 'Solicitar tomografía urgente', 'Descomprimir de inmediato', 'Iniciar ventilación no invasiva'], correct: 2, explanation: 'Es un diagnóstico CLÍNICO y el tratamiento no espera a ninguna imagen: descompresión con aguja seguida de drenaje torácico. Esperar la radiografía puede costar la vida del paciente.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Mujer de 34 años que recibió la primera dosis de amoxicilina hace 10 minutos. Presenta urticaria generalizada, edema de labios y lengua, estridor y sensación de muerte inminente. La tensión arterial es de 78 sobre 40 mmHg y la piel esta caliente y enrojecida.',
    steps: [
      { q: 'Que perfil hemodinámico tiene?', options: ['Hipovolemico', 'Distributivo', 'Cardiogenico', 'Obstructivo'], correct: 1 },
      { q: 'Cual es el tratamiento inmediato?', options: ['Adrenalina intramuscular', 'Corticoide intravenoso', 'Antihistamínico intravenoso', 'Broncodilatador inhalado'], correct: 0 },
      { q: 'Que no puede faltar al darle el alta?', options: ['Un ciclo de corticoide oral', 'Una analítica de control', 'Una dieta de exclusión amplia', 'Adrenalina autoinyectable'], correct: 3 }
    ],
    explanation: 'La instauración en minutos con urticaria, angioedema, estridor e hipotensión con piel CALIENTE define una anafilaxia, que es un choque DISTRIBUTIVO. El tratamiento es ADRENALINA INTRAMUSCULAR en la cara anterolateral del muslo, repetible cada 5 a 15 minutos: no tiene sustituto, y los antihistamínicos y los corticoides son coadyuvantes que no deben retrasarla. Tampoco hay que esperar a la triptasa, porque el diagnóstico es clínico. Y al alta hay dos cosas que se omiten con enorme frecuencia y que forman parte del tratamiento: prescribir ADRENALINA AUTOINYECTABLE con formación sobre su uso, y derivar a alergologia con un plan escrito. Antes del alta, además, hay que vigilar la reacción bifásica.'
  },
  { q: 'Que papel tienen los antihistamínicos y los corticoides en la anafilaxia?', options: ['Son el tratamiento de elección', 'Sustituyen a la adrenalina si no hay', 'Se dan antes que la adrenalina', 'Son coadyuvantes'], correct: 3, explanation: 'No deben retrasar ni sustituir a la adrenalina intramuscular. Las muertes por anafilaxia se concentran en los casos en que la adrenalina se retrasa o no llega a administrarse.', dificultad: 'facil' },
  { q: 'Que combinación caracteriza al choque neurogenico?', options: ['Hipotensión con taquicardia extrema', 'Hipotensión con bradicardia', 'Hipertensión con bradicardia', 'Hipotensión con piel fría y húmeda'], correct: 1, explanation: 'La pérdida del tono simpático por lesión medular alta produce vasodilatación SIN taquicardia compensadora, y la piel queda caliente y seca. En el politraumatizado hay que descartar antes la hemorragia.', dificultad: 'dificil' },
  { q: 'Que hay que descartar antes de atribuir una hipotensión a un origen neurogenico?', options: ['Una hemorragia', 'Una arritmia', 'Una sepsis', 'Una intoxicación'], correct: 0, explanation: 'En el politraumatizado con lesión medular coexisten con frecuencia ambos mecanismos. Asumir que la hipotensión es neurogénica sin buscar sangrado es un error grave y evitable.', dificultad: 'dificil' },
  { q: 'Que corresponde hacer ante la agitación de un paciente hipoperfundido?', options: ['Administrar una benzodiacepina', 'Pautar un antipsicótico', 'Perfundirlo, no sedarlo', 'Sujetarlo mecánicamente'], correct: 2, explanation: 'La agitación es hipoperfusión cerebral, no ansiedad. Sedarla baja aun más la tensión y enmascara el deterioro, y es uno de los errores que más daño hacen en el paciente en choque.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Paciente ventilado en la unidad de críticos por un síndrome de distres respiratorio. Se deteriora de forma brusca: la tensión cae a 70 sobre 45 mmHg, las presiones del respirador suben y las venas yugulares están ingurgitadas. No se ausculta murmullo vesicular en el hemitórax derecho y la ecografía no muestra deslizamiento pleural en ese lado.',
    steps: [
      { q: 'Que perfil hemodinámico tiene?', options: ['Hipovolemico', 'Distributivo', 'Cardiogenico', 'Obstructivo'], correct: 3 },
      { q: 'Que corresponde hacer en primer lugar?', options: ['Aumentar la noradrenalina', 'Descomprimir el hemitórax', 'Administrar un bolo de volumen', 'Bajar la presión positiva'], correct: 1 },
      { q: 'Hay que esperar la radiografía de confirmación?', options: ['Si, hay que confirmarlo antes', 'Si, salvo en parada cardiaca', 'No, el diagnóstico es clínico', 'Solo si hay ecografía disponible'], correct: 2 }
    ],
    explanation: 'El deterioro brusco de un paciente VENTILADO con hipotensión, ingurgitación yugular, ausencia de murmullo y ausencia de deslizamiento pleural es un neumotórax a tensión, es decir un choque OBSTRUCTIVO. El aire a presión colapsa el pulmón, desplaza el mediastino y comprime las venas cavas, impidiendo el retorno venoso, y por eso las yugulares están ingurgitadas pese a la hipotensión. El tratamiento es la DESCOMPRESIÓN inmediata con aguja seguida de drenaje torácico, y no espera a ninguna imagen. Ni la noradrenalina ni el volumen resuelven un obstáculo mecánico: solo compran unos segundos. Regla práctica: en todo paciente ventilado que se deteriora de golpe, hay que pensar en neumotórax.'
  },
  { q: 'Que utilidad tiene la presión venosa central para decidir si dar volumen?', options: ['Ninguna: no predice la respuesta', 'Es el mejor predictor disponible', 'Predice bien por debajo de 8 mmHg', 'Predice solo en el ventilado'], correct: 0, explanation: 'Los metaanálisis lo han mostrado de forma consistente. Puede aportar información sobre congestión, pero no responde a la pregunta de si el paciente va a aumentar su gasto con un bolo.', dificultad: 'intermedio' },
  { q: 'Cual es la prueba más útil para predecir la respuesta a volumen?', options: ['La presión venosa central', 'El diámetro de la vena cava aislado', 'La diuresis de la última hora', 'La elevación pasiva de las piernas'], correct: 3, explanation: 'Equivale a un bolo REVERSIBLE, porque si resulta negativa no ha dejado líquido dentro del paciente. Requiere medir el efecto sobre el gasto, no solo mirar la tensión.', dificultad: 'intermedio' },
  { q: 'Que proporción de los pacientes en choque responde a un bolo de volumen?', options: ['Prácticamente todos', 'Alrededor de la mitad', 'Menos de uno de cada diez', 'Solo los hipovolémicos'], correct: 1, explanation: 'Al resto se le añade edema pulmonar, intestinal y renal sin ganar nada. Por eso la pregunta útil no es cuanto volumen dar sino a quien darselo y cuando parar.', dificultad: 'dificil' },
  { q: 'Cual es el vasopresor de primera línea en el choque?', options: ['La noradrenalina', 'La dopamina', 'La adrenalina', 'La fenilefrina'], correct: 0, explanation: 'Se prefiere a la dopamina, que en un ensayo aleatorizado se asoció a más arritmias. La adrenalina tiene su indicación propia en la anafilaxia y en la parada cardiaca.', dificultad: 'facil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Paciente con choque séptico de origen urinario. Ha recibido ya 3 litros de cristaloide y mantiene una tensión arterial media de 58 mmHg con noradrenalina. Se realiza una elevación pasiva de las piernas sin que se aprecie cambio en el gasto cardiaco medido por ecografía. En el pulmón aparecen líneas B bilaterales que antes no estaban.',
    steps: [
      { q: 'Es respondedor a volumen?', options: ['No', 'Si, pero poco', 'No se puede saber', 'Si, claramente'], correct: 0 },
      { q: 'Que corresponde hacer con los fluidos?', options: ['Dar otro bolo de 500 mL', 'Parar el volumen', 'Cambiar a coloides', 'Dar volumen más despacio'], correct: 1 },
      { q: 'Que corresponde hacer entonces?', options: ['Esperar y reevaluar en dos horas', 'Iniciar sedación profunda', 'Subir el vasopresor y revisar el foco', 'Solicitar cateterismo derecho'], correct: 2 }
    ],
    explanation: 'Una elevación pasiva de las piernas sin cambio en el gasto significa que el paciente NO es respondedor: más volumen no va a aumentar el gasto cardiaco y solo se distribuira al intersticio. Las líneas B bilaterales de nueva aparición lo confirman desde el otro lado, porque son un signo ecográfico de sobrecarga y por si solas ya serían una indicación de parar. Lo que corresponde es ajustar el vasopresor para alcanzar el objetivo de perfusión y, sobre todo, volver sobre la CAUSA: en un choque séptico que no responde hay que preguntarse si el foco esta realmente controlado, si el antibiótico es el adecuado y si hay una complicación nueva. Ninguna dosis de noradrenalina sustituye al control del foco.'
  },
  { q: 'Cuando hay que iniciar la noradrenalina en el choque?', options: ['Tras completar 30 mL/kg de volumen', 'Solo si el lactato supera 4 mmol/L', 'Precozmente, sin esperar el volumen', 'Cuando falle el segundo bolo de volumen'], correct: 2, explanation: 'Iniciarla pronto acorta el tiempo en hipotensión y permite dar MENOS fluido, lo que evita parte del edema que produce la reanimación excesiva.', dificultad: 'intermedio' },
  { q: 'Se puede iniciar la noradrenalina por una via periférica?', options: ['No, hace falta via central', 'Solo en la parada cardiaca', 'Solo si es una via femoral', 'Si, con vigilancia'], correct: 3, explanation: 'Mientras se canaliza una via central, y con una via de buen calibre bien vigilada. Retrasar el vasopresor por no tener acceso central prolonga la hipoperfusión sin ninguna necesidad.', dificultad: 'intermedio' },
  { q: 'Cual es el objetivo habitual de tensión arterial media en el choque?', options: ['Alrededor de 65 mmHg', 'Al menos 85 mmHg', 'Por encima de 100 mmHg', 'El que tenia el paciente en casa'], correct: 0, explanation: 'Individualizado según el basal: en el hipertenso crónico puede hacer falta algo más. Pero por encima del número, lo que importa son los objetivos de perfusión.', dificultad: 'intermedio' },
  { q: 'Que objetivo de reanimación se comparo con el lactato en un ensayo aleatorizado?', options: ['La presión venosa central', 'La saturación venosa central', 'El relleno capilar', 'La diuresis horaria'], correct: 2, explanation: 'Con resultados al menos comparables, lo que devolvio valor a la exploración más simple: se puede repetir cada 30 minutos, no cuesta nada y no depende de ningún aparato.', dificultad: 'dificil' },
  { q: 'Que aspecto del lactato tiene más valor pronóstico?', options: ['El valor máximo alcanzado', 'Su aclaramiento con el tratamiento', 'El valor de la primera medida', 'La diferencia arteriovenosa'], correct: 1, explanation: 'Un lactato que no desciende con la reanimación obliga a replantear el mecanismo, no a repetir el mismo bolo. Además sube por otras causas: adrenérgicos, hepatopatía y convulsiones.', dificultad: 'intermedio' },
  { q: 'Que fluido se prefiere para la reanimación del paciente crítico?', options: ['La albúmina al 5%', 'El almidón coloidal', 'El suero salino al 0.9%', 'El cristaloide balanceado'], correct: 3, explanation: 'Mostró ventajas frente al suero salino en el paciente crítico, sobre todo en desenlaces renales. Los almidones se han abandonado por daño renal y los coloides no han demostrado superioridad.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Varón de 68 años con un infarto agudo de miocardio de cara anterior. La tensión arterial es de 82 sobre 60 mmHg, la piel esta fría y sudorosa, hay crepitantes hasta campos medios y las venas yugulares están ingurgitadas. El ecocardiograma muestra una fracción de eyección del 25% y la coronariografía, enfermedad de tres vasos con oclusión de la descendente anterior.',
    steps: [
      { q: 'Que perfil hemodinámico tiene?', options: ['Hipovolemico', 'Distributivo', 'Obstructivo', 'Cardiogenico'], correct: 3 },
      { q: 'Que medida modifica más el pronóstico?', options: ['El balón de contrapulsación', 'La revascularización urgente', 'La perfusión de dobutamina', 'La ventilación no invasiva'], correct: 1 },
      { q: 'Que arterias corresponde revascularizar de entrada?', options: ['Los tres vasos en el mismo acto', 'Los dos vasos de mayor calibre', 'Ninguna hasta estabilizarlo', 'Solo la arteria responsable'], correct: 3 }
    ],
    explanation: 'La combinación de hipoperfusión (piel fría, hipotensión) CON congestión (crepitantes, ingurgitación yugular) es la firma del choque CARDIOGÉNICO, y la separa del hipovolémico, donde las yugulares estarian planas. Lo que más modifica el pronóstico cuando la causa es isquémica es la REVASCULARIZACIÓN urgente. El balón de contrapulsación, en cambio, no demostró reducir la mortalidad en el infarto con choque, lo que cambio su papel. Y sobre la extensión de la revascularización, un ensayo aleatorizado mostró que en el choque con enfermedad de varios vasos conviene tratar de entrada SOLO la arteria responsable, y no revascularizar todo en el mismo acto.'
  },
  { q: 'Que demostró el balón de contrapulsación intraaórtico en el infarto con choque?', options: ['Una reducción clara de la mortalidad', 'Un beneficio solo en mayores de 75', 'Que no reduce la mortalidad', 'Una mejoría del pronóstico a un año'], correct: 2, explanation: 'El resultado de ese ensayo cambio su papel, que paso de ser casi automático a quedar reservado a situaciones concretas dentro de una estrategia de soporte más amplia.', dificultad: 'dificil' },
  { q: 'Como se revasculariza el infarto con choque y enfermedad de varios vasos?', options: ['Revascularizando todo en un acto', 'Solo la arteria responsable de entrada', 'Difiriendo toda la revascularización', 'Con cirugía coronaria de entrada'], correct: 1, explanation: 'Un ensayo aleatorizado comparo ambas estrategias y favorecio tratar de entrada solo la arteria culpable. La revascularización del resto se plantea de forma diferida.', dificultad: 'dificil' },
  { q: 'Que tres elementos forman la triada letal del traumatizado?', options: ['Anemia, hipoxia e hipotensión', 'Dolor, hipotermia y taquicardia', 'Hipoglucemia, anemia y acidosis', 'Hipotermia, acidosis y coagulopatía'], correct: 3, explanation: 'Cada una empeora a las otras dos, de modo que se retroalimentan. Por eso la reanimación moderna intenta romper el círculo desde el primer minuto en lugar de corregirlas por separado.', dificultad: 'intermedio' },
  { q: 'Cuando hay que administrar ácido tranexámico en el traumatizado que sangra?', options: ['De forma precoz', 'Tras la primera transfusión', 'Solo si falla la hemostasia quirúrgica', 'Pasadas las primeras 6 horas'], correct: 0, explanation: 'El beneficio se concentra en la administración temprana y se pierde, e incluso puede invertirse, cuando se administra tarde. Es una intervención barata y ampliamente disponible.', dificultad: 'intermedio' },
  { q: 'Que ion hay que vigilar y reponer en la transfusión masiva?', options: ['El sodio', 'El fósforo', 'El calcio', 'El magnesio'], correct: 2, explanation: 'El citrato de los hemoderivados lo quela y produce hipocalcemia, que empeora la coagulopatía y la contractilidad. Es una corrección sencilla que se olvida en medio de la urgencia.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Mujer de 74 años con hipertensión de largo tiempo, cuyas cifras habituales rondan 165 sobre 90 mmHg. Ingresa por pielonefritis. La tensión arterial es de 118 sobre 70 mmHg y la frecuencia cardiaca de 104 por minuto. Esta confusa, no ha orinado en seis horas, tiene la piel moteada en las rodillas y el lactato es de 4.2 mmol/L.',
    steps: [
      { q: 'Esta esta paciente en choque?', options: ['No, la tensión es normal', 'No, falta la hipotensión', 'Si, pese a la tensión', 'Solo si la tensión baja más'], correct: 2 },
      { q: 'Por que engaña su tensión arterial?', options: ['Porque el manguito es pequeño', 'Por su basal hipertensivo', 'Por la taquicardia asociada', 'Por la fiebre concomitante'], correct: 1 },
      { q: 'Que corresponde hacer?', options: ['Reanimar y tratarla como choque séptico', 'Repetir la tensión en una hora', 'Iniciar solo antibiótico oral', 'Esperar al resultado del urocultivo'], correct: 0 }
    ],
    explanation: 'Esta paciente esta en choque aunque su tensión parezca normal: tiene las tres ventanas de hipoperfusión alteradas (piel moteada, oliguria de seis horas y confusión) y un lactato de 4.2 mmol/L. Es el CHOQUE NORMOTENSO, y es la forma en que este cuadro se escapa a diario. Su tensión engaña por dos motivos que se suman: la vasoconstricción compensadora todavía aguanta, y sobre todo su basal es de 165 sobre 90, de modo que 118 sobre 70 representa una caída de casi 50 mmHg respecto a lo que su organismo considera normal. Lo que corresponde es tratarla como lo que es: hemocultivos, antibiótico precoz, reanimación con cristaloides balanceados guiada por la respuesta y control del foco urinario.'
  }
];

export const flashcards = [
  { front: 'Como se define el choque', back: 'Por la HIPOPERFUSIÓN tisular, no por la tensión arterial.' },
  { front: 'Choque normotenso', back: 'Hipoperfusión con tensión conservada. Es como se escapa el diagnóstico.' },
  { front: 'Las tres ventanas de hipoperfusión', back: 'Piel (moteado, relleno), riñón (oliguria) y cerebro (agitación).' },
  { front: 'Agitación en el paciente frío', back: 'Es hipoperfusión cerebral. Perfundir, NO sedar.' },
  { front: 'Lactato: que aporta', back: 'El ACLARAMIENTO, no la cifra. Sube también por adrenérgicos y hepatopatía.' },
  { front: 'La tensión del hipertenso crónico', back: '118/70 en quien vive en 165/90 puede ser hipotensión grave.' },
  { front: 'Primer signo tensional de la hemorragia', back: 'El estrechamiento de la PRESIÓN DE PULSO, por ascenso de la diastólica.' },
  { front: 'Cuando cae la sistólica en la hemorragia', back: 'En el grado III, con más del 30% de pérdida. Antes, no.' },
  { front: 'Los cuatro grados de hemorragia', back: 'I menos del 15%, II del 15 al 30%, III del 31 al 40%, IV más del 40%.' },
  { front: 'Hemoglobina inicial normal', back: 'Esperable: aun no hay hemodilución. NO descarta sangrado importante.' },
  { front: 'Déficit de base', back: 'Se altera antes que la tensión. Aportacion de la última edicion del manual de trauma.' },
  { front: 'La triada letal', back: 'Hipotermia, acidosis y coagulopatía. Cada una empeora a las otras dos.' },
  { front: 'Ácido tranexámico', back: 'PRECOZ en el traumatizado que sangra. Tarde pierde el beneficio.' },
  { front: 'Ion a reponer en la transfusión masiva', back: 'CALCIO: el citrato lo quela y agrava la coagulopatía.' },
  { front: 'Los cuatro perfiles', back: 'Hipovolémico, distributivo, cardiogénico y obstructivo. Y se MEZCLAN.' },
  { front: 'Piel caliente con hipotensión', back: 'Distributivo: gasto alto y resistencias bajas.' },
  { front: 'Yugulares ingurgitadas con hipotensión', back: 'NO es hipovolémico: cardiogénico u obstructivo.' },
  { front: 'Hipoperfusión CON congestión', back: 'La firma del choque cardiogénico.' },
  { front: 'Choque neurogenico', back: 'Hipotensión con BRADICARDIA y piel caliente y seca. Descartar hemorragia antes.' },
  { front: 'Anafilaxia: tratamiento', back: 'ADRENALINA INTRAMUSCULAR en el muslo, repetible cada 5 a 15 minutos.' },
  { front: 'Antihistamínicos y corticoides en la anafilaxia', back: 'Coadyuvantes. No retrasan ni sustituyen a la adrenalina.' },
  { front: 'Al alta tras una anafilaxia', back: 'Adrenalina autoinyectable, plan escrito y derivación a alergologia.' },
  { front: 'Neumotórax a tensión', back: 'Diagnóstico CLÍNICO. Descomprimir sin esperar la radiografía.' },
  { front: 'Paciente ventilado que se deteriora de golpe', back: 'Pensar SIEMPRE en neumotórax.' },
  { front: 'Ventrículo derecho dilatado con septo aplanado', back: 'Embolia pulmonar masiva. Cuidado con el volumen.' },
  { front: 'La presión venosa central para dar volumen', back: 'NO predice la respuesta. No debe usarse para eso.' },
  { front: 'La mejor prueba de respuesta a volumen', back: 'Elevación pasiva de las piernas: un bolo REVERSIBLE.' },
  { front: 'Cuantos responden a un bolo', back: 'Alrededor de la mitad. Al resto solo se le añade edema.' },
  { front: 'Vasopresor de primera línea', back: 'NORADRENALINA. Precoz, y por via periférica si hace falta.' },
  { front: 'Objetivos de reanimación', back: 'Relleno capilar, diuresis, conciencia y aclaramiento del lactato.' },
  { front: 'Choque cardiogénico isquémico', back: 'Lo que más cambia el pronóstico es la REVASCULARIZACIÓN urgente.' },
  { front: 'Revascularización con varios vasos y choque', back: 'Solo la arteria responsable de entrada.' }
];

export default { quiz, flashcards };
