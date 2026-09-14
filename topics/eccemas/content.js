// topics/eccemas/content.js - Modulo 75: Eccemas (dermatitis atopica y de contacto).
// Basado en la actualizacion de la guia S3 de dermatitis atopica (Werfel T, et al. Allergol
// Select 2026;10:120-144, doi:10.5414/ALX02638E) y en la revision de dermatitis alergica de
// contacto (Nassau S, Fonacier L, 2020), que ya estaba en Bibliografia/.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'eccemas',
  titulo: 'Eccemas: dermatitis atopica y de contacto',
  subtitulo: 'Modulo 75 &middot; Dermatologia',
  accent: '#5c7a3a',
  accentDim: '#7a9455'
};

export const definicionText = `<p style="margin:0 0 14px;">Eccema es un <strong>patron de reaccion</strong> de la piel, no una enfermedad. Se reconoce por su morfologia, que cambia con el tiempo: en fase <strong>aguda</strong> hay eritema, edema, vesiculas y exudacion; en fase <strong>subaguda</strong>, costras y descamacion; y en fase <strong>cronica</strong>, liquenificacion (la piel engrosada con los pliegues marcados), fisuras y excoriaciones por rascado. Ese patron lo comparten entidades con causas distintas, y por eso la pregunta util no es "&#191;es un eccema?" sino "&#191;<strong>de que tipo</strong>?".</p>
<p style="margin:0 0 14px;">Los dos grandes son la <strong>dermatitis atopica</strong>, que es una enfermedad inflamatoria cronica de base genetica con alteracion de la barrera cutanea y desviacion inmunitaria hacia el tipo 2, y la <strong>dermatitis de contacto</strong>, que a su vez se divide en dos: la <strong>alergica</strong>, una hipersensibilidad retardada de tipo IV frente a un alergeno concreto, y la <strong>irritativa</strong>, un da&#241;o directo de la barrera sin mecanismo inmunitario especifico. Esa ultima division importa porque solo la alergica se estudia con pruebas epicutaneas, y en las dos el tratamiento de fondo es el mismo: <strong>evitar</strong>.</p>
<p style="margin:0 0 14px;">Dos ideas que ordenan la practica. La primera: en la dermatitis atopica el tratamiento sistemico moderno ha cambiado el techo de lo alcanzable, y la guia S3 pide fijar <strong>metas y expectativas por decision compartida al inicio</strong>, junto con los criterios para cambiar si no se cumplen. La segunda: un eccema de las manos o de la cara que no mejora con lo habitual obliga a pensar en <strong>contacto alergico sobrea&#241;adido</strong>, incluido el alergico al propio tratamiento topico.</p>`;

export const bibliografia = [
  'Werfel T, Heratizadeh A, Augustin M, et al. Update of the evidence- and consensus-based S3 guideline on atopic dermatitis: Systemic therapy with biologics or Janus kinase inhibitors and specific aspects of systemic therapy in pregnancy and lactation. Allergol Select. 2026;10:120-144. doi:10.5414/ALX02638E.',
  'Nassau S, Fonacier L. Allergic Contact Dermatitis. Med Clin North Am. 2020;104(1):61-76.',
  'Dhar S, De A, Rajgopalan M, et al. Skin Allergy Research Society and Society for Eczema Studies Joint Task Force Guidelines of Care for Management of Atopic Dermatitis. Indian J Dermatol. 2026;71(3):204-230. doi:10.4103/ijd.ijd_421_25.',
  'Carrascosa JM, Ubogui J, Gilaberte Y, et al. Narrowband UVB Phototherapy in Dermatology: GEF-CILAD 2026 Update. Actas Dermosifiliogr. 2026;117(8):104694. doi:10.1016/j.ad.2026.104694.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El eccema y su distribucion',
      tituloB: 'Datos que hacen dudar del diagnostico',
      compensada: 'La MORFOLOGIA dice que es un eccema: eritema, edema y vesiculas si es agudo; costras y descamacion si es subagudo; liquenificacion, fisuras y excoriaciones si es cronico. La DISTRIBUCION orienta al tipo. En la dermatitis atopica cambia con la edad: cara y superficies de extension en el lactante, PLIEGUES (antecubital, popliteo, cuello, mu&#241;ecas) en el ni&#241;o y el adulto, y en el adulto ademas manos, parpados y cabeza y cuello. En la de contacto, la lesion dibuja la ZONA EXPUESTA: el rectangulo del reloj, la linea del cinturon, el borde del calzado, el dorso de las manos del que usa guantes. El PRURITO es constante en la atopica: sin picor, hay que dudar del diagnostico.',
      descompensada: 'Datos que obligan a replantear: eccema que aparece por PRIMERA VEZ en un adulto mayor sin historia previa de atopia, que hace pensar en contacto, en eccema de estasis, en escabiosis o en linfoma cutaneo de celulas T; lesiones muy bien delimitadas con borde geometrico o lineal, que apuntan a contacto; afectacion de pliegues con maceracion y borde descamativo, que sugiere tinea o candidiasis; placas que no responden o empeoran con el corticoide topico, donde hay que pensar en dermatitis de contacto AL PROPIO TRATAMIENTO o en tinea incognito; y prurito intenso con lesiones en surcos interdigitales y genitales, que es escabiosis hasta que se demuestre lo contrario.'
    },
    laboratorio: [
      { prueba: 'Ninguna prueba confirma la dermatitis atopica', utilidad: 'Es un diagnostico CLINICO basado en criterios. La inmunoglobulina E total y las especificas NO lo confirman ni lo descartan: hay dermatitis atopica intrinseca con IgE normal, y hay IgE alta en personas sin enfermedad cutanea.' },
      { prueba: 'Pruebas epicutaneas (parche)', utilidad: 'LA prueba del tema. Es la unica que identifica el alergeno responsable de una dermatitis de contacto ALERGICA. Se lee a las 48 horas y de nuevo de forma diferida a las 96 horas o mas, porque muchas reacciones aparecen tarde.' },
      { prueba: 'Examen micologico directo y cultivo', utilidad: 'Ante cualquier eccema de pliegues, de pies o de manos que no responde. Separa la tinea del eccema, y la tinea tratada con corticoide (tinea incognito) es una de las causas mas frecuentes de eccema rebelde.' },
      { prueba: 'Raspado y dermatoscopia para escabiosis', utilidad: 'En el prurito intenso generalizado, sobre todo si hay otros convivientes afectados. Es un diagnostico que se confunde con eccema durante semanas.' },
      { prueba: 'Cultivo bacteriano de la lesion', utilidad: 'No de rutina: la piel atopica esta colonizada por estafilococo casi siempre, y cultivar sin sospecha clinica lleva a tratar una colonizacion. Se hace si hay signos de infeccion (exudado purulento, costras melicericas, empeoramiento brusco).' },
      { prueba: 'Serologia de herpes simple o citodiagnostico', utilidad: 'Ante un empeoramiento brusco con vesiculas monomorfas y umbilicadas, dolor y fiebre: es el eccema herpetico, que es una urgencia y necesita aciclovir sistemico.' },
      { prueba: 'Biopsia con inmunofenotipo', utilidad: 'Cuando un eccema del adulto no responde y se sospecha micosis fungoide. Puede requerir varias biopsias en el tiempo, porque las fases iniciales son histologicamente inespecificas.' },
      { prueba: 'Analitica antes de sistemico', utilidad: 'Hemograma, funcion hepatica y renal, serologias de hepatitis B y C y VIH, y cribado de tuberculosis segun el farmaco. Con dupilumab, la guia se&#241;ala que NO se necesitan controles analiticos de rutina; con los inhibidores de la cinasa de Jano si.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios diagnosticos (calculadora disponible)', interpretacion: 'Prurito como criterio obligatorio mas criterios menores de distribucion, historia y sequedad cutanea.', cutoff: 'Prurito + 3 de los 5 criterios' },
      { metodo: 'POEM (calculadora disponible)', interpretacion: 'Siete preguntas al paciente sobre la ultima semana: picor, sue&#241;o, exudacion, fisuras, descamacion, sequedad y sangrado.', cutoff: '0 a 28; 17 o mas es grave' },
      { metodo: 'Alergica frente a irritativa (calculadora disponible)', interpretacion: 'Cruza latencia, distribucion, sintoma predominante y numero de personas expuestas afectadas.', cutoff: 'La irritativa es mucho mas frecuente de lo que se cree' },
      { metodo: 'Lectura de las pruebas epicutaneas (calculadora disponible)', interpretacion: 'Traduce la morfologia de la reaccion y el momento de lectura a un resultado, y recuerda el paso que mas se olvida: la relevancia.', cutoff: 'Una reaccion positiva sin relevancia clinica no explica nada' },
      { metodo: 'EASI, SCORAD e IGA', interpretacion: 'Medidas de gravedad usadas en los ensayos y en las unidades especializadas. EASI combina signos y superficie por regiones; el IGA es una valoracion global de 0 a 4.', cutoff: 'EASI75 y IGA 0/1 son los objetivos habituales' },
      { metodo: 'Escala numerica de prurito', interpretacion: 'De 0 a 10 sobre el peor picor de las ultimas 24 horas. Es lo que mas le importa al paciente y lo que primero mejora con los sistemicos modernos.', cutoff: 'Una reduccion de 4 puntos se considera relevante' }
    ],
    imagen: [
      { modalidad: 'No se necesita imagen', hallazgos: 'Ni la dermatitis atopica ni la de contacto requieren pruebas de imagen.' },
      { modalidad: 'Ecografia Doppler venosa', hallazgos: 'Ante un eccema de piernas en un paciente mayor, para confirmar la insuficiencia venosa del eccema de estasis, que se trata con compresion y no solo con corticoide.' },
      { modalidad: 'Estudio de extension si hay linfoma', hallazgos: 'Tomografia y estudio hematologico si la biopsia confirma micosis fungoide, para estadificar.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Primero por el <strong>mecanismo</strong>: atopica (barrera alterada mas inflamacion tipo 2), contacto <strong>alergica</strong> (hipersensibilidad retardada tipo IV a un alergeno concreto) y contacto <strong>irritativa</strong> (da&#241;o directo de la barrera, sin memoria inmunitaria). Despues por la <strong>fase</strong>: aguda, subaguda o cronica, que decide el vehiculo del tratamiento. Y por la <strong>gravedad</strong>, que es lo que abre la puerta al tratamiento sistemico: superficie afectada, intensidad de los signos, prurito y repercusion en el sue&#241;o y en la vida diaria.`,
    escalas: [
      { nombre: 'Criterios diagnosticos de dermatitis atopica (calculadora disponible)', componentes: 'PRURITO como criterio obligatorio, mas: historia de afectacion de pliegues, antecedente personal de asma o rinitis alergica, piel seca generalizada en el ultimo a&#241;o, eccema flexural visible, e inicio antes de los dos a&#241;os.', formula: 'Prurito mas tres o mas de los cinco criterios.', interpretacion: 'El prurito es OBLIGATORIO: un eccema que no pica no es una dermatitis atopica. Los criterios estan pensados para uso clinico y epidemiologico, y no sustituyen al juicio ante una presentacion atipica.' },
      { nombre: 'POEM (calculadora disponible)', componentes: 'Siete sintomas en la ultima semana: picor, alteracion del sue&#241;o, exudacion, fisuras, descamacion, sequedad y sangrado, cada uno por numero de dias.', formula: 'Cada item de 0 a 4 segun los dias. Rango 0 a 28.', interpretacion: '0 a 2 casi nula; 3 a 7 leve; 8 a 16 moderada; 17 a 24 grave; 25 a 28 muy grave. Su virtud es que la punt&uacute;a el PACIENTE y recoge lo que el vive, no lo que el medico ve en una foto de un dia concreto.' },
      { nombre: 'EASI', componentes: 'Eritema, induracion o papulacion, excoriacion y liquenificacion, de 0 a 3, multiplicados por el area de cada una de cuatro regiones.', formula: 'Suma ponderada por regiones. Rango 0 a 72.', interpretacion: 'Es la medida de referencia en los ensayos, y de ella salen los objetivos EASI75 y EASI90. Su limitacion es la misma que la del PASI: mide lo que se ve y no lo que el paciente sufre, por eso se acompa&#241;a de POEM y de la escala de prurito.' },
      { nombre: 'Alergica frente a irritativa (calculadora disponible)', componentes: 'Latencia tras la exposicion, limites de la lesion, sintoma predominante, afectacion de otras personas expuestas y antecedente de exposicion previa.', formula: 'Combinacion de esos datos.', interpretacion: 'La irritativa es mucho mas frecuente y no necesita sensibilizacion previa: aparece en cualquiera con exposicion suficiente. La alergica necesita una exposicion previa que sensibilizo, y por eso puede debutar con un producto usado durante a&#241;os sin problema.' },
      { nombre: 'Lectura de las pruebas epicutaneas (calculadora disponible)', componentes: 'Morfologia de la reaccion (eritema, papulas, vesiculas, ampollas), momento de la lectura y relevancia clinica.', formula: 'Graduacion de dudosa a intensa, mas juicio de relevancia.', interpretacion: 'El paso que mas se olvida es el ultimo: una reaccion positiva solo importa si el paciente esta EXPUESTO a esa sustancia y la exposicion explica su cuadro. Una positividad sin relevancia clinica no cierra el caso.' },
      { nombre: 'Gravedad y criterio de sistemico', componentes: 'Superficie, intensidad, prurito, sue&#241;o, repercusion laboral o escolar y respuesta al tratamiento topico optimizado.', formula: 'Valoracion global.', interpretacion: 'La guia S3 subraya que las metas, las expectativas y los criterios de cambio se fijan por DECISION COMPARTIDA con el paciente al iniciar el tratamiento sistemico, no despues, cuando ya hay desacuerdo sobre si ha funcionado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Dermatitis atopica: reconocerla y medirla',
      color: '#5c7a3a',
      definicion: 'Enfermedad inflamatoria cronica y recidivante de la piel, de base genetica, caracterizada por prurito intenso, sequedad y eccema de distribucion tipica que cambia con la edad.',
      fisiopatologia: 'Hay dos motores que se alimentan entre si. El primero es la BARRERA: mutaciones y alteraciones funcionales de la filagrina y de los lipidos intercelulares hacen la piel permeable, seca y facil de penetrar. El segundo es la INFLAMACION de tipo 2, con interleucinas 4, 13 y 31, que a su vez empeora la barrera al reducir la filagrina y los lipidos, y que estimula directamente las fibras nerviosas del PRURITO, sobre todo la interleucina 31. El rascado rompe mas la barrera y cierra el circulo. Esa via explica por que un farmaco que bloquea la se&#241;al de las interleucinas 4 y 13 mejora a la vez las lesiones y el picor.',
      epidemiologia: 'Es la enfermedad cutanea cronica mas frecuente en la infancia, y una proporcion importante de los casos persiste o reaparece en la edad adulta. Forma parte de la marcha atopica junto con el asma, la rinitis alergica y la alergia alimentaria.',
      factores_riesgo: ['Antecedente familiar de atopia', 'Mutaciones de la filagrina', 'Clima seco y frio', 'Ba&#241;os frecuentes con agua caliente y jabones agresivos', 'Irritantes: lana, detergentes, sudor', 'Estres psicologico', 'Infeccion o colonizacion por estafilococo', 'Aeroalergenos en pacientes sensibilizados'],
      clinica: 'Prurito constante, piel seca y eccema con distribucion que cambia con la edad: cara y extension en el lactante, PLIEGUES en el ni&#241;o y el adulto, y en el adulto ademas manos, parpados y region de cabeza y cuello. Liquenificacion en las zonas de rascado cronico. Curso en brotes.',
      criterios_dx: 'CLINICO. Prurito obligatorio mas tres o mas criterios de apoyo: afectacion de pliegues, antecedente de asma o rinitis, piel seca en el ultimo a&#241;o, eccema flexural visible e inicio antes de los dos a&#241;os.',
      laboratorio: 'Ninguno confirma. La IgE no diagnostica ni descarta: existe la forma intrinseca con IgE normal.',
      imagen: 'No se necesita.',
      complementarios: 'POEM, EASI y escala de prurito. Pruebas epicutaneas si se sospecha contacto sobrea&#241;adido, que es frecuente en manos, parpados y en quien lleva a&#241;os aplicandose topicos.',
      dx_diferencial: 'Dermatitis de contacto, escabiosis, tinea, psoriasis (placas bien delimitadas con escama nacarada en extension), micosis fungoide, dermatitis seborreica y, en el lactante, inmunodeficiencias primarias si hay infecciones graves asociadas.',
      tx_medico: 'La base es la BARRERA: emolientes en cantidad generosa y a diario, tambien fuera de los brotes, ba&#241;os cortos con agua templada y syndet, y secado sin frotar. Educacion estructurada sobre la enfermedad y sobre como aplicar los tratamientos, que mejora los resultados mas de lo que se suele creer. Identificar y evitar irritantes concretos.',
      tx_farmacologico: 'Corticoide topico de potencia adaptada a la zona y a la edad para el brote, y despues terapia PROACTIVA: aplicar dos veces por semana sobre las zonas que recaen siempre, que reduce los brotes. Inhibidores topicos de la calcineurina en cara, parpados y pliegues para evitar la atrofia por corticoide. Antihistaminico de utilidad limitada: el prurito de la atopica no es histaminergico.',
      tx_intervencionista: 'Fototerapia UVB de banda estrecha como opcion en enfermedad extensa que no se controla con topicos y antes o junto al sistemico.',
      criterios_uci: 'Solo en la eritrodermia atopica con inestabilidad, o en un eccema herpetico diseminado con afectacion sistemica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'El ingreso es excepcional. Si ocurre, curas, control del prurito y busqueda de la complicacion que lo motivo, normalmente infecciosa.',
      seguimiento_ambulatorio: 'Medir con POEM y escala de prurito en cada visita. Revisar la TECNICA de aplicacion y la cantidad de emoliente, que es donde falla la mayoria de los tratamientos que parecen ineficaces.',
      pronostico: 'Muchos casos mejoran con la edad, aunque la tendencia a la piel seca y a las manos sensibles suele persistir. La enfermedad grave del adulto tiene un impacto importante en el sue&#241;o, el animo y el trabajo.',
      algoritmo: ['Confirmar por criterios, con el prurito como obligatorio', 'Definir la fase para elegir el vehiculo', 'Medir con POEM y escala de prurito', 'Emoliente diario como base innegociable', 'Corticoide topico para el brote y despues proactivo', 'Calcineurinico en cara, parpados y pliegues', 'Si no se controla, valorar fototerapia o sistemico']
    },
    {
      nombre: 'Dermatitis atopica: sistemico y metas por decision compartida',
      color: '#3d5a73',
      definicion: 'Tratamiento de la enfermedad moderada a grave que no se controla con medidas topicas optimizadas, con objetivos y criterios de cambio acordados con el paciente desde el principio.',
      fisiopatologia: 'Los biologicos bloquean la via de tipo 2 de forma selectiva: el dupilumab se une a la subunidad alfa del receptor de interleucina 4, que forma parte de los complejos de receptor de las interleucinas 4 Y 13, de modo que bloquea las dos. El lebrikizumab act&uacute;a sobre la interleucina 13 y el nemolizumab sobre la via de la interleucina 31, que es la del prurito. Los inhibidores de la cinasa de Jano act&uacute;an dentro de la celula sobre la se&#241;al de multiples citocinas a la vez, lo que explica que sean mas rapidos y tambien que tengan mas efectos de clase.',
      epidemiologia: 'El grupo con enfermedad moderada a grave es una minoria de los pacientes pero concentra casi toda la carga de la enfermedad. La llegada de estos farmacos ha subido el techo de lo alcanzable de forma clara.',
      factores_riesgo: ['Enfermedad extensa o de larga evolucion', 'Prurito que altera el sue&#241;o de forma habitual', 'Fracaso del tratamiento topico bien aplicado', 'Repercusion laboral, escolar o sobre el animo', 'Brotes frecuentes que obligan a ciclos repetidos de corticoide'],
      clinica: 'El paciente candidato suele llevar a&#241;os con ciclos de corticoide, sue&#241;o roto y la sensacion de que nada funciona del todo. Conviene comprobar antes la adherencia y la cantidad de topico usada, porque una parte de los fracasos son de aplicacion.',
      criterios_dx: 'Enfermedad moderada a grave que no se controla pese a tratamiento topico optimizado y bien aplicado.',
      laboratorio: 'Estudio previo segun el farmaco. Con DUPILUMAB la guia se&#241;ala que no se necesitan controles analiticos de rutina. Con inhibidores de la cinasa de Jano si hacen falta, ademas del cribado de infecciones y de la valoracion del riesgo cardiovascular y oncologico.',
      imagen: 'No se necesita.',
      complementarios: 'EASI, POEM y escala de prurito basales y en cada revision, para poder comparar contra la meta acordada.',
      dx_diferencial: 'Antes de escalar, descartar lo que imita una atopia refractaria: micosis fungoide, escabiosis, dermatitis de contacto sobrea&#241;adida (incluida la alergia al propio topico) y tinea incognito.',
      tx_medico: 'La guia S3 pide fijar al INICIO, por decision compartida, tres cosas: los objetivos del tratamiento, las expectativas realistas y los criterios de actuacion si no se cumplen. Hacerlo al principio evita el desacuerdo posterior sobre si el tratamiento ha funcionado o no.',
      tx_farmacologico: 'Biologicos: dupilumab (anti receptor de interleucina 4 alfa, que bloquea interleucina 4 y 13), y las incorporaciones recientes lebrikizumab y nemolizumab. Inhibidores de la cinasa de Jano: baricitinib, upadacitinib y abrocitinib, con ampliaciones de indicacion pediatrica (abrocitinib desde los 12 a&#241;os y baricitinib desde los 2). La ciclosporina sigue siendo una opcion de puente por su rapidez, con las limitaciones conocidas.',
      tx_intervencionista: 'Fototerapia UVB de banda estrecha, sola o combinada, que sigue siendo una opcion util y barata.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Con dupilumab, vigilar la CONJUNTIVITIS, que aparece en torno al 13% de los adultos y hasta en el 35% de los ni&#241;os, y que puede tardar mas de un a&#241;o en aparecer. Suele bastar con lagrimas artificiales o colirio, sin suspender el farmaco; en casos graves o en ni&#241;os peque&#241;os, valoracion oftalmologica. La eosinofilia transitoria es frecuente y sin significado clinico. Y vigilar el empeoramiento de psoriasis, artritis reumatoide o enfermedad de Crohn concomitantes, en las que participan celulas productoras de interleucina 17.',
      pronostico: 'La mayoria de los pacientes con enfermedad moderada a grave alcanza hoy un control que antes no era posible, con mejoria rapida del prurito.',
      algoritmo: ['Confirmar que el topico esta bien aplicado y es insuficiente', 'Descartar lo que imita una atopia refractaria', 'Acordar metas y criterios de cambio con el paciente', 'Cribado de seguridad segun el farmaco elegido', 'Elegir biologico o inhibidor de cinasa de Jano', 'Con inhibidores de cinasa de Jano, valorar edad y riesgo cardiovascular', 'Reevaluar contra la meta acordada y ajustar']
    },
    {
      nombre: 'Dermatitis de contacto alergica',
      color: '#8c3a34',
      definicion: 'Hipersensibilidad retardada de tipo IV frente a un alergeno concreto, que produce eccema en la zona de contacto tras una exposicion previa que sensibilizo.',
      fisiopatologia: 'Hay DOS fases y entenderlas explica toda la clinica. En la SENSIBILIZACION, un hapteno (una molecula de bajo peso molecular que por si sola no es inmunogena) penetra la piel, se une a proteinas propias y es presentado a los linfocitos T, que se expanden como clones especificos. Esta fase no produce sintomas y puede durar semanas. En la ELICITACION, una nueva exposicion al mismo alergeno es reconocida por esos linfocitos ya sensibilizados, que desencadenan la inflamacion: por eso la lesion tarda de 24 a 72 HORAS en aparecer, y por eso puede debutar frente a un producto usado durante a&#241;os sin problema. Ademas, quien se sensibiliza a un alergeno es mas susceptible de sensibilizarse a otro.',
      epidemiologia: 'Muy frecuente, y con un componente laboral importante: manos de personal sanitario, peluqueria, construccion, limpieza y hosteleria. No todas las personas expuestas a un alergeno se sensibilizan.',
      factores_riesgo: ['Exposicion laboral repetida', 'Barrera cutanea alterada previa, como en la dermatitis atopica', 'Dermatitis irritativa previa, que facilita la penetracion del hapteno', 'Uso cronico de topicos, incluidos corticoides y antibioticos', 'Piercings y bisuteria, por el niquel', 'Cosmetica y tintes capilares'],
      clinica: 'Eccema pruriginoso que dibuja la ZONA EXPUESTA, con frecuencia con limites geometricos que delatan el objeto: el rectangulo del reloj, la linea del cinturon, el borde del calzado, la forma del apartado del parche. Aparece 24 a 72 horas despues del contacto, no inmediatamente. Puede extenderse mas alla de la zona por diseminacion a distancia.',
      criterios_dx: 'Historia compatible mas PRUEBAS EPICUTANEAS positivas con RELEVANCIA clinica demostrada. Los dos requisitos hacen falta.',
      laboratorio: 'Pruebas epicutaneas con la bateria estandar y con baterias dirigidas segun la ocupacion y la sospecha, incluidos los propios productos del paciente cuando procede.',
      imagen: 'No se necesita.',
      complementarios: 'Revision detallada de cosmeticos, productos de trabajo, calzado, guantes y medicacion topica. Preguntar de forma expresa por lo que se aplica en la lesion, porque el propio tratamiento es una causa frecuente.',
      dx_diferencial: 'Dermatitis de contacto irritativa, dermatitis atopica, tinea, psoriasis palmoplantar, dermatitis de contacto proteica y fotodermatosis.',
      tx_medico: 'Una vez identificado el alergeno, el tratamiento de fondo es EVITARLO, y eso exige una lista escrita de productos y sinonimos que el paciente pueda usar al comprar. Proteccion de barrera en el ambito laboral y cambio de guantes al material adecuado cuando sea el guante el problema.',
      tx_farmacologico: 'Corticoide topico de potencia adecuada a la zona durante el brote. Corticoide sistemico en ciclo corto solo en cuadros extensos o muy incapacitantes. Emolientes para reparar la barrera.',
      tx_intervencionista: 'No aplica. En casos laborales, la adaptacion del puesto de trabajo puede ser la medida decisiva.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Comprobar a las semanas si la evitacion ha funcionado. Si no mejora pese a evitar el alergeno identificado, revisar la relevancia de ese resultado y buscar exposiciones no sospechadas.',
      pronostico: 'Bueno si se identifica y se evita el alergeno. La sensibilizacion es permanente: no se pierde con el tiempo.',
      algoritmo: ['Sospechar por la distribucion y por la latencia de 24 a 72 h', 'Inventariar exposiciones, incluida la medicacion topica', 'Pruebas epicutaneas con bateria estandar y dirigida', 'Leer a 48 h y de forma diferida a 96 h o mas', 'Juzgar la RELEVANCIA de cada positividad', 'Lista escrita de evitacion con sinonimos', 'Corticoide topico para el brote']
    },
    {
      nombre: 'Dermatitis de contacto irritativa',
      color: '#8a5a2e',
      definicion: 'Da&#241;o directo de la barrera cutanea por una sustancia, sin mecanismo inmunitario especifico y sin necesidad de sensibilizacion previa.',
      fisiopatologia: 'La sustancia elimina los lipidos y da&#241;a los queratinocitos de forma directa, con liberacion de citocinas inflamatorias. Como no hay memoria inmunitaria, NO hace falta exposicion previa: cualquier persona con exposicion suficiente en intensidad o en repeticion la desarrolla. Por eso la forma aguda aparece en minutos u horas tras un caustico, y la cronica tras meses de lavados repetidos: es la suma de agresiones que la piel no llega a reparar.',
      epidemiologia: 'Es MUCHO mas frecuente que la alergica, aunque en la consulta se piense antes en la alergica. Es la causa principal de eccema de manos laboral, sobre todo en sanitarios, limpieza, hosteleria y peluqueria.',
      factores_riesgo: ['Lavado de manos muy frecuente', 'Trabajo en humedo mas de dos horas al dia', 'Uso prolongado de guantes oclusivos', 'Detergentes, disolventes y desinfectantes', 'Dermatitis atopica previa, que multiplica la susceptibilidad', 'Clima frio y seco'],
      clinica: 'Escozor y ardor MAS que picor, que es lo que mejor la separa de la alergica. Lesion limitada a la zona de contacto con bordes peor definidos, sequedad, fisuras dolorosas en los pulpejos y dorso de manos. Afecta a varias personas expuestas a lo mismo, no solo a una.',
      criterios_dx: 'Clinico, por la historia de exposicion y la ausencia de positividades relevantes en las pruebas epicutaneas. Las pruebas se hacen justamente para descartar un componente alergico a&#241;adido, que es frecuente.',
      laboratorio: 'Pruebas epicutaneas para descartar alergia sobrea&#241;adida. Examen micologico si afecta a los pies o a un solo lado.',
      imagen: 'No se necesita.',
      complementarios: 'Analisis de la jornada laboral: cuantos lavados, cuanto tiempo con guantes, que productos y en que concentracion.',
      dx_diferencial: 'Dermatitis de contacto alergica, dermatitis atopica de manos, psoriasis palmar, tinea manuum (que es tipicamente UNILATERAL, un dato muy util) y eccema dishidrotico.',
      tx_medico: 'Es lo que mas cambia el resultado y lo que menos se explica: reducir el numero de lavados, secar bien los espacios interdigitales, usar guantes de algodon bajo los de trabajo y limitar el tiempo de oclusion, aplicar emoliente varias veces al dia y siempre al terminar el turno. Sustituir el jabon por un limpiador sin detergente.',
      tx_farmacologico: 'Corticoide topico durante el brote, con un vehiculo graso en la fase cronica fisurada. Emolientes en cantidad generosa, que aqui son tratamiento y no un complemento.',
      tx_intervencionista: 'Adaptacion del puesto de trabajo. En casos graves y persistentes puede plantearse el cambio de actividad.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Reevaluar la exposicion real, no la teorica. Si no mejora pese a las medidas, repetir las pruebas epicutaneas buscando un alergeno a&#241;adido.',
      pronostico: 'Mejora al reducir la exposicion, pero recae con facilidad y puede cronificarse si el trabajo no cambia. El eccema cronico de manos es una causa frecuente de incapacidad laboral.',
      algoritmo: ['Cuantificar la exposicion real de la jornada', 'Escozor mas que picor y varias personas afectadas orientan aqui', 'Pruebas epicutaneas para descartar alergia a&#241;adida', 'Reducir lavados y tiempo de oclusion', 'Emoliente varias veces al dia', 'Corticoide topico para el brote', 'Adaptar el puesto si no mejora']
    },
    {
      nombre: 'Pruebas epicutaneas: como se leen y el paso que se olvida',
      color: '#5a4a8c',
      definicion: 'Prueba que reproduce de forma controlada una hipersensibilidad retardada aplicando alergenos en la espalda bajo oclusion, para identificar el responsable de una dermatitis de contacto alergica.',
      fisiopatologia: 'Se aplica el alergeno a una concentracion que no irrita pero que basta para desencadenar la fase de elicitacion en quien ya esta sensibilizado. Como el mecanismo es de tipo IV, mediado por linfocitos T y no por anticuerpos, la reaccion NECESITA tiempo: de ahi que se lea a las 48 horas y otra vez de forma diferida.',
      epidemiologia: 'Es la unica prueba que identifica el alergeno responsable. Se hace con una bateria estandar de los alergenos mas frecuentes, ampliada segun la ocupacion y la sospecha.',
      factores_riesgo: ['Sospecha de dermatitis de contacto alergica', 'Eccema de manos, pies, cara o parpados que no responde', 'Eccema que empeora con el tratamiento topico', 'Eccema de distribucion sugerente de un objeto', 'Dermatitis atopica del adulto que se vuelve refractaria'],
      clinica: 'La lectura valora la morfologia: solo eritema es dudosa; eritema con infiltracion y papulas es positiva debil; a&#241;adir vesiculas la hace positiva fuerte; y las ampollas o la ulceracion, muy intensa. Una reaccion que se apaga entre la primera y la segunda lectura suele ser IRRITATIVA; una que crece con el tiempo es alergica, y ese comportamiento temporal es la mejor pista.',
      criterios_dx: 'Positividad morfologica MAS relevancia clinica. La guia practica es sencilla y se olvida a diario: una positividad sin exposicion que la explique no cierra el caso.',
      laboratorio: 'No aplica. La prueba es la exploracion.',
      imagen: 'No se necesita.',
      complementarios: 'Lectura diferida a las 96 horas o mas, imprescindible porque muchos alergenos (corticoides y metales entre ellos) dan positividades tardias que se pierden si solo se lee a las 48 horas.',
      dx_diferencial: 'Reaccion irritativa en el sitio del parche, que se distingue por su morfologia (eritema brillante de bordes netos, a veces con aspecto de quemadura) y por su curso decreciente.',
      tx_medico: 'Antes de la prueba: no aplicar corticoide en la espalda durante al menos una semana, no haber tomado corticoide sistemico ni inmunosupresor en dosis relevantes, y evitar la exposicion solar de la zona. La espalda debe estar libre de eccema activo.',
      tx_farmacologico: 'No aplica. El resultado de la prueba es lo que dirige el tratamiento, que es la evitacion.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Entregar la lista de alergenos positivos con sus SINONIMOS comerciales y donde se encuentran, porque sin eso la evitacion no es posible en la practica. Revisar a las semanas si la evitacion ha funcionado.',
      pronostico: 'La identificacion del alergeno cambia el curso de la enfermedad. El fallo mas frecuente no es tecnico sino de interpretacion: dar por resuelto un caso con una positividad que el paciente no toca nunca.',
      algoritmo: ['Seleccionar la bateria estandar y las dirigidas por la ocupacion', 'Comprobar que la espalda esta libre de eccema y de corticoide', 'Aplicar y retirar a las 48 horas, con primera lectura', 'Segunda lectura diferida a las 96 horas o mas', 'Graduar la morfologia de cada reaccion', 'JUZGAR LA RELEVANCIA de cada positividad', 'Entregar lista escrita de evitacion con sinonimos']
    },
    {
      nombre: 'Otros eccemas y lo que se disfraza de eccema',
      color: '#3f6b52',
      definicion: 'Formas de eccema con patron propio y entidades que imitan un eccema y que explican buena parte de los cuadros que no responden.',
      fisiopatologia: 'El dishidrotico produce vesiculas profundas en caras laterales de dedos, palmas y plantas, con una relacion frecuente con el estres y el calor. El numular forma placas redondeadas muy bien delimitadas sobre piel seca. El asteatosico aparece en la piel seca del anciano, con un patron de grietas superficiales en las piernas. Y el de estasis es consecuencia de la HIPERTENSION VENOSA cronica: el edema y el deposito de hemosiderina producen inflamacion, y por eso el tratamiento decisivo es la COMPRESION y no el corticoide.',
      epidemiologia: 'El eccema de estasis es muy frecuente en el paciente mayor y se trata mal de forma sistematica, con corticoides indefinidos y sin compresion. La micosis fungoide es rara pero se diagnostica con a&#241;os de retraso bajo la etiqueta de eccema.',
      factores_riesgo: ['Insuficiencia venosa cronica, para el de estasis', 'Edad avanzada y ba&#241;os frecuentes, para el asteatosico', 'Estres y sudoracion, para el dishidrotico', 'Piel seca y clima frio, para el numular', 'Inmunosupresion o convivientes con prurito, para la escabiosis'],
      clinica: 'Claves rapidas: vesiculas profundas en caras laterales de los dedos es dishidrotico; placas redondas bien delimitadas es numular; grietas superficiales en piernas de anciano es asteatosico; eccema en el tercio distal de la pierna con edema, varices e hiperpigmentacion es de estasis; placas persistentes que no responden en zonas cubiertas de un adulto obliga a pensar en micosis fungoide; y prurito nocturno intenso con surcos interdigitales y afectacion de otros convivientes es escabiosis.',
      criterios_dx: 'Clinicos, apoyados en la ecografia Doppler venosa en el de estasis, en el examen micologico ante la duda de tinea, en el raspado para escabiosis y en la biopsia con inmunofenotipo ante sospecha de linfoma.',
      laboratorio: 'Examen micologico, raspado para acaros y biopsia segun la sospecha.',
      imagen: 'Ecografia Doppler venosa ante eccema de piernas con edema.',
      complementarios: 'En la micosis fungoide pueden hacer falta varias biopsias a lo largo del tiempo, porque las fases iniciales son inespecificas.',
      dx_diferencial: 'Entre ellos, y con la psoriasis, la tinea, la dermatitis de contacto y el linfoma cutaneo.',
      tx_medico: 'Cada uno el suyo, y dos que se hacen mal de forma habitual: el eccema de estasis necesita COMPRESION y elevacion, no solo corticoide, y ademas es una de las localizaciones con mas riesgo de sensibilizacion de contacto por el uso prolongado de topicos; y el asteatosico necesita emoliente y menos ba&#241;os, no un corticoide potente indefinido.',
      tx_farmacologico: 'Corticoide topico adaptado a la zona para el brote. En el dishidrotico, corticoide potente en pauta corta. En la escabiosis, permetrina o ivermectina, tratando ademas a los convivientes.',
      tx_intervencionista: 'Tratamiento de la insuficiencia venosa en el de estasis.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Si un eccema no responde, la pregunta no es que corticoide mas fuerte poner, sino si el diagnostico es correcto.',
      pronostico: 'Bueno en los eccemas comunes cuando se corrige la causa. Malo si se retrasa el diagnostico de una micosis fungoide o de una escabiosis.',
      algoritmo: ['Mirar la morfologia y la localizacion, que casi siempre bastan', 'Eccema de piernas con edema: pensar en estasis y comprimir', 'Prurito nocturno con convivientes afectados: descartar escabiosis', 'Unilateral o de pliegues: examen micologico', 'Adulto con placas persistentes que no responden: biopsiar', 'Si no responde, revisar el diagnostico antes que el corticoide']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El eccema rara vez motiva un ingreso, pero el internista lo encuentra a menudo en el paciente ingresado por otra causa, y ahi hay cuatro cosas que se le escapan a casi todo el mundo.',
    parametros: [
      'Empeoramiento brusco con vesiculas monomorfas y umbilicadas, dolor y fiebre: es ECCEMA HERPETICO, una urgencia que necesita aciclovir sistemico, no mas corticoide.',
      'Eccema de piernas con edema en el paciente encamado: pensar en estasis y poner COMPRESION, no solo corticoide.',
      'Eccema que empeora con el tratamiento aplicado: sospechar dermatitis de contacto al propio topico (conservantes, antibioticos topicos, e incluso al corticoide).',
      'Antes de dar por sentado un eccema, descartar ESCABIOSIS si hay prurito nocturno intenso, sobre todo en residencias y en pacientes institucionalizados, donde se disemina con facilidad.',
      'Revisar el vehiculo: pomada en la piel liquenificada y seca, crema en la subaguda, y en la exudativa, fomentos y secado antes que una pomada oclusiva.',
      'En el paciente con dupilumab, la conjuntivitis es esperable y no obliga a suspenderlo; la eosinofilia transitoria tampoco tiene significado.'
    ],
    criterios_uci_general: 'Eritrodermia atopica con inestabilidad hemodinamica o termica, o eccema herpetico diseminado con afectacion sistemica.',
    criterios_tips_general: 'No aplica en eccemas.',
    criterios_trasplante_general: 'No aplica en eccemas.',
    prevencion: 'Emoliente diario como base de todo, ba&#241;os cortos con agua templada y limpiadores sin detergente, reduccion de lavados y de oclusion en el trabajo, guantes adecuados al material, evitacion escrita de los alergenos identificados, y terapia proactiva dos veces por semana en las zonas que recaen siempre.'
  }
};

export const compCites = {
  'Dermatitis atopica: reconocerla y medirla': { tx_farmacologico: [3] },
  'Dermatitis atopica: sistemico y metas por decision compartida': { tx_medico: [1], tx_farmacologico: [1], laboratorio: [1], seguimiento_ambulatorio: [1], tx_intervencionista: [4] },
  'Dermatitis de contacto alergica': { fisiopatologia: [2], criterios_dx: [2], tx_medico: [2] },
  'Dermatitis de contacto irritativa': { fisiopatologia: [2] },
  'Pruebas epicutaneas: como se leen y el paso que se olvida': { criterios_dx: [2] },
  'Otros eccemas y lo que se disfraza de eccema': {}
};

export const estigmasTitulo = 'Signos y pistas de la exploracion';
export const estigmas = [
  { nombre: 'Liquenificacion', descripcion: 'Piel engrosada con los pliegues cutaneos marcados y aspecto de corteza, por rascado cronico. Es el sello del eccema cronico y marca las zonas que recaen siempre.' },
  { nombre: 'Pliegue de Dennie-Morgan', descripcion: 'Doble pliegue en el parpado inferior. Es uno de los estigmas clasicos de atopia, frecuente y facil de ver.' },
  { nombre: 'Signo de Hertoghe', descripcion: 'Rarefaccion del tercio externo de las cejas, por rascado cronico de la zona. Otro estigma atopico que se busca en segundos.' },
  { nombre: 'Xerosis generalizada', descripcion: 'Piel seca y aspera fuera de las lesiones, expresion de la barrera alterada. Es lo que justifica el emoliente diario incluso sin brote.' },
  { nombre: 'Limite geometrico', descripcion: 'Borde recto, rectangular o lineal que dibuja un objeto: reloj, cinturon, calzado, tirante. Es la pista que apunta a contacto y a veces identifica el alergeno de un vistazo.' },
  { nombre: 'Afectacion unilateral', descripcion: 'Un eccema de una sola mano o de un solo pie debe hacer pensar en TINEA antes que en eccema. La tinea manuum unilateral con afectacion de ambos pies es un patron clasico.' }
];

export const biopsiaTitulo = 'Biopsia cutanea: cuando aporta';
export const biopsia = {
  indicaciones: [
    'Eccema del adulto que no responde y que persiste en zonas cubiertas: descartar micosis fungoide',
    'Presentacion atipica en la que el diagnostico cambiaria el tratamiento',
    'Eritrodermia de origen incierto',
    'Sospecha de una segunda dermatosis superpuesta',
    'Lesiones que no encajan con ninguno de los patrones habituales de eccema'
  ],
  ventajas: [
    'Confirma el patron espongiotico propio del eccema',
    'Con inmunofenotipo permite detectar un linfoma cutaneo de celulas T',
    'Ayuda a separar psoriasis de eccema cuando la clinica es intermedia'
  ],
  limitaciones: [
    'La histologia del eccema es INESPECIFICA: no distingue atopica de contacto ni alergica de irritativa',
    'En la micosis fungoide precoz puede ser normal y obligar a repetirla en el tiempo',
    'El corticoide topico reciente altera los hallazgos'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion',
    'Evitar biopsiar una lesion tratada con corticoide potente los dias previos',
    'No sustituye a las pruebas epicutaneas: la biopsia no identifica alergenos'
  ]
};

export const escalaRefs = { 'Criterios diagnosticos de dermatitis atopica (calculadora disponible)': [3], 'POEM (calculadora disponible)': [1, 3], 'EASI': [1], 'Alergica frente a irritativa (calculadora disponible)': [2], 'Lectura de las pruebas epicutaneas (calculadora disponible)': [2], 'Gravedad y criterio de sistemico': [1] };

export const escalaCalc = {
  'Criterios diagnosticos de dermatitis atopica (calculadora disponible)': 'criterios-atopica',
  'POEM (calculadora disponible)': 'poem',
  'Alergica frente a irritativa (calculadora disponible)': 'acd-vs-icd',
  'Lectura de las pruebas epicutaneas (calculadora disponible)': 'epicutaneas'
};

export const compGroups = [
  { title: 'Dermatitis atopica', items: ['Dermatitis atopica: reconocerla y medirla', 'Dermatitis atopica: sistemico y metas por decision compartida'] },
  { title: 'Dermatitis de contacto', items: ['Dermatitis de contacto alergica', 'Dermatitis de contacto irritativa', 'Pruebas epicutaneas: como se leen y el paso que se olvida'] },
  { title: 'Los demas eccemas', items: ['Otros eccemas y lo que se disfraza de eccema'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son la dermatitis atopica: reconocerla y medirla, y despues el tratamiento sistemico, donde lo nuevo no es solo el farmaco sino la obligacion de pactar metas y criterios de cambio con el paciente ANTES de empezar. Las tres siguientes son la dermatitis de contacto, separada en alergica e irritativa porque el mecanismo, la clinica y el estudio son distintos, con una ficha propia para las pruebas epicutaneas y para el paso que mas se olvida al leerlas. La ultima reune los demas eccemas y, sobre todo, lo que se disfraza de eccema: ahi estan casi todos los casos que llevan meses sin responder.';

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
    { title: 'Dermatitis atopica', sub: 'Barrera + inflamacion tipo 2', color: '#5c7a3a', target: 'complicaciones', leaves: [
      { title: 'Topico y proactivo', sub: 'Emoliente + corticoide 2 veces/semana', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sistemico', sub: 'Metas por decision compartida', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'De contacto', sub: 'La distribucion dibuja la causa', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Alergica', sub: 'Tipo IV &middot; 24 a 72 h &middot; parches', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Irritativa', sub: 'Sin sensibilizacion &middot; mas frecuente', color: '#8a5a2e', target: 'complicaciones' }
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
          <thead><tr><th></th><th>Atopica</th><th>Contacto alergica</th><th>Contacto irritativa</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Mecanismo</td><td>Barrera alterada + inflamacion tipo 2</td><td>Hipersensibilidad <strong>tipo IV</strong> a un alergeno</td><td>Da&#241;o <strong>directo</strong> de la barrera</td></tr>
            <tr><td class="figure-org">&#191;Hace falta exposicion previa?</td><td>No aplica</td><td><strong>Si</strong>, hay que estar sensibilizado</td><td><strong>No</strong>, le pasa a cualquiera</td></tr>
            <tr><td class="figure-org">Latencia</td><td>Curso cronico en brotes</td><td>24 a 72 horas</td><td>Minutos a horas (aguda) o meses (cronica)</td></tr>
            <tr><td class="figure-org">Sintoma que domina</td><td>Picor</td><td>Picor</td><td><strong>Escozor o ardor</strong></td></tr>
            <tr><td class="figure-org">Distribucion</td><td>Pliegues; cambia con la edad</td><td>Dibuja el objeto, bordes geometricos</td><td>Zona de contacto, bordes difusos</td></tr>
            <tr><td class="figure-org">&#191;Afecta a otros expuestos?</td><td>No</td><td>Solo a los sensibilizados</td><td><strong>Si</strong>, a casi todos</td></tr>
            <tr><td class="figure-org">Prueba</td><td>Criterios clinicos</td><td><strong>Epicutaneas</strong> + relevancia</td><td>Historia; parches para descartar alergia</td></tr>
            <tr><td class="figure-org">Frecuencia relativa</td><td>Muy frecuente</td><td>Frecuente</td><td><span class="figure-tag dys">La mas frecuente</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos matices que cambian la consulta. El primero: se piensa antes en la <strong>alergica</strong>, pero la <strong>irritativa es mas frecuente</strong>, sobre todo en el eccema de manos laboral. El segundo: las dos <strong>coexisten a menudo</strong>, porque la irritacion rompe la barrera y facilita que el hapteno penetre y sensibilice. Por eso en un eccema de manos que no mejora se hacen parches aunque la historia parezca puramente irritativa.</div>`
  },
  'atopica-escalones': {
    titulo: 'Dermatitis atopica: escalones y lo que hay que pactar antes',
    fuente: 'Actualizacion de la guia S3 de dermatitis atopica (Werfel T, et al. Allergol Select 2026;10:120-144, doi:10.5414/ALX02638E).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalon</th><th>Que se hace</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Base, siempre</td><td><strong>Emoliente a diario</strong> y en cantidad generosa, tambien sin brote. Ba&#241;os cortos y templados con limpiador sin detergente. Evitar irritantes identificados. Educacion sobre como y cuanto aplicar</td></tr>
            <tr><td class="figure-org">Brote</td><td>Corticoide topico de potencia adaptada a la zona y a la edad. Inhibidor de la calcineurina en cara, parpados y pliegues, para evitar atrofia</td></tr>
            <tr><td class="figure-org">Mantenimiento</td><td><strong>Terapia proactiva:</strong> aplicar dos veces por semana sobre las zonas que recaen siempre, aunque esten aparentemente sanas</td></tr>
            <tr><td class="figure-org">Sin control</td><td>Fototerapia UVB de banda estrecha, o tratamiento sistemico</td></tr>
            <tr><td class="figure-org">Sistemico</td><td>Biologicos: <strong>dupilumab</strong> (bloquea interleucina 4 y 13 por el receptor de IL-4 alfa), lebrikizumab, nemolizumab. Inhibidores de la cinasa de Jano: baricitinib, upadacitinib, abrocitinib. Ciclosporina como puente por su rapidez</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box"><strong>Lo que la guia a&#241;ade y que no es un farmaco:</strong> al iniciar el tratamiento sistemico hay que fijar por <strong>decision compartida</strong> los objetivos, las expectativas realistas y los criterios de actuacion si no se cumplen. Hacerlo al principio evita el desacuerdo posterior sobre si ha funcionado. Dos detalles practicos: con <strong>dupilumab no se necesitan controles analiticos de rutina</strong>, pero hay que vigilar la conjuntivitis (en torno al 13% de adultos y hasta el 35% de ni&#241;os, a veces despues de un a&#241;o), que casi nunca obliga a suspender. Con los <strong>inhibidores de la cinasa de Jano</strong>, la agencia europea pide cautela en mayores de 65 a&#241;os, con riesgo cardiovascular o con antecedente de tabaquismo prolongado, usandolos solo si no hay alternativa adecuada.</div>`
  },
  'parches-lectura': {
    titulo: 'Pruebas epicutaneas: graduacion y el paso que se olvida',
    fuente: 'Nassau S, Fonacier L. Allergic Contact Dermatitis. Med Clin North Am 2020;104(1):61-76.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Lo que se ve</th><th>Como se gradua</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Nada</td><td>Negativa</td></tr>
            <tr><td class="figure-org">Solo eritema leve, sin relieve</td><td>Dudosa</td></tr>
            <tr><td class="figure-org">Eritema con infiltracion y papulas</td><td>Positiva debil</td></tr>
            <tr><td class="figure-org">Lo anterior mas vesiculas</td><td>Positiva fuerte</td></tr>
            <tr><td class="figure-org">Ampollas o ulceracion</td><td>Positiva muy intensa</td></tr>
            <tr><td class="figure-org">Eritema brillante de borde neto, tipo quemadura, que se apaga</td><td><span class="figure-tag dys">Reaccion irritativa</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que deciden si la prueba sirve de algo. <strong>La segunda lectura</strong>: se lee a las 48 horas y otra vez de forma diferida a las <strong>96 horas o mas</strong>, porque muchos alergenos (corticoides y metales entre ellos) dan positividades tardias que se pierden si solo se lee una vez. <strong>El curso temporal</strong>: una reaccion que CRECE entre las dos lecturas es alergica; una que se apaga suele ser irritativa. Y <strong>la relevancia</strong>, que es el paso que mas se olvida: una positividad solo explica el cuadro si el paciente esta expuesto a esa sustancia y esa exposicion encaja con la localizacion de su eccema. Una positividad sin relevancia clinica no cierra el caso.</div>`
  }
};
