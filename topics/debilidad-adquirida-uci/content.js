// topics/debilidad-adquirida-uci/content.js: Debilidad adquirida en la unidad de criticos.
// Cubre el item "Miopatia y neuropatia del paciente critico" del cluster Fallas organicas
// (bloque IV, Medicina Critica) del temario, y añade las secuelas del superviviente, porque el
// item pierde casi todo su sentido si se corta en el momento del alta.
//
// DELIMITACION frente a `ela-miopatias`: alli esta la debilidad neuromuscular cronica y
// progresiva. Frente a `guillain-barre-miastenia`: alli esta la debilidad aguda que llega DESDE
// fuera. Aqui esta la que se ADQUIERE dentro del hospital, durante el ingreso en criticos.
//
// Guias verificadas en Bibliografia/ ([[feedback-verificar-edicion-guias]]): guia PADIS de 2018
// sobre dolor, agitacion, delirium, inmovilidad y sueño, y recomendaciones de 2016 sobre bloqueo
// neuromuscular sostenido. El resto son articulos y guias de sociedades que NO estan en la carpeta.
//
// Solo `diagnostico`, `clasificacion`, `complicaciones` y `seguimiento_intrahospitalario` van
// ANIDADOS dentro de `export const content = {...}`. `factores_riesgo` y `algoritmo` son ARRAY.
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash. Texto sin acentos.

export const meta = {
  id: 'debilidad-adquirida-uci',
  titulo: 'Debilidad Adquirida en la UCI',
  subtitulo: 'Módulo 72 · Medicina Interna',
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
    <strong style="color:#6b2e6b;">Es la complicación neurológica más frecuente del paciente crítico y la que menos se busca.</strong> <span style="color:var(--ink-dim);">Se atribuye al "estar débil por el ingreso", cuando en realidad es una entidad con nombre, con criterios y con prevención.</span>
  </div>
  <div style="border:1.5px solid #6b2e6b;border-radius:8px;padding:6px 9px;background:#6b2e6b08;margin-bottom:6px;">
    <div style="font-weight:700;color:#6b2e6b;margin-bottom:3px;">COMO SE MIDE: LA SUMA DE FUERZA DEL MEDICAL RESEARCH COUNCIL</div>
    <div style="color:var(--ink-dim);line-height:1.7;">
      Se puntúa de <strong style="color:var(--ink);">0 a 5</strong> la fuerza de <strong style="color:var(--ink);">SEIS grupos musculares</strong> en cada lado: abducción del hombro, flexión del codo, extensión de la muñeca, flexión de la cadera, extensión de la rodilla y dorsiflexión del pie.<br>
      Doce mediciones, máximo <strong>60 puntos</strong>. Por debajo de <strong style="color:#8c3a34;">48</strong> se habla de debilidad adquirida, y por debajo de <strong style="color:#8c3a34;">36</strong>, de debilidad grave.<br>
      <span style="color:#8a6a1f;">Requisito imprescindible: el paciente tiene que estar <strong>DESPIERTO y COLABORADOR</strong>. En quien no obedece órdenes, la escala no es aplicable y hay que repetirla cuando lo este.</span>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Como es la debilidad.</strong> <strong style="color:var(--ink);">SIMÉTRICA</strong>, generalizada y de predominio <strong style="color:var(--ink);">PROXIMAL</strong>, con reflejos disminuidos o abolidos. Respeta característicamente la musculatura <strong>FACIAL Y OCULAR</strong>, y ese detalle es útil: si hay ptosis, oftalmoparesia o debilidad facial, hay que pensar en otra cosa.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que obliga a replantear el diagnóstico.</strong> Debilidad <strong>ASIMÉTRICA</strong>, nivel sensitivo, afectación de esfínteres, oftalmoparesia, debilidad facial marcada, progresión tras el alta de críticos, o un paciente que estaba bien y se debilita de golpe. Nada de eso es debilidad adquirida.
    </div>
  </div>
</div>`;

const tiposHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">Hay tres formas y en la práctica la mayoría son MIXTAS.</strong> <span style="color:var(--ink-dim);">Separarlas tiene interés pronóstico, porque la miopatía se recupera mejor y más rápido que la neuropatía.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">MIOPATÍA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La más frecuente. Pérdida de miosina y alteración de la excitabilidad de la membrana muscular. Creatina cinasa normal o poco elevada. <strong style="color:#3f6b52;">Mejor pronóstico</strong>: se recupera en semanas o pocos meses.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">NEUROPATÍA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Degeneración axonal distal, sensitivomotora. Añade alteración SENSITIVA, que la miopatía no tiene. <strong style="color:#8c3a34;">Peor pronóstico</strong>: la recuperación axonal es lenta y puede dejar secuela permanente.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b2e6b22;border:1px solid #6b2e6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b2e6b;">MIXTA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Lo más habitual en la práctica real. Comparten los mismos factores de riesgo y los mismos mecanismos, de modo que suelen coexistir en el mismo paciente.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">El mecanismo común.</strong> La inflamación sistémica altera la microcirculación del nervio y del músculo, produce disfunción mitocondrial y activa la via de degradación proteica: el músculo se consume a una velocidad llamativa, sobre todo en la primera semana. A eso se suman la INMOVILIDAD, que por si sola produce atrofia rápida, la hiperglucemia, los corticoides y los bloqueantes neuromusculares. Ninguno de esos cuatro es inevitable, y esa es toda la base de la prevención.
  </div>
</div>`;

const prevenirHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">No hay tratamiento farmacológico. Lo único que funciona es no producirla.</strong> <span style="color:var(--ink-dim);">Y todo lo que funciona consiste, en el fondo, en hacer MENOS: menos sedación, menos inmovilidad, menos bloqueo, menos hiperglucemia.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">MOVILIZAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La <strong style="color:var(--ink);">MOVILIZACIÓN PRECOZ</strong>, incluso en el paciente ventilado, es la medida con más respaldo: mejora la situación funcional al alta y acorta el delirium. Empieza el primer o segundo dia, no cuando el paciente ya esta extubado.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">DESPERTAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Sedación <strong style="color:var(--ink);">LIGERA</strong> con objetivo definido e interrupción diaria. Un paciente sedado no se mueve, no colabora, no se le puede explorar la fuerza y desarrolla delirium. La sedación profunda innecesaria es el motor silencioso de todo el problema.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RETIRAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Bloqueantes neuromusculares solo con indicación y el menor tiempo posible. Corticoides a la dosis mínima necesaria. Evitar la <strong style="color:var(--ink);">HIPERGLUCEMIA</strong> mantenida, pero sin perseguir un control estricto, que aumento la mortalidad en un ensayo amplio.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #6b2e6b;border-radius:8px;background:#6b2e6b10;color:var(--ink-dim);">
    <strong style="color:#6b2e6b;">Y lo que viene después, que casi nunca se organiza.</strong> El superviviente sale con un <strong>SÍNDROME POST-CUIDADOS INTENSIVOS</strong>: debilidad, deterioro cognitivo y síntomas de ansiedad, depresión y estrés postraumático, que pueden durar años. Muchos no vuelven a su trabajo. El alta de críticos no es el final del problema sino el comienzo de otra fase, y la familia también lo sufre.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La debilidad adquirida en la unidad de críticos es una debilidad muscular <strong>simétrica y generalizada</strong> que aparece durante el ingreso y para la que no hay otra explicación que la propia enfermedad crítica y su tratamiento. Es la complicación neurológica más frecuente de estos pacientes y, sin embargo, la que menos se busca: se atribuye a que el paciente esta débil por haber estado ingresado, cuando en realidad es una entidad con nombre, con criterios diagnósticos y, sobre todo, con prevención.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: reconocerla.</strong></p>
<p style="margin:0 0 12px;">Se mide con una escala de fuerza sencilla que no necesita ningún aparato pero si un paciente <strong>despierto y colaborador</strong>. Y hay un detalle de la exploración que ahorra errores: esta debilidad respeta la musculatura facial y ocular, de modo que la ptosis o la oftalmoparesia apuntan a otra cosa.</p>
${figBlock('Figura 1', 'Reconocerla: la escala de fuerza y lo que no encaja', reconocerHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: neuropatía, miopatía o ambas.</strong></p>
<p style="margin:0 0 12px;">Las tres formas comparten mecanismo y factores de riesgo, y en la práctica la mayoría son <strong>mixtas</strong>. La distinción tiene interés pronóstico, porque la miopatía se recupera mejor y más rápido que la neuropatía, cuya reparación axonal es lenta y puede dejar secuela.</p>
${figBlock('Figura 2', 'Las tres formas y el mecanismo que comparten', tiposHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: prevenir, porque no hay tratamiento.</strong></p>
<p style="margin:0 0 12px;">No existe ningún fármaco que la trate. Lo único que funciona es no producirla, y todo lo que funciona consiste en hacer <strong>menos</strong>: menos sedación, menos inmovilidad, menos bloqueo neuromuscular y menos hiperglucemia. Y después del alta empieza otra fase, el <strong>síndrome post-cuidados intensivos</strong>, que casi nunca se organiza.</p>
${figBlock('Figura 3', 'Lo único que funciona: movilizar, despertar, retirar', prevenirHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No atribuir la debilidad a "estar flojo por el ingreso" sin explorarla. No intentar puntuar la fuerza en un paciente que no obedece órdenes, porque la escala no es aplicable. No dar por buena una debilidad <strong>asimétrica</strong>, con nivel sensitivo, con afectación de esfínteres o con oftalmoparesia, porque eso no es debilidad adquirida. No olvidar las causas tratables que la imitan: hipofosfatemia, hipopotasemia, déficit de tiamina, fármacos y una miastenia o un Guillain-Barré no diagnosticados. No mantener la sedación profunda por inercia. No prolongar el bloqueo neuromuscular más de lo indicado. No perseguir un control glucémico <strong>estricto</strong>, que aumento la mortalidad. No esperar a que el paciente este extubado para empezar a movilizarlo. No atribuir un fracaso del destete solo al pulmón sin pensar en el <strong>diafragma</strong>. Y no dar el alta de críticos como si el problema hubiera terminado.</p>`;

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
      tituloA: 'Debilidad adquirida típica',
      tituloB: 'Datos que NO encajan',
      compensada: 'Debilidad SIMÉTRICA, generalizada y de predominio PROXIMAL, que se hace evidente cuando el paciente despierta y se intenta movilizar o extubar. Los reflejos están disminuidos o abolidos. Característicamente RESPETA la musculatura facial y ocular, de modo que el paciente mueve bien la cara y los ojos aunque no pueda levantar los brazos. Puede haber alteración sensitiva distal si hay componente neuropático, aunque explorarla en un paciente que acaba de despertar es difícil. Y con mucha frecuencia el primer indicio no es la exploración sino un FRACASO DEL DESTETE que no se explica por el pulmón.',
      descompensada: 'Datos que obligan a replantear el diagnóstico y a buscar otra cosa: debilidad ASIMÉTRICA o focal, NIVEL SENSITIVO, afectación de esfínteres, OFTALMOPARESIA o ptosis, debilidad facial marcada, fluctuación de la fuerza a lo largo del dia, hiperreflexia o Babinski, y progresión de la debilidad DESPUÉS de salir de la unidad de críticos. Ninguno de esos hallazgos pertenece a la debilidad adquirida, y todos apuntan a entidades con tratamiento propio: síndrome de Guillain-Barré, mielopatía, miastenia, botulismo o una lesión del sistema nervioso central que ha pasado desapercibida.'
    },
    laboratorio: [
      { prueba: 'Fósforo, potasio, magnesio y calcio', utilidad: 'Lo PRIMERO ante cualquier debilidad en el paciente crítico, porque son causas tratables en horas. La hipofosfatemia y la hipopotasemia producen debilidad grave y se corrigen reponiendo; buscarlas antes de encargar un electromiograma ahorra tiempo y explica muchos casos.' },
      { prueba: 'Creatina cinasa', utilidad: 'Normal o poco elevada en la debilidad adquirida. Una elevación marcada obliga a pensar en otra cosa: rabdomiólisis, miopatía necrotizante o una miopatía inflamatoria, que tienen manejo propio.' },
      { prueba: 'Hormona tiroestimulante y cortisol', utilidad: 'El hipotiroidismo produce debilidad proximal, y la insuficiencia suprarrenal, debilidad con hipotensión e hiponatremia. Ambos son tratables y ambos se pasan por alto en un paciente al que ya se le ha puesto una etiqueta.' },
      { prueba: 'Vitamina B12 y tiamina', utilidad: 'El déficit de tiamina es especialmente relevante en el paciente crítico con nutrición insuficiente o consumo de alcohol, y se REPONE de forma empírica sin esperar al resultado, porque el coste de no hacerlo es una encefalopatía de Wernicke.' },
      { prueba: 'Revisión estructurada de la medicación', utilidad: 'No es una prueba pero rinde más que muchas. Bloqueantes neuromusculares (y su acumulación en la insuficiencia renal o hepática), corticoides, aminoglucósidos, colistina, estatinas y sedantes de vida media larga.' },
      { prueba: 'Glucemia y su control previo', utilidad: 'La hiperglucemia mantenida es un factor de riesgo. Pero el control ESTRICTO no es la solución: un ensayo amplio mostró mayor mortalidad con el objetivo estricto frente al convencional, de modo que la meta es evitar la hiperglucemia marcada, no normalizar a toda costa.' },
      { prueba: 'Estudio de síndrome de Guillain-Barré si el cuadro no encaja', utilidad: 'Punción lumbar buscando disociación albuminocitologica. Se plantea cuando hay arreflexia global desproporcionada, alteración sensitiva prominente o una progresión que no encaja con el curso de la enfermedad crítica.' },
      { prueba: 'Anticuerpos de miastenia', utilidad: 'Ante debilidad FLUCTUANTE con afectación ocular o bulbar, que son precisamente los territorios que la debilidad adquirida respeta. Es uno de los diagnósticos que más se retrasa en el paciente que no logra destetarse.' }
    ],
    no_invasivos: [
      { metodo: 'Suma de fuerza del Medical Research Council (calculadora disponible)', interpretacion: 'Puntúa de 0 a 5 la fuerza de seis grupos musculares en cada lado, con un máximo de 60. Requiere un paciente despierto y colaborador.', cutoff: 'Por debajo de 48 puntos define debilidad adquirida; por debajo de 36, grave' },
      { metodo: 'Riesgo de debilidad adquirida (calculadora disponible)', interpretacion: 'Suma los factores modificables y no modificables presentes y señala sobre cuales se puede actuar hoy mismo.', cutoff: 'Casi todos los factores más importantes son modificables' },
      { metodo: 'Diferencial de la debilidad en el crítico (calculadora disponible)', interpretacion: 'Cruza los datos de la exploración con las banderas que no encajan y orienta hacia las causas tratables que imitan el cuadro.', cutoff: 'Oftalmoparesia, asimetría o nivel sensitivo: no es debilidad adquirida' },
      { metodo: 'Fuerza de prensión manual', interpretacion: 'Medida con dinamometro, es rápida, objetiva y se correlaciona bien con la suma de fuerza global. Útil para el seguimiento porque no depende de explorar doce grupos musculares.', cutoff: 'Complementa la escala de fuerza, no la sustituye' },
      { metodo: 'Ecografía diafragmática', interpretacion: 'Mide el grosor del diafragma y su fracción de engrosamiento durante la inspiración. Detecta la atrofia inducida por la ventilación mecánica, que aparece en pocos días.', cutoff: 'Útil ante un fracaso del destete que no se explica por el pulmón' },
      { metodo: 'Electromiograma y electroneurograma', interpretacion: 'Separan la neuropatía de la miopatía y descartan otras entidades. No son necesarios en el caso típico, y se reservan para cuando el cuadro no encaja o no evoluciona como se espera.', cutoff: 'Su indicación principal es descartar lo tratable, no confirmar lo esperado' }
    ],
    imagen: [
      { modalidad: 'Ecografía muscular', hallazgos: 'Mide el grosor del cuádriceps y su ecogenicidad, y permite seguir la pérdida de masa muscular a lo largo del ingreso, que en la primera semana es sorprendentemente rápida. Es una técnica sencilla, repetible a pie de cama y cada vez más usada.' },
      { modalidad: 'Ecografía del diafragma', hallazgos: 'Grosor y fracción de engrosamiento. La atrofia diafragmática inducida por la ventilación aparece en pocos días y se asocia a más días de ventilación y peor desenlace. Es la exploración clave ante un destete que fracasa sin causa pulmonar clara.' },
      { modalidad: 'Resonancia craneal o medular', hallazgos: 'Cuando hay datos que no encajan: nivel sensitivo, afectación de esfínteres, asimetría o hiperreflexia. Busca mielopatía, mielitis, compresión medular o una lesión central que haya pasado desapercibida durante la sedación.' },
      { modalidad: 'Radiografía de tórax en el destete', hallazgos: 'Valora la elevación de un hemidiafragma, que sugiere paresia frénica, y descarta las causas pulmonares del fracaso del destete antes de atribuirlo a la debilidad muscular.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por el <strong>sustrato</strong>: polineuropatía del paciente crítico, miopatía del paciente crítico y la forma <strong>mixta</strong>, que es la más frecuente en la práctica. En paralelo, por la <strong>gravedad</strong> medida con la suma de fuerza, y por la <strong>afectación del diafragma</strong>, que puede ir por libre respecto a la de los miembros y que es la que explica muchos fracasos del destete. Y después del alta, por el <strong>síndrome post-cuidados intensivos</strong>, que añade a la debilidad el deterioro cognitivo y las secuelas afectivas.`,
    escalas: [
      { nombre: 'Suma de fuerza del Medical Research Council (calculadora disponible)', componentes: 'Abducción del hombro, flexión del codo, extensión de la muñeca, flexión de la cadera, extensión de la rodilla y dorsiflexión del pie, puntuados de 0 a 5 en cada lado.', formula: 'Doce mediciones, con un máximo de 60 puntos.', interpretacion: 'Por debajo de 48 define debilidad adquirida y por debajo de 36, debilidad grave. Su requisito es imprescindible y se olvida: el paciente tiene que estar DESPIERTO y ser capaz de obedecer órdenes. En quien no colabora la escala no es aplicable y hay que repetirla después.' },
      { nombre: 'Riesgo de debilidad adquirida (calculadora disponible)', componentes: 'Sepsis, disfunción multiorgánica, días de ventilación, días de inmovilidad, sedación profunda, bloqueo neuromuscular, corticoides, hiperglucemia y edad.', formula: 'Acumulación de factores, separando los modificables de los que no lo son.', interpretacion: 'Su utilidad no es predecir sino orientar la acción: la mayoría de los factores más importantes son MODIFICABLES hoy mismo, y esa es toda la base de la prevención, que es lo único que ha demostrado funcionar.' },
      { nombre: 'Diferencial de la debilidad en el crítico (calculadora disponible)', componentes: 'Simetría, territorio afectado, reflejos, presencia de nivel sensitivo, afectación ocular o facial, curso temporal y alteraciones metabólicas.', formula: 'Combinación de esos datos para separar la debilidad adquirida de las entidades que la imitan.', interpretacion: 'Su valor esta en las banderas: oftalmoparesia, asimetría, nivel sensitivo, afectación de esfínteres o progresión tras salir de críticos NO son debilidad adquirida y obligan a buscar una causa con tratamiento propio.' },
      { nombre: 'Escalas de movilidad del paciente crítico', componentes: 'Nivel de actividad alcanzado, desde el decúbito pasivo hasta la deambulación.', formula: 'Gradación progresiva del nivel de movilización conseguido cada dia.', interpretacion: 'Sirven para fijar un objetivo diario concreto y para medir si el programa de movilización precoz se esta cumpliendo de verdad, que es donde suele fallar: se prescribe y no se hace.' },
      { nombre: 'Fracción de engrosamiento diafragmático', componentes: 'Grosor del diafragma al final de la espiración y al final de la inspiración, medidos por ecografía.', formula: 'Incremento porcentual del grosor durante la inspiración.', interpretacion: 'Un valor bajo indica poco esfuerzo o debilidad diafragmática y se asocia a fracaso del destete. Es la exploración que da respuesta cuando el destete falla y el pulmón parece razonable.' },
      { nombre: 'Síndrome post-cuidados intensivos', componentes: 'Tres dominios: físico (debilidad, disnea, deterioro funcional), cognitivo (memoria, atención, función ejecutiva) y afectivo (ansiedad, depresión, estrés postraumático).', formula: 'Presencia de alteraciones nuevas o agravadas en cualquiera de los tres dominios tras el alta.', interpretacion: 'Puede durar años y afecta también a la FAMILIA. El alta de críticos no es el final del problema sino el comienzo de otra fase, y el seguimiento estructurado existe en muy pocos sitios.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Debilidad adquirida: reconocerla',
      color: '#6b2e6b',
      definicion: 'Debilidad muscular simétrica y generalizada que aparece durante el ingreso en cuidados críticos y para la que no hay otra explicación que la propia enfermedad crítica y su tratamiento.',
      fisiopatologia: 'La inflamación sistémica altera la microcirculación del nervio y del músculo, produce disfunción mitocondrial y activa las vías de degradación proteica, con pérdida acelerada de masa muscular que es máxima en la PRIMERA SEMANA. En el músculo hay además pérdida selectiva de miosina y alteración de la excitabilidad de la membrana, lo que explica que la debilidad sea desproporcionada a la atrofia visible. A eso se suma la inmovilidad, que por si sola produce atrofia rápida y pérdida de fuerza. Y hay un dato que ordena todo el manejo: la musculatura FACIAL Y OCULAR se respeta, porque esos músculos tienen una composición y un patrón de activación distintos, lo que convierte su afectación en una bandera roja.',
      epidemiologia: 'Es la complicación neurológica más frecuente del paciente crítico. Su frecuencia aumenta de forma marcada con los días de ventilación mecánica, con la sepsis y con la disfunción multiorgánica. Y esta claramente infradiagnosticada, porque en muchos casos se atribuye simplemente a que el paciente esta débil por haber estado ingresado.',
      factores_riesgo: ['Sepsis y respuesta inflamatoria sistémica', 'Disfunción orgánica múltiple', 'Días de ventilación mecánica', 'Inmovilidad prolongada', 'Sedación profunda', 'Bloqueantes neuromusculares', 'Corticoides a dosis altas o prolongadas', 'Hiperglucemia mantenida', 'Nutrición insuficiente', 'Edad avanzada y fragilidad previa', 'Insuficiencia renal, que acumula fármacos', 'Estancia prolongada en críticos'],
      clinica: 'Debilidad SIMÉTRICA, generalizada y de predominio PROXIMAL, con reflejos disminuidos o abolidos, que RESPETA la musculatura facial y ocular. Se hace evidente al despertar al paciente o al intentar movilizarlo. Con frecuencia el primer indicio no es la exploración sino un FRACASO DEL DESTETE que no se explica por el pulmón.',
      criterios_dx: 'Debilidad generalizada tras el inicio de la enfermedad crítica, difusa y simétrica, con suma de fuerza por debajo de 48 en un paciente colaborador, y sin otra causa que lo explique. Ver la Figura 1 de Definición.',
      laboratorio: 'FÓSFORO, POTASIO, MAGNESIO y CALCIO como primer paso, porque son tratables en horas. Creatina cinasa, función tiroidea, cortisol, vitamina B12 y tiamina. Y una revisión estructurada de la medicación.',
      imagen: 'Ecografía muscular para seguir la pérdida de masa. Ecografía del diafragma si hay fracaso del destete. Resonancia craneal o medular solo si hay datos que no encajan.',
      complementarios: 'SUMA DE FUERZA repetida cuando el paciente colabore. Fuerza de prensión con dinamometro. Electromiograma solo si el cuadro no encaja o no evoluciona como se espera.',
      dx_diferencial: 'Alteraciones electrolíticas, fármacos, síndrome de Guillain-Barré, miastenia, botulismo, mielopatía, lesión central no diagnosticada, miopatía inflamatoria y porfiria. La regla práctica es que si algo NO encaja, hay que buscar, porque casi todas esas entidades tienen tratamiento propio.',
      tx_medico: 'No hay tratamiento farmacológico. El manejo es rehabilitación precoz e intensiva, retirada de los factores modificables y corrección de las alteraciones metabólicas. Y explicar al paciente y a la familia lo que ocurre, porque la debilidad les asusta y nadie se lo cuenta.',
      tx_farmacologico: 'Ninguno ha demostrado eficacia. Lo que si hay que hacer es retirar o reducir lo que contribuye: sedantes, bloqueantes y corticoides innecesarios.',
      tx_intervencionista: 'No aplica. La estimulación eléctrica neuromuscular se ha estudiado como complemento en el paciente que no puede colaborar, con resultados heterogéneos.',
      criterios_uci: 'No aplica: es una complicación que ocurre DENTRO de críticos. Lo que si condiciona es el momento del alta y la necesidad de rehabilitación intensiva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Repetir la valoración de la fuerza a medida que el paciente colabora. Continuar la rehabilitación tras el alta de críticos, momento en el que con frecuencia se interrumpe justo cuando más podría rendir.',
      seguimiento_ambulatorio: 'Rehabilitación prolongada y valoración de las secuelas físicas, cognitivas y afectivas. La recuperación se mide en meses y a veces en años.',
      pronostico: 'La miopatía se recupera mejor y más rápido; la neuropatía puede dejar secuela permanente. La debilidad al alta se asocia de forma consistente a peor situación funcional y a mayor mortalidad al año.',
      algoritmo: ['Sospecharla en todo paciente crítico que despierta débil', 'Comprobar que esta DESPIERTO y colabora antes de puntuar', 'Aplicar la suma de fuerza de los doce grupos musculares', 'Comprobar que la debilidad es SIMÉTRICA y proximal', 'Comprobar que respeta la cara y los ojos', 'Pedir fósforo, potasio, magnesio y calcio', 'Revisar la lista de fármacos', 'Buscar banderas que no encajen y estudiarlas', 'Iniciar rehabilitación sin esperar a nada más', 'Explicar al paciente y a la familia lo que esta pasando']
    },
    {
      nombre: 'Polineuropatía y miopatía del paciente crítico',
      color: '#3d5a73',
      definicion: 'Las dos formas de sustrato de la debilidad adquirida, que comparten factores de riesgo, coexisten con frecuencia y difieren sobre todo en el pronóstico.',
      fisiopatologia: 'En la POLINEUROPATÍA hay degeneración axonal distal de fibras motoras y sensitivas, atribuida a la alteración de la microcirculación endoneural, al edema y a la disfunción mitocondrial del axon. Como la reparación axonal depende de un crecimiento lento desde el cuerpo neuronal, su recuperación es prolongada y puede quedar incompleta. En la MIOPATÍA hay pérdida selectiva de miosina, alteración de la excitabilidad de la membrana muscular por cambios en los canales de sodio, y activación de la proteólisis; como la fibra muscular conserva la capacidad de regenerarse, la recuperación es más rápida y más completa. Esa diferencia biológica es la que explica el distinto pronóstico y la única razón práctica para intentar separarlas.',
      epidemiologia: 'La forma MIXTA es la más frecuente en la práctica, y la miopatía pura parece más común que la neuropatía pura. En muchos casos la separación no llega a hacerse porque exige un estudio neurofisiologico que no cambia el manejo inmediato.',
      factores_riesgo: ['Sepsis, que es el factor más fuertemente asociado', 'Disfunción multiorgánica', 'Corticoides, más asociados a la forma miopática', 'Bloqueantes neuromusculares, sobre todo prolongados', 'Hiperglucemia', 'Inmovilidad', 'Ventilación mecánica prolongada', 'Insuficiencia renal con acumulación de fármacos', 'Desnutricion', 'Edad avanzada'],
      clinica: 'Ambas dan debilidad simétrica y proximal con hiporreflexia. Lo que las separa clínicamente es la ALTERACIÓN SENSITIVA, presente en la neuropatía y ausente en la miopatía, aunque explorarla en el paciente crítico es difícil y poco fiable. La creatina cinasa suele ser normal o poco elevada en las dos.',
      criterios_dx: 'La separación definitiva es NEUROFISIOLOGICA, y en la práctica solo se busca cuando el cuadro no encaja o cuando el pronóstico va a cambiar una decisión.',
      laboratorio: 'Creatina cinasa, iones completos con fósforo y magnesio, función renal y hepática, glucemia y función tiroidea. Todo dirigido más a descartar otras causas que a confirmar cual de las dos formas es.',
      imagen: 'Ecografía muscular, que muestra reducción del grosor y aumento de la ecogenicidad por sustitución fibroadiposa. Útil para seguir la evolución más que para el diagnóstico inicial.',
      complementarios: 'ELECTRONEUROGRAMA con amplitudes reducidas y velocidades conservadas en la neuropatía axonal, y ELECTROMIOGRAMA con potenciales de unidad motora pequeños y breves en la miopatía. La estimulación muscular directa ayuda a separarlas cuando el paciente no colabora.',
      dx_diferencial: 'Entre ambas, y frente a las entidades que imitan el cuadro. Un dato practico: si el estudio muestra bloqueos de conducción o desmielinización, NO es una polineuropatía del paciente crítico y hay que pensar en un síndrome de Guillain-Barré.',
      tx_medico: 'El mismo para las dos: rehabilitación precoz, retirada de factores modificables y soporte. La distinción no cambia el tratamiento, solo el pronóstico que se comunica.',
      tx_farmacologico: 'Ninguno específico.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Valoración seriada de la fuerza y de la función. Si el estudio neurofisiologico muestra un patrón que no encaja, hay que replantear el diagnóstico.',
      seguimiento_ambulatorio: 'Rehabilitación prolongada. En la forma neuropática conviene anticipar que la recuperación será más lenta y puede quedar incompleta.',
      pronostico: 'Mejor en la miopatía, que se recupera en semanas o pocos meses. Peor en la neuropatía, cuya reparación axonal es lenta y puede dejar secuela permanente, sobre todo distal.',
      algoritmo: ['Confirmar el patrón de debilidad simétrica y proximal', 'Buscar alteración SENSITIVA, que orienta a neuropatía', 'Pedir creatina cinasa, que suele ser normal o poco elevada', 'Descartar alteraciones electrolíticas y fármacos', 'Plantear estudio neurofisiologico solo si el cuadro no encaja', 'Comprobar que no hay bloqueos ni desmielinización', 'Si los hay, pensar en síndrome de Guillain-Barré', 'Iniciar rehabilitación sin esperar al estudio', 'Retirar los factores modificables', 'Comunicar un pronóstico realista según la forma predominante']
    },
    {
      nombre: 'Lo que imita la debilidad adquirida',
      color: '#8c3a34',
      definicion: 'Conjunto de entidades que producen debilidad en el paciente crítico y que, a diferencia de la debilidad adquirida, tienen tratamiento propio.',
      fisiopatologia: 'El paciente crítico reúne todas las condiciones para que una debilidad de otra causa pase desapercibida: esta sedado, no se le explora bien, tiene múltiples motivos plausibles para estar débil y ya se le ha puesto una etiqueta. Ese sesgo de cierre prematuro es lo que explica que se retrasen diagnósticos como la miastenia o el síndrome de Guillain-Barré. Las alteraciones electrolíticas actuan por mecanismos concretos: la hipofosfatemia impide generar ATP, la hipopotasemia altera el potencial de membrana, y el déficit de tiamina compromete el metabolismo oxidativo. Todas se corrigen en horas.',
      epidemiologia: 'Las causas metabólicas y farmacológicas son, con diferencia, las más frecuentes de este grupo, y son también las más fáciles de resolver. Las neuromusculares primarias son raras pero desproporcionadamente importantes porque su tratamiento es específico y su retraso tiene consecuencias.',
      factores_riesgo: ['Sedación que impide una exploración adecuada', 'Etiqueta diagnóstica puesta demasiado pronto', 'Insuficiencia renal o hepática, que acumula fármacos', 'Nutrición insuficiente o consumo de alcohol', 'Reposición inadecuada de fósforo y potasio', 'Aminoglucósidos, colistina y otros fármacos con efecto sobre la unión', 'Bloqueantes neuromusculares acumulados', 'Antecedente de enfermedad neuromuscular no conocida', 'Cirugía o traumatismo raquídeo', 'Ausencia de reevaluación cuando el paciente no mejora'],
      clinica: 'Lo que delata a este grupo son las BANDERAS: debilidad ASIMÉTRICA, nivel sensitivo, afectación de esfínteres, OFTALMOPARESIA o ptosis, debilidad facial marcada, fluctuación a lo largo del dia, hiperreflexia o Babinski, y progresión DESPUÉS de salir de críticos. La debilidad adquirida no hace nada de eso.',
      criterios_dx: 'No hay criterios únicos: es un ejercicio de sospecha. La regla práctica es que si algo no encaja, hay que estudiarlo. Ver la Figura 1 de Definición.',
      laboratorio: 'FÓSFORO, POTASIO, MAGNESIO y CALCIO primero. Creatina cinasa. Función tiroidea y cortisol. Tiamina y vitamina B12. Punción lumbar si se sospecha síndrome de Guillain-Barré. Anticuerpos si se sospecha miastenia.',
      imagen: 'RESONANCIA MEDULAR urgente ante nivel sensitivo o afectación de esfínteres, porque una compresión medular es una urgencia con ventana terapéutica. Resonancia craneal ante asimetría o signos de motoneurona superior.',
      complementarios: 'ELECTROMIOGRAMA Y ELECTRONEUROGRAMA, buscando bloqueos de conducción (que apuntan a Guillain-Barré) o decremento en la estimulación repetitiva (que apunta a miastenia). Ambos hallazgos cambian por completo el tratamiento.',
      dx_diferencial: 'Hipofosfatemia, hipopotasemia, hipermagnesemia, déficit de tiamina, fármacos, síndrome de Guillain-Barré, miastenia gravis, botulismo, mielopatía compresiva o isquémica, ictus de tronco, miopatía necrotizante y porfiria aguda.',
      tx_medico: 'El de cada causa, y en las metabólicas es inmediato: reponer. Retirada del fármaco implicado. Y, sobre todo, mantener la duda: reevaluar al paciente que no mejora en lugar de asumir que su recuperación es simplemente lenta.',
      tx_farmacologico: 'Reposición de fósforo, potasio y magnesio. Tiamina empírica. Inmunoglobulinas o recambio plasmático en el síndrome de Guillain-Barré. Tratamiento específico de la miastenia. Antitoxina en el botulismo.',
      tx_intervencionista: 'Descompresión quirúrgica urgente en la compresión medular. Recambio plasmático cuando este indicado.',
      criterios_uci: 'El paciente ya esta en críticos. Lo que cambia es la urgencia del estudio: una compresión medular y un síndrome de Guillain-Barré en progresión no esperan.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación sistemática del paciente que no evoluciona como se espera. Es la medida que más diagnósticos rescata, y consiste simplemente en volver a explorar y volver a preguntarse si la etiqueta era correcta.',
      seguimiento_ambulatorio: 'Según la causa identificada.',
      pronostico: 'Excelente en las causas metabólicas y farmacológicas si se corrigen pronto. En las neuromusculares primarias depende por completo de la precocidad del tratamiento específico.',
      algoritmo: ['Pedir fósforo, potasio, magnesio y calcio en el primer momento', 'Revisar la lista completa de fármacos', 'Reponer tiamina de forma empírica si hay riesgo', 'Explorar la cara y los ojos: si están afectados, no es lo esperado', 'Comprobar la simetría de la debilidad', 'Buscar nivel sensitivo y afectación de esfínteres', 'Ante nivel sensitivo, resonancia MEDULAR urgente', 'Ante debilidad fluctuante ocular o bulbar, pensar en miastenia', 'Ante arreflexia y progresión rápida, estudiar Guillain-Barré', 'Reevaluar siempre al paciente que no mejora']
    },
    {
      nombre: 'Prevención: lo único que funciona',
      color: '#3f6b52',
      definicion: 'Conjunto de medidas dirigidas a evitar la aparición de la debilidad adquirida, que constituyen la única estrategia con eficacia demostrada porque no existe tratamiento farmacológico.',
      fisiopatologia: 'La pérdida de masa y de fuerza muscular en el paciente crítico es máxima en la PRIMERA SEMANA, lo que significa que la ventana de prevención es estrecha y muy precoz. La inmovilidad produce por si sola atrofia rápida y pérdida de fuerza desproporcionada, y el músculo inmovilizado además responde peor al aporte nutricional. La sedación profunda multiplica el problema porque impide moverse, impide colaborar y favorece el delirium, que a su vez retrasa la movilización: es un círculo que se cierra sobre sí mismo. De ahi que casi todas las intervenciones eficaces consistan en hacer MENOS de algo.',
      epidemiologia: 'Un ensayo aleatorizado de fisioterapia y terapia ocupacional precoces en pacientes ventilados mostró mejor situación funcional al alta y menos días de delirium. Los paquetes de medidas que combinan despertar, respiración espontánea, sedación ligera, prevención del delirium y movilización precoz se asocian a mejores resultados.',
      factores_riesgo: ['Sedación profunda mantenida por inercia', 'Ausencia de objetivo de sedación definido', 'No hacer interrupción diaria de la sedación', 'Inmovilidad prolongada', 'Ausencia de fisioterapia en la unidad', 'Bloqueo neuromuscular prolongado o sin indicación', 'Corticoides innecesarios o a dosis altas', 'Hiperglucemia mantenida', 'Control glucémico estricto, que aumenta la mortalidad', 'Nutrición insuficiente o excesiva', 'Cultura de unidad que considera la movilización opcional', 'Falta de personal para movilizar'],
      clinica: 'La prevención no tiene clínica: se mide por proceso. Las preguntas útiles son concretas y se responden en el pase de visita: cual es el objetivo de sedación de este paciente, se ha interrumpido hoy, se ha sentado o se ha levantado, sigue necesitando el bloqueo y sigue necesitando el corticoide.',
      criterios_dx: 'No aplica: es prevención. Ver la Figura 3 de Definición.',
      laboratorio: 'Control glucémico razonable, sin perseguir la normalización estricta. Vigilancia de iones y de la nutrición.',
      imagen: 'Ecografía muscular seriada para objetivar la pérdida de masa, donde este disponible.',
      complementarios: 'Protocolo de sedación con objetivo definido y evaluado en cada turno. Protocolo de movilización precoz con niveles de actividad. Y medición de si ambos se cumplen, porque el fallo habitual no es no tenerlos sino no aplicarlos.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'MOVILIZACIÓN PRECOZ, desde el primer o segundo dia e incluso en el paciente ventilado, que es la medida con más respaldo. SEDACIÓN LIGERA con objetivo definido e interrupción diaria. Prevención y tratamiento del delirium. Nutrición adecuada, ni escasa ni excesiva.',
      tx_farmacologico: 'Bloqueantes neuromusculares solo con indicación clara y el menor tiempo posible. Corticoides a la dosis mínima. Evitar la hiperglucemia mantenida, pero SIN control estricto, que aumento la mortalidad en un ensayo amplio. Ningún fármaco previene la debilidad.',
      tx_intervencionista: 'Estimulación eléctrica neuromuscular como complemento en el paciente que no puede colaborar, con evidencia heterogénea.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Objetivo de movilización DIARIO y escrito, revisado en el pase de visita. Y continuidad de la rehabilitación tras el alta de críticos, momento en el que con frecuencia se interrumpe justo cuando el paciente podría progresar más.',
      seguimiento_ambulatorio: 'Programa de rehabilitación tras el alta hospitalaria, que en la mayoría de los sitios no existe de forma estructurada.',
      pronostico: 'La prevención es lo único que ha demostrado modificar la incidencia y la gravedad. Una vez establecida la debilidad, solo queda rehabilitar y esperar.',
      algoritmo: ['Definir un objetivo de sedación y evaluarlo cada turno', 'Hacer interrupción diaria de la sedación cuando proceda', 'Empezar a movilizar el primer o segundo dia', 'Movilizar también al paciente ventilado', 'Fijar un objetivo de movilidad diario y escrito', 'Revisar cada dia si el bloqueo neuromuscular sigue indicado', 'Reducir los corticoides a la dosis mínima necesaria', 'Evitar la hiperglucemia sin perseguir un control estricto', 'Nutrir de forma adecuada, ni poco ni de más', 'Continuar la rehabilitación tras el alta de críticos']
    },
    {
      nombre: 'Debilidad diafragmática y fracaso del destete',
      color: '#8a6a1f',
      definicion: 'Pérdida de fuerza y de masa del diafragma asociada a la enfermedad crítica y a la propia ventilación mecánica, que es una causa frecuente y poco reconocida de fracaso del destete.',
      fisiopatologia: 'El diafragma es un músculo esquelético y sufre los mismos mecanismos que el resto, pero añade uno propio y paradójico: la ventilación mecánica que lo sustituye también lo atrofia. Cuando el respirador hace todo el trabajo, el diafragma deja de contraerse y su grosor disminuye de forma medible en POCOS DÍAS, mucho más rápido que en los músculos de los miembros. Y el exceso contrario también daña: un esfuerzo inspiratorio excesivo produce lesión por sobrecarga. Esa doble vulnerabilidad, a la inactividad y al esfuerzo excesivo, es la base del concepto de ventilación protectora del diafragma, que busca un nivel intermedio de esfuerzo.',
      epidemiologia: 'La debilidad diafragmática es más frecuente que la de los miembros y puede aparecer de forma independiente: hay pacientes con diafragma débil y fuerza periférica conservada, y al revés. Se asocia de forma consistente a más días de ventilación, más fracasos de extubación y peor desenlace.',
      factores_riesgo: ['Ventilación mecánica controlada, sin esfuerzo del paciente', 'Sedación profunda', 'Bloqueo neuromuscular', 'Sepsis', 'Esfuerzo inspiratorio excesivo mantenido', 'Corticoides', 'Alteraciones electrolíticas, sobre todo hipofosfatemia', 'Desnutricion', 'Cirugía torácica o abdominal alta', 'Lesión del nervio frénico tras cirugía cardiaca'],
      clinica: 'FRACASO DEL DESTETE sin causa pulmonar que lo explique: taquipnea, respiración superficial, uso de musculatura accesoria y respiración PARADÓJICA, con el abdomen que se hunde en inspiración. Puede haber ortopnea. Y una pista útil: el paciente tolera bien el soporte y se agota cuando se le reduce.',
      criterios_dx: 'Ecografía diafragmática con grosor reducido y fracción de engrosamiento baja, en el contexto de un destete que fracasa. Ver la Figura 2 de Definición para el mecanismo común.',
      laboratorio: 'FÓSFORO, magnesio, potasio y calcio, porque su corrección puede cambiar la situación en horas. Gasometría. Función tiroidea. Y valoración del estado nutricional.',
      imagen: 'ECOGRAFÍA DIAFRAGMÁTICA: grosor al final de la espiración y fracción de engrosamiento durante la inspiración. Radiografía de tórax buscando elevación de un hemidiafragma, que sugiere paresia frénica.',
      complementarios: 'Presión inspiratoria máxima y otras medidas de fuerza respiratoria. Prueba de respiración espontánea estructurada. Y valoración conjunta con la fuerza periférica, porque pueden ir por libre.',
      dx_diferencial: 'Causas pulmonares del fracaso del destete (edema, atelectasia, derrame, broncoespasmo), causas cardiacas (disfunción ventricular desenmascarada al retirar la presión positiva), delirium y ansiedad, sobrecarga de volumen, y las entidades neuromusculares que imitan la debilidad adquirida.',
      tx_medico: 'Ventilación que permita un esfuerzo inspiratorio MODERADO, ni nulo ni excesivo. Corregir las alteraciones electrolíticas. Optimizar la nutrición. Tratar la causa pulmonar o cardiaca coexistente. Y entrenamiento de la musculatura inspiratoria, que ha mostrado resultados prometedores.',
      tx_farmacologico: 'Ninguno específico. Reducción de sedantes y de bloqueantes, y de los corticoides que no sean necesarios.',
      tx_intervencionista: 'Traqueostomía cuando el destete se prolonga, dentro de un plan realista. La estimulación frénica es un campo en investigación.',
      criterios_uci: 'El paciente ya esta en críticos. Lo relevante es reconocer la causa del fracaso del destete en lugar de repetir pruebas de respiración espontánea que van a volver a fallar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ecografía diafragmática seriada donde este disponible. Y una revisión honesta de la estrategia ventilatoria: si el diafragma no trabaja nada, se atrofia.',
      seguimiento_ambulatorio: 'Rehabilitación respiratoria en el paciente que sale con debilidad residual. La disnea de esfuerzo puede persistir mucho tiempo.',
      pronostico: 'La recuperación es posible pero lenta. La debilidad diafragmática se asocia de forma independiente a más días de ventilación y a peor desenlace.',
      algoritmo: ['Ante un destete que falla, no atribuirlo solo al pulmón', 'Descartar causa pulmonar, cardiaca y sobrecarga de volumen', 'Buscar respiración paradójica y uso de musculatura accesoria', 'Pedir FÓSFORO, magnesio, potasio y calcio', 'Hacer ecografía diafragmática: grosor y fracción de engrosamiento', 'Valorar también la fuerza periférica, que puede ir por libre', 'Ajustar la ventilación para permitir un esfuerzo moderado', 'Reducir sedantes, bloqueantes y corticoides innecesarios', 'Iniciar entrenamiento de la musculatura inspiratoria', 'Plantear traqueostomía si el destete se prolonga']
    },
    {
      nombre: 'Síndrome post-cuidados intensivos',
      color: '#4a3f7a',
      definicion: 'Conjunto de alteraciones físicas, cognitivas y afectivas nuevas o agravadas que persisten tras el alta de la unidad de críticos, y que afectan también a la familia.',
      fisiopatologia: 'Los tres dominios tienen sustratos distintos. El FÍSICO es la debilidad adquirida y sus consecuencias sobre la marcha, la fuerza y la capacidad de esfuerzo, a lo que se suma la disfunción pulmonar residual. El COGNITIVO se relaciona con la neuroinflamación, la hipoperfusión cerebral y, de forma muy consistente, con la duración del DELIRIUM durante el ingreso, que es el mejor predictor conocido del deterioro cognitivo posterior. Y el AFECTIVO se relaciona con la experiencia vivida: recuerdos delirantes, dolor, inmovilidad, imposibilidad de comunicarse y miedo, que dejan síntomas de ansiedad, depresión y estrés postraumático.',
      epidemiologia: 'Es muy frecuente entre los supervivientes y puede durar años. En cohortes de pacientes que sobrevivieron a un síndrome de distres respiratorio, la limitación funcional persistia a los cinco años. Muchos supervivientes no vuelven a su trabajo. Y una proporción relevante de los FAMILIARES presenta síntomas de ansiedad, depresión o estrés postraumático, lo que se conoce como síndrome post-cuidados intensivos familiar.',
      factores_riesgo: ['Duración del delirium durante el ingreso', 'Sedación profunda y prolongada', 'Debilidad adquirida', 'Ventilación mecánica prolongada', 'Sepsis', 'Hipoglucemia e hipoxemia durante el ingreso', 'Enfermedad psiquiátrica previa', 'Recuerdos delirantes de la estancia', 'Ausencia de información y de acompañamiento a la familia', 'Falta de seguimiento estructurado tras el alta'],
      clinica: 'FÍSICO: debilidad, fatiga, disnea de esfuerzo y limitación para las actividades cotidianas. COGNITIVO: fallos de memoria, de atención y de función ejecutiva, que a veces se confunden con depresión. AFECTIVO: ansiedad, ánimo bajo, pesadillas, evitación y reviviscencias. Muchos pacientes no relacionan estos síntomas con su ingreso y no los cuentan si no se les pregunta.',
      criterios_dx: 'Alteraciones nuevas o agravadas en cualquiera de los tres dominios tras el alta. No requiere ninguna prueba: requiere preguntar.',
      laboratorio: 'El dirigido a descartar causas corregibles de fatiga: anemia, hipotiroidismo, déficits nutricionales y alteraciones metabólicas.',
      imagen: 'Solo si hay hallazgos que lo justifiquen. Las pruebas de imagen no diagnostican este síndrome.',
      complementarios: 'VALORACIÓN NEUROPSICOLÓGICA en quien refiere fallos cognitivos. Cribado de ansiedad, depresión y estrés postraumático. Valoración funcional y de la capacidad de esfuerzo.',
      dx_diferencial: 'Deterioro cognitivo previo no conocido, depresión mayor, anemia, hipotiroidismo, apnea del sueño, efectos residuales de fármacos y secuelas de la enfermedad de base.',
      tx_medico: 'REHABILITACIÓN multidisciplinar: física, respiratoria y cognitiva. Apoyo psicológico. Y algo tan sencillo como explicar al paciente lo que le paso, porque muchos tienen lagunas y recuerdos delirantes que no saben interpretar. Los DIARIOS de la unidad, escritos por el personal y la familia durante el ingreso, ayudan a reconstruir esa historia y han mostrado reducir los síntomas postraumáticos.',
      tx_farmacologico: 'Tratamiento de la ansiedad y de la depresión cuando esten indicados. No hay ningún fármaco específico para el síndrome.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica: es lo que viene después.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Prevención durante el ingreso: minimizar el delirium, sedación ligera, movilización precoz, favorecer el sueño, orientar al paciente y facilitar la presencia de la familia. Y preparar el alta explicando lo que cabe esperar.',
      seguimiento_ambulatorio: 'Consulta de seguimiento tras el alta, que existe en muy pocos sitios y que los pacientes agradecen enormemente. Debería incluir valoración de los tres dominios y atención a la familia.',
      pronostico: 'Mejora con el tiempo pero puede persistir años. La rehabilitación precoz y el seguimiento estructurado mejoran la trayectoria, y su ausencia deja al paciente solo ante un problema que no entiende.',
      algoritmo: ['Prevenir durante el ingreso: menos delirium, menos sedación, más movilidad', 'Favorecer el sueño y la orientación', 'Facilitar la presencia y la información a la familia', 'Considerar un diario de la unidad', 'Explicar al paciente lo que le ha pasado antes del alta', 'Valorar los tres dominios: físico, cognitivo y afectivo', 'Preguntar de forma expresa, porque no se cuenta solo', 'Descartar causas corregibles de fatiga', 'Derivar a rehabilitación y a apoyo psicológico', 'Organizar una consulta de seguimiento tras el alta']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este tema tiene una particularidad que lo define: no existe tratamiento. Todo lo que funciona es prevención, y toda la prevención consiste en hacer menos de algo. Y el alta de críticos no cierra el problema: lo traslada.',
    parametros: ['Explorar la fuerza en cuanto el paciente colabore', 'No puntuar la escala en quien no obedece órdenes', 'Comprobar que la debilidad es SIMÉTRICA y respeta la cara', 'Pedir fósforo, potasio, magnesio y calcio ante toda debilidad', 'Revisar la lista de fármacos', 'Estudiar cualquier bandera que no encaje', 'Definir un objetivo de sedación y evaluarlo cada turno', 'Movilizar desde el primer o segundo dia, también al ventilado', 'Revisar a diario si el bloqueo neuromuscular sigue indicado', 'Evitar la hiperglucemia sin perseguir un control estricto', 'Ante un destete que falla, pensar en el DIAFRAGMA', 'Continuar la rehabilitación tras el alta de críticos'],
    criterios_uci_general: 'No aplica en el sentido habitual, porque es una complicación que ocurre dentro de la unidad de críticos. Lo que si tiene relevancia es la urgencia de estudiar las entidades que la imitan: una compresión medular con nivel sensitivo y un síndrome de Guillain-Barré en progresión no esperan, y ambos pueden pasar desapercibidos en un paciente al que ya se le ha puesto una etiqueta.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: es toda la estrategia, porque no hay tratamiento. Sedación ligera con objetivo definido e interrupción diaria, MOVILIZACIÓN PRECOZ desde el primer o segundo dia incluso en el paciente ventilado, prevención y tratamiento del delirium, bloqueo neuromuscular solo con indicación y el menor tiempo posible, corticoides a la dosis mínima, control de la hiperglucemia sin perseguir un objetivo estricto, y nutrición adecuada. Secundaria: exploración sistemática de la fuerza en cuanto el paciente colabore, búsqueda de las causas tratables que imitan el cuadro, y ecografía diafragmática ante un destete que fracasa sin causa pulmonar. Terciaria: continuidad de la rehabilitación tras el alta de críticos, que es justo donde suele interrumpirse; valoración de los tres dominios del síndrome post-cuidados intensivos; explicar al paciente lo que le ha pasado; y atención a la FAMILIA, que también lo sufre.'
  }
};

// Las citas de cada ficha estaban en forma PLANA (un array por ficha). El motor normaliza esa
// forma anclandola SOLO al campo `definicion` (ver openModal en engine/study-view.js), de modo
// que criterios_dx, laboratorio y tx_farmacologico no pintaban ninguna cita aunque las fuentes
// de la ficha si estuvieran declaradas. Convertido a la forma por campo el 2/11/2026: se reparten
// a esos tres campos las fuentes que la ficha ya declaraba, y `definicion` queda igual para que
// lo que ya se veia no cambie. La precision es de FICHA, no de campo: afinar cual de las fuentes
// sostiene cada campo es una pasada posterior (ver .claude/atribucion-citas.md).
export const compCites = {
  'Debilidad adquirida: reconocerla': { definicion: [1, 2, 4, 5], criterios_dx: [1, 2, 4, 5], laboratorio: [1, 2, 4, 5], tx_farmacologico: [1, 2, 4, 5] },
  'Polineuropatía y miopatía del paciente crítico': { definicion: [3, 6], criterios_dx: [3, 6], laboratorio: [3, 6], tx_farmacologico: [3, 6] },
  'Lo que imita la debilidad adquirida': { definicion: [2, 5], criterios_dx: [2, 5], laboratorio: [2, 5], tx_farmacologico: [2, 5] },
  'Prevención: lo único que funciona': { definicion: [7, 8, 9, 12], criterios_dx: [7, 8, 9, 12], laboratorio: [7, 8, 9, 12], tx_farmacologico: [7, 8, 9, 12] },
  'Debilidad diafragmática y fracaso del destete': { definicion: [13, 14], criterios_dx: [13, 14], laboratorio: [13, 14], tx_farmacologico: [13, 14] },
  'Síndrome post-cuidados intensivos': { definicion: [15, 16] }
};
export const estigmasTitulo = 'Signos que orientan y banderas que no encajan';
export const estigmas = [
  { s: 'Debilidad simétrica y proximal', p: 'El patrón esperado', photo: null, desc: 'Con reflejos disminuidos o abolidos, y de instauración durante el ingreso. Es lo que cabe esperar de una debilidad adquirida, y su presencia aislada no obliga a más estudio si todo lo demás encaja.' },
  { s: 'Cara y ojos respetados', p: 'A favor del diagnóstico', photo: null, desc: 'La debilidad adquirida característicamente no afecta a la musculatura facial ni ocular. Que el paciente mueva bien la cara y los ojos aunque no pueda levantar los brazos es un dato que apoya el diagnóstico.' },
  { s: 'Oftalmoparesia o ptosis', p: 'NO es debilidad adquirida', photo: null, desc: 'Obliga a pensar en miastenia, botulismo, síndrome de Miller Fisher o una lesión de tronco. Es la bandera que más rápido reorienta el estudio, y se busca simplemente mirando al paciente.' },
  { s: 'Debilidad asimétrica', p: 'Buscar otra cosa', photo: null, desc: 'La debilidad adquirida es simétrica. La asimetría apunta a una lesión focal: ictus, mielopatía, plexopatia o neuropatía por compresión, esta última frecuente en el paciente que ha estado mucho tiempo inmóvil.' },
  { s: 'Nivel sensitivo', p: 'Resonancia medular urgente', photo: null, desc: 'Junto con la afectación de esfínteres, obliga a descartar una compresión medular, que es una urgencia con ventana terapéutica. No pertenece en absoluto al cuadro de debilidad adquirida.' },
  { s: 'Paciente que no obedece órdenes', p: 'La escala no es aplicable', photo: null, desc: 'La suma de fuerza exige colaboracion. Puntuar a un paciente sedado o confuso produce un número sin valor. Lo correcto es anotar que no es valorable y repetir la exploración cuando despierte.' },
  { s: 'Creatina cinasa muy elevada', p: 'Pensar en otra miopatía', photo: null, desc: 'En la debilidad adquirida suele ser normal o poco elevada. Una elevación marcada apunta a rabdomiólisis, miopatía necrotizante o miopatía inflamatoria, que tienen manejo propio.' },
  { s: 'Fósforo bajo', p: 'Debilidad tratable en horas', photo: null, desc: 'Junto con la hipopotasemia, es una de las causas más frecuentes y más fácilmente reversibles de debilidad en el paciente crítico. Buscarla antes de encargar un electromiograma ahorra tiempo y explica muchos casos.' },
  { s: 'Respiración paradójica', p: 'Diafragma débil', photo: null, desc: 'El abdomen se hunde durante la inspiración en lugar de expandirse. Junto con el uso de musculatura accesoria y la taquipnea, sugiere debilidad diafragmática como causa del fracaso del destete.' },
  { s: 'Destete que falla con pulmón aceptable', p: 'Mirar el diafragma', photo: null, desc: 'La debilidad diafragmática es más frecuente que la de los miembros y puede ir por libre. La ecografía mide el grosor y la fracción de engrosamiento en minutos y da la respuesta.' },
  { s: 'Progresión tras salir de críticos', p: 'No encaja', photo: null, desc: 'La debilidad adquirida no progresa una vez resuelta la enfermedad crítica: mejora despacio. Un empeoramiento tras el alta de la unidad obliga a replantear el diagnóstico por completo.' },
  { s: 'Fallos de memoria tras el alta', p: 'Síndrome post-cuidados intensivos', photo: null, desc: 'El dominio cognitivo se relaciona sobre todo con la duración del DELIRIUM durante el ingreso. Los pacientes no lo relacionan con su estancia y no lo cuentan si no se les pregunta de forma expresa.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Suma de fuerza del Medical Research Council (calculadora disponible)': [4, 2],
  'Riesgo de debilidad adquirida (calculadora disponible)': [6, 5],
  'Diferencial de la debilidad en el crítico (calculadora disponible)': [1, 2],
  'Escalas de movilidad del paciente crítico': [7, 8],
  'Fracción de engrosamiento diafragmático': [13, 14],
  'Síndrome post-cuidados intensivos': [15, 16]
};
export const escalaCalc = {
  'Suma de fuerza del Medical Research Council (calculadora disponible)': 'mrc-fuerza',
  'Riesgo de debilidad adquirida (calculadora disponible)': 'riesgo-debilidad-uci',
  'Diferencial de la debilidad en el crítico (calculadora disponible)': 'diferencial-debilidad'
};
export const compGroups = [
  { name: 'Reconocer', items: ['Debilidad adquirida: reconocerla', 'Polineuropatía y miopatía del paciente crítico'] },
  { name: 'Descartar lo tratable', items: ['Lo que imita la debilidad adquirida'] },
  { name: 'Prevenir', items: ['Prevención: lo único que funciona', 'Debilidad diafragmática y fracaso del destete'] },
  { name: 'Después del alta', items: ['Síndrome post-cuidados intensivos'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el reconocimiento: como se explora y como se mide, y cuales son las dos formas que hay detrás, que importan sobre todo por el pronóstico. La tercera es la más importante en la práctica, porque reúne todo lo que imita a este cuadro y SI tiene tratamiento, empezando por unas alteraciones iónicas que se corrigen en horas. Las dos siguientes son la prevención, que es lo único que funciona, y el diafragma, que es la parte de este problema que explica muchos destetes fallidos y que casi nadie explora. Y la última es lo que viene después del alta, que es donde el paciente se queda solo.';
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
  root: { title: 'PACIENTE CRÍTICO QUE DESPIERTA DÉBIL', color: '#6b2e6b', target: 'definicion' },
  branches: [
    { title: 'RECONOCER', sub: 'Explorar y medir', color: '#6b2e6b', target: 'complicaciones', leaves: [
      { title: 'Suma de fuerza', sub: 'Menos de 48 sobre 60', color: '#6b2e6b', target: 'clasificacion' },
      { title: 'Debe estar despierto', sub: 'Si no, no es aplicable', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Simétrica y proximal', sub: 'Respeta cara y ojos', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Miopatía o neuropatía', sub: 'Cambia el pronóstico', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'DESCARTAR LO TRATABLE', sub: 'Lo que si tiene tratamiento', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Fósforo y potasio', sub: 'Se corrigen en horas', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Revisar fármacos', sub: 'Bloqueantes y corticoides', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Oftalmoparesia', sub: 'No es debilidad adquirida', color: '#6b2e6b', target: 'complicaciones' },
      { title: 'Nivel sensitivo', sub: 'Resonancia medular urgente', color: '#3d5a73', target: 'diagnostico' }
    ] },
    { title: 'PREVENIR Y DESPUÉS', sub: 'No hay tratamiento', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Movilizar pronto', sub: 'También al ventilado', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sedar poco', sub: 'Objetivo y pausa diaria', color: '#8a6a1f', target: 'seguimiento' },
      { title: 'Mirar el diafragma', sub: 'Si el destete falla', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Y después del alta', sub: 'Físico, cognitivo y afectivo', color: '#4a3f7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [5, 12], no_invasivos: [2, 4, 13], imagen: [14, 13] };
export const clasificacionCite = [1, 2, 4, 15];
export const seguimientoCite = [7, 8, 15];
