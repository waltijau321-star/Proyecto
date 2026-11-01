// topics/nefropatia-diabetica-hipertensiva/content.js - Modulo 92: Nefropatia diabetica e
// hipertensiva. Cuarto del bloque VI (Nefrologia).
// Fuentes: KDIGO 2022 Diabetes Management in CKD (Kidney Int 2022;102(5S):S1-S127), KDIGO 2021
// Blood Pressure Management in CKD (Kidney Int 2021;99(3S):S1-S87) y el BORRADOR de revision
// publica de la KDIGO 2026 de diabetes y ERC.
// IDEA QUE ORDENA EL TEMA: las dos causas mas frecuentes de enfermedad renal cronica convergen
// aqui, y es donde el tratamiento ha cambiado mas y mas deprisa. En la diabetes tipo 2 con ERC ya
// no hay un farmaco renal: hay CUATRO PILARES, cada uno con su umbral de filtrado y su grado. Y
// en la hipertension el objetivo bajo a 120 de sistolica, pero solo cuenta si la tension se mide
// de una forma que casi nadie usa.
// SOBRE EL BORRADOR DE 2026: es un documento en REVISION PUBLICA, no una guia final. El tema se
// construye sobre las dos guias FINALES (2022 y 2021) y el borrador se trata aparte, en su propia
// ficha y su propia figura, siempre etiquetado como borrador. No se mezcla con lo vigente.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'nefropatia-diabetica-hipertensiva',
  titulo: 'Nefropatía Diabética e Hipertensiva',
  subtitulo: 'Medicina Interna',
  accent: '#7a6a2e'
};

export const definicionText = `<p style="margin:0 0 14px;">Las dos causas mas frecuentes de enfermedad renal cronica convergen en este tema, y es donde el tratamiento ha cambiado <strong>mas y mas deprisa</strong>. En la diabetes tipo 2 con enfermedad renal ya no hay un farmaco renal: hay <strong>cuatro pilares</strong>, y cada uno tiene su propio umbral de filtrado, su propia condicion y su propio grado de recomendacion. Bloqueo del sistema renina-angiotensina, inhibidor del cotransportador sodio-glucosa tipo 2, antagonista NO esteroideo del receptor mineralocorticoide y terapia basada en GLP-1. Saber el orden y los umbrales es casi todo el tema.</p>
<p style="margin:0 0 14px;">Del lado de la hipertension, el objetivo bajo a <strong>menos de 120 mmHg de sistolica</strong>, pero con una condicion que lo cambia todo: solo vale si la tension se midio de forma <strong>ESTANDARIZADA</strong>. La propia guia dice que aplicar ese objetivo a una medida no estandarizada es <strong>potencialmente peligroso</strong>, porque las medidas de pasillo salen habitualmente mas altas, a veces mas bajas, y de forma impredecible en cada paciente: el riesgo es tratar de mas. Y luego estan las reglas de manejo del bloqueo, que son las que mas veces se aplican mal: dosis maxima tolerada, revision a las 2 a 4 semanas, la regla del 30% de la creatinina, y no retirarlo por una hiperpotasemia que se puede manejar de otra forma.</p>
<p style="margin:0 0 14px;">Hay ademas un tercer elemento, y conviene decir que es: KDIGO tiene publicado un <strong>borrador en revision publica de la guia de 2026</strong> que mueve tres cosas importantes y a&#241;ade una cuarta. No es una guia final, de modo que aqui no se mezcla con lo vigente: vive en su propia ficha y su propia figura, etiquetado como borrador, para que se vea hacia donde va la practica sin confundirlo con lo que hoy esta recomendado. Y lo de siempre: la enfermedad renal cronica como tal esta en el modulo 89, los electrolitos en el 90, las glomerulopatias en el 91 y la diabetes como enfermedad en su propio tema. Aqui se enlazan, no se repiten.</p>`;

export const bibliografia = [
  'Kidney Disease: Improving Global Outcomes (KDIGO) Diabetes Work Group. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int. 2022;102(5S):S1-S127.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) Blood Pressure Work Group. KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney Int. 2021;99(3S):S1-S87.',
  'KDIGO 2026 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. BORRADOR para revision publica (public review draft), no es una guia final.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Lo que hay que tener decidido en la primera consulta',
      tituloB: 'Lo que obliga a parar y replantear',
      compensada: 'En el paciente con diabetes tipo 2 y enfermedad renal cronica, la primera consulta deberia terminar con cuatro casillas revisadas, no con una. PRIMERA: &#191;esta con IECA o ARA II, y a la dosis maxima aprobada que tolera? SEGUNDA: &#191;tiene filtrado de 20 o mas? Entonces le corresponde un inhibidor del cotransportador sodio-glucosa tipo 2, y le corresponde por proteccion renal y cardiovascular, no por su glucemia. TERCERA: &#191;filtrado de 25 o mas, potasio normal y albuminuria de 30 mg/g o mas pese a la dosis maxima tolerada de bloqueo? Entonces entra el antagonista no esteroideo del receptor mineralocorticoide. CUARTA: &#191;no alcanza los objetivos glucemicos individualizados con metformina y el inhibidor del cotransportador, o no puede usarlos? Entonces un agonista del receptor de GLP-1 de accion prolongada. Y metformina si el filtrado es de 30 o mas.',
      descompensada: 'Lo que obliga a detenerse. CREATININA QUE SUBE MAS DEL 30% en las 4 semanas siguientes a iniciar o subir el bloqueo: ese es el umbral por encima del cual la guia deja de decir "continuar". AYUNO PROLONGADO, CIRUGIA O ENFERMEDAD CRITICA en quien toma un inhibidor del cotransportador: es razonable suspenderlo, por el riesgo de cetosis. HIPERPOTASEMIA en quien lleva bloqueo: importante, pero es la razon equivocada para retirarlo, porque con frecuencia puede manejarse bajando el potasio en lugar de bajar la dosis. TENSION DE 120 COMO OBJETIVO EN UNA MEDIDA DE PASILLO: la guia lo llama potencialmente peligroso, porque arriesga sobretratar. Y la EXPECTATIVA DE VIDA MUY LIMITADA o la HIPOTENSION POSTURAL SINTOMATICA, en las que es razonable ofrecer un tratamiento antihipertensivo menos intensivo.'
    },
    laboratorio: [
      { prueba: 'Cociente albumina-creatinina en orina', utilidad: 'Es el que define las categorias y, con ellas, las indicaciones. A1: por debajo de 30 mg/g (menos de 3 mg/mmol). A2, moderadamente aumentada: de 30 a 300 mg/g (3 a 30 mg/mmol). A3, gravemente aumentada: por encima de 300 mg/g (mas de 30 mg/mmol). El umbral de 30 mg/g es ademas el que exige el antagonista no esteroideo, y el que usaron como criterio de inclusion los ensayos FIDELIO-DKD y FIGARO-DKD.' },
      { prueba: 'Hemoglobina glucosilada, sabiendo lo que mide mal', utilidad: 'Se recomienda usarla para monitorizar el control glucemico (1C), dos veces al a&#241;o, y hasta cuatro si no se alcanza el objetivo o se cambia el tratamiento. Pero su exactitud y su precision CAEN en la enfermedad renal avanzada (G4-G5), y en dialisis su fiabilidad es baja. La correlacion con la glucemia medida directamente se debilita progresivamente en esos estadios.' },
      { prueba: 'Por que aun asi se sigue usando la glucosilada', utilidad: 'Porque las alternativas son peores: la albumina glucosilada y la fructosamina no aportan ventaja sobre ella y tienen sesgos de ensayo clinicamente relevantes, a la baja y al alza respectivamente, con la hipoalbuminemia, que es comun en la proteinuria, la desnutricion y la dialisis peritoneal. Es decir, la glucosilada es poco fiable Y sigue siendo el mejor biomarcador disponible en la enfermedad renal avanzada.' },
      { prueba: 'Indicador de manejo de glucosa derivado de monitorizacion continua', utilidad: 'Cuando la glucosilada no concuerda con las glucemias medidas directamente o con los sintomas, el indicador derivado de la monitorizacion continua sirve para indexar la glucemia. Es la salida para el paciente en el que la cifra no cuadra con la clinica.' },
      { prueba: 'Potasio serico', utilidad: 'Es la llave del cuarto pilar y el motivo mas frecuente de retirar el tercero. Para el antagonista no esteroideo hay que seleccionar pacientes con potasio consistentemente NORMAL y monitorizarlo con regularidad tras iniciarlo. Y tras iniciar o subir un bloqueo, hay que revisarlo junto con la creatinina y la tension a las 2 a 4 semanas, segun el filtrado y el potasio de partida.' },
      { prueba: 'Creatinina a las 2 a 4 semanas', utilidad: 'No es una revision de rutina: es parte del propio acto de prescribir. La guia pide comprobar tension, creatinina y potasio dentro de las 2 a 4 semanas siguientes a iniciar o aumentar la dosis de un bloqueo del sistema renina-angiotensina.' }
    ],
    no_invasivos: [
      { metodo: 'Medida ESTANDARIZADA de la tension arterial (calculadora disponible)', interpretacion: 'Se recomienda por delante de la medida de consulta rutinaria (1B). Preparacion: paciente sentado y relajado en una silla, con los pies en el suelo y la espalda apoyada, MAS DE 5 MINUTOS; sin cafeina, ejercicio ni tabaco en los 30 minutos previos; vejiga vacia; ni el paciente ni el observador hablan durante el reposo ni durante la medida; sin ropa cubriendo la zona del manguito. Y el detalle que invalida la mayoria de las medidas reales: tomarla con el paciente sentado o tumbado en la CAMILLA de exploracion NO cumple los criterios.', cutoff: 'Mas de 5 minutos de reposo, sin hablar' },
      { metodo: 'Tecnica correcta del manguito', interpretacion: 'Dispositivo validado y calibrado periodicamente. Brazo APOYADO, por ejemplo sobre una mesa. El centro del manguito a la altura de la auricula derecha, que es el punto medio del esternon. Tama&#241;o de manguito correcto, de modo que la camara rodee el 80% del brazo, y anotarlo si se uso uno mayor o menor de lo normal. La calibracion: cada 6 meses en los de pared y cada 2 a 4 semanas en los de mano; los oscilometricos, cada 1 a 2 a&#241;os.', cutoff: 'Manguito que rodee el 80% del brazo' },
      { metodo: 'Medida fuera de consulta', interpretacion: 'Se sugiere que la monitorizacion ambulatoria o la automedida domiciliaria COMPLEMENTEN la medida estandarizada de consulta (2B), no que la sustituyan. El grupo de trabajo fue explicito en el motivo: no encontro evidencia de que se pueda estimar de forma fiable, para un paciente concreto, la tension que se obtendria en condiciones estandarizadas a partir de medidas tomadas en cualquier otro entorno.', cutoff: 'Complementan, no sustituyen' },
      { metodo: 'Los cuatro pilares y sus umbrales (calculadora disponible)', interpretacion: 'BLOQUEO (IECA o ARA II): diabetes, hipertension y albuminuria, a la dosis maxima aprobada tolerada (1B). INHIBIDOR DEL COTRANSPORTADOR SODIO-GLUCOSA TIPO 2: diabetes tipo 2, enfermedad renal cronica y filtrado de 20 o mas (1A, la recomendacion mas fuerte del documento). ANTAGONISTA NO ESTEROIDEO: diabetes tipo 2, filtrado de 25 o mas, potasio normal y albuminuria de 30 mg/g o mas pese a dosis maxima tolerada de bloqueo (2A). AGONISTA DE GLP-1 de accion prolongada: si no se alcanzan los objetivos glucemicos individualizados pese a metformina e inhibidor del cotransportador, o no se pueden usar (1B).', cutoff: 'Filtrado de 20, 25 y 30 segun el pilar' },
      { metodo: 'Indicacion de bloqueo segun albuminuria y diabetes (calculadora disponible)', interpretacion: 'SIN diabetes: con albuminuria gravemente aumentada (A3) se RECOMIENDA (1B); con moderadamente aumentada (A2) se SUGIERE (2C). CON diabetes: se recomienda tanto en A2 como en A3 (1B). Sin albuminuria, con o sin diabetes, puede ser razonable tratarlos con bloqueo, pero la evidencia no demuestra beneficio claro sobre la progresion renal y otros antihipertensivos son igual de apropiados para controlar la tension.', cutoff: 'A2 y A3 con diabetes; A3 sin diabetes' },
      { metodo: 'Objetivo individualizado de hemoglobina glucosilada', interpretacion: 'Se recomienda un objetivo individualizado que va de menos del 6,5% a menos del 8,0% en el paciente con diabetes y enfermedad renal cronica no tratado con dialisis (1C). Es una horquilla, no una cifra: el extremo exigente para quien tiene larga esperanza de vida y poco riesgo de hipoglucemia, y el laxo para lo contrario.', cutoff: 'De <6,5% a <8,0%' }
    ],
    imagen: [
      { modalidad: 'Lo que la imagen NO decide aqui', hallazgos: 'Este es un tema de decisiones farmacologicas y de medida correcta, no de imagen. La ecografia sirve para lo de siempre, descartar causas posrenales y valorar el tama&#241;o renal, pero no distingue una nefropatia diabetica de otra causa.' },
      { modalidad: 'Biopsia renal', hallazgos: 'La guia de 2022 no la recomienda de rutina. El BORRADOR de 2026 a&#241;ade una sugerencia nueva (2D): realizar biopsia renal como prueba diagnostica aceptable y segura para evaluar las causas de enfermedad renal y guiar decisiones de tratamiento cuando sea clinicamente apropiado. Conviene recordar que esa recomendacion todavia es un borrador.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las escalas de este tema responden a tres preguntas distintas. La primera es <strong>que le corresponde</strong> a este paciente: los cuatro pilares, cada uno con su umbral de filtrado y su grado. La segunda es <strong>si la cifra en la que me estoy basando vale</strong>, que en la tension arterial no es una pregunta retorica, porque el objetivo de 120 solo se sostiene sobre una medida estandarizada. Y la tercera es <strong>cuando se toca el bloqueo</strong>, que tiene reglas propias y bastante contraintuitivas. Aparte va lo que el <strong>borrador de 2026</strong> mueve, que se mantiene separado a proposito.`,
    escalas: [
      { nombre: 'Los cuatro pilares de la proteccion renal en diabetes tipo 2 (calculadora disponible)', componentes: 'Filtrado glomerular estimado, potasio serico, albuminuria, dosis de bloqueo alcanzada y objetivos glucemicos.', formula: 'No es una puntuacion: son cuatro indicaciones independientes con umbrales distintos.', interpretacion: 'BLOQUEO con IECA o ARA II, titulado a la dosis maxima aprobada que se tolere (1B). INHIBIDOR DEL COTRANSPORTADOR con filtrado de 20 o mas (1A). ANTAGONISTA NO ESTEROIDEO con filtrado de 25 o mas, potasio normal y albuminuria de 30 mg/g o mas pese a dosis maxima tolerada de bloqueo (2A). METFORMINA con filtrado de 30 o mas (1B). Y AGONISTA DE GLP-1 de accion prolongada si no se alcanzan los objetivos pese a metformina e inhibidor del cotransportador, o no se pueden usar (1B). Lo que hay que llevarse: el antagonista no esteroideo se A&#209;ADE al bloqueo y al inhibidor del cotransportador, no los sustituye.' },
      { nombre: 'Medida estandarizada de la tension (calculadora disponible)', componentes: 'Reposo, estimulantes, vejiga, conversacion, ropa, postura, dispositivo, apoyo del brazo, altura y tama&#241;o del manguito.', formula: 'Se cumplen todos los requisitos o la medida no es estandarizada.', interpretacion: 'Es la escala mas rentable del tema porque decide si el objetivo de 120 puede aplicarse. Si la medida NO es estandarizada, aplicar ese objetivo es potencialmente peligroso: las medidas no estandarizadas dan con frecuencia valores sustancialmente mas altos, y a veces mas bajos, de forma impredecible para cada paciente, de modo que basar el tratamiento en ellas arriesga sobretratar y a veces infratratar.' },
      { nombre: 'Manejo del bloqueo del sistema renina-angiotensina (calculadora disponible)', componentes: 'Porcentaje de ascenso de la creatinina, tiempo transcurrido y potasio serico.', formula: 'La regla del 30% en 4 semanas, y el potasio como problema a resolver, no como motivo de retirada.', interpretacion: 'CONTINUAR el IECA o el ARA II salvo que la creatinina suba MAS DEL 30% en las 4 semanas siguientes a iniciar el tratamiento o a aumentar la dosis. DOSIS: la maxima aprobada que se tolere, porque los beneficios demostrados se obtuvieron en ensayos que usaban esas dosis. REVISION: tension, creatinina y potasio dentro de las 2 a 4 semanas de iniciar o subir. HIPERPOTASEMIA: con frecuencia puede manejarse con medidas para bajar el potasio en lugar de reducir la dosis o suspender el bloqueo. Y una prohibicion tajante: evitar CUALQUIER combinacion de IECA, ARA II e inhibidor directo de la renina (1B).' },
      { nombre: 'Objetivo de tension y de glucosilada', componentes: 'Esperanza de vida, hipotension postural sintomatica, riesgo de hipoglucemia.', formula: 'Dos horquillas, no dos cifras.', interpretacion: 'TENSION: menos de 120 de sistolica cuando se tolere, con medida estandarizada (2B). Es razonable ofrecer un tratamiento menos intensivo a pacientes con esperanza de vida muy limitada o hipotension postural sintomatica. GLUCOSILADA: objetivo individualizado entre menos del 6,5% y menos del 8,0% en quien no esta en dialisis (1C).' },
      { nombre: 'Indicacion de bloqueo segun albuminuria', componentes: 'Categoria de albuminuria (A1, A2, A3) y presencia o no de diabetes.', formula: 'La misma categoria cambia de grado segun haya diabetes o no.', interpretacion: 'CON diabetes, A2 o A3: se recomienda (1B). SIN diabetes, A3: se recomienda (1B). SIN diabetes, A2: se sugiere (2C). Sin albuminuria (A1), con o sin diabetes: puede ser razonable, pero la evidencia no demuestra beneficio claro sobre la progresion renal, estos pacientes tienen menor riesgo de progresar y otros antihipertensivos son igual de apropiados; el argumento a favor seria la proteccion cardiovascular en quien la valore mucho.' },
      { nombre: 'Lo que mueve el borrador de 2026 (no es guia final)', componentes: 'Comparacion entre la guia final de 2022 y el borrador en revision publica de 2026.', formula: 'Tres cambios de posicion y dos a&#241;adidos.', interpretacion: 'ANTAGONISTA NO ESTEROIDEO: sube de 2A a 1A, de sugerencia a recomendacion fuerte. AGONISTA DE GLP-1: sube a 1A y cambia de criterio, pasa de ser rescate glucemico a indicarse por RIESGO (alto riesgo de eventos cardiovasculares o renales mayores, O no alcanzar los objetivos glucemicos). METFORMINA: baja a segunda linea, para quien no alcanza objetivos pese al inhibidor del cotransportador y a la terapia basada en GLP-1, o no puede usarlos. A&#209;ADE: antagonista no esteroideo en diabetes tipo 1 con filtrado de 25 o mas, potasio normal y albuminuria de 200 mg/g o mas (2C), y aspirina a dosis baja en prevencion secundaria (1C). Insistencia necesaria: es un BORRADOR en revision publica.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Los cuatro pilares de la proteccion renal',
      color: '#7a6a2e',
      definicion: 'El conjunto de tratamientos con beneficio renal demostrado en la diabetes tipo 2 con enfermedad renal cronica. Ya no es un farmaco: son cuatro indicaciones independientes, con umbrales distintos y grados distintos, que se suman.',
      criterios_dx: 'Los umbrales, que es lo que hay que memorizar: bloqueo con albuminuria e hipertension; inhibidor del cotransportador con filtrado de 20 o mas; antagonista no esteroideo con filtrado de 25 o mas; metformina con filtrado de 30 o mas.',
      tx_medico: 'BLOQUEO (1B): IECA o ARA II en diabetes, hipertension y albuminuria, titulado a la dosis maxima aprobada que se tolere. INHIBIDOR DEL COTRANSPORTADOR SODIO-GLUCOSA TIPO 2 (1A): en diabetes tipo 2 con enfermedad renal y filtrado de 20 o mas. Es la unica recomendacion 1A del documento, y la indicacion es por proteccion RENAL Y CARDIOVASCULAR, no por la glucemia: se ha demostrado seguro y beneficioso incluso en pacientes con enfermedad renal SIN diabetes tipo 2, y si el paciente ya toma otros hipoglucemiantes, se A&#209;ADE al tratamiento actual.',
      tx_farmacologico: 'ANTAGONISTA NO ESTEROIDEO DEL RECEPTOR MINERALOCORTICOIDE (2A): con beneficio renal o cardiovascular probado, en diabetes tipo 2 con filtrado de 25 o mas, potasio normal y albuminuria de 30 mg/g o mas PESE a la dosis maxima tolerada de bloqueo. Puede a&#209;ADIRSE al bloqueo y al inhibidor del cotransportador. METFORMINA (1B) con filtrado de 30 o mas. AGONISTA DEL RECEPTOR DE GLP-1 de accion prolongada (1B) si no se alcanzan los objetivos glucemicos individualizados pese a metformina e inhibidor del cotransportador, o si no se pueden usar.',
      complementarios: 'Dos precauciones del inhibidor del cotransportador que se olvidan: es razonable SUSPENDERLO durante ayunos prolongados, cirugia o enfermedad critica, por el mayor riesgo de cetosis; y si el paciente tiene riesgo de hipovolemia, conviene considerar BAJAR la dosis de tiazida o de diuretico de asa antes de empezar. El riesgo de hipoglucemia en monoterapia es bajo, porque la glucosuria que induce disminuye segun se normaliza la glucemia, pero sube si se combina con sulfonilureas o insulina.',
      dx_diferencial: 'No confundir los dos tipos de antagonista del receptor mineralocorticoide: el NO esteroideo es el del beneficio renal demostrado en este escenario; el ESTEROIDEO tiene su sitio en la insuficiencia cardiaca, el hiperaldosteronismo y la hipertension refractaria. No son intercambiables.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 89 de Enfermedad renal cronica para la proteccion de fondo y la progresion, a Diabetes mellitus para el control glucemico general, y al Sindrome cardiovascular-renal-metabolico.',
      pronostico: 'Los ensayos FIDELIO-DKD y FIGARO-DKD, que son los que sostienen el antagonista no esteroideo, exigieron para entrar que hubiera albuminuria de 30 mg/g o mas PESE al tratamiento estandar de la epoca, que ya incluia bloqueo. Es decir, el pilar esta pensado para el paciente que sigue albuminurico a pesar de hacerlo todo bien.',
      algoritmo: ['&#191;Esta con IECA o ARA II a dosis maxima tolerada?', '&#191;Filtrado de 20 o mas? Inhibidor del cotransportador, por proteccion y no por glucemia', '&#191;Filtrado de 25 o mas, potasio normal y albuminuria de 30 o mas pese al bloqueo? A&#241;adir antagonista no esteroideo', '&#191;Filtrado de 30 o mas? Metformina', '&#191;Sigue sin objetivos pese a metformina y cotransportador? Agonista de GLP-1', 'Revisar que se han A&#209;ADIDO, no sustituido'],
      figura: 'cuatro-pilares'
    },
    {
      nombre: 'El objetivo de 120 y la medida que casi nadie hace',
      color: '#8c3a34',
      definicion: 'Objetivo de tension arterial sistolica por debajo de 120 mmHg, cuando se tolere, en el adulto con hipertension y enfermedad renal cronica (2B). La condicion que lo acompa&#241;a no es decorativa: usando medida estandarizada de consulta.',
      criterios_dx: 'Que es una medida estandarizada. PREPARACION: paciente relajado, sentado en una silla con los pies en el suelo y la espalda apoyada, mas de 5 minutos; sin cafeina, ejercicio ni tabaco en los 30 minutos previos; vejiga vacia; ni el paciente ni el observador hablan durante el reposo ni durante la medida; sin ropa cubriendo la zona del manguito. Y el criterio que descalifica a la mayoria de las medidas reales: las tomadas con el paciente sentado o tumbado en la CAMILLA de exploracion NO lo cumplen.',
      complementarios: 'TECNICA: dispositivo validado y calibrado; brazo apoyado, por ejemplo sobre una mesa; centro del manguito a la altura de la auricula derecha, el punto medio del esternon; manguito cuya camara rodee el 80% del brazo, anotando si se uso uno mayor o menor de lo normal. Despues: tomar las medidas necesarias, documentarlas con exactitud, PROMEDIARLAS y darle al paciente sus cifras por escrito y de palabra.',
      fisiopatologia: 'Por que importa tanto. Las medidas no estandarizadas dan con frecuencia valores sustancialmente MAS ALTOS, y a veces mas bajos, que las estandarizadas, y lo hacen de forma IMPREDECIBLE para cada paciente concreto. El grupo de trabajo no encontro evidencia de que se pueda estimar de forma fiable, en un paciente dado, la tension que se obtendria en condiciones estandarizadas partiendo de una medida tomada en cualquier otro entorno.',
      dx_diferencial: 'La medida fuera de consulta, ambulatoria o domiciliaria, se sugiere para COMPLEMENTAR la de consulta estandarizada (2B), no para sustituirla. Son informacion adicional sobre patrones, no un atajo para saltarse la estandarizacion.',
      tx_medico: 'Aplicar el objetivo de 120 a una medida no estandarizada es, en palabras de la guia, POTENCIALMENTE PELIGROSO, porque basar las decisiones en esas cifras arriesga sobretratar y a veces infratratar, y en esa situacion la relacion riesgo-beneficio del tratamiento puede no ser favorable.',
      seguimiento_ambulatorio: 'Excepciones razonables al objetivo intensivo: esperanza de vida muy limitada e hipotension postural sintomatica. A DONDE LLEVA: a Hipertension arterial para el manejo general y a Crisis hipertensivas si procede.',
      pronostico: 'Un limite de la evidencia que este tema debe declarar: el ensayo SPRINT, que es el que sostiene el objetivo intensivo, EXCLUYO expresamente a los pacientes con diabetes; y el ACCORD incluyo pocos pacientes con enfermedad renal, la mayoria por albuminuria, de modo que es poco informativo para los estadios G3 a G5.',
      algoritmo: ['Antes de fijar el objetivo, preguntar como se midio', '&#191;Mas de 5 minutos sentado, sin hablar, sin camilla? Si no, no vale', 'Comprobar el tama&#241;o del manguito y la altura', 'Promediar las lecturas, no quedarse con una', 'Con medida estandarizada: objetivo menos de 120 si se tolera', 'Sin ella: no aplicar el objetivo, porque arriesga sobretratar'],
      figura: 'medida-estandarizada'
    },
    {
      nombre: 'Bloqueo del sistema renina-angiotensina: las reglas',
      color: '#4a6b7a',
      definicion: 'Las normas de manejo del IECA o el ARA II, que son el pilar comun a la nefropatia diabetica y a la hipertensiva, y donde mas veces se falla por prudencia mal entendida.',
      tx_medico: 'DOSIS: la maxima aprobada que se tolere, y la guia da el motivo, que no es teorico: los beneficios demostrados se obtuvieron en ensayos que usaban ESAS dosis. Quedarse a medio camino es quedarse sin parte del beneficio.',
      criterios_dx: 'LA REGLA DEL 30%: continuar el IECA o el ARA II salvo que la creatinina serica suba mas del 30% en las 4 semanas siguientes a iniciar el tratamiento o a aumentar la dosis. Es el umbral que convierte un ascenso esperable en un motivo para replantear.',
      seguimiento_hospitalario: 'REVISION OBLIGADA: comprobar tension, creatinina y potasio DENTRO de las 2 a 4 semanas de iniciar o subir la dosis, con el plazo ajustado al filtrado y al potasio de partida. No es una revision de rutina: forma parte del acto de prescribir.',
      complementarios: 'INDICACION SEGUN ALBUMINURIA, que cambia con la diabetes. Con diabetes: recomendado en A2 y en A3 (1B). Sin diabetes: recomendado en A3 (1B) y sugerido en A2 (2C). Sin albuminuria, con o sin diabetes: puede ser razonable, pero la evidencia no demuestra un beneficio claro sobre la progresion renal, estos pacientes progresan menos y otros antihipertensivos sirven igual para la tension; el argumento seria la proteccion cardiovascular en quien la valore mucho.',
      dx_diferencial: 'La prohibicion que no admite matices: evitar CUALQUIER combinacion de IECA, ARA II e inhibidor directo de la renina en el paciente con enfermedad renal cronica, con o sin diabetes (1B). No es una precaucion, es una recomendacion fuerte en contra.',
      tx_farmacologico: 'En el trasplantado renal el orden cambia: se recomienda un calcioantagonista DIHIDROPIRIDINICO o un ARA II como antihipertensivo de primera linea (1C). Conviene notarlo porque es justo lo contrario de lo que se hace en la glomerulopatia proteinurica, donde las dihidropiridinas pueden aumentar la proteinuria.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 91 de Glomerulopatias, que trata el mismo bloqueo desde el lado de la proteinuria y donde un ascenso de creatinina del 10 al 20% se describe como esperable; y al modulo 89 de Enfermedad renal cronica.',
      algoritmo: ['Titular hasta la dosis maxima aprobada tolerada', 'Citar a las 2 a 4 semanas con creatinina, potasio y tension', '&#191;Creatinina ha subido mas del 30% en 4 semanas? Replantear', 'Si subio menos, continuar', '&#191;Hiperpotasemia? Bajar el potasio antes que bajar la dosis', 'Nunca combinar IECA con ARA II o con inhibidor de la renina']
    },
    {
      nombre: 'Hiperpotasemia: la razon equivocada para retirar',
      color: '#9c3a52',
      definicion: 'Elevacion del potasio serico en el paciente que recibe bloqueo del sistema renina-angiotensina o un antagonista del receptor mineralocorticoide. Es el efecto adverso que mas tratamientos con beneficio demostrado hace perder.',
      tx_medico: 'La frase de la guia es explicita: la hiperpotasemia asociada al uso de bloqueo puede con frecuencia manejarse mediante MEDIDAS PARA REDUCIR EL POTASIO, en lugar de disminuir la dosis o suspender el bloqueo. El orden importa: primero se intenta bajar el potasio, y solo despues se toca el farmaco.',
      complementarios: 'Para el antagonista no esteroideo la estrategia es de seleccion y vigilancia, no de reaccion: elegir pacientes con potasio consistentemente NORMAL antes de iniciarlo, y monitorizar el potasio con regularidad despues. Por eso el potasio normal figura en la propia indicacion, junto al filtrado de 25 o mas y la albuminuria de 30 mg/g o mas.',
      dx_diferencial: 'Conviene separar la hiperpotasemia del paciente estable con bloqueo, que es un problema de manejo cronico, de la hiperpotasemia aguda con repercusion, que es una urgencia con su propio protocolo y que no se trata aqui.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 90 de Sodio, potasio y equilibrio acido-base, que desarrolla el tratamiento de la hiperpotasemia entero, incluida la gravedad, el electrocardiograma y las tres acciones. Aqui solo importa la decision de no retirar el bloqueo por reflejo.',
      pronostico: 'Retirar el bloqueo por una hiperpotasemia manejable cuesta el beneficio renal y cardiovascular demostrado de ese farmaco, y ese beneficio no se recupera con nada equivalente.',
      algoritmo: ['Confirmar la cifra y descartar seudohiperpotasemia', 'Revisar dieta, farmacos acompa&#241;antes y acidosis metabolica', 'Aplicar medidas para bajar el potasio', 'Reevaluar antes de tocar la dosis del bloqueo', 'Si se va a iniciar un antagonista no esteroideo, exigir potasio normal de partida', 'Monitorizar el potasio con regularidad tras iniciarlo']
    },
    {
      nombre: 'Control glucemico cuando la glucosilada miente',
      color: '#5c7a3a',
      definicion: 'El problema de monitorizar la glucemia en la enfermedad renal avanzada, donde el biomarcador habitual pierde fiabilidad pero sigue siendo el mejor disponible.',
      criterios_dx: 'Se recomienda usar la hemoglobina glucosilada para monitorizar el control (1C), dos veces al a&#241;o, y hasta cuatro veces si no se alcanza el objetivo o tras un cambio de tratamiento hipoglucemiante.',
      laboratorio: 'La limitacion: la exactitud y la precision de la glucosilada DISMINUYEN en la enfermedad renal avanzada (G4-G5), y especialmente en el paciente en dialisis, en quien su fiabilidad es baja. Las correlaciones de la glucemia medida directamente con la glucosilada, la albumina glucosilada y la fructosamina se debilitan progresivamente en esos estadios.',
      dx_diferencial: 'Y sin embargo la glucosilada sigue siendo el biomarcador de eleccion en la enfermedad renal avanzada, por una razon negativa: la albumina glucosilada y la fructosamina NO aportan ventaja sobre ella y tienen sesgos de ensayo clinicamente relevantes, a la baja y al alza respectivamente, con la hipoalbuminemia, que es frecuente en la proteinuria, la desnutricion y la dialisis peritoneal.',
      complementarios: 'La salida cuando la cifra no cuadra: el indicador de manejo de glucosa derivado de la monitorizacion continua puede usarse para indexar la glucemia en quien tiene una glucosilada discordante con las glucemias medidas o con los sintomas. Y la monitorizacion diaria, continua o capilar, ayuda a prevenir hipoglucemias cuando se usan farmacos que las producen.',
      tx_medico: 'Objetivo individualizado entre menos del 6,5% y menos del 8,0% en quien no esta en dialisis (1C). En quien decide no hacer monitorizacion diaria, la guia orienta a elegir hipoglucemiantes de bajo riesgo de hipoglucemia.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Diabetes mellitus para el control glucemico general y a Cetoacidosis diabetica y estado hiperosmolar para las descompensaciones.',
      algoritmo: ['Pedir glucosilada dos veces al a&#241;o, cuatro si no se alcanza el objetivo', 'En G4-G5 y dialisis, desconfiar de la cifra sin abandonarla', 'No sustituirla por fructosamina ni albumina glucosilada', 'Si no concuerda con la clinica, usar monitorizacion continua', 'Fijar el objetivo entre 6,5% y 8,0% segun el paciente']
    },
    {
      nombre: 'Dieta, sodio y ejercicio: lo que si esta recomendado',
      color: '#3d5a73',
      definicion: 'Las medidas no farmacologicas que tienen recomendacion graduada en las dos guias, y que conviene saber con su cifra porque es lo que las hace aplicables.',
      tx_medico: 'PROTEINAS: se sugiere mantener una ingesta de 0,8 g de proteina por kg de peso y dia en el paciente con diabetes y enfermedad renal cronica no tratado con dialisis (2C). SODIO: se sugiere una ingesta menor de 2 g de sodio al dia, que equivale a menos de 90 mmol de sodio o menos de 5 g de cloruro sodico (2C). La misma cifra aparece en la guia de tension arterial, tambien con grado 2C.',
      complementarios: 'EJERCICIO: se recomienda actividad fisica de intensidad MODERADA durante una duracion acumulada de al menos 150 minutos por semana, o hasta el nivel compatible con la tolerancia cardiovascular y fisica del paciente (1D en la guia de diabetes, 2C en la de tension). La coletilla sobre la tolerancia no es un adorno: hace la recomendacion aplicable al paciente fragil.',
      tx_farmacologico: 'TABACO: se recomienda aconsejar el abandono del tabaco a los pacientes con diabetes y enfermedad renal cronica que lo consumen (1D).',
      dx_diferencial: 'Dos recomendaciones de sistema que suelen pasarse por alto porque no son farmacos: se recomienda implantar un programa estructurado de EDUCACION para el autocuidado (1C), y se sugiere a los responsables institucionales implantar una atencion INTEGRADA y en equipo, centrada en la evaluacion del riesgo y en el empoderamiento del paciente (2B).',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Soporte nutricional y a Obesidad para el abordaje dietetico, y al modulo 89 de Enfermedad renal cronica.',
      algoritmo: ['Proteinas 0,8 g/kg/d si no esta en dialisis', 'Sodio por debajo de 2 g/d, o 5 g de sal', 'Ejercicio moderado 150 minutos semanales, o lo que tolere', 'Aconsejar dejar el tabaco, que tiene recomendacion propia', 'Derivar a un programa estructurado de educacion']
    },
    {
      nombre: 'Cuando NO es una nefropatia diabetica',
      color: '#7a3a6b',
      definicion: 'El problema de atribuir a la diabetes una enfermedad renal que tiene otra causa, que es lo que hace perder diagnosticos tratables en un paciente que ya tiene una explicacion facil.',
      criterios_dx: 'La guia de 2022 no recomienda la biopsia de rutina en este escenario. El BORRADOR de 2026 a&#241;ade una sugerencia nueva (2D): la biopsia renal es una prueba diagnostica aceptable y segura para evaluar las causas de enfermedad renal y guiar las decisiones de tratamiento cuando sea clinicamente apropiado. Conviene decirlo con su etiqueta: es un borrador en revision publica.',
      complementarios: 'Que haria pensar en otra cosa, con lo que este modulo y el 91 dan entre los dos: un sedimento ACTIVO con hematies dismorficos, cilindros hematicos o acantocitos por encima del 5%, que apunta a una glomerulopatia inflamatoria y no a una nefropatia diabetica; una caida del filtrado del 50% o mas en 3 meses o menos, que es una glomerulonefritis rapidamente progresiva; o una proteinuria en rango nefrotico de aparicion brusca.',
      dx_diferencial: 'El diagnostico diferencial completo de la enfermedad glomerular esta en el modulo 91, que incluye la separacion entre sindrome nefrotico y nefritico y los criterios para biopsiar. Aqui lo que importa es el umbral de sospecha: tener diabetes no protege de tener otra cosa.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 91 de Glomerulopatias y sindromes glomerulares, que desarrolla cuando biopsiar y como separar los sindromes; y a Lesion renal aguda si el deterioro es agudo.',
      algoritmo: ['Mirar el sedimento, no solo la albuminuria', '&#191;Hematies dismorficos, cilindros o acantocitos? Pensar en glomerulopatia', '&#191;Caida del 50% en 3 meses o menos? Es rapidamente progresiva', '&#191;Proteinuria nefrotica de aparicion brusca? Replantear', 'Valorar biopsia, que el borrador de 2026 respalda como segura']
    },
    {
      nombre: 'Lo que mueve el borrador de 2026',
      color: '#8a5a2e',
      definicion: 'Comparacion entre la guia KDIGO 2022, que es la vigente, y el borrador en revision publica de la guia de 2026. Se mantiene en una ficha aparte a proposito, para que no se confunda con lo recomendado hoy.',
      criterios_dx: 'Lo primero y mas importante: es un BORRADOR para revision publica, no una guia final. Lo que viene abajo describe hacia donde parece ir la practica, no lo que hoy esta establecido.',
      tx_medico: 'TRES CAMBIOS DE POSICION. Primero, el antagonista NO esteroideo del receptor mineralocorticoide sube de 2A a 1A: de "sugerimos" a "recomendamos", el salto de condicional a fuerte. Segundo, la terapia basada en GLP-1 sube a 1A y, sobre todo, CAMBIA DE CRITERIO: deja de indicarse como rescate cuando no se alcanzan los objetivos glucemicos y pasa a indicarse por RIESGO, en quien tiene alto riesgo de eventos cardiovasculares o renales mayores O no alcanza los objetivos. Tercero, la METFORMINA baja a segunda linea: pasa de recomendarse en todo paciente con filtrado de 30 o mas a reservarse para quien no alcanza objetivos pese al inhibidor del cotransportador y a la terapia basada en GLP-1, o no puede usarlos.',
      tx_farmacologico: 'DOS A&#209;ADIDOS. Antagonista no esteroideo en diabetes tipo 1 (2C): filtrado de 25 o mas, potasio normal y albuminuria de 200 mg/g o mas (20 mg/mmol o mas) con dosis maxima tolerada de bloqueo; observese que el umbral de albuminuria es mas alto que en la tipo 2, donde son 30 mg/g. Y aspirina oral a dosis baja en prevencion SECUNDARIA (1C), en pacientes con enfermedad renal cronica y enfermedad cardiovascular isquemica establecida.',
      complementarios: 'Un detalle de redaccion que no es menor: en 2022 el antagonista no esteroideo se indicaba con albuminuria persistente "DESPITE" (pese a) la dosis maxima tolerada de bloqueo, y en el borrador aparece como "WHILE ON" (estando con) esa dosis. El sentido practico se mantiene, que es que el bloqueo va primero y a dosis plena, pero el enfasis cambia.',
      dx_diferencial: 'Por que importa este cambio concreto en este proyecto: la conducta vieja de la metformina y del agonista de GLP-1 es exactamente la que ya aparecio desfasada en otro material de la app. Si una tarjeta o una pregunta ense&#241;a que la metformina es primera linea sin mas, conviene comprobar contra que edicion se escribio.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de los cuatro pilares de este mismo tema, que recoge lo VIGENTE; y a Diabetes mellitus. Cuando la guia de 2026 se publique en version final, este tema hay que revisarlo entero.',
      pronostico: 'El sentido de los tres cambios apunta en una direccion: los farmacos con proteccion de organo demostrada suben y se indican por RIESGO, mientras el farmaco que solo baja la glucosa baja de posicion.',
      algoritmo: ['Tratar lo vigente (2022) como lo recomendado hoy', 'Leer el borrador como direccion, no como norma', 'Recordar los tres movimientos: nsMRA y GLP-1 suben, metformina baja', 'Vigilar la publicacion de la version final para revisar el tema'],
      figura: 'cambios-2026'
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Las comprobaciones que cambian la conducta en este tema, ordenadas por lo que mas se falla. Casi todas son de proceso y no de monitorizacion continua.',
    parametros: [
      'Antes de fijar un objetivo de tension, preguntar COMO se midio: mas de 5 minutos sentado, sin hablar, con el brazo apoyado y fuera de la camilla, o el objetivo de 120 no se puede aplicar.',
      'El bloqueo va a la dosis maxima aprobada que se tolere, porque los beneficios demostrados se obtuvieron con ESAS dosis.',
      'Citar con creatinina, potasio y tension dentro de las 2 a 4 semanas de iniciar o subir el bloqueo. Forma parte de prescribirlo.',
      'Continuar el IECA o el ARA II salvo que la creatinina suba MAS DEL 30% en 4 semanas.',
      'Ante hiperpotasemia con bloqueo, bajar el potasio antes que bajar la dosis o suspenderlo.',
      'Nunca combinar IECA con ARA II ni con inhibidor directo de la renina: recomendacion fuerte en contra.',
      'Comprobar que los cuatro pilares se han A&#209;ADIDO y no sustituido: el antagonista no esteroideo se suma al bloqueo y al inhibidor del cotransportador.',
      'Suspender el inhibidor del cotransportador en ayuno prolongado, cirugia o enfermedad critica, por el riesgo de cetosis.',
      'Si hay riesgo de hipovolemia, bajar la tiazida o el diuretico de asa ANTES de empezar el inhibidor del cotransportador.',
      'En G4-G5 y en dialisis, desconfiar de la hemoglobina glucosilada sin sustituirla por fructosamina ni albumina glucosilada.',
      'Y la comprobacion de fondo: tener diabetes no protege de tener otra cosa. Mirar el sedimento.'
    ],
    criterios_uci_general: 'Este tema no genera ingresos en cuidados intensivos por si mismo. Lo que si genera son situaciones en las que hay que SUSPENDER tratamiento: la enfermedad critica y la cirugia obligan a retirar el inhibidor del cotransportador por el riesgo de cetosis, y el deterioro agudo de funcion renal obliga a reevaluar el bloqueo.',
    criterios_tips_general: 'No aplica. El equivalente aqui es el umbral del 30% de ascenso de creatinina en 4 semanas, que es la frontera entre continuar y replantear.',
    criterios_trasplante_general: 'Una nota que corresponde a este tema: en el receptor de trasplante renal adulto se recomienda un calcioantagonista DIHIDROPIRIDINICO o un ARA II como antihipertensivo de primera linea (1C). El trasplante como tal es un item del bloque VI que todavia no tiene modulo construido.',
    prevencion: 'La prevencion de este tema son los cuatro pilares aplicados pronto y completos, mas las medidas con recomendacion propia: proteinas 0,8 g/kg/d, sodio por debajo de 2 g/d, ejercicio moderado 150 minutos semanales y abandono del tabaco. A lo que se a&#241;ade una prevencion de proceso que la guia recomienda expresamente y que suele olvidarse: un programa estructurado de educacion para el autocuidado (1C).'
  }
};

export const compCites = {
  'Los cuatro pilares de la proteccion renal': { criterios_dx: [1], tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1], pronostico: [1] },
  'El objetivo de 120 y la medida que casi nadie hace': { definicion: [2], criterios_dx: [2], complementarios: [2], fisiopatologia: [2], dx_diferencial: [2], tx_medico: [2], seguimiento_ambulatorio: [2], pronostico: [2] },
  'Bloqueo del sistema renina-angiotensina: las reglas': { tx_medico: [2], criterios_dx: [2], seguimiento_hospitalario: [2], complementarios: [2], dx_diferencial: [2], tx_farmacologico: [2] },
  'Hiperpotasemia: la razon equivocada para retirar': { tx_medico: [2], complementarios: [1] },
  'Control glucemico cuando la glucosilada miente': { criterios_dx: [1], laboratorio: [1], dx_diferencial: [1], complementarios: [1], tx_medico: [1] },
  'Dieta, sodio y ejercicio: lo que si esta recomendado': { tx_medico: [1, 2], complementarios: [1, 2], tx_farmacologico: [1], dx_diferencial: [1] },
  'Cuando NO es una nefropatia diabetica': { criterios_dx: [1, 3] },
  'Lo que mueve el borrador de 2026': { criterios_dx: [3], tx_medico: [1, 3], tx_farmacologico: [3], complementarios: [1, 3] }
};

export const estigmasTitulo = 'Las cifras que hay que saber de memoria';
export const estigmas = [
  { nombre: 'Filtrado de 20: inhibidor del cotransportador', descripcion: 'Diabetes tipo 2 con enfermedad renal cronica y filtrado de 20 ml/min/1,73 m2 o mas: se RECOMIENDA un inhibidor del cotransportador sodio-glucosa tipo 2. Es la unica recomendacion 1A del documento, y es por proteccion renal y cardiovascular, no por la glucemia.' },
  { nombre: 'Filtrado de 25 y potasio normal: antagonista no esteroideo', descripcion: 'Diabetes tipo 2, filtrado de 25 o mas, potasio serico normal y albuminuria de 30 mg/g o mas pese a la dosis maxima tolerada de bloqueo. Se A&#209;ADE al bloqueo y al inhibidor del cotransportador, no los sustituye (2A).' },
  { nombre: 'Filtrado de 30: metformina', descripcion: 'En la guia vigente de 2022, metformina en diabetes tipo 2 con enfermedad renal y filtrado de 30 o mas (1B). El borrador de 2026 la baja a segunda linea, tras el inhibidor del cotransportador y la terapia basada en GLP-1.' },
  { nombre: 'Mas del 30% en 4 semanas', descripcion: 'Continuar el IECA o el ARA II SALVO que la creatinina suba mas del 30% en las 4 semanas siguientes a iniciarlo o a subir la dosis. Por debajo de ese umbral, se sigue.' },
  { nombre: 'Revision a las 2 a 4 semanas', descripcion: 'Tension, creatinina y potasio dentro de las 2 a 4 semanas de iniciar o aumentar un bloqueo, ajustando el plazo al filtrado y al potasio de partida. No es seguimiento: es parte de la prescripcion.' },
  { nombre: 'Menos de 120, pero solo si la medida es estandarizada', descripcion: 'Objetivo de sistolica por debajo de 120 mmHg cuando se tolere (2B), con medida estandarizada de consulta. Aplicarlo a una medida no estandarizada es potencialmente peligroso porque arriesga sobretratar.' },
  { nombre: 'Mas de 5 minutos sentado y fuera de la camilla', descripcion: 'La medida estandarizada exige mas de 5 minutos de reposo sentado con pies en el suelo y espalda apoyada, sin hablar ni el paciente ni el observador. Tomarla en la camilla de exploracion NO cumple los criterios.' },
  { nombre: '30 y 300 mg/g', descripcion: 'Las fronteras de la albuminuria: A1 por debajo de 30 mg/g, A2 de 30 a 300, A3 por encima de 300. Los 30 mg/g son ademas el umbral de indicacion del antagonista no esteroideo y el criterio de inclusion de FIDELIO-DKD y FIGARO-DKD.' }
];

export const biopsia = {
  indicaciones: [
    'Sospecha de que la enfermedad renal NO es diabetica: sedimento activo, caida rapida del filtrado o proteinuria nefrotica brusca',
    'El borrador de 2026 la sugiere como prueba aceptable y segura para evaluar causas y guiar el tratamiento cuando sea clinicamente apropiado (2D)',
    'Las indicaciones completas de biopsia en enfermedad glomerular estan en el modulo 91'
  ],
  ventajas: [
    'Identifica causas tratables distintas de la diabetes en un paciente que ya tiene una explicacion facil',
    'Permite separar lesiones activas de cronicas y estimar el da&#241;o irreversible',
    'Evita atribuir por inercia a la diabetes un deterioro que tiene otra causa'
  ],
  limitaciones: [
    'La guia vigente de 2022 NO la recomienda de rutina en la nefropatia diabetica',
    'La sugerencia que la respalda explicitamente es todavia un BORRADOR en revision publica',
    'En la mayoria de los pacientes el diagnostico es clinico y la biopsia no cambia la conducta, que son los cuatro pilares'
  ],
  contraindicaciones: [
    'Las habituales del procedimiento percutaneo: hemostasia no corregida e hipertension no controlada',
    'Valorar antes si el resultado va a cambiar algo, dado que el tratamiento de base se aplica igual',
    'No demorar por la biopsia el inicio de los cuatro pilares cuando ya estan indicados'
  ]
};

export const escalaRefs = {
  'Los cuatro pilares de la proteccion renal en diabetes tipo 2 (calculadora disponible)': [1],
  'Medida estandarizada de la tension (calculadora disponible)': [2],
  'Manejo del bloqueo del sistema renina-angiotensina (calculadora disponible)': [2],
  'Objetivo de tension y de glucosilada': [1, 2],
  'Indicacion de bloqueo segun albuminuria': [2],
  'Lo que mueve el borrador de 2026 (no es guia final)': [1, 3]
};

export const escalaCalc = {
  'Los cuatro pilares de la proteccion renal en diabetes tipo 2 (calculadora disponible)': 'pilares-dm2',
  'Medida estandarizada de la tension (calculadora disponible)': 'medida-estandarizada',
  'Manejo del bloqueo del sistema renina-angiotensina (calculadora disponible)': 'manejo-rasi',
  'Indicacion de bloqueo segun albuminuria': 'indicacion-rasi'
};

export const compGroups = [
  { title: 'Lo que hay que poner', items: ['Los cuatro pilares de la proteccion renal', 'Dieta, sodio y ejercicio: lo que si esta recomendado'] },
  { title: 'La cifra sobre la que se decide', items: ['El objetivo de 120 y la medida que casi nadie hace', 'Control glucemico cuando la glucosilada miente'] },
  { title: 'Lo que mas se maneja mal', items: ['Bloqueo del sistema renina-angiotensina: las reglas', 'Hiperpotasemia: la razon equivocada para retirar'] },
  { title: 'Lo que replantea el caso', items: ['Cuando NO es una nefropatia diabetica', 'Lo que mueve el borrador de 2026'] }
];

export const complicacionesIntro = 'Las fichas van en el orden en que se toman las decisiones. Primero lo que hay que PONER, que son los cuatro pilares con sus umbrales y las medidas no farmacologicas que tienen recomendacion propia. Despues la CIFRA sobre la que se decide, porque en este tema las dos cifras de referencia tienen trampa: la tension solo vale si se midio estandarizada, y la hemoglobina glucosilada pierde fiabilidad justo en los pacientes mas enfermos. Luego lo que mas se maneja mal, que es el bloqueo y la hiperpotasemia que hace retirarlo sin motivo suficiente. Y al final lo que replantea el caso: sospechar que no es diabetica, y saber que la guia esta a punto de cambiar.';

export const categories = [
  { id: 'definicion', label: 'Los cuatro pilares' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Decisiones' },
  { id: 'seguimiento', label: 'Vigilancia' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'DIABETES TIPO 2 CON ENFERMEDAD RENAL', color: '#7a6a2e', target: 'definicion' },
  branches: [
    { title: 'Los cuatro pilares', sub: 'Se suman, no se sustituyen', color: '#7a6a2e', target: 'complicaciones', leaves: [
      { title: 'Bloqueo', sub: 'Dosis maxima tolerada &middot; 1B', color: '#4a6b7a', target: 'complicaciones' },
      { title: 'Cotransportador', sub: 'Filtrado 20 o mas &middot; 1A', color: '#2f6a62', target: 'complicaciones' },
      { title: 'No esteroideo', sub: 'Filtrado 25, K normal &middot; 2A', color: '#9c3a52', target: 'complicaciones' },
      { title: 'GLP-1', sub: 'Si no llega a objetivos &middot; 1B', color: '#5c7a3a', target: 'complicaciones' }
    ] },
    { title: 'La tension', sub: 'Menos de 120, si la medida vale', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Medida estandarizada', sub: '5 min, sin hablar, sin camilla', color: '#8c3a34', target: 'clasificacion' }
    ] },
    { title: 'Lo que se maneja mal', sub: 'Retirar el bloqueo de mas', color: '#9c3a52', target: 'complicaciones', leaves: [
      { title: 'Regla del 30%', sub: 'En 4 semanas', color: '#4a6b7a', target: 'complicaciones' },
      { title: 'Hiperpotasemia', sub: 'Bajar el potasio, no la dosis', color: '#9c3a52', target: 'complicaciones' }
    ] },
    { title: 'Lo que viene', sub: 'Borrador 2026, no es final', color: '#8a5a2e', target: 'complicaciones' }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 2], imagen: [1, 3], biopsia: [1, 3] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['cuatro-pilares'];
export const figurasClasificacion = ['medida-estandarizada', 'cambios-2026'];

export const figuras = {
  'cuatro-pilares': {
    titulo: 'Los cuatro pilares, con su umbral y su grado',
    fuente: 'KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int 2022;102(5S):S1-S127.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Pilar</th><th>A quien</th><th>Umbral</th><th>Grado</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">IECA o ARA II</td><td>Diabetes, hipertension y albuminuria</td><td>Dosis maxima aprobada <strong>tolerada</strong></td><td><span class="figure-tag">1B</span></td></tr>
            <tr><td class="figure-org">Inhibidor del cotransportador sodio-glucosa 2</td><td>Diabetes tipo 2 con enfermedad renal cronica</td><td>Filtrado <strong>20 o mas</strong></td><td><span class="figure-tag">1A</span></td></tr>
            <tr><td class="figure-org">Antagonista NO esteroideo del receptor mineralocorticoide</td><td>Diabetes tipo 2, potasio normal, albuminuria &ge;30 mg/g pese al bloqueo</td><td>Filtrado <strong>25 o mas</strong></td><td><span class="figure-tag dys">2A</span></td></tr>
            <tr><td class="figure-org">Metformina</td><td>Diabetes tipo 2 con enfermedad renal cronica</td><td>Filtrado <strong>30 o mas</strong></td><td><span class="figure-tag">1B</span></td></tr>
            <tr><td class="figure-org">Agonista de GLP-1 de accion prolongada</td><td>Si no alcanza objetivos pese a metformina y cotransportador, o no puede usarlos</td><td>&mdash;</td><td><span class="figure-tag">1B</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que esta tabla existe para fijar. La primera: los umbrales de filtrado son <strong>20, 25 y 30</strong>, y no son intercambiables. La segunda: el inhibidor del cotransportador es la <strong>unica recomendacion 1A</strong> del documento, y se indica por proteccion renal y cardiovascular, no por la glucemia; de hecho ha demostrado seguridad y beneficio incluso en enfermedad renal <strong>sin</strong> diabetes tipo 2, y si el paciente ya toma otros hipoglucemiantes, se a&#241;ade al tratamiento. La tercera: el antagonista no esteroideo se <strong>suma</strong> al bloqueo y al inhibidor del cotransportador, no los sustituye, y exige potasio consistentemente normal antes de empezar. Ojo a no confundirlo con el antagonista <strong>esteroideo</strong>, cuyo sitio es la insuficiencia cardiaca, el hiperaldosteronismo y la hipertension refractaria.</div>`
  },
  'medida-estandarizada': {
    titulo: 'Que es una medida estandarizada de la tension',
    fuente: 'KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney Int 2021;99(3S):S1-S87, Figura 2.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Paso</th><th>Lo que exige</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Preparar al paciente</td><td>Sentado y relajado, pies en el suelo y espalda apoyada, <strong>mas de 5 minutos</strong>. Sin cafeina, ejercicio ni tabaco en los 30 minutos previos. Vejiga vacia. Sin ropa sobre la zona del manguito</td></tr>
            <tr><td class="figure-org">Nadie habla</td><td>Ni el paciente ni el observador, durante el reposo <strong>y</strong> durante la medida</td></tr>
            <tr><td class="figure-org">La postura descalifica</td><td><span class="figure-tag fail">Sentado o tumbado en la camilla de exploracion NO cumple los criterios</span></td></tr>
            <tr><td class="figure-org">Tecnica</td><td>Dispositivo validado y calibrado. Brazo <strong>apoyado</strong> sobre una mesa. Centro del manguito a la altura de la auricula derecha, el punto medio del esternon</td></tr>
            <tr><td class="figure-org">Manguito</td><td>Camara que rodee el <strong>80% del brazo</strong>; anotar si se uso uno mayor o menor de lo normal</td></tr>
            <tr><td class="figure-org">Despues</td><td>Tomar las medidas necesarias, documentarlas con exactitud, <strong>promediarlas</strong> y dar al paciente sus cifras de palabra y por escrito</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Por que esto decide el objetivo. Las medidas <strong>no</strong> estandarizadas dan con frecuencia valores sustancialmente mas altos, y a veces mas bajos, que las estandarizadas, y lo hacen de forma <strong>impredecible</strong> en cada paciente; el grupo de trabajo no encontro evidencia de que se pueda estimar la cifra estandarizada a partir de una medida tomada de otra manera. Por eso la guia dice que aplicar el objetivo de <strong>menos de 120</strong> a una medida no estandarizada es <strong>potencialmente peligroso</strong>: arriesga sobretratar, y a veces infratratar. La medida ambulatoria o domiciliaria <strong>complementa</strong> la de consulta, no la sustituye. Y un limite de la evidencia que conviene saber en un tema de diabetes: el ensayo SPRINT, que sostiene el objetivo intensivo, <strong>excluyo a los pacientes diabeticos</strong>.</div>`
  },
  'cambios-2026': {
    titulo: 'Lo vigente y lo que propone el borrador de 2026',
    fuente: 'KDIGO 2022 (guia final) frente al borrador de revision publica de la KDIGO 2026 de diabetes y enfermedad renal cronica. La columna de 2026 NO es una guia final.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>KDIGO 2022 (vigente)</th><th>Borrador 2026 (no final)</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Antagonista no esteroideo</td><td>Se <strong>sugiere</strong> <span class="figure-tag dys">2A</span></td><td>Se <strong>recomienda</strong> <span class="figure-tag">1A</span></td></tr>
            <tr><td class="figure-org">Terapia basada en GLP-1</td><td><span class="figure-tag">1B</span>, como rescate si no se alcanzan objetivos glucemicos pese a metformina y cotransportador</td><td><span class="figure-tag">1A</span>, por <strong>RIESGO</strong>: alto riesgo cardiovascular o renal, <strong>o</strong> no alcanzar objetivos</td></tr>
            <tr><td class="figure-org">Metformina</td><td><span class="figure-tag">1B</span>, con filtrado 30 o mas</td><td><span class="figure-tag">1B</span>, pero en <strong>segunda linea</strong>: tras cotransportador y GLP-1</td></tr>
            <tr><td class="figure-org">No esteroideo en diabetes tipo 1</td><td>&mdash;</td><td><strong>Nuevo</strong> <span class="figure-tag dys">2C</span>: filtrado 25 o mas, potasio normal, albuminuria &ge;200 mg/g</td></tr>
            <tr><td class="figure-org">Aspirina</td><td>&mdash;</td><td><strong>Nuevo</strong> <span class="figure-tag">1C</span>: dosis baja en prevencion <strong>secundaria</strong></td></tr>
            <tr><td class="figure-org">Biopsia renal</td><td>No recomendada de rutina</td><td><strong>Nuevo</strong> <span class="figure-tag dys">2D</span>: prueba aceptable y segura cuando sea clinicamente apropiado</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Advertencia que acompa&#241;a a toda esta columna: el documento de 2026 es un <strong>borrador en revision publica</strong>, no una guia final, y lo vigente sigue siendo la de 2022. Dicho eso, los tres movimientos apuntan todos en la misma direccion: los farmacos con <strong>proteccion de organo</strong> demostrada suben de grado y pasan a indicarse por riesgo, mientras el que solo baja la glucosa retrocede de posicion. Hay ademas un cambio de redaccion pequeno y revelador en el antagonista no esteroideo: de albuminuria persistente <em>pese a</em> la dosis maxima tolerada de bloqueo, a <em>estando con</em> esa dosis.</div>`
  }
};
