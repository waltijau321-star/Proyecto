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
  subtitulo: 'Módulo 88 &middot; Medicina Crítica',
  accent: '#6b5a2e',
  accentDim: '#8a784a'
};

export const definicionText = `<p style="margin:0 0 14px;">La aspiración es la <strong>inhalacion de contenido orofaringeo o gástrico</strong> hacia la laringe y la via aérea inferior. De ella salen varios síndromes según la cantidad y la naturaleza del material, la frecuencia y la respuesta del paciente, pero dos dominan la práctica y se confunden todo el tiempo: la <strong>neumonitis por aspiración</strong>, una lesión QUÍMICA por contenido gástrico estéril, y la <strong>neumonía por aspiración</strong>, una INFECCIÓN por secreciones orofaringeas colonizadas. Se solapan, pero son entidades distintas y se tratan distinto.</p>
<p style="margin:0 0 14px;">Marik señalaba cuatro errores frecuentes: no distinguir la neumonitis de la neumonía, considerar infecciosa toda complicación de la aspiración, no reconocer el espectro real de gérmenes, y creer que la aspiración tiene que ser <strong>presenciada</strong> para diagnosticarla. La consecuencia práctica de los dos primeros es la más visible: antibióticos a pacientes con una quemadura química que no los necesitan, y que seleccionan gérmenes resistentes.</p>
<p style="margin:0 0 14px;">Para dimensionarla: entre el <strong>5% y el 15%</strong> de las neumonías comunitarias son por aspiración, y es la causa de muerte más frecuente en los pacientes con disfagia neurológica. La neumonitis aparece en alrededor del <strong>10%</strong> de los ingresados por sobredosis y en 1 de cada 3.000 anestesias, donde explica entre el 10% y el 30% de las muertes atribuibles a la anestesia. Este tema se centra en el paciente agudo y crítico; la neumonía comunitaria y nosocomial en general se tratan en el tema de Neumonía.</p>`;

export const bibliografia = [
  'Marik PE. Aspiration pneumonitis and aspiration pneumonia. N Engl J Med. 2001;344(9):665-671.',
  'Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia: an official ATS/IDSA clinical practice guideline. Am J Respir Crit Care Med. 2019;200(7):e45-e67.',
  'Hadid W, Stella GM, Maskey AP, Bechara RI, Islam S. Lung abscess: the non-conservative management: a narrative review. J Thorac Dis. 2024;16(5):3431-3440. doi:10.21037/jtd-23-1561.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La neumonitis: horas',
      tituloB: 'La neumonía: días',
      compensada: 'Neumonitis: paciente con alteración marcada de la conciencia (sobredosis, convulsión, ictus extenso, anestesia), a menudo con la aspiración presenciada, que entre 2 y 5 horas después presenta desde nada hasta tos seca, taquipnea, broncoespasmo, esputo espumoso o sanguinolento y dificultad respiratoria; puede haber contenido gástrico en la orofaringe. En los casos graves progresa con rapidez a SDRA. Pero muchos solo tienen tos o sibilancias, y algunos una aspiración SILENTE que solo se ve como desaturación con imagen compatible: en una serie de aspiraciones durante la anestesia, el 63% no tuvo síntomas.',
      descompensada: 'Neumonía: anciano institucionalizado con disfagia en el que, sin que nadie haya visto aspirar, aparecen taquipnea, tos y signos de neumonía con un infiltrado en un segmento declive. El curso es el de una neumonía aguda típica, pero sin tratamiento tiende más a la cavitación y al absceso. El diagnóstico se INFIERE: un paciente de riesgo con un infiltrado en el segmento característico.'
    },
    laboratorio: [
      { prueba: 'Gasometría arterial', utilidad: 'Cuantifica la hipoxemia, que en la neumonitis aparece de forma brusca y puede ser grave. Guía el soporte respiratorio.' },
      { prueba: 'Hemograma', utilidad: 'La leucocitosis y la fiebre pueden aparecer en la neumonitis química sin infección: por si solas NO justifican el antibiótico en las primeras horas.' },
      { prueba: 'Cultivo cuantitativo de via aérea inferior', utilidad: 'En el paciente intubado, el cepillo protegido o el lavado broncoalveolar con cultivo cuantitativo permiten dirigir el antibiótico y suspenderlo si es negativo.' },
      { prueba: 'Hemocultivos', utilidad: 'En la neumonía por aspiración con criterios de gravedad, como en cualquier neumonía.' },
      { prueba: 'Tóxicos y nivel de conciencia', utilidad: 'La causa de la aspiración: sobredosis, intoxicación. El riesgo aumenta conforme baja la escala de Glasgow.' },
      { prueba: 'Valoración de la deglución', utilidad: 'Exploración formal por logopedia, completada con videofluoroscopia o endoscopia de la deglución. Los reflejos tusígeno y nauseoso NO son fiables para identificar el riesgo.' }
    ],
    no_invasivos: [
      { metodo: 'Neumonitis o neumonía (calculadora disponible)', interpretacion: 'Clasifica el cuadro con los rasgos que los distinguen y devuelve la conducta.', cutoff: 'Presenciada, horas, conciencia alterada: neumonitis. No presenciada, días, disfagia: neumonía' },
      { metodo: 'Antibiótico según el escenario (calculadora disponible)', interpretacion: 'Recoge cuando hace falta antibiótico y cuando la cobertura anaerobia.', cutoff: 'Anaerobios solo si hay absceso, empiema, enfermedad periodontal grave o esputo putrido' },
      { metodo: 'Riesgo de aspiración en el crítico (calculadora disponible)', interpretacion: 'Suma los factores que la revisión describe en el paciente crítico y propone medidas.', cutoff: 'Decúbito supino, gastroparesia, sonda, sedación y extubación reciente' },
      { metodo: 'Dieta tras la extubación (calculadora disponible)', interpretacion: 'Aplica la pauta que propone Marik tras retirar el tubo.', cutoff: 'Nada por boca 6 horas; después pure y dieta blanda 48 horas' },
      { metodo: 'Videofluoroscopia o endoscopia de la deglución', interpretacion: 'Completan la exploración de la deglución a pie de cama y confirman la aspiración.', cutoff: 'Necesarias para valorar el riesgo; los reflejos no bastan' },
      { metodo: 'Pulsioximetria', interpretacion: 'La aspiración silente puede manifestarse solo como desaturación.', cutoff: 'Una caída inexplicada de la saturación en un paciente de riesgo obliga a pensar en ella' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Infiltrado en un segmento declive. Si la aspiración ocurrió en decúbito: segmentos posteriores de los lóbulos superiores y apicales de los inferiores. Si ocurrió sentado o semiincorporado: segmentos basales de los lóbulos inferiores. La afectación del lóbulo inferior derecho es la típica.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'Para las complicaciones: cavitación, absceso, neumonía necrotizante y empiema, que obligan a cubrir anaerobios y pueden requerir drenaje.' },
      { modalidad: 'Broncoscopia', hallazgos: 'Ante sospecha de obstrucción endobronquial por tumor o cuerpo extraño, que hace que el absceso no responda al antibiótico. También para el drenaje endoscópico del absceso.' },
      { modalidad: 'Videofluoroscopia', hallazgos: 'Demuestra la aspiración durante la deglución y orienta las estrategias de alimentación.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La distinción que decide el tratamiento es <strong>neumonitis frente a neumonía</strong>. La neumonitis es una lesión química por contenido gástrico estéril, en el paciente con la conciencia muy alterada, a menudo presenciada, de cualquier edad pero más en jóvenes, que se manifiesta en horas. La neumonía es una infección por secreción orofaringea colonizada, en el paciente con disfagia o dismotilidad gástrica, habitualmente anciano, casi nunca presenciada, que se manifiesta en días. Otros síndromes de aspiración son la obstrucción de la via aérea, el absceso pulmonar, la neumonía lipoidea exogena, la fibrosis intersticial crónica y la neumonía por Mycobacterium fortuitum.`,
    escalas: [
      { nombre: 'Neumonitis o neumonía (calculadora disponible)', componentes: 'Mecanismo, material, factor predisponente, edad, si fue presenciada, tiempo de evolución y clínica.', formula: 'Comparación de rasgos de la tabla de Marik.', interpretacion: 'La neumonitis no lleva antibiótico de entrada; la neumonía si. Hay solapamiento, y la neumonitis puede sobreinfectarse más tarde.' },
      { nombre: 'Antibiótico según el escenario (calculadora disponible)', componentes: 'Neumonitis de menos o más de 48 horas, colonizacion gástrica, neumonía comunitaria o de residencia, y datos de anaerobios.', formula: 'Indicaciones de la revisión, con la cobertura anaerobia según la guía ATS/IDSA de 2019.', interpretacion: 'La penicilina y la clindamicina, consideradas clásicamente el estándar, son insuficientes para la mayoría. Lo que suele hacer falta es cobertura frente a gramnegativos.' },
      { nombre: 'Riesgo de aspiración en el crítico (calculadora disponible)', componentes: 'Decúbito supino, gastroparesia, sonda nasogástrica, nutrición enteral, sedación, nivel de conciencia y extubación reciente.', formula: 'Recuento de factores.', interpretacion: 'Hasta un 30% de los pacientes en decúbito supino tienen reflujo gastroesofágico incluso sin sonda. La sonda pospilorica puede tener ventajas si hay gastroparesia.' },
      { nombre: 'Dieta tras la extubación (calculadora disponible)', componentes: 'Horas desde la extubación, intubación traumática y alteraciones de la via aérea superior.', formula: 'Pauta escalonada.', interpretacion: 'La disfunción de la deglución aparece incluso tras 24 horas de intubación y suele resolverse en 48. Valoración formal si la intubación fue traumática o hay alteraciones anatómicas o funcionales.' },
      { nombre: 'Condiciones de la neumonitis grave', componentes: 'pH del aspirado y volumen.', formula: 'pH menor de 2.5 y volumen mayor de 0.3 mL/kg (20 a 25 mL en el adulto).', interpretacion: 'Son los umbrales que la mayoría de los autores aceptan. Pero el material particulado puede causar lesión grave aunque el pH sea mayor de 2.5.' },
      { nombre: 'Localización del infiltrado', componentes: 'Posición en el momento de la aspiración.', formula: 'Decúbito: posteriores superiores y apicales inferiores. Sentado: basales inferiores.', interpretacion: 'Un infiltrado en un segmento declive en un paciente de riesgo es lo que permite inferir la aspiración no presenciada.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Neumonitis química: no es una infección',
      color: '#6b5a2e',
      definicion: 'Lesión pulmonar aguda tras inhalar contenido gástrico regurgitado, en un paciente con la conciencia marcadamente alterada. Su forma histórica es el síndrome de Mendelson, descrito en 1946 en la anestesia obstétrica.',
      fisiopatologia: 'Es una quemadura química de la via aérea y el parénquima. La lesión es bifásica: un primer pico a las 1 a 2 horas por el efecto caustico del ácido sobre la interfase alveolocapilar, y un segundo a las 4 a 6 horas por la infiltración de neutrófilos y la inflamación aguda, con citocinas, complemento y especies reactivas de oxígeno. El contenido gástrico es normalmente estéril porque el ácido impide el crecimiento bacteriano, de modo que la infección no tiene papel al principio.',
      epidemiologia: 'Alrededor del 10% de los ingresados por sobredosis, y 1 de cada 3.000 anestesias, con un 10% a 30% de las muertes atribuibles a la anestesia.',
      factores_riesgo: ['Sobredosis de fármacos', 'Convulsiones', 'Ictus extenso', 'Anestesia general', 'Escala de Glasgow baja: el riesgo aumenta con la profundidad de la inconsciencia'],
      clinica: 'De nada a tos seca, taquipnea, broncoespasmo, esputo espumoso o sanguinolento, cianosis, edema pulmonar, hipotensión e hipoxemia, entre 2 y 5 horas después. Puede progresar rápido a SDRA.',
      criterios_dx: 'Aspiración presenciada o alteración marcada de la conciencia más infiltrado y síntomas respiratorios en horas.',
      laboratorio: 'Gasometría. La fiebre y la leucocitosis pueden ser solo inflamatorias.',
      imagen: 'Infiltrado en segmento declive, que aparece y puede resolverse rápido.',
      complementarios: 'En el intubado, cultivo cuantitativo de via aérea inferior si se plantea antibiótico.',
      dx_diferencial: 'Neumonía por aspiración, edema pulmonar cardiogénico, SDRA de otra causa, embolia pulmonar.',
      tx_medico: 'Aspirar la via aérea superior tras una aspiración presenciada. Considerar la intubación si el paciente no puede proteger la via aérea. Soporte respiratorio como en el SDRA.',
      tx_farmacologico: 'Antibiótico profiláctico NO recomendado, aunque sea práctica habitual. Tampoco se aconseja empezarlo poco después de la aspiración porque aparezcan fiebre, leucocitosis o infiltrado: selecciona gérmenes resistentes en una neumonitis no complicada. SI es apropiado de entrada si hay obstrucción intestinal u otra condición que coloniza el estómago, y debe considerarse si la neumonitis no se resuelve en 48 horas. Corticoides: no pueden recomendarse; un ensayo mejoro antes la radiografía pero alargo la estancia en críticos, y otro estudio asoció más neumonías por gramnegativos.',
      tx_intervencionista: 'Intubación si el paciente no protege la via aérea.',
      criterios_uci: 'Hipoxemia que requiere ventilación o evolución a SDRA.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar a las 48 horas: si no se resuelve, considerar la sobreinfección y el antibiótico.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'En una serie de 67 aspiraciones durante la anestesia, el 63% no tuvo síntomas; de los 25 sintomáticos, 13 necesitaron ventilación más de 6 horas y 4 murieron.',
      algoritmo: ['Aspirar la via aérea superior', 'Intubar si no protege la via aérea', 'Sin antibiótico profiláctico', 'Sin corticoides', 'Antibiótico de entrada si hay obstrucción intestinal o antiácidos', 'Antibiótico si no se resuelve en 48 h']
    },
    {
      nombre: 'Neumonía por aspiración: una infección',
      color: '#8c3a34',
      definicion: 'Infiltrado radiológico en un paciente con riesgo de aspiración orofaringea, por inhalacion de secreciones colonizadas por bacterias patogenas.',
      fisiopatologia: 'Aproximadamente la mitad de los adultos sanos aspira pequeñas cantidades de secreción orofaringea durante el sueño, y la baja carga bacteriana, la tos, el aclaramiento ciliar y la inmunidad lo resuelven. Si esos mecanismos fallan o el volumen es grande, aparece la neumonía. Cualquier condición que aumente el volumen o la carga bacteriana de las secreciones en un paciente con defensas alteradas la favorece.',
      epidemiologia: 'Entre el 5% y el 15% de las neumonías comunitarias. En un estudio, el 18% de las neumonías de residencia frente al 5% de las comunitarias. En el ictus, la disfagia afecta al 40% a 70% y la neumonía es 7 veces más probable si se confirma la aspiración.',
      factores_riesgo: ['Disfagia neurológica (ictus, enfermedad neurodegenerativa)', 'Alteración de la unión gastroesofágica', 'Anomalías de la via aerodigestiva superior', 'Edad avanzada y reflujo', 'Mala higiene oral y colonizacion', 'Institucionalizacion'],
      clinica: 'La de una neumonía aguda: taquipnea, tos, fiebre y signos de consolidación, en un paciente de riesgo. La aspiración casi nunca se presencia.',
      criterios_dx: 'Se infiere: paciente con riesgo de aspiración e infiltrado en un segmento declive característico.',
      laboratorio: 'Hemograma, hemocultivos en la grave, y cultivo de via aérea inferior en el intubado.',
      imagen: 'Infiltrado declive; tomografía si se sospecha cavitación, absceso o empiema.',
      complementarios: 'Valoración de la deglución.',
      dx_diferencial: 'Neumonía comunitaria sin aspiración (aunque se solapan: los ancianos sanos con neumonía tienen más aspiración silente que los controles), neumonitis química, neoplasia con obstrucción.',
      tx_medico: 'Tratar la neumonía y la causa: valorar la deglución, adaptar la dieta y cuidar la higiene oral.',
      tx_farmacologico: 'El antibiótico esta INEQUIVOCAMENTE indicado, elegido según donde se produjo la aspiración y el estado del paciente. Suele hacer falta actividad frente a gramnegativos (cefalosporinas de tercera generación, fluoroquinolonas, piperacilina). La penicilina y la clindamicina, consideradas clásicamente el estándar, son insuficientes para la mayoría. La guía ATS/IDSA de 2019 recomienda no añadir de rutina cobertura anaerobia en la sospecha de neumonía por aspiración salvo que se sospeche absceso o empiema.',
      tx_intervencionista: 'Drenaje si hay empiema o absceso que no responde.',
      criterios_uci: 'Los de cualquier neumonía grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la cavitación y el absceso, más frecuentes si el tratamiento se retrasa.',
      seguimiento_ambulatorio: 'Prevención de nuevos episodios: deglución, dieta, higiene oral.',
      pronostico: 'Es la causa de muerte más frecuente en la disfagia neurológica y, a largo plazo, en los pacientes alimentados por gastrostomía.',
      algoritmo: ['Sospechar en todo paciente de riesgo con infiltrado declive', 'No exigir que la aspiración se haya visto', 'Antibiótico con cobertura de gramnegativos', 'Sin anaerobios de rutina', 'Anaerobios si absceso, empiema, periodontitis o esputo putrido', 'Valorar la deglución']
    },
    {
      nombre: 'Gérmenes: lo que muestran los estudios modernos',
      color: '#5a4a8c',
      definicion: 'Espectro bacteriano real de la neumonía por aspiración y de la neumonitis sobreinfectada, que difiere del que se enseñaba clásicamente.',
      fisiopatologia: 'Los estudios de los años setenta, con muestras transtraqueales tomadas tarde y en pacientes con complicaciones (abscesos, neumonía necrotizante, empiema), a menudo alcohólicos con esputo putrido, encontraron sobre todo anaerobios. Pero esas muestras podian estar contaminadas por flora orofaringea. Con el cepillo protegido y cultivo cuantitativo en los años noventa, el panorama fue otro.',
      epidemiologia: 'En 52 pacientes de críticos con neumonía por aspiración, solo 19 tuvieron patógenos en cantidad significativa, y NINGUNO anaerobios. En otro estudio de 25 aspiraciones gástricas, 12 tuvieron patógenos, 8 de ellos con factores de colonizacion gástrica, y tampoco hubo anaerobios patógenos.',
      factores_riesgo: ['Antiácidos, antagonistas H2 o inhibidores de la bomba de protones', 'Nutrición enteral', 'Gastroparesia u obstrucción de intestino delgado', 'Mala higiene oral en el anciano', 'Origen hospitalario'],
      clinica: 'No aplica.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Cultivo cuantitativo de via aérea inferior en el intubado, que permite dirigir y suspender el antibiótico.',
      imagen: 'No aplica.',
      complementarios: 'No aplica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Elegir el espectro por el lugar de adquisición y los factores de colonizacion, y conocer el antibiograma local.',
      tx_farmacologico: 'Comunitaria: Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae y enterobacterias. Hospitalaria: gramnegativos, incluida Pseudomonas aeruginosa. Los anaerobios, rara vez. Al subir el pH gástrico con antiácidos o antisecretores, o con nutrición enteral y gastroparesia, el estómago se coloniza por gramnegativos y el contenido aspirado deja de ser estéril.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Desescalar con los cultivos y suspender si son negativos.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La higiene oral intensiva en el anciano institucionalizado y la ausencia de dientes se asocian a menor riesgo de neumonía por aspiración, porque bajan la carga bacteriana.',
      algoritmo: ['Comunitaria: neumococo, S. aureus, H. influenzae, enterobacterias', 'Hospitalaria: gramnegativos y Pseudomonas', 'Anaerobios: raros', 'Antisecretores y nutrición enteral colonizan el estómago', 'Cultivo cuantitativo en el intubado', 'Desescalar o suspender']
    },
    {
      nombre: 'Aspiración en el paciente crítico y tras la extubación',
      color: '#3d5a73',
      definicion: 'Riesgo aumentado de aspiración y de neumonía por aspiración en el paciente crítico, máximo tras la retirada del tubo endotraqueal.',
      fisiopatologia: 'El decúbito supino, la gastroparesia, la sonda nasogástrica y la sedación favorecen el reflujo y la aspiración. La dismotilidad, desde un vaciamiento lento hasta una gastroparesia marcada, aparece en quemados, sepsis, trauma, cirugía y choque; el residuo gástrico alto distiende el estómago y favorece la regurgitación. Tras la extubación se suman los sedantes residuales, la sonda y la disfunción de la deglución por la alteración de la sensibilidad, la lesión glotica y la disfunción laringea.',
      epidemiologia: 'Hasta un 30% de los pacientes en decúbito supino tienen reflujo gastroesofágico incluso sin sonda ni nutrición enteral. La alteración del reflejo deglutorio se detecta incluso tras 24 horas de intubación, y suele resolverse en 48.',
      factores_riesgo: ['Decúbito supino', 'Gastroparesia y residuo gástrico alto', 'Sonda nasogástrica', 'Sedacion', 'Extubación reciente', 'Intubación traumática o alteraciones de la via aérea superior'],
      clinica: 'Desaturación, tos con la ingesta o infiltrado nuevo en un paciente de riesgo.',
      criterios_dx: 'No aplica.',
      laboratorio: 'No aplica.',
      imagen: 'Radiografía ante un empeoramiento respiratorio.',
      complementarios: 'Valoración formal de la deglución si la intubación fue traumática o hay alteraciones anatómicas o funcionales de la via aérea superior.',
      dx_diferencial: 'Neumonía asociada a la ventilación, atelectasia, edema.',
      tx_medico: 'Marik recomienda suspender la alimentación oral al menos 6 horas tras la extubación, por si hay que reintubar, y después dieta de pure y luego blanda durante al menos 48 horas.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'La sonda pospilorica puede tener ventajas en el paciente con gastroparesia.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la tolerancia a la dieta y la aparición de tos o desaturación con la ingesta.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La mayoría de las alteraciones de la deglución tras una intubación corta se resuelven en 48 horas.',
      algoritmo: ['Evitar el decúbito supino estricto', 'Vigilar el residuo y la gastroparesia', 'Valorar sonda pospilorica si hay gastroparesia', 'Tras extubar: nada por boca 6 horas', 'Después pure y dieta blanda 48 horas', 'Valoración formal si la intubación fue traumática']
    },
    {
      nombre: 'Disfagia, sondas y prevención',
      color: '#3f6b52',
      definicion: 'Identificación del paciente con disfagia y medidas para reducir la aspiración, incluida la decisión sobre las sondas de alimentación.',
      fisiopatologia: 'Las sondas de alimentación no protegen frente a las secreciones orofaringeas colonizadas, que son la amenaza principal en la disfagia, y la gammagrafía ha demostrado aspiración de contenido gástrico también con gastrostomía.',
      epidemiologia: 'La disfagia neurológica afecta a entre 300.000 y 600.000 personas al año en Estados Unidos. En 1995 se colocaron más de 121.000 gastrostomías endoscópicas en Medicare, sobre todo por disfagia tras un ictus.',
      factores_riesgo: ['Ictus', 'Enfermedad neurodegenerativa', 'Aspiración silente', 'Mala higiene oral', 'Alimentación con consistencias inadecuadas'],
      clinica: 'Tos o atragantamiento con la ingesta, voz húmeda, neumonías de repetición; o nada, en la aspiración silente.',
      criterios_dx: 'Valoración completa de la deglución por logopedia, completada con videofluoroscopia o endoscopia. Los reflejos tusígeno y nauseoso no son fiables.',
      laboratorio: 'No aplica.',
      imagen: 'Videofluoroscopia de la deglución.',
      complementarios: 'Endoscopia de la deglución con fibra óptica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Dieta blanda y estrategias compensadoras: bocados pequeños, barbilla hacia abajo, cabeza girada y degluciones repetidas. Higiene oral intensiva. Sonda si sigue aspirando el pure pese a esas estrategias.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'La gastrostomía no ha demostrado ser superior a la sonda nasogástrica para prevenir la aspiración tras un ictus: aporta mejor la nutrición, pero la incidencia de neumonía fue similar, y también con sondas pospiloricas. Se prefiere para el largo plazo por la comodidad. No es para quien recuperara la deglución en pocas semanas.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar la deglución de forma periódica.',
      seguimiento_ambulatorio: 'Higiene oral y revisión de la dieta.',
      pronostico: 'A largo plazo, la neumonía por aspiración es la causa de muerte más frecuente en los pacientes alimentados por gastrostomía. En los que tienen una esperanza de vida corta, su indicación es discutible.',
      algoritmo: ['No fiarse de los reflejos tusígeno y nauseoso', 'Valoración formal de la deglución', 'Dieta blanda y estrategias compensadoras', 'Higiene oral intensiva', 'Sonda si aspira el pure pese a todo', 'La gastrostomía no previene la aspiración']
    },
    {
      nombre: 'Absceso pulmonar y complicaciones',
      color: '#7a4363',
      definicion: 'Necrosis y cavitación del parénquima como complicación de la neumonía por aspiración no tratada o que no responde, junto con la neumonía necrotizante y el empiema.',
      fisiopatologia: 'El organismo intenta contener la infección y el parénquima se necrosa. Sin tratamiento, la neumonía por aspiración tiene más tendencia a cavitar y formar abscesos.',
      epidemiologia: 'El antibiótico sistémico, tratamiento de referencia, tiene un éxito del 63% al 67%; hasta un 37% de los abscesos no responden y pueden necesitar otras intervenciones.',
      factores_riesgo: ['Obstrucción endobronquial por tumor o cuerpo extraño', 'Absceso mayor de 6 cm', 'Antibiótico inadecuado o demasiado corto', 'Gérmenes inusuales: micobacterias, hongos', 'Inmunosupresion'],
      clinica: 'Fiebre persistente, esputo putrido, pérdida de peso y mal estado general pese al antibiótico.',
      criterios_dx: 'Cavidad con nivel hidroaereo en la imagen.',
      laboratorio: 'Cultivos, incluidos de micobacterias y hongos si no responde.',
      imagen: 'Tomografía para localizarlo, medirlo y ver su relación con los bronquios.',
      complementarios: 'Broncoscopia si se sospecha obstrucción o para drenaje endoscópico.',
      dx_diferencial: 'Neoplasia cavitada, vasculitis, tuberculosis, empiema con fístula.',
      tx_medico: 'Antibiótico sistémico prolongado como primer paso.',
      tx_farmacologico: 'Aquí SI esta indicada la cobertura anaerobia, como en la neumonía necrotizante, la enfermedad periodontal grave y el esputo putrido.',
      tx_intervencionista: 'Si fracasa el antibiótico: drenaje percutáneo con tubo transtorácico o drenaje endoscópico con catéter, y como último recurso la resección. Ambos drenajes son seguros; el endoscópico tiene menos complicaciones y mortalidad con un éxito similar. La elección depende de la localización y de que haya un bronquio que lleve al absceso. Drenar sin demora puede acortar la estancia.',
      criterios_uci: 'Sepsis, hemoptisis o fístula broncopleural.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Imagen de control y vigilancia de la respuesta clínica.',
      seguimiento_ambulatorio: 'Completar el antibiótico y descartar una neoplasia subyacente.',
      pronostico: 'Los abscesos de más de 6 cm responden peor al antibiótico y a menudo requieren drenaje.',
      algoritmo: ['Antibiótico con cobertura anaerobia', 'Si no responde: buscar obstrucción y gérmenes raros', 'Mayor de 6 cm: pensar en drenaje', 'Drenaje endoscópico si hay bronquio de acceso', 'Si no, percutáneo', 'Resección como último recurso']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En el hospital la aspiración aparece sobre todo en tres escenarios: el paciente con la conciencia disminuida, el paciente con disfagia y el paciente crítico, con un pico tras la extubación. En los tres, lo primero es distinguir la quemadura química de la infección.',
    parametros: [
      'Distinguir neumonitis de neumonía antes de decidir el antibiótico.',
      'Neumonitis: sin antibiótico profiláctico; reevaluar a las 48 horas.',
      'Neumonía: antibiótico con cobertura de gramnegativos, sin anaerobios de rutina.',
      'Cultivo cuantitativo de via aérea inferior en el intubado para dirigir o suspender.',
      'Sin corticoides en la neumonitis.',
      'Evitar el decúbito supino estricto y vigilar la gastroparesia.',
      'Tras extubar: nada por boca 6 horas, luego pure y blanda 48 horas.',
      'Valoración formal de la deglución en el paciente de riesgo; los reflejos no bastan.'
    ],
    criterios_uci_general: 'Hipoxemia que requiere ventilación, evolución a SDRA, neumonía grave por aspiración o sepsis por absceso o empiema.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Valorar la deglución en el paciente con ictus o enfermedad neurodegenerativa, dieta adaptada y estrategias compensadoras, higiene oral intensiva en el anciano institucionalizado, evitar el decúbito supino en el crítico, retrasar la dieta oral tras la extubación, y no confiar en la sonda ni en la gastrostomía para prevenir la aspiración de secreciones.'
  }
};

export const compCites = {
  'Neumonitis química: no es una infección': { fisiopatologia: [1], tx_farmacologico: [1], epidemiologia: [1], pronostico: [1], criterios_dx: [1], laboratorio: [1] },
  'Neumonía por aspiración: una infección': { tx_farmacologico: [1, 2], epidemiologia: [1], criterios_dx: [1], laboratorio: [2] },
  'Gérmenes: lo que muestran los estudios modernos': { epidemiologia: [1], tx_farmacologico: [1], laboratorio: [2] },
  'Aspiración en el paciente crítico y tras la extubación': { tx_medico: [1], epidemiologia: [1], fisiopatologia: [1] },
  'Disfagia, sondas y prevención': { tx_intervencionista: [1], criterios_dx: [1], tx_medico: [1] },
  'Absceso pulmonar y complicaciones': { epidemiologia: [3], tx_intervencionista: [3], tx_farmacologico: [1, 2], pronostico: [3], criterios_dx: [3], laboratorio: [3] }
};

export const estigmasTitulo = 'Lo que hay que buscar a pie de cama';
export const estigmas = [
  { nombre: 'Contenido gástrico en la orofaringe', descripcion: 'En el paciente con la conciencia disminuida, sugiere una aspiración gástrica: pensar en neumonitis.' },
  { nombre: 'Esputo espumoso o sanguinolento en horas', descripcion: 'Neumonitis grave con edema pulmonar, que puede evolucionar rápido a SDRA.' },
  { nombre: 'Desaturación inexplicada', descripcion: 'Puede ser la única manifestación de una aspiración silente. Obliga a una radiografía.' },
  { nombre: 'Tos o voz húmeda con la ingesta', descripcion: 'Signo de disfagia. Su ausencia no descarta la aspiración silente, frecuente en el ictus.' },
  { nombre: 'Esputo putrido y mala dentadura', descripcion: 'Junto con el alcoholismo, los datos que hacen pensar en anaerobios y obligan a cubrirlos.' },
  { nombre: 'Crepitantes en las bases o en la espalda', descripcion: 'La localización depende de la postura: bases si aspiro sentado, segmentos posteriores si aspiro tumbado.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Neumonitis o neumonía (calculadora disponible)': [1],
  'Antibiótico según el escenario (calculadora disponible)': [1, 2],
  'Riesgo de aspiración en el crítico (calculadora disponible)': [1],
  'Dieta tras la extubación (calculadora disponible)': [1],
  'Condiciones de la neumonitis grave': [1],
  'Localización del infiltrado': [1]
};

export const escalaCalc = {
  'Neumonitis o neumonía (calculadora disponible)': 'neumonitis-o-neumonia',
  'Antibiótico según el escenario (calculadora disponible)': 'antibiotico-aspiracion',
  'Riesgo de aspiración en el crítico (calculadora disponible)': 'riesgo-aspiracion-critico',
  'Dieta tras la extubación (calculadora disponible)': 'dieta-extubacion'
};

export const compGroups = [
  { title: 'Dos cuadros distintos', items: ['Neumonitis química: no es una infección', 'Neumonía por aspiración: una infección', 'Gérmenes: lo que muestran los estudios modernos'] },
  { title: 'Donde ocurre', items: ['Aspiración en el paciente crítico y tras la extubación', 'Disfagia, sondas y prevención'] },
  { title: 'Cuando se complica', items: ['Absceso pulmonar y complicaciones'] }
];

export const complicacionesIntro = 'Las tres primeras fichas son la distinción que lo decide todo: la neumonitis es una quemadura química que no lleva antibiótico de entrada, la neumonía es una infección que si lo lleva, y los gérmenes reales no son los anaerobios que se enseñaban. Las dos siguientes son los escenarios donde ocurre: el paciente crítico, sobre todo tras la extubación, y el paciente con disfagia, donde las sondas no protegen tanto como se cree. La última es la complicación que si obliga a cubrir anaerobios: el absceso.';

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
    { title: 'Neumonitis', sub: 'Química, horas', color: '#6b5a2e', target: 'complicaciones', leaves: [
      { title: 'Sin antibiótico', sub: 'Reevaluar a las 48 h', color: '#6b5a2e', target: 'complicaciones' },
      { title: 'Sin corticoide', sub: 'Soporte', color: '#6b5a2e', target: 'complicaciones' }
    ] },
    { title: 'Neumonia', sub: 'Infección, días', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Gramnegativos', sub: 'Sin anaerobios de rutina', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Absceso', sub: 'Ahi si anaerobios', color: '#7a4363', target: 'complicaciones' }
    ] },
    { title: 'Donde ocurre', sub: 'Crítico y disfagia', color: '#3d5a73', target: 'complicaciones', leaves: [
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
    titulo: 'Neumonitis y neumonía por aspiración',
    fuente: 'Adaptado de la tabla 1 de Marik PE. Aspiration pneumonitis and aspiration pneumonia. N Engl J Med 2001;344:665-671.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Neumonitis</th><th>Neumonía</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Mecanismo</td><td>Contenido gástrico estéril</td><td>Secreción orofaringea colonizada</td></tr>
            <tr><td class="figure-org">Proceso</td><td>Lesión química por ácido y particulas</td><td>Respuesta inflamatoria a bacterias</td></tr>
            <tr><td class="figure-org">Bacteriologia</td><td>Estéril al principio; posible sobreinfección después</td><td>Cocos grampositivos, bacilos gramnegativos y, rara vez, anaerobios</td></tr>
            <tr><td class="figure-org">Factor principal</td><td>Conciencia marcadamente disminuida</td><td>Disfagia y dismotilidad gástrica</td></tr>
            <tr><td class="figure-org">Edad</td><td>Cualquiera, más en jóvenes</td><td>Habitualmente ancianos</td></tr>
            <tr><td class="figure-org">Aspiración</td><td>Puede ser presenciada</td><td>Habitualmente no presenciada</td></tr>
            <tr><td class="figure-org">Evolución</td><td>De 2 a 5 horas</td><td>Días, como una neumonía</td></tr>
            <tr><td class="figure-org">Antibiótico</td><td><span class="figure-tag dys">No de entrada</span></td><td><span class="figure-tag fail">Si</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Hay solapamiento, pero son entidades distintas. Los cuatro errores que señalaba Marik siguen vigentes: no distinguir una de otra, considerar infecciosa toda complicación de la aspiración, no reconocer el espectro real de gérmenes y creer que la aspiración tiene que haberse <strong>visto</strong> para diagnosticarla. La neumonía por aspiración casi nunca se presencia: se infiere ante un paciente de riesgo con un infiltrado en un segmento declive.</div>`
  },
  'aspiracion-antibiotico': {
    titulo: 'Cuando antibiótico, y con que espectro',
    fuente: 'Marik PE. N Engl J Med 2001;344:665-671; guia ATS/IDSA de 2019 de neumonia comunitaria (Am J Respir Crit Care Med 2019;200:e45-e67).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escenario</th><th>Conducta</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Neumonitis en las primeras 48 h</td><td><span class="figure-tag dys">Sin antibiótico</span> aunque haya fiebre, leucocitosis o infiltrado</td></tr>
            <tr><td class="figure-org">Neumonitis que no se resuelve en 48 h</td><td>Considerar antibiótico de amplio espectro; anaerobios no de rutina</td></tr>
            <tr><td class="figure-org">Neumonitis con obstrucción intestinal o antiácidos</td><td>Antibiótico empírico de entrada: el estómago esta colonizado</td></tr>
            <tr><td class="figure-org">Neumonía comunitaria por aspiración</td><td>Cobertura de neumococo, S. aureus, H. influenzae y enterobacterias</td></tr>
            <tr><td class="figure-org">Neumonía de residencia u hospitalaria</td><td>Cobertura de gramnegativos, incluida Pseudomonas, según el antibiograma local</td></tr>
            <tr><td class="figure-org">Absceso, empiema, neumonía necrotizante, periodontitis grave o esputo putrido</td><td><span class="figure-tag fail">Cubrir anaerobios</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La guía ATS/IDSA de 2019 recomienda <strong>no añadir de rutina cobertura anaerobia</strong> en la sospecha de neumonía por aspiración salvo que se sospeche absceso o empiema, en línea con lo que ya señalaba Marik: la <strong>penicilina y la clindamicina</strong>, consideradas clásicamente el estándar, son insuficientes para la mayoría, porque lo que suele hacer falta es actividad frente a gramnegativos. En el intubado, el cultivo cuantitativo de la via aérea inferior permite dirigir el tratamiento y suspenderlo si es negativo.</div>`
  },
  'aspiracion-mitos': {
    titulo: 'Lo que se hace por costumbre y lo que dice la evidencia',
    fuente: 'Marik PE. N Engl J Med 2001;344:665-671.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Costumbre</th><th>Evidencia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Antibiótico profiláctico tras una aspiración presenciada</td><td>No recomendado: selecciona resistencias en una lesión química</td></tr>
            <tr><td class="figure-org">Corticoides en la neumonitis</td><td>No recomendados: más estancia en críticos y más neumonías por gramnegativos</td></tr>
            <tr><td class="figure-org">Cubrir anaerobios en toda aspiración</td><td>Solo con absceso, empiema, periodontitis grave o esputo putrido</td></tr>
            <tr><td class="figure-org">Valorar el riesgo con los reflejos tusígeno y nauseoso</td><td>No fiables: hace falta una valoración formal de la deglución</td></tr>
            <tr><td class="figure-org">La gastrostomía evita la aspiración</td><td>No es superior a la sonda nasogástrica; ninguna protege de las secreciones</td></tr>
            <tr><td class="figure-org">Si nadie la vio, no hubo aspiración</td><td>La neumonía por aspiración casi nunca se presencia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El contenido gástrico es <strong>estéril</strong> en condiciones normales porque el ácido impide el crecimiento bacteriano, y por eso la neumonitis no es una infección al principio. Esa esterilidad se pierde cuando sube el pH (antiácidos, antagonistas H2, inhibidores de la bomba de protones) o con la nutrición enteral, la gastroparesia y la obstrucción intestinal: ahi el estómago se coloniza por gramnegativos y el antibiótico de entrada si tiene sentido.</div>`
  }
};
