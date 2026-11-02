// topics/diabetes-mellitus/content.js: Diabetes Mellitus.
// Cubre los items "Diagnostico y metas de control en tipo 1 y tipo 2", "Complicaciones cronicas
// microvasculares y macrovasculares", "Pie diabetico" e "Hipoglucemia y diabetes gestacional"
// del cluster "Diabetes mellitus" (bloque VII, Endocrinologia y Metabolismo) del temario.
// "Cetoacidosis diabetica y estado hiperosmolar hiperglucemico" es un tema aparte
// (topics/cetoacidosis-estado-hiperosmolar): aqui la CAD y el EHH solo se nombran como las
// urgencias hiperglucemicas, con su tema propio.
//
// Fuentes principales: ADA Standards of Care in Diabetes 2026; consenso ADA/EASD 2022 (Davies)
// de manejo de la hiperglucemia en la DM2; KDIGO 2022 (diabetes y ERC); ensayos de resultados
// cardiovasculares y renales (EMPA-REG, LEADER, CREDENCE, DAPA-CKD, FLOW, FIDELIO); DCCT y UKPDS.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada complicacion son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura (decision del usuario): tema principal (dx, metas, tratamiento) + 7 fichas de
// complicaciones (hipoglucemia; retinopatia; enfermedad renal diabetica; neuropatia; pie
// diabetico; enfermedad cardiovascular y sindrome cardio-renal-metabolico; diabetes gestacional).
// 4 calculadoras (metas-hba1c, hba1c-glucosa, dosis-insulina, findrisc). 4 figuras HTML a mano.
// Sin em dash en todo el archivo (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'diabetes-mellitus',
  titulo: 'Diabetes Mellitus',
  subtitulo: 'Módulo 38 · Medicina Interna',
  accent: '#1f6f6b',
  accentDim: '#8fbcb9'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const dxHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #1f6f6b;background:#1f6f6b18;border-radius:8px;padding:6px 10px;"><strong style="color:#1f6f6b;">Indicación.</strong> Síntomas de hiperglucemia (poliuria, polidipsia, pérdida de peso, visión borrosa) o cribado en adultos con sobrepeso y un factor de riesgo, a partir de los 35 anos en todos, y en el embarazo.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;">Glucosa plasmática en ayuno <strong>126 mg/dL o mayor</strong> (ayuno de 8 h)</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;"><strong>HbA1c 6.5% o mayor</strong> (método estandarizado)</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;">PTOG con 75 g: glucosa a las 2 h <strong>200 mg/dL o mayor</strong></div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;">Glucosa al azar <strong>200 mg/dL o mayor</strong> con síntomas clásicos o crisis hiperglucemica</div>
    </div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">Confirmación.</strong> Un solo resultado alterado se confirma con una segunda prueba (la misma u otra) en un dia distinto, salvo hiperglucemia inequivoca (glucosa al azar 200 o mayor con síntomas o crisis).</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">Prediabetes.</strong> Ayuno 100 a 125 mg/dL, HbA1c 5.7 a 6.4%, o glucosa a las 2 h en PTOG de 140 a 199 mg/dL. Riesgo alto de progresión: dieta, ejercicio y pérdida de peso; metformina si hay factores anadidos.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">Valores de la ADA. En el embarazo se aplican criterios propios (ver la ficha de diabetes gestacional). La HbA1c no es fiable con anemia, hemoglobinopatías, ferropenia, hemólisis, embarazo o enfermedad renal avanzada.</div>
</div>`;

const escalonHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="border:1px solid #1f6f6b;background:#1f6f6b18;border-radius:8px;padding:6px 10px;margin-bottom:6px;"><strong style="color:#1f6f6b;">Base en todos.</strong> Educación, alimentación, actividad física, control del peso y del resto de factores de riesgo, y metformina salvo contraindicación (filtrado glomerular menor de 30, hipoxia tisular aguda).</div>
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 10px;background:#8c3a3412;"><strong style="color:#8c3a34;">ECV ateroesclerótica o riesgo cardiovascular alto:</strong> agonista del receptor de GLP-1 con beneficio cardiovascular probado, o inhibidor de SGLT2.</div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 10px;background:#8c3a3412;"><strong style="color:#8c3a34;">Insuficiencia cardiaca:</strong> inhibidor de SGLT2.</div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:6px 10px;background:#8a6a1f12;"><strong style="color:#8a6a1f;">Enfermedad renal diabética (filtrado 20 o mayor, albuminuria):</strong> inhibidor de SGLT2; anadir agonista de GLP-1 (FLOW) y finerenona si persiste la albuminuria pese a IECA o ARA y SGLT2.</div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 10px;background:#3f6b5212;"><strong style="color:#3f6b52;">Obesidad o prioridad de perder peso:</strong> agonista de GLP-1 o tirzepatida (agonista dual GIP/GLP-1); valorar cirugía metabólica.</div>
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:6px 10px;background:#3d5a7312;"><strong style="color:#3d5a73;">Coste o acceso como prioridad, sin los factores anteriores:</strong> sulfonilurea o pioglitazona. Insulina si la HbA1c es muy alta, hay pérdida de peso o síntomas de catabolismo.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">La elección no depende solo de la HbA1c: los inhibidores de SGLT2 y los agonistas de GLP-1 reducen eventos cardiovasculares y renales con independencia del control glucémico. Reevaluar e intensificar cada 3 a 6 meses hasta la meta. En la DM1 el tratamiento es siempre insulina (basal-bolo o infusión subcutánea continua) con conteo de carbohidratos y, si es posible, monitorización continua de glucosa.</div>
</div>`;

const pieHtml = `
<div style="max-width:560px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <table style="border-collapse:collapse;width:100%;min-width:440px;">
    <thead><tr style="background:var(--panel2);">
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Grado de Wagner</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Lesión</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">0</td><td style="padding:3px 6px;border:1px solid var(--line);">Pie de riesgo sin úlcera: deformidad, callo, neuropatía o enfermedad arterial</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">1</td><td style="padding:3px 6px;border:1px solid var(--line);">Úlcera superficial que no pasa de la dermis</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">2</td><td style="padding:3px 6px;border:1px solid var(--line);">Úlcera profunda hasta tendón, capsula o hueso, sin absceso ni osteomielitis</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">3</td><td style="padding:3px 6px;border:1px solid var(--line);">Úlcera profunda con absceso, osteomielitis o artritis séptica</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">4</td><td style="padding:3px 6px;border:1px solid var(--line);">Gangrena localizada (antepie o talón)</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">5</td><td style="padding:3px 6px;border:1px solid var(--line);">Gangrena de todo el pie</td></tr>
    </tbody>
  </table>
  <div style="color:var(--ink-dim);margin-top:4px;">La clasificación de la Universidad de Texas anade el estadio (A limpia, B infección, C isquemia, D infección más isquemia) y tiene mejor valor pronóstico. En toda úlcera valorar infección, isquemia (índice tobillo-brazo, presión en el dedo, oximetría transcutanea) y profundidad con la sonda ("probe to bone" positivo apoya osteomielitis).</div>
</div>`;

const retinopatiaHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">RD no proliferativa leve.</strong> Solo microaneurismas.</div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">RD no proliferativa moderada.</strong> Microaneurismas más hemorragias, exudados duros o algodonosos, sin llegar a los criterios de grave.</div>
    <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:8px;padding:6px 10px;"><strong style="color:#8c3a34;">RD no proliferativa grave (regla 4-2-1).</strong> Hemorragias intensas en los 4 cuadrantes, o arrosariamiento venoso en 2 o más, o anomalías microvasculares intrarretinianas en 1 o más. Alto riesgo de progresar a proliferativa.</div>
    <div style="border:1px solid #7a1f3d;background:#7a1f3d18;border-radius:8px;padding:6px 10px;"><strong style="color:#7a1f3d;">RD proliferativa.</strong> Neovascularizacion del disco o de la retina, hemorragia prerretiniana o vitrea; riesgo de desprendimiento traccional y de glaucoma neovascular.</div>
    <div style="border:1px solid #3d5a73;background:#3d5a7318;border-radius:8px;padding:6px 10px;"><strong style="color:#3d5a73;">Edema macular diabético.</strong> Engrosamiento retiniano en la macula; puede coexistir con cualquier estadio y es la principal causa de pérdida visual.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">Cribado con fondo de ojo bajo dilatación o retinografia: al diagnóstico en la DM2 y a los 5 anos del diagnóstico en la DM1, y luego cada ano (cada 1 a 2 anos si es normal de forma repetida y el control es bueno). Tratamiento: optimizar la glucemia y la presión arterial; fotocoagulación panretiniana en la proliferativa de alto riesgo; anti-VEGF intravitreo en el edema macular y como alternativa en la proliferativa.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La diabetes mellitus es un grupo de enfermedades metabólicas caracterizadas por hiperglucemia crónica por un defecto de la secreción de insulina, de su acción, o de ambas. La hiperglucemia mantenida lesiona con los anos la retina, el rinon, el nervio periférico y el árbol arterial, y las descompensaciones agudas (cetoacidosis, estado hiperosmolar, hipoglucemia) ponen en riesgo la vida a corto plazo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los tipos y su fisiopatología.</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>Diabetes tipo 1</strong> (5 a 10%): destrucción autoinmune de la célula beta con deficiencia absoluta de insulina y tendencia a la cetosis; autoanticuerpos positivos (anti-GAD65, IA-2, ZnT8, insulina). Suele debutar en la infancia o la juventud, a veces como cetoacidosis, pero puede aparecer a cualquier edad (LADA: forma de progresión lenta en el adulto).</li>
  <li><strong>Diabetes tipo 2</strong> (90 a 95%): resistencia a la insulina en el músculo, el hígado y el tejido adiposo junto con un fallo progresivo de la célula beta. Se asocia a obesidad, sedentarismo y antecedente familiar; a menudo cursa anos asintomática.</li>
  <li><strong>Diabetes gestacional</strong>: hiperglucemia detectada por primera vez en el embarazo que no cumple criterios de diabetes manifiesta (ver esa ficha).</li>
  <li><strong>Otros tipos específicos</strong>: MODY (monogenica, autosómica dominante, de inicio juvenil), diabetes pancreatogenica o tipo 3c (pancreatitis crónica, cáncer, fibrosis quística, hemocromatosis), endocrinopatías (Cushing, acromegalia), y la inducida por fármacos (glucocorticoides, antipsicóticos, inhibidores de la calcineurina, algunos antirretrovirales).</li>
</ul>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El diagnóstico.</strong></p>
${figBlock('Figura 1', 'Criterios diagnósticos de la ADA y confirmación', dxHtml)}
<p style="margin:0 0 12px;">Cualquiera de estos cuatro criterios establece el diagnóstico: glucosa plasmática en ayuno de <strong>126 mg/dL o mayor</strong>, <strong>HbA1c de 6.5% o mayor</strong>, glucosa a las 2 horas de una sobrecarga oral con 75 g de <strong>200 mg/dL o mayor</strong>, o glucosa al azar de <strong>200 mg/dL o mayor</strong> con síntomas clásicos. Salvo hiperglucemia inequivoca, se confirma con una segunda prueba en un dia distinto. La <strong>prediabetes</strong> (ayuno 100 a 125, HbA1c 5.7 a 6.4%, o 2 horas 140 a 199) identifica a personas con riesgo alto en las que la dieta, el ejercicio y la pérdida de peso reducen la progresión (y la metformina, en los de mayor riesgo).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las metas de control.</strong></p>
<p style="margin:0 0 12px;">Para la mayoría de los adultos, <strong>HbA1c menor de 7%</strong>, con glucosa preprandial de 80 a 130 y posprandial menor de 180 mg/dL. Una meta más estricta (menor de 6.5%) es razonable si se alcanza sin hipoglucemia ni carga de tratamiento; una meta más laxa (menor de 8%, o simplemente evitar la hiperglucemia sintomática) es apropiada en el anciano frágil, la comorbilidad avanzada, el antecedente de hipoglucemia grave o la expectativa de vida corta. Con monitorización continua de glucosa se anade el <strong>tiempo en rango</strong> (70 a 180 mg/dL) como objetivo (más del 70% del tiempo, con menos del 4% por debajo de 70). El control estricto previene sobre todo las complicaciones microvasculares (DCCT, UKPDS); su efecto macrovascular es menor y aparece a largo plazo (efecto de legado), y en pacientes de larga evolución y alto riesgo un control demasiado agresivo puede ser perjudicial (ACCORD).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento de la DM2, guiado por la comorbilidad.</strong></p>
${figBlock('Figura 2', 'Escalonamiento del tratamiento de la diabetes tipo 2', escalonHtml)}
<p style="margin:0 0 12px;">Sobre la base de estilo de vida y metformina, la elección del segundo fármaco ya no se guía solo por la HbA1c: en la enfermedad cardiovascular, la insuficiencia cardiaca y la enfermedad renal diabética se anaden de entrada un <strong>inhibidor de SGLT2</strong> o un <strong>agonista del receptor de GLP-1</strong> por su beneficio cardiovascular y renal demostrado, con independencia del control glucémico. En la obesidad se prioriza un agonista de GLP-1 o la tirzepatida y se valora la cirugía metabólica. En paralelo se tratan la presión arterial (objetivo menor de 130/80), los lípidos (estatina) y el tabaquismo, y se aplica el cribado periódico de complicaciones.</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Las complicaciones agudas son la hipoglucemia y las crisis hiperglucemicas (cetoacidosis diabética y estado hiperosmolar, con tema propio). Las crónicas son microvasculares (retinopatía, enfermedad renal diabética, neuropatía) y macrovasculares (enfermedad coronaria, cerebrovascular y arterial periférica), con el pie diabético como síndrome que combina neuropatía, isquemia e infección. La diabetes gestacional es una situación especial con criterios y objetivos propios. Todas se desarrollan en Complicaciones.</p>`;

export const bibliografia = [
  'American Diabetes Association Professional Practice Committee for Diabetes. Standards of Care in Diabetes 2026. Diabetes Care. 2026;49(Suppl 1).',
  'Davies MJ, Aroda VR, Collins BS, et al. Management of hyperglycaemia in type 2 diabetes, 2022. A consensus report by the American Diabetes Association and the European Association for the Study of Diabetes. Diabetes Care. 2022;45(11):2753-2786.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) Diabetes Work Group. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int. 2022;102(5S):S1-S127.',
  'The Diabetes Control and Complications Trial Research Group. The effect of intensive treatment of diabetes on the development and progression of long-term complications in insulin-dependent diabetes mellitus (DCCT). N Engl J Med. 1993;329(14):977-986.',
  'UK Prospective Diabetes Study (UKPDS) Group. Intensive blood-glucose control with sulphonylureas or insulin compared with conventional treatment and risk of complications in patients with type 2 diabetes (UKPDS 33). Lancet. 1998;352(9131):837-853.',
  'UK Prospective Diabetes Study (UKPDS) Group. Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34). Lancet. 1998;352(9131):854-865.',
  'Zinman B, Wanner C, Lachin JM, et al. Empagliflozin, cardiovascular outcomes, and mortality in type 2 diabetes (EMPA-REG OUTCOME). N Engl J Med. 2015;373(22):2117-2128.',
  'Marso SP, Daniels GH, Brown-Frandsen K, et al. Liraglutide and cardiovascular outcomes in type 2 diabetes (LEADER). N Engl J Med. 2016;375(4):311-322.',
  'Perkovic V, Jardine MJ, Neal B, et al. Canagliflozin and renal outcomes in type 2 diabetes and nephropathy (CREDENCE). N Engl J Med. 2019;380(24):2295-2306.',
  'Heerspink HJL, Stefansson BV, Correa-Rotter R, et al. Dapagliflozin in patients with chronic kidney disease (DAPA-CKD). N Engl J Med. 2020;383(15):1436-1446.',
  'Perkovic V, Tuttle KR, Rossing P, et al. Effects of semaglutide on chronic kidney disease in patients with type 2 diabetes (FLOW). N Engl J Med. 2024;391(2):109-121.',
  'Bakris GL, Agarwal R, Anker SD, et al. Effect of finerenone on chronic kidney disease outcomes in type 2 diabetes (FIDELIO-DKD). N Engl J Med. 2020;383(23):2219-2229.',
  'The ACCORD Study Group. Effects of intensive glucose lowering in type 2 diabetes. N Engl J Med. 2008;358(24):2545-2559.',
  'Holman RR, Paul SK, Bethel MA, et al. 10-year follow-up of intensive glucose control in type 2 diabetes (UKPDS post-trial monitoring). N Engl J Med. 2008;359(15):1577-1589.',
  'Nathan DM, Kuenen J, Borg R, et al. Translating the A1C assay into estimated average glucose values (ADAG study). Diabetes Care. 2008;31(8):1473-1478.',
  'Lindstrom J, Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk (FINDRISC). Diabetes Care. 2003;26(3):725-731.',
  'Knowler WC, Barrett-Connor E, Fowler SE, et al. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin (Diabetes Prevention Program). N Engl J Med. 2002;346(6):393-403.',
  'Pop-Busui R, Boulton AJM, Feldman EL, et al. Diabetic neuropathy: a position statement by the American Diabetes Association. Diabetes Care. 2017;40(1):136-154.',
  'Schaper NC, van Netten JJ, Apelqvist J, et al. Practical guidelines on the prevention and management of diabetes-related foot disease (IWGDF 2023 update). Diabetes Metab Res Rev. 2024;40(3):e3657.',
  'Solomon SD, Chew E, Duh EJ, et al. Diabetic retinopathy: a position statement by the American Diabetes Association. Diabetes Care. 2017;40(3):412-418.',
  'American Diabetes Association Professional Practice Committee for Diabetes. Management of Diabetes in Pregnancy: Standards of Care in Diabetes 2026. Diabetes Care. 2026;49(Suppl 1).',
  'HAPO Study Cooperative Research Group. Hyperglycemia and adverse pregnancy outcomes (HAPO). N Engl J Med. 2008;358(19):1991-2002.',
  'Ndumele CE, Rangaswami J, Chow SL, et al. Cardiovascular-kidney-metabolic health: a presidential advisory from the American Heart Association. Circulation. 2023;148(20):1606-1635.',
  'International Hypoglycaemia Study Group. Glucose concentrations of less than 3.0 mmol/L (54 mg/dL) should be reported in clinical trials: a joint position statement. Diabetes Care. 2017;40(1):155-157.',
  'Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT). N Engl J Med. 2023;389(24):2221-2232.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Diabetes tipo 2 asintomática (hallazgo de cribado)',
      tituloB: 'Hiperglucemia sintomática o debut cetosico',
      compensada: 'La DM2 cursa a menudo anos sin síntomas y se detecta en un análisis de cribado o al estudiar una complicación (proteinuria, retinopatía, infarto, disfunción eréctil). El cribado se recomienda en adultos con sobrepeso u obesidad y al menos un factor de riesgo (antecedente familiar, etnia de riesgo, hipertensión, dislipidemia, síndrome de ovario poliquistico, sedentarismo, diabetes gestacional previa), y en todos a partir de los 35 anos; si es normal, repetir cada 3 anos.',
      descompensada: 'La DM1 y a veces la DM2 debutan con poliuria, polidipsia, pérdida de peso, polifagia, visión borrosa, candidiasis genital o infecciones cutáneas de repetición. El debut puede ser una cetoacidosis diabética (más en la DM1) o un estado hiperosmolar hiperglucemico (más en la DM2 del anciano), ambos con tema propio. La acantosis nigricans y la obesidad central orientan a resistencia a la insulina.'
    },
    laboratorio: [
      { prueba: 'Glucosa plasmática en ayuno', utilidad: 'Criterio diagnóstico (126 mg/dL o mayor) y herramienta de cribado y de seguimiento. Requiere ayuno de al menos 8 horas.' },
      { prueba: 'HbA1c', utilidad: 'Criterio diagnóstico (6.5% o mayor) y principal parámetro de control; refleja la glucemia media de los últimos 2 a 3 meses. No es fiable con anemia, hemoglobinopatías, ferropenia, hemólisis, transfusión reciente, embarazo o enfermedad renal avanzada; en esos casos usar la glucosa o la fructosamina.' },
      { prueba: 'Prueba de tolerancia oral a la glucosa con 75 g', utilidad: 'Glucosa a las 2 horas de 200 mg/dL o mayor: criterio diagnóstico. Más sensible que la glucosa en ayuno para detectar diabetes y prediabetes; útil cuando la HbA1c no es fiable y en el embarazo.' },
      { prueba: 'Péptido C y autoanticuerpos (anti-GAD65, IA-2, ZnT8, insulina)', utilidad: 'Distinguen la DM1 y la LADA (péptido C bajo, autoanticuerpos positivos) de la DM2 (péptido C normal o alto, autoanticuerpos negativos) cuando la clasificación clínica es dudosa.' },
      { prueba: 'Cociente albúmina/creatinina en orina y filtrado glomerular estimado', utilidad: 'Cribado anual de enfermedad renal diabética desde el diagnóstico en la DM2 y a los 5 anos en la DM1; guian el uso de IECA o ARA, inhibidores de SGLT2 y finerenona.' },
      { prueba: 'Perfil lipídico, TSH (en la DM1), transaminasas', utilidad: 'Estratificación del riesgo cardiovascular y del tratamiento con estatina; cribado de tiroiditis autoinmune asociada a la DM1; detección de esteatohepatitis metabólica.' },
      { prueba: 'Cetonas en sangre (beta-hidroxibutirato) o en orina', utilidad: 'Ante hiperglucemia con síntomas, enfermedad intercurrente o dolor abdominal, para detectar cetoacidosis; obligatorio en la DM1 y en el paciente tratado con inhibidores de SGLT2 (riesgo de cetoacidosis euglucémica).' }
    ],
    no_invasivos: [
      { metodo: 'Cuestionario FINDRISC (calculadora disponible)', interpretacion: 'Estima el riesgo de desarrollar diabetes tipo 2 en 10 anos a partir de la edad, el índice de masa corporal, el perímetro abdominal, la actividad física, el consumo de fruta y verdura, el tratamiento antihipertensivo y los antecedentes personales y familiares.', cutoff: 'Menor de 7 riesgo bajo; 7 a 11 ligeramente elevado; 12 a 14 moderado; 15 a 20 alto; mayor de 20 muy alto' },
      { metodo: 'Fondo de ojo bajo dilatación o retinografia', interpretacion: 'Clasifica la retinopatía (no proliferativa leve, moderada o grave, proliferativa) y detecta el edema macular.', cutoff: 'Cribado al diagnóstico en la DM2, a los 5 anos en la DM1, y luego anual (cada 1 a 2 anos si es normal de forma repetida)' },
      { metodo: 'Monitorización continua de glucosa y tiempo en rango', interpretacion: 'Complementa a la HbA1c: aporta el tiempo en rango (70 a 180 mg/dL), el tiempo en hipoglucemia y la variabilidad glucémica.', cutoff: 'Objetivo: más del 70% del tiempo en rango, menos del 4% por debajo de 70 y menos del 1% por debajo de 54 mg/dL' },
      { metodo: 'Exploración del pie: monofilamento de 10 g e índice tobillo-brazo', interpretacion: 'El monofilamento de Semmes-Weinstein de 10 g más un segundo test (diapasón de 128 Hz, sensibilidad al pinchazo, reflejo aquíleo o umbral de vibración) detectan la neuropatía; el índice tobillo-brazo y la presión en el dedo valoran la isquemia.', cutoff: 'Exploración completa del pie al menos una vez al ano; más a menudo si hay neuropatía, deformidad o antecedente de úlcera' }
    ],
    imagen: [
      { modalidad: 'Retinografia con cámara no midriática', hallazgos: 'Microaneurismas, hemorragias, exudados, arrosariamiento venoso, anomalías microvasculares, neovascularizacion y edema macular; permite el cribado a distancia con lectura diferida o con inteligencia artificial.' },
      { modalidad: 'Tomografía de coherencia óptica (OCT) macular', hallazgos: 'Cuantifica el engrosamiento retiniano del edema macular diabético y guía el tratamiento con anti-VEGF.' },
      { modalidad: 'Ecografía Doppler arterial de miembros inferiores y angio-TC o angiografía', hallazgos: 'Localizan y cuantifican la enfermedad arterial periférica en el pie diabético con isquemia, y planifican la revascularización.' },
      { modalidad: 'Radiografía, resonancia magnética o gammagrafía con leucocitos del pie', hallazgos: 'La radiografía simple es el primer paso ante sospecha de osteomielitis; la resonancia es la prueba más sensible y específica y diferencia la osteomielitis de la osteoartropatia de Charcot.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La diabetes se clasifica por su <strong>etiología</strong> (tipo 1 autoinmune, tipo 2, gestacional, y otros tipos específicos como MODY, diabetes tipo 3c o pancreatogenica, y la inducida por fármacos), por el <strong>grado de control</strong> (HbA1c y tiempo en rango frente a la meta individualizada) y por la <strong>presencia y el estadio de las complicaciones</strong>, que es lo que determina el pronóstico y modula tanto la meta glucémica como la elección de fármacos (el escalonamiento del tratamiento de la DM2 se resume en la Figura 2 de Definición).`,
    escalas: [
      { nombre: 'Criterios diagnósticos de la ADA', componentes: 'Glucosa en ayuno, HbA1c, glucosa a las 2 horas en PTOG con 75 g, y glucosa al azar con síntomas.', formula: 'Ayuno 126 o mayor; HbA1c 6.5% o mayor; 2 horas 200 o mayor; azar 200 o mayor con síntomas (mg/dL).', interpretacion: 'Un criterio alterado confirmado en dos ocasiones (o hiperglucemia inequivoca en una) establece el diagnóstico. Prediabetes: ayuno 100 a 125, HbA1c 5.7 a 6.4%, 2 horas 140 a 199.' },
      { nombre: 'Meta de HbA1c según el perfil del paciente (calculadora disponible)', componentes: 'Riesgo de hipoglucemia, duración de la diabetes, expectativa de vida, comorbilidad y complicaciones vasculares, recursos y preferencias.', formula: 'Meta individualizada.', interpretacion: 'Menor de 7% para la mayoría; menor de 6.5% si se logra sin hipoglucemia; menor de 8% (o evitar la hiperglucemia sintomática) en el anciano frágil, la comorbilidad avanzada o la expectativa de vida corta.' },
      { nombre: 'Estadios de la enfermedad renal diabética (KDIGO)', componentes: 'Filtrado glomerular estimado (G1 a G5) y albuminuria por el cociente albúmina/creatinina (A1 menor de 30, A2 de 30 a 300, A3 mayor de 300 mg/g).', formula: 'Matriz filtrado por albuminuria (mapa de riesgo verde-amarillo-naranja-rojo).', interpretacion: 'A mayor descenso del filtrado y mayor albuminuria, mayor riesgo de progresión y cardiovascular; guía la intensidad del bloqueo del sistema renina-angiotensina, el inhibidor de SGLT2 y la finerenona.' },
      { nombre: 'Clasificación de la retinopatía diabética', componentes: 'Microaneurismas, hemorragias, exudados, arrosariamiento venoso, anomalías microvasculares intrarretinianas, neovascularizacion y edema macular.', formula: 'RD no proliferativa leve, moderada o grave (regla 4-2-1), y RD proliferativa; el edema macular se clasifica aparte.', interpretacion: 'La RD no proliferativa grave y la proliferativa exigen valoración y tratamiento por oftalmologia (fotocoagulación panretiniana, anti-VEGF); el edema macular se trata con anti-VEGF.' },
      { nombre: 'Grados de Wagner del pie diabético', componentes: 'Profundidad de la úlcera y presencia de infección profunda o gangrena.', formula: 'Grado 0 (pie de riesgo) a grado 5 (gangrena de todo el pie).', interpretacion: 'A partir del grado 3 (absceso u osteomielitis) suele requerir ingreso, desbridamiento y antibiótico; la clasificación de la Universidad de Texas anade el estadio de infección e isquemia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipoglucemia',
      color: '#8c3a34',
      definicion: 'Descenso de la glucosa plasmática por debajo del umbral de seguridad en una persona tratada por diabetes. Se gradua en nivel 1 (alerta, 54 a 69 mg/dL), nivel 2 (clínicamente relevante, menor de 54 mg/dL) y nivel 3 o grave (deterioro cognitivo o físico que obliga a la ayuda de un tercero, sin cifra definitoria). Es el principal factor limitante del control glucémico.',
      fisiopatologia: 'El exceso de insulina o de secretagogos frente a la ingesta, el ejercicio o el aclaramiento renal reducido baja la glucosa; en la diabetes de larga evolución fallan las respuestas contrarreguladoras (primero la supresión de insulina y la liberación de glucagon, después la de adrenalina), y los episodios repetidos generan hipoglucemia inadvertida (pérdida de los síntomas de alarma), que multiplica el riesgo de hipoglucemia grave.',
      epidemiologia: 'Muy frecuente en la DM1 (varios episodios leves por semana) y en la DM2 tratada con insulina o sulfonilureas. La hipoglucemia grave se asocia a caídas, fracturas, arritmias, deterioro cognitivo y mayor mortalidad, sobre todo en el anciano.',
      factores_riesgo: ['Tratamiento con insulina o con sulfonilureas o glinidas', 'Omisión de comidas, ayuno o ejercicio no planificado', 'Consumo de alcohol', 'Enfermedad renal crónica (menor aclaramiento de insulina y de sulfonilureas)', 'Edad avanzada y deterioro cognitivo', 'Diabetes de larga evolución con hipoglucemia inadvertida', 'Metas de HbA1c demasiado estrictas', 'Hospitalización con pautas de insulina no ajustadas'],
      clinica: 'Síntomas autonómicos (temblor, palpitaciones, sudoración, hambre, ansiedad) y neuroglucopenicos (dificultad de concentración, confusión, alteración del comportamiento, visión borrosa, convulsiones, coma). En la hipoglucemia inadvertida faltan los síntomas autonómicos y el primer signo puede ser la neuroglucopenia.',
      criterios_dx: 'Triada de Whipple: síntomas compatibles, glucosa baja documentada y mejoría al corregirla. En la práctica, cualquier glucemia capilar o intersticial menor de 70 mg/dL en una persona tratada por diabetes se trata como hipoglucemia. Registrar el nivel (1, 2 o 3) y buscar el desencadenante.',
      laboratorio: 'Glucemia capilar o de laboratorio para confirmar; en episodios atípicos o sin causa clara, valorar insulina, péptido C y sulfonilureas en sangre (para descartar hipoglucemia facticia o por otros fármacos). Función renal y hepática.',
      imagen: 'No procede salvo sospecha de complicación (traumatismo craneal tras una caída, isquemia miocárdica desencadenada).',
      complementarios: 'Descarga y revisión de la monitorización continua de glucosa o del glucometro para identificar el patrón horario y ajustar el tratamiento; educación estructurada de reversión de la hipoglucemia inadvertida.',
      dx_diferencial: 'En el no diabético: insulinoma, hipoglucemia por otros fármacos, insuficiencia suprarrenal, hepatopatía grave, sepsis, hipoglucemia posprandial y facticia. En el diabético casi siempre es yatrógena.',
      tx_medico: 'Paciente consciente (regla del 15): 15 a 20 g de hidratos de carbono de absorción rápida (zumo, glucosa en tabletas o gel), repetir la glucemia a los 15 minutos y repetir la toma si sigue por debajo de 70; después, una colación o comida para evitar la recurrencia. Paciente con alteración de la conciencia o incapaz de tragar: glucagon intramuscular, subcutáneo o intranasal en el ambito extrahospitalario, y glucosa intravenosa (10 a 25 g de dextrosa) en el hospital, seguida de perfusión si hay sulfonilureas o insulina de acción prolongada.',
      tx_farmacologico: 'Ajuste del tratamiento hipoglucemiante: reducir o retirar la insulina o la sulfonilurea implicada, pasar a insulinas y análogos con menor riesgo de hipoglucemia, y sustituir la sulfonilurea por un inhibidor de DPP-4, un agonista de GLP-1 o un inhibidor de SGLT2. En la intoxicación por sulfonilureas refractaria, octreotido.',
      tx_intervencionista: 'No aplica; en la hipoglucemia inadvertida grave y recurrente de la DM1, la monitorización continua con alarmas, los sistemas de páncreas artificial (asa cerrada) y, en casos seleccionados, el trasplante de islotes o de páncreas.',
      criterios_uci: 'Hipoglucemia grave persistente pese al tratamiento, por sulfonilurea de acción prolongada o por insulina basal en sobredosis, que requiere perfusión de glucosa y monitorización estrecha; convulsiones o coma prolongado.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Revisar y reescribir la pauta de insulina (evitar las pautas moviles aisladas), tratar la causa (insuficiencia renal aguda, sepsis, retirada de corticoides), y educar al paciente y a la familia antes del alta, incluida la prescripcion de glucagon.',
      seguimiento_ambulatorio: 'Relajar la meta de HbA1c si ha habido hipoglucemia grave o inadvertida, revisar la técnica y los horarios, indicar monitorización continua de glucosa cuando este disponible, y reevaluar en 2 a 4 semanas: evitar cualquier hipoglucemia durante ese periodo puede recuperar los síntomas de alarma.',
      pronostico: 'La mayoría de los episodios se resuelven sin secuelas, pero la hipoglucemia grave recurrente empeora la calidad de vida, se asocia a eventos cardiovasculares y a deterioro cognitivo, y es una causa evitable de mortalidad; el ajuste del tratamiento y la educación la reducen de forma marcada.',
      algoritmo: ['Glucemia menor de 70 mg/dL en una persona tratada por diabetes: tratar como hipoglucemia y registrar el nivel', 'Consciente: 15 a 20 g de hidratos de carbono rápidos, repetir la glucemia a los 15 minutos y repetir si sigue baja; luego colación', 'Alteración de la conciencia: glucagon (intramuscular, subcutáneo o nasal) fuera del hospital; dextrosa intravenosa en el hospital, con perfusión si hay sulfonilurea o insulina prolongada', 'Buscar y corregir el desencadenante; ajustar el tratamiento hipoglucemiante y sustituir la sulfonilurea', 'Relajar la meta de HbA1c, indicar monitorización continua y reeducar; evitar toda hipoglucemia 2 a 4 semanas para revertir la hipoglucemia inadvertida']
    },
    {
      nombre: 'Retinopatía diabética',
      color: '#7a1f3d',
      definicion: 'Microangiopatía de la retina inducida por la hiperglucemia crónica y la hipertensión, principal causa de ceguera evitable en el adulto en edad laboral. Abarca la retinopatía no proliferativa (leve, moderada y grave), la proliferativa (con neovascularizacion) y el edema macular diabético, que puede aparecer en cualquier estadio.',
      fisiopatologia: `La hiperglucemia dana el pericito y el endotelio capilar (via de los polioles, productos avanzados de glucosilacion, estrés oxidativo, proteína cinasa C), con pérdida de pericitos, microaneurismas, aumento de la permeabilidad (edema) y oclusión capilar. La isquemia retiniana estimula el VEGF, que induce neovasos frágiles que sangran y traccionan la retina.${figBlock('Figura 3', 'Clasificación de la retinopatía diabética y del edema macular', retinopatiaHtml)}`,
      epidemiologia: 'Casi todos los pacientes con DM1 y más del 60% de los pacientes con DM2 tienen algún grado de retinopatía a los 20 anos de evolución. La incidencia ha bajado con el mejor control de la glucemia y de la presión arterial y con el cribado sistemático.',
      factores_riesgo: ['Duración de la diabetes', 'Mal control glucémico (HbA1c elevada)', 'Hipertensión arterial', 'Enfermedad renal diabética y proteinuria', 'Dislipidemia', 'Embarazo (puede acelerar la progresión)', 'Mejoría brusca del control glucémico en una retinopatía avanzada (empeoramiento transitorio)'],
      clinica: 'Asintomática hasta fases avanzadas. La pérdida de visión aparece por edema macular (visión central borrosa, metamorfopsia), hemorragia vitrea (moscas volantes, pérdida brusca) o desprendimiento traccional. De ahi la importancia del cribado en el paciente asintomático.',
      criterios_dx: 'Exploración del fondo de ojo bajo dilatación o retinografia, clasificando el grado (no proliferativa leve, moderada o grave por la regla 4-2-1, o proliferativa) y la presencia de edema macular. La tomografía de coherencia óptica cuantifica el edema macular y la angiografía con fluoresceina delimita la isquemia y los neovasos.',
      laboratorio: 'No hay prueba de laboratorio diagnóstica; se controlan la HbA1c, la presión arterial, los lípidos y la función renal como factores modificables.',
      imagen: 'Retinografia (cribado), tomografía de coherencia óptica macular (edema) y angiografía con fluoresceina (isquemia y neovascularizacion) para planificar el tratamiento.',
      complementarios: 'Coordinación con oftalmologia para el seguimiento según el grado; educación sobre el control estricto de la glucemia y la presión arterial.',
      dx_diferencial: 'Retinopatía hipertensiva, oclusión venosa retiniana, retinopatía por radiación, retinopatía de la anemia o de las discrasias, y degeneración macular asociada a la edad en el paciente mayor.',
      tx_medico: 'Optimizar la HbA1c (evitando descensos muy bruscos si la retinopatía ya es avanzada), la presión arterial (objetivo menor de 130/80) y los lípidos; el fenofibrato ha mostrado reducir la progresión en algunos estudios. Dejar de fumar.',
      tx_farmacologico: 'Inyecciones intravitreas de anti-VEGF (ranibizumab, aflibercept, bevacizumab) como primera línea del edema macular diabético con afectación central y como alternativa o complemento en la retinopatía proliferativa; corticoides intravitreos en casos seleccionados.',
      tx_intervencionista: 'Fotocoagulación panretiniana con láser en la retinopatía proliferativa de alto riesgo y en la no proliferativa grave de riesgo elevado; vitrectomia en la hemorragia vitrea persistente o el desprendimiento traccional que afecta a la macula.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En un ingreso por otra causa, no iniciar un control glucémico muy agresivo si hay retinopatía proliferativa no tratada sin valoración oftalmológica previa; asegurar la cita de oftalmologia al alta.',
      seguimiento_ambulatorio: 'Sin retinopatía: revisión cada 1 a 2 anos. No proliferativa leve o moderada: anual o semestral. No proliferativa grave o proliferativa: control por oftalmologia cada 2 a 4 meses. En la mujer con DM1 o DM2 que planifica embarazo, examen antes de la concepcion y en cada trimestre.',
      pronostico: 'Con cribado y tratamiento oportunos, el riesgo de ceguera grave es bajo; el control de la glucemia y de la presión arterial reduce mucho la progresión. El edema macular tratado a tiempo con anti-VEGF suele estabilizar o mejorar la visión.',
      algoritmo: ['Cribado con fondo de ojo o retinografia: al diagnóstico en la DM2, a los 5 anos en la DM1, y luego según el grado', 'Clasificar: no proliferativa leve, moderada o grave (regla 4-2-1), proliferativa, y presencia de edema macular', 'Optimizar HbA1c (sin descensos bruscos si es avanzada), presión arterial menor de 130/80 y lípidos; dejar de fumar', 'Edema macular central: anti-VEGF intravitreo. Proliferativa de alto riesgo: fotocoagulación panretiniana', 'Hemorragia vitrea persistente o desprendimiento traccional macular: vitrectomia']
    },
    {
      nombre: 'Enfermedad renal diabética',
      color: '#8a6a1f',
      definicion: 'Enfermedad renal crónica atribuible a la diabetes, definida por un cociente albúmina/creatinina persistentemente elevado (30 mg/g o mayor), un filtrado glomerular menor de 60 mL/min/1.73 m2, o ambos, tras excluir otras causas. Es la primera causa de enfermedad renal terminal en el mundo.',
      fisiopatologia: 'La hiperglucemia y la hipertensión intraglomerular (mediada por la vasodilatación de la arteriola aferente y el sistema renina-angiotensina) producen hiperfiltración, engrosamiento de la membrana basal, expansión mesangial y glomeruloesclerosis nodular (Kimmelstiel-Wilson) y difusa, con pérdida progresiva de nefronas. La inflamación y la fibrosis tubulointersticial determinan la progresión.',
      epidemiologia: 'Aparece en el 20 al 40% de los pacientes con diabetes. La albuminuria suele ser el primer marcador, aunque una parte de los pacientes progresa con filtrado descendente sin albuminuria. Multiplica el riesgo cardiovascular.',
      factores_riesgo: ['Duración de la diabetes y mal control glucémico', 'Hipertensión arterial', 'Obesidad y dislipidemia', 'Tabaquismo', 'Predisposición genética y etnia (mayor en afroamericanos, hispanos, indigenas y sur de Asia)', 'Episodios de lesión renal aguda', 'Uso de nefrotóxicos y contraste yodado'],
      clinica: 'Asintomática hasta fases avanzadas. Con el descenso del filtrado aparecen hipertensión de difícil control, edemas, anemia, alteraciones del fósforo y el calcio, y síntomas urémicos. El síndrome nefrótico es posible en la glomeruloesclerosis avanzada.',
      criterios_dx: 'Cociente albúmina/creatinina en orina de primera hora de la manana elevado (30 mg/g o mayor) confirmado en 2 de 3 muestras en 3 a 6 meses, o filtrado glomerular estimado menor de 60 mL/min/1.73 m2 mantenido, en un paciente con diabetes y sin datos que sugieran otra nefropatía. Estadificar con la matriz filtrado-albuminuria de KDIGO.',
      laboratorio: 'Cociente albúmina/creatinina, creatinina y filtrado estimado, potasio, bicarbonato, hemograma (anemia), fósforo, calcio y hormona paratiroidea según el estadio; sedimento urinario (la hematuria dismórfica o los cilindros hemáticos sugieren otra glomerulopatía).',
      imagen: 'Ecografía renal para valorar el tamano y descartar uropatía obstructiva o enfermedad renovascular; rinones de tamano conservado o aumentado son típicos de la nefropatía diabética frente a la reducción en otras nefropatías crónicas.',
      complementarios: 'Derivación a nefrología si el filtrado es menor de 30, la albuminuria es mayor de 300 mg/g pese al tratamiento, hay progresión rápida o dudas sobre el diagnóstico; considerar biopsia si el cuadro es atípico (ausencia de retinopatía, hematuria, deterioro brusco, sospecha de otra enfermedad).',
      dx_diferencial: 'Otras glomerulopatías (nefropatía por IgA, membranosa, vasculitis), nefroangioesclerosis hipertensiva, nefropatía isquémica, nefritis intersticial por fármacos y mieloma; la ausencia de retinopatía en la DM1 con proteinuria obliga a descartar otra causa.',
      tx_medico: 'Control glucémico según la meta individualizada, presión arterial menor de 130/80, restricción moderada de sodio y de proteínas, abandono del tabaco y evitación de nefrotóxicos. Bloqueo del sistema renina-angiotensina con un IECA o un ARA a dosis máxima tolerada si hay albuminuria e hipertensión (no combinarlos entre si).',
      tx_farmacologico: 'Inhibidor de SGLT2 si el filtrado es 20 o mayor y hay albuminuria o enfermedad renal crónica (se mantiene aunque el filtrado baje después); reduce la progresión renal y los eventos cardiovasculares (CREDENCE, DAPA-CKD). Agonista del receptor de GLP-1 para el control glucémico y el beneficio cardiorrenal (FLOW). Finerenona (antagonista no esteroideo del receptor mineralocorticoide) si persiste la albuminuria pese a IECA o ARA y SGLT2, con potasio menor de 5 mmol/L (FIDELIO, FIGARO). Manejo de la anemia, la acidosis y el metabolismo mineral según el estadio.',
      tx_intervencionista: 'Preparación para el tratamiento renal sustitutivo (información sobre diálisis y trasplante, acceso vascular) cuando el filtrado se acerca a 15 a 20; el trasplante renal (o reno-pancreático en la DM1 seleccionada) ofrece la mejor supervivencia y calidad de vida.',
      criterios_uci: 'Lesión renal aguda sobre crónica con hiperpotasemia grave, acidosis o sobrecarga refractaria; contexto de sepsis o cirugía mayor.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ajustar la dosis de los fármacos al filtrado, suspender metformina e inhibidores de SGLT2 ante enfermedad aguda o ayuno, evitar contraste y nefrotóxicos, y reintroducir el tratamiento de base al alta con un plan de control analítico.',
      seguimiento_ambulatorio: 'Cociente albúmina/creatinina y filtrado al menos una vez al ano (más a menudo según el estadio y el riesgo), control de la presión arterial y del potasio tras iniciar o subir un IECA, un ARA o la finerenona, y seguimiento conjunto con nefrología en los estadios avanzados.',
      pronostico: 'El bloqueo del sistema renina-angiotensina, los inhibidores de SGLT2 y la finerenona, junto con el control de la glucemia y la presión, enlentecen de forma sustancial la progresión; sin tratamiento, una parte importante de los pacientes con albuminuria intensa evoluciona a enfermedad renal terminal.',
      algoritmo: ['Cribado anual con cociente albúmina/creatinina y filtrado estimado desde el diagnóstico en la DM2 y a los 5 anos en la DM1', 'Confirmar la albuminuria (2 de 3 muestras) y estadificar con la matriz filtrado-albuminuria de KDIGO', 'IECA o ARA a dosis máxima tolerada si hay albuminuria e hipertensión; controlar presión menor de 130/80', 'Inhibidor de SGLT2 si el filtrado es 20 o mayor; agonista de GLP-1; anadir finerenona si persiste la albuminuria y el potasio lo permite', 'Derivar a nefrología (filtrado menor de 30, progresión rápida, dudas diagnosticas) y preparar el tratamiento sustitutivo cuando proceda']
    },
    {
      nombre: 'Neuropatía diabética',
      color: '#3d5a73',
      definicion: 'Lesión del sistema nervioso periférico atribuible a la diabetes tras excluir otras causas. La forma más frecuente es la polineuropatía sensitivomotora distal simétrica; también existen la neuropatía autonómica, las mononeuropatias (incluidas las craneales y por atrapamiento) y la amiotrofia diabética (radiculoplexopatia lumbosacra).',
      fisiopatologia: 'La hiperglucemia activa la via de los polioles, genera productos avanzados de glucosilacion y estrés oxidativo, y produce microangiopatía de los vasa nervorum con isquemia del nervio. En la DM2 contribuyen la resistencia a la insulina, la dislipidemia y la obesidad, que explican la neuropatía ya presente en la prediabetes.',
      epidemiologia: 'Hasta el 50% de los pacientes con diabetes de larga evolución desarrolla polineuropatía distal; es la principal causa de pie diabético y de amputación no traumática. La neuropatía autonómica cardiovascular aumenta la mortalidad.',
      factores_riesgo: ['Duración de la diabetes y mal control glucémico', 'Hipertrigliceridemia y obesidad', 'Hipertensión arterial', 'Tabaquismo y consumo de alcohol', 'Enfermedad arterial periférica', 'Déficit de vitamina B12 (favorecido por la metformina a largo plazo)', 'Edad avanzada y talla alta'],
      clinica: 'Polineuropatía distal: adormecimiento, hormigueo, dolor urente o lancinante y calambres de predominio nocturno, en calcetín y luego en guante, con pérdida de la sensibilidad protectora. Autonómica: hipotensión ortostática, taquicardia de reposo, gastroparesia, diarrea o estrenimiento, disfunción eréctil, vejiga neurógena e hipoglucemia inadvertida. Mononeuropatias: parálisis del III par que respeta la pupila, del VI, del mediano (túnel carpiano) o del peroneo.',
      criterios_dx: 'Diagnóstico clínico: síntomas compatibles más exploración alterada (monofilamento de 10 g y al menos uno de diapasón de 128 Hz, sensibilidad al pinchazo, reflejo aquíleo o umbral de vibración), tras descartar otras causas. Los estudios de conducción nerviosa se reservan para presentaciones atípicas (inicio agudo, asimetría marcada, predominio motor, progresión rápida).',
      laboratorio: 'Cribado de causas alternativas o concurrentes: hemograma, vitamina B12 y ácido metilmalónico, función tiroidea y renal, proteinograma e inmunofijación, serología de VIH y, según el contexto, cobre, folato o tóxicos.',
      imagen: 'No necesaria en la polineuropatía típica; resonancia lumbosacra en la amiotrofia diabética o ante sospecha de compresión radicular; ecografía o resonancia del nervio en las neuropatías por atrapamiento dudosas.',
      complementarios: 'Pruebas de función autonómica (variabilidad de la frecuencia cardiaca, tabla basculante) en la sospecha de neuropatía autonómica cardiovascular; estudio de vaciamiento gástrico en la gastroparesia.',
      dx_diferencial: 'Neuropatía por déficit de B12, alcohólica, urémica, por hipotiroidismo, paraproteinemica, inflamatoria (polineuropatía desmielinizante inflamatoria crónica), por quimioterapia, vasculitica y hereditaria; la amiotrofia diabética se confunde con radiculopatía compresiva.',
      tx_medico: 'Optimizar el control glucémico (previene y enlentece la neuropatía, sobre todo en la DM1) y los factores de riesgo cardiovascular; cuidado y revisión periódica de los pies; corregir el déficit de B12. En la neuropatía autonómica: medidas posturales y midodrina o fludrocortisona para la hipotensión ortostática, comidas fraccionadas y procineticos para la gastroparesia.',
      tx_farmacologico: 'Dolor neuropático: pregabalina o gabapentina, duloxetina o venlafaxina, o un antidepresivo tricíclico (amitriptilina) a dosis baja; combinar si la respuesta es parcial. Opioides y tramadol solo como último recurso. Capsaicina topica al 8% o parches de lidocaina como alternativa. No se recomiendan los suplementos (ácido alfa-lipoico con evidencia limitada).',
      tx_intervencionista: 'Descompresión quirúrgica en las mononeuropatias por atrapamiento con déficit progresivo (túnel carpiano); estimulación de la medula espinal en el dolor neuropático refractario y muy incapacitante.',
      criterios_uci: 'No aplica de forma directa; la disautonomía grave aumenta el riesgo perioperatorio (inestabilidad hemodinámica, aspiración por gastroparesia).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Prevención activa de las úlceras por presión en el pie insensible del paciente encamado, ajuste de la analgesia neuropática a la función renal, y precaución anestésica por la disautonomía y la gastroparesia.',
      seguimiento_ambulatorio: 'Exploración del pie en cada visita (o al menos anual), revaluacion del dolor y de la tolerancia al tratamiento, cribado periódico de hipotensión ortostática y de síntomas digestivos y urinarios, y refuerzo del control metabólico.',
      pronostico: 'La polineuropatía establecida rara vez revierte; el buen control retrasa la progresión y el dolor suele controlarse de forma parcial. La neuropatía autonómica cardiovascular ensombrece el pronóstico y la pérdida de sensibilidad protectora marca el riesgo de úlcera y amputación.',
      algoritmo: ['Cribado anual con monofilamento de 10 g más un segundo test; descartar causas no diabéticas (B12, tiroides, alcohol, paraproteína)', 'Polineuropatía típica: no hacen falta estudios de conducción; si es atípica, derivar a neurología', 'Optimizar la glucemia y los factores de riesgo; corregir el déficit de B12; cuidado estructurado de los pies', 'Dolor neuropático: pregabalina o gabapentina, duloxetina o amitriptilina; combinar si la respuesta es parcial; opioides solo como último recurso', 'Neuropatía autonómica: medidas para la hipotensión ortostática y la gastroparesia; valorar riesgo perioperatorio']
    },
    {
      nombre: 'Pie diabético',
      color: '#6b4a2e',
      definicion: 'Síndrome que combina neuropatía periférica, enfermedad arterial periférica e infección sobre el pie del paciente con diabetes, y que puede llevar a la úlcera, la osteomielitis y la amputación. Es la principal causa de amputación no traumática de la extremidad inferior.',
      fisiopatologia: `La neuropatía sensitiva elimina la sensibilidad protectora (traumatismos inadvertidos), la motora produce deformidad y puntos de presión anómalos, y la autonómica reseca la piel (fisuras). La enfermedad arterial periférica reduce la perfusión y la cicatrización. Sobre ese terreno, un traumatismo menor abre una úlcera que se infecta y puede alcanzar el hueso; la osteoartropatia de Charcot es la destrucción articular progresiva del pie neuropático con buena perfusión.${figBlock('Figura 4', 'Grados de Wagner del pie diabético', pieHtml)}`,
      epidemiologia: 'Alrededor del 15 al 25% de los pacientes con diabetes desarrolla una úlcera de pie a lo largo de la vida; más de la mitad se infecta y una fracción importante termina en amputación. La mortalidad a 5 anos tras una amputación mayor es muy alta.',
      factores_riesgo: ['Neuropatía periférica con pérdida de la sensibilidad protectora', 'Enfermedad arterial periférica', 'Deformidad del pie, callosidades y presiones plantares elevadas', 'Úlcera o amputación previas', 'Mal control glucémico y larga evolución', 'Enfermedad renal crónica avanzada y diálisis', 'Tabaquismo', 'Alteración visual y limitaciones para el autocuidado'],
      clinica: 'Úlcera indolora en zonas de presión (cabezas metatarsianas, talón, dorso de los dedos), a veces con celulitis, secreción o mal olor; el pie isquémico anade palidez, frialdad, ausencia de pulsos y dolor de reposo. La infección profunda puede cursar con escasa fiebre y leucocitosis en el paciente diabético. El pie de Charcot agudo se presenta como un pie caliente, eritematoso y edematoso, a menudo confundido con celulitis o trombosis.',
      criterios_dx: 'Exploración sistemática: sensibilidad (monofilamento de 10 g), pulsos e índice tobillo-brazo o presión en el dedo, inspección de deformidades y zonas de presión, y en toda úlcera valorar profundidad ("probe to bone"), infección (criterios de la IDSA/IWGDF: leve, moderada, grave) e isquemia. Clasificar con Wagner o con la Universidad de Texas.',
      laboratorio: 'Hemograma, proteína C reactiva, velocidad de sedimentación y procalcitonina (apoyan osteomielitis si están muy elevadas), glucemia y HbA1c, función renal; cultivo de tejido profundo o de hueso (mejor que el frotis superficial) para dirigir el antibiótico.',
      imagen: 'Radiografía simple ante toda úlcera que no cierra o con sospecha de osteomielitis (reacción perios­tica, destrucción cortical, gas); resonancia magnética si la radiografía es dudosa (es la más sensible y diferencia osteomielitis de Charcot); ecografía Doppler y angio-TC o angiografía para planificar la revascularización.',
      complementarios: 'Valoración multidisciplinar (cirugía vascular, ortopedia, podologia, enfermedad infecciosa, endocrinologia); estudio de presiones plantares y prescripcion de calzado y plantillas de descarga.',
      dx_diferencial: 'Úlcera venosa o arterial no diabética, pioderma gangrenoso, vasculitis, osteomielitis de otra causa, gota tofacea, y en el pie de Charcot agudo: celulitis, trombosis venosa profunda y artritis séptica.',
      tx_medico: 'Descarga de la presión (bota de contacto total en la úlcera plantar neuropática, calzado terapéutico), curas con desbridamiento del tejido no viable, control de la glucemia y de la nutrición, y antibiótico dirigido solo si hay infección clínica (no en la úlcera colonizada). En el Charcot agudo, inmovilización y descarga estricta durante meses.',
      tx_farmacologico: 'Antibiótico según la gravedad y los cultivos: infección leve con cobertura de grampositivos por via oral; infección moderada o grave con cobertura de amplio espectro (incluidos gramnegativos y anaerobios, y SARM según el riesgo local) por via intravenosa. Duración: 1 a 2 semanas en la infección de partes blandas; 3 a 6 semanas en la osteomielitis (más corta si se reseca todo el hueso infectado).',
      tx_intervencionista: 'Revascularización (endovascular o quirúrgica) en el pie con isquemia significativa y úlcera que no cicatriza; desbridamiento quirúrgico urgente y drenaje en la infección profunda o el absceso; amputación menor para controlar la infección o la gangrena localizada, y mayor solo si fracasa el salvamento o hay sepsis no controlable.',
      criterios_uci: 'Infección grave del pie con sepsis, isquemia crítica con amenaza inmediata de la extremidad, o descompensación metabólica (cetoacidosis, estado hiperosmolar) secundaria a la infección.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ingreso para la infección moderada-grave, la isquemia crítica o el fracaso del tratamiento ambulatorio: antibiótico intravenoso, control glucémico, valoración vascular urgente, desbridamiento y planificación de la descarga y del calzado antes del alta.',
      seguimiento_ambulatorio: 'Tras la cicatrización, seguimiento de por vida en una consulta de pie diabético: revisión periódica, calzado y plantillas a medida, educación en autocuidado (inspección diaria, no caminar descalzo, control de la temperatura del agua) y tratamiento precoz de cualquier lesión nueva; el riesgo de recurrencia es alto.',
      pronostico: 'Con un abordaje multidisciplinar precoz, la mayoría de las úlceras cicatriza y se evita la amputación; la isquemia no revascularizable, la osteomielitis extensa y el retraso en la atención empeoran mucho el pronóstico, y la amputación mayor conlleva una mortalidad elevada a medio plazo.',
      algoritmo: ['Cribado del pie de riesgo al menos una vez al ano: sensibilidad, pulsos e índice tobillo-brazo, deformidades y antecedente de úlcera', 'Ante una úlcera: valorar profundidad ("probe to bone"), infección (leve, moderada, grave) e isquemia; clasificar (Wagner o Texas) y hacer radiografía', 'Descarga de la presión, desbridamiento y control metabólico; antibiótico dirigido solo si hay infección clínica', 'Isquemia significativa con úlcera que no cierra: revascularización; infección profunda o absceso: desbridamiento quirúrgico urgente', 'Tras cicatrizar: calzado y plantillas a medida, educación en autocuidado y seguimiento de por vida en consulta de pie diabético']
    },
    {
      nombre: 'Enfermedad cardiovascular ateroesclerótica y síndrome cardio-renal-metabólico',
      color: '#8c3a34',
      definicion: 'Enfermedad coronaria, cerebrovascular y arterial periférica de base ateroesclerótica, la principal causa de muerte en la diabetes. Se enmarca en el síndrome cardio-renal-metabólico (CKM), que reconoce la interacción entre la obesidad, la resistencia a la insulina, la diabetes, la enfermedad renal crónica y la enfermedad cardiovascular.',
      fisiopatologia: 'La hiperglucemia, la resistencia a la insulina, la dislipidemia aterogenica (triglicéridos altos, HDL bajo, LDL pequenas y densas), la hipertensión, la inflamación crónica y la disfunción endotelial aceleran la ateroesclerosis y favorecen un estado protrombótico. La diabetes también produce miocardiopatía por disfunción microvascular y metabólica, que contribuye a la insuficiencia cardiaca (sobre todo con fracción de eyección preservada).',
      epidemiologia: 'La diabetes multiplica por 2 a 4 el riesgo de enfermedad coronaria y de ictus y es un potente factor de riesgo de insuficiencia cardiaca y de enfermedad arterial periférica. La enfermedad cardiovascular y la renal explican la mayor parte de la mortalidad en la DM2.',
      factores_riesgo: ['Hiperglucemia y duración de la diabetes', 'Hipertensión arterial', 'Dislipidemia (colesterol no-HDL y ApoB elevados)', 'Tabaquismo', 'Obesidad y sedentarismo', 'Enfermedad renal diabética y albuminuria', 'Antecedente familiar de enfermedad cardiovascular precoz'],
      clinica: 'La del territorio afectado (angina o infarto, ictus o ataque isquémico transitorio, claudicación o isquemia crítica). La isquemia miocárdica puede ser silente por la neuropatía autonómica. La insuficiencia cardiaca se manifiesta con disnea, edemas y mala tolerancia al esfuerzo.',
      criterios_dx: 'Los propios de cada síndrome (electrocardiograma y troponina, imagen coronaria, TC o RM craneal, índice tobillo-brazo, ecocardiograma y péptidos natriuréticos). En prevención primaria, estimar el riesgo con una calculadora validada (por ejemplo las ecuaciones PREVENT o SCORE2-Diabetes) y buscar dano de órgano (albuminuria, hipertrofia ventricular, placa carotídea o coronaria).',
      laboratorio: 'Perfil lipídico con colesterol no-HDL y ApoB, HbA1c, cociente albúmina/creatinina y filtrado glomerular, y péptidos natriuréticos si hay sospecha de insuficiencia cardiaca.',
      imagen: 'La correspondiente al evento; la puntuación de calcio coronario ayuda a reclasificar el riesgo en prevención primaria y a decidir la intensidad del tratamiento.',
      complementarios: 'Rehabilitación cardiaca tras un evento; programa estructurado de ejercicio supervisado en la enfermedad arterial periférica; deshabituacion tabaquica.',
      tx_medico: 'Control integral: HbA1c según la meta, presión arterial menor de 130/80 (IECA o ARA de preferencia si hay albuminuria), estatina de intensidad moderada en la mayoría y de alta intensidad si hay enfermedad cardiovascular establecida o riesgo alto, con objetivo de colesterol LDL menor de 55 mg/dL en el muy alto riesgo (ver el tema de Dislipidemias). Antiagregación con ácido acetilsalicílico en prevención secundaria (y solo en casos seleccionados de alto riesgo en prevención primaria). Estilo de vida y pérdida de peso.',
      tx_farmacologico: 'Priorizar los hipoglucemiantes con beneficio cardiovascular y renal probado: inhibidor de SGLT2 (enfermedad cardiovascular, insuficiencia cardiaca, enfermedad renal diabética) y agonista del receptor de GLP-1 (enfermedad cardiovascular ateroesclerótica, obesidad), con independencia de la HbA1c y anadidos a la metformina. En la insuficiencia cardiaca, el inhibidor de SGLT2 esta indicado con cualquier fracción de eyección.',
      tx_intervencionista: 'Revascularización coronaria, carotídea o de miembros inferiores según la indicación clínica; el control de los factores de riesgo es lo que reduce la recurrencia.',
      criterios_uci: 'Los del evento agudo (síndrome coronario, ictus, isquemia crítica, insuficiencia cardiaca descompensada).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante un evento cardiovascular, iniciar o intensificar la estatina y anadir o mantener un inhibidor de SGLT2 o un agonista de GLP-1 con beneficio probado antes del alta; ajustar la antiagregación y la anticoagulación según la indicación.',
      seguimiento_ambulatorio: 'Revisión periódica de la HbA1c, la presión arterial, los lípidos (perfil de control a las 4 a 12 semanas de cambiar el tratamiento), la función renal y la adherencia; rehabilitación cardiaca y refuerzo del estilo de vida.',
      pronostico: 'El tratamiento multifactorial intensivo (glucemia, presión, lípidos, antiagregación y estilo de vida) reduce de forma marcada los eventos y la mortalidad (estudio Steno-2); los inhibidores de SGLT2 y los agonistas de GLP-1 aportan un beneficio adicional en eventos cardiovasculares, insuficiencia cardiaca y progresión renal.',
      algoritmo: ['Estimar el riesgo cardiovascular y buscar dano de órgano; clasificar como prevención primaria o secundaria', 'Control multifactorial: HbA1c a meta, presión menor de 130/80, estatina según el riesgo, antiagregación en prevención secundaria', 'Anadir a la metformina un inhibidor de SGLT2 o un agonista de GLP-1 con beneficio cardiovascular o renal probado, con independencia de la HbA1c', 'Insuficiencia cardiaca: inhibidor de SGLT2 con cualquier fracción de eyección; enfermedad renal diabética: SGLT2 y valorar finerenona', 'Tras un evento: intensificar en el ingreso, rehabilitación cardiaca y seguimiento estrecho de los factores de riesgo']
    },
    {
      nombre: 'Diabetes gestacional e hiperglucemia en el embarazo',
      color: '#6b3a5a',
      definicion: 'Diabetes gestacional: hiperglucemia detectada por primera vez en el segundo o el tercer trimestre que no cumple criterios de diabetes manifiesta. Si en el primer trimestre se cumplen los criterios habituales de diabetes, se habla de diabetes manifiesta (pregestacional no diagnosticada). Ambas aumentan el riesgo de complicaciones maternas y fetales.',
      fisiopatologia: 'Las hormonas placentarias (lactogeno placentario, progesterona, cortisol) inducen una resistencia a la insulina fisiológica que se acentúa en el tercer trimestre; cuando la reserva de la célula beta no compensa, aparece la hiperglucemia. La glucosa materna atraviesa la placenta y estimula la insulina fetal, con macrosomia, organomegalia e hipoglucemia neonatal.',
      epidemiologia: 'Afecta a alrededor del 7 al 14% de los embarazos según la población y los criterios. Más de la mitad de las mujeres con diabetes gestacional desarrolla diabetes tipo 2 en los 10 a 20 anos siguientes.',
      factores_riesgo: ['Sobrepeso u obesidad y ganancia de peso excesiva', 'Edad materna avanzada', 'Antecedente de diabetes gestacional o de macrosomia', 'Antecedente familiar de diabetes', 'Síndrome de ovario poliquistico', 'Etnia de riesgo (hispana, sur de Asia, afroamericana, indigena)', 'Glucosuria o hiperglucemia en el primer trimestre'],
      clinica: 'Asintomática; se detecta por cribado. Las complicaciones son macrosomia y distocia de hombros, cesarea, preeclampsia, polihidramnios, prematuridad, e hipoglucemia, hipocalcemia, ictericia y distres respiratorio neonatales; a largo plazo, mayor riesgo de obesidad y diabetes en el hijo.',
      criterios_dx: 'Cribado entre las semanas 24 y 28 (antes si hay factores de riesgo). Estrategia de un paso: PTOG con 75 g en ayunas; diagnóstico con un solo valor alterado (ayuno 92 o mayor, 1 hora 180 o mayor, 2 horas 153 o mayor mg/dL). Estrategia de dos pasos: sobrecarga con 50 g sin ayuno y, si la glucosa a la hora es 130 a 140 o mayor, PTOG con 100 g y 3 horas (criterios de Carpenter-Coustan: ayuno 95, 1 hora 180, 2 horas 155, 3 horas 140; dos valores alterados).',
      laboratorio: 'PTOG diagnóstica; automonitorizacion de glucemia capilar (ayuno y posprandial) durante el embarazo; HbA1c orientativa (menos fiable por el recambio eritrocitario); cetonas si hay hiperglucemia o enfermedad. A las 4 a 12 semanas posparto, PTOG con 75 g para reclasificar.',
      imagen: 'Ecografía obstétrica seriada para vigilar el crecimiento fetal (circunferencia abdominal, peso estimado), el líquido amniótico y, al final, el bienestar fetal; ecocardiografía fetal si el control es malo o hay diabetes pregestacional.',
      complementarios: 'Educación nutricional y plan de ejercicio; consulta preconcepcional en la mujer con diabetes conocida (optimizar la HbA1c por debajo de 6.5%, suplementar folato, revisar fármacos y retinopatía y nefropatía).',
      dx_diferencial: 'Diabetes manifiesta en el embarazo (criterios de diabetes en el primer trimestre), diabetes tipo 1 de debut en la gestación (pérdida de peso, cetosis, autoanticuerpos) y diabetes MODY.',
      tx_medico: 'Primera línea: terapia nutricional (reparto de hidratos de carbono, control del peso) y actividad física; automonitorizacion con objetivos de ayuno menor de 95, 1 hora posprandial menor de 140 y 2 horas menor de 120 mg/dL.',
      tx_farmacologico: 'Si no se alcanzan los objetivos con dieta y ejercicio, la insulina es el tratamiento de elección (no atraviesa la placenta). La metformina y la gliburida son alternativas cuando la insulina no es viable, con la advertencia de que atraviesan la placenta y tienen datos de seguridad a largo plazo limitados. En la diabetes pregestacional, ácido acetilsalicílico a dosis baja desde el final del primer trimestre para prevenir la preeclampsia.',
      tx_intervencionista: 'Decisión del momento y la via del parto por obstetricia según el control glucémico y el peso fetal estimado (valorar inducción a termino o cesarea si la macrosomia es marcada).',
      criterios_uci: 'Cetoacidosis diabética en el embarazo (puede ocurrir con glucemias más bajas y es una urgencia materno-fetal), preeclampsia grave o descompensación de una diabetes pregestacional.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Durante el parto, mantener la glucemia materna en torno a 70 a 110 mg/dL con insulina y glucosa intravenosas para reducir la hipoglucemia neonatal; vigilancia del recién nacido (glucemia, calcio, bilirrubina).',
      seguimiento_ambulatorio: 'La mayoría de las mujeres suspende el tratamiento tras el parto. PTOG con 75 g a las 4 a 12 semanas posparto y, si es normal, cribado de diabetes cada 1 a 3 anos de por vida; fomentar la lactancia, la pérdida de peso y el estilo de vida, que reducen la progresión a diabetes tipo 2; planificar los embarazos siguientes.',
      pronostico: 'El control adecuado normaliza en gran medida el riesgo obstétrico y neonatal. El riesgo materno a largo plazo de diabetes tipo 2 y de enfermedad cardiovascular es alto, por lo que el seguimiento posparto es una oportunidad clave de prevención.',
      algoritmo: ['Cribado entre las semanas 24 y 28 (antes si hay factores de riesgo): un paso (PTOG 75 g, un valor) o dos pasos (50 g y luego 100 g)', 'Terapia nutricional y ejercicio con automonitorizacion; objetivos ayuno menor de 95, 1 hora menor de 140, 2 horas menor de 120 mg/dL', 'Si no se alcanzan los objetivos: insulina (de elección); metformina o gliburida como alternativa', 'Vigilancia ecográfica del crecimiento fetal y del líquido; planificar el parto con obstetricia', 'Posparto: PTOG con 75 g a las 4 a 12 semanas y cribado periódico de por vida; lactancia y estilo de vida']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La diabetes se maneja de forma ambulatoria, pero el paciente ingresa con frecuencia por otras causas y la hiperglucemia hospitalaria (con diabetes conocida o sin ella) empeora los resultados. El objetivo intrahospitalario es mantener la glucemia en un rango seguro sin provocar hipoglucemia, usar pautas de insulina fisiológicas y planificar bien la transición al alta.',
    parametros: ['Objetivo de glucemia de 140 a 180 mg/dL en la mayoría de los pacientes hospitalizados (140 a 180 o incluso 110 a 140 en pacientes seleccionados estables si se evita la hipoglucemia)', 'Insulina basal-bolo-corrección en el paciente que come, o basal más corrección si esta en ayuno; evitar la pauta móvil de insulina rápida como único tratamiento', 'Perfusión intravenosa de insulina en el paciente crítico, en la cetoacidosis y el estado hiperosmolar (ver su tema), y en el perioperatorio de cirugía mayor', 'Suspender metformina (riesgo con contraste, ayuno, inestabilidad), inhibidores de SGLT2 (cetoacidosis euglucémica: suspender 3 a 4 días antes de cirugía mayor) y, según el caso, sulfonilureas; reanudar al estabilizar', 'HbA1c al ingreso si no hay una reciente, para calibrar el control previo y ajustar el tratamiento del alta', 'Detección y tratamiento inmediato de la hipoglucemia (protocolo escrito) y revisión de la causa de cada episodio', 'Educación y plan de alta: conciliacion de la medicación, técnica de insulina, glucometro o sensor, cita de seguimiento y prescripcion de glucagon en el paciente con riesgo de hipoglucemia grave'],
    criterios_uci_general: 'Cetoacidosis diabética o estado hiperosmolar graves (ver su tema), hipoglucemia grave refractaria, o descompensación en el contexto de sepsis, infarto, ictus o cirugía mayor.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Trasplante renal (o reno-pancreático simultáneo en la DM1 con enfermedad renal terminal) y trasplante de islotes o de páncreas aislado en la DM1 con hipoglucemia grave e inadvertida incapacitante pese al tratamiento óptimo.',
    prevencion: 'Prevención de la diabetes tipo 2: en la prediabetes, programa estructurado de pérdida de peso (7% o más) y de actividad física (150 minutos semanales), que reduce la incidencia más que la metformina (Diabetes Prevention Program); metformina en los de mayor riesgo (índice de masa corporal alto, menores de 60 anos, mujeres con diabetes gestacional previa). Prevención de complicaciones: control glucémico según la meta individualizada, presión arterial menor de 130/80, estatina según el riesgo, no fumar, y cribado sistemático de retinopatía, enfermedad renal diabética y pie diabético. Vacunación (gripe, neumococo, hepatitis B, COVID-19, herpes zóster) y salud bucodental.'
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
  'Hipoglucemia': { definicion: [24, 1], criterios_dx: [24, 1], laboratorio: [24, 1], tx_farmacologico: [24, 1] },
  'Retinopatía diabética': { definicion: [20, 1, 4], criterios_dx: [20, 1, 4], laboratorio: [20, 1, 4], tx_farmacologico: [20, 1, 4] },
  'Enfermedad renal diabética': { definicion: [3, 9, 10, 12], criterios_dx: [3, 9, 10, 12], laboratorio: [3, 9, 10, 12], tx_farmacologico: [3, 9, 10, 12] },
  'Neuropatía diabética': { definicion: [18, 1], criterios_dx: [18, 1], laboratorio: [18, 1], tx_farmacologico: [18, 1] },
  'Pie diabético': { definicion: [19, 1], criterios_dx: [19, 1], laboratorio: [19, 1], tx_farmacologico: [19, 1] },
  'Enfermedad cardiovascular ateroesclerótica y síndrome cardio-renal-metabólico': { definicion: [7, 8, 23, 2], criterios_dx: [7, 8, 23, 2], laboratorio: [7, 8, 23, 2], tx_farmacologico: [7, 8, 23, 2] },
  'Diabetes gestacional e hiperglucemia en el embarazo': { definicion: [21, 22], criterios_dx: [21, 22], laboratorio: [21, 22], tx_farmacologico: [21, 22] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios diagnósticos de la ADA': [1],
  'Meta de HbA1c según el perfil del paciente (calculadora disponible)': [1, 13, 14],
  'Estadios de la enfermedad renal diabética (KDIGO)': [3],
  'Clasificación de la retinopatía diabética': [20],
  'Grados de Wagner del pie diabético': [19]
};
export const escalaCalc = {
  'Meta de HbA1c según el perfil del paciente (calculadora disponible)': 'metas-hba1c'
};
export const compGroups = [
  { name: 'Complicaciones agudas', items: ['Hipoglucemia'] },
  { name: 'Complicaciones microvasculares', items: ['Retinopatía diabética', 'Enfermedad renal diabética', 'Neuropatía diabética'] },
  { name: 'Complicaciones macrovasculares y pie diabético', items: ['Enfermedad cardiovascular ateroesclerótica y síndrome cardio-renal-metabólico', 'Pie diabético'] },
  { name: 'Situaciones especiales', items: ['Diabetes gestacional e hiperglucemia en el embarazo'] }
];
export const complicacionesIntro = 'La hipoglucemia es la complicación aguda del tratamiento; las crisis hiperglucemicas (cetoacidosis diabética y estado hiperosmolar hiperglucemico) tienen tema propio. Las complicaciones crónicas microvasculares son la retinopatía, la enfermedad renal diabética y la neuropatía; las macrovasculares son la enfermedad coronaria, cerebrovascular y arterial periférica, con el pie diabético como síndrome que combina neuropatía, isquemia e infección. La diabetes gestacional es una situación especial con criterios y objetivos propios.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnóstico y metas' },
  { id: 'clasificacion', label: 'Clasificación y tratamiento' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'DIABETES MELLITUS', color: '#1f6f6b', target: 'definicion' },
  branches: [
    { title: 'Diagnóstico y metas', sub: 'Criterios ADA; HbA1c objetivo', color: '#1f6f6b', target: 'diagnostico', leaves: [
      { title: 'Criterios diagnósticos', sub: 'Ayuno, HbA1c, PTOG, azar', color: '#1f6f6b', target: 'diagnostico' },
      { title: 'Metas de control', sub: 'HbA1c y tiempo en rango', color: '#3f6b52', target: 'diagnostico' }
    ] },
    { title: 'Complicaciones agudas', sub: 'Del tratamiento', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Hipoglucemia', sub: 'Regla del 15; glucagon', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Cetoacidosis y estado hiperosmolar', sub: 'Tema propio', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones crónicas', sub: 'Micro y macrovasculares', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Retinopatía diabética', sub: 'Cribado con fondo de ojo', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Enfermedad renal diabética', sub: 'Albuminuria y filtrado', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Neuropatía diabética', sub: 'Polineuropatía y autonómica', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Enfermedad cardiovascular y síndrome CKM', sub: 'Primera causa de muerte', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pie diabético', sub: 'Neuropatía, isquemia, infección', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Situaciones especiales', sub: 'Embarazo', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Diabetes gestacional', sub: 'Cribado 24 a 28 semanas', color: '#6b3a5a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1], no_invasivos: [16, 1], imagen: [20, 19] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 17];
