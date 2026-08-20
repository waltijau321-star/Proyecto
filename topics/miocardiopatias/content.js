// topics/miocardiopatias/content.js: Miocardiopatías (hipertrófica, dilatada, restrictiva,
// arritmogénica del ventrículo derecho y periparto). Estructura idéntica al contrato del motor
// (misma forma que enfermedad-cerebrovascular/sepsis/cirrosis-hepatica). Sigue la convención de
// figuras en línea (figBlock(), numerada "Tabla N" con conteo continuo por tipo a lo largo de
// TODO el tema, no por tarjeta).

export const meta = {
  id: 'miocardiopatias',
  titulo: 'Miocardiopatías',
  subtitulo: 'Módulo 5 · Medicina Interna',
  accent: '#7a1f3d',
  accentDim: '#a8536e'
};

export const definicionText = `<p style="margin:0 0 14px;">Las miocardiopatías son un grupo heterogéneo de enfermedades del miocardio en las que el músculo cardiaco es estructural y funcionalmente anormal, en ausencia de enfermedad coronaria, hipertensión arterial, valvulopatía o cardiopatía congénita suficientes para explicar la anormalidad observada (definición de la clasificación morfofuncional de la Sociedad Europea de Cardiología). Se clasifican según el fenotipo predominante en el ecocardiograma en cinco grandes categorías: hipertrófica, dilatada, restrictiva, arritmogénica del ventrículo derecho y periparto (esta última, una forma particular de disfunción sistólica ligada al embarazo/puerperio); cada una puede ser de origen genético/familiar o adquirido. El objetivo clínico, más allá de reconocer el fenotipo, es identificar la etiología específica siempre que sea posible: varias tienen tratamiento dirigido propio (p. ej. tafamidis en la amiloidosis por transtiretina, bromocriptina en la periparto) y el diagnóstico genético habilita el tamizaje en cascada de familiares en riesgo.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La hipertrófica es la enfermedad cardiaca genética más frecuente (~1:500 adultos con expresión fenotípica) y la causa aislada más común de muerte súbita cardiaca en atletas jóvenes. La dilatada tiene una prevalencia estimada de 1:250-1:2500, es la causa más frecuente de insuficiencia cardiaca no isquémica y la primera indicación de trasplante cardiaco en el adulto. La restrictiva es la menos frecuente de las tres formas clásicas (&lt;5%), pero la amiloidosis cardiaca por transtiretina —su causa más relevante— está subdiagnosticada en el varón mayor de 65-70 años con insuficiencia cardiaca de fracción de eyección preservada. La arritmogénica del ventrículo derecho afecta a ~1:2,000-5,000 personas y es causa reconocida de muerte súbita en deportistas jóvenes. La periparto es rara (1:1,000-4,000 embarazos) pero desproporcionadamente más frecuente y grave en mujeres de ascendencia africana, con preeclampsia o embarazo múltiple.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hipertrófica (MCH)</strong>: hipertrofia ventricular izquierda inexplicada por otra causa; genética en la mayoría de los casos familiares (proteínas del sarcómero: MYH7, MYBPC3), con fenocopias metabólicas (Fabry, amiloidosis en el adulto mayor) que deben excluirse siempre.</li>
    <li><strong>Dilatada (MCD)</strong>: dilatación y disfunción sistólica del ventrículo izquierdo no explicada por cardiopatía isquémica ni sobrecarga anormal; genética (TTN, LMNA) en hasta un tercio de los casos "idiopáticos", o adquirida (miocarditis previa, alcohol, antraciclinas, taquicardiomiopatía).</li>
    <li><strong>Restrictiva (MCR)</strong>: llenado ventricular restrictivo con rigidez miocárdica intrínseca aumentada y función sistólica preservada o casi normal; predominantemente infiltrativa (amiloidosis) o por depósito (hemocromatosis).</li>
    <li><strong>Arritmogénica del ventrículo derecho (MAVD)</strong>: sustitución fibroadiposa progresiva del miocardio, clásicamente del ventrículo derecho (formas biventriculares y de dominancia izquierda ya reconocidas); genética, por mutaciones de proteínas desmosomales (PKP2 la más frecuente).</li>
    <li><strong>Periparto</strong>: disfunción sistólica de novo hacia el final del embarazo o en los meses posteriores al parto, sin otra causa identificable, en una mujer sin cardiopatía previa conocida.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">Modificables:</p>
  <ul style="margin:0 0 8px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Alcohol y cocaína (dilatada)</li>
    <li>Exposición a antraciclinas o radioterapia torácica (dilatada)</li>
    <li>Ejercicio físico de alta intensidad no evaluado (acelera el fenotipo y el riesgo arrítmico en la arritmogénica)</li>
    <li>Preeclampsia, embarazo múltiple, edad materna avanzada (periparto)</li>
    <li>Sobrecarga de hierro no tratada (hemocromatosis, restrictiva)</li>
  </ul>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">No modificables:</p>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Antecedente familiar o mutación patogénica conocida: el factor de riesgo más importante en las 3 formas genéticas clásicas</li>
    <li>Ascendencia africana: mayor incidencia y peor pronóstico en la periparto y en la amiloidosis hereditaria por transtiretina</li>
    <li>Edad avanzada y sexo masculino: amiloidosis por transtiretina de tipo wild-type</li>
    <li>Sexo masculino: mayor prevalencia y penetrancia de la arritmogénica</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Aunque el mecanismo molecular difiere entre subtipos, todos convergen en dos consecuencias fisiológicas compartidas que determinan la clínica: alteración de la relajación/distensibilidad ventricular (disfunción diastólica, dominante en la hipertrófica y la restrictiva) y/o pérdida de la capacidad contráctil (disfunción sistólica, dominante en la dilatada, la periparto y las fases avanzadas de la arritmogénica). A esto se añade, en grado variable, un sustrato arritmogénico estructural (desorganización miofibrilar en la hipertrófica, fibrosis parcheada en la dilatada, reemplazo fibroadiposo en la arritmogénica) que explica por qué la muerte súbita puede ser la primera manifestación de la enfermedad, incluso con función sistólica todavía preservada.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> El espectro va desde el hallazgo incidental en el tamizaje familiar de un portador asintomático hasta la insuficiencia cardiaca franca, la arritmia sintomática o la muerte súbita como debut. Los síntomas cardinales (disnea de esfuerzo, palpitaciones, dolor torácico atípico, presíncope/síncope) se superponen entre subtipos y no permiten diferenciarlos por sí solos: el ecocardiograma es el estudio que define el fenotipo y orienta el resto del abordaje, detallado en Diagnóstico junto con el manejo específico de cada entidad y de sus complicaciones en la sección Complicaciones.</p>`;

export const bibliografia = [
  'Arbelo E, Protonotarios A, Gimeno JR, et al. 2023 ESC Guidelines for the management of cardiomyopathies. Eur Heart J. 2023;44(37):3503-3626.',
  'Ommen SR, Ho CY, Asif IM, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy. Circulation. 2024;149(23):e1239-e1311.',
  'Elliott PM, Anastasakis A, Borger MA, et al. 2014 ESC Guidelines on diagnosis and management of hypertrophic cardiomyopathy. Eur Heart J. 2014;35(39):2733-2779.',
  'O\'Mahony C, Jichi F, Pavlou M, et al. A novel clinical risk prediction model for sudden cardiac death in hypertrophic cardiomyopathy (HCM Risk-SCD). Eur Heart J. 2014;35(30):2010-2020.',
  'Pinto YM, Elliott PM, Arbustini E, et al. Proposal for a revised definition of dilated cardiomyopathy, hypokinetic non-dilated cardiomyopathy, and its implications for clinical practice: a position statement of the ESC Working Group on Myocardial and Pericardial Diseases. Eur Heart J. 2016;37(23):1850-1858.',
  'McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599-3726.',
  'Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032.',
  'Marcus FI, McKenna WJ, Sherrill D, et al. Diagnosis of arrhythmogenic right ventricular cardiomyopathy/dysplasia: proposed modification of the Task Force Criteria. Eur Heart J. 2010;31(7):806-814.',
  'Corrado D, Perazzolo Marra M, Zorzi A, et al. Diagnosis of arrhythmogenic cardiomyopathy: The Padua criteria. Int J Cardiol. 2020;319:106-114.',
  'Towbin JA, McKenna WJ, Abrams DJ, et al. 2019 HRS expert consensus statement on evaluation, risk stratification, and management of arrhythmogenic cardiomyopathy. Heart Rhythm. 2019;16(11):e301-e372.',
  'Garcia-Pavia P, Rapezzi C, Adler Y, et al. Diagnosis and treatment of cardiac amyloidosis: a position statement of the ESC Working Group on Myocardial and Pericardial Diseases. Eur Heart J. 2021;42(16):1554-1568.',
  'Sliwa K, Hilfiker-Kleiner D, Petrie MC, et al. Current state of knowledge on aetiology, diagnosis, management, and therapy of peripartum cardiomyopathy: a position statement from the ESC Working Group on peripartum cardiomyopathy. Eur J Heart Fail. 2010;12(8):767-778.',
  'Bauersachs J, König T, van der Meer P, et al. 2019 ESC HFA position statement on peripartum cardiomyopathy. Eur J Heart Fail. 2019;21(7):827-843.',
  'Priori SG, Blomström-Lundqvist C, Mazzanti A, et al. 2015 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2015;36(41):2793-2867.',
  'Al-Khatib SM, Stevenson WG, Ackerman MJ, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. Circulation. 2018;138(13):e272-e391.'
];

// Reproduce el marcado de .modal-figure (mismo helper que ECV/sepsis) para insertar tablas EN
// LÍNEA justo debajo del párrafo que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

// Tabla de criterios diagnósticos de MAVD: vive en su propio modal (expandHtml, "Ver tabla") en
// vez de incrustarse inline en la celda de la tabla de escalas, para evitar el problema de tabla
// anidada dentro de otra tabla (ver nota en enfermedad-cerebrovascular/content.js).
const mavdCriteriaTable = `
  <div class="table-wrap">
    <table>
      <thead><tr><th>Categoría</th><th>Task Force 2010</th><th>Padua 2020 (añade)</th></tr></thead>
      <tbody>
        <tr><td class="figure-org">Estructural/funcional</td><td>Dilatación/disfunción global o regional del VD, aneurismas segmentarios</td><td>Igual, más criterios de dilatación/disfunción del VI</td></tr>
        <tr><td class="figure-org">Caracterización tisular</td><td>Reemplazo fibroadiposo en biopsia del VD</td><td>Realce tardío de gadolinio en la pared libre del VD y/o del VI por RM (sustituye a la biopsia en la práctica)</td></tr>
        <tr><td class="figure-org">Repolarización</td><td>Inversión de onda T en V1-V3 (o más allá) después de los 14 años</td><td>Igual</td></tr>
        <tr><td class="figure-org">Despolarización/conducción</td><td>Onda épsilon, potenciales tardíos en ECG promediado de señal</td><td>Igual</td></tr>
        <tr><td class="figure-org">Arritmias</td><td>Taquicardia ventricular con morfología de bloqueo de rama izquierda</td><td>Igual, incluye morfologías compatibles con origen en el VI</td></tr>
        <tr><td class="figure-org">Familiar/genética</td><td>Historia familiar confirmada o mutación patogénica identificada</td><td>Igual</td></tr>
      </tbody>
    </table>
  </div>
  <div class="figure-grade-box">El Task Force 2010 se diseñó para el fenotipo clásico de dominancia derecha; los criterios de Padua 2020 lo actualizan para capturar también las formas biventriculares y de dominancia izquierda, cada vez más reconocidas dentro del espectro de la miocardiopatía arritmogénica.</div>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Fenotipo no dilatado (función sistólica preservada)',
      tituloB: 'Fenotipo dilatado / insuficiencia cardiaca',
      compensada: `Agrupa a la hipertrófica, la restrictiva y las fases tempranas de la arritmogénica: predomina la disnea de esfuerzo por disfunción diastólica, angina sin enfermedad coronaria epicárdica (desproporción entre masa/rigidez miocárdica y aporte capilar), palpitaciones y presíncope/síncope de esfuerzo —siempre signo de alarma en este contexto, obliga a descartar obstrucción grave del tracto de salida o arritmia ventricular—.
      <div style="margin-top:10px;"><strong style="color:var(--accent-fg);">Hallazgos de exploración según subtipo:</strong>
      <ul style="margin:8px 0 0;padding-left:20px;color:var(--ink-dim);font-size:14.5px;line-height:1.7;">
        <li><strong>Hipertrófica:</strong> impulso apical sostenido y a veces doble/triple, soplo sistólico eyectivo en el borde paraesternal izquierdo bajo que AUMENTA con maniobras que reducen la precarga/poscarga (Valsalva, bipedestación) y DISMINUYE con las que las aumentan (squatting, handgrip) —patrón opuesto al de la estenosis aórtica—, pulso carotídeo bisferiens, S4 por la contribución auricular aumentada a un ventrículo rígido.</li>
        <li><strong>Restrictiva:</strong> ingurgitación yugular marcada con seno "y" rápido y profundo, signo de Kussmaul (aumento paradójico de la presión venosa yugular con la inspiración), hepatomegalia congestiva y ascitis desproporcionadas a la congestión pulmonar en fases tempranas. Signos de sospecha etiológica dirigida: macroglosia, púrpura periorbitaria y síndrome del túnel carpiano bilateral (amiloidosis); hepatomegalia con pigmentación cutánea y diabetes (hemocromatosis, "diabetes bronceada").</li>
        <li><strong>Arritmogénica del VD:</strong> exploración con frecuencia normal en fases tempranas (la enfermedad es "eléctrica" antes que estructural); palpitaciones sostenidas por extrasistolia ventricular frecuente.</li>
      </ul></div>`,
      descompensada: `Agrupa a la dilatada, la periparto y las fases avanzadas de la restrictiva/arritmogénica: síntomas y signos típicos de insuficiencia cardiaca con fracción de eyección reducida —disnea progresiva (de esfuerzo a ortopnea y disnea paroxística nocturna), fatiga, edema de miembros inferiores, congestión hepática—. A la exploración: impulso apical desplazado lateralmente y difuso (cardiomegalia), S3 audible (galope, marcador de disfunción sistólica significativa), soplo holosistólico de insuficiencia mitral funcional, ingurgitación yugular y hepatomegalia si hay congestión derecha asociada.
      <div style="margin-top:10px;"><strong style="color:var(--accent-fg);">Particularidad de la periparto:</strong> se presenta hacia el final del embarazo o en los primeros meses del puerperio, y sus síntomas pueden confundirse inicialmente con los del embarazo normal; la ortopnea/disnea paroxística nocturna francas, la desaturación o los estertores pulmonares NO son atribuibles al embarazo normal y deben investigarse de forma dirigida.</div>`
    },
    laboratorio: [
      { prueba: 'BNP / NT-proBNP', utilidad: 'Se eleva proporcionalmente a la presión de llenado y la gravedad de la disfunción, útil para el diagnóstico y seguimiento de la insuficiencia cardiaca en cualquier subtipo; valores desproporcionadamente altos para el grado de disfunción sistólica sugieren amiloidosis.' },
      { prueba: 'Troponina de alta sensibilidad', utilidad: 'Elevación leve-persistente sugiere daño miocárdico activo (miocarditis, amiloidosis); útil también para descartar síndrome coronario agudo como diagnóstico diferencial del dolor torácico.' },
      { prueba: 'Panel genético dirigido (secuenciación de nueva generación)', utilidad: 'Confirma la mutación causal en las formas familiares (sarcoméricas en la hipertrófica, TTN/LMNA en la dilatada, desmosomales en la arritmogénica) y habilita el tamizaje en cascada de familiares de primer grado.' },
      { prueba: 'Perfil de hierro (ferritina, saturación de transferrina) y gen HFE', utilidad: 'Tamizaje de hemocromatosis hereditaria como causa tratable de miocardiopatía restrictiva/dilatada.' },
      { prueba: 'Electroforesis de proteínas séricas/urinarias + cadenas ligeras libres', utilidad: 'Tamizaje de amiloidosis de cadenas ligeras (AL), obligatorio ANTES de la gammagrafía con pirofosfato para no confundirla con la forma por transtiretina (tratamientos radicalmente distintos).' },
      { prueba: 'Enzima alfa-galactosidasa A (varones) / genética GLA', utilidad: 'Tamizaje de enfermedad de Fabry como fenocopia tratable de la hipertrofia ventricular izquierda.' }
    ],
    no_invasivos: [
      { metodo: 'ECG de 12 derivaciones', interpretacion: 'Criterios de voltaje con patrón de sobrecarga en la hipertrófica; bajo voltaje periférico con hipertrofia ecocardiográfica marcada ("discordancia electro-ecocardiográfica") sugiere amiloidosis; onda épsilon, inversión de T en V1-V3 más allá de la adolescencia y bloqueo de rama derecha incompleto orientan a arritmogénica.', cutoff: 'N/A' },
      { metodo: 'Holter / monitorización ambulatoria prolongada', interpretacion: 'Cuantifica la carga arrítmica (taquicardia ventricular no sostenida, ectopia ventricular frecuente) para estratificación de riesgo de muerte súbita, especialmente en la hipertrófica y la arritmogénica.', cutoff: 'N/A' },
      { metodo: 'Prueba de esfuerzo con respuesta tensional', interpretacion: 'La respuesta tensional anormal (falta de incremento ≥20 mmHg o caída de la presión sistólica con el ejercicio) es un marcador de riesgo de muerte súbita en la hipertrófica.', cutoff: 'N/A' },
      { metodo: 'Asesoría genética y tamizaje familiar en cascada', interpretacion: 'Obligatorio ante toda mutación patogénica confirmada: electrocardiograma y ecocardiograma periódicos en familiares de primer grado, incluso asintomáticos.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma transtorácico', hallazgos: 'Estudio de primera línea en todo paciente con sospecha de miocardiopatía: define el fenotipo (grosor parietal, patrón de dilatación, función sistólica/diastólica, gradiente del tracto de salida del ventrículo izquierdo con maniobras de provocación, tamaño y función del ventrículo derecho).' },
      { modalidad: 'Resonancia magnética cardiaca con gadolinio', hallazgos: 'Caracterización tisular: el patrón de realce tardío de gadolinio orienta la etiología (medioparietal en la dilatada no isquémica, subendocárdico/transmural difuso en la amiloidosis, infiltración grasa/fibrosis de la pared libre del ventrículo derecho en la arritmogénica); imprescindible cuando la ventana ecocardiográfica es limitada o el diagnóstico etiológico permanece incierto.' },
      { modalidad: 'Gammagrafía con difosfonato marcado con tecnecio-99m (pirofosfato)', hallazgos: 'Capta de forma intensa en la amiloidosis por transtiretina y NO en la amiloidosis de cadenas ligeras, permitiendo en muchos casos el diagnóstico de amiloidosis por transtiretina sin biopsia, siempre que se haya excluido primero una gammapatía monoclonal.' },
      { modalidad: 'Biopsia endomiocárdica', hallazgos: 'Reservada para cuando la imagen y el estudio sérico no son concluyentes; confirma enfermedad infiltrativa (amiloide, sarcoidosis, hemocromatosis) o inflamatoria (miocarditis de células gigantes) y guía tratamiento específico.' },
      { modalidad: 'Cateterismo cardiaco derecho e izquierdo', hallazgos: 'Distingue la miocardiopatía restrictiva de la pericarditis constrictiva mediante hemodinamia invasiva cuando la imagen no invasiva no es concluyente (ver tabla comparativa en la tarjeta de Miocardiopatía restrictiva); también documenta el gradiente intraventricular en la hipertrófica obstructiva.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La estratificación en las miocardiopatías cumple dos propósitos distintos según el subtipo: predecir el riesgo de muerte súbita arrítmica (el objetivo dominante en la hipertrófica y la arritmogénica, donde guía la indicación de un cardiodesfibrilador implantable) y clasificar la capacidad funcional/gravedad de la insuficiencia cardiaca (relevante en todos los subtipos, especialmente en la dilatada y la periparto).',
    escalas: [
      { nombre: 'NYHA', componentes: 'Limitación de la actividad física por síntomas de insuficiencia cardiaca (disnea, fatiga, palpitaciones).', formula: 'Clasificación clínica ordinal, I-IV (sin puntaje numérico).', interpretacion: 'I sin limitación; II limitación leve con la actividad ordinaria; III limitación marcada con actividad menor a la ordinaria; IV síntomas en reposo. Guía la intensidad del tratamiento y el momento de derivación a insuficiencia cardiaca avanzada/trasplante en cualquiera de los 5 subtipos.' },
      { nombre: 'HCM Risk-SCD', componentes: 'Edad, grosor parietal máximo (mm), diámetro de la aurícula izquierda (mm), gradiente máximo del tracto de salida del ventrículo izquierdo en reposo/Valsalva (mmHg), antecedente familiar de muerte súbita, taquicardia ventricular no sostenida, síncope inexplicado.', formula: 'Modelo de regresión de riesgos proporcionales de Cox; probabilidad de muerte súbita a 5 años = 1 − 0.998^exp(índice pronóstico). Calculadora disponible más abajo.', interpretacion: '&lt;4% riesgo bajo (CDI generalmente no indicado); 4-&lt;6% riesgo intermedio (individualizar según factores adicionales); ≥6% riesgo alto (considerar CDI). Validado solo en ≥16 años; no debe aplicarse en atletas de alto rendimiento con hipertrofia fisiológica ni tras miectomía/ablación septal previas.' },
      { nombre: 'Factores mayores de riesgo AHA/ACC 2024 (HCM)', componentes: 'Antecedente familiar de muerte súbita por MCH, síncope inexplicado, grosor parietal máximo ≥30 mm, taquicardia ventricular no sostenida, respuesta tensional anormal al ejercicio, aneurisma apical del ventrículo izquierdo, realce tardío de gadolinio extenso en RM, FEVI &lt;50%.', formula: 'Conteo cualitativo de factores mayores (a diferencia del HCM Risk-SCD, no asigna un peso ponderado a cada uno).', interpretacion: 'La presencia de ≥1 factor mayor, integrada con el juicio clínico y la conversación de riesgo compartida con el paciente, apoya la discusión de CDI; es el algoritmo de referencia en Estados Unidos, complementario —no sustituto— del modelo europeo ponderado.' },
      { nombre: 'Criterios diagnósticos de MAVD (Task Force 2010 / Padua 2020)', componentes: 'Seis categorías de criterios mayores/menores: disfunción y alteración estructural global/regional (imagen), caracterización tisular de la pared (histología/RM), alteraciones de la repolarización, alteraciones de la despolarización/conducción, arritmias, e historia familiar/genética. Padua 2020 añade categorías específicas para el ventrículo izquierdo.', formula: 'Task Force 2010: diagnóstico definitivo con 2 criterios mayores, o 1 mayor + 2 menores, o 4 menores de categorías distintas. Padua 2020: sistema análogo, extendido al fenotipo biventricular/de dominancia izquierda.', interpretacion: 'Ningún hallazgo aislado —ni siquiera la onda épsilon— es diagnóstico por sí solo; el diagnóstico requiere la combinación ponderada de varias categorías. Padua identifica formas de dominancia izquierda que el Task Force original clasificaba erróneamente como no afectadas.', expandTitulo: 'Tabla · Categorías de criterios diagnósticos de MAVD (Task Force 2010 / Padua 2020)', expandHtml: mavdCriteriaTable }
    ]
  },
  complicaciones: [
    {
      nombre: 'Miocardiopatía hipertrófica',
      color: '#8c3a34',
      definicion: 'Hipertrofia ventricular izquierda (grosor parietal máximo ≥15 mm en el caso índice adulto, o ≥13 mm si hay antecedente familiar/mutación positiva) no explicada por condiciones de carga anormales (hipertensión, valvulopatía), casi siempre de origen genético por mutación de una proteína sarcomérica.',
      fisiopatologia: `La mutación sarcomérica (con mayor frecuencia en MYH7 o MYBPC3, herencia autosómica dominante con penetrancia incompleta) produce desorganización de los miocitos ("myocyte disarray") y fibrosis intersticial, generando un miocardio hipertrófico rígido con disfunción diastólica predominante. En hasta dos tercios de los casos, el engrosamiento septal asimétrico produce además obstrucción dinámica del tracto de salida del ventrículo izquierdo (TSVI) por el movimiento sistólico anterior (SAM) de la valva mitral anterior hacia el septo hipertrofiado, lo que añade insuficiencia mitral funcional y un componente obstructivo que empeora con la reducción de la precarga/poscarga (Valsalva, bipedestación, deshidratación) y mejora con su aumento (squatting, handgrip).${figBlock('Imagen 1', 'Mecanismo del SAM y la obstrucción dinámica del tracto de salida', `
      <svg viewBox="0 0 680 320" role="img" aria-labelledby="sam-title sam-desc" style="width:100%;max-width:620px;display:block;margin:0 auto;">
        <title id="sam-title">Movimiento sistólico anterior (SAM) y obstrucción dinámica del tracto de salida del ventrículo izquierdo</title>
        <desc id="sam-desc">Comparación esquemática del ventrículo izquierdo en diástole y en sístole: el septo hipertrofiado ya reduce el tracto de salida, y en sístole la valva mitral anterior se desplaza hacia el septo (SAM), estrechando aún más el tracto de salida y generando flujo turbulento e insuficiencia mitral funcional.</desc>
        <line x1="340" y1="14" x2="340" y2="308" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="170" y="26" text-anchor="middle" fill="var(--accent-fg)" font-size="14" font-weight="700">DIÁSTOLE</text>
        <text x="510" y="26" text-anchor="middle" fill="var(--accent-fg)" font-size="14" font-weight="700">SÍSTOLE (SAM)</text>
        <g>
          <ellipse cx="170" cy="190" rx="110" ry="90" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
          <rect x="245" y="110" width="40" height="160" rx="16" fill="#8c3a34" opacity="0.28" stroke="#8c3a34" stroke-width="2"/>
          <text x="265" y="192" text-anchor="middle" fill="#8c3a34" font-size="9.5" font-weight="700" transform="rotate(-90 265 192)">SEPTO HIPERTROFIADO</text>
          <line x1="110" y1="210" x2="160" y2="140" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
          <circle cx="110" cy="210" r="4" fill="var(--ink)"/>
          <text x="55" y="255" fill="var(--ink-dim)" font-size="10">Valva mitral anterior</text>
          <text x="75" y="268" fill="var(--ink-dim)" font-size="10">(abierta)</text>
          <line x1="150" y1="90" x2="230" y2="75" stroke="#3f6b52" stroke-width="8" stroke-linecap="round" opacity="0.55"/>
          <text x="95" y="60" fill="#3f6b52" font-size="10" font-weight="600">TSVI amplio</text>
        </g>
        <g transform="translate(340,0)">
          <ellipse cx="170" cy="190" rx="110" ry="90" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
          <rect x="245" y="110" width="40" height="160" rx="16" fill="#8c3a34" opacity="0.28" stroke="#8c3a34" stroke-width="2"/>
          <line x1="110" y1="210" x2="235" y2="130" stroke="#8c3a34" stroke-width="4" stroke-linecap="round"/>
          <circle cx="110" cy="210" r="4" fill="var(--ink)"/>
          <circle cx="235" cy="130" r="4" fill="#8c3a34"/>
          <text x="150" y="120" fill="#8c3a34" font-size="11" font-weight="700">SAM</text>
          <path d="M 205 100 q 7 -6 14 0 q 7 6 14 0" stroke="#8c3a34" stroke-width="2" fill="none"/>
          <path d="M 208 112 q 7 -6 14 0 q 7 6 14 0" stroke="#8c3a34" stroke-width="2" fill="none"/>
          <text x="55" y="60" fill="#8c3a34" font-size="10" font-weight="600">TSVI estrecho + turbulencia</text>
          <text x="45" y="255" fill="var(--ink-dim)" font-size="10">Insuficiencia mitral funcional</text>
          <text x="65" y="268" fill="var(--ink-dim)" font-size="10">(chorro póstero-lateral)</text>
        </g>
      </svg>
      <div class="figure-grade-box">Este mecanismo explica por qué el soplo AUMENTA con maniobras que reducen la precarga/poscarga (Valsalva, bipedestación) y DISMINUYE con las que la aumentan (squatting, handgrip): a menor volumen ventricular, más se acerca la valva mitral al septo.</div>`)}`,
      epidemiologia: 'La enfermedad cardiaca genética más frecuente, con una prevalencia de expresión fenotípica de ~1:500 adultos; causa aislada más común de muerte súbita cardiaca en atletas jóvenes y deportistas de competición.',
      factores_riesgo: ['Antecedente familiar de miocardiopatía hipertrófica o muerte súbita (el más importante)', 'Mutación sarcomérica patogénica conocida', 'Ejercicio físico intenso no evaluado previamente', 'Hipertensión arterial mal controlada (acentúa el fenotipo en portadores)'],
      clinica: 'Espectro desde el hallazgo incidental asintomático hasta la disnea de esfuerzo, angina sin enfermedad coronaria epicárdica, palpitaciones y presíncope/síncope de esfuerzo (signo de alarma que obliga a descartar obstrucción grave o arritmia ventricular). Hallazgos de exploración descritos en Diagnóstico.',
      criterios_dx: 'Ecocardiográfico: grosor parietal máximo ≥15 mm en cualquier segmento del ventrículo izquierdo (≥13 mm si hay antecedente familiar o mutación patogénica confirmada), no explicado por condiciones de carga anormales.',
      laboratorio: 'Panel genético dirigido a genes sarcoméricos (rendimiento diagnóstico ~30-60% en casos familiares); descartar fenocopias metabólicas en la hipertrofia atípica (enfermedad de Fabry mediante alfa-galactosidasa A, amiloidosis en el mayor de 65 años).',
      imagen: 'Ecocardiograma con maniobra de provocación (Valsalva, bipedestación, ejercicio) si el gradiente en reposo es &lt;50 mmHg y hay sospecha clínica de obstrucción; resonancia magnética cardiaca para cuantificar el grosor parietal máximo cuando la ventana ecocardiográfica es subóptima, identificar el aneurisma apical (marcador de riesgo) y el patrón de realce tardío de gadolinio (marcador de fibrosis y riesgo arrítmico).',
      complementarios: 'Holter para taquicardia ventricular no sostenida; prueba de esfuerzo con respuesta tensional; cálculo de HCM Risk-SCD (ver Escalas) en todo paciente ≥16 años en la evaluación inicial y cada 1-2 años.',
      dx_diferencial: 'Corazón de atleta (hipertrofia fisiológica, generalmente &lt;13-15 mm, con función diastólica y cavidad ventricular normales/aumentadas, que regresa con el desentrenamiento), hipertensión arterial de larga evolución, estenosis aórtica, enfermedad de Fabry, amiloidosis cardiaca.',
      tx_medico: 'Evitar la deshidratación y el ejercicio físico intenso no supervisado hasta la estratificación de riesgo; restricción de la actividad física competitiva de alta intensidad si hay obstrucción significativa o alto riesgo arrítmico, según guías específicas de cardiología deportiva.',
      tx_farmacologico: 'Betabloqueador no vasodilatador (metoprolol o bisoprolol) como primera línea en el fenotipo obstructivo sintomático; verapamilo si hay contraindicación o respuesta insuficiente al betabloqueador (evitar en obstrucción grave con presión de llenado elevada). Mavacamten (inhibidor de la miosina cardiaca) como terapia dirigida de segunda línea en la forma obstructiva sintomática pese a tratamiento estándar, bajo vigilancia ecocardiográfica seriada de la FEVI por su efecto inótropo negativo directo. Evitar vasodilatadores puros y digoxina en el fenotipo obstructivo (empeoran el gradiente).',
      tx_intervencionista: 'Miectomía septal quirúrgica (procedimiento de elección en centros con experiencia) o ablación septal con alcohol (alternativa percutánea) si persiste obstrucción significativa (gradiente ≥50 mmHg) con síntomas limitantes pese a tratamiento médico óptimo. Cardiodesfibrilador implantable (CDI) según estratificación de riesgo de muerte súbita (ver Escalas).',
      criterios_uci: 'Síncope reciente con alta sospecha arrítmica, obstrucción grave del TSVI con inestabilidad hemodinámica, o taquicardia ventricular sostenida documentada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Considerar en la fase dilatada/"quemada" terminal (evolución a disfunción sistólica con FEVI &lt;50%, poco frecuente pero de mal pronóstico) refractaria a tratamiento médico óptimo.',
      seguimiento_hospitalario: 'Vigilancia telemétrica si hay síncope o arritmia documentada; en el postoperatorio de miectomía, vigilancia de bloqueo auriculoventricular completo (puede requerir marcapasos definitivo) y de comunicación interventricular iatrogénica.',
      seguimiento_ambulatorio: 'Ecocardiograma y reestratificación de riesgo (HCM Risk-SCD) cada 1-2 años o ante cambio clínico; tamizaje familiar en cascada desde la adolescencia.',
      pronostico: 'La mortalidad cardiovascular anual en la población general con MCH bien tratada es baja (~0.5-1%/año) gracias a la estratificación de riesgo y el CDI dirigido; el pronóstico es peor en la minoría que progresa a la fase dilatada terminal.',
      algoritmo: ['Hipertrofia VI ≥15 mm (o ≥13 mm con historia familiar) sin causa de sobrecarga → ecocardiograma con maniobras de provocación', 'Confirmar fenotipo obstructivo vs. no obstructivo', 'Calcular HCM Risk-SCD + evaluar factores mayores adicionales', 'Sintomático obstructivo → betabloqueador → mavacamten/verapamilo → miectomía/ablación septal si refractario', 'Riesgo alto de muerte súbita → CDI', 'Panel genético + tamizaje familiar en cascada']
    },
    {
      nombre: 'Miocardiopatía dilatada',
      color: '#3d5a73',
      definicion: 'Dilatación y disfunción sistólica del ventrículo izquierdo (fracción de eyección &lt;45%), con o sin afección del ventrículo derecho, no explicada por enfermedad coronaria significativa, hipertensión, valvulopatía o cardiopatía congénita suficientes para justificar el grado de disfunción observado.',
      fisiopatologia: 'Vía final común de daño al cardiomiocito por múltiples mecanismos (genético, inflamatorio/infeccioso, tóxico, mecánico por taquicardia sostenida): el remodelado excéntrico progresivo (dilatación de la cavidad con adelgazamiento relativo de la pared) reduce la eficiencia contráctil, activa los sistemas neurohormonales compensadores (renina-angiotensina-aldosterona, simpático) que perpetúan el remodelado, y con frecuencia produce insuficiencia mitral funcional secundaria por desplazamiento apical de los músculos papilares (ver Complicaciones).',
      epidemiologia: 'Prevalencia estimada de 1:250-1:2500; es la causa más frecuente de insuficiencia cardiaca no isquémica y la principal indicación de trasplante cardiaco en el adulto.',
      factores_riesgo: ['Antecedente familiar (hasta un tercio de los casos "idiopáticos" tiene una mutación identificable; TTN es la más frecuente)', 'Consumo crónico de alcohol', 'Exposición a antraciclinas o radioterapia torácica', 'Infección viral previa (miocarditis)', 'Taquiarritmia sostenida no controlada (taquicardiomiopatía, potencialmente reversible)', 'Enfermedades autoinmunes sistémicas'],
      clinica: 'Síntomas y signos típicos de insuficiencia cardiaca con fracción de eyección reducida: disnea progresiva, fatiga, edema de miembros inferiores, congestión hepática. A la exploración: impulso apical desplazado lateralmente y difuso, S3 audible, soplo holosistólico de insuficiencia mitral funcional, ingurgitación yugular y hepatomegalia si hay congestión derecha asociada.',
      criterios_dx: 'Ecocardiográfico: dilatación del ventrículo izquierdo (diámetro diastólico indexado por encima del límite normal) con FEVI &lt;45%, tras excluir enfermedad coronaria significativa y causas de sobrecarga.',
      laboratorio: 'BNP/NT-proBNP elevado proporcional a la gravedad; panel genético dirigido (TTN, LMNA —esta última con implicación pronóstica arrítmica propia, ver Complicaciones—); serología viral si hay sospecha de miocarditis reciente; función tiroidea, ferritina y saturación de transferrina como causas tratables.',
      imagen: 'Ecocardiograma para cuantificar dilatación/FEVI/insuficiencia mitral funcional; resonancia magnética cardiaca con realce tardío de gadolinio de patrón medioparietal (a diferencia del patrón subendocárdico/transmural de la cardiopatía isquémica); coronariografía o angio-TC coronaria para excluir origen isquémico en todo caso nuevo.',
      complementarios: 'Electrocardiograma (bloqueo de rama izquierda frecuente; PR prolongado y bloqueo auriculoventricular en la miocardiopatía por LMNA, un marcador de alto riesgo arrítmico específico); biopsia endomiocárdica si se sospecha miocarditis de células gigantes o sarcoidosis con implicación terapéutica inmediata.',
      dx_diferencial: 'Cardiopatía isquémica con remodelado (excluida por coronariografía/angio-TC), miocarditis aguda activa, taquicardiomiopatía (reversible al controlar la arritmia), miocardiopatía periparto (ver esa tarjeta, distinguida por el contexto temporal del embarazo/puerperio), valvulopatía significativa no corregida.',
      tx_medico: 'Tratamiento estándar de insuficiencia cardiaca con FEVI reducida: restricción de sodio, rehabilitación cardiaca, manejo de comorbilidades; suspender el agente causal identificado (alcohol, tóxico) siempre que sea posible, con potencial de recuperación parcial o completa de la FEVI.',
      tx_farmacologico: 'Los cuatro pilares de la insuficiencia cardiaca con FEVI reducida, iniciados y titulados en paralelo según tolerancia: inhibidor del receptor de angiotensina-neprilisina (sacubitrilo/valsartán 24/26-97/103 mg cada 12h) o IECA/ARA-II si no está disponible; betabloqueador basado en evidencia (bisoprolol, carvedilol o metoprolol succinato de liberación prolongada); antagonista del receptor de mineralocorticoides (espironolactona 25-50 mg/día); inhibidor de SGLT2 (dapagliflozina 10 mg/día o empagliflozina 10 mg/día), independientemente del estado diabético. Diurético de asa para el control sintomático de la congestión.',
      tx_intervencionista: 'Terapia de resincronización cardiaca si FEVI ≤35%, bloqueo de rama izquierda con QRS ≥150 ms y síntomas pese a tratamiento médico óptimo; CDI en prevención primaria si FEVI ≤35% pese a ≥3 meses de tratamiento médico óptimo (con matices específicos si la etiología es LMNA, ver Complicaciones); dispositivo de asistencia ventricular o trasplante cardiaco en la fase avanzada refractaria.',
      criterios_uci: 'Insuficiencia cardiaca aguda descompensada con hipoperfusión (choque cardiogénico), necesidad de soporte inotrópico o mecánico, arritmia ventricular sostenida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'FEVI persistentemente reducida con síntomas limitantes (NYHA III-IV) pese a tratamiento médico y de dispositivo óptimo, sin contraindicación; es la miocardiopatía que con mayor frecuencia llega a este punto entre las 5 formas de esta sección.',
      seguimiento_hospitalario: 'Balance hídrico estricto, titulación de diuréticos, inicio precoz de los 4 pilares farmacológicos si la hemodinamia lo permite (no esperar al egreso), vigilancia de función renal y electrolitos.',
      seguimiento_ambulatorio: 'Titulación progresiva hasta dosis objetivo de los 4 pilares farmacológicos, reevaluación de FEVI a los 3-6 meses (define candidatura a CDI/resincronización), tamizaje familiar en cascada si se identifica mutación patogénica.',
      pronostico: 'Muy heterogéneo según la etiología: potencialmente reversible por completo si el desencadenante se controla (taquicardiomiopatía, alcohol), o progresivo hacia insuficiencia cardiaca terminal en las formas genéticas con mutaciones de alto riesgo (LMNA) o miocarditis con daño establecido.',
      algoritmo: ['Disfunción sistólica + dilatación VI sin causa de sobrecarga → excluir enfermedad coronaria (angiografía/angio-TC)', 'RM cardiaca: patrón de RTG + descartar causas tratables (tiroides, hierro, taquiarritmia)', 'Panel genético si no hay causa adquirida clara', 'Iniciar y titular los 4 pilares farmacológicos de IC-FEr en paralelo', 'Reevaluar FEVI a 3-6 meses → CDI/resincronización si FEVI ≤35% persistente', 'Refractario → asistencia ventricular/trasplante']
    },
    {
      nombre: 'Miocardiopatía restrictiva',
      color: '#6b4a2e',
      definicion: 'Trastorno del llenado ventricular caracterizado por rigidez miocárdica intrínseca aumentada, con función sistólica y espesor parietal habitualmente preservados o solo levemente alterados, que produce presiones de llenado elevadas con volúmenes ventriculares normales o reducidos; es la menos frecuente de las tres formas clásicas.',
      fisiopatologia: `A diferencia de la hipertrófica (donde la rigidez se debe al engrosamiento parietal) y de la pericarditis constrictiva (donde el problema es extrínseco, un pericardio rígido), en la restrictiva la rigidez es intrínseca al propio miocardio: infiltración extracelular (amiloide, la causa más relevante en el adulto mayor), depósito intracelular (hierro en la hemocromatosis, glucoesfingolípidos en Fabry) o fibrosis endomiocárdica. El resultado hemodinámico común es un llenado ventricular rápido y precoz seguido de una meseta abrupta ("dip-and-plateau"), con elevación marcada y casi simétrica de las presiones de llenado de ambos ventrículos.${figBlock('Imagen 2', 'Patrón de llenado "dip-and-plateau" (signo de la raíz cuadrada)', `
      <svg viewBox="0 0 560 300" role="img" aria-labelledby="dip-title dip-desc" style="width:100%;max-width:480px;display:block;margin:0 auto;">
        <title id="dip-title">Patrón de llenado ventricular "dip-and-plateau" en la fisiología restrictiva</title>
        <desc id="dip-desc">Curva de presión ventricular durante la diástole: en el llenado normal la presión asciende de forma suave y continua; en la fisiología restrictiva (compartida con la pericarditis constrictiva) hay un descenso inicial rápido seguido de una meseta elevada y sostenida, el signo de la raíz cuadrada.</desc>
        <line x1="60" y1="30" x2="60" y2="240" stroke="var(--ink-dim)" stroke-width="1.5"/>
        <line x1="60" y1="240" x2="520" y2="240" stroke="var(--ink-dim)" stroke-width="1.5"/>
        <text x="30" y="135" text-anchor="middle" fill="var(--ink-dim)" font-size="11" transform="rotate(-90 30 135)">Presión ventricular</text>
        <text x="290" y="268" text-anchor="middle" fill="var(--ink-dim)" font-size="11">Diástole (tiempo) →</text>
        <path d="M 60 222 C 150 210 250 195 350 175 C 400 165 440 158 460 150" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <text x="465" y="153" fill="var(--ink)" font-size="11" font-weight="600">Normal</text>
        <path d="M 60 195 L 95 232 L 132 108 L 460 102" fill="none" stroke="#8c3a34" stroke-width="3"/>
        <text x="360" y="90" fill="#8c3a34" font-size="11" font-weight="700">Restrictiva / constrictiva</text>
        <circle cx="95" cy="232" r="4" fill="#8c3a34"/>
        <text x="30" y="252" fill="#8c3a34" font-size="9.5">Llenado rápido inicial (dip)</text>
        <line x1="65" y1="248" x2="93" y2="234" stroke="#8c3a34" stroke-width="1" />
        <circle cx="300" cy="102" r="4" fill="#8c3a34"/>
        <text x="160" y="128" fill="#8c3a34" font-size="9.5">Meseta elevada (plateau)</text>
        <line x1="230" y1="122" x2="290" y2="105" stroke="#8c3a34" stroke-width="1"/>
      </svg>
      <div class="figure-grade-box">Este patrón por sí solo NO distingue la restrictiva de la constrictiva (ambas lo comparten): la distinción exige la hemodinamia respirofásica y la imagen del pericardio de la tabla siguiente.</div>`)}`,
      epidemiologia: 'La menos frecuente de las tres formas clásicas (&lt;5% de las miocardiopatías); la amiloidosis cardiaca por transtiretina de tipo wild-type (no hereditaria) es una causa subdiagnosticada de insuficiencia cardiaca con FEVI preservada en el varón mayor de 65-70 años.',
      factores_riesgo: ['Edad avanzada y sexo masculino (amiloidosis por transtiretina wild-type)', 'Mutación del gen de la transtiretina, más frecuente en población afrodescendiente (amiloidosis hereditaria)', 'Gammapatía monoclonal de significado incierto o mieloma (amiloidosis de cadenas ligeras)', 'Hemocromatosis hereditaria o transfusional no tratada', 'Sarcoidosis sistémica', 'Radioterapia torácica previa'],
      clinica: 'Predomina la insuficiencia cardiaca derecha desproporcionada a la izquierda en fases tempranas, con disnea de esfuerzo por limitación del llenado; la intolerancia a la fibrilación auricular es característica y a menudo precipita la primera descompensación (ver Complicaciones), porque el llenado ventricular depende de forma crítica de la contribución auricular. Hallazgos de exploración descritos en Diagnóstico.',
      criterios_dx: 'Ecocardiográfico/hemodinámico: patrón de llenado restrictivo (onda E dominante, tiempo de desaceleración acortado, relación E/e\' elevada) con función sistólica y grosor parietal preservados o levemente alterados, y biauriculomegalia marcada; el diagnóstico etiológico específico requiere el estudio dirigido descrito en Diagnóstico.',
      laboratorio: 'Igual que el panel general (BNP, cadenas ligeras libres, ferritina/saturación de transferrina) con énfasis en descartar amiloidosis de cadenas ligeras ANTES de solicitar la gammagrafía de pirofosfato, porque esta puede ser falsamente positiva en esa forma si no se interpreta en el contexto correcto.',
      imagen: `Ecocardiograma con "discordancia" entre el grosor parietal aumentado y el bajo voltaje del electrocardiograma como pista clásica de amiloidosis; resonancia magnética cardiaca con realce tardío de gadolinio subendocárdico difuso/transmural (amiloidosis) o mapeo de T1/T2 (T2* acortado por depósito de hierro en la hemocromatosis); gammagrafía con difosfonato marcado con tecnecio-99m (DPD/pirofosfato) para amiloidosis por transtiretina.${figBlock('Imagen 3', 'Gammagrafía con DPD-Tc99m positiva en amiloidosis cardiaca por transtiretina', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Amyloid_deposition_%28DPD_scan%29.png" alt="Gammagrafía planar con difosfonato marcado con tecnecio-99m mostrando captación miocárdica intensa, compatible con amiloidosis cardiaca por transtiretina." style="width:100%;max-width:360px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);background:#fff;">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Captación miocárdica difusa e intensa del trazador óseo, el patrón que permite diagnosticar la amiloidosis por transtiretina sin biopsia una vez excluida una gammapatía monoclonal. Treibel et al., J Cardiovasc Magn Reson 2016;18(Suppl 1):O40, Wikimedia Commons, CC BY 4.0.</p>`)}${figBlock('Imagen 4', 'Depósito de amiloide: tinción de Rojo Congo con birrefringencia verde manzana', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Gastric_Amyloidosis_%28Congo_red_stain%2C_crossed_polarizers%29_%283595031587%29.jpg/960px-Gastric_Amyloidosis_%28Congo_red_stain%2C_crossed_polarizers%29_%283595031587%29.jpg" alt="Corte histológico teñido con Rojo Congo, visto con luz polarizada cruzada, mostrando la birrefringencia verde manzana característica del depósito de amiloide." style="width:100%;max-width:360px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">El hallazgo histológico confirmatorio de amiloide (birrefringencia verde manzana bajo luz polarizada) es idéntico independientemente del órgano biopsiado; esta imagen es de un caso gástrico, ilustrativo del mismo patrón que se busca en la biopsia endomiocárdica. Ed Uthman, Wikimedia Commons, CC BY 2.0.</p>`)}`,
      complementarios: 'Cateterismo cardiaco derecho e izquierdo simultáneo cuando la distinción con la pericarditis constrictiva sigue siendo incierta tras la imagen no invasiva (ver tabla).',
      dx_diferencial: `Pericarditis constrictiva es el diagnóstico diferencial más relevante y con mayor impacto terapéutico (quirúrgicamente curable, a diferencia de la mayoría de las causas de restrictiva):${figBlock('Tabla 1', 'Miocardiopatía restrictiva vs. pericarditis constrictiva', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Característica</th><th>Miocardiopatía restrictiva</th><th>Pericarditis constrictiva</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Grosor parietal</td><td>Normal o aumentado (infiltrativa)</td><td>Normal</td></tr>
            <tr><td class="figure-org">Pericardio</td><td>Normal</td><td>Engrosado/calcificado en TC/RM</td></tr>
            <tr><td class="figure-org">Interdependencia ventricular</td><td>Ausente o leve</td><td>Marcada (desplazamiento septal con la respiración)</td></tr>
            <tr><td class="figure-org">Presiones diastólicas VD/VI</td><td>Concordantes, VI &gt; VD &gt;5 mmHg</td><td>Discordantes con la respiración, igualadas (diferencia &lt;5 mmHg)</td></tr>
            <tr><td class="figure-org">Strain longitudinal global</td><td>Reducido, patrón "apical sparing" típico en amiloidosis</td><td>Preservado (relativamente normal)</td></tr>
            <tr><td class="figure-org">Tratamiento potencialmente curativo</td><td>Solo si hay causa tratable específica (hierro, inflamación)</td><td>Pericardiectomía quirúrgica</td></tr>
          </tbody>
        </table>
      </div>`)} Miocardiopatía hipertrófica con fisiología restrictiva sobreañadida (grosor parietal aumentado, a diferencia de la restrictiva típica), sarcoidosis cardiaca con predominio de bloqueo AV/arritmia ventricular sobre la fisiología restrictiva pura.`,
      tx_medico: 'Restricción de sodio y diuréticos con titulación cuidadosa: el llenado ventricular depende de presiones de llenado relativamente altas, así que la diuresis excesiva puede reducir el gasto cardiaco de forma desproporcionada (a diferencia de la dilatada, donde la diuresis suele tolerarse mejor).',
      tx_farmacologico: 'Diurético de asa a dosis bajas-moderadas con ajuste fino; control de frecuencia con betabloqueador si hay fibrilación auricular (evitar antagonistas del calcio no dihidropiridínicos, que se unen al amiloide y pueden empeorar la hipotensión). Tratamiento específico por etiología: tafamidis (estabilizador de transtiretina) en la amiloidosis por transtiretina sintomática; quimioterapia dirigida (basada en bortezomib) y, si aplica, trasplante autólogo de células madre en la amiloidosis de cadenas ligeras; flebotomía terapéutica o quelación de hierro en la hemocromatosis; corticoide/inmunosupresor en la sarcoidosis cardiaca activa.',
      tx_intervencionista: 'Marcapasos definitivo si hay bloqueo auriculoventricular avanzado (frecuente en sarcoidosis y amiloidosis); CDI según estratificación individual de riesgo arrítmico, particularmente en sarcoidosis cardiaca con cicatriz documentada.',
      criterios_uci: 'Insuficiencia cardiaca derecha refractaria con hipoperfusión, bloqueo auriculoventricular de alto grado sintomático, fibrilación auricular con respuesta ventricular rápida mal tolerada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Considerar en la enfermedad infiltrativa avanzada refractaria sin contraindicación sistémica (p. ej. amiloidosis de cadenas ligeras con enfermedad extracardiaca controlada); el pronóstico postrasplante depende en gran medida de si la enfermedad de depósito subyacente puede controlarse.',
      seguimiento_hospitalario: 'Diuresis cuidadosa con vigilancia hemodinámica estrecha (evitar la hipoperfusión por exceso de diuresis), manejo precoz de la fibrilación auricular de nueva aparición (suele ser mal tolerada).',
      seguimiento_ambulatorio: 'Seguimiento del tratamiento específico por etiología (tafamidis, quimioterapia, flebotomía, inmunosupresión), reevaluación de la necesidad de dispositivo (marcapasos/CDI) en sarcoidosis y amiloidosis.',
      pronostico: 'El más desfavorable de los subtipos clásicos cuando se debe a enfermedad infiltrativa avanzada sin tratamiento dirigido disponible; el diagnóstico precoz de la amiloidosis por transtiretina ha mejorado sustancialmente el pronóstico con la disponibilidad de tafamidis.',
      algoritmo: ['Fisiología restrictiva en ecocardiograma (biauriculomegalia, patrón de llenado restrictivo) → descartar pericarditis constrictiva (tabla comparativa)', 'Sospecha de amiloide → cadenas ligeras libres/electroforesis PRIMERO', 'Sin gammapatía monoclonal → gammagrafía con pirofosfato', 'Captación intensa → amiloidosis por transtiretina; iniciar tafamidis', 'Gammapatía monoclonal presente → biopsia + hematología (posible AL)', 'Descartar hierro (ferritina/T2*) y sarcoidosis (PET/RM) si el estudio de amiloide es negativo']
    },
    {
      nombre: 'Miocardiopatía arritmogénica del ventrículo derecho',
      color: '#5c3d73',
      definicion: 'Sustitución progresiva del miocardio, clásicamente de la pared libre del ventrículo derecho, por tejido fibroadiposo, con adelgazamiento parietal, dilatación segmentaria o global y sustrato arritmogénico ventricular; formas biventriculares y de dominancia izquierda están hoy reconocidas dentro del espectro de la miocardiopatía arritmogénica.',
      fisiopatologia: 'Mutación de genes que codifican proteínas del desmosoma —uniones intercelulares que dan cohesión mecánica al miocito; PKP2 es la más frecuente— que debilita la adhesión célula-célula, especialmente bajo el estrés mecánico del ejercicio físico intenso y sostenido: los miocitos se desprenden y son reemplazados por tejido fibroadiposo, generando islotes de miocardio viable rodeados de tejido no excitable que actúan como sustrato de reentrada ventricular. El ejercicio de alta intensidad no solo desencadena arritmia en la enfermedad ya establecida, sino que acelera la progresión estructural misma.',
      epidemiologia: 'Prevalencia estimada de 1:2,000-5,000; causa reconocida de muerte súbita cardiaca en deportistas jóvenes, particularmente descrita en series de detección sistemática en Italia (Véneto).',
      factores_riesgo: ['Antecedente familiar de MAVD o muerte súbita en menores de 35 años', 'Mutación desmosomal patogénica confirmada', 'Ejercicio físico de resistencia/alta intensidad sostenido', 'Sexo masculino (penetrancia y gravedad mayores)'],
      clinica: 'Palpitaciones sostenidas por extrasístoles ventriculares o taquicardia ventricular con morfología de bloqueo de rama izquierda (origen en el ventrículo derecho), presíncope/síncope de esfuerzo, y en fases avanzadas síntomas de insuficiencia cardiaca derecha (o biventricular en las formas de dominancia izquierda). La muerte súbita durante o inmediatamente después del ejercicio puede ser la primera manifestación, incluso con estructura cardiaca aún poco alterada.',
      criterios_dx: 'Task Force Criteria 2010 (o criterios de Padua 2020 si se sospecha dominancia izquierda): combinación ponderada de criterios estructurales, histológicos, electrocardiográficos, arrítmicos y familiares/genéticos (ver Escalas); ningún hallazgo aislado es diagnóstico por sí solo.',
      laboratorio: 'Panel genético dirigido a genes desmosomales (PKP2, DSP, DSG2, DSC2, JUP); rendimiento diagnóstico ~50-60% en casos con fenotipo típico y antecedente familiar.',
      imagen: `Ecocardiograma (dilatación/disfunción del ventrículo derecho, aneurismas segmentarios típicamente en el "triángulo de la displasia": tracto de entrada, ápex y tracto de salida del VD); resonancia magnética cardiaca como estudio de elección para cuantificar volumen/función del VD y detectar infiltración grasa/realce tardío de gadolinio de la pared libre (y del ventrículo izquierdo en formas de dominancia izquierda).${figBlock('Imagen 5', 'Triángulo de la displasia', `
      <svg viewBox="0 0 460 380" role="img" aria-labelledby="tri-title tri-desc" style="width:100%;max-width:340px;display:block;margin:0 auto;">
        <title id="tri-title">Triángulo de la displasia en la miocardiopatía arritmogénica del ventrículo derecho</title>
        <desc id="tri-desc">Silueta del ventrículo derecho con las tres zonas típicas de aneurisma segmentario y sustitución fibroadiposa: tracto de entrada, ápex y tracto de salida, conectadas formando el llamado "triángulo de la displasia".</desc>
        <path d="M 210 55 C 130 55 80 120 80 210 C 80 290 140 335 205 335 C 265 320 295 265 288 190 C 283 120 260 60 210 55 Z" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
        <text x="185" y="35" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">VENTRÍCULO DERECHO</text>
        <path d="M 140 105 L 190 315 L 260 100 Z" fill="none" stroke="#8c3a34" stroke-width="1.5" stroke-dasharray="5 4"/>
        <circle cx="140" cy="105" r="8" fill="#8c3a34" opacity="0.85"/>
        <circle cx="190" cy="315" r="8" fill="#8c3a34" opacity="0.85"/>
        <circle cx="260" cy="100" r="8" fill="#8c3a34" opacity="0.85"/>
        <line x1="140" y1="105" x2="92" y2="80" stroke="var(--ink-dim)" stroke-width="1"/>
        <text x="90" y="72" text-anchor="end" fill="var(--ink)" font-size="11" font-weight="600">Tracto de entrada</text>
        <line x1="260" y1="100" x2="330" y2="70" stroke="var(--ink-dim)" stroke-width="1"/>
        <text x="335" y="62" text-anchor="start" fill="var(--ink)" font-size="11" font-weight="600">Tracto de salida</text>
        <line x1="190" y1="315" x2="190" y2="358" stroke="var(--ink-dim)" stroke-width="1"/>
        <text x="190" y="372" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="600">Ápex</text>
        <text x="210" y="200" text-anchor="middle" fill="var(--ink-dim)" font-size="10">Aneurismas</text>
        <text x="210" y="213" text-anchor="middle" fill="var(--ink-dim)" font-size="10">segmentarios</text>
      </svg>`)}`,
      complementarios: `Electrocardiograma de 12 derivaciones (onda épsilon, inversión de la onda T en V1-V3, bloqueo de rama derecha incompleto) y promediado de señal (potenciales tardíos); Holter para cuantificar la carga de ectopia ventricular; biopsia endomiocárdica dirigida solo en casos seleccionados (baja sensibilidad por afección parcheada, riesgo de perforación en pared adelgazada).${figBlock('Imagen 6', 'Onda épsilon en la miocardiopatía arritmogénica del ventrículo derecho', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ARVD-Epsilon_wave.png" alt="Trazado electrocardiográfico mostrando la onda épsilon, una pequeña deflexión al final del complejo QRS en las derivaciones precordiales derechas." style="width:100%;max-width:480px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);background:#fff;">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Onda épsilon (flecha): pequeña deflexión al final del QRS por conducción retardada del miocardio del VD reemplazado por tejido fibroadiposo; criterio mayor de despolarización del Task Force Criteria. Ksheka, Wikimedia Commons, CC BY-SA 3.0.</p>`)}`,
      dx_diferencial: 'Corazón de atleta con adaptación del ventrículo derecho (sin aneurismas segmentarios ni realce tardío de gadolinio), sarcoidosis cardiaca (puede imitar el fenotipo, distinguida por captación en PET y afección ganglionar sistémica), miocarditis, taquicardia ventricular idiopática del tracto de salida del VD (estructuralmente normal, pronóstico benigno).',
      tx_medico: 'Restricción estricta del ejercicio físico de competición y de resistencia de alta intensidad, incluso en portadores asintomáticos de una mutación patogénica: es la intervención con mayor evidencia para enlentecer la progresión y reducir el riesgo arrítmico.',
      tx_farmacologico: 'Betabloqueador en todo paciente con diagnóstico confirmado, sintomático o no; antiarrítmico (sotalol o amiodarona) si hay arritmia ventricular sintomática recurrente pese al betabloqueador, como complemento —no sustituto— del CDI en el paciente de alto riesgo.',
      tx_intervencionista: 'CDI en prevención secundaria (tras arritmia ventricular sostenida o muerte súbita recuperada) y en prevención primaria según estratificación individual de riesgo; ablación por catéter de taquicardia ventricular recurrente pese a tratamiento antiarrítmico, con abordaje epicárdico frecuentemente necesario por el origen subepicárdico del sustrato.',
      criterios_uci: 'Tormenta arrítmica, taquicardia ventricular sostenida con inestabilidad hemodinámica, muerte súbita recuperada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Considerar en la insuficiencia cardiaca biventricular refractaria de la enfermedad avanzada o en la tormenta arrítmica no controlable con CDI/ablación.',
      seguimiento_hospitalario: 'Telemetría continua tras cualquier evento arrítmico, programación/interrogación del CDI si ya está implantado, restricción estricta de actividad física durante la hospitalización.',
      seguimiento_ambulatorio: 'Reevaluación clínica, electrocardiográfica y por imagen periódica; tamizaje familiar en cascada desde la adolescencia; reforzar la restricción de ejercicio de alta intensidad no supervisado en cada consulta, la recomendación con la que más frecuentemente hay mala adherencia.',
      pronostico: 'Variable según la extensión estructural y la carga arrítmica al diagnóstico; la restricción del ejercicio y el CDI dirigido por riesgo han mejorado sustancialmente la supervivencia libre de muerte súbita frente a la historia natural no tratada.',
      algoritmo: ['Palpitaciones/síncope de esfuerzo o taquicardia ventricular con morfología de bloqueo de rama izquierda → ECG + ecocardiograma', 'Sospecha estructural → RM cardiaca dirigida al VD (y VI si hay sospecha de dominancia izquierda)', 'Aplicar Task Force Criteria/Padua (ver Escalas)', 'Confirmado → restricción de ejercicio de alta intensidad + betabloqueador en todos', 'Estratificar riesgo arrítmico individual → CDI si alto riesgo o evento ya documentado', 'Panel genético + tamizaje familiar en cascada']
    },
    {
      nombre: 'Miocardiopatía periparto',
      color: '#a8536e',
      definicion: 'Insuficiencia cardiaca de novo, con disfunción sistólica del ventrículo izquierdo (FEVI habitualmente &lt;45%), que se presenta hacia el final del embarazo o en los primeros meses posteriores al parto, en una mujer sin cardiopatía previa conocida ni otra causa identificable de disfunción ventricular.',
      fisiopatologia: 'Mecanismo vascular propuesto (no puramente contráctil): un desequilibrio angiogénico en el tercer trimestre, con exceso del receptor soluble de VEGF (sFlt-1) y de un fragmento de prolactina de 16 kDa antiangiogénico y proapoptótico, produce disfunción microvascular y del propio cardiomiocito. Explica por qué la bromocriptina (inhibidor de la secreción de prolactina) es una terapia dirigida específica de este subtipo, sin equivalente en las demás miocardiopatías de esta sección.',
      epidemiologia: 'Incidencia de 1:1,000-4,000 embarazos, con variación geográfica marcada; desproporcionadamente más frecuente y de peor pronóstico en mujeres de ascendencia africana.',
      factores_riesgo: ['Preeclampsia/hipertensión gestacional', 'Embarazo múltiple', 'Edad materna avanzada o adolescente', 'Multiparidad', 'Ascendencia africana', 'Uso prolongado de tocolíticos beta-agonistas'],
      clinica: 'Disnea, ortopnea, disnea paroxística nocturna, edema y fatiga que pueden confundirse inicialmente con los síntomas normales del embarazo avanzado (ver la distinción clave en Diagnóstico). Puede presentarse también como arritmia, embolismo sistémico o, en los casos más graves, choque cardiogénico periparto.',
      criterios_dx: 'Ecocardiográfico: FEVI &lt;45% (con o sin dilatación) de novo hacia el final del embarazo o dentro de los primeros meses del puerperio, sin otra causa identificable de disfunción ventricular ni cardiopatía preexistente conocida.',
      laboratorio: 'BNP/NT-proBNP (la elevación marcada apoya el diagnóstico y ayuda a diferenciarla de la disnea fisiológica del embarazo); descartar preeclampsia grave/síndrome HELLP y embolia pulmonar como diagnósticos concurrentes o alternativos.',
      imagen: 'Ecocardiograma transtorácico como estudio de elección (evita la radiación y el gadolinio de la RM, que se difiere hasta después del parto salvo necesidad diagnóstica imperiosa); descartar trombo intracavitario, frecuente por el estado protrombótico fisiológico del puerperio sumado a la disfunción sistólica aguda.',
      complementarios: 'Electrocardiograma (frecuentemente con cambios inespecíficos de repolarización); vigilancia fetal/obstétrica conjunta con el equipo de alto riesgo si el diagnóstico ocurre antes del parto.',
      dx_diferencial: 'Miocardiopatía dilatada preexistente no diagnosticada (síntomas previos al embarazo), preeclampsia/síndrome HELLP con compromiso cardiaco secundario, embolia pulmonar, tromboembolismo de líquido amniótico, miocardiopatía por estrés (Takotsubo) periparto, miocarditis fulminante.',
      tx_medico: 'Manejo multidisciplinario obstétrico-cardiológico; considerar el momento del parto de forma individualizada según la estabilidad hemodinámica materna y la edad gestacional.',
      tx_farmacologico: 'Bromocriptina (0.5-2.5 mg cada 12h, esquema corto de 1 semana en casos leves o prolongado de hasta 8 semanas en casos graves) sumada al tratamiento estándar de insuficiencia cardiaca, con anticoagulación profiláctica concomitante durante su uso por el riesgo protrombótico añadido de la propia bromocriptina. Ajustes al tratamiento estándar de IC-FEr según el estado gestacional: IECA/ARA-II y sacubitrilo/valsartán CONTRAINDICADOS durante el embarazo (teratogénicos), sustituidos por hidralazina + nitrato; betabloqueador cardioselectivo (metoprolol) seguro en ambas etapas; inhibidor de SGLT2 sin datos suficientes de seguridad en el embarazo, se reserva para después del parto; antagonista de mineralocorticoides evitado en el embarazo. Anticoagulación profiláctica en toda paciente con FEVI muy reducida por el estado protrombótico del puerperio.',
      tx_intervencionista: 'Soporte circulatorio mecánico (balón de contrapulsación intraaórtico, oxigenación por membrana extracorpórea, dispositivo de asistencia ventricular) como puente a la recuperación o al trasplante en el choque cardiogénico periparto refractario; CDI/chaleco desfibrilador externo diferido, dado el potencial real de recuperación de la FEVI que distingue a este subtipo de la mayoría de las demás miocardiopatías.',
      criterios_uci: 'Choque cardiogénico, edema agudo de pulmón, arritmia ventricular sostenida, necesidad de soporte circulatorio mecánico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Considerar en el choque cardiogénico refractario a soporte médico y mecánico máximo, o en la disfunción persistente grave sin recuperación tras 6-12 meses de tratamiento óptimo.',
      seguimiento_hospitalario: 'Vigilancia hemodinámica materno-fetal conjunta, balance hídrico estricto, coordinación del momento y vía del parto con el equipo obstétrico si el diagnóstico es anteparto.',
      seguimiento_ambulatorio: 'Ecocardiograma seriado: hasta ~50% recupera la FEVI total o parcialmente dentro de los primeros 6-12 meses, por lo que la reevaluación de dispositivos se difiere hasta confirmar si la disfunción persiste; asesoría reproductiva explícita sobre el riesgo de recurrencia (mayor si la FEVI no se normalizó) antes de un embarazo posterior.',
      pronostico: 'El más favorable de los 5 subtipos en términos de potencial de recuperación: hasta la mitad de las pacientes recupera función sistólica normal o casi normal; el riesgo de recurrencia en un embarazo posterior es significativo, mayor cuanto menor sea la FEVI de recuperación.',
      algoritmo: ['IC de novo en el último mes de embarazo o dentro de los primeros meses del puerperio → ecocardiograma urgente', 'FEVI &lt;45% sin otra causa → confirma el diagnóstico', 'Descartar preeclampsia grave/HELLP y tromboembolismo pulmonar concurrentes', 'Bromocriptina + tratamiento de IC ajustado al embarazo (evitar IECA/ARA-II/ARNI antes del parto) + anticoagulación profiláctica', 'Choque cardiogénico refractario → soporte circulatorio mecánico', 'Reevaluar FEVI a 6-12 meses antes de decidir sobre un embarazo posterior']
    },
    {
      nombre: 'Insuficiencia cardiaca avanzada refractaria',
      color: '#3f6b52',
      definicion: 'Complicación transversal que puede desarrollarse sobre cualquiera de las 5 miocardiopatías de esta sección (ver la tarjeta correspondiente): progresión a insuficiencia cardiaca en clase funcional NYHA III-IV persistente pese a tratamiento médico y de dispositivo óptimo, con episodios recurrentes de descompensación.',
      fisiopatologia: 'No repite el mecanismo de base de cada subtipo (ya descrito en su tarjeta); representa el punto en que los mecanismos compensadores neurohormonales y el remodelado ya no logran mantener un gasto cardiaco adecuado a las demandas metabólicas, con congestión persistente e hipoperfusión periférica intermitente.',
      epidemiologia: 'La vía final común más frecuente de las 5 miocardiopatías, aunque con una proporción muy distinta según el subtipo: es el desenlace predominante en la dilatada y en la restrictiva infiltrativa avanzada, y relativamente infrecuente en la hipertrófica y la arritmogénica cuando se tratan de forma dirigida a tiempo.',
      factores_riesgo: ['FEVI muy reducida al diagnóstico', 'Etiología infiltrativa avanzada (amiloidosis)', 'Mutación de alto riesgo (LMNA)', 'Mala adherencia al tratamiento farmacológico/restricción de sodio', 'Fibrilación auricular no controlada'],
      clinica: 'Congestión persistente (edema, ascitis, derrame pleural) pese a tratamiento diurético optimizado, intolerancia progresiva a los pilares farmacológicos por hipotensión o deterioro de la función renal, caquexia cardiaca en fases muy avanzadas.',
      criterios_dx: 'Clínico: síntomas NYHA III-IV persistentes con al menos una hospitalización por descompensación en los últimos 12 meses pese a tratamiento médico y de dispositivo guiado por guías, en ausencia de causa reversible no tratada.',
      laboratorio: 'BNP/NT-proBNP persistentemente elevado o en ascenso; deterioro progresivo de la función renal (síndrome cardiorrenal) y sodio sérico bajo como marcadores de mal pronóstico.',
      imagen: 'Ecocardiograma seriado para reevaluar FEVI, presiones de llenado y función del ventrículo derecho (su disfunción marca un punto de inflexión pronóstico); cateterismo cardiaco derecho para cuantificar gasto cardiaco y resistencias vasculares pulmonares antes de considerar trasplante/asistencia ventricular.',
      complementarios: 'Prueba de esfuerzo cardiopulmonar (consumo pico de oxígeno) para objetivar la capacidad funcional y apoyar la decisión de avanzar a terapias avanzadas.',
      dx_diferencial: 'Descompensación por causa reversible no corregida (mala adherencia, isquemia nueva, arritmia no controlada, anemia, infección intercurrente) antes de etiquetar la insuficiencia cardiaca como verdaderamente refractaria.',
      tx_medico: 'Reevaluación exhaustiva de adherencia y de causas reversibles antes de escalar; restricción de sodio estricta; programa multidisciplinario de manejo de insuficiencia cardiaca avanzada.',
      tx_farmacologico: 'Optimización máxima tolerada de los 4 pilares (ajustada según el subtipo, ver cada tarjeta); inotrópico intravenoso (dobutamina o milrinona) como puente a decisión o paliativo en fase terminal no candidata a terapia avanzada.',
      tx_intervencionista: 'Dispositivo de asistencia ventricular izquierda como puente a trasplante o como terapia de destino; trasplante cardiaco si no hay contraindicación (ver criterios_trasplante en cada tarjeta de subtipo, con matices propios según la etiología infiltrativa o sistémica).',
      criterios_uci: 'Choque cardiogénico, necesidad de soporte inotrópico o mecánico, arritmia ventricular sostenida sobreañadida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Ver la tarjeta del subtipo correspondiente para las consideraciones específicas de candidatura; en general, NYHA III-IV refractaria con consumo pico de oxígeno reducido y sin contraindicación sistémica.',
      seguimiento_hospitalario: 'Evaluación temprana por el equipo de insuficiencia cardiaca avanzada ante descompensaciones recurrentes, discusión anticipada de objetivos de cuidado y preferencias del paciente.',
      seguimiento_ambulatorio: 'Seguimiento estrecho en clínica de insuficiencia cardiaca avanzada, reevaluación periódica de candidatura a dispositivo/trasplante, cuidados paliativos concurrentes si no es candidato.',
      pronostico: 'Reservado sin terapia avanzada; el trasplante y la asistencia ventricular han mejorado sustancialmente la supervivencia en los candidatos apropiados.',
      algoritmo: ['IC NYHA III-IV persistente pese a tratamiento óptimo → descartar causas reversibles (adherencia, isquemia, arritmia, anemia, infección)', 'Confirmado refractario → referir a clínica de IC avanzada', 'Cateterismo derecho + prueba de esfuerzo cardiopulmonar', 'Evaluar candidatura a trasplante/asistencia ventricular', 'No candidato → inotrópico paliativo + cuidados paliativos concurrentes']
    },
    {
      nombre: 'Arritmias ventriculares malignas y muerte súbita cardiaca',
      color: '#966b35',
      definicion: 'Complicación potencialmente mortal que puede ser la primera manifestación de cualquiera de las 5 miocardiopatías de esta sección (ver cada tarjeta), particularmente de la hipertrófica y la arritmogénica del ventrículo derecho: taquicardia ventricular sostenida o fibrilación ventricular sobre el sustrato arritmogénico estructural propio de cada subtipo.',
      fisiopatologia: 'No repite el mecanismo estructural de base (desorganización miofibrilar en la hipertrófica, fibrosis en la dilatada/LMNA, reemplazo fibroadiposo en la arritmogénica, infiltración en la restrictiva), ya descrito en cada tarjeta; el denominador común es un sustrato de reentrada eléctrica que puede desestabilizarse de forma aguda con el ejercicio físico, el desequilibrio electrolítico o la isquemia relativa.',
      epidemiologia: 'Causa de muerte súbita cardiaca reconocida en las 5 formas; es la causa aislada más frecuente de muerte súbita en atletas jóvenes cuando se debe a hipertrófica o arritmogénica no diagnosticadas.',
      factores_riesgo: ['Antecedente familiar de muerte súbita', 'Síncope inexplicado', 'Taquicardia ventricular no sostenida documentada', 'Mutación de alto riesgo (LMNA en la dilatada)', 'Ejercicio físico de alta intensidad no evaluado', 'FEVI muy reducida'],
      clinica: 'Palpitaciones sostenidas, presíncope, síncope de esfuerzo (siempre signo de alarma en este contexto) o paro cardiaco recuperado; puede ser completamente asintomática hasta el evento índice.',
      criterios_dx: 'Documentación electrocardiográfica de taquicardia ventricular sostenida (≥30 segundos o con compromiso hemodinámico) o fibrilación ventricular, o estratificación de alto riesgo mediante las escalas específicas de cada subtipo (HCM Risk-SCD, factores mayores AHA/ACC, extensión estructural en MAVD).',
      laboratorio: 'Electrolitos (potasio, magnesio) como precipitantes corregibles; troponina si se sospecha isquemia concurrente como desencadenante.',
      imagen: 'Resonancia magnética cardiaca con realce tardío de gadolinio: la extensión de la fibrosis/cicatriz es un predictor independiente de arritmia ventricular en varios de estos subtipos, más allá de la FEVI aislada.',
      complementarios: 'Holter o monitor implantable de asa en el síncope inexplicado recurrente sin diagnóstico; estudio electrofisiológico en casos seleccionados.',
      dx_diferencial: 'Síncope vasovagal/reflejo (benigno, distinto del síncope de esfuerzo de estas enfermedades), taquicardia ventricular idiopática del tracto de salida en un corazón estructuralmente normal (pronóstico benigno, a diferencia de la arritmia sobre miocardiopatía estructural).',
      tx_medico: 'Restricción de la actividad física de alta intensidad no supervisada tras el diagnóstico del sustrato de base, corrección de electrolitos.',
      tx_farmacologico: 'Betabloqueador como base en la mayoría de los subtipos; amiodarona o sotalol como complemento —no sustituto— del CDI en la arritmia recurrente pese a betabloqueador.',
      tx_intervencionista: 'CDI: en prevención secundaria (indicación firme tras taquicardia ventricular sostenida/fibrilación ventricular recuperada, salvo causa reversible clara) y en prevención primaria según la estratificación de riesgo específica de cada subtipo (ver cada tarjeta y Escalas); ablación por catéter de taquicardia ventricular recurrente pese a tratamiento antiarrítmico y CDI.',
      criterios_uci: 'Tormenta arrítmica (≥3 episodios de arritmia ventricular sostenida en 24 horas), paro cardiaco recuperado, taquicardia ventricular con inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa; considerar en la tormenta arrítmica refractaria a CDI/ablación como puente, o si coexiste insuficiencia cardiaca terminal (ver esa tarjeta).',
      seguimiento_hospitalario: 'Telemetría continua, interrogación y programación del CDI si ya está implantado, corrección de precipitantes.',
      seguimiento_ambulatorio: 'Interrogación periódica del CDI, reforzar restricción de ejercicio de alta intensidad no supervisado, reevaluación periódica de riesgo con las escalas específicas de cada subtipo.',
      pronostico: 'El CDI dirigido por una estratificación de riesgo adecuada reduce de forma marcada la mortalidad por muerte súbita en las 5 miocardiopatías; el reto principal sigue siendo identificar correctamente al paciente de alto riesgo ANTES del evento índice.',
      algoritmo: ['Síncope inexplicado, palpitaciones sostenidas o antecedente familiar de muerte súbita sobre miocardiopatía conocida → Holter/monitor implantable', 'Aplicar la escala de riesgo específica del subtipo (ver Escalas)', 'Riesgo alto o evento documentado → CDI', 'Arritmia recurrente pese a CDI → antiarrítmico + ablación por catéter', 'Tormenta arrítmica → manejo neurocrítico/UCI + reprogramación del CDI']
    },
    {
      nombre: 'Fibrilación auricular y tromboembolismo',
      color: '#5c6b8c',
      definicion: 'Complicación frecuente sobre cualquiera de las 5 miocardiopatías de esta sección (ver cada tarjeta), particularmente mal tolerada en la hipertrófica y la restrictiva —donde el llenado ventricular depende de forma crítica de la contribución auricular— y asociada a mayor riesgo trombótico intracavitario en la dilatada con disfunción sistólica grave y en la periparto por el estado protrombótico del puerperio.',
      fisiopatologia: 'La dilatación auricular (secundaria a la presión de llenado elevada crónica, común a los 5 subtipos por mecanismos distintos ya descritos en cada tarjeta) crea el sustrato para la fibrilación auricular; el estasis sanguíneo resultante —auricular (orejuela izquierda) o intraventricular (apical en la dilatada con FEVI muy reducida)— favorece la formación de trombo y el embolismo sistémico.',
      epidemiologia: 'La fibrilación auricular puede alcanzar hasta 20-25% de prevalencia acumulada en la miocardiopatía hipertrófica y es igualmente frecuente en la restrictiva por amiloidosis; el trombo intracavitario apical es una complicación reconocida de la dilatada con FEVI muy reducida.',
      factores_riesgo: ['Dilatación auricular izquierda marcada', 'FEVI muy reducida (trombo intracavitario)', 'Amiloidosis cardiaca (riesgo trombótico elevado incluso en ritmo sinusal, por disfunción auricular mecánica independiente del ritmo)', 'Puerperio reciente (periparto)', 'Edad avanzada'],
      clinica: 'Palpitaciones y deterioro hemodinámico agudo con el inicio de la fibrilación auricular (mucho más sintomático que en el corazón estructuralmente normal); el tromboembolismo se manifiesta según el territorio afectado (déficit neurológico focal si es cerebral, isquemia de una extremidad, dolor abdominal si es mesentérico o renal).',
      criterios_dx: 'Electrocardiográfico para la fibrilación auricular; ecocardiograma transesofágico o resonancia magnética cardiaca para documentar el trombo intracavitario/auricular.',
      laboratorio: 'Sin hallazgo específico salvo los propios de un evento embólico agudo.',
      imagen: 'Ecocardiograma transesofágico antes de la cardioversión electiva si la fibrilación auricular lleva más de 48 horas o el tiempo es incierto y no hay anticoagulación terapéutica previa adecuada; resonancia magnética cardiaca o TC según el territorio embólico sospechado.',
      complementarios: 'CHA₂DS₂-VASc tiene utilidad limitada en este contexto: la sola presencia de miocardiopatía hipertrófica o amiloidosis cardiaca ya constituye indicación de anticoagulación con cualquier episodio de fibrilación auricular documentado, independientemente del puntaje.',
      dx_diferencial: 'Otras causas de deterioro hemodinámico agudo en un paciente con miocardiopatía conocida (isquemia, arritmia ventricular, descompensación de insuficiencia cardiaca) deben distinguirse de la fibrilación auricular de novo mediante electrocardiograma inmediato.',
      tx_medico: 'Control de frecuencia como estrategia inicial habitual (betabloqueador); estrategia de control de ritmo preferida de forma más temprana que en la población general en la hipertrófica y la restrictiva, dada la mala tolerancia hemodinámica de la pérdida de la contracción auricular.',
      tx_farmacologico: 'Anticoagulación oral (preferentemente con un anticoagulante oral directo salvo contraindicación) ante cualquier episodio de fibrilación auricular documentado en miocardiopatía hipertrófica o amiloidosis cardiaca, sin necesidad de calcular CHA₂DS₂-VASc; en la dilatada y la periparto, seguir la indicación estándar por CHA₂DS₂-VASc salvo trombo intracavitario ya documentado (anticoagulación terapéutica obligada independientemente del puntaje).',
      tx_intervencionista: 'Cardioversión eléctrica o farmacológica si hay indicación de control de ritmo; ablación de venas pulmonares en la fibrilación auricular sintomática recurrente pese a tratamiento antiarrítmico; cierre percutáneo de la orejuela izquierda como alternativa en casos seleccionados con contraindicación real a la anticoagulación prolongada.',
      criterios_uci: 'Evento embólico mayor con compromiso hemodinámico o neurológico agudo, fibrilación auricular con respuesta ventricular rápida mal tolerada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Inicio precoz de anticoagulación una vez descartada contraindicación, monitorización del ritmo, evaluación de la estrategia de control de ritmo vs. frecuencia según tolerancia hemodinámica.',
      seguimiento_ambulatorio: 'Adherencia a la anticoagulación a largo plazo (con frecuencia indefinida, independientemente de si se restaura el ritmo sinusal, dado que el riesgo trombótico de base de la miocardiopatía persiste), vigilancia de recurrencia.',
      pronostico: 'La anticoagulación oportuna reduce de forma marcada el riesgo embólico; la fibrilación auricular no controlada acelera la progresión a insuficiencia cardiaca en los subtipos con dependencia crítica de la contribución auricular.',
      algoritmo: ['Fibrilación auricular de novo sobre miocardiopatía conocida → electrocardiograma + evaluación hemodinámica inmediata', 'Hipertrófica o amiloidosis → anticoagulación inmediata, sin calcular CHA₂DS₂-VASc', 'Otros subtipos → CHA₂DS₂-VASc + descartar trombo intracavitario ya presente', 'Mala tolerancia hemodinámica → preferir control de ritmo sobre frecuencia', 'Recurrente pese a antiarrítmico → ablación de venas pulmonares']
    },
    {
      nombre: 'Insuficiencia mitral funcional',
      color: '#2e5f6b',
      definicion: 'Complicación mecánica secundaria que puede desarrollarse sobre la miocardiopatía dilatada (por remodelado excéntrico y desplazamiento apical de los músculos papilares) o sobre la hipertrófica obstructiva (por el movimiento sistólico anterior de la valva mitral anterior hacia el septo, ver esa tarjeta): insuficiencia mitral sin enfermedad estructural primaria de la propia válvula.',
      fisiopatologia: 'En la dilatada, la dilatación del anillo mitral y el desplazamiento apical/lateral de los músculos papilares (tethering) impiden la coaptación completa de las valvas durante la sístole. En la hipertrófica obstructiva, la insuficiencia mitral es consecuencia directa y no un evento independiente: el chorro es característicamente póstero-lateral y su gravedad varía con el grado de obstrucción del tracto de salida, a diferencia del chorro central típico de la insuficiencia funcional de la dilatada.',
      epidemiologia: 'Presente en grado variable en la mayoría de los casos de miocardiopatía dilatada moderada-grave; su aparición marca, en general, progresión de la enfermedad de base y peor pronóstico funcional.',
      factores_riesgo: ['Dilatación ventricular izquierda progresiva', 'FEVI muy reducida', 'Dilatación del anillo mitral', 'Obstrucción significativa del tracto de salida en la hipertrófica'],
      clinica: 'Empeoramiento de la disnea y aparición o acentuación de un soplo holosistólico de regurgitación mitral; puede precipitar o acelerar la descompensación de insuficiencia cardiaca.',
      criterios_dx: 'Ecocardiográfico: cuantificación de la gravedad de la insuficiencia (área del orificio regurgitante efectivo, volumen regurgitante) y del mecanismo (tethering en la dilatada, relacionada al SAM en la hipertrófica).',
      laboratorio: 'Sin hallazgo específico distinto del propio de la insuficiencia cardiaca de base.',
      imagen: 'Ecocardiograma transtorácico/transesofágico para planeación de intervención si se considera reparación; resonancia magnética cardiaca para cuantificación adicional del volumen regurgitante cuando el ecocardiograma es discordante con la clínica.',
      complementarios: 'Reevaluación ecocardiográfica tras optimizar el tratamiento médico de la insuficiencia cardiaca de base (o tras el tratamiento dirigido de la obstrucción en la hipertrófica): la insuficiencia mitral funcional puede mejorar de forma significativa solo con el tratamiento de la causa, sin intervención directa sobre la válvula.',
      dx_diferencial: 'Insuficiencia mitral orgánica primaria (prolapso, enfermedad reumática) coexistente pero independiente de la miocardiopatía; endocarditis infecciosa si hay fiebre o soplo de nueva aparición con otros signos sistémicos.',
      tx_medico: 'Optimización del tratamiento médico de la miocardiopatía de base (los 4 pilares en la dilatada; tratamiento de la obstrucción en la hipertrófica) como primer paso siempre, antes de considerar cualquier intervención sobre la válvula.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico de la insuficiencia mitral en sí, más allá del tratamiento de la miocardiopatía de base ya descrito en cada tarjeta.',
      tx_intervencionista: 'En la dilatada: reparación mitral transcatéter borde a borde en la insuficiencia mitral funcional significativa persistente pese a tratamiento médico óptimo, en pacientes seleccionados con anatomía favorable y FEVI dentro de rangos específicos. En la hipertrófica: la miectomía septal/ablación con alcohol dirigida a la obstrucción resuelve la insuficiencia mitral relacionada al SAM en la mayoría de los casos, sin necesidad de cirugía valvular directa.',
      criterios_uci: 'Insuficiencia mitral aguda grave con edema agudo de pulmón o choque cardiogénico (infrecuente en la forma funcional crónica, más típica de la insuficiencia mitral orgánica aguda).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa; ver la tarjeta de insuficiencia cardiaca avanzada refractaria si la disfunción de base progresa pese al tratamiento de la insuficiencia mitral.',
      seguimiento_hospitalario: 'Reevaluación ecocardiográfica de la gravedad tras optimizar el tratamiento médico, antes de decidir sobre intervención valvular.',
      seguimiento_ambulatorio: 'Ecocardiograma seriado para vigilar progresión; reevaluación de candidatura a reparación transcatéter si persiste significativa pese a tratamiento médico óptimo.',
      pronostico: 'La insuficiencia mitral funcional significativa no tratada se asocia a peor pronóstico en la miocardiopatía dilatada; la reparación transcatéter en candidatos seleccionados ha demostrado reducir hospitalizaciones y mortalidad.',
      algoritmo: ['Soplo nuevo/progresivo o empeoramiento de disnea sobre miocardiopatía conocida → ecocardiograma', 'Cuantificar gravedad y mecanismo (tethering vs. relacionada al SAM)', 'Optimizar tratamiento médico de la enfermedad de base primero', 'Persistente y significativa → evaluar candidatura a reparación transcatéter (dilatada) o resolver la obstrucción (hipertrófica)', 'Reevaluación ecocardiográfica seriada']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia hemodinámica, del ritmo y de la respuesta al tratamiento médico inicial es común a las 5 miocardiopatías, con matices específicos de cada subtipo detallados en su propia tarjeta (evitar diuresis excesiva en la restrictiva, restricción de ejercicio en la hipertrófica/arritmogénica, ajuste de fármacos al embarazo en la periparto).',
    parametros: [
      'Frecuencia y ritmo cardiaco: telemetría continua ante cualquier arritmia documentada o alto riesgo arrítmico (hipertrófica, arritmogénica, dilatada por LMNA).',
      'Balance hídrico y función renal: ajuste fino de la diuresis, con especial precaución en la restrictiva por la dependencia de presiones de llenado elevadas.',
      'Presión arterial y perfusión periférica: vigilar hipotensión sintomática con la titulación de los pilares farmacológicos de insuficiencia cardiaca.',
      'Saturación de oxígeno y patrón respiratorio: signos de congestión pulmonar o de descompensación aguda.',
      'En la periparto: vigilancia obstétrica conjunta y del estado protrombótico del puerperio.'
    ],
    criterios_uci_general: 'Choque cardiogénico de cualquier etiología, arritmia ventricular sostenida, necesidad de soporte inotrópico/mecánico, tormenta arrítmica, edema agudo de pulmón refractario.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'Insuficiencia cardiaca en clase funcional NYHA III-IV refractaria a tratamiento médico y de dispositivo óptimo, sin contraindicación sistémica; los matices específicos de candidatura por etiología (infiltrativa en la restrictiva, potencial de recuperación en la periparto) se detallan en cada tarjeta.',
    prevencion: 'Tamizaje genético en cascada de familiares de primer grado en las formas genéticas (hipertrófica, dilatada, arritmogénica), restricción de ejercicio de alta intensidad no supervisado hasta completar la estratificación de riesgo, control estricto de factores modificables (alcohol, cardiotóxicos, hierro), asesoría reproductiva explícita antes de un embarazo posterior en la periparto, y adherencia a la anticoagulación/dispositivo indicado en cada subtipo.'
  }
};

export const compCites = {
  'Miocardiopatía hipertrófica': { definicion: [3], criterios_dx: [1, 3], tx_farmacologico: [2, 3], tx_intervencionista: [2] },
  'Miocardiopatía dilatada': { definicion: [5], tx_farmacologico: [6, 7], tx_intervencionista: [6, 7] },
  'Miocardiopatía restrictiva': { imagen: [11], tx_farmacologico: [11] },
  'Miocardiopatía arritmogénica del ventrículo derecho': { criterios_dx: [8, 9], tx_intervencionista: [10] },
  'Miocardiopatía periparto': { definicion: [12], tx_farmacologico: [12, 13] },
  'Insuficiencia cardiaca avanzada refractaria': { tx_farmacologico: [6, 7] },
  'Arritmias ventriculares malignas y muerte súbita cardiaca': { tx_intervencionista: [14, 15] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'NYHA': [6], 'HCM Risk-SCD': [4], 'Factores mayores de riesgo AHA/ACC 2024 (HCM)': [2],
  'Criterios diagnósticos de MAVD (Task Force 2010 / Padua 2020)': [8, 9]
};
export const escalaCalc = { 'HCM Risk-SCD': 'hcmriskscd' };
export const compGroups = [
  { title: 'Miocardiopatías con fenotipo no dilatado (enfermedades)', items: ['Miocardiopatía hipertrófica', 'Miocardiopatía restrictiva', 'Miocardiopatía arritmogénica del ventrículo derecho'] },
  { title: 'Miocardiopatías con disfunción sistólica / insuficiencia cardiaca (enfermedades)', items: ['Miocardiopatía dilatada', 'Miocardiopatía periparto'] },
  { title: 'Complicaciones transversales (cualquier miocardiopatía)', items: ['Insuficiencia cardiaca avanzada refractaria', 'Arritmias ventriculares malignas y muerte súbita cardiaca', 'Fibrilación auricular y tromboembolismo', 'Insuficiencia mitral funcional'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. Los grupos "(enfermedades)" son los 5 subtipos de miocardiopatía; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellos, no diagnósticos independientes.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'MIOCARDIOPATÍAS', color: '#7a1f3d', target: 'definicion' },
  branches: [
    { title: 'Fenotipo no dilatado', sub: 'Función sistólica preservada', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Hipertrófica', sub: 'Obstrucción TSVI, muerte súbita', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Restrictiva', sub: 'Amiloidosis, infiltrativa', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Arritmogénica del VD', sub: 'Sustrato eléctrico, atletas', color: '#5c3d73', target: 'complicaciones' }
    ] },
    { title: 'Fenotipo dilatado / IC', sub: 'Disfunción sistólica', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Dilatada', sub: 'IC-FEr, causa más frecuente de trasplante', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Periparto', sub: 'Embarazo/puerperio, bromocriptina', color: '#a8536e', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], imagen: [1, 11], no_invasivos: [1] };
export const clasificacionCite = [1];
export const seguimientoCite = [1, 6];
