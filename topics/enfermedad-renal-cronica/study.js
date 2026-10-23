// topics/enfermedad-renal-cronica/study.js
// 48 subpreguntas (30 sueltas y 6 casos en cascada de 3 pasos) y 32 fichas.
// Las opciones se escribieron siguiendo .claude/skills/reglas-preguntas/SKILL.md: misma
// categoría lógica entre las cuatro, longitud comparable, distractores plausibles y sin
// absolutismos que delaten la correcta.

export const quiz = [
    { q: '¿Cuánto tiempo debe durar la alteración para hablar de enfermedad renal crónica?', options: ['6 semanas o más', '6 meses o más', '12 meses o más', '3 meses o más'], correct: 3, explanation: 'La definición exige 3 meses o más. Esa ventana es la que separa la enfermedad crónica de la lesión renal aguda, que se maneja de otra forma.', dificultad: 'facil' },

    { q: 'Un paciente tiene filtrado de 75 y cociente albúmina/creatinina de 120 mg/g, confirmados a los 3 meses. ¿Qué tiene?', options: ['Enfermedad renal crónica G2 A2', 'Función renal normal para su edad', 'Albuminuria aislada sin enfermedad renal', 'Enfermedad renal crónica G3a A1'], correct: 0, explanation: 'G2 por el filtrado entre 60 y 89, y A2 por el cociente entre 30 y 300. Con filtrado de 60 o más sí hay enfermedad si existe un marcador de daño, y la albuminuria es el más frecuente.', dificultad: 'facil' },

    { q: '¿Qué aporta la albuminuria que el filtrado por sí solo no da?', options: ['Pronóstico dentro de cada categoría de filtrado', 'La causa concreta de la enfermedad renal', 'La velocidad de progresión del último año', 'El grado de retención de productos nitrogenados'], correct: 0, explanation: 'La albuminuria mueve el pronóstico dentro de cada categoría G, y por eso medir solo la creatinina infraestima el riesgo de forma sistemática.', dificultad: 'intermedio' },

    { q: 'Según la guía de 2024, ¿cómo debe estimarse la categoría G cuando se dispone de cistatina C?', options: ['Con cistatina C sola, que es más exacta', 'Con creatinina sola, que es la validada', 'Promediando los dos resultados por separado', 'Combinando creatinina y cistatina C'], correct: 3, explanation: 'La recomendación 1B indica estimar la categoría G con la combinación de ambos marcadores. Sus errores no van en la misma dirección, de modo que juntos son más exactos.', dificultad: 'intermedio' },

    { q: '¿Qué dice la guía sobre incluir la raza en el cálculo del filtrado estimado?', options: ['Se mantiene en las ecuaciones antiguas', 'Se usa cuando falta la cistatina C', 'Debe evitarse', 'Se aplica solo en población negra'], correct: 2, explanation: 'Es un punto de práctica explícito: el uso de la raza en la estimación del filtrado debe evitarse. Las ecuaciones CKD-EPI de 2021 ya están construidas sin ella.', dificultad: 'intermedio' },

    { q: 'Paciente con sarcopenia marcada y creatinina de 0.9 mg/dL. ¿Qué conviene hacer?', options: ['Añadir cistatina C al cálculo', 'Confiar en la creatinina, que es normal', 'Medir proteinuria de 24 horas', 'Repetir la creatinina en ayunas'], correct: 0, explanation: 'La masa muscular baja mantiene la creatinina engañosamente normal. La combinación con cistatina C reclasifica a estos pacientes y cambia el ajuste de dosis.', dificultad: 'intermedio' },

    { q: '¿Cuál es el objetivo de presión sistólica que sugiere la guía de 2024 en la ERC?', options: ['Menos de 120 mmHg si se tolera', 'Menos de 130 mmHg si se tolera', 'Menos de 140 mmHg en todos', 'Menos de 150 mmHg si hay fragilidad'], correct: 0, explanation: 'La recomendación 2B fija una sistólica menor de 120 mmHg cuando se tolere, medida de forma estandarizada. Aplicar ese número a una toma apresurada de pasillo lleva a sobretratar.', dificultad: 'intermedio' },

    { q: 'En la ERC sin diabetes con albuminuria A3, ¿qué tratamiento recomienda la guía?', options: ['Antagonista del receptor mineralocorticoide', 'Agonista del receptor de GLP-1', 'Diurético de asa a dosis baja', 'Bloqueo del sistema renina-angiotensina'], correct: 3, explanation: 'La recomendación 1B indica iniciar IECA o ARA-II en ERC con albuminuria severamente aumentada sin diabetes, a la dosis máxima aprobada que se tolere.', dificultad: 'facil' },

    { q: '¿Qué combinación de bloqueantes del eje renina-angiotensina desaconseja la guía?', options: ['IECA con ARA-II o con inhibidor directo de renina', 'IECA con antagonista del calcio', 'ARA-II con diurético tiazídico', 'IECA con betabloqueante cardioselectivo'], correct: 0, explanation: 'La recomendación 1B indica evitar cualquier combinación entre IECA, ARA-II e inhibidor directo de renina: aumentan los eventos adversos sin beneficio.', dificultad: 'intermedio' },

    { q: 'Un paciente sin diabetes tiene filtrado de 35 y cociente de 350 mg/g. ¿Corresponde un inhibidor del SGLT2?', options: ['Solo cuando el filtrado baje de 30', 'Sí, por filtrado de 20 o más con cociente de 200 o más', 'No, porque no tiene diabetes tipo 2', 'Solo si además hay insuficiencia cardiaca'], correct: 1, explanation: 'La recomendación 1A cubre a cualquier adulto con ERC, filtrado de 20 o más y cociente de 200 mg/g o más, con diabetes o sin ella.', dificultad: 'intermedio' },

    { q: 'Tras iniciar un IECA, el filtrado cae un 18% a las tres semanas. ¿Qué se hace?', options: ['Suspenderlo por nefrotoxicidad', 'Reducir la dosis a la mitad', 'Cambiarlo por un antagonista del calcio', 'Mantener el fármaco y seguir el control'], correct: 3, explanation: 'Un descenso menor del 30% es el efecto hemodinámico esperado: refleja la caída de la presión intraglomerular, que es el mecanismo por el que protege.', dificultad: 'intermedio' },

    { q: '¿Qué descenso del filtrado tras iniciar el bloqueo del SRA obliga a investigar otra causa?', options: ['15% o más', '50% o más', '30% o más', '10% o más'], correct: 2, explanation: 'La guía de 2024 fija el umbral en un descenso del 30% o más del filtrado estimado, no en un ascenso de la creatinina, para buscar depleción de volumen, antiinflamatorios o estenosis de arteria renal.', dificultad: 'dificil' },

    { q: '¿Cuál es la conducta ante un potasio de 5.4 en un paciente que toma IECA por albuminuria?', options: ['Suspender el IECA de forma definitiva', 'Reducir el IECA a dosis mínima', 'Sustituirlo por un inhibidor directo de renina', 'Tratar el potasio para mantener el fármaco'], correct: 3, explanation: 'La estrategia es dieta, corrección de la acidosis, revisión de fármacos y quelante si hace falta, para poder mantener el tratamiento que protege el riñón.', dificultad: 'intermedio' },

    { q: '¿Qué requisito de potasio pide la guía antes de añadir un antagonista no esteroideo del receptor mineralocorticoide?', options: ['Potasio medido en las últimas 24 horas', 'Potasio sérico normal', 'Potasio por debajo de 4.0', 'Potasio por encima de 3.5'], correct: 1, explanation: 'La recomendación 2A exige diabetes tipo 2, filtrado mayor de 25, potasio normal y albuminuria mayor de 30 mg/g pese a dosis máxima tolerada de bloqueo del SRA.', dificultad: 'dificil' },

    { q: 'En diabetes tipo 2 con ERC, ¿a partir de qué filtrado se recomienda iniciar un inhibidor del SGLT2?', options: ['30 mL/min/1.73 m2 o más', '45 mL/min/1.73 m2 o más', '60 mL/min/1.73 m2 o más', '20 mL/min/1.73 m2 o más'], correct: 3, explanation: 'La recomendación 1A fija el umbral de inicio en un filtrado de 20 o más. Una vez iniciado, es razonable mantenerlo aunque el filtrado caiga por debajo de esa cifra.', dificultad: 'intermedio' },

    { q: '¿Qué se hace con el inhibidor del SGLT2 si el filtrado baja de 20 en un paciente que ya lo tomaba?', options: ['Es razonable mantenerlo', 'Se suspende al cruzar el umbral', 'Se reduce la dosis a la mitad', 'Se sustituye por una sulfonilurea'], correct: 0, explanation: 'El punto de práctica es explícito: una vez iniciado, es razonable continuar aunque el filtrado caiga por debajo de 20, salvo intolerancia o inicio de terapia de reemplazo.', dificultad: 'dificil' },

    { q: '¿En qué situaciones conviene retirar temporalmente el inhibidor del SGLT2?', options: ['Infección urinaria baja no complicada', 'Cualquier ingreso hospitalario programado', 'Descenso inicial esperado del filtrado', 'Ayuno prolongado, cirugía o enfermedad crítica'], correct: 3, explanation: 'El punto de práctica señala esas tres situaciones por el riesgo de cetosis. No es motivo de retirada el descenso reversible del filtrado al iniciarlo.', dificultad: 'intermedio' },

    { q: '¿Cuál es la ingesta de proteínas que sugiere la guía en ERC G3 a G5?', options: ['1.2 g/kg/día', '0.8 g/kg/día', '0.6 g/kg/día', '1.0 g/kg/día'], correct: 1, explanation: 'La recomendación 2C sugiere 0.8 g/kg/día, evitando ingestas mayores de 1.3 g/kg/día en quien tiene riesgo de progresión.', dificultad: 'intermedio' },

    { q: '¿Qué ingesta de sodio sugiere la guía en la enfermedad renal crónica?', options: ['Sin restricción si la tensión es normal', 'Menos de 2 g de sodio al día', 'Menos de 4 g de sodio al día', 'Menos de 1 g de sodio al día'], correct: 1, explanation: 'La recomendación 2C fija menos de 2 g de sodio al día, equivalente a menos de 5 g de sal. La excepción es la nefropatía pierde-sal.', dificultad: 'facil' },

    { q: '¿En qué paciente NO es apropiada la restricción de sodio?', options: ['Poliquistosis renal del adulto', 'Nefroangioesclerosis hipertensiva', 'Nefropatía pierde-sal', 'Nefropatía diabética establecida'], correct: 2, explanation: 'El punto de práctica lo señala como la excepción: en la nefropatía pierde-sal la restricción no es apropiada y puede empeorar la situación.', dificultad: 'dificil' },

    { q: '¿Cuánta actividad física recomienda la guía en la enfermedad renal crónica?', options: ['300 minutos semanales de cualquier intensidad', '30 minutos diarios de intensidad alta', '150 minutos semanales de intensidad moderada', '75 minutos semanales de intensidad alta'], correct: 2, explanation: 'La recomendación 1D fija al menos 150 minutos semanales acumulados de intensidad moderada, o el nivel que permita la tolerancia cardiovascular.', dificultad: 'facil' },

    { q: 'Adulto de 58 años con filtrado de 48, sin diálisis ni trasplante. ¿Qué corresponde en lípidos?', options: ['Nada hasta conocer el perfil lipídico', 'Estatina o estatina con ezetimiba', 'Estatina solo si el LDL supera 100', 'Fibrato por el riesgo renal'], correct: 1, explanation: 'La recomendación 1A cubre a los adultos de 50 años o más con filtrado menor de 60 que no están en diálisis ni trasplantados. La indicación depende de la edad y del filtrado, no del colesterol.', dificultad: 'intermedio' },

    { q: '¿Para qué indicación está respaldada la aspirina en la enfermedad renal crónica?', options: ['Prevención primaria desde G3a', 'Prevención primaria en diabéticos', 'Protección del acceso vascular', 'Prevención secundaria'], correct: 3, explanation: 'La recomendación 1C es para prevención secundaria: pacientes con ERC y enfermedad cardiovascular isquémica establecida.', dificultad: 'intermedio' },

    { q: 'En fibrilación auricular con ERC G1 a G4, ¿qué anticoagulante se prefiere?', options: ['Anticoagulante oral de acción directa', 'Antagonista de la vitamina K', 'Heparina de bajo peso molecular', 'Antiagregante doble en su lugar'], correct: 0, explanation: 'La recomendación 1C prefiere los anticoagulantes directos sobre los antagonistas de la vitamina K, con ajuste de dosis por filtrado y cautela en G4 y G5.', dificultad: 'intermedio' },

    { q: '¿Cuál es la primera causa de muerte en el paciente con enfermedad renal crónica?', options: ['Neoplasia de vía urinaria', 'Enfermedad cardiovascular', 'Falla renal terminal', 'Infección asociada a diálisis'], correct: 1, explanation: 'La mayoría de los pacientes con ERC muere de causa cardiovascular antes de llegar a necesitar terapia de reemplazo, y eso ordena las prioridades del tratamiento.', dificultad: 'facil' },

    { q: '¿Qué riesgo de falla renal a 5 años sirve como criterio de derivación a nefrología?', options: ['Del 20 al 25%', 'Del 3 al 5%', 'Del 10 al 15%', 'Del 1 al 2%'], correct: 1, explanation: 'El punto de práctica 2.2.1 propone un riesgo a 5 años del 3 al 5% como criterio de derivación, añadido a los criterios por filtrado y albuminuria.', dificultad: 'dificil' },

    { q: '¿Qué riesgo de falla renal a 2 años marca el momento de la atención multidisciplinaria?', options: ['Mayor del 25%', 'Mayor del 50%', 'Mayor del 10%', 'Mayor del 3%'], correct: 2, explanation: 'El punto de práctica 2.2.2 fija un riesgo a 2 años mayor del 10% para decidir el momento de la atención multidisciplinaria, junto a los criterios por filtrado.', dificultad: 'dificil' },

    { q: 'Paciente con ERC que toma trimetoprim y sube la creatinina sin otros cambios. ¿Qué ocurre?', options: ['Bloquea la secreción tubular de creatinina', 'Produce necrosis tubular aguda', 'Causa nefritis intersticial inmediata', 'Aumenta la producción muscular de creatinina'], correct: 0, explanation: 'Trimetoprim, cimetidina y dolutegravir bloquean la secreción tubular de creatinina: la cifra sube, el filtrado real no cambia y no hay que suspender nada por eso.', dificultad: 'dificil' },

    { q: 'Ante una anemia en un paciente con ERC G3b, ¿cuál es el primer paso?', options: ['Atribuirla al déficit de eritropoyetina', 'Estudiar otras causas antes de atribuirla al riñón', 'Iniciar eritropoyetina de inmediato', 'Transfundir si la hemoglobina baja de 10'], correct: 1, explanation: 'Toda anemia en la ERC merece descartar ferropenia, déficit de B12 o folato y pérdidas digestivas antes de atribuirla al riñón, porque esas causas tienen tratamiento propio.', dificultad: 'intermedio' },

    { q: '¿Por qué importa el trastorno mineral y óseo más allá del hueso?', options: ['Altera el aclaramiento de fármacos', 'Acelera la pérdida de albúmina', 'Calcifica la pared vascular', 'Produce anemia resistente'], correct: 2, explanation: 'El mismo trastorno que daña el hueso calcifica la pared arterial, y ese es el puente entre la enfermedad ósea y la mortalidad cardiovascular. Por eso se llama trastorno mineral y óseo.', dificultad: 'intermedio' },

    {
      type: 'cascade',
      vignette: 'Mujer de 64 años con diabetes tipo 2 de 12 años de evolución acude a control. Filtrado estimado de 38 mL/min/1.73 m2, cociente albúmina/creatinina de 620 mg/g y potasio de 4.4 mmol/L. Toma metformina y una dosis baja de enalapril. La presión arterial, medida de forma estandarizada, es de 142/84 mmHg.',
      steps: [
        { q: '¿En qué casilla y con qué riesgo está?', options: ['G4 A3, riesgo muy alto', 'G3b A3, riesgo muy alto', 'G3a A3, riesgo alto', 'G3b A2, riesgo alto'], correct: 1, explanation: 'Filtrado de 38 es G3b (30 a 44) y cociente de 620 es A3 (más de 300). Esa casilla es de riesgo muy alto.' },
        { q: '¿Qué se hace primero con el enalapril?', options: ['Mantenerlo a dosis baja por el filtrado', 'Sustituirlo por un ARA-II', 'Añadirle un ARA-II para doble bloqueo', 'Subirlo a la dosis máxima que tolere'], correct: 3, explanation: 'El punto de práctica indica usar la dosis máxima aprobada que se tolere: la dosis baja "de protección renal" no es lo que se estudió. Y nunca combinar IECA con ARA-II.' },
        { q: '¿Qué pilar se añade ahora?', options: ['Antagonista mineralocorticoide esteroideo', 'Diurético de asa a dosis baja', 'Inhibidor del SGLT2', 'Agonista del receptor de GLP-1'], correct: 2, explanation: 'Diabetes tipo 2 con ERC y filtrado de 20 o más tiene recomendación 1A para el inhibidor del SGLT2. El antagonista no esteroideo vendría después, si persiste la albuminuria con el bloqueo del SRA ya a dosis máxima.' }
      ],
      explanation: 'El caso recorre el orden real: situar la casilla, exprimir el fármaco que ya tomaba y solo entonces sumar el siguiente pilar.',
      dificultad: 'intermedio'
    },

    {
      type: 'cascade',
      vignette: 'Varón de 71 años acude por astenia. Creatinina de 1.6 mg/dL con filtrado estimado de 42, sin analíticas previas. Cociente albúmina/creatinina de 22 mg/g. La ecografía muestra riñones de 9 cm, hiperecogénicos, sin dilatación.',
      steps: [
        { q: '¿Qué apoya que el cuadro sea crónico y no agudo?', options: ['La ausencia de dilatación de la vía', 'El cociente de albúmina normal', 'Los riñones pequeños e hiperecogénicos', 'La cifra de creatinina de 1.6'], correct: 2, explanation: 'Unos riñones pequeños e hiperecogénicos son un marcador estructural de cronicidad, y resuelven el caso frecuente del paciente sin analíticas previas.' },
        { q: 'Con cociente de 22 mg/g, ¿en qué categoría A está?', options: ['A2, de 30 a 300 mg/g', 'A3, más de 300 mg/g', 'Sin clasificar hasta la orina de 24 h', 'A1, menos de 30 mg/g'], correct: 3, explanation: 'A1 es un cociente menor de 30 mg/g. La orina de 24 horas no hace falta: el cociente en muestra aislada es el método recomendado.' },
        { q: '¿Qué riesgo tiene esta casilla G3b A1?', options: ['Muy alto', 'Alto', 'Bajo', 'Moderado'], correct: 1, explanation: 'G3b con A1 cae en la franja de riesgo alto de la rejilla de KDIGO. Mirando solo la albuminuria, que es normal, el caso parecería tranquilo.' }
      ],
      explanation: 'Dos enseñanzas: la imagen resuelve la cronicidad cuando no hay analíticas previas, y la casilla completa puede ser de riesgo alto con albuminuria normal.',
      dificultad: 'intermedio'
    },

    {
      type: 'cascade',
      vignette: 'Paciente de 55 años con ERC G3a A2 sin diabetes inicia ramipril. A las tres semanas acude con el control: el filtrado ha bajado de 52 a 34 mL/min/1.73 m2 y el potasio es de 4.8 mmol/L. Refiere que lleva cuatro días tomando ibuprofeno por lumbalgia.',
      steps: [
        { q: '¿Qué porcentaje ha caído el filtrado y qué significa?', options: ['Un 35%, que obliga a investigar', 'Un 35%, que es el efecto esperado', 'Un 18%, que es el efecto esperado', 'Un 52%, que obliga a suspender'], correct: 0, explanation: 'De 52 a 34 son 18 puntos sobre 52, un 35%. Al alcanzar el umbral del 30% la guía indica investigar otra causa, no suspender de entrada.' },
        { q: '¿Cuál es la causa más probable en este paciente?', options: ['La progresión de la enfermedad', 'El ibuprofeno', 'La dosis de ramipril', 'El potasio de 4.8'], correct: 1, explanation: 'Los antiinflamatorios no esteroideos son una de las causas que la guía manda buscar ante ese descenso, junto a la depleción de volumen y la estenosis de arteria renal.' },
        { q: '¿Qué se hace con el ramipril?', options: ['Bajar el ramipril a la mitad sin más', 'Añadir un quelante del potasio', 'Retirar el ibuprofeno y recontrolar', 'Suspender el ramipril de forma definitiva'], correct: 2, explanation: 'Se corrige la causa reversible y se vuelve a medir. El potasio de 4.8 es normal y no obliga a nada por sí mismo.' }
      ],
      explanation: 'El umbral del 30% no es una orden de suspender: es una orden de buscar. La causa más frecuente está en la lista de fármacos.',
      dificultad: 'dificil'
    },

    {
      type: 'cascade',
      vignette: 'Varón de 48 años con ERC G4 A3 por glomerulonefritis, filtrado de 22 y riesgo de falla renal a 2 años del 18%. Acude a consulta de medicina interna. No tiene acceso vascular y nunca se ha hablado con él de las modalidades de tratamiento.',
      steps: [
        { q: '¿Qué indica un riesgo a 2 años del 18%?', options: ['Iniciar diálisis en las próximas semanas', 'Repetir el cálculo en un año', 'Esperar a que el filtrado baje de 15', 'Organizar la atención multidisciplinaria'], correct: 3, explanation: 'El punto de práctica fija un riesgo a 2 años mayor del 10% como momento para organizar la atención multidisciplinaria, que incluye hablar de modalidades y de acceso.' },
        { q: '¿Qué cuidado conviene tomar desde hoy en el hospital?', options: ['Evitar cualquier contraste de por vida', 'Suspender el bloqueo del SRA preventivamente', 'Preservar el capital venoso del brazo', 'Restringir líquidos de forma estricta'], correct: 2, explanation: 'Las vías periféricas y las extracciones repetidas en el brazo del futuro acceso pueden costar una fístula. Es una decisión de dos segundos con consecuencias de años.' },
        { q: '¿Qué ventaja tiene llegar al reemplazo de forma planificada?', options: ['Suprime el riesgo cardiovascular asociado', 'Mejores resultados que empezar por catéter', 'Permite retrasar el inicio un año más', 'Evita la necesidad de trasplante posterior'], correct: 1, explanation: 'Llegar con acceso maduro y modalidad elegida mejora los resultados frente a empezar de urgencia por un catéter, que es la vía con más complicaciones.' }
      ],
      explanation: 'La preparación del reemplazo empieza mucho antes de la indicación, y buena parte de ella se decide en consultas y en ingresos por otros motivos.',
      dificultad: 'intermedio'
    },

    {
      type: 'cascade',
      vignette: 'Mujer de 69 años con ERC G3b A2 y diabetes tipo 2 ingresa por neumonía. Toma empagliflozina, losartán a dosis máxima y atorvastatina. Está deshidratada, con presión de 96/58 mmHg, y va a necesitar ayuno para una prueba a las 48 horas.',
      steps: [
        { q: '¿Qué hacer con la empagliflozina durante el ingreso?', options: ['Doblar la dosis por la hiperglucemia', 'Sustituirla por insulina basal y mantenerla', 'Retirarla temporalmente', 'Mantenerla sin cambios'], correct: 2, explanation: 'El punto de práctica indica retirarla en ayuno prolongado, cirugía o enfermedad crítica, por el riesgo de cetoacidosis euglucémica.' },
        { q: '¿Qué riesgo renal añade este ingreso?', options: ['Lesión renal aguda sobre crónica', 'Glomerulonefritis rápidamente progresiva', 'Nefropatía por cristales de urato', 'Estenosis de arteria renal aguda'], correct: 0, explanation: 'La ERC es el principal factor de riesgo de lesión renal aguda, y cada episodio deja al paciente en un escalón peor del que estaba.' },
        { q: '¿Qué hay que revisar al alta?', options: ['Reintroducir los fármacos suspendidos', 'Suspender la estatina por el ingreso', 'Repetir el cociente en 24 horas', 'Mantener el ayuno una semana más'], correct: 0, explanation: 'La suspensión transitoria de un inhibidor del SGLT2 o del bloqueo del SRA se vuelve permanente con facilidad si nadie la revisa al alta.' }
      ],
      explanation: 'El ingreso por otra causa es donde más fácilmente se pierde el tratamiento que protege el riñón, en los dos sentidos: por no retirarlo cuando toca y por no reintroducirlo después.',
      dificultad: 'dificil'
    },

    {
      type: 'cascade',
      vignette: 'Varón de 60 años, sin diabetes, con ERC G3a A3 (filtrado 50, cociente 480 mg/g) y fibrilación auricular permanente. Ya toma ramipril a dosis máxima tolerada. El potasio es de 4.9 mmol/L y no tiene enfermedad cardiovascular isquémica.',
      steps: [
        { q: '¿Corresponde un inhibidor del SGLT2?', options: ['No, porque no tiene diabetes', 'No, porque el filtrado supera 45', 'Solo si aparece insuficiencia cardiaca', 'Sí, por cociente de 200 o más'], correct: 3, explanation: 'La recomendación 1A cubre a cualquier adulto con filtrado de 20 o más y cociente de 200 mg/g o más, tenga diabetes o no.' },
        { q: '¿Corresponde un antagonista no esteroideo del receptor mineralocorticoide?', options: ['Sí, porque el potasio es normal', 'No, porque el filtrado es mayor de 45', 'No, la recomendación es para diabetes tipo 2', 'Sí, por la albuminuria persistente'], correct: 2, explanation: 'La recomendación 2A está formulada para adultos con diabetes tipo 2. Sin ella no aplica, aunque se cumplan el filtrado, el potasio y la albuminuria.' },
        { q: '¿Qué anticoagulación corresponde?', options: ['Anticoagulante directo, ajustado al filtrado', 'Antagonista de la vitamina K con INR estrecho', 'Aspirina en lugar de anticoagular', 'Esperar a que el filtrado baje de 30'], correct: 0, explanation: 'En ERC G1 a G4 se prefieren los anticoagulantes directos sobre los antagonistas de la vitamina K (1C), con ajuste de dosis por filtrado.' }
      ],
      explanation: 'Tres decisiones en el mismo paciente, y en dos de ellas la diabetes es la que decide: habilita el antagonista mineralocorticoide pero no hace falta para el inhibidor del SGLT2.',
      dificultad: 'dificil'
    }
];

export const flashcards = [
    { front: '¿Cuánto dura la "crónica" de la enfermedad renal crónica?', back: '3 meses o más. Sin eso es lesión renal aguda o enfermedad renal aguda.' },
    { front: '¿Los dos ejes que definen y estadifican', back: 'Filtrado estimado (G1 a G5) y cociente albúmina/creatinina (A1 a A3). Siempre los dos.' },
    { front: 'Rangos de la categoría G', back: 'G1 90 o más; G2 60 a 89; G3a 45 a 59; G3b 30 a 44; G4 15 a 29; G5 menos de 15.' },
    { front: 'Rangos de la categoría A', back: 'A1 menos de 30 mg/g; A2 de 30 a 300; A3 más de 300.' },
    { front: '¿Un filtrado de 75 con cociente de 120 es enfermedad renal?', back: 'Sí: G2 A2. Con filtrado de 60 o más hace falta un marcador de daño, y la albuminuria es el más frecuente.' },
    { front: '¿Qué marcador aporta pronóstico dentro de cada categoría G?', back: 'La albuminuria. Medir solo la creatinina infraestima el riesgo de forma sistemática.' },
    { front: '¿Cómo estimar la categoría G si hay cistatina C?', back: 'Con la combinación de creatinina y cistatina C (1B): sus errores no van en la misma dirección.' },
    { front: '¿Se usa la raza en el cálculo del filtrado?', back: 'No. La guía indica explícitamente que debe evitarse.' },
    { front: '¿Cuándo pedir cistatina C?', back: 'Masa muscular extrema en cualquier sentido, amputaciones, desnutrición o cirrosis: cuando la creatinina no es fiable y la cifra cambia una decisión.' },
    { front: '¿Sirve la tira reactiva para la albuminuria?', back: 'No sustituye al cociente: es poco sensible justo para la albuminuria moderada, que es la que interesa detectar.' },
    { front: 'Objetivo de presión arterial en la ERC', back: 'Sistólica menor de 120 mmHg si se tolera (2B), con medición estandarizada, no de pasillo.' },
    { front: '¿Cuándo aflojar el objetivo tensional?', back: 'Fragilidad, riesgo alto de caídas y fracturas, expectativa de vida muy limitada o hipotensión postural sintomática.' },
    { front: 'Los cuatro pilares que frenan la progresión', back: 'Bloqueo del SRA, inhibidor del SGLT2, antagonista no esteroideo del receptor mineralocorticoide y agonista del receptor de GLP-1.' },
    { front: '¿A qué dosis el bloqueo del SRA?', back: 'A la dosis máxima aprobada que el paciente tolere. La dosis baja "de protección" no es lo que se estudió.' },
    { front: 'Combinación prohibida en el eje renina-angiotensina', back: 'IECA, ARA-II e inhibidor directo de renina entre sí (1B): más eventos adversos sin beneficio.' },
    { front: 'Inhibidor del SGLT2 sin diabetes: ¿cuándo?', back: 'Filtrado de 20 o más con cociente de 200 mg/g o más, o insuficiencia cardiaca con cualquier albuminuria (1A).' },
    { front: '¿Qué pasa con el iSGLT2 si el filtrado baja de 20?', back: 'Si ya lo tomaba, es razonable mantenerlo, salvo intolerancia o inicio de terapia de reemplazo.' },
    { front: '¿Cuándo retirar temporalmente el iSGLT2?', back: 'Ayuno prolongado, cirugía o enfermedad crítica, por el riesgo de cetoacidosis euglucémica.' },
    { front: 'Requisitos del antagonista no esteroideo del receptor mineralocorticoide', back: 'Diabetes tipo 2, filtrado mayor de 25, potasio normal y albuminuria mayor de 30 mg/g pese a bloqueo del SRA a dosis máxima (2A).' },
    { front: '¿Qué descenso del filtrado al iniciar obliga a investigar?', back: 'Un 30% o más. Por debajo es el efecto hemodinámico esperado y el fármaco se mantiene.' },
    { front: '¿Qué buscar si cae un 30% o más?', back: 'Depleción de volumen, antiinflamatorios no esteroideos, obstrucción y estenosis de arteria renal.' },
    { front: 'Conducta ante hiperpotasemia con fármaco protector', back: 'Tratar el potasio para poder mantener el fármaco, no suspender el fármaco para normalizar el potasio.' },
    { front: 'Proteínas y sodio en la ERC', back: 'Proteínas 0.8 g/kg/día en G3 a G5 (2C); sodio menos de 2 g/día (2C), salvo nefropatía pierde-sal.' },
    { front: 'Actividad física recomendada', back: 'Al menos 150 minutos semanales de intensidad moderada (1D), evitando el sedentarismo.' },
    { front: 'Indicación de estatina en la ERC', back: 'Depende de la edad y del filtrado, no del colesterol: 50 años o más con filtrado menor de 60, estatina o estatina con ezetimiba (1A).' },
    { front: '¿Aspirina en la ERC?', back: 'Prevención secundaria, en quien ya tiene enfermedad cardiovascular isquémica establecida (1C).' },
    { front: 'Anticoagulación en fibrilación auricular con ERC G1 a G4', back: 'Anticoagulante directo en preferencia al antagonista de la vitamina K (1C), ajustado al filtrado.' },
    { front: '¿De qué se muere el paciente con ERC?', back: 'De causa cardiovascular, antes de llegar a necesitar diálisis en la mayoría de los casos.' },
    { front: 'Umbrales del riesgo de falla renal (KFRE)', back: '5 años del 3 al 5%: derivar a nefrología. 2 años mayor del 10%: organizar la atención multidisciplinaria.' },
    { front: 'Fármacos que suben la creatinina sin bajar el filtrado', back: 'Trimetoprim, cimetidina y dolutegravir: bloquean su secreción tubular. No hay que suspender nada.' },
    { front: '¿Por qué importa el trastorno mineral y óseo?', back: 'Porque el mismo trastorno que daña el hueso calcifica la pared vascular: es el puente con la mortalidad cardiovascular.' },
    { front: 'Capital venoso en el paciente con ERC avanzada', back: 'Preservar el brazo del futuro acceso: una vía periférica mal colocada puede costar una fístula.' }
];

export default { quiz, flashcards };
