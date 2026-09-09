// topics/vertigo-sindrome-vestibular/study.js: Autoevaluacion de vertigo y sindrome vestibular.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Que pregunta ha demostrado NO discriminar en el paciente con mareo?', options: ['Como es la sensacion', 'Cuanto dura el episodio', 'Que lo desencadena', 'Que farmacos toma'], correct: 0, explanation: 'Los pacientes cambian de respuesta al repreguntar, y describir el mareo como giratorio o como inestabilidad no separa una neuritis de un infarto cerebeloso. El enfoque moderno cambia la pregunta.', dificultad: 'facil' },
  { q: 'Sobre que dos ejes se clasifica hoy el mareo?', options: ['Intensidad y frecuencia', 'Edad y riesgo vascular', 'Tiempo y desencadenante', 'Audicion y equilibrio'], correct: 2, explanation: 'De ahi salen tres sindromes con tres exploraciones distintas: agudo continuo, episodico espontaneo y episodico provocado. Antes de todo eso hay que descartar el mareo sintomatico de una enfermedad general.', dificultad: 'facil' },
  { q: 'Que define al sindrome vestibular agudo?', options: ['Crisis breves y repetidas', 'Vertigo continuo de dias', 'Vertigo con hipoacusia', 'Mareo al ponerse de pie'], correct: 1, explanation: 'Se acompa&#241;a de nauseas, nistagmo, intolerancia al movimiento cefalico e inestabilidad. Su unica pregunta relevante es si el origen es una neuritis o un ictus de fosa posterior.', dificultad: 'intermedio' },
  { q: 'En que escenario esta validado el HINTS?', options: ['En cualquier mareo agudo', 'En el vertigo posicional', 'En el mareo del anciano', 'En el vertigo continuo con nistagmo'], correct: 3, explanation: 'Fuera de ese escenario no ha sido validado y su resultado no significa nada. Aplicarlo a un mareo episodico o a un paciente sin nistagmo puede tranquilizar en falso, que es el peor desenlace posible.', dificultad: 'intermedio' },
  { q: 'Que significa un impulso cefalico NORMAL en un paciente con vertigo continuo?', options: ['Que la lesion es periferica', 'Que apunta a origen central', 'Que la exploracion fue mal hecha', 'Que el vertigo ya esta cediendo'], correct: 1, explanation: 'Es el hallazgo mas contraintuitivo del tema. Si el reflejo vestibuloocular esta intacto, el nervio funciona, y sin embargo el paciente lleva dias mareado: eso apunta al cerebro.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varon de 71 a&#241;os con hipertension y diabetes que lleva dos dias con vertigo continuo, nauseas y vomitos. En la exploracion, la prueba del impulso cefalico es normal y el nistagmo bate a la derecha cuando mira a la derecha y a la izquierda cuando mira a la izquierda. No puede permanecer sentado sin apoyo. La tomografia craneal es normal.',
    steps: [
      { q: 'Que patron muestra la exploracion?', options: ['Un patron periferico', 'Un patron indeterminado', 'Un patron central', 'Un patron no valorable'], correct: 2 },
      { q: 'Que aporta la tomografia craneal normal?', options: ['Descarta el ictus', 'Permite dar el alta', 'Confirma la neuritis', 'No descarta nada'], correct: 3 },
      { q: 'Que corresponde hacer ahora?', options: ['Activar la via de ictus', 'Iniciar corticoides', 'Observacion 24 horas', 'Maniobra de Epley'], correct: 0 }
    ],
    explanation: 'Hay dos hallazgos centrales y basta uno solo: el impulso cefalico NORMAL en un paciente con vertigo continuo y el nistagmo que CAMBIA de direccion con la mirada. Se suma ademas la bandera roja mas util a pie de cama, que es no poder mantenerse sentado sin apoyo. La tomografia craneal no aporta nada aqui, porque el artefacto oseo hace que apenas vea la fosa posterior y deja escapar la mayoria de los infartos de esa region: sirve para descartar hemorragia y poco mas. Corresponde activar la via de ICTUS con resonancia con difusion y estudio de vasos, y vigilar el edema cerebeloso durante las primeras 48 a 72 horas.'
  },
  { q: 'Que caracteriza al nistagmo del vertigo periferico agudo?', options: ['Cambia con la direccion de la mirada', 'Es puramente vertical', 'Bate siempre hacia el mismo lado', 'Aparece solo al tumbarse'], correct: 2, explanation: 'Es horizontal con un componente torsional, mantiene la direccion mire donde mire el paciente y aumenta al mirar hacia el lado de la fase rapida. Disminuye al fijar la vista.', dificultad: 'intermedio' },
  { q: 'Que indica una desviacion vertical al tapar y destapar los ojos?', options: ['Origen central', 'Origen periferico', 'Una paresia del sexto par', 'Un estrabismo antiguo'], correct: 0, explanation: 'Es el paso mas especifico del HINTS y tambien el que mas se olvida, quiza porque no forma parte de la exploracion neurologica habitual. Su presencia obliga a manejar el cuadro como un ictus.', dificultad: 'dificil' },
  { q: 'Cuantos hallazgos centrales del HINTS hacen falta para considerar central el cuadro?', options: ['Los tres a la vez', 'Al menos dos de tres', 'Dos mas la hipoacusia', 'Uno solo'], correct: 3, explanation: 'Basta uno. El patron tranquilizador, en cambio, exige los tres a la vez: impulso anormal, nistagmo unidireccional y sin desviacion vertical. La asimetria de la regla es deliberada.', dificultad: 'dificil' },
  { q: 'Como se compara el HINTS con la resonancia con difusion precoz?', options: ['Es bastante menos sensible', 'Es mas sensible', 'Tiene sensibilidad identica', 'Solo sirve si la resonancia falla'], correct: 1, explanation: 'En manos entrenadas detecta ictus de fosa posterior que la resonancia precoz deja escapar. Es una de las pocas situaciones en las que una exploracion supera a una prueba de imagen.', dificultad: 'dificil' },
  { q: 'Que limitacion tiene la tomografia craneal en el vertigo agudo?', options: ['Requiere contraste yodado', 'Tarda demasiado en realizarse', 'Apenas ve la fosa posterior', 'No detecta la hemorragia'], correct: 2, explanation: 'El artefacto oseo hace que deje escapar la mayoria de los infartos cerebelosos y de tronco. Sirve sobre todo para descartar hemorragia, y una tomografia normal no debe tranquilizar.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 38 a&#241;os que lleva tres dias con vertigo continuo intenso, nauseas y vomitos, tras un cuadro catarral. En la exploracion, el impulso cefalico provoca una sacada de correccion al girar la cabeza hacia la izquierda. El nistagmo bate hacia la derecha mire donde mire y no hay desviacion vertical al tapar y destapar los ojos. No refiere hipoacusia. Camina desviandose hacia la izquierda pero se mantiene de pie sin ayuda.',
    steps: [
      { q: 'Que patron muestra la exploracion?', options: ['Un patron central', 'Un patron periferico', 'Un patron mixto', 'Un patron no interpretable'], correct: 1 },
      { q: 'Que tratamiento farmacologico ha demostrado mejorar la recuperacion?', options: ['Corticoides en fase precoz', 'Aciclovir por via oral', 'Betahistina prolongada', 'Diureticos a dosis baja'], correct: 0 },
      { q: 'Cuanto tiempo deben mantenerse los sedantes vestibulares?', options: ['Hasta que ceda el nistagmo', 'Al menos tres semanas', 'De forma indefinida', 'Solo unos pocos dias'], correct: 3 }
    ],
    explanation: 'Los tres pasos son perifericos: impulso cefalico ANORMAL con sacada de correccion, nistagmo unidireccional y ausencia de desviacion vertical. Se suman la ausencia de hipoacusia y el hecho de que la paciente se mantiene de pie, lo que encaja con una NEURITIS VESTIBULAR. Los corticoides administrados en fase precoz mejoran la recuperacion de la funcion vestibular. Y hay un detalle que se hace mal a diario: los sedantes vestibulares se usan solo unos POCOS DIAS y en la fase mas sintomatica, porque prolongarlos RETRASA la compensacion central, que es justo lo que hace falta para curarse.'
  },
  { q: 'Que significa una resonancia con difusion normal en las primeras horas?', options: ['Que descarta el infarto', 'Que NO lo descarta', 'Que la lesion es antigua', 'Que hay que dar el alta'], correct: 1, explanation: 'En las primeras 24 a 48 horas deja escapar una parte de los infartos peque&#241;os de fosa posterior. Con exploracion central y resonancia precoz normal, hay que repetirla y no dar el alta.', dificultad: 'dificil' },
  { q: 'Cual es la bandera roja mas util a pie de cama en el vertigo agudo?', options: ['La intensidad del vomito', 'La ausencia de acufeno', 'La edad avanzada', 'No poder caminar sin ayuda'], correct: 3, explanation: 'Un paciente con neuritis vestibular esta muy mareado pero se mantiene de pie con ayuda. Quien no puede sentarse ni caminar tiene un problema cerebeloso hasta que se demuestre lo contrario.', dificultad: 'intermedio' },
  { q: 'Que territorio arterial explica que un ictus produzca vertigo con hipoacusia?', options: ['La cerebral posterior', 'La cerebelosa anteroinferior', 'La cerebral media', 'La comunicante posterior'], correct: 1, explanation: 'Irriga tambien el oido interno, de modo que su infarto produce vertigo con hipoacusia y se confunde con una laberintitis. Por eso la hipoacusia nueva es un dato de alarma y no de tranquilidad.', dificultad: 'dificil' },
  { q: 'Que efecto tienen los corticoides precoces en la neuritis vestibular?', options: ['Acortan el vomito a la mitad', 'Previenen la recurrencia', 'Mejoran la recuperacion vestibular', 'Evitan la hipoacusia asociada'], correct: 2, explanation: 'Es el tratamiento farmacologico con mas respaldo en esta entidad. El resto del manejo es hidratacion, antiemeticos y sobre todo movilizacion y rehabilitacion precoces.', dificultad: 'intermedio' },
  { q: 'Por que no deben prolongarse los sedantes vestibulares?', options: ['Retrasan la compensacion', 'Producen dependencia rapida', 'Provocan hipotension grave', 'Enmascaran el nistagmo'], correct: 0, explanation: 'La compensacion central necesita movimiento y exposicion. Los sedantes y el reposo prolongado la frenan, y convierten un cuadro que dura semanas en un mareo cronico de meses.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Mujer de 62 a&#241;os con episodios de vertigo de unos 20 a 30 segundos que aparecen al girarse en la cama y al incorporarse, desde hace cinco dias. Entre los episodios se encuentra bien. No tiene hipoacusia, acufeno, cefalea ni ninguna focalidad. Al hacer el Dix-Hallpike derecho aparece, tras cuatro segundos, un nistagmo hacia arriba y torsional que dura unos 25 segundos y que disminuye al repetir la maniobra.',
    steps: [
      { q: 'Que canal semicircular esta afectado?', options: ['El horizontal izquierdo', 'El superior derecho', 'El horizontal derecho', 'El posterior derecho'], correct: 3 },
      { q: 'Cual es el tratamiento indicado?', options: ['Sedantes vestibulares', 'Maniobra de Epley', 'Reposo en cama', 'Corticoides orales'], correct: 1 },
      { q: 'Que prueba de imagen corresponde pedir?', options: ['Resonancia craneal', 'Tomografia de pe&#241;asco', 'Ninguna', 'Angiografia cerebral'], correct: 2 }
    ],
    explanation: 'El nistagmo hacia arriba y torsional provocado por el Dix-Hallpike, con LATENCIA de unos segundos, duracion menor de un minuto y AGOTAMIENTO al repetir, es la firma del vertigo posicional del canal POSTERIOR, que supone alrededor de 8 de cada 10 casos. Se trata con la maniobra de EPLEY del lado que provoco el nistagmo, en la misma consulta y sin necesidad de nada mas. En un caso tipico como este no hay que pedir ninguna prueba de imagen ni dar sedantes vestibulares, que no curan y ademas retrasan la compensacion. Conviene advertir de que puede quedar inestabilidad unos dias y de que el cuadro recurre en una parte de los pacientes.'
  },
  { q: 'Cuanto duran las crisis del vertigo posicional paroxistico benigno?', options: ['De diez a veinte minutos', 'De una a tres horas', 'Todo el dia sin ceder', 'Menos de un minuto'], correct: 3, explanation: 'Se desencadenan al girarse en la cama, tumbarse, incorporarse o mirar hacia arriba, y entre las crisis el paciente esta bien. Si duran mas de un minuto hay que replantear el diagnostico.', dificultad: 'facil' },
  { q: 'Que nistagmo provoca el Dix-Hallpike en el canal posterior?', options: ['Horizontal hacia el suelo', 'Hacia arriba y torsional', 'Puramente hacia abajo', 'Horizontal hacia el techo'], correct: 1, explanation: 'Con latencia de segundos, duracion menor de un minuto y agotamiento al repetir. Esos tres rasgos son los que lo identifican como benigno y no como posicional central.', dificultad: 'intermedio' },
  { q: 'Cual es el tratamiento del vertigo posicional del canal posterior?', options: ['La maniobra de Epley', 'La betahistina oral', 'El reposo posicional', 'La rehabilitacion visual'], correct: 0, explanation: 'Devuelve los otoconios al utriculo y con frecuencia resuelve el cuadro en una o dos sesiones. Es una de las pocas enfermedades que se diagnostican y se curan en la misma consulta.', dificultad: 'facil' },
  { q: 'Que hay que hacer si el Dix-Hallpike es negativo y la historia es compatible?', options: ['Pedir una resonancia craneal', 'Iniciar sedantes vestibulares', 'Explorar el canal horizontal', 'Repetirlo pasadas dos semanas'], correct: 2, explanation: 'Se hace con la maniobra de rotacion en decubito supino, que el Dix-Hallpike no sustituye. Omitir ese paso es la razon por la que algunos casos se etiquetan de resistentes al tratamiento.', dificultad: 'intermedio' },
  { q: 'Que estructura desplazada explica el vertigo posicional?', options: ['Los otoconios del utriculo', 'La cupula del canal lateral', 'La membrana tectoria coclear', 'El saco endolinfatico'], correct: 0, explanation: 'Al entrar en un canal semicircular y moverse por gravedad arrastran la endolinfa, y eso explica la latencia, la duracion breve y el agotamiento. La maniobra cura porque simplemente los devuelve al utriculo.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 44 a&#241;os con seis episodios en el ultimo a&#241;o de vertigo que aparece sin que nada lo provoque y dura entre una y tres horas. Durante las crisis nota acufeno y sensacion de taponamiento en el oido izquierdo, que despues mejoran. La audiometria muestra una hipoacusia neurosensorial de tonos graves y medios en el oido izquierdo.',
    steps: [
      { q: 'Que diagnostico es el mas probable?', options: ['Enfermedad de Meniere', 'Migra&#241;a vestibular', 'Neuritis vestibular', 'Vertigo posicional'], correct: 0 },
      { q: 'Que prueba sostiene ese diagnostico?', options: ['La resonancia craneal', 'La videonistagmografia', 'El estudio vascular', 'La audiometria'], correct: 3 },
      { q: 'Que dato habria orientado a migra&#241;a vestibular?', options: ['Las crisis mas prolongadas', 'El acufeno bilateral', 'La fotofobia durante la crisis', 'La ausencia de vomitos'], correct: 2 }
    ],
    explanation: 'Episodios espontaneos de 20 minutos a 12 horas, con acufeno y plenitud fluctuantes en el mismo oido y una hipoacusia neurosensorial de tonos graves y medios DOCUMENTADA, cumplen los criterios de enfermedad de Meniere. La audiometria es imprescindible: sin ella el diagnostico no se sostiene, y con frecuencia se usa como etiqueta comoda para cualquier vertigo recurrente. El diferencial principal es la migra&#241;a vestibular, muy frecuente e infradiagnosticada, y lo que la delata son los rasgos migra&#241;osos DURANTE las crisis (cefalea, fotofobia, fonofobia o aura), que hay que preguntar de forma expresa porque el paciente no los relaciona ni los cuenta.'
  },
  { q: 'Que exige el diagnostico de enfermedad de Meniere?', options: ['Una resonancia con contraste', 'Un estudio vascular normal', 'Hipoacusia documentada', 'Un acufeno permanente'], correct: 2, explanation: 'Se necesita una audiometria que demuestre hipoacusia neurosensorial de tonos graves y medios en al menos una ocasion. Sin ella el diagnostico no se sostiene y se convierte en una etiqueta comoda.', dificultad: 'intermedio' },
  { q: 'Cuanto duran las crisis de la enfermedad de Meniere?', options: ['Menos de cinco minutos', 'De 20 minutos a 12 horas', 'De 2 a 5 dias seguidos', 'Mas de una semana'], correct: 1, explanation: 'Esa duracion, junto con la hipoacusia documentada, es lo que la separa de la migra&#241;a vestibular, cuyas crisis van de 5 minutos a 72 horas y no exigen perdida auditiva.', dificultad: 'intermedio' },
  { q: 'Que hay que preguntar de forma expresa para diagnosticar una migra&#241;a vestibular?', options: ['Por la posicion al inicio', 'Por el lado del acufeno', 'Por la duracion exacta', 'Por la cefalea durante la crisis'], correct: 3, explanation: 'Tambien por la fotofobia, la fonofobia y el aura. El paciente no relaciona el vertigo con su migra&#241;a y no lo cuenta de forma espontanea, lo que explica que se infradiagnostique tanto.', dificultad: 'intermedio' },
  { q: 'Como hay que manejar un vertigo episodico aislado en un paciente con riesgo vascular?', options: ['Como un ataque isquemico transitorio', 'Como una migra&#241;a vestibular', 'Con estudio ambulatorio diferido', 'Con maniobras de reposicion'], correct: 0, explanation: 'El vertigo puede ser la unica manifestacion de un accidente isquemico transitorio vertebrobasilar, y el riesgo de infarto precoz obliga al mismo circuito urgente que cualquier otro.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Varon de 58 a&#241;os que consulta por mareo al tumbarse en la cama desde hace dos semanas. Al realizar el Dix-Hallpike aparece de forma inmediata, sin latencia, un nistagmo que bate hacia abajo, que dura mas de dos minutos y que no disminuye al repetir la maniobra.',
    steps: [
      { q: 'Que sugiere ese nistagmo?', options: ['Canal posterior derecho', 'Canal horizontal bilateral', 'Cupulolitiasis del superior', 'Un origen central'], correct: 3 },
      { q: 'Que corresponde hacer?', options: ['Repetir la maniobra otro dia', 'Pedir imagen de fosa posterior', 'Iniciar sedantes vestibulares', 'Derivar a rehabilitacion'], correct: 1 },
      { q: 'Seria util la maniobra de Epley aqui?', options: ['Si, si se repite tres veces', 'Si, pero del lado contrario', 'Solo con collarin posterior', 'No, no esta indicada'], correct: 3 }
    ],
    explanation: 'Cuatro rasgos lo alejan a la vez del vertigo posicional benigno: el nistagmo bate HACIA ABAJO, aparece SIN LATENCIA, dura mas de un minuto y NO SE AGOTA al repetir. Cualquiera de ellos por separado ya obligaria a desconfiar, y los cuatro juntos definen un nistagmo posicional CENTRAL, que se asocia a lesiones de la fosa posterior y de la union craneocervical. Lo que corresponde es pedir imagen dirigida a esa region, no insistir con maniobras de reposicion. La maniobra de Epley no esta indicada porque no hay otoconios que reposicionar: repetirla solo retrasa el diagnostico y refuerza una etiqueta equivocada.'
  },
  { q: 'Que prueba de imagen corresponde en un vertigo posicional tipico?', options: ['Ninguna', 'Tomografia craneal urgente', 'Resonancia con contraste', 'Angiografia de troncos'], correct: 0, explanation: 'El diagnostico es de exploracion y el tratamiento es una maniobra. La imagen se reserva para los casos atipicos: nistagmo que bate hacia abajo, sin latencia, sin agotamiento o prolongado.', dificultad: 'intermedio' },
  { q: 'Que hay que sospechar ante un vertigo agudo con cefalea o cervicalgia bruscas?', options: ['Una crisis hipertensiva', 'Una otitis complicada', 'Una diseccion arterial', 'Una migra&#241;a con aura'], correct: 2, explanation: 'Sobre todo en pacientes jovenes o tras un traumatismo o una manipulacion cervical. Obliga a pedir estudio de los vasos y no solo imagen del parenquima.', dificultad: 'dificil' },
  { q: 'Que complicacion hay que vigilar en las primeras 72 horas de un infarto cerebeloso?', options: ['La transformacion hemorragica', 'El edema con deterioro brusco', 'La neumonia por aspiracion', 'La crisis comicial precoz'], correct: 1, explanation: 'Puede producir compresion del tronco e hidrocefalia en un paciente que hasta ese momento parecia estable. Un descenso del nivel de conciencia obliga a repetir la imagen de inmediato.', dificultad: 'dificil' },
  { q: 'Que tratamiento puede salvar la vida en un infarto cerebeloso con edema?', options: ['La hiperventilacion mantenida', 'La sedacion profunda', 'El suero hipertonico solo', 'La craniectomia descompresiva'], correct: 3, explanation: 'Junto con el drenaje ventricular si hay hidrocefalia. Es una complicacion tratable, y anticiparla con vigilancia estrecha es lo que permite intervenir a tiempo.', dificultad: 'dificil' },
  { q: 'Cual es el tratamiento con mas respaldo en el mareo cronico?', options: ['La rehabilitacion vestibular', 'La betahistina prolongada', 'El reposo relativo', 'El collarin cervical'], correct: 0, explanation: 'Es tambien el que menos se prescribe. La compensacion central necesita movimiento y exposicion, de modo que el reposo y los sedantes prolongados son exactamente lo contrario de lo que hace falta.', dificultad: 'intermedio' },
  { q: 'Como se explora la hipotension ortostatica ante un mareo al levantarse?', options: ['Con una prueba de esfuerzo', 'Con la maniobra de Valsalva', 'Midiendo la tension tras 3 minutos de pie', 'Con un registro de 24 horas'], correct: 2, explanation: 'Se compara con la medida en decubito y se considera positiva con un descenso de 20 mmHg en la sistolica o de 10 en la diastolica. Es la prueba mas barata del tema y una de las mas rentables.', dificultad: 'facil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 79 a&#241;os con ocho meses de inestabilidad continua que empeora al caminar y en entornos con mucho estimulo visual, como el supermercado. Toma tres antihipertensivos y lorazepam por la noche. La tension arterial es de 130 sobre 75 mmHg en decubito y de 105 sobre 60 mmHg tras tres minutos de pie. Se le hizo una resonancia craneal hace seis meses que fue normal.',
    steps: [
      { q: 'Que corresponde hacer en primer lugar?', options: ['Solicitar videonistagmografia', 'Iniciar betahistina', 'Revisar la lista de farmacos', 'Pautar reposo relativo'], correct: 2 },
      { q: 'Corresponde repetir la resonancia?', options: ['Si, con contraste', 'No, sin un motivo nuevo', 'Si, cada seis meses', 'Solo si empeora el acufeno'], correct: 1 },
      { q: 'Que tratamiento tiene mas respaldo en este caso?', options: ['La rehabilitacion vestibular', 'El collarin cervical blando', 'La sedacion nocturna', 'La restriccion de sal'], correct: 0 }
    ],
    explanation: 'El mareo cronico del anciano suele ser MULTIFACTORIAL, y buscar una sola explicacion suele fracasar. Aqui hay al menos dos causas activas y ambas son corregibles: una hipotension ortostatica evidente, con un descenso de 25 mmHg en la sistolica tras tres minutos de pie, y una benzodiacepina que empeora el equilibrio y frena la compensacion. Revisar y retirar farmacos rinde mas que cualquier prueba. Repetir una resonancia normal sin un motivo nuevo no resuelve nada y refuerza la preocupacion del paciente. Y el tratamiento con mas respaldo es la REHABILITACION VESTIBULAR, junto con el trabajo de fuerza y equilibrio y el abordaje del miedo a caer, que forma parte del problema.'
  }
];

export const flashcards = [
  { front: 'La pregunta que hay que dejar de hacer', back: 'Como es el mareo. No discrimina: los pacientes cambian de respuesta.' },
  { front: 'Los dos ejes de la clasificacion', back: 'TIEMPO y DESENCADENANTE.' },
  { front: 'Los tres sindromes', back: 'Agudo continuo, episodico espontaneo y episodico provocado.' },
  { front: 'Antes de clasificar', back: 'Descartar el mareo SINTOMATICO de una enfermedad general.' },
  { front: 'Sindrome vestibular agudo', back: 'Vertigo continuo de dias con nistagmo. La pregunta es neuritis o ictus.' },
  { front: 'Donde vale el HINTS', back: 'Solo en el vertigo continuo CON nistagmo. Fuera de ahi no significa nada.' },
  { front: 'Impulso cefalico NORMAL', back: 'Es lo preocupante: apunta a origen central.' },
  { front: 'Impulso cefalico ANORMAL', back: 'Sacada de correccion: el reflejo esta roto, es PERIFERICO.' },
  { front: 'Nistagmo periferico', back: 'Horizontal, siempre en la misma direccion, disminuye al fijar la vista.' },
  { front: 'Nistagmo central', back: 'Cambia de direccion con la mirada, o es vertical o torsional puro.' },
  { front: 'Desviacion vertical', back: 'Al destapar el ojo hace un reajuste vertical: CENTRAL. Es el paso que se olvida.' },
  { front: 'Cuantos hallazgos centrales hacen falta', back: 'UNO solo. El patron periferico exige los tres a la vez.' },
  { front: 'HINTS frente a resonancia precoz', back: 'El HINTS es MAS sensible en manos entrenadas.' },
  { front: 'HINTS ampliado', back: 'A&#241;ade la hipoacusia nueva, que tambien apunta a central.' },
  { front: 'La bandera roja de cabecera', back: 'No poder sentarse ni caminar sin ayuda. No es una laberintitis.' },
  { front: 'Tomografia craneal en el vertigo', back: 'Apenas ve la fosa posterior. Sirve para descartar hemorragia.' },
  { front: 'Resonancia precoz normal', back: 'NO descarta: en 24 a 48 horas escapan infartos peque&#241;os de fosa posterior.' },
  { front: 'Vertigo con hipoacusia y perfil central', back: 'Territorio de la cerebelosa anteroinferior, que irriga el oido interno.' },
  { front: 'Tratamiento de la neuritis vestibular', back: 'Corticoides precoces y rehabilitacion vestibular temprana.' },
  { front: 'Sedantes vestibulares', back: 'Pocos dias. Prolongarlos RETRASA la compensacion central.' },
  { front: 'Duracion de las crisis del vertigo posicional', back: 'Menos de un minuto. Entre crisis el paciente esta bien.' },
  { front: 'Dix-Hallpike positivo del canal posterior', back: 'Nistagmo hacia arriba y torsional, con latencia y agotamiento.' },
  { front: 'Tratamiento del canal posterior', back: 'Maniobra de Epley, en la misma consulta.' },
  { front: 'Dix-Hallpike negativo', back: 'Explorar el canal HORIZONTAL con la rotacion en decubito.' },
  { front: 'Nistagmo posicional que bate hacia abajo', back: 'Sospecha CENTRAL: imagen de fosa posterior, no mas maniobras.' },
  { front: 'Imagen en el vertigo posicional tipico', back: 'Ninguna. Ni sedantes.' },
  { front: 'Criterios de enfermedad de Meniere', back: 'Crisis de 20 minutos a 12 horas con hipoacusia DOCUMENTADA y sintomas auditivos.' },
  { front: 'Migra&#241;a vestibular', back: 'De 5 minutos a 72 horas. Preguntar por cefalea y fotofobia DURANTE la crisis.' },
  { front: 'Vertigo episodico aislado con riesgo vascular', back: 'Puede ser un ataque isquemico transitorio: circuito urgente.' },
  { front: 'Cefalea o cervicalgia bruscas con vertigo', back: 'Pensar en DISECCION vertebral y pedir estudio de vasos.' },
  { front: 'Infarto cerebeloso: que vigilar', back: 'El edema de las primeras 48 a 72 horas. Craniectomia o drenaje si aparece.' },
  { front: 'Mareo cronico del anciano', back: 'Multifactorial. Retirar farmacos y prescribir rehabilitacion vestibular.' }
];

export default { quiz, flashcards };
