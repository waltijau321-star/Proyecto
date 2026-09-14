// topics/ampollosas/content.js - Modulo 76: Enfermedades ampollosas autoinmunes.
// Fuentes: guias indias de penfigo (De D, et al. Indian Dermatol Online J 2024), S2k de la EADV
// de penfigoide ampolloso (Borradori L, et al. JEADV 2022) y de penfigo paraneoplasico
// (Antiga E, et al. JEADV 2023), y revision de penfigoide (Werth VP, et al. JEADV 2024).
// NOTA DE ALCANCE: de la S2k de penfigoide solo se dispuso del resumen publicado, de modo que
// se citan las recomendaciones que figuran en el, no el documento completo.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'ampollosas',
  titulo: 'Ampollosas autoinmunes',
  subtitulo: 'Modulo 76 &middot; Dermatologia',
  accent: '#4a5a8c',
  accentDim: '#6a7aa8'
};

export const definicionText = `<p style="margin:0 0 14px;">Las enfermedades ampollosas autoinmunes son un grupo en el que <strong>autoanticuerpos contra las proteinas de adhesion de la piel</strong> rompen la union entre celulas o entre la epidermis y la dermis. Todo el tema se ordena con una sola pregunta: <strong>&#191;a que altura se forma la ampolla?</strong></p>
<p style="margin:0 0 14px;">Si es <strong>intraepidermica</strong>, el ataque va contra las desmogleinas de los desmosomas, la ampolla es <strong>flacida</strong> porque tiene un techo finisimo, se rompe enseguida y lo que se ve son EROSIONES con el signo de Nikolsky positivo: eso es el <strong>penfigo</strong>. Si es <strong>subepidermica</strong>, el ataque va contra las proteinas del hemidesmosoma de la union dermoepidermica, el techo es toda la epidermis y por eso la ampolla es <strong>tensa</strong> y aguanta: eso es el <strong>penfigoide</strong> y sus parientes.</p>
<p style="margin:0 0 14px;">Dos ideas practicas. La primera: la confirmacion no es la histologia sino la <strong>inmunofluorescencia directa</strong>, y para que sirva la biopsia tiene que tomarse de piel <strong>perilesional</strong>, no de la ampolla. La segunda: son enfermedades de perfiles muy distintos. El penfigo afecta a adultos de mediana edad y empieza con frecuencia por la <strong>boca</strong>; el penfigoide afecta a ancianos, se asocia a enfermedad neurologica y suele tener una <strong>fase previa sin ampollas</strong> que retrasa el diagnostico durante meses.</p>`;

export const bibliografia = [
  'De D, Mehta H, Shah S, et al. Consensus Based Indian Guidelines for the Management of Pemphigus Vulgaris and Pemphigus Foliaceous. Indian Dermatol Online J. 2024;16(1):3-24. doi:10.4103/idoj.idoj_1059_24.',
  'Borradori L, Van Beek N, Feliciani C, et al. Updated S2K guidelines for the management of bullous pemphigoid initiated by the European Academy of Dermatology and Venereology (EADV). J Eur Acad Dermatol Venereol. 2022;36(10):1689-1704. doi:10.1111/jdv.18220.',
  'Werth VP, Murrell DF, Joly P, Ardeleanu M, Hultsch V. Bullous pemphigoid burden of disease, management and unmet therapeutic needs. J Eur Acad Dermatol Venereol. 2024;39(2):290-300. doi:10.1111/jdv.20313. (Revision financiada por Sanofi y Regeneron.)',
  'Antiga E, Bech R, Maglie R, et al. S2k guidelines on the management of paraneoplastic pemphigus/paraneoplastic autoimmune multiorgan syndrome initiated by the European Academy of Dermatology and Venereology (EADV). J Eur Acad Dermatol Venereol. 2023;37(6):1118-1134. doi:10.1111/jdv.18931.',
  'Ocagli H, Monachesi C, Berti G, et al. Dermatitis Herpetiformis in Celiac Disease: A Systematic Review and Meta-Analysis. United European Gastroenterol J. 2026;14(6):e70259. doi:10.1002/ueg2.70259.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La pregunta del nivel',
      tituloB: 'Datos que reorientan el diagnostico',
      compensada: 'AMPOLLA FLACIDA que se rompe con facilidad y deja erosiones dolorosas, con signo de Nikolsky positivo: es intraepidermica, y eso es PENFIGO. El vulgar empieza con frecuencia por la BOCA, y el paciente puede pasar meses con erosiones orales dolorosas antes de tener nada en la piel; el foliaceo respeta las mucosas y da erosiones costrosas en areas seborreicas. AMPOLLA TENSA de 1 a 4 centimetros que aguanta intacta sobre base urticariforme, en un paciente mayor y con PRURITO intenso: es subepidermica, y eso es PENFIGOIDE. Sus lesiones son bilaterales y predominan en las zonas de flexion de los miembros y en el tronco inferior.',
      descompensada: 'Datos que obligan a replantear: MUCOSITIS grave y refractaria con lesiones cutaneas polimorfas, que apunta a penfigo PARANEOPLASICO y obliga a buscar una neoplasia hematologica; prurito intenso con lesiones excoriadas SIMETRICAS en codos, rodillas y nalgas en un adulto joven, que sugiere dermatitis herpetiforme y celiaquia; ampollas en zonas de traumatismo con quistes de milio y cicatrices, que orienta a epidermolisis ampollosa adquirida; y en el anciano con prurito de meses sin ampollas, no descartar penfigoide, porque su fase inicial NO tiene ampollas y es la razon principal del retraso diagnostico.'
    },
    laboratorio: [
      { prueba: 'Inmunofluorescencia DIRECTA sobre piel perilesional', utilidad: 'Es LA prueba. Hay que tomarla de piel perilesional sana, no de la ampolla, porque dentro de la ampolla el tejido esta destruido y el resultado sale falsamente negativo. Muestra el deposito de inmunoglobulinas y complemento, y su PATRON dice de que enfermedad se trata.' },
      { prueba: 'Inmunofluorescencia INDIRECTA en suero', utilidad: 'Detecta autoanticuerpos circulantes sobre sustratos como esofago de mono o piel humana. En el penfigo paraneoplasico, la union a EPITELIO DE VEJIGA DE RATA es el hallazgo mas especifico y es la prueba que mas orienta cuando se sospecha.' },
      { prueba: 'ELISA de desmogleina 1 y 3', utilidad: 'Confirma el penfigo y permite seguir la actividad. El perfil separa las formas: desmogleina 3 en el vulgar mucoso, desmogleina 1 y 3 en el mucocutaneo, y desmogleina 1 sola en el foliaceo. Las guias indias lo usan tambien para valorar la falta de respuesta, predecir recaida y planificar las dosis de mantenimiento de rituximab.' },
      { prueba: 'ELISA de BP180 y BP230', utilidad: 'Confirma el penfigoide ampolloso. Junto con la inmunofluorescencia, basta para el diagnostico definitivo en la mayoria de los casos.' },
      { prueba: 'Anticuerpos de celiaquia', utilidad: 'Antitransglutaminasa tisular y antiendomisio en la dermatitis herpetiforme, que es la expresion cutanea de la enfermedad celiaca. Tambien antitransglutaminasa epidermica, que es el autoantigeno cutaneo.' },
      { prueba: 'Citologia de Tzanck', utilidad: 'Prueba a pie de cama, rapida y barata, que muestra celulas acantoliticas en el penfigo. Las guias indias la contemplan como diagnostico de trabajo inicial donde haya medios, con una positividad comunicada en torno al 71%. No sustituye a la inmunofluorescencia.' },
      { prueba: 'Estudio previo al rituximab', utilidad: 'Las guias indias piden electrocardiograma y anticuerpo del core de la hepatitis B antes del rituximab, ecocardiograma si hay cardiopatia conocida o alteracion del electrocardiograma, y cribado de tuberculosis para los corticoides y los adyuvantes no rituximab.' },
      { prueba: 'Busqueda de neoplasia', utilidad: 'Ante sospecha de penfigo paraneoplasico: hemograma, frotis, tomografia y estudio hematologico, porque la asociacion mas frecuente es con procesos linfoproliferativos.' }
    ],
    no_invasivos: [
      { metodo: 'Nivel de la ampolla (calculadora disponible)', interpretacion: 'Cruza la tension de la ampolla, el signo de Nikolsky, la edad y la afectacion de mucosas para orientar entre intraepidermica y subepidermica.', cutoff: 'Flacida y Nikolsky positivo: intraepidermica' },
      { metodo: 'Lectura de la inmunofluorescencia (calculadora disponible)', interpretacion: 'Traduce el patron del deposito y el resultado de los ELISA a un diagnostico concreto.', cutoff: 'El patron, no la intensidad, es lo que diagnostica' },
      { metodo: 'BPDAI (calculadora disponible)', interpretacion: 'Indice de area de enfermedad del penfigoide ampolloso. Punt&uacute;a ampollas y erosiones cutaneas, eritema y urticaria, y lesiones mucosas.', cutoff: 'Leve 19 o menos; moderado de 20 a 56; grave 57 o mas' },
      { metodo: 'Comprobacion previa al rituximab (calculadora disponible)', interpretacion: 'Repasa el estudio que las guias piden antes de la primera infusion.', cutoff: 'Electrocardiograma, hepatitis B y cribado de tuberculosis' },
      { metodo: 'Signo de Nikolsky y signo de Asboe-Hansen', interpretacion: 'El primero: la piel sana perilesional se despega al frotarla. El segundo: al presionar una ampolla intacta, esta se extiende lateralmente.', cutoff: 'Ambos indican falta de cohesion, tipica del penfigo' },
      { metodo: 'Piel separada con sal (salt-split skin)', interpretacion: 'Separa artificialmente la epidermis de la dermis para localizar con precision donde se depositan los inmunorreactantes: en el techo o en el suelo de la ampolla.', cutoff: 'Deposito en el TECHO: penfigoide ampolloso' }
    ],
    imagen: [
      { modalidad: 'No se necesita imagen para el diagnostico', hallazgos: 'Estas enfermedades se diagnostican con biopsia e inmunologia, no con imagen.' },
      { modalidad: 'Tomografia toracoabdominal', hallazgos: 'Ante sospecha de penfigo paraneoplasico, buscando la neoplasia subyacente, sobre todo linfoproliferativa.' },
      { modalidad: 'Pruebas de funcion respiratoria', hallazgos: 'En el penfigo paraneoplasico, para detectar BRONQUIOLITIS OBLITERANTE, que es una de las causas de mortalidad y que puede progresar de forma silenciosa.' },
      { modalidad: 'Densitometria osea', hallazgos: 'En todo paciente que va a recibir corticoide sistemico prolongado, que es la norma en estas enfermedades.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifican por el <strong>nivel</strong> de la ampolla y por la <strong>diana</strong> del autoanticuerpo. <strong>Intraepidermicas</strong>: penfigo vulgar (desmogleina 3, o 3 y 1), penfigo foliaceo (desmogleina 1) y penfigo paraneoplasico (varias plaquinas, entre ellas la envoplaquina). <strong>Subepidermicas</strong>: penfigoide ampolloso (BP180 y BP230), dermatitis herpetiforme (transglutaminasa epidermica) y epidermolisis ampollosa adquirida (colageno VII). Y despues se gradua la <strong>actividad</strong>, que en el penfigoide se mide con el BPDAI y en el penfigo con el PDAI.`,
    escalas: [
      { nombre: 'Nivel de la ampolla (calculadora disponible)', componentes: 'Tension de la ampolla, signo de Nikolsky, edad del paciente, afectacion de mucosas y aspecto de las lesiones.', formula: 'Combinacion de esos datos clinicos.', interpretacion: 'La ampolla FLACIDA con Nikolsky positivo es intraepidermica porque su techo es solo una parte de la epidermis y se rompe enseguida; la TENSA es subepidermica porque el techo es toda la epidermis. Es la primera y mas rentable separacion del tema, y se hace sin ninguna prueba.' },
      { nombre: 'Lectura de la inmunofluorescencia (calculadora disponible)', componentes: 'Patron del deposito en la inmunofluorescencia directa, resultado de los ELISA y hallazgos de la indirecta.', formula: 'Correspondencia patron-enfermedad.', interpretacion: 'El deposito en RED o en panal entre los queratinocitos es penfigo; el deposito LINEAL en la union dermoepidermica es penfigoide; y el deposito GRANULAR de inmunoglobulina A en las papilas dermicas es dermatitis herpetiforme. El patron es lo que diagnostica, no la intensidad.' },
      { nombre: 'BPDAI (calculadora disponible)', componentes: 'Tres apartados de actividad de hasta 120 puntos cada uno: ampollas y erosiones cutaneas, eritema y urticaria cutaneos, y lesiones mucosas. Mas una puntuacion de da&#241;o de 0 a 12 y una escala separada de prurito.', formula: 'Actividad de 0 a 360 y da&#241;o de 0 a 12, con ponderacion segun las zonas afectadas.', interpretacion: 'Leve 19 o menos; moderado de 20 a 56; grave 57 o mas. Un empeoramiento relevante son 3 puntos mas y una mejoria relevante, 4 puntos menos. La puntuacion de prurito va aparte porque el picor es lo que mas condiciona la vida del paciente.' },
      { nombre: 'ABSIS', componentes: 'Superficie afectada por ampollas y erosiones calculada con la regla de los nueves, con un factor de ponderacion por la fase de la lesion.', formula: 'Rango de 0 a 206.', interpretacion: 'Alternativa al BPDAI. Usa la misma regla que se emplea en quemados, lo que la hace familiar para quien viene de medicina interna o de criticos.' },
      { nombre: 'Perfil de desmogleinas', componentes: 'Anticuerpos frente a desmogleina 1 y frente a desmogleina 3 medidos por ELISA.', formula: 'Presencia y titulo de cada uno.', interpretacion: 'Explica la clinica: la desmogleina 3 predomina en mucosas y la 1 en piel. Por eso el penfigo vulgar mucoso solo tiene anticuerpos frente a la 3, el mucocutaneo frente a las dos, y el foliaceo solo frente a la 1 y respeta las mucosas. Es de los pocos sitios de la dermatologia donde el autoantigeno explica de forma tan directa donde salen las lesiones.' },
      { nombre: 'Indice de toxicidad por glucocorticoides', componentes: 'Nueve dominios en un cuestionario de 31 items.', formula: 'Puntuacion de mejoria acumulada y de empeoramiento acumulado.', interpretacion: 'Existe porque en estas enfermedades el corticoide prolongado hace tanto da&#241;o como la propia enfermedad, sobre todo en el anciano con penfigoide. Medir esa toxicidad es parte del tratamiento, no un extra.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Penfigo vulgar y foliaceo: reconocerlo',
      color: '#8c3a34',
      definicion: 'Enfermedades ampollosas INTRAEPIDERMICAS producidas por autoanticuerpos contra las desmogleinas de los desmosomas, con perdida de cohesion entre queratinocitos (acantolisis).',
      fisiopatologia: 'Los autoanticuerpos de tipo inmunoglobulina G se unen a la desmogleina 1 o a la 3 e impiden la adhesion entre queratinocitos. El resultado es la ACANTOLISIS: las celulas se separan y se forma una ampolla dentro de la epidermis, con un techo finisimo que se rompe al menor roce. La distribucion de cada desmogleina en el cuerpo explica la clinica: la desmogleina 3 predomina en las mucosas y la 1 en la piel, de modo que el perfil de anticuerpos predice donde saldran las lesiones.',
      epidemiologia: 'Afecta sobre todo a adultos de mediana edad. El penfigo vulgar es mas frecuente que el foliaceo en la mayoria de las series. Sin tratamiento, el penfigo vulgar tenia una mortalidad muy alta antes de los corticoides.',
      factores_riesgo: ['Determinados alelos HLA de clase II', 'Origen judio askenazi o mediterraneo, en el vulgar', 'Farmacos con grupo tiol, como la penicilamina y el captopril', 'Edad media de la vida', 'Otras enfermedades autoinmunes asociadas'],
      clinica: 'Penfigo VULGAR: en muchos pacientes empieza por la BOCA, con erosiones dolorosas que impiden comer, y puede tardar meses en dar lesiones cutaneas; despues aparecen ampollas flacidas que se rompen y dejan erosiones extensas. Penfigo FOLIACEO: RESPETA las mucosas y da lesiones costrosas y descamativas en areas seborreicas (cara, cuero cabelludo, tronco superior), porque la ampolla es tan superficial que casi nunca se ve intacta.',
      criterios_dx: 'Clinica compatible mas INMUNOFLUORESCENCIA DIRECTA de piel perilesional con deposito en red entre los queratinocitos, mas ELISA de desmogleinas. La histologia muestra acantolisis suprabasal en el vulgar y subcornea en el foliaceo.',
      laboratorio: 'Inmunofluorescencia directa e indirecta, ELISA de desmogleina 1 y 3. La citologia de Tzanck es un apoyo rapido a pie de cama con celulas acantoliticas, con una positividad en torno al 71% segun las guias indias.',
      imagen: 'No se necesita para el diagnostico.',
      complementarios: 'Valoracion odontologica y de otorrinolaringologia si hay afectacion mucosa extensa. Valoracion oftalmologica si hay sintomas oculares.',
      dx_diferencial: 'Penfigoide ampolloso (ampolla tensa, anciano, prurito), penfigo paraneoplasico (mucositis grave y refractaria), eritema multiforme mayor, necrolisis epidermica toxica, estomatitis aftosa y liquen plano erosivo.',
      tx_medico: 'Cuidados de la boca que permitan comer, analgesia adecuada, curas no adherentes y soporte nutricional. En la afectacion oral extensa el paciente pierde peso de forma rapida y eso se pasa por alto con facilidad.',
      tx_farmacologico: 'Corticoide sistemico como base, con un adyuvante inmunosupresor para reducir la dependencia del corticoide. Ver la ficha de tratamiento.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: afectacion muy extensa con perdidas hidroelectroliticas o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Balance, peso, control del dolor y busqueda de sobreinfeccion de las erosiones.',
      seguimiento_ambulatorio: 'Titulo de desmogleinas seriado, que se correlaciona con la actividad y ayuda a anticipar la recaida.',
      pronostico: 'Ha cambiado por completo con el tratamiento actual. La mortalidad hoy se relaciona mas con las complicaciones del tratamiento que con la propia enfermedad.',
      algoritmo: ['&#191;La ampolla es flacida y el Nikolsky positivo?', 'Biopsiar piel PERILESIONAL para inmunofluorescencia directa', 'Biopsia de lesion para histologia', 'ELISA de desmogleina 1 y 3', 'Clasificar: vulgar mucoso, mucocutaneo o foliaceo', 'Valorar la extension y la afectacion oral', 'Iniciar tratamiento y planificar el adyuvante']
    },
    {
      nombre: 'Penfigo: tratamiento y seguimiento',
      color: '#3d5a73',
      definicion: 'Estrategia en fases, dirigida a controlar la enfermedad, consolidar la remision y mantenerla con la menor dosis posible de corticoide.',
      fisiopatologia: 'El rituximab depleciona los linfocitos B al unirse a CD20, con lo que corta la produccion de autoanticuerpos en su origen. Esa es la razon de que su efecto tarde en aparecer pero dure, y de que el titulo de desmogleinas sirva para seguir la respuesta y anticipar la recaida.',
      epidemiologia: 'La mayor parte de la morbilidad actual del penfigo procede del TRATAMIENTO y no de la enfermedad: infecciones, osteoporosis, diabetes e hipertension por corticoide prolongado.',
      factores_riesgo: ['Enfermedad extensa al diagnostico', 'Titulo alto de desmogleinas', 'Retraso en alcanzar el control', 'Comorbilidad que limita el corticoide', 'Recaidas repetidas'],
      clinica: 'El tratamiento se organiza en fases: control de la enfermedad (dejan de salir lesiones nuevas y las existentes empiezan a curar), consolidacion y mantenimiento, con el objetivo final de la remision sin corticoide o con la dosis mas baja posible.',
      criterios_dx: 'No aplica.',
      laboratorio: 'ANTES del rituximab, las guias indias piden electrocardiograma y anticuerpo del core de la hepatitis B, ecocardiograma si hay cardiopatia conocida o alteracion electrocardiografica, y cribado de tuberculosis con prueba cutanea o ensayo de liberacion de interferon gamma para los corticoides y los adyuvantes distintos del rituximab.',
      imagen: 'Densitometria osea por el corticoide prolongado.',
      complementarios: 'Titulo de desmogleinas seriado: las guias lo usan para valorar la falta de respuesta, predecir la recaida y planificar las infusiones de mantenimiento de rituximab. Se&#241;alan ademas que NO hay evidencia suficiente para usar saliva en lugar de suero.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Profilaxis de osteoporosis, control de glucemia y tension, vacunacion actualizada ANTES de empezar, y proteccion gastrica si procede. Todo esto forma parte del tratamiento, no es accesorio.',
      tx_farmacologico: 'Corticoide sistemico como base. Ante la necesidad de corticoide prolongado y a dosis altas, las guias indias indican incorporar un ADYUVANTE inmunosupresor (rituximab, micofenolato de mofetilo, azatioprina e incluso ciclofosfamida) para reducir la dependencia del corticoide. En el penfigo FOLIACEO leve contemplan la dapsona como primera linea, normalmente con corticoide topico, se&#241;alando que en torno a la mitad de los que empiezan con dapsona acabaran necesitando otra cosa. Y describen el pulso de dexametasona y ciclofosfamida, que sigue las mismas fases. Una diferencia que la propia guia explicita: en su medio el objetivo es la remision sin corticoide, mientras que las recomendaciones internacionales aceptan mantener la remision con prednisolona a 10 mg al dia o menos.',
      tx_intervencionista: 'La plasmaferesis y la inmunoadsorcion se reservan a casos graves y refractarios en centros con experiencia.',
      criterios_uci: 'Sepsis o afectacion extensa con inestabilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de infeccion, que es la complicacion mas temida en un paciente inmunodeprimido con la barrera cutanea rota.',
      seguimiento_ambulatorio: 'Reduccion progresiva del corticoide guiada por la clinica y por el titulo de desmogleinas. Vigilancia de la toxicidad acumulada del corticoide, que en estos pacientes se mide en a&#241;os.',
      pronostico: 'Bueno con tratamiento adecuado. El reto no es controlar el brote sino retirar el corticoide sin que recaiga.',
      algoritmo: ['Valorar extension y comorbilidad', 'Estudio previo: electrocardiograma, hepatitis B y tuberculosis', 'Vacunacion actualizada antes de empezar', 'Corticoide sistemico para el control', 'A&#241;adir adyuvante para ahorrar corticoide', 'Seguir el titulo de desmogleinas', 'Reducir el corticoide de forma progresiva', 'Profilaxis de osteoporosis y control metabolico']
    },
    {
      nombre: 'Penfigoide ampolloso',
      color: '#5a4a8c',
      definicion: 'Enfermedad ampollosa SUBEPIDERMICA autoinmune, la mas frecuente del grupo, que se presenta de forma clasica con ampollas tensas y prurito intenso, sobre todo en el anciano.',
      fisiopatologia: 'Autoanticuerpos contra BP180 y BP230, dos componentes del hemidesmosoma que anclan la epidermis a la dermis. Al romperse ese anclaje, la ampolla se forma POR DEBAJO de toda la epidermis, y por eso su techo es grueso y la ampolla aguanta tensa. Un dato que ha abierto una linea de investigacion: los titulos de anticuerpos anti BP180 y anti BP230 se han asociado a enfermedades neurologicas como el alzheimer, el parkinson y el ictus, lo que sugiere un componente neuroinflamatorio compartido.',
      epidemiologia: 'La incidencia se estima entre 2 y 30 casos nuevos por millon de habitantes y a&#241;o, y esta aumentando. Sube mucho con la edad: entre 190 y 312 casos nuevos por millon y a&#241;o en los mayores de 80. La edad media de inicio ronda los 60 a&#241;os. El riesgo de muerte es mayor en el anciano con penfigoide que en el anciano sin el.',
      factores_riesgo: ['Edad avanzada', 'Enfermedad neurologica: demencia, ictus, parkinson, esclerosis multiple', 'Psoriasis previa, que suele preceder al penfigoide', 'Diabetes y enfermedad renal cronica', 'Farmacos, entre ellos los inhibidores de la dipeptidil peptidasa 4', 'Apnea obstructiva del sue&#241;o'],
      clinica: 'En la mayoria de los casos empieza como penfigoide cutaneo NO AMPOLLOSO: prurito de leve a moderado con lesiones eccematosas, excoriadas, urticariformes o nodulares, SIN ampollas. Esa fase puede durar de semanas a a&#241;os y es la razon principal del retraso diagnostico. Despues aparece la fase ampollosa, con ampollas tensas de 1 a 4 centimetros, bilaterales, en zonas de flexion de los miembros y tronco inferior. Una parte de los pacientes tiene afectacion mucosa, que hace el control mas dificil.',
      criterios_dx: 'Combinacion de clinica, histologia e inmunopatologia: inmunofluorescencia con deposito lineal en la union dermoepidermica y ELISA de BP180 y BP230. En la mayoria de los casos esa combinacion basta para el diagnostico definitivo.',
      laboratorio: 'Inmunofluorescencia directa de piel perilesional, ELISA de BP180 y BP230, y a veces piel separada con sal para localizar el deposito en el techo de la ampolla. Cuando la inmunofluorescencia y los ELISA salen negativos, el analisis del patron de serracion puede ayudar a identificar la causa de una ampolla subepidermica.',
      imagen: 'No se necesita.',
      complementarios: 'BPDAI para medir actividad y da&#241;o, con su escala de prurito aparte. Indice de toxicidad por glucocorticoides, especialmente pertinente en esta poblacion.',
      dx_diferencial: 'Penfigo (ampolla flacida), dermatitis herpetiforme, epidermolisis ampollosa adquirida, urticaria en la fase preampollosa, eccema y escabiosis, que es el error mas frecuente en la fase de prurito sin ampollas.',
      tx_medico: 'Cuidado de las erosiones, prevencion de la sobreinfeccion y control del prurito, que es lo que mas condiciona la vida del paciente. Y una consideracion que la revision subraya: el tratamiento del anciano exige pensar en su comorbilidad, en la polifarmacia, en los cambios del metabolismo de los farmacos con la edad y en el riesgo a&#241;adido de la inmunosupresion.',
      tx_farmacologico: 'La guia europea recomienda CORTICOIDES TOPICOS DE ALTA POTENCIA como base del tratamiento siempre que sea posible, con prednisona oral a 0.5 mg por kilo y dia como alternativa recomendada. Ante contraindicacion o resistencia a los corticoides, pueden recomendarse metotrexato, azatioprina, micofenolato de mofetilo o acido micofenolico. El uso de doxiciclina y dapsona es CONTROVERTIDO, y pueden recomendarse sobre todo en pacientes con contraindicacion para el corticoide oral. La deplecion de linfocitos B y la inmunoglobulina intravenosa pueden considerarse en casos resistentes. Omalizumab y dupilumab han mostrado resultados prometedores.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: afectacion extensa con inestabilidad o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de infeccion y de los efectos del corticoide, que en el anciano aparecen antes y pesan mas.',
      seguimiento_ambulatorio: 'BPDAI y prurito en cada visita. Revision de la comorbilidad neurologica y de la polifarmacia. Y valorar la retirada de un inhibidor de la dipeptidil peptidasa 4 si lo toma.',
      pronostico: 'Enfermedad cronica con brotes. La mortalidad esta aumentada respecto a la poblacion de la misma edad, en buena parte por la comorbilidad y por el tratamiento.',
      algoritmo: ['Sospechar en el anciano con prurito, aunque no haya ampollas', 'Biopsiar piel PERILESIONAL para inmunofluorescencia directa', 'ELISA de BP180 y BP230', 'Medir con BPDAI y escala de prurito', 'Corticoide topico de alta potencia como base', 'Prednisona 0.5 mg/kg/dia como alternativa', 'Inmunosupresor si hay contraindicacion o resistencia', 'Revisar comorbilidad neurologica y polifarmacia']
    },
    {
      nombre: 'Dermatitis herpetiforme',
      color: '#3f6b52',
      definicion: 'Enfermedad ampollosa subepidermica que es la expresion CUTANEA de la enfermedad celiaca, con lesiones intensamente pruriginosas de distribucion simetrica en superficies de extension.',
      fisiopatologia: 'El gluten desencadena en personas predispuestas una respuesta con inmunoglobulina A frente a la transglutaminasa tisular en el intestino y frente a la transglutaminasa EPIDERMICA en la piel. Los inmunocomplejos se depositan en las papilas dermicas, atraen neutrofilos y forman microabscesos que acaban despegando la epidermis. De ahi el rasgo diagnostico: el deposito GRANULAR de inmunoglobulina A en las papilas dermicas.',
      epidemiologia: 'Segun un metaanalisis reciente, la prevalencia combinada de dermatitis herpetiforme entre los pacientes con enfermedad celiaca se estima en torno al 6.8%, con una prevalencia bruta del 3.0%. Es menor en la celiaquia pediatrica (en torno al 2.6%) que en la del adulto (en torno al 8.6%). La heterogeneidad entre estudios es muy alta, de modo que esas cifras se interpretan como un promedio entre entornos distintos y no como un dato generalizable sin matices.',
      factores_riesgo: ['Enfermedad celiaca', 'Alelos HLA DQ2 y DQ8', 'Antecedente familiar de celiaquia', 'Otras enfermedades autoinmunes, sobre todo tiroideas', 'Sexo masculino, con prevalencia algo mayor en las series que lo desglosan'],
      clinica: 'PRURITO y escozor muy intensos, a menudo desproporcionados para lo que se ve, con papulas y vesiculas agrupadas que el paciente destruye al rascarse: lo que se explora suelen ser EXCORIACIONES y costras, no vesiculas intactas. Distribucion muy caracteristica y SIMETRICA: codos, rodillas, nalgas, region sacra y cuero cabelludo. La mayoria no tiene sintomas digestivos, aunque la enteropatia este presente en la biopsia intestinal.',
      criterios_dx: 'Inmunofluorescencia directa de piel PERILESIONAL con deposito GRANULAR de inmunoglobulina A en las papilas dermicas: es el patron definitorio. Se acompa&#241;a de anticuerpos antitransglutaminasa tisular y antiendomisio.',
      laboratorio: 'Antitransglutaminasa tisular de tipo inmunoglobulina A, antiendomisio, antitransglutaminasa epidermica, y cuantificacion de inmunoglobulina A total para no interpretar mal un resultado negativo en un paciente con deficit de IgA. Estudio de HLA DQ2 y DQ8 en casos dudosos.',
      imagen: 'No se necesita. La endoscopia con biopsias duodenales se valora dentro del estudio de la celiaquia.',
      complementarios: 'Cribado de deficits por malabsorcion: hierro, folato, vitamina B12 y vitamina D. Y funcion tiroidea, por la asociacion autoinmune.',
      dx_diferencial: 'Escabiosis (el error mas frecuente por el prurito intenso), eccema, penfigoide ampolloso en su fase excoriada, prurigo nodular y dermatosis por inmunoglobulina A lineal.',
      tx_medico: 'DIETA SIN GLUTEN estricta y de por vida, que es el unico tratamiento que act&uacute;a sobre la causa y que trata a la vez la enteropatia. Requiere apoyo de nutricion, porque una dieta sin gluten mal hecha tiene sus propios problemas. La mejoria cutanea con la dieta tarda MESES, y ese desfase hay que explicarlo o el paciente abandona.',
      tx_farmacologico: 'DAPSONA para el control rapido del prurito, que suele responder en dias. No trata la enteropatia, de modo que no sustituye a la dieta sino que la acompa&#241;a mientras esta hace efecto. Antes de iniciarla hay que determinar la glucosa-6-fosfato deshidrogenasa, y despues vigilar la hemolisis y la metahemoglobinemia.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso.',
      seguimiento_ambulatorio: 'Vigilancia de la adherencia a la dieta, de los deficits nutricionales y de la tolerancia a la dapsona con hemograma seriado. Seguimiento conjunto con digestivo y con nutricion.',
      pronostico: 'Excelente con dieta estricta, que permite reducir y a menudo retirar la dapsona. La adherencia de por vida es el reto real.',
      algoritmo: ['Sospechar ante prurito intenso con excoriaciones simetricas', 'Biopsiar piel PERILESIONAL para inmunofluorescencia directa', 'Buscar deposito GRANULAR de IgA en papilas', 'Serologia de celiaquia con IgA total', 'Determinar glucosa-6-fosfato deshidrogenasa antes de la dapsona', 'Dieta sin gluten estricta con apoyo de nutricion', 'Dapsona para el prurito mientras la dieta hace efecto', 'Cribar deficits nutricionales y funcion tiroidea']
    },
    {
      nombre: 'Penfigo paraneoplasico',
      color: '#7a3a6b',
      definicion: 'Enfermedad autoinmune rara con afectacion mucocutanea y MULTIORGANICA, asociada a una neoplasia, tambien llamada sindrome autoinmune multiorganico paraneoplasico.',
      fisiopatologia: 'La neoplasia desencadena una respuesta autoinmune contra varias proteinas de la familia de las plaquinas, entre ellas la ENVOPLAQUINA, y contra otros antigenos. El ataque no se limita a la piel: alcanza el epitelio respiratorio, y de ahi la bronquiolitis obliterante que marca buena parte de su mortalidad.',
      epidemiologia: 'Se asocia de forma tipica a procesos LINFOPROLIFERATIVOS o hematologicos, y con menos frecuencia a tumores solidos. La mortalidad es elevada por el riesgo de infecciones graves y por las complicaciones asociadas, en particular la bronquiolitis obliterante.',
      factores_riesgo: ['Neoplasia linfoproliferativa conocida', 'Leucemia linfocitica cronica y linfoma no hodgkiniano', 'Enfermedad de Castleman', 'Timoma', 'Tumores solidos, con menos frecuencia'],
      clinica: 'MUCOSITIS cronica y GRAVE, que es la caracteristica que mas orienta: erosiones orales intratables, con frecuencia con afectacion conjuntival y genital. Las lesiones cutaneas son POLIMORFAS y pueden parecerse a un penfigo, a un penfigoide, a un liquen plano o a un eritema multiforme, lo que confunde el diagnostico. La mucositis que no responde a nada es la se&#241;al de alarma.',
      criterios_dx: 'La guia europea recomienda una valoracion completa con estudio histopatologico e investigaciones inmunopatologicas: inmunofluorescencia directa e indirecta, ELISA y, donde este disponible, inmunoblot o inmunoprecipitacion. El hallazgo mas ESPECIFICO es la deteccion de anticuerpos anti envoplaquina o de anticuerpos circulantes que se unen al EPITELIO DE VEJIGA DE RATA en la inmunofluorescencia indirecta, en un paciente con clinica y antecedentes compatibles.',
      laboratorio: 'Inmunofluorescencia directa e indirecta (con sustrato de vejiga de rata), ELISA, inmunoblot o inmunoprecipitacion donde existan. Hemograma, frotis y estudio hematologico dirigido.',
      imagen: 'Tomografia toracoabdominal buscando la neoplasia. Pruebas de funcion respiratoria para detectar bronquiolitis obliterante.',
      complementarios: 'Valoracion oftalmologica y odontologica por la afectacion mucosa. La guia europea recomienda un abordaje MULTIDISCIPLINAR con neumologia, oftalmologia y oncohematologia.',
      dx_diferencial: 'Penfigo vulgar, penfigoide de mucosas, liquen plano erosivo, eritema multiforme mayor, necrolisis epidermica toxica y enfermedad injerto contra huesped.',
      tx_medico: 'Tratamiento de la neoplasia subyacente y soporte, con especial atencion a la nutricion por la mucositis y a la prevencion de infecciones.',
      tx_farmacologico: 'La guia europea recomienda corticoides sistemicos hasta 1.5 mg por kilo y dia como primera opcion. Recomienda RITUXIMAB en los pacientes con penfigo paraneoplasico secundario a procesos linfoproliferativos, y se&#241;ala que tambien puede considerarse en los casos asociados a tumores solidos.',
      tx_intervencionista: 'Tratamiento oncologico o hematologico de la neoplasia, que es la base de todo.',
      criterios_uci: 'Insuficiencia respiratoria por bronquiolitis obliterante, o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia respiratoria estrecha y busqueda activa de infeccion.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con oncohematologia, neumologia y oftalmologia. La guia europea advierte de que los criterios diagnosticos y las recomendaciones terapeuticas necesitan validacion con estudios prospectivos.',
      pronostico: 'Elevada mortalidad, por infecciones graves y por complicaciones asociadas, sobre todo la bronquiolitis obliterante.',
      algoritmo: ['Sospechar ante mucositis grave y refractaria', 'Lesiones cutaneas polimorfas refuerzan la sospecha', 'Inmunofluorescencia indirecta sobre vejiga de rata', 'Buscar anticuerpos anti envoplaquina', 'Buscar la neoplasia, sobre todo linfoproliferativa', 'Pruebas de funcion respiratoria', 'Corticoide sistemico y rituximab', 'Manejo multidisciplinar']
    },
    {
      nombre: 'El diagnostico inmunologico: como se confirma',
      color: '#8a5a2e',
      definicion: 'Conjunto de tecnicas que identifican el autoanticuerpo y su localizacion, y que son las que realmente dan el diagnostico en este grupo de enfermedades.',
      fisiopatologia: 'No aplica. Pero conviene entender el fundamento: la inmunofluorescencia DIRECTA busca lo que ya esta depositado en la piel del paciente, y la INDIRECTA busca anticuerpos circulantes en su suero enfrentandolos a un sustrato. Son preguntas distintas y se complementan.',
      epidemiologia: 'No aplica.',
      factores_riesgo: ['Sospecha clinica de enfermedad ampollosa autoinmune', 'Ampollas que no encajan con una causa mecanica, infecciosa o por farmacos', 'Prurito persistente en el anciano sin causa aclarada', 'Erosiones orales cronicas sin explicacion', 'Eccema o urticaria que no responde y que podria ser una fase preampollosa'],
      clinica: 'El error tecnico que mas resultados arruina es tomar la biopsia de dentro de la ampolla. La inmunofluorescencia directa se toma de piel PERILESIONAL sana, porque dentro de la ampolla el tejido esta destruido y los inmunorreactantes se han degradado.',
      criterios_dx: 'El PATRON del deposito es lo que diagnostica. Deposito en red o en panal entre queratinocitos: penfigo. Deposito lineal en la union dermoepidermica: penfigoide. Deposito granular de inmunoglobulina A en las papilas: dermatitis herpetiforme.',
      laboratorio: 'Inmunofluorescencia directa e indirecta, ELISA de desmogleinas para el penfigo y de BP180 y BP230 para el penfigoide, y serologia de celiaquia para la dermatitis herpetiforme. La piel separada con sal localiza el deposito en el techo o en el suelo de la ampolla, y el analisis del patron de serracion ayuda cuando la inmunofluorescencia y los ELISA salen negativos.',
      imagen: 'No aplica.',
      complementarios: 'Dos o mas biopsias cuando el diagnostico es dudoso: una de lesion para histologia y otra de piel perilesional para inmunofluorescencia. No es lo mismo y no se puede sustituir una por la otra.',
      dx_diferencial: 'Ampolla por friccion, quemadura, picadura, infeccion (impetigo ampolloso, herpes), farmacos y porfiria cutanea tarda, que se distinguen por la historia y por la ausencia de deposito inmunitario.',
      tx_medico: 'No aplica.',
      tx_farmacologico: 'El corticoide topico o sistemico reciente puede negativizar o atenuar los hallazgos: conviene tomar la muestra antes de tratar siempre que sea posible.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Los titulos de anticuerpos sirven para seguir la actividad: las desmogleinas en el penfigo, y los anti BP180 en el penfigoide. Una subida del titulo puede anticipar una recaida clinica.',
      pronostico: 'No aplica.',
      algoritmo: ['Decidir el nivel por la clinica: flacida o tensa', 'Biopsia de LESION para histologia', 'Biopsia de piel PERILESIONAL para inmunofluorescencia directa', 'Leer el PATRON del deposito, no la intensidad', 'ELISA segun la sospecha', 'Piel separada con sal si hace falta localizar mejor', 'Repetir si el resultado no encaja con la clinica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El internista se encuentra estas enfermedades de tres formas: un anciano con prurito que lleva meses tratado como eccema, un paciente con erosiones orales que no come, y un paciente ya diagnosticado que ingresa por una complicacion del tratamiento.',
    parametros: [
      'Si vas a biopsiar, hazlo BIEN: una muestra de lesion para histologia y otra de piel PERILESIONAL para inmunofluorescencia directa. Tomarla de dentro de la ampolla arruina el resultado.',
      'Toma la muestra ANTES de empezar el corticoide siempre que sea posible, porque el tratamiento atenua los hallazgos.',
      'Anciano con prurito intenso sin causa clara: el penfigoide empieza SIN ampollas, y ese es el motivo principal de su retraso diagnostico. Antes, descarta escabiosis.',
      'Erosiones orales que impiden comer: vigila el peso y la nutricion, que se pasan por alto mientras se discute el diagnostico.',
      'Mucositis grave y refractaria con lesiones cutaneas polimorfas: piensa en penfigo paraneoplasico y busca una neoplasia hematologica.',
      'En el paciente en tratamiento, la complicacion mas probable es INFECCIOSA: inmunosupresion mas barrera cutanea rota.',
      'Revisa si toma un inhibidor de la dipeptidil peptidasa 4, que se ha asociado a penfigoide ampolloso.'
    ],
    criterios_uci_general: 'Afectacion extensa con perdidas hidroelectroliticas o sepsis; insuficiencia respiratoria por bronquiolitis obliterante en el penfigo paraneoplasico.',
    criterios_tips_general: 'No aplica en estas enfermedades.',
    criterios_trasplante_general: 'No aplica en estas enfermedades.',
    prevencion: 'Vacunacion actualizada ANTES de iniciar inmunosupresion, profilaxis de osteoporosis y control metabolico en quien recibe corticoide prolongado, estudio previo al rituximab (electrocardiograma, hepatitis B y cribado de tuberculosis), medicion de la toxicidad acumulada del corticoide, y en la dermatitis herpetiforme, dieta sin gluten de por vida con apoyo de nutricion.'
  }
};

export const compCites = {
  'Penfigo vulgar y foliaceo: reconocerlo': { laboratorio: [1] },
  'Penfigo: tratamiento y seguimiento': { laboratorio: [1], complementarios: [1], tx_farmacologico: [1] },
  'Penfigoide ampolloso': { epidemiologia: [3], fisiopatologia: [3], clinica: [3], criterios_dx: [3], tx_farmacologico: [2], complementarios: [3], tx_medico: [3] },
  'Dermatitis herpetiforme': { epidemiologia: [5] },
  'Penfigo paraneoplasico': { criterios_dx: [4], tx_farmacologico: [4], complementarios: [4], seguimiento_ambulatorio: [4] },
  'El diagnostico inmunologico: como se confirma': { laboratorio: [3] }
};

export const estigmasTitulo = 'Signos de exploracion que orientan el nivel';
export const estigmas = [
  { nombre: 'Signo de Nikolsky', descripcion: 'La piel sana perilesional se despega al frotarla. Indica falta de cohesion entre queratinocitos y apunta a una ampolla INTRAEPIDERMICA, es decir, a penfigo.' },
  { nombre: 'Signo de Asboe-Hansen', descripcion: 'Al presionar sobre una ampolla intacta, esta se extiende lateralmente en vez de romperse. Es la otra cara del mismo fenomeno: el liquido diseca un plano sin cohesion.' },
  { nombre: 'Ampolla tensa que aguanta', descripcion: 'Su techo es TODA la epidermis, de modo que resiste. Indica una ampolla subepidermica: penfigoide y sus parientes. Una ampolla intacta de varios centimetros casi nunca es un penfigo.' },
  { nombre: 'Erosiones orales cronicas', descripcion: 'En muchos pacientes el penfigo vulgar empieza por la boca y puede tardar meses en dar lesiones cutaneas. Una erosion oral que no cura en semanas merece que se piense en esto.' },
  { nombre: 'Excoriaciones simetricas en extension', descripcion: 'Codos, rodillas, nalgas y region sacra, con prurito desproporcionado y casi sin vesiculas intactas porque el paciente las destruye al rascarse: es el patron de la dermatitis herpetiforme.' },
  { nombre: 'Fase preampollosa del penfigoide', descripcion: 'Prurito con lesiones eccematosas, urticariformes o nodulares SIN ampollas, en un anciano. Puede durar de semanas a a&#241;os y es la razon principal del retraso diagnostico.' }
];

export const biopsiaTitulo = 'Biopsia: dos muestras y de donde se toma cada una';
export const biopsia = {
  indicaciones: [
    'Toda sospecha de enfermedad ampollosa autoinmune, sin excepcion',
    'Prurito persistente en el anciano sin causa aclarada, buscando penfigoide preampolloso',
    'Erosiones orales cronicas sin explicacion',
    'Eccema o urticaria que no responde y que podria ser una fase preampollosa',
    'Ampollas que no encajan con causa mecanica, infecciosa o por farmacos'
  ],
  ventajas: [
    'La inmunofluorescencia DIRECTA da el diagnostico: el patron del deposito identifica la enfermedad',
    'La histologia localiza el nivel de la ampolla y el tipo de infiltrado',
    'La piel separada con sal precisa si el deposito esta en el techo o en el suelo de la ampolla',
    'El analisis del patron de serracion ayuda cuando la inmunofluorescencia y los ELISA son negativos'
  ],
  limitaciones: [
    'La inmunofluorescencia se toma de piel PERILESIONAL: dentro de la ampolla el resultado sale falsamente negativo',
    'El corticoide topico o sistemico reciente atenua o negativiza los hallazgos',
    'Hacen falta DOS muestras: una de lesion para histologia y otra perilesional para inmunofluorescencia',
    'La histologia sola no distingue entre las distintas ampollosas subepidermicas'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion',
    'Evitar tomar la muestra de una zona ya sobreinfectada o de una ampolla rota',
    'En mucosa oral, elegir un borde de erosion y no el centro'
  ]
};

export const escalaRefs = { 'Nivel de la ampolla (calculadora disponible)': [1, 3], 'Lectura de la inmunofluorescencia (calculadora disponible)': [3], 'BPDAI (calculadora disponible)': [3], 'ABSIS': [3], 'Perfil de desmogleinas': [1], 'Indice de toxicidad por glucocorticoides': [3] };

export const escalaCalc = {
  'Nivel de la ampolla (calculadora disponible)': 'nivel-ampolla',
  'Lectura de la inmunofluorescencia (calculadora disponible)': 'inmunofluorescencia',
  'BPDAI (calculadora disponible)': 'bpdai'
};

export const compGroups = [
  { title: 'Intraepidermicas', items: ['Penfigo vulgar y foliaceo: reconocerlo', 'Penfigo: tratamiento y seguimiento', 'Penfigo paraneoplasico'] },
  { title: 'Subepidermicas', items: ['Penfigoide ampolloso', 'Dermatitis herpetiforme'] },
  { title: 'Como se confirma', items: ['El diagnostico inmunologico: como se confirma'] }
];

export const complicacionesIntro = 'Las fichas siguen la pregunta que ordena el tema: a que altura se forma la ampolla. Las tres primeras son intraepidermicas, es decir, penfigo: reconocerlo, tratarlo, y la forma paraneoplasica, que es rara pero cuya se&#241;al (una mucositis que no responde a nada) hay que tener en la cabeza. Las dos siguientes son subepidermicas: el penfigoide, que es la mas frecuente del grupo y cuya fase inicial SIN ampollas explica meses de retraso, y la dermatitis herpetiforme, que en realidad es celiaquia. La ultima es la parte tecnica que decide si todo lo anterior sirve de algo: como se toma y como se lee la inmunofluorescencia.';

export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Fichas' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'AMPOLLA AUTOINMUNE', color: '#4a5a8c', target: 'definicion' },
  branches: [
    { title: 'Intraepidermica', sub: 'FLACIDA &middot; Nikolsky positivo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Penfigo vulgar', sub: 'Desmogleina 3 &middot; empieza en la boca', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Penfigo foliaceo', sub: 'Desmogleina 1 &middot; respeta mucosas', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Paraneoplasico', sub: 'Mucositis refractaria &middot; buscar tumor', color: '#7a3a6b', target: 'complicaciones' }
    ] },
    { title: 'Subepidermica', sub: 'TENSA &middot; el techo aguanta', color: '#5a4a8c', target: 'complicaciones', leaves: [
      { title: 'Penfigoide ampolloso', sub: 'BP180 y BP230 &middot; anciano', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Dermatitis herpetiforme', sub: 'IgA granular &middot; celiaquia', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 3, 4], no_invasivos: [3], imagen: [4] };
export const clasificacionCite = [1, 3];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['mapa-ampollosas'];
export const figurasClasificacion = ['inmunofluorescencia-patrones', 'penfigoide-escalones'];

export const figuras = {
  'mapa-ampollosas': {
    titulo: 'El mapa: nivel, diana y clinica',
    fuente: 'Guias indias de penfigo (De D, et al. Indian Dermatol Online J 2024;16(1):3-24), S2k de penfigoide (Borradori L, et al. JEADV 2022;36(10):1689-1704) y de penfigo paraneoplasico (Antiga E, et al. JEADV 2023;37(6):1118-1134).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Enfermedad</th><th>Nivel</th><th>Diana</th><th>Ampolla</th><th>Mucosas</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Penfigo vulgar</td><td>Intraepidermica (suprabasal)</td><td>Desmogleina 3, o 3 y 1</td><td><span class="figure-tag fail">Flacida</span></td><td>Si, a menudo <strong>primero</strong></td></tr>
            <tr><td class="figure-org">Penfigo foliaceo</td><td>Intraepidermica (subcornea)</td><td>Desmogleina 1</td><td><span class="figure-tag fail">Flacida</span></td><td><strong>No</strong></td></tr>
            <tr><td class="figure-org">Penfigo paraneoplasico</td><td>Intraepidermica y mas</td><td>Plaquinas (envoplaquina)</td><td>Polimorfa</td><td><strong>Mucositis grave</strong></td></tr>
            <tr><td class="figure-org">Penfigoide ampolloso</td><td>Subepidermica</td><td>BP180 y BP230</td><td><span class="figure-tag dys">Tensa</span></td><td>A veces</td></tr>
            <tr><td class="figure-org">Dermatitis herpetiforme</td><td>Subepidermica</td><td>Transglutaminasa epidermica</td><td>Vesiculas, casi siempre rotas</td><td>No</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La regla que resuelve la mayoria de los casos a pie de cama: <strong>flacida es penfigo, tensa es penfigoide</strong>, y la razon es puramente mecanica. En el penfigo la ampolla esta DENTRO de la epidermis y su techo es una lamina finisima que se rompe al menor roce, de modo que lo que se ve son erosiones; en el penfigoide la ampolla esta DEBAJO de toda la epidermis, que hace de techo grueso y aguanta. El perfil de desmogleinas explica ademas por que el foliaceo respeta las mucosas: la desmogleina 1 predomina en la piel y la 3 en la mucosa.</div>`
  },
  'inmunofluorescencia-patrones': {
    titulo: 'Inmunofluorescencia: el patron es el diagnostico',
    fuente: 'Werth VP, et al. Bullous pemphigoid burden of disease, management and unmet therapeutic needs. JEADV 2024;39(2):290-300 (doi:10.1111/jdv.20313), y guias indias de penfigo 2024.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Patron en la inmunofluorescencia directa</th><th>Diagnostico</th><th>Confirmacion serica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Deposito en RED o en panal entre los queratinocitos</td><td>Penfigo</td><td>ELISA de desmogleina 1 y 3</td></tr>
            <tr><td class="figure-org">Deposito LINEAL en la union dermoepidermica</td><td>Penfigoide ampolloso</td><td>ELISA de BP180 y BP230</td></tr>
            <tr><td class="figure-org">Deposito GRANULAR de IgA en las papilas dermicas</td><td>Dermatitis herpetiforme</td><td>Antitransglutaminasa y antiendomisio</td></tr>
            <tr><td class="figure-org">Union a EPITELIO DE VEJIGA DE RATA (indirecta)</td><td><span class="figure-tag fail">Penfigo paraneoplasico</span></td><td>Anticuerpos anti envoplaquina</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box"><strong>El error tecnico que arruina mas resultados:</strong> tomar la biopsia de dentro de la ampolla. La inmunofluorescencia directa se toma de piel <strong>PERILESIONAL</strong> sana, porque dentro de la ampolla el tejido esta destruido y los inmunorreactantes degradados. Hacen falta <strong>dos muestras</strong>: una de lesion para histologia y otra perilesional para inmunofluorescencia. Y conviene tomarlas ANTES de empezar el corticoide, que atenua los hallazgos. Si la inmunofluorescencia y los ELISA salen negativos ante una ampolla subepidermica, quedan la piel separada con sal (que localiza el deposito en el techo o en el suelo) y el analisis del patron de serracion.</div>`
  },
  'penfigoide-escalones': {
    titulo: 'Penfigoide ampolloso: tratamiento y lo que viene',
    fuente: 'S2k de la EADV para el penfigoide ampolloso (Borradori L, et al. JEADV 2022;36(10):1689-1704, doi:10.1111/jdv.18220) y Werth VP, et al. JEADV 2024;39(2):290-300.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalon</th><th>Que recomienda la guia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Base</td><td><strong>Corticoides topicos de alta potencia</strong>, siempre que sea posible</td></tr>
            <tr><td class="figure-org">Alternativa</td><td><strong>Prednisona oral 0.5 mg/kg/dia</strong></td></tr>
            <tr><td class="figure-org">Contraindicacion o resistencia al corticoide</td><td>Metotrexato, azatioprina, micofenolato de mofetilo o acido micofenolico</td></tr>
            <tr><td class="figure-org">Controvertido</td><td>Doxiciclina y dapsona, sobre todo si hay contraindicacion para el corticoide oral</td></tr>
            <tr><td class="figure-org">Resistente</td><td>Deplecion de linfocitos B e inmunoglobulina intravenosa</td></tr>
            <tr><td class="figure-org">Prometedores</td><td>Omalizumab y dupilumab</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Por que esta enfermedad se trata distinto de lo que uno esperaria: afecta sobre todo a <strong>ancianos</strong> (edad media de inicio en torno a 60 a&#241;os, y de 190 a 312 casos nuevos por millon y a&#241;o por encima de los 80), con mucha comorbilidad, polifarmacia y cambios del metabolismo de los farmacos. Por eso el corticoide TOPICO potente encabeza el tratamiento en vez del oral, y por eso existe un indice para medir la toxicidad acumulada del glucocorticoide. Entre los biologicos en estudio, el <strong>benralizumab</strong> se termino por falta de eficacia y un ensayo de <strong>ixekizumab</strong> no alcanzo su objetivo principal; el <strong>dupilumab</strong> tiene ensayos en fase 3 en marcha y el <strong>efgartigimod</strong> tambien. Conviene saber que la revision que resume estos datos esta financiada por dos fabricantes.</div>`
  }
};
