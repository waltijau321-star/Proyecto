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
  subtitulo: 'Módulo 61 · Medicina Interna',
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
    <strong style="color:#4a3f7a;">La línea entre deterioro cognitivo leve y demencia no la marca la puntuación de un test, sino la AUTONOMIA.</strong> <span style="color:var(--ink-dim);">La pregunta operativa es: lo que ha perdido, ¿le impide ya manejarse solo en su vida?</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">DETERIORO COGNITIVO LEVE</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Cambio cognitivo <strong style="color:var(--ink);">objetivable</strong> respecto a como era antes, referido por el paciente o por un informante y confirmado en la exploración. Pero <strong style="color:var(--ink);">CONSERVA la independencia</strong> en las actividades instrumentales: sigue manejando su dinero, su medicación y sus desplazamientos, aunque le cueste más o tarde más.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">DEMENCIA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">El deterioro es suficiente para <strong style="color:var(--ink);">INTERFERIR con la independencia</strong>. Ya necesita ayuda o supervisión para las actividades instrumentales, y en fases avanzadas para las básicas. Afecta a uno o más dominios y no se explica por delirium ni por un trastorno psiquiátrico mayor.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">El INFORMANTE no es opcional.</strong> El paciente con anosognosia minimiza, y el que tiene depresión exagera. Hay que preguntar a alguien que conviva con el, y preguntar por hechos concretos, no por impresiones: ¿quién paga los recibos? ¿se toma la medicación sin ayuda? ¿ha dejado de cocinar? ¿se ha perdido alguna vez? ¿sigue conduciendo?
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Y antes de nada: ¿es un DELIRIUM?</strong> Inicio agudo, curso fluctuante y alteración de la ATENCIÓN apuntan a delirium, no a demencia, y obligan a buscar la causa aguda. Ojo: la demencia es el principal factor de riesgo de delirium, y no es raro que el primer episodio de delirium sea lo que desenmascara una demencia que ya estaba.
    </div>
  </div>
</div>`;

const perfilesHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#4a3f7a22;border:1px solid #4a3f7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#4a3f7a;">ALZHEIMER</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inicio <strong style="color:var(--ink);">insidioso y progresión lenta</strong>, con <strong>MEMORIA EPISÓDICA</strong> como síntoma inicial: olvida hechos recientes, repite preguntas, y no mejora con pistas. Después se añaden lenguaje, praxias y orientación. Atrofia de hipocampo en la resonancia.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">VASCULAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Curso <strong style="color:var(--ink);">ESCALONADO</strong> o relacionado en el tiempo con un ictus, con predominio <strong>EJECUTIVO</strong> y enlentecimiento, y <strong>alteración de la marcha PRECOZ</strong>. Factores de riesgo vascular y lesiones en la imagen. La memoria mejora con pistas, a diferencia del Alzheimer.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b6b;">CUERPOS DE LEWY</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Cuatro rasgos centrales: <strong style="color:var(--ink);">FLUCTUACIÓN</strong> de la cognición y la alerta, <strong style="color:var(--ink);">ALUCINACIONES VISUALES</strong> bien formadas y recurrentes, <strong style="color:var(--ink);">trastorno de conducta del sueño REM</strong> (que puede preceder años) y <strong style="color:var(--ink);">PARKINSONISMO</strong> espontáneo.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">FRONTOTEMPORAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inicio más <strong style="color:var(--ink);">JOVEN</strong>. Variante conductual: desinhibición, apatia, <strong>pérdida de empatia</strong>, conductas repetitivas, hiperoralidad y disfunción ejecutiva con memoria relativamente conservada. Variantes del lenguaje: afasia progresiva primaria. Se confunde con enfermedad psiquiátrica durante años.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">La REGLA DEL AÑO, que decide una etiqueta y no cambia el manejo.</strong> Si la demencia aparece antes que el parkinsonismo, o dentro del año siguiente, se llama <strong>demencia con cuerpos de Lewy</strong>. Si el parkinsonismo lleva más de un año instaurado cuando llega la demencia, se llama <strong>demencia de la enfermedad de Parkinson</strong>. Comparten sustrato, pronóstico y, sobre todo, la misma precaución con los antipsicóticos.
  </div>
</div>`;

const estudioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">El objetivo del estudio no es solo poner una etiqueta, sino no dejar escapar lo TRATABLE.</strong> <span style="color:var(--ink-dim);">Las causas reversibles puras son minoría, pero las contribuyentes (fármacos, depresión, déficits, tiroides, apnea) son muy frecuentes y corregirlas mejora al paciente aunque haya una degeneración de fondo.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #4a3f7a;border-radius:8px;padding:6px 8px;background:#4a3f7a08;">
      <div style="font-weight:700;color:#4a3f7a;text-align:center;margin-bottom:4px;">ANALÍTICA A TODOS</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hemograma, bioquímica con <strong style="color:var(--ink);">CALCIO</strong>, función renal y hepática, <strong style="color:var(--ink);">TSH</strong> y <strong style="color:var(--ink);">VITAMINA B12</strong> (con ácido metilmalónico si esta en zona baja-normal). Según contexto y factores de riesgo: serología de sífilis y de VIH, folato, y estudio de tóxicos.</div>
    </div>
    <div style="border:1.5px solid #2e5a8c;border-radius:8px;padding:6px 8px;background:#2e5a8c08;">
      <div style="font-weight:700;color:#2e5a8c;text-align:center;margin-bottom:4px;">NEUROIMAGEN A TODOS</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Estructural, preferentemente <strong style="color:var(--ink);">RESONANCIA</strong>. Busca lo que cambia la conducta: hematoma subdural crónico, <strong>hidrocefalia normotensiva</strong>, tumor, lesiones vasculares y su carga, y el patrón de atrofia (hipocampal, frontotemporal, posterior).</div>
    </div>
  </div>
  <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f10;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Las tres causas que más se pasan por alto y que no salen en la analítica.</strong> <strong style="color:var(--ink);">FÁRMACOS</strong> con carga anticolinergica (antihistamínicos, antimuscarinicos urinarios, antidepresivos tricíclicos), benzodiacepinas y opioides: revisar la lista completa y retirar lo que se pueda. <strong style="color:var(--ink);">DEPRESIÓN</strong>, que puede imitar una demencia y que en el mayor se presenta con quejas de memoria y respuestas de "no se". <strong style="color:var(--ink);">APNEA DEL SUEÑO</strong> e hipoacusia no corregida, que empeoran el rendimiento cognitivo y son tratables.
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Los biomarcadores no son para todos.</strong> Amiloide y tau en líquido cefalorraquídeo o por tomografía de emision de positrones aportan cuando el diagnóstico es dudoso, el inicio es precoz o la presentación es atípica, y son <strong>imprescindibles</strong> si se plantea un anticuerpo antiamiloide. En un caso típico de demencia avanzada no cambian nada y no están indicados.
  </div>
</div>`;

const rapidaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Una demencia que avanza en SEMANAS O POCOS MESES no es una demencia degenerativa hasta que se demuestre.</strong> <span style="color:var(--ink-dim);">Es una urgencia diagnóstica, porque una parte importante de sus causas es TRATABLE y el tiempo cuenta.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">LO QUE HAY QUE DESCARTAR PRIMERO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Porque tiene tratamiento: <strong style="color:var(--ink);">encefalitis autoinmune</strong> y paraneoplásica, <strong>infecciones</strong> (VIH, sífilis, herpes, tuberculosis, Whipple), <strong>neoplasia</strong> y linfoma del sistema nervioso, <strong>tóxico-metabólico</strong> (B12, tiamina, tiroides, litio, quimioterapia), <strong>vasculitis</strong> del sistema nervioso central, y hematoma subdural o hidrocefalia.</div>
    </div>
    <div style="border:1.5px solid #6b2d4a;border-radius:8px;padding:6px 8px;background:#6b2d4a08;">
      <div style="font-weight:700;color:#6b2d4a;text-align:center;margin-bottom:4px;">ENFERMEDAD POR PRIONES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Deterioro rápido con <strong style="color:var(--ink);">MIOCLONÍAS</strong>, ataxia, signos piramidales y extrapiramidales, alteraciones visuales, y evolución a mutismo acinetico. Es un diagnóstico al que se llega <strong>por exclusión de lo tratable</strong>, no de entrada.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #6b2d4a;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#6b2d4a;">RESONANCIA</strong><br>Hiperintensidad en DIFUSIÓN en corteza (cinta cortical) y en ganglios basales. Es el hallazgo más sensible y hay que pedir difusión de forma explícita.</div>
    <div style="border:1px solid #6b2d4a;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#6b2d4a;">LÍQUIDO CEFALORRAQUÍDEO</strong><br><strong>RT-QuIC</strong>, muy específica, es hoy la prueba de referencia. La proteína 14-3-3 y la enolasa son inespecíficas y suben en cualquier daño neuronal rápido.</div>
    <div style="border:1px solid #6b2d4a;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#6b2d4a;">ELECTROENCEFALOGRAMA</strong><br>Complejos periódicos de ondas agudas. Aparecen en fases intermedias y pueden faltar, sobre todo al principio y en las variantes.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Precauciones que si cambian algo.</strong> No hay tratamiento que modifique el curso y la supervivencia se mide en meses, de modo que el manejo es sintomático y de apoyo. Pero el prion resiste los métodos habituales de esterilización: si el paciente ha sido sometido a un <strong>procedimiento neuroquirúrgico invasivo</strong>, hay que avisar al servicio para aplicar el protocolo específico de instrumental. Y hay que notificar el caso según la normativa local.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El deterioro cognitivo es uno de los motivos de consulta que más crece y uno en los que peor se trabaja: se diagnostica tarde, se estudia de forma incompleta y se trata poco lo que si es tratable. Conviene separar desde el principio dos cosas distintas: el <strong>síndrome</strong>, que es el grado de deterioro y su repercusión sobre la vida del paciente, y la <strong>causa</strong>, que es la enfermedad que lo produce. El primero se establece en la consulta con el paciente y su informante; la segunda, con el perfil clínico, la imagen y, en casos seleccionados, los biomarcadores.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: el síndrome, y donde esta la línea.</strong></p>
<p style="margin:0 0 12px;">La frontera entre <strong>deterioro cognitivo leve</strong> y <strong>demencia</strong> no la marca la puntuación de un test sino la <strong>autonomia</strong>: si el paciente ya necesita ayuda para manejar su dinero, su medicación o sus desplazamientos, es demencia. Para saberlo hace falta un <strong>informante</strong>, porque el paciente con anosognosia minimiza y el que tiene depresión exagera. Y antes de todo eso hay que descartar un <strong>delirium</strong>, que se distingue por el inicio agudo, el curso fluctuante y la alteración de la atención.</p>
${figBlock('Figura 1', 'Deterioro cognitivo leve o demencia: la línea es la autonomia', lineaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: los cuatro perfiles que hay que saber distinguir.</strong></p>
<p style="margin:0 0 12px;">La <strong>enfermedad de Alzheimer</strong> empieza por la memoria episódica y avanza despacio. La <strong>demencia vascular</strong> tiene curso escalonado, predominio ejecutivo y alteración precoz de la marcha. La <strong>demencia con cuerpos de Lewy</strong> se reconoce por fluctuación, alucinaciones visuales, trastorno de conducta del sueño REM y parkinsonismo, y tiene una consecuencia práctica que no se puede olvidar: la sensibilidad a los antipsicóticos. Y la <strong>degeneración frontotemporal</strong> empieza más joven, cambia la conducta antes que la memoria y se confunde con enfermedad psiquiátrica durante años.</p>
${figBlock('Figura 2', 'Los cuatro perfiles y como se distinguen', perfilesHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el estudio que se hace a todos.</strong></p>
<p style="margin:0 0 12px;">Analítica con calcio, función tiroidea y <strong>vitamina B12</strong>, y <strong>neuroimagen estructural</strong>. El objetivo no es solo etiquetar sino no dejar escapar lo tratable: hematoma subdural, hidrocefalia normotensiva, tumor. Y sobre todo, las tres cosas que no salen en ninguna analítica y que están en casi todas las consultas: los <strong>fármacos</strong> con carga anticolinergica, la <strong>depresión</strong> y la <strong>apnea del sueño</strong> con la hipoacusia no corregida.</p>
${figBlock('Figura 3', 'El estudio mínimo y las causas que más se escapan', estudioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: cuando la velocidad cambia el problema.</strong></p>
<p style="margin:0 0 12px;">Una demencia que progresa en <strong>semanas o pocos meses</strong> deja de ser un problema de consulta externa y pasa a ser una urgencia diagnóstica, porque una parte importante de sus causas tiene tratamiento. La <strong>enfermedad por priones</strong> esta en ese grupo, pero es un diagnóstico al que se llega por exclusión de lo tratable, no de entrada.</p>
${figBlock('Figura 4', 'Demencia rápidamente progresiva y enfermedad por priones', rapidaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar demencia sin hablar con un informante. No diagnosticarla sin haber descartado un delirium. No dar por hecho el diagnóstico sin analítica y sin neuroimagen. No pasar por alto la lista de fármacos, que es donde más se gana con menos esfuerzo. No confundir depresión con demencia ni al revés. No dar anticolinesterasicos en la degeneración frontotemporal, donde no están indicados y pueden empeorar la conducta. <strong>No dar antipsicóticos típicos a un paciente con demencia por cuerpos de Lewy</strong>, porque la reacción puede ser grave. No usar antipsicóticos como primera medida ante un síntoma conductual sin haber buscado antes dolor, infección, estreñimiento, retención urinaria o un fármaco nuevo. Y no dejar para más adelante la conversación sobre conducción, seguridad en casa y planificación anticipada de decisiones, que se hace mejor cuando el paciente todavía puede participar.</p>`;

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
      compensada: 'Quejas de memoria, dificultad para encontrar palabras, sensación de ir más lento. Conviene saber que la queja subjetiva aislada, sin hallazgos objetivos, se asocia más a ANSIEDAD y a DEPRESIÓN que a demencia, y que en cambio el paciente con anosognosia, típica de la degeneración frontotemporal y de fases más avanzadas de Alzheimer, minimiza o niega el problema. En la consulta, respuestas de "no se" repetidas orientan a depresión; respuestas confabuladas o aproximadas, a deterioro real.',
      descompensada: 'ES LA FUENTE PRINCIPAL. Hay que preguntar por hechos concretos y no por impresiones: quien maneja el dinero y los recibos, si se toma la medicación sin ayuda, si sigue cocinando, si se ha perdido alguna vez, si conduce y como, si repite las mismas preguntas, si ha cambiado su carácter o su forma de tratar a la gente, si ve cosas que no están, si grita o se mueve mientras sueña, y en cuanto tiempo ha pasado todo esto. La VELOCIDAD de instauración es el dato que más cambia el enfoque.'
    },
    laboratorio: [
      { prueba: 'Vitamina B12 y ácido metilmalónico', utilidad: 'Se pide a TODOS. El déficit de B12 puede producir deterioro cognitivo con o sin anemia y con o sin macrocitosis, de modo que un hemograma normal no lo descarta. Si la B12 esta en zona baja-normal, el ácido metilmalónico elevado confirma el déficit funcional.' },
      { prueba: 'Hormona tiroestimulante', utilidad: 'Se pide a TODOS. El hipotiroidismo produce enlentecimiento, apatia y fallos de memoria que mejoran con el tratamiento, y en el mayor se presenta de forma atípica y se atribuye a la edad.' },
      { prueba: 'Calcio corregido, función renal y hepática, hemograma y sodio', utilidad: 'Se piden a TODOS. Buscan las causas metabólicas que contribuyen al deterioro: hipercalcemia, uremia, encefalopatía hepática incipiente, anemia e hiponatremia crónica, que se asocia de forma independiente a alteración cognitiva y a caídas.' },
      { prueba: 'Serología de sífilis y de VIH', utilidad: 'Según factores de riesgo y contexto epidemiológico, y de forma sistemática en el deterioro de inicio precoz o de progresión rápida. Ambas son causas tratables, y la neurosífilis puede presentarse como demencia sin otros datos.' },
      { prueba: 'Revisión completa de la medicación', utilidad: 'No es un análisis, pero rinde más que la mayoría. La carga ANTICOLINERGICA acumulada (antihistamínicos, antimuscarinicos urinarios, antidepresivos tricíclicos, algunos antipsicóticos) se asocia a deterioro cognitivo, y las benzodiacepinas y los opioides lo agravan. Retirar lo prescindible mejora al paciente.' },
      { prueba: 'Cribado de depresión', utilidad: 'La depresión del mayor se presenta con quejas de memoria y puede imitar una demencia. Un dato practico: en la depresión el paciente se queja mucho y rinde variable, y en la demencia se queja poco y rinde de forma consistentemente baja. Ambas coexisten con frecuencia, de modo que encontrar una no descarta la otra.' },
      { prueba: 'Biomarcadores de amiloide y tau en líquido cefalorraquídeo o por positrones', utilidad: 'NO son para todos. Aportan cuando el diagnóstico es dudoso, el inicio es precoz o la presentación es atípica, y son imprescindibles antes de plantear un anticuerpo antiamiloide. En una demencia típica y avanzada no cambian el manejo.' },
      { prueba: 'RT-QuIC y proteína 14-3-3 en líquido cefalorraquídeo', utilidad: 'En la sospecha de enfermedad por priones. La RT-QuIC es muy específica y es hoy la prueba de referencia; la 14-3-3 y la enolasa neuroespecifica son inespecíficas y se elevan en cualquier daño neuronal rápido, incluido un ictus reciente.' }
    ],
    no_invasivos: [
      { metodo: 'Cribado cognitivo breve (calculadora disponible)', interpretacion: 'El Mini-Mental es rápido pero poco sensible al deterioro leve y a la disfunción ejecutiva; el MoCA es más sensible al deterioro cognitivo leve y al perfil frontal-ejecutivo. Ambos se afectan por la ESCOLARIDAD, el idioma y los déficits sensoriales.', cutoff: 'MoCA: 26 o más se considera normal, sumando 1 punto si la escolaridad es de 12 años o menos' },
      { metodo: 'Deterioro cognitivo leve frente a demencia (calculadora disponible)', interpretacion: 'La distinción la marca la repercusión sobre las actividades instrumentales, no la puntuación del test. Exige información de un informante fiable.', cutoff: 'Autonomia conservada: deterioro cognitivo leve. Autonomia pérdida: demencia' },
      { metodo: 'Estudio etiológico mínimo (calculadora disponible)', interpretacion: 'Comprueba que se ha hecho lo que se pide a todos y recuerda las causas contribuyentes que no aparecen en la analítica: fármacos, depresión, apnea del sueño e hipoacusia.', cutoff: 'A todos: hemograma, bioquímica con calcio, TSH, vitamina B12 y neuroimagen estructural' },
      { metodo: 'Escala isquémica de Hachinski (calculadora disponible)', interpretacion: 'Separa el perfil vascular del degenerativo a partir de datos clínicos clásicos: inicio brusco, deterioro escalonado, curso fluctuante, focalidad y factores de riesgo vascular.', cutoff: '7 o más sugiere origen vascular; 4 o menos, degenerativo primario' },
      { metodo: 'Actividades instrumentales de la vida diaria', interpretacion: 'Manejo del dinero, de la medicación, del telefono, del transporte, de la compra y de la casa. Se pierden ANTES que las básicas, y por eso son las que marcan la transición a demencia.', cutoff: 'Necesidad de ayuda o supervisión en una o más: apoya el diagnóstico de demencia' },
      { metodo: 'Prueba del reloj', interpretacion: 'Explora función ejecutiva, planificación y capacidad visuoespacial en menos de dos minutos. Muy útil como complemento porque detecta perfiles que el Mini-Mental pasa por alto.', cutoff: 'Sin umbral único; se valora la organizacion del dibujo, el orden de los numeros y la colocación de las manecillas' },
      { metodo: 'Valoración de la conducción y de la seguridad en el domicilio', interpretacion: 'No es opcional ni se pospone. Incluye conducción, uso de la cocina y del gas, manejo de armas si las hay, riesgo de extravio y capacidad de pedir ayuda.', cutoff: 'Cualquier duda razonable obliga a una valoración formal y a documentar la conversación' }
    ],
    imagen: [
      { modalidad: 'Resonancia magnética craneal', hallazgos: 'Es la neuroimagen preferida. Descarta lo tratable (hematoma subdural crónico, hidrocefalia normotensiva, tumor) y define el patrón de atrofia: HIPOCAMPAL y temporal medial en el Alzheimer, FRONTAL y temporal anterior en la degeneración frontotemporal, y posterior en la atrofia cortical posterior. Cuantifica además la carga vascular de sustancia blanca y los infartos.' },
      { modalidad: 'Tomografía craneal', hallazgos: 'Alternativa aceptable cuando la resonancia no esta disponible o el paciente no la tolera. Descarta las lesiones estructurales relevantes, pero valora mucho peor el patrón de atrofia y la enfermedad de pequeño vaso.' },
      { modalidad: 'Resonancia con secuencias de DIFUSIÓN', hallazgos: 'Imprescindible ante sospecha de enfermedad por priones: hiperintensidad cortical en cinta y en ganglios basales. Hay que pedir la difusión de forma explícita, porque un protocolo estándar puede no incluirla y el hallazgo se pierde.' },
      { modalidad: 'Tomografía por emision de positrones y estudios funcionales', hallazgos: 'La de fluorodesoxiglucosa muestra hipometabolismo temporoparietal en el Alzheimer y frontotemporal en la degeneración frontotemporal. La de amiloide y la de tau se reservan a casos seleccionados. El DAT-SPECT reducido y la gammagrafía cardiaca con MIBG apoyan la demencia con cuerpos de Lewy.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El deterioro cognitivo se clasifica en dos ejes que hay que responder por separado. El primero es el <strong>grado</strong>: cognición normal, <strong>deterioro cognitivo leve</strong> (cambio objetivable con autonomia conservada) y <strong>demencia</strong> o trastorno neurocognitivo mayor (el deterioro ya interfiere con la independencia). El segundo es la <strong>causa</strong>: enfermedad de Alzheimer, deterioro cognitivo vascular, demencia con cuerpos de Lewy y de la enfermedad de Parkinson, degeneración frontotemporal, formas mixtas (muy frecuentes en el mayor) y causas secundarias. A esos dos ejes se añade un tercero con valor practico inmediato: la <strong>velocidad</strong>, porque una demencia rápidamente progresiva se estudia de otra manera y con otra urgencia.`,
    escalas: [
      { nombre: 'Cribado cognitivo breve (calculadora disponible)', componentes: 'Mini-Mental (0 a 30 puntos) o MoCA (0 a 30 puntos), ajustados por escolaridad.', formula: 'MoCA: 26 o más se considera normal, sumando 1 punto si el paciente tiene 12 años o menos de escolaridad. El Mini-Mental usa umbrales que dependen de la edad y del nivel educativo.', interpretacion: 'Son pruebas de CRIBADO, no diagnosticas. El MoCA es más sensible al deterioro cognitivo leve y al perfil ejecutivo; el Mini-Mental tiene efecto techo y se le escapan los perfiles frontales. Ninguno de los dos distingue la causa, y ambos se distorsionan por hipoacusia, mala visión, bajo nivel educativo y barrera idiomatica.' },
      { nombre: 'Deterioro cognitivo leve frente a demencia (calculadora disponible)', componentes: 'Cambio cognitivo objetivable, información de un informante, repercusión sobre las actividades instrumentales y exclusión de delirium y de trastorno psiquiátrico mayor.', formula: 'Con autonomia CONSERVADA en las actividades instrumentales: deterioro cognitivo leve. Con autonomia PÉRDIDA: demencia.', interpretacion: 'La línea no la marca la puntuación de ningún test. Es una decisión clínica que exige un informante fiable, porque el paciente con anosognosia minimiza. Una proporción importante de los pacientes con deterioro cognitivo leve progresa a demencia cada año, pero otros se mantienen estables e incluso revierten, sobre todo si la causa era corregible.' },
      { nombre: 'Escala isquémica de Hachinski (calculadora disponible)', componentes: 'Inicio brusco, deterioro escalonado, curso fluctuante, confusión nocturna, conservacion de la personalidad, depresión, quejas somáticas, labilidad emocional, hipertensión, antecedente de ictus, aterosclerosis, síntomas neurológicos focales y signos neurológicos focales.', formula: 'Suma de 0 a 18 puntos, con ítems de 1 o 2 puntos.', interpretacion: '7 o más sugiere demencia vascular; 4 o menos, degenerativa primaria; los valores intermedios no discriminan y son compatibles con forma MIXTA, que en el mayor es probablemente la situación más frecuente. Es una herramienta clínica orientativa, no un criterio diagnóstico.' },
      { nombre: 'Criterios de demencia con cuerpos de Lewy', componentes: 'Rasgos clínicos centrales y biomarcadores indicativos.', formula: 'Centrales: fluctuación de la cognición y la alerta, alucinaciones visuales recurrentes y bien formadas, trastorno de conducta del sueño REM y parkinsonismo espontáneo. Indicativos: DAT-SPECT reducido, gammagrafía cardiaca con MIBG reducida y polisomnografía con sueño REM sin atonía.', interpretacion: 'La probabilidad aumenta con el número de rasgos centrales y con la presencia de biomarcadores indicativos. Lo que no se puede olvidar es la <strong>sensibilidad grave a los antipsicóticos</strong>, que es un rasgo de apoyo y una advertencia de seguridad de primer orden.' },
      { nombre: 'Criterios de la variante conductual de la degeneración frontotemporal', componentes: 'Desinhibición, apatia o inercia, pérdida de empatia, conductas perseverativas o compulsivas, hiperoralidad y cambios en la dieta, y perfil neuropsicologico con disfunción ejecutiva y memoria y capacidad visuoespacial relativamente conservadas.', formula: 'Tres o más de esos rasgos definen la forma posible; se añaden el deterioro funcional y la imagen compatible para la forma probable.', interpretacion: 'Es la demencia que más se confunde con una enfermedad psiquiátrica, y el retraso diagnóstico se mide en años. Los anticolinesterasicos NO están indicados y pueden empeorar la conducta.' },
      { nombre: 'Estudio etiológico mínimo (calculadora disponible)', componentes: 'Analítica básica, función tiroidea, vitamina B12, neuroimagen estructural, revisión de la medicación, cribado de depresión y valoración sensorial y del sueño.', formula: 'A todos: hemograma, bioquímica con calcio, función renal y hepática, TSH, vitamina B12 y neuroimagen. Dirigido según contexto: sífilis, VIH, folato y tóxicos.', interpretacion: 'Su objetivo no es solo etiquetar sino identificar lo tratable. Las causas totalmente reversibles son minoría, pero las contribuyentes (fármacos, depresión, déficits, tiroides, apnea del sueño e hipoacusia) son muy frecuentes y corregirlas mejora al paciente aunque haya una degeneración de fondo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Deterioro cognitivo leve y enfoque inicial',
      color: '#8a6a1f',
      definicion: 'Cambio cognitivo objetivable respecto al rendimiento previo del paciente, en uno o más dominios, que NO llega a interferir con su independencia en las actividades instrumentales de la vida diaria.',
      fisiopatologia: 'No es una enfermedad sino un estadio sindrómico, y por eso tiene causas muy distintas. Puede corresponder a la fase prodrómica de una enfermedad degenerativa (con más frecuencia Alzheimer), a enfermedad cerebrovascular de pequeño vaso, o a una causa potencialmente reversible como un déficit vitaminico, un hipotiroidismo, una depresión, un fármaco o una apnea del sueño. Esa heterogeneidad explica que su evolución sea tan variable: una parte progresa a demencia, otra se mantiene estable y otra revierte.',
      epidemiologia: 'Su prevalencia aumenta de forma marcada con la edad. La tasa de progresión a demencia es de un porcentaje anual apreciable, mayor cuando el perfil es amnésico y cuando hay biomarcadores de amiloide positivos, y menor cuando la causa identificada es corregible.',
      factores_riesgo: ['Edad avanzada', 'Bajo nivel educativo y baja reserva cognitiva', 'HIPOACUSIA no corregida', 'Hipertensión arterial en la edad media de la vida', 'Diabetes mellitus', 'Tabaquismo', 'Obesidad', 'Inactividad física', 'Aislamiento social', 'Depresion', 'Consumo excesivo de alcohol', 'Traumatismo craneoencefálico previo', 'Colesterol LDL elevado', 'Pérdida de visión no tratada', 'Contaminación atmosferica', 'Alelo APOE épsilon 4'],
      clinica: 'Quejas de memoria o de rendimiento, dificultad para encontrar palabras, sensación de ir más lento, más esfuerzo para tareas que antes eran automáticas. Lo definitorio es que TODAVÍA se maneja solo: sigue llevando su dinero, su medicación y sus desplazamientos, aunque le cueste más.',
      criterios_dx: 'Cambio cognitivo objetivable frente al rendimiento previo, referido por el paciente o por un informante, confirmado en la exploración, con AUTONOMIA CONSERVADA en las actividades instrumentales y sin delirium ni trastorno psiquiátrico mayor que lo explique. Ver la Figura 1 de Definición.',
      laboratorio: 'El mismo estudio mínimo que en la demencia: hemograma, bioquímica con calcio, función renal y hepática, TSH y vitamina B12. Serologías según contexto. Cribado de depresión.',
      imagen: 'Neuroimagen estructural, preferentemente resonancia. Biomarcadores solo en casos seleccionados: inicio precoz, presentación atípica, duda diagnóstica relevante o valoración para un tratamiento antiamiloide.',
      complementarios: 'Valoración neuropsicológica formal cuando el cribado breve no es concluyente, cuando el paciente tiene un nivel educativo alto (donde los tests breves se quedan cortos por efecto techo) o cuando hay que documentar un perfil para el seguimiento.',
      dx_diferencial: 'Envejecimiento cognitivo normal, depresión, ansiedad, efecto de fármacos, apnea del sueño, hipoacusia no corregida, hipotiroidismo, déficit de B12, consumo de alcohol y fase prodrómica de cualquier demencia degenerativa.',
      tx_medico: 'EJERCICIO FÍSICO regular, que es la intervención con mejor respaldo. Control estricto de los factores de riesgo vascular, sobre todo la presión arterial. CORRECCIÓN DE LA HIPOACUSIA, que la Comision del Lancet situa entre los factores modificables de mayor impacto poblacional. Actividad cognitiva y social. Tratamiento de la depresión y de la apnea del sueño. Retirada de fármacos con carga anticolinergica.',
      tx_farmacologico: 'NO hay tratamiento farmacológico aprobado para el deterioro cognitivo leve como tal: los anticolinesterasicos no han demostrado prevenir la progresión a demencia y añaden efectos adversos. En el deterioro cognitivo leve por enfermedad de Alzheimer con biomarcador confirmado, los anticuerpos antiamiloide son una opción en centros con experiencia y con vigilancia estrecha.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso. Si el paciente ingresa por otro motivo, hay que anticipar el riesgo elevado de delirium y aplicar medidas de prevención desde el primer dia.',
      seguimiento_ambulatorio: 'Reevaluación cognitiva y funcional cada 6 a 12 meses, con el mismo instrumento para poder comparar. El objetivo del seguimiento es detectar la transición a demencia y revisar de nuevo las causas corregibles.',
      pronostico: 'Muy variable. Una parte progresa a demencia, otra se mantiene estable durante años y otra revierte, sobre todo cuando la causa era corregible. Ese último grupo es la razón por la que el estudio etiológico merece la pena.',
      algoritmo: ['Confirmar que hay cambio respecto al rendimiento PREVIO del paciente', 'Hablar con un INFORMANTE y preguntar por hechos concretos', 'Descartar delirium: inicio agudo, fluctuación y alteración de la atención', 'Comprobar si conserva la autonomia en las actividades instrumentales', 'Aplicar un cribado cognitivo breve, ajustado por escolaridad', 'Pedir el estudio mínimo: analítica y neuroimagen', 'REVISAR LA MEDICACIÓN y retirar la carga anticolinergica', 'Buscar depresión, apnea del sueño e hipoacusia', 'Indicar ejercicio y control de factores de riesgo vascular', 'Reevaluar en 6 a 12 meses con el mismo instrumento']
    },
    {
      nombre: 'Enfermedad de Alzheimer',
      color: '#4a3f7a',
      definicion: 'Enfermedad neurodegenerativa caracterizada por el depósito extracelular de péptido amiloide en placas y por la acumulación intraneuronal de tau hiperfosforilada en ovillos neurofibrilares, que constituye la causa más frecuente de demencia.',
      fisiopatologia: 'El procesamiento anómalo de la proteína precursora de amiloide genera péptido amiloide beta que se agrega en placas. En paralelo, la proteína tau se hiperfosforila, se desprende del microtubulo y forma ovillos. La patología tau sigue una progresión topográfica que empieza en la corteza entorrinal y el hipocampo y avanza hacia la neocorteza, lo que explica que el primer síntoma sea la memoria episódica y que después se añadan lenguaje, praxias y orientación. La pérdida de neuronas colinérgicas del nucleo basal de Meynert es la base racional de los anticolinesterasicos.',
      epidemiologia: 'Es la causa más frecuente de demencia, y su frecuencia se duplica aproximadamente cada cinco años a partir de los 65. En el mayor, la forma pura es menos común que la MIXTA con patología vascular, hallazgo que las series de autopsia han confirmado de forma consistente.',
      factores_riesgo: ['Edad, que es el factor de riesgo dominante', 'Alelo APOE épsilon 4, sobre todo en homocigosis', 'Antecedente familiar de primer grado', 'Mutaciones en APP, PSEN1 y PSEN2 en las formas de inicio precoz', 'Síndrome de Down', 'Bajo nivel educativo y baja reserva cognitiva', 'Hipertensión en la edad media de la vida', 'Diabetes mellitus', 'Hipoacusia no corregida', 'Traumatismo craneoencefálico', 'Sedentarismo y aislamiento social', 'Depresion'],
      clinica: 'Inicio insidioso y progresión lenta, con AMNESIA EPISÓDICA como síntoma inicial: olvida hechos recientes, repite preguntas y no mejora al darle pistas, a diferencia del perfil vascular. Después se añaden anomia, desorientación espacial, apraxia y alteración de las funciones ejecutivas. Existen variantes atípicas: la atrofia cortical posterior, con alteración visuoespacial predominante, y la variante logopenica del lenguaje.',
      criterios_dx: 'Síndrome de demencia con perfil amnésico de inicio insidioso y progresión lenta, tras excluir otras causas. Los biomarcadores de amiloide y tau permiten el diagnóstico con mayor certeza y son imprescindibles si se plantea tratamiento antiamiloide. Ver la Figura 2 de Definición.',
      laboratorio: 'El estudio mínimo común. Biomarcadores en líquido cefalorraquídeo (amiloide beta 42 bajo con tau total y fosfo-tau elevadas) o por tomografía de emision de positrones, solo en casos seleccionados. Genotipo de APOE si se plantea un anticuerpo antiamiloide, por el riesgo de ARIA.',
      imagen: 'Resonancia con ATROFIA HIPOCAMPAL y temporal medial, que apoya el diagnóstico aunque no es específica. Positrones de fluorodesoxiglucosa con hipometabolismo temporoparietal y en cingulo posterior en los casos dudosos.',
      complementarios: 'Valoración neuropsicológica para caracterizar el perfil y establecer un basal. Valoración del cuidador y de la red de apoyo, que forma parte del plan terapéutico desde el primer dia y no de una fase posterior.',
      dx_diferencial: 'Demencia vascular, demencia con cuerpos de Lewy, degeneración frontotemporal, depresión, hidrocefalia normotensiva, déficit de B12, hipotiroidismo, efecto de fármacos y demencia mixta, que es probablemente lo más frecuente en el mayor.',
      tx_medico: 'Ejercicio, estimulación cognitiva y actividad social. Estructura y rutina en el entorno. APOYO AL CUIDADOR, que reduce su sobrecarga y retrasa la institucionalización. Planificación anticipada de decisiones y valoración de la capacidad mientras el paciente todavía puede participar. Seguridad: conducción, cocina, extravio y manejo del dinero.',
      tx_farmacologico: 'ANTICOLINESTERASICOS (donepezilo, rivastigmina, galantamina) en fases leve y moderada, con beneficio sintomático modesto; sus efectos adversos son sobre todo digestivos y bradicardia. MEMANTINA en la fase moderada y grave, sola o asociada. ANTICUERPOS ANTIAMILOIDE (lecanemab, donanemab) en la fase temprana con amiloide confirmado, en centros con experiencia, con resonancias de vigilancia por el riesgo de ARIA y conociendo el genotipo APOE. Evitar anticolinérgicos y benzodiacepinas.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No por la demencia. Si por procesos intercurrentes, teniendo en cuenta que estos pacientes tienen riesgo muy alto de delirium y peor recuperación funcional.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Prevención activa del delirium: orientación, luz natural, gafas y audifonos puestos, movilización precoz, sueño protegido, evitar sondas y sujeciones, y revisión diaria de la medicación.',
      seguimiento_ambulatorio: 'Revisión periódica de la función, de la conducta y de la sobrecarga del cuidador. Reevaluar la indicación del tratamiento farmacológico en fases avanzadas. Retirar de forma progresiva lo que ya no aporta.',
      pronostico: 'Progresión lenta a lo largo de años. La supervivencia depende mucho de la edad al diagnóstico y de la comorbilidad. Las causas de muerte más frecuentes son la neumonía y las complicaciones de la inmovilidad.',
      algoritmo: ['Confirmar el síndrome de demencia con informante', 'Caracterizar el perfil: amnésico de inicio insidioso', 'Completar el estudio mínimo con analítica y neuroimagen', 'Valorar biomarcadores solo si hay duda, inicio precoz o presentación atípica', 'Descartar y tratar lo corregible antes de etiquetar', 'Iniciar anticolinesterasico en fase leve o moderada', 'Añadir memantina en fase moderada o grave', 'Retirar anticolinérgicos y benzodiacepinas', 'Poner en marcha el apoyo al cuidador desde el principio', 'Abordar seguridad, conducción y planificación anticipada']
    },
    {
      nombre: 'Deterioro cognitivo vascular y demencia vascular',
      color: '#8c3a34',
      definicion: 'Deterioro cognitivo atribuible a enfermedad cerebrovascular, que abarca desde el deterioro cognitivo vascular leve hasta la demencia vascular establecida, e incluye tanto el infarto estratégico como la enfermedad difusa de pequeño vaso.',
      fisiopatologia: 'Hay varios mecanismos que producen el mismo síndrome. El infarto ESTRATÉGICO en una zona crítica (tálamo, nucleo caudado, cingulo, hipocampo) puede producir demencia con una sola lesión. Los infartos múltiples suman daño. Y la enfermedad de PEQUEÑO VASO produce lesiones difusas de sustancia blanca e infartos lacunares que desconectan los circuitos frontosubcorticales, lo que explica el perfil ejecutivo, el enlentecimiento y la alteración precoz de la marcha y del control de esfínteres.',
      epidemiologia: 'Es la segunda causa de demencia como forma pura, pero la contribución vascular esta presente en una proporción mucho mayor de los casos si se cuentan las formas MIXTAS. Es además la más prevenible, porque sus factores de riesgo son los factores de riesgo vascular clásicos.',
      factores_riesgo: ['HIPERTENSIÓN ARTERIAL, que es el factor de riesgo modificable más importante', 'Diabetes mellitus', 'Fibrilación auricular', 'Tabaquismo', 'Dislipemia', 'Antecedente de ictus o de accidente isquémico transitorio', 'Enfermedad arterial periférica y carotídea', 'Apnea obstructiva del sueño', 'Insuficiencia renal crónica', 'Angiopatía amiloide cerebral', 'Edad avanzada', 'Sedentarismo y obesidad'],
      clinica: 'Curso ESCALONADO o de relación temporal clara con un ictus, aunque la forma de pequeño vaso puede ser insidiosa. Predominio EJECUTIVO: enlentecimiento, dificultad para planificar y para cambiar de tarea, apatia. La memoria se afecta menos y MEJORA CON PISTAS, a diferencia del Alzheimer. Alteración PRECOZ de la marcha, caídas, incontinencia urinaria temprana, labilidad emocional y signos pseudobulbares.',
      criterios_dx: 'Deterioro cognitivo con evidencia de enfermedad cerebrovascular en la imagen y relación plausible entre ambos, temporal o topográfica. La escala isquémica de Hachinski orienta pero no es un criterio diagnóstico. Ver la Figura 2 de Definición.',
      laboratorio: 'El estudio mínimo común, más el perfil vascular completo: glucemia y hemoglobina glucosilada, perfil lipídico, función renal y microalbuminuria.',
      imagen: 'Resonancia con infartos, lacunas, hiperintensidades de sustancia blanca, microsangrados y espacios perivasculares dilatados. La distribución de los microsangrados orienta: lobares en la angiopatía amiloide, profundos en la enfermedad hipertensiva.',
      complementarios: 'Estudio etiológico del ictus si procede: electrocardiograma y monitorización prolongada para detectar fibrilación auricular, ecocardiograma y estudio de troncos supraaorticos.',
      dx_diferencial: 'Enfermedad de Alzheimer, forma mixta (probablemente lo más frecuente), hidrocefalia normotensiva (que comparte marcha, incontinencia y deterioro cognitivo), CADASIL en el paciente joven con antecedentes familiares, y vasculitis del sistema nervioso central.',
      tx_medico: 'CONTROL DE LOS FACTORES DE RIESGO VASCULAR, que es a la vez el tratamiento y la prevención de la progresión: presión arterial, diabetes, lípidos, tabaco, ejercicio y peso. Tratamiento de la apnea del sueño. Rehabilitación de la marcha y prevención de caídas, que aquí son un problema precoz.',
      tx_farmacologico: 'Antiagregación o anticoagulación según el mecanismo del ictus. Estatina. Antihipertensivos. Los anticolinesterasicos y la memantina tienen beneficio escaso en la demencia vascular pura, aunque se usan cuando hay componente mixto, que es lo habitual.',
      tx_intervencionista: 'Revascularización carotídea si esta indicada por el estudio del ictus. Cierre de orejuela en casos seleccionados con contraindicación para anticoagular.',
      criterios_uci: 'Los del evento cerebrovascular agudo, no los de la demencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Tras un ictus, valorar de forma sistemática la cognición antes del alta: el deterioro cognitivo posictus es frecuente, condiciona la rehabilitación y con frecuencia no se busca.',
      seguimiento_ambulatorio: 'Control estrecho de los factores de riesgo, que es lo que puede frenar la progresión. Reevaluación cognitiva y funcional periódica. Prevención de caídas.',
      pronostico: 'Depende del control de los factores de riesgo y de la aparición de nuevos eventos. Es la demencia con mayor margen de PREVENCIÓN, y esa es su característica más relevante desde el punto de vista de la medicina interna.',
      algoritmo: ['Buscar relación temporal o topográfica entre el deterioro y la enfermedad cerebrovascular', 'Caracterizar el perfil: ejecutivo, con marcha alterada precozmente', 'Comprobar si la memoria mejora con pistas', 'Hacer resonancia y valorar carga vascular y microsangrados', 'Aplicar la escala de Hachinski como orientación, no como criterio', 'Completar el estudio etiológico del ictus si procede', 'CONTROLAR de forma estricta los factores de riesgo vascular', 'Buscar y tratar la apnea del sueño', 'Iniciar rehabilitación de la marcha y prevención de caídas', 'Considerar componente mixto, que es lo más frecuente en el mayor']
    },
    {
      nombre: 'Demencia con cuerpos de Lewy y de la enfermedad de Parkinson',
      color: '#2e6b6b',
      definicion: 'Demencias asociadas al depósito de alfa-sinucleína en cuerpos de Lewy corticales y subcorticales, que se diferencian entre si únicamente por el orden temporal de aparición de la demencia y del parkinsonismo.',
      fisiopatologia: 'La alfa-sinucleína se agrega en cuerpos de Lewy que se distribuyen por el tronco, el sistema limbico y la neocorteza. La afectación del tronco explica el trastorno de conducta del sueño REM, que puede preceder en años al resto y es hoy el marcador prodrómico más útil. El déficit colinérgico es MÁS intenso que en el Alzheimer, lo que explica dos cosas: que los anticolinesterasicos funcionen mejor aquí, y que los fármacos con actividad anticolinergica se toleren especialmente mal. El bloqueo dopaminérgico por antipsicóticos sobre un sistema ya dañado produce la sensibilidad grave a estos fármacos.',
      epidemiologia: 'Es una de las causas más frecuentes de demencia degenerativa tras el Alzheimer, y esta claramente infradiagnosticada: se etiqueta como Alzheimer con alucinaciones o como enfermedad psiquiátrica. Ese error tiene consecuencias inmediatas por el uso de antipsicóticos.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino', 'Trastorno de conducta del sueño REM, que es un marcador prodrómico potente', 'Enfermedad de Parkinson establecida', 'Antecedente familiar de sinucleinopatia', 'Hiposmia', 'Estreñimiento crónico de larga evolución', 'Depresion', 'Variantes en el gen GBA', 'Alelo APOE épsilon 4'],
      clinica: 'Cuatro rasgos centrales: FLUCTUACIÓN de la cognición y del nivel de alerta (episodios de desconexión que se confunden con delirium o con crisis), ALUCINACIONES VISUALES recurrentes y bien formadas (personas o animales, con frecuencia sin miedo), TRASTORNO DE CONDUCTA DEL SUEÑO REM (habla, grita o se mueve mientras sueña, a veces años antes) y PARKINSONISMO espontáneo, más simétrico y con menos temblor de reposo que en la enfermedad de Parkinson. Se añaden disautonomía, caídas de repetición, síncopes e hipersensibilidad a los neurolépticos.',
      criterios_dx: 'Combinación de rasgos clínicos centrales y de biomarcadores indicativos. La REGLA DEL AÑO separa las dos etiquetas: si la demencia precede al parkinsonismo o aparece en el año siguiente, es demencia con cuerpos de Lewy; si el parkinsonismo lleva más de un año, es demencia de la enfermedad de Parkinson.',
      laboratorio: 'El estudio mínimo común. No hay marcador sérico útil. La polisomnografía confirma el sueño REM sin atonía cuando el diagnóstico es dudoso.',
      imagen: 'Resonancia con atrofia hipocampal RELATIVAMENTE CONSERVADA en comparación con el Alzheimer, dato que ayuda. DAT-SPECT con captación reducida en los ganglios basales y gammagrafía cardiaca con MIBG reducida como biomarcadores indicativos.',
      complementarios: 'POLISOMNOGRAFÍA para documentar el trastorno de conducta del sueño REM. Valoración de la disautonomía con medida de la presión arterial en bipedestación, que detecta hipotensión ortostática sintomática y contribuye a las caídas.',
      dx_diferencial: 'Enfermedad de Alzheimer con síntomas psicóticos, delirium (con el que se confunde por la fluctuación), parálisis supranuclear progresiva y atrofia multisistémica, demencia vascular, y psicosis de inicio tardío.',
      tx_medico: 'Medidas ambientales para las alucinaciones no amenazantes, que muchas veces no requieren fármaco. Prevención de caídas. Manejo de la hipotensión ortostática con medidas posturales, sal y medias de compresión. Higiene y seguridad del sueño para el trastorno de conducta del REM: retirar objetos peligrosos del dormitorio.',
      tx_farmacologico: 'ANTICOLINESTERASICOS, que funcionan MEJOR aquí que en el Alzheimer, sobre todo sobre las alucinaciones y la fluctuación. Levodopa a dosis bajas para el parkinsonismo, sabiendo que puede empeorar las alucinaciones y que el margen es estrecho. Melatonina o clonazepam a dosis bajas para el trastorno de conducta del sueño REM. <strong style="color:#8c3a34;">ANTIPSICÓTICOS: evitarlos.</strong> La sensibilidad puede producir rigidez grave, deterioro del nivel de conciencia y un cuadro parecido al síndrome neuroléptico maligno. Si son imprescindibles, quetiapina o clozapina a dosis mínimas y con vigilancia. Evitar anticolinérgicos.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Reacción grave a neurolépticos, síndrome neuroléptico maligno y complicaciones de las caídas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'ALERTA EN LA HISTORIA sobre la sensibilidad a los antipsicóticos, visible para todo el equipo. Ante agitación, buscar primero causas médicas y usar medidas no farmacológicas. La fluctuación propia de la enfermedad se confunde con delirium, y el delirium también es más frecuente aquí, de modo que hay que valorar ambas cosas.',
      seguimiento_ambulatorio: 'Revisión de la tolerancia a la levodopa y del equilibrio entre movilidad y alucinaciones. Control de la disautonomía. Apoyo al cuidador, que en esta demencia soporta una carga especialmente alta por las alucinaciones y las caídas.',
      pronostico: 'Progresión algo más rápida que en el Alzheimer, con mayor carga de síntomas psicóticos, caídas e ingresos. El reconocimiento precoz evita el daño iatrogénico, que es lo que más se puede modificar.',
      algoritmo: ['Preguntar por alucinaciones visuales y por la fluctuación del nivel de alerta', 'Preguntar SIEMPRE si habla, grita o se mueve mientras sueña', 'Explorar parkinsonismo y medir la presión arterial en bipedestación', 'Aplicar la regla del año para elegir la etiqueta', 'Valorar DAT-SPECT o MIBG si el diagnóstico es dudoso', 'Hacer polisomnografía si hace falta documentar el trastorno del REM', 'MARCAR EN LA HISTORIA la sensibilidad a antipsicóticos', 'Iniciar anticolinesterasico, que aquí rinde más', 'Usar levodopa a dosis bajas y vigilar las alucinaciones', 'Tratar el sueño REM y prevenir caídas']
    },
    {
      nombre: 'Degeneración frontotemporal',
      color: '#6b4a8c',
      definicion: 'Grupo de enfermedades neurodegenerativas con atrofia de los lóbulos frontales y temporales, que se manifiestan como cambio de conducta y de personalidad (variante conductual) o como deterioro progresivo del lenguaje (afasia progresiva primaria).',
      fisiopatologia: 'La degeneración afecta a las redes frontales y temporales anteriores que sostienen la conducta social, la empatia y el control de los impulsos, lo que explica que el síntoma inicial sea conductual y no amnésico. Según la proteína acumulada se distinguen formas con tau, con TDP-43 y con FUS. La expansión en el gen C9orf72 es la causa genética más frecuente y explica la asociación, importante en la práctica, entre degeneración frontotemporal y esclerosis lateral amiotrófica: un mismo paciente o una misma familia puede presentar ambas.',
      epidemiologia: 'Es una de las causas más frecuentes de demencia de inicio PRECOZ, por debajo de los 65 años, donde compite con el Alzheimer. Tiene la mayor carga de agregación familiar de todas las demencias, y el retraso diagnóstico se mide en años porque se etiqueta como enfermedad psiquiátrica.',
      factores_riesgo: ['Antecedente familiar de demencia de inicio precoz', 'Antecedente familiar de esclerosis lateral amiotrófica', 'Expansión en C9orf72', 'Mutaciones en MAPT y en progranulina', 'Edad entre la quinta y la sexta década', 'Traumatismo craneoencefálico previo', 'Sexo masculino para la variante conductual', 'Ausencia de factores protectores conocidos', 'Antecedente de trastorno psiquiátrico mal filiado', 'Consanguinidad'],
      clinica: 'VARIANTE CONDUCTUAL: desinhibición social, apatia e inercia, PÉRDIDA DE EMPATIA, conductas repetitivas o compulsivas, hiperoralidad y cambios en la dieta (preferencia por los dulces, atracones), con disfunción ejecutiva y memoria y capacidad visuoespacial relativamente conservadas. AFASIA PROGRESIVA PRIMARIA: variante no fluente o agramatica (habla laboriosa, agramatismo, apraxia del habla) y variante semantica (pérdida del significado de las palabras con habla fluente y vacia).',
      criterios_dx: 'Criterios clínicos con tres o más rasgos conductuales para la forma posible, a los que se añaden deterioro funcional e imagen compatible para la probable. Ver la Figura 2 de Definición.',
      laboratorio: 'El estudio mínimo común. ESTUDIO GENÉTICO cuando hay antecedente familiar, inicio muy precoz o asociación con esclerosis lateral amiotrófica, siempre con consejo genético previo.',
      imagen: 'Resonancia con atrofia FRONTAL y TEMPORAL ANTERIOR, con frecuencia asimétrica. Positrones de fluorodesoxiglucosa con hipometabolismo frontotemporal, útil cuando la resonancia todavía no muestra atrofia clara, que es lo habitual al principio.',
      complementarios: 'Valoración neuropsicológica que documente el perfil disejecutivo con memoria conservada. Exploración neurológica dirigida a buscar signos de MOTONEURONA (fasciculaciones, atrofia, debilidad), porque su presencia cambia el pronóstico y el manejo.',
      dx_diferencial: 'Trastorno bipolar, depresión, esquizofrenia de inicio tardío y trastorno de personalidad, con los que se confunde durante años. Además: enfermedad de Alzheimer con presentación disejecutiva, parálisis supranuclear progresiva, degeneración corticobasal, y demencia vascular frontal.',
      tx_medico: 'Manejo CONDUCTUAL y ambiental como primera línea: estructura, rutinas, retirada de estímulos desencadenantes, redireccion en lugar de confrontación. Apoyo intensivo al cuidador, que aquí soporta una carga particularmente dura porque el paciente es más joven, no reconoce el problema y la conducta puede tener consecuencias sociales, económicas y legales.',
      tx_farmacologico: 'Los INHIBIDORES DE LA RECAPTACIÓN DE SEROTONINA pueden mejorar la desinhibición, la impulsividad y las conductas repetitivas. <strong>Los ANTICOLINESTERASICOS NO están indicados</strong> y pueden empeorar la conducta. La memantina no ha demostrado beneficio. Los antipsicóticos se usan solo si hay riesgo, a dosis mínima y por el menor tiempo posible.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No por la enfermedad. Si por complicaciones, sobre todo respiratorias en las formas con afectación de motoneurona.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La desinhibición y la falta de conciencia de enfermedad complican el ingreso. Anticipar el plan conductual, evitar sujeciones cuando sea posible y explicar al equipo que la conducta es un síntoma de la enfermedad y no una elección del paciente.',
      seguimiento_ambulatorio: 'Valoración precoz de la CAPACIDAD para decisiones económicas y legales, que es un problema real y temprano en esta enfermedad. Consejo genético a la familia. Seguimiento del cuidador. Vigilar la aparición de signos de motoneurona.',
      pronostico: 'Peor que el de la enfermedad de Alzheimer, con supervivencia media más corta desde el diagnóstico. Las formas asociadas a esclerosis lateral amiotrófica tienen el peor pronóstico, marcado por la afectación respiratoria.',
      algoritmo: ['Sospecharla ante cambio de CONDUCTA o de personalidad antes que de memoria', 'Sospecharla ante demencia de inicio antes de los 65 años', 'Preguntar por pérdida de empatia, desinhibición e hiperoralidad', 'Comprobar que la memoria esta relativamente conservada', 'Hacer resonancia buscando atrofia frontal y temporal anterior', 'Valorar positrones si la resonancia todavía es normal', 'Buscar signos de MOTONEURONA en la exploración', 'Ofrecer estudio genético y consejo si hay antecedente familiar', 'NO usar anticolinesterasicos', 'Valorar precozmente la capacidad legal y económica']
    },
    {
      nombre: 'Demencia rápidamente progresiva y enfermedad por priones',
      color: '#6b2d4a',
      definicion: 'Deterioro cognitivo que progresa hasta la demencia en semanas o pocos meses, habitualmente en menos de uno o dos años, y dentro del cual la enfermedad por priones es la causa degenerativa característica.',
      fisiopatologia: 'En la enfermedad por priones, la proteína prionica celular adopta una conformación anómala rica en lamina beta que actúa como molde y propaga el cambio conformacional a las moleculas vecinas. El resultado es acumulación, muerte neuronal y degeneración espongiforme. Esa autopropagacion sin ácido nucleico explica la resistencia del agente a los métodos habituales de esterilización y la posibilidad de transmisión iatrogénica. En el resto de las demencias rápidamente progresivas, el mecanismo es el de la enfermedad de base: inflamatorio, infeccioso, neoplásico, vascular o tóxico-metabólico.',
      epidemiologia: 'La enfermedad de Creutzfeldt-Jakob esporádica es rara pero es la forma más frecuente de enfermedad prionica humana. Lo relevante en la práctica es que la mayoría de las demencias rápidamente progresivas NO son prionicas: una proporción importante corresponde a causas tratables, sobre todo autoinmunes, neoplásicas, infecciosas y tóxico-metabólicas.',
      factores_riesgo: ['Edad entre la sexta y la septima década para la forma esporádica', 'Mutaciones en el gen PRNP en las formas genéticas', 'Antecedente familiar', 'Exposición iatrogénica: injertos de duramadre, hormona de crecimiento de origen humano, instrumental neuroquirúrgico', 'Para el resto de causas: neoplasia conocida u oculta', 'Enfermedad autoinmune conocida', 'Inmunosupresion', 'Exposición a tóxicos y a fármacos neurotóxicos', 'Déficits nutricionales, sobre todo tiamina y B12', 'Factores de riesgo vascular para la forma vascular rápida'],
      clinica: 'Deterioro cognitivo que avanza de forma evidente entre visitas, acompañado de signos neurológicos que no son propios de una demencia degenerativa habitual: MIOCLONÍAS, ataxia, signos piramidales y extrapiramidales, alteraciones visuales, crisis y evolución a mutismo acinetico. En las causas tratables se añaden con frecuencia fiebre, crisis, movimientos anormales, síntomas psiquiátricos prominentes o afectación sistémica.',
      criterios_dx: 'El diagnóstico es POR EXCLUSIÓN de lo tratable. La combinación de resonancia con difusión compatible, RT-QuIC positiva en líquido cefalorraquídeo y electroencefalograma con complejos periódicos permite un diagnóstico de alta probabilidad. Ver la Figura 4 de Definición.',
      laboratorio: 'Estudio amplio y en paralelo, no secuencial: analítica completa con tiroides, B12, tiamina, cobre y tóxicos; autoinmunidad y ANTICUERPOS ONCONEURONALES y de superficie neuronal; serologías (VIH, sífilis, herpes); marcadores tumorales y búsqueda de neoplasia. En líquido cefalorraquídeo: celularidad, proteínas, glucosa, bandas oligoclonales, citología, microbiologia, RT-QuIC y 14-3-3.',
      imagen: 'RESONANCIA CON DIFUSIÓN, que hay que pedir de forma explícita: hiperintensidad cortical en cinta y en ganglios basales en la enfermedad prionica. En las causas tratables puede mostrar realce meníngeo, hiperintensidad límbica, lesiones desmielinizantes o infartos. Tomografía por emision de positrones corporal para buscar neoplasia oculta.',
      complementarios: 'ELECTROENCEFALOGRAMA, que busca complejos periódicos de ondas agudas y descarta un estado epiléptico no convulsivo, causa tratable que imita el cuadro. Biopsia cerebral en casos muy seleccionados cuando el diagnóstico sigue sin aclararse y podría cambiar el tratamiento.',
      dx_diferencial: 'Ordenado por lo que urge no perderse: encefalitis AUTOINMUNE y paraneoplásica, estado epiléptico no convulsivo, infecciones (VIH, sífilis, herpes, tuberculosis, Whipple, criptococo), linfoma y carcinomatosis meníngea, vasculitis del sistema nervioso central, tóxico-metabólico (B12, tiamina, tiroides, litio, quimioterapia), hidrocefalia normotensiva y hematoma subdural.',
      tx_medico: 'Mientras se estudia, tratamiento de soporte y corrección de todo lo corregible: tiamina, B12, tiroides, electrolitos, retirada de fármacos sospechosos. En la enfermedad prionica confirmada, cuidados paliativos y apoyo a la familia, que es lo que aporta valor real.',
      tx_farmacologico: 'No hay tratamiento que modifique el curso de la enfermedad prionica. El manejo es sintomático: clonazepam o levetiracetam para las mioclonías, control de crisis y de la agitación. En las causas tratables, el tratamiento de la causa, y en la sospecha alta de encefalitis autoinmune conviene no retrasar el tratamiento inmunológico esperando confirmación.',
      tx_intervencionista: 'No aplica, salvo la biopsia cerebral en casos seleccionados.',
      criterios_uci: 'Estado epiléptico, deterioro grave del nivel de conciencia y complicaciones respiratorias, siempre que el objetivo terapéutico lo justifique.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica. La enfermedad prionica CONTRAINDICA la donación de órganos y tejidos.',
      seguimiento_hospitalario: 'PRECAUCIONES CON EL INSTRUMENTAL: el prion resiste la esterilización habitual, de modo que si el paciente se somete a un procedimiento neuroquirúrgico invasivo hay que avisar al servicio para aplicar el protocolo específico. No hace falta aislamiento del paciente ni precauciones especiales para el contacto habitual. Notificación del caso según la normativa local.',
      seguimiento_ambulatorio: 'Apoyo paliativo precoz, planificación anticipada de decisiones y acompañamiento a la familia. En las formas genéticas, consejo genético.',
      pronostico: 'Muy malo en la enfermedad prionica, con supervivencia de meses desde el inicio de los síntomas. En las causas tratables, el pronóstico depende por completo de la precocidad del diagnóstico, lo que convierte la búsqueda ordenada y en paralelo en la intervención más valiosa del tema.',
      algoritmo: ['Reconocer la VELOCIDAD: deterioro evidente entre visitas', 'Tratarlo como una urgencia diagnóstica, no como una consulta externa', 'Estudiar en PARALELO, no de forma secuencial', 'Descartar primero lo TRATABLE: autoinmune, infeccioso, neoplásico, metabólico', 'Hacer electroencefalograma y descartar estado epiléptico no convulsivo', 'Pedir resonancia CON DIFUSIÓN de forma explícita', 'Analizar el líquido cefalorraquídeo, incluida la RT-QuIC', 'Buscar neoplasia oculta con imagen corporal', 'No retrasar el tratamiento inmunológico si la sospecha autoinmune es alta', 'Si se confirma enfermedad prionica: paliativos, precaución con instrumental y notificación']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En deterioro cognitivo los fallos son casi siempre los mismos: no se habla con el informante, no se descarta el delirium, no se revisa la medicación y no se busca lo tratable. Y hay un error concreto que puede dañar de forma inmediata al paciente: dar un antipsicótico a alguien con demencia por cuerpos de Lewy.',
    parametros: ['Hablar SIEMPRE con un informante y preguntar por hechos concretos', 'Descartar delirium antes de diagnosticar demencia: inicio agudo, fluctuación, atención', 'Comprobar la autonomia en las actividades instrumentales, que es la línea', 'Pedir a todos analítica con calcio, TSH y VITAMINA B12', 'Pedir a todos NEUROIMAGEN estructural', 'REVISAR la medicación y retirar la carga anticolinergica y las benzodiacepinas', 'Buscar depresión, apnea del sueño e hipoacusia no corregida', 'NO dar anticolinesterasicos en la degeneración frontotemporal', 'NO dar antipsicóticos en la demencia con cuerpos de Lewy, y marcarlo en la historia', 'Ante un síntoma conductual, buscar antes dolor, infección, estreñimiento o retención', 'Si progresa en semanas o pocos meses, estudiar en paralelo y con urgencia', 'Abordar pronto la conducción, la seguridad en casa y la planificación anticipada'],
    criterios_uci_general: 'La demencia no ingresa en cuidados intensivos por sí misma. Si lo hacen sus complicaciones y algunos escenarios concretos: reacción grave a neurolépticos o síndrome neuroléptico maligno en la demencia con cuerpos de Lewy, estado epiléptico en una demencia rápidamente progresiva, y las complicaciones respiratorias de las formas con afectación de motoneurona. En todos ellos, la decisión debe tener en cuenta la situación funcional previa y la voluntad expresada por el paciente.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica. La enfermedad por priones contraindica además la donación de órganos y tejidos.',
    prevencion: 'Primaria: es donde más margen hay. La Comision del Lancet identifica una lista de factores modificables que explican una fracción sustancial de los casos, y varios de ellos son territorio directo del internista: HIPERTENSIÓN en la edad media de la vida, diabetes, tabaco, obesidad, sedentarismo, consumo excesivo de alcohol, colesterol LDL elevado, depresión, aislamiento social, traumatismo craneal, contaminación y, de forma destacada, la HIPOACUSIA y la pérdida de visión NO CORREGIDAS, que se pasan por alto con facilidad y se tratan bien. Secundaria: detección del deterioro cognitivo leve y búsqueda activa de causas corregibles. Terciaria: prevención del delirium durante los ingresos, revisión periódica de la medicación, apoyo al cuidador y planificación anticipada de decisiones mientras el paciente todavía puede participar.'
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
  'Deterioro cognitivo leve y enfoque inicial': { definicion: [1, 7, 6], criterios_dx: [1, 7, 6], laboratorio: [1, 7, 6], tx_farmacologico: [1, 7, 6] },
  'Enfermedad de Alzheimer': { definicion: [2, 11, 12, 16], criterios_dx: [2, 11, 12, 16], laboratorio: [2, 11, 12, 16], tx_farmacologico: [2, 11, 12, 16] },
  'Deterioro cognitivo vascular y demencia vascular': { definicion: [5, 8], criterios_dx: [5, 8], laboratorio: [5, 8], tx_farmacologico: [5, 8] },
  'Demencia con cuerpos de Lewy y de la enfermedad de Parkinson': { definicion: [3, 15], criterios_dx: [3, 15], laboratorio: [3, 15], tx_farmacologico: [3, 15] },
  'Degeneración frontotemporal': { definicion: [4], criterios_dx: [4], laboratorio: [4], tx_farmacologico: [4] },
  'Demencia rápidamente progresiva y enfermedad por priones': { definicion: [13, 14], criterios_dx: [13, 14], laboratorio: [13, 14], tx_farmacologico: [13, 14] }
};
export const estigmasTitulo = 'Signos y pistas que orientan ante un deterioro cognitivo';
export const estigmas = [
  { s: 'El paciente viene solo y quita importancia', p: 'Anosognosia', photo: null, desc: 'Restar importancia a un problema que el entorno describe como serio es en sí mismo un dato, típico de la degeneración frontotemporal y de fases intermedias del Alzheimer. Al revés, quien acude muy preocupado por su memoria y rinde bien suele tener ansiedad o depresión.' },
  { s: 'Respuestas de "no se" repetidas', p: 'Orienta a depresión', photo: null, desc: 'El paciente deprimido se queja mucho, se esfuerza poco y responde "no se". El paciente con demencia se queja poco, se esfuerza y da respuestas aproximadas o confabuladas. Ambas coexisten con frecuencia, de modo que encontrar una no descarta la otra.' },
  { s: 'La memoria mejora al dar pistas', p: 'Perfil no amnésico', photo: null, desc: 'Si al ofrecer una clave el paciente recupera la palabra, el problema esta en la recuperación y no en el almacenamiento: apunta a perfil ejecutivo o subcortical, típico de la demencia vascular. En el Alzheimer, la pista no ayuda porque el dato nunca se almaceno.' },
  { s: 'Alteración de la marcha precoz', p: 'Vascular o hidrocefalia', photo: null, desc: 'En el Alzheimer la marcha se afecta tarde. Si aparece pronto, hay que pensar en enfermedad de pequeño vaso o en hidrocefalia normotensiva, que añade incontinencia urinaria temprana y es potencialmente tratable con derivación.' },
  { s: 'Habla, grita o se mueve mientras sueña', p: 'Trastorno de conducta del REM', photo: null, desc: 'Es uno de los rasgos centrales de la demencia con cuerpos de Lewy y puede preceder años al resto de los síntomas. Hay que preguntarlo de forma explícita a la pareja de cama, porque el paciente no lo sabe.' },
  { s: 'Alucinaciones visuales bien formadas', p: 'Cuerpos de Lewy', photo: null, desc: 'Ve personas o animales, con detalle y con frecuencia sin miedo. Junto con la fluctuación, el parkinsonismo y el trastorno del sueño REM, define el cuadro y obliga a marcar en la historia la sensibilidad a los antipsicóticos.' },
  { s: 'Fluctuación del nivel de alerta', p: 'Se confunde con delirium', photo: null, desc: 'Episodios de desconexión o de somnolencia que alternan con periodos lúcidos, dentro del mismo dia. Es un rasgo central de la demencia con cuerpos de Lewy y una fuente constante de confusión con el delirium, que además puede coexistir.' },
  { s: 'Pérdida de empatia y desinhibición', p: 'Frontotemporal', photo: null, desc: 'Comentarios inapropiados, indiferencia ante el sufrimiento ajeno, conductas repetitivas y apetito por los dulces, con memoria relativamente conservada. Se etiqueta como enfermedad psiquiátrica durante años, sobre todo porque el paciente es joven.' },
  { s: 'Demencia antes de los 65 años', p: 'Cambia el diferencial', photo: null, desc: 'El inicio precoz obliga a ampliar el estudio: degeneración frontotemporal, causas genéticas, autoinmunes, infecciosas (VIH, sífilis) y metabólicas. Aquí los biomarcadores y el estudio genético si tienen un papel claro.' },
  { s: 'Mioclonías con deterioro rápido', p: 'Alarma', photo: null, desc: 'Sacudidas breves, a menudo desencadenadas por el sobresalto, junto con un deterioro que avanza entre visitas. Obliga a estudiar en paralelo y con urgencia, y a pedir resonancia CON DIFUSIÓN de forma explícita.' },
  { s: 'Deterioro que avanza entre una visita y otra', p: 'Urgencia diagnóstica', photo: null, desc: 'Una demencia degenerativa habitual no cambia de forma perceptible en semanas. Si lo hace, una parte importante de las causas posibles es TRATABLE, y la que más urge no perderse es la encefalitis autoinmune.' },
  { s: 'Lista larga de fármacos anticolinérgicos', p: 'Lo que más rinde revisar', photo: null, desc: 'Antihistamínicos, antimuscarinicos para la vejiga, antidepresivos tricíclicos, algunos antipsicóticos y antieméticos suman carga anticolinergica. Retirar lo prescindible mejora la cognición sin añadir ningún fármaco nuevo.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Cribado cognitivo breve (calculadora disponible)': [9, 10],
  'Deterioro cognitivo leve frente a demencia (calculadora disponible)': [1, 2, 7],
  'Escala isquémica de Hachinski (calculadora disponible)': [8, 5],
  'Criterios de demencia con cuerpos de Lewy': [3],
  'Criterios de la variante conductual de la degeneración frontotemporal': [4],
  'Estudio etiológico mínimo (calculadora disponible)': [16, 14]
};
export const escalaCalc = {
  'Cribado cognitivo breve (calculadora disponible)': 'cribado-cognitivo',
  'Deterioro cognitivo leve frente a demencia (calculadora disponible)': 'dcl-vs-demencia',
  'Escala isquémica de Hachinski (calculadora disponible)': 'hachinski',
  'Estudio etiológico mínimo (calculadora disponible)': 'estudio-demencia'
};
export const compGroups = [
  { name: 'El síndrome', items: ['Deterioro cognitivo leve y enfoque inicial'] },
  { name: 'Las causas degenerativas', items: ['Enfermedad de Alzheimer', 'Demencia con cuerpos de Lewy y de la enfermedad de Parkinson', 'Degeneración frontotemporal'] },
  { name: 'Vascular y lo rápido', items: ['Deterioro cognitivo vascular y demencia vascular', 'Demencia rápidamente progresiva y enfermedad por priones'] }
];
export const complicacionesIntro = 'La primera ficha es el síndrome y el enfoque inicial: donde esta la línea entre deterioro cognitivo leve y demencia, y que estudio se hace a todos. Las tres siguientes son las causas degenerativas que hay que saber distinguir, cada una con una consecuencia práctica propia: el Alzheimer por su tratamiento, los cuerpos de Lewy por la sensibilidad a los antipsicóticos y la frontotemporal porque se confunde con enfermedad psiquiátrica y no lleva anticolinesterasicos. Las dos últimas son la vascular, que es la más prevenible, y la rápidamente progresiva, que es la única que se maneja con urgencia.';
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
    { title: 'QUE GRADO', sub: 'La línea es la autonomia', color: '#8a6a1f', target: 'clasificacion', leaves: [
      { title: 'Descartar delirium', sub: 'Agudo, fluctuante, atención', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hablar con el informante', sub: 'Hechos, no impresiones', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Autonomia conservada', sub: 'Deterioro cognitivo leve', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Autonomia pérdida', sub: 'Demencia', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'QUE CAUSA', sub: 'Cuatro perfiles', color: '#4a3f7a', target: 'complicaciones', leaves: [
      { title: 'Alzheimer', sub: 'Memoria episódica primero', color: '#4a3f7a', target: 'complicaciones' },
      { title: 'Vascular', sub: 'Escalonado y ejecutivo', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Cuerpos de Lewy', sub: 'Cuidado con los antipsicóticos', color: '#2e6b6b', target: 'complicaciones' },
      { title: 'Frontotemporal', sub: 'Conducta antes que memoria', color: '#6b4a8c', target: 'complicaciones' }
    ] },
    { title: 'QUE BUSCAR', sub: 'Lo tratable', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'B12, TSH y calcio', sub: 'A todos', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Neuroimagen', sub: 'Subdural, hidrocefalia, tumor', color: '#2e5a8c', target: 'diagnostico' },
      { title: 'La lista de fármacos', sub: 'Lo que más rinde revisar', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Si avanza en semanas', sub: 'Urgencia diagnóstica', color: '#6b2d4a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [16, 13], no_invasivos: [9, 7, 8], imagen: [2, 13] };
export const clasificacionCite = [1, 3, 4, 8];
export const seguimientoCite = [6, 15, 16];
