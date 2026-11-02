// topics/glomerulopatias-sindromes-glomerulares/content.js - Modulo 91: Glomerulopatias y
// sindromes glomerulares. Tercero del bloque VI (Nefrologia).
// Fuentes: KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases
// (Kidney Int 2021;100(4S):S1-S276) y Barocas DA, et al. Microhematuria: AUA/SUFU Guideline
// (J Urol 2020;204(4):778-786).
// IDEA QUE ORDENA EL TEMA: el glomerulo falla de dos maneras, y cual de las dos se decide JUNTO A
// LA CAMA, antes de cualquier biopsia. Si el filtro gotea, el cuadro es nefrotico. Si el filtro se
// inflama, es nefritico. El sindrome, y no la histologia, es lo que fija la urgencia, el estudio y
// las primeras decisiones, que es justo la parte que le toca al internista.
// LIMITE DECLARADO DE LA FUENTE: buena parte del detalle de la KDIGO 2021 vive en FIGURAS que la
// extraccion del PDF no devuelve como texto (las de manejo del edema, de la hipertension y de los
// regimenes de cada entidad). Aqui solo se ha escrito lo que esta en el TEXTO, y el tratamiento
// inmunosupresor por entidad se da al nivel de sus recomendaciones graduadas, sin reconstruir de
// memoria lo que la guia pone en una figura.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'glomerulopatias-sindromes-glomerulares',
  titulo: 'Glomerulopatías y Síndromes Glomerulares',
  subtitulo: 'Medicina Interna',
  accent: '#2f6a62'
};

export const definicionText = `<p style="margin:0 0 14px;">El glomerulo falla de <strong>dos maneras</strong>, y distinguirlas no necesita biopsia ni nefrólogo: se decide junto a la cama con la historia, la tensión, el sedimento y una cuantificación de proteinuria. Si el filtro <strong>gotea</strong>, el cuadro es NEFRÓTICO: proteinuria alta, hipoalbuminemia, edema y, detrás de todo eso, trombosis e infección. Si el filtro se <strong>inflama</strong>, es NEFRITICO: hematuria con hematies dismorficos y cilindros, hipertensión y filtrado que cae. El síndrome, y no el nombre de la histología, es lo que fija la urgencia y las primeras decisiones.</p>
<p style="margin:0 0 14px;">Para el internista el tema se reduce a hacer bien <strong>tres cosas</strong> y a reconocer una cuarta. Cuantificar la proteinuria con el método correcto, porque el número que se interpreta depende de como se recogio. Leer la hematuria, que es donde se separa lo glomerular de lo urológico y donde más se falla por los dos lados. Y dar el <strong>tratamiento de soporte</strong>, que funciona sin saber la histología y que la propia guía considera capaz de modular la necesidad de inmunosupresores. La cuarta es saber cual de estas presentaciones es una urgencia: la <strong>glomerulonefritis rápidamente progresiva</strong>, definida como una caída del filtrado del 50% o más en 3 meses o menos.</p>
<p style="margin:0 0 14px;">Dos límites, para que el tema sea útil y honesto. Lo que tiene tema propio se enlaza y no se repite: la enfermedad renal crónica y su progresión están en el módulo 89, los trastornos del sodio, el potasio y el equilibrio ácido-base en el 90, la lesión renal aguda en su tema, y los signos cutáneos que apuntan a una glomerulopatía en el módulo 81. Y el limite de la fuente: buena parte del detalle de la KDIGO 2021 esta en <strong>figuras</strong> que el texto no reproduce, de modo que el tratamiento inmunosupresor por entidad se da aquí al nivel de sus recomendaciones graduadas, sin inventar lo que la guía pone en un diagrama.</p>`;

export const bibliografia = [
  'Kidney Disease: Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group. KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int. 2021;100(4S):S1-S276.',
  'Barocas DA, Boorjian SA, Alvarez RD, et al. Microhematuria: AUA/SUFU Guideline. J Urol. 2020;204(4):778-786.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El síndrome se decide junto a la cama',
      tituloB: 'Las presentaciones que no esperan',
      compensada: 'La pregunta no es "¿qué glomerulopatía es?" sino "¿qué SÍNDROME tengo delante?", porque eso ya ordena todo lo demás. NEFRÓTICO: proteinuria importante, hipoalbuminemia y edema, con hiperlipidemia y riesgo trombótico detrás. Un detalle que la guía subraya: la proteinuria en rango nefrótico NO siempre se acompaña de síndrome nefrótico, porque puede faltar la hipoalbuminemia, y eso se ve sobre todo en la glomeruloesclerosis focal y segmentaria SECUNDARIA y en la nefropatía IgA; y al revés, puede haber síndrome nefrótico con una cuantificación que no llega del todo al rango clásico pero con la clínica completa. NEFRITICO: hematuria glomerular, hipertensión y caída del filtrado. En la hematuria visible de origen glomerular NO hay coagulos y NO suele haber síntomas urinarios, que son las dos pistas que la separan de la urológica en la propia cabecera.',
      descompensada: 'Lo que obliga a moverse el mismo dia. GLOMERULONEFRITIS RÁPIDAMENTE PROGRESIVA: caída del filtrado estimado del 50% o más en 3 meses o menos, una vez excluidas las otras causas (vasculitis asociada a ANCA, enfermedad anti-membrana basal) y las reversibles, como la toxicidad por fármacos y las causas pre y posrenales. La biopsia es ESENCIAL en estos casos. SOSPECHA DE ENFERMEDAD ANTI-MBG: la guía pide que el diagnóstico se haga SIN DEMORA en todo paciente con sospecha de glomerulonefritis rápidamente progresiva, porque es una glomerulonefritis cresentica que puede presentarse como síndrome pulmón-riñón. SÍNDROME NEFRÓTICO CON DOLOR LUMBAR, HEMATURIA O DETERIORO BRUSCO: pensar en trombosis de la vena renal. NEFRÓTICO CON ASCITIS Y FIEBRE: examinar y cultivar el líquido, porque puede haber peritonitis bacteriana espontánea y la bacteriemia ocurre aunque los signos sean solo abdominales. Y un aviso de laboratorio en ese escenario: la velocidad de sedimentación NO ayuda, mientras que la proteína C reactiva si puede informar.'
    },
    laboratorio: [
      { prueba: 'Cuantificación de la proteinuria en orina de 24 horas', utilidad: 'Es el método PREFERIDO en enfermedad glomerular: promedia la variación por ritmo circadiano, actividad física y postura, y evita el error del cociente en una muestra aislada. La guía pide recogida de 24 horas cuando se va a iniciar o intensificar inmunosupresión, o cuando cambia la situación clínica. Su punto débil es la recogida, por exceso o por defecto.' },
      { prueba: 'Primera orina de la mañana y el cociente proteína-creatinina', utilidad: 'La primera orina de la mañana equivale a una recogida nocturna y es una alternativa razonable, pero tiende a SUBESTIMAR la excreción de 24 horas en torno a un 20% por el efecto del decúbito nocturno; el efecto es menor cuando la proteinuria es de rango nefrótico. El cociente en una muestra aislada al azar esta DESACONSEJADO en glomerulopatía, salvo que se recoja siempre a la misma hora y en condiciones comparables. El compromiso que propone la guía es recoger una orina de 12 a 24 horas "intencionada" y medir el cociente en una aliquota.' },
      { prueba: 'Proteinuria total frente a albuminuria', utilidad: 'El cociente albúmina-creatinina no se usa habitualmente en las glomerulopatías NO diabéticas, aunque si sea el recomendado para clasificar la enfermedad renal crónica. La albúmina supone de media alrededor del 65% de la proteína urinaria total en la glomerulonefritis, con valores más altos en la enfermedad de cambios mínimos. Las fórmulas que predicen una a partir de la otra son poco fiables por debajo de 500 mg/d, probablemente por la proteinuria tubular de bajo peso molecular.' },
      { prueba: 'Albúmina sérica, y con que método se midio', utilidad: 'Detalle que cambia la lectura de la definición: el verde de bromocresol (BCG) da resultados FALSAMENTE ALTOS frente al púrpura de bromocresol, la electroforesis capilar o la inmunonefelometria, con una diferencia de unos 5,5 g/l. Es decir, el mismo paciente puede quedar dentro o fuera de un umbral según el método del laboratorio. Además, una albúmina por debajo de 2,5 g/dl es uno de los mejores predictores de riesgo trombótico.' },
      { prueba: 'Filtrado glomerular estimado', utilidad: 'La ecuación CKD-EPI basada en creatinina es la preferida en el adulto con enfermedad glomerular. El aviso que más importa: en el síndrome nefrótico con hipoalbuminemia el manejo tubular de la creatinina esta alterado, y las ecuaciones basadas en creatinina pueden SOBREESTIMAR el filtrado real en un 50% o más. También es poco fiable durante un episodio de lesión renal aguda y puede alterarse por la miopatía crónica por glucocorticoides.' },
      { prueba: 'Sedimento urinario con morfología eritrocitaria', utilidad: 'La guía lo considera indicado de rutina en TODAS las formas de enfermedad glomerular. En la glomerulonefritis los hematies son dismorficos y pequenos en el 50 al 80% de los casos. Los cilindros hemáticos o los acantocitos por encima del 5% de todos los hematies indican habitualmente una enfermedad glomerular inflamatoria. Dato fino: entre los pocos hematies de una orina normal bien recogida, todos son de tipo glomerular.' },
      { prueba: 'Inmunoglobulinas séricas si hay infecciones de repetición', utilidad: 'En el paciente con enfermedad glomerular e infecciones repetidas, medirlas. Si la IgG sérica esta por debajo de 600 mg/dl hay evidencia LIMITADA de que el riesgo de infección se reduce administrando inmunoglobulina intravenosa mensual a 400 mg/kg para mantenerla por encima de esa cifra.' },
      { prueba: 'Cribado de infección latente antes de inmunosuprimir', utilidad: 'Una enfermedad latente no reconocida puede reactivarse al iniciar la inmunosupresión, de modo que la búsqueda y el tratamiento van ANTES. En el mismo sentido, cuando se usa glucocorticoide a dosis de 0,5 mg/kg/d o más, la guía pide profilaxis de neumonía por Pneumocystis junto con gastroproteccion y protección ósea.' }
    ],
    no_invasivos: [
      { metodo: 'Tira reactiva: lo que detecta y lo que no', interpretacion: 'Es muy sensible para hemoglobina, libre o eritrocitaria, con muy pocos falsos negativos, salvo en quien toma grandes cantidades de vitamina C. Da falsos POSITIVOS con mioglobinuria y hemoglobinuria, porque lo que mide es actividad peroxidasa, que se confunde también con povidona yodada y con la deshidratación. Consecuencia práctica que las dos guías comparten: una tira positiva NO es una microhematuria; obliga a una microscopia formal.', cutoff: 'Nunca definir hematuria solo con la tira' },
      { metodo: 'Microhematuria: la definición que hay que usar', interpretacion: 'Más de 3 hematies por campo de gran aumento en el examen microscópico de UNA muestra de orina bien recogida (recomendación fuerte, calidad baja). La guía insiste en que los laboratorios informen la cifra de hematies por campo de forma CUANTITATIVA, porque el grado de hematuria es uno de los ejes de la estratificación del riesgo.', cutoff: 'Más de 3 hematies por campo' },
      { metodo: 'Separar la hematuria glomerular de la urológica (calculadora disponible)', interpretacion: 'A favor de GLOMERULAR: hematies dismorficos y pequenos, cilindros hemáticos, acantocitos por encima del 5%, proteinuria acompañante, y en la hematuria visible, ausencia de coagulos y ausencia de síntomas urinarios. A favor de UROLÓGICA: coagulos, síntomas miccionales, hematies de morfología normal. El error que la guía urológica señala es creer que una cosa excluye la otra.', cutoff: 'Acantocitos >5% o cilindros hemáticos' },
      { metodo: 'Estratificación AUA del riesgo de la microhematuria (calculadora disponible)', interpretacion: 'Clasifica en riesgo BAJO, INTERMEDIO o ALTO de neoplasia genitourinaria. Los sistemas considerados estiman un riesgo de carcinoma urotelial menor del 1% en los de bajo riesgo, del 1 al 2% en los intermedios y del 10% o más en los de alto riesgo. Los ejes son la edad según el sexo, los paquetes-año de tabaco, el número de hematies por campo y los antecedentes.', cutoff: '<1%, 1-2% y 10% o más' },
      { metodo: 'Umbrales de proteinuria que cambian el pronóstico', interpretacion: 'La mayor parte de los estudios sugiere que la pérdida de función renal puede evitarse en gran medida si la proteinuria se reduce por debajo de 0,5 g/d, y que la progresión se enlentece si se reduce por debajo de 1 a 1,5 g/d. La excepción son la enfermedad de cambios mínimos y el síndrome nefrótico corticosensible, donde lo que define el curso es la remisión completa. Un descenso sostenido del 30% respecto al valor basal se considera un subrogado aceptable de duplicar la creatinina o llegar a fallo renal.', cutoff: 'Menos de 0,5 g/d es el objetivo' },
      { metodo: 'Nefropatía IgA: el umbral que define alto riesgo', interpretacion: 'Alto riesgo de progresión se define hoy como proteinuria por encima de 0,75 a 1 g/d PESE a 90 días o más de tratamiento de soporte optimizado. Es decir, el soporte va primero y durante un plazo definido, y solo después se plantea inmunosuprimir. Reducir la proteinuria por debajo de 1 g/d es un subrogado de mejor evolución renal.', cutoff: '0,75 a 1 g/d tras 90 días de soporte' }
    ],
    imagen: [
      { modalidad: 'Ecografía renal', hallazgos: 'Forma parte de la evaluación urológica de la microhematuria junto con la cistoscopia en el paciente de bajo riesgo que opta por estudiarse. En el contexto nefrológico sirve además para descartar causas posrenales antes de llamar rápidamente progresivo a un deterioro, que es una de las causas reversibles que la definición exige excluir.' },
      { modalidad: 'Cistoscopia', hallazgos: 'Es el estándar para diagnosticar tumores vesicales, y la guía urológica insiste porque la mayoría de los canceres que aparecen en el estudio de una hematuria son VESICALES. El patrón de práctica que denuncia es justamente el contrario: apoyarse solo en la imagen e infrautilizar la cistoscopia. En series habituales, menos del 20% de los pacientes recibe las dos pruebas.' },
      { modalidad: 'Lo que NO cambia por estar anticoagulado', hallazgos: 'Los pacientes que toman antiagregantes o anticoagulantes deben evaluarse EXACTAMENTE igual que los que no los toman, sea cual sea el tipo o la intensidad del tratamiento (recomendación fuerte), porque su riesgo de neoplasia es similar al del resto. Atribuir la hematuria al anticoagulante y cerrar el caso es el error que esta recomendación existe para evitar.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las escalas de este tema sirven para tres decisiones distintas y conviene no mezclarlas. La primera es <strong>que síndrome</strong> hay delante, que se resuelve junto a la cama y fija la urgencia. La segunda es <strong>cuanto</strong> hay de proteinuria y de hematuria, donde el método de medida importa tanto como el resultado. Y la tercera es <strong>a quien hay que estudiar más</strong>, que en la hematuria tiene una estratificación de riesgo propia, urológica y no nefrologica. A eso se añade saber <strong>cuando biopsiar</strong>, y el detalle de que la biopsia tiene al menos una excepción reconocida.`,
    escalas: [
      { nombre: 'Nefrótico frente a nefritico (calculadora disponible)', componentes: 'Proteinuria, albúmina sérica, edema, morfología de los hematies, cilindros, tensión arterial y velocidad de caída del filtrado.', formula: 'No es una puntuación: es una separación sindrómica que se hace con lo que ya se tiene.', interpretacion: 'NEFRÓTICO: el filtro gotea. Proteinuria alta, hipoalbuminemia, edema, y detrás hiperlipidemia, trombosis e infección. NEFRITICO: el filtro se inflama. Hematies dismorficos, cilindros hemáticos, hipertensión y filtrado que cae. Y una tercera categoría que es la urgencia: RÁPIDAMENTE PROGRESIVO, caída del filtrado del 50% o más en 3 meses o menos con las otras causas excluidas. Cuidado con los dos falsos amigos: proteinuria en rango nefrótico sin hipoalbuminemia NO es síndrome nefrótico, y hay síndrome nefrótico que no alcanza del todo el rango clásico de proteinuria.' },
      { nombre: 'Estratificación AUA del riesgo de la microhematuria (calculadora disponible)', componentes: 'Edad según el sexo, paquetes-año de tabaco, hematies por campo, hematuria macroscópica previa y otros factores de riesgo de carcinoma urotelial.', formula: 'BAJO exige cumplir TODOS sus criterios; INTERMEDIO y ALTO se cumplen con UNO solo.', interpretacion: 'BAJO: mujer menor de 50 años u hombre menor de 40, nunca fumador o menos de 10 paquetes-año, de 3 a 10 hematies por campo en un análisis, y sin factores de riesgo de carcinoma urotelial. INTERMEDIO: mujer de 50 a 59 u hombre de 40 a 59, de 10 a 30 paquetes-año, de 11 a 25 hematies por campo, paciente de bajo riesgo sin estudio previo con 3 a 10 hematies por campo en un análisis REPETIDO, u otros factores de riesgo. ALTO: 60 años o más en cualquier sexo, más de 30 paquetes-año, más de 25 hematies por campo, o antecedente de hematuria macroscópica.' },
      { nombre: 'Umbrales de proteinuria (calculadora disponible)', componentes: 'Método de recogida y cifra obtenida.', formula: 'El método corrige el número antes de interpretarlo.', interpretacion: 'Por debajo de 0,5 g/d la pérdida de función renal puede evitarse en gran medida; por debajo de 1 a 1,5 g/d la progresión se enlentece. En nefropatía IgA, por encima de 0,75 a 1 g/d tras 90 días de soporte optimizado define alto riesgo. En el niño con enfermedad glomerular el objetivo es un cociente proteína-creatinina por debajo de 200 mg/g, igual sea cual sea la etiología. Y la corrección que casi nadie aplica: la primera orina de la mañana subestima la excreción de 24 horas en torno a un 20%.' },
      { nombre: 'Riesgo trombótico del síndrome nefrótico (calculadora disponible)', componentes: 'Albúmina sérica, histología, grado de proteinuria y factores de riesgo añadidos.', formula: 'Los tres mejores predictores son la histología, el grado de proteinuria y la albúmina sérica.', interpretacion: 'El riesgo es mayor que en la población general, sobre todo en los PRIMEROS 6 MESES tras el diagnóstico, es más frecuente en adultos que en niños y más venoso que arterial. La trombosis venosa profunda y la de la VENA RENAL son las más frecuentes, y la embolia pulmonar es relativamente común y puede cursar SIN síntomas. La nefropatía membranosa es la histología de mayor riesgo. Una albúmina por debajo de 2,5 g/dl predice, y de forma independiente una albúmina baja aumenta el riesgo al margen del grado de proteinuria.' },
      { nombre: 'Cuando biopsiar y cuando no', componentes: 'Presentación clínica, sospecha diagnóstica y utilidad esperada del resultado.', formula: 'Patrón de oro con excepciones reconocidas.', interpretacion: 'La biopsia es el patrón de oro de la evaluación diagnóstica de las glomerulopatías, pero en algunas circunstancias el tratamiento puede iniciarse sin ella. La excepción mejor definida: NO se requiere biopsia para confirmar una nefropatía membranosa en un paciente con síndrome nefrótico y anticuerpo anti-PLA2R POSITIVO. En sentido contrario, la biopsia es ESENCIAL ante una glomerulonefritis rápidamente progresiva. La nefropatía IgA, en cambio, solo puede diagnosticarse con biopsia, porque no hay biomarcadores séricos ni urinarios validados. Y la enfermedad de cambios mínimos depende de la microscopia ELECTRÓNICA.' },
      { nombre: 'Lo que el informe de la biopsia debe decir', componentes: 'Lesiones activas frente a crónicas, índice de fibrosis intersticial y atrofia tubular, y los sistemas de puntuación validados.', formula: 'Leer la descripción, no solo el diagnóstico.', interpretacion: 'Las lesiones ACTIVAS son agudas y potencialmente respondedoras; las CRÓNICAS no suelen ser reversibles. El daño crónico irreversible se estima mejor por la cantidad de FIBROSIS INTERSTICIAL Y ATROFIA TUBULAR. Hay sistemas validados internacionalmente: MEST-C para la nefropatía IgA (hipercelularidad mesangial y endocapilar, esclerosis segmentaria, fibrosis intersticial y atrofia tubular, y semilunas) y las clases ISN/RPS para la nefritis lupica. Precaución importante: el daño crónico debe interpretarse SIEMPRE junto a los datos clínicos, porque la muestra puede proceder por azar de una cicatriz cortical focal.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Síndrome nefrótico: el filtro que gotea',
      color: '#2f6a62',
      definicion: 'Cuadro en el que la pérdida de proteína por el glomerulo es suficiente para producir hipoalbuminemia y sus consecuencias. La guía separa expresamente tres cosas que se confunden: síndrome nefrótico, proteinuria en RANGO nefrótico y proteinuria no nefrótica.',
      fisiopatologia: 'La proteinuria no es solo un marcador: refleja hipertensión glomerular y daño del podocito, probablemente el factor principal de la cicatrización glomerular, y la propia proteína (o los factores plasmáticos que arrastra) puede ser tóxica para el tubulointersticio. Por eso reducirla es tratamiento y no solo cosmetica de laboratorio.',
      clinica: 'Edema y ganancia de peso, que complican los síntomas y el control de la tensión y pueden estar mediados por un defecto intrínseco de la excreción renal de sodio. Hiperlipidemia. Y las dos complicaciones que matan: trombosis e infección, cada una con su ficha.',
      criterios_dx: 'La definición exige hipoalbuminemia, no solo la cifra de proteinuria. Dos trampas simétricas: hay proteinuria en rango nefrótico SIN síndrome nefrótico, típica de la glomeruloesclerosis focal y segmentaria secundaria y de la nefropatía IgA, porque falta la hipoalbuminemia; y hay síndrome nefrótico cuya cuantificación no llega del todo al rango clásico pero cuya clínica es la típica.',
      laboratorio: 'Proteinuria de 24 horas, albúmina sérica (atención al método: el verde de bromocresol lee unos 5,5 g/l por encima), perfil lipídico y filtrado estimado, recordando que en la hipoalbuminemia las ecuaciones basadas en creatinina pueden sobreestimar el filtrado real en un 50% o más.',
      tx_medico: 'Soporte primero: restricción moderada de sodio, control de la tensión, bloqueo del sistema renina-angiotensina y manejo del edema. La guía señala que estas terapias relativamente poco tóxicas pueden prevenir, o al menos modular, la necesidad de inmunosupresores. Y añade una excepción útil: ese soporte puede no ser necesario en la enfermedad de cambios mínimos corticosensible con remisión rápida, ni en quien solo tiene microhematuria con filtrado conservado y sin proteinuria ni hipertensión, algo habitual en la nefropatía IgA precoz.',
      pronostico: 'Reducir la proteinuria a rango no nefrótico suele elevar las proteínas séricas a valores normales, y esa subida de la albúmina reduce el riesgo trombótico y el infeccioso, alivia síntomas y mejora la calidad de vida. Es el argumento más concreto a favor de perseguir el objetivo de proteinuria.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de trombosis y a la de infección de este mismo tema; y para la progresión a enfermedad renal crónica, al módulo 89 de Enfermedad renal crónica.',
      algoritmo: ['Confirmar que hay hipoalbuminemia, no solo proteinuria alta', 'Preguntar con que método se midio la albúmina', 'Cuantificar la proteinuria con orina de 24 horas', 'No fiarse del filtrado estimado: puede sobreestimar un 50% o más', 'Empezar el soporte antes de pensar en inmunosupresión', 'Evaluar riesgo trombótico y vigilancia de infección'],
      figura: 'nefrotico-nefritico'
    },
    {
      nombre: 'Síndrome nefritico y la rápidamente progresiva',
      color: '#8c3a34',
      definicion: 'Cuadro de inflamación glomerular: hematuria de origen glomerular, hipertensión y descenso del filtrado. Su forma grave, la glomerulonefritis rápidamente progresiva, es la urgencia de todo el tema.',
      criterios_dx: 'Rápidamente progresiva se define como una caída del filtrado estimado del 50% o MÁS en 3 meses o MENOS, una vez excluidas las otras causas de ese cuadro (vasculitis asociada a ANCA, enfermedad anti-membrana basal) y las reversibles: toxicidad por fármacos y causas pre y posrenales habituales. La biopsia es esencial.',
      clinica: 'Hematuria con hematies dismorficos, cilindros hemáticos y acantocitos; hipertensión; oliguria y deterioro de función. En la hematuria visible de causa glomerular no se forman coagulos y no suele haber síntomas urinarios.',
      laboratorio: 'Sedimento con morfología eritrocitaria, función renal seriada, proteinuria, y la serología que separa las causas: ANCA y anticuerpos anti-membrana basal glomerular, además del estudio de lupus cuando proceda.',
      complementarios: 'La biopsia en estos casos muestra con frecuencia hipercelularidad mesangial y endocapilar y una proporción alta de glomerulos con SEMILUNAS y áreas de necrosis focal. Matiz que conviene no saltarse: la presencia de semilunas SIN un cambio concomitante de la creatinina NO constituye una glomerulonefritis rápidamente progresiva, aunque obliga a un seguimiento estrecho.',
      dx_diferencial: 'Las tres grandes causas de glomerulonefritis rápidamente progresiva que hay que separar deprisa: la vasculitis asociada a ANCA, la enfermedad por anticuerpos anti-membrana basal glomerular y la nefritis lupica proliferativa. La guía pide que el diagnóstico de la anti-MBG se haga SIN DEMORA en todo paciente con sospecha de rápidamente progresiva.',
      tx_medico: 'Depende de la causa y cada una tiene su recomendación graduada, recogidas en la ficha de entidades. Lo común es que el retraso cuesta nefronas, y por eso la urgencia esta en el diagnóstico tanto como en el tratamiento.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de entidades de este tema para el tratamiento de cada causa; a Lesión renal aguda para el soporte del deterioro agudo; y al módulo 81 de Manifestaciones cutáneas de enfermedad sistémica si hay púrpura palpable, que es vasculitis hasta demostrar lo contrario.',
      pronostico: 'Marcado por el porcentaje de semilunas y por el grado de esclerosis global ya presente en la biopsia, que es lo que distingue el riñón recuperable del que no lo es.',
      algoritmo: ['¿Cuánto ha caído el filtrado y en cuanto tiempo?', 'Excluir lo reversible: fármacos, prerrenal, obstrucción', 'Mirar el sedimento: dismorficos, cilindros, acantocitos', 'Pedir ANCA y anti-membrana basal el mismo dia', 'Biopsia, que aquí es esencial y no opcional', 'No llamar rápidamente progresivo a unas semilunas con creatinina estable'],
      figura: 'nefrotico-nefritico'
    },
    {
      nombre: 'Proteinuria: cuantificarla antes de interpretarla',
      color: '#4a6b7a',
      definicion: 'El hallazgo que define el eje nefrótico y el principal objetivo modificable del tratamiento. El problema practico no es detectarla sino medirla de forma que el número signifique algo.',
      criterios_dx: 'La orina de 24 horas es el método preferido porque promedia la variación por ritmo circadiano, actividad y postura. La guía la pide expresamente cuando se va a iniciar o intensificar inmunosupresión o cuando cambia la situación clínica.',
      laboratorio: 'Si no se puede recoger 24 horas, la mejor alternativa es el cociente proteína-creatinina en una aliquota de una recogida intencionada de 12 a 24 horas, o en la primera orina de la mañana. El cociente en muestra AISLADA al azar esta desaconsejado en glomerulopatía salvo que se estandarice la hora y las condiciones.',
      complementarios: 'Las correcciones que hay que llevar en la cabeza: la primera orina de la mañana SUBESTIMA la excreción de 24 horas en torno a un 20% por el decúbito nocturno, efecto menor si la proteinuria es de rango nefrótico. La albúmina es de media el 65% de la proteína total en la glomerulonefritis, más en la enfermedad de cambios mínimos. Y las fórmulas de conversión entre proteinuria y albuminuria son poco fiables por debajo de 500 mg/d.',
      dx_diferencial: 'La proteinuria ortostática, en la que la primera orina de la mañana puede infraestimar especialmente. Y la proteinuria tubular de bajo peso molecular, que explica por que por debajo de 500 mg/d la proporción de albúmina deja de ser predecible.',
      tx_medico: 'Objetivos: por debajo de 0,5 g/d la pérdida de función puede evitarse en gran medida; por debajo de 1 a 1,5 g/d la progresión se enlentece. Excepción: en la enfermedad de cambios mínimos y el síndrome nefrótico corticosensible lo que define el curso es la remisión completa. Un descenso sostenido del 30% sobre el basal se acepta como subrogado de duplicar la creatinina o llegar a fallo renal.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de tratamiento de soporte de este tema, que es como se baja; y al módulo 89 de Enfermedad renal crónica para la clasificación por albuminuria, que alli si se usa.',
      algoritmo: ['Preguntar COMO se recogio antes de interpretar el número', 'Si fue primera orina de la mañana, contar con un 20% de infraestimacion', 'Evitar el cociente en muestra aislada al azar', 'Fijar el objetivo: menos de 0,5 g/d, o menos de 1 g/d en IgA', 'Repetir con el mismo método para poder comparar']
    },
    {
      nombre: 'Hematuria: glomerular o urológica, y las dos cosas',
      color: '#9c3a52',
      definicion: 'Microhematuria se define como MÁS DE 3 hematies por campo de gran aumento en el examen microscópico de una muestra única, bien recogida. No se define por una tira reactiva positiva.',
      fisiopatologia: 'La tira mide actividad PEROXIDASA, de modo que detecta hemoglobina libre o eritrocitaria pero se confunde con mioglobinuria, hemoglobinuria, povidona yodada y deshidratación. Es muy sensible, con pocos falsos negativos salvo en quien toma mucha vitamina C.',
      clinica: 'A favor de origen glomerular: hematies dismorficos y pequenos (50 al 80% de los casos en glomerulonefritis), cilindros hemáticos, acantocitos por encima del 5% de los hematies, y en la hematuria visible, ausencia de coagulos y ausencia de síntomas urinarios. A favor de origen urológico: coagulos, síntomas miccionales, morfología eritrocitaria normal.',
      criterios_dx: 'Una tira positiva, aunque sea solo trazas, obliga a una microscopia formal. Y el laboratorio debe informar la cifra de hematies por campo de forma cuantitativa, porque el grado de hematuria es uno de los ejes de la estratificación de riesgo.',
      complementarios: 'La estratificación AUA en riesgo bajo, intermedio y alto de neoplasia genitourinaria, con riesgos estimados de carcinoma urotelial menores del 1%, del 1 al 2% y del 10% o más respectivamente. En el de bajo riesgo se decide con el paciente entre repetir el análisis en 6 meses o hacer cistoscopia y ecografía renal; si se repitio y persiste la hematuria, el paciente se RECLASIFICA a intermedio o alto y se estudia.',
      dx_diferencial: 'El punto que más importa al internista y que la guía urológica deja por escrito: ante sospecha de enfermedad renal médica (proteinuria, hematies dismorficos, cilindros celulares o insuficiencia renal) hay que derivar a nefrología, PERO la evaluación urológica basada en riesgo debe hacerse igualmente, porque puede haber patología urológica coexistente. Encontrar una causa no excluye la otra.',
      tx_medico: 'No hay tratamiento de la hematuria: hay estudio. Lo que si hay es un error frecuente con nombre propio: atribuirla al anticoagulante. Los pacientes con antiagregantes o anticoagulantes deben evaluarse igual que el resto, sea cual sea el tipo o la intensidad, porque su riesgo de neoplasia es similar.',
      seguimiento_ambulatorio: 'Tras resolver una causa no maligna presunta, sobre todo una infección urinaria, repetir el análisis para CONFIRMAR que la hematuria se resolvió; si persiste, estudio urológico basado en riesgo. Y en enfermedad glomerular conocida, la magnitud y la persistencia de la hematuria tienen valor pronóstico, especialmente en la nefropatía IgA y en la vasculitis IgA.',
      pronostico: 'La mayoría de los canceres que se diagnostican en el estudio de una hematuria son VESICALES, y se detectan optimamente con cistoscopia. El patrón de práctica que la guía denuncia es apoyarse solo en la imagen: en la mayoría de las series, menos del 20% de los pacientes recibe cistoscopia e imagen.',
      algoritmo: ['Tira positiva: pedir microscopia, no concluir nada todavía', 'Confirmar más de 3 hematies por campo en muestra bien recogida', 'Mirar morfología, cilindros y acantocitos', 'Clasificar el riesgo urológico con la tabla AUA', 'Derivar a nefrología si hay datos de enfermedad renal médica', 'Hacer IGUALMENTE el estudio urológico que corresponda al riesgo', 'No atribuirla al anticoagulante'],
      figura: 'hematuria-aua'
    },
    {
      nombre: 'Trombosis del síndrome nefrótico',
      color: '#7a2a2a',
      definicion: 'Complicación tromboembólica arterial o venosa en el contexto del síndrome nefrótico, con un riesgo superior al de la población general tanto en niños como en adultos.',
      epidemiologia: 'El riesgo es mayor sobre todo en los PRIMEROS 6 MESES tras el diagnóstico. Es más frecuente en adultos que en niños, más venosa que arterial, y varia según la histología subyacente. La trombosis venosa profunda y la de la VENA RENAL son las más frecuentes; la embolia pulmonar es relativamente común y puede ocurrir SIN síntomas.',
      factores_riesgo: ['Albúmina sérica por debajo de 2,5 g/dl, que predice de forma independiente del grado de proteinuria', 'Nefropatía membranosa, la histología de mayor riesgo', 'Grado de proteinuria', 'Trombosis previa y predisposición genética', 'Anticuerpos antifosfolipidicos', 'Inmovilidad, obesidad, neoplasia, embarazo y cirugía'],
      clinica: 'La arterial es poco frecuente en adultos y niños, pero se ha descrito en prácticamente todos los lechos arteriales: aorta, mesentérica, axilar, pulmonar, iliaca, renal, femoral, poplitea, oftálmica y cerebral. Que la embolia pulmonar pueda ser asintomática obliga a buscarla cuando el cuadro no cuadra.',
      criterios_dx: 'Los tres mejores predictores de riesgo trombótico son el diagnóstico histológico, el grado de proteinuria y la albúmina sérica por debajo de 2,5 g/dl.',
      tx_medico: 'Anticoagulación COMPLETA si ya hay evento tromboembólico. Anticoagulación PROFILÁCTICA cuando el riesgo de tromboembolia supera el riesgo individual estimado de hemorragia grave inducida por la anticoagulación; existe una herramienta en línea para ponderar las dos cosas.',
      tx_farmacologico: 'Los agentes de elección son la heparina o sus derivados y los cumarinicos. No hay ensayos aleatorizados que comparen heparina de bajo peso molecular con warfarina en síndrome nefrótico. Aviso practico: la warfarina tiene muchas interacciones, especialmente con los inhibidores de la calcineurina. Los anticoagulantes orales DIRECTOS no se han estudiado de forma sistemática en el paciente nefrótico, ni para profilaxis ni para tratamiento, de modo que la guía no los respalda aquí pese a tener menos interacciones.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Trastornos de la coagulación y trombofilias, y a Tromboembolia pulmonar si el cuadro lo sugiere.',
      pronostico: 'Reducir la proteinuria eleva la albúmina, y esa subida reduce el riesgo trombótico: es una de las razones por las que el objetivo de proteinuria no es un número cosmetico.',
      algoritmo: ['Mirar la albúmina: por debajo de 2,5 g/dl el riesgo sube', 'Mirar la histología: la membranosa es la de mayor riesgo', 'Recordar la ventana de los primeros 6 meses', 'Ante dolor lumbar o deterioro brusco, pensar en vena renal', 'Sopesar profilaxis frente a riesgo hemorrágico individual', 'Preferir heparina o cumarinico; los directos no están estudiados aquí']
    },
    {
      nombre: 'Infección en la enfermedad glomerular',
      color: '#8a5a2e',
      definicion: 'Complicación mayor del paciente nefrótico y del que recibe inmunosupresión, que la guía aborda pidiendo un grado alto de vigilancia clínica más que una pauta fija.',
      clinica: 'La situación que señala expresamente es el niño nefrótico con ASCITIS: el líquido debe examinarse al microscopio y cultivarse buscando peritonitis bacteriana espontánea. Y añade un aviso que evita cerrar el caso en falso: la bacteriemia puede ocurrir aunque los signos clínicos sean solo abdominales.',
      laboratorio: 'La velocidad de sedimentación NO es útil en este escenario; la proteína C reactiva si puede informar. Los antibióticos parenterales se inician una vez tomados los cultivos, sin esperar al resultado.',
      factores_riesgo: ['Hipogammaglobulinemia por pérdida urinaria', 'Tratamiento inmunosupresor en curso', 'Ascitis en el paciente nefrótico', 'Infección latente no reconocida al iniciar inmunosupresión'],
      complementarios: 'Si hay infecciones de repetición, medir inmunoglobulinas séricas. Con IgG por debajo de 600 mg/dl hay evidencia LIMITADA de que la inmunoglobulina intravenosa mensual a 400 mg/kg, para mantenerla por encima de esa cifra, reduzca el riesgo. La guía es explícita en que la evidencia es limitada, y conviene transmitirlo así.',
      tx_medico: 'Antes de inmunosuprimir, buscar y tratar la enfermedad latente, porque puede reactivarse al iniciar el tratamiento. Con glucocorticoide a 0,5 mg/kg/d o más, añadir profilaxis de neumonía por Pneumocystis, gastroproteccion y protección ósea según los protocolos locales.',
      dx_diferencial: 'Los pacientes que reciben inmunosupresores tienen riesgo aumentado de infecciones variadas, incluidas la neumonía adquirida en la comunidad y la sepsis, de modo que el umbral de sospecha baja en todos los focos, no solo en el abdominal.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Sepsis y choque séptico si el cuadro progresa, y al módulo 80 de Cáncer cutáneo no melanoma para la vigilancia cutánea del inmunodeprimido sostenido.',
      algoritmo: ['En el nefrótico con ascitis y fiebre, puncionar y cultivar', 'No descartar bacteriemia porque los signos sean abdominales', 'No usar la velocidad de sedimentación para decidir', 'Iniciar antibiótico parenteral tras los cultivos', 'Si hay infecciones repetidas, medir inmunoglobulinas', 'Antes de inmunosuprimir: cribado de latentes y profilaxis']
    },
    {
      nombre: 'Edema nefrótico resistente al diurético',
      color: '#3d5a73',
      definicion: 'Edema del síndrome nefrótico que no responde a las dosis habituales. Los pacientes nefróticos son con frecuencia resistentes al diurético INCLUSO con filtrado normal, de modo que la resistencia no indica por sí misma fallo renal.',
      tx_medico: 'Los pilares son diuréticos junto con restricción moderada de sodio en la dieta, de 1,5 a 2 g/d o de 60 a 90 mmol/d de sodio. Los diuréticos de ASA son de primera línea, y habitualmente se prefiere administrarlos DOS veces al dia. Suelen hacer falta dosis más altas por la menor llegada del fármaco al asa de Henle.',
      tx_farmacologico: 'Si la absorción digestiva es dudosa por edema de la pared intestinal, pasar a via intravenosa en bolo o en infusión. Si tampoco responde, valorar ALBÚMINA intravenosa añadida al diurético intravenoso en el paciente con albúmina sérica por debajo de 2,0 g/dl: se administra premezclada con el diurético de asa, o 25 a 50 g de solución de albúmina de 30 a 60 minutos ANTES del diurético, que es cuando la expansión del volumen intravascular es máxima. Los diuréticos ahorradores de potasio (espironolactona, amilorida) ayudan a mantener el potasio y pueden sumar natriuresis.',
      complementarios: 'Honestidad sobre la albúmina, que la guía no esconde: no hay mucha evidencia de que sea eficaz para reducir el edema del síndrome nefrótico en ADULTOS, los efectos en niños parecen más prometedores, y en el paciente nefrótico la mayor parte de la albúmina administrada se excreta rápidamente por la orina, de modo que el efecto sobre la albúmina plasmática es transitorio en el mejor de los casos.',
      dx_diferencial: 'Una respuesta pobre al diurético intravenoso puede deberse a volumen intravascular DISMINUIDO con activación neurohumoral y del sistema renina-angiotensina, que es un escenario distinto del de sobrecarga y se maneja distinto.',
      seguimiento_hospitalario: 'La restricción de AGUA no suele ser necesaria, porque estos pacientes están con frecuencia depletados de volumen intravascular y son más propensos a la deshidratación con diuréticos intensivos; solo se restringe si aparece hiponatremia. Ocasionalmente hace falta ultrafiltracion o hemodiálisis para el edema resistente, sobre todo si hay lesión renal aguda asociada.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al módulo 90 de Sodio, potasio y equilibrio ácido-base si aparece hiponatremia o hipopotasemia, y a Lesión renal aguda si el deterioro acompaña al edema.',
      algoritmo: ['Restringir sodio a 1,5 a 2 g/d antes de subir dosis', 'Diurético de asa, habitualmente dos veces al dia', 'Subir dosis: hace falta más por menor llegada al asa', 'Si hay edema intestinal, pasar a intravenoso', 'Con albúmina por debajo de 2,0 g/dl, valorar albúmina 30 a 60 min antes', 'No restringir agua salvo hiponatremia']
    },
    {
      nombre: 'Tratamiento de soporte: lo que se hace sin la histología',
      color: '#5c7a3a',
      definicion: 'El conjunto de medidas que mejoran la evolución en cualquier glomerulopatía, independientemente del patrón histológico, y que la guía reúne en un capítulo propio por delante de los tratamientos específicos.',
      tx_medico: 'Objetivo doble: proteger del riesgo cardiovascular de la hipertensión y retrasar la pérdida progresiva de filtrado. La modificación del estilo de vida (restricción de sal, normalización del peso, ejercicio regular, reducción del alcohol y abandono del tabaco) es parte integral del control de la tensión. El tratamiento antihipertensivo puede no ser necesario en todos los pacientes con enfermedad glomerular.',
      tx_farmacologico: 'Los antiproteinuricos de elección son los IECA o los ARA II, que pueden reducir la proteinuria hasta un 40 a 50% de forma DOSIS-DEPENDIENTE, sobre todo si el paciente cumple la restricción de sal. No hay evidencia de que unos difieran de otros en esto. El uso conjunto de IECA y ARA II añade efecto antiproteinurico pero se asoció a más lesión renal aguda e hiperpotasemia en ensayos en diabéticos, y aunque no se ha demostrado directamente en no diabéticos, los datos bastan para aconsejar PRUDENCIA.',
      complementarios: 'El dato que más tranquiliza en la práctica: en monoterapia, los IECA y los ARA II bajan el filtrado y es frecuente observar un ascenso de la creatinina del 10 al 20%. Salvo que la creatinina siga subiendo, ese ascenso moderado refleja su efecto hemodinámico y NO empeoramiento de la enfermedad renal intrínseca, y no debe motivar la retirada. En cambio, si el filtrado esta cambiando rápidamente, un IECA o un ARA II puede contribuir a la insuficiencia y no debe usarse.',
      dx_diferencial: 'Que hacer si no se toleran. Alternativas: inhibidor directo de la renina o antagonista del receptor mineralocorticoide, vigilando hiperpotasemia y caída del filtrado; la combinación de IECA o ARA II con inhibidor directo de la renina NO se recomienda por el riesgo de hiperpotasemia. Si no se tolera ninguno, los calcioantagonistas NO dihidropiridínicos (diltiazem, verapamilo) reducen modestamente la proteinuria; los betabloqueantes, los diuréticos y los bloqueantes alfa-1 la reducen menos. Y el aviso que se olvida: los calcioantagonistas DIHIDROPIRIDÍNICOS, la metildopa y la guanfacina tienen poco impacto sobre la proteinuria y pueden incluso AUMENTARLA.',
      seguimiento_hospitalario: 'Si la hiperpotasemia limita la dosis del antiproteinurico, se puede contrarrestar con diuréticos perdedores de potasio, corrigiendo la acidosis metabólica, con quelantes orales de potasio, y en alguna medida liberalizando el sodio de la dieta. Quien no logra reducir la proteinuria pese a tener la tensión controlada debe restringir más el sodio, que es la via no farmacológica para bajarla.',
      pronostico: 'Hiperlipidemia: las estatinas se toleran bien y corrigen al menos parcialmente el perfil lipídico, aunque no esta establecido que protejan de la caída del filtrado; algunos datos sugieren que la atorvastatina puede reducir la albuminuria. Precaución concreta: hay más riesgo de mialgia y miositis al combinar estatinas con inhibidores de la calcineurina. Para ezetimiba y fibratos los datos son muy limitados y no respaldan su uso en monoterapia.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al módulo 89 de Enfermedad renal crónica para la protección renal de fondo, a Dislipidemias para el manejo lipídico general, y al módulo 90 si aparece hiperpotasemia.',
      algoritmo: ['Restricción de sal y estilo de vida, que potencian todo lo demás', 'IECA o ARA II, subiendo dosis: el efecto es dosis-dependiente', 'Esperar y tolerar un ascenso de creatinina del 10 al 20%', 'Retirar solo si la creatinina SIGUE subiendo', 'No combinar IECA con ARA II de rutina', 'Si no se toleran, preferir diltiazem o verapamilo, no dihidropiridinas', 'Estatina con cuidado si hay inhibidor de calcineurina'],
      figura: 'soporte-glomerular'
    },
    {
      nombre: 'Las entidades y lo que decide su tratamiento',
      color: '#7a3a6b',
      definicion: 'Resumen de las glomerulopatías que la guía cubre, al nivel que su texto respalda: que las define, que decide el pronóstico y cual es la recomendación graduada de primera línea.',
      criterios_dx: 'NEFROPATÍA IgA: solo se diagnostica con biopsia, no hay biomarcadores séricos ni urinarios validados, y se puntúa con el MEST-C de la clasificación de Oxford revisada. MEMBRANOSA: no se requiere biopsia si hay síndrome nefrótico y anti-PLA2R positivo, pero si evaluar condiciones asociadas con independencia del estado de anticuerpos. CAMBIOS MÍNIMOS: el diagnóstico depende de la microscopia electrónica. ANTI-MBG: autoanticuerpos frente al dominio no colagenoso de la cadena alfa-3 del colágeno tipo IV, incidencia de 0,5 a 1 por millón, y alrededor del 80% de los pacientes tiene semilunas en la mitad o más de los glomerulos.',
      tx_medico: 'NEFROPATÍA IgA: con proteinuria por encima de 0,5 g/d se recomienda IECA o ARA II con independencia de que haya hipertensión (1B). El alto riesgo se define como proteinuria por encima de 0,75 a 1 g/d pese a 90 días o más de soporte optimizado, y solo entonces se plantea inmunosupresión. MEMBRANOSA: con al menos un factor de riesgo de progresión se recomienda rituximab, o ciclofosfamida con glucocorticoide en meses alternos durante 6 meses, o un inhibidor de la calcineurina 6 meses o más, según la estimación de riesgo (1B). CAMBIOS MÍNIMOS: glucocorticoide oral a dosis alta como tratamiento inicial (1C).',
      tx_farmacologico: 'GLOMERULOESCLEROSIS FOCAL Y SEGMENTARIA primaria: glucocorticoide oral a dosis alta como primera línea (1D, la calidad más baja de todo el capítulo), y si es corticorresistente, ciclosporina o tacrolimus 6 meses o más antes que seguir con glucocorticoide solo o no tratar (1C). VASCULITIS ASOCIADA A ANCA: glucocorticoides con ciclofosfamida o rituximab como tratamiento inicial del debut (1B), y mantenimiento con rituximab o azatioprina más glucocorticoide a dosis baja tras inducir la remisión (1C). NEFRITIS LUPICA: hidroxicloroquina o equivalente en todo paciente con lupus salvo contraindicación (1C), y en la clase III o IV activa, con o sin componente membranoso, glucocorticoides más ciclofosfamida intravenosa a dosis baja o micofenolato (1B). ANTI-MBG: ciclofosfamida y glucocorticoides MÁS plasmaféresis en todos, salvo quienes llegan en diálisis, tienen 100% de semilunas o más del 50% de esclerosis global en una biopsia adecuada, Y no tienen hemorragia pulmonar (1C).',
      complementarios: 'Tres advertencias que la guía repite y que son el antídoto al exceso de confianza en la biopsia: NO hay evidencia suficiente para usar el MEST-C para decidir si se inicia inmunosupresión en la nefropatía IgA; NO hay evidencia suficiente para basar la decisión en la presencia y el número de semilunas; y la herramienta internacional de predicción de la IgA no sirve para estimar el efecto de un tratamiento concreto. La evaluación del riesgo debe ser DINÁMICA en el tiempo.',
      dx_diferencial: 'Un aviso transversal sobre la toxicidad: los efectos adversos del tratamiento son más probables con filtrado por debajo de 50 ml/min por 1,73 m2, de modo que la conversación sobre riesgos y beneficios cambia por debajo de esa cifra.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al módulo 81 de Manifestaciones cutáneas de enfermedad sistémica para los signos que anuncian lupus o vasculitis; a Mieloma múltiple si el cuadro apunta a gammapatía; y al módulo 89 cuando el tema pasa a ser la progresión.',
      algoritmo: ['Definir el síndrome antes de buscar la entidad', 'Pedir anti-PLA2R si el cuadro es nefrótico del adulto', 'Recordar que la IgA exige biopsia y la membranosa puede no exigirla', 'En IgA, 90 días de soporte antes de plantear inmunosupresión', 'No usar el MEST-C ni las semilunas para decidir inmunosupresión', 'En anti-MBG, no demorar: plasmaféresis salvo las excepciones']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Lo que hay que vigilar en el paciente con enfermedad glomerular, ordenado por lo que más se olvida. No son parámetros de monitorización continua, sino las comprobaciones que cambian la conducta.',
    parametros: [
      'Preguntar COMO se recogio la orina antes de interpretar cualquier cifra de proteinuria: la primera orina de la mañana subestima la de 24 horas en torno a un 20%.',
      'No fiarse del filtrado estimado en el nefrótico con hipoalbuminemia: las ecuaciones basadas en creatinina pueden sobreestimar el real en un 50% o más.',
      'Mirar el sedimento con morfología eritrocitaria en TODA enfermedad glomerular, no solo al principio: la magnitud y la persistencia de la hematuria tienen valor pronóstico.',
      'Tolerar un ascenso de creatinina del 10 al 20% al iniciar IECA o ARA II, y retirar solo si sigue subiendo.',
      'Vigilar la ventana de los primeros 6 meses tras el diagnóstico, que es cuando más trombosis ocurre, y recordar que la embolia pulmonar puede ser asintomática.',
      'Con albúmina por debajo de 2,5 g/dl, el riesgo trombótico sube con independencia del grado de proteinuria.',
      'En el nefrótico con ascitis y fiebre, puncionar y cultivar, y no descartar bacteriemia porque los signos sean solo abdominales. La velocidad de sedimentación no ayuda.',
      'Antes de inmunosuprimir: cribado de infección latente; y con glucocorticoide a 0,5 mg/kg/d o más, profilaxis de Pneumocystis, gastroproteccion y protección ósea.',
      'No atribuir una hematuria al anticoagulante: la evaluación es la misma que en quien no lo toma.',
      'Y la comprobacion que cierra el caso: tras resolver una causa no maligna presunta, repetir el análisis para confirmar que la hematuria se fue.'
    ],
    criterios_uci_general: 'Lo que convierte este tema en una urgencia: la glomerulonefritis rápidamente progresiva, con caída del filtrado del 50% o más en 3 meses o menos; la sospecha de enfermedad anti-membrana basal, que la guía pide diagnosticar sin demora y que puede presentarse como síndrome pulmón-riñón con hemorragia alveolar; la peritonitis bacteriana espontánea del nefrótico con ascitis; y la embolia pulmonar, que en este paciente puede cursar sin síntomas.',
    criterios_tips_general: 'No aplica. El equivalente aquí es el umbral de biopsia: esencial en la rápidamente progresiva, prescindible en la membranosa con anti-PLA2R positivo y síndrome nefrótico.',
    criterios_trasplante_general: 'Fuera del alcance de este tema. Las terapias de reemplazo y el trasplante renal son dos ítems propios del bloque VI que todavía no tienen módulo construido.',
    prevencion: 'La prevención útil en glomerulopatía es la del soporte, y su argumento esta en la propia guía: estas terapias relativamente poco tóxicas pueden prevenir, o al menos modular, la necesidad de inmunosupresores, que si tienen efectos adversos relevantes. Restricción de sal, control de la tensión, bloqueo del sistema renina-angiotensina a dosis plena y reducción sostenida de la proteinuria por debajo de 0,5 g/d. Y la prevención de la toxicidad: cribado de infección latente y profilaxis antes de inmunosuprimir.'
  }
};

export const compCites = {
  'Síndrome nefrótico: el filtro que gotea': { definicion: [1], fisiopatologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1], tx_medico: [1], pronostico: [1] },
  'Síndrome nefritico y la rápidamente progresiva': { criterios_dx: [1], clinica: [1], laboratorio: [1], complementarios: [1], dx_diferencial: [1] },
  'Proteinuria: cuantificarla antes de interpretarla': { criterios_dx: [1], laboratorio: [1], complementarios: [1], dx_diferencial: [1], tx_medico: [1] },
  'Hematuria: glomerular o urológica, y las dos cosas': { definicion: [2], fisiopatologia: [1, 2], clinica: [1], criterios_dx: [2], complementarios: [2], dx_diferencial: [2], tx_medico: [2], seguimiento_ambulatorio: [1, 2], pronostico: [2] },
  'Trombosis del síndrome nefrótico': { definicion: [1], epidemiologia: [1], factores_riesgo: [1], clinica: [1], criterios_dx: [1], tx_medico: [1], tx_farmacologico: [1] },
  'Infección en la enfermedad glomerular': { clinica: [1], laboratorio: [1], complementarios: [1], tx_medico: [1], dx_diferencial: [1] },
  'Edema nefrótico resistente al diurético': { definicion: [1], tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1], seguimiento_hospitalario: [1] },
  'Tratamiento de soporte: lo que se hace sin la histología': { tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1], seguimiento_hospitalario: [1], pronostico: [1] },
  'Las entidades y lo que decide su tratamiento': { criterios_dx: [1], tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1] }
};

export const estigmasTitulo = 'Lo que se mira primero y ya orienta el caso';
export const estigmas = [
  { nombre: 'Hematuria visible sin coagulos ni síntomas urinarios', descripcion: 'En la hematuria visible de causa glomerular NO se forman coagulos y no suele haber síntomas del tracto urinario. Las dos cosas juntas apuntan al glomerulo antes de cualquier prueba.' },
  { nombre: 'Acantocitos por encima del 5% o cilindros hemáticos', descripcion: 'Indican habitualmente enfermedad glomerular INFLAMATORIA. En la glomerulonefritis los hematies son dismorficos y pequenos en el 50 al 80% de los casos.' },
  { nombre: 'Proteinuria en rango nefrótico con albúmina normal', descripcion: 'No es síndrome nefrótico: falta la hipoalbuminemia. Se ve sobre todo en la glomeruloesclerosis focal y segmentaria SECUNDARIA y en la nefropatía IgA, y cambia por completo el pronóstico y la conducta.' },
  { nombre: 'Albúmina sérica por debajo de 2,5 g/dl', descripcion: 'Uno de los tres mejores predictores de riesgo trombótico, junto con la histología y el grado de proteinuria, y lo es de forma INDEPENDIENTE de cuanta proteinuria haya.' },
  { nombre: 'Ascenso de creatinina del 10 al 20% al iniciar IECA o ARA II', descripcion: 'Es lo esperable y refleja el efecto hemodinámico del fármaco, no empeoramiento de la enfermedad renal. Solo obliga a retirar si la creatinina SIGUE subiendo.' },
  { nombre: 'Caída del filtrado del 50% o más en 3 meses o menos', descripcion: 'Es la definición de glomerulonefritis rápidamente progresiva, una vez excluidas las otras causas y las reversibles. Obliga a biopsia, que aquí es esencial, y a pedir ANCA y anti-membrana basal el mismo dia.' },
  { nombre: 'Tira reactiva positiva para sangre', descripcion: 'No es una microhematuria. Mide actividad peroxidasa, con falsos positivos por mioglobinuria, hemoglobinuria, povidona yodada y deshidratación. Obliga a microscopia formal, donde la definición exige más de 3 hematies por campo.' },
  { nombre: 'Nefrótico con dolor lumbar o deterioro brusco', descripcion: 'Pensar en trombosis de la vena renal, que junto con la trombosis venosa profunda es la más frecuente en el síndrome nefrótico, sobre todo en los primeros 6 meses y en la nefropatía membranosa.' }
];

export const biopsia = {
  indicaciones: [
    'Glomerulonefritis rápidamente progresiva, donde la biopsia es ESENCIAL',
    'Síndrome nefrótico del adulto sin diagnóstico serológico establecido',
    'Sospecha de nefropatía IgA, que solo puede diagnosticarse con biopsia',
    'Sospecha de enfermedad de cambios mínimos, que depende de la microscopia electrónica',
    'Repetición cuando el resultado vaya a cambiar el plan terapéutico o el pronóstico'
  ],
  ventajas: [
    'Separa lesiones ACTIVAS, agudas y potencialmente respondedoras, de las CRÓNICAS, que no suelen ser reversibles',
    'Permite estimar el daño crónico irreversible por la fibrosis intersticial y la atrofia tubular',
    'Aporta sistemas validados: MEST-C en la nefropatía IgA y clases ISN/RPS en la nefritis lupica',
    'En la rápidamente progresiva muestra el porcentaje de semilunas y las áreas de necrosis focal, que marcan el pronóstico'
  ],
  limitaciones: [
    'NO se requiere para confirmar una membranosa si hay síndrome nefrótico y anti-PLA2R positivo',
    'La muestra puede proceder por azar de una cicatriz cortical focal, de modo que el daño crónico se interpreta siempre junto a la clínica',
    'No hay evidencia suficiente para usar el MEST-C ni el número de semilunas para decidir si se inicia inmunosupresión en la nefropatía IgA',
    'La microscopia electrónica no esta disponible en todas partes, y algunos diagnósticos dependen de ella',
    'No hay ensayos que respalden cuando ni con que frecuencia repetirla'
  ],
  contraindicaciones: [
    'Las habituales del procedimiento percutáneo: alteración de la hemostasia no corregida e hipertensión no controlada',
    'Valorar antes si el resultado va a cambiar la conducta, dado el carácter invasivo',
    'En la repetición, la guía pide reservarla a cuando la información no pueda obtenerse de la síntesis de los datos clínicos disponibles',
    'No demorar el tratamiento de una anti-MBG sospechada esperando la histología'
  ]
};

export const escalaRefs = {
  'Nefrótico frente a nefritico (calculadora disponible)': [1],
  'Estratificación AUA del riesgo de la microhematuria (calculadora disponible)': [2],
  'Umbrales de proteinuria (calculadora disponible)': [1],
  'Riesgo trombótico del síndrome nefrótico (calculadora disponible)': [1],
  'Cuando biopsiar y cuando no': [1],
  'Lo que el informe de la biopsia debe decir': [1]
};

export const escalaCalc = {
  'Nefrótico frente a nefritico (calculadora disponible)': 'sindrome-glomerular',
  'Estratificación AUA del riesgo de la microhematuria (calculadora disponible)': 'microhematuria-aua',
  'Umbrales de proteinuria (calculadora disponible)': 'proteinuria-umbral',
  'Riesgo trombótico del síndrome nefrótico (calculadora disponible)': 'trombosis-nefrotico'
};

export const compGroups = [
  { title: 'Los dos síndromes', items: ['Síndrome nefrótico: el filtro que gotea', 'Síndrome nefritico y la rápidamente progresiva'] },
  { title: 'Los dos hallazgos que traen al paciente', items: ['Proteinuria: cuantificarla antes de interpretarla', 'Hematuria: glomerular o urológica, y las dos cosas'] },
  { title: 'Lo que complica al nefrótico', items: ['Trombosis del síndrome nefrótico', 'Infección en la enfermedad glomerular', 'Edema nefrótico resistente al diurético'] },
  { title: 'Lo que se hace', items: ['Tratamiento de soporte: lo que se hace sin la histología', 'Las entidades y lo que decide su tratamiento'] }
];

export const complicacionesIntro = 'Las fichas siguen el orden en que se piensa el caso. Primero los dos SÍNDROMES, porque separarlos junto a la cama es lo que fija la urgencia y el estudio, y porque uno de ellos contiene la única urgencia real del tema. Después los dos HALLAZGOS que traen al paciente a la consulta, la proteinuria y la hematuria, que son donde más se falla: la primera porque se interpreta sin preguntar como se midio, y la segunda porque se decide entre lo glomerular y lo urológico como si fueran excluyentes. Luego las tres COMPLICACIONES que convierten un síndrome nefrótico en un ingreso, y que se olvidan porque no son renales. Y al final lo que se hace: el soporte, que funciona sin saber la histología, y las entidades, al nivel que la fuente respalda.';

export const categories = [
  { id: 'definicion', label: 'Los dos síndromes' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Problemas' },
  { id: 'seguimiento', label: 'Vigilancia' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'ORINA ANORMAL O EDEMA', color: '#2f6a62', target: 'definicion' },
  branches: [
    { title: 'El filtro GOTEA', sub: 'Síndrome nefrótico', color: '#2f6a62', target: 'complicaciones', leaves: [
      { title: 'Proteinuria alta', sub: 'Con hipoalbuminemia', color: '#2f6a62', target: 'complicaciones' },
      { title: 'Trombosis', sub: 'Albúmina <2,5 &middot; membranosa', color: '#7a2a2a', target: 'complicaciones' },
      { title: 'Infeccion', sub: 'Ascitis &middot; IgG baja', color: '#8a5a2e', target: 'complicaciones' }
    ] },
    { title: 'El filtro se INFLAMA', sub: 'Síndrome nefritico', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Dismorficos y cilindros', sub: 'Acantocitos >5%', color: '#9c3a52', target: 'complicaciones' },
      { title: 'Rápidamente progresiva', sub: '50% en 3 meses &middot; urgente', color: '#7a2a2a', target: 'complicaciones' }
    ] },
    { title: 'Hematuria aislada', sub: 'Glomerular o urológica', color: '#9c3a52', target: 'clasificacion', leaves: [
      { title: 'Riesgo AUA', sub: 'Bajo, intermedio o alto', color: '#9c3a52', target: 'clasificacion' }
    ] },
    { title: 'Soporte', sub: 'Sin saber la histología', color: '#5c7a3a', target: 'complicaciones' }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 2], imagen: [2], biopsia: [1] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['nefrotico-nefritico'];
export const figurasClasificacion = ['hematuria-aua', 'soporte-glomerular'];

export const figuras = {
  'nefrotico-nefritico': {
    titulo: 'Los dos síndromes, y la urgencia que esconde uno',
    fuente: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021;100(4S):S1-S276.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>NEFRÓTICO: el filtro gotea</th><th>NEFRITICO: el filtro se inflama</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Proteinuria</td><td>Alta, con <strong>hipoalbuminemia</strong></td><td>Variable, habitualmente menor</td></tr>
            <tr><td class="figure-org">Sedimento</td><td>Poco activo</td><td>Dismorficos, <strong>cilindros hemáticos</strong>, acantocitos &gt;5%</td></tr>
            <tr><td class="figure-org">Tensión arterial</td><td>Variable</td><td>Elevada</td></tr>
            <tr><td class="figure-org">Filtrado</td><td>Conservado al principio</td><td>En descenso</td></tr>
            <tr><td class="figure-org">Lo que mata</td><td>Trombosis e infección</td><td>La pérdida de nefronas, si se tarda</td></tr>
            <tr><td class="figure-org">Lo primero que se hace</td><td>Cuantificar bien y empezar el soporte</td><td>Excluir lo reversible y pedir serología</td></tr>
            <tr><td class="figure-org">La forma urgente</td><td>Trombosis de vena renal; embolia que puede ser muda</td><td><span class="figure-tag fail">Rápidamente progresiva</span>: filtrado &minus;50% en &le;3 meses</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Los <strong>dos falsos amigos</strong> que la guía señala: proteinuria en rango nefrótico <strong>sin</strong> hipoalbuminemia NO es síndrome nefrótico, y se ve sobre todo en la glomeruloesclerosis focal y segmentaria secundaria y en la nefropatía IgA; y al revés, puede haber síndrome nefrótico con una cuantificación que no alcanza del todo el rango clásico pero con la clínica completa. La definición exige la <strong>albúmina</strong>, no solo el número de la proteinuria, y ese número depende además del método: el verde de bromocresol lee unos 5,5 g/l por encima del púrpura de bromocresol.</div>`
  },
  'hematuria-aua': {
    titulo: 'Microhematuria: estratificación AUA del riesgo urológico',
    fuente: 'Barocas DA, Boorjian SA, Alvarez RD, et al. Microhematuria: AUA/SUFU Guideline. J Urol 2020;204(4):778-786.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>BAJO (cumple TODOS)</th><th>INTERMEDIO (cumple UNO)</th><th>ALTO (cumple UNO)</th></tr></thead>
          <tbody>
            <tr><td>Mujer &lt;50 años; hombre &lt;40 años</td><td>Mujer 50-59; hombre 40-59</td><td>Mujer u hombre <strong>&ge;60 años</strong></td></tr>
            <tr><td>Nunca fumador o &lt;10 paquetes-año</td><td>10 a 30 paquetes-año</td><td><strong>&gt;30 paquetes-año</strong></td></tr>
            <tr><td>3 a 10 hematies por campo en un análisis</td><td>11 a 25 hematies por campo</td><td><strong>&gt;25 hematies por campo</strong></td></tr>
            <tr><td>Sin factores de riesgo de carcinoma urotelial</td><td>Bajo riesgo sin estudio previo y 3-10 por campo en análisis REPETIDO</td><td>Antecedente de <strong>hematuria macroscópica</strong></td></tr>
            <tr><td><span class="figure-tag">Riesgo de urotelial &lt;1%</span></td><td><span class="figure-tag dys">1 a 2%</span></td><td><span class="figure-tag fail">10% o más</span></td></tr>
            <tr><td>Decisión compartida: repetir análisis en 6 meses, o cistoscopia y ecografía renal</td><td>Cistoscopia e imagen según la guía</td><td>Cistoscopia e imagen</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que esta tabla existe para evitar. Primera: definir la hematuria con la <strong>tira reactiva</strong>, que mide actividad peroxidasa y se confunde con mioglobinuria, hemoglobinuria, povidona yodada y deshidratación; una tira positiva obliga a microscopia, y la definición es <strong>&gt;3 hematies por campo</strong>. Segunda: atribuir la hematuria al <strong>anticoagulante</strong>; estos pacientes se evaluan igual que el resto porque su riesgo de neoplasia es similar. Tercera, la que más toca al internista: encontrar una causa renal <strong>no excluye</strong> la urológica. Ante proteinuria, dismorficos, cilindros o insuficiencia renal se deriva a nefrología, pero la evaluación urológica basada en riesgo se hace igualmente. Un paciente de bajo riesgo que eligio repetir el análisis y sigue con hematuria se <strong>reclasifica</strong> a intermedio o alto.</div>`
  },
  'soporte-glomerular': {
    titulo: 'Soporte: que baja la proteinuria y que la sube',
    fuente: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021;100(4S):S1-S276.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Medida</th><th>Efecto sobre la proteinuria</th><th>Lo que hay que saber</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">IECA o ARA II</td><td><span class="figure-tag">Hasta 40-50%</span>, dosis-dependiente</td><td>Sin diferencia entre unos y otros. El efecto crece con la restricción de sal</td></tr>
            <tr><td class="figure-org">Restricción de sodio</td><td>Potencia el efecto del bloqueo</td><td>1,5 a 2 g/d. Es la via no farmacológica cuando la proteinuria no baja</td></tr>
            <tr><td class="figure-org">Diltiazem o verapamilo</td><td>Reducción <strong>modesta</strong></td><td>Los no dihidropiridínicos; alternativa si no se tolera el bloqueo</td></tr>
            <tr><td class="figure-org">Betabloqueantes, diuréticos, alfa-1</td><td>Reducción menor</td><td>Bajan la proteinuria, pero poco</td></tr>
            <tr><td class="figure-org">Dihidropiridinas, metildopa, guanfacina</td><td><span class="figure-tag fail">Poco efecto; pueden AUMENTARLA</span></td><td>El error silencioso: controlan la tensión y empeoran el objetivo renal</td></tr>
            <tr><td class="figure-org">IECA + ARA II juntos</td><td>Aditivo</td><td>Más lesión renal aguda e hiperpotasemia en ensayos. La guía aconseja prudencia</td></tr>
            <tr><td class="figure-org">IECA o ARA II + inhibidor de renina</td><td>&mdash;</td><td><span class="figure-tag fail">NO se recomienda</span>, por hiperpotasemia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El dato que evita retiradas innecesarias: en monoterapia los IECA y los ARA II bajan el filtrado, y un <strong>ascenso de creatinina del 10 al 20%</strong> es frecuente y esperable. Salvo que la creatinina siga subiendo, refleja el efecto hemodinámico y <strong>no</strong> empeoramiento de la enfermedad renal, y no debe motivar la suspensión. La excepción es el paciente cuyo filtrado esta cambiando <strong>rápidamente</strong>: ahi el fármaco puede contribuir a la insuficiencia y no debe usarse. Si la hiperpotasemia limita la dosis, antes de bajarla se puede usar un diurético perdedor de potasio, corregir la acidosis metabólica o dar un quelante oral.</div>`
  }
};
