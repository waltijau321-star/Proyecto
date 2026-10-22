// topics/melanoma/content.js - Modulo 79: Melanoma cutaneo.
// Fuentes: guia de practica clinica de la ESMO (Amaral T, et al. Ann Oncol 2025;36(1):10-30),
// estadificacion AJCC 8 (Gershenwald JE, et al. CA Cancer J Clin 2017;67(6):472-492), guias
// SEOM-GEM (Marquez-Rodas I, et al. Clin Transl Oncol 2024;26(11):2841-2855) y consenso de la
// International Dermoscopy Society sobre lentigo maligna (Forsea AM, et al. JEADV 2026).
// ALCANCE: la morfologia de la lesion (ABCDE, signo del patito feo, diferenciacion clinica con
// basocelular y espinocelular) vive en el tema Exploracion de piel y faneras y NO se repite aqui.
// Este modulo empieza donde esa sospecha ya existe: biopsia, grosor, estadio y tratamiento.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'melanoma',
  titulo: 'Melanoma',
  subtitulo: 'Modulo 79 &middot; Dermatologia',
  accent: '#4a3a2e',
  accentDim: '#6b5546'
};

export const definicionText = `<p style="margin:0 0 14px;">El melanoma es el tumor maligno de los <strong>melanocitos</strong>. Es mucho menos frecuente que los carcinomas queratinociticos y aun asi concentra la mayor parte de la mortalidad por cancer de piel, porque es el unico de los tres que disemina pronto por via linfatica y hematogena. Todo el tema se ordena con una sola medida: el <strong>grosor en milimetros</strong> del tumor medido al microscopio desde la capa granulosa hasta la celula tumoral mas profunda, que es el <strong>indice de Breslow</strong>. De esa cifra salen el margen quirurgico, la indicacion de ganglio centinela, la categoria T, el estudio de extension, el tratamiento adyuvante y el pronostico. Nada mas del tema se entiende sin ella.</p>
<p style="margin:0 0 14px;">De ahi sale la segunda idea, que es puramente practica: la primera biopsia se hace <strong>de una forma concreta porque de ella depende poder medir el Breslow</strong>. La ESMO pide extirpacion <strong>completa, de todo el espesor</strong>, con un margen minimo de piel clinicamente sana. Una biopsia parcial superficial puede dejar fuera justo la parte mas profunda del tumor, y con eso se pierde la medida que gobierna todas las decisiones siguientes: el paciente queda con un diagnostico de melanoma y sin estadio.</p>
<p style="margin:0 0 14px;">La tercera idea es la que ha cambiado en la ultima decada. El melanoma localizado se cura con cirugia y su pronostico es excelente: la supervivencia especifica a 5 a&#241;os del estadio IA es del <strong>99%</strong>. Lo que antes era una enfermedad metastasica sin tratamiento hoy tiene <strong>inmunoterapia</strong> (anti PD-1, anti CTLA-4, anti LAG-3) y <strong>terapia dirigida</strong> (inhibidores de BRAF y de MEK), con medianas de supervivencia que se miden en a&#241;os, y la neoadyuvancia ha entrado en el estadio III resecable. Para el internista eso tiene una consecuencia directa: lo que mas va a ver no es el melanoma, sino la <strong>toxicidad</strong> de estos tratamientos en un paciente que ya los lleva puestos.</p>`;

export const bibliografia = [
  'Amaral T, Ottaviano M, Arance A, et al. Cutaneous melanoma: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol. 2025;36(1):10-30. doi:10.1016/j.annonc.2024.11.006.',
  'Gershenwald JE, Scolyer RA, Hess KR, et al. Melanoma staging: evidence-based changes in the American Joint Committee on Cancer eighth edition cancer staging manual. CA Cancer J Clin. 2017;67(6):472-492. doi:10.3322/caac.21409.',
  'Marquez-Rodas I, Mu&#241;oz Couselo E, Rodriguez Moreno JF, et al. SEOM-GEM clinical guidelines for cutaneous melanoma (2023). Clin Transl Oncol. 2024;26(11):2841-2855. doi:10.1007/s12094-024-03497-2.',
  'Forsea AM, Pampena R, Akay BN, et al. International Dermoscopy Society consensus recommendations for the management of lentigo maligna. J Eur Acad Dermatol Venereol. 2026;40(10):1600-1617. doi:10.1111/jdv.70406.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El melanoma que todavia se cura',
      tituloB: 'Los datos que ya cambian el estadio',
      compensada: 'La inmensa mayoria de los melanomas se diagnostican como enfermedad LOCALIZADA, y ahi el pronostico es excelente. Lo que llega a la consulta es una lesion pigmentada que cambia, sin sintomas, y cuyo unico problema es que alguien la mire: la morfologia que la hace sospechosa (ABCDE, signo del patito feo, dermatoscopia) esta en el tema de Exploracion de piel y faneras. Hay tres presentaciones que conviene tener aparte porque se diagnostican tarde. El melanoma NODULAR crece en vertical casi desde el inicio, de modo que llega grueso aunque sea peque&#241;o y lleve poco tiempo. El LENTIGO MALIGNA aparece como una macula pigmentada que crece despacio durante a&#241;os en la cara de un paciente mayor con da&#241;o solar cronico, y se confunde con un lentigo solar o una queratosis seborreica. Y el LENTIGINOSO ACRAL sale en palmas, plantas y lecho ungueal, donde nadie mira.',
      descompensada: 'Lo que ya hace sospechar que la enfermedad ha salido de la piel: una lesion ULCERADA (la ulceracion sube de categoria a cualquier grosor); NODULOS SATELITE alrededor de la lesion o metastasis EN TRANSITO entre el tumor y la primera estacion ganglionar, que por si solos convierten el caso en estadio III aunque no haya ningun ganglio afectado; un GANGLIO PALPABLE en el territorio de drenaje; y la LDH elevada, que forma parte de la categoria M y es un marcador pronostico adverso independiente. Y los que obligan a pedir imagen del sistema nervioso central: cefalea nueva, crisis, deficit focal o un cambio de conducta en alguien con melanoma conocido, porque el melanoma es uno de los tumores que mas metastatiza al cerebro y la AJCC 8 le dedico una categoria propia (M1d).'
    },
    laboratorio: [
      { prueba: 'LDH serica', utilidad: 'Obligatoria en todo paciente con melanoma metastasico. En la AJCC 8 ya no define por si sola la categoria M1c: se a&#241;ade como descriptor a cualquier subcategoria, con (0) si es normal y (1) si esta elevada. Sigue asociada a la respuesta, a la supervivencia libre de progresion y a la global. Una LDH mayor del doble del limite alto de la normalidad es ademas el subgrupo que en el ensayo EBIN parecio beneficiarse de empezar por terapia dirigida.' },
      { prueba: 'Mutacion de BRAF V600', utilidad: 'OBLIGATORIA en todo paciente con melanoma resecable o no resecable en estadio III o IV. Se debe considerar en el estadio IIB-IIC de alto riesgo y NO se recomienda de forma rutinaria en el estadio I ni en el IIA. Se prefiere analizarla sobre la metastasis antes que sobre el tumor primario. Si no hay tejido disponible, el ADN tumoral circulante es una alternativa.' },
      { prueba: 'Otras mutaciones: NRAS, KIT y NF1', utilidad: 'Opcionales. La ESMO permite ofrecer el estudio de NRAS y de KIT, y recomienda buscar alteraciones de NF1 cuando no hay mutacion de BRAF ni de NRAS. Las mutaciones de KIT son mas frecuentes en el melanoma acral, donde abren la puerta a imatinib o nilotinib, con respuestas reales pero de duracion corta. En el melanoma no resecable se puede ofrecer secuenciacion masiva.' },
      { prueba: 'PD-L1 por inmunohistoquimica', utilidad: 'Se recomienda informarla en TODO melanoma en estadio III no resecable y IV, no porque un PD-L1 negativo excluya la respuesta al anti PD-1, sino por un motivo regulatorio: la combinacion de nivolumab con relatlimab esta aprobada por la agencia europea solo si la expresion tumoral de PD-L1 es menor del 1%.' },
      { prueba: 'Marcadores inmunohistoquimicos del tumor', utilidad: 'Proteina S-100, SOX-10, HMB-45, PRAME y MART-1 son los que usa el patologo para confirmar el origen melanocitico cuando la morfologia no basta. No son analiticas de sangre ni se piden desde la consulta: forman parte del informe.' },
      { prueba: 'Carga mutacional y firmas genomicas', utilidad: 'La carga mutacional tumoral se puede medir y registrar, pero su uso clinico no esta justificado. Lo mismo vale para las firmas pronosticas que combinan paneles de genes con datos clinicopatologicos (AMBLor, DecisionDx-Melanoma, MelaGenix y otras): resultados prometedores, pero la evidencia actual NO apoya usarlas en la practica.' }
    ],
    no_invasivos: [
      { metodo: 'Indice de Breslow (calculadora disponible)', interpretacion: 'Grosor maximo vertical del tumor en milimetros. Es la variable que mas pesa en el pronostico y la que fija el margen quirurgico y la indicacion de centinela. Se mide con un micrometro ocular calibrado y se informa con UN decimal, no con dos: un melanoma de 0,75 mm se registra como 0,8 mm, y eso lo pasa de T1a a T1b. Los microsatelites no se incluyen en la medida.', cutoff: 'Cortes que importan: 0,8 &middot; 1,0 &middot; 2,0 y 4,0 mm' },
      { metodo: 'Informe histopatologico minimo de la ESMO', interpretacion: 'El informe tiene que traer, como minimo: tipo de melanoma, grosor de Breslow en milimetros, presencia de ULCERACION, microsatelites, invasion linfovascular, neurotropismo o invasion perineural, linfocitos infiltrantes del tumor, regresion y si hay tumor en el borde profundo y en el periferico. El indice mitotico tambien debe informarse. Si falta la ulceracion o el Breslow, el informe no permite estadificar.', cutoff: 'Todos los campos, en todos los casos' },
      { metodo: 'Dermatoscopia por un explorador entrenado', interpretacion: 'Aumenta la exactitud diagnostica y la ESMO la recomienda con nivel II y grado A. En el lentigo maligna el consenso de la International Dermoscopy Society describe un enfoque INVERSO: en vez de buscar criterios de melanoma, se buscan seis criterios que indican lesion NO melanocitica; si ninguno de ellos domina la lesion, hay que considerarla sospechosa de lentigo maligna. Ese cambio de logica sube la sensibilidad del 51,5% al 83,6% manteniendo la especificidad alrededor del 85%.', cutoff: 'Sensibilidad 83,6% con el enfoque inverso' },
      { metodo: 'Microscopia confocal de reflectancia', interpretacion: 'Herramienta de segundo nivel para lesiones pigmentadas faciales dudosas y, sobre todo, para delimitar el margen del lentigo maligna antes de operar, que es su problema clasico. En metaanalisis rinde una sensibilidad de 0,93 y una especificidad de 0,89 para lentigo maligna, y en la valoracion de margenes alcanza un valor predictivo negativo del 90%. Limitada por su coste, su curva de aprendizaje y su disponibilidad.', cutoff: 'Sensibilidad 0,93 &middot; especificidad 0,89' },
      { metodo: 'Riesgo de ganglio centinela positivo segun el grosor', interpretacion: 'Es la razon de que el corte de 0,8 mm exista. Las metastasis en el ganglio centinela son muy infrecuentes, menos del 5%, en los melanomas de menos de 0,8 mm, y suben al 5-12% entre 0,8 y 1,0 mm, que es el grupo en el que las guias recomiendan PLANTEAR el centinela. En un estudio clasico con criterios de la sexta edicion el riesgo iba del 2% en el T1a al 53% en el T4b.', cutoff: 'Menos del 5% por debajo de 0,8 mm' },
      { metodo: 'Indice mitotico', interpretacion: 'Mitosis por milimetro cuadrado en la porcion invasiva, contadas por el metodo del punto caliente. Dejo de ser criterio de la categoria T1 en la AJCC 8 porque no resulto significativo en el modelo multivariable del T1, pero el panel de expertos insiste en que se mida e informe SIEMPRE: en analisis univariable, de menos de 1 mitosis a 11 o mas, la supervivencia especifica a 10 a&#241;os cae del 97% al 77%.', cutoff: 'Se informa aunque no estadifique' }
    ],
    imagen: [
      { modalidad: 'Ecografia ganglionar', hallazgos: 'Valoracion de la primera estacion de drenaje. Es ademas la prueba del seguimiento del estadio III: cada tres a seis meses los dos primeros a&#241;os y cada seis meses los tres siguientes, y con mas razon en el paciente con centinela positivo al que no se le ha hecho linfadenectomia.' },
      { modalidad: 'Tomografia computarizada y PET-TC', hallazgos: 'La ESMO las recomienda a partir del estadio IIB, junto con la resonancia cerebral, para asegurar una estadificacion correcta (nivel III, grado B). Tambien son obligatorias ANTES de cualquier tratamiento adicional en el paciente con centinela positivo, para excluir enfermedad a distancia. Por debajo de IIB no aportan y generan hallazgos incidentales.' },
      { modalidad: 'Resonancia magnetica cerebral', hallazgos: 'Parte del estudio de extension desde el estadio IIB. En el paciente con metastasis cerebrales conocidas, el seguimiento estrecho con resonancia es lo que permite a&#241;adir radiocirugia estereotactica cuando esta indicada, en vez de esperar al rescate.' },
      { modalidad: 'Imagen en el seguimiento del estadio IIB-IIIC', hallazgos: 'En un estudio de practica real citado por la SEOM, las recaidas detectadas por vigilancia radiologica en paciente ASINTOMATICO fueron el 45% del total y se asociaron a menor carga tumoral, mejor pronostico, mas respuesta al tratamiento sistemico y mejor supervivencia. Cual es la tecnica optima sigue sin saberse. En los estadios I y IIA la imagen de seguimiento es opcional.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La estadificacion es la <strong>octava edicion de la AJCC</strong> y no hay alternativa: la ESMO la recomienda de forma explicita. Se construye con tres piezas. La <strong>T</strong> sale de dos datos y solo dos: el <strong>grosor de Breslow</strong> y la presencia de <strong>ulceracion</strong>. La <strong>N</strong> cuenta cuantos ganglios estan afectados, si se detectaron a ojo o solo en el microscopio del centinela, y si hay enfermedad locorregional NO ganglionar (microsatelites, satelites o metastasis en transito), que es lo que a&#241;aden las subcategorias "c". La <strong>M</strong> combina el sitio de la metastasis (piel y ganglio a distancia, pulmon, otra viscera, sistema nervioso central) con la <strong>LDH</strong> como descriptor. Un detalle que se pregunta: el <strong>T1b N0 es estadio IB en la clasificacion clinica y estadio IA en la patologica</strong>, porque el patologico solo incluye a quien tiene el centinela negativo.`,
    escalas: [
      { nombre: 'Categoria T de la AJCC 8 (calculadora disponible)', componentes: 'Grosor de Breslow en milimetros y presencia o ausencia de ulceracion. El indice mitotico ya NO forma parte de ella.', formula: 'Tis in situ. T1 hasta 1,0 mm; T2 mas de 1,0 hasta 2,0; T3 mas de 2,0 hasta 4,0; T4 mas de 4,0. El sufijo "a" es sin ulceracion y "b" con ulceracion, salvo en el T1.', interpretacion: 'El T1 es la excepcion y la que mas se falla: T1a es el melanoma de MENOS de 0,8 mm SIN ulceracion, y T1b es todo lo demas dentro del T1, es decir, de 0,8 a 1,0 mm con ulceracion o sin ella, y tambien el de menos de 0,8 mm si esta ulcerado. La supervivencia especifica a 5 y 10 a&#241;os va del 99% y 98% en el T1a N0 al 82% y 75% en el T4b N0.' },
      { nombre: 'Categoria N de la AJCC 8', componentes: 'Numero de ganglios con tumor, forma de deteccion (clinicamente oculto por centinela, o clinicamente detectado), presencia de ganglios adheridos entre si, y presencia de microsatelites, satelites o metastasis en transito.', formula: 'N1 un ganglio o enfermedad no ganglionar sin ganglios; N2 dos o tres ganglios, o uno mas enfermedad no ganglionar; N3 cuatro o mas, ganglios adheridos, o dos o mas mas enfermedad no ganglionar. Sufijo a oculto, b detectado, c con enfermedad no ganglionar.', interpretacion: 'Dos reglas practicas. Cualquier deposito tumoral en un ganglio cuenta, sin umbral de tama&#241;o y sea visto con hematoxilina-eosina o con inmunotincion; si hay celulas en un canal linfatico dentro del ganglio o pegado a el, el ganglio cuenta como afectado. Y los satelites, microsatelites y metastasis en transito se agruparon porque en el analisis no se diferenciaban en supervivencia: dan N1c, N2c o N3c segun haya 0, 1 o 2 o mas ganglios afectados.' },
      { nombre: 'Categoria M de la AJCC 8', componentes: 'Sitio anatomico de la metastasis a distancia y nivel de LDH serica.', formula: 'M1a piel, tejido blando, musculo o ganglio no regional; M1b pulmon; M1c otra viscera que no sea el sistema nervioso central; M1d sistema nervioso central. A cada una se le a&#241;ade (0) si la LDH es normal y (1) si esta elevada.', interpretacion: 'La M1d es nueva de la octava edicion y antes caia dentro de la M1c. Se separo porque el pronostico de la enfermedad del sistema nervioso central es distinto y porque los criterios de inclusion y de estratificacion de los ensayos clinicos giran justamente alrededor de si hay o no metastasis cerebrales. El sitio manda sobre la LDH: un paciente con afectacion cerebral es M1d aunque tenga tambien pulmon o higado.' },
      { nombre: 'Grupos de estadio y supervivencia (calculadora disponible)', componentes: 'Combinacion de T, N y M.', formula: 'Estadios I y II segun la T con N0. Estadio III en cuatro subgrupos (IIIA a IIID) segun la combinacion de T y N. Estadio IV cualquier M1.', interpretacion: 'Supervivencia especifica a 5 y 10 a&#241;os: estadio I 98% y 95%, estadio II 90% y 84%, estadio III 77% y 69%. Dentro del estadio III el rango es enorme: 93% a 5 a&#241;os en el IIIA frente al 32% en el IIID. Y estas cifras SUBIERON respecto a la septima edicion, donde el IIIA era del 78%: el cambio se debe sobre todo al uso generalizado del centinela, que define grupos mas homogeneos, y tiene consecuencias directas sobre a quien se le ofrece adyuvancia.' },
      { nombre: 'Indicacion de centinela y margen por categoria T (calculadora disponible)', componentes: 'Categoria T, es decir grosor y ulceracion, mas algunos datos adicionales del informe.', formula: 'Margen: 0,5 cm en el in situ, 1 cm hasta 2 mm de grosor, 2 cm por encima de 2 mm, siempre a todo el espesor hasta la fascia.', interpretacion: 'Centinela: NO se recomienda de rutina en el pT1a (nivel II, grado E), aunque se puede discutir en casos concretos como tres o mas mitosis por milimetro cuadrado, margen profundo positivo o un Breslow que no se puede medir con fiabilidad (pTx). En el pT1b se DISCUTE con el paciente (nivel III, grado B). Y se recomienda en todo T2a o superior con ganglios clinicamente negativos, es decir por encima de 1,0 mm (nivel I, grado A), a ser posible en el mismo acto que la ampliacion de margenes.' },
      { nombre: 'Respuesta patologica del INMC', componentes: 'Porcentaje de tumor viable residual en la pieza quirurgica despues del tratamiento neoadyuvante, segun los criterios del International Neoadjuvant Melanoma Consortium.', formula: 'Respuesta patologica completa, casi completa, parcial y ausencia de respuesta. La respuesta patologica MAYOR agrupa la completa y la casi completa.', interpretacion: 'Es la escala que ha convertido la neoadyuvancia en una decision y no solo en un orden de los tratamientos. En el ensayo NADINA, los pacientes con respuesta mayor tras dos ciclos de nivolumab con ipilimumab tuvieron una supervivencia libre de recidiva a 18 meses del 93,1%, frente al 80,5% con respuesta parcial y al 55,1% sin respuesta. Por eso a quien logra respuesta mayor se le puede OMITIR la adyuvancia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'La biopsia inicial: aqui se gana o se pierde el estadio',
      color: '#8c3a34',
      definicion: 'Procedimiento diagnostico de la lesion sospechosa. Su objetivo no es solo decir si hay melanoma, sino permitir medir el grosor completo del tumor, que es lo que decide todo lo demas.',
      fisiopatologia: 'El melanoma crece primero en horizontal dentro de la epidermis y despues en vertical hacia la dermis, salvo el subtipo nodular, que invade en vertical casi desde el principio. El grosor de ese componente vertical es la medida pronostica. Una biopsia que no llega al fondo del tumor deja esa medida sin determinar, y el paciente se queda con diagnostico pero sin categoria T.',
      epidemiologia: 'En la serie de Ng citada por el consenso de lentigo maligna, los falsos negativos fueron del 2,7% con biopsia excisional, del 4,5% con rasurado y del 23,3% con punch. Esa diferencia es el argumento entero de este apartado.',
      clinica: 'Toda lesion pigmentada sospechosa por clinica o dermatoscopia. La ESMO a&#241;ade que la lesion sospechosa se biopsia aunque la sospecha sea baja, porque el coste de extirpar una lesion benigna es minimo comparado con el de retrasar un melanoma.',
      criterios_dx: 'Extirpacion COMPLETA de todo el espesor con un margen minimo de piel clinicamente sana, que el consenso de lentigo maligna concreta en 1 a 3 mm y con mas de 1 mm de profundidad para que se pueda medir el Breslow. Si la lesion es tan grande que no se puede extirpar completa sin cirugia reconstructiva, se admite una biopsia parcial (nivel II, grado C).',
      laboratorio: 'Ninguna analitica previa. El estudio molecular se decide despues, con el estadio en la mano.',
      imagen: 'Documentacion fotografica clinica y dermatoscopica antes de biopsiar, con puntos de referencia anatomicos: evita el error de volver a la cicatriz equivocada en el seguimiento.',
      complementarios: 'Despues de la ampliacion de margenes hay que disponer TAMBIEN del informe de esa segunda pieza, porque la caracterizacion patologica completa sale de las dos. Los microsatelites, por ejemplo, se ven con mas frecuencia en la pieza de ampliacion que en la biopsia inicial.',
      dx_diferencial: 'En la cara del paciente mayor: lentigo solar, lentigo simple, queratosis seborreica macular, queratosis actinica pigmentada, queratosis liquenoide y basocelular superficial pigmentado. Y las dos que mas importan: lentigo maligna frente a melanoma sobre lentigo maligna ya invasivo, y melanoma desmoplasico, que tambien sale en piel con da&#241;o solar cronico.',
      tx_medico: 'No aplica: el tratamiento empieza con el informe.',
      seguimiento_hospitalario: 'Correlacion clinico-patologica. El patologo necesita la edad, la localizacion, el tama&#241;o, el diferencial, el tipo de biopsia, los tratamientos previos y las biopsias anteriores; si solo se tomaron biopsias parciales, las fotos clinicas y dermatoscopicas de toda la lesion son obligatorias.',
      pronostico: 'Depende del informe que esta biopsia permita emitir, no de la biopsia misma.',
      algoritmo: ['Fotografiar la lesion con referencias anatomicas', 'Extirpacion completa de todo el espesor con 1 a 3 mm de margen', 'Pedir el informe con los campos minimos de la ESMO', 'Leer el Breslow y la ulceracion: de ahi sale la T', 'Decidir margen de ampliacion y centinela con esa T', 'Guardar el informe de la pieza de ampliacion'],
      figura: 'escalera-breslow'
    },
    {
      nombre: 'Breslow y ulceracion: el informe que decide todo',
      color: '#4a3a2e',
      definicion: 'Las dos unicas variables del tumor primario que construyen la categoria T de la AJCC 8. El grosor en milimetros y el si o el no de la ulceracion.',
      fisiopatologia: 'El grosor mide cuanto ha avanzado el tumor hacia la red linfatica y vascular de la dermis, y por eso predice la diseminacion. La ulceracion indica que el tumor ha destruido la epidermis que lo cubre, y su valor pronostico es independiente del grosor: un melanoma ulcerado se comporta como uno mas grueso, hasta el punto de que sube de subcategoria a cualquier espesor.',
      epidemiologia: 'En el analisis multivariable de 7568 pacientes con melanoma T1 N0, un grosor de 0,8 mm o mas tuvo una razon de riesgo de 1,7 frente a los de menos de 0,8 mm, y la ulceracion una razon de riesgo de 2,6 frente a los no ulcerados. El indice mitotico, con 0,85, no fue significativo: por eso salio de la definicion del T1.',
      factores_riesgo: ['Subtipo nodular, que llega grueso en poco tiempo', 'Localizacion acral o subungueal, de diagnostico tardio', 'Melanoma amelanotico, que no parece un melanoma', 'Retraso en la consulta o en la derivacion', 'Biopsia parcial que no permite medir el grosor real'],
      clinica: 'La ulceracion no es lo que el paciente cuenta como "me sangra al rozarlo": es un hallazgo histologico de perdida completa de la epidermis sobre el tumor, y la decide el patologo.',
      criterios_dx: 'El grosor se informa con UN decimal. La convencion de redondeo importa: de 1 a 4 en las centesimas se redondea hacia abajo y de 5 a 9 hacia arriba, de modo que un melanoma de 0,75 mm se informa como 0,8 mm y pasa de T1a a T1b; entre 0,95 y 1,04 mm se informa como 1,0 mm, que sigue siendo T1b. Los microsatelites no se suman al grosor.',
      laboratorio: 'El panel de la AJCC recomienda recoger ademas el nivel de invasion, los linfocitos infiltrantes del tumor, la invasion linfovascular y el neurotropismo, aunque no entren en la estadificacion: son candidatos a los modelos pronosticos individuales que vienen.',
      dx_diferencial: 'Un Breslow que no se puede determinar con fiabilidad se codifica como pTx, y eso cambia la conducta: es una de las situaciones en las que se discute el centinela aunque la lesion parezca un T1a.',
      pronostico: 'Supervivencia especifica a 5 y 10 a&#241;os por subcategoria T con N0: del 99% y 98% en el T1a al 82% y 75% en el T4b. Todas esas cifras son MEJORES que en la septima edicion (donde el T4b N0 a 10 a&#241;os era del 39%), y no porque el melanoma haya cambiado, sino porque exigir el centinela para poder estadificar como patologico saca de ese grupo a los que en realidad tenian ganglios afectados.',
      algoritmo: ['Leer el grosor en milimetros con un decimal', '&#191;Hay ulceracion? Es el si o el no que mas pesa', 'Asignar T1 a T4 por los cortes de 1, 2 y 4 mm', 'En el T1, aplicar la excepcion del corte de 0,8 mm', 'Comprobar que el informe trae mitosis, margenes y microsatelites', 'Si el Breslow no es medible, codificar pTx y replantear el centinela']
    },
    {
      nombre: 'Cirugia: margenes y ganglio centinela',
      color: '#3d5a73',
      definicion: 'Tratamiento del tumor primario y estadificacion quirurgica de la primera estacion ganglionar. Es lo que cura el melanoma localizado.',
      fisiopatologia: 'El margen de seguridad busca el crecimiento subclinico alrededor de la lesion visible. El ganglio centinela es el primero que recibe el drenaje linfatico del territorio del tumor: si esta libre, la probabilidad de que haya enfermedad en los siguientes es baja, y por eso sirve para estadificar sin vaciar la region.',
      epidemiologia: 'El riesgo de centinela positivo sube con el grosor: menos del 5% por debajo de 0,8 mm, entre el 5 y el 12% de 0,8 a 1,0 mm, y hasta el 53% en el T4b en series antiguas.',
      clinica: 'Antes del centinela hay que explorar todo el cuerpo buscando el componente residual del tumor primario, otras lesiones pigmentadas sospechosas, satelites, metastasis en transito y los ganglios regionales. Esa exploracion esta recomendada con nivel IV y grado A, y es lo que puede cambiar el plan quirurgico entero.',
      criterios_dx: 'Margenes: 0,5 cm para el melanoma in situ, 1 cm hasta 2 mm de grosor y 2 cm por encima de 2 mm, a todo el espesor y con el margen profundo hasta la fascia (nivel III, grado B). Se admiten margenes reducidos o cirugia micrografica para preservar la funcion en melanomas acrales y faciales, incluido el melanoma sobre lentigo maligna.',
      tx_intervencionista: 'La linfadenectomia completa NO se hace tras un centinela positivo (nivel I, grado E), y tampoco se irradia la region ganglionar: no mejora la supervivencia y a&#241;ade morbilidad. Lo que si hay que hacer antes de a&#241;adir tratamiento es una estadificacion detallada con TC, PET-TC y resonancia cerebral para excluir enfermedad a distancia. La linfadenectomia mantiene su papel cuando los ganglios son clinicamente detectables o en casos seleccionados discutidos en comite.',
      tx_medico: 'En el T3b, T4a y T4b que ya van a recibir adyuvancia, la ESMO permite DISCUTIR con el paciente omitir el centinela, siempre poniendo sobre la mesa lo que se pierde: la informacion de estadio (sobre todo en el primario grueso con mutacion de BRAF, que podria pasar a estadio III) y el control locorregional.',
      criterios_uci: 'No aplica en la cirugia del melanoma localizado.',
      seguimiento_hospitalario: 'Herida, seroma y, en la linfadenectomia, linfedema del miembro.',
      seguimiento_ambulatorio: 'Con centinela negativo: seguimiento estandar (nivel III, grado A), y en el estadio IIB-IIC se puede ofrecer anti PD-1 durante 12 meses. Con centinela positivo: seguimiento estandar mas tratamiento sistemico segun el estadio, y ecografia ganglionar periodica porque no se ha vaciado la region.',
      pronostico: 'El centinela no es terapeutico: cambia el estadio, no la supervivencia por si mismo. Su valor esta en seleccionar a quien se beneficia del tratamiento sistemico.',
      algoritmo: ['Explorar todo el cuerpo y los territorios ganglionares', 'Fijar el margen por el grosor: 0,5 / 1 / 2 cm', '&#191;T2a o superior con ganglios negativos? Centinela indicado', '&#191;pT1b? Discutir el centinela con el paciente', '&#191;pT1a? No de rutina, salvo las excepciones del informe', 'Hacer centinela y ampliacion en el mismo acto si se puede', 'Si el centinela es positivo: NO linfadenectomia, NO radioterapia', 'Completar el estudio de extension antes de a&#241;adir tratamiento'],
      figura: 'escalera-breslow'
    },
    {
      nombre: 'Estadio I y II: el melanoma localizado',
      color: '#3f6b52',
      definicion: 'Melanoma sin afectacion ganglionar ni a distancia (N0, M0). Es el grupo mas numeroso y el que se cura con cirugia.',
      epidemiologia: 'Supervivencia especifica a 5 y 10 a&#241;os: estadio I 98% y 95%, estadio II 90% y 84%. Pese a eso, entre el 20 y el 30% de los melanomas diagnosticados en estadio precoz recaen en los primeros cinco a&#241;os.',
      clinica: 'El paciente esta asintomatico. Toda la decision sale del informe de patologia.',
      criterios_dx: 'Agrupacion patologica: IA el T1a y el T1b; IB el T2a; IIA el T2b y el T3a; IIB el T3b y el T4a; IIC el T4b. En la agrupacion CLINICA, el T1b es IB, no IA.',
      imagen: 'Desde el estadio IIB: ecografia, TC o PET-TC y resonancia cerebral. En el I y el IIA, la imagen de seguimiento es opcional.',
      tx_medico: 'Cirugia con el margen que corresponda, y nada mas en los estadios I y IIA. La participacion en un ensayo clinico es la opcion preferida cuando existe (nivel V, grado A).',
      tx_farmacologico: 'El cambio reciente esta en el IIB-IIC: pembrolizumab o nivolumab durante 12 meses deben CONSIDERARSE tras la reseccion completa (nivel I, grado A). En KEYNOTE-716 la supervivencia libre de recidiva a 36 meses fue del 76,2% con pembrolizumab frente al 63,4% con placebo, y la libre de metastasis a distancia del 84,4% frente al 74,7%. En CheckMate 76K nivolumab dio una razon de riesgo de 0,53 para la recidiva. Lo que NO hay todavia en ninguno de los dos es dato maduro de supervivencia global, y eso es exactamente lo que hay que poner sobre la mesa en la conversacion.',
      tx_intervencionista: 'La radioterapia definitiva del primario solo se plantea cuando la cirugia no es posible por comorbilidad grave, por morbilidad inaceptable o porque el paciente la rechaza. La radioterapia adyuvante no se recomienda de rutina (nivel III, grado D), con dos excepciones: margen inadecuado en el lentigo maligna (nivel III, grado B) y melanoma desmoplasico o neurotropico en el que no se consiguen 8 mm de margen patologico (nivel IV, grado C).',
      seguimiento_ambulatorio: 'No hay consenso sobre el calendario optimo ni sobre la utilidad de la imagen y la analitica; la ESMO remite a las guias nacionales y pide individualizar por estadio, riesgo y necesidades del paciente (nivel IV, grado B). Lo que si esta recomendado: exploracion de TODA la piel, preferentemente por dermatologo, para detectar la recidiva y los segundos melanomas (nivel III, grado B).',
      pronostico: 'Excelente en el estadio I. El salto esta en el IIB-IIC, cuyo riesgo de recaida justifica que se discuta adyuvancia en un paciente que no tiene ganglios afectados.',
      algoritmo: ['Confirmar N0 y M0 con la exploracion y, desde IIB, con imagen', 'Asignar el grupo de estadio con la T patologica', '&#191;IA, IB o IIA? Cirugia y seguimiento', '&#191;IIB o IIC? Plantear anti PD-1 12 meses y explicar que falta la supervivencia global', 'Educacion en fotoproteccion y autoexploracion de por vida', 'Avisar de que los familiares tienen mas riesgo']
    },
    {
      nombre: 'Estadio III: ganglios, en transito y neoadyuvancia',
      color: '#8a5a2e',
      definicion: 'Enfermedad locorregional: ganglios afectados, o metastasis en transito, satelites o microsatelites, sin enfermedad a distancia.',
      epidemiologia: 'La heterogeneidad del estadio III es su rasgo central: la supervivencia especifica a 5 a&#241;os va del 93% en el IIIA al 32% en el IIID.',
      clinica: 'Desde el centinela positivo sin nada palpable hasta el conglomerado ganglionar adherido o las metastasis en transito sembradas en un miembro.',
      criterios_dx: 'Los cuatro subgrupos (IIIA a IIID) se construyen combinando T y N, no la N sola: esa fue la decision de la octava edicion, y por eso un mismo N puede caer en estadios distintos segun el grosor y la ulceracion del primario.',
      tx_medico: 'Un punto que se escapa facil: el estadio IIIA de la AJCC 8 NO es el de la septima. Los ensayos de adyuvancia reclutaron con criterios de la septima edicion, y en el IIIA de la octava con menos de 1 mm de carga tumoral en el centinela la adyuvancia NO debe considerarse tratamiento estandar (nivel I, grado D), porque ese grupo no estuvo representado y su supervivencia es del 93% a 5 a&#241;os.',
      tx_farmacologico: 'Adyuvancia en el estadio III resecado: anti PD-1 (pembrolizumab en el estadio III, nivolumab en el IIIB-IV sin enfermedad) o dabrafenib con trametinib si hay mutacion BRAF V600E (nivel I, grado A). Debe empezar en las 12 semanas siguientes a la reseccion completa. En cambio, la terapia dirigida NO debe ofrecerse en el V600K por el posible efecto perjudicial sobre la supervivencia global visto en COMBI-AD (nivel II, grado D). Y la combinacion de nivolumab con ipilimumab no se recomienda como adyuvancia del estadio III (nivel I, grado D).',
      tx_intervencionista: 'En el estadio III resecable con ganglio clinica o radiologicamente detectable, lo que se ofrece ahora es NEOADYUVANCIA: nivolumab con ipilimumab dos ciclos y despues cirugia. En NADINA la supervivencia libre de eventos a 18 meses fue del 80,8% frente al 53,9% de la adyuvancia con nivolumab, y la libre de metastasis a distancia del 85,7% frente al 62,4%. A quien logra respuesta patologica mayor se le puede OMITIR la adyuvancia. Ni esta pauta ni el pembrolizumab neoadyuvante estan aprobados todavia por la agencia europea ni por la estadounidense, aunque se reembolsan en algunos paises.',
      complementarios: 'Metastasis en transito: si son resecables, extirpacion con margenes libres (nivel IV, grado B), y tambien se pueden valorar para nivolumab con ipilimumab neoadyuvante. Si no son resecables, o si el intervalo libre de enfermedad es menor de 6 meses, tratamiento sistemico. Como terapia local existen el talimogene laherparepvec, la perfusion o infusion aislada de miembro, la radioterapia, la electroquimioterapia y la exeresis paliativa limitada, pero ninguna de ellas mejora la supervivencia global.',
      seguimiento_ambulatorio: 'Ecografia ganglionar cada tres a seis meses los dos primeros a&#241;os y cada seis meses los tres siguientes, con especial atencion al paciente con centinela positivo no vaciado.',
      pronostico: 'Depende del subgrupo y, cada vez mas, de la respuesta patologica al tratamiento neoadyuvante, que se ha convertido en el mejor marcador pronostico disponible en este escenario.',
      algoritmo: ['Confirmar que no hay enfermedad a distancia con TC, PET-TC y resonancia cerebral', 'Asignar el subgrupo IIIA a IIID combinando T y N', '&#191;Ganglio clinica o radiologicamente detectable y resecable? Valorar neoadyuvancia', 'Determinar BRAF: es obligatorio en el estadio III', '&#191;IIIA con menos de 1 mm en el centinela? No dar adyuvancia de rutina', 'Elegir adyuvancia: anti PD-1, o dabrafenib-trametinib si V600E', 'Empezar en las 12 semanas siguientes a la cirugia']
    },
    {
      nombre: 'Estadio IV: enfermedad avanzada',
      color: '#7a3a6b',
      definicion: 'Melanoma con metastasis a distancia. Es el escenario que mas ha cambiado y donde la secuencia de los tratamientos importa tanto como los tratamientos mismos.',
      epidemiologia: 'A 10 a&#241;os de seguimiento en CheckMate 067, la mediana de supervivencia global fue de 71,9 meses con nivolumab mas ipilimumab, de 36,9 con nivolumab solo y de 19,9 con ipilimumab solo. La mediana de supervivencia especifica de melanoma no se alcanzo en el brazo de la combinacion. Esas cifras, en una enfermedad que hace quince a&#241;os se media en meses, son la razon de que este tema se estudie de otra manera.',
      clinica: 'Lo que decide el tratamiento no es tanto el numero de lesiones como el ritmo: si la enfermedad es agresiva y sintomatica y hace falta una respuesta RAPIDA, la combinacion de inmunoterapia no es la mejor opcion de salida porque tarda.',
      criterios_dx: 'Obligatorio determinar BRAF V600 sobre la metastasis, preferentemente, o sobre el primario (nivel IV, grado A). Si no hay tejido, ADN tumoral circulante (nivel III, grado C). PD-L1 informado en todos. LDH en todos.',
      tx_farmacologico: 'Primera linea: nivolumab con ipilimumab es la opcion PREFERIDA para todos, con mutacion de BRAF o sin ella, siempre que se pueda administrar con seguridad los primeros meses (nivel I, grado A). Nivolumab o pembrolizumab en monoterapia tambien estan recomendados. Nivolumab con relatlimab se puede ofrecer, pero la aprobacion europea se limita a PD-L1 menor del 1%. Si la inmunoterapia no esta disponible o el paciente no es candidato, en el melanoma con mutacion BRAF se usa un inhibidor de BRAF con uno de MEK: dabrafenib-trametinib, vemurafenib-cobimetinib o encorafenib-binimetinib.',
      tx_medico: 'La secuencia tiene respuesta de ensayo. En DREAMSEQ, empezar por nivolumab con ipilimumab y reservar dabrafenib-trametinib dio una supervivencia global a 2 a&#241;os del 71,8% frente al 51,5% de la secuencia inversa. La razon es brutal y vale recordarla: la mitad de los que progresaron no llegaron a recibir la segunda linea porque fallecieron en los 6 meses siguientes, muchos por metastasis cerebrales. Por eso la terapia dirigida se reserva para lineas posteriores, con una excepcion: induccion con inhibidor de BRAF y de MEK durante 8 a 12 semanas seguida de inmunoterapia en pacientes con LDH alta o metastasis hepaticas (nivel II, grado C).',
      tx_intervencionista: 'Algunos pacientes en estadio IV tienen enfermedad resecable: metastasectomia o terapia ablativa local seguidas de anti PD-1 adyuvante (nivel III, grado B). En la enfermedad oligometastasica, incluso resecable, la ESMO sugiere discutir empezar por tratamiento sistemico en vez de por la ablacion. Para la enfermedad extracraneal sintomatica caben la reseccion paliativa, la radioterapia y el talimogene laherparepvec.',
      complementarios: 'Segunda linea y siguientes: lo primero es el ensayo clinico. Despues, ipilimumab con o sin nivolumab si la primera linea fue anti PD-1 en monoterapia; terapia celular con linfocitos infiltrantes de tumor en pacientes seleccionados (jovenes, M1a-c, buen estado general, LDH menor del doble del limite alto y una a tres lineas previas), que es muy toxica y se hace en centros de referencia; y quimioterapia solo cuando no queda nada mas, sin beneficio en supervivencia.',
      seguimiento_ambulatorio: 'Los biomarcadores siguen siendo los de siempre: LDH, S-100 y ADN tumoral circulante, ninguno validado para uso rutinario, de modo que la analitica de seguimiento es opcional.',
      pronostico: 'La duracion de la respuesta es lo que mas ha cambiado: en CheckMate 067 la mediana de duracion de respuesta con la combinacion superaba los 120 meses y no se habia alcanzado a los 10 a&#241;os.',
      algoritmo: ['Determinar BRAF, PD-L1 y LDH', 'Valorar si la enfermedad es resecable u oligometastasica', 'Ofrecer ensayo clinico siempre que exista', '&#191;Se puede administrar inmunoterapia con seguridad y no urge respuesta? Nivolumab con ipilimumab', '&#191;Enfermedad agresiva con LDH alta o metastasis hepaticas y mutacion de BRAF? Valorar induccion dirigida 8-12 semanas', '&#191;Contraindicacion para inmunoterapia? Inhibidor de BRAF con inhibidor de MEK si hay mutacion', 'Reservar la terapia dirigida para lineas posteriores si se empezo con inmunoterapia']
    },
    {
      nombre: 'Metastasis cerebrales',
      color: '#5a4a8c',
      definicion: 'Afectacion del cerebro, la medula, las leptomeninges o cualquier otro componente del sistema nervioso central. Es la categoria M1d de la AJCC 8.',
      fisiopatologia: 'El melanoma es uno de los tumores con mayor tropismo por el sistema nervioso central, y la barrera hematoencefalica explica que la respuesta intracraneal a la terapia dirigida sea mas corta que la extracraneal: en COMBI-MB la mediana de supervivencia libre de progresion fue de 5,6 meses en las metastasis cerebrales frente a 10,1 meses con el mismo tratamiento en enfermedad extracraneal.',
      epidemiologia: 'Frecuentes al diagnostico o durante la evolucion. En DREAMSEQ fueron la causa principal de que muchos pacientes no llegaran a recibir una segunda linea.',
      clinica: 'Cefalea nueva, crisis, deficit focal, cambio de conducta. La variable que organiza el tratamiento no es el numero de lesiones sino DOS cosas: si el paciente esta sintomatico y cuanta dexametasona o prednisona necesita.',
      criterios_dx: 'Resonancia magnetica cerebral, que forma parte del estudio de extension desde el estadio IIB y del seguimiento estrecho en quien ya tiene afectacion del sistema nervioso central.',
      tx_medico: 'Tres escenarios. ASINTOMATICO: nivolumab con ipilimumab de entrada (nivel II, grado A); si no es candidato a inmunoterapia y hay mutacion BRAF V600, inhibidor de BRAF con inhibidor de MEK. SINTOMATICO con menos de 10 mg al dia de prednisolona o equivalente: inhibidor de BRAF y de MEK si hay mutacion, o nivolumab con ipilimumab, y discutir neurocirugia si hay una lesion accesible cuya reseccion deje al paciente asintomatico y permita pasar despues a la inmunoterapia. SINTOMATICO con MAS de 10 mg al dia y sin opcion de tratamiento local: ensayo clinico, terapia dirigida si hay mutacion, nivolumab con ipilimumab, o quimioterapia si no hay mutacion.',
      tx_intervencionista: 'Todo paciente con metastasis cerebrales debe valorarse para RADIOCIRUGIA ESTEREOTACTICA (nivel III, grado B), y es preferible darla pronto y de forma concurrente que como rescate tardio. Como se puede repetir en varias sesiones a lo largo de la enfermedad, el seguimiento con resonancia permite a&#241;adirla cuando se indique. La irradiacion holocraneal se DESACONSEJA en las lesiones no candidatas a radiocirugia y en la enfermedad leptomeningea. Conviene suspender la terapia dirigida durante la irradiacion holocraneal, aunque no parece necesario durante la radiocirugia.',
      complementarios: 'Enfermedad leptomeningea: los mismos tratamientos, mas radioterapia (nivel III, grado B) o nivolumab intratecal (nivel III, grado C). En todos los casos hay que activar cuidados paliativos y de soporte (nivel V, grado A).',
      pronostico: 'Historicamente malo, y es la razon de que la M1d se separara. La inmunoterapia combinada ha dado respuestas intracraneales del 51 al 54% en pacientes asintomaticos, pero su eficacia es limitada en el paciente sintomatico o que recibe corticoides, y ese contraste es la idea central de esta ficha.',
      algoritmo: ['Resonancia cerebral ante cualquier sintoma neurologico nuevo', 'Valorar radiocirugia estereotactica en todos', '&#191;Asintomatico? Nivolumab con ipilimumab de entrada', '&#191;Sintomatico con menos de 10 mg de prednisolona? Dirigida si hay mutacion, o combinacion, y valorar neurocirugia', '&#191;Sintomatico con mas de 10 mg? Ensayo clinico, dirigida si hay mutacion', 'No irradiacion holocraneal si no es candidato a radiocirugia', 'Activar cuidados paliativos en paralelo']
    },
    {
      nombre: 'La toxicidad que llega a medicina interna',
      color: '#8c3a34',
      definicion: 'Efectos adversos de la inmunoterapia y de la terapia dirigida. Es, en la practica, la forma mas frecuente en que un internista se encuentra con un paciente con melanoma.',
      epidemiologia: 'En CheckMate 067 hubo efectos adversos de grado 3-4 en el 55,0% de los tratados con nivolumab mas ipilimumab, en el 16,3% de los que recibieron nivolumab solo y en el 27,3% de los de ipilimumab solo. En el adyuvante, nivolumab tuvo menos grado 3-4 que ipilimumab a dosis altas (14,4% frente a 45,9%). Con nivolumab mas relatlimab, el 18,9% frente al 9,7% de nivolumab.',
      clinica: 'El perfil depende del farmaco. La inmunoterapia da toxicidad INMUNITARIA, que puede afectar a cualquier organo y aparecer tarde. La terapia dirigida tiene un perfil distinto: el inhibidor de BRAF en monoterapia da mas efectos cutaneos y mas carcinomas espinocelulares, y a&#241;adir el inhibidor de MEK los reduce, pero suma toxicidad propia muscular, cardiaca y ocular.',
      factores_riesgo: ['Antecedente personal o familiar de enfermedad autoinmune', 'Edad avanzada y comorbilidad', 'Mal estado funcional', 'Pauta de ipilimumab a dosis alta o prolongada', 'Combinacion de inmunoterapia frente a monoterapia'],
      criterios_dx: 'La propia ESMO convierte estos factores en parte de la decision: antes de ofrecer adyuvancia en el estadio IIB-IIC hay que valorar la edad, la comorbilidad, el estado funcional, el potencial reproductivo, el antecedente personal o familiar de enfermedad autoinmune y la capacidad del paciente para cumplir el seguimiento si aparece toxicidad inmunitaria. No es una advertencia generica: es un criterio de seleccion.',
      tx_medico: 'Existe una pauta alternativa de nivolumab 3 mg/kg con ipilimumab 1 mg/kg con menos toxicidad que la de CheckMate 067, util cuando la toxicidad preocupa; el ensayo que la estudio estaba dise&#241;ado para seguridad y no para eficacia, de modo que no se puede recomendar su uso general. Y si hay que suspender nivolumab con relatlimab por toxicidad, se puede discutir continuar con anti PD-1 en monoterapia. El manejo detallado de cada toxicidad inmunitaria por organo no es objeto de estas guias de melanoma y se consulta en las guias especificas de toxicidad.',
      complementarios: 'Una consecuencia practica para el internista: la dosis de corticoide que lleva el paciente con metastasis cerebrales (por encima o por debajo de 10 mg de prednisolona al dia) condiciona que se pueda usar inmunoterapia combinada. El corticoide no es un detalle del tratamiento sintomatico: entra en la decision oncologica.',
      dx_diferencial: 'Ante un sintoma nuevo en un paciente en inmunoterapia, la toxicidad inmunitaria compite con la progresion tumoral y con la infeccion, y las tres se tratan de forma opuesta. De ahi que la primera pregunta ante cualquier ingreso sea que farmaco lleva, desde cuando y cual fue la ultima dosis.',
      seguimiento_ambulatorio: 'El seguimiento debe ser MULTIDISCIPLINAR, con oncologia, dermatologia y las especialidades que necesite cada paciente segun el tratamiento recibido (nivel V, grado A).',
      pronostico: 'La toxicidad de grado 3-4 es frecuente pero en general manejable, y en el adyuvante es el argumento central de la conversacion: se ofrece un beneficio en recidiva sin dato maduro de supervivencia global, a cambio de un riesgo real de toxicidad en una persona que hoy esta libre de enfermedad.',
      algoritmo: ['Preguntar que farmaco lleva, desde cuando y la ultima dosis', 'Separar toxicidad inmunitaria de progresion y de infeccion', 'Revisar que dosis de corticoide recibe y por que', 'Valorar el antecedente de enfermedad autoinmune antes de cualquier indicacion nueva', 'Consultar con el oncologo responsable antes de suspender o reintroducir', 'Registrar el episodio: condiciona las lineas siguientes']
    },
    {
      nombre: 'Lentigo maligna y otras localizaciones especiales',
      color: '#6b7a3a',
      definicion: 'Formas de melanoma cuyo manejo se aparta de la regla general: el lentigo maligna, el acral y subungueal, el desmoplasico y el melanoma de primario desconocido.',
      fisiopatologia: 'El lentigo maligna es un melanoma IN SITU que aparece sobre piel con da&#241;o solar cronico, casi siempre en cabeza y cuello del paciente mayor. La Organizacion Mundial de la Salud lo clasifica en la via patogenica 2, la del da&#241;o solar acumulado, con alta carga mutacional y firma de radiacion ultravioleta. Sus mutaciones de BRAF son menos frecuentes que en otros melanomas y a menudo NO son la V600E clasica, mientras que las de NRAS en Q61 son frecuentes.',
      epidemiologia: 'La incidencia del lentigo maligna es la que mas ha crecido entre los melanomas, con un pico entre los 65 y los 80 a&#241;os y predominio femenino (1,7 a 1). En algunas zonas ya supera al extensivo superficial como melanoma in situ mas frecuente, hasta el 75% de los casos, mientras que el melanoma invasivo sobre lentigo maligna sigue siendo del 4 al 15% de los invasivos. La progresion a forma invasiva es lenta e impredecible: un estudio australiano prospectivo encontro una tasa anual del 3,5% con un tiempo medio a la progresion de 28,3 a&#241;os.',
      factores_riesgo: ['Exposicion solar acumulada a lo largo de la vida', 'Piel clara con pecas y da&#241;o actinico', 'Cancer cutaneo no melanoma previo', 'Edad avanzada', 'Residencia en zonas de radiacion ultravioleta intensa'],
      clinica: 'Macula o placa solitaria de crecimiento lento, bordes irregulares y pigmentacion variable del marron claro al negro, con variantes amelanoticas en personas de piel muy clara. Mas de tres cuartas partes estan en cabeza y cuello; la mejilla es la localizacion mas frecuente, y las lesiones del cuero cabelludo y de la nariz son el doble de frecuentes en varones.',
      criterios_dx: 'La histopatologia sigue siendo el patron de referencia, con inmunohistoquimica (Melan-A/MART-1, MITF, PRAME, SOX-10) recomendada para confirmar y para controlar margenes. En el lentigo maligna se aceptan biopsias PARCIALES en zonas comprometidas o si se va a usar tratamiento topico: tres o cuatro punch dirigidos por dermatoscopia o confocal bajan el riesgo probabilistico de falso negativo al 1,2% y al 0,4%.',
      tx_medico: 'La cirugia sigue siendo la primera opcion, pero el consenso NO puede recomendar un margen de seguridad definitivo para la cirugia estandar, y prefiere las tecnicas con control de margen en lesiones grandes o mal definidas: la recidiva local del melanoma in situ de cabeza y cuello fue del 3,3% con exeresis amplia convencional, del 1,3% con exeresis por etapas y del 0,7% con cirugia de Mohs. Con margenes convencionales de 5 mm, un metaanalisis encontro un 17% de extirpaciones incompletas.',
      tx_farmacologico: 'El imiquimod al 5% es la alternativa estudiada, como tratamiento primario, adyuvante o neoadyuvante, con una pauta de al menos 60 aplicaciones a lo largo de unas 12 semanas. En el ensayo aleatorizado frente a radioterapia, la recidiva fue del 10,5% a 27 meses con imiquimod frente al 24% con radioterapia. Como adyuvante tras cirugia con margen estrecho o positivo, el aclaramiento clinico comunicado llega al 93-94%.',
      tx_intervencionista: 'La radioterapia es opcion en lesiones grandes, cuando la cirugia dejaria un defecto funcional o estetico inaceptable, y como adyuvante si el margen es positivo y no se puede reoperar. Lo que NO se recomienda es la crioterapia ni el laser: no permiten confirmar el aclaramiento histologico y la revision sistematica del laser comunico un 34,4% de recidivas.',
      complementarios: 'En el paciente muy mayor, fragil o con comorbilidad que impide la cirugia y los tratamientos topicos prolongados, la VIGILANCIA ACTIVA es una opcion legitima para lesiones peque&#241;as en localizaciones no criticas, con control clinico y dermatoscopico estrecho. Otras localizaciones especiales: en el melanoma ACRAL las mutaciones de KIT son mas frecuentes y abren la opcion de imatinib o nilotinib; el melanoma DESMOPLASICO o neurotropico es la indicacion de radioterapia adyuvante cuando no se alcanzan 8 mm de margen; y el melanoma de PRIMARIO DESCONOCIDO se estadifica por el numero de ganglios afectados y la presencia de enfermedad no ganglionar, igual que si el primario se conociera.',
      dx_diferencial: 'Lentigo solar, lentigo simple, lentigo en mancha de tinta, queratosis seborreica macular, queratosis actinica pigmentada, queratosis liquenoide y basocelular superficial pigmentado. Ojo con la hiperplasia melanocitica inducida por ultravioleta, que imita al lentigo maligna en la histologia.',
      seguimiento_ambulatorio: 'El lentigo maligna recidiva mas que otros melanomas in situ, con tasas de hasta el 40% segun la tecnica y el margen, y la mitad de las recidivas ocurre mas de 4 a&#241;os despues: la mediana de latencia es de unos 3,8 a&#241;os y puede llegar a 10. Eso obliga a un seguimiento prolongado con exploracion clinica y dermatoscopica de la cicatriz y de la piel vecina, confocal si se dispone, y revision de toda la superficie corporal. Hasta el 95% de las recidivas puede no tener los criterios dermatoscopicos clasicos.',
      pronostico: 'Como melanoma in situ, raramente mortal: la supervivencia especifica a 15 a&#241;os en una serie de 137 872 pacientes con melanoma in situ, en su mayoria lentigo maligna, fue del 98,4%. La mortalidad sube con la edad y el riesgo principal es el segundo primario.',
      algoritmo: ['Dermatoscopia con el enfoque inverso en la macula facial del paciente mayor', 'Si no hay criterios de lesion no melanocitica, considerarla sospechosa', 'Confocal o lampara de Wood para delimitar antes de operar', 'Biopsia: excisional si se puede, varios punch dirigidos si no', 'Cirugia con control de margen en lesiones grandes o mal definidas', 'Imiquimod o radioterapia si la cirugia no es viable o se rechaza', 'Vigilancia activa en el paciente fragil con lesion peque&#241;a', 'Seguimiento prolongado: la mitad de las recidivas pasa de los 4 a&#241;os']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El internista se cruza con el melanoma de cuatro formas, y solo una de ellas es el diagnostico: una lesion pigmentada que ve de pasada en un paciente ingresado por otra cosa; un paciente con melanoma conocido que ingresa por un sintoma nuevo que puede ser progresion, infeccion o toxicidad del tratamiento; una clinica neurologica nueva en alguien con melanoma previo; y el seguimiento a largo plazo del superviviente, que incluye vigilar el segundo primario.',
    parametros: [
      'Si vas a biopsiar una lesion pigmentada, hazlo COMPLETA y a todo el espesor con 1 a 3 mm de margen. Una biopsia parcial superficial puede costar el Breslow, y sin Breslow no hay estadio.',
      'Fotografia la lesion con referencias anatomicas ANTES de tocarla: es lo que permite volver al sitio correcto meses despues.',
      'Macula pigmentada que crece despacio en la cara de un paciente mayor con da&#241;o solar: piensa en lentigo maligna, no en un lentigo solar, y derivala.',
      'Mira las palmas, las plantas y las u&#241;as. El melanoma acral se diagnostica tarde porque esas zonas no se exploran.',
      'En el paciente que ya lleva inmunoterapia, ante cualquier sintoma nuevo pregunta primero que farmaco lleva, desde cuando y cual fue la ultima dosis: toxicidad inmunitaria, progresion e infeccion se tratan de forma opuesta.',
      'Revisa la dosis de corticoide del paciente con metastasis cerebrales: por encima de 10 mg de prednisolona al dia condiciona que se pueda usar inmunoterapia combinada.',
      'Cefalea nueva, crisis o deficit focal en alguien con melanoma: resonancia cerebral, no TC sin contraste y a casa.',
      'Un melanoma ya tratado no cierra el caso: entre el 20 y el 30% de los diagnosticados en estadio precoz recae en 5 a&#241;os, y el superviviente tiene mas riesgo de un segundo melanoma.'
    ],
    criterios_uci_general: 'No por el melanoma en si. Las razones reales son la toxicidad grave de la inmunoterapia (colitis, neumonitis, miocarditis, hepatitis o crisis suprarrenal) y las complicaciones neurologicas de la enfermedad del sistema nervioso central, como las crisis o la hipertension intracraneal.',
    criterios_tips_general: 'La radiocirugia estereotactica se valora en TODO paciente con metastasis cerebrales, y es preferible pronto y concurrente que como rescate. La irradiacion holocraneal se desaconseja en las lesiones no candidatas a radiocirugia y en la enfermedad leptomeningea.',
    criterios_trasplante_general: 'No aplica. Al contrario: el antecedente de melanoma condiciona la inmunosupresion y el melanoma es uno de los tumores que recidivan en el receptor de trasplante.',
    prevencion: 'Evitar la quemadura solar y cualquier exposicion solar o artificial sin proteccion, de por vida (nivel III, grado A). Autoexploracion regular de la piel y de los ganglios perifericos. Y una cosa que se olvida y la ESMO recomienda de forma explicita: hay que informar al paciente de que sus FAMILIARES tienen mas riesgo de melanoma (nivel III, grado B). En el superviviente, exploracion periodica de toda la piel, preferentemente por dermatologo, buscando recidiva y segundos tumores cutaneos.'
  }
};

export const compCites = {
  'La biopsia inicial: aqui se gana o se pierde el estadio': { definicion: [1], criterios_dx: [1, 4], epidemiologia: [4], complementarios: [1], seguimiento_hospitalario: [4], dx_diferencial: [4] },
  'Breslow y ulceracion: el informe que decide todo': { definicion: [2], epidemiologia: [2], criterios_dx: [2], laboratorio: [2], pronostico: [2], dx_diferencial: [1] },
  'Cirugia: margenes y ganglio centinela': { criterios_dx: [1], epidemiologia: [2], clinica: [1], tx_intervencionista: [1, 3], tx_medico: [1], seguimiento_ambulatorio: [1] },
  'Estadio I y II: el melanoma localizado': { epidemiologia: [2, 3], criterios_dx: [2], imagen: [1, 3], tx_farmacologico: [1], tx_intervencionista: [1], seguimiento_ambulatorio: [1] },
  'Estadio III: ganglios, en transito y neoadyuvancia': { epidemiologia: [2], criterios_dx: [2], tx_medico: [1, 2], tx_farmacologico: [1], tx_intervencionista: [1], complementarios: [1], seguimiento_ambulatorio: [3] },
  'Estadio IV: enfermedad avanzada': { epidemiologia: [1], criterios_dx: [1], tx_farmacologico: [1, 3], tx_medico: [1, 3], tx_intervencionista: [1], complementarios: [1, 3], pronostico: [1] },
  'Metastasis cerebrales': { definicion: [2], fisiopatologia: [3], tx_medico: [1], tx_intervencionista: [1, 3], complementarios: [1], pronostico: [1, 3] },
  'La toxicidad que llega a medicina interna': { epidemiologia: [1], clinica: [1], criterios_dx: [1], tx_medico: [1], seguimiento_ambulatorio: [1] },
  'Lentigo maligna y otras localizaciones especiales': { definicion: [4], fisiopatologia: [4], epidemiologia: [4], criterios_dx: [4], tx_medico: [4], tx_farmacologico: [4], tx_intervencionista: [1, 4], complementarios: [3, 4], seguimiento_ambulatorio: [4], pronostico: [4] }
};

export const estigmasTitulo = 'Hallazgos de la exploracion que cambian el estadio';
export const estigmas = [
  { nombre: 'Ulceracion', descripcion: 'Perdida completa de la epidermis sobre el tumor, confirmada por el patologo. Sube de subcategoria a CUALQUIER grosor, y en el T1 convierte en T1b un melanoma de menos de 0,8 mm que por grosor seria T1a.' },
  { nombre: 'Nodulos satelite y microsatelites', descripcion: 'Metastasis cutaneas o subcutaneas adyacentes al primario; los satelites son visibles y a menos de 2 cm, los microsatelites solo se ven al microscopio. En la octava edicion no tienen umbral de tama&#241;o ni de distancia. Por si solos dan N1c y llevan el caso a estadio III.' },
  { nombre: 'Metastasis en transito', descripcion: 'Lesiones cutaneas o subcutaneas a mas de 2 cm del primario, en el trayecto hacia la primera estacion ganglionar. Se agruparon con los satelites porque en el analisis no se diferenciaban en supervivencia.' },
  { nombre: 'Ganglio clinicamente detectado frente a oculto', descripcion: 'El ganglio palpable o visto en imagen (antes llamado macroscopico) tiene peor pronostico que el detectado solo en el microscopio del centinela (antes microscopico). Esa distincion es la que separa las subcategorias "a" de las "b" de la N.' },
  { nombre: 'Ganglios adheridos entre si', descripcion: 'Dos o mas ganglios pegados por el propio tumor, identificados al examinar la pieza en el laboratorio. Es criterio de N3. La extension extranodal, en cambio, dejo de ser criterio de la N aunque se recomienda registrarla.' },
  { nombre: 'Componente residual del primario', descripcion: 'Hay que buscarlo de forma activa en la exploracion de todo el cuerpo: lo que queda de la lesion original despues de una biopsia parcial o de una regresion puede cambiar el plan quirurgico.' }
];

export const biopsiaTitulo = 'Biopsia de la lesion pigmentada: como y por que asi';
export const biopsia = {
  indicaciones: [
    'Toda lesion pigmentada sospechosa por clinica o dermatoscopia',
    'Macula pigmentada de crecimiento lento en cara de paciente mayor con da&#241;o solar cronico',
    'Lesion nueva o cambiante en palma, planta o lecho ungueal',
    'Cualquier lesion que el propio paciente describe como distinta de sus otros nevos',
    'Lesion amelanotica que no encaja con nada y no cura'
  ],
  ventajas: [
    'La extirpacion completa a todo el espesor es la unica que permite medir el Breslow con fiabilidad',
    'El informe da de golpe las dos variables de la categoria T: grosor y ulceracion',
    'Permite buscar microsatelites, invasion linfovascular y neurotropismo, que cambian la conducta',
    'Los falsos negativos son del 2,7% con biopsia excisional frente al 23,3% con punch'
  ],
  limitaciones: [
    'Una biopsia parcial superficial puede dejar fuera la parte mas profunda y perder el Breslow',
    'Los microsatelites aparecen con mas frecuencia en la pieza de ampliacion que en la biopsia inicial',
    'En el lentigo maligna, la biopsia parcial tiene sesgo de muestreo y puede no detectar el componente invasivo',
    'La evaluacion de margenes en cortes por congelacion es menos exacta que en los tumores epiteliales'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion',
    'En lesiones grandes que no se pueden extirpar completas sin cirugia reconstructiva se admite biopsia parcial',
    'En zonas comprometidas (parpado, oreja) o si se va a usar imiquimod, se aceptan varios punch dirigidos',
    'Nunca destruir una lesion pigmentada sospechosa con crioterapia o laser: se pierde el diagnostico y la medida'
  ]
};

export const escalaRefs = {
  'Categoria T de la AJCC 8 (calculadora disponible)': [2],
  'Categoria N de la AJCC 8': [2],
  'Categoria M de la AJCC 8': [2],
  'Grupos de estadio y supervivencia (calculadora disponible)': [2],
  'Indicacion de centinela y margen por categoria T (calculadora disponible)': [1, 2],
  'Respuesta patologica del INMC': [1]
};

export const escalaCalc = {
  'Categoria T de la AJCC 8 (calculadora disponible)': 'ajcc8-melanoma',
  'Grupos de estadio y supervivencia (calculadora disponible)': 'ajcc8-melanoma',
  'Indicacion de centinela y margen por categoria T (calculadora disponible)': 'margen-centinela'
};

export const compGroups = [
  { title: 'El diagnostico', items: ['La biopsia inicial: aqui se gana o se pierde el estadio', 'Breslow y ulceracion: el informe que decide todo'] },
  { title: 'Enfermedad localizada y regional', items: ['Cirugia: margenes y ganglio centinela', 'Estadio I y II: el melanoma localizado', 'Estadio III: ganglios, en transito y neoadyuvancia'] },
  { title: 'Enfermedad avanzada', items: ['Estadio IV: enfermedad avanzada', 'Metastasis cerebrales', 'La toxicidad que llega a medicina interna'] },
  { title: 'Formas que se salen de la regla', items: ['Lentigo maligna y otras localizaciones especiales'] }
];

export const complicacionesIntro = 'Las fichas siguen el camino real de un paciente. Las dos primeras son el diagnostico, y estan separadas a proposito: una es como se toma la biopsia y la otra es como se lee el informe, porque son dos errores distintos y los dos cuestan el estadio. Las tres siguientes recorren la enfermedad localizada y regional, de la cirugia al estadio III, donde la neoadyuvancia ha cambiado el orden de las cosas. Las tres de enfermedad avanzada incluyen una que no es del melanoma sino del tratamiento: la toxicidad, que es lo que de verdad llega a una planta de medicina interna. Y la ultima recoge las formas que no siguen la regla general, con el lentigo maligna por delante, porque es la que mas se confunde con algo banal en la cara de un paciente mayor.';

export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Estadificacion' },
  { id: 'complicaciones', label: 'Fichas' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'MELANOMA', color: '#4a3a2e', target: 'definicion' },
  branches: [
    { title: 'Localizado', sub: 'N0 M0 &middot; lo cura la cirugia', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Breslow y ulceracion', sub: 'De aqui sale TODO lo demas', color: '#4a3a2e', target: 'clasificacion' },
      { title: 'Margen y centinela', sub: '0,5 / 1 / 2 cm &middot; corte de 0,8 mm', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Estadio IIB-IIC', sub: 'Plantear anti PD-1 adyuvante', color: '#8a5a1a', target: 'complicaciones' }
    ] },
    { title: 'Regional', sub: 'Ganglios o en transito &middot; estadio III', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Neoadyuvancia', sub: 'Respuesta mayor: omitir adyuvancia', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Adyuvancia', sub: 'Anti PD-1, o BRAF-MEK si V600E', color: '#7a6a2e', target: 'complicaciones' }
    ] },
    { title: 'Avanzado', sub: 'M1 &middot; el sitio y la LDH', color: '#7a3a6b', target: 'complicaciones', leaves: [
      { title: 'Primera linea', sub: 'Nivolumab con ipilimumab', color: '#7a3a6b', target: 'complicaciones' },
      { title: 'Cerebro (M1d)', sub: 'Radiocirugia y dosis de corticoide', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Toxicidad', sub: 'Lo que llega a medicina interna', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 3], no_invasivos: [1, 2, 4], imagen: [1, 3], biopsia: [1, 4] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1, 3];
export const figurasDefinicion = ['escalera-breslow'];
export const figurasClasificacion = ['estadios-supervivencia', 'primera-linea-avanzado'];

export const figuras = {
  'escalera-breslow': {
    titulo: 'La escalera del Breslow: de los milimetros a la conducta',
    fuente: 'Grosor y subcategorias T de Gershenwald JE, et al. CA Cancer J Clin 2017;67(6):472-492; margenes e indicacion de ganglio centinela de Amaral T, et al. Ann Oncol 2025;36(1):10-30.',
    html: `<svg viewBox="0 0 740 420" role="img" aria-labelledby="breslow-title breslow-desc" style="width:100%;height:auto;">
      <title id="breslow-title">Corte de la piel con los cortes de grosor del melanoma y la conducta que corresponde a cada uno</title>
      <desc id="breslow-desc">Corte esquematico de la piel con una escala de profundidad en milimetros. El melanoma in situ se queda en la epidermis y se extirpa con 0,5 centimetros de margen, sin ganglio centinela. El T1 llega hasta 1,0 milimetro y se extirpa con 1 centimetro de margen; el centinela no se recomienda de rutina por debajo de 0,8 milimetros sin ulceracion y se discute entre 0,8 y 1,0 milimetros. El T2, de 1,0 a 2,0 milimetros, lleva 1 centimetro de margen y centinela indicado. El T3, de 2,0 a 4,0 milimetros, y el T4, por encima de 4,0 milimetros, llevan 2 centimetros de margen y centinela indicado.</desc>

      <text x="8" y="22" font-size="12" font-weight="600" fill="var(--ink)">Profundidad del tumor (indice de Breslow) y conducta que se deriva</text>

      <rect x="85" y="46" width="590" height="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1"/>
      <text x="78" y="56" font-size="9.5" text-anchor="end" fill="var(--ink-dim)">epidermis</text>
      <rect x="85" y="60" width="590" height="240" fill="var(--panel)" stroke="var(--line)" stroke-width="1"/>
      <text x="78" y="180" font-size="9.5" text-anchor="end" fill="var(--ink-dim)">dermis</text>
      <rect x="85" y="300" width="590" height="22" fill="var(--panel2)" stroke="var(--line)" stroke-width="1"/>
      <text x="78" y="315" font-size="9.5" text-anchor="end" fill="var(--ink-dim)">subcutaneo</text>

      <line x1="85" y1="104" x2="675" y2="104" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="78" y="107" font-size="9.5" text-anchor="end" fill="var(--ink)">0,8 mm</text>
      <line x1="85" y1="126" x2="675" y2="126" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="78" y="129" font-size="9.5" text-anchor="end" fill="var(--ink)">1,0 mm</text>
      <line x1="85" y1="170" x2="675" y2="170" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="78" y="173" font-size="9.5" text-anchor="end" fill="var(--ink)">2,0 mm</text>
      <line x1="85" y1="258" x2="675" y2="258" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="78" y="261" font-size="9.5" text-anchor="end" fill="var(--ink)">4,0 mm</text>

      <path d="M112 47 h56 a4 4 0 0 1 4 4 v5 a4 4 0 0 1 -4 4 h-56 a4 4 0 0 1 -4 -4 v-5 a4 4 0 0 1 4 -4 z" fill="#3f6b52" opacity="0.85"/>
      <text x="140" y="82" font-size="11" font-weight="600" text-anchor="middle" fill="var(--ink)">Tis</text>
      <text x="140" y="96" font-size="9.5" text-anchor="middle" fill="var(--ink-dim)">in situ</text>

      <path d="M232 46 q28 0 28 32 q0 38 -28 38 q-28 0 -28 -38 q0 -32 28 -32 z" fill="#3f6b52" opacity="0.85"/>
      <text x="232" y="140" font-size="11" font-weight="600" text-anchor="middle" fill="var(--ink)">T1</text>
      <text x="232" y="154" font-size="9.5" text-anchor="middle" fill="var(--ink-dim)">hasta 1,0 mm</text>

      <path d="M352 46 q30 0 30 40 q0 74 -30 74 q-30 0 -30 -74 q0 -40 30 -40 z" fill="#8a5a1a" opacity="0.85"/>
      <text x="352" y="184" font-size="11" font-weight="600" text-anchor="middle" fill="var(--ink)">T2</text>
      <text x="352" y="198" font-size="9.5" text-anchor="middle" fill="var(--ink-dim)">1,0 a 2,0 mm</text>

      <path d="M472 46 q32 0 32 50 q0 130 -32 130 q-32 0 -32 -130 q0 -50 32 -50 z" fill="#8a5a1a" opacity="0.85"/>
      <text x="472" y="250" font-size="11" font-weight="600" text-anchor="middle" fill="var(--ink)">T3</text>
      <text x="472" y="264" font-size="9.5" text-anchor="middle" fill="var(--ink-dim)">2,0 a 4,0 mm</text>

      <path d="M592 46 q34 0 34 56 q0 184 -34 184 q-34 0 -34 -184 q0 -56 34 -56 z" fill="#8c3a34" opacity="0.9"/>
      <text x="592" y="306" font-size="11" font-weight="600" text-anchor="middle" fill="var(--ink)">T4</text>
      <text x="592" y="320" font-size="9.5" text-anchor="middle" fill="var(--ink-dim)">mas de 4,0 mm</text>

      <line x1="85" y1="338" x2="675" y2="338" stroke="var(--line)" stroke-width="1"/>
      <text x="78" y="358" font-size="9.5" text-anchor="end" fill="var(--ink-dim)">margen</text>
      <text x="140" y="358" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--accent-fg)">0,5 cm</text>
      <text x="232" y="358" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--accent-fg)">1 cm</text>
      <text x="352" y="358" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--accent-fg)">1 cm</text>
      <text x="472" y="358" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--accent-fg)">2 cm</text>
      <text x="592" y="358" font-size="10.5" font-weight="600" text-anchor="middle" fill="var(--accent-fg)">2 cm</text>

      <text x="78" y="386" font-size="9.5" text-anchor="end" fill="var(--ink-dim)">centinela</text>
      <text x="140" y="382" font-size="9.5" text-anchor="middle" fill="var(--ink)">no</text>
      <text x="232" y="382" font-size="9.5" text-anchor="middle" fill="var(--ink)">no de rutina si</text>
      <text x="232" y="394" font-size="9.5" text-anchor="middle" fill="var(--ink)">es pT1a; se discute</text>
      <text x="232" y="406" font-size="9.5" text-anchor="middle" fill="var(--ink)">si es pT1b</text>
      <text x="352" y="382" font-size="9.5" text-anchor="middle" fill="var(--ink)">indicado</text>
      <text x="472" y="382" font-size="9.5" text-anchor="middle" fill="var(--ink)">indicado</text>
      <text x="592" y="382" font-size="9.5" text-anchor="middle" fill="var(--ink)">indicado</text>
    </svg>
    <div class="figure-grade-box">Dos avisos sobre la figura. El primero: el corte de <strong>0,8 mm</strong> no separa T1 de T2, separa <strong>T1a de T1b</strong> DENTRO del T1, y es el que decide si se plantea el centinela; el corte de 1,0 mm es el que separa T1 de T2. El segundo: la <strong>ulceracion</strong> no se ve en un dibujo de profundidad y manda igual, porque sube de subcategoria a cualquier grosor, de modo que un melanoma de 0,6 mm ulcerado es T1b y no T1a.</div>`
  },
  'estadios-supervivencia': {
    titulo: 'Grupos de estadio y supervivencia especifica',
    fuente: 'Gershenwald JE, et al. Melanoma staging: evidence-based changes in the AJCC eighth edition. CA Cancer J Clin 2017;67(6):472-492.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Estadio</th><th>Como se llega</th><th>Supervivencia especifica a 5 a&#241;os</th><th>A 10 a&#241;os</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">IA</td><td>T1a o T1b con N0 (agrupacion patologica)</td><td>99%</td><td>98%</td></tr>
            <tr><td class="figure-org">IB</td><td>T2a con N0</td><td colspan="2">Entre el IA y el IIA; el estadio I global es 98% y 95%</td></tr>
            <tr><td class="figure-org">IIA</td><td>T2b o T3a con N0</td><td colspan="2">Estadio II global: 90% y 84%</td></tr>
            <tr><td class="figure-org">IIB</td><td>T3b o T4a con N0</td><td colspan="2">Desde aqui se pide imagen de extension</td></tr>
            <tr><td class="figure-org">IIC</td><td>T4b con N0</td><td>82%</td><td>75%</td></tr>
            <tr><td class="figure-org">IIIA</td><td>T1a, T1b o T2a con 1 a 3 ganglios ocultos (N1a o N2a)</td><td><span class="figure-tag">93%</span></td><td>88%</td></tr>
            <tr><td class="figure-org">IIIB</td><td>Combinaciones intermedias de T y N</td><td>83%</td><td>77%</td></tr>
            <tr><td class="figure-org">IIIC</td><td>Combinaciones avanzadas de T y N</td><td>69%</td><td>60%</td></tr>
            <tr><td class="figure-org">IIID</td><td>T4b con N3a, N3b o N3c</td><td><span class="figure-tag fail">32%</span></td><td>24%</td></tr>
            <tr><td class="figure-org">IV</td><td>Cualquier M1, segun sitio y LDH</td><td colspan="2">Depende del tratamiento y de la respuesta</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Lo que hay que llevarse de esta tabla no son las cifras sueltas, sino <strong>el rango dentro del estadio III</strong>: del 93% al 32% a 5 a&#241;os. Y un dato con consecuencias practicas: el IIIA de la octava edicion tiene un 93% de supervivencia frente al 78% del IIIA de la septima, porque exigir el centinela define grupos mas homogeneos. Por eso en el <strong>IIIA con menos de 1 mm de carga tumoral en el centinela la adyuvancia no es tratamiento estandar</strong>: ese grupo casi no estuvo representado en los ensayos, que reclutaron con criterios de la septima edicion.</div>`
  },
  'primera-linea-avanzado': {
    titulo: 'Como se elige la primera linea en el melanoma avanzado',
    fuente: 'Amaral T, et al. Cutaneous melanoma: ESMO Clinical Practice Guideline. Ann Oncol 2025;36(1):10-30; secuencia de DREAMSEQ y SECOMBIT segun Marquez-Rodas I, et al. Clin Transl Oncol 2024;26(11):2841-2855.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situacion del paciente</th><th>Que se ofrece</th><th>Por que</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Candidato a inmunoterapia y no urge la respuesta</td><td><strong>Nivolumab con ipilimumab</strong>, con mutacion de BRAF o sin ella</td><td>Opcion preferida (nivel I, grado A). En DREAMSEQ, empezar asi dio un 71,8% de supervivencia global a 2 a&#241;os frente al 51,5% de empezar por terapia dirigida</td></tr>
            <tr><td class="figure-org">Candidato a inmunoterapia pero se busca menos toxicidad</td><td>Nivolumab o pembrolizumab en <strong>monoterapia</strong></td><td>Tambien recomendados en primera linea. Grado 3-4 del 16,3% con nivolumab solo frente al 55,0% de la combinacion</td></tr>
            <tr><td class="figure-org">PD-L1 tumoral menor del 1%</td><td>Nivolumab con <strong>relatlimab</strong> como alternativa</td><td>La aprobacion europea se limita a ese subgrupo. Mediana de supervivencia libre de progresion de 10,1 frente a 4,6 meses con nivolumab solo</td></tr>
            <tr><td class="figure-org">Enfermedad agresiva con LDH alta o metastasis hepaticas, con mutacion de BRAF</td><td><strong>Induccion</strong> con inhibidor de BRAF y de MEK 8 a 12 semanas y despues inmunoterapia</td><td>Nivel II, grado C. En EBIN el beneficio aparecio justo en el subgrupo con LDH mayor del doble del limite alto y en el de metastasis hepaticas</td></tr>
            <tr><td class="figure-org">No candidato a inmunoterapia, con mutacion de BRAF V600</td><td><span class="figure-tag dys">Inhibidor de BRAF con inhibidor de MEK</span></td><td>Dabrafenib-trametinib, vemurafenib-cobimetinib o encorafenib-binimetinib. La combinacion supera al inhibidor de BRAF solo y reduce sus efectos cutaneos</td></tr>
            <tr><td class="figure-org">Metastasis cerebrales asintomaticas</td><td>Nivolumab con ipilimumab, mas <strong>radiocirugia estereotactica</strong></td><td>Respuestas intracraneales del 51 al 54%. La eficacia cae en el paciente sintomatico o con mas de 10 mg de prednisolona al dia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La idea que ordena toda la tabla: <strong>el orden importa mas que la lista</strong>. En DREAMSEQ, la mitad de los que progresaron con terapia dirigida en primera linea NO llegaron a recibir la inmunoterapia, porque fallecieron en los 6 meses siguientes, muchos por metastasis cerebrales. De ahi que la terapia dirigida se reserve, con la unica excepcion de la induccion corta cuando hace falta frenar la enfermedad rapido. Y en todos los escenarios, el <strong>ensayo clinico</strong> es la opcion preferida cuando existe.</div>`
  }
};
