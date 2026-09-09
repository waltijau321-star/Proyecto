// topics/debilidad-adquirida-uci/content.js: Debilidad adquirida en la unidad de criticos.
// Cubre el item "Miopatia y neuropatia del paciente critico" del cluster Fallas organicas
// (bloque IV, Medicina Critica) del temario, y a&#241;ade las secuelas del superviviente, porque el
// item pierde casi todo su sentido si se corta en el momento del alta.
//
// DELIMITACION frente a `ela-miopatias`: alli esta la debilidad neuromuscular cronica y
// progresiva. Frente a `guillain-barre-miastenia`: alli esta la debilidad aguda que llega DESDE
// fuera. Aqui esta la que se ADQUIERE dentro del hospital, durante el ingreso en criticos.
//
// Guias verificadas en Bibliografia/ ([[feedback-verificar-edicion-guias]]): guia PADIS de 2018
// sobre dolor, agitacion, delirium, inmovilidad y sue&#241;o, y recomendaciones de 2016 sobre bloqueo
// neuromuscular sostenido. El resto son articulos y guias de sociedades que NO estan en la carpeta.
//
// Solo `diagnostico`, `clasificacion`, `complicaciones` y `seguimiento_intrahospitalario` van
// ANIDADOS dentro de `export const content = {...}`. `factores_riesgo` y `algoritmo` son ARRAY.
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash. Texto sin acentos.

export const meta = {
  id: 'debilidad-adquirida-uci',
  titulo: 'Debilidad Adquirida en la UCI',
  subtitulo: 'Modulo 72 · Medicina Interna',
  accent: '#6b2e6b'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const reconocerHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b2e6b;border-radius:8px;padding:5px 9px;background:#6b2e6b12;margin-bottom:6px;">
    <strong style="color:#6b2e6b;">Es la complicacion neurologica mas frecuente del paciente critico y la que menos se busca.</strong> <span style="color:var(--ink-dim);">Se atribuye al "estar debil por el ingreso", cuando en realidad es una entidad con nombre, con criterios y con prevencion.</span>
  </div>
  <div style="border:1.5px solid #6b2e6b;border-radius:8px;padding:6px 9px;background:#6b2e6b08;margin-bottom:6px;">
    <div style="font-weight:700;color:#6b2e6b;margin-bottom:3px;">COMO SE MIDE: LA SUMA DE FUERZA DEL MEDICAL RESEARCH COUNCIL</div>
    <div style="color:var(--ink-dim);line-height:1.7;">
      Se puntua de <strong style="color:var(--ink);">0 a 5</strong> la fuerza de <strong style="color:var(--ink);">SEIS grupos musculares</strong> en cada lado: abduccion del hombro, flexion del codo, extension de la mu&#241;eca, flexion de la cadera, extension de la rodilla y dorsiflexion del pie.<br>
      Doce mediciones, maximo <strong>60 puntos</strong>. Por debajo de <strong style="color:#8c3a34;">48</strong> se habla de debilidad adquirida, y por debajo de <strong style="color:#8c3a34;">36</strong>, de debilidad grave.<br>
      <span style="color:#8a6a1f;">Requisito imprescindible: el paciente tiene que estar <strong>DESPIERTO y COLABORADOR</strong>. En quien no obedece ordenes, la escala no es aplicable y hay que repetirla cuando lo este.</span>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Como es la debilidad.</strong> <strong style="color:var(--ink);">SIMETRICA</strong>, generalizada y de predominio <strong style="color:var(--ink);">PROXIMAL</strong>, con reflejos disminuidos o abolidos. Respeta caracteristicamente la musculatura <strong>FACIAL Y OCULAR</strong>, y ese detalle es util: si hay ptosis, oftalmoparesia o debilidad facial, hay que pensar en otra cosa.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que obliga a replantear el diagnostico.</strong> Debilidad <strong>ASIMETRICA</strong>, nivel sensitivo, afectacion de esfinteres, oftalmoparesia, debilidad facial marcada, progresion tras el alta de criticos, o un paciente que estaba bien y se debilita de golpe. Nada de eso es debilidad adquirida.
    </div>
  </div>
</div>`;

const tiposHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">Hay tres formas y en la practica la mayoria son MIXTAS.</strong> <span style="color:var(--ink-dim);">Separarlas tiene interes pronostico, porque la miopatia se recupera mejor y mas rapido que la neuropatia.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">MIOPATIA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La mas frecuente. Perdida de miosina y alteracion de la excitabilidad de la membrana muscular. Creatina cinasa normal o poco elevada. <strong style="color:#3f6b52;">Mejor pronostico</strong>: se recupera en semanas o pocos meses.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">NEUROPATIA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Degeneracion axonal distal, sensitivomotora. A&#241;ade alteracion SENSITIVA, que la miopatia no tiene. <strong style="color:#8c3a34;">Peor pronostico</strong>: la recuperacion axonal es lenta y puede dejar secuela permanente.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b2e6b22;border:1px solid #6b2e6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b2e6b;">MIXTA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Lo mas habitual en la practica real. Comparten los mismos factores de riesgo y los mismos mecanismos, de modo que suelen coexistir en el mismo paciente.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">El mecanismo comun.</strong> La inflamacion sistemica altera la microcirculacion del nervio y del musculo, produce disfuncion mitocondrial y activa la via de degradacion proteica: el musculo se consume a una velocidad llamativa, sobre todo en la primera semana. A eso se suman la INMOVILIDAD, que por si sola produce atrofia rapida, la hiperglucemia, los corticoides y los bloqueantes neuromusculares. Ninguno de esos cuatro es inevitable, y esa es toda la base de la prevencion.
  </div>
</div>`;

const prevenirHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">No hay tratamiento farmacologico. Lo unico que funciona es no producirla.</strong> <span style="color:var(--ink-dim);">Y todo lo que funciona consiste, en el fondo, en hacer MENOS: menos sedacion, menos inmovilidad, menos bloqueo, menos hiperglucemia.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">MOVILIZAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La <strong style="color:var(--ink);">MOVILIZACION PRECOZ</strong>, incluso en el paciente ventilado, es la medida con mas respaldo: mejora la situacion funcional al alta y acorta el delirium. Empieza el primer o segundo dia, no cuando el paciente ya esta extubado.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">DESPERTAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Sedacion <strong style="color:var(--ink);">LIGERA</strong> con objetivo definido e interrupcion diaria. Un paciente sedado no se mueve, no colabora, no se le puede explorar la fuerza y desarrolla delirium. La sedacion profunda innecesaria es el motor silencioso de todo el problema.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RETIRAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Bloqueantes neuromusculares solo con indicacion y el menor tiempo posible. Corticoides a la dosis minima necesaria. Evitar la <strong style="color:var(--ink);">HIPERGLUCEMIA</strong> mantenida, pero sin perseguir un control estricto, que aumento la mortalidad en un ensayo amplio.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #6b2e6b;border-radius:8px;background:#6b2e6b10;color:var(--ink-dim);">
    <strong style="color:#6b2e6b;">Y lo que viene despues, que casi nunca se organiza.</strong> El superviviente sale con un <strong>SINDROME POST-CUIDADOS INTENSIVOS</strong>: debilidad, deterioro cognitivo y sintomas de ansiedad, depresion y estres postraumatico, que pueden durar a&#241;os. Muchos no vuelven a su trabajo. El alta de criticos no es el final del problema sino el comienzo de otra fase, y la familia tambien lo sufre.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La debilidad adquirida en la unidad de criticos es una debilidad muscular <strong>simetrica y generalizada</strong> que aparece durante el ingreso y para la que no hay otra explicacion que la propia enfermedad critica y su tratamiento. Es la complicacion neurologica mas frecuente de estos pacientes y, sin embargo, la que menos se busca: se atribuye a que el paciente esta debil por haber estado ingresado, cuando en realidad es una entidad con nombre, con criterios diagnosticos y, sobre todo, con prevencion.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: reconocerla.</strong></p>
<p style="margin:0 0 12px;">Se mide con una escala de fuerza sencilla que no necesita ningun aparato pero si un paciente <strong>despierto y colaborador</strong>. Y hay un detalle de la exploracion que ahorra errores: esta debilidad respeta la musculatura facial y ocular, de modo que la ptosis o la oftalmoparesia apuntan a otra cosa.</p>
${figBlock('Figura 1', 'Reconocerla: la escala de fuerza y lo que no encaja', reconocerHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: neuropatia, miopatia o ambas.</strong></p>
<p style="margin:0 0 12px;">Las tres formas comparten mecanismo y factores de riesgo, y en la practica la mayoria son <strong>mixtas</strong>. La distincion tiene interes pronostico, porque la miopatia se recupera mejor y mas rapido que la neuropatia, cuya reparacion axonal es lenta y puede dejar secuela.</p>
${figBlock('Figura 2', 'Las tres formas y el mecanismo que comparten', tiposHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: prevenir, porque no hay tratamiento.</strong></p>
<p style="margin:0 0 12px;">No existe ningun farmaco que la trate. Lo unico que funciona es no producirla, y todo lo que funciona consiste en hacer <strong>menos</strong>: menos sedacion, menos inmovilidad, menos bloqueo neuromuscular y menos hiperglucemia. Y despues del alta empieza otra fase, el <strong>sindrome post-cuidados intensivos</strong>, que casi nunca se organiza.</p>
${figBlock('Figura 3', 'Lo unico que funciona: movilizar, despertar, retirar', prevenirHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No atribuir la debilidad a "estar flojo por el ingreso" sin explorarla. No intentar puntuar la fuerza en un paciente que no obedece ordenes, porque la escala no es aplicable. No dar por buena una debilidad <strong>asimetrica</strong>, con nivel sensitivo, con afectacion de esfinteres o con oftalmoparesia, porque eso no es debilidad adquirida. No olvidar las causas tratables que la imitan: hipofosfatemia, hipopotasemia, deficit de tiamina, farmacos y una miastenia o un Guillain-Barre no diagnosticados. No mantener la sedacion profunda por inercia. No prolongar el bloqueo neuromuscular mas de lo indicado. No perseguir un control glucemico <strong>estricto</strong>, que aumento la mortalidad. No esperar a que el paciente este extubado para empezar a movilizarlo. No atribuir un fracaso del destete solo al pulmon sin pensar en el <strong>diafragma</strong>. Y no dar el alta de criticos como si el problema hubiera terminado.</p>`;

export const bibliografia = [
  'Stevens RD, Marshall SA, Cornblath DR, et al. A framework for diagnoses of critical illness-associated weakness. Crit Care Med. 2009;37(10 Suppl):S299-S308.',
  'Fan E, Cheek F, Chlan L, et al. An official American Thoracic Society clinical practice guideline: the diagnosis of intensive care unit-acquired weakness in adults. Am J Respir Crit Care Med. 2014;190(12):1437-1446.',
  'Latronico N, Bolton CF. Critical illness polyneuropathy and myopathy: a major cause of muscle weakness and paralysis. Lancet Neurol. 2011;10(10):931-941.',
  'De Jonghe B, Sharshar T, Lefaucheur JP, et al. Paresis acquired in the intensive care unit: a prospective multicenter study. JAMA. 2002;288(22):2859-2867.',
  'Kress JP, Hall JB. ICU-acquired weakness and recovery from critical illness. N Engl J Med. 2014;370(17):1626-1635.',
  'Hermans G, Van den Berghe G. Clinical review: intensive care unit acquired weakness. Crit Care. 2015;19:274.',
  'Schweickert WD, Pohlman MC, Pohlman AS, et al. Early physical and occupational therapy in mechanically ventilated, critically ill patients: a randomised controlled trial. Lancet. 2009;373(9678):1874-1882.',
  'Devlin JW, Skrobik Y, Gelinas C, et al. Clinical practice guidelines for the prevention and management of pain, agitation and sedation, delirium, immobility, and sleep disruption in adult patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.',
  'Murray MJ, DeBlock H, Erstad B, et al. Clinical practice guidelines for sustained neuromuscular blockade in the adult critically ill patient. Crit Care Med. 2016;44(11):2079-2103.',
  'Papazian L, Forel JM, Gacouin A, et al. Neuromuscular blockers in early acute respiratory distress syndrome. N Engl J Med. 2010;363(12):1107-1116.',
  'National Heart, Lung, and Blood Institute PETAL Clinical Trials Network. Early neuromuscular blockade in the acute respiratory distress syndrome. N Engl J Med. 2019;380(21):1997-2008.',
  'NICE-SUGAR Study Investigators. Intensive versus conventional glucose control in critically ill patients. N Engl J Med. 2009;360(13):1283-1297.',
  'Dres M, Goligher EC, Heunks LMA, Brochard LJ. Critical illness-associated diaphragm weakness. Intensive Care Med. 2017;43(10):1441-1452.',
  'Goligher EC, Dres M, Fan E, et al. Mechanical ventilation-induced diaphragm atrophy strongly impacts clinical outcomes. Am J Respir Crit Care Med. 2018;197(2):204-213.',
  'Needham DM, Davidson J, Cohen H, et al. Improving long-term outcomes after discharge from intensive care unit: report from a stakeholders conference. Crit Care Med. 2012;40(2):502-509.',
  'Herridge MS, Tansey CM, Matte A, et al. Functional disability 5 years after acute respiratory distress syndrome. N Engl J Med. 2011;364(14):1293-1304.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Debilidad adquirida tipica',
      tituloB: 'Datos que NO encajan',
      compensada: 'Debilidad SIMETRICA, generalizada y de predominio PROXIMAL, que se hace evidente cuando el paciente despierta y se intenta movilizar o extubar. Los reflejos estan disminuidos o abolidos. Caracteristicamente RESPETA la musculatura facial y ocular, de modo que el paciente mueve bien la cara y los ojos aunque no pueda levantar los brazos. Puede haber alteracion sensitiva distal si hay componente neuropatico, aunque explorarla en un paciente que acaba de despertar es dificil. Y con mucha frecuencia el primer indicio no es la exploracion sino un FRACASO DEL DESTETE que no se explica por el pulmon.',
      descompensada: 'Datos que obligan a replantear el diagnostico y a buscar otra cosa: debilidad ASIMETRICA o focal, NIVEL SENSITIVO, afectacion de esfinteres, OFTALMOPARESIA o ptosis, debilidad facial marcada, fluctuacion de la fuerza a lo largo del dia, hiperreflexia o Babinski, y progresion de la debilidad DESPUES de salir de la unidad de criticos. Ninguno de esos hallazgos pertenece a la debilidad adquirida, y todos apuntan a entidades con tratamiento propio: sindrome de Guillain-Barre, mielopatia, miastenia, botulismo o una lesion del sistema nervioso central que ha pasado desapercibida.'
    },
    laboratorio: [
      { prueba: 'Fosforo, potasio, magnesio y calcio', utilidad: 'Lo PRIMERO ante cualquier debilidad en el paciente critico, porque son causas tratables en horas. La hipofosfatemia y la hipopotasemia producen debilidad grave y se corrigen reponiendo; buscarlas antes de encargar un electromiograma ahorra tiempo y explica muchos casos.' },
      { prueba: 'Creatina cinasa', utilidad: 'Normal o poco elevada en la debilidad adquirida. Una elevacion marcada obliga a pensar en otra cosa: rabdomiolisis, miopatia necrotizante o una miopatia inflamatoria, que tienen manejo propio.' },
      { prueba: 'Hormona tiroestimulante y cortisol', utilidad: 'El hipotiroidismo produce debilidad proximal, y la insuficiencia suprarrenal, debilidad con hipotension e hiponatremia. Ambos son tratables y ambos se pasan por alto en un paciente al que ya se le ha puesto una etiqueta.' },
      { prueba: 'Vitamina B12 y tiamina', utilidad: 'El deficit de tiamina es especialmente relevante en el paciente critico con nutricion insuficiente o consumo de alcohol, y se REPONE de forma empirica sin esperar al resultado, porque el coste de no hacerlo es una encefalopatia de Wernicke.' },
      { prueba: 'Revision estructurada de la medicacion', utilidad: 'No es una prueba pero rinde mas que muchas. Bloqueantes neuromusculares (y su acumulacion en la insuficiencia renal o hepatica), corticoides, aminoglucosidos, colistina, estatinas y sedantes de vida media larga.' },
      { prueba: 'Glucemia y su control previo', utilidad: 'La hiperglucemia mantenida es un factor de riesgo. Pero el control ESTRICTO no es la solucion: un ensayo amplio mostro mayor mortalidad con el objetivo estricto frente al convencional, de modo que la meta es evitar la hiperglucemia marcada, no normalizar a toda costa.' },
      { prueba: 'Estudio de sindrome de Guillain-Barre si el cuadro no encaja', utilidad: 'Puncion lumbar buscando disociacion albuminocitologica. Se plantea cuando hay arreflexia global desproporcionada, alteracion sensitiva prominente o una progresion que no encaja con el curso de la enfermedad critica.' },
      { prueba: 'Anticuerpos de miastenia', utilidad: 'Ante debilidad FLUCTUANTE con afectacion ocular o bulbar, que son precisamente los territorios que la debilidad adquirida respeta. Es uno de los diagnosticos que mas se retrasa en el paciente que no logra destetarse.' }
    ],
    no_invasivos: [
      { metodo: 'Suma de fuerza del Medical Research Council (calculadora disponible)', interpretacion: 'Puntua de 0 a 5 la fuerza de seis grupos musculares en cada lado, con un maximo de 60. Requiere un paciente despierto y colaborador.', cutoff: 'Por debajo de 48 puntos define debilidad adquirida; por debajo de 36, grave' },
      { metodo: 'Riesgo de debilidad adquirida (calculadora disponible)', interpretacion: 'Suma los factores modificables y no modificables presentes y se&#241;ala sobre cuales se puede actuar hoy mismo.', cutoff: 'Casi todos los factores mas importantes son modificables' },
      { metodo: 'Diferencial de la debilidad en el critico (calculadora disponible)', interpretacion: 'Cruza los datos de la exploracion con las banderas que no encajan y orienta hacia las causas tratables que imitan el cuadro.', cutoff: 'Oftalmoparesia, asimetria o nivel sensitivo: no es debilidad adquirida' },
      { metodo: 'Fuerza de prension manual', interpretacion: 'Medida con dinamometro, es rapida, objetiva y se correlaciona bien con la suma de fuerza global. Util para el seguimiento porque no depende de explorar doce grupos musculares.', cutoff: 'Complementa la escala de fuerza, no la sustituye' },
      { metodo: 'Ecografia diafragmatica', interpretacion: 'Mide el grosor del diafragma y su fraccion de engrosamiento durante la inspiracion. Detecta la atrofia inducida por la ventilacion mecanica, que aparece en pocos dias.', cutoff: 'Util ante un fracaso del destete que no se explica por el pulmon' },
      { metodo: 'Electromiograma y electroneurograma', interpretacion: 'Separan la neuropatia de la miopatia y descartan otras entidades. No son necesarios en el caso tipico, y se reservan para cuando el cuadro no encaja o no evoluciona como se espera.', cutoff: 'Su indicacion principal es descartar lo tratable, no confirmar lo esperado' }
    ],
    imagen: [
      { modalidad: 'Ecografia muscular', hallazgos: 'Mide el grosor del cuadriceps y su ecogenicidad, y permite seguir la perdida de masa muscular a lo largo del ingreso, que en la primera semana es sorprendentemente rapida. Es una tecnica sencilla, repetible a pie de cama y cada vez mas usada.' },
      { modalidad: 'Ecografia del diafragma', hallazgos: 'Grosor y fraccion de engrosamiento. La atrofia diafragmatica inducida por la ventilacion aparece en pocos dias y se asocia a mas dias de ventilacion y peor desenlace. Es la exploracion clave ante un destete que fracasa sin causa pulmonar clara.' },
      { modalidad: 'Resonancia craneal o medular', hallazgos: 'Cuando hay datos que no encajan: nivel sensitivo, afectacion de esfinteres, asimetria o hiperreflexia. Busca mielopatia, mielitis, compresion medular o una lesion central que haya pasado desapercibida durante la sedacion.' },
      { modalidad: 'Radiografia de torax en el destete', hallazgos: 'Valora la elevacion de un hemidiafragma, que sugiere paresia frenica, y descarta las causas pulmonares del fracaso del destete antes de atribuirlo a la debilidad muscular.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por el <strong>sustrato</strong>: polineuropatia del paciente critico, miopatia del paciente critico y la forma <strong>mixta</strong>, que es la mas frecuente en la practica. En paralelo, por la <strong>gravedad</strong> medida con la suma de fuerza, y por la <strong>afectacion del diafragma</strong>, que puede ir por libre respecto a la de los miembros y que es la que explica muchos fracasos del destete. Y despues del alta, por el <strong>sindrome post-cuidados intensivos</strong>, que a&#241;ade a la debilidad el deterioro cognitivo y las secuelas afectivas.`,
    escalas: [
      { nombre: 'Suma de fuerza del Medical Research Council (calculadora disponible)', componentes: 'Abduccion del hombro, flexion del codo, extension de la mu&#241;eca, flexion de la cadera, extension de la rodilla y dorsiflexion del pie, puntuados de 0 a 5 en cada lado.', formula: 'Doce mediciones, con un maximo de 60 puntos.', interpretacion: 'Por debajo de 48 define debilidad adquirida y por debajo de 36, debilidad grave. Su requisito es imprescindible y se olvida: el paciente tiene que estar DESPIERTO y ser capaz de obedecer ordenes. En quien no colabora la escala no es aplicable y hay que repetirla despues.' },
      { nombre: 'Riesgo de debilidad adquirida (calculadora disponible)', componentes: 'Sepsis, disfuncion multiorganica, dias de ventilacion, dias de inmovilidad, sedacion profunda, bloqueo neuromuscular, corticoides, hiperglucemia y edad.', formula: 'Acumulacion de factores, separando los modificables de los que no lo son.', interpretacion: 'Su utilidad no es predecir sino orientar la accion: la mayoria de los factores mas importantes son MODIFICABLES hoy mismo, y esa es toda la base de la prevencion, que es lo unico que ha demostrado funcionar.' },
      { nombre: 'Diferencial de la debilidad en el critico (calculadora disponible)', componentes: 'Simetria, territorio afectado, reflejos, presencia de nivel sensitivo, afectacion ocular o facial, curso temporal y alteraciones metabolicas.', formula: 'Combinacion de esos datos para separar la debilidad adquirida de las entidades que la imitan.', interpretacion: 'Su valor esta en las banderas: oftalmoparesia, asimetria, nivel sensitivo, afectacion de esfinteres o progresion tras salir de criticos NO son debilidad adquirida y obligan a buscar una causa con tratamiento propio.' },
      { nombre: 'Escalas de movilidad del paciente critico', componentes: 'Nivel de actividad alcanzado, desde el decubito pasivo hasta la deambulacion.', formula: 'Gradacion progresiva del nivel de movilizacion conseguido cada dia.', interpretacion: 'Sirven para fijar un objetivo diario concreto y para medir si el programa de movilizacion precoz se esta cumpliendo de verdad, que es donde suele fallar: se prescribe y no se hace.' },
      { nombre: 'Fraccion de engrosamiento diafragmatico', componentes: 'Grosor del diafragma al final de la espiracion y al final de la inspiracion, medidos por ecografia.', formula: 'Incremento porcentual del grosor durante la inspiracion.', interpretacion: 'Un valor bajo indica poco esfuerzo o debilidad diafragmatica y se asocia a fracaso del destete. Es la exploracion que da respuesta cuando el destete falla y el pulmon parece razonable.' },
      { nombre: 'Sindrome post-cuidados intensivos', componentes: 'Tres dominios: fisico (debilidad, disnea, deterioro funcional), cognitivo (memoria, atencion, funcion ejecutiva) y afectivo (ansiedad, depresion, estres postraumatico).', formula: 'Presencia de alteraciones nuevas o agravadas en cualquiera de los tres dominios tras el alta.', interpretacion: 'Puede durar a&#241;os y afecta tambien a la FAMILIA. El alta de criticos no es el final del problema sino el comienzo de otra fase, y el seguimiento estructurado existe en muy pocos sitios.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Debilidad adquirida: reconocerla',
      color: '#6b2e6b',
      definicion: 'Debilidad muscular simetrica y generalizada que aparece durante el ingreso en cuidados criticos y para la que no hay otra explicacion que la propia enfermedad critica y su tratamiento.',
      fisiopatologia: 'La inflamacion sistemica altera la microcirculacion del nervio y del musculo, produce disfuncion mitocondrial y activa las vias de degradacion proteica, con perdida acelerada de masa muscular que es maxima en la PRIMERA SEMANA. En el musculo hay ademas perdida selectiva de miosina y alteracion de la excitabilidad de la membrana, lo que explica que la debilidad sea desproporcionada a la atrofia visible. A eso se suma la inmovilidad, que por si sola produce atrofia rapida y perdida de fuerza. Y hay un dato que ordena todo el manejo: la musculatura FACIAL Y OCULAR se respeta, porque esos musculos tienen una composicion y un patron de activacion distintos, lo que convierte su afectacion en una bandera roja.',
      epidemiologia: 'Es la complicacion neurologica mas frecuente del paciente critico. Su frecuencia aumenta de forma marcada con los dias de ventilacion mecanica, con la sepsis y con la disfuncion multiorganica. Y esta claramente infradiagnosticada, porque en muchos casos se atribuye simplemente a que el paciente esta debil por haber estado ingresado.',
      factores_riesgo: ['Sepsis y respuesta inflamatoria sistemica', 'Disfuncion organica multiple', 'Dias de ventilacion mecanica', 'Inmovilidad prolongada', 'Sedacion profunda', 'Bloqueantes neuromusculares', 'Corticoides a dosis altas o prolongadas', 'Hiperglucemia mantenida', 'Nutricion insuficiente', 'Edad avanzada y fragilidad previa', 'Insuficiencia renal, que acumula farmacos', 'Estancia prolongada en criticos'],
      clinica: 'Debilidad SIMETRICA, generalizada y de predominio PROXIMAL, con reflejos disminuidos o abolidos, que RESPETA la musculatura facial y ocular. Se hace evidente al despertar al paciente o al intentar movilizarlo. Con frecuencia el primer indicio no es la exploracion sino un FRACASO DEL DESTETE que no se explica por el pulmon.',
      criterios_dx: 'Debilidad generalizada tras el inicio de la enfermedad critica, difusa y simetrica, con suma de fuerza por debajo de 48 en un paciente colaborador, y sin otra causa que lo explique. Ver la Figura 1 de Definicion.',
      laboratorio: 'FOSFORO, POTASIO, MAGNESIO y CALCIO como primer paso, porque son tratables en horas. Creatina cinasa, funcion tiroidea, cortisol, vitamina B12 y tiamina. Y una revision estructurada de la medicacion.',
      imagen: 'Ecografia muscular para seguir la perdida de masa. Ecografia del diafragma si hay fracaso del destete. Resonancia craneal o medular solo si hay datos que no encajan.',
      complementarios: 'SUMA DE FUERZA repetida cuando el paciente colabore. Fuerza de prension con dinamometro. Electromiograma solo si el cuadro no encaja o no evoluciona como se espera.',
      dx_diferencial: 'Alteraciones electroliticas, farmacos, sindrome de Guillain-Barre, miastenia, botulismo, mielopatia, lesion central no diagnosticada, miopatia inflamatoria y porfiria. La regla practica es que si algo NO encaja, hay que buscar, porque casi todas esas entidades tienen tratamiento propio.',
      tx_medico: 'No hay tratamiento farmacologico. El manejo es rehabilitacion precoz e intensiva, retirada de los factores modificables y correccion de las alteraciones metabolicas. Y explicar al paciente y a la familia lo que ocurre, porque la debilidad les asusta y nadie se lo cuenta.',
      tx_farmacologico: 'Ninguno ha demostrado eficacia. Lo que si hay que hacer es retirar o reducir lo que contribuye: sedantes, bloqueantes y corticoides innecesarios.',
      tx_intervencionista: 'No aplica. La estimulacion electrica neuromuscular se ha estudiado como complemento en el paciente que no puede colaborar, con resultados heterogeneos.',
      criterios_uci: 'No aplica: es una complicacion que ocurre DENTRO de criticos. Lo que si condiciona es el momento del alta y la necesidad de rehabilitacion intensiva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Repetir la valoracion de la fuerza a medida que el paciente colabora. Continuar la rehabilitacion tras el alta de criticos, momento en el que con frecuencia se interrumpe justo cuando mas podria rendir.',
      seguimiento_ambulatorio: 'Rehabilitacion prolongada y valoracion de las secuelas fisicas, cognitivas y afectivas. La recuperacion se mide en meses y a veces en a&#241;os.',
      pronostico: 'La miopatia se recupera mejor y mas rapido; la neuropatia puede dejar secuela permanente. La debilidad al alta se asocia de forma consistente a peor situacion funcional y a mayor mortalidad al a&#241;o.',
      algoritmo: ['Sospecharla en todo paciente critico que despierta debil', 'Comprobar que esta DESPIERTO y colabora antes de puntuar', 'Aplicar la suma de fuerza de los doce grupos musculares', 'Comprobar que la debilidad es SIMETRICA y proximal', 'Comprobar que respeta la cara y los ojos', 'Pedir fosforo, potasio, magnesio y calcio', 'Revisar la lista de farmacos', 'Buscar banderas que no encajen y estudiarlas', 'Iniciar rehabilitacion sin esperar a nada mas', 'Explicar al paciente y a la familia lo que esta pasando']
    },
    {
      nombre: 'Polineuropatia y miopatia del paciente critico',
      color: '#3d5a73',
      definicion: 'Las dos formas de sustrato de la debilidad adquirida, que comparten factores de riesgo, coexisten con frecuencia y difieren sobre todo en el pronostico.',
      fisiopatologia: 'En la POLINEUROPATIA hay degeneracion axonal distal de fibras motoras y sensitivas, atribuida a la alteracion de la microcirculacion endoneural, al edema y a la disfuncion mitocondrial del axon. Como la reparacion axonal depende de un crecimiento lento desde el cuerpo neuronal, su recuperacion es prolongada y puede quedar incompleta. En la MIOPATIA hay perdida selectiva de miosina, alteracion de la excitabilidad de la membrana muscular por cambios en los canales de sodio, y activacion de la proteolisis; como la fibra muscular conserva la capacidad de regenerarse, la recuperacion es mas rapida y mas completa. Esa diferencia biologica es la que explica el distinto pronostico y la unica razon practica para intentar separarlas.',
      epidemiologia: 'La forma MIXTA es la mas frecuente en la practica, y la miopatia pura parece mas comun que la neuropatia pura. En muchos casos la separacion no llega a hacerse porque exige un estudio neurofisiologico que no cambia el manejo inmediato.',
      factores_riesgo: ['Sepsis, que es el factor mas fuertemente asociado', 'Disfuncion multiorganica', 'Corticoides, mas asociados a la forma miopatica', 'Bloqueantes neuromusculares, sobre todo prolongados', 'Hiperglucemia', 'Inmovilidad', 'Ventilacion mecanica prolongada', 'Insuficiencia renal con acumulacion de farmacos', 'Desnutricion', 'Edad avanzada'],
      clinica: 'Ambas dan debilidad simetrica y proximal con hiporreflexia. Lo que las separa clinicamente es la ALTERACION SENSITIVA, presente en la neuropatia y ausente en la miopatia, aunque explorarla en el paciente critico es dificil y poco fiable. La creatina cinasa suele ser normal o poco elevada en las dos.',
      criterios_dx: 'La separacion definitiva es NEUROFISIOLOGICA, y en la practica solo se busca cuando el cuadro no encaja o cuando el pronostico va a cambiar una decision.',
      laboratorio: 'Creatina cinasa, iones completos con fosforo y magnesio, funcion renal y hepatica, glucemia y funcion tiroidea. Todo dirigido mas a descartar otras causas que a confirmar cual de las dos formas es.',
      imagen: 'Ecografia muscular, que muestra reduccion del grosor y aumento de la ecogenicidad por sustitucion fibroadiposa. Util para seguir la evolucion mas que para el diagnostico inicial.',
      complementarios: 'ELECTRONEUROGRAMA con amplitudes reducidas y velocidades conservadas en la neuropatia axonal, y ELECTROMIOGRAMA con potenciales de unidad motora peque&#241;os y breves en la miopatia. La estimulacion muscular directa ayuda a separarlas cuando el paciente no colabora.',
      dx_diferencial: 'Entre ambas, y frente a las entidades que imitan el cuadro. Un dato practico: si el estudio muestra bloqueos de conduccion o desmielinizacion, NO es una polineuropatia del paciente critico y hay que pensar en un sindrome de Guillain-Barre.',
      tx_medico: 'El mismo para las dos: rehabilitacion precoz, retirada de factores modificables y soporte. La distincion no cambia el tratamiento, solo el pronostico que se comunica.',
      tx_farmacologico: 'Ninguno especifico.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Valoracion seriada de la fuerza y de la funcion. Si el estudio neurofisiologico muestra un patron que no encaja, hay que replantear el diagnostico.',
      seguimiento_ambulatorio: 'Rehabilitacion prolongada. En la forma neuropatica conviene anticipar que la recuperacion sera mas lenta y puede quedar incompleta.',
      pronostico: 'Mejor en la miopatia, que se recupera en semanas o pocos meses. Peor en la neuropatia, cuya reparacion axonal es lenta y puede dejar secuela permanente, sobre todo distal.',
      algoritmo: ['Confirmar el patron de debilidad simetrica y proximal', 'Buscar alteracion SENSITIVA, que orienta a neuropatia', 'Pedir creatina cinasa, que suele ser normal o poco elevada', 'Descartar alteraciones electroliticas y farmacos', 'Plantear estudio neurofisiologico solo si el cuadro no encaja', 'Comprobar que no hay bloqueos ni desmielinizacion', 'Si los hay, pensar en sindrome de Guillain-Barre', 'Iniciar rehabilitacion sin esperar al estudio', 'Retirar los factores modificables', 'Comunicar un pronostico realista segun la forma predominante']
    },
    {
      nombre: 'Lo que imita la debilidad adquirida',
      color: '#8c3a34',
      definicion: 'Conjunto de entidades que producen debilidad en el paciente critico y que, a diferencia de la debilidad adquirida, tienen tratamiento propio.',
      fisiopatologia: 'El paciente critico reune todas las condiciones para que una debilidad de otra causa pase desapercibida: esta sedado, no se le explora bien, tiene multiples motivos plausibles para estar debil y ya se le ha puesto una etiqueta. Ese sesgo de cierre prematuro es lo que explica que se retrasen diagnosticos como la miastenia o el sindrome de Guillain-Barre. Las alteraciones electroliticas actuan por mecanismos concretos: la hipofosfatemia impide generar ATP, la hipopotasemia altera el potencial de membrana, y el deficit de tiamina compromete el metabolismo oxidativo. Todas se corrigen en horas.',
      epidemiologia: 'Las causas metabolicas y farmacologicas son, con diferencia, las mas frecuentes de este grupo, y son tambien las mas faciles de resolver. Las neuromusculares primarias son raras pero desproporcionadamente importantes porque su tratamiento es especifico y su retraso tiene consecuencias.',
      factores_riesgo: ['Sedacion que impide una exploracion adecuada', 'Etiqueta diagnostica puesta demasiado pronto', 'Insuficiencia renal o hepatica, que acumula farmacos', 'Nutricion insuficiente o consumo de alcohol', 'Reposicion inadecuada de fosforo y potasio', 'Aminoglucosidos, colistina y otros farmacos con efecto sobre la union', 'Bloqueantes neuromusculares acumulados', 'Antecedente de enfermedad neuromuscular no conocida', 'Cirugia o traumatismo raquideo', 'Ausencia de reevaluacion cuando el paciente no mejora'],
      clinica: 'Lo que delata a este grupo son las BANDERAS: debilidad ASIMETRICA, nivel sensitivo, afectacion de esfinteres, OFTALMOPARESIA o ptosis, debilidad facial marcada, fluctuacion a lo largo del dia, hiperreflexia o Babinski, y progresion DESPUES de salir de criticos. La debilidad adquirida no hace nada de eso.',
      criterios_dx: 'No hay criterios unicos: es un ejercicio de sospecha. La regla practica es que si algo no encaja, hay que estudiarlo. Ver la Figura 1 de Definicion.',
      laboratorio: 'FOSFORO, POTASIO, MAGNESIO y CALCIO primero. Creatina cinasa. Funcion tiroidea y cortisol. Tiamina y vitamina B12. Puncion lumbar si se sospecha sindrome de Guillain-Barre. Anticuerpos si se sospecha miastenia.',
      imagen: 'RESONANCIA MEDULAR urgente ante nivel sensitivo o afectacion de esfinteres, porque una compresion medular es una urgencia con ventana terapeutica. Resonancia craneal ante asimetria o signos de motoneurona superior.',
      complementarios: 'ELECTROMIOGRAMA Y ELECTRONEUROGRAMA, buscando bloqueos de conduccion (que apuntan a Guillain-Barre) o decremento en la estimulacion repetitiva (que apunta a miastenia). Ambos hallazgos cambian por completo el tratamiento.',
      dx_diferencial: 'Hipofosfatemia, hipopotasemia, hipermagnesemia, deficit de tiamina, farmacos, sindrome de Guillain-Barre, miastenia gravis, botulismo, mielopatia compresiva o isquemica, ictus de tronco, miopatia necrotizante y porfiria aguda.',
      tx_medico: 'El de cada causa, y en las metabolicas es inmediato: reponer. Retirada del farmaco implicado. Y, sobre todo, mantener la duda: reevaluar al paciente que no mejora en lugar de asumir que su recuperacion es simplemente lenta.',
      tx_farmacologico: 'Reposicion de fosforo, potasio y magnesio. Tiamina empirica. Inmunoglobulinas o recambio plasmatico en el sindrome de Guillain-Barre. Tratamiento especifico de la miastenia. Antitoxina en el botulismo.',
      tx_intervencionista: 'Descompresion quirurgica urgente en la compresion medular. Recambio plasmatico cuando este indicado.',
      criterios_uci: 'El paciente ya esta en criticos. Lo que cambia es la urgencia del estudio: una compresion medular y un sindrome de Guillain-Barre en progresion no esperan.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion sistematica del paciente que no evoluciona como se espera. Es la medida que mas diagnosticos rescata, y consiste simplemente en volver a explorar y volver a preguntarse si la etiqueta era correcta.',
      seguimiento_ambulatorio: 'Segun la causa identificada.',
      pronostico: 'Excelente en las causas metabolicas y farmacologicas si se corrigen pronto. En las neuromusculares primarias depende por completo de la precocidad del tratamiento especifico.',
      algoritmo: ['Pedir fosforo, potasio, magnesio y calcio en el primer momento', 'Revisar la lista completa de farmacos', 'Reponer tiamina de forma empirica si hay riesgo', 'Explorar la cara y los ojos: si estan afectados, no es lo esperado', 'Comprobar la simetria de la debilidad', 'Buscar nivel sensitivo y afectacion de esfinteres', 'Ante nivel sensitivo, resonancia MEDULAR urgente', 'Ante debilidad fluctuante ocular o bulbar, pensar en miastenia', 'Ante arreflexia y progresion rapida, estudiar Guillain-Barre', 'Reevaluar siempre al paciente que no mejora']
    },
    {
      nombre: 'Prevencion: lo unico que funciona',
      color: '#3f6b52',
      definicion: 'Conjunto de medidas dirigidas a evitar la aparicion de la debilidad adquirida, que constituyen la unica estrategia con eficacia demostrada porque no existe tratamiento farmacologico.',
      fisiopatologia: 'La perdida de masa y de fuerza muscular en el paciente critico es maxima en la PRIMERA SEMANA, lo que significa que la ventana de prevencion es estrecha y muy precoz. La inmovilidad produce por si sola atrofia rapida y perdida de fuerza desproporcionada, y el musculo inmovilizado ademas responde peor al aporte nutricional. La sedacion profunda multiplica el problema porque impide moverse, impide colaborar y favorece el delirium, que a su vez retrasa la movilizacion: es un circulo que se cierra sobre si mismo. De ahi que casi todas las intervenciones eficaces consistan en hacer MENOS de algo.',
      epidemiologia: 'Un ensayo aleatorizado de fisioterapia y terapia ocupacional precoces en pacientes ventilados mostro mejor situacion funcional al alta y menos dias de delirium. Los paquetes de medidas que combinan despertar, respiracion espontanea, sedacion ligera, prevencion del delirium y movilizacion precoz se asocian a mejores resultados.',
      factores_riesgo: ['Sedacion profunda mantenida por inercia', 'Ausencia de objetivo de sedacion definido', 'No hacer interrupcion diaria de la sedacion', 'Inmovilidad prolongada', 'Ausencia de fisioterapia en la unidad', 'Bloqueo neuromuscular prolongado o sin indicacion', 'Corticoides innecesarios o a dosis altas', 'Hiperglucemia mantenida', 'Control glucemico estricto, que aumenta la mortalidad', 'Nutricion insuficiente o excesiva', 'Cultura de unidad que considera la movilizacion opcional', 'Falta de personal para movilizar'],
      clinica: 'La prevencion no tiene clinica: se mide por proceso. Las preguntas utiles son concretas y se responden en el pase de visita: cual es el objetivo de sedacion de este paciente, se ha interrumpido hoy, se ha sentado o se ha levantado, sigue necesitando el bloqueo y sigue necesitando el corticoide.',
      criterios_dx: 'No aplica: es prevencion. Ver la Figura 3 de Definicion.',
      laboratorio: 'Control glucemico razonable, sin perseguir la normalizacion estricta. Vigilancia de iones y de la nutricion.',
      imagen: 'Ecografia muscular seriada para objetivar la perdida de masa, donde este disponible.',
      complementarios: 'Protocolo de sedacion con objetivo definido y evaluado en cada turno. Protocolo de movilizacion precoz con niveles de actividad. Y medicion de si ambos se cumplen, porque el fallo habitual no es no tenerlos sino no aplicarlos.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'MOVILIZACION PRECOZ, desde el primer o segundo dia e incluso en el paciente ventilado, que es la medida con mas respaldo. SEDACION LIGERA con objetivo definido e interrupcion diaria. Prevencion y tratamiento del delirium. Nutricion adecuada, ni escasa ni excesiva.',
      tx_farmacologico: 'Bloqueantes neuromusculares solo con indicacion clara y el menor tiempo posible. Corticoides a la dosis minima. Evitar la hiperglucemia mantenida, pero SIN control estricto, que aumento la mortalidad en un ensayo amplio. Ningun farmaco previene la debilidad.',
      tx_intervencionista: 'Estimulacion electrica neuromuscular como complemento en el paciente que no puede colaborar, con evidencia heterogenea.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Objetivo de movilizacion DIARIO y escrito, revisado en el pase de visita. Y continuidad de la rehabilitacion tras el alta de criticos, momento en el que con frecuencia se interrumpe justo cuando el paciente podria progresar mas.',
      seguimiento_ambulatorio: 'Programa de rehabilitacion tras el alta hospitalaria, que en la mayoria de los sitios no existe de forma estructurada.',
      pronostico: 'La prevencion es lo unico que ha demostrado modificar la incidencia y la gravedad. Una vez establecida la debilidad, solo queda rehabilitar y esperar.',
      algoritmo: ['Definir un objetivo de sedacion y evaluarlo cada turno', 'Hacer interrupcion diaria de la sedacion cuando proceda', 'Empezar a movilizar el primer o segundo dia', 'Movilizar tambien al paciente ventilado', 'Fijar un objetivo de movilidad diario y escrito', 'Revisar cada dia si el bloqueo neuromuscular sigue indicado', 'Reducir los corticoides a la dosis minima necesaria', 'Evitar la hiperglucemia sin perseguir un control estricto', 'Nutrir de forma adecuada, ni poco ni de mas', 'Continuar la rehabilitacion tras el alta de criticos']
    },
    {
      nombre: 'Debilidad diafragmatica y fracaso del destete',
      color: '#8a6a1f',
      definicion: 'Perdida de fuerza y de masa del diafragma asociada a la enfermedad critica y a la propia ventilacion mecanica, que es una causa frecuente y poco reconocida de fracaso del destete.',
      fisiopatologia: 'El diafragma es un musculo esqueletico y sufre los mismos mecanismos que el resto, pero a&#241;ade uno propio y paradojico: la ventilacion mecanica que lo sustituye tambien lo atrofia. Cuando el respirador hace todo el trabajo, el diafragma deja de contraerse y su grosor disminuye de forma medible en POCOS DIAS, mucho mas rapido que en los musculos de los miembros. Y el exceso contrario tambien da&#241;a: un esfuerzo inspiratorio excesivo produce lesion por sobrecarga. Esa doble vulnerabilidad, a la inactividad y al esfuerzo excesivo, es la base del concepto de ventilacion protectora del diafragma, que busca un nivel intermedio de esfuerzo.',
      epidemiologia: 'La debilidad diafragmatica es mas frecuente que la de los miembros y puede aparecer de forma independiente: hay pacientes con diafragma debil y fuerza periferica conservada, y al reves. Se asocia de forma consistente a mas dias de ventilacion, mas fracasos de extubacion y peor desenlace.',
      factores_riesgo: ['Ventilacion mecanica controlada, sin esfuerzo del paciente', 'Sedacion profunda', 'Bloqueo neuromuscular', 'Sepsis', 'Esfuerzo inspiratorio excesivo mantenido', 'Corticoides', 'Alteraciones electroliticas, sobre todo hipofosfatemia', 'Desnutricion', 'Cirugia toracica o abdominal alta', 'Lesion del nervio frenico tras cirugia cardiaca'],
      clinica: 'FRACASO DEL DESTETE sin causa pulmonar que lo explique: taquipnea, respiracion superficial, uso de musculatura accesoria y respiracion PARADOJICA, con el abdomen que se hunde en inspiracion. Puede haber ortopnea. Y una pista util: el paciente tolera bien el soporte y se agota cuando se le reduce.',
      criterios_dx: 'Ecografia diafragmatica con grosor reducido y fraccion de engrosamiento baja, en el contexto de un destete que fracasa. Ver la Figura 2 de Definicion para el mecanismo comun.',
      laboratorio: 'FOSFORO, magnesio, potasio y calcio, porque su correccion puede cambiar la situacion en horas. Gasometria. Funcion tiroidea. Y valoracion del estado nutricional.',
      imagen: 'ECOGRAFIA DIAFRAGMATICA: grosor al final de la espiracion y fraccion de engrosamiento durante la inspiracion. Radiografia de torax buscando elevacion de un hemidiafragma, que sugiere paresia frenica.',
      complementarios: 'Presion inspiratoria maxima y otras medidas de fuerza respiratoria. Prueba de respiracion espontanea estructurada. Y valoracion conjunta con la fuerza periferica, porque pueden ir por libre.',
      dx_diferencial: 'Causas pulmonares del fracaso del destete (edema, atelectasia, derrame, broncoespasmo), causas cardiacas (disfuncion ventricular desenmascarada al retirar la presion positiva), delirium y ansiedad, sobrecarga de volumen, y las entidades neuromusculares que imitan la debilidad adquirida.',
      tx_medico: 'Ventilacion que permita un esfuerzo inspiratorio MODERADO, ni nulo ni excesivo. Corregir las alteraciones electroliticas. Optimizar la nutricion. Tratar la causa pulmonar o cardiaca coexistente. Y entrenamiento de la musculatura inspiratoria, que ha mostrado resultados prometedores.',
      tx_farmacologico: 'Ninguno especifico. Reduccion de sedantes y de bloqueantes, y de los corticoides que no sean necesarios.',
      tx_intervencionista: 'Traqueostomia cuando el destete se prolonga, dentro de un plan realista. La estimulacion frenica es un campo en investigacion.',
      criterios_uci: 'El paciente ya esta en criticos. Lo relevante es reconocer la causa del fracaso del destete en lugar de repetir pruebas de respiracion espontanea que van a volver a fallar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ecografia diafragmatica seriada donde este disponible. Y una revision honesta de la estrategia ventilatoria: si el diafragma no trabaja nada, se atrofia.',
      seguimiento_ambulatorio: 'Rehabilitacion respiratoria en el paciente que sale con debilidad residual. La disnea de esfuerzo puede persistir mucho tiempo.',
      pronostico: 'La recuperacion es posible pero lenta. La debilidad diafragmatica se asocia de forma independiente a mas dias de ventilacion y a peor desenlace.',
      algoritmo: ['Ante un destete que falla, no atribuirlo solo al pulmon', 'Descartar causa pulmonar, cardiaca y sobrecarga de volumen', 'Buscar respiracion paradojica y uso de musculatura accesoria', 'Pedir FOSFORO, magnesio, potasio y calcio', 'Hacer ecografia diafragmatica: grosor y fraccion de engrosamiento', 'Valorar tambien la fuerza periferica, que puede ir por libre', 'Ajustar la ventilacion para permitir un esfuerzo moderado', 'Reducir sedantes, bloqueantes y corticoides innecesarios', 'Iniciar entrenamiento de la musculatura inspiratoria', 'Plantear traqueostomia si el destete se prolonga']
    },
    {
      nombre: 'Sindrome post-cuidados intensivos',
      color: '#4a3f7a',
      definicion: 'Conjunto de alteraciones fisicas, cognitivas y afectivas nuevas o agravadas que persisten tras el alta de la unidad de criticos, y que afectan tambien a la familia.',
      fisiopatologia: 'Los tres dominios tienen sustratos distintos. El FISICO es la debilidad adquirida y sus consecuencias sobre la marcha, la fuerza y la capacidad de esfuerzo, a lo que se suma la disfuncion pulmonar residual. El COGNITIVO se relaciona con la neuroinflamacion, la hipoperfusion cerebral y, de forma muy consistente, con la duracion del DELIRIUM durante el ingreso, que es el mejor predictor conocido del deterioro cognitivo posterior. Y el AFECTIVO se relaciona con la experiencia vivida: recuerdos delirantes, dolor, inmovilidad, imposibilidad de comunicarse y miedo, que dejan sintomas de ansiedad, depresion y estres postraumatico.',
      epidemiologia: 'Es muy frecuente entre los supervivientes y puede durar a&#241;os. En cohortes de pacientes que sobrevivieron a un sindrome de distres respiratorio, la limitacion funcional persistia a los cinco a&#241;os. Muchos supervivientes no vuelven a su trabajo. Y una proporcion relevante de los FAMILIARES presenta sintomas de ansiedad, depresion o estres postraumatico, lo que se conoce como sindrome post-cuidados intensivos familiar.',
      factores_riesgo: ['Duracion del delirium durante el ingreso', 'Sedacion profunda y prolongada', 'Debilidad adquirida', 'Ventilacion mecanica prolongada', 'Sepsis', 'Hipoglucemia e hipoxemia durante el ingreso', 'Enfermedad psiquiatrica previa', 'Recuerdos delirantes de la estancia', 'Ausencia de informacion y de acompa&#241;amiento a la familia', 'Falta de seguimiento estructurado tras el alta'],
      clinica: 'FISICO: debilidad, fatiga, disnea de esfuerzo y limitacion para las actividades cotidianas. COGNITIVO: fallos de memoria, de atencion y de funcion ejecutiva, que a veces se confunden con depresion. AFECTIVO: ansiedad, animo bajo, pesadillas, evitacion y reviviscencias. Muchos pacientes no relacionan estos sintomas con su ingreso y no los cuentan si no se les pregunta.',
      criterios_dx: 'Alteraciones nuevas o agravadas en cualquiera de los tres dominios tras el alta. No requiere ninguna prueba: requiere preguntar.',
      laboratorio: 'El dirigido a descartar causas corregibles de fatiga: anemia, hipotiroidismo, deficits nutricionales y alteraciones metabolicas.',
      imagen: 'Solo si hay hallazgos que lo justifiquen. Las pruebas de imagen no diagnostican este sindrome.',
      complementarios: 'VALORACION NEUROPSICOLOGICA en quien refiere fallos cognitivos. Cribado de ansiedad, depresion y estres postraumatico. Valoracion funcional y de la capacidad de esfuerzo.',
      dx_diferencial: 'Deterioro cognitivo previo no conocido, depresion mayor, anemia, hipotiroidismo, apnea del sue&#241;o, efectos residuales de farmacos y secuelas de la enfermedad de base.',
      tx_medico: 'REHABILITACION multidisciplinar: fisica, respiratoria y cognitiva. Apoyo psicologico. Y algo tan sencillo como explicar al paciente lo que le paso, porque muchos tienen lagunas y recuerdos delirantes que no saben interpretar. Los DIARIOS de la unidad, escritos por el personal y la familia durante el ingreso, ayudan a reconstruir esa historia y han mostrado reducir los sintomas postraumaticos.',
      tx_farmacologico: 'Tratamiento de la ansiedad y de la depresion cuando esten indicados. No hay ningun farmaco especifico para el sindrome.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica: es lo que viene despues.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Prevencion durante el ingreso: minimizar el delirium, sedacion ligera, movilizacion precoz, favorecer el sue&#241;o, orientar al paciente y facilitar la presencia de la familia. Y preparar el alta explicando lo que cabe esperar.',
      seguimiento_ambulatorio: 'Consulta de seguimiento tras el alta, que existe en muy pocos sitios y que los pacientes agradecen enormemente. Deberia incluir valoracion de los tres dominios y atencion a la familia.',
      pronostico: 'Mejora con el tiempo pero puede persistir a&#241;os. La rehabilitacion precoz y el seguimiento estructurado mejoran la trayectoria, y su ausencia deja al paciente solo ante un problema que no entiende.',
      algoritmo: ['Prevenir durante el ingreso: menos delirium, menos sedacion, mas movilidad', 'Favorecer el sue&#241;o y la orientacion', 'Facilitar la presencia y la informacion a la familia', 'Considerar un diario de la unidad', 'Explicar al paciente lo que le ha pasado antes del alta', 'Valorar los tres dominios: fisico, cognitivo y afectivo', 'Preguntar de forma expresa, porque no se cuenta solo', 'Descartar causas corregibles de fatiga', 'Derivar a rehabilitacion y a apoyo psicologico', 'Organizar una consulta de seguimiento tras el alta']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este tema tiene una particularidad que lo define: no existe tratamiento. Todo lo que funciona es prevencion, y toda la prevencion consiste en hacer menos de algo. Y el alta de criticos no cierra el problema: lo traslada.',
    parametros: ['Explorar la fuerza en cuanto el paciente colabore', 'No puntuar la escala en quien no obedece ordenes', 'Comprobar que la debilidad es SIMETRICA y respeta la cara', 'Pedir fosforo, potasio, magnesio y calcio ante toda debilidad', 'Revisar la lista de farmacos', 'Estudiar cualquier bandera que no encaje', 'Definir un objetivo de sedacion y evaluarlo cada turno', 'Movilizar desde el primer o segundo dia, tambien al ventilado', 'Revisar a diario si el bloqueo neuromuscular sigue indicado', 'Evitar la hiperglucemia sin perseguir un control estricto', 'Ante un destete que falla, pensar en el DIAFRAGMA', 'Continuar la rehabilitacion tras el alta de criticos'],
    criterios_uci_general: 'No aplica en el sentido habitual, porque es una complicacion que ocurre dentro de la unidad de criticos. Lo que si tiene relevancia es la urgencia de estudiar las entidades que la imitan: una compresion medular con nivel sensitivo y un sindrome de Guillain-Barre en progresion no esperan, y ambos pueden pasar desapercibidos en un paciente al que ya se le ha puesto una etiqueta.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: es toda la estrategia, porque no hay tratamiento. Sedacion ligera con objetivo definido e interrupcion diaria, MOVILIZACION PRECOZ desde el primer o segundo dia incluso en el paciente ventilado, prevencion y tratamiento del delirium, bloqueo neuromuscular solo con indicacion y el menor tiempo posible, corticoides a la dosis minima, control de la hiperglucemia sin perseguir un objetivo estricto, y nutricion adecuada. Secundaria: exploracion sistematica de la fuerza en cuanto el paciente colabore, busqueda de las causas tratables que imitan el cuadro, y ecografia diafragmatica ante un destete que fracasa sin causa pulmonar. Terciaria: continuidad de la rehabilitacion tras el alta de criticos, que es justo donde suele interrumpirse; valoracion de los tres dominios del sindrome post-cuidados intensivos; explicar al paciente lo que le ha pasado; y atencion a la FAMILIA, que tambien lo sufre.'
  }
};

export const compCites = {
  'Debilidad adquirida: reconocerla': [1, 2, 4, 5],
  'Polineuropatia y miopatia del paciente critico': [3, 6],
  'Lo que imita la debilidad adquirida': [2, 5],
  'Prevencion: lo unico que funciona': [7, 8, 9, 12],
  'Debilidad diafragmatica y fracaso del destete': [13, 14],
  'Sindrome post-cuidados intensivos': [15, 16]
};
export const estigmasTitulo = 'Signos que orientan y banderas que no encajan';
export const estigmas = [
  { s: 'Debilidad simetrica y proximal', p: 'El patron esperado', photo: null, desc: 'Con reflejos disminuidos o abolidos, y de instauracion durante el ingreso. Es lo que cabe esperar de una debilidad adquirida, y su presencia aislada no obliga a mas estudio si todo lo demas encaja.' },
  { s: 'Cara y ojos respetados', p: 'A favor del diagnostico', photo: null, desc: 'La debilidad adquirida caracteristicamente no afecta a la musculatura facial ni ocular. Que el paciente mueva bien la cara y los ojos aunque no pueda levantar los brazos es un dato que apoya el diagnostico.' },
  { s: 'Oftalmoparesia o ptosis', p: 'NO es debilidad adquirida', photo: null, desc: 'Obliga a pensar en miastenia, botulismo, sindrome de Miller Fisher o una lesion de tronco. Es la bandera que mas rapido reorienta el estudio, y se busca simplemente mirando al paciente.' },
  { s: 'Debilidad asimetrica', p: 'Buscar otra cosa', photo: null, desc: 'La debilidad adquirida es simetrica. La asimetria apunta a una lesion focal: ictus, mielopatia, plexopatia o neuropatia por compresion, esta ultima frecuente en el paciente que ha estado mucho tiempo inmovil.' },
  { s: 'Nivel sensitivo', p: 'Resonancia medular urgente', photo: null, desc: 'Junto con la afectacion de esfinteres, obliga a descartar una compresion medular, que es una urgencia con ventana terapeutica. No pertenece en absoluto al cuadro de debilidad adquirida.' },
  { s: 'Paciente que no obedece ordenes', p: 'La escala no es aplicable', photo: null, desc: 'La suma de fuerza exige colaboracion. Puntuar a un paciente sedado o confuso produce un numero sin valor. Lo correcto es anotar que no es valorable y repetir la exploracion cuando despierte.' },
  { s: 'Creatina cinasa muy elevada', p: 'Pensar en otra miopatia', photo: null, desc: 'En la debilidad adquirida suele ser normal o poco elevada. Una elevacion marcada apunta a rabdomiolisis, miopatia necrotizante o miopatia inflamatoria, que tienen manejo propio.' },
  { s: 'Fosforo bajo', p: 'Debilidad tratable en horas', photo: null, desc: 'Junto con la hipopotasemia, es una de las causas mas frecuentes y mas facilmente reversibles de debilidad en el paciente critico. Buscarla antes de encargar un electromiograma ahorra tiempo y explica muchos casos.' },
  { s: 'Respiracion paradojica', p: 'Diafragma debil', photo: null, desc: 'El abdomen se hunde durante la inspiracion en lugar de expandirse. Junto con el uso de musculatura accesoria y la taquipnea, sugiere debilidad diafragmatica como causa del fracaso del destete.' },
  { s: 'Destete que falla con pulmon aceptable', p: 'Mirar el diafragma', photo: null, desc: 'La debilidad diafragmatica es mas frecuente que la de los miembros y puede ir por libre. La ecografia mide el grosor y la fraccion de engrosamiento en minutos y da la respuesta.' },
  { s: 'Progresion tras salir de criticos', p: 'No encaja', photo: null, desc: 'La debilidad adquirida no progresa una vez resuelta la enfermedad critica: mejora despacio. Un empeoramiento tras el alta de la unidad obliga a replantear el diagnostico por completo.' },
  { s: 'Fallos de memoria tras el alta', p: 'Sindrome post-cuidados intensivos', photo: null, desc: 'El dominio cognitivo se relaciona sobre todo con la duracion del DELIRIUM durante el ingreso. Los pacientes no lo relacionan con su estancia y no lo cuentan si no se les pregunta de forma expresa.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Suma de fuerza del Medical Research Council (calculadora disponible)': [4, 2],
  'Riesgo de debilidad adquirida (calculadora disponible)': [6, 5],
  'Diferencial de la debilidad en el critico (calculadora disponible)': [1, 2],
  'Escalas de movilidad del paciente critico': [7, 8],
  'Fraccion de engrosamiento diafragmatico': [13, 14],
  'Sindrome post-cuidados intensivos': [15, 16]
};
export const escalaCalc = {
  'Suma de fuerza del Medical Research Council (calculadora disponible)': 'mrc-fuerza',
  'Riesgo de debilidad adquirida (calculadora disponible)': 'riesgo-debilidad-uci',
  'Diferencial de la debilidad en el critico (calculadora disponible)': 'diferencial-debilidad'
};
export const compGroups = [
  { name: 'Reconocer', items: ['Debilidad adquirida: reconocerla', 'Polineuropatia y miopatia del paciente critico'] },
  { name: 'Descartar lo tratable', items: ['Lo que imita la debilidad adquirida'] },
  { name: 'Prevenir', items: ['Prevencion: lo unico que funciona', 'Debilidad diafragmatica y fracaso del destete'] },
  { name: 'Despues del alta', items: ['Sindrome post-cuidados intensivos'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el reconocimiento: como se explora y como se mide, y cuales son las dos formas que hay detras, que importan sobre todo por el pronostico. La tercera es la mas importante en la practica, porque reune todo lo que imita a este cuadro y SI tiene tratamiento, empezando por unas alteraciones ionicas que se corrigen en horas. Las dos siguientes son la prevencion, que es lo unico que funciona, y el diafragma, que es la parte de este problema que explica muchos destetes fallidos y que casi nadie explora. Y la ultima es lo que viene despues del alta, que es donde el paciente se queda solo.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'PACIENTE CRITICO QUE DESPIERTA DEBIL', color: '#6b2e6b', target: 'definicion' },
  branches: [
    { title: 'RECONOCER', sub: 'Explorar y medir', color: '#6b2e6b', target: 'complicaciones', leaves: [
      { title: 'Suma de fuerza', sub: 'Menos de 48 sobre 60', color: '#6b2e6b', target: 'clasificacion' },
      { title: 'Debe estar despierto', sub: 'Si no, no es aplicable', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Simetrica y proximal', sub: 'Respeta cara y ojos', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Miopatia o neuropatia', sub: 'Cambia el pronostico', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'DESCARTAR LO TRATABLE', sub: 'Lo que si tiene tratamiento', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Fosforo y potasio', sub: 'Se corrigen en horas', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Revisar farmacos', sub: 'Bloqueantes y corticoides', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Oftalmoparesia', sub: 'No es debilidad adquirida', color: '#6b2e6b', target: 'complicaciones' },
      { title: 'Nivel sensitivo', sub: 'Resonancia medular urgente', color: '#3d5a73', target: 'diagnostico' }
    ] },
    { title: 'PREVENIR Y DESPUES', sub: 'No hay tratamiento', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Movilizar pronto', sub: 'Tambien al ventilado', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sedar poco', sub: 'Objetivo y pausa diaria', color: '#8a6a1f', target: 'seguimiento' },
      { title: 'Mirar el diafragma', sub: 'Si el destete falla', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Y despues del alta', sub: 'Fisico, cognitivo y afectivo', color: '#4a3f7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [5, 12], no_invasivos: [2, 4, 13], imagen: [14, 13] };
export const clasificacionCite = [1, 2, 4, 15];
export const seguimientoCite = [7, 8, 15];
