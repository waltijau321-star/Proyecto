// topics/apnea-sueno/content.js: Apnea del sueño y trastornos respiratorios del sueño.
// Cubre el item "Apnea obstructiva del sueño" del cluster Enfermedad respiratoria cronica
// (bloque III, Neumologia) del temario, ampliado a la apnea central y al sindrome de
// hipoventilacion-obesidad, que comparten estudio diagnostico y no se entienden por separado.
//
// Fuentes principales: guia de la American Academy of Sleep Medicine de 2017 sobre pruebas
// diagnosticas en la apnea obstructiva del adulto (la que hay en Bibliografia/); guia de la AASM
// de 2019 sobre presion positiva; guia de la ATS de 2019 sobre el sindrome de
// hipoventilacion-obesidad; ensayo SERVE-HF sobre servoventilacion adaptativa; ensayos SAVE,
// RICCADSA e ISAACC sobre desenlaces cardiovasculares; y el ensayo SURMOUNT-OSA sobre
// tirzepatida en la apnea asociada a obesidad.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'apnea-sueno',
  titulo: 'Apnea del Sueño',
  subtitulo: 'Módulo 56 · Medicina Interna',
  accent: '#2f6b5f'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const eventosHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2f6b5f;border-radius:8px;padding:5px 9px;background:#2f6b5f12;margin-bottom:6px;">
    <strong style="color:#2f6b5f;">La pregunta que separa los dos grandes tipos de evento es si HAY ESFUERZO RESPIRATORIO.</strong> <span style="color:var(--ink-dim);">Si el paciente lucha por respirar contra una via aérea cerrada, el evento es obstructivo. Si simplemente deja de mandar la orden de respirar, es central. De esa diferencia dependen la causa que hay que buscar y el tratamiento.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #2f6b5f;border-radius:8px;padding:6px 8px;background:#2f6b5f08;">
      <div style="font-weight:700;color:#2f6b5f;text-align:center;margin-bottom:4px;">EVENTO OBSTRUCTIVO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">El flujo cae pero el <strong style="color:var(--ink);">esfuerzo toracoabdominal PERSISTE</strong>, incluso aumenta, y las bandas se mueven en oposición de fase. La faringe se ha colapsado.<br><strong style="color:var(--ink);">Apnea</strong>: caída del flujo del 90% o más durante 10 segundos o más.<br><strong style="color:var(--ink);">Hipopnea</strong>: caída del 30% o más durante 10 segundos o más, con desaturación o microdespertar.</div>
    </div>
    <div style="border:1.5px solid #7a2f5c;border-radius:8px;padding:6px 8px;background:#7a2f5c08;">
      <div style="font-weight:700;color:#7a2f5c;text-align:center;margin-bottom:4px;">EVENTO CENTRAL</div>
      <div style="color:var(--ink-dim);line-height:1.6;">El flujo cae y el <strong style="color:var(--ink);">esfuerzo DESAPARECE</strong>: las bandas se quedan quietas. No hay orden desde el centro respiratorio.<br>No es una enfermedad sino un <strong>signo</strong>: obliga a buscar insuficiencia cardiaca, opioides, lesión del tronco, altitud o el propio tratamiento con presión positiva.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">La trampa de la hipopnea.</strong> Existen DOS definiciones: la recomendada exige una desaturación del 3% <strong>o</strong> un microdespertar; la alternativa, usada por algunos financiadores, exige una desaturación del 4%. Con la segunda salen índices más bajos y algunos pacientes sintomáticos quedan por debajo del umbral. Ante un informe que no cuadra con la clínica, hay que mirar QUE REGLA se uso.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">El evento que no aparece en el índice.</strong> El <strong>esfuerzo respiratorio asociado a microdespertar</strong> no cumple criterio de apnea ni de hipopnea, pero fragmenta el sueño igual. Un paciente muy sintomático con índice de apnea-hipopnea bajo puede tener un índice de alteración respiratoria alto a expensas de estos eventos, que solo se ven en la polisomnografía completa.
    </div>
  </div>
</div>`;

const estudioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">POLIGRAFIA RESPIRATORIA domiciliaria</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Mide flujo, esfuerzo y saturación, pero <strong style="color:var(--ink);">NO mide sueño</strong>: no hay electroencefalograma. Divide los eventos por el tiempo de REGISTRO y no por el tiempo dormido, de modo que <strong>INFRAESTIMA</strong> el índice.<br>Vale para el paciente <strong>sin comorbilidad</strong> con alta probabilidad de apnea obstructiva moderada o grave. Es más barata, más accesible y más comoda.</div>
    </div>
    <div style="border:1.5px solid #2f6b5f;border-radius:8px;padding:6px 8px;background:#2f6b5f08;">
      <div style="font-weight:700;color:#2f6b5f;text-align:center;margin-bottom:4px;">POLISOMNOGRAFÍA en laboratorio</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Añade electroencefalograma, electrooculograma y electromiograma: mide el sueño de verdad, detecta microdespertares y distingue las fases.<br>Es la prueba de referencia y la que hay que pedir cuando la poligrafia <strong>NO es aplicable</strong> o cuando su resultado es <strong style="color:var(--ink);">negativo o no concluyente</strong> en un paciente que sigue siendo sospechoso.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3408;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">CUANDO NO SE PUEDE USAR LA POLIGRAFIA DOMICILIARIA</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Enfermedad <strong>cardiorrespiratoria significativa</strong> (insuficiencia cardiaca, EPOC grave), sospecha de <strong>HIPOVENTILACIÓN</strong>, debilidad <strong>neuromuscular</strong>, uso crónico de <strong>opioides</strong>, antecedente de ictus, insomnio grave, y sospecha de otro trastorno del sueño (narcolepsia, movimientos periódicos de las piernas, parasomnias). En todos ellos el estudio simplificado puede dar un resultado falsamente tranquilizador.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Los cuestionarios NO diagnostican.</strong> STOP-BANG y Epworth son herramientas de CRIBADO: sirven para priorizar y para medir el síntoma, no para confirmar ni para descartar. Un STOP-BANG bajo no autoriza a no estudiar a un paciente con clínica sugestiva, y un Epworth normal es frecuente en la apnea grave, sobre todo en <strong>mujeres</strong> y en pacientes que consultan por fatiga, insomnio o cefalea matutina en lugar de por somnolencia.
  </div>
</div>`;

const tratamientoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;margin-bottom:5px;align-items:stretch;">
    <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">LEVE<br><span style="font-weight:400;font-size:8.5px;">IAH 5 a 15</span></div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se trata si hay <strong style="color:var(--ink);">síntomas</strong> (somnolencia, sueño no reparador, deterioro cognitivo) o <strong>comorbilidad</strong> (hipertensión, cardiopatía isquémica, ictus, fibrilación auricular). Primera línea razonable: medidas conservadoras, <strong>dispositivo de avance mandibular</strong> o terapia posicional. La CPAP también es opción si el paciente la prefiere.</div>
  </div>
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;margin-bottom:5px;align-items:stretch;">
    <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">MODERADA<br><span style="font-weight:400;font-size:8.5px;">IAH 15 a 30</span></div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CPAP</strong> como tratamiento de elección. Si el paciente no la tolera pese a un intento bien acompañado, el dispositivo de avance mandibular es la alternativa con mejor evidencia. Nunca se abandona sin ofrecer alternativa.</div>
  </div>
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;margin-bottom:6px;align-items:stretch;">
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">GRAVE<br><span style="font-weight:400;font-size:8.5px;">IAH mayor de 30</span></div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CPAP</strong>, con independencia de los síntomas. Y aquí la <strong>ADHERENCIA</strong> es el tratamiento: el beneficio depende de las horas de uso, no de tener el aparato en casa.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #2f6b5f;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#2f6b5f;">Lo que acompaña SIEMPRE a la CPAP.</strong> Pérdida de peso (una reducción sostenida baja el índice de forma proporcional, y los fármacos para la obesidad han demostrado reducirlo en ensayos), evitar alcohol y sedantes por la noche, tratar la obstrucción nasal, terapia posicional si los eventos son claramente supinos, y consejo sobre la <strong>conducción</strong>.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Lo que la CPAP SI y NO ha demostrado.</strong> SI: mejora la somnolencia, la calidad de vida y la función cognitiva, y baja algo la presión arterial, sobre todo en la hipertensión resistente. NO: los ensayos aleatorizados no han demostrado reducción de eventos cardiovasculares, con la advertencia de que la adherencia media fue baja y se excluyo a los pacientes muy somnolientos.
    </div>
  </div>
</div>`;

const co2Html = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c5a2e;border-radius:8px;padding:5px 9px;background:#8c5a2e12;margin-bottom:6px;">
    <strong style="color:#8c5a2e;">La pregunta que separa la apnea obstructiva del síndrome de hipoventilación-obesidad es el CO2 DIURNO.</strong> <span style="color:var(--ink-dim);">No basta con que el paciente sea obeso y ronque: hay que hacer una gasometría DESPIERTO. Sin ese dato, el diagnóstico no se puede hacer ni descartar.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #2f6b5f;border-radius:8px;padding:6px 8px;background:#2f6b5f08;">
      <div style="font-weight:700;color:#2f6b5f;text-align:center;margin-bottom:4px;">APNEA OBSTRUCTIVA pura</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Eventos obstructivos durante el sueño con <strong style="color:var(--ink);">gasometría diurna NORMAL</strong>. Entre evento y evento el paciente ventila bien y lava el CO2 acumulado. Bicarbonato normal.<br>Tratamiento: <strong>CPAP</strong>.</div>
    </div>
    <div style="border:1.5px solid #8c5a2e;border-radius:8px;padding:6px 8px;background:#8c5a2e08;">
      <div style="font-weight:700;color:#8c5a2e;text-align:center;margin-bottom:4px;">HIPOVENTILACIÓN-OBESIDAD</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Índice de masa corporal de 30 o más, <strong style="color:var(--ink);">PaCO2 despierto mayor de 45 mmHg</strong> y exclusión de otras causas de hipoventilación. El bicarbonato esta ELEVADO por compensación renal crónica.<br>Alrededor del 90% tiene además apnea obstructiva.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">El atajo que si sirve.</strong> Un <strong>BICARBONATO SÉRICO normal</strong> (por debajo de 27 mEq/L) en un paciente obeso hace muy improbable la hipoventilación crónica y permite ahorrar gasometrías. Si esta elevado, hay que hacer la gasometría arterial. Es un cribado barato, disponible y muy útil en planta.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El error que mata.</strong> Poner <strong>OXÍGENO SOLO</strong> a un paciente con hipoventilación y creer que el problema esta resuelto porque la saturación sube. El oxígeno corrige el número del pulsioximetro sin corregir la ventilación, y puede agravar la hipercapnia. Lo que hace falta es <strong>presión positiva</strong>, no más oxígeno.
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #7a2f5c;border-radius:8px;background:#7a2f5c10;color:var(--ink-dim);">
    <strong style="color:#7a2f5c;">Y una contraindicación que hay que saberse.</strong> En la insuficiencia cardiaca con fracción de eyección reducida y apnea CENTRAL predominante, la <strong>servoventilacion adaptativa esta CONTRAINDICADA</strong>: un ensayo aleatorizado encontró un aumento de la mortalidad cardiovascular. En ese escenario el tratamiento es optimizar la insuficiencia cardiaca, no ventilar al paciente con ese modo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Los trastornos respiratorios del sueño son frecuentes, se diagnostican tarde y se tratan peor. La <strong>apnea obstructiva del sueño</strong> es el más común con diferencia: episodios repetidos de colapso de la faringe durante el sueño que fragmentan el descanso y producen desaturaciones intermitentes. Junto a ella hay que manejar otras dos entidades que comparten el estudio pero no la causa ni el tratamiento: la <strong>apnea central</strong>, que no es una enfermedad sino un signo de otra cosa, y el <strong>síndrome de hipoventilación-obesidad</strong>, que se define por un dato que solo se ve estando despierto.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: obstructivo o central.</strong></p>
<p style="margin:0 0 12px;">Todo el tema se ordena con una sola pregunta ante un evento respiratorio: <strong>hay esfuerzo respiratorio o no lo hay</strong>. Si el paciente lucha contra una via aérea cerrada, es obstructivo. Si el esfuerzo desaparece, es central, y entonces hay que buscar la causa detrás: insuficiencia cardiaca, opioides, lesión del tronco, altitud o el propio tratamiento con presión positiva. Conviene además conocer las dos definiciones de hipopnea que circulan, porque explican informes que no cuadran con la clínica.</p>
${figBlock('Figura 1', 'Que es un evento respiratorio y como se clasifica', eventosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: que estudio se pide.</strong></p>
<p style="margin:0 0 12px;">La <strong>poligrafia respiratoria domiciliaria</strong> es comoda y suficiente en el paciente sin comorbilidad con alta probabilidad de apnea obstructiva moderada o grave, pero no mide el sueño y por eso infraestima el índice. La <strong>polisomnografía</strong> es la referencia y hace falta cuando hay comorbilidad cardiorrespiratoria, sospecha de hipoventilación, debilidad neuromuscular, opioides, ictus o sospecha de otro trastorno del sueño. Y hay una regla que se olvida a menudo: una <strong>poligrafia negativa o no concluyente en un paciente sospechoso obliga a hacer polisomnografía</strong>, no a dar el alta.</p>
${figBlock('Figura 2', 'Poligrafia domiciliaria o polisomnografía, y cuando cada una', estudioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: a quien se trata y con que.</strong></p>
<p style="margin:0 0 12px;">La gravedad se mide por el <strong>índice de apnea-hipopnea</strong>, pero la decisión de tratar combina el índice con los síntomas y con la comorbilidad. La <strong>CPAP</strong> es el tratamiento de elección en la forma moderada y grave, y su beneficio depende de las horas de uso: la adherencia no es un detalle administrativo sino el tratamiento mismo. Conviene tener claro también lo que la CPAP ha demostrado y lo que no, para no prometer de más.</p>
${figBlock('Figura 3', 'Gravedad, decisión de tratar y lo que la CPAP si y no consigue', tratamientoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: mirar el CO2 estando despierto.</strong></p>
<p style="margin:0 0 12px;">El paciente obeso que ronca puede tener apnea obstructiva pura o un <strong>síndrome de hipoventilación-obesidad</strong>, y la diferencia solo se ve con una <strong>gasometría diurna</strong>. Un bicarbonato sérico normal la hace muy improbable y permite ahorrar pruebas; uno elevado obliga a hacerla. Distinguirlas importa porque el manejo cambia y porque el error clásico en este grupo, poner oxígeno solo y quedarse tranquilo con la saturación, agrava la hipercapnia en lugar de corregirla.</p>
${figBlock('Figura 4', 'Apnea obstructiva frente a hipoventilación-obesidad: el CO2 diurno', co2Html)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No usar un cuestionario para descartar la enfermedad ni para diagnosticarla. No dar el alta tras una poligrafia negativa en un paciente sospechoso. No pedir poligrafia domiciliaria a quien tiene insuficiencia cardiaca, EPOC grave, enfermedad neuromuscular u opioides crónicos. No olvidar la gasometría diurna en el obeso con hipoxemia nocturna. No poner oxígeno solo a un paciente que hipoventila. No usar servoventilacion adaptativa en la insuficiencia cardiaca con fracción de eyección reducida y apnea central predominante. No dar por perdido al paciente que rechaza la CPAP sin ofrecerle alternativa. Y no dejar de preguntar por la <strong>somnolencia al volante</strong>, que es la consecuencia con mayor riesgo inmediato para el paciente y para terceros.</p>`;

export const bibliografia = [
  'Kapur VK, Auckley DH, Chowdhuri S, et al. Clinical practice guideline for diagnostic testing for adult obstructive sleep apnea: an American Academy of Sleep Medicine clinical practice guideline. J Clin Sleep Med. 2017;13(3):479-504.',
  'Patil SP, Ayappa IA, Caples SM, et al. Treatment of adult obstructive sleep apnea with positive airway pressure: an American Academy of Sleep Medicine clinical practice guideline. J Clin Sleep Med. 2019;15(2):335-343.',
  'Mokhlesi B, Masa JF, Brozek JL, et al. Evaluation and management of obesity hypoventilation syndrome: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2019;200(3):e6-e24.',
  'Cowie MR, Woehrle H, Wegscheider K, et al. Adaptive servo-ventilation for central sleep apnea in systolic heart failure. N Engl J Med. 2015;373(12):1095-1105.',
  'McEvoy RD, Antic NA, Heeley E, et al. CPAP for prevention of cardiovascular events in obstructive sleep apnea. N Engl J Med. 2016;375(10):919-931.',
  'Peker Y, Glantz H, Eulenburg C, et al. Effect of positive airway pressure on cardiovascular outcomes in coronary artery disease patients with nonsleepy obstructive sleep apnea: the RICCADSA randomized controlled trial. Am J Respir Crit Care Med. 2016;194(5):613-620.',
  'Chung F, Abdullah HR, Liao P. STOP-Bang questionnaire: a practical approach to screen for obstructive sleep apnea. Chest. 2016;149(3):631-638.',
  'Johns MW. A new method for measuring daytime sleepiness: the Epworth sleepiness scale. Sleep. 1991;14(6):540-545.',
  'Ramar K, Dort LC, Katz SG, et al. Clinical practice guideline for the treatment of obstructive sleep apnea and snoring with oral appliance therapy. J Clin Sleep Med. 2015;11(7):773-827.',
  'Malhotra A, Grunstein RR, Fietze I, et al. Tirzepatide for the treatment of obstructive sleep apnea and obesity. N Engl J Med. 2024;391(13):1193-1205.',
  'Strollo PJ, Soose RJ, Maurer JT, et al. Upper-airway stimulation for obstructive sleep apnea. N Engl J Med. 2014;370(2):139-149.',
  'Chung F, Memtsoudis SG, Ramachandran SK, et al. Society of Anesthesia and Sleep Medicine guidelines on preoperative screening and assessment of adult patients with obstructive sleep apnea. Anesth Analg. 2016;123(2):452-473.',
  'Gottlieb DJ, Punjabi NM. Diagnosis and management of obstructive sleep apnea: a review. JAMA. 2020;323(14):1389-1400.',
  'Peppard PE, Young T, Barnet JH, et al. Increased prevalence of sleep-disordered breathing in adults. Am J Epidemiol. 2013;177(9):1006-1014.',
  'Javaheri S, Barbe F, Campos-Rodriguez F, et al. Sleep apnea: types, mechanisms, and clinical cardiovascular consequences. J Am Coll Cardiol. 2017;69(7):841-858.',
  'Tregear S, Reston J, Schoelles K, Phillips B. Obstructive sleep apnea and risk of motor vehicle crash: systematic review and meta-analysis. J Clin Sleep Med. 2009;5(6):573-581.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Síntomas nocturnos',
      tituloB: 'Síntomas diurnos',
      compensada: 'RONQUIDO intenso y habitual, apneas presenciadas por la pareja (que suele ser quien trae al paciente a la consulta), despertares con sensación de ahogo o atragantamiento, sueño inquieto y no reparador, nicturia (más frecuente de lo que se piensa y con frecuencia atribuida a la próstata), sudoración nocturna y reflujo gastroesofágico nocturno. La ausencia de ronquido no descarta la enfermedad, sobre todo en la mujer.',
      descompensada: 'SOMNOLENCIA diurna excesiva, que es el síntoma clásico pero no el único ni el más frecuente. Cefalea matutina, sensación de sueño no reparador, fatiga, irritabilidad, dificultad de concentración y pérdida de memoria. En la MUJER predominan la fatiga, el insomnio, el ánimo bajo y la cefalea por encima de la somnolencia, y por eso se diagnostica menos y más tarde. Y en todos hay que preguntar de forma explícita por la somnolencia al volante y por episodios de casi accidente.'
    },
    laboratorio: [
      { prueba: 'Bicarbonato sérico', utilidad: 'Cribado barato de hipoventilación crónica en el paciente obeso. Un valor NORMAL, por debajo de 27 mEq/L, hace muy improbable el síndrome de hipoventilación-obesidad y permite ahorrar gasometrías. Si esta elevado, hay que hacer gasometría arterial despierto.' },
      { prueba: 'Gasometría arterial DESPIERTO', utilidad: 'Es el dato que define el síndrome de hipoventilación-obesidad: PaCO2 mayor de 45 mmHg en vigilia. Sin ella el diagnóstico no se puede hacer ni descartar, y hacerla dormido o con oxígeno puesto no sirve para lo mismo.' },
      { prueba: 'Hemograma', utilidad: 'La poliglobulia secundaria orienta hacia hipoxemia crónica mantenida y hacia hipoventilación más que hacia apnea obstructiva pura. Su ausencia no descarta nada, porque muchos pacientes no la desarrollan.' },
      { prueba: 'Hormona tiroestimulante', utilidad: 'El HIPOTIROIDISMO produce macroglosia, edema faringeo y reducción del impulso ventilatorio, y puede causar o agravar la apnea. Es una de las pocas causas reversibles y conviene descartarla ante un cuadro que no encaja del todo.' },
      { prueba: 'Hemoglobina glucosilada y perfil lipídico', utilidad: 'La apnea obstructiva se asocia de forma independiente a resistencia a la insulina y a dislipemia, y comparte con ellas la obesidad como causa. Forman parte de la valoración del riesgo cardiovascular global de estos pacientes.' },
      { prueba: 'Péptido natriurético y función cardiaca', utilidad: 'Ante apnea CENTRAL o respiración de Cheyne-Stokes hay que buscar insuficiencia cardiaca, que es su causa más frecuente en la práctica. El hallazgo cambia por completo el tratamiento y contraindica un modo ventilatorio concreto.' },
      { prueba: 'Revisión de la medicación', utilidad: 'No es un análisis pero funciona como tal: los OPIOIDES crónicos son una causa frecuente y reversible de apnea central, y las benzodiacepinas, los relajantes musculares y el alcohol agravan los eventos obstructivos al relajar la faringe.' }
    ],
    no_invasivos: [
      { metodo: 'Cuestionario STOP-BANG (calculadora disponible)', interpretacion: 'Ocho ítems: ronquido, cansancio, apneas presenciadas, hipertensión, índice de masa corporal, edad, perímetro cervical y sexo. Herramienta de CRIBADO, no diagnóstica.', cutoff: '0 a 2 riesgo bajo; 3 a 4 riesgo intermedio; 5 a 8 riesgo alto de apnea obstructiva moderada o grave' },
      { metodo: 'Escala de somnolencia de Epworth (calculadora disponible)', interpretacion: 'Ocho situaciones cotidianas puntuadas de 0 a 3 según la probabilidad de quedarse dormido. Mide el SÍNTOMA, no la gravedad de la enfermedad, y sirve sobre todo para seguir la respuesta al tratamiento.', cutoff: 'Mayor de 10: somnolencia diurna excesiva. Un valor normal NO descarta apnea grave' },
      { metodo: 'Índice de apnea-hipopnea (calculadora disponible)', interpretacion: 'Número de apneas más hipopneas por hora de sueño. En la poligrafia domiciliaria se divide por el tiempo de registro, de modo que el índice queda INFRAESTIMADO respecto a la polisomnografía.', cutoff: '5 a 15 leve; 15 a 30 moderada; mayor de 30 grave' },
      { metodo: 'Criterios de hipoventilación-obesidad (calculadora disponible)', interpretacion: 'Combina el índice de masa corporal, la PaCO2 diurna y la exclusión de otras causas de hipoventilación. Alrededor del 90% de estos pacientes tiene además apnea obstructiva.', cutoff: 'IMC de 30 o más y PaCO2 despierto mayor de 45 mmHg, sin otra causa que lo explique' },
      { metodo: 'Índice de desaturación de oxígeno y tiempo por debajo del 90%', interpretacion: 'Complementan al índice de apnea-hipopnea y en algunos estudios predicen mejor el riesgo cardiovascular. Un tiempo prolongado por debajo del 90% que no se explica por los eventos obliga a pensar en hipoventilación o en enfermedad pulmonar asociada.', cutoff: 'Sin umbral único establecido; se interpretan junto con el resto del estudio' },
      { metodo: 'Registro de adherencia a la CPAP', interpretacion: 'Los equipos actuales registran horas de uso, fugas e índice residual de eventos. Es el dato más útil del seguimiento, y permite distinguir el fracaso terapéutico real del simple no uso.', cutoff: 'Uso de 4 horas o más por noche en el 70% de las noches, aunque el beneficio aumenta con más horas' },
      { metodo: 'Espirometria', interpretacion: 'No diagnóstica la apnea, pero identifica el solapamiento con EPOC, que empeora la hipoxemia nocturna y cambia el manejo. En el obeso puede mostrar un patrón restrictivo por el propio peso.', cutoff: 'Cociente FEV1/FVC menor de 0.7 tras broncodilatador: obstrucción asociada' }
    ],
    imagen: [
      { modalidad: 'Exploración de la via aérea superior', hallazgos: 'No es imagen radiológica pero es lo primero: puntuación de Mallampati modificada, tamaño amigdalar, retrognatia, macroglosia, obstrucción nasal y perímetro cervical. Identifica factores anatómicos corregibles y anticipa la dificultad de la intubación.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Indicado ante apnea central, sospecha de hipertensión pulmonar o insuficiencia cardiaca. La fracción de eyección reducida con apnea central predominante contraindica la servoventilacion adaptativa, de modo que este dato cambia directamente el tratamiento.' },
      { modalidad: 'Nasofibroscopia y somnoscopia', hallazgos: 'Valoración del nivel de obstrucción en el candidato a cirugía o a estimulación del nervio hipogloso. La somnoscopia inducida con fármacos identifica el patrón de colapso, y el colapso concentrico completo del velo del paladar contraindica la estimulación.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Poco útil para el diagnóstico, pero orienta en el paciente hipercapnico: cardiomegalia, signos de hipertensión pulmonar o enfermedad pulmonar asociada. Ayuda a decidir si la hipoventilación es solo por obesidad o hay algo más.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Los trastornos respiratorios del sueño se clasifican primero por el <strong>tipo de evento</strong>: obstructivo (hay esfuerzo respiratorio contra una via cerrada), central (no hay esfuerzo) o mixto. Después, dentro de la apnea obstructiva, por la <strong>gravedad</strong> según el índice de apnea-hipopnea. Y en paralelo hay que responder a una pregunta que no depende del índice: si el paciente <strong>hipoventila estando despierto</strong>, lo que define el síndrome de hipoventilación-obesidad y cambia el manejo. La decisión de tratar combina las tres cosas con los síntomas y con la comorbilidad.`,
    escalas: [
      { nombre: 'Índice de apnea-hipopnea (calculadora disponible)', componentes: 'Número de apneas más hipopneas dividido entre las horas de sueño (polisomnografía) o de registro (poligrafia domiciliaria).', formula: 'Leve de 5 a 15; moderada de 15 a 30; grave por encima de 30. El diagnóstico exige un índice de 5 o más con síntomas o comorbilidad, o de 15 o más con independencia de los síntomas.', interpretacion: 'La poligrafia domiciliaria INFRAESTIMA el índice porque divide por el tiempo de registro y no por el tiempo dormido. Además, el índice mide frecuencia y no profundidad: dos pacientes con el mismo índice pueden tener cargas hipóxicas muy distintas.' },
      { nombre: 'Cuestionario STOP-BANG (calculadora disponible)', componentes: 'Ronquido, cansancio, apneas presenciadas, hipertensión, índice de masa corporal mayor de 35, edad mayor de 50 años, perímetro cervical mayor de 40 cm y sexo masculino.', formula: 'Un punto por ítem. De 0 a 2 riesgo bajo; de 3 a 4 riesgo intermedio; de 5 a 8 riesgo alto de apnea moderada o grave.', interpretacion: 'Muy sensible y poco específico: sirve para PRIORIZAR el estudio y para el cribado preoperatorio, no para diagnosticar. Una puntuación baja no autoriza a no estudiar a un paciente con clínica sugestiva.' },
      { nombre: 'Escala de somnolencia de Epworth (calculadora disponible)', componentes: 'Ocho situaciones cotidianas puntuadas de 0 (nunca me dormiria) a 3 (alta probabilidad de dormirme).', formula: 'Suma de 0 a 24. Por encima de 10 se considera somnolencia diurna excesiva.', interpretacion: 'Mide el síntoma, no la enfermedad: se correlaciona mal con el índice de apnea-hipopnea. Es muy útil para seguir la respuesta al tratamiento y para valorar el riesgo al volante, pero un valor normal no descarta una apnea grave.' },
      { nombre: 'Criterios de hipoventilación-obesidad (calculadora disponible)', componentes: 'Índice de masa corporal, PaCO2 arterial en vigilia, bicarbonato sérico y exclusión de otras causas de hipoventilación.', formula: 'IMC de 30 o más más PaCO2 despierto mayor de 45 mmHg, tras excluir enfermedad pulmonar grave, neuromuscular, de la caja torácica, hipotiroidismo grave y fármacos depresores.', interpretacion: 'Un bicarbonato por debajo de 27 mEq/L hace el diagnóstico muy improbable y permite evitar la gasometría. Alrededor del 90% de estos pacientes tiene además apnea obstructiva, y su reconocimiento cambia el tipo de soporte ventilatorio.' },
      { nombre: 'Clasificación de las apneas centrales', componentes: 'Contexto clínico en el que aparece el patrón central.', formula: 'Con respiración de Cheyne-Stokes (insuficiencia cardiaca, ictus); por fármacos (opioides); por enfermedad médica sin Cheyne-Stokes; por altitud; primaria (rara); y emergente con el tratamiento con presión positiva.', interpretacion: 'La apnea central no es un diagnóstico final sino un hallazgo que obliga a buscar la causa. La forma emergente con el tratamiento suele resolverse sola en semanas o meses y no debe llevar a retirar la CPAP de forma precipitada.' },
      { nombre: 'Escala de Mallampati modificada', componentes: 'Visualizacion de las estructuras orofaringeas con la boca abierta y la lengua en reposo.', formula: 'De I (se ve el paladar blando completo, la uvula y los pilares) a IV (solo se ve el paladar duro).', interpretacion: 'Una clase alta se asocia a mayor riesgo de apnea obstructiva y, sobre todo, anticipa una intubación difícil. Es una exploración de 5 segundos con valor pronóstico perioperatorio.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Apnea obstructiva del sueño: sospecha y diagnóstico',
      color: '#2f6b5f',
      definicion: 'Episodios repetidos de colapso total (apnea) o parcial (hipopnea) de la via aérea superior durante el sueño, con esfuerzo respiratorio conservado, que producen desaturaciones intermitentes y microdespertares con fragmentación del sueño.',
      fisiopatologia: 'La faringe carece de soporte óseo y se mantiene abierta por el tono de sus músculos dilatadores. Durante el sueño ese tono disminuye, y si la via es estrecha (por grasa perifaringea, retrognatia, amigdalas grandes o macroglosia) la presión negativa inspiratoria la colapsa. El paciente sigue haciendo esfuerzo contra una via cerrada hasta que un microdespertar recupera el tono y reabre la faringe. El ciclo se repite decenas o cientos de veces por noche y genera dos consecuencias: fragmentación del sueño, que explica la somnolencia, e hipoxia intermitente con oscilaciones de la presión intratorácica y descargas simpáticas, que explican el daño cardiovascular.',
      epidemiologia: 'Muy prevalente y muy infradiagnosticada: se estima que la mayoría de los casos moderados y graves no están identificados. La prevalencia ha aumentado en paralelo a la obesidad. En la mujer se diagnostica menos y más tarde porque la presentación es distinta y porque el ronquido se refiere con menos frecuencia.',
      factores_riesgo: ['Obesidad, sobre todo con acumulo de grasa cervical', 'Perímetro cervical aumentado', 'Sexo masculino, con acortamiento de la diferencia tras la menopausia', 'Edad avanzada', 'Menopausia', 'Anomalías craneofaciales: retrognatia, micrognatia, paladar ojival', 'Hipertrofia amigdalar y macroglosia', 'Obstrucción nasal crónica', 'Alcohol, benzodiacepinas y opioides antes de dormir', 'Hipotiroidismo y acromegalia', 'Tabaquismo', 'Antecedente familiar'],
      clinica: 'Ronquido habitual, apneas presenciadas, despertares con ahogo, sueño no reparador y nicturia. De dia: somnolencia excesiva, cefalea matutina, fatiga, irritabilidad y dificultad de concentración. En la MUJER predominan la fatiga, el insomnio y el ánimo bajo sobre la somnolencia clásica. Hay que preguntar SIEMPRE de forma explícita por la somnolencia al volante.',
      criterios_dx: 'Índice de apnea-hipopnea de 5 o más por hora CON síntomas o comorbilidad asociada, o de 15 o más con independencia de los síntomas. La confirmación es con poligrafia respiratoria o polisomnografía, nunca con un cuestionario. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'Bicarbonato sérico como cribado de hipoventilación. Hormona tiroestimulante ante sospecha de hipotiroidismo. Hemograma, hemoglobina glucosilada y perfil lipídico dentro de la valoración global.',
      imagen: 'Exploración de la via aérea superior con Mallampati, perímetro cervical y valoración nasal. Ecocardiograma si hay apnea central, sospecha de insuficiencia cardiaca o de hipertensión pulmonar.',
      complementarios: 'POLIGRAFIA RESPIRATORIA domiciliaria en el paciente sin comorbilidad con alta probabilidad de apnea moderada o grave. POLISOMNOGRAFÍA si hay enfermedad cardiorrespiratoria, sospecha de hipoventilación, debilidad neuromuscular, opioides crónicos, ictus previo, insomnio grave o sospecha de otro trastorno del sueño, y siempre que la poligrafia sea negativa o no concluyente en un paciente sospechoso.',
      dx_diferencial: 'Sueño insuficiente por hábitos, que es la causa más frecuente de somnolencia y se resuelve preguntando cuantas horas duerme; insomnio; narcolepsia; síndrome de piernas inquietas y movimientos periódicos; depresión; hipotiroidismo; efecto de fármacos sedantes; trastorno del ritmo circadiano por turnos; y síndrome de hipoventilación-obesidad.',
      tx_medico: 'Pérdida de peso, que reduce el índice de forma proporcional. Evitar alcohol y sedantes por la noche. Terapia posicional si los eventos son claramente supinos. Tratar la obstrucción nasal. Higiene de sueño y horario regular. Consejo explícito sobre la conducción.',
      tx_farmacologico: 'No hay tratamiento farmacológico que sustituya a la presión positiva. Los fármacos para la obesidad, incluida la tirzepatida, han demostrado reducir el índice de apnea-hipopnea en pacientes con obesidad y se están incorporando como tratamiento coadyuvante. Evitar benzodiacepinas y opioides.',
      tx_intervencionista: 'Se detalla en la ficha de tratamiento: presión positiva continua, dispositivo de avance mandibular, cirugía en casos seleccionados y estimulación del nervio hipogloso.',
      criterios_uci: 'No por sí misma. Si por sus consecuencias agudas: insuficiencia respiratoria hipercápnica en el paciente que además hipoventila, o complicaciones perioperatorias.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente ingresado con apnea conocida, mantener la CPAP durante el ingreso, extremar la cautela con opioides y sedantes, y monitorizar la saturación. Es un punto de fallo frecuente: el equipo del paciente se queda en casa y nadie lo sustituye.',
      seguimiento_ambulatorio: 'Revisión precoz tras iniciar el tratamiento para resolver problemas de mascarilla y de tolerancia, que es cuando se pierde a la mayoría de los pacientes. Después, control periódico con descarga de datos de adherencia.',
      pronostico: 'Bueno con tratamiento adecuado en cuanto a síntomas y calidad de vida. El impacto sobre los eventos cardiovasculares es más discutido y depende mucho de la adherencia.',
      algoritmo: ['Preguntar por ronquido, apneas presenciadas, sueño no reparador y somnolencia', 'Preguntar de forma explícita por la somnolencia al volante', 'Explorar la via aérea superior y medir el perímetro cervical', 'Revisar la medicación: opioides, benzodiacepinas y alcohol', 'Aplicar un cuestionario de cribado para PRIORIZAR, no para decidir', 'Comprobar si hay comorbilidad que impida la poligrafia domiciliaria', 'Pedir poligrafia domiciliaria o polisomnografía según ese filtro', 'Si la poligrafia es negativa y el paciente sigue siendo sospechoso, hacer polisomnografía', 'Medir bicarbonato y, si esta elevado, gasometría diurna en el obeso', 'Decidir el tratamiento por índice, síntomas y comorbilidad']
    },
    {
      nombre: 'Tratamiento de la apnea obstructiva: CPAP y alternativas',
      color: '#3d5a73',
      definicion: 'Conjunto de medidas dirigidas a mantener la via aérea superior abierta durante el sueño, con la presión positiva continua como tratamiento de elección en las formas moderada y grave.',
      fisiopatologia: 'La CPAP actúa como una ferula neumática: la presión positiva mantenida transmitida a la faringe impide su colapso. No trata la causa (la anatomía y la obesidad siguen ahi), lo que explica que el efecto desaparezca la noche que no se usa y que la adherencia sea el determinante del beneficio. El dispositivo de avance mandibular actúa desplazando la mandibula y la lengua hacia delante, lo que amplia el espacio retrogloso. La estimulación del nervio hipogloso contrae la lengua de forma sincronizada con la inspiración.',
      epidemiologia: 'La adherencia a la CPAP es el problema central del tratamiento: una proporción importante de pacientes la abandona en el primer año, y buena parte de esos abandonos se producen en las primeras semanas, que es justo cuando el seguimiento suele ser más escaso.',
      factores_riesgo: ['Mala adaptación inicial a la mascarilla', 'Obstrucción nasal no tratada', 'Claustrofobia', 'Fugas por mascarilla mal ajustada', 'Sequedad de mucosas sin humidificacion', 'Falta de seguimiento en las primeras semanas', 'Ausencia de síntomas percibidos por el paciente', 'Insomnio asociado', 'Escaso apoyo del entorno', 'Presiones elevadas mal toleradas'],
      clinica: 'La respuesta esperable es mejoría de la somnolencia, del sueño no reparador y de la calidad de vida en las primeras semanas. La ausencia de mejoría obliga a revisar la adherencia real, las fugas, el índice residual de eventos y a replantear el diagnóstico, incluida la posibilidad de sueño insuficiente o de otro trastorno asociado.',
      criterios_dx: 'No aplica: es la fase terapéutica. La indicación se establece por el índice de apnea-hipopnea junto con los síntomas y la comorbilidad. Ver la Figura 3 de Definición.',
      laboratorio: 'Los que correspondan a la comorbilidad. En el paciente hipercapnico, gasometría de control tras iniciar el soporte ventilatorio.',
      imagen: 'Nasofibroscopia y somnoscopia inducida con fármacos en el candidato a cirugía o a estimulación del nervio hipogloso, para identificar el nivel y el patrón de colapso.',
      complementarios: 'DESCARGA DE DATOS del equipo: horas de uso, fugas e índice residual de eventos. Es la herramienta más útil del seguimiento y distingue el fracaso terapéutico real del no uso, que son dos problemas distintos con soluciones distintas.',
      dx_diferencial: 'Ante la falta de respuesta al tratamiento, descartar sueño insuficiente, adherencia baja, fugas, presión insuficiente, apnea central emergente, narcolepsia asociada, depresión y fármacos sedantes.',
      tx_medico: 'Pérdida de peso y ejercicio, que acompañan siempre al tratamiento con presión positiva y pueden reducir la gravedad hasta hacerlo innecesario en algunos casos. Terapia posicional si los eventos son supinos. Evitar alcohol y sedantes. Tratamiento de la obstrucción nasal, que mejora mucho la tolerancia.',
      tx_farmacologico: 'Los fármacos para la obesidad, incluida la tirzepatida, reducen el índice de apnea-hipopnea en pacientes con obesidad y son un coadyuvante, no un sustituto de la presión positiva. No hay fármaco que abra la via aérea de forma directa con eficacia demostrada suficiente.',
      tx_intervencionista: 'CPAP como tratamiento de elección en la apnea moderada y grave; la modalidad autoajustable es una alternativa valida en el paciente sin comorbilidad. DISPOSITIVO DE AVANCE MANDIBULAR en la apnea leve o moderada y en la intolerancia a la CPAP, con buena evidencia. Cirugía de la via aérea superior en casos seleccionados con anatomía corregible. ESTIMULACIÓN DEL NERVIO HIPOGLOSO en pacientes seleccionados con intolerancia a la CPAP, con el colapso concentrico completo del velo del paladar como contraindicación. Cirugía bariátrica cuando la obesidad es el motor del cuadro.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Continuar la CPAP domiciliaria durante los ingresos, con precaución extrema con los opioides y los sedantes. Revisar la mascarilla y la humidificacion, que son la causa más frecuente de intolerancia.',
      seguimiento_ambulatorio: 'Revisión PRECOZ, en las primeras semanas, para resolver problemas de interfaz: es la intervención que más mejora la adherencia a largo plazo. Después, controles periódicos con descarga de datos y reevaluación de la somnolencia con la escala de Epworth.',
      pronostico: 'Muy bueno en cuanto a síntomas si el paciente usa el equipo. La adherencia habitual se define como 4 horas o más por noche en el 70% de las noches, aunque el beneficio aumenta con más horas y ese umbral es un mínimo administrativo, no un objetivo.',
      algoritmo: ['Indicar CPAP en la apnea moderada y grave', 'En la apnea leve, tratar si hay síntomas o comorbilidad', 'Elegir y probar la mascarilla con el paciente, no por catalogo', 'Añadir humidificacion y tratar la obstrucción nasal', 'Revisar de forma PRECOZ, en las primeras semanas', 'Descargar los datos: horas de uso, fugas e índice residual', 'Si no tolera la CPAP, ofrecer dispositivo de avance mandibular', 'Valorar cirugía o estimulación del hipogloso en casos seleccionados', 'Mantener siempre la pérdida de peso y la higiene de sueño', 'Reevaluar la somnolencia y el riesgo al volante en cada revisión']
    },
    {
      nombre: 'Apnea central del sueño y respiración de Cheyne-Stokes',
      color: '#7a2f5c',
      definicion: 'Cese o reducción del flujo aéreo durante el sueño por ausencia de esfuerzo respiratorio, es decir, por fallo del impulso del centro respiratorio y no por obstrucción de la via aérea.',
      fisiopatologia: 'El control de la respiración funciona como un bucle de retroalimentación. Cuando la ganancia de ese bucle es excesiva, el sistema oscila: una pequeña subida de CO2 provoca una hiperventilación desproporcionada que baja el CO2 por debajo del umbral de apnea, la respiración se detiene, el CO2 sube de nuevo y el ciclo se repite. En la insuficiencia cardiaca esto se agrava por el tiempo de circulación alargado, que retrasa la información que llega a los quimiorreceptores, y da el patrón creciente-decreciente de la respiración de Cheyne-Stokes. Los opioides actuan por otro mecanismo: deprimen directamente el centro respiratorio.',
      epidemiologia: 'Mucho menos frecuente que la apnea obstructiva. Su causa más común en la práctica clínica es la insuficiencia cardiaca con fracción de eyección reducida, seguida del uso crónico de opioides. La forma emergente con el tratamiento con presión positiva aparece en una minoría de pacientes al iniciar la CPAP y suele resolverse sola.',
      factores_riesgo: ['Insuficiencia cardiaca con fracción de eyección reducida', 'Fibrilación auricular', 'Uso crónico de OPIOIDES', 'Ictus y lesiones del tronco encefálico', 'Insuficiencia renal avanzada', 'Estancia en altitud elevada', 'Edad avanzada', 'Sexo masculino', 'Inicio reciente de tratamiento con presión positiva', 'Acromegalia y otras causas raras'],
      clinica: 'Puede ser asintomática y detectarse solo en el estudio. Cuando da síntomas: sueño fragmentado, despertares frecuentes, insomnio de mantenimiento y somnolencia diurna. A diferencia de la apnea obstructiva, el ronquido suele ser menos llamativo, y el paciente puede consultar por insomnio antes que por somnolencia.',
      criterios_dx: 'Predominio de eventos CENTRALES en el estudio de sueño, que exige registro de esfuerzo respiratorio. Se documenta además el patrón creciente-decreciente si se trata de respiración de Cheyne-Stokes. Ver la Figura 1 de Definición.',
      laboratorio: 'Péptido natriurético, función renal y revisión exhaustiva de la medicación, con atención a los opioides. Gasometría si se sospecha hipercapnia asociada.',
      imagen: 'ECOCARDIOGRAMA obligado: la fracción de eyección es el dato que decide el tratamiento y el que contraindica un modo ventilatorio concreto. Neuroimagen si se sospecha lesión del tronco.',
      complementarios: 'POLISOMNOGRAFÍA, no poligrafia simplificada: hace falta caracterizar bien el esfuerzo y el patrón. Valoración cardiológica y, si procede, ajuste del tratamiento de la insuficiencia cardiaca.',
      dx_diferencial: 'Apnea obstructiva con esfuerzo mal registrado por sensores inadecuados, apnea mixta, hipoventilación por enfermedad neuromuscular o por fármacos, y respiración periódica de la altitud en el viajero.',
      tx_medico: 'Lo primero y más eficaz es TRATAR LA CAUSA: optimizar el tratamiento de la insuficiencia cardiaca según las guías, reducir o retirar los opioides, corregir la anemia y controlar la fibrilación auricular. La apnea central mejora cuando mejora la enfermedad de base.',
      tx_farmacologico: 'Retirada o reducción progresiva de opioides cuando son la causa. Optimización completa del tratamiento de la insuficiencia cardiaca. La acetazolamida se ha usado en casos seleccionados con evidencia limitada, y el oxígeno nocturno puede reducir los eventos sin beneficio demostrado en desenlaces duros.',
      tx_intervencionista: 'CPAP como primer escalón en la insuficiencia cardiaca, que además mejora la función cardiaca por descarga del ventrículo izquierdo. <strong>La SERVOVENTILACION ADAPTATIVA esta CONTRAINDICADA cuando hay fracción de eyección del 45% o menos con apnea central predominante</strong>, porque un ensayo aleatorizado encontró aumento de la mortalidad cardiovascular. La estimulación del nervio frénico es una opción en casos seleccionados.',
      criterios_uci: 'Según la enfermedad de base, sobre todo la descompensación de la insuficiencia cardiaca o la depresión respiratoria por opioides.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Según la cardiopatía de base, no por la apnea en si.',
      seguimiento_hospitalario: 'En el paciente con insuficiencia cardiaca ingresado, la aparición de respiración de Cheyne-Stokes suele indicar mal control hemodinámico: la respuesta es optimizar el tratamiento cardiológico, no añadir un ventilador.',
      seguimiento_ambulatorio: 'Reevaluar tras optimizar la causa, porque muchos casos mejoran o desaparecen. La apnea central emergente con el tratamiento se resuelve sola en semanas o meses en la mayoría y no debe llevar a retirar la CPAP de forma precipitada.',
      pronostico: 'Depende por completo de la enfermedad de base. La respiración de Cheyne-Stokes en la insuficiencia cardiaca es un marcador de gravedad y de peor pronóstico, más que una enfermedad independiente.',
      algoritmo: ['Comprobar en el estudio que el esfuerzo respiratorio esta AUSENTE', 'Buscar la causa: es un signo, no un diagnóstico final', 'Hacer ecocardiograma y medir la fracción de eyección', 'Revisar la medicación, sobre todo los OPIOIDES', 'Descartar ictus o lesión del tronco si el contexto lo sugiere', 'Optimizar el tratamiento de la insuficiencia cardiaca', 'Reducir o retirar los opioides si son la causa', 'Considerar CPAP como primer escalón', 'NO usar servoventilacion adaptativa si la fracción de eyección es del 45% o menos', 'Reevaluar el estudio tras optimizar la causa']
    },
    {
      nombre: 'Síndrome de hipoventilación-obesidad',
      color: '#8c5a2e',
      definicion: 'Combinación de obesidad (índice de masa corporal de 30 o más) e hipercapnia diurna (PaCO2 en vigilia mayor de 45 mmHg) que no se explica por otra causa de hipoventilación.',
      fisiopatologia: 'Confluyen tres mecanismos. Primero, la carga mecánica: la grasa toracoabdominal reduce la distensibilidad del sistema respiratorio y aumenta el trabajo, con respiración superficial y volúmenes pulmonares bajos, sobre todo en decúbito. Segundo, la reducción del impulso ventilatorio central, en parte por resistencia a la leptina y en parte por la adaptación del centro respiratorio a la hipercapnia mantenida. Y tercero, la apnea obstructiva asociada, presente en la gran mayoría, que añade eventos que no dan tiempo a lavar el CO2 acumulado. El riñón compensa reteniendo bicarbonato, y ese bicarbonato elevado es la huella crónica que permite sospechar el cuadro sin gasometría.',
      epidemiologia: 'Frecuente en las unidades de obesidad y muy infradiagnosticado en planta, donde a menudo se etiqueta simplemente como apnea del sueño. Alrededor del 90% de estos pacientes tiene además apnea obstructiva, la mayoría grave. Se diagnostica con frecuencia en un ingreso por insuficiencia respiratoria hipercápnica, es decir, tarde.',
      factores_riesgo: ['Obesidad, sobre todo con índice de masa corporal por encima de 40', 'Distribución central de la grasa', 'Apnea obstructiva del sueño grave asociada', 'Sexo femenino en algunas series', 'Uso de sedantes, opioides y alcohol', 'Hipotiroidismo no tratado', 'Insuficiencia cardiaca asociada', 'Enfermedad pulmonar concomitante', 'Sedentarismo y pérdida de masa muscular respiratoria', 'Retraso en el diagnóstico, que perpetua el círculo'],
      clinica: 'Disnea de esfuerzo desproporcionada, somnolencia diurna intensa, cefalea matutina (muy sugestiva de hipercapnia nocturna), edemas y signos de cor pulmonale. En la descompensación aguda, encefalopatía hipercápnica con somnolencia progresiva, asterixis y desorientación, que se confunde con facilidad con otras causas de deterioro del nivel de conciencia.',
      criterios_dx: 'Índice de masa corporal de 30 o más, PaCO2 DESPIERTO mayor de 45 mmHg, y exclusión de otras causas de hipoventilación (enfermedad pulmonar grave, neuromuscular, de la caja torácica, hipotiroidismo grave, fármacos). Ver la Figura 4 de Definición.',
      laboratorio: 'BICARBONATO SÉRICO como cribado: por debajo de 27 mEq/L el diagnóstico es muy improbable. GASOMETRÍA ARTERIAL en vigilia para confirmarlo. Hormona tiroestimulante, hemograma (poliglobulia) y péptido natriurético.',
      imagen: 'Radiografía de tórax y ecocardiograma para valorar hipertensión pulmonar y cor pulmonale, que son frecuentes y marcan gravedad. Pruebas de función pulmonar para excluir enfermedad pulmonar que explique la hipercapnia.',
      complementarios: 'POLISOMNOGRAFÍA con medición de CO2, no poligrafia simplificada, porque hace falta caracterizar la hipoventilación y no solo los eventos obstructivos. Valoración nutricional y por la unidad de obesidad.',
      dx_diferencial: 'EPOC con hipercapnia, enfermedad neuromuscular (esclerosis lateral amiotrófica, distrofias, secuelas de poliomielitis), cifoescoliosis grave, hipoventilación por fármacos, hipotiroidismo grave y síndrome de hipoventilación central congénita.',
      tx_medico: 'PÉRDIDA DE PESO como tratamiento de fondo, con objetivo ambicioso: es lo único que puede revertir el síndrome. Evitar de forma estricta sedantes, opioides y alcohol. Rehabilitación y movilización. Tratar la insuficiencia cardiaca y el hipotiroidismo si están presentes.',
      tx_farmacologico: 'Ningún fármaco específico. Los fármacos para la obesidad han cambiado el panorama del tratamiento de fondo. Retirar todo depresor respiratorio. El oxígeno se usa solo AÑADIDO a la presión positiva, nunca en solitario.',
      tx_intervencionista: 'PRESIÓN POSITIVA nocturna: CPAP si hay apnea obstructiva grave asociada, que es la situación más frecuente, y ventilación no invasiva con dos niveles de presión si predomina la hipoventilación o si la CPAP no corrige la hipercapnia. CIRUGÍA BARIÁTRICA en el candidato adecuado, que es el tratamiento con mayor potencial de curación.',
      criterios_uci: 'Insuficiencia respiratoria hipercápnica aguda con acidosis, deterioro del nivel de conciencia o fracaso de la ventilación no invasiva. Estos pacientes toleran mal la sedación y son de intubación difícil, de modo que conviene anticipar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica; la obesidad extrema es además contraindicación para el trasplante pulmonar.',
      seguimiento_hospitalario: 'Ventilación no invasiva precoz en la agudizacion hipercápnica, evitando el oxígeno en solitario. Vigilar el nivel de conciencia y la evolución del pH. Iniciar el soporte domiciliario ANTES del alta y asegurar el circuito de seguimiento, porque el reingreso precoz es frecuente.',
      seguimiento_ambulatorio: 'Gasometría de control tras iniciar el soporte para comprobar que la hipercapnia mejora. Descarga de datos del equipo. Programa estructurado de pérdida de peso y valoración de cirugía bariátrica.',
      pronostico: 'Malo sin tratamiento: mortalidad elevada y reingresos frecuentes. Mejora de forma clara con presión positiva y pérdida de peso, y el diagnóstico precoz cambia el curso, lo que hace que el infradiagnostico sea aquí especialmente costoso.',
      algoritmo: ['Sospecharlo en todo obeso con somnolencia, disnea o cefalea matutina', 'Medir el BICARBONATO sérico como cribado', 'Si es de 27 mEq/L o más, hacer gasometría arterial DESPIERTO', 'Confirmar PaCO2 mayor de 45 mmHg en vigilia', 'Excluir enfermedad pulmonar, neuromuscular, torácica, tiroidea y fármacos', 'Hacer polisomnografía con medición de CO2', 'Retirar sedantes, opioides y alcohol', 'Iniciar presión positiva nocturna: CPAP o ventilación con dos niveles', 'NUNCA dejar al paciente solo con oxígeno', 'Programa de pérdida de peso y valoración de cirugía bariátrica']
    },
    {
      nombre: 'Consecuencias cardiovasculares, metabólicas y neurocognitivas',
      color: '#8c3a34',
      definicion: 'Conjunto de repercusiones sistémicas derivadas de la hipoxia intermitente, las oscilaciones de la presión intratorácica, las descargas simpáticas repetidas y la fragmentación crónica del sueño.',
      fisiopatologia: 'Cada evento obstructivo produce una descarga simpática, un pico de presión arterial al final de la apnea y una oscilacion brusca de la presión intratorácica que aumenta la poscarga del ventrículo izquierdo y estira la auricula. Repetido cientos de veces por noche durante años, eso genera hiperactividad simpática mantenida, inflamación sistémica, estrés oxidativo, disfunción endotelial y remodelado auricular. La fragmentación del sueño añade resistencia a la insulina y deterioro de la consolidación de la memoria.',
      epidemiologia: 'La apnea obstructiva es la causa identificable más frecuente de HIPERTENSIÓN RESISTENTE. Es también muy prevalente en la fibrilación auricular, donde se asocia a mayor tasa de recurrencia tras cardioversión y tras ablación si no se trata.',
      factores_riesgo: ['Índice de apnea-hipopnea elevado', 'Carga hipóxica alta con tiempo prolongado por debajo del 90%', 'Obesidad asociada', 'Duración prolongada de la enfermedad sin tratar', 'Somnolencia diurna marcada, que identifica al grupo de mayor riesgo', 'Hipertensión resistente', 'Fibrilación auricular', 'Diabetes tipo 2', 'Tabaquismo y dislipemia concomitantes', 'Adherencia baja al tratamiento'],
      clinica: 'Hipertensión arterial de predominio nocturno con patrón no dipper o riser, hipertensión resistente, fibrilación auricular, bradiarritmias nocturnas, angina nocturna, insuficiencia cardiaca, ictus, deterioro cognitivo, ánimo bajo y disfunción sexual. Muchas de estas asociaciones son bidireccionales y comparten la obesidad como factor común.',
      criterios_dx: 'No hay criterios propios: son las consecuencias de la enfermedad. La regla práctica es buscar apnea de forma activa ante hipertensión resistente, fibrilación auricular recurrente, ictus e insuficiencia cardiaca.',
      laboratorio: 'Hemoglobina glucosilada, perfil lipídico, función renal y microalbuminuria dentro de la valoración del riesgo cardiovascular global.',
      imagen: 'Monitorización ambulatoria de la presión arterial de 24 horas, que detecta el patrón nocturno alterado. Ecocardiograma según la sospecha de cardiopatía.',
      complementarios: 'Cribado activo de apnea en las poblaciones de riesgo, que es donde el rendimiento es mayor: hipertensión resistente, fibrilación auricular, insuficiencia cardiaca, ictus y diabetes mal controlada.',
      dx_diferencial: 'Separar lo que produce la apnea de lo que produce la obesidad que la acompaña es difícil y sigue siendo objeto de debate. En la práctica, ambas se tratan a la vez.',
      tx_medico: 'Tratamiento del riesgo cardiovascular global: presión arterial, lípidos, glucemia, peso, ejercicio y tabaco. La apnea es una pieza más, no un sustituto del resto.',
      tx_farmacologico: 'El de cada comorbilidad según sus guías. En la hipertensión resistente, los antagonistas del receptor mineralocorticoide son especialmente útiles y además reducen el edema perifaringeo por retención de líquido.',
      tx_intervencionista: 'CPAP, que baja la presión arterial de forma modesta y algo mayor en la hipertensión resistente, y mejora la somnolencia, la calidad de vida y la función cognitiva. Los ensayos aleatorizados NO han demostrado reducción de eventos cardiovasculares, con la advertencia importante de que la adherencia media fue baja y de que se excluyo a los pacientes muy somnolientos, que son probablemente los que más se benefician.',
      criterios_uci: 'Los de cada complicación aguda: síndrome coronario, ictus, insuficiencia cardiaca descompensada o arritmia mal tolerada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante una fibrilación auricular recurrente tras cardioversión o ablación, o una hipertensión que no se controla con tres fármacos, buscar apnea de forma activa antes de seguir añadiendo tratamiento.',
      seguimiento_ambulatorio: 'Control conjunto del riesgo cardiovascular y de la adherencia al tratamiento de la apnea. Reevaluar la presión arterial tras iniciar la CPAP.',
      pronostico: 'La asociación con eventos cardiovasculares es sólida en los estudios observacionales; el beneficio del tratamiento sobre esos eventos no esta demostrado en ensayos aleatorizados. La conclusion práctica no es dejar de tratar, sino tratar bien: la adherencia es lo que separa un tratamiento eficaz de un aparato guardado en un armario.',
      algoritmo: ['Buscar apnea ante hipertensión RESISTENTE', 'Buscarla ante fibrilación auricular recurrente', 'Buscarla ante ictus e insuficiencia cardiaca', 'Hacer monitorización ambulatoria de la presión si se sospecha patrón nocturno alterado', 'Tratar el riesgo cardiovascular global, no solo la apnea', 'Usar antagonistas mineralocorticoides en la hipertensión resistente', 'Indicar CPAP y perseguir la ADHERENCIA', 'Explicar con honestidad lo que la CPAP si y no ha demostrado', 'Reevaluar la presión arterial y la somnolencia tras iniciarla', 'No sustituir el tratamiento de las comorbilidades por la CPAP']
    },
    {
      nombre: 'Situaciones especiales: perioperatorio, conducción y poblaciones',
      color: '#6b4a7a',
      definicion: 'Contextos en los que la apnea del sueño deja de ser un problema crónico de consulta y se convierte en un riesgo inmediato: la anestesia, el volante y los grupos en los que la enfermedad se presenta de otra manera.',
      fisiopatologia: 'En el perioperatorio confluyen tres agresiones sobre una via aérea ya vulnerable: los anestésicos y los opioides deprimen el impulso ventilatorio y el tono de los músculos dilatadores de la faringe, el decúbito supino favorece el colapso, y el rebote de sueño REM de las noches siguientes a la cirugía concentra los eventos justo cuando la vigilancia ya se ha relajado. En la conducción, el mecanismo es la somnolencia y la alteración de la atención sostenida y del tiempo de reacción.',
      epidemiologia: 'Una proporción alta de los pacientes quirúrgicos con apnea llega al quirófano sin diagnosticar. El riesgo de accidente de tráfico esta aumentado en los pacientes con apnea y disminuye con el tratamiento eficaz. En la MUJER la enfermedad se diagnostica menos y más tarde, y en el ANCIANO el índice se eleva con la edad sin que eso signifique siempre enfermedad con la misma repercusión.',
      factores_riesgo: ['Cirugía con anestesia general y uso de opioides', 'Cirugía de la via aérea o cervical', 'Apnea no diagnosticada al llegar al quirófano', 'Obesidad y perímetro cervical aumentado', 'Uso de opioides o sedantes en el posoperatorio', 'Conducción profesional', 'Turnicidad y privación crónica de sueño', 'Consumo de alcohol', 'Sexo femenino para el infradiagnostico', 'Edad avanzada con comorbilidad'],
      clinica: 'En el perioperatorio: desaturaciones en la sala de despertar, apneas al retirar el estímulo, sensibilidad exagerada a dosis habituales de opioides y dificultad de intubación o de ventilación con mascarilla. En la conducción: episodios de somnolencia al volante, invasión involuntaria del carril, casi accidentes y accidentes.',
      criterios_dx: 'Cribado preoperatorio con STOP-BANG en todo paciente que va a anestesia general, y pregunta explícita y sistemática sobre somnolencia al volante en cada revisión.',
      laboratorio: 'Bicarbonato sérico en el paciente obeso que va a cirugía: un valor elevado sugiere hipoventilación crónica y multiplica el riesgo perioperatorio.',
      imagen: 'Valoración anatómica de la via aérea con Mallampati y perímetro cervical antes de la anestesia. Es una exploración de segundos con valor predictivo directo sobre la intubación.',
      complementarios: 'En cirugía programada no urgente, valorar retrasarla para completar el estudio y adaptar la CPAP si la sospecha es alta y el procedimiento lo permite. El paciente debe LLEVAR SU EQUIPO al hospital.',
      dx_diferencial: 'En la somnolencia al volante, descartar sueño insuficiente (la causa más frecuente con diferencia), fármacos sedantes, alcohol, turnos y narcolepsia, además de la apnea.',
      tx_medico: 'Información explícita al paciente sobre el riesgo de conducir con somnolencia y sobre la obligacion de no hacerlo mientras no este controlada. Documentar esa conversación. Consejo sobre siestas breves y sobre evitar la conducción nocturna hasta que el tratamiento sea eficaz.',
      tx_farmacologico: 'Minimizar opioides con analgesia multimodal, evitar benzodiacepinas y usar antagonistas cuando proceda. En algunos países hay fármacos aprobados para la somnolencia residual pese a tratamiento adecuado, que se usan solo tras optimizar la CPAP y descartar otras causas.',
      tx_intervencionista: 'Continuar la CPAP en el posoperatorio inmediato, posición incorporada, monitorización prolongada de la saturación en pacientes de alto riesgo, y extubación despierto y en semiincorporado. Anticipar via aérea difícil.',
      criterios_uci: 'Paciente con apnea grave o hipoventilación sometido a cirugía mayor con opioides, o con desaturaciones repetidas en la unidad de despertar que no se corrigen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Identificar en el ingreso a los pacientes con apnea conocida, asegurar que su equipo esta disponible, evitar sedantes y opioides innecesarios y monitorizar la saturación. Es un fallo de sistema frecuente y fácil de corregir.',
      seguimiento_ambulatorio: 'Reevaluar la somnolencia con la escala de Epworth en cada revisión y volver a preguntar por la conducción. En la mujer, mantener un umbral bajo de sospecha aunque no refiera ronquido ni somnolencia clásica.',
      pronostico: 'El tratamiento eficaz reduce el riesgo de accidente de tráfico. En el perioperatorio, la identificación previa y las medidas de precaución reducen las complicaciones respiratorias, que es justamente lo que se pierde cuando el paciente llega sin diagnosticar.',
      algoritmo: ['Cribar con STOP-BANG antes de toda anestesia general', 'Explorar la via aérea y medir el perímetro cervical', 'Pedir bicarbonato en el obeso que va a cirugía', 'Valorar retrasar la cirugía programada si la sospecha es alta', 'Pedir al paciente que LLEVE su equipo de CPAP al hospital', 'Minimizar opioides con analgesia multimodal', 'Extubar despierto y en posición semiincorporada', 'Monitorizar la saturación más tiempo del habitual', 'Preguntar SIEMPRE por la somnolencia al volante', 'Documentar el consejo sobre conducción en la historia']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La apnea del sueño falla casi siempre por los mismos sitios: no se piensa en ella, se criba con un cuestionario y se da por descartada, se pide la prueba equivocada, o se prescribe una CPAP que el paciente no llega a usar. Lo que sigue es la lista que evita esos cuatro fallos.',
    parametros: ['Preguntar por ronquido, apneas presenciadas y somnolencia en todo paciente de riesgo', 'Preguntar SIEMPRE, de forma explícita, por la somnolencia al volante', 'No usar un cuestionario para diagnosticar ni para descartar la enfermedad', 'Comprobar que el paciente puede hacer poligrafia domiciliaria antes de pedirla', 'Ante poligrafia negativa en paciente sospechoso, hacer POLISOMNOGRAFÍA', 'Pedir bicarbonato sérico en el obeso, y gasometría diurna si esta elevado', 'No poner oxígeno solo a un paciente que hipoventila', 'Ante apnea CENTRAL, buscar insuficiencia cardiaca y revisar los opioides', 'No usar servoventilacion adaptativa si la fracción de eyección es del 45% o menos', 'Buscar apnea de forma activa ante hipertensión resistente y fibrilación auricular', 'Revisar PRECOZMENTE al paciente que empieza CPAP: ahi se gana la adherencia', 'Mantener la CPAP del paciente durante los ingresos y evitar sedantes y opioides'],
    criterios_uci_general: 'Insuficiencia respiratoria hipercápnica aguda con acidosis o deterioro del nivel de conciencia en el síndrome de hipoventilación-obesidad; fracaso de la ventilación no invasiva; complicaciones respiratorias perioperatorias en el paciente con apnea grave; y descompensación de la enfermedad de base en la apnea central.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. La obesidad extrema del síndrome de hipoventilación-obesidad es contraindicación para el trasplante pulmonar.',
    prevencion: 'Primaria: control del peso a lo largo de la vida, que es el factor modificable con más peso, junto con evitar el alcohol y los sedantes nocturnos y tratar la obstrucción nasal. Secundaria: búsqueda activa de la enfermedad en las poblaciones donde el rendimiento es alto (hipertensión resistente, fibrilación auricular, insuficiencia cardiaca, ictus, diabetes mal controlada, obesidad y cribado preoperatorio), con especial atención a la MUJER, en quien la presentación atípica retrasa el diagnóstico. Terciaria: adherencia al tratamiento, control del peso, prevención del accidente de tráfico y manejo cuidadoso del perioperatorio.'
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
  'Apnea obstructiva del sueño: sospecha y diagnóstico': { definicion: [1, 13, 14], criterios_dx: [1, 13, 14], laboratorio: [1, 13, 14], tx_farmacologico: [1, 13, 14] },
  'Tratamiento de la apnea obstructiva: CPAP y alternativas': { definicion: [2, 9, 10, 11], criterios_dx: [2, 9, 10, 11], laboratorio: [2, 9, 10, 11], tx_farmacologico: [2, 9, 10, 11] },
  'Apnea central del sueño y respiración de Cheyne-Stokes': { definicion: [4, 15], criterios_dx: [4, 15], laboratorio: [4, 15], tx_farmacologico: [4, 15] },
  'Síndrome de hipoventilación-obesidad': { definicion: [3], criterios_dx: [3], laboratorio: [3], tx_farmacologico: [3] },
  'Consecuencias cardiovasculares, metabólicas y neurocognitivas': { definicion: [5, 6, 15], criterios_dx: [5, 6, 15], laboratorio: [5, 6, 15], tx_farmacologico: [5, 6, 15] },
  'Situaciones especiales: perioperatorio, conducción y poblaciones': { definicion: [12, 16], criterios_dx: [12, 16], laboratorio: [12, 16], tx_farmacologico: [12, 16] }
};
export const estigmasTitulo = 'Signos y pistas que orientan hacia un trastorno respiratorio del sueño';
export const estigmas = [
  { s: 'Ronquido intenso con apneas presenciadas', p: 'La pareja es la que consulta', photo: null, desc: 'Es la presentación clásica, y a menudo quien pide la consulta no es el paciente sino quien duerme a su lado. La ausencia de ronquido no descarta la enfermedad, sobre todo en la mujer y en el paciente que duerme solo.' },
  { s: 'Despertar con sensación de ahogo', p: 'Muy sugestivo', photo: null, desc: 'El paciente se despierta bruscamente con sensación de atragantamiento o de falta de aire, que cede en segundos. Se confunde con crisis de ansiedad, con reflujo o con disnea paroxística nocturna de origen cardiaco.' },
  { s: 'Nicturia sin causa urológica', p: 'Muy infravalorada', photo: null, desc: 'Las oscilaciones de presión intratorácica aumentan la liberación de péptido natriurético auricular y con ella la diuresis nocturna. Se atribuye casi siempre a la próstata, y mejora de forma llamativa con el tratamiento de la apnea.' },
  { s: 'Cefalea matutina que cede en una hora', p: 'Sospecha de hipercapnia', photo: null, desc: 'Sugiere retención nocturna de CO2 con vasodilatación cerebral. En un paciente obeso obliga a medir el bicarbonato y, si esta elevado, a hacer una gasometría arterial estando despierto.' },
  { s: 'Perímetro cervical aumentado', p: 'Predictor potente', photo: null, desc: 'Por encima de 40 cm es uno de los ítems del cribado y predice mejor que el propio índice de masa corporal, porque lo que colapsa la faringe es la grasa perifaringea y no el peso global.' },
  { s: 'Mallampati clase III o IV', p: 'Via aérea estrecha', photo: null, desc: 'Una exploración de 5 segundos que se asocia a mayor riesgo de apnea y que sobre todo anticipa una intubación difícil. Merece la pena hacerla y anotarla antes de cualquier anestesia.' },
  { s: 'Retrognatia o micrognatia', p: 'Factor anatómico', photo: null, desc: 'Desplaza la base de la lengua hacia atrás y reduce el espacio retrogloso. Explica la apnea en pacientes delgados, en los que el diagnóstico se retrasa porque no encajan con el estereotipo del paciente obeso.' },
  { s: 'Hipertensión que no baja de noche', p: 'Patrón no dipper', photo: null, desc: 'La monitorización de 24 horas muestra ausencia del descenso nocturno fisiológico, o incluso elevación. Es una pista muy útil y una de las razones por las que hay que buscar apnea ante hipertensión resistente.' },
  { s: 'Fibrilación auricular que recurre tras la ablación', p: 'Buscar apnea', photo: null, desc: 'La apnea no tratada se asocia a mayor recurrencia tras cardioversión y tras ablación. Buscarla antes de repetir el procedimiento cambia el resultado y evita repetir una intervención condenada a fallar.' },
  { s: 'Bicarbonato sérico elevado en un obeso', p: 'Huella de hipercapnia crónica', photo: null, desc: 'La retención renal de bicarbonato compensa la hipercapnia mantenida. Es un cribado barato: por debajo de 27 mEq/L el síndrome de hipoventilación-obesidad es muy improbable; por encima, hay que hacer gasometría.' },
  { s: 'Fatiga e insomnio en una mujer de mediana edad', p: 'Presentación atípica', photo: null, desc: 'En la mujer predominan la fatiga, el insomnio, el ánimo bajo y la cefalea sobre la somnolencia clásica, y el ronquido se refiere menos. Es la razón principal del infradiagnostico en este grupo.' },
  { s: 'Apneas centrales en un paciente con insuficiencia cardiaca', p: 'Marcador de gravedad', photo: null, desc: 'La respiración de Cheyne-Stokes traduce mal control hemodinámico y peor pronóstico. La respuesta correcta es optimizar el tratamiento cardiológico, y hay que recordar que la servoventilacion adaptativa esta contraindicada si la fracción de eyección es del 45% o menos.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Índice de apnea-hipopnea (calculadora disponible)': [1],
  'Cuestionario STOP-BANG (calculadora disponible)': [7],
  'Escala de somnolencia de Epworth (calculadora disponible)': [8],
  'Criterios de hipoventilación-obesidad (calculadora disponible)': [3],
  'Clasificación de las apneas centrales': [4, 15],
  'Escala de Mallampati modificada': [12]
};
export const escalaCalc = {
  'Índice de apnea-hipopnea (calculadora disponible)': 'iah-gravedad',
  'Cuestionario STOP-BANG (calculadora disponible)': 'stop-bang',
  'Escala de somnolencia de Epworth (calculadora disponible)': 'epworth',
  'Criterios de hipoventilación-obesidad (calculadora disponible)': 'hipoventilacion-obesidad'
};
export const compGroups = [
  { name: 'Apnea obstructiva', items: ['Apnea obstructiva del sueño: sospecha y diagnóstico', 'Tratamiento de la apnea obstructiva: CPAP y alternativas'] },
  { name: 'Las otras dos', items: ['Apnea central del sueño y respiración de Cheyne-Stokes', 'Síndrome de hipoventilación-obesidad'] },
  { name: 'Consecuencias y contextos', items: ['Consecuencias cardiovasculares, metabólicas y neurocognitivas', 'Situaciones especiales: perioperatorio, conducción y poblaciones'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la apnea obstructiva, separada en el momento de sospecharla y diagnosticarla y el de tratarla, porque son dos problemas distintos: el primero es de indicación de la prueba correcta y el segundo, casi entero, de adherencia. Las dos siguientes son las entidades que comparten el estudio pero no la causa: la apnea central, que es un signo de otra cosa, y el síndrome de hipoventilación-obesidad, que se define por un dato que solo se ve estando despierto. Las dos últimas recogen lo que la enfermedad hace a largo plazo y los contextos en los que se vuelve un riesgo inmediato.';
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
  root: { title: 'APNEA DEL SUEÑO', color: '#2f6b5f', target: 'definicion' },
  branches: [
    { title: 'QUE EVENTO ES', sub: 'Hay esfuerzo o no lo hay', color: '#2f6b5f', target: 'complicaciones', leaves: [
      { title: 'Obstructivo', sub: 'Lucha contra una via cerrada', color: '#2f6b5f', target: 'complicaciones' },
      { title: 'Central', sub: 'Es un signo, no un diagnóstico', color: '#7a2f5c', target: 'complicaciones' },
      { title: 'Las dos hipopneas', sub: 'Desaturación del 3% o del 4%', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Hipoventilacion', sub: 'Se ve con el paciente despierto', color: '#8c5a2e', target: 'complicaciones' }
    ] },
    { title: 'QUE PRUEBA', sub: 'Domiciliaria o de laboratorio', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Poligrafia', sub: 'Comoda, pero infraestima', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Polisomnografia', sub: 'Si hay comorbilidad o duda', color: '#2f6b5f', target: 'diagnostico' },
      { title: 'Negativa y sospechoso', sub: 'Hacer polisomnografía', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Cuestionarios', sub: 'Criban, no diagnostican', color: '#8a6a1f', target: 'clasificacion' }
    ] },
    { title: 'QUE HACER', sub: 'Y sobre todo, que se cumpla', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'CPAP', sub: 'Elección en moderada y grave', color: '#3d5a73', target: 'complicaciones' },
      { title: 'La adherencia manda', sub: 'Revisar pronto, no al año', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Nunca oxígeno solo', sub: 'Si el paciente hipoventila', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'Preguntar por el volante', sub: 'El riesgo más inmediato', color: '#6b4a7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [3, 13], no_invasivos: [1, 7, 8], imagen: [4, 12] };
export const clasificacionCite = [1, 3, 7, 8];
export const seguimientoCite = [1, 2, 3];
