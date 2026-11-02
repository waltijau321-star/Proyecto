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
  subtitulo: 'Módulo 40 · Medicina Interna',
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
      <div style="color:var(--ink-dim);margin-top:2px;">Diabetes tipo 2, hipertensión, dislipidemia aterogenica, enfermedad coronaria, insuficiencia cardiaca (sobre todo con fracción de eyección preservada), fibrilación auricular, ictus y enfermedad renal crónica. <strong>Todo esto se desarrolla en el tema del síndrome cardiovascular-renal-metabólico.</strong></div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #3d5a73;border-radius:8px;padding:6px 9px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;">Respiratorio</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Apnea obstructiva del sueno, síndrome de hipoventilación por obesidad, asma de difícil control y menor reserva funcional. Aumentan el riesgo perioperatorio y de via aérea difícil.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;">
      <div style="font-weight:700;color:#8a6a1f;">Digestivo</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Enfermedad hepática esteatosica metabólica y su forma inflamatoria, con riesgo de fibrosis y cirrosis; litiasis biliar (más aun al perder peso rápido); reflujo gastroesofágico y hernia hiatal; pancreatitis.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #6b4a2e;border-radius:8px;padding:6px 9px;background:#6b4a2e10;">
      <div style="font-weight:700;color:#6b4a2e;">Mecánico y osteoarticular</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Artrosis de rodilla y cadera, lumbalgia, insuficiencia venosa y linfedema, celulitis de repetición, intertrigo y acantosis nigricans, y hernias de pared.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #6b3a5a;border-radius:8px;padding:6px 9px;background:#6b3a5a10;">
      <div style="font-weight:700;color:#6b3a5a;">Reproductivo y oncológico</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Síndrome de ovario poliquistico, infertilidad, complicaciones obstétricas, hipogonadismo y disfunción eréctil. Trece canceres se asocian al exceso de adiposidad: endometrio, mama posmenopáusica, colon y recto, rinon, hígado, páncreas, esófago y otros.</div>
    </div>
    <div style="flex:1;min-width:190px;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;background:#3f6b5210;">
      <div style="font-weight:700;color:#3f6b52;">Renal, neurológico y psicosocial</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Glomerulopatía asociada a la obesidad, nefrolitiasis, hipertensión intracraneal idiopática, deterioro cognitivo, depresión y ansiedad, y el estigma del peso, que por sí mismo empeora los resultados en salud.</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">El dano no es proporcional al índice de masa corporal sino a la <strong>cantidad y la localización de la grasa</strong> y a la disfunción que ya ha producido: de ahi que se estadifique con el sistema de Edmonton y no solo con el IMC.</div>
</div>`;

const escalonHtml = `
<div style="max-width:600px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:82px 1fr 76px;gap:6px;align-items:center;">
    <div style="font-weight:700;color:#3f6b52;text-align:center;">Base</div>
    <div style="background:#3f6b5218;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;">Alimentación con déficit de 500 a 750 kcal/dia, actividad física de 150 min/semana (300 para mantener) y terapia conductual estructurada (14 sesiones o más en 6 meses)</div>
    <div style="text-align:center;font-weight:700;color:#3f6b52;">3 a 5%</div>

    <div style="font-weight:700;color:#3d5a73;text-align:center;">Fármacos</div>
    <div style="background:#3d5a7318;border:1px solid #3d5a73;border-radius:8px;padding:6px 9px;">Desde IMC de 30, o de 27 con comorbilidad. Orlistat 3 a 5%; naltrexona-bupropion 6%; liraglutida 3.0 mg 8%; fentermina-topiramato 10%; <strong>semaglutida 2.4 mg 15%</strong>; <strong>tirzepatida 15 mg 21%</strong></div>
    <div style="text-align:center;font-weight:700;color:#3d5a73;">3 a 21%</div>

    <div style="font-weight:700;color:#8a6a1f;text-align:center;">Endoscopia</div>
    <div style="background:#8a6a1f18;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;">Balón intragastrico o gastroplastia endoscópica en manga, en casos seleccionados o como puente</div>
    <div style="text-align:center;font-weight:700;color:#8a6a1f;">10 a 15%</div>

    <div style="font-weight:700;color:#8c3a34;text-align:center;">Cirugía</div>
    <div style="background:#8c3a3418;border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;">Desde IMC de 35 con o sin comorbilidad, o de 30 a 34.9 con enfermedad metabólica (ASMBS/IFSO 2022). Manga gástrica o bypass gástrico en Y de Roux</div>
    <div style="text-align:center;font-weight:700;color:#8c3a34;">25 a 30%</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Porcentaje de <strong>peso corporal total</strong> perdido a las 68 a 72 semanas en los ensayos. La obesidad es crónica y recidivante: al retirar el fármaco se recupera alrededor de dos tercios de lo perdido (STEP 4, SURMOUNT-4), así que el tratamiento eficaz se mantiene. La semaglutida 2.4 mg redujo además un 20% los eventos cardiovasculares en obesidad sin diabetes (SELECT), lo que desplaza la indicación desde el peso hacia la reducción del riesgo.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La obesidad es una <strong>enfermedad crónica, recidivante y progresiva</strong> definida por un exceso de adiposidad que dana la salud. No es un problema de fuerza de voluntad: es un trastorno de la regulación del peso corporal, con una base biológica y genética potente, que el organismo defiende de forma activa frente a la pérdida de peso.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Medirla: el IMC no basta.</strong></p>
<p style="margin:0 0 12px;">El índice de masa corporal clasifica poblaciones (normal 18.5 a 24.9; sobrepeso 25 a 29.9; obesidad grado I 30 a 34.9, II 35 a 39.9 y III 40 o más), pero en el individuo no distingue grasa de músculo ni dice donde esta la grasa. Por eso se acompana siempre de una medida de <strong>adiposidad central</strong>: el perímetro de cintura (riesgo aumentado por encima de 102 cm en el varón y 88 cm en la mujer con los criterios clásicos, o ya desde 90 y 80 cm con los umbrales de la IDF aplicables a población latinoamericana y asiática) y el <strong>índice cintura-talla</strong>, que es el más simple y transferible: la cintura debe medir menos de la mitad de la talla, es decir, un cociente por debajo de 0.5. En poblaciones de ascendencia asiática los umbrales de IMC bajan a 23 para sobrepeso y 25 para obesidad.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Obesidad preclinica y obesidad clínica.</strong></p>
<p style="margin:0 0 12px;">La comision de The Lancet sobre obesidad clínica (2025) propuso dejar de tratar el IMC como diagnóstico y separar dos situaciones: la <strong>obesidad preclinica</strong> es un exceso de adiposidad sin disfunción de órganos ni limitación funcional, y constituye un estado de riesgo; la <strong>obesidad clínica</strong> es la que ya produce signos, síntomas o limitación de las actividades de la vida diaria, y es una enfermedad en sí misma. Para confirmar el exceso de adiposidad se exige al menos una medida además del IMC (cintura, índice cintura-talla, cociente cintura-cadera o medición directa de la grasa), salvo con un IMC por encima de 40, donde se puede asumir. En la misma línea, el <strong>sistema de estadificación de Edmonton</strong> gradua de 0 a 4 según el dano real y predice la mortalidad mejor que el IMC (calculadora disponible).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que el cuerpo defiende el peso.</strong></p>
<p style="margin:0 0 12px;">El nucleo arcuato del hipotálamo integra senales periféricas: la <strong>leptina</strong> del adipocito y la insulina informan de las reservas, la <strong>grelina</strong> gástrica estimula el apetito, y el GLP-1, el péptido YY y la oxintomodulina intestinales lo frenan tras la comida. En la obesidad hay <strong>resistencia a la leptina</strong>: hay mucha, pero el hipotálamo no la escucha. Y tras perder peso aparece la <strong>adaptación metabólica</strong>: el gasto energético en reposo cae más de lo que corresponde al nuevo peso y la grelina sube, de modo que el organismo empuja a recuperar lo perdido. Eso explica que la obesidad sea recidivante y que el tratamiento tenga que ser crónico, no un ciclo con final.</p>
<p style="margin:0 0 12px;">El tejido adiposo, además, es un órgano endocrino. Cuando se desborda su capacidad de almacenamiento, la grasa se deposita donde no debe (hígado, músculo, páncreas, epicardio, rinon): es la <strong>lipotoxicidad</strong>, que junto con la inflamación crónica de bajo grado produce la resistencia a la insulina. La grasa <strong>visceral</strong> es la metabolicamente peligrosa, no la subcutánea, y por eso dos personas con el mismo IMC pueden tener riesgos muy distintos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que produce.</strong></p>
${figBlock('Figura 1', 'Complicaciones de la obesidad por aparato', organosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento, por escalones.</strong></p>
${figBlock('Figura 2', 'Escalonamiento del tratamiento y pérdida de peso esperable', escalonHtml)}
<p style="margin:0 0 12px;">La magnitud de la pérdida importa porque las comorbilidades responden por umbrales: con un 3 a 5% mejoran la glucemia y los triglicéridos; a partir del 10% mejoran la apnea del sueno y la esteatohepatitis; y por encima del 15% aparecen la remisión de la diabetes tipo 2 y el beneficio cardiovascular. Los agonistas del receptor de GLP-1 y la tirzepatida han desplazado el techo de lo alcanzable con fármacos hasta acercarlo al de la cirugía.</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Este tema cubre la obesidad como enfermedad: sus formas (común poligenica, monogenica y sindrómica, y secundaria), su tratamiento, y las complicaciones que le son propias (apnea del sueno e hipoventilación, enfermedad hepática esteatosica metabólica, complicaciones mecánicas, reproductivas y oncológicas, y las del propio tratamiento). Las complicaciones cardiometabolicas (diabetes, hipertensión, dislipidemia, enfermedad renal y cardiovascular) no se repiten aquí: se desarrollan en el tema del <strong>síndrome cardiovascular-renal-metabólico</strong>, que es el marco que las une.</p>`;

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
      tituloA: 'Obesidad preclinica (exceso de adiposidad sin disfunción)',
      tituloB: 'Obesidad clínica (con disfunción de órganos o limitación funcional)',
      compensada: 'Exceso de adiposidad confirmado por IMC más una medida de adiposidad central, pero sin signos ni síntomas de disfunción orgánica y sin limitación de las actividades de la vida diaria. Es un estado de riesgo, no una enfermedad establecida: el objetivo es cuantificar el riesgo, tratar los factores presentes y prevenir la progresión, evitando tanto la inaccion como el sobretratamiento.',
      descompensada: 'Exceso de adiposidad con disfunción demostrable: disnea de esfuerzo, apnea del sueno, artrosis limitante, incontinencia, dificultad para el autocuidado o la higiene, o cualquier enfermedad de órgano atribuible (hepática, respiratoria, articular, reproductiva, cardiometabolica). Aquí la obesidad es una enfermedad activa y el tratamiento va dirigido a revertir esa disfunción, no solo a bajar una cifra de peso.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayuno y HbA1c', utilidad: 'Cribado de prediabetes y diabetes tipo 2, presentes en una fracción alta de los pacientes y a menudo asintomáticas. Definen además el paso del estadio 1 al 2 del síndrome cardiovascular-renal-metabólico.' },
      { prueba: 'Perfil lipídico completo con colesterol no-HDL', utilidad: 'La dislipidemia aterogenica de la obesidad (triglicéridos altos, HDL bajo, particulas LDL pequenas y densas) se ve mejor con el colesterol no-HDL que con el cLDL calculado.' },
      { prueba: 'Transaminasas y plaquetas (para el índice FIB-4)', utilidad: 'Cribado de enfermedad hepática esteatosica metabólica y, sobre todo, de fibrosis avanzada: unas transaminasas normales no la descartan, por lo que se calcula el FIB-4 en todo paciente con obesidad y factores metabólicos.' },
      { prueba: 'TSH', utilidad: 'Descarta el hipotiroidismo como contribuyente. Rara vez explica por si solo una obesidad importante, pero es barato y modifica el manejo.' },
      { prueba: 'Creatinina con filtrado glomerular y cociente albúmina/creatinina', utilidad: 'Detecta la glomerulopatía asociada a la obesidad y la enfermedad renal crónica, que cambian la elección de fármacos y estadifican el riesgo cardiorrenal.' },
      { prueba: 'Cortisol y estudio hormonal dirigido', utilidad: 'Solo ante sospecha clínica de causa secundaria: cortisol libre urinario o test de supresión con dexametasona si hay estigmas de Cushing; testosterona en el varón con hipogonadismo; no se piden de rutina.' },
      { prueba: 'Vitamina D, B12, hierro, folato y cinc', utilidad: 'Basales antes de la cirugía metabólica y en el seguimiento posterior de por vida; los déficits son frecuentes ya antes de operar.' }
    ],
    no_invasivos: [
      { metodo: 'IMC, perímetro de cintura e índice cintura-talla (calculadora disponible)', interpretacion: 'El IMC clasifica, la cintura y el índice cintura-talla informan de la adiposidad central, que es la que determina el riesgo metabólico. Se necesita al menos una medida además del IMC para confirmar el exceso de adiposidad.', cutoff: 'IMC 30 o más (25 o más en ascendencia asiática); cintura mayor de 102 cm en el varón y 88 en la mujer (o 90 y 80 con umbrales de la IDF); índice cintura-talla mayor de 0.5' },
      { metodo: 'Sistema de estadificación de Edmonton (calculadora disponible)', interpretacion: 'Gradua de 0 a 4 según la presencia de factores de riesgo, enfermedad establecida, dano de órgano y limitación funcional o psicológica. Predice la mortalidad mejor que el IMC y orienta la intensidad del tratamiento.', cutoff: 'Estadio 0 sin factores; 2 o más indica enfermedad establecida y justifica tratamiento activo; 3 o más, dano de órgano' },
      { metodo: 'Cuestionario STOP-BANG y poligrafia o polisomnografía', interpretacion: 'Cribado y confirmación de la apnea obstructiva del sueno, muy prevalente e infradiagnosticada en la obesidad; su tratamiento cambia la calidad de vida y el riesgo perioperatorio.', cutoff: 'STOP-BANG de 3 o más indica riesgo intermedio-alto y obliga a estudio del sueno' },
      { metodo: 'Índice FIB-4 y elastografía hepática', interpretacion: 'Estratifican el riesgo de fibrosis hepática avanzada de forma no invasiva y evitan biopsias innecesarias.', cutoff: 'FIB-4 menor de 1.3 hace improbable la fibrosis avanzada; mayor de 2.67 la hace probable y obliga a derivar a hepatologia' },
      { metodo: 'Composición corporal por bioimpedancia o densitometría', interpretacion: 'Cuantifica la masa grasa y la masa magra; útil cuando el IMC es equivoco (deportistas, sarcopenia con obesidad en el anciano) y para vigilar que la pérdida de peso no sea a costa de músculo.', cutoff: 'Sin umbral universal; se interpreta la tendencia y la relación entre masa grasa y masa magra' }
    ],
    imagen: [
      { modalidad: 'Ecografía abdominal', hallazgos: 'Esteatosis hepática y litiasis biliar. Es poco sensible por debajo del 20% de esteatosis y no evalúa la fibrosis, por lo que no sustituye al FIB-4 ni a la elastografía.' },
      { modalidad: 'Elastografía de transición con parámetro de atenuacion controlada', hallazgos: 'Cuantifica a la vez la esteatosis y la rigidez hepática; es la prueba no invasiva de referencia para estadificar la enfermedad hepática esteatosica metabólica.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Hipertrofia ventricular izquierda, disfunción diastólica y grasa epicárdica; identifica la insuficiencia cardiaca con fracción de eyección preservada, muy ligada a la obesidad.' },
      { modalidad: 'Radiografía o resonancia osteoarticular', hallazgos: 'Artrosis de rodilla y cadera y patología degenerativa lumbar, que cuantifican la limitación funcional y pesan en la estadificación de Edmonton.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La obesidad se clasifica por <strong>grado antropometrico</strong> (IMC y adiposidad central), por <strong>situación clínica</strong> (preclinica frente a clínica, según exista o no disfunción de órganos o limitación funcional) y por <strong>gravedad funcional</strong> con el sistema de estadificación de Edmonton, que es el que mejor predice la mortalidad y el que mejor orienta la intensidad del tratamiento. Las tres miradas son complementarias: el IMC dice cuanta hay, la cintura dice donde esta, y Edmonton dice cuanto dano ha hecho.`,
    escalas: [
      { nombre: 'Clasificación por índice de masa corporal (calculadora disponible)', componentes: 'Peso y talla.', formula: 'IMC = peso en kg dividido entre la talla en metros al cuadrado.', interpretacion: 'Normal 18.5 a 24.9; sobrepeso 25 a 29.9; obesidad grado I 30 a 34.9, grado II 35 a 39.9 y grado III 40 o más. En poblaciones de ascendencia asiática, sobrepeso desde 23 y obesidad desde 25.' },
      { nombre: 'Adiposidad central: cintura e índice cintura-talla (calculadora disponible)', componentes: 'Perímetro de cintura y talla.', formula: 'Índice cintura-talla = cintura dividida entre la talla, en las mismas unidades.', interpretacion: 'Riesgo aumentado con cintura mayor de 102 cm en el varón y 88 cm en la mujer (criterios clásicos), o desde 90 y 80 cm con los umbrales de la IDF aplicables a población latinoamericana y asiática. Índice cintura-talla mayor de 0.5 indica adiposidad central con independencia del IMC.' },
      { nombre: 'Obesidad preclinica frente a clínica (comision de The Lancet, 2025)', componentes: 'Exceso de adiposidad confirmado más presencia o ausencia de disfunción orgánica o limitación de las actividades de la vida diaria.', formula: 'Confirmar la adiposidad con IMC más al menos una medida adicional (o IMC mayor de 40), y después buscar signos, síntomas o limitación funcional.', interpretacion: 'Preclinica: estado de riesgo, sin disfunción. Clínica: enfermedad activa, con disfunción demostrable, que justifica tratamiento dirigido a revertirla.' },
      { nombre: 'Sistema de estadificación de Edmonton (calculadora disponible)', componentes: 'Factores de riesgo, enfermedad establecida, dano de órgano, síntomas físicos, salud mental y limitación funcional.', formula: 'Estadio 0 a 4 según el peor dominio afectado.', interpretacion: '0 sin factores ni síntomas; 1 factores subclínicos o síntomas leves; 2 enfermedad crónica establecida con limitación moderada; 3 dano de órgano establecido; 4 discapacidad grave. Predice la mortalidad mejor que el IMC.' },
      { nombre: 'Indicación de cirugía metabólica (ASMBS/IFSO 2022; calculadora disponible)', componentes: 'IMC, presencia de enfermedad metabólica y respuesta al tratamiento no quirúrgico.', formula: 'IMC de 35 o más con o sin comorbilidad; IMC de 30 a 34.9 con enfermedad metabólica; en ascendencia asiática, valorar desde 27.5.', interpretacion: 'Los umbrales bajaron respecto de los criterios clásicos de 1991. No hay limite superior de edad y se valora individualmente; la falta de respuesta duradera al tratamiento no quirúrgico refuerza la indicación.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Obesidad común (poligenica)',
      color: '#5f7a4a',
      definicion: 'Forma que representa la inmensa mayoría de los casos: exceso de adiposidad por la interacción de una predisposición poligenica (cientos de variantes de efecto pequeno, con heredabilidad estimada del 40 al 70%) con un entorno que favorece el consumo calórico y limita la actividad física. No es una enfermedad de la voluntad sino de la regulación del balance energético.',
      fisiopatologia: 'La predisposición genética se expresa a través del control hipotalámico del apetito y de la saciedad: variantes en FTO, MC4R y otros loci desplazan el punto de ajuste del peso corporal. Sobre ese sustrato, el entorno obesogenico produce un balance energético positivo mantenido; el tejido adiposo se expande, se inflama y pierde capacidad de almacenamiento seguro, y la grasa se deposita en hígado, músculo y vísceras (lipotoxicidad), lo que genera resistencia a la insulina. Tras perder peso, la adaptación metabólica y el aumento de la grelina empujan a recuperarlo.',
      epidemiologia: 'Más de mil millones de personas viven con obesidad en el mundo y la prevalencia sigue subiendo. México esta entre los países con mayor prevalencia: alrededor de tres cuartas partes de los adultos tienen sobrepeso u obesidad según las encuestas nacionales de salud y nutrición, con la carga concentrada en población de menor nivel socioeconómico.',
      factores_riesgo: ['Predisposición poligenica y antecedente familiar', 'Entorno alimentario con alta densidad energetica y ultraprocesados', 'Sedentarismo y tiempo de pantalla', 'Sueno insuficiente o de mala calidad y trabajo por turnos', 'Nivel socioeconómico bajo e inseguridad alimentaria', 'Estrés crónico y trastorno por atracon', 'Ganancia de peso gestacional excesiva y peso al nacer en los extremos', 'Abandono del tabaco sin acompanamiento nutricional'],
      clinica: 'La propia adiposidad y las manifestaciones que dependen de ella: disnea de esfuerzo, ronquido y somnolencia diurna, dolor articular, intertrigo, acantosis nigricans en cuello y axilas (marcador de resistencia a la insulina) y limitación funcional. La repercusión psicosocial y el estigma del peso forman parte del cuadro y condicionan el acceso a la atención.',
      criterios_dx: 'Exceso de adiposidad confirmado por IMC de 30 o más junto con al menos una medida de adiposidad central (o IMC mayor de 40, en el que se puede asumir), tras excluir causas secundarias y monogenicas por la anamnesis y la exploración. Después se determina si es preclinica o clínica y se estadifica con el sistema de Edmonton.',
      laboratorio: 'Glucemia y HbA1c, perfil lipídico con colesterol no-HDL, transaminasas con índice FIB-4, TSH, función renal con cociente albúmina/creatinina, y vitamina D. El estudio hormonal ampliado solo si hay sospecha clínica de causa secundaria.',
      imagen: 'No es necesaria para el diagnóstico. Se solicita dirigida a las complicaciones: elastografía hepática, ecocardiograma o estudio osteoarticular según la clínica.',
      complementarios: 'Estudio del sueno si el STOP-BANG es de 3 o más; valoración nutricional y de la actividad física; cribado de trastorno por atracon, depresión y ansiedad; y revisión de los fármacos que favorecen la ganancia de peso.',
      dx_diferencial: 'Obesidad monogenica o sindrómica (inicio muy precoz, hiperfagia intensa, talla baja, retraso del desarrollo), obesidad secundaria endocrina o farmacológica (ver esas fichas), edema y ascitis que inflan el peso, y sarcopenia con obesidad en el anciano, donde el IMC infraestima el problema.',
      tx_medico: 'Tratamiento crónico y estructurado: plan alimentario con déficit de 500 a 750 kcal/dia adaptado a las preferencias del paciente, actividad física de al menos 150 minutos semanales (300 para mantener el peso perdido) con trabajo de fuerza para preservar masa magra, y terapia conductual intensiva con 14 sesiones o más en los primeros 6 meses. Sueno suficiente, manejo del estrés y retirada o sustitución de los fármacos que hacen ganar peso. El objetivo se define por la mejoría de la disfunción, no por una cifra en la bascula.',
      tx_farmacologico: `Indicado desde un IMC de 30, o de 27 con comorbilidad, siempre anadido al tratamiento de base. Por eficacia creciente: orlistat (3 a 5%), naltrexona-bupropion (6%), liraglutida 3.0 mg diaria (8%), fentermina-topiramato (10%), <strong>semaglutida 2.4 mg semanal (15%)</strong> y <strong>tirzepatida 15 mg semanal (21%)</strong>. La semaglutida 2.4 mg redujo además los eventos cardiovasculares en obesidad sin diabetes (SELECT). Se escalona la dosis despacio para limitar los efectos digestivos, y el tratamiento se mantiene: al retirarlo se recupera cerca de dos tercios de lo perdido. Ver la Figura 2 de Definición.`,
      tx_intervencionista: 'Cirugía metabólica desde un IMC de 35 con o sin comorbilidad, o de 30 a 34.9 con enfermedad metabólica (calculadora disponible): manga gástrica o bypass gástrico en Y de Roux, con pérdida del 25 al 30% del peso total, remisión de la diabetes en una proporción alta y reducción de la mortalidad a largo plazo. Alternativas endoscópicas (balón intragastrico, gastroplastia en manga) en casos seleccionados.',
      criterios_uci: 'No aplica a la obesidad en si. En el paciente crítico condiciona la via aérea, la ventilación, la dosificación de fármacos y la profilaxis antitrombótica, que se ajustan al peso.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante cualquier ingreso: ajustar dosis al peso (en particular heparinas y antibióticos), prever la via aérea difícil y la ventilación, movilizar precozmente, y aprovechar el contacto para iniciar o reactivar el tratamiento de la obesidad y derivar al alta.',
      seguimiento_ambulatorio: 'Visitas cada 1 a 3 meses durante la fase de pérdida y después al menos semestrales de por vida, con peso, cintura, presión arterial y analítica. Vigilar la masa magra, la adherencia y los efectos adversos, y planificar de forma explícita la fase de mantenimiento, que es donde se pierde el resultado.',
      pronostico: 'Con tratamiento sostenido la pérdida de peso mejora o revierte la mayoría de las complicaciones y, por encima del 15%, reduce eventos cardiovasculares. Sin tratamiento crónico la recuperación del peso es la regla, no la excepción, y no indica fracaso del paciente sino de la estrategia.',
      algoritmo: ['Confirmar el exceso de adiposidad con IMC más una medida de adiposidad central (cintura o índice cintura-talla)', 'Determinar si es preclinica o clínica y estadificar con el sistema de Edmonton; descartar causas secundarias y monogenicas', 'Cribar complicaciones: glucemia y HbA1c, lípidos, FIB-4, función renal, apnea del sueno', 'Base en todos: alimentación con déficit calórico, actividad física con trabajo de fuerza y terapia conductual estructurada', 'Anadir fármaco desde IMC 30 (o 27 con comorbilidad) y valorar cirugía desde IMC 35 (o 30 con enfermedad metabólica); mantener el tratamiento de forma crónica']
    },
    {
      nombre: 'Obesidad monogenica y sindrómica',
      color: '#6b3a5a',
      definicion: 'Formas raras de obesidad causadas por una alteración de un solo gen de la via leptina-melanocortina (monogenicas) o por un síndrome genético con obesidad entre sus rasgos (sindrómicas). Importan mucho más de lo que sugiere su frecuencia porque cambian el pronóstico, el consejo genético y, en algunos casos, permiten un tratamiento dirigido.',
      fisiopatologia: 'La via leptina-melanocortina traduce el estado de las reservas grasas en senal de saciedad: la leptina actúa sobre las neuronas POMC del nucleo arcuato, que liberan alfa-MSH, que a su vez estimula el receptor MC4R. Las variantes en LEP, LEPR, POMC, PCSK1 o MC4R interrumpen esa cadena y producen hiperfagia intensa desde los primeros meses de vida. En las formas sindrómicas (Prader-Willi, Bardet-Biedl, Alstrom) la obesidad se acompana de otros rasgos por alteraciones más amplias del desarrollo o de la función ciliar.',
      epidemiologia: 'En conjunto explican una fracción pequena de la obesidad, pero se concentran en los casos de inicio muy precoz y extremo. El déficit de MC4R es la causa monogenica más frecuente. El Prader-Willi afecta a alrededor de 1 de cada 15.000 a 25.000 nacimientos.',
      factores_riesgo: ['Inicio de la obesidad antes de los 5 anos', 'Hiperfagia intensa y búsqueda constante de comida', 'Consanguinidad o antecedente familiar de obesidad extrema precoz', 'Talla baja, retraso del desarrollo o discapacidad intelectual', 'Rasgos dismorficos, polidactilia o distrofia retiniana', 'Hipogonadismo hipogonadotropo o hipotonía neonatal', 'Insuficiencia suprarrenal o pelo rojizo (déficit de POMC)'],
      clinica: 'Obesidad grave de inicio en los primeros anos con hiperfagia desproporcionada. Cada entidad anade sus rasgos: el déficit de POMC, insuficiencia suprarrenal y pelo rojizo; el Prader-Willi, hipotonía neonatal con dificultad para alimentarse que después vira a hiperfagia, talla baja, hipogonadismo y trastorno de conducta; el Bardet-Biedl, distrofia retiniana, polidactilia, enfermedad renal e hipogonadismo. El déficit de MC4R cursa con obesidad, hiperfagia y aumento de la masa magra y de la talla.',
      criterios_dx: 'Sospecha clínica por la edad de inicio, la intensidad de la hiperfagia y los rasgos asociados, confirmada con estudio genético (panel de obesidad monogenica o secuenciación) y, en el Prader-Willi, con análisis de metilación del locus 15q11-q13. Medir leptina sérica ayuda: esta indetectable en el déficit congénito de leptina, que es tratable con leptina recombinante.',
      laboratorio: 'Leptina sérica, cortisol y ACTH (déficit de POMC), eje gonadal y tiroideo, función renal (Bardet-Biedl), y el panel genético dirigido. El resto del estudio metabólico es el de cualquier obesidad.',
      imagen: 'Resonancia craneal si se sospecha lesión hipotalámica adquirida como alternativa diagnóstica; ecografía renal en el Bardet-Biedl; edad ósea y densitometría según el síndrome.',
      complementarios: 'Consejo genético familiar y valoración multidisciplinar (endocrinologia pediátrica o de adultos, genética, oftalmologia, psiquiatría y trabajo social). En el Prader-Willi, control estricto del acceso a la comida en el entorno.',
      dx_diferencial: 'Obesidad común poligenica de inicio infantil, obesidad hipotalámica adquirida (craneofaringioma, cirugía o radioterapia de la región selar), síndrome de Cushing infantil y pseudohipoparatiroidismo tipo 1a.',
      tx_medico: 'La base es la misma de la obesidad común, pero con expectativas ajustadas y con un control ambiental estructurado del acceso a los alimentos, especialmente en el Prader-Willi. El acompanamiento familiar y psicológico es parte del tratamiento, no un complemento.',
      tx_farmacologico: 'Tratamiento dirigido cuando existe: <strong>setmelanotida</strong> (agonista de MC4R) en los déficits de POMC, PCSK1 y LEPR y en el síndrome de Bardet-Biedl, con pérdidas de peso y reducción del hambre notables; <strong>metreleptina</strong> en el déficit congénito de leptina, donde la respuesta es espectacular. En el déficit de MC4R la setmelanotida no funciona si el receptor no responde. Los agonistas de GLP-1 pueden aportar beneficio adicional.',
      tx_intervencionista: 'La cirugía metabólica se individualiza mucho: los resultados son peores y más variables que en la obesidad común, y en el Prader-Willi las complicaciones y la reganancia son frecuentes, por lo que se plantea solo en centros con experiencia.',
      criterios_uci: 'No aplica de forma directa; el déficit de POMC con insuficiencia suprarrenal puede debutar con una crisis addisoniana.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la insuficiencia suprarrenal en el déficit de POMC durante cualquier estrés o cirugía, y las complicaciones respiratorias en el Prader-Willi.',
      seguimiento_ambulatorio: 'Seguimiento de por vida en una unidad especializada, con vigilancia de las manifestaciones propias de cada síndrome (retina, rinon, eje gonadal, conducta) y apoyo continuado a la familia.',
      pronostico: 'Depende de la entidad. Las formas con tratamiento dirigido disponible han cambiado radicalmente de pronóstico; en el resto, el objetivo es controlar la hiperfagia, prevenir las complicaciones y sostener la función y la calidad de vida.',
      algoritmo: ['Sospechar ante obesidad grave de inicio antes de los 5 anos con hiperfagia intensa, o con rasgos sindrómicos asociados', 'Medir leptina sérica y solicitar panel genético dirigido; metilación de 15q11-q13 si se sospecha Prader-Willi', 'Buscar las manifestaciones asociadas: insuficiencia suprarrenal, distrofia retiniana, enfermedad renal, hipogonadismo', 'Tratamiento dirigido si existe: setmelanotida en déficit de POMC, PCSK1 o LEPR y en Bardet-Biedl; metreleptina en déficit de leptina', 'Control ambiental del acceso a la comida, consejo genético y seguimiento multidisciplinar de por vida']
    },
    {
      nombre: 'Obesidad secundaria (endocrina y farmacológica)',
      color: '#8a6a1f',
      definicion: 'Ganancia de peso atribuible a una enfermedad endocrina, a una lesión hipotalámica o a un fármaco, y no a la obesidad común. Es poco frecuente como causa única, pero identificarla cambia el tratamiento y a veces lo resuelve.',
      fisiopatologia: 'Cada causa actúa por su mecanismo: el exceso de glucocorticoides redistribuye la grasa hacia el tronco y produce resistencia a la insulina y sarcopenia; el hipotiroidismo reduce el gasto energético y retiene líquido; la lesión hipotalámica destruye el centro de la saciedad y produce hiperfagia con obesidad rápidamente progresiva; y los fármacos actuan sobre el apetito, la saciedad, el gasto energético o el depósito de grasa. En la obesidad hipotalámica el peso escapa a las medidas habituales porque la senal de saciedad esta anatómicamente interrumpida.',
      epidemiologia: 'Menos del 5% de las obesidades tiene una causa endocrina identificable, pero la ganancia de peso inducida por fármacos es muy frecuente y a menudo pasa desapercibida en la revisión de la medicación.',
      factores_riesgo: ['Tratamiento con glucocorticoides, incluso en pautas cortas repetidas', 'Antipsicóticos de segunda generación (olanzapina y clozapina, los de mayor riesgo)', 'Antidepresivos (mirtazapina, paroxetina, tricíclicos) y litio', 'Antiepilépticos (valproato, gabapentina, pregabalina, carbamazepina)', 'Insulina, sulfonilureas, glinidas y pioglitazona', 'Betabloqueadores y algunos antihistamínicos', 'Cirugía, radioterapia o tumor de la región hipotálamo-hipofisaria', 'Hipotiroidismo no tratado, síndrome de Cushing y déficit de hormona de crecimiento'],
      clinica: 'Orienta a causa secundaria una ganancia de peso rápida y desproporcionada, un cambio temporal claro con el inicio de un fármaco o de una enfermedad, o la presencia de estigmas propios: cara de luna llena, giba dorsal, estrías vinosas anchas, debilidad proximal y fragilidad cutánea en el Cushing; bradicardia, piel seca, intolerancia al frío y estrenimiento en el hipotiroidismo; hiperfagia incoercible con antecedente de cirugía o tumor selar en la obesidad hipotalámica.',
      criterios_dx: 'Anamnesis farmacológica estructurada y búsqueda de estigmas. El cribado hormonal no es de rutina: se solicita TSH en la mayoría, y cortisol libre urinario de 24 h, cortisol salival nocturno o supresión con 1 mg de dexametasona solo ante sospecha clínica de Cushing. La obesidad hipotalámica se diagnostica por el contexto (cirugía, radioterapia o tumor) más la resonancia.',
      laboratorio: 'TSH y T4 libre; pruebas de cribado de hipercortisolismo si hay sospecha; testosterona total en el varón; prolactina si hay hipogonadismo o galactorrea; y estudio del eje hipofisario completo tras cirugía o radioterapia selar.',
      imagen: 'Resonancia de la región selar e hipotalámica ante sospecha de obesidad hipotalámica o de patología hipofisaria; tomografía suprarrenal si el estudio hormonal orienta a un origen suprarrenal.',
      complementarios: 'Revisión farmacológica estructurada con el prescriptor para sustituir, cuando sea posible, por alternativas de menor impacto ponderal: aripiprazol, ziprasidona o lurasidona en lugar de olanzapina; lamotrigina o topiramato en lugar de valproato; agonista de GLP-1 o inhibidor de SGLT2 en lugar de sulfonilurea o insulina cuando el control lo permita.',
      dx_diferencial: 'Obesidad común con ganancia rápida por cambio de hábitos, edema o ascitis, síndrome de ovario poliquistico, hipotiroidismo subclínico (que rara vez justifica una ganancia importante) y depresión con hiperfagia.',
      tx_medico: 'Tratar la causa: reponer levotiroxina en el hipotiroidismo, tratar el hipercortisolismo, y retirar o sustituir el fármaco responsable cuando sea clínicamente posible, sin sacrificar el control de la enfermedad de base. Después, si el exceso de adiposidad persiste, se trata como una obesidad común.',
      tx_farmacologico: 'Los agonistas del receptor de GLP-1 y la tirzepatida son eficaces también aquí, y son especialmente útiles para contrarrestar la ganancia de peso inducida por antipsicóticos, donde la metformina también tiene evidencia. En la obesidad hipotalámica la respuesta suele ser menor; se han empleado con resultados variables la setmelanotida, los agonistas de GLP-1 y las combinaciones con estimulantes.',
      tx_intervencionista: 'Cirugía de la lesión causal cuando procede (adenoma hipofisario, tumor suprarrenal). La cirugía metabólica se puede plantear en la obesidad hipotalámica refractaria, con resultados más modestos que en la obesidad común.',
      criterios_uci: 'No aplica a la obesidad secundaria en si; si a la crisis addisoniana tras retirar corticoides o al hipotiroidismo grave con coma mixedematoso.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Aprovechar el ingreso para revisar de forma sistemática la medicación que favorece la ganancia de peso y dejar por escrito las sustituciones acordadas con el especialista correspondiente.',
      seguimiento_ambulatorio: 'Repesar y reevaluar 3 a 6 meses después de corregir la causa. Si el peso no mejora, asumir que coexiste una obesidad común y tratarla como tal, sin seguir atribuyendo todo a la causa secundaria.',
      pronostico: 'Bueno cuando la causa es reversible y se corrige pronto. La obesidad hipotalámica es la de peor pronóstico porque el mecanismo de saciedad esta anatómicamente danado y responde mal a todas las medidas.',
      algoritmo: ['Ante ganancia de peso rápida o desproporcionada: anamnesis farmacológica estructurada y búsqueda de estigmas endocrinos', 'Solicitar TSH; cribado de hipercortisolismo solo si hay sospecha clínica; resonancia selar si se sospecha origen hipotalámico', 'Tratar la causa: levotiroxina, tratamiento del hipercortisolismo, o retirada o sustitución del fármaco responsable', 'Sustituir por alternativas de menor impacto ponderal sin perder el control de la enfermedad de base', 'Reevaluar a los 3 a 6 meses; si el peso persiste, tratar como obesidad común']
    },
    {
      nombre: 'Apnea obstructiva del sueno e hipoventilación por obesidad',
      color: '#3d5a73',
      definicion: 'Complicaciones respiratorias de la obesidad (ver la ficha de Obesidad común). La apnea obstructiva del sueno es el colapso repetido de la via aérea superior durante el sueno; el síndrome de hipoventilación por obesidad anade hipercapnia diurna (PaCO2 mayor de 45 mmHg) en un paciente con IMC de 30 o más, una vez descartadas otras causas de hipoventilación.',
      fisiopatologia: 'El depósito graso peri­faringeo estrecha la via aérea y la grasa abdominal y torácica reduce la capacidad residual funcional, con lo que el pulmón trabaja en un volumen bajo y la via aérea se colapsa con más facilidad al dormir. En la hipoventilación se suma una respuesta ventilatoria central embotada frente al CO2 y una carga mecánica que el sistema no logra vencer, de modo que la hipercapnia deja de compensarse durante el dia. No se re-explica aquí el mecanismo de la obesidad, ya descrito en su ficha.',
      epidemiologia: 'La apnea obstructiva afecta a una proporción muy alta de los pacientes con obesidad grave y esta infradiagnosticada. La hipoventilación aparece en cerca del 10 al 20% de los pacientes con apnea y obesidad grave, y su mortalidad sin tratamiento es considerablemente mayor.',
      factores_riesgo: ['IMC elevado y adiposidad de cuello (perímetro cervical grande)', 'Sexo masculino y edad media', 'Menopausia en la mujer', 'Retrognatia y alteraciones craneofaciales', 'Consumo de alcohol y de sedantes o de opioides', 'Hipotiroidismo y acromegalia', 'Congestión nasal crónica'],
      clinica: 'Ronquido intenso, apneas presenciadas, despertares con ahogo, sueno no reparador, somnolencia diurna excesiva, cefalea matutina, nicturia, irritabilidad y deterioro de la concentración. En la hipoventilación se anaden disnea, edemas, poliglobulia y signos de cor pulmonale, y con frecuencia se descubre tras una descompensación respiratoria hipercápnica.',
      criterios_dx: 'Apnea: poligrafia respiratoria o polisomnografía con índice de apnea-hipopnea de 5 o más eventos por hora con síntomas, o de 15 o más con independencia de los síntomas; se gradua en leve (5 a 15), moderada (15 a 30) y grave (más de 30). Hipoventilación: IMC de 30 o más con PaCO2 diurna mayor de 45 mmHg, tras excluir enfermedad pulmonar, neuromuscular o farmacológica que la explique; un bicarbonato sérico elevado sirve de cribado.',
      laboratorio: 'Gasometría arterial diurna (imprescindible para el diagnóstico de hipoventilación), bicarbonato sérico como cribado, hemograma (poliglobulia), TSH y función renal.',
      imagen: 'Radiografía de tórax; ecocardiograma si se sospecha hipertensión pulmonar o cor pulmonale, frecuentes en la hipoventilación de larga evolución.',
      complementarios: 'Cuestionario STOP-BANG o escala de Epworth para el cribado; valoración por neumología y unidad del sueno; y evaluación de la aptitud para conducir o para trabajos de riesgo, que es una obligacion médica y legal.',
      dx_diferencial: 'Apnea central del sueno, síndrome de piernas inquietas, narcolepsia, hipoventilación por enfermedad neuromuscular o de la pared torácica, EPOC con hipercapnia, e hipotiroidismo grave.',
      tx_medico: 'La pérdida de peso es el único tratamiento que actúa sobre la causa: reducciones del 10% o más mejoran de forma significativa el índice de apnea-hipopnea y pueden resolver los casos leves. Se acompana de higiene del sueno, evitar alcohol y sedantes, terapia posicional si la apnea es dependiente de la posición, y tratamiento de la congestión nasal.',
      tx_farmacologico: 'No hay fármaco que trate la apnea directamente, pero los agonistas del receptor de GLP-1 y la tirzepatida, al producir pérdidas de peso grandes, han demostrado reducir de forma marcada el índice de apnea-hipopnea. Evitar sedantes, benzodiacepinas y opioides, que empeoran las apneas y la hipoventilación.',
      tx_intervencionista: 'Presión positiva continua (CPAP) como tratamiento de elección de la apnea moderada o grave. En la hipoventilación, ventilación no invasiva binivel, sobre todo si persiste la hipercapnia con CPAP o si el debut fue una insuficiencia respiratoria aguda. Cirugía metabólica cuando esta indicada; cirugía de la via aérea superior o dispositivos de avance mandibular en casos seleccionados.',
      criterios_uci: 'Insuficiencia respiratoria hipercápnica aguda o agudizada, que se maneja con ventilación no invasiva en área monitorizada (ver el tema de Ventilación Mecánica).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Riesgo perioperatorio elevado: prever via aérea difícil, evitar sedantes y opioides o usarlos con monitorización, mantener la CPAP o la ventilación domiciliaria durante el ingreso, y vigilar la desaturación nocturna postoperatoria.',
      seguimiento_ambulatorio: 'Control de la adherencia y de la eficacia del dispositivo (horas de uso e índice residual), reevaluación del estudio del sueno tras pérdidas de peso importantes (puede permitir retirar la CPAP), y gasometría de control en la hipoventilación.',
      pronostico: 'La apnea tratada mejora la somnolencia, la calidad de vida y la presión arterial. La hipoventilación no tratada tiene una mortalidad alta que la ventilación no invasiva y la pérdida de peso reducen de forma sustancial.',
      algoritmo: ['Cribar con STOP-BANG y Epworth a todo paciente con obesidad; medir bicarbonato sérico como cribado de hipoventilación', 'Confirmar con poligrafia o polisomnografía; gasometría arterial diurna si se sospecha hipoventilación', 'Pérdida de peso como tratamiento causal; evitar alcohol, sedantes y opioides', 'CPAP en la apnea moderada o grave; ventilación no invasiva binivel en la hipoventilación', 'Vigilar la adherencia, ajustar tras pérdidas de peso importantes y extremar precauciones en el perioperatorio']
    },
    {
      nombre: 'Enfermedad hepática esteatosica metabólica',
      color: '#8a6a1f',
      definicion: 'Complicación hepática de la obesidad y de la disfunción metabólica (ver la ficha de Obesidad común): acumulación de grasa en más del 5% de los hepatocitos en una persona con al menos un factor de riesgo cardiometabolico. Su forma inflamatoria (esteatohepatitis) puede progresar a fibrosis, cirrosis y hepatocarcinoma. La nomenclatura de 2023 sustituyo los términos basados en el alcohol por una definición positiva basada en la disfunción metabólica.',
      fisiopatologia: 'La resistencia a la insulina y el desbordamiento de la capacidad del tejido adiposo llevan ácidos grasos libres al hígado, donde se acumulan como triglicéridos. Sobre esa esteatosis, la lipotoxicidad, el estrés oxidativo, la disfunción mitocondrial y las senales del intestino activan la inflamación y la fibrogénesis estrellada. El mecanismo de la obesidad esta descrito en su ficha; lo específico aquí es que el hígado se convierte en depósito ectópico de grasa.',
      epidemiologia: 'Es la hepatopatía crónica más frecuente del mundo y afecta a la mayoría de los pacientes con obesidad y diabetes tipo 2. Solo una minoría progresa a fibrosis avanzada, pero al ser tan prevalente ya es una de las principales causas de cirrosis y de trasplante hepático.',
      factores_riesgo: ['Obesidad, sobre todo de distribución visceral', 'Diabetes tipo 2 y prediabetes', 'Dislipidemia aterogenica e hipertensión arterial', 'Síndrome de ovario poliquistico y apnea del sueno', 'Variantes genéticas (PNPLA3, TM6SF2, HSD17B13)', 'Sarcopenia', 'Consumo de alcohol concomitante, que multiplica el riesgo de progresión'],
      clinica: 'Casi siempre asintomática; se detecta por transaminasas elevadas o por esteatosis en una ecografía pedida por otro motivo. Puede cursar con astenia o molestia en el hipocondrio derecho. Cuando aparecen los signos de hepatopatía avanzada (aranas vasculares, ascitis, encefalopatía) la enfermedad ya esta establecida, y el hepatocarcinoma puede aparecer incluso sin cirrosis.',
      criterios_dx: 'Esteatosis demostrada por imagen o histología más al menos un criterio cardiometabolico, tras valorar el consumo de alcohol y descartar otras hepatopatías. Lo determinante no es diagnosticar la esteatosis sino <strong>estratificar la fibrosis</strong>: el índice FIB-4 como primer paso en todo paciente con obesidad o diabetes, y elastografía si el FIB-4 es indeterminado o alto.',
      laboratorio: 'Transaminasas, GGT, plaquetas y albúmina para el FIB-4; perfil metabólico completo; y serologías virales, ferritina con índice de saturación, autoanticuerpos, ceruloplasmina y alfa-1-antitripsina para descartar otras causas cuando proceda.',
      imagen: 'Ecografía como primera aproximación (poco sensible por debajo del 20% de esteatosis); elastografía de transición con parámetro de atenuacion controlada para cuantificar grasa y rigidez; resonancia con fracción de grasa o elastografía por resonancia en casos seleccionados y en ensayos.',
      complementarios: 'Biopsia hepática solo cuando persiste la duda diagnóstica o hay sospecha de otra hepatopatía coexistente. Cribado de varices y de hepatocarcinoma cuando ya hay cirrosis (ver el tema de Cirrosis Hepática).',
      dx_diferencial: 'Hepatopatía alcohólica (y las formas mixtas, que hoy tienen categoría propia), hepatitis viral crónica, hepatitis autoinmune, hemocromatosis, enfermedad de Wilson, déficit de alfa-1-antitripsina y esteatosis por fármacos (metotrexato, tamoxifeno, amiodarona, corticoides).',
      tx_medico: 'La pérdida de peso es el tratamiento central y funciona por umbrales: un 5% reduce la esteatosis, un 7 a 10% resuelve la esteatohepatitis y un 10% o más puede mejorar la fibrosis. Se acompana de dieta mediterránea, restricción de azucares libres y fructosa, ejercicio (útil incluso sin pérdida de peso), abstinencia o reducción estricta del alcohol, y control de la diabetes y de los lípidos.',
      tx_farmacologico: 'Resmetirom (agonista selectivo del receptor tiroideo beta) es el primer fármaco aprobado específicamente para la esteatohepatitis con fibrosis significativa. Los agonistas del receptor de GLP-1 y la tirzepatida mejoran la esteatohepatitis a través de la pérdida de peso y del control metabólico; la pioglitazona tiene evidencia en pacientes con diabetes tipo 2; y la vitamina E se ha usado en no diabéticos sin cirrosis. Las estatinas son seguras y están indicadas por el riesgo cardiovascular, que es la primera causa de muerte en estos pacientes.',
      tx_intervencionista: 'La cirugía metabólica produce la mejoría histológica más consistente, incluida la regresión de la fibrosis en una proporción importante. El trasplante hepático en la cirrosis descompensada o el hepatocarcinoma dentro de criterios.',
      criterios_uci: 'No aplica salvo en la descompensación de una cirrosis ya establecida.',
      criterios_tips: 'Los propios de la hipertensión portal en la fase de cirrosis (ver el tema de Cirrosis Hepática).',
      seguimiento_hospitalario: 'En un ingreso por otra causa, calcular el FIB-4 y dejar planificada la estratificación de fibrosis al alta: es una de las oportunidades pérdidas más frecuentes.',
      seguimiento_ambulatorio: 'FIB-4 cada 1 a 3 anos según el riesgo, elastografía periódica si hay fibrosis intermedia, y derivación a hepatologia si el FIB-4 supera 2.67 o la elastografía indica fibrosis avanzada. Control estricto del riesgo cardiovascular, que es lo que mata a la mayoría.',
      pronostico: 'La mayoría de los pacientes no progresa. El determinante pronóstico es el <strong>estadio de fibrosis</strong>, no la inflamación ni la cantidad de grasa. La primera causa de muerte es cardiovascular, no hepática, salvo en los estadios avanzados.',
      algoritmo: ['Calcular el FIB-4 en todo paciente con obesidad o diabetes, aunque las transaminasas sean normales', 'FIB-4 menor de 1.3: riesgo bajo, repetir en 1 a 3 anos. Indeterminado o mayor de 2.67: elastografía', 'Descartar otras hepatopatías y cuantificar el consumo de alcohol', 'Pérdida de peso por umbrales (5% esteatosis, 7 a 10% esteatohepatitis, 10% o más fibrosis) con dieta mediterránea y ejercicio', 'Resmetirom en esteatohepatitis con fibrosis significativa; agonistas de GLP-1 o tirzepatida; pioglitazona si hay diabetes; estatina por el riesgo cardiovascular']
    },
    {
      nombre: 'Complicaciones mecánicas, reproductivas y oncológicas',
      color: '#6b4a2e',
      definicion: 'Conjunto de complicaciones de la obesidad (ver la ficha de Obesidad común) que no son cardiometabolicas ni respiratorias: las derivadas de la carga mecánica sobre articulaciones y tejidos, las que afectan a la función reproductiva, y el exceso de riesgo oncológico. Son las que más pesan en la calidad de vida y las que menos se buscan.',
      fisiopatologia: 'La carga mecánica acelera el desgaste articular y dificulta el retorno venoso y linfático. En lo reproductivo, el tejido adiposo aromatiza andrógenos a estrógenos y la resistencia a la insulina eleva los andrógenos ovaricos y baja la globulina transportadora de hormonas sexuales, lo que explica el síndrome de ovario poliquistico en la mujer y el hipogonadismo en el varón. En lo oncológico intervienen la hiperinsulinemia con exceso de senal por IGF-1, el hiperestrogenismo y la inflamación crónica. El mecanismo de la obesidad esta en su ficha.',
      epidemiologia: 'La artrosis de rodilla es una de las causas más frecuentes de discapacidad asociada a la obesidad. El grupo de trabajo de la IARC reconoce trece localizaciones tumorales con evidencia suficiente de asociación con el exceso de adiposidad, entre ellas endometrio, mama posmenopáusica, colon y recto, rinon, hígado, páncreas y adenocarcinoma de esófago.',
      factores_riesgo: ['IMC elevado y su duración acumulada a lo largo de la vida', 'Distribución central de la grasa', 'Alteraciones de la alineacion articular y antecedentes de lesión', 'Sedentarismo con pérdida de masa muscular estabilizadora', 'Hiperinsulinemia y resistencia a la insulina', 'Hiperestrogenismo en la mujer posmenopáusica', 'Reflujo gastroesofágico crónico (para el adenocarcinoma de esófago)'],
      clinica: 'Mecánicas: gonalgia y coxalgia mecánicas, lumbalgia, insuficiencia venosa con edema y dermatitis de estasis, linfedema, celulitis de repetición, intertrigo, hidradenitis supurativa, hernias de pared, reflujo e incontinencia urinaria de esfuerzo. Reproductivas: oligomenorrea, hirsutismo e infertilidad en la mujer; disminución de la libido y disfunción eréctil en el varón; complicaciones obstétricas (diabetes gestacional, preeclampsia, macrosomia, cesarea). Oncológicas: las propias del tumor, a menudo diagnosticado más tarde porque la exploración y el cribado son más difíciles.',
      criterios_dx: 'Los propios de cada entidad. Lo relevante es <strong>buscarlas de forma activa</strong> en la consulta de obesidad: preguntar por dolor articular y limitación, por ciclos menstruales y función sexual, y verificar que el paciente esta al dia en los programas de cribado oncológico, que cumple peor y con más dificultad técnica.',
      laboratorio: 'Según la sospecha: andrógenos, globulina transportadora de hormonas sexuales, LH y FSH y ecografía en el síndrome de ovario poliquistico; testosterona total y libre matutina en el varón; y el estudio propio de cada tumor.',
      imagen: 'Radiografía de las articulaciones sintomáticas; ecografía Doppler venosa ante edema asimétrico; y las pruebas de cribado oncológico correspondientes, teniendo en cuenta que la mamografía, la ecografía y la colonoscopia son técnicamente más difíciles y pueden requerir adaptaciones.',
      complementarios: 'Fisioterapia y programa de ejercicio adaptado (trabajo en descarga, agua, bicicleta); valoración por ginecologia, urologia o cirugía según corresponda; y revisión explícita del calendario de cribado oncológico en cada visita.',
      dx_diferencial: 'Artritis inflamatoria frente a artrosis mecánica, trombosis venosa profunda frente a insuficiencia venosa crónica, y las causas no relacionadas con la obesidad de amenorrea, hirsutismo o hipogonadismo.',
      tx_medico: 'La pérdida de peso mejora todas: reduce el dolor y la función en la artrosis (cada kilo perdido descarga varios kilos de fuerza en la rodilla al caminar), restaura la ovulacion y la fertilidad en una proporción alta de mujeres con síndrome de ovario poliquistico, mejora la testosterona en el varón y reduce el riesgo oncológico a largo plazo. Se acompana de ejercicio adaptado, fisioterapia, medidas de compresión en la insuficiencia venosa y cuidado de los pliegues.',
      tx_farmacologico: 'Analgesia escalonada para el dolor articular, evitando el uso crónico de antiinflamatorios; metformina y anticonceptivos combinados en el síndrome de ovario poliquistico según el objetivo; y tratamiento del hipogonadismo tras confirmarlo, teniendo en cuenta que la pérdida de peso por si sola suele mejorar la testosterona.',
      tx_intervencionista: 'Artroplastia de rodilla o cadera cuando la artrosis es incapacitante (los resultados mejoran si se pierde peso antes); cirugía de hernias y de hidradenitis; y técnicas de reproduccion asistida cuando la pérdida de peso no basta.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En el ingreso quirúrgico, prevención activa de las úlceras por presión, del linfedema y de la trombosis con dosis de heparina ajustadas al peso, y movilización precoz.',
      seguimiento_ambulatorio: 'Revisar en cada visita el dolor y la función, la salud reproductiva y el cumplimiento del cribado oncológico. Insistir en el ejercicio de fuerza para preservar masa muscular, sobre todo durante las fases de pérdida de peso rápida.',
      pronostico: 'Muy sensible a la pérdida de peso: la función articular, la fertilidad y la calidad de vida mejoran de forma proporcional. El riesgo oncológico disminuye tras pérdidas de peso mantenidas, y la cirugía metabólica se ha asociado a menor incidencia y mortalidad por cáncer.',
      algoritmo: ['Buscar de forma activa el dolor articular, la limitación funcional, la salud reproductiva y el estado del cribado oncológico', 'Pérdida de peso como tratamiento transversal: mejora la artrosis, la fertilidad, el hipogonadismo y el riesgo oncológico', 'Ejercicio adaptado con trabajo de fuerza y fisioterapia; compresión en la insuficiencia venosa; cuidado de los pliegues', 'Tratar cada entidad según su guía; evitar el uso crónico de antiinflamatorios', 'Adaptar y asegurar el cribado oncológico, que se cumple peor y es técnicamente más difícil en la obesidad']
    },
    {
      nombre: 'Complicaciones del tratamiento',
      color: '#8c3a34',
      definicion: 'Efectos adversos y consecuencias del propio tratamiento de la obesidad (ver la ficha de Obesidad común): los de los fármacos, en especial los agonistas del receptor de GLP-1 y la tirzepatida, y los de la cirugía metabólica, que exige un seguimiento nutricional de por vida. Incluye también la reganancia de peso al suspender el tratamiento, que es una propiedad de la enfermedad y no un fracaso del paciente.',
      fisiopatologia: 'Los agonistas de GLP-1 enlentecen el vaciamiento gástrico y actuan en el área postrema, lo que explica las náuseas y los vómitos. La cirugía restringe el volumen y, en las técnicas con derivación, reduce la superficie de absorción y altera la senal enteroinsular: de ahi los déficits nutricionales y la hipoglucemia posprandial hiperinsulinemica. La pérdida de peso rápida, sea cual sea el medio, favorece la litiasis biliar y la pérdida de masa magra y de hueso.',
      epidemiologia: 'Los efectos digestivos de los agonistas de GLP-1 son muy frecuentes pero casi siempre leves y transitorios, y solo una minoría abandona por ellos. Los déficits nutricionales tras cirugía son la regla si no se suplementa, y la reganancia significativa afecta a una parte relevante de los operados a partir del segundo o tercer ano.',
      factores_riesgo: ['Escalado rápido de dosis del agonista de GLP-1 o de la tirzepatida', 'Antecedente de pancreatitis, gastroparesia o litiasis biliar', 'Antecedente personal o familiar de carcinoma medular de tiroides o MEN2 (contraindicación)', 'Técnicas quirúrgicas con derivación (bypass, derivación biliopancreatica) frente a la manga', 'Falta de adherencia a la suplementación y al seguimiento tras la cirugía', 'Pérdida de peso muy rápida (litiasis y pérdida de masa magra)', 'Trastorno por consumo de alcohol o antecedente de trastorno de la conducta alimentaria', 'Retirada del fármaco sin plan de mantenimiento'],
      clinica: 'Fármacos: náuseas, vómitos, estrenimiento o diarrea, dispepsia; con menor frecuencia colelitiasis sintomática y pancreatitis. Cirugía: síndrome de dumping precoz (rubor, taquicardia, dolor abdominal y diarrea tras la comida) y tardío o hipoglucemia posprandial hiperinsulinemica; anemia, neuropatía y ataxia por déficits de hierro, B12, tiamina, cobre o vitaminas liposolubles; osteoporosis; estenosis, úlcera marginal, hernia interna con obstrucción, y reflujo (más tras la manga gástrica). Además, pérdida de masa magra y flacidez cutánea con impacto psicológico.',
      criterios_dx: 'Clínico y analítico según la sospecha. Ante dolor abdominal en un operado hay que pensar siempre en <strong>hernia interna</strong>, que puede cursar con estudios normales y requiere un umbral bajo para la exploración quirúrgica. Ante síntomas neurológicos precoces tras la cirugía, descartar déficit de tiamina antes de administrar glucosa.',
      laboratorio: 'Tras cirugía y de por vida: hemograma, ferritina y hierro, vitamina B12, folato, calcio, vitamina D y hormona paratiroidea, cinc, cobre, vitamina A y tiamina según la técnica. Amilasa y lipasa si hay dolor abdominal con sospecha de pancreatitis; glucemia durante los síntomas si se sospecha hipoglucemia posprandial.',
      imagen: 'Ecografía abdominal ante dolor o sospecha de litiasis; tomografía con contraste oral e intravenoso ante sospecha de hernia interna u obstrucción; endoscopia ante reflujo, disfagia o sospecha de úlcera marginal o estenosis; densitometría periódica.',
      complementarios: 'Seguimiento por un equipo multidisciplinar con nutrición clínica; educación sobre el fraccionamiento de las comidas, la masticación y la separación de los líquidos; y valoración de salud mental, incluido el riesgo de trastorno por consumo de alcohol, que aumenta tras el bypass.',
      dx_diferencial: 'Distinguir las náuseas del escalado de dosis de una gastroparesia establecida o de una obstrucción; la hipoglucemia posprandial del dumping precoz; y la reganancia por adaptación fisiológica de la debida a dilatación del reservorio o a un cambio de hábitos.',
      tx_medico: 'Prevención sobre todo: escalado lento de la dosis, comidas pequenas y bajas en grasa, y buena hidratación para los efectos digestivos; suplementación sistemática de por vida tras la cirugía (multivitaminico, hierro, calcio con vitamina D y B12, ajustados a la técnica); y ejercicio de fuerza con aporte proteico suficiente para preservar masa magra durante la pérdida.',
      tx_farmacologico: 'Antieméticos y ajuste o pausa del escalado en los efectos digestivos; inhibidores de la bomba de protones y profilaxis de la úlcera marginal tras el bypass; ácido ursodesoxicólico para prevenir la litiasis durante la pérdida rápida en pacientes seleccionados. En la hipoglucemia posprandial, dieta con carbohidratos de bajo índice glucémico fraccionada, y acarbosa o análogos de somatostatina en los casos refractarios. En la reganancia, reintroducir o intensificar el tratamiento farmacológico.',
      tx_intervencionista: 'Colecistectomía en la litiasis sintomática; dilatación endoscópica de las estenosis; cirugía urgente ante hernia interna con obstrucción; y cirugía de revisión o reconversion en casos seleccionados de reganancia o de complicación mecánica. Cirugía plástica reparadora tras la estabilización del peso.',
      criterios_uci: 'Complicaciones quirúrgicas graves (fuga anastomotica, obstrucción con isquemia, sepsis abdominal), pancreatitis grave, o encefalopatía de Wernicke por déficit de tiamina.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En todo operado que ingresa, revisar la suplementación, administrar tiamina antes que glucosa si hay vómitos prolongados o desnutrición, y mantener un umbral bajo para la imagen ante dolor abdominal.',
      seguimiento_ambulatorio: 'Tras cirugía: controles a 1, 3, 6 y 12 meses y después anuales de por vida, con analítica de micronutrientes y densitometría periódica. Con fármacos: vigilar tolerancia y adherencia, y planificar de forma explícita el mantenimiento a largo plazo en vez de suspender por objetivo alcanzado.',
      pronostico: 'La mayoría de los efectos adversos son manejables y no obligan a suspender. El riesgo real es doble: abandonar un tratamiento eficaz por efectos leves y evitables, o perder de vista a un paciente operado que dejara de suplementarse y desarrollara déficits graves anos después.',
      algoritmo: ['Escalar la dosis del agonista de GLP-1 o de la tirzepatida despacio y ajustar la dieta para limitar los efectos digestivos', 'Suplementación sistemática y de por vida tras la cirugía, con analítica de micronutrientes en cada control', 'Dolor abdominal en un operado: pensar en hernia interna y tener umbral bajo para la tomografía y la cirugía', 'Síntomas neurológicos tras vómitos prolongados: tiamina antes que glucosa', 'Planificar el mantenimiento: la reganancia al suspender es fisiológica, no un fracaso del paciente']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La obesidad se maneja de forma ambulatoria y crónica, pero el hospital es donde se hacen visibles sus consecuencias y donde más se descuida como diagnóstico. El ingreso es a la vez un periodo de riesgo específico (via aérea, ventilación, dosificación, trombosis, piel) y una oportunidad de iniciar o reactivar un tratamiento que casi nunca se prescribe al alta.',
    parametros: ['Registrar peso, talla, IMC y perímetro de cintura al ingreso: sin dato no hay diagnóstico ni seguimiento', 'Dosificar los fármacos según el parámetro correcto (peso real, ajustado o ideal según el fármaco), en particular heparinas de bajo peso molecular, antibióticos y anestésicos', 'Profilaxis antitrombótica con dosis ajustada al peso y movilización precoz', 'Prever la via aérea difícil y la desaturación rápida; mantener la CPAP o la ventilación no invasiva domiciliaria durante el ingreso', 'Evitar sedantes y opioides o usarlos con monitorización en el paciente con apnea o hipoventilación', 'Prevención activa de úlceras por presión, intertrigo y lesiones cutáneas en pliegues', 'Comprobar que el mobiliario, la cama, la bascula y la mesa quirúrgica son adecuados: la falta de equipamiento es una causa evitable de mala atención', 'En el paciente operado de cirugía metabólica: revisar la suplementación y administrar tiamina antes que glucosa si hay vómitos prolongados', 'Calcular el índice FIB-4 y solicitar HbA1c y perfil lipídico si no hay datos recientes', 'Al alta: diagnóstico de obesidad en el informe, plan de tratamiento explícito y cita de seguimiento; y lenguaje centrado en la persona, sin estigma'],
    criterios_uci_general: 'No los determina la obesidad en si, sino sus complicaciones: insuficiencia respiratoria hipercápnica, complicaciones quirúrgicas graves, o cualquier proceso agudo en el que la obesidad dificulte el soporte (via aérea, ventilación, accesos vasculares, imagen).',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'La obesidad grave puede ser una barrera para el trasplante de órgano sólido; en esos casos la cirugía metabólica se usa como puente para alcanzar los criterios de inclusion. El trasplante hepático corresponde a la cirrosis por enfermedad hepática esteatosica metabólica.',
    prevencion: 'Primaria: entorno alimentario y políticas de salud publica (etiquetado frontal, impuestos a bebidas azucaradas, regulación de la publicidad dirigida a menores), promocion de la actividad física y sueno suficiente desde la infancia, con atención a la ganancia de peso gestacional y a los primeros anos de vida. Secundaria: medir peso, talla y cintura de forma sistemática en toda consulta para detectar la ganancia antes de que se consolide, y actuar en los momentos de riesgo (embarazo, menopausia, abandono del tabaco, inicio de fármacos que hacen ganar peso, inmovilización). Terciaria: tratar la obesidad como enfermedad crónica, con tratamiento sostenido y seguimiento de por vida, y erradicar el estigma del peso en la atención sanitaria, que retrasa la consulta y empeora los resultados.'
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
  'Obesidad común (poligenica)': { definicion: [1, 3, 4, 5], criterios_dx: [1, 3, 4, 5], laboratorio: [1, 3, 4, 5], tx_farmacologico: [1, 3, 4, 5] },
  'Obesidad monogenica y sindrómica': { definicion: [15, 16], criterios_dx: [15, 16], laboratorio: [15, 16], tx_farmacologico: [15, 16] },
  'Obesidad secundaria (endocrina y farmacológica)': { definicion: [8, 1], criterios_dx: [8, 1], laboratorio: [8, 1], tx_farmacologico: [8, 1] },
  'Apnea obstructiva del sueno e hipoventilación por obesidad': { definicion: [19, 20], criterios_dx: [19, 20], laboratorio: [19, 20], tx_farmacologico: [19, 20] },
  'Enfermedad hepática esteatosica metabólica': { definicion: [17, 18], criterios_dx: [17, 18], laboratorio: [17, 18], tx_farmacologico: [17, 18] },
  'Complicaciones mecánicas, reproductivas y oncológicas': { definicion: [21, 1], criterios_dx: [21, 1], laboratorio: [21, 1], tx_farmacologico: [21, 1] },
  'Complicaciones del tratamiento': { definicion: [22, 22, 13, 14], criterios_dx: [22, 22, 13, 14], laboratorio: [22, 22, 13, 14], tx_farmacologico: [22, 22, 13, 14] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación por índice de masa corporal (calculadora disponible)': [1, 8],
  'Adiposidad central: cintura e índice cintura-talla (calculadora disponible)': [1],
  'Obesidad preclinica frente a clínica (comision de The Lancet, 2025)': [1],
  'Sistema de estadificación de Edmonton (calculadora disponible)': [2],
  'Indicación de cirugía metabólica (ASMBS/IFSO 2022; calculadora disponible)': [6, 7]
};
export const escalaCalc = {
  'Clasificación por índice de masa corporal (calculadora disponible)': 'imc-cintura',
  'Adiposidad central: cintura e índice cintura-talla (calculadora disponible)': 'imc-cintura',
  'Sistema de estadificación de Edmonton (calculadora disponible)': 'eoss',
  'Indicación de cirugía metabólica (ASMBS/IFSO 2022; calculadora disponible)': 'cirugia-metabolica'
};
export const compGroups = [
  { name: 'Formas de obesidad', items: ['Obesidad común (poligenica)', 'Obesidad monogenica y sindrómica', 'Obesidad secundaria (endocrina y farmacológica)'] },
  { name: 'Complicaciones propias', items: ['Apnea obstructiva del sueno e hipoventilación por obesidad', 'Enfermedad hepática esteatosica metabólica', 'Complicaciones mecánicas, reproductivas y oncológicas', 'Complicaciones del tratamiento'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las formas de obesidad: la común poligenica, que explica la inmensa mayoría de los casos; las monogenicas y sindrómicas, raras pero con tratamiento dirigido en algunos casos; y la secundaria a una enfermedad endocrina, a una lesión hipotalámica o a un fármaco. Las cuatro últimas son las complicaciones propias de la obesidad: respiratorias, hepáticas, mecánicas y reproductivas y oncológicas, más las del propio tratamiento. Las complicaciones cardiometabolicas se desarrollan en el tema del síndrome cardiovascular-renal-metabólico.';
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
      { title: 'IMC y adiposidad central', sub: 'Cintura e índice cintura-talla', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Preclinica frente a clínica', sub: 'Comision de The Lancet 2025', color: '#5f7a4a', target: 'clasificacion' },
      { title: 'Estadificación de Edmonton', sub: 'Gradua el dano, no el peso', color: '#8a6a1f', target: 'clasificacion' }
    ] },
    { title: 'Formas', sub: 'Una común y dos que hay que reconocer', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Común poligenica', sub: 'La inmensa mayoría', color: '#5f7a4a', target: 'complicaciones' },
      { title: 'Monogenica y sindrómica', sub: 'Inicio precoz; setmelanotida', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Secundaria', sub: 'Endocrina, hipotalámica o por fármacos', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones propias', sub: 'Las cardiometabolicas van en el tema CKM', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Apnea e hipoventilación', sub: 'CPAP y ventilación no invasiva', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Enfermedad hepática esteatosica', sub: 'Lo que importa es la fibrosis', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Mecánicas y oncológicas', sub: 'Artrosis, fertilidad, 13 canceres', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Del tratamiento', sub: 'Fármacos, cirugía y reganancia', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 18], no_invasivos: [1, 2], imagen: [18] };
export const clasificacionCite = [1, 2, 6];
export const seguimientoCite = [1, 9];
