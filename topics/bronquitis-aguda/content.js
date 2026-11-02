// topics/bronquitis-aguda/content.js: Bronquitis aguda y tos.
// Cubre el item "Bronquitis aguda" del cluster Infecciones respiratorias (bloque III,
// Neumologia) del temario, ampliado al enfoque completo de la tos por duracion, que es el marco
// en el que la bronquitis aguda cobra sentido: aguda, subaguda y cronica.
//
// Fuentes principales: guias del American College of Chest Physicians sobre tos aguda, subaguda y
// cronica; guia ERS de 2020 sobre tos cronica; recomendaciones de uso prudente de antibioticos
// del ACP y de los CDC en la infeccion respiratoria aguda; revisiones Cochrane sobre antibioticos
// en la bronquitis aguda; y recomendaciones de los CDC sobre tos ferina y su profilaxis.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'bronquitis-aguda',
  titulo: 'Bronquitis Aguda y Tos',
  subtitulo: 'Módulo 60 · Medicina Interna',
  accent: '#7a5a3a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const duracionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a5a3a;border-radius:8px;padding:5px 9px;background:#7a5a3a12;margin-bottom:6px;">
    <strong style="color:#7a5a3a;">Lo primero que hay que preguntar ante una tos no es que la produce, sino CUANTO LLEVA.</strong> <span style="color:var(--ink-dim);">La duración divide el problema en tres escenarios con causas, estudio y tratamiento completamente distintos, y saltarse esa pregunta es lo que lleva a pedir pruebas equivocadas y a dar antibióticos que no hacen falta.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">AGUDA<br><span style="font-weight:400;font-size:8.5px;">menos de 3 semanas</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La inmensa mayoría son infecciones VIRICAS de la via aérea. El trabajo aquí no es diagnosticar el virus sino <strong style="color:var(--ink);">descartar lo que no puede fallarse</strong>: neumonía, embolia pulmonar, insuficiencia cardiaca, asma, cuerpo extraño y exacerbación de EPOC.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">SUBAGUDA<br><span style="font-weight:400;font-size:8.5px;">de 3 a 8 semanas</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La mayoría son <strong style="color:var(--ink);">POSTINFECCIOSAS</strong> y se resuelven solas. Lo que hay que hacer aquí es acordarse de la <strong>TOS FERINA</strong>, que en el adulto no da el cuadro clásico, y descartar asma, rinosinusitis y un debut de las causas de tos crónica.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">CRÓNICA<br><span style="font-weight:400;font-size:8.5px;">más de 8 semanas</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Aquí si hay un algoritmo: quitar el <strong style="color:var(--ink);">TABACO</strong>, quitar el <strong style="color:var(--ink);">INHIBIDOR DE LA ENZIMA CONVERTIDORA</strong>, hacer <strong>radiografía de tórax</strong>, y después buscar las tres causas principales, que con frecuencia coexisten.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Y por encima de la duración, los signos de ALARMA</strong>, que obligan a estudiar sea cual sea el tiempo de evolución: <strong>hemoptisis</strong>, pérdida de peso, fiebre persistente, disnea progresiva, disfonia, disfagia, adenopatías, y el <strong>cambio del patrón de tos en un fumador</strong>, que es la presentación más fácil de pasar por alto del cáncer de pulmón.
  </div>
</div>`;

const bronquitisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">QUE ES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Inflamación transitoria de la via aérea grande, <strong style="color:var(--ink);">VIRICA en más del 90% de los casos</strong>, en un paciente <strong>sin enfermedad pulmonar crónica</strong> y sin neumonía. Tos de menos de 3 semanas, con o sin expectoración, a veces con sibilancias y molestia retroesternal.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">QUE NO ES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">No es una <strong style="color:var(--ink);">neumonía</strong> (constantes normales y auscultación sin focalidad). No es una <strong>exacerbación de EPOC</strong>, que se maneja aparte y si lleva antibiótico según criterios. Y no es una <strong>tos ferina</strong>, que hay que sospechar si dura más de 2 semanas.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LOS DOS MALENTENDIDOS QUE GENERAN CASI TODAS LAS RECETAS INNECESARIAS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. "El esputo es verde, luego es bacteriano".</strong> FALSO. El color se debe a la mieloperoxidasa de los neutrófilos, que llegan igual en una infección virica. La purulencia del esputo NO distingue virico de bacteriano y no es indicación de antibiótico.<br><strong style="color:var(--ink);">2. "Lleva 12 días tosiendo, algo va mal".</strong> FALSO. La tos de la bronquitis aguda dura una <strong>MEDIA DE UNAS 3 SEMANAS</strong>. Decirselo al paciente al principio es una de las intervenciones que más reduce la presión por recibir antibióticos, porque ajusta su expectativa antes de que se frustre.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Que aporta el antibiótico aquí.</strong> Los ensayos muestran una reducción de aproximadamente <strong>medio dia</strong> de tos, a costa de efectos adversos digestivos y cutáneos, de selección de resistencias y de reforzar en el paciente la idea de que la próxima vez también lo necesitará. El balance es desfavorable y por eso <strong>no esta indicado</strong>.
    </div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Que si se puede ofrecer.</strong> Explicación de la duración esperable, analgésicos y antitermicos, hidratación, miel en mayores de un año, y <strong>broncodilatador solo si hay sibilancias</strong> o broncoespasmo demostrable. Y una <strong>receta diferida</strong> con instrucciones claras cuando la presión es alta: reduce el consumo de antibióticos frente a la prescripcion inmediata.
    </div>
  </div>
</div>`;

const radiografiaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">La pregunta práctica no es "es virico o bacteriano", sino "hay o no hay NEUMONÍA".</strong> <span style="color:var(--ink-dim);">Y para eso hay cuatro datos de cabecera que se miden en un minuto y que hacen la mayor parte del trabajo.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">TEMPERATURA</strong><br>mayor de 38 grados</div>
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">FRECUENCIA CARDIACA</strong><br>mayor de 100 por minuto</div>
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">FRECUENCIA RESPIRATORIA</strong><br>mayor de 24 por minuto</div>
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">AUSCULTACIÓN FOCAL</strong><br>crepitantes o soplo localizados</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">NINGUNO presente</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La neumonía es <strong style="color:var(--ink);">muy improbable</strong> en un adulto por lo demás sano. No hace falta radiografía, no hace falta antibiótico, y lo que hace falta es una explicación buena sobre la duración esperable de la tos y sobre cuando volver.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">ALGUNO presente</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">RADIOGRAFÍA DE TÓRAX</strong>. Y si confirma neumonía, se maneja como tal, con evaluación de la gravedad y antibiótico dirigido, que ya es otro tema.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Con umbral MÁS BAJO para pedir radiografía:</strong> ancianos, en quienes la fiebre y la taquipnea pueden faltar y la presentación puede ser solo confusión o caídas; inmunodeprimidos; pacientes con insuficiencia cardiaca o EPOC, donde la clínica se solapa; y cualquier paciente con <strong>hipoxemia</strong>, alteración del nivel de conciencia o hipotensión, que ya no es una consulta por tos sino por una enfermedad grave.
  </div>
</div>`;

const cronicaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 9px;background:#3d5a7308;margin-bottom:6px;">
    <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">LO PRIMERO, ANTES DE NINGÚN ESTUDIO</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. Retirar el TABACO.</strong> Es causa suficiente y su retirada mejora la tos en semanas.<br><strong style="color:var(--ink);">2. Retirar el INHIBIDOR DE LA ENZIMA CONVERTIDORA.</strong> Produce tos seca en una proporción nada despreciable de pacientes, puede empezar meses después de iniciarlo, y al retirarlo la tos puede tardar <strong>hasta 4 semanas o más</strong> en desaparecer, lo que hace que se descarte como causa antes de tiempo.<br><strong style="color:var(--ink);">3. RADIOGRAFÍA DE TÓRAX.</strong> Barata y obligada: descarta lo que no puede fallarse.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1.5px solid #7a5a3a;border-radius:8px;padding:6px 8px;background:#7a5a3a08;">
      <div style="font-weight:700;color:#7a5a3a;text-align:center;margin-bottom:3px;">VIA AÉREA SUPERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Goteo posnasal, carraspeo, sensación de moco que baja, empedrado en la pared faríngea. Se trata de forma empírica con antihistamínico y corticoide nasal, y la respuesta confirma el diagnóstico.</div>
    </div>
    <div style="border:1.5px solid #3f7a4a;border-radius:8px;padding:6px 8px;background:#3f7a4a08;">
      <div style="font-weight:700;color:#3f7a4a;text-align:center;margin-bottom:3px;">ASMA</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Incluida la <strong>variante tusigena</strong>, en la que la tos es el ÚNICO síntoma y no hay sibilancias. Espirometría con prueba broncodilatadora y, si es normal, prueba de provocación bronquial. Responde a corticoide inhalado.</div>
    </div>
    <div style="border:1.5px solid #8c5a2e;border-radius:8px;padding:6px 8px;background:#8c5a2e08;">
      <div style="font-weight:700;color:#8c5a2e;text-align:center;margin-bottom:3px;">REFLUJO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Puede cursar <strong>SIN pirosis</strong>, lo que hace que se descarte injustamente. Medidas posturales y dietéticas más inhibidor de la bomba de protones, con una prueba terapéutica de varias semanas antes de darla por fallida.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">La cuarta causa que hay que recordar.</strong> La <strong>BRONQUITIS EOSINOFÍLICA no asmática</strong>: esputo inducido con eosinófilos, espirometría y provocación NORMALES, y respuesta excelente al corticoide inhalado. Se pasa por alto justamente porque las pruebas de asma salen bien.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Las causas COEXISTEN con frecuencia.</strong> Por eso una respuesta parcial a un tratamiento no descarta esa causa: puede haber dos o tres a la vez. El enfoque es secuencial y acumulativo, tratando una causa sin retirar lo que ya ha funcionado en parte, y reevaluando con un tiempo de prueba suficiente en cada escalón.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La tos es uno de los motivos de consulta más frecuentes de la medicina, y a la vez uno de los que más antibióticos innecesarios genera. El tema se ordena con una pregunta que se hace antes que ninguna otra: <strong>cuanto lleva tosiendo</strong>. La duración divide el problema en tres escenarios con causas, estudio y tratamiento distintos, y la <strong>bronquitis aguda</strong> es el diagnóstico más común del primero de ellos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: la tos por duración.</strong></p>
<p style="margin:0 0 12px;">Menos de 3 semanas es <strong>tos aguda</strong>, casi siempre virica, donde el trabajo no es identificar el virus sino descartar lo que no puede fallarse. De 3 a 8 semanas es <strong>tos subaguda</strong>, en su mayoría postinfecciosa, y es la franja donde hay que acordarse de la tos ferina. Por encima de 8 semanas es <strong>tos crónica</strong>, y ahi si existe un algoritmo ordenado. Por encima de todo están los signos de alarma, que obligan a estudiar sea cual sea la duración.</p>
${figBlock('Figura 1', 'Aguda, subaguda y crónica: tres escenarios distintos', duracionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: la bronquitis aguda y sus dos malentendidos.</strong></p>
<p style="margin:0 0 12px;">Es una inflamación transitoria de la via aérea grande, <strong>virica en más del 90% de los casos</strong>, en un paciente sin enfermedad pulmonar crónica y sin neumonía. Casi todas las recetas innecesarias que genera salen de dos ideas equivocadas: que el esputo verde indica infección bacteriana, y que una tos de dos semanas es anormal. Ninguna de las dos es cierta, y desmontarlas con el paciente es más eficaz que cualquier argumento sobre resistencias.</p>
${figBlock('Figura 2', 'Bronquitis aguda: que es, que no es y los dos malentendidos', bronquitisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la pregunta que si importa es si hay neumonía.</strong></p>
<p style="margin:0 0 12px;">La decisión práctica no es distinguir virico de bacteriano, cosa que no se puede hacer con la clínica, sino decidir si hace falta una <strong>radiografía de tórax</strong>. Cuatro datos de cabecera hacen casi todo el trabajo: temperatura, frecuencia cardiaca, frecuencia respiratoria y auscultación focal. Con los cuatro normales en un adulto sano, la neumonía es muy improbable. Y hay grupos en los que el umbral para pedir la radiografía baja mucho.</p>
${figBlock('Figura 3', 'Cuatro datos de cabecera y la decisión de radiografiar', radiografiaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la tos crónica tiene algoritmo.</strong></p>
<p style="margin:0 0 12px;">Por encima de 8 semanas, el orden es: retirar el <strong>tabaco</strong>, retirar el <strong>inhibidor de la enzima convertidora</strong> (cuya tos puede tardar más de un mes en ceder tras la retirada) y hacer una <strong>radiografía de tórax</strong>. Después, en el no fumador con radiografía normal, se buscan las tres causas principales, que con frecuencia coexisten, más una cuarta que se pasa por alto porque las pruebas de asma salen normales.</p>
${figBlock('Figura 4', 'Tos crónica: el orden del estudio y las causas principales', cronicaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dar antibiótico en una bronquitis aguda de un adulto sano. No usar el color del esputo como criterio para prescribir. No decirle al paciente que en una semana estara bien, porque volvera a los diez días convencido de que necesita algo más. No pedir radiografía a todos, pero tampoco dejar de pedirla cuando hay constantes alteradas, focalidad, edad avanzada o comorbilidad. No olvidar la tos ferina en la tos de más de dos semanas, sobre todo si hay contacto con lactantes. No descartar el reflujo porque no haya pirosis, ni el asma porque no haya sibilancias. No dar por descartado el inhibidor de la enzima convertidora a las dos semanas de retirarlo. Y no atribuir a una causa banal el cambio del patrón de tos de un fumador, que es la presentación más fácil de pasar por alto del cáncer de pulmón.</p>`;

export const bibliografia = [
  'Kinkade S, Long NA. Acute bronchitis. Am Fam Physician. 2016;94(7):560-565.',
  'Smith SM, Fahey T, Smucny J, Becker LA. Antibiotics for acute bronchitis. Cochrane Database Syst Rev. 2017;6(6):CD000245.',
  'Harris AM, Hicks LA, Qaseem A. Appropriate antibiotic use for acute respiratory tract infection in adults: advice for high-value care from the American College of Physicians and the CDC. Ann Intern Med. 2016;164(6):425-434.',
  'Irwin RS, French CL, Chang AB, Altman KW. Classification of cough as a symptom in adults and management algorithms: CHEST guideline and expert panel report. Chest. 2018;153(1):196-209.',
  'Morice AH, Millqvist E, Bieksiene K, et al. ERS guidelines on the diagnosis and treatment of chronic cough in adults and children. Eur Respir J. 2020;55(1):1901136.',
  'Ebell MH, Lundgren J, Youngpairoj S. How long does a cough last? Comparing patients expectations with data from a systematic review of the literature. Ann Fam Med. 2013;11(1):5-13.',
  'Metlay JP, Kapoor WN, Fine MJ. Does this patient have community-acquired pneumonia? Diagnosing pneumonia by history and physical examination. JAMA. 1997;278(17):1440-1445.',
  'Cornia PB, Hersh AL, Lipsky BA, et al. Does this coughing adolescent or adult patient have pertussis? JAMA. 2010;304(8):890-896.',
  'Tiwari T, Murphy TV, Moran J. Recommended antimicrobial agents for the treatment and postexposure prophylaxis of pertussis: 2005 CDC guidelines. MMWR Recomm Rep. 2005;54(RR-14):1-16.',
  'Little P, Moore M, Kelly J, et al. Delayed antibiotic prescribing strategies for respiratory tract infections in primary care. BMJ. 2014;348:g1606.',
  'Braman SS. Postinfectious cough: ACCP evidence-based clinical practice guidelines. Chest. 2006;129(1 Suppl):138S-146S.',
  'Pratter MR. Chronic upper airway cough syndrome secondary to rhinosinus diseases: ACCP evidence-based clinical practice guidelines. Chest. 2006;129(1 Suppl):63S-71S.',
  'Brightling CE. Chronic cough due to nonasthmatic eosinophilic bronchitis: ACCP evidence-based clinical practice guidelines. Chest. 2006;129(1 Suppl):116S-121S.',
  'Dicpinigaitis PV, Morice AH, Birring SS, et al. Antitussive drugs: past, present, and future. Pharmacol Rev. 2014;66(2):468-512.',
  'Ryan NM, Birring SS, Gibson PG. Gabapentin for refractory chronic cough: a randomised, double-blind, placebo-controlled trial. Lancet. 2012;380(9853):1583-1589.',
  'Chow AW, Benninger MS, Brook I, et al. IDSA clinical practice guideline for acute bacterial rhinosinusitis in children and adults. Clin Infect Dis. 2012;54(8):e72-e112.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Tos aguda: lo habitual',
      tituloB: 'Lo que obliga a mirar más allá',
      compensada: 'TOS de menos de 3 semanas, al principio seca y después productiva, precedida a menudo de síntomas de via aérea superior (rinorrea, odinofagia, malestar general) que ya han mejorado cuando la tos persiste. Puede haber sibilancias, molestia retroesternal con la tos y expectoración clara, amarilla o verdosa, sin que ese color signifique nada sobre el origen. Febrícula en los primeros días que después cede. La exploración es normal o muestra roncus difusos que se modifican con la tos, sin focalidad.',
      descompensada: 'Los datos que sacan al paciente de la categoría de bronquitis aguda: FIEBRE de más de 38 grados mantenida, taquicardia de más de 100, taquipnea de más de 24, hipoxemia, crepitantes o soplo FOCALES en la auscultación, dolor pleurítico, alteración del nivel de conciencia o hipotensión. Y los signos de alarma que obligan a estudiar sea cual sea la duración: HEMOPTISIS, pérdida de peso, disnea progresiva, disfonia, disfagia, adenopatías y el cambio del patrón de tos en un fumador.'
    },
    laboratorio: [
      { prueba: 'Ninguna prueba de rutina', utilidad: 'En un adulto sano con tos aguda, constantes normales y auscultación sin focalidad, NO hace falta ninguna prueba. Ni analítica, ni radiografía, ni estudio microbiológico. Pedirlas por sistema alarga la consulta, encuentra hallazgos irrelevantes y con frecuencia acaba justificando un antibiótico que no hacia falta.' },
      { prueba: 'Reacción en cadena de la polimerasa para Bordetella pertussis', utilidad: 'Ante tos de más de 2 semanas con paroxismos, gallo inspiratorio, vómito postusigeno o contacto conocido. Su rendimiento es máximo en las primeras 3 a 4 semanas de tos y cae después, porque la bacteria desaparece aunque la tos persista por el daño ya causado.' },
      { prueba: 'Serología frente a Bordetella pertussis', utilidad: 'Útil cuando la tos lleva más de 3 o 4 semanas y la reacción en cadena de la polimerasa ya ha perdido rendimiento. Su interpretación se complica en vacunados recientes, de modo que hay que conocer el antecedente vacunal antes de pedirla.' },
      { prueba: 'Pruebas moleculares para virus respiratorios', utilidad: 'No están indicadas de rutina en el paciente ambulatorio sano, porque el resultado no cambia el manejo. Si tienen sentido en el paciente hospitalizado, en el inmunodeprimido, en periodo epidemico cuando existe tratamiento antiviral, y para decidir medidas de aislamiento.' },
      { prueba: 'Hemograma y proteína C reactiva', utilidad: 'No de rutina. Pueden ayudar cuando hay duda razonable sobre una neumonía y la radiografía no es concluyente o no esta disponible. Un valor normal apoya el origen virico, pero ninguno de los dos distingue de forma fiable virico de bacteriano por si solo.' },
      { prueba: 'Procalcitonina', utilidad: 'Puede reducir la prescripcion de antibióticos cuando se usa dentro de un protocolo estructurado, sobre todo en el ambito hospitalario. No se usa de rutina en la consulta ambulatoria y no debe sustituir a la valoración clínica.' },
      { prueba: 'Esputo inducido con recuento celular', utilidad: 'En la TOS CRÓNICA con espirometría y provocación normales. Un recuento elevado de eosinófilos define la bronquitis eosinofílica no asmática, que responde muy bien al corticoide inhalado y que se pasa por alto justamente porque las pruebas de asma salen bien.' }
    ],
    no_invasivos: [
      { metodo: 'Decisión de antibiótico en la tos aguda (calculadora disponible)', interpretacion: 'Comprueba si el paciente encaja en una bronquitis aguda de adulto sano, en cuyo caso el antibiótico no esta indicado, o si hay alguna de las situaciones que si lo justifican.', cutoff: 'Adulto sano, constantes normales y sin focalidad: NO antibiótico' },
      { metodo: 'Indicación de radiografía de tórax (calculadora disponible)', interpretacion: 'Cuatro datos de cabecera: temperatura mayor de 38, frecuencia cardiaca mayor de 100, frecuencia respiratoria mayor de 24 y auscultación focal. Con los cuatro normales en un adulto sano, la neumonía es muy improbable.', cutoff: 'Cualquiera de los cuatro presente, o edad avanzada o comorbilidad: radiografía' },
      { metodo: 'Sospecha y manejo de la tos ferina (calculadora disponible)', interpretacion: 'Combina la duración de la tos con los datos clínicos característicos y decide entre reacción en cadena de la polimerasa y serología, además de la profilaxis de contactos.', cutoff: 'Reacción en cadena de la polimerasa en las primeras 3 a 4 semanas; serología después' },
      { metodo: 'Enfoque de la tos crónica (calculadora disponible)', interpretacion: 'Ordena los pasos: retirar tabaco, retirar el inhibidor de la enzima convertidora, hacer radiografía y después buscar las tres causas principales, que con frecuencia coexisten.', cutoff: 'Tos de más de 8 semanas' },
      { metodo: 'Espirometría con prueba broncodilatadora', interpretacion: 'En la tos subaguda persistente y en toda tos crónica. Detecta el asma, incluida la variante tusigena, en la que la tos es el único síntoma y no hay sibilancias.', cutoff: 'Mejoría del FEV1 del 12% y de 200 mL tras broncodilatador: prueba positiva' },
      { metodo: 'Prueba de provocación bronquial', interpretacion: 'Cuando la espirometría es normal y persiste la sospecha de asma. Su valor principal es el NEGATIVO: una provocación normal hace el asma muy improbable y evita tratamientos empíricos prolongados e inútiles.', cutoff: 'Caída del FEV1 del 20% con la concentración establecida: positiva' },
      { metodo: 'Escala visual analogica y cuestionarios de tos', interpretacion: 'Miden la intensidad y el impacto de la tos sobre la vida del paciente, que es lo que le importa y lo que peor se recoge. Útiles sobre todo para seguir la respuesta al tratamiento en la tos crónica.', cutoff: 'Sin umbral; se compara con el valor previo del propio paciente' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'La prueba clave de la tos aguda, aunque NO se pide a todos: solo si hay alteración de constantes, focalidad en la auscultación, edad avanzada, comorbilidad o signos de alarma. En la tos crónica se pide SIEMPRE, aunque el paciente este por lo demás bien.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'No de rutina. Indicada ante signos de alarma con radiografía normal, sospecha de bronquiectasias, de enfermedad intersticial o de lesión no visible en la radiografía. En un fumador con cambio del patrón de tos y radiografía normal, sigue siendo razonable hacerla.' },
      { modalidad: 'Exploración de la via aérea superior', hallazgos: 'Aspecto en empedrado de la pared faríngea posterior, moco descendente y edema de cornetes en el síndrome de tos de via aérea superior. Es una exploración de segundos que orienta hacia la causa más frecuente de tos crónica.' },
      { modalidad: 'Nasofibroscopia y laringoscopia', hallazgos: 'Ante disfonia, sensación de cuerpo extraño o sospecha de patología laringea. La disfonia persistente en un fumador es un signo de alarma que obliga a visualizar la laringe, no a tratar la tos de forma empírica.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación que gobierna todo el tema es la <strong>duración</strong>: tos AGUDA de menos de 3 semanas, SUBAGUDA de 3 a 8 semanas y CRÓNICA de más de 8 semanas. Cada franja tiene causas, estudio y tratamiento distintos. Sobre esa división se superpone la búsqueda de <strong>signos de alarma</strong>, que obligan a estudiar con independencia del tiempo de evolución, y en la tos aguda una segunda pregunta operativa: si hay o no <strong>neumonía</strong>, que es la que decide la radiografía y el antibiótico.`,
    escalas: [
      { nombre: 'Clasificación de la tos por duración', componentes: 'Tiempo de evolución de la tos.', formula: 'AGUDA: menos de 3 semanas. SUBAGUDA: de 3 a 8 semanas. CRÓNICA: más de 8 semanas.', interpretacion: 'La aguda es casi siempre virica y el trabajo es descartar lo grave. La subaguda es en su mayoría postinfecciosa y es la franja de la tos ferina. La crónica tiene un algoritmo propio que empieza por retirar el tabaco y el inhibidor de la enzima convertidora.' },
      { nombre: 'Decisión de antibiótico en la tos aguda (calculadora disponible)', componentes: 'Presencia de enfermedad pulmonar crónica, constantes vitales, auscultación, edad, inmunosupresión y sospecha de tos ferina.', formula: 'En el adulto sano con constantes normales y sin focalidad, el antibiótico NO esta indicado.', interpretacion: 'Los ensayos muestran una reducción de aproximadamente medio dia de tos a costa de efectos adversos y de resistencias. Las excepciones son la sospecha de tos ferina, la exacerbación de EPOC con criterios, la sospecha de neumonía y el paciente inmunodeprimido.' },
      { nombre: 'Indicación de radiografía de tórax (calculadora disponible)', componentes: 'Temperatura, frecuencia cardiaca, frecuencia respiratoria y auscultación focal, más edad y comorbilidad.', formula: 'Cualquiera de los cuatro alterado obliga a radiografía. Con los cuatro normales en un adulto sano, la neumonía es muy improbable.', interpretacion: 'El umbral baja mucho en ancianos, en quienes la fiebre y la taquipnea pueden faltar y la presentación puede ser solo confusión o caídas, en inmunodeprimidos y en pacientes con insuficiencia cardiaca o EPOC, donde la clínica se solapa.' },
      { nombre: 'Sospecha de tos ferina (calculadora disponible)', componentes: 'Duración de la tos, paroxismos, gallo inspiratorio, vómito postusigeno, ausencia de fiebre y contacto conocido.', formula: 'Ninguno de los datos aislados es suficiente. El vómito postusigeno y el gallo inspiratorio son los que más aumentan la probabilidad; la ausencia de tos paroxística es lo que más la reduce.', interpretacion: 'La prueba depende del tiempo: reacción en cadena de la polimerasa en las primeras 3 a 4 semanas, serología después. El tratamiento con macrolido corta la TRANSMISIÓN pero apenas modifica el curso si se da tarde, y aun así se indica por el riesgo para los lactantes.' },
      { nombre: 'Enfoque de la tos crónica (calculadora disponible)', componentes: 'Tabaquismo, uso de inhibidores de la enzima convertidora, radiografía de tórax y las tres causas principales.', formula: 'Orden fijo: retirar tabaco, retirar el inhibidor, radiografía; después estudiar via aérea superior, asma y reflujo.', interpretacion: 'La tos por inhibidor puede tardar más de 4 semanas en ceder tras la retirada, de modo que darla por descartada antes de ese plazo es un error frecuente. Y las tres causas principales COEXISTEN a menudo, por lo que una respuesta parcial no descarta ninguna.' },
      { nombre: 'Criterios de Anthonisen para la exacerbación de EPOC', componentes: 'Aumento de la disnea, del volumen del esputo y de la purulencia del esputo.', formula: 'Tipo I: los tres. Tipo II: dos de los tres. Tipo III: uno de los tres con algún dato adicional.', interpretacion: 'Sirve para recordar que la exacerbación de EPOC NO es una bronquitis aguda y se maneja aparte: ahi el antibiótico si esta indicado en los tipos I y II, sobre todo cuando hay purulencia del esputo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Bronquitis aguda',
      color: '#7a5a3a',
      definicion: 'Inflamación transitoria de la via aérea de gran calibre, de origen virico en más del 90% de los casos, que cursa con tos de menos de 3 semanas en un paciente SIN enfermedad pulmonar crónica y SIN neumonía.',
      fisiopatologia: 'Un virus respiratorio infecta el epitelio bronquial y produce descamación, edema de la mucosa e hipersecreción. La lesión del epitelio deja expuestas las terminaciones nerviosas y aumenta la sensibilidad del reflejo tusígeno, lo que explica que la tos persista semanas después de que el virus haya desaparecido: no es que la infección siga, es que el reflejo esta sensibilizado. Ese mismo mecanismo produce una hiperreactividad bronquial transitoria que justifica las sibilancias de algunos pacientes y su respuesta a los broncodilatadores.',
      epidemiologia: 'Es una de las causas más frecuentes de consulta ambulatoria y una de las que más antibióticos innecesarios genera en el mundo. Los agentes habituales son los mismos virus del resfriado (rinovirus, coronavirus, virus respiratorio sincitial, influenza, parainfluenza, adenovirus y metapneumovirus). Entre las causas bacterianas, poco frecuentes, están <em>Mycoplasma pneumoniae</em>, <em>Chlamydophila pneumoniae</em> y <em>Bordetella pertussis</em>.',
      factores_riesgo: ['Estación epidémica de virus respiratorios', 'Contacto con niños pequeños', 'Tabaquismo activo y pasivo', 'Contaminación atmosferica y exposición laboral a irritantes', 'Hacinamiento', 'Edad avanzada', 'Comorbilidad cardiorrespiratoria', 'Inmunosupresion', 'Falta de vacunación antigripal', 'Reflujo gastroesofágico, que prolonga la tos'],
      clinica: 'Tos de menos de 3 semanas, precedida a menudo de síntomas de via aérea superior que ya han mejorado. Expectoración clara, amarilla o verdosa, sin que el color signifique nada. Molestia retroesternal con la tos, sibilancias en algunos pacientes y febrícula los primeros días. La exploración es normal o muestra roncus difusos que cambian con la tos, SIN focalidad.',
      criterios_dx: 'CLÍNICO y por exclusión: tos aguda con constantes normales y sin focalidad en la auscultación, en un paciente sin enfermedad pulmonar crónica. No hace falta ninguna prueba. Ver las Figuras 2 y 3 de Definición.',
      laboratorio: 'Ninguno de rutina. Pruebas moleculares para virus respiratorios solo en el hospitalizado, en el inmunodeprimido, en periodo epidemico con tratamiento antiviral disponible o para decidir aislamiento.',
      imagen: 'Radiografía de tórax SOLO si hay alteración de constantes, focalidad en la auscultación, edad avanzada, comorbilidad o signos de alarma. No se pide de rutina.',
      complementarios: 'Medir bien las constantes, que es la prueba complementaria más rentable de todo el cuadro y la que más veces se hace de forma incompleta: la frecuencia respiratoria es la que más se omite y la que más informa.',
      dx_diferencial: 'NEUMONÍA, exacerbación de EPOC o de asma, tos ferina, embolia pulmonar (que puede presentarse como tos y disnea sin dolor pleurítico), insuficiencia cardiaca, rinosinusitis con goteo posnasal, reflujo gastroesofágico, tos por inhibidor de la enzima convertidora y cuerpo extraño inhalado.',
      tx_medico: 'EXPLICACIÓN de la duración esperable, que es la intervención más eficaz de todo el cuadro: la tos dura una MEDIA DE UNAS 3 SEMANAS, y decirlo al principio evita la consulta de vuelta a los diez días. Hidratación, analgésicos y antitermicos, miel en mayores de un año. Instrucciones claras de cuando volver.',
      tx_farmacologico: 'NO ANTIBIÓTICO en el adulto sano: los ensayos muestran una reducción de aproximadamente medio dia de tos a costa de efectos adversos y de resistencias. Broncodilatador solo si hay sibilancias o broncoespasmo demostrable. Los antitusigenos tienen evidencia débil. La RECETA DIFERIDA con instrucciones es una alternativa útil cuando la presión asistencial es alta.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica. Si el paciente esta grave, el diagnóstico es otro.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si un paciente ingresa con esta etiqueta, hay que revisar el diagnóstico: probablemente sea una neumonía, una exacerbación de EPOC, una insuficiencia cardiaca o una embolia.',
      seguimiento_ambulatorio: 'No hace falta revisión programada si el paciente entiende la evolución esperable. Volver si la tos supera las 3 semanas, si aparece fiebre alta o disnea, o si surge cualquier signo de alarma.',
      pronostico: 'Excelente: se resuelve sola. El problema no es la enfermedad sino el daño que produce su sobretratamiento, en forma de efectos adversos, resistencias y refuerzo de la expectativa de recibir antibiótico la próxima vez.',
      algoritmo: ['Preguntar cuanto lleva tosiendo: menos de 3 semanas es tos aguda', 'Medir bien las constantes, incluida la FRECUENCIA RESPIRATORIA', 'Auscultar buscando FOCALIDAD, no roncus difusos', 'Buscar signos de alarma: hemoptisis, pérdida de peso, disnea, disfonia', 'Comprobar que no hay enfermedad pulmonar crónica de base', 'Si todo es normal en un adulto sano: es bronquitis aguda', 'NO pedir radiografía ni analítica', 'NO dar antibiótico', 'EXPLICAR que la tos dura una media de unas 3 semanas', 'Dar instrucciones claras de cuando volver']
    },
    {
      nombre: 'Tos ferina y tos subaguda',
      color: '#8a6a1f',
      definicion: 'Tos de 3 a 8 semanas de duración, en su mayoría postinfecciosa, dentro de la cual hay que identificar la infección por <em>Bordetella pertussis</em>, que en el adulto no da el cuadro clásico del niño.',
      fisiopatologia: '<em>Bordetella pertussis</em> se adhiere al epitelio ciliado de la via aérea y produce toxinas que paralizan y destruyen los cilios e inhiben la respuesta inmunitaria local. El resultado es acumulo de moco que no se puede movilizar y una tos paroxística intensa. La clave para entender el manejo es que buena parte de la tos se debe al DAÑO YA CAUSADO y no a la bacteria presente: por eso el antibiótico dado tarde corta la transmisión pero apenas modifica el curso, y por eso la tos puede durar meses. En la tos postinfecciosa de otras causas el mecanismo es análogo: sensibilización del reflejo tusígeno tras la lesión epitelial.',
      epidemiologia: 'La tos ferina persiste en la población adulta pese a la vacunación infantil, porque la inmunidad, tanto la vacunal como la natural, DISMINUYE con los años. Los adultos con tos prolongada son un reservorio y la fuente principal de contagio de los lactantes no vacunados, que son quienes sufren la enfermedad grave y las muertes.',
      factores_riesgo: ['Vacunación alejada en el tiempo', 'Contacto con casos o con brotes escolares', 'Trabajo sanitario o educativo', 'Convivencia con lactantes', 'Embarazo, por el riesgo para el recién nacido', 'Ausencia de dosis de recuerdo en el adulto', 'Hacinamiento', 'Inmunosupresion', 'Infección respiratoria previa para la tos postinfecciosa', 'Reflujo gastroesofágico y rinitis, que perpetuan la tos'],
      clinica: 'En el ADULTO el cuadro clásico falta con frecuencia: suele ser solo una tos persistente, seca, de predominio NOCTURNO, sin fiebre. Cuando aparecen, los datos más característicos son los PAROXISMOS de tos, el GALLO INSPIRATORIO y el VÓMITO POSTUSIGENO. Puede complicarse con fracturas costales, síncope tusígeno, incontinencia y hernias por el esfuerzo.',
      criterios_dx: 'Sospecha clínica ante tos de más de 2 semanas con paroxismos, gallo o vómito postusigeno, o contacto conocido. Confirmación según el tiempo: reacción en cadena de la polimerasa en las primeras 3 a 4 semanas, serología después. Ver la Figura 1 de Definición.',
      laboratorio: 'Reacción en cadena de la polimerasa en muestra nasofaringea, que es la prueba de elección en fase precoz. Cultivo en las 2 primeras semanas, muy específico pero poco sensible. Serología cuando la tos lleva más de 3 o 4 semanas, teniendo en cuenta el antecedente vacunal. La linfocitosis marcada es típica del niño y falta con frecuencia en el adulto.',
      imagen: 'Radiografía de tórax si hay dudas sobre una neumonía o ante sospecha de complicación mecánica por los paroxismos, como neumotórax o fractura costal.',
      complementarios: 'DECLARACION del caso según la normativa local y estudio de contactos, especialmente de lactantes, embarazadas y personal sanitario, que es donde la intervención tiene más impacto.',
      dx_diferencial: 'Tos postinfecciosa de otras causas, que es lo más frecuente en esta franja; asma; síndrome de tos de via aérea superior; reflujo; tos por inhibidor de la enzima convertidora; infección por <em>Mycoplasma</em> o <em>Chlamydophila</em>; tuberculosis; y cuerpo extraño en pacientes seleccionados.',
      tx_medico: 'Información de que la tos puede durar semanas o meses pese al tratamiento, porque se debe al daño ya causado. Medidas de AISLAMIENTO respiratorio durante los primeros 5 días de tratamiento, y evitar el contacto con lactantes.',
      tx_farmacologico: 'MACROLIDO (azitromicina, claritromicina o eritromicina) para cortar la transmisión. Es más eficaz cuanto antes se da, y después de las 3 primeras semanas apenas modifica el curso clínico, aunque se sigue indicando por el beneficio en salud publica. PROFILAXIS POSEXPOSICION con el mismo macrolido a los contactos estrechos de riesgo: lactantes, embarazadas en el tercer trimestre y convivientes de ambos. En la tos postinfecciosa, no hay tratamiento específico y se puede usar un corticoide inhalado o un antitusigeno si la tos es muy limitante.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No en el adulto. En el LACTANTE, la tos ferina puede ser grave y causar apnea, hipertensión pulmonar e insuficiencia respiratoria, y es la razón de todo el esfuerzo de prevención.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez ingresa un adulto. Si ingresa, aislamiento respiratorio hasta completar 5 días de macrolido y valoración de las complicaciones mecánicas de los paroxismos.',
      seguimiento_ambulatorio: 'Reevaluar si la tos supera las 8 semanas, momento en que pasa a ser tos crónica y cambia el enfoque. Comprobar que se ha completado el estudio de contactos y actualizar la vacunación.',
      pronostico: 'Bueno en el adulto, aunque la tos puede durar meses y afectar mucho a la calidad de vida y al sueño. El riesgo real no esta en el paciente sino en los lactantes a los que puede contagiar.',
      algoritmo: ['Ante tos de más de 2 semanas, preguntar por paroxismos, gallo y vómito postusigeno', 'Preguntar por contacto con casos y por convivencia con lactantes', 'Si lleva menos de 3 o 4 semanas, pedir reacción en cadena de la polimerasa', 'Si lleva más, pedir serología teniendo en cuenta la vacunación', 'Iniciar MACROLIDO sin esperar el resultado si la sospecha es alta', 'Explicar que la tos puede durar semanas pese al tratamiento', 'Indicar aislamiento durante los primeros 5 días de tratamiento', 'DECLARAR el caso y estudiar los contactos', 'Dar profilaxis a lactantes, embarazadas y sus convivientes', 'Actualizar la vacunación, incluida la del tercer trimestre del embarazo']
    },
    {
      nombre: 'Tos aguda: lo que no puede fallarse',
      color: '#8c3a34',
      definicion: 'Conjunto de diagnósticos que pueden presentarse como tos aguda y cuyo retraso tiene consecuencias graves: neumonía, embolia pulmonar, insuficiencia cardiaca, asma, exacerbación de EPOC y cuerpo extraño.',
      fisiopatologia: 'La tos es un reflejo inespecífico que se dispara desde receptores repartidos por la faringe, la laringe, la tráquea, los bronquios, la pleura, el pericardio, el diafragma, el esófago y el conducto auditivo externo. Esa amplitud anatómica es la razón de que cualquier cosa que irrite alguno de esos territorios produzca tos, y explica por que la tos aguda, por si sola, no permite localizar el problema: hay que buscar los datos que la acompañan.',
      epidemiologia: 'La neumonía es el diagnóstico grave más frecuente entre los que se presentan como tos aguda. La embolia pulmonar es el que más se retrasa, porque en una proporción importante de casos no hay dolor pleurítico ni hemoptisis y el paciente solo refiere tos y falta de aire.',
      factores_riesgo: ['Edad avanzada', 'Comorbilidad cardiaca o pulmonar', 'Inmunosupresion', 'Inmovilización, cirugía reciente o cáncer, para la embolia', 'Tabaquismo', 'Alcoholismo y alteración del nivel de conciencia, para la aspiración', 'Alteración de la deglución, para el cuerpo extraño', 'Falta de vacunación', 'Institucionalizacion', 'Consulta tardía'],
      clinica: 'Los datos que separan a estos pacientes de una bronquitis aguda: FIEBRE alta mantenida, taquicardia, taquipnea, hipoxemia, crepitantes o soplo FOCALES, dolor pleurítico, ortopnea, edemas, sibilancias generalizadas de nueva aparición, estridor o tos de inicio BRUSCO durante una comida.',
      criterios_dx: 'No hay unos criterios únicos: lo que hay es una lista de comprobacion. La clave operativa es medir bien las constantes, auscultar buscando focalidad y preguntar de forma dirigida por los signos de alarma. Ver la Figura 3 de Definición.',
      laboratorio: 'Según la sospecha: hemograma y proteína C reactiva ante duda de neumonía, dímero D si la probabilidad de embolia es baja o intermedia, péptido natriurético ante sospecha de insuficiencia cardiaca, y gasometría si hay hipoxemia.',
      imagen: 'RADIOGRAFÍA DE TÓRAX ante constantes alteradas, focalidad, edad avanzada, comorbilidad o signos de alarma. Angiotomografia pulmonar ante sospecha de embolia con dímero D positivo o probabilidad alta. Ecocardiograma ante sospecha de insuficiencia cardiaca.',
      complementarios: 'Pulsioximetría a todo paciente con tos y disnea, que es rápida y detecta hipoxemia inesperada. Electrocardiograma ante sospecha cardiaca o de embolia. Broncoscopia urgente ante sospecha de cuerpo extraño.',
      dx_diferencial: 'Es en sí mismo el diagnóstico diferencial de la tos aguda. Conviene tener presente que la tos por inhibidor de la enzima convertidora puede empezar meses después de iniciar el fármaco y presentarse como tos aparentemente aguda.',
      tx_medico: 'El de cada entidad. Lo que importa aquí es no cerrar la consulta con una etiqueta de bronquitis aguda sin haber comprobado las constantes y la auscultación, que es donde se pierden estos diagnósticos.',
      tx_farmacologico: 'El de cada entidad. Si se confirma neumonía, antibiótico según gravedad y factores de riesgo. Si es exacerbación de EPOC, se aplican los criterios correspondientes. Si es asma, broncodilatador y corticoide.',
      tx_intervencionista: 'Broncoscopia en el cuerpo extraño. Las que correspondan a la embolia pulmonar o a la insuficiencia cardiaca según su gravedad.',
      criterios_uci: 'Insuficiencia respiratoria, inestabilidad hemodinámica, alteración del nivel de conciencia, embolia pulmonar de riesgo alto y neumonía grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'El de la entidad diagnosticada. Ante un paciente etiquetado de bronquitis aguda que no mejora o empeora, lo primero es revisar el diagnóstico, no cambiar el antibiótico.',
      seguimiento_ambulatorio: 'Instrucciones claras de cuando volver: fiebre alta persistente, disnea, dolor torácico, hemoptisis o empeoramiento. La red de seguridad forma parte del tratamiento de la tos aguda.',
      pronostico: 'Depende del diagnóstico. Lo que empeora el pronóstico de todos ellos es el retraso, y el retraso se produce casi siempre por no haber medido las constantes o por no haber preguntado por los signos de alarma.',
      algoritmo: ['Medir SIEMPRE temperatura, frecuencia cardiaca, frecuencia respiratoria y saturación', 'Auscultar buscando focalidad, no solo roncus', 'Preguntar por dolor pleurítico, ortopnea y edemas', 'Preguntar por hemoptisis, pérdida de peso y disfonia', 'Preguntar si la tos empezo de forma brusca durante una comida', 'Valorar factores de riesgo de embolia pulmonar', 'Pedir radiografía si hay cualquier dato alterado', 'Ampliar el estudio según la sospecha concreta', 'Ante deterioro con etiqueta de bronquitis, revisar el DIAGNÓSTICO', 'Dejar instrucciones explícitas de cuando volver']
    },
    {
      nombre: 'Tos crónica: el enfoque por causas',
      color: '#3d5a73',
      definicion: 'Tos de más de 8 semanas de duración, que en el no fumador con radiografía normal y sin inhibidores de la enzima convertidora responde en la gran mayoría de los casos a tres causas, con frecuencia coexistentes.',
      fisiopatologia: 'Se entiende hoy como un síndrome de HIPERSENSIBILIDAD del reflejo tusígeno: distintos estímulos (goteo posnasal, inflamación bronquial eosinofílica, reflujo) sensibilizan las vías aferentes vagales y bajan el umbral de la tos, de modo que después cualquier estímulo trivial (hablar, reir, un olor, el aire frío) la desencadena. Ese modelo explica por que las causas coexisten y se potencian, por que una respuesta parcial es la regla, y por que en los casos refractarios funcionan fármacos neuromoduladores en lugar de tratamientos dirigidos al pulmón.',
      epidemiologia: 'Es un motivo de consulta muy frecuente y una causa importante de deterioro de la calidad de vida, con síncope tusígeno, incontinencia urinaria, insomnio y aislamiento social. Afecta más a mujeres de mediana edad, en quienes el reflejo tusígeno es más sensible.',
      factores_riesgo: ['Tabaquismo activo o pasivo', 'Tratamiento con inhibidor de la enzima convertidora', 'Rinitis alérgica y rinosinusitis crónica', 'Asma, incluida la variante tusigena', 'Reflujo gastroesofágico', 'Sexo femenino y edad media de la vida', 'Infección respiratoria previa', 'Exposición ocupacional a irritantes', 'Obesidad, que agrava el reflujo', 'Bronquiectasias o enfermedad pulmonar no diagnosticada'],
      clinica: 'Tos persistente, seca o escasamente productiva, que puede empeorar de noche (asma), al acostarse o tras las comidas (reflujo) o acompañarse de carraspeo y sensación de moco que baja (via aérea superior). Frecuentes el síncope tusígeno, la incontinencia urinaria de esfuerzo y el impacto sobre el sueño y la vida social, que suelen ser lo que más preocupa al paciente y lo que menos se pregunta.',
      criterios_dx: 'Tos de más de 8 semanas. El diagnóstico es por RESPUESTA AL TRATAMIENTO en la mayoría de los casos, siguiendo un orden fijo. Ver la Figura 4 de Definición.',
      laboratorio: 'Esputo inducido con recuento celular ante espirometría y provocación normales, para detectar la bronquitis eosinofílica no asmática. Fracción exhalada de óxido nítrico como apoyo de inflamación eosinofílica cuando esta disponible.',
      imagen: 'RADIOGRAFÍA DE TÓRAX a todos, sin excepción. Tomografía si hay signos de alarma, sospecha de bronquiectasias o de enfermedad intersticial, o radiografía normal en un fumador con cambio del patrón de tos.',
      complementarios: 'Espirometría con prueba broncodilatadora y, si es normal, PRUEBA DE PROVOCACIÓN bronquial, cuyo valor principal es el negativo: descarta el asma y evita tratamientos empíricos prolongados. Nasofibroscopia ante disfonia o sospecha laringea. pH-metría solo en casos seleccionados.',
      dx_diferencial: 'Además de las tres causas principales y de la bronquitis eosinofílica: bronquiectasias, cáncer de pulmón, enfermedad intersticial, tuberculosis, insuficiencia cardiaca, tos ferina prolongada, apnea del sueño, cuerpo extraño, tos somática y tic tusígeno.',
      tx_medico: 'ABANDONO DEL TABACO, que es causa suficiente por si solo y mejora la tos en semanas. RETIRADA DEL INHIBIDOR DE LA ENZIMA CONVERTIDORA, sustituyendolo por un antagonista del receptor de angiotensina. Medidas antirreflujo. Y en la tos crónica refractaria, TERAPIA DEL HABLA con logopeda, que tiene evidencia y se ofrece poco.',
      tx_farmacologico: 'Tratamiento empírico secuencial: antihistamínico y corticoide nasal para la via aérea superior; corticoide inhalado para el asma y para la bronquitis eosinofílica; inhibidor de la bomba de protones durante varias semanas para el reflujo. En la tos crónica refractaria o inexplicada, neuromoduladores como la GABAPENTINA, que demostró beneficio en un ensayo controlado, o morfina a dosis bajas.',
      tx_intervencionista: 'No aplica en la mayoría. Cirugía antirreflujo en casos muy seleccionados y refractarios.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si hay signos de alarma, el estudio se orienta a la enfermedad de base y no a la tos.',
      seguimiento_ambulatorio: 'Revisiones con tiempo de prueba SUFICIENTE en cada escalón: varias semanas por cada tratamiento empírico. No retirar lo que ha funcionado en parte al añadir el siguiente, porque las causas coexisten y el efecto es acumulativo.',
      pronostico: 'La mayoría mejora al identificar y tratar las causas. Una minoría queda como tos crónica refractaria o inexplicada, para la que hay hoy opciones específicas con neuromoduladores y terapia del habla, y en la que reconocer el impacto sobre la vida del paciente forma parte del tratamiento.',
      algoritmo: ['Confirmar que la tos lleva más de 8 semanas', 'Buscar signos de alarma que cambien el enfoque', 'RETIRAR el tabaco', 'RETIRAR el inhibidor de la enzima convertidora y esperar más de 4 semanas', 'Hacer RADIOGRAFÍA DE TÓRAX a todos', 'Tratar de forma empírica el síndrome de tos de via aérea superior', 'Estudiar asma con espirometría y, si es normal, provocación', 'Valorar reflujo aunque no haya pirosis', 'Pedir esputo inducido si todo lo anterior es normal', 'En la tos refractaria, valorar terapia del habla y neuromoduladores']
    },
    {
      nombre: 'Uso prudente de antibióticos en la infección respiratoria aguda',
      color: '#3f6b52',
      definicion: 'Conjunto de decisiones y de habilidades de comunicación dirigidas a prescribir antibiótico solo cuando aporta beneficio, en el escenario clínico donde más se prescriben sin necesidad.',
      fisiopatologia: 'El uso de antibióticos selecciona cepas resistentes tanto en el paciente tratado como en su entorno, y ese efecto es proporcional al consumo. En el individuo, un ciclo de antibiótico altera la microbiota durante meses y aumenta la probabilidad de que la siguiente infección sea por un germen menos sensible. A escala poblacional, la infección respiratoria aguda es el mayor consumidor de antibióticos ambulatorios, de modo que es también donde mayor margen de mejora hay.',
      epidemiologia: 'Una proporción muy alta de las prescripciones ambulatorias de antibiótico corresponde a infecciones respiratorias agudas, y una parte importante de ellas es innecesaria. La bronquitis aguda es el ejemplo más claro: virica en más del 90% de los casos y sin embargo tratada con antibiótico en muchos de ellos.',
      factores_riesgo: ['Expectativa del paciente de recibir antibiótico', 'Percepción del médico sobre esa expectativa, que suele sobreestimarse', 'Falta de tiempo en la consulta', 'Presión asistencial y consultas fuera de horario', 'Uso del color del esputo como criterio', 'Miedo a la reconsulta o a la queja', 'Ausencia de red de seguridad clara', 'Falta de continuidad asistencial', 'Automedicación con antibióticos sobrantes', 'Prescripcion previa por el mismo motivo, que crea expectativa'],
      clinica: 'No aplica como cuadro clínico. Lo que si tiene forma clínica es la consulta: el paciente que lleva diez días tosiendo, ha dormido mal, viene preocupado y espera algo concreto. Reconocer esa expectativa y responder a ella con información, en lugar de con una receta, es la habilidad central de esta ficha.',
      criterios_dx: 'No aplica. La regla operativa es que en la bronquitis aguda del adulto sano el antibiótico NO esta indicado, y que las excepciones son concretas y reconocibles.',
      laboratorio: 'La procalcitonina puede reducir la prescripcion dentro de un protocolo estructurado, sobre todo en el hospital. No sustituye a la valoración clínica ni se usa de rutina en la consulta ambulatoria.',
      imagen: 'La radiografía se pide para descartar neumonía cuando hay datos que la sugieren, no para justificar una decisión ya tomada sobre el antibiótico.',
      complementarios: 'RECETA DIFERIDA con instrucciones escritas: se entrega la receta con indicación de usarla solo si aparecen determinados datos o si no hay mejoría en un plazo concreto. Reduce el consumo de antibióticos frente a la prescripcion inmediata y mantiene la satisfaccion del paciente.',
      dx_diferencial: 'Las excepciones en las que el antibiótico SI esta indicado: neumonía confirmada o muy probable, exacerbación de EPOC con criterios, sospecha de tos ferina, faringoamigdalitis estreptocócica confirmada, rinosinusitis bacteriana con criterios de duración o de empeoramiento tras mejoría, e infección en el paciente inmunodeprimido.',
      tx_medico: 'Explicar la duración esperable, que es lo que más reduce la presión. Nombrar el diagnóstico (decir "es una bronquitis virica" funciona mejor que decir "no es nada"). Reconocer el malestar del paciente. Ofrecer tratamiento sintomático concreto. Y dejar una RED DE SEGURIDAD explícita sobre cuando volver.',
      tx_farmacologico: 'Sintomático: analgésicos y antitermicos, miel en mayores de un año, broncodilatador solo si hay sibilancias. Los antitusigenos tienen evidencia débil y no están exentos de efectos adversos, sobre todo en el anciano.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el hospital, revisar a las 48 a 72 horas toda prescripcion de antibiótico iniciada de forma empírica, ajustarla al cultivo y acortarla cuando el diagnóstico se aclare. La desescalada es tan parte del uso prudente como la decisión inicial.',
      seguimiento_ambulatorio: 'Consulta de revisión solo si es necesaria, con criterios claros. Registrar el motivo de no prescribir, que ayuda en la siguiente consulta y evita que otro profesional prescriba por defecto.',
      pronostico: 'Las intervenciones sobre la comunicación y las estrategias de receta diferida reducen de forma consistente el consumo de antibióticos sin empeorar los desenlaces clínicos ni la satisfaccion del paciente.',
      algoritmo: ['Confirmar que se trata de una bronquitis aguda de adulto sano', 'Comprobar constantes y auscultación antes de decidir', 'Descartar las excepciones que si llevan antibiótico', 'NOMBRAR el diagnóstico al paciente, no decir que no tiene nada', 'Explicar que la tos dura una media de unas 3 semanas', 'Explicar que el color del esputo no indica infección bacteriana', 'Ofrecer tratamiento sintomático concreto', 'Valorar receta diferida si la presión es alta', 'Dejar una red de seguridad explícita de cuando volver', 'Registrar en la historia el motivo de no prescribir']
    },
    {
      nombre: 'Situaciones especiales: EPOC, asma, ancianos e inmunodeprimidos',
      color: '#8c5a2e',
      definicion: 'Pacientes en los que la tos aguda no puede manejarse con las reglas del adulto sano, porque la enfermedad de base cambia el significado del síntoma, la probabilidad de complicación y la indicación de antibiótico.',
      fisiopatologia: 'En la EPOC y en el asma, la infección virica actúa sobre una via aérea ya inflamada y produce una exacerbación, no una bronquitis aguda: el mecanismo, el pronóstico y el tratamiento son distintos. En el anciano, la respuesta febril y la respuesta inflamatoria están atenuadas, de modo que una neumonía puede presentarse sin fiebre y con confusión o caídas como única manifestación. En el inmunodeprimido, el espectro de microorganismos se amplia y la progresión puede ser rápida, lo que invierte por completo el balance entre observar y estudiar.',
      epidemiologia: 'Las infecciones respiratorias son la causa más frecuente de exacerbación de EPOC y de asma. En el anciano, la neumonía es una de las principales causas de ingreso y de mortalidad, y su presentación atípica es la razón principal del retraso diagnóstico en este grupo.',
      factores_riesgo: ['EPOC, sobre todo con FEV1 bajo y exacerbaciones previas', 'Asma mal controlada', 'Edad avanzada y fragilidad', 'Institucionalizacion', 'Inmunosupresión farmacológica, VIH o neoplasia hematológica', 'Insuficiencia cardiaca', 'Diabetes mellitus', 'Bronquiectasias', 'Falta de vacunación antigripal y antineumococica', 'Deterioro cognitivo, que retrasa la consulta'],
      clinica: 'EPOC: aumento de la disnea, del volumen y de la purulencia del esputo, que son los criterios de Anthonisen. ASMA: tos, sibilancias, opresión y caída del flujo espiratorio máximo. ANCIANO: confusión, caídas, anorexia o descompensación de otra enfermedad, con FIEBRE Y TAQUIPNEA QUE PUEDEN FALTAR. INMUNODEPRIMIDO: síntomas escasos con progresión rápida, y a menudo hipoxemia desproporcionada a la exploración.',
      criterios_dx: 'Cada situación tiene sus propios criterios. Lo que hay que retener es que la etiqueta de bronquitis aguda y la regla de no dar antibiótico se aplican al ADULTO SANO, y que estos pacientes quedan fuera de esa regla.',
      laboratorio: 'Umbral bajo para hemograma, proteína C reactiva, función renal y gasometría. Estudio microbiológico ampliado en el inmunodeprimido, incluyendo virus, hongos y micobacterias según el tipo de inmunosupresión.',
      imagen: 'RADIOGRAFÍA DE TÓRAX con umbral mucho más bajo que en el adulto sano. En el inmunodeprimido, TOMOGRAFÍA si la radiografía es normal y la sospecha persiste, porque puede detectar lesiones no visibles en la radiografía.',
      complementarios: 'Pulsioximetría siempre. Valoración funcional y del estado cognitivo en el anciano, porque la decisión de ingresar depende tanto de la situación basal como de la gravedad de la infección.',
      dx_diferencial: 'En el anciano, distinguir la neumonía de la insuficiencia cardiaca descompensada, que se solapan y con frecuencia coexisten. En el inmunodeprimido, ampliar a neumonía por <em>Pneumocystis</em>, micosis invasivas, micobacterias y virus.',
      tx_medico: 'Vacunación antigripal y antineumococica al dia. Optimización del tratamiento de base. Rehabilitación y soporte nutricional en el anciano frágil. Revisión de la medicación, incluidos los inhibidores de la enzima convertidora y los sedantes.',
      tx_farmacologico: 'EPOC: broncodilatadores, corticoide sistémico en pauta corta y ANTIBIÓTICO según los criterios de Anthonisen, sobre todo cuando hay purulencia. ASMA: broncodilatador y corticoide, sin antibiótico salvo evidencia de infección bacteriana. ANCIANO e INMUNODEPRIMIDO: umbral más bajo para tratar, cobertura ajustada al tipo de inmunosupresión y reevaluación precoz.',
      tx_intervencionista: 'Ventilación no invasiva en la exacerbación de EPOC con acidosis respiratoria. Las que correspondan según la complicación.',
      criterios_uci: 'Insuficiencia respiratoria que no responde, acidosis respiratoria progresiva, inestabilidad hemodinámica y deterioro del nivel de conciencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar el diagnóstico a las 48 a 72 horas si no hay mejoría. En el anciano, vigilar el delirium, la movilidad y la nutrición, que condicionan el desenlace tanto como la propia infección.',
      seguimiento_ambulatorio: 'Revisión precoz tras la exacerbación, actualización de vacunas, revisión de la técnica inhalatoria y del plan de acción. Una exacerbación es siempre una oportunidad para revisar el tratamiento de base.',
      pronostico: 'Peor que en el adulto sano en todos estos grupos. En la EPOC, cada exacerbación acelera el deterioro funcional. En el anciano, la neumonía se asocia a pérdida funcional que con frecuencia no se recupera del todo.',
      algoritmo: ['Comprobar si el paciente tiene enfermedad pulmonar crónica de base', 'Si es EPOC, aplicar los criterios de Anthonisen y no la regla del adulto sano', 'Si es asma, tratar la exacerbación, no la bronquitis', 'En el anciano, recordar que la fiebre y la taquipnea pueden faltar', 'Bajar mucho el umbral para pedir radiografía en estos grupos', 'Hacer pulsioximetría siempre', 'En el inmunodeprimido, ampliar el estudio microbiológico', 'Valorar tomografía si la radiografía es normal y la sospecha persiste', 'Reevaluar a las 48 a 72 horas si no mejora', 'Aprovechar el episodio para revisar vacunas y tratamiento de base']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La tos aguda es el escenario donde más antibióticos innecesarios se prescriben, y a la vez uno donde se pierden diagnósticos graves por no medir cuatro constantes. Lo que sigue es la lista que evita los dos errores opuestos.',
    parametros: ['Preguntar SIEMPRE cuanto lleva tosiendo: la duración ordena todo el tema', 'Medir temperatura, frecuencia cardiaca, FRECUENCIA RESPIRATORIA y saturación', 'Auscultar buscando FOCALIDAD, no roncus difusos', 'Buscar signos de alarma: hemoptisis, pérdida de peso, disnea, disfonia', 'No usar el color del esputo como criterio para prescribir antibiótico', 'No dar antibiótico en la bronquitis aguda del adulto sano', 'Explicar que la tos dura una MEDIA DE UNAS 3 SEMANAS', 'Pedir radiografía si hay constantes alteradas, focalidad, edad avanzada o comorbilidad', 'Ante tos de más de 2 semanas, pensar en TOS FERINA y preguntar por lactantes', 'En la tos crónica, retirar tabaco e inhibidor de la enzima convertidora y hacer radiografía', 'Esperar más de 4 semanas antes de descartar el inhibidor como causa', 'Ante un paciente etiquetado de bronquitis que empeora, revisar el DIAGNÓSTICO'],
    criterios_uci_general: 'La bronquitis aguda no ingresa. Los criterios corresponden a los diagnósticos que se presentan como tos aguda: neumonía grave, embolia pulmonar de riesgo alto, exacerbación de EPOC con acidosis respiratoria, crisis asmática grave e insuficiencia cardiaca descompensada.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: vacunación antigripal anual y antineumococica según indicación, vacunación frente a la tos ferina con dosis de recuerdo en el adulto y en el TERCER TRIMESTRE del embarazo para proteger al lactante, higiene de manos, y abandono del tabaco. Secundaria: identificar precozmente los casos que no son bronquitis aguda mediante constantes y auscultación, y sospechar tos ferina en la tos de más de dos semanas para cortar la transmisión. Terciaria: uso prudente de antibióticos con explicación, receta diferida y red de seguridad, que reduce el consumo sin empeorar los desenlaces; y revisión del tratamiento de base tras cada exacerbación en el paciente con enfermedad pulmonar crónica.'
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
  'Bronquitis aguda': { definicion: [1, 2, 6], criterios_dx: [1, 2, 6], laboratorio: [1, 2, 6], tx_farmacologico: [1, 2, 6] },
  'Tos ferina y tos subaguda': { definicion: [8, 9, 11], criterios_dx: [8, 9, 11], laboratorio: [8, 9, 11], tx_farmacologico: [8, 9, 11] },
  'Tos aguda: lo que no puede fallarse': { definicion: [4, 7], criterios_dx: [4, 7], laboratorio: [4, 7], tx_farmacologico: [4, 7] },
  'Tos crónica: el enfoque por causas': { definicion: [5, 12, 13, 15], criterios_dx: [5, 12, 13, 15], laboratorio: [5, 12, 13, 15], tx_farmacologico: [5, 12, 13, 15] },
  'Uso prudente de antibióticos en la infección respiratoria aguda': { definicion: [3, 10, 16], criterios_dx: [3, 10, 16], laboratorio: [3, 10, 16], tx_farmacologico: [3, 10, 16] },
  'Situaciones especiales: EPOC, asma, ancianos e inmunodeprimidos': { definicion: [3, 7, 14], criterios_dx: [3, 7, 14], laboratorio: [3, 7, 14], tx_farmacologico: [3, 7, 14] }
};
export const estigmasTitulo = 'Pistas que orientan ante un paciente que consulta por tos';
export const estigmas = [
  { s: 'Esputo verde o amarillo', p: 'NO indica infección bacteriana', photo: null, desc: 'El color se debe a la mieloperoxidasa de los neutrófilos, que acuden igual en una infección virica. Es el malentendido que más recetas innecesarias genera, y desmontarlo con el paciente es más útil que cualquier argumento sobre resistencias.' },
  { s: 'Tos que lleva 12 días', p: 'Es lo esperable', photo: null, desc: 'La tos de la bronquitis aguda dura una media de unas 3 semanas. Decirselo al paciente en la primera consulta ajusta su expectativa y es una de las intervenciones que más reduce la presión por recibir antibióticos.' },
  { s: 'Roncus difusos que cambian con la tos', p: 'Compatible con bronquitis', photo: null, desc: 'Reflejan secreciones en la via aérea grande y se modifican al toser. Lo que hay que buscar activamente es lo contrario: crepitantes o soplo FOCALES, que apuntan a neumonía y cambian la conducta.' },
  { s: 'Frecuencia respiratoria mayor de 24', p: 'La constante que más se omite', photo: null, desc: 'Es de los datos que mejor discriminan neumonía de bronquitis y a la vez el que menos se mide en la práctica. Contarla durante un minuto cuesta poco y cambia decisiones.' },
  { s: 'Vómito después de un acceso de tos', p: 'Sugiere tos ferina', photo: null, desc: 'Junto con el gallo inspiratorio, es de los datos que más aumentan la probabilidad de tos ferina en un adulto con tos prolongada. Obliga a preguntar por contacto con lactantes y a plantear tratamiento y profilaxis.' },
  { s: 'Tos nocturna sin fiebre de 4 semanas', p: 'Tos ferina del adulto', photo: null, desc: 'En el adulto la tos ferina rara vez da el cuadro clásico del niño: suele ser solo una tos persistente, seca y de predominio nocturno. El adulto es el reservorio y la fuente de contagio de los lactantes.' },
  { s: 'Tos seca en un paciente con hipertensión', p: 'Mirar la medicación', photo: null, desc: 'Los inhibidores de la enzima convertidora producen tos seca en una proporción nada despreciable de pacientes, y puede empezar meses después de iniciar el fármaco. Tras retirarlo, la tos puede tardar más de 4 semanas en desaparecer.' },
  { s: 'Carraspeo con sensación de moco que baja', p: 'Via aérea superior', photo: null, desc: 'El síndrome de tos de via aérea superior es una de las tres causas principales de tos crónica. El aspecto en empedrado de la pared faríngea posterior lo apoya, y la respuesta al tratamiento empírico lo confirma.' },
  { s: 'Tos como único síntoma, sin sibilancias', p: 'Asma variante tusigena', photo: null, desc: 'El asma puede manifestarse solo como tos, sin sibilancias ni disnea. Por eso una espirometría normal no basta y hay que hacer prueba de provocación bronquial, cuyo valor principal es descartar el asma cuando es negativa.' },
  { s: 'Tos crónica sin pirosis', p: 'No descarta el reflujo', photo: null, desc: 'El reflujo puede producir tos sin síntomas digestivos, y por eso se descarta injustamente. Merece una prueba terapéutica de varias semanas con medidas posturales y dietéticas antes de darla por fallida.' },
  { s: 'Tos con esputo eosinofilico y espirometría normal', p: 'Bronquitis eosinofílica', photo: null, desc: 'Recuento elevado de eosinófilos en esputo inducido con espirometría y provocación normales. Se pasa por alto justamente porque las pruebas de asma salen bien, y responde muy bien al corticoide inhalado.' },
  { s: 'Cambio del patrón de tos en un fumador', p: 'Signo de alarma', photo: null, desc: 'Es la presentación más fácil de pasar por alto del cáncer de pulmón, porque el paciente ya tosia y el cambio se atribuye a un catarro. Obliga a radiografía y, si es normal y la sospecha persiste, a tomografía.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación de la tos por duración': [4],
  'Decisión de antibiótico en la tos aguda (calculadora disponible)': [2, 3],
  'Indicación de radiografía de tórax (calculadora disponible)': [7],
  'Sospecha de tos ferina (calculadora disponible)': [8, 9],
  'Enfoque de la tos crónica (calculadora disponible)': [5, 4],
  'Criterios de Anthonisen para la exacerbación de EPOC': [3]
};
export const escalaCalc = {
  'Decisión de antibiótico en la tos aguda (calculadora disponible)': 'antibiotico-tos-aguda',
  'Indicación de radiografía de tórax (calculadora disponible)': 'radiografia-tos',
  'Sospecha de tos ferina (calculadora disponible)': 'tos-ferina',
  'Enfoque de la tos crónica (calculadora disponible)': 'tos-cronica'
};
export const compGroups = [
  { name: 'La tos aguda', items: ['Bronquitis aguda', 'Tos aguda: lo que no puede fallarse', 'Uso prudente de antibióticos en la infección respiratoria aguda'] },
  { name: 'Cuando se alarga', items: ['Tos ferina y tos subaguda', 'Tos crónica: el enfoque por causas'] },
  { name: 'Fuera de la regla general', items: ['Situaciones especiales: EPOC, asma, ancianos e inmunodeprimidos'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son la tos aguda: el diagnóstico más frecuente, los diagnósticos que no pueden fallarse detrás de ese mismo síntoma, y la decisión sobre el antibiótico, que es donde se juega el tema en la práctica diaria. Las dos siguientes son lo que ocurre cuando la tos se alarga: la franja subaguda, donde vive la tos ferina del adulto, y la tos crónica, que si tiene un algoritmo ordenado. La última recoge a los pacientes en los que la regla del adulto sano no se aplica.';
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
  root: { title: 'BRONQUITIS AGUDA Y TOS', color: '#7a5a3a', target: 'definicion' },
  branches: [
    { title: 'CUANTO LLEVA', sub: 'La pregunta que ordena todo', color: '#7a5a3a', target: 'clasificacion', leaves: [
      { title: 'Menos de 3 semanas', sub: 'Aguda: descartar lo grave', color: '#8c3a34', target: 'complicaciones' },
      { title: 'De 3 a 8 semanas', sub: 'Subaguda: pensar en tos ferina', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Más de 8 semanas', sub: 'Crónica: hay algoritmo', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Signos de alarma', sub: 'Estudiar sea cual sea el tiempo', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'HAY NEUMONÍA?', sub: 'La pregunta que si importa', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Cuatro constantes', sub: 'Temperatura, FC, FR y auscultación', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Las cuatro normales', sub: 'Neumonía muy improbable', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Umbral más bajo', sub: 'Anciano, EPOC, inmunodeprimido', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'La FR es la que se omite', sub: 'Y la que más informa', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'ANTIBIOTICO?', sub: 'Casi siempre no', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Virica en más del 90%', sub: 'Medio dia menos de tos', color: '#3f6b52', target: 'complicaciones' },
      { title: 'El esputo verde no cuenta', sub: 'Es mieloperoxidasa', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Decir "3 semanas"', sub: 'Baja la presión por recetar', color: '#7a5a3a', target: 'complicaciones' },
      { title: 'Receta diferida', sub: 'Si la presión es alta', color: '#3d5a73', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [8, 13], no_invasivos: [2, 5, 7], imagen: [4, 7] };
export const clasificacionCite = [3, 4, 5, 8];
export const seguimientoCite = [3, 4, 6];
