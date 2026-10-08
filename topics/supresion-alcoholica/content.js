// topics/supresion-alcoholica/content.js - Modulo 85: Sindrome de supresion alcoholica.
// Basado en la guia de practica clinica de 2020 de la American Society of Addiction Medicine
// sobre el manejo de la abstinencia alcoholica (ASAM. J Addict Med 2020;14(3S Suppl 1):1-72,
// doi:10.1097/ADM.0000000000000668), que ya estaba en Bibliografia/. La escala PAWSS se toma de
// los estudios de Maldonado que esa guia cita y recomienda para el paciente hospitalizado.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'supresion-alcoholica',
  titulo: 'Sindrome de supresion alcoholica',
  subtitulo: 'Modulo 85 &middot; Medicina Critica',
  accent: '#6b4a8c',
  accentDim: '#8a6aa8'
};

export const definicionText = `<p style="margin:0 0 14px;">El sindrome de supresion alcoholica aparece en la persona con dependencia fisica del alcohol cuando cesa o reduce su consumo. Va de un cuadro leve (ansiedad, insomnio, sudoracion) a sus dos formas <strong>complicadas</strong>, las <strong>convulsiones</strong> y el <strong>delirium por supresion</strong>, y su curso es lo bastante rapido como para que el tratamiento precoz cambie el resultado. La guia de 2020 de la American Society of Addiction Medicine lo resume en una idea: lo primero no es medir los sintomas sino <strong>estimar el riesgo</strong> de que el cuadro se vuelva grave o complicado.</p>
<p style="margin:0 0 14px;">El calendario es lo que hay que tener en la cabeza. Los sintomas empiezan entre <strong>6 y 24 horas</strong> despues de la ultima toma; las convulsiones pueden aparecer desde las <strong>8 horas</strong>, con un pico hacia las 24 y hasta las 48; las alucinaciones, entre las 12 y las 24 horas; y el delirium, entre las <strong>72 y las 96 horas</strong>, con una duracion habitual de 2 a 3 dias. No todos los pacientes recorren las etapas en orden: una convulsion puede llegar sin ningun otro sintoma llamativo.</p>
<p style="margin:0 0 14px;">Las <strong>benzodiacepinas</strong> son el tratamiento de primera linea porque reducen los sintomas y la incidencia de convulsiones y de delirium. Pero la guia insiste en lo que las rodea: la escala de gravedad <strong>no sirve para diagnosticar</strong>, la <strong>tiamina</strong> se da para prevenir la encefalopatia de Wernicke, y el ingreso por abstinencia es la oportunidad de empezar el tratamiento del trastorno por consumo de alcohol.</p>`;

export const bibliografia = [
  'American Society of Addiction Medicine. The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. J Addict Med. 2020;14(3S Suppl 1):1-72. doi:10.1097/ADM.0000000000000668.',
  'Maldonado JR, Sher Y, Das S, et al. Prospective Validation Study of the Prediction of Alcohol Withdrawal Severity Scale (PAWSS) in Medically Ill Inpatients: A New Scale for the Prediction of Complicated Alcohol Withdrawal Syndrome. Alcohol Alcohol. 2015;50(5):509-518. doi:10.1093/alcalc/agv043.',
  'Devlin JW, Skrobik Y, Gelinas C, et al. Clinical practice guidelines for the prevention and management of pain, agitation and sedation, delirium, immobility, and sleep disruption in adult patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La abstinencia que se ve venir',
      tituloB: 'La abstinencia que se disfraza',
      compensada: 'Ansiedad, insomnio, sue&#241;os vividos, anorexia, nauseas, cefalea, temblor, sudoracion, taquicardia, hipertension, hiperreflexia y febricula, que empiezan entre 6 y 24 horas despues de reducir o suspender el consumo. El diagnostico se hace con criterios como los del DSM-5, y la clave es la historia: cuanto bebe, con que frecuencia y a que hora fue la ultima toma, completada con familiares cuando hace falta.',
      descompensada: 'La que no se presenta en orden: una convulsion sin otros sintomas llamativos, un delirium en el postoperatorio o en la unidad de criticos, o un paciente que no refiere el consumo. Los betabloqueantes pueden enmascarar los signos autonomicos. Una alcoholemia positiva no descarta la abstinencia: puede haber sintomas con alcohol todavia en sangre, y eso es en si un factor de riesgo de complicacion. Y en el anciano el calendario puede ser distinto.'
    },
    laboratorio: [
      { prueba: 'Alcoholemia o alcohol en aire espirado', utilidad: 'Ayuda a confirmar el consumo reciente, sobre todo si el paciente no puede contarlo. Un resultado negativo no descarta el riesgo de abstinencia, y uno positivo no la descarta ni la confirma: hay que tener en cuenta la ventana de deteccion.' },
      { prueba: 'Perfil metabolico, hepatico y hemograma', utilidad: 'La guia los pide en todo entorno con laboratorio: electrolitos, funcion renal y hepatica, y hemograma con formula. El tratamiento no debe retrasarse mientras se esperan los resultados.' },
      { prueba: 'Magnesio y fosforo', utilidad: 'Se administra magnesio si hay hipomagnesemia, arritmias, otras alteraciones electroliticas o antecedente de convulsiones por abstinencia. El fosforo se repone si es menor de 1 mg/dL; entre 1 y 2 mg/dL basta con una nutricion adecuada.' },
      { prueba: 'Glucemia', utilidad: 'La hipoglucemia y la cetoacidosis diabetica pueden imitar la abstinencia, segun recoge el DSM-5. La glucosa y la tiamina pueden darse en cualquier orden.' },
      { prueba: 'Toxicos en orina y prueba de embarazo', utilidad: 'El policonsumo es frecuente y cambia el riesgo; la abstinencia de otros sedantes se parece a la del alcohol. Prueba de embarazo en toda mujer en edad fertil.' },
      { prueba: 'Serologias de hepatitis, VIH y tuberculosis', utilidad: 'Forman parte del cribado inicial que sugiere la guia, con consentimiento en el caso del VIH.' }
    ],
    no_invasivos: [
      { metodo: 'CIWA-Ar (calculadora disponible)', interpretacion: 'Escala de gravedad de 10 apartados, de 0 a 67 puntos. Sirve para medir y seguir, NO para diagnosticar.', cutoff: 'Leve menor de 10; moderada de 10 a 18; grave de 19 o mas' },
      { metodo: 'PAWSS (calculadora disponible)', interpretacion: 'Predice el riesgo de abstinencia complicada en el paciente medicamente enfermo, antes de que aparezcan los sintomas.', cutoff: 'Riesgo alto con 4 puntos o mas' },
      { metodo: 'Ambito de tratamiento (calculadora disponible)', interpretacion: 'Aplica los criterios de la guia para el alta desde urgencias a un manejo ambulatorio.', cutoff: 'Leve, o moderada sin complicaciones, sin intoxicacion ni antecedentes complicados' },
      { metodo: 'Tiamina y electrolitos (calculadora disponible)', interpretacion: 'Pauta de tiamina y criterios para reponer magnesio y fosforo.', cutoff: 'Tiamina 100 mg intravenosa o intramuscular al dia, de 3 a 5 dias' },
      { metodo: 'AUDIT y AUDIT-PC', interpretacion: 'Cribado del consumo de riesgo. La guia pide cribar a todo paciente que ingresa en el hospital, porque indican el riesgo de abstinencia.', cutoff: 'Cribado universal al ingreso' },
      { metodo: 'CAM-ICU, RASS o MINDS', interpretacion: 'Para seguir el delirium por supresion. La CIWA-Ar no sirve en el delirium porque depende de lo que cuenta el paciente.', cutoff: 'Objetivo: somnolencia ligera' }
    ],
    imagen: [
      { modalidad: 'Neuroimagen tras una convulsion', hallazgos: 'Indicada, junto con electroencefalograma, ante una primera convulsion o un patron nuevo de convulsiones. Si hay un antecedente claro de convulsiones por abstinencia, la crisis es generalizada, la exploracion no muestra focalidad y no se sospecha meningitis, puede no ser necesaria.' },
      { modalidad: 'Tomografia craneal en el delirium', hallazgos: 'Parte de la evaluacion para descartar otras causas de delirium, sea cual sea la etiologia aparente, sobre todo si hay traumatismo, focalidad o un calendario que no encaja.' },
      { modalidad: 'Puncion lumbar', hallazgos: 'Ante una convulsion de nueva aparicion o sospecha de meningitis, segun la valoracion neurologica.' },
      { modalidad: 'Electroencefalograma', hallazgos: 'En la primera convulsion o en un patron nuevo, o si se sospecha estado epileptico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La guia clasifica la abstinencia por <strong>gravedad</strong>, con la CIWA-Ar como ejemplo: <strong>leve</strong> (menos de 10: ansiedad o sudoracion, sin temblor), <strong>moderada</strong> (10 a 18: con temblor leve), <strong>grave</strong> (19 o mas: ansiedad intensa y temblor moderado o intenso, sin confusion ni alucinaciones) y <strong>complicada</strong>: convulsiones, delirium o alucinaciones de nueva aparicion. Pero la clasificacion que manda en las decisiones es la del <strong>riesgo</strong>: el paciente que todavia esta leve pero tiene antecedentes de delirium o convulsiones, o una PAWSS alta, se trata como si fuera grave.`,
    escalas: [
      { nombre: 'CIWA-Ar (calculadora disponible)', componentes: 'Nauseas y vomitos, temblor, sudoracion, ansiedad, agitacion, alteraciones tactiles, auditivas y visuales, y cefalea (0 a 7 cada una), y orientacion (0 a 4).', formula: 'Suma de 0 a 67.', interpretacion: 'Leve menor de 10, moderada de 10 a 18 y grave de 19 o mas. No es una herramienta diagnostica: otras enfermedades suben la puntuacion. En el paciente medico o quirurgico, una puntuacion baja se interpreta con confianza y una alta con cautela. No se usa en el delirium.' },
      { nombre: 'PAWSS (calculadora disponible)', componentes: 'Pregunta de entrada (consumo en los ultimos 30 dias o alcoholemia positiva) y diez puntos: intoxicacion reciente, tratamiento previo, abstinencias previas, lagunas, convulsiones y delirium previos, mezcla con sedantes u otras sustancias, alcoholemia mayor de 200 e hiperactividad autonomica.', formula: 'Un punto por item, de 0 a 10.', interpretacion: 'Con 4 puntos o mas, riesgo alto de abstinencia complicada. En su validacion prospectiva identifico a quienes llegaron a una CIWA-Ar de 15 o mas con una sensibilidad del 93.1% y una especificidad del 99.5%.' },
      { nombre: 'Ambito de tratamiento (calculadora disponible)', componentes: 'Gravedad actual, intoxicacion, antecedentes de abstinencia complicada, comorbilidad, apoyo y capacidad de seguimiento.', formula: 'Criterios de la guia para el alta a manejo ambulatorio desde urgencias.', interpretacion: 'La abstinencia leve, o moderada sin factores que la compliquen, puede manejarse de forma ambulatoria. La complicada (convulsion, delirium, alucinaciones nuevas) se maneja ingresada.' },
      { nombre: 'Tiamina y electrolitos (calculadora disponible)', componentes: 'Estado nutricional, ingreso en criticos, magnesio, fosforo y antecedentes.', formula: 'Pauta de reposicion segun la guia.', interpretacion: 'Tiamina a todos para prevenir la encefalopatia de Wernicke, preferiblemente intravenosa o intramuscular si hay mala nutricion o abstinencia complicada.' },
      { nombre: 'Calendario de la abstinencia', componentes: 'Sintomas iniciales, convulsiones, alucinaciones y delirium.', formula: 'Horas desde la ultima toma.', interpretacion: 'Sintomas de 6 a 24 h; convulsiones desde las 8 h, pico a las 24, hasta las 48; alucinaciones de 12 a 24 h; delirium de 72 a 96 h, con una duracion de 2 a 3 dias. Con poca abstinencia leve y bajo riesgo, pasadas 36 horas es improbable que aparezca un cuadro grave.' },
      { nombre: 'Factores de riesgo de abstinencia complicada', componentes: 'Delirium o convulsiones previos, muchas abstinencias previas, comorbilidad (sobre todo traumatismo craneal), edad mayor de 65, consumo intenso prolongado, convulsion en el episodio actual, hiperactividad autonomica marcada y dependencia de benzodiacepinas o barbituricos.', formula: 'Valoracion clinica acumulativa.', interpretacion: 'El riesgo aumenta con el numero de factores. Tambien cuentan el policonsumo, los sintomas con alcoholemia positiva y un trastorno psiquiatrico activo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer la abstinencia y estimar el riesgo',
      color: '#6b4a8c',
      definicion: 'Identificacion del sindrome de supresion y, sobre todo, del riesgo de que evolucione a una forma grave o complicada, que es lo que decide el tratamiento y el ambito.',
      fisiopatologia: 'El consumo cronico adapta el sistema nervioso a la presencia del alcohol. Al retirarlo queda un estado de hiperexcitabilidad que se traduce en hiperactividad autonomica, temblor, convulsiones y, en el extremo, delirium. Cada episodio aumenta la gravedad de los siguientes, por un fenomeno de encendido o kindling.',
      epidemiologia: 'Afecta a personas con dependencia fisica del alcohol y es frecuente en el paciente hospitalizado por otro motivo. Por eso la guia pide cribar a todos los que ingresan.',
      factores_riesgo: ['Delirium o convulsiones por abstinencia previos', 'Muchas abstinencias previas', 'Comorbilidad medica o quirurgica, sobre todo traumatismo craneal', 'Edad mayor de 65 a&#241;os', 'Consumo intenso y prolongado', 'Convulsion en el episodio actual', 'Hiperactividad autonomica marcada', 'Dependencia de benzodiacepinas o barbituricos'],
      clinica: 'Ansiedad, insomnio, temblor, sudoracion, nauseas, taquicardia e hipertension que empiezan entre 6 y 24 horas tras la ultima toma.',
      criterios_dx: 'Criterios del DSM-5. La CIWA-Ar y las demas escalas de gravedad NO deben usarse para diagnosticar, porque otras enfermedades elevan su puntuacion. Una alcoholemia positiva no confirma ni descarta la abstinencia.',
      laboratorio: 'Perfil metabolico, hepatico y hemograma; magnesio y fosforo; toxicos. Sin retrasar el tratamiento.',
      imagen: 'Segun el cuadro: neuroimagen si hay convulsion nueva o delirium de causa dudosa.',
      complementarios: 'PAWSS en el hospitalizado; CIWA-Ar para medir la gravedad actual.',
      dx_diferencial: 'Hipoglucemia, cetoacidosis diabetica, temblor esencial, abstinencia de otros sedantes y otras causas de delirium. Y los farmacos que enmascaran, como los betabloqueantes.',
      tx_medico: 'Primero, decidir si el paciente tiene riesgo de abstinencia grave o complicada, con una escala validada y los factores individuales. Cuando falta la historia (paciente traido de urgencias, de trauma o en criticos) o el riesgo es alto, la guia pide orientar las decisiones hacia un tratamiento mas agresivo, sean cuales sean los sintomas presentes.',
      tx_farmacologico: 'Si hay riesgo de abstinencia grave o complicada, tratamiento preventivo con benzodiacepinas aunque los sintomas todavia sean leves.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Delirium por supresion, convulsiones repetidas, necesidad de dosis muy altas o comorbilidad grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En la abstinencia moderada o grave, reevaluar cada 1 a 4 horas durante 24 horas; estabilizado (CIWA-Ar menor de 10 durante 24 horas), cada 4 a 8 horas.',
      seguimiento_ambulatorio: 'La abstinencia leve con bajo riesgo puede observarse hasta 36 horas, despues de las cuales es improbable un cuadro grave.',
      pronostico: 'La identificacion precoz y el tratamiento reducen la progresion a formas graves o complicadas.',
      algoritmo: ['Cribar el consumo en todo ingreso', 'Preguntar cuanto, cada cuanto y cuando fue la ultima toma', 'Estimar el riesgo: factores individuales y PAWSS', 'Medir la gravedad con CIWA-Ar, sin usarla para diagnosticar', 'Riesgo alto: tratar aunque los sintomas sean leves', 'No esperar al laboratorio para empezar']
    },
    {
      nombre: 'Benzodiacepinas: primera linea',
      color: '#8c2e2e',
      definicion: 'Tratamiento farmacologico de primera linea de la abstinencia, por su eficacia para reducir los sintomas y la incidencia de convulsiones y de delirium.',
      fisiopatologia: 'Actuan sobre el mismo sistema GABA en el que actuaba el alcohol, sustituyendolo y permitiendo una retirada controlada. Las de accion larga cubren de forma mas uniforme el periodo de riesgo y reducen los rebotes.',
      epidemiologia: 'Ninguna benzodiacepina ha demostrado ser mas eficaz que otra, pero las de accion larga se prefieren por los beneficios de su duracion.',
      factores_riesgo: ['Sedacion excesiva y depresion respiratoria', 'Hepatopatia, que acumula los metabolitos', 'Edad avanzada', 'Tratamiento con opioides', 'Prescripcion que se prolonga tras el episodio'],
      clinica: 'Abstinencia leve (CIWA-Ar menor de 10) con riesgo minimo: farmacos o solo cuidados de soporte. Moderada (10 a 18): tratamiento farmacologico. Grave (19 o mas): tratamiento farmacologico, y la guia recomienda la dosis de carga inicial.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Funcion hepatica: si hay hepatopatia significativa o no se dispone del resultado, usar una benzodiacepina con menor metabolismo hepatico.',
      imagen: 'No aplica.',
      complementarios: 'Escala validada para guiar las dosis y vigilancia de la sedacion.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'El tratamiento GUIADO POR SINTOMAS es el metodo de dosificacion preferido. La pauta fija descendente se reserva para cuando no se puede usar, y aun asi se vigilan los sintomas y se a&#241;aden dosis si hacen falta. Con benzodiacepinas de accion corta, una pauta fija con descenso gradual reduce los rebotes.',
      tx_farmacologico: 'Dosis de CARGA inicial (front loading) en la abstinencia grave, con diazepam o clordiazepoxido como agentes preferidos. Alternativas si hay contraindicacion: carbamazepina o gabapentina en la leve o moderada; fenobarbital en manos experimentadas. Coadyuvantes una vez dada una dosis adecuada de benzodiacepina: carbamazepina, gabapentina o valproico (no en hepatopatia ni en mujeres con posibilidad de embarazo). Agonistas alfa-2 y betabloqueantes solo como coadyuvantes para la hiperactividad autonomica persistente.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Necesidad de dosis muy altas, sedacion excesiva o necesidad de vigilancia estrecha.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si los sintomas no se controlan, primero aumentar la dosis. Si preocupa la sedacion o no se puede vigilar bien, reconsiderar el ambito, cambiar de farmaco o a&#241;adir un coadyuvante.',
      seguimiento_ambulatorio: 'La prescripcion de benzodiacepinas para la abstinencia se suspende al terminar el tratamiento.',
      pronostico: 'Lo que NO debe usarse: alcohol oral o intravenoso para prevenir o tratar la abstinencia; baclofeno, por falta de evidencia; valproico en monoterapia; y magnesio como profilaxis o tratamiento de la abstinencia en si.',
      algoritmo: ['Leve con riesgo minimo: soporte o farmaco', 'Moderada: tratamiento farmacologico', 'Grave: benzodiacepina con dosis de carga', 'Guiado por sintomas, mejor que pauta fija', 'Accion larga; menos metabolismo hepatico si hay hepatopatia', 'Coadyuvantes solo tras dosis adecuada', 'No alcohol, no baclofeno']
    },
    {
      nombre: 'Convulsiones por abstinencia',
      color: '#3d5a73',
      definicion: 'Convulsiones que aparecen tras la suspension o reduccion del consumo, generalmente en las primeras 48 horas, y que forman parte de la abstinencia complicada.',
      fisiopatologia: 'Traducen la hiperexcitabilidad cortical de la retirada brusca del alcohol. Pueden aparecer desde las 8 horas, con un pico hacia las 24, y no siempre van precedidas de otros sintomas llamativos.',
      epidemiologia: 'Una convulsion en el episodio actual es por si misma un factor de riesgo de abstinencia complicada y de delirium.',
      factores_riesgo: ['Convulsiones por abstinencia previas', 'Muchas abstinencias previas', 'Traumatismo craneal', 'Hipomagnesemia y otras alteraciones electroliticas', 'Betabloqueantes, que bajan el umbral convulsivo'],
      clinica: 'Crisis generalizada, en general unica o en salvas cortas, entre las 8 y las 48 horas de la ultima toma.',
      criterios_dx: 'Solo se atribuye a la abstinencia si hubo una reduccion o suspension clara del consumo en las 24 a 48 horas previas.',
      laboratorio: 'Glucemia, electrolitos, magnesio y toxicos.',
      imagen: 'Electroencefalograma y neuroimagen ante una primera convulsion o un patron nuevo. Si hay antecedente claro de convulsiones por abstinencia, crisis generalizada sin focalidad y sin sospecha de meningitis, pueden no ser necesarios.',
      complementarios: 'Exploracion neurologica en todo paciente que convulsiona.',
      dx_diferencial: 'Epilepsia, traumatismo craneal, meningitis, hipoglucemia, estado epileptico y abstinencia de otros sedantes.',
      tx_medico: 'Ingreso en un entorno con vigilancia estrecha, reevaluacion cada 12 horas durante 6 a 24 horas, y vigilancia de la aparicion de delirium y de la necesidad de sueros por los trastornos electroliticos.',
      tx_farmacologico: 'Tratar de inmediato con un farmaco que prevenga otra convulsion: benzodiacepina de accion rapida como lorazepam o diazepam, por via parenteral, mejor intravenosa que intramuscular. El fenobarbital es una opcion menos preferida. La fenitoina NO se usa salvo epilepsia de base. Agonistas alfa-2 y betabloqueantes no previenen ni tratan las convulsiones, y los betabloqueantes bajan el umbral.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Estado epileptico, convulsiones repetidas o progresion a delirium.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Magnesio si hay antecedente de convulsiones por abstinencia o hipomagnesemia.',
      seguimiento_ambulatorio: 'Un antecedente de abstinencia complicada en el ultimo a&#241;o desaconseja el manejo ambulatorio de menor intensidad.',
      pronostico: 'La convulsion avisa de un episodio de alto riesgo: obliga a vigilar la evolucion a delirium.',
      algoritmo: ['Confirmar la relacion temporal con la suspension', 'Exploracion neurologica', 'Primera convulsion o patron nuevo: EEG y neuroimagen', 'Benzodiacepina rapida parenteral de inmediato', 'No fenitoina sin epilepsia de base', 'Ingreso vigilado: reevaluar cada 12 h', 'Vigilar la evolucion a delirium']
    },
    {
      nombre: 'Delirium por supresion',
      color: '#7a4363',
      definicion: 'Forma mas grave de la abstinencia, con alteracion de la conciencia y la atencion, desorientacion y alucinaciones, que suele aparecer entre las 72 y las 96 horas.',
      fisiopatologia: 'Es el extremo de la hiperexcitabilidad de la retirada, con hiperactividad autonomica intensa. Puede durar unas horas, pero lo habitual son 2 a 3 dias.',
      epidemiologia: 'Suele requerir ingreso en una unidad de cuidados intensivos o intermedios.',
      factores_riesgo: ['Delirium previo', 'Convulsion en el episodio actual', 'Edad avanzada', 'Comorbilidad medica', 'Hiperactividad autonomica marcada', 'Tratamiento tardio o insuficiente'],
      clinica: 'Confusion, desorientacion, incapacidad para seguir instrucciones, alucinaciones, agitacion y signos autonomicos intensos.',
      criterios_dx: 'Criterios de delirium por abstinencia del DSM-5, tras descartar otras causas de delirium. Distinguirlo de la alucinosis alcoholica, en la que hay alucinaciones sin delirium claro.',
      laboratorio: 'Glucemia, electrolitos, funcion renal y hepatica, gasometria. Con dosis intravenosas altas y repetidas de lorazepam o diazepam, vigilar la hiponatremia y la acidosis metabolica.',
      imagen: 'Para descartar otras causas si el calendario o la exploracion no encajan.',
      complementarios: 'Seguimiento con CAM-ICU, RASS, Delirium Detection Score o MINDS. La CIWA-Ar NO se usa en el delirium porque depende de lo que cuenta el paciente.',
      dx_diferencial: 'Encefalopatia de Wernicke, encefalopatia hepatica, infeccion, traumatismo craneal, hipoglucemia y delirium por farmacos. Si el delirium dura mas de 72 horas, buscar delirium farmacologico o abstinencia de otro gabaergico como la gabapentina o el carisoprodol.',
      tx_medico: 'Observacion de enfermeria estrecha, uno a uno si hay agitacion. Acceso intravenoso inmediato. Habitacion tranquila e iluminada de forma uniforme y reorientacion frecuente. Contenciones solo para evitar lesiones.',
      tx_farmacologico: 'Benzodiacepinas de primera linea por via INTRAVENOSA, con objetivo de SOMNOLENCIA LIGERA, en pauta guiada por sintomas o con dosis de carga. Pueden hacer falta dosis muy altas, mayores que en cualquier otra poblacion: no dudar en darlas, vigilando la sedacion. La perfusion continua no es superior a los bolos intermitentes y es mas cara. Antipsicoticos solo como coadyuvantes, nunca en monoterapia. Fenobarbital como coadyuvante si no se controla. NO agonistas alfa-2 ni betabloqueantes para el delirium.',
      tx_intervencionista: 'En la abstinencia resistente en la unidad de criticos: propofol si el paciente ya requiere ventilacion mecanica, y dexmedetomidina como opcion.',
      criterios_uci: 'Practicamente todo delirium por supresion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Cuando el paciente esta tranquilo y colaborador con somnolencia ligera, pasar de la via intravenosa a la oral guiada por sintomas. Monitorizacion de constantes, oximetria y ritmo, con material de reanimacion a mano.',
      seguimiento_ambulatorio: 'Un delirium por abstinencia en el ultimo a&#241;o desaconseja el manejo ambulatorio de menor intensidad.',
      pronostico: 'Es la forma con mayor mortalidad de la abstinencia, y se reduce con el reconocimiento y el tratamiento adecuados.',
      algoritmo: ['Descartar otras causas de delirium', 'Ingreso en criticos con observacion estrecha', 'Benzodiacepina intravenosa: objetivo somnolencia ligera', 'No temer a las dosis altas, vigilando la sedacion', 'Seguir con CAM-ICU o RASS, no con CIWA-Ar', 'Resistente: fenobarbital, propofol si ventilado, dexmedetomidina', 'Mas de 72 h: buscar otra causa']
    },
    {
      nombre: 'Tiamina, electrolitos y nutricion',
      color: '#3f6b52',
      definicion: 'Medidas de soporte que acompa&#241;an a todo tratamiento de la abstinencia y que previenen complicaciones graves como la encefalopatia de Wernicke.',
      fisiopatologia: 'El consumo intenso favorece el deficit de tiamina por mala ingesta y porque el alcohol inhibe la enzima que forma el difosfato de tiamina y acelera su degradacion. El deficit puede producir la encefalopatia de Wernicke, cuyos signos se confunden con los de la propia abstinencia.',
      epidemiologia: 'La malnutricion, la hipomagnesemia y la hipofosfatemia son frecuentes en la persona con consumo intenso.',
      factores_riesgo: ['Malnutricion', 'Malabsorcion', 'Abstinencia complicada', 'Ingreso en la unidad de criticos', 'Vomitos persistentes'],
      clinica: 'La encefalopatia de Wernicke puede manifestarse con confusion, ataxia y alteraciones oculomotoras, y quedar enmascarada por la abstinencia.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Magnesio, fosforo y electrolitos.',
      imagen: 'No aplica.',
      complementarios: 'Valoracion nutricional.',
      dx_diferencial: 'Encefalopatia de Wernicke frente a delirium por supresion.',
      tx_medico: 'Corregir las deficiencias nutricionales detectadas.',
      tx_farmacologico: 'Tiamina para prevenir la encefalopatia de Wernicke: preferiblemente intravenosa o intramuscular si hay mala nutricion, malabsorcion o abstinencia complicada; dosis habitual de 100 mg al dia durante 3 a 5 dias; la oral tambien es posible. La glucosa y la tiamina pueden darse en cualquier orden o a la vez. En criticos, tiamina a todos, y siempre si hay signos que imiten o enmascaren la encefalopatia de Wernicke. Magnesio si hay hipomagnesemia, arritmias, otras alteraciones electroliticas o convulsiones previas por abstinencia. Fosforo si es menor de 1 mg/dL. Folato en el paciente critico.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar ingresos, perdidas y electrolitos segun la clinica.',
      seguimiento_ambulatorio: 'Mantener la nutricion adecuada.',
      pronostico: 'La tiamina es barata y segura, y la encefalopatia de Wernicke no tratada puede dejar secuelas permanentes.',
      algoritmo: ['Tiamina a todos', 'Intravenosa o intramuscular si mala nutricion o complicada', '100 mg al dia de 3 a 5 dias', 'Glucosa y tiamina en cualquier orden', 'Magnesio si esta bajo, arritmias o convulsiones previas', 'Fosforo si es menor de 1 mg/dL']
    },
    {
      nombre: 'Ambito de tratamiento y despues de la abstinencia',
      color: '#8a5a2e',
      definicion: 'Decision sobre donde tratar la abstinencia y oportunidad de iniciar el tratamiento del trastorno por consumo de alcohol.',
      fisiopatologia: 'No aplica.',
      epidemiologia: 'La abstinencia puede manejarse de forma segura en un entorno ambulatorio en los pacientes con pocos factores de riesgo o con riesgos mitigados.',
      factores_riesgo: ['Abstinencia grave o complicada', 'Intoxicacion actual', 'Antecedente de convulsiones o delirium', 'Comorbilidad medica o psiquiatrica significativa', 'Escaso apoyo o entorno inseguro', 'Riesgo de suicidio'],
      clinica: 'El paciente en urgencias o en la consulta que puede o no irse a casa.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Hemograma y perfil metabolico con enzimas hepaticas y magnesio en urgencias, sin retrasar el tratamiento.',
      imagen: 'No aplica.',
      complementarios: 'Valoracion del riesgo de suicidio en todos.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'Criterios para el alta desde urgencias a un manejo ambulatorio: abstinencia leve, o moderada sin otros factores que la compliquen; sin intoxicacion actual; sin antecedente de abstinencia complicada; sin comorbilidad medica o psiquiatrica significativa; y capacidad de acudir al seguimiento. Puede darse una prescripcion corta, de 1 a 2 dias, hasta la siguiente visita.',
      tx_farmacologico: 'En atencion primaria, la abstinencia leve puede tratarse con unas pocas dosis de benzodiacepina, mejor supervisadas por un cuidador. Si no se resuelve tras una dosis adecuada (por ejemplo, 80 mg de diazepam) o el paciente aparece sedado, derivar a urgencias. La grave se envia directamente a urgencias.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Delirium, convulsiones repetidas, comorbilidad grave o necesidad de dosis muy altas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En la cirugia programada, cribar el consumo y completar la abstinencia antes de operar. Ante una abstinencia tras cirugia o trauma, tratar de inmediato.',
      seguimiento_ambulatorio: 'Usar el periodo de abstinencia para iniciar el tratamiento del trastorno por consumo de alcohol, incluido el farmacologico cuando el estado cognitivo lo permita, con una derivacion activa. En atencion primaria, visitas al menos mensuales durante un a&#241;o.',
      pronostico: 'Terminar la abstinencia sin iniciar el tratamiento del trastorno de base deja la puerta abierta al siguiente episodio, mas grave por el efecto de encendido.',
      algoritmo: ['Valorar riesgo, gravedad, apoyo y entorno', 'Leve o moderada sin complicaciones: ambulatorio posible', 'Grave o complicada: ingreso', 'Riesgo de suicidio: entorno preparado para ello', 'Embarazada: considerar ingreso', 'Iniciar el tratamiento del trastorno por consumo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En el hospital la abstinencia suele aparecer en un paciente ingresado por otra cosa. La guia pide cribar a todos al ingreso y, ante la duda, inclinarse por tratar.',
    parametros: [
      'Cribar el consumo en todo paciente que ingresa, con AUDIT o AUDIT-PC, y estimar el riesgo con PAWSS en el paciente medicamente enfermo.',
      'Si falta la historia o el riesgo es alto, orientar las decisiones hacia un tratamiento mas agresivo, sean cuales sean los sintomas presentes.',
      'Medir la gravedad con una escala validada; las puntuaciones bajas se interpretan con confianza y las altas con cautela.',
      'Reevaluar cada 1 a 4 horas durante 24 horas en la abstinencia moderada o grave; cada 4 a 8 horas una vez estabilizado.',
      'Benzodiacepinas guiadas por sintomas; carga inicial en la grave.',
      'Tiamina a todos; magnesio y fosforo segun criterios.',
      'En criticos: profilaxis en quien se sospeche dependencia fisica, protocolo con RASS y via intravenosa.',
      'Antes del alta: iniciar el tratamiento del trastorno por consumo y derivar.'
    ],
    criterios_uci_general: 'Delirium por supresion, convulsiones repetidas o estado epileptico, abstinencia resistente o necesidad de dosis muy altas de benzodiacepinas.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Cribado universal al ingreso, tratamiento preventivo en el paciente de riesgo, abstinencia completada antes de la cirugia programada y tratamiento del trastorno por consumo de alcohol iniciado durante el propio ingreso.'
  }
};

export const compCites = {
  'Reconocer la abstinencia y estimar el riesgo': { criterios_dx: [1], factores_riesgo: [1], tx_medico: [1], complementarios: [1, 2] },
  'Benzodiacepinas: primera linea': { tx_medico: [1], tx_farmacologico: [1], pronostico: [1] },
  'Convulsiones por abstinencia': { criterios_dx: [1], imagen: [1], tx_farmacologico: [1] },
  'Delirium por supresion': { tx_farmacologico: [1], complementarios: [1, 3], tx_intervencionista: [1], dx_diferencial: [1] },
  'Tiamina, electrolitos y nutricion': { tx_farmacologico: [1], fisiopatologia: [1] },
  'Ambito de tratamiento y despues de la abstinencia': { tx_medico: [1], tx_farmacologico: [1], seguimiento_ambulatorio: [1] }
};

export const estigmasTitulo = 'Lo que hay que buscar en la cabecera';
export const estigmas = [
  { nombre: 'Temblor', descripcion: 'Separa la abstinencia leve (sin temblor) de la moderada (temblor leve) y la grave (temblor moderado o intenso). Ojo con el temblor esencial, que lo imita.' },
  { nombre: 'Sudoracion y taquicardia', descripcion: 'Hiperactividad autonomica. Cuando es marcada al llegar, es factor de riesgo de abstinencia complicada. Los betabloqueantes pueden enmascararla.' },
  { nombre: 'Alucinaciones', descripcion: 'Aparecen entre las 12 y las 24 horas. Si hay sensorio claro, es alucinosis; si hay confusion, delirium. La distincion cambia el tratamiento.' },
  { nombre: 'Desorientacion', descripcion: 'El apartado de orientacion de la CIWA-Ar. Cuando el paciente ya no puede seguir instrucciones, la CIWA-Ar deja de servir y hay que pasar a CAM-ICU o RASS.' },
  { nombre: 'Ataxia y alteraciones oculomotoras', descripcion: 'Signos que deben hacer pensar en la encefalopatia de Wernicke, que la abstinencia puede enmascarar. Tiamina sin esperar.' },
  { nombre: 'Aliento alcoholico con sintomas', descripcion: 'Sintomas de abstinencia con alcoholemia positiva: no descarta la abstinencia y es en si un factor de riesgo de complicacion.' }
];

export const biopsia = null;

export const escalaRefs = {
  'CIWA-Ar (calculadora disponible)': [1],
  'PAWSS (calculadora disponible)': [1, 2],
  'Ambito de tratamiento (calculadora disponible)': [1],
  'Tiamina y electrolitos (calculadora disponible)': [1],
  'Calendario de la abstinencia': [1],
  'Factores de riesgo de abstinencia complicada': [1]
};

export const escalaCalc = {
  'CIWA-Ar (calculadora disponible)': 'ciwa-ar',
  'PAWSS (calculadora disponible)': 'pawss',
  'Ambito de tratamiento (calculadora disponible)': 'ambito-abstinencia',
  'Tiamina y electrolitos (calculadora disponible)': 'tiamina-electrolitos'
};

export const compGroups = [
  { title: 'Antes de tratar', items: ['Reconocer la abstinencia y estimar el riesgo'] },
  { title: 'Tratar', items: ['Benzodiacepinas: primera linea', 'Tiamina, electrolitos y nutricion'] },
  { title: 'Las formas complicadas', items: ['Convulsiones por abstinencia', 'Delirium por supresion'] },
  { title: 'Donde y despues', items: ['Ambito de tratamiento y despues de la abstinencia'] }
];

export const complicacionesIntro = 'La primera ficha es la que la guia pone por delante de todo: estimar el riesgo antes de medir los sintomas, y no usar la escala de gravedad para diagnosticar. Las dos siguientes son el tratamiento de cualquier abstinencia: benzodiacepinas guiadas por sintomas y tiamina. Las dos que vienen despues son las formas complicadas, las convulsiones y el delirium, con sus propias reglas. Y la ultima es donde se trata y lo que no debe quedar sin hacer: empezar el tratamiento del trastorno por consumo.';

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
  root: { title: 'SUPRESION ALCOHOLICA', color: '#6b4a8c', target: 'definicion' },
  branches: [
    { title: 'Riesgo', sub: 'Antes que los sintomas', color: '#6b4a8c', target: 'complicaciones', leaves: [
      { title: 'PAWSS', sub: '4 o mas: riesgo alto', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'CIWA-Ar', sub: 'Mide, no diagnostica', color: '#6b4a8c', target: 'complicaciones' }
    ] },
    { title: 'Tratar', sub: 'Benzodiacepinas y tiamina', color: '#8c2e2e', target: 'complicaciones', leaves: [
      { title: 'Guiado por sintomas', sub: 'Carga si es grave', color: '#8c2e2e', target: 'complicaciones' },
      { title: 'Tiamina', sub: 'A todos', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicada', sub: 'Convulsion o delirium', color: '#7a4363', target: 'complicaciones', leaves: [
      { title: 'Convulsion', sub: 'Benzodiacepina rapida', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Delirium', sub: 'Criticos, somnolencia ligera', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 2], imagen: [1] };
export const clasificacionCite = [1];
export const seguimientoCite = [1];
export const figurasDefinicion = ['supresion-calendario'];
export const figurasClasificacion = ['supresion-gravedad', 'supresion-farmacos'];

export const figuras = {
  'supresion-calendario': {
    titulo: 'El calendario de la abstinencia',
    fuente: 'Guia de la American Society of Addiction Medicine de 2020 sobre el manejo de la abstinencia alcoholica (J Addict Med 2020;14(3S Suppl 1):1-72).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Horas tras la ultima toma</th><th>Que aparece</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">6 a 24</td><td>Sintomas iniciales: ansiedad, insomnio, sue&#241;os vividos, anorexia, nauseas, cefalea, temblor, sudoracion, taquicardia, hipertension, hiperreflexia</td></tr>
            <tr><td class="figure-org">Desde 8, pico a las 24, hasta 48</td><td><span class="figure-tag fail">Convulsiones</span> Pueden llegar sin otros sintomas llamativos</td></tr>
            <tr><td class="figure-org">12 a 24</td><td>Alucinaciones, que se resuelven en 24 a 48 horas si no aparecen otros signos de delirium</td></tr>
            <tr><td class="figure-org">72 a 96</td><td><span class="figure-tag fail">Delirium por supresion</span> Dura de unas horas a, lo habitual, 2 a 3 dias</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">No todos los pacientes recorren las etapas en orden, y en el <strong>anciano</strong> el calendario puede ser distinto; el consumo simultaneo de otros sedantes tambien lo modifica. El calendario sirve para saber <strong>cuanto queda de ventana de riesgo</strong>: en la abstinencia leve con bajo riesgo, pasadas <strong>36 horas</strong> es improbable que aparezca un cuadro grave. Y para descartar: una convulsion solo se atribuye a la abstinencia si hubo una suspension o reduccion clara del consumo en las <strong>24 a 48 horas</strong> previas.</div>`
  },
  'supresion-gravedad': {
    titulo: 'Gravedad, riesgo y lo que implica',
    fuente: 'Tabla de gravedad de la guia de la ASAM de 2020 y escala PAWSS (Maldonado JR, et al. Alcohol Alcohol 2015;50(5):509-518).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Categoria</th><th>CIWA-Ar</th><th>Cuadro</th><th>Conducta</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Leve</td><td>Menor de 10</td><td>Ansiedad, sudoracion o insomnio leves, sin temblor</td><td>Soporte o farmaco; ambulatorio si el riesgo es bajo</td></tr>
            <tr><td class="figure-org">Moderada</td><td>10 a 18</td><td>Ademas, temblor leve</td><td>Tratamiento farmacologico</td></tr>
            <tr><td class="figure-org">Grave</td><td>19 o mas</td><td>Ansiedad intensa y temblor moderado o intenso, sin confusion</td><td><span class="figure-tag fail">Carga inicial</span> de benzodiacepina</td></tr>
            <tr><td class="figure-org">Complicada</td><td>No aplica</td><td>Convulsion, delirium o alucinaciones nuevas</td><td><span class="figure-tag fail">Ingreso</span>, a menudo en criticos</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La CIWA-Ar <strong>no diagnostica</strong>: otras enfermedades suben la puntuacion, y en el paciente medico o quirurgico una puntuacion alta se interpreta con cautela. Tampoco sirve en el <strong>delirium</strong>, porque depende de lo que cuenta el paciente. Para el riesgo antes de los sintomas, la <strong>PAWSS</strong>: con <strong>4 puntos o mas</strong>, riesgo alto; en su validacion prospectiva identifico a quienes llegaron a una CIWA-Ar de 15 o mas con una sensibilidad del 93.1% y una especificidad del 99.5%.</div>`
  },
  'supresion-farmacos': {
    titulo: 'Farmacos: que si, que como coadyuvante y que no',
    fuente: 'Guia de la ASAM de 2020 sobre el manejo de la abstinencia alcoholica.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Farmaco</th><th>Lugar segun la guia</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Benzodiacepinas</td><td><span class="figure-tag fail">Primera linea</span> Guiadas por sintomas; carga con diazepam o clordiazepoxido en la grave; de accion larga preferidas</td></tr>
            <tr><td class="figure-org">Carbamazepina, gabapentina</td><td>Alternativas en la leve o moderada si hay contraindicacion; coadyuvantes</td></tr>
            <tr><td class="figure-org">Valproico</td><td>Solo coadyuvante; no en hepatopatia, mujeres con posibilidad de embarazo ni en monoterapia</td></tr>
            <tr><td class="figure-org">Fenobarbital</td><td>Alternativa si hay contraindicacion y coadyuvante, solo en manos experimentadas; parenteral solo en criticos</td></tr>
            <tr><td class="figure-org">Agonistas alfa-2, betabloqueantes</td><td><span class="figure-tag dys">Solo coadyuvantes</span> para la hiperactividad autonomica; no previenen convulsiones ni delirium</td></tr>
            <tr><td class="figure-org">Antipsicoticos</td><td>Coadyuvantes en el delirium o las alucinaciones no controladas; nunca en monoterapia</td></tr>
            <tr><td class="figure-org">Alcohol, baclofeno, magnesio como tratamiento</td><td><span class="figure-tag fail">No</span> para prevenir ni tratar la abstinencia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Antes de a&#241;adir cualquier coadyuvante, la guia pide asegurarse de que se ha dado una <strong>dosis adecuada de benzodiacepina</strong>; si los sintomas no se controlan, lo primero es <strong>subir la dosis</strong>. En el delirium pueden hacer falta dosis mucho mayores que en cualquier otra poblacion, y no hay que dudar en darlas vigilando la sedacion. Y la <strong>fenitoina</strong> no se usa para las convulsiones por abstinencia salvo que haya una epilepsia de base.</div>`
  }
};
