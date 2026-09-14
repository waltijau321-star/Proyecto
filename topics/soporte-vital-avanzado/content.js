// topics/soporte-vital-avanzado/content.js - Modulo 82: Soporte vital avanzado y RCP.
// Basado en la Parte 9 de las guias de la American Heart Association de 2025 (Wigginton JG,
// Kurz MC, et al. Circulation 2025;152(suppl 2):S538-S577, doi:10.1161/CIR.0000000000001376),
// que ya estaba en Bibliografia/. Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'soporte-vital-avanzado',
  titulo: 'Soporte vital avanzado y RCP',
  subtitulo: 'Modulo 82 &middot; Medicina Critica',
  accent: '#8c2e2e',
  accentDim: '#a85252'
};

export const definicionText = `<p style="margin:0 0 14px;">El soporte vital avanzado es lo que se a&#241;ade a la reanimacion basica cuando hay un equipo y material: monitorizacion del ritmo, desfibrilacion, acceso vascular, farmacos, via aerea avanzada y busqueda de causas reversibles. Pero la edicion de <strong>2025</strong> de las guias de la American Heart Association empieza por otra cosa: insiste en que lo primero no es el algoritmo sino <strong>valorar la estabilidad clinica</strong>, y dedica mas espacio que nunca a describir como se manifiesta la mala perfusion de organo.</p>
<p style="margin:0 0 14px;">Esa edicion trae ademas varias cosas que <strong>contradicen lo que mucha gente aprendio</strong>: el acceso <strong>intravenoso sigue siendo el de primera eleccion</strong> y el intraoseo es la alternativa razonable, no al reves; se han <strong>retirado</strong> procedimientos obsoletos como administrar farmacos por el tubo endotraqueal; la <strong>RCP con la cabeza elevada se desaconseja</strong> fuera de ensayos; el cambio de vector y la desfibrilacion secuencial doble <strong>no tienen utilidad establecida</strong> en la fibrilacion refractaria; y el <strong>dioxido de carbono espirado no debe usarse de forma aislada</strong> para decidir el fin de la reanimacion.</p>
<p style="margin:0 0 14px;">Dos cifras para dimensionar el problema. Fuera del hospital la incidencia atendida por los servicios de emergencia es de <strong>83.4 casos por cada 100.000 habitantes y a&#241;o</strong>, y la supervivencia al alta ronda el <strong>10%</strong>. Dentro del hospital la parada ocurre en aproximadamente <strong>1 de cada 100 ingresados</strong>, se recupera circulacion en el 72.2%, sobrevive al alta el 24.2%, y de los que sobreviven alrededor del <strong>85% lo hace con buen resultado neurologico</strong>. Es decir: dentro del hospital el pronostico es mucho mejor, y quien sobrevive suele hacerlo bien.</p>`;

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
      compensada: 'Paciente que NO RESPONDE, sin respiracion o con respiracion agonica (boqueadas), y sin pulso central palpable en un maximo de 10 segundos. Esos tres datos bastan para iniciar compresiones: no hay que perder tiempo buscando mas. En el paciente monitorizado, el ritmo confirma y clasifica de inmediato. Y hay una precision de terminologia que la guia de 2025 introduce y que conviene usar bien: se habla de RECUPERACION DE LA CIRCULACION cuando esta se consigue por medios mecanicos, como una oxigenacion por membrana extracorporea, y de RECUPERACION DE LA CIRCULACION ESPONTANEA cuando se debe a la propia funcion cardiaca.',
      descompensada: 'Antes de la parada casi siempre hay inestabilidad, y la guia de 2025 pide reconocerla por la MALA PERFUSION DE ORGANO mas que por un numero: alteracion del estado mental, piel fria y moteada con relleno capilar lento, oliguria, dolor toracico isquemico, disnea con signos de congestion e hipotension. Una arritmia puede ser a la vez la CAUSA de esa inestabilidad y su MANIFESTACION, y distinguir cual de las dos cosas es determina todo lo que viene despues: si la arritmia es la causa, se trata la arritmia; si es la consecuencia de una sepsis, una hipoxemia o una hemorragia, tratar solo la arritmia no resuelve nada.'
    },
    laboratorio: [
      { prueba: 'Gasometria y potasio', utilidad: 'Busca dos causas reversibles frecuentes y corregibles en minutos: la hipoxemia y las alteraciones del potasio, tanto la hiperpotasemia como la hipopotasemia. Se piden en cuanto haya un acceso, sin interrumpir las compresiones.' },
      { prueba: 'Glucemia capilar', utilidad: 'Inmediata y a pie de cama. La hipoglucemia grave es tratable en segundos y se pasa por alto con facilidad en un paciente inconsciente.' },
      { prueba: 'Calcio y magnesio', utilidad: 'Relevantes como CAUSA (la hipocalcemia y la hipomagnesemia pueden provocar arritmias), no como tratamiento de rutina: la guia de 2025 no recomienda la administracion sistematica ni de calcio ni de magnesio en la parada.' },
      { prueba: 'Hemoglobina y pruebas cruzadas', utilidad: 'Si se sospecha hipovolemia por hemorragia, que es una de las causas reversibles y la que mas se beneficia de un tratamiento especifico e inmediato.' },
      { prueba: 'Troponina y electrocardiograma tras recuperar circulacion', utilidad: 'Para identificar el sindrome coronario agudo como causa, que es la mas frecuente en el adulto y la que tiene tratamiento de reperfusion.' },
      { prueba: 'Toxicos y niveles de farmacos', utilidad: 'Ante sospecha de intoxicacion: digoxina, antidepresivos triciclicos, bloqueantes de los canales del calcio, betabloqueantes u opioides. Cambian el tratamiento por completo, porque varias tienen antidoto.' },
      { prueba: 'Lactato', utilidad: 'Util tras recuperar la circulacion para valorar la magnitud de la deuda tisular y seguir la reanimacion posterior. Durante la parada no aporta nada que cambie la conducta.' },
      { prueba: 'Coagulacion y dimero D', utilidad: 'Si se sospecha tromboembolia pulmonar como causa, dentro del contexto clinico. Nunca deben retrasar el tratamiento empirico si la sospecha es alta.' }
    ],
    no_invasivos: [
      { metodo: 'Rama del algoritmo (calculadora disponible)', interpretacion: 'Clasifica el ritmo en desfibrilable o no desfibrilable y devuelve la secuencia correspondiente.', cutoff: 'La primera pregunta es siempre si el ritmo se desfibrila' },
      { metodo: 'Momento de la adrenalina (calculadora disponible)', interpretacion: 'Aplica la recomendacion de 2025, que es distinta segun el ritmo.', cutoff: 'No desfibrilable: cuanto antes. Desfibrilable: tras los primeros intentos de desfibrilacion' },
      { metodo: 'Energia de la descarga (calculadora disponible)', interpretacion: 'Distingue desfibrilacion de cardioversion y recoge el cambio de 2025 en la fibrilacion y el flutter auriculares.', cutoff: 'Cardioversion de fibrilacion o flutter auricular: 200 J o mas en la primera' },
      { metodo: 'Terminar la reanimacion (calculadora disponible)', interpretacion: 'Recoge las reglas actualizadas y el aviso expreso de la guia sobre el dioxido de carbono espirado.', cutoff: 'El carbonico espirado NO se usa de forma aislada' },
      { metodo: 'Monitorizacion del dioxido de carbono espirado', interpretacion: 'Confirma la colocacion del tubo, informa de la calidad de las compresiones y su subida brusca sugiere recuperacion de la circulacion. La guia se&#241;ala que sus valores durante la ventilacion con bolsa y mascarilla son tan fiables como con otros dispositivos.', cutoff: 'Util para muchas cosas; no para decidir a solas cuando parar' },
      { metodo: 'Ecografia a pie de cama', interpretacion: 'La guia de 2025 permite considerarla, en manos expertas, para diagnosticar causas reversibles, con una condicion que se incumple a menudo: que no interrumpa la reanimacion.', cutoff: 'Si interrumpe las compresiones, no se hace' }
    ],
    imagen: [
      { modalidad: 'Ecografia a pie de cama durante la parada', hallazgos: 'Taponamiento, neumotorax a tension, signos de sobrecarga derecha en la tromboembolia, hipovolemia grave y ausencia de actividad cardiaca. Su valor depende por completo de la experiencia de quien la hace y de que no robe tiempo de compresiones.' },
      { modalidad: 'Radiografia de torax tras recuperar la circulacion', hallazgos: 'Comprueba la posicion del tubo y de los accesos, y busca neumotorax, congestion y complicaciones de la propia reanimacion, como fracturas costales.' },
      { modalidad: 'Tomografia craneal y toracica', hallazgos: 'Tras recuperar la circulacion, si la causa sigue sin estar clara: hemorragia intracraneal, tromboembolia pulmonar o diseccion aortica.' },
      { modalidad: 'Coronariografia', hallazgos: 'Ante sospecha de causa coronaria, que es la mas frecuente en el adulto. La decision y el momento se toman con cardiologia.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La primera clasificacion es la que ordena el algoritmo: <strong>ritmo desfibrilable</strong> (fibrilacion ventricular y taquicardia ventricular sin pulso) frente a <strong>no desfibrilable</strong> (asistolia y actividad electrica sin pulso). La segunda es la que la guia de 2025 pone por delante de todo: <strong>estable o inestable</strong>, juzgado por la perfusion de organo y no por una cifra. Y hay una excepcion que conviene tener grabada: la <strong>taquicardia ventricular polimorfa es SIEMPRE inestable</strong> y se desfibrila de inmediato, porque el retraso en la descarga empeora el resultado.`,
    escalas: [
      { nombre: 'Ritmo desfibrilable o no (calculadora disponible)', componentes: 'Fibrilacion ventricular, taquicardia ventricular sin pulso, asistolia y actividad electrica sin pulso.', formula: 'Clasificacion binaria a partir del monitor.', interpretacion: 'Es la pregunta que bifurca todo el algoritmo. En el desfibrilable la prioridad absoluta es la DESCARGA; en el no desfibrilable, las compresiones de calidad, la adrenalina precoz y la busqueda de la causa.' },
      { nombre: 'Estabilidad clinica', componentes: 'Estado mental, perfusion cutanea y relleno capilar, diuresis, dolor toracico isquemico, disnea con congestion e hipotension.', formula: 'Valoracion global de la perfusion de organo.', interpretacion: 'La guia de 2025 le dedica mas espacio que ediciones previas: lo que define la inestabilidad no es un numero de tension sino como se manifiesta la mala perfusion. Y recuerda que la arritmia puede ser causa o consecuencia de esa inestabilidad.' },
      { nombre: 'Energia de la descarga (calculadora disponible)', componentes: 'Tipo de descarga (desfibrilacion no sincronizada o cardioversion sincronizada), ritmo y tipo de onda.', formula: 'Seleccion de energia segun el escenario.', interpretacion: 'La guia recomienda desfibriladores de onda bifasica o monofasica para las taquiarritmias que requieren descarga. Y el cambio de 2025 que conviene recordar: en la CARDIOVERSION de fibrilacion auricular y flutter, una primera descarga de 200 J o mas es preferible a energias menores.' },
      { nombre: 'Momento de la adrenalina (calculadora disponible)', componentes: 'Ritmo inicial y tiempo transcurrido.', formula: 'Recomendacion diferenciada por ritmo.', interpretacion: 'En ritmo NO desfibrilable es razonable administrarla CUANTO ANTES. En ritmo desfibrilable es razonable administrarla DESPUES de los intentos iniciales de desfibrilacion. Es una distincion que se olvida y que tiene sentido: en el desfibrilable lo que salva es la descarga.' },
      { nombre: 'Reglas de terminacion de la reanimacion (calculadora disponible)', componentes: 'Ambito y nivel de los intervinientes (soporte vital basico, avanzado o regla universal), presencia de testigos, reanimacion por testigos, descargas administradas y recuperacion de circulacion.', formula: 'Reglas distintas segun el nivel asistencial.', interpretacion: 'La edicion de 2025 insiste en aplicar la regla que corresponde al AMBITO, y advierte de forma expresa que el dioxido de carbono espirado NO debe usarse de forma aislada para terminar la reanimacion.' },
      { nombre: 'Causas reversibles', componentes: 'Hipoxia, hipovolemia, hidrogeniones (acidosis), hipo o hiperpotasemia, hipotermia, neumotorax a tension, taponamiento, toxicos, trombosis coronaria y trombosis pulmonar.', formula: 'Repaso sistematico durante la reanimacion.', interpretacion: 'La ecografia a pie de cama puede ayudar a identificarlas si la hace alguien con experiencia y SIN interrumpir las compresiones. Es la parte del algoritmo donde mas se gana, porque varias de ellas tienen un tratamiento especifico que cambia el desenlace.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer la inestabilidad antes de la parada',
      color: '#8a5a2e',
      definicion: 'Situacion de perfusion insuficiente de los organos que precede a la parada y en la que una intervencion a tiempo puede evitarla.',
      fisiopatologia: 'El gasto cardiaco cae por debajo de lo necesario para mantener la perfusion. El organismo compensa con taquicardia y vasoconstriccion, y por eso la tension arterial puede ser lo ULTIMO que se altere: cuando cae, la compensacion ya ha fallado. De ahi que la guia de 2025 insista en buscar la mala perfusion en los organos (cerebro, piel, ri&#241;on) y no solo en el tensiometro.',
      epidemiologia: 'La parada intrahospitalaria ocurre en aproximadamente 1 de cada 100 ingresados, y en la mayoria de los casos hay signos de deterioro en las horas previas. Ese es todo el fundamento de los sistemas de alerta temprana.',
      factores_riesgo: ['Deterioro progresivo de las constantes en las horas previas', 'Alteracion nueva del estado mental', 'Insuficiencia respiratoria', 'Sepsis', 'Alteraciones electroliticas', 'Cardiopatia estructural o isquemica', 'Farmacos con efecto sobre la conduccion', 'Preocupacion del personal de enfermeria, que por si sola es criterio de escalada'],
      clinica: 'Alteracion del estado mental, piel fria y moteada con relleno capilar lento, oliguria, dolor toracico isquemico, disnea con signos de congestion e hipotension. La guia describe con detalle estas manifestaciones porque son lo que de verdad define la inestabilidad.',
      criterios_dx: 'No hay un umbral unico. Es una valoracion global de la perfusion de organo, apoyada en las constantes y en la tendencia, no en un valor aislado.',
      laboratorio: 'Gasometria, potasio, glucemia, lactato y hemograma, orientados a las causas corregibles.',
      imagen: 'Segun la sospecha: radiografia de torax, ecografia a pie de cama o electrocardiograma.',
      complementarios: 'Escalas de alerta temprana. Monitorizacion continua si el riesgo lo justifica.',
      dx_diferencial: 'Distinguir si la arritmia que se ve es la CAUSA de la inestabilidad o su CONSECUENCIA. Una taquicardia sinusal a 140 en una sepsis no se trata con cardioversion.',
      tx_medico: 'Tratar la causa proximal de la inestabilidad: oxigeno si hay hipoxemia, volumen si hay hipovolemia, antibiotico si hay sepsis, sangre si hay hemorragia. Y avisar pronto, que es lo que mas cambia el resultado.',
      tx_farmacologico: 'Depende de la causa. Si la arritmia es la causa y el paciente esta inestable, cardioversion sincronizada. Si es la consecuencia, tratar lo de debajo.',
      tx_intervencionista: 'Marcapasos transcutaneo en la bradicardia inestable que no responde. Cardioversion sincronizada en la taquiarritmia inestable.',
      criterios_uci: 'Practicamente toda inestabilidad mantenida: necesidad de vasopresores, de ventilacion o de monitorizacion invasiva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Constantes con frecuencia aumentada, monitorizacion continua y umbral bajo para escalar el nivel de cuidados.',
      seguimiento_ambulatorio: 'No aplica en la fase aguda.',
      pronostico: 'Reconocer y tratar la inestabilidad antes de la parada es, con diferencia, la intervencion mas eficaz de todo este tema.',
      algoritmo: ['Valorar la PERFUSION de organo, no solo la tension', 'Buscar la causa proximal de la inestabilidad', '&#191;La arritmia es causa o consecuencia?', 'Tratar la causa: oxigeno, volumen, sangre, antibiotico', 'Si la arritmia es la causa y hay inestabilidad, cardiovertir', 'Avisar pronto y subir el nivel de cuidados']
    },
    {
      nombre: 'Ritmos desfibrilables: lo que salva es la descarga',
      color: '#8c2e2e',
      definicion: 'Fibrilacion ventricular y taquicardia ventricular sin pulso, los dos ritmos de parada en los que la desfibrilacion precoz es el tratamiento decisivo.',
      fisiopatologia: 'La actividad electrica esta desorganizada o es demasiado rapida para producir contraccion eficaz. La descarga despolariza de forma simultanea la masa miocardica y permite que el marcapasos natural retome el control. Cada minuto de retraso reduce la probabilidad de exito, y esa es la razon de que todo el algoritmo se organice alrededor de acortar el tiempo hasta la descarga.',
      epidemiologia: 'Son los ritmos con mejor pronostico de la parada, sobre todo si estan presentes desde el inicio y hay testigos que reaniman.',
      factores_riesgo: ['Cardiopatia isquemica', 'Miocardiopatias', 'Canalopatias y sindrome de QT largo', 'Alteraciones del potasio y del magnesio', 'Farmacos que prolongan el QT', 'Intoxicaciones'],
      clinica: 'Parada con ritmo desfibrilable en el monitor. La TAQUICARDIA VENTRICULAR POLIMORFA merece mencion aparte: la guia de 2025 la considera SIEMPRE inestable y pide tratarla de inmediato con desfibrilacion, porque el retraso en la descarga empeora el resultado.',
      criterios_dx: 'Monitor o desfibrilador. La guia recomienda desfibriladores de onda bifasica o monofasica para tratar las taquiarritmias que requieren descarga.',
      laboratorio: 'Potasio y magnesio, buscando causa. Gasometria.',
      imagen: 'Ecografia a pie de cama solo si no interrumpe las compresiones.',
      complementarios: 'Dioxido de carbono espirado para vigilar la calidad de las compresiones y detectar la recuperacion de la circulacion.',
      dx_diferencial: 'Artefacto por movimiento, desconexion de electrodos y fibrilacion fina que puede confundirse con asistolia. Ante la duda, comprobar derivaciones y ganancia antes de dar por sentado que es asistolia.',
      tx_medico: 'DESFIBRILAR de inmediato y reanudar compresiones sin comprobar el pulso. Minimizar las interrupciones: la fraccion de tiempo con compresiones es lo que mas se asocia al resultado.',
      tx_farmacologico: 'Adrenalina 1 mg cada 3 a 5 minutos, y en el ritmo desfibrilable es razonable administrarla DESPUES de los intentos iniciales de desfibrilacion. Amiodarona o lidocaina pueden considerarse en la fibrilacion ventricular o taquicardia ventricular sin pulso que no responde a la desfibrilacion (recomendacion debil). El uso de betabloqueantes, bretilio, procainamida o sotalol en ese contexto es de beneficio incierto.',
      tx_intervencionista: 'La utilidad del CAMBIO DE VECTOR y de la DESFIBRILACION SECUENCIAL DOBLE en la fibrilacion refractaria NO esta establecida segun la guia de 2025, aunque se&#241;ala que merecen mas investigacion. La reanimacion con soporte extracorporeo se plantea en centros con programa y en pacientes seleccionados.',
      criterios_uci: 'Todo paciente que recupera circulacion tras una parada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuidados posparada: oxigenacion y ventilacion controladas, hemodinamica, busqueda de la causa y valoracion de coronariografia.',
      seguimiento_ambulatorio: 'Valoracion de desfibrilador implantable y estudio de la cardiopatia de base.',
      pronostico: 'El mejor de los ritmos de parada, y mejora mucho con reanimacion por testigos y desfibrilacion precoz.',
      algoritmo: ['Confirmar el ritmo en el monitor', 'DESFIBRILAR de inmediato', 'Reanudar compresiones sin comprobar pulso', 'Adrenalina 1 mg tras los intentos iniciales de descarga, y cada 3 a 5 min', 'Valorar amiodarona o lidocaina si no responde', 'Buscar causas reversibles sin interrumpir', 'Taquicardia ventricular polimorfa: desfibrilar SIEMPRE y ya']
    },
    {
      nombre: 'Ritmos no desfibrilables: la causa es el tratamiento',
      color: '#3d5a73',
      definicion: 'Asistolia y actividad electrica sin pulso, los ritmos de parada en los que la descarga no tiene papel y en los que el resultado depende de encontrar la causa.',
      fisiopatologia: 'En la asistolia no hay actividad electrica. En la actividad electrica sin pulso hay actividad organizada en el monitor pero sin contraccion eficaz, o con una contraccion que no genera pulso palpable. En ambos casos, detras suele haber una causa concreta: hipovolemia grave, hipoxia, neumotorax a tension, taponamiento, tromboembolia, toxicos o una alteracion metabolica. Por eso aqui el algoritmo farmacologico rinde poco y la busqueda de la causa lo es todo.',
      epidemiologia: 'Son los ritmos mas frecuentes en la parada intrahospitalaria y los de peor pronostico, precisamente porque suelen traducir un deterioro previo prolongado.',
      factores_riesgo: ['Hipoxemia mantenida', 'Sepsis y choque', 'Hemorragia', 'Tromboembolia pulmonar', 'Alteraciones del potasio', 'Intoxicaciones', 'Parada prolongada sin reanimacion'],
      clinica: 'Ausencia de pulso con asistolia o con ritmo organizado en el monitor. Conviene comprobar que la asistolia es real: derivaciones conectadas, ganancia adecuada y mas de una derivacion.',
      criterios_dx: 'Monitor mas ausencia de pulso.',
      laboratorio: 'Potasio, glucemia, gasometria, hemoglobina y toxicos, dirigidos a las causas.',
      imagen: 'Ecografia a pie de cama, que aqui es donde mas rinde: taponamiento, neumotorax, sobrecarga derecha o hipovolemia. Siempre que la haga alguien con experiencia y sin interrumpir.',
      complementarios: 'Dioxido de carbono espirado, que orienta sobre la calidad de la reanimacion y avisa de la recuperacion de la circulacion con una subida brusca.',
      dx_diferencial: 'Fibrilacion ventricular fina que aparenta asistolia, y seudoactividad electrica sin pulso (hay contraccion en la ecografia pero no pulso palpable), que tiene mejor pronostico que la ausencia real de contraccion.',
      tx_medico: 'Compresiones de calidad con el minimo de interrupciones y busqueda sistematica de las causas reversibles. Aqui el trabajo intelectual pesa mas que el farmacologico.',
      tx_farmacologico: 'Adrenalina 1 mg cada 3 a 5 minutos, y en el ritmo NO desfibrilable es razonable administrarla CUANTO ANTES. La guia de 2025 NO recomienda la administracion sistematica de calcio, de bicarbonato sodico ni de magnesio en la parada, y se&#241;ala que el beneficio de los corticoides es incierto. Eso no impide usarlos cuando hay una indicacion concreta, como el calcio en una hiperpotasemia conocida.',
      tx_intervencionista: 'Segun la causa: descompresion de un neumotorax a tension, pericardiocentesis en el taponamiento, transfusion y control del sangrado en la hemorragia, fibrinolisis en la tromboembolia con alta sospecha.',
      criterios_uci: 'Todo paciente que recupera circulacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuidados posparada y tratamiento de la causa identificada.',
      seguimiento_ambulatorio: 'Segun la causa de base.',
      pronostico: 'Peor que el de los ritmos desfibrilables. Mejora si se identifica y se corrige una causa reversible.',
      algoritmo: ['Confirmar que no es fibrilacion fina: derivaciones y ganancia', 'Compresiones de calidad, minimas interrupciones', 'Adrenalina 1 mg CUANTO ANTES, y cada 3 a 5 min', 'Repasar las causas reversibles de forma sistematica', 'Ecografia si hay alguien con experiencia y no interrumpe', 'Tratar la causa encontrada de forma especifica', 'No administrar calcio, bicarbonato ni magnesio de rutina']
    },
    {
      nombre: 'Farmacos y accesos: lo que cambio en 2025',
      color: '#5a4a8c',
      definicion: 'Conjunto de recomendaciones sobre por donde y con que se trata la parada, donde la edicion de 2025 introduce cambios que contradicen practicas extendidas.',
      fisiopatologia: 'La adrenalina act&uacute;a sobre los receptores alfa produciendo vasoconstriccion, lo que aumenta la presion de perfusion coronaria y cerebral durante las compresiones. Ese es su mecanismo, y explica por que importa el momento: en el ritmo desfibrilable lo que reinicia el corazon es la descarga, de modo que la adrenalina no debe retrasarla; en el no desfibrilable no hay descarga que dar, y por eso se administra cuanto antes.',
      epidemiologia: 'El acceso vascular es uno de los puntos donde mas ha cambiado la practica en los ultimos a&#241;os, con una tendencia creciente al intraoseo que la guia de 2025 matiza de forma explicita.',
      factores_riesgo: ['Acceso venoso dificil', 'Retraso en conseguir acceso', 'Interrupcion de compresiones para colocar accesos o via aerea', 'Uso de rutas de administracion obsoletas'],
      clinica: 'La decision practica en la cabecera es doble: por donde administro, y cuando doy la adrenalina.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Los dirigidos a las causas reversibles.',
      imagen: 'No aplica.',
      complementarios: 'Registro del momento de cada dosis, que despues es imprescindible para el analisis del caso.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'La guia de 2025 mantiene el acceso INTRAVENOSO como primera eleccion para administrar farmacos durante la parada, y considera el INTRAOSEO una alternativa razonable si el intravenoso no es viable o se retrasa. Es el orden inverso al que muchos han interiorizado.',
      tx_farmacologico: 'Adrenalina: recomendada, 1 mg cada 3 a 5 minutos, con el matiz de momento segun el ritmo. Amiodarona o lidocaina: pueden considerarse en fibrilacion ventricular o taquicardia ventricular sin pulso que no responde a la desfibrilacion. Betabloqueantes, bretilio, procainamida y sotalol: beneficio incierto en ese contexto. Calcio, bicarbonato sodico y magnesio: NO se recomienda su administracion de rutina. Corticoides: beneficio incierto.',
      tx_intervencionista: 'La guia de 2025 ha RETIRADO las recomendaciones sobre procedimientos obsoletos que ya tienen equivalentes modernos mas eficaces, entre ellos la administracion de farmacos por un tubo endotraqueal ya colocado. Y DESACONSEJA la reanimacion con la cabeza elevada fuera de ensayos clinicos rigurosos con las protecciones adecuadas.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revision del caso con el equipo, que es donde se detectan los retrasos evitables.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Ningun farmaco de la parada ha demostrado mejorar el resultado neurologico a largo plazo de forma clara. Lo que si lo mejora son las compresiones de calidad y la desfibrilacion precoz.',
      algoritmo: ['Intentar acceso INTRAVENOSO primero', 'Intraoseo si el intravenoso no es viable o se retrasa', 'No usar el tubo endotraqueal como via de farmacos', 'Adrenalina 1 mg cada 3 a 5 min', 'Ritmo no desfibrilable: adrenalina cuanto antes', 'Ritmo desfibrilable: adrenalina tras los primeros intentos de descarga', 'Valorar amiodarona o lidocaina si no responde a la descarga', 'No dar calcio, bicarbonato ni magnesio de rutina']
    },
    {
      nombre: 'Via aerea, monitorizacion y causas reversibles',
      color: '#3f6b52',
      definicion: 'Conjunto de decisiones sobre como se ventila, que se monitoriza y como se busca lo que ha provocado la parada.',
      fisiopatologia: 'Cada interrupcion de las compresiones hace caer la presion de perfusion coronaria, que tarda varios segundos en recuperarse al reanudarlas. Ese hecho explica por que la guia condiciona tanto la via aerea como la ecografia a que no interrumpan la reanimacion: el beneficio potencial de ambas no compensa el coste de parar.',
      epidemiologia: 'La intubacion durante la parada tiene una tasa de exito muy dependiente de la experiencia de quien la hace, y ese es el motivo de que la guia lo se&#241;ale de forma expresa.',
      factores_riesgo: ['Escasa experiencia o falta de entrenamiento reciente en intubacion', 'Intentos repetidos que interrumpen las compresiones', 'Ecografia realizada por personal sin experiencia', 'No repasar las causas reversibles de forma sistematica'],
      clinica: 'La via aerea avanzada no es una prioridad inmediata: la guia indica que si su colocacion va a interrumpir las compresiones, se DIFIERA hasta que el paciente no responda a la reanimacion inicial y a la desfibrilacion.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Gasometria, potasio, glucemia y toxicos, dirigidos a las causas.',
      imagen: 'Ecografia a pie de cama en manos expertas y sin interrumpir. Radiografia de torax tras recuperar circulacion.',
      complementarios: 'Dioxido de carbono espirado de forma continua. La guia se&#241;ala que sus valores durante la ventilacion con bolsa y mascarilla son tan fiables como con otros dispositivos, lo que amplia su utilidad a situaciones sin via aerea avanzada.',
      dx_diferencial: 'Las causas reversibles: hipoxia, hipovolemia, acidosis, alteraciones del potasio, hipotermia, neumotorax a tension, taponamiento, toxicos, trombosis coronaria y trombosis pulmonar.',
      tx_medico: 'Ventilacion con bolsa y mascarilla bien hecha mientras no haya indicacion clara de via aerea avanzada. Evitar la hiperventilacion, que aumenta la presion intratoracica y reduce el retorno venoso.',
      tx_farmacologico: 'El correspondiente a la causa que se identifique.',
      tx_intervencionista: 'La guia recomienda que los profesionales que intuban en la parada tengan EXPERIENCIA FRECUENTE o entrenamiento frecuente. La eleccion entre dispositivo supraglotico y tubo endotraqueal depende de la experiencia disponible. Y las intervenciones dirigidas a la causa: descompresion del neumotorax, pericardiocentesis, transfusion o fibrinolisis.',
      criterios_uci: 'Todo paciente que recupera circulacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobacion de la posicion del tubo, ajuste de la ventilacion y control de la oxigenacion tras recuperar circulacion.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Depende sobre todo de la calidad de las compresiones y de que se encuentre una causa tratable.',
      algoritmo: ['Ventilar con bolsa y mascarilla, sin hiperventilar', 'Diferir la via aerea avanzada si va a interrumpir compresiones', 'Que intube quien tenga experiencia frecuente', 'Carbonico espirado continuo desde el principio', 'Repasar las causas reversibles de forma sistematica', 'Ecografia solo si es experta y no interrumpe', 'Tratar la causa encontrada']
    },
    {
      nombre: 'Cuando parar: terminar la reanimacion',
      color: '#7a4363',
      definicion: 'Decision de finalizar los esfuerzos de reanimacion, basada en reglas validadas que dependen del ambito y del nivel asistencial de quien reanima.',
      fisiopatologia: 'No aplica. Es una decision clinica y etica, apoyada en reglas de prediccion.',
      epidemiologia: 'La supervivencia al alta tras parada extrahospitalaria atendida ronda el 10%, mientras que tras parada intrahospitalaria es de alrededor del 24.2%, con buen resultado neurologico en cerca del 85% de los supervivientes. Esa diferencia importa al decidir, porque el contexto cambia la probabilidad.',
      factores_riesgo: ['Parada no presenciada', 'Ausencia de reanimacion por testigos', 'Ritmo inicial no desfibrilable', 'Tiempo prolongado hasta la primera descarga', 'Ausencia de recuperacion de circulacion pese a reanimacion adecuada'],
      clinica: 'La guia de 2025 actualiza las reglas de terminacion y subraya que hay que aplicar la que corresponde al AMBITO y al nivel de los intervinientes: soporte vital basico, soporte vital avanzado o la regla universal.',
      criterios_dx: 'Cada regla combina datos como si la parada fue presenciada, si hubo reanimacion por testigos, si se administraron descargas y si se recupero la circulacion.',
      laboratorio: 'No hay ningun valor analitico que decida por si solo.',
      imagen: 'La ausencia de actividad cardiaca en la ecografia es un dato de mal pronostico, pero no una regla de terminacion por si misma.',
      complementarios: 'El dioxido de carbono espirado informa de la calidad de la reanimacion y del pronostico, pero la guia de 2025 advierte de forma EXPRESA que NO debe usarse de forma AISLADA para terminar los esfuerzos de reanimacion.',
      dx_diferencial: 'Situaciones que obligan a prolongar: hipotermia, intoxicacion, embarazo, paciente candidato a soporte extracorporeo y causa reversible identificada y en tratamiento.',
      tx_medico: 'La decision se toma en equipo, se comunica con claridad y se documenta. Y forma parte del cuidado: la atencion a la familia y al propio equipo despues de una reanimacion fallida no es un extra.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'En un paciente candidato, valorar la reanimacion con soporte extracorporeo antes de terminar, si existe programa.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Valorar la donacion en asistolia segun los protocolos locales.',
      seguimiento_hospitalario: 'Revision del caso con el equipo y comunicacion con la familia.',
      seguimiento_ambulatorio: 'Apoyo a la familia y, cuando proceda, informacion sobre estudio familiar si se sospecha una cardiopatia hereditaria.',
      pronostico: 'Las reglas estan dise&#241;adas para no terminar la reanimacion en alguien que podria sobrevivir. Por eso su aplicacion debe ser cuidadosa y nunca basarse en un solo parametro.',
      algoritmo: ['Comprobar que la reanimacion ha sido de calidad', 'Descartar causas reversibles y situaciones que obligan a prolongar', 'Aplicar la regla que corresponde al ambito y al nivel', 'NO usar el carbonico espirado de forma aislada', 'Valorar soporte extracorporeo si el paciente es candidato', 'Decidir en equipo, comunicar y documentar', 'Atender a la familia y al equipo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La parada intrahospitalaria ocurre en aproximadamente 1 de cada 100 ingresados, y casi siempre hay deterioro en las horas previas. Lo que el internista hace antes y despues pesa tanto como lo que ocurre durante.',
    parametros: [
      'Antes: reconocer la inestabilidad por la PERFUSION de organo y no por un numero aislado, y avisar pronto. Es la intervencion mas eficaz de todo el tema.',
      'Durante: minimizar las interrupciones de las compresiones. Ni la via aerea avanzada ni la ecografia justifican parar.',
      'Acceso INTRAVENOSO primero; el intraoseo es la alternativa si el intravenoso no es viable o se retrasa.',
      'Adrenalina cuanto antes si el ritmo NO es desfibrilable; despues de los primeros intentos de descarga si lo es.',
      'No administrar calcio, bicarbonato ni magnesio de rutina; si por indicacion concreta, como el calcio en una hiperpotasemia conocida.',
      'Repasar las causas reversibles de forma sistematica y en voz alta, que es como se detectan.',
      'Despues: cuidados posparada en una unidad de criticos, busqueda de la causa y valoracion de coronariografia.',
      'Y revisar el caso con el equipo: es donde aparecen los retrasos evitables y donde se cuida a quien reanimo.'
    ],
    criterios_uci_general: 'Todo paciente que recupera la circulacion tras una parada, y toda inestabilidad mantenida que requiera vasopresores, ventilacion o monitorizacion invasiva.',
    criterios_tips_general: 'No aplica en la parada cardiaca.',
    criterios_trasplante_general: 'Valorar la donacion en asistolia segun los protocolos locales cuando se termina la reanimacion.',
    prevencion: 'Sistemas de alerta temprana con un equipo que acuda, monitorizacion adecuada al riesgo, correccion de las alteraciones electroliticas, revision de los farmacos que prolongan el QT, y entrenamiento frecuente del personal, que la guia se&#241;ala de forma expresa para quien intuba.'
  }
};

export const compCites = {
  'Reconocer la inestabilidad antes de la parada': { clinica: [1], epidemiologia: [1], dx_diferencial: [1] },
  'Ritmos desfibrilables: lo que salva es la descarga': { clinica: [1], criterios_dx: [1], tx_farmacologico: [1], tx_intervencionista: [1] },
  'Ritmos no desfibrilables: la causa es el tratamiento': { tx_farmacologico: [1] },
  'Farmacos y accesos: lo que cambio en 2025': { tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1] },
  'Via aerea, monitorizacion y causas reversibles': { clinica: [1], complementarios: [1], tx_intervencionista: [1] },
  'Cuando parar: terminar la reanimacion': { clinica: [1], epidemiologia: [1], complementarios: [1] }
};

export const estigmasTitulo = 'Lo que hay que comprobar en los primeros segundos';
export const estigmas = [
  { nombre: 'No responde', descripcion: 'Primer dato. Estimulo verbal y tactil firme. Si no responde, se sigue adelante sin perder tiempo.' },
  { nombre: 'Respiracion agonica', descripcion: 'Las boqueadas NO son respiracion. Es uno de los motivos mas frecuentes de retraso en iniciar compresiones, porque quien las ve cree que el paciente respira.' },
  { nombre: 'Pulso en 10 segundos como maximo', descripcion: 'Se busca pulso central. Si en 10 segundos no se palpa con seguridad, se considera que no hay y se empieza a comprimir. La duda se resuelve comprimiendo.' },
  { nombre: 'Piel moteada y relleno capilar lento', descripcion: 'Signo de mala perfusion que precede a la parada. La guia de 2025 pide fijarse en esto y no solo en la tension arterial, que puede ser lo ultimo en caer.' },
  { nombre: 'Subida brusca del carbonico espirado', descripcion: 'Durante las compresiones, un ascenso subito sugiere recuperacion de la circulacion. Es el aviso mas precoz y no obliga a interrumpir para comprobarlo.' },
  { nombre: 'Fibrilacion fina que parece asistolia', descripcion: 'Antes de dar por sentada una asistolia, comprobar derivaciones, ganancia y mas de una derivacion. Confundirlas cambia el tratamiento por completo.' }
];

export const biopsia = null;

export const escalaRefs = { 'Ritmo desfibrilable o no (calculadora disponible)': [1], 'Estabilidad clinica': [1], 'Energia de la descarga (calculadora disponible)': [1], 'Momento de la adrenalina (calculadora disponible)': [1], 'Reglas de terminacion de la reanimacion (calculadora disponible)': [1], 'Causas reversibles': [1] };

export const escalaCalc = {
  'Ritmo desfibrilable o no (calculadora disponible)': 'rama-algoritmo',
  'Momento de la adrenalina (calculadora disponible)': 'adrenalina-momento',
  'Energia de la descarga (calculadora disponible)': 'energia-descarga',
  'Reglas de terminacion de la reanimacion (calculadora disponible)': 'terminar-reanimacion'
};

export const compGroups = [
  { title: 'Antes', items: ['Reconocer la inestabilidad antes de la parada'] },
  { title: 'Durante, por ritmo', items: ['Ritmos desfibrilables: lo que salva es la descarga', 'Ritmos no desfibrilables: la causa es el tratamiento'] },
  { title: 'Como se hace', items: ['Farmacos y accesos: lo que cambio en 2025', 'Via aerea, monitorizacion y causas reversibles'] },
  { title: 'Cuando parar', items: ['Cuando parar: terminar la reanimacion'] }
];

export const complicacionesIntro = 'La primera ficha es la que mas vidas salva y la que menos se estudia: reconocer la inestabilidad ANTES de la parada, que la edicion de 2025 pone por delante del algoritmo. Las dos siguientes son las dos ramas del algoritmo, separadas por la unica pregunta que importa al principio: si el ritmo se desfibrila o no. Las dos que vienen despues son el como, y ahi estan casi todos los cambios de 2025, varios de los cuales contradicen lo que mucha gente aprendio. Y la ultima es la decision que nadie ense&#241;a a tomar: cuando parar.';

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
    { title: 'Desfibrilable', sub: 'Fibrilacion y taquicardia sin pulso', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Descarga YA', sub: 'Cada minuto cuenta', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Adrenalina despues', sub: 'Tras los primeros intentos', color: '#5a4a8c', target: 'complicaciones' }
    ] },
    { title: 'No desfibrilable', sub: 'Asistolia y actividad sin pulso', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Adrenalina ya', sub: 'Cuanto antes', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Buscar la causa', sub: 'Es donde mas se gana', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Antes y despues', sub: 'Lo que mas pesa', color: '#8a5a2e', target: 'complicaciones', leaves: [
      { title: 'Inestabilidad previa', sub: 'Perfusion, no tension', color: '#8a5a2e', target: 'complicaciones' },
      { title: 'Cuando parar', sub: 'Reglas segun el ambito', color: '#7a4363', target: 'complicaciones' }
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
            <tr><td class="figure-org">Acceso vascular</td><td>El <strong>intravenoso sigue siendo de primera eleccion</strong>; el intraoseo es alternativa razonable si el intravenoso no es viable o se retrasa</td></tr>
            <tr><td class="figure-org">Farmacos por el tubo</td><td><span class="figure-tag fail">Retirado</span> Se han eliminado las recomendaciones sobre procedimientos obsoletos con equivalentes modernos mas eficaces, entre ellos administrar farmacos por un tubo ya colocado</td></tr>
            <tr><td class="figure-org">RCP con la cabeza elevada</td><td><span class="figure-tag fail">Se desaconseja</span> fuera de ensayos clinicos rigurosos con las protecciones adecuadas</td></tr>
            <tr><td class="figure-org">Cambio de vector y desfibrilacion secuencial doble</td><td><span class="figure-tag dys">Utilidad NO establecida</span> en la fibrilacion refractaria; hace falta mas investigacion</td></tr>
            <tr><td class="figure-org">Carbonico espirado y fin de la reanimacion</td><td><strong>No debe usarse de forma aislada</strong> para terminar los esfuerzos</td></tr>
            <tr><td class="figure-org">Cardioversion de fibrilacion y flutter auriculares</td><td>Primera descarga de <strong>200 J o mas</strong>, preferible a energias menores</td></tr>
            <tr><td class="figure-org">Taquicardia ventricular polimorfa</td><td><strong>SIEMPRE inestable</strong>: desfibrilacion inmediata, porque el retraso empeora el resultado</td></tr>
            <tr><td class="figure-org">Ecografia a pie de cama</td><td>Puede considerarse, en manos expertas, para diagnosticar causas reversibles <strong>si no interrumpe la reanimacion</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Y el mensaje que la guia coloca en primer lugar, antes que cualquier algoritmo: <strong>la valoracion rapida de la estabilidad clinica es esencial</strong>, y esta edicion desarrolla mucho mas como se manifiesta la mala perfusion de organo. Con un corolario que se olvida a diario: una arritmia puede ser la <strong>causa</strong> de la inestabilidad o su <strong>manifestacion</strong>, y tratar la arritmia de un paciente inestable por sepsis o por hemorragia no resuelve nada.</div>`
  },
  'acls-ramas': {
    titulo: 'Las dos ramas del algoritmo',
    fuente: 'Parte 9 de las guias de la American Heart Association de 2025 (doi:10.1161/CIR.0000000000001376).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Desfibrilable</th><th>No desfibrilable</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Ritmos</td><td>Fibrilacion ventricular, taquicardia ventricular sin pulso</td><td>Asistolia, actividad electrica sin pulso</td></tr>
            <tr><td class="figure-org">Prioridad</td><td><span class="figure-tag fail">DESCARGA</span> inmediata</td><td>Compresiones de calidad y <strong>buscar la causa</strong></td></tr>
            <tr><td class="figure-org">Adrenalina</td><td>1 mg <strong>despues</strong> de los intentos iniciales de desfibrilacion, y cada 3 a 5 min</td><td>1 mg <strong>cuanto antes</strong>, y cada 3 a 5 min</td></tr>
            <tr><td class="figure-org">Antiarritmico</td><td>Amiodarona o lidocaina pueden considerarse si no responde a la descarga</td><td>No tiene papel</td></tr>
            <tr><td class="figure-org">Trampa frecuente</td><td>Confundir una fibrilacion fina con asistolia: comprobar derivaciones y ganancia</td><td>Seudoactividad sin pulso: hay contraccion en la ecografia, y su pronostico es mejor</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La diferencia en el <strong>momento de la adrenalina</strong> tiene una logica que ayuda a recordarla: en el ritmo desfibrilable lo que reinicia el corazon es la <strong>descarga</strong>, de modo que la adrenalina no debe retrasarla; en el no desfibrilable no hay descarga que dar, y por eso se administra cuanto antes. Repasar las <strong>causas reversibles</strong> en voz alta durante la reanimacion es donde mas se gana en la rama no desfibrilable: hipoxia, hipovolemia, acidosis, potasio, hipotermia, neumotorax a tension, taponamiento, toxicos, trombosis coronaria y trombosis pulmonar.</div>`
  },
  'acls-farmacos': {
    titulo: 'Farmacos: lo que si, lo dudoso y lo que no',
    fuente: 'Parte 9 de las guias de la American Heart Association de 2025 (Wigginton JG, et al. Circulation 2025;152(suppl 2):S538-S577).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Farmaco</th><th>Que dice la guia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Adrenalina</td><td><span class="figure-tag fail">Recomendada</span> 1 mg cada 3 a 5 min, con el momento ajustado al ritmo</td></tr>
            <tr><td class="figure-org">Amiodarona o lidocaina</td><td><span class="figure-tag dys">Pueden considerarse</span> en fibrilacion ventricular o taquicardia sin pulso que no responde a la desfibrilacion</td></tr>
            <tr><td class="figure-org">Betabloqueantes, bretilio, procainamida, sotalol</td><td>Beneficio <strong>incierto</strong> en ese contexto</td></tr>
            <tr><td class="figure-org">Corticoides</td><td>Beneficio <strong>incierto</strong></td></tr>
            <tr><td class="figure-org">Calcio</td><td><strong>No se recomienda</strong> su administracion de rutina</td></tr>
            <tr><td class="figure-org">Bicarbonato sodico</td><td><strong>No se recomienda</strong> su administracion de rutina</td></tr>
            <tr><td class="figure-org">Magnesio</td><td><strong>No se recomienda</strong> su administracion de rutina</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Que algo no se recomiende <strong>de rutina</strong> no significa que este prohibido cuando hay una indicacion concreta: el calcio sigue teniendo su sitio en una hiperpotasemia conocida o en una intoxicacion por bloqueantes del calcio, y el magnesio en una taquicardia ventricular polimorfa con QT largo. Lo que la guia descarta es darlos a ciegas en toda parada. Y conviene no perder la perspectiva: <strong>ningun farmaco de la parada ha demostrado con claridad mejorar el resultado neurologico a largo plazo</strong>. Lo que si lo mejora son las compresiones de calidad sin interrupciones y la desfibrilacion precoz.</div>`
  }
};
