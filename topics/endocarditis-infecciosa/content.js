// topics/endocarditis-infecciosa/content.js - Modulo 121: Endocarditis infecciosa. Primer tema
// del bloque X (Enfermedades Infecciosas), que hasta ahora estaba entero en cero.
// Fuentes: ESC 2023 de endocarditis (Delgado, Eur Heart J 2023;44(39):3948-4042, 95 paginas con
// recomendaciones graduadas), los criterios Duke-ISCVID 2023 (Fowler, Clin Infect Dis
// 2023;77(4):518-526) y la ESC/EACTS 2021 de valvulopatia (Vahanian, Eur Heart J 2022;43(7):561).
//
// IDEA QUE ORDENA EL TEMA: la endocarditis se pierde por no sacar hemocultivos antes del
// antibiotico, y se trata con un reloj en la mano. Hay TRES razones para operar (insuficiencia
// cardiaca, infeccion no controlada, prevencion de la embolia) y TRES plazos (emergencia dentro de
// 24 h, urgente en 3 a 5 dias, no urgente en el mismo ingreso). Casi todas las decisiones del tema
// caen en esa cuadricula.
//
// POR QUE ESTE MODULO ABRE EL BLOQUE: es el unico de los 19 que puede nacer cumpliendo la regla
// minima de citas sin depender de ninguna fuente que falte en Bibliografia/ (ver
// .claude/infectologia-fuentes.md), y la app menciona la endocarditis 26 veces en 7 temas sin que
// el residente tenga a donde ir.
//
// JERARQUIA DE LAS FICHAS, segun el esquema universal de enfermedad: las CINCO primeras son
// entidades (formas de la enfermedad, con los campos completos) y las SEIS ultimas son
// complicaciones verdaderas, cuya `definicion` arranca diciendo de que ficha dependen y cuya
// fisiopatologia no repite el mecanismo base.
//
// SOBRE LAS CITAS. La [1] sostiene practicamente todo el tema, porque la ESC 2023 cubre
// diagnostico, microbiologia, antibioticos, cirugia, complicaciones y seguimiento en un solo
// documento. Las otras dos se usan en un sitio cada una, y solo donde se leyo el pasaje:
//   - [2] Duke-ISCVID: se cita SOLO en la escala que compara los dos juegos de criterios de 2023.
//     Su texto completo NO esta abierto en PMC (PMC10681650 devuelve resumen sin cuerpo), asi que
//     lo que sostiene es exactamente lo que dice su resumen: la inspeccion intraoperatoria entra
//     como criterio mayor clinico nuevo, la lista de microorganismos "tipicos" se amplia con
//     patogenos que solo cuentan como tipicos si hay material protesico, y se RETIRAN los
//     requisitos de separacion temporal y de venopuncion distinta para los hemocultivos. Nada mas
//     se le atribuye.
//   - [3] ESC/EACTS 2021 de valvulopatia: se cita SOLO en la reoperacion de la fuga paravalvular
//     (I C, "Reoperation is recommended if a paravalvular leak is related to endocarditis or
//     causes haemolysis requiring repeated blood transfusions or leading to severe heart failure
//     symptoms"). Esa guia remite explicitamente el manejo de la endocarditis a la guia de
//     endocarditis ("The management of patients with endocarditis should follow the relevant
//     guidelines"), de modo que seria un error colgarle nada mas.
//
// Texto sin acentos en los comentarios; todo el texto visible va acentuado.

export const meta = {
  id: 'endocarditis-infecciosa',
  titulo: 'Endocarditis Infecciosa',
  subtitulo: 'Medicina Interna',
  accent: '#7a2f52'
};

export const definicionText = `<p style="margin:0 0 14px;">La endocarditis infecciosa es la infección del endocardio, casi siempre valvular, y es el diagnóstico que con más frecuencia se pierde por un gesto de una sola línea: poner el antibiótico antes de sacar los hemocultivos. La guía lo dice sin rodeos, y es la frase más rentable de las 95 páginas: la endocarditis con hemocultivos negativos surge <strong>sobre todo como consecuencia de haber administrado antibiótico antes</strong>. Y la bacteriemia aquí es casi constante, de modo que no hay ninguna razón para esperar un pico de fiebre para extraer la sangre. Tres tandas de hemocultivos, separadas 30 minutos, 10 ml cada una, de vena periférica y no del catéter central, antes de la primera dosis.</p>
<p style="margin:0 0 14px;">El resto del tema es un reloj. Hay <strong>tres razones para operar</strong> y solo tres: insuficiencia cardiaca, infección no controlada y prevención de la embolia. Y hay <strong>tres plazos</strong>: emergencia, que significa dentro de 24 horas; urgente, que significa en 3 a 5 días; y no urgente, que significa dentro del mismo ingreso. Casi toda la toma de decisiones cae en esa cuadrícula, y vale la pena aprenderla como cuadrícula y no como lista, porque la pregunta junto a la cama nunca es "¿hay que operar?" sino "¿para cuándo?". El tratamiento médico de la congestión no compra tiempo: en la insuficiencia cardiaca que complica una endocarditis, la cirugía es el único tratamiento que se asocia a mejor supervivencia.</p>
<p style="margin:0 0 14px;">Dos cosas más conviene fijar desde el principio. La primera es que el ecocardiograma dejó de ser el final del camino: en presencia de material protésico puede ser normal o no concluyente hasta en el 30% de los casos con endocarditis, y por eso la TC cardiaca y el PET/TC con 18F-FDG entran como criterio mayor de imagen en los criterios ESC 2023. La segunda es que esto no se lleva en solitario: el <strong>Equipo de Endocarditis</strong> es una recomendación de clase I, y el tema dice con bastante precisión qué paciente hay que trasladar a un centro con cirugía cardiaca. Lo que no está aquí: la sepsis y el choque séptico como síndrome tienen su propio módulo, los vasopresores el suyo, la meningoencefalitis infecciosa el suyo, y la insuficiencia cardiaca y la valvulopatía los suyos. Aquí se enlazan, no se repiten.</p>`;

export const bibliografia = [
  'Delgado V, Ajmone Marsan N, de Waha S, Bonaros N, Brida M, Burri H, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023;44(39):3948-4042.',
  'Fowler VG Jr, Durack DT, Selton-Suty C, Athan E, Bayer AS, Chamis AL, et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis. 2023;77(4):518-526.',
  'Vahanian A, Beyersdorf F, Praz F, Milojevic M, Baldus S, Bauersachs J, et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J. 2022;43(7):561-632.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Lo que obliga a pensar en endocarditis',
      tituloB: 'Lo que ya es una complicación y cambia el plazo',
      compensada: 'La presentación es tan variable que la guía propone una regla de entrada deliberadamente ancha: pensar en endocarditis en TODO paciente con sepsis o fiebre de origen desconocido que tenga factores de riesgo. Puede ser una infección aguda y rápidamente destructiva, o una enfermedad subaguda de meses con fiebre baja o sin fiebre y síntomas inespecíficos. Y puede presentarse disfrazada de otra cosa: una enfermedad reumatológica, neurológica o autoinmune, o incluso una neoplasia, de modo que el paciente llega habiendo pasado por otros servicios. La combinación que más sospecha genera es fiebre más hemocultivos positivos sin otro foco que lo explique, sobre todo con uno o más factores de riesgo. Y la advertencia que acompaña a los signos periféricos: la ausencia de signos clínicos NO excluye el diagnóstico, porque su sensibilidad y su especificidad globales son bajas.',
      descompensada: 'Lo que convierte el caso en urgente. EDEMA PULMONAR REFRACTARIO O CHOQUE CARDIOGÉNICO por regurgitación aguda grave, obstrucción o fístula: cirugía de emergencia, dentro de 24 horas, independientemente del estado de la infección y del tiempo de antibiótico. BLOQUEO AURICULOVENTRICULAR NUEVO, absceso, falso aneurisma, fístula, vegetación que crece o dehiscencia de la prótesis: son signos de infección localmente no controlada y piden cirugía urgente, en 3 a 5 días. ICTUS O FOCALIDAD NEUROLÓGICA: hasta un 35% de los pacientes tiene complicaciones cerebrovasculares sintomáticas y hasta un 80% silentes, y el ictus puede ser la primera manifestación de la enfermedad. HEMOCULTIVOS QUE SIGUEN POSITIVOS más de una semana con antibiótico adecuado, o sepsis persistente. VEGETACIÓN DE 10 MM O MÁS que ya embolizó. Y el choque séptico, que aparece en el 5 al 10% y es altamente letal.'
    },
    laboratorio: [
      { prueba: 'Hemocultivos: la técnica es el examen', utilidad: 'Al menos TRES tandas separadas 30 minutos, 10 ml de sangre cada una, incubadas en atmósfera aerobia y anaerobia, extraídas de una vena PERIFÉRICA y no de un catéter venoso central (por el riesgo de contaminación y de interpretación engañosa), con técnica estéril meticulosa. En ausencia de antibiótico previo, esto basta prácticamente siempre para identificar el microorganismo. Y la frase que hay que llevarse: como la bacteriemia es casi constante, NO tiene sentido retrasar la extracción para hacerla coincidir con un pico de fiebre.' },
      { prueba: 'Hemocultivos como criterio MAYOR', utilidad: 'Dos formas. Microorganismo típico en dos hemocultivos separados: estreptococos orales, Streptococcus gallolyticus (antes S. bovis), grupo HACEK, Staphylococcus aureus o Enterococcus faecalis. O microorganismo compatible en hemocultivos persistentemente positivos: dos positivos de muestras separadas más de 12 horas, o los tres de tres, o la mayoría de cuatro con la primera y la última separadas al menos 1 hora. Un solo hemocultivo positivo para Coxiella burnetii, o un título de IgG de fase I por encima de 1:800, también es criterio mayor por sí solo.' },
      { prueba: 'Qué microorganismos esperar', utilidad: 'En la cohorte ICE-PCS, S. aureus fue el más frecuente con un 31%, seguido de los estreptococos orales con un 17% y los estafilococos coagulasa negativos con un 11%, y el registro EURO-ENDO dio resultados similares. Otros registros subrayan el aumento de E. faecalis y de coagulasa negativos, en particular en el anciano. S. aureus importa aparte porque concentra lo malo: progresión rápida, destrucción local, absceso, más complicaciones neurológicas y más riesgo de embolia.' },
      { prueba: 'Cuando los hemocultivos son negativos', utilidad: 'Serología sistemática según la epidemiología local para Coxiella burnetii, Bartonella spp., Aspergillus spp., Mycoplasma pneumoniae, Brucella spp. y Legionella pneumophila, seguida de PCR específica para Tropheryma whipplei, Bartonella spp. y hongos en sangre y tejido. La secuenciación de ARN ribosómico 16S y 18S del tejido es rutina en la mayoría de los laboratorios. En un paciente estable, con síntomas subagudos, sin complicaciones y que llevaba un curso muy corto de antibiótico, puede hacer falta RETIRAR el antibiótico y repetir los hemocultivos.' },
      { prueba: 'Lo que se pide cuando todo sale negativo', utilidad: 'Si todos los estudios microbiológicos son negativos hay que considerar sistemáticamente la endocarditis NO bacteriana y pedir anticuerpos antinucleares y el estudio de síndrome antifosfolípido (anticardiolipina IgG y anti-beta-2-glucoproteína 1 IgG e IgM), sabiendo que esos anticuerpos pueden estar presentes también en endocarditis probadas. El factor reumatoide, por su parte, es un criterio MENOR inmunológico.' },
      { prueba: 'Los números que autorizan el paso a vía oral', utilidad: 'No es una impresión clínica, son cifras: sin fiebre durante más de 2 días, proteína C reactiva por debajo del 25% del valor máximo alcanzado o por debajo de 20 mg/L, y leucocitos por debajo de 15 x 10⁹/L. A eso se suman al menos 10 días de antibiótico intravenoso adecuado y al menos 7 días desde la cirugía valvular si la hubo.' },
      { prueba: 'Marcadores de mal pronóstico', utilidad: 'El péptido natriurético tipo B y la troponina se han asociado a peor pronóstico en la endocarditis. Y en la infección no controlada, los hemocultivos que siguen positivos a las 48 a 72 horas del inicio del antibiótico son un factor de riesgo INDEPENDIENTE de mortalidad hospitalaria, de modo que son un dato de decisión y no solo de seguimiento.' },
      { prueba: 'Cribado nasal de S. aureus antes de la cirugía', utilidad: 'Se recomienda cribar el estado de portador nasal de S. aureus antes de la cirugía cardiaca electiva o del implante valvular transcatéter, y tratar a los portadores con mupirocina y clorhexidina locales. Las técnicas rápidas de amplificación génica sirven para no retrasar una cirugía urgente. El tratamiento local sistemático SIN cribado no se recomienda.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios ESC 2023: la clasificación (calculadora disponible)', interpretacion: 'DEFINITIVA con dos criterios mayores, o un mayor y al menos tres menores, o cinco menores. POSIBLE con un mayor y uno o dos menores, o con tres o cuatro menores. RECHAZADA cuando no cumple ni definitiva ni posible al ingreso, con o sin un diagnóstico alternativo firme. La clasificación se hace al ingreso Y se repite durante el seguimiento, que es justo lo que la convierte en una herramienta de trabajo: un caso posible se reclasifica al añadir imagen.', cutoff: '2 mayores, o 1 + 3 menores, o 5 menores' },
      { metodo: 'Los dos criterios MAYORES', interpretacion: 'PRIMERO, hemocultivos positivos en una de las dos formas de la tabla de laboratorio. SEGUNDO, imagen positiva: lesiones anatómicas o metabólicas valvulares, perivalvulares, periprotésicas o del material extraño características de endocarditis, detectadas por cualquiera de estas cuatro técnicas: ecocardiografía (transtorácica o transesofágica), TC cardiaca, PET/TC con 18F-FDG o SPECT/TC con leucocitos marcados. Que las cuatro cuenten por igual como criterio mayor de imagen es el cambio con más consecuencias prácticas de 2023.', cutoff: 'Microbiología o imagen' },
      { metodo: 'Los cinco criterios MENORES', interpretacion: 'PREDISPOSICIÓN: cardiopatía predisponente de riesgo alto o intermedio, o usuario de drogas inyectadas. FIEBRE por encima de 38 °C. DISEMINACIÓN VASCULAR EMBÓLICA, incluida la asintomática detectada solo por imagen: émbolos o infartos sistémicos y pulmonares mayores y abscesos, complicaciones osteoarticulares sépticas hematógenas como la espondilodiscitis, aneurismas micóticos, lesiones intracraneales isquémicas o hemorrágicas, hemorragias conjuntivales y lesiones de Janeway. FENÓMENOS INMUNOLÓGICOS: glomerulonefritis, nódulos de Osler, manchas de Roth y factor reumatoide. EVIDENCIA MICROBIOLÓGICA que no llega a criterio mayor, o serología de infección activa por un microorganismo compatible.', cutoff: 'Fiebre por encima de 38 °C' },
      { metodo: 'Momento de la cirugía (calculadora disponible)', interpretacion: 'Tres razones y tres plazos. EMERGENCIA, dentro de 24 horas: regurgitación aguda grave, obstrucción o fístula con edema pulmonar refractario o choque cardiogénico (I B). URGENTE, en 3 a 5 días: regurgitación aguda grave u obstrucción con síntomas de insuficiencia cardiaca o signos ecocardiográficos de mala tolerancia hemodinámica (I B); infección localmente no controlada, es decir absceso, falso aneurisma, fístula, vegetación que crece, dehiscencia protésica o bloqueo auriculoventricular nuevo (I B); vegetación de 10 mm o más que ya embolizó a pesar de antibiótico adecuado (I B); vegetación de 10 mm o más con otra indicación de cirugía (I C). NO URGENTE, en el mismo ingreso: el resto de las indicaciones.', cutoff: '24 horas, 3 a 5 días, mismo ingreso' },
      { metodo: 'Riesgo de embolia y el umbral de 10 mm', interpretacion: 'El tamaño y la movilidad de la vegetación son los predictores independientes más importantes de un nuevo evento embólico. Se suman la localización mitral, el crecimiento o la disminución de la vegetación con el antibiótico, microorganismos concretos (S. aureus, S. gallolyticus y Candida spp.), la embolia previa y la afectación multivalvular. Por encima de 30 mm de longitud el riesgo de complicación neurológica es particularmente alto. Un estudio reciente matiza algo importante: el tamaño predijo peor desenlace SOLO cuando coexistía con otra indicación de cirugía.', cutoff: 'Vegetación de 10 mm; 30 mm es riesgo muy alto' },
      { metodo: 'Elegibilidad para OPAT o vía oral parcial (calculadora disponible)', interpretacion: 'El ensayo POET cambió el paradigma de 60 años de antibiótico siempre intravenoso: hasta un 20% de los pacientes puede completar el tratamiento por vía oral, y los resultados a 5 años se mantuvieron. El tratamiento tiene dos fases. La CRÍTICA, de hasta 2 semanas de ingreso con combinaciones bactericidas rápidas, en la que se opera si hay indicación, se retiran los dispositivos infectados y se drenan los abscesos. Y la de CONTINUACIÓN, más allá del día 10 y de 7 días tras la cirugía, en la que el paciente estable puede terminar en casa hasta completar 6 semanas. Y una condición que no es negociable: ecocardiograma transesofágico ANTES de cambiar de vía (I B).', cutoff: 'Día 10, y 7 días tras cirugía' },
      { metodo: 'Riesgo del paciente para la profilaxis (calculadora disponible)', interpretacion: 'ALTO RIESGO, con profilaxis recomendada: endocarditis previa (I B), prótesis valvular quirúrgica o cualquier material de reparación valvular quirúrgica (I C), prótesis valvular aórtica o pulmonar transcatéter (I C), cardiopatía congénita cianótica no tratada y la tratada con cortocircuitos, conductos u otras prótesis paliativas (I C), y dispositivo de asistencia ventricular (I C). RIESGO INTERMEDIO, sin profilaxis de rutina y valorada caso por caso: cardiopatía reumática, valvulopatía degenerativa no reumática, anomalías valvulares congénitas incluida la válvula aórtica bicúspide, dispositivos cardiacos implantables y miocardiopatía hipertrófica. BAJO RIESGO: la profilaxis NO se recomienda (III C).', cutoff: 'Alto, intermedio o bajo' },
      { metodo: 'Duración del antibiótico por microorganismo (calculadora disponible)', interpretacion: 'Las cifras que hay que tener de memoria. ESTREPTOCOCOS ORALES y grupo S. gallolyticus sensibles: 4 semanas en válvula nativa y 6 en protésica; 2 semanas solo en nativa NO complicada, combinando con gentamicina y con función renal normal. ESTAFILOCOCOS sensibles a meticilina: 4 a 6 semanas en nativa; en protésica, al menos 6 semanas con rifampicina más 2 semanas de gentamicina. ENTEROCOCO no HLAR: ampicilina o amoxicilina con ceftriaxona 6 semanas, o con gentamicina 2 semanas. ENDOCARDITIS DERECHA por S. aureus sensible: 2 semanas si se cumplen cuatro condiciones.', cutoff: '2, 4 o 6 semanas' },
      { metodo: 'Cuándo trasladar a un Heart Valve Centre', interpretacion: 'La guía da una lista explícita, y la da para que la comunicación entre hospitales no retrase el tratamiento: inestabilidad hemodinámica con soporte farmacológico o respiratorio, regurgitación valvular grave por criterios clínicos y ecocardiográficos, endocarditis sobre válvula protésica con o sin disfunción de la prótesis, ictus isquémico o hemorrágico con endocarditis definitiva o posible, complicaciones extravalvulares como abscesos o fístulas, hemocultivos positivos más de 7 días con antibiótico apropiado, embolia, endocarditis relacionada con dispositivo, y microorganismos agresivos o difíciles de tratar (S. aureus, bacilos gramnegativos, hongos).', cutoff: 'Hemocultivos positivos más de 7 días' },
      { metodo: 'Evaluación coronaria antes de la cirugía', interpretacion: 'Es una decisión que se olvida y tiene regla propia. Con vegetaciones en la válvula aórtica, paciente estable y riesgo alto de enfermedad coronaria: angio-TC coronaria multicorte de alta resolución (I B), para no pasar un catéter junto a la vegetación. SIN vegetaciones aórticas y riesgo alto de enfermedad coronaria: coronariografía invasiva (I C). En situación de emergencia: cirugía valvular sin evaluación coronaria previa, cualquiera que sea el riesgo coronario (IIa C).', cutoff: 'Angio-TC si hay vegetación aórtica' }
    ],
    imagen: [
      { modalidad: 'Ecocardiografía transtorácica y transesofágica', hallazgos: 'Son la primera y la principal técnica para el diagnóstico. Los hallazgos que cuentan son las características y el tamaño de la vegetación, las complicaciones perivalvulares (absceso, pseudoaneurisma, dehiscencia parcial nueva de una prótesis), la fístula intracardiaca y la perforación del velo. Dos cosas que conviene saber: la transesofágica es más sensible y específica que la transtorácica para la extensión perivalvular, pero la calcificación del anillo mitral puede ocultar extensiones pequeñas, sobre todo en la cara posterior del anillo. Y en el caso posible hay que REPETIR la transtorácica y la transesofágica a los 5 a 7 días (I).' },
      { modalidad: 'Lo que ya no basta: el 30% de los protésicos', hallazgos: 'Las limitaciones de los criterios de Duke modificados se hicieron evidentes justamente donde hay material protésico (prótesis valvular, injertos aórticos, dispositivos, cardiopatía congénita): en esas situaciones la ecocardiografía puede ser NORMAL o no concluyente hasta en el 30% de los casos con endocarditis. De ahí el enfoque multimodal, que ha demostrado ser superior a los criterios tradicionales.' },
      { modalidad: 'TC cardiaca (angio-TC)', hallazgos: 'Recomendada en la endocarditis POSIBLE sobre válvula nativa para detectar lesiones valvulares y confirmar el diagnóstico (I B), y recomendada tanto en nativa como en protésica para diagnosticar complicaciones paravalvulares o periprotésicas cuando la ecocardiografía no es concluyente (I B). Es una alternativa precisa a la transesofágica para valorar la extensión perivalvular.' },
      { modalidad: 'PET/TC con 18F-FDG', hallazgos: 'Recomendada, junto con la angio-TC cardiaca, en la endocarditis POSIBLE sobre válvula protésica para detectar lesiones valvulares y confirmar el diagnóstico (I B). Puede considerarse en la endocarditis posible relacionada con dispositivo (IIa B). Es especialmente útil en la válvula pulmonar protésica, donde las vegetaciones son difíciles de ver incluso con transesofágica.' },
      { modalidad: 'SPECT/TC con leucocitos marcados', hallazgos: 'Debe considerarse cuando la sospecha clínica de endocarditis sobre válvula protésica es alta, la ecocardiografía es negativa o no concluyente y el PET/TC NO está disponible (IIa C). Es decir, tiene un hueco concreto y no es una alternativa general.' },
      { modalidad: 'Imagen cerebral y de cuerpo entero', hallazgos: 'Recomendada (TC, PET/TC con 18F-FDG o RM) en el paciente SINTOMÁTICO con endocarditis nativa o protésica, para detectar lesiones periféricas o añadir criterios menores (I B). En el ASINTOMÁTICO puede considerarse como cribado de lesiones periféricas (IIb B), y ahí está la gracia: una embolia silente detectada solo por imagen cuenta como criterio menor y puede reclasificar un caso posible en definitivo.' },
      { modalidad: 'Imagen cerebral cuando hay focalidad', hallazgos: 'Obligatoria si se sospechan complicaciones neurológicas. RM con y sin gadolinio, o TC con y sin contraste si la RM no es posible. La imagen vascular NO se hace de rutina: la angio-TC o la angio-RM bastan para cribar un aneurisma infeccioso, y la angiografía por catéter se reserva para el aneurisma ya diagnosticado por angio-TC o angio-RM, la hemorragia cerebral aguda, la sospecha que persiste con técnicas no invasivas negativas, o si se plantea trombectomía. Los números que justifican esa cautela: para aneurismas de menos de 5 mm la sensibilidad es del 57% para la angio-TC y del 35% para la angio-RM, frente al 94% y el 86% para los de 5 mm o más.' },
      { modalidad: 'RM o PET/TC en la espondilodiscitis', hallazgos: 'Recomendada en el paciente con sospecha de espondilodiscitis y osteomielitis vertebral que complica una endocarditis (I C). Y al revés, que es la parte que se olvida: se recomienda hacer ecocardiograma transtorácico o transesofágico para DESCARTAR endocarditis en todo paciente con espondilodiscitis o artritis séptica y hemocultivos positivos para microorganismos típicos de endocarditis (I C).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las escalas de este tema responden a cuatro preguntas distintas, y conviene no mezclarlas. La primera es <strong>si es endocarditis</strong>, que son los criterios ESC 2023 y su clasificación en definitiva, posible y rechazada. La segunda es <strong>para cuándo se opera</strong>, que es la cuadrícula de tres razones por tres plazos y es el corazón del tema. La tercera es <strong>cuánto antibiótico y por qué vía</strong>, donde entran las duraciones por microorganismo y los criterios del paso a vía oral. Y la cuarta es <strong>a quién se le da profilaxis</strong>, que depende del riesgo del paciente y no del procedimiento. Aparte va la comparación con los criterios Duke-ISCVID 2023, que son otro documento del mismo año y no dicen exactamente lo mismo.`,
    escalas: [
      { nombre: 'Criterios ESC 2023 de endocarditis infecciosa (calculadora disponible)', componentes: 'Dos criterios mayores (hemocultivos positivos para endocarditis; imagen positiva por ecocardiografía, TC cardiaca, PET/TC con 18F-FDG o SPECT/TC con leucocitos) y cinco menores (predisposición, fiebre por encima de 38 °C, diseminación vascular embólica, fenómenos inmunológicos y evidencia microbiológica que no llega a mayor).', formula: 'Definitiva: 2 mayores, o 1 mayor y al menos 3 menores, o 5 menores. Posible: 1 mayor y 1 o 2 menores, o 3 a 4 menores. Rechazada: no cumple ninguna de las dos.', interpretacion: 'Los criterios de Duke modificados, integrados desde el año 2000, tienen una sensibilidad global del 80%, y su límite aparece justamente donde hay material protésico. La respuesta de 2023 es la imagen multimodal: ecocardiografía, TC cardiaca o de cuerpo entero, RM cerebral, PET/TC y SPECT/TC con leucocitos, con la que el rendimiento diagnóstico mejora y que ha demostrado ser superior a los criterios tradicionales. Y la clasificación se aplica al ingreso y se REPITE en el seguimiento: ante un caso posible, repetir hemocultivos si eran negativos o dudosos, repetir ecocardiograma a los 5 a 7 días y hacer angio-TC cardiaca (clase I); y añadir criterios menores con imagen cerebral o de cuerpo entero (clase IIa).' },
      { nombre: 'Lo que cambian los criterios Duke-ISCVID 2023 frente a los ESC 2023', componentes: 'Comparación entre dos documentos del mismo año: la Tabla 10 de la guía ESC y los criterios Duke-ISCVID publicados en Clinical Infectious Diseases.', formula: 'Mismo año, criterios distintos: hay que saber cuál se está aplicando.', interpretacion: 'Los Duke-ISCVID introducen tres cambios que los ESC no recogen. PRIMERO: la INSPECCIÓN INTRAOPERATORIA entra como criterio mayor clínico nuevo. SEGUNDO: la lista de microorganismos "típicos" se amplía, e incluye patógenos que cuentan como típicos SOLO en presencia de prótesis intracardiaca. TERCERO, y es el que más cambia la práctica: se RETIRAN los requisitos de separación temporal y de venopunción distinta para los hemocultivos, requisitos que los criterios ESC 2023 sí mantienen (dos hemocultivos separados, o más de 12 horas de separación para los persistentemente positivos). Añaden además diagnósticos microbiológicos nuevos (inmunoensayo enzimático, PCR, secuenciación de amplicón y metagenómica, hibridación in situ), imagen (PET/TC con 18F-FDG y TC cardiaca) y aclaran condiciones predisponentes (prótesis transcatéter, dispositivos endovasculares, endocarditis previa). Sus autores los plantean como documento vivo, actualizable en línea.' },
      { nombre: 'Momento de la cirugía: tres razones por tres plazos (calculadora disponible)', componentes: 'Razón de la cirugía (insuficiencia cardiaca, infección no controlada o prevención de la embolia) y gravedad dentro de cada razón.', formula: 'Emergencia = dentro de 24 h. Urgente = en 3 a 5 días. No urgente = en el mismo ingreso.', interpretacion: 'La evidencia de fondo: la cirugía puede dar una ventaja de supervivencia de hasta el 20% en el primer año, y en la infección no controlada mejora la supervivencia al año entre un 15 y un 20%. INSUFICIENCIA CARDIACA: emergencia si hay edema pulmonar refractario o choque cardiogénico por regurgitación aguda grave, obstrucción o fístula (I B); urgente si hay síntomas de insuficiencia cardiaca o signos ecocardiográficos de mala tolerancia (I B); no urgente si no hay compromiso hemodinámico. INFECCIÓN NO CONTROLADA: urgente si es localmente no controlada (I B); urgente a considerar si los hemocultivos siguen positivos más de una semana o persiste la sepsis con antibiótico apropiado y focos metastásicos controlados (IIa B); urgente a considerar en endocarditis protésica por S. aureus o bacilos gramnegativos no HACEK (IIa C); urgente o no urgente, según la hemodinámica, si la causan hongos u organismos multirresistentes (I C). EMBOLIA: urgente con vegetación de 10 mm o más que ya embolizó (I B) o con otra indicación de cirugía (I C); y puede considerarse con vegetación de 10 mm o más sin disfunción valvular grave ni embolia clínica si el riesgo quirúrgico es bajo (IIb B).' },
      { nombre: 'Cirugía después de una complicación neurológica', componentes: 'Tipo de evento (accidente isquémico transitorio, ictus isquémico, hemorragia intracraneal), estado de conciencia y presencia de otra indicación de cirugía.', formula: 'El evento neurológico casi nunca obliga a esperar; la hemorragia es la excepción.', interpretacion: 'Tras un ACCIDENTE ISQUÉMICO TRANSITORIO, la cirugía indicada se recomienda SIN demora (I B). Tras un ICTUS, se recomienda sin demora si hay insuficiencia cardiaca, infección no controlada, absceso o riesgo embólico alto persistente, siempre que no haya coma y se haya excluido hemorragia cerebral por TC o RM craneal (I B). Con HEMORRAGIA INTRACRANEAL y situación clínica inestable por insuficiencia cardiaca, infección no controlada o riesgo embólico alto persistente, debe considerarse cirugía urgente o de emergencia, sopesando la probabilidad de un resultado neurológico significativo (IIa C). El razonamiento de fondo: la mayoría de las publicaciones demuestran que el riesgo de transformación hemorrágica de una lesión isquémica no complicada es MENOR que el riesgo de embolia recurrente bajo antibiótico.' },
      { nombre: 'Duración y vía del antibiótico (calculadora disponible)', componentes: 'Microorganismo, sensibilidad, tipo de válvula (nativa o protésica) y presencia de complicaciones.', formula: 'Dos fases: crítica intravenosa hasta el día 10, y de continuación hasta 4 a 6 semanas.', interpretacion: 'PRINCIPIOS que explican las pautas. Los regímenes bactericidas son más eficaces que los bacteriostáticos. Los aminoglucósidos sinergizan con los inhibidores de la pared y acortan la duración, pero ya NO se recomiendan en la endocarditis estafilocócica sobre válvula nativa porque no se ha demostrado beneficio clínico y aumentan la toxicidad renal; cuando se usan por otra indicación, no más de 2 semanas. La RIFAMPICINA se reserva a la infección de cuerpo extraño, es decir a la válvula protésica, y se añade solo DESPUÉS de 3 a 5 días de antibiótico eficaz, una vez aclarada la bacteriemia, porque antes antagoniza contra la bacteria replicante mientras sinergiza frente a la bacteria dormida del biofilm. La DAPTOMICINA, cuando se indica, va a dosis altas (10 mg/kg al día) y siempre combinada, para no seleccionar resistencia. PAUTAS: estreptococos orales sensibles, 4 semanas en nativa y 6 en protésica, o 2 semanas con gentamicina solo en nativa no complicada; estafilococos sensibles a meticilina, cloxacilina o cefazolina 4 a 6 semanas en nativa, y en protésica al menos 6 semanas con rifampicina y 2 de gentamicina; enterococo no HLAR, ampicilina con ceftriaxona 6 semanas o con gentamicina 2 semanas, siendo la doble betalactámico la combinación de elección en E. faecalis con resistencia de alto grado a aminoglucósidos y la que evita la nefrotoxicidad.' },
      { nombre: 'Criterios para pasar a vía oral o a OPAT (calculadora disponible)', componentes: 'Microorganismo, control de la infección, respuesta analítica, días de tratamiento, índice de masa corporal, absorción digestiva y ecocardiograma transesofágico.', formula: 'Todas las casillas, o se sigue intravenoso.', interpretacion: 'Se puede pasar a vía oral (estrategia de dos fármacos) si el hemocultivo fue S. aureus, estreptococo, estafilococo coagulasa negativo o E. faecalis; la infección está controlada; la respuesta es satisfactoria (sin fiebre más de 2 días, proteína C reactiva por debajo del 25% del máximo o de 20 mg/L, leucocitos por debajo de 15 x 10⁹/L); lleva al menos 10 días de antibiótico intravenoso adecuado y 7 días desde la cirugía valvular; no hay otra indicación de intravenoso, ni índice de masa corporal por encima de 40, ni absorción digestiva alterada; y el ecocardiograma transesofágico no muestra una indicación quirúrgica nueva. El OPAT parenteral ambulatorio debe considerarse en la endocarditis izquierda por Streptococcus spp., E. faecalis, S. aureus o coagulasa negativos tras al menos 10 días de intravenoso adecuado (o 7 tras cirugía) en paciente estable sin absceso ni alteración valvular que requiera cirugía (IIa A). Y NO se recomienda (III C) con microorganismos muy difíciles de tratar, cirrosis Child-Pugh B o C, embolia grave del sistema nervioso central, abscesos extracardiacos grandes no tratados, complicaciones valvulares u otras situaciones graves que requieran cirugía, complicaciones postquirúrgicas graves ni en la endocarditis del usuario de drogas inyectadas.' },
      { nombre: 'Profilaxis antibiótica: a quién y con qué (calculadora disponible)', componentes: 'Categoría de riesgo del paciente, tipo de procedimiento y alergia a betalactámicos.', formula: 'Dosis única 30 a 60 minutos antes del procedimiento.', interpretacion: 'PROCEDIMIENTOS DENTALES DE RIESGO: extracciones, cirugía oral (incluida la periodontal, la de implantes y las biopsias orales) y procedimientos que manipulan la región gingival o periapical del diente (incluido el raspado y la endodoncia). PAUTAS en el adulto: sin alergia, amoxicilina 2 g oral o ampicilina 2 g intramuscular o intravenosa; con alergia a penicilina o ampicilina, cefazolina o ceftriaxona 1 g intramuscular o intravenosa, o cefalexina 2 g oral, o azitromicina o claritromicina 500 mg oral, o doxiciclina 100 mg oral. El grupo de trabajo NO recomienda clindamicina, por el riesgo de infección por Clostridioides difficile. Las cefalosporinas no se usan en quien tuvo anafilaxia, angioedema o urticaria con penicilina o ampicilina. PROCEDIMIENTOS NO DENTALES: la profilaxis PUEDE considerarse en el paciente de alto riesgo sometido a un procedimiento invasivo diagnóstico o terapéutico respiratorio, digestivo, genitourinario, cutáneo o musculoesquelético (IIb C); en 2015 esto era una recomendación en contra, y el cambio de 2023 es justamente ese.' },
      { nombre: 'Clasificación de la endocarditis por válvula y por adquisición', componentes: 'Válvula afectada (nativa, protésica, derecha), relación con un dispositivo, y tiempo desde la cirugía valvular.', formula: 'Nativa / protésica precoz (menos de 12 meses) / protésica tardía / de dispositivo / derecha.',
        interpretacion: 'Es la clasificación que decide el antibiótico EMPÍRICO, de modo que no es taxonomía. NATIVA COMUNITARIA o PROTÉSICA TARDÍA (12 meses o más de la cirugía): los coagulasa negativos NO se cubren empíricamente en la nativa, y sí en la protésica. PROTÉSICA PRECOZ (menos de 12 meses) o endocarditis asociada a cuidados sanitarios, nosocomial o no: la pauta debe cubrir estafilococos resistentes a meticilina, enterococos e, idealmente, gramnegativos no HACEK; los microorganismos más frecuentes en la protésica quirúrgica precoz son los coagulasa negativos y S. aureus. En la protésica precoz dentro de los 6 meses de la cirugía, además, se recomienda cirugía con RECAMBIO valvular nuevo y desbridamiento completo (I C). DERECHA: entre el 5 y el 10% de los casos, con factores de riesgo propios. DE DISPOSITIVO: tiene recomendaciones propias de extracción.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Endocarditis sobre válvula nativa izquierda',
      color: '#7a2f52',
      definicion: 'Infección del endocardio de la válvula aórtica o mitral nativa. Es la forma de referencia del tema y la que define los criterios, las indicaciones de cirugía y las pautas antibióticas que las demás fichas modifican.',
      epidemiologia: 'En 2019 la incidencia estimada fue de 13,8 casos por 100 000 habitantes y año, con 66 300 muertes en el mundo. La mortalidad hospitalaria no se ha movido en dos décadas: entre el 15 y el 30%. En el registro EURO-ENDO las presentaciones más frecuentes fueron fiebre (77,7%), soplo cardiaco (64,5%) e insuficiencia cardiaca congestiva (27,2%); hubo complicaciones embólicas en el 25,3% y alteraciones de la conducción en el 11,5%.',
      fisiopatologia: 'Hacen falta tres cosas: un factor predisponente, es decir una superficie o estructura colonizable; un patógeno que entre en la sangre; y una respuesta inmunitaria que no lo resuelva. Las puertas de entrada son la piel, la cavidad oral, el aparato digestivo y el genitourinario; la inoculación directa en el usuario de drogas inyectadas o en cualquier punción vascular no segura; y la exposición sanitaria, incluidos los procedimientos transcatéter y quirúrgicos. La cavidad oral pesa más que ninguna por su flora comensal, en particular los estreptococos del grupo oral.',
      factores_riesgo: [
        'Cardiacos: endocarditis previa, valvulopatía, prótesis valvular, catéter venoso o arterial central, dispositivo cardiaco implantable transvenoso, cardiopatía congénita',
        'No cardiacos: catéter venoso central, usuario de drogas inyectadas, inmunosupresión, procedimiento dental o quirúrgico reciente, hospitalización reciente, hemodiálisis',
        'Los factores predisponentes de riesgo moderado y alto tienen una incidencia de endocarditis de 280 y 497 casos por 100 000 personas y año respectivamente',
        'La bacteriemia cotidiana del cepillado, el hilo dental y la masticación es de bajo nivel pero repetitiva, y puede pesar más que la de un procedimiento dental'
      ],
      clinica: 'Fiebre o sepsis sin foco, soplo nuevo o cambiante, y los signos periféricos clásicos, que hoy se ven menos pero siguen apareciendo en infecciones graves por S. aureus y en formas subagudas por estreptococos. La evaluación inicial debe incluir los factores de riesgo cardiacos y no cardiacos, el contexto clínico y la búsqueda explícita de la puerta de entrada en la exploración física.',
      criterios_dx: 'Criterios ESC 2023: definitiva con dos criterios mayores, o uno mayor y al menos tres menores, o cinco menores; posible con uno mayor y uno o dos menores, o con tres a cuatro menores; rechazada si no cumple ninguna de las dos al ingreso, con o sin diagnóstico alternativo firme. La valoración de base es presentación clínica más hemocultivos más ecocardiograma transtorácico y transesofágico (clase I), y la clasificación se repite durante el seguimiento.',
      laboratorio: 'Al menos tres tandas de hemocultivos separadas 30 minutos, 10 ml cada una, en atmósfera aerobia y anaerobia, de vena periférica y no de catéter central, ANTES del antibiótico; como la bacteriemia es casi constante, no hay razón para esperar un pico febril. En la cohorte ICE-PCS los microorganismos más frecuentes fueron S. aureus (31%), estreptococos orales (17%) y estafilococos coagulasa negativos (11%).',
      imagen: 'Ecocardiografía transtorácica y transesofágica como primera línea, con repetición a los 5 a 7 días si el caso queda en posible. Angio-TC cardiaca recomendada en la nativa posible para detectar lesiones valvulares y confirmar el diagnóstico (I B), y para las complicaciones paravalvulares si la ecocardiografía no es concluyente (I B). Imagen cerebral y de cuerpo entero en el paciente sintomático (I B).',
      complementarios: 'Todo tejido extirpado en el desbridamiento o la resección valvular va a patología Y a microbiología, en recipiente estéril sin fijador ni medio de cultivo: el examen patológico del tejido resecado o de los fragmentos embólicos sigue siendo el patrón de referencia del diagnóstico, y además es lo que permite descubrir causas no infecciosas, neoplásicas o autoinmunes.',
      dx_diferencial: 'La endocarditis no bacteriana trombótica (que tiene ficha propia en la guía), el síndrome antifosfolípido, las enfermedades autoinmunes y la neoplasia. La guía lo plantea en los dos sentidos: la endocarditis puede disfrazarse de enfermedad reumatológica, neurológica, autoinmune o tumoral, y al revés, cuando todos los estudios microbiológicos son negativos hay que considerar sistemáticamente la endocarditis no bacteriana.',
      tx_medico: 'Dos fases. La CRÍTICA, de hasta 2 semanas con combinaciones bactericidas rápidas por vía intravenosa en el hospital, durante la que se opera si hay indicación, se retiran los cuerpos extraños infectados y se drenan los abscesos cardiacos y extracardiacos. Y la de CONTINUACIÓN, para eliminar la bacteria dormida y evitar recaídas, que en el paciente estable puede terminarse en casa hasta completar 6 semanas.',
      tx_farmacologico: 'Empírico en la nativa comunitaria o la protésica tardía (12 meses o más de la cirugía): ampicilina 12 g al día intravenosa en 4 a 6 dosis combinada con ceftriaxona 4 g al día, o con (flu)cloxacilina 12 g al día más gentamicina 3 mg/kg al día en dosis única (IIa C). Con alergia a penicilina: cefazolina 6 g al día o vancomicina 30 mg/kg al día con gentamicina (IIb C). El tratamiento empírico debe cambiarse a dirigido en cuanto se identifique el microorganismo, en 24 a 48 horas.',
      tx_intervencionista: 'Tres razones para operar y tres plazos: emergencia dentro de 24 horas, urgente en 3 a 5 días, no urgente en el mismo ingreso. La cirugía puede dar una ventaja de supervivencia de hasta el 20% en el primer año, y la propia guía recalca que la cirugía precoz es una buena opción para el paciente con indicación quirúrgica y riesgo operatorio bajo.',
      criterios_uci: 'Choque séptico, insuficiencia cardiaca aguda y choque cardiogénico con fallo multiorgánico son los motivos habituales de ingreso en UCI. Todo paciente con endocarditis que requiera UCI debe discutirse URGENTEMENTE en el Equipo de Endocarditis. En la serie multicéntrica más grande de pacientes críticos con endocarditis, la mortalidad hospitalaria fue del 32%.',
      criterios_tips: 'Las indicaciones de cirugía son las tres razones. La decisión del momento la toma el Equipo de Endocarditis, con una excepción explícita: la cirugía NO debe retrasarse por las discusiones del equipo en el paciente que necesita una operación de emergencia.',
      criterios_trasplante: 'El traslado a un Heart Valve Centre tiene lista propia: inestabilidad hemodinámica, regurgitación grave, endocarditis protésica, ictus, complicaciones extravalvulares, hemocultivos positivos más de 7 días con antibiótico apropiado, embolia, endocarditis de dispositivo y microorganismos agresivos o difíciles de tratar.',
      seguimiento_hospitalario: 'Vigilar lo que define las tres razones de cirugía: ecocardiograma y clínica para la insuficiencia cardiaca, hemocultivos de control y fiebre para la infección no controlada, y tamaño y movilidad de la vegetación para la embolia. A DONDE LLEVA: las fichas de insuficiencia cardiaca, infección no controlada, embolia sistémica, complicaciones neurológicas y choque séptico de este mismo tema son las complicaciones que hay que buscar aquí.',
      seguimiento_ambulatorio: 'Educación del paciente sobre el riesgo de recurrencia y las medidas preventivas, con énfasis en la salud dental y según su perfil de riesgo individual, en cada visita de seguimiento (I C). La rehabilitación cardiaca con ejercicio debe considerarse en el paciente clínicamente estable, con valoración individual (IIa C).',
      pronostico: 'La mortalidad hospitalaria ronda el 15 al 30% y no ha cambiado en veinte años. Identificar rápido al paciente de más riesgo es lo que ofrece la oportunidad de cambiar el curso de la enfermedad, y casi siempre eso significa cirugía urgente o de emergencia.',
      algoritmo: [
        'Fiebre o sepsis sin foco con un factor de riesgo: pensar en endocarditis',
        'Tres tandas de hemocultivos separadas 30 minutos, de vena periférica, ANTES del antibiótico',
        'Antibiótico empírico según nativa comunitaria o protésica precoz',
        'Ecocardiograma transtorácico y transesofágico, y clasificar por los criterios ESC 2023',
        'Caso posible: repetir hemocultivos y ecocardiograma a los 5 a 7 días, y angio-TC cardiaca',
        'Ajustar a terapia dirigida en 24 a 48 horas con el microorganismo identificado',
        'Buscar las tres razones de cirugía y fijar el plazo: 24 horas, 3 a 5 días o mismo ingreso',
        'Día 10 y estable: valorar paso a OPAT o a vía oral, con transesofágico previo'
      ],
      figura: 'reloj-cirugia'
    },
    {
      nombre: 'Endocarditis sobre válvula protésica',
      color: '#8c3a5c',
      definicion: 'Endocarditis sobre una prótesis valvular quirúrgica o transcatéter, o sobre el material usado para reparar una válvula. Se divide en PRECOZ, dentro de los 12 meses de la cirugía, y TARDÍA, a partir de los 12 meses, y esa frontera decide el antibiótico empírico.',
      epidemiologia: 'La mortalidad hospitalaria es el DOBLE que en la válvula nativa, con más complicaciones (insuficiencia cardiaca, trastornos de la conducción) y de forma independiente del microorganismo causal. Los más frecuentes en la protésica quirúrgica precoz son los estafilococos coagulasa negativos y S. aureus. Las bioprótesis mitrales y aórticas pueden asociarse a más riesgo de endocarditis que las mecánicas, y cada vez se implantan en mayor proporción.',
      fisiopatologia: 'Lo específico aquí es el biofilm sobre material extraño, y de ahí sale la regla de la rifampicina: antagoniza frente a la bacteria planctónica que se replica, pero sinergiza frente a la bacteria dormida dentro del biofilm y evita la selección de variantes resistentes. Por eso se añade solo tras 3 a 5 días de antibiótico eficaz, cuando la bacteriemia ya está aclarada.',
      factores_riesgo: [
        'Prótesis valvular quirúrgica o transcatéter, y cualquier material de reparación valvular',
        'Los 6 primeros meses tras implantar dispositivos de cierre septal, de cierre de la orejuela, injertos vasculares, filtros de cava o derivaciones ventriculoatriales',
        'Portador nasal de S. aureus no tratado antes de la cirugía electiva o del implante transcatéter',
        'Foco de sepsis dental no eliminado al menos 2 semanas antes del implante de la prótesis'
      ],
      clinica: 'La misma que la nativa, pero con dos diferencias que importan: la ecocardiografía puede ser normal o no concluyente hasta en el 30% de los casos, y las complicaciones perivalvulares son más frecuentes que en la nativa (la extensión perivalvular va del 10 al 30% en la nativa y es más alta en la protésica).',
      criterios_dx: 'Los mismos criterios ESC 2023, con dos recomendaciones de imagen propias de clase I B: en la endocarditis protésica POSIBLE se recomiendan PET/TC con 18F-FDG y angio-TC cardiaca para detectar lesiones valvulares y confirmar el diagnóstico. Si la ecocardiografía es negativa o no concluyente y el PET/TC no está disponible, debe considerarse SPECT/TC con leucocitos marcados (IIa C).',
      laboratorio: 'Hemocultivos como en la nativa, con una diferencia de cobertura empírica que se olvida: los estafilococos coagulasa negativos deben cubrirse empíricamente en la protésica y NO en la nativa. En la endocarditis protésica con hemocultivos negativos, la hibridación in situ fluorescente combinada con PCR y secuenciación del gen 16S mejoró el diagnóstico convencional en el 30% de los casos.',
      imagen: 'PET/TC con 18F-FDG y angio-TC cardiaca en la protésica posible (I B); angio-TC para las complicaciones paravalvulares o periprotésicas si la ecocardiografía no es concluyente (I B); SPECT/TC con leucocitos si el PET/TC no está disponible (IIa C). La dehiscencia parcial nueva de la prótesis es uno de los hallazgos ecocardiográficos que definen la complicación local.',
      complementarios: 'Antes de implantar una prótesis o cualquier material intracardiaco o intravascular hay dos medidas que pertenecen a este tema aunque se apliquen en otro servicio: cribar el estado de portador nasal de S. aureus y tratar a los portadores con mupirocina y clorhexidina, y eliminar los focos de sepsis dental al menos 2 semanas antes, salvo que el procedimiento sea urgente.',
      dx_diferencial: 'La disfunción protésica NO infecciosa: trombosis obstructiva, fallo estructural y fuga paravalvular por causa mecánica. La fuga paravalvular es la que más se cruza con este tema, porque puede ser consecuencia de la endocarditis o ser independiente de ella, y el tratamiento difiere.',
      tx_medico: 'Cirugía con recambio valvular nuevo y desbridamiento completo en la protésica PRECOZ, dentro de los 6 meses de la cirugía valvular (I C). En el resto, las indicaciones son las tres razones generales, con dos aceleradores propios.',
      tx_farmacologico: 'Estafilococo sensible a meticilina: (flu)cloxacilina 12 g al día o cefazolina 6 g al día, CON rifampicina 900 mg al día al menos 6 semanas, más gentamicina 3 mg/kg al día durante 2 semanas (I B). Empírico en la protésica PRECOZ (menos de 12 meses) o en la endocarditis asociada a cuidados sanitarios: vancomicina 30 mg/kg al día o daptomicina 10 mg/kg al día, con gentamicina y rifampicina (IIb C). Estreptococos orales sensibles: 6 semanas, frente a 4 en la nativa. Enterococo no HLAR: ampicilina con ceftriaxona 6 semanas, o con gentamicina 2 semanas.',
      tx_intervencionista: 'Dos indicaciones propias. Cirugía urgente a considerar en la endocarditis protésica causada por S. aureus o por bacilos gramnegativos no HACEK (IIa C). Y la reoperación se recomienda cuando una fuga paravalvular se relaciona con la endocarditis, o cuando causa hemólisis que obliga a transfusiones repetidas o insuficiencia cardiaca grave (I C).',
      criterios_uci: 'Los mismos que en la nativa, con un matiz: en la serie de pacientes críticos, la endocarditis sobre válvula NATIVA figuró entre los cuatro factores pronósticos independientes de mortalidad, junto con puntuaciones SAPS II por encima de 35, SOFA por encima de 8 e infección por S. aureus.',
      criterios_tips: 'La endocarditis protésica, con o sin disfunción de la prótesis, es por sí misma uno de los motivos de la lista de traslado a un Heart Valve Centre.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la aparición de dehiscencia protésica y de bloqueo auriculoventricular nuevo, que son signos de infección localmente no controlada y mueven la cirugía a urgente. A DONDE LLEVA: a las fichas de infección no controlada y de recaída y reinfección, donde la prótesis es un factor de riesgo reconocido.',
      seguimiento_ambulatorio: 'Profilaxis antibiótica recomendada de por vida ante procedimientos dentales de riesgo (I C), y educación en higiene dental y cutánea en cada visita. El registro danés más reciente describe más riesgo de recurrencia con prótesis biológica que con mecánica, aunque varios estudios previos no encontraron diferencias entre tipos de prótesis.',
      pronostico: 'Peor que la nativa de forma consistente: el doble de mortalidad hospitalaria y más complicaciones. La prótesis valvular figura además entre los factores asociados a más recaídas.',
      algoritmo: [
        'Datar la cirugía valvular: ¿menos o más de 12 meses?',
        'Hemocultivos y antibiótico empírico que cubra coagulasa negativos (y resistentes a meticilina si es precoz)',
        'Ecocardiograma transesofágico; si no concluye, PET/TC con 18F-FDG y angio-TC cardiaca',
        'Protésica precoz dentro de los 6 meses: cirugía con recambio valvular y desbridamiento completo',
        'Añadir rifampicina solo tras 3 a 5 días de antibiótico eficaz y bacteriemia aclarada',
        '¿S. aureus o gramnegativo no HACEK? Considerar cirugía urgente',
        '¿Fuga paravalvular relacionada con la endocarditis? Reoperación'
      ]
    },
    {
      nombre: 'Endocarditis derecha y del usuario de drogas inyectadas',
      color: '#2f6b5e',
      definicion: 'Endocarditis de la válvula tricúspide o, menos a menudo, de la pulmonar. Supone entre el 5 y el 10% de los casos, y su frecuencia puede estar aumentando porque aumentan sus factores de riesgo en algunos países.',
      epidemiologia: 'Representa menos del 10% de las endocarditis, pero en el paciente que necesita UCI se asocia a mortalidad alta. Las inyecciones repetidas llevan partículas contaminadas a la tricúspide y a las cavidades derechas, y pueden infectar también estructuras izquierdas, lo que empeora el pronóstico. El usuario de drogas inyectadas tiene además más prevalencia de infección por el virus de la inmunodeficiencia humana y de hepatitis que otros pacientes con endocarditis.',
      fisiopatologia: 'Lo específico del lado derecho: la embolia va al pulmón y no al cerebro ni al bazo, de modo que la enfermedad se presenta con clínica respiratoria, y la hipertensión pulmonar puede venir de émbolos sépticos pulmonares múltiples. La extensión perivalvular y el absceso son raros en la endocarditis derecha, salvo que sean consecuencia secundaria de una izquierda.',
      factores_riesgo: [
        'Usuario de drogas inyectadas, que es el factor de riesgo cada vez más frecuente',
        'Cardiopatía congénita',
        'Catéteres permanentes y dispositivos cardiacos implantables',
        'Inmunodepresión'
      ],
      clinica: 'Fiebre, bacteriemia y clínica pulmonar: tos, dolor torácico o hemoptisis. Puede haber insuficiencia cardiaca derecha por insuficiencia tricuspídea o pulmonar, o por la hipertensión pulmonar de los émbolos sépticos repetidos.',
      criterios_dx: 'Los mismos criterios ESC 2023, con una particularidad útil: la ecocardiografía TRANSTORÁCICA suele bastar para valorar la tricúspide, porque la válvula es anterior y las vegetaciones de la endocarditis derecha suelen ser grandes. La transesofágica se necesita a menudo para la válvula pulmonar o si hay catéteres venosos permanentes o dispositivos intracardiacos, y en la pulmonar protésica el PET/TC con 18F-FDG puede ser muy útil.',
      laboratorio: 'Hemocultivos como en cualquier endocarditis. Dos pistas microbiológicas propias: la inyección de drogas puede dar infecciones por bacterias gramnegativas, y las vegetaciones muy grandes junto a una historia de heroína marrón disuelta en zumo de limón sugieren infección por Candida spp. distinta de C. albicans, lo que obliga a añadir tratamiento antifúngico.',
      imagen: 'Transtorácica como primera aproximación a la tricúspide, transesofágica para la pulmonar o si hay material intravascular, y TC para identificar la enfermedad pulmonar concomitante, incluidos infartos y abscesos. La vegetación tricuspídea residual de más de 20 mm es por sí misma una indicación quirúrgica si hubo embolias pulmonares sépticas recurrentes.',
      complementarios: 'La ecocardiografía intracardiaca puede ayudar en pacientes seleccionados, aunque su disponibilidad es limitada. Y la vegetación pulmonar puede ser difícil de ver incluso con transesofágica, sobre todo si hay prótesis en posición pulmonar.',
      dx_diferencial: 'La neumonía y el tromboembolismo pulmonar, que es lo que casi siempre se diagnostica primero: un usuario de drogas inyectadas con fiebre, tos y dolor torácico sale del servicio de urgencias con otro diagnóstico si nadie saca hemocultivos y pide un ecocardiograma.',
      tx_medico: 'Cuando la vía intravenosa convencional no es posible, la endocarditis derecha por S. aureus en el usuario de drogas inyectadas puede tratarse con ciprofloxacino oral 750 mg cada 12 horas más rifampicina 300 mg cada 12 horas, si la cepa es sensible a los dos fármacos, el caso no es complicado y la adherencia se vigila con cuidado. El tratamiento oral parcial también puede beneficiar a estos pacientes.',
      tx_farmacologico: 'Una pauta de 2 semanas con oxacilina o cloxacilina SIN gentamicina es eficaz si se cumplen cuatro condiciones: el microorganismo es S. aureus sensible a meticilina; hay buena respuesta clínica y microbiológica, más de 96 horas; la vegetación mide 20 mm o menos; y no hay focos metastásicos de infección ni empiema, ni complicaciones cardiacas o extracardiacas, ni prótesis valvular o afectación izquierda, ni inmunosupresión grave. Los glucopéptidos (vancomicina) NO deben usarse en una pauta de 2 semanas. En el resto, la pauta estándar es de 4 a 6 semanas.',
      tx_intervencionista: 'Tres indicaciones propias en el paciente que ya recibe antibiótico apropiado: disfunción del ventrículo derecho secundaria a insuficiencia tricuspídea aguda grave que no responde a diuréticos (I B); vegetación persistente con insuficiencia respiratoria que requiere soporte ventilatorio tras embolias pulmonares recurrentes (I B); y vegetaciones tricuspídeas residuales grandes, de más de 20 mm, tras embolias pulmonares sépticas recurrentes (I C). Y una preferencia técnica: debe considerarse la REPARACIÓN de la tricúspide en lugar del recambio valvular cuando sea posible (IIa B).',
      criterios_uci: 'La insuficiencia respiratoria por embolia pulmonar séptica repetida es el motivo propio de este lado del corazón, y a la vez una indicación quirúrgica de clase I B cuando obliga a soporte ventilatorio con vegetación persistente.',
      criterios_tips: 'Las tres indicaciones quirúrgicas propias de la endocarditis derecha sustituyen aquí a la cuadrícula general, que está escrita para la endocarditis izquierda.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la función del ventrículo derecho, la oxigenación y la aparición de nuevos émbolos pulmonares, que son las tres cosas que mueven la indicación quirúrgica. A DONDE LLEVA: a la ficha de embolia sistémica para el umbral de los 10 mm, que en el lado derecho se sustituye por el de los 20 mm.',
      seguimiento_ambulatorio: 'El tratamiento de la adicción tras una endocarditis relacionada con el uso de drogas inyectadas se RECOMIENDA (I C), e incluye implicar a especialistas en adicciones antes del alta y, cuando proceda, medicación para el trastorno por opioides. El equipo multidisciplinar de adicciones (psiquiatras, enfermería y trabajo social) figura entre los adjuntos del Equipo de Endocarditis.',
      pronostico: 'Mejor que la izquierda en general, pero mala cuando requiere UCI. La afectación simultánea de estructuras izquierdas empeora el pronóstico, y el OPAT NO se recomienda en la endocarditis del usuario de drogas inyectadas (III C), lo que condiciona todo el plan de alta.',
      algoritmo: [
        'Usuario de drogas inyectadas con fiebre y clínica pulmonar: hemocultivos y ecocardiograma',
        'Transtorácica para la tricúspide; transesofágica si hay catéter, dispositivo o sospecha pulmonar',
        '¿Vegetaciones enormes y heroína marrón en zumo de limón? Añadir antifúngico',
        '¿S. aureus sensible, respuesta en 96 h, vegetación de 20 mm o menos y sin complicaciones? 2 semanas',
        'Si falla alguna condición: pauta estándar de 4 a 6 semanas',
        'Valorar las tres indicaciones quirúrgicas propias del lado derecho',
        'Antes del alta: implicar al equipo de adicciones; el OPAT no se recomienda aquí'
      ]
    },
    {
      nombre: 'Endocarditis relacionada con dispositivo cardiaco',
      color: '#3d5a73',
      definicion: 'Endocarditis asociada a un dispositivo cardiaco implantable electrónico, marcapasos o desfibrilador, con afectación de los electrodos o de las válvulas. Tiene recomendaciones de extracción propias, y es una de las entidades donde más se acierta o se falla por el momento de retirar el material.',
      epidemiologia: 'Los dispositivos cardiacos implantables figuran entre las condiciones de riesgo INTERMEDIO de endocarditis, y son además un factor de riesgo específico de endocarditis derecha. La embolia pulmonar es frecuente en la endocarditis de electrodo, como en la derecha en general.',
      fisiopatologia: 'Es una infección de material extraño con biofilm, igual que la protésica, pero con una diferencia práctica: el material es extraíble por completo, y de ahí que la decisión central sea la extracción del sistema entero y no solo la duración del antibiótico.',
      factores_riesgo: [
        'Portador de dispositivo cardiaco implantable transvenoso',
        'Medidas asépticas insuficientes en el sitio de implantación',
        'Ausencia de profilaxis antibiótica que cubra S. aureus en el implante',
        'Reimplantación demasiado precoz o en el mismo sitio del generador previo'
      ],
      clinica: 'Puede ser muy larvada, y a menudo lo único que hay es bacteriemia por grampositivos sin foco en un portador de dispositivo. El cuadro puede llegar como infección local del bolsillo, como bacteriemia persistente o como embolia pulmonar.',
      criterios_dx: 'Los criterios ESC 2023, con dos precisiones propias: se recomiendan TANTO la ecocardiografía transtorácica COMO la transesofágica ante la sospecha de endocarditis relacionada con dispositivo, para identificar vegetaciones; y el PET/TC con 18F-FDG puede considerarse en el caso POSIBLE para confirmar el diagnóstico (IIa B).',
      laboratorio: 'Se recomienda obtener al menos TRES tandas de hemocultivos antes de iniciar sin demora el antibiótico empírico de la infección de dispositivo, con cobertura para estafilococos resistentes a meticilina y para bacterias gramnegativas (I C). Y la recomendación en contra que evita extracciones innecesarias: retirar el dispositivo tras UN SOLO hemocultivo positivo, sin ninguna otra evidencia clínica de infección, NO se recomienda (III C).',
      imagen: 'Transtorácica y transesofágica, las dos. PET/TC con 18F-FDG en el caso posible (IIa B). La TC sirve, como en la derecha, para ver los infartos y abscesos pulmonares de las embolias de electrodo.',
      complementarios: 'Las vegetaciones grandes pueden aspirarse por vía percutánea antes de extraer el electrodo, para reducir el riesgo de embolización. Y la profilaxis antibiótica que cubre S. aureus se recomienda para el implante de un dispositivo (I B), igual que las medidas asépticas óptimas previas al procedimiento en el sitio de implantación (I B).',
      dx_diferencial: 'La infección limitada al bolsillo del generador sin endocarditis, y la bacteriemia de otro origen en un portador de dispositivo. La diferencia no es académica: decide si hay que extraer el sistema completo y cuánto antibiótico hace falta después.',
      tx_medico: 'Extracción COMPLETA del sistema sin demora en la endocarditis de dispositivo DEFINITIVA, bajo el antibiótico empírico inicial (I B). Debe considerarse la extracción completa en la endocarditis valvular aunque no haya afectación demostrada del electrodo, teniendo en cuenta el patógeno identificado y la necesidad de cirugía valvular (IIa C). Y en el caso POSIBLE con bacteriemia o fungemia oculta por grampositivos, debe considerarse si la bacteriemia persiste tras un curso de antimicrobiano (IIa C).',
      tx_farmacologico: 'Tras la extracción, debe considerarse PROLONGAR el antibiótico a 4 a 6 semanas si hay émbolos sépticos o prótesis valvular (IIa C). En el extremo opuesto: en la endocarditis de dispositivo NO causada por S. aureus, sin afectación valvular ni vegetación en el electrodo, y con hemocultivos de control negativos y sin émbolos sépticos, pueden considerarse 2 semanas de antibiótico tras la extracción (IIb C).',
      tx_intervencionista: 'La reimplantación, si está indicada, se recomienda en un sitio DISTANTE del generador previo, lo más tarde posible, una vez remitidos los signos y síntomas de infección, y con hemocultivos negativos al menos 72 horas si no hubo vegetaciones y al menos 2 semanas si se visualizaron (I C). El uso de una funda antibiótica puede considerarse en pacientes de alto riesgo seleccionados que se reimplantan (IIb B).',
      criterios_uci: 'Los generales de la endocarditis. La embolia pulmonar séptica repetida por vegetaciones de electrodo es la vía propia hacia la insuficiencia respiratoria.',
      criterios_tips: 'La endocarditis relacionada con dispositivo figura en la lista explícita de traslado a un Heart Valve Centre, y la extracción de electrodos requiere experiencia específica, que la guía nombra entre las del Equipo de Endocarditis.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Hemocultivos de control tras la extracción, que son los que deciden la duración del antibiótico y el momento de la reimplantación. A DONDE LLEVA: a la ficha de infección no controlada si la bacteriemia persiste pese a haber retirado el material.',
      seguimiento_ambulatorio: 'Los portadores de dispositivo están en la categoría de riesgo INTERMEDIO: la profilaxis antibiótica no se recomienda de rutina y puede valorarse individualmente, pero las medidas generales de prevención se recomiendan con fuerza.',
      pronostico: 'Depende sobre todo de haber extraído el sistema completo y a tiempo; la extracción sin demora en el caso definitivo es una recomendación de clase I B precisamente por eso.',
      algoritmo: [
        'Portador de dispositivo con bacteriemia por grampositivos: pensar en endocarditis de dispositivo',
        'Al menos tres tandas de hemocultivos antes del antibiótico empírico',
        'Ecocardiograma transtorácico Y transesofágico; PET/TC si el caso queda en posible',
        '¿Un solo hemocultivo positivo sin otra evidencia? NO retirar el dispositivo',
        'Caso definitivo: extracción completa del sistema sin demora',
        'Duración tras la extracción: 4 a 6 semanas si hay émbolos o prótesis; 2 semanas en el caso favorable',
        'Reimplantar en sitio distante, lo más tarde posible, con hemocultivos negativos 72 h o 2 semanas'
      ]
    },
    {
      nombre: 'Endocarditis con hemocultivos negativos',
      color: '#6b4a2e',
      definicion: 'Endocarditis que cumple criterios sin que los hemocultivos convencionales identifiquen el microorganismo. Es la forma que más depende de pedir las pruebas correctas, y la que más se podría haber evitado.',
      epidemiologia: 'Su causa más frecuente no es un germen raro: es la administración PREVIA de antibiótico. Por eso la guía la usa como argumento para insistir en sacar hemocultivos antes de tratar, en particular en pacientes con factores de riesgo conocidos de endocarditis.',
      fisiopatologia: 'Dos mecanismos distintos y con conducta distinta. Uno es el antibiótico previo, que esteriliza el cultivo sin curar la infección. El otro son los microorganismos de crecimiento lento o intracelulares obligados, y los hongos, que no crecen en los medios habituales y necesitan medios especializados y tiempo.',
      factores_riesgo: [
        'Antibiótico administrado antes de extraer los hemocultivos',
        'Exposición a Coxiella burnetii, Bartonella spp., Brucella spp. y otros patógenos según la epidemiología local',
        'Inmunosupresión grave, que orienta a Aspergillus spp.',
        'Material protésico, donde la hibridación in situ con PCR del gen 16S aporta más'
      ],
      clinica: 'A menudo subaguda, con fiebre baja o sin fiebre y síntomas inespecíficos, que es justo la presentación que recibe antibiótico empírico ambulatorio antes de que nadie piense en endocarditis.',
      criterios_dx: 'Hay dos puertas de entrada a criterio MAYOR sin hemocultivo convencional positivo: un solo hemocultivo positivo para Coxiella burnetii, o un título de IgG de fase I por encima de 1:800. Y la evidencia microbiológica que no llega a mayor, o la serología de infección activa por un microorganismo compatible, cuentan como criterio MENOR.',
      laboratorio: 'Serología sistemática, según la epidemiología local, para Coxiella burnetii, Bartonella spp., Aspergillus spp., Mycoplasma pneumoniae, Brucella spp. y Legionella pneumophila, seguida de PCR específica para Tropheryma whipplei, Bartonella spp. y hongos (Candida spp., Aspergillus spp.) en sangre y tejido. Secuenciación de ARN ribosómico 16S y 18S del tejido. Y en el paciente estable, con síntomas subagudos, sin complicaciones locales ni a distancia y con un curso muy corto de antibiótico, puede hacer falta RETIRAR el antibiótico y repetir los hemocultivos.',
      imagen: 'La misma estrategia multimodal, con más peso aún: cuando la microbiología no da el criterio mayor, el criterio mayor tiene que venir de la imagen, y ahí entran la angio-TC cardiaca, el PET/TC con 18F-FDG y el SPECT/TC con leucocitos.',
      complementarios: 'Todo el tejido o material protésico obtenido en cirugía debe someterse sistemáticamente a cultivo, examen histológico y secuenciación de ARN ribosómico 16S o 18S. La secuenciación de nueva generación del ADN microbiano libre en plasma puede facilitar en el futuro un diagnóstico rápido.',
      dx_diferencial: 'La endocarditis NO bacteriana, que hay que considerar sistemáticamente cuando todos los estudios microbiológicos son negativos: anticuerpos antinucleares y estudio de síndrome antifosfolípido (anticardiolipina IgG, anti-beta-2-glucoproteína 1 IgG e IgM), sabiendo que esos anticuerpos pueden aparecer también en endocarditis probadas. El estudio histológico del tejido resecado es además lo que permite identificar causas neoplásicas y autoinmunes.',
      tx_medico: 'Si los hemocultivos iniciales son negativos y no hay respuesta clínica, hay que considerar la etiología de la endocarditis con hemocultivos negativos y AMPLIAR el espectro antibiótico a esos patógenos. Si está indicada la cirugía, puede hacerse diagnóstico molecular sobre el tejido.',
      tx_farmacologico: 'Las pautas de la guía para los patógenos raros son dirigidas y distintas de lo habitual. Para Coxiella burnetii, doxiciclina MÁS hidroxicloroquina (con monitorización de los niveles séricos de hidroxicloroquina) es significativamente superior a doxiciclina sola. Para Bartonella se han descrito ampicilina o amoxicilina 12 g al día, o ceftriaxona 2 g al día, combinadas con un aminoglucósido. Las fluoroquinolonas nuevas (levofloxacino, moxifloxacino) son más potentes que ciprofloxacino frente a patógenos intracelulares como Mycoplasma spp., Legionella spp. y Chlamydia spp.',
      tx_intervencionista: 'Las mismas tres razones, con un matiz: el OPAT no se recomienda con microorganismos muy difíciles de tratar (III C), y varios de los patógenos de esta ficha entran en esa categoría.',
      criterios_uci: 'Los generales. En el paciente de UCI con hemocultivos negativos, la guía recomienda considerar pruebas serológicas o moleculares por PCR, porque identificar el microorganismo sigue siendo la base del tratamiento eficaz en la endocarditis complicada.',
      criterios_tips: 'Los microorganismos agresivos o difíciles de tratar, incluidos los hongos, figuran entre los motivos de traslado a un Heart Valve Centre.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si la fiebre persiste, revisar si el espectro cubre los patógenos de esta lista antes de concluir que el tratamiento fracasa. A DONDE LLEVA: a la ficha de infección no controlada, que recoge las otras causas de fiebre persistente.',
      seguimiento_ambulatorio: 'Los microorganismos resistentes (Brucella, Legionella, Chlamydia, Mycoplasma, Mycobacterium, Bartonella, C. burnetii y hongos) figuran entre los factores asociados a más recaídas, de modo que estos pacientes necesitan un seguimiento más estrecho.',
      pronostico: 'Depende de haber identificado el patógeno: la guía es explícita en que la identificación del microorganismo sigue siendo la base del tratamiento eficaz en los casos complicados.',
      algoritmo: [
        'Hemocultivos negativos: preguntar primero si hubo antibiótico antes',
        'Paciente estable, subagudo, sin complicaciones y con curso corto: retirar antibiótico y repetir hemocultivos',
        'Serología según epidemiología local (Coxiella, Bartonella, Brucella, Legionella, Mycoplasma, Aspergillus)',
        'PCR específica para T. whipplei, Bartonella y hongos en sangre y tejido',
        'Secuenciación de ARN ribosómico 16S y 18S del tejido quirúrgico',
        'Si todo es negativo: considerar endocarditis no bacteriana y pedir antinucleares y antifosfolípidos',
        'Pauta dirigida; en Coxiella, doxiciclina MÁS hidroxicloroquina'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca: la primera razón para operar',
      color: '#8c3a34',
      definicion: 'Complicación de la endocarditis (ver las fichas de válvula nativa y de válvula protésica): insuficiencia cardiaca por regurgitación valvular aguda, obstrucción o fístula intracardiaca. Es la complicación más frecuente, la presentación clínica predominante y la principal indicación de cirugía URGENTE.',
      epidemiologia: 'En las series publicadas aparece entre el 19 y el 73% de los casos. En el registro EURO-ENDO hubo insuficiencia cardiaca congestiva en el 27,2%. El choque cardiogénico puede ser la primera manifestación en hasta el 5% de los casos, y la mitad de esos pacientes lo desarrollan en las primeras 72 horas del ingreso.',
      fisiopatologia: 'Lo específico de esta complicación, sin repetir el mecanismo de la infección: la perforación y la rotura del velo, y la rotura de cuerdas mitrales, producen una regurgitación grave NUEVA o empeoran una previa, y de ahí la insuficiencia cardiaca aguda. Causas menos frecuentes son la fístula intracardiaca, la interferencia mecánica de la masa de la vegetación con la apertura y el cierre del velo, y el infarto por embolia de la vegetación a una arteria coronaria.',
      factores_riesgo: [
        'Edad avanzada',
        'Endocarditis sobre válvula nativa con afectación de la válvula aórtica',
        'Comorbilidad alta',
        'Al alta, la regurgitación valvular residual, en especial mitral, predice insuficiencia cardiaca en el seguimiento'
      ],
      clinica: 'Desde disnea leve hasta disnea rápidamente progresiva, ortopnea, edema pulmonar y choque cardiogénico. La insuficiencia cardiaca de NUEVA aparición es la presentación predominante; el empeoramiento de una insuficiencia cardiaca previa es menos frecuente. En la endocarditis derecha, la presentación es de congestión derecha.',
      criterios_dx: 'Los umbrales que fijan el plazo quirúrgico. EMERGENCIA, dentro de 24 horas: insuficiencia cardiaca de clase IV de la NYHA de nueva aparición, edema pulmonar o choque cardiogénico, independientemente del estado de la infección y del tiempo de antibiótico, cuando la intervención no sea fútil. URGENTE, en 3 a 5 días: formas más leves (clase II a III de la NYHA) con regurgitación valvular grave, o signos ecocardiográficos de compromiso hemodinámico (presión telediastólica del ventrículo izquierdo elevada, presión auricular izquierda alta, hipertensión pulmonar moderada o grave) o vegetaciones grandes.',
      laboratorio: 'El péptido natriurético tipo B y la troponina se han asociado a peor pronóstico en la endocarditis, de modo que sirven para graduar el riesgo, no para decidir la cirugía: lo que decide el plazo es la clínica y el ecocardiograma.',
      imagen: 'La ecocardiografía transtorácica aporta la información sobre la gravedad de las consecuencias hemodinámicas de la disfunción valvular. Los pacientes con insuficiencia cardiaca presentan con más frecuencia fracción de eyección más baja, vegetaciones más grandes, abscesos perivalvulares, pseudoaneurismas y regurgitación por perforación o rotura del velo. La aparición NUEVA de presiones de llenado elevadas, hipertensión pulmonar o derrame pericárdico puede llevar a indicar cirugía urgente o de emergencia.',
      complementarios: 'Antes de la cirugía, la evaluación coronaria tiene regla propia: angio-TC coronaria multicorte de alta resolución si hay vegetaciones aórticas, paciente estable y riesgo coronario alto (I B); coronariografía invasiva si no hay vegetaciones aórticas y el riesgo coronario es alto (I C); y en emergencia, cirugía sin evaluación coronaria previa (IIa C).',
      dx_diferencial: 'La insuficiencia cardiaca por una valvulopatía previa descompensada por la fiebre y la anemia, sin regurgitación aguda nueva. La diferencia la da el ecocardiograma, y determina si el paciente necesita cirugía en 24 horas o no.',
      tx_medico: 'El tratamiento de la congestión no sustituye a la cirugía ni justifica retrasarla: la guía dice que la insuficiencia cardiaca que complica una endocarditis se asocia de forma independiente a peor supervivencia hospitalaria y al año, y que la cirugía es el ÚNICO tratamiento eficaz asociado a mejor supervivencia. El beneficio de la cirugía frente al tratamiento médico es más pronunciado precisamente en los pacientes en clase III a IV de la NYHA.',
      tx_farmacologico: 'En el paciente SIN compromiso hemodinámico, lo primero indicado es el antibiótico intravenoso con observación clínica y ecocardiográfica estricta, y la cirugía puede retrasarse temporalmente; aun así, la guía recalca que la cirugía precoz es una buena opción si hay indicación quirúrgica y el riesgo operatorio es bajo. El manejo farmacológico de la insuficiencia cardiaca como tal está en el módulo de Insuficiencia cardiaca, que esta ficha no repite.',
      tx_intervencionista: 'Cirugía de emergencia (dentro de 24 horas) en la endocarditis aórtica o mitral, nativa o protésica, con regurgitación aguda grave, obstrucción o fístula que cause edema pulmonar refractario o choque cardiogénico (I B). Cirugía urgente (3 a 5 días) con regurgitación aguda grave u obstrucción que cause síntomas de insuficiencia cardiaca o signos ecocardiográficos de mala tolerancia hemodinámica (I B). Sin compromiso hemodinámico, cirugía no urgente (I).',
      criterios_uci: 'La insuficiencia cardiaca aguda y el choque cardiogénico con fallo multiorgánico son, junto al choque séptico, el motivo más habitual de ingreso en UCI, de monitorización avanzada, de tratamiento vasoactivo y de soporte de órganos.',
      criterios_tips: 'La inestabilidad hemodinámica con soporte farmacológico o respiratorio, y la regurgitación valvular grave por criterios clínicos y ecocardiográficos, son dos de los motivos de traslado a un Heart Valve Centre.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ecocardiograma y clínica son la vigilancia que decide el plazo; la decisión del momento la toma el Equipo de Endocarditis, salvo en la cirugía de emergencia, que no debe esperar a la discusión del equipo.',
      seguimiento_ambulatorio: 'La insuficiencia cardiaca es más probable durante el seguimiento en los pacientes dados de alta CON regurgitación valvular, en particular mitral, que en los que se van sin ella; es el dato que decide la intensidad del seguimiento ecocardiográfico.',
      pronostico: 'Se asocia de forma independiente a peor supervivencia hospitalaria y al año. La mortalidad hospitalaria aumenta con la gravedad de la presentación, y es ahí donde el beneficio de la cirugía es mayor.',
      algoritmo: [
        '¿Edema pulmonar refractario o choque cardiogénico? Cirugía de emergencia, dentro de 24 horas',
        '¿Síntomas de insuficiencia cardiaca o mala tolerancia hemodinámica en el eco? Urgente, 3 a 5 días',
        '¿Sin compromiso hemodinámico? Antibiótico con observación estricta y cirugía no urgente',
        'Valorar la anatomía coronaria según haya o no vegetación aórtica',
        'No esperar a la reunión del equipo si la indicación es de emergencia'
      ]
    },
    {
      nombre: 'Infección no controlada: absceso, fístula y bloqueo nuevo',
      color: '#9c3a52',
      definicion: 'Complicación de la endocarditis (ver las fichas de válvula nativa y de válvula protésica): es la segunda indicación de cirugía en frecuencia, y existe en tres formas distintas: infección o sepsis persistente a pesar del antibiótico, signos de infección LOCAL que no responden al antibiótico, o infección por microorganismos resistentes o muy virulentos.',
      epidemiologia: 'La extensión perivalvular aparece entre el 10 y el 30% de las endocarditis sobre válvula nativa, con cifras más altas en la protésica. Es más frecuente en la válvula aórtica que en la mitral, y puede serlo más en la aórtica bicúspide que en la tricúspide. No operar una infección no controlada se asocia a mortalidad significativamente mayor.',
      fisiopatologia: 'Lo propio de esta complicación es la vía anatómica de la extensión: en la endocarditis aórtica se extiende sobre todo a la fibrosa intervalvular mitroaórtica, mientras que en la mitral los abscesos perivalvulares se localizan habitualmente en posición posterior o lateral. Esa anatomía explica el bloqueo auriculoventricular, que aparece cuando la infección alcanza el tejido de conducción vecino a la raíz aórtica.',
      factores_riesgo: [
        'Válvula aórtica, y en particular la aórtica bicúspide',
        'Endocarditis sobre válvula protésica',
        'S. aureus, por su progresión rápida y su capacidad de destrucción local y de formar abscesos',
        'Hongos, bacterias multirresistentes (S. aureus resistente a meticilina, enterococo resistente a vancomicina) y, raramente, gramnegativos no HACEK'
      ],
      clinica: 'Fiebre persistente e infección, bloqueo auriculoventricular nuevo, dolor torácico, soplo nuevo, embolia recurrente o insuficiencia cardiaca pueden indicar extensión perivalvular. Los signos de infección localmente no controlada son el aumento del tamaño de la vegetación, la formación de absceso, la aparición de pseudoaneurismas o fístulas y el bloqueo auriculoventricular nuevo.',
      criterios_dx: 'La definición de infección PERSISTENTE es, reconocidamente, algo arbitraria: fiebre y hemocultivos que siguen positivos tras 7 días de antibiótico apropiado. Los plazos: cirugía URGENTE (3 a 5 días) en la infección localmente no controlada, es decir absceso, falso aneurisma, fístula, vegetación que crece, dehiscencia protésica o bloqueo auriculoventricular nuevo (I B); cirugía urgente a considerar si los hemocultivos siguen positivos más de una semana o persiste la sepsis con antibiótico apropiado y control adecuado de los focos metastásicos (IIa B).',
      laboratorio: 'Los hemocultivos que siguen positivos a las 48 a 72 horas del inicio del antibiótico son un factor de riesgo INDEPENDIENTE de mortalidad hospitalaria, de modo que un hemocultivo de control a las 48 horas no es rutina: es información pronóstica y de decisión.',
      imagen: 'El diagnóstico debe confirmarse por ecocardiografía transesofágica, más sensible y específica que la transtorácica, con una salvedad importante: la calcificación del anillo mitral puede ocultar extensiones perivalvulares pequeñas, sobre todo posteriores. La TC cardiaca es una alternativa precisa para valorar la extensión perivalvular, y el PET/TC puede ser particularmente útil en la protésica.',
      complementarios: 'Ante bloqueo auriculoventricular completo que va a cirugía por endocarditis valvular, debe considerarse implantar un marcapasos EPICÁRDICO inmediato si hay alguno de estos predictores de bloqueo persistente: alteración de la conducción preoperatoria, infección por S. aureus, absceso de la raíz aórtica, afectación de la válvula tricúspide o cirugía valvular previa (IIa C).',
      dx_diferencial: 'Antes de llamar fracaso al tratamiento hay que descartar las otras causas de fiebre y hemocultivos positivos: abscesos extracardiacos (esplénico, vertebral, cerebral o renal), vías infectadas y complicaciones embólicas. Y una que se olvida: la fiebre persistente puede ser una REACCIÓN ADVERSA al antibiótico.',
      tx_medico: 'En muchos casos de infección persistente el antibiótico solo no basta para erradicar la infección. Operar por infección no controlada tiene potencial de mejorar la supervivencia al año entre un 15 y un 20%. Y una excepción explícita: raramente, cuando no hay otra razón para operar y la fiebre se controla con facilidad, los abscesos pequeños o los pseudoaneurismas pueden tratarse de forma conservadora con seguimiento clínico y ecocardiográfico estrecho.',
      tx_farmacologico: 'Antes de concluir que el antibiótico fracasa, hay que excluir abscesos extracardiacos, vías infectadas, complicaciones embólicas y la propia reacción adversa al antibiótico como causa de la fiebre; la cirugía por infección persistente está indicada una vez excluidas esas causas. Cuando los microorganismos son resistentes o muy virulentos, su presencia debe llevar a discusión en el Equipo de Endocarditis y a cirugía urgente.',
      tx_intervencionista: 'Cirugía urgente en la infección localmente no controlada (I B). Cirugía urgente o no urgente, según la situación hemodinámica, en la endocarditis causada por hongos u organismos multirresistentes (I C). Cirugía urgente a considerar en la endocarditis protésica por S. aureus o bacilos gramnegativos no HACEK (IIa C).',
      criterios_uci: 'La sepsis persistente a pesar del antibiótico adecuado es, junto con la insuficiencia cardiaca, lo que lleva a estos pacientes a UCI, y la cirugía se asocia a reducción significativa de la mortalidad precoz y al año en la endocarditis con choque séptico.',
      criterios_tips: 'Los hemocultivos positivos más de 7 días con antibiótico apropiado, las complicaciones extravalvulares como abscesos y fístulas, y los microorganismos agresivos o difíciles de tratar están en la lista de traslado a un Heart Valve Centre.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Hemocultivos de control y vigilancia ecocardiográfica de la extensión local: la infección no controlada también aparece cuando se observan signos de progresión LOCAL en la imagen de seguimiento, aunque el paciente parezca mejor. A DONDE LLEVA: a la ficha de choque séptico y a la de recaída, donde la extensión perianular y el cultivo valvular positivo son factores de riesgo.',
      seguimiento_ambulatorio: 'Los focos metastásicos de infección persistentes y la extensión perianular figuran entre los factores asociados a más recaídas, igual que la persistencia de fiebre en el séptimo día postoperatorio.',
      pronostico: 'No operar una infección no controlada se asocia a mortalidad significativamente mayor, y es una de las situaciones en que la cirugía tiene el mayor rendimiento documentado del tema.',
      algoritmo: [
        '¿Fiebre y hemocultivos positivos tras 7 días de antibiótico apropiado? Infección persistente',
        'Antes de llamarlo fracaso: descartar absceso extracardiaco, vía infectada, embolia y reacción al antibiótico',
        '¿Absceso, falso aneurisma, fístula, vegetación que crece, dehiscencia o bloqueo AV nuevo? Cirugía urgente',
        '¿Hongos o multirresistentes? Cirugía urgente o no urgente según la hemodinámica',
        '¿Bloqueo AV completo con un predictor de persistencia? Marcapasos epicárdico inmediato',
        'Excepción: absceso pequeño sin otra indicación y fiebre fácil de controlar, manejo conservador estrecho'
      ]
    },
    {
      nombre: 'Embolia sistémica y la vegetación de 10 mm',
      color: '#5c3d8c',
      definicion: 'Complicación de la endocarditis (ver las fichas de válvula nativa y de válvula protésica): migración de las vegetaciones cardiacas. Es la tercera razón para operar, y la única de las tres que se opera para PREVENIR algo en vez de para tratarlo.',
      epidemiologia: 'El riesgo embólico es alto: entre el 20 y el 50% de los pacientes. Y hasta en el 50% los eventos son clínicamente SILENTES. El cerebro y el bazo son los sitios más frecuentes en la endocarditis izquierda, mientras que la embolia pulmonar es frecuente en la derecha y en la de electrodo de marcapasos. Las complicaciones embólicas aparecieron en el 25,3% del registro EURO-ENDO.',
      fisiopatologia: 'Lo específico es la curva temporal, y es lo más útil de esta ficha: la mayor incidencia de ictus embólico se observa en los días alrededor del diagnóstico, el riesgo es máximo el día SIGUIENTE al inicio del antibiótico, es 10 a 20 veces mayor en el día previo y posterior al inicio que en las 2 semanas anteriores y posteriores, y cae de forma continua durante las 2 primeras semanas de tratamiento. De ahí que el beneficio de operar para prevenir embolias sea mayor justo al principio.',
      factores_riesgo: [
        'Tamaño y movilidad de la vegetación, que son los predictores independientes más importantes',
        'Localización mitral de la vegetación, y afectación multivalvular',
        'S. aureus, Streptococcus gallolyticus y Candida spp.',
        'Embolia previa, y el crecimiento o la disminución del tamaño de la vegetación bajo antibiótico',
        'En el cálculo de riesgo embólico publicado: S. aureus, embolia previa, longitud de la vegetación, edad, diabetes y fibrilación auricular'
      ],
      clinica: 'El ictus puede ser la PRIMERA manifestación de la endocarditis, y a menudo es la embolia lo que lleva al diagnóstico. Las embolias esplénicas y cerebrales son con frecuencia asintomáticas y se diagnostican por imagen no invasiva.',
      criterios_dx: 'Los tres umbrales de cirugía. Vegetación persistente de 10 mm o más TRAS uno o más episodios embólicos a pesar de antibiótico apropiado: cirugía urgente (I B). Vegetación de 10 mm o más CON otra indicación de cirugía: urgente (I C). Vegetación de 10 mm o más SIN disfunción valvular grave ni evidencia clínica de embolia, con riesgo quirúrgico bajo: puede considerarse urgente (IIb B). Por encima de 30 mm de longitud el riesgo de complicación neurológica es particularmente alto.',
      laboratorio: 'Los hemocultivos deciden parte del riesgo: S. aureus, S. gallolyticus y Candida spp. son microorganismos asociados a más embolia, y la endocarditis estafilocócica es en sí misma un factor de riesgo embólico, lo que importa más cada año porque su incidencia está aumentando.',
      imagen: 'La ecocardiografía identifica las estructuras potencialmente embolígenas, aunque predecir el MOMENTO de la embolización sigue siendo difícil. La TC de cuerpo entero se hace con frecuencia en el estudio preoperatorio, pero rara vez cambia el diagnóstico o el manejo; la TC CEREBRAL, en cambio, sí puede modificar la decisión clínica y el desenlace cuando se plantea cirugía. En el paciente asintomático, la imagen cerebral y de cuerpo entero puede considerarse como cribado (IIb B), y una embolia silente detectada así cuenta como criterio menor.',
      complementarios: 'Un matiz de la evidencia que conviene saber: un estudio reciente demostró que el tamaño de la vegetación predijo peor desenlace SOLO cuando coexistía con otra indicación de cirugía (insuficiencia cardiaca o infección no controlada). Y en la endocarditis por S. aureus se ha asociado dehiscencia protésica con la cirugía precoz, de modo que la decisión es individualizada.',
      dx_diferencial: 'En la endocarditis derecha y de electrodo, lo que hay que esperar es embolia PULMONAR y no sistémica, y el umbral quirúrgico cambia: vegetación tricuspídea residual de más de 20 mm tras embolias pulmonares sépticas recurrentes (I C).',
      tx_medico: 'La cirugía precoz reduce el riesgo de embolización: en un ensayo aleatorizado en pacientes jóvenes de bajo riesgo con vegetaciones grandes y endocarditis estreptocócica no hubo diferencia en mortalidad total a 6 meses, pero el riesgo de embolización SÍ se redujo significativamente con cirugía precoz. Y el tratamiento conservador inicial se ha asociado a mayor mortalidad en análisis observacionales de pacientes de más riesgo.',
      tx_farmacologico: 'La anticoagulación en la endocarditis izquierda no parece modificar el riesgo de ictus, de hemorragia cerebrovascular ni la mortalidad a 10 semanas, de modo que se recomienda CONTINUARLA en quien ya tenía indicación previa de anticoagulante, en ausencia de otras contraindicaciones. Se prefiere en general cambiar el anticoagulante oral por heparina si hay sangrado cerebral o indicación de cirugía precoz. La trombolisis NO se recomienda en el ictus embólico por endocarditis (III C), y los tratamientos antitrombóticos y trombolíticos no son beneficiosos.',
      tx_intervencionista: 'La extracción quirúrgica del material potencialmente embolígeno puede prevenir nuevas embolias, y dado el riesgo inminente y las tasas altas de embolización con vegetaciones grandes y móviles, debe considerarse cirugía URGENTE (3 a 5 días) en esos pacientes. La decisión es individualizada y hay que equilibrarla con el riesgo quirúrgico, que a su vez depende de los eventos neurológicos previos y de la comorbilidad.',
      criterios_uci: 'La embolia cerebral grave es, además, una de las contraindicaciones del OPAT (III C), lo que condiciona el plan de alta aunque el paciente se estabilice.',
      criterios_tips: 'La embolia figura en la lista explícita de traslado a un Heart Valve Centre, igual que el ictus con endocarditis definitiva o posible.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Medir el tamaño y la movilidad de la vegetación en los ecocardiogramas de seguimiento, sabiendo que tanto el crecimiento como la disminución bajo antibiótico se asocian a más riesgo embólico. A DONDE LLEVA: a la ficha de complicaciones neurológicas, que es donde la embolia tiene más consecuencias.',
      seguimiento_ambulatorio: 'La vegetación residual al terminar el tratamiento NO se asoció a más recurrencia de endocarditis, aunque ese resultado debe interpretarse con cautela.',
      pronostico: 'El ictus es una complicación grave asociada a más morbilidad y mortalidad, y el riesgo de complicación neurológica es particularmente alto con vegetaciones de más de 30 mm.',
      algoritmo: [
        'Medir la vegetación y valorar su movilidad en el ecocardiograma',
        '¿10 mm o más y ya embolizó a pesar de antibiótico apropiado? Cirugía urgente',
        '¿10 mm o más y hay otra indicación de cirugía? Urgente',
        '¿10 mm o más, sin disfunción grave ni embolia y riesgo quirúrgico bajo? Puede considerarse urgente',
        'Recordar la curva: el riesgo es máximo el día siguiente al inicio del antibiótico y cae en 2 semanas',
        'Si ya tomaba anticoagulante por otra indicación: continuarlo; nunca trombolisis'
      ]
    },
    {
      nombre: 'Complicaciones neurológicas',
      color: '#4a3d73',
      definicion: 'Complicación de la endocarditis (ver la ficha de embolia sistémica, de la que casi siempre deriva): ictus isquémico, accidente isquémico transitorio, hemorragia intracraneal o subaracnoidea, meningitis, absceso cerebral, encefalopatía y aneurismas infecciosos. Pueden aparecer antes o después del diagnóstico, y también recurrir más tarde en el curso.',
      epidemiologia: 'Las complicaciones cerebrovasculares sintomáticas ocurren hasta en el 35% de los pacientes, y las silentes (isquemia y microhemorragia) hasta en el 80%. La presentación más frecuente es el ictus isquémico y el accidente isquémico transitorio. Hay síntomas neurológicos focales en el 40% de los afectados, y presentaciones no focales en aproximadamente un tercio.',
      fisiopatologia: 'Lo propio de esta complicación es que el émbolo es infectado, y eso tiene dos consecuencias: puede sembrar la pared arterial y generar un aneurisma infeccioso, y hace que los tratamientos antitrombóticos y trombolíticos del ictus habitual no sirvan aquí. La endocarditis por S. aureus se asocia con más frecuencia a complicaciones neurológicas que la causada por otros microorganismos.',
      factores_riesgo: [
        'Infección por S. aureus',
        'Tamaño y movilidad de la vegetación',
        'Vegetaciones de más de 30 mm de longitud, con riesgo neurológico particularmente alto',
        'Diagnóstico tardío y retraso del inicio del antibiótico'
      ],
      clinica: 'Variable. La posibilidad de endocarditis debe considerarse en todo paciente que se presenta con ictus, meningitis o absceso cerebral, y una fiebre inexplicada que acompaña a un ictus en un paciente con valvulopatía debe disparar la sospecha, con hemocultivos extraídos ANTES del antibiótico empírico.',
      criterios_dx: 'La imagen cerebral es obligatoria si se sospechan complicaciones neurológicas: RM con y sin gadolinio, o TC con y sin contraste si la RM no es posible. La TC cerebral o la angio-RM se recomiendan ante sospecha de aneurisma cerebral infeccioso (I B). La angiografía por catéter se reserva para el aneurisma ya diagnosticado por angio-TC o angio-RM, la hemorragia cerebral aguda, la sospecha que persiste con técnicas no invasivas negativas, o si se plantea trombectomía mecánica.',
      laboratorio: 'Hemocultivos extraídos antes del antibiótico empírico cuando el ictus con fiebre inexplicada en un paciente valvular hace sospechar endocarditis. Si se realiza trombectomía mecánica, el material embólico extraído DEBE enviarse a análisis patológico y microbiológico, que es una vía de diagnóstico microbiológico que se desaprovecha.',
      imagen: 'La angiografía por sustracción digital sigue siendo el patrón de referencia para detectar aneurismas infecciosos. Las sensibilidades de la angio-TC y la angio-RM crecen con el tamaño: para aneurismas de menos de 5 mm son del 57% y del 35%, y para los de 5 mm o más del 94% y del 86%. En pacientes con sospecha alta de aneurisma infeccioso y angio-TC o angio-RM negativas, puede considerarse la angiografía por sustracción digital.',
      complementarios: 'En el paciente SIN síntomas neurológicos, la RM cerebral detecta con frecuencia lesiones silentes como microhemorragias. La falta de asociación de esas microhemorragias con hemorragia parenquimatosa y la ausencia de complicaciones neurológicas postoperatorias en pacientes con microhemorragias es lo que permite no tratarlas como una contraindicación quirúrgica.',
      dx_diferencial: 'El ictus cardioembólico de otra causa (fibrilación auricular), que es el diagnóstico que recibe el paciente si nadie se fija en la fiebre. El error tiene consecuencias inmediatas: ese paciente recibiría trombolisis, que aquí está contraindicada.',
      tx_medico: 'Tras un accidente isquémico transitorio, la cirugía cardiaca indicada se recomienda SIN demora (I B). Tras un ictus, la cirugía se recomienda sin demora si hay insuficiencia cardiaca, infección no controlada, absceso o riesgo embólico alto persistente, siempre que no haya coma y se haya excluido la hemorragia cerebral por TC o RM craneal (I B). El razonamiento: la mayoría de las publicaciones demuestran que el riesgo de transformación hemorrágica de una lesión isquémica no complicada es menor que el riesgo de embolia recurrente bajo antibiótico.',
      tx_farmacologico: 'La trombolisis NO se recomienda en el ictus embólico por endocarditis (III C). La trombectomía mecánica puede considerarse si se dispone de la experiencia a tiempo (IIb C), dentro de los límites temporales habituales y en casos seleccionados. En cuanto a la anticoagulación, se recomienda continuarla en quien ya tenía indicación previa, prefiriéndose el cambio a heparina si hay sangrado cerebral o indicación de cirugía precoz.',
      tx_intervencionista: 'Se recomienda neurocirugía o tratamiento endovascular para los aneurismas infecciosos grandes, los que crecen de forma continua a pesar del antibiótico óptimo y los aneurismas intracraneales infecciosos rotos (I C). Con hemorragia intracraneal y situación clínica inestable por insuficiencia cardiaca, infección no controlada o riesgo embólico alto persistente, debe considerarse cirugía urgente o de emergencia sopesando la probabilidad de un resultado neurológico significativo (IIa C).',
      criterios_uci: 'El coma es, en la práctica, lo que detiene la indicación de cirugía precoz tras un ictus, junto con la hemorragia cerebral no excluida.',
      criterios_tips: 'El ictus, isquémico o hemorrágico, con endocarditis definitiva o posible, está en la lista explícita de traslado a un Heart Valve Centre. El neurólogo y el neurocirujano figuran entre los adjuntos del Equipo de Endocarditis.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'El manejo del aneurisma infeccioso debe discutirse en el Equipo de Endocarditis y adaptarse a cada caso, porque la evidencia se limita a casos aislados y series retrospectivas. A DONDE LLEVA: al módulo de Enfermedad cerebrovascular para el manejo del ictus como tal, que esta ficha no repite.',
      seguimiento_ambulatorio: 'Las complicaciones neurológicas se asocian a exceso de mortalidad y a morbilidad a largo plazo, sobre todo en el caso del ictus; el seguimiento al alta debe incluir, además, las complicaciones psicológicas.',
      pronostico: 'El ictus es una complicación grave asociada a más morbilidad y mortalidad. El diagnóstico rápido y el inicio precoz del antibiótico son determinantes para prevenirlas, y la cirugía precoz en el paciente de alto riesgo es clave para prevenir la embolización.',
      algoritmo: [
        'Ictus con fiebre inexplicada en paciente valvular: hemocultivos antes del antibiótico',
        'Imagen cerebral obligatoria: RM con y sin gadolinio, o TC con y sin contraste',
        'Sospecha de aneurisma infeccioso: TC cerebral o angio-RM; angiografía por catéter si procede',
        'Nunca trombolisis; trombectomía mecánica solo si hay experiencia disponible a tiempo',
        'Si se hace trombectomía: enviar el material a patología y microbiología',
        'Tras accidente isquémico transitorio: cirugía indicada sin demora',
        'Tras ictus: sin demora si hay otra indicación, no hay coma y se excluyó la hemorragia'
      ]
    },
    {
      nombre: 'Choque séptico en la endocarditis',
      color: '#a1442e',
      definicion: 'Complicación de la endocarditis (ver las fichas de válvula nativa y de infección no controlada): necesidad de vasopresor para mantener una presión arterial media de 65 mmHg o más junto con un lactato sérico por encima de 2 mmol/L en ausencia de hipovolemia. Es una complicación altamente letal y aparece en el 5 al 10% de los pacientes.',
      epidemiologia: 'Entre el 5 y el 10% de las endocarditis. En la serie multicéntrica más grande de pacientes críticos con endocarditis, la mortalidad hospitalaria fue del 32%, y en otro estudio llegó al 42%. En el entorno de la UCI, Staphylococcus spp. es el agente causal principal, y S. aureus llegó a ser responsable de hasta el 56% de los casos en un estudio observacional.',
      fisiopatologia: 'Lo específico aquí no es el mecanismo del choque, que está en el módulo de Sepsis, sino que el foco es intracardiaco y no drenable sin cirugía: por eso la cirugía se asocia a reducción significativa de la mortalidad precoz y al año en la endocarditis con choque séptico, cuando no es fútil.',
      factores_riesgo: [
        'S. aureus y bacterias gramnegativas',
        'Bacteriemia persistente',
        'Adquisición nosocomial',
        'Fracaso renal agudo, diabetes mellitus, émbolos en el sistema nervioso central y vegetaciones grandes'
      ],
      clinica: 'Hipotensión que requiere vasopresor con hiperlactatemia, en el contexto de una endocarditis. En la UCI el diagnóstico puede retrasarse porque los episodios febriles sugieren otro foco infeccioso y porque las manifestaciones neurológicas (confusión, delirium o focalidad) desvían la atención.',
      criterios_dx: 'Choque séptico definido como necesidad de vasopresor para mantener una presión arterial media de 65 mmHg o más y lactato sérico por encima de 2 mmol/L en ausencia de hipovolemia. El diagnóstico de endocarditis en la UCI sigue los MISMOS criterios que fuera de ella, con un papel destacado de la ecocardiografía transesofágica para el diagnóstico y sus complicaciones.',
      laboratorio: 'Lactato sérico por encima de 2 mmol/L como parte de la definición. Y en el paciente de UCI con hemocultivos negativos debe considerarse el estudio serológico o molecular por PCR, porque identificar el microorganismo sigue siendo la base del tratamiento eficaz en la endocarditis complicada.',
      imagen: 'La ecocardiografía transesofágica tiene un papel prominente como herramienta diagnóstica de la endocarditis y de sus complicaciones en la UCI.',
      complementarios: 'El manejo hemodinámico del choque, los vasopresores y la sedación están en los módulos de Sepsis y de Vasopresores y sedantes, que esta ficha no repite. Lo que sí pertenece aquí: pueden considerarse la optimización hemodinámica preoperatoria y los protocolos de terapia dirigida por objetivos, incluidos fármacos vasoactivos y soporte circulatorio mecánico, en estos pacientes complejos de alto riesgo.',
      dx_diferencial: 'El choque séptico de otro foco en un paciente que además tiene una valvulopatía, y el choque cardiogénico por regurgitación aguda, que exige cirugía de emergencia en 24 horas y no urgente en 3 a 5 días. La distinción la dan el ecocardiograma y el lactato.',
      tx_medico: 'La cirugía se asocia a reducción significativa de la mortalidad precoz y al año en los pacientes con endocarditis y choque séptico, y por eso se recomienda cirugía URGENTE en la endocarditis con sepsis persistente o choque séptico a pesar del antibiótico adecuado, cuando la cirugía no sea fútil. La toma de decisiones en el paciente de UCI debe ser siempre un producto del consenso del Equipo de Endocarditis.',
      tx_farmacologico: 'Antibiótico empírico inmediato tras los hemocultivos, según se trate de endocarditis comunitaria sobre válvula nativa o protésica tardía (ampicilina con ceftriaxona, o con (flu)cloxacilina y gentamicina) o de protésica precoz y asociada a cuidados sanitarios (vancomicina o daptomicina con gentamicina y rifampicina), y cambio a terapia dirigida en cuanto se identifique el microorganismo, en 24 a 48 horas. La daptomicina, cuando se usa, va a dosis altas de 10 mg/kg al día y siempre combinada.',
      tx_intervencionista: 'Cirugía urgente en la sepsis persistente o el choque séptico a pesar del antibiótico adecuado, cuando no sea fútil. La cirugía en el paciente de UCI es técnicamente más compleja, con más mortalidad perioperatoria y un postoperatorio difícil por los mayores requerimientos de soporte circulatorio y pulmonar. La oxigenación por membrana extracorpórea se necesita ocasionalmente tras la cirugía, pero se asocia a malos resultados.',
      criterios_uci: 'Todo paciente con endocarditis que requiera ingreso en UCI debe discutirse URGENTEMENTE en el Equipo de Endocarditis. Cinco predictores independientes de necesidad de soporte circulatorio avanzado postoperatorio: sexo masculino, duración aumentada de la cirugía, disfunción renal (filtrado estimado por debajo de 60 ml/min/m2), insuficiencia cardiaca previa a la cirugía y recuento plaquetario preoperatorio más bajo.',
      criterios_tips: 'La inestabilidad hemodinámica con soporte farmacológico o respiratorio encabeza la lista de traslado a un Heart Valve Centre.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Lactato, necesidad de vasopresor y hemocultivos de control. A DONDE LLEVA: al módulo de Sepsis y choque séptico para el manejo del choque, y a la ficha de infección no controlada de este tema para la indicación quirúrgica.',
      seguimiento_ambulatorio: 'Los supervivientes requieren seguimiento de las complicaciones habituales tras el alta, incluidas la necesidad de tratamiento renal sustitutivo y las complicaciones psicológicas.',
      pronostico: 'Altamente letal. En pacientes críticos con endocarditis y fallo orgánico, la mortalidad hospitalaria global fue del 32%, y cuatro factores pronósticos independientes la explicaron: SAPS II por encima de 35 puntos, SOFA por encima de 8, infección por S. aureus resistente a meticilina y endocarditis sobre válvula nativa.',
      algoritmo: [
        'Vasopresor para presión arterial media de 65 o más y lactato por encima de 2: choque séptico',
        'Hemocultivos y antibiótico empírico inmediato según nativa o protésica precoz',
        'Ecocardiograma transesofágico para el diagnóstico y las complicaciones',
        'Discutir URGENTEMENTE en el Equipo de Endocarditis',
        '¿Sepsis o choque persistente a pesar del antibiótico adecuado? Cirugía urgente si no es fútil',
        'Si los hemocultivos son negativos: serología y PCR, no esperar'
      ]
    },
    {
      nombre: 'Recaída y reinfección',
      color: '#6b3d5c',
      definicion: 'Complicación tardía de la endocarditis (ver las fichas de válvula nativa y protésica): la RECAÍDA es un episodio repetido causado por el MISMO microorganismo, y la REINFECCIÓN es una infección por un microorganismo DISTINTO, habitualmente más de 6 meses después del episodio inicial, relacionada con el perfil clínico e inmunológico del paciente.',
      epidemiologia: 'El riesgo de recurrencia entre los supervivientes varía mucho entre estudios, del 2 al 9% en los análisis más contemporáneos. Las reinfecciones tienen peor desenlace que las recaídas. Los datos actuales describen tasas bajas de recaída, probablemente por la mejora del manejo.',
      fisiopatologia: 'Lo específico es la distinción microbiológica y temporal, no un mecanismo nuevo: por eso lo que define la conducta es haber GUARDADO el aislado del primer episodio, y la advertencia de la guía es que la distinción debe interpretarse con cautela, porque un periodo largo desde la infección inicial sugiere reinfección incluso si la cepa es la misma.',
      factores_riesgo: [
        'Tratamiento antibiótico inadecuado en agente, dosis o duración',
        'Microorganismos resistentes: Brucella, Legionella, Chlamydia, Mycoplasma, Mycobacterium, Bartonella, C. burnetii y hongos',
        'Endocarditis por S. aureus y por Enterococcus spp.',
        'Infección polimicrobiana en el usuario de drogas inyectadas, y extensión perianular',
        'Endocarditis sobre válvula protésica, focos metastásicos persistentes (abscesos), cultivo valvular positivo y persistencia de fiebre en el séptimo día postoperatorio'
      ],
      clinica: 'Un nuevo episodio de endocarditis en un paciente que ya tuvo uno. El seguimiento al alta debe buscar activamente la recurrencia, además de la insuficiencia cardiaca, la necesidad de cirugía o intervención valvular, el ictus, la necesidad de tratamiento renal sustitutivo, las complicaciones psicológicas y la muerte.',
      criterios_dx: 'El algoritmo: ante un nuevo episodio, si se aísla una especie DISTINTA es reinfección. Si es la misma especie y existe aislado guardado del episodio previo, se usan métodos moleculares y tipado de cepa: misma cepa, recaída; cepa distinta, reinfección. Si no hay aislado guardado, decide el tiempo: menos de 6 meses desde el episodio previo es recaída, y más de 6 meses, reinfección.',
      laboratorio: 'Guardar los aislados del episodio inicial, que es lo que hace posible todo lo anterior, y aplicar métodos moleculares y tipado de cepa cuando la especie coincide. Hay que tener en cuenta además que la resistencia antibiótica puede desarrollarse con el tiempo, de modo que la sensibilidad del nuevo aislado no se puede presumir.',
      imagen: 'La misma estrategia diagnóstica que en el primer episodio. Un dato que evita decisiones precipitadas: la vegetación RESIDUAL tras el tratamiento no mostró asociación con más recurrencia, aunque el resultado debe interpretarse con cautela.',
      complementarios: 'Dos observaciones sobre la cirugía previa. En la endocarditis nativa manejada quirúrgicamente, el riesgo de recurrencia no difiere entre recambio y reparación valvular. Y el tratamiento oral parcial frente al intravenoso, y el OPAT frente al tratamiento hospitalario en pacientes estables seleccionados, NO se asocian a más riesgo de endocarditis recurrente.',
      dx_diferencial: 'La fiebre postoperatoria no infecciosa y la infección de otro foco en un paciente con antecedente de endocarditis. La distinción importa porque la recaída obliga a 4 a 6 semanas más de antibiótico y a replantear la cirugía.',
      tx_medico: 'Los pacientes con recaída o reinfección se manejan como cualquier endocarditis: pautas antibióticas y, si es complicada, indicaciones de cirugía. La prevención es la parte activa del seguimiento: educación sobre el riesgo de recurrencia y medidas preventivas en cada visita, porque las deficiencias en la vigilancia dental contribuyen al aumento gradual continuado de la incidencia de endocarditis.',
      tx_farmacologico: 'La recaída debe tratarse con antibiótico intravenoso durante 4 a 6 semanas ADICIONALES, según el microorganismo causal y su sensibilidad, y hay que considerar la cirugía cardiaca. La evidencia sobre tratamiento supresor prolongado en quien no se opera se limita a series pequeñas y heterogéneas; en una serie pequeña de infecciones por grampositivos la dalbavancina (500 mg semanales o 1000 mg cada dos semanas) resultó eficaz, aunque las recaídas no son infrecuentes.',
      tx_intervencionista: 'Considerar cirugía cardiaca en la recaída. En el paciente que no se opera, el tratamiento supresor prolongado es la alternativa, con la evidencia limitada que se ha descrito.',
      criterios_uci: 'Los generales del tema, según la forma de presentación del nuevo episodio.',
      criterios_tips: 'Los generales del tema. La endocarditis previa es, además, la condición de riesgo MÁS alto para un nuevo episodio y la primera de la lista de profilaxis (I B).',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La persistencia de fiebre en el séptimo día postoperatorio es uno de los factores asociados a recaída, de modo que es un dato que hay que registrar y no normalizar.',
      seguimiento_ambulatorio: 'Educación sobre el riesgo de recurrencia y las medidas preventivas, con énfasis en la salud dental y según el perfil de riesgo individual, en cada visita (I C). En el usuario de drogas inyectadas, el seguimiento debe incluir una estrategia de tratamiento de la adicción, implicando a los especialistas antes del alta (I C). Rehabilitación cardiaca con ejercicio a considerar en el paciente estable (IIa C), y apoyo psicosocial a considerar.',
      pronostico: 'Las reinfecciones tienen peor desenlace que las recaídas. El registro danés más reciente describe más riesgo de recurrencia con prótesis biológica que con mecánica, a diferencia de varios estudios previos que no encontraron diferencias entre tipos de prótesis.',
      algoritmo: [
        'Nuevo episodio: ¿la especie aislada es la misma que la del episodio previo?',
        'Especie distinta: reinfección',
        'Misma especie y aislado guardado: tipado molecular de cepa',
        'Misma cepa: recaída. Cepa distinta: reinfección',
        'Sin aislado guardado: menos de 6 meses es recaída, más de 6 meses es reinfección',
        'Recaída: 4 a 6 semanas más de antibiótico intravenoso y valorar cirugía',
        'En cada visita: educación en salud dental y, si procede, tratamiento de la adicción'
      ]
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia de la endocarditis está organizada alrededor de las tres razones de cirugía: lo que se mira a diario es si ha aparecido insuficiencia cardiaca, si la infección sigue controlada y si la vegetación amenaza con embolizar. A eso se añade el calendario propio del tratamiento, que tiene dos puntos fijos: el día 10, en el que el paciente estable puede empezar a plantearse el alta con OPAT o vía oral, y el ecocardiograma transesofágico que debe hacerse ANTES de cambiar de vía (I B).',
    parametros: [
      'Temperatura: la respuesta satisfactoria exige no tener fiebre durante más de 2 días',
      'Proteína C reactiva: por debajo del 25% del valor máximo alcanzado, o por debajo de 20 mg/L',
      'Leucocitos: por debajo de 15 x 10⁹/L',
      'Hemocultivos de control: los que siguen positivos a las 48 a 72 horas son factor independiente de mortalidad hospitalaria, y más de 7 días positivos es motivo de traslado a un Heart Valve Centre',
      'Electrocardiograma: el bloqueo auriculoventricular nuevo es signo de infección localmente no controlada y mueve la cirugía a urgente',
      'Ecocardiograma de seguimiento: tamaño y movilidad de la vegetación, extensión perivalvular, dehiscencia protésica y signos de mala tolerancia hemodinámica',
      'Función renal y niveles de gentamicina: la función renal y la concentración sérica deben monitorizarse una vez por semana (valle por debajo de 1 mg/L y pico de 10 a 12 mg/L una hora tras la inyección)',
      'Niveles de vancomicina: valle de 10 a 15 mg/L, y de 15 a 20 mg/L si se sube la dosis en la endocarditis estafilocócica; la dosis no debe pasar de 2 g al día sin monitorizar niveles',
      'Día 10 de tratamiento y 7 días tras la cirugía valvular: los dos puntos que abren la puerta al OPAT o a la vía oral'
    ],
    criterios_uci_general: 'Choque séptico, insuficiencia cardiaca aguda y choque cardiogénico con fallo multiorgánico. Todo paciente con endocarditis que requiera UCI debe discutirse URGENTEMENTE en el Equipo de Endocarditis, y la toma de decisiones debe ser siempre un producto del consenso de ese equipo. La mortalidad hospitalaria en los pacientes críticos con endocarditis fue del 32% en la serie multicéntrica más grande.',
    criterios_tips_general: 'Las tres razones de cirugía y sus tres plazos: emergencia dentro de 24 horas (edema pulmonar refractario o choque cardiogénico), urgente en 3 a 5 días (insuficiencia cardiaca sintomática, infección localmente no controlada, vegetación de 10 mm o más que embolizó o con otra indicación) y no urgente en el mismo ingreso (el resto). La cirugía no debe retrasarse por la discusión del equipo cuando la indicación es de emergencia.',
    criterios_trasplante_general: 'En lugar de trasplante, lo que este tema tiene es el TRASLADO a un Heart Valve Centre, con lista explícita: inestabilidad hemodinámica, regurgitación valvular grave, endocarditis protésica, ictus con endocarditis definitiva o posible, complicaciones extravalvulares, hemocultivos positivos más de 7 días con antibiótico apropiado, embolia, endocarditis de dispositivo y microorganismos agresivos o difíciles de tratar. En el centro de referencia, el Equipo de Endocarditis debe reunirse con frecuencia, y conviene considerar una reunión semanal.',
    prevencion: 'La prevención se apoya en tres patas, y la primera no es un antibiótico. MEDIDAS GENERALES, recomendadas en el paciente de riesgo alto E intermedio (I C): higiene dental dos veces al día y limpieza dental profesional al menos dos veces al año en el de alto riesgo y una vez al año en los demás, higiene cutánea estricta con tratamiento optimizado de las dermatosis crónicas, desinfección de heridas, antibiótico curativo de cualquier foco de infección bacteriana, no automedicarse con antibióticos, medidas estrictas de control de infección en cualquier procedimiento de riesgo, desaconsejar los piercings y los tatuajes, y limitar los catéteres y los procedimientos invasivos cuando sea posible. PROFILAXIS ANTIBIÓTICA, solo en el paciente de ALTO riesgo ante procedimientos dentales de riesgo, en dosis única 30 a 60 minutos antes: amoxicilina 2 g oral, y si hay alergia, cefazolina o ceftriaxona, cefalexina, azitromicina, claritromicina o doxiciclina (la clindamicina NO se recomienda, por el riesgo de infección por C. difficile). En el de riesgo INTERMEDIO no se recomienda de rutina y puede valorarse individualmente; en el de bajo riesgo no se recomienda (III C). MEDIDAS EN LOS PROCEDIMIENTOS CARDIACOS: asepsia óptima del sitio de implantación del dispositivo (I B), asepsia quirúrgica estándar en la inserción y manipulación de catéteres en la sala de cateterismo (I C), profilaxis que cubra la flora cutánea habitual incluidos Enterococcus spp. y S. aureus antes del implante valvular aórtico transcatéter y otros procedimientos valvulares transcatéter (IIa C), cribado nasal de S. aureus antes de la cirugía cardiaca electiva, y eliminación de los focos de sepsis dental al menos 2 semanas antes de implantar una prótesis.'
  }
};

export const compCites = {
  'Endocarditis sobre válvula nativa izquierda': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    criterios_tips: [1], criterios_trasplante: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Endocarditis sobre válvula protésica': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1, 3], criterios_uci: [1],
    criterios_tips: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Endocarditis derecha y del usuario de drogas inyectadas': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Endocarditis relacionada con dispositivo cardiaco': {
    definicion: [1], epidemiologia: [1], factores_riesgo: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1],
    criterios_tips: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Endocarditis con hemocultivos negativos': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Insuficiencia cardiaca: la primera razón para operar': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Infección no controlada: absceso, fístula y bloqueo nuevo': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Embolia sistémica y la vegetación de 10 mm': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Complicaciones neurológicas': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1],
    seguimiento_hospitalario: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Choque séptico en la endocarditis': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    pronostico: [1]
  },
  'Recaída y reinfección': {
    definicion: [1], epidemiologia: [1], fisiopatologia: [1], factores_riesgo: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  }
};

export const estigmasTitulo = 'Lo que se encuentra al ingreso, con su frecuencia (registro EURO-ENDO)';
export const estigmas = [
  { s: 'Fiebre', p: '77,7%', desc: 'La manifestación más frecuente en el registro EURO-ENDO. Como criterio MENOR exige temperatura por encima de 38 °C. Pero la endocarditis también puede cursar con fiebre baja o sin fiebre en las formas subagudas o crónicas, y ahí es donde se retrasa el diagnóstico.' },
  { s: 'Soplo cardiaco', p: '64,5%', desc: 'Segundo hallazgo más frecuente. Un soplo nuevo o cambiante, junto a fiebre sin otro foco, es la combinación que más sospecha debe generar. Un soplo nuevo puede además indicar extensión perivalvular de la infección.' },
  { s: 'Insuficiencia cardiaca congestiva', p: '27,2%', desc: 'La complicación más frecuente y la principal indicación de cirugía urgente. En las series publicadas aparece entre el 19 y el 73% de los casos, y el choque cardiogénico puede ser la primera manifestación en hasta el 5%, la mitad de ellos en las primeras 72 horas del ingreso.' },
  { s: 'Complicaciones embólicas', p: '25,3%', desc: 'Detectadas en una cuarta parte de los pacientes del registro, aunque el riesgo embólico global de la enfermedad es del 20 al 50% y hasta la mitad de los eventos son silentes. Cerebro y bazo son los sitios más frecuentes en la endocarditis izquierda; el pulmón, en la derecha y en la de electrodo.' },
  { s: 'Alteraciones de la conducción cardiaca', p: '11,5%', desc: 'Un bloqueo auriculoventricular NUEVO no es un hallazgo electrocardiográfico cualquiera: es un signo de infección localmente no controlada y mueve la indicación quirúrgica a urgente, en 3 a 5 días. Aparece cuando la infección alcanza el tejido de conducción vecino a la raíz aórtica.' },
  { s: 'Signos periféricos clásicos', p: 'Poco frecuentes', desc: 'Las lesiones de Janeway y las hemorragias conjuntivales cuentan como criterio menor embólico; los nódulos de Osler, las manchas de Roth y la glomerulonefritis, como criterio menor inmunológico. Se ven menos que antes, pero siguen apareciendo en infecciones graves por S. aureus y en formas subagudas por estreptococos. Y la advertencia que acompaña: la ausencia de signos clínicos NO excluye el diagnóstico, porque su sensibilidad y especificidad globales son bajas.' },
  { s: 'Hemorragias en astilla', p: 'Infrecuente', desc: 'Junto con las manchas de Roth, la guía las cita como ejemplo de los fenómenos vasculares e inmunológicos que hoy se observan con menor frecuencia que en las descripciones clásicas de la enfermedad.' }
];

export const escalaRefs = {
  'Criterios ESC 2023 de endocarditis infecciosa (calculadora disponible)': [1],
  'Lo que cambian los criterios Duke-ISCVID 2023 frente a los ESC 2023': [1, 2],
  'Momento de la cirugía: tres razones por tres plazos (calculadora disponible)': [1],
  'Cirugía después de una complicación neurológica': [1],
  'Duración y vía del antibiótico (calculadora disponible)': [1],
  'Criterios para pasar a vía oral o a OPAT (calculadora disponible)': [1],
  'Profilaxis antibiótica: a quién y con qué (calculadora disponible)': [1],
  'Clasificación de la endocarditis por válvula y por adquisición': [1]
};

export const escalaCalc = {
  'Criterios ESC 2023 de endocarditis infecciosa (calculadora disponible)': 'criteriosEsc',
  'Momento de la cirugía: tres razones por tres plazos (calculadora disponible)': 'momentoCirugia',
  'Duración y vía del antibiótico (calculadora disponible)': 'duracionAtb',
  'Criterios para pasar a vía oral o a OPAT (calculadora disponible)': 'pasoOral',
  'Profilaxis antibiótica: a quién y con qué (calculadora disponible)': 'profilaxis'
};

export const compGroups = [
  { title: 'Las formas de la enfermedad', items: ['Endocarditis sobre válvula nativa izquierda', 'Endocarditis sobre válvula protésica', 'Endocarditis derecha y del usuario de drogas inyectadas', 'Endocarditis relacionada con dispositivo cardiaco', 'Endocarditis con hemocultivos negativos'] },
  { title: 'Las tres razones para operar', items: ['Insuficiencia cardiaca: la primera razón para operar', 'Infección no controlada: absceso, fístula y bloqueo nuevo', 'Embolia sistémica y la vegetación de 10 mm'] },
  { title: 'Las otras complicaciones', items: ['Complicaciones neurológicas', 'Choque séptico en la endocarditis', 'Recaída y reinfección'] }
];

export const complicacionesIntro = 'Las fichas van en dos niveles, y la diferencia importa para no leer dos veces lo mismo. Las CINCO primeras son formas de la enfermedad, cada una con los campos completos: la válvula nativa izquierda, que es la de referencia, y luego las cuatro que cambian el manejo (protésica, derecha, de dispositivo y con hemocultivos negativos). Las SEIS siguientes son complicaciones verdaderas, y su definición empieza diciendo de qué ficha dependen: primero las TRES RAZONES para operar, que es la cuadrícula que ordena el tema, y después las tres que más pesan en el pronóstico y en el alta.';

export const modalLabels = {
  itemName: 'Ficha',
  criterios_tips: 'Indicación de cirugía cardiaca',
  criterios_trasplante: 'Traslado a un Heart Valve Centre',
  monitorizacionTitulo: 'Vigilancia diaria durante el ingreso',
  prevencion: 'Prevención y profilaxis'
};

export const diagnosticoIntro = 'El diagnóstico de la endocarditis tiene un orden que casi nunca se respeta, y respetarlo es la mitad del tema: primero los hemocultivos, después el antibiótico. Tres tandas separadas 30 minutos, 10 ml cada una, de vena periférica y no del catéter central. Luego la imagen, que en 2023 dejó de ser solo el ecocardiograma: la TC cardiaca, el PET/TC con 18F-FDG y el SPECT/TC con leucocitos marcados cuentan igual como criterio mayor de imagen, y ese cambio existe porque con material protésico la ecocardiografía puede ser normal o no concluyente hasta en el 30% de los casos.';

export const categories = [
  { id: 'definicion', label: 'Las tres razones' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Criterios y plazos' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Vigilancia' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'ENDOCARDITIS INFECCIOSA', color: '#7a2f52', target: 'definicion' },
  branches: [
    { title: 'Diagnosticarla', sub: 'Hemocultivos antes del antibiótico', color: '#6b4a2e', target: 'diagnostico', leaves: [
      { title: '3 tandas, 30 min', sub: '10 ml, vena periférica', color: '#6b4a2e', target: 'diagnostico' },
      { title: 'Criterios ESC 2023', sub: '2 mayores, o 1 + 3 menores, o 5', color: '#7a2f52', target: 'clasificacion' },
      { title: 'Imagen multimodal', sub: 'Eco, TC, PET/TC, SPECT', color: '#3d5a73', target: 'diagnostico' }
    ] },
    { title: 'Las tres razones para operar', sub: 'Y sus tres plazos', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Insuficiencia cardiaca', sub: 'Emergencia: 24 horas', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Infección no controlada', sub: 'Urgente: 3 a 5 días', color: '#9c3a52', target: 'complicaciones' },
      { title: 'Prevenir la embolia', sub: 'Vegetación de 10 mm', color: '#5c3d8c', target: 'complicaciones' }
    ] },
    { title: 'Las formas que cambian el manejo', sub: 'Prótesis, derecha, dispositivo', color: '#8c3a5c', target: 'complicaciones', leaves: [
      { title: 'Protésica', sub: 'Precoz o tardía a los 12 meses', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Derecha y UDI', sub: '2 semanas si se cumplen 4 condiciones', color: '#2f6b5e', target: 'complicaciones' },
      { title: 'De dispositivo', sub: 'Extracción completa sin demora', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Terminar el tratamiento', sub: 'Día 10, y transesofágico antes', color: '#2e6b6b', target: 'clasificacion' },
    { title: 'Prevenirla', sub: 'Solo el riesgo ALTO lleva profilaxis', color: '#7a6a2e', target: 'seguimiento' }
  ]
};

// `no_invasivos` lleva solo la [1]: ninguna de sus filas es contenido de los Duke-ISCVID, y la [2]
// se reserva a la escala que los compara. Mejor un hueco que una cita que la fuente no sostiene.
export const diagCites = { laboratorio: [1], no_invasivos: [1], imagen: [1] };
export const clasificacionCite = [1, 2];
export const seguimientoCite = [1];
export const figurasDefinicion = ['reloj-cirugia'];
export const figurasClasificacion = ['criterios-2023'];

export const figuras = {
  'reloj-cirugia': {
    titulo: 'Las tres razones para operar y sus tres plazos',
    fuente: 'Delgado V, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J 2023;44(39):3948-4042, Figura 10 y Tabla de recomendaciones 12.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Plazo</th><th>Insuficiencia cardiaca</th><th>Infección no controlada</th><th>Prevención de la embolia</th></tr></thead>
          <tbody>
            <tr>
              <td class="figure-org">Emergencia<br><span class="figure-tag fail">dentro de 24 h</span></td>
              <td>Regurgitación aguda grave, obstrucción o fístula con <strong>edema pulmonar refractario o choque cardiogénico</strong> <span class="figure-tag">I B</span></td>
              <td>&ndash;</td>
              <td>&ndash;</td>
            </tr>
            <tr>
              <td class="figure-org">Urgente<br><span class="figure-tag dys">3 a 5 días</span></td>
              <td>Regurgitación aguda grave u obstrucción con <strong>síntomas de insuficiencia cardiaca</strong> o signos ecocardiográficos de mala tolerancia <span class="figure-tag">I B</span></td>
              <td>Localmente no controlada: <strong>absceso, falso aneurisma, fístula, vegetación que crece, dehiscencia protésica o bloqueo AV nuevo</strong> <span class="figure-tag">I B</span>. Hemocultivos positivos &gt;1 semana o sepsis persistente <span class="figure-tag dys">IIa B</span>. Protésica por <em>S. aureus</em> o gramnegativo no HACEK <span class="figure-tag dys">IIa C</span></td>
              <td>Vegetación <strong>&ge;10 mm que ya embolizó</strong> pese a antibiótico apropiado <span class="figure-tag">I B</span>. Vegetación &ge;10 mm <strong>con otra indicación</strong> <span class="figure-tag">I C</span>. Vegetación &ge;10 mm sin disfunción grave ni embolia, con riesgo quirúrgico bajo <span class="figure-tag dys">IIb B</span></td>
            </tr>
            <tr>
              <td class="figure-org">No urgente<br><span class="figure-tag">mismo ingreso</span></td>
              <td>Sin compromiso hemodinámico: antibiótico y observación estricta <span class="figure-tag">I</span></td>
              <td>Hongos u organismos multirresistentes, urgente o no urgente <strong>según la hemodinámica</strong> <span class="figure-tag">I C</span></td>
              <td>&ndash;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que esta cuadrícula existe para fijar. La primera: los plazos tienen una definición exacta en la guía, y no son adjetivos. <strong>Emergencia es dentro de 24 horas, urgente es en 3 a 5 días y no urgente es dentro del mismo ingreso</strong>. La segunda: la insuficiencia cardiaca es la indicación más frecuente y la única que llega a emergencia, y en ella la cirugía es el <strong>único tratamiento eficaz asociado a mejor supervivencia</strong>, de modo que el tratamiento médico de la congestión no compra tiempo. La tercera: la embolia es la única de las tres razones en la que se opera para <strong>prevenir</strong> algo, y su reloj es propio: el riesgo es máximo el día siguiente al inicio del antibiótico y cae de forma continua durante las 2 primeras semanas, así que el beneficio de operar es mayor justo al principio. Para la endocarditis DERECHA esta tabla no aplica: tiene sus tres indicaciones propias, y el umbral de la vegetación es de 20 mm.</div>`
  },
  'criterios-2023': {
    titulo: 'Criterios ESC 2023, y en qué se separan de los Duke-ISCVID 2023',
    fuente: 'Delgado V, et al. Eur Heart J 2023;44(39):3948-4042, Tabla 10. Fowler VG Jr, et al. Clin Infect Dis 2023;77(4):518-526 (resumen).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Criterio</th><th>Qué cuenta</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">MAYOR 1: hemocultivos</td><td>Microorganismo <strong>típico</strong> en dos hemocultivos separados (estreptococos orales, <em>S. gallolyticus</em>, grupo HACEK, <em>S. aureus</em>, <em>E. faecalis</em>). O microorganismo compatible en hemocultivos <strong>persistentemente positivos</strong>: 2 separados &gt;12 h, o los 3 de 3, o la mayoría de 4 con la primera y la última separadas &ge;1 h. O un solo hemocultivo para <em>C. burnetii</em>, o IgG de fase I &gt;1:800</td></tr>
            <tr><td class="figure-org">MAYOR 2: imagen</td><td>Lesiones anatómicas o metabólicas características, por <strong>cualquiera</strong> de las cuatro: ecocardiografía (transtorácica o transesofágica), <strong>TC cardiaca</strong>, <strong>PET/TC con 18F-FDG</strong> o <strong>SPECT/TC con leucocitos marcados</strong></td></tr>
            <tr><td class="figure-org">MENOR: predisposición</td><td>Cardiopatía predisponente de riesgo alto o intermedio, o usuario de drogas inyectadas</td></tr>
            <tr><td class="figure-org">MENOR: fiebre</td><td>Temperatura <strong>por encima de 38 °C</strong></td></tr>
            <tr><td class="figure-org">MENOR: embolia</td><td>Incluida la <strong>asintomática detectada solo por imagen</strong>: émbolos o infartos sistémicos y pulmonares mayores y abscesos, espondilodiscitis y otras complicaciones osteoarticulares sépticas hematógenas, aneurismas micóticos, lesiones intracraneales isquémicas o hemorrágicas, hemorragias conjuntivales, lesiones de Janeway</td></tr>
            <tr><td class="figure-org">MENOR: inmunología</td><td>Glomerulonefritis, nódulos de Osler, manchas de Roth, factor reumatoide</td></tr>
            <tr><td class="figure-org">MENOR: microbiología</td><td>Hemocultivo positivo que no llega a criterio mayor, o serología de infección activa por microorganismo compatible</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:14px;">
        <table>
          <thead><tr><th>Clasificación</th><th>Combinación</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Definitiva</td><td>2 mayores &middot; o 1 mayor y <strong>al menos 3</strong> menores &middot; o 5 menores</td></tr>
            <tr><td class="figure-org">Posible</td><td>1 mayor y 1 o 2 menores &middot; o 3 a 4 menores</td></tr>
            <tr><td class="figure-org">Rechazada</td><td>No cumple definitiva ni posible al ingreso, con o sin diagnóstico alternativo firme</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos avisos. El primero: la clasificación se hace <strong>al ingreso y se repite en el seguimiento</strong>, y eso es lo que la convierte en herramienta de trabajo. Ante un caso POSIBLE, la guía pide repetir hemocultivos si eran negativos o dudosos, repetir ecocardiograma a los 5 a 7 días y hacer angio-TC cardiaca (clase I), y añadir criterios menores con imagen cerebral o de cuerpo entero (clase IIa): una embolia silente que solo ve la imagen puede convertir un caso posible en definitivo. El segundo: en 2023 se publicaron <strong>dos</strong> juegos de criterios y no dicen lo mismo. Los <strong>Duke-ISCVID</strong> añaden la <strong>inspección intraoperatoria</strong> como criterio mayor clínico nuevo, amplían la lista de microorganismos típicos con patógenos que solo cuentan como típicos si hay prótesis intracardiaca, y <strong>retiran los requisitos de separación temporal y de venopunción distinta</strong> para los hemocultivos, requisitos que los criterios ESC de esta tabla sí mantienen. Conviene saber cuál se está aplicando antes de decir que un caso es definitivo.</div>`
  }
};
