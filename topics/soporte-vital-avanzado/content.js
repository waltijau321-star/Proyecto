// topics/soporte-vital-avanzado/content.js - Modulo 82: Soporte vital avanzado y RCP.
// Basado en la Parte 9 de las guias de la American Heart Association de 2025 (Wigginton JG,
// Kurz MC, et al. Circulation 2025;152(suppl 2):S538-S577, doi:10.1161/CIR.0000000000001376),
// que ya estaba en Bibliografia/. Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'soporte-vital-avanzado',
  titulo: 'Soporte vital avanzado y RCP',
  subtitulo: 'Módulo 82 &middot; Medicina Crítica',
  accent: '#8c2e2e',
  accentDim: '#a85252'
};

export const definicionText = `<p style="margin:0 0 14px;">El soporte vital avanzado es lo que se añade a la reanimación básica cuando hay un equipo y material: monitorización del ritmo, desfibrilacion, acceso vascular, fármacos, via aérea avanzada y búsqueda de causas reversibles. Pero la edicion de <strong>2025</strong> de las guías de la American Heart Association empieza por otra cosa: insiste en que lo primero no es el algoritmo sino <strong>valorar la estabilidad clínica</strong>, y dedica más espacio que nunca a describir como se manifiesta la mala perfusión de órgano.</p>
<p style="margin:0 0 14px;">Esa edicion trae además varias cosas que <strong>contradicen lo que mucha gente aprendió</strong>: el acceso <strong>intravenoso sigue siendo el de primera elección</strong> y el intraoseo es la alternativa razonable, no al revés; se han <strong>retirado</strong> procedimientos obsoletos como administrar fármacos por el tubo endotraqueal; la <strong>RCP con la cabeza elevada se desaconseja</strong> fuera de ensayos; el cambio de vector y la desfibrilacion secuencial doble <strong>no tienen utilidad establecida</strong> en la fibrilación refractaria; y el <strong>dióxido de carbono espirado no debe usarse de forma aislada</strong> para decidir el fin de la reanimación.</p>
<p style="margin:0 0 14px;">Dos cifras para dimensionar el problema. Fuera del hospital la incidencia atendida por los servicios de emergencia es de <strong>83.4 casos por cada 100.000 habitantes y año</strong>, y la supervivencia al alta ronda el <strong>10%</strong>. Dentro del hospital la parada ocurre en aproximadamente <strong>1 de cada 100 ingresados</strong>, se recupera circulación en el 72.2%, sobrevive al alta el 24.2%, y de los que sobreviven alrededor del <strong>85% lo hace con buen resultado neurológico</strong>. Es decir: dentro del hospital el pronóstico es mucho mejor, y quien sobrevive suele hacerlo bien.</p>`;

export const bibliografia = [
  'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(suppl 2):S538-S577. doi:10.1161/CIR.0000000000001376.',
  'Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Intensive Care Med. 2026. doi:10.1007/s00134-026-08361-1.',
  'Ranzani OT, Singer M, Salluh JIF, et al. Development and Validation of the Sequential Organ Failure Assessment (SOFA)-2 Score. JAMA. 2025;334(23):2090-2103.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La parada confirmada',
      tituloB: 'La inestabilidad que la precede',
      compensada: 'Paciente que NO RESPONDE, sin respiración o con respiración agonica (boqueadas), y sin pulso central palpable en un máximo de 10 segundos. Esos tres datos bastan para iniciar compresiones: no hay que perder tiempo buscando más. En el paciente monitorizado, el ritmo confirma y clasifica de inmediato. Y hay una precisión de terminología que la guía de 2025 introduce y que conviene usar bien: se habla de RECUPERACIÓN DE LA CIRCULACIÓN cuando esta se consigue por medios mecánicos, como una oxigenación por membrana extracorpórea, y de RECUPERACIÓN DE LA CIRCULACIÓN ESPONTÁNEA cuando se debe a la propia función cardiaca.',
      descompensada: 'Antes de la parada casi siempre hay inestabilidad, y la guía de 2025 pide reconocerla por la MALA PERFUSIÓN DE ÓRGANO más que por un número: alteración del estado mental, piel fría y moteada con relleno capilar lento, oliguria, dolor torácico isquémico, disnea con signos de congestión e hipotensión. Una arritmia puede ser a la vez la CAUSA de esa inestabilidad y su MANIFESTACIÓN, y distinguir cual de las dos cosas es determina todo lo que viene después: si la arritmia es la causa, se trata la arritmia; si es la consecuencia de una sepsis, una hipoxemia o una hemorragia, tratar solo la arritmia no resuelve nada.'
    },
    laboratorio: [
      { prueba: 'Gasometría y potasio', utilidad: 'Busca dos causas reversibles frecuentes y corregibles en minutos: la hipoxemia y las alteraciones del potasio, tanto la hiperpotasemia como la hipopotasemia. Se piden en cuanto haya un acceso, sin interrumpir las compresiones.' },
      { prueba: 'Glucemia capilar', utilidad: 'Inmediata y a pie de cama. La hipoglucemia grave es tratable en segundos y se pasa por alto con facilidad en un paciente inconsciente.' },
      { prueba: 'Calcio y magnesio', utilidad: 'Relevantes como CAUSA (la hipocalcemia y la hipomagnesemia pueden provocar arritmias), no como tratamiento de rutina: la guía de 2025 no recomienda la administración sistemática ni de calcio ni de magnesio en la parada.' },
      { prueba: 'Hemoglobina y pruebas cruzadas', utilidad: 'Si se sospecha hipovolemia por hemorragia, que es una de las causas reversibles y la que más se beneficia de un tratamiento específico e inmediato.' },
      { prueba: 'Troponina y electrocardiograma tras recuperar circulación', utilidad: 'Para identificar el síndrome coronario agudo como causa, que es la más frecuente en el adulto y la que tiene tratamiento de reperfusión.' },
      { prueba: 'Tóxicos y niveles de fármacos', utilidad: 'Ante sospecha de intoxicación: digoxina, antidepresivos tricíclicos, bloqueantes de los canales del calcio, betabloqueantes u opioides. Cambian el tratamiento por completo, porque varias tienen antídoto.' },
      { prueba: 'Lactato', utilidad: 'Útil tras recuperar la circulación para valorar la magnitud de la deuda tisular y seguir la reanimación posterior. Durante la parada no aporta nada que cambie la conducta.' },
      { prueba: 'Coagulación y dímero D', utilidad: 'Si se sospecha tromboembolia pulmonar como causa, dentro del contexto clínico. Nunca deben retrasar el tratamiento empírico si la sospecha es alta.' }
    ],
    no_invasivos: [
      { metodo: 'Rama del algoritmo (calculadora disponible)', interpretacion: 'Clasifica el ritmo en desfibrilable o no desfibrilable y devuelve la secuencia correspondiente.', cutoff: 'La primera pregunta es siempre si el ritmo se desfibrila' },
      { metodo: 'Momento de la adrenalina (calculadora disponible)', interpretacion: 'Aplica la recomendación de 2025, que es distinta según el ritmo.', cutoff: 'No desfibrilable: cuanto antes. Desfibrilable: tras los primeros intentos de desfibrilacion' },
      { metodo: 'Energía de la descarga (calculadora disponible)', interpretacion: 'Distingue desfibrilacion de cardioversión y recoge el cambio de 2025 en la fibrilación y el flutter auriculares.', cutoff: 'Cardioversión de fibrilación o flutter auricular: 200 J o más en la primera' },
      { metodo: 'Terminar la reanimación (calculadora disponible)', interpretacion: 'Recoge las reglas actualizadas y el aviso expreso de la guía sobre el dióxido de carbono espirado.', cutoff: 'El carbonico espirado NO se usa de forma aislada' },
      { metodo: 'Monitorización del dióxido de carbono espirado', interpretacion: 'Confirma la colocación del tubo, informa de la calidad de las compresiones y su subida brusca sugiere recuperación de la circulación. La guía señala que sus valores durante la ventilación con bolsa y mascarilla son tan fiables como con otros dispositivos.', cutoff: 'Útil para muchas cosas; no para decidir a solas cuando parar' },
      { metodo: 'Ecografía a pie de cama', interpretacion: 'La guía de 2025 permite considerarla, en manos expertas, para diagnosticar causas reversibles, con una condición que se incumple a menudo: que no interrumpa la reanimación.', cutoff: 'Si interrumpe las compresiones, no se hace' }
    ],
    imagen: [
      { modalidad: 'Ecografía a pie de cama durante la parada', hallazgos: 'Taponamiento, neumotórax a tensión, signos de sobrecarga derecha en la tromboembolia, hipovolemia grave y ausencia de actividad cardiaca. Su valor depende por completo de la experiencia de quien la hace y de que no robe tiempo de compresiones.' },
      { modalidad: 'Radiografía de tórax tras recuperar la circulación', hallazgos: 'Comprueba la posición del tubo y de los accesos, y busca neumotórax, congestión y complicaciones de la propia reanimación, como fracturas costales.' },
      { modalidad: 'Tomografía craneal y torácica', hallazgos: 'Tras recuperar la circulación, si la causa sigue sin estar clara: hemorragia intracraneal, tromboembolia pulmonar o disección aórtica.' },
      { modalidad: 'Coronariografia', hallazgos: 'Ante sospecha de causa coronaria, que es la más frecuente en el adulto. La decisión y el momento se toman con cardiología.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La primera clasificación es la que ordena el algoritmo: <strong>ritmo desfibrilable</strong> (fibrilación ventricular y taquicardia ventricular sin pulso) frente a <strong>no desfibrilable</strong> (asistolia y actividad eléctrica sin pulso). La segunda es la que la guía de 2025 pone por delante de todo: <strong>estable o inestable</strong>, juzgado por la perfusión de órgano y no por una cifra. Y hay una excepción que conviene tener grabada: la <strong>taquicardia ventricular polimorfa es SIEMPRE inestable</strong> y se desfibrila de inmediato, porque el retraso en la descarga empeora el resultado.`,
    escalas: [
      { nombre: 'Ritmo desfibrilable o no (calculadora disponible)', componentes: 'Fibrilación ventricular, taquicardia ventricular sin pulso, asistolia y actividad eléctrica sin pulso.', formula: 'Clasificación binaria a partir del monitor.', interpretacion: 'Es la pregunta que bifurca todo el algoritmo. En el desfibrilable la prioridad absoluta es la DESCARGA; en el no desfibrilable, las compresiones de calidad, la adrenalina precoz y la búsqueda de la causa.' },
      { nombre: 'Estabilidad clínica', componentes: 'Estado mental, perfusión cutánea y relleno capilar, diuresis, dolor torácico isquémico, disnea con congestión e hipotensión.', formula: 'Valoración global de la perfusión de órgano.', interpretacion: 'La guía de 2025 le dedica más espacio que ediciones previas: lo que define la inestabilidad no es un número de tensión sino como se manifiesta la mala perfusión. Y recuerda que la arritmia puede ser causa o consecuencia de esa inestabilidad.' },
      { nombre: 'Energía de la descarga (calculadora disponible)', componentes: 'Tipo de descarga (desfibrilacion no sincronizada o cardioversión sincronizada), ritmo y tipo de onda.', formula: 'Selección de energía según el escenario.', interpretacion: 'La guía recomienda desfibriladores de onda bifásica o monofásica para las taquiarritmias que requieren descarga. Y el cambio de 2025 que conviene recordar: en la CARDIOVERSIÓN de fibrilación auricular y flutter, una primera descarga de 200 J o más es preferible a energías menores.' },
      { nombre: 'Momento de la adrenalina (calculadora disponible)', componentes: 'Ritmo inicial y tiempo transcurrido.', formula: 'Recomendación diferenciada por ritmo.', interpretacion: 'En ritmo NO desfibrilable es razonable administrarla CUANTO ANTES. En ritmo desfibrilable es razonable administrarla DESPUÉS de los intentos iniciales de desfibrilacion. Es una distinción que se olvida y que tiene sentido: en el desfibrilable lo que salva es la descarga.' },
      { nombre: 'Reglas de terminacion de la reanimación (calculadora disponible)', componentes: 'Ambito y nivel de los intervinientes (soporte vital básico, avanzado o regla universal), presencia de testigos, reanimación por testigos, descargas administradas y recuperación de circulación.', formula: 'Reglas distintas según el nivel asistencial.', interpretacion: 'La edicion de 2025 insiste en aplicar la regla que corresponde al AMBITO, y advierte de forma expresa que el dióxido de carbono espirado NO debe usarse de forma aislada para terminar la reanimación.' },
      { nombre: 'Causas reversibles', componentes: 'Hipoxia, hipovolemia, hidrogeniones (acidosis), hipo o hiperpotasemia, hipotermia, neumotórax a tensión, taponamiento, tóxicos, trombosis coronaria y trombosis pulmonar.', formula: 'Repaso sistemático durante la reanimación.', interpretacion: 'La ecografía a pie de cama puede ayudar a identificarlas si la hace alguien con experiencia y SIN interrumpir las compresiones. Es la parte del algoritmo donde más se gana, porque varias de ellas tienen un tratamiento específico que cambia el desenlace.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer la inestabilidad antes de la parada',
      color: '#8a5a2e',
      definicion: 'Situación de perfusión insuficiente de los órganos que precede a la parada y en la que una intervención a tiempo puede evitarla.',
      fisiopatologia: 'El gasto cardiaco cae por debajo de lo necesario para mantener la perfusión. El organismo compensa con taquicardia y vasoconstricción, y por eso la tensión arterial puede ser lo ÚLTIMO que se altere: cuando cae, la compensación ya ha fallado. De ahi que la guía de 2025 insista en buscar la mala perfusión en los órganos (cerebro, piel, riñón) y no solo en el tensiometro.',
      epidemiologia: 'La parada intrahospitalaria ocurre en aproximadamente 1 de cada 100 ingresados, y en la mayoría de los casos hay signos de deterioro en las horas previas. Ese es todo el fundamento de los sistemas de alerta temprana.',
      factores_riesgo: ['Deterioro progresivo de las constantes en las horas previas', 'Alteración nueva del estado mental', 'Insuficiencia respiratoria', 'Sepsis', 'Alteraciones electrolíticas', 'Cardiopatía estructural o isquémica', 'Fármacos con efecto sobre la conducción', 'Preocupación del personal de enfermeria, que por si sola es criterio de escalada'],
      clinica: 'Alteración del estado mental, piel fría y moteada con relleno capilar lento, oliguria, dolor torácico isquémico, disnea con signos de congestión e hipotensión. La guía describe con detalle estas manifestaciones porque son lo que de verdad define la inestabilidad.',
      criterios_dx: 'No hay un umbral único. Es una valoración global de la perfusión de órgano, apoyada en las constantes y en la tendencia, no en un valor aislado.',
      laboratorio: 'Gasometría, potasio, glucemia, lactato y hemograma, orientados a las causas corregibles.',
      imagen: 'Según la sospecha: radiografía de tórax, ecografía a pie de cama o electrocardiograma.',
      complementarios: 'Escalas de alerta temprana. Monitorización continua si el riesgo lo justifica.',
      dx_diferencial: 'Distinguir si la arritmia que se ve es la CAUSA de la inestabilidad o su CONSECUENCIA. Una taquicardia sinusal a 140 en una sepsis no se trata con cardioversión.',
      tx_medico: 'Tratar la causa proximal de la inestabilidad: oxígeno si hay hipoxemia, volumen si hay hipovolemia, antibiótico si hay sepsis, sangre si hay hemorragia. Y avisar pronto, que es lo que más cambia el resultado.',
      tx_farmacologico: 'Depende de la causa. Si la arritmia es la causa y el paciente esta inestable, cardioversión sincronizada. Si es la consecuencia, tratar lo de debajo.',
      tx_intervencionista: 'Marcapasos transcutaneo en la bradicardia inestable que no responde. Cardioversión sincronizada en la taquiarritmia inestable.',
      criterios_uci: 'Prácticamente toda inestabilidad mantenida: necesidad de vasopresores, de ventilación o de monitorización invasiva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Constantes con frecuencia aumentada, monitorización continua y umbral bajo para escalar el nivel de cuidados.',
      seguimiento_ambulatorio: 'No aplica en la fase aguda.',
      pronostico: 'Reconocer y tratar la inestabilidad antes de la parada es, con diferencia, la intervención más eficaz de todo este tema.',
      algoritmo: ['Valorar la PERFUSIÓN de órgano, no solo la tensión', 'Buscar la causa proximal de la inestabilidad', '¿La arritmia es causa o consecuencia?', 'Tratar la causa: oxígeno, volumen, sangre, antibiótico', 'Si la arritmia es la causa y hay inestabilidad, cardiovertir', 'Avisar pronto y subir el nivel de cuidados']
    },
    {
      nombre: 'Ritmos desfibrilables: lo que salva es la descarga',
      color: '#8c2e2e',
      definicion: 'Fibrilación ventricular y taquicardia ventricular sin pulso, los dos ritmos de parada en los que la desfibrilacion precoz es el tratamiento decisivo.',
      fisiopatologia: 'La actividad eléctrica esta desorganizada o es demasiado rápida para producir contracción eficaz. La descarga despolariza de forma simultánea la masa miocárdica y permite que el marcapasos natural retome el control. Cada minuto de retraso reduce la probabilidad de éxito, y esa es la razón de que todo el algoritmo se organice alrededor de acortar el tiempo hasta la descarga.',
      epidemiologia: 'Son los ritmos con mejor pronóstico de la parada, sobre todo si están presentes desde el inicio y hay testigos que reaniman.',
      factores_riesgo: ['Cardiopatía isquémica', 'Miocardiopatias', 'Canalopatías y síndrome de QT largo', 'Alteraciones del potasio y del magnesio', 'Fármacos que prolongan el QT', 'Intoxicaciones'],
      clinica: 'Parada con ritmo desfibrilable en el monitor. La TAQUICARDIA VENTRICULAR POLIMORFA merece mención aparte: la guía de 2025 la considera SIEMPRE inestable y pide tratarla de inmediato con desfibrilacion, porque el retraso en la descarga empeora el resultado.',
      criterios_dx: 'Monitor o desfibrilador. La guía recomienda desfibriladores de onda bifásica o monofásica para tratar las taquiarritmias que requieren descarga.',
      laboratorio: 'Potasio y magnesio, buscando causa. Gasometría.',
      imagen: 'Ecografía a pie de cama solo si no interrumpe las compresiones.',
      complementarios: 'Dióxido de carbono espirado para vigilar la calidad de las compresiones y detectar la recuperación de la circulación.',
      dx_diferencial: 'Artefacto por movimiento, desconexión de electrodos y fibrilación fina que puede confundirse con asistolia. Ante la duda, comprobar derivaciones y ganancia antes de dar por sentado que es asistolia.',
      tx_medico: 'DESFIBRILAR de inmediato y reanudar compresiones sin comprobar el pulso. Minimizar las interrupciones: la fracción de tiempo con compresiones es lo que más se asocia al resultado.',
      tx_farmacologico: 'Adrenalina 1 mg cada 3 a 5 minutos, y en el ritmo desfibrilable es razonable administrarla DESPUÉS de los intentos iniciales de desfibrilacion. Amiodarona o lidocaina pueden considerarse en la fibrilación ventricular o taquicardia ventricular sin pulso que no responde a la desfibrilacion (recomendación débil). El uso de betabloqueantes, bretilio, procainamida o sotalol en ese contexto es de beneficio incierto.',
      tx_intervencionista: 'La utilidad del CAMBIO DE VECTOR y de la DESFIBRILACION SECUENCIAL DOBLE en la fibrilación refractaria NO esta establecida según la guía de 2025, aunque señala que merecen más investigación. La reanimación con soporte extracorpóreo se plantea en centros con programa y en pacientes seleccionados.',
      criterios_uci: 'Todo paciente que recupera circulación tras una parada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuidados posparada: oxigenación y ventilación controladas, hemodinámica, búsqueda de la causa y valoración de coronariografía.',
      seguimiento_ambulatorio: 'Valoración de desfibrilador implantable y estudio de la cardiopatía de base.',
      pronostico: 'El mejor de los ritmos de parada, y mejora mucho con reanimación por testigos y desfibrilacion precoz.',
      algoritmo: ['Confirmar el ritmo en el monitor', 'DESFIBRILAR de inmediato', 'Reanudar compresiones sin comprobar pulso', 'Adrenalina 1 mg tras los intentos iniciales de descarga, y cada 3 a 5 min', 'Valorar amiodarona o lidocaina si no responde', 'Buscar causas reversibles sin interrumpir', 'Taquicardia ventricular polimorfa: desfibrilar SIEMPRE y ya']
    },
    {
      nombre: 'Ritmos no desfibrilables: la causa es el tratamiento',
      color: '#3d5a73',
      definicion: 'Asistolia y actividad eléctrica sin pulso, los ritmos de parada en los que la descarga no tiene papel y en los que el resultado depende de encontrar la causa.',
      fisiopatologia: 'En la asistolia no hay actividad eléctrica. En la actividad eléctrica sin pulso hay actividad organizada en el monitor pero sin contracción eficaz, o con una contracción que no genera pulso palpable. En ambos casos, detrás suele haber una causa concreta: hipovolemia grave, hipoxia, neumotórax a tensión, taponamiento, tromboembolia, tóxicos o una alteración metabólica. Por eso aquí el algoritmo farmacológico rinde poco y la búsqueda de la causa lo es todo.',
      epidemiologia: 'Son los ritmos más frecuentes en la parada intrahospitalaria y los de peor pronóstico, precisamente porque suelen traducir un deterioro previo prolongado.',
      factores_riesgo: ['Hipoxemia mantenida', 'Sepsis y choque', 'Hemorragia', 'Tromboembolia pulmonar', 'Alteraciones del potasio', 'Intoxicaciones', 'Parada prolongada sin reanimación'],
      clinica: 'Ausencia de pulso con asistolia o con ritmo organizado en el monitor. Conviene comprobar que la asistolia es real: derivaciones conectadas, ganancia adecuada y más de una derivación.',
      criterios_dx: 'Monitor más ausencia de pulso.',
      laboratorio: 'Potasio, glucemia, gasometría, hemoglobina y tóxicos, dirigidos a las causas.',
      imagen: 'Ecografía a pie de cama, que aquí es donde más rinde: taponamiento, neumotórax, sobrecarga derecha o hipovolemia. Siempre que la haga alguien con experiencia y sin interrumpir.',
      complementarios: 'Dióxido de carbono espirado, que orienta sobre la calidad de la reanimación y avisa de la recuperación de la circulación con una subida brusca.',
      dx_diferencial: 'Fibrilación ventricular fina que aparenta asistolia, y seudoactividad eléctrica sin pulso (hay contracción en la ecografía pero no pulso palpable), que tiene mejor pronóstico que la ausencia real de contracción.',
      tx_medico: 'Compresiones de calidad con el mínimo de interrupciones y búsqueda sistemática de las causas reversibles. Aquí el trabajo intelectual pesa más que el farmacológico.',
      tx_farmacologico: 'Adrenalina 1 mg cada 3 a 5 minutos, y en el ritmo NO desfibrilable es razonable administrarla CUANTO ANTES. La guía de 2025 NO recomienda la administración sistemática de calcio, de bicarbonato sódico ni de magnesio en la parada, y señala que el beneficio de los corticoides es incierto. Eso no impide usarlos cuando hay una indicación concreta, como el calcio en una hiperpotasemia conocida.',
      tx_intervencionista: 'Según la causa: descompresión de un neumotórax a tensión, pericardiocentesis en el taponamiento, transfusión y control del sangrado en la hemorragia, fibrinólisis en la tromboembolia con alta sospecha.',
      criterios_uci: 'Todo paciente que recupera circulación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuidados posparada y tratamiento de la causa identificada.',
      seguimiento_ambulatorio: 'Según la causa de base.',
      pronostico: 'Peor que el de los ritmos desfibrilables. Mejora si se identifica y se corrige una causa reversible.',
      algoritmo: ['Confirmar que no es fibrilación fina: derivaciones y ganancia', 'Compresiones de calidad, mínimas interrupciones', 'Adrenalina 1 mg CUANTO ANTES, y cada 3 a 5 min', 'Repasar las causas reversibles de forma sistemática', 'Ecografía si hay alguien con experiencia y no interrumpe', 'Tratar la causa encontrada de forma específica', 'No administrar calcio, bicarbonato ni magnesio de rutina']
    },
    {
      nombre: 'Fármacos y accesos: lo que cambio en 2025',
      color: '#5a4a8c',
      definicion: 'Conjunto de recomendaciones sobre por donde y con que se trata la parada, donde la edicion de 2025 introduce cambios que contradicen prácticas extendidas.',
      fisiopatologia: 'La adrenalina act&uacute;a sobre los receptores alfa produciendo vasoconstricción, lo que aumenta la presión de perfusión coronaria y cerebral durante las compresiones. Ese es su mecanismo, y explica por que importa el momento: en el ritmo desfibrilable lo que reinicia el corazón es la descarga, de modo que la adrenalina no debe retrasarla; en el no desfibrilable no hay descarga que dar, y por eso se administra cuanto antes.',
      epidemiologia: 'El acceso vascular es uno de los puntos donde más ha cambiado la práctica en los últimos años, con una tendencia creciente al intraoseo que la guía de 2025 matiza de forma explícita.',
      factores_riesgo: ['Acceso venoso difícil', 'Retraso en conseguir acceso', 'Interrupción de compresiones para colocar accesos o via aérea', 'Uso de rutas de administración obsoletas'],
      clinica: 'La decisión práctica en la cabecera es doble: por donde administro, y cuando doy la adrenalina.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Los dirigidos a las causas reversibles.',
      imagen: 'No aplica.',
      complementarios: 'Registro del momento de cada dosis, que después es imprescindible para el análisis del caso.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'La guía de 2025 mantiene el acceso INTRAVENOSO como primera elección para administrar fármacos durante la parada, y considera el INTRAOSEO una alternativa razonable si el intravenoso no es viable o se retrasa. Es el orden inverso al que muchos han interiorizado.',
      tx_farmacologico: 'Adrenalina: recomendada, 1 mg cada 3 a 5 minutos, con el matiz de momento según el ritmo. Amiodarona o lidocaina: pueden considerarse en fibrilación ventricular o taquicardia ventricular sin pulso que no responde a la desfibrilacion. Betabloqueantes, bretilio, procainamida y sotalol: beneficio incierto en ese contexto. Calcio, bicarbonato sódico y magnesio: NO se recomienda su administración de rutina. Corticoides: beneficio incierto.',
      tx_intervencionista: 'La guía de 2025 ha RETIRADO las recomendaciones sobre procedimientos obsoletos que ya tienen equivalentes modernos más eficaces, entre ellos la administración de fármacos por un tubo endotraqueal ya colocado. Y DESACONSEJA la reanimación con la cabeza elevada fuera de ensayos clínicos rigurosos con las protecciones adecuadas.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revisión del caso con el equipo, que es donde se detectan los retrasos evitables.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Ningún fármaco de la parada ha demostrado mejorar el resultado neurológico a largo plazo de forma clara. Lo que si lo mejora son las compresiones de calidad y la desfibrilacion precoz.',
      algoritmo: ['Intentar acceso INTRAVENOSO primero', 'Intraoseo si el intravenoso no es viable o se retrasa', 'No usar el tubo endotraqueal como via de fármacos', 'Adrenalina 1 mg cada 3 a 5 min', 'Ritmo no desfibrilable: adrenalina cuanto antes', 'Ritmo desfibrilable: adrenalina tras los primeros intentos de descarga', 'Valorar amiodarona o lidocaina si no responde a la descarga', 'No dar calcio, bicarbonato ni magnesio de rutina']
    },
    {
      nombre: 'Via aérea, monitorización y causas reversibles',
      color: '#3f6b52',
      definicion: 'Conjunto de decisiones sobre como se ventila, que se monitoriza y como se busca lo que ha provocado la parada.',
      fisiopatologia: 'Cada interrupción de las compresiones hace caer la presión de perfusión coronaria, que tarda varios segundos en recuperarse al reanudarlas. Ese hecho explica por que la guía condiciona tanto la via aérea como la ecografía a que no interrumpan la reanimación: el beneficio potencial de ambas no compensa el coste de parar.',
      epidemiologia: 'La intubación durante la parada tiene una tasa de éxito muy dependiente de la experiencia de quien la hace, y ese es el motivo de que la guía lo señale de forma expresa.',
      factores_riesgo: ['Escasa experiencia o falta de entrenamiento reciente en intubación', 'Intentos repetidos que interrumpen las compresiones', 'Ecografía realizada por personal sin experiencia', 'No repasar las causas reversibles de forma sistemática'],
      clinica: 'La via aérea avanzada no es una prioridad inmediata: la guía indica que si su colocación va a interrumpir las compresiones, se DIFIERA hasta que el paciente no responda a la reanimación inicial y a la desfibrilacion.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Gasometría, potasio, glucemia y tóxicos, dirigidos a las causas.',
      imagen: 'Ecografía a pie de cama en manos expertas y sin interrumpir. Radiografía de tórax tras recuperar circulación.',
      complementarios: 'Dióxido de carbono espirado de forma continua. La guía señala que sus valores durante la ventilación con bolsa y mascarilla son tan fiables como con otros dispositivos, lo que amplia su utilidad a situaciones sin via aérea avanzada.',
      dx_diferencial: 'Las causas reversibles: hipoxia, hipovolemia, acidosis, alteraciones del potasio, hipotermia, neumotórax a tensión, taponamiento, tóxicos, trombosis coronaria y trombosis pulmonar.',
      tx_medico: 'Ventilación con bolsa y mascarilla bien hecha mientras no haya indicación clara de via aérea avanzada. Evitar la hiperventilación, que aumenta la presión intratorácica y reduce el retorno venoso.',
      tx_farmacologico: 'El correspondiente a la causa que se identifique.',
      tx_intervencionista: 'La guía recomienda que los profesionales que intuban en la parada tengan EXPERIENCIA FRECUENTE o entrenamiento frecuente. La elección entre dispositivo supraglotico y tubo endotraqueal depende de la experiencia disponible. Y las intervenciones dirigidas a la causa: descompresión del neumotórax, pericardiocentesis, transfusión o fibrinólisis.',
      criterios_uci: 'Todo paciente que recupera circulación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobacion de la posición del tubo, ajuste de la ventilación y control de la oxigenación tras recuperar circulación.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Depende sobre todo de la calidad de las compresiones y de que se encuentre una causa tratable.',
      algoritmo: ['Ventilar con bolsa y mascarilla, sin hiperventilar', 'Diferir la via aérea avanzada si va a interrumpir compresiones', 'Que intube quien tenga experiencia frecuente', 'Carbonico espirado continuo desde el principio', 'Repasar las causas reversibles de forma sistemática', 'Ecografía solo si es experta y no interrumpe', 'Tratar la causa encontrada']
    },
    {
      nombre: 'Cuando parar: terminar la reanimación',
      color: '#7a4363',
      definicion: 'Decisión de finalizar los esfuerzos de reanimación, basada en reglas validadas que dependen del ambito y del nivel asistencial de quien reanima.',
      fisiopatologia: 'No aplica. Es una decisión clínica y etica, apoyada en reglas de predicción.',
      epidemiologia: 'La supervivencia al alta tras parada extrahospitalaria atendida ronda el 10%, mientras que tras parada intrahospitalaria es de alrededor del 24.2%, con buen resultado neurológico en cerca del 85% de los supervivientes. Esa diferencia importa al decidir, porque el contexto cambia la probabilidad.',
      factores_riesgo: ['Parada no presenciada', 'Ausencia de reanimación por testigos', 'Ritmo inicial no desfibrilable', 'Tiempo prolongado hasta la primera descarga', 'Ausencia de recuperación de circulación pese a reanimación adecuada'],
      clinica: 'La guía de 2025 actualiza las reglas de terminacion y subraya que hay que aplicar la que corresponde al AMBITO y al nivel de los intervinientes: soporte vital básico, soporte vital avanzado o la regla universal.',
      criterios_dx: 'Cada regla combina datos como si la parada fue presenciada, si hubo reanimación por testigos, si se administraron descargas y si se recupero la circulación.',
      laboratorio: 'No hay ningún valor analítico que decida por si solo.',
      imagen: 'La ausencia de actividad cardiaca en la ecografía es un dato de mal pronóstico, pero no una regla de terminacion por sí misma.',
      complementarios: 'El dióxido de carbono espirado informa de la calidad de la reanimación y del pronóstico, pero la guía de 2025 advierte de forma EXPRESA que NO debe usarse de forma AISLADA para terminar los esfuerzos de reanimación.',
      dx_diferencial: 'Situaciones que obligan a prolongar: hipotermia, intoxicación, embarazo, paciente candidato a soporte extracorpóreo y causa reversible identificada y en tratamiento.',
      tx_medico: 'La decisión se toma en equipo, se comunica con claridad y se documenta. Y forma parte del cuidado: la atención a la familia y al propio equipo después de una reanimación fallida no es un extra.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'En un paciente candidato, valorar la reanimación con soporte extracorpóreo antes de terminar, si existe programa.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Valorar la donación en asistolia según los protocolos locales.',
      seguimiento_hospitalario: 'Revisión del caso con el equipo y comunicación con la familia.',
      seguimiento_ambulatorio: 'Apoyo a la familia y, cuando proceda, información sobre estudio familiar si se sospecha una cardiopatía hereditaria.',
      pronostico: 'Las reglas están diseñadas para no terminar la reanimación en alguien que podría sobrevivir. Por eso su aplicación debe ser cuidadosa y nunca basarse en un solo parámetro.',
      algoritmo: ['Comprobar que la reanimación ha sido de calidad', 'Descartar causas reversibles y situaciones que obligan a prolongar', 'Aplicar la regla que corresponde al ambito y al nivel', 'NO usar el carbonico espirado de forma aislada', 'Valorar soporte extracorpóreo si el paciente es candidato', 'Decidir en equipo, comunicar y documentar', 'Atender a la familia y al equipo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La parada intrahospitalaria ocurre en aproximadamente 1 de cada 100 ingresados, y casi siempre hay deterioro en las horas previas. Lo que el internista hace antes y después pesa tanto como lo que ocurre durante.',
    parametros: [
      'Antes: reconocer la inestabilidad por la PERFUSIÓN de órgano y no por un número aislado, y avisar pronto. Es la intervención más eficaz de todo el tema.',
      'Durante: minimizar las interrupciones de las compresiones. Ni la via aérea avanzada ni la ecografía justifican parar.',
      'Acceso INTRAVENOSO primero; el intraoseo es la alternativa si el intravenoso no es viable o se retrasa.',
      'Adrenalina cuanto antes si el ritmo NO es desfibrilable; después de los primeros intentos de descarga si lo es.',
      'No administrar calcio, bicarbonato ni magnesio de rutina; si por indicación concreta, como el calcio en una hiperpotasemia conocida.',
      'Repasar las causas reversibles de forma sistemática y en voz alta, que es como se detectan.',
      'Después: cuidados posparada en una unidad de críticos, búsqueda de la causa y valoración de coronariografía.',
      'Y revisar el caso con el equipo: es donde aparecen los retrasos evitables y donde se cuida a quien reanimo.'
    ],
    criterios_uci_general: 'Todo paciente que recupera la circulación tras una parada, y toda inestabilidad mantenida que requiera vasopresores, ventilación o monitorización invasiva.',
    criterios_tips_general: 'No aplica en la parada cardiaca.',
    criterios_trasplante_general: 'Valorar la donación en asistolia según los protocolos locales cuando se termina la reanimación.',
    prevencion: 'Sistemas de alerta temprana con un equipo que acuda, monitorización adecuada al riesgo, corrección de las alteraciones electrolíticas, revisión de los fármacos que prolongan el QT, y entrenamiento frecuente del personal, que la guía señala de forma expresa para quien intuba.'
  }
};

export const compCites = {
  'Reconocer la inestabilidad antes de la parada': { clinica: [1], epidemiologia: [1], dx_diferencial: [1], criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1] },
  'Ritmos desfibrilables: lo que salva es la descarga': { clinica: [1], criterios_dx: [1], tx_farmacologico: [1], tx_intervencionista: [1], laboratorio: [1] },
  'Ritmos no desfibrilables: la causa es el tratamiento': { tx_farmacologico: [1], criterios_dx: [1], laboratorio: [1] },
  'Fármacos y accesos: lo que cambio en 2025': { tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], laboratorio: [1] },
  'Via aérea, monitorización y causas reversibles': { clinica: [1], complementarios: [1], tx_intervencionista: [1], laboratorio: [1], tx_farmacologico: [1] },
  'Cuando parar: terminar la reanimación': { clinica: [1], epidemiologia: [1], complementarios: [1], criterios_dx: [1], laboratorio: [1] }
};

export const estigmasTitulo = 'Lo que hay que comprobar en los primeros segundos';
export const estigmas = [
  { nombre: 'No responde', descripcion: 'Primer dato. Estímulo verbal y táctil firme. Si no responde, se sigue adelante sin perder tiempo.' },
  { nombre: 'Respiración agonica', descripcion: 'Las boqueadas NO son respiración. Es uno de los motivos más frecuentes de retraso en iniciar compresiones, porque quien las ve cree que el paciente respira.' },
  { nombre: 'Pulso en 10 segundos como máximo', descripcion: 'Se busca pulso central. Si en 10 segundos no se palpa con seguridad, se considera que no hay y se empieza a comprimir. La duda se resuelve comprimiendo.' },
  { nombre: 'Piel moteada y relleno capilar lento', descripcion: 'Signo de mala perfusión que precede a la parada. La guía de 2025 pide fijarse en esto y no solo en la tensión arterial, que puede ser lo último en caer.' },
  { nombre: 'Subida brusca del carbonico espirado', descripcion: 'Durante las compresiones, un ascenso súbito sugiere recuperación de la circulación. Es el aviso más precoz y no obliga a interrumpir para comprobarlo.' },
  { nombre: 'Fibrilación fina que parece asistolia', descripcion: 'Antes de dar por sentada una asistolia, comprobar derivaciones, ganancia y más de una derivación. Confundirlas cambia el tratamiento por completo.' }
];

export const biopsia = null;

export const escalaRefs = { 'Ritmo desfibrilable o no (calculadora disponible)': [1], 'Estabilidad clínica': [1], 'Energía de la descarga (calculadora disponible)': [1], 'Momento de la adrenalina (calculadora disponible)': [1], 'Reglas de terminacion de la reanimación (calculadora disponible)': [1], 'Causas reversibles': [1] };

export const escalaCalc = {
  'Ritmo desfibrilable o no (calculadora disponible)': 'rama-algoritmo',
  'Momento de la adrenalina (calculadora disponible)': 'adrenalina-momento',
  'Energía de la descarga (calculadora disponible)': 'energia-descarga',
  'Reglas de terminacion de la reanimación (calculadora disponible)': 'terminar-reanimacion'
};

export const compGroups = [
  { title: 'Antes', items: ['Reconocer la inestabilidad antes de la parada'] },
  { title: 'Durante, por ritmo', items: ['Ritmos desfibrilables: lo que salva es la descarga', 'Ritmos no desfibrilables: la causa es el tratamiento'] },
  { title: 'Como se hace', items: ['Fármacos y accesos: lo que cambio en 2025', 'Via aérea, monitorización y causas reversibles'] },
  { title: 'Cuando parar', items: ['Cuando parar: terminar la reanimación'] }
];

export const complicacionesIntro = 'La primera ficha es la que más vidas salva y la que menos se estudia: reconocer la inestabilidad ANTES de la parada, que la edicion de 2025 pone por delante del algoritmo. Las dos siguientes son las dos ramas del algoritmo, separadas por la única pregunta que importa al principio: si el ritmo se desfibrila o no. Las dos que vienen después son el como, y ahi están casi todos los cambios de 2025, varios de los cuales contradicen lo que mucha gente aprendió. Y la última es la decisión que nadie enseña a tomar: cuando parar.';

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
  root: { title: 'PARADA CARDIACA', color: '#8c2e2e', target: 'definicion' },
  branches: [
    { title: 'Desfibrilable', sub: 'Fibrilación y taquicardia sin pulso', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Descarga YA', sub: 'Cada minuto cuenta', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Adrenalina después', sub: 'Tras los primeros intentos', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'No desfibrilable', sub: 'Asistolia y actividad sin pulso', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Adrenalina ya', sub: 'Cuanto antes', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Buscar la causa', sub: 'Es donde más se gana', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Antes y después', sub: 'Lo que más pesa', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Inestabilidad previa', sub: 'Perfusión, no tensión', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Cuando parar', sub: 'Reglas según el ambito', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1], imagen: [1] };
export const clasificacionCite = [1];
export const seguimientoCite = [1];
export const figurasDefinicion = ['acls-2025-cambios'];
export const figurasClasificacion = ['acls-ramas', 'acls-farmacos'];

export const figuras = {
  'acls-2025-cambios': {
    titulo: 'Lo que cambia en 2025 y contradice lo aprendido',
    fuente: 'Parte 9 de las guias de la American Heart Association de 2025 (Wigginton JG, et al. Circulation 2025;152(suppl 2):S538-S577).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tema</th><th>Lo que dice la edicion de 2025</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Acceso vascular</td><td>El <strong>intravenoso sigue siendo de primera elección</strong>; el intraoseo es alternativa razonable si el intravenoso no es viable o se retrasa</td></tr>
            <tr><td class="figure-org">Fármacos por el tubo</td><td><span class="figure-tag fail">Retirado</span> Se han eliminado las recomendaciones sobre procedimientos obsoletos con equivalentes modernos más eficaces, entre ellos administrar fármacos por un tubo ya colocado</td></tr>
            <tr><td class="figure-org">RCP con la cabeza elevada</td><td><span class="figure-tag fail">Se desaconseja</span> fuera de ensayos clínicos rigurosos con las protecciones adecuadas</td></tr>
            <tr><td class="figure-org">Cambio de vector y desfibrilacion secuencial doble</td><td><span class="figure-tag dys">Utilidad NO establecida</span> en la fibrilación refractaria; hace falta más investigación</td></tr>
            <tr><td class="figure-org">Carbonico espirado y fin de la reanimación</td><td><strong>No debe usarse de forma aislada</strong> para terminar los esfuerzos</td></tr>
            <tr><td class="figure-org">Cardioversión de fibrilación y flutter auriculares</td><td>Primera descarga de <strong>200 J o más</strong>, preferible a energías menores</td></tr>
            <tr><td class="figure-org">Taquicardia ventricular polimorfa</td><td><strong>SIEMPRE inestable</strong>: desfibrilacion inmediata, porque el retraso empeora el resultado</td></tr>
            <tr><td class="figure-org">Ecografía a pie de cama</td><td>Puede considerarse, en manos expertas, para diagnosticar causas reversibles <strong>si no interrumpe la reanimación</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Y el mensaje que la guía coloca en primer lugar, antes que cualquier algoritmo: <strong>la valoración rápida de la estabilidad clínica es esencial</strong>, y esta edicion desarrolla mucho más como se manifiesta la mala perfusión de órgano. Con un corolario que se olvida a diario: una arritmia puede ser la <strong>causa</strong> de la inestabilidad o su <strong>manifestación</strong>, y tratar la arritmia de un paciente inestable por sepsis o por hemorragia no resuelve nada.</div>`
  },
  'acls-ramas': {
    titulo: 'Las dos ramas del algoritmo',
    fuente: 'Parte 9 de las guias de la American Heart Association de 2025 (doi:10.1161/CIR.0000000000001376).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Desfibrilable</th><th>No desfibrilable</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Ritmos</td><td>Fibrilación ventricular, taquicardia ventricular sin pulso</td><td>Asistolia, actividad eléctrica sin pulso</td></tr>
            <tr><td class="figure-org">Prioridad</td><td><span class="figure-tag fail">DESCARGA</span> inmediata</td><td>Compresiones de calidad y <strong>buscar la causa</strong></td></tr>
            <tr><td class="figure-org">Adrenalina</td><td>1 mg <strong>después</strong> de los intentos iniciales de desfibrilacion, y cada 3 a 5 min</td><td>1 mg <strong>cuanto antes</strong>, y cada 3 a 5 min</td></tr>
            <tr><td class="figure-org">Antiarrítmico</td><td>Amiodarona o lidocaina pueden considerarse si no responde a la descarga</td><td>No tiene papel</td></tr>
            <tr><td class="figure-org">Trampa frecuente</td><td>Confundir una fibrilación fina con asistolia: comprobar derivaciones y ganancia</td><td>Seudoactividad sin pulso: hay contracción en la ecografía, y su pronóstico es mejor</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La diferencia en el <strong>momento de la adrenalina</strong> tiene una lógica que ayuda a recordarla: en el ritmo desfibrilable lo que reinicia el corazón es la <strong>descarga</strong>, de modo que la adrenalina no debe retrasarla; en el no desfibrilable no hay descarga que dar, y por eso se administra cuanto antes. Repasar las <strong>causas reversibles</strong> en voz alta durante la reanimación es donde más se gana en la rama no desfibrilable: hipoxia, hipovolemia, acidosis, potasio, hipotermia, neumotórax a tensión, taponamiento, tóxicos, trombosis coronaria y trombosis pulmonar.</div>`
  },
  'acls-farmacos': {
    titulo: 'Fármacos: lo que si, lo dudoso y lo que no',
    fuente: 'Parte 9 de las guias de la American Heart Association de 2025 (Wigginton JG, et al. Circulation 2025;152(suppl 2):S538-S577).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Fármaco</th><th>Que dice la guía</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Adrenalina</td><td><span class="figure-tag fail">Recomendada</span> 1 mg cada 3 a 5 min, con el momento ajustado al ritmo</td></tr>
            <tr><td class="figure-org">Amiodarona o lidocaina</td><td><span class="figure-tag dys">Pueden considerarse</span> en fibrilación ventricular o taquicardia sin pulso que no responde a la desfibrilacion</td></tr>
            <tr><td class="figure-org">Betabloqueantes, bretilio, procainamida, sotalol</td><td>Beneficio <strong>incierto</strong> en ese contexto</td></tr>
            <tr><td class="figure-org">Corticoides</td><td>Beneficio <strong>incierto</strong></td></tr>
            <tr><td class="figure-org">Calcio</td><td><strong>No se recomienda</strong> su administración de rutina</td></tr>
            <tr><td class="figure-org">Bicarbonato sódico</td><td><strong>No se recomienda</strong> su administración de rutina</td></tr>
            <tr><td class="figure-org">Magnesio</td><td><strong>No se recomienda</strong> su administración de rutina</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Que algo no se recomiende <strong>de rutina</strong> no significa que este prohibido cuando hay una indicación concreta: el calcio sigue teniendo su sitio en una hiperpotasemia conocida o en una intoxicación por bloqueantes del calcio, y el magnesio en una taquicardia ventricular polimorfa con QT largo. Lo que la guía descarta es darlos a ciegas en toda parada. Y conviene no perder la perspectiva: <strong>ningún fármaco de la parada ha demostrado con claridad mejorar el resultado neurológico a largo plazo</strong>. Lo que si lo mejora son las compresiones de calidad sin interrupciones y la desfibrilacion precoz.</div>`
  }
};
