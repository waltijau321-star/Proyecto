// topics/cardiopatia-isquemica/content.js - Cardiopatia isquemica. Segundo tema del bloque II
// (Sistema Cardiovascular), segun .claude/cardiovascular-fuentes.md. Cubre tres items del temario:
// angina estable y pruebas de isquemia; sindromes coronarios agudos y reperfusion; y choque
// cardiogenico.
//
// FUENTES, todas leidas en el PDF de Bibliografia/I. Sistema Cardiovascular/Cardiopatia isquemica/.
// Las cuatro se revisaron buscando clausulas contra la mineria de texto o el uso con IA: ninguna la
// tiene (el unico acierto en la ESC 2023 es texto clinico sobre modelos con troponina).
//   [1] ESC 2023 de SCA (Byrne). Sostiene todo lo agudo: diagnostico, reperfusion, estrategia
//       invasiva, antitromboticos, choque y complicaciones.
//   [2] ESC 2024 de sindrome coronario cronico (Vrints). Sostiene la angina estable, el modelo RF-CL,
//       la eleccion de la prueba, los antianginosos, la revascularizacion y ANOCA/INOCA.
//   [3] ACC/AHA 2025 de SCA (Rao). Se usa SOLO donde la ESC remite a su suplemento, que no esta en el
//       repo: la Tabla 13 (dosis de los fibrinoliticos) y la Tabla 14 (contraindicaciones de la
//       fibrinolisis), y el criterio de reperfusion fallida (<50% de resolucion del ST en derivaciones
//       anteriores, <70% en inferiores).
//   [4] AHA 2017 de choque cardiogenico (van Diepen). Solo para las definiciones del choque (Tabla 1),
//       el choque normotenso y el derecho, y la epidemiologia del choque en el infarto.
//
// LO QUE NO SE PUDO LEER Y SE DECLARA: los cortes numericos del algoritmo 0 h/1 h de troponina estan
// en la Tabla S4 del suplemento de la ESC 2023, que no esta en el repo. El tema explica las tres vias
// (descartar, observar, confirmar) sin inventar cifras, y no hay calculadora de troponina. Tampoco la
// tabla de puntos del GRACE, que la ESC remite al suplemento: el tema usa el corte >140 que la guia si
// da en el texto principal, pero no lo calcula.
//
// PASAJES QUE SOSTIENEN LAS CITAS MAS DELICADAS (frase de la fuente):
//   - Reperfusion, [1] p31: "A PPCI strategy is recommended over fibrinolysis if the anticipated time
//     from diagnosis to PCI is <120 min" (I A); fibrinolisis "within 12 h of symptom onset in patients
//     without contraindications" (I A); "Routine PCI of an occluded IRA is not recommended in STEMI
//     patients presenting >48 h after symptom onset and without persistent symptoms" (III A).
//   - SCASEST, [1] p31: estrategia inmediata con un criterio de muy alto riesgo (I C); precoz en 24 h
//     con uno de alto riesgo, incluido "GRACE risk score >140" (IIa A).
//   - Modelo RF-CL, [2] Figura 4 (p25 del PDF): la tabla se transcribio desde la imagen renderizada y
//     se cotejo casilla por casilla con el texto extraido; las 30 casillas coinciden.
//   - Choque, [1] p45: "The routine use of an IABP in ACS patients with CS and without mechanical
//     complications is not recommended" (III B); y [1] p80: "IRA-only PCI during the index procedure
//     is recommended" en el choque con enfermedad multivaso (I B).
//
// JERARQUIA DE LAS FICHAS, segun el esquema universal de enfermedad: las SEIS primeras son formas de
// la enfermedad o el tratamiento que las une (campos completos); las SEIS ultimas son complicaciones,
// y su `definicion` arranca diciendo de que ficha dependen. El choque cardiogenico general vive en
// `estado-de-choque` y el de la insuficiencia cardiaca aguda en `insuficiencia-cardiaca`.
//
// Texto sin acentos en los comentarios; todo el texto visible va acentuado.

export const meta = {
  id: 'cardiopatia-isquemica',
  titulo: 'Cardiopatía Isquémica',
  subtitulo: 'Medicina Interna',
  accent: '#7d3c2a'
};

export const definicionText = `<p style="margin:0 0 14px;">La cardiopatía isquémica tiene dos caras que el tema separa desde el principio. El <strong>síndrome coronario crónico</strong> engloba al paciente con angina o isquemia reproducible por obstrucción epicárdica, al que tiene angina sin obstrucción (ANOCA/INOCA), al estable tras un síndrome agudo o una revascularización, al que tiene insuficiencia cardiaca de origen isquémico, y al asintomático en quien se descubre enfermedad coronaria. El <strong>síndrome coronario agudo</strong> es el cambio reciente de los síntomas o los signos, con o sin cambios en el electrocardiograma y con o sin elevación de la troponina. Un mismo paciente puede pasar de una cara a otra a lo largo de su vida.</p>
<p style="margin:0 0 14px;">En lo agudo, todo se ordena con <strong>un electrocardiograma en menos de 10 minutos</strong>. Con elevación persistente del ST, o un equivalente, el diagnóstico de trabajo es el infarto con elevación del ST y la prioridad es reperfundir: angioplastia primaria si puede hacerse en menos de 120 minutos desde el diagnóstico, fibrinólisis en menos de 10 minutos si no. Sin elevación del ST, el diagnóstico de trabajo es el síndrome coronario agudo sin elevación del ST, y lo que decide el momento del cateterismo es el riesgo: inmediato si hay un criterio de muy alto riesgo, en menos de 24 horas si hay uno de alto riesgo. La troponina de alta sensibilidad con los algoritmos de 0 y 1 hora confirma o descarta el infarto, pero nunca retrasa la reperfusión.</p>
<p style="margin:0 0 14px;">En lo crónico, la ESC 2024 cambió la puerta de entrada: la probabilidad de enfermedad obstructiva se estima con el modelo <strong>RF-CL</strong>, que pesa el síntoma, la edad, el sexo y el número de factores de riesgo, y con él triplicó la proporción de pacientes que no necesitan más pruebas. Por encima del 5%, la primera prueba es la angio-TC coronaria o una prueba funcional de imagen, no la ergometría. Y en los dos lados el pronóstico se defiende igual: estatina de alta intensidad con un objetivo de LDL por debajo de 55 mg/dL y una reducción de al menos el 50%, antiagregación y rehabilitación cardiaca.</p>`;

export const bibliografia = [
  'Byrne RA, Rossello X, Coughlan JJ, Barbato E, Berry C, Chieffo A, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.',
  'Vrints C, Andreotti F, Koskinas KC, Rossello X, Adamo M, Ainslie J, et al. 2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J. 2024;45(36):3415-3537.',
  'Rao SV, O’Donoghue ML, Ruel M, Rab T, Tamis-Holland JE, Alexander JH, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2025;151. doi:10.1161/CIR.0000000000001309.',
  'van Diepen S, Katz JN, Albert NM, Henry TD, Jacobs AK, Kapur NK, et al. Contemporary Management of Cardiogenic Shock: A Scientific Statement From the American Heart Association. Circulation. 2017;136(16):e232-e268.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Síndrome coronario crónico: el síntoma que hay que puntuar',
      tituloB: 'Síndrome coronario agudo: el electrocardiograma en 10 minutos',
      compensada: 'El dolor torácico anginoso tiene tres rasgos, y cada uno vale un punto en el modelo de la ESC 2024: molestia opresiva retroesternal o en el cuello, la mandíbula, el hombro o el brazo; desencadenada por el estrés físico o emocional; y que cede con el reposo o con nitratos en 5 minutos. La disnea de esfuerzo como síntoma principal vale 2 puntos. Las palabras "típica" y "atípica" se abandonan por engañosas. El síndrome coronario crónico no siempre se presenta como angina clásica: las mujeres con sospecha de angina suelen ser mayores, con más factores de riesgo y comorbilidad, y con más disnea, fatiga y angina microvascular. La gravedad se gradúa con la escala de la Sociedad Cardiovascular Canadiense, de I (solo con esfuerzos intensos) a IV (en reposo).',
      descompensada: 'El síndrome coronario agudo va desde el paciente sin síntomas al llegar hasta el que llega en parada, en choque cardiogénico, en insuficiencia cardiaca aguda o con una arritmia maligna. El dolor de más de 15 minutos o el que se repite en una hora son síntomas de alarma. La angina inestable es la isquemia en reposo o con mínimo esfuerzo sin necrosis: angina de reposo de más de 20 minutos, de nueva aparición y grave, en crescendo, o tras un infarto reciente. La evaluación inicial "A.C.S." pregunta tres cosas a la vez: ¿electrocardiograma anormal?, ¿contexto clínico?, ¿paciente estable? La exploración incluye todos los pulsos, la presión en los dos brazos, la auscultación y los signos de insuficiencia cardiaca o de compromiso circulatorio.'
    },
    laboratorio: [
      { prueba: 'Troponina de alta sensibilidad en la sospecha de SCA', utilidad: 'Se mide nada más llegar y el resultado debe estar en menos de 60 minutos (I B). El infarto es una subida o bajada de la troponina por encima del percentil 99 en un contexto de isquemia. Se habla de troponina "elevada" o "no elevada", no de "normal". La edad, la función renal, el tiempo desde el inicio del dolor y, en menor medida, el sexo cambian sus valores, pero los cambios absolutos siguen teniendo valor diagnóstico y pronóstico.' },
      { prueba: 'Algoritmo 0 h/1 h (o 0 h/2 h)', utilidad: 'Recomendado para confirmar o descartar el infarto sin elevación del ST (I B). Tres vías: DESCARTE con un valor inicial muy bajo (si el dolor empezó hace más de 3 horas) o con un valor inicial bajo sin aumento a la hora; CONFIRMACIÓN con un valor inicial alto o un aumento a la hora; OBSERVACIÓN para el resto, con una tercera medida a las 3 horas (I B) y a menudo ecocardiograma. Los cortes son específicos de cada ensayo de laboratorio. El valor predictivo negativo del descarte supera el 99%; el positivo de la confirmación es del 70 al 75%.' },
      { prueba: 'Analítica básica del síndrome coronario crónico', utilidad: 'Perfil lipídico con colesterol LDL (I A), hemograma con hemoglobina (I B), creatinina con filtrado (I B) y glucemia en ayunas o HbA1c (I B) en todos, y función tiroidea al menos una vez (I B). Si la clínica o el electrocardiograma sugieren un síndrome agudo, derivación urgente y troponina de alta sensibilidad.' },
      { prueba: 'Creatinina y filtrado en el SCA', utilidad: 'Se determinan en todos los pacientes con síndrome coronario agudo porque pesan en el pronóstico y forman parte del GRACE. En la enfermedad renal se usa contraste de baja osmolaridad o isoosmolar al menor volumen posible (I A) y se aplican las mismas estrategias diagnósticas y terapéuticas, ajustando dosis.' },
      { prueba: 'Glucemia en el SCA', utilidad: 'Se valora el estado glucémico de todos al ingreso (I B) y se vigila con frecuencia en el diabético o con glucemia de 200 mg/dL o más (I C).' }
    ],
    no_invasivos: [
      { metodo: 'Electrocardiograma de 12 derivaciones', interpretacion: 'En menos de 10 minutos desde el primer contacto (I B) y repetido si vuelven los síntomas o hay duda (I C). Divide a los pacientes en dos diagnósticos de trabajo: con elevación persistente del ST o un equivalente, y sin ella. Con sospecha de infarto inferior se registran V3R y V4R, y V7 a V9 si se sospecha oclusión y las derivaciones habituales no son concluyentes (I B). En el síndrome sin elevación del ST puede ser normal en más de un tercio.', cutoff: 'Menos de 10 minutos desde el primer contacto' },
      { metodo: 'Probabilidad clínica de enfermedad coronaria obstructiva, modelo RF-CL (calculadora disponible)', interpretacion: 'Recomendado para estimar la probabilidad previa a la prueba (I B). Muy baja, 5% o menos: diferir más pruebas (IIa B). Baja, más de 5 a 15%: considerar el índice de calcio coronario para reclasificar (IIa B). Moderada, más de 15 a 50%: angio-TC o prueba funcional. Alta, más de 50 a 85%: prueba funcional de imagen. Muy alta, más de 85%: coronariografía.', cutoff: '5%, 15%, 50% y 85%' },
      { metodo: 'Ergometría', interpretacion: 'Útil para valorar la tolerancia al esfuerzo, los síntomas, las arritmias, la respuesta de la presión y el riesgo (I C), pero no se recomienda para diagnosticar con una depresión del ST de 0,1 mV o más en reposo, bloqueo de rama izquierda o digital (III C), ni para descartar la enfermedad con probabilidad de 5 a 50% si hay angio-TC o prueba funcional de imagen (III C).', cutoff: 'Alto riesgo: puntuación de Duke por debajo de -10' },
      { metodo: 'Criterios de muy alto y alto riesgo del SCASEST (calculadora disponible)', interpretacion: 'MUY ALTO riesgo: inestabilidad hemodinámica o choque, dolor recurrente o refractario, arritmias que amenazan la vida, complicaciones mecánicas, insuficiencia cardiaca aguda por isquemia, o cambios dinámicos del ST o la T, sobre todo elevación intermitente del ST: estrategia invasiva inmediata (I C). ALTO riesgo: infarto confirmado por el algoritmo de troponina, cambios dinámicos del ST o la T, elevación transitoria del ST o GRACE por encima de 140: debe considerarse en menos de 24 horas (IIa A).', cutoff: 'GRACE por encima de 140' },
      { metodo: 'Estrategia de reperfusión en el IAMCEST (calculadora disponible)', interpretacion: 'Reperfusión en todo paciente con síntomas de 12 horas o menos (I A). Angioplastia primaria si el tiempo previsto del diagnóstico a la angioplastia es de menos de 120 minutos (I A); si no, fibrinólisis en menos de 12 horas del inicio, sin contraindicaciones (I A). De 12 a 48 horas debe considerarse la angioplastia sistemática (IIa B); más allá de 48 horas sin síntomas, no se abre la arteria ocluida (III A).', cutoff: '120 minutos del diagnóstico a la angioplastia' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma', hallazgos: 'Urgente en el síndrome agudo con choque cardiogénico o sospecha de complicación mecánica (I C). Antes del alta, en todos, para medir la FEVI, que es un factor pronóstico clave, y descartar complicaciones mecánicas y trombo. En el crónico, ecocardiograma en reposo en todos (I B): FEVI, volúmenes, función diastólica, alteraciones segmentarias, cardiopatía no coronaria, ventrículo derecho y presión pulmonar.' },
      { modalidad: 'Angio-TC coronaria', hallazgos: 'En el síndrome crónico con probabilidad baja o moderada (más de 5 a 50%), es la prueba preferida para diagnosticar o descartar la enfermedad obstructiva y estimar el riesgo (I A). No se recomienda con filtrado por debajo de 30, insuficiencia cardiaca descompensada, calcificación extensa, frecuencia rápida e irregular, obesidad grave o incapacidad de mantener la apnea (III C). En el síndrome agudo, la angio-TC precoz sistemática no se recomienda (III B).' },
      { modalidad: 'Pruebas funcionales de imagen', hallazgos: 'Ecocardiograma de estrés, SPECT o, preferiblemente, PET de perfusión, y resonancia de perfusión, recomendados con probabilidad moderada o alta (más de 15 a 85%) para diagnosticar y cuantificar la isquemia y estimar el riesgo (I B). Criterios de alto riesgo: isquemia de 10% o más del miocardio en SPECT o PET; 3 o más de 16 segmentos con hipocinesia o acinesia en el eco de estrés; 2 o más de 16 segmentos con defecto de perfusión en la resonancia.' },
      { modalidad: 'Coronariografía invasiva', hallazgos: 'Por acceso radial (I A). En el crónico, con probabilidad muy alta (más de 85%), síntomas graves refractarios, angina con poco esfuerzo o riesgo alto (I C), con evaluación funcional de las estenosis intermedias: FFR de 0,8 o menos o iFR de 0,89 o menos (I A). En el agudo, es el patrón de referencia y se hace según el momento que dicte el riesgo.' },
      { modalidad: 'Resonancia magnética cardiaca', hallazgos: 'En el MINOCA, si tras la coronariografía no está claro el diagnóstico (I B): identifica la causa en hasta el 87% y debe hacerse cuanto antes, idealmente en el mismo ingreso. Es el patrón de referencia para el trombo del ventrículo izquierdo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'Las escalas de este tema contestan preguntas distintas. <strong>¿Qué probabilidad hay de enfermedad obstructiva?</strong>, que es el modelo RF-CL y decide la primera prueba. <strong>¿Es un infarto con elevación del ST?</strong>, que son los criterios del electrocardiograma y deciden la reperfusión. <strong>¿Cuándo cateterizo un SCASEST?</strong>, que son los criterios de muy alto y alto riesgo. <strong>¿Angioplastia o fibrinólisis?</strong>, que es el reloj de los 120 minutos. Y <strong>¿es choque?</strong>, que son las definiciones del choque cardiogénico.',
    escalas: [
      { nombre: 'Probabilidad clínica de enfermedad coronaria obstructiva, RF-CL (calculadora disponible)', componentes: 'Puntuación del síntoma (0 a 3 por dolor torácico, o 2 si el síntoma principal es la disnea de esfuerzo), sexo, edad de 30 a 80 años y número de factores de riesgo (historia familiar, tabaquismo, dislipidemia, hipertensión y diabetes).', formula: 'Tabla de la Figura 4 de la ESC 2024: resultado en porcentaje.', interpretacion: 'Muy baja, 5% o menos; baja, más de 5 a 15%; moderada, más de 15 a 50%; alta, más de 50 a 85%; muy alta, más de 85%. Frente al modelo anterior, triplica los pacientes clasificados como muy baja probabilidad (38% frente a 12%), y predice tasas anuales de infarto o muerte de 0,5%, 1,1% y 2,1% en muy baja, baja y moderada. Se ajusta al alza con hipercolesterolemia familiar, enfermedad renal grave, enfermedades inflamatorias y arteriopatía periférica, y a la baja con un calcio coronario de 0, que tiene un valor predictivo negativo de más del 95%.' },
      { nombre: 'Graduación de la angina de la Sociedad Cardiovascular Canadiense', componentes: 'Esfuerzo que desencadena la angina.', formula: 'Grado I a IV.', interpretacion: 'I: solo con esfuerzos intensos, rápidos o prolongados. II: limitación ligera de la actividad ordinaria cuando se hace rápido, tras comer, con frío o viento, con estrés emocional o en las primeras horas de la mañana, o al subir más de un piso a paso normal. III: con esfuerzos leves, dificultad para caminar una o dos manzanas o subir un piso. IV: en reposo. La angina de comienzo reciente o que cambia de frecuencia o intensidad sugiere una placa que se desestabiliza y entra en el algoritmo del síndrome agudo.' },
      { nombre: 'Elevación del ST que sugiere oclusión coronaria', componentes: 'Elevación nueva en el punto J en al menos dos derivaciones contiguas.', formula: 'V2-V3: 2,5 mm o más en varones de menos de 40 años, 2 mm o más en varones de 40 o más, 1,5 mm o más en mujeres. Resto de derivaciones: 1 mm o más.', interpretacion: 'Sin hipertrofia ventricular ni bloqueo de rama izquierda. Hay equivalentes que también mandan a reperfundir: descenso del ST en V1 a V3 con onda T terminal positiva o elevación en V7 a V9 (oclusión posterior, a menudo la circunfleja); elevación en V3R y V4R (isquemia del ventrículo derecho); descenso de 1 mm o más en 6 o más derivaciones con elevación en aVR o V1 (enfermedad multivaso o del tronco). Y con bloqueo de rama izquierda, derecha o marcapasos con síntomas muy sugestivos se actúa como si hubiera elevación, aunque el bloqueo sea antiguo.' },
      { nombre: 'Estrategia invasiva en el SCASEST según el riesgo (calculadora disponible)', componentes: 'Criterios de muy alto riesgo y de alto riesgo.', formula: 'Muy alto: inmediata. Alto: en menos de 24 h. Ni uno ni otro: según la sospecha.', interpretacion: 'Un solo criterio de MUY ALTO riesgo obliga a la coronariografía inmediata (I C). Uno de ALTO riesgo hace que deba considerarse en menos de 24 horas (IIa A) y obliga a hacerla durante el ingreso (I A). Sin criterios: estrategia invasiva en el ingreso si la sospecha de angina inestable es alta (I A), o selectiva tras una prueba de isquemia o angio-TC si es baja (I A). La estrategia precoz no reduce la mortalidad en el conjunto, pero sí la isquemia recurrente y la estancia, con un posible beneficio de supervivencia en los de GRACE por encima de 140.' },
      { nombre: 'Tiempos de la reperfusión en el IAMCEST', componentes: 'Lugar del primer contacto y tiempo previsto hasta la angioplastia.', formula: 'Diagnóstico a angioplastia: menos de 120 min. Diagnóstico a bolo de fibrinolítico: menos de 10 min.', interpretacion: 'En un centro con hemodinámica, menos de 60 minutos hasta el paso de la guía; trasladado desde otro centro o la ambulancia, menos de 90. Si la angioplastia no es posible en 120 minutos, fibrinólisis y traslado inmediato a un centro con hemodinámica sin esperar signos de reperfusión. Tras la fibrinólisis: angioplastia de rescate si falla (resolución del ST de menos del 50% a los 60 a 90 minutos) o hay inestabilidad (I A); coronariografía entre 2 y 24 horas si funciona (I A).' },
      { nombre: 'Contraindicaciones de la fibrinólisis (calculadora disponible)', componentes: 'Tabla 14 de la ACC/AHA 2025.', formula: 'Una absoluta contraindica; las relativas se sopesan.', interpretacion: 'ABSOLUTAS: cualquier hemorragia intracraneal previa; lesión vascular cerebral estructural; neoplasia intracraneal maligna; ictus isquémico en los 3 meses previos (salvo el agudo de menos de 4,5 h); sospecha de disección aórtica; sangrado activo o diátesis hemorrágica (sin contar la menstruación); traumatismo craneal o facial importante en 3 meses; cirugía intracraneal o intraespinal en 2 meses; hipertensión grave que no responde (sistólica de más de 180 o diastólica de más de 110). RELATIVAS: hipertensión crónica grave mal controlada, hipertensión importante al llegar, ictus isquémico de más de 3 meses, demencia, reanimación traumática o de más de 10 minutos, cirugía mayor en 3 semanas, sangrado interno en 2 a 4 semanas, punciones vasculares no compresibles, embarazo, úlcera péptica activa y anticoagulación oral.' },
      { nombre: 'Definiciones del choque cardiogénico', componentes: 'Criterios clínicos y hemodinámicos de los ensayos (Tabla 1 de la AHA 2017).', formula: 'Sistólica por debajo de 90 mmHg 30 minutos o más, o necesidad de catecolaminas, más hipoperfusión; índice cardiaco de 2,2 o menos con enclavamiento de 15 mmHg o más.', interpretacion: 'Definición pragmática: un trastorno cardiaco que causa evidencia clínica y bioquímica de hipoperfusión tisular. Criterios del ensayo SHOCK: sistólica por debajo de 90 durante 30 minutos o más, o catecolaminas para mantenerla por encima de 90, con congestión pulmonar y daño orgánico (alteración mental, piel fría, diuresis de menos de 30 mL/h o lactato de más de 2,0 mmol/L). Hay dos formas que esa definición no captura bien: el choque NORMOTENSO, con hipoperfusión y sistólica de más de 90 (5,2% en el registro SHOCK), y el choque del VENTRÍCULO DERECHO (5,3% de los choques por infarto).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Síndrome coronario crónico con enfermedad obstructiva',
      color: '#7d3c2a',
      definicion: 'Angina o isquemia reproducible con el esfuerzo por enfermedad coronaria epicárdica obstructiva, y el paciente estable tras un síndrome agudo o una revascularización. Es una de las cinco presentaciones del síndrome coronario crónico de la ESC 2024; la angina sin obstrucción tiene ficha propia.',
      fisiopatologia: 'La aterosclerosis epicárdica obstructiva limita el flujo cuando aumenta la demanda. Pero la isquemia crónica tiene más mecanismos: el vasoespasmo epicárdico dinámico, la disfunción microvascular, que hoy se reconoce en todo el espectro, y factores sistémicos como la anemia, la taquicardia, los cambios de presión, la hipertrofia y la fibrosis. Por eso los síntomas no siempre señalan el mecanismo.',
      epidemiologia: 'La prevención actual ha reducido la prevalencia ajustada por edad de enfermedad obstructiva en los pacientes con sospecha de síndrome crónico, y eso obligó a actualizar los modelos de probabilidad. Con el modelo RF-CL, el 38% de los pacientes queda en probabilidad muy baja, frente al 12% del modelo anterior, y las tasas anuales de infarto o muerte son de 0,5%, 1,1% y 2,1% en probabilidad muy baja, baja y moderada.',
      factores_riesgo: [
        'Historia familiar: un familiar de primer grado con enfermedad coronaria precoz (varón de menos de 55 años, mujer de menos de 65)',
        'Tabaquismo actual o previo',
        'Dislipidemia',
        'Hipertensión arterial',
        'Diabetes',
        'Los que el modelo no recoge y suben la probabilidad: hipercolesterolemia familiar, enfermedad renal grave, enfermedades reumáticas o inflamatorias y arteriopatía periférica'
      ],
      clinica: 'Molestia opresiva retroesternal o en el cuello, la mandíbula, el hombro o el brazo, desencadenada por el esfuerzo físico o emocional y que cede con el reposo o los nitratos en 5 minutos; o disnea de esfuerzo como equivalente. Se gradúa con la escala canadiense. En las mujeres son más frecuentes la disnea y la fatiga. Un electrocardiograma en reposo normal tras un episodio es frecuente; puede haber signos de infarto previo, bloqueos o fibrilación auricular.',
      criterios_dx: 'Estimar la probabilidad con el modelo RF-CL (I B) y ajustarla con la exploración, el electrocardiograma, el ecocardiograma o las calcificaciones vistas en pruebas previas (I C). Con 5% o menos, diferir más pruebas (IIa B). Por encima de 5%, angio-TC o prueba funcional de imagen como primera prueba (I B): la angio-TC es la preferida para descartar con probabilidad de 5 a 50% (I B), y las pruebas funcionales con probabilidad de 15 a 85% (I B). Coronariografía con probabilidad de más de 85%, síntomas graves refractarios o riesgo alto (I C).',
      laboratorio: 'Perfil lipídico con LDL (I A), hemograma (I B), creatinina con filtrado (I B), glucemia en ayunas o HbA1c (I B) en todos, y función tiroidea al menos una vez (I B), para afinar el riesgo, diagnosticar comorbilidades y guiar el tratamiento. Troponina de alta sensibilidad si el cuadro sugiere un síndrome agudo.',
      imagen: 'Ecocardiograma en reposo en todos (I B). Angio-TC coronaria con probabilidad de 5 a 50% (I A). Ecocardiograma de estrés, SPECT o PET, o resonancia de perfusión con probabilidad de 15 a 85% (I B). Coronariografía por acceso radial con FFR o iFR en las estenosis intermedias (I A).',
      complementarios: 'Electrocardiograma en reposo (I C). Holter si se sospechan arritmias (I C). La ergometría sirve para el pronóstico y los síntomas (I C), no para diagnosticar con alteraciones del ST en reposo, bloqueo de rama izquierda o digital (III C), ni para descartar si hay angio-TC o imagen funcional (III C). El descenso del ST durante una taquicardia supraventricular no es una prueba fiable de enfermedad obstructiva (III B).',
      dx_diferencial: 'El síndrome coronario agudo: la angina de comienzo reciente o que cambia de frecuencia o intensidad sugiere una placa que se desestabiliza y debe seguir el algoritmo del síndrome agudo. La angina sin obstrucción (ANOCA/INOCA). Y las causas no coronarias de isquemia o de dolor: anemia, valvulopatía, miocardiopatía hipertrófica, arritmias.',
      tx_medico: 'Discusión informada del riesgo (I C), intervenciones conductuales multidisciplinarias (I A) y programa de ejercicio supervisado (I A). Actividad aeróbica de 150 a 300 minutos semanales de intensidad moderada o de 75 a 150 de intensidad vigorosa, y menos tiempo sedentario (I B).',
      tx_farmacologico: 'SÍNTOMAS. Nitratos de acción corta para la crisis (I B). Betabloqueador o calcioantagonista como tratamiento inicial para controlar la frecuencia y los síntomas (I B), buscando una frecuencia en reposo de 55 a 60 latidos por minuto. Nitratos de acción prolongada o ranolazina como añadido (IIa B); nicorandil o trimetazidina (IIb B). La ivabradina no se recomienda como añadido con FEVI de más de 40% sin insuficiencia cardiaca (III B), ni con verapamilo o diltiazem (III B); los nitratos, no en la miocardiopatía hipertrófica ni con inhibidores de la fosfodiesterasa (III B). PRONÓSTICO. Aspirina 75 a 100 mg de por vida tras un infarto o una angioplastia (I A) o con enfermedad obstructiva significativa (I B), con clopidogrel 75 mg como alternativa (I A). Tras un stent, doble antiagregación con aspirina y clopidogrel hasta 6 meses (I A), o de 1 a 3 meses con riesgo hemorrágico alto (I A). Estatina de alta intensidad con objetivo de LDL por debajo de 55 mg/dL y reducción de al menos 50% (I A); ezetimiba si no se alcanza (I B), luego un inhibidor de PCSK9 (I A); ácido bempedoico en el intolerante a estatinas (I B). iSGLT2 y agonistas del GLP-1 con beneficio cardiovascular en el diabético tipo 2 (I A). IECA o ARA-II con hipertensión, diabetes o insuficiencia cardiaca (I A).',
      tx_intervencionista: 'Revascularización, además del tratamiento médico, con FEVI de más de 35%: en la estenosis funcionalmente significativa del tronco para mejorar la supervivencia (I A), en la enfermedad de tres vasos y en la de uno o dos vasos con la descendente anterior proximal para reducir la mortalidad cardiovascular (I A). Con angina persistente pese al tratamiento, revascularizar la enfermedad funcionalmente significativa para mejorar los síntomas (I A). Con FEVI de 35% o menos y enfermedad multivaso, cirugía de revascularización mejor que el tratamiento médico solo si es candidato (I B). En los casos complejos decide el Heart Team.',
      criterios_uci: 'No aplica en la enfermedad estable; si cambian los síntomas, pasa al algoritmo del síndrome coronario agudo.',
      criterios_tips: 'Resultados de alto riesgo que llevan a la coronariografía: ergometría con puntuación de Duke por debajo de -10; isquemia de 10% o más del ventrículo en SPECT o PET; 3 o más de 16 segmentos con alteración en el eco de estrés; 2 o más de 16 con defecto de perfusión o 3 o más disfuncionales con dobutamina en la resonancia; en la angio-TC, tronco con 50% o más, tres vasos con 70% o más, dos vasos con 70% o más incluida la descendente anterior proximal, o un vaso de la descendente anterior proximal con 70% o más y FFR-TC de 0,8 o menos.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica: es un manejo ambulatorio salvo que se programe una revascularización.',
      seguimiento_ambulatorio: 'Visitas periódicas, por ejemplo anuales, con independencia de los síntomas, para revisar el control de los factores de riesgo y los cambios de riesgo, enfermedad y comorbilidad (I C). Nueva estratificación con imagen de estrés si aparecen o empeoran los síntomas (I C). Reevaluar la enfermedad coronaria si la FEVI cae sin causa reversible (I C). Para la adherencia, intervenciones de salud móvil (I A) y simplificar el tratamiento con combinaciones fijas (I B).',
      pronostico: 'Ligado a la probabilidad inicial y a los resultados de alto riesgo de las pruebas: las tasas anuales de infarto o muerte van del 0,5% en probabilidad muy baja al 2,1% en moderada.',
      algoritmo: [
        'Síntoma sospechoso: descartar primero un síndrome agudo',
        'Puntuar el síntoma y contar los factores de riesgo: probabilidad RF-CL',
        'Ajustar con la exploración, el electrocardiograma, el ecocardiograma o el calcio coronario',
        '5% o menos: diferir pruebas; de 5 a 15%: considerar el calcio coronario',
        'De 5 a 50%: angio-TC preferida; de 15 a 85%: prueba funcional de imagen',
        'Más de 85%, síntomas refractarios o alto riesgo: coronariografía con FFR o iFR',
        'Tratar síntomas y pronóstico: nitrato corto, betabloqueador o calcioantagonista, aspirina, estatina de alta intensidad'
      ]
    },
    {
      nombre: 'Angina e isquemia sin enfermedad coronaria obstructiva (ANOCA/INOCA)',
      color: '#8c5a2e',
      definicion: 'Angina o isquemia con coronarias normales o con lesiones no obstructivas, o con estenosis intermedias de FFR o iFR normal. No es un diagnóstico de descarte sino un conjunto de mecanismos tratables, los endotipos: la angina vasoespástica, la angina microvascular con reserva de flujo reducida y la disfunción endotelial, que con frecuencia se solapan.',
      fisiopatologia: 'Alteraciones vasomotoras epicárdicas o alteraciones funcionales y estructurales de la microcirculación que causan angina e isquemia sin obstrucción de las arterias grandes o medianas. Sus síntomas se solapan con los de la angina obstructiva, así que la clínica no basta para distinguirlas.',
      epidemiologia: 'En el registro ILIAS, la ANOCA estaba presente hasta en el 70% de los pacientes remitidos a coronariografía con pruebas funcionales. La angina microvascular es más frecuente en las mujeres.',
      factores_riesgo: [
        'Sexo femenino',
        'Los factores de riesgo cardiovascular clásicos',
        'Coronarias sin obstrucción en una angio-TC o una coronariografía previas'
      ],
      clinica: 'Angina persistente pese al tratamiento con coronarias sin obstrucción, a menudo con mala calidad de vida. En la angina vasoespástica, episodios repetidos de angina en reposo con cambios del ST que ceden con nitratos o calcioantagonistas.',
      criterios_dx: 'En el paciente persistentemente sintomático con mala calidad de vida, se recomienda la prueba funcional coronaria invasiva para identificar endotipos tratables (I B). Para la vasoespástica: electrocardiograma durante la angina (I C) y, con angina de reposo repetida y cambios del ST que ceden con nitratos o calcioantagonistas, prueba funcional invasiva para confirmarla y conocer la aterosclerosis subyacente (I C); el Holter del ST debe considerarse con síntomas frecuentes (IIa B).',
      laboratorio: 'La misma analítica básica del síndrome coronario crónico: perfil lipídico, hemograma, función renal, glucemia y función tiroidea. La prueba funcional invasiva mide la reserva de flujo, la resistencia microvascular y la respuesta a la acetilcolina.',
      imagen: 'La reserva de flujo coronario puede estimarse de forma no invasiva con Doppler transtorácico de la descendente anterior, eco de estrés, resonancia o PET (IIb B).',
      complementarios: 'Coronariografía con pruebas funcionales: guía de presión para la reserva de flujo y la resistencia microvascular, y provocación de espasmo con acetilcolina.',
      dx_diferencial: 'La angina obstructiva no detectada, las causas no cardiacas de dolor y, si hay troponina elevada, el MINOCA, que es un síndrome agudo.',
      tx_medico: 'Control de los factores de riesgo y del estilo de vida, como en cualquier síndrome coronario crónico.',
      tx_farmacologico: 'Debe considerarse un tratamiento guiado por el resultado de la prueba funcional (IIa A). ANGINA VASOESPÁSTICA aislada: calcioantagonistas para controlar los síntomas y prevenir la isquemia y sus complicaciones potencialmente mortales (I A), y nitratos para prevenir las recurrencias (IIa B). Angina MICROVASCULAR con reserva reducida: antianginosos que eviten la isquemia por demanda (IIa B). DISFUNCIÓN ENDOTELIAL: IECA (IIa B). ENDOTIPOS SOLAPADOS: combinación de nitratos, calcioantagonistas y otros vasodilatadores (IIb B).',
      tx_intervencionista: 'No hay lesión que revascularizar; lo invasivo es diagnóstico.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Ajustar el tratamiento al endotipo y a la respuesta de los síntomas; en la angina refractaria con mala calidad de vida, prueba funcional invasiva si aún no se hizo.',
      pronostico: 'La calidad de vida mejora cuando el tratamiento se guía por el endotipo; el vasoespasmo no tratado puede tener complicaciones potencialmente mortales.',
      algoritmo: [
        'Angina persistente con coronarias sin obstrucción o FFR normal',
        'Electrocardiograma durante el dolor si se sospecha vasoespasmo',
        'Prueba funcional coronaria invasiva para definir el endotipo',
        'Vasoespástica: calcioantagonista y nitratos',
        'Microvascular: antianginosos; disfunción endotelial: IECA'
      ]
    },
    {
      nombre: 'Síndrome coronario agudo sin elevación del ST',
      color: '#9c3a2e',
      definicion: 'Diagnóstico de trabajo del paciente con dolor torácico agudo, o su equivalente, sin elevación persistente del ST. Termina en infarto sin elevación del ST si la troponina sube y baja por encima del percentil 99, o en angina inestable si no lo hace; con la troponina de alta sensibilidad, la angina inestable es cada vez menos frecuente. No todos terminan con un diagnóstico de síndrome coronario.',
      fisiopatologia: 'Aterotrombosis coronaria (infarto tipo 1) sin oclusión total persistente, con isquemia en reposo o con mínimo esfuerzo. La angina inestable es isquemia sin necrosis aguda de los cardiomiocitos.',
      epidemiologia: 'La enfermedad cardiovascular es la primera causa de muerte en los países de la ESC, y la cardiopatía isquémica causa el 38% de las muertes cardiovasculares en las mujeres y el 44% en los varones. En 2019 hubo unos 5,8 millones de casos nuevos de cardiopatía isquémica en esos 57 países.',
      factores_riesgo: [
        'Edad avanzada, taquicardia, hipotensión y clase Killip por encima de I',
        'Infarto previo e insuficiencia cardiaca previa',
        'Creatinina elevada al ingreso',
        'Arteriopatía periférica y anemia',
        'Infarto anterior'
      ],
      clinica: 'Angina de reposo prolongada, angina de nueva aparición y grave, angina en crescendo o angina tras un infarto reciente; en el diabético son más frecuentes los síntomas inespecíficos. El electrocardiograma puede mostrar descenso del ST, elevación transitoria, ondas T invertidas, bifásicas, aplanadas o seudonormalizadas, o el signo de Wellens (T bifásicas o negativas profundas en la estenosis de la descendente anterior proximal), o ser normal en más de un tercio.',
      criterios_dx: 'Clínica, signos vitales, exploración, electrocardiograma y troponina de alta sensibilidad combinados (I B). El infarto sin elevación del ST se confirma o descarta con el algoritmo 0 h/1 h o 0 h/2 h (I B), con una tercera medida a las 3 horas si las dos primeras no son concluyentes (I B). Debe considerarse el GRACE para el pronóstico (IIa B).',
      laboratorio: 'Troponina de alta sensibilidad al llegar, con resultado en menos de 60 minutos (I B), y en serie según el algoritmo; una nueva muestra si el dolor persiste o reaparece. Creatinina y filtrado, glucemia y hemograma.',
      imagen: 'Ecocardiograma urgente si hay choque o sospecha de complicación mecánica (I C), y en la vía de observación del algoritmo de troponina. La angio-TC puede ayudar en los de probabilidad baja o intermedia de la vía de observación, pero la angio-TC precoz sistemática no se recomienda (III B).',
      complementarios: 'Monitorización electrocardiográfica continua con desfibrilador disponible en la sospecha con cambios del ECG o dolor persistente, y una vez diagnosticado el infarto (I B).',
      dx_diferencial: 'El daño miocárdico no isquémico (miocarditis, sepsis, takotsubo, valvulopatía, arritmias, insuficiencia cardiaca) y el infarto tipo 2 por anemia, hipoxia, hipotensión o taquicardia. La embolia pulmonar, que también eleva la troponina.',
      tx_medico: 'Oxígeno solo con saturación por debajo del 90% (I C); no de rutina por encima (III A). Opioides intravenosos para el dolor (IIa C) y un ansiolítico suave en el paciente muy ansioso (IIa C).',
      tx_farmacologico: 'Aspirina, dosis de carga de 150 a 300 mg oral (o de 75 a 250 intravenosa) y mantenimiento de 75 a 100 mg al día (I A). Un inhibidor del P2Y12 con dosis de carga y 12 meses de doble antiagregación salvo riesgo hemorrágico alto (I A): ticagrelor 180 mg y 90 mg cada 12 h sea cual sea la estrategia (I B); prasugrel 60 mg y 10 mg al día en quien va a angioplastia sin P2Y12 previo (I B); clopidogrel 300 a 600 mg y 75 mg si los otros no pueden usarse (I C). NO se pretrata con P2Y12 si la anatomía es desconocida y el cateterismo será en menos de 24 h (III A). Anticoagulación parenteral desde el diagnóstico (I A); si el cateterismo no será en 24 h, fondaparinux 2,5 mg subcutáneo al día (I B).',
      tx_intervencionista: 'Inmediata con un criterio de muy alto riesgo (I C); en menos de 24 horas con uno de alto riesgo (IIa A) y siempre en el ingreso (I A); selectiva sin criterios y con sospecha baja (I A). Acceso radial (I A) y stent farmacoactivo (I A).',
      criterios_uci: 'Los de muy alto riesgo y todo paciente de alto riesgo: unidad coronaria o de cuidados cardiacos intensivos con monitorización electrocardiográfica al menos 24 horas (I C).',
      criterios_tips: 'Criterios de muy alto riesgo: inestabilidad o choque, dolor recurrente o refractario, arritmias que amenazan la vida, complicaciones mecánicas, insuficiencia cardiaca aguda por isquemia, cambios dinámicos recurrentes del ST o la T.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización y vigilancia del dolor, el ECG y la hemodinámica; FEVI antes del alta en todos. A DÓNDE LLEVA: las fichas de tratamiento antitrombótico y prevención secundaria, de arritmias y de insuficiencia cardiaca en el SCA.',
      seguimiento_ambulatorio: 'Rehabilitación cardiaca (I A) y la prevención secundaria de la ficha de tratamiento antitrombótico.',
      pronostico: 'Los pacientes de la vía de observación del algoritmo de troponina tienen una mortalidad comparable a la de los de la vía de confirmación, y por eso merecen una evaluación individual. La estrategia invasiva sistemática reduce los eventos isquémicos combinados, sobre todo en los de alto riesgo, aunque no la mortalidad total.',
      algoritmo: [
        'Dolor torácico agudo sin elevación persistente del ST: SCASEST como diagnóstico de trabajo',
        'Buscar criterios de muy alto riesgo: si hay uno, coronariografía inmediata',
        'Troponina de alta sensibilidad 0 h/1 h: descartar, observar o confirmar',
        'Criterio de alto riesgo: coronariografía en menos de 24 horas',
        'Aspirina, anticoagulación parenteral y P2Y12 sin pretratamiento si el cateterismo será precoz',
        'Sin criterios y con sospecha baja: estrategia selectiva tras prueba de isquemia o angio-TC'
      ]
    },
    {
      nombre: 'Infarto agudo de miocardio con elevación del ST',
      color: '#8c2e2e',
      definicion: 'Diagnóstico de trabajo del paciente con dolor torácico agudo, o su equivalente, y elevación persistente del ST o un equivalente en el electrocardiograma. La inmensa mayoría tendrá necrosis y elevación de la troponina, aunque no todos acabarán con un diagnóstico de infarto. La prioridad es reperfundir cuanto antes.',
      fisiopatologia: 'Oclusión coronaria aguda en curso por aterotrombosis. El tiempo total de isquemia, desde el inicio de los síntomas hasta la reperfusión, suma el retraso del paciente, el del sistema de emergencias y el del sistema sanitario, y todo el manejo está organizado para acortarlo.',
      epidemiologia: 'La cardiopatía isquémica es la primera causa de muerte cardiovascular. Las complicaciones mecánicas aparecen en el 0,27% de los infartos con elevación del ST, con una mortalidad hospitalaria del 42,4%. Del 6 al 8% desarrollan taquicardia o fibrilación ventricular con repercusión hemodinámica.',
      factores_riesgo: [
        'Los factores de riesgo coronario clásicos',
        'Infarto anterior, de peor pronóstico',
        'Edad avanzada, taquicardia, hipotensión y clase Killip por encima de I',
        'Retraso en consultar: el dolor de más de 15 minutos debe hacer pedir ayuda'
      ],
      clinica: 'Dolor torácico persistente o su equivalente, que puede presentarse como parada cardiaca, choque, insuficiencia cardiaca aguda o arritmia maligna.',
      criterios_dx: 'Elevación nueva del ST en el punto J en al menos dos derivaciones contiguas: en V2-V3, 2,5 mm o más en varones de menos de 40 años, 2 mm o más en varones de 40 o más y 1,5 mm o más en mujeres; en el resto, 1 mm o más; sin hipertrofia ni bloqueo de rama izquierda. Los equivalentes también mandan a reperfundir: oclusión posterior (descenso del ST en V1-V3 con T terminal positiva, elevación en V7-V9), isquemia del ventrículo derecho (elevación en V3R y V4R), y bloqueo de rama o marcapasos con síntomas muy sugestivos. El resultado de la troponina no es necesario para decidir la reperfusión y no debe retrasarla.',
      laboratorio: 'Troponina de alta sensibilidad, que no debe retrasar la reperfusión. Creatinina, filtrado, glucemia y hemograma. La fibrinólisis no espera a los biomarcadores.',
      imagen: 'Ecocardiograma urgente si hay choque o sospecha de complicación mecánica (I C); ecocardiograma sistemático tras la angioplastia para la función ventricular y valvular, las complicaciones mecánicas y el trombo. Con FEVI de 40% o menos antes del alta, repetirla a las 6 a 12 semanas para decidir el desfibrilador (I C).',
      complementarios: 'Electrocardiograma en menos de 10 minutos (I B) y monitorización continua con desfibrilador (I B). Derivaciones V3R, V4R y V7-V9 en el infarto inferior o si se sospecha oclusión con ECG no concluyente (I B).',
      dx_diferencial: 'El daño miocárdico no isquémico que también eleva la troponina: miocarditis, síndrome de takotsubo, valvulopatía, arritmias, insuficiencia cardiaca y sepsis. No todo diagnóstico de trabajo de infarto con elevación del ST acaba siéndolo, y el bloqueo de rama o el marcapasos impiden valorar el ST.',
      tx_medico: 'Triage inmediato para reperfusión (I A). Redes regionales y centros con angioplastia las 24 horas (I B); el traslado va directo a la sala de hemodinámica, sin pasar por urgencias ni por la unidad coronaria (I B). Oxígeno solo con saturación por debajo del 90% (I C). Opioides para el dolor (IIa C).',
      tx_farmacologico: 'Aspirina (I A) y un inhibidor del P2Y12 (I A): prasugrel en quien va a angioplastia (I B) o ticagrelor (I B). Anticoagulación parenteral (I A), con bolo de heparina no fraccionada de 70 a 100 UI/kg en la angioplastia (I C); fondaparinux no en la angioplastia primaria (III B). Betabloqueador intravenoso, preferiblemente metoprolol, debe considerarse al llegar en quien va a angioplastia primaria sin insuficiencia cardiaca y con sistólica de más de 120 mmHg (IIa A). Si la reperfusión es con fibrinólisis: tenecteplasa en bolo según el peso (30 mg por debajo de 60 kg, 35 de 60 a 69, 40 de 70 a 79, 45 de 80 a 89, 50 con 90 o más), media dosis por encima de 75 años (IIa B), con aspirina y clopidogrel (I A) y enoxaparina como anticoagulante preferido (I A).',
      tx_intervencionista: 'Reperfusión con síntomas de 12 horas o menos (I A): angioplastia primaria si se prevé en menos de 120 minutos desde el diagnóstico (I A), con stent farmacoactivo en la arteria responsable (I A), acceso radial (I A) y sin aspiración de trombo sistemática (III A). Si no, fibrinólisis en menos de 10 minutos y traslado inmediato (I A): rescate si falla o hay inestabilidad (I A), coronariografía de 2 a 24 horas si funciona (I A). Más de 12 horas con síntomas, inestabilidad o arritmias: angioplastia (I C); de 12 a 48 horas debe considerarse (IIa B); más de 48 horas sin síntomas, no se abre la arteria ocluida (III A). Enfermedad multivaso estable: revascularización completa en el procedimiento o en 45 días (I A).',
      criterios_uci: 'Todo infarto con elevación del ST va a la unidad coronaria o de cuidados cardiacos intensivos al menos 24 horas tras una reperfusión sin complicaciones, con monitorización electrocardiográfica al menos 24 horas, y después de 24 a 48 horas más en una cama monitorizada (I C).',
      criterios_tips: 'Angioplastia primaria: menos de 60 minutos hasta el paso de la guía si llega a un centro con hemodinámica; menos de 90 si llega trasladado. Tras una parada reanimada con elevación persistente del ST, angioplastia primaria (I B).',
      criterios_trasplante: 'No aplica en la fase aguda; ver la ficha de choque cardiogénico en el SCA.',
      seguimiento_hospitalario: 'Ritmo, dolor, hemodinámica y signos de complicación mecánica en los primeros días. A DÓNDE LLEVA: las fichas de choque cardiogénico, complicaciones mecánicas, infarto del ventrículo derecho, arritmias y trombo intraventricular.',
      seguimiento_ambulatorio: 'Rehabilitación cardiaca (I A), prevención secundaria y nueva FEVI a las 6 a 12 semanas si era de 40% o menos.',
      pronostico: 'Si el retraso es similar, la angioplastia primaria es superior a la fibrinólisis para reducir la mortalidad, el reinfarto y el ictus. La fibrinólisis evita 30 muertes precoces por cada 1000 pacientes tratados en las primeras 6 horas, con el mayor beneficio absoluto en los de más riesgo.',
      algoritmo: [
        'Dolor torácico y electrocardiograma en menos de 10 minutos con elevación del ST o un equivalente',
        'Síntomas de 12 horas o menos: reperfundir',
        '¿Angioplastia en menos de 120 minutos desde el diagnóstico? Sí: angioplastia primaria',
        'No: fibrinólisis en menos de 10 minutos, sin contraindicaciones, y traslado inmediato',
        'Fibrinólisis fallida o inestabilidad: rescate; eficaz: coronariografía de 2 a 24 horas',
        'Aspirina, P2Y12, anticoagulación parenteral y unidad coronaria al menos 24 horas'
      ]
    },
    {
      nombre: 'MINOCA e infarto tipo 2',
      color: '#5c3d8c',
      definicion: 'MINOCA es el infarto con arterias coronarias no obstructivas: un diagnóstico de TRABAJO, no final, que obliga a buscar la causa. El infarto tipo 2 es el daño miocárdico isquémico por desequilibrio entre aporte y demanda de oxígeno sin aterotrombosis aguda. Y el daño miocárdico es la elevación de la troponina por mecanismos no isquémicos, aguda o crónica.',
      fisiopatologia: 'Causas coronarias del MINOCA: embolia, disfunción microvascular, espasmo, trombosis, puente muscular, rotura o erosión de placa y disección coronaria espontánea. Cardiacas no coronarias: traumatismo, miocardiopatía, cardiotóxicos, miocarditis, esfuerzo extenuante, takotsubo y rechazo del trasplante. No cardiacas: SDRA, alergia, enfermedad renal terminal, inflamación, embolia pulmonar, sepsis e ictus. El tipo 2 puede deberse a hipoxia, hipotensión, anemia, taquicardia o bradicardia.',
      epidemiologia: 'El infarto tipo 2 es frecuente y tiene un pronóstico similar al tipo 1. Con la troponina de alta sensibilidad, que no es específica de infarto, el daño miocárdico se reconoce cada vez más.',
      factores_riesgo: [
        'Anemia, hipoxia, hipotensión o taquiarritmia en el infarto tipo 2',
        'Sepsis, miocarditis y takotsubo en el daño miocárdico agudo',
        'Insuficiencia cardiaca, miocardiopatías y valvulopatía grave en el crónico'
      ],
      clinica: 'La de un síndrome coronario agudo, con coronarias sin obstrucción en la coronariografía, o la de la enfermedad que desencadena el desequilibrio.',
      criterios_dx: 'En todo MINOCA se recomienda seguir un algoritmo diagnóstico para llegar al diagnóstico final (I C), y resonancia tras la coronariografía si no está claro (I B). La coronariografía funcional (ventriculografía con presión telediastólica, pruebas de función microvascular y de reactividad, e imagen intravascular) ayuda a encontrar la causa. El infarto tipo 2 se distingue del tipo 1 con un abordaje algorítmico.',
      laboratorio: 'La troponina de alta sensibilidad con cambios dinámicos define el daño agudo frente al crónico. Hemograma, gasometría y analítica dirigida al desencadenante del infarto tipo 2.',
      imagen: 'Resonancia magnética cardiaca, que identifica la causa en hasta el 87% de los MINOCA y debe hacerse lo antes posible, idealmente en el mismo ingreso. Ecocardiograma y TC según la sospecha.',
      complementarios: 'Coronariografía funcional con provocación de espasmo y medida de la microcirculación, e imagen intravascular para la erosión, la rotura o la disección.',
      dx_diferencial: 'Miocarditis, takotsubo, embolia pulmonar, sepsis y el resto de causas de daño miocárdico no isquémico; y el infarto tipo 1 con una lesión culpable no reconocida.',
      tx_medico: 'Tratar el desencadenante en el infarto tipo 2 (anemia, hipoxia) y controlar los factores de riesgo; no hay intervenciones farmacológicas específicas recomendadas para el tipo 2.',
      tx_farmacologico: 'El del diagnóstico final, según su guía específica (I B). Prevención secundaria si hay aterosclerosis coronaria. El takotsubo no tiene ensayos prospectivos y su tratamiento es de soporte y empírico. En el infarto tipo 2 no hay intervenciones farmacológicas específicas recomendadas.',
      tx_intervencionista: 'En la disección coronaria espontánea, angioplastia solo con isquemia en curso, un gran territorio en riesgo y flujo anterógrado reducido (I C).',
      criterios_uci: 'Según la causa y la repercusión hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Completar el algoritmo diagnóstico antes del alta, idealmente con la resonancia en el mismo ingreso.',
      seguimiento_ambulatorio: 'El del diagnóstico final, y control de los factores de riesgo.',
      pronostico: 'No identificar la causa del MINOCA puede llevar a un tratamiento inadecuado; el infarto tipo 2 tiene un pronóstico similar al tipo 1.',
      algoritmo: [
        'Infarto con coronarias sin obstrucción: MINOCA como diagnóstico de trabajo',
        'Coronariografía funcional e imagen intravascular si están disponibles',
        'Resonancia cardiaca si la causa no está clara, en el mismo ingreso',
        'Tratar según el diagnóstico final',
        'Infarto tipo 2: tratar el desencadenante y los factores de riesgo'
      ]
    },
    {
      nombre: 'Tratamiento antitrombótico y prevención secundaria tras el SCA',
      color: '#3f6b52',
      definicion: 'El tratamiento que une a todos los síndromes coronarios agudos tras la fase de estabilización: doble antiagregación, anticoagulación si hace falta, hipolipemiantes y el resto de la prevención secundaria. Es una ficha de tratamiento, con los campos completos porque se aplica a todas las formas.',
      fisiopatologia: 'La aspirina bloquea la ciclooxigenasa plaquetaria y los inhibidores del P2Y12 la vía del ADP; la anticoagulación actúa sobre la cascada. Todo se decide sopesando la protección isquémica frente al riesgo de hemorragia, porque una hemorragia mayor empeora el pronóstico igual que un evento isquémico.',
      epidemiologia: 'La hemorragia se asocia a mal pronóstico en el síndrome coronario agudo. Más del 30% de los pacientes tiene enfermedad renal crónica moderada a grave.',
      factores_riesgo: [
        'Riesgo hemorrágico alto: edad avanzada, anemia, trombocitopenia, enfermedad renal',
        'Indicación de anticoagulación oral, sobre todo la fibrilación auricular',
        'Riesgo de hemorragia digestiva, que pide un inhibidor de la bomba de protones'
      ],
      clinica: 'No aplica: es una ficha de tratamiento.',
      criterios_dx: 'Valorar el riesgo hemorrágico y el isquémico. Indicación de anticoagulación: fibrilación auricular con CHA2DS2-VASc de 1 o más en varones y de 2 o más en mujeres, o trombo intraventricular. Indicación de IECA: insuficiencia cardiaca, FEVI de 40% o menos, diabetes, hipertensión o enfermedad renal. Indicación de betabloqueador: FEVI de 40% o menos.',
      laboratorio: 'Colesterol LDL basal y a las 4 a 6 semanas para ajustar el tratamiento al objetivo de menos de 55 mg/dL. Función renal para ajustar los antitrombóticos y hemoglobina y plaquetas.',
      imagen: 'FEVI antes del alta en todos; con 40% o menos, repetirla a las 6 a 12 semanas tras la revascularización completa y el tratamiento óptimo (I C).',
      complementarios: 'Valoración del riesgo hemorrágico con herramientas validadas.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Rehabilitación cardiaca multidisciplinaria basada en el ejercicio para todos (I A). Estilo de vida: dejar el tabaco, dieta mediterránea, restringir el alcohol, ejercicio aeróbico y de fuerza, y menos sedentarismo (I B). Vacuna antigripal (I A).',
      tx_farmacologico: 'ANTIAGREGACIÓN. Doble antiagregación 12 meses salvo riesgo hemorrágico alto (I A), con inhibidor de la bomba de protones si hay riesgo de hemorragia digestiva (I A). Prasugrel 10 mg al día, 5 mg con menos de 60 kg o con 75 años o más; contraindicado con ictus previo. No desescalar en los primeros 30 días (III B). Tras una cirugía de revascularización, reanudar la doble antiagregación al menos 12 meses (I C). CON ANTICOAGULACIÓN ORAL: hasta una semana de triple terapia y después un anticoagulante directo con un solo antiagregante, preferiblemente clopidogrel, hasta 12 meses (I A); no ticagrelor ni prasugrel en la triple terapia (III C); a los 12 meses, retirar el antiagregante (I B). LÍPIDOS: estatina de alta intensidad lo antes posible, sea cual sea el LDL (I A), con objetivo de menos de 55 mg/dL y reducción de al menos 50% (I A); ezetimiba a las 4 a 6 semanas si no se alcanza (I B) y después un inhibidor de PCSK9 (I A); intensificar en el ingreso si ya tomaba (I C). OTROS: betabloqueador con FEVI de 40% o menos (I A); IECA con insuficiencia cardiaca, FEVI de 40% o menos, diabetes, hipertensión o enfermedad renal (I A); ARM con FEVI de 40% o menos e insuficiencia cardiaca o diabetes (I A).',
      tx_intervencionista: 'Revascularización completa en la enfermedad multivaso estable, en el procedimiento índice o en 45 días (I A).',
      criterios_uci: 'No aplica.',
      criterios_tips: 'Desfibrilador si a las 6 semanas o más del infarto persiste una FEVI de 35% o menos con NYHA II o III pese a más de 3 meses de tratamiento óptimo y esperanza de vida de al menos un año (I A).',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Iniciar antes del alta la estatina de alta intensidad, la doble antiagregación y, si procede, el betabloqueador, el IECA y el ARM.',
      seguimiento_ambulatorio: 'LDL a las 4 a 6 semanas, adherencia, rehabilitación y control de los factores de riesgo. En el diabético, el tratamiento hipoglucemiante se elige según las comorbilidades (insuficiencia cardiaca, enfermedad renal, obesidad) (I A).',
      pronostico: 'El beneficio de la doble antiagregación y de la reducción intensiva del LDL depende de mantenerlos: los ajustes por riesgo hemorrágico buscan conservar el tratamiento, no retirarlo.',
      algoritmo: [
        'Aspirina de por vida y un P2Y12 durante 12 meses salvo riesgo hemorrágico alto',
        'Inhibidor de la bomba de protones si hay riesgo de hemorragia digestiva',
        'Con fibrilación auricular: hasta 1 semana de triple terapia, luego anticoagulante directo con clopidogrel',
        'Estatina de alta intensidad; LDL de menos de 55 y reducción de 50%',
        'Ezetimiba y después iPCSK9 si no se alcanza el objetivo',
        'FEVI de 40% o menos: betabloqueador, IECA y ARM',
        'Rehabilitación cardiaca y vacuna antigripal'
      ]
    },
    {
      nombre: 'Choque cardiogénico en el síndrome coronario agudo',
      color: '#5c2e2e',
      definicion: 'Complicación del infarto (ver las fichas de IAMCEST y de SCASEST): estado de gasto cardiaco bajo con hipoperfusión de órganos que amenaza la vida. Criterios clínicos: sistólica por debajo de 90 mmHg 30 minutos o más, o necesidad de catecolaminas, con hipoperfusión de órganos (alteración mental, piel fría, diuresis de menos de 30 mL/h o lactato de más de 2 mmol/L); hemodinámicos: índice cardiaco de 2,2 o menos con enclavamiento de 15 mmHg o más. La ficha general del choque está en Estado de choque.',
      fisiopatologia: 'No repite el mecanismo del infarto. Lo específico: el infarto con disfunción del ventrículo izquierdo es la causa más frecuente de choque cardiogénico; en el síndrome agudo puede deberse además a isquemia extensa por enfermedad multivaso, a insuficiencia mitral aguda grave o a complicaciones mecánicas. Hay un choque normotenso, con hipoperfusión y sistólica de más de 90, y uno del ventrículo derecho.',
      epidemiologia: 'Es la primera causa de mortalidad hospitalaria del infarto. Entre 2003 y 2010 su prevalencia en el infarto con elevación del ST pasó del 6 al 10% (del 7 al 12% por encima de 75 años), y la mortalidad hospitalaria bajó del 45 al 34%, aunque siguió en el 55% por encima de 75 años. Antes de la revascularización precoz superaba el 80%.',
      factores_riesgo: [
        'Edad de más de 75 años',
        'Infarto anterior extenso',
        'Enfermedad multivaso',
        'Complicaciones mecánicas e insuficiencia mitral aguda grave'
      ],
      clinica: 'Hipotensión con signos de hipoperfusión: extremidades frías y húmedas, oliguria, alteración del nivel de conciencia y congestión pulmonar. En el choque normotenso la presión se mantiene a costa de resistencias altas.',
      criterios_dx: 'Criterios clínicos del ensayo SHOCK (sistólica por debajo de 90 mmHg 30 minutos o más, o catecolaminas, con congestión y daño orgánico) o hemodinámicos (índice cardiaco de 2,2 o menos y enclavamiento de 15 mmHg o más), más la identificación inmediata de la causa con coronariografía y ecocardiograma.',
      laboratorio: 'Lactato (más de 2 mmol/L es criterio de hipoperfusión), función renal y hepática, gasometría y troponina.',
      imagen: 'Ecocardiograma urgente (I C) para la función del ventrículo izquierdo y derecho, las alteraciones segmentarias, las válvulas y las complicaciones mecánicas.',
      complementarios: 'Coronariografía inmediata. Monitorización hemodinámica invasiva según el caso.',
      dx_diferencial: 'Las complicaciones mecánicas, el infarto del ventrículo derecho, el taponamiento y las causas no coronarias: embolia pulmonar, miocarditis, valvulopatía aguda, arritmia, infección.',
      tx_medico: 'Traslado cuanto antes a un centro con hemodinámica. Soporte respiratorio y tratamiento del fallo orgánico.',
      tx_farmacologico: 'El de la insuficiencia cardiaca aguda con hipoperfusión (diuréticos, vasodilatadores, inotrópicos o vasopresores según los algoritmos), más los antitrombóticos del síndrome coronario agudo. La fibrinólisis debe considerarse en el infarto con elevación del ST y choque si la angioplastia primaria no es posible en 120 minutos y se han descartado las complicaciones mecánicas (IIa C).',
      tx_intervencionista: 'Coronariografía inmediata y angioplastia de la arteria responsable (I B), SOLO de la responsable en el procedimiento índice si hay enfermedad multivaso (I B). Cirugía de revascularización urgente si la angioplastia no es posible o falla (I B). Reparación urgente de las complicaciones mecánicas según el Heart Team (I C). El balón de contrapulsación no se recomienda de rutina sin complicaciones mecánicas (III B), por el ensayo IABP-SHOCK II, sin beneficio a 30 días, 1 ni 6 años; puede considerarse asistencia circulatoria de corta duración en el choque grave o refractario (IIb C), con cautela: la ECMO inmediata no mejoró los resultados y los dispositivos microaxiales se asociaron a más hemorragia y mortalidad en registros.',
      criterios_uci: 'Siempre.',
      criterios_tips: 'Balón de contrapulsación SÍ debe considerarse con inestabilidad o choque por complicaciones mecánicas (IIa C), mientras se espera la cirugía.',
      criterios_trasplante: 'Asistencia de corta duración como puente en casos seleccionados; ver la ficha de insuficiencia cardiaca avanzada del tema de Insuficiencia cardiaca.',
      seguimiento_hospitalario: 'Lactato, diuresis, función orgánica y hemodinámica seriados.',
      seguimiento_ambulatorio: 'Entre los revascularizados que sobrevivieron al alta en el ensayo SHOCK, el 62% seguía vivo a los 6 años.',
      pronostico: 'En el ensayo SHOCK, la mortalidad fue del 35% con angioplastia eficaz y del 80% con angioplastia fallida.',
      algoritmo: [
        'Infarto con hipotensión e hipoperfusión: choque cardiogénico',
        'Ecocardiograma urgente para la función y las complicaciones mecánicas',
        'Coronariografía inmediata y angioplastia solo de la arteria responsable',
        'Si no es posible: cirugía urgente; complicación mecánica: reparación según el Heart Team',
        'Sin balón de contrapulsación de rutina; asistencia de corta duración solo en el refractario'
      ]
    },
    {
      nombre: 'Complicaciones mecánicas del infarto',
      color: '#6b4a2e',
      definicion: 'Complicación del infarto, sobre todo con elevación del ST (ver la ficha correspondiente): rotura de la pared libre, comunicación interventricular, e insuficiencia mitral aguda por rotura o disfunción del músculo papilar. Aparecen en los primeros días.',
      fisiopatologia: 'No repite el mecanismo del infarto. Lo específico: la necrosis transmural debilita la pared o el aparato valvular y se rompe. La comunicación interventricular crea un cortocircuito izquierda-derecha y la insuficiencia mitral aguda sobrecarga de golpe una aurícula y un ventrículo no adaptados; las dos llevan al edema pulmonar y al choque.',
      epidemiologia: 'Su incidencia ha caído mucho en la era de la angioplastia primaria. En casi 9 millones de síndromes coronarios agudos, su prevalencia fue del 0,27% en el infarto con elevación del ST y del 0,06% sin ella, con una mortalidad hospitalaria del 42,4% y del 18%.',
      factores_riesgo: [
        'Infarto con elevación del ST',
        'Reperfusión tardía o ausente',
        'Primeros días tras el infarto'
      ],
      clinica: 'Hipotensión brusca, reaparición del dolor, soplo nuevo de insuficiencia mitral o de comunicación interventricular, congestión pulmonar o ingurgitación yugular.',
      criterios_dx: 'Sospecha clínica ante cualquiera de esos signos y confirmación con ecocardiograma inmediato, que está indicado siempre que se sospeche una complicación mecánica (I C).',
      laboratorio: 'Lactato y función orgánica si hay choque. La analítica no diagnostica la complicación; la diagnostica la imagen.',
      imagen: 'Ecocardiograma inmediato: defecto del tabique con flujo, insuficiencia mitral con músculo papilar roto, derrame pericárdico con taponamiento en la rotura de pared libre.',
      complementarios: 'Coronariografía si hay que revascularizar en la misma cirugía.',
      dx_diferencial: 'El choque cardiogénico por disfunción ventricular sin rotura, la isquemia recurrente y la embolia pulmonar.',
      tx_medico: 'Abordaje multidisciplinario en todas las fases, desde la estabilización a la decisión terapéutica, incluidos los cuidados paliativos.',
      tx_farmacologico: 'Soporte hemodinámico con vasopresores e inotrópicos mientras se prepara la reparación; en la insuficiencia mitral y la comunicación interventricular, la reducción de la poscarga disminuye la regurgitación y el cortocircuito.',
      tx_intervencionista: 'La cirugía es el tratamiento de elección, y la reparación urgente quirúrgica o percutánea se recomienda con inestabilidad según el Heart Team (I C); las técnicas percutáneas se reservan para candidatos seleccionados de riesgo prohibitivo. Si hace falta revascularizar, la cirugía coronaria se hace en el mismo acto. Balón de contrapulsación mientras se espera la cirugía (IIa C).',
      criterios_uci: 'Siempre.',
      criterios_tips: 'Asistencia circulatoria temporal antes de la cirugía como tendencia nueva, todavía sin evidencia de beneficio.',
      criterios_trasplante: 'No aplica de forma habitual.',
      seguimiento_hospitalario: 'Vigilar en los primeros días la hipotensión súbita, el dolor recurrente y los soplos nuevos.',
      seguimiento_ambulatorio: 'El de la cirugía reparadora y la prevención secundaria.',
      pronostico: 'Mortalidad hospitalaria del 42,4% en el infarto con elevación del ST.',
      algoritmo: [
        'Hipotensión brusca, dolor recurrente o soplo nuevo en los primeros días',
        'Ecocardiograma inmediato',
        'Balón de contrapulsación y soporte mientras se decide',
        'Reparación quirúrgica o percutánea urgente según el Heart Team'
      ]
    },
    {
      nombre: 'Infarto del ventrículo derecho',
      color: '#2e6b6b',
      definicion: 'Complicación del infarto inferior (ver la ficha de IAMCEST): isquemia del ventrículo derecho, que se reconoce por la elevación del ST en V3R y V4R y puede llevar a un choque con pulmones limpios.',
      fisiopatologia: 'No repite el mecanismo del infarto. Lo específico: la gravedad del choque depende de la isquemia de los dos ventrículos, por el tabique compartido y la interdependencia ventricular.',
      epidemiologia: 'El choque del ventrículo derecho supone el 5,3% de los choques cardiogénicos por infarto. En el registro SHOCK solo el 71% cumplía la definición hemodinámica clásica, presión venosa central partida por enclavamiento de 0,8 o más.',
      factores_riesgo: [
        'Infarto inferior',
        'Oclusión proximal de la coronaria derecha'
      ],
      clinica: 'Hipotensión con presión venosa central alta y pulmones limpios.',
      criterios_dx: 'Elevación del ST en V3R y V4R, muy sugestiva de isquemia en curso del ventrículo derecho: hay que registrar esas derivaciones en todo infarto inferior (I B). Hemodinámicamente, presiones venosas centrales más altas, FEVI izquierda conservada y presiones pulmonares más bajas.',
      laboratorio: 'Lactato si hay hipoperfusión; troponina y función renal.',
      imagen: 'Ecocardiograma con la función del ventrículo derecho.',
      complementarios: 'Electrocardiograma con derivaciones derechas.',
      dx_diferencial: 'El taponamiento, la embolia pulmonar y el choque cardiogénico izquierdo.',
      tx_medico: 'Las pruebas de volumen pueden desenmascarar el patrón hemodinámico del infarto derecho: en los estudios aumentaron la proporción de pacientes que cumplían su definición. El resto del soporte es el del choque cardiogénico.',
      tx_farmacologico: 'Reperfusión y, si hay hipotensión, vasopresores o inotrópicos; con bradicardia o bloqueo de alto grado, atropina y fármacos cronotrópicos (I C).',
      tx_intervencionista: 'Reperfusión de la arteria responsable. Estimulación temporal si la bradicardia no responde a la atropina (I C). La asistencia temporal del ventrículo derecho está en desarrollo.',
      criterios_uci: 'Choque o bloqueo auriculoventricular de alto grado.',
      criterios_tips: 'Marcapasos definitivo si el bloqueo de alto grado no se resuelve tras al menos 5 días (I C); no si se resuelve con la revascularización o de forma espontánea (III B).',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Presión venosa, presión arterial, ritmo y diuresis.',
      seguimiento_ambulatorio: 'El del infarto.',
      pronostico: 'La gravedad depende de la isquemia combinada de los dos ventrículos.',
      algoritmo: [
        'Infarto inferior: registrar V3R y V4R',
        'Hipotensión con presión venosa alta y pulmones limpios: sospechar infarto del ventrículo derecho',
        'Reperfundir; líquidos con prudencia; vasopresores o inotrópicos si persiste la hipotensión',
        'Bradicardia o bloqueo: atropina y, si no responde, marcapasos temporal'
      ]
    },
    {
      nombre: 'Arritmias en el síndrome coronario agudo',
      color: '#9c3a52',
      definicion: 'Complicación del síndrome coronario agudo (ver las fichas de IAMCEST y SCASEST): fibrilación auricular, arritmias ventriculares y bradiarritmias, cada una con su conducta.',
      fisiopatologia: 'No repite el mecanismo del infarto. Lo específico: la isquemia es a menudo el desencadenante de las arritmias ventriculares malignas, y por eso la reperfusión urgente es lo más importante. Las que aparecen durante la isquemia o más de 48 horas tras la reperfusión tienen peor pronóstico que las de la reperfusión.',
      epidemiologia: 'Del 6 al 8% de los infartos con elevación del ST desarrollan taquicardia o fibrilación ventricular con repercusión, típicamente una taquicardia rápida, a menudo polimórfica, que degenera en fibrilación. La fibrilación auricular es la arritmia supraventricular más frecuente. La taquicardia ventricular no sostenida monomórfica es la arritmia ventricular más frecuente de la fase precoz.',
      factores_riesgo: [
        'Isquemia en curso o revascularización incompleta',
        'Disfunción ventricular izquierda previa',
        'Infarto anterior extenso con insuficiencia cardiaca'
      ],
      clinica: 'Palpitaciones, síncope, inestabilidad hemodinámica o parada.',
      criterios_dx: 'Monitorización electrocardiográfica continua al menos 24 horas en el alto riesgo (I C). El ritmo idioventricular acelerado de la reperfusión es benigno y las extrasístoles ventriculares de las primeras 24 horas no requieren tratamiento.',
      laboratorio: 'La analítica busca sobre todo la isquemia que dispara la arritmia: troponina seriada junto al electrocardiograma, porque la isquemia es a menudo el desencadenante y la revascularización completa es el tratamiento de la taquicardia o fibrilación ventricular recurrente (I C).',
      imagen: 'Ecocardiograma para la FEVI, que decide el desfibrilador.',
      complementarios: 'Electrocardiograma de 12 derivaciones durante la arritmia.',
      dx_diferencial: 'El ritmo idioventricular acelerado de la reperfusión, benigno, frente a la taquicardia ventricular.',
      tx_medico: 'Reperfusión urgente y revascularización completa si hay isquemia con taquicardia o fibrilación ventricular recurrentes (I C).',
      tx_farmacologico: 'FIBRILACIÓN AURICULAR: betabloqueador intravenoso para la frecuencia sin insuficiencia cardiaca ni hipotensión (I C); amiodarona intravenosa con insuficiencia cardiaca sin hipotensión (I C); cardioversión eléctrica inmediata si hay inestabilidad (I C), con amiodarona para facilitarla (I C); anticoagulación a largo plazo según CHA2DS2-VASc en la de nueva aparición, preferiblemente con anticoagulantes directos (IIa C). VENTRICULARES: betabloqueador o amiodarona intravenosos en la taquicardia polimórfica o la fibrilación (I B); lidocaína si fallan (IIb C); no tratar con antiarrítmicos las asintomáticas sin repercusión (III C). BRADIARRITMIAS con mala tolerancia o bloqueo de alto grado sin escape estable: adrenalina, vasopresina o atropina intravenosas (I C).',
      tx_intervencionista: 'Estimulación temporal si la bradicardia no responde a la atropina (I C) y coronariografía urgente si no hubo reperfusión (I C). Marcapasos definitivo si el bloqueo de alto grado no se resuelve tras al menos 5 días (I C), no si se resuelve (III B). Sobreestimulación (IIa C) y ablación seguida de desfibrilador en la taquicardia recurrente o la tormenta pese a revascularización completa (IIa C).',
      criterios_uci: 'Arritmias con inestabilidad, tormenta eléctrica o bloqueo de alto grado.',
      criterios_tips: 'Desfibrilador si a las 6 semanas o más persiste FEVI de 35% o menos en NYHA II-III pese a más de 3 meses de tratamiento (I A); en los primeros 40 días, desfibrilador o chaleco desfibrilador solo en casos seleccionados (IIb C). La taquicardia o fibrilación sostenida más allá de 48 horas obliga a valorar el desfibrilador en prevención secundaria.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización continua; FEVI antes del alta y a las 6 a 12 semanas si era de 40% o menos.',
      seguimiento_ambulatorio: 'Anticoagulación si hubo fibrilación auricular de nueva aparición con riesgo embólico.',
      pronostico: 'La taquicardia o fibrilación ventricular precoz se asocia a más mortalidad a 30 días, pero no a más riesgo arrítmico a largo plazo; la sostenida durante la isquemia o tardía sí aumenta la mortalidad a largo plazo.',
      algoritmo: [
        'Monitorización continua al menos 24 horas',
        'Fibrilación ventricular o taquicardia polimórfica: desfibrilar, betabloqueador o amiodarona, reperfundir',
        'Fibrilación auricular inestable: cardioversión; estable: betabloqueador o amiodarona según la insuficiencia cardiaca',
        'Bradicardia o bloqueo: atropina, cronotrópicos, marcapasos temporal',
        'FEVI de 40% o menos: reevaluar a las 6 a 12 semanas para el desfibrilador'
      ]
    },
    {
      nombre: 'Trombo intraventricular izquierdo',
      color: '#3d5a73',
      definicion: 'Complicación del infarto, sobre todo anterior (ver la ficha de IAMCEST): trombo en la cavidad del ventrículo izquierdo, habitualmente en el ápex acinético.',
      fisiopatologia: 'No repite el mecanismo del infarto. Lo específico: el segmento acinético del ápex y el estado protrombótico del infarto favorecen el trombo, que puede embolizar.',
      epidemiologia: 'Su incidencia ha bajado con la reperfusión, pero sigue siendo relativamente frecuente tras el infarto anterior con elevación del ST, en más del 9%. Con resonancia aparece en el 6,3% de todos los infartos con elevación del ST y en el 12,2% de los anteriores, lo que sugiere que el ecocardiograma lo infraestima. Su detección aumenta en las 2 primeras semanas.',
      factores_riesgo: [
        'Infarto anterior con elevación del ST',
        'Ápex acinético',
        'FEVI reducida'
      ],
      clinica: 'Asintomático o con embolia sistémica.',
      criterios_dx: 'Ecocardiograma como primera prueba; con contraste si el ápex no se ve bien tras un infarto anterior (IIb C). Resonancia, que es el patrón de referencia, si el ecocardiograma es dudoso o la sospecha es alta (IIa C).',
      laboratorio: 'No hay un marcador de laboratorio del trombo. La analítica aporta el riesgo hemorrágico, que la guía pide sopesar antes de anticoagular junto a la antiagregación: anemia, trombocitopenia y función renal.',
      imagen: 'Ecocardiograma y resonancia; puede valer la pena repetir la imagen a las 2 semanas en el alto riesgo, porque muchos trombos aparecen tras el alta.',
      complementarios: 'No aplica.',
      dx_diferencial: 'Artefactos del ápex en el ecocardiograma, trabeculaciones.',
      tx_medico: 'Valorar el riesgo hemorrágico y la necesidad de antiagregación asociada.',
      tx_farmacologico: 'Anticoagulación oral, con antivitamina K o anticoagulante directo, durante 3 a 6 meses (IIa C), guiada por imagen repetida y sopesando el riesgo hemorrágico y la antiagregación. No hay ensayos aleatorizados sobre la pauta óptima ni la duración.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Imagen antes del alta en el infarto anterior.',
      seguimiento_ambulatorio: 'Ecocardiograma o resonancia de control para decidir la duración de la anticoagulación.',
      pronostico: 'Los trombos vistos solo por resonancia tienen una evolución clínica similar a los visibles por ecocardiograma.',
      algoritmo: [
        'Infarto anterior: buscar trombo en el ecocardiograma, con contraste si el ápex no se ve',
        'Dudoso o alto riesgo: resonancia',
        'Trombo confirmado: anticoagulación 3 a 6 meses',
        'Repetir la imagen para decidir cuándo parar'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca aguda en el síndrome coronario agudo',
      color: '#a3364a',
      definicion: 'Complicación del síndrome coronario agudo (ver las fichas de IAMCEST y SCASEST): insuficiencia cardiaca aguda de novo por el síndrome, o descompensación de una insuficiencia previa. El manejo de la insuficiencia aguda en sí está en el tema de Insuficiencia cardiaca.',
      fisiopatologia: 'No repite el mecanismo del infarto. Lo específico: la pérdida de miocardio, la isquemia extensa por enfermedad multivaso, la insuficiencia mitral aguda y las complicaciones mecánicas reducen el gasto y elevan las presiones de llenado.',
      epidemiologia: 'Aumenta mucho el riesgo de otras complicaciones hospitalarias: deterioro renal, insuficiencia respiratoria, neumonía y muerte.',
      factores_riesgo: [
        'Infarto anterior extenso',
        'Enfermedad multivaso',
        'Insuficiencia cardiaca previa'
      ],
      clinica: 'Disnea de reposo y signos de sobrecarga de volumen; la clase Killip por encima de I marca riesgo alto.',
      criterios_dx: 'Distinguir la insuficiencia aguda de novo por el síndrome de la descompensación de una insuficiencia previa. En la insuficiencia aguda, la troponina elevada puede reflejar daño por la propia insuficiencia y no necrosis isquémica, lo que dificulta el diagnóstico.',
      laboratorio: 'Troponina, sabiendo que en la insuficiencia aguda puede reflejar daño por la propia insuficiencia y no necrosis isquémica; y función renal, porque el deterioro renal es una de las complicaciones hospitalarias que la insuficiencia aguda multiplica.',
      imagen: 'Ecocardiograma urgente o ecografía torácica para la función de los dos ventrículos, las alteraciones segmentarias, las válvulas y las complicaciones mecánicas.',
      complementarios: 'Coronariografía inmediata, incluido el choque.',
      dx_diferencial: 'Las complicaciones mecánicas, la insuficiencia mitral aguda y la descompensación por otras causas.',
      tx_medico: 'Manejo coordinado y urgente de las dos condiciones; soporte respiratorio invasivo o reemplazo renal si hacen falta.',
      tx_farmacologico: 'Según los algoritmos de la guía de insuficiencia cardiaca: diuréticos, vasodilatadores, inotrópicos y vasopresores. Tras la fase aguda, betabloqueador, IECA y ARM con FEVI de 40% o menos (I A).',
      tx_intervencionista: 'Coronariografía inmediata (la insuficiencia aguda por isquemia en curso es un criterio de muy alto riesgo en el SCASEST). Asistencia circulatoria en casos seleccionados.',
      criterios_uci: 'Insuficiencia respiratoria, hipoperfusión o choque.',
      criterios_tips: 'Con bloqueo de alto grado en un infarto anterior con insuficiencia aguda, puede considerarse la resincronización precoz (IIb C).',
      criterios_trasplante: 'Ver la ficha de insuficiencia cardiaca avanzada del tema de Insuficiencia cardiaca.',
      seguimiento_hospitalario: 'Función renal, diuresis, oxigenación y FEVI.',
      seguimiento_ambulatorio: 'El de la insuficiencia cardiaca y la prevención secundaria.',
      pronostico: 'Peor que el del síndrome coronario sin insuficiencia cardiaca.',
      algoritmo: [
        'Síndrome coronario con disnea y congestión: insuficiencia cardiaca aguda',
        'Ecocardiograma urgente y coronariografía inmediata',
        'Tratamiento de la insuficiencia aguda según su guía',
        'Al estabilizar: betabloqueador, IECA y ARM con FEVI de 40% o menos'
      ]
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Tras la reperfusión, todo paciente de alto riesgo, incluidos todos los infartos con elevación del ST y los SCASEST de muy alto riesgo, va a una unidad coronaria o de cuidados cardiacos intensivos al menos 24 horas, con monitorización electrocardiográfica, y después a una cama monitorizada otras 24 a 48 horas si la evolución es buena. La vigilancia busca tres cosas en los primeros días: la isquemia que vuelve, las arritmias y las complicaciones mecánicas.',
    parametros: [
      'Electrocardiograma continuo al menos 24 horas',
      'Dolor torácico y electrocardiograma ante cualquier recurrencia',
      'Presión arterial, frecuencia, diuresis y signos de insuficiencia cardiaca',
      'Soplos nuevos e hipotensión brusca: complicación mecánica',
      'FEVI antes del alta en todos',
      'Función renal, glucemia y hemoglobina',
      'LDL basal para ajustar el tratamiento a las 4 a 6 semanas'
    ],
    criterios_uci_general: 'Todos los infartos con elevación del ST y los SCASEST de muy alto riesgo, al menos 24 horas tras una reperfusión sin complicaciones; y siempre el choque, la insuficiencia cardiaca aguda grave, las arritmias malignas y las complicaciones mecánicas.',
    criterios_tips_general: 'Desfibrilador solo pasadas al menos 6 semanas del infarto, con FEVI de 35% o menos tras más de 3 meses de tratamiento óptimo; en los primeros 40 días, solo en casos seleccionados.',
    criterios_trasplante_general: 'No aplica de forma habitual; la asistencia circulatoria y el trasplante se plantean en el choque refractario seleccionado.',
    prevencion: 'Rehabilitación cardiaca para todos (I A). Dejar el tabaco, dieta mediterránea, menos alcohol, ejercicio aeróbico y de fuerza y menos sedentarismo (I B). Estatina de alta intensidad con LDL por debajo de 55 mg/dL y reducción de al menos 50% (I A). Vacuna antigripal (I A). En el síndrome crónico, la detección oportunista de factores de riesgo con escalas como SCORE2 en la población sana (I C).'
  }
};

// Presentación
export const compCites = {
  'Síndrome coronario crónico con enfermedad obstructiva': {
    definicion: [2], fisiopatologia: [2], epidemiologia: [2], factores_riesgo: [2], clinica: [2],
    criterios_dx: [2], laboratorio: [2], imagen: [2], complementarios: [2], dx_diferencial: [2],
    tx_medico: [2], tx_farmacologico: [2], tx_intervencionista: [2], criterios_tips: [2],
    seguimiento_ambulatorio: [2], pronostico: [2]
  },
  'Angina e isquemia sin enfermedad coronaria obstructiva (ANOCA/INOCA)': {
    definicion: [2], fisiopatologia: [2], epidemiologia: [2], clinica: [2], criterios_dx: [2],
    laboratorio: [2], imagen: [2], tx_farmacologico: [2], seguimiento_ambulatorio: [2]
  },
  'Síndrome coronario agudo sin elevación del ST': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    criterios_tips: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Infarto agudo de miocardio con elevación del ST': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1, 3], tx_intervencionista: [1], criterios_uci: [1],
    criterios_tips: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'MINOCA e infarto tipo 2': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], laboratorio: [1],
    imagen: [1], complementarios: [1], tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1],
    pronostico: [1]
  },
  'Tratamiento antitrombótico y prevención secundaria tras el SCA': {
    fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], laboratorio: [1], imagen: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_tips: [1],
    seguimiento_ambulatorio: [1]
  },
  'Choque cardiogénico en el síndrome coronario agudo': {
    definicion: [4], fisiopatologia: [1, 4], epidemiologia: [4], clinica: [4], criterios_dx: [1, 4],
    laboratorio: [4], imagen: [1], dx_diferencial: [1], tx_farmacologico: [1],
    tx_intervencionista: [1], criterios_tips: [1], seguimiento_ambulatorio: [4], pronostico: [4]
  },
  'Complicaciones mecánicas del infarto': {
    definicion: [1], epidemiologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1],
    tx_medico: [1], tx_farmacologico: [4], tx_intervencionista: [1], criterios_tips: [1], pronostico: [1]
  },
  'Infarto del ventrículo derecho': {
    fisiopatologia: [4], epidemiologia: [4], criterios_dx: [1, 4], laboratorio: [1], tx_medico: [4],
    tx_farmacologico: [1], tx_intervencionista: [1, 4], criterios_tips: [1]
  },
  'Arritmias en el síndrome coronario agudo': {
    fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], laboratorio: [1], tx_medico: [1],
    tx_farmacologico: [1], tx_intervencionista: [1], criterios_tips: [1], pronostico: [1]
  },
  'Trombo intraventricular izquierdo': {
    epidemiologia: [1], criterios_dx: [1], laboratorio: [1], imagen: [1], tx_farmacologico: [1],
    pronostico: [1]
  },
  'Insuficiencia cardiaca aguda en el síndrome coronario agudo': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], laboratorio: [1],
    imagen: [1], complementarios: [1], tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1],
    criterios_tips: [1]
  }
};

export const estigmasTitulo = 'Lo que hay que buscar al llegar, según la ESC 2023';
export const estigmas = [
  { s: 'Dolor de más de 15 minutos o recurrente en 1 hora', p: 'Síntoma de alarma', desc: 'Son los síntomas que deben hacer pedir ayuda urgente. El dolor torácico persistente con elevación del ST es una urgencia de reperfusión.' },
  { s: 'Elevación persistente del ST o un equivalente', p: 'Urgencia de reperfusión', desc: 'Con síntomas de 12 horas o menos, reperfusión inmediata: angioplastia primaria si llega en menos de 120 minutos, fibrinólisis si no.' },
  { s: 'Inestabilidad hemodinámica o choque', p: 'Muy alto riesgo', desc: 'Criterio de muy alto riesgo en el SCASEST, que obliga a la coronariografía inmediata. En el choque, angioplastia solo de la arteria responsable.' },
  { s: 'Soplo nuevo', p: 'Complicación mecánica', desc: 'Sugiere insuficiencia mitral aguda o comunicación interventricular, sobre todo con hipotensión brusca o dolor recurrente: ecocardiograma inmediato.' },
  { s: 'Crepitantes, ingurgitación yugular, Killip por encima de I', p: 'Insuficiencia cardiaca', desc: 'La insuficiencia cardiaca aguda por isquemia es un criterio de muy alto riesgo, y la clase Killip por encima de I un marcador de riesgo alto.' },
  { s: 'Hipotensión con pulmones limpios en un infarto inferior', p: 'Ventrículo derecho', desc: 'Hay que registrar V3R y V4R: la elevación del ST en ellas sugiere isquemia del ventrículo derecho.' },
  { s: 'Asimetría de pulsos o de presión entre los brazos', p: 'Diagnóstico diferencial', desc: 'La exploración incluye todos los pulsos y la presión en los dos brazos: la disección aórtica imita al infarto y contraindica la fibrinólisis.' }
];

export const escalaRefs = {
  'Probabilidad clínica de enfermedad coronaria obstructiva, RF-CL (calculadora disponible)': [2],
  'Graduación de la angina de la Sociedad Cardiovascular Canadiense': [2],
  'Elevación del ST que sugiere oclusión coronaria': [1],
  'Estrategia invasiva en el SCASEST según el riesgo (calculadora disponible)': [1],
  'Tiempos de la reperfusión en el IAMCEST': [1, 3],
  'Contraindicaciones de la fibrinólisis (calculadora disponible)': [3],
  'Definiciones del choque cardiogénico': [4]
};

export const escalaCalc = {
  'Probabilidad clínica de enfermedad coronaria obstructiva, RF-CL (calculadora disponible)': 'probabilidadEac',
  'Estrategia invasiva en el SCASEST según el riesgo (calculadora disponible)': 'estrategiaScasest',
  'Contraindicaciones de la fibrinólisis (calculadora disponible)': 'fibrinolisisScacest'
};

export const compGroups = [
  { title: 'Síndrome coronario crónico', items: ['Síndrome coronario crónico con enfermedad obstructiva', 'Angina e isquemia sin enfermedad coronaria obstructiva (ANOCA/INOCA)'] },
  { title: 'Síndrome coronario agudo', items: ['Síndrome coronario agudo sin elevación del ST', 'Infarto agudo de miocardio con elevación del ST', 'MINOCA e infarto tipo 2', 'Tratamiento antitrombótico y prevención secundaria tras el SCA'] },
  { title: 'Complicaciones del infarto', items: ['Choque cardiogénico en el síndrome coronario agudo', 'Complicaciones mecánicas del infarto', 'Infarto del ventrículo derecho', 'Arritmias en el síndrome coronario agudo', 'Trombo intraventricular izquierdo', 'Insuficiencia cardiaca aguda en el síndrome coronario agudo'] }
];

export const complicacionesIntro = 'Las fichas van en dos niveles. Las SEIS primeras son las formas de la enfermedad, crónicas y agudas, y el tratamiento antitrombótico y de prevención que comparten todas, con los campos completos. Las SEIS últimas son complicaciones del infarto: su definición dice de qué ficha dependen y su fisiopatología solo explica lo propio. El choque cardiogénico de cualquier causa está en el tema de Estado de choque, y la insuficiencia cardiaca aguda en sí, en el tema de Insuficiencia cardiaca.';

export const modalLabels = {
  itemName: 'Ficha',
  criterios_tips: 'Revascularización, dispositivos y procedimientos',
  criterios_trasplante: 'Soporte avanzado',
  monitorizacionTitulo: 'Vigilancia tras la reperfusión',
  prevencion: 'Prevención secundaria'
};

export const diagnosticoIntro = 'En el síndrome coronario agudo el diagnóstico empieza con un electrocardiograma en menos de 10 minutos, porque divide a los pacientes en dos caminos que no esperan a la troponina: elevación del ST, que es reperfusión, y sin elevación, que es estratificación del riesgo con la troponina de alta sensibilidad. En el síndrome crónico empieza con una cuenta: el síntoma, la edad, el sexo y los factores de riesgo dan la probabilidad de enfermedad obstructiva, y esa probabilidad decide si hace falta una prueba y cuál.';

export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas y tiempos' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Vigilancia' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];

export const arbol = {
  root: { title: 'CARDIOPATÍA ISQUÉMICA', color: '#7d3c2a', target: 'definicion' },
  branches: [
    { title: 'Síndrome crónico', sub: 'Probabilidad RF-CL', color: '#7d3c2a', target: 'clasificacion', leaves: [
      { title: '5% o menos', sub: 'Diferir pruebas', color: '#3d5a73', target: 'clasificacion' },
      { title: '5 a 50%', sub: 'Angio-TC', color: '#3f6b52', target: 'diagnostico' },
      { title: '15 a 85%', sub: 'Imagen funcional', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'Con elevación del ST', sub: 'Reperfundir', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Angioplastia', sub: 'Menos de 120 min', color: '#8c2e2e', target: 'clasificacion' },
      { title: 'Fibrinólisis', sub: 'Menos de 10 min', color: '#9c3a52', target: 'clasificacion' },
      { title: 'Tras la lisis', sub: 'Rescate o 2 a 24 h', color: '#6b4a2e', target: 'clasificacion' }
    ] },
    { title: 'Sin elevación del ST', sub: 'Riesgo decide el momento', color: '#9c3a2e', target: 'complicaciones', leaves: [
      { title: 'Muy alto', sub: 'Inmediata', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Alto', sub: 'Menos de 24 h', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Troponina 0 h/1 h', sub: 'Descartar o confirmar', color: '#3d5a73', target: 'diagnostico' }
    ] },
    { title: 'Complicaciones', sub: 'Choque, mecánicas, arritmias', color: '#5c2e2e', target: 'complicaciones' },
    { title: 'Prevención', sub: 'LDL de menos de 55', color: '#3f6b52', target: 'seguimiento' }
  ]
};

export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 2], imagen: [1, 2] };
export const clasificacionCite = [1, 2, 3, 4];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['reloj-reperfusion'];
export const figurasClasificacion = ['riesgo-scasest'];

export const figuras = {
  'reloj-reperfusion': {
    titulo: 'El reloj del infarto con elevación del ST',
    fuente: 'Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023;44(38):3720-3826, Figura 7 y Tabla de recomendaciones 4. Rao SV, et al. Circulation 2025;151, Tabla 13.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Momento</th><th>Objetivo</th><th>Qué se hace</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Primer contacto</td><td><span class="figure-tag fail">menos de 10 min</span></td><td>Electrocardiograma de 12 derivaciones interpretado (I B). Si hay elevación del ST o un equivalente: diagnóstico de trabajo de infarto y triage para reperfusión (I A).</td></tr>
            <tr><td class="figure-org">Angioplastia primaria</td><td><span class="figure-tag">menos de 120 min</span></td><td>Del diagnóstico a la angioplastia: si se cumple, angioplastia primaria antes que fibrinólisis (I A). Menos de 60 min hasta la guía en un centro con hemodinámica; menos de 90 si llega trasladado.</td></tr>
            <tr><td class="figure-org">Fibrinólisis</td><td><span class="figure-tag dys">menos de 10 min</span></td><td>Si la angioplastia no llega en 120 min: bolo de fibrinolítico específico de fibrina en menos de 10 min del diagnóstico, dentro de las 12 h del inicio (I A). Tenecteplasa de 30 a 50 mg según el peso; media dosis por encima de 75 años (IIa B).</td></tr>
            <tr><td class="figure-org">Tras la fibrinólisis</td><td><span class="figure-tag">60 a 90 min</span></td><td>Traslado inmediato a un centro con hemodinámica (I A). Resolución del ST de menos del 50%, inestabilidad o dolor: angioplastia de rescate (I A).</td></tr>
            <tr><td class="figure-org">Fibrinólisis eficaz</td><td><span class="figure-tag">2 a 24 h</span></td><td>Coronariografía y angioplastia de la arteria responsable si procede (I A).</td></tr>
            <tr><td class="figure-org">Llega tarde</td><td><span class="figure-tag">12 a 48 h / más de 48 h</span></td><td>Más de 12 h con síntomas, inestabilidad o arritmias: angioplastia (I C). De 12 a 48 h: debe considerarse la angioplastia sistemática (IIa B). Más de 48 h sin síntomas: no abrir la arteria ocluida (III A).</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Lo que esta tabla existe para fijar es que el tiempo de la reperfusión es <strong>absoluto, del diagnóstico al paso de la guía</strong>: 120 minutos. Como el bolo de fibrinolítico debe darse en 10, eso equivale a aceptar unos 110 a 120 minutos de retraso atribuible a la angioplastia. Y la fibrinólisis no es el final: <strong>todo paciente fibrinolizado se traslada</strong> a un centro con hemodinámica, haya funcionado o no.</div>`
  },
  'riesgo-scasest': {
    titulo: 'Cuándo cateterizar el síndrome coronario agudo sin elevación del ST',
    fuente: 'Byrne RA, et al. Eur Heart J 2023;44(38):3720-3826, Figura 8 y Tabla de recomendaciones 4.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Riesgo</th><th>Basta con uno de estos criterios</th><th>Estrategia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Muy alto</td><td>Inestabilidad hemodinámica o choque; dolor recurrente o refractario; arritmias que amenazan la vida o parada tras llegar; complicaciones mecánicas; insuficiencia cardiaca aguda por isquemia; cambios dinámicos recurrentes del ST o la T, sobre todo elevación intermitente</td><td><span class="figure-tag fail">inmediata</span> I C</td></tr>
            <tr><td class="figure-org">Alto</td><td>Infarto sin elevación del ST confirmado por el algoritmo de troponina; cambios dinámicos del ST o la T; elevación transitoria del ST; GRACE por encima de 140</td><td><span class="figure-tag dys">menos de 24 h</span> IIa A, y siempre durante el ingreso, I A</td></tr>
            <tr><td class="figure-org">Ni uno ni otro</td><td>Sospecha alta de angina inestable</td><td>Invasiva durante el ingreso, I A</td></tr>
            <tr><td class="figure-org">Ni uno ni otro</td><td>Sospecha baja</td><td>Selectiva tras prueba de isquemia o angio-TC, I A</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos ideas. La primera: la troponina <strong>no hace falta</strong> para decidir la estrategia inmediata; si hay un criterio de muy alto riesgo, se cateteriza ya. La segunda: en este grupo no se pretrata con un inhibidor del P2Y12 si la coronariografía será en menos de 24 horas y no se conoce la anatomía (III A).</div>`
  }
};
