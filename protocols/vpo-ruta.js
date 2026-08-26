// protocols/vpo-ruta.js
// Ruta perioperatoria: el enfoque por pasos de la evaluación cardiaca preoperatoria,
// declarado como datos para que engine/vpo.js lo recorra como un asistente paso a paso.
//
// Fuente: Thompson A, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for
// Perioperative Cardiovascular Management for Noncardiac Surgery. Circulation.
// 2024;150(19):e351-e442. Sección 5.1 y Figura 1 ("Stepwise Approach to Perioperative
// Cardiac Assessment"), con los umbrales de sus notas al pie.
//
// Advertencia que la propia guía hace sobre esta figura y que la app repite al usuario:
// los desenlaces clínicos del cuidado perioperatorio guiado por este algoritmo no se han
// estudiado ni validado de forma prospectiva, así que no sustituye el juicio clínico.
//
// Contrato:
//   pasos[id] = { id, titulo, pregunta, ayuda?, detalle?, opciones: [{ label, nota?, destino }] }
//   destino   = { paso: '<id>' } | { veredicto: '<id>' }
//   veredictos[id] = { tono, titulo, texto, acciones[]?, nota? }
// `tono` es uno de TONOS y define el color del bloque de resultado.
// Los textos se inyectan con innerHTML: usar &lt; y &gt; en vez de < y >.

export const TONOS = {
  proceder: { label: 'Proceder', color: '#3f6b52' },
  diferir:  { label: 'Diferir',  color: '#8c3a34' },
  estudiar: { label: 'Estudiar', color: '#966b35' }
};

export const FUENTE = 'ACC/AHA 2024 (Thompson A, et al. Circulation. 2024;150(19):e351-e442), sección 5.1 y Figura 1';

export const PRIMER_PASO = 'urgencia';

export const pasos = {
  urgencia: {
    id: 'urgencia',
    titulo: 'Urgencia de la cirugía',
    pregunta: '¿Con cuánto tiempo se cuenta antes de operar?',
    ayuda: 'Es el primer filtro y el que más decisiones ahorra: si no hay tiempo, no hay evaluación que hacer.',
    opciones: [
      { label: 'Emergencia', nota: 'La vida o la viabilidad de un miembro se pierden en horas.',
        destino: { veredicto: 'emergencia' } },
      { label: 'Urgencia', nota: 'Hay margen de 6 a 24 horas, pero no más.',
        destino: { veredicto: 'urgencia' } },
      { label: 'Sensible al tiempo o electiva', nota: 'Hay semanas o meses de margen.',
        destino: { paso: 'agudo' } }
    ]
  },

  agudo: {
    id: 'agudo',
    titulo: 'Condición cardiaca aguda o inestable',
    pregunta: '¿El paciente tiene alguna condición cardiaca aguda o inestable?',
    ayuda: 'Si la hay, manda sobre cualquier escala de riesgo: primero se trata, después se opera.',
    detalle: 'Síndrome coronario agudo · insuficiencia cardiaca descompensada · estenosis aórtica grave o sintomática · arritmia no controlada · hipertensión arterial grave (por ejemplo ≥200/110 mmHg) · disección aórtica aguda · pericarditis o miocarditis · tromboembolia pulmonar · hipertensión pulmonar grave.',
    opciones: [
      { label: 'Sí, hay al menos una', destino: { veredicto: 'diferirAgudo' } },
      { label: 'No, ninguna', destino: { paso: 'riesgo' } }
    ]
  },

  riesgo: {
    id: 'riesgo',
    titulo: 'Riesgo cardiovascular calculado',
    pregunta: '¿El riesgo calculado de evento cardiovascular mayor es elevado?',
    ayuda: 'Aquí se usan las escalas de la pestaña Escalas: el índice de Lee (RCRI) y Gupta-MICA.',
    detalle: 'La guía define el riesgo combinando las características del <strong>paciente y del procedimiento</strong>, no solo el tipo de cirugía: <strong>riesgo bajo</strong> es una probabilidad de evento cardiovascular mayor <strong>menor de 1 %</strong>, y <strong>riesgo elevado</strong> es del <strong>1 % o más</strong> (esto abarca tanto el riesgo quirúrgico intermedio como el alto). El umbral que se usa tradicionalmente para identificarlo es <strong>RCRI &gt;1</strong>, o un riesgo calculado mayor de 1 % con cualquier calculadora perioperatoria; qué cuenta como elevado depende de la calculadora empleada.',
    opciones: [
      { label: 'Bajo', nota: 'Riesgo de evento cardiovascular mayor menor de 1 % (RCRI ≤1).', destino: { veredicto: 'procederBajo' } },
      { label: 'Elevado', nota: 'Riesgo de 1 % o más (RCRI &gt;1).', destino: { paso: 'funcional' } }
    ]
  },

  funcional: {
    id: 'funcional',
    titulo: 'Capacidad funcional',
    pregunta: '¿La capacidad funcional es adecuada?',
    ayuda: 'En cirugía de riesgo elevado es razonable evaluarla de forma estructurada, por ejemplo con el Duke Activity Status Index (recomendación clase 2a). La calculadora DASI de la pestaña Escalas resuelve los dos criterios de una vez.',
    detalle: 'La guía define <strong>mala</strong> capacidad funcional como <strong>menos de 4 MET o un DASI de 34 o menos</strong>: basta con incumplir uno de los dos. La pregunta de cabecera que lo aproxima es si el paciente puede <strong>subir dos pisos de escaleras</strong>, actividad que supera los 4 MET. Los dos criterios no siempre coinciden, y ante la duda la ruta trata la capacidad como mala.',
    opciones: [
      { label: 'Sí', nota: 'Alcanza 4 MET o más <em>y</em> su DASI supera 34.', destino: { veredicto: 'procederFuncional' } },
      { label: 'No, o no se puede determinar', nota: 'Incumple alguno de los dos criterios, o no hay datos para valorarlo.', destino: { paso: 'utilidad' } }
    ]
  },

  utilidad: {
    id: 'utilidad',
    titulo: 'Utilidad de un estudio adicional',
    pregunta: '¿Un estudio adicional cambiaría el manejo?',
    ayuda: 'Es la pregunta que evita el estudio inútil. Si el resultado no va a cambiar nada, el estudio solo retrasa la cirugía y añade riesgo por la cascada de pruebas que desencadena.',
    detalle: 'Biomarcadores: en enfermedad cardiovascular conocida, edad ≥65 años, o edad ≥45 años con síntomas sugestivos, es razonable medir <strong>BNP o NT-proBNP</strong> antes de una cirugía de riesgo elevado (clase 2a), y puede ser razonable medir <strong>troponina</strong> (clase 2b). Umbrales anormales: troponina por encima del percentil 99 del ensayo, BNP &gt;92 ng/L, NT-proBNP ≥300 ng/L.',
    opciones: [
      { label: 'Sí, cambiaría el manejo', destino: { veredicto: 'estudiar' } },
      { label: 'No lo cambiaría', destino: { veredicto: 'procederOptimizado' } }
    ]
  }
};

export const veredictos = {
  emergencia: {
    tono: 'proceder',
    titulo: 'Operar ahora, sin estudios que retrasen',
    texto: 'En la cirugía de emergencia no hay lugar para estratificar el riesgo antes de entrar a quirófano: el retraso hace más daño que el que evita cualquier estudio. La evaluación cardiaca se traslada al posoperatorio.',
    acciones: [
      'Proceder a quirófano y trasladar la evaluación cardiaca al posoperatorio.',
      'Vigilancia perioperatoria estrecha: monitorización hemodinámica y electrocardiográfica.',
      'Continuar los fármacos que no deban suspenderse (ver la pestaña Fármacos).',
      'Si el paciente toma un agonista del receptor de GLP-1, tratarlo como estómago lleno.'
    ]
  },
  urgencia: {
    tono: 'proceder',
    titulo: 'Operar, con la optimización que quepa en el tiempo disponible',
    texto: 'Hay margen de horas, no de días. Solo cabe lo que se pueda corregir en ese tiempo y que cambie el desenlace: volemia, electrolitos, control de frecuencia, transfusión si está indicada.',
    acciones: [
      'Corregir lo reversible en horas: volemia, potasio, magnesio, frecuencia cardiaca, anemia grave.',
      'No pedir estudios cuyo resultado no vaya a llegar a tiempo o no vaya a cambiar la conducta.',
      'Vigilancia perioperatoria estrecha.',
      'Revisar la conducta con cada fármaco en la pestaña Fármacos.'
    ]
  },
  diferirAgudo: {
    tono: 'diferir',
    titulo: 'Diferir la cirugía electiva y tratar la condición aguda',
    texto: 'Una condición cardiaca aguda o inestable manda sobre cualquier escala de riesgo. Operar sin tratarla primero convierte un riesgo calculable en uno que no lo es.',
    acciones: [
      'Tratar la condición aguda según su propia guía antes de reprogramar.',
      'Involucrar a cardiología, y al equipo de válvulas si se trata de estenosis aórtica grave.',
      'Las pruebas de estrés están contraindicadas mientras la condición siga activa.',
      'Reevaluar con esta misma ruta una vez estabilizado.'
    ],
    nota: 'En síndrome coronario agudo con cirugía electiva en puerta, se recomienda revascularizar según corresponda y diferir la cirugía (clase 1).'
  },
  procederBajo: {
    tono: 'proceder',
    titulo: 'Proceder sin más estudios cardiacos',
    texto: 'Con riesgo calculado bajo, ningún estudio cardiaco adicional mejora el desenlace. Pedirlo solo encarece, retrasa y abre una cascada de pruebas.',
    acciones: [
      'Proceder a la cirugía.',
      'No pedir ecocardiograma, prueba de estrés ni biomarcadores de rutina en este escenario.',
      'Continuar el tratamiento crónico según la pestaña Fármacos.'
    ],
    nota: 'La prueba de estrés en el paciente estable de riesgo bajo no ha demostrado mejorar los desenlaces clínicos, tenga o no enfermedad coronaria conocida o factores de riesgo.'
  },
  procederFuncional: {
    tono: 'proceder',
    titulo: 'Proceder: la capacidad funcional conservada basta',
    texto: 'Un paciente que cumple los dos criterios de capacidad funcional de la guía (4 MET o más y un DASI mayor de 34) tiene bajo riesgo de evento cardiovascular perioperatorio aunque su riesgo calculado sea elevado. La capacidad funcional conservada hace innecesario el estudio adicional.',
    acciones: [
      'Proceder a la cirugía.',
      'Continuar estatina y betabloqueador si ya los tomaba.',
      'Revisar la conducta con cada fármaco en la pestaña Fármacos.'
    ]
  },
  estudiar: {
    tono: 'estudiar',
    titulo: 'Pedir el estudio que sí va a cambiar la conducta',
    texto: 'El estudio se justifica únicamente porque su resultado modificará el manejo: diferir la cirugía, revascularizar, cambiar la técnica anestésica o intensificar la vigilancia.',
    acciones: [
      'Biomarcadores: BNP o NT-proBNP (clase 2a); troponina (clase 2b).',
      'Prueba de estrés solo si el resultado va a cambiar la conducta, y con el paciente estable.',
      'Interconsulta a cardiología para decidir en conjunto.',
      'Dejar asentado en la nota qué decisión concreta depende del resultado.'
    ],
    nota: 'La revascularización coronaria preoperatoria de rutina en enfermedad que no es de tronco coronario izquierdo no reduce los eventos perioperatorios (clase 3, sin beneficio).'
  },
  procederOptimizado: {
    tono: 'proceder',
    titulo: 'Proceder con optimización médica y vigilancia',
    texto: 'Si ningún estudio va a cambiar el manejo, pedirlo solo retrasa la cirugía y añade el riesgo de la cascada diagnóstica. Lo que sí cambia el desenlace es optimizar el tratamiento y vigilar de cerca.',
    acciones: [
      'Optimizar el tratamiento médico dirigido por guías antes de la cirugía.',
      'Continuar estatina y betabloqueador si ya los tomaba; no iniciar un betabloqueador el día de la cirugía.',
      'Vigilancia posoperatoria estrecha, con umbral bajo para investigar lesión miocárdica.',
      'Revisar la conducta con cada fármaco en la pestaña Fármacos.'
    ]
  }
};

export default { pasos, veredictos, TONOS, PRIMER_PASO, FUENTE };
