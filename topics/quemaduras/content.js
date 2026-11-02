// topics/quemaduras/content.js - Modulo 86: Quemaduras.
// Basado en el Primer de Nature Reviews Disease Primers sobre la lesion por quemadura (Jeschke
// MG, van Baar ME, Choudhry MA, et al. Nat Rev Dis Primers 2020;6:11, doi:10.1038/s41572-020-0145-5)
// y en el capitulo 9, Lesiones termicas, del manual ATLS de 10.a edicion en espanol, ambos
// ya en Bibliografia/. Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'quemaduras',
  titulo: 'Quemaduras',
  subtitulo: 'Módulo 86 &middot; Medicina Crítica',
  accent: '#a0522d',
  accentDim: '#b8734f'
};

export const definicionText = `<p style="margin:0 0 14px;">La quemadura es una destrucción tisular por transferencia de energía: calor de líquidos, sólidos o llama, que son la mayoría, pero también fricción, frío, radiación, químicos o electricidad. Cada causa se comporta distinto: la llama produce una quemadura profunda inmediata, la escaldadura parece más superficial al principio, los alcalis producen necrosis colicuativa y los ácidos necrosis por coagulación, y la <strong>electricidad</strong> puede destruir tejido profundo bajo una piel casi intacta. La OMS estima <strong>11 millones de quemaduras al año y 180.000 muertes</strong>, el 90% en países de ingresos bajos y medios.</p>
<p style="margin:0 0 14px;">Lo que hace única a la quemadura grave es la <strong>respuesta del organismo</strong>: un choque distributivo por fuga capilar masiva en las primeras 48 horas y, después, un estado <strong>hipermetabólico</strong> que puede durar hasta <strong>36 meses</strong>, con catabolismo, resistencia a la insulina, infecciones y fallo de órganos. Por eso los objetivos han cambiado: ya no basta con sobrevivir, y la comunidad del trauma ha adoptado el lema de <strong>ninguna muerte, ninguna cicatriz, ningún dolor</strong>.</p>
<p style="margin:0 0 14px;">Para el clínico que recibe al paciente hay tres decisiones que no pueden esperar: la <strong>via aérea</strong> (inhalacion de humo y monóxido de carbono), el <strong>volumen</strong> de líquidos, que se calcula por el peso y la superficie quemada y se ajusta a la diuresis, y el <strong>traslado</strong> a un centro de quemados. Las tres dependen de estimar bien la extensión y la profundidad, algo en lo que, según el Primer, fallan con frecuencia incluso los expertos.</p>`;

export const bibliografia = [
  'Jeschke MG, van Baar ME, Choudhry MA, Chung KK, Gibran NS, Logsetty S. Burn injury. Nat Rev Dis Primers. 2020;6(1):11. doi:10.1038/s41572-020-0145-5.',
  'American College of Surgeons Committee on Trauma. ATLS: Soporte Vital Avanzado en Trauma. Manual del curso para estudiantes. 10.a ed. Chicago: American College of Surgeons; 2018.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La quemadura que se ve',
      tituloB: 'La quemadura que no se ve',
      compensada: 'La profundidad se reconoce por el aspecto. Superficial (primer grado): roja, dolorosa, sin ampollas, cura sin cicatriz. Espesor parcial superficial: ampollas, exudado, muy dolorosa, palidece a la presión, cura sin cirugía. Espesor parcial profundo: menos dolorosa, más seca, no palidece, necesita cirugía y deja cicatriz. Espesor total (tercer grado): seca, insensible al tacto y al pinchazo, paradójicamente casi sin dolor. Cuarto grado: afecta músculo o hueso, ennegrecida, con pérdida frecuente de la parte afectada.',
      descompensada: 'La lesión por inhalacion, que puede no dar nada al principio: la oxigenación y la radiografía normales no la descartan porque la inflamación tarda en desarrollarse. La intoxicación por monóxido de carbono, con una pulsioximetría que marca 98% a 100%. La quemadura eléctrica, con una entrada pequeña y necrosis muscular profunda. Y el trauma asociado (craneal, torácico, abdominal, fracturas, aplastamiento), que empeora el pronóstico y se busca en la revisión secundaria.'
    },
    laboratorio: [
      { prueba: 'Carboxihemoglobina en gasometría', utilidad: 'Diagnóstica la intoxicación por monóxido de carbono. Un nivel mayor del 10% en un paciente de un incendio sugiere inhalacion. Puede ser normal al llegar si ya recibió oxígeno, y la pulsioximetría no la detecta. La PaO2 tampoco la predice.' },
      { prueba: 'Gasometría y lactato', utilidad: 'Basal en toda quemadura con sospecha de inhalacion. Una acidosis persistente sin otra causa sistémica orienta a intoxicación por cianuro.' },
      { prueba: 'Hemograma, electrolitos y coagulación', utilidad: 'El Primer los incluye en la analítica inicial de toda quemadura de 15% de superficie o más, junto con la gasometría.' },
      { prueba: 'Creatincinasa y mioglobina en orina', utilidad: 'En la quemadura eléctrica, por la rabdomiólisis. Si la orina es rojo oscura, se asume que hay hemocromogenos sin esperar al laboratorio.' },
      { prueba: 'Glucemia', utilidad: 'La hiperglucemia con resistencia a la insulina forma parte de la respuesta hipermetabolica y de los criterios de sepsis de la American Burn Association.' },
      { prueba: 'Cribado de microorganismos multirresistentes', utilidad: 'Al ingreso, para orientar el antibiótico si aparece una infección.' }
    ],
    no_invasivos: [
      { metodo: 'Regla de los nueves (calculadora disponible)', interpretacion: 'Estima la superficie quemada en el adulto con regiones de 9% o multiplos. La palma de la mano del paciente, con los dedos, es aproximadamente un 1%.', cutoff: 'Solo cuentan las de espesor parcial o total, no las superficiales' },
      { metodo: 'Volumen de reanimación (calculadora disponible)', interpretacion: 'Fórmula de Parkland ajustada según el ATLS, con la regla de los dieces para comparar.', cutoff: '2 mL/kg por % de superficie en el adulto; diuresis 0.5 mL/kg/h' },
      { metodo: 'Puntuación de Baux (calculadora disponible)', interpretacion: 'Suma la edad y el porcentaje de superficie quemada, y la versión modificada añade la lesión por inhalacion.', cutoff: 'A mayor puntuación, mayor mortalidad prevista' },
      { metodo: 'Criterios de traslado (calculadora disponible)', interpretacion: 'Criterios de la American Burn Association que recoge el ATLS para trasladar a un centro de quemados.', cutoff: 'Espesor parcial mayor del 10%, zonas especiales, tercer grado, eléctrica, química, inhalacion' },
      { metodo: 'Diagramas de Lund y Browder', interpretacion: 'Para el niño, cuya cabeza es proporcionalmente mayor y sus extremidades menores que en el adulto. La regla de los nueves es inexacta en el.', cutoff: 'Preferidos en pediatría' },
      { metodo: 'Doppler del pulso distal', interpretacion: 'En las quemaduras circunferenciales de extremidades, el pulso se valora con más precisión por Doppler.', cutoff: 'Junto a cianosis, relleno lento, parestesias y dolor profundo' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Basal en la sospecha de inhalacion. Una radiografía normal al ingreso no la descarta: puede deteriorarse con el tiempo.' },
      { modalidad: 'Broncoscopia', hallazgos: 'La American Burn Association exige para el diagnóstico de lesión por inhalacion la exposición a un agente combustible y signos de humo por debajo de las cuerdas vocales en la broncoscopia. También sirve para retirar secreciones y restos necróticos.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'Puede mostrar la inflamación y obstrucción de la via aérea pequeña en la lesión de la via aérea inferior.' },
      { modalidad: 'Electrocardiograma', hallazgos: 'En la quemadura eléctrica: la corriente puede causar arritmias y parada. Monitorización prolongada si hay lesión por la quemadura, pérdida de conciencia, alto voltaje (más de 1000 V) o arritmias en la valoración inicial.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por <strong>profundidad</strong> (superficial, espesor parcial superficial y profundo, espesor total y cuarto grado), por <strong>extensión</strong> en porcentaje de superficie corporal y por <strong>causa</strong> (térmica, química, eléctrica, por frío). Con las tres se decide si es <strong>menor o mayor</strong>: menor suele ser la de menos del 10% de superficie con predominio superficial; para la mayor no hay un umbral único, y el Primer da como orientación más del 10% en el anciano, más del 20% en el adulto y más del 30% en el niño. A partir de un 20% de superficie suele necesitarse reanimación con líquidos, aunque quemaduras menores la requieren si hay lesión eléctrica, inhalacion o trauma asociado.`,
    escalas: [
      { nombre: 'Regla de los nueves (calculadora disponible)', componentes: 'Cabeza y cuello 9%, cada miembro superior 9%, tronco anterior 18%, tronco posterior 18%, cada miembro inferior 18%, periné 1%. Palma con dedos, 1%.', formula: 'Suma de las regiones con quemadura de espesor parcial o total.', interpretacion: 'Herramienta preferida para calcular y documentar la extensión en el adulto. No se incluyen las quemaduras superficiales. Las estimaciones previas al traslado son a menudo inexactas, incluso por expertos.' },
      { nombre: 'Volumen de reanimación (calculadora disponible)', componentes: 'Peso, porcentaje de superficie de espesor parcial o total, edad y tipo de quemadura.', formula: 'Adulto: 2 mL de Ringer lactato por kg y por %; niño: 3 mL; eléctrica con mioglobinuria: 4 mL. La mitad en las primeras 8 horas desde la quemadura.', interpretacion: 'La fórmula solo da el ritmo inicial. Después se titula por la diuresis: 0.5 mL/kg/h en el adulto (30 a 50 mL/h) y 1 mL/kg/h en el niño de menos de 30 kg. La American Burn Association acepta de 2 a 4 mL/kg por %.' },
      { nombre: 'Puntuación de Baux (calculadora disponible)', componentes: 'Edad y porcentaje de superficie quemada; la versión modificada añade la lesión por inhalacion.', formula: 'Baux = edad + % de superficie. Modificada: añade puntos si hay inhalacion.', interpretacion: 'La quemadura tiene una relación dosis-respuesta fiable: a mayor superficie, peor resultado. La versión modificada es hoy el predictor más aceptado y se aplica en un amplio rango de edades, niños incluidos.' },
      { nombre: 'Criterios de traslado (calculadora disponible)', componentes: 'Extensión, localización, profundidad, causa, inhalacion, comorbilidad, trauma, edad y necesidades sociales.', formula: 'Basta un criterio para plantear el traslado.', interpretacion: 'Como los criterios son amplios, puede consultarse al centro de quemados y acordar otro plan, por ejemplo cuando una quemadura de mano o cara puede curarse bien en el lugar de origen.' },
      { nombre: 'Profundidad de la quemadura', componentes: 'Superficial, espesor parcial superficial, espesor parcial profundo, espesor total y cuarto grado.', formula: 'Valoración clínica: aspecto, ampollas, exudado, sensibilidad y blanqueo.', interpretacion: 'Decide la necesidad de cirugía: las superficiales y de espesor parcial superficial curan sin ella; las de espesor parcial profundo y total la necesitan, salvo las muy pequeñas. No hay técnicas de imagen no invasivas validadas para medirla de forma generalizada.' },
      { nombre: 'Criterios de sepsis en el quemado', componentes: 'American Burn Association (tres de: temperatura mayor de 39 o menor de 36.5, taquicardia progresiva mayor de 110, taquipnea progresiva, trombocitopenia, hiperglucemia, intolerancia a la nutrición enteral 24 h, más infección), Mann-Salinas y Sepsis-3.', formula: 'Tres definiciones distintas.', interpretacion: 'En un estudio comparativo, Sepsis-3 fue la más exacta de las tres, pero solo acerto en el 85% de los quemados. La sepsis y el fallo multiorgánico son las principales causas de muerte.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Valoración inicial: extensión y profundidad',
      color: '#a0522d',
      definicion: 'Evaluación sistemática del quemado con revisión primaria y secundaria, que estima la extensión y la profundidad de las que dependen los líquidos, el triaje y el pronóstico.',
      fisiopatologia: 'Inmediatamente tras la lesión la herida tiene tres zonas: de coagulación en el centro, con el mayor daño; de estasis o isquemia, con perfusión reducida pero potencialmente recuperable; y de hiperemia en la periferia. La zona de estasis es la que una mala reanimación puede convertir en necrosis.',
      epidemiologia: 'En Estados Unidos, el registro nacional de la American Burn Association de 2019 recoge que la llama causa el 41% de las quemaduras y la escaldadura el 31%; las químicas (3.5%) y eléctricas (3.6%) son mucho menos frecuentes. En menores de 5 años predomina la escaldadura.',
      factores_riesgo: ['Edades extremas', 'Epilepsia', 'Cocina con fuego abierto y ropa holgada', 'Consumo de alcohol o drogas', 'Violencia domestica'],
      clinica: 'Primero detener el proceso de quemadura: apagar las llamas, retirar ropa y joyas, enfriar con agua y después abrigar para evitar la hipotermia. Revisión primaria ordenada y revisión secundaria completa.',
      criterios_dx: 'Extensión por la regla de los nueves en el adulto y por Lund y Browder en el niño; profundidad por el aspecto clínico. Las quemaduras superficiales no cuentan para el calculo.',
      laboratorio: 'En quemaduras de 15% o más: hemograma, electrolitos, coagulación y gasometría.',
      imagen: 'Según el trauma asociado.',
      complementarios: 'Profilaxis antitetanica, porque la quemadura es una herida abierta.',
      dx_diferencial: 'Lesiones por maltrato: el mecanismo y el patrón de la lesión deben coincidir con la historia.',
      tx_medico: 'Primeros auxilios: agua fresca para detener la quemadura y aliviar el dolor, cuidando de no provocar hipotermia; quitar ropa y joyas; nunca remedios caseros (mantequilla, limon, pasta de dientes, agua oxigenada, cebolla), que dañan más el tejido. En las químicas, lavado abundante; los neutralizantes están contraindicados porque generan calor.',
      tx_farmacologico: 'Analgesia adecuada con opioides y coadyuvantes que los ahorren, en todas las fases.',
      tx_intervencionista: 'No aplica en la valoración inicial.',
      criterios_uci: 'Quemadura mayor, inhalacion, inestabilidad o trauma asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar la profundidad: puede progresar en los primeros días.',
      seguimiento_ambulatorio: 'Las quemaduras menores se manejan con primeros auxilios y cuidado de la herida.',
      pronostico: 'Las estimaciones de extensión y profundidad hechas antes del traslado, incluso por expertos, son a menudo inexactas, y la telemedicina con fotografias se propone para mejorar el triaje.',
      algoritmo: ['Detener la quemadura y retirar ropa y joyas', 'Enfriar con agua y abrigar después', 'Revisión primaria: via aérea, ventilación, circulación', 'Estimar la extensión: nueves o Lund y Browder', 'No contar las superficiales', 'Revisión secundaria y profilaxis antitetanica']
    },
    {
      nombre: 'Inhalacion de humo y monóxido de carbono',
      color: '#3d5a73',
      definicion: 'Lesión respiratoria por calor o por los productos de la combustion, con tres componentes: toxicidad sistémica (monóxido de carbono y cianuro), lesión térmica de la via aérea superior y lesión química de la via aérea inferior.',
      fisiopatologia: 'La orofaringe enfria la mayoría de los gases antes de que lleguen al pulmón, pero el vapor se enfria peor y puede quemar la via aérea inferior. Los productos de la combustion producen una neumonitis química, aumentan la permeabilidad capilar y los requerimientos de líquidos, y las células necróticas se desprenden y obstruyen la via aérea. El monóxido de carbono tiene una afinidad por la hemoglobina 240 veces mayor que el oxígeno.',
      epidemiologia: 'La lesión por inhalacion aumenta el riesgo de neumonía asociada a la ventilación, los requerimientos de líquidos y la mortalidad, que en el ATLS se describe como el doble que en otros quemados.',
      factores_riesgo: ['Incendio en un espacio cerrado', 'Exposición prolongada', 'Quemaduras faciales', 'Hollin en la boca', 'Disminución del nivel de conciencia'],
      clinica: 'Ronquera, estridor, esputo carbonaceo, disnea, hollin en la orofaringe o en las cuerdas. El monóxido de carbono por debajo del 20% suele ser asintomático; por encima, cefalea y náuseas (20% a 30%), confusión (30% a 40%), coma (40% a 60%) y muerte (más del 60%). El color rojo cereza es raro.',
      criterios_dx: 'Exposición a un agente combustible y signos de humo por debajo de las cuerdas vocales en la broncoscopia. Las quemaduras faciales y el hollin no bastan por si solos, pero obligan a explorar la faringe posterior.',
      laboratorio: 'Carboxihemoglobina basal; la pulsioximetría no distingue la oxihemoglobina de la carboxihemoglobina y puede marcar 98% a 100%.',
      imagen: 'Radiografía de tórax basal; la normal no descarta la inhalacion.',
      complementarios: 'Broncoscopia para diagnóstico y limpieza de secreciones.',
      dx_diferencial: 'Intoxicación por cianuro: acidosis persistente sin otra causa sistémica.',
      tx_medico: 'Oxígeno al 100% con mascarilla con reservorio a todo expuesto: reduce la vida media de la carboxihemoglobina de unas 4 horas a unos 40 a 45 minutos, y se mantiene hasta confirmar niveles menores del 5%. Si no puede medirse y estuvo en un espacio cerrado, es razonable el oxígeno empírico al 100% de 4 a 6 horas. Cabecera y tórax elevados 30 grados si la hemodinámica lo permite y se ha descartado lesión medular.',
      tx_farmacologico: 'El tratamiento empírico del cianuro con hidroxocobalamina ha aumentado, con evidencia limitada sobre su seguridad y eficacia. El oxígeno hiperbarico tiene resultados contradictorios en la función cognitiva a largo plazo.',
      tx_intervencionista: 'Intubación precoz ante obstrucción o riesgo de ella: estridor, ronquera, uso de musculatura accesoria, quemaduras extensas y profundas de la cara o dentro de la boca, edema, dificultad para tragar, compromiso respiratorio, disminución de conciencia, quemadura circunferencial del cuello, o extensión mayor del 40% a 50%. Con alta probabilidad de inhalacion y quemadura significativa (más del 20% en el adulto, o más del 10% en menores de 10 o mayores de 50 años), intubar. Tubo de al menos 7.5 mm en el adulto, que no se recorta. Si el traslado es largo, intubar antes.',
      criterios_uci: 'Toda sospecha de inhalacion significativa, intubación o intoxicación por monóxido de carbono sintomática.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Riesgo de síndrome de dificultad respiratoria aguda: ventilación con volumen corriente bajo y presión meseta reducida. La intubación innecesaria también tiene coste: neumonía y lesión de cuerdas y tráquea.',
      seguimiento_ambulatorio: 'Vigilancia neurológica tras la intoxicación por monóxido de carbono.',
      pronostico: 'La inhalacion es uno de los tres componentes de la puntuación de Baux modificada y empeora claramente el pronóstico.',
      algoritmo: ['Sospechar en todo incendio en espacio cerrado', 'Oxígeno al 100% con reservorio a todos', 'Carboxihemoglobina: no fiarse del pulsioximetro', 'Explorar faringe posterior y cuerdas', 'Intubar pronto si hay riesgo de perder la via aérea', 'Tubo de 7.5 mm o más, sin recortar', 'Acidosis persistente: pensar en cianuro']
    },
    {
      nombre: 'Reanimación con líquidos y choque por quemadura',
      color: '#8c2e2e',
      definicion: 'Reposición de volumen en las primeras 48 horas para compensar la fuga capilar del choque por quemadura, que combina rasgos hipovolémicos, distributivos y cardiogénicos.',
      fisiopatologia: 'La respuesta inflamatoria produce una fuga capilar difusa con pérdida de proteínas, electrolitos y plasma, que reduce el volumen intravascular, compromete la perfusión y produce disoxia celular. El objetivo es mantener la perfusión de órgano sin causar la morbilidad de la sobrerreanimacion.',
      epidemiologia: 'En general requieren reanimación las quemaduras de más del 20% de superficie, y las menores si hay lesión eléctrica, inhalacion o trauma asociado.',
      factores_riesgo: ['Fórmula aplicada como volumen fijo y no titulada', 'Bolos sin hipotensión', 'Inhalacion asociada', 'Retraso en el inicio', 'Pesos extremos'],
      clinica: 'Hipovolemia y mala perfusión en las primeras horas, y en la sobrerreanimacion, síndromes compartimentales de extremidades, abdomen y órbita.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Diuresis horaria como guía principal, junto con lactato, déficit de bases, saturación venosa, presión venosa central y tensión media.',
      imagen: 'No aplica.',
      complementarios: 'Sonda vesical para medir la diuresis horaria. La glucosuria o el manitol pueden sobreestimar la perfusión al aumentar la diuresis.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Cristaloide balanceado, habitualmente Ringer lactato tibio. El ATLS inicia con 2 mL por kg y por % de superficie de espesor parcial o total en 24 horas en el adulto, la mitad en las primeras 8 horas desde la quemadura y la otra mitad en las 16 siguientes; 3 mL en el niño, añadiendo mantenimiento con dextrosa en el menor de 30 kg. La American Burn Association acepta de 2 a 4 mL. La fórmula solo fija el ritmo inicial: después se titula cada hora para una diuresis de 0.5 mL/kg/h en el adulto (30 a 50 mL/h) y 1 mL/kg/h en el niño de menos de 30 kg. No reducir a la mitad de golpe a las 8 horas: bajar según la diuresis. Evitar los bolos salvo hipotensión.',
      tx_farmacologico: 'Regla de los dieces para el adulto de 40 a 130 kg: superficie redondeada a la decena por 10 da los mL/h iniciales, sumando 100 mL/h por cada 10 kg por encima de 80. Rescate con coloide: albúmina al 5% desde las 8 horas en quien se prevea una reanimación masiva (más de 1500 mL/h durante 2 horas o más de 250 mL/kg en 24 horas); el plasma reduce volúmenes y el síndrome compartimental abdominal. La vitamina C a dosis altas y la hemofiltracion de alto volumen se estudian; la vitamina C falsea la glucemia capilar.',
      tx_intervencionista: 'Descompresión urgente de los síndromes compartimentales.',
      criterios_uci: 'Toda quemadura que requiera reanimación de volumen significativa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación seriada de la morbilidad de la reanimación: presión intraabdominal, compartimentos de las extremidades y órbitas.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Tanto la reanimación insuficiente como la excesiva causan morbilidad, y la fórmula es un punto de partida, no un objetivo.',
      algoritmo: ['Calcular el ritmo inicial: 2 mL/kg/% en el adulto', 'Ringer lactato tibio, mitad en las primeras 8 h', 'Titular cada hora por la diuresis', 'Adulto 0.5 mL/kg/h; niño 1 mL/kg/h', 'Sin bolos salvo hipotensión', 'Reanimación masiva: albúmina o plasma', 'Vigilar compartimentos']
    },
    {
      nombre: 'Quemaduras circunferenciales, eléctricas y químicas',
      color: '#5a4a8c',
      definicion: 'Situaciones especiales en las que la quemadura compromete la circulación o la ventilación, o produce un daño mucho mayor que el visible.',
      fisiopatologia: 'La escara inextensible de una quemadura circunferencial actúa como un torniquete a medida que se forma el edema. En la quemadura eléctrica, la diferente disipación del calor entre tejidos superficiales y profundos permite una piel casi sana sobre una necrosis muscular profunda; la corriente por vasos y nervios produce trombosis y lesión nerviosa, y la rabdomiólisis libera mioglobina.',
      epidemiologia: 'Las eléctricas suponen un 3.6% y las químicas un 3.5% de las quemaduras en el registro estadounidense, pero son criterio de traslado en todos los casos.',
      factores_riesgo: ['Quemadura circunferencial de extremidad, cuello, tórax o abdomen', 'Alto voltaje (más de 1000 V)', 'Puno cerrado con entrada eléctrica pequeña', 'Alcalis frente a ácidos', 'Contaminación de los rescatadores'],
      clinica: 'Circunferencial: cianosis, relleno lento, parestesias y dolor profundo distal; en tórax y abdomen, aumento de la presión pico o síndrome compartimental abdominal. Síndrome compartimental: dolor desproporcionado, dolor al estiramiento pasivo, tensión y parestesias. Eléctrica: lesión que es más grave de lo que aparenta, arritmias, orina rojo oscura.',
      criterios_dx: 'Valoración clínica de la circulación distal; Doppler para el pulso.',
      laboratorio: 'Creatincinasa y mioglobina en la eléctrica.',
      imagen: 'Electrocardiograma en la eléctrica.',
      complementarios: 'Monitorización del ritmo prolongada en la eléctrica si hay lesión, pérdida de conciencia, alto voltaje o arritmias iniciales.',
      dx_diferencial: 'Lesiones esqueléticas o musculares por la contracción forzada en la eléctrica, incluida la fractura vertebral.',
      tx_medico: 'Circunferencial: retirar joyas y pulseras, comprobar la circulación distal. Química: lavado con abundante agua tibia al menos 20 a 30 minutos; sin neutralizantes. Eléctrica: via aérea y ventilación, via venosa en la extremidad no afectada, monitorización y sonda vesical.',
      tx_farmacologico: 'Mioglobinuria: no esperar al laboratorio; aumentar los líquidos a 4 mL/kg por % para una diuresis de 100 mL/h en el adulto (1 a 1.5 mL/kg/h en el niño de menos de 30 kg) hasta que la orina se aclare, y después volver a 0.5 mL/kg/h. Consultar con la unidad de quemados antes de usar bicarbonato o manitol.',
      tx_intervencionista: 'Escarotomia para liberar la circulación de una extremidad o la ventilación del tórax, siempre con interconsulta quirúrgica; rara vez es necesaria en las primeras 6 horas. En el tórax y el abdomen, incisiones por debajo de la línea axilar anterior. Fasciotomia en lesiones musculoesqueleticas, aplastamiento o eléctricas, frecuente en las eléctricas graves.',
      criterios_uci: 'Eléctrica de alto voltaje, rabdomiólisis o síndrome compartimental.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia seriada de la circulación distal y de la presión intraabdominal.',
      seguimiento_ambulatorio: 'Secuelas neurológicas y funcionales en la eléctrica.',
      pronostico: 'La quemadura por frío se trata al revés que la térmica: recalentamiento húmedo, posible trombólisis y espera vigilada, no cirugía inmediata.',
      algoritmo: ['Retirar joyas en toda extremidad quemada', 'Vigilar circulación distal con Doppler', 'Escarotomia si compromete circulación o ventilación', 'Química: agua tibia abundante, 20 a 30 min, sin neutralizar', 'Eléctrica: monitor, sonda y buscar lesión profunda', 'Orina oscura: 4 mL/kg/% y diuresis de 100 mL/h']
    },
    {
      nombre: 'Respuesta hipermetabolica, herida e infección',
      color: '#3f6b52',
      definicion: 'Estado de catabolismo sostenido tras la quemadura grave y conjunto de medidas de cobertura de la herida y prevención de la infección que lo atenuan.',
      fisiopatologia: 'Tras una fase hipometabolica de 72 a 96 horas (fase de reflujo), aparece una fase de flujo que puede durar hasta 36 meses, impulsada por catecolaminas, glucocorticoides, glucagon y citocinas: aumento del gasto energético en reposo, temperatura alta, pérdida de proteínas, atrofia muscular, resistencia a la insulina e hiperglucemia, lipolisis, hígado graso, atrofia de la mucosa intestinal con traslocacion bacteriana y lesión renal.',
      epidemiologia: 'La sepsis y el fallo multiorgánico son las principales causas de muerte del gran quemado.',
      factores_riesgo: ['Gran extensión y profundidad', 'Inhalacion asociada', 'Retraso en la escision', 'Dispositivos invasivos', 'Edad avanzada y desnutrición'],
      clinica: 'Taquicardia, hipertermia, pérdida de peso y masa muscular, hiperglucemia y mala cicatrización.',
      criterios_dx: 'Sepsis: tres definiciones (American Burn Association, Mann-Salinas y Sepsis-3); Sepsis-3 fue la más exacta, pero solo en el 85% de los quemados.',
      laboratorio: 'Glucemia, cultivos y marcadores según la sospecha.',
      imagen: 'Según el foco.',
      complementarios: 'Soporte nutricional precoz.',
      dx_diferencial: 'La respuesta inflamatoria de la propia quemadura frente a la infección: es la gran dificultad diagnóstica.',
      tx_medico: 'Cuidados de soporte orientados a la cicatrización y a evitar las complicaciones hospitalarias: tromboembolia, úlcera de estrés, neumonía, bacteriemia por catéter e infección urinaria por sonda.',
      tx_farmacologico: 'Antimicrobianos tópicos en cremas o apositos. Agentes anabólicos (oxandrolona) y reductores del catabolismo (propranolol) para mitigar el hipermetabolismo.',
      tx_intervencionista: 'La escision precoz y el injerto son el tratamiento de referencia: atenuan el estado hipermetabólico, retiran el foco de inflamación e infección y permiten movilizar antes. Antes, la espera hasta que la escara se desprendia llevaba a muchos pacientes a la sepsis.',
      criterios_uci: 'Sepsis, fallo de órgano o necesidad de ventilación prolongada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rehabilitación desde el ingreso: posición de los miembros, ferulas y movilización progresiva incluso en el paciente ventilado; más tiempo de terapia se asoció a menos contracturas.',
      seguimiento_ambulatorio: 'El hipermetabolismo y sus consecuencias persisten durante años, y la quemadura afecta la morbilidad y mortalidad durante al menos 5 a 10 años.',
      pronostico: 'Las cicatrices hipertróficas y queloides, el dolor y el prurito afectan la calidad de vida y requieren tratamiento propio.',
      algoritmo: ['Escision precoz e injerto', 'Antimicrobiano tópico', 'Nutrición precoz', 'Propranolol y oxandrolona contra el catabolismo', 'Prevenir las infecciones hospitalarias', 'Rehabilitación desde el primer dia']
    },
    {
      nombre: 'Triaje, traslado y pronóstico',
      color: '#8a5a2e',
      definicion: 'Decisión de trasladar al paciente a un centro de quemados y estimación del pronóstico, que en la quemadura tiene una relación dosis-respuesta muy fiable.',
      fisiopatologia: 'No aplica.',
      epidemiologia: 'Más del 95% de las muertes por fuego ocurren en países de ingresos bajos y medios, donde escasean los centros con experiencia. Incluso en Estados Unidos, hasta el 20% de la población vive a más de 2 horas de un centro de quemados verificado.',
      factores_riesgo: ['Edad avanzada', 'Gran extensión', 'Inhalacion', 'Comorbilidad previa', 'Trauma asociado'],
      clinica: 'El paciente que hay que decidir si se traslada y como.',
      criterios_dx: 'Criterios de la American Burn Association que recoge el ATLS: espesor parcial de más del 10%; cara, manos, pies, genitales, periné y grandes articulaciones; tercer grado a cualquier edad; eléctricas, incluido el rayo; químicas; inhalacion; comorbilidad que complique; trauma asociado en el que la quemadura sea el mayor riesgo; niños en hospitales sin personal o equipo; y necesidad de apoyo social, emocional o de rehabilitación.',
      laboratorio: 'Toda la información, incluidos los resultados, debe acompañar al paciente.',
      imagen: 'No aplica.',
      complementarios: 'Telemedicina con fotografias para ayudar al triaje antes del traslado.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Estabilizar antes del traslado: via aérea (intubar si el trayecto es largo y hay sospecha de inhalacion), vías venosas largas por el edema, líquidos calculados y sonda vesical. Si el trauma es el riesgo inmediato mayor, estabilizar en un centro de trauma y después trasladar. El transporte aéreo se recomienda si el terrestre supera las 2 horas o los 100 km.',
      tx_farmacologico: 'Analgesia y profilaxis antitetanica antes de salir.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Quemadura mayor e inhalacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cribado precoz de depresión, estrés agudo y consumo de sustancias.',
      seguimiento_ambulatorio: 'El paciente no esta recuperado cuando cierran las heridas: salud mental, cicatrices, dolor, retorno al trabajo y calidad de vida.',
      pronostico: 'La puntuación de Baux suma la edad y la superficie, que contribuyen por igual a la mortalidad prevista; la versión modificada añade la inhalacion y es el predictor más aceptado. Las preferencias del paciente sobre su calidad de vida deben entrar en las decisiones.',
      algoritmo: ['Comprobar los criterios de traslado', 'Consultar con el centro de quemados', 'Asegurar la via aérea antes de un traslado largo', 'Líquidos calculados y sonda vesical', 'Trauma inmediato: estabilizar primero', 'Estimar el pronóstico con Baux modificado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El Primer divide la atención del gran quemado en cinco fases que se solapan: valoración inicial y triaje, reanimación con líquidos en las primeras 48 horas, cobertura de la herida, cuidados de soporte y críticos, y rehabilitación.',
    parametros: [
      'Fase I: detener la quemadura, revisión primaria y secundaria, estimar la superficie y empezar la reanimación.',
      'Fase II: titular el ritmo de líquidos cada hora por la diuresis; albúmina precoz si la reanimación se dispara.',
      'Vigilar los síndromes compartimentales de extremidades, abdomen y órbita.',
      'Oxígeno al 100% hasta carboxihemoglobina menor del 5% en todo expuesto a humo.',
      'Fase III: antimicrobiano tópico, escision precoz e injerto o sustituto cutáneo temporal.',
      'Fase IV: prevenir infecciones hospitalarias, soporte de órganos y nutrición.',
      'Fase V: posición de los miembros, rehabilitación activa, propranolol y oxandrolona, y apoyo psicosocial.',
      'Analgesia adecuada en todas las fases.'
    ],
    criterios_uci_general: 'Quemadura mayor, lesión por inhalacion, intoxicación por monóxido de carbono sintomática, quemadura eléctrica de alto voltaje, síndrome compartimental, sepsis o fallo de órgano.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Las estrategias de prevención han reducido las quemaduras en los países de ingresos altos: regular la temperatura del agua caliente, detectores de humo y programas dirigidos a las causas locales. En los entornos con pocos recursos, la formación del personal de los centros básicos es esencial.'
  }
};

export const compCites = {
  'Valoración inicial: extensión y profundidad': { fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1, 2], tx_medico: [1], laboratorio: [1, 2], tx_farmacologico: [1] },
  'Inhalacion de humo y monóxido de carbono': { clinica: [2], tx_medico: [1, 2], tx_intervencionista: [2], criterios_dx: [2], tx_farmacologico: [1], laboratorio: [2] },
  'Reanimación con líquidos y choque por quemadura': { tx_medico: [1, 2], tx_farmacologico: [1], fisiopatologia: [1], laboratorio: [1, 2] },
  'Quemaduras circunferenciales, eléctricas y químicas': { tx_medico: [1, 2], tx_farmacologico: [2], tx_intervencionista: [2], criterios_dx: [1, 2], laboratorio: [1, 2] },
  'Respuesta hipermetabolica, herida e infección': { fisiopatologia: [1], tx_intervencionista: [1], tx_farmacologico: [1], criterios_dx: [1], laboratorio: [1] },
  'Triaje, traslado y pronóstico': { criterios_dx: [2], tx_medico: [1, 2], pronostico: [1], epidemiologia: [1], laboratorio: [2], tx_farmacologico: [2] }
};

export const estigmasTitulo = 'Lo que hay que buscar al recibir al paciente';
export const estigmas = [
  { nombre: 'Hollin en la boca o quemaduras faciales', descripcion: 'No indican por si solos inhalacion, pero obligan a explorar la faringe posterior: eritema, edema, esfacelos u hollin en las cuerdas.' },
  { nombre: 'Ronquera y estridor', descripcion: 'Signos de obstrucción de la via aérea. El estridor puede ser tardío e indica intubación inmediata.' },
  { nombre: 'Pulsioximetría normal tras un incendio', descripcion: 'No descarta el monóxido de carbono: el pulsioximetro no distingue la carboxihemoglobina. Hace falta la gasometría.' },
  { nombre: 'Quemadura seca, blanca e insensible', descripcion: 'Espesor total: paradójicamente casi sin dolor porque destruye las terminaciones nerviosas. Necesita cirugía salvo que sea muy pequeña.' },
  { nombre: 'Quemadura circunferencial', descripcion: 'En una extremidad puede comprometer la circulación distal; en el tórax, la ventilación; en el cuello, la via aérea. Puede necesitar escarotomia.' },
  { nombre: 'Orina rojo oscura', descripcion: 'En la quemadura eléctrica, mioglobinuria. Se trata sin esperar al laboratorio: más líquidos y diuresis de 100 mL/h.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Regla de los nueves (calculadora disponible)': [1, 2],
  'Volumen de reanimación (calculadora disponible)': [1, 2],
  'Puntuación de Baux (calculadora disponible)': [1],
  'Criterios de traslado (calculadora disponible)': [2],
  'Profundidad de la quemadura': [1],
  'Criterios de sepsis en el quemado': [1]
};

export const escalaCalc = {
  'Regla de los nueves (calculadora disponible)': 'regla-nueves',
  'Volumen de reanimación (calculadora disponible)': 'parkland-atls',
  'Puntuación de Baux (calculadora disponible)': 'baux',
  'Criterios de traslado (calculadora disponible)': 'traslado-quemados'
};

export const compGroups = [
  { title: 'Al recibirlo', items: ['Valoración inicial: extensión y profundidad', 'Inhalacion de humo y monóxido de carbono'] },
  { title: 'Las primeras 48 horas', items: ['Reanimación con líquidos y choque por quemadura', 'Quemaduras circunferenciales, eléctricas y químicas'] },
  { title: 'Despues', items: ['Respuesta hipermetabolica, herida e infección', 'Triaje, traslado y pronóstico'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son lo que se hace al recibir al quemado: estimar la extensión y la profundidad, de las que depende todo lo demás, y no perder la via aérea por una inhalacion que al principio puede no dar nada. Las dos siguientes son las primeras 48 horas: los líquidos, que se calculan con una fórmula pero se titulan por la diuresis, y las quemaduras que comprometen la circulación o esconden un daño mayor del que se ve. Las dos últimas son lo que viene después: el hipermetabolismo, la herida y la infección, y la decisión de trasladar.';

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
  root: { title: 'QUEMADURAS', color: '#a0522d', target: 'definicion' },
  branches: [
    { title: 'Al recibirlo', sub: 'Extensión y via aérea', color: '#a0522d', target: 'complicaciones', leaves: [
      { title: 'Regla de los nueves', sub: 'Sin las superficiales', color: '#a0522d', target: 'complicaciones' },
      { title: 'Inhalacion y CO', sub: 'Oxígeno al 100%', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Primeras 48 h', sub: 'Líquidos titulados', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Parkland', sub: '2 mL/kg/%, diuresis', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Especiales', sub: 'Circunferencial, eléctrica', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'Despues', sub: 'Herida y traslado', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Hipermetabolismo', sub: 'Escision precoz', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Traslado', sub: 'Criterios y Baux', color: '#8a5a2e', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 2], imagen: [2] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1];
export const figurasDefinicion = ['quemadura-profundidad'];
export const figurasClasificacion = ['quemadura-nueves', 'quemadura-liquidos'];

export const figuras = {
  'quemadura-profundidad': {
    titulo: 'Profundidad: como se reconoce y que implica',
    fuente: 'Adaptado de la figura 1 de Jeschke MG, et al. Burn injury. Nat Rev Dis Primers 2020;6:11.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Profundidad</th><th>Aspecto</th><th>Dolor</th><th>Evolución</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Superficial (primer grado)</td><td>Roja, sin ampollas</td><td>Doloroso</td><td>Cura sin cicatriz; no cuenta para la superficie</td></tr>
            <tr><td class="figure-org">Espesor parcial superficial</td><td>Ampollas, exudado, hiperemica, palidece a la presión</td><td>Muy dolorosa</td><td>Cura sin cirugía; puede dejar cicatriz</td></tr>
            <tr><td class="figure-org">Espesor parcial profundo</td><td>Más seca, eritema reticular, no palidece</td><td>Menos dolorosa</td><td><span class="figure-tag fail">Cirugía</span> y cicatriz</td></tr>
            <tr><td class="figure-org">Espesor total (tercer grado)</td><td>Seca, insensible al tacto y al pinchazo</td><td>Casi sin dolor</td><td><span class="figure-tag fail">Cirugía</span> salvo que sea muy pequeña</td></tr>
            <tr><td class="figure-org">Cuarto grado</td><td>Afecta músculo o hueso, ennegrecida</td><td>Sin dolor</td><td>Pérdida frecuente de la parte afectada</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Cuanto más profunda, mayor riesgo de infección y de cicatriz. La paradoja que conviene recordar: las quemaduras <strong>más graves duelen menos</strong>, porque destruyen las terminaciones nerviosas. Y la profundidad no es fija: la herida tiene una <strong>zona de estasis</strong> con perfusión reducida pero recuperable, que una mala reanimación puede convertir en necrosis. No hay técnicas de imagen no invasivas validadas de uso general para medirla; el láser Doppler, la ecografía armonica, la tomografía de coherencia óptica y la termografia están en estudio.</div>`
  },
  'quemadura-nueves': {
    titulo: 'Regla de los nueves en el adulto',
    fuente: 'Capitulo 9, Lesiones termicas, del manual ATLS de 10.a edicion, y Jeschke MG, et al. Nat Rev Dis Primers 2020;6:11.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Región</th><th>Porcentaje</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Cabeza y cuello</td><td>9%</td></tr>
            <tr><td class="figure-org">Cada miembro superior</td><td>9%</td></tr>
            <tr><td class="figure-org">Tronco anterior</td><td>18%</td></tr>
            <tr><td class="figure-org">Tronco posterior</td><td>18%</td></tr>
            <tr><td class="figure-org">Cada miembro inferior</td><td>18%</td></tr>
            <tr><td class="figure-org">Periné</td><td>1%</td></tr>
            <tr><td class="figure-org">Palma con dedos del paciente</td><td>Aproximadamente 1%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Solo se suman las quemaduras de <strong>espesor parcial o total</strong>: incluir las superficiales sobreestima la superficie y lleva a la sobrerreanimacion. En el <strong>niño</strong> la regla es inexacta, porque la cabeza tiene una proporción mayor y las extremidades menor; se usan los diagramas de <strong>Lund y Browder</strong>. La palma del paciente sirve para las quemaduras irregulares o salpicadas. Y la forma corporal también altera las proporciones, por ejemplo en la obesidad.</div>`
  },
  'quemadura-liquidos': {
    titulo: 'Líquidos: de la fórmula a la diuresis',
    fuente: 'Capitulo 9 del manual ATLS de 10.a edicion y fases de la reanimacion de Jeschke MG, et al. Nat Rev Dis Primers 2020;6:11.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situación</th><th>Ritmo inicial (Ringer lactato)</th><th>Diuresis objetivo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Adulto</td><td>2 mL/kg por % en 24 h, mitad en las primeras 8 h</td><td>0.5 mL/kg/h (30 a 50 mL/h)</td></tr>
            <tr><td class="figure-org">Niño</td><td>3 mL/kg por %; más mantenimiento con dextrosa si pesa menos de 30 kg</td><td>1 mL/kg/h si pesa menos de 30 kg</td></tr>
            <tr><td class="figure-org">Eléctrica con orina oscura</td><td>4 mL/kg por %</td><td>100 mL/h en el adulto hasta aclarar la orina</td></tr>
            <tr><td class="figure-org">Regla de los dieces (adulto de 40 a 130 kg)</td><td>% redondeado a la decena x 10 mL/h, más 100 mL/h por cada 10 kg por encima de 80</td><td>La misma titulación</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Ejemplo del ATLS: un adulto de 100 kg con un 80% de superficie necesita 2 x 80 x 100 = <strong>16.000 mL en 24 horas</strong>; 8.000 mL en las primeras 8 horas, a 1.000 mL/h, y el resto en las 16 siguientes. Pero la fórmula solo da el punto de partida: se <strong>titula cada hora</strong> por la diuresis, sin bajar a la mitad de golpe a las 8 horas y sin bolos salvo hipotensión. Si la reanimación se dispara (más de 1500 mL/h durante 2 horas o más de 250 mL/kg en 24 horas), el rescate con <strong>albúmina al 5%</strong> desde las 8 horas, o plasma, reduce el volumen total de cristaloide.</div>`
  }
};
