// topics/psoriasis/content.js - Modulo 73: Psoriasis.
// Basado en la guia latinoamericana de la SOLAPSO (Valenzuela 2026) y en las guias francesas
// de tratamiento sistemico (Masson Regnault 2025). Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'psoriasis',
  titulo: 'Psoriasis',
  subtitulo: 'Módulo 73 &middot; Dermatología',
  accent: '#a1442e',
  accentDim: '#b8654e'
};

export const definicionText = `<p style="margin:0 0 14px;">La psoriasis es una enfermedad <strong>inflamatoria crónica de mecanismo inmunitario</strong> en la que el eje interleucina 23 / linfocito Th17 mantiene una activación sostenida del queratinocito. El resultado visible es la placa: eritematosa, bien delimitada y cubierta de una escama blanca-nacarada. El resultado invisible es una inflamación sistémica que se acompaña de artritis, de enfermedad cardiometabolica y de una carga psicológica que casi nunca se pregunta.</p>
<p style="margin:0 0 14px;">Para el internista hay tres ideas que ordenan el tema. La primera es que <strong>la extensión no es la gravedad</strong>: una psoriasis del 3% de superficie corporal en las palmas, las uñas o los genitales incapacita más que una del 15% en el tronco, y por eso las guías reconocen las llamadas áreas de alto impacto. La segunda es que <strong>hay una meta numérica</strong> y no una impresión clínica: la SOLAPSO recomienda un PASI absoluto menor de 3, o una respuesta PASI90, o un PGA de 0 o 1, junto con un índice dermatológico de calidad de vida menor de 5. La tercera es que <strong>dos formas son urgencias</strong>, la eritrodermica y la pustulosa generalizada, y en ellas no se escalona nada: se empieza por arriba.</p>
<p style="margin:0 0 14px;">Y una advertencia sobre el alcance de la guía que se usa aquí: la SOLAPSO deja constancia expresa de que <strong>la artritis psoriásica no se formulo como pregunta clínica propia</strong>, de modo que lo que dice al respecto orienta la elección del fármaco pero no sustituye a una guía reumatologica.</p>`;

export const bibliografia = [
  'Valenzuela F, Castro Ayarza JR, Kaplan D, et al. Clinical practice guideline for psoriasis management in Latin America. An Bras Dermatol. 2026;101(5):501449. doi:10.1016/j.abd.2026.501449.',
  'Masson Regnault M, Brenaut E, Marniquet ME, et al. French guidelines on systemic treatments for moderate-to-severe psoriasis in adults: Update 2025. J Eur Acad Dermatol Venereol. 2026;40(6):963-979. doi:10.1111/jdv.70263.',
  'Puig L, Carrascosa JM, Rivera R, et al. Generalized Pustular Psoriasis: Review and Consensus of the Psoriasis Group of the Spanish Academy of Dermatology and Venereology. Actas Dermosifiliogr. 2025;117(3):104544. doi:10.1016/j.ad.2025.104544.',
  'Carrascosa JM, Ubogui J, Gilaberte Y, et al. Narrowband UVB Phototherapy in Dermatology: GEF-CILAD 2026 Update. Actas Dermosifiliogr. 2026;117(8):104694. doi:10.1016/j.ad.2026.104694.',
  'Shi Y, Dai SM, Zhang Z, Gu J. Guideline for the diagnosis and treatment of psoriasis arthropathica (psoriatic arthritis) (2026 edition). Chin Med J (Engl). 2026;139(15):2216-2219. doi:10.1097/CM9.0000000000004139.',
  'Terui T, Kobayashi S, Yamamoto T, et al. Treatment Guidance for Palmoplantar Pustulosis 2022. J Dermatol. 2026;53(7):e510-e566. doi:10.1111/1346-8138.70246.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La placa típica',
      tituloB: 'Datos que obligan a replantear',
      compensada: 'Placa ERITEMATOSA, bien delimitada, con escama blanca-nacarada y gruesa, distribuida de forma SIMÉTRICA en las superficies de extensión: codos, rodillas, región sacra y cuero cabelludo. El raspado metodico despega primero la escama en laminas (signo de la vela) y después deja un punteado hemorrágico al retirar la última capa (signo de Auspitz), que corresponde a los capilares dilatados de las papilas. El fenómeno de Koebner explica las placas que aparecen sobre cicatrices, arañazos o zonas de roce. Las uñas enseñan piqueteado, onicolisis con borde eritematoso, mancha de aceite e hiperqueratosis subungueal, y su afectación es el mejor predictor clínico de artritis.',
      descompensada: 'Datos que cambian el diagnóstico o la urgencia: PÚSTULAS esteriles diseminadas sobre piel eritematosa con fiebre y leucocitosis, que es psoriasis pustulosa generalizada y se maneja como una urgencia; ERITEMA que supera el 90% de la superficie con alteración de la termorregulación, que es eritrodermia; placas que solo responden a corticoide tópico y recidivan al suspenderlo en cara y pliegues, donde hay que pensar en dermatitis seborreica o en tinea; una placa única que no mejora y crece, que obliga a biopsiar por micosis fungoide o enfermedad de Bowen; y dolor articular inflamatorio o dactilitis, que saca el problema del terreno cutáneo.'
    },
    laboratorio: [
      { prueba: 'Ninguna prueba confirma el diagnóstico', utilidad: 'La psoriasis en placas es un diagnóstico CLÍNICO. El laboratorio no sirve para confirmarla; sirve para elegir el tratamiento con seguridad y para buscar las comorbilidades que la acompañan. Esa distinción evita pedir estudios inútiles y olvidar los que si cambian la conducta.' },
      { prueba: 'Cribado de tuberculosis latente', utilidad: 'Prueba de tuberculina o ensayo de liberación de interferón gamma, con radiografía de tórax, ANTES de cualquier biológico. Cambia el fármaco que se elige: ante tuberculosis latente la SOLAPSO recomienda preferir inhibidores de interleucina 17 o de interleucina 23 por su menor riesgo de reactivación.' },
      { prueba: 'Serología de hepatitis B y C, y de VIH', utilidad: 'Con hepatitis B activa NO se inicia tratamiento sistémico inmunosupresor hasta haber tratado la infección. El antígeno de superficie positivo implica alto riesgo de reactivación y justifica profilaxis antiviral. En hepatitis C y en VIH la fototerapia es una opción recomendada de primera línea.' },
      { prueba: 'Hemograma, función hepática y función renal', utilidad: 'Base para metotrexato (hepatotoxicidad y mielosupresión), ciclosporina (nefrotoxicidad e hipertensión) y acitretina. Se repiten de forma periódica durante el tratamiento, no solo al inicio.' },
      { prueba: 'Perfil lipídico y glucemia', utilidad: 'La psoriasis se asocia a síndrome metabólico de forma independiente de la obesidad, y la acitretina eleva los triglicéridos de manera marcada. Sirve a la vez para vigilar el fármaco y para tratar la comorbilidad, que es lo que determina el pronóstico vital.' },
      { prueba: 'Prueba de embarazo y consejo anticonceptivo', utilidad: 'La acitretina es teratogena y obliga a evitar el embarazo durante TRES AÑOS tras suspenderla, un dato que se olvida con frecuencia. El metotrexato también es teratogeno. La SOLAPSO recomienda ofrecer consejo estructurado a toda mujer que planea embarazo, esta embarazada o esta en el posparto.' },
      { prueba: 'Cultivo o estudio micologico si hay duda', utilidad: 'Para separar la psoriasis invertida de la candidiasis de pliegues, y la psoriasis ungueal de la onicomicosis, que coexisten con frecuencia. Tratar una onicomicosis inexistente durante meses es un error habitual.' },
      { prueba: 'Reactantes de fase aguda', utilidad: 'Poco útiles en la enfermedad cutánea. Adquieren valor cuando se sospecha artritis psoriásica o ante una pustulosa generalizada, donde la leucocitosis con neutrofilia y la elevación de la proteína C reactiva acompañan al brote.' }
    ],
    no_invasivos: [
      { metodo: 'PASI (calculadora disponible)', interpretacion: 'Combina el eritema, la induración y la descamación con la superficie afectada en cuatro regiones corporales. Es la medida de referencia en los ensayos y la que definen las metas.', cutoff: 'Meta: PASI absoluto menor de 3 o respuesta PASI90' },
      { metodo: 'Gravedad y criterio de sistémico (calculadora disponible)', interpretacion: 'Cruza la superficie corporal, el PGA, la calidad de vida y las áreas de alto impacto para decidir si el paciente es candidato a tratamiento sistémico.', cutoff: 'Un área de alto impacto basta, aunque la superficie sea pequeña' },
      { metodo: 'Respuesta al tratamiento (calculadora disponible)', interpretacion: 'Compara el PASI basal con el actual, calcula la respuesta relativa y el valor absoluto, y separa la respuesta completa de la parcial y del fracaso.', cutoff: 'PASI 3 a 10 con impacto en la calidad de vida es respuesta PARCIAL' },
      { metodo: 'Cribado de artritis psoriásica (calculadora disponible)', interpretacion: 'Cinco preguntas dirigidas al dolor articular inflamatorio, la dactilitis, la entesitis y la rigidez matutina prolongada.', cutoff: 'Tres o más respuestas positivas: derivar a reumatología' },
      { metodo: 'Índice dermatológico de calidad de vida', interpretacion: 'Diez preguntas sobre el impacto de la piel en la vida diaria. Es la única de las medidas que recoge lo que el paciente vive, y por eso entra en la definición de la meta.', cutoff: 'Meta: menor de 5' },
      { metodo: 'Dermatoscopia', interpretacion: 'Muestra un patrón de vasos puntiformes regularmente distribuidos sobre fondo rojo con escama blanca. Ayuda a separar la placa de un eccema crónico o de una micosis fungoide en fase de placa.', cutoff: 'Vasos puntiformes uniformes, no arboriformes' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Parte del cribado de tuberculosis antes de iniciar un biológico. No aporta nada al diagnóstico cutáneo.' },
      { modalidad: 'Radiografía de manos, pies y sacroilíacas', hallazgos: 'Ante sospecha de artritis psoriásica: erosiones con proliferación ósea, imagen en lápiz y copa, anquilosis y sacroileitis habitualmente asimétrica. Su normalidad no descarta enfermedad precoz.' },
      { modalidad: 'Ecografía articular con Doppler', hallazgos: 'Detecta sinovitis, entesitis y dactilitis antes de que aparezcan cambios radiográficos. Es la exploración más útil cuando la clínica articular es dudosa.' },
      { modalidad: 'Resonancia magnética', hallazgos: 'Edema óseo y entesitis precoz, sobre todo en sacroilíacas. Se reserva para casos seleccionados en los que confirmar el diagnóstico cambia el tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por la <strong>forma clínica</strong> (en placas, guttata, invertida, palmoplantar, ungueal, del cuero cabelludo, genital, eritrodermica y pustulosa), por la <strong>gravedad</strong> y por la <strong>respuesta</strong>. Y hay que separar dos cosas que se confunden: la gravedad NO es solo extensión. La SOLAPSO reconoce las <strong>áreas de alto impacto</strong> (cuero cabelludo, uñas, palmas y plantas, región invertida y genitales), donde una superficie pequeña justifica tratamiento sistémico. Las metas son numéricas: <strong>PASI absoluto menor de 3, o PASI90, o PGA 0/1, con índice de calidad de vida menor de 5</strong>; menor de 10 en el NAPSI modificado para la uña, y menor de 3 en el GPPASI para la pustulosa generalizada.`,
    escalas: [
      { nombre: 'PASI (calculadora disponible)', componentes: 'Eritema, induración y descamación puntuados de 0 a 4, multiplicados por el área afectada de 0 a 6, en cabeza, tronco, miembros superiores y miembros inferiores, con los pesos 0.1, 0.3, 0.2 y 0.4.', formula: 'Suma ponderada de las cuatro regiones, con un rango de 0 a 72.', interpretacion: 'Es la medida de referencia. Su punto ciego es la superficie pequeña: un PASI bajo puede corresponder a una enfermedad incapacitante si esta en las palmas o en los genitales. Por eso la meta moderna es el PASI ABSOLUTO menor de 3 y no solo el porcentaje de mejoría.' },
      { nombre: 'Superficie corporal afectada', componentes: 'Porcentaje de superficie corporal con lesiones; la palma del paciente con los dedos juntos equivale aproximadamente al 1%.', formula: 'Estimación por regla de la palma o por regla de los nueves.', interpretacion: 'Útil por lo rápida. La SOLAPSO señala que mantener una superficie menor o igual al 1% (y hasta el 3%) se asocia a una calidad de vida comparable a la de la población general, y la propone como alternativa cuando no se dispone de PASI ni de PGA.' },
      { nombre: 'Evaluación global del médico (PGA)', componentes: 'Valoración global del eritema, la induración y la descamación en una escala de 0 (aclarado) a 4 (grave).', formula: 'Puntuación única de 0 a 4.', interpretacion: 'Rápida y reproducible. La meta es PGA 0 o 1, es decir, aclarado o casi aclarado. Es la medida que la SOLAPSO propone para las formas distintas de la placa: guttata, eritrodermica, invertida, palmoplantar y del cuero cabelludo.' },
      { nombre: 'Índice dermatológico de calidad de vida (DLQI)', componentes: 'Diez preguntas sobre síntomas, vida diaria, ocio, trabajo o estudios, relaciones personales y tratamiento, en la última semana.', formula: 'Rango de 0 a 30.', interpretacion: 'Meta: menor de 5. Es la parte de la definición de éxito que se olvida, y la única que recoge lo que el paciente vive. Una respuesta cutánea buena con calidad de vida mala es una respuesta PARCIAL, no un éxito.' },
      { nombre: 'NAPSI modificado y GPPASI', componentes: 'El primero puntúa la matriz y el lecho ungueal en cada uña; el segundo adapta el PASI a la pustulosa generalizada sustituyendo la descamación por la pustulacion.', formula: 'Puntuaciones específicas de cada forma.', interpretacion: 'Metas de la SOLAPSO: NAPSI modificado menor de 10 en la psoriasis ungueal y GPPASI menor de 3 en la pustulosa generalizada. Existen porque el PASI clásico no mide bien ni la uña ni la pústula.' },
      { nombre: 'Cribado de artritis psoriásica (calculadora disponible)', componentes: 'Dolor articular inflamatorio, rigidez matutina de más de 30 minutos, dactilitis, entesitis y dolor lumbar inflamatorio.', formula: 'Cuestionario dirigido de cinco preguntas.', interpretacion: 'Hasta un tercio de los pacientes con psoriasis desarrolla artritis, la piel suele preceder a la articulación en años y el daño estructural es IRREVERSIBLE. Preguntar por estos cinco puntos en cada consulta es la intervención de mayor rendimiento del internista en este tema.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Psoriasis en placas: reconocerla y medirla',
      color: '#a1442e',
      definicion: 'Forma más frecuente, con placas eritematosas bien delimitadas cubiertas de escama blanca-nacarada, de distribución simétrica en superficies de extensión, cuero cabelludo y región sacra.',
      fisiopatologia: 'La célula dendritica activada produce interleucina 23, que mantiene al linfocito Th17; este libera interleucina 17 e interleucina 22, que act&uacute;an sobre el queratinocito acelerando su recambio y reclutando neutrófilos. El queratinocito responde produciendo más citocinas y péptidos antimicrobianos, con lo que el circuito se autoalimenta. De ahi salen los tres signos de la placa: el eritema por la vasodilatación papilar, la induración por la acantosis y la escama por la paraqueratosis. Y de ahi salen también las dianas de los biológicos modernos, que bloquean exactamente ese eje.',
      epidemiologia: 'Afecta en torno al 2 a 3% de la población, con dos picos de inicio, uno en la segunda y tercera décadas y otro después de los cincuenta. Es igual de frecuente en ambos sexos. La forma en placas supone alrededor del 90% de los casos.',
      factores_riesgo: ['Antecedente familiar de psoriasis', 'Obesidad y síndrome metabólico', 'Tabaquismo', 'Consumo de alcohol', 'Infección estreptocócica faríngea, sobre todo en la forma guttata', 'Estrés psicológico', 'Traumatismo cutáneo, por fenómeno de Koebner', 'Fármacos: litio, betabloqueantes, antipalúdicos, interferón', 'Retirada brusca de corticoides sistémicos', 'Infección por VIH, que agrava las formas existentes'],
      clinica: 'Placa eritematosa de bordes netos con escama gruesa, en codos, rodillas, región sacra y cuero cabelludo. Prurito en más de la mitad de los pacientes, en contra de la idea clásica de que no pica. Signo de la vela y signo de Auspitz al raspado metodico. Fenómeno de Koebner sobre zonas de traumatismo. Afectación ungueal con piqueteado, onicolisis y mancha de aceite.',
      criterios_dx: 'Diagnóstico CLÍNICO por la morfología y la distribución. La biopsia se reserva para los casos atípicos y muestra acantosis regular con elongacion de las crestas, paraqueratosis, ausencia de capa granulosa y microabscesos neutrofílicos de Munro.',
      laboratorio: 'Ninguno confirma el diagnóstico. Se solicitan para elegir tratamiento con seguridad: cribado de tuberculosis, serologías de hepatitis B, C y VIH, hemograma, función hepática y renal, perfil lipídico y glucemia.',
      imagen: 'No se necesita para la piel. Radiografía de tórax dentro del cribado previo al biológico.',
      complementarios: 'PASI, superficie corporal, PGA y DLQI. Dermatoscopia si hay duda con eccema o micosis fungoide.',
      dx_diferencial: 'Dermatitis seborreica (escama grasa y amarillenta, bordes mal definidos, en surcos nasogenianos), eccema numular, tinea corporis (borde activo con aclaramiento central, examen micologico), micosis fungoide en fase de placa (placa única persistente que no responde), liquen plano, pitiriasis rosada y lupus cutáneo subagudo.',
      tx_medico: 'En la enfermedad leve, tratamiento tópico: corticoide de potencia media o alta combinado con análogo de vitamina D, que es la combinación con mejor relación entre eficacia y seguridad. Emolientes y queratoliticos con ácido salicilico o urea para retirar la escama gruesa antes de aplicar el resto. Educación sobre la cronicidad y sobre los desencadenantes.',
      tx_farmacologico: 'Corticoide tópico más calcipotriol. En cuero cabelludo, vehículos en espuma o solución. En cara y pliegues, inhibidores de la calcineurina para evitar la atrofia por corticoide. La fototerapia UVB de banda estrecha es opción de primera línea cuando la enfermedad es extensa pero no procede un sistémico.',
      tx_intervencionista: 'No aplica en la forma en placas.',
      criterios_uci: 'No aplica salvo en las formas eritrodermica y pustulosa generalizada, que tienen ficha propia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si el paciente esta ingresado por otro motivo, vigilar la retirada brusca de corticoides sistémicos, que puede precipitar un brote pustuloso.',
      seguimiento_ambulatorio: 'Reevaluar con PASI y DLQI a las 12 a 16 semanas de cada cambio terapéutico, que es cuando se juzga la respuesta. Vigilancia de comorbilidad cardiometabolica y cribado de artritis en cada visita.',
      pronostico: 'Enfermedad crónica con brotes y remisiones. No se cura, pero con los tratamientos actuales el aclaramiento completo o casi completo es un objetivo alcanzable en la mayoría de los pacientes.',
      algoritmo: ['Confirmar por la clínica: placa, escama, distribución y uñas', 'Medir con PASI, superficie corporal, PGA y DLQI', 'Buscar áreas de alto impacto, que cambian la decisión', 'Cribar artritis psoriásica con las cinco preguntas', 'Leve: tópico con corticoide más análogo de vitamina D', 'Moderada o grave: sistémico, tras el cribado de seguridad', 'Reevaluar a las 12 a 16 semanas contra la meta numérica']
    },
    {
      nombre: 'Formas clínicas que cambian el manejo',
      color: '#8a5a2e',
      definicion: 'Presentaciones distintas de la placa clásica que, por su localización o por su morfología, alteran el diagnóstico diferencial, la elección del vehiculo y el umbral para pasar a tratamiento sistémico.',
      fisiopatologia: 'El mismo eje inflamatorio se expresa de forma distinta según el territorio. En los pliegues la humedad impide que se forme la escama, y queda solo una placa roja brillante que se confunde con una candidiasis. En palmas y plantas la piel gruesa dificulta la penetración del tópico y explica la mala respuesta. En la uña la inflamación se localiza en la matriz, y produce piqueteado, o en el lecho, y produce onicolisis y mancha de aceite. Y en la forma guttata la infección estreptocócica act&uacute;a como superantigeno que dispara un brote de lesiones pequeñas y diseminadas.',
      epidemiologia: 'La afectación del cuero cabelludo llega al 80% de los pacientes en algún momento, la ungueal al 50% y la guttata predomina en niños y adultos jóvenes tras una faringitis. Las palmoplantares y las genitales son las que más se infradiagnostican, la primera por confusión con eccema y la segunda porque no se explora.',
      factores_riesgo: ['Faringitis estreptocócica reciente, para la forma guttata', 'Obesidad y roce, para la forma invertida', 'Trabajo manual y traumatismo repetido, para la palmoplantar', 'Tabaquismo, con asociación especialmente marcada en la pustulosis palmoplantar', 'Afectación ungueal, que predice artritis'],
      clinica: 'Guttata: papulas en gota de 2 a 10 milimetros en tronco y raíz de miembros, dos a tres semanas tras una faringitis. Invertida: placas rojas brillantes SIN escama en axilas, inglés, surco interglut&eacute;o y submamario. Palmoplantar: hiperqueratosis con fisuras dolorosas que limitan la función. Ungueal: piqueteado, onicolisis, mancha de aceite e hiperqueratosis subungueal. Cuero cabelludo: placas que sobrepasan la línea de implantación del pelo. Genital: eritema bien delimitado, con enorme impacto en la vida sexual y casi nunca preguntado.',
      criterios_dx: 'Clínicos. La duda más frecuente es con la tinea y con la candidiasis en los pliegues, y con la onicomicosis en la uña; en ambos casos el examen micologico decide y ambos pueden COEXISTIR con la psoriasis.',
      laboratorio: 'Cultivo faringeo o título de antiestreptolisina si se sospecha desencadenante estreptococico en la guttata. Examen micologico directo y cultivo ante duda en pliegues o uñas.',
      imagen: 'No se necesita. La ecografía ungueal y de entesis puede mostrar afectación subclínica cuando se sospecha artritis.',
      complementarios: 'NAPSI modificado para la uña. Fotografia clínica seriada, especialmente útil en áreas de alto impacto para documentar la respuesta.',
      dx_diferencial: 'Guttata: pitiriasis rosada, sífilis secundaria, liquen plano y exantema virico. Invertida: candidiasis, intertrigo, eritrasma, enfermedad de Hailey-Hailey. Palmoplantar: eccema dishidrotico, tinea manuum, queratodermia. Ungueal: onicomicosis, liquen plano ungueal, traumatismo.',
      tx_medico: 'Elegir el VEHICULO según la zona: espuma o solución en cuero cabelludo, crema o pomada en placas, y en pliegues corticoide de baja potencia o inhibidor de la calcineurina para evitar atrofia y estrías. Tratar la faringitis estreptocócica de la guttata no cambia el curso de la psoriasis, aunque si esta indicado tratar la infección en si.',
      tx_farmacologico: 'La SOLAPSO recomienda para el cuero cabelludo sistémicos convencionales o biológicos sin orden preferente; para la uña, adalimumab, etanercept, guselkumab, infliximab, ixekizumab, risankizumab, secukinumab o ustekinumab sin orden preferente; para la palmoplantar, cualquier biológico solo o combinado con tópicos; y para la invertida, la genital y la guttata, biológicos o moleculas pequeñas sin orden preferente.',
      tx_intervencionista: 'No aplica. La fototerapia UVB de banda estrecha es una opción útil en la guttata extensa.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica salvo ingreso por otra causa.',
      seguimiento_ambulatorio: 'La uña responde despacio: hay que avisar de que la mejoría tarda MESES porque depende del crecimiento ungueal, o el paciente abandona el tratamiento creyendo que no funciona. En la guttata, informar de que puede resolverse sola en meses o evolucionar a psoriasis en placas.',
      pronostico: 'La guttata tiene el mejor pronóstico y puede resolverse por completo. La ungueal y la palmoplantar son las más refractarias y las que más incapacitan en relación con la superficie que ocupan.',
      algoritmo: ['Identificar la forma y el territorio afectado', 'Comprobar si es un área de alto impacto', 'Descartar micosis con examen directo si hay duda', 'Ajustar el VEHICULO del tópico a la zona', 'Bajar el umbral de sistémico en áreas de alto impacto', 'Advertir del tiempo de respuesta de la uña']
    },
    {
      nombre: 'Eritrodermia y pustulosa generalizada: las dos urgencias',
      color: '#8c2e3a',
      definicion: 'Formas graves y potencialmente mortales: la eritrodermica afecta a más del 90% de la superficie corporal con alteración de la barrera y de la termorregulación; la pustulosa generalizada cursa con brotes de pústulas esteriles sobre piel eritematosa, con fiebre y respuesta inflamatoria sistémica.',
      fisiopatologia: 'En la eritrodermia la vasodilatación masiva produce pérdida de calor, de agua y de proteínas por la piel, con riesgo de hipotermia, deshidratación, hipoalbuminemia e insuficiencia cardiaca de alto gasto, además de una puerta de entrada enorme para la infección. La pustulosa generalizada tiene un mecanismo propio y distinto del de la placa: el eje de la INTERLEUCINA 36, cuyo antagonista puede estar deficiente por mutación, produce un reclutamiento neutrofílico masivo que forma pústulas esteriles. Esa diferencia mecanística es la razón de que exista un fármaco dirigido específicamente contra el receptor de interleucina 36.',
      epidemiologia: 'Ambas son poco frecuentes. La pustulosa generalizada es una enfermedad rara con brotes que pueden ser mortales por complicaciones sistémicas. El desencadenante más identificable y más evitable de ambas es la RETIRADA BRUSCA de un corticoide sistémico.',
      factores_riesgo: ['Retirada brusca de corticoides sistémicos', 'Infección intercurrente', 'Embarazo, en la forma llamada impetigo herpetiforme', 'Hipocalcemia', 'Fármacos: litio, antipalúdicos, retirada de ciclosporina', 'Fototerapia con quemadura', 'Mutaciones del antagonista del receptor de interleucina 36'],
      clinica: 'Eritrodermia: eritema generalizado con descamación laminar, escalofríos, sensación de frío, edema, taquicardia y adenopatías. Pustulosa generalizada: brote agudo de pústulas de 2 a 3 milimetros que confluyen en lagos de pus sobre piel eritematosa y dolorosa, con FIEBRE, malestar y leucocitosis con neutrofilia. Ambas pueden acompañarse de fallo hemodinámico.',
      criterios_dx: 'Clínicos. En la pustulosa hay que confirmar que las pústulas son ESTERILES (cultivo negativo) y descartar una pustulosis exantematica generalizada aguda por fármacos, que es el diferencial principal y cuya clave es la relación temporal con el medicamento.',
      laboratorio: 'Hemograma con leucocitosis y neutrofilia, proteína C reactiva elevada, hipoalbuminemia, alteraciones iónicas con HIPOCALCEMIA característica en la pustulosa, función renal y hepática. Cultivo del contenido pustuloso y hemocultivos si hay fiebre.',
      imagen: 'Radiografía de tórax si hay fiebre o sospecha de infección. Ecocardiograma si hay datos de insuficiencia cardiaca de alto gasto en la eritrodermia.',
      complementarios: 'GPPASI para la pustulosa. Vigilancia estrecha de temperatura, balance hídrico y hemodinámica. Biopsia si el diagnóstico no esta claro.',
      dx_diferencial: 'Eritrodermia: por eccema, por fármacos, por micosis fungoide o síndrome de Sezary, por pitiriasis rubra pilaris. Pustulosa: pustulosis exantematica generalizada aguda por fármacos, síndrome de Sweet, foliculitis extensa e infección cutánea.',
      tx_medico: 'INGRESO. Medidas de soporte que son las que salvan: control de la temperatura ambiental, reposición de líquidos y electrolitos, corrección de la hipocalcemia y de la hipoalbuminemia, curas topicas con emolientes y vigilancia de la sobreinfección. Retirar el desencadenante, y muy especialmente NO retirar de golpe un corticoide sistémico.',
      tx_farmacologico: 'En la pustulosa generalizada la SOLAPSO recomienda SPESOLIMAB, anticuerpo contra el receptor de interleucina 36, como primera opción; si no esta disponible o esta contraindicado, sugiere bimekizumab, ciclosporina, guselkumab, infliximab, ixekizumab, risankizumab o secukinumab sin orden preferente. En la eritrodermica recomienda biológicos de alta eficacia sin orden preferente: bimekizumab, guselkumab, infliximab, ixekizumab, risankizumab o secukinumab.',
      tx_intervencionista: 'No aplica. Los cuidados de enfermeria especializados en piel son determinantes en el resultado.',
      criterios_uci: 'Inestabilidad hemodinámica, hipotermia refractaria, insuficiencia cardiaca de alto gasto, sepsis o alteraciones iónicas graves. La eritrodermia es una situación en la que la piel se comporta como un órgano en fallo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Constantes, balance hídrico, calcio, albúmina y función renal a diario. Vigilancia activa de infección, que es la causa principal de mortalidad. Reevaluar la extensión y la aparición de nuevas pústulas.',
      seguimiento_ambulatorio: 'Tras el brote hay que dejar un tratamiento de MANTENIMIENTO, porque el riesgo de recidiva es alto, y un plan escrito de que hacer ante los primeros signos de un nuevo brote.',
      pronostico: 'Potencialmente mortal en la fase aguda, sobre todo por infección y por complicaciones cardiovasculares. Con tratamiento dirigido precoz el control del brote es rápido.',
      algoritmo: ['Reconocer la urgencia: fiebre con pústulas, o eritema mayor del 90%', 'Ingresar y estabilizar: temperatura, volumen, calcio y albúmina', 'Buscar y retirar el desencadenante', 'Cultivar para confirmar que las pústulas son esteriles', 'Pustulosa generalizada: spesolimab de primera elección', 'Eritrodermica: biológico de alta eficacia', 'Dejar mantenimiento y plan escrito de recidiva']
    },
    {
      nombre: 'Artritis psoriásica: el cribado que le toca al internista',
      color: '#3d5a73',
      definicion: 'Artropatía inflamatoria asociada a la psoriasis, seronegativa, que afecta a articulaciones periféricas, entesis, dedos completos y esqueleto axial, y que produce daño estructural irreversible.',
      fisiopatologia: 'El mismo eje interleucina 23 / Th17 act&uacute;a sobre la ENTESIS, que es el punto de inserción del tendón en el hueso y el tejido donde se inicia la enfermedad. De ahi la inflamación se extiende a la sinovial y al hueso adyacente. Esa localización explica dos rasgos que la separan de la artritis reumatoide: la dactilitis, o dedo en salchicha, que es la inflamación de todo el dedo y no de una articulación, y la coexistencia de erosión con PROLIFERACIÓN ósea nueva, mientras que la artritis reumatoide solo erosiona.',
      epidemiologia: 'Aparece en una proporción importante de los pacientes con psoriasis, con estimaciones que llegan a un tercio. En la gran mayoría la piel PRECEDE a la articulación, a menudo en años, lo que coloca al médico que ve la piel en la mejor posición para detectarla a tiempo.',
      factores_riesgo: ['Psoriasis ungueal, que es el mejor predictor clínico', 'Afectación del cuero cabelludo y de la región invertida', 'Psoriasis extensa', 'Obesidad', 'Antecedente familiar de artritis psoriásica', 'Traumatismo articular previo'],
      clinica: 'Dolor articular INFLAMATORIO: empeora con el reposo, mejora con el movimiento y se acompaña de rigidez matutina de más de 30 minutos. Dactilitis. Entesitis, sobre todo aquilea y en la fascia plantar. Afectación de interfalángicas DISTALES, muy característica y relacionada con la enfermedad ungueal. Dolor lumbar inflamatorio en la forma axial. Puede ser oligoarticular y asimétrica, poliarticular y simétrica, o mutilante.',
      criterios_dx: 'Criterios CASPAR: enfermedad articular inflamatoria más al menos tres puntos entre psoriasis actual (dos puntos), antecedente personal o familiar de psoriasis, distrofia ungueal psoriásica, factor reumatoide negativo, dactilitis actual o previa y proliferación ósea yuxtaarticular en la radiografía.',
      laboratorio: 'Factor reumatoide y anticuerpos antipeptido citrulinado NEGATIVOS, que es lo que apoya el diagnóstico y separa de la artritis reumatoide. Proteína C reactiva y velocidad de sedimentación pueden ser normales, y su normalidad NO descarta.',
      imagen: 'Radiografía con erosiones y proliferación ósea, imagen en lápiz y copa, anquilosis y sacroileitis asimétrica. Ecografía con Doppler para sinovitis y entesitis. Resonancia para edema óseo y afectación axial precoz.',
      complementarios: 'Cuestionario de cribado en cada visita dermatológica. Recuento de articulaciones dolorosas e inflamadas si se confirma.',
      dx_diferencial: 'Artritis reumatoide (simétrica, factor reumatoide positivo, sin dactilitis ni proliferación ósea), gota, artrosis de interfalángicas distales, espondiloartritis axial, artritis reactiva.',
      tx_medico: 'Derivación a reumatología, que es la conducta clave del internista y del dermatólogo. Ejercicio, control del peso y fisioterapia. Antiinflamatorios para el síntoma mientras se establece el tratamiento de fondo.',
      tx_farmacologico: 'La elección del fármaco para la piel debe tener en cuenta la articulación: los anti factor de necrosis tumoral, los inhibidores de interleucina 17 y los de interleucina 12/23 y 23 act&uacute;an sobre ambas, mientras que los inhibidores de interleucina 23 tienen menos evidencia axial. La SOLAPSO advierte de forma expresa que NO formulo la artritis como pregunta clínica propia, de modo que su recomendación orienta pero no sustituye a una guía reumatologica.',
      tx_intervencionista: 'Infiltración local en entesitis o monoartritis persistente. Cirugía en el daño estructural avanzado.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Cribado en CADA visita, porque la artritis puede aparecer en cualquier momento de la evolución. Una vez diagnosticada, seguimiento conjunto entre dermatología y reumatología, que es lo que mejor funciona y lo que menos se organiza.',
      pronostico: 'El daño estructural es IRREVERSIBLE, y el retraso diagnóstico de más de seis meses se asocia a peor función a largo plazo. Ese dato es toda la justificación del cribado sistemático.',
      algoritmo: ['Preguntar en cada visita por dolor inflamatorio y rigidez matutina', 'Explorar dactilitis, entesis aquilea y fascia plantar', 'Mirar las uñas, que son el mejor predictor', 'Si el cribado es positivo, derivar sin esperar a la radiografía', 'Elegir el fármaco de la piel pensando en la articulación', 'Seguimiento conjunto con reumatología']
    },
    {
      nombre: 'Comorbilidad cardiometabolica y carga psicológica',
      color: '#3f6b52',
      definicion: 'Conjunto de enfermedades asociadas a la psoriasis por la inflamación sistémica compartida, que determinan el pronóstico VITAL del paciente más que la propia piel.',
      fisiopatologia: 'La inflamación crónica con interleucina 17 y factor de necrosis tumoral circulantes promueve resistencia a la insulina, disfunción endotelial y aterosclerosis acelerada. El tejido adiposo, a su vez, produce citocinas que alimentan la inflamación cutánea: por eso la obesidad no solo acompaña a la psoriasis sino que la EMPEORA y reduce la respuesta a los tratamientos. Es un circuito de doble sentido, y esa es la razón de que perder peso mejore la piel.',
      epidemiologia: 'La asociación con síndrome metabólico es independiente de la obesidad. El riesgo cardiovascular aumenta con la gravedad y la duración de la enfermedad. La depresión y la ansiedad son más frecuentes que en la población general, y la ideación suicida esta claramente aumentada en la enfermedad grave.',
      factores_riesgo: ['Psoriasis extensa o de larga evolución', 'Obesidad', 'Tabaquismo', 'Consumo de alcohol', 'Sedentarismo', 'Artritis psoriásica asociada', 'Aislamiento social por la visibilidad de las lesiones'],
      clinica: 'Con frecuencia asintomática en el plano cardiometabolico, y por eso hay que buscarla activamente. En el plano psicológico, verguenza, evitación de actividades que expongan la piel, dificultades en la vida sexual cuando hay afectación genital, y síntomas depresivos que casi nunca se mencionan de forma espontánea.',
      criterios_dx: 'No hay criterios propios. Se aplican los de cada comorbilidad: síndrome metabólico, diabetes, hipertensión, dislipidemia, hígado graso, enfermedad inflamatoria intestinal, y depresión o ansiedad.',
      laboratorio: 'Perfil lipídico, glucemia o hemoglobina glucosilada, función hepática, y tensión arterial e índice de masa corporal en cada visita. Buscar hígado graso, que es especialmente frecuente y relevante si se va a usar metotrexato.',
      imagen: 'Ecografía abdominal si se sospecha hígado graso. Estudio de riesgo cardiovascular según la práctica local.',
      complementarios: 'Cuestionarios breves de depresión y ansiedad. El DLQI ya da una señal: una puntuación alta con enfermedad cutánea leve suele apuntar a carga psicológica desproporcionada.',
      dx_diferencial: 'No aplica; se trata de detección, no de diferencial.',
      tx_medico: 'La SOLAPSO recomienda un plan SUPERVISADO de reducción calórica en el paciente con sobrepeso u obesidad, tanto para reducir la actividad de la enfermedad como para mejorar la respuesta a los sistémicos. Cese del tabaco y del alcohol. Actividad física. Y derivación a APOYO PSICOLÓGICO ESTRUCTURADO, que la guía recomienda de forma expresa por el impacto de la carga emocional sobre la adherencia y sobre la percepción de la enfermedad.',
      tx_farmacologico: 'Tratamiento de cada comorbilidad según su guía. Cuidado con las interacciones: la ciclosporina eleva la tensión arterial y es nefrotóxica, la acitretina eleva los triglicéridos, y el metotrexato requiere prudencia en el hígado graso y con el alcohol.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Revisión anual del riesgo cardiovascular. Peso y tensión en cada visita. Preguntar de forma directa por el ánimo, porque no se ofrece de forma espontánea.',
      pronostico: 'La comorbilidad cardiovascular es la que determina la mortalidad en la psoriasis grave, no la piel. Tratar bien la inflamación y los factores de riesgo tiene más impacto vital que aclarar una placa.',
      algoritmo: ['Peso, cintura y tensión arterial en cada visita', 'Perfil lipídico y glucemia de forma periódica', 'Buscar hígado graso, sobre todo antes de metotrexato', 'Plan supervisado de reducción calórica si hay exceso de peso', 'Preguntar de forma directa por ánimo y ansiedad', 'Derivar a apoyo psicológico estructurado si procede']
    },
    {
      nombre: 'Tratamiento sistémico: metas, escalones y situaciones especiales',
      color: '#5a4a8c',
      definicion: 'Estrategia de tratamiento dirigida a un objetivo numérico, en la que se escalona desde los sistémicos convencionales y la fototerapia hasta los biológicos y las moleculas pequeñas, con excepciones definidas.',
      fisiopatologia: 'Cada escalón act&uacute;a en un punto distinto del eje inflamatorio: el metotrexato de forma amplia sobre la proliferación y la inflamación, la ciclosporina sobre el linfocito T, la acitretina sobre la diferenciación del queratinocito, la fototerapia induciendo apoptosis del linfocito en la piel, y los biológicos bloqueando de forma selectiva el factor de necrosis tumoral, la interleucina 12/23, la interleucina 23 o la interleucina 17. Deucravacitinib inhibe la tirosina cinasa 2 por via alosterica, que es el paso intracelular de la señal de la interleucina 23.',
      epidemiologia: 'La mayoría de los pacientes con enfermedad moderada o grave alcanza hoy PASI90 con los biológicos modernos, un resultado que era excepcional con los convencionales. El limitante real en Latinoamerica es el ACCESO, y por eso la guía regional insiste en los biosimilares y en la valoración de coste.',
      factores_riesgo: ['Enfermedad moderada o grave por superficie, PASI o PGA', 'Afectación de áreas de alto impacto pese a poca superficie', 'Impacto en la calidad de vida con DLQI mayor de 10', 'Fracaso, intolerancia o contraindicación del tratamiento tópico', 'Artritis psoriásica asociada'],
      clinica: 'La decisión de pasar a sistémico no depende solo de la piel que se ve, sino de donde esta y de cuanto limita. Un paciente con placas en las palmas que no puede trabajar cumple criterio, aunque su PASI sea bajo.',
      criterios_dx: 'La SOLAPSO recomienda biológicos o moleculas pequeñas cuando hay contraindicación, intolerancia o falta de respuesta a al menos UN sistémico convencional o a la fototerapia. Excepción importante: en la psoriasis grave que requiere ingreso o que amenaza la vida, recomienda biológicos como PRIMERA opción, por la necesidad de una respuesta rápida.',
      laboratorio: 'Antes de iniciar: cribado de tuberculosis latente, serologías de hepatitis B y C y de VIH, hemograma, función hepática y renal, perfil lipídico y prueba de embarazo. Durante: analítica periódica según el fármaco.',
      imagen: 'Radiografía de tórax en el cribado inicial.',
      complementarios: 'PASI y DLQI basales y a las 12 a 16 semanas. Registro del fármaco, la dosis y la fecha, porque la secuencia de tratamientos previos determina la elección siguiente.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Primera línea convencional según la SOLAPSO: METOTREXATO empezando en 7.5 a 15 mg por semana y titulando, con suplemento de ácido fólico; CICLOSPORINA de 3 a 5 mg por kilo y dia; ACITRETINA de 0.3 a 0.7 mg por kilo y dia; y FOTOTERAPIA UVB de banda estrecha o PUVA. La ciclosporina es la de acción más rápida y la peor tolerada a largo plazo, de modo que se usa para controlar y después se cambia.',
      tx_farmacologico: 'Biológicos SIN orden preferente: anti factor de necrosis tumoral (adalimumab, certolizumab), anti interleucina 12/23 (ustekinumab), anti interleucina 17 y anti interleucina 23. Deucravacitinib como opción. Apremilast como opción NO preferente, cuando lo demás no es viable. Si fracasa un anti factor de necrosis tumoral, cambiar a un mecanismo DISTINTO. Si fracasa un anti interleucina 17, 23 o 12/23, se puede cambiar dentro de la misma clase o a otro mecanismo.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Solo en las formas graves con ficha propia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La psoriasis grave que requiere ingreso es indicación de biológico de entrada, sin pasar por el escalón convencional.',
      seguimiento_ambulatorio: 'Reevaluar contra la meta a las 12 a 16 semanas. Ante respuesta PARCIAL (PASI entre 3 y 10, DLQI mayor de 5 o afectación de un área de alto impacto), la guía sugiere añadir tópico, añadir un sistémico como metotrexato o fototerapia, u optimizar antes de cambiar de biológico, para no quemar opciones futuras.',
      pronostico: 'Con tratamiento dirigido a objetivo la mayoría alcanza la meta. La pérdida secundaria de respuesta existe y es la razón de planificar la secuencia en vez de improvisarla.',
      algoritmo: ['Confirmar criterio de sistémico, incluidas las áreas de alto impacto', 'Cribado de seguridad: tuberculosis, hepatitis, VIH y analítica', 'Convencional o fototerapia, salvo enfermedad grave que amenaza la vida', 'Biológico si hay fracaso, intolerancia o contraindicación de uno convencional', 'Reevaluar a las 12 a 16 semanas contra la meta numérica', 'Respuesta parcial: optimizar o combinar antes de cambiar', 'Fracaso de anti factor de necrosis tumoral: cambiar de mecanismo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La psoriasis se maneja en consulta, pero el internista se la encuentra ingresada por tres motivos: una forma grave, un efecto adverso del tratamiento, o un paciente con psoriasis ingresado por otra cosa en el que hay que decidir que hacer con su tratamiento.',
    parametros: [
      'Formas graves: temperatura, balance hídrico, calcio, albúmina y función renal a diario, con vigilancia activa de infección.',
      'NO retirar de golpe un corticoide sistémico en un paciente con psoriasis: es el desencadenante más evitable de un brote pustuloso o eritrodermico.',
      'Biológico y proceso infeccioso agudo: suspender el biológico mientras dure la infección y reintroducirlo después, no antes.',
      'Cirugía programada: valorar el momento de la dosis del biológico con el equipo quirúrgico; la interrupción prolongada favorece la pérdida de respuesta.',
      'Revisar la medicación del ingreso buscando lo que agrava: litio, betabloqueantes, antipalúdicos e interferón.',
      'Aprovechar el ingreso para lo que en consulta no da tiempo: cribar artritis, medir tensión y peso, y pedir perfil lipídico y glucemia.'
    ],
    criterios_uci_general: 'Eritrodermia con inestabilidad hemodinámica, hipotermia refractaria o insuficiencia cardiaca de alto gasto; pustulosa generalizada con sepsis o alteraciones iónicas graves.',
    criterios_tips_general: 'No aplica en psoriasis.',
    criterios_trasplante_general: 'No aplica en psoriasis.',
    prevencion: 'Control del peso con un plan supervisado, cese del tabaco y del alcohol, evitar la retirada brusca de corticoides sistémicos, revisar los fármacos que agravan, vacunación actualizada ANTES de iniciar un biológico (evitando vacunas de virus vivos una vez iniciado) y consejo anticonceptivo con acitretina y metotrexato.'
  }
};

export const compCites = {
  'Psoriasis en placas: reconocerla y medirla': { criterios_dx: [1], seguimiento_ambulatorio: [1], laboratorio: [1], tx_farmacologico: [1] },
  'Formas clínicas que cambian el manejo': { tx_farmacologico: [1], criterios_dx: [1], laboratorio: [1] },
  'Eritrodermia y pustulosa generalizada: las dos urgencias': { tx_farmacologico: [1, 3], criterios_dx: [1, 3], laboratorio: [1, 3] },
  'Artritis psoriásica: el cribado que le toca al internista': { tx_farmacologico: [1, 5], criterios_dx: [5], laboratorio: [5] },
  'Comorbilidad cardiometabolica y carga psicológica': { tx_medico: [1], criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1] },
  'Tratamiento sistémico: metas, escalones y situaciones especiales': { criterios_dx: [1], tx_medico: [1, 2, 4], tx_farmacologico: [1, 2], seguimiento_ambulatorio: [1], laboratorio: [1] }
};

export const estigmasTitulo = 'Signos de exploración que vale la pena buscar';
export const estigmas = [
  { nombre: 'Signo de la vela', descripcion: 'Al raspar la placa de forma metodica, la escama se desprende en laminas blancas parecidas a la cera raspada de una vela. Es el primero de los tres signos del raspado.' },
  { nombre: 'Signo de Auspitz', descripcion: 'Tras retirar la última capa de escama aparece un punteado hemorrágico fino, producido por la rotura de los capilares dilatados de las papilas dérmicas. Es característico, no patognomónico.' },
  { nombre: 'Fenómeno de Koebner', descripcion: 'Aparición de lesiones nuevas sobre zonas de traumatismo, cicatrices, quemaduras solares o roce. Explica placas en localizaciones inesperadas y aconseja evitar el rascado y los traumatismos.' },
  { nombre: 'Piqueteado ungueal', descripcion: 'Depresiones puntiformes en la lamina, por afectación de la MATRIZ ungueal. Es el hallazgo ungueal más frecuente y uno de los predictores de artritis psoriásica.' },
  { nombre: 'Mancha de aceite', descripcion: 'Coloración amarillo-anaranjada bajo la lamina, por afectación del LECHO ungueal. Junto con la onicolisis de borde eritematoso, separa la psoriasis ungueal de la onicomicosis.' },
  { nombre: 'Dactilitis o dedo en salchicha', descripcion: 'Inflamación de TODO el dedo y no de una articulación aislada, por entesitis y tenosinovitis. Es uno de los criterios CASPAR y una de las cinco preguntas del cribado de artritis.' }
];

export const biopsiaTitulo = 'Biopsia cutánea: cuando si y cuando no';
export const biopsia = {
  indicaciones: [
    'Placa única que crece y no responde al tratamiento: descartar micosis fungoide o enfermedad de Bowen',
    'Eritrodermia de origen incierto, para separar psoriasis de eccema, fármacos o linfoma cutáneo',
    'Duda entre pustulosa generalizada y pustulosis exantematica generalizada aguda por fármacos',
    'Presentación atípica en la que el diagnóstico cambiaría la conducta',
    'Sospecha de una segunda dermatosis superpuesta sobre la psoriasis conocida'
  ],
  ventajas: [
    'Muestra un patrón reconocible: acantosis regular con crestas elongadas y paraqueratosis',
    'Ausencia o adelgazamiento de la capa granulosa, con capilares dilatados en las papilas',
    'Microabscesos neutrofílicos de Munro en la capa cornea',
    'Permite descartar el linfoma cutáneo de células T, que es el diferencial que más pesa'
  ],
  limitaciones: [
    'No se necesita en el caso típico: la psoriasis en placas es un diagnóstico CLÍNICO',
    'Los hallazgos varian con la fase de la lesión y con el tratamiento tópico reciente',
    'Una biopsia de micosis fungoide precoz puede ser indistinguible y obliga a repetirla',
    'No mide gravedad ni orienta la elección del tratamiento'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección local',
    'Evitar biopsiar una placa recién tratada con corticoide potente, que borra el patrón',
    'En la cara y en zonas de alta tensión conviene elegir otro punto por el resultado estético'
  ]
};

export const escalaRefs = { 'PASI (calculadora disponible)': [1], 'Superficie corporal afectada': [1], 'Evaluación global del médico (PGA)': [1], 'Índice dermatológico de calidad de vida (DLQI)': [1], 'NAPSI modificado y GPPASI': [1, 3], 'Cribado de artritis psoriásica (calculadora disponible)': [5] };

export const escalaCalc = {
  'PASI (calculadora disponible)': 'pasi',
  'Superficie corporal afectada': 'gravedad-psoriasis',
  'Evaluación global del médico (PGA)': 'gravedad-psoriasis',
  'Índice dermatológico de calidad de vida (DLQI)': 'gravedad-psoriasis',
  'Cribado de artritis psoriásica (calculadora disponible)': 'cribado-artritis'
};

export const compGroups = [
  { title: 'Reconocer y clasificar', items: ['Psoriasis en placas: reconocerla y medirla', 'Formas clínicas que cambian el manejo'] },
  { title: 'Formas graves', items: ['Eritrodermia y pustulosa generalizada: las dos urgencias'] },
  { title: 'Más allá de la piel', items: ['Artritis psoriásica: el cribado que le toca al internista', 'Comorbilidad cardiometabolica y carga psicológica'] },
  { title: 'Tratamiento', items: ['Tratamiento sistémico: metas, escalones y situaciones especiales'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son el reconocimiento: la placa clásica con su medida, y las formas que cambian la decisión porque están en un sitio que incapacita. La tercera son las dos urgencias, que es donde el internista tiene que actuar y donde no se escalona nada. Las dos siguientes sacan el problema de la piel: la artritis, cuyo daño es irreversible y cuyo cribado depende de quien mira la piel, y la comorbilidad cardiometabolica, que es la que decide el pronóstico vital. La última ordena el tratamiento sistémico alrededor de una meta numérica, con las situaciones especiales que en la práctica son la mayoría: embarazo, tuberculosis latente, hepatitis, VIH y cáncer.';

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
  root: { title: 'PSORIASIS', color: '#a1442e', target: 'definicion' },
  branches: [
    { title: 'En placas', sub: 'La forma habitual &middot; 90% de los casos', color: '#a1442e', target: 'diagnostico', leaves: [
      { title: 'Áreas de alto impacto', sub: 'Uñas, palmas, genitales, cuero cabelludo', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Guttata', sub: 'Tras faringitis &middot; puede resolverse', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Invertida', sub: 'Pliegues &middot; roja y SIN escama', color: '#7a4363', target: 'complicaciones' }
    ] },
    { title: 'Formas graves', sub: 'Urgencia &middot; se empieza por arriba', color: '#8c2e3a', target: 'complicaciones', leaves: [
      { title: 'Eritrodermica', sub: 'Más del 90% &middot; la piel falla', color: '#8c2e3a', target: 'complicaciones' },
      { title: 'Pustulosa generalizada', sub: 'Interleucina 36 &middot; spesolimab', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'Más allá de la piel', sub: 'Lo que decide el pronóstico', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Artritis psoriásica', sub: 'Daño IRREVERSIBLE &middot; cribar', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Cardiometabolica', sub: 'Determina la mortalidad', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1], imagen: [5] };
export const clasificacionCite = [1];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['metas-psoriasis'];
export const figurasClasificacion = ['escalones-psoriasis', 'psoriasis-situaciones-especiales'];

export const figuras = {
  'metas-psoriasis': {
    titulo: 'Metas de tratamiento según la forma clínica',
    fuente: 'Guia latinoamericana de psoriasis, SOLAPSO (Valenzuela F, et al. An Bras Dermatol 2026;101(5):501449).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Forma</th><th>Meta</th><th>Fuerza</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">En placas</td><td>PASI absoluto &lt;3, <em>o</em> respuesta PASI90, <em>o</em> PGA 0/1 &mdash; y además DLQI &lt;5</td><td><span class="figure-tag fail">Recomendación</span></td></tr>
            <tr><td class="figure-org">Ungueal</td><td>NAPSI modificado &lt;10</td><td><span class="figure-tag dys">Sugerencia</span></td></tr>
            <tr><td class="figure-org">Pustulosa generalizada</td><td>GPPASI &lt;3</td><td><span class="figure-tag dys">Sugerencia</span></td></tr>
            <tr><td class="figure-org">Guttata, eritrodermica, invertida, palmoplantar y de cuero cabelludo</td><td>PGA 0/1</td><td><span class="figure-tag dys">Sugerencia</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La meta tiene <strong>dos mitades</strong> y solo se suele recordar la primera. Un paciente con PASI 2 y DLQI de 12 NO ha alcanzado el objetivo: la enfermedad sigue condicionando su vida. Cuando no se dispone de PASI ni de PGA, la guía acepta una superficie corporal menor o igual al 1%, que se asocia a una calidad de vida comparable a la de la población general.</div>`
  },
  'escalones-psoriasis': {
    titulo: 'Escalones del tratamiento y sus dos excepciones',
    fuente: 'SOLAPSO 2026 (doi:10.1016/j.abd.2026.501449) y guias francesas de tratamiento sistemico 2025 (doi:10.1111/jdv.70263).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalón</th><th>Opciones</th><th>Cuando</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Tópico</td><td>Corticoide de potencia media-alta + análogo de vitamina D; queratolitico previo si hay escama gruesa</td><td>Enfermedad leve</td></tr>
            <tr><td class="figure-org">Convencional y fototerapia</td><td>Metotrexato 7.5-15 mg/semana; ciclosporina 3-5 mg/kg/dia; acitretina 0.3-0.7 mg/kg/dia; UVB de banda estrecha o PUVA</td><td>Moderada a grave</td></tr>
            <tr><td class="figure-org">Biológicos y moleculas pequeñas</td><td>Anti factor de necrosis tumoral, anti interleucina 12/23, anti interleucina 17, anti interleucina 23, deucravacitinib. Apremilast como opción no preferente</td><td>Contraindicación, intolerancia o falta de respuesta a <strong>al menos uno</strong> convencional o a la fototerapia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box"><strong>Dos excepciones que rompen el escalón.</strong> Primera: en la psoriasis grave que requiere ingreso o que amenaza la vida, se recomienda <strong>biológico como primera opción</strong>, porque hace falta una respuesta rápida. Segunda: en la pustulosa generalizada se recomienda <strong>spesolimab</strong> de entrada, porque el mecanismo es otro, el de la interleucina 36. Ante fracaso de un anti factor de necrosis tumoral se cambia a un mecanismo distinto; ante fracaso de un anti interleucina 17, 23 o 12/23 se puede cambiar dentro de la clase.</div>`
  },
  'psoriasis-situaciones-especiales': {
    titulo: 'Elegir el sistémico según la situación del paciente',
    fuente: 'Guia latinoamericana de psoriasis, SOLAPSO (Valenzuela F, et al. An Bras Dermatol 2026;101(5):501449).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situación</th><th>Que prefiere la guía</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Embarazo, leve a moderada</td><td>Tópico: emolientes, corticoide de potencia media o calcipotriol</td></tr>
            <tr><td class="figure-org">Embarazo, moderada a grave</td><td>Fototerapia UVB como sistémico; ciclosporina en segunda línea; si hace falta biológico, <strong>certolizumab pegol</strong> como primera opción</td></tr>
            <tr><td class="figure-org">Tuberculosis latente</td><td>Preferir <strong>anti interleucina 17 o anti interleucina 23</strong> por menor riesgo de reactivación; también acitretina, apremilast o fototerapia</td></tr>
            <tr><td class="figure-org">Hepatitis B activa</td><td><strong>No iniciar</strong> sistémico inmunosupresor hasta tratar la infección; antígeno de superficie positivo implica alto riesgo de reactivación y profilaxis antiviral</td></tr>
            <tr><td class="figure-org">Hepatitis C</td><td>Fototerapia UVB como opción recomendada</td></tr>
            <tr><td class="figure-org">VIH en tratamiento antirretroviral</td><td>Fototerapia UVB de banda estrecha de primera línea; acitretina de segunda; después anti interleucina 23, 12/23 o 17</td></tr>
            <tr><td class="figure-org">Cáncer activo</td><td>Tópico, fototerapia (salvo alto riesgo de cáncer cutáneo) y acitretina</td></tr>
            <tr><td class="figure-org">Antecedente de cáncer</td><td>Apremilast, deucravacitinib, anti interleucina 17, 23 o 12/23</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres avisos practicos. La <strong>acitretina es teratogena</strong> y obliga a evitar el embarazo durante tres años tras suspenderla, de modo que en una mujer en edad fértil rara vez es la opción comoda que parece. El <strong>cribado previo</strong> de tuberculosis, hepatitis y VIH no es un trámite: cambia el fármaco que se elige. Y la <strong>vacunación</strong> se actualiza ANTES de empezar, porque después quedan contraindicadas las de virus vivos.</div>`
  }
};
