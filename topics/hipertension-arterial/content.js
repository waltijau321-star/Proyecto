// topics/hipertension-arterial/content.js: Hipertension Arterial.
// Cubre el item "HTA esencial y urgencias/emergencias hipertensivas" del bloque II (Sistema
// Cardiovascular) del temario. La HTA secundaria se menciona en el abordaje pero se deja como
// tema propio (decision explicita del usuario).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas (compCites, escalaRefs, escalaCalc, compGroups, complicacionesIntro, categories, arbol,
// diagCites, clasificacionCite, seguimientoCite, estigmas, biopsia) es un `export const` de nivel
// superior, HERMANO de `content`.
//
// Estructura (decision del usuario): 5 entidades (HTA esencial, HTA secundaria -sospecha y
// cribado-, HTA resistente, urgencia hipertensiva, emergencia hipertensiva) + 3 danos de organo
// mediados por HTA (cardiopatia hipertensiva; enfermedad renal cronica y nefroangioesclerosis;
// enfermedad cerebrovascular, retinopatia y deterioro cognitivo). 3 calculadoras (SCORE2/
// SCORE2-OP, cociente aldosterona-renina, clasificacion de PA). 4 figuras SVG/HTML a mano
// (tecnica y umbrales de medicion; fenotipos MAPA/AMPA; escalon farmacologico; retinopatia de
// Keith-Wagener-Barker). Sin em dash en todo el archivo (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'hipertension-arterial',
  titulo: 'Hipertension Arterial',
  subtitulo: 'Modulo 35 · Medicina Interna',
  accent: '#8a2f43',
  accentDim: '#c08595'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const medicionHtml = `
<div style="display:flex;flex-direction:column;gap:12px;max-width:560px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="display:flex;gap:16px;align-items:center;justify-content:center;flex-wrap:wrap;">
    <svg viewBox="0 0 150 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hta-med-t hta-med-d" style="width:140px;height:120px;">
      <title id="hta-med-t">Posicion correcta para medir la presion arterial</title>
      <desc id="hta-med-d">Paciente sentado con la espalda apoyada, los pies planos en el suelo sin cruzar las piernas, el brazo descubierto y apoyado a la altura del corazon, con un manguito de tamano adecuado, tras 5 minutos de reposo y sin hablar.</desc>
      <rect x="18" y="118" width="114" height="6" fill="var(--line)"/>
      <path d="M40 118 L40 78 Q40 66 52 66 L86 66" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <path d="M40 92 L26 92 L26 118" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="92" cy="40" r="10" fill="var(--panel2)" stroke="var(--line)"/>
      <path d="M92 50 L92 78 Q92 84 86 84 L70 84" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <path d="M78 66 L60 74" fill="none" stroke="var(--line)" stroke-width="5" stroke-linecap="round"/>
      <rect x="58" y="68" width="16" height="11" rx="2" fill="#8a2f43" opacity="0.85"/>
      <line x1="66" y1="79" x2="66" y2="90" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="2 2"/>
      <text x="66" y="99" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">brazo a la altura</text>
      <text x="66" y="107" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">del corazon</text>
    </svg>
    <ul style="margin:0;padding-left:16px;min-width:210px;flex:1;line-height:1.7;color:var(--ink-dim);">
      <li>5 minutos de reposo, sentado, espalda apoyada</li>
      <li>Pies planos, piernas sin cruzar, no hablar</li>
      <li>Manguito de tamano adecuado, brazo a la altura del corazon</li>
      <li>Promedio de 2 a 3 lecturas, en 2 o mas visitas</li>
      <li>Preferible medicion automatizada y desatendida</li>
    </ul>
  </div>
  <div style="overflow-x:auto;">
    <div style="display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:2px;min-width:420px;font-size:9.5px;">
      <div style="font-weight:700;background:var(--panel2);padding:4px 6px;border-radius:6px 0 0 0;">Contexto</div>
      <div style="font-weight:700;background:var(--panel2);padding:4px 6px;">PA elevada</div>
      <div style="font-weight:700;background:var(--panel2);padding:4px 6px;border-radius:0 6px 0 0;">Hipertension</div>

      <div style="padding:4px 6px;border:1px solid var(--line);">Consultorio (ESC 2024)</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">120-139 / 70-89</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">140 / 90 o mayor</div>

      <div style="padding:4px 6px;border:1px solid var(--line);">Consultorio (ACC/AHA 2025)</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">120-129 / menor de 80 (elevada); 130-139 / 80-89 (estadio 1)</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">140 / 90 o mayor (estadio 2)</div>

      <div style="padding:4px 6px;border:1px solid var(--line);">MAPA de 24 horas</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">-</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">130 / 80 o mayor</div>

      <div style="padding:4px 6px;border:1px solid var(--line);">MAPA diurna / AMPA</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">-</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">135 / 85 o mayor</div>

      <div style="padding:4px 6px;border:1px solid var(--line);border-radius:0 0 0 6px;">MAPA nocturna</div>
      <div style="padding:4px 6px;border:1px solid var(--line);">-</div>
      <div style="padding:4px 6px;border:1px solid var(--line);border-radius:0 0 6px 0;">120 / 70 o mayor</div>
    </div>
  </div>
</div>`;

const fenotiposHtml = `
<div style="max-width:460px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;gap:3px;">
    <div></div>
    <div style="text-align:center;font-weight:700;background:var(--panel2);padding:5px;border-radius:6px 0 0 0;">Fuera de consultorio normal</div>
    <div style="text-align:center;font-weight:700;background:var(--panel2);padding:5px;border-radius:0 6px 0 0;">Fuera de consultorio alta</div>

    <div style="font-weight:700;background:var(--panel2);padding:5px;display:flex;align-items:center;">Consultorio normal</div>
    <div style="border:1px solid var(--line);padding:8px;text-align:center;background:#3f6b5218;">Normotension</div>
    <div style="border:1px solid var(--line);padding:8px;text-align:center;background:#8c3a3422;">HTA enmascarada<br><span style="color:var(--ink-dim);">(riesgo similar a la sostenida)</span></div>

    <div style="font-weight:700;background:var(--panel2);padding:5px;display:flex;align-items:center;border-radius:0 0 0 6px;">Consultorio alta</div>
    <div style="border:1px solid var(--line);padding:8px;text-align:center;background:#8a6a1f18;">HTA de bata blanca<br><span style="color:var(--ink-dim);">(riesgo intermedio)</span></div>
    <div style="border:1px solid var(--line);padding:8px;text-align:center;background:#8c3a3433;border-radius:0 0 6px 0;">HTA sostenida</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Toda PA de consultorio elevada debe confirmarse con MAPA o AMPA antes de etiquetar al paciente como hipertenso.</div>
</div>`;

const escalonHtml = `
<div style="display:flex;flex-direction:column;gap:6px;max-width:520px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:center;">
    <div style="font-weight:700;color:#3d5a73;text-align:center;">Paso 1</div>
    <div style="background:#3d5a7318;border:1px solid #3d5a73;border-radius:8px;padding:6px 10px;">Combinacion doble a dosis baja en un solo comprimido: IECA o ARA-II + calcioantagonista dihidropiridinico, o + diuretico tipo tiazida (clortalidona o indapamida)</div>

    <div style="font-weight:700;color:#8a6a1f;text-align:center;">Paso 2</div>
    <div style="background:#8a6a1f18;border:1px solid #8a6a1f;border-radius:8px;padding:6px 10px;">Triple combinacion: IECA o ARA-II + calcioantagonista + diuretico tipo tiazida, a dosis plenas</div>

    <div style="font-weight:700;color:#8c3a34;text-align:center;">Paso 3</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 10px;">Anadir espironolactona 25-50 mg si el filtrado glomerular es mayor de 45 y el potasio menor de 4.5 (define HTA resistente). Luego: betabloqueador, alfabloqueador o agente de accion central</div>
  </div>
  <div style="color:var(--ink-dim);text-align:center;">Betabloqueadores en cualquier paso si hay indicacion especifica (cardiopatia isquemica, insuficiencia cardiaca, fibrilacion auricular, embarazo). Denervacion renal por cateter como opcion complementaria (IIb). Evitar IECA + ARA-II juntos.</div>
</div>`;

const retinopatiaHtml = `
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:4px;max-width:520px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px;background:#3f6b5212;">
    <div style="font-weight:700;color:#3f6b52;">Grado I</div>
    <div style="color:var(--ink-dim);">Estrechamiento arteriolar leve y generalizado.</div>
  </div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px;background:#8a6a1f12;">
    <div style="font-weight:700;color:#8a6a1f;">Grado II</div>
    <div style="color:var(--ink-dim);">Cruces arteriovenosos (signo de Gunn) y arterias en hilo de cobre o de plata.</div>
  </div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px;background:#8c3a3418;">
    <div style="font-weight:700;color:#8c3a34;">Grado III</div>
    <div style="color:var(--ink-dim);">Hemorragias en llama, exudados duros y manchas algodonosas. Dano grave de organo.</div>
  </div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px;background:#7a1f3d22;">
    <div style="font-weight:700;color:#7a1f3d;">Grado IV</div>
    <div style="color:var(--ink-dim);">Lo anterior mas edema de papila. En agudo, emergencia hipertensiva (antes "HTA maligna").</div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La hipertension arterial (HTA) es la elevacion persistente de la presion arterial (PA) que aumenta el riesgo de dano de organo y de eventos cardiovasculares y renales. Es el principal factor de riesgo modificable de muerte y de anos de vida ajustados por discapacidad en el mundo. El umbral operativo es una PA de consultorio de 140/90 mmHg o mayor (ESC 2024) o de 130/80 mmHg o mayor (ACC/AHA 2025), confirmada y, preferiblemente, con medicion fuera de consultorio.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Como se mide y se clasifica.</strong>${figBlock('Figura 1', 'Tecnica de medicion y umbrales de PA', medicionHtml)} El diagnostico exige una tecnica correcta (promedio de varias lecturas en reposo, con el manguito adecuado) y la confirmacion con monitorizacion ambulatoria de 24 horas (MAPA) o automedicion domiciliaria (AMPA), que ademas identifican la HTA de bata blanca y la enmascarada.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El espectro clinico.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>HTA esencial (primaria)</strong>: sin causa identificable; cerca del 90% de los casos.</li>
    <li><strong>HTA secundaria</strong>: con una causa concreta y a menudo tratable (5 a 10% de los casos; mas en la HTA resistente o de inicio temprano). Se desarrolla como tema propio.</li>
    <li><strong>HTA resistente</strong>: PA por encima del objetivo pese a 3 farmacos a dosis optimas, uno de ellos un diuretico.</li>
    <li><strong>Urgencia hipertensiva</strong>: PA muy elevada sin dano agudo de organo.</li>
    <li><strong>Emergencia hipertensiva</strong>: PA muy elevada con dano agudo de organo en curso.</li>
  </ul>
</div>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> El riesgo cardiovascular aumenta de forma continua desde 115/75 mmHg (cada 20/10 mmHg dobla la mortalidad cardiovascular), y el beneficio del tratamiento es proporcional a la reduccion de la PA: cada 10 mmHg menos de PA sistolica reduce alrededor de un 20% los eventos cardiovasculares mayores, un 27% el ictus y un 28% la insuficiencia cardiaca. El dano de organo (corazon, rinon, cerebro y retina) y los eventos determinan el pronostico y se desarrollan en Complicaciones.</p>`;

export const bibliografia = [
  'McEvoy JW, McCarthy CP, Bruno RM, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J. 2024;45(38):3912-4018.',
  'Jones DW, Ferdinand KC, Taler SJ, et al. 2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Circulation. 2025;152.',
  'Mancia G, Kreutz R, Brunstrom M, et al. 2023 ESH Guidelines for the management of arterial hypertension. J Hypertens. 2023;41(12):1874-2071.',
  'Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Hypertension. 2018;71(6):e13-e115.',
  'SPRINT Research Group. A Randomized Trial of Intensive versus Standard Blood-Pressure Control. N Engl J Med. 2015;373(22):2103-2116.',
  'Blood Pressure Lowering Treatment Trialists Collaboration. Pharmacological blood pressure lowering for primary and secondary prevention of cardiovascular disease across different levels of blood pressure: an individual participant-level data meta-analysis. Lancet. 2021;397(10285):1625-1636.',
  'SCORE2 working group and ESC Cardiovascular Risk Collaboration. SCORE2 risk prediction algorithms: new models to estimate 10-year risk of cardiovascular disease in Europe. Eur Heart J. 2021;42(25):2439-2454.',
  'SCORE2-OP working group and ESC Cardiovascular Risk Collaboration. SCORE2-OP risk prediction algorithms: estimating incident cardiovascular event risk in older persons in four geographical risk regions. Eur Heart J. 2021;42(25):2455-2467.',
  'Williams B, MacDonald TM, Morant S, et al. Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2). Lancet. 2015;386(10008):2059-2068.',
  'Funder JW, Carey RM, Mantero F, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916.',
  'Neal B, Wu Y, Feng X, et al. Effect of Salt Substitution on Cardiovascular Events and Death (SSaSS). N Engl J Med. 2021;385(12):1067-1077.',
  'Cheung AK, Chang TI, Cushman WC, et al. KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney Int. 2021;99(3S):S1-S87.',
  'Peixoto AJ. Acute Severe Hypertension. N Engl J Med. 2019;381(19):1843-1852.',
  'van den Born BH, Lip GYH, Brguljan-Hitij J, et al. ESC Council on hypertension position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother. 2019;5(1):37-46.',
  'ACCORD Study Group. Effects of Intensive Blood-Pressure Control in Type 2 Diabetes Mellitus. N Engl J Med. 2010;362(17):1575-1585.',
  'Ettehad D, Emdin CA, Kiran A, et al. Blood pressure lowering for prevention of cardiovascular disease and death: a systematic review and meta-analysis. Lancet. 2016;387(10022):957-967.',
  'SPRINT MIND Investigators. Effect of Intensive vs Standard Blood Pressure Control on Probable Dementia (SPRINT MIND). JAMA. 2019;321(6):553-561.',
  'Bohm M, Kario K, Kandzari DE, et al. Efficacy of catheter-based renal denervation in the absence of antihypertensive medications (SPYRAL HTN-OFF MED Pivotal). Lancet. 2020;395(10234):1444-1451.',
  'Keith NM, Wagener HP, Barker NW. Some different types of essential hypertension: their course and prognosis. Am J Med Sci. 1939;197(3):332-343.',
  'Rossi GP, Bernini G, Caliumi C, et al. A prospective study of the prevalence of primary aldosteronism in 1,125 hypertensive patients (PAPY study). J Am Coll Cardiol. 2006;48(11):2293-2300.',
  'Lewington S, Clarke R, Qizilbash N, et al. Age-specific relevance of usual blood pressure to vascular mortality: a meta-analysis of individual data for one million adults in 61 prospective studies. Lancet. 2002;360(9349):1903-1913.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'HTA cronica (habitualmente asintomatica)',
      tituloB: 'Crisis hipertensiva (urgencia o emergencia)',
      compensada: 'PA elevada de forma persistente, casi siempre asintomatica, detectada en una medicion rutinaria o en el cribado. La cefalea occipital matutina, el mareo o la epistaxis no son marcadores fiables. En la exploracion se buscan datos de dano de organo (cuarto ruido y punta sostenida, crepitantes, soplos carotideos o abdominales, disminucion de pulsos, retinopatia, edema) y pistas de causa secundaria.',
      descompensada: 'PA muy elevada, habitualmente mayor de 180/120 mmHg. Urgencia hipertensiva: sin dano agudo de organo. Emergencia hipertensiva: con dano agudo de organo en curso (encefalopatia, edema agudo de pulmon, sindrome coronario, diseccion aortica, lesion renal aguda, retinopatia grado III-IV, ictus, eclampsia).'
    },
    laboratorio: [
      { prueba: 'Sodio, potasio, creatinina y filtrado glomerular', utilidad: 'Dano renal (nefroangioesclerosis) y basal para IECA, ARA-II y diureticos; una hipopotasemia espontanea o desproporcionada al diuretico orienta a hiperaldosteronismo primario.' },
      { prueba: 'Glucemia en ayunas y HbA1c', utilidad: 'Comorbilidad que modifica los objetivos y la eleccion de farmacos, y factor de riesgo cardiovascular concomitante.' },
      { prueba: 'Perfil lipidico', utilidad: 'Estratificacion del riesgo cardiovascular con SCORE2 o SCORE2-OP, que define el umbral de inicio farmacologico en la PA elevada.' },
      { prueba: 'Examen general de orina y cociente albumina/creatinina', utilidad: 'Albuminuria como marcador precoz de dano renal y de riesgo; un sedimento activo o proteinuria intensa apunta a enfermedad renal parenquimatosa primaria.' },
      { prueba: 'Hemograma, acido urico y calcio', utilidad: 'El acido urico se eleva con la HTA y algunos diureticos; la hipercalcemia sugiere hiperparatiroidismo como causa secundaria.' },
      { prueba: 'Cociente aldosterona/renina, metanefrinas y pruebas de cortisol', utilidad: 'Solo ante datos que sugieren HTA secundaria (ver esa tarjeta): hiperaldosteronismo primario, feocromocitoma, sindrome de Cushing.' }
    ],
    no_invasivos: [
      { metodo: 'Medicion de PA en consultorio (preferible automatizada y desatendida)', interpretacion: 'Promedio de al menos 2 o 3 lecturas, sentado tras 5 minutos de reposo, con manguito del tamano adecuado, en 2 o mas visitas antes de diagnosticar salvo PA muy alta o dano de organo.', cutoff: 'ESC 2024: no elevada menor de 120/70; elevada 120-139 / 70-89; hipertension 140/90 o mayor. ACC/AHA 2025: estadio 1 130-139 / 80-89; estadio 2 140/90 o mayor' },
      { metodo: 'Monitorizacion ambulatoria de PA de 24 horas (MAPA)', interpretacion: 'Prueba de referencia para confirmar el diagnostico, detectar HTA de bata blanca y enmascarada y valorar el patron nocturno (dipper o no dipper).', cutoff: 'Hipertension si la media de 24 h es 130/80 o mayor, la media diurna 135/85 o mayor, o la media nocturna 120/70 o mayor' },
      { metodo: 'Automedicion domiciliaria de PA (AMPA)', interpretacion: 'Alternativa a la MAPA para confirmar el diagnostico y para el seguimiento; mejora la adherencia. Aparato de brazo validado, 7 dias, lecturas por duplicado manana y noche, descartando el primer dia.', cutoff: 'Hipertension si la media es 135/85 o mayor' },
      { metodo: 'Electrocardiograma de 12 derivaciones', interpretacion: 'Cribado de hipertrofia ventricular izquierda, crecimiento auricular y fibrilacion auricular, todos marcadores de dano de organo.', cutoff: 'Indice de Sokolow-Lyon mayor de 35 mm o producto de Cornell mayor de 2440 mm x ms indica hipertrofia ventricular izquierda' },
      { metodo: 'Fondo de ojo', interpretacion: 'Obligado ante PA muy elevada o sospecha de emergencia: las hemorragias, los exudados y el edema de papila (retinopatia grado III-IV de Keith-Wagener-Barker) definen dano agudo de organo.', cutoff: 'El grado III (hemorragias y exudados) o IV (edema de papila) constituye emergencia hipertensiva' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma transtoracico', hallazgos: 'Cuantifica la masa ventricular izquierda y el tipo de hipertrofia (concentrica o excentrica), la funcion diastolica y sistolica y el tamano auricular izquierdo; mas sensible que el electrocardiograma para la hipertrofia.' },
      { modalidad: 'Ecografia renal y eco-Doppler de arterias renales', hallazgos: 'Asimetria de tamano renal, rinones pequenos y cicatrizales (nefroangioesclerosis) o estenosis de la arteria renal; primer paso ante sospecha de HTA renovascular.' },
      { modalidad: 'Angio-TC o angio-RM de arterias renales y suprarrenales', hallazgos: 'Confirma la estenosis de la arteria renal (ateroesclerotica o por displasia fibromuscular) y caracteriza un adenoma o una hiperplasia suprarrenal en el estudio del hiperaldosteronismo primario.' },
      { modalidad: 'Indice tobillo-brazo y grosor intima-media o placa carotidea', hallazgos: 'Detectan dano vascular subclinico y reclasifican el riesgo cardiovascular cuando este es intermedio.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La PA de consultorio se clasifica en categorias (ESC 2024: no elevada, elevada, hipertension; ACC/AHA 2025: normal, elevada, estadio 1, estadio 2) que, junto con el riesgo cardiovascular estimado por SCORE2 o SCORE2-OP, definen si se inicia tratamiento farmacologico y con que rapidez. La confirmacion con MAPA o AMPA permite ademas clasificar el fenotipo.${figBlock('Figura 2', 'Fenotipos segun la PA de consultorio y fuera de consultorio', fenotiposHtml)}`,
    escalas: [
      { nombre: 'Categorias de PA (ESC 2024)', componentes: 'PA de consultorio: no elevada menor de 120/70; PA elevada 120-139 / 70-89; hipertension 140/90 o mayor.', formula: 'Se toma la categoria mas alta que alcance la sistolica o la diastolica (ver Figura 1). Calculadora disponible.', interpretacion: 'La PA elevada se trata con estilo de vida y con farmacos si el riesgo es alto o hay dano de organo; la hipertension, con estilo de vida y farmacos desde el diagnostico.' },
      { nombre: 'Categorias de PA (ACC/AHA 2025)', componentes: 'Normal menor de 120/80; elevada 120-129 / menor de 80; estadio 1 130-139 / 80-89; estadio 2 140/90 o mayor.', formula: 'Categoria mas alta que alcance la sistolica o la diastolica.', interpretacion: 'Estadio 1 con riesgo de enfermedad cardiovascular ateroesclerotica a 10 anos del 7.5% o mayor (o con enfermedad establecida, diabetes o enfermedad renal cronica): iniciar farmacos. Estadio 2: farmacos desde el inicio.' },
      { nombre: 'SCORE2 y SCORE2-OP', componentes: 'Edad, sexo, tabaquismo, PA sistolica, colesterol total y HDL, calibrado por region de riesgo. SCORE2 para 40-69 anos, SCORE2-OP para 70 o mas. Calculadora disponible.', formula: 'Riesgo a 10 anos de eventos cardiovasculares mortales y no mortales.', interpretacion: 'Umbrales de riesgo alto por edad: menores de 50 anos, 7.5% o mayor; 50-69, 10% o mayor; 70 o mas, 15% o mayor. No aplicar con diabetes, enfermedad cardiovascular establecida, enfermedad renal cronica moderada-grave o hipercolesterolemia familiar.' },
      { nombre: 'Retinopatia hipertensiva de Keith-Wagener-Barker', componentes: 'Grado I estrechamiento arteriolar; II cruces arteriovenosos y arterias en hilo de cobre o plata; III hemorragias, exudados y manchas algodonosas; IV lo anterior mas edema de papila.', formula: 'Grado I a IV por fondo de ojo (ver Figura 4).', interpretacion: 'Los grados III y IV indican dano grave de organo y, en el contexto agudo, emergencia hipertensiva.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'HTA esencial (primaria)',
      color: '#8a2f43',
      definicion: 'Elevacion persistente de la PA sin una causa secundaria identificable, resultado de la interaccion de una predisposicion poligenica con factores ambientales (sodio, obesidad, sedentarismo, alcohol, estres). Constituye cerca del 90% de los casos y es un diagnostico de exclusion razonable tras un cribado basico negativo de causas secundarias.',
      fisiopatologia: 'Varios mecanismos convergen en un aumento de las resistencias vasculares perifericas y del gasto cardiaco: activacion del sistema renina-angiotensina-aldosterona y del sistema nervioso simpatico, manejo renal alterado del sodio con expansion de volumen, disfuncion endotelial con menor oxido nitrico, rigidez arterial por remodelado de la pared y deposito de colageno, e inflamacion de bajo grado. Con el tiempo la hipertrofia de la media y la rarefaccion capilar perpetuan la hipertension (se automantiene) y median el dano de organo.',
      epidemiologia: 'Afecta a entre un tercio y la mitad de los adultos segun la definicion; su prevalencia aumenta con la edad, y la HTA sistolica aislada por rigidez arterial domina despues de los 60 anos. El control es suboptimo en la mayoria de los paises. Es el principal factor de riesgo modificable de muerte y de anos de vida ajustados por discapacidad en el mundo.',
      factores_riesgo: ['Consumo alto de sodio y bajo de potasio', 'Sobrepeso y obesidad, sobre todo abdominal', 'Sedentarismo y consumo excesivo de alcohol', 'Tabaquismo y apnea obstructiva del sueno', 'Farmacos y sustancias presoras (AINE, anticonceptivos, descongestionantes, estimulantes, corticoides, ciclosporina, inhibidores del VEGF, regaliz)', 'Edad avanzada, antecedente familiar y bajo peso al nacer (no modificables)'],
      clinica: 'Asintomatica en la gran mayoria; la cefalea, el mareo y la epistaxis no son marcadores fiables. En la exploracion se buscan datos de dano de organo (cuarto ruido y punta sostenida por hipertrofia, crepitantes por insuficiencia cardiaca, soplos carotideos o abdominales, disminucion de pulsos, retinopatia) y pistas de causa secundaria.',
      criterios_dx: 'PA de consultorio 140/90 mmHg o mayor (ESC 2024) o 130/80 o mayor (ACC/AHA 2025) confirmada en 2 o mas visitas, idealmente con MAPA (media de 24 h 130/80 o mayor) o AMPA (media 135/85 o mayor), tras descartar HTA de bata blanca. Se diagnostica HTA esencial cuando el cribado basico de causas secundarias es negativo.',
      laboratorio: 'Sodio, potasio, creatinina con filtrado glomerular, glucemia y HbA1c, perfil lipidico, acido urico, examen de orina con cociente albumina/creatinina y hemograma; TSH y calcio segun el contexto.',
      imagen: 'No obligatoria en todos: ecocardiograma si el electrocardiograma sugiere hipertrofia o hay disnea; ecografia renal si la creatinina esta elevada o hay sospecha de causa renal.',
      complementarios: 'Estimacion del riesgo cardiovascular con SCORE2 o SCORE2-OP (calculadora disponible), que define el umbral de inicio farmacologico en la PA elevada; valoracion del dano de organo subclinico (electrocardiograma, cociente albumina/creatinina, filtrado glomerular y ecocardiograma o indice tobillo-brazo si el riesgo es intermedio).',
      dx_diferencial: 'HTA de bata blanca (PA de consultorio alta con MAPA o AMPA normales), pseudohipertension por arterias rigidas no compresibles en el anciano, HTA secundaria (ver esa tarjeta) y elevaciones transitorias por dolor, ansiedad, retencion urinaria o abstinencia.',
      tx_medico: 'Cambios de estilo de vida en todos: reduccion de sodio a menos de 2 g al dia (menos de 5 g de sal), sustituto de sal con potasio salvo enfermedad renal avanzada (reduce ictus y mortalidad, SSaSS), dieta DASH, perdida de peso, actividad fisica aerobica regular mas ejercicio isometrico, limitacion del alcohol y abandono del tabaco. Umbral de farmacos: PA elevada (120-139 / 70-89) con riesgo alto o dano de organo tras 3 meses de estilo de vida; hipertension (140/90 o mayor) desde el diagnostico. Objetivo: PA sistolica 120-129 mmHg en la mayoria si se tolera, individualizado y menos estricto en el anciano fragil.',
      tx_farmacologico: `Iniciar con una combinacion de dos farmacos a dosis baja en un solo comprimido: IECA o ARA-II mas un calcioantagonista dihidropiridinico o un diuretico tipo tiazida (se prefieren clortalidona o indapamida sobre la hidroclorotiazida). Segundo escalon: triple combinacion. Tercer escalon: anadir espironolactona 25-50 mg si el filtrado glomerular es mayor de 45 y el potasio menor de 4.5 (define HTA resistente). Los betabloqueadores se reservan para indicaciones especificas. Evitar la combinacion de IECA con ARA-II.${figBlock('Figura 3', 'Escalonamiento del tratamiento farmacologico', escalonHtml)}`,
      tx_intervencionista: 'La denervacion renal por cateter es una opcion complementaria (recomendacion IIb de la ESC 2024) en la HTA no controlada pese a estilo de vida y tratamiento farmacologico, o con intolerancia a los farmacos, mediante decision compartida en centros con experiencia.',
      criterios_uci: 'No aplica a la HTA cronica; solo si evoluciona a emergencia hipertensiva (ver esa tarjeta).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma caracteristica (manejo ambulatorio).',
      seguimiento_ambulatorio: 'Revision a las 2 a 4 semanas tras iniciar o cambiar el tratamiento, luego mensual hasta el control y despues cada 3 a 6 meses; AMPA para el seguimiento; control anual de electrolitos y funcion renal (mas estrecho con IECA, ARA-II o espironolactona); reevaluacion periodica del dano de organo y del riesgo; vigilar la adherencia y la hipotension ortostatica en el anciano. Vigilar la aparicion de dano de organo (ver las tres tarjetas correspondientes).',
      pronostico: 'El riesgo cardiovascular sube de forma continua desde 115/75 mmHg (cada 20/10 mmHg dobla la mortalidad cardiovascular); reducir la PA sistolica 10 mmHg disminuye alrededor de un 20% los eventos cardiovasculares mayores, un 27% el ictus, un 28% la insuficiencia cardiaca y un 13% la mortalidad total. El pronostico depende del grado de control sostenido y de la carga de dano de organo.',
      algoritmo: ['PA de consultorio 140/90 o mayor (o 130/80 con ACC/AHA) en 2 o mas visitas: confirmar con MAPA o AMPA y descartar bata blanca', 'Cribado basico de causa secundaria y estimacion del riesgo con SCORE2 o SCORE2-OP', 'Estilo de vida en todos (sodio, potasio, dieta DASH, peso, ejercicio, alcohol, tabaco)', 'Iniciar combinacion doble a dosis baja en un comprimido (IECA o ARA-II mas calcioantagonista o diuretico tipo tiazida); objetivo sistolico 120-129 si se tolera', 'Escalar a triple combinacion y luego a espironolactona; denervacion renal como opcion complementaria']
    },
    {
      nombre: 'HTA secundaria (sospecha y cribado)',
      color: '#3d5a73',
      definicion: 'HTA con una causa identificable y a menudo tratable o curable; supone cerca del 5 al 10% de los casos y una proporcion mayor en la HTA resistente, de inicio temprano o maligna. Este tema no la desarrolla a fondo (es objeto de un tema propio); esta ficha resume cuando sospecharla y el cribado inicial.',
      fisiopatologia: 'Segun la causa: exceso de mineralocorticoide con retencion de sodio y supresion de la renina (hiperaldosteronismo primario, la causa endocrina mas frecuente), activacion del sistema renina-angiotensina por hipoperfusion renal (estenosis de arteria renal), exceso de catecolaminas (feocromocitoma), exceso de cortisol, retencion de sodio por enfermedad del parenquima renal (la causa secundaria mas frecuente en conjunto), o mecanismos mecanicos y neurohormonales (coartacion, apnea del sueno).',
      epidemiologia: 'La enfermedad renal parenquimatosa y el hiperaldosteronismo primario son las causas mas frecuentes; el hiperaldosteronismo esta infradiagnosticado y aparece hasta en un 5 al 10% de los hipertensos no seleccionados y en cerca del 20% de los resistentes.',
      factores_riesgo: ['HTA de inicio antes de los 30 anos o de agravamiento brusco despues de los 55', 'HTA resistente o maligna', 'Hipopotasemia espontanea o desproporcionada al diuretico', 'Deterioro de la funcion renal con IECA o ARA-II, soplo abdominal o edema agudo de pulmon recurrente', 'Crisis paroxisticas de cefalea, palpitaciones, sudoracion y palidez', 'Fenotipo cushingoide, apnea del sueno, o diferencia de pulsos y presion entre brazos y piernas'],
      clinica: 'La de la HTA mas los rasgos de la causa: debilidad y calambres por hipopotasemia en el hiperaldosteronismo; paroxismos adrenergicos en el feocromocitoma; obesidad central, estrias y equimosis en el Cushing; ronquido y somnolencia en la apnea; claudicacion y retraso radiofemoral en la coartacion.',
      criterios_dx: 'Cribado dirigido segun la pista: cociente aldosterona/renina para el hiperaldosteronismo primario (calculadora disponible; corregir antes la hipopotasemia y suspender los antagonistas del receptor mineralocorticoide), metanefrinas plasmaticas libres o en orina de 24 horas para el feocromocitoma, cortisol libre urinario o supresion con dexametasona para el Cushing, eco-Doppler y luego angio-TC o angio-RM de arterias renales para la estenosis, polisomnografia para la apnea, y ecocardiograma o angio-TC para la coartacion.',
      laboratorio: 'Potasio, aldosterona y renina, metanefrinas, pruebas de cortisol, funcion renal y sedimento urinario, TSH y calcio.',
      imagen: 'Eco-Doppler renal, angio-TC o angio-RM de arterias renales y suprarrenales, y cateterismo de venas suprarrenales para lateralizar un hiperaldosteronismo antes de la cirugia.',
      complementarios: 'Derivacion a la unidad de hipertension o a endocrinologia para confirmar y tratar la causa; la correccion (suprarrenalectomia, angioplastia renal en casos seleccionados, CPAP, antagonista del receptor mineralocorticoide) puede normalizar o mejorar mucho la PA.',
      dx_diferencial: 'HTA esencial resistente por baja adherencia, ingesta oculta de sodio o farmacos presores; pseudohiperaldosteronismo por regaliz; HTA de bata blanca que simula resistencia.',
      tx_medico: 'Mientras se completa el estudio, controlar la PA con el esquema habitual; en la sospecha de hiperaldosteronismo, la espironolactona y la eplerenona son especialmente eficaces, pero se retiran antes de medir el cociente aldosterona/renina porque lo alteran.',
      tx_farmacologico: 'Dirigido a la causa una vez confirmada: antagonista del receptor mineralocorticoide en el hiperaldosteronismo no quirurgico, bloqueo alfa y luego beta antes de operar un feocromocitoma, entre otros.',
      tx_intervencionista: 'Suprarrenalectomia laparoscopica en el adenoma productor de aldosterona lateralizado o en el feocromocitoma; angioplastia con stent en la estenosis por displasia fibromuscular o en casos seleccionados de estenosis ateroesclerotica; reparacion de la coartacion.',
      criterios_uci: 'Solo si la causa se presenta como emergencia (crisis de feocromocitoma, edema agudo de pulmon por estenosis renal bilateral).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Segun el procedimiento realizado: vigilancia de PA y potasio tras la suprarrenalectomia, de la funcion renal tras la angioplastia renal.',
      seguimiento_ambulatorio: 'Tras corregir la causa, muchos pacientes siguen necesitando algun farmaco; control de PA, potasio y funcion renal, y vigilancia de recurrencia.',
      pronostico: 'Bueno cuando la causa se identifica y se trata pronto, sobre todo en pacientes jovenes y con HTA de poca evolucion; el retraso deja dano de organo y HTA residual.',
      algoritmo: ['Pista clinica de causa secundaria (inicio temprano o tardio, resistencia, hipopotasemia, paroxismos, soplo abdominal, apnea): sospechar HTA secundaria', 'Cribado dirigido: cociente aldosterona/renina, metanefrinas, pruebas de cortisol, eco-Doppler renal, polisomnografia', 'Confirmar con la prueba especifica e imagen; derivar a la unidad de hipertension o a endocrinologia', 'Tratar la causa (suprarrenalectomia, antagonista del receptor mineralocorticoide, CPAP, angioplastia, reparacion de coartacion)', 'Seguir controlando la PA y vigilar HTA residual y recurrencia']
    },
    {
      nombre: 'HTA resistente',
      color: '#6b4a2e',
      definicion: 'PA que permanece por encima del objetivo (140/90 mmHg o mayor en consultorio, o el equivalente fuera de consultorio) a pesar de 3 farmacos a dosis optimas o maximas toleradas, uno de ellos un diuretico, con adherencia confirmada y tras descartar HTA de bata blanca y causas secundarias. Es una evolucion de la HTA esencial (ver esa tarjeta) hacia formas mas dificiles de controlar. La HTA controlada con 4 o mas farmacos tambien se considera resistente.',
      fisiopatologia: 'Contribuyen la expansion de volumen por retencion de sodio, a menudo con un componente de exceso de aldosterona, la activacion simpatica, la rigidez arterial avanzada, la apnea del sueno y la enfermedad renal cronica; el exceso relativo de mineralocorticoide explica la eficacia de la espironolactona en este escenario (PATHWAY-2).',
      epidemiologia: 'Afecta a cerca del 10% de los hipertensos tratados; es mas frecuente con la edad, la obesidad, la diabetes, la enfermedad renal cronica y la raza negra, y conlleva un riesgo cardiovascular y renal mayor que la HTA controlada.',
      factores_riesgo: ['Obesidad y consumo alto de sodio', 'Enfermedad renal cronica y diabetes', 'Apnea obstructiva del sueno', 'Edad avanzada', 'Hiperaldosteronismo primario', 'Farmacos presores (AINE, corticoides, simpaticomimeticos, anticonceptivos) y baja adherencia (la causa mas frecuente de pseudorresistencia)'],
      clinica: 'La de la HTA no controlada, con mayor carga de dano de organo; buscar activamente ronquido y somnolencia (apnea), consumo de AINE u otros presores e ingesta de sal.',
      criterios_dx: 'Confirmar la resistencia con MAPA o AMPA (descarta bata blanca), verificar la adherencia (recuento de comprimidos, niveles, observacion de la toma), revisar la tecnica de medicion y las dosis, retirar sustancias presoras y cribar causas secundarias, en especial el hiperaldosteronismo primario (cociente aldosterona/renina) y la apnea del sueno.',
      laboratorio: 'Potasio, funcion renal, cociente aldosterona/renina y deteccion de farmacos presores; segun la sospecha, metanefrinas y pruebas de cortisol.',
      imagen: 'Ecocardiograma y ecografia renal para dano de organo; angio-TC o angio-RM de arterias renales si hay datos de HTA renovascular.',
      complementarios: 'Derivacion a una unidad de hipertension; polisomnografia si hay sintomas de apnea.',
      dx_diferencial: 'Pseudorresistencia por mala adherencia, manguito inadecuado, HTA de bata blanca, dosis o combinacion suboptimas y consumo de sustancias presoras; HTA secundaria no diagnosticada.',
      tx_medico: 'Optimizar el estilo de vida (restriccion estricta de sodio, perdida de peso, tratamiento de la apnea con CPAP), retirar los farmacos presores y asegurar la adherencia.',
      tx_farmacologico: 'Sobre la triple combinacion a dosis plenas (IECA o ARA-II mas calcioantagonista mas diuretico tipo tiazida), anadir espironolactona 25-50 mg como cuarto farmaco de eleccion si el filtrado glomerular es mayor de 45 y el potasio menor de 4.5 (PATHWAY-2); alternativas o pasos siguientes: eplerenona, betabloqueador o alfabloqueador, un diuretico del asa si el filtrado glomerular es bajo, y agentes de accion central. Vigilar el potasio y la funcion renal al anadir el antagonista del receptor mineralocorticoide.',
      tx_intervencionista: 'La denervacion renal por cateter es una opcion complementaria (IIb) en la HTA resistente verdadera no controlada pese al tratamiento optimizado, con decision compartida.',
      criterios_uci: 'No, salvo evolucion a emergencia hipertensiva.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma caracteristica.',
      seguimiento_ambulatorio: 'Control estrecho de PA con AMPA, y de potasio y funcion renal (sobre todo tras anadir espironolactona o un diuretico del asa); reevaluar la adherencia y el dano de organo; mantener el seguimiento en la unidad de hipertension.',
      pronostico: 'Peor que el de la HTA controlada, con mas ictus, insuficiencia cardiaca, enfermedad renal cronica y fibrilacion auricular; mejora al alcanzar el objetivo, y una parte importante de los casos etiquetados como resistentes se controla al corregir la adherencia, la sal o una causa secundaria.',
      algoritmo: ['PA por encima del objetivo con 3 farmacos a dosis optimas incluido un diuretico: confirmar con MAPA o AMPA', 'Verificar adherencia, tecnica y dosis; retirar AINE y otros presores; restringir sodio y tratar la apnea', 'Cribar causas secundarias, sobre todo hiperaldosteronismo primario (cociente aldosterona/renina)', 'Anadir espironolactona 25-50 mg como cuarto farmaco si el filtrado glomerular es mayor de 45 y el potasio menor de 4.5', 'Denervacion renal como opcion complementaria en la resistencia verdadera no controlada']
    },
    {
      nombre: 'Urgencia hipertensiva',
      color: '#8a6a1f',
      definicion: 'Elevacion marcada de la PA (habitualmente mayor de 180/120 mmHg) sin dano agudo de organo en curso. No es una verdadera emergencia: la PA se reduce de forma gradual con farmacos orales en horas o dias, sin necesidad de ingreso ni de tratamiento intravenoso.',
      fisiopatologia: 'Suele reflejar una HTA cronica mal controlada o una interrupcion del tratamiento, con reajuste al alza de la autorregulacion vascular; por eso un descenso brusco de la PA puede provocar hipoperfusion cerebral, coronaria o renal. La ausencia de dano agudo la distingue de la emergencia.',
      epidemiologia: 'Motivo de consulta muy frecuente en urgencias; la mayoria de los pacientes con PA muy elevada asintomatica no tienen dano agudo de organo y no se benefician de reducir la PA con rapidez.',
      factores_riesgo: ['HTA cronica mal controlada', 'Abandono o mala adherencia al tratamiento', 'Consumo de sodio, dolor, ansiedad o retencion urinaria', 'Consumo de simpaticomimeticos o cocaina', 'Sindrome de abstinencia (de clonidina o de alcohol)'],
      clinica: 'PA muy elevada con sintomas inespecificos o ausentes (cefalea leve, mareo, epistaxis, ansiedad); por definicion no hay focalidad neurologica, dolor toracico isquemico, disnea por edema pulmonar ni retinopatia grado III-IV. Una exploracion dirigida y pruebas basicas descartan dano agudo.',
      criterios_dx: 'PA muy elevada confirmada tras reposo, con exploracion neurologica y cardiopulmonar normales, fondo de ojo sin hemorragias, exudados ni edema de papila, electrocardiograma sin isquemia aguda, y creatinina y examen de orina sin deterioro agudo.',
      laboratorio: 'Creatinina y filtrado glomerular, electrolitos y examen de orina; troponina y peptido natriuretico solo si hay sintomas que sugieran dano cardiaco.',
      imagen: 'Radiografia de torax si hay disnea; TC craneal solo si hay sintomas neurologicos (en ese caso el cuadro ya es emergencia).',
      complementarios: 'Revisar el tratamiento habitual y las causas de descompensacion (adherencia, AINE, sal, dolor).',
      dx_diferencial: 'Emergencia hipertensiva (hay dano agudo de organo), HTA de bata blanca extrema, crisis de panico y elevacion transitoria por dolor o retencion urinaria.',
      tx_medico: 'Reposo en un ambiente tranquilo (una parte de los casos baja solo con esto), reanudar o intensificar el tratamiento oral habitual, tratar el factor desencadenante (analgesia, sondaje vesical) y organizar una revision ambulatoria en pocos dias. No se busca normalizar la PA en urgencias.',
      tx_farmacologico: 'Farmacos orales de accion no demasiado rapida: reinicio o aumento del tratamiento de base, o adicion de amlodipino, un IECA o ARA-II, o un diuretico tipo tiazida. Evitar el nifedipino sublingual de accion corta y el descenso brusco de la PA por el riesgo de isquemia.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No; el manejo es ambulatorio o en observacion breve.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Observacion breve para confirmar la tendencia descendente y la ausencia de dano de organo antes del alta.',
      seguimiento_ambulatorio: 'Revision en 3 a 7 dias para ajustar el tratamiento, reforzar la adherencia y el estilo de vida, y completar el estudio de dano de organo y de causa secundaria si procede.',
      pronostico: 'Bueno a corto plazo; el riesgo real es el de la HTA cronica mal controlada de fondo, por lo que la clave es asegurar el seguimiento y el control sostenido.',
      algoritmo: ['PA mayor de 180/120 mmHg sin sintomas de dano agudo: sospechar urgencia hipertensiva', 'Exploracion, fondo de ojo, electrocardiograma, creatinina y orina para descartar dano agudo (si lo hay, es emergencia)', 'Reposo; reanudar o intensificar el tratamiento oral; tratar el desencadenante', 'Reducir la PA de forma gradual en horas o dias; evitar el nifedipino sublingual', 'Revision ambulatoria en 3 a 7 dias y refuerzo de la adherencia']
    },
    {
      nombre: 'Emergencia hipertensiva',
      color: '#8c3a34',
      definicion: 'Elevacion grave de la PA (habitualmente mayor de 180/120 mmHg) acompanada de dano agudo de organo en curso: encefalopatia hipertensiva, ictus isquemico o hemorragico, edema agudo de pulmon, sindrome coronario agudo, diseccion aortica, lesion renal aguda, retinopatia grado III-IV, o eclampsia y preeclampsia grave. Requiere ingreso, monitorizacion y farmacos intravenosos.',
      fisiopatologia: 'Cuando la PA supera el limite superior de la autorregulacion, se pierde la vasoconstriccion protectora y hay hiperperfusion, edema y necrosis fibrinoide de las arteriolas, con isquemia y hemorragia en el cerebro (encefalopatia, sindrome de leucoencefalopatia posterior), el rinon (necrosis fibrinoide, microangiopatia trombotica) y la retina. En la diseccion y el edema pulmonar predomina el aumento brusco de la poscarga.',
      epidemiologia: 'Una minoria de las crisis hipertensivas; mas frecuente en pacientes con HTA cronica no controlada o no tratada, consumo de cocaina o anfetaminas, enfermedad renal, y en el embarazo.',
      factores_riesgo: ['HTA cronica no controlada o no tratada', 'Abandono brusco del tratamiento (clonidina)', 'Consumo de simpaticomimeticos o cocaina', 'Enfermedad renal, feocromocitoma, glomerulonefritis aguda o esclerodermia', 'Embarazo (preeclampsia grave y eclampsia)'],
      clinica: 'Segun el organo: cefalea intensa, confusion, convulsiones y alteracion visual (encefalopatia); focalidad neurologica (ictus); disnea y ortopnea (edema pulmonar); dolor toracico (sindrome coronario o diseccion); oliguria (lesion renal); crisis convulsiva en el tercer trimestre o posparto (eclampsia). En el fondo de ojo, hemorragias, exudados y edema de papila.',
      criterios_dx: 'PA gravemente elevada mas evidencia objetiva de dano agudo: focalidad con TC o RM craneal (ictus, edema), troponina y electrocardiograma (sindrome coronario), clinica y radiografia de edema pulmonar, angio-TC (diseccion), elevacion aguda de creatinina con hematuria y proteinuria (lesion renal), fondo de ojo grado III-IV, y proteinuria con clinica en la gestante.',
      laboratorio: 'Hemograma con frotis (esquistocitos en la microangiopatia), creatinina, electrolitos, examen de orina, troponina, peptido natriuretico, lactato-deshidrogenasa y haptoglobina, y prueba de embarazo en mujeres en edad fertil.',
      imagen: 'TC o RM craneal, radiografia de torax, angio-TC de aorta si se sospecha diseccion, y ecocardiograma.',
      complementarios: 'Fondo de ojo, electrocardiograma seriado y monitorizacion invasiva de la PA (linea arterial) durante el tratamiento intravenoso.',
      dx_diferencial: 'Urgencia hipertensiva (sin dano agudo) y cuadros que elevan la PA de forma secundaria (ictus con respuesta hipertensiva, dolor, ansiedad); distinguir la encefalopatia hipertensiva del ictus por su caracter difuso y reversible con el descenso de la PA.',
      tx_medico: 'Ingreso en cuidados intensivos con linea arterial. Objetivo general: reducir la PA media un 20 a 25% en la primera hora, luego a 160/100-110 mmHg en las siguientes 2 a 6 horas y a cifras normales en 24 a 48 horas, evitando descensos bruscos. Excepciones: diseccion aortica (PA sistolica menor de 120 mmHg y frecuencia cardiaca menor de 60 en 20 minutos), ictus isquemico (permisivo: tratar solo si es mayor de 220/120, o mayor de 185/110 si se va a trombolizar, con descenso de alrededor del 15%), hemorragia intracerebral (PA sistolica en torno a 130-140 mmHg), y eclampsia o preeclampsia grave (menor de 160/110 con sulfato de magnesio y finalizacion del embarazo).',
      tx_farmacologico: 'Farmacos intravenosos titulables: nicardipino o clevidipino (de eleccion en la mayoria de los escenarios, incluidas la encefalopatia y el ictus), labetalol o esmolol (utiles en la diseccion junto con un vasodilatador, y en el embarazo), nitroglicerina (sindrome coronario y edema agudo de pulmon), nitroprusiato de sodio (potente pero con riesgo de toxicidad por cianuro, uso limitado), hidralazina (eclampsia), y fentolamina o fenoldopam en el exceso de catecolaminas. Iniciar el tratamiento oral cuando la PA se estabilice.',
      tx_intervencionista: 'Segun la causa del dano de organo: revascularizacion coronaria, cirugia o TEVAR en la diseccion, finalizacion del embarazo en la eclampsia.',
      criterios_uci: 'Todas las emergencias hipertensivas, para monitorizacion invasiva de la PA y titulacion de farmacos intravenosos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Paso a farmacos orales al estabilizar la PA, estudio de dano de organo y de causa secundaria (frecuente en este contexto: hiperaldosteronismo, estenosis renal, feocromocitoma) y educacion sobre la adherencia.',
      seguimiento_ambulatorio: 'Revision precoz (1 a 2 semanas) con AMPA, ajuste del tratamiento hacia el objetivo, y vigilancia de la recuperacion del dano de organo (funcion renal, retinopatia, funcion ventricular).',
      pronostico: 'Historicamente grave (la HTA maligna no tratada tenia una supervivencia a 1 ano muy baja); con tratamiento moderno la mayoria se recupera, aunque una parte queda con enfermedad renal cronica o secuelas neurologicas. El pronostico a largo plazo depende del control sostenido posterior.',
      algoritmo: ['PA gravemente elevada (mayor de 180/120) con datos de dano agudo de organo: emergencia hipertensiva', 'Ingreso en cuidados intensivos con linea arterial; identificar el organo afectado', 'Reducir la PA media un 20 a 25% en la primera hora con farmacos intravenosos titulables (nicardipino, labetalol)', 'Aplicar los objetivos especificos: diseccion (sistolica menor de 120), ictus (permisivo), hemorragia intracerebral (130-140), eclampsia (menor de 160/110 con magnesio)', 'Pasar a tratamiento oral al estabilizar y estudiar la causa secundaria y el dano de organo']
    },
    {
      nombre: 'Cardiopatia hipertensiva',
      color: '#7a4363',
      definicion: 'Conjunto de alteraciones cardiacas causadas por la HTA (ver HTA esencial): hipertrofia ventricular izquierda, disfuncion diastolica que evoluciona a insuficiencia cardiaca con fraccion de eyeccion preservada y luego reducida, dilatacion auricular con fibrilacion auricular, y mayor riesgo de enfermedad coronaria.',
      fisiopatologia: 'Sobre el mecanismo ya descrito en HTA esencial, la sobrecarga cronica de presion induce hipertrofia concentrica de los miocitos y fibrosis intersticial; el ventriculo se vuelve rigido (disfuncion diastolica) y la auricula izquierda se dilata y fibrila; con el tiempo, la isquemia microvascular y la fibrosis llevan a dilatacion y caida de la fraccion de eyeccion. La HTA es tambien un factor de riesgo mayor de aterosclerosis coronaria.',
      epidemiologia: 'La hipertrofia ventricular izquierda aparece en una proporcion alta de los hipertensos de larga evolucion y es un predictor independiente de eventos; la HTA es la principal causa atribuible de insuficiencia cardiaca con fraccion de eyeccion preservada y un gran contribuyente a la fibrilacion auricular.',
      factores_riesgo: ['HTA de larga evolucion y mal controlada', 'PA sistolica alta', 'Obesidad, diabetes y enfermedad renal cronica', 'Edad avanzada', 'Sexo femenino para la fraccion de eyeccion preservada'],
      clinica: 'Asintomatica al principio; luego disnea de esfuerzo y ortopnea (insuficiencia cardiaca), palpitaciones e ictus embolico (fibrilacion auricular), y angina. En la exploracion, cuarto ruido, punta sostenida y desplazada, y signos congestivos en fases avanzadas.',
      criterios_dx: 'Electrocardiograma (Sokolow-Lyon mayor de 35 mm, producto de Cornell mayor de 2440 mm x ms) como cribado; ecocardiograma para el indice de masa ventricular izquierda, el grosor parietal relativo, la funcion diastolica y el volumen auricular izquierdo; resonancia cardiaca si se necesita caracterizar el tejido o descartar otras miocardiopatias.',
      laboratorio: 'Peptido natriuretico (BNP o NT-proBNP) ante disnea; funcion renal y electrolitos para el tratamiento.',
      imagen: 'Ecocardiograma transtoracico; resonancia magnetica cardiaca en casos seleccionados (grosor asimetrico, sospecha de infiltracion).',
      complementarios: 'Monitorizacion electrocardiografica prolongada si se sospecha fibrilacion auricular paroxistica; valoracion de la enfermedad coronaria segun los sintomas.',
      dx_diferencial: 'Miocardiopatia hipertrofica (hipertrofia desproporcionada a la carga, patron familiar), miocardiopatias infiltrativas como la amiloidosis, y estenosis aortica, que tambien producen hipertrofia.',
      tx_medico: 'Control estricto de la PA, que produce regresion de la hipertrofia (mayor con IECA, ARA-II y calcioantagonistas); tratamiento de la insuficiencia cardiaca segun la fraccion de eyeccion (incluidos los inhibidores de SGLT2 en la preservada y en la reducida) y anticoagulacion de la fibrilacion auricular segun el CHA2DS2-VASc.',
      tx_farmacologico: 'IECA o ARA-II y calcioantagonista para el control de la PA y la regresion de la hipertrofia; betabloqueador si hay fibrilacion auricular, cardiopatia isquemica o insuficiencia cardiaca con fraccion reducida; antagonista del receptor mineralocorticoide en la insuficiencia cardiaca y en la HTA resistente asociada; inhibidor de SGLT2.',
      tx_intervencionista: 'Segun la complicacion: ablacion o control de frecuencia en la fibrilacion auricular, revascularizacion coronaria, dispositivos en la insuficiencia cardiaca avanzada.',
      criterios_uci: 'Insuficiencia cardiaca aguda grave o arritmia con inestabilidad.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Optimizacion del control de la PA y del tratamiento de la insuficiencia cardiaca, y anticoagulacion de la fibrilacion auricular antes del alta.',
      seguimiento_ambulatorio: 'Ecocardiograma de control para valorar la regresion de la hipertrofia y la funcion; seguimiento de la insuficiencia cardiaca y de la fibrilacion auricular; refuerzo del control de la PA y de la adherencia.',
      pronostico: 'La regresion de la hipertrofia con el control de la PA se asocia a menos eventos; la insuficiencia cardiaca y la fibrilacion auricular establecidas empeoran el pronostico, pero el control tensional sigue mejorando la evolucion.',
      algoritmo: ['HTA de larga evolucion con disnea, palpitaciones o cambios en el electrocardiograma: sospechar cardiopatia hipertensiva', 'Electrocardiograma y ecocardiograma para hipertrofia, funcion diastolica y sistolica y tamano auricular', 'Control estricto de la PA con IECA o ARA-II y calcioantagonista para inducir regresion de la hipertrofia', 'Tratar la insuficiencia cardiaca segun la fraccion de eyeccion (incluido inhibidor de SGLT2) y anticoagular la fibrilacion auricular', 'Ecocardiograma de control y seguimiento de la arritmia y de la insuficiencia cardiaca']
    },
    {
      nombre: 'Enfermedad renal cronica hipertensiva y nefroangioesclerosis',
      color: '#3f6b52',
      definicion: 'Dano renal cronico atribuible a la HTA (ver HTA esencial): nefroangioesclerosis (hialinosis arteriolar, glomerulosclerosis y atrofia tubular) con descenso lento del filtrado glomerular y proteinuria habitualmente leve. Es la segunda causa de enfermedad renal cronica terminal tras la diabetes. En la emergencia hipertensiva se produce la forma acelerada, con necrosis fibrinoide.',
      fisiopatologia: 'La transmision de la presion elevada al lecho glomerular y el remodelado de las arteriolas preglomerulares producen isquemia, hialinosis y esclerosis progresiva; la perdida de autorregulacion en la HTA grave lleva a necrosis fibrinoide y microangiopatia trombotica. La proteinuria y la activacion del sistema renina-angiotensina intrarrenal aceleran la fibrosis.',
      epidemiologia: 'Causa muy frecuente de enfermedad renal cronica y de inicio de dialisis, con mayor incidencia en personas de raza negra (asociada a variantes de riesgo del gen APOL1) y en la HTA de larga evolucion mal controlada.',
      factores_riesgo: ['HTA mal controlada y de larga evolucion', 'PA sistolica alta', 'Raza negra', 'Proteinuria', 'Diabetes concomitante y episodios de HTA grave o maligna'],
      clinica: 'Asintomatica hasta fases avanzadas; se detecta por elevacion de la creatinina, descenso del filtrado glomerular y albuminuria en un hipertenso de larga evolucion, a menudo con otros datos de dano de organo (hipertrofia ventricular, retinopatia).',
      criterios_dx: 'Diagnostico de exclusion: HTA de larga evolucion, descenso lento del filtrado glomerular, proteinuria por debajo del rango nefrotico, sedimento urinario poco activo, rinones de tamano reducido y simetrico, y ausencia de otra causa (diabetes, glomerulonefritis, enfermedad renovascular). La biopsia rara vez es necesaria.',
      laboratorio: 'Creatinina y filtrado glomerular (CKD-EPI, calculadora en la seccion general), cociente albumina/creatinina o proteina/creatinina, sedimento urinario, potasio y bicarbonato; frotis y marcadores de hemolisis si se sospecha la forma maligna.',
      imagen: 'Ecografia renal (rinones pequenos y ecogenicos, simetricos); eco-Doppler o angio-TC de arterias renales para descartar estenosis si hay asimetria o deterioro con IECA o ARA-II.',
      complementarios: 'Fondo de ojo (la retinopatia apoya el origen hipertensivo del dano renal); valoracion por nefrologia cuando el filtrado glomerular es menor de 30 o la albuminuria es intensa.',
      dx_diferencial: 'Nefropatia diabetica (retinopatia diabetica, evolucion conocida), enfermedad renovascular (asimetria renal, deterioro con el bloqueo del sistema renina-angiotensina, edema pulmonar subito), glomerulonefritis (sedimento activo, proteinuria nefrotica) y enfermedad renal poliquistica.',
      tx_medico: 'Control estricto de la PA con objetivo menor de 130/80 mmHg (KDIGO sugiere una sistolica menor de 120 con medicion estandarizada en pacientes seleccionados que la toleren); restriccion de sodio, y control de la diabetes y de los lipidos.',
      tx_farmacologico: 'IECA o ARA-II como farmaco de eleccion cuando hay albuminuria (reducen la proteinuria y frenan la progresion), vigilando el potasio y una subida inicial aceptable de la creatinina; inhibidor de SGLT2 para nefroproteccion; diuretico (tiazida, y del asa si el filtrado glomerular es bajo); antagonista del receptor mineralocorticoide o finerenona en casos seleccionados.',
      tx_intervencionista: 'Preparacion para terapia renal sustitutiva (acceso vascular, dialisis, trasplante) en la enfermedad renal cronica terminal; revascularizacion renal solo en indicaciones concretas de estenosis.',
      criterios_uci: 'La forma maligna con lesion renal aguda grave y microangiopatia puede requerir cuidados intensivos y, a veces, dialisis transitoria.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En la forma maligna, control de la PA con descenso controlado, vigilancia de la funcion renal (puede empeorar antes de mejorar) y de la hemolisis.',
      seguimiento_ambulatorio: 'Control periodico de PA, filtrado glomerular, potasio y albuminuria; ajuste de farmacos segun la funcion renal; vacunacion y preparacion para dialisis o trasplante si progresa.',
      pronostico: 'La progresion es lenta con buen control de la PA y bloqueo del sistema renina-angiotensina; la forma maligna puede recuperar parte de la funcion renal tras meses de control estricto, aunque una proporcion queda en dialisis.',
      algoritmo: ['Hipertenso de larga evolucion con creatinina elevada, filtrado glomerular bajo y albuminuria: sospechar nefroangioesclerosis', 'Confirmar por exclusion (sedimento poco activo, proteinuria no nefrotica, rinones pequenos simetricos, sin otra causa)', 'Objetivo de PA menor de 130/80; restriccion de sodio', 'IECA o ARA-II si hay albuminuria, mas inhibidor de SGLT2; vigilar potasio y creatinina', 'Seguimiento del filtrado glomerular y de la albuminuria; preparar terapia renal sustitutiva si progresa']
    },
    {
      nombre: 'Enfermedad cerebrovascular, retinopatia y deterioro cognitivo',
      color: '#6b3a5a',
      definicion: 'Dano del cerebro y de la retina mediado por la HTA (ver HTA esencial): ictus isquemico y hemorragico, enfermedad de pequeno vaso cerebral con deterioro cognitivo vascular y demencia, y retinopatia hipertensiva. La HTA es el principal factor de riesgo modificable de ictus.',
      fisiopatologia: `La HTA acelera la aterosclerosis de grandes arterias y, sobre todo, la arteriolosclerosis y la lipohialinosis de las pequenas arterias perforantes, que causan infartos lacunares, hemorragias profundas (ganglios basales, talamo, protuberancia), lesiones de la sustancia blanca y microsangrados; el resultado es deterioro cognitivo vascular y contribucion a la demencia mixta. En la retina, el mismo proceso produce estrechamiento arteriolar, cruces arteriovenosos, hemorragias, exudados y, en la forma grave, edema de papila.${figBlock('Figura 4', 'Retinopatia hipertensiva (Keith-Wagener-Barker)', retinopatiaHtml)}`,
      epidemiologia: 'La HTA explica una fraccion muy alta del riesgo atribuible poblacional de ictus, y su control es la intervencion mas eficaz para prevenirlo. La retinopatia hipertensiva leve es frecuente en los hipertensos; los grados III-IV son marcadores de dano grave de organo.',
      factores_riesgo: ['PA sistolica alta y mal controlada', 'Edad avanzada', 'Tabaquismo y diabetes', 'Fibrilacion auricular (para el ictus embolico)', 'HTA de larga evolucion (para la enfermedad de pequeno vaso)'],
      clinica: 'Focalidad neurologica de instauracion brusca (ictus); deterioro cognitivo de perfil subcortical (enlentecimiento, disfuncion ejecutiva, alteracion de la marcha) que progresa a demencia; retinopatia habitualmente asintomatica salvo en la forma grave (vision borrosa, escotomas). El fondo de ojo se clasifica por Keith-Wagener-Barker (ver Figura 4).',
      criterios_dx: 'TC o RM craneal para el ictus y para la carga de enfermedad de pequeno vaso (lacunas, hiperintensidades de sustancia blanca, microsangrados); evaluacion cognitiva (por ejemplo con el MoCA) con criterios de deterioro cognitivo vascular; fondo de ojo para la retinopatia.',
      laboratorio: 'El habitual del hipertenso; en el ictus, el estudio etiologico correspondiente.',
      imagen: 'RM craneal (mas sensible que la TC para la enfermedad de pequeno vaso); retinografia o fondo de ojo directo.',
      complementarios: 'Monitorizacion para fibrilacion auricular tras un ictus; valoracion neuropsicologica en el deterioro cognitivo.',
      dx_diferencial: 'Enfermedad de Alzheimer (a menudo coexiste: demencia mixta), otras causas de ictus (cardioembolia, aterosclerosis de gran vaso), y retinopatia diabetica o por otras causas (anemia, vasculitis) en el fondo de ojo.',
      tx_medico: 'El control de la PA es la medida que mas reduce el riesgo de ictus (el desenlace mas sensible a la reduccion de la PA) y, segun SPRINT MIND, disminuye el deterioro cognitivo leve; en la fase aguda del ictus se aplican los objetivos especificos de PA (ver Emergencia hipertensiva). Control del resto de factores de riesgo vascular.',
      tx_farmacologico: 'Cualquier combinacion que logre el objetivo reduce el ictus; los calcioantagonistas tienen un efecto algo mayor sobre el ictus, y los IECA o ARA-II aportan proteccion adicional en la diabetes y la enfermedad renal. Anticoagulacion si hay fibrilacion auricular. Estatina y antiagregacion segun la indicacion tras un ictus isquemico.',
      tx_intervencionista: 'Segun el ictus: trombolisis, trombectomia, cirugia de la hemorragia en casos seleccionados. No hay intervencion especifica para el deterioro cognitivo vascular mas alla del control de los factores de riesgo.',
      criterios_uci: 'Ictus grave o con necesidad de tratamiento de reperfusion o de monitorizacion neurologica estrecha.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En el ictus, control de la PA segun la fase y la estrategia de reperfusion, y prevencion secundaria antes del alta.',
      seguimiento_ambulatorio: 'Control sostenido de la PA con objetivo individualizado, rehabilitacion, seguimiento cognitivo y de la marcha, y fondo de ojo periodico en la retinopatia; la mejoria de la retinopatia acompana al buen control tensional.',
      pronostico: 'El control de la PA previene una gran parte de los ictus y enlentece el deterioro cognitivo vascular; una vez establecidos el ictus o la demencia, el control sigue reduciendo la recurrencia y la progresion. La retinopatia grado III-IV se asocia a mayor mortalidad cardiovascular.',
      algoritmo: ['Hipertenso con focalidad brusca, deterioro cognitivo subcortical o cambios en el fondo de ojo: pensar en dano cerebral y retiniano por HTA', 'RM craneal para ictus y enfermedad de pequeno vaso; evaluacion cognitiva; fondo de ojo con clasificacion de Keith-Wagener-Barker', 'Control sostenido de la PA como principal medida preventiva del ictus y del deterioro cognitivo', 'Anticoagular si hay fibrilacion auricular; prevencion secundaria tras un ictus isquemico', 'Seguimiento cognitivo, de la marcha y del fondo de ojo; el buen control mejora la retinopatia']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La HTA se maneja casi siempre de forma ambulatoria; el ingreso corresponde a la emergencia hipertensiva o a la descompensacion de un dano de organo. El seguimiento intrahospitalario se centra en reducir la PA de forma controlada segun el escenario, pasar a tratamiento oral, estudiar una causa secundaria (frecuente en este contexto) y el dano de organo, y asegurar un plan de seguimiento con buena adherencia.',
    parametros: ['PA con linea arterial durante el tratamiento intravenoso y objetivo por escenario (descenso del 20 a 25% en la primera hora salvo excepciones)', 'Funcion renal, electrolitos y diuresis (pueden empeorar de forma transitoria al bajar la PA)', 'Exploracion neurologica y datos de dano de organo seriados (fondo de ojo, electrocardiograma, troponina, peptido natriuretico segun el caso)', 'Transicion a farmacos orales al estabilizar la PA con solapamiento adecuado', 'Cribado de causa secundaria antes del alta (cociente aldosterona/renina en condiciones adecuadas, metanefrinas, eco-Doppler renal) y educacion sobre la adherencia'],
    criterios_uci_general: 'Toda emergencia hipertensiva, para monitorizacion invasiva de la PA y titulacion de farmacos intravenosos; tambien la insuficiencia cardiaca aguda, el ictus con reperfusion o la eclampsia asociadas.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa, salvo la enfermedad renal cronica terminal por nefroangioesclerosis, que sigue la via de trasplante renal.',
    prevencion: 'Primaria: reduccion poblacional del consumo de sal y sustitucion por sal con potasio, dieta rica en frutas y verduras, mantenimiento de un peso saludable, actividad fisica, moderacion del alcohol y no fumar, desde edades tempranas (prevencion primordial). Deteccion: medir la PA a todos los adultos en cada contacto sanitario y al menos una vez al ano, y cada 3 a 5 anos en el adulto joven con PA optima. Secundaria: control sostenido de la PA hasta el objetivo con tratamiento combinado en un solo comprimido y seguimiento estructurado, que previene la mayor parte del dano de organo y de los eventos.'
  }
};

export const compCites = {
  'HTA esencial (primaria)': [1, 2, 6, 21],
  'HTA secundaria (sospecha y cribado)': [10, 20, 1],
  'HTA resistente': [9, 1, 3],
  'Urgencia hipertensiva': [13, 1],
  'Emergencia hipertensiva': [14, 13, 1],
  'Cardiopatia hipertensiva': [1, 16, 6],
  'Enfermedad renal cronica hipertensiva y nefroangioesclerosis': [12, 1],
  'Enfermedad cerebrovascular, retinopatia y deterioro cognitivo': [17, 5, 19]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Categorias de PA (ESC 2024)': [1],
  'Categorias de PA (ACC/AHA 2025)': [2],
  'SCORE2 y SCORE2-OP': [7, 8],
  'Retinopatia hipertensiva de Keith-Wagener-Barker': [19]
};
export const escalaCalc = {
  'SCORE2 y SCORE2-OP': 'score2',
  'Categorias de PA (ESC 2024)': 'clasificacion-pa'
};
export const compGroups = [
  { name: 'Entidades', items: ['HTA esencial (primaria)', 'HTA secundaria (sospecha y cribado)', 'HTA resistente', 'Urgencia hipertensiva', 'Emergencia hipertensiva'] },
  { name: 'Dano de organo mediado por HTA', items: ['Cardiopatia hipertensiva', 'Enfermedad renal cronica hipertensiva y nefroangioesclerosis', 'Enfermedad cerebrovascular, retinopatia y deterioro cognitivo'] }
];
export const complicacionesIntro = 'Las primeras 5 fichas son las entidades del tema: HTA esencial (la forma primaria, cerca del 90%), HTA secundaria (sospecha y cribado; se desarrolla como tema propio), HTA resistente, y las dos formas de crisis hipertensiva (urgencia, sin dano agudo de organo; emergencia, con dano agudo en curso). Las 3 ultimas son el dano de organo mediado por la HTA que determina el pronostico: cardiopatia hipertensiva, enfermedad renal cronica y nefroangioesclerosis, y enfermedad cerebrovascular con retinopatia y deterioro cognitivo.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificacion' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'HIPERTENSION ARTERIAL', color: '#8a2f43', target: 'definicion' },
  branches: [
    { title: 'Entidades', sub: 'Formas de HTA y crisis', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'HTA esencial', sub: 'Primaria, cerca del 90%', color: '#8a2f43', target: 'complicaciones' },
      { title: 'HTA secundaria', sub: 'Causa identificable; tema propio', color: '#3d5a73', target: 'complicaciones' },
      { title: 'HTA resistente', sub: 'PA alta pese a 3 farmacos', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Urgencia hipertensiva', sub: 'Sin dano agudo de organo', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Emergencia hipertensiva', sub: 'Con dano agudo en curso', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Dano de organo', sub: 'Determina el pronostico', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Cardiopatia hipertensiva', sub: 'Hipertrofia, insuficiencia cardiaca, fibrilacion auricular', color: '#7a4363', target: 'complicaciones' },
      { title: 'ERC y nefroangioesclerosis', sub: '2a causa de enfermedad renal terminal', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Cerebro y retina', sub: 'Ictus, deterioro cognitivo, retinopatia', color: '#6b3a5a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [1, 3], imagen: [1] };
export const clasificacionCite = [1, 2, 7];
export const seguimientoCite = [1, 2];
