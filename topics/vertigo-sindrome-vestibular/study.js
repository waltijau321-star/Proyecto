// topics/vertigo-sindrome-vestibular/study.js: Autoevaluacion de vertigo y sindrome vestibular.
// Sigue .claude/skills/reglas-preguntas/SKILL.md: misma categoria logica y longitud comparable
// entre las 4 opciones, distractores plausibles, sin pistas gramaticales ni semanticas, y la
// posicion de `correct` distribuida sin patron a lo largo de todo el banco.
//
// 48 subpreguntas (30 sueltas + 6 cascadas de 3 pasos) y 32 tarjetas.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const quiz = [
  { q: 'Que pregunta ha demostrado NO discriminar en el paciente con mareo?', options: ['Como es la sensación', 'Cuanto dura el episodio', 'Que lo desencadena', 'Que fármacos toma'], correct: 0, explanation: 'Los pacientes cambian de respuesta al repreguntar, y describir el mareo como giratorio o como inestabilidad no separa una neuritis de un infarto cerebeloso. El enfoque moderno cambia la pregunta.', dificultad: 'facil' },
  { q: 'Sobre que dos ejes se clasifica hoy el mareo?', options: ['Intensidad y frecuencia', 'Edad y riesgo vascular', 'Tiempo y desencadenante', 'Audición y equilibrio'], correct: 2, explanation: 'De ahi salen tres síndromes con tres exploraciones distintas: agudo continuo, episódico espontáneo y episódico provocado. Antes de todo eso hay que descartar el mareo sintomático de una enfermedad general.', dificultad: 'facil' },
  { q: 'Que define al síndrome vestibular agudo?', options: ['Crisis breves y repetidas', 'Vértigo continuo de días', 'Vértigo con hipoacusia', 'Mareo al ponerse de pie'], correct: 1, explanation: 'Se acompaña de náuseas, nistagmo, intolerancia al movimiento cefálico e inestabilidad. Su única pregunta relevante es si el origen es una neuritis o un ictus de fosa posterior.', dificultad: 'intermedio' },
  { q: 'En que escenario esta validado el HINTS?', options: ['En cualquier mareo agudo', 'En el vértigo posicional', 'En el mareo del anciano', 'En el vértigo continuo con nistagmo'], correct: 3, explanation: 'Fuera de ese escenario no ha sido validado y su resultado no significa nada. Aplicarlo a un mareo episódico o a un paciente sin nistagmo puede tranquilizar en falso, que es el peor desenlace posible.', dificultad: 'intermedio' },
  { q: 'Que significa un impulso cefálico NORMAL en un paciente con vértigo continuo?', options: ['Que la lesión es periférica', 'Que apunta a origen central', 'Que la exploración fue mal hecha', 'Que el vértigo ya esta cediendo'], correct: 1, explanation: 'Es el hallazgo más contraintuitivo del tema. Si el reflejo vestibuloocular esta intacto, el nervio funciona, y sin embargo el paciente lleva días mareado: eso apunta al cerebro.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Varón de 71 años con hipertensión y diabetes que lleva dos días con vértigo continuo, náuseas y vómitos. En la exploración, la prueba del impulso cefálico es normal y el nistagmo bate a la derecha cuando mira a la derecha y a la izquierda cuando mira a la izquierda. No puede permanecer sentado sin apoyo. La tomografía craneal es normal.',
    steps: [
      { q: 'Que patrón muestra la exploración?', options: ['Un patrón periférico', 'Un patrón indeterminado', 'Un patrón central', 'Un patrón no valorable'], correct: 2 },
      { q: 'Que aporta la tomografía craneal normal?', options: ['Descarta el ictus', 'Permite dar el alta', 'Confirma la neuritis', 'No descarta nada'], correct: 3 },
      { q: 'Que corresponde hacer ahora?', options: ['Activar la via de ictus', 'Iniciar corticoides', 'Observación 24 horas', 'Maniobra de Epley'], correct: 0 }
    ],
    explanation: 'Hay dos hallazgos centrales y basta uno solo: el impulso cefálico NORMAL en un paciente con vértigo continuo y el nistagmo que CAMBIA de dirección con la mirada. Se suma además la bandera roja más útil a pie de cama, que es no poder mantenerse sentado sin apoyo. La tomografía craneal no aporta nada aquí, porque el artefacto óseo hace que apenas vea la fosa posterior y deja escapar la mayoría de los infartos de esa región: sirve para descartar hemorragia y poco más. Corresponde activar la via de ICTUS con resonancia con difusión y estudio de vasos, y vigilar el edema cerebeloso durante las primeras 48 a 72 horas.'
  },
  { q: 'Que caracteriza al nistagmo del vértigo periférico agudo?', options: ['Cambia con la dirección de la mirada', 'Es puramente vertical', 'Bate siempre hacia el mismo lado', 'Aparece solo al tumbarse'], correct: 2, explanation: 'Es horizontal con un componente torsional, mantiene la dirección mire donde mire el paciente y aumenta al mirar hacia el lado de la fase rápida. Disminuye al fijar la vista.', dificultad: 'intermedio' },
  { q: 'Que indica una desviación vertical al tapar y destapar los ojos?', options: ['Origen central', 'Origen periférico', 'Una paresia del sexto par', 'Un estrabismo antiguo'], correct: 0, explanation: 'Es el paso más específico del HINTS y también el que más se olvida, quiza porque no forma parte de la exploración neurológica habitual. Su presencia obliga a manejar el cuadro como un ictus.', dificultad: 'dificil' },
  { q: 'Cuantos hallazgos centrales del HINTS hacen falta para considerar central el cuadro?', options: ['Los tres a la vez', 'Al menos dos de tres', 'Dos más la hipoacusia', 'Uno solo'], correct: 3, explanation: 'Basta uno. El patrón tranquilizador, en cambio, exige los tres a la vez: impulso anormal, nistagmo unidireccional y sin desviación vertical. La asimetría de la regla es deliberada.', dificultad: 'dificil' },
  { q: 'Como se compara el HINTS con la resonancia con difusión precoz?', options: ['Es bastante menos sensible', 'Es más sensible', 'Tiene sensibilidad idéntica', 'Solo sirve si la resonancia falla'], correct: 1, explanation: 'En manos entrenadas detecta ictus de fosa posterior que la resonancia precoz deja escapar. Es una de las pocas situaciones en las que una exploración supera a una prueba de imagen.', dificultad: 'dificil' },
  { q: 'Que limitación tiene la tomografía craneal en el vértigo agudo?', options: ['Requiere contraste yodado', 'Tarda demasiado en realizarse', 'Apenas ve la fosa posterior', 'No detecta la hemorragia'], correct: 2, explanation: 'El artefacto óseo hace que deje escapar la mayoría de los infartos cerebelosos y de tronco. Sirve sobre todo para descartar hemorragia, y una tomografía normal no debe tranquilizar.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 38 años que lleva tres días con vértigo continuo intenso, náuseas y vómitos, tras un cuadro catarral. En la exploración, el impulso cefálico provoca una sacada de corrección al girar la cabeza hacia la izquierda. El nistagmo bate hacia la derecha mire donde mire y no hay desviación vertical al tapar y destapar los ojos. No refiere hipoacusia. Camina desviandose hacia la izquierda pero se mantiene de pie sin ayuda.',
    steps: [
      { q: 'Que patrón muestra la exploración?', options: ['Un patrón central', 'Un patrón periférico', 'Un patrón mixto', 'Un patrón no interpretable'], correct: 1 },
      { q: 'Que tratamiento farmacológico ha demostrado mejorar la recuperación?', options: ['Corticoides en fase precoz', 'Aciclovir por via oral', 'Betahistina prolongada', 'Diuréticos a dosis baja'], correct: 0 },
      { q: 'Cuanto tiempo deben mantenerse los sedantes vestibulares?', options: ['Hasta que ceda el nistagmo', 'Al menos tres semanas', 'De forma indefinida', 'Solo unos pocos días'], correct: 3 }
    ],
    explanation: 'Los tres pasos son periféricos: impulso cefálico ANORMAL con sacada de corrección, nistagmo unidireccional y ausencia de desviación vertical. Se suman la ausencia de hipoacusia y el hecho de que la paciente se mantiene de pie, lo que encaja con una NEURITIS VESTIBULAR. Los corticoides administrados en fase precoz mejoran la recuperación de la función vestibular. Y hay un detalle que se hace mal a diario: los sedantes vestibulares se usan solo unos POCOS DÍAS y en la fase más sintomática, porque prolongarlos RETRASA la compensación central, que es justo lo que hace falta para curarse.'
  },
  { q: 'Que significa una resonancia con difusión normal en las primeras horas?', options: ['Que descarta el infarto', 'Que NO lo descarta', 'Que la lesión es antigua', 'Que hay que dar el alta'], correct: 1, explanation: 'En las primeras 24 a 48 horas deja escapar una parte de los infartos pequeños de fosa posterior. Con exploración central y resonancia precoz normal, hay que repetirla y no dar el alta.', dificultad: 'dificil' },
  { q: 'Cual es la bandera roja más útil a pie de cama en el vértigo agudo?', options: ['La intensidad del vómito', 'La ausencia de acúfeno', 'La edad avanzada', 'No poder caminar sin ayuda'], correct: 3, explanation: 'Un paciente con neuritis vestibular esta muy mareado pero se mantiene de pie con ayuda. Quien no puede sentarse ni caminar tiene un problema cerebeloso hasta que se demuestre lo contrario.', dificultad: 'intermedio' },
  { q: 'Que territorio arterial explica que un ictus produzca vértigo con hipoacusia?', options: ['La cerebral posterior', 'La cerebelosa anteroinferior', 'La cerebral media', 'La comunicante posterior'], correct: 1, explanation: 'Irriga también el oído interno, de modo que su infarto produce vértigo con hipoacusia y se confunde con una laberintitis. Por eso la hipoacusia nueva es un dato de alarma y no de tranquilidad.', dificultad: 'dificil' },
  { q: 'Que efecto tienen los corticoides precoces en la neuritis vestibular?', options: ['Acortan el vómito a la mitad', 'Previenen la recurrencia', 'Mejoran la recuperación vestibular', 'Evitan la hipoacusia asociada'], correct: 2, explanation: 'Es el tratamiento farmacológico con más respaldo en esta entidad. El resto del manejo es hidratación, antieméticos y sobre todo movilización y rehabilitación precoces.', dificultad: 'intermedio' },
  { q: 'Por que no deben prolongarse los sedantes vestibulares?', options: ['Retrasan la compensación', 'Producen dependencia rápida', 'Provocan hipotensión grave', 'Enmascaran el nistagmo'], correct: 0, explanation: 'La compensación central necesita movimiento y exposición. Los sedantes y el reposo prolongado la frenan, y convierten un cuadro que dura semanas en un mareo crónico de meses.', dificultad: 'intermedio' },
  {
    type: 'cascade', dificultad: 'facil',
    vignette: 'Mujer de 62 años con episodios de vértigo de unos 20 a 30 segundos que aparecen al girarse en la cama y al incorporarse, desde hace cinco días. Entre los episodios se encuentra bien. No tiene hipoacusia, acúfeno, cefalea ni ninguna focalidad. Al hacer el Dix-Hallpike derecho aparece, tras cuatro segundos, un nistagmo hacia arriba y torsional que dura unos 25 segundos y que disminuye al repetir la maniobra.',
    steps: [
      { q: 'Que canal semicircular esta afectado?', options: ['El horizontal izquierdo', 'El superior derecho', 'El horizontal derecho', 'El posterior derecho'], correct: 3 },
      { q: 'Cual es el tratamiento indicado?', options: ['Sedantes vestibulares', 'Maniobra de Epley', 'Reposo en cama', 'Corticoides orales'], correct: 1 },
      { q: 'Que prueba de imagen corresponde pedir?', options: ['Resonancia craneal', 'Tomografía de peñasco', 'Ninguna', 'Angiografía cerebral'], correct: 2 }
    ],
    explanation: 'El nistagmo hacia arriba y torsional provocado por el Dix-Hallpike, con LATENCIA de unos segundos, duración menor de un minuto y AGOTAMIENTO al repetir, es la firma del vértigo posicional del canal POSTERIOR, que supone alrededor de 8 de cada 10 casos. Se trata con la maniobra de EPLEY del lado que provoco el nistagmo, en la misma consulta y sin necesidad de nada más. En un caso típico como este no hay que pedir ninguna prueba de imagen ni dar sedantes vestibulares, que no curan y además retrasan la compensación. Conviene advertir de que puede quedar inestabilidad unos días y de que el cuadro recurre en una parte de los pacientes.'
  },
  { q: 'Cuanto duran las crisis del vértigo posicional paroxístico benigno?', options: ['De diez a veinte minutos', 'De una a tres horas', 'Todo el dia sin ceder', 'Menos de un minuto'], correct: 3, explanation: 'Se desencadenan al girarse en la cama, tumbarse, incorporarse o mirar hacia arriba, y entre las crisis el paciente esta bien. Si duran más de un minuto hay que replantear el diagnóstico.', dificultad: 'facil' },
  { q: 'Que nistagmo provoca el Dix-Hallpike en el canal posterior?', options: ['Horizontal hacia el suelo', 'Hacia arriba y torsional', 'Puramente hacia abajo', 'Horizontal hacia el techo'], correct: 1, explanation: 'Con latencia de segundos, duración menor de un minuto y agotamiento al repetir. Esos tres rasgos son los que lo identifican como benigno y no como posicional central.', dificultad: 'intermedio' },
  { q: 'Cual es el tratamiento del vértigo posicional del canal posterior?', options: ['La maniobra de Epley', 'La betahistina oral', 'El reposo posicional', 'La rehabilitación visual'], correct: 0, explanation: 'Devuelve los otoconios al utriculo y con frecuencia resuelve el cuadro en una o dos sesiones. Es una de las pocas enfermedades que se diagnostican y se curan en la misma consulta.', dificultad: 'facil' },
  { q: 'Que hay que hacer si el Dix-Hallpike es negativo y la historia es compatible?', options: ['Pedir una resonancia craneal', 'Iniciar sedantes vestibulares', 'Explorar el canal horizontal', 'Repetirlo pasadas dos semanas'], correct: 2, explanation: 'Se hace con la maniobra de rotación en decúbito supino, que el Dix-Hallpike no sustituye. Omitir ese paso es la razón por la que algunos casos se etiquetan de resistentes al tratamiento.', dificultad: 'intermedio' },
  { q: 'Que estructura desplazada explica el vértigo posicional?', options: ['Los otoconios del utriculo', 'La cúpula del canal lateral', 'La membrana tectoria coclear', 'El saco endolinfatico'], correct: 0, explanation: 'Al entrar en un canal semicircular y moverse por gravedad arrastran la endolinfa, y eso explica la latencia, la duración breve y el agotamiento. La maniobra cura porque simplemente los devuelve al utriculo.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 44 años con seis episodios en el último año de vértigo que aparece sin que nada lo provoque y dura entre una y tres horas. Durante las crisis nota acúfeno y sensación de taponamiento en el oído izquierdo, que después mejoran. La audiometría muestra una hipoacusia neurosensorial de tonos graves y medios en el oído izquierdo.',
    steps: [
      { q: 'Que diagnóstico es el más probable?', options: ['Enfermedad de Meniere', 'Migraña vestibular', 'Neuritis vestibular', 'Vértigo posicional'], correct: 0 },
      { q: 'Que prueba sostiene ese diagnóstico?', options: ['La resonancia craneal', 'La videonistagmografia', 'El estudio vascular', 'La audiometría'], correct: 3 },
      { q: 'Que dato habría orientado a migraña vestibular?', options: ['Las crisis más prolongadas', 'El acúfeno bilateral', 'La fotofobia durante la crisis', 'La ausencia de vómitos'], correct: 2 }
    ],
    explanation: 'Episodios espontáneos de 20 minutos a 12 horas, con acúfeno y plenitud fluctuantes en el mismo oído y una hipoacusia neurosensorial de tonos graves y medios DOCUMENTADA, cumplen los criterios de enfermedad de Meniere. La audiometría es imprescindible: sin ella el diagnóstico no se sostiene, y con frecuencia se usa como etiqueta comoda para cualquier vértigo recurrente. El diferencial principal es la migraña vestibular, muy frecuente e infradiagnosticada, y lo que la delata son los rasgos migrañosos DURANTE las crisis (cefalea, fotofobia, fonofobia o aura), que hay que preguntar de forma expresa porque el paciente no los relaciona ni los cuenta.'
  },
  { q: 'Que exige el diagnóstico de enfermedad de Meniere?', options: ['Una resonancia con contraste', 'Un estudio vascular normal', 'Hipoacusia documentada', 'Un acúfeno permanente'], correct: 2, explanation: 'Se necesita una audiometría que demuestre hipoacusia neurosensorial de tonos graves y medios en al menos una ocasión. Sin ella el diagnóstico no se sostiene y se convierte en una etiqueta comoda.', dificultad: 'intermedio' },
  { q: 'Cuanto duran las crisis de la enfermedad de Meniere?', options: ['Menos de cinco minutos', 'De 20 minutos a 12 horas', 'De 2 a 5 días seguidos', 'Más de una semana'], correct: 1, explanation: 'Esa duración, junto con la hipoacusia documentada, es lo que la separa de la migraña vestibular, cuyas crisis van de 5 minutos a 72 horas y no exigen pérdida auditiva.', dificultad: 'intermedio' },
  { q: 'Que hay que preguntar de forma expresa para diagnosticar una migraña vestibular?', options: ['Por la posición al inicio', 'Por el lado del acúfeno', 'Por la duración exacta', 'Por la cefalea durante la crisis'], correct: 3, explanation: 'También por la fotofobia, la fonofobia y el aura. El paciente no relaciona el vértigo con su migraña y no lo cuenta de forma espontánea, lo que explica que se infradiagnostique tanto.', dificultad: 'intermedio' },
  { q: 'Como hay que manejar un vértigo episódico aislado en un paciente con riesgo vascular?', options: ['Como un ataque isquémico transitorio', 'Como una migraña vestibular', 'Con estudio ambulatorio diferido', 'Con maniobras de reposición'], correct: 0, explanation: 'El vértigo puede ser la única manifestación de un accidente isquémico transitorio vertebrobasilar, y el riesgo de infarto precoz obliga al mismo circuito urgente que cualquier otro.', dificultad: 'dificil' },
  {
    type: 'cascade', dificultad: 'dificil',
    vignette: 'Varón de 58 años que consulta por mareo al tumbarse en la cama desde hace dos semanas. Al realizar el Dix-Hallpike aparece de forma inmediata, sin latencia, un nistagmo que bate hacia abajo, que dura más de dos minutos y que no disminuye al repetir la maniobra.',
    steps: [
      { q: 'Que sugiere ese nistagmo?', options: ['Canal posterior derecho', 'Canal horizontal bilateral', 'Cupulolitiasis del superior', 'Un origen central'], correct: 3 },
      { q: 'Que corresponde hacer?', options: ['Repetir la maniobra otro dia', 'Pedir imagen de fosa posterior', 'Iniciar sedantes vestibulares', 'Derivar a rehabilitación'], correct: 1 },
      { q: 'Sería útil la maniobra de Epley aquí?', options: ['Si, si se repite tres veces', 'Si, pero del lado contrario', 'Solo con collarin posterior', 'No, no esta indicada'], correct: 3 }
    ],
    explanation: 'Cuatro rasgos lo alejan a la vez del vértigo posicional benigno: el nistagmo bate HACIA ABAJO, aparece SIN LATENCIA, dura más de un minuto y NO SE AGOTA al repetir. Cualquiera de ellos por separado ya obligaría a desconfiar, y los cuatro juntos definen un nistagmo posicional CENTRAL, que se asocia a lesiones de la fosa posterior y de la unión craneocervical. Lo que corresponde es pedir imagen dirigida a esa región, no insistir con maniobras de reposición. La maniobra de Epley no esta indicada porque no hay otoconios que reposicionar: repetirla solo retrasa el diagnóstico y refuerza una etiqueta equivocada.'
  },
  { q: 'Que prueba de imagen corresponde en un vértigo posicional típico?', options: ['Ninguna', 'Tomografía craneal urgente', 'Resonancia con contraste', 'Angiografía de troncos'], correct: 0, explanation: 'El diagnóstico es de exploración y el tratamiento es una maniobra. La imagen se reserva para los casos atípicos: nistagmo que bate hacia abajo, sin latencia, sin agotamiento o prolongado.', dificultad: 'intermedio' },
  { q: 'Que hay que sospechar ante un vértigo agudo con cefalea o cervicalgia bruscas?', options: ['Una crisis hipertensiva', 'Una otitis complicada', 'Una disección arterial', 'Una migraña con aura'], correct: 2, explanation: 'Sobre todo en pacientes jóvenes o tras un traumatismo o una manipulación cervical. Obliga a pedir estudio de los vasos y no solo imagen del parénquima.', dificultad: 'dificil' },
  { q: 'Que complicación hay que vigilar en las primeras 72 horas de un infarto cerebeloso?', options: ['La transformación hemorrágica', 'El edema con deterioro brusco', 'La neumonía por aspiración', 'La crisis comicial precoz'], correct: 1, explanation: 'Puede producir compresión del tronco e hidrocefalia en un paciente que hasta ese momento parecia estable. Un descenso del nivel de conciencia obliga a repetir la imagen de inmediato.', dificultad: 'dificil' },
  { q: 'Que tratamiento puede salvar la vida en un infarto cerebeloso con edema?', options: ['La hiperventilación mantenida', 'La sedación profunda', 'El suero hipertónico solo', 'La craniectomía descompresiva'], correct: 3, explanation: 'Junto con el drenaje ventricular si hay hidrocefalia. Es una complicación tratable, y anticiparla con vigilancia estrecha es lo que permite intervenir a tiempo.', dificultad: 'dificil' },
  { q: 'Cual es el tratamiento con más respaldo en el mareo crónico?', options: ['La rehabilitación vestibular', 'La betahistina prolongada', 'El reposo relativo', 'El collarin cervical'], correct: 0, explanation: 'Es también el que menos se prescribe. La compensación central necesita movimiento y exposición, de modo que el reposo y los sedantes prolongados son exactamente lo contrario de lo que hace falta.', dificultad: 'intermedio' },
  { q: 'Como se explora la hipotensión ortostática ante un mareo al levantarse?', options: ['Con una prueba de esfuerzo', 'Con la maniobra de Valsalva', 'Midiendo la tensión tras 3 minutos de pie', 'Con un registro de 24 horas'], correct: 2, explanation: 'Se compara con la medida en decúbito y se considera positiva con un descenso de 20 mmHg en la sistólica o de 10 en la diastólica. Es la prueba más barata del tema y una de las más rentables.', dificultad: 'facil' },
  {
    type: 'cascade', dificultad: 'intermedio',
    vignette: 'Mujer de 79 años con ocho meses de inestabilidad continua que empeora al caminar y en entornos con mucho estímulo visual, como el supermercado. Toma tres antihipertensivos y lorazepam por la noche. La tensión arterial es de 130 sobre 75 mmHg en decúbito y de 105 sobre 60 mmHg tras tres minutos de pie. Se le hizo una resonancia craneal hace seis meses que fue normal.',
    steps: [
      { q: 'Que corresponde hacer en primer lugar?', options: ['Solicitar videonistagmografia', 'Iniciar betahistina', 'Revisar la lista de fármacos', 'Pautar reposo relativo'], correct: 2 },
      { q: 'Corresponde repetir la resonancia?', options: ['Si, con contraste', 'No, sin un motivo nuevo', 'Si, cada seis meses', 'Solo si empeora el acúfeno'], correct: 1 },
      { q: 'Que tratamiento tiene más respaldo en este caso?', options: ['La rehabilitación vestibular', 'El collarin cervical blando', 'La sedación nocturna', 'La restricción de sal'], correct: 0 }
    ],
    explanation: 'El mareo crónico del anciano suele ser MULTIFACTORIAL, y buscar una sola explicación suele fracasar. Aquí hay al menos dos causas activas y ambas son corregibles: una hipotensión ortostática evidente, con un descenso de 25 mmHg en la sistólica tras tres minutos de pie, y una benzodiacepina que empeora el equilibrio y frena la compensación. Revisar y retirar fármacos rinde más que cualquier prueba. Repetir una resonancia normal sin un motivo nuevo no resuelve nada y refuerza la preocupación del paciente. Y el tratamiento con más respaldo es la REHABILITACIÓN VESTIBULAR, junto con el trabajo de fuerza y equilibrio y el abordaje del miedo a caer, que forma parte del problema.'
  }
];

export const flashcards = [
  { front: 'La pregunta que hay que dejar de hacer', back: 'Como es el mareo. No discrimina: los pacientes cambian de respuesta.' },
  { front: 'Los dos ejes de la clasificación', back: 'TIEMPO y DESENCADENANTE.' },
  { front: 'Los tres síndromes', back: 'Agudo continuo, episódico espontáneo y episódico provocado.' },
  { front: 'Antes de clasificar', back: 'Descartar el mareo SINTOMÁTICO de una enfermedad general.' },
  { front: 'Síndrome vestibular agudo', back: 'Vértigo continuo de días con nistagmo. La pregunta es neuritis o ictus.' },
  { front: 'Donde vale el HINTS', back: 'Solo en el vértigo continuo CON nistagmo. Fuera de ahi no significa nada.' },
  { front: 'Impulso cefálico NORMAL', back: 'Es lo preocupante: apunta a origen central.' },
  { front: 'Impulso cefálico ANORMAL', back: 'Sacada de corrección: el reflejo esta roto, es PERIFÉRICO.' },
  { front: 'Nistagmo periférico', back: 'Horizontal, siempre en la misma dirección, disminuye al fijar la vista.' },
  { front: 'Nistagmo central', back: 'Cambia de dirección con la mirada, o es vertical o torsional puro.' },
  { front: 'Desviación vertical', back: 'Al destapar el ojo hace un reajuste vertical: CENTRAL. Es el paso que se olvida.' },
  { front: 'Cuantos hallazgos centrales hacen falta', back: 'UNO solo. El patrón periférico exige los tres a la vez.' },
  { front: 'HINTS frente a resonancia precoz', back: 'El HINTS es MÁS sensible en manos entrenadas.' },
  { front: 'HINTS ampliado', back: 'Añade la hipoacusia nueva, que también apunta a central.' },
  { front: 'La bandera roja de cabecera', back: 'No poder sentarse ni caminar sin ayuda. No es una laberintitis.' },
  { front: 'Tomografía craneal en el vértigo', back: 'Apenas ve la fosa posterior. Sirve para descartar hemorragia.' },
  { front: 'Resonancia precoz normal', back: 'NO descarta: en 24 a 48 horas escapan infartos pequeños de fosa posterior.' },
  { front: 'Vértigo con hipoacusia y perfil central', back: 'Territorio de la cerebelosa anteroinferior, que irriga el oído interno.' },
  { front: 'Tratamiento de la neuritis vestibular', back: 'Corticoides precoces y rehabilitación vestibular temprana.' },
  { front: 'Sedantes vestibulares', back: 'Pocos días. Prolongarlos RETRASA la compensación central.' },
  { front: 'Duración de las crisis del vértigo posicional', back: 'Menos de un minuto. Entre crisis el paciente esta bien.' },
  { front: 'Dix-Hallpike positivo del canal posterior', back: 'Nistagmo hacia arriba y torsional, con latencia y agotamiento.' },
  { front: 'Tratamiento del canal posterior', back: 'Maniobra de Epley, en la misma consulta.' },
  { front: 'Dix-Hallpike negativo', back: 'Explorar el canal HORIZONTAL con la rotación en decúbito.' },
  { front: 'Nistagmo posicional que bate hacia abajo', back: 'Sospecha CENTRAL: imagen de fosa posterior, no más maniobras.' },
  { front: 'Imagen en el vértigo posicional típico', back: 'Ninguna. Ni sedantes.' },
  { front: 'Criterios de enfermedad de Meniere', back: 'Crisis de 20 minutos a 12 horas con hipoacusia DOCUMENTADA y síntomas auditivos.' },
  { front: 'Migraña vestibular', back: 'De 5 minutos a 72 horas. Preguntar por cefalea y fotofobia DURANTE la crisis.' },
  { front: 'Vértigo episódico aislado con riesgo vascular', back: 'Puede ser un ataque isquémico transitorio: circuito urgente.' },
  { front: 'Cefalea o cervicalgia bruscas con vértigo', back: 'Pensar en DISECCIÓN vertebral y pedir estudio de vasos.' },
  { front: 'Infarto cerebeloso: que vigilar', back: 'El edema de las primeras 48 a 72 horas. Craniectomía o drenaje si aparece.' },
  { front: 'Mareo crónico del anciano', back: 'Multifactorial. Retirar fármacos y prescribir rehabilitación vestibular.' }
];

export default { quiz, flashcards };
