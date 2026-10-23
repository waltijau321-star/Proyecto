// topics/enfermedad-renal-cronica/content.js
// Módulo 89 (bloque VI, Nefrología). Primer tema construido del bloque.
//
// Fuente principal: KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of
// Chronic Kidney Disease (Kidney International 2024;105(4S):S117-S314), leída del PDF que está
// en Bibliografia/IV. Nefrología y Trastornos Hidroelectrolíticos/Función renal/. Cada
// recomendación que se cita aquí lleva su grado entre paréntesis tal como lo publica la guía,
// porque en este tema la diferencia entre "recomendamos" (1) y "sugerimos" (2) cambia la
// conversación con el paciente: casi todo el tratamiento que frena la progresión es grado 1,
// y casi todo lo dietético es grado 2.
//
// Lo que este tema NO cubre, por estar en otro sitio de la app y no repetirse:
//   - La lesión renal aguda y la transición a enfermedad renal crónica: tema `lesion-renal-aguda`.
//   - La estadificación cardiovascular-renal-metabólica y las ecuaciones PREVENT: tema
//     `sindrome-cardiovascular-renal-metabolico`, que ya trae la matriz de riesgo de KDIGO
//     mirada desde el eje cardiometabólico.
//   - El metabolismo óseo y mineral general (hiper e hipocalcemia): tema
//     `metabolismo-oseo-mineral`. Aquí solo se trata lo que la ERC le hace a ese eje.

export const meta = {
  id: 'enfermedad-renal-cronica',
  titulo: 'Enfermedad Renal Crónica',
  subtitulo: 'Medicina Interna',
  accent: '#35707a'
};

export const definicionText = `Alteración de la estructura o de la función renal presente durante <strong>al menos 3 meses</strong>, con repercusión sobre la salud. Esa ventana de 3 meses es la que separa la enfermedad renal crónica de la aguda, y no es un trámite: sin ella, un episodio de lesión renal aguda se etiquetaría como crónico y al revés.

El diagnóstico se sostiene en <strong>dos ejes que hay que medir siempre juntos</strong>: el filtrado glomerular estimado (eje G) y la albuminuria (eje A). Medir solo el filtrado deja fuera a los pacientes con riñones que aún filtran bien pero ya pierden albúmina, que son precisamente los que más se benefician del tratamiento precoz. La guía de 2024 insiste en ello: la albuminuria es el factor que más mueve el pronóstico dentro de cada categoría de filtrado.`;

export const bibliografia = [
  'Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024;105(4S):S117-S314.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) Blood Pressure Work Group. KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney Int. 2021;99(3S):S1-S87.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) Diabetes Work Group. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int. 2022;102(5S):S1-S127.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) CKD-MBD Update Work Group. KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD). Kidney Int Suppl. 2017;7(1):1-59.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group. KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int. 2021;100(4S):S1-S276.',
  'Tangri N, Grams ME, Levey AS, et al. Multinational assessment of accuracy of equations for predicting risk of kidney failure: a meta-analysis. JAMA. 2016;315(2):164-174.',
  'Inker LA, Eneanya ND, Coresh J, et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med. 2021;385(19):1737-1749.',
  'Heerspink HJL, Stefansson BV, Correa-Rotter R, et al. Dapagliflozin in patients with chronic kidney disease (DAPA-CKD). N Engl J Med. 2020;383(15):1436-1446.',
  'The EMPA-KIDNEY Collaborative Group. Empagliflozin in patients with chronic kidney disease. N Engl J Med. 2023;388(2):117-127.',
  'Bakris GL, Agarwal R, Anker SD, et al. Effect of finerenone on chronic kidney disease outcomes in type 2 diabetes (FIDELIO-DKD). N Engl J Med. 2020;383(23):2219-2229.',
  'UK Kidney Association. Clinical practice guideline: treatment of acute hyperkalaemia in adults. 2023.',
  'National Kidney Foundation. KDOQI clinical practice guideline for hemodialysis adequacy: 2015 update. Am J Kidney Dis. 2015;66(5):884-930.'
];

export const content = {
  id: 'enfermedad-renal-cronica',
  titulo: 'Enfermedad Renal Crónica',
  subtitulo: 'Medicina Interna',
  accent: '#35707a',
  accentDim: '#35707a22',

  diagnostico: {
    laboratorio: [
      { prueba: 'Creatinina con filtrado estimado (eGFRcr)', utilidad: 'Define la categoría G. Se calcula siempre con una ecuación validada, nunca leyendo la creatinina cruda (1D), y <strong>sin incluir la raza</strong> en la fórmula.' },
      { prueba: 'Cociente albúmina/creatinina en orina', utilidad: 'Define la categoría A. En muestra aislada, preferentemente la primera de la mañana. La tira reactiva de proteínas NO lo sustituye: es poco sensible para la albuminuria moderada, que es la que interesa detectar.' },
      { prueba: 'Cistatina C', utilidad: 'La guía recomienda estimar la categoría G con la <strong>combinación de creatinina y cistatina C</strong> cuando esta esté disponible (1B), y la recomienda de forma expresa cuando la creatinina es menos fiable y la cifra va a cambiar una decisión (1C): masa muscular extrema en cualquiera de los dos sentidos, amputaciones, desnutrición o cirrosis.' },
      { prueba: 'Sedimento urinario', utilidad: 'Distingue el patrón glomerular (hematuria dismórfica, cilindros hemáticos) del tubular, y con ello orienta la causa, que es el tercer eje de la clasificación.' },
      { prueba: 'Hemograma y perfil férrico', utilidad: 'Anemia, que es a la vez complicación de la enfermedad y marcador de cronicidad cuando no hay analíticas previas. Toda anemia merece descartar otras causas antes de atribuirla al riñón.' },
      { prueba: 'Potasio y bicarbonato', utilidad: 'Hiperpotasemia y acidosis metabólica, las dos complicaciones que más condicionan el tratamiento farmacológico que frena la progresión.' },
      { prueba: 'Calcio, fósforo, PTH y vitamina D', utilidad: 'Trastorno mineral y óseo. Las decisiones se toman sobre tendencias, no sobre valores aislados.' },
      { prueba: 'Perfil lipídico', utilidad: 'Para caracterizar el riesgo, no para fijar el umbral de tratamiento: la indicación de estatina depende de la edad y del filtrado, no de la cifra de colesterol.' }
    ],
    no_invasivos: [
      { metodo: 'El par G-A', interpretacion: 'Es la prueba diagnóstica, no un cálculo accesorio: define si hay enfermedad, en qué estadio y con qué riesgo. Un filtrado de 70 con cociente de 400 mg/g es enfermedad con riesgo alto; un filtrado de 55 con cociente normal es riesgo moderado. La cifra sola no dice nada.', cutoff: 'Filtrado menor de 60 o cociente de 30 mg/g o más, mantenidos 3 meses' },
      { metodo: 'Ecuación de riesgo de falla renal (KFRE)', interpretacion: 'En ERC G3 a G5 la guía recomienda usar una ecuación de riesgo validada externamente para estimar el riesgo absoluto de falla renal (1A). Traduce la casilla en una probabilidad, que es lo que permite decidir derivación y preparación.', cutoff: '5 años del 3 al 5% para derivar; 2 años mayor del 10% para la atención multidisciplinaria' },
      { metodo: 'Prueba en el punto de atención (POCT)', interpretacion: 'Puede usarse para creatinina y albuminuria donde el acceso al laboratorio sea limitado o donde adelante el circuito (2C), siempre que el dispositivo cumpla los mismos criterios de calidad que el laboratorio.', cutoff: 'Los mismos umbrales que la determinación de laboratorio' }
    ],
    imagen: [
      { modalidad: 'Ecografía renal y de vías urinarias', hallazgos: 'Prueba inicial. Busca tres cosas: obstrucción, asimetría de tamaño (que sugiere enfermedad vascular o reflujo) y el patrón de la poliquistosis. Unos riñones pequeños e hiperecogénicos confirman la cronicidad cuando no hay analíticas previas, que es la situación más frecuente en la consulta.' },
      { modalidad: 'Biopsia renal', hallazgos: 'Se sugiere como prueba diagnóstica aceptable y segura para establecer la causa y guiar el tratamiento cuando sea clínicamente apropiada (2D). En la práctica: proteinuria en rango nefrótico, sospecha de glomerulopatía o deterioro sin causa clara.' },
      { modalidad: 'Radiografía lateral de abdomen o ecocardiograma', hallazgos: 'La calcificación vascular visible es información pronóstica útil y barata en la enfermedad avanzada.' }
    ]
  },

  clasificacion: {
    compensada_descompensada: `La clasificación es una <strong>rejilla de dos ejes</strong>, no una escalera. El eje <strong>G</strong> (filtrado) va de G1 a G5 y el eje <strong>A</strong> (albuminuria) de A1 a A3; el riesgo de cada casilla sale de cruzarlos, y por eso la guía la publica como un mapa de colores. Cruzar los dos ejes cambia la conducta en casos que mirando solo el filtrado parecerían tranquilos.

La guía de 2024 añade además la <strong>causa</strong> como tercer eje (la nomenclatura CGA: causa, categoría G y categoría A), porque dos pacientes con el mismo G3aA2 no se manejan igual si uno tiene nefropatía diabética y el otro una glomerulonefritis activa.`,
    escalas: [
      {
        nombre: 'Categorías G y A de KDIGO (calculadora disponible)',
        componentes: 'Filtrado glomerular estimado (G1 a G5) y cociente albúmina/creatinina en orina (A1 a A3).',
        formula: 'G1 90 o más; G2 60 a 89; G3a 45 a 59; G3b 30 a 44; G4 15 a 29; G5 menos de 15. A1 menos de 30 mg/g; A2 30 a 300; A3 más de 300.',
        interpretacion: 'El cruce de ambos ejes da el riesgo (bajo, moderado, alto o muy alto) y con él la frecuencia de control y el momento de derivar. G1 y G2 solo son enfermedad si hay además un marcador de daño, y la albuminuria es el más frecuente.'
      },
      {
        nombre: 'Prueba de cronicidad',
        componentes: 'Dos determinaciones separadas al menos 3 meses, o datos que prueben que el daño ya era antiguo.',
        formula: 'Filtrado menor de 60 o marcador de daño presente en dos momentos separados por 3 meses o más.',
        interpretacion: 'Sin cronicidad probada no hay diagnóstico: lo que hay es una lesión renal aguda o una enfermedad renal aguda, que se maneja de otra forma. Riñones pequeños e hiperecogénicos, anemia y alteraciones del metabolismo mineral apoyan la cronicidad cuando no hay analíticas previas.'
      },
      {
        nombre: 'Riesgo de falla renal (KFRE)',
        componentes: 'Cuatro variables: edad, sexo, filtrado glomerular estimado y cociente albúmina/creatinina.',
        formula: 'Ecuación de Tangri, validada en más de 30 países. La app no la calcula: su cálculo exige los coeficientes publicados y aquí se describe para interpretarla, no para reproducirla.',
        interpretacion: 'Riesgo a 5 años del 3 al 5%: criterio de derivación a nefrología, añadido a los criterios por filtrado y albuminuria. Riesgo a 2 años mayor del 10%: momento de organizar la atención multidisciplinaria y hablar de acceso vascular y trasplante.'
      },
      {
        nombre: 'Indicación de los cuatro pilares (calculadora disponible)',
        componentes: 'Diabetes, filtrado, albuminuria, potasio e insuficiencia cardiaca.',
        formula: 'Cruce de las recomendaciones 3.6, 3.7, 3.8 y 3.9 de la guía de 2024.',
        interpretacion: 'Devuelve qué pilares corresponden hoy a este paciente y cuáles no, con el grado de cada recomendación. La mayoría de los pacientes con ERC y albuminuria son candidatos a más de uno, y el error habitual es quedarse en el primero.'
      },
      {
        nombre: 'Respuesta del filtrado al iniciar el tratamiento (calculadora disponible)',
        componentes: 'Filtrado antes de iniciar y filtrado de control a las 2 a 4 semanas.',
        formula: 'Descenso porcentual del filtrado estimado respecto al valor previo al inicio.',
        interpretacion: 'Un descenso menor del 30% es el efecto hemodinámico esperado y el fármaco se mantiene. Un descenso del 30% o más es el umbral que la guía de 2024 fija para investigar otra causa (estenosis de arteria renal, depleción de volumen, antiinflamatorios), no para suspender de entrada.'
      },
      {
        nombre: 'Tratamiento del riesgo cardiovascular (calculadora disponible)',
        componentes: 'Edad, filtrado, enfermedad cardiovascular establecida y fibrilación auricular.',
        formula: 'Recomendaciones 3.15 y 3.16 de la guía de 2024.',
        interpretacion: 'En la ERC la primera causa de muerte no es la falla renal: es la enfermedad cardiovascular. La indicación de estatina depende más de la edad y del filtrado que del colesterol, que es lo que sorprende al aplicarla.'
      }
    ]
  },

  complicaciones: [
    {
      nombre: 'Definición, cronicidad y las dos categorías',
      color: '#35707a',
      definicion: 'Alteración de la estructura o la función renal durante 3 meses o más, con repercusión sobre la salud. Se estadifica por categoría de filtrado (G) y categoría de albuminuria (A), y se nombra junto a su causa.',
      fisiopatologia: 'Lo que la define no es un mecanismo único sino el resultado común: pérdida de nefronas con hipertrofia e hiperfiltración de las que quedan. Esa hiperfiltración compensadora es adaptativa al principio y lesiva después, porque la presión intraglomerular que mantiene el filtrado es la misma que daña el glomérulo. Entender esto explica de una vez por qué casi todo el tratamiento que funciona (bloqueo del sistema renina-angiotensina, inhibidores del cotransportador sodio-glucosa tipo 2) baja el filtrado al principio: reduce la presión intraglomerular, y ese descenso inicial es la señal de que el fármaco está haciendo su trabajo.',
      epidemiologia: 'Afecta a cerca del 10% de la población adulta mundial y la mayoría de quienes la tienen no lo saben, porque es asintomática hasta estadios avanzados. La diabetes y la hipertensión explican la mayor parte de los casos.',
      factores_riesgo: ['Diabetes mellitus, la primera causa', 'Hipertensión arterial', 'Enfermedad cardiovascular establecida', 'Antecedente de lesión renal aguda', 'Obesidad y síndrome metabólico', 'Edad avanzada', 'Antecedente familiar de enfermedad renal', 'Enfermedades autoinmunes sistémicas', 'Litiasis o enfermedad urológica obstructiva', 'Exposición mantenida a nefrotóxicos', 'Bajo peso al nacer'],
      clinica: 'SILENTE hasta estadios avanzados, que es el dato que explica el retraso diagnóstico. Cuando aparecen síntomas (astenia, anorexia, náuseas, prurito, edema, disnea) ya suele haber un filtrado muy bajo o complicaciones establecidas. El diagnóstico, por tanto, es de cribado y no de sospecha clínica: se busca en quien tiene factores de riesgo, no en quien se queja.',
      criterios_dx: 'Durante 3 meses o más: filtrado glomerular estimado menor de 60 mL/min/1.73 m2, O un marcador de daño renal (albuminuria de 30 mg/g o más, alteraciones del sedimento, alteraciones electrolíticas de origen tubular, anomalías estructurales por imagen o histología, o antecedente de trasplante). Cualquiera de los dos basta.',
      laboratorio: 'Creatinina con filtrado estimado y cociente albúmina/creatinina en orina, los dos. Cistatina C cuando la creatinina no sea fiable o cuando la cifra vaya a cambiar una decisión.',
      imagen: 'Ecografía renal en la evaluación inicial: descarta obstrucción, valora tamaño y ecogenicidad y detecta la poliquistosis.',
      complementarios: 'Rescatar analíticas previas es parte del diagnóstico, no un extra: son las que prueban la cronicidad y evitan confundir un episodio agudo con una enfermedad establecida.',
      dx_diferencial: 'Lesión renal aguda y enfermedad renal aguda (menos de 3 meses), que se distinguen por el curso temporal y por la ausencia de los estigmas de cronicidad. Las dos pueden además coexistir con la ERC: la lesión aguda sobre crónica es frecuente y empeora el pronóstico de ambas.',
      tx_medico: 'El diagnóstico no es el final sino el punto de partida: fija el estadio, el riesgo, la frecuencia de control, el momento de derivar y qué fármacos corresponden.',
      seguimiento_ambulatorio: 'La frecuencia de los controles sale de la casilla G-A: a mayor riesgo, más seguimiento. Se individualiza según la causa, la velocidad de progresión y las comorbilidades.',
      pronostico: 'Depende mucho más de la casilla completa que del filtrado solo. La albuminuria mueve el pronóstico dentro de cada categoría G, y por eso medir solo la creatinina infraestima el riesgo de forma sistemática.',
      algoritmo: ['Medir filtrado estimado Y cociente albúmina/creatinina, los dos', 'Repetir a los 3 meses para probar la cronicidad', 'Situar al paciente en la casilla G-A y nombrar la causa', 'Calcular el riesgo de falla renal si está en G3 a G5', 'Fijar con eso la frecuencia de control y la necesidad de derivar']
    },
    {
      nombre: 'Cómo se mide: creatinina, cistatina C y albuminuria',
      color: '#35707a',
      definicion: 'El filtrado glomerular se estima a partir de marcadores séricos mediante ecuaciones validadas, nunca a partir del marcador crudo. La albuminuria se cuantifica por cociente con la creatinina urinaria para corregir la concentración de la orina.',
      fisiopatologia: 'La creatinina depende de la masa muscular, de la dieta y de la secreción tubular, de modo que el mismo filtrado real da cifras distintas en personas distintas. La cistatina C la producen todas las células nucleadas y no depende de la masa muscular, pero sí de la inflamación, la función tiroidea y los corticoides. Ninguna de las dos es perfecta y por eso la combinación de ambas es más exacta que cualquiera por separado: sus errores no van en la misma dirección.',
      epidemiologia: 'La discordancia entre el filtrado estimado por creatinina y por cistatina C es frecuente y clínicamente relevante: identifica a pacientes cuyo riesgo real está mal clasificado por la creatinina sola.',
      factores_riesgo: ['Masa muscular muy alta o muy baja', 'Amputaciones', 'Desnutrición o caquexia', 'Cirrosis hepática', 'Dieta rica en carne o suplementos de creatina', 'Fármacos que bloquean la secreción tubular de creatinina', 'Embarazo', 'Obesidad extrema'],
      clinica: 'No da clínica: da errores de clasificación. Un paciente sarcopénico con creatinina de 0.9 mg/dL puede tener un filtrado mucho peor del que su cifra sugiere, y recibir dosis plenas de fármacos que no tolera.',
      criterios_dx: 'Usar siempre una ecuación validada sobre el marcador sérico, nunca el marcador solo (1D). Estimar la categoría G con la combinación de creatinina y cistatina C cuando esta esté disponible (1B).',
      laboratorio: 'Cociente albúmina/creatinina en muestra aislada, preferentemente la primera de la mañana. La tira reactiva de proteínas NO sustituye al cociente: es poco sensible para la albuminuria moderada, que es justo la que interesa detectar.',
      complementarios: 'Medir el filtrado con un marcador exógeno queda para cuando una estimación más exacta vaya a cambiar el tratamiento, lo que en la práctica significa muy pocos casos.',
      dx_diferencial: 'Un ascenso de la creatinina sin caída real del filtrado: ocurre con fármacos que bloquean su secreción tubular (trimetoprim, cimetidina, dolutegravir) y con la ingesta reciente de carne. No son nefrotoxicidad y no obligan a suspender nada.',
      tx_medico: 'Usar la misma ecuación dentro de una misma región, para que las cifras sean comparables entre centros. Y no incluir la raza en el cálculo.',
      seguimiento_ambulatorio: 'Confirmar siempre una albuminuria nueva: la fiebre, el ejercicio intenso, la infección urinaria y la insuficiencia cardiaca descompensada la elevan de forma transitoria.',
      pronostico: 'La albuminuria no es solo un marcador diagnóstico: es un factor pronóstico independiente, y su descenso con el tratamiento se asocia a mejor evolución renal.',
      algoritmo: ['Estimar el filtrado con ecuación validada, sin raza', 'Añadir cistatina C si está disponible o si la creatinina no es fiable', 'Cuantificar la albuminuria por cociente, no por tira reactiva', 'Confirmar toda albuminuria nueva antes de etiquetar', 'Descartar las causas transitorias y los fármacos que elevan la creatinina sin bajar el filtrado']
    },
    {
      nombre: 'Los cuatro pilares que frenan la progresión',
      color: '#2f6b5f',
      definicion: 'Cuatro familias de fármacos con beneficio renal demostrado: bloqueo del sistema renina-angiotensina, inhibidores del cotransportador sodio-glucosa tipo 2, antagonistas no esteroideos del receptor mineralocorticoide y agonistas del receptor de GLP-1.',
      fisiopatologia: 'Los cuatro actúan sobre mecanismos distintos y por eso se suman en vez de competir: el bloqueo del sistema renina-angiotensina y los inhibidores del cotransportador bajan la presión intraglomerular por vías diferentes (eferente el primero, retroalimentación tubuloglomerular el segundo), el antagonista mineralocorticoide actúa sobre la inflamación y la fibrosis, y el agonista de GLP-1 sobre el eje metabólico e inflamatorio.',
      epidemiologia: 'La infrautilización es la regla y no la excepción: la mayoría de los pacientes candidatos a más de un pilar reciben solo uno, casi siempre el bloqueo del sistema renina-angiotensina, que es el más antiguo.',
      factores_riesgo: ['Potasio elevado, que limita el bloqueo del sistema renina-angiotensina y el antagonista mineralocorticoide', 'Hipotensión sintomática', 'Filtrado por debajo del umbral de inicio de cada fármaco', 'Embarazo, que contraindica el bloqueo del sistema renina-angiotensina', 'Riesgo de cetosis en ayuno prolongado, cirugía o enfermedad crítica'],
      clinica: 'El efecto adverso que más veces hace suspender el tratamiento no es un efecto adverso: es el descenso esperado del filtrado al iniciarlo.',
      criterios_dx: 'Bloqueo del sistema renina-angiotensina: en ERC con albuminuria A3 sin diabetes (1B), con albuminuria A2 sin diabetes (2C) y con A2 o A3 con diabetes (1B). Inhibidor del cotransportador sodio-glucosa tipo 2: en diabetes tipo 2 con ERC y filtrado de 20 o más (1A); en cualquier ERC con filtrado de 20 o más y cociente de 200 mg/g o más, o con insuficiencia cardiaca independientemente de la albuminuria (1A); y con filtrado de 20 a 45 y cociente menor de 200 (2B). Antagonista no esteroideo del receptor mineralocorticoide: diabetes tipo 2, filtrado mayor de 25, potasio normal y albuminuria mayor de 30 mg/g pese a dosis máxima tolerada de bloqueo del sistema renina-angiotensina (2A). Agonista del receptor de GLP-1 de acción prolongada: diabetes tipo 2 y ERC sin objetivo glucémico alcanzado pese a metformina e inhibidor del cotransportador, o imposibilidad de usarlos (1B).',
      laboratorio: 'Creatinina y potasio antes de iniciar y a las 2 a 4 semanas de cada cambio de dosis.',
      tx_medico: 'Subir el bloqueo del sistema renina-angiotensina hasta la dosis máxima aprobada que el paciente tolere: la dosis baja "de protección renal" no es lo que se estudió. Una vez iniciado el inhibidor del cotransportador, es razonable mantenerlo aunque el filtrado caiga por debajo de 20, salvo intolerancia o inicio de terapia de reemplazo.',
      tx_farmacologico: 'NO combinar nunca inhibidor de la enzima convertidora, antagonista del receptor de angiotensina e inhibidor directo de la renina entre sí (1B): la combinación aumenta los eventos adversos sin beneficio. Retirar temporalmente el inhibidor del cotransportador en ayuno prolongado, cirugía o enfermedad crítica, por el riesgo de cetoacidosis euglucémica.',
      dx_diferencial: 'Un descenso del filtrado del 30% o más tras iniciar el bloqueo del sistema renina-angiotensina NO es el efecto esperado: es el umbral que la guía fija para investigar otra causa (estenosis de arteria renal, depleción de volumen, antiinflamatorios). Por debajo de ese 30%, el descenso es esperable y el fármaco se mantiene.',
      seguimiento_ambulatorio: 'El inicio del inhibidor del cotransportador no obliga a cambiar la frecuencia de controles, y el descenso reversible del filtrado al iniciarlo no es indicación de suspenderlo.',
      pronostico: 'El beneficio de estos fármacos es mayor cuanto mayor es la albuminuria basal, que es justo lo contrario de lo que sugiere la intuición de "tratar al que está mejor".',
      algoritmo: ['Bloqueo del sistema renina-angiotensina a dosis máxima tolerada si hay albuminuria', 'Añadir inhibidor del cotransportador sodio-glucosa tipo 2 si cumple criterios de filtrado y albuminuria', 'Reevaluar creatinina y potasio a las 2 a 4 semanas', 'Si persiste albuminuria con diabetes tipo 2 y potasio normal, añadir antagonista no esteroideo del receptor mineralocorticoide', 'Si no se alcanza el objetivo glucémico, añadir agonista del receptor de GLP-1 de acción prolongada']
    },
    {
      nombre: 'Presión arterial, dieta y estilo de vida',
      color: '#2f6b5f',
      definicion: 'Intervenciones no farmacológicas y objetivo tensional, que en la ERC tienen una recomendación propia y cifras distintas a las de la población general.',
      fisiopatologia: 'La presión sistémica se transmite al glomérulo cuando se pierde la autorregulación, que es lo que ocurre en el riñón dañado. Por eso el control tensional es el único tratamiento que beneficia a toda la ERC, con y sin albuminuria.',
      epidemiologia: 'La hipertensión está presente en la mayoría de los pacientes con ERC y es a la vez causa y consecuencia de la enfermedad.',
      factores_riesgo: ['Ingesta elevada de sodio', 'Obesidad', 'Sedentarismo', 'Apnea obstructiva del sueño', 'Antiinflamatorios no esteroideos'],
      clinica: 'Asintomática. La medición es lo que falla: el objetivo de la guía está definido sobre medición ESTANDARIZADA de consulta, y aplicarlo a una toma apresurada de pasillo lleva a sobretratar.',
      criterios_dx: 'Objetivo de presión sistólica menor de 120 mmHg cuando se tolere, con medición estandarizada (2B). Considerar un objetivo menos estricto en fragilidad, riesgo alto de caídas y fracturas, expectativa de vida muy limitada o hipotensión postural sintomática.',
      tx_medico: 'Actividad física de intensidad moderada al menos 150 minutos por semana, o lo que la tolerancia cardiovascular permita (1D), evitando el sedentarismo. Ingesta de sodio menor de 2 g al día, equivalente a menos de 5 g de sal (2C). Proteínas 0.8 g/kg/día en G3 a G5 (2C), evitando ingestas mayores de 1.3 g/kg/día en quien tiene riesgo de progresión.',
      tx_farmacologico: 'La restricción de sodio NO es apropiada en la nefropatía pierde-sal, que es la excepción que conviene recordar antes de dar el consejo de forma automática.',
      dx_diferencial: 'La dieta muy baja en proteínas (0.3 a 0.4 g/kg/día con suplementos de aminoácidos o cetoanálogos) queda para pacientes seleccionados, dispuestos y bajo supervisión estrecha: no es un consejo general.',
      seguimiento_ambulatorio: 'Revisar la técnica de medición antes de cambiar el tratamiento por una cifra aislada, y vigilar la hipotensión postural en el paciente mayor.',
      pronostico: 'El control tensional reduce tanto la progresión renal como los eventos cardiovasculares, que son los que más mortalidad aportan.',
      algoritmo: ['Medir la presión de forma estandarizada, no de pasillo', 'Objetivo sistólico menor de 120 mmHg si se tolera', 'Aflojar el objetivo en fragilidad, caídas o hipotensión postural', 'Sodio menor de 2 g al día, salvo nefropatía pierde-sal', 'Proteínas 0.8 g/kg/día y 150 minutos semanales de actividad física']
    },
    {
      nombre: 'Riesgo cardiovascular: estatina, aspirina y anticoagulación',
      color: '#2f6b5f',
      definicion: 'Conjunto de intervenciones dirigidas a la primera causa de muerte en la ERC, que no es la falla renal sino la enfermedad cardiovascular.',
      fisiopatologia: 'La ERC es un multiplicador del riesgo cardiovascular por varias vías simultáneas: inflamación crónica, calcificación vascular acelerada por el trastorno mineral, anemia, sobrecarga de volumen y dislipidemia. Por eso la mayoría de los pacientes con ERC muere de causa cardiovascular antes de llegar a necesitar diálisis.',
      epidemiologia: 'El riesgo cardiovascular aumenta de forma continua conforme cae el filtrado y conforme sube la albuminuria, y ya es detectable en estadios que todavía se consideran leves.',
      factores_riesgo: ['Filtrado descendido', 'Albuminuria', 'Diabetes', 'Hipertensión', 'Dislipidemia', 'Calcificación vascular', 'Anemia', 'Tabaquismo'],
      clinica: 'La presentación de la cardiopatía isquémica en la ERC es con más frecuencia atípica o silente, sobre todo en el diabético.',
      criterios_dx: 'Estatina o estatina con ezetimiba en adultos de 50 años o más con filtrado menor de 60 que no estén en diálisis ni trasplantados (1A). Estatina en adultos de 50 años o más con filtrado de 60 o más (1B). En adultos de 18 a 49 años, estatina si hay enfermedad coronaria conocida, diabetes, ictus previo o riesgo estimado alto (2A).',
      tx_medico: 'Aspirina a dosis baja para prevención SECUNDARIA en quien ya tiene enfermedad cardiovascular isquémica establecida (1C). En cardiopatía isquémica estable confirmada por prueba de esfuerzo, una estrategia inicial conservadora con tratamiento médico intensivo es una alternativa apropiada a la invasiva (2D).',
      tx_farmacologico: 'En fibrilación auricular con ERC G1 a G4, anticoagulantes orales de acción directa en preferencia a los antagonistas de la vitamina K (1C), con ajuste de dosis por filtrado y cautela en G4 y G5.',
      dx_diferencial: 'La indicación de estatina en la ERC depende de la edad y del filtrado, no de la cifra de colesterol, y tampoco exige objetivos de LDL repetidos: es la diferencia que más sorprende al aplicar estas recomendaciones.',
      seguimiento_ambulatorio: 'Revisar la dosis de anticoagulante cada vez que cambie el filtrado de forma relevante.',
      pronostico: 'Intervenir sobre el riesgo cardiovascular cambia la mortalidad más que cualquier otra cosa que se haga en estadios intermedios.',
      algoritmo: ['Estatina según edad y filtrado, no según el colesterol', 'Aspirina solo en prevención secundaria', 'Anticoagulante directo sobre warfarina en fibrilación auricular G1 a G4', 'Ajustar la dosis del anticoagulante al filtrado', 'Revisar el tratamiento cuando el filtrado cambie de categoría']
    },
    {
      nombre: 'Anemia, acidosis metabólica e hiperpotasemia',
      color: '#5c4a7a',
      definicion: 'Las tres complicaciones metabólicas que aparecen conforme cae el filtrado y que tienen tratamiento específico.',
      fisiopatologia: 'La anemia es sobre todo por déficit relativo de eritropoyetina, agravada por ferropenia funcional. La acidosis aparece cuando el riñón no excreta la carga ácida diaria ni regenera bicarbonato, y acelera el catabolismo muscular, la pérdida ósea y la propia progresión renal. La hiperpotasemia surge de la caída de la excreción distal, y el problema práctico es que los fármacos que más protegen el riñón son los que más la favorecen.',
      epidemiologia: 'Su frecuencia aumenta de forma progresiva con cada categoría G, y las tres son más frecuentes y más precoces en el paciente diabético.',
      factores_riesgo: ['Filtrado descendido', 'Diabetes', 'Bloqueo del sistema renina-angiotensina y antagonistas mineralocorticoides', 'Dieta rica en potasio', 'Acidosis, que desplaza potasio al exterior de la célula', 'Estreñimiento', 'Sangrado digestivo oculto, en el caso de la anemia'],
      clinica: 'La anemia da astenia y disnea de esfuerzo que se atribuyen con facilidad a la edad. La acidosis es silente y se detecta en el bicarbonato. La hiperpotasemia es silente hasta que da alteraciones electrocardiográficas o arritmia, y es la causa más frecuente de retirada inapropiada de los fármacos que protegen el riñón.',
      criterios_dx: 'Anemia: estudiar siempre antes de atribuirla a la ERC, con ferritina, índice de saturación de transferrina, B12 y folato. Acidosis: bicarbonato sérico. Hiperpotasemia: confirmar que no es una pseudohiperpotasemia por hemólisis de la muestra antes de actuar.',
      laboratorio: 'Hemograma, perfil férrico, bicarbonato y potasio en los controles periódicos, con una frecuencia que sube con la categoría G.',
      tx_medico: 'Acidosis: considerar tratamiento farmacológico con o sin medidas dietéticas en quien tiene bicarbonato bajo. Hiperpotasemia: revisar la dieta, corregir la acidosis, revisar los fármacos que la elevan y usar quelantes antes de renunciar al bloqueo del sistema renina-angiotensina.',
      tx_farmacologico: 'La estrategia ante la hiperpotasemia es tratarla para PODER mantener el fármaco protector, no suspender el fármaco para normalizar el potasio. Esa inversión del reflejo es la enseñanza que más cambia la práctica.',
      dx_diferencial: 'Toda anemia en la ERC merece descartar otras causas antes de atribuirla al riñón: la ferropenia por pérdidas digestivas es frecuente y tiene tratamiento propio.',
      seguimiento_ambulatorio: 'Reevaluar el potasio a las 2 a 4 semanas de cada cambio de dosis de los fármacos que lo elevan.',
      pronostico: 'La acidosis no corregida se asocia a progresión más rápida, y la anemia tratada mejora la capacidad funcional y la calidad de vida.',
      algoritmo: ['Estudiar la anemia antes de atribuirla al riñón', 'Corregir la ferropenia primero', 'Medir el bicarbonato y tratar la acidosis', 'Ante hiperpotasemia: dieta, acidosis, fármacos y quelante', 'Mantener el fármaco protector siempre que se pueda controlar el potasio']
    },
    {
      nombre: 'Trastorno mineral y óseo, y preparación para el reemplazo renal',
      color: '#5c4a7a',
      definicion: 'Alteración del eje calcio-fósforo-PTH-vitamina D propia de la ERC, y conjunto de decisiones que preparan el paso a la terapia de reemplazo cuando el filtrado sigue cayendo.',
      fisiopatologia: 'La retención de fósforo y el déficit de calcitriol elevan la PTH, y el resultado no se queda en el hueso: el mismo trastorno calcifica la pared vascular, que es el puente entre la enfermedad ósea y la mortalidad cardiovascular. Por eso el trastorno se llama mineral y óseo, y no osteodistrofia.',
      epidemiologia: 'Las alteraciones bioquímicas comienzan en estadios intermedios, antes de cualquier síntoma óseo.',
      factores_riesgo: ['Filtrado descendido', 'Ingesta elevada de fósforo, sobre todo en aditivos de alimentos procesados', 'Déficit de vitamina D', 'Tiempo prolongado en diálisis'],
      clinica: 'Silente durante años. Cuando aparece da dolor óseo, fracturas con traumatismos mínimos y, en casos avanzados, calcifilaxis.',
      criterios_dx: 'Seguir calcio, fósforo, PTH y fosfatasa alcalina, con frecuencia creciente según la categoría G. Las decisiones se toman sobre TENDENCIAS, no sobre valores aislados.',
      laboratorio: 'Calcio, fósforo, PTH, fosfatasa alcalina y 25-hidroxivitamina D.',
      imagen: 'La calcificación vascular visible en una radiografía lateral de abdomen o en el ecocardiograma es información pronóstica útil y barata.',
      tx_medico: 'Preparación para el reemplazo: la planificación empieza mucho antes de la indicación. Incluye educación sobre las modalidades, evaluación para trasplante anticipado, preservación del capital venoso del brazo no dominante y creación del acceso vascular con la antelación suficiente.',
      tx_farmacologico: 'Evitar la hipercalcemia y tratar el fósforo elevado de forma progresiva, priorizando la restricción de aditivos frente a la de alimentos naturales ricos en proteínas.',
      dx_diferencial: 'No toda fractura en un paciente con ERC es osteodistrofia: la osteoporosis coexiste y tiene tratamiento propio.',
      seguimiento_hospitalario: 'En el ingreso, proteger el capital venoso del brazo del futuro acceso: una vía periférica mal colocada puede costar una fístula.',
      seguimiento_ambulatorio: 'Un riesgo de falla renal a 2 años mayor del 10% es el umbral que la guía da para organizar la atención multidisciplinaria.',
      pronostico: 'Llegar a la terapia de reemplazo de forma planificada, con acceso maduro y modalidad elegida, mejora los resultados frente a empezar de urgencia por un catéter.',
      algoritmo: ['Seguir calcio, fósforo y PTH por tendencias', 'Restringir primero los aditivos de fósforo', 'Calcular el riesgo de falla renal a 2 años', 'Si supera el 10%, iniciar la preparación multidisciplinaria', 'Preservar el capital venoso y crear el acceso con antelación']
    }
  ],

  seguimiento_intrahospitalario: `El paciente con ERC que ingresa por cualquier motivo trae tres riesgos que se pasan por alto con facilidad.

<strong>El primero es la lesión renal aguda sobre crónica</strong>: la ERC es el principal factor de riesgo para sufrirla, y cada episodio deja al paciente en un escalón peor. Revisar nefrotóxicos, contraste y situaciones de hipoperfusión al ingreso es prevención, no trámite.

<strong>El segundo es el ajuste de dosis.</strong> Muchos fármacos que se prescriben de rutina en planta necesitan ajuste por filtrado, y la cifra que debe usarse no siempre es la misma que la del seguimiento ambulatorio: en el paciente inestable la creatinina va por detrás de la función real.

<strong>El tercero es el capital venoso.</strong> En quien previsiblemente va a necesitar una fístula, las vías periféricas y las extracciones repetidas en el brazo no dominante comprometen un acceso futuro. Es una decisión de dos segundos al ingreso con consecuencias de años.

Al alta: reconciliar qué fármacos protectores se suspendieron durante el ingreso y cuáles deben reintroducirse, porque la suspensión transitoria de un inhibidor del cotransportador o de un bloqueo del sistema renina-angiotensina se convierte en permanente con mucha facilidad si nadie lo revisa.`
};

export const compCites = {
  'Definición, cronicidad y las dos categorías': [1],
  'Cómo se mide: creatinina, cistatina C y albuminuria': [1, 7],
  'Los cuatro pilares que frenan la progresión': [1, 3, 8, 9, 10],
  'Presión arterial, dieta y estilo de vida': [1, 2],
  'Riesgo cardiovascular: estatina, aspirina y anticoagulación': [1],
  'Anemia, acidosis metabólica e hiperpotasemia': [1, 11],
  'Trastorno mineral y óseo, y preparación para el reemplazo renal': [1, 4, 12]
};

export const estigmasTitulo = 'Datos que cambian la conducta';
export const estigmas = [
  { s: 'Filtrado normal con albuminuria', p: 'Sí es enfermedad', photo: null, desc: 'G1 y G2 con A2 o A3 son enfermedad renal crónica y son candidatos a tratamiento. Medir solo la creatinina los deja fuera, y son los que más margen tienen.' },
  { s: 'Caída del filtrado al iniciar el tratamiento', p: 'Esperada', photo: null, desc: 'Un descenso menor del 30% tras iniciar el bloqueo del sistema renina-angiotensina o un inhibidor del cotransportador es el efecto buscado, no una reacción adversa. El umbral del 30% es el que obliga a investigar otra causa.' },
  { s: 'Potasio alto', p: 'Tratarlo, no rendirse', photo: null, desc: 'La conducta es controlar el potasio para poder mantener el fármaco protector, no suspender el fármaco para normalizar el potasio.' },
  { s: 'Creatinina que sube sin caer el filtrado', p: 'No es nefrotoxicidad', photo: null, desc: 'Trimetoprim, cimetidina y dolutegravir bloquean la secreción tubular de creatinina. La cifra sube, el filtrado real no cambia y no hay que suspender nada.' },
  { s: 'Paciente sarcopénico con creatinina normal', p: 'Pedir cistatina C', photo: null, desc: 'La masa muscular baja mantiene la creatinina engañosamente normal. La combinación de creatinina y cistatina C reclasifica a estos pacientes y cambia el ajuste de dosis.' },
  { s: 'Raza en la ecuación del filtrado', p: 'Ya no se usa', photo: null, desc: 'La guía indica explícitamente que debe evitarse el uso de la raza en el cálculo del filtrado estimado.' },
  { s: 'Vía periférica en el brazo no dominante', p: 'Puede costar una fístula', photo: null, desc: 'En quien previsiblemente necesitará acceso vascular, preservar el capital venoso es una decisión que se toma al ingreso y que condiciona años de tratamiento.' },
  { s: 'Albuminuria nueva sin confirmar', p: 'Confirmar antes de etiquetar', photo: null, desc: 'Fiebre, ejercicio intenso, infección urinaria e insuficiencia cardiaca descompensada elevan la albuminuria de forma transitoria.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Categorías G y A de KDIGO (calculadora disponible)': [1],
  'Prueba de cronicidad': [1],
  'Riesgo de falla renal (KFRE)': [1, 6],
  'Indicación de los cuatro pilares (calculadora disponible)': [1, 3, 8, 9, 10],
  'Respuesta del filtrado al iniciar el tratamiento (calculadora disponible)': [1],
  'Tratamiento del riesgo cardiovascular (calculadora disponible)': [1]
};

export const escalaCalc = {
  'Categorías G y A de KDIGO (calculadora disponible)': 'estadio-erc',
  'Indicación de los cuatro pilares (calculadora disponible)': 'pilares-erc',
  'Respuesta del filtrado al iniciar el tratamiento (calculadora disponible)': 'respuesta-erc',
  'Tratamiento del riesgo cardiovascular (calculadora disponible)': 'cardio-erc'
};

export const compGroups = [
  { name: 'Reconocer y estadificar', items: ['Definición, cronicidad y las dos categorías', 'Cómo se mide: creatinina, cistatina C y albuminuria'] },
  { name: 'Frenar la progresión', items: ['Los cuatro pilares que frenan la progresión', 'Presión arterial, dieta y estilo de vida', 'Riesgo cardiovascular: estatina, aspirina y anticoagulación'] },
  { name: 'Las complicaciones de la propia enfermedad', items: ['Anemia, acidosis metabólica e hiperpotasemia', 'Trastorno mineral y óseo, y preparación para el reemplazo renal'] }
];

export const complicacionesIntro = 'Las siete fichas siguen el orden en que se usan en la consulta: primero reconocer y situar al paciente en su casilla, después lo que frena la progresión, y al final las complicaciones que la propia enfermedad genera cuando avanza.';

export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];

export const arbol = {
  root: { title: 'FILTRADO BAJO O ALBUMINURIA', color: '#35707a', target: 'definicion' },
  branches: [
    {
      title: 'ESTADIFICAR', sub: 'Las dos categorías, siempre', color: '#35707a', target: 'clasificacion', leaves: [
        { title: 'Probar la cronicidad', sub: '3 meses o no es crónica', color: '#35707a', target: 'diagnostico' },
        { title: 'Casilla G y A', sub: 'El riesgo sale del cruce', color: '#35707a', target: 'clasificacion' },
        { title: 'Nombrar la causa', sub: 'Dos G3a no son iguales', color: '#35707a', target: 'diagnostico' }
      ]
    },
    {
      title: 'FRENAR', sub: 'Los cuatro pilares', color: '#2f6b5f', target: 'complicaciones', leaves: [
        { title: 'Bloqueo del SRA', sub: 'Dosis máxima tolerada', color: '#2f6b5f', target: 'complicaciones' },
        { title: 'Inhibidor del SGLT2', sub: 'Filtrado 20 o más', color: '#2f6b5f', target: 'complicaciones' },
        { title: 'Antagonista mineralocorticoide', sub: 'Si persiste albuminuria', color: '#2f6b5f', target: 'complicaciones' },
        { title: 'Presión y dieta', sub: 'Sistólica menor de 120', color: '#2f6b5f', target: 'complicaciones' }
      ]
    },
    {
      title: 'VIGILAR', sub: 'Lo que la enfermedad genera', color: '#5c4a7a', target: 'seguimiento', leaves: [
        { title: 'Anemia y acidosis', sub: 'Silentes y tratables', color: '#5c4a7a', target: 'complicaciones' },
        { title: 'Potasio', sub: 'Tratarlo, no rendirse', color: '#5c4a7a', target: 'complicaciones' },
        { title: 'Preparar el reemplazo', sub: 'Antes de necesitarlo', color: '#5c4a7a', target: 'complicaciones' }
      ]
    }
  ]
};

export const diagCites = { laboratorio: [1, 7], no_invasivos: [1, 6], imagen: [1, 5] };
export const clasificacionCite = [1, 6];
export const seguimientoCite = [1, 4];
