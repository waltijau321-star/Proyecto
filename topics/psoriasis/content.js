// topics/psoriasis/content.js - Modulo 73: Psoriasis.
// Basado en la guia latinoamericana de la SOLAPSO (Valenzuela 2026) y en las guias francesas
// de tratamiento sistemico (Masson Regnault 2025). Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'psoriasis',
  titulo: 'Psoriasis',
  subtitulo: 'Modulo 73 &middot; Dermatologia',
  accent: '#a1442e',
  accentDim: '#b8654e'
};

export const definicionText = `<p style="margin:0 0 14px;">La psoriasis es una enfermedad <strong>inflamatoria cronica de mecanismo inmunitario</strong> en la que el eje interleucina 23 / linfocito Th17 mantiene una activacion sostenida del queratinocito. El resultado visible es la placa: eritematosa, bien delimitada y cubierta de una escama blanca-nacarada. El resultado invisible es una inflamacion sistemica que se acompa&#241;a de artritis, de enfermedad cardiometabolica y de una carga psicologica que casi nunca se pregunta.</p>
<p style="margin:0 0 14px;">Para el internista hay tres ideas que ordenan el tema. La primera es que <strong>la extension no es la gravedad</strong>: una psoriasis del 3% de superficie corporal en las palmas, las u&#241;as o los genitales incapacita mas que una del 15% en el tronco, y por eso las guias reconocen las llamadas areas de alto impacto. La segunda es que <strong>hay una meta numerica</strong> y no una impresion clinica: la SOLAPSO recomienda un PASI absoluto menor de 3, o una respuesta PASI90, o un PGA de 0 o 1, junto con un indice dermatologico de calidad de vida menor de 5. La tercera es que <strong>dos formas son urgencias</strong>, la eritrodermica y la pustulosa generalizada, y en ellas no se escalona nada: se empieza por arriba.</p>
<p style="margin:0 0 14px;">Y una advertencia sobre el alcance de la guia que se usa aqui: la SOLAPSO deja constancia expresa de que <strong>la artritis psoriasica no se formulo como pregunta clinica propia</strong>, de modo que lo que dice al respecto orienta la eleccion del farmaco pero no sustituye a una guia reumatologica.</p>`;

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
      tituloA: 'La placa tipica',
      tituloB: 'Datos que obligan a replantear',
      compensada: 'Placa ERITEMATOSA, bien delimitada, con escama blanca-nacarada y gruesa, distribuida de forma SIMETRICA en las superficies de extension: codos, rodillas, region sacra y cuero cabelludo. El raspado metodico despega primero la escama en laminas (signo de la vela) y despues deja un punteado hemorragico al retirar la ultima capa (signo de Auspitz), que corresponde a los capilares dilatados de las papilas. El fenomeno de Koebner explica las placas que aparecen sobre cicatrices, ara&#241;azos o zonas de roce. Las u&#241;as ense&#241;an piqueteado, onicolisis con borde eritematoso, mancha de aceite e hiperqueratosis subungueal, y su afectacion es el mejor predictor clinico de artritis.',
      descompensada: 'Datos que cambian el diagnostico o la urgencia: PUSTULAS esteriles diseminadas sobre piel eritematosa con fiebre y leucocitosis, que es psoriasis pustulosa generalizada y se maneja como una urgencia; ERITEMA que supera el 90% de la superficie con alteracion de la termorregulacion, que es eritrodermia; placas que solo responden a corticoide topico y recidivan al suspenderlo en cara y pliegues, donde hay que pensar en dermatitis seborreica o en tinea; una placa unica que no mejora y crece, que obliga a biopsiar por micosis fungoide o enfermedad de Bowen; y dolor articular inflamatorio o dactilitis, que saca el problema del terreno cutaneo.'
    },
    laboratorio: [
      { prueba: 'Ninguna prueba confirma el diagnostico', utilidad: 'La psoriasis en placas es un diagnostico CLINICO. El laboratorio no sirve para confirmarla; sirve para elegir el tratamiento con seguridad y para buscar las comorbilidades que la acompa&#241;an. Esa distincion evita pedir estudios inutiles y olvidar los que si cambian la conducta.' },
      { prueba: 'Cribado de tuberculosis latente', utilidad: 'Prueba de tuberculina o ensayo de liberacion de interferon gamma, con radiografia de torax, ANTES de cualquier biologico. Cambia el farmaco que se elige: ante tuberculosis latente la SOLAPSO recomienda preferir inhibidores de interleucina 17 o de interleucina 23 por su menor riesgo de reactivacion.' },
      { prueba: 'Serologia de hepatitis B y C, y de VIH', utilidad: 'Con hepatitis B activa NO se inicia tratamiento sistemico inmunosupresor hasta haber tratado la infeccion. El antigeno de superficie positivo implica alto riesgo de reactivacion y justifica profilaxis antiviral. En hepatitis C y en VIH la fototerapia es una opcion recomendada de primera linea.' },
      { prueba: 'Hemograma, funcion hepatica y funcion renal', utilidad: 'Base para metotrexato (hepatotoxicidad y mielosupresion), ciclosporina (nefrotoxicidad e hipertension) y acitretina. Se repiten de forma periodica durante el tratamiento, no solo al inicio.' },
      { prueba: 'Perfil lipidico y glucemia', utilidad: 'La psoriasis se asocia a sindrome metabolico de forma independiente de la obesidad, y la acitretina eleva los trigliceridos de manera marcada. Sirve a la vez para vigilar el farmaco y para tratar la comorbilidad, que es lo que determina el pronostico vital.' },
      { prueba: 'Prueba de embarazo y consejo anticonceptivo', utilidad: 'La acitretina es teratogena y obliga a evitar el embarazo durante TRES A&#209;OS tras suspenderla, un dato que se olvida con frecuencia. El metotrexato tambien es teratogeno. La SOLAPSO recomienda ofrecer consejo estructurado a toda mujer que planea embarazo, esta embarazada o esta en el posparto.' },
      { prueba: 'Cultivo o estudio micologico si hay duda', utilidad: 'Para separar la psoriasis invertida de la candidiasis de pliegues, y la psoriasis ungueal de la onicomicosis, que coexisten con frecuencia. Tratar una onicomicosis inexistente durante meses es un error habitual.' },
      { prueba: 'Reactantes de fase aguda', utilidad: 'Poco utiles en la enfermedad cutanea. Adquieren valor cuando se sospecha artritis psoriasica o ante una pustulosa generalizada, donde la leucocitosis con neutrofilia y la elevacion de la proteina C reactiva acompa&#241;an al brote.' }
    ],
    no_invasivos: [
      { metodo: 'PASI (calculadora disponible)', interpretacion: 'Combina el eritema, la induracion y la descamacion con la superficie afectada en cuatro regiones corporales. Es la medida de referencia en los ensayos y la que definen las metas.', cutoff: 'Meta: PASI absoluto menor de 3 o respuesta PASI90' },
      { metodo: 'Gravedad y criterio de sistemico (calculadora disponible)', interpretacion: 'Cruza la superficie corporal, el PGA, la calidad de vida y las areas de alto impacto para decidir si el paciente es candidato a tratamiento sistemico.', cutoff: 'Un area de alto impacto basta, aunque la superficie sea peque&#241;a' },
      { metodo: 'Respuesta al tratamiento (calculadora disponible)', interpretacion: 'Compara el PASI basal con el actual, calcula la respuesta relativa y el valor absoluto, y separa la respuesta completa de la parcial y del fracaso.', cutoff: 'PASI 3 a 10 con impacto en la calidad de vida es respuesta PARCIAL' },
      { metodo: 'Cribado de artritis psoriasica (calculadora disponible)', interpretacion: 'Cinco preguntas dirigidas al dolor articular inflamatorio, la dactilitis, la entesitis y la rigidez matutina prolongada.', cutoff: 'Tres o mas respuestas positivas: derivar a reumatologia' },
      { metodo: 'Indice dermatologico de calidad de vida', interpretacion: 'Diez preguntas sobre el impacto de la piel en la vida diaria. Es la unica de las medidas que recoge lo que el paciente vive, y por eso entra en la definicion de la meta.', cutoff: 'Meta: menor de 5' },
      { metodo: 'Dermatoscopia', interpretacion: 'Muestra un patron de vasos puntiformes regularmente distribuidos sobre fondo rojo con escama blanca. Ayuda a separar la placa de un eccema cronico o de una micosis fungoide en fase de placa.', cutoff: 'Vasos puntiformes uniformes, no arboriformes' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Parte del cribado de tuberculosis antes de iniciar un biologico. No aporta nada al diagnostico cutaneo.' },
      { modalidad: 'Radiografia de manos, pies y sacroiliacas', hallazgos: 'Ante sospecha de artritis psoriasica: erosiones con proliferacion osea, imagen en lapiz y copa, anquilosis y sacroileitis habitualmente asimetrica. Su normalidad no descarta enfermedad precoz.' },
      { modalidad: 'Ecografia articular con Doppler', hallazgos: 'Detecta sinovitis, entesitis y dactilitis antes de que aparezcan cambios radiograficos. Es la exploracion mas util cuando la clinica articular es dudosa.' },
      { modalidad: 'Resonancia magnetica', hallazgos: 'Edema oseo y entesitis precoz, sobre todo en sacroiliacas. Se reserva para casos seleccionados en los que confirmar el diagnostico cambia el tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por la <strong>forma clinica</strong> (en placas, guttata, invertida, palmoplantar, ungueal, del cuero cabelludo, genital, eritrodermica y pustulosa), por la <strong>gravedad</strong> y por la <strong>respuesta</strong>. Y hay que separar dos cosas que se confunden: la gravedad NO es solo extension. La SOLAPSO reconoce las <strong>areas de alto impacto</strong> (cuero cabelludo, u&#241;as, palmas y plantas, region invertida y genitales), donde una superficie peque&#241;a justifica tratamiento sistemico. Las metas son numericas: <strong>PASI absoluto menor de 3, o PASI90, o PGA 0/1, con indice de calidad de vida menor de 5</strong>; menor de 10 en el NAPSI modificado para la u&#241;a, y menor de 3 en el GPPASI para la pustulosa generalizada.`,
    escalas: [
      { nombre: 'PASI (calculadora disponible)', componentes: 'Eritema, induracion y descamacion puntuados de 0 a 4, multiplicados por el area afectada de 0 a 6, en cabeza, tronco, miembros superiores y miembros inferiores, con los pesos 0.1, 0.3, 0.2 y 0.4.', formula: 'Suma ponderada de las cuatro regiones, con un rango de 0 a 72.', interpretacion: 'Es la medida de referencia. Su punto ciego es la superficie peque&#241;a: un PASI bajo puede corresponder a una enfermedad incapacitante si esta en las palmas o en los genitales. Por eso la meta moderna es el PASI ABSOLUTO menor de 3 y no solo el porcentaje de mejoria.' },
      { nombre: 'Superficie corporal afectada', componentes: 'Porcentaje de superficie corporal con lesiones; la palma del paciente con los dedos juntos equivale aproximadamente al 1%.', formula: 'Estimacion por regla de la palma o por regla de los nueves.', interpretacion: 'Util por lo rapida. La SOLAPSO se&#241;ala que mantener una superficie menor o igual al 1% (y hasta el 3%) se asocia a una calidad de vida comparable a la de la poblacion general, y la propone como alternativa cuando no se dispone de PASI ni de PGA.' },
      { nombre: 'Evaluacion global del medico (PGA)', componentes: 'Valoracion global del eritema, la induracion y la descamacion en una escala de 0 (aclarado) a 4 (grave).', formula: 'Puntuacion unica de 0 a 4.', interpretacion: 'Rapida y reproducible. La meta es PGA 0 o 1, es decir, aclarado o casi aclarado. Es la medida que la SOLAPSO propone para las formas distintas de la placa: guttata, eritrodermica, invertida, palmoplantar y del cuero cabelludo.' },
      { nombre: 'Indice dermatologico de calidad de vida (DLQI)', componentes: 'Diez preguntas sobre sintomas, vida diaria, ocio, trabajo o estudios, relaciones personales y tratamiento, en la ultima semana.', formula: 'Rango de 0 a 30.', interpretacion: 'Meta: menor de 5. Es la parte de la definicion de exito que se olvida, y la unica que recoge lo que el paciente vive. Una respuesta cutanea buena con calidad de vida mala es una respuesta PARCIAL, no un exito.' },
      { nombre: 'NAPSI modificado y GPPASI', componentes: 'El primero puntua la matriz y el lecho ungueal en cada u&#241;a; el segundo adapta el PASI a la pustulosa generalizada sustituyendo la descamacion por la pustulacion.', formula: 'Puntuaciones especificas de cada forma.', interpretacion: 'Metas de la SOLAPSO: NAPSI modificado menor de 10 en la psoriasis ungueal y GPPASI menor de 3 en la pustulosa generalizada. Existen porque el PASI clasico no mide bien ni la u&#241;a ni la pustula.' },
      { nombre: 'Cribado de artritis psoriasica (calculadora disponible)', componentes: 'Dolor articular inflamatorio, rigidez matutina de mas de 30 minutos, dactilitis, entesitis y dolor lumbar inflamatorio.', formula: 'Cuestionario dirigido de cinco preguntas.', interpretacion: 'Hasta un tercio de los pacientes con psoriasis desarrolla artritis, la piel suele preceder a la articulacion en a&#241;os y el da&#241;o estructural es IRREVERSIBLE. Preguntar por estos cinco puntos en cada consulta es la intervencion de mayor rendimiento del internista en este tema.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Psoriasis en placas: reconocerla y medirla',
      color: '#a1442e',
      definicion: 'Forma mas frecuente, con placas eritematosas bien delimitadas cubiertas de escama blanca-nacarada, de distribucion simetrica en superficies de extension, cuero cabelludo y region sacra.',
      fisiopatologia: 'La celula dendritica activada produce interleucina 23, que mantiene al linfocito Th17; este libera interleucina 17 e interleucina 22, que act&uacute;an sobre el queratinocito acelerando su recambio y reclutando neutrofilos. El queratinocito responde produciendo mas citocinas y peptidos antimicrobianos, con lo que el circuito se autoalimenta. De ahi salen los tres signos de la placa: el eritema por la vasodilatacion papilar, la induracion por la acantosis y la escama por la paraqueratosis. Y de ahi salen tambien las dianas de los biologicos modernos, que bloquean exactamente ese eje.',
      epidemiologia: 'Afecta en torno al 2 a 3% de la poblacion, con dos picos de inicio, uno en la segunda y tercera decadas y otro despues de los cincuenta. Es igual de frecuente en ambos sexos. La forma en placas supone alrededor del 90% de los casos.',
      factores_riesgo: ['Antecedente familiar de psoriasis', 'Obesidad y sindrome metabolico', 'Tabaquismo', 'Consumo de alcohol', 'Infeccion estreptococica faringea, sobre todo en la forma guttata', 'Estres psicologico', 'Traumatismo cutaneo, por fenomeno de Koebner', 'Farmacos: litio, betabloqueantes, antipaludicos, interferon', 'Retirada brusca de corticoides sistemicos', 'Infeccion por VIH, que agrava las formas existentes'],
      clinica: 'Placa eritematosa de bordes netos con escama gruesa, en codos, rodillas, region sacra y cuero cabelludo. Prurito en mas de la mitad de los pacientes, en contra de la idea clasica de que no pica. Signo de la vela y signo de Auspitz al raspado metodico. Fenomeno de Koebner sobre zonas de traumatismo. Afectacion ungueal con piqueteado, onicolisis y mancha de aceite.',
      criterios_dx: 'Diagnostico CLINICO por la morfologia y la distribucion. La biopsia se reserva para los casos atipicos y muestra acantosis regular con elongacion de las crestas, paraqueratosis, ausencia de capa granulosa y microabscesos neutrofilicos de Munro.',
      laboratorio: 'Ninguno confirma el diagnostico. Se solicitan para elegir tratamiento con seguridad: cribado de tuberculosis, serologias de hepatitis B, C y VIH, hemograma, funcion hepatica y renal, perfil lipidico y glucemia.',
      imagen: 'No se necesita para la piel. Radiografia de torax dentro del cribado previo al biologico.',
      complementarios: 'PASI, superficie corporal, PGA y DLQI. Dermatoscopia si hay duda con eccema o micosis fungoide.',
      dx_diferencial: 'Dermatitis seborreica (escama grasa y amarillenta, bordes mal definidos, en surcos nasogenianos), eccema numular, tinea corporis (borde activo con aclaramiento central, examen micologico), micosis fungoide en fase de placa (placa unica persistente que no responde), liquen plano, pitiriasis rosada y lupus cutaneo subagudo.',
      tx_medico: 'En la enfermedad leve, tratamiento topico: corticoide de potencia media o alta combinado con analogo de vitamina D, que es la combinacion con mejor relacion entre eficacia y seguridad. Emolientes y queratoliticos con acido salicilico o urea para retirar la escama gruesa antes de aplicar el resto. Educacion sobre la cronicidad y sobre los desencadenantes.',
      tx_farmacologico: 'Corticoide topico mas calcipotriol. En cuero cabelludo, vehiculos en espuma o solucion. En cara y pliegues, inhibidores de la calcineurina para evitar la atrofia por corticoide. La fototerapia UVB de banda estrecha es opcion de primera linea cuando la enfermedad es extensa pero no procede un sistemico.',
      tx_intervencionista: 'No aplica en la forma en placas.',
      criterios_uci: 'No aplica salvo en las formas eritrodermica y pustulosa generalizada, que tienen ficha propia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si el paciente esta ingresado por otro motivo, vigilar la retirada brusca de corticoides sistemicos, que puede precipitar un brote pustuloso.',
      seguimiento_ambulatorio: 'Reevaluar con PASI y DLQI a las 12 a 16 semanas de cada cambio terapeutico, que es cuando se juzga la respuesta. Vigilancia de comorbilidad cardiometabolica y cribado de artritis en cada visita.',
      pronostico: 'Enfermedad cronica con brotes y remisiones. No se cura, pero con los tratamientos actuales el aclaramiento completo o casi completo es un objetivo alcanzable en la mayoria de los pacientes.',
      algoritmo: ['Confirmar por la clinica: placa, escama, distribucion y u&#241;as', 'Medir con PASI, superficie corporal, PGA y DLQI', 'Buscar areas de alto impacto, que cambian la decision', 'Cribar artritis psoriasica con las cinco preguntas', 'Leve: topico con corticoide mas analogo de vitamina D', 'Moderada o grave: sistemico, tras el cribado de seguridad', 'Reevaluar a las 12 a 16 semanas contra la meta numerica']
    },
    {
      nombre: 'Formas clinicas que cambian el manejo',
      color: '#8a5a2e',
      definicion: 'Presentaciones distintas de la placa clasica que, por su localizacion o por su morfologia, alteran el diagnostico diferencial, la eleccion del vehiculo y el umbral para pasar a tratamiento sistemico.',
      fisiopatologia: 'El mismo eje inflamatorio se expresa de forma distinta segun el territorio. En los pliegues la humedad impide que se forme la escama, y queda solo una placa roja brillante que se confunde con una candidiasis. En palmas y plantas la piel gruesa dificulta la penetracion del topico y explica la mala respuesta. En la u&#241;a la inflamacion se localiza en la matriz, y produce piqueteado, o en el lecho, y produce onicolisis y mancha de aceite. Y en la forma guttata la infeccion estreptococica act&uacute;a como superantigeno que dispara un brote de lesiones peque&#241;as y diseminadas.',
      epidemiologia: 'La afectacion del cuero cabelludo llega al 80% de los pacientes en algun momento, la ungueal al 50% y la guttata predomina en ni&#241;os y adultos jovenes tras una faringitis. Las palmoplantares y las genitales son las que mas se infradiagnostican, la primera por confusion con eccema y la segunda porque no se explora.',
      factores_riesgo: ['Faringitis estreptococica reciente, para la forma guttata', 'Obesidad y roce, para la forma invertida', 'Trabajo manual y traumatismo repetido, para la palmoplantar', 'Tabaquismo, con asociacion especialmente marcada en la pustulosis palmoplantar', 'Afectacion ungueal, que predice artritis'],
      clinica: 'Guttata: papulas en gota de 2 a 10 milimetros en tronco y raiz de miembros, dos a tres semanas tras una faringitis. Invertida: placas rojas brillantes SIN escama en axilas, ingles, surco interglut&eacute;o y submamario. Palmoplantar: hiperqueratosis con fisuras dolorosas que limitan la funcion. Ungueal: piqueteado, onicolisis, mancha de aceite e hiperqueratosis subungueal. Cuero cabelludo: placas que sobrepasan la linea de implantacion del pelo. Genital: eritema bien delimitado, con enorme impacto en la vida sexual y casi nunca preguntado.',
      criterios_dx: 'Clinicos. La duda mas frecuente es con la tinea y con la candidiasis en los pliegues, y con la onicomicosis en la u&#241;a; en ambos casos el examen micologico decide y ambos pueden COEXISTIR con la psoriasis.',
      laboratorio: 'Cultivo faringeo o titulo de antiestreptolisina si se sospecha desencadenante estreptococico en la guttata. Examen micologico directo y cultivo ante duda en pliegues o u&#241;as.',
      imagen: 'No se necesita. La ecografia ungueal y de entesis puede mostrar afectacion subclinica cuando se sospecha artritis.',
      complementarios: 'NAPSI modificado para la u&#241;a. Fotografia clinica seriada, especialmente util en areas de alto impacto para documentar la respuesta.',
      dx_diferencial: 'Guttata: pitiriasis rosada, sifilis secundaria, liquen plano y exantema virico. Invertida: candidiasis, intertrigo, eritrasma, enfermedad de Hailey-Hailey. Palmoplantar: eccema dishidrotico, tinea manuum, queratodermia. Ungueal: onicomicosis, liquen plano ungueal, traumatismo.',
      tx_medico: 'Elegir el VEHICULO segun la zona: espuma o solucion en cuero cabelludo, crema o pomada en placas, y en pliegues corticoide de baja potencia o inhibidor de la calcineurina para evitar atrofia y estrias. Tratar la faringitis estreptococica de la guttata no cambia el curso de la psoriasis, aunque si esta indicado tratar la infeccion en si.',
      tx_farmacologico: 'La SOLAPSO recomienda para el cuero cabelludo sistemicos convencionales o biologicos sin orden preferente; para la u&#241;a, adalimumab, etanercept, guselkumab, infliximab, ixekizumab, risankizumab, secukinumab o ustekinumab sin orden preferente; para la palmoplantar, cualquier biologico solo o combinado con topicos; y para la invertida, la genital y la guttata, biologicos o moleculas peque&#241;as sin orden preferente.',
      tx_intervencionista: 'No aplica. La fototerapia UVB de banda estrecha es una opcion util en la guttata extensa.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica salvo ingreso por otra causa.',
      seguimiento_ambulatorio: 'La u&#241;a responde despacio: hay que avisar de que la mejoria tarda MESES porque depende del crecimiento ungueal, o el paciente abandona el tratamiento creyendo que no funciona. En la guttata, informar de que puede resolverse sola en meses o evolucionar a psoriasis en placas.',
      pronostico: 'La guttata tiene el mejor pronostico y puede resolverse por completo. La ungueal y la palmoplantar son las mas refractarias y las que mas incapacitan en relacion con la superficie que ocupan.',
      algoritmo: ['Identificar la forma y el territorio afectado', 'Comprobar si es un area de alto impacto', 'Descartar micosis con examen directo si hay duda', 'Ajustar el VEHICULO del topico a la zona', 'Bajar el umbral de sistemico en areas de alto impacto', 'Advertir del tiempo de respuesta de la u&#241;a']
    },
    {
      nombre: 'Eritrodermia y pustulosa generalizada: las dos urgencias',
      color: '#8c2e3a',
      definicion: 'Formas graves y potencialmente mortales: la eritrodermica afecta a mas del 90% de la superficie corporal con alteracion de la barrera y de la termorregulacion; la pustulosa generalizada cursa con brotes de pustulas esteriles sobre piel eritematosa, con fiebre y respuesta inflamatoria sistemica.',
      fisiopatologia: 'En la eritrodermia la vasodilatacion masiva produce perdida de calor, de agua y de proteinas por la piel, con riesgo de hipotermia, deshidratacion, hipoalbuminemia e insuficiencia cardiaca de alto gasto, ademas de una puerta de entrada enorme para la infeccion. La pustulosa generalizada tiene un mecanismo propio y distinto del de la placa: el eje de la INTERLEUCINA 36, cuyo antagonista puede estar deficiente por mutacion, produce un reclutamiento neutrofilico masivo que forma pustulas esteriles. Esa diferencia mecanistica es la razon de que exista un farmaco dirigido especificamente contra el receptor de interleucina 36.',
      epidemiologia: 'Ambas son poco frecuentes. La pustulosa generalizada es una enfermedad rara con brotes que pueden ser mortales por complicaciones sistemicas. El desencadenante mas identificable y mas evitable de ambas es la RETIRADA BRUSCA de un corticoide sistemico.',
      factores_riesgo: ['Retirada brusca de corticoides sistemicos', 'Infeccion intercurrente', 'Embarazo, en la forma llamada impetigo herpetiforme', 'Hipocalcemia', 'Farmacos: litio, antipaludicos, retirada de ciclosporina', 'Fototerapia con quemadura', 'Mutaciones del antagonista del receptor de interleucina 36'],
      clinica: 'Eritrodermia: eritema generalizado con descamacion laminar, escalofrios, sensacion de frio, edema, taquicardia y adenopatias. Pustulosa generalizada: brote agudo de pustulas de 2 a 3 milimetros que confluyen en lagos de pus sobre piel eritematosa y dolorosa, con FIEBRE, malestar y leucocitosis con neutrofilia. Ambas pueden acompa&#241;arse de fallo hemodinamico.',
      criterios_dx: 'Clinicos. En la pustulosa hay que confirmar que las pustulas son ESTERILES (cultivo negativo) y descartar una pustulosis exantematica generalizada aguda por farmacos, que es el diferencial principal y cuya clave es la relacion temporal con el medicamento.',
      laboratorio: 'Hemograma con leucocitosis y neutrofilia, proteina C reactiva elevada, hipoalbuminemia, alteraciones ionicas con HIPOCALCEMIA caracteristica en la pustulosa, funcion renal y hepatica. Cultivo del contenido pustuloso y hemocultivos si hay fiebre.',
      imagen: 'Radiografia de torax si hay fiebre o sospecha de infeccion. Ecocardiograma si hay datos de insuficiencia cardiaca de alto gasto en la eritrodermia.',
      complementarios: 'GPPASI para la pustulosa. Vigilancia estrecha de temperatura, balance hidrico y hemodinamica. Biopsia si el diagnostico no esta claro.',
      dx_diferencial: 'Eritrodermia: por eccema, por farmacos, por micosis fungoide o sindrome de Sezary, por pitiriasis rubra pilaris. Pustulosa: pustulosis exantematica generalizada aguda por farmacos, sindrome de Sweet, foliculitis extensa e infeccion cutanea.',
      tx_medico: 'INGRESO. Medidas de soporte que son las que salvan: control de la temperatura ambiental, reposicion de liquidos y electrolitos, correccion de la hipocalcemia y de la hipoalbuminemia, curas topicas con emolientes y vigilancia de la sobreinfeccion. Retirar el desencadenante, y muy especialmente NO retirar de golpe un corticoide sistemico.',
      tx_farmacologico: 'En la pustulosa generalizada la SOLAPSO recomienda SPESOLIMAB, anticuerpo contra el receptor de interleucina 36, como primera opcion; si no esta disponible o esta contraindicado, sugiere bimekizumab, ciclosporina, guselkumab, infliximab, ixekizumab, risankizumab o secukinumab sin orden preferente. En la eritrodermica recomienda biologicos de alta eficacia sin orden preferente: bimekizumab, guselkumab, infliximab, ixekizumab, risankizumab o secukinumab.',
      tx_intervencionista: 'No aplica. Los cuidados de enfermeria especializados en piel son determinantes en el resultado.',
      criterios_uci: 'Inestabilidad hemodinamica, hipotermia refractaria, insuficiencia cardiaca de alto gasto, sepsis o alteraciones ionicas graves. La eritrodermia es una situacion en la que la piel se comporta como un organo en fallo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Constantes, balance hidrico, calcio, albumina y funcion renal a diario. Vigilancia activa de infeccion, que es la causa principal de mortalidad. Reevaluar la extension y la aparicion de nuevas pustulas.',
      seguimiento_ambulatorio: 'Tras el brote hay que dejar un tratamiento de MANTENIMIENTO, porque el riesgo de recidiva es alto, y un plan escrito de que hacer ante los primeros signos de un nuevo brote.',
      pronostico: 'Potencialmente mortal en la fase aguda, sobre todo por infeccion y por complicaciones cardiovasculares. Con tratamiento dirigido precoz el control del brote es rapido.',
      algoritmo: ['Reconocer la urgencia: fiebre con pustulas, o eritema mayor del 90%', 'Ingresar y estabilizar: temperatura, volumen, calcio y albumina', 'Buscar y retirar el desencadenante', 'Cultivar para confirmar que las pustulas son esteriles', 'Pustulosa generalizada: spesolimab de primera eleccion', 'Eritrodermica: biologico de alta eficacia', 'Dejar mantenimiento y plan escrito de recidiva']
    },
    {
      nombre: 'Artritis psoriasica: el cribado que le toca al internista',
      color: '#3d5a73',
      definicion: 'Artropatia inflamatoria asociada a la psoriasis, seronegativa, que afecta a articulaciones perifericas, entesis, dedos completos y esqueleto axial, y que produce da&#241;o estructural irreversible.',
      fisiopatologia: 'El mismo eje interleucina 23 / Th17 act&uacute;a sobre la ENTESIS, que es el punto de insercion del tendon en el hueso y el tejido donde se inicia la enfermedad. De ahi la inflamacion se extiende a la sinovial y al hueso adyacente. Esa localizacion explica dos rasgos que la separan de la artritis reumatoide: la dactilitis, o dedo en salchicha, que es la inflamacion de todo el dedo y no de una articulacion, y la coexistencia de erosion con PROLIFERACION osea nueva, mientras que la artritis reumatoide solo erosiona.',
      epidemiologia: 'Aparece en una proporcion importante de los pacientes con psoriasis, con estimaciones que llegan a un tercio. En la gran mayoria la piel PRECEDE a la articulacion, a menudo en a&#241;os, lo que coloca al medico que ve la piel en la mejor posicion para detectarla a tiempo.',
      factores_riesgo: ['Psoriasis ungueal, que es el mejor predictor clinico', 'Afectacion del cuero cabelludo y de la region invertida', 'Psoriasis extensa', 'Obesidad', 'Antecedente familiar de artritis psoriasica', 'Traumatismo articular previo'],
      clinica: 'Dolor articular INFLAMATORIO: empeora con el reposo, mejora con el movimiento y se acompa&#241;a de rigidez matutina de mas de 30 minutos. Dactilitis. Entesitis, sobre todo aquilea y en la fascia plantar. Afectacion de interfalangicas DISTALES, muy caracteristica y relacionada con la enfermedad ungueal. Dolor lumbar inflamatorio en la forma axial. Puede ser oligoarticular y asimetrica, poliarticular y simetrica, o mutilante.',
      criterios_dx: 'Criterios CASPAR: enfermedad articular inflamatoria mas al menos tres puntos entre psoriasis actual (dos puntos), antecedente personal o familiar de psoriasis, distrofia ungueal psoriasica, factor reumatoide negativo, dactilitis actual o previa y proliferacion osea yuxtaarticular en la radiografia.',
      laboratorio: 'Factor reumatoide y anticuerpos antipeptido citrulinado NEGATIVOS, que es lo que apoya el diagnostico y separa de la artritis reumatoide. Proteina C reactiva y velocidad de sedimentacion pueden ser normales, y su normalidad NO descarta.',
      imagen: 'Radiografia con erosiones y proliferacion osea, imagen en lapiz y copa, anquilosis y sacroileitis asimetrica. Ecografia con Doppler para sinovitis y entesitis. Resonancia para edema oseo y afectacion axial precoz.',
      complementarios: 'Cuestionario de cribado en cada visita dermatologica. Recuento de articulaciones dolorosas e inflamadas si se confirma.',
      dx_diferencial: 'Artritis reumatoide (simetrica, factor reumatoide positivo, sin dactilitis ni proliferacion osea), gota, artrosis de interfalangicas distales, espondiloartritis axial, artritis reactiva.',
      tx_medico: 'Derivacion a reumatologia, que es la conducta clave del internista y del dermatologo. Ejercicio, control del peso y fisioterapia. Antiinflamatorios para el sintoma mientras se establece el tratamiento de fondo.',
      tx_farmacologico: 'La eleccion del farmaco para la piel debe tener en cuenta la articulacion: los anti factor de necrosis tumoral, los inhibidores de interleucina 17 y los de interleucina 12/23 y 23 act&uacute;an sobre ambas, mientras que los inhibidores de interleucina 23 tienen menos evidencia axial. La SOLAPSO advierte de forma expresa que NO formulo la artritis como pregunta clinica propia, de modo que su recomendacion orienta pero no sustituye a una guia reumatologica.',
      tx_intervencionista: 'Infiltracion local en entesitis o monoartritis persistente. Cirugia en el da&#241;o estructural avanzado.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Cribado en CADA visita, porque la artritis puede aparecer en cualquier momento de la evolucion. Una vez diagnosticada, seguimiento conjunto entre dermatologia y reumatologia, que es lo que mejor funciona y lo que menos se organiza.',
      pronostico: 'El da&#241;o estructural es IRREVERSIBLE, y el retraso diagnostico de mas de seis meses se asocia a peor funcion a largo plazo. Ese dato es toda la justificacion del cribado sistematico.',
      algoritmo: ['Preguntar en cada visita por dolor inflamatorio y rigidez matutina', 'Explorar dactilitis, entesis aquilea y fascia plantar', 'Mirar las u&#241;as, que son el mejor predictor', 'Si el cribado es positivo, derivar sin esperar a la radiografia', 'Elegir el farmaco de la piel pensando en la articulacion', 'Seguimiento conjunto con reumatologia']
    },
    {
      nombre: 'Comorbilidad cardiometabolica y carga psicologica',
      color: '#3f6b52',
      definicion: 'Conjunto de enfermedades asociadas a la psoriasis por la inflamacion sistemica compartida, que determinan el pronostico VITAL del paciente mas que la propia piel.',
      fisiopatologia: 'La inflamacion cronica con interleucina 17 y factor de necrosis tumoral circulantes promueve resistencia a la insulina, disfuncion endotelial y aterosclerosis acelerada. El tejido adiposo, a su vez, produce citocinas que alimentan la inflamacion cutanea: por eso la obesidad no solo acompa&#241;a a la psoriasis sino que la EMPEORA y reduce la respuesta a los tratamientos. Es un circuito de doble sentido, y esa es la razon de que perder peso mejore la piel.',
      epidemiologia: 'La asociacion con sindrome metabolico es independiente de la obesidad. El riesgo cardiovascular aumenta con la gravedad y la duracion de la enfermedad. La depresion y la ansiedad son mas frecuentes que en la poblacion general, y la ideacion suicida esta claramente aumentada en la enfermedad grave.',
      factores_riesgo: ['Psoriasis extensa o de larga evolucion', 'Obesidad', 'Tabaquismo', 'Consumo de alcohol', 'Sedentarismo', 'Artritis psoriasica asociada', 'Aislamiento social por la visibilidad de las lesiones'],
      clinica: 'Con frecuencia asintomatica en el plano cardiometabolico, y por eso hay que buscarla activamente. En el plano psicologico, verguenza, evitacion de actividades que expongan la piel, dificultades en la vida sexual cuando hay afectacion genital, y sintomas depresivos que casi nunca se mencionan de forma espontanea.',
      criterios_dx: 'No hay criterios propios. Se aplican los de cada comorbilidad: sindrome metabolico, diabetes, hipertension, dislipidemia, higado graso, enfermedad inflamatoria intestinal, y depresion o ansiedad.',
      laboratorio: 'Perfil lipidico, glucemia o hemoglobina glucosilada, funcion hepatica, y tension arterial e indice de masa corporal en cada visita. Buscar higado graso, que es especialmente frecuente y relevante si se va a usar metotrexato.',
      imagen: 'Ecografia abdominal si se sospecha higado graso. Estudio de riesgo cardiovascular segun la practica local.',
      complementarios: 'Cuestionarios breves de depresion y ansiedad. El DLQI ya da una se&#241;al: una puntuacion alta con enfermedad cutanea leve suele apuntar a carga psicologica desproporcionada.',
      dx_diferencial: 'No aplica; se trata de deteccion, no de diferencial.',
      tx_medico: 'La SOLAPSO recomienda un plan SUPERVISADO de reduccion calorica en el paciente con sobrepeso u obesidad, tanto para reducir la actividad de la enfermedad como para mejorar la respuesta a los sistemicos. Cese del tabaco y del alcohol. Actividad fisica. Y derivacion a APOYO PSICOLOGICO ESTRUCTURADO, que la guia recomienda de forma expresa por el impacto de la carga emocional sobre la adherencia y sobre la percepcion de la enfermedad.',
      tx_farmacologico: 'Tratamiento de cada comorbilidad segun su guia. Cuidado con las interacciones: la ciclosporina eleva la tension arterial y es nefrotoxica, la acitretina eleva los trigliceridos, y el metotrexato requiere prudencia en el higado graso y con el alcohol.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Revision anual del riesgo cardiovascular. Peso y tension en cada visita. Preguntar de forma directa por el animo, porque no se ofrece de forma espontanea.',
      pronostico: 'La comorbilidad cardiovascular es la que determina la mortalidad en la psoriasis grave, no la piel. Tratar bien la inflamacion y los factores de riesgo tiene mas impacto vital que aclarar una placa.',
      algoritmo: ['Peso, cintura y tension arterial en cada visita', 'Perfil lipidico y glucemia de forma periodica', 'Buscar higado graso, sobre todo antes de metotrexato', 'Plan supervisado de reduccion calorica si hay exceso de peso', 'Preguntar de forma directa por animo y ansiedad', 'Derivar a apoyo psicologico estructurado si procede']
    },
    {
      nombre: 'Tratamiento sistemico: metas, escalones y situaciones especiales',
      color: '#5a4a8c',
      definicion: 'Estrategia de tratamiento dirigida a un objetivo numerico, en la que se escalona desde los sistemicos convencionales y la fototerapia hasta los biologicos y las moleculas peque&#241;as, con excepciones definidas.',
      fisiopatologia: 'Cada escalon act&uacute;a en un punto distinto del eje inflamatorio: el metotrexato de forma amplia sobre la proliferacion y la inflamacion, la ciclosporina sobre el linfocito T, la acitretina sobre la diferenciacion del queratinocito, la fototerapia induciendo apoptosis del linfocito en la piel, y los biologicos bloqueando de forma selectiva el factor de necrosis tumoral, la interleucina 12/23, la interleucina 23 o la interleucina 17. Deucravacitinib inhibe la tirosina cinasa 2 por via alosterica, que es el paso intracelular de la se&#241;al de la interleucina 23.',
      epidemiologia: 'La mayoria de los pacientes con enfermedad moderada o grave alcanza hoy PASI90 con los biologicos modernos, un resultado que era excepcional con los convencionales. El limitante real en Latinoamerica es el ACCESO, y por eso la guia regional insiste en los biosimilares y en la valoracion de coste.',
      factores_riesgo: ['Enfermedad moderada o grave por superficie, PASI o PGA', 'Afectacion de areas de alto impacto pese a poca superficie', 'Impacto en la calidad de vida con DLQI mayor de 10', 'Fracaso, intolerancia o contraindicacion del tratamiento topico', 'Artritis psoriasica asociada'],
      clinica: 'La decision de pasar a sistemico no depende solo de la piel que se ve, sino de donde esta y de cuanto limita. Un paciente con placas en las palmas que no puede trabajar cumple criterio, aunque su PASI sea bajo.',
      criterios_dx: 'La SOLAPSO recomienda biologicos o moleculas peque&#241;as cuando hay contraindicacion, intolerancia o falta de respuesta a al menos UN sistemico convencional o a la fototerapia. Excepcion importante: en la psoriasis grave que requiere ingreso o que amenaza la vida, recomienda biologicos como PRIMERA opcion, por la necesidad de una respuesta rapida.',
      laboratorio: 'Antes de iniciar: cribado de tuberculosis latente, serologias de hepatitis B y C y de VIH, hemograma, funcion hepatica y renal, perfil lipidico y prueba de embarazo. Durante: analitica periodica segun el farmaco.',
      imagen: 'Radiografia de torax en el cribado inicial.',
      complementarios: 'PASI y DLQI basales y a las 12 a 16 semanas. Registro del farmaco, la dosis y la fecha, porque la secuencia de tratamientos previos determina la eleccion siguiente.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Primera linea convencional segun la SOLAPSO: METOTREXATO empezando en 7.5 a 15 mg por semana y titulando, con suplemento de acido folico; CICLOSPORINA de 3 a 5 mg por kilo y dia; ACITRETINA de 0.3 a 0.7 mg por kilo y dia; y FOTOTERAPIA UVB de banda estrecha o PUVA. La ciclosporina es la de accion mas rapida y la peor tolerada a largo plazo, de modo que se usa para controlar y despues se cambia.',
      tx_farmacologico: 'Biologicos SIN orden preferente: anti factor de necrosis tumoral (adalimumab, certolizumab), anti interleucina 12/23 (ustekinumab), anti interleucina 17 y anti interleucina 23. Deucravacitinib como opcion. Apremilast como opcion NO preferente, cuando lo demas no es viable. Si fracasa un anti factor de necrosis tumoral, cambiar a un mecanismo DISTINTO. Si fracasa un anti interleucina 17, 23 o 12/23, se puede cambiar dentro de la misma clase o a otro mecanismo.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Solo en las formas graves con ficha propia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La psoriasis grave que requiere ingreso es indicacion de biologico de entrada, sin pasar por el escalon convencional.',
      seguimiento_ambulatorio: 'Reevaluar contra la meta a las 12 a 16 semanas. Ante respuesta PARCIAL (PASI entre 3 y 10, DLQI mayor de 5 o afectacion de un area de alto impacto), la guia sugiere a&#241;adir topico, a&#241;adir un sistemico como metotrexato o fototerapia, u optimizar antes de cambiar de biologico, para no quemar opciones futuras.',
      pronostico: 'Con tratamiento dirigido a objetivo la mayoria alcanza la meta. La perdida secundaria de respuesta existe y es la razon de planificar la secuencia en vez de improvisarla.',
      algoritmo: ['Confirmar criterio de sistemico, incluidas las areas de alto impacto', 'Cribado de seguridad: tuberculosis, hepatitis, VIH y analitica', 'Convencional o fototerapia, salvo enfermedad grave que amenaza la vida', 'Biologico si hay fracaso, intolerancia o contraindicacion de uno convencional', 'Reevaluar a las 12 a 16 semanas contra la meta numerica', 'Respuesta parcial: optimizar o combinar antes de cambiar', 'Fracaso de anti factor de necrosis tumoral: cambiar de mecanismo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La psoriasis se maneja en consulta, pero el internista se la encuentra ingresada por tres motivos: una forma grave, un efecto adverso del tratamiento, o un paciente con psoriasis ingresado por otra cosa en el que hay que decidir que hacer con su tratamiento.',
    parametros: [
      'Formas graves: temperatura, balance hidrico, calcio, albumina y funcion renal a diario, con vigilancia activa de infeccion.',
      'NO retirar de golpe un corticoide sistemico en un paciente con psoriasis: es el desencadenante mas evitable de un brote pustuloso o eritrodermico.',
      'Biologico y proceso infeccioso agudo: suspender el biologico mientras dure la infeccion y reintroducirlo despues, no antes.',
      'Cirugia programada: valorar el momento de la dosis del biologico con el equipo quirurgico; la interrupcion prolongada favorece la perdida de respuesta.',
      'Revisar la medicacion del ingreso buscando lo que agrava: litio, betabloqueantes, antipaludicos e interferon.',
      'Aprovechar el ingreso para lo que en consulta no da tiempo: cribar artritis, medir tension y peso, y pedir perfil lipidico y glucemia.'
    ],
    criterios_uci_general: 'Eritrodermia con inestabilidad hemodinamica, hipotermia refractaria o insuficiencia cardiaca de alto gasto; pustulosa generalizada con sepsis o alteraciones ionicas graves.',
    criterios_tips_general: 'No aplica en psoriasis.',
    criterios_trasplante_general: 'No aplica en psoriasis.',
    prevencion: 'Control del peso con un plan supervisado, cese del tabaco y del alcohol, evitar la retirada brusca de corticoides sistemicos, revisar los farmacos que agravan, vacunacion actualizada ANTES de iniciar un biologico (evitando vacunas de virus vivos una vez iniciado) y consejo anticonceptivo con acitretina y metotrexato.'
  }
};

export const compCites = {
  'Psoriasis en placas: reconocerla y medirla': { criterios_dx: [1], seguimiento_ambulatorio: [1] },
  'Formas clinicas que cambian el manejo': { tx_farmacologico: [1] },
  'Eritrodermia y pustulosa generalizada: las dos urgencias': { tx_farmacologico: [1, 3] },
  'Artritis psoriasica: el cribado que le toca al internista': { tx_farmacologico: [1, 5], criterios_dx: [5] },
  'Comorbilidad cardiometabolica y carga psicologica': { tx_medico: [1] },
  'Tratamiento sistemico: metas, escalones y situaciones especiales': { criterios_dx: [1], tx_medico: [1, 2, 4], tx_farmacologico: [1, 2], seguimiento_ambulatorio: [1] }
};

export const estigmasTitulo = 'Signos de exploracion que vale la pena buscar';
export const estigmas = [
  { nombre: 'Signo de la vela', descripcion: 'Al raspar la placa de forma metodica, la escama se desprende en laminas blancas parecidas a la cera raspada de una vela. Es el primero de los tres signos del raspado.' },
  { nombre: 'Signo de Auspitz', descripcion: 'Tras retirar la ultima capa de escama aparece un punteado hemorragico fino, producido por la rotura de los capilares dilatados de las papilas dermicas. Es caracteristico, no patognomonico.' },
  { nombre: 'Fenomeno de Koebner', descripcion: 'Aparicion de lesiones nuevas sobre zonas de traumatismo, cicatrices, quemaduras solares o roce. Explica placas en localizaciones inesperadas y aconseja evitar el rascado y los traumatismos.' },
  { nombre: 'Piqueteado ungueal', descripcion: 'Depresiones puntiformes en la lamina, por afectacion de la MATRIZ ungueal. Es el hallazgo ungueal mas frecuente y uno de los predictores de artritis psoriasica.' },
  { nombre: 'Mancha de aceite', descripcion: 'Coloracion amarillo-anaranjada bajo la lamina, por afectacion del LECHO ungueal. Junto con la onicolisis de borde eritematoso, separa la psoriasis ungueal de la onicomicosis.' },
  { nombre: 'Dactilitis o dedo en salchicha', descripcion: 'Inflamacion de TODO el dedo y no de una articulacion aislada, por entesitis y tenosinovitis. Es uno de los criterios CASPAR y una de las cinco preguntas del cribado de artritis.' }
];

export const biopsiaTitulo = 'Biopsia cutanea: cuando si y cuando no';
export const biopsia = {
  indicaciones: [
    'Placa unica que crece y no responde al tratamiento: descartar micosis fungoide o enfermedad de Bowen',
    'Eritrodermia de origen incierto, para separar psoriasis de eccema, farmacos o linfoma cutaneo',
    'Duda entre pustulosa generalizada y pustulosis exantematica generalizada aguda por farmacos',
    'Presentacion atipica en la que el diagnostico cambiaria la conducta',
    'Sospecha de una segunda dermatosis superpuesta sobre la psoriasis conocida'
  ],
  ventajas: [
    'Muestra un patron reconocible: acantosis regular con crestas elongadas y paraqueratosis',
    'Ausencia o adelgazamiento de la capa granulosa, con capilares dilatados en las papilas',
    'Microabscesos neutrofilicos de Munro en la capa cornea',
    'Permite descartar el linfoma cutaneo de celulas T, que es el diferencial que mas pesa'
  ],
  limitaciones: [
    'No se necesita en el caso tipico: la psoriasis en placas es un diagnostico CLINICO',
    'Los hallazgos varian con la fase de la lesion y con el tratamiento topico reciente',
    'Una biopsia de micosis fungoide precoz puede ser indistinguible y obliga a repetirla',
    'No mide gravedad ni orienta la eleccion del tratamiento'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion local',
    'Evitar biopsiar una placa recien tratada con corticoide potente, que borra el patron',
    'En la cara y en zonas de alta tension conviene elegir otro punto por el resultado estetico'
  ]
};

export const escalaRefs = { 'PASI (calculadora disponible)': [1], 'Superficie corporal afectada': [1], 'Evaluacion global del medico (PGA)': [1], 'Indice dermatologico de calidad de vida (DLQI)': [1], 'NAPSI modificado y GPPASI': [1, 3], 'Cribado de artritis psoriasica (calculadora disponible)': [5] };

export const escalaCalc = {
  'PASI (calculadora disponible)': 'pasi',
  'Superficie corporal afectada': 'gravedad-psoriasis',
  'Evaluacion global del medico (PGA)': 'gravedad-psoriasis',
  'Indice dermatologico de calidad de vida (DLQI)': 'gravedad-psoriasis',
  'Cribado de artritis psoriasica (calculadora disponible)': 'cribado-artritis'
};

export const compGroups = [
  { title: 'Reconocer y clasificar', items: ['Psoriasis en placas: reconocerla y medirla', 'Formas clinicas que cambian el manejo'] },
  { title: 'Formas graves', items: ['Eritrodermia y pustulosa generalizada: las dos urgencias'] },
  { title: 'Mas alla de la piel', items: ['Artritis psoriasica: el cribado que le toca al internista', 'Comorbilidad cardiometabolica y carga psicologica'] },
  { title: 'Tratamiento', items: ['Tratamiento sistemico: metas, escalones y situaciones especiales'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son el reconocimiento: la placa clasica con su medida, y las formas que cambian la decision porque estan en un sitio que incapacita. La tercera son las dos urgencias, que es donde el internista tiene que actuar y donde no se escalona nada. Las dos siguientes sacan el problema de la piel: la artritis, cuyo da&#241;o es irreversible y cuyo cribado depende de quien mira la piel, y la comorbilidad cardiometabolica, que es la que decide el pronostico vital. La ultima ordena el tratamiento sistemico alrededor de una meta numerica, con las situaciones especiales que en la practica son la mayoria: embarazo, tuberculosis latente, hepatitis, VIH y cancer.';

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
      { title: 'Areas de alto impacto', sub: 'U&#241;as, palmas, genitales, cuero cabelludo', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Guttata', sub: 'Tras faringitis &middot; puede resolverse', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Invertida', sub: 'Pliegues &middot; roja y SIN escama', color: '#7a4363', target: 'complicaciones' }
    ] },
    { title: 'Formas graves', sub: 'Urgencia &middot; se empieza por arriba', color: '#8c2e3a', target: 'complicaciones', leaves: [
      { title: 'Eritrodermica', sub: 'Mas del 90% &middot; la piel falla', color: '#8c2e3a', target: 'complicaciones' },
      { title: 'Pustulosa generalizada', sub: 'Interleucina 36 &middot; spesolimab', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'Mas alla de la piel', sub: 'Lo que decide el pronostico', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Artritis psoriasica', sub: 'Da&#241;o IRREVERSIBLE &middot; cribar', color: '#3d5a73', target: 'complicaciones' },
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
    titulo: 'Metas de tratamiento segun la forma clinica',
    fuente: 'Guia latinoamericana de psoriasis, SOLAPSO (Valenzuela F, et al. An Bras Dermatol 2026;101(5):501449).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Forma</th><th>Meta</th><th>Fuerza</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">En placas</td><td>PASI absoluto &lt;3, <em>o</em> respuesta PASI90, <em>o</em> PGA 0/1 &mdash; y ademas DLQI &lt;5</td><td><span class="figure-tag fail">Recomendacion</span></td></tr>
            <tr><td class="figure-org">Ungueal</td><td>NAPSI modificado &lt;10</td><td><span class="figure-tag dys">Sugerencia</span></td></tr>
            <tr><td class="figure-org">Pustulosa generalizada</td><td>GPPASI &lt;3</td><td><span class="figure-tag dys">Sugerencia</span></td></tr>
            <tr><td class="figure-org">Guttata, eritrodermica, invertida, palmoplantar y de cuero cabelludo</td><td>PGA 0/1</td><td><span class="figure-tag dys">Sugerencia</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La meta tiene <strong>dos mitades</strong> y solo se suele recordar la primera. Un paciente con PASI 2 y DLQI de 12 NO ha alcanzado el objetivo: la enfermedad sigue condicionando su vida. Cuando no se dispone de PASI ni de PGA, la guia acepta una superficie corporal menor o igual al 1%, que se asocia a una calidad de vida comparable a la de la poblacion general.</div>`
  },
  'escalones-psoriasis': {
    titulo: 'Escalones del tratamiento y sus dos excepciones',
    fuente: 'SOLAPSO 2026 (doi:10.1016/j.abd.2026.501449) y guias francesas de tratamiento sistemico 2025 (doi:10.1111/jdv.70263).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalon</th><th>Opciones</th><th>Cuando</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Topico</td><td>Corticoide de potencia media-alta + analogo de vitamina D; queratolitico previo si hay escama gruesa</td><td>Enfermedad leve</td></tr>
            <tr><td class="figure-org">Convencional y fototerapia</td><td>Metotrexato 7.5-15 mg/semana; ciclosporina 3-5 mg/kg/dia; acitretina 0.3-0.7 mg/kg/dia; UVB de banda estrecha o PUVA</td><td>Moderada a grave</td></tr>
            <tr><td class="figure-org">Biologicos y moleculas peque&#241;as</td><td>Anti factor de necrosis tumoral, anti interleucina 12/23, anti interleucina 17, anti interleucina 23, deucravacitinib. Apremilast como opcion no preferente</td><td>Contraindicacion, intolerancia o falta de respuesta a <strong>al menos uno</strong> convencional o a la fototerapia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box"><strong>Dos excepciones que rompen el escalon.</strong> Primera: en la psoriasis grave que requiere ingreso o que amenaza la vida, se recomienda <strong>biologico como primera opcion</strong>, porque hace falta una respuesta rapida. Segunda: en la pustulosa generalizada se recomienda <strong>spesolimab</strong> de entrada, porque el mecanismo es otro, el de la interleucina 36. Ante fracaso de un anti factor de necrosis tumoral se cambia a un mecanismo distinto; ante fracaso de un anti interleucina 17, 23 o 12/23 se puede cambiar dentro de la clase.</div>`
  },
  'psoriasis-situaciones-especiales': {
    titulo: 'Elegir el sistemico segun la situacion del paciente',
    fuente: 'Guia latinoamericana de psoriasis, SOLAPSO (Valenzuela F, et al. An Bras Dermatol 2026;101(5):501449).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situacion</th><th>Que prefiere la guia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Embarazo, leve a moderada</td><td>Topico: emolientes, corticoide de potencia media o calcipotriol</td></tr>
            <tr><td class="figure-org">Embarazo, moderada a grave</td><td>Fototerapia UVB como sistemico; ciclosporina en segunda linea; si hace falta biologico, <strong>certolizumab pegol</strong> como primera opcion</td></tr>
            <tr><td class="figure-org">Tuberculosis latente</td><td>Preferir <strong>anti interleucina 17 o anti interleucina 23</strong> por menor riesgo de reactivacion; tambien acitretina, apremilast o fototerapia</td></tr>
            <tr><td class="figure-org">Hepatitis B activa</td><td><strong>No iniciar</strong> sistemico inmunosupresor hasta tratar la infeccion; antigeno de superficie positivo implica alto riesgo de reactivacion y profilaxis antiviral</td></tr>
            <tr><td class="figure-org">Hepatitis C</td><td>Fototerapia UVB como opcion recomendada</td></tr>
            <tr><td class="figure-org">VIH en tratamiento antirretroviral</td><td>Fototerapia UVB de banda estrecha de primera linea; acitretina de segunda; despues anti interleucina 23, 12/23 o 17</td></tr>
            <tr><td class="figure-org">Cancer activo</td><td>Topico, fototerapia (salvo alto riesgo de cancer cutaneo) y acitretina</td></tr>
            <tr><td class="figure-org">Antecedente de cancer</td><td>Apremilast, deucravacitinib, anti interleucina 17, 23 o 12/23</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres avisos practicos. La <strong>acitretina es teratogena</strong> y obliga a evitar el embarazo durante tres a&#241;os tras suspenderla, de modo que en una mujer en edad fertil rara vez es la opcion comoda que parece. El <strong>cribado previo</strong> de tuberculosis, hepatitis y VIH no es un tramite: cambia el farmaco que se elige. Y la <strong>vacunacion</strong> se actualiza ANTES de empezar, porque despues quedan contraindicadas las de virus vivos.</div>`
  }
};
