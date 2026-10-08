// topics/quemaduras/content.js - Modulo 86: Quemaduras.
// Basado en el Primer de Nature Reviews Disease Primers sobre la lesion por quemadura (Jeschke
// MG, van Baar ME, Choudhry MA, et al. Nat Rev Dis Primers 2020;6:11, doi:10.1038/s41572-020-0145-5)
// y en el capitulo 9, Lesiones termicas, del manual ATLS de 10.a edicion en espanol, ambos
// ya en Bibliografia/. Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'quemaduras',
  titulo: 'Quemaduras',
  subtitulo: 'Modulo 86 &middot; Medicina Critica',
  accent: '#a0522d',
  accentDim: '#b8734f'
};

export const definicionText = `<p style="margin:0 0 14px;">La quemadura es una destruccion tisular por transferencia de energia: calor de liquidos, solidos o llama, que son la mayoria, pero tambien friccion, frio, radiacion, quimicos o electricidad. Cada causa se comporta distinto: la llama produce una quemadura profunda inmediata, la escaldadura parece mas superficial al principio, los alcalis producen necrosis colicuativa y los acidos necrosis por coagulacion, y la <strong>electricidad</strong> puede destruir tejido profundo bajo una piel casi intacta. La OMS estima <strong>11 millones de quemaduras al a&#241;o y 180.000 muertes</strong>, el 90% en paises de ingresos bajos y medios.</p>
<p style="margin:0 0 14px;">Lo que hace unica a la quemadura grave es la <strong>respuesta del organismo</strong>: un choque distributivo por fuga capilar masiva en las primeras 48 horas y, despues, un estado <strong>hipermetabolico</strong> que puede durar hasta <strong>36 meses</strong>, con catabolismo, resistencia a la insulina, infecciones y fallo de organos. Por eso los objetivos han cambiado: ya no basta con sobrevivir, y la comunidad del trauma ha adoptado el lema de <strong>ninguna muerte, ninguna cicatriz, ningun dolor</strong>.</p>
<p style="margin:0 0 14px;">Para el clinico que recibe al paciente hay tres decisiones que no pueden esperar: la <strong>via aerea</strong> (inhalacion de humo y monoxido de carbono), el <strong>volumen</strong> de liquidos, que se calcula por el peso y la superficie quemada y se ajusta a la diuresis, y el <strong>traslado</strong> a un centro de quemados. Las tres dependen de estimar bien la extension y la profundidad, algo en lo que, segun el Primer, fallan con frecuencia incluso los expertos.</p>`;

export const bibliografia = [
  'Jeschke MG, van Baar ME, Choudhry MA, Chung KK, Gibran NS, Logsetty S. Burn injury. Nat Rev Dis Primers. 2020;6(1):11. doi:10.1038/s41572-020-0145-5.',
  'American College of Surgeons Committee on Trauma. ATLS: Soporte Vital Avanzado en Trauma. Manual del curso para estudiantes. 10.a ed. Chicago: American College of Surgeons; 2018.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La quemadura que se ve',
      tituloB: 'La quemadura que no se ve',
      compensada: 'La profundidad se reconoce por el aspecto. Superficial (primer grado): roja, dolorosa, sin ampollas, cura sin cicatriz. Espesor parcial superficial: ampollas, exudado, muy dolorosa, palidece a la presion, cura sin cirugia. Espesor parcial profundo: menos dolorosa, mas seca, no palidece, necesita cirugia y deja cicatriz. Espesor total (tercer grado): seca, insensible al tacto y al pinchazo, paradojicamente casi sin dolor. Cuarto grado: afecta musculo o hueso, ennegrecida, con perdida frecuente de la parte afectada.',
      descompensada: 'La lesion por inhalacion, que puede no dar nada al principio: la oxigenacion y la radiografia normales no la descartan porque la inflamacion tarda en desarrollarse. La intoxicacion por monoxido de carbono, con una pulsioximetria que marca 98% a 100%. La quemadura electrica, con una entrada peque&#241;a y necrosis muscular profunda. Y el trauma asociado (craneal, toracico, abdominal, fracturas, aplastamiento), que empeora el pronostico y se busca en la revision secundaria.'
    },
    laboratorio: [
      { prueba: 'Carboxihemoglobina en gasometria', utilidad: 'Diagnostica la intoxicacion por monoxido de carbono. Un nivel mayor del 10% en un paciente de un incendio sugiere inhalacion. Puede ser normal al llegar si ya recibio oxigeno, y la pulsioximetria no la detecta. La PaO2 tampoco la predice.' },
      { prueba: 'Gasometria y lactato', utilidad: 'Basal en toda quemadura con sospecha de inhalacion. Una acidosis persistente sin otra causa sistemica orienta a intoxicacion por cianuro.' },
      { prueba: 'Hemograma, electrolitos y coagulacion', utilidad: 'El Primer los incluye en la analitica inicial de toda quemadura de 15% de superficie o mas, junto con la gasometria.' },
      { prueba: 'Creatincinasa y mioglobina en orina', utilidad: 'En la quemadura electrica, por la rabdomiolisis. Si la orina es rojo oscura, se asume que hay hemocromogenos sin esperar al laboratorio.' },
      { prueba: 'Glucemia', utilidad: 'La hiperglucemia con resistencia a la insulina forma parte de la respuesta hipermetabolica y de los criterios de sepsis de la American Burn Association.' },
      { prueba: 'Cribado de microorganismos multirresistentes', utilidad: 'Al ingreso, para orientar el antibiotico si aparece una infeccion.' }
    ],
    no_invasivos: [
      { metodo: 'Regla de los nueves (calculadora disponible)', interpretacion: 'Estima la superficie quemada en el adulto con regiones de 9% o multiplos. La palma de la mano del paciente, con los dedos, es aproximadamente un 1%.', cutoff: 'Solo cuentan las de espesor parcial o total, no las superficiales' },
      { metodo: 'Volumen de reanimacion (calculadora disponible)', interpretacion: 'Formula de Parkland ajustada segun el ATLS, con la regla de los dieces para comparar.', cutoff: '2 mL/kg por % de superficie en el adulto; diuresis 0.5 mL/kg/h' },
      { metodo: 'Puntuacion de Baux (calculadora disponible)', interpretacion: 'Suma la edad y el porcentaje de superficie quemada, y la version modificada a&#241;ade la lesion por inhalacion.', cutoff: 'A mayor puntuacion, mayor mortalidad prevista' },
      { metodo: 'Criterios de traslado (calculadora disponible)', interpretacion: 'Criterios de la American Burn Association que recoge el ATLS para trasladar a un centro de quemados.', cutoff: 'Espesor parcial mayor del 10%, zonas especiales, tercer grado, electrica, quimica, inhalacion' },
      { metodo: 'Diagramas de Lund y Browder', interpretacion: 'Para el ni&#241;o, cuya cabeza es proporcionalmente mayor y sus extremidades menores que en el adulto. La regla de los nueves es inexacta en el.', cutoff: 'Preferidos en pediatria' },
      { metodo: 'Doppler del pulso distal', interpretacion: 'En las quemaduras circunferenciales de extremidades, el pulso se valora con mas precision por Doppler.', cutoff: 'Junto a cianosis, relleno lento, parestesias y dolor profundo' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Basal en la sospecha de inhalacion. Una radiografia normal al ingreso no la descarta: puede deteriorarse con el tiempo.' },
      { modalidad: 'Broncoscopia', hallazgos: 'La American Burn Association exige para el diagnostico de lesion por inhalacion la exposicion a un agente combustible y signos de humo por debajo de las cuerdas vocales en la broncoscopia. Tambien sirve para retirar secreciones y restos necroticos.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'Puede mostrar la inflamacion y obstruccion de la via aerea peque&#241;a en la lesion de la via aerea inferior.' },
      { modalidad: 'Electrocardiograma', hallazgos: 'En la quemadura electrica: la corriente puede causar arritmias y parada. Monitorizacion prolongada si hay lesion por la quemadura, perdida de conciencia, alto voltaje (mas de 1000 V) o arritmias en la valoracion inicial.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por <strong>profundidad</strong> (superficial, espesor parcial superficial y profundo, espesor total y cuarto grado), por <strong>extension</strong> en porcentaje de superficie corporal y por <strong>causa</strong> (termica, quimica, electrica, por frio). Con las tres se decide si es <strong>menor o mayor</strong>: menor suele ser la de menos del 10% de superficie con predominio superficial; para la mayor no hay un umbral unico, y el Primer da como orientacion mas del 10% en el anciano, mas del 20% en el adulto y mas del 30% en el ni&#241;o. A partir de un 20% de superficie suele necesitarse reanimacion con liquidos, aunque quemaduras menores la requieren si hay lesion electrica, inhalacion o trauma asociado.`,
    escalas: [
      { nombre: 'Regla de los nueves (calculadora disponible)', componentes: 'Cabeza y cuello 9%, cada miembro superior 9%, tronco anterior 18%, tronco posterior 18%, cada miembro inferior 18%, perine 1%. Palma con dedos, 1%.', formula: 'Suma de las regiones con quemadura de espesor parcial o total.', interpretacion: 'Herramienta preferida para calcular y documentar la extension en el adulto. No se incluyen las quemaduras superficiales. Las estimaciones previas al traslado son a menudo inexactas, incluso por expertos.' },
      { nombre: 'Volumen de reanimacion (calculadora disponible)', componentes: 'Peso, porcentaje de superficie de espesor parcial o total, edad y tipo de quemadura.', formula: 'Adulto: 2 mL de Ringer lactato por kg y por %; ni&#241;o: 3 mL; electrica con mioglobinuria: 4 mL. La mitad en las primeras 8 horas desde la quemadura.', interpretacion: 'La formula solo da el ritmo inicial. Despues se titula por la diuresis: 0.5 mL/kg/h en el adulto (30 a 50 mL/h) y 1 mL/kg/h en el ni&#241;o de menos de 30 kg. La American Burn Association acepta de 2 a 4 mL/kg por %.' },
      { nombre: 'Puntuacion de Baux (calculadora disponible)', componentes: 'Edad y porcentaje de superficie quemada; la version modificada a&#241;ade la lesion por inhalacion.', formula: 'Baux = edad + % de superficie. Modificada: a&#241;ade puntos si hay inhalacion.', interpretacion: 'La quemadura tiene una relacion dosis-respuesta fiable: a mayor superficie, peor resultado. La version modificada es hoy el predictor mas aceptado y se aplica en un amplio rango de edades, ni&#241;os incluidos.' },
      { nombre: 'Criterios de traslado (calculadora disponible)', componentes: 'Extension, localizacion, profundidad, causa, inhalacion, comorbilidad, trauma, edad y necesidades sociales.', formula: 'Basta un criterio para plantear el traslado.', interpretacion: 'Como los criterios son amplios, puede consultarse al centro de quemados y acordar otro plan, por ejemplo cuando una quemadura de mano o cara puede curarse bien en el lugar de origen.' },
      { nombre: 'Profundidad de la quemadura', componentes: 'Superficial, espesor parcial superficial, espesor parcial profundo, espesor total y cuarto grado.', formula: 'Valoracion clinica: aspecto, ampollas, exudado, sensibilidad y blanqueo.', interpretacion: 'Decide la necesidad de cirugia: las superficiales y de espesor parcial superficial curan sin ella; las de espesor parcial profundo y total la necesitan, salvo las muy peque&#241;as. No hay tecnicas de imagen no invasivas validadas para medirla de forma generalizada.' },
      { nombre: 'Criterios de sepsis en el quemado', componentes: 'American Burn Association (tres de: temperatura mayor de 39 o menor de 36.5, taquicardia progresiva mayor de 110, taquipnea progresiva, trombocitopenia, hiperglucemia, intolerancia a la nutricion enteral 24 h, mas infeccion), Mann-Salinas y Sepsis-3.', formula: 'Tres definiciones distintas.', interpretacion: 'En un estudio comparativo, Sepsis-3 fue la mas exacta de las tres, pero solo acerto en el 85% de los quemados. La sepsis y el fallo multiorganico son las principales causas de muerte.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Valoracion inicial: extension y profundidad',
      color: '#a0522d',
      definicion: 'Evaluacion sistematica del quemado con revision primaria y secundaria, que estima la extension y la profundidad de las que dependen los liquidos, el triaje y el pronostico.',
      fisiopatologia: 'Inmediatamente tras la lesion la herida tiene tres zonas: de coagulacion en el centro, con el mayor da&#241;o; de estasis o isquemia, con perfusion reducida pero potencialmente recuperable; y de hiperemia en la periferia. La zona de estasis es la que una mala reanimacion puede convertir en necrosis.',
      epidemiologia: 'En Estados Unidos, el registro nacional de la American Burn Association de 2019 recoge que la llama causa el 41% de las quemaduras y la escaldadura el 31%; las quimicas (3.5%) y electricas (3.6%) son mucho menos frecuentes. En menores de 5 a&#241;os predomina la escaldadura.',
      factores_riesgo: ['Edades extremas', 'Epilepsia', 'Cocina con fuego abierto y ropa holgada', 'Consumo de alcohol o drogas', 'Violencia domestica'],
      clinica: 'Primero detener el proceso de quemadura: apagar las llamas, retirar ropa y joyas, enfriar con agua y despues abrigar para evitar la hipotermia. Revision primaria ordenada y revision secundaria completa.',
      criterios_dx: 'Extension por la regla de los nueves en el adulto y por Lund y Browder en el ni&#241;o; profundidad por el aspecto clinico. Las quemaduras superficiales no cuentan para el calculo.',
      laboratorio: 'En quemaduras de 15% o mas: hemograma, electrolitos, coagulacion y gasometria.',
      imagen: 'Segun el trauma asociado.',
      complementarios: 'Profilaxis antitetanica, porque la quemadura es una herida abierta.',
      dx_diferencial: 'Lesiones por maltrato: el mecanismo y el patron de la lesion deben coincidir con la historia.',
      tx_medico: 'Primeros auxilios: agua fresca para detener la quemadura y aliviar el dolor, cuidando de no provocar hipotermia; quitar ropa y joyas; nunca remedios caseros (mantequilla, limon, pasta de dientes, agua oxigenada, cebolla), que da&#241;an mas el tejido. En las quimicas, lavado abundante; los neutralizantes estan contraindicados porque generan calor.',
      tx_farmacologico: 'Analgesia adecuada con opioides y coadyuvantes que los ahorren, en todas las fases.',
      tx_intervencionista: 'No aplica en la valoracion inicial.',
      criterios_uci: 'Quemadura mayor, inhalacion, inestabilidad o trauma asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar la profundidad: puede progresar en los primeros dias.',
      seguimiento_ambulatorio: 'Las quemaduras menores se manejan con primeros auxilios y cuidado de la herida.',
      pronostico: 'Las estimaciones de extension y profundidad hechas antes del traslado, incluso por expertos, son a menudo inexactas, y la telemedicina con fotografias se propone para mejorar el triaje.',
      algoritmo: ['Detener la quemadura y retirar ropa y joyas', 'Enfriar con agua y abrigar despues', 'Revision primaria: via aerea, ventilacion, circulacion', 'Estimar la extension: nueves o Lund y Browder', 'No contar las superficiales', 'Revision secundaria y profilaxis antitetanica']
    },
    {
      nombre: 'Inhalacion de humo y monoxido de carbono',
      color: '#3d5a73',
      definicion: 'Lesion respiratoria por calor o por los productos de la combustion, con tres componentes: toxicidad sistemica (monoxido de carbono y cianuro), lesion termica de la via aerea superior y lesion quimica de la via aerea inferior.',
      fisiopatologia: 'La orofaringe enfria la mayoria de los gases antes de que lleguen al pulmon, pero el vapor se enfria peor y puede quemar la via aerea inferior. Los productos de la combustion producen una neumonitis quimica, aumentan la permeabilidad capilar y los requerimientos de liquidos, y las celulas necroticas se desprenden y obstruyen la via aerea. El monoxido de carbono tiene una afinidad por la hemoglobina 240 veces mayor que el oxigeno.',
      epidemiologia: 'La lesion por inhalacion aumenta el riesgo de neumonia asociada a la ventilacion, los requerimientos de liquidos y la mortalidad, que en el ATLS se describe como el doble que en otros quemados.',
      factores_riesgo: ['Incendio en un espacio cerrado', 'Exposicion prolongada', 'Quemaduras faciales', 'Hollin en la boca', 'Disminucion del nivel de conciencia'],
      clinica: 'Ronquera, estridor, esputo carbonaceo, disnea, hollin en la orofaringe o en las cuerdas. El monoxido de carbono por debajo del 20% suele ser asintomatico; por encima, cefalea y nauseas (20% a 30%), confusion (30% a 40%), coma (40% a 60%) y muerte (mas del 60%). El color rojo cereza es raro.',
      criterios_dx: 'Exposicion a un agente combustible y signos de humo por debajo de las cuerdas vocales en la broncoscopia. Las quemaduras faciales y el hollin no bastan por si solos, pero obligan a explorar la faringe posterior.',
      laboratorio: 'Carboxihemoglobina basal; la pulsioximetria no distingue la oxihemoglobina de la carboxihemoglobina y puede marcar 98% a 100%.',
      imagen: 'Radiografia de torax basal; la normal no descarta la inhalacion.',
      complementarios: 'Broncoscopia para diagnostico y limpieza de secreciones.',
      dx_diferencial: 'Intoxicacion por cianuro: acidosis persistente sin otra causa sistemica.',
      tx_medico: 'Oxigeno al 100% con mascarilla con reservorio a todo expuesto: reduce la vida media de la carboxihemoglobina de unas 4 horas a unos 40 a 45 minutos, y se mantiene hasta confirmar niveles menores del 5%. Si no puede medirse y estuvo en un espacio cerrado, es razonable el oxigeno empirico al 100% de 4 a 6 horas. Cabecera y torax elevados 30 grados si la hemodinamica lo permite y se ha descartado lesion medular.',
      tx_farmacologico: 'El tratamiento empirico del cianuro con hidroxocobalamina ha aumentado, con evidencia limitada sobre su seguridad y eficacia. El oxigeno hiperbarico tiene resultados contradictorios en la funcion cognitiva a largo plazo.',
      tx_intervencionista: 'Intubacion precoz ante obstruccion o riesgo de ella: estridor, ronquera, uso de musculatura accesoria, quemaduras extensas y profundas de la cara o dentro de la boca, edema, dificultad para tragar, compromiso respiratorio, disminucion de conciencia, quemadura circunferencial del cuello, o extension mayor del 40% a 50%. Con alta probabilidad de inhalacion y quemadura significativa (mas del 20% en el adulto, o mas del 10% en menores de 10 o mayores de 50 a&#241;os), intubar. Tubo de al menos 7.5 mm en el adulto, que no se recorta. Si el traslado es largo, intubar antes.',
      criterios_uci: 'Toda sospecha de inhalacion significativa, intubacion o intoxicacion por monoxido de carbono sintomatica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Riesgo de sindrome de dificultad respiratoria aguda: ventilacion con volumen corriente bajo y presion meseta reducida. La intubacion innecesaria tambien tiene coste: neumonia y lesion de cuerdas y traquea.',
      seguimiento_ambulatorio: 'Vigilancia neurologica tras la intoxicacion por monoxido de carbono.',
      pronostico: 'La inhalacion es uno de los tres componentes de la puntuacion de Baux modificada y empeora claramente el pronostico.',
      algoritmo: ['Sospechar en todo incendio en espacio cerrado', 'Oxigeno al 100% con reservorio a todos', 'Carboxihemoglobina: no fiarse del pulsioximetro', 'Explorar faringe posterior y cuerdas', 'Intubar pronto si hay riesgo de perder la via aerea', 'Tubo de 7.5 mm o mas, sin recortar', 'Acidosis persistente: pensar en cianuro']
    },
    {
      nombre: 'Reanimacion con liquidos y choque por quemadura',
      color: '#8c2e2e',
      definicion: 'Reposicion de volumen en las primeras 48 horas para compensar la fuga capilar del choque por quemadura, que combina rasgos hipovolemicos, distributivos y cardiogenicos.',
      fisiopatologia: 'La respuesta inflamatoria produce una fuga capilar difusa con perdida de proteinas, electrolitos y plasma, que reduce el volumen intravascular, compromete la perfusion y produce disoxia celular. El objetivo es mantener la perfusion de organo sin causar la morbilidad de la sobrerreanimacion.',
      epidemiologia: 'En general requieren reanimacion las quemaduras de mas del 20% de superficie, y las menores si hay lesion electrica, inhalacion o trauma asociado.',
      factores_riesgo: ['Formula aplicada como volumen fijo y no titulada', 'Bolos sin hipotension', 'Inhalacion asociada', 'Retraso en el inicio', 'Pesos extremos'],
      clinica: 'Hipovolemia y mala perfusion en las primeras horas, y en la sobrerreanimacion, sindromes compartimentales de extremidades, abdomen y orbita.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Diuresis horaria como guia principal, junto con lactato, deficit de bases, saturacion venosa, presion venosa central y tension media.',
      imagen: 'No aplica.',
      complementarios: 'Sonda vesical para medir la diuresis horaria. La glucosuria o el manitol pueden sobreestimar la perfusion al aumentar la diuresis.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Cristaloide balanceado, habitualmente Ringer lactato tibio. El ATLS inicia con 2 mL por kg y por % de superficie de espesor parcial o total en 24 horas en el adulto, la mitad en las primeras 8 horas desde la quemadura y la otra mitad en las 16 siguientes; 3 mL en el ni&#241;o, a&#241;adiendo mantenimiento con dextrosa en el menor de 30 kg. La American Burn Association acepta de 2 a 4 mL. La formula solo fija el ritmo inicial: despues se titula cada hora para una diuresis de 0.5 mL/kg/h en el adulto (30 a 50 mL/h) y 1 mL/kg/h en el ni&#241;o de menos de 30 kg. No reducir a la mitad de golpe a las 8 horas: bajar segun la diuresis. Evitar los bolos salvo hipotension.',
      tx_farmacologico: 'Regla de los dieces para el adulto de 40 a 130 kg: superficie redondeada a la decena por 10 da los mL/h iniciales, sumando 100 mL/h por cada 10 kg por encima de 80. Rescate con coloide: albumina al 5% desde las 8 horas en quien se prevea una reanimacion masiva (mas de 1500 mL/h durante 2 horas o mas de 250 mL/kg en 24 horas); el plasma reduce volumenes y el sindrome compartimental abdominal. La vitamina C a dosis altas y la hemofiltracion de alto volumen se estudian; la vitamina C falsea la glucemia capilar.',
      tx_intervencionista: 'Descompresion urgente de los sindromes compartimentales.',
      criterios_uci: 'Toda quemadura que requiera reanimacion de volumen significativa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Evaluacion seriada de la morbilidad de la reanimacion: presion intraabdominal, compartimentos de las extremidades y orbitas.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Tanto la reanimacion insuficiente como la excesiva causan morbilidad, y la formula es un punto de partida, no un objetivo.',
      algoritmo: ['Calcular el ritmo inicial: 2 mL/kg/% en el adulto', 'Ringer lactato tibio, mitad en las primeras 8 h', 'Titular cada hora por la diuresis', 'Adulto 0.5 mL/kg/h; ni&#241;o 1 mL/kg/h', 'Sin bolos salvo hipotension', 'Reanimacion masiva: albumina o plasma', 'Vigilar compartimentos']
    },
    {
      nombre: 'Quemaduras circunferenciales, electricas y quimicas',
      color: '#5a4a8c',
      definicion: 'Situaciones especiales en las que la quemadura compromete la circulacion o la ventilacion, o produce un da&#241;o mucho mayor que el visible.',
      fisiopatologia: 'La escara inextensible de una quemadura circunferencial actua como un torniquete a medida que se forma el edema. En la quemadura electrica, la diferente disipacion del calor entre tejidos superficiales y profundos permite una piel casi sana sobre una necrosis muscular profunda; la corriente por vasos y nervios produce trombosis y lesion nerviosa, y la rabdomiolisis libera mioglobina.',
      epidemiologia: 'Las electricas suponen un 3.6% y las quimicas un 3.5% de las quemaduras en el registro estadounidense, pero son criterio de traslado en todos los casos.',
      factores_riesgo: ['Quemadura circunferencial de extremidad, cuello, torax o abdomen', 'Alto voltaje (mas de 1000 V)', 'Puno cerrado con entrada electrica peque&#241;a', 'Alcalis frente a acidos', 'Contaminacion de los rescatadores'],
      clinica: 'Circunferencial: cianosis, relleno lento, parestesias y dolor profundo distal; en torax y abdomen, aumento de la presion pico o sindrome compartimental abdominal. Sindrome compartimental: dolor desproporcionado, dolor al estiramiento pasivo, tension y parestesias. Electrica: lesion que es mas grave de lo que aparenta, arritmias, orina rojo oscura.',
      criterios_dx: 'Valoracion clinica de la circulacion distal; Doppler para el pulso.',
      laboratorio: 'Creatincinasa y mioglobina en la electrica.',
      imagen: 'Electrocardiograma en la electrica.',
      complementarios: 'Monitorizacion del ritmo prolongada en la electrica si hay lesion, perdida de conciencia, alto voltaje o arritmias iniciales.',
      dx_diferencial: 'Lesiones esqueleticas o musculares por la contraccion forzada en la electrica, incluida la fractura vertebral.',
      tx_medico: 'Circunferencial: retirar joyas y pulseras, comprobar la circulacion distal. Quimica: lavado con abundante agua tibia al menos 20 a 30 minutos; sin neutralizantes. Electrica: via aerea y ventilacion, via venosa en la extremidad no afectada, monitorizacion y sonda vesical.',
      tx_farmacologico: 'Mioglobinuria: no esperar al laboratorio; aumentar los liquidos a 4 mL/kg por % para una diuresis de 100 mL/h en el adulto (1 a 1.5 mL/kg/h en el ni&#241;o de menos de 30 kg) hasta que la orina se aclare, y despues volver a 0.5 mL/kg/h. Consultar con la unidad de quemados antes de usar bicarbonato o manitol.',
      tx_intervencionista: 'Escarotomia para liberar la circulacion de una extremidad o la ventilacion del torax, siempre con interconsulta quirurgica; rara vez es necesaria en las primeras 6 horas. En el torax y el abdomen, incisiones por debajo de la linea axilar anterior. Fasciotomia en lesiones musculoesqueleticas, aplastamiento o electricas, frecuente en las electricas graves.',
      criterios_uci: 'Electrica de alto voltaje, rabdomiolisis o sindrome compartimental.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia seriada de la circulacion distal y de la presion intraabdominal.',
      seguimiento_ambulatorio: 'Secuelas neurologicas y funcionales en la electrica.',
      pronostico: 'La quemadura por frio se trata al reves que la termica: recalentamiento humedo, posible trombolisis y espera vigilada, no cirugia inmediata.',
      algoritmo: ['Retirar joyas en toda extremidad quemada', 'Vigilar circulacion distal con Doppler', 'Escarotomia si compromete circulacion o ventilacion', 'Quimica: agua tibia abundante, 20 a 30 min, sin neutralizar', 'Electrica: monitor, sonda y buscar lesion profunda', 'Orina oscura: 4 mL/kg/% y diuresis de 100 mL/h']
    },
    {
      nombre: 'Respuesta hipermetabolica, herida e infeccion',
      color: '#3f6b52',
      definicion: 'Estado de catabolismo sostenido tras la quemadura grave y conjunto de medidas de cobertura de la herida y prevencion de la infeccion que lo atenuan.',
      fisiopatologia: 'Tras una fase hipometabolica de 72 a 96 horas (fase de reflujo), aparece una fase de flujo que puede durar hasta 36 meses, impulsada por catecolaminas, glucocorticoides, glucagon y citocinas: aumento del gasto energetico en reposo, temperatura alta, perdida de proteinas, atrofia muscular, resistencia a la insulina e hiperglucemia, lipolisis, higado graso, atrofia de la mucosa intestinal con traslocacion bacteriana y lesion renal.',
      epidemiologia: 'La sepsis y el fallo multiorganico son las principales causas de muerte del gran quemado.',
      factores_riesgo: ['Gran extension y profundidad', 'Inhalacion asociada', 'Retraso en la escision', 'Dispositivos invasivos', 'Edad avanzada y desnutricion'],
      clinica: 'Taquicardia, hipertermia, perdida de peso y masa muscular, hiperglucemia y mala cicatrizacion.',
      criterios_dx: 'Sepsis: tres definiciones (American Burn Association, Mann-Salinas y Sepsis-3); Sepsis-3 fue la mas exacta, pero solo en el 85% de los quemados.',
      laboratorio: 'Glucemia, cultivos y marcadores segun la sospecha.',
      imagen: 'Segun el foco.',
      complementarios: 'Soporte nutricional precoz.',
      dx_diferencial: 'La respuesta inflamatoria de la propia quemadura frente a la infeccion: es la gran dificultad diagnostica.',
      tx_medico: 'Cuidados de soporte orientados a la cicatrizacion y a evitar las complicaciones hospitalarias: tromboembolia, ulcera de estres, neumonia, bacteriemia por cateter e infeccion urinaria por sonda.',
      tx_farmacologico: 'Antimicrobianos topicos en cremas o apositos. Agentes anabolicos (oxandrolona) y reductores del catabolismo (propranolol) para mitigar el hipermetabolismo.',
      tx_intervencionista: 'La escision precoz y el injerto son el tratamiento de referencia: atenuan el estado hipermetabolico, retiran el foco de inflamacion e infeccion y permiten movilizar antes. Antes, la espera hasta que la escara se desprendia llevaba a muchos pacientes a la sepsis.',
      criterios_uci: 'Sepsis, fallo de organo o necesidad de ventilacion prolongada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rehabilitacion desde el ingreso: posicion de los miembros, ferulas y movilizacion progresiva incluso en el paciente ventilado; mas tiempo de terapia se asocio a menos contracturas.',
      seguimiento_ambulatorio: 'El hipermetabolismo y sus consecuencias persisten durante a&#241;os, y la quemadura afecta la morbilidad y mortalidad durante al menos 5 a 10 a&#241;os.',
      pronostico: 'Las cicatrices hipertroficas y queloides, el dolor y el prurito afectan la calidad de vida y requieren tratamiento propio.',
      algoritmo: ['Escision precoz e injerto', 'Antimicrobiano topico', 'Nutricion precoz', 'Propranolol y oxandrolona contra el catabolismo', 'Prevenir las infecciones hospitalarias', 'Rehabilitacion desde el primer dia']
    },
    {
      nombre: 'Triaje, traslado y pronostico',
      color: '#8a5a2e',
      definicion: 'Decision de trasladar al paciente a un centro de quemados y estimacion del pronostico, que en la quemadura tiene una relacion dosis-respuesta muy fiable.',
      fisiopatologia: 'No aplica.',
      epidemiologia: 'Mas del 95% de las muertes por fuego ocurren en paises de ingresos bajos y medios, donde escasean los centros con experiencia. Incluso en Estados Unidos, hasta el 20% de la poblacion vive a mas de 2 horas de un centro de quemados verificado.',
      factores_riesgo: ['Edad avanzada', 'Gran extension', 'Inhalacion', 'Comorbilidad previa', 'Trauma asociado'],
      clinica: 'El paciente que hay que decidir si se traslada y como.',
      criterios_dx: 'Criterios de la American Burn Association que recoge el ATLS: espesor parcial de mas del 10%; cara, manos, pies, genitales, perine y grandes articulaciones; tercer grado a cualquier edad; electricas, incluido el rayo; quimicas; inhalacion; comorbilidad que complique; trauma asociado en el que la quemadura sea el mayor riesgo; ni&#241;os en hospitales sin personal o equipo; y necesidad de apoyo social, emocional o de rehabilitacion.',
      laboratorio: 'Toda la informacion, incluidos los resultados, debe acompa&#241;ar al paciente.',
      imagen: 'No aplica.',
      complementarios: 'Telemedicina con fotografias para ayudar al triaje antes del traslado.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Estabilizar antes del traslado: via aerea (intubar si el trayecto es largo y hay sospecha de inhalacion), vias venosas largas por el edema, liquidos calculados y sonda vesical. Si el trauma es el riesgo inmediato mayor, estabilizar en un centro de trauma y despues trasladar. El transporte aereo se recomienda si el terrestre supera las 2 horas o los 100 km.',
      tx_farmacologico: 'Analgesia y profilaxis antitetanica antes de salir.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Quemadura mayor e inhalacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cribado precoz de depresion, estres agudo y consumo de sustancias.',
      seguimiento_ambulatorio: 'El paciente no esta recuperado cuando cierran las heridas: salud mental, cicatrices, dolor, retorno al trabajo y calidad de vida.',
      pronostico: 'La puntuacion de Baux suma la edad y la superficie, que contribuyen por igual a la mortalidad prevista; la version modificada a&#241;ade la inhalacion y es el predictor mas aceptado. Las preferencias del paciente sobre su calidad de vida deben entrar en las decisiones.',
      algoritmo: ['Comprobar los criterios de traslado', 'Consultar con el centro de quemados', 'Asegurar la via aerea antes de un traslado largo', 'Liquidos calculados y sonda vesical', 'Trauma inmediato: estabilizar primero', 'Estimar el pronostico con Baux modificado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El Primer divide la atencion del gran quemado en cinco fases que se solapan: valoracion inicial y triaje, reanimacion con liquidos en las primeras 48 horas, cobertura de la herida, cuidados de soporte y criticos, y rehabilitacion.',
    parametros: [
      'Fase I: detener la quemadura, revision primaria y secundaria, estimar la superficie y empezar la reanimacion.',
      'Fase II: titular el ritmo de liquidos cada hora por la diuresis; albumina precoz si la reanimacion se dispara.',
      'Vigilar los sindromes compartimentales de extremidades, abdomen y orbita.',
      'Oxigeno al 100% hasta carboxihemoglobina menor del 5% en todo expuesto a humo.',
      'Fase III: antimicrobiano topico, escision precoz e injerto o sustituto cutaneo temporal.',
      'Fase IV: prevenir infecciones hospitalarias, soporte de organos y nutricion.',
      'Fase V: posicion de los miembros, rehabilitacion activa, propranolol y oxandrolona, y apoyo psicosocial.',
      'Analgesia adecuada en todas las fases.'
    ],
    criterios_uci_general: 'Quemadura mayor, lesion por inhalacion, intoxicacion por monoxido de carbono sintomatica, quemadura electrica de alto voltaje, sindrome compartimental, sepsis o fallo de organo.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Las estrategias de prevencion han reducido las quemaduras en los paises de ingresos altos: regular la temperatura del agua caliente, detectores de humo y programas dirigidos a las causas locales. En los entornos con pocos recursos, la formacion del personal de los centros basicos es esencial.'
  }
};

export const compCites = {
  'Valoracion inicial: extension y profundidad': { fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1, 2], tx_medico: [1] },
  'Inhalacion de humo y monoxido de carbono': { clinica: [2], tx_medico: [1, 2], tx_intervencionista: [2], criterios_dx: [2], tx_farmacologico: [1] },
  'Reanimacion con liquidos y choque por quemadura': { tx_medico: [1, 2], tx_farmacologico: [1], fisiopatologia: [1] },
  'Quemaduras circunferenciales, electricas y quimicas': { tx_medico: [1, 2], tx_farmacologico: [2], tx_intervencionista: [2] },
  'Respuesta hipermetabolica, herida e infeccion': { fisiopatologia: [1], tx_intervencionista: [1], tx_farmacologico: [1], criterios_dx: [1] },
  'Triaje, traslado y pronostico': { criterios_dx: [2], tx_medico: [1, 2], pronostico: [1], epidemiologia: [1] }
};

export const estigmasTitulo = 'Lo que hay que buscar al recibir al paciente';
export const estigmas = [
  { nombre: 'Hollin en la boca o quemaduras faciales', descripcion: 'No indican por si solos inhalacion, pero obligan a explorar la faringe posterior: eritema, edema, esfacelos u hollin en las cuerdas.' },
  { nombre: 'Ronquera y estridor', descripcion: 'Signos de obstruccion de la via aerea. El estridor puede ser tardio e indica intubacion inmediata.' },
  { nombre: 'Pulsioximetria normal tras un incendio', descripcion: 'No descarta el monoxido de carbono: el pulsioximetro no distingue la carboxihemoglobina. Hace falta la gasometria.' },
  { nombre: 'Quemadura seca, blanca e insensible', descripcion: 'Espesor total: paradojicamente casi sin dolor porque destruye las terminaciones nerviosas. Necesita cirugia salvo que sea muy peque&#241;a.' },
  { nombre: 'Quemadura circunferencial', descripcion: 'En una extremidad puede comprometer la circulacion distal; en el torax, la ventilacion; en el cuello, la via aerea. Puede necesitar escarotomia.' },
  { nombre: 'Orina rojo oscura', descripcion: 'En la quemadura electrica, mioglobinuria. Se trata sin esperar al laboratorio: mas liquidos y diuresis de 100 mL/h.' }
];

export const biopsia = null;

export const escalaRefs = {
  'Regla de los nueves (calculadora disponible)': [1, 2],
  'Volumen de reanimacion (calculadora disponible)': [1, 2],
  'Puntuacion de Baux (calculadora disponible)': [1],
  'Criterios de traslado (calculadora disponible)': [2],
  'Profundidad de la quemadura': [1],
  'Criterios de sepsis en el quemado': [1]
};

export const escalaCalc = {
  'Regla de los nueves (calculadora disponible)': 'regla-nueves',
  'Volumen de reanimacion (calculadora disponible)': 'parkland-atls',
  'Puntuacion de Baux (calculadora disponible)': 'baux',
  'Criterios de traslado (calculadora disponible)': 'traslado-quemados'
};

export const compGroups = [
  { title: 'Al recibirlo', items: ['Valoracion inicial: extension y profundidad', 'Inhalacion de humo y monoxido de carbono'] },
  { title: 'Las primeras 48 horas', items: ['Reanimacion con liquidos y choque por quemadura', 'Quemaduras circunferenciales, electricas y quimicas'] },
  { title: 'Despues', items: ['Respuesta hipermetabolica, herida e infeccion', 'Triaje, traslado y pronostico'] }
];

export const complicacionesIntro = 'Las dos primeras fichas son lo que se hace al recibir al quemado: estimar la extension y la profundidad, de las que depende todo lo demas, y no perder la via aerea por una inhalacion que al principio puede no dar nada. Las dos siguientes son las primeras 48 horas: los liquidos, que se calculan con una formula pero se titulan por la diuresis, y las quemaduras que comprometen la circulacion o esconden un da&#241;o mayor del que se ve. Las dos ultimas son lo que viene despues: el hipermetabolismo, la herida y la infeccion, y la decision de trasladar.';

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
    { title: 'Al recibirlo', sub: 'Extension y via aerea', color: '#a0522d', target: 'complicaciones', leaves: [
      { title: 'Regla de los nueves', sub: 'Sin las superficiales', color: '#a0522d', target: 'complicaciones' },
      { title: 'Inhalacion y CO', sub: 'Oxigeno al 100%', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Primeras 48 h', sub: 'Liquidos titulados', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Parkland', sub: '2 mL/kg/%, diuresis', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Especiales', sub: 'Circunferencial, electrica', color: '#5a4a8c', target: 'complicaciones' }
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
          <thead><tr><th>Profundidad</th><th>Aspecto</th><th>Dolor</th><th>Evolucion</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Superficial (primer grado)</td><td>Roja, sin ampollas</td><td>Doloroso</td><td>Cura sin cicatriz; no cuenta para la superficie</td></tr>
            <tr><td class="figure-org">Espesor parcial superficial</td><td>Ampollas, exudado, hiperemica, palidece a la presion</td><td>Muy dolorosa</td><td>Cura sin cirugia; puede dejar cicatriz</td></tr>
            <tr><td class="figure-org">Espesor parcial profundo</td><td>Mas seca, eritema reticular, no palidece</td><td>Menos dolorosa</td><td><span class="figure-tag fail">Cirugia</span> y cicatriz</td></tr>
            <tr><td class="figure-org">Espesor total (tercer grado)</td><td>Seca, insensible al tacto y al pinchazo</td><td>Casi sin dolor</td><td><span class="figure-tag fail">Cirugia</span> salvo que sea muy peque&#241;a</td></tr>
            <tr><td class="figure-org">Cuarto grado</td><td>Afecta musculo o hueso, ennegrecida</td><td>Sin dolor</td><td>Perdida frecuente de la parte afectada</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Cuanto mas profunda, mayor riesgo de infeccion y de cicatriz. La paradoja que conviene recordar: las quemaduras <strong>mas graves duelen menos</strong>, porque destruyen las terminaciones nerviosas. Y la profundidad no es fija: la herida tiene una <strong>zona de estasis</strong> con perfusion reducida pero recuperable, que una mala reanimacion puede convertir en necrosis. No hay tecnicas de imagen no invasivas validadas de uso general para medirla; el laser Doppler, la ecografia armonica, la tomografia de coherencia optica y la termografia estan en estudio.</div>`
  },
  'quemadura-nueves': {
    titulo: 'Regla de los nueves en el adulto',
    fuente: 'Capitulo 9, Lesiones termicas, del manual ATLS de 10.a edicion, y Jeschke MG, et al. Nat Rev Dis Primers 2020;6:11.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Region</th><th>Porcentaje</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Cabeza y cuello</td><td>9%</td></tr>
            <tr><td class="figure-org">Cada miembro superior</td><td>9%</td></tr>
            <tr><td class="figure-org">Tronco anterior</td><td>18%</td></tr>
            <tr><td class="figure-org">Tronco posterior</td><td>18%</td></tr>
            <tr><td class="figure-org">Cada miembro inferior</td><td>18%</td></tr>
            <tr><td class="figure-org">Perine</td><td>1%</td></tr>
            <tr><td class="figure-org">Palma con dedos del paciente</td><td>Aproximadamente 1%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Solo se suman las quemaduras de <strong>espesor parcial o total</strong>: incluir las superficiales sobreestima la superficie y lleva a la sobrerreanimacion. En el <strong>ni&#241;o</strong> la regla es inexacta, porque la cabeza tiene una proporcion mayor y las extremidades menor; se usan los diagramas de <strong>Lund y Browder</strong>. La palma del paciente sirve para las quemaduras irregulares o salpicadas. Y la forma corporal tambien altera las proporciones, por ejemplo en la obesidad.</div>`
  },
  'quemadura-liquidos': {
    titulo: 'Liquidos: de la formula a la diuresis',
    fuente: 'Capitulo 9 del manual ATLS de 10.a edicion y fases de la reanimacion de Jeschke MG, et al. Nat Rev Dis Primers 2020;6:11.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situacion</th><th>Ritmo inicial (Ringer lactato)</th><th>Diuresis objetivo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Adulto</td><td>2 mL/kg por % en 24 h, mitad en las primeras 8 h</td><td>0.5 mL/kg/h (30 a 50 mL/h)</td></tr>
            <tr><td class="figure-org">Ni&#241;o</td><td>3 mL/kg por %; mas mantenimiento con dextrosa si pesa menos de 30 kg</td><td>1 mL/kg/h si pesa menos de 30 kg</td></tr>
            <tr><td class="figure-org">Electrica con orina oscura</td><td>4 mL/kg por %</td><td>100 mL/h en el adulto hasta aclarar la orina</td></tr>
            <tr><td class="figure-org">Regla de los dieces (adulto de 40 a 130 kg)</td><td>% redondeado a la decena x 10 mL/h, mas 100 mL/h por cada 10 kg por encima de 80</td><td>La misma titulacion</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Ejemplo del ATLS: un adulto de 100 kg con un 80% de superficie necesita 2 x 80 x 100 = <strong>16.000 mL en 24 horas</strong>; 8.000 mL en las primeras 8 horas, a 1.000 mL/h, y el resto en las 16 siguientes. Pero la formula solo da el punto de partida: se <strong>titula cada hora</strong> por la diuresis, sin bajar a la mitad de golpe a las 8 horas y sin bolos salvo hipotension. Si la reanimacion se dispara (mas de 1500 mL/h durante 2 horas o mas de 250 mL/kg en 24 horas), el rescate con <strong>albumina al 5%</strong> desde las 8 horas, o plasma, reduce el volumen total de cristaloide.</div>`
  }
};
