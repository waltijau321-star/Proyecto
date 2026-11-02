// topics/enfermedad-arterial-periferica/content.js: Enfermedad Arterial Periferica (EAP).
// Cubre el item "Enfermedad arterial periferica" del bloque II (Sistema Cardiovascular) del
// temario, a peticion explicita del usuario.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas (compCites, escalaRefs, escalaCalc, compGroups, complicacionesIntro, categories, arbol,
// diagCites, clasificacionCite, seguimientoCite, estigmas, biopsia) es un `export const` de nivel
// superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): cada pregunta se escribio primero con la
// respuesta correcta en options[0]/correct:0, se verifico el conteo, y solo entonces se
// redistribuyo mecanicamente la posicion de `correct` con un script.
//
// Estructura (decision explicita del usuario): 4 formas clinicas (EAP asintomatica, claudicacion
// intermitente, isquemia cronica que amenaza la extremidad, isquemia arterial aguda) + 4
// complicaciones transversales (amputacion mayor, lesion por reperfusion y sindrome
// compartimental, eventos cardiovasculares mayores, ulcera isquemica infectada). 3 calculadoras
// (ITB, WIfI, Rutherford de isquemia aguda). 3 figuras SVG a mano (tecnica/cortes del ITB, tabla
// Fontaine-Rutherford-conducta, las 6 P + Rutherford de la isquemia aguda). Sin em dash en todo
// el archivo (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'enfermedad-arterial-periferica',
  titulo: 'Enfermedad Arterial Periférica',
  subtitulo: 'Módulo 34 · Medicina Interna',
  accent: '#6e3b2e',
  accentDim: '#b0897c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const itbHtml = `
<div style="display:flex;flex-direction:column;gap:12px;max-width:560px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="display:flex;gap:16px;align-items:center;justify-content:center;flex-wrap:wrap;">
    <svg viewBox="0 0 140 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="itb-fig-t itb-fig-d" style="width:130px;height:176px;">
      <title id="itb-fig-t">Medición del índice tobillo-brazo</title>
      <desc id="itb-fig-d">Esquema de un paciente en decúbito con manguito y Doppler en ambos brazos sobre las arterias braquiales y en ambos tobillos sobre las arterias pedia y tibial posterior. El índice de cada pierna es la presión sistólica de tobillo más alta de esa pierna dividida entre la presión braquial más alta de los dos brazos.</desc>
      <rect x="58" y="30" width="24" height="70" rx="10" fill="var(--panel2)" stroke="var(--line)"/>
      <circle cx="70" cy="18" r="10" fill="var(--panel2)" stroke="var(--line)"/>
      <path d="M58 40 Q40 55 38 85" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <path d="M82 40 Q100 55 102 85" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <path d="M63 100 Q58 140 56 172" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <path d="M77 100 Q82 140 84 172" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      <rect x="30" y="70" width="16" height="12" rx="2" fill="#3d5a73" opacity="0.85"/>
      <rect x="94" y="70" width="16" height="12" rx="2" fill="#3d5a73" opacity="0.85"/>
      <rect x="47" y="150" width="16" height="12" rx="2" fill="#8c3a34" opacity="0.85"/>
      <rect x="76" y="150" width="16" height="12" rx="2" fill="#8c3a34" opacity="0.85"/>
      <text x="70" y="58" text-anchor="middle" fill="var(--ink-dim)" font-size="8">braquial</text>
      <text x="70" y="122" text-anchor="middle" fill="var(--ink-dim)" font-size="8">pedia y</text>
      <text x="70" y="132" text-anchor="middle" fill="var(--ink-dim)" font-size="8">tibial post.</text>
    </svg>
    <div style="min-width:220px;flex:1;">
      <div style="background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:8px 10px;text-align:center;">
        <div style="font-weight:700;color:var(--accent-fg);">ITB de la pierna</div>
        <div style="margin-top:4px;border-bottom:1px solid var(--ink);padding-bottom:3px;">PA sistólica de tobillo más alta de esa pierna</div>
        <div style="padding-top:3px;">PA sistólica braquial más alta de ambos brazos</div>
      </div>
      <div style="margin-top:6px;color:var(--ink-dim);">ITB limítrofe (0.91 a 0.99): repetir con ITB de ejercicio. ITB mayor de 1.40 (arterias no compresibles): usar el índice dedo-brazo, anormal si es menor de 0.70.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:3px;text-align:center;font-size:9.5px;">
    <div style="background:#8c3a34;color:#fff;border-radius:6px 0 0 6px;padding:5px 3px;">menor o igual a 0.40<br><span style="opacity:.85;">isquemia grave</span></div>
    <div style="background:#b0673f;color:#fff;padding:5px 3px;">0.41 a 0.90<br><span style="opacity:.85;">EAP</span></div>
    <div style="background:#8a6a1f;color:#fff;padding:5px 3px;">0.91 a 0.99<br><span style="opacity:.85;">limítrofe</span></div>
    <div style="background:#3f6b52;color:#fff;padding:5px 3px;">1.00 a 1.40<br><span style="opacity:.85;">normal</span></div>
    <div style="background:#5a5f6b;color:#fff;border-radius:0 6px 6px 0;padding:5px 3px;">mayor de 1.40<br><span style="opacity:.85;">no compresible</span></div>
  </div>
</div>`;

const fontaineRutherfordHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);overflow-x:auto;">
  <div style="display:grid;grid-template-columns:1.1fr 1fr 1.7fr;gap:3px;min-width:470px;">
    <div style="font-weight:700;background:var(--panel2);padding:5px 7px;border-radius:6px 0 0 0;">Fontaine</div>
    <div style="font-weight:700;background:var(--panel2);padding:5px 7px;">Rutherford</div>
    <div style="font-weight:700;background:var(--panel2);padding:5px 7px;border-radius:0 6px 0 0;">Conducta</div>

    <div style="padding:5px 7px;border:1px solid var(--line);">I: asintomática</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Grado 0, categoría 0</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Control de factores de riesgo, estatina de alta intensidad, antiagregante. Sin revascularización.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);">IIa: claudicación no incapacitante</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Grado I, categoría 1</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Lo anterior más ejercicio supervisado y cilostazol.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);">IIb: claudicación incapacitante</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Grado I, categorías 2 y 3</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Lo anterior más revascularización si limita el estilo de vida y falla el tratamiento conservador.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3418;">III: dolor isquémico de reposo</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3418;">Grado II, categoría 4</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3418;">Isquemia que amenaza la extremidad: revascularización.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3430;border-radius:0 0 0 6px;">IV: úlcera o gangrena</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3430;">Grado III, categorías 5 y 6</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3430;border-radius:0 0 6px 0;">Revascularización urgente más cuidado de la herida y control de la infección.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Las dos escalas son equivalentes; los estadios Fontaine III y IV y las categorías Rutherford 4 a 6 definen la isquemia crónica que amenaza la extremidad.</div>
</div>`;

const isquemiaAgudaHtml = `
<div style="display:flex;gap:14px;flex-wrap:wrap;max-width:580px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="flex:1;min-width:170px;">
    <div style="font-weight:700;color:var(--accent-fg);margin-bottom:4px;">Las 6 "P"</div>
    <ul style="margin:0;padding-left:16px;line-height:1.85;">
      <li><strong>Pain</strong>: dolor</li>
      <li><strong>Pallor</strong>: palidez</li>
      <li><strong>Pulselessness</strong>: ausencia de pulso</li>
      <li><strong>Paresthesia</strong>: parestesias</li>
      <li><strong>Poikilothermia</strong>: frialdad</li>
      <li><strong>Paralysis</strong>: parálisis (tardía y ominosa)</li>
    </ul>
  </div>
  <div style="flex:1.5;min-width:240px;">
    <div style="font-weight:700;color:var(--accent-fg);margin-bottom:4px;">Rutherford de la isquemia arterial aguda</div>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:2px;">
      <div style="background:#3f6b52;color:#fff;padding:4px 6px;border-radius:5px 0 0 0;font-weight:700;">I</div>
      <div style="border:1px solid var(--line);padding:4px 6px;border-radius:0 5px 0 0;">Viable. Sensibilidad y fuerza conservadas; Doppler arterial y venoso audibles. Anticoagular, estudiar, revascularización programada-urgente.</div>
      <div style="background:#8a6a1f;color:#fff;padding:4px 6px;font-weight:700;">IIa</div>
      <div style="border:1px solid var(--line);padding:4px 6px;">Marginalmente amenazada. Pérdida sensitiva mínima en los dedos o nula, sin debilidad; arterial a menudo inaudible, venoso audible. Trombólisis dirigida por catéter o trombectomía.</div>
      <div style="background:#b0673f;color:#fff;padding:4px 6px;font-weight:700;">IIb</div>
      <div style="border:1px solid var(--line);padding:4px 6px;">Inmediatamente amenazada. Pérdida sensitiva más allá de los dedos con dolor de reposo, debilidad leve o moderada; arterial inaudible, venoso audible. Revascularización quirúrgica urgente, sin demora por la imagen.</div>
      <div style="background:#8c3a34;color:#fff;padding:4px 6px;border-radius:0 0 0 5px;font-weight:700;">III</div>
      <div style="border:1px solid var(--line);padding:4px 6px;border-radius:0 0 5px 0;">Irreversible. Anestesia y parálisis con rigidez; arterial y venoso inaudibles. Amputación primaria.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La enfermedad arterial periférica (EAP) es la enfermedad aterosclerótica oclusiva de las arterias que irrigan las extremidades, casi siempre las inferiores, fuera de los lechos coronario e intracraneal. El criterio diagnóstico operativo es un índice tobillo-brazo (ITB) en reposo menor o igual a 0.90. Es a la vez un problema de la extremidad, que abarca desde la forma asintomática hasta la amputación, y sobre todo un marcador potente de aterosclerosis sistémica y de riesgo de infarto de miocardio, ictus y muerte cardiovascular.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El espectro clínico, en orden de gravedad.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>EAP asintomática</strong>: la forma más frecuente; ITB bajo sin síntomas de esfuerzo limitantes, pero con el mismo exceso de riesgo cardiovascular que la forma sintomática.</li>
    <li><strong>Claudicación intermitente</strong>: dolor muscular reproducible con la marcha que obliga a detenerse y cede en menos de 10 minutos de reposo de pie; la EAP crónica sintomática.</li>
    <li><strong>Isquemia crónica que amenaza la extremidad</strong>: dolor isquémico de reposo de más de 2 semanas, úlcera que no cura o gangrena; sustituye al termino "isquemia crítica".</li>
    <li><strong>Isquemia arterial aguda</strong>: descenso brusco de la perfusión que amenaza la viabilidad de la extremidad en horas; una emergencia vascular.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El diagnóstico se ancla en el índice tobillo-brazo.</strong>${figBlock('Figura 1', 'Técnica e interpretación del índice tobillo-brazo', itbHtml)} El ITB de reposo menor o igual a 0.90 confirma la EAP; el rango 0.91 a 0.99 es limítrofe y obliga a un ITB de ejercicio; un ITB mayor de 1.40 traduce arterias no compresibles por calcinosis de la media, frecuente en diabetes y enfermedad renal crónica, y exige recurrir al índice dedo-brazo.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> El tabaquismo es el factor de riesgo más potente y más modificable; la diabetes es la que más se asocia a progresión hacia la isquemia que amenaza la extremidad y a amputación. Las complicaciones que determinan la morbimortalidad (amputación mayor, lesión por reperfusión y síndrome compartimental tras revascularizar, eventos cardiovasculares mayores y la infección de la úlcera isquémica) se desarrollan en Complicaciones; en la mayoría de los pacientes el riesgo de un evento cardiovascular supera al de un evento en la extremidad.</p>`;

export const bibliografia = [
  'Mazzolai L, Teixido-Tura G, Lanzi S, et al. 2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. Eur Heart J. 2024;45(36):3538-3700.',
  'Gornik HL, Aronow HD, Goodney PP, et al. 2024 ACC/AHA/AACVPR/APMA/ABC/SCAI/SVM/SVN/SVS/SIR/VESS Guideline for the Management of Lower Extremity Peripheral Artery Disease. Circulation. 2024;149(24):e1313-e1410.',
  'Aboyans V, Ricco JB, Bartelink MEL, et al. 2017 ESC Guidelines on the Diagnosis and Treatment of Peripheral Arterial Diseases. Eur Heart J. 2018;39(9):763-816.',
  'Norgren L, Hiatt WR, Dormandy JA, et al. Inter-Society Consensus for the Management of Peripheral Arterial Disease (TASC II). J Vasc Surg. 2007;45 Suppl S:S5-S67.',
  'Conte MS, Bradbury AW, Kolh P, et al. Global vascular guidelines on the management of chronic limb-threatening ischemia. J Vasc Surg. 2019;69(6S):3S-125S.e40.',
  'Mills JL Sr, Conte MS, Armstrong DG, et al. The Society for Vascular Surgery Lower Extremity Threatened Limb Classification System: risk stratification based on Wound, Ischemia, and foot Infection (WIfI). J Vasc Surg. 2014;59(1):220-234.e2.',
  'Rutherford RB, Baker JD, Ernst C, et al. Recommended standards for reports dealing with lower extremity ischemia: revised version. J Vasc Surg. 1997;26(3):517-538.',
  'Aboyans V, Criqui MH, Abraham P, et al. Measurement and interpretation of the ankle-brachial index: a scientific statement from the American Heart Association. Circulation. 2012;126(24):2890-2909.',
  'Criqui MH, Aboyans V. Epidemiology of peripheral artery disease. Circ Res. 2015;116(9):1509-1526.',
  'Anand SS, Bosch J, Eikelboom JW, et al. Rivaroxaban with or without aspirin in patients with stable peripheral or carotid artery disease (COMPASS): an international, randomised, double-blind, placebo-controlled trial. Lancet. 2018;391(10117):219-229.',
  'Bonaca MP, Bauersachs RM, Anand SS, et al. Rivaroxaban in peripheral artery disease after revascularization (VOYAGER PAD). N Engl J Med. 2020;382(21):1994-2004.',
  'CAPRIE Steering Committee. A randomised, blinded, trial of clopidogrel versus aspirin in patients at risk of ischaemic events (CAPRIE). Lancet. 1996;348(9038):1329-1339.',
  'Murphy TP, Cutlip DE, Regensteiner JG, et al. Supervised exercise versus primary stenting for claudication resulting from aortoiliac peripheral artery disease (CLEVER). Circulation. 2012;125(1):130-139.',
  'Farber A, Menard MT, Conte MS, et al. Surgery or endovascular therapy for chronic limb-threatening ischemia (BEST-CLI). N Engl J Med. 2022;387(25):2305-2316.',
  'Bradbury AW, Adam DJ, Bell J, et al. Bypass versus Angioplasty in Severe Ischaemia of the Leg (BASIL) trial: analysis of amputation-free and overall survival. J Vasc Surg. 2010;51(5 Suppl):5S-17S.',
  'Bjorck M, Earnshaw JJ, Acosta S, et al. European Society for Vascular Surgery 2020 Clinical Practice Guidelines on the Management of Acute Limb Ischaemia. Eur J Vasc Endovasc Surg. 2020;59(2):173-218.',
  'Hiatt WR, Fowkes FGR, Heizer G, et al. Ticagrelor versus clopidogrel in symptomatic peripheral artery disease (EUCLID). N Engl J Med. 2017;376(1):32-40.',
  'Lipsky BA, Senneville E, Abbas ZG, et al. Guidelines on the diagnosis and treatment of foot infection in persons with diabetes (IWGDF/IDSA 2019). Diabetes Metab Res Rev. 2020;36(S1):e3280.',
  'Gerhard-Herman MD, Gornik HL, Barrett C, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease. Circulation. 2017;135(12):e726-e779.',
  'Fowkes FGR, Rudan D, Rudan I, et al. Comparison of global estimates of prevalence and risk factors for peripheral artery disease in 2000 and 2010: a systematic review and analysis. Lancet. 2013;382(9901):1329-1340.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'EAP crónica (asintomática o claudicación)',
      tituloB: 'Isquemia que amenaza la extremidad (crónica o aguda)',
      compensada: 'ITB menor o igual a 0.90 con la extremidad viable: sin síntomas, con síntomas atípicos de la pierna, o con claudicación intermitente (dolor muscular reproducible al caminar que cede en menos de 10 minutos de reposo de pie). En la exploración, pulsos disminuidos o ausentes distales a la lesión, soplos femorales, pérdida de vello, unas distroficas, frialdad y palidez con la elevación. Historia natural relativamente estable en la extremidad.',
      descompensada: 'Dolor isquémico de reposo del antepie de más de 2 semanas que empeora en decúbito y mejora al colgar la pierna, úlcera que no cura o gangrena (isquemia crónica que amenaza la extremidad), o instauración brusca de dolor, palidez, ausencia de pulso, parestesias, frialdad y parálisis (isquemia arterial aguda). Ambas amenazan la viabilidad de la extremidad y obligan a valoración vascular urgente.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayunas y HbA1c', utilidad: 'Cribado y control de diabetes, el factor de riesgo más asociado a progresión hacia la isquemia que amenaza la extremidad y a amputación.' },
      { prueba: 'Perfil lipídico', utilidad: 'Objetivo de cLDL menor de 55 mg/dL y reducción de al menos el 50% con estatina de alta intensidad; considerar una determinación de lipoproteina(a).' },
      { prueba: 'Creatinina y filtrado glomerular', utilidad: 'La enfermedad renal crónica agrava el pronóstico de la extremidad y condiciona el uso de contraste yodado y de gadolinio en la imagen.' },
      { prueba: 'Hemograma', utilidad: 'La anemia y la trombocitosis empeoran la isquemia; la leucocitosis orienta a infección del pie.' },
      { prueba: 'Creatina-cinasa, potasio, mioglobina y lactato', utilidad: 'En la isquemia aguda y tras la revascularización: vigilan la rabdomiólisis y el síndrome de reperfusión (hiperpotasemia, lesión renal aguda, acidosis).' },
      { prueba: 'Estudio de trombofilia o vasculitis y anticuerpos anti-PF4', utilidad: 'Solo ante un cuadro atípico (paciente joven sin factores de riesgo, territorios inusuales) o sospecha de trombocitopenia inducida por heparina antes de administrar más heparina.' }
    ],
    no_invasivos: [
      { metodo: 'Índice tobillo-brazo (ITB) en reposo', interpretacion: 'Cociente entre la presión sistólica de tobillo más alta de cada pierna y la presión braquial más alta de ambos brazos. Prueba diagnóstica de primera línea (calculadora disponible).', cutoff: 'Menor o igual a 0.90 diagnóstico de EAP; 0.91 a 0.99 limítrofe; 1.00 a 1.40 normal; mayor de 1.40 no compresible' },
      { metodo: 'ITB de ejercicio en banda sin fin', interpretacion: 'Cuando el ITB de reposo es normal o limítrofe pero la sospecha de claudicación es alta; también objetiva la limitación funcional.', cutoff: 'Caída de al menos el 20% del ITB o de al menos 30 mmHg de la presión de tobillo tras el esfuerzo indica EAP' },
      { metodo: 'Índice dedo-brazo (presión del hallux)', interpretacion: 'Alternativa cuando las arterias del tobillo no son compresibles (ITB mayor de 1.40), frecuente en diabetes y enfermedad renal crónica; las arterias digitales rara vez se calcifican.', cutoff: 'Menor de 0.70 anormal; presión absoluta del dedo menor de 30 mmHg apoya isquemia que amenaza la extremidad' },
      { metodo: 'Presiones segmentarias y registro de volumen de pulso', interpretacion: 'Localizan el nivel de la enfermedad (aortoiliaco, femoropopliteo o infrapopliteo) sin necesidad de imagen.', cutoff: 'Gradiente mayor de 20 mmHg entre segmentos adyacentes o entre el mismo nivel de ambas piernas indica estenosis significativa' },
      { metodo: 'Presión transcutanea de oxígeno (TcPO2)', interpretacion: 'Cuantifica la perfusión cutánea y predice la cicatrización de heridas y del nivel de amputación.', cutoff: 'Menor de 30 mmHg apoya isquemia que amenaza la extremidad y baja probabilidad de cicatrización' }
    ],
    imagen: [
      { modalidad: 'Eco-Doppler duplex arterial', hallazgos: 'Primera línea no invasiva para mapear estenosis y oclusiones: aumento de la velocidad sistólica pico en la estenosis y onda monofásica distal. Sin radiación ni contraste; operador dependiente y limitado en el eje aortoiliaco por gas y obesidad.' },
      { modalidad: 'Angiotomografia', hallazgos: 'Buena resolución de todo el árbol arterial desde la aorta; el calcio de la media en diabetes y enfermedad renal puede sobrestimar u ocultar estenosis en los vasos infrapopliteos. Requiere contraste yodado.' },
      { modalidad: 'Angiorresonancia', hallazgos: 'Sin radiación ni yodo; tiende a sobrestimar el grado de estenosis y no valora bien los stents. Evitar el gadolinio con filtrado glomerular muy bajo.' },
      { modalidad: 'Arteriografia por sustracción digital', hallazgos: 'Patrón de referencia y la única que visualiza con fiabilidad la circulación del pie (arterias pedia y plantar); invasiva, se reserva para el mismo acto de la revascularización endovascular.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La EAP crónica se clasifica por la gravedad clínica con dos escalas equivalentes y complementarias, Fontaine (I a IV) y Rutherford (grados 0 a 6 / categorías 0 a 6), que orientan la conducta. La isquemia crónica que amenaza la extremidad se estratifica además con la clasificación WIfI, que integra la herida, la isquemia y la infección del pie. La isquemia arterial aguda tiene su propia clasificación de Rutherford (I a III), que dicta la urgencia y el tipo de revascularización.${figBlock('Figura 2', 'Correspondencia Fontaine, Rutherford y conducta', fontaineRutherfordHtml)}`,
    escalas: [
      { nombre: 'Clasificación de Fontaine', componentes: 'Estadio I asintomática; IIa claudicación no incapacitante; IIb claudicación incapacitante; III dolor isquémico de reposo; IV úlcera o gangrena.', formula: 'Estadio clínico I a IV (ver Figura 2).', interpretacion: 'Los estadios III y IV corresponden a isquemia crónica que amenaza la extremidad e indican revascularización.' },
      { nombre: 'Clasificación de Rutherford (EAP crónica)', componentes: 'Grado 0 asintomática; grado I (categorías 1 a 3) claudicación leve, moderada y grave; grado II (categoría 4) dolor isquémico de reposo; grado III (categorías 5 y 6) pérdida tisular menor y mayor.', formula: 'Grado 0 a III / categoría 0 a 6 (ver Figura 2).', interpretacion: 'Equivale a la de Fontaine; las categorías 4 a 6 definen la isquemia crónica que amenaza la extremidad.' },
      { nombre: 'WIfI (herida, isquemia e infección del pie)', componentes: 'Tres ejes graduados de 0 a 3: Wound (herida o gangrena), Ischemia (ITB, presión de tobillo o de dedo, TcPO2) y foot Infection (según IWGDF/IDSA). Calculadora disponible.', formula: 'W 0-3, I 0-3, fI 0-3; la matriz original combina los tres ejes en estadios de riesgo 1 a 4.', interpretacion: 'A mayor grado de cualquiera de los tres ejes, mayor riesgo de amputación al ano y mayor beneficio esperado de la revascularización.' },
      { nombre: 'Clasificación de Rutherford de la isquemia arterial aguda', componentes: 'Pérdida sensitiva, debilidad motora y senales Doppler arterial y venosa.', formula: 'Categoría I viable; IIa marginalmente amenazada; IIb inmediatamente amenazada; III irreversible (ver Figura 3). Calculadora disponible.', interpretacion: 'I: revascularización programada-urgente. IIa: trombólisis dirigida por catéter o trombectomía. IIb: revascularización quirúrgica urgente sin demora. III: amputación primaria.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'EAP asintomática (marcador de aterosclerosis sistémica)',
      color: '#3f6b52',
      definicion: 'Forma más frecuente de EAP: estenosis u oclusión aterosclerótica de las arterias de los miembros, habitualmente los inferiores, con ITB menor o igual a 0.90 pero sin síntomas de esfuerzo limitantes, ya sea porque el paciente no camina lo suficiente para provocarlos o porque tiene circulación colateral adecuada. No es una forma benigna: conlleva el mismo exceso de riesgo cardiovascular sistémico que la EAP sintomática.',
      fisiopatologia: 'La aterosclerosis de la íntima y la media genera placas en el eje aortoiliaco, femoropopliteo e infrapopliteo; una estenosis puede ser hemodinámicamente significativa y aun así permitir un flujo de reposo suficiente, sobre todo si hay colaterales bien desarrolladas. El mismo proceso esta activo de forma simultánea en los lechos coronario y carotídeo (enfermedad polivascular), lo que explica que el pronóstico lo marque el riesgo de infarto e ictus más que el de la extremidad.',
      epidemiologia: 'Hasta la mitad o más de los pacientes con ITB menor o igual a 0.90 no refieren claudicación clásica. La prevalencia global se estima en unos 200 millones de personas y aumenta con la edad, superando el 15 al 20% por encima de los 70 a 80 anos. Esta infradiagnosticada porque no se busca de forma sistemática.',
      factores_riesgo: ['Tabaquismo (el factor de riesgo más potente para la EAP, con un riesgo relativo mayor que para la enfermedad coronaria)', 'Diabetes mellitus (la que más se asocia a isquemia que amenaza la extremidad y a amputación)', 'Edad avanzada y sexo masculino', 'Hipertensión arterial y dislipidemia (cLDL y lipoproteina(a) altas, cHDL bajo)', 'Enfermedad renal crónica, hiperhomocisteinemia e inflamación crónica'],
      clinica: 'Asintomática por definición, o con síntomas atípicos de la pierna que no cumplen el patrón de claudicación clásica (no siempre aparecen con el ejercicio, no siempre ceden en menos de 10 minutos de reposo de pie). En la exploración: pulsos disminuidos o ausentes, soplos femorales, pérdida de vello, unas distroficas, frialdad, palidez con la elevación e hiperemia reactiva con el declive, relleno capilar y venoso lentos.',
      criterios_dx: 'ITB en reposo menor o igual a 0.90 en cualquiera de las dos piernas, con la técnica correcta (presión de tobillo más alta de esa pierna dividida entre la braquial más alta). ITB de 0.91 a 0.99 limítrofe: repetir con ITB de ejercicio. ITB mayor de 1.40 no compresible: usar el índice dedo-brazo, anormal si es menor de 0.70.',
      laboratorio: 'Glucemia y HbA1c, perfil lipídico y creatinina con filtrado glomerular para clasificar el riesgo y fijar objetivos; no existe un biomarcador diagnóstico.',
      imagen: 'No es necesaria para el diagnóstico de la EAP asintomática; el eco-Doppler duplex solo si se plantea otra cosa (aneurisma, sospecha de causa no aterosclerótica).',
      complementarios: 'Cribado con ITB dirigido, no poblacional universal: considerar en mayores de 65 anos, en personas de 50 a 64 con factores de riesgo (tabaquismo, diabetes) o antecedente familiar de EAP, y en menores de 50 con diabetes y otro factor de riesgo; también en todo paciente con aterosclerosis conocida en otro territorio o con una herida del pie que no cura.',
      dx_diferencial: 'Causas no ateroscleróticas de ITB bajo, mucho menos frecuentes: tromboangeitis obliterante (enfermedad de Buerger) en fumador joven, vasculitis de grandes vasos, coartación, displasia fibromuscular, atrapamiento de la arteria poplitea, arteriopatia por radiación, embolias de colesterol.',
      tx_medico: 'La prevención sistémica es idéntica a la de la EAP sintomática; no se revasculariza una EAP asintomática. Cese absoluto del tabaquismo, actividad física regular, dieta cardiosaludable, control de la presión arterial con objetivo menor de 130/80 en la mayoría, control glucémico y vacunación antigripal.',
      tx_farmacologico: 'Estatina de alta intensidad con objetivo de cLDL menor de 55 mg/dL y reducción de al menos el 50%. Antiagregante simple: clopidogrel 75 mg (preferido sobre el ácido acetilsalicílico según el subgrupo de EAP de CAPRIE) o ácido acetilsalicílico 75 a 100 mg; en la EAP asintomática aislada el beneficio neto del antiagregante es menos claro y se individualiza. IECA o ARA-II para el control de la presión arterial y la reducción de eventos; en diabetes, priorizar los iSGLT2 y los agonistas del receptor de GLP-1 con beneficio cardiovascular probado.',
      tx_intervencionista: 'Ninguno. La revascularización no esta indicada sin síntomas limitantes ni amenaza de la extremidad.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica (manejo ambulatorio).',
      seguimiento_ambulatorio: 'Reforzar el cese tabáquico y la adherencia; repetir el ITB si aparecen síntomas o cambia la exploración; vigilancia activa de enfermedad coronaria y carotídea; cuidado estructurado de los pies en el paciente diabético. Vigilar la progresión a claudicación o a isquemia que amenaza la extremidad y el riesgo de eventos cardiovasculares mayores (ver esas tarjetas).',
      pronostico: 'La mayoría permanece estable en la extremidad durante anos; el pronóstico vital lo marca el riesgo cardiovascular sistémico (ver Eventos cardiovasculares mayores y muerte).',
      algoritmo: ['Factor de riesgo o exploración anormal: solicitar ITB en reposo', 'ITB menor o igual a 0.90 sin síntomas limitantes: EAP asintomática', 'ITB de 0.91 a 0.99: ITB de ejercicio. ITB mayor de 1.40: índice dedo-brazo', 'Tratamiento médico de prevención sistémica idéntico al de la EAP sintomática; no revascularizar', 'Vigilar progresión a claudicación o isquemia que amenaza la extremidad y los eventos cardiovasculares']
    },
    {
      nombre: 'Claudicación intermitente',
      color: '#3d5a73',
      definicion: 'EAP crónica sintomática: dolor, calambre o fatiga de un grupo muscular de la extremidad inferior (la pantorrilla es lo más típico; el muslo o el gluteo si la enfermedad es aortoiliaca) que aparece de forma reproducible con la marcha a una distancia relativamente constante, obliga a detenerse y cede en menos de 10 minutos de reposo de pie. Traduce un desajuste entre el aporte y la demanda de oxígeno del músculo en ejercicio por una estenosis proximal.',
      fisiopatologia: 'En reposo el flujo distal a la estenosis es suficiente; con el ejercicio, la vasodilatación del lecho muscular no puede traducirse en más flujo porque la estenosis fija lo limita, de modo que aparecen hipoperfusión, metabolismo anaerobio, acumulación de metabolitos y activación de aferentes nociceptivos musculares, con dolor que obliga a parar; al cesar el ejercicio la demanda cae y el dolor se resuelve. Contribuyen además la disfunción endotelial, la alteración de la microcirculación y del metabolismo mitocondrial y del tipo de fibra del músculo, y una miopatía isquémica que puede persistir pese a la revascularización. La localización del dolor orienta al nivel de la lesión: gluteo o muslo indica enfermedad aortoiliaca; pantorrilla, femoropoplítea; pie, infrapoplitea.',
      epidemiologia: 'Solo una minoría de los pacientes con EAP tiene claudicación clásica (aproximadamente entre el 10 y el 35%). La prevalencia de claudicación ronda el 3 al 6% a los 60 anos y aumenta con la edad. La historia natural de la extremidad es relativamente benigna: la mayoría se mantiene estable o mejora y solo alrededor del 1 al 3% por ano progresa a isquemia que amenaza la extremidad, más si hay diabetes o tabaquismo activo.',
      factores_riesgo: ['Tabaquismo (el factor de riesgo más fuerte para la EAP)', 'Diabetes mellitus (la que más se asocia a progresión y amputación)', 'Edad avanzada', 'Hipertensión arterial', 'Dislipidemia, en particular cLDL y lipoproteina(a) altas y cHDL bajo', 'Enfermedad renal crónica, hiperhomocisteinemia e inflamación (proteína C reactiva elevada)'],
      clinica: 'Claudicación reproducible como se ha definido; empeora al caminar cuesta arriba o al apresurar el paso. El grado de limitación funcional y el impacto en la vida diaria y laboral guian la indicación de revascularización. En la exploración: pulsos disminuidos o ausentes distales a la lesión, soplos, cambios troficos, ITB bajo que cae aun más tras el ejercicio. Se apoyan en cuestionarios (Edinburgh) y en pruebas funcionales (distancia de claudicación en banda sin fin, prueba de marcha de 6 minutos).',
      criterios_dx: 'Cuadro clínico compatible más ITB en reposo menor o igual a 0.90; si el ITB de reposo es normal o limítrofe y la sospecha es alta, ITB de ejercicio (caída de al menos el 20% del ITB o de al menos 30 mmHg de la presión de tobillo tras el esfuerzo). Presiones segmentarias y registro de volumen de pulso para localizar el nivel. La imagen (duplex, angiotomografia, angiorresonancia o arteriografia) solo si se plantea revascularización.',
      laboratorio: 'Glucemia y HbA1c, perfil lipídico, creatinina con filtrado glomerular y hemograma; considerar una determinación de lipoproteina(a). Estudio de trombofilia o vasculitis solo si el cuadro es atípico (paciente joven, sin factores de riesgo, territorios inusuales).',
      imagen: 'Eco-Doppler duplex arterial como primera línea no invasiva para mapear estenosis y oclusiones; angiotomografia (buena para el eje aortoiliaco, limitada por el calcio en los vasos infrapopliteos); angiorresonancia (sin radiación ni yodo, sobrestima estenosis); arteriografia por sustracción digital, invasiva, reservada para el mismo acto de la revascularización endovascular.',
      complementarios: 'Cribado de aneurisma de aorta abdominal con ecografía una vez en varones de 65 anos o más que hayan fumado, por su frecuente coexistencia; evaluación de enfermedad coronaria y carotídea guiada por síntomas.',
      dx_diferencial: 'Pseudoclaudicacion por estenosis del canal lumbar (dolor con la bipedestación y la marcha que cede al sentarse o flexionar el tronco, no al detenerse de pie, con distancia variable), claudicación venosa (edema, dolor que cede despacio con la elevación, antecedente de trombosis venosa profunda), síndrome compartimental crónico de esfuerzo (atletas jóvenes), artrosis de cadera o rodilla, radiculopatía, quiste de Baker, atrapamiento de la arteria poplitea (joven con pantorrillas hipertróficas).',
      tx_medico: 'Dos objetivos: prevenir eventos y mejorar la capacidad de marcha. Cese absoluto del tabaquismo, la intervención que más modifica la evolución. Ejercicio supervisado (programa estructurado de 30 a 45 minutos, tres veces por semana, durante al menos 12 semanas, caminando hasta un dolor casi máximo, descansar y repetir): es la primera línea para los síntomas y mejora la distancia de marcha tanto o más que la angioplastia en la enfermedad aortoiliaca (CLEVER) y femoropoplítea; si no hay programa supervisado, ejercicio estructurado en casa con objetivos y podometro. Control de la presión arterial con objetivo menor de 130/80 (los betabloqueadores no están contraindicados en la EAP), control glucémico y dieta.',
      tx_farmacologico: 'Estatina de alta intensidad con objetivo de cLDL menor de 55 mg/dL y reducción de al menos el 50% (anadir ezetimiba y luego un inhibidor de PCSK9 si no se alcanza). Antiagregante simple: clopidogrel 75 mg (preferido sobre el ácido acetilsalicílico por el subgrupo de EAP de CAPRIE) o ácido acetilsalicílico 75 a 100 mg. Alternativa de mayor potencia antitrombótica: ácido acetilsalicílico 100 mg más rivaroxabán 2.5 mg cada 12 horas (dosis vascular, COMPASS) en pacientes con riesgo isquémico alto y bajo riesgo hemorrágico, que reduce eventos cardiovasculares y de la extremidad a costa de más sangrado. Cilostazol 100 mg cada 12 horas para los síntomas de claudicación (inhibidor de la fosfodiesterasa 3, vasodilatador y antiagregante), contraindicado en cualquier grado de insuficiencia cardiaca; efectos adversos: cefalea, palpitaciones, diarrea. La pentoxifilina no se recomienda. IECA o ARA-II. En diabetes, iSGLT2 y agonistas del receptor de GLP-1 con beneficio cardiovascular.',
      tx_intervencionista: 'Revascularización (endovascular o quirúrgica) para la claudicación solo si limita el estilo de vida o el trabajo, no ha respondido a un ensayo adecuado de ejercicio y tratamiento médico, y la anatomía es favorable. Endovascular de primera elección en la enfermedad aortoiliaca y en la femoropoplítea focal (angioplastia con balón con stent o sin el, balón farmacoactivo); derivación quirúrgica (bypass) para oclusiones femoropoplíteas largas o cuando falla lo endovascular, preferentemente con vena safena. En la claudicación, la revascularización mejora los síntomas pero no reduce el riesgo de amputación ni de eventos cardiovasculares.',
      criterios_uci: 'No aplica a la claudicación estable.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica (manejo ambulatorio).',
      seguimiento_ambulatorio: 'ITB y valoración funcional periódicos; vigilancia clínica y con duplex de los injertos de bypass (al mes, a los 3, 6 y 12 meses y luego anual) y de los stents seleccionados; reforzar el ejercicio, el cese tabáquico y la adherencia al tratamiento médico; educación en cuidado de los pies. Vigilar activamente la progresión a dolor de reposo o pérdida tisular (ver Isquemia crónica que amenaza la extremidad) y el desarrollo de isquemia aguda por trombosis sobre la placa o del injerto o stent (ver Isquemia arterial aguda de la extremidad).',
      pronostico: 'La extremidad suele mantenerse estable: a 5 anos, alrededor del 70 al 80% sin cambios o mejor con tratamiento, un 5 al 10% requiere revascularización y un 1 al 5% amputación, más en diabéticos y fumadores activos. El pronóstico vital lo determina el riesgo cardiovascular: a 5 anos, cerca del 20% de infarto o ictus no mortal y del 15 al 30% de mortalidad, mayoritariamente cardiovascular (ver Eventos cardiovasculares mayores y muerte).',
      algoritmo: ['Dolor de pantorrilla, muslo o gluteo reproducible con la marcha que cede en menos de 10 minutos de reposo de pie: sospechar claudicación', 'ITB en reposo menor o igual a 0.90 confirma; si es normal o limítrofe con sospecha alta, ITB de ejercicio', 'Cese tabáquico más estatina de alta intensidad más antiagregante más control de presión arterial y glucemia en todos', 'Ejercicio supervisado durante al menos 12 semanas como primera línea para los síntomas; anadir cilostazol si no hay insuficiencia cardiaca', 'Revascularización solo si limita el estilo de vida y falla el tratamiento conservador, con anatomía favorable (endovascular de primera elección)']
    },
    {
      nombre: 'Isquemia crónica que amenaza la extremidad',
      color: '#8c3a34',
      definicion: 'Evolución más grave de la EAP crónica (ver Claudicación intermitente): dolor isquémico de reposo del antepie o los dedos, típicamente nocturno y que mejora al colgar la pierna, de más de 2 semanas de evolución, o pérdida tisular (úlcera que no cura, gangrena) atribuible a enfermedad arterial oclusiva objetivada. Sustituye al termino "isquemia crítica" e incorpora la valoración de la herida y de la infección mediante la clasificación WIfI, no solo el grado de isquemia.',
      fisiopatologia: 'Sobre la enfermedad oclusiva crónica multinivel ya descrita en la tarjeta de claudicación, la presión de perfusión distal cae por debajo del umbral necesario para mantener la nutrición tisular en reposo. Se suman la microangiopatía (sobre todo en diabetes y enfermedad renal crónica), el edema, la infección y la neuropatía, que retrasa la consulta al hacer indoloras las úlceras, cerrando un círculo de isquemia, lesión e infección. Lo que distingue a esta forma de la claudicación, que suele ser monosegmentaria, es la enfermedad oclusiva multinivel con afectación frecuente del sector infrapopliteo y del pie.',
      epidemiologia: 'Representa una minoría de la EAP (alrededor del 1 al 3% de los claudicantes progresa por ano), pero concentra la morbilidad: sin revascularización, a 1 ano se asocia a cerca del 20% de mortalidad y del 20 al 25% de amputación mayor. La diabetes, la enfermedad renal crónica en diálisis, el tabaquismo activo y la edad avanzada son los grandes determinantes.',
      factores_riesgo: ['Diabetes mellitus (el factor más asociado a esta forma y a amputación)', 'Enfermedad renal crónica avanzada o en diálisis', 'Tabaquismo activo', 'Edad avanzada', 'Enfermedad infrapoplitea y ITB muy bajo', 'Neuropatía y deformidad del pie'],
      clinica: 'Dolor de reposo del antepie que empeora en decúbito y con la elevación y mejora con la pierna en declive (el paciente duerme sentado o con el pie fuera de la cama); úlceras isquémicas de borde seco, fondo pálido y muy dolorosas en zonas acras o de presión; gangrena seca o húmeda; palidez con la elevación, rubor de declive, atrofia y ausencia de pulsos. Buscar signos de infección asociada (ver Úlcera isquémica infectada e infección del pie).',
      criterios_dx: 'Cuadro clínico más confirmación hemodinámica de isquemia: presión de tobillo menor de 50 mmHg, presión de dedo menor de 30 mmHg, TcPO2 menor de 30 mmHg, o índice dedo-brazo muy bajo. En diabetes las presiones de tobillo pueden ser falsamente altas por calcinosis, por lo que se usan la presión del dedo y la TcPO2. Estratificar con WIfI e imagen arterial de todo el eje, de la aorta al pie, para planear la revascularización.',
      laboratorio: 'HbA1c, función renal (contraste), hemograma, proteína C reactiva y procalcitonina con cultivos si hay infección, albúmina como marcador nutricional y de cicatrización, y estudio de coagulación.',
      imagen: 'Eco-Doppler duplex más angiotomografia o angiorresonancia; arteriografia por sustracción digital con visualizacion de la circulación del pie (arterias pedia y plantar) para la planificación. El concepto de angiosoma orienta la revascularización hacia la arteria que irriga la zona de la herida.',
      complementarios: 'Valoración por un equipo multidisciplinar del pie (cirugía vascular, endocrinologia, infectologia, cirugía plástica u ortopédica, enfermeria de heridas); radiografía o resonancia del pie si se sospecha osteomielitis.',
      dx_diferencial: 'Úlceras de otra etiología: venosa (maleolar, exudativa, poco dolorosa, con lipodermatoesclerosis), neuropática pura (en punto de presión, indolora, con pulsos presentes), por presión, vasculitica, pioderma gangrenoso, calcifilaxis en enfermedad renal crónica. También el dolor neuropático de reposo sin isquemia, con pulsos y presiones normales.',
      tx_medico: 'Tratamiento médico sistémico intensivo como en toda EAP (estatina de alta intensidad, antiagregante o ácido acetilsalicílico con rivaroxabán a dosis vascular, control de presión arterial y glucemia, cese tabáquico); analgesia; cuidado de la herida y descarga; control de la infección (ver la tarjeta correspondiente); optimización nutricional. El tratamiento médico aislado no salva la extremidad: esta forma es indicación de revascularización salvo que sea inviable o el paciente no sea candidato.',
      tx_farmacologico: 'Además del tratamiento sistémico, tras la revascularización infrainguinal considerar ácido acetilsalicílico más rivaroxabán 2.5 mg cada 12 horas (VOYAGER PAD, que reduce los eventos de la extremidad, incluidas la trombosis aguda y la amputación). Doble antiagregación tras algunas intervenciones endovasculares, individualizada. Los prostanoides solo si la revascularización no es posible, como medida paliativa de eficacia limitada.',
      tx_intervencionista: 'Revascularización urgente, en días y no en semanas, para restaurar flujo en línea directa al pie. Elección entre endovascular y bypass según BEST-CLI: en pacientes candidatos a bypass con vena safena interna adecuada, el bypass tuvo menos eventos adversos mayores en la extremidad (sobre todo menos reintervención y amputación); sin vena adecuada o con alto riesgo quirúrgico, endovascular. Amputación primaria si la extremidad no es funcionalmente recuperable (necrosis extensa, sepsis incontrolable, paciente no deambulante con contracturas).',
      criterios_uci: 'Sepsis de origen en el pie, isquemia aguda sobreanadida, o descompensación cardiaca o renal periprocedimiento.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la perfusión tras la revascularización (pulsos, ITB o presiones, relleno de la herida), de la herida y de la infección, y del estado hemodinámico y renal; iniciar o reanudar el tratamiento antitrombótico según el procedimiento.',
      seguimiento_ambulatorio: 'Vigilancia clínica y con duplex del injerto o segmento tratado (al mes, a los 3, 6 y 12 meses y luego anual); cuidado del pie de por vida; control estricto de los factores de riesgo; calzado y descarga adecuados; rerrevascularizacion precoz si hay reestenosis sintomática.',
      pronostico: 'Con revascularización oportuna y cuidado de la herida, la mayoría conserva la extremidad al ano; sin revascularización, alrededor de 1 de cada 4 pierde la extremidad y 1 de cada 5 fallece en el primer ano. La mortalidad a 5 anos supera el 50%, mayoritariamente cardiovascular.',
      algoritmo: ['Dolor isquémico de reposo de más de 2 semanas o úlcera o gangrena más EAP objetivada: isquemia crónica que amenaza la extremidad', 'Confirmar la isquemia (presión de dedo menor de 30 mmHg o TcPO2 menor de 30 mmHg; usar la presión del dedo si hay calcinosis diabética) y estratificar con WIfI', 'Imagen arterial de la aorta al pie para planear la revascularización', 'Revascularización urgente: bypass con vena safena si el paciente es candidato y tiene conducto adecuado (BEST-CLI), si no endovascular', 'Cuidado de la herida, control de la infección y tratamiento médico sistémico intensivo; amputación primaria solo si la extremidad no es recuperable']
    },
    {
      nombre: 'Isquemia arterial aguda de la extremidad',
      color: '#7a1f3d',
      definicion: 'Descenso brusco de la perfusión de la extremidad, en menos de 2 semanas y habitualmente en horas, que amenaza su viabilidad: una emergencia vascular. Puede ocurrir sobre una arteria previamente sana (embolia) o, con frecuencia creciente, como trombosis sobre una EAP crónica preexistente o sobre un injerto o stent (ver Claudicación intermitente e Isquemia crónica que amenaza la extremidad).',
      fisiopatologia: `La oclusión súbita no da tiempo a desarrollar colaterales, por lo que el déficit es más grave que el de la EAP crónica del mismo nivel. Las causas se agrupan en: embolia (30 a 40%), en su mayoría cardiogenica (fibrilación auricular, trombo mural tras un infarto, valvulopatía, endocarditis, mixoma) o arterio-arterial desde un aneurisma o placa proximal, que se aloja en las bifurcaciones (femoral común, poplitea); y trombosis in situ, hoy la más frecuente, sobre placa aterosclerótica rota, sobre un aneurisma poplíteo trombosado, por oclusión de injerto o stent, en estados protrombóticos (cáncer, trombofilia, trombocitopenia inducida por heparina), por disección o por compresión (atrapamiento poplíteo). El músculo esquelético y el nervio toleran unas 4 a 6 horas de isquemia antes del dano irreversible.${figBlock('Figura 3', 'Las 6 P y la clasificación de Rutherford de la isquemia aguda', isquemiaAgudaHtml)}`,
      epidemiologia: 'Incidencia aproximada de 1 a 1.5 casos por cada 10.000 personas y ano; mortalidad hospitalaria del 10 al 15%, sobre todo por la comorbilidad cardiaca y las complicaciones metabólicas de la reperfusión, y amputación del 10 al 30% según la categoría de Rutherford al llegar.',
      factores_riesgo: ['Fibrilación auricular y otras fuentes cardioembólicas', 'EAP crónica avanzada', 'Injerto o stent previo en la extremidad', 'Aneurisma poplíteo o aórtico', 'Cáncer activo y estados de hipercoagulabilidad', 'Hipovolemia o bajo gasto cardiaco', 'Trombocitopenia inducida por heparina'],
      clinica: 'Las 6 "P": Pain (dolor), Pallor (palidez), Pulselessness (ausencia de pulso), Paresthesia (parestesias), Poikilothermia (frialdad) y Paralysis (parálisis, un signo tardío y ominoso). La pérdida sensitiva y motora marca la gravedad y define la categoría de Rutherford de la isquemia aguda (I a III, ver Figura 3 y la calculadora). Un inicio súbito en un paciente con fibrilación auricular y sin claudicación previa ni cambios crónicos orienta a embolia; un inicio más gradual con claudicación previa, cambios troficos y enfermedad contralateral orienta a trombosis in situ.',
      criterios_dx: 'Es un diagnóstico clínico; no se retrasa el tratamiento por la imagen. Doppler de mano a pie de cama para las senales arterial y venosa, que define la categoría de Rutherford. Si la extremidad es viable o marginalmente amenazada (I o IIa) y el paciente esta estable, angiotomografia o arteriografia para planificar; en la IIb no se retrasa la revascularización por la imagen y se completa en quirófano o sala.',
      laboratorio: 'Hemograma, coagulación, función renal, potasio, creatina-cinasa, mioglobina, lactato, gasometría, grupo y pruebas cruzadas. Según el contexto: troponina y electrocardiograma para buscar fibrilación auricular y fuente cardioembólica, estudio de trombofilia y anticuerpos anti-PF4 si se sospecha trombocitopenia inducida por heparina antes de administrar más heparina.',
      imagen: 'Eco-Doppler duplex, angiotomografia (rápida y disponible) y arteriografia (diagnóstica y terapéutica en el mismo acto); ecocardiograma para buscar la fuente embólica una vez estabilizada la extremidad.',
      complementarios: 'Monitorización continua del electrocardiograma para detectar fibrilación auricular y sondaje vesical para vigilar la diuresis y la mioglobinuria.',
      dx_diferencial: 'Flegmasia cerulea dolens (trombosis venosa profunda iliofemoral masiva: pierna tumefacta y cianótica, con pulsos a menudo presentes al inicio), disección aórtica con malperfusión de la extremidad (dolor torácico o dorsal, asimetría de pulsos; ver el tema de Síndrome Aórtico Agudo), estado de choque con vasoconstricción intensa, compresión nerviosa aguda y síndrome compartimental de otra causa.',
      tx_medico: 'Anticoagulación inmediata con heparina no fraccionada en bolo seguida de infusión, salvo contraindicación, en cuanto se sospecha, para limitar la propagación del trombo; analgesia; hidratación y protección renal; corrección de la causa precipitante (control de frecuencia y anticoagulación de la fibrilación auricular). La extremidad se coloca en declive y a temperatura ambiente, sin calor local directo.',
      tx_farmacologico: 'Heparina no fraccionada con objetivo de TTPa 2 a 2.5 veces el control o anti-Xa terapéutico. Trombólisis dirigida por catéter (alteplasa o tenecteplasa intratrombo) como opción en las categorías I y IIa cuando la oclusión es de menos de 2 semanas y no hay contraindicación de fibrinólisis. Tras la fase aguda, anticoagulación oral si la causa es embólica o protrombótica, o antiagregación (o ácido acetilsalicílico con rivaroxabán a dosis vascular) si es trombosis sobre EAP.',
      tx_intervencionista: 'Revascularización urgente. Categoría IIb (déficit sensitivo más allá de los dedos con debilidad y senal arterial ausente): revascularización quirúrgica sin demora por ser la más rápida (embolectomia con catéter de Fogarty, tromboendarterectomia, bypass). Categoría IIa: trombólisis dirigida por catéter o trombectomía percutánea o quirúrgica según la anatomía y el tiempo. Categoría I: se puede completar el estudio y revascularizar de forma programada-urgente. Categoría III (anestesia, parálisis con rigidez, sin senal venosa): amputación primaria, porque revascularizar una extremidad ya inviable puede ser mortal por el síndrome de reperfusión. Fasciotomia profiláctica o terapéutica si la isquemia fue prolongada o aparece síndrome compartimental (ver esa tarjeta).',
      criterios_uci: 'La mayoría de los casos, por la anticoagulación, la vigilancia neurovascular horaria, el riesgo de reperfusión (hiperpotasemia, arritmias, lesión renal aguda) y la comorbilidad cardiaca.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Exploración neurovascular seriada, vigilancia del síndrome compartimental y de la reperfusión (potasio, creatina-cinasa, pH, diuresis, función renal), estudio y tratamiento de la causa (ecocardiograma, Holter, cribado de cáncer o trombofilia según el contexto) e inicio de la anticoagulación o antiagregación definitiva.',
      seguimiento_ambulatorio: 'Anticoagulación indefinida si la causa persiste (fibrilación auricular, trombofilia, aneurisma no tratado) o tratamiento de la EAP subyacente; vigilancia del injerto o segmento tratado con duplex; rehabilitación de los déficits.',
      pronostico: 'Depende de la categoría de Rutherford al tratamiento y del tiempo de isquemia: la IIb tratada sin demora tiene buena tasa de salvamento; la III conlleva amputación. La mortalidad hospitalaria del 10 al 15% refleja sobre todo la enfermedad cardiaca de base y las complicaciones de la reperfusión.',
      algoritmo: ['Dolor súbito más palidez más ausencia de pulso más parestesias, frialdad o parálisis: isquemia arterial aguda', 'Heparina no fraccionada intravenosa inmediata más analgesia; no retrasar por la imagen', 'Doppler de mano a pie de cama: definir la categoría de Rutherford (I, IIa, IIb o III)', 'IIb: revascularización quirúrgica urgente (Fogarty o bypass). IIa: trombólisis dirigida por catéter o trombectomía. I: estudio y revascularización programada-urgente. III: amputación primaria', 'Vigilar y tratar el síndrome de reperfusión y el compartimental; tratar la causa (fibrilación auricular, aneurisma, trombofilia)']
    },
    {
      nombre: 'Pérdida de extremidad y amputación mayor',
      color: '#6b4a2e',
      definicion: 'Amputación por encima del tobillo (transtibial o transfemoral) por isquemia no recuperable. Es la complicación final común de la isquemia crónica que amenaza la extremidad y de la isquemia arterial aguda no revascularizadas a tiempo o no revascularizables (ver esas tarjetas); una minoría son amputaciones primarias, de entrada, cuando la extremidad ya no es funcionalmente salvable.',
      fisiopatologia: 'Necrosis tisular extensa, infección incontrolable o dolor isquémico intratable sobre una extremidad sin opciones de revascularización con línea directa al pie o ya no funcional. La decisión pondera la viabilidad, el potencial de deambulación, la comorbilidad y las preferencias del paciente, e idealmente se toma en un equipo multidisciplinar.',
      epidemiologia: 'La EAP causa la mayoría de las amputaciones no traumáticas de miembro inferior. Su incidencia es muy desigual, mucho mayor con diabetes, enfermedad renal crónica en diálisis, nivel socioeconómico bajo y acceso limitado a revascularización; la tasa de amputación es un indicador de calidad de los sistemas de atención vascular. Tras una amputación mayor, la mortalidad a 1 ano es del 20 al 40% y entre el 30 y el 50% requiere amputación contralateral en 2 a 4 anos.',
      factores_riesgo: ['Isquemia crónica que amenaza la extremidad con WIfI alto', 'Isquemia aguda en categoría III o con retraso en el tratamiento', 'Diabetes mellitus', 'Enfermedad renal crónica o diálisis', 'Infección grave del pie', 'Tabaquismo activo', 'Ausencia de conducto venoso para bypass', 'Situación no deambulante previa y presentación tardía'],
      clinica: 'Gangrena extensa, sepsis de origen en la extremidad, dolor isquémico intratable; en la isquemia aguda, anestesia y parálisis con rigidez muscular (Rutherford III).',
      criterios_dx: 'Valoración clínica y de imagen que establece que no hay opción de revascularización con línea directa al pie, o que la extremidad ya no es funcionalmente recuperable.',
      laboratorio: 'Marcadores de infección y sepsis, función renal, albúmina y estado nutricional (predicen la cicatrización del muñón), HbA1c y hemograma.',
      imagen: 'La misma imagen arterial que descarto opciones de revascularización; valoración del nivel de amputación con mejor probabilidad de cicatrización mediante clínica, presiones segmentarias y TcPO2.',
      complementarios: 'Valoración prequirúrgica del riesgo cardiovascular, planificación de rehabilitación y prótesis, y apoyo psicológico.',
      dx_diferencial: 'El punto clave no es un diagnóstico diferencial clásico, sino distinguir la extremidad no recuperable de la que aun tiene opción de salvamento con revascularización agresiva, para evitar tanto la amputación evitable como la revascularización futil.',
      tx_medico: 'Optimización preoperatoria: control de la infección, nutrición, glucemia, anemia y estado cardiaco. Analgesia multimodal, incluida la prevención y el tratamiento del dolor de miembro fantasma. Continuar el tratamiento médico sistémico de la EAP.',
      tx_farmacologico: 'Antibióticos si hay infección, analgesia multimodal, profilaxis de tromboembolia venosa y mantenimiento de la estatina y el antiagregante.',
      tx_intervencionista: 'Amputación al nivel más distal con probabilidad razonable de cicatrizar y de rehabilitación protésica; preservar la rodilla siempre que sea posible mejora la deambulación. En la extremidad séptica, a veces amputación en guillotina inicial y cierre reglado diferido.',
      criterios_uci: 'Sepsis grave de origen en la extremidad o inestabilidad perioperatoria.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Cicatrización del muñón, control del dolor (incluido el de miembro fantasma), inicio precoz de la rehabilitación, prevención de contracturas y cuidado intensivo de la extremidad contralateral.',
      seguimiento_ambulatorio: 'Rehabilitación y adaptación protésica, vigilancia y protección de la extremidad contralateral (cribado de EAP, cuidado del pie), control estricto de los factores de riesgo, ya que el riesgo cardiovascular y de amputación contralateral es muy alto, y apoyo psicosocial.',
      pronostico: 'Reservado: la amputación mayor identifica a una población con mortalidad a 1 ano del 20 al 40% y alta incidencia de amputación contralateral. La preservación de la rodilla y la rehabilitación temprana mejoran la probabilidad de volver a caminar.',
      algoritmo: ['Isquemia crónica que amenaza la extremidad o isquemia aguda sin opción de revascularización con línea directa al pie, o extremidad no funcionalmente recuperable: considerar amputación mayor', 'Decisión en equipo multidisciplinar; distinguir la extremidad no recuperable de la aun salvable', 'Optimizar infección, nutrición, glucemia y estado cardiaco antes de la cirugía', 'Amputar al nivel más distal que cicatrice y permita prótesis; preservar la rodilla si es posible', 'Rehabilitación precoz más protección de la extremidad contralateral más control intensivo de los factores de riesgo']
    },
    {
      nombre: 'Lesión por reperfusión y síndrome compartimental',
      color: '#8a6a1f',
      definicion: 'Complicación de la revascularización de una extremidad con isquemia prolongada (habitualmente más de 4 a 6 horas; ver Isquemia arterial aguda de la extremidad): al restablecerse el flujo, se liberan a la circulación sistémica los productos del metabolismo anaerobio y de la necrosis muscular (potasio, hidrogeniones, mioglobina, radicales libres) y se desencadena edema muscular dentro de compartimentos fasciales inextensibles, que eleva la presión intracompartimental hasta ocluir la microcirculación (síndrome compartimental).',
      fisiopatologia: 'Durante la isquemia el músculo acumula lactato, potasio y fosfatos y sufre rabdomiólisis. Con la reperfusión se producen dos fenómenos: uno sistémico, con lavado hacia la circulación que causa hiperpotasemia (arritmias, parada cardiaca), acidosis metabólica, mioglobinuria con lesión renal aguda y liberación de citocinas y radicales libres capaces de provocar respuesta inflamatoria sistémica y lesión pulmonar; y uno local, con aumento de la permeabilidad capilar y edema en compartimentos cerrados (el anterior de la pierna es el más vulnerable), de modo que la presión compartimental supera la presión de perfusión capilar y produce isquemia de nervio y músculo pese a tener pulso proximal. El dano puede ser mayor que el de la propia isquemia.',
      epidemiologia: 'El riesgo aumenta con la duración de la isquemia (poco frecuente por debajo de 4 horas, esperable por encima de 6), con la oclusión a nivel poplíteo, con la categoría IIb y con la revascularización tardía.',
      factores_riesgo: ['Isquemia prolongada de más de 4 a 6 horas', 'Oclusión poplitea o de eje único', 'Categoría de Rutherford IIb', 'Revascularización de una extremidad casi inviable', 'Ausencia de colaterales', 'Lesión por aplastamiento asociada'],
      clinica: 'Síndrome compartimental: dolor desproporcionado y con el estiramiento pasivo del compartimento, tensión leñosa a la palpación, parestesias y, de forma tardía, déficit motor y ausencia de pulso (signo tardío, no esperar a que aparezca). Reperfusión sistémica: cambios electrocardiográficos por hiperpotasemia, arritmias, hipotensión, orina oscura por mioglobinuria, oliguria y acidosis.',
      criterios_dx: 'Clínico. La presión intracompartimental (mayor de 30 mmHg, o presión delta, definida como presión arterial diastólica menos presión compartimental, menor de 30 mmHg) confirma pero no debe retrasar la fasciotomia si la clínica es evidente. En laboratorio: potasio, creatina-cinasa muy elevada, mioglobina y mioglobinuria, creatinina y gasometría.',
      laboratorio: 'Potasio seriado, creatina-cinasa, mioglobina, función renal, gasometría, lactato y electrocardiograma.',
      imagen: 'No es necesaria para el diagnóstico del síndrome compartimental; en agudo no se usa la resonancia.',
      complementarios: 'Monitorización continua del electrocardiograma y de la diuresis; medición de la presión compartimental si hay duda (paciente sedado o no valorable).',
      dx_diferencial: 'Reoclusion arterial (el dolor y el déficit reaparecen, pero la extremidad vuelve a estar fría y sin pulso, no tensa y caliente), trombosis venosa, celulitis y dolor isquémico residual.',
      tx_medico: 'Prevención y tratamiento de la hiperpotasemia (calcio intravenoso, insulina con glucosa, salbutamol, resinas o diálisis), hidratación abundante y diuresis alta para la rabdomiólisis (el bicarbonato es opcional y discutido), corrección de la acidosis y tratamiento de las arritmias; a veces terapia de reemplazo renal.',
      tx_farmacologico: 'No hay ningún fármaco que revierta el síndrome compartimental establecido; el manitol tiene un papel teórico como diurético osmótico y captador de radicales, con evidencia débil.',
      tx_intervencionista: 'Fasciotomia de los cuatro compartimentos de la pierna, urgente ante un síndrome compartimental clínico. Muchos equipos realizan fasciotomia profiláctica en el mismo acto de la revascularización cuando la isquemia supero unas 4 a 6 horas o la extremidad estaba en categoría IIb. Desbridamiento del músculo necrótico y cierre diferido.',
      criterios_uci: 'Prácticamente todos los casos: hiperpotasemia, arritmias, lesión renal aguda, necesidad de diálisis e inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Cierre progresivo o injerto de las heridas de fasciotomia, vigilancia de la recuperación de la función renal tras la rabdomiólisis y rehabilitación de los déficits neurológicos; el nervio peroneo profundo es el más vulnerable, con pie caído resultante.',
      seguimiento_ambulatorio: 'Rehabilitación de las secuelas motoras y sensitivas y del pie caído (ortesis), seguimiento de la función renal y cuidado de las cicatrices de fasciotomia.',
      pronostico: 'Bueno si la fasciotomia es precoz; el retraso deja secuelas (contractura isquémica de la pierna, pie caído, pérdida muscular), y la reperfusión masiva puede ser mortal por hiperpotasemia y fallo multiorgánico, hasta el punto de que en la categoría III se prefiere la amputación primaria.',
      algoritmo: ['Revascularización de una extremidad con isquemia prolongada de más de 4 a 6 horas o categoría IIb: anticipar reperfusión y síndrome compartimental', 'Vigilar potasio, creatina-cinasa, diuresis, electrocardiograma y la tensión de los compartimentos de la pierna', 'Hiperpotasemia y rabdomiólisis: calcio intravenoso, insulina con glucosa, hidratación y diuresis altas, diálisis si es necesario', 'Síndrome compartimental clínico: fasciotomia urgente de los cuatro compartimentos; considerar fasciotomia profiláctica en la propia revascularización', 'Extremidad ya irreversible (Rutherford III): amputación primaria en vez de revascularizar, para evitar la reperfusión mortal']
    },
    {
      nombre: 'Eventos cardiovasculares mayores y muerte',
      color: '#6b3a5a',
      definicion: 'Complicación sistémica y principal causa de muerte en la EAP: infarto de miocardio, ictus isquémico y muerte cardiovascular, consecuencia de que la EAP es la manifestación en las extremidades de una aterosclerosis difusa que casi siempre coexiste en los lechos coronario y cerebrovascular (ver EAP asintomática y Claudicación intermitente). En la mayoría de los pacientes con EAP el riesgo de un evento cardiovascular mayor supera al de un evento en la extremidad.',
      fisiopatologia: 'La misma placa aterosclerótica inestable que ocluye las arterias de la pierna esta presente en otros territorios. Un ITB bajo se asocia de forma independiente y graduada con la mortalidad cardiovascular (a menor ITB, mayor riesgo), y también el ITB mayor de 1.40, que traduce rigidez arterial, marca riesgo alto. Se suman la carga de factores de riesgo compartidos y la inflamación vascular.',
      epidemiologia: 'A 5 anos, alrededor del 20% de los pacientes con claudicación sufren un infarto o ictus no mortal y del 15 al 30% fallecen, la mayoría por causa cardiovascular; en la isquemia crónica que amenaza la extremidad la mortalidad a 5 anos supera el 50%. El riesgo de mortalidad frente a una persona sin EAP del mismo perfil es 2 a 3 veces mayor.',
      factores_riesgo: ['ITB muy bajo o mayor de 1.40', 'Enfermedad polivascular (coronaria o carotídea conocidas)', 'Diabetes mellitus', 'Enfermedad renal crónica', 'Tabaquismo activo', 'Isquemia crónica que amenaza la extremidad o isquemia aguda (marcadores de enfermedad avanzada)', 'Mal control de los factores de riesgo y no adherencia al tratamiento médico'],
      clinica: 'La de la cardiopatía isquémica y la enfermedad cerebrovascular; a menudo la EAP es asintomática mientras el evento índice del paciente es coronario o cerebral. Buscar de forma activa angina, disnea, síntomas neurológicos y soplos carotídeos.',
      criterios_dx: 'No es un diagnóstico único, sino un objetivo de estimación y reducción del riesgo. El propio diagnóstico de EAP (ITB menor o igual a 0.90) ya clasifica al paciente como de riesgo cardiovascular muy alto, equivalente al de la enfermedad coronaria establecida.',
      laboratorio: 'Perfil lipídico con cLDL de seguimiento, HbA1c, función renal y una determinación de lipoproteina(a); no se recomienda el cribado sistemático de isquemia silente con pruebas de estrés en el paciente asintomático.',
      imagen: 'No de rutina; ecocardiograma, pruebas de isquemia o duplex carotídeo guiados por síntomas o por la necesidad de valoración prequirúrgica.',
      complementarios: 'Valoración y tratamiento de la apnea del sueno, del tabaquismo y de la depresión, que influyen en el pronóstico y la adherencia.',
      dx_diferencial: 'El mensaje clave es no centrar el manejo solo en la extremidad y descuidar la prevención sistémica, que es la que más vidas salva.',
      tx_medico: 'Cese del tabaquismo (la medida aislada más eficaz), dieta, ejercicio y rehabilitación cardiovascular; control de la presión arterial con objetivo menor de 130/80 en la mayoría (IECA o ARA-II de elección; los betabloqueadores no están contraindicados por la EAP); control glucémico con fármacos de beneficio cardiovascular probado (iSGLT2, agonistas del receptor de GLP-1) en diabetes; vacunación antigripal.',
      tx_farmacologico: 'Estatina de alta intensidad para todos, con objetivo de cLDL menor de 55 mg/dL y reducción de al menos el 50% (anadir ezetimiba y luego un inhibidor de PCSK9 si no se alcanza). Tratamiento antitrombótico: antiagregante simple (clopidogrel preferido sobre el ácido acetilsalicílico) en la EAP sintomática; ácido acetilsalicílico 100 mg más rivaroxabán 2.5 mg cada 12 horas (COMPASS) si el riesgo isquémico es alto y el hemorrágico bajo. La anticoagulación oral plena sin otra indicación (por ejemplo fibrilación auricular) no reduce eventos y aumenta el sangrado.',
      tx_intervencionista: 'Revascularizar la extremidad no reduce el riesgo de infarto, ictus ni muerte; la reducción del riesgo cardiovascular es enteramente médica y de estilo de vida. Las estenosis coronarias o carotídeas se tratan según sus propias indicaciones.',
      criterios_uci: 'Los del evento agudo correspondiente (síndrome coronario agudo, ictus).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En toda hospitalización por la EAP, revisar y optimizar el tratamiento médico de prevención: es una oportunidad frecuentemente pérdida, ya que los pacientes con EAP reciben estatinas y antiagregantes con menos frecuencia que los coronarios.',
      seguimiento_ambulatorio: 'Verificar en cada visita la consecucion de objetivos (cLDL, presión arterial, HbA1c, abandono del tabaco) y la adherencia; reforzar la rehabilitación y el ejercicio; coordinar con cardiología y neurología si hay enfermedad en esos territorios.',
      pronostico: 'Mejora de forma sustancial con el tratamiento médico intensivo y el cese tabáquico; el infratratamiento es la regla y explica buena parte del exceso de mortalidad.',
      algoritmo: ['Todo paciente con ITB menor o igual a 0.90 (o mayor de 1.40) tiene riesgo cardiovascular muy alto, equivalente a enfermedad coronaria', 'Cese tabáquico más estatina de alta intensidad (cLDL menor de 55) más antiagregante (clopidogrel) en todos', 'Anadir rivaroxabán 2.5 mg cada 12 horas al ácido acetilsalicílico si el riesgo isquémico es alto y el hemorrágico bajo (COMPASS)', 'Control de presión arterial menor de 130/80 (IECA o ARA-II) y, en diabetes, iSGLT2 o agonistas del receptor de GLP-1', 'Recordar: revascularizar la pierna no previene el infarto ni el ictus; la prevención es médica']
    },
    {
      nombre: 'Úlcera isquémica infectada e infección del pie',
      color: '#8c3a34',
      definicion: 'Complicación de la pérdida tisular en la isquemia crónica que amenaza la extremidad, con mucha frecuencia sobre un pie diabético con neuropatía (ver Isquemia crónica que amenaza la extremidad): infección de partes blandas (celulitis, absceso, fascitis) o del hueso (osteomielitis) de una úlcera o herida del pie mal perfundida, que acelera la pérdida de la extremidad y puede desencadenar sepsis.',
      fisiopatologia: 'La isquemia impide la llegada de leucocitos y antibióticos y dificulta la cicatrización; la neuropatía retrasa la consulta al hacer indoloras las úlceras y favorece la deformidad y los puntos de presión; la hiperglucemia deteriora la función leucocitaria. La infección aumenta la demanda metabólica local sobre un lecho que ya no cubre la basal y puede progresar con rapidez a lo largo de los planos fasciales, que en el pie comunican con la pierna.',
      epidemiologia: 'La triada de isquemia, herida e infección (los tres ejes de la clasificación WIfI) define el riesgo de amputación de la isquemia crónica que amenaza la extremidad; la infección es el precipitante inmediato de una gran parte de las amputaciones en pacientes diabéticos.',
      factores_riesgo: ['Diabetes mellitus con neuropatía', 'Isquemia (grado de Ischemia de WIfI de 1 o más)', 'Deformidad del pie y calzado inadecuado', 'Úlcera o amputación previas', 'Enfermedad renal crónica o diálisis', 'Mal control glucémico', 'Higiene y autocuidado deficientes', 'Tabaquismo'],
      clinica: 'Signos locales de infección (eritema perilesional de 0.5 a 2 cm o mayor, calor, edema, dolor o hipersensibilidad, secreción purulenta) graduados por la clasificación IWGDF/IDSA en leve, moderada y grave según la extensión y la repercusión sistémica. La crepitacion o el gas sugieren infección necrosante. La fiebre y la repercusión sistémica pueden faltar en el diabético isquémico incluso con infección grave. Explorar la úlcera con estilete: el contacto óseo (probe-to-bone) sugiere osteomielitis.',
      criterios_dx: 'Diagnóstico clínico de infección: al menos dos signos inflamatorios locales o secreción purulenta. No cultivar úlceras sin signos de infección. Cultivo de tejido profundo o de biopsia (no de frotis superficial) para dirigir el antibiótico. Osteomielitis: probe-to-bone positivo más radiografía (puede tardar 2 a 3 semanas en mostrar cambios) o resonancia (más sensible y precoz); la biopsia ósea es el patrón de referencia.',
      laboratorio: 'Hemograma, proteína C reactiva, velocidad de sedimentación y procalcitonina para seguir la respuesta, glucemia y HbA1c, función renal, hemocultivos si hay repercusión sistémica y cultivo de tejido profundo.',
      imagen: 'Radiografía del pie (gas, osteomielitis, cuerpo extrano, artropatía de Charcot); resonancia si se sospecha osteomielitis o absceso profundo con radiografía no concluyente; angiografía para planear la revascularización, imprescindible para que la herida cure.',
      complementarios: 'Valoración por el equipo multidisciplinar del pie, desbridamiento con toma de muestras y descarte de artropatía de Charcot aguda (pie rojo, caliente e hinchado sin puerta de entrada y con pulsos presentes).',
      dx_diferencial: 'Colonizacion sin infección (no tratar), artropatía de Charcot aguda, gota, trombosis venosa, dermatitis de contacto y celulitis de origen no podologico.',
      tx_medico: 'Control glucémico, desbridamiento quirúrgico precoz y amplio del tejido desvitalizado y drenaje de colecciones (no esperar a delimitar si la infección progresa), descarga de la zona y curas. La infección moderada o grave en un pie isquémico es una urgencia que combina antibiótico, desbridamiento y revascularización, no antibiótico solo.',
      tx_farmacologico: 'Antibioterapia empírica según la gravedad y los factores de riesgo de resistencias, dirigida después por el cultivo de tejido profundo: infección leve, cobertura de cocos grampositivos (Staphylococcus aureus, estreptococos) por via oral; moderada o grave, espectro ampliado a gramnegativos y anaerobios (y cobertura de SARM si hay factores de riesgo), inicialmente por via parenteral. Duración de 1 a 2 semanas en partes blandas y de 3 a 6 semanas o más en osteomielitis, o menos si se reseca todo el hueso infectado. Actualizar la profilaxis antitetanica.',
      tx_intervencionista: 'Desbridamiento o drenaje urgente, revascularización para que la herida y la infección puedan resolverse (una infección del pie en una extremidad isquémica no cura sin restaurar flujo), amputaciones menores (dedo, radio, transmetatarsiana) para el control del foco preservando un pie funcional y amputación mayor si hay sepsis incontrolable o destrucción extensa.',
      criterios_uci: 'Sepsis o choque séptico de origen podologico e infección necrosante.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Respuesta clínica y de los reactantes de fase aguda, ajuste del antibiótico por cultivo, planificación conjunta de la revascularización y la cirugía del pie, y control glucémico.',
      seguimiento_ambulatorio: 'Curas y descarga hasta la cicatrización, calzado terapéutico y plantillas, educación y autoexploracion diaria del pie, revisión podologica periódica para prevenir la recurrencia (que es alta), completar y vigilar el tratamiento de la osteomielitis y control estricto de la diabetes y del resto de factores de riesgo.',
      pronostico: 'Con revascularización, desbridamiento y antibiótico dirigido, la mayoría de las infecciones leves y moderadas curan y se preserva un pie funcional; la infección grave sobre pie isquémico y la osteomielitis extensa son las que más se asocian a amputación mayor. La recurrencia de la úlcera es frecuente y exige prevención de por vida.',
      algoritmo: ['Úlcera o herida del pie mal perfundida con dos o más signos inflamatorios locales o pus: infección; no cultivar heridas sin signos de infección', 'Graduar la gravedad (IWGDF/IDSA), buscar osteomielitis (probe-to-bone, radiografía o resonancia) y valorar la isquemia (WIfI)', 'Infección moderada o grave en pie isquémico: urgencia; antibiótico empírico más desbridamiento o drenaje precoz más planificar revascularización', 'Dirigir el antibiótico por cultivo de tejido profundo; de 1 a 2 semanas en partes blandas y de 3 a 6 semanas en osteomielitis', 'Revascularizar para que cure; amputaciones menores para el control del foco; calzado, descarga y revisión podologica para prevenir la recurrencia']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El ingreso por EAP se produce casi siempre por isquemia que amenaza la extremidad (crónica o aguda) o por infección del pie. El seguimiento intrahospitalario se centra en asegurar y vigilar la perfusión tras la revascularización, prevenir y tratar el síndrome de reperfusión, controlar la infección, y no perder la oportunidad de optimizar el tratamiento médico de prevención cardiovascular, sistemáticamente infrautilizado en esta población.',
    parametros: ['Exploración neurovascular seriada de la extremidad (pulsos, relleno capilar, sensibilidad, fuerza, temperatura) y de las heridas de fasciotomia si las hay', 'ITB o presiones de tobillo y de dedo y duplex de control tras la revascularización', 'Potasio, creatina-cinasa, mioglobina, función renal, gasometría y diuresis en la isquemia aguda revascularizada (síndrome de reperfusión)', 'Reactantes de fase aguda, cultivos y respuesta clínica de la infección del pie', 'Régimen antitrombótico según el procedimiento (heparina, doble antiagregación, ácido acetilsalicílico con rivaroxabán a dosis vascular) y anticoagulación de la fibrilación auricular si la causa fue embólica'],
    criterios_uci_general: 'Isquemia arterial aguda revascularizada (anticoagulación, vigilancia horaria, riesgo de reperfusión), sepsis de origen podologico, o inestabilidad cardiaca o renal periprocedimiento.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: cese del tabaquismo (el factor de riesgo más potente y más modificable), control de la presión arterial, de la diabetes y de los lípidos, y actividad física. Secundaria, una vez diagnosticada la EAP: estatina de alta intensidad con objetivo de cLDL menor de 55 mg/dL, antiagregante simple (clopidogrel preferido) o ácido acetilsalicílico con rivaroxabán 2.5 mg cada 12 horas si el riesgo isquémico es alto, control de presión arterial menor de 130/80, y cuidado estructurado de los pies en el paciente diabético o con isquemia previa, que previene la mayoría de las úlceras y amputaciones. La detección con ITB dirigida a grupos de riesgo permite iniciar esta prevención antes de que aparezcan los síntomas.'
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
  'EAP asintomática (marcador de aterosclerosis sistémica)': { definicion: [1, 2, 8, 9], criterios_dx: [1, 2, 8, 9], laboratorio: [1, 2, 8, 9], tx_farmacologico: [1, 2, 8, 9] },
  'Claudicación intermitente': { definicion: [1, 2, 4, 13], criterios_dx: [1, 2, 4, 13], laboratorio: [1, 2, 4, 13], tx_farmacologico: [1, 2, 4, 13] },
  'Isquemia crónica que amenaza la extremidad': { definicion: [5, 2, 14, 6], criterios_dx: [5, 2, 14, 6], laboratorio: [5, 2, 14, 6], tx_farmacologico: [5, 2, 14, 6] },
  'Isquemia arterial aguda de la extremidad': { definicion: [16, 7, 1], criterios_dx: [16, 7, 1], laboratorio: [16, 7, 1], tx_farmacologico: [16, 7, 1] },
  'Pérdida de extremidad y amputación mayor': { definicion: [5, 1, 2], criterios_dx: [5, 1, 2], laboratorio: [5, 1, 2], tx_farmacologico: [5, 1, 2] },
  'Lesión por reperfusión y síndrome compartimental': { definicion: [16, 7], criterios_dx: [16, 7], laboratorio: [16, 7], tx_farmacologico: [16, 7] },
  'Eventos cardiovasculares mayores y muerte': { definicion: [10, 9, 12, 2], criterios_dx: [10, 9, 12, 2], laboratorio: [10, 9, 12, 2], tx_farmacologico: [10, 9, 12, 2] },
  'Úlcera isquémica infectada e infección del pie': { definicion: [18, 5, 6], criterios_dx: [18, 5, 6], laboratorio: [18, 5, 6], tx_farmacologico: [18, 5, 6] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación de Fontaine': [3, 4],
  'Clasificación de Rutherford (EAP crónica)': [7],
  'WIfI (herida, isquemia e infección del pie)': [6, 5],
  'Clasificación de Rutherford de la isquemia arterial aguda': [7, 16]
};
export const escalaCalc = {
  'WIfI (herida, isquemia e infección del pie)': 'wifi',
  'Clasificación de Rutherford de la isquemia arterial aguda': 'rutherford-iaa'
};
export const compGroups = [
  { name: 'Formas clínicas', items: ['EAP asintomática (marcador de aterosclerosis sistémica)', 'Claudicación intermitente', 'Isquemia crónica que amenaza la extremidad', 'Isquemia arterial aguda de la extremidad'] },
  { name: 'Complicaciones', items: ['Pérdida de extremidad y amputación mayor', 'Lesión por reperfusión y síndrome compartimental', 'Eventos cardiovasculares mayores y muerte', 'Úlcera isquémica infectada e infección del pie'] }
];
export const complicacionesIntro = 'Las primeras 4 fichas recorren el espectro clínico de la EAP en orden de gravedad: asintomática (la forma más frecuente y el principal marcador de riesgo sistémico), claudicación intermitente (la EAP crónica sintomática), isquemia crónica que amenaza la extremidad (dolor de reposo o pérdida tisular) e isquemia arterial aguda (oclusión súbita, una emergencia). Las 4 siguientes son las complicaciones que determinan la morbimortalidad: amputación mayor, lesión por reperfusión y síndrome compartimental tras revascularizar, eventos cardiovasculares mayores (la principal causa de muerte) e infección de la úlcera isquémica.';
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
  root: { title: 'ENFERMEDAD ARTERIAL PERIFÉRICA', color: '#6e3b2e', target: 'definicion' },
  branches: [
    { title: 'Formas clínicas', sub: 'Espectro por gravedad', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'EAP asintomática', sub: 'La más frecuente; marcador de riesgo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Claudicación intermitente', sub: 'EAP crónica sintomática', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Isquemia que amenaza la extremidad', sub: 'Dolor de reposo, úlcera, gangrena', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Isquemia arterial aguda', sub: 'Oclusión súbita: emergencia', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Determinan la morbimortalidad', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Amputación mayor', sub: 'Extremidad no recuperable', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Reperfusión y compartimental', sub: 'Tras revascularizar isquemia prolongada', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Eventos cardiovasculares mayores', sub: 'Infarto, ictus, muerte: la 1a causa', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Úlcera isquémica infectada', sub: 'Infección del pie, con frecuencia diabético', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [8, 1], imagen: [1, 3] };
export const clasificacionCite = [3, 7, 6];
export const seguimientoCite = [1, 2];
