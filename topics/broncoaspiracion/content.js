// topics/broncoaspiracion/content.js - Modulo 88: Broncoaspiracion.
// Basado en la revision de Marik "Aspiration pneumonitis and aspiration pneumonia" (N Engl J Med
// 2001;344:665-671), que ya estaba en Bibliografia/, para la distincion entre neumonitis y
// neumonia, la fisiopatologia y el paciente critico. La cobertura anaerobia se actualiza con la
// guia ATS/IDSA de 2019 de neumonia comunitaria (la misma que usa el tema de Neumonia), y el
// absceso con la revision de Hadid y cols. de 2024, tambien en Bibliografia/. Texto sin acentos;
// la enye va como entidad.

export const meta = {
  id: 'broncoaspiracion',
  titulo: 'Broncoaspiracion',
  subtitulo: 'Modulo 88 &middot; Medicina Critica',
  accent: '#6b5a2e',
  accentDim: '#8a784a'
};

export const definicionText = `<p style="margin:0 0 14px;">La aspiracion es la <strong>inhalacion de contenido orofaringeo o gastrico</strong> hacia la laringe y la via aerea inferior. De ella salen varios sindromes segun la cantidad y la naturaleza del material, la frecuencia y la respuesta del paciente, pero dos dominan la practica y se confunden todo el tiempo: la <strong>neumonitis por aspiracion</strong>, una lesion QUIMICA por contenido gastrico esteril, y la <strong>neumonia por aspiracion</strong>, una INFECCION por secreciones orofaringeas colonizadas. Se solapan, pero son entidades distintas y se tratan distinto.</p>
<p style="margin:0 0 14px;">Marik se&#241;alaba cuatro errores frecuentes: no distinguir la neumonitis de la neumonia, considerar infecciosa toda complicacion de la aspiracion, no reconocer el espectro real de germenes, y creer que la aspiracion tiene que ser <strong>presenciada</strong> para diagnosticarla. La consecuencia practica de los dos primeros es la mas visible: antibioticos a pacientes con una quemadura quimica que no los necesitan, y que seleccionan germenes resistentes.</p>
<p style="margin:0 0 14px;">Para dimensionarla: entre el <strong>5% y el 15%</strong> de las neumonias comunitarias son por aspiracion, y es la causa de muerte mas frecuente en los pacientes con disfagia neurologica. La neumonitis aparece en alrededor del <strong>10%</strong> de los ingresados por sobredosis y en 1 de cada 3.000 anestesias, donde explica entre el 10% y el 30% de las muertes atribuibles a la anestesia. Este tema se centra en el paciente agudo y critico; la neumonia comunitaria y nosocomial en general se tratan en el tema de Neumonia.</p>`;

export const bibliografia = [
  'Marik PE. Aspiration pneumonitis and aspiration pneumonia. N Engl J Med. 2001;344(9):665-671.',
  'Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia: an official ATS/IDSA clinical practice guideline. Am J Respir Crit Care Med. 2019;200(7):e45-e67.',
  'Hadid W, Stella GM, Maskey AP, Bechara RI, Islam S. Lung abscess: the non-conservative management: a narrative review. J Thorac Dis. 2024;16(5):3431-3440. doi:10.21037/jtd-23-1561.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La neumonitis: horas',
      tituloB: 'La neumonia: dias',
      compensada: 'Neumonitis: paciente con alteracion marcada de la conciencia (sobredosis, convulsion, ictus extenso, anestesia), a menudo con la aspiracion presenciada, que entre 2 y 5 horas despues presenta desde nada hasta tos seca, taquipnea, broncoespasmo, esputo espumoso o sanguinolento y dificultad respiratoria; puede haber contenido gastrico en la orofaringe. En los casos graves progresa con rapidez a SDRA. Pero muchos solo tienen tos o sibilancias, y algunos una aspiracion SILENTE que solo se ve como desaturacion con imagen compatible: en una serie de aspiraciones durante la anestesia, el 63% no tuvo sintomas.',
      descompensada: 'Neumonia: anciano institucionalizado con disfagia en el que, sin que nadie haya visto aspirar, aparecen taquipnea, tos y signos de neumonia con un infiltrado en un segmento declive. El curso es el de una neumonia aguda tipica, pero sin tratamiento tiende mas a la cavitacion y al absceso. El diagnostico se INFIERE: un paciente de riesgo con un infiltrado en el segmento caracteristico.'
    },
    laboratorio: [
      { prueba: 'Gasometria arterial', utilidad: 'Cuantifica la hipoxemia, que en la neumonitis aparece de forma brusca y puede ser grave. Guia el soporte respiratorio.' },
      { prueba: 'Hemograma', utilidad: 'La leucocitosis y la fiebre pueden aparecer en la neumonitis quimica sin infeccion: por si solas NO justifican el antibiotico en las primeras horas.' },
      { prueba: 'Cultivo cuantitativo de via aerea inferior', utilidad: 'En el paciente intubado, el cepillo protegido o el lavado broncoalveolar con cultivo cuantitativo permiten dirigir el antibiotico y suspenderlo si es negativo.' },
      { prueba: 'Hemocultivos', utilidad: 'En la neumonia por aspiracion con criterios de gravedad, como en cualquier neumonia.' },
      { prueba: 'Toxicos y nivel de conciencia', utilidad: 'La causa de la aspiracion: sobredosis, intoxicacion. El riesgo aumenta conforme baja la escala de Glasgow.' },
      { prueba: 'Valoracion de la deglucion', utilidad: 'Exploracion formal por logopedia, completada con videofluoroscopia o endoscopia de la deglucion. Los reflejos tusigeno y nauseoso NO son fiables para identificar el riesgo.' }
    ],
    no_invasivos: [
      { metodo: 'Neumonitis o neumonia (calculadora disponible)', interpretacion: 'Clasifica el cuadro con los rasgos que los distinguen y devuelve la conducta.', cutoff: 'Presenciada, horas, conciencia alterada: neumonitis. No presenciada, dias, disfagia: neumonia' },
      { metodo: 'Antibiotico segun el escenario (calculadora disponible)', interpretacion: 'Recoge cuando hace falta antibiotico y cuando la cobertura anaerobia.', cutoff: 'Anaerobios solo si hay absceso, empiema, enfermedad periodontal grave o esputo putrido' },
      { metodo: 'Riesgo de aspiracion en el critico (calculadora disponible)', interpretacion: 'Suma los factores que la revision describe en el paciente critico y propone medidas.', cutoff: 'Decubito supino, gastroparesia, sonda, sedacion y extubacion reciente' },
      { metodo: 'Dieta tras la extubacion (calculadora disponible)', interpretacion: 'Aplica la pauta que propone Marik tras retirar el tubo.', cutoff: 'Nada por boca 6 horas; despues pure y dieta blanda 48 horas' },
      { metodo: 'Videofluoroscopia o endoscopia de la deglucion', interpretacion: 'Completan la exploracion de la deglucion a pie de cama y confirman la aspiracion.', cutoff: 'Necesarias para valorar el riesgo; los reflejos no bastan' },
      { metodo: 'Pulsioximetria', interpretacion: 'La aspiracion silente puede manifestarse solo como desaturacion.', cutoff: 'Una caida inexplicada de la saturacion en un paciente de riesgo obliga a pensar en ella' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Infiltrado en un segmento declive. Si la aspiracion ocurrio en decubito: segmentos posteriores de los lobulos superiores y apicales de los inferiores. Si ocurrio sentado o semiincorporado: segmentos basales de los lobulos inferiores. La afectacion del lobulo inferior derecho es la tipica.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'Para las complicaciones: cavitacion, absceso, neumonia necrotizante y empiema, que obligan a cubrir anaerobios y pueden requerir drenaje.' },
      { modalidad: 'Broncoscopia', hallazgos: 'Ante sospecha de obstruccion endobronquial por tumor o cuerpo extra&#241;o, que hace que el absceso no responda al antibiotico. Tambien para el drenaje endoscopico del absceso.' },
      { modalidad: 'Videofluoroscopia', hallazgos: 'Demuestra la aspiracion durante la deglucion y orienta las estrategias de alimentacion.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La distincion que decide el tratamiento es <strong>neumonitis frente a neumonia</strong>. La neumonitis es una lesion quimica por contenido gastrico esteril, en el paciente con la conciencia muy alterada, a menudo presenciada, de cualquier edad pero mas en jovenes, que se manifiesta en horas. La neumonia es una infeccion por secrecion orofaringea colonizada, en el paciente con disfagia o dismotilidad gastrica, habitualmente anciano, casi nunca presenciada, que se manifiesta en dias. Otros sindromes de aspiracion son la obstruccion de la via aerea, el absceso pulmonar, la neumonia lipoidea exogena, la fibrosis intersticial cronica y la neumonia por Mycobacterium fortuitum.`,
    escalas: [
      { nombre: 'Neumonitis o neumonia (calculadora disponible)', componentes: 'Mecanismo, material, factor predisponente, edad, si fue presenciada, tiempo de evolucion y clinica.', formula: 'Comparacion de rasgos de la tabla de Marik.', interpretacion: 'La neumonitis no lleva antibiotico de entrada; la neumonia si. Hay solapamiento, y la neumonitis puede sobreinfectarse mas tarde.' },
      { nombre: 'Antibiotico segun el escenario (calculadora disponible)', componentes: 'Neumonitis de menos o mas de 48 horas, colonizacion gastrica, neumonia comunitaria o de residencia, y datos de anaerobios.', formula: 'Indicaciones de la revision, con la cobertura anaerobia segun la guia ATS/IDSA de 2019.', interpretacion: 'La penicilina y la clindamicina, consideradas clasicamente el estandar, son insuficientes para la mayoria. Lo que suele hacer falta es cobertura frente a gramnegativos.' },
      { nombre: 'Riesgo de aspiracion en el critico (calculadora disponible)', componentes: 'Decubito supino, gastroparesia, sonda nasogastrica, nutricion enteral, sedacion, nivel de conciencia y extubacion reciente.', formula: 'Recuento de factores.', interpretacion: 'Hasta un 30% de los pacientes en decubito supino tienen reflujo gastroesofagico incluso sin sonda. La sonda pospilorica puede tener ventajas si hay gastroparesia.' },
      { nombre: 'Dieta tras la extubacion (calculadora disponible)', componentes: 'Horas desde la extubacion, intubacion traumatica y alteraciones de la via aerea superior.', formula: 'Pauta escalonada.', interpretacion: 'La disfuncion de la deglucion aparece incluso tras 24 horas de intubacion y suele resolverse en 48. Valoracion formal si la intubacion fue traumatica o hay alteraciones anatomicas o funcionales.' },
      { nombre: 'Condiciones de la neumonitis grave', componentes: 'pH del aspirado y volumen.', formula: 'pH menor de 2.5 y volumen mayor de 0.3 mL/kg (20 a 25 mL en el adulto).', interpretacion: 'Son los umbrales que la mayoria de los autores aceptan. Pero el material particulado puede causar lesion grave aunque el pH sea mayor de 2.5.' },
      { nombre: 'Localizacion del infiltrado', componentes: 'Posicion en el momento de la aspiracion.', formula: 'Decubito: posteriores superiores y apicales inferiores. Sentado: basales inferiores.', interpretacion: 'Un infiltrado en un segmento declive en un paciente de riesgo es lo que permite inferir la aspiracion no presenciada.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Neumonitis quimica: no es una infeccion',
      color: '#6b5a2e',
      definicion: 'Lesion pulmonar aguda tras inhalar contenido gastrico regurgitado, en un paciente con la conciencia marcadamente alterada. Su forma historica es el sindrome de Mendelson, descrito en 1946 en la anestesia obstetrica.',
      fisiopatologia: 'Es una quemadura quimica de la via aerea y el parenquima. La lesion es bifasica: un primer pico a las 1 a 2 horas por el efecto caustico del acido sobre la interfase alveolocapilar, y un segundo a las 4 a 6 horas por la infiltracion de neutrofilos y la inflamacion aguda, con citocinas, complemento y especies reactivas de oxigeno. El contenido gastrico es normalmente esteril porque el acido impide el crecimiento bacteriano, de modo que la infeccion no tiene papel al principio.',
      epidemiologia: 'Alrededor del 10% de los ingresados por sobredosis, y 1 de cada 3.000 anestesias, con un 10% a 30% de las muertes atribuibles a la anestesia.',
      factores_riesgo: ['Sobredosis de farmacos', 'Convulsiones', 'Ictus extenso', 'Anestesia general', 'Escala de Glasgow baja: el riesgo aumenta con la profundidad de la inconsciencia'],
      clinica: 'De nada a tos seca, taquipnea, broncoespasmo, esputo espumoso o sanguinolento, cianosis, edema pulmonar, hipotension e hipoxemia, entre 2 y 5 horas despues. Puede progresar rapido a SDRA.',
      criterios_dx: 'Aspiracion presenciada o alteracion marcada de la conciencia mas infiltrado y sintomas respiratorios en horas.',
      laboratorio: 'Gasometria. La fiebre y la leucocitosis pueden ser solo inflamatorias.',
      imagen: 'Infiltrado en segmento declive, que aparece y puede resolverse rapido.',
      complementarios: 'En el intubado, cultivo cuantitativo de via aerea inferior si se plantea antibiotico.',
      dx_diferencial: 'Neumonia por aspiracion, edema pulmonar cardiogenico, SDRA de otra causa, embolia pulmonar.',
      tx_medico: 'Aspirar la via aerea superior tras una aspiracion presenciada. Considerar la intubacion si el paciente no puede proteger la via aerea. Soporte respiratorio como en el SDRA.',
      tx_farmacologico: 'Antibiotico profilactico NO recomendado, aunque sea practica habitual. Tampoco se aconseja empezarlo poco despues de la aspiracion porque aparezcan fiebre, leucocitosis o infiltrado: selecciona germenes resistentes en una neumonitis no complicada. SI es apropiado de entrada si hay obstruccion intestinal u otra condicion que coloniza el estomago, y debe considerarse si la neumonitis no se resuelve en 48 horas. Corticoides: no pueden recomendarse; un ensayo mejoro antes la radiografia pero alargo la estancia en criticos, y otro estudio asocio mas neumonias por gramnegativos.',
      tx_intervencionista: 'Intubacion si el paciente no protege la via aerea.',
      criterios_uci: 'Hipoxemia que requiere ventilacion o evolucion a SDRA.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar a las 48 horas: si no se resuelve, considerar la sobreinfeccion y el antibiotico.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'En una serie de 67 aspiraciones durante la anestesia, el 63% no tuvo sintomas; de los 25 sintomaticos, 13 necesitaron ventilacion mas de 6 horas y 4 murieron.',
      algoritmo: ['Aspirar la via aerea superior', 'Intubar si no protege la via aerea', 'Sin antibiotico profilactico', 'Sin corticoides', 'Antibiotico de entrada si hay obstruccion intestinal o antiacidos', 'Antibiotico si no se resuelve en 48 h']
    },
    {
      nombre: 'Neumonia por aspiracion: una infeccion',
      color: '#8c3a34',
      definicion: 'Infiltrado radiologico en un paciente con riesgo de aspiracion orofaringea, por inhalacion de secreciones colonizadas por bacterias patogenas.',
      fisiopatologia: 'Aproximadamente la mitad de los adultos sanos aspira peque&#241;as cantidades de secrecion orofaringea durante el sue&#241;o, y la baja carga bacteriana, la tos, el aclaramiento ciliar y la inmunidad lo resuelven. Si esos mecanismos fallan o el volumen es grande, aparece la neumonia. Cualquier condicion que aumente el volumen o la carga bacteriana de las secreciones en un paciente con defensas alteradas la favorece.',
      epidemiologia: 'Entre el 5% y el 15% de las neumonias comunitarias. En un estudio, el 18% de las neumonias de residencia frente al 5% de las comunitarias. En el ictus, la disfagia afecta al 40% a 70% y la neumonia es 7 veces mas probable si se confirma la aspiracion.',
      factores_riesgo: ['Disfagia neurologica (ictus, enfermedad neurodegenerativa)', 'Alteracion de la union gastroesofagica', 'Anomalias de la via aerodigestiva superior', 'Edad avanzada y reflujo', 'Mala higiene oral y colonizacion', 'Institucionalizacion'],
      clinica: 'La de una neumonia aguda: taquipnea, tos, fiebre y signos de consolidacion, en un paciente de riesgo. La aspiracion casi nunca se presencia.',
      criterios_dx: 'Se infiere: paciente con riesgo de aspiracion e infiltrado en un segmento declive caracteristico.',
      laboratorio: 'Hemograma, hemocultivos en la grave, y cultivo de via aerea inferior en el intubado.',
      imagen: 'Infiltrado declive; tomografia si se sospecha cavitacion, absceso o empiema.',
      complementarios: 'Valoracion de la deglucion.',
      dx_diferencial: 'Neumonia comunitaria sin aspiracion (aunque se solapan: los ancianos sanos con neumonia tienen mas aspiracion silente que los controles), neumonitis quimica, neoplasia con obstruccion.',
      tx_medico: 'Tratar la neumonia y la causa: valorar la deglucion, adaptar la dieta y cuidar la higiene oral.',
      tx_farmacologico: 'El antibiotico esta INEQUIVOCAMENTE indicado, elegido segun donde se produjo la aspiracion y el estado del paciente. Suele hacer falta actividad frente a gramnegativos (cefalosporinas de tercera generacion, fluoroquinolonas, piperacilina). La penicilina y la clindamicina, consideradas clasicamente el estandar, son insuficientes para la mayoria. La guia ATS/IDSA de 2019 recomienda no a&#241;adir de rutina cobertura anaerobia en la sospecha de neumonia por aspiracion salvo que se sospeche absceso o empiema.',
      tx_intervencionista: 'Drenaje si hay empiema o absceso que no responde.',
      criterios_uci: 'Los de cualquier neumonia grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la cavitacion y el absceso, mas frecuentes si el tratamiento se retrasa.',
      seguimiento_ambulatorio: 'Prevencion de nuevos episodios: deglucion, dieta, higiene oral.',
      pronostico: 'Es la causa de muerte mas frecuente en la disfagia neurologica y, a largo plazo, en los pacientes alimentados por gastrostomia.',
      algoritmo: ['Sospechar en todo paciente de riesgo con infiltrado declive', 'No exigir que la aspiracion se haya visto', 'Antibiotico con cobertura de gramnegativos', 'Sin anaerobios de rutina', 'Anaerobios si absceso, empiema, periodontitis o esputo putrido', 'Valorar la deglucion']
    },
    {
      nombre: 'Germenes: lo que muestran los estudios modernos',
      color: '#5a4a8c',
      definicion: 'Espectro bacteriano real de la neumonia por aspiracion y de la neumonitis sobreinfectada, que difiere del que se ense&#241;aba clasicamente.',
      fisiopatologia: 'Los estudios de los a&#241;os setenta, con muestras transtraqueales tomadas tarde y en pacientes con complicaciones (abscesos, neumonia necrotizante, empiema), a menudo alcoholicos con esputo putrido, encontraron sobre todo anaerobios. Pero esas muestras podian estar contaminadas por flora orofaringea. Con el cepillo protegido y cultivo cuantitativo en los a&#241;os noventa, el panorama fue otro.',
      epidemiologia: 'En 52 pacientes de criticos con neumonia por aspiracion, solo 19 tuvieron patogenos en cantidad significativa, y NINGUNO anaerobios. En otro estudio de 25 aspiraciones gastricas, 12 tuvieron patogenos, 8 de ellos con factores de colonizacion gastrica, y tampoco hubo anaerobios patogenos.',
      factores_riesgo: ['Antiacidos, antagonistas H2 o inhibidores de la bomba de protones', 'Nutricion enteral', 'Gastroparesia u obstruccion de intestino delgado', 'Mala higiene oral en el anciano', 'Origen hospitalario'],
      clinica: 'No aplica.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Cultivo cuantitativo de via aerea inferior en el intubado, que permite dirigir y suspender el antibiotico.',
      imagen: 'No aplica.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Elegir el espectro por el lugar de adquisicion y los factores de colonizacion, y conocer el antibiograma local.',
      tx_farmacologico: 'Comunitaria: Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae y enterobacterias. Hospitalaria: gramnegativos, incluida Pseudomonas aeruginosa. Los anaerobios, rara vez. Al subir el pH gastrico con antiacidos o antisecretores, o con nutricion enteral y gastroparesia, el estomago se coloniza por gramnegativos y el contenido aspirado deja de ser esteril.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Desescalar con los cultivos y suspender si son negativos.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La higiene oral intensiva en el anciano institucionalizado y la ausencia de dientes se asocian a menor riesgo de neumonia por aspiracion, porque bajan la carga bacteriana.',
      algoritmo: ['Comunitaria: neumococo, S. aureus, H. influenzae, enterobacterias', 'Hospitalaria: gramnegativos y Pseudomonas', 'Anaerobios: raros', 'Antisecretores y nutricion enteral colonizan el estomago', 'Cultivo cuantitativo en el intubado', 'Desescalar o suspender']
    },
    {
      nombre: 'Aspiracion en el paciente critico y tras la extubacion',
      color: '#3d5a73',
      definicion: 'Riesgo aumentado de aspiracion y de neumonia por aspiracion en el paciente critico, maximo tras la retirada del tubo endotraqueal.',
      fisiopatologia: 'El decubito supino, la gastroparesia, la sonda nasogastrica y la sedacion favorecen el reflujo y la aspiracion. La dismotilidad, desde un vaciamiento lento hasta una gastroparesia marcada, aparece en quemados, sepsis, trauma, cirugia y choque; el residuo gastrico alto distiende el estomago y favorece la regurgitacion. Tras la extubacion se suman los sedantes residuales, la sonda y la disfuncion de la deglucion por la alteracion de la sensibilidad, la lesion glotica y la disfuncion laringea.',
      epidemiologia: 'Hasta un 30% de los pacientes en decubito supino tienen reflujo gastroesofagico incluso sin sonda ni nutricion enteral. La alteracion del reflejo deglutorio se detecta incluso tras 24 horas de intubacion, y suele resolverse en 48.',
      factores_riesgo: ['Decubito supino', 'Gastroparesia y residuo gastrico alto', 'Sonda nasogastrica', 'Sedacion', 'Extubacion reciente', 'Intubacion traumatica o alteraciones de la via aerea superior'],
      clinica: 'Desaturacion, tos con la ingesta o infiltrado nuevo en un paciente de riesgo.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'Radiografia ante un empeoramiento respiratorio.',
      complementarios: 'Valoracion formal de la deglucion si la intubacion fue traumatica o hay alteraciones anatomicas o funcionales de la via aerea superior.',
      dx_diferencial: 'Neumonia asociada a la ventilacion, atelectasia, edema.',
      tx_medico: 'Marik recomienda suspender la alimentacion oral al menos 6 horas tras la extubacion, por si hay que reintubar, y despues dieta de pure y luego blanda durante al menos 48 horas.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'La sonda pospilorica puede tener ventajas en el paciente con gastroparesia.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la tolerancia a la dieta y la aparicion de tos o desaturacion con la ingesta.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La mayoria de las alteraciones de la deglucion tras una intubacion corta se resuelven en 48 horas.',
      algoritmo: ['Evitar el decubito supino estricto', 'Vigilar el residuo y la gastroparesia', 'Valorar sonda pospilorica si hay gastroparesia', 'Tras extubar: nada por boca 6 horas', 'Despues pure y dieta blanda 48 horas', 'Valoracion formal si la intubacion fue traumatica']
    },
    {
      nombre: 'Disfagia, sondas y prevencion',
      color: '#3f6b52',
      definicion: 'Identificacion del paciente con disfagia y medidas para reducir la aspiracion, incluida la decision sobre las sondas de alimentacion.',
      fisiopatologia: 'Las sondas de alimentacion no protegen frente a las secreciones orofaringeas colonizadas, que son la amenaza principal en la disfagia, y la gammagrafia ha demostrado aspiracion de contenido gastrico tambien con gastrostomia.',
      epidemiologia: 'La disfagia neurologica afecta a entre 300.000 y 600.000 personas al a&#241;o en Estados Unidos. En 1995 se colocaron mas de 121.000 gastrostomias endoscopicas en Medicare, sobre todo por disfagia tras un ictus.',
      factores_riesgo: ['Ictus', 'Enfermedad neurodegenerativa', 'Aspiracion silente', 'Mala higiene oral', 'Alimentacion con consistencias inadecuadas'],
      clinica: 'Tos o atragantamiento con la ingesta, voz humeda, neumonias de repeticion; o nada, en la aspiracion silente.',
      criterios_dx: 'Valoracion completa de la deglucion por logopedia, completada con videofluoroscopia o endoscopia. Los reflejos tusigeno y nauseoso no son fiables.',
      laboratorio: 'No aplica.',
      imagen: 'Videofluoroscopia de la deglucion.',
      complementarios: 'Endoscopia de la deglucion con fibra optica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Dieta blanda y estrategias compensadoras: bocados peque&#241;os, barbilla hacia abajo, cabeza girada y degluciones repetidas. Higiene oral intensiva. Sonda si sigue aspirando el pure pese a esas estrategias.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'La gastrostomia no ha demostrado ser superior a la sonda nasogastrica para prevenir la aspiracion tras un ictus: aporta mejor la nutricion, pero la incidencia de neumonia fue similar, y tambien con sondas pospiloricas. Se prefiere para el largo plazo por la comodidad. No es para quien recuperara la deglucion en pocas semanas.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar la deglucion de forma periodica.',
      seguimiento_ambulatorio: 'Higiene oral y revision de la dieta.',
      pronostico: 'A largo plazo, la neumonia por aspiracion es la causa de muerte mas frecuente en los pacientes alimentados por gastrostomia. En los que tienen una esperanza de vida corta, su indicacion es discutible.',
      algoritmo: ['No fiarse de los reflejos tusigeno y nauseoso', 'Valoracion formal de la deglucion', 'Dieta blanda y estrategias compensadoras', 'Higiene oral intensiva', 'Sonda si aspira el pure pese a todo', 'La gastrostomia no previene la aspiracion']
    },
    {
      nombre: 'Absceso pulmonar y complicaciones',
      color: '#7a4363',
      definicion: 'Necrosis y cavitacion del parenquima como complicacion de la neumonia por aspiracion no tratada o que no responde, junto con la neumonia necrotizante y el empiema.',
      fisiopatologia: 'El organismo intenta contener la infeccion y el parenquima se necrosa. Sin tratamiento, la neumonia por aspiracion tiene mas tendencia a cavitar y formar abscesos.',
      epidemiologia: 'El antibiotico sistemico, tratamiento de referencia, tiene un exito del 63% al 67%; hasta un 37% de los abscesos no responden y pueden necesitar otras intervenciones.',
      factores_riesgo: ['Obstruccion endobronquial por tumor o cuerpo extra&#241;o', 'Absceso mayor de 6 cm', 'Antibiotico inadecuado o demasiado corto', 'Germenes inusuales: micobacterias, hongos', 'Inmunosupresion'],
      clinica: 'Fiebre persistente, esputo putrido, perdida de peso y mal estado general pese al antibiotico.',
      criterios_dx: 'Cavidad con nivel hidroaereo en la imagen.',
      laboratorio: 'Cultivos, incluidos de micobacterias y hongos si no responde.',
      imagen: 'Tomografia para localizarlo, medirlo y ver su relacion con los bronquios.',
      complementarios: 'Broncoscopia si se sospecha obstruccion o para drenaje endoscopico.',
      dx_diferencial: 'Neoplasia cavitada, vasculitis, tuberculosis, empiema con fistula.',
      tx_medico: 'Antibiotico sistemico prolongado como primer paso.',
      tx_farmacologico: 'Aqui SI esta indicada la cobertura anaerobia, como en la neumonia necrotizante, la enfermedad periodontal grave y el esputo putrido.',
      tx_intervencionista: 'Si fracasa el antibiotico: drenaje percutaneo con tubo transtoracico o drenaje endoscopico con cateter, y como ultimo recurso la reseccion. Ambos drenajes son seguros; el endoscopico tiene menos complicaciones y mortalidad con un exito similar. La eleccion depende de la localizacion y de que haya un bronquio que lleve al absceso. Drenar sin demora puede acortar la estancia.',
      criterios_uci: 'Sepsis, hemoptisis o fistula broncopleural.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Imagen de control y vigilancia de la respuesta clinica.',
      seguimiento_ambulatorio: 'Completar el antibiotico y descartar una neoplasia subyacente.',
      pronostico: 'Los abscesos de mas de 6 cm responden peor al antibiotico y a menudo requieren drenaje.',
      algoritmo: ['Antibiotico con cobertura anaerobia', 'Si no responde: buscar obstruccion y germenes raros', 'Mayor de 6 cm: pensar en drenaje', 'Drenaje endoscopico si hay bronquio de acceso', 'Si no, percutaneo', 'Reseccion como ultimo recurso']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En el hospital la aspiracion aparece sobre todo en tres escenarios: el paciente con la conciencia disminuida, el paciente con disfagia y el paciente critico, con un pico tras la extubacion. En los tres, lo primero es distinguir la quemadura quimica de la infeccion.',
    parametros: [
      'Distinguir neumonitis de neumonia antes de decidir el antibiotico.',
      'Neumonitis: sin antibiotico profilactico; reevaluar a las 48 horas.',
      'Neumonia: antibiotico con cobertura de gramnegativos, sin anaerobios de rutina.',
      'Cultivo cuantitativo de via aerea inferior en el intubado para dirigir o suspender.',
      'Sin corticoides en la neumonitis.',
      'Evitar el decubito supino estricto y vigilar la gastroparesia.',
      'Tras extubar: nada por boca 6 horas, luego pure y blanda 48 horas.',
      'Valoracion formal de la deglucion en el paciente de riesgo; los reflejos no bastan.'
    ],
    criterios_uci_general: 'Hipoxemia que requiere ventilacion, evolucion a SDRA, neumonia grave por aspiracion o sepsis por absceso o empiema.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Valorar la deglucion en el paciente con ictus o enfermedad neurodegenerativa, dieta adaptada y estrategias compensadoras, higiene oral intensiva en el anciano institucionalizado, evitar el decubito supino en el critico, retrasar la dieta oral tras la extubacion, y no confiar en la sonda ni en la gastrostomia para prevenir la aspiracion de secreciones.'
  }
};

export const compCites = {
  'Neumonitis quimica: no es una infeccion': { fisiopatologia: [1], tx_farmacologico: [1], epidemiologia: [1], pronostico: [1] },
  'Neumonia por aspiracion: una infeccion': { tx_farmacologico: [1, 2], epidemiologia: [1], criterios_dx: [1] },
  'Germenes: lo que muestran los estudios modernos': { epidemiologia: [1], tx_farmacologico: [1] },
  'Aspiracion en el paciente critico y tras la extubacion': { tx_medico: [1], epidemiologia: [1], fisiopatologia: [1] },
  'Disfagia, sondas y prevencion': { tx_intervencionista: [1], criterios_dx: [1], tx_medico: [1] },
  'Absceso pulmonar y complicaciones': { epidemiologia: [3], tx_intervencionista: [3], tx_farmacologico: [1, 2], pronostico: [3] }
};

export const estigmasTitulo = 'Lo que hay que buscar a pie de cama';
export const estigmas = [
  { nombre: 'Contenido gastrico en la orofaringe', descripcion: 'En el paciente con la conciencia disminuida, sugiere una aspiracion gastrica: pensar en neumonitis.' },
  { nombre: 'Esputo espumoso o sanguinolento en horas', descripcion: 'Neumonitis grave con edema pulmonar, que puede evolucionar rapido a SDRA.' },
  { nombre: 'Desaturacion inexplicada', descripcion: 'Puede ser la unica manifestacion de una aspiracion silente. Obliga a una radiografia.' },
  { nombre: 'Tos o voz humeda con la ingesta', descripcion: 'Signo de disfagia. Su ausencia no descarta la aspiracion silente, frecuente en el ictus.' },
  { nombre: 'Esputo putrido y mala dentadura', descripcion: 'Junto con el alcoholismo, los datos que hacen pensar en anaerobios y obligan a cubrirlos.' },
  { nombre: 'Crepitantes en las bases o en la espalda', descripcion: 'La localizacion depende de la postura: bases si aspiro sentado, segmentos posteriores si aspiro tumbado.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Neumonitis o neumonia (calculadora disponible)': [1],
  'Antibiotico segun el escenario (calculadora disponible)': [1, 2],
  'Riesgo de aspiracion en el critico (calculadora disponible)': [1],
  'Dieta tras la extubacion (calculadora disponible)': [1],
  'Condiciones de la neumonitis grave': [1],
  'Localizacion del infiltrado': [1]
};

export const escalaCalc = {
  'Neumonitis o neumonia (calculadora disponible)': 'neumonitis-o-neumonia',
  'Antibiotico segun el escenario (calculadora disponible)': 'antibiotico-aspiracion',
  'Riesgo de aspiracion en el critico (calculadora disponible)': 'riesgo-aspiracion-critico',
  'Dieta tras la extubacion (calculadora disponible)': 'dieta-extubacion'
};

export const compGroups = [
  { title: 'Dos cuadros distintos', items: ['Neumonitis quimica: no es una infeccion', 'Neumonia por aspiracion: una infeccion', 'Germenes: lo que muestran los estudios modernos'] },
  { title: 'Donde ocurre', items: ['Aspiracion en el paciente critico y tras la extubacion', 'Disfagia, sondas y prevencion'] },
  { title: 'Cuando se complica', items: ['Absceso pulmonar y complicaciones'] }
];

export const complicacionesIntro = 'Las tres primeras fichas son la distincion que lo decide todo: la neumonitis es una quemadura quimica que no lleva antibiotico de entrada, la neumonia es una infeccion que si lo lleva, y los germenes reales no son los anaerobios que se ense&#241;aban. Las dos siguientes son los escenarios donde ocurre: el paciente critico, sobre todo tras la extubacion, y el paciente con disfagia, donde las sondas no protegen tanto como se cree. La ultima es la complicacion que si obliga a cubrir anaerobios: el absceso.';

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
  root: { title: 'BRONCOASPIRACION', color: '#6b5a2e', target: 'definicion' },
  branches: [
    { title: 'Neumonitis', sub: 'Quimica, horas', color: '#6b5a2e', target: 'complicaciones', leaves: [
      { title: 'Sin antibiotico', sub: 'Reevaluar a las 48 h', color: '#6b5a2e', target: 'complicaciones' },
      { title: 'Sin corticoide', sub: 'Soporte', color: '#6b5a2e', target: 'complicaciones' }
    ] },
    { title: 'Neumonia', sub: 'Infeccion, dias', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Gramnegativos', sub: 'Sin anaerobios de rutina', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Absceso', sub: 'Ahi si anaerobios', color: '#7a4363', target: 'complicaciones' }
    ] },
    { title: 'Donde ocurre', sub: 'Critico y disfagia', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Tras extubar', sub: '6 h sin boca, 48 h blanda', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Disfagia', sub: 'La sonda no protege', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 2], imagen: [1, 3] };
export const clasificacionCite = [1];
export const seguimientoCite = [1, 2];
export const figurasDefinicion = ['aspiracion-dos-cuadros'];
export const figurasClasificacion = ['aspiracion-antibiotico', 'aspiracion-mitos'];

export const figuras = {
  'aspiracion-dos-cuadros': {
    titulo: 'Neumonitis y neumonia por aspiracion',
    fuente: 'Adaptado de la tabla 1 de Marik PE. Aspiration pneumonitis and aspiration pneumonia. N Engl J Med 2001;344:665-671.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Neumonitis</th><th>Neumonia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Mecanismo</td><td>Contenido gastrico esteril</td><td>Secrecion orofaringea colonizada</td></tr>
            <tr><td class="figure-org">Proceso</td><td>Lesion quimica por acido y particulas</td><td>Respuesta inflamatoria a bacterias</td></tr>
            <tr><td class="figure-org">Bacteriologia</td><td>Esteril al principio; posible sobreinfeccion despues</td><td>Cocos grampositivos, bacilos gramnegativos y, rara vez, anaerobios</td></tr>
            <tr><td class="figure-org">Factor principal</td><td>Conciencia marcadamente disminuida</td><td>Disfagia y dismotilidad gastrica</td></tr>
            <tr><td class="figure-org">Edad</td><td>Cualquiera, mas en jovenes</td><td>Habitualmente ancianos</td></tr>
            <tr><td class="figure-org">Aspiracion</td><td>Puede ser presenciada</td><td>Habitualmente no presenciada</td></tr>
            <tr><td class="figure-org">Evolucion</td><td>De 2 a 5 horas</td><td>Dias, como una neumonia</td></tr>
            <tr><td class="figure-org">Antibiotico</td><td><span class="figure-tag dys">No de entrada</span></td><td><span class="figure-tag fail">Si</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Hay solapamiento, pero son entidades distintas. Los cuatro errores que se&#241;alaba Marik siguen vigentes: no distinguir una de otra, considerar infecciosa toda complicacion de la aspiracion, no reconocer el espectro real de germenes y creer que la aspiracion tiene que haberse <strong>visto</strong> para diagnosticarla. La neumonia por aspiracion casi nunca se presencia: se infiere ante un paciente de riesgo con un infiltrado en un segmento declive.</div>`
  },
  'aspiracion-antibiotico': {
    titulo: 'Cuando antibiotico, y con que espectro',
    fuente: 'Marik PE. N Engl J Med 2001;344:665-671; guia ATS/IDSA de 2019 de neumonia comunitaria (Am J Respir Crit Care Med 2019;200:e45-e67).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escenario</th><th>Conducta</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Neumonitis en las primeras 48 h</td><td><span class="figure-tag dys">Sin antibiotico</span> aunque haya fiebre, leucocitosis o infiltrado</td></tr>
            <tr><td class="figure-org">Neumonitis que no se resuelve en 48 h</td><td>Considerar antibiotico de amplio espectro; anaerobios no de rutina</td></tr>
            <tr><td class="figure-org">Neumonitis con obstruccion intestinal o antiacidos</td><td>Antibiotico empirico de entrada: el estomago esta colonizado</td></tr>
            <tr><td class="figure-org">Neumonia comunitaria por aspiracion</td><td>Cobertura de neumococo, S. aureus, H. influenzae y enterobacterias</td></tr>
            <tr><td class="figure-org">Neumonia de residencia u hospitalaria</td><td>Cobertura de gramnegativos, incluida Pseudomonas, segun el antibiograma local</td></tr>
            <tr><td class="figure-org">Absceso, empiema, neumonia necrotizante, periodontitis grave o esputo putrido</td><td><span class="figure-tag fail">Cubrir anaerobios</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La guia ATS/IDSA de 2019 recomienda <strong>no a&#241;adir de rutina cobertura anaerobia</strong> en la sospecha de neumonia por aspiracion salvo que se sospeche absceso o empiema, en linea con lo que ya se&#241;alaba Marik: la <strong>penicilina y la clindamicina</strong>, consideradas clasicamente el estandar, son insuficientes para la mayoria, porque lo que suele hacer falta es actividad frente a gramnegativos. En el intubado, el cultivo cuantitativo de la via aerea inferior permite dirigir el tratamiento y suspenderlo si es negativo.</div>`
  },
  'aspiracion-mitos': {
    titulo: 'Lo que se hace por costumbre y lo que dice la evidencia',
    fuente: 'Marik PE. N Engl J Med 2001;344:665-671.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Costumbre</th><th>Evidencia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Antibiotico profilactico tras una aspiracion presenciada</td><td>No recomendado: selecciona resistencias en una lesion quimica</td></tr>
            <tr><td class="figure-org">Corticoides en la neumonitis</td><td>No recomendados: mas estancia en criticos y mas neumonias por gramnegativos</td></tr>
            <tr><td class="figure-org">Cubrir anaerobios en toda aspiracion</td><td>Solo con absceso, empiema, periodontitis grave o esputo putrido</td></tr>
            <tr><td class="figure-org">Valorar el riesgo con los reflejos tusigeno y nauseoso</td><td>No fiables: hace falta una valoracion formal de la deglucion</td></tr>
            <tr><td class="figure-org">La gastrostomia evita la aspiracion</td><td>No es superior a la sonda nasogastrica; ninguna protege de las secreciones</td></tr>
            <tr><td class="figure-org">Si nadie la vio, no hubo aspiracion</td><td>La neumonia por aspiracion casi nunca se presencia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El contenido gastrico es <strong>esteril</strong> en condiciones normales porque el acido impide el crecimiento bacteriano, y por eso la neumonitis no es una infeccion al principio. Esa esterilidad se pierde cuando sube el pH (antiacidos, antagonistas H2, inhibidores de la bomba de protones) o con la nutricion enteral, la gastroparesia y la obstruccion intestinal: ahi el estomago se coloniza por gramnegativos y el antibiotico de entrada si tiene sentido.</div>`
  }
};
