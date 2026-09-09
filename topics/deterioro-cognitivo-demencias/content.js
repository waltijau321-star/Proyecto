// topics/deterioro-cognitivo-demencias/content.js: Deterioro cognitivo y demencias.
// Cubre tres items del cluster "Alteracion de conciencia y enfermedad neuromuscular" (bloque XII,
// Neurologia) del temario: sindrome demencial, deterioro cognitivo y enfermedad por priones.
// Cubre ademas los items "Demencias" y "Enfermedad de Alzheimer" del bloque XIII (Geriatria).
//
// DELIMITACION frente a `delirium-coma-encefalopatias`, que ya existia: aquel es la alteracion
// AGUDA del nivel de conciencia (delirium, coma, encefalopatias metabolicas, muerte cerebral) y
// este es el deterioro CRONICO y progresivo del contenido de la conciencia. La unica frontera
// compartida, el delirium que desenmascara una demencia previa, se trata aqui desde el lado del
// deterioro cognitivo y alli desde el lado del episodio agudo.
//
// Fuentes principales: criterios NIA-AA de deterioro cognitivo leve y de enfermedad de Alzheimer;
// cuarto consenso de McKeith sobre demencia con cuerpos de Lewy; criterios de Rascovsky para la
// variante conductual de la degeneracion frontotemporal; criterios de Gorelick y de la AHA/ASA
// sobre deterioro cognitivo vascular; recomendaciones de la Comision del Lancet sobre prevencion;
// y los criterios diagnosticos de la enfermedad de Creutzfeldt-Jakob con RT-QuIC.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'deterioro-cognitivo-demencias',
  titulo: 'Deterioro Cognitivo y Demencias',
  subtitulo: 'Modulo 61 · Medicina Interna',
  accent: '#4a3f7a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const lineaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #4a3f7a;border-radius:8px;padding:5px 9px;background:#4a3f7a12;margin-bottom:6px;">
    <strong style="color:#4a3f7a;">La linea entre deterioro cognitivo leve y demencia no la marca la puntuacion de un test, sino la AUTONOMIA.</strong> <span style="color:var(--ink-dim);">La pregunta operativa es: lo que ha perdido, &#191;le impide ya manejarse solo en su vida?</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">DETERIORO COGNITIVO LEVE</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Cambio cognitivo <strong style="color:var(--ink);">objetivable</strong> respecto a como era antes, referido por el paciente o por un informante y confirmado en la exploracion. Pero <strong style="color:var(--ink);">CONSERVA la independencia</strong> en las actividades instrumentales: sigue manejando su dinero, su medicacion y sus desplazamientos, aunque le cueste mas o tarde mas.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">DEMENCIA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">El deterioro es suficiente para <strong style="color:var(--ink);">INTERFERIR con la independencia</strong>. Ya necesita ayuda o supervision para las actividades instrumentales, y en fases avanzadas para las basicas. Afecta a uno o mas dominios y no se explica por delirium ni por un trastorno psiquiatrico mayor.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">El INFORMANTE no es opcional.</strong> El paciente con anosognosia minimiza, y el que tiene depresion exagera. Hay que preguntar a alguien que conviva con el, y preguntar por hechos concretos, no por impresiones: &#191;quien paga los recibos? &#191;se toma la medicacion sin ayuda? &#191;ha dejado de cocinar? &#191;se ha perdido alguna vez? &#191;sigue conduciendo?
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Y antes de nada: &#191;es un DELIRIUM?</strong> Inicio agudo, curso fluctuante y alteracion de la ATENCION apuntan a delirium, no a demencia, y obligan a buscar la causa aguda. Ojo: la demencia es el principal factor de riesgo de delirium, y no es raro que el primer episodio de delirium sea lo que desenmascara una demencia que ya estaba.
    </div>
  </div>
</div>`;

const perfilesHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#4a3f7a22;border:1px solid #4a3f7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#4a3f7a;">ALZHEIMER</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inicio <strong style="color:var(--ink);">insidioso y progresion lenta</strong>, con <strong>MEMORIA EPISODICA</strong> como sintoma inicial: olvida hechos recientes, repite preguntas, y no mejora con pistas. Despues se a&#241;aden lenguaje, praxias y orientacion. Atrofia de hipocampo en la resonancia.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">VASCULAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Curso <strong style="color:var(--ink);">ESCALONADO</strong> o relacionado en el tiempo con un ictus, con predominio <strong>EJECUTIVO</strong> y enlentecimiento, y <strong>alteracion de la marcha PRECOZ</strong>. Factores de riesgo vascular y lesiones en la imagen. La memoria mejora con pistas, a diferencia del Alzheimer.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b6b;">CUERPOS DE LEWY</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Cuatro rasgos centrales: <strong style="color:var(--ink);">FLUCTUACION</strong> de la cognicion y la alerta, <strong style="color:var(--ink);">ALUCINACIONES VISUALES</strong> bien formadas y recurrentes, <strong style="color:var(--ink);">trastorno de conducta del sue&#241;o REM</strong> (que puede preceder a&#241;os) y <strong style="color:var(--ink);">PARKINSONISMO</strong> espontaneo.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">FRONTOTEMPORAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inicio mas <strong style="color:var(--ink);">JOVEN</strong>. Variante conductual: desinhibicion, apatia, <strong>perdida de empatia</strong>, conductas repetitivas, hiperoralidad y disfuncion ejecutiva con memoria relativamente conservada. Variantes del lenguaje: afasia progresiva primaria. Se confunde con enfermedad psiquiatrica durante a&#241;os.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">La REGLA DEL A&#209;O, que decide una etiqueta y no cambia el manejo.</strong> Si la demencia aparece antes que el parkinsonismo, o dentro del a&#241;o siguiente, se llama <strong>demencia con cuerpos de Lewy</strong>. Si el parkinsonismo lleva mas de un a&#241;o instaurado cuando llega la demencia, se llama <strong>demencia de la enfermedad de Parkinson</strong>. Comparten sustrato, pronostico y, sobre todo, la misma precaucion con los antipsicoticos.
  </div>
</div>`;

const estudioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">El objetivo del estudio no es solo poner una etiqueta, sino no dejar escapar lo TRATABLE.</strong> <span style="color:var(--ink-dim);">Las causas reversibles puras son minoria, pero las contribuyentes (farmacos, depresion, deficits, tiroides, apnea) son muy frecuentes y corregirlas mejora al paciente aunque haya una degeneracion de fondo.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #4a3f7a;border-radius:8px;padding:6px 8px;background:#4a3f7a08;">
      <div style="font-weight:700;color:#4a3f7a;text-align:center;margin-bottom:4px;">ANALITICA A TODOS</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hemograma, bioquimica con <strong style="color:var(--ink);">CALCIO</strong>, funcion renal y hepatica, <strong style="color:var(--ink);">TSH</strong> y <strong style="color:var(--ink);">VITAMINA B12</strong> (con acido metilmalonico si esta en zona baja-normal). Segun contexto y factores de riesgo: serologia de sifilis y de VIH, folato, y estudio de toxicos.</div>
    </div>
    <div style="border:1.5px solid #2e5a8c;border-radius:8px;padding:6px 8px;background:#2e5a8c08;">
      <div style="font-weight:700;color:#2e5a8c;text-align:center;margin-bottom:4px;">NEUROIMAGEN A TODOS</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Estructural, preferentemente <strong style="color:var(--ink);">RESONANCIA</strong>. Busca lo que cambia la conducta: hematoma subdural cronico, <strong>hidrocefalia normotensiva</strong>, tumor, lesiones vasculares y su carga, y el patron de atrofia (hipocampal, frontotemporal, posterior).</div>
    </div>
  </div>
  <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f10;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Las tres causas que mas se pasan por alto y que no salen en la analitica.</strong> <strong style="color:var(--ink);">FARMACOS</strong> con carga anticolinergica (antihistaminicos, antimuscarinicos urinarios, antidepresivos triciclicos), benzodiacepinas y opioides: revisar la lista completa y retirar lo que se pueda. <strong style="color:var(--ink);">DEPRESION</strong>, que puede imitar una demencia y que en el mayor se presenta con quejas de memoria y respuestas de "no se". <strong style="color:var(--ink);">APNEA DEL SUE&#209;O</strong> e hipoacusia no corregida, que empeoran el rendimiento cognitivo y son tratables.
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Los biomarcadores no son para todos.</strong> Amiloide y tau en liquido cefalorraquideo o por tomografia de emision de positrones aportan cuando el diagnostico es dudoso, el inicio es precoz o la presentacion es atipica, y son <strong>imprescindibles</strong> si se plantea un anticuerpo antiamiloide. En un caso tipico de demencia avanzada no cambian nada y no estan indicados.
  </div>
</div>`;

const rapidaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Una demencia que avanza en SEMANAS O POCOS MESES no es una demencia degenerativa hasta que se demuestre.</strong> <span style="color:var(--ink-dim);">Es una urgencia diagnostica, porque una parte importante de sus causas es TRATABLE y el tiempo cuenta.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">LO QUE HAY QUE DESCARTAR PRIMERO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Porque tiene tratamiento: <strong style="color:var(--ink);">encefalitis autoinmune</strong> y paraneoplasica, <strong>infecciones</strong> (VIH, sifilis, herpes, tuberculosis, Whipple), <strong>neoplasia</strong> y linfoma del sistema nervioso, <strong>toxico-metabolico</strong> (B12, tiamina, tiroides, litio, quimioterapia), <strong>vasculitis</strong> del sistema nervioso central, y hematoma subdural o hidrocefalia.</div>
    </div>
    <div style="border:1.5px solid #6b2d4a;border-radius:8px;padding:6px 8px;background:#6b2d4a08;">
      <div style="font-weight:700;color:#6b2d4a;text-align:center;margin-bottom:4px;">ENFERMEDAD POR PRIONES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Deterioro rapido con <strong style="color:var(--ink);">MIOCLONIAS</strong>, ataxia, signos piramidales y extrapiramidales, alteraciones visuales, y evolucion a mutismo acinetico. Es un diagnostico al que se llega <strong>por exclusion de lo tratable</strong>, no de entrada.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #6b2d4a;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#6b2d4a;">RESONANCIA</strong><br>Hiperintensidad en DIFUSION en corteza (cinta cortical) y en ganglios basales. Es el hallazgo mas sensible y hay que pedir difusion de forma explicita.</div>
    <div style="border:1px solid #6b2d4a;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#6b2d4a;">LIQUIDO CEFALORRAQUIDEO</strong><br><strong>RT-QuIC</strong>, muy especifica, es hoy la prueba de referencia. La proteina 14-3-3 y la enolasa son inespecificas y suben en cualquier da&#241;o neuronal rapido.</div>
    <div style="border:1px solid #6b2d4a;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#6b2d4a;">ELECTROENCEFALOGRAMA</strong><br>Complejos periodicos de ondas agudas. Aparecen en fases intermedias y pueden faltar, sobre todo al principio y en las variantes.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Precauciones que si cambian algo.</strong> No hay tratamiento que modifique el curso y la supervivencia se mide en meses, de modo que el manejo es sintomatico y de apoyo. Pero el prion resiste los metodos habituales de esterilizacion: si el paciente ha sido sometido a un <strong>procedimiento neuroquirurgico invasivo</strong>, hay que avisar al servicio para aplicar el protocolo especifico de instrumental. Y hay que notificar el caso segun la normativa local.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El deterioro cognitivo es uno de los motivos de consulta que mas crece y uno en los que peor se trabaja: se diagnostica tarde, se estudia de forma incompleta y se trata poco lo que si es tratable. Conviene separar desde el principio dos cosas distintas: el <strong>sindrome</strong>, que es el grado de deterioro y su repercusion sobre la vida del paciente, y la <strong>causa</strong>, que es la enfermedad que lo produce. El primero se establece en la consulta con el paciente y su informante; la segunda, con el perfil clinico, la imagen y, en casos seleccionados, los biomarcadores.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: el sindrome, y donde esta la linea.</strong></p>
<p style="margin:0 0 12px;">La frontera entre <strong>deterioro cognitivo leve</strong> y <strong>demencia</strong> no la marca la puntuacion de un test sino la <strong>autonomia</strong>: si el paciente ya necesita ayuda para manejar su dinero, su medicacion o sus desplazamientos, es demencia. Para saberlo hace falta un <strong>informante</strong>, porque el paciente con anosognosia minimiza y el que tiene depresion exagera. Y antes de todo eso hay que descartar un <strong>delirium</strong>, que se distingue por el inicio agudo, el curso fluctuante y la alteracion de la atencion.</p>
${figBlock('Figura 1', 'Deterioro cognitivo leve o demencia: la linea es la autonomia', lineaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: los cuatro perfiles que hay que saber distinguir.</strong></p>
<p style="margin:0 0 12px;">La <strong>enfermedad de Alzheimer</strong> empieza por la memoria episodica y avanza despacio. La <strong>demencia vascular</strong> tiene curso escalonado, predominio ejecutivo y alteracion precoz de la marcha. La <strong>demencia con cuerpos de Lewy</strong> se reconoce por fluctuacion, alucinaciones visuales, trastorno de conducta del sue&#241;o REM y parkinsonismo, y tiene una consecuencia practica que no se puede olvidar: la sensibilidad a los antipsicoticos. Y la <strong>degeneracion frontotemporal</strong> empieza mas joven, cambia la conducta antes que la memoria y se confunde con enfermedad psiquiatrica durante a&#241;os.</p>
${figBlock('Figura 2', 'Los cuatro perfiles y como se distinguen', perfilesHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el estudio que se hace a todos.</strong></p>
<p style="margin:0 0 12px;">Analitica con calcio, funcion tiroidea y <strong>vitamina B12</strong>, y <strong>neuroimagen estructural</strong>. El objetivo no es solo etiquetar sino no dejar escapar lo tratable: hematoma subdural, hidrocefalia normotensiva, tumor. Y sobre todo, las tres cosas que no salen en ninguna analitica y que estan en casi todas las consultas: los <strong>farmacos</strong> con carga anticolinergica, la <strong>depresion</strong> y la <strong>apnea del sue&#241;o</strong> con la hipoacusia no corregida.</p>
${figBlock('Figura 3', 'El estudio minimo y las causas que mas se escapan', estudioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: cuando la velocidad cambia el problema.</strong></p>
<p style="margin:0 0 12px;">Una demencia que progresa en <strong>semanas o pocos meses</strong> deja de ser un problema de consulta externa y pasa a ser una urgencia diagnostica, porque una parte importante de sus causas tiene tratamiento. La <strong>enfermedad por priones</strong> esta en ese grupo, pero es un diagnostico al que se llega por exclusion de lo tratable, no de entrada.</p>
${figBlock('Figura 4', 'Demencia rapidamente progresiva y enfermedad por priones', rapidaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar demencia sin hablar con un informante. No diagnosticarla sin haber descartado un delirium. No dar por hecho el diagnostico sin analitica y sin neuroimagen. No pasar por alto la lista de farmacos, que es donde mas se gana con menos esfuerzo. No confundir depresion con demencia ni al reves. No dar anticolinesterasicos en la degeneracion frontotemporal, donde no estan indicados y pueden empeorar la conducta. <strong>No dar antipsicoticos tipicos a un paciente con demencia por cuerpos de Lewy</strong>, porque la reaccion puede ser grave. No usar antipsicoticos como primera medida ante un sintoma conductual sin haber buscado antes dolor, infeccion, estre&#241;imiento, retencion urinaria o un farmaco nuevo. Y no dejar para mas adelante la conversacion sobre conduccion, seguridad en casa y planificacion anticipada de decisiones, que se hace mejor cuando el paciente todavia puede participar.</p>`;

export const bibliografia = [
  'Albert MS, DeKosky ST, Dickson D, et al. The diagnosis of mild cognitive impairment due to Alzheimer disease: recommendations from the National Institute on Aging-Alzheimers Association workgroups. Alzheimers Dement. 2011;7(3):270-279.',
  'McKhann GM, Knopman DS, Chertkow H, et al. The diagnosis of dementia due to Alzheimer disease: recommendations from the National Institute on Aging-Alzheimers Association workgroups. Alzheimers Dement. 2011;7(3):263-269.',
  'McKeith IG, Boeve BF, Dickson DW, et al. Diagnosis and management of dementia with Lewy bodies: fourth consensus report of the DLB Consortium. Neurology. 2017;89(1):88-100.',
  'Rascovsky K, Hodges JR, Knopman D, et al. Sensitivity of revised diagnostic criteria for the behavioural variant of frontotemporal dementia. Brain. 2011;134(Pt 9):2456-2477.',
  'Gorelick PB, Scuteri A, Black SE, et al. Vascular contributions to cognitive impairment and dementia: a statement for healthcare professionals from the AHA/ASA. Stroke. 2011;42(9):2672-2713.',
  'Livingston G, Huntley J, Liu KY, et al. Dementia prevention, intervention, and care: 2024 report of the Lancet standing Commission. Lancet. 2024;404(10452):572-628.',
  'Petersen RC, Lopez O, Armstrong MJ, et al. Practice guideline update summary: mild cognitive impairment. Report of the Guideline Development, Dissemination, and Implementation Subcommittee of the American Academy of Neurology. Neurology. 2018;90(3):126-135.',
  'Hachinski VC, Iliff LD, Zilhka E, et al. Cerebral blood flow in dementia. Arch Neurol. 1975;32(9):632-637.',
  'Nasreddine ZS, Phillips NA, Bedirian V, et al. The Montreal Cognitive Assessment, MoCA: a brief screening tool for mild cognitive impairment. J Am Geriatr Soc. 2005;53(4):695-699.',
  'Folstein MF, Folstein SE, McHugh PR. Mini-mental state: a practical method for grading the cognitive state of patients for the clinician. J Psychiatr Res. 1975;12(3):189-198.',
  'van Dyck CH, Swanson CJ, Aisen P, et al. Lecanemab in early Alzheimers disease. N Engl J Med. 2023;388(1):9-21.',
  'Sims JR, Zimmer JA, Evans CD, et al. Donanemab in early symptomatic Alzheimer disease: the TRAILBLAZER-ALZ 2 randomized clinical trial. JAMA. 2023;330(6):512-527.',
  'Hermann P, Appleby B, Brandel JP, et al. Biomarkers and diagnostic guidelines for sporadic Creutzfeldt-Jakob disease. Lancet Neurol. 2021;20(3):235-246.',
  'Geschwind MD. Rapidly progressive dementia. Continuum (Minneap Minn). 2016;22(2 Dementia):510-537.',
  'Reus VI, Fochtmann LJ, Eyler AE, et al. The American Psychiatric Association practice guideline on the use of antipsychotics to treat agitation or psychosis in patients with dementia. Am J Psychiatry. 2016;173(5):543-546.',
  'Arvanitakis Z, Shah RC, Bennett DA. Diagnosis and management of dementia: review. JAMA. 2019;322(16):1589-1599.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Lo que cuenta el paciente',
      tituloB: 'Lo que cuenta el informante',
      compensada: 'Quejas de memoria, dificultad para encontrar palabras, sensacion de ir mas lento. Conviene saber que la queja subjetiva aislada, sin hallazgos objetivos, se asocia mas a ANSIEDAD y a DEPRESION que a demencia, y que en cambio el paciente con anosognosia, tipica de la degeneracion frontotemporal y de fases mas avanzadas de Alzheimer, minimiza o niega el problema. En la consulta, respuestas de "no se" repetidas orientan a depresion; respuestas confabuladas o aproximadas, a deterioro real.',
      descompensada: 'ES LA FUENTE PRINCIPAL. Hay que preguntar por hechos concretos y no por impresiones: quien maneja el dinero y los recibos, si se toma la medicacion sin ayuda, si sigue cocinando, si se ha perdido alguna vez, si conduce y como, si repite las mismas preguntas, si ha cambiado su caracter o su forma de tratar a la gente, si ve cosas que no estan, si grita o se mueve mientras sue&#241;a, y en cuanto tiempo ha pasado todo esto. La VELOCIDAD de instauracion es el dato que mas cambia el enfoque.'
    },
    laboratorio: [
      { prueba: 'Vitamina B12 y acido metilmalonico', utilidad: 'Se pide a TODOS. El deficit de B12 puede producir deterioro cognitivo con o sin anemia y con o sin macrocitosis, de modo que un hemograma normal no lo descarta. Si la B12 esta en zona baja-normal, el acido metilmalonico elevado confirma el deficit funcional.' },
      { prueba: 'Hormona tiroestimulante', utilidad: 'Se pide a TODOS. El hipotiroidismo produce enlentecimiento, apatia y fallos de memoria que mejoran con el tratamiento, y en el mayor se presenta de forma atipica y se atribuye a la edad.' },
      { prueba: 'Calcio corregido, funcion renal y hepatica, hemograma y sodio', utilidad: 'Se piden a TODOS. Buscan las causas metabolicas que contribuyen al deterioro: hipercalcemia, uremia, encefalopatia hepatica incipiente, anemia e hiponatremia cronica, que se asocia de forma independiente a alteracion cognitiva y a caidas.' },
      { prueba: 'Serologia de sifilis y de VIH', utilidad: 'Segun factores de riesgo y contexto epidemiologico, y de forma sistematica en el deterioro de inicio precoz o de progresion rapida. Ambas son causas tratables, y la neurosifilis puede presentarse como demencia sin otros datos.' },
      { prueba: 'Revision completa de la medicacion', utilidad: 'No es un analisis, pero rinde mas que la mayoria. La carga ANTICOLINERGICA acumulada (antihistaminicos, antimuscarinicos urinarios, antidepresivos triciclicos, algunos antipsicoticos) se asocia a deterioro cognitivo, y las benzodiacepinas y los opioides lo agravan. Retirar lo prescindible mejora al paciente.' },
      { prueba: 'Cribado de depresion', utilidad: 'La depresion del mayor se presenta con quejas de memoria y puede imitar una demencia. Un dato practico: en la depresion el paciente se queja mucho y rinde variable, y en la demencia se queja poco y rinde de forma consistentemente baja. Ambas coexisten con frecuencia, de modo que encontrar una no descarta la otra.' },
      { prueba: 'Biomarcadores de amiloide y tau en liquido cefalorraquideo o por positrones', utilidad: 'NO son para todos. Aportan cuando el diagnostico es dudoso, el inicio es precoz o la presentacion es atipica, y son imprescindibles antes de plantear un anticuerpo antiamiloide. En una demencia tipica y avanzada no cambian el manejo.' },
      { prueba: 'RT-QuIC y proteina 14-3-3 en liquido cefalorraquideo', utilidad: 'En la sospecha de enfermedad por priones. La RT-QuIC es muy especifica y es hoy la prueba de referencia; la 14-3-3 y la enolasa neuroespecifica son inespecificas y se elevan en cualquier da&#241;o neuronal rapido, incluido un ictus reciente.' }
    ],
    no_invasivos: [
      { metodo: 'Cribado cognitivo breve (calculadora disponible)', interpretacion: 'El Mini-Mental es rapido pero poco sensible al deterioro leve y a la disfuncion ejecutiva; el MoCA es mas sensible al deterioro cognitivo leve y al perfil frontal-ejecutivo. Ambos se afectan por la ESCOLARIDAD, el idioma y los deficits sensoriales.', cutoff: 'MoCA: 26 o mas se considera normal, sumando 1 punto si la escolaridad es de 12 a&#241;os o menos' },
      { metodo: 'Deterioro cognitivo leve frente a demencia (calculadora disponible)', interpretacion: 'La distincion la marca la repercusion sobre las actividades instrumentales, no la puntuacion del test. Exige informacion de un informante fiable.', cutoff: 'Autonomia conservada: deterioro cognitivo leve. Autonomia perdida: demencia' },
      { metodo: 'Estudio etiologico minimo (calculadora disponible)', interpretacion: 'Comprueba que se ha hecho lo que se pide a todos y recuerda las causas contribuyentes que no aparecen en la analitica: farmacos, depresion, apnea del sue&#241;o e hipoacusia.', cutoff: 'A todos: hemograma, bioquimica con calcio, TSH, vitamina B12 y neuroimagen estructural' },
      { metodo: 'Escala isquemica de Hachinski (calculadora disponible)', interpretacion: 'Separa el perfil vascular del degenerativo a partir de datos clinicos clasicos: inicio brusco, deterioro escalonado, curso fluctuante, focalidad y factores de riesgo vascular.', cutoff: '7 o mas sugiere origen vascular; 4 o menos, degenerativo primario' },
      { metodo: 'Actividades instrumentales de la vida diaria', interpretacion: 'Manejo del dinero, de la medicacion, del telefono, del transporte, de la compra y de la casa. Se pierden ANTES que las basicas, y por eso son las que marcan la transicion a demencia.', cutoff: 'Necesidad de ayuda o supervision en una o mas: apoya el diagnostico de demencia' },
      { metodo: 'Prueba del reloj', interpretacion: 'Explora funcion ejecutiva, planificacion y capacidad visuoespacial en menos de dos minutos. Muy util como complemento porque detecta perfiles que el Mini-Mental pasa por alto.', cutoff: 'Sin umbral unico; se valora la organizacion del dibujo, el orden de los numeros y la colocacion de las manecillas' },
      { metodo: 'Valoracion de la conduccion y de la seguridad en el domicilio', interpretacion: 'No es opcional ni se pospone. Incluye conduccion, uso de la cocina y del gas, manejo de armas si las hay, riesgo de extravio y capacidad de pedir ayuda.', cutoff: 'Cualquier duda razonable obliga a una valoracion formal y a documentar la conversacion' }
    ],
    imagen: [
      { modalidad: 'Resonancia magnetica craneal', hallazgos: 'Es la neuroimagen preferida. Descarta lo tratable (hematoma subdural cronico, hidrocefalia normotensiva, tumor) y define el patron de atrofia: HIPOCAMPAL y temporal medial en el Alzheimer, FRONTAL y temporal anterior en la degeneracion frontotemporal, y posterior en la atrofia cortical posterior. Cuantifica ademas la carga vascular de sustancia blanca y los infartos.' },
      { modalidad: 'Tomografia craneal', hallazgos: 'Alternativa aceptable cuando la resonancia no esta disponible o el paciente no la tolera. Descarta las lesiones estructurales relevantes, pero valora mucho peor el patron de atrofia y la enfermedad de peque&#241;o vaso.' },
      { modalidad: 'Resonancia con secuencias de DIFUSION', hallazgos: 'Imprescindible ante sospecha de enfermedad por priones: hiperintensidad cortical en cinta y en ganglios basales. Hay que pedir la difusion de forma explicita, porque un protocolo estandar puede no incluirla y el hallazgo se pierde.' },
      { modalidad: 'Tomografia por emision de positrones y estudios funcionales', hallazgos: 'La de fluorodesoxiglucosa muestra hipometabolismo temporoparietal en el Alzheimer y frontotemporal en la degeneracion frontotemporal. La de amiloide y la de tau se reservan a casos seleccionados. El DAT-SPECT reducido y la gammagrafia cardiaca con MIBG apoyan la demencia con cuerpos de Lewy.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El deterioro cognitivo se clasifica en dos ejes que hay que responder por separado. El primero es el <strong>grado</strong>: cognicion normal, <strong>deterioro cognitivo leve</strong> (cambio objetivable con autonomia conservada) y <strong>demencia</strong> o trastorno neurocognitivo mayor (el deterioro ya interfiere con la independencia). El segundo es la <strong>causa</strong>: enfermedad de Alzheimer, deterioro cognitivo vascular, demencia con cuerpos de Lewy y de la enfermedad de Parkinson, degeneracion frontotemporal, formas mixtas (muy frecuentes en el mayor) y causas secundarias. A esos dos ejes se a&#241;ade un tercero con valor practico inmediato: la <strong>velocidad</strong>, porque una demencia rapidamente progresiva se estudia de otra manera y con otra urgencia.`,
    escalas: [
      { nombre: 'Cribado cognitivo breve (calculadora disponible)', componentes: 'Mini-Mental (0 a 30 puntos) o MoCA (0 a 30 puntos), ajustados por escolaridad.', formula: 'MoCA: 26 o mas se considera normal, sumando 1 punto si el paciente tiene 12 a&#241;os o menos de escolaridad. El Mini-Mental usa umbrales que dependen de la edad y del nivel educativo.', interpretacion: 'Son pruebas de CRIBADO, no diagnosticas. El MoCA es mas sensible al deterioro cognitivo leve y al perfil ejecutivo; el Mini-Mental tiene efecto techo y se le escapan los perfiles frontales. Ninguno de los dos distingue la causa, y ambos se distorsionan por hipoacusia, mala vision, bajo nivel educativo y barrera idiomatica.' },
      { nombre: 'Deterioro cognitivo leve frente a demencia (calculadora disponible)', componentes: 'Cambio cognitivo objetivable, informacion de un informante, repercusion sobre las actividades instrumentales y exclusion de delirium y de trastorno psiquiatrico mayor.', formula: 'Con autonomia CONSERVADA en las actividades instrumentales: deterioro cognitivo leve. Con autonomia PERDIDA: demencia.', interpretacion: 'La linea no la marca la puntuacion de ningun test. Es una decision clinica que exige un informante fiable, porque el paciente con anosognosia minimiza. Una proporcion importante de los pacientes con deterioro cognitivo leve progresa a demencia cada a&#241;o, pero otros se mantienen estables e incluso revierten, sobre todo si la causa era corregible.' },
      { nombre: 'Escala isquemica de Hachinski (calculadora disponible)', componentes: 'Inicio brusco, deterioro escalonado, curso fluctuante, confusion nocturna, conservacion de la personalidad, depresion, quejas somaticas, labilidad emocional, hipertension, antecedente de ictus, aterosclerosis, sintomas neurologicos focales y signos neurologicos focales.', formula: 'Suma de 0 a 18 puntos, con items de 1 o 2 puntos.', interpretacion: '7 o mas sugiere demencia vascular; 4 o menos, degenerativa primaria; los valores intermedios no discriminan y son compatibles con forma MIXTA, que en el mayor es probablemente la situacion mas frecuente. Es una herramienta clinica orientativa, no un criterio diagnostico.' },
      { nombre: 'Criterios de demencia con cuerpos de Lewy', componentes: 'Rasgos clinicos centrales y biomarcadores indicativos.', formula: 'Centrales: fluctuacion de la cognicion y la alerta, alucinaciones visuales recurrentes y bien formadas, trastorno de conducta del sue&#241;o REM y parkinsonismo espontaneo. Indicativos: DAT-SPECT reducido, gammagrafia cardiaca con MIBG reducida y polisomnografia con sue&#241;o REM sin atonia.', interpretacion: 'La probabilidad aumenta con el numero de rasgos centrales y con la presencia de biomarcadores indicativos. Lo que no se puede olvidar es la <strong>sensibilidad grave a los antipsicoticos</strong>, que es un rasgo de apoyo y una advertencia de seguridad de primer orden.' },
      { nombre: 'Criterios de la variante conductual de la degeneracion frontotemporal', componentes: 'Desinhibicion, apatia o inercia, perdida de empatia, conductas perseverativas o compulsivas, hiperoralidad y cambios en la dieta, y perfil neuropsicologico con disfuncion ejecutiva y memoria y capacidad visuoespacial relativamente conservadas.', formula: 'Tres o mas de esos rasgos definen la forma posible; se a&#241;aden el deterioro funcional y la imagen compatible para la forma probable.', interpretacion: 'Es la demencia que mas se confunde con una enfermedad psiquiatrica, y el retraso diagnostico se mide en a&#241;os. Los anticolinesterasicos NO estan indicados y pueden empeorar la conducta.' },
      { nombre: 'Estudio etiologico minimo (calculadora disponible)', componentes: 'Analitica basica, funcion tiroidea, vitamina B12, neuroimagen estructural, revision de la medicacion, cribado de depresion y valoracion sensorial y del sue&#241;o.', formula: 'A todos: hemograma, bioquimica con calcio, funcion renal y hepatica, TSH, vitamina B12 y neuroimagen. Dirigido segun contexto: sifilis, VIH, folato y toxicos.', interpretacion: 'Su objetivo no es solo etiquetar sino identificar lo tratable. Las causas totalmente reversibles son minoria, pero las contribuyentes (farmacos, depresion, deficits, tiroides, apnea del sue&#241;o e hipoacusia) son muy frecuentes y corregirlas mejora al paciente aunque haya una degeneracion de fondo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Deterioro cognitivo leve y enfoque inicial',
      color: '#8a6a1f',
      definicion: 'Cambio cognitivo objetivable respecto al rendimiento previo del paciente, en uno o mas dominios, que NO llega a interferir con su independencia en las actividades instrumentales de la vida diaria.',
      fisiopatologia: 'No es una enfermedad sino un estadio sindromico, y por eso tiene causas muy distintas. Puede corresponder a la fase prodromica de una enfermedad degenerativa (con mas frecuencia Alzheimer), a enfermedad cerebrovascular de peque&#241;o vaso, o a una causa potencialmente reversible como un deficit vitaminico, un hipotiroidismo, una depresion, un farmaco o una apnea del sue&#241;o. Esa heterogeneidad explica que su evolucion sea tan variable: una parte progresa a demencia, otra se mantiene estable y otra revierte.',
      epidemiologia: 'Su prevalencia aumenta de forma marcada con la edad. La tasa de progresion a demencia es de un porcentaje anual apreciable, mayor cuando el perfil es amnesico y cuando hay biomarcadores de amiloide positivos, y menor cuando la causa identificada es corregible.',
      factores_riesgo: ['Edad avanzada', 'Bajo nivel educativo y baja reserva cognitiva', 'HIPOACUSIA no corregida', 'Hipertension arterial en la edad media de la vida', 'Diabetes mellitus', 'Tabaquismo', 'Obesidad', 'Inactividad fisica', 'Aislamiento social', 'Depresion', 'Consumo excesivo de alcohol', 'Traumatismo craneoencefalico previo', 'Colesterol LDL elevado', 'Perdida de vision no tratada', 'Contaminacion atmosferica', 'Alelo APOE epsilon 4'],
      clinica: 'Quejas de memoria o de rendimiento, dificultad para encontrar palabras, sensacion de ir mas lento, mas esfuerzo para tareas que antes eran automaticas. Lo definitorio es que TODAVIA se maneja solo: sigue llevando su dinero, su medicacion y sus desplazamientos, aunque le cueste mas.',
      criterios_dx: 'Cambio cognitivo objetivable frente al rendimiento previo, referido por el paciente o por un informante, confirmado en la exploracion, con AUTONOMIA CONSERVADA en las actividades instrumentales y sin delirium ni trastorno psiquiatrico mayor que lo explique. Ver la Figura 1 de Definicion.',
      laboratorio: 'El mismo estudio minimo que en la demencia: hemograma, bioquimica con calcio, funcion renal y hepatica, TSH y vitamina B12. Serologias segun contexto. Cribado de depresion.',
      imagen: 'Neuroimagen estructural, preferentemente resonancia. Biomarcadores solo en casos seleccionados: inicio precoz, presentacion atipica, duda diagnostica relevante o valoracion para un tratamiento antiamiloide.',
      complementarios: 'Valoracion neuropsicologica formal cuando el cribado breve no es concluyente, cuando el paciente tiene un nivel educativo alto (donde los tests breves se quedan cortos por efecto techo) o cuando hay que documentar un perfil para el seguimiento.',
      dx_diferencial: 'Envejecimiento cognitivo normal, depresion, ansiedad, efecto de farmacos, apnea del sue&#241;o, hipoacusia no corregida, hipotiroidismo, deficit de B12, consumo de alcohol y fase prodromica de cualquier demencia degenerativa.',
      tx_medico: 'EJERCICIO FISICO regular, que es la intervencion con mejor respaldo. Control estricto de los factores de riesgo vascular, sobre todo la presion arterial. CORRECCION DE LA HIPOACUSIA, que la Comision del Lancet situa entre los factores modificables de mayor impacto poblacional. Actividad cognitiva y social. Tratamiento de la depresion y de la apnea del sue&#241;o. Retirada de farmacos con carga anticolinergica.',
      tx_farmacologico: 'NO hay tratamiento farmacologico aprobado para el deterioro cognitivo leve como tal: los anticolinesterasicos no han demostrado prevenir la progresion a demencia y a&#241;aden efectos adversos. En el deterioro cognitivo leve por enfermedad de Alzheimer con biomarcador confirmado, los anticuerpos antiamiloide son una opcion en centros con experiencia y con vigilancia estrecha.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si el paciente ingresa por otro motivo, hay que anticipar el riesgo elevado de delirium y aplicar medidas de prevencion desde el primer dia.',
      seguimiento_ambulatorio: 'Reevaluacion cognitiva y funcional cada 6 a 12 meses, con el mismo instrumento para poder comparar. El objetivo del seguimiento es detectar la transicion a demencia y revisar de nuevo las causas corregibles.',
      pronostico: 'Muy variable. Una parte progresa a demencia, otra se mantiene estable durante a&#241;os y otra revierte, sobre todo cuando la causa era corregible. Ese ultimo grupo es la razon por la que el estudio etiologico merece la pena.',
      algoritmo: ['Confirmar que hay cambio respecto al rendimiento PREVIO del paciente', 'Hablar con un INFORMANTE y preguntar por hechos concretos', 'Descartar delirium: inicio agudo, fluctuacion y alteracion de la atencion', 'Comprobar si conserva la autonomia en las actividades instrumentales', 'Aplicar un cribado cognitivo breve, ajustado por escolaridad', 'Pedir el estudio minimo: analitica y neuroimagen', 'REVISAR LA MEDICACION y retirar la carga anticolinergica', 'Buscar depresion, apnea del sue&#241;o e hipoacusia', 'Indicar ejercicio y control de factores de riesgo vascular', 'Reevaluar en 6 a 12 meses con el mismo instrumento']
    },
    {
      nombre: 'Enfermedad de Alzheimer',
      color: '#4a3f7a',
      definicion: 'Enfermedad neurodegenerativa caracterizada por el deposito extracelular de peptido amiloide en placas y por la acumulacion intraneuronal de tau hiperfosforilada en ovillos neurofibrilares, que constituye la causa mas frecuente de demencia.',
      fisiopatologia: 'El procesamiento anomalo de la proteina precursora de amiloide genera peptido amiloide beta que se agrega en placas. En paralelo, la proteina tau se hiperfosforila, se desprende del microtubulo y forma ovillos. La patologia tau sigue una progresion topografica que empieza en la corteza entorrinal y el hipocampo y avanza hacia la neocorteza, lo que explica que el primer sintoma sea la memoria episodica y que despues se a&#241;adan lenguaje, praxias y orientacion. La perdida de neuronas colinergicas del nucleo basal de Meynert es la base racional de los anticolinesterasicos.',
      epidemiologia: 'Es la causa mas frecuente de demencia, y su frecuencia se duplica aproximadamente cada cinco a&#241;os a partir de los 65. En el mayor, la forma pura es menos comun que la MIXTA con patologia vascular, hallazgo que las series de autopsia han confirmado de forma consistente.',
      factores_riesgo: ['Edad, que es el factor de riesgo dominante', 'Alelo APOE epsilon 4, sobre todo en homocigosis', 'Antecedente familiar de primer grado', 'Mutaciones en APP, PSEN1 y PSEN2 en las formas de inicio precoz', 'Sindrome de Down', 'Bajo nivel educativo y baja reserva cognitiva', 'Hipertension en la edad media de la vida', 'Diabetes mellitus', 'Hipoacusia no corregida', 'Traumatismo craneoencefalico', 'Sedentarismo y aislamiento social', 'Depresion'],
      clinica: 'Inicio insidioso y progresion lenta, con AMNESIA EPISODICA como sintoma inicial: olvida hechos recientes, repite preguntas y no mejora al darle pistas, a diferencia del perfil vascular. Despues se a&#241;aden anomia, desorientacion espacial, apraxia y alteracion de las funciones ejecutivas. Existen variantes atipicas: la atrofia cortical posterior, con alteracion visuoespacial predominante, y la variante logopenica del lenguaje.',
      criterios_dx: 'Sindrome de demencia con perfil amnesico de inicio insidioso y progresion lenta, tras excluir otras causas. Los biomarcadores de amiloide y tau permiten el diagnostico con mayor certeza y son imprescindibles si se plantea tratamiento antiamiloide. Ver la Figura 2 de Definicion.',
      laboratorio: 'El estudio minimo comun. Biomarcadores en liquido cefalorraquideo (amiloide beta 42 bajo con tau total y fosfo-tau elevadas) o por tomografia de emision de positrones, solo en casos seleccionados. Genotipo de APOE si se plantea un anticuerpo antiamiloide, por el riesgo de ARIA.',
      imagen: 'Resonancia con ATROFIA HIPOCAMPAL y temporal medial, que apoya el diagnostico aunque no es especifica. Positrones de fluorodesoxiglucosa con hipometabolismo temporoparietal y en cingulo posterior en los casos dudosos.',
      complementarios: 'Valoracion neuropsicologica para caracterizar el perfil y establecer un basal. Valoracion del cuidador y de la red de apoyo, que forma parte del plan terapeutico desde el primer dia y no de una fase posterior.',
      dx_diferencial: 'Demencia vascular, demencia con cuerpos de Lewy, degeneracion frontotemporal, depresion, hidrocefalia normotensiva, deficit de B12, hipotiroidismo, efecto de farmacos y demencia mixta, que es probablemente lo mas frecuente en el mayor.',
      tx_medico: 'Ejercicio, estimulacion cognitiva y actividad social. Estructura y rutina en el entorno. APOYO AL CUIDADOR, que reduce su sobrecarga y retrasa la institucionalizacion. Planificacion anticipada de decisiones y valoracion de la capacidad mientras el paciente todavia puede participar. Seguridad: conduccion, cocina, extravio y manejo del dinero.',
      tx_farmacologico: 'ANTICOLINESTERASICOS (donepezilo, rivastigmina, galantamina) en fases leve y moderada, con beneficio sintomatico modesto; sus efectos adversos son sobre todo digestivos y bradicardia. MEMANTINA en la fase moderada y grave, sola o asociada. ANTICUERPOS ANTIAMILOIDE (lecanemab, donanemab) en la fase temprana con amiloide confirmado, en centros con experiencia, con resonancias de vigilancia por el riesgo de ARIA y conociendo el genotipo APOE. Evitar anticolinergicos y benzodiacepinas.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No por la demencia. Si por procesos intercurrentes, teniendo en cuenta que estos pacientes tienen riesgo muy alto de delirium y peor recuperacion funcional.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Prevencion activa del delirium: orientacion, luz natural, gafas y audifonos puestos, movilizacion precoz, sue&#241;o protegido, evitar sondas y sujeciones, y revision diaria de la medicacion.',
      seguimiento_ambulatorio: 'Revision periodica de la funcion, de la conducta y de la sobrecarga del cuidador. Reevaluar la indicacion del tratamiento farmacologico en fases avanzadas. Retirar de forma progresiva lo que ya no aporta.',
      pronostico: 'Progresion lenta a lo largo de a&#241;os. La supervivencia depende mucho de la edad al diagnostico y de la comorbilidad. Las causas de muerte mas frecuentes son la neumonia y las complicaciones de la inmovilidad.',
      algoritmo: ['Confirmar el sindrome de demencia con informante', 'Caracterizar el perfil: amnesico de inicio insidioso', 'Completar el estudio minimo con analitica y neuroimagen', 'Valorar biomarcadores solo si hay duda, inicio precoz o presentacion atipica', 'Descartar y tratar lo corregible antes de etiquetar', 'Iniciar anticolinesterasico en fase leve o moderada', 'A&#241;adir memantina en fase moderada o grave', 'Retirar anticolinergicos y benzodiacepinas', 'Poner en marcha el apoyo al cuidador desde el principio', 'Abordar seguridad, conduccion y planificacion anticipada']
    },
    {
      nombre: 'Deterioro cognitivo vascular y demencia vascular',
      color: '#8c3a34',
      definicion: 'Deterioro cognitivo atribuible a enfermedad cerebrovascular, que abarca desde el deterioro cognitivo vascular leve hasta la demencia vascular establecida, e incluye tanto el infarto estrategico como la enfermedad difusa de peque&#241;o vaso.',
      fisiopatologia: 'Hay varios mecanismos que producen el mismo sindrome. El infarto ESTRATEGICO en una zona critica (talamo, nucleo caudado, cingulo, hipocampo) puede producir demencia con una sola lesion. Los infartos multiples suman da&#241;o. Y la enfermedad de PEQUE&#209;O VASO produce lesiones difusas de sustancia blanca e infartos lacunares que desconectan los circuitos frontosubcorticales, lo que explica el perfil ejecutivo, el enlentecimiento y la alteracion precoz de la marcha y del control de esfinteres.',
      epidemiologia: 'Es la segunda causa de demencia como forma pura, pero la contribucion vascular esta presente en una proporcion mucho mayor de los casos si se cuentan las formas MIXTAS. Es ademas la mas prevenible, porque sus factores de riesgo son los factores de riesgo vascular clasicos.',
      factores_riesgo: ['HIPERTENSION ARTERIAL, que es el factor de riesgo modificable mas importante', 'Diabetes mellitus', 'Fibrilacion auricular', 'Tabaquismo', 'Dislipemia', 'Antecedente de ictus o de accidente isquemico transitorio', 'Enfermedad arterial periferica y carotidea', 'Apnea obstructiva del sue&#241;o', 'Insuficiencia renal cronica', 'Angiopatia amiloide cerebral', 'Edad avanzada', 'Sedentarismo y obesidad'],
      clinica: 'Curso ESCALONADO o de relacion temporal clara con un ictus, aunque la forma de peque&#241;o vaso puede ser insidiosa. Predominio EJECUTIVO: enlentecimiento, dificultad para planificar y para cambiar de tarea, apatia. La memoria se afecta menos y MEJORA CON PISTAS, a diferencia del Alzheimer. Alteracion PRECOZ de la marcha, caidas, incontinencia urinaria temprana, labilidad emocional y signos pseudobulbares.',
      criterios_dx: 'Deterioro cognitivo con evidencia de enfermedad cerebrovascular en la imagen y relacion plausible entre ambos, temporal o topografica. La escala isquemica de Hachinski orienta pero no es un criterio diagnostico. Ver la Figura 2 de Definicion.',
      laboratorio: 'El estudio minimo comun, mas el perfil vascular completo: glucemia y hemoglobina glucosilada, perfil lipidico, funcion renal y microalbuminuria.',
      imagen: 'Resonancia con infartos, lacunas, hiperintensidades de sustancia blanca, microsangrados y espacios perivasculares dilatados. La distribucion de los microsangrados orienta: lobares en la angiopatia amiloide, profundos en la enfermedad hipertensiva.',
      complementarios: 'Estudio etiologico del ictus si procede: electrocardiograma y monitorizacion prolongada para detectar fibrilacion auricular, ecocardiograma y estudio de troncos supraaorticos.',
      dx_diferencial: 'Enfermedad de Alzheimer, forma mixta (probablemente lo mas frecuente), hidrocefalia normotensiva (que comparte marcha, incontinencia y deterioro cognitivo), CADASIL en el paciente joven con antecedentes familiares, y vasculitis del sistema nervioso central.',
      tx_medico: 'CONTROL DE LOS FACTORES DE RIESGO VASCULAR, que es a la vez el tratamiento y la prevencion de la progresion: presion arterial, diabetes, lipidos, tabaco, ejercicio y peso. Tratamiento de la apnea del sue&#241;o. Rehabilitacion de la marcha y prevencion de caidas, que aqui son un problema precoz.',
      tx_farmacologico: 'Antiagregacion o anticoagulacion segun el mecanismo del ictus. Estatina. Antihipertensivos. Los anticolinesterasicos y la memantina tienen beneficio escaso en la demencia vascular pura, aunque se usan cuando hay componente mixto, que es lo habitual.',
      tx_intervencionista: 'Revascularizacion carotidea si esta indicada por el estudio del ictus. Cierre de orejuela en casos seleccionados con contraindicacion para anticoagular.',
      criterios_uci: 'Los del evento cerebrovascular agudo, no los de la demencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Tras un ictus, valorar de forma sistematica la cognicion antes del alta: el deterioro cognitivo posictus es frecuente, condiciona la rehabilitacion y con frecuencia no se busca.',
      seguimiento_ambulatorio: 'Control estrecho de los factores de riesgo, que es lo que puede frenar la progresion. Reevaluacion cognitiva y funcional periodica. Prevencion de caidas.',
      pronostico: 'Depende del control de los factores de riesgo y de la aparicion de nuevos eventos. Es la demencia con mayor margen de PREVENCION, y esa es su caracteristica mas relevante desde el punto de vista de la medicina interna.',
      algoritmo: ['Buscar relacion temporal o topografica entre el deterioro y la enfermedad cerebrovascular', 'Caracterizar el perfil: ejecutivo, con marcha alterada precozmente', 'Comprobar si la memoria mejora con pistas', 'Hacer resonancia y valorar carga vascular y microsangrados', 'Aplicar la escala de Hachinski como orientacion, no como criterio', 'Completar el estudio etiologico del ictus si procede', 'CONTROLAR de forma estricta los factores de riesgo vascular', 'Buscar y tratar la apnea del sue&#241;o', 'Iniciar rehabilitacion de la marcha y prevencion de caidas', 'Considerar componente mixto, que es lo mas frecuente en el mayor']
    },
    {
      nombre: 'Demencia con cuerpos de Lewy y de la enfermedad de Parkinson',
      color: '#2e6b6b',
      definicion: 'Demencias asociadas al deposito de alfa-sinucleina en cuerpos de Lewy corticales y subcorticales, que se diferencian entre si unicamente por el orden temporal de aparicion de la demencia y del parkinsonismo.',
      fisiopatologia: 'La alfa-sinucleina se agrega en cuerpos de Lewy que se distribuyen por el tronco, el sistema limbico y la neocorteza. La afectacion del tronco explica el trastorno de conducta del sue&#241;o REM, que puede preceder en a&#241;os al resto y es hoy el marcador prodromico mas util. El deficit colinergico es MAS intenso que en el Alzheimer, lo que explica dos cosas: que los anticolinesterasicos funcionen mejor aqui, y que los farmacos con actividad anticolinergica se toleren especialmente mal. El bloqueo dopaminergico por antipsicoticos sobre un sistema ya da&#241;ado produce la sensibilidad grave a estos farmacos.',
      epidemiologia: 'Es una de las causas mas frecuentes de demencia degenerativa tras el Alzheimer, y esta claramente infradiagnosticada: se etiqueta como Alzheimer con alucinaciones o como enfermedad psiquiatrica. Ese error tiene consecuencias inmediatas por el uso de antipsicoticos.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino', 'Trastorno de conducta del sue&#241;o REM, que es un marcador prodromico potente', 'Enfermedad de Parkinson establecida', 'Antecedente familiar de sinucleinopatia', 'Hiposmia', 'Estre&#241;imiento cronico de larga evolucion', 'Depresion', 'Variantes en el gen GBA', 'Alelo APOE epsilon 4'],
      clinica: 'Cuatro rasgos centrales: FLUCTUACION de la cognicion y del nivel de alerta (episodios de desconexion que se confunden con delirium o con crisis), ALUCINACIONES VISUALES recurrentes y bien formadas (personas o animales, con frecuencia sin miedo), TRASTORNO DE CONDUCTA DEL SUE&#209;O REM (habla, grita o se mueve mientras sue&#241;a, a veces a&#241;os antes) y PARKINSONISMO espontaneo, mas simetrico y con menos temblor de reposo que en la enfermedad de Parkinson. Se a&#241;aden disautonomia, caidas de repeticion, sincopes e hipersensibilidad a los neurolepticos.',
      criterios_dx: 'Combinacion de rasgos clinicos centrales y de biomarcadores indicativos. La REGLA DEL A&#209;O separa las dos etiquetas: si la demencia precede al parkinsonismo o aparece en el a&#241;o siguiente, es demencia con cuerpos de Lewy; si el parkinsonismo lleva mas de un a&#241;o, es demencia de la enfermedad de Parkinson.',
      laboratorio: 'El estudio minimo comun. No hay marcador serico util. La polisomnografia confirma el sue&#241;o REM sin atonia cuando el diagnostico es dudoso.',
      imagen: 'Resonancia con atrofia hipocampal RELATIVAMENTE CONSERVADA en comparacion con el Alzheimer, dato que ayuda. DAT-SPECT con captacion reducida en los ganglios basales y gammagrafia cardiaca con MIBG reducida como biomarcadores indicativos.',
      complementarios: 'POLISOMNOGRAFIA para documentar el trastorno de conducta del sue&#241;o REM. Valoracion de la disautonomia con medida de la presion arterial en bipedestacion, que detecta hipotension ortostatica sintomatica y contribuye a las caidas.',
      dx_diferencial: 'Enfermedad de Alzheimer con sintomas psicoticos, delirium (con el que se confunde por la fluctuacion), paralisis supranuclear progresiva y atrofia multisistemica, demencia vascular, y psicosis de inicio tardio.',
      tx_medico: 'Medidas ambientales para las alucinaciones no amenazantes, que muchas veces no requieren farmaco. Prevencion de caidas. Manejo de la hipotension ortostatica con medidas posturales, sal y medias de compresion. Higiene y seguridad del sue&#241;o para el trastorno de conducta del REM: retirar objetos peligrosos del dormitorio.',
      tx_farmacologico: 'ANTICOLINESTERASICOS, que funcionan MEJOR aqui que en el Alzheimer, sobre todo sobre las alucinaciones y la fluctuacion. Levodopa a dosis bajas para el parkinsonismo, sabiendo que puede empeorar las alucinaciones y que el margen es estrecho. Melatonina o clonazepam a dosis bajas para el trastorno de conducta del sue&#241;o REM. <strong style="color:#8c3a34;">ANTIPSICOTICOS: evitarlos.</strong> La sensibilidad puede producir rigidez grave, deterioro del nivel de conciencia y un cuadro parecido al sindrome neuroleptico maligno. Si son imprescindibles, quetiapina o clozapina a dosis minimas y con vigilancia. Evitar anticolinergicos.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Reaccion grave a neurolepticos, sindrome neuroleptico maligno y complicaciones de las caidas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'ALERTA EN LA HISTORIA sobre la sensibilidad a los antipsicoticos, visible para todo el equipo. Ante agitacion, buscar primero causas medicas y usar medidas no farmacologicas. La fluctuacion propia de la enfermedad se confunde con delirium, y el delirium tambien es mas frecuente aqui, de modo que hay que valorar ambas cosas.',
      seguimiento_ambulatorio: 'Revision de la tolerancia a la levodopa y del equilibrio entre movilidad y alucinaciones. Control de la disautonomia. Apoyo al cuidador, que en esta demencia soporta una carga especialmente alta por las alucinaciones y las caidas.',
      pronostico: 'Progresion algo mas rapida que en el Alzheimer, con mayor carga de sintomas psicoticos, caidas e ingresos. El reconocimiento precoz evita el da&#241;o iatrogenico, que es lo que mas se puede modificar.',
      algoritmo: ['Preguntar por alucinaciones visuales y por la fluctuacion del nivel de alerta', 'Preguntar SIEMPRE si habla, grita o se mueve mientras sue&#241;a', 'Explorar parkinsonismo y medir la presion arterial en bipedestacion', 'Aplicar la regla del a&#241;o para elegir la etiqueta', 'Valorar DAT-SPECT o MIBG si el diagnostico es dudoso', 'Hacer polisomnografia si hace falta documentar el trastorno del REM', 'MARCAR EN LA HISTORIA la sensibilidad a antipsicoticos', 'Iniciar anticolinesterasico, que aqui rinde mas', 'Usar levodopa a dosis bajas y vigilar las alucinaciones', 'Tratar el sue&#241;o REM y prevenir caidas']
    },
    {
      nombre: 'Degeneracion frontotemporal',
      color: '#6b4a8c',
      definicion: 'Grupo de enfermedades neurodegenerativas con atrofia de los lobulos frontales y temporales, que se manifiestan como cambio de conducta y de personalidad (variante conductual) o como deterioro progresivo del lenguaje (afasia progresiva primaria).',
      fisiopatologia: 'La degeneracion afecta a las redes frontales y temporales anteriores que sostienen la conducta social, la empatia y el control de los impulsos, lo que explica que el sintoma inicial sea conductual y no amnesico. Segun la proteina acumulada se distinguen formas con tau, con TDP-43 y con FUS. La expansion en el gen C9orf72 es la causa genetica mas frecuente y explica la asociacion, importante en la practica, entre degeneracion frontotemporal y esclerosis lateral amiotrofica: un mismo paciente o una misma familia puede presentar ambas.',
      epidemiologia: 'Es una de las causas mas frecuentes de demencia de inicio PRECOZ, por debajo de los 65 a&#241;os, donde compite con el Alzheimer. Tiene la mayor carga de agregacion familiar de todas las demencias, y el retraso diagnostico se mide en a&#241;os porque se etiqueta como enfermedad psiquiatrica.',
      factores_riesgo: ['Antecedente familiar de demencia de inicio precoz', 'Antecedente familiar de esclerosis lateral amiotrofica', 'Expansion en C9orf72', 'Mutaciones en MAPT y en progranulina', 'Edad entre la quinta y la sexta decada', 'Traumatismo craneoencefalico previo', 'Sexo masculino para la variante conductual', 'Ausencia de factores protectores conocidos', 'Antecedente de trastorno psiquiatrico mal filiado', 'Consanguinidad'],
      clinica: 'VARIANTE CONDUCTUAL: desinhibicion social, apatia e inercia, PERDIDA DE EMPATIA, conductas repetitivas o compulsivas, hiperoralidad y cambios en la dieta (preferencia por los dulces, atracones), con disfuncion ejecutiva y memoria y capacidad visuoespacial relativamente conservadas. AFASIA PROGRESIVA PRIMARIA: variante no fluente o agramatica (habla laboriosa, agramatismo, apraxia del habla) y variante semantica (perdida del significado de las palabras con habla fluente y vacia).',
      criterios_dx: 'Criterios clinicos con tres o mas rasgos conductuales para la forma posible, a los que se a&#241;aden deterioro funcional e imagen compatible para la probable. Ver la Figura 2 de Definicion.',
      laboratorio: 'El estudio minimo comun. ESTUDIO GENETICO cuando hay antecedente familiar, inicio muy precoz o asociacion con esclerosis lateral amiotrofica, siempre con consejo genetico previo.',
      imagen: 'Resonancia con atrofia FRONTAL y TEMPORAL ANTERIOR, con frecuencia asimetrica. Positrones de fluorodesoxiglucosa con hipometabolismo frontotemporal, util cuando la resonancia todavia no muestra atrofia clara, que es lo habitual al principio.',
      complementarios: 'Valoracion neuropsicologica que documente el perfil disejecutivo con memoria conservada. Exploracion neurologica dirigida a buscar signos de MOTONEURONA (fasciculaciones, atrofia, debilidad), porque su presencia cambia el pronostico y el manejo.',
      dx_diferencial: 'Trastorno bipolar, depresion, esquizofrenia de inicio tardio y trastorno de personalidad, con los que se confunde durante a&#241;os. Ademas: enfermedad de Alzheimer con presentacion disejecutiva, paralisis supranuclear progresiva, degeneracion corticobasal, y demencia vascular frontal.',
      tx_medico: 'Manejo CONDUCTUAL y ambiental como primera linea: estructura, rutinas, retirada de estimulos desencadenantes, redireccion en lugar de confrontacion. Apoyo intensivo al cuidador, que aqui soporta una carga particularmente dura porque el paciente es mas joven, no reconoce el problema y la conducta puede tener consecuencias sociales, economicas y legales.',
      tx_farmacologico: 'Los INHIBIDORES DE LA RECAPTACION DE SEROTONINA pueden mejorar la desinhibicion, la impulsividad y las conductas repetitivas. <strong>Los ANTICOLINESTERASICOS NO estan indicados</strong> y pueden empeorar la conducta. La memantina no ha demostrado beneficio. Los antipsicoticos se usan solo si hay riesgo, a dosis minima y por el menor tiempo posible.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No por la enfermedad. Si por complicaciones, sobre todo respiratorias en las formas con afectacion de motoneurona.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La desinhibicion y la falta de conciencia de enfermedad complican el ingreso. Anticipar el plan conductual, evitar sujeciones cuando sea posible y explicar al equipo que la conducta es un sintoma de la enfermedad y no una eleccion del paciente.',
      seguimiento_ambulatorio: 'Valoracion precoz de la CAPACIDAD para decisiones economicas y legales, que es un problema real y temprano en esta enfermedad. Consejo genetico a la familia. Seguimiento del cuidador. Vigilar la aparicion de signos de motoneurona.',
      pronostico: 'Peor que el de la enfermedad de Alzheimer, con supervivencia media mas corta desde el diagnostico. Las formas asociadas a esclerosis lateral amiotrofica tienen el peor pronostico, marcado por la afectacion respiratoria.',
      algoritmo: ['Sospecharla ante cambio de CONDUCTA o de personalidad antes que de memoria', 'Sospecharla ante demencia de inicio antes de los 65 a&#241;os', 'Preguntar por perdida de empatia, desinhibicion e hiperoralidad', 'Comprobar que la memoria esta relativamente conservada', 'Hacer resonancia buscando atrofia frontal y temporal anterior', 'Valorar positrones si la resonancia todavia es normal', 'Buscar signos de MOTONEURONA en la exploracion', 'Ofrecer estudio genetico y consejo si hay antecedente familiar', 'NO usar anticolinesterasicos', 'Valorar precozmente la capacidad legal y economica']
    },
    {
      nombre: 'Demencia rapidamente progresiva y enfermedad por priones',
      color: '#6b2d4a',
      definicion: 'Deterioro cognitivo que progresa hasta la demencia en semanas o pocos meses, habitualmente en menos de uno o dos a&#241;os, y dentro del cual la enfermedad por priones es la causa degenerativa caracteristica.',
      fisiopatologia: 'En la enfermedad por priones, la proteina prionica celular adopta una conformacion anomala rica en lamina beta que actua como molde y propaga el cambio conformacional a las moleculas vecinas. El resultado es acumulacion, muerte neuronal y degeneracion espongiforme. Esa autopropagacion sin acido nucleico explica la resistencia del agente a los metodos habituales de esterilizacion y la posibilidad de transmision iatrogenica. En el resto de las demencias rapidamente progresivas, el mecanismo es el de la enfermedad de base: inflamatorio, infeccioso, neoplasico, vascular o toxico-metabolico.',
      epidemiologia: 'La enfermedad de Creutzfeldt-Jakob esporadica es rara pero es la forma mas frecuente de enfermedad prionica humana. Lo relevante en la practica es que la mayoria de las demencias rapidamente progresivas NO son prionicas: una proporcion importante corresponde a causas tratables, sobre todo autoinmunes, neoplasicas, infecciosas y toxico-metabolicas.',
      factores_riesgo: ['Edad entre la sexta y la septima decada para la forma esporadica', 'Mutaciones en el gen PRNP en las formas geneticas', 'Antecedente familiar', 'Exposicion iatrogenica: injertos de duramadre, hormona de crecimiento de origen humano, instrumental neuroquirurgico', 'Para el resto de causas: neoplasia conocida u oculta', 'Enfermedad autoinmune conocida', 'Inmunosupresion', 'Exposicion a toxicos y a farmacos neurotoxicos', 'Deficits nutricionales, sobre todo tiamina y B12', 'Factores de riesgo vascular para la forma vascular rapida'],
      clinica: 'Deterioro cognitivo que avanza de forma evidente entre visitas, acompa&#241;ado de signos neurologicos que no son propios de una demencia degenerativa habitual: MIOCLONIAS, ataxia, signos piramidales y extrapiramidales, alteraciones visuales, crisis y evolucion a mutismo acinetico. En las causas tratables se a&#241;aden con frecuencia fiebre, crisis, movimientos anormales, sintomas psiquiatricos prominentes o afectacion sistemica.',
      criterios_dx: 'El diagnostico es POR EXCLUSION de lo tratable. La combinacion de resonancia con difusion compatible, RT-QuIC positiva en liquido cefalorraquideo y electroencefalograma con complejos periodicos permite un diagnostico de alta probabilidad. Ver la Figura 4 de Definicion.',
      laboratorio: 'Estudio amplio y en paralelo, no secuencial: analitica completa con tiroides, B12, tiamina, cobre y toxicos; autoinmunidad y ANTICUERPOS ONCONEURONALES y de superficie neuronal; serologias (VIH, sifilis, herpes); marcadores tumorales y busqueda de neoplasia. En liquido cefalorraquideo: celularidad, proteinas, glucosa, bandas oligoclonales, citologia, microbiologia, RT-QuIC y 14-3-3.',
      imagen: 'RESONANCIA CON DIFUSION, que hay que pedir de forma explicita: hiperintensidad cortical en cinta y en ganglios basales en la enfermedad prionica. En las causas tratables puede mostrar realce meningeo, hiperintensidad limbica, lesiones desmielinizantes o infartos. Tomografia por emision de positrones corporal para buscar neoplasia oculta.',
      complementarios: 'ELECTROENCEFALOGRAMA, que busca complejos periodicos de ondas agudas y descarta un estado epileptico no convulsivo, causa tratable que imita el cuadro. Biopsia cerebral en casos muy seleccionados cuando el diagnostico sigue sin aclararse y podria cambiar el tratamiento.',
      dx_diferencial: 'Ordenado por lo que urge no perderse: encefalitis AUTOINMUNE y paraneoplasica, estado epileptico no convulsivo, infecciones (VIH, sifilis, herpes, tuberculosis, Whipple, criptococo), linfoma y carcinomatosis meningea, vasculitis del sistema nervioso central, toxico-metabolico (B12, tiamina, tiroides, litio, quimioterapia), hidrocefalia normotensiva y hematoma subdural.',
      tx_medico: 'Mientras se estudia, tratamiento de soporte y correccion de todo lo corregible: tiamina, B12, tiroides, electrolitos, retirada de farmacos sospechosos. En la enfermedad prionica confirmada, cuidados paliativos y apoyo a la familia, que es lo que aporta valor real.',
      tx_farmacologico: 'No hay tratamiento que modifique el curso de la enfermedad prionica. El manejo es sintomatico: clonazepam o levetiracetam para las mioclonias, control de crisis y de la agitacion. En las causas tratables, el tratamiento de la causa, y en la sospecha alta de encefalitis autoinmune conviene no retrasar el tratamiento inmunologico esperando confirmacion.',
      tx_intervencionista: 'No aplica, salvo la biopsia cerebral en casos seleccionados.',
      criterios_uci: 'Estado epileptico, deterioro grave del nivel de conciencia y complicaciones respiratorias, siempre que el objetivo terapeutico lo justifique.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica. La enfermedad prionica CONTRAINDICA la donacion de organos y tejidos.',
      seguimiento_hospitalario: 'PRECAUCIONES CON EL INSTRUMENTAL: el prion resiste la esterilizacion habitual, de modo que si el paciente se somete a un procedimiento neuroquirurgico invasivo hay que avisar al servicio para aplicar el protocolo especifico. No hace falta aislamiento del paciente ni precauciones especiales para el contacto habitual. Notificacion del caso segun la normativa local.',
      seguimiento_ambulatorio: 'Apoyo paliativo precoz, planificacion anticipada de decisiones y acompa&#241;amiento a la familia. En las formas geneticas, consejo genetico.',
      pronostico: 'Muy malo en la enfermedad prionica, con supervivencia de meses desde el inicio de los sintomas. En las causas tratables, el pronostico depende por completo de la precocidad del diagnostico, lo que convierte la busqueda ordenada y en paralelo en la intervencion mas valiosa del tema.',
      algoritmo: ['Reconocer la VELOCIDAD: deterioro evidente entre visitas', 'Tratarlo como una urgencia diagnostica, no como una consulta externa', 'Estudiar en PARALELO, no de forma secuencial', 'Descartar primero lo TRATABLE: autoinmune, infeccioso, neoplasico, metabolico', 'Hacer electroencefalograma y descartar estado epileptico no convulsivo', 'Pedir resonancia CON DIFUSION de forma explicita', 'Analizar el liquido cefalorraquideo, incluida la RT-QuIC', 'Buscar neoplasia oculta con imagen corporal', 'No retrasar el tratamiento inmunologico si la sospecha autoinmune es alta', 'Si se confirma enfermedad prionica: paliativos, precaucion con instrumental y notificacion']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En deterioro cognitivo los fallos son casi siempre los mismos: no se habla con el informante, no se descarta el delirium, no se revisa la medicacion y no se busca lo tratable. Y hay un error concreto que puede da&#241;ar de forma inmediata al paciente: dar un antipsicotico a alguien con demencia por cuerpos de Lewy.',
    parametros: ['Hablar SIEMPRE con un informante y preguntar por hechos concretos', 'Descartar delirium antes de diagnosticar demencia: inicio agudo, fluctuacion, atencion', 'Comprobar la autonomia en las actividades instrumentales, que es la linea', 'Pedir a todos analitica con calcio, TSH y VITAMINA B12', 'Pedir a todos NEUROIMAGEN estructural', 'REVISAR la medicacion y retirar la carga anticolinergica y las benzodiacepinas', 'Buscar depresion, apnea del sue&#241;o e hipoacusia no corregida', 'NO dar anticolinesterasicos en la degeneracion frontotemporal', 'NO dar antipsicoticos en la demencia con cuerpos de Lewy, y marcarlo en la historia', 'Ante un sintoma conductual, buscar antes dolor, infeccion, estre&#241;imiento o retencion', 'Si progresa en semanas o pocos meses, estudiar en paralelo y con urgencia', 'Abordar pronto la conduccion, la seguridad en casa y la planificacion anticipada'],
    criterios_uci_general: 'La demencia no ingresa en cuidados intensivos por si misma. Si lo hacen sus complicaciones y algunos escenarios concretos: reaccion grave a neurolepticos o sindrome neuroleptico maligno en la demencia con cuerpos de Lewy, estado epileptico en una demencia rapidamente progresiva, y las complicaciones respiratorias de las formas con afectacion de motoneurona. En todos ellos, la decision debe tener en cuenta la situacion funcional previa y la voluntad expresada por el paciente.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica. La enfermedad por priones contraindica ademas la donacion de organos y tejidos.',
    prevencion: 'Primaria: es donde mas margen hay. La Comision del Lancet identifica una lista de factores modificables que explican una fraccion sustancial de los casos, y varios de ellos son territorio directo del internista: HIPERTENSION en la edad media de la vida, diabetes, tabaco, obesidad, sedentarismo, consumo excesivo de alcohol, colesterol LDL elevado, depresion, aislamiento social, traumatismo craneal, contaminacion y, de forma destacada, la HIPOACUSIA y la perdida de vision NO CORREGIDAS, que se pasan por alto con facilidad y se tratan bien. Secundaria: deteccion del deterioro cognitivo leve y busqueda activa de causas corregibles. Terciaria: prevencion del delirium durante los ingresos, revision periodica de la medicacion, apoyo al cuidador y planificacion anticipada de decisiones mientras el paciente todavia puede participar.'
  }
};

export const compCites = {
  'Deterioro cognitivo leve y enfoque inicial': [1, 7, 6],
  'Enfermedad de Alzheimer': [2, 11, 12, 16],
  'Deterioro cognitivo vascular y demencia vascular': [5, 8],
  'Demencia con cuerpos de Lewy y de la enfermedad de Parkinson': [3, 15],
  'Degeneracion frontotemporal': [4],
  'Demencia rapidamente progresiva y enfermedad por priones': [13, 14]
};
export const estigmasTitulo = 'Signos y pistas que orientan ante un deterioro cognitivo';
export const estigmas = [
  { s: 'El paciente viene solo y quita importancia', p: 'Anosognosia', photo: null, desc: 'Restar importancia a un problema que el entorno describe como serio es en si mismo un dato, tipico de la degeneracion frontotemporal y de fases intermedias del Alzheimer. Al reves, quien acude muy preocupado por su memoria y rinde bien suele tener ansiedad o depresion.' },
  { s: 'Respuestas de "no se" repetidas', p: 'Orienta a depresion', photo: null, desc: 'El paciente deprimido se queja mucho, se esfuerza poco y responde "no se". El paciente con demencia se queja poco, se esfuerza y da respuestas aproximadas o confabuladas. Ambas coexisten con frecuencia, de modo que encontrar una no descarta la otra.' },
  { s: 'La memoria mejora al dar pistas', p: 'Perfil no amnesico', photo: null, desc: 'Si al ofrecer una clave el paciente recupera la palabra, el problema esta en la recuperacion y no en el almacenamiento: apunta a perfil ejecutivo o subcortical, tipico de la demencia vascular. En el Alzheimer, la pista no ayuda porque el dato nunca se almaceno.' },
  { s: 'Alteracion de la marcha precoz', p: 'Vascular o hidrocefalia', photo: null, desc: 'En el Alzheimer la marcha se afecta tarde. Si aparece pronto, hay que pensar en enfermedad de peque&#241;o vaso o en hidrocefalia normotensiva, que a&#241;ade incontinencia urinaria temprana y es potencialmente tratable con derivacion.' },
  { s: 'Habla, grita o se mueve mientras sue&#241;a', p: 'Trastorno de conducta del REM', photo: null, desc: 'Es uno de los rasgos centrales de la demencia con cuerpos de Lewy y puede preceder a&#241;os al resto de los sintomas. Hay que preguntarlo de forma explicita a la pareja de cama, porque el paciente no lo sabe.' },
  { s: 'Alucinaciones visuales bien formadas', p: 'Cuerpos de Lewy', photo: null, desc: 'Ve personas o animales, con detalle y con frecuencia sin miedo. Junto con la fluctuacion, el parkinsonismo y el trastorno del sue&#241;o REM, define el cuadro y obliga a marcar en la historia la sensibilidad a los antipsicoticos.' },
  { s: 'Fluctuacion del nivel de alerta', p: 'Se confunde con delirium', photo: null, desc: 'Episodios de desconexion o de somnolencia que alternan con periodos lucidos, dentro del mismo dia. Es un rasgo central de la demencia con cuerpos de Lewy y una fuente constante de confusion con el delirium, que ademas puede coexistir.' },
  { s: 'Perdida de empatia y desinhibicion', p: 'Frontotemporal', photo: null, desc: 'Comentarios inapropiados, indiferencia ante el sufrimiento ajeno, conductas repetitivas y apetito por los dulces, con memoria relativamente conservada. Se etiqueta como enfermedad psiquiatrica durante a&#241;os, sobre todo porque el paciente es joven.' },
  { s: 'Demencia antes de los 65 a&#241;os', p: 'Cambia el diferencial', photo: null, desc: 'El inicio precoz obliga a ampliar el estudio: degeneracion frontotemporal, causas geneticas, autoinmunes, infecciosas (VIH, sifilis) y metabolicas. Aqui los biomarcadores y el estudio genetico si tienen un papel claro.' },
  { s: 'Mioclonias con deterioro rapido', p: 'Alarma', photo: null, desc: 'Sacudidas breves, a menudo desencadenadas por el sobresalto, junto con un deterioro que avanza entre visitas. Obliga a estudiar en paralelo y con urgencia, y a pedir resonancia CON DIFUSION de forma explicita.' },
  { s: 'Deterioro que avanza entre una visita y otra', p: 'Urgencia diagnostica', photo: null, desc: 'Una demencia degenerativa habitual no cambia de forma perceptible en semanas. Si lo hace, una parte importante de las causas posibles es TRATABLE, y la que mas urge no perderse es la encefalitis autoinmune.' },
  { s: 'Lista larga de farmacos anticolinergicos', p: 'Lo que mas rinde revisar', photo: null, desc: 'Antihistaminicos, antimuscarinicos para la vejiga, antidepresivos triciclicos, algunos antipsicoticos y antiemeticos suman carga anticolinergica. Retirar lo prescindible mejora la cognicion sin a&#241;adir ningun farmaco nuevo.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Cribado cognitivo breve (calculadora disponible)': [9, 10],
  'Deterioro cognitivo leve frente a demencia (calculadora disponible)': [1, 2, 7],
  'Escala isquemica de Hachinski (calculadora disponible)': [8, 5],
  'Criterios de demencia con cuerpos de Lewy': [3],
  'Criterios de la variante conductual de la degeneracion frontotemporal': [4],
  'Estudio etiologico minimo (calculadora disponible)': [16, 14]
};
export const escalaCalc = {
  'Cribado cognitivo breve (calculadora disponible)': 'cribado-cognitivo',
  'Deterioro cognitivo leve frente a demencia (calculadora disponible)': 'dcl-vs-demencia',
  'Escala isquemica de Hachinski (calculadora disponible)': 'hachinski',
  'Estudio etiologico minimo (calculadora disponible)': 'estudio-demencia'
};
export const compGroups = [
  { name: 'El sindrome', items: ['Deterioro cognitivo leve y enfoque inicial'] },
  { name: 'Las causas degenerativas', items: ['Enfermedad de Alzheimer', 'Demencia con cuerpos de Lewy y de la enfermedad de Parkinson', 'Degeneracion frontotemporal'] },
  { name: 'Vascular y lo rapido', items: ['Deterioro cognitivo vascular y demencia vascular', 'Demencia rapidamente progresiva y enfermedad por priones'] }
];
export const complicacionesIntro = 'La primera ficha es el sindrome y el enfoque inicial: donde esta la linea entre deterioro cognitivo leve y demencia, y que estudio se hace a todos. Las tres siguientes son las causas degenerativas que hay que saber distinguir, cada una con una consecuencia practica propia: el Alzheimer por su tratamiento, los cuerpos de Lewy por la sensibilidad a los antipsicoticos y la frontotemporal porque se confunde con enfermedad psiquiatrica y no lleva anticolinesterasicos. Las dos ultimas son la vascular, que es la mas prevenible, y la rapidamente progresiva, que es la unica que se maneja con urgencia.';
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
  root: { title: 'DETERIORO COGNITIVO', color: '#4a3f7a', target: 'definicion' },
  branches: [
    { title: 'QUE GRADO', sub: 'La linea es la autonomia', color: '#8a6a1f', target: 'clasificacion', leaves: [
      { title: 'Descartar delirium', sub: 'Agudo, fluctuante, atencion', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hablar con el informante', sub: 'Hechos, no impresiones', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Autonomia conservada', sub: 'Deterioro cognitivo leve', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Autonomia perdida', sub: 'Demencia', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'QUE CAUSA', sub: 'Cuatro perfiles', color: '#4a3f7a', target: 'complicaciones', leaves: [
      { title: 'Alzheimer', sub: 'Memoria episodica primero', color: '#4a3f7a', target: 'complicaciones' },
      { title: 'Vascular', sub: 'Escalonado y ejecutivo', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Cuerpos de Lewy', sub: 'Cuidado con los antipsicoticos', color: '#2e6b6b', target: 'complicaciones' },
      { title: 'Frontotemporal', sub: 'Conducta antes que memoria', color: '#6b4a8c', target: 'complicaciones' }
    ] },
    { title: 'QUE BUSCAR', sub: 'Lo tratable', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'B12, TSH y calcio', sub: 'A todos', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Neuroimagen', sub: 'Subdural, hidrocefalia, tumor', color: '#2e5a8c', target: 'diagnostico' },
      { title: 'La lista de farmacos', sub: 'Lo que mas rinde revisar', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Si avanza en semanas', sub: 'Urgencia diagnostica', color: '#6b2d4a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [16, 13], no_invasivos: [9, 7, 8], imagen: [2, 13] };
export const clasificacionCite = [1, 3, 4, 8];
export const seguimientoCite = [6, 15, 16];
