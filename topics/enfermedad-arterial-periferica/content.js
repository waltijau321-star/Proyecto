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
  titulo: 'Enfermedad Arterial Periferica',
  subtitulo: 'Modulo 34 · Medicina Interna',
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
      <title id="itb-fig-t">Medicion del indice tobillo-brazo</title>
      <desc id="itb-fig-d">Esquema de un paciente en decubito con manguito y Doppler en ambos brazos sobre las arterias braquiales y en ambos tobillos sobre las arterias pedia y tibial posterior. El indice de cada pierna es la presion sistolica de tobillo mas alta de esa pierna dividida entre la presion braquial mas alta de los dos brazos.</desc>
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
        <div style="margin-top:4px;border-bottom:1px solid var(--ink);padding-bottom:3px;">PA sistolica de tobillo mas alta de esa pierna</div>
        <div style="padding-top:3px;">PA sistolica braquial mas alta de ambos brazos</div>
      </div>
      <div style="margin-top:6px;color:var(--ink-dim);">ITB limitrofe (0.91 a 0.99): repetir con ITB de ejercicio. ITB mayor de 1.40 (arterias no compresibles): usar el indice dedo-brazo, anormal si es menor de 0.70.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:3px;text-align:center;font-size:9.5px;">
    <div style="background:#8c3a34;color:#fff;border-radius:6px 0 0 6px;padding:5px 3px;">menor o igual a 0.40<br><span style="opacity:.85;">isquemia grave</span></div>
    <div style="background:#b0673f;color:#fff;padding:5px 3px;">0.41 a 0.90<br><span style="opacity:.85;">EAP</span></div>
    <div style="background:#8a6a1f;color:#fff;padding:5px 3px;">0.91 a 0.99<br><span style="opacity:.85;">limitrofe</span></div>
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

    <div style="padding:5px 7px;border:1px solid var(--line);">I: asintomatica</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Grado 0, categoria 0</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Control de factores de riesgo, estatina de alta intensidad, antiagregante. Sin revascularizacion.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);">IIa: claudicacion no incapacitante</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Grado I, categoria 1</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Lo anterior mas ejercicio supervisado y cilostazol.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);">IIb: claudicacion incapacitante</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Grado I, categorias 2 y 3</div>
    <div style="padding:5px 7px;border:1px solid var(--line);">Lo anterior mas revascularizacion si limita el estilo de vida y falla el tratamiento conservador.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3418;">III: dolor isquemico de reposo</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3418;">Grado II, categoria 4</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3418;">Isquemia que amenaza la extremidad: revascularizacion.</div>

    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3430;border-radius:0 0 0 6px;">IV: ulcera o gangrena</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3430;">Grado III, categorias 5 y 6</div>
    <div style="padding:5px 7px;border:1px solid var(--line);background:#8c3a3430;border-radius:0 0 6px 0;">Revascularizacion urgente mas cuidado de la herida y control de la infeccion.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Las dos escalas son equivalentes; los estadios Fontaine III y IV y las categorias Rutherford 4 a 6 definen la isquemia cronica que amenaza la extremidad.</div>
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
      <li><strong>Paralysis</strong>: paralisis (tardia y ominosa)</li>
    </ul>
  </div>
  <div style="flex:1.5;min-width:240px;">
    <div style="font-weight:700;color:var(--accent-fg);margin-bottom:4px;">Rutherford de la isquemia arterial aguda</div>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:2px;">
      <div style="background:#3f6b52;color:#fff;padding:4px 6px;border-radius:5px 0 0 0;font-weight:700;">I</div>
      <div style="border:1px solid var(--line);padding:4px 6px;border-radius:0 5px 0 0;">Viable. Sensibilidad y fuerza conservadas; Doppler arterial y venoso audibles. Anticoagular, estudiar, revascularizacion programada-urgente.</div>
      <div style="background:#8a6a1f;color:#fff;padding:4px 6px;font-weight:700;">IIa</div>
      <div style="border:1px solid var(--line);padding:4px 6px;">Marginalmente amenazada. Perdida sensitiva minima en los dedos o nula, sin debilidad; arterial a menudo inaudible, venoso audible. Trombolisis dirigida por cateter o trombectomia.</div>
      <div style="background:#b0673f;color:#fff;padding:4px 6px;font-weight:700;">IIb</div>
      <div style="border:1px solid var(--line);padding:4px 6px;">Inmediatamente amenazada. Perdida sensitiva mas alla de los dedos con dolor de reposo, debilidad leve o moderada; arterial inaudible, venoso audible. Revascularizacion quirurgica urgente, sin demora por la imagen.</div>
      <div style="background:#8c3a34;color:#fff;padding:4px 6px;border-radius:0 0 0 5px;font-weight:700;">III</div>
      <div style="border:1px solid var(--line);padding:4px 6px;border-radius:0 0 5px 0;">Irreversible. Anestesia y paralisis con rigidez; arterial y venoso inaudibles. Amputacion primaria.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La enfermedad arterial periferica (EAP) es la enfermedad aterosclerotica oclusiva de las arterias que irrigan las extremidades, casi siempre las inferiores, fuera de los lechos coronario e intracraneal. El criterio diagnostico operativo es un indice tobillo-brazo (ITB) en reposo menor o igual a 0.90. Es a la vez un problema de la extremidad, que abarca desde la forma asintomatica hasta la amputacion, y sobre todo un marcador potente de aterosclerosis sistemica y de riesgo de infarto de miocardio, ictus y muerte cardiovascular.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El espectro clinico, en orden de gravedad.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>EAP asintomatica</strong>: la forma mas frecuente; ITB bajo sin sintomas de esfuerzo limitantes, pero con el mismo exceso de riesgo cardiovascular que la forma sintomatica.</li>
    <li><strong>Claudicacion intermitente</strong>: dolor muscular reproducible con la marcha que obliga a detenerse y cede en menos de 10 minutos de reposo de pie; la EAP cronica sintomatica.</li>
    <li><strong>Isquemia cronica que amenaza la extremidad</strong>: dolor isquemico de reposo de mas de 2 semanas, ulcera que no cura o gangrena; sustituye al termino "isquemia critica".</li>
    <li><strong>Isquemia arterial aguda</strong>: descenso brusco de la perfusion que amenaza la viabilidad de la extremidad en horas; una emergencia vascular.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El diagnostico se ancla en el indice tobillo-brazo.</strong>${figBlock('Figura 1', 'Tecnica e interpretacion del indice tobillo-brazo', itbHtml)} El ITB de reposo menor o igual a 0.90 confirma la EAP; el rango 0.91 a 0.99 es limitrofe y obliga a un ITB de ejercicio; un ITB mayor de 1.40 traduce arterias no compresibles por calcinosis de la media, frecuente en diabetes y enfermedad renal cronica, y exige recurrir al indice dedo-brazo.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> El tabaquismo es el factor de riesgo mas potente y mas modificable; la diabetes es la que mas se asocia a progresion hacia la isquemia que amenaza la extremidad y a amputacion. Las complicaciones que determinan la morbimortalidad (amputacion mayor, lesion por reperfusion y sindrome compartimental tras revascularizar, eventos cardiovasculares mayores y la infeccion de la ulcera isquemica) se desarrollan en Complicaciones; en la mayoria de los pacientes el riesgo de un evento cardiovascular supera al de un evento en la extremidad.</p>`;

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
      tituloA: 'EAP cronica (asintomatica o claudicacion)',
      tituloB: 'Isquemia que amenaza la extremidad (cronica o aguda)',
      compensada: 'ITB menor o igual a 0.90 con la extremidad viable: sin sintomas, con sintomas atipicos de la pierna, o con claudicacion intermitente (dolor muscular reproducible al caminar que cede en menos de 10 minutos de reposo de pie). En la exploracion, pulsos disminuidos o ausentes distales a la lesion, soplos femorales, perdida de vello, unas distroficas, frialdad y palidez con la elevacion. Historia natural relativamente estable en la extremidad.',
      descompensada: 'Dolor isquemico de reposo del antepie de mas de 2 semanas que empeora en decubito y mejora al colgar la pierna, ulcera que no cura o gangrena (isquemia cronica que amenaza la extremidad), o instauracion brusca de dolor, palidez, ausencia de pulso, parestesias, frialdad y paralisis (isquemia arterial aguda). Ambas amenazan la viabilidad de la extremidad y obligan a valoracion vascular urgente.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayunas y HbA1c', utilidad: 'Cribado y control de diabetes, el factor de riesgo mas asociado a progresion hacia la isquemia que amenaza la extremidad y a amputacion.' },
      { prueba: 'Perfil lipidico', utilidad: 'Objetivo de cLDL menor de 55 mg/dL y reduccion de al menos el 50% con estatina de alta intensidad; considerar una determinacion de lipoproteina(a).' },
      { prueba: 'Creatinina y filtrado glomerular', utilidad: 'La enfermedad renal cronica agrava el pronostico de la extremidad y condiciona el uso de contraste yodado y de gadolinio en la imagen.' },
      { prueba: 'Hemograma', utilidad: 'La anemia y la trombocitosis empeoran la isquemia; la leucocitosis orienta a infeccion del pie.' },
      { prueba: 'Creatina-cinasa, potasio, mioglobina y lactato', utilidad: 'En la isquemia aguda y tras la revascularizacion: vigilan la rabdomiolisis y el sindrome de reperfusion (hiperpotasemia, lesion renal aguda, acidosis).' },
      { prueba: 'Estudio de trombofilia o vasculitis y anticuerpos anti-PF4', utilidad: 'Solo ante un cuadro atipico (paciente joven sin factores de riesgo, territorios inusuales) o sospecha de trombocitopenia inducida por heparina antes de administrar mas heparina.' }
    ],
    no_invasivos: [
      { metodo: 'Indice tobillo-brazo (ITB) en reposo', interpretacion: 'Cociente entre la presion sistolica de tobillo mas alta de cada pierna y la presion braquial mas alta de ambos brazos. Prueba diagnostica de primera linea (calculadora disponible).', cutoff: 'Menor o igual a 0.90 diagnostico de EAP; 0.91 a 0.99 limitrofe; 1.00 a 1.40 normal; mayor de 1.40 no compresible' },
      { metodo: 'ITB de ejercicio en banda sin fin', interpretacion: 'Cuando el ITB de reposo es normal o limitrofe pero la sospecha de claudicacion es alta; tambien objetiva la limitacion funcional.', cutoff: 'Caida de al menos el 20% del ITB o de al menos 30 mmHg de la presion de tobillo tras el esfuerzo indica EAP' },
      { metodo: 'Indice dedo-brazo (presion del hallux)', interpretacion: 'Alternativa cuando las arterias del tobillo no son compresibles (ITB mayor de 1.40), frecuente en diabetes y enfermedad renal cronica; las arterias digitales rara vez se calcifican.', cutoff: 'Menor de 0.70 anormal; presion absoluta del dedo menor de 30 mmHg apoya isquemia que amenaza la extremidad' },
      { metodo: 'Presiones segmentarias y registro de volumen de pulso', interpretacion: 'Localizan el nivel de la enfermedad (aortoiliaco, femoropopliteo o infrapopliteo) sin necesidad de imagen.', cutoff: 'Gradiente mayor de 20 mmHg entre segmentos adyacentes o entre el mismo nivel de ambas piernas indica estenosis significativa' },
      { metodo: 'Presion transcutanea de oxigeno (TcPO2)', interpretacion: 'Cuantifica la perfusion cutanea y predice la cicatrizacion de heridas y del nivel de amputacion.', cutoff: 'Menor de 30 mmHg apoya isquemia que amenaza la extremidad y baja probabilidad de cicatrizacion' }
    ],
    imagen: [
      { modalidad: 'Eco-Doppler duplex arterial', hallazgos: 'Primera linea no invasiva para mapear estenosis y oclusiones: aumento de la velocidad sistolica pico en la estenosis y onda monofasica distal. Sin radiacion ni contraste; operador dependiente y limitado en el eje aortoiliaco por gas y obesidad.' },
      { modalidad: 'Angiotomografia', hallazgos: 'Buena resolucion de todo el arbol arterial desde la aorta; el calcio de la media en diabetes y enfermedad renal puede sobrestimar u ocultar estenosis en los vasos infrapopliteos. Requiere contraste yodado.' },
      { modalidad: 'Angiorresonancia', hallazgos: 'Sin radiacion ni yodo; tiende a sobrestimar el grado de estenosis y no valora bien los stents. Evitar el gadolinio con filtrado glomerular muy bajo.' },
      { modalidad: 'Arteriografia por sustraccion digital', hallazgos: 'Patron de referencia y la unica que visualiza con fiabilidad la circulacion del pie (arterias pedia y plantar); invasiva, se reserva para el mismo acto de la revascularizacion endovascular.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La EAP cronica se clasifica por la gravedad clinica con dos escalas equivalentes y complementarias, Fontaine (I a IV) y Rutherford (grados 0 a 6 / categorias 0 a 6), que orientan la conducta. La isquemia cronica que amenaza la extremidad se estratifica ademas con la clasificacion WIfI, que integra la herida, la isquemia y la infeccion del pie. La isquemia arterial aguda tiene su propia clasificacion de Rutherford (I a III), que dicta la urgencia y el tipo de revascularizacion.${figBlock('Figura 2', 'Correspondencia Fontaine, Rutherford y conducta', fontaineRutherfordHtml)}`,
    escalas: [
      { nombre: 'Clasificacion de Fontaine', componentes: 'Estadio I asintomatica; IIa claudicacion no incapacitante; IIb claudicacion incapacitante; III dolor isquemico de reposo; IV ulcera o gangrena.', formula: 'Estadio clinico I a IV (ver Figura 2).', interpretacion: 'Los estadios III y IV corresponden a isquemia cronica que amenaza la extremidad e indican revascularizacion.' },
      { nombre: 'Clasificacion de Rutherford (EAP cronica)', componentes: 'Grado 0 asintomatica; grado I (categorias 1 a 3) claudicacion leve, moderada y grave; grado II (categoria 4) dolor isquemico de reposo; grado III (categorias 5 y 6) perdida tisular menor y mayor.', formula: 'Grado 0 a III / categoria 0 a 6 (ver Figura 2).', interpretacion: 'Equivale a la de Fontaine; las categorias 4 a 6 definen la isquemia cronica que amenaza la extremidad.' },
      { nombre: 'WIfI (herida, isquemia e infeccion del pie)', componentes: 'Tres ejes graduados de 0 a 3: Wound (herida o gangrena), Ischemia (ITB, presion de tobillo o de dedo, TcPO2) y foot Infection (segun IWGDF/IDSA). Calculadora disponible.', formula: 'W 0-3, I 0-3, fI 0-3; la matriz original combina los tres ejes en estadios de riesgo 1 a 4.', interpretacion: 'A mayor grado de cualquiera de los tres ejes, mayor riesgo de amputacion al ano y mayor beneficio esperado de la revascularizacion.' },
      { nombre: 'Clasificacion de Rutherford de la isquemia arterial aguda', componentes: 'Perdida sensitiva, debilidad motora y senales Doppler arterial y venosa.', formula: 'Categoria I viable; IIa marginalmente amenazada; IIb inmediatamente amenazada; III irreversible (ver Figura 3). Calculadora disponible.', interpretacion: 'I: revascularizacion programada-urgente. IIa: trombolisis dirigida por cateter o trombectomia. IIb: revascularizacion quirurgica urgente sin demora. III: amputacion primaria.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'EAP asintomatica (marcador de aterosclerosis sistemica)',
      color: '#3f6b52',
      definicion: 'Forma mas frecuente de EAP: estenosis u oclusion aterosclerotica de las arterias de los miembros, habitualmente los inferiores, con ITB menor o igual a 0.90 pero sin sintomas de esfuerzo limitantes, ya sea porque el paciente no camina lo suficiente para provocarlos o porque tiene circulacion colateral adecuada. No es una forma benigna: conlleva el mismo exceso de riesgo cardiovascular sistemico que la EAP sintomatica.',
      fisiopatologia: 'La aterosclerosis de la intima y la media genera placas en el eje aortoiliaco, femoropopliteo e infrapopliteo; una estenosis puede ser hemodinamicamente significativa y aun asi permitir un flujo de reposo suficiente, sobre todo si hay colaterales bien desarrolladas. El mismo proceso esta activo de forma simultanea en los lechos coronario y carotideo (enfermedad polivascular), lo que explica que el pronostico lo marque el riesgo de infarto e ictus mas que el de la extremidad.',
      epidemiologia: 'Hasta la mitad o mas de los pacientes con ITB menor o igual a 0.90 no refieren claudicacion clasica. La prevalencia global se estima en unos 200 millones de personas y aumenta con la edad, superando el 15 al 20% por encima de los 70 a 80 anos. Esta infradiagnosticada porque no se busca de forma sistematica.',
      factores_riesgo: ['Tabaquismo (el factor de riesgo mas potente para la EAP, con un riesgo relativo mayor que para la enfermedad coronaria)', 'Diabetes mellitus (la que mas se asocia a isquemia que amenaza la extremidad y a amputacion)', 'Edad avanzada y sexo masculino', 'Hipertension arterial y dislipidemia (cLDL y lipoproteina(a) altas, cHDL bajo)', 'Enfermedad renal cronica, hiperhomocisteinemia e inflamacion cronica'],
      clinica: 'Asintomatica por definicion, o con sintomas atipicos de la pierna que no cumplen el patron de claudicacion clasica (no siempre aparecen con el ejercicio, no siempre ceden en menos de 10 minutos de reposo de pie). En la exploracion: pulsos disminuidos o ausentes, soplos femorales, perdida de vello, unas distroficas, frialdad, palidez con la elevacion e hiperemia reactiva con el declive, relleno capilar y venoso lentos.',
      criterios_dx: 'ITB en reposo menor o igual a 0.90 en cualquiera de las dos piernas, con la tecnica correcta (presion de tobillo mas alta de esa pierna dividida entre la braquial mas alta). ITB de 0.91 a 0.99 limitrofe: repetir con ITB de ejercicio. ITB mayor de 1.40 no compresible: usar el indice dedo-brazo, anormal si es menor de 0.70.',
      laboratorio: 'Glucemia y HbA1c, perfil lipidico y creatinina con filtrado glomerular para clasificar el riesgo y fijar objetivos; no existe un biomarcador diagnostico.',
      imagen: 'No es necesaria para el diagnostico de la EAP asintomatica; el eco-Doppler duplex solo si se plantea otra cosa (aneurisma, sospecha de causa no aterosclerotica).',
      complementarios: 'Cribado con ITB dirigido, no poblacional universal: considerar en mayores de 65 anos, en personas de 50 a 64 con factores de riesgo (tabaquismo, diabetes) o antecedente familiar de EAP, y en menores de 50 con diabetes y otro factor de riesgo; tambien en todo paciente con aterosclerosis conocida en otro territorio o con una herida del pie que no cura.',
      dx_diferencial: 'Causas no ateroscleroticas de ITB bajo, mucho menos frecuentes: tromboangeitis obliterante (enfermedad de Buerger) en fumador joven, vasculitis de grandes vasos, coartacion, displasia fibromuscular, atrapamiento de la arteria poplitea, arteriopatia por radiacion, embolias de colesterol.',
      tx_medico: 'La prevencion sistemica es identica a la de la EAP sintomatica; no se revasculariza una EAP asintomatica. Cese absoluto del tabaquismo, actividad fisica regular, dieta cardiosaludable, control de la presion arterial con objetivo menor de 130/80 en la mayoria, control glucemico y vacunacion antigripal.',
      tx_farmacologico: 'Estatina de alta intensidad con objetivo de cLDL menor de 55 mg/dL y reduccion de al menos el 50%. Antiagregante simple: clopidogrel 75 mg (preferido sobre el acido acetilsalicilico segun el subgrupo de EAP de CAPRIE) o acido acetilsalicilico 75 a 100 mg; en la EAP asintomatica aislada el beneficio neto del antiagregante es menos claro y se individualiza. IECA o ARA-II para el control de la presion arterial y la reduccion de eventos; en diabetes, priorizar los iSGLT2 y los agonistas del receptor de GLP-1 con beneficio cardiovascular probado.',
      tx_intervencionista: 'Ninguno. La revascularizacion no esta indicada sin sintomas limitantes ni amenaza de la extremidad.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica (manejo ambulatorio).',
      seguimiento_ambulatorio: 'Reforzar el cese tabaquico y la adherencia; repetir el ITB si aparecen sintomas o cambia la exploracion; vigilancia activa de enfermedad coronaria y carotidea; cuidado estructurado de los pies en el paciente diabetico. Vigilar la progresion a claudicacion o a isquemia que amenaza la extremidad y el riesgo de eventos cardiovasculares mayores (ver esas tarjetas).',
      pronostico: 'La mayoria permanece estable en la extremidad durante anos; el pronostico vital lo marca el riesgo cardiovascular sistemico (ver Eventos cardiovasculares mayores y muerte).',
      algoritmo: ['Factor de riesgo o exploracion anormal: solicitar ITB en reposo', 'ITB menor o igual a 0.90 sin sintomas limitantes: EAP asintomatica', 'ITB de 0.91 a 0.99: ITB de ejercicio. ITB mayor de 1.40: indice dedo-brazo', 'Tratamiento medico de prevencion sistemica identico al de la EAP sintomatica; no revascularizar', 'Vigilar progresion a claudicacion o isquemia que amenaza la extremidad y los eventos cardiovasculares']
    },
    {
      nombre: 'Claudicacion intermitente',
      color: '#3d5a73',
      definicion: 'EAP cronica sintomatica: dolor, calambre o fatiga de un grupo muscular de la extremidad inferior (la pantorrilla es lo mas tipico; el muslo o el gluteo si la enfermedad es aortoiliaca) que aparece de forma reproducible con la marcha a una distancia relativamente constante, obliga a detenerse y cede en menos de 10 minutos de reposo de pie. Traduce un desajuste entre el aporte y la demanda de oxigeno del musculo en ejercicio por una estenosis proximal.',
      fisiopatologia: 'En reposo el flujo distal a la estenosis es suficiente; con el ejercicio, la vasodilatacion del lecho muscular no puede traducirse en mas flujo porque la estenosis fija lo limita, de modo que aparecen hipoperfusion, metabolismo anaerobio, acumulacion de metabolitos y activacion de aferentes nociceptivos musculares, con dolor que obliga a parar; al cesar el ejercicio la demanda cae y el dolor se resuelve. Contribuyen ademas la disfuncion endotelial, la alteracion de la microcirculacion y del metabolismo mitocondrial y del tipo de fibra del musculo, y una miopatia isquemica que puede persistir pese a la revascularizacion. La localizacion del dolor orienta al nivel de la lesion: gluteo o muslo indica enfermedad aortoiliaca; pantorrilla, femoropoplitea; pie, infrapoplitea.',
      epidemiologia: 'Solo una minoria de los pacientes con EAP tiene claudicacion clasica (aproximadamente entre el 10 y el 35%). La prevalencia de claudicacion ronda el 3 al 6% a los 60 anos y aumenta con la edad. La historia natural de la extremidad es relativamente benigna: la mayoria se mantiene estable o mejora y solo alrededor del 1 al 3% por ano progresa a isquemia que amenaza la extremidad, mas si hay diabetes o tabaquismo activo.',
      factores_riesgo: ['Tabaquismo (el factor de riesgo mas fuerte para la EAP)', 'Diabetes mellitus (la que mas se asocia a progresion y amputacion)', 'Edad avanzada', 'Hipertension arterial', 'Dislipidemia, en particular cLDL y lipoproteina(a) altas y cHDL bajo', 'Enfermedad renal cronica, hiperhomocisteinemia e inflamacion (proteina C reactiva elevada)'],
      clinica: 'Claudicacion reproducible como se ha definido; empeora al caminar cuesta arriba o al apresurar el paso. El grado de limitacion funcional y el impacto en la vida diaria y laboral guian la indicacion de revascularizacion. En la exploracion: pulsos disminuidos o ausentes distales a la lesion, soplos, cambios troficos, ITB bajo que cae aun mas tras el ejercicio. Se apoyan en cuestionarios (Edinburgh) y en pruebas funcionales (distancia de claudicacion en banda sin fin, prueba de marcha de 6 minutos).',
      criterios_dx: 'Cuadro clinico compatible mas ITB en reposo menor o igual a 0.90; si el ITB de reposo es normal o limitrofe y la sospecha es alta, ITB de ejercicio (caida de al menos el 20% del ITB o de al menos 30 mmHg de la presion de tobillo tras el esfuerzo). Presiones segmentarias y registro de volumen de pulso para localizar el nivel. La imagen (duplex, angiotomografia, angiorresonancia o arteriografia) solo si se plantea revascularizacion.',
      laboratorio: 'Glucemia y HbA1c, perfil lipidico, creatinina con filtrado glomerular y hemograma; considerar una determinacion de lipoproteina(a). Estudio de trombofilia o vasculitis solo si el cuadro es atipico (paciente joven, sin factores de riesgo, territorios inusuales).',
      imagen: 'Eco-Doppler duplex arterial como primera linea no invasiva para mapear estenosis y oclusiones; angiotomografia (buena para el eje aortoiliaco, limitada por el calcio en los vasos infrapopliteos); angiorresonancia (sin radiacion ni yodo, sobrestima estenosis); arteriografia por sustraccion digital, invasiva, reservada para el mismo acto de la revascularizacion endovascular.',
      complementarios: 'Cribado de aneurisma de aorta abdominal con ecografia una vez en varones de 65 anos o mas que hayan fumado, por su frecuente coexistencia; evaluacion de enfermedad coronaria y carotidea guiada por sintomas.',
      dx_diferencial: 'Pseudoclaudicacion por estenosis del canal lumbar (dolor con la bipedestacion y la marcha que cede al sentarse o flexionar el tronco, no al detenerse de pie, con distancia variable), claudicacion venosa (edema, dolor que cede despacio con la elevacion, antecedente de trombosis venosa profunda), sindrome compartimental cronico de esfuerzo (atletas jovenes), artrosis de cadera o rodilla, radiculopatia, quiste de Baker, atrapamiento de la arteria poplitea (joven con pantorrillas hipertroficas).',
      tx_medico: 'Dos objetivos: prevenir eventos y mejorar la capacidad de marcha. Cese absoluto del tabaquismo, la intervencion que mas modifica la evolucion. Ejercicio supervisado (programa estructurado de 30 a 45 minutos, tres veces por semana, durante al menos 12 semanas, caminando hasta un dolor casi maximo, descansar y repetir): es la primera linea para los sintomas y mejora la distancia de marcha tanto o mas que la angioplastia en la enfermedad aortoiliaca (CLEVER) y femoropoplitea; si no hay programa supervisado, ejercicio estructurado en casa con objetivos y podometro. Control de la presion arterial con objetivo menor de 130/80 (los betabloqueadores no estan contraindicados en la EAP), control glucemico y dieta.',
      tx_farmacologico: 'Estatina de alta intensidad con objetivo de cLDL menor de 55 mg/dL y reduccion de al menos el 50% (anadir ezetimiba y luego un inhibidor de PCSK9 si no se alcanza). Antiagregante simple: clopidogrel 75 mg (preferido sobre el acido acetilsalicilico por el subgrupo de EAP de CAPRIE) o acido acetilsalicilico 75 a 100 mg. Alternativa de mayor potencia antitrombotica: acido acetilsalicilico 100 mg mas rivaroxaban 2.5 mg cada 12 horas (dosis vascular, COMPASS) en pacientes con riesgo isquemico alto y bajo riesgo hemorragico, que reduce eventos cardiovasculares y de la extremidad a costa de mas sangrado. Cilostazol 100 mg cada 12 horas para los sintomas de claudicacion (inhibidor de la fosfodiesterasa 3, vasodilatador y antiagregante), contraindicado en cualquier grado de insuficiencia cardiaca; efectos adversos: cefalea, palpitaciones, diarrea. La pentoxifilina no se recomienda. IECA o ARA-II. En diabetes, iSGLT2 y agonistas del receptor de GLP-1 con beneficio cardiovascular.',
      tx_intervencionista: 'Revascularizacion (endovascular o quirurgica) para la claudicacion solo si limita el estilo de vida o el trabajo, no ha respondido a un ensayo adecuado de ejercicio y tratamiento medico, y la anatomia es favorable. Endovascular de primera eleccion en la enfermedad aortoiliaca y en la femoropoplitea focal (angioplastia con balon con stent o sin el, balon farmacoactivo); derivacion quirurgica (bypass) para oclusiones femoropopliteas largas o cuando falla lo endovascular, preferentemente con vena safena. En la claudicacion, la revascularizacion mejora los sintomas pero no reduce el riesgo de amputacion ni de eventos cardiovasculares.',
      criterios_uci: 'No aplica a la claudicacion estable.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma caracteristica (manejo ambulatorio).',
      seguimiento_ambulatorio: 'ITB y valoracion funcional periodicos; vigilancia clinica y con duplex de los injertos de bypass (al mes, a los 3, 6 y 12 meses y luego anual) y de los stents seleccionados; reforzar el ejercicio, el cese tabaquico y la adherencia al tratamiento medico; educacion en cuidado de los pies. Vigilar activamente la progresion a dolor de reposo o perdida tisular (ver Isquemia cronica que amenaza la extremidad) y el desarrollo de isquemia aguda por trombosis sobre la placa o del injerto o stent (ver Isquemia arterial aguda de la extremidad).',
      pronostico: 'La extremidad suele mantenerse estable: a 5 anos, alrededor del 70 al 80% sin cambios o mejor con tratamiento, un 5 al 10% requiere revascularizacion y un 1 al 5% amputacion, mas en diabeticos y fumadores activos. El pronostico vital lo determina el riesgo cardiovascular: a 5 anos, cerca del 20% de infarto o ictus no mortal y del 15 al 30% de mortalidad, mayoritariamente cardiovascular (ver Eventos cardiovasculares mayores y muerte).',
      algoritmo: ['Dolor de pantorrilla, muslo o gluteo reproducible con la marcha que cede en menos de 10 minutos de reposo de pie: sospechar claudicacion', 'ITB en reposo menor o igual a 0.90 confirma; si es normal o limitrofe con sospecha alta, ITB de ejercicio', 'Cese tabaquico mas estatina de alta intensidad mas antiagregante mas control de presion arterial y glucemia en todos', 'Ejercicio supervisado durante al menos 12 semanas como primera linea para los sintomas; anadir cilostazol si no hay insuficiencia cardiaca', 'Revascularizacion solo si limita el estilo de vida y falla el tratamiento conservador, con anatomia favorable (endovascular de primera eleccion)']
    },
    {
      nombre: 'Isquemia cronica que amenaza la extremidad',
      color: '#8c3a34',
      definicion: 'Evolucion mas grave de la EAP cronica (ver Claudicacion intermitente): dolor isquemico de reposo del antepie o los dedos, tipicamente nocturno y que mejora al colgar la pierna, de mas de 2 semanas de evolucion, o perdida tisular (ulcera que no cura, gangrena) atribuible a enfermedad arterial oclusiva objetivada. Sustituye al termino "isquemia critica" e incorpora la valoracion de la herida y de la infeccion mediante la clasificacion WIfI, no solo el grado de isquemia.',
      fisiopatologia: 'Sobre la enfermedad oclusiva cronica multinivel ya descrita en la tarjeta de claudicacion, la presion de perfusion distal cae por debajo del umbral necesario para mantener la nutricion tisular en reposo. Se suman la microangiopatia (sobre todo en diabetes y enfermedad renal cronica), el edema, la infeccion y la neuropatia, que retrasa la consulta al hacer indoloras las ulceras, cerrando un circulo de isquemia, lesion e infeccion. Lo que distingue a esta forma de la claudicacion, que suele ser monosegmentaria, es la enfermedad oclusiva multinivel con afectacion frecuente del sector infrapopliteo y del pie.',
      epidemiologia: 'Representa una minoria de la EAP (alrededor del 1 al 3% de los claudicantes progresa por ano), pero concentra la morbilidad: sin revascularizacion, a 1 ano se asocia a cerca del 20% de mortalidad y del 20 al 25% de amputacion mayor. La diabetes, la enfermedad renal cronica en dialisis, el tabaquismo activo y la edad avanzada son los grandes determinantes.',
      factores_riesgo: ['Diabetes mellitus (el factor mas asociado a esta forma y a amputacion)', 'Enfermedad renal cronica avanzada o en dialisis', 'Tabaquismo activo', 'Edad avanzada', 'Enfermedad infrapoplitea y ITB muy bajo', 'Neuropatia y deformidad del pie'],
      clinica: 'Dolor de reposo del antepie que empeora en decubito y con la elevacion y mejora con la pierna en declive (el paciente duerme sentado o con el pie fuera de la cama); ulceras isquemicas de borde seco, fondo palido y muy dolorosas en zonas acras o de presion; gangrena seca o humeda; palidez con la elevacion, rubor de declive, atrofia y ausencia de pulsos. Buscar signos de infeccion asociada (ver Ulcera isquemica infectada e infeccion del pie).',
      criterios_dx: 'Cuadro clinico mas confirmacion hemodinamica de isquemia: presion de tobillo menor de 50 mmHg, presion de dedo menor de 30 mmHg, TcPO2 menor de 30 mmHg, o indice dedo-brazo muy bajo. En diabetes las presiones de tobillo pueden ser falsamente altas por calcinosis, por lo que se usan la presion del dedo y la TcPO2. Estratificar con WIfI e imagen arterial de todo el eje, de la aorta al pie, para planear la revascularizacion.',
      laboratorio: 'HbA1c, funcion renal (contraste), hemograma, proteina C reactiva y procalcitonina con cultivos si hay infeccion, albumina como marcador nutricional y de cicatrizacion, y estudio de coagulacion.',
      imagen: 'Eco-Doppler duplex mas angiotomografia o angiorresonancia; arteriografia por sustraccion digital con visualizacion de la circulacion del pie (arterias pedia y plantar) para la planificacion. El concepto de angiosoma orienta la revascularizacion hacia la arteria que irriga la zona de la herida.',
      complementarios: 'Valoracion por un equipo multidisciplinar del pie (cirugia vascular, endocrinologia, infectologia, cirugia plastica u ortopedica, enfermeria de heridas); radiografia o resonancia del pie si se sospecha osteomielitis.',
      dx_diferencial: 'Ulceras de otra etiologia: venosa (maleolar, exudativa, poco dolorosa, con lipodermatoesclerosis), neuropatica pura (en punto de presion, indolora, con pulsos presentes), por presion, vasculitica, pioderma gangrenoso, calcifilaxis en enfermedad renal cronica. Tambien el dolor neuropatico de reposo sin isquemia, con pulsos y presiones normales.',
      tx_medico: 'Tratamiento medico sistemico intensivo como en toda EAP (estatina de alta intensidad, antiagregante o acido acetilsalicilico con rivaroxaban a dosis vascular, control de presion arterial y glucemia, cese tabaquico); analgesia; cuidado de la herida y descarga; control de la infeccion (ver la tarjeta correspondiente); optimizacion nutricional. El tratamiento medico aislado no salva la extremidad: esta forma es indicacion de revascularizacion salvo que sea inviable o el paciente no sea candidato.',
      tx_farmacologico: 'Ademas del tratamiento sistemico, tras la revascularizacion infrainguinal considerar acido acetilsalicilico mas rivaroxaban 2.5 mg cada 12 horas (VOYAGER PAD, que reduce los eventos de la extremidad, incluidas la trombosis aguda y la amputacion). Doble antiagregacion tras algunas intervenciones endovasculares, individualizada. Los prostanoides solo si la revascularizacion no es posible, como medida paliativa de eficacia limitada.',
      tx_intervencionista: 'Revascularizacion urgente, en dias y no en semanas, para restaurar flujo en linea directa al pie. Eleccion entre endovascular y bypass segun BEST-CLI: en pacientes candidatos a bypass con vena safena interna adecuada, el bypass tuvo menos eventos adversos mayores en la extremidad (sobre todo menos reintervencion y amputacion); sin vena adecuada o con alto riesgo quirurgico, endovascular. Amputacion primaria si la extremidad no es funcionalmente recuperable (necrosis extensa, sepsis incontrolable, paciente no deambulante con contracturas).',
      criterios_uci: 'Sepsis de origen en el pie, isquemia aguda sobreanadida, o descompensacion cardiaca o renal periprocedimiento.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la perfusion tras la revascularizacion (pulsos, ITB o presiones, relleno de la herida), de la herida y de la infeccion, y del estado hemodinamico y renal; iniciar o reanudar el tratamiento antitrombotico segun el procedimiento.',
      seguimiento_ambulatorio: 'Vigilancia clinica y con duplex del injerto o segmento tratado (al mes, a los 3, 6 y 12 meses y luego anual); cuidado del pie de por vida; control estricto de los factores de riesgo; calzado y descarga adecuados; rerrevascularizacion precoz si hay reestenosis sintomatica.',
      pronostico: 'Con revascularizacion oportuna y cuidado de la herida, la mayoria conserva la extremidad al ano; sin revascularizacion, alrededor de 1 de cada 4 pierde la extremidad y 1 de cada 5 fallece en el primer ano. La mortalidad a 5 anos supera el 50%, mayoritariamente cardiovascular.',
      algoritmo: ['Dolor isquemico de reposo de mas de 2 semanas o ulcera o gangrena mas EAP objetivada: isquemia cronica que amenaza la extremidad', 'Confirmar la isquemia (presion de dedo menor de 30 mmHg o TcPO2 menor de 30 mmHg; usar la presion del dedo si hay calcinosis diabetica) y estratificar con WIfI', 'Imagen arterial de la aorta al pie para planear la revascularizacion', 'Revascularizacion urgente: bypass con vena safena si el paciente es candidato y tiene conducto adecuado (BEST-CLI), si no endovascular', 'Cuidado de la herida, control de la infeccion y tratamiento medico sistemico intensivo; amputacion primaria solo si la extremidad no es recuperable']
    },
    {
      nombre: 'Isquemia arterial aguda de la extremidad',
      color: '#7a1f3d',
      definicion: 'Descenso brusco de la perfusion de la extremidad, en menos de 2 semanas y habitualmente en horas, que amenaza su viabilidad: una emergencia vascular. Puede ocurrir sobre una arteria previamente sana (embolia) o, con frecuencia creciente, como trombosis sobre una EAP cronica preexistente o sobre un injerto o stent (ver Claudicacion intermitente e Isquemia cronica que amenaza la extremidad).',
      fisiopatologia: `La oclusion subita no da tiempo a desarrollar colaterales, por lo que el deficit es mas grave que el de la EAP cronica del mismo nivel. Las causas se agrupan en: embolia (30 a 40%), en su mayoria cardiogenica (fibrilacion auricular, trombo mural tras un infarto, valvulopatia, endocarditis, mixoma) o arterio-arterial desde un aneurisma o placa proximal, que se aloja en las bifurcaciones (femoral comun, poplitea); y trombosis in situ, hoy la mas frecuente, sobre placa aterosclerotica rota, sobre un aneurisma popliteo trombosado, por oclusion de injerto o stent, en estados protromboticos (cancer, trombofilia, trombocitopenia inducida por heparina), por diseccion o por compresion (atrapamiento popliteo). El musculo esqueletico y el nervio toleran unas 4 a 6 horas de isquemia antes del dano irreversible.${figBlock('Figura 3', 'Las 6 P y la clasificacion de Rutherford de la isquemia aguda', isquemiaAgudaHtml)}`,
      epidemiologia: 'Incidencia aproximada de 1 a 1.5 casos por cada 10.000 personas y ano; mortalidad hospitalaria del 10 al 15%, sobre todo por la comorbilidad cardiaca y las complicaciones metabolicas de la reperfusion, y amputacion del 10 al 30% segun la categoria de Rutherford al llegar.',
      factores_riesgo: ['Fibrilacion auricular y otras fuentes cardioembolicas', 'EAP cronica avanzada', 'Injerto o stent previo en la extremidad', 'Aneurisma popliteo o aortico', 'Cancer activo y estados de hipercoagulabilidad', 'Hipovolemia o bajo gasto cardiaco', 'Trombocitopenia inducida por heparina'],
      clinica: 'Las 6 "P": Pain (dolor), Pallor (palidez), Pulselessness (ausencia de pulso), Paresthesia (parestesias), Poikilothermia (frialdad) y Paralysis (paralisis, un signo tardio y ominoso). La perdida sensitiva y motora marca la gravedad y define la categoria de Rutherford de la isquemia aguda (I a III, ver Figura 3 y la calculadora). Un inicio subito en un paciente con fibrilacion auricular y sin claudicacion previa ni cambios cronicos orienta a embolia; un inicio mas gradual con claudicacion previa, cambios troficos y enfermedad contralateral orienta a trombosis in situ.',
      criterios_dx: 'Es un diagnostico clinico; no se retrasa el tratamiento por la imagen. Doppler de mano a pie de cama para las senales arterial y venosa, que define la categoria de Rutherford. Si la extremidad es viable o marginalmente amenazada (I o IIa) y el paciente esta estable, angiotomografia o arteriografia para planificar; en la IIb no se retrasa la revascularizacion por la imagen y se completa en quirofano o sala.',
      laboratorio: 'Hemograma, coagulacion, funcion renal, potasio, creatina-cinasa, mioglobina, lactato, gasometria, grupo y pruebas cruzadas. Segun el contexto: troponina y electrocardiograma para buscar fibrilacion auricular y fuente cardioembolica, estudio de trombofilia y anticuerpos anti-PF4 si se sospecha trombocitopenia inducida por heparina antes de administrar mas heparina.',
      imagen: 'Eco-Doppler duplex, angiotomografia (rapida y disponible) y arteriografia (diagnostica y terapeutica en el mismo acto); ecocardiograma para buscar la fuente embolica una vez estabilizada la extremidad.',
      complementarios: 'Monitorizacion continua del electrocardiograma para detectar fibrilacion auricular y sondaje vesical para vigilar la diuresis y la mioglobinuria.',
      dx_diferencial: 'Flegmasia cerulea dolens (trombosis venosa profunda iliofemoral masiva: pierna tumefacta y cianotica, con pulsos a menudo presentes al inicio), diseccion aortica con malperfusion de la extremidad (dolor toracico o dorsal, asimetria de pulsos; ver el tema de Sindrome Aortico Agudo), estado de choque con vasoconstriccion intensa, compresion nerviosa aguda y sindrome compartimental de otra causa.',
      tx_medico: 'Anticoagulacion inmediata con heparina no fraccionada en bolo seguida de infusion, salvo contraindicacion, en cuanto se sospecha, para limitar la propagacion del trombo; analgesia; hidratacion y proteccion renal; correccion de la causa precipitante (control de frecuencia y anticoagulacion de la fibrilacion auricular). La extremidad se coloca en declive y a temperatura ambiente, sin calor local directo.',
      tx_farmacologico: 'Heparina no fraccionada con objetivo de TTPa 2 a 2.5 veces el control o anti-Xa terapeutico. Trombolisis dirigida por cateter (alteplasa o tenecteplasa intratrombo) como opcion en las categorias I y IIa cuando la oclusion es de menos de 2 semanas y no hay contraindicacion de fibrinolisis. Tras la fase aguda, anticoagulacion oral si la causa es embolica o protrombotica, o antiagregacion (o acido acetilsalicilico con rivaroxaban a dosis vascular) si es trombosis sobre EAP.',
      tx_intervencionista: 'Revascularizacion urgente. Categoria IIb (deficit sensitivo mas alla de los dedos con debilidad y senal arterial ausente): revascularizacion quirurgica sin demora por ser la mas rapida (embolectomia con cateter de Fogarty, tromboendarterectomia, bypass). Categoria IIa: trombolisis dirigida por cateter o trombectomia percutanea o quirurgica segun la anatomia y el tiempo. Categoria I: se puede completar el estudio y revascularizar de forma programada-urgente. Categoria III (anestesia, paralisis con rigidez, sin senal venosa): amputacion primaria, porque revascularizar una extremidad ya inviable puede ser mortal por el sindrome de reperfusion. Fasciotomia profilactica o terapeutica si la isquemia fue prolongada o aparece sindrome compartimental (ver esa tarjeta).',
      criterios_uci: 'La mayoria de los casos, por la anticoagulacion, la vigilancia neurovascular horaria, el riesgo de reperfusion (hiperpotasemia, arritmias, lesion renal aguda) y la comorbilidad cardiaca.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Exploracion neurovascular seriada, vigilancia del sindrome compartimental y de la reperfusion (potasio, creatina-cinasa, pH, diuresis, funcion renal), estudio y tratamiento de la causa (ecocardiograma, Holter, cribado de cancer o trombofilia segun el contexto) e inicio de la anticoagulacion o antiagregacion definitiva.',
      seguimiento_ambulatorio: 'Anticoagulacion indefinida si la causa persiste (fibrilacion auricular, trombofilia, aneurisma no tratado) o tratamiento de la EAP subyacente; vigilancia del injerto o segmento tratado con duplex; rehabilitacion de los deficits.',
      pronostico: 'Depende de la categoria de Rutherford al tratamiento y del tiempo de isquemia: la IIb tratada sin demora tiene buena tasa de salvamento; la III conlleva amputacion. La mortalidad hospitalaria del 10 al 15% refleja sobre todo la enfermedad cardiaca de base y las complicaciones de la reperfusion.',
      algoritmo: ['Dolor subito mas palidez mas ausencia de pulso mas parestesias, frialdad o paralisis: isquemia arterial aguda', 'Heparina no fraccionada intravenosa inmediata mas analgesia; no retrasar por la imagen', 'Doppler de mano a pie de cama: definir la categoria de Rutherford (I, IIa, IIb o III)', 'IIb: revascularizacion quirurgica urgente (Fogarty o bypass). IIa: trombolisis dirigida por cateter o trombectomia. I: estudio y revascularizacion programada-urgente. III: amputacion primaria', 'Vigilar y tratar el sindrome de reperfusion y el compartimental; tratar la causa (fibrilacion auricular, aneurisma, trombofilia)']
    },
    {
      nombre: 'Perdida de extremidad y amputacion mayor',
      color: '#6b4a2e',
      definicion: 'Amputacion por encima del tobillo (transtibial o transfemoral) por isquemia no recuperable. Es la complicacion final comun de la isquemia cronica que amenaza la extremidad y de la isquemia arterial aguda no revascularizadas a tiempo o no revascularizables (ver esas tarjetas); una minoria son amputaciones primarias, de entrada, cuando la extremidad ya no es funcionalmente salvable.',
      fisiopatologia: 'Necrosis tisular extensa, infeccion incontrolable o dolor isquemico intratable sobre una extremidad sin opciones de revascularizacion con linea directa al pie o ya no funcional. La decision pondera la viabilidad, el potencial de deambulacion, la comorbilidad y las preferencias del paciente, e idealmente se toma en un equipo multidisciplinar.',
      epidemiologia: 'La EAP causa la mayoria de las amputaciones no traumaticas de miembro inferior. Su incidencia es muy desigual, mucho mayor con diabetes, enfermedad renal cronica en dialisis, nivel socioeconomico bajo y acceso limitado a revascularizacion; la tasa de amputacion es un indicador de calidad de los sistemas de atencion vascular. Tras una amputacion mayor, la mortalidad a 1 ano es del 20 al 40% y entre el 30 y el 50% requiere amputacion contralateral en 2 a 4 anos.',
      factores_riesgo: ['Isquemia cronica que amenaza la extremidad con WIfI alto', 'Isquemia aguda en categoria III o con retraso en el tratamiento', 'Diabetes mellitus', 'Enfermedad renal cronica o dialisis', 'Infeccion grave del pie', 'Tabaquismo activo', 'Ausencia de conducto venoso para bypass', 'Situacion no deambulante previa y presentacion tardia'],
      clinica: 'Gangrena extensa, sepsis de origen en la extremidad, dolor isquemico intratable; en la isquemia aguda, anestesia y paralisis con rigidez muscular (Rutherford III).',
      criterios_dx: 'Valoracion clinica y de imagen que establece que no hay opcion de revascularizacion con linea directa al pie, o que la extremidad ya no es funcionalmente recuperable.',
      laboratorio: 'Marcadores de infeccion y sepsis, funcion renal, albumina y estado nutricional (predicen la cicatrizacion del muñon), HbA1c y hemograma.',
      imagen: 'La misma imagen arterial que descarto opciones de revascularizacion; valoracion del nivel de amputacion con mejor probabilidad de cicatrizacion mediante clinica, presiones segmentarias y TcPO2.',
      complementarios: 'Valoracion prequirurgica del riesgo cardiovascular, planificacion de rehabilitacion y protesis, y apoyo psicologico.',
      dx_diferencial: 'El punto clave no es un diagnostico diferencial clasico, sino distinguir la extremidad no recuperable de la que aun tiene opcion de salvamento con revascularizacion agresiva, para evitar tanto la amputacion evitable como la revascularizacion futil.',
      tx_medico: 'Optimizacion preoperatoria: control de la infeccion, nutricion, glucemia, anemia y estado cardiaco. Analgesia multimodal, incluida la prevencion y el tratamiento del dolor de miembro fantasma. Continuar el tratamiento medico sistemico de la EAP.',
      tx_farmacologico: 'Antibioticos si hay infeccion, analgesia multimodal, profilaxis de tromboembolia venosa y mantenimiento de la estatina y el antiagregante.',
      tx_intervencionista: 'Amputacion al nivel mas distal con probabilidad razonable de cicatrizar y de rehabilitacion protesica; preservar la rodilla siempre que sea posible mejora la deambulacion. En la extremidad septica, a veces amputacion en guillotina inicial y cierre reglado diferido.',
      criterios_uci: 'Sepsis grave de origen en la extremidad o inestabilidad perioperatoria.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Cicatrizacion del muñon, control del dolor (incluido el de miembro fantasma), inicio precoz de la rehabilitacion, prevencion de contracturas y cuidado intensivo de la extremidad contralateral.',
      seguimiento_ambulatorio: 'Rehabilitacion y adaptacion protesica, vigilancia y proteccion de la extremidad contralateral (cribado de EAP, cuidado del pie), control estricto de los factores de riesgo, ya que el riesgo cardiovascular y de amputacion contralateral es muy alto, y apoyo psicosocial.',
      pronostico: 'Reservado: la amputacion mayor identifica a una poblacion con mortalidad a 1 ano del 20 al 40% y alta incidencia de amputacion contralateral. La preservacion de la rodilla y la rehabilitacion temprana mejoran la probabilidad de volver a caminar.',
      algoritmo: ['Isquemia cronica que amenaza la extremidad o isquemia aguda sin opcion de revascularizacion con linea directa al pie, o extremidad no funcionalmente recuperable: considerar amputacion mayor', 'Decision en equipo multidisciplinar; distinguir la extremidad no recuperable de la aun salvable', 'Optimizar infeccion, nutricion, glucemia y estado cardiaco antes de la cirugia', 'Amputar al nivel mas distal que cicatrice y permita protesis; preservar la rodilla si es posible', 'Rehabilitacion precoz mas proteccion de la extremidad contralateral mas control intensivo de los factores de riesgo']
    },
    {
      nombre: 'Lesion por reperfusion y sindrome compartimental',
      color: '#8a6a1f',
      definicion: 'Complicacion de la revascularizacion de una extremidad con isquemia prolongada (habitualmente mas de 4 a 6 horas; ver Isquemia arterial aguda de la extremidad): al restablecerse el flujo, se liberan a la circulacion sistemica los productos del metabolismo anaerobio y de la necrosis muscular (potasio, hidrogeniones, mioglobina, radicales libres) y se desencadena edema muscular dentro de compartimentos fasciales inextensibles, que eleva la presion intracompartimental hasta ocluir la microcirculacion (sindrome compartimental).',
      fisiopatologia: 'Durante la isquemia el musculo acumula lactato, potasio y fosfatos y sufre rabdomiolisis. Con la reperfusion se producen dos fenomenos: uno sistemico, con lavado hacia la circulacion que causa hiperpotasemia (arritmias, parada cardiaca), acidosis metabolica, mioglobinuria con lesion renal aguda y liberacion de citocinas y radicales libres capaces de provocar respuesta inflamatoria sistemica y lesion pulmonar; y uno local, con aumento de la permeabilidad capilar y edema en compartimentos cerrados (el anterior de la pierna es el mas vulnerable), de modo que la presion compartimental supera la presion de perfusion capilar y produce isquemia de nervio y musculo pese a tener pulso proximal. El dano puede ser mayor que el de la propia isquemia.',
      epidemiologia: 'El riesgo aumenta con la duracion de la isquemia (poco frecuente por debajo de 4 horas, esperable por encima de 6), con la oclusion a nivel popliteo, con la categoria IIb y con la revascularizacion tardia.',
      factores_riesgo: ['Isquemia prolongada de mas de 4 a 6 horas', 'Oclusion poplitea o de eje unico', 'Categoria de Rutherford IIb', 'Revascularizacion de una extremidad casi inviable', 'Ausencia de colaterales', 'Lesion por aplastamiento asociada'],
      clinica: 'Sindrome compartimental: dolor desproporcionado y con el estiramiento pasivo del compartimento, tension leñosa a la palpacion, parestesias y, de forma tardia, deficit motor y ausencia de pulso (signo tardio, no esperar a que aparezca). Reperfusion sistemica: cambios electrocardiograficos por hiperpotasemia, arritmias, hipotension, orina oscura por mioglobinuria, oliguria y acidosis.',
      criterios_dx: 'Clinico. La presion intracompartimental (mayor de 30 mmHg, o presion delta, definida como presion arterial diastolica menos presion compartimental, menor de 30 mmHg) confirma pero no debe retrasar la fasciotomia si la clinica es evidente. En laboratorio: potasio, creatina-cinasa muy elevada, mioglobina y mioglobinuria, creatinina y gasometria.',
      laboratorio: 'Potasio seriado, creatina-cinasa, mioglobina, funcion renal, gasometria, lactato y electrocardiograma.',
      imagen: 'No es necesaria para el diagnostico del sindrome compartimental; en agudo no se usa la resonancia.',
      complementarios: 'Monitorizacion continua del electrocardiograma y de la diuresis; medicion de la presion compartimental si hay duda (paciente sedado o no valorable).',
      dx_diferencial: 'Reoclusion arterial (el dolor y el deficit reaparecen, pero la extremidad vuelve a estar fria y sin pulso, no tensa y caliente), trombosis venosa, celulitis y dolor isquemico residual.',
      tx_medico: 'Prevencion y tratamiento de la hiperpotasemia (calcio intravenoso, insulina con glucosa, salbutamol, resinas o dialisis), hidratacion abundante y diuresis alta para la rabdomiolisis (el bicarbonato es opcional y discutido), correccion de la acidosis y tratamiento de las arritmias; a veces terapia de reemplazo renal.',
      tx_farmacologico: 'No hay ningun farmaco que revierta el sindrome compartimental establecido; el manitol tiene un papel teorico como diuretico osmotico y captador de radicales, con evidencia debil.',
      tx_intervencionista: 'Fasciotomia de los cuatro compartimentos de la pierna, urgente ante un sindrome compartimental clinico. Muchos equipos realizan fasciotomia profilactica en el mismo acto de la revascularizacion cuando la isquemia supero unas 4 a 6 horas o la extremidad estaba en categoria IIb. Desbridamiento del musculo necrotico y cierre diferido.',
      criterios_uci: 'Practicamente todos los casos: hiperpotasemia, arritmias, lesion renal aguda, necesidad de dialisis e inestabilidad hemodinamica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Cierre progresivo o injerto de las heridas de fasciotomia, vigilancia de la recuperacion de la funcion renal tras la rabdomiolisis y rehabilitacion de los deficits neurologicos; el nervio peroneo profundo es el mas vulnerable, con pie caido resultante.',
      seguimiento_ambulatorio: 'Rehabilitacion de las secuelas motoras y sensitivas y del pie caido (ortesis), seguimiento de la funcion renal y cuidado de las cicatrices de fasciotomia.',
      pronostico: 'Bueno si la fasciotomia es precoz; el retraso deja secuelas (contractura isquemica de la pierna, pie caido, perdida muscular), y la reperfusion masiva puede ser mortal por hiperpotasemia y fallo multiorganico, hasta el punto de que en la categoria III se prefiere la amputacion primaria.',
      algoritmo: ['Revascularizacion de una extremidad con isquemia prolongada de mas de 4 a 6 horas o categoria IIb: anticipar reperfusion y sindrome compartimental', 'Vigilar potasio, creatina-cinasa, diuresis, electrocardiograma y la tension de los compartimentos de la pierna', 'Hiperpotasemia y rabdomiolisis: calcio intravenoso, insulina con glucosa, hidratacion y diuresis altas, dialisis si es necesario', 'Sindrome compartimental clinico: fasciotomia urgente de los cuatro compartimentos; considerar fasciotomia profilactica en la propia revascularizacion', 'Extremidad ya irreversible (Rutherford III): amputacion primaria en vez de revascularizar, para evitar la reperfusion mortal']
    },
    {
      nombre: 'Eventos cardiovasculares mayores y muerte',
      color: '#6b3a5a',
      definicion: 'Complicacion sistemica y principal causa de muerte en la EAP: infarto de miocardio, ictus isquemico y muerte cardiovascular, consecuencia de que la EAP es la manifestacion en las extremidades de una aterosclerosis difusa que casi siempre coexiste en los lechos coronario y cerebrovascular (ver EAP asintomatica y Claudicacion intermitente). En la mayoria de los pacientes con EAP el riesgo de un evento cardiovascular mayor supera al de un evento en la extremidad.',
      fisiopatologia: 'La misma placa aterosclerotica inestable que ocluye las arterias de la pierna esta presente en otros territorios. Un ITB bajo se asocia de forma independiente y graduada con la mortalidad cardiovascular (a menor ITB, mayor riesgo), y tambien el ITB mayor de 1.40, que traduce rigidez arterial, marca riesgo alto. Se suman la carga de factores de riesgo compartidos y la inflamacion vascular.',
      epidemiologia: 'A 5 anos, alrededor del 20% de los pacientes con claudicacion sufren un infarto o ictus no mortal y del 15 al 30% fallecen, la mayoria por causa cardiovascular; en la isquemia cronica que amenaza la extremidad la mortalidad a 5 anos supera el 50%. El riesgo de mortalidad frente a una persona sin EAP del mismo perfil es 2 a 3 veces mayor.',
      factores_riesgo: ['ITB muy bajo o mayor de 1.40', 'Enfermedad polivascular (coronaria o carotidea conocidas)', 'Diabetes mellitus', 'Enfermedad renal cronica', 'Tabaquismo activo', 'Isquemia cronica que amenaza la extremidad o isquemia aguda (marcadores de enfermedad avanzada)', 'Mal control de los factores de riesgo y no adherencia al tratamiento medico'],
      clinica: 'La de la cardiopatia isquemica y la enfermedad cerebrovascular; a menudo la EAP es asintomatica mientras el evento indice del paciente es coronario o cerebral. Buscar de forma activa angina, disnea, sintomas neurologicos y soplos carotideos.',
      criterios_dx: 'No es un diagnostico unico, sino un objetivo de estimacion y reduccion del riesgo. El propio diagnostico de EAP (ITB menor o igual a 0.90) ya clasifica al paciente como de riesgo cardiovascular muy alto, equivalente al de la enfermedad coronaria establecida.',
      laboratorio: 'Perfil lipidico con cLDL de seguimiento, HbA1c, funcion renal y una determinacion de lipoproteina(a); no se recomienda el cribado sistematico de isquemia silente con pruebas de estres en el paciente asintomatico.',
      imagen: 'No de rutina; ecocardiograma, pruebas de isquemia o duplex carotideo guiados por sintomas o por la necesidad de valoracion prequirurgica.',
      complementarios: 'Valoracion y tratamiento de la apnea del sueno, del tabaquismo y de la depresion, que influyen en el pronostico y la adherencia.',
      dx_diferencial: 'El mensaje clave es no centrar el manejo solo en la extremidad y descuidar la prevencion sistemica, que es la que mas vidas salva.',
      tx_medico: 'Cese del tabaquismo (la medida aislada mas eficaz), dieta, ejercicio y rehabilitacion cardiovascular; control de la presion arterial con objetivo menor de 130/80 en la mayoria (IECA o ARA-II de eleccion; los betabloqueadores no estan contraindicados por la EAP); control glucemico con farmacos de beneficio cardiovascular probado (iSGLT2, agonistas del receptor de GLP-1) en diabetes; vacunacion antigripal.',
      tx_farmacologico: 'Estatina de alta intensidad para todos, con objetivo de cLDL menor de 55 mg/dL y reduccion de al menos el 50% (anadir ezetimiba y luego un inhibidor de PCSK9 si no se alcanza). Tratamiento antitrombotico: antiagregante simple (clopidogrel preferido sobre el acido acetilsalicilico) en la EAP sintomatica; acido acetilsalicilico 100 mg mas rivaroxaban 2.5 mg cada 12 horas (COMPASS) si el riesgo isquemico es alto y el hemorragico bajo. La anticoagulacion oral plena sin otra indicacion (por ejemplo fibrilacion auricular) no reduce eventos y aumenta el sangrado.',
      tx_intervencionista: 'Revascularizar la extremidad no reduce el riesgo de infarto, ictus ni muerte; la reduccion del riesgo cardiovascular es enteramente medica y de estilo de vida. Las estenosis coronarias o carotideas se tratan segun sus propias indicaciones.',
      criterios_uci: 'Los del evento agudo correspondiente (sindrome coronario agudo, ictus).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En toda hospitalizacion por la EAP, revisar y optimizar el tratamiento medico de prevencion: es una oportunidad frecuentemente perdida, ya que los pacientes con EAP reciben estatinas y antiagregantes con menos frecuencia que los coronarios.',
      seguimiento_ambulatorio: 'Verificar en cada visita la consecucion de objetivos (cLDL, presion arterial, HbA1c, abandono del tabaco) y la adherencia; reforzar la rehabilitacion y el ejercicio; coordinar con cardiologia y neurologia si hay enfermedad en esos territorios.',
      pronostico: 'Mejora de forma sustancial con el tratamiento medico intensivo y el cese tabaquico; el infratratamiento es la regla y explica buena parte del exceso de mortalidad.',
      algoritmo: ['Todo paciente con ITB menor o igual a 0.90 (o mayor de 1.40) tiene riesgo cardiovascular muy alto, equivalente a enfermedad coronaria', 'Cese tabaquico mas estatina de alta intensidad (cLDL menor de 55) mas antiagregante (clopidogrel) en todos', 'Anadir rivaroxaban 2.5 mg cada 12 horas al acido acetilsalicilico si el riesgo isquemico es alto y el hemorragico bajo (COMPASS)', 'Control de presion arterial menor de 130/80 (IECA o ARA-II) y, en diabetes, iSGLT2 o agonistas del receptor de GLP-1', 'Recordar: revascularizar la pierna no previene el infarto ni el ictus; la prevencion es medica']
    },
    {
      nombre: 'Ulcera isquemica infectada e infeccion del pie',
      color: '#8c3a34',
      definicion: 'Complicacion de la perdida tisular en la isquemia cronica que amenaza la extremidad, con mucha frecuencia sobre un pie diabetico con neuropatia (ver Isquemia cronica que amenaza la extremidad): infeccion de partes blandas (celulitis, absceso, fascitis) o del hueso (osteomielitis) de una ulcera o herida del pie mal perfundida, que acelera la perdida de la extremidad y puede desencadenar sepsis.',
      fisiopatologia: 'La isquemia impide la llegada de leucocitos y antibioticos y dificulta la cicatrizacion; la neuropatia retrasa la consulta al hacer indoloras las ulceras y favorece la deformidad y los puntos de presion; la hiperglucemia deteriora la funcion leucocitaria. La infeccion aumenta la demanda metabolica local sobre un lecho que ya no cubre la basal y puede progresar con rapidez a lo largo de los planos fasciales, que en el pie comunican con la pierna.',
      epidemiologia: 'La triada de isquemia, herida e infeccion (los tres ejes de la clasificacion WIfI) define el riesgo de amputacion de la isquemia cronica que amenaza la extremidad; la infeccion es el precipitante inmediato de una gran parte de las amputaciones en pacientes diabeticos.',
      factores_riesgo: ['Diabetes mellitus con neuropatia', 'Isquemia (grado de Ischemia de WIfI de 1 o mas)', 'Deformidad del pie y calzado inadecuado', 'Ulcera o amputacion previas', 'Enfermedad renal cronica o dialisis', 'Mal control glucemico', 'Higiene y autocuidado deficientes', 'Tabaquismo'],
      clinica: 'Signos locales de infeccion (eritema perilesional de 0.5 a 2 cm o mayor, calor, edema, dolor o hipersensibilidad, secrecion purulenta) graduados por la clasificacion IWGDF/IDSA en leve, moderada y grave segun la extension y la repercusion sistemica. La crepitacion o el gas sugieren infeccion necrosante. La fiebre y la repercusion sistemica pueden faltar en el diabetico isquemico incluso con infeccion grave. Explorar la ulcera con estilete: el contacto oseo (probe-to-bone) sugiere osteomielitis.',
      criterios_dx: 'Diagnostico clinico de infeccion: al menos dos signos inflamatorios locales o secrecion purulenta. No cultivar ulceras sin signos de infeccion. Cultivo de tejido profundo o de biopsia (no de frotis superficial) para dirigir el antibiotico. Osteomielitis: probe-to-bone positivo mas radiografia (puede tardar 2 a 3 semanas en mostrar cambios) o resonancia (mas sensible y precoz); la biopsia osea es el patron de referencia.',
      laboratorio: 'Hemograma, proteina C reactiva, velocidad de sedimentacion y procalcitonina para seguir la respuesta, glucemia y HbA1c, funcion renal, hemocultivos si hay repercusion sistemica y cultivo de tejido profundo.',
      imagen: 'Radiografia del pie (gas, osteomielitis, cuerpo extrano, artropatia de Charcot); resonancia si se sospecha osteomielitis o absceso profundo con radiografia no concluyente; angiografia para planear la revascularizacion, imprescindible para que la herida cure.',
      complementarios: 'Valoracion por el equipo multidisciplinar del pie, desbridamiento con toma de muestras y descarte de artropatia de Charcot aguda (pie rojo, caliente e hinchado sin puerta de entrada y con pulsos presentes).',
      dx_diferencial: 'Colonizacion sin infeccion (no tratar), artropatia de Charcot aguda, gota, trombosis venosa, dermatitis de contacto y celulitis de origen no podologico.',
      tx_medico: 'Control glucemico, desbridamiento quirurgico precoz y amplio del tejido desvitalizado y drenaje de colecciones (no esperar a delimitar si la infeccion progresa), descarga de la zona y curas. La infeccion moderada o grave en un pie isquemico es una urgencia que combina antibiotico, desbridamiento y revascularizacion, no antibiotico solo.',
      tx_farmacologico: 'Antibioterapia empirica segun la gravedad y los factores de riesgo de resistencias, dirigida despues por el cultivo de tejido profundo: infeccion leve, cobertura de cocos grampositivos (Staphylococcus aureus, estreptococos) por via oral; moderada o grave, espectro ampliado a gramnegativos y anaerobios (y cobertura de SARM si hay factores de riesgo), inicialmente por via parenteral. Duracion de 1 a 2 semanas en partes blandas y de 3 a 6 semanas o mas en osteomielitis, o menos si se reseca todo el hueso infectado. Actualizar la profilaxis antitetanica.',
      tx_intervencionista: 'Desbridamiento o drenaje urgente, revascularizacion para que la herida y la infeccion puedan resolverse (una infeccion del pie en una extremidad isquemica no cura sin restaurar flujo), amputaciones menores (dedo, radio, transmetatarsiana) para el control del foco preservando un pie funcional y amputacion mayor si hay sepsis incontrolable o destruccion extensa.',
      criterios_uci: 'Sepsis o choque septico de origen podologico e infeccion necrosante.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Respuesta clinica y de los reactantes de fase aguda, ajuste del antibiotico por cultivo, planificacion conjunta de la revascularizacion y la cirugia del pie, y control glucemico.',
      seguimiento_ambulatorio: 'Curas y descarga hasta la cicatrizacion, calzado terapeutico y plantillas, educacion y autoexploracion diaria del pie, revision podologica periodica para prevenir la recurrencia (que es alta), completar y vigilar el tratamiento de la osteomielitis y control estricto de la diabetes y del resto de factores de riesgo.',
      pronostico: 'Con revascularizacion, desbridamiento y antibiotico dirigido, la mayoria de las infecciones leves y moderadas curan y se preserva un pie funcional; la infeccion grave sobre pie isquemico y la osteomielitis extensa son las que mas se asocian a amputacion mayor. La recurrencia de la ulcera es frecuente y exige prevencion de por vida.',
      algoritmo: ['Ulcera o herida del pie mal perfundida con dos o mas signos inflamatorios locales o pus: infeccion; no cultivar heridas sin signos de infeccion', 'Graduar la gravedad (IWGDF/IDSA), buscar osteomielitis (probe-to-bone, radiografia o resonancia) y valorar la isquemia (WIfI)', 'Infeccion moderada o grave en pie isquemico: urgencia; antibiotico empirico mas desbridamiento o drenaje precoz mas planificar revascularizacion', 'Dirigir el antibiotico por cultivo de tejido profundo; de 1 a 2 semanas en partes blandas y de 3 a 6 semanas en osteomielitis', 'Revascularizar para que cure; amputaciones menores para el control del foco; calzado, descarga y revision podologica para prevenir la recurrencia']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El ingreso por EAP se produce casi siempre por isquemia que amenaza la extremidad (cronica o aguda) o por infeccion del pie. El seguimiento intrahospitalario se centra en asegurar y vigilar la perfusion tras la revascularizacion, prevenir y tratar el sindrome de reperfusion, controlar la infeccion, y no perder la oportunidad de optimizar el tratamiento medico de prevencion cardiovascular, sistematicamente infrautilizado en esta poblacion.',
    parametros: ['Exploracion neurovascular seriada de la extremidad (pulsos, relleno capilar, sensibilidad, fuerza, temperatura) y de las heridas de fasciotomia si las hay', 'ITB o presiones de tobillo y de dedo y duplex de control tras la revascularizacion', 'Potasio, creatina-cinasa, mioglobina, funcion renal, gasometria y diuresis en la isquemia aguda revascularizada (sindrome de reperfusion)', 'Reactantes de fase aguda, cultivos y respuesta clinica de la infeccion del pie', 'Regimen antitrombotico segun el procedimiento (heparina, doble antiagregacion, acido acetilsalicilico con rivaroxaban a dosis vascular) y anticoagulacion de la fibrilacion auricular si la causa fue embolica'],
    criterios_uci_general: 'Isquemia arterial aguda revascularizada (anticoagulacion, vigilancia horaria, riesgo de reperfusion), sepsis de origen podologico, o inestabilidad cardiaca o renal periprocedimiento.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: cese del tabaquismo (el factor de riesgo mas potente y mas modificable), control de la presion arterial, de la diabetes y de los lipidos, y actividad fisica. Secundaria, una vez diagnosticada la EAP: estatina de alta intensidad con objetivo de cLDL menor de 55 mg/dL, antiagregante simple (clopidogrel preferido) o acido acetilsalicilico con rivaroxaban 2.5 mg cada 12 horas si el riesgo isquemico es alto, control de presion arterial menor de 130/80, y cuidado estructurado de los pies en el paciente diabetico o con isquemia previa, que previene la mayoria de las ulceras y amputaciones. La deteccion con ITB dirigida a grupos de riesgo permite iniciar esta prevencion antes de que aparezcan los sintomas.'
  }
};

export const compCites = {
  'EAP asintomatica (marcador de aterosclerosis sistemica)': [0, 1, 7, 8],
  'Claudicacion intermitente': [0, 1, 3, 12],
  'Isquemia cronica que amenaza la extremidad': [4, 1, 13, 5],
  'Isquemia arterial aguda de la extremidad': [15, 6, 0],
  'Perdida de extremidad y amputacion mayor': [4, 0, 1],
  'Lesion por reperfusion y sindrome compartimental': [15, 6],
  'Eventos cardiovasculares mayores y muerte': [9, 8, 11, 1],
  'Ulcera isquemica infectada e infeccion del pie': [17, 4, 5]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion de Fontaine': [2, 3],
  'Clasificacion de Rutherford (EAP cronica)': [6],
  'WIfI (herida, isquemia e infeccion del pie)': [5, 4],
  'Clasificacion de Rutherford de la isquemia arterial aguda': [6, 15]
};
export const escalaCalc = {
  'WIfI (herida, isquemia e infeccion del pie)': 'wifi',
  'Clasificacion de Rutherford de la isquemia arterial aguda': 'rutherford-iaa'
};
export const compGroups = [
  { name: 'Formas clinicas', items: ['EAP asintomatica (marcador de aterosclerosis sistemica)', 'Claudicacion intermitente', 'Isquemia cronica que amenaza la extremidad', 'Isquemia arterial aguda de la extremidad'] },
  { name: 'Complicaciones', items: ['Perdida de extremidad y amputacion mayor', 'Lesion por reperfusion y sindrome compartimental', 'Eventos cardiovasculares mayores y muerte', 'Ulcera isquemica infectada e infeccion del pie'] }
];
export const complicacionesIntro = 'Las primeras 4 fichas recorren el espectro clinico de la EAP en orden de gravedad: asintomatica (la forma mas frecuente y el principal marcador de riesgo sistemico), claudicacion intermitente (la EAP cronica sintomatica), isquemia cronica que amenaza la extremidad (dolor de reposo o perdida tisular) e isquemia arterial aguda (oclusion subita, una emergencia). Las 4 siguientes son las complicaciones que determinan la morbimortalidad: amputacion mayor, lesion por reperfusion y sindrome compartimental tras revascularizar, eventos cardiovasculares mayores (la principal causa de muerte) e infeccion de la ulcera isquemica.';
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
  root: { title: 'ENFERMEDAD ARTERIAL PERIFERICA', color: '#6e3b2e', target: 'definicion' },
  branches: [
    { title: 'Formas clinicas', sub: 'Espectro por gravedad', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'EAP asintomatica', sub: 'La mas frecuente; marcador de riesgo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Claudicacion intermitente', sub: 'EAP cronica sintomatica', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Isquemia que amenaza la extremidad', sub: 'Dolor de reposo, ulcera, gangrena', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Isquemia arterial aguda', sub: 'Oclusion subita: emergencia', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Determinan la morbimortalidad', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Amputacion mayor', sub: 'Extremidad no recuperable', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Reperfusion y compartimental', sub: 'Tras revascularizar isquemia prolongada', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Eventos cardiovasculares mayores', sub: 'Infarto, ictus, muerte: la 1a causa', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Ulcera isquemica infectada', sub: 'Infeccion del pie, con frecuencia diabetico', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [7, 0], imagen: [0, 2] };
export const clasificacionCite = [2, 6, 5];
export const seguimientoCite = [0, 1];
