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

export const definicionText = `<p style="margin:0 0 14px;">El glomerulo falla de <strong>dos maneras</strong>, y distinguirlas no necesita biopsia ni nefrologo: se decide junto a la cama con la historia, la tension, el sedimento y una cuantificacion de proteinuria. Si el filtro <strong>gotea</strong>, el cuadro es NEFROTICO: proteinuria alta, hipoalbuminemia, edema y, detras de todo eso, trombosis e infeccion. Si el filtro se <strong>inflama</strong>, es NEFRITICO: hematuria con hematies dismorficos y cilindros, hipertension y filtrado que cae. El sindrome, y no el nombre de la histologia, es lo que fija la urgencia y las primeras decisiones.</p>
<p style="margin:0 0 14px;">Para el internista el tema se reduce a hacer bien <strong>tres cosas</strong> y a reconocer una cuarta. Cuantificar la proteinuria con el metodo correcto, porque el numero que se interpreta depende de como se recogio. Leer la hematuria, que es donde se separa lo glomerular de lo urologico y donde mas se falla por los dos lados. Y dar el <strong>tratamiento de soporte</strong>, que funciona sin saber la histologia y que la propia guia considera capaz de modular la necesidad de inmunosupresores. La cuarta es saber cual de estas presentaciones es una urgencia: la <strong>glomerulonefritis rapidamente progresiva</strong>, definida como una caida del filtrado del 50% o mas en 3 meses o menos.</p>
<p style="margin:0 0 14px;">Dos limites, para que el tema sea util y honesto. Lo que tiene tema propio se enlaza y no se repite: la enfermedad renal cronica y su progresion estan en el modulo 89, los trastornos del sodio, el potasio y el equilibrio acido-base en el 90, la lesion renal aguda en su tema, y los signos cutaneos que apuntan a una glomerulopatia en el modulo 81. Y el limite de la fuente: buena parte del detalle de la KDIGO 2021 esta en <strong>figuras</strong> que el texto no reproduce, de modo que el tratamiento inmunosupresor por entidad se da aqui al nivel de sus recomendaciones graduadas, sin inventar lo que la guia pone en un diagrama.</p>`;

export const bibliografia = [
  'Kidney Disease: Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group. KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int. 2021;100(4S):S1-S276.',
  'Barocas DA, Boorjian SA, Alvarez RD, et al. Microhematuria: AUA/SUFU Guideline. J Urol. 2020;204(4):778-786.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El sindrome se decide junto a la cama',
      tituloB: 'Las presentaciones que no esperan',
      compensada: 'La pregunta no es "¿que glomerulopatia es?" sino "¿que SINDROME tengo delante?", porque eso ya ordena todo lo demas. NEFROTICO: proteinuria importante, hipoalbuminemia y edema, con hiperlipidemia y riesgo trombotico detras. Un detalle que la guia subraya: la proteinuria en rango nefrotico NO siempre se acompaña de sindrome nefrotico, porque puede faltar la hipoalbuminemia, y eso se ve sobre todo en la glomeruloesclerosis focal y segmentaria SECUNDARIA y en la nefropatia IgA; y al reves, puede haber sindrome nefrotico con una cuantificacion que no llega del todo al rango clasico pero con la clinica completa. NEFRITICO: hematuria glomerular, hipertension y caida del filtrado. En la hematuria visible de origen glomerular NO hay coagulos y NO suele haber sintomas urinarios, que son las dos pistas que la separan de la urologica en la propia cabecera.',
      descompensada: 'Lo que obliga a moverse el mismo dia. GLOMERULONEFRITIS RAPIDAMENTE PROGRESIVA: caida del filtrado estimado del 50% o mas en 3 meses o menos, una vez excluidas las otras causas (vasculitis asociada a ANCA, enfermedad anti-membrana basal) y las reversibles, como la toxicidad por farmacos y las causas pre y posrenales. La biopsia es ESENCIAL en estos casos. SOSPECHA DE ENFERMEDAD ANTI-MBG: la guia pide que el diagnostico se haga SIN DEMORA en todo paciente con sospecha de glomerulonefritis rapidamente progresiva, porque es una glomerulonefritis cresentica que puede presentarse como sindrome pulmon-riñon. SINDROME NEFROTICO CON DOLOR LUMBAR, HEMATURIA O DETERIORO BRUSCO: pensar en trombosis de la vena renal. NEFROTICO CON ASCITIS Y FIEBRE: examinar y cultivar el liquido, porque puede haber peritonitis bacteriana espontanea y la bacteriemia ocurre aunque los signos sean solo abdominales. Y un aviso de laboratorio en ese escenario: la velocidad de sedimentacion NO ayuda, mientras que la proteina C reactiva si puede informar.'
    },
    laboratorio: [
      { prueba: 'Cuantificacion de la proteinuria en orina de 24 horas', utilidad: 'Es el metodo PREFERIDO en enfermedad glomerular: promedia la variacion por ritmo circadiano, actividad fisica y postura, y evita el error del cociente en una muestra aislada. La guia pide recogida de 24 horas cuando se va a iniciar o intensificar inmunosupresion, o cuando cambia la situacion clinica. Su punto debil es la recogida, por exceso o por defecto.' },
      { prueba: 'Primera orina de la mañana y el cociente proteina-creatinina', utilidad: 'La primera orina de la mañana equivale a una recogida nocturna y es una alternativa razonable, pero tiende a SUBESTIMAR la excrecion de 24 horas en torno a un 20% por el efecto del decubito nocturno; el efecto es menor cuando la proteinuria es de rango nefrotico. El cociente en una muestra aislada al azar esta DESACONSEJADO en glomerulopatia, salvo que se recoja siempre a la misma hora y en condiciones comparables. El compromiso que propone la guia es recoger una orina de 12 a 24 horas "intencionada" y medir el cociente en una aliquota.' },
      { prueba: 'Proteinuria total frente a albuminuria', utilidad: 'El cociente albumina-creatinina no se usa habitualmente en las glomerulopatias NO diabeticas, aunque si sea el recomendado para clasificar la enfermedad renal cronica. La albumina supone de media alrededor del 65% de la proteina urinaria total en la glomerulonefritis, con valores mas altos en la enfermedad de cambios minimos. Las formulas que predicen una a partir de la otra son poco fiables por debajo de 500 mg/d, probablemente por la proteinuria tubular de bajo peso molecular.' },
      { prueba: 'Albumina serica, y con que metodo se midio', utilidad: 'Detalle que cambia la lectura de la definicion: el verde de bromocresol (BCG) da resultados FALSAMENTE ALTOS frente al purpura de bromocresol, la electroforesis capilar o la inmunonefelometria, con una diferencia de unos 5,5 g/l. Es decir, el mismo paciente puede quedar dentro o fuera de un umbral segun el metodo del laboratorio. Ademas, una albumina por debajo de 2,5 g/dl es uno de los mejores predictores de riesgo trombotico.' },
      { prueba: 'Filtrado glomerular estimado', utilidad: 'La ecuacion CKD-EPI basada en creatinina es la preferida en el adulto con enfermedad glomerular. El aviso que mas importa: en el sindrome nefrotico con hipoalbuminemia el manejo tubular de la creatinina esta alterado, y las ecuaciones basadas en creatinina pueden SOBREESTIMAR el filtrado real en un 50% o mas. Tambien es poco fiable durante un episodio de lesion renal aguda y puede alterarse por la miopatia cronica por glucocorticoides.' },
      { prueba: 'Sedimento urinario con morfologia eritrocitaria', utilidad: 'La guia lo considera indicado de rutina en TODAS las formas de enfermedad glomerular. En la glomerulonefritis los hematies son dismorficos y pequenos en el 50 al 80% de los casos. Los cilindros hematicos o los acantocitos por encima del 5% de todos los hematies indican habitualmente una enfermedad glomerular inflamatoria. Dato fino: entre los pocos hematies de una orina normal bien recogida, todos son de tipo glomerular.' },
      { prueba: 'Inmunoglobulinas sericas si hay infecciones de repeticion', utilidad: 'En el paciente con enfermedad glomerular e infecciones repetidas, medirlas. Si la IgG serica esta por debajo de 600 mg/dl hay evidencia LIMITADA de que el riesgo de infeccion se reduce administrando inmunoglobulina intravenosa mensual a 400 mg/kg para mantenerla por encima de esa cifra.' },
      { prueba: 'Cribado de infeccion latente antes de inmunosuprimir', utilidad: 'Una enfermedad latente no reconocida puede reactivarse al iniciar la inmunosupresion, de modo que la busqueda y el tratamiento van ANTES. En el mismo sentido, cuando se usa glucocorticoide a dosis de 0,5 mg/kg/d o mas, la guia pide profilaxis de neumonia por Pneumocystis junto con gastroproteccion y proteccion osea.' }
    ],
    no_invasivos: [
      { metodo: 'Tira reactiva: lo que detecta y lo que no', interpretacion: 'Es muy sensible para hemoglobina, libre o eritrocitaria, con muy pocos falsos negativos, salvo en quien toma grandes cantidades de vitamina C. Da falsos POSITIVOS con mioglobinuria y hemoglobinuria, porque lo que mide es actividad peroxidasa, que se confunde tambien con povidona yodada y con la deshidratacion. Consecuencia practica que las dos guias comparten: una tira positiva NO es una microhematuria; obliga a una microscopia formal.', cutoff: 'Nunca definir hematuria solo con la tira' },
      { metodo: 'Microhematuria: la definicion que hay que usar', interpretacion: 'Mas de 3 hematies por campo de gran aumento en el examen microscopico de UNA muestra de orina bien recogida (recomendacion fuerte, calidad baja). La guia insiste en que los laboratorios informen la cifra de hematies por campo de forma CUANTITATIVA, porque el grado de hematuria es uno de los ejes de la estratificacion del riesgo.', cutoff: 'Mas de 3 hematies por campo' },
      { metodo: 'Separar la hematuria glomerular de la urologica (calculadora disponible)', interpretacion: 'A favor de GLOMERULAR: hematies dismorficos y pequenos, cilindros hematicos, acantocitos por encima del 5%, proteinuria acompañante, y en la hematuria visible, ausencia de coagulos y ausencia de sintomas urinarios. A favor de UROLOGICA: coagulos, sintomas miccionales, hematies de morfologia normal. El error que la guia urologica señala es creer que una cosa excluye la otra.', cutoff: 'Acantocitos >5% o cilindros hematicos' },
      { metodo: 'Estratificacion AUA del riesgo de la microhematuria (calculadora disponible)', interpretacion: 'Clasifica en riesgo BAJO, INTERMEDIO o ALTO de neoplasia genitourinaria. Los sistemas considerados estiman un riesgo de carcinoma urotelial menor del 1% en los de bajo riesgo, del 1 al 2% en los intermedios y del 10% o mas en los de alto riesgo. Los ejes son la edad segun el sexo, los paquetes-año de tabaco, el numero de hematies por campo y los antecedentes.', cutoff: '<1%, 1-2% y 10% o mas' },
      { metodo: 'Umbrales de proteinuria que cambian el pronostico', interpretacion: 'La mayor parte de los estudios sugiere que la perdida de funcion renal puede evitarse en gran medida si la proteinuria se reduce por debajo de 0,5 g/d, y que la progresion se enlentece si se reduce por debajo de 1 a 1,5 g/d. La excepcion son la enfermedad de cambios minimos y el sindrome nefrotico corticosensible, donde lo que define el curso es la remision completa. Un descenso sostenido del 30% respecto al valor basal se considera un subrogado aceptable de duplicar la creatinina o llegar a fallo renal.', cutoff: 'Menos de 0,5 g/d es el objetivo' },
      { metodo: 'Nefropatia IgA: el umbral que define alto riesgo', interpretacion: 'Alto riesgo de progresion se define hoy como proteinuria por encima de 0,75 a 1 g/d PESE a 90 dias o mas de tratamiento de soporte optimizado. Es decir, el soporte va primero y durante un plazo definido, y solo despues se plantea inmunosuprimir. Reducir la proteinuria por debajo de 1 g/d es un subrogado de mejor evolucion renal.', cutoff: '0,75 a 1 g/d tras 90 dias de soporte' }
    ],
    imagen: [
      { modalidad: 'Ecografia renal', hallazgos: 'Forma parte de la evaluacion urologica de la microhematuria junto con la cistoscopia en el paciente de bajo riesgo que opta por estudiarse. En el contexto nefrologico sirve ademas para descartar causas posrenales antes de llamar rapidamente progresivo a un deterioro, que es una de las causas reversibles que la definicion exige excluir.' },
      { modalidad: 'Cistoscopia', hallazgos: 'Es el estandar para diagnosticar tumores vesicales, y la guia urologica insiste porque la mayoria de los canceres que aparecen en el estudio de una hematuria son VESICALES. El patron de practica que denuncia es justamente el contrario: apoyarse solo en la imagen e infrautilizar la cistoscopia. En series habituales, menos del 20% de los pacientes recibe las dos pruebas.' },
      { modalidad: 'Lo que NO cambia por estar anticoagulado', hallazgos: 'Los pacientes que toman antiagregantes o anticoagulantes deben evaluarse EXACTAMENTE igual que los que no los toman, sea cual sea el tipo o la intensidad del tratamiento (recomendacion fuerte), porque su riesgo de neoplasia es similar al del resto. Atribuir la hematuria al anticoagulante y cerrar el caso es el error que esta recomendacion existe para evitar.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las escalas de este tema sirven para tres decisiones distintas y conviene no mezclarlas. La primera es <strong>que sindrome</strong> hay delante, que se resuelve junto a la cama y fija la urgencia. La segunda es <strong>cuanto</strong> hay de proteinuria y de hematuria, donde el metodo de medida importa tanto como el resultado. Y la tercera es <strong>a quien hay que estudiar mas</strong>, que en la hematuria tiene una estratificacion de riesgo propia, urologica y no nefrologica. A eso se añade saber <strong>cuando biopsiar</strong>, y el detalle de que la biopsia tiene al menos una excepcion reconocida.`,
    escalas: [
      { nombre: 'Nefrotico frente a nefritico (calculadora disponible)', componentes: 'Proteinuria, albumina serica, edema, morfologia de los hematies, cilindros, tension arterial y velocidad de caida del filtrado.', formula: 'No es una puntuacion: es una separacion sindromica que se hace con lo que ya se tiene.', interpretacion: 'NEFROTICO: el filtro gotea. Proteinuria alta, hipoalbuminemia, edema, y detras hiperlipidemia, trombosis e infeccion. NEFRITICO: el filtro se inflama. Hematies dismorficos, cilindros hematicos, hipertension y filtrado que cae. Y una tercera categoria que es la urgencia: RAPIDAMENTE PROGRESIVO, caida del filtrado del 50% o mas en 3 meses o menos con las otras causas excluidas. Cuidado con los dos falsos amigos: proteinuria en rango nefrotico sin hipoalbuminemia NO es sindrome nefrotico, y hay sindrome nefrotico que no alcanza del todo el rango clasico de proteinuria.' },
      { nombre: 'Estratificacion AUA del riesgo de la microhematuria (calculadora disponible)', componentes: 'Edad segun el sexo, paquetes-año de tabaco, hematies por campo, hematuria macroscopica previa y otros factores de riesgo de carcinoma urotelial.', formula: 'BAJO exige cumplir TODOS sus criterios; INTERMEDIO y ALTO se cumplen con UNO solo.', interpretacion: 'BAJO: mujer menor de 50 años u hombre menor de 40, nunca fumador o menos de 10 paquetes-año, de 3 a 10 hematies por campo en un analisis, y sin factores de riesgo de carcinoma urotelial. INTERMEDIO: mujer de 50 a 59 u hombre de 40 a 59, de 10 a 30 paquetes-año, de 11 a 25 hematies por campo, paciente de bajo riesgo sin estudio previo con 3 a 10 hematies por campo en un analisis REPETIDO, u otros factores de riesgo. ALTO: 60 años o mas en cualquier sexo, mas de 30 paquetes-año, mas de 25 hematies por campo, o antecedente de hematuria macroscopica.' },
      { nombre: 'Umbrales de proteinuria (calculadora disponible)', componentes: 'Metodo de recogida y cifra obtenida.', formula: 'El metodo corrige el numero antes de interpretarlo.', interpretacion: 'Por debajo de 0,5 g/d la perdida de funcion renal puede evitarse en gran medida; por debajo de 1 a 1,5 g/d la progresion se enlentece. En nefropatia IgA, por encima de 0,75 a 1 g/d tras 90 dias de soporte optimizado define alto riesgo. En el niño con enfermedad glomerular el objetivo es un cociente proteina-creatinina por debajo de 200 mg/g, igual sea cual sea la etiologia. Y la correccion que casi nadie aplica: la primera orina de la mañana subestima la excrecion de 24 horas en torno a un 20%.' },
      { nombre: 'Riesgo trombotico del sindrome nefrotico (calculadora disponible)', componentes: 'Albumina serica, histologia, grado de proteinuria y factores de riesgo añadidos.', formula: 'Los tres mejores predictores son la histologia, el grado de proteinuria y la albumina serica.', interpretacion: 'El riesgo es mayor que en la poblacion general, sobre todo en los PRIMEROS 6 MESES tras el diagnostico, es mas frecuente en adultos que en niños y mas venoso que arterial. La trombosis venosa profunda y la de la VENA RENAL son las mas frecuentes, y la embolia pulmonar es relativamente comun y puede cursar SIN sintomas. La nefropatia membranosa es la histologia de mayor riesgo. Una albumina por debajo de 2,5 g/dl predice, y de forma independiente una albumina baja aumenta el riesgo al margen del grado de proteinuria.' },
      { nombre: 'Cuando biopsiar y cuando no', componentes: 'Presentacion clinica, sospecha diagnostica y utilidad esperada del resultado.', formula: 'Patron de oro con excepciones reconocidas.', interpretacion: 'La biopsia es el patron de oro de la evaluacion diagnostica de las glomerulopatias, pero en algunas circunstancias el tratamiento puede iniciarse sin ella. La excepcion mejor definida: NO se requiere biopsia para confirmar una nefropatia membranosa en un paciente con sindrome nefrotico y anticuerpo anti-PLA2R POSITIVO. En sentido contrario, la biopsia es ESENCIAL ante una glomerulonefritis rapidamente progresiva. La nefropatia IgA, en cambio, solo puede diagnosticarse con biopsia, porque no hay biomarcadores sericos ni urinarios validados. Y la enfermedad de cambios minimos depende de la microscopia ELECTRONICA.' },
      { nombre: 'Lo que el informe de la biopsia debe decir', componentes: 'Lesiones activas frente a cronicas, indice de fibrosis intersticial y atrofia tubular, y los sistemas de puntuacion validados.', formula: 'Leer la descripcion, no solo el diagnostico.', interpretacion: 'Las lesiones ACTIVAS son agudas y potencialmente respondedoras; las CRONICAS no suelen ser reversibles. El daño cronico irreversible se estima mejor por la cantidad de FIBROSIS INTERSTICIAL Y ATROFIA TUBULAR. Hay sistemas validados internacionalmente: MEST-C para la nefropatia IgA (hipercelularidad mesangial y endocapilar, esclerosis segmentaria, fibrosis intersticial y atrofia tubular, y semilunas) y las clases ISN/RPS para la nefritis lupica. Precaucion importante: el daño cronico debe interpretarse SIEMPRE junto a los datos clinicos, porque la muestra puede proceder por azar de una cicatriz cortical focal.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Sindrome nefrotico: el filtro que gotea',
      color: '#2f6a62',
      definicion: 'Cuadro en el que la perdida de proteina por el glomerulo es suficiente para producir hipoalbuminemia y sus consecuencias. La guia separa expresamente tres cosas que se confunden: sindrome nefrotico, proteinuria en RANGO nefrotico y proteinuria no nefrotica.',
      fisiopatologia: 'La proteinuria no es solo un marcador: refleja hipertension glomerular y daño del podocito, probablemente el factor principal de la cicatrizacion glomerular, y la propia proteina (o los factores plasmaticos que arrastra) puede ser toxica para el tubulointersticio. Por eso reducirla es tratamiento y no solo cosmetica de laboratorio.',
      clinica: 'Edema y ganancia de peso, que complican los sintomas y el control de la tension y pueden estar mediados por un defecto intrinseco de la excrecion renal de sodio. Hiperlipidemia. Y las dos complicaciones que matan: trombosis e infeccion, cada una con su ficha.',
      criterios_dx: 'La definicion exige hipoalbuminemia, no solo la cifra de proteinuria. Dos trampas simetricas: hay proteinuria en rango nefrotico SIN sindrome nefrotico, tipica de la glomeruloesclerosis focal y segmentaria secundaria y de la nefropatia IgA, porque falta la hipoalbuminemia; y hay sindrome nefrotico cuya cuantificacion no llega del todo al rango clasico pero cuya clinica es la tipica.',
      laboratorio: 'Proteinuria de 24 horas, albumina serica (atencion al metodo: el verde de bromocresol lee unos 5,5 g/l por encima), perfil lipidico y filtrado estimado, recordando que en la hipoalbuminemia las ecuaciones basadas en creatinina pueden sobreestimar el filtrado real en un 50% o mas.',
      tx_medico: 'Soporte primero: restriccion moderada de sodio, control de la tension, bloqueo del sistema renina-angiotensina y manejo del edema. La guia señala que estas terapias relativamente poco toxicas pueden prevenir, o al menos modular, la necesidad de inmunosupresores. Y añade una excepcion util: ese soporte puede no ser necesario en la enfermedad de cambios minimos corticosensible con remision rapida, ni en quien solo tiene microhematuria con filtrado conservado y sin proteinuria ni hipertension, algo habitual en la nefropatia IgA precoz.',
      pronostico: 'Reducir la proteinuria a rango no nefrotico suele elevar las proteinas sericas a valores normales, y esa subida de la albumina reduce el riesgo trombotico y el infeccioso, alivia sintomas y mejora la calidad de vida. Es el argumento mas concreto a favor de perseguir el objetivo de proteinuria.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de trombosis y a la de infeccion de este mismo tema; y para la progresion a enfermedad renal cronica, al modulo 89 de Enfermedad renal cronica.',
      algoritmo: ['Confirmar que hay hipoalbuminemia, no solo proteinuria alta', 'Preguntar con que metodo se midio la albumina', 'Cuantificar la proteinuria con orina de 24 horas', 'No fiarse del filtrado estimado: puede sobreestimar un 50% o mas', 'Empezar el soporte antes de pensar en inmunosupresion', 'Evaluar riesgo trombotico y vigilancia de infeccion'],
      figura: 'nefrotico-nefritico'
    },
    {
      nombre: 'Sindrome nefritico y la rapidamente progresiva',
      color: '#8c3a34',
      definicion: 'Cuadro de inflamacion glomerular: hematuria de origen glomerular, hipertension y descenso del filtrado. Su forma grave, la glomerulonefritis rapidamente progresiva, es la urgencia de todo el tema.',
      criterios_dx: 'Rapidamente progresiva se define como una caida del filtrado estimado del 50% o MAS en 3 meses o MENOS, una vez excluidas las otras causas de ese cuadro (vasculitis asociada a ANCA, enfermedad anti-membrana basal) y las reversibles: toxicidad por farmacos y causas pre y posrenales habituales. La biopsia es esencial.',
      clinica: 'Hematuria con hematies dismorficos, cilindros hematicos y acantocitos; hipertension; oliguria y deterioro de funcion. En la hematuria visible de causa glomerular no se forman coagulos y no suele haber sintomas urinarios.',
      laboratorio: 'Sedimento con morfologia eritrocitaria, funcion renal seriada, proteinuria, y la serologia que separa las causas: ANCA y anticuerpos anti-membrana basal glomerular, ademas del estudio de lupus cuando proceda.',
      complementarios: 'La biopsia en estos casos muestra con frecuencia hipercelularidad mesangial y endocapilar y una proporcion alta de glomerulos con SEMILUNAS y areas de necrosis focal. Matiz que conviene no saltarse: la presencia de semilunas SIN un cambio concomitante de la creatinina NO constituye una glomerulonefritis rapidamente progresiva, aunque obliga a un seguimiento estrecho.',
      dx_diferencial: 'Las tres grandes causas de glomerulonefritis rapidamente progresiva que hay que separar deprisa: la vasculitis asociada a ANCA, la enfermedad por anticuerpos anti-membrana basal glomerular y la nefritis lupica proliferativa. La guia pide que el diagnostico de la anti-MBG se haga SIN DEMORA en todo paciente con sospecha de rapidamente progresiva.',
      tx_medico: 'Depende de la causa y cada una tiene su recomendacion graduada, recogidas en la ficha de entidades. Lo comun es que el retraso cuesta nefronas, y por eso la urgencia esta en el diagnostico tanto como en el tratamiento.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de entidades de este tema para el tratamiento de cada causa; a Lesion renal aguda para el soporte del deterioro agudo; y al modulo 81 de Manifestaciones cutaneas de enfermedad sistemica si hay purpura palpable, que es vasculitis hasta demostrar lo contrario.',
      pronostico: 'Marcado por el porcentaje de semilunas y por el grado de esclerosis global ya presente en la biopsia, que es lo que distingue el riñon recuperable del que no lo es.',
      algoritmo: ['¿Cuanto ha caido el filtrado y en cuanto tiempo?', 'Excluir lo reversible: farmacos, prerrenal, obstruccion', 'Mirar el sedimento: dismorficos, cilindros, acantocitos', 'Pedir ANCA y anti-membrana basal el mismo dia', 'Biopsia, que aqui es esencial y no opcional', 'No llamar rapidamente progresivo a unas semilunas con creatinina estable'],
      figura: 'nefrotico-nefritico'
    },
    {
      nombre: 'Proteinuria: cuantificarla antes de interpretarla',
      color: '#4a6b7a',
      definicion: 'El hallazgo que define el eje nefrotico y el principal objetivo modificable del tratamiento. El problema practico no es detectarla sino medirla de forma que el numero signifique algo.',
      criterios_dx: 'La orina de 24 horas es el metodo preferido porque promedia la variacion por ritmo circadiano, actividad y postura. La guia la pide expresamente cuando se va a iniciar o intensificar inmunosupresion o cuando cambia la situacion clinica.',
      laboratorio: 'Si no se puede recoger 24 horas, la mejor alternativa es el cociente proteina-creatinina en una aliquota de una recogida intencionada de 12 a 24 horas, o en la primera orina de la mañana. El cociente en muestra AISLADA al azar esta desaconsejado en glomerulopatia salvo que se estandarice la hora y las condiciones.',
      complementarios: 'Las correcciones que hay que llevar en la cabeza: la primera orina de la mañana SUBESTIMA la excrecion de 24 horas en torno a un 20% por el decubito nocturno, efecto menor si la proteinuria es de rango nefrotico. La albumina es de media el 65% de la proteina total en la glomerulonefritis, mas en la enfermedad de cambios minimos. Y las formulas de conversion entre proteinuria y albuminuria son poco fiables por debajo de 500 mg/d.',
      dx_diferencial: 'La proteinuria ortostatica, en la que la primera orina de la mañana puede infraestimar especialmente. Y la proteinuria tubular de bajo peso molecular, que explica por que por debajo de 500 mg/d la proporcion de albumina deja de ser predecible.',
      tx_medico: 'Objetivos: por debajo de 0,5 g/d la perdida de funcion puede evitarse en gran medida; por debajo de 1 a 1,5 g/d la progresion se enlentece. Excepcion: en la enfermedad de cambios minimos y el sindrome nefrotico corticosensible lo que define el curso es la remision completa. Un descenso sostenido del 30% sobre el basal se acepta como subrogado de duplicar la creatinina o llegar a fallo renal.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a la ficha de tratamiento de soporte de este tema, que es como se baja; y al modulo 89 de Enfermedad renal cronica para la clasificacion por albuminuria, que alli si se usa.',
      algoritmo: ['Preguntar COMO se recogio antes de interpretar el numero', 'Si fue primera orina de la mañana, contar con un 20% de infraestimacion', 'Evitar el cociente en muestra aislada al azar', 'Fijar el objetivo: menos de 0,5 g/d, o menos de 1 g/d en IgA', 'Repetir con el mismo metodo para poder comparar']
    },
    {
      nombre: 'Hematuria: glomerular o urologica, y las dos cosas',
      color: '#9c3a52',
      definicion: 'Microhematuria se define como MAS DE 3 hematies por campo de gran aumento en el examen microscopico de una muestra unica, bien recogida. No se define por una tira reactiva positiva.',
      fisiopatologia: 'La tira mide actividad PEROXIDASA, de modo que detecta hemoglobina libre o eritrocitaria pero se confunde con mioglobinuria, hemoglobinuria, povidona yodada y deshidratacion. Es muy sensible, con pocos falsos negativos salvo en quien toma mucha vitamina C.',
      clinica: 'A favor de origen glomerular: hematies dismorficos y pequenos (50 al 80% de los casos en glomerulonefritis), cilindros hematicos, acantocitos por encima del 5% de los hematies, y en la hematuria visible, ausencia de coagulos y ausencia de sintomas urinarios. A favor de origen urologico: coagulos, sintomas miccionales, morfologia eritrocitaria normal.',
      criterios_dx: 'Una tira positiva, aunque sea solo trazas, obliga a una microscopia formal. Y el laboratorio debe informar la cifra de hematies por campo de forma cuantitativa, porque el grado de hematuria es uno de los ejes de la estratificacion de riesgo.',
      complementarios: 'La estratificacion AUA en riesgo bajo, intermedio y alto de neoplasia genitourinaria, con riesgos estimados de carcinoma urotelial menores del 1%, del 1 al 2% y del 10% o mas respectivamente. En el de bajo riesgo se decide con el paciente entre repetir el analisis en 6 meses o hacer cistoscopia y ecografia renal; si se repitio y persiste la hematuria, el paciente se RECLASIFICA a intermedio o alto y se estudia.',
      dx_diferencial: 'El punto que mas importa al internista y que la guia urologica deja por escrito: ante sospecha de enfermedad renal medica (proteinuria, hematies dismorficos, cilindros celulares o insuficiencia renal) hay que derivar a nefrologia, PERO la evaluacion urologica basada en riesgo debe hacerse igualmente, porque puede haber patologia urologica coexistente. Encontrar una causa no excluye la otra.',
      tx_medico: 'No hay tratamiento de la hematuria: hay estudio. Lo que si hay es un error frecuente con nombre propio: atribuirla al anticoagulante. Los pacientes con antiagregantes o anticoagulantes deben evaluarse igual que el resto, sea cual sea el tipo o la intensidad, porque su riesgo de neoplasia es similar.',
      seguimiento_ambulatorio: 'Tras resolver una causa no maligna presunta, sobre todo una infeccion urinaria, repetir el analisis para CONFIRMAR que la hematuria se resolvio; si persiste, estudio urologico basado en riesgo. Y en enfermedad glomerular conocida, la magnitud y la persistencia de la hematuria tienen valor pronostico, especialmente en la nefropatia IgA y en la vasculitis IgA.',
      pronostico: 'La mayoria de los canceres que se diagnostican en el estudio de una hematuria son VESICALES, y se detectan optimamente con cistoscopia. El patron de practica que la guia denuncia es apoyarse solo en la imagen: en la mayoria de las series, menos del 20% de los pacientes recibe cistoscopia e imagen.',
      algoritmo: ['Tira positiva: pedir microscopia, no concluir nada todavia', 'Confirmar mas de 3 hematies por campo en muestra bien recogida', 'Mirar morfologia, cilindros y acantocitos', 'Clasificar el riesgo urologico con la tabla AUA', 'Derivar a nefrologia si hay datos de enfermedad renal medica', 'Hacer IGUALMENTE el estudio urologico que corresponda al riesgo', 'No atribuirla al anticoagulante'],
      figura: 'hematuria-aua'
    },
    {
      nombre: 'Trombosis del sindrome nefrotico',
      color: '#7a2a2a',
      definicion: 'Complicacion tromboembolica arterial o venosa en el contexto del sindrome nefrotico, con un riesgo superior al de la poblacion general tanto en niños como en adultos.',
      epidemiologia: 'El riesgo es mayor sobre todo en los PRIMEROS 6 MESES tras el diagnostico. Es mas frecuente en adultos que en niños, mas venosa que arterial, y varia segun la histologia subyacente. La trombosis venosa profunda y la de la VENA RENAL son las mas frecuentes; la embolia pulmonar es relativamente comun y puede ocurrir SIN sintomas.',
      factores_riesgo: ['Albumina serica por debajo de 2,5 g/dl, que predice de forma independiente del grado de proteinuria', 'Nefropatia membranosa, la histologia de mayor riesgo', 'Grado de proteinuria', 'Trombosis previa y predisposicion genetica', 'Anticuerpos antifosfolipidicos', 'Inmovilidad, obesidad, neoplasia, embarazo y cirugia'],
      clinica: 'La arterial es poco frecuente en adultos y niños, pero se ha descrito en practicamente todos los lechos arteriales: aorta, mesenterica, axilar, pulmonar, iliaca, renal, femoral, poplitea, oftalmica y cerebral. Que la embolia pulmonar pueda ser asintomatica obliga a buscarla cuando el cuadro no cuadra.',
      criterios_dx: 'Los tres mejores predictores de riesgo trombotico son el diagnostico histologico, el grado de proteinuria y la albumina serica por debajo de 2,5 g/dl.',
      tx_medico: 'Anticoagulacion COMPLETA si ya hay evento tromboembolico. Anticoagulacion PROFILACTICA cuando el riesgo de tromboembolia supera el riesgo individual estimado de hemorragia grave inducida por la anticoagulacion; existe una herramienta en linea para ponderar las dos cosas.',
      tx_farmacologico: 'Los agentes de eleccion son la heparina o sus derivados y los cumarinicos. No hay ensayos aleatorizados que comparen heparina de bajo peso molecular con warfarina en sindrome nefrotico. Aviso practico: la warfarina tiene muchas interacciones, especialmente con los inhibidores de la calcineurina. Los anticoagulantes orales DIRECTOS no se han estudiado de forma sistematica en el paciente nefrotico, ni para profilaxis ni para tratamiento, de modo que la guia no los respalda aqui pese a tener menos interacciones.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Trastornos de la coagulacion y trombofilias, y a Tromboembolia pulmonar si el cuadro lo sugiere.',
      pronostico: 'Reducir la proteinuria eleva la albumina, y esa subida reduce el riesgo trombotico: es una de las razones por las que el objetivo de proteinuria no es un numero cosmetico.',
      algoritmo: ['Mirar la albumina: por debajo de 2,5 g/dl el riesgo sube', 'Mirar la histologia: la membranosa es la de mayor riesgo', 'Recordar la ventana de los primeros 6 meses', 'Ante dolor lumbar o deterioro brusco, pensar en vena renal', 'Sopesar profilaxis frente a riesgo hemorragico individual', 'Preferir heparina o cumarinico; los directos no estan estudiados aqui']
    },
    {
      nombre: 'Infeccion en la enfermedad glomerular',
      color: '#8a5a2e',
      definicion: 'Complicacion mayor del paciente nefrotico y del que recibe inmunosupresion, que la guia aborda pidiendo un grado alto de vigilancia clinica mas que una pauta fija.',
      clinica: 'La situacion que señala expresamente es el niño nefrotico con ASCITIS: el liquido debe examinarse al microscopio y cultivarse buscando peritonitis bacteriana espontanea. Y añade un aviso que evita cerrar el caso en falso: la bacteriemia puede ocurrir aunque los signos clinicos sean solo abdominales.',
      laboratorio: 'La velocidad de sedimentacion NO es util en este escenario; la proteina C reactiva si puede informar. Los antibioticos parenterales se inician una vez tomados los cultivos, sin esperar al resultado.',
      factores_riesgo: ['Hipogammaglobulinemia por perdida urinaria', 'Tratamiento inmunosupresor en curso', 'Ascitis en el paciente nefrotico', 'Infeccion latente no reconocida al iniciar inmunosupresion'],
      complementarios: 'Si hay infecciones de repeticion, medir inmunoglobulinas sericas. Con IgG por debajo de 600 mg/dl hay evidencia LIMITADA de que la inmunoglobulina intravenosa mensual a 400 mg/kg, para mantenerla por encima de esa cifra, reduzca el riesgo. La guia es explicita en que la evidencia es limitada, y conviene transmitirlo asi.',
      tx_medico: 'Antes de inmunosuprimir, buscar y tratar la enfermedad latente, porque puede reactivarse al iniciar el tratamiento. Con glucocorticoide a 0,5 mg/kg/d o mas, añadir profilaxis de neumonia por Pneumocystis, gastroproteccion y proteccion osea segun los protocolos locales.',
      dx_diferencial: 'Los pacientes que reciben inmunosupresores tienen riesgo aumentado de infecciones variadas, incluidas la neumonia adquirida en la comunidad y la sepsis, de modo que el umbral de sospecha baja en todos los focos, no solo en el abdominal.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: a Sepsis y choque septico si el cuadro progresa, y al modulo 80 de Cancer cutaneo no melanoma para la vigilancia cutanea del inmunodeprimido sostenido.',
      algoritmo: ['En el nefrotico con ascitis y fiebre, puncionar y cultivar', 'No descartar bacteriemia porque los signos sean abdominales', 'No usar la velocidad de sedimentacion para decidir', 'Iniciar antibiotico parenteral tras los cultivos', 'Si hay infecciones repetidas, medir inmunoglobulinas', 'Antes de inmunosuprimir: cribado de latentes y profilaxis']
    },
    {
      nombre: 'Edema nefrotico resistente al diuretico',
      color: '#3d5a73',
      definicion: 'Edema del sindrome nefrotico que no responde a las dosis habituales. Los pacientes nefroticos son con frecuencia resistentes al diuretico INCLUSO con filtrado normal, de modo que la resistencia no indica por si misma fallo renal.',
      tx_medico: 'Los pilares son diureticos junto con restriccion moderada de sodio en la dieta, de 1,5 a 2 g/d o de 60 a 90 mmol/d de sodio. Los diureticos de ASA son de primera linea, y habitualmente se prefiere administrarlos DOS veces al dia. Suelen hacer falta dosis mas altas por la menor llegada del farmaco al asa de Henle.',
      tx_farmacologico: 'Si la absorcion digestiva es dudosa por edema de la pared intestinal, pasar a via intravenosa en bolo o en infusion. Si tampoco responde, valorar ALBUMINA intravenosa añadida al diuretico intravenoso en el paciente con albumina serica por debajo de 2,0 g/dl: se administra premezclada con el diuretico de asa, o 25 a 50 g de solucion de albumina de 30 a 60 minutos ANTES del diuretico, que es cuando la expansion del volumen intravascular es maxima. Los diureticos ahorradores de potasio (espironolactona, amilorida) ayudan a mantener el potasio y pueden sumar natriuresis.',
      complementarios: 'Honestidad sobre la albumina, que la guia no esconde: no hay mucha evidencia de que sea eficaz para reducir el edema del sindrome nefrotico en ADULTOS, los efectos en niños parecen mas prometedores, y en el paciente nefrotico la mayor parte de la albumina administrada se excreta rapidamente por la orina, de modo que el efecto sobre la albumina plasmatica es transitorio en el mejor de los casos.',
      dx_diferencial: 'Una respuesta pobre al diuretico intravenoso puede deberse a volumen intravascular DISMINUIDO con activacion neurohumoral y del sistema renina-angiotensina, que es un escenario distinto del de sobrecarga y se maneja distinto.',
      seguimiento_hospitalario: 'La restriccion de AGUA no suele ser necesaria, porque estos pacientes estan con frecuencia depletados de volumen intravascular y son mas propensos a la deshidratacion con diureticos intensivos; solo se restringe si aparece hiponatremia. Ocasionalmente hace falta ultrafiltracion o hemodialisis para el edema resistente, sobre todo si hay lesion renal aguda asociada.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 90 de Sodio, potasio y equilibrio acido-base si aparece hiponatremia o hipopotasemia, y a Lesion renal aguda si el deterioro acompaña al edema.',
      algoritmo: ['Restringir sodio a 1,5 a 2 g/d antes de subir dosis', 'Diuretico de asa, habitualmente dos veces al dia', 'Subir dosis: hace falta mas por menor llegada al asa', 'Si hay edema intestinal, pasar a intravenoso', 'Con albumina por debajo de 2,0 g/dl, valorar albumina 30 a 60 min antes', 'No restringir agua salvo hiponatremia']
    },
    {
      nombre: 'Tratamiento de soporte: lo que se hace sin la histologia',
      color: '#5c7a3a',
      definicion: 'El conjunto de medidas que mejoran la evolucion en cualquier glomerulopatia, independientemente del patron histologico, y que la guia reune en un capitulo propio por delante de los tratamientos especificos.',
      tx_medico: 'Objetivo doble: proteger del riesgo cardiovascular de la hipertension y retrasar la perdida progresiva de filtrado. La modificacion del estilo de vida (restriccion de sal, normalizacion del peso, ejercicio regular, reduccion del alcohol y abandono del tabaco) es parte integral del control de la tension. El tratamiento antihipertensivo puede no ser necesario en todos los pacientes con enfermedad glomerular.',
      tx_farmacologico: 'Los antiproteinuricos de eleccion son los IECA o los ARA II, que pueden reducir la proteinuria hasta un 40 a 50% de forma DOSIS-DEPENDIENTE, sobre todo si el paciente cumple la restriccion de sal. No hay evidencia de que unos difieran de otros en esto. El uso conjunto de IECA y ARA II añade efecto antiproteinurico pero se asocio a mas lesion renal aguda e hiperpotasemia en ensayos en diabeticos, y aunque no se ha demostrado directamente en no diabeticos, los datos bastan para aconsejar PRUDENCIA.',
      complementarios: 'El dato que mas tranquiliza en la practica: en monoterapia, los IECA y los ARA II bajan el filtrado y es frecuente observar un ascenso de la creatinina del 10 al 20%. Salvo que la creatinina siga subiendo, ese ascenso moderado refleja su efecto hemodinamico y NO empeoramiento de la enfermedad renal intrinseca, y no debe motivar la retirada. En cambio, si el filtrado esta cambiando rapidamente, un IECA o un ARA II puede contribuir a la insuficiencia y no debe usarse.',
      dx_diferencial: 'Que hacer si no se toleran. Alternativas: inhibidor directo de la renina o antagonista del receptor mineralocorticoide, vigilando hiperpotasemia y caida del filtrado; la combinacion de IECA o ARA II con inhibidor directo de la renina NO se recomienda por el riesgo de hiperpotasemia. Si no se tolera ninguno, los calcioantagonistas NO dihidropiridinicos (diltiazem, verapamilo) reducen modestamente la proteinuria; los betabloqueantes, los diureticos y los bloqueantes alfa-1 la reducen menos. Y el aviso que se olvida: los calcioantagonistas DIHIDROPIRIDINICOS, la metildopa y la guanfacina tienen poco impacto sobre la proteinuria y pueden incluso AUMENTARLA.',
      seguimiento_hospitalario: 'Si la hiperpotasemia limita la dosis del antiproteinurico, se puede contrarrestar con diureticos perdedores de potasio, corrigiendo la acidosis metabolica, con quelantes orales de potasio, y en alguna medida liberalizando el sodio de la dieta. Quien no logra reducir la proteinuria pese a tener la tension controlada debe restringir mas el sodio, que es la via no farmacologica para bajarla.',
      pronostico: 'Hiperlipidemia: las estatinas se toleran bien y corrigen al menos parcialmente el perfil lipidico, aunque no esta establecido que protejan de la caida del filtrado; algunos datos sugieren que la atorvastatina puede reducir la albuminuria. Precaucion concreta: hay mas riesgo de mialgia y miositis al combinar estatinas con inhibidores de la calcineurina. Para ezetimiba y fibratos los datos son muy limitados y no respaldan su uso en monoterapia.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 89 de Enfermedad renal cronica para la proteccion renal de fondo, a Dislipidemias para el manejo lipidico general, y al modulo 90 si aparece hiperpotasemia.',
      algoritmo: ['Restriccion de sal y estilo de vida, que potencian todo lo demas', 'IECA o ARA II, subiendo dosis: el efecto es dosis-dependiente', 'Esperar y tolerar un ascenso de creatinina del 10 al 20%', 'Retirar solo si la creatinina SIGUE subiendo', 'No combinar IECA con ARA II de rutina', 'Si no se toleran, preferir diltiazem o verapamilo, no dihidropiridinas', 'Estatina con cuidado si hay inhibidor de calcineurina'],
      figura: 'soporte-glomerular'
    },
    {
      nombre: 'Las entidades y lo que decide su tratamiento',
      color: '#7a3a6b',
      definicion: 'Resumen de las glomerulopatias que la guia cubre, al nivel que su texto respalda: que las define, que decide el pronostico y cual es la recomendacion graduada de primera linea.',
      criterios_dx: 'NEFROPATIA IgA: solo se diagnostica con biopsia, no hay biomarcadores sericos ni urinarios validados, y se puntua con el MEST-C de la clasificacion de Oxford revisada. MEMBRANOSA: no se requiere biopsia si hay sindrome nefrotico y anti-PLA2R positivo, pero si evaluar condiciones asociadas con independencia del estado de anticuerpos. CAMBIOS MINIMOS: el diagnostico depende de la microscopia electronica. ANTI-MBG: autoanticuerpos frente al dominio no colagenoso de la cadena alfa-3 del colageno tipo IV, incidencia de 0,5 a 1 por millon, y alrededor del 80% de los pacientes tiene semilunas en la mitad o mas de los glomerulos.',
      tx_medico: 'NEFROPATIA IgA: con proteinuria por encima de 0,5 g/d se recomienda IECA o ARA II con independencia de que haya hipertension (1B). El alto riesgo se define como proteinuria por encima de 0,75 a 1 g/d pese a 90 dias o mas de soporte optimizado, y solo entonces se plantea inmunosupresion. MEMBRANOSA: con al menos un factor de riesgo de progresion se recomienda rituximab, o ciclofosfamida con glucocorticoide en meses alternos durante 6 meses, o un inhibidor de la calcineurina 6 meses o mas, segun la estimacion de riesgo (1B). CAMBIOS MINIMOS: glucocorticoide oral a dosis alta como tratamiento inicial (1C).',
      tx_farmacologico: 'GLOMERULOESCLEROSIS FOCAL Y SEGMENTARIA primaria: glucocorticoide oral a dosis alta como primera linea (1D, la calidad mas baja de todo el capitulo), y si es corticorresistente, ciclosporina o tacrolimus 6 meses o mas antes que seguir con glucocorticoide solo o no tratar (1C). VASCULITIS ASOCIADA A ANCA: glucocorticoides con ciclofosfamida o rituximab como tratamiento inicial del debut (1B), y mantenimiento con rituximab o azatioprina mas glucocorticoide a dosis baja tras inducir la remision (1C). NEFRITIS LUPICA: hidroxicloroquina o equivalente en todo paciente con lupus salvo contraindicacion (1C), y en la clase III o IV activa, con o sin componente membranoso, glucocorticoides mas ciclofosfamida intravenosa a dosis baja o micofenolato (1B). ANTI-MBG: ciclofosfamida y glucocorticoides MAS plasmaferesis en todos, salvo quienes llegan en dialisis, tienen 100% de semilunas o mas del 50% de esclerosis global en una biopsia adecuada, Y no tienen hemorragia pulmonar (1C).',
      complementarios: 'Tres advertencias que la guia repite y que son el antidoto al exceso de confianza en la biopsia: NO hay evidencia suficiente para usar el MEST-C para decidir si se inicia inmunosupresion en la nefropatia IgA; NO hay evidencia suficiente para basar la decision en la presencia y el numero de semilunas; y la herramienta internacional de prediccion de la IgA no sirve para estimar el efecto de un tratamiento concreto. La evaluacion del riesgo debe ser DINAMICA en el tiempo.',
      dx_diferencial: 'Un aviso transversal sobre la toxicidad: los efectos adversos del tratamiento son mas probables con filtrado por debajo de 50 ml/min por 1,73 m2, de modo que la conversacion sobre riesgos y beneficios cambia por debajo de esa cifra.',
      seguimiento_ambulatorio: 'A DONDE LLEVA: al modulo 81 de Manifestaciones cutaneas de enfermedad sistemica para los signos que anuncian lupus o vasculitis; a Mieloma multiple si el cuadro apunta a gammapatia; y al modulo 89 cuando el tema pasa a ser la progresion.',
      algoritmo: ['Definir el sindrome antes de buscar la entidad', 'Pedir anti-PLA2R si el cuadro es nefrotico del adulto', 'Recordar que la IgA exige biopsia y la membranosa puede no exigirla', 'En IgA, 90 dias de soporte antes de plantear inmunosupresion', 'No usar el MEST-C ni las semilunas para decidir inmunosupresion', 'En anti-MBG, no demorar: plasmaferesis salvo las excepciones']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Lo que hay que vigilar en el paciente con enfermedad glomerular, ordenado por lo que mas se olvida. No son parametros de monitorizacion continua, sino las comprobaciones que cambian la conducta.',
    parametros: [
      'Preguntar COMO se recogio la orina antes de interpretar cualquier cifra de proteinuria: la primera orina de la mañana subestima la de 24 horas en torno a un 20%.',
      'No fiarse del filtrado estimado en el nefrotico con hipoalbuminemia: las ecuaciones basadas en creatinina pueden sobreestimar el real en un 50% o mas.',
      'Mirar el sedimento con morfologia eritrocitaria en TODA enfermedad glomerular, no solo al principio: la magnitud y la persistencia de la hematuria tienen valor pronostico.',
      'Tolerar un ascenso de creatinina del 10 al 20% al iniciar IECA o ARA II, y retirar solo si sigue subiendo.',
      'Vigilar la ventana de los primeros 6 meses tras el diagnostico, que es cuando mas trombosis ocurre, y recordar que la embolia pulmonar puede ser asintomatica.',
      'Con albumina por debajo de 2,5 g/dl, el riesgo trombotico sube con independencia del grado de proteinuria.',
      'En el nefrotico con ascitis y fiebre, puncionar y cultivar, y no descartar bacteriemia porque los signos sean solo abdominales. La velocidad de sedimentacion no ayuda.',
      'Antes de inmunosuprimir: cribado de infeccion latente; y con glucocorticoide a 0,5 mg/kg/d o mas, profilaxis de Pneumocystis, gastroproteccion y proteccion osea.',
      'No atribuir una hematuria al anticoagulante: la evaluacion es la misma que en quien no lo toma.',
      'Y la comprobacion que cierra el caso: tras resolver una causa no maligna presunta, repetir el analisis para confirmar que la hematuria se fue.'
    ],
    criterios_uci_general: 'Lo que convierte este tema en una urgencia: la glomerulonefritis rapidamente progresiva, con caida del filtrado del 50% o mas en 3 meses o menos; la sospecha de enfermedad anti-membrana basal, que la guia pide diagnosticar sin demora y que puede presentarse como sindrome pulmon-riñon con hemorragia alveolar; la peritonitis bacteriana espontanea del nefrotico con ascitis; y la embolia pulmonar, que en este paciente puede cursar sin sintomas.',
    criterios_tips_general: 'No aplica. El equivalente aqui es el umbral de biopsia: esencial en la rapidamente progresiva, prescindible en la membranosa con anti-PLA2R positivo y sindrome nefrotico.',
    criterios_trasplante_general: 'Fuera del alcance de este tema. Las terapias de reemplazo y el trasplante renal son dos items propios del bloque VI que todavia no tienen modulo construido.',
    prevencion: 'La prevencion util en glomerulopatia es la del soporte, y su argumento esta en la propia guia: estas terapias relativamente poco toxicas pueden prevenir, o al menos modular, la necesidad de inmunosupresores, que si tienen efectos adversos relevantes. Restriccion de sal, control de la tension, bloqueo del sistema renina-angiotensina a dosis plena y reduccion sostenida de la proteinuria por debajo de 0,5 g/d. Y la prevencion de la toxicidad: cribado de infeccion latente y profilaxis antes de inmunosuprimir.'
  }
};

export const compCites = {
  'Sindrome nefrotico: el filtro que gotea': { definicion: [1], fisiopatologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1], tx_medico: [1], pronostico: [1] },
  'Sindrome nefritico y la rapidamente progresiva': { criterios_dx: [1], clinica: [1], laboratorio: [1], complementarios: [1], dx_diferencial: [1] },
  'Proteinuria: cuantificarla antes de interpretarla': { criterios_dx: [1], laboratorio: [1], complementarios: [1], dx_diferencial: [1], tx_medico: [1] },
  'Hematuria: glomerular o urologica, y las dos cosas': { definicion: [2], fisiopatologia: [1, 2], clinica: [1], criterios_dx: [2], complementarios: [2], dx_diferencial: [2], tx_medico: [2], seguimiento_ambulatorio: [1, 2], pronostico: [2] },
  'Trombosis del sindrome nefrotico': { definicion: [1], epidemiologia: [1], factores_riesgo: [1], clinica: [1], criterios_dx: [1], tx_medico: [1], tx_farmacologico: [1] },
  'Infeccion en la enfermedad glomerular': { clinica: [1], laboratorio: [1], complementarios: [1], tx_medico: [1], dx_diferencial: [1] },
  'Edema nefrotico resistente al diuretico': { definicion: [1], tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1], seguimiento_hospitalario: [1] },
  'Tratamiento de soporte: lo que se hace sin la histologia': { tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1], seguimiento_hospitalario: [1], pronostico: [1] },
  'Las entidades y lo que decide su tratamiento': { criterios_dx: [1], tx_medico: [1], tx_farmacologico: [1], complementarios: [1], dx_diferencial: [1] }
};

export const estigmasTitulo = 'Lo que se mira primero y ya orienta el caso';
export const estigmas = [
  { nombre: 'Hematuria visible sin coagulos ni sintomas urinarios', descripcion: 'En la hematuria visible de causa glomerular NO se forman coagulos y no suele haber sintomas del tracto urinario. Las dos cosas juntas apuntan al glomerulo antes de cualquier prueba.' },
  { nombre: 'Acantocitos por encima del 5% o cilindros hematicos', descripcion: 'Indican habitualmente enfermedad glomerular INFLAMATORIA. En la glomerulonefritis los hematies son dismorficos y pequenos en el 50 al 80% de los casos.' },
  { nombre: 'Proteinuria en rango nefrotico con albumina normal', descripcion: 'No es sindrome nefrotico: falta la hipoalbuminemia. Se ve sobre todo en la glomeruloesclerosis focal y segmentaria SECUNDARIA y en la nefropatia IgA, y cambia por completo el pronostico y la conducta.' },
  { nombre: 'Albumina serica por debajo de 2,5 g/dl', descripcion: 'Uno de los tres mejores predictores de riesgo trombotico, junto con la histologia y el grado de proteinuria, y lo es de forma INDEPENDIENTE de cuanta proteinuria haya.' },
  { nombre: 'Ascenso de creatinina del 10 al 20% al iniciar IECA o ARA II', descripcion: 'Es lo esperable y refleja el efecto hemodinamico del farmaco, no empeoramiento de la enfermedad renal. Solo obliga a retirar si la creatinina SIGUE subiendo.' },
  { nombre: 'Caida del filtrado del 50% o mas en 3 meses o menos', descripcion: 'Es la definicion de glomerulonefritis rapidamente progresiva, una vez excluidas las otras causas y las reversibles. Obliga a biopsia, que aqui es esencial, y a pedir ANCA y anti-membrana basal el mismo dia.' },
  { nombre: 'Tira reactiva positiva para sangre', descripcion: 'No es una microhematuria. Mide actividad peroxidasa, con falsos positivos por mioglobinuria, hemoglobinuria, povidona yodada y deshidratacion. Obliga a microscopia formal, donde la definicion exige mas de 3 hematies por campo.' },
  { nombre: 'Nefrotico con dolor lumbar o deterioro brusco', descripcion: 'Pensar en trombosis de la vena renal, que junto con la trombosis venosa profunda es la mas frecuente en el sindrome nefrotico, sobre todo en los primeros 6 meses y en la nefropatia membranosa.' }
];

export const biopsia = {
  indicaciones: [
    'Glomerulonefritis rapidamente progresiva, donde la biopsia es ESENCIAL',
    'Sindrome nefrotico del adulto sin diagnostico serologico establecido',
    'Sospecha de nefropatia IgA, que solo puede diagnosticarse con biopsia',
    'Sospecha de enfermedad de cambios minimos, que depende de la microscopia electronica',
    'Repeticion cuando el resultado vaya a cambiar el plan terapeutico o el pronostico'
  ],
  ventajas: [
    'Separa lesiones ACTIVAS, agudas y potencialmente respondedoras, de las CRONICAS, que no suelen ser reversibles',
    'Permite estimar el daño cronico irreversible por la fibrosis intersticial y la atrofia tubular',
    'Aporta sistemas validados: MEST-C en la nefropatia IgA y clases ISN/RPS en la nefritis lupica',
    'En la rapidamente progresiva muestra el porcentaje de semilunas y las areas de necrosis focal, que marcan el pronostico'
  ],
  limitaciones: [
    'NO se requiere para confirmar una membranosa si hay sindrome nefrotico y anti-PLA2R positivo',
    'La muestra puede proceder por azar de una cicatriz cortical focal, de modo que el daño cronico se interpreta siempre junto a la clinica',
    'No hay evidencia suficiente para usar el MEST-C ni el numero de semilunas para decidir si se inicia inmunosupresion en la nefropatia IgA',
    'La microscopia electronica no esta disponible en todas partes, y algunos diagnosticos dependen de ella',
    'No hay ensayos que respalden cuando ni con que frecuencia repetirla'
  ],
  contraindicaciones: [
    'Las habituales del procedimiento percutaneo: alteracion de la hemostasia no corregida e hipertension no controlada',
    'Valorar antes si el resultado va a cambiar la conducta, dado el caracter invasivo',
    'En la repeticion, la guia pide reservarla a cuando la informacion no pueda obtenerse de la sintesis de los datos clinicos disponibles',
    'No demorar el tratamiento de una anti-MBG sospechada esperando la histologia'
  ]
};

export const escalaRefs = {
  'Nefrotico frente a nefritico (calculadora disponible)': [1],
  'Estratificacion AUA del riesgo de la microhematuria (calculadora disponible)': [2],
  'Umbrales de proteinuria (calculadora disponible)': [1],
  'Riesgo trombotico del sindrome nefrotico (calculadora disponible)': [1],
  'Cuando biopsiar y cuando no': [1],
  'Lo que el informe de la biopsia debe decir': [1]
};

export const escalaCalc = {
  'Nefrotico frente a nefritico (calculadora disponible)': 'sindrome-glomerular',
  'Estratificacion AUA del riesgo de la microhematuria (calculadora disponible)': 'microhematuria-aua',
  'Umbrales de proteinuria (calculadora disponible)': 'proteinuria-umbral',
  'Riesgo trombotico del sindrome nefrotico (calculadora disponible)': 'trombosis-nefrotico'
};

export const compGroups = [
  { title: 'Los dos sindromes', items: ['Sindrome nefrotico: el filtro que gotea', 'Sindrome nefritico y la rapidamente progresiva'] },
  { title: 'Los dos hallazgos que traen al paciente', items: ['Proteinuria: cuantificarla antes de interpretarla', 'Hematuria: glomerular o urologica, y las dos cosas'] },
  { title: 'Lo que complica al nefrotico', items: ['Trombosis del sindrome nefrotico', 'Infeccion en la enfermedad glomerular', 'Edema nefrotico resistente al diuretico'] },
  { title: 'Lo que se hace', items: ['Tratamiento de soporte: lo que se hace sin la histologia', 'Las entidades y lo que decide su tratamiento'] }
];

export const complicacionesIntro = 'Las fichas siguen el orden en que se piensa el caso. Primero los dos SINDROMES, porque separarlos junto a la cama es lo que fija la urgencia y el estudio, y porque uno de ellos contiene la unica urgencia real del tema. Despues los dos HALLAZGOS que traen al paciente a la consulta, la proteinuria y la hematuria, que son donde mas se falla: la primera porque se interpreta sin preguntar como se midio, y la segunda porque se decide entre lo glomerular y lo urologico como si fueran excluyentes. Luego las tres COMPLICACIONES que convierten un sindrome nefrotico en un ingreso, y que se olvidan porque no son renales. Y al final lo que se hace: el soporte, que funciona sin saber la histologia, y las entidades, al nivel que la fuente respalda.';

export const categories = [
  { id: 'definicion', label: 'Los dos sindromes' },
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
    { title: 'El filtro GOTEA', sub: 'Sindrome nefrotico', color: '#2f6a62', target: 'complicaciones', leaves: [
      { title: 'Proteinuria alta', sub: 'Con hipoalbuminemia', color: '#2f6a62', target: 'complicaciones' },
      { title: 'Trombosis', sub: 'Albumina <2,5 &middot; membranosa', color: '#7a2a2a', target: 'complicaciones' },
      { title: 'Infeccion', sub: 'Ascitis &middot; IgG baja', color: '#8a5a2e', target: 'complicaciones' }
    ] },
    { title: 'El filtro se INFLAMA', sub: 'Sindrome nefritico', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Dismorficos y cilindros', sub: 'Acantocitos >5%', color: '#9c3a52', target: 'complicaciones' },
      { title: 'Rapidamente progresiva', sub: '50% en 3 meses &middot; urgente', color: '#7a2a2a', target: 'complicaciones' }
    ] },
    { title: 'Hematuria aislada', sub: 'Glomerular o urologica', color: '#9c3a52', target: 'clasificacion', leaves: [
      { title: 'Riesgo AUA', sub: 'Bajo, intermedio o alto', color: '#9c3a52', target: 'clasificacion' }
    ] },
    { title: 'Soporte', sub: 'Sin saber la histologia', color: '#5c7a3a', target: 'complicaciones' }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 2], imagen: [2], biopsia: [1] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['nefrotico-nefritico'];
export const figurasClasificacion = ['hematuria-aua', 'soporte-glomerular'];

export const figuras = {
  'nefrotico-nefritico': {
    titulo: 'Los dos sindromes, y la urgencia que esconde uno',
    fuente: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021;100(4S):S1-S276.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>NEFROTICO: el filtro gotea</th><th>NEFRITICO: el filtro se inflama</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Proteinuria</td><td>Alta, con <strong>hipoalbuminemia</strong></td><td>Variable, habitualmente menor</td></tr>
            <tr><td class="figure-org">Sedimento</td><td>Poco activo</td><td>Dismorficos, <strong>cilindros hematicos</strong>, acantocitos &gt;5%</td></tr>
            <tr><td class="figure-org">Tension arterial</td><td>Variable</td><td>Elevada</td></tr>
            <tr><td class="figure-org">Filtrado</td><td>Conservado al principio</td><td>En descenso</td></tr>
            <tr><td class="figure-org">Lo que mata</td><td>Trombosis e infeccion</td><td>La perdida de nefronas, si se tarda</td></tr>
            <tr><td class="figure-org">Lo primero que se hace</td><td>Cuantificar bien y empezar el soporte</td><td>Excluir lo reversible y pedir serologia</td></tr>
            <tr><td class="figure-org">La forma urgente</td><td>Trombosis de vena renal; embolia que puede ser muda</td><td><span class="figure-tag fail">Rapidamente progresiva</span>: filtrado &minus;50% en &le;3 meses</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Los <strong>dos falsos amigos</strong> que la guia señala: proteinuria en rango nefrotico <strong>sin</strong> hipoalbuminemia NO es sindrome nefrotico, y se ve sobre todo en la glomeruloesclerosis focal y segmentaria secundaria y en la nefropatia IgA; y al reves, puede haber sindrome nefrotico con una cuantificacion que no alcanza del todo el rango clasico pero con la clinica completa. La definicion exige la <strong>albumina</strong>, no solo el numero de la proteinuria, y ese numero depende ademas del metodo: el verde de bromocresol lee unos 5,5 g/l por encima del purpura de bromocresol.</div>`
  },
  'hematuria-aua': {
    titulo: 'Microhematuria: estratificacion AUA del riesgo urologico',
    fuente: 'Barocas DA, Boorjian SA, Alvarez RD, et al. Microhematuria: AUA/SUFU Guideline. J Urol 2020;204(4):778-786.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>BAJO (cumple TODOS)</th><th>INTERMEDIO (cumple UNO)</th><th>ALTO (cumple UNO)</th></tr></thead>
          <tbody>
            <tr><td>Mujer &lt;50 años; hombre &lt;40 años</td><td>Mujer 50-59; hombre 40-59</td><td>Mujer u hombre <strong>&ge;60 años</strong></td></tr>
            <tr><td>Nunca fumador o &lt;10 paquetes-año</td><td>10 a 30 paquetes-año</td><td><strong>&gt;30 paquetes-año</strong></td></tr>
            <tr><td>3 a 10 hematies por campo en un analisis</td><td>11 a 25 hematies por campo</td><td><strong>&gt;25 hematies por campo</strong></td></tr>
            <tr><td>Sin factores de riesgo de carcinoma urotelial</td><td>Bajo riesgo sin estudio previo y 3-10 por campo en analisis REPETIDO</td><td>Antecedente de <strong>hematuria macroscopica</strong></td></tr>
            <tr><td><span class="figure-tag">Riesgo de urotelial &lt;1%</span></td><td><span class="figure-tag dys">1 a 2%</span></td><td><span class="figure-tag fail">10% o mas</span></td></tr>
            <tr><td>Decision compartida: repetir analisis en 6 meses, o cistoscopia y ecografia renal</td><td>Cistoscopia e imagen segun la guia</td><td>Cistoscopia e imagen</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que esta tabla existe para evitar. Primera: definir la hematuria con la <strong>tira reactiva</strong>, que mide actividad peroxidasa y se confunde con mioglobinuria, hemoglobinuria, povidona yodada y deshidratacion; una tira positiva obliga a microscopia, y la definicion es <strong>&gt;3 hematies por campo</strong>. Segunda: atribuir la hematuria al <strong>anticoagulante</strong>; estos pacientes se evaluan igual que el resto porque su riesgo de neoplasia es similar. Tercera, la que mas toca al internista: encontrar una causa renal <strong>no excluye</strong> la urologica. Ante proteinuria, dismorficos, cilindros o insuficiencia renal se deriva a nefrologia, pero la evaluacion urologica basada en riesgo se hace igualmente. Un paciente de bajo riesgo que eligio repetir el analisis y sigue con hematuria se <strong>reclasifica</strong> a intermedio o alto.</div>`
  },
  'soporte-glomerular': {
    titulo: 'Soporte: que baja la proteinuria y que la sube',
    fuente: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021;100(4S):S1-S276.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Medida</th><th>Efecto sobre la proteinuria</th><th>Lo que hay que saber</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">IECA o ARA II</td><td><span class="figure-tag">Hasta 40-50%</span>, dosis-dependiente</td><td>Sin diferencia entre unos y otros. El efecto crece con la restriccion de sal</td></tr>
            <tr><td class="figure-org">Restriccion de sodio</td><td>Potencia el efecto del bloqueo</td><td>1,5 a 2 g/d. Es la via no farmacologica cuando la proteinuria no baja</td></tr>
            <tr><td class="figure-org">Diltiazem o verapamilo</td><td>Reduccion <strong>modesta</strong></td><td>Los no dihidropiridinicos; alternativa si no se tolera el bloqueo</td></tr>
            <tr><td class="figure-org">Betabloqueantes, diureticos, alfa-1</td><td>Reduccion menor</td><td>Bajan la proteinuria, pero poco</td></tr>
            <tr><td class="figure-org">Dihidropiridinas, metildopa, guanfacina</td><td><span class="figure-tag fail">Poco efecto; pueden AUMENTARLA</span></td><td>El error silencioso: controlan la tension y empeoran el objetivo renal</td></tr>
            <tr><td class="figure-org">IECA + ARA II juntos</td><td>Aditivo</td><td>Mas lesion renal aguda e hiperpotasemia en ensayos. La guia aconseja prudencia</td></tr>
            <tr><td class="figure-org">IECA o ARA II + inhibidor de renina</td><td>&mdash;</td><td><span class="figure-tag fail">NO se recomienda</span>, por hiperpotasemia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El dato que evita retiradas innecesarias: en monoterapia los IECA y los ARA II bajan el filtrado, y un <strong>ascenso de creatinina del 10 al 20%</strong> es frecuente y esperable. Salvo que la creatinina siga subiendo, refleja el efecto hemodinamico y <strong>no</strong> empeoramiento de la enfermedad renal, y no debe motivar la suspension. La excepcion es el paciente cuyo filtrado esta cambiando <strong>rapidamente</strong>: ahi el farmaco puede contribuir a la insuficiencia y no debe usarse. Si la hiperpotasemia limita la dosis, antes de bajarla se puede usar un diuretico perdedor de potasio, corregir la acidosis metabolica o dar un quelante oral.</div>`
  }
};
