// topics/obesidad/content.js: Obesidad.
// Cubre el item "Obesidad" del cluster Metabolismo (bloque VII, Endocrinologia y Metabolismo) del
// temario. Es hermano de `dislipidemias`, `diabetes-mellitus` y
// `sindrome-cardiovascular-renal-metabolico`: las complicaciones cardiometabolicas de la obesidad
// (diabetes, hipertension, dislipidemia, ERC, ECV) NO se repiten aqui, viven en el tema del
// sindrome cardiovascular-renal-metabolico, que es el marco que las une. Aqui van la obesidad
// como enfermedad, su tratamiento y las complicaciones que le son propias.
//
// Fuentes principales: comision de The Lancet sobre obesidad clinica (Rubino, 2025), que separa
// obesidad preclinica de clinica; ensayos STEP 1, SURMOUNT-1 y SELECT; indicaciones de cirugia
// metabolica ASMBS/IFSO 2022; y el Edmonton Obesity Staging System.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 3 formas (comun poligenica, monogenica y sindromica, secundaria) + 5 complicaciones
// propias (apnea del sueno e hipoventilacion, enfermedad hepatica esteatosica metabolica,
// complicaciones mecanicas, reproductivas y oncologicas, y complicaciones del tratamiento).
// 4 calculadoras. 2 figuras HTML a mano. Sin em dash (ver [[feedback-no-em-dash]]).
// Texto sin acentos, como el resto de los temas nuevos.

export const meta = {
  id: 'obesidad',
  titulo: 'Obesidad',
  subtitulo: 'Modulo 40 · Medicina Interna',
  accent: '#5f7a4a',
  accentDim: '#a8bd97'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const organosHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <div style="flex:1;min-width:190px;border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;">
      <div style="font-weight:700;color:#8c3a34;">Cardiometabolico</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Diabetes tipo 2, hipertension, dislipidemia aterogenica, enfermedad coronaria, insuficiencia cardiaca (sobre todo con fraccion de eyeccion preservada), fibrilacion auricular, ictus y enfermedad renal cronica. <strong>Todo esto se desarrolla en el tema del sindrome cardiovascular-renal-metabolico.</strong></div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #3d5a73;border-radius:8px;padding:6px 9px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;">Respiratorio</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Apnea obstructiva del sueno, sindrome de hipoventilacion por obesidad, asma de dificil control y menor reserva funcional. Aumentan el riesgo perioperatorio y de via aerea dificil.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;">
      <div style="font-weight:700;color:#8a6a1f;">Digestivo</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Enfermedad hepatica esteatosica metabolica y su forma inflamatoria, con riesgo de fibrosis y cirrosis; litiasis biliar (mas aun al perder peso rapido); reflujo gastroesofagico y hernia hiatal; pancreatitis.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #6b4a2e;border-radius:8px;padding:6px 9px;background:#6b4a2e10;">
      <div style="font-weight:700;color:#6b4a2e;">Mecanico y osteoarticular</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Artrosis de rodilla y cadera, lumbalgia, insuficiencia venosa y linfedema, celulitis de repeticion, intertrigo y acantosis nigricans, y hernias de pared.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #6b3a5a;border-radius:8px;padding:6px 9px;background:#6b3a5a10;">
      <div style="font-weight:700;color:#6b3a5a;">Reproductivo y oncologico</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Sindrome de ovario poliquistico, infertilidad, complicaciones obstetricas, hipogonadismo y disfuncion erectil. Trece canceres se asocian al exceso de adiposidad: endometrio, mama posmenopausica, colon y recto, rinon, higado, pancreas, esofago y otros.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;background:#3f6b5210;">
      <div style="font-weight:700;color:#3f6b52;">Renal, neurologico y psicosocial</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Glomerulopatia asociada a la obesidad, nefrolitiasis, hipertension intracraneal idiopatica, deterioro cognitivo, depresion y ansiedad, y el estigma del peso, que por si mismo empeora los resultados en salud.</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">El dano no es proporcional al indice de masa corporal sino a la <strong>cantidad y la localizacion de la grasa</strong> y a la disfuncion que ya ha producido: de ahi que se estadifique con el sistema de Edmonton y no solo con el IMC.</div>
</div>`;

const escalonHtml = `
<div style="max-width:600px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:82px 1fr 76px;gap:6px;align-items:center;">
    <div style="font-weight:700;color:#3f6b52;text-align:center;">Base</div>
    <div style="background:#3f6b5218;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;">Alimentacion con deficit de 500 a 750 kcal/dia, actividad fisica de 150 min/semana (300 para mantener) y terapia conductual estructurada (14 sesiones o mas en 6 meses)</div>
    <div style="text-align:center;font-weight:700;color:#3f6b52;">3 a 5%</div>

    <div style="font-weight:700;color:#3d5a73;text-align:center;">Farmacos</div>
    <div style="background:#3d5a7318;border:1px solid #3d5a73;border-radius:8px;padding:6px 9px;">Desde IMC de 30, o de 27 con comorbilidad. Orlistat 3 a 5%; naltrexona-bupropion 6%; liraglutida 3.0 mg 8%; fentermina-topiramato 10%; <strong>semaglutida 2.4 mg 15%</strong>; <strong>tirzepatida 15 mg 21%</strong></div>
    <div style="text-align:center;font-weight:700;color:#3d5a73;">3 a 21%</div>

    <div style="font-weight:700;color:#8a6a1f;text-align:center;">Endoscopia</div>
    <div style="background:#8a6a1f18;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;">Balon intragastrico o gastroplastia endoscopica en manga, en casos seleccionados o como puente</div>
    <div style="text-align:center;font-weight:700;color:#8a6a1f;">10 a 15%</div>

    <div style="font-weight:700;color:#8c3a34;text-align:center;">Cirugia</div>
    <div style="background:#8c3a3418;border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;">Desde IMC de 35 con o sin comorbilidad, o de 30 a 34.9 con enfermedad metabolica (ASMBS/IFSO 2022). Manga gastrica o bypass gastrico en Y de Roux</div>
    <div style="text-align:center;font-weight:700;color:#8c3a34;">25 a 30%</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Porcentaje de <strong>peso corporal total</strong> perdido a las 68 a 72 semanas en los ensayos. La obesidad es cronica y recidivante: al retirar el farmaco se recupera alrededor de dos tercios de lo perdido (STEP 4, SURMOUNT-4), asi que el tratamiento eficaz se mantiene. La semaglutida 2.4 mg redujo ademas un 20% los eventos cardiovasculares en obesidad sin diabetes (SELECT), lo que desplaza la indicacion desde el peso hacia la reduccion del riesgo.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La obesidad es una <strong>enfermedad cronica, recidivante y progresiva</strong> definida por un exceso de adiposidad que dana la salud. No es un problema de fuerza de voluntad: es un trastorno de la regulacion del peso corporal, con una base biologica y genetica potente, que el organismo defiende de forma activa frente a la perdida de peso.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Medirla: el IMC no basta.</strong></p>
<p style="margin:0 0 12px;">El indice de masa corporal clasifica poblaciones (normal 18.5 a 24.9; sobrepeso 25 a 29.9; obesidad grado I 30 a 34.9, II 35 a 39.9 y III 40 o mas), pero en el individuo no distingue grasa de musculo ni dice donde esta la grasa. Por eso se acompana siempre de una medida de <strong>adiposidad central</strong>: el perimetro de cintura (riesgo aumentado por encima de 102 cm en el varon y 88 cm en la mujer con los criterios clasicos, o ya desde 90 y 80 cm con los umbrales de la IDF aplicables a poblacion latinoamericana y asiatica) y el <strong>indice cintura-talla</strong>, que es el mas simple y transferible: la cintura debe medir menos de la mitad de la talla, es decir, un cociente por debajo de 0.5. En poblaciones de ascendencia asiatica los umbrales de IMC bajan a 23 para sobrepeso y 25 para obesidad.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Obesidad preclinica y obesidad clinica.</strong></p>
<p style="margin:0 0 12px;">La comision de The Lancet sobre obesidad clinica (2025) propuso dejar de tratar el IMC como diagnostico y separar dos situaciones: la <strong>obesidad preclinica</strong> es un exceso de adiposidad sin disfuncion de organos ni limitacion funcional, y constituye un estado de riesgo; la <strong>obesidad clinica</strong> es la que ya produce signos, sintomas o limitacion de las actividades de la vida diaria, y es una enfermedad en si misma. Para confirmar el exceso de adiposidad se exige al menos una medida ademas del IMC (cintura, indice cintura-talla, cociente cintura-cadera o medicion directa de la grasa), salvo con un IMC por encima de 40, donde se puede asumir. En la misma linea, el <strong>sistema de estadificacion de Edmonton</strong> gradua de 0 a 4 segun el dano real y predice la mortalidad mejor que el IMC (calculadora disponible).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que el cuerpo defiende el peso.</strong></p>
<p style="margin:0 0 12px;">El nucleo arcuato del hipotalamo integra senales perifericas: la <strong>leptina</strong> del adipocito y la insulina informan de las reservas, la <strong>grelina</strong> gastrica estimula el apetito, y el GLP-1, el peptido YY y la oxintomodulina intestinales lo frenan tras la comida. En la obesidad hay <strong>resistencia a la leptina</strong>: hay mucha, pero el hipotalamo no la escucha. Y tras perder peso aparece la <strong>adaptacion metabolica</strong>: el gasto energetico en reposo cae mas de lo que corresponde al nuevo peso y la grelina sube, de modo que el organismo empuja a recuperar lo perdido. Eso explica que la obesidad sea recidivante y que el tratamiento tenga que ser cronico, no un ciclo con final.</p>
<p style="margin:0 0 12px;">El tejido adiposo, ademas, es un organo endocrino. Cuando se desborda su capacidad de almacenamiento, la grasa se deposita donde no debe (higado, musculo, pancreas, epicardio, rinon): es la <strong>lipotoxicidad</strong>, que junto con la inflamacion cronica de bajo grado produce la resistencia a la insulina. La grasa <strong>visceral</strong> es la metabolicamente peligrosa, no la subcutanea, y por eso dos personas con el mismo IMC pueden tener riesgos muy distintos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que produce.</strong></p>
${figBlock('Figura 1', 'Complicaciones de la obesidad por aparato', organosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento, por escalones.</strong></p>
${figBlock('Figura 2', 'Escalonamiento del tratamiento y perdida de peso esperable', escalonHtml)}
<p style="margin:0 0 12px;">La magnitud de la perdida importa porque las comorbilidades responden por umbrales: con un 3 a 5% mejoran la glucemia y los trigliceridos; a partir del 10% mejoran la apnea del sueno y la esteatohepatitis; y por encima del 15% aparecen la remision de la diabetes tipo 2 y el beneficio cardiovascular. Los agonistas del receptor de GLP-1 y la tirzepatida han desplazado el techo de lo alcanzable con farmacos hasta acercarlo al de la cirugia.</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Este tema cubre la obesidad como enfermedad: sus formas (comun poligenica, monogenica y sindromica, y secundaria), su tratamiento, y las complicaciones que le son propias (apnea del sueno e hipoventilacion, enfermedad hepatica esteatosica metabolica, complicaciones mecanicas, reproductivas y oncologicas, y las del propio tratamiento). Las complicaciones cardiometabolicas (diabetes, hipertension, dislipidemia, enfermedad renal y cardiovascular) no se repiten aqui: se desarrollan en el tema del <strong>sindrome cardiovascular-renal-metabolico</strong>, que es el marco que las une.</p>`;

export const bibliografia = [
  'Rubino F, Cummings DE, Eckel RH, et al. Definition and diagnostic criteria of clinical obesity: a Lancet Diabetes and Endocrinology Commission. Lancet Diabetes Endocrinol. 2025;13(3):221-262.',
  'Sharma AM, Kushner RF. A proposed clinical staging system for obesity. Int J Obes (Lond). 2009;33(3):289-295.',
  'Wilding JPH, Batterham RL, Calanna S, et al. Once-weekly semaglutide in adults with overweight or obesity (STEP 1). N Engl J Med. 2021;384(11):989-1002.',
  'Jastreboff AM, Aronne LJ, Ahmad NN, et al. Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1). N Engl J Med. 2022;387(3):205-216.',
  'Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT). N Engl J Med. 2023;389(24):2221-2232.',
  'Eisenberg D, Shikora SA, Aarts E, et al. 2022 ASMBS and IFSO indications for metabolic and bariatric surgery. Surg Obes Relat Dis. 2022;18(12):1345-1356.',
  'Rubino F, Nathan DM, Eckel RH, et al. Metabolic surgery in the treatment algorithm for type 2 diabetes: a joint statement by international diabetes organizations. Diabetes Care. 2016;39(6):861-877.',
  'Garvey WT, Mechanick JI, Brett EM, et al. AACE and ACE comprehensive clinical practice guidelines for medical care of patients with obesity. Endocr Pract. 2016;22(Suppl 3):1-203.',
  'Rubino F, Puhl RM, Cummings DE, et al. Joint international consensus statement for ending stigma of obesity. Nat Med. 2020;26(4):485-497.',
  'Sumithran P, Prendergast LA, Delbridge E, et al. Long-term persistence of hormonal adaptations to weight loss. N Engl J Med. 2011;365(17):1597-1604.',
  'Rosenbaum M, Leibel RL. Adaptive thermogenesis in humans. Int J Obes (Lond). 2010;34(Suppl 1):S47-S55.',
  'Rubino DM, Greenway FL, Khalid U, et al. Effect of continued weekly subcutaneous semaglutide vs placebo on weight loss maintenance (STEP 4). JAMA. 2021;325(14):1414-1425.',
  'Aronne LJ, Sattar N, Horn DB, et al. Continued treatment with tirzepatide for maintenance of weight reduction (SURMOUNT-4). JAMA. 2024;331(1):38-48.',
  'Farooqi IS, O Rahilly S. Genetics of obesity in humans. Endocr Rev. 2006;27(7):710-718.',
  'Clement K, van den Akker E, Argente J, et al. Efficacy and safety of setmelanotide, an MC4R agonist, in individuals with severe obesity due to LEPR or POMC deficiency. Lancet Diabetes Endocrinol. 2020;8(12):960-970.',
  'Rinella ME, Lazarus JV, Ratziu V, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. Hepatology. 2023;78(6):1966-1986.',
  'Rinella ME, Neuschwander-Tetri BA, Siddiqui MS, et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology. 2023;77(5):1797-1835.',
  'Mokhlesi B, Masa JF, Brozek JL, et al. Evaluation and management of obesity hypoventilation syndrome: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2019;200(3):e6-e24.',
  'Patel SR. Obstructive sleep apnea. Ann Intern Med. 2019;171(11):ITC81-ITC96.',
  'Lauby-Secretan B, Scoccianti C, Loomis D, et al. Body fatness and cancer: viewpoint of the IARC Working Group. N Engl J Med. 2016;375(8):794-798.',
  'Mechanick JI, Apovian C, Brethauer S, et al. Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures. Surg Obes Relat Dis. 2020;16(2):175-247.',
  'Sjostrom L, Narbro K, Sjostrom CD, et al. Effects of bariatric surgery on mortality in Swedish obese subjects. N Engl J Med. 2007;357(8):741-752.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Obesidad preclinica (exceso de adiposidad sin disfuncion)',
      tituloB: 'Obesidad clinica (con disfuncion de organos o limitacion funcional)',
      compensada: 'Exceso de adiposidad confirmado por IMC mas una medida de adiposidad central, pero sin signos ni sintomas de disfuncion organica y sin limitacion de las actividades de la vida diaria. Es un estado de riesgo, no una enfermedad establecida: el objetivo es cuantificar el riesgo, tratar los factores presentes y prevenir la progresion, evitando tanto la inaccion como el sobretratamiento.',
      descompensada: 'Exceso de adiposidad con disfuncion demostrable: disnea de esfuerzo, apnea del sueno, artrosis limitante, incontinencia, dificultad para el autocuidado o la higiene, o cualquier enfermedad de organo atribuible (hepatica, respiratoria, articular, reproductiva, cardiometabolica). Aqui la obesidad es una enfermedad activa y el tratamiento va dirigido a revertir esa disfuncion, no solo a bajar una cifra de peso.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayuno y HbA1c', utilidad: 'Cribado de prediabetes y diabetes tipo 2, presentes en una fraccion alta de los pacientes y a menudo asintomaticas. Definen ademas el paso del estadio 1 al 2 del sindrome cardiovascular-renal-metabolico.' },
      { prueba: 'Perfil lipidico completo con colesterol no-HDL', utilidad: 'La dislipidemia aterogenica de la obesidad (trigliceridos altos, HDL bajo, particulas LDL pequenas y densas) se ve mejor con el colesterol no-HDL que con el cLDL calculado.' },
      { prueba: 'Transaminasas y plaquetas (para el indice FIB-4)', utilidad: 'Cribado de enfermedad hepatica esteatosica metabolica y, sobre todo, de fibrosis avanzada: unas transaminasas normales no la descartan, por lo que se calcula el FIB-4 en todo paciente con obesidad y factores metabolicos.' },
      { prueba: 'TSH', utilidad: 'Descarta el hipotiroidismo como contribuyente. Rara vez explica por si solo una obesidad importante, pero es barato y modifica el manejo.' },
      { prueba: 'Creatinina con filtrado glomerular y cociente albumina/creatinina', utilidad: 'Detecta la glomerulopatia asociada a la obesidad y la enfermedad renal cronica, que cambian la eleccion de farmacos y estadifican el riesgo cardiorrenal.' },
      { prueba: 'Cortisol y estudio hormonal dirigido', utilidad: 'Solo ante sospecha clinica de causa secundaria: cortisol libre urinario o test de supresion con dexametasona si hay estigmas de Cushing; testosterona en el varon con hipogonadismo; no se piden de rutina.' },
      { prueba: 'Vitamina D, B12, hierro, folato y cinc', utilidad: 'Basales antes de la cirugia metabolica y en el seguimiento posterior de por vida; los deficits son frecuentes ya antes de operar.' }
    ],
    no_invasivos: [
      { metodo: 'IMC, perimetro de cintura e indice cintura-talla (calculadora disponible)', interpretacion: 'El IMC clasifica, la cintura y el indice cintura-talla informan de la adiposidad central, que es la que determina el riesgo metabolico. Se necesita al menos una medida ademas del IMC para confirmar el exceso de adiposidad.', cutoff: 'IMC 30 o mas (25 o mas en ascendencia asiatica); cintura mayor de 102 cm en el varon y 88 en la mujer (o 90 y 80 con umbrales de la IDF); indice cintura-talla mayor de 0.5' },
      { metodo: 'Sistema de estadificacion de Edmonton (calculadora disponible)', interpretacion: 'Gradua de 0 a 4 segun la presencia de factores de riesgo, enfermedad establecida, dano de organo y limitacion funcional o psicologica. Predice la mortalidad mejor que el IMC y orienta la intensidad del tratamiento.', cutoff: 'Estadio 0 sin factores; 2 o mas indica enfermedad establecida y justifica tratamiento activo; 3 o mas, dano de organo' },
      { metodo: 'Cuestionario STOP-BANG y poligrafia o polisomnografia', interpretacion: 'Cribado y confirmacion de la apnea obstructiva del sueno, muy prevalente e infradiagnosticada en la obesidad; su tratamiento cambia la calidad de vida y el riesgo perioperatorio.', cutoff: 'STOP-BANG de 3 o mas indica riesgo intermedio-alto y obliga a estudio del sueno' },
      { metodo: 'Indice FIB-4 y elastografia hepatica', interpretacion: 'Estratifican el riesgo de fibrosis hepatica avanzada de forma no invasiva y evitan biopsias innecesarias.', cutoff: 'FIB-4 menor de 1.3 hace improbable la fibrosis avanzada; mayor de 2.67 la hace probable y obliga a derivar a hepatologia' },
      { metodo: 'Composicion corporal por bioimpedancia o densitometria', interpretacion: 'Cuantifica la masa grasa y la masa magra; util cuando el IMC es equivoco (deportistas, sarcopenia con obesidad en el anciano) y para vigilar que la perdida de peso no sea a costa de musculo.', cutoff: 'Sin umbral universal; se interpreta la tendencia y la relacion entre masa grasa y masa magra' }
    ],
    imagen: [
      { modalidad: 'Ecografia abdominal', hallazgos: 'Esteatosis hepatica y litiasis biliar. Es poco sensible por debajo del 20% de esteatosis y no evalua la fibrosis, por lo que no sustituye al FIB-4 ni a la elastografia.' },
      { modalidad: 'Elastografia de transicion con parametro de atenuacion controlada', hallazgos: 'Cuantifica a la vez la esteatosis y la rigidez hepatica; es la prueba no invasiva de referencia para estadificar la enfermedad hepatica esteatosica metabolica.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Hipertrofia ventricular izquierda, disfuncion diastolica y grasa epicardica; identifica la insuficiencia cardiaca con fraccion de eyeccion preservada, muy ligada a la obesidad.' },
      { modalidad: 'Radiografia o resonancia osteoarticular', hallazgos: 'Artrosis de rodilla y cadera y patologia degenerativa lumbar, que cuantifican la limitacion funcional y pesan en la estadificacion de Edmonton.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La obesidad se clasifica por <strong>grado antropometrico</strong> (IMC y adiposidad central), por <strong>situacion clinica</strong> (preclinica frente a clinica, segun exista o no disfuncion de organos o limitacion funcional) y por <strong>gravedad funcional</strong> con el sistema de estadificacion de Edmonton, que es el que mejor predice la mortalidad y el que mejor orienta la intensidad del tratamiento. Las tres miradas son complementarias: el IMC dice cuanta hay, la cintura dice donde esta, y Edmonton dice cuanto dano ha hecho.`,
    escalas: [
      { nombre: 'Clasificacion por indice de masa corporal (calculadora disponible)', componentes: 'Peso y talla.', formula: 'IMC = peso en kg dividido entre la talla en metros al cuadrado.', interpretacion: 'Normal 18.5 a 24.9; sobrepeso 25 a 29.9; obesidad grado I 30 a 34.9, grado II 35 a 39.9 y grado III 40 o mas. En poblaciones de ascendencia asiatica, sobrepeso desde 23 y obesidad desde 25.' },
      { nombre: 'Adiposidad central: cintura e indice cintura-talla (calculadora disponible)', componentes: 'Perimetro de cintura y talla.', formula: 'Indice cintura-talla = cintura dividida entre la talla, en las mismas unidades.', interpretacion: 'Riesgo aumentado con cintura mayor de 102 cm en el varon y 88 cm en la mujer (criterios clasicos), o desde 90 y 80 cm con los umbrales de la IDF aplicables a poblacion latinoamericana y asiatica. Indice cintura-talla mayor de 0.5 indica adiposidad central con independencia del IMC.' },
      { nombre: 'Obesidad preclinica frente a clinica (comision de The Lancet, 2025)', componentes: 'Exceso de adiposidad confirmado mas presencia o ausencia de disfuncion organica o limitacion de las actividades de la vida diaria.', formula: 'Confirmar la adiposidad con IMC mas al menos una medida adicional (o IMC mayor de 40), y despues buscar signos, sintomas o limitacion funcional.', interpretacion: 'Preclinica: estado de riesgo, sin disfuncion. Clinica: enfermedad activa, con disfuncion demostrable, que justifica tratamiento dirigido a revertirla.' },
      { nombre: 'Sistema de estadificacion de Edmonton (calculadora disponible)', componentes: 'Factores de riesgo, enfermedad establecida, dano de organo, sintomas fisicos, salud mental y limitacion funcional.', formula: 'Estadio 0 a 4 segun el peor dominio afectado.', interpretacion: '0 sin factores ni sintomas; 1 factores subclinicos o sintomas leves; 2 enfermedad cronica establecida con limitacion moderada; 3 dano de organo establecido; 4 discapacidad grave. Predice la mortalidad mejor que el IMC.' },
      { nombre: 'Indicacion de cirugia metabolica (ASMBS/IFSO 2022; calculadora disponible)', componentes: 'IMC, presencia de enfermedad metabolica y respuesta al tratamiento no quirurgico.', formula: 'IMC de 35 o mas con o sin comorbilidad; IMC de 30 a 34.9 con enfermedad metabolica; en ascendencia asiatica, valorar desde 27.5.', interpretacion: 'Los umbrales bajaron respecto de los criterios clasicos de 1991. No hay limite superior de edad y se valora individualmente; la falta de respuesta duradera al tratamiento no quirurgico refuerza la indicacion.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Obesidad comun (poligenica)',
      color: '#5f7a4a',
      definicion: 'Forma que representa la inmensa mayoria de los casos: exceso de adiposidad por la interaccion de una predisposicion poligenica (cientos de variantes de efecto pequeno, con heredabilidad estimada del 40 al 70%) con un entorno que favorece el consumo calorico y limita la actividad fisica. No es una enfermedad de la voluntad sino de la regulacion del balance energetico.',
      fisiopatologia: 'La predisposicion genetica se expresa a traves del control hipotalamico del apetito y de la saciedad: variantes en FTO, MC4R y otros loci desplazan el punto de ajuste del peso corporal. Sobre ese sustrato, el entorno obesogenico produce un balance energetico positivo mantenido; el tejido adiposo se expande, se inflama y pierde capacidad de almacenamiento seguro, y la grasa se deposita en higado, musculo y visceras (lipotoxicidad), lo que genera resistencia a la insulina. Tras perder peso, la adaptacion metabolica y el aumento de la grelina empujan a recuperarlo.',
      epidemiologia: 'Mas de mil millones de personas viven con obesidad en el mundo y la prevalencia sigue subiendo. Mexico esta entre los paises con mayor prevalencia: alrededor de tres cuartas partes de los adultos tienen sobrepeso u obesidad segun las encuestas nacionales de salud y nutricion, con la carga concentrada en poblacion de menor nivel socioeconomico.',
      factores_riesgo: ['Predisposicion poligenica y antecedente familiar', 'Entorno alimentario con alta densidad energetica y ultraprocesados', 'Sedentarismo y tiempo de pantalla', 'Sueno insuficiente o de mala calidad y trabajo por turnos', 'Nivel socioeconomico bajo e inseguridad alimentaria', 'Estres cronico y trastorno por atracon', 'Ganancia de peso gestacional excesiva y peso al nacer en los extremos', 'Abandono del tabaco sin acompanamiento nutricional'],
      clinica: 'La propia adiposidad y las manifestaciones que dependen de ella: disnea de esfuerzo, ronquido y somnolencia diurna, dolor articular, intertrigo, acantosis nigricans en cuello y axilas (marcador de resistencia a la insulina) y limitacion funcional. La repercusion psicosocial y el estigma del peso forman parte del cuadro y condicionan el acceso a la atencion.',
      criterios_dx: 'Exceso de adiposidad confirmado por IMC de 30 o mas junto con al menos una medida de adiposidad central (o IMC mayor de 40, en el que se puede asumir), tras excluir causas secundarias y monogenicas por la anamnesis y la exploracion. Despues se determina si es preclinica o clinica y se estadifica con el sistema de Edmonton.',
      laboratorio: 'Glucemia y HbA1c, perfil lipidico con colesterol no-HDL, transaminasas con indice FIB-4, TSH, funcion renal con cociente albumina/creatinina, y vitamina D. El estudio hormonal ampliado solo si hay sospecha clinica de causa secundaria.',
      imagen: 'No es necesaria para el diagnostico. Se solicita dirigida a las complicaciones: elastografia hepatica, ecocardiograma o estudio osteoarticular segun la clinica.',
      complementarios: 'Estudio del sueno si el STOP-BANG es de 3 o mas; valoracion nutricional y de la actividad fisica; cribado de trastorno por atracon, depresion y ansiedad; y revision de los farmacos que favorecen la ganancia de peso.',
      dx_diferencial: 'Obesidad monogenica o sindromica (inicio muy precoz, hiperfagia intensa, talla baja, retraso del desarrollo), obesidad secundaria endocrina o farmacologica (ver esas fichas), edema y ascitis que inflan el peso, y sarcopenia con obesidad en el anciano, donde el IMC infraestima el problema.',
      tx_medico: 'Tratamiento cronico y estructurado: plan alimentario con deficit de 500 a 750 kcal/dia adaptado a las preferencias del paciente, actividad fisica de al menos 150 minutos semanales (300 para mantener el peso perdido) con trabajo de fuerza para preservar masa magra, y terapia conductual intensiva con 14 sesiones o mas en los primeros 6 meses. Sueno suficiente, manejo del estres y retirada o sustitucion de los farmacos que hacen ganar peso. El objetivo se define por la mejoria de la disfuncion, no por una cifra en la bascula.',
      tx_farmacologico: `Indicado desde un IMC de 30, o de 27 con comorbilidad, siempre anadido al tratamiento de base. Por eficacia creciente: orlistat (3 a 5%), naltrexona-bupropion (6%), liraglutida 3.0 mg diaria (8%), fentermina-topiramato (10%), <strong>semaglutida 2.4 mg semanal (15%)</strong> y <strong>tirzepatida 15 mg semanal (21%)</strong>. La semaglutida 2.4 mg redujo ademas los eventos cardiovasculares en obesidad sin diabetes (SELECT). Se escalona la dosis despacio para limitar los efectos digestivos, y el tratamiento se mantiene: al retirarlo se recupera cerca de dos tercios de lo perdido. Ver la Figura 2 de Definicion.`,
      tx_intervencionista: 'Cirugia metabolica desde un IMC de 35 con o sin comorbilidad, o de 30 a 34.9 con enfermedad metabolica (calculadora disponible): manga gastrica o bypass gastrico en Y de Roux, con perdida del 25 al 30% del peso total, remision de la diabetes en una proporcion alta y reduccion de la mortalidad a largo plazo. Alternativas endoscopicas (balon intragastrico, gastroplastia en manga) en casos seleccionados.',
      criterios_uci: 'No aplica a la obesidad en si. En el paciente critico condiciona la via aerea, la ventilacion, la dosificacion de farmacos y la profilaxis antitrombotica, que se ajustan al peso.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante cualquier ingreso: ajustar dosis al peso (en particular heparinas y antibioticos), prever la via aerea dificil y la ventilacion, movilizar precozmente, y aprovechar el contacto para iniciar o reactivar el tratamiento de la obesidad y derivar al alta.',
      seguimiento_ambulatorio: 'Visitas cada 1 a 3 meses durante la fase de perdida y despues al menos semestrales de por vida, con peso, cintura, presion arterial y analitica. Vigilar la masa magra, la adherencia y los efectos adversos, y planificar de forma explicita la fase de mantenimiento, que es donde se pierde el resultado.',
      pronostico: 'Con tratamiento sostenido la perdida de peso mejora o revierte la mayoria de las complicaciones y, por encima del 15%, reduce eventos cardiovasculares. Sin tratamiento cronico la recuperacion del peso es la regla, no la excepcion, y no indica fracaso del paciente sino de la estrategia.',
      algoritmo: ['Confirmar el exceso de adiposidad con IMC mas una medida de adiposidad central (cintura o indice cintura-talla)', 'Determinar si es preclinica o clinica y estadificar con el sistema de Edmonton; descartar causas secundarias y monogenicas', 'Cribar complicaciones: glucemia y HbA1c, lipidos, FIB-4, funcion renal, apnea del sueno', 'Base en todos: alimentacion con deficit calorico, actividad fisica con trabajo de fuerza y terapia conductual estructurada', 'Anadir farmaco desde IMC 30 (o 27 con comorbilidad) y valorar cirugia desde IMC 35 (o 30 con enfermedad metabolica); mantener el tratamiento de forma cronica']
    },
    {
      nombre: 'Obesidad monogenica y sindromica',
      color: '#6b3a5a',
      definicion: 'Formas raras de obesidad causadas por una alteracion de un solo gen de la via leptina-melanocortina (monogenicas) o por un sindrome genetico con obesidad entre sus rasgos (sindromicas). Importan mucho mas de lo que sugiere su frecuencia porque cambian el pronostico, el consejo genetico y, en algunos casos, permiten un tratamiento dirigido.',
      fisiopatologia: 'La via leptina-melanocortina traduce el estado de las reservas grasas en senal de saciedad: la leptina actua sobre las neuronas POMC del nucleo arcuato, que liberan alfa-MSH, que a su vez estimula el receptor MC4R. Las variantes en LEP, LEPR, POMC, PCSK1 o MC4R interrumpen esa cadena y producen hiperfagia intensa desde los primeros meses de vida. En las formas sindromicas (Prader-Willi, Bardet-Biedl, Alstrom) la obesidad se acompana de otros rasgos por alteraciones mas amplias del desarrollo o de la funcion ciliar.',
      epidemiologia: 'En conjunto explican una fraccion pequena de la obesidad, pero se concentran en los casos de inicio muy precoz y extremo. El deficit de MC4R es la causa monogenica mas frecuente. El Prader-Willi afecta a alrededor de 1 de cada 15.000 a 25.000 nacimientos.',
      factores_riesgo: ['Inicio de la obesidad antes de los 5 anos', 'Hiperfagia intensa y busqueda constante de comida', 'Consanguinidad o antecedente familiar de obesidad extrema precoz', 'Talla baja, retraso del desarrollo o discapacidad intelectual', 'Rasgos dismorficos, polidactilia o distrofia retiniana', 'Hipogonadismo hipogonadotropo o hipotonia neonatal', 'Insuficiencia suprarrenal o pelo rojizo (deficit de POMC)'],
      clinica: 'Obesidad grave de inicio en los primeros anos con hiperfagia desproporcionada. Cada entidad anade sus rasgos: el deficit de POMC, insuficiencia suprarrenal y pelo rojizo; el Prader-Willi, hipotonia neonatal con dificultad para alimentarse que despues vira a hiperfagia, talla baja, hipogonadismo y trastorno de conducta; el Bardet-Biedl, distrofia retiniana, polidactilia, enfermedad renal e hipogonadismo. El deficit de MC4R cursa con obesidad, hiperfagia y aumento de la masa magra y de la talla.',
      criterios_dx: 'Sospecha clinica por la edad de inicio, la intensidad de la hiperfagia y los rasgos asociados, confirmada con estudio genetico (panel de obesidad monogenica o secuenciacion) y, en el Prader-Willi, con analisis de metilacion del locus 15q11-q13. Medir leptina serica ayuda: esta indetectable en el deficit congenito de leptina, que es tratable con leptina recombinante.',
      laboratorio: 'Leptina serica, cortisol y ACTH (deficit de POMC), eje gonadal y tiroideo, funcion renal (Bardet-Biedl), y el panel genetico dirigido. El resto del estudio metabolico es el de cualquier obesidad.',
      imagen: 'Resonancia craneal si se sospecha lesion hipotalamica adquirida como alternativa diagnostica; ecografia renal en el Bardet-Biedl; edad osea y densitometria segun el sindrome.',
      complementarios: 'Consejo genetico familiar y valoracion multidisciplinar (endocrinologia pediatrica o de adultos, genetica, oftalmologia, psiquiatria y trabajo social). En el Prader-Willi, control estricto del acceso a la comida en el entorno.',
      dx_diferencial: 'Obesidad comun poligenica de inicio infantil, obesidad hipotalamica adquirida (craneofaringioma, cirugia o radioterapia de la region selar), sindrome de Cushing infantil y pseudohipoparatiroidismo tipo 1a.',
      tx_medico: 'La base es la misma de la obesidad comun, pero con expectativas ajustadas y con un control ambiental estructurado del acceso a los alimentos, especialmente en el Prader-Willi. El acompanamiento familiar y psicologico es parte del tratamiento, no un complemento.',
      tx_farmacologico: 'Tratamiento dirigido cuando existe: <strong>setmelanotida</strong> (agonista de MC4R) en los deficits de POMC, PCSK1 y LEPR y en el sindrome de Bardet-Biedl, con perdidas de peso y reduccion del hambre notables; <strong>metreleptina</strong> en el deficit congenito de leptina, donde la respuesta es espectacular. En el deficit de MC4R la setmelanotida no funciona si el receptor no responde. Los agonistas de GLP-1 pueden aportar beneficio adicional.',
      tx_intervencionista: 'La cirugia metabolica se individualiza mucho: los resultados son peores y mas variables que en la obesidad comun, y en el Prader-Willi las complicaciones y la reganancia son frecuentes, por lo que se plantea solo en centros con experiencia.',
      criterios_uci: 'No aplica de forma directa; el deficit de POMC con insuficiencia suprarrenal puede debutar con una crisis addisoniana.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la insuficiencia suprarrenal en el deficit de POMC durante cualquier estres o cirugia, y las complicaciones respiratorias en el Prader-Willi.',
      seguimiento_ambulatorio: 'Seguimiento de por vida en una unidad especializada, con vigilancia de las manifestaciones propias de cada sindrome (retina, rinon, eje gonadal, conducta) y apoyo continuado a la familia.',
      pronostico: 'Depende de la entidad. Las formas con tratamiento dirigido disponible han cambiado radicalmente de pronostico; en el resto, el objetivo es controlar la hiperfagia, prevenir las complicaciones y sostener la funcion y la calidad de vida.',
      algoritmo: ['Sospechar ante obesidad grave de inicio antes de los 5 anos con hiperfagia intensa, o con rasgos sindromicos asociados', 'Medir leptina serica y solicitar panel genetico dirigido; metilacion de 15q11-q13 si se sospecha Prader-Willi', 'Buscar las manifestaciones asociadas: insuficiencia suprarrenal, distrofia retiniana, enfermedad renal, hipogonadismo', 'Tratamiento dirigido si existe: setmelanotida en deficit de POMC, PCSK1 o LEPR y en Bardet-Biedl; metreleptina en deficit de leptina', 'Control ambiental del acceso a la comida, consejo genetico y seguimiento multidisciplinar de por vida']
    },
    {
      nombre: 'Obesidad secundaria (endocrina y farmacologica)',
      color: '#8a6a1f',
      definicion: 'Ganancia de peso atribuible a una enfermedad endocrina, a una lesion hipotalamica o a un farmaco, y no a la obesidad comun. Es poco frecuente como causa unica, pero identificarla cambia el tratamiento y a veces lo resuelve.',
      fisiopatologia: 'Cada causa actua por su mecanismo: el exceso de glucocorticoides redistribuye la grasa hacia el tronco y produce resistencia a la insulina y sarcopenia; el hipotiroidismo reduce el gasto energetico y retiene liquido; la lesion hipotalamica destruye el centro de la saciedad y produce hiperfagia con obesidad rapidamente progresiva; y los farmacos actuan sobre el apetito, la saciedad, el gasto energetico o el deposito de grasa. En la obesidad hipotalamica el peso escapa a las medidas habituales porque la senal de saciedad esta anatomicamente interrumpida.',
      epidemiologia: 'Menos del 5% de las obesidades tiene una causa endocrina identificable, pero la ganancia de peso inducida por farmacos es muy frecuente y a menudo pasa desapercibida en la revision de la medicacion.',
      factores_riesgo: ['Tratamiento con glucocorticoides, incluso en pautas cortas repetidas', 'Antipsicoticos de segunda generacion (olanzapina y clozapina, los de mayor riesgo)', 'Antidepresivos (mirtazapina, paroxetina, triciclicos) y litio', 'Antiepilepticos (valproato, gabapentina, pregabalina, carbamazepina)', 'Insulina, sulfonilureas, glinidas y pioglitazona', 'Betabloqueadores y algunos antihistaminicos', 'Cirugia, radioterapia o tumor de la region hipotalamo-hipofisaria', 'Hipotiroidismo no tratado, sindrome de Cushing y deficit de hormona de crecimiento'],
      clinica: 'Orienta a causa secundaria una ganancia de peso rapida y desproporcionada, un cambio temporal claro con el inicio de un farmaco o de una enfermedad, o la presencia de estigmas propios: cara de luna llena, giba dorsal, estrias vinosas anchas, debilidad proximal y fragilidad cutanea en el Cushing; bradicardia, piel seca, intolerancia al frio y estrenimiento en el hipotiroidismo; hiperfagia incoercible con antecedente de cirugia o tumor selar en la obesidad hipotalamica.',
      criterios_dx: 'Anamnesis farmacologica estructurada y busqueda de estigmas. El cribado hormonal no es de rutina: se solicita TSH en la mayoria, y cortisol libre urinario de 24 h, cortisol salival nocturno o supresion con 1 mg de dexametasona solo ante sospecha clinica de Cushing. La obesidad hipotalamica se diagnostica por el contexto (cirugia, radioterapia o tumor) mas la resonancia.',
      laboratorio: 'TSH y T4 libre; pruebas de cribado de hipercortisolismo si hay sospecha; testosterona total en el varon; prolactina si hay hipogonadismo o galactorrea; y estudio del eje hipofisario completo tras cirugia o radioterapia selar.',
      imagen: 'Resonancia de la region selar e hipotalamica ante sospecha de obesidad hipotalamica o de patologia hipofisaria; tomografia suprarrenal si el estudio hormonal orienta a un origen suprarrenal.',
      complementarios: 'Revision farmacologica estructurada con el prescriptor para sustituir, cuando sea posible, por alternativas de menor impacto ponderal: aripiprazol, ziprasidona o lurasidona en lugar de olanzapina; lamotrigina o topiramato en lugar de valproato; agonista de GLP-1 o inhibidor de SGLT2 en lugar de sulfonilurea o insulina cuando el control lo permita.',
      dx_diferencial: 'Obesidad comun con ganancia rapida por cambio de habitos, edema o ascitis, sindrome de ovario poliquistico, hipotiroidismo subclinico (que rara vez justifica una ganancia importante) y depresion con hiperfagia.',
      tx_medico: 'Tratar la causa: reponer levotiroxina en el hipotiroidismo, tratar el hipercortisolismo, y retirar o sustituir el farmaco responsable cuando sea clinicamente posible, sin sacrificar el control de la enfermedad de base. Despues, si el exceso de adiposidad persiste, se trata como una obesidad comun.',
      tx_farmacologico: 'Los agonistas del receptor de GLP-1 y la tirzepatida son eficaces tambien aqui, y son especialmente utiles para contrarrestar la ganancia de peso inducida por antipsicoticos, donde la metformina tambien tiene evidencia. En la obesidad hipotalamica la respuesta suele ser menor; se han empleado con resultados variables la setmelanotida, los agonistas de GLP-1 y las combinaciones con estimulantes.',
      tx_intervencionista: 'Cirugia de la lesion causal cuando procede (adenoma hipofisario, tumor suprarrenal). La cirugia metabolica se puede plantear en la obesidad hipotalamica refractaria, con resultados mas modestos que en la obesidad comun.',
      criterios_uci: 'No aplica a la obesidad secundaria en si; si a la crisis addisoniana tras retirar corticoides o al hipotiroidismo grave con coma mixedematoso.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Aprovechar el ingreso para revisar de forma sistematica la medicacion que favorece la ganancia de peso y dejar por escrito las sustituciones acordadas con el especialista correspondiente.',
      seguimiento_ambulatorio: 'Repesar y reevaluar 3 a 6 meses despues de corregir la causa. Si el peso no mejora, asumir que coexiste una obesidad comun y tratarla como tal, sin seguir atribuyendo todo a la causa secundaria.',
      pronostico: 'Bueno cuando la causa es reversible y se corrige pronto. La obesidad hipotalamica es la de peor pronostico porque el mecanismo de saciedad esta anatomicamente danado y responde mal a todas las medidas.',
      algoritmo: ['Ante ganancia de peso rapida o desproporcionada: anamnesis farmacologica estructurada y busqueda de estigmas endocrinos', 'Solicitar TSH; cribado de hipercortisolismo solo si hay sospecha clinica; resonancia selar si se sospecha origen hipotalamico', 'Tratar la causa: levotiroxina, tratamiento del hipercortisolismo, o retirada o sustitucion del farmaco responsable', 'Sustituir por alternativas de menor impacto ponderal sin perder el control de la enfermedad de base', 'Reevaluar a los 3 a 6 meses; si el peso persiste, tratar como obesidad comun']
    },
    {
      nombre: 'Apnea obstructiva del sueno e hipoventilacion por obesidad',
      color: '#3d5a73',
      definicion: 'Complicaciones respiratorias de la obesidad (ver la ficha de Obesidad comun). La apnea obstructiva del sueno es el colapso repetido de la via aerea superior durante el sueno; el sindrome de hipoventilacion por obesidad anade hipercapnia diurna (PaCO2 mayor de 45 mmHg) en un paciente con IMC de 30 o mas, una vez descartadas otras causas de hipoventilacion.',
      fisiopatologia: 'El deposito graso peri­faringeo estrecha la via aerea y la grasa abdominal y toracica reduce la capacidad residual funcional, con lo que el pulmon trabaja en un volumen bajo y la via aerea se colapsa con mas facilidad al dormir. En la hipoventilacion se suma una respuesta ventilatoria central embotada frente al CO2 y una carga mecanica que el sistema no logra vencer, de modo que la hipercapnia deja de compensarse durante el dia. No se re-explica aqui el mecanismo de la obesidad, ya descrito en su ficha.',
      epidemiologia: 'La apnea obstructiva afecta a una proporcion muy alta de los pacientes con obesidad grave y esta infradiagnosticada. La hipoventilacion aparece en cerca del 10 al 20% de los pacientes con apnea y obesidad grave, y su mortalidad sin tratamiento es considerablemente mayor.',
      factores_riesgo: ['IMC elevado y adiposidad de cuello (perimetro cervical grande)', 'Sexo masculino y edad media', 'Menopausia en la mujer', 'Retrognatia y alteraciones craneofaciales', 'Consumo de alcohol y de sedantes o de opioides', 'Hipotiroidismo y acromegalia', 'Congestion nasal cronica'],
      clinica: 'Ronquido intenso, apneas presenciadas, despertares con ahogo, sueno no reparador, somnolencia diurna excesiva, cefalea matutina, nicturia, irritabilidad y deterioro de la concentracion. En la hipoventilacion se anaden disnea, edemas, poliglobulia y signos de cor pulmonale, y con frecuencia se descubre tras una descompensacion respiratoria hipercapnica.',
      criterios_dx: 'Apnea: poligrafia respiratoria o polisomnografia con indice de apnea-hipopnea de 5 o mas eventos por hora con sintomas, o de 15 o mas con independencia de los sintomas; se gradua en leve (5 a 15), moderada (15 a 30) y grave (mas de 30). Hipoventilacion: IMC de 30 o mas con PaCO2 diurna mayor de 45 mmHg, tras excluir enfermedad pulmonar, neuromuscular o farmacologica que la explique; un bicarbonato serico elevado sirve de cribado.',
      laboratorio: 'Gasometria arterial diurna (imprescindible para el diagnostico de hipoventilacion), bicarbonato serico como cribado, hemograma (poliglobulia), TSH y funcion renal.',
      imagen: 'Radiografia de torax; ecocardiograma si se sospecha hipertension pulmonar o cor pulmonale, frecuentes en la hipoventilacion de larga evolucion.',
      complementarios: 'Cuestionario STOP-BANG o escala de Epworth para el cribado; valoracion por neumologia y unidad del sueno; y evaluacion de la aptitud para conducir o para trabajos de riesgo, que es una obligacion medica y legal.',
      dx_diferencial: 'Apnea central del sueno, sindrome de piernas inquietas, narcolepsia, hipoventilacion por enfermedad neuromuscular o de la pared toracica, EPOC con hipercapnia, e hipotiroidismo grave.',
      tx_medico: 'La perdida de peso es el unico tratamiento que actua sobre la causa: reducciones del 10% o mas mejoran de forma significativa el indice de apnea-hipopnea y pueden resolver los casos leves. Se acompana de higiene del sueno, evitar alcohol y sedantes, terapia posicional si la apnea es dependiente de la posicion, y tratamiento de la congestion nasal.',
      tx_farmacologico: 'No hay farmaco que trate la apnea directamente, pero los agonistas del receptor de GLP-1 y la tirzepatida, al producir perdidas de peso grandes, han demostrado reducir de forma marcada el indice de apnea-hipopnea. Evitar sedantes, benzodiacepinas y opioides, que empeoran las apneas y la hipoventilacion.',
      tx_intervencionista: 'Presion positiva continua (CPAP) como tratamiento de eleccion de la apnea moderada o grave. En la hipoventilacion, ventilacion no invasiva binivel, sobre todo si persiste la hipercapnia con CPAP o si el debut fue una insuficiencia respiratoria aguda. Cirugia metabolica cuando esta indicada; cirugia de la via aerea superior o dispositivos de avance mandibular en casos seleccionados.',
      criterios_uci: 'Insuficiencia respiratoria hipercapnica aguda o agudizada, que se maneja con ventilacion no invasiva en area monitorizada (ver el tema de Ventilacion Mecanica).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Riesgo perioperatorio elevado: prever via aerea dificil, evitar sedantes y opioides o usarlos con monitorizacion, mantener la CPAP o la ventilacion domiciliaria durante el ingreso, y vigilar la desaturacion nocturna postoperatoria.',
      seguimiento_ambulatorio: 'Control de la adherencia y de la eficacia del dispositivo (horas de uso e indice residual), reevaluacion del estudio del sueno tras perdidas de peso importantes (puede permitir retirar la CPAP), y gasometria de control en la hipoventilacion.',
      pronostico: 'La apnea tratada mejora la somnolencia, la calidad de vida y la presion arterial. La hipoventilacion no tratada tiene una mortalidad alta que la ventilacion no invasiva y la perdida de peso reducen de forma sustancial.',
      algoritmo: ['Cribar con STOP-BANG y Epworth a todo paciente con obesidad; medir bicarbonato serico como cribado de hipoventilacion', 'Confirmar con poligrafia o polisomnografia; gasometria arterial diurna si se sospecha hipoventilacion', 'Perdida de peso como tratamiento causal; evitar alcohol, sedantes y opioides', 'CPAP en la apnea moderada o grave; ventilacion no invasiva binivel en la hipoventilacion', 'Vigilar la adherencia, ajustar tras perdidas de peso importantes y extremar precauciones en el perioperatorio']
    },
    {
      nombre: 'Enfermedad hepatica esteatosica metabolica',
      color: '#8a6a1f',
      definicion: 'Complicacion hepatica de la obesidad y de la disfuncion metabolica (ver la ficha de Obesidad comun): acumulacion de grasa en mas del 5% de los hepatocitos en una persona con al menos un factor de riesgo cardiometabolico. Su forma inflamatoria (esteatohepatitis) puede progresar a fibrosis, cirrosis y hepatocarcinoma. La nomenclatura de 2023 sustituyo los terminos basados en el alcohol por una definicion positiva basada en la disfuncion metabolica.',
      fisiopatologia: 'La resistencia a la insulina y el desbordamiento de la capacidad del tejido adiposo llevan acidos grasos libres al higado, donde se acumulan como trigliceridos. Sobre esa esteatosis, la lipotoxicidad, el estres oxidativo, la disfuncion mitocondrial y las senales del intestino activan la inflamacion y la fibrogenesis estrellada. El mecanismo de la obesidad esta descrito en su ficha; lo especifico aqui es que el higado se convierte en deposito ectopico de grasa.',
      epidemiologia: 'Es la hepatopatia cronica mas frecuente del mundo y afecta a la mayoria de los pacientes con obesidad y diabetes tipo 2. Solo una minoria progresa a fibrosis avanzada, pero al ser tan prevalente ya es una de las principales causas de cirrosis y de trasplante hepatico.',
      factores_riesgo: ['Obesidad, sobre todo de distribucion visceral', 'Diabetes tipo 2 y prediabetes', 'Dislipidemia aterogenica e hipertension arterial', 'Sindrome de ovario poliquistico y apnea del sueno', 'Variantes geneticas (PNPLA3, TM6SF2, HSD17B13)', 'Sarcopenia', 'Consumo de alcohol concomitante, que multiplica el riesgo de progresion'],
      clinica: 'Casi siempre asintomatica; se detecta por transaminasas elevadas o por esteatosis en una ecografia pedida por otro motivo. Puede cursar con astenia o molestia en el hipocondrio derecho. Cuando aparecen los signos de hepatopatia avanzada (aranas vasculares, ascitis, encefalopatia) la enfermedad ya esta establecida, y el hepatocarcinoma puede aparecer incluso sin cirrosis.',
      criterios_dx: 'Esteatosis demostrada por imagen o histologia mas al menos un criterio cardiometabolico, tras valorar el consumo de alcohol y descartar otras hepatopatias. Lo determinante no es diagnosticar la esteatosis sino <strong>estratificar la fibrosis</strong>: el indice FIB-4 como primer paso en todo paciente con obesidad o diabetes, y elastografia si el FIB-4 es indeterminado o alto.',
      laboratorio: 'Transaminasas, GGT, plaquetas y albumina para el FIB-4; perfil metabolico completo; y serologias virales, ferritina con indice de saturacion, autoanticuerpos, ceruloplasmina y alfa-1-antitripsina para descartar otras causas cuando proceda.',
      imagen: 'Ecografia como primera aproximacion (poco sensible por debajo del 20% de esteatosis); elastografia de transicion con parametro de atenuacion controlada para cuantificar grasa y rigidez; resonancia con fraccion de grasa o elastografia por resonancia en casos seleccionados y en ensayos.',
      complementarios: 'Biopsia hepatica solo cuando persiste la duda diagnostica o hay sospecha de otra hepatopatia coexistente. Cribado de varices y de hepatocarcinoma cuando ya hay cirrosis (ver el tema de Cirrosis Hepatica).',
      dx_diferencial: 'Hepatopatia alcoholica (y las formas mixtas, que hoy tienen categoria propia), hepatitis viral cronica, hepatitis autoinmune, hemocromatosis, enfermedad de Wilson, deficit de alfa-1-antitripsina y esteatosis por farmacos (metotrexato, tamoxifeno, amiodarona, corticoides).',
      tx_medico: 'La perdida de peso es el tratamiento central y funciona por umbrales: un 5% reduce la esteatosis, un 7 a 10% resuelve la esteatohepatitis y un 10% o mas puede mejorar la fibrosis. Se acompana de dieta mediterranea, restriccion de azucares libres y fructosa, ejercicio (util incluso sin perdida de peso), abstinencia o reduccion estricta del alcohol, y control de la diabetes y de los lipidos.',
      tx_farmacologico: 'Resmetirom (agonista selectivo del receptor tiroideo beta) es el primer farmaco aprobado especificamente para la esteatohepatitis con fibrosis significativa. Los agonistas del receptor de GLP-1 y la tirzepatida mejoran la esteatohepatitis a traves de la perdida de peso y del control metabolico; la pioglitazona tiene evidencia en pacientes con diabetes tipo 2; y la vitamina E se ha usado en no diabeticos sin cirrosis. Las estatinas son seguras y estan indicadas por el riesgo cardiovascular, que es la primera causa de muerte en estos pacientes.',
      tx_intervencionista: 'La cirugia metabolica produce la mejoria histologica mas consistente, incluida la regresion de la fibrosis en una proporcion importante. El trasplante hepatico en la cirrosis descompensada o el hepatocarcinoma dentro de criterios.',
      criterios_uci: 'No aplica salvo en la descompensacion de una cirrosis ya establecida.',
      criterios_tips: 'Los propios de la hipertension portal en la fase de cirrosis (ver el tema de Cirrosis Hepatica).',
      seguimiento_hospitalario: 'En un ingreso por otra causa, calcular el FIB-4 y dejar planificada la estratificacion de fibrosis al alta: es una de las oportunidades perdidas mas frecuentes.',
      seguimiento_ambulatorio: 'FIB-4 cada 1 a 3 anos segun el riesgo, elastografia periodica si hay fibrosis intermedia, y derivacion a hepatologia si el FIB-4 supera 2.67 o la elastografia indica fibrosis avanzada. Control estricto del riesgo cardiovascular, que es lo que mata a la mayoria.',
      pronostico: 'La mayoria de los pacientes no progresa. El determinante pronostico es el <strong>estadio de fibrosis</strong>, no la inflamacion ni la cantidad de grasa. La primera causa de muerte es cardiovascular, no hepatica, salvo en los estadios avanzados.',
      algoritmo: ['Calcular el FIB-4 en todo paciente con obesidad o diabetes, aunque las transaminasas sean normales', 'FIB-4 menor de 1.3: riesgo bajo, repetir en 1 a 3 anos. Indeterminado o mayor de 2.67: elastografia', 'Descartar otras hepatopatias y cuantificar el consumo de alcohol', 'Perdida de peso por umbrales (5% esteatosis, 7 a 10% esteatohepatitis, 10% o mas fibrosis) con dieta mediterranea y ejercicio', 'Resmetirom en esteatohepatitis con fibrosis significativa; agonistas de GLP-1 o tirzepatida; pioglitazona si hay diabetes; estatina por el riesgo cardiovascular']
    },
    {
      nombre: 'Complicaciones mecanicas, reproductivas y oncologicas',
      color: '#6b4a2e',
      definicion: 'Conjunto de complicaciones de la obesidad (ver la ficha de Obesidad comun) que no son cardiometabolicas ni respiratorias: las derivadas de la carga mecanica sobre articulaciones y tejidos, las que afectan a la funcion reproductiva, y el exceso de riesgo oncologico. Son las que mas pesan en la calidad de vida y las que menos se buscan.',
      fisiopatologia: 'La carga mecanica acelera el desgaste articular y dificulta el retorno venoso y linfatico. En lo reproductivo, el tejido adiposo aromatiza androgenos a estrogenos y la resistencia a la insulina eleva los androgenos ovaricos y baja la globulina transportadora de hormonas sexuales, lo que explica el sindrome de ovario poliquistico en la mujer y el hipogonadismo en el varon. En lo oncologico intervienen la hiperinsulinemia con exceso de senal por IGF-1, el hiperestrogenismo y la inflamacion cronica. El mecanismo de la obesidad esta en su ficha.',
      epidemiologia: 'La artrosis de rodilla es una de las causas mas frecuentes de discapacidad asociada a la obesidad. El grupo de trabajo de la IARC reconoce trece localizaciones tumorales con evidencia suficiente de asociacion con el exceso de adiposidad, entre ellas endometrio, mama posmenopausica, colon y recto, rinon, higado, pancreas y adenocarcinoma de esofago.',
      factores_riesgo: ['IMC elevado y su duracion acumulada a lo largo de la vida', 'Distribucion central de la grasa', 'Alteraciones de la alineacion articular y antecedentes de lesion', 'Sedentarismo con perdida de masa muscular estabilizadora', 'Hiperinsulinemia y resistencia a la insulina', 'Hiperestrogenismo en la mujer posmenopausica', 'Reflujo gastroesofagico cronico (para el adenocarcinoma de esofago)'],
      clinica: 'Mecanicas: gonalgia y coxalgia mecanicas, lumbalgia, insuficiencia venosa con edema y dermatitis de estasis, linfedema, celulitis de repeticion, intertrigo, hidradenitis supurativa, hernias de pared, reflujo e incontinencia urinaria de esfuerzo. Reproductivas: oligomenorrea, hirsutismo e infertilidad en la mujer; disminucion de la libido y disfuncion erectil en el varon; complicaciones obstetricas (diabetes gestacional, preeclampsia, macrosomia, cesarea). Oncologicas: las propias del tumor, a menudo diagnosticado mas tarde porque la exploracion y el cribado son mas dificiles.',
      criterios_dx: 'Los propios de cada entidad. Lo relevante es <strong>buscarlas de forma activa</strong> en la consulta de obesidad: preguntar por dolor articular y limitacion, por ciclos menstruales y funcion sexual, y verificar que el paciente esta al dia en los programas de cribado oncologico, que cumple peor y con mas dificultad tecnica.',
      laboratorio: 'Segun la sospecha: androgenos, globulina transportadora de hormonas sexuales, LH y FSH y ecografia en el sindrome de ovario poliquistico; testosterona total y libre matutina en el varon; y el estudio propio de cada tumor.',
      imagen: 'Radiografia de las articulaciones sintomaticas; ecografia Doppler venosa ante edema asimetrico; y las pruebas de cribado oncologico correspondientes, teniendo en cuenta que la mamografia, la ecografia y la colonoscopia son tecnicamente mas dificiles y pueden requerir adaptaciones.',
      complementarios: 'Fisioterapia y programa de ejercicio adaptado (trabajo en descarga, agua, bicicleta); valoracion por ginecologia, urologia o cirugia segun corresponda; y revision explicita del calendario de cribado oncologico en cada visita.',
      dx_diferencial: 'Artritis inflamatoria frente a artrosis mecanica, trombosis venosa profunda frente a insuficiencia venosa cronica, y las causas no relacionadas con la obesidad de amenorrea, hirsutismo o hipogonadismo.',
      tx_medico: 'La perdida de peso mejora todas: reduce el dolor y la funcion en la artrosis (cada kilo perdido descarga varios kilos de fuerza en la rodilla al caminar), restaura la ovulacion y la fertilidad en una proporcion alta de mujeres con sindrome de ovario poliquistico, mejora la testosterona en el varon y reduce el riesgo oncologico a largo plazo. Se acompana de ejercicio adaptado, fisioterapia, medidas de compresion en la insuficiencia venosa y cuidado de los pliegues.',
      tx_farmacologico: 'Analgesia escalonada para el dolor articular, evitando el uso cronico de antiinflamatorios; metformina y anticonceptivos combinados en el sindrome de ovario poliquistico segun el objetivo; y tratamiento del hipogonadismo tras confirmarlo, teniendo en cuenta que la perdida de peso por si sola suele mejorar la testosterona.',
      tx_intervencionista: 'Artroplastia de rodilla o cadera cuando la artrosis es incapacitante (los resultados mejoran si se pierde peso antes); cirugia de hernias y de hidradenitis; y tecnicas de reproduccion asistida cuando la perdida de peso no basta.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En el ingreso quirurgico, prevencion activa de las ulceras por presion, del linfedema y de la trombosis con dosis de heparina ajustadas al peso, y movilizacion precoz.',
      seguimiento_ambulatorio: 'Revisar en cada visita el dolor y la funcion, la salud reproductiva y el cumplimiento del cribado oncologico. Insistir en el ejercicio de fuerza para preservar masa muscular, sobre todo durante las fases de perdida de peso rapida.',
      pronostico: 'Muy sensible a la perdida de peso: la funcion articular, la fertilidad y la calidad de vida mejoran de forma proporcional. El riesgo oncologico disminuye tras perdidas de peso mantenidas, y la cirugia metabolica se ha asociado a menor incidencia y mortalidad por cancer.',
      algoritmo: ['Buscar de forma activa el dolor articular, la limitacion funcional, la salud reproductiva y el estado del cribado oncologico', 'Perdida de peso como tratamiento transversal: mejora la artrosis, la fertilidad, el hipogonadismo y el riesgo oncologico', 'Ejercicio adaptado con trabajo de fuerza y fisioterapia; compresion en la insuficiencia venosa; cuidado de los pliegues', 'Tratar cada entidad segun su guia; evitar el uso cronico de antiinflamatorios', 'Adaptar y asegurar el cribado oncologico, que se cumple peor y es tecnicamente mas dificil en la obesidad']
    },
    {
      nombre: 'Complicaciones del tratamiento',
      color: '#8c3a34',
      definicion: 'Efectos adversos y consecuencias del propio tratamiento de la obesidad (ver la ficha de Obesidad comun): los de los farmacos, en especial los agonistas del receptor de GLP-1 y la tirzepatida, y los de la cirugia metabolica, que exige un seguimiento nutricional de por vida. Incluye tambien la reganancia de peso al suspender el tratamiento, que es una propiedad de la enfermedad y no un fracaso del paciente.',
      fisiopatologia: 'Los agonistas de GLP-1 enlentecen el vaciamiento gastrico y actuan en el area postrema, lo que explica las nauseas y los vomitos. La cirugia restringe el volumen y, en las tecnicas con derivacion, reduce la superficie de absorcion y altera la senal enteroinsular: de ahi los deficits nutricionales y la hipoglucemia posprandial hiperinsulinemica. La perdida de peso rapida, sea cual sea el medio, favorece la litiasis biliar y la perdida de masa magra y de hueso.',
      epidemiologia: 'Los efectos digestivos de los agonistas de GLP-1 son muy frecuentes pero casi siempre leves y transitorios, y solo una minoria abandona por ellos. Los deficits nutricionales tras cirugia son la regla si no se suplementa, y la reganancia significativa afecta a una parte relevante de los operados a partir del segundo o tercer ano.',
      factores_riesgo: ['Escalado rapido de dosis del agonista de GLP-1 o de la tirzepatida', 'Antecedente de pancreatitis, gastroparesia o litiasis biliar', 'Antecedente personal o familiar de carcinoma medular de tiroides o MEN2 (contraindicacion)', 'Tecnicas quirurgicas con derivacion (bypass, derivacion biliopancreatica) frente a la manga', 'Falta de adherencia a la suplementacion y al seguimiento tras la cirugia', 'Perdida de peso muy rapida (litiasis y perdida de masa magra)', 'Trastorno por consumo de alcohol o antecedente de trastorno de la conducta alimentaria', 'Retirada del farmaco sin plan de mantenimiento'],
      clinica: 'Farmacos: nauseas, vomitos, estrenimiento o diarrea, dispepsia; con menor frecuencia colelitiasis sintomatica y pancreatitis. Cirugia: sindrome de dumping precoz (rubor, taquicardia, dolor abdominal y diarrea tras la comida) y tardio o hipoglucemia posprandial hiperinsulinemica; anemia, neuropatia y ataxia por deficits de hierro, B12, tiamina, cobre o vitaminas liposolubles; osteoporosis; estenosis, ulcera marginal, hernia interna con obstruccion, y reflujo (mas tras la manga gastrica). Ademas, perdida de masa magra y flacidez cutanea con impacto psicologico.',
      criterios_dx: 'Clinico y analitico segun la sospecha. Ante dolor abdominal en un operado hay que pensar siempre en <strong>hernia interna</strong>, que puede cursar con estudios normales y requiere un umbral bajo para la exploracion quirurgica. Ante sintomas neurologicos precoces tras la cirugia, descartar deficit de tiamina antes de administrar glucosa.',
      laboratorio: 'Tras cirugia y de por vida: hemograma, ferritina y hierro, vitamina B12, folato, calcio, vitamina D y hormona paratiroidea, cinc, cobre, vitamina A y tiamina segun la tecnica. Amilasa y lipasa si hay dolor abdominal con sospecha de pancreatitis; glucemia durante los sintomas si se sospecha hipoglucemia posprandial.',
      imagen: 'Ecografia abdominal ante dolor o sospecha de litiasis; tomografia con contraste oral e intravenoso ante sospecha de hernia interna u obstruccion; endoscopia ante reflujo, disfagia o sospecha de ulcera marginal o estenosis; densitometria periodica.',
      complementarios: 'Seguimiento por un equipo multidisciplinar con nutricion clinica; educacion sobre el fraccionamiento de las comidas, la masticacion y la separacion de los liquidos; y valoracion de salud mental, incluido el riesgo de trastorno por consumo de alcohol, que aumenta tras el bypass.',
      dx_diferencial: 'Distinguir las nauseas del escalado de dosis de una gastroparesia establecida o de una obstruccion; la hipoglucemia posprandial del dumping precoz; y la reganancia por adaptacion fisiologica de la debida a dilatacion del reservorio o a un cambio de habitos.',
      tx_medico: 'Prevencion sobre todo: escalado lento de la dosis, comidas pequenas y bajas en grasa, y buena hidratacion para los efectos digestivos; suplementacion sistematica de por vida tras la cirugia (multivitaminico, hierro, calcio con vitamina D y B12, ajustados a la tecnica); y ejercicio de fuerza con aporte proteico suficiente para preservar masa magra durante la perdida.',
      tx_farmacologico: 'Antiemeticos y ajuste o pausa del escalado en los efectos digestivos; inhibidores de la bomba de protones y profilaxis de la ulcera marginal tras el bypass; acido ursodesoxicolico para prevenir la litiasis durante la perdida rapida en pacientes seleccionados. En la hipoglucemia posprandial, dieta con carbohidratos de bajo indice glucemico fraccionada, y acarbosa o analogos de somatostatina en los casos refractarios. En la reganancia, reintroducir o intensificar el tratamiento farmacologico.',
      tx_intervencionista: 'Colecistectomia en la litiasis sintomatica; dilatacion endoscopica de las estenosis; cirugia urgente ante hernia interna con obstruccion; y cirugia de revision o reconversion en casos seleccionados de reganancia o de complicacion mecanica. Cirugia plastica reparadora tras la estabilizacion del peso.',
      criterios_uci: 'Complicaciones quirurgicas graves (fuga anastomotica, obstruccion con isquemia, sepsis abdominal), pancreatitis grave, o encefalopatia de Wernicke por deficit de tiamina.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En todo operado que ingresa, revisar la suplementacion, administrar tiamina antes que glucosa si hay vomitos prolongados o desnutricion, y mantener un umbral bajo para la imagen ante dolor abdominal.',
      seguimiento_ambulatorio: 'Tras cirugia: controles a 1, 3, 6 y 12 meses y despues anuales de por vida, con analitica de micronutrientes y densitometria periodica. Con farmacos: vigilar tolerancia y adherencia, y planificar de forma explicita el mantenimiento a largo plazo en vez de suspender por objetivo alcanzado.',
      pronostico: 'La mayoria de los efectos adversos son manejables y no obligan a suspender. El riesgo real es doble: abandonar un tratamiento eficaz por efectos leves y evitables, o perder de vista a un paciente operado que dejara de suplementarse y desarrollara deficits graves anos despues.',
      algoritmo: ['Escalar la dosis del agonista de GLP-1 o de la tirzepatida despacio y ajustar la dieta para limitar los efectos digestivos', 'Suplementacion sistematica y de por vida tras la cirugia, con analitica de micronutrientes en cada control', 'Dolor abdominal en un operado: pensar en hernia interna y tener umbral bajo para la tomografia y la cirugia', 'Sintomas neurologicos tras vomitos prolongados: tiamina antes que glucosa', 'Planificar el mantenimiento: la reganancia al suspender es fisiologica, no un fracaso del paciente']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La obesidad se maneja de forma ambulatoria y cronica, pero el hospital es donde se hacen visibles sus consecuencias y donde mas se descuida como diagnostico. El ingreso es a la vez un periodo de riesgo especifico (via aerea, ventilacion, dosificacion, trombosis, piel) y una oportunidad de iniciar o reactivar un tratamiento que casi nunca se prescribe al alta.',
    parametros: ['Registrar peso, talla, IMC y perimetro de cintura al ingreso: sin dato no hay diagnostico ni seguimiento', 'Dosificar los farmacos segun el parametro correcto (peso real, ajustado o ideal segun el farmaco), en particular heparinas de bajo peso molecular, antibioticos y anestesicos', 'Profilaxis antitrombotica con dosis ajustada al peso y movilizacion precoz', 'Prever la via aerea dificil y la desaturacion rapida; mantener la CPAP o la ventilacion no invasiva domiciliaria durante el ingreso', 'Evitar sedantes y opioides o usarlos con monitorizacion en el paciente con apnea o hipoventilacion', 'Prevencion activa de ulceras por presion, intertrigo y lesiones cutaneas en pliegues', 'Comprobar que el mobiliario, la cama, la bascula y la mesa quirurgica son adecuados: la falta de equipamiento es una causa evitable de mala atencion', 'En el paciente operado de cirugia metabolica: revisar la suplementacion y administrar tiamina antes que glucosa si hay vomitos prolongados', 'Calcular el indice FIB-4 y solicitar HbA1c y perfil lipidico si no hay datos recientes', 'Al alta: diagnostico de obesidad en el informe, plan de tratamiento explicito y cita de seguimiento; y lenguaje centrado en la persona, sin estigma'],
    criterios_uci_general: 'No los determina la obesidad en si, sino sus complicaciones: insuficiencia respiratoria hipercapnica, complicaciones quirurgicas graves, o cualquier proceso agudo en el que la obesidad dificulte el soporte (via aerea, ventilacion, accesos vasculares, imagen).',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'La obesidad grave puede ser una barrera para el trasplante de organo solido; en esos casos la cirugia metabolica se usa como puente para alcanzar los criterios de inclusion. El trasplante hepatico corresponde a la cirrosis por enfermedad hepatica esteatosica metabolica.',
    prevencion: 'Primaria: entorno alimentario y politicas de salud publica (etiquetado frontal, impuestos a bebidas azucaradas, regulacion de la publicidad dirigida a menores), promocion de la actividad fisica y sueno suficiente desde la infancia, con atencion a la ganancia de peso gestacional y a los primeros anos de vida. Secundaria: medir peso, talla y cintura de forma sistematica en toda consulta para detectar la ganancia antes de que se consolide, y actuar en los momentos de riesgo (embarazo, menopausia, abandono del tabaco, inicio de farmacos que hacen ganar peso, inmovilizacion). Terciaria: tratar la obesidad como enfermedad cronica, con tratamiento sostenido y seguimiento de por vida, y erradicar el estigma del peso en la atencion sanitaria, que retrasa la consulta y empeora los resultados.'
  }
};

export const compCites = {
  'Obesidad comun (poligenica)': [0, 2, 3, 4],
  'Obesidad monogenica y sindromica': [14, 15],
  'Obesidad secundaria (endocrina y farmacologica)': [7, 0],
  'Apnea obstructiva del sueno e hipoventilacion por obesidad': [18, 19],
  'Enfermedad hepatica esteatosica metabolica': [16, 17],
  'Complicaciones mecanicas, reproductivas y oncologicas': [20, 0],
  'Complicaciones del tratamiento': [21, 22, 12, 13]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion por indice de masa corporal (calculadora disponible)': [0, 7],
  'Adiposidad central: cintura e indice cintura-talla (calculadora disponible)': [0],
  'Obesidad preclinica frente a clinica (comision de The Lancet, 2025)': [0],
  'Sistema de estadificacion de Edmonton (calculadora disponible)': [1],
  'Indicacion de cirugia metabolica (ASMBS/IFSO 2022; calculadora disponible)': [5, 6]
};
export const escalaCalc = {
  'Clasificacion por indice de masa corporal (calculadora disponible)': 'imc-cintura',
  'Adiposidad central: cintura e indice cintura-talla (calculadora disponible)': 'imc-cintura',
  'Sistema de estadificacion de Edmonton (calculadora disponible)': 'eoss',
  'Indicacion de cirugia metabolica (ASMBS/IFSO 2022; calculadora disponible)': 'cirugia-metabolica'
};
export const compGroups = [
  { name: 'Formas de obesidad', items: ['Obesidad comun (poligenica)', 'Obesidad monogenica y sindromica', 'Obesidad secundaria (endocrina y farmacologica)'] },
  { name: 'Complicaciones propias', items: ['Apnea obstructiva del sueno e hipoventilacion por obesidad', 'Enfermedad hepatica esteatosica metabolica', 'Complicaciones mecanicas, reproductivas y oncologicas', 'Complicaciones del tratamiento'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las formas de obesidad: la comun poligenica, que explica la inmensa mayoria de los casos; las monogenicas y sindromicas, raras pero con tratamiento dirigido en algunos casos; y la secundaria a una enfermedad endocrina, a una lesion hipotalamica o a un farmaco. Las cuatro ultimas son las complicaciones propias de la obesidad: respiratorias, hepaticas, mecanicas y reproductivas y oncologicas, mas las del propio tratamiento. Las complicaciones cardiometabolicas se desarrollan en el tema del sindrome cardiovascular-renal-metabolico.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Evaluacion' },
  { id: 'clasificacion', label: 'Clasificacion' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'OBESIDAD', color: '#5f7a4a', target: 'definicion' },
  branches: [
    { title: 'Como se mide', sub: 'El IMC no basta', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'IMC y adiposidad central', sub: 'Cintura e indice cintura-talla', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Preclinica frente a clinica', sub: 'Comision de The Lancet 2025', color: '#5f7a4a', target: 'clasificacion' },
      { title: 'Estadificacion de Edmonton', sub: 'Gradua el dano, no el peso', color: '#8a6a1f', target: 'clasificacion' }
    ] },
    { title: 'Formas', sub: 'Una comun y dos que hay que reconocer', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Comun poligenica', sub: 'La inmensa mayoria', color: '#5f7a4a', target: 'complicaciones' },
      { title: 'Monogenica y sindromica', sub: 'Inicio precoz; setmelanotida', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Secundaria', sub: 'Endocrina, hipotalamica o por farmacos', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones propias', sub: 'Las cardiometabolicas van en el tema CKM', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Apnea e hipoventilacion', sub: 'CPAP y ventilacion no invasiva', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Enfermedad hepatica esteatosica', sub: 'Lo que importa es la fibrosis', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Mecanicas y oncologicas', sub: 'Artrosis, fertilidad, 13 canceres', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Del tratamiento', sub: 'Farmacos, cirugia y reganancia', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [0, 17], no_invasivos: [0, 1], imagen: [17] };
export const clasificacionCite = [0, 1, 5];
export const seguimientoCite = [0, 8];
