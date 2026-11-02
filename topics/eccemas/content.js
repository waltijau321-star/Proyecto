// topics/eccemas/content.js - Modulo 75: Eccemas (dermatitis atopica y de contacto).
// Basado en la actualizacion de la guia S3 de dermatitis atopica (Werfel T, et al. Allergol
// Select 2026;10:120-144, doi:10.5414/ALX02638E) y en la revision de dermatitis alergica de
// contacto (Nassau S, Fonacier L, 2020), que ya estaba en Bibliografia/.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'eccemas',
  titulo: 'Eccemas: dermatitis atópica y de contacto',
  subtitulo: 'Módulo 75 &middot; Dermatología',
  accent: '#5c7a3a',
  accentDim: '#7a9455'
};

export const definicionText = `<p style="margin:0 0 14px;">Eccema es un <strong>patrón de reacción</strong> de la piel, no una enfermedad. Se reconoce por su morfología, que cambia con el tiempo: en fase <strong>aguda</strong> hay eritema, edema, vesiculas y exudacion; en fase <strong>subaguda</strong>, costras y descamación; y en fase <strong>crónica</strong>, liquenificación (la piel engrosada con los pliegues marcados), fisuras y excoriaciones por rascado. Ese patrón lo comparten entidades con causas distintas, y por eso la pregunta útil no es "¿es un eccema?" sino "¿<strong>de que tipo</strong>?".</p>
<p style="margin:0 0 14px;">Los dos grandes son la <strong>dermatitis atópica</strong>, que es una enfermedad inflamatoria crónica de base genética con alteración de la barrera cutánea y desviación inmunitaria hacia el tipo 2, y la <strong>dermatitis de contacto</strong>, que a su vez se divide en dos: la <strong>alérgica</strong>, una hipersensibilidad retardada de tipo IV frente a un alérgeno concreto, y la <strong>irritativa</strong>, un daño directo de la barrera sin mecanismo inmunitario específico. Esa última división importa porque solo la alérgica se estudia con pruebas epicutaneas, y en las dos el tratamiento de fondo es el mismo: <strong>evitar</strong>.</p>
<p style="margin:0 0 14px;">Dos ideas que ordenan la práctica. La primera: en la dermatitis atópica el tratamiento sistémico moderno ha cambiado el techo de lo alcanzable, y la guía S3 pide fijar <strong>metas y expectativas por decisión compartida al inicio</strong>, junto con los criterios para cambiar si no se cumplen. La segunda: un eccema de las manos o de la cara que no mejora con lo habitual obliga a pensar en <strong>contacto alérgico sobreañadido</strong>, incluido el alérgico al propio tratamiento tópico.</p>`;

export const bibliografia = [
  'Werfel T, Heratizadeh A, Augustin M, et al. Update of the evidence- and consensus-based S3 guideline on atopic dermatitis: Systemic therapy with biologics or Janus kinase inhibitors and specific aspects of systemic therapy in pregnancy and lactation. Allergol Select. 2026;10:120-144. doi:10.5414/ALX02638E.',
  'Nassau S, Fonacier L. Allergic Contact Dermatitis. Med Clin North Am. 2020;104(1):61-76.',
  'Dhar S, De A, Rajgopalan M, et al. Skin Allergy Research Society and Society for Eczema Studies Joint Task Force Guidelines of Care for Management of Atopic Dermatitis. Indian J Dermatol. 2026;71(3):204-230. doi:10.4103/ijd.ijd_421_25.',
  'Carrascosa JM, Ubogui J, Gilaberte Y, et al. Narrowband UVB Phototherapy in Dermatology: GEF-CILAD 2026 Update. Actas Dermosifiliogr. 2026;117(8):104694. doi:10.1016/j.ad.2026.104694.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El eccema y su distribución',
      tituloB: 'Datos que hacen dudar del diagnóstico',
      compensada: 'La MORFOLOGÍA dice que es un eccema: eritema, edema y vesiculas si es agudo; costras y descamación si es subagudo; liquenificación, fisuras y excoriaciones si es crónico. La DISTRIBUCIÓN orienta al tipo. En la dermatitis atópica cambia con la edad: cara y superficies de extensión en el lactante, PLIEGUES (antecubital, poplíteo, cuello, muñecas) en el niño y el adulto, y en el adulto además manos, párpados y cabeza y cuello. En la de contacto, la lesión dibuja la ZONA EXPUESTA: el rectangulo del reloj, la línea del cinturón, el borde del calzado, el dorso de las manos del que usa guantes. El PRURITO es constante en la atópica: sin picor, hay que dudar del diagnóstico.',
      descompensada: 'Datos que obligan a replantear: eccema que aparece por PRIMERA VEZ en un adulto mayor sin historia previa de atopia, que hace pensar en contacto, en eccema de estasis, en escabiosis o en linfoma cutáneo de células T; lesiones muy bien delimitadas con borde geometrico o lineal, que apuntan a contacto; afectación de pliegues con maceracion y borde descamativo, que sugiere tinea o candidiasis; placas que no responden o empeoran con el corticoide tópico, donde hay que pensar en dermatitis de contacto AL PROPIO TRATAMIENTO o en tinea incognito; y prurito intenso con lesiones en surcos interdigitales y genitales, que es escabiosis hasta que se demuestre lo contrario.'
    },
    laboratorio: [
      { prueba: 'Ninguna prueba confirma la dermatitis atópica', utilidad: 'Es un diagnóstico CLÍNICO basado en criterios. La inmunoglobulina E total y las específicas NO lo confirman ni lo descartan: hay dermatitis atópica intrínseca con IgE normal, y hay IgE alta en personas sin enfermedad cutánea.' },
      { prueba: 'Pruebas epicutaneas (parche)', utilidad: 'LA prueba del tema. Es la única que identifica el alérgeno responsable de una dermatitis de contacto ALÉRGICA. Se lee a las 48 horas y de nuevo de forma diferida a las 96 horas o más, porque muchas reacciones aparecen tarde.' },
      { prueba: 'Examen micologico directo y cultivo', utilidad: 'Ante cualquier eccema de pliegues, de pies o de manos que no responde. Separa la tinea del eccema, y la tinea tratada con corticoide (tinea incognito) es una de las causas más frecuentes de eccema rebelde.' },
      { prueba: 'Raspado y dermatoscopia para escabiosis', utilidad: 'En el prurito intenso generalizado, sobre todo si hay otros convivientes afectados. Es un diagnóstico que se confunde con eccema durante semanas.' },
      { prueba: 'Cultivo bacteriano de la lesión', utilidad: 'No de rutina: la piel atópica esta colonizada por estafilococo casi siempre, y cultivar sin sospecha clínica lleva a tratar una colonizacion. Se hace si hay signos de infección (exudado purulento, costras melicericas, empeoramiento brusco).' },
      { prueba: 'Serología de herpes simple o citodiagnostico', utilidad: 'Ante un empeoramiento brusco con vesiculas monomorfas y umbilicadas, dolor y fiebre: es el eccema herpetico, que es una urgencia y necesita aciclovir sistémico.' },
      { prueba: 'Biopsia con inmunofenotipo', utilidad: 'Cuando un eccema del adulto no responde y se sospecha micosis fungoide. Puede requerir varias biopsias en el tiempo, porque las fases iniciales son histológicamente inespecíficas.' },
      { prueba: 'Analítica antes de sistémico', utilidad: 'Hemograma, función hepática y renal, serologías de hepatitis B y C y VIH, y cribado de tuberculosis según el fármaco. Con dupilumab, la guía señala que NO se necesitan controles analíticos de rutina; con los inhibidores de la cinasa de Jano si.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios diagnósticos (calculadora disponible)', interpretacion: 'Prurito como criterio obligatorio más criterios menores de distribución, historia y sequedad cutánea.', cutoff: 'Prurito + 3 de los 5 criterios' },
      { metodo: 'POEM (calculadora disponible)', interpretacion: 'Siete preguntas al paciente sobre la última semana: picor, sueño, exudacion, fisuras, descamación, sequedad y sangrado.', cutoff: '0 a 28; 17 o más es grave' },
      { metodo: 'Alérgica frente a irritativa (calculadora disponible)', interpretacion: 'Cruza latencia, distribución, síntoma predominante y número de personas expuestas afectadas.', cutoff: 'La irritativa es mucho más frecuente de lo que se cree' },
      { metodo: 'Lectura de las pruebas epicutaneas (calculadora disponible)', interpretacion: 'Traduce la morfología de la reacción y el momento de lectura a un resultado, y recuerda el paso que más se olvida: la relevancia.', cutoff: 'Una reacción positiva sin relevancia clínica no explica nada' },
      { metodo: 'EASI, SCORAD e IGA', interpretacion: 'Medidas de gravedad usadas en los ensayos y en las unidades especializadas. EASI combina signos y superficie por regiones; el IGA es una valoración global de 0 a 4.', cutoff: 'EASI75 y IGA 0/1 son los objetivos habituales' },
      { metodo: 'Escala numérica de prurito', interpretacion: 'De 0 a 10 sobre el peor picor de las últimas 24 horas. Es lo que más le importa al paciente y lo que primero mejora con los sistémicos modernos.', cutoff: 'Una reducción de 4 puntos se considera relevante' }
    ],
    imagen: [
      { modalidad: 'No se necesita imagen', hallazgos: 'Ni la dermatitis atópica ni la de contacto requieren pruebas de imagen.' },
      { modalidad: 'Ecografía Doppler venosa', hallazgos: 'Ante un eccema de piernas en un paciente mayor, para confirmar la insuficiencia venosa del eccema de estasis, que se trata con compresión y no solo con corticoide.' },
      { modalidad: 'Estudio de extensión si hay linfoma', hallazgos: 'Tomografía y estudio hematológico si la biopsia confirma micosis fungoide, para estadificar.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Primero por el <strong>mecanismo</strong>: atópica (barrera alterada más inflamación tipo 2), contacto <strong>alérgica</strong> (hipersensibilidad retardada tipo IV a un alérgeno concreto) y contacto <strong>irritativa</strong> (daño directo de la barrera, sin memoria inmunitaria). Después por la <strong>fase</strong>: aguda, subaguda o crónica, que decide el vehiculo del tratamiento. Y por la <strong>gravedad</strong>, que es lo que abre la puerta al tratamiento sistémico: superficie afectada, intensidad de los signos, prurito y repercusión en el sueño y en la vida diaria.`,
    escalas: [
      { nombre: 'Criterios diagnósticos de dermatitis atópica (calculadora disponible)', componentes: 'PRURITO como criterio obligatorio, más: historia de afectación de pliegues, antecedente personal de asma o rinitis alérgica, piel seca generalizada en el último año, eccema flexural visible, e inicio antes de los dos años.', formula: 'Prurito más tres o más de los cinco criterios.', interpretacion: 'El prurito es OBLIGATORIO: un eccema que no pica no es una dermatitis atópica. Los criterios están pensados para uso clínico y epidemiológico, y no sustituyen al juicio ante una presentación atípica.' },
      { nombre: 'POEM (calculadora disponible)', componentes: 'Siete síntomas en la última semana: picor, alteración del sueño, exudacion, fisuras, descamación, sequedad y sangrado, cada uno por número de días.', formula: 'Cada ítem de 0 a 4 según los días. Rango 0 a 28.', interpretacion: '0 a 2 casi nula; 3 a 7 leve; 8 a 16 moderada; 17 a 24 grave; 25 a 28 muy grave. Su virtud es que la punt&uacute;a el PACIENTE y recoge lo que el vive, no lo que el médico ve en una foto de un dia concreto.' },
      { nombre: 'EASI', componentes: 'Eritema, induración o papulacion, excoriación y liquenificación, de 0 a 3, multiplicados por el área de cada una de cuatro regiones.', formula: 'Suma ponderada por regiones. Rango 0 a 72.', interpretacion: 'Es la medida de referencia en los ensayos, y de ella salen los objetivos EASI75 y EASI90. Su limitación es la misma que la del PASI: mide lo que se ve y no lo que el paciente sufre, por eso se acompaña de POEM y de la escala de prurito.' },
      { nombre: 'Alérgica frente a irritativa (calculadora disponible)', componentes: 'Latencia tras la exposición, límites de la lesión, síntoma predominante, afectación de otras personas expuestas y antecedente de exposición previa.', formula: 'Combinación de esos datos.', interpretacion: 'La irritativa es mucho más frecuente y no necesita sensibilización previa: aparece en cualquiera con exposición suficiente. La alérgica necesita una exposición previa que sensibilizo, y por eso puede debutar con un producto usado durante años sin problema.' },
      { nombre: 'Lectura de las pruebas epicutaneas (calculadora disponible)', componentes: 'Morfología de la reacción (eritema, papulas, vesiculas, ampollas), momento de la lectura y relevancia clínica.', formula: 'Graduación de dudosa a intensa, más juicio de relevancia.', interpretacion: 'El paso que más se olvida es el último: una reacción positiva solo importa si el paciente esta EXPUESTO a esa sustancia y la exposición explica su cuadro. Una positividad sin relevancia clínica no cierra el caso.' },
      { nombre: 'Gravedad y criterio de sistémico', componentes: 'Superficie, intensidad, prurito, sueño, repercusión laboral o escolar y respuesta al tratamiento tópico optimizado.', formula: 'Valoración global.', interpretacion: 'La guía S3 subraya que las metas, las expectativas y los criterios de cambio se fijan por DECISIÓN COMPARTIDA con el paciente al iniciar el tratamiento sistémico, no después, cuando ya hay desacuerdo sobre si ha funcionado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Dermatitis atópica: reconocerla y medirla',
      color: '#5c7a3a',
      definicion: 'Enfermedad inflamatoria crónica y recidivante de la piel, de base genética, caracterizada por prurito intenso, sequedad y eccema de distribución típica que cambia con la edad.',
      fisiopatologia: 'Hay dos motores que se alimentan entre si. El primero es la BARRERA: mutaciones y alteraciones funcionales de la filagrina y de los lípidos intercelulares hacen la piel permeable, seca y fácil de penetrar. El segundo es la INFLAMACIÓN de tipo 2, con interleucinas 4, 13 y 31, que a su vez empeora la barrera al reducir la filagrina y los lípidos, y que estimula directamente las fibras nerviosas del PRURITO, sobre todo la interleucina 31. El rascado rompe más la barrera y cierra el círculo. Esa via explica por que un fármaco que bloquea la señal de las interleucinas 4 y 13 mejora a la vez las lesiones y el picor.',
      epidemiologia: 'Es la enfermedad cutánea crónica más frecuente en la infancia, y una proporción importante de los casos persiste o reaparece en la edad adulta. Forma parte de la marcha atópica junto con el asma, la rinitis alérgica y la alergia alimentaria.',
      factores_riesgo: ['Antecedente familiar de atopia', 'Mutaciones de la filagrina', 'Clima seco y frío', 'Baños frecuentes con agua caliente y jabones agresivos', 'Irritantes: lana, detergentes, sudor', 'Estrés psicológico', 'Infección o colonizacion por estafilococo', 'Aeroalergenos en pacientes sensibilizados'],
      clinica: 'Prurito constante, piel seca y eccema con distribución que cambia con la edad: cara y extensión en el lactante, PLIEGUES en el niño y el adulto, y en el adulto además manos, párpados y región de cabeza y cuello. Liquenificación en las zonas de rascado crónico. Curso en brotes.',
      criterios_dx: 'CLÍNICO. Prurito obligatorio más tres o más criterios de apoyo: afectación de pliegues, antecedente de asma o rinitis, piel seca en el último año, eccema flexural visible e inicio antes de los dos años.',
      laboratorio: 'Ninguno confirma. La IgE no diagnóstica ni descarta: existe la forma intrínseca con IgE normal.',
      imagen: 'No se necesita.',
      complementarios: 'POEM, EASI y escala de prurito. Pruebas epicutaneas si se sospecha contacto sobreañadido, que es frecuente en manos, párpados y en quien lleva años aplicandose tópicos.',
      dx_diferencial: 'Dermatitis de contacto, escabiosis, tinea, psoriasis (placas bien delimitadas con escama nacarada en extensión), micosis fungoide, dermatitis seborreica y, en el lactante, inmunodeficiencias primarias si hay infecciones graves asociadas.',
      tx_medico: 'La base es la BARRERA: emolientes en cantidad generosa y a diario, también fuera de los brotes, baños cortos con agua templada y syndet, y secado sin frotar. Educación estructurada sobre la enfermedad y sobre como aplicar los tratamientos, que mejora los resultados más de lo que se suele creer. Identificar y evitar irritantes concretos.',
      tx_farmacologico: 'Corticoide tópico de potencia adaptada a la zona y a la edad para el brote, y después terapia PROACTIVA: aplicar dos veces por semana sobre las zonas que recaen siempre, que reduce los brotes. Inhibidores tópicos de la calcineurina en cara, párpados y pliegues para evitar la atrofia por corticoide. Antihistamínico de utilidad limitada: el prurito de la atópica no es histaminergico.',
      tx_intervencionista: 'Fototerapia UVB de banda estrecha como opción en enfermedad extensa que no se controla con tópicos y antes o junto al sistémico.',
      criterios_uci: 'Solo en la eritrodermia atópica con inestabilidad, o en un eccema herpetico diseminado con afectación sistémica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'El ingreso es excepcional. Si ocurre, curas, control del prurito y búsqueda de la complicación que lo motivo, normalmente infecciosa.',
      seguimiento_ambulatorio: 'Medir con POEM y escala de prurito en cada visita. Revisar la TÉCNICA de aplicación y la cantidad de emoliente, que es donde falla la mayoría de los tratamientos que parecen ineficaces.',
      pronostico: 'Muchos casos mejoran con la edad, aunque la tendencia a la piel seca y a las manos sensibles suele persistir. La enfermedad grave del adulto tiene un impacto importante en el sueño, el ánimo y el trabajo.',
      algoritmo: ['Confirmar por criterios, con el prurito como obligatorio', 'Definir la fase para elegir el vehiculo', 'Medir con POEM y escala de prurito', 'Emoliente diario como base innegociable', 'Corticoide tópico para el brote y después proactivo', 'Calcineurinico en cara, párpados y pliegues', 'Si no se controla, valorar fototerapia o sistémico']
    },
    {
      nombre: 'Dermatitis atópica: sistémico y metas por decisión compartida',
      color: '#3d5a73',
      definicion: 'Tratamiento de la enfermedad moderada a grave que no se controla con medidas topicas optimizadas, con objetivos y criterios de cambio acordados con el paciente desde el principio.',
      fisiopatologia: 'Los biológicos bloquean la via de tipo 2 de forma selectiva: el dupilumab se une a la subunidad alfa del receptor de interleucina 4, que forma parte de los complejos de receptor de las interleucinas 4 Y 13, de modo que bloquea las dos. El lebrikizumab act&uacute;a sobre la interleucina 13 y el nemolizumab sobre la via de la interleucina 31, que es la del prurito. Los inhibidores de la cinasa de Jano act&uacute;an dentro de la célula sobre la señal de múltiples citocinas a la vez, lo que explica que sean más rápidos y también que tengan más efectos de clase.',
      epidemiologia: 'El grupo con enfermedad moderada a grave es una minoría de los pacientes pero concentra casi toda la carga de la enfermedad. La llegada de estos fármacos ha subido el techo de lo alcanzable de forma clara.',
      factores_riesgo: ['Enfermedad extensa o de larga evolución', 'Prurito que altera el sueño de forma habitual', 'Fracaso del tratamiento tópico bien aplicado', 'Repercusión laboral, escolar o sobre el ánimo', 'Brotes frecuentes que obligan a ciclos repetidos de corticoide'],
      clinica: 'El paciente candidato suele llevar años con ciclos de corticoide, sueño roto y la sensación de que nada funciona del todo. Conviene comprobar antes la adherencia y la cantidad de tópico usada, porque una parte de los fracasos son de aplicación.',
      criterios_dx: 'Enfermedad moderada a grave que no se controla pese a tratamiento tópico optimizado y bien aplicado.',
      laboratorio: 'Estudio previo según el fármaco. Con DUPILUMAB la guía señala que no se necesitan controles analíticos de rutina. Con inhibidores de la cinasa de Jano si hacen falta, además del cribado de infecciones y de la valoración del riesgo cardiovascular y oncológico.',
      imagen: 'No se necesita.',
      complementarios: 'EASI, POEM y escala de prurito basales y en cada revisión, para poder comparar contra la meta acordada.',
      dx_diferencial: 'Antes de escalar, descartar lo que imita una atopia refractaria: micosis fungoide, escabiosis, dermatitis de contacto sobreañadida (incluida la alergia al propio tópico) y tinea incognito.',
      tx_medico: 'La guía S3 pide fijar al INICIO, por decisión compartida, tres cosas: los objetivos del tratamiento, las expectativas realistas y los criterios de actuacion si no se cumplen. Hacerlo al principio evita el desacuerdo posterior sobre si el tratamiento ha funcionado o no.',
      tx_farmacologico: 'Biológicos: dupilumab (anti receptor de interleucina 4 alfa, que bloquea interleucina 4 y 13), y las incorporaciones recientes lebrikizumab y nemolizumab. Inhibidores de la cinasa de Jano: baricitinib, upadacitinib y abrocitinib, con ampliaciones de indicación pediátrica (abrocitinib desde los 12 años y baricitinib desde los 2). La ciclosporina sigue siendo una opción de puente por su rapidez, con las limitaciones conocidas.',
      tx_intervencionista: 'Fototerapia UVB de banda estrecha, sola o combinada, que sigue siendo una opción útil y barata.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Con dupilumab, vigilar la CONJUNTIVITIS, que aparece en torno al 13% de los adultos y hasta en el 35% de los niños, y que puede tardar más de un año en aparecer. Suele bastar con lágrimas artificiales o colirio, sin suspender el fármaco; en casos graves o en niños pequeños, valoración oftalmológica. La eosinofilia transitoria es frecuente y sin significado clínico. Y vigilar el empeoramiento de psoriasis, artritis reumatoide o enfermedad de Crohn concomitantes, en las que participan células productoras de interleucina 17.',
      pronostico: 'La mayoría de los pacientes con enfermedad moderada a grave alcanza hoy un control que antes no era posible, con mejoría rápida del prurito.',
      algoritmo: ['Confirmar que el tópico esta bien aplicado y es insuficiente', 'Descartar lo que imita una atopia refractaria', 'Acordar metas y criterios de cambio con el paciente', 'Cribado de seguridad según el fármaco elegido', 'Elegir biológico o inhibidor de cinasa de Jano', 'Con inhibidores de cinasa de Jano, valorar edad y riesgo cardiovascular', 'Reevaluar contra la meta acordada y ajustar']
    },
    {
      nombre: 'Dermatitis de contacto alérgica',
      color: '#8c3a34',
      definicion: 'Hipersensibilidad retardada de tipo IV frente a un alérgeno concreto, que produce eccema en la zona de contacto tras una exposición previa que sensibilizo.',
      fisiopatologia: 'Hay DOS fases y entenderlas explica toda la clínica. En la SENSIBILIZACIÓN, un hapteno (una molecula de bajo peso molecular que por si sola no es inmunogena) penetra la piel, se une a proteínas propias y es presentado a los linfocitos T, que se expanden como clones específicos. Esta fase no produce síntomas y puede durar semanas. En la ELICITACION, una nueva exposición al mismo alérgeno es reconocida por esos linfocitos ya sensibilizados, que desencadenan la inflamación: por eso la lesión tarda de 24 a 72 HORAS en aparecer, y por eso puede debutar frente a un producto usado durante años sin problema. Además, quien se sensibiliza a un alérgeno es más susceptible de sensibilizarse a otro.',
      epidemiologia: 'Muy frecuente, y con un componente laboral importante: manos de personal sanitario, peluqueria, construcción, limpieza y hosteleria. No todas las personas expuestas a un alérgeno se sensibilizan.',
      factores_riesgo: ['Exposición laboral repetida', 'Barrera cutánea alterada previa, como en la dermatitis atópica', 'Dermatitis irritativa previa, que facilita la penetración del hapteno', 'Uso crónico de tópicos, incluidos corticoides y antibióticos', 'Piercings y bisuteria, por el niquel', 'Cosmetica y tintes capilares'],
      clinica: 'Eccema pruriginoso que dibuja la ZONA EXPUESTA, con frecuencia con límites geometricos que delatan el objeto: el rectangulo del reloj, la línea del cinturón, el borde del calzado, la forma del apartado del parche. Aparece 24 a 72 horas después del contacto, no inmediatamente. Puede extenderse más allá de la zona por diseminación a distancia.',
      criterios_dx: 'Historia compatible más PRUEBAS EPICUTANEAS positivas con RELEVANCIA clínica demostrada. Los dos requisitos hacen falta.',
      laboratorio: 'Pruebas epicutaneas con la bateria estándar y con baterías dirigidas según la ocupación y la sospecha, incluidos los propios productos del paciente cuando procede.',
      imagen: 'No se necesita.',
      complementarios: 'Revisión detallada de cosmeticos, productos de trabajo, calzado, guantes y medicación topica. Preguntar de forma expresa por lo que se aplica en la lesión, porque el propio tratamiento es una causa frecuente.',
      dx_diferencial: 'Dermatitis de contacto irritativa, dermatitis atópica, tinea, psoriasis palmoplantar, dermatitis de contacto proteica y fotodermatosis.',
      tx_medico: 'Una vez identificado el alérgeno, el tratamiento de fondo es EVITARLO, y eso exige una lista escrita de productos y sinónimos que el paciente pueda usar al comprar. Protección de barrera en el ambito laboral y cambio de guantes al material adecuado cuando sea el guante el problema.',
      tx_farmacologico: 'Corticoide tópico de potencia adecuada a la zona durante el brote. Corticoide sistémico en ciclo corto solo en cuadros extensos o muy incapacitantes. Emolientes para reparar la barrera.',
      tx_intervencionista: 'No aplica. En casos laborales, la adaptación del puesto de trabajo puede ser la medida decisiva.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Comprobar a las semanas si la evitación ha funcionado. Si no mejora pese a evitar el alérgeno identificado, revisar la relevancia de ese resultado y buscar exposiciones no sospechadas.',
      pronostico: 'Bueno si se identifica y se evita el alérgeno. La sensibilización es permanente: no se pierde con el tiempo.',
      algoritmo: ['Sospechar por la distribución y por la latencia de 24 a 72 h', 'Inventariar exposiciones, incluida la medicación topica', 'Pruebas epicutaneas con bateria estándar y dirigida', 'Leer a 48 h y de forma diferida a 96 h o más', 'Juzgar la RELEVANCIA de cada positividad', 'Lista escrita de evitación con sinónimos', 'Corticoide tópico para el brote']
    },
    {
      nombre: 'Dermatitis de contacto irritativa',
      color: '#8a5a2e',
      definicion: 'Daño directo de la barrera cutánea por una sustancia, sin mecanismo inmunitario específico y sin necesidad de sensibilización previa.',
      fisiopatologia: 'La sustancia elimina los lípidos y daña los queratinocitos de forma directa, con liberación de citocinas inflamatorias. Como no hay memoria inmunitaria, NO hace falta exposición previa: cualquier persona con exposición suficiente en intensidad o en repetición la desarrolla. Por eso la forma aguda aparece en minutos u horas tras un caustico, y la crónica tras meses de lavados repetidos: es la suma de agresiones que la piel no llega a reparar.',
      epidemiologia: 'Es MUCHO más frecuente que la alérgica, aunque en la consulta se piense antes en la alérgica. Es la causa principal de eccema de manos laboral, sobre todo en sanitarios, limpieza, hosteleria y peluqueria.',
      factores_riesgo: ['Lavado de manos muy frecuente', 'Trabajo en húmedo más de dos horas al dia', 'Uso prolongado de guantes oclusivos', 'Detergentes, disolventes y desinfectantes', 'Dermatitis atópica previa, que multiplica la susceptibilidad', 'Clima frío y seco'],
      clinica: 'Escozor y ardor MÁS que picor, que es lo que mejor la separa de la alérgica. Lesión limitada a la zona de contacto con bordes peor definidos, sequedad, fisuras dolorosas en los pulpejos y dorso de manos. Afecta a varias personas expuestas a lo mismo, no solo a una.',
      criterios_dx: 'Clínico, por la historia de exposición y la ausencia de positividades relevantes en las pruebas epicutaneas. Las pruebas se hacen justamente para descartar un componente alérgico añadido, que es frecuente.',
      laboratorio: 'Pruebas epicutaneas para descartar alergia sobreañadida. Examen micologico si afecta a los pies o a un solo lado.',
      imagen: 'No se necesita.',
      complementarios: 'Análisis de la jornada laboral: cuantos lavados, cuanto tiempo con guantes, que productos y en que concentración.',
      dx_diferencial: 'Dermatitis de contacto alérgica, dermatitis atópica de manos, psoriasis palmar, tinea manuum (que es típicamente UNILATERAL, un dato muy útil) y eccema dishidrotico.',
      tx_medico: 'Es lo que más cambia el resultado y lo que menos se explica: reducir el número de lavados, secar bien los espacios interdigitales, usar guantes de algodón bajo los de trabajo y limitar el tiempo de oclusión, aplicar emoliente varias veces al dia y siempre al terminar el turno. Sustituir el jabon por un limpiador sin detergente.',
      tx_farmacologico: 'Corticoide tópico durante el brote, con un vehiculo graso en la fase crónica fisurada. Emolientes en cantidad generosa, que aquí son tratamiento y no un complemento.',
      tx_intervencionista: 'Adaptación del puesto de trabajo. En casos graves y persistentes puede plantearse el cambio de actividad.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Reevaluar la exposición real, no la teórica. Si no mejora pese a las medidas, repetir las pruebas epicutaneas buscando un alérgeno añadido.',
      pronostico: 'Mejora al reducir la exposición, pero recae con facilidad y puede cronificarse si el trabajo no cambia. El eccema crónico de manos es una causa frecuente de incapacidad laboral.',
      algoritmo: ['Cuantificar la exposición real de la jornada', 'Escozor más que picor y varias personas afectadas orientan aquí', 'Pruebas epicutaneas para descartar alergia añadida', 'Reducir lavados y tiempo de oclusión', 'Emoliente varias veces al dia', 'Corticoide tópico para el brote', 'Adaptar el puesto si no mejora']
    },
    {
      nombre: 'Pruebas epicutaneas: como se leen y el paso que se olvida',
      color: '#5a4a8c',
      definicion: 'Prueba que reproduce de forma controlada una hipersensibilidad retardada aplicando alérgenos en la espalda bajo oclusión, para identificar el responsable de una dermatitis de contacto alérgica.',
      fisiopatologia: 'Se aplica el alérgeno a una concentración que no irrita pero que basta para desencadenar la fase de elicitacion en quien ya esta sensibilizado. Como el mecanismo es de tipo IV, mediado por linfocitos T y no por anticuerpos, la reacción NECESITA tiempo: de ahi que se lea a las 48 horas y otra vez de forma diferida.',
      epidemiologia: 'Es la única prueba que identifica el alérgeno responsable. Se hace con una bateria estándar de los alérgenos más frecuentes, ampliada según la ocupación y la sospecha.',
      factores_riesgo: ['Sospecha de dermatitis de contacto alérgica', 'Eccema de manos, pies, cara o párpados que no responde', 'Eccema que empeora con el tratamiento tópico', 'Eccema de distribución sugerente de un objeto', 'Dermatitis atópica del adulto que se vuelve refractaria'],
      clinica: 'La lectura valora la morfología: solo eritema es dudosa; eritema con infiltración y papulas es positiva débil; añadir vesiculas la hace positiva fuerte; y las ampollas o la ulceracion, muy intensa. Una reacción que se apaga entre la primera y la segunda lectura suele ser IRRITATIVA; una que crece con el tiempo es alérgica, y ese comportamiento temporal es la mejor pista.',
      criterios_dx: 'Positividad morfológica MÁS relevancia clínica. La guía práctica es sencilla y se olvida a diario: una positividad sin exposición que la explique no cierra el caso.',
      laboratorio: 'No aplica. La prueba es la exploración.',
      imagen: 'No se necesita.',
      complementarios: 'Lectura diferida a las 96 horas o más, imprescindible porque muchos alérgenos (corticoides y metales entre ellos) dan positividades tardías que se pierden si solo se lee a las 48 horas.',
      dx_diferencial: 'Reacción irritativa en el sitio del parche, que se distingue por su morfología (eritema brillante de bordes netos, a veces con aspecto de quemadura) y por su curso decreciente.',
      tx_medico: 'Antes de la prueba: no aplicar corticoide en la espalda durante al menos una semana, no haber tomado corticoide sistémico ni inmunosupresor en dosis relevantes, y evitar la exposición solar de la zona. La espalda debe estar libre de eccema activo.',
      tx_farmacologico: 'No aplica. El resultado de la prueba es lo que dirige el tratamiento, que es la evitación.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Entregar la lista de alérgenos positivos con sus SINÓNIMOS comerciales y donde se encuentran, porque sin eso la evitación no es posible en la práctica. Revisar a las semanas si la evitación ha funcionado.',
      pronostico: 'La identificación del alérgeno cambia el curso de la enfermedad. El fallo más frecuente no es tecnico sino de interpretación: dar por resuelto un caso con una positividad que el paciente no toca nunca.',
      algoritmo: ['Seleccionar la bateria estándar y las dirigidas por la ocupación', 'Comprobar que la espalda esta libre de eccema y de corticoide', 'Aplicar y retirar a las 48 horas, con primera lectura', 'Segunda lectura diferida a las 96 horas o más', 'Graduar la morfología de cada reacción', 'JUZGAR LA RELEVANCIA de cada positividad', 'Entregar lista escrita de evitación con sinónimos']
    },
    {
      nombre: 'Otros eccemas y lo que se disfraza de eccema',
      color: '#3f6b52',
      definicion: 'Formas de eccema con patrón propio y entidades que imitan un eccema y que explican buena parte de los cuadros que no responden.',
      fisiopatologia: 'El dishidrotico produce vesiculas profundas en caras laterales de dedos, palmas y plantas, con una relación frecuente con el estrés y el calor. El numular forma placas redondeadas muy bien delimitadas sobre piel seca. El asteatosico aparece en la piel seca del anciano, con un patrón de grietas superficiales en las piernas. Y el de estasis es consecuencia de la HIPERTENSIÓN VENOSA crónica: el edema y el depósito de hemosiderina producen inflamación, y por eso el tratamiento decisivo es la COMPRESIÓN y no el corticoide.',
      epidemiologia: 'El eccema de estasis es muy frecuente en el paciente mayor y se trata mal de forma sistemática, con corticoides indefinidos y sin compresión. La micosis fungoide es rara pero se diagnostica con años de retraso bajo la etiqueta de eccema.',
      factores_riesgo: ['Insuficiencia venosa crónica, para el de estasis', 'Edad avanzada y baños frecuentes, para el asteatosico', 'Estrés y sudoración, para el dishidrotico', 'Piel seca y clima frío, para el numular', 'Inmunosupresión o convivientes con prurito, para la escabiosis'],
      clinica: 'Claves rápidas: vesiculas profundas en caras laterales de los dedos es dishidrotico; placas redondas bien delimitadas es numular; grietas superficiales en piernas de anciano es asteatosico; eccema en el tercio distal de la pierna con edema, varices e hiperpigmentación es de estasis; placas persistentes que no responden en zonas cubiertas de un adulto obliga a pensar en micosis fungoide; y prurito nocturno intenso con surcos interdigitales y afectación de otros convivientes es escabiosis.',
      criterios_dx: 'Clínicos, apoyados en la ecografía Doppler venosa en el de estasis, en el examen micologico ante la duda de tinea, en el raspado para escabiosis y en la biopsia con inmunofenotipo ante sospecha de linfoma.',
      laboratorio: 'Examen micologico, raspado para acaros y biopsia según la sospecha.',
      imagen: 'Ecografía Doppler venosa ante eccema de piernas con edema.',
      complementarios: 'En la micosis fungoide pueden hacer falta varias biopsias a lo largo del tiempo, porque las fases iniciales son inespecíficas.',
      dx_diferencial: 'Entre ellos, y con la psoriasis, la tinea, la dermatitis de contacto y el linfoma cutáneo.',
      tx_medico: 'Cada uno el suyo, y dos que se hacen mal de forma habitual: el eccema de estasis necesita COMPRESIÓN y elevación, no solo corticoide, y además es una de las localizaciones con más riesgo de sensibilización de contacto por el uso prolongado de tópicos; y el asteatosico necesita emoliente y menos baños, no un corticoide potente indefinido.',
      tx_farmacologico: 'Corticoide tópico adaptado a la zona para el brote. En el dishidrotico, corticoide potente en pauta corta. En la escabiosis, permetrina o ivermectina, tratando además a los convivientes.',
      tx_intervencionista: 'Tratamiento de la insuficiencia venosa en el de estasis.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Si un eccema no responde, la pregunta no es que corticoide más fuerte poner, sino si el diagnóstico es correcto.',
      pronostico: 'Bueno en los eccemas comunes cuando se corrige la causa. Malo si se retrasa el diagnóstico de una micosis fungoide o de una escabiosis.',
      algoritmo: ['Mirar la morfología y la localización, que casi siempre bastan', 'Eccema de piernas con edema: pensar en estasis y comprimir', 'Prurito nocturno con convivientes afectados: descartar escabiosis', 'Unilateral o de pliegues: examen micologico', 'Adulto con placas persistentes que no responden: biopsiar', 'Si no responde, revisar el diagnóstico antes que el corticoide']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El eccema rara vez motiva un ingreso, pero el internista lo encuentra a menudo en el paciente ingresado por otra causa, y ahi hay cuatro cosas que se le escapan a casi todo el mundo.',
    parametros: [
      'Empeoramiento brusco con vesiculas monomorfas y umbilicadas, dolor y fiebre: es ECCEMA HERPETICO, una urgencia que necesita aciclovir sistémico, no más corticoide.',
      'Eccema de piernas con edema en el paciente encamado: pensar en estasis y poner COMPRESIÓN, no solo corticoide.',
      'Eccema que empeora con el tratamiento aplicado: sospechar dermatitis de contacto al propio tópico (conservantes, antibióticos tópicos, e incluso al corticoide).',
      'Antes de dar por sentado un eccema, descartar ESCABIOSIS si hay prurito nocturno intenso, sobre todo en residencias y en pacientes institucionalizados, donde se disemina con facilidad.',
      'Revisar el vehiculo: pomada en la piel liquenificada y seca, crema en la subaguda, y en la exudativa, fomentos y secado antes que una pomada oclusiva.',
      'En el paciente con dupilumab, la conjuntivitis es esperable y no obliga a suspenderlo; la eosinofilia transitoria tampoco tiene significado.'
    ],
    criterios_uci_general: 'Eritrodermia atópica con inestabilidad hemodinámica o térmica, o eccema herpetico diseminado con afectación sistémica.',
    criterios_tips_general: 'No aplica en eccemas.',
    criterios_trasplante_general: 'No aplica en eccemas.',
    prevencion: 'Emoliente diario como base de todo, baños cortos con agua templada y limpiadores sin detergente, reducción de lavados y de oclusión en el trabajo, guantes adecuados al material, evitación escrita de los alérgenos identificados, y terapia proactiva dos veces por semana en las zonas que recaen siempre.'
  }
};

export const compCites = {
  'Dermatitis atópica: reconocerla y medirla': { tx_farmacologico: [3], criterios_dx: [1], laboratorio: [1] },
  'Dermatitis atópica: sistémico y metas por decisión compartida': { tx_medico: [1], tx_farmacologico: [1], laboratorio: [1], seguimiento_ambulatorio: [1], tx_intervencionista: [4], criterios_dx: [1] },
  'Dermatitis de contacto alérgica': { fisiopatologia: [2], criterios_dx: [2], tx_medico: [2], laboratorio: [2], tx_farmacologico: [2] },
  'Dermatitis de contacto irritativa': { fisiopatologia: [2], criterios_dx: [2], laboratorio: [2], tx_farmacologico: [2] },
  'Pruebas epicutaneas: como se leen y el paso que se olvida': { criterios_dx: [2], laboratorio: [2], tx_farmacologico: [2] },
  'Otros eccemas y lo que se disfraza de eccema': {}
};

export const estigmasTitulo = 'Signos y pistas de la exploración';
export const estigmas = [
  { nombre: 'Liquenificacion', descripcion: 'Piel engrosada con los pliegues cutáneos marcados y aspecto de corteza, por rascado crónico. Es el sello del eccema crónico y marca las zonas que recaen siempre.' },
  { nombre: 'Pliegue de Dennie-Morgan', descripcion: 'Doble pliegue en el párpado inferior. Es uno de los estigmas clásicos de atopia, frecuente y fácil de ver.' },
  { nombre: 'Signo de Hertoghe', descripcion: 'Rarefaccion del tercio externo de las cejas, por rascado crónico de la zona. Otro estigma atopico que se busca en segundos.' },
  { nombre: 'Xerosis generalizada', descripcion: 'Piel seca y aspera fuera de las lesiones, expresión de la barrera alterada. Es lo que justifica el emoliente diario incluso sin brote.' },
  { nombre: 'Limite geometrico', descripcion: 'Borde recto, rectangular o lineal que dibuja un objeto: reloj, cinturón, calzado, tirante. Es la pista que apunta a contacto y a veces identifica el alérgeno de un vistazo.' },
  { nombre: 'Afectación unilateral', descripcion: 'Un eccema de una sola mano o de un solo pie debe hacer pensar en TINEA antes que en eccema. La tinea manuum unilateral con afectación de ambos pies es un patrón clásico.' }
];

export const biopsiaTitulo = 'Biopsia cutánea: cuando aporta';
export const biopsia = {
  indicaciones: [
    'Eccema del adulto que no responde y que persiste en zonas cubiertas: descartar micosis fungoide',
    'Presentación atípica en la que el diagnóstico cambiaría el tratamiento',
    'Eritrodermia de origen incierto',
    'Sospecha de una segunda dermatosis superpuesta',
    'Lesiones que no encajan con ninguno de los patrones habituales de eccema'
  ],
  ventajas: [
    'Confirma el patrón espongiotico propio del eccema',
    'Con inmunofenotipo permite detectar un linfoma cutáneo de células T',
    'Ayuda a separar psoriasis de eccema cuando la clínica es intermedia'
  ],
  limitaciones: [
    'La histología del eccema es INESPECÍFICA: no distingue atópica de contacto ni alérgica de irritativa',
    'En la micosis fungoide precoz puede ser normal y obligar a repetirla en el tiempo',
    'El corticoide tópico reciente altera los hallazgos'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección',
    'Evitar biopsiar una lesión tratada con corticoide potente los días previos',
    'No sustituye a las pruebas epicutaneas: la biopsia no identifica alérgenos'
  ]
};

export const escalaRefs = { 'Criterios diagnósticos de dermatitis atópica (calculadora disponible)': [3], 'POEM (calculadora disponible)': [1, 3], 'EASI': [1], 'Alérgica frente a irritativa (calculadora disponible)': [2], 'Lectura de las pruebas epicutaneas (calculadora disponible)': [2], 'Gravedad y criterio de sistémico': [1] };

export const escalaCalc = {
  'Criterios diagnósticos de dermatitis atópica (calculadora disponible)': 'criterios-atopica',
  'POEM (calculadora disponible)': 'poem',
  'Alérgica frente a irritativa (calculadora disponible)': 'acd-vs-icd',
  'Lectura de las pruebas epicutaneas (calculadora disponible)': 'epicutaneas'
};

export const compGroups = [
  { title: 'Dermatitis atópica', items: ['Dermatitis atópica: reconocerla y medirla', 'Dermatitis atópica: sistémico y metas por decisión compartida'] },
  { title: 'Dermatitis de contacto', items: ['Dermatitis de contacto alérgica', 'Dermatitis de contacto irritativa', 'Pruebas epicutaneas: como se leen y el paso que se olvida'] },
  { title: 'Los demás eccemas', items: ['Otros eccemas y lo que se disfraza de eccema'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son la dermatitis atópica: reconocerla y medirla, y después el tratamiento sistémico, donde lo nuevo no es solo el fármaco sino la obligacion de pactar metas y criterios de cambio con el paciente ANTES de empezar. Las tres siguientes son la dermatitis de contacto, separada en alérgica e irritativa porque el mecanismo, la clínica y el estudio son distintos, con una ficha propia para las pruebas epicutaneas y para el paso que más se olvida al leerlas. La última reúne los demás eccemas y, sobre todo, lo que se disfraza de eccema: ahi están casi todos los casos que llevan meses sin responder.';

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
  root: { title: 'ECCEMA', color: '#5c7a3a', target: 'definicion' },
  branches: [
    { title: 'Dermatitis atópica', sub: 'Barrera + inflamación tipo 2', color: '#5c7a3a', target: 'complicaciones', leaves: [
      { title: 'Tópico y proactivo', sub: 'Emoliente + corticoide 2 veces/semana', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sistemico', sub: 'Metas por decisión compartida', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'De contacto', sub: 'La distribución dibuja la causa', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Alergica', sub: 'Tipo IV &middot; 24 a 72 h &middot; parches', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Irritativa', sub: 'Sin sensibilización &middot; más frecuente', color: '#8a5a2e', target: 'complicaciones' }
    ] },
    { title: 'Lo que imita', sub: 'Casi todo lo que no responde', color: '#7a4363', target: 'complicaciones', leaves: [
      { title: 'Tinea y escabiosis', sub: 'Micologico y raspado', color: '#7a4363', target: 'complicaciones' },
      { title: 'Micosis fungoide', sub: 'Biopsiar y repetir', color: '#5a4a8c', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 2, 3], imagen: [2] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1];
export const figurasDefinicion = ['eccema-tipos'];
export const figurasClasificacion = ['atopica-escalones', 'parches-lectura'];

export const figuras = {
  'eccema-tipos': {
    titulo: 'Los tres eccemas que hay que separar',
    fuente: 'S3 de dermatitis atopica (Werfel T, et al. Allergol Select 2026;10:120-144) y Nassau S, Fonacier L. Allergic Contact Dermatitis. Med Clin North Am 2020;104(1):61-76.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Atópica</th><th>Contacto alérgica</th><th>Contacto irritativa</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Mecanismo</td><td>Barrera alterada + inflamación tipo 2</td><td>Hipersensibilidad <strong>tipo IV</strong> a un alérgeno</td><td>Daño <strong>directo</strong> de la barrera</td></tr>
            <tr><td class="figure-org">¿Hace falta exposición previa?</td><td>No aplica</td><td><strong>Si</strong>, hay que estar sensibilizado</td><td><strong>No</strong>, le pasa a cualquiera</td></tr>
            <tr><td class="figure-org">Latencia</td><td>Curso crónico en brotes</td><td>24 a 72 horas</td><td>Minutos a horas (aguda) o meses (crónica)</td></tr>
            <tr><td class="figure-org">Síntoma que domina</td><td>Picor</td><td>Picor</td><td><strong>Escozor o ardor</strong></td></tr>
            <tr><td class="figure-org">Distribución</td><td>Pliegues; cambia con la edad</td><td>Dibuja el objeto, bordes geometricos</td><td>Zona de contacto, bordes difusos</td></tr>
            <tr><td class="figure-org">¿Afecta a otros expuestos?</td><td>No</td><td>Solo a los sensibilizados</td><td><strong>Si</strong>, a casi todos</td></tr>
            <tr><td class="figure-org">Prueba</td><td>Criterios clínicos</td><td><strong>Epicutaneas</strong> + relevancia</td><td>Historia; parches para descartar alergia</td></tr>
            <tr><td class="figure-org">Frecuencia relativa</td><td>Muy frecuente</td><td>Frecuente</td><td><span class="figure-tag dys">La más frecuente</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos matices que cambian la consulta. El primero: se piensa antes en la <strong>alérgica</strong>, pero la <strong>irritativa es más frecuente</strong>, sobre todo en el eccema de manos laboral. El segundo: las dos <strong>coexisten a menudo</strong>, porque la irritación rompe la barrera y facilita que el hapteno penetre y sensibilice. Por eso en un eccema de manos que no mejora se hacen parches aunque la historia parezca puramente irritativa.</div>`
  },
  'atopica-escalones': {
    titulo: 'Dermatitis atópica: escalones y lo que hay que pactar antes',
    fuente: 'Actualizacion de la guia S3 de dermatitis atopica (Werfel T, et al. Allergol Select 2026;10:120-144, doi:10.5414/ALX02638E).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalón</th><th>Que se hace</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Base, siempre</td><td><strong>Emoliente a diario</strong> y en cantidad generosa, también sin brote. Baños cortos y templados con limpiador sin detergente. Evitar irritantes identificados. Educación sobre como y cuanto aplicar</td></tr>
            <tr><td class="figure-org">Brote</td><td>Corticoide tópico de potencia adaptada a la zona y a la edad. Inhibidor de la calcineurina en cara, párpados y pliegues, para evitar atrofia</td></tr>
            <tr><td class="figure-org">Mantenimiento</td><td><strong>Terapia proactiva:</strong> aplicar dos veces por semana sobre las zonas que recaen siempre, aunque esten aparentemente sanas</td></tr>
            <tr><td class="figure-org">Sin control</td><td>Fototerapia UVB de banda estrecha, o tratamiento sistémico</td></tr>
            <tr><td class="figure-org">Sistémico</td><td>Biológicos: <strong>dupilumab</strong> (bloquea interleucina 4 y 13 por el receptor de IL-4 alfa), lebrikizumab, nemolizumab. Inhibidores de la cinasa de Jano: baricitinib, upadacitinib, abrocitinib. Ciclosporina como puente por su rapidez</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box"><strong>Lo que la guía añade y que no es un fármaco:</strong> al iniciar el tratamiento sistémico hay que fijar por <strong>decisión compartida</strong> los objetivos, las expectativas realistas y los criterios de actuacion si no se cumplen. Hacerlo al principio evita el desacuerdo posterior sobre si ha funcionado. Dos detalles practicos: con <strong>dupilumab no se necesitan controles analíticos de rutina</strong>, pero hay que vigilar la conjuntivitis (en torno al 13% de adultos y hasta el 35% de niños, a veces después de un año), que casi nunca obliga a suspender. Con los <strong>inhibidores de la cinasa de Jano</strong>, la agencia europea pide cautela en mayores de 65 años, con riesgo cardiovascular o con antecedente de tabaquismo prolongado, usandolos solo si no hay alternativa adecuada.</div>`
  },
  'parches-lectura': {
    titulo: 'Pruebas epicutaneas: graduación y el paso que se olvida',
    fuente: 'Nassau S, Fonacier L. Allergic Contact Dermatitis. Med Clin North Am 2020;104(1):61-76.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lo que se ve</th><th>Como se gradua</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Nada</td><td>Negativa</td></tr>
            <tr><td class="figure-org">Solo eritema leve, sin relieve</td><td>Dudosa</td></tr>
            <tr><td class="figure-org">Eritema con infiltración y papulas</td><td>Positiva débil</td></tr>
            <tr><td class="figure-org">Lo anterior más vesiculas</td><td>Positiva fuerte</td></tr>
            <tr><td class="figure-org">Ampollas o ulceracion</td><td>Positiva muy intensa</td></tr>
            <tr><td class="figure-org">Eritema brillante de borde neto, tipo quemadura, que se apaga</td><td><span class="figure-tag dys">Reacción irritativa</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que deciden si la prueba sirve de algo. <strong>La segunda lectura</strong>: se lee a las 48 horas y otra vez de forma diferida a las <strong>96 horas o más</strong>, porque muchos alérgenos (corticoides y metales entre ellos) dan positividades tardías que se pierden si solo se lee una vez. <strong>El curso temporal</strong>: una reacción que CRECE entre las dos lecturas es alérgica; una que se apaga suele ser irritativa. Y <strong>la relevancia</strong>, que es el paso que más se olvida: una positividad solo explica el cuadro si el paciente esta expuesto a esa sustancia y esa exposición encaja con la localización de su eccema. Una positividad sin relevancia clínica no cierra el caso.</div>`
  }
};
