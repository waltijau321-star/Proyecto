// topics/apnea-sueno/content.js: Apnea del sue&#241;o y trastornos respiratorios del sue&#241;o.
// Cubre el item "Apnea obstructiva del sue&#241;o" del cluster Enfermedad respiratoria cronica
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
  titulo: 'Apnea del Sue&#241;o',
  subtitulo: 'Modulo 56 · Medicina Interna',
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
    <strong style="color:#2f6b5f;">La pregunta que separa los dos grandes tipos de evento es si HAY ESFUERZO RESPIRATORIO.</strong> <span style="color:var(--ink-dim);">Si el paciente lucha por respirar contra una via aerea cerrada, el evento es obstructivo. Si simplemente deja de mandar la orden de respirar, es central. De esa diferencia dependen la causa que hay que buscar y el tratamiento.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #2f6b5f;border-radius:8px;padding:6px 8px;background:#2f6b5f08;">
      <div style="font-weight:700;color:#2f6b5f;text-align:center;margin-bottom:4px;">EVENTO OBSTRUCTIVO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">El flujo cae pero el <strong style="color:var(--ink);">esfuerzo toracoabdominal PERSISTE</strong>, incluso aumenta, y las bandas se mueven en oposicion de fase. La faringe se ha colapsado.<br><strong style="color:var(--ink);">Apnea</strong>: caida del flujo del 90% o mas durante 10 segundos o mas.<br><strong style="color:var(--ink);">Hipopnea</strong>: caida del 30% o mas durante 10 segundos o mas, con desaturacion o microdespertar.</div>
    </div>
    <div style="border:1.5px solid #7a2f5c;border-radius:8px;padding:6px 8px;background:#7a2f5c08;">
      <div style="font-weight:700;color:#7a2f5c;text-align:center;margin-bottom:4px;">EVENTO CENTRAL</div>
      <div style="color:var(--ink-dim);line-height:1.6;">El flujo cae y el <strong style="color:var(--ink);">esfuerzo DESAPARECE</strong>: las bandas se quedan quietas. No hay orden desde el centro respiratorio.<br>No es una enfermedad sino un <strong>signo</strong>: obliga a buscar insuficiencia cardiaca, opioides, lesion del tronco, altitud o el propio tratamiento con presion positiva.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">La trampa de la hipopnea.</strong> Existen DOS definiciones: la recomendada exige una desaturacion del 3% <strong>o</strong> un microdespertar; la alternativa, usada por algunos financiadores, exige una desaturacion del 4%. Con la segunda salen indices mas bajos y algunos pacientes sintomaticos quedan por debajo del umbral. Ante un informe que no cuadra con la clinica, hay que mirar QUE REGLA se uso.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">El evento que no aparece en el indice.</strong> El <strong>esfuerzo respiratorio asociado a microdespertar</strong> no cumple criterio de apnea ni de hipopnea, pero fragmenta el sue&#241;o igual. Un paciente muy sintomatico con indice de apnea-hipopnea bajo puede tener un indice de alteracion respiratoria alto a expensas de estos eventos, que solo se ven en la polisomnografia completa.
    </div>
  </div>
</div>`;

const estudioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">POLIGRAFIA RESPIRATORIA domiciliaria</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Mide flujo, esfuerzo y saturacion, pero <strong style="color:var(--ink);">NO mide sue&#241;o</strong>: no hay electroencefalograma. Divide los eventos por el tiempo de REGISTRO y no por el tiempo dormido, de modo que <strong>INFRAESTIMA</strong> el indice.<br>Vale para el paciente <strong>sin comorbilidad</strong> con alta probabilidad de apnea obstructiva moderada o grave. Es mas barata, mas accesible y mas comoda.</div>
    </div>
    <div style="border:1.5px solid #2f6b5f;border-radius:8px;padding:6px 8px;background:#2f6b5f08;">
      <div style="font-weight:700;color:#2f6b5f;text-align:center;margin-bottom:4px;">POLISOMNOGRAFIA en laboratorio</div>
      <div style="color:var(--ink-dim);line-height:1.6;">A&#241;ade electroencefalograma, electrooculograma y electromiograma: mide el sue&#241;o de verdad, detecta microdespertares y distingue las fases.<br>Es la prueba de referencia y la que hay que pedir cuando la poligrafia <strong>NO es aplicable</strong> o cuando su resultado es <strong style="color:var(--ink);">negativo o no concluyente</strong> en un paciente que sigue siendo sospechoso.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3408;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">CUANDO NO SE PUEDE USAR LA POLIGRAFIA DOMICILIARIA</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Enfermedad <strong>cardiorrespiratoria significativa</strong> (insuficiencia cardiaca, EPOC grave), sospecha de <strong>HIPOVENTILACION</strong>, debilidad <strong>neuromuscular</strong>, uso cronico de <strong>opioides</strong>, antecedente de ictus, insomnio grave, y sospecha de otro trastorno del sue&#241;o (narcolepsia, movimientos periodicos de las piernas, parasomnias). En todos ellos el estudio simplificado puede dar un resultado falsamente tranquilizador.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Los cuestionarios NO diagnostican.</strong> STOP-BANG y Epworth son herramientas de CRIBADO: sirven para priorizar y para medir el sintoma, no para confirmar ni para descartar. Un STOP-BANG bajo no autoriza a no estudiar a un paciente con clinica sugestiva, y un Epworth normal es frecuente en la apnea grave, sobre todo en <strong>mujeres</strong> y en pacientes que consultan por fatiga, insomnio o cefalea matutina en lugar de por somnolencia.
  </div>
</div>`;

const tratamientoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;margin-bottom:5px;align-items:stretch;">
    <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">LEVE<br><span style="font-weight:400;font-size:8.5px;">IAH 5 a 15</span></div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se trata si hay <strong style="color:var(--ink);">sintomas</strong> (somnolencia, sue&#241;o no reparador, deterioro cognitivo) o <strong>comorbilidad</strong> (hipertension, cardiopatia isquemica, ictus, fibrilacion auricular). Primera linea razonable: medidas conservadoras, <strong>dispositivo de avance mandibular</strong> o terapia posicional. La CPAP tambien es opcion si el paciente la prefiere.</div>
  </div>
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;margin-bottom:5px;align-items:stretch;">
    <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">MODERADA<br><span style="font-weight:400;font-size:8.5px;">IAH 15 a 30</span></div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CPAP</strong> como tratamiento de eleccion. Si el paciente no la tolera pese a un intento bien acompa&#241;ado, el dispositivo de avance mandibular es la alternativa con mejor evidencia. Nunca se abandona sin ofrecer alternativa.</div>
  </div>
  <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;margin-bottom:6px;align-items:stretch;">
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">GRAVE<br><span style="font-weight:400;font-size:8.5px;">IAH mayor de 30</span></div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CPAP</strong>, con independencia de los sintomas. Y aqui la <strong>ADHERENCIA</strong> es el tratamiento: el beneficio depende de las horas de uso, no de tener el aparato en casa.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #2f6b5f;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#2f6b5f;">Lo que acompa&#241;a SIEMPRE a la CPAP.</strong> Perdida de peso (una reduccion sostenida baja el indice de forma proporcional, y los farmacos para la obesidad han demostrado reducirlo en ensayos), evitar alcohol y sedantes por la noche, tratar la obstruccion nasal, terapia posicional si los eventos son claramente supinos, y consejo sobre la <strong>conduccion</strong>.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Lo que la CPAP SI y NO ha demostrado.</strong> SI: mejora la somnolencia, la calidad de vida y la funcion cognitiva, y baja algo la presion arterial, sobre todo en la hipertension resistente. NO: los ensayos aleatorizados no han demostrado reduccion de eventos cardiovasculares, con la advertencia de que la adherencia media fue baja y se excluyo a los pacientes muy somnolientos.
    </div>
  </div>
</div>`;

const co2Html = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c5a2e;border-radius:8px;padding:5px 9px;background:#8c5a2e12;margin-bottom:6px;">
    <strong style="color:#8c5a2e;">La pregunta que separa la apnea obstructiva del sindrome de hipoventilacion-obesidad es el CO2 DIURNO.</strong> <span style="color:var(--ink-dim);">No basta con que el paciente sea obeso y ronque: hay que hacer una gasometria DESPIERTO. Sin ese dato, el diagnostico no se puede hacer ni descartar.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #2f6b5f;border-radius:8px;padding:6px 8px;background:#2f6b5f08;">
      <div style="font-weight:700;color:#2f6b5f;text-align:center;margin-bottom:4px;">APNEA OBSTRUCTIVA pura</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Eventos obstructivos durante el sue&#241;o con <strong style="color:var(--ink);">gasometria diurna NORMAL</strong>. Entre evento y evento el paciente ventila bien y lava el CO2 acumulado. Bicarbonato normal.<br>Tratamiento: <strong>CPAP</strong>.</div>
    </div>
    <div style="border:1.5px solid #8c5a2e;border-radius:8px;padding:6px 8px;background:#8c5a2e08;">
      <div style="font-weight:700;color:#8c5a2e;text-align:center;margin-bottom:4px;">HIPOVENTILACION-OBESIDAD</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Indice de masa corporal de 30 o mas, <strong style="color:var(--ink);">PaCO2 despierto mayor de 45 mmHg</strong> y exclusion de otras causas de hipoventilacion. El bicarbonato esta ELEVADO por compensacion renal cronica.<br>Alrededor del 90% tiene ademas apnea obstructiva.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">El atajo que si sirve.</strong> Un <strong>BICARBONATO SERICO normal</strong> (por debajo de 27 mEq/L) en un paciente obeso hace muy improbable la hipoventilacion cronica y permite ahorrar gasometrias. Si esta elevado, hay que hacer la gasometria arterial. Es un cribado barato, disponible y muy util en planta.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El error que mata.</strong> Poner <strong>OXIGENO SOLO</strong> a un paciente con hipoventilacion y creer que el problema esta resuelto porque la saturacion sube. El oxigeno corrige el numero del pulsioximetro sin corregir la ventilacion, y puede agravar la hipercapnia. Lo que hace falta es <strong>presion positiva</strong>, no mas oxigeno.
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #7a2f5c;border-radius:8px;background:#7a2f5c10;color:var(--ink-dim);">
    <strong style="color:#7a2f5c;">Y una contraindicacion que hay que saberse.</strong> En la insuficiencia cardiaca con fraccion de eyeccion reducida y apnea CENTRAL predominante, la <strong>servoventilacion adaptativa esta CONTRAINDICADA</strong>: un ensayo aleatorizado encontro un aumento de la mortalidad cardiovascular. En ese escenario el tratamiento es optimizar la insuficiencia cardiaca, no ventilar al paciente con ese modo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Los trastornos respiratorios del sue&#241;o son frecuentes, se diagnostican tarde y se tratan peor. La <strong>apnea obstructiva del sue&#241;o</strong> es el mas comun con diferencia: episodios repetidos de colapso de la faringe durante el sue&#241;o que fragmentan el descanso y producen desaturaciones intermitentes. Junto a ella hay que manejar otras dos entidades que comparten el estudio pero no la causa ni el tratamiento: la <strong>apnea central</strong>, que no es una enfermedad sino un signo de otra cosa, y el <strong>sindrome de hipoventilacion-obesidad</strong>, que se define por un dato que solo se ve estando despierto.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: obstructivo o central.</strong></p>
<p style="margin:0 0 12px;">Todo el tema se ordena con una sola pregunta ante un evento respiratorio: <strong>hay esfuerzo respiratorio o no lo hay</strong>. Si el paciente lucha contra una via aerea cerrada, es obstructivo. Si el esfuerzo desaparece, es central, y entonces hay que buscar la causa detras: insuficiencia cardiaca, opioides, lesion del tronco, altitud o el propio tratamiento con presion positiva. Conviene ademas conocer las dos definiciones de hipopnea que circulan, porque explican informes que no cuadran con la clinica.</p>
${figBlock('Figura 1', 'Que es un evento respiratorio y como se clasifica', eventosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: que estudio se pide.</strong></p>
<p style="margin:0 0 12px;">La <strong>poligrafia respiratoria domiciliaria</strong> es comoda y suficiente en el paciente sin comorbilidad con alta probabilidad de apnea obstructiva moderada o grave, pero no mide el sue&#241;o y por eso infraestima el indice. La <strong>polisomnografia</strong> es la referencia y hace falta cuando hay comorbilidad cardiorrespiratoria, sospecha de hipoventilacion, debilidad neuromuscular, opioides, ictus o sospecha de otro trastorno del sue&#241;o. Y hay una regla que se olvida a menudo: una <strong>poligrafia negativa o no concluyente en un paciente sospechoso obliga a hacer polisomnografia</strong>, no a dar el alta.</p>
${figBlock('Figura 2', 'Poligrafia domiciliaria o polisomnografia, y cuando cada una', estudioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: a quien se trata y con que.</strong></p>
<p style="margin:0 0 12px;">La gravedad se mide por el <strong>indice de apnea-hipopnea</strong>, pero la decision de tratar combina el indice con los sintomas y con la comorbilidad. La <strong>CPAP</strong> es el tratamiento de eleccion en la forma moderada y grave, y su beneficio depende de las horas de uso: la adherencia no es un detalle administrativo sino el tratamiento mismo. Conviene tener claro tambien lo que la CPAP ha demostrado y lo que no, para no prometer de mas.</p>
${figBlock('Figura 3', 'Gravedad, decision de tratar y lo que la CPAP si y no consigue', tratamientoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: mirar el CO2 estando despierto.</strong></p>
<p style="margin:0 0 12px;">El paciente obeso que ronca puede tener apnea obstructiva pura o un <strong>sindrome de hipoventilacion-obesidad</strong>, y la diferencia solo se ve con una <strong>gasometria diurna</strong>. Un bicarbonato serico normal la hace muy improbable y permite ahorrar pruebas; uno elevado obliga a hacerla. Distinguirlas importa porque el manejo cambia y porque el error clasico en este grupo, poner oxigeno solo y quedarse tranquilo con la saturacion, agrava la hipercapnia en lugar de corregirla.</p>
${figBlock('Figura 4', 'Apnea obstructiva frente a hipoventilacion-obesidad: el CO2 diurno', co2Html)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No usar un cuestionario para descartar la enfermedad ni para diagnosticarla. No dar el alta tras una poligrafia negativa en un paciente sospechoso. No pedir poligrafia domiciliaria a quien tiene insuficiencia cardiaca, EPOC grave, enfermedad neuromuscular u opioides cronicos. No olvidar la gasometria diurna en el obeso con hipoxemia nocturna. No poner oxigeno solo a un paciente que hipoventila. No usar servoventilacion adaptativa en la insuficiencia cardiaca con fraccion de eyeccion reducida y apnea central predominante. No dar por perdido al paciente que rechaza la CPAP sin ofrecerle alternativa. Y no dejar de preguntar por la <strong>somnolencia al volante</strong>, que es la consecuencia con mayor riesgo inmediato para el paciente y para terceros.</p>`;

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
      tituloA: 'Sintomas nocturnos',
      tituloB: 'Sintomas diurnos',
      compensada: 'RONQUIDO intenso y habitual, apneas presenciadas por la pareja (que suele ser quien trae al paciente a la consulta), despertares con sensacion de ahogo o atragantamiento, sue&#241;o inquieto y no reparador, nicturia (mas frecuente de lo que se piensa y con frecuencia atribuida a la prostata), sudoracion nocturna y reflujo gastroesofagico nocturno. La ausencia de ronquido no descarta la enfermedad, sobre todo en la mujer.',
      descompensada: 'SOMNOLENCIA diurna excesiva, que es el sintoma clasico pero no el unico ni el mas frecuente. Cefalea matutina, sensacion de sue&#241;o no reparador, fatiga, irritabilidad, dificultad de concentracion y perdida de memoria. En la MUJER predominan la fatiga, el insomnio, el animo bajo y la cefalea por encima de la somnolencia, y por eso se diagnostica menos y mas tarde. Y en todos hay que preguntar de forma explicita por la somnolencia al volante y por episodios de casi accidente.'
    },
    laboratorio: [
      { prueba: 'Bicarbonato serico', utilidad: 'Cribado barato de hipoventilacion cronica en el paciente obeso. Un valor NORMAL, por debajo de 27 mEq/L, hace muy improbable el sindrome de hipoventilacion-obesidad y permite ahorrar gasometrias. Si esta elevado, hay que hacer gasometria arterial despierto.' },
      { prueba: 'Gasometria arterial DESPIERTO', utilidad: 'Es el dato que define el sindrome de hipoventilacion-obesidad: PaCO2 mayor de 45 mmHg en vigilia. Sin ella el diagnostico no se puede hacer ni descartar, y hacerla dormido o con oxigeno puesto no sirve para lo mismo.' },
      { prueba: 'Hemograma', utilidad: 'La poliglobulia secundaria orienta hacia hipoxemia cronica mantenida y hacia hipoventilacion mas que hacia apnea obstructiva pura. Su ausencia no descarta nada, porque muchos pacientes no la desarrollan.' },
      { prueba: 'Hormona tiroestimulante', utilidad: 'El HIPOTIROIDISMO produce macroglosia, edema faringeo y reduccion del impulso ventilatorio, y puede causar o agravar la apnea. Es una de las pocas causas reversibles y conviene descartarla ante un cuadro que no encaja del todo.' },
      { prueba: 'Hemoglobina glucosilada y perfil lipidico', utilidad: 'La apnea obstructiva se asocia de forma independiente a resistencia a la insulina y a dislipemia, y comparte con ellas la obesidad como causa. Forman parte de la valoracion del riesgo cardiovascular global de estos pacientes.' },
      { prueba: 'Peptido natriuretico y funcion cardiaca', utilidad: 'Ante apnea CENTRAL o respiracion de Cheyne-Stokes hay que buscar insuficiencia cardiaca, que es su causa mas frecuente en la practica. El hallazgo cambia por completo el tratamiento y contraindica un modo ventilatorio concreto.' },
      { prueba: 'Revision de la medicacion', utilidad: 'No es un analisis pero funciona como tal: los OPIOIDES cronicos son una causa frecuente y reversible de apnea central, y las benzodiacepinas, los relajantes musculares y el alcohol agravan los eventos obstructivos al relajar la faringe.' }
    ],
    no_invasivos: [
      { metodo: 'Cuestionario STOP-BANG (calculadora disponible)', interpretacion: 'Ocho items: ronquido, cansancio, apneas presenciadas, hipertension, indice de masa corporal, edad, perimetro cervical y sexo. Herramienta de CRIBADO, no diagnostica.', cutoff: '0 a 2 riesgo bajo; 3 a 4 riesgo intermedio; 5 a 8 riesgo alto de apnea obstructiva moderada o grave' },
      { metodo: 'Escala de somnolencia de Epworth (calculadora disponible)', interpretacion: 'Ocho situaciones cotidianas puntuadas de 0 a 3 segun la probabilidad de quedarse dormido. Mide el SINTOMA, no la gravedad de la enfermedad, y sirve sobre todo para seguir la respuesta al tratamiento.', cutoff: 'Mayor de 10: somnolencia diurna excesiva. Un valor normal NO descarta apnea grave' },
      { metodo: 'Indice de apnea-hipopnea (calculadora disponible)', interpretacion: 'Numero de apneas mas hipopneas por hora de sue&#241;o. En la poligrafia domiciliaria se divide por el tiempo de registro, de modo que el indice queda INFRAESTIMADO respecto a la polisomnografia.', cutoff: '5 a 15 leve; 15 a 30 moderada; mayor de 30 grave' },
      { metodo: 'Criterios de hipoventilacion-obesidad (calculadora disponible)', interpretacion: 'Combina el indice de masa corporal, la PaCO2 diurna y la exclusion de otras causas de hipoventilacion. Alrededor del 90% de estos pacientes tiene ademas apnea obstructiva.', cutoff: 'IMC de 30 o mas y PaCO2 despierto mayor de 45 mmHg, sin otra causa que lo explique' },
      { metodo: 'Indice de desaturacion de oxigeno y tiempo por debajo del 90%', interpretacion: 'Complementan al indice de apnea-hipopnea y en algunos estudios predicen mejor el riesgo cardiovascular. Un tiempo prolongado por debajo del 90% que no se explica por los eventos obliga a pensar en hipoventilacion o en enfermedad pulmonar asociada.', cutoff: 'Sin umbral unico establecido; se interpretan junto con el resto del estudio' },
      { metodo: 'Registro de adherencia a la CPAP', interpretacion: 'Los equipos actuales registran horas de uso, fugas e indice residual de eventos. Es el dato mas util del seguimiento, y permite distinguir el fracaso terapeutico real del simple no uso.', cutoff: 'Uso de 4 horas o mas por noche en el 70% de las noches, aunque el beneficio aumenta con mas horas' },
      { metodo: 'Espirometria', interpretacion: 'No diagnostica la apnea, pero identifica el solapamiento con EPOC, que empeora la hipoxemia nocturna y cambia el manejo. En el obeso puede mostrar un patron restrictivo por el propio peso.', cutoff: 'Cociente FEV1/FVC menor de 0.7 tras broncodilatador: obstruccion asociada' }
    ],
    imagen: [
      { modalidad: 'Exploracion de la via aerea superior', hallazgos: 'No es imagen radiologica pero es lo primero: puntuacion de Mallampati modificada, tama&#241;o amigdalar, retrognatia, macroglosia, obstruccion nasal y perimetro cervical. Identifica factores anatomicos corregibles y anticipa la dificultad de la intubacion.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Indicado ante apnea central, sospecha de hipertension pulmonar o insuficiencia cardiaca. La fraccion de eyeccion reducida con apnea central predominante contraindica la servoventilacion adaptativa, de modo que este dato cambia directamente el tratamiento.' },
      { modalidad: 'Nasofibroscopia y somnoscopia', hallazgos: 'Valoracion del nivel de obstruccion en el candidato a cirugia o a estimulacion del nervio hipogloso. La somnoscopia inducida con farmacos identifica el patron de colapso, y el colapso concentrico completo del velo del paladar contraindica la estimulacion.' },
      { modalidad: 'Radiografia de torax', hallazgos: 'Poco util para el diagnostico, pero orienta en el paciente hipercapnico: cardiomegalia, signos de hipertension pulmonar o enfermedad pulmonar asociada. Ayuda a decidir si la hipoventilacion es solo por obesidad o hay algo mas.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Los trastornos respiratorios del sue&#241;o se clasifican primero por el <strong>tipo de evento</strong>: obstructivo (hay esfuerzo respiratorio contra una via cerrada), central (no hay esfuerzo) o mixto. Despues, dentro de la apnea obstructiva, por la <strong>gravedad</strong> segun el indice de apnea-hipopnea. Y en paralelo hay que responder a una pregunta que no depende del indice: si el paciente <strong>hipoventila estando despierto</strong>, lo que define el sindrome de hipoventilacion-obesidad y cambia el manejo. La decision de tratar combina las tres cosas con los sintomas y con la comorbilidad.`,
    escalas: [
      { nombre: 'Indice de apnea-hipopnea (calculadora disponible)', componentes: 'Numero de apneas mas hipopneas dividido entre las horas de sue&#241;o (polisomnografia) o de registro (poligrafia domiciliaria).', formula: 'Leve de 5 a 15; moderada de 15 a 30; grave por encima de 30. El diagnostico exige un indice de 5 o mas con sintomas o comorbilidad, o de 15 o mas con independencia de los sintomas.', interpretacion: 'La poligrafia domiciliaria INFRAESTIMA el indice porque divide por el tiempo de registro y no por el tiempo dormido. Ademas, el indice mide frecuencia y no profundidad: dos pacientes con el mismo indice pueden tener cargas hipoxicas muy distintas.' },
      { nombre: 'Cuestionario STOP-BANG (calculadora disponible)', componentes: 'Ronquido, cansancio, apneas presenciadas, hipertension, indice de masa corporal mayor de 35, edad mayor de 50 a&#241;os, perimetro cervical mayor de 40 cm y sexo masculino.', formula: 'Un punto por item. De 0 a 2 riesgo bajo; de 3 a 4 riesgo intermedio; de 5 a 8 riesgo alto de apnea moderada o grave.', interpretacion: 'Muy sensible y poco especifico: sirve para PRIORIZAR el estudio y para el cribado preoperatorio, no para diagnosticar. Una puntuacion baja no autoriza a no estudiar a un paciente con clinica sugestiva.' },
      { nombre: 'Escala de somnolencia de Epworth (calculadora disponible)', componentes: 'Ocho situaciones cotidianas puntuadas de 0 (nunca me dormiria) a 3 (alta probabilidad de dormirme).', formula: 'Suma de 0 a 24. Por encima de 10 se considera somnolencia diurna excesiva.', interpretacion: 'Mide el sintoma, no la enfermedad: se correlaciona mal con el indice de apnea-hipopnea. Es muy util para seguir la respuesta al tratamiento y para valorar el riesgo al volante, pero un valor normal no descarta una apnea grave.' },
      { nombre: 'Criterios de hipoventilacion-obesidad (calculadora disponible)', componentes: 'Indice de masa corporal, PaCO2 arterial en vigilia, bicarbonato serico y exclusion de otras causas de hipoventilacion.', formula: 'IMC de 30 o mas mas PaCO2 despierto mayor de 45 mmHg, tras excluir enfermedad pulmonar grave, neuromuscular, de la caja toracica, hipotiroidismo grave y farmacos depresores.', interpretacion: 'Un bicarbonato por debajo de 27 mEq/L hace el diagnostico muy improbable y permite evitar la gasometria. Alrededor del 90% de estos pacientes tiene ademas apnea obstructiva, y su reconocimiento cambia el tipo de soporte ventilatorio.' },
      { nombre: 'Clasificacion de las apneas centrales', componentes: 'Contexto clinico en el que aparece el patron central.', formula: 'Con respiracion de Cheyne-Stokes (insuficiencia cardiaca, ictus); por farmacos (opioides); por enfermedad medica sin Cheyne-Stokes; por altitud; primaria (rara); y emergente con el tratamiento con presion positiva.', interpretacion: 'La apnea central no es un diagnostico final sino un hallazgo que obliga a buscar la causa. La forma emergente con el tratamiento suele resolverse sola en semanas o meses y no debe llevar a retirar la CPAP de forma precipitada.' },
      { nombre: 'Escala de Mallampati modificada', componentes: 'Visualizacion de las estructuras orofaringeas con la boca abierta y la lengua en reposo.', formula: 'De I (se ve el paladar blando completo, la uvula y los pilares) a IV (solo se ve el paladar duro).', interpretacion: 'Una clase alta se asocia a mayor riesgo de apnea obstructiva y, sobre todo, anticipa una intubacion dificil. Es una exploracion de 5 segundos con valor pronostico perioperatorio.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Apnea obstructiva del sue&#241;o: sospecha y diagnostico',
      color: '#2f6b5f',
      definicion: 'Episodios repetidos de colapso total (apnea) o parcial (hipopnea) de la via aerea superior durante el sue&#241;o, con esfuerzo respiratorio conservado, que producen desaturaciones intermitentes y microdespertares con fragmentacion del sue&#241;o.',
      fisiopatologia: 'La faringe carece de soporte oseo y se mantiene abierta por el tono de sus musculos dilatadores. Durante el sue&#241;o ese tono disminuye, y si la via es estrecha (por grasa perifaringea, retrognatia, amigdalas grandes o macroglosia) la presion negativa inspiratoria la colapsa. El paciente sigue haciendo esfuerzo contra una via cerrada hasta que un microdespertar recupera el tono y reabre la faringe. El ciclo se repite decenas o cientos de veces por noche y genera dos consecuencias: fragmentacion del sue&#241;o, que explica la somnolencia, e hipoxia intermitente con oscilaciones de la presion intratoracica y descargas simpaticas, que explican el da&#241;o cardiovascular.',
      epidemiologia: 'Muy prevalente y muy infradiagnosticada: se estima que la mayoria de los casos moderados y graves no estan identificados. La prevalencia ha aumentado en paralelo a la obesidad. En la mujer se diagnostica menos y mas tarde porque la presentacion es distinta y porque el ronquido se refiere con menos frecuencia.',
      factores_riesgo: ['Obesidad, sobre todo con acumulo de grasa cervical', 'Perimetro cervical aumentado', 'Sexo masculino, con acortamiento de la diferencia tras la menopausia', 'Edad avanzada', 'Menopausia', 'Anomalias craneofaciales: retrognatia, micrognatia, paladar ojival', 'Hipertrofia amigdalar y macroglosia', 'Obstruccion nasal cronica', 'Alcohol, benzodiacepinas y opioides antes de dormir', 'Hipotiroidismo y acromegalia', 'Tabaquismo', 'Antecedente familiar'],
      clinica: 'Ronquido habitual, apneas presenciadas, despertares con ahogo, sue&#241;o no reparador y nicturia. De dia: somnolencia excesiva, cefalea matutina, fatiga, irritabilidad y dificultad de concentracion. En la MUJER predominan la fatiga, el insomnio y el animo bajo sobre la somnolencia clasica. Hay que preguntar SIEMPRE de forma explicita por la somnolencia al volante.',
      criterios_dx: 'Indice de apnea-hipopnea de 5 o mas por hora CON sintomas o comorbilidad asociada, o de 15 o mas con independencia de los sintomas. La confirmacion es con poligrafia respiratoria o polisomnografia, nunca con un cuestionario. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'Bicarbonato serico como cribado de hipoventilacion. Hormona tiroestimulante ante sospecha de hipotiroidismo. Hemograma, hemoglobina glucosilada y perfil lipidico dentro de la valoracion global.',
      imagen: 'Exploracion de la via aerea superior con Mallampati, perimetro cervical y valoracion nasal. Ecocardiograma si hay apnea central, sospecha de insuficiencia cardiaca o de hipertension pulmonar.',
      complementarios: 'POLIGRAFIA RESPIRATORIA domiciliaria en el paciente sin comorbilidad con alta probabilidad de apnea moderada o grave. POLISOMNOGRAFIA si hay enfermedad cardiorrespiratoria, sospecha de hipoventilacion, debilidad neuromuscular, opioides cronicos, ictus previo, insomnio grave o sospecha de otro trastorno del sue&#241;o, y siempre que la poligrafia sea negativa o no concluyente en un paciente sospechoso.',
      dx_diferencial: 'Sue&#241;o insuficiente por habitos, que es la causa mas frecuente de somnolencia y se resuelve preguntando cuantas horas duerme; insomnio; narcolepsia; sindrome de piernas inquietas y movimientos periodicos; depresion; hipotiroidismo; efecto de farmacos sedantes; trastorno del ritmo circadiano por turnos; y sindrome de hipoventilacion-obesidad.',
      tx_medico: 'Perdida de peso, que reduce el indice de forma proporcional. Evitar alcohol y sedantes por la noche. Terapia posicional si los eventos son claramente supinos. Tratar la obstruccion nasal. Higiene de sue&#241;o y horario regular. Consejo explicito sobre la conduccion.',
      tx_farmacologico: 'No hay tratamiento farmacologico que sustituya a la presion positiva. Los farmacos para la obesidad, incluida la tirzepatida, han demostrado reducir el indice de apnea-hipopnea en pacientes con obesidad y se estan incorporando como tratamiento coadyuvante. Evitar benzodiacepinas y opioides.',
      tx_intervencionista: 'Se detalla en la ficha de tratamiento: presion positiva continua, dispositivo de avance mandibular, cirugia en casos seleccionados y estimulacion del nervio hipogloso.',
      criterios_uci: 'No por si misma. Si por sus consecuencias agudas: insuficiencia respiratoria hipercapnica en el paciente que ademas hipoventila, o complicaciones perioperatorias.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente ingresado con apnea conocida, mantener la CPAP durante el ingreso, extremar la cautela con opioides y sedantes, y monitorizar la saturacion. Es un punto de fallo frecuente: el equipo del paciente se queda en casa y nadie lo sustituye.',
      seguimiento_ambulatorio: 'Revision precoz tras iniciar el tratamiento para resolver problemas de mascarilla y de tolerancia, que es cuando se pierde a la mayoria de los pacientes. Despues, control periodico con descarga de datos de adherencia.',
      pronostico: 'Bueno con tratamiento adecuado en cuanto a sintomas y calidad de vida. El impacto sobre los eventos cardiovasculares es mas discutido y depende mucho de la adherencia.',
      algoritmo: ['Preguntar por ronquido, apneas presenciadas, sue&#241;o no reparador y somnolencia', 'Preguntar de forma explicita por la somnolencia al volante', 'Explorar la via aerea superior y medir el perimetro cervical', 'Revisar la medicacion: opioides, benzodiacepinas y alcohol', 'Aplicar un cuestionario de cribado para PRIORIZAR, no para decidir', 'Comprobar si hay comorbilidad que impida la poligrafia domiciliaria', 'Pedir poligrafia domiciliaria o polisomnografia segun ese filtro', 'Si la poligrafia es negativa y el paciente sigue siendo sospechoso, hacer polisomnografia', 'Medir bicarbonato y, si esta elevado, gasometria diurna en el obeso', 'Decidir el tratamiento por indice, sintomas y comorbilidad']
    },
    {
      nombre: 'Tratamiento de la apnea obstructiva: CPAP y alternativas',
      color: '#3d5a73',
      definicion: 'Conjunto de medidas dirigidas a mantener la via aerea superior abierta durante el sue&#241;o, con la presion positiva continua como tratamiento de eleccion en las formas moderada y grave.',
      fisiopatologia: 'La CPAP actua como una ferula neumatica: la presion positiva mantenida transmitida a la faringe impide su colapso. No trata la causa (la anatomia y la obesidad siguen ahi), lo que explica que el efecto desaparezca la noche que no se usa y que la adherencia sea el determinante del beneficio. El dispositivo de avance mandibular actua desplazando la mandibula y la lengua hacia delante, lo que amplia el espacio retrogloso. La estimulacion del nervio hipogloso contrae la lengua de forma sincronizada con la inspiracion.',
      epidemiologia: 'La adherencia a la CPAP es el problema central del tratamiento: una proporcion importante de pacientes la abandona en el primer a&#241;o, y buena parte de esos abandonos se producen en las primeras semanas, que es justo cuando el seguimiento suele ser mas escaso.',
      factores_riesgo: ['Mala adaptacion inicial a la mascarilla', 'Obstruccion nasal no tratada', 'Claustrofobia', 'Fugas por mascarilla mal ajustada', 'Sequedad de mucosas sin humidificacion', 'Falta de seguimiento en las primeras semanas', 'Ausencia de sintomas percibidos por el paciente', 'Insomnio asociado', 'Escaso apoyo del entorno', 'Presiones elevadas mal toleradas'],
      clinica: 'La respuesta esperable es mejoria de la somnolencia, del sue&#241;o no reparador y de la calidad de vida en las primeras semanas. La ausencia de mejoria obliga a revisar la adherencia real, las fugas, el indice residual de eventos y a replantear el diagnostico, incluida la posibilidad de sue&#241;o insuficiente o de otro trastorno asociado.',
      criterios_dx: 'No aplica: es la fase terapeutica. La indicacion se establece por el indice de apnea-hipopnea junto con los sintomas y la comorbilidad. Ver la Figura 3 de Definicion.',
      laboratorio: 'Los que correspondan a la comorbilidad. En el paciente hipercapnico, gasometria de control tras iniciar el soporte ventilatorio.',
      imagen: 'Nasofibroscopia y somnoscopia inducida con farmacos en el candidato a cirugia o a estimulacion del nervio hipogloso, para identificar el nivel y el patron de colapso.',
      complementarios: 'DESCARGA DE DATOS del equipo: horas de uso, fugas e indice residual de eventos. Es la herramienta mas util del seguimiento y distingue el fracaso terapeutico real del no uso, que son dos problemas distintos con soluciones distintas.',
      dx_diferencial: 'Ante la falta de respuesta al tratamiento, descartar sue&#241;o insuficiente, adherencia baja, fugas, presion insuficiente, apnea central emergente, narcolepsia asociada, depresion y farmacos sedantes.',
      tx_medico: 'Perdida de peso y ejercicio, que acompa&#241;an siempre al tratamiento con presion positiva y pueden reducir la gravedad hasta hacerlo innecesario en algunos casos. Terapia posicional si los eventos son supinos. Evitar alcohol y sedantes. Tratamiento de la obstruccion nasal, que mejora mucho la tolerancia.',
      tx_farmacologico: 'Los farmacos para la obesidad, incluida la tirzepatida, reducen el indice de apnea-hipopnea en pacientes con obesidad y son un coadyuvante, no un sustituto de la presion positiva. No hay farmaco que abra la via aerea de forma directa con eficacia demostrada suficiente.',
      tx_intervencionista: 'CPAP como tratamiento de eleccion en la apnea moderada y grave; la modalidad autoajustable es una alternativa valida en el paciente sin comorbilidad. DISPOSITIVO DE AVANCE MANDIBULAR en la apnea leve o moderada y en la intolerancia a la CPAP, con buena evidencia. Cirugia de la via aerea superior en casos seleccionados con anatomia corregible. ESTIMULACION DEL NERVIO HIPOGLOSO en pacientes seleccionados con intolerancia a la CPAP, con el colapso concentrico completo del velo del paladar como contraindicacion. Cirugia bariatrica cuando la obesidad es el motor del cuadro.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Continuar la CPAP domiciliaria durante los ingresos, con precaucion extrema con los opioides y los sedantes. Revisar la mascarilla y la humidificacion, que son la causa mas frecuente de intolerancia.',
      seguimiento_ambulatorio: 'Revision PRECOZ, en las primeras semanas, para resolver problemas de interfaz: es la intervencion que mas mejora la adherencia a largo plazo. Despues, controles periodicos con descarga de datos y reevaluacion de la somnolencia con la escala de Epworth.',
      pronostico: 'Muy bueno en cuanto a sintomas si el paciente usa el equipo. La adherencia habitual se define como 4 horas o mas por noche en el 70% de las noches, aunque el beneficio aumenta con mas horas y ese umbral es un minimo administrativo, no un objetivo.',
      algoritmo: ['Indicar CPAP en la apnea moderada y grave', 'En la apnea leve, tratar si hay sintomas o comorbilidad', 'Elegir y probar la mascarilla con el paciente, no por catalogo', 'A&#241;adir humidificacion y tratar la obstruccion nasal', 'Revisar de forma PRECOZ, en las primeras semanas', 'Descargar los datos: horas de uso, fugas e indice residual', 'Si no tolera la CPAP, ofrecer dispositivo de avance mandibular', 'Valorar cirugia o estimulacion del hipogloso en casos seleccionados', 'Mantener siempre la perdida de peso y la higiene de sue&#241;o', 'Reevaluar la somnolencia y el riesgo al volante en cada revision']
    },
    {
      nombre: 'Apnea central del sue&#241;o y respiracion de Cheyne-Stokes',
      color: '#7a2f5c',
      definicion: 'Cese o reduccion del flujo aereo durante el sue&#241;o por ausencia de esfuerzo respiratorio, es decir, por fallo del impulso del centro respiratorio y no por obstruccion de la via aerea.',
      fisiopatologia: 'El control de la respiracion funciona como un bucle de retroalimentacion. Cuando la ganancia de ese bucle es excesiva, el sistema oscila: una peque&#241;a subida de CO2 provoca una hiperventilacion desproporcionada que baja el CO2 por debajo del umbral de apnea, la respiracion se detiene, el CO2 sube de nuevo y el ciclo se repite. En la insuficiencia cardiaca esto se agrava por el tiempo de circulacion alargado, que retrasa la informacion que llega a los quimiorreceptores, y da el patron creciente-decreciente de la respiracion de Cheyne-Stokes. Los opioides actuan por otro mecanismo: deprimen directamente el centro respiratorio.',
      epidemiologia: 'Mucho menos frecuente que la apnea obstructiva. Su causa mas comun en la practica clinica es la insuficiencia cardiaca con fraccion de eyeccion reducida, seguida del uso cronico de opioides. La forma emergente con el tratamiento con presion positiva aparece en una minoria de pacientes al iniciar la CPAP y suele resolverse sola.',
      factores_riesgo: ['Insuficiencia cardiaca con fraccion de eyeccion reducida', 'Fibrilacion auricular', 'Uso cronico de OPIOIDES', 'Ictus y lesiones del tronco encefalico', 'Insuficiencia renal avanzada', 'Estancia en altitud elevada', 'Edad avanzada', 'Sexo masculino', 'Inicio reciente de tratamiento con presion positiva', 'Acromegalia y otras causas raras'],
      clinica: 'Puede ser asintomatica y detectarse solo en el estudio. Cuando da sintomas: sue&#241;o fragmentado, despertares frecuentes, insomnio de mantenimiento y somnolencia diurna. A diferencia de la apnea obstructiva, el ronquido suele ser menos llamativo, y el paciente puede consultar por insomnio antes que por somnolencia.',
      criterios_dx: 'Predominio de eventos CENTRALES en el estudio de sue&#241;o, que exige registro de esfuerzo respiratorio. Se documenta ademas el patron creciente-decreciente si se trata de respiracion de Cheyne-Stokes. Ver la Figura 1 de Definicion.',
      laboratorio: 'Peptido natriuretico, funcion renal y revision exhaustiva de la medicacion, con atencion a los opioides. Gasometria si se sospecha hipercapnia asociada.',
      imagen: 'ECOCARDIOGRAMA obligado: la fraccion de eyeccion es el dato que decide el tratamiento y el que contraindica un modo ventilatorio concreto. Neuroimagen si se sospecha lesion del tronco.',
      complementarios: 'POLISOMNOGRAFIA, no poligrafia simplificada: hace falta caracterizar bien el esfuerzo y el patron. Valoracion cardiologica y, si procede, ajuste del tratamiento de la insuficiencia cardiaca.',
      dx_diferencial: 'Apnea obstructiva con esfuerzo mal registrado por sensores inadecuados, apnea mixta, hipoventilacion por enfermedad neuromuscular o por farmacos, y respiracion periodica de la altitud en el viajero.',
      tx_medico: 'Lo primero y mas eficaz es TRATAR LA CAUSA: optimizar el tratamiento de la insuficiencia cardiaca segun las guias, reducir o retirar los opioides, corregir la anemia y controlar la fibrilacion auricular. La apnea central mejora cuando mejora la enfermedad de base.',
      tx_farmacologico: 'Retirada o reduccion progresiva de opioides cuando son la causa. Optimizacion completa del tratamiento de la insuficiencia cardiaca. La acetazolamida se ha usado en casos seleccionados con evidencia limitada, y el oxigeno nocturno puede reducir los eventos sin beneficio demostrado en desenlaces duros.',
      tx_intervencionista: 'CPAP como primer escalon en la insuficiencia cardiaca, que ademas mejora la funcion cardiaca por descarga del ventriculo izquierdo. <strong>La SERVOVENTILACION ADAPTATIVA esta CONTRAINDICADA cuando hay fraccion de eyeccion del 45% o menos con apnea central predominante</strong>, porque un ensayo aleatorizado encontro aumento de la mortalidad cardiovascular. La estimulacion del nervio frenico es una opcion en casos seleccionados.',
      criterios_uci: 'Segun la enfermedad de base, sobre todo la descompensacion de la insuficiencia cardiaca o la depresion respiratoria por opioides.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Segun la cardiopatia de base, no por la apnea en si.',
      seguimiento_hospitalario: 'En el paciente con insuficiencia cardiaca ingresado, la aparicion de respiracion de Cheyne-Stokes suele indicar mal control hemodinamico: la respuesta es optimizar el tratamiento cardiologico, no a&#241;adir un ventilador.',
      seguimiento_ambulatorio: 'Reevaluar tras optimizar la causa, porque muchos casos mejoran o desaparecen. La apnea central emergente con el tratamiento se resuelve sola en semanas o meses en la mayoria y no debe llevar a retirar la CPAP de forma precipitada.',
      pronostico: 'Depende por completo de la enfermedad de base. La respiracion de Cheyne-Stokes en la insuficiencia cardiaca es un marcador de gravedad y de peor pronostico, mas que una enfermedad independiente.',
      algoritmo: ['Comprobar en el estudio que el esfuerzo respiratorio esta AUSENTE', 'Buscar la causa: es un signo, no un diagnostico final', 'Hacer ecocardiograma y medir la fraccion de eyeccion', 'Revisar la medicacion, sobre todo los OPIOIDES', 'Descartar ictus o lesion del tronco si el contexto lo sugiere', 'Optimizar el tratamiento de la insuficiencia cardiaca', 'Reducir o retirar los opioides si son la causa', 'Considerar CPAP como primer escalon', 'NO usar servoventilacion adaptativa si la fraccion de eyeccion es del 45% o menos', 'Reevaluar el estudio tras optimizar la causa']
    },
    {
      nombre: 'Sindrome de hipoventilacion-obesidad',
      color: '#8c5a2e',
      definicion: 'Combinacion de obesidad (indice de masa corporal de 30 o mas) e hipercapnia diurna (PaCO2 en vigilia mayor de 45 mmHg) que no se explica por otra causa de hipoventilacion.',
      fisiopatologia: 'Confluyen tres mecanismos. Primero, la carga mecanica: la grasa toracoabdominal reduce la distensibilidad del sistema respiratorio y aumenta el trabajo, con respiracion superficial y volumenes pulmonares bajos, sobre todo en decubito. Segundo, la reduccion del impulso ventilatorio central, en parte por resistencia a la leptina y en parte por la adaptacion del centro respiratorio a la hipercapnia mantenida. Y tercero, la apnea obstructiva asociada, presente en la gran mayoria, que a&#241;ade eventos que no dan tiempo a lavar el CO2 acumulado. El ri&#241;on compensa reteniendo bicarbonato, y ese bicarbonato elevado es la huella cronica que permite sospechar el cuadro sin gasometria.',
      epidemiologia: 'Frecuente en las unidades de obesidad y muy infradiagnosticado en planta, donde a menudo se etiqueta simplemente como apnea del sue&#241;o. Alrededor del 90% de estos pacientes tiene ademas apnea obstructiva, la mayoria grave. Se diagnostica con frecuencia en un ingreso por insuficiencia respiratoria hipercapnica, es decir, tarde.',
      factores_riesgo: ['Obesidad, sobre todo con indice de masa corporal por encima de 40', 'Distribucion central de la grasa', 'Apnea obstructiva del sue&#241;o grave asociada', 'Sexo femenino en algunas series', 'Uso de sedantes, opioides y alcohol', 'Hipotiroidismo no tratado', 'Insuficiencia cardiaca asociada', 'Enfermedad pulmonar concomitante', 'Sedentarismo y perdida de masa muscular respiratoria', 'Retraso en el diagnostico, que perpetua el circulo'],
      clinica: 'Disnea de esfuerzo desproporcionada, somnolencia diurna intensa, cefalea matutina (muy sugestiva de hipercapnia nocturna), edemas y signos de cor pulmonale. En la descompensacion aguda, encefalopatia hipercapnica con somnolencia progresiva, asterixis y desorientacion, que se confunde con facilidad con otras causas de deterioro del nivel de conciencia.',
      criterios_dx: 'Indice de masa corporal de 30 o mas, PaCO2 DESPIERTO mayor de 45 mmHg, y exclusion de otras causas de hipoventilacion (enfermedad pulmonar grave, neuromuscular, de la caja toracica, hipotiroidismo grave, farmacos). Ver la Figura 4 de Definicion.',
      laboratorio: 'BICARBONATO SERICO como cribado: por debajo de 27 mEq/L el diagnostico es muy improbable. GASOMETRIA ARTERIAL en vigilia para confirmarlo. Hormona tiroestimulante, hemograma (poliglobulia) y peptido natriuretico.',
      imagen: 'Radiografia de torax y ecocardiograma para valorar hipertension pulmonar y cor pulmonale, que son frecuentes y marcan gravedad. Pruebas de funcion pulmonar para excluir enfermedad pulmonar que explique la hipercapnia.',
      complementarios: 'POLISOMNOGRAFIA con medicion de CO2, no poligrafia simplificada, porque hace falta caracterizar la hipoventilacion y no solo los eventos obstructivos. Valoracion nutricional y por la unidad de obesidad.',
      dx_diferencial: 'EPOC con hipercapnia, enfermedad neuromuscular (esclerosis lateral amiotrofica, distrofias, secuelas de poliomielitis), cifoescoliosis grave, hipoventilacion por farmacos, hipotiroidismo grave y sindrome de hipoventilacion central congenita.',
      tx_medico: 'PERDIDA DE PESO como tratamiento de fondo, con objetivo ambicioso: es lo unico que puede revertir el sindrome. Evitar de forma estricta sedantes, opioides y alcohol. Rehabilitacion y movilizacion. Tratar la insuficiencia cardiaca y el hipotiroidismo si estan presentes.',
      tx_farmacologico: 'Ningun farmaco especifico. Los farmacos para la obesidad han cambiado el panorama del tratamiento de fondo. Retirar todo depresor respiratorio. El oxigeno se usa solo A&#209;ADIDO a la presion positiva, nunca en solitario.',
      tx_intervencionista: 'PRESION POSITIVA nocturna: CPAP si hay apnea obstructiva grave asociada, que es la situacion mas frecuente, y ventilacion no invasiva con dos niveles de presion si predomina la hipoventilacion o si la CPAP no corrige la hipercapnia. CIRUGIA BARIATRICA en el candidato adecuado, que es el tratamiento con mayor potencial de curacion.',
      criterios_uci: 'Insuficiencia respiratoria hipercapnica aguda con acidosis, deterioro del nivel de conciencia o fracaso de la ventilacion no invasiva. Estos pacientes toleran mal la sedacion y son de intubacion dificil, de modo que conviene anticipar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica; la obesidad extrema es ademas contraindicacion para el trasplante pulmonar.',
      seguimiento_hospitalario: 'Ventilacion no invasiva precoz en la agudizacion hipercapnica, evitando el oxigeno en solitario. Vigilar el nivel de conciencia y la evolucion del pH. Iniciar el soporte domiciliario ANTES del alta y asegurar el circuito de seguimiento, porque el reingreso precoz es frecuente.',
      seguimiento_ambulatorio: 'Gasometria de control tras iniciar el soporte para comprobar que la hipercapnia mejora. Descarga de datos del equipo. Programa estructurado de perdida de peso y valoracion de cirugia bariatrica.',
      pronostico: 'Malo sin tratamiento: mortalidad elevada y reingresos frecuentes. Mejora de forma clara con presion positiva y perdida de peso, y el diagnostico precoz cambia el curso, lo que hace que el infradiagnostico sea aqui especialmente costoso.',
      algoritmo: ['Sospecharlo en todo obeso con somnolencia, disnea o cefalea matutina', 'Medir el BICARBONATO serico como cribado', 'Si es de 27 mEq/L o mas, hacer gasometria arterial DESPIERTO', 'Confirmar PaCO2 mayor de 45 mmHg en vigilia', 'Excluir enfermedad pulmonar, neuromuscular, toracica, tiroidea y farmacos', 'Hacer polisomnografia con medicion de CO2', 'Retirar sedantes, opioides y alcohol', 'Iniciar presion positiva nocturna: CPAP o ventilacion con dos niveles', 'NUNCA dejar al paciente solo con oxigeno', 'Programa de perdida de peso y valoracion de cirugia bariatrica']
    },
    {
      nombre: 'Consecuencias cardiovasculares, metabolicas y neurocognitivas',
      color: '#8c3a34',
      definicion: 'Conjunto de repercusiones sistemicas derivadas de la hipoxia intermitente, las oscilaciones de la presion intratoracica, las descargas simpaticas repetidas y la fragmentacion cronica del sue&#241;o.',
      fisiopatologia: 'Cada evento obstructivo produce una descarga simpatica, un pico de presion arterial al final de la apnea y una oscilacion brusca de la presion intratoracica que aumenta la poscarga del ventriculo izquierdo y estira la auricula. Repetido cientos de veces por noche durante a&#241;os, eso genera hiperactividad simpatica mantenida, inflamacion sistemica, estres oxidativo, disfuncion endotelial y remodelado auricular. La fragmentacion del sue&#241;o a&#241;ade resistencia a la insulina y deterioro de la consolidacion de la memoria.',
      epidemiologia: 'La apnea obstructiva es la causa identificable mas frecuente de HIPERTENSION RESISTENTE. Es tambien muy prevalente en la fibrilacion auricular, donde se asocia a mayor tasa de recurrencia tras cardioversion y tras ablacion si no se trata.',
      factores_riesgo: ['Indice de apnea-hipopnea elevado', 'Carga hipoxica alta con tiempo prolongado por debajo del 90%', 'Obesidad asociada', 'Duracion prolongada de la enfermedad sin tratar', 'Somnolencia diurna marcada, que identifica al grupo de mayor riesgo', 'Hipertension resistente', 'Fibrilacion auricular', 'Diabetes tipo 2', 'Tabaquismo y dislipemia concomitantes', 'Adherencia baja al tratamiento'],
      clinica: 'Hipertension arterial de predominio nocturno con patron no dipper o riser, hipertension resistente, fibrilacion auricular, bradiarritmias nocturnas, angina nocturna, insuficiencia cardiaca, ictus, deterioro cognitivo, animo bajo y disfuncion sexual. Muchas de estas asociaciones son bidireccionales y comparten la obesidad como factor comun.',
      criterios_dx: 'No hay criterios propios: son las consecuencias de la enfermedad. La regla practica es buscar apnea de forma activa ante hipertension resistente, fibrilacion auricular recurrente, ictus e insuficiencia cardiaca.',
      laboratorio: 'Hemoglobina glucosilada, perfil lipidico, funcion renal y microalbuminuria dentro de la valoracion del riesgo cardiovascular global.',
      imagen: 'Monitorizacion ambulatoria de la presion arterial de 24 horas, que detecta el patron nocturno alterado. Ecocardiograma segun la sospecha de cardiopatia.',
      complementarios: 'Cribado activo de apnea en las poblaciones de riesgo, que es donde el rendimiento es mayor: hipertension resistente, fibrilacion auricular, insuficiencia cardiaca, ictus y diabetes mal controlada.',
      dx_diferencial: 'Separar lo que produce la apnea de lo que produce la obesidad que la acompa&#241;a es dificil y sigue siendo objeto de debate. En la practica, ambas se tratan a la vez.',
      tx_medico: 'Tratamiento del riesgo cardiovascular global: presion arterial, lipidos, glucemia, peso, ejercicio y tabaco. La apnea es una pieza mas, no un sustituto del resto.',
      tx_farmacologico: 'El de cada comorbilidad segun sus guias. En la hipertension resistente, los antagonistas del receptor mineralocorticoide son especialmente utiles y ademas reducen el edema perifaringeo por retencion de liquido.',
      tx_intervencionista: 'CPAP, que baja la presion arterial de forma modesta y algo mayor en la hipertension resistente, y mejora la somnolencia, la calidad de vida y la funcion cognitiva. Los ensayos aleatorizados NO han demostrado reduccion de eventos cardiovasculares, con la advertencia importante de que la adherencia media fue baja y de que se excluyo a los pacientes muy somnolientos, que son probablemente los que mas se benefician.',
      criterios_uci: 'Los de cada complicacion aguda: sindrome coronario, ictus, insuficiencia cardiaca descompensada o arritmia mal tolerada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante una fibrilacion auricular recurrente tras cardioversion o ablacion, o una hipertension que no se controla con tres farmacos, buscar apnea de forma activa antes de seguir a&#241;adiendo tratamiento.',
      seguimiento_ambulatorio: 'Control conjunto del riesgo cardiovascular y de la adherencia al tratamiento de la apnea. Reevaluar la presion arterial tras iniciar la CPAP.',
      pronostico: 'La asociacion con eventos cardiovasculares es solida en los estudios observacionales; el beneficio del tratamiento sobre esos eventos no esta demostrado en ensayos aleatorizados. La conclusion practica no es dejar de tratar, sino tratar bien: la adherencia es lo que separa un tratamiento eficaz de un aparato guardado en un armario.',
      algoritmo: ['Buscar apnea ante hipertension RESISTENTE', 'Buscarla ante fibrilacion auricular recurrente', 'Buscarla ante ictus e insuficiencia cardiaca', 'Hacer monitorizacion ambulatoria de la presion si se sospecha patron nocturno alterado', 'Tratar el riesgo cardiovascular global, no solo la apnea', 'Usar antagonistas mineralocorticoides en la hipertension resistente', 'Indicar CPAP y perseguir la ADHERENCIA', 'Explicar con honestidad lo que la CPAP si y no ha demostrado', 'Reevaluar la presion arterial y la somnolencia tras iniciarla', 'No sustituir el tratamiento de las comorbilidades por la CPAP']
    },
    {
      nombre: 'Situaciones especiales: perioperatorio, conduccion y poblaciones',
      color: '#6b4a7a',
      definicion: 'Contextos en los que la apnea del sue&#241;o deja de ser un problema cronico de consulta y se convierte en un riesgo inmediato: la anestesia, el volante y los grupos en los que la enfermedad se presenta de otra manera.',
      fisiopatologia: 'En el perioperatorio confluyen tres agresiones sobre una via aerea ya vulnerable: los anestesicos y los opioides deprimen el impulso ventilatorio y el tono de los musculos dilatadores de la faringe, el decubito supino favorece el colapso, y el rebote de sue&#241;o REM de las noches siguientes a la cirugia concentra los eventos justo cuando la vigilancia ya se ha relajado. En la conduccion, el mecanismo es la somnolencia y la alteracion de la atencion sostenida y del tiempo de reaccion.',
      epidemiologia: 'Una proporcion alta de los pacientes quirurgicos con apnea llega al quirofano sin diagnosticar. El riesgo de accidente de trafico esta aumentado en los pacientes con apnea y disminuye con el tratamiento eficaz. En la MUJER la enfermedad se diagnostica menos y mas tarde, y en el ANCIANO el indice se eleva con la edad sin que eso signifique siempre enfermedad con la misma repercusion.',
      factores_riesgo: ['Cirugia con anestesia general y uso de opioides', 'Cirugia de la via aerea o cervical', 'Apnea no diagnosticada al llegar al quirofano', 'Obesidad y perimetro cervical aumentado', 'Uso de opioides o sedantes en el posoperatorio', 'Conduccion profesional', 'Turnicidad y privacion cronica de sue&#241;o', 'Consumo de alcohol', 'Sexo femenino para el infradiagnostico', 'Edad avanzada con comorbilidad'],
      clinica: 'En el perioperatorio: desaturaciones en la sala de despertar, apneas al retirar el estimulo, sensibilidad exagerada a dosis habituales de opioides y dificultad de intubacion o de ventilacion con mascarilla. En la conduccion: episodios de somnolencia al volante, invasion involuntaria del carril, casi accidentes y accidentes.',
      criterios_dx: 'Cribado preoperatorio con STOP-BANG en todo paciente que va a anestesia general, y pregunta explicita y sistematica sobre somnolencia al volante en cada revision.',
      laboratorio: 'Bicarbonato serico en el paciente obeso que va a cirugia: un valor elevado sugiere hipoventilacion cronica y multiplica el riesgo perioperatorio.',
      imagen: 'Valoracion anatomica de la via aerea con Mallampati y perimetro cervical antes de la anestesia. Es una exploracion de segundos con valor predictivo directo sobre la intubacion.',
      complementarios: 'En cirugia programada no urgente, valorar retrasarla para completar el estudio y adaptar la CPAP si la sospecha es alta y el procedimiento lo permite. El paciente debe LLEVAR SU EQUIPO al hospital.',
      dx_diferencial: 'En la somnolencia al volante, descartar sue&#241;o insuficiente (la causa mas frecuente con diferencia), farmacos sedantes, alcohol, turnos y narcolepsia, ademas de la apnea.',
      tx_medico: 'Informacion explicita al paciente sobre el riesgo de conducir con somnolencia y sobre la obligacion de no hacerlo mientras no este controlada. Documentar esa conversacion. Consejo sobre siestas breves y sobre evitar la conduccion nocturna hasta que el tratamiento sea eficaz.',
      tx_farmacologico: 'Minimizar opioides con analgesia multimodal, evitar benzodiacepinas y usar antagonistas cuando proceda. En algunos paises hay farmacos aprobados para la somnolencia residual pese a tratamiento adecuado, que se usan solo tras optimizar la CPAP y descartar otras causas.',
      tx_intervencionista: 'Continuar la CPAP en el posoperatorio inmediato, posicion incorporada, monitorizacion prolongada de la saturacion en pacientes de alto riesgo, y extubacion despierto y en semiincorporado. Anticipar via aerea dificil.',
      criterios_uci: 'Paciente con apnea grave o hipoventilacion sometido a cirugia mayor con opioides, o con desaturaciones repetidas en la unidad de despertar que no se corrigen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Identificar en el ingreso a los pacientes con apnea conocida, asegurar que su equipo esta disponible, evitar sedantes y opioides innecesarios y monitorizar la saturacion. Es un fallo de sistema frecuente y facil de corregir.',
      seguimiento_ambulatorio: 'Reevaluar la somnolencia con la escala de Epworth en cada revision y volver a preguntar por la conduccion. En la mujer, mantener un umbral bajo de sospecha aunque no refiera ronquido ni somnolencia clasica.',
      pronostico: 'El tratamiento eficaz reduce el riesgo de accidente de trafico. En el perioperatorio, la identificacion previa y las medidas de precaucion reducen las complicaciones respiratorias, que es justamente lo que se pierde cuando el paciente llega sin diagnosticar.',
      algoritmo: ['Cribar con STOP-BANG antes de toda anestesia general', 'Explorar la via aerea y medir el perimetro cervical', 'Pedir bicarbonato en el obeso que va a cirugia', 'Valorar retrasar la cirugia programada si la sospecha es alta', 'Pedir al paciente que LLEVE su equipo de CPAP al hospital', 'Minimizar opioides con analgesia multimodal', 'Extubar despierto y en posicion semiincorporada', 'Monitorizar la saturacion mas tiempo del habitual', 'Preguntar SIEMPRE por la somnolencia al volante', 'Documentar el consejo sobre conduccion en la historia']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La apnea del sue&#241;o falla casi siempre por los mismos sitios: no se piensa en ella, se criba con un cuestionario y se da por descartada, se pide la prueba equivocada, o se prescribe una CPAP que el paciente no llega a usar. Lo que sigue es la lista que evita esos cuatro fallos.',
    parametros: ['Preguntar por ronquido, apneas presenciadas y somnolencia en todo paciente de riesgo', 'Preguntar SIEMPRE, de forma explicita, por la somnolencia al volante', 'No usar un cuestionario para diagnosticar ni para descartar la enfermedad', 'Comprobar que el paciente puede hacer poligrafia domiciliaria antes de pedirla', 'Ante poligrafia negativa en paciente sospechoso, hacer POLISOMNOGRAFIA', 'Pedir bicarbonato serico en el obeso, y gasometria diurna si esta elevado', 'No poner oxigeno solo a un paciente que hipoventila', 'Ante apnea CENTRAL, buscar insuficiencia cardiaca y revisar los opioides', 'No usar servoventilacion adaptativa si la fraccion de eyeccion es del 45% o menos', 'Buscar apnea de forma activa ante hipertension resistente y fibrilacion auricular', 'Revisar PRECOZMENTE al paciente que empieza CPAP: ahi se gana la adherencia', 'Mantener la CPAP del paciente durante los ingresos y evitar sedantes y opioides'],
    criterios_uci_general: 'Insuficiencia respiratoria hipercapnica aguda con acidosis o deterioro del nivel de conciencia en el sindrome de hipoventilacion-obesidad; fracaso de la ventilacion no invasiva; complicaciones respiratorias perioperatorias en el paciente con apnea grave; y descompensacion de la enfermedad de base en la apnea central.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. La obesidad extrema del sindrome de hipoventilacion-obesidad es contraindicacion para el trasplante pulmonar.',
    prevencion: 'Primaria: control del peso a lo largo de la vida, que es el factor modificable con mas peso, junto con evitar el alcohol y los sedantes nocturnos y tratar la obstruccion nasal. Secundaria: busqueda activa de la enfermedad en las poblaciones donde el rendimiento es alto (hipertension resistente, fibrilacion auricular, insuficiencia cardiaca, ictus, diabetes mal controlada, obesidad y cribado preoperatorio), con especial atencion a la MUJER, en quien la presentacion atipica retrasa el diagnostico. Terciaria: adherencia al tratamiento, control del peso, prevencion del accidente de trafico y manejo cuidadoso del perioperatorio.'
  }
};

export const compCites = {
  'Apnea obstructiva del sue&#241;o: sospecha y diagnostico': [1, 13, 14],
  'Tratamiento de la apnea obstructiva: CPAP y alternativas': [2, 9, 10, 11],
  'Apnea central del sue&#241;o y respiracion de Cheyne-Stokes': [4, 15],
  'Sindrome de hipoventilacion-obesidad': [3],
  'Consecuencias cardiovasculares, metabolicas y neurocognitivas': [5, 6, 15],
  'Situaciones especiales: perioperatorio, conduccion y poblaciones': [12, 16]
};
export const estigmasTitulo = 'Signos y pistas que orientan hacia un trastorno respiratorio del sue&#241;o';
export const estigmas = [
  { s: 'Ronquido intenso con apneas presenciadas', p: 'La pareja es la que consulta', photo: null, desc: 'Es la presentacion clasica, y a menudo quien pide la consulta no es el paciente sino quien duerme a su lado. La ausencia de ronquido no descarta la enfermedad, sobre todo en la mujer y en el paciente que duerme solo.' },
  { s: 'Despertar con sensacion de ahogo', p: 'Muy sugestivo', photo: null, desc: 'El paciente se despierta bruscamente con sensacion de atragantamiento o de falta de aire, que cede en segundos. Se confunde con crisis de ansiedad, con reflujo o con disnea paroxistica nocturna de origen cardiaco.' },
  { s: 'Nicturia sin causa urologica', p: 'Muy infravalorada', photo: null, desc: 'Las oscilaciones de presion intratoracica aumentan la liberacion de peptido natriuretico auricular y con ella la diuresis nocturna. Se atribuye casi siempre a la prostata, y mejora de forma llamativa con el tratamiento de la apnea.' },
  { s: 'Cefalea matutina que cede en una hora', p: 'Sospecha de hipercapnia', photo: null, desc: 'Sugiere retencion nocturna de CO2 con vasodilatacion cerebral. En un paciente obeso obliga a medir el bicarbonato y, si esta elevado, a hacer una gasometria arterial estando despierto.' },
  { s: 'Perimetro cervical aumentado', p: 'Predictor potente', photo: null, desc: 'Por encima de 40 cm es uno de los items del cribado y predice mejor que el propio indice de masa corporal, porque lo que colapsa la faringe es la grasa perifaringea y no el peso global.' },
  { s: 'Mallampati clase III o IV', p: 'Via aerea estrecha', photo: null, desc: 'Una exploracion de 5 segundos que se asocia a mayor riesgo de apnea y que sobre todo anticipa una intubacion dificil. Merece la pena hacerla y anotarla antes de cualquier anestesia.' },
  { s: 'Retrognatia o micrognatia', p: 'Factor anatomico', photo: null, desc: 'Desplaza la base de la lengua hacia atras y reduce el espacio retrogloso. Explica la apnea en pacientes delgados, en los que el diagnostico se retrasa porque no encajan con el estereotipo del paciente obeso.' },
  { s: 'Hipertension que no baja de noche', p: 'Patron no dipper', photo: null, desc: 'La monitorizacion de 24 horas muestra ausencia del descenso nocturno fisiologico, o incluso elevacion. Es una pista muy util y una de las razones por las que hay que buscar apnea ante hipertension resistente.' },
  { s: 'Fibrilacion auricular que recurre tras la ablacion', p: 'Buscar apnea', photo: null, desc: 'La apnea no tratada se asocia a mayor recurrencia tras cardioversion y tras ablacion. Buscarla antes de repetir el procedimiento cambia el resultado y evita repetir una intervencion condenada a fallar.' },
  { s: 'Bicarbonato serico elevado en un obeso', p: 'Huella de hipercapnia cronica', photo: null, desc: 'La retencion renal de bicarbonato compensa la hipercapnia mantenida. Es un cribado barato: por debajo de 27 mEq/L el sindrome de hipoventilacion-obesidad es muy improbable; por encima, hay que hacer gasometria.' },
  { s: 'Fatiga e insomnio en una mujer de mediana edad', p: 'Presentacion atipica', photo: null, desc: 'En la mujer predominan la fatiga, el insomnio, el animo bajo y la cefalea sobre la somnolencia clasica, y el ronquido se refiere menos. Es la razon principal del infradiagnostico en este grupo.' },
  { s: 'Apneas centrales en un paciente con insuficiencia cardiaca', p: 'Marcador de gravedad', photo: null, desc: 'La respiracion de Cheyne-Stokes traduce mal control hemodinamico y peor pronostico. La respuesta correcta es optimizar el tratamiento cardiologico, y hay que recordar que la servoventilacion adaptativa esta contraindicada si la fraccion de eyeccion es del 45% o menos.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Indice de apnea-hipopnea (calculadora disponible)': [1],
  'Cuestionario STOP-BANG (calculadora disponible)': [7],
  'Escala de somnolencia de Epworth (calculadora disponible)': [8],
  'Criterios de hipoventilacion-obesidad (calculadora disponible)': [3],
  'Clasificacion de las apneas centrales': [4, 15],
  'Escala de Mallampati modificada': [12]
};
export const escalaCalc = {
  'Indice de apnea-hipopnea (calculadora disponible)': 'iah-gravedad',
  'Cuestionario STOP-BANG (calculadora disponible)': 'stop-bang',
  'Escala de somnolencia de Epworth (calculadora disponible)': 'epworth',
  'Criterios de hipoventilacion-obesidad (calculadora disponible)': 'hipoventilacion-obesidad'
};
export const compGroups = [
  { name: 'Apnea obstructiva', items: ['Apnea obstructiva del sue&#241;o: sospecha y diagnostico', 'Tratamiento de la apnea obstructiva: CPAP y alternativas'] },
  { name: 'Las otras dos', items: ['Apnea central del sue&#241;o y respiracion de Cheyne-Stokes', 'Sindrome de hipoventilacion-obesidad'] },
  { name: 'Consecuencias y contextos', items: ['Consecuencias cardiovasculares, metabolicas y neurocognitivas', 'Situaciones especiales: perioperatorio, conduccion y poblaciones'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la apnea obstructiva, separada en el momento de sospecharla y diagnosticarla y el de tratarla, porque son dos problemas distintos: el primero es de indicacion de la prueba correcta y el segundo, casi entero, de adherencia. Las dos siguientes son las entidades que comparten el estudio pero no la causa: la apnea central, que es un signo de otra cosa, y el sindrome de hipoventilacion-obesidad, que se define por un dato que solo se ve estando despierto. Las dos ultimas recogen lo que la enfermedad hace a largo plazo y los contextos en los que se vuelve un riesgo inmediato.';
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
  root: { title: 'APNEA DEL SUE&#209;O', color: '#2f6b5f', target: 'definicion' },
  branches: [
    { title: 'QUE EVENTO ES', sub: 'Hay esfuerzo o no lo hay', color: '#2f6b5f', target: 'complicaciones', leaves: [
      { title: 'Obstructivo', sub: 'Lucha contra una via cerrada', color: '#2f6b5f', target: 'complicaciones' },
      { title: 'Central', sub: 'Es un signo, no un diagnostico', color: '#7a2f5c', target: 'complicaciones' },
      { title: 'Las dos hipopneas', sub: 'Desaturacion del 3% o del 4%', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Hipoventilacion', sub: 'Se ve con el paciente despierto', color: '#8c5a2e', target: 'complicaciones' }
    ] },
    { title: 'QUE PRUEBA', sub: 'Domiciliaria o de laboratorio', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Poligrafia', sub: 'Comoda, pero infraestima', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Polisomnografia', sub: 'Si hay comorbilidad o duda', color: '#2f6b5f', target: 'diagnostico' },
      { title: 'Negativa y sospechoso', sub: 'Hacer polisomnografia', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Cuestionarios', sub: 'Criban, no diagnostican', color: '#8a6a1f', target: 'clasificacion' }
    ] },
    { title: 'QUE HACER', sub: 'Y sobre todo, que se cumpla', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'CPAP', sub: 'Eleccion en moderada y grave', color: '#3d5a73', target: 'complicaciones' },
      { title: 'La adherencia manda', sub: 'Revisar pronto, no al a&#241;o', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Nunca oxigeno solo', sub: 'Si el paciente hipoventila', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'Preguntar por el volante', sub: 'El riesgo mas inmediato', color: '#6b4a7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [3, 13], no_invasivos: [1, 7, 8], imagen: [4, 12] };
export const clasificacionCite = [1, 3, 7, 8];
export const seguimientoCite = [1, 2, 3];
