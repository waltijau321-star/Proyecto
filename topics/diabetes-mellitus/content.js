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
  subtitulo: 'Modulo 38 · Medicina Interna',
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
    <div style="border:1px solid #1f6f6b;background:#1f6f6b18;border-radius:8px;padding:6px 10px;"><strong style="color:#1f6f6b;">Indicacion.</strong> Sintomas de hiperglucemia (poliuria, polidipsia, perdida de peso, vision borrosa) o cribado en adultos con sobrepeso y un factor de riesgo, a partir de los 35 anos en todos, y en el embarazo.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;">Glucosa plasmatica en ayuno <strong>126 mg/dL o mayor</strong> (ayuno de 8 h)</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;"><strong>HbA1c 6.5% o mayor</strong> (metodo estandarizado)</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;">PTOG con 75 g: glucosa a las 2 h <strong>200 mg/dL o mayor</strong></div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 10px;">Glucosa al azar <strong>200 mg/dL o mayor</strong> con sintomas clasicos o crisis hiperglucemica</div>
    </div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">Confirmacion.</strong> Un solo resultado alterado se confirma con una segunda prueba (la misma u otra) en un dia distinto, salvo hiperglucemia inequivoca (glucosa al azar 200 o mayor con sintomas o crisis).</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">Prediabetes.</strong> Ayuno 100 a 125 mg/dL, HbA1c 5.7 a 6.4%, o glucosa a las 2 h en PTOG de 140 a 199 mg/dL. Riesgo alto de progresion: dieta, ejercicio y perdida de peso; metformina si hay factores anadidos.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">Valores de la ADA. En el embarazo se aplican criterios propios (ver la ficha de diabetes gestacional). La HbA1c no es fiable con anemia, hemoglobinopatias, ferropenia, hemolisis, embarazo o enfermedad renal avanzada.</div>
</div>`;

const escalonHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="border:1px solid #1f6f6b;background:#1f6f6b18;border-radius:8px;padding:6px 10px;margin-bottom:6px;"><strong style="color:#1f6f6b;">Base en todos.</strong> Educacion, alimentacion, actividad fisica, control del peso y del resto de factores de riesgo, y metformina salvo contraindicacion (filtrado glomerular menor de 30, hipoxia tisular aguda).</div>
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 10px;background:#8c3a3412;"><strong style="color:#8c3a34;">ECV ateroesclerotica o riesgo cardiovascular alto:</strong> agonista del receptor de GLP-1 con beneficio cardiovascular probado, o inhibidor de SGLT2.</div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 10px;background:#8c3a3412;"><strong style="color:#8c3a34;">Insuficiencia cardiaca:</strong> inhibidor de SGLT2.</div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:6px 10px;background:#8a6a1f12;"><strong style="color:#8a6a1f;">Enfermedad renal diabetica (filtrado 20 o mayor, albuminuria):</strong> inhibidor de SGLT2; anadir agonista de GLP-1 (FLOW) y finerenona si persiste la albuminuria pese a IECA o ARA y SGLT2.</div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 10px;background:#3f6b5212;"><strong style="color:#3f6b52;">Obesidad o prioridad de perder peso:</strong> agonista de GLP-1 o tirzepatida (agonista dual GIP/GLP-1); valorar cirugia metabolica.</div>
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:6px 10px;background:#3d5a7312;"><strong style="color:#3d5a73;">Coste o acceso como prioridad, sin los factores anteriores:</strong> sulfonilurea o pioglitazona. Insulina si la HbA1c es muy alta, hay perdida de peso o sintomas de catabolismo.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">La eleccion no depende solo de la HbA1c: los inhibidores de SGLT2 y los agonistas de GLP-1 reducen eventos cardiovasculares y renales con independencia del control glucemico. Reevaluar e intensificar cada 3 a 6 meses hasta la meta. En la DM1 el tratamiento es siempre insulina (basal-bolo o infusion subcutanea continua) con conteo de carbohidratos y, si es posible, monitorizacion continua de glucosa.</div>
</div>`;

const pieHtml = `
<div style="max-width:560px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <table style="border-collapse:collapse;width:100%;min-width:440px;">
    <thead><tr style="background:var(--panel2);">
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Grado de Wagner</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Lesion</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">0</td><td style="padding:3px 6px;border:1px solid var(--line);">Pie de riesgo sin ulcera: deformidad, callo, neuropatia o enfermedad arterial</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">1</td><td style="padding:3px 6px;border:1px solid var(--line);">Ulcera superficial que no pasa de la dermis</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">2</td><td style="padding:3px 6px;border:1px solid var(--line);">Ulcera profunda hasta tendon, capsula o hueso, sin absceso ni osteomielitis</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">3</td><td style="padding:3px 6px;border:1px solid var(--line);">Ulcera profunda con absceso, osteomielitis o artritis septica</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">4</td><td style="padding:3px 6px;border:1px solid var(--line);">Gangrena localizada (antepie o talon)</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">5</td><td style="padding:3px 6px;border:1px solid var(--line);">Gangrena de todo el pie</td></tr>
    </tbody>
  </table>
  <div style="color:var(--ink-dim);margin-top:4px;">La clasificacion de la Universidad de Texas anade el estadio (A limpia, B infeccion, C isquemia, D infeccion mas isquemia) y tiene mejor valor pronostico. En toda ulcera valorar infeccion, isquemia (indice tobillo-brazo, presion en el dedo, oximetria transcutanea) y profundidad con la sonda ("probe to bone" positivo apoya osteomielitis).</div>
</div>`;

const retinopatiaHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">RD no proliferativa leve.</strong> Solo microaneurismas.</div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">RD no proliferativa moderada.</strong> Microaneurismas mas hemorragias, exudados duros o algodonosos, sin llegar a los criterios de grave.</div>
    <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:8px;padding:6px 10px;"><strong style="color:#8c3a34;">RD no proliferativa grave (regla 4-2-1).</strong> Hemorragias intensas en los 4 cuadrantes, o arrosariamiento venoso en 2 o mas, o anomalias microvasculares intrarretinianas en 1 o mas. Alto riesgo de progresar a proliferativa.</div>
    <div style="border:1px solid #7a1f3d;background:#7a1f3d18;border-radius:8px;padding:6px 10px;"><strong style="color:#7a1f3d;">RD proliferativa.</strong> Neovascularizacion del disco o de la retina, hemorragia prerretiniana o vitrea; riesgo de desprendimiento traccional y de glaucoma neovascular.</div>
    <div style="border:1px solid #3d5a73;background:#3d5a7318;border-radius:8px;padding:6px 10px;"><strong style="color:#3d5a73;">Edema macular diabetico.</strong> Engrosamiento retiniano en la macula; puede coexistir con cualquier estadio y es la principal causa de perdida visual.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">Cribado con fondo de ojo bajo dilatacion o retinografia: al diagnostico en la DM2 y a los 5 anos del diagnostico en la DM1, y luego cada ano (cada 1 a 2 anos si es normal de forma repetida y el control es bueno). Tratamiento: optimizar la glucemia y la presion arterial; fotocoagulacion panretiniana en la proliferativa de alto riesgo; anti-VEGF intravitreo en el edema macular y como alternativa en la proliferativa.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La diabetes mellitus es un grupo de enfermedades metabolicas caracterizadas por hiperglucemia cronica por un defecto de la secrecion de insulina, de su accion, o de ambas. La hiperglucemia mantenida lesiona con los anos la retina, el rinon, el nervio periferico y el arbol arterial, y las descompensaciones agudas (cetoacidosis, estado hiperosmolar, hipoglucemia) ponen en riesgo la vida a corto plazo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los tipos y su fisiopatologia.</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>Diabetes tipo 1</strong> (5 a 10%): destruccion autoinmune de la celula beta con deficiencia absoluta de insulina y tendencia a la cetosis; autoanticuerpos positivos (anti-GAD65, IA-2, ZnT8, insulina). Suele debutar en la infancia o la juventud, a veces como cetoacidosis, pero puede aparecer a cualquier edad (LADA: forma de progresion lenta en el adulto).</li>
  <li><strong>Diabetes tipo 2</strong> (90 a 95%): resistencia a la insulina en el musculo, el higado y el tejido adiposo junto con un fallo progresivo de la celula beta. Se asocia a obesidad, sedentarismo y antecedente familiar; a menudo cursa anos asintomatica.</li>
  <li><strong>Diabetes gestacional</strong>: hiperglucemia detectada por primera vez en el embarazo que no cumple criterios de diabetes manifiesta (ver esa ficha).</li>
  <li><strong>Otros tipos especificos</strong>: MODY (monogenica, autosomica dominante, de inicio juvenil), diabetes pancreatogenica o tipo 3c (pancreatitis cronica, cancer, fibrosis quistica, hemocromatosis), endocrinopatias (Cushing, acromegalia), y la inducida por farmacos (glucocorticoides, antipsicoticos, inhibidores de la calcineurina, algunos antirretrovirales).</li>
</ul>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El diagnostico.</strong></p>
${figBlock('Figura 1', 'Criterios diagnosticos de la ADA y confirmacion', dxHtml)}
<p style="margin:0 0 12px;">Cualquiera de estos cuatro criterios establece el diagnostico: glucosa plasmatica en ayuno de <strong>126 mg/dL o mayor</strong>, <strong>HbA1c de 6.5% o mayor</strong>, glucosa a las 2 horas de una sobrecarga oral con 75 g de <strong>200 mg/dL o mayor</strong>, o glucosa al azar de <strong>200 mg/dL o mayor</strong> con sintomas clasicos. Salvo hiperglucemia inequivoca, se confirma con una segunda prueba en un dia distinto. La <strong>prediabetes</strong> (ayuno 100 a 125, HbA1c 5.7 a 6.4%, o 2 horas 140 a 199) identifica a personas con riesgo alto en las que la dieta, el ejercicio y la perdida de peso reducen la progresion (y la metformina, en los de mayor riesgo).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las metas de control.</strong></p>
<p style="margin:0 0 12px;">Para la mayoria de los adultos, <strong>HbA1c menor de 7%</strong>, con glucosa preprandial de 80 a 130 y posprandial menor de 180 mg/dL. Una meta mas estricta (menor de 6.5%) es razonable si se alcanza sin hipoglucemia ni carga de tratamiento; una meta mas laxa (menor de 8%, o simplemente evitar la hiperglucemia sintomatica) es apropiada en el anciano fragil, la comorbilidad avanzada, el antecedente de hipoglucemia grave o la expectativa de vida corta. Con monitorizacion continua de glucosa se anade el <strong>tiempo en rango</strong> (70 a 180 mg/dL) como objetivo (mas del 70% del tiempo, con menos del 4% por debajo de 70). El control estricto previene sobre todo las complicaciones microvasculares (DCCT, UKPDS); su efecto macrovascular es menor y aparece a largo plazo (efecto de legado), y en pacientes de larga evolucion y alto riesgo un control demasiado agresivo puede ser perjudicial (ACCORD).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento de la DM2, guiado por la comorbilidad.</strong></p>
${figBlock('Figura 2', 'Escalonamiento del tratamiento de la diabetes tipo 2', escalonHtml)}
<p style="margin:0 0 12px;">Sobre la base de estilo de vida y metformina, la eleccion del segundo farmaco ya no se guia solo por la HbA1c: en la enfermedad cardiovascular, la insuficiencia cardiaca y la enfermedad renal diabetica se anaden de entrada un <strong>inhibidor de SGLT2</strong> o un <strong>agonista del receptor de GLP-1</strong> por su beneficio cardiovascular y renal demostrado, con independencia del control glucemico. En la obesidad se prioriza un agonista de GLP-1 o la tirzepatida y se valora la cirugia metabolica. En paralelo se tratan la presion arterial (objetivo menor de 130/80), los lipidos (estatina) y el tabaquismo, y se aplica el cribado periodico de complicaciones.</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Las complicaciones agudas son la hipoglucemia y las crisis hiperglucemicas (cetoacidosis diabetica y estado hiperosmolar, con tema propio). Las cronicas son microvasculares (retinopatia, enfermedad renal diabetica, neuropatia) y macrovasculares (enfermedad coronaria, cerebrovascular y arterial periferica), con el pie diabetico como sindrome que combina neuropatia, isquemia e infeccion. La diabetes gestacional es una situacion especial con criterios y objetivos propios. Todas se desarrollan en Complicaciones.</p>`;

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
      tituloA: 'Diabetes tipo 2 asintomatica (hallazgo de cribado)',
      tituloB: 'Hiperglucemia sintomatica o debut cetosico',
      compensada: 'La DM2 cursa a menudo anos sin sintomas y se detecta en un analisis de cribado o al estudiar una complicacion (proteinuria, retinopatia, infarto, disfuncion erectil). El cribado se recomienda en adultos con sobrepeso u obesidad y al menos un factor de riesgo (antecedente familiar, etnia de riesgo, hipertension, dislipidemia, sindrome de ovario poliquistico, sedentarismo, diabetes gestacional previa), y en todos a partir de los 35 anos; si es normal, repetir cada 3 anos.',
      descompensada: 'La DM1 y a veces la DM2 debutan con poliuria, polidipsia, perdida de peso, polifagia, vision borrosa, candidiasis genital o infecciones cutaneas de repeticion. El debut puede ser una cetoacidosis diabetica (mas en la DM1) o un estado hiperosmolar hiperglucemico (mas en la DM2 del anciano), ambos con tema propio. La acantosis nigricans y la obesidad central orientan a resistencia a la insulina.'
    },
    laboratorio: [
      { prueba: 'Glucosa plasmatica en ayuno', utilidad: 'Criterio diagnostico (126 mg/dL o mayor) y herramienta de cribado y de seguimiento. Requiere ayuno de al menos 8 horas.' },
      { prueba: 'HbA1c', utilidad: 'Criterio diagnostico (6.5% o mayor) y principal parametro de control; refleja la glucemia media de los ultimos 2 a 3 meses. No es fiable con anemia, hemoglobinopatias, ferropenia, hemolisis, transfusion reciente, embarazo o enfermedad renal avanzada; en esos casos usar la glucosa o la fructosamina.' },
      { prueba: 'Prueba de tolerancia oral a la glucosa con 75 g', utilidad: 'Glucosa a las 2 horas de 200 mg/dL o mayor: criterio diagnostico. Mas sensible que la glucosa en ayuno para detectar diabetes y prediabetes; util cuando la HbA1c no es fiable y en el embarazo.' },
      { prueba: 'Peptido C y autoanticuerpos (anti-GAD65, IA-2, ZnT8, insulina)', utilidad: 'Distinguen la DM1 y la LADA (peptido C bajo, autoanticuerpos positivos) de la DM2 (peptido C normal o alto, autoanticuerpos negativos) cuando la clasificacion clinica es dudosa.' },
      { prueba: 'Cociente albumina/creatinina en orina y filtrado glomerular estimado', utilidad: 'Cribado anual de enfermedad renal diabetica desde el diagnostico en la DM2 y a los 5 anos en la DM1; guian el uso de IECA o ARA, inhibidores de SGLT2 y finerenona.' },
      { prueba: 'Perfil lipidico, TSH (en la DM1), transaminasas', utilidad: 'Estratificacion del riesgo cardiovascular y del tratamiento con estatina; cribado de tiroiditis autoinmune asociada a la DM1; deteccion de esteatohepatitis metabolica.' },
      { prueba: 'Cetonas en sangre (beta-hidroxibutirato) o en orina', utilidad: 'Ante hiperglucemia con sintomas, enfermedad intercurrente o dolor abdominal, para detectar cetoacidosis; obligatorio en la DM1 y en el paciente tratado con inhibidores de SGLT2 (riesgo de cetoacidosis euglucemica).' }
    ],
    no_invasivos: [
      { metodo: 'Cuestionario FINDRISC (calculadora disponible)', interpretacion: 'Estima el riesgo de desarrollar diabetes tipo 2 en 10 anos a partir de la edad, el indice de masa corporal, el perimetro abdominal, la actividad fisica, el consumo de fruta y verdura, el tratamiento antihipertensivo y los antecedentes personales y familiares.', cutoff: 'Menor de 7 riesgo bajo; 7 a 11 ligeramente elevado; 12 a 14 moderado; 15 a 20 alto; mayor de 20 muy alto' },
      { metodo: 'Fondo de ojo bajo dilatacion o retinografia', interpretacion: 'Clasifica la retinopatia (no proliferativa leve, moderada o grave, proliferativa) y detecta el edema macular.', cutoff: 'Cribado al diagnostico en la DM2, a los 5 anos en la DM1, y luego anual (cada 1 a 2 anos si es normal de forma repetida)' },
      { metodo: 'Monitorizacion continua de glucosa y tiempo en rango', interpretacion: 'Complementa a la HbA1c: aporta el tiempo en rango (70 a 180 mg/dL), el tiempo en hipoglucemia y la variabilidad glucemica.', cutoff: 'Objetivo: mas del 70% del tiempo en rango, menos del 4% por debajo de 70 y menos del 1% por debajo de 54 mg/dL' },
      { metodo: 'Exploracion del pie: monofilamento de 10 g e indice tobillo-brazo', interpretacion: 'El monofilamento de Semmes-Weinstein de 10 g mas un segundo test (diapason de 128 Hz, sensibilidad al pinchazo, reflejo aquileo o umbral de vibracion) detectan la neuropatia; el indice tobillo-brazo y la presion en el dedo valoran la isquemia.', cutoff: 'Exploracion completa del pie al menos una vez al ano; mas a menudo si hay neuropatia, deformidad o antecedente de ulcera' }
    ],
    imagen: [
      { modalidad: 'Retinografia con camara no midriatica', hallazgos: 'Microaneurismas, hemorragias, exudados, arrosariamiento venoso, anomalias microvasculares, neovascularizacion y edema macular; permite el cribado a distancia con lectura diferida o con inteligencia artificial.' },
      { modalidad: 'Tomografia de coherencia optica (OCT) macular', hallazgos: 'Cuantifica el engrosamiento retiniano del edema macular diabetico y guia el tratamiento con anti-VEGF.' },
      { modalidad: 'Ecografia Doppler arterial de miembros inferiores y angio-TC o angiografia', hallazgos: 'Localizan y cuantifican la enfermedad arterial periferica en el pie diabetico con isquemia, y planifican la revascularizacion.' },
      { modalidad: 'Radiografia, resonancia magnetica o gammagrafia con leucocitos del pie', hallazgos: 'La radiografia simple es el primer paso ante sospecha de osteomielitis; la resonancia es la prueba mas sensible y especifica y diferencia la osteomielitis de la osteoartropatia de Charcot.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La diabetes se clasifica por su <strong>etiologia</strong> (tipo 1 autoinmune, tipo 2, gestacional, y otros tipos especificos como MODY, diabetes tipo 3c o pancreatogenica, y la inducida por farmacos), por el <strong>grado de control</strong> (HbA1c y tiempo en rango frente a la meta individualizada) y por la <strong>presencia y el estadio de las complicaciones</strong>, que es lo que determina el pronostico y modula tanto la meta glucemica como la eleccion de farmacos (el escalonamiento del tratamiento de la DM2 se resume en la Figura 2 de Definicion).`,
    escalas: [
      { nombre: 'Criterios diagnosticos de la ADA', componentes: 'Glucosa en ayuno, HbA1c, glucosa a las 2 horas en PTOG con 75 g, y glucosa al azar con sintomas.', formula: 'Ayuno 126 o mayor; HbA1c 6.5% o mayor; 2 horas 200 o mayor; azar 200 o mayor con sintomas (mg/dL).', interpretacion: 'Un criterio alterado confirmado en dos ocasiones (o hiperglucemia inequivoca en una) establece el diagnostico. Prediabetes: ayuno 100 a 125, HbA1c 5.7 a 6.4%, 2 horas 140 a 199.' },
      { nombre: 'Meta de HbA1c segun el perfil del paciente (calculadora disponible)', componentes: 'Riesgo de hipoglucemia, duracion de la diabetes, expectativa de vida, comorbilidad y complicaciones vasculares, recursos y preferencias.', formula: 'Meta individualizada.', interpretacion: 'Menor de 7% para la mayoria; menor de 6.5% si se logra sin hipoglucemia; menor de 8% (o evitar la hiperglucemia sintomatica) en el anciano fragil, la comorbilidad avanzada o la expectativa de vida corta.' },
      { nombre: 'Estadios de la enfermedad renal diabetica (KDIGO)', componentes: 'Filtrado glomerular estimado (G1 a G5) y albuminuria por el cociente albumina/creatinina (A1 menor de 30, A2 de 30 a 300, A3 mayor de 300 mg/g).', formula: 'Matriz filtrado por albuminuria (mapa de riesgo verde-amarillo-naranja-rojo).', interpretacion: 'A mayor descenso del filtrado y mayor albuminuria, mayor riesgo de progresion y cardiovascular; guia la intensidad del bloqueo del sistema renina-angiotensina, el inhibidor de SGLT2 y la finerenona.' },
      { nombre: 'Clasificacion de la retinopatia diabetica', componentes: 'Microaneurismas, hemorragias, exudados, arrosariamiento venoso, anomalias microvasculares intrarretinianas, neovascularizacion y edema macular.', formula: 'RD no proliferativa leve, moderada o grave (regla 4-2-1), y RD proliferativa; el edema macular se clasifica aparte.', interpretacion: 'La RD no proliferativa grave y la proliferativa exigen valoracion y tratamiento por oftalmologia (fotocoagulacion panretiniana, anti-VEGF); el edema macular se trata con anti-VEGF.' },
      { nombre: 'Grados de Wagner del pie diabetico', componentes: 'Profundidad de la ulcera y presencia de infeccion profunda o gangrena.', formula: 'Grado 0 (pie de riesgo) a grado 5 (gangrena de todo el pie).', interpretacion: 'A partir del grado 3 (absceso u osteomielitis) suele requerir ingreso, desbridamiento y antibiotico; la clasificacion de la Universidad de Texas anade el estadio de infeccion e isquemia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipoglucemia',
      color: '#8c3a34',
      definicion: 'Descenso de la glucosa plasmatica por debajo del umbral de seguridad en una persona tratada por diabetes. Se gradua en nivel 1 (alerta, 54 a 69 mg/dL), nivel 2 (clinicamente relevante, menor de 54 mg/dL) y nivel 3 o grave (deterioro cognitivo o fisico que obliga a la ayuda de un tercero, sin cifra definitoria). Es el principal factor limitante del control glucemico.',
      fisiopatologia: 'El exceso de insulina o de secretagogos frente a la ingesta, el ejercicio o el aclaramiento renal reducido baja la glucosa; en la diabetes de larga evolucion fallan las respuestas contrarreguladoras (primero la supresion de insulina y la liberacion de glucagon, despues la de adrenalina), y los episodios repetidos generan hipoglucemia inadvertida (perdida de los sintomas de alarma), que multiplica el riesgo de hipoglucemia grave.',
      epidemiologia: 'Muy frecuente en la DM1 (varios episodios leves por semana) y en la DM2 tratada con insulina o sulfonilureas. La hipoglucemia grave se asocia a caidas, fracturas, arritmias, deterioro cognitivo y mayor mortalidad, sobre todo en el anciano.',
      factores_riesgo: ['Tratamiento con insulina o con sulfonilureas o glinidas', 'Omision de comidas, ayuno o ejercicio no planificado', 'Consumo de alcohol', 'Enfermedad renal cronica (menor aclaramiento de insulina y de sulfonilureas)', 'Edad avanzada y deterioro cognitivo', 'Diabetes de larga evolucion con hipoglucemia inadvertida', 'Metas de HbA1c demasiado estrictas', 'Hospitalizacion con pautas de insulina no ajustadas'],
      clinica: 'Sintomas autonomicos (temblor, palpitaciones, sudoracion, hambre, ansiedad) y neuroglucopenicos (dificultad de concentracion, confusion, alteracion del comportamiento, vision borrosa, convulsiones, coma). En la hipoglucemia inadvertida faltan los sintomas autonomicos y el primer signo puede ser la neuroglucopenia.',
      criterios_dx: 'Triada de Whipple: sintomas compatibles, glucosa baja documentada y mejoria al corregirla. En la practica, cualquier glucemia capilar o intersticial menor de 70 mg/dL en una persona tratada por diabetes se trata como hipoglucemia. Registrar el nivel (1, 2 o 3) y buscar el desencadenante.',
      laboratorio: 'Glucemia capilar o de laboratorio para confirmar; en episodios atipicos o sin causa clara, valorar insulina, peptido C y sulfonilureas en sangre (para descartar hipoglucemia facticia o por otros farmacos). Funcion renal y hepatica.',
      imagen: 'No procede salvo sospecha de complicacion (traumatismo craneal tras una caida, isquemia miocardica desencadenada).',
      complementarios: 'Descarga y revision de la monitorizacion continua de glucosa o del glucometro para identificar el patron horario y ajustar el tratamiento; educacion estructurada de reversion de la hipoglucemia inadvertida.',
      dx_diferencial: 'En el no diabetico: insulinoma, hipoglucemia por otros farmacos, insuficiencia suprarrenal, hepatopatia grave, sepsis, hipoglucemia posprandial y facticia. En el diabetico casi siempre es yatrogena.',
      tx_medico: 'Paciente consciente (regla del 15): 15 a 20 g de hidratos de carbono de absorcion rapida (zumo, glucosa en tabletas o gel), repetir la glucemia a los 15 minutos y repetir la toma si sigue por debajo de 70; despues, una colacion o comida para evitar la recurrencia. Paciente con alteracion de la conciencia o incapaz de tragar: glucagon intramuscular, subcutaneo o intranasal en el ambito extrahospitalario, y glucosa intravenosa (10 a 25 g de dextrosa) en el hospital, seguida de perfusion si hay sulfonilureas o insulina de accion prolongada.',
      tx_farmacologico: 'Ajuste del tratamiento hipoglucemiante: reducir o retirar la insulina o la sulfonilurea implicada, pasar a insulinas y analogos con menor riesgo de hipoglucemia, y sustituir la sulfonilurea por un inhibidor de DPP-4, un agonista de GLP-1 o un inhibidor de SGLT2. En la intoxicacion por sulfonilureas refractaria, octreotido.',
      tx_intervencionista: 'No aplica; en la hipoglucemia inadvertida grave y recurrente de la DM1, la monitorizacion continua con alarmas, los sistemas de pancreas artificial (asa cerrada) y, en casos seleccionados, el trasplante de islotes o de pancreas.',
      criterios_uci: 'Hipoglucemia grave persistente pese al tratamiento, por sulfonilurea de accion prolongada o por insulina basal en sobredosis, que requiere perfusion de glucosa y monitorizacion estrecha; convulsiones o coma prolongado.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Revisar y reescribir la pauta de insulina (evitar las pautas moviles aisladas), tratar la causa (insuficiencia renal aguda, sepsis, retirada de corticoides), y educar al paciente y a la familia antes del alta, incluida la prescripcion de glucagon.',
      seguimiento_ambulatorio: 'Relajar la meta de HbA1c si ha habido hipoglucemia grave o inadvertida, revisar la tecnica y los horarios, indicar monitorizacion continua de glucosa cuando este disponible, y reevaluar en 2 a 4 semanas: evitar cualquier hipoglucemia durante ese periodo puede recuperar los sintomas de alarma.',
      pronostico: 'La mayoria de los episodios se resuelven sin secuelas, pero la hipoglucemia grave recurrente empeora la calidad de vida, se asocia a eventos cardiovasculares y a deterioro cognitivo, y es una causa evitable de mortalidad; el ajuste del tratamiento y la educacion la reducen de forma marcada.',
      algoritmo: ['Glucemia menor de 70 mg/dL en una persona tratada por diabetes: tratar como hipoglucemia y registrar el nivel', 'Consciente: 15 a 20 g de hidratos de carbono rapidos, repetir la glucemia a los 15 minutos y repetir si sigue baja; luego colacion', 'Alteracion de la conciencia: glucagon (intramuscular, subcutaneo o nasal) fuera del hospital; dextrosa intravenosa en el hospital, con perfusion si hay sulfonilurea o insulina prolongada', 'Buscar y corregir el desencadenante; ajustar el tratamiento hipoglucemiante y sustituir la sulfonilurea', 'Relajar la meta de HbA1c, indicar monitorizacion continua y reeducar; evitar toda hipoglucemia 2 a 4 semanas para revertir la hipoglucemia inadvertida']
    },
    {
      nombre: 'Retinopatia diabetica',
      color: '#7a1f3d',
      definicion: 'Microangiopatia de la retina inducida por la hiperglucemia cronica y la hipertension, principal causa de ceguera evitable en el adulto en edad laboral. Abarca la retinopatia no proliferativa (leve, moderada y grave), la proliferativa (con neovascularizacion) y el edema macular diabetico, que puede aparecer en cualquier estadio.',
      fisiopatologia: `La hiperglucemia dana el pericito y el endotelio capilar (via de los polioles, productos avanzados de glucosilacion, estres oxidativo, proteina cinasa C), con perdida de pericitos, microaneurismas, aumento de la permeabilidad (edema) y oclusion capilar. La isquemia retiniana estimula el VEGF, que induce neovasos fragiles que sangran y traccionan la retina.${figBlock('Figura 3', 'Clasificacion de la retinopatia diabetica y del edema macular', retinopatiaHtml)}`,
      epidemiologia: 'Casi todos los pacientes con DM1 y mas del 60% de los pacientes con DM2 tienen algun grado de retinopatia a los 20 anos de evolucion. La incidencia ha bajado con el mejor control de la glucemia y de la presion arterial y con el cribado sistematico.',
      factores_riesgo: ['Duracion de la diabetes', 'Mal control glucemico (HbA1c elevada)', 'Hipertension arterial', 'Enfermedad renal diabetica y proteinuria', 'Dislipidemia', 'Embarazo (puede acelerar la progresion)', 'Mejoria brusca del control glucemico en una retinopatia avanzada (empeoramiento transitorio)'],
      clinica: 'Asintomatica hasta fases avanzadas. La perdida de vision aparece por edema macular (vision central borrosa, metamorfopsia), hemorragia vitrea (moscas volantes, perdida brusca) o desprendimiento traccional. De ahi la importancia del cribado en el paciente asintomatico.',
      criterios_dx: 'Exploracion del fondo de ojo bajo dilatacion o retinografia, clasificando el grado (no proliferativa leve, moderada o grave por la regla 4-2-1, o proliferativa) y la presencia de edema macular. La tomografia de coherencia optica cuantifica el edema macular y la angiografia con fluoresceina delimita la isquemia y los neovasos.',
      laboratorio: 'No hay prueba de laboratorio diagnostica; se controlan la HbA1c, la presion arterial, los lipidos y la funcion renal como factores modificables.',
      imagen: 'Retinografia (cribado), tomografia de coherencia optica macular (edema) y angiografia con fluoresceina (isquemia y neovascularizacion) para planificar el tratamiento.',
      complementarios: 'Coordinacion con oftalmologia para el seguimiento segun el grado; educacion sobre el control estricto de la glucemia y la presion arterial.',
      dx_diferencial: 'Retinopatia hipertensiva, oclusion venosa retiniana, retinopatia por radiacion, retinopatia de la anemia o de las discrasias, y degeneracion macular asociada a la edad en el paciente mayor.',
      tx_medico: 'Optimizar la HbA1c (evitando descensos muy bruscos si la retinopatia ya es avanzada), la presion arterial (objetivo menor de 130/80) y los lipidos; el fenofibrato ha mostrado reducir la progresion en algunos estudios. Dejar de fumar.',
      tx_farmacologico: 'Inyecciones intravitreas de anti-VEGF (ranibizumab, aflibercept, bevacizumab) como primera linea del edema macular diabetico con afectacion central y como alternativa o complemento en la retinopatia proliferativa; corticoides intravitreos en casos seleccionados.',
      tx_intervencionista: 'Fotocoagulacion panretiniana con laser en la retinopatia proliferativa de alto riesgo y en la no proliferativa grave de riesgo elevado; vitrectomia en la hemorragia vitrea persistente o el desprendimiento traccional que afecta a la macula.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En un ingreso por otra causa, no iniciar un control glucemico muy agresivo si hay retinopatia proliferativa no tratada sin valoracion oftalmologica previa; asegurar la cita de oftalmologia al alta.',
      seguimiento_ambulatorio: 'Sin retinopatia: revision cada 1 a 2 anos. No proliferativa leve o moderada: anual o semestral. No proliferativa grave o proliferativa: control por oftalmologia cada 2 a 4 meses. En la mujer con DM1 o DM2 que planifica embarazo, examen antes de la concepcion y en cada trimestre.',
      pronostico: 'Con cribado y tratamiento oportunos, el riesgo de ceguera grave es bajo; el control de la glucemia y de la presion arterial reduce mucho la progresion. El edema macular tratado a tiempo con anti-VEGF suele estabilizar o mejorar la vision.',
      algoritmo: ['Cribado con fondo de ojo o retinografia: al diagnostico en la DM2, a los 5 anos en la DM1, y luego segun el grado', 'Clasificar: no proliferativa leve, moderada o grave (regla 4-2-1), proliferativa, y presencia de edema macular', 'Optimizar HbA1c (sin descensos bruscos si es avanzada), presion arterial menor de 130/80 y lipidos; dejar de fumar', 'Edema macular central: anti-VEGF intravitreo. Proliferativa de alto riesgo: fotocoagulacion panretiniana', 'Hemorragia vitrea persistente o desprendimiento traccional macular: vitrectomia']
    },
    {
      nombre: 'Enfermedad renal diabetica',
      color: '#8a6a1f',
      definicion: 'Enfermedad renal cronica atribuible a la diabetes, definida por un cociente albumina/creatinina persistentemente elevado (30 mg/g o mayor), un filtrado glomerular menor de 60 mL/min/1.73 m2, o ambos, tras excluir otras causas. Es la primera causa de enfermedad renal terminal en el mundo.',
      fisiopatologia: 'La hiperglucemia y la hipertension intraglomerular (mediada por la vasodilatacion de la arteriola aferente y el sistema renina-angiotensina) producen hiperfiltracion, engrosamiento de la membrana basal, expansion mesangial y glomeruloesclerosis nodular (Kimmelstiel-Wilson) y difusa, con perdida progresiva de nefronas. La inflamacion y la fibrosis tubulointersticial determinan la progresion.',
      epidemiologia: 'Aparece en el 20 al 40% de los pacientes con diabetes. La albuminuria suele ser el primer marcador, aunque una parte de los pacientes progresa con filtrado descendente sin albuminuria. Multiplica el riesgo cardiovascular.',
      factores_riesgo: ['Duracion de la diabetes y mal control glucemico', 'Hipertension arterial', 'Obesidad y dislipidemia', 'Tabaquismo', 'Predisposicion genetica y etnia (mayor en afroamericanos, hispanos, indigenas y sur de Asia)', 'Episodios de lesion renal aguda', 'Uso de nefrotoxicos y contraste yodado'],
      clinica: 'Asintomatica hasta fases avanzadas. Con el descenso del filtrado aparecen hipertension de dificil control, edemas, anemia, alteraciones del fosforo y el calcio, y sintomas uremicos. El sindrome nefrotico es posible en la glomeruloesclerosis avanzada.',
      criterios_dx: 'Cociente albumina/creatinina en orina de primera hora de la manana elevado (30 mg/g o mayor) confirmado en 2 de 3 muestras en 3 a 6 meses, o filtrado glomerular estimado menor de 60 mL/min/1.73 m2 mantenido, en un paciente con diabetes y sin datos que sugieran otra nefropatia. Estadificar con la matriz filtrado-albuminuria de KDIGO.',
      laboratorio: 'Cociente albumina/creatinina, creatinina y filtrado estimado, potasio, bicarbonato, hemograma (anemia), fosforo, calcio y hormona paratiroidea segun el estadio; sedimento urinario (la hematuria dismorfica o los cilindros hematicos sugieren otra glomerulopatia).',
      imagen: 'Ecografia renal para valorar el tamano y descartar uropatia obstructiva o enfermedad renovascular; rinones de tamano conservado o aumentado son tipicos de la nefropatia diabetica frente a la reduccion en otras nefropatias cronicas.',
      complementarios: 'Derivacion a nefrologia si el filtrado es menor de 30, la albuminuria es mayor de 300 mg/g pese al tratamiento, hay progresion rapida o dudas sobre el diagnostico; considerar biopsia si el cuadro es atipico (ausencia de retinopatia, hematuria, deterioro brusco, sospecha de otra enfermedad).',
      dx_diferencial: 'Otras glomerulopatias (nefropatia por IgA, membranosa, vasculitis), nefroangioesclerosis hipertensiva, nefropatia isquemica, nefritis intersticial por farmacos y mieloma; la ausencia de retinopatia en la DM1 con proteinuria obliga a descartar otra causa.',
      tx_medico: 'Control glucemico segun la meta individualizada, presion arterial menor de 130/80, restriccion moderada de sodio y de proteinas, abandono del tabaco y evitacion de nefrotoxicos. Bloqueo del sistema renina-angiotensina con un IECA o un ARA a dosis maxima tolerada si hay albuminuria e hipertension (no combinarlos entre si).',
      tx_farmacologico: 'Inhibidor de SGLT2 si el filtrado es 20 o mayor y hay albuminuria o enfermedad renal cronica (se mantiene aunque el filtrado baje despues); reduce la progresion renal y los eventos cardiovasculares (CREDENCE, DAPA-CKD). Agonista del receptor de GLP-1 para el control glucemico y el beneficio cardiorrenal (FLOW). Finerenona (antagonista no esteroideo del receptor mineralocorticoide) si persiste la albuminuria pese a IECA o ARA y SGLT2, con potasio menor de 5 mmol/L (FIDELIO, FIGARO). Manejo de la anemia, la acidosis y el metabolismo mineral segun el estadio.',
      tx_intervencionista: 'Preparacion para el tratamiento renal sustitutivo (informacion sobre dialisis y trasplante, acceso vascular) cuando el filtrado se acerca a 15 a 20; el trasplante renal (o reno-pancreatico en la DM1 seleccionada) ofrece la mejor supervivencia y calidad de vida.',
      criterios_uci: 'Lesion renal aguda sobre cronica con hiperpotasemia grave, acidosis o sobrecarga refractaria; contexto de sepsis o cirugia mayor.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ajustar la dosis de los farmacos al filtrado, suspender metformina e inhibidores de SGLT2 ante enfermedad aguda o ayuno, evitar contraste y nefrotoxicos, y reintroducir el tratamiento de base al alta con un plan de control analitico.',
      seguimiento_ambulatorio: 'Cociente albumina/creatinina y filtrado al menos una vez al ano (mas a menudo segun el estadio y el riesgo), control de la presion arterial y del potasio tras iniciar o subir un IECA, un ARA o la finerenona, y seguimiento conjunto con nefrologia en los estadios avanzados.',
      pronostico: 'El bloqueo del sistema renina-angiotensina, los inhibidores de SGLT2 y la finerenona, junto con el control de la glucemia y la presion, enlentecen de forma sustancial la progresion; sin tratamiento, una parte importante de los pacientes con albuminuria intensa evoluciona a enfermedad renal terminal.',
      algoritmo: ['Cribado anual con cociente albumina/creatinina y filtrado estimado desde el diagnostico en la DM2 y a los 5 anos en la DM1', 'Confirmar la albuminuria (2 de 3 muestras) y estadificar con la matriz filtrado-albuminuria de KDIGO', 'IECA o ARA a dosis maxima tolerada si hay albuminuria e hipertension; controlar presion menor de 130/80', 'Inhibidor de SGLT2 si el filtrado es 20 o mayor; agonista de GLP-1; anadir finerenona si persiste la albuminuria y el potasio lo permite', 'Derivar a nefrologia (filtrado menor de 30, progresion rapida, dudas diagnosticas) y preparar el tratamiento sustitutivo cuando proceda']
    },
    {
      nombre: 'Neuropatia diabetica',
      color: '#3d5a73',
      definicion: 'Lesion del sistema nervioso periferico atribuible a la diabetes tras excluir otras causas. La forma mas frecuente es la polineuropatia sensitivomotora distal simetrica; tambien existen la neuropatia autonomica, las mononeuropatias (incluidas las craneales y por atrapamiento) y la amiotrofia diabetica (radiculoplexopatia lumbosacra).',
      fisiopatologia: 'La hiperglucemia activa la via de los polioles, genera productos avanzados de glucosilacion y estres oxidativo, y produce microangiopatia de los vasa nervorum con isquemia del nervio. En la DM2 contribuyen la resistencia a la insulina, la dislipidemia y la obesidad, que explican la neuropatia ya presente en la prediabetes.',
      epidemiologia: 'Hasta el 50% de los pacientes con diabetes de larga evolucion desarrolla polineuropatia distal; es la principal causa de pie diabetico y de amputacion no traumatica. La neuropatia autonomica cardiovascular aumenta la mortalidad.',
      factores_riesgo: ['Duracion de la diabetes y mal control glucemico', 'Hipertrigliceridemia y obesidad', 'Hipertension arterial', 'Tabaquismo y consumo de alcohol', 'Enfermedad arterial periferica', 'Deficit de vitamina B12 (favorecido por la metformina a largo plazo)', 'Edad avanzada y talla alta'],
      clinica: 'Polineuropatia distal: adormecimiento, hormigueo, dolor urente o lancinante y calambres de predominio nocturno, en calcetin y luego en guante, con perdida de la sensibilidad protectora. Autonomica: hipotension ortostatica, taquicardia de reposo, gastroparesia, diarrea o estrenimiento, disfuncion erectil, vejiga neurogena e hipoglucemia inadvertida. Mononeuropatias: paralisis del III par que respeta la pupila, del VI, del mediano (tunel carpiano) o del peroneo.',
      criterios_dx: 'Diagnostico clinico: sintomas compatibles mas exploracion alterada (monofilamento de 10 g y al menos uno de diapason de 128 Hz, sensibilidad al pinchazo, reflejo aquileo o umbral de vibracion), tras descartar otras causas. Los estudios de conduccion nerviosa se reservan para presentaciones atipicas (inicio agudo, asimetria marcada, predominio motor, progresion rapida).',
      laboratorio: 'Cribado de causas alternativas o concurrentes: hemograma, vitamina B12 y acido metilmalonico, funcion tiroidea y renal, proteinograma e inmunofijacion, serologia de VIH y, segun el contexto, cobre, folato o toxicos.',
      imagen: 'No necesaria en la polineuropatia tipica; resonancia lumbosacra en la amiotrofia diabetica o ante sospecha de compresion radicular; ecografia o resonancia del nervio en las neuropatias por atrapamiento dudosas.',
      complementarios: 'Pruebas de funcion autonomica (variabilidad de la frecuencia cardiaca, tabla basculante) en la sospecha de neuropatia autonomica cardiovascular; estudio de vaciamiento gastrico en la gastroparesia.',
      dx_diferencial: 'Neuropatia por deficit de B12, alcoholica, uremica, por hipotiroidismo, paraproteinemica, inflamatoria (polineuropatia desmielinizante inflamatoria cronica), por quimioterapia, vasculitica y hereditaria; la amiotrofia diabetica se confunde con radiculopatia compresiva.',
      tx_medico: 'Optimizar el control glucemico (previene y enlentece la neuropatia, sobre todo en la DM1) y los factores de riesgo cardiovascular; cuidado y revision periodica de los pies; corregir el deficit de B12. En la neuropatia autonomica: medidas posturales y midodrina o fludrocortisona para la hipotension ortostatica, comidas fraccionadas y procineticos para la gastroparesia.',
      tx_farmacologico: 'Dolor neuropatico: pregabalina o gabapentina, duloxetina o venlafaxina, o un antidepresivo triciclico (amitriptilina) a dosis baja; combinar si la respuesta es parcial. Opioides y tramadol solo como ultimo recurso. Capsaicina topica al 8% o parches de lidocaina como alternativa. No se recomiendan los suplementos (acido alfa-lipoico con evidencia limitada).',
      tx_intervencionista: 'Descompresion quirurgica en las mononeuropatias por atrapamiento con deficit progresivo (tunel carpiano); estimulacion de la medula espinal en el dolor neuropatico refractario y muy incapacitante.',
      criterios_uci: 'No aplica de forma directa; la disautonomia grave aumenta el riesgo perioperatorio (inestabilidad hemodinamica, aspiracion por gastroparesia).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Prevencion activa de las ulceras por presion en el pie insensible del paciente encamado, ajuste de la analgesia neuropatica a la funcion renal, y precaucion anestesica por la disautonomia y la gastroparesia.',
      seguimiento_ambulatorio: 'Exploracion del pie en cada visita (o al menos anual), revaluacion del dolor y de la tolerancia al tratamiento, cribado periodico de hipotension ortostatica y de sintomas digestivos y urinarios, y refuerzo del control metabolico.',
      pronostico: 'La polineuropatia establecida rara vez revierte; el buen control retrasa la progresion y el dolor suele controlarse de forma parcial. La neuropatia autonomica cardiovascular ensombrece el pronostico y la perdida de sensibilidad protectora marca el riesgo de ulcera y amputacion.',
      algoritmo: ['Cribado anual con monofilamento de 10 g mas un segundo test; descartar causas no diabeticas (B12, tiroides, alcohol, paraproteina)', 'Polineuropatia tipica: no hacen falta estudios de conduccion; si es atipica, derivar a neurologia', 'Optimizar la glucemia y los factores de riesgo; corregir el deficit de B12; cuidado estructurado de los pies', 'Dolor neuropatico: pregabalina o gabapentina, duloxetina o amitriptilina; combinar si la respuesta es parcial; opioides solo como ultimo recurso', 'Neuropatia autonomica: medidas para la hipotension ortostatica y la gastroparesia; valorar riesgo perioperatorio']
    },
    {
      nombre: 'Pie diabetico',
      color: '#6b4a2e',
      definicion: 'Sindrome que combina neuropatia periferica, enfermedad arterial periferica e infeccion sobre el pie del paciente con diabetes, y que puede llevar a la ulcera, la osteomielitis y la amputacion. Es la principal causa de amputacion no traumatica de la extremidad inferior.',
      fisiopatologia: `La neuropatia sensitiva elimina la sensibilidad protectora (traumatismos inadvertidos), la motora produce deformidad y puntos de presion anomalos, y la autonomica reseca la piel (fisuras). La enfermedad arterial periferica reduce la perfusion y la cicatrizacion. Sobre ese terreno, un traumatismo menor abre una ulcera que se infecta y puede alcanzar el hueso; la osteoartropatia de Charcot es la destruccion articular progresiva del pie neuropatico con buena perfusion.${figBlock('Figura 4', 'Grados de Wagner del pie diabetico', pieHtml)}`,
      epidemiologia: 'Alrededor del 15 al 25% de los pacientes con diabetes desarrolla una ulcera de pie a lo largo de la vida; mas de la mitad se infecta y una fraccion importante termina en amputacion. La mortalidad a 5 anos tras una amputacion mayor es muy alta.',
      factores_riesgo: ['Neuropatia periferica con perdida de la sensibilidad protectora', 'Enfermedad arterial periferica', 'Deformidad del pie, callosidades y presiones plantares elevadas', 'Ulcera o amputacion previas', 'Mal control glucemico y larga evolucion', 'Enfermedad renal cronica avanzada y dialisis', 'Tabaquismo', 'Alteracion visual y limitaciones para el autocuidado'],
      clinica: 'Ulcera indolora en zonas de presion (cabezas metatarsianas, talon, dorso de los dedos), a veces con celulitis, secrecion o mal olor; el pie isquemico anade palidez, frialdad, ausencia de pulsos y dolor de reposo. La infeccion profunda puede cursar con escasa fiebre y leucocitosis en el paciente diabetico. El pie de Charcot agudo se presenta como un pie caliente, eritematoso y edematoso, a menudo confundido con celulitis o trombosis.',
      criterios_dx: 'Exploracion sistematica: sensibilidad (monofilamento de 10 g), pulsos e indice tobillo-brazo o presion en el dedo, inspeccion de deformidades y zonas de presion, y en toda ulcera valorar profundidad ("probe to bone"), infeccion (criterios de la IDSA/IWGDF: leve, moderada, grave) e isquemia. Clasificar con Wagner o con la Universidad de Texas.',
      laboratorio: 'Hemograma, proteina C reactiva, velocidad de sedimentacion y procalcitonina (apoyan osteomielitis si estan muy elevadas), glucemia y HbA1c, funcion renal; cultivo de tejido profundo o de hueso (mejor que el frotis superficial) para dirigir el antibiotico.',
      imagen: 'Radiografia simple ante toda ulcera que no cierra o con sospecha de osteomielitis (reaccion perios­tica, destruccion cortical, gas); resonancia magnetica si la radiografia es dudosa (es la mas sensible y diferencia osteomielitis de Charcot); ecografia Doppler y angio-TC o angiografia para planificar la revascularizacion.',
      complementarios: 'Valoracion multidisciplinar (cirugia vascular, ortopedia, podologia, enfermedad infecciosa, endocrinologia); estudio de presiones plantares y prescripcion de calzado y plantillas de descarga.',
      dx_diferencial: 'Ulcera venosa o arterial no diabetica, pioderma gangrenoso, vasculitis, osteomielitis de otra causa, gota tofacea, y en el pie de Charcot agudo: celulitis, trombosis venosa profunda y artritis septica.',
      tx_medico: 'Descarga de la presion (bota de contacto total en la ulcera plantar neuropatica, calzado terapeutico), curas con desbridamiento del tejido no viable, control de la glucemia y de la nutricion, y antibiotico dirigido solo si hay infeccion clinica (no en la ulcera colonizada). En el Charcot agudo, inmovilizacion y descarga estricta durante meses.',
      tx_farmacologico: 'Antibiotico segun la gravedad y los cultivos: infeccion leve con cobertura de grampositivos por via oral; infeccion moderada o grave con cobertura de amplio espectro (incluidos gramnegativos y anaerobios, y SARM segun el riesgo local) por via intravenosa. Duracion: 1 a 2 semanas en la infeccion de partes blandas; 3 a 6 semanas en la osteomielitis (mas corta si se reseca todo el hueso infectado).',
      tx_intervencionista: 'Revascularizacion (endovascular o quirurgica) en el pie con isquemia significativa y ulcera que no cicatriza; desbridamiento quirurgico urgente y drenaje en la infeccion profunda o el absceso; amputacion menor para controlar la infeccion o la gangrena localizada, y mayor solo si fracasa el salvamento o hay sepsis no controlable.',
      criterios_uci: 'Infeccion grave del pie con sepsis, isquemia critica con amenaza inmediata de la extremidad, o descompensacion metabolica (cetoacidosis, estado hiperosmolar) secundaria a la infeccion.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ingreso para la infeccion moderada-grave, la isquemia critica o el fracaso del tratamiento ambulatorio: antibiotico intravenoso, control glucemico, valoracion vascular urgente, desbridamiento y planificacion de la descarga y del calzado antes del alta.',
      seguimiento_ambulatorio: 'Tras la cicatrizacion, seguimiento de por vida en una consulta de pie diabetico: revision periodica, calzado y plantillas a medida, educacion en autocuidado (inspeccion diaria, no caminar descalzo, control de la temperatura del agua) y tratamiento precoz de cualquier lesion nueva; el riesgo de recurrencia es alto.',
      pronostico: 'Con un abordaje multidisciplinar precoz, la mayoria de las ulceras cicatriza y se evita la amputacion; la isquemia no revascularizable, la osteomielitis extensa y el retraso en la atencion empeoran mucho el pronostico, y la amputacion mayor conlleva una mortalidad elevada a medio plazo.',
      algoritmo: ['Cribado del pie de riesgo al menos una vez al ano: sensibilidad, pulsos e indice tobillo-brazo, deformidades y antecedente de ulcera', 'Ante una ulcera: valorar profundidad ("probe to bone"), infeccion (leve, moderada, grave) e isquemia; clasificar (Wagner o Texas) y hacer radiografia', 'Descarga de la presion, desbridamiento y control metabolico; antibiotico dirigido solo si hay infeccion clinica', 'Isquemia significativa con ulcera que no cierra: revascularizacion; infeccion profunda o absceso: desbridamiento quirurgico urgente', 'Tras cicatrizar: calzado y plantillas a medida, educacion en autocuidado y seguimiento de por vida en consulta de pie diabetico']
    },
    {
      nombre: 'Enfermedad cardiovascular ateroesclerotica y sindrome cardio-renal-metabolico',
      color: '#8c3a34',
      definicion: 'Enfermedad coronaria, cerebrovascular y arterial periferica de base ateroesclerotica, la principal causa de muerte en la diabetes. Se enmarca en el sindrome cardio-renal-metabolico (CKM), que reconoce la interaccion entre la obesidad, la resistencia a la insulina, la diabetes, la enfermedad renal cronica y la enfermedad cardiovascular.',
      fisiopatologia: 'La hiperglucemia, la resistencia a la insulina, la dislipidemia aterogenica (trigliceridos altos, HDL bajo, LDL pequenas y densas), la hipertension, la inflamacion cronica y la disfuncion endotelial aceleran la ateroesclerosis y favorecen un estado protrombotico. La diabetes tambien produce miocardiopatia por disfuncion microvascular y metabolica, que contribuye a la insuficiencia cardiaca (sobre todo con fraccion de eyeccion preservada).',
      epidemiologia: 'La diabetes multiplica por 2 a 4 el riesgo de enfermedad coronaria y de ictus y es un potente factor de riesgo de insuficiencia cardiaca y de enfermedad arterial periferica. La enfermedad cardiovascular y la renal explican la mayor parte de la mortalidad en la DM2.',
      factores_riesgo: ['Hiperglucemia y duracion de la diabetes', 'Hipertension arterial', 'Dislipidemia (colesterol no-HDL y ApoB elevados)', 'Tabaquismo', 'Obesidad y sedentarismo', 'Enfermedad renal diabetica y albuminuria', 'Antecedente familiar de enfermedad cardiovascular precoz'],
      clinica: 'La del territorio afectado (angina o infarto, ictus o ataque isquemico transitorio, claudicacion o isquemia critica). La isquemia miocardica puede ser silente por la neuropatia autonomica. La insuficiencia cardiaca se manifiesta con disnea, edemas y mala tolerancia al esfuerzo.',
      criterios_dx: 'Los propios de cada sindrome (electrocardiograma y troponina, imagen coronaria, TC o RM craneal, indice tobillo-brazo, ecocardiograma y peptidos natriureticos). En prevencion primaria, estimar el riesgo con una calculadora validada (por ejemplo las ecuaciones PREVENT o SCORE2-Diabetes) y buscar dano de organo (albuminuria, hipertrofia ventricular, placa carotidea o coronaria).',
      laboratorio: 'Perfil lipidico con colesterol no-HDL y ApoB, HbA1c, cociente albumina/creatinina y filtrado glomerular, y peptidos natriureticos si hay sospecha de insuficiencia cardiaca.',
      imagen: 'La correspondiente al evento; la puntuacion de calcio coronario ayuda a reclasificar el riesgo en prevencion primaria y a decidir la intensidad del tratamiento.',
      complementarios: 'Rehabilitacion cardiaca tras un evento; programa estructurado de ejercicio supervisado en la enfermedad arterial periferica; deshabituacion tabaquica.',
      tx_medico: 'Control integral: HbA1c segun la meta, presion arterial menor de 130/80 (IECA o ARA de preferencia si hay albuminuria), estatina de intensidad moderada en la mayoria y de alta intensidad si hay enfermedad cardiovascular establecida o riesgo alto, con objetivo de colesterol LDL menor de 55 mg/dL en el muy alto riesgo (ver el tema de Dislipidemias). Antiagregacion con acido acetilsalicilico en prevencion secundaria (y solo en casos seleccionados de alto riesgo en prevencion primaria). Estilo de vida y perdida de peso.',
      tx_farmacologico: 'Priorizar los hipoglucemiantes con beneficio cardiovascular y renal probado: inhibidor de SGLT2 (enfermedad cardiovascular, insuficiencia cardiaca, enfermedad renal diabetica) y agonista del receptor de GLP-1 (enfermedad cardiovascular ateroesclerotica, obesidad), con independencia de la HbA1c y anadidos a la metformina. En la insuficiencia cardiaca, el inhibidor de SGLT2 esta indicado con cualquier fraccion de eyeccion.',
      tx_intervencionista: 'Revascularizacion coronaria, carotidea o de miembros inferiores segun la indicacion clinica; el control de los factores de riesgo es lo que reduce la recurrencia.',
      criterios_uci: 'Los del evento agudo (sindrome coronario, ictus, isquemia critica, insuficiencia cardiaca descompensada).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante un evento cardiovascular, iniciar o intensificar la estatina y anadir o mantener un inhibidor de SGLT2 o un agonista de GLP-1 con beneficio probado antes del alta; ajustar la antiagregacion y la anticoagulacion segun la indicacion.',
      seguimiento_ambulatorio: 'Revision periodica de la HbA1c, la presion arterial, los lipidos (perfil de control a las 4 a 12 semanas de cambiar el tratamiento), la funcion renal y la adherencia; rehabilitacion cardiaca y refuerzo del estilo de vida.',
      pronostico: 'El tratamiento multifactorial intensivo (glucemia, presion, lipidos, antiagregacion y estilo de vida) reduce de forma marcada los eventos y la mortalidad (estudio Steno-2); los inhibidores de SGLT2 y los agonistas de GLP-1 aportan un beneficio adicional en eventos cardiovasculares, insuficiencia cardiaca y progresion renal.',
      algoritmo: ['Estimar el riesgo cardiovascular y buscar dano de organo; clasificar como prevencion primaria o secundaria', 'Control multifactorial: HbA1c a meta, presion menor de 130/80, estatina segun el riesgo, antiagregacion en prevencion secundaria', 'Anadir a la metformina un inhibidor de SGLT2 o un agonista de GLP-1 con beneficio cardiovascular o renal probado, con independencia de la HbA1c', 'Insuficiencia cardiaca: inhibidor de SGLT2 con cualquier fraccion de eyeccion; enfermedad renal diabetica: SGLT2 y valorar finerenona', 'Tras un evento: intensificar en el ingreso, rehabilitacion cardiaca y seguimiento estrecho de los factores de riesgo']
    },
    {
      nombre: 'Diabetes gestacional e hiperglucemia en el embarazo',
      color: '#6b3a5a',
      definicion: 'Diabetes gestacional: hiperglucemia detectada por primera vez en el segundo o el tercer trimestre que no cumple criterios de diabetes manifiesta. Si en el primer trimestre se cumplen los criterios habituales de diabetes, se habla de diabetes manifiesta (pregestacional no diagnosticada). Ambas aumentan el riesgo de complicaciones maternas y fetales.',
      fisiopatologia: 'Las hormonas placentarias (lactogeno placentario, progesterona, cortisol) inducen una resistencia a la insulina fisiologica que se acentua en el tercer trimestre; cuando la reserva de la celula beta no compensa, aparece la hiperglucemia. La glucosa materna atraviesa la placenta y estimula la insulina fetal, con macrosomia, organomegalia e hipoglucemia neonatal.',
      epidemiologia: 'Afecta a alrededor del 7 al 14% de los embarazos segun la poblacion y los criterios. Mas de la mitad de las mujeres con diabetes gestacional desarrolla diabetes tipo 2 en los 10 a 20 anos siguientes.',
      factores_riesgo: ['Sobrepeso u obesidad y ganancia de peso excesiva', 'Edad materna avanzada', 'Antecedente de diabetes gestacional o de macrosomia', 'Antecedente familiar de diabetes', 'Sindrome de ovario poliquistico', 'Etnia de riesgo (hispana, sur de Asia, afroamericana, indigena)', 'Glucosuria o hiperglucemia en el primer trimestre'],
      clinica: 'Asintomatica; se detecta por cribado. Las complicaciones son macrosomia y distocia de hombros, cesarea, preeclampsia, polihidramnios, prematuridad, e hipoglucemia, hipocalcemia, ictericia y distres respiratorio neonatales; a largo plazo, mayor riesgo de obesidad y diabetes en el hijo.',
      criterios_dx: 'Cribado entre las semanas 24 y 28 (antes si hay factores de riesgo). Estrategia de un paso: PTOG con 75 g en ayunas; diagnostico con un solo valor alterado (ayuno 92 o mayor, 1 hora 180 o mayor, 2 horas 153 o mayor mg/dL). Estrategia de dos pasos: sobrecarga con 50 g sin ayuno y, si la glucosa a la hora es 130 a 140 o mayor, PTOG con 100 g y 3 horas (criterios de Carpenter-Coustan: ayuno 95, 1 hora 180, 2 horas 155, 3 horas 140; dos valores alterados).',
      laboratorio: 'PTOG diagnostica; automonitorizacion de glucemia capilar (ayuno y posprandial) durante el embarazo; HbA1c orientativa (menos fiable por el recambio eritrocitario); cetonas si hay hiperglucemia o enfermedad. A las 4 a 12 semanas posparto, PTOG con 75 g para reclasificar.',
      imagen: 'Ecografia obstetrica seriada para vigilar el crecimiento fetal (circunferencia abdominal, peso estimado), el liquido amniotico y, al final, el bienestar fetal; ecocardiografia fetal si el control es malo o hay diabetes pregestacional.',
      complementarios: 'Educacion nutricional y plan de ejercicio; consulta preconcepcional en la mujer con diabetes conocida (optimizar la HbA1c por debajo de 6.5%, suplementar folato, revisar farmacos y retinopatia y nefropatia).',
      dx_diferencial: 'Diabetes manifiesta en el embarazo (criterios de diabetes en el primer trimestre), diabetes tipo 1 de debut en la gestacion (perdida de peso, cetosis, autoanticuerpos) y diabetes MODY.',
      tx_medico: 'Primera linea: terapia nutricional (reparto de hidratos de carbono, control del peso) y actividad fisica; automonitorizacion con objetivos de ayuno menor de 95, 1 hora posprandial menor de 140 y 2 horas menor de 120 mg/dL.',
      tx_farmacologico: 'Si no se alcanzan los objetivos con dieta y ejercicio, la insulina es el tratamiento de eleccion (no atraviesa la placenta). La metformina y la gliburida son alternativas cuando la insulina no es viable, con la advertencia de que atraviesan la placenta y tienen datos de seguridad a largo plazo limitados. En la diabetes pregestacional, acido acetilsalicilico a dosis baja desde el final del primer trimestre para prevenir la preeclampsia.',
      tx_intervencionista: 'Decision del momento y la via del parto por obstetricia segun el control glucemico y el peso fetal estimado (valorar induccion a termino o cesarea si la macrosomia es marcada).',
      criterios_uci: 'Cetoacidosis diabetica en el embarazo (puede ocurrir con glucemias mas bajas y es una urgencia materno-fetal), preeclampsia grave o descompensacion de una diabetes pregestacional.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Durante el parto, mantener la glucemia materna en torno a 70 a 110 mg/dL con insulina y glucosa intravenosas para reducir la hipoglucemia neonatal; vigilancia del recien nacido (glucemia, calcio, bilirrubina).',
      seguimiento_ambulatorio: 'La mayoria de las mujeres suspende el tratamiento tras el parto. PTOG con 75 g a las 4 a 12 semanas posparto y, si es normal, cribado de diabetes cada 1 a 3 anos de por vida; fomentar la lactancia, la perdida de peso y el estilo de vida, que reducen la progresion a diabetes tipo 2; planificar los embarazos siguientes.',
      pronostico: 'El control adecuado normaliza en gran medida el riesgo obstetrico y neonatal. El riesgo materno a largo plazo de diabetes tipo 2 y de enfermedad cardiovascular es alto, por lo que el seguimiento posparto es una oportunidad clave de prevencion.',
      algoritmo: ['Cribado entre las semanas 24 y 28 (antes si hay factores de riesgo): un paso (PTOG 75 g, un valor) o dos pasos (50 g y luego 100 g)', 'Terapia nutricional y ejercicio con automonitorizacion; objetivos ayuno menor de 95, 1 hora menor de 140, 2 horas menor de 120 mg/dL', 'Si no se alcanzan los objetivos: insulina (de eleccion); metformina o gliburida como alternativa', 'Vigilancia ecografica del crecimiento fetal y del liquido; planificar el parto con obstetricia', 'Posparto: PTOG con 75 g a las 4 a 12 semanas y cribado periodico de por vida; lactancia y estilo de vida']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La diabetes se maneja de forma ambulatoria, pero el paciente ingresa con frecuencia por otras causas y la hiperglucemia hospitalaria (con diabetes conocida o sin ella) empeora los resultados. El objetivo intrahospitalario es mantener la glucemia en un rango seguro sin provocar hipoglucemia, usar pautas de insulina fisiologicas y planificar bien la transicion al alta.',
    parametros: ['Objetivo de glucemia de 140 a 180 mg/dL en la mayoria de los pacientes hospitalizados (140 a 180 o incluso 110 a 140 en pacientes seleccionados estables si se evita la hipoglucemia)', 'Insulina basal-bolo-correccion en el paciente que come, o basal mas correccion si esta en ayuno; evitar la pauta movil de insulina rapida como unico tratamiento', 'Perfusion intravenosa de insulina en el paciente critico, en la cetoacidosis y el estado hiperosmolar (ver su tema), y en el perioperatorio de cirugia mayor', 'Suspender metformina (riesgo con contraste, ayuno, inestabilidad), inhibidores de SGLT2 (cetoacidosis euglucemica: suspender 3 a 4 dias antes de cirugia mayor) y, segun el caso, sulfonilureas; reanudar al estabilizar', 'HbA1c al ingreso si no hay una reciente, para calibrar el control previo y ajustar el tratamiento del alta', 'Deteccion y tratamiento inmediato de la hipoglucemia (protocolo escrito) y revision de la causa de cada episodio', 'Educacion y plan de alta: conciliacion de la medicacion, tecnica de insulina, glucometro o sensor, cita de seguimiento y prescripcion de glucagon en el paciente con riesgo de hipoglucemia grave'],
    criterios_uci_general: 'Cetoacidosis diabetica o estado hiperosmolar graves (ver su tema), hipoglucemia grave refractaria, o descompensacion en el contexto de sepsis, infarto, ictus o cirugia mayor.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Trasplante renal (o reno-pancreatico simultaneo en la DM1 con enfermedad renal terminal) y trasplante de islotes o de pancreas aislado en la DM1 con hipoglucemia grave e inadvertida incapacitante pese al tratamiento optimo.',
    prevencion: 'Prevencion de la diabetes tipo 2: en la prediabetes, programa estructurado de perdida de peso (7% o mas) y de actividad fisica (150 minutos semanales), que reduce la incidencia mas que la metformina (Diabetes Prevention Program); metformina en los de mayor riesgo (indice de masa corporal alto, menores de 60 anos, mujeres con diabetes gestacional previa). Prevencion de complicaciones: control glucemico segun la meta individualizada, presion arterial menor de 130/80, estatina segun el riesgo, no fumar, y cribado sistematico de retinopatia, enfermedad renal diabetica y pie diabetico. Vacunacion (gripe, neumococo, hepatitis B, COVID-19, herpes zoster) y salud bucodental.'
  }
};

export const compCites = {
  'Hipoglucemia': [23, 0],
  'Retinopatia diabetica': [19, 0, 3],
  'Enfermedad renal diabetica': [2, 8, 9, 11],
  'Neuropatia diabetica': [17, 0],
  'Pie diabetico': [18, 0],
  'Enfermedad cardiovascular ateroesclerotica y sindrome cardio-renal-metabolico': [6, 7, 22, 1],
  'Diabetes gestacional e hiperglucemia en el embarazo': [20, 21]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios diagnosticos de la ADA': [0],
  'Meta de HbA1c segun el perfil del paciente (calculadora disponible)': [0, 12, 13],
  'Estadios de la enfermedad renal diabetica (KDIGO)': [2],
  'Clasificacion de la retinopatia diabetica': [19],
  'Grados de Wagner del pie diabetico': [18]
};
export const escalaCalc = {
  'Meta de HbA1c segun el perfil del paciente (calculadora disponible)': 'metas-hba1c'
};
export const compGroups = [
  { name: 'Complicaciones agudas', items: ['Hipoglucemia'] },
  { name: 'Complicaciones microvasculares', items: ['Retinopatia diabetica', 'Enfermedad renal diabetica', 'Neuropatia diabetica'] },
  { name: 'Complicaciones macrovasculares y pie diabetico', items: ['Enfermedad cardiovascular ateroesclerotica y sindrome cardio-renal-metabolico', 'Pie diabetico'] },
  { name: 'Situaciones especiales', items: ['Diabetes gestacional e hiperglucemia en el embarazo'] }
];
export const complicacionesIntro = 'La hipoglucemia es la complicacion aguda del tratamiento; las crisis hiperglucemicas (cetoacidosis diabetica y estado hiperosmolar hiperglucemico) tienen tema propio. Las complicaciones cronicas microvasculares son la retinopatia, la enfermedad renal diabetica y la neuropatia; las macrovasculares son la enfermedad coronaria, cerebrovascular y arterial periferica, con el pie diabetico como sindrome que combina neuropatia, isquemia e infeccion. La diabetes gestacional es una situacion especial con criterios y objetivos propios.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico y metas' },
  { id: 'clasificacion', label: 'Clasificacion y tratamiento' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'DIABETES MELLITUS', color: '#1f6f6b', target: 'definicion' },
  branches: [
    { title: 'Diagnostico y metas', sub: 'Criterios ADA; HbA1c objetivo', color: '#1f6f6b', target: 'diagnostico', leaves: [
      { title: 'Criterios diagnosticos', sub: 'Ayuno, HbA1c, PTOG, azar', color: '#1f6f6b', target: 'diagnostico' },
      { title: 'Metas de control', sub: 'HbA1c y tiempo en rango', color: '#3f6b52', target: 'diagnostico' }
    ] },
    { title: 'Complicaciones agudas', sub: 'Del tratamiento', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Hipoglucemia', sub: 'Regla del 15; glucagon', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Cetoacidosis y estado hiperosmolar', sub: 'Tema propio', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones cronicas', sub: 'Micro y macrovasculares', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Retinopatia diabetica', sub: 'Cribado con fondo de ojo', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Enfermedad renal diabetica', sub: 'Albuminuria y filtrado', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Neuropatia diabetica', sub: 'Polineuropatia y autonomica', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Enfermedad cardiovascular y sindrome CKM', sub: 'Primera causa de muerte', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pie diabetico', sub: 'Neuropatia, isquemia, infeccion', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Situaciones especiales', sub: 'Embarazo', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Diabetes gestacional', sub: 'Cribado 24 a 28 semanas', color: '#6b3a5a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [0], no_invasivos: [15, 0], imagen: [19, 18] };
export const clasificacionCite = [0, 1, 2];
export const seguimientoCite = [0, 16];
