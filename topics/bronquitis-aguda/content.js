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
  subtitulo: 'Modulo 60 · Medicina Interna',
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
    <strong style="color:#7a5a3a;">Lo primero que hay que preguntar ante una tos no es que la produce, sino CUANTO LLEVA.</strong> <span style="color:var(--ink-dim);">La duracion divide el problema en tres escenarios con causas, estudio y tratamiento completamente distintos, y saltarse esa pregunta es lo que lleva a pedir pruebas equivocadas y a dar antibioticos que no hacen falta.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">AGUDA<br><span style="font-weight:400;font-size:8.5px;">menos de 3 semanas</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La inmensa mayoria son infecciones VIRICAS de la via aerea. El trabajo aqui no es diagnosticar el virus sino <strong style="color:var(--ink);">descartar lo que no puede fallarse</strong>: neumonia, embolia pulmonar, insuficiencia cardiaca, asma, cuerpo extra&#241;o y exacerbacion de EPOC.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">SUBAGUDA<br><span style="font-weight:400;font-size:8.5px;">de 3 a 8 semanas</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La mayoria son <strong style="color:var(--ink);">POSTINFECCIOSAS</strong> y se resuelven solas. Lo que hay que hacer aqui es acordarse de la <strong>TOS FERINA</strong>, que en el adulto no da el cuadro clasico, y descartar asma, rinosinusitis y un debut de las causas de tos cronica.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">CRONICA<br><span style="font-weight:400;font-size:8.5px;">mas de 8 semanas</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Aqui si hay un algoritmo: quitar el <strong style="color:var(--ink);">TABACO</strong>, quitar el <strong style="color:var(--ink);">INHIBIDOR DE LA ENZIMA CONVERTIDORA</strong>, hacer <strong>radiografia de torax</strong>, y despues buscar las tres causas principales, que con frecuencia coexisten.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Y por encima de la duracion, los signos de ALARMA</strong>, que obligan a estudiar sea cual sea el tiempo de evolucion: <strong>hemoptisis</strong>, perdida de peso, fiebre persistente, disnea progresiva, disfonia, disfagia, adenopatias, y el <strong>cambio del patron de tos en un fumador</strong>, que es la presentacion mas facil de pasar por alto del cancer de pulmon.
  </div>
</div>`;

const bronquitisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">QUE ES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Inflamacion transitoria de la via aerea grande, <strong style="color:var(--ink);">VIRICA en mas del 90% de los casos</strong>, en un paciente <strong>sin enfermedad pulmonar cronica</strong> y sin neumonia. Tos de menos de 3 semanas, con o sin expectoracion, a veces con sibilancias y molestia retroesternal.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">QUE NO ES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">No es una <strong style="color:var(--ink);">neumonia</strong> (constantes normales y auscultacion sin focalidad). No es una <strong>exacerbacion de EPOC</strong>, que se maneja aparte y si lleva antibiotico segun criterios. Y no es una <strong>tos ferina</strong>, que hay que sospechar si dura mas de 2 semanas.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LOS DOS MALENTENDIDOS QUE GENERAN CASI TODAS LAS RECETAS INNECESARIAS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. "El esputo es verde, luego es bacteriano".</strong> FALSO. El color se debe a la mieloperoxidasa de los neutrofilos, que llegan igual en una infeccion virica. La purulencia del esputo NO distingue virico de bacteriano y no es indicacion de antibiotico.<br><strong style="color:var(--ink);">2. "Lleva 12 dias tosiendo, algo va mal".</strong> FALSO. La tos de la bronquitis aguda dura una <strong>MEDIA DE UNAS 3 SEMANAS</strong>. Decirselo al paciente al principio es una de las intervenciones que mas reduce la presion por recibir antibioticos, porque ajusta su expectativa antes de que se frustre.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Que aporta el antibiotico aqui.</strong> Los ensayos muestran una reduccion de aproximadamente <strong>medio dia</strong> de tos, a costa de efectos adversos digestivos y cutaneos, de seleccion de resistencias y de reforzar en el paciente la idea de que la proxima vez tambien lo necesitara. El balance es desfavorable y por eso <strong>no esta indicado</strong>.
    </div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Que si se puede ofrecer.</strong> Explicacion de la duracion esperable, analgesicos y antitermicos, hidratacion, miel en mayores de un a&#241;o, y <strong>broncodilatador solo si hay sibilancias</strong> o broncoespasmo demostrable. Y una <strong>receta diferida</strong> con instrucciones claras cuando la presion es alta: reduce el consumo de antibioticos frente a la prescripcion inmediata.
    </div>
  </div>
</div>`;

const radiografiaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">La pregunta practica no es "es virico o bacteriano", sino "hay o no hay NEUMONIA".</strong> <span style="color:var(--ink-dim);">Y para eso hay cuatro datos de cabecera que se miden en un minuto y que hacen la mayor parte del trabajo.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">TEMPERATURA</strong><br>mayor de 38 grados</div>
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">FRECUENCIA CARDIACA</strong><br>mayor de 100 por minuto</div>
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">FRECUENCIA RESPIRATORIA</strong><br>mayor de 24 por minuto</div>
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;text-align:center;color:var(--ink-dim);"><strong style="color:#8c3a34;">AUSCULTACION FOCAL</strong><br>crepitantes o soplo localizados</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">NINGUNO presente</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La neumonia es <strong style="color:var(--ink);">muy improbable</strong> en un adulto por lo demas sano. No hace falta radiografia, no hace falta antibiotico, y lo que hace falta es una explicacion buena sobre la duracion esperable de la tos y sobre cuando volver.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">ALGUNO presente</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">RADIOGRAFIA DE TORAX</strong>. Y si confirma neumonia, se maneja como tal, con evaluacion de la gravedad y antibiotico dirigido, que ya es otro tema.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Con umbral MAS BAJO para pedir radiografia:</strong> ancianos, en quienes la fiebre y la taquipnea pueden faltar y la presentacion puede ser solo confusion o caidas; inmunodeprimidos; pacientes con insuficiencia cardiaca o EPOC, donde la clinica se solapa; y cualquier paciente con <strong>hipoxemia</strong>, alteracion del nivel de conciencia o hipotension, que ya no es una consulta por tos sino por una enfermedad grave.
  </div>
</div>`;

const cronicaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 9px;background:#3d5a7308;margin-bottom:6px;">
    <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">LO PRIMERO, ANTES DE NINGUN ESTUDIO</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. Retirar el TABACO.</strong> Es causa suficiente y su retirada mejora la tos en semanas.<br><strong style="color:var(--ink);">2. Retirar el INHIBIDOR DE LA ENZIMA CONVERTIDORA.</strong> Produce tos seca en una proporcion nada despreciable de pacientes, puede empezar meses despues de iniciarlo, y al retirarlo la tos puede tardar <strong>hasta 4 semanas o mas</strong> en desaparecer, lo que hace que se descarte como causa antes de tiempo.<br><strong style="color:var(--ink);">3. RADIOGRAFIA DE TORAX.</strong> Barata y obligada: descarta lo que no puede fallarse.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1.5px solid #7a5a3a;border-radius:8px;padding:6px 8px;background:#7a5a3a08;">
      <div style="font-weight:700;color:#7a5a3a;text-align:center;margin-bottom:3px;">VIA AEREA SUPERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Goteo posnasal, carraspeo, sensacion de moco que baja, empedrado en la pared faringea. Se trata de forma empirica con antihistaminico y corticoide nasal, y la respuesta confirma el diagnostico.</div>
    </div>
    <div style="border:1.5px solid #3f7a4a;border-radius:8px;padding:6px 8px;background:#3f7a4a08;">
      <div style="font-weight:700;color:#3f7a4a;text-align:center;margin-bottom:3px;">ASMA</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Incluida la <strong>variante tusigena</strong>, en la que la tos es el UNICO sintoma y no hay sibilancias. Espirometria con prueba broncodilatadora y, si es normal, prueba de provocacion bronquial. Responde a corticoide inhalado.</div>
    </div>
    <div style="border:1.5px solid #8c5a2e;border-radius:8px;padding:6px 8px;background:#8c5a2e08;">
      <div style="font-weight:700;color:#8c5a2e;text-align:center;margin-bottom:3px;">REFLUJO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Puede cursar <strong>SIN pirosis</strong>, lo que hace que se descarte injustamente. Medidas posturales y dieteticas mas inhibidor de la bomba de protones, con una prueba terapeutica de varias semanas antes de darla por fallida.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">La cuarta causa que hay que recordar.</strong> La <strong>BRONQUITIS EOSINOFILICA no asmatica</strong>: esputo inducido con eosinofilos, espirometria y provocacion NORMALES, y respuesta excelente al corticoide inhalado. Se pasa por alto justamente porque las pruebas de asma salen bien.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Las causas COEXISTEN con frecuencia.</strong> Por eso una respuesta parcial a un tratamiento no descarta esa causa: puede haber dos o tres a la vez. El enfoque es secuencial y acumulativo, tratando una causa sin retirar lo que ya ha funcionado en parte, y reevaluando con un tiempo de prueba suficiente en cada escalon.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La tos es uno de los motivos de consulta mas frecuentes de la medicina, y a la vez uno de los que mas antibioticos innecesarios genera. El tema se ordena con una pregunta que se hace antes que ninguna otra: <strong>cuanto lleva tosiendo</strong>. La duracion divide el problema en tres escenarios con causas, estudio y tratamiento distintos, y la <strong>bronquitis aguda</strong> es el diagnostico mas comun del primero de ellos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: la tos por duracion.</strong></p>
<p style="margin:0 0 12px;">Menos de 3 semanas es <strong>tos aguda</strong>, casi siempre virica, donde el trabajo no es identificar el virus sino descartar lo que no puede fallarse. De 3 a 8 semanas es <strong>tos subaguda</strong>, en su mayoria postinfecciosa, y es la franja donde hay que acordarse de la tos ferina. Por encima de 8 semanas es <strong>tos cronica</strong>, y ahi si existe un algoritmo ordenado. Por encima de todo estan los signos de alarma, que obligan a estudiar sea cual sea la duracion.</p>
${figBlock('Figura 1', 'Aguda, subaguda y cronica: tres escenarios distintos', duracionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: la bronquitis aguda y sus dos malentendidos.</strong></p>
<p style="margin:0 0 12px;">Es una inflamacion transitoria de la via aerea grande, <strong>virica en mas del 90% de los casos</strong>, en un paciente sin enfermedad pulmonar cronica y sin neumonia. Casi todas las recetas innecesarias que genera salen de dos ideas equivocadas: que el esputo verde indica infeccion bacteriana, y que una tos de dos semanas es anormal. Ninguna de las dos es cierta, y desmontarlas con el paciente es mas eficaz que cualquier argumento sobre resistencias.</p>
${figBlock('Figura 2', 'Bronquitis aguda: que es, que no es y los dos malentendidos', bronquitisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la pregunta que si importa es si hay neumonia.</strong></p>
<p style="margin:0 0 12px;">La decision practica no es distinguir virico de bacteriano, cosa que no se puede hacer con la clinica, sino decidir si hace falta una <strong>radiografia de torax</strong>. Cuatro datos de cabecera hacen casi todo el trabajo: temperatura, frecuencia cardiaca, frecuencia respiratoria y auscultacion focal. Con los cuatro normales en un adulto sano, la neumonia es muy improbable. Y hay grupos en los que el umbral para pedir la radiografia baja mucho.</p>
${figBlock('Figura 3', 'Cuatro datos de cabecera y la decision de radiografiar', radiografiaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la tos cronica tiene algoritmo.</strong></p>
<p style="margin:0 0 12px;">Por encima de 8 semanas, el orden es: retirar el <strong>tabaco</strong>, retirar el <strong>inhibidor de la enzima convertidora</strong> (cuya tos puede tardar mas de un mes en ceder tras la retirada) y hacer una <strong>radiografia de torax</strong>. Despues, en el no fumador con radiografia normal, se buscan las tres causas principales, que con frecuencia coexisten, mas una cuarta que se pasa por alto porque las pruebas de asma salen normales.</p>
${figBlock('Figura 4', 'Tos cronica: el orden del estudio y las causas principales', cronicaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dar antibiotico en una bronquitis aguda de un adulto sano. No usar el color del esputo como criterio para prescribir. No decirle al paciente que en una semana estara bien, porque volvera a los diez dias convencido de que necesita algo mas. No pedir radiografia a todos, pero tampoco dejar de pedirla cuando hay constantes alteradas, focalidad, edad avanzada o comorbilidad. No olvidar la tos ferina en la tos de mas de dos semanas, sobre todo si hay contacto con lactantes. No descartar el reflujo porque no haya pirosis, ni el asma porque no haya sibilancias. No dar por descartado el inhibidor de la enzima convertidora a las dos semanas de retirarlo. Y no atribuir a una causa banal el cambio del patron de tos de un fumador, que es la presentacion mas facil de pasar por alto del cancer de pulmon.</p>`;

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
      tituloB: 'Lo que obliga a mirar mas alla',
      compensada: 'TOS de menos de 3 semanas, al principio seca y despues productiva, precedida a menudo de sintomas de via aerea superior (rinorrea, odinofagia, malestar general) que ya han mejorado cuando la tos persiste. Puede haber sibilancias, molestia retroesternal con la tos y expectoracion clara, amarilla o verdosa, sin que ese color signifique nada sobre el origen. Febricula en los primeros dias que despues cede. La exploracion es normal o muestra roncus difusos que se modifican con la tos, sin focalidad.',
      descompensada: 'Los datos que sacan al paciente de la categoria de bronquitis aguda: FIEBRE de mas de 38 grados mantenida, taquicardia de mas de 100, taquipnea de mas de 24, hipoxemia, crepitantes o soplo FOCALES en la auscultacion, dolor pleuritico, alteracion del nivel de conciencia o hipotension. Y los signos de alarma que obligan a estudiar sea cual sea la duracion: HEMOPTISIS, perdida de peso, disnea progresiva, disfonia, disfagia, adenopatias y el cambio del patron de tos en un fumador.'
    },
    laboratorio: [
      { prueba: 'Ninguna prueba de rutina', utilidad: 'En un adulto sano con tos aguda, constantes normales y auscultacion sin focalidad, NO hace falta ninguna prueba. Ni analitica, ni radiografia, ni estudio microbiologico. Pedirlas por sistema alarga la consulta, encuentra hallazgos irrelevantes y con frecuencia acaba justificando un antibiotico que no hacia falta.' },
      { prueba: 'Reaccion en cadena de la polimerasa para Bordetella pertussis', utilidad: 'Ante tos de mas de 2 semanas con paroxismos, gallo inspiratorio, vomito postusigeno o contacto conocido. Su rendimiento es maximo en las primeras 3 a 4 semanas de tos y cae despues, porque la bacteria desaparece aunque la tos persista por el da&#241;o ya causado.' },
      { prueba: 'Serologia frente a Bordetella pertussis', utilidad: 'Util cuando la tos lleva mas de 3 o 4 semanas y la reaccion en cadena de la polimerasa ya ha perdido rendimiento. Su interpretacion se complica en vacunados recientes, de modo que hay que conocer el antecedente vacunal antes de pedirla.' },
      { prueba: 'Pruebas moleculares para virus respiratorios', utilidad: 'No estan indicadas de rutina en el paciente ambulatorio sano, porque el resultado no cambia el manejo. Si tienen sentido en el paciente hospitalizado, en el inmunodeprimido, en periodo epidemico cuando existe tratamiento antiviral, y para decidir medidas de aislamiento.' },
      { prueba: 'Hemograma y proteina C reactiva', utilidad: 'No de rutina. Pueden ayudar cuando hay duda razonable sobre una neumonia y la radiografia no es concluyente o no esta disponible. Un valor normal apoya el origen virico, pero ninguno de los dos distingue de forma fiable virico de bacteriano por si solo.' },
      { prueba: 'Procalcitonina', utilidad: 'Puede reducir la prescripcion de antibioticos cuando se usa dentro de un protocolo estructurado, sobre todo en el ambito hospitalario. No se usa de rutina en la consulta ambulatoria y no debe sustituir a la valoracion clinica.' },
      { prueba: 'Esputo inducido con recuento celular', utilidad: 'En la TOS CRONICA con espirometria y provocacion normales. Un recuento elevado de eosinofilos define la bronquitis eosinofilica no asmatica, que responde muy bien al corticoide inhalado y que se pasa por alto justamente porque las pruebas de asma salen bien.' }
    ],
    no_invasivos: [
      { metodo: 'Decision de antibiotico en la tos aguda (calculadora disponible)', interpretacion: 'Comprueba si el paciente encaja en una bronquitis aguda de adulto sano, en cuyo caso el antibiotico no esta indicado, o si hay alguna de las situaciones que si lo justifican.', cutoff: 'Adulto sano, constantes normales y sin focalidad: NO antibiotico' },
      { metodo: 'Indicacion de radiografia de torax (calculadora disponible)', interpretacion: 'Cuatro datos de cabecera: temperatura mayor de 38, frecuencia cardiaca mayor de 100, frecuencia respiratoria mayor de 24 y auscultacion focal. Con los cuatro normales en un adulto sano, la neumonia es muy improbable.', cutoff: 'Cualquiera de los cuatro presente, o edad avanzada o comorbilidad: radiografia' },
      { metodo: 'Sospecha y manejo de la tos ferina (calculadora disponible)', interpretacion: 'Combina la duracion de la tos con los datos clinicos caracteristicos y decide entre reaccion en cadena de la polimerasa y serologia, ademas de la profilaxis de contactos.', cutoff: 'Reaccion en cadena de la polimerasa en las primeras 3 a 4 semanas; serologia despues' },
      { metodo: 'Enfoque de la tos cronica (calculadora disponible)', interpretacion: 'Ordena los pasos: retirar tabaco, retirar el inhibidor de la enzima convertidora, hacer radiografia y despues buscar las tres causas principales, que con frecuencia coexisten.', cutoff: 'Tos de mas de 8 semanas' },
      { metodo: 'Espirometria con prueba broncodilatadora', interpretacion: 'En la tos subaguda persistente y en toda tos cronica. Detecta el asma, incluida la variante tusigena, en la que la tos es el unico sintoma y no hay sibilancias.', cutoff: 'Mejoria del FEV1 del 12% y de 200 mL tras broncodilatador: prueba positiva' },
      { metodo: 'Prueba de provocacion bronquial', interpretacion: 'Cuando la espirometria es normal y persiste la sospecha de asma. Su valor principal es el NEGATIVO: una provocacion normal hace el asma muy improbable y evita tratamientos empiricos prolongados e inutiles.', cutoff: 'Caida del FEV1 del 20% con la concentracion establecida: positiva' },
      { metodo: 'Escala visual analogica y cuestionarios de tos', interpretacion: 'Miden la intensidad y el impacto de la tos sobre la vida del paciente, que es lo que le importa y lo que peor se recoge. Utiles sobre todo para seguir la respuesta al tratamiento en la tos cronica.', cutoff: 'Sin umbral; se compara con el valor previo del propio paciente' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'La prueba clave de la tos aguda, aunque NO se pide a todos: solo si hay alteracion de constantes, focalidad en la auscultacion, edad avanzada, comorbilidad o signos de alarma. En la tos cronica se pide SIEMPRE, aunque el paciente este por lo demas bien.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'No de rutina. Indicada ante signos de alarma con radiografia normal, sospecha de bronquiectasias, de enfermedad intersticial o de lesion no visible en la radiografia. En un fumador con cambio del patron de tos y radiografia normal, sigue siendo razonable hacerla.' },
      { modalidad: 'Exploracion de la via aerea superior', hallazgos: 'Aspecto en empedrado de la pared faringea posterior, moco descendente y edema de cornetes en el sindrome de tos de via aerea superior. Es una exploracion de segundos que orienta hacia la causa mas frecuente de tos cronica.' },
      { modalidad: 'Nasofibroscopia y laringoscopia', hallazgos: 'Ante disfonia, sensacion de cuerpo extra&#241;o o sospecha de patologia laringea. La disfonia persistente en un fumador es un signo de alarma que obliga a visualizar la laringe, no a tratar la tos de forma empirica.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion que gobierna todo el tema es la <strong>duracion</strong>: tos AGUDA de menos de 3 semanas, SUBAGUDA de 3 a 8 semanas y CRONICA de mas de 8 semanas. Cada franja tiene causas, estudio y tratamiento distintos. Sobre esa division se superpone la busqueda de <strong>signos de alarma</strong>, que obligan a estudiar con independencia del tiempo de evolucion, y en la tos aguda una segunda pregunta operativa: si hay o no <strong>neumonia</strong>, que es la que decide la radiografia y el antibiotico.`,
    escalas: [
      { nombre: 'Clasificacion de la tos por duracion', componentes: 'Tiempo de evolucion de la tos.', formula: 'AGUDA: menos de 3 semanas. SUBAGUDA: de 3 a 8 semanas. CRONICA: mas de 8 semanas.', interpretacion: 'La aguda es casi siempre virica y el trabajo es descartar lo grave. La subaguda es en su mayoria postinfecciosa y es la franja de la tos ferina. La cronica tiene un algoritmo propio que empieza por retirar el tabaco y el inhibidor de la enzima convertidora.' },
      { nombre: 'Decision de antibiotico en la tos aguda (calculadora disponible)', componentes: 'Presencia de enfermedad pulmonar cronica, constantes vitales, auscultacion, edad, inmunosupresion y sospecha de tos ferina.', formula: 'En el adulto sano con constantes normales y sin focalidad, el antibiotico NO esta indicado.', interpretacion: 'Los ensayos muestran una reduccion de aproximadamente medio dia de tos a costa de efectos adversos y de resistencias. Las excepciones son la sospecha de tos ferina, la exacerbacion de EPOC con criterios, la sospecha de neumonia y el paciente inmunodeprimido.' },
      { nombre: 'Indicacion de radiografia de torax (calculadora disponible)', componentes: 'Temperatura, frecuencia cardiaca, frecuencia respiratoria y auscultacion focal, mas edad y comorbilidad.', formula: 'Cualquiera de los cuatro alterado obliga a radiografia. Con los cuatro normales en un adulto sano, la neumonia es muy improbable.', interpretacion: 'El umbral baja mucho en ancianos, en quienes la fiebre y la taquipnea pueden faltar y la presentacion puede ser solo confusion o caidas, en inmunodeprimidos y en pacientes con insuficiencia cardiaca o EPOC, donde la clinica se solapa.' },
      { nombre: 'Sospecha de tos ferina (calculadora disponible)', componentes: 'Duracion de la tos, paroxismos, gallo inspiratorio, vomito postusigeno, ausencia de fiebre y contacto conocido.', formula: 'Ninguno de los datos aislados es suficiente. El vomito postusigeno y el gallo inspiratorio son los que mas aumentan la probabilidad; la ausencia de tos paroxistica es lo que mas la reduce.', interpretacion: 'La prueba depende del tiempo: reaccion en cadena de la polimerasa en las primeras 3 a 4 semanas, serologia despues. El tratamiento con macrolido corta la TRANSMISION pero apenas modifica el curso si se da tarde, y aun asi se indica por el riesgo para los lactantes.' },
      { nombre: 'Enfoque de la tos cronica (calculadora disponible)', componentes: 'Tabaquismo, uso de inhibidores de la enzima convertidora, radiografia de torax y las tres causas principales.', formula: 'Orden fijo: retirar tabaco, retirar el inhibidor, radiografia; despues estudiar via aerea superior, asma y reflujo.', interpretacion: 'La tos por inhibidor puede tardar mas de 4 semanas en ceder tras la retirada, de modo que darla por descartada antes de ese plazo es un error frecuente. Y las tres causas principales COEXISTEN a menudo, por lo que una respuesta parcial no descarta ninguna.' },
      { nombre: 'Criterios de Anthonisen para la exacerbacion de EPOC', componentes: 'Aumento de la disnea, del volumen del esputo y de la purulencia del esputo.', formula: 'Tipo I: los tres. Tipo II: dos de los tres. Tipo III: uno de los tres con algun dato adicional.', interpretacion: 'Sirve para recordar que la exacerbacion de EPOC NO es una bronquitis aguda y se maneja aparte: ahi el antibiotico si esta indicado en los tipos I y II, sobre todo cuando hay purulencia del esputo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Bronquitis aguda',
      color: '#7a5a3a',
      definicion: 'Inflamacion transitoria de la via aerea de gran calibre, de origen virico en mas del 90% de los casos, que cursa con tos de menos de 3 semanas en un paciente SIN enfermedad pulmonar cronica y SIN neumonia.',
      fisiopatologia: 'Un virus respiratorio infecta el epitelio bronquial y produce descamacion, edema de la mucosa e hipersecrecion. La lesion del epitelio deja expuestas las terminaciones nerviosas y aumenta la sensibilidad del reflejo tusigeno, lo que explica que la tos persista semanas despues de que el virus haya desaparecido: no es que la infeccion siga, es que el reflejo esta sensibilizado. Ese mismo mecanismo produce una hiperreactividad bronquial transitoria que justifica las sibilancias de algunos pacientes y su respuesta a los broncodilatadores.',
      epidemiologia: 'Es una de las causas mas frecuentes de consulta ambulatoria y una de las que mas antibioticos innecesarios genera en el mundo. Los agentes habituales son los mismos virus del resfriado (rinovirus, coronavirus, virus respiratorio sincitial, influenza, parainfluenza, adenovirus y metapneumovirus). Entre las causas bacterianas, poco frecuentes, estan <em>Mycoplasma pneumoniae</em>, <em>Chlamydophila pneumoniae</em> y <em>Bordetella pertussis</em>.',
      factores_riesgo: ['Estacion epidemica de virus respiratorios', 'Contacto con ni&#241;os peque&#241;os', 'Tabaquismo activo y pasivo', 'Contaminacion atmosferica y exposicion laboral a irritantes', 'Hacinamiento', 'Edad avanzada', 'Comorbilidad cardiorrespiratoria', 'Inmunosupresion', 'Falta de vacunacion antigripal', 'Reflujo gastroesofagico, que prolonga la tos'],
      clinica: 'Tos de menos de 3 semanas, precedida a menudo de sintomas de via aerea superior que ya han mejorado. Expectoracion clara, amarilla o verdosa, sin que el color signifique nada. Molestia retroesternal con la tos, sibilancias en algunos pacientes y febricula los primeros dias. La exploracion es normal o muestra roncus difusos que cambian con la tos, SIN focalidad.',
      criterios_dx: 'CLINICO y por exclusion: tos aguda con constantes normales y sin focalidad en la auscultacion, en un paciente sin enfermedad pulmonar cronica. No hace falta ninguna prueba. Ver las Figuras 2 y 3 de Definicion.',
      laboratorio: 'Ninguno de rutina. Pruebas moleculares para virus respiratorios solo en el hospitalizado, en el inmunodeprimido, en periodo epidemico con tratamiento antiviral disponible o para decidir aislamiento.',
      imagen: 'Radiografia de torax SOLO si hay alteracion de constantes, focalidad en la auscultacion, edad avanzada, comorbilidad o signos de alarma. No se pide de rutina.',
      complementarios: 'Medir bien las constantes, que es la prueba complementaria mas rentable de todo el cuadro y la que mas veces se hace de forma incompleta: la frecuencia respiratoria es la que mas se omite y la que mas informa.',
      dx_diferencial: 'NEUMONIA, exacerbacion de EPOC o de asma, tos ferina, embolia pulmonar (que puede presentarse como tos y disnea sin dolor pleuritico), insuficiencia cardiaca, rinosinusitis con goteo posnasal, reflujo gastroesofagico, tos por inhibidor de la enzima convertidora y cuerpo extra&#241;o inhalado.',
      tx_medico: 'EXPLICACION de la duracion esperable, que es la intervencion mas eficaz de todo el cuadro: la tos dura una MEDIA DE UNAS 3 SEMANAS, y decirlo al principio evita la consulta de vuelta a los diez dias. Hidratacion, analgesicos y antitermicos, miel en mayores de un a&#241;o. Instrucciones claras de cuando volver.',
      tx_farmacologico: 'NO ANTIBIOTICO en el adulto sano: los ensayos muestran una reduccion de aproximadamente medio dia de tos a costa de efectos adversos y de resistencias. Broncodilatador solo si hay sibilancias o broncoespasmo demostrable. Los antitusigenos tienen evidencia debil. La RECETA DIFERIDA con instrucciones es una alternativa util cuando la presion asistencial es alta.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica. Si el paciente esta grave, el diagnostico es otro.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si un paciente ingresa con esta etiqueta, hay que revisar el diagnostico: probablemente sea una neumonia, una exacerbacion de EPOC, una insuficiencia cardiaca o una embolia.',
      seguimiento_ambulatorio: 'No hace falta revision programada si el paciente entiende la evolucion esperable. Volver si la tos supera las 3 semanas, si aparece fiebre alta o disnea, o si surge cualquier signo de alarma.',
      pronostico: 'Excelente: se resuelve sola. El problema no es la enfermedad sino el da&#241;o que produce su sobretratamiento, en forma de efectos adversos, resistencias y refuerzo de la expectativa de recibir antibiotico la proxima vez.',
      algoritmo: ['Preguntar cuanto lleva tosiendo: menos de 3 semanas es tos aguda', 'Medir bien las constantes, incluida la FRECUENCIA RESPIRATORIA', 'Auscultar buscando FOCALIDAD, no roncus difusos', 'Buscar signos de alarma: hemoptisis, perdida de peso, disnea, disfonia', 'Comprobar que no hay enfermedad pulmonar cronica de base', 'Si todo es normal en un adulto sano: es bronquitis aguda', 'NO pedir radiografia ni analitica', 'NO dar antibiotico', 'EXPLICAR que la tos dura una media de unas 3 semanas', 'Dar instrucciones claras de cuando volver']
    },
    {
      nombre: 'Tos ferina y tos subaguda',
      color: '#8a6a1f',
      definicion: 'Tos de 3 a 8 semanas de duracion, en su mayoria postinfecciosa, dentro de la cual hay que identificar la infeccion por <em>Bordetella pertussis</em>, que en el adulto no da el cuadro clasico del ni&#241;o.',
      fisiopatologia: '<em>Bordetella pertussis</em> se adhiere al epitelio ciliado de la via aerea y produce toxinas que paralizan y destruyen los cilios e inhiben la respuesta inmunitaria local. El resultado es acumulo de moco que no se puede movilizar y una tos paroxistica intensa. La clave para entender el manejo es que buena parte de la tos se debe al DA&#209;O YA CAUSADO y no a la bacteria presente: por eso el antibiotico dado tarde corta la transmision pero apenas modifica el curso, y por eso la tos puede durar meses. En la tos postinfecciosa de otras causas el mecanismo es analogo: sensibilizacion del reflejo tusigeno tras la lesion epitelial.',
      epidemiologia: 'La tos ferina persiste en la poblacion adulta pese a la vacunacion infantil, porque la inmunidad, tanto la vacunal como la natural, DISMINUYE con los a&#241;os. Los adultos con tos prolongada son un reservorio y la fuente principal de contagio de los lactantes no vacunados, que son quienes sufren la enfermedad grave y las muertes.',
      factores_riesgo: ['Vacunacion alejada en el tiempo', 'Contacto con casos o con brotes escolares', 'Trabajo sanitario o educativo', 'Convivencia con lactantes', 'Embarazo, por el riesgo para el recien nacido', 'Ausencia de dosis de recuerdo en el adulto', 'Hacinamiento', 'Inmunosupresion', 'Infeccion respiratoria previa para la tos postinfecciosa', 'Reflujo gastroesofagico y rinitis, que perpetuan la tos'],
      clinica: 'En el ADULTO el cuadro clasico falta con frecuencia: suele ser solo una tos persistente, seca, de predominio NOCTURNO, sin fiebre. Cuando aparecen, los datos mas caracteristicos son los PAROXISMOS de tos, el GALLO INSPIRATORIO y el VOMITO POSTUSIGENO. Puede complicarse con fracturas costales, sincope tusigeno, incontinencia y hernias por el esfuerzo.',
      criterios_dx: 'Sospecha clinica ante tos de mas de 2 semanas con paroxismos, gallo o vomito postusigeno, o contacto conocido. Confirmacion segun el tiempo: reaccion en cadena de la polimerasa en las primeras 3 a 4 semanas, serologia despues. Ver la Figura 1 de Definicion.',
      laboratorio: 'Reaccion en cadena de la polimerasa en muestra nasofaringea, que es la prueba de eleccion en fase precoz. Cultivo en las 2 primeras semanas, muy especifico pero poco sensible. Serologia cuando la tos lleva mas de 3 o 4 semanas, teniendo en cuenta el antecedente vacunal. La linfocitosis marcada es tipica del ni&#241;o y falta con frecuencia en el adulto.',
      imagen: 'Radiografia de torax si hay dudas sobre una neumonia o ante sospecha de complicacion mecanica por los paroxismos, como neumotorax o fractura costal.',
      complementarios: 'DECLARACION del caso segun la normativa local y estudio de contactos, especialmente de lactantes, embarazadas y personal sanitario, que es donde la intervencion tiene mas impacto.',
      dx_diferencial: 'Tos postinfecciosa de otras causas, que es lo mas frecuente en esta franja; asma; sindrome de tos de via aerea superior; reflujo; tos por inhibidor de la enzima convertidora; infeccion por <em>Mycoplasma</em> o <em>Chlamydophila</em>; tuberculosis; y cuerpo extra&#241;o en pacientes seleccionados.',
      tx_medico: 'Informacion de que la tos puede durar semanas o meses pese al tratamiento, porque se debe al da&#241;o ya causado. Medidas de AISLAMIENTO respiratorio durante los primeros 5 dias de tratamiento, y evitar el contacto con lactantes.',
      tx_farmacologico: 'MACROLIDO (azitromicina, claritromicina o eritromicina) para cortar la transmision. Es mas eficaz cuanto antes se da, y despues de las 3 primeras semanas apenas modifica el curso clinico, aunque se sigue indicando por el beneficio en salud publica. PROFILAXIS POSEXPOSICION con el mismo macrolido a los contactos estrechos de riesgo: lactantes, embarazadas en el tercer trimestre y convivientes de ambos. En la tos postinfecciosa, no hay tratamiento especifico y se puede usar un corticoide inhalado o un antitusigeno si la tos es muy limitante.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No en el adulto. En el LACTANTE, la tos ferina puede ser grave y causar apnea, hipertension pulmonar e insuficiencia respiratoria, y es la razon de todo el esfuerzo de prevencion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez ingresa un adulto. Si ingresa, aislamiento respiratorio hasta completar 5 dias de macrolido y valoracion de las complicaciones mecanicas de los paroxismos.',
      seguimiento_ambulatorio: 'Reevaluar si la tos supera las 8 semanas, momento en que pasa a ser tos cronica y cambia el enfoque. Comprobar que se ha completado el estudio de contactos y actualizar la vacunacion.',
      pronostico: 'Bueno en el adulto, aunque la tos puede durar meses y afectar mucho a la calidad de vida y al sue&#241;o. El riesgo real no esta en el paciente sino en los lactantes a los que puede contagiar.',
      algoritmo: ['Ante tos de mas de 2 semanas, preguntar por paroxismos, gallo y vomito postusigeno', 'Preguntar por contacto con casos y por convivencia con lactantes', 'Si lleva menos de 3 o 4 semanas, pedir reaccion en cadena de la polimerasa', 'Si lleva mas, pedir serologia teniendo en cuenta la vacunacion', 'Iniciar MACROLIDO sin esperar el resultado si la sospecha es alta', 'Explicar que la tos puede durar semanas pese al tratamiento', 'Indicar aislamiento durante los primeros 5 dias de tratamiento', 'DECLARAR el caso y estudiar los contactos', 'Dar profilaxis a lactantes, embarazadas y sus convivientes', 'Actualizar la vacunacion, incluida la del tercer trimestre del embarazo']
    },
    {
      nombre: 'Tos aguda: lo que no puede fallarse',
      color: '#8c3a34',
      definicion: 'Conjunto de diagnosticos que pueden presentarse como tos aguda y cuyo retraso tiene consecuencias graves: neumonia, embolia pulmonar, insuficiencia cardiaca, asma, exacerbacion de EPOC y cuerpo extra&#241;o.',
      fisiopatologia: 'La tos es un reflejo inespecifico que se dispara desde receptores repartidos por la faringe, la laringe, la traquea, los bronquios, la pleura, el pericardio, el diafragma, el esofago y el conducto auditivo externo. Esa amplitud anatomica es la razon de que cualquier cosa que irrite alguno de esos territorios produzca tos, y explica por que la tos aguda, por si sola, no permite localizar el problema: hay que buscar los datos que la acompa&#241;an.',
      epidemiologia: 'La neumonia es el diagnostico grave mas frecuente entre los que se presentan como tos aguda. La embolia pulmonar es el que mas se retrasa, porque en una proporcion importante de casos no hay dolor pleuritico ni hemoptisis y el paciente solo refiere tos y falta de aire.',
      factores_riesgo: ['Edad avanzada', 'Comorbilidad cardiaca o pulmonar', 'Inmunosupresion', 'Inmovilizacion, cirugia reciente o cancer, para la embolia', 'Tabaquismo', 'Alcoholismo y alteracion del nivel de conciencia, para la aspiracion', 'Alteracion de la deglucion, para el cuerpo extra&#241;o', 'Falta de vacunacion', 'Institucionalizacion', 'Consulta tardia'],
      clinica: 'Los datos que separan a estos pacientes de una bronquitis aguda: FIEBRE alta mantenida, taquicardia, taquipnea, hipoxemia, crepitantes o soplo FOCALES, dolor pleuritico, ortopnea, edemas, sibilancias generalizadas de nueva aparicion, estridor o tos de inicio BRUSCO durante una comida.',
      criterios_dx: 'No hay unos criterios unicos: lo que hay es una lista de comprobacion. La clave operativa es medir bien las constantes, auscultar buscando focalidad y preguntar de forma dirigida por los signos de alarma. Ver la Figura 3 de Definicion.',
      laboratorio: 'Segun la sospecha: hemograma y proteina C reactiva ante duda de neumonia, dimero D si la probabilidad de embolia es baja o intermedia, peptido natriuretico ante sospecha de insuficiencia cardiaca, y gasometria si hay hipoxemia.',
      imagen: 'RADIOGRAFIA DE TORAX ante constantes alteradas, focalidad, edad avanzada, comorbilidad o signos de alarma. Angiotomografia pulmonar ante sospecha de embolia con dimero D positivo o probabilidad alta. Ecocardiograma ante sospecha de insuficiencia cardiaca.',
      complementarios: 'Pulsioximetria a todo paciente con tos y disnea, que es rapida y detecta hipoxemia inesperada. Electrocardiograma ante sospecha cardiaca o de embolia. Broncoscopia urgente ante sospecha de cuerpo extra&#241;o.',
      dx_diferencial: 'Es en si mismo el diagnostico diferencial de la tos aguda. Conviene tener presente que la tos por inhibidor de la enzima convertidora puede empezar meses despues de iniciar el farmaco y presentarse como tos aparentemente aguda.',
      tx_medico: 'El de cada entidad. Lo que importa aqui es no cerrar la consulta con una etiqueta de bronquitis aguda sin haber comprobado las constantes y la auscultacion, que es donde se pierden estos diagnosticos.',
      tx_farmacologico: 'El de cada entidad. Si se confirma neumonia, antibiotico segun gravedad y factores de riesgo. Si es exacerbacion de EPOC, se aplican los criterios correspondientes. Si es asma, broncodilatador y corticoide.',
      tx_intervencionista: 'Broncoscopia en el cuerpo extra&#241;o. Las que correspondan a la embolia pulmonar o a la insuficiencia cardiaca segun su gravedad.',
      criterios_uci: 'Insuficiencia respiratoria, inestabilidad hemodinamica, alteracion del nivel de conciencia, embolia pulmonar de riesgo alto y neumonia grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'El de la entidad diagnosticada. Ante un paciente etiquetado de bronquitis aguda que no mejora o empeora, lo primero es revisar el diagnostico, no cambiar el antibiotico.',
      seguimiento_ambulatorio: 'Instrucciones claras de cuando volver: fiebre alta persistente, disnea, dolor toracico, hemoptisis o empeoramiento. La red de seguridad forma parte del tratamiento de la tos aguda.',
      pronostico: 'Depende del diagnostico. Lo que empeora el pronostico de todos ellos es el retraso, y el retraso se produce casi siempre por no haber medido las constantes o por no haber preguntado por los signos de alarma.',
      algoritmo: ['Medir SIEMPRE temperatura, frecuencia cardiaca, frecuencia respiratoria y saturacion', 'Auscultar buscando focalidad, no solo roncus', 'Preguntar por dolor pleuritico, ortopnea y edemas', 'Preguntar por hemoptisis, perdida de peso y disfonia', 'Preguntar si la tos empezo de forma brusca durante una comida', 'Valorar factores de riesgo de embolia pulmonar', 'Pedir radiografia si hay cualquier dato alterado', 'Ampliar el estudio segun la sospecha concreta', 'Ante deterioro con etiqueta de bronquitis, revisar el DIAGNOSTICO', 'Dejar instrucciones explicitas de cuando volver']
    },
    {
      nombre: 'Tos cronica: el enfoque por causas',
      color: '#3d5a73',
      definicion: 'Tos de mas de 8 semanas de duracion, que en el no fumador con radiografia normal y sin inhibidores de la enzima convertidora responde en la gran mayoria de los casos a tres causas, con frecuencia coexistentes.',
      fisiopatologia: 'Se entiende hoy como un sindrome de HIPERSENSIBILIDAD del reflejo tusigeno: distintos estimulos (goteo posnasal, inflamacion bronquial eosinofilica, reflujo) sensibilizan las vias aferentes vagales y bajan el umbral de la tos, de modo que despues cualquier estimulo trivial (hablar, reir, un olor, el aire frio) la desencadena. Ese modelo explica por que las causas coexisten y se potencian, por que una respuesta parcial es la regla, y por que en los casos refractarios funcionan farmacos neuromoduladores en lugar de tratamientos dirigidos al pulmon.',
      epidemiologia: 'Es un motivo de consulta muy frecuente y una causa importante de deterioro de la calidad de vida, con sincope tusigeno, incontinencia urinaria, insomnio y aislamiento social. Afecta mas a mujeres de mediana edad, en quienes el reflejo tusigeno es mas sensible.',
      factores_riesgo: ['Tabaquismo activo o pasivo', 'Tratamiento con inhibidor de la enzima convertidora', 'Rinitis alergica y rinosinusitis cronica', 'Asma, incluida la variante tusigena', 'Reflujo gastroesofagico', 'Sexo femenino y edad media de la vida', 'Infeccion respiratoria previa', 'Exposicion ocupacional a irritantes', 'Obesidad, que agrava el reflujo', 'Bronquiectasias o enfermedad pulmonar no diagnosticada'],
      clinica: 'Tos persistente, seca o escasamente productiva, que puede empeorar de noche (asma), al acostarse o tras las comidas (reflujo) o acompa&#241;arse de carraspeo y sensacion de moco que baja (via aerea superior). Frecuentes el sincope tusigeno, la incontinencia urinaria de esfuerzo y el impacto sobre el sue&#241;o y la vida social, que suelen ser lo que mas preocupa al paciente y lo que menos se pregunta.',
      criterios_dx: 'Tos de mas de 8 semanas. El diagnostico es por RESPUESTA AL TRATAMIENTO en la mayoria de los casos, siguiendo un orden fijo. Ver la Figura 4 de Definicion.',
      laboratorio: 'Esputo inducido con recuento celular ante espirometria y provocacion normales, para detectar la bronquitis eosinofilica no asmatica. Fraccion exhalada de oxido nitrico como apoyo de inflamacion eosinofilica cuando esta disponible.',
      imagen: 'RADIOGRAFIA DE TORAX a todos, sin excepcion. Tomografia si hay signos de alarma, sospecha de bronquiectasias o de enfermedad intersticial, o radiografia normal en un fumador con cambio del patron de tos.',
      complementarios: 'Espirometria con prueba broncodilatadora y, si es normal, PRUEBA DE PROVOCACION bronquial, cuyo valor principal es el negativo: descarta el asma y evita tratamientos empiricos prolongados. Nasofibroscopia ante disfonia o sospecha laringea. pH-metria solo en casos seleccionados.',
      dx_diferencial: 'Ademas de las tres causas principales y de la bronquitis eosinofilica: bronquiectasias, cancer de pulmon, enfermedad intersticial, tuberculosis, insuficiencia cardiaca, tos ferina prolongada, apnea del sue&#241;o, cuerpo extra&#241;o, tos somatica y tic tusigeno.',
      tx_medico: 'ABANDONO DEL TABACO, que es causa suficiente por si solo y mejora la tos en semanas. RETIRADA DEL INHIBIDOR DE LA ENZIMA CONVERTIDORA, sustituyendolo por un antagonista del receptor de angiotensina. Medidas antirreflujo. Y en la tos cronica refractaria, TERAPIA DEL HABLA con logopeda, que tiene evidencia y se ofrece poco.',
      tx_farmacologico: 'Tratamiento empirico secuencial: antihistaminico y corticoide nasal para la via aerea superior; corticoide inhalado para el asma y para la bronquitis eosinofilica; inhibidor de la bomba de protones durante varias semanas para el reflujo. En la tos cronica refractaria o inexplicada, neuromoduladores como la GABAPENTINA, que demostro beneficio en un ensayo controlado, o morfina a dosis bajas.',
      tx_intervencionista: 'No aplica en la mayoria. Cirugia antirreflujo en casos muy seleccionados y refractarios.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si hay signos de alarma, el estudio se orienta a la enfermedad de base y no a la tos.',
      seguimiento_ambulatorio: 'Revisiones con tiempo de prueba SUFICIENTE en cada escalon: varias semanas por cada tratamiento empirico. No retirar lo que ha funcionado en parte al a&#241;adir el siguiente, porque las causas coexisten y el efecto es acumulativo.',
      pronostico: 'La mayoria mejora al identificar y tratar las causas. Una minoria queda como tos cronica refractaria o inexplicada, para la que hay hoy opciones especificas con neuromoduladores y terapia del habla, y en la que reconocer el impacto sobre la vida del paciente forma parte del tratamiento.',
      algoritmo: ['Confirmar que la tos lleva mas de 8 semanas', 'Buscar signos de alarma que cambien el enfoque', 'RETIRAR el tabaco', 'RETIRAR el inhibidor de la enzima convertidora y esperar mas de 4 semanas', 'Hacer RADIOGRAFIA DE TORAX a todos', 'Tratar de forma empirica el sindrome de tos de via aerea superior', 'Estudiar asma con espirometria y, si es normal, provocacion', 'Valorar reflujo aunque no haya pirosis', 'Pedir esputo inducido si todo lo anterior es normal', 'En la tos refractaria, valorar terapia del habla y neuromoduladores']
    },
    {
      nombre: 'Uso prudente de antibioticos en la infeccion respiratoria aguda',
      color: '#3f6b52',
      definicion: 'Conjunto de decisiones y de habilidades de comunicacion dirigidas a prescribir antibiotico solo cuando aporta beneficio, en el escenario clinico donde mas se prescriben sin necesidad.',
      fisiopatologia: 'El uso de antibioticos selecciona cepas resistentes tanto en el paciente tratado como en su entorno, y ese efecto es proporcional al consumo. En el individuo, un ciclo de antibiotico altera la microbiota durante meses y aumenta la probabilidad de que la siguiente infeccion sea por un germen menos sensible. A escala poblacional, la infeccion respiratoria aguda es el mayor consumidor de antibioticos ambulatorios, de modo que es tambien donde mayor margen de mejora hay.',
      epidemiologia: 'Una proporcion muy alta de las prescripciones ambulatorias de antibiotico corresponde a infecciones respiratorias agudas, y una parte importante de ellas es innecesaria. La bronquitis aguda es el ejemplo mas claro: virica en mas del 90% de los casos y sin embargo tratada con antibiotico en muchos de ellos.',
      factores_riesgo: ['Expectativa del paciente de recibir antibiotico', 'Percepcion del medico sobre esa expectativa, que suele sobreestimarse', 'Falta de tiempo en la consulta', 'Presion asistencial y consultas fuera de horario', 'Uso del color del esputo como criterio', 'Miedo a la reconsulta o a la queja', 'Ausencia de red de seguridad clara', 'Falta de continuidad asistencial', 'Automedicacion con antibioticos sobrantes', 'Prescripcion previa por el mismo motivo, que crea expectativa'],
      clinica: 'No aplica como cuadro clinico. Lo que si tiene forma clinica es la consulta: el paciente que lleva diez dias tosiendo, ha dormido mal, viene preocupado y espera algo concreto. Reconocer esa expectativa y responder a ella con informacion, en lugar de con una receta, es la habilidad central de esta ficha.',
      criterios_dx: 'No aplica. La regla operativa es que en la bronquitis aguda del adulto sano el antibiotico NO esta indicado, y que las excepciones son concretas y reconocibles.',
      laboratorio: 'La procalcitonina puede reducir la prescripcion dentro de un protocolo estructurado, sobre todo en el hospital. No sustituye a la valoracion clinica ni se usa de rutina en la consulta ambulatoria.',
      imagen: 'La radiografia se pide para descartar neumonia cuando hay datos que la sugieren, no para justificar una decision ya tomada sobre el antibiotico.',
      complementarios: 'RECETA DIFERIDA con instrucciones escritas: se entrega la receta con indicacion de usarla solo si aparecen determinados datos o si no hay mejoria en un plazo concreto. Reduce el consumo de antibioticos frente a la prescripcion inmediata y mantiene la satisfaccion del paciente.',
      dx_diferencial: 'Las excepciones en las que el antibiotico SI esta indicado: neumonia confirmada o muy probable, exacerbacion de EPOC con criterios, sospecha de tos ferina, faringoamigdalitis estreptococica confirmada, rinosinusitis bacteriana con criterios de duracion o de empeoramiento tras mejoria, e infeccion en el paciente inmunodeprimido.',
      tx_medico: 'Explicar la duracion esperable, que es lo que mas reduce la presion. Nombrar el diagnostico (decir "es una bronquitis virica" funciona mejor que decir "no es nada"). Reconocer el malestar del paciente. Ofrecer tratamiento sintomatico concreto. Y dejar una RED DE SEGURIDAD explicita sobre cuando volver.',
      tx_farmacologico: 'Sintomatico: analgesicos y antitermicos, miel en mayores de un a&#241;o, broncodilatador solo si hay sibilancias. Los antitusigenos tienen evidencia debil y no estan exentos de efectos adversos, sobre todo en el anciano.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el hospital, revisar a las 48 a 72 horas toda prescripcion de antibiotico iniciada de forma empirica, ajustarla al cultivo y acortarla cuando el diagnostico se aclare. La desescalada es tan parte del uso prudente como la decision inicial.',
      seguimiento_ambulatorio: 'Consulta de revision solo si es necesaria, con criterios claros. Registrar el motivo de no prescribir, que ayuda en la siguiente consulta y evita que otro profesional prescriba por defecto.',
      pronostico: 'Las intervenciones sobre la comunicacion y las estrategias de receta diferida reducen de forma consistente el consumo de antibioticos sin empeorar los desenlaces clinicos ni la satisfaccion del paciente.',
      algoritmo: ['Confirmar que se trata de una bronquitis aguda de adulto sano', 'Comprobar constantes y auscultacion antes de decidir', 'Descartar las excepciones que si llevan antibiotico', 'NOMBRAR el diagnostico al paciente, no decir que no tiene nada', 'Explicar que la tos dura una media de unas 3 semanas', 'Explicar que el color del esputo no indica infeccion bacteriana', 'Ofrecer tratamiento sintomatico concreto', 'Valorar receta diferida si la presion es alta', 'Dejar una red de seguridad explicita de cuando volver', 'Registrar en la historia el motivo de no prescribir']
    },
    {
      nombre: 'Situaciones especiales: EPOC, asma, ancianos e inmunodeprimidos',
      color: '#8c5a2e',
      definicion: 'Pacientes en los que la tos aguda no puede manejarse con las reglas del adulto sano, porque la enfermedad de base cambia el significado del sintoma, la probabilidad de complicacion y la indicacion de antibiotico.',
      fisiopatologia: 'En la EPOC y en el asma, la infeccion virica actua sobre una via aerea ya inflamada y produce una exacerbacion, no una bronquitis aguda: el mecanismo, el pronostico y el tratamiento son distintos. En el anciano, la respuesta febril y la respuesta inflamatoria estan atenuadas, de modo que una neumonia puede presentarse sin fiebre y con confusion o caidas como unica manifestacion. En el inmunodeprimido, el espectro de microorganismos se amplia y la progresion puede ser rapida, lo que invierte por completo el balance entre observar y estudiar.',
      epidemiologia: 'Las infecciones respiratorias son la causa mas frecuente de exacerbacion de EPOC y de asma. En el anciano, la neumonia es una de las principales causas de ingreso y de mortalidad, y su presentacion atipica es la razon principal del retraso diagnostico en este grupo.',
      factores_riesgo: ['EPOC, sobre todo con FEV1 bajo y exacerbaciones previas', 'Asma mal controlada', 'Edad avanzada y fragilidad', 'Institucionalizacion', 'Inmunosupresion farmacologica, VIH o neoplasia hematologica', 'Insuficiencia cardiaca', 'Diabetes mellitus', 'Bronquiectasias', 'Falta de vacunacion antigripal y antineumococica', 'Deterioro cognitivo, que retrasa la consulta'],
      clinica: 'EPOC: aumento de la disnea, del volumen y de la purulencia del esputo, que son los criterios de Anthonisen. ASMA: tos, sibilancias, opresion y caida del flujo espiratorio maximo. ANCIANO: confusion, caidas, anorexia o descompensacion de otra enfermedad, con FIEBRE Y TAQUIPNEA QUE PUEDEN FALTAR. INMUNODEPRIMIDO: sintomas escasos con progresion rapida, y a menudo hipoxemia desproporcionada a la exploracion.',
      criterios_dx: 'Cada situacion tiene sus propios criterios. Lo que hay que retener es que la etiqueta de bronquitis aguda y la regla de no dar antibiotico se aplican al ADULTO SANO, y que estos pacientes quedan fuera de esa regla.',
      laboratorio: 'Umbral bajo para hemograma, proteina C reactiva, funcion renal y gasometria. Estudio microbiologico ampliado en el inmunodeprimido, incluyendo virus, hongos y micobacterias segun el tipo de inmunosupresion.',
      imagen: 'RADIOGRAFIA DE TORAX con umbral mucho mas bajo que en el adulto sano. En el inmunodeprimido, TOMOGRAFIA si la radiografia es normal y la sospecha persiste, porque puede detectar lesiones no visibles en la radiografia.',
      complementarios: 'Pulsioximetria siempre. Valoracion funcional y del estado cognitivo en el anciano, porque la decision de ingresar depende tanto de la situacion basal como de la gravedad de la infeccion.',
      dx_diferencial: 'En el anciano, distinguir la neumonia de la insuficiencia cardiaca descompensada, que se solapan y con frecuencia coexisten. En el inmunodeprimido, ampliar a neumonia por <em>Pneumocystis</em>, micosis invasivas, micobacterias y virus.',
      tx_medico: 'Vacunacion antigripal y antineumococica al dia. Optimizacion del tratamiento de base. Rehabilitacion y soporte nutricional en el anciano fragil. Revision de la medicacion, incluidos los inhibidores de la enzima convertidora y los sedantes.',
      tx_farmacologico: 'EPOC: broncodilatadores, corticoide sistemico en pauta corta y ANTIBIOTICO segun los criterios de Anthonisen, sobre todo cuando hay purulencia. ASMA: broncodilatador y corticoide, sin antibiotico salvo evidencia de infeccion bacteriana. ANCIANO e INMUNODEPRIMIDO: umbral mas bajo para tratar, cobertura ajustada al tipo de inmunosupresion y reevaluacion precoz.',
      tx_intervencionista: 'Ventilacion no invasiva en la exacerbacion de EPOC con acidosis respiratoria. Las que correspondan segun la complicacion.',
      criterios_uci: 'Insuficiencia respiratoria que no responde, acidosis respiratoria progresiva, inestabilidad hemodinamica y deterioro del nivel de conciencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar el diagnostico a las 48 a 72 horas si no hay mejoria. En el anciano, vigilar el delirium, la movilidad y la nutricion, que condicionan el desenlace tanto como la propia infeccion.',
      seguimiento_ambulatorio: 'Revision precoz tras la exacerbacion, actualizacion de vacunas, revision de la tecnica inhalatoria y del plan de accion. Una exacerbacion es siempre una oportunidad para revisar el tratamiento de base.',
      pronostico: 'Peor que en el adulto sano en todos estos grupos. En la EPOC, cada exacerbacion acelera el deterioro funcional. En el anciano, la neumonia se asocia a perdida funcional que con frecuencia no se recupera del todo.',
      algoritmo: ['Comprobar si el paciente tiene enfermedad pulmonar cronica de base', 'Si es EPOC, aplicar los criterios de Anthonisen y no la regla del adulto sano', 'Si es asma, tratar la exacerbacion, no la bronquitis', 'En el anciano, recordar que la fiebre y la taquipnea pueden faltar', 'Bajar mucho el umbral para pedir radiografia en estos grupos', 'Hacer pulsioximetria siempre', 'En el inmunodeprimido, ampliar el estudio microbiologico', 'Valorar tomografia si la radiografia es normal y la sospecha persiste', 'Reevaluar a las 48 a 72 horas si no mejora', 'Aprovechar el episodio para revisar vacunas y tratamiento de base']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La tos aguda es el escenario donde mas antibioticos innecesarios se prescriben, y a la vez uno donde se pierden diagnosticos graves por no medir cuatro constantes. Lo que sigue es la lista que evita los dos errores opuestos.',
    parametros: ['Preguntar SIEMPRE cuanto lleva tosiendo: la duracion ordena todo el tema', 'Medir temperatura, frecuencia cardiaca, FRECUENCIA RESPIRATORIA y saturacion', 'Auscultar buscando FOCALIDAD, no roncus difusos', 'Buscar signos de alarma: hemoptisis, perdida de peso, disnea, disfonia', 'No usar el color del esputo como criterio para prescribir antibiotico', 'No dar antibiotico en la bronquitis aguda del adulto sano', 'Explicar que la tos dura una MEDIA DE UNAS 3 SEMANAS', 'Pedir radiografia si hay constantes alteradas, focalidad, edad avanzada o comorbilidad', 'Ante tos de mas de 2 semanas, pensar en TOS FERINA y preguntar por lactantes', 'En la tos cronica, retirar tabaco e inhibidor de la enzima convertidora y hacer radiografia', 'Esperar mas de 4 semanas antes de descartar el inhibidor como causa', 'Ante un paciente etiquetado de bronquitis que empeora, revisar el DIAGNOSTICO'],
    criterios_uci_general: 'La bronquitis aguda no ingresa. Los criterios corresponden a los diagnosticos que se presentan como tos aguda: neumonia grave, embolia pulmonar de riesgo alto, exacerbacion de EPOC con acidosis respiratoria, crisis asmatica grave e insuficiencia cardiaca descompensada.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: vacunacion antigripal anual y antineumococica segun indicacion, vacunacion frente a la tos ferina con dosis de recuerdo en el adulto y en el TERCER TRIMESTRE del embarazo para proteger al lactante, higiene de manos, y abandono del tabaco. Secundaria: identificar precozmente los casos que no son bronquitis aguda mediante constantes y auscultacion, y sospechar tos ferina en la tos de mas de dos semanas para cortar la transmision. Terciaria: uso prudente de antibioticos con explicacion, receta diferida y red de seguridad, que reduce el consumo sin empeorar los desenlaces; y revision del tratamiento de base tras cada exacerbacion en el paciente con enfermedad pulmonar cronica.'
  }
};

export const compCites = {
  'Bronquitis aguda': [1, 2, 6],
  'Tos ferina y tos subaguda': [8, 9, 11],
  'Tos aguda: lo que no puede fallarse': [4, 7],
  'Tos cronica: el enfoque por causas': [5, 12, 13, 15],
  'Uso prudente de antibioticos en la infeccion respiratoria aguda': [3, 10, 16],
  'Situaciones especiales: EPOC, asma, ancianos e inmunodeprimidos': [3, 7, 14]
};
export const estigmasTitulo = 'Pistas que orientan ante un paciente que consulta por tos';
export const estigmas = [
  { s: 'Esputo verde o amarillo', p: 'NO indica infeccion bacteriana', photo: null, desc: 'El color se debe a la mieloperoxidasa de los neutrofilos, que acuden igual en una infeccion virica. Es el malentendido que mas recetas innecesarias genera, y desmontarlo con el paciente es mas util que cualquier argumento sobre resistencias.' },
  { s: 'Tos que lleva 12 dias', p: 'Es lo esperable', photo: null, desc: 'La tos de la bronquitis aguda dura una media de unas 3 semanas. Decirselo al paciente en la primera consulta ajusta su expectativa y es una de las intervenciones que mas reduce la presion por recibir antibioticos.' },
  { s: 'Roncus difusos que cambian con la tos', p: 'Compatible con bronquitis', photo: null, desc: 'Reflejan secreciones en la via aerea grande y se modifican al toser. Lo que hay que buscar activamente es lo contrario: crepitantes o soplo FOCALES, que apuntan a neumonia y cambian la conducta.' },
  { s: 'Frecuencia respiratoria mayor de 24', p: 'La constante que mas se omite', photo: null, desc: 'Es de los datos que mejor discriminan neumonia de bronquitis y a la vez el que menos se mide en la practica. Contarla durante un minuto cuesta poco y cambia decisiones.' },
  { s: 'Vomito despues de un acceso de tos', p: 'Sugiere tos ferina', photo: null, desc: 'Junto con el gallo inspiratorio, es de los datos que mas aumentan la probabilidad de tos ferina en un adulto con tos prolongada. Obliga a preguntar por contacto con lactantes y a plantear tratamiento y profilaxis.' },
  { s: 'Tos nocturna sin fiebre de 4 semanas', p: 'Tos ferina del adulto', photo: null, desc: 'En el adulto la tos ferina rara vez da el cuadro clasico del ni&#241;o: suele ser solo una tos persistente, seca y de predominio nocturno. El adulto es el reservorio y la fuente de contagio de los lactantes.' },
  { s: 'Tos seca en un paciente con hipertension', p: 'Mirar la medicacion', photo: null, desc: 'Los inhibidores de la enzima convertidora producen tos seca en una proporcion nada despreciable de pacientes, y puede empezar meses despues de iniciar el farmaco. Tras retirarlo, la tos puede tardar mas de 4 semanas en desaparecer.' },
  { s: 'Carraspeo con sensacion de moco que baja', p: 'Via aerea superior', photo: null, desc: 'El sindrome de tos de via aerea superior es una de las tres causas principales de tos cronica. El aspecto en empedrado de la pared faringea posterior lo apoya, y la respuesta al tratamiento empirico lo confirma.' },
  { s: 'Tos como unico sintoma, sin sibilancias', p: 'Asma variante tusigena', photo: null, desc: 'El asma puede manifestarse solo como tos, sin sibilancias ni disnea. Por eso una espirometria normal no basta y hay que hacer prueba de provocacion bronquial, cuyo valor principal es descartar el asma cuando es negativa.' },
  { s: 'Tos cronica sin pirosis', p: 'No descarta el reflujo', photo: null, desc: 'El reflujo puede producir tos sin sintomas digestivos, y por eso se descarta injustamente. Merece una prueba terapeutica de varias semanas con medidas posturales y dieteticas antes de darla por fallida.' },
  { s: 'Tos con esputo eosinofilico y espirometria normal', p: 'Bronquitis eosinofilica', photo: null, desc: 'Recuento elevado de eosinofilos en esputo inducido con espirometria y provocacion normales. Se pasa por alto justamente porque las pruebas de asma salen bien, y responde muy bien al corticoide inhalado.' },
  { s: 'Cambio del patron de tos en un fumador', p: 'Signo de alarma', photo: null, desc: 'Es la presentacion mas facil de pasar por alto del cancer de pulmon, porque el paciente ya tosia y el cambio se atribuye a un catarro. Obliga a radiografia y, si es normal y la sospecha persiste, a tomografia.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion de la tos por duracion': [4],
  'Decision de antibiotico en la tos aguda (calculadora disponible)': [2, 3],
  'Indicacion de radiografia de torax (calculadora disponible)': [7],
  'Sospecha de tos ferina (calculadora disponible)': [8, 9],
  'Enfoque de la tos cronica (calculadora disponible)': [5, 4],
  'Criterios de Anthonisen para la exacerbacion de EPOC': [3]
};
export const escalaCalc = {
  'Decision de antibiotico en la tos aguda (calculadora disponible)': 'antibiotico-tos-aguda',
  'Indicacion de radiografia de torax (calculadora disponible)': 'radiografia-tos',
  'Sospecha de tos ferina (calculadora disponible)': 'tos-ferina',
  'Enfoque de la tos cronica (calculadora disponible)': 'tos-cronica'
};
export const compGroups = [
  { name: 'La tos aguda', items: ['Bronquitis aguda', 'Tos aguda: lo que no puede fallarse', 'Uso prudente de antibioticos en la infeccion respiratoria aguda'] },
  { name: 'Cuando se alarga', items: ['Tos ferina y tos subaguda', 'Tos cronica: el enfoque por causas'] },
  { name: 'Fuera de la regla general', items: ['Situaciones especiales: EPOC, asma, ancianos e inmunodeprimidos'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son la tos aguda: el diagnostico mas frecuente, los diagnosticos que no pueden fallarse detras de ese mismo sintoma, y la decision sobre el antibiotico, que es donde se juega el tema en la practica diaria. Las dos siguientes son lo que ocurre cuando la tos se alarga: la franja subaguda, donde vive la tos ferina del adulto, y la tos cronica, que si tiene un algoritmo ordenado. La ultima recoge a los pacientes en los que la regla del adulto sano no se aplica.';
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
      { title: 'Mas de 8 semanas', sub: 'Cronica: hay algoritmo', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Signos de alarma', sub: 'Estudiar sea cual sea el tiempo', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'HAY NEUMONIA?', sub: 'La pregunta que si importa', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Cuatro constantes', sub: 'Temperatura, FC, FR y auscultacion', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Las cuatro normales', sub: 'Neumonia muy improbable', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Umbral mas bajo', sub: 'Anciano, EPOC, inmunodeprimido', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'La FR es la que se omite', sub: 'Y la que mas informa', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'ANTIBIOTICO?', sub: 'Casi siempre no', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Virica en mas del 90%', sub: 'Medio dia menos de tos', color: '#3f6b52', target: 'complicaciones' },
      { title: 'El esputo verde no cuenta', sub: 'Es mieloperoxidasa', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Decir "3 semanas"', sub: 'Baja la presion por recetar', color: '#7a5a3a', target: 'complicaciones' },
      { title: 'Receta diferida', sub: 'Si la presion es alta', color: '#3d5a73', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [8, 13], no_invasivos: [2, 5, 7], imagen: [4, 7] };
export const clasificacionCite = [3, 4, 5, 8];
export const seguimientoCite = [3, 4, 6];
