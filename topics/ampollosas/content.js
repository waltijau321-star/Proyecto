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
  subtitulo: 'Módulo 76 &middot; Dermatología',
  accent: '#4a5a8c',
  accentDim: '#6a7aa8'
};

export const definicionText = `<p style="margin:0 0 14px;">Las enfermedades ampollosas autoinmunes son un grupo en el que <strong>autoanticuerpos contra las proteínas de adhesión de la piel</strong> rompen la unión entre células o entre la epidermis y la dermis. Todo el tema se ordena con una sola pregunta: <strong>¿a que altura se forma la ampolla?</strong></p>
<p style="margin:0 0 14px;">Si es <strong>intraepidérmica</strong>, el ataque va contra las desmogleínas de los desmosomas, la ampolla es <strong>flácida</strong> porque tiene un techo finisimo, se rompe enseguida y lo que se ve son EROSIONES con el signo de Nikolsky positivo: eso es el <strong>pénfigo</strong>. Si es <strong>subepidérmica</strong>, el ataque va contra las proteínas del hemidesmosoma de la unión dermoepidérmica, el techo es toda la epidermis y por eso la ampolla es <strong>tensa</strong> y aguanta: eso es el <strong>penfigoide</strong> y sus parientes.</p>
<p style="margin:0 0 14px;">Dos ideas prácticas. La primera: la confirmación no es la histología sino la <strong>inmunofluorescencia directa</strong>, y para que sirva la biopsia tiene que tomarse de piel <strong>perilesional</strong>, no de la ampolla. La segunda: son enfermedades de perfiles muy distintos. El pénfigo afecta a adultos de mediana edad y empieza con frecuencia por la <strong>boca</strong>; el penfigoide afecta a ancianos, se asocia a enfermedad neurológica y suele tener una <strong>fase previa sin ampollas</strong> que retrasa el diagnóstico durante meses.</p>`;

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
      tituloB: 'Datos que reorientan el diagnóstico',
      compensada: 'AMPOLLA FLÁCIDA que se rompe con facilidad y deja erosiones dolorosas, con signo de Nikolsky positivo: es intraepidérmica, y eso es PÉNFIGO. El vulgar empieza con frecuencia por la BOCA, y el paciente puede pasar meses con erosiones orales dolorosas antes de tener nada en la piel; el foliaceo respeta las mucosas y da erosiones costrosas en áreas seborreicas. AMPOLLA TENSA de 1 a 4 centimetros que aguanta intacta sobre base urticariforme, en un paciente mayor y con PRURITO intenso: es subepidérmica, y eso es PENFIGOIDE. Sus lesiones son bilaterales y predominan en las zonas de flexión de los miembros y en el tronco inferior.',
      descompensada: 'Datos que obligan a replantear: MUCOSITIS grave y refractaria con lesiones cutáneas polimorfas, que apunta a pénfigo PARANEOPLÁSICO y obliga a buscar una neoplasia hematológica; prurito intenso con lesiones excoriadas SIMÉTRICAS en codos, rodillas y nalgas en un adulto joven, que sugiere dermatitis herpetiforme y celiaquía; ampollas en zonas de traumatismo con quistes de milio y cicatrices, que orienta a epidermolisis ampollosa adquirida; y en el anciano con prurito de meses sin ampollas, no descartar penfigoide, porque su fase inicial NO tiene ampollas y es la razón principal del retraso diagnóstico.'
    },
    laboratorio: [
      { prueba: 'Inmunofluorescencia DIRECTA sobre piel perilesional', utilidad: 'Es LA prueba. Hay que tomarla de piel perilesional sana, no de la ampolla, porque dentro de la ampolla el tejido esta destruido y el resultado sale falsamente negativo. Muestra el depósito de inmunoglobulinas y complemento, y su PATRÓN dice de que enfermedad se trata.' },
      { prueba: 'Inmunofluorescencia INDIRECTA en suero', utilidad: 'Detecta autoanticuerpos circulantes sobre sustratos como esófago de mono o piel humana. En el pénfigo paraneoplásico, la unión a EPITELIO DE VEJIGA DE RATA es el hallazgo más específico y es la prueba que más orienta cuando se sospecha.' },
      { prueba: 'ELISA de desmogleína 1 y 3', utilidad: 'Confirma el pénfigo y permite seguir la actividad. El perfil separa las formas: desmogleína 3 en el vulgar mucoso, desmogleína 1 y 3 en el mucocutáneo, y desmogleína 1 sola en el foliaceo. Las guías indias lo usan también para valorar la falta de respuesta, predecir recaída y planificar las dosis de mantenimiento de rituximab.' },
      { prueba: 'ELISA de BP180 y BP230', utilidad: 'Confirma el penfigoide ampolloso. Junto con la inmunofluorescencia, basta para el diagnóstico definitivo en la mayoría de los casos.' },
      { prueba: 'Anticuerpos de celiaquía', utilidad: 'Antitransglutaminasa tisular y antiendomisio en la dermatitis herpetiforme, que es la expresión cutánea de la enfermedad celíaca. También antitransglutaminasa epidérmica, que es el autoantigeno cutáneo.' },
      { prueba: 'Citología de Tzanck', utilidad: 'Prueba a pie de cama, rápida y barata, que muestra células acantoliticas en el pénfigo. Las guías indias la contemplan como diagnóstico de trabajo inicial donde haya medios, con una positividad comunicada en torno al 71%. No sustituye a la inmunofluorescencia.' },
      { prueba: 'Estudio previo al rituximab', utilidad: 'Las guías indias piden electrocardiograma y anticuerpo del core de la hepatitis B antes del rituximab, ecocardiograma si hay cardiopatía conocida o alteración del electrocardiograma, y cribado de tuberculosis para los corticoides y los adyuvantes no rituximab.' },
      { prueba: 'Búsqueda de neoplasia', utilidad: 'Ante sospecha de pénfigo paraneoplásico: hemograma, frotis, tomografía y estudio hematológico, porque la asociación más frecuente es con procesos linfoproliferativos.' }
    ],
    no_invasivos: [
      { metodo: 'Nivel de la ampolla (calculadora disponible)', interpretacion: 'Cruza la tensión de la ampolla, el signo de Nikolsky, la edad y la afectación de mucosas para orientar entre intraepidérmica y subepidérmica.', cutoff: 'Flácida y Nikolsky positivo: intraepidérmica' },
      { metodo: 'Lectura de la inmunofluorescencia (calculadora disponible)', interpretacion: 'Traduce el patrón del depósito y el resultado de los ELISA a un diagnóstico concreto.', cutoff: 'El patrón, no la intensidad, es lo que diagnóstica' },
      { metodo: 'BPDAI (calculadora disponible)', interpretacion: 'Índice de área de enfermedad del penfigoide ampolloso. Punt&uacute;a ampollas y erosiones cutáneas, eritema y urticaria, y lesiones mucosas.', cutoff: 'Leve 19 o menos; moderado de 20 a 56; grave 57 o más' },
      { metodo: 'Comprobacion previa al rituximab (calculadora disponible)', interpretacion: 'Repasa el estudio que las guías piden antes de la primera infusión.', cutoff: 'Electrocardiograma, hepatitis B y cribado de tuberculosis' },
      { metodo: 'Signo de Nikolsky y signo de Asboe-Hansen', interpretacion: 'El primero: la piel sana perilesional se despega al frotarla. El segundo: al presionar una ampolla intacta, esta se extiende lateralmente.', cutoff: 'Ambos indican falta de cohesión, típica del pénfigo' },
      { metodo: 'Piel separada con sal (salt-split skin)', interpretacion: 'Separa artificialmente la epidermis de la dermis para localizar con precisión donde se depositan los inmunorreactantes: en el techo o en el suelo de la ampolla.', cutoff: 'Depósito en el TECHO: penfigoide ampolloso' }
    ],
    imagen: [
      { modalidad: 'No se necesita imagen para el diagnóstico', hallazgos: 'Estas enfermedades se diagnostican con biopsia e inmunologia, no con imagen.' },
      { modalidad: 'Tomografía toracoabdominal', hallazgos: 'Ante sospecha de pénfigo paraneoplásico, buscando la neoplasia subyacente, sobre todo linfoproliferativa.' },
      { modalidad: 'Pruebas de función respiratoria', hallazgos: 'En el pénfigo paraneoplásico, para detectar BRONQUIOLITIS OBLITERANTE, que es una de las causas de mortalidad y que puede progresar de forma silenciosa.' },
      { modalidad: 'Densitometría ósea', hallazgos: 'En todo paciente que va a recibir corticoide sistémico prolongado, que es la norma en estas enfermedades.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifican por el <strong>nivel</strong> de la ampolla y por la <strong>diana</strong> del autoanticuerpo. <strong>Intraepidérmicas</strong>: pénfigo vulgar (desmogleína 3, o 3 y 1), pénfigo foliaceo (desmogleína 1) y pénfigo paraneoplásico (varias plaquinas, entre ellas la envoplaquina). <strong>Subepidérmicas</strong>: penfigoide ampolloso (BP180 y BP230), dermatitis herpetiforme (transglutaminasa epidérmica) y epidermolisis ampollosa adquirida (colágeno VII). Y después se gradua la <strong>actividad</strong>, que en el penfigoide se mide con el BPDAI y en el pénfigo con el PDAI.`,
    escalas: [
      { nombre: 'Nivel de la ampolla (calculadora disponible)', componentes: 'Tensión de la ampolla, signo de Nikolsky, edad del paciente, afectación de mucosas y aspecto de las lesiones.', formula: 'Combinación de esos datos clínicos.', interpretacion: 'La ampolla FLÁCIDA con Nikolsky positivo es intraepidérmica porque su techo es solo una parte de la epidermis y se rompe enseguida; la TENSA es subepidérmica porque el techo es toda la epidermis. Es la primera y más rentable separación del tema, y se hace sin ninguna prueba.' },
      { nombre: 'Lectura de la inmunofluorescencia (calculadora disponible)', componentes: 'Patrón del depósito en la inmunofluorescencia directa, resultado de los ELISA y hallazgos de la indirecta.', formula: 'Correspondencia patrón-enfermedad.', interpretacion: 'El depósito en RED o en panal entre los queratinocitos es pénfigo; el depósito LINEAL en la unión dermoepidérmica es penfigoide; y el depósito GRANULAR de inmunoglobulina A en las papilas dérmicas es dermatitis herpetiforme. El patrón es lo que diagnóstica, no la intensidad.' },
      { nombre: 'BPDAI (calculadora disponible)', componentes: 'Tres apartados de actividad de hasta 120 puntos cada uno: ampollas y erosiones cutáneas, eritema y urticaria cutáneos, y lesiones mucosas. Más una puntuación de daño de 0 a 12 y una escala separada de prurito.', formula: 'Actividad de 0 a 360 y daño de 0 a 12, con ponderación según las zonas afectadas.', interpretacion: 'Leve 19 o menos; moderado de 20 a 56; grave 57 o más. Un empeoramiento relevante son 3 puntos más y una mejoría relevante, 4 puntos menos. La puntuación de prurito va aparte porque el picor es lo que más condiciona la vida del paciente.' },
      { nombre: 'ABSIS', componentes: 'Superficie afectada por ampollas y erosiones calculada con la regla de los nueves, con un factor de ponderación por la fase de la lesión.', formula: 'Rango de 0 a 206.', interpretacion: 'Alternativa al BPDAI. Usa la misma regla que se emplea en quemados, lo que la hace familiar para quien viene de medicina interna o de críticos.' },
      { nombre: 'Perfil de desmogleínas', componentes: 'Anticuerpos frente a desmogleína 1 y frente a desmogleína 3 medidos por ELISA.', formula: 'Presencia y título de cada uno.', interpretacion: 'Explica la clínica: la desmogleína 3 predomina en mucosas y la 1 en piel. Por eso el pénfigo vulgar mucoso solo tiene anticuerpos frente a la 3, el mucocutáneo frente a las dos, y el foliaceo solo frente a la 1 y respeta las mucosas. Es de los pocos sitios de la dermatología donde el autoantigeno explica de forma tan directa donde salen las lesiones.' },
      { nombre: 'Índice de toxicidad por glucocorticoides', componentes: 'Nueve dominios en un cuestionario de 31 ítems.', formula: 'Puntuación de mejoría acumulada y de empeoramiento acumulado.', interpretacion: 'Existe porque en estas enfermedades el corticoide prolongado hace tanto daño como la propia enfermedad, sobre todo en el anciano con penfigoide. Medir esa toxicidad es parte del tratamiento, no un extra.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Pénfigo vulgar y foliaceo: reconocerlo',
      color: '#8c3a34',
      definicion: 'Enfermedades ampollosas INTRAEPIDÉRMICAS producidas por autoanticuerpos contra las desmogleínas de los desmosomas, con pérdida de cohesión entre queratinocitos (acantólisis).',
      fisiopatologia: 'Los autoanticuerpos de tipo inmunoglobulina G se unen a la desmogleína 1 o a la 3 e impiden la adhesión entre queratinocitos. El resultado es la ACANTÓLISIS: las células se separan y se forma una ampolla dentro de la epidermis, con un techo finisimo que se rompe al menor roce. La distribución de cada desmogleína en el cuerpo explica la clínica: la desmogleína 3 predomina en las mucosas y la 1 en la piel, de modo que el perfil de anticuerpos predice donde saldran las lesiones.',
      epidemiologia: 'Afecta sobre todo a adultos de mediana edad. El pénfigo vulgar es más frecuente que el foliaceo en la mayoría de las series. Sin tratamiento, el pénfigo vulgar tenia una mortalidad muy alta antes de los corticoides.',
      factores_riesgo: ['Determinados alelos HLA de clase II', 'Origen judio askenazi o mediterráneo, en el vulgar', 'Fármacos con grupo tiol, como la penicilamina y el captopril', 'Edad media de la vida', 'Otras enfermedades autoinmunes asociadas'],
      clinica: 'Pénfigo VULGAR: en muchos pacientes empieza por la BOCA, con erosiones dolorosas que impiden comer, y puede tardar meses en dar lesiones cutáneas; después aparecen ampollas flácidas que se rompen y dejan erosiones extensas. Pénfigo FOLIACEO: RESPETA las mucosas y da lesiones costrosas y descamativas en áreas seborreicas (cara, cuero cabelludo, tronco superior), porque la ampolla es tan superficial que casi nunca se ve intacta.',
      criterios_dx: 'Clínica compatible más INMUNOFLUORESCENCIA DIRECTA de piel perilesional con depósito en red entre los queratinocitos, más ELISA de desmogleínas. La histología muestra acantólisis suprabasal en el vulgar y subcornea en el foliaceo.',
      laboratorio: 'Inmunofluorescencia directa e indirecta, ELISA de desmogleína 1 y 3. La citología de Tzanck es un apoyo rápido a pie de cama con células acantoliticas, con una positividad en torno al 71% según las guías indias.',
      imagen: 'No se necesita para el diagnóstico.',
      complementarios: 'Valoración odontologica y de otorrinolaringología si hay afectación mucosa extensa. Valoración oftalmológica si hay síntomas oculares.',
      dx_diferencial: 'Penfigoide ampolloso (ampolla tensa, anciano, prurito), pénfigo paraneoplásico (mucositis grave y refractaria), eritema multiforme mayor, necrólisis epidérmica tóxica, estomatitis aftosa y liquen plano erosivo.',
      tx_medico: 'Cuidados de la boca que permitan comer, analgesia adecuada, curas no adherentes y soporte nutricional. En la afectación oral extensa el paciente pierde peso de forma rápida y eso se pasa por alto con facilidad.',
      tx_farmacologico: 'Corticoide sistémico como base, con un adyuvante inmunosupresor para reducir la dependencia del corticoide. Ver la ficha de tratamiento.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: afectación muy extensa con pérdidas hidroelectroliticas o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Balance, peso, control del dolor y búsqueda de sobreinfección de las erosiones.',
      seguimiento_ambulatorio: 'Título de desmogleínas seriado, que se correlaciona con la actividad y ayuda a anticipar la recaída.',
      pronostico: 'Ha cambiado por completo con el tratamiento actual. La mortalidad hoy se relaciona más con las complicaciones del tratamiento que con la propia enfermedad.',
      algoritmo: ['¿La ampolla es flácida y el Nikolsky positivo?', 'Biopsiar piel PERILESIONAL para inmunofluorescencia directa', 'Biopsia de lesión para histología', 'ELISA de desmogleína 1 y 3', 'Clasificar: vulgar mucoso, mucocutáneo o foliaceo', 'Valorar la extensión y la afectación oral', 'Iniciar tratamiento y planificar el adyuvante']
    },
    {
      nombre: 'Pénfigo: tratamiento y seguimiento',
      color: '#3d5a73',
      definicion: 'Estrategia en fases, dirigida a controlar la enfermedad, consolidar la remisión y mantenerla con la menor dosis posible de corticoide.',
      fisiopatologia: 'El rituximab depleciona los linfocitos B al unirse a CD20, con lo que corta la producción de autoanticuerpos en su origen. Esa es la razón de que su efecto tarde en aparecer pero dure, y de que el título de desmogleínas sirva para seguir la respuesta y anticipar la recaída.',
      epidemiologia: 'La mayor parte de la morbilidad actual del pénfigo procede del TRATAMIENTO y no de la enfermedad: infecciones, osteoporosis, diabetes e hipertensión por corticoide prolongado.',
      factores_riesgo: ['Enfermedad extensa al diagnóstico', 'Título alto de desmogleínas', 'Retraso en alcanzar el control', 'Comorbilidad que limita el corticoide', 'Recaídas repetidas'],
      clinica: 'El tratamiento se organiza en fases: control de la enfermedad (dejan de salir lesiones nuevas y las existentes empiezan a curar), consolidación y mantenimiento, con el objetivo final de la remisión sin corticoide o con la dosis más baja posible.',
      criterios_dx: 'No aplica.',
      laboratorio: 'ANTES del rituximab, las guías indias piden electrocardiograma y anticuerpo del core de la hepatitis B, ecocardiograma si hay cardiopatía conocida o alteración electrocardiográfica, y cribado de tuberculosis con prueba cutánea o ensayo de liberación de interferón gamma para los corticoides y los adyuvantes distintos del rituximab.',
      imagen: 'Densitometría ósea por el corticoide prolongado.',
      complementarios: 'Título de desmogleínas seriado: las guías lo usan para valorar la falta de respuesta, predecir la recaída y planificar las infusiones de mantenimiento de rituximab. Señalan además que NO hay evidencia suficiente para usar saliva en lugar de suero.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Profilaxis de osteoporosis, control de glucemia y tensión, vacunación actualizada ANTES de empezar, y protección gástrica si procede. Todo esto forma parte del tratamiento, no es accesorio.',
      tx_farmacologico: 'Corticoide sistémico como base. Ante la necesidad de corticoide prolongado y a dosis altas, las guías indias indican incorporar un ADYUVANTE inmunosupresor (rituximab, micofenolato de mofetilo, azatioprina e incluso ciclofosfamida) para reducir la dependencia del corticoide. En el pénfigo FOLIACEO leve contemplan la dapsona como primera línea, normalmente con corticoide tópico, señalando que en torno a la mitad de los que empiezan con dapsona acabaran necesitando otra cosa. Y describen el pulso de dexametasona y ciclofosfamida, que sigue las mismas fases. Una diferencia que la propia guía explícita: en su medio el objetivo es la remisión sin corticoide, mientras que las recomendaciones internacionales aceptan mantener la remisión con prednisolona a 10 mg al dia o menos.',
      tx_intervencionista: 'La plasmaféresis y la inmunoadsorcion se reservan a casos graves y refractarios en centros con experiencia.',
      criterios_uci: 'Sepsis o afectación extensa con inestabilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de infección, que es la complicación más temida en un paciente inmunodeprimido con la barrera cutánea rota.',
      seguimiento_ambulatorio: 'Reducción progresiva del corticoide guiada por la clínica y por el título de desmogleínas. Vigilancia de la toxicidad acumulada del corticoide, que en estos pacientes se mide en años.',
      pronostico: 'Bueno con tratamiento adecuado. El reto no es controlar el brote sino retirar el corticoide sin que recaiga.',
      algoritmo: ['Valorar extensión y comorbilidad', 'Estudio previo: electrocardiograma, hepatitis B y tuberculosis', 'Vacunación actualizada antes de empezar', 'Corticoide sistémico para el control', 'Añadir adyuvante para ahorrar corticoide', 'Seguir el título de desmogleínas', 'Reducir el corticoide de forma progresiva', 'Profilaxis de osteoporosis y control metabólico']
    },
    {
      nombre: 'Penfigoide ampolloso',
      color: '#5a4a8c',
      definicion: 'Enfermedad ampollosa SUBEPIDÉRMICA autoinmune, la más frecuente del grupo, que se presenta de forma clásica con ampollas tensas y prurito intenso, sobre todo en el anciano.',
      fisiopatologia: 'Autoanticuerpos contra BP180 y BP230, dos componentes del hemidesmosoma que anclan la epidermis a la dermis. Al romperse ese anclaje, la ampolla se forma POR DEBAJO de toda la epidermis, y por eso su techo es grueso y la ampolla aguanta tensa. Un dato que ha abierto una línea de investigación: los titulos de anticuerpos anti BP180 y anti BP230 se han asociado a enfermedades neurológicas como el alzheimer, el parkinson y el ictus, lo que sugiere un componente neuroinflamatorio compartido.',
      epidemiologia: 'La incidencia se estima entre 2 y 30 casos nuevos por millón de habitantes y año, y esta aumentando. Sube mucho con la edad: entre 190 y 312 casos nuevos por millón y año en los mayores de 80. La edad media de inicio ronda los 60 años. El riesgo de muerte es mayor en el anciano con penfigoide que en el anciano sin el.',
      factores_riesgo: ['Edad avanzada', 'Enfermedad neurológica: demencia, ictus, parkinson, esclerosis múltiple', 'Psoriasis previa, que suele preceder al penfigoide', 'Diabetes y enfermedad renal crónica', 'Fármacos, entre ellos los inhibidores de la dipeptidil peptidasa 4', 'Apnea obstructiva del sueño'],
      clinica: 'En la mayoría de los casos empieza como penfigoide cutáneo NO AMPOLLOSO: prurito de leve a moderado con lesiones eccematosas, excoriadas, urticariformes o nodulares, SIN ampollas. Esa fase puede durar de semanas a años y es la razón principal del retraso diagnóstico. Después aparece la fase ampollosa, con ampollas tensas de 1 a 4 centimetros, bilaterales, en zonas de flexión de los miembros y tronco inferior. Una parte de los pacientes tiene afectación mucosa, que hace el control más difícil.',
      criterios_dx: 'Combinación de clínica, histología e inmunopatologia: inmunofluorescencia con depósito lineal en la unión dermoepidérmica y ELISA de BP180 y BP230. En la mayoría de los casos esa combinación basta para el diagnóstico definitivo.',
      laboratorio: 'Inmunofluorescencia directa de piel perilesional, ELISA de BP180 y BP230, y a veces piel separada con sal para localizar el depósito en el techo de la ampolla. Cuando la inmunofluorescencia y los ELISA salen negativos, el análisis del patrón de serracion puede ayudar a identificar la causa de una ampolla subepidérmica.',
      imagen: 'No se necesita.',
      complementarios: 'BPDAI para medir actividad y daño, con su escala de prurito aparte. Índice de toxicidad por glucocorticoides, especialmente pertinente en esta población.',
      dx_diferencial: 'Pénfigo (ampolla flácida), dermatitis herpetiforme, epidermolisis ampollosa adquirida, urticaria en la fase preampollosa, eccema y escabiosis, que es el error más frecuente en la fase de prurito sin ampollas.',
      tx_medico: 'Cuidado de las erosiones, prevención de la sobreinfección y control del prurito, que es lo que más condiciona la vida del paciente. Y una consideración que la revisión subraya: el tratamiento del anciano exige pensar en su comorbilidad, en la polifarmacia, en los cambios del metabolismo de los fármacos con la edad y en el riesgo añadido de la inmunosupresión.',
      tx_farmacologico: 'La guía europea recomienda CORTICOIDES TÓPICOS DE ALTA POTENCIA como base del tratamiento siempre que sea posible, con prednisona oral a 0.5 mg por kilo y dia como alternativa recomendada. Ante contraindicación o resistencia a los corticoides, pueden recomendarse metotrexato, azatioprina, micofenolato de mofetilo o ácido micofenolico. El uso de doxiciclina y dapsona es CONTROVERTIDO, y pueden recomendarse sobre todo en pacientes con contraindicación para el corticoide oral. La depleción de linfocitos B y la inmunoglobulina intravenosa pueden considerarse en casos resistentes. Omalizumab y dupilumab han mostrado resultados prometedores.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: afectación extensa con inestabilidad o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de infección y de los efectos del corticoide, que en el anciano aparecen antes y pesan más.',
      seguimiento_ambulatorio: 'BPDAI y prurito en cada visita. Revisión de la comorbilidad neurológica y de la polifarmacia. Y valorar la retirada de un inhibidor de la dipeptidil peptidasa 4 si lo toma.',
      pronostico: 'Enfermedad crónica con brotes. La mortalidad esta aumentada respecto a la población de la misma edad, en buena parte por la comorbilidad y por el tratamiento.',
      algoritmo: ['Sospechar en el anciano con prurito, aunque no haya ampollas', 'Biopsiar piel PERILESIONAL para inmunofluorescencia directa', 'ELISA de BP180 y BP230', 'Medir con BPDAI y escala de prurito', 'Corticoide tópico de alta potencia como base', 'Prednisona 0.5 mg/kg/dia como alternativa', 'Inmunosupresor si hay contraindicación o resistencia', 'Revisar comorbilidad neurológica y polifarmacia']
    },
    {
      nombre: 'Dermatitis herpetiforme',
      color: '#3f6b52',
      definicion: 'Enfermedad ampollosa subepidérmica que es la expresión CUTÁNEA de la enfermedad celíaca, con lesiones intensamente pruriginosas de distribución simétrica en superficies de extensión.',
      fisiopatologia: 'El gluten desencadena en personas predispuestas una respuesta con inmunoglobulina A frente a la transglutaminasa tisular en el intestino y frente a la transglutaminasa EPIDÉRMICA en la piel. Los inmunocomplejos se depositan en las papilas dérmicas, atraen neutrófilos y forman microabscesos que acaban despegando la epidermis. De ahi el rasgo diagnóstico: el depósito GRANULAR de inmunoglobulina A en las papilas dérmicas.',
      epidemiologia: 'Según un metaanálisis reciente, la prevalencia combinada de dermatitis herpetiforme entre los pacientes con enfermedad celíaca se estima en torno al 6.8%, con una prevalencia bruta del 3.0%. Es menor en la celiaquía pediátrica (en torno al 2.6%) que en la del adulto (en torno al 8.6%). La heterogeneidad entre estudios es muy alta, de modo que esas cifras se interpretan como un promedio entre entornos distintos y no como un dato generalizable sin matices.',
      factores_riesgo: ['Enfermedad celíaca', 'Alelos HLA DQ2 y DQ8', 'Antecedente familiar de celiaquía', 'Otras enfermedades autoinmunes, sobre todo tiroideas', 'Sexo masculino, con prevalencia algo mayor en las series que lo desglosan'],
      clinica: 'PRURITO y escozor muy intensos, a menudo desproporcionados para lo que se ve, con papulas y vesiculas agrupadas que el paciente destruye al rascarse: lo que se explora suelen ser EXCORIACIONES y costras, no vesiculas intactas. Distribución muy característica y SIMÉTRICA: codos, rodillas, nalgas, región sacra y cuero cabelludo. La mayoría no tiene síntomas digestivos, aunque la enteropatia este presente en la biopsia intestinal.',
      criterios_dx: 'Inmunofluorescencia directa de piel PERILESIONAL con depósito GRANULAR de inmunoglobulina A en las papilas dérmicas: es el patrón definitorio. Se acompaña de anticuerpos antitransglutaminasa tisular y antiendomisio.',
      laboratorio: 'Antitransglutaminasa tisular de tipo inmunoglobulina A, antiendomisio, antitransglutaminasa epidérmica, y cuantificación de inmunoglobulina A total para no interpretar mal un resultado negativo en un paciente con déficit de IgA. Estudio de HLA DQ2 y DQ8 en casos dudosos.',
      imagen: 'No se necesita. La endoscopia con biopsias duodenales se valora dentro del estudio de la celiaquía.',
      complementarios: 'Cribado de déficits por malabsorción: hierro, folato, vitamina B12 y vitamina D. Y función tiroidea, por la asociación autoinmune.',
      dx_diferencial: 'Escabiosis (el error más frecuente por el prurito intenso), eccema, penfigoide ampolloso en su fase excoriada, prurigo nodular y dermatosis por inmunoglobulina A lineal.',
      tx_medico: 'DIETA SIN GLUTEN estricta y de por vida, que es el único tratamiento que act&uacute;a sobre la causa y que trata a la vez la enteropatia. Requiere apoyo de nutrición, porque una dieta sin gluten mal hecha tiene sus propios problemas. La mejoría cutánea con la dieta tarda MESES, y ese desfase hay que explicarlo o el paciente abandona.',
      tx_farmacologico: 'DAPSONA para el control rápido del prurito, que suele responder en días. No trata la enteropatia, de modo que no sustituye a la dieta sino que la acompaña mientras esta hace efecto. Antes de iniciarla hay que determinar la glucosa-6-fosfato deshidrogenasa, y después vigilar la hemólisis y la metahemoglobinemia.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso.',
      seguimiento_ambulatorio: 'Vigilancia de la adherencia a la dieta, de los déficits nutricionales y de la tolerancia a la dapsona con hemograma seriado. Seguimiento conjunto con digestivo y con nutrición.',
      pronostico: 'Excelente con dieta estricta, que permite reducir y a menudo retirar la dapsona. La adherencia de por vida es el reto real.',
      algoritmo: ['Sospechar ante prurito intenso con excoriaciones simétricas', 'Biopsiar piel PERILESIONAL para inmunofluorescencia directa', 'Buscar depósito GRANULAR de IgA en papilas', 'Serología de celiaquía con IgA total', 'Determinar glucosa-6-fosfato deshidrogenasa antes de la dapsona', 'Dieta sin gluten estricta con apoyo de nutrición', 'Dapsona para el prurito mientras la dieta hace efecto', 'Cribar déficits nutricionales y función tiroidea']
    },
    {
      nombre: 'Pénfigo paraneoplásico',
      color: '#7a3a6b',
      definicion: 'Enfermedad autoinmune rara con afectación mucocutánea y MULTIORGÁNICA, asociada a una neoplasia, también llamada síndrome autoinmune multiorgánico paraneoplásico.',
      fisiopatologia: 'La neoplasia desencadena una respuesta autoinmune contra varias proteínas de la familia de las plaquinas, entre ellas la ENVOPLAQUINA, y contra otros antígenos. El ataque no se limita a la piel: alcanza el epitelio respiratorio, y de ahi la bronquiolitis obliterante que marca buena parte de su mortalidad.',
      epidemiologia: 'Se asocia de forma típica a procesos LINFOPROLIFERATIVOS o hematológicos, y con menos frecuencia a tumores sólidos. La mortalidad es elevada por el riesgo de infecciones graves y por las complicaciones asociadas, en particular la bronquiolitis obliterante.',
      factores_riesgo: ['Neoplasia linfoproliferativa conocida', 'Leucemia linfocítica crónica y linfoma no hodgkiniano', 'Enfermedad de Castleman', 'Timoma', 'Tumores sólidos, con menos frecuencia'],
      clinica: 'MUCOSITIS crónica y GRAVE, que es la característica que más orienta: erosiones orales intratables, con frecuencia con afectación conjuntival y genital. Las lesiones cutáneas son POLIMORFAS y pueden parecerse a un pénfigo, a un penfigoide, a un liquen plano o a un eritema multiforme, lo que confunde el diagnóstico. La mucositis que no responde a nada es la señal de alarma.',
      criterios_dx: 'La guía europea recomienda una valoración completa con estudio histopatológico e investigaciones inmunopatologicas: inmunofluorescencia directa e indirecta, ELISA y, donde este disponible, inmunoblot o inmunoprecipitacion. El hallazgo más ESPECÍFICO es la detección de anticuerpos anti envoplaquina o de anticuerpos circulantes que se unen al EPITELIO DE VEJIGA DE RATA en la inmunofluorescencia indirecta, en un paciente con clínica y antecedentes compatibles.',
      laboratorio: 'Inmunofluorescencia directa e indirecta (con sustrato de vejiga de rata), ELISA, inmunoblot o inmunoprecipitacion donde existan. Hemograma, frotis y estudio hematológico dirigido.',
      imagen: 'Tomografía toracoabdominal buscando la neoplasia. Pruebas de función respiratoria para detectar bronquiolitis obliterante.',
      complementarios: 'Valoración oftalmológica y odontologica por la afectación mucosa. La guía europea recomienda un abordaje MULTIDISCIPLINAR con neumología, oftalmologia y oncohematologia.',
      dx_diferencial: 'Pénfigo vulgar, penfigoide de mucosas, liquen plano erosivo, eritema multiforme mayor, necrólisis epidérmica tóxica y enfermedad injerto contra huésped.',
      tx_medico: 'Tratamiento de la neoplasia subyacente y soporte, con especial atención a la nutrición por la mucositis y a la prevención de infecciones.',
      tx_farmacologico: 'La guía europea recomienda corticoides sistémicos hasta 1.5 mg por kilo y dia como primera opción. Recomienda RITUXIMAB en los pacientes con pénfigo paraneoplásico secundario a procesos linfoproliferativos, y señala que también puede considerarse en los casos asociados a tumores sólidos.',
      tx_intervencionista: 'Tratamiento oncológico o hematológico de la neoplasia, que es la base de todo.',
      criterios_uci: 'Insuficiencia respiratoria por bronquiolitis obliterante, o sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia respiratoria estrecha y búsqueda activa de infección.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con oncohematologia, neumología y oftalmologia. La guía europea advierte de que los criterios diagnósticos y las recomendaciones terapéuticas necesitan validación con estudios prospectivos.',
      pronostico: 'Elevada mortalidad, por infecciones graves y por complicaciones asociadas, sobre todo la bronquiolitis obliterante.',
      algoritmo: ['Sospechar ante mucositis grave y refractaria', 'Lesiones cutáneas polimorfas refuerzan la sospecha', 'Inmunofluorescencia indirecta sobre vejiga de rata', 'Buscar anticuerpos anti envoplaquina', 'Buscar la neoplasia, sobre todo linfoproliferativa', 'Pruebas de función respiratoria', 'Corticoide sistémico y rituximab', 'Manejo multidisciplinar']
    },
    {
      nombre: 'El diagnóstico inmunológico: como se confirma',
      color: '#8a5a2e',
      definicion: 'Conjunto de técnicas que identifican el autoanticuerpo y su localización, y que son las que realmente dan el diagnóstico en este grupo de enfermedades.',
      fisiopatologia: 'No aplica. Pero conviene entender el fundamento: la inmunofluorescencia DIRECTA busca lo que ya esta depositado en la piel del paciente, y la INDIRECTA busca anticuerpos circulantes en su suero enfrentandolos a un sustrato. Son preguntas distintas y se complementan.',
      epidemiologia: 'No aplica.',
      factores_riesgo: ['Sospecha clínica de enfermedad ampollosa autoinmune', 'Ampollas que no encajan con una causa mecánica, infecciosa o por fármacos', 'Prurito persistente en el anciano sin causa aclarada', 'Erosiones orales crónicas sin explicación', 'Eccema o urticaria que no responde y que podría ser una fase preampollosa'],
      clinica: 'El error tecnico que más resultados arruina es tomar la biopsia de dentro de la ampolla. La inmunofluorescencia directa se toma de piel PERILESIONAL sana, porque dentro de la ampolla el tejido esta destruido y los inmunorreactantes se han degradado.',
      criterios_dx: 'El PATRÓN del depósito es lo que diagnóstica. Depósito en red o en panal entre queratinocitos: pénfigo. Depósito lineal en la unión dermoepidérmica: penfigoide. Depósito granular de inmunoglobulina A en las papilas: dermatitis herpetiforme.',
      laboratorio: 'Inmunofluorescencia directa e indirecta, ELISA de desmogleínas para el pénfigo y de BP180 y BP230 para el penfigoide, y serología de celiaquía para la dermatitis herpetiforme. La piel separada con sal localiza el depósito en el techo o en el suelo de la ampolla, y el análisis del patrón de serracion ayuda cuando la inmunofluorescencia y los ELISA salen negativos.',
      imagen: 'No aplica.',
      complementarios: 'Dos o más biopsias cuando el diagnóstico es dudoso: una de lesión para histología y otra de piel perilesional para inmunofluorescencia. No es lo mismo y no se puede sustituir una por la otra.',
      dx_diferencial: 'Ampolla por fricción, quemadura, picadura, infección (impetigo ampolloso, herpes), fármacos y porfiria cutánea tarda, que se distinguen por la historia y por la ausencia de depósito inmunitario.',
      tx_medico: 'No aplica.',
      tx_farmacologico: 'El corticoide tópico o sistémico reciente puede negativizar o atenuar los hallazgos: conviene tomar la muestra antes de tratar siempre que sea posible.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Los titulos de anticuerpos sirven para seguir la actividad: las desmogleínas en el pénfigo, y los anti BP180 en el penfigoide. Una subida del título puede anticipar una recaída clínica.',
      pronostico: 'No aplica.',
      algoritmo: ['Decidir el nivel por la clínica: flácida o tensa', 'Biopsia de LESIÓN para histología', 'Biopsia de piel PERILESIONAL para inmunofluorescencia directa', 'Leer el PATRÓN del depósito, no la intensidad', 'ELISA según la sospecha', 'Piel separada con sal si hace falta localizar mejor', 'Repetir si el resultado no encaja con la clínica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El internista se encuentra estas enfermedades de tres formas: un anciano con prurito que lleva meses tratado como eccema, un paciente con erosiones orales que no come, y un paciente ya diagnosticado que ingresa por una complicación del tratamiento.',
    parametros: [
      'Si vas a biopsiar, hazlo BIEN: una muestra de lesión para histología y otra de piel PERILESIONAL para inmunofluorescencia directa. Tomarla de dentro de la ampolla arruina el resultado.',
      'Toma la muestra ANTES de empezar el corticoide siempre que sea posible, porque el tratamiento atenua los hallazgos.',
      'Anciano con prurito intenso sin causa clara: el penfigoide empieza SIN ampollas, y ese es el motivo principal de su retraso diagnóstico. Antes, descarta escabiosis.',
      'Erosiones orales que impiden comer: vigila el peso y la nutrición, que se pasan por alto mientras se discute el diagnóstico.',
      'Mucositis grave y refractaria con lesiones cutáneas polimorfas: piensa en pénfigo paraneoplásico y busca una neoplasia hematológica.',
      'En el paciente en tratamiento, la complicación más probable es INFECCIOSA: inmunosupresión más barrera cutánea rota.',
      'Revisa si toma un inhibidor de la dipeptidil peptidasa 4, que se ha asociado a penfigoide ampolloso.'
    ],
    criterios_uci_general: 'Afectación extensa con pérdidas hidroelectroliticas o sepsis; insuficiencia respiratoria por bronquiolitis obliterante en el pénfigo paraneoplásico.',
    criterios_tips_general: 'No aplica en estas enfermedades.',
    criterios_trasplante_general: 'No aplica en estas enfermedades.',
    prevencion: 'Vacunación actualizada ANTES de iniciar inmunosupresión, profilaxis de osteoporosis y control metabólico en quien recibe corticoide prolongado, estudio previo al rituximab (electrocardiograma, hepatitis B y cribado de tuberculosis), medición de la toxicidad acumulada del corticoide, y en la dermatitis herpetiforme, dieta sin gluten de por vida con apoyo de nutrición.'
  }
};

export const compCites = {
  'Pénfigo vulgar y foliaceo: reconocerlo': { laboratorio: [1], criterios_dx: [1], tx_farmacologico: [1] },
  'Pénfigo: tratamiento y seguimiento': { laboratorio: [1], complementarios: [1], tx_farmacologico: [1] },
  'Penfigoide ampolloso': { epidemiologia: [3], fisiopatologia: [3], clinica: [3], criterios_dx: [3], tx_farmacologico: [2], complementarios: [3], tx_medico: [3], laboratorio: [2, 3] },
  'Dermatitis herpetiforme': { epidemiologia: [5], criterios_dx: [5], laboratorio: [5], tx_farmacologico: [5] },
  'Pénfigo paraneoplásico': { criterios_dx: [4], tx_farmacologico: [4], complementarios: [4], seguimiento_ambulatorio: [4], laboratorio: [4] },
  'El diagnóstico inmunológico: como se confirma': { laboratorio: [3], criterios_dx: [1, 2], tx_farmacologico: [1, 2] }
};

export const estigmasTitulo = 'Signos de exploración que orientan el nivel';
export const estigmas = [
  { nombre: 'Signo de Nikolsky', descripcion: 'La piel sana perilesional se despega al frotarla. Indica falta de cohesión entre queratinocitos y apunta a una ampolla INTRAEPIDÉRMICA, es decir, a pénfigo.' },
  { nombre: 'Signo de Asboe-Hansen', descripcion: 'Al presionar sobre una ampolla intacta, esta se extiende lateralmente en vez de romperse. Es la otra cara del mismo fenómeno: el líquido diseca un plano sin cohesión.' },
  { nombre: 'Ampolla tensa que aguanta', descripcion: 'Su techo es TODA la epidermis, de modo que resiste. Indica una ampolla subepidérmica: penfigoide y sus parientes. Una ampolla intacta de varios centimetros casi nunca es un pénfigo.' },
  { nombre: 'Erosiones orales crónicas', descripcion: 'En muchos pacientes el pénfigo vulgar empieza por la boca y puede tardar meses en dar lesiones cutáneas. Una erosión oral que no cura en semanas merece que se piense en esto.' },
  { nombre: 'Excoriaciones simétricas en extensión', descripcion: 'Codos, rodillas, nalgas y región sacra, con prurito desproporcionado y casi sin vesiculas intactas porque el paciente las destruye al rascarse: es el patrón de la dermatitis herpetiforme.' },
  { nombre: 'Fase preampollosa del penfigoide', descripcion: 'Prurito con lesiones eccematosas, urticariformes o nodulares SIN ampollas, en un anciano. Puede durar de semanas a años y es la razón principal del retraso diagnóstico.' }
];

export const biopsiaTitulo = 'Biopsia: dos muestras y de donde se toma cada una';
export const biopsia = {
  indicaciones: [
    'Toda sospecha de enfermedad ampollosa autoinmune, sin excepción',
    'Prurito persistente en el anciano sin causa aclarada, buscando penfigoide preampolloso',
    'Erosiones orales crónicas sin explicación',
    'Eccema o urticaria que no responde y que podría ser una fase preampollosa',
    'Ampollas que no encajan con causa mecánica, infecciosa o por fármacos'
  ],
  ventajas: [
    'La inmunofluorescencia DIRECTA da el diagnóstico: el patrón del depósito identifica la enfermedad',
    'La histología localiza el nivel de la ampolla y el tipo de infiltrado',
    'La piel separada con sal precisa si el depósito esta en el techo o en el suelo de la ampolla',
    'El análisis del patrón de serracion ayuda cuando la inmunofluorescencia y los ELISA son negativos'
  ],
  limitaciones: [
    'La inmunofluorescencia se toma de piel PERILESIONAL: dentro de la ampolla el resultado sale falsamente negativo',
    'El corticoide tópico o sistémico reciente atenua o negativiza los hallazgos',
    'Hacen falta DOS muestras: una de lesión para histología y otra perilesional para inmunofluorescencia',
    'La histología sola no distingue entre las distintas ampollosas subepidérmicas'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección',
    'Evitar tomar la muestra de una zona ya sobreinfectada o de una ampolla rota',
    'En mucosa oral, elegir un borde de erosión y no el centro'
  ]
};

export const escalaRefs = { 'Nivel de la ampolla (calculadora disponible)': [1, 3], 'Lectura de la inmunofluorescencia (calculadora disponible)': [3], 'BPDAI (calculadora disponible)': [3], 'ABSIS': [3], 'Perfil de desmogleínas': [1], 'Índice de toxicidad por glucocorticoides': [3] };

export const escalaCalc = {
  'Nivel de la ampolla (calculadora disponible)': 'nivel-ampolla',
  'Lectura de la inmunofluorescencia (calculadora disponible)': 'inmunofluorescencia',
  'BPDAI (calculadora disponible)': 'bpdai'
};

export const compGroups = [
  { title: 'Intraepidermicas', items: ['Pénfigo vulgar y foliaceo: reconocerlo', 'Pénfigo: tratamiento y seguimiento', 'Pénfigo paraneoplásico'] },
  { title: 'Subepidermicas', items: ['Penfigoide ampolloso', 'Dermatitis herpetiforme'] },
  { title: 'Como se confirma', items: ['El diagnóstico inmunológico: como se confirma'] }
];

export const complicacionesIntro = 'Las fichas siguen la pregunta que ordena el tema: a que altura se forma la ampolla. Las tres primeras son intraepidérmicas, es decir, pénfigo: reconocerlo, tratarlo, y la forma paraneoplásica, que es rara pero cuya señal (una mucositis que no responde a nada) hay que tener en la cabeza. Las dos siguientes son subepidérmicas: el penfigoide, que es la más frecuente del grupo y cuya fase inicial SIN ampollas explica meses de retraso, y la dermatitis herpetiforme, que en realidad es celiaquía. La última es la parte técnica que decide si todo lo anterior sirve de algo: como se toma y como se lee la inmunofluorescencia.';

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
    { title: 'Intraepidermica', sub: 'FLÁCIDA &middot; Nikolsky positivo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Pénfigo vulgar', sub: 'Desmogleína 3 &middot; empieza en la boca', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pénfigo foliaceo', sub: 'Desmogleína 1 &middot; respeta mucosas', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Paraneoplasico', sub: 'Mucositis refractaria &middot; buscar tumor', color: '#7a3a6b', target: 'complicaciones' }
    ] },
    { title: 'Subepidermica', sub: 'TENSA &middot; el techo aguanta', color: '#5a4a8c', target: 'complicaciones', leaves: [
      { title: 'Penfigoide ampolloso', sub: 'BP180 y BP230 &middot; anciano', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Dermatitis herpetiforme', sub: 'IgA granular &middot; celiaquía', color: '#3f6b52', target: 'complicaciones' }
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
    titulo: 'El mapa: nivel, diana y clínica',
    fuente: 'Guias indias de penfigo (De D, et al. Indian Dermatol Online J 2024;16(1):3-24), S2k de penfigoide (Borradori L, et al. JEADV 2022;36(10):1689-1704) y de penfigo paraneoplasico (Antiga E, et al. JEADV 2023;37(6):1118-1134).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Enfermedad</th><th>Nivel</th><th>Diana</th><th>Ampolla</th><th>Mucosas</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Pénfigo vulgar</td><td>Intraepidérmica (suprabasal)</td><td>Desmogleína 3, o 3 y 1</td><td><span class="figure-tag fail">Flácida</span></td><td>Si, a menudo <strong>primero</strong></td></tr>
            <tr><td class="figure-org">Pénfigo foliaceo</td><td>Intraepidérmica (subcornea)</td><td>Desmogleína 1</td><td><span class="figure-tag fail">Flácida</span></td><td><strong>No</strong></td></tr>
            <tr><td class="figure-org">Pénfigo paraneoplásico</td><td>Intraepidérmica y más</td><td>Plaquinas (envoplaquina)</td><td>Polimorfa</td><td><strong>Mucositis grave</strong></td></tr>
            <tr><td class="figure-org">Penfigoide ampolloso</td><td>Subepidérmica</td><td>BP180 y BP230</td><td><span class="figure-tag dys">Tensa</span></td><td>A veces</td></tr>
            <tr><td class="figure-org">Dermatitis herpetiforme</td><td>Subepidérmica</td><td>Transglutaminasa epidérmica</td><td>Vesiculas, casi siempre rotas</td><td>No</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La regla que resuelve la mayoría de los casos a pie de cama: <strong>flácida es pénfigo, tensa es penfigoide</strong>, y la razón es puramente mecánica. En el pénfigo la ampolla esta DENTRO de la epidermis y su techo es una lamina finisima que se rompe al menor roce, de modo que lo que se ve son erosiones; en el penfigoide la ampolla esta DEBAJO de toda la epidermis, que hace de techo grueso y aguanta. El perfil de desmogleínas explica además por que el foliaceo respeta las mucosas: la desmogleína 1 predomina en la piel y la 3 en la mucosa.</div>`
  },
  'inmunofluorescencia-patrones': {
    titulo: 'Inmunofluorescencia: el patrón es el diagnóstico',
    fuente: 'Werth VP, et al. Bullous pemphigoid burden of disease, management and unmet therapeutic needs. JEADV 2024;39(2):290-300 (doi:10.1111/jdv.20313), y guias indias de penfigo 2024.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Patrón en la inmunofluorescencia directa</th><th>Diagnóstico</th><th>Confirmación sérica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Depósito en RED o en panal entre los queratinocitos</td><td>Pénfigo</td><td>ELISA de desmogleína 1 y 3</td></tr>
            <tr><td class="figure-org">Depósito LINEAL en la unión dermoepidérmica</td><td>Penfigoide ampolloso</td><td>ELISA de BP180 y BP230</td></tr>
            <tr><td class="figure-org">Depósito GRANULAR de IgA en las papilas dérmicas</td><td>Dermatitis herpetiforme</td><td>Antitransglutaminasa y antiendomisio</td></tr>
            <tr><td class="figure-org">Unión a EPITELIO DE VEJIGA DE RATA (indirecta)</td><td><span class="figure-tag fail">Pénfigo paraneoplásico</span></td><td>Anticuerpos anti envoplaquina</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box"><strong>El error tecnico que arruina más resultados:</strong> tomar la biopsia de dentro de la ampolla. La inmunofluorescencia directa se toma de piel <strong>PERILESIONAL</strong> sana, porque dentro de la ampolla el tejido esta destruido y los inmunorreactantes degradados. Hacen falta <strong>dos muestras</strong>: una de lesión para histología y otra perilesional para inmunofluorescencia. Y conviene tomarlas ANTES de empezar el corticoide, que atenua los hallazgos. Si la inmunofluorescencia y los ELISA salen negativos ante una ampolla subepidérmica, quedan la piel separada con sal (que localiza el depósito en el techo o en el suelo) y el análisis del patrón de serracion.</div>`
  },
  'penfigoide-escalones': {
    titulo: 'Penfigoide ampolloso: tratamiento y lo que viene',
    fuente: 'S2k de la EADV para el penfigoide ampolloso (Borradori L, et al. JEADV 2022;36(10):1689-1704, doi:10.1111/jdv.18220) y Werth VP, et al. JEADV 2024;39(2):290-300.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalón</th><th>Que recomienda la guía</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Base</td><td><strong>Corticoides tópicos de alta potencia</strong>, siempre que sea posible</td></tr>
            <tr><td class="figure-org">Alternativa</td><td><strong>Prednisona oral 0.5 mg/kg/dia</strong></td></tr>
            <tr><td class="figure-org">Contraindicación o resistencia al corticoide</td><td>Metotrexato, azatioprina, micofenolato de mofetilo o ácido micofenolico</td></tr>
            <tr><td class="figure-org">Controvertido</td><td>Doxiciclina y dapsona, sobre todo si hay contraindicación para el corticoide oral</td></tr>
            <tr><td class="figure-org">Resistente</td><td>Depleción de linfocitos B e inmunoglobulina intravenosa</td></tr>
            <tr><td class="figure-org">Prometedores</td><td>Omalizumab y dupilumab</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Por que esta enfermedad se trata distinto de lo que uno esperaria: afecta sobre todo a <strong>ancianos</strong> (edad media de inicio en torno a 60 años, y de 190 a 312 casos nuevos por millón y año por encima de los 80), con mucha comorbilidad, polifarmacia y cambios del metabolismo de los fármacos. Por eso el corticoide TÓPICO potente encabeza el tratamiento en vez del oral, y por eso existe un índice para medir la toxicidad acumulada del glucocorticoide. Entre los biológicos en estudio, el <strong>benralizumab</strong> se termino por falta de eficacia y un ensayo de <strong>ixekizumab</strong> no alcanzo su objetivo principal; el <strong>dupilumab</strong> tiene ensayos en fase 3 en marcha y el <strong>efgartigimod</strong> también. Conviene saber que la revisión que resume estos datos esta financiada por dos fabricantes.</div>`
  }
};
