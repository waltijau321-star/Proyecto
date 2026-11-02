// topics/neuropatias-perifericas/content.js: Neuropatias perifericas y disautonomia.
// Cubre tres items del cluster "Alteracion de conciencia y enfermedad neuromuscular" (bloque XII,
// Neurologia) del temario: neuropatias perifericas, paralisis facial y disautonomia.
//
// DELIMITACION frente a `guillain-barre-miastenia`: las poliradiculoneuropatias AGUDAS y la
// patologia de la union neuromuscular se tratan alli. Aqui esta el nervio periferico cronico y
// las formas focales, mas el sistema nervioso autonomo.
//
// Fuentes principales: parametro practico de la AAN sobre evaluacion de la polineuropatia distal
// simetrica (el que hay en Bibliografia/, England 2009); guia de la AAN sobre paralisis de Bell;
// criterios EAN/PNS de polineuropatia desmielinizante inflamatoria cronica; consenso sobre
// hipotension ortostatica neurogenica y sindrome de taquicardia postural; y recomendaciones sobre
// disreflexia autonomica en la lesion medular.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'neuropatias-perifericas',
  titulo: 'Neuropatías Periféricas y Disautonomía',
  subtitulo: 'Módulo 62 · Medicina Interna',
  accent: '#2e6b6b'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const patronHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2e6b6b;border-radius:8px;padding:5px 9px;background:#2e6b6b12;margin-bottom:6px;">
    <strong style="color:#2e6b6b;">Ante una neuropatía, la primera pregunta no es la causa sino el PATRÓN.</strong> <span style="color:var(--ink-dim);">Cada patrón abre un diferencial distinto y una urgencia distinta, y trabajar sin definirlo antes lleva a pedir analíticas enormes que no responden a nada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b6b;">SIMÉTRICA<br>distal</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Empieza en los <strong style="color:var(--ink);">PIES</strong> y asciende en calcetín; las manos se afectan cuando la alteración llega a las rodillas. Es <strong>dependiente de la longitud</strong> del axon. Diferencial: diabetes, alcohol, déficit de B12, uremia, fármacos, hipotiroidismo, paraproteinemia y las hereditarias.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">MONONEUROPATIA<br>un solo nervio</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Déficit en el territorio de un nervio concreto. Casi siempre por <strong style="color:var(--ink);">ATRAPAMIENTO o compresión</strong>: mediano en el túnel carpiano, cubital en el codo, radial en la canaladura humeral, peroneo en la cabeza del perone, facial en su recorrido.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">MONONEURITIS<br>MÚLTIPLE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Varios nervios afectados de forma <strong style="color:var(--ink);">sucesiva y ASIMÉTRICA</strong>, cada uno en su territorio. <strong style="color:#8c3a34;">Es una VASCULITIS hasta que se demuestre lo contrario</strong> y una urgencia diagnóstica. También: diabetes, lepra, VIH, sarcoidosis, crioglobulinemia y amiloidosis.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">PROXIMAL<br>y distal</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad que afecta a la vez a lo proximal y a lo distal, con <strong style="color:var(--ink);">ARREFLEXIA</strong> difusa. Es una <strong>poliradiculoneuropatia</strong>: si progresa en días o pocas semanas, síndrome de Guillain-Barré; si lleva más de 8 semanas, forma crónica.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Y una segunda pregunta que responde el electroneurograma: axonal o desmielinizante.</strong> <strong>AXONAL</strong> (amplitudes bajas con velocidades casi normales) apunta a lo tóxico, lo metabólico y lo carencial, que es la inmensa mayoría. <strong>DESMIELINIZANTE</strong> (velocidades lentas, latencias alargadas, bloqueos de conducción) apunta a un grupo mucho más pequeño pero mucho más TRATABLE: inflamatorias adquiridas y hereditarias. Esa distinción cambia el pronóstico y el tratamiento.
  </div>
</div>`;

const estudioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">En la polineuropatía distal simétrica, TRES pruebas concentran casi todo el rendimiento.</strong> <span style="color:var(--ink-dim);">Pedir un panel enorme de entrada encuentra hallazgos irrelevantes y no aumenta el diagnóstico. Estas tres si.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">GLUCEMIA</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Glucemia en ayunas y hemoglobina glucosilada. La <strong style="color:var(--ink);">sobrecarga oral de glucosa</strong> añade rendimiento, porque detecta la PREDIABETES, que se asocia a neuropatía y que las otras dos pruebas pueden pasar por alto.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">VITAMINA B12</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Con <strong style="color:var(--ink);">ÁCIDO METILMALÓNICO</strong> si el valor queda en zona baja-normal, que es donde están la mayoría de los déficits funcionales. Un hemograma normal NO lo descarta.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">INMUNOFIJACIÓN</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Electroforesis con <strong style="color:var(--ink);">inmunofijación</strong> en suero, que es más sensible que la electroforesis sola. Busca una gammapatía monoclonal, que puede ser la causa y que abre un estudio hematológico propio.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Se amplia según las pistas.</strong> Función tiroidea y renal, serología de VIH y de sífilis, cobre y ceruloplasmina si hay mielopatía asociada o cirugía bariátrica previa, y estudio de celiaquía. Ante antecedente familiar, pies cavos o dedos en martillo, <strong>estudio genético</strong> de neuropatía hereditaria, que evita muchas pruebas inútiles.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Y siempre, la lista de FÁRMACOS y TÓXICOS.</strong> Quimioterapicos (platinos, taxanos, vincristina, bortezomib), amiodarona, metronidazol y nitrofurantoína prolongados, linezolid, isoniazida sin piridoxina, fenitoína, alcohol, plomo, arsénico y el <strong>óxido nitroso</strong> inhalado con fines recreativos, que produce un cuadro por déficit funcional de B12 en pacientes jóvenes.
    </div>
  </div>
</div>`;

const facialHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #2e6b6b;border-radius:8px;padding:6px 8px;background:#2e6b6b08;">
      <div style="font-weight:700;color:#2e6b6b;text-align:center;margin-bottom:4px;">PERIFÉRICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Afecta a <strong style="color:var(--ink);">TODA la hemicara, INCLUIDA la frente</strong>: no arruga la frente ni cierra bien el ojo de ese lado. Puede añadir hiperacusia, alteración del gusto en los dos tercios anteriores de la lengua y sequedad ocular.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">CENTRAL</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">RESPETA LA FRENTE</strong>, porque su musculatura recibe inervación de los dos hemisferios. Solo cae la mitad inferior de la cara. <strong style="color:#8c3a34;">Es un ICTUS hasta que se demuestre lo contrario</strong> y se maneja como tal, con neuroimagen urgente.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LO QUE HAY QUE HACER EN LAS PRIMERAS 72 HORAS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. CORTICOIDE ORAL</strong> cuanto antes, idealmente dentro de las primeras 72 horas: es lo que mejora la probabilidad de recuperación completa.<br><strong style="color:var(--ink);">2. PROTECCIÓN OCULAR</strong>, que es lo que evita la única secuela grave: lágrimas artificiales de dia, pomada y OCLUSIÓN por la noche. Si no cierra el ojo, la cornea se úlcera.<br><strong style="color:var(--ink);">3. Buscar VESICULAS</strong> en el pabellon auricular y en el conducto: definen el síndrome de Ramsay Hunt, que tiene peor pronóstico y si lleva antiviral.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Cuando NO es una parálisis de Bell y hay que estudiar.</strong> Si es <strong>BILATERAL</strong> (Guillain-Barré, Lyme, sarcoidosis, VIH), si es <strong>RECURRENTE</strong> o siempre del mismo lado, si progresa en más de 3 semanas en lugar de instaurarse en horas, si hay otros pares craneales afectados, si hay masa parotídea o si no ha empezado a mejorar a los 3 o 4 meses. En esos casos, neuroimagen y estudio dirigido.
  </div>
</div>`;

const ortostatismoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a8c;border-radius:8px;padding:5px 9px;background:#6b4a8c12;margin-bottom:6px;">
    <strong style="color:#6b4a8c;">La hipotensión ortostática se define por una caída de 20 mmHg en la sistólica o de 10 en la diastólica a los 3 minutos de ponerse de pie.</strong> <span style="color:var(--ink-dim);">Pero el dato que de verdad orienta no es la presión: es lo que hace el PULSO.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">NEUROGÉNICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La presión cae y la frecuencia cardiaca <strong style="color:var(--ink);">NO sube lo que debería</strong>, porque el arco reflejo simpático esta dañado. Apunta a fallo autonómico: enfermedad de Parkinson, atrofia multisistémica, fallo autonómico puro, neuropatía diabética o amiloidotica.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">NO NEUROGÉNICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La presión cae y la frecuencia cardiaca <strong style="color:var(--ink);">SI sube de forma marcada</strong>: el reflejo funciona y esta compensando. Apunta a hipovolemia, anemia, sangrado, insuficiencia suprarrenal o, muy a menudo, a un <strong>FÁRMACO</strong>.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Y una entidad distinta: el síndrome de taquicardia postural.</strong> Aumento de la frecuencia cardiaca de <strong>30 latidos o más</strong> en los 10 primeros minutos de bipedestación, <strong style="color:var(--ink);">SIN</strong> hipotensión ortostática, con síntomas persistentes. Afecta sobre todo a mujeres jóvenes y se trata con sal, líquidos, medias de compresión y ejercicio progresivo, no con reposo.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">La urgencia autonómica que hay que reconocer.</strong> En una lesión medular a nivel de T6 o por encima, un estímulo por debajo de la lesión (vejiga llena, fecaloma, úlcera) desencadena una <strong>DISREFLEXIA AUTONÓMICA</strong>: crisis hipertensiva con cefalea intensa, sudoración y bradicardia. Se trata sentando al paciente, buscando y retirando el desencadenante, y solo después con antihipertensivo de acción corta.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El nervio periférico da un número limitado de síntomas (pérdida de sensibilidad, dolor, debilidad, arreflexia y disfunción autónoma) para un número enorme de causas. Por eso el trabajo clínico no consiste en pedir una analítica larga y esperar, sino en <strong>definir primero el patrón</strong>, que es lo que reduce el diferencial a algo manejable y decide la urgencia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: el patrón manda.</strong></p>
<p style="margin:0 0 12px;">Cuatro patrones y cuatro diferenciales distintos. La <strong>polineuropatía distal simétrica</strong>, que empieza en los pies y es dependiente de la longitud del axon, apunta a lo metabólico, lo tóxico y lo carencial. La <strong>mononeuropatia</strong> apunta a atrapamiento. La <strong>mononeuritis múltiple</strong>, asimétrica y sucesiva, es una <strong>vasculitis hasta que se demuestre lo contrario</strong> y es la única de las cuatro que urge. Y la afectación <strong>proximal y distal con arreflexia</strong> es una poliradiculoneuropatia. A esa pregunta se añade una segunda, que responde el electroneurograma: axonal o desmielinizante.</p>
${figBlock('Figura 1', 'Los cuatro patrones y lo que abre cada uno', patronHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el estudio de la polineuropatía distal simétrica.</strong></p>
<p style="margin:0 0 12px;">Es el patrón más frecuente con diferencia, y su estudio tiene una respuesta corta: <strong>glucemia</strong> (mejor con sobrecarga oral, que detecta la prediabetes), <strong>vitamina B12</strong> con ácido metilmalónico, e <strong>inmunofijación en suero</strong>. Esas tres concentran casi todo el rendimiento. Lo demás se pide según las pistas, y hay dos que se olvidan con frecuencia: la lista completa de fármacos y tóxicos, y el antecedente familiar con pies cavos, que apunta a una neuropatía hereditaria y ahorra muchas pruebas.</p>
${figBlock('Figura 2', 'Las tres pruebas de mayor rendimiento y cuando ampliar', estudioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la parálisis facial, que se decide en la frente.</strong></p>
<p style="margin:0 0 12px;">La distinción entre periférica y central se hace mirando si el paciente <strong>arruga la frente</strong>: la periférica afecta a toda la hemicara y la central respeta la frente, porque su musculatura recibe inervación de los dos hemisferios. Una parálisis facial central es un ictus hasta que se demuestre lo contrario. En la periférica, lo que cambia el pronóstico son el <strong>corticoide en las primeras 72 horas</strong> y la <strong>protección ocular</strong>, que es lo que evita la única secuela realmente grave.</p>
${figBlock('Figura 3', 'Periférica o central, y las tres cosas de las primeras 72 horas', facialHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: el sistema autónomo, y el dato esta en el pulso.</strong></p>
<p style="margin:0 0 12px;">La hipotensión ortostática se define por una caída de 20 mmHg en la sistólica o de 10 en la diastólica a los 3 minutos de bipedestación. Pero lo que separa la forma <strong>neurogénica</strong> de la que no lo es no es la presión sino la <strong>respuesta del pulso</strong>: si la frecuencia cardiaca no sube lo que debería, el arco reflejo esta dañado; si sube mucho, el reflejo funciona y lo que hay detrás es hipovolemia o un fármaco.</p>
${figBlock('Figura 4', 'Hipotensión ortostática: lo que dice el pulso', ortostatismoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No pedir un panel enorme de anticuerpos antes de haber definido el patrón. No pasar por alto una mononeuritis múltiple, que es la única presentación urgente. No olvidar la lista de fármacos y tóxicos, incluido el óxido nitroso inhalado en pacientes jóvenes. No descartar un déficit de B12 porque el hemograma sea normal. No confundir una parálisis facial central con una de Bell: hay que mirar la frente. No dar de alta una parálisis facial periférica sin protección ocular. No tratar como idiopática una parálisis facial bilateral, recurrente o de instauración lenta. No atribuir un mareo ortostático al envejecimiento sin medir la presión de pie y sin mirar el pulso. Y no dar un antihipertensivo en una disreflexia autonómica antes de haber buscado y retirado el desencadenante.</p>`;

export const bibliografia = [
  'England JD, Gronseth GS, Franklin G, et al. Practice parameter: evaluation of distal symmetric polyneuropathy: role of laboratory and genetic testing. Report of the AAN, AANEM and AAPMR. Neurology. 2009;72(2):185-192.',
  'England JD, Gronseth GS, Franklin G, et al. Distal symmetric polyneuropathy: a definition for clinical research. Neurology. 2005;64(2):199-207.',
  'Gronseth GS, Paduga R. Evidence-based guideline update: steroids and antivirals for Bell palsy. Report of the Guideline Development Subcommittee of the American Academy of Neurology. Neurology. 2012;79(22):2209-2213.',
  'Baugh RF, Basura GJ, Ishii LE, et al. Clinical practice guideline: Bell palsy. Otolaryngol Head Neck Surg. 2013;149(3 Suppl):S1-S27.',
  'Van den Bergh PYK, van Doorn PA, Hadden RDM, et al. European Academy of Neurology/Peripheral Nerve Society guideline on diagnosis and treatment of chronic inflammatory demyelinating polyradiculoneuropathy: 2021 revision. Eur J Neurol. 2021;28(11):3556-3583.',
  'Freeman R, Wieling W, Axelrod FB, et al. Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome. Clin Auton Res. 2011;21(2):69-72.',
  'Norcliffe-Kaufmann L, Kaufmann H, Palma JA, et al. Orthostatic heart rate changes in patients with autonomic failure caused by neurodegenerative synucleinopathies. Ann Neurol. 2018;83(3):522-531.',
  'Sheldon RS, Grubb BP, Olshansky B, et al. 2015 Heart Rhythm Society expert consensus statement on the diagnosis and treatment of postural tachycardia syndrome, inappropriate sinus tachycardia and vasovagal syncope. Heart Rhythm. 2015;12(6):e41-e63.',
  'Pop-Busui R, Boulton AJM, Feldman EL, et al. Diabetic neuropathy: a position statement by the American Diabetes Association. Diabetes Care. 2017;40(1):136-154.',
  'Finnerup NB, Attal N, Haroutounian S, et al. Pharmacotherapy for neuropathic pain in adults: a systematic review and meta-analysis. Lancet Neurol. 2015;14(2):162-173.',
  'Collins MP, Dyck PJB, Gronseth GS, et al. Peripheral Nerve Society guideline on the classification, diagnosis, investigation and immunosuppressive therapy of non-systemic vasculitic neuropathy. J Peripher Nerv Syst. 2010;15(3):176-184.',
  'Terkelsen AJ, Karlsson P, Lauria G, et al. The diagnostic challenge of small fibre neuropathy: clinical presentations, evaluations, and causes. Lancet Neurol. 2017;16(11):934-944.',
  'Krassioukov A, Warburton DE, Teasell R, Eng JJ. A systematic review of the management of autonomic dysreflexia after spinal cord injury. Arch Phys Med Rehabil. 2009;90(4):682-695.',
  'Callaghan BC, Price RS, Feldman EL. Distal symmetric polyneuropathy: a review. JAMA. 2015;314(20):2172-2181.',
  'Hehir MK, Logigian EL. Infectious neuropathies. Continuum (Minneap Minn). 2014;20(5):1274-1292.',
  'Gibbons CH, Freeman R. Treatment-induced neuropathy of diabetes. Curr Diab Rep. 2017;17(9):72.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Síntomas del nervio periférico',
      tituloB: 'Síntomas autónomos',
      compensada: 'SENSITIVOS POSITIVOS: hormigueo, quemazón, calambres, dolor lancinante, alodinia (el roce de la sábana duele). SENSITIVOS NEGATIVOS: acorchamiento, sensación de andar sobre algodón, inestabilidad al caminar en la oscuridad. MOTORES: debilidad distal con dificultad para levantar el pie, tropiezos, atrofia de la musculatura intrínseca de la mano. La distribución es lo que hay que precisar: en calcetín y simétrica, o en el territorio de un nervio concreto, o parcheada y asimétrica.',
      descompensada: 'Mareo o visión borrosa al levantarse, síncope, intolerancia al ejercicio, hipohidrosis o hiperhidrosis, sequedad de boca y de ojos, estreñimiento o diarrea nocturna, gastroparesia con saciedad precoz y vómitos, retención urinaria o incontinencia, disfunción eréctil (que en el varón diabético es a menudo el primer síntoma autónomo). Y dos situaciones de alarma: la ausencia de variabilidad de la frecuencia cardiaca en el diabético, que se asocia a mayor mortalidad y a isquemia silente, y la DISREFLEXIA AUTONÓMICA en la lesión medular alta.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayunas, hemoglobina glucosilada y sobrecarga oral de glucosa', utilidad: 'Es la primera de las tres pruebas de mayor rendimiento. La SOBRECARGA ORAL añade valor porque detecta la prediabetes, que se asocia a polineuropatía y sobre todo a neuropatía de fibra fina, y que puede pasar desapercibida con la glucemia y la hemoglobina glucosilada normales.' },
      { prueba: 'Vitamina B12 con ácido metilmalónico', utilidad: 'Segunda prueba de alto rendimiento. El déficit produce neuropatía con o sin anemia y con o sin macrocitosis, de modo que un hemograma normal no lo descarta. Si la B12 esta en zona baja-normal, el ácido metilmalónico elevado confirma el déficit funcional, que es lo que importa.' },
      { prueba: 'Electroforesis con INMUNOFIJACIÓN en suero', utilidad: 'Tercera prueba de alto rendimiento y más sensible que la electroforesis sola. Busca una gammapatía monoclonal, que puede ser la causa de la neuropatía y que obliga a un estudio hematológico propio. Su omisión es un fallo frecuente del estudio etiológico.' },
      { prueba: 'Estudio de vasculitis', utilidad: 'Ante MONONEURITIS MÚLTIPLE, que es el patrón urgente: velocidad de sedimentación, proteína C reactiva, ANCA, factor reumatoide, crioglobulinas, complemento, anticuerpos antinucleares, serologías de hepatitis B y C, y VIH. El retraso aquí cuesta axones que no se recuperan.' },
      { prueba: 'Función tiroidea y renal', utilidad: 'El hipotiroidismo y la uremia son causas reconocidas y corregibles. Se piden en la ampliación del estudio, no en el primer escalón, salvo que la clínica las sugiera.' },
      { prueba: 'Cobre, ceruloplasmina y vitamina E', utilidad: 'Ante mielopatía asociada a la neuropatía, antecedente de CIRUGÍA BARIÁTRICA, malabsorción o suplementación crónica con zinc, que induce déficit de cobre. Es una causa tratable que se pasa por alto con facilidad y que puede dejar secuelas si se detecta tarde.' },
      { prueba: 'Revisión de FÁRMACOS y de tóxicos', utilidad: 'Quimioterapicos (platinos, taxanos, vincristina, bortezomib), amiodarona, metronidazol y nitrofurantoína prolongados, linezolid, isoniazida sin piridoxina, fenitoína, alcohol, plomo y arsénico. Y el ÓXIDO NITROSO inhalado con fines recreativos, que produce un cuadro por déficit funcional de B12 en pacientes jóvenes y que solo se detecta si se pregunta.' },
      { prueba: 'Líquido cefalorraquídeo', utilidad: 'Ante sospecha de poliradiculoneuropatia inflamatoria: la disociación albuminocitologica (proteínas elevadas con celularidad normal) apoya el diagnóstico. Una pleocitosis marcada obliga a pensar en infección, linfoma o sarcoidosis, no en una forma inflamatoria clásica.' }
    ],
    no_invasivos: [
      { metodo: 'Definición del patrón (calculadora disponible)', interpretacion: 'Clasifica el cuadro en polineuropatía distal simétrica, mononeuropatia, mononeuritis múltiple o poliradiculoneuropatia, y abre el diferencial y la urgencia correspondientes.', cutoff: 'Mononeuritis múltiple: vasculitis hasta que se demuestre lo contrario, y estudio urgente' },
      { metodo: 'Estudio etiológico mínimo (calculadora disponible)', interpretacion: 'Comprueba las tres pruebas de mayor rendimiento y recuerda las ampliaciones dirigidas según las pistas clínicas.', cutoff: 'Glucemia, vitamina B12 con metilmalónico e inmunofijación en suero' },
      { metodo: 'Escala de House-Brackmann (calculadora disponible)', interpretacion: 'Gradua la parálisis facial de I (normal) a VI (parálisis completa) y acompaña la decisión sobre corticoide, antiviral y protección ocular.', cutoff: 'Corticoide oral dentro de las primeras 72 horas; protección ocular si no hay cierre completo' },
      { metodo: 'Prueba de bipedestación activa (calculadora disponible)', interpretacion: 'Mide presión arterial y frecuencia cardiaca en decúbito y a los 3 minutos de pie. Lo que separa la forma neurogénica de la que no lo es es la RESPUESTA DEL PULSO.', cutoff: 'Caída de 20 mmHg sistólica o de 10 diastólica. Cociente de aumento de la frecuencia por cada mmHg de caída menor de 0.5: neurogénica' },
      { metodo: 'Electroneurograma y electromiograma', interpretacion: 'Separan AXONAL (amplitudes bajas con velocidades casi normales) de DESMIELINIZANTE (velocidades lentas, latencias alargadas, bloqueos de conducción), definen la distribución y detectan la afectación subclínica.', cutoff: 'Es NORMAL en la neuropatía de fibra fina, porque explora la fibra gruesa' },
      { metodo: 'Cribado del pie diabético', interpretacion: 'Monofilamento de 10 g más una segunda prueba: diapasón de 128 Hz, sensibilidad al pinchazo o reflejo aquíleo. Su objetivo no es diagnosticar la neuropatía sino identificar el pie EN RIESGO de úlcera.', cutoff: 'Pérdida de la sensibilidad protectora: cribado anual y educación sobre cuidado del pie' },
      { metodo: 'Biopsia cutánea con densidad de fibras intraepidérmicas', interpretacion: 'Prueba de referencia para la neuropatía de FIBRA FINA en el paciente con dolor quemante y electroneurograma normal. Se toma en la pierna distal.', cutoff: 'Densidad reducida respecto a los valores de referencia por edad y sexo' }
    ],
    imagen: [
      { modalidad: 'Ecografía de nervio periférico', hallazgos: 'Cada vez más usada. Muestra el aumento del área de sección en los puntos de atrapamiento (mediano en el carpo, cubital en el codo) y ayuda a localizar la lesión. En las formas inflamatorias crónicas puede mostrar engrosamiento fascicular difuso.' },
      { modalidad: 'Resonancia de plexo o de raíces', hallazgos: 'Ante sospecha de plexopatia, radiculopatía o infiltración tumoral. El realce y el engrosamiento de las raíces apoyan una poliradiculoneuropatia inflamatoria cuando el estudio neurofisiologico no es concluyente.' },
      { modalidad: 'Resonancia craneal y de peñasco', hallazgos: 'En la parálisis facial que NO se comporta como una parálisis de Bell: bilateral, recurrente, de instauración lenta, con otros pares afectados o sin mejoría a los 3 o 4 meses. Busca lesión del angulo pontocerebeloso, del conducto auditivo interno o de la parótida.' },
      { modalidad: 'Biopsia de nervio sural', hallazgos: 'Reservada a la sospecha de VASCULITIS, amiloidosis o sarcoidosis cuando el diagnóstico no se alcanza de otro modo. Es una prueba con secuelas sensitivas permanentes en el territorio biopsiado, de modo que solo se indica si el resultado va a cambiar el tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las neuropatías se clasifican por <strong>patrón de distribución</strong> (simétrica distal, mononeuropatia, mononeuritis múltiple, poliradiculoneuropatia), por <strong>tipo de fibra</strong> afectada (gruesa, que da alteración de la vibración, la propiocepción y los reflejos; fina, que da dolor y disfunción autónoma con electroneurograma normal), por <strong>fisiopatología</strong> (axonal frente a desmielinizante) y por <strong>curso temporal</strong> (agudo, subagudo o crónico). Responder a esas cuatro preguntas antes de pedir nada es lo que convierte un problema aparentemente inabarcable en un diferencial corto.`,
    escalas: [
      { nombre: 'Patrón de la neuropatía (calculadora disponible)', componentes: 'Simetría, distribución proximal o distal, número de nervios afectados y forma de instauración.', formula: 'Cuatro patrones: polineuropatía distal simétrica, mononeuropatia, mononeuritis múltiple y poliradiculoneuropatia.', interpretacion: 'La polineuropatía distal simétrica apunta a lo metabólico, tóxico y carencial. La mononeuropatia, a atrapamiento. La MONONEURITIS MÚLTIPLE es una vasculitis hasta que se demuestre lo contrario y es la única urgente. La poliradiculoneuropatia se separa por el tiempo: aguda es Guillain-Barré, crónica es la forma inflamatoria crónica.' },
      { nombre: 'Estudio etiológico mínimo (calculadora disponible)', componentes: 'Glucemia con sobrecarga oral, vitamina B12 con ácido metilmalónico e inmunofijación en suero, más las ampliaciones dirigidas.', formula: 'Esas tres pruebas concentran el mayor rendimiento diagnóstico en la polineuropatía distal simétrica.', interpretacion: 'Pedir un panel amplio de entrada encuentra hallazgos irrelevantes y no aumenta el rendimiento. Las ampliaciones se guian por las pistas: función tiroidea y renal, serologías, cobre, celiaquía y estudio genético si hay antecedente familiar y pies cavos.' },
      { nombre: 'Escala de House-Brackmann (calculadora disponible)', componentes: 'Movilidad facial en reposo y con el movimiento, cierre ocular y presencia de sincinesias.', formula: 'De grado I (función normal) a grado VI (parálisis completa sin ningún movimiento).', interpretacion: 'Cuantifica la gravedad y permite seguir la recuperación. Los grados altos y la ausencia de cierre ocular son los que obligan a extremar la protección corneal, que es lo que evita la única secuela realmente grave.' },
      { nombre: 'Hipotensión ortostática y su origen (calculadora disponible)', componentes: 'Presión arterial y frecuencia cardiaca en decúbito y a los 3 minutos de bipedestación.', formula: 'Hipotensión ortostática: caída de 20 mmHg o más en la sistólica, o de 10 mmHg o más en la diastólica. El cociente entre el aumento de la frecuencia cardiaca y la caída de la sistólica separa el origen.', interpretacion: 'Un cociente por debajo de 0.5 latidos por cada mmHg de caída apunta a origen NEUROGENICO. Un aumento marcado de la frecuencia apunta a hipovolemia, anemia, insuficiencia suprarrenal o fármacos. El síndrome de taquicardia postural es otra entidad: aumento de 30 latidos o más en 10 minutos SIN hipotensión.' },
      { nombre: 'Axonal frente a desmielinizante', componentes: 'Amplitudes, velocidades de conducción, latencias distales y presencia de bloqueos de conducción en el electroneurograma.', formula: 'Axonal: amplitudes reducidas con velocidades relativamente conservadas. Desmielinizante: velocidades lentas, latencias alargadas, ondas F retrasadas y bloqueos de conducción.', interpretacion: 'Es la distinción que más cambia el manejo. Lo axonal corresponde a la gran mayoría y suele ser tóxico, metabólico o carencial. Lo desmielinizante adquirido es mucho menos frecuente pero potencialmente TRATABLE con inmunoterapia, de modo que identificarlo tiene consecuencias inmediatas.' },
      { nombre: 'Criterios de síndrome de taquicardia postural', componentes: 'Aumento sostenido de la frecuencia cardiaca en bipedestación, ausencia de hipotensión ortostática, duración de los síntomas y exclusión de otras causas.', formula: 'Aumento de 30 latidos por minuto o más (40 o más en adolescentes) en los 10 primeros minutos de bipedestación, sin caída tensional que cumpla criterio, con síntomas de al menos 3 meses.', interpretacion: 'Antes de etiquetarlo hay que descartar deshidratación, anemia, hipertiroidismo, feocromocitoma, fármacos y desacondicionamiento. El tratamiento es sal, líquidos, medias de compresión y ejercicio PROGRESIVO, no reposo, que empeora el cuadro.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfoque de la neuropatía: el patrón antes que la causa',
      color: '#2e6b6b',
      definicion: 'Método de aproximación al paciente con síntomas de nervio periférico, basado en definir la distribución, el tipo de fibra, la fisiopatología y el curso temporal antes de solicitar ninguna prueba etiológica.',
      fisiopatologia: 'La razón de que el patrón sea tan informativo es anatómica. Los procesos que afectan al metabolismo o a la nutrición del axon dañan primero las fibras más largas, porque son las que tienen mayor demanda de transporte axonal: de ahi el patrón dependiente de la longitud, que empieza en los pies. Los procesos que ocluyen los vasos del nervio (los vasa nervorum) producen infartos en puntos aleatorios y dan un patrón asimétrico y parcheado. Y los procesos que atacan la mielina o las raíces afectan por igual a lo proximal y a lo distal y borran los reflejos de forma difusa.',
      epidemiologia: 'La polineuropatía es muy prevalente y aumenta con la edad, y la diabetes es su causa más frecuente en los países con alta prevalencia de la enfermedad. Una proporción importante de los casos se queda sin causa identificada pese a un estudio correcto, y esa proporción baja cuando se incluye la sobrecarga oral de glucosa.',
      factores_riesgo: ['Diabetes mellitus y prediabetes', 'Consumo excesivo de alcohol', 'Edad avanzada', 'Insuficiencia renal crónica', 'Quimioterapia previa', 'Déficit de vitamina B12', 'Hipotiroidismo', 'Gammapatía monoclonal', 'Infección por VIH', 'Antecedente familiar de neuropatía o de pies cavos', 'Cirugía bariátrica y malabsorción', 'Exposición a tóxicos industriales'],
      clinica: 'Síntomas sensitivos positivos (hormigueo, quemazón, alodinia) y negativos (acorchamiento, inestabilidad), debilidad distal y arreflexia. Lo que hay que precisar en la consulta es la DISTRIBUCIÓN, porque de ella sale todo lo demás.',
      criterios_dx: 'Clínicos y neurofisiologicos. Definir cuatro cosas: distribución, tipo de fibra, axonal o desmielinizante, y curso temporal. Ver la Figura 1 de Definición.',
      laboratorio: 'Las tres pruebas de mayor rendimiento en el patrón distal simétrico: glucemia con sobrecarga oral, vitamina B12 con ácido metilmalónico e inmunofijación en suero. El resto, dirigido.',
      imagen: 'Ecografía de nervio en la sospecha de atrapamiento. Resonancia de plexo o de raíces si el patrón sugiere afectación proximal.',
      complementarios: 'ELECTRONEUROGRAMA Y ELECTROMIOGRAMA, que confirman la neuropatía, definen su distribución y separan lo axonal de lo desmielinizante. Recordar que son NORMALES en la neuropatía de fibra fina.',
      dx_diferencial: 'Mielopatía (que añade nivel sensitivo, hiperreflexia y Babinski), radiculopatía, claudicación neurógena por estenosis de canal, miopatía (debilidad proximal sin alteración sensitiva), y enfermedad de motoneurona (debilidad con fasciculaciones y sin alteración sensitiva).',
      tx_medico: 'Corregir la causa cuando se identifica, que es lo único que modifica el curso. Cuidado del pie, prevención de caídas y rehabilitación. Educación sobre la pérdida de sensibilidad protectora.',
      tx_farmacologico: 'Tratamiento del dolor neuropático cuando lo hay: gabapentina o pregabalina, duloxetina o amitriptilina como primera línea. Los opioides no son tratamiento de primera línea y su uso prolongado en dolor neuropático crónico tiene más riesgos que beneficios.',
      tx_intervencionista: 'Descompresión quirúrgica en los atrapamientos que no responden al tratamiento conservador.',
      criterios_uci: 'No por la neuropatía crónica. Si en la forma aguda con afectación respiratoria, que se maneja como síndrome de Guillain-Barré.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica, salvo en amiloidosis hereditaria por transtiretina, donde el trasplante hepático fue una opción antes de los tratamientos actuales.',
      seguimiento_hospitalario: 'En el paciente ingresado con neuropatía, prevención de úlceras por presión en las zonas anestésicas y protección postural para evitar nuevos atrapamientos, sobre todo del cubital en el codo y del peroneo en la cabeza del perone.',
      seguimiento_ambulatorio: 'Reevaluación del patrón si el cuadro cambia: una polineuropatía que se vuelve asimétrica obliga a replantear el diagnóstico y a descartar vasculitis.',
      pronostico: 'Depende de la causa y de si es axonal o desmielinizante. La regeneración axonal es lenta y con frecuencia incompleta, mientras que la desmielinización puede revertir bien si se trata a tiempo, lo que refuerza la importancia de identificarla.',
      algoritmo: ['Precisar la DISTRIBUCIÓN: simétrica distal, un nervio, parcheada o proximal y distal', 'Precisar el tipo de fibra: gruesa, fina o ambas', 'Precisar el curso: agudo, subagudo o crónico', 'Si es asimétrica y parcheada, pensar en VASCULITIS y actuar con urgencia', 'Pedir electroneurograma para separar axonal de desmielinizante', 'En el patrón distal simétrico, pedir las tres pruebas de alto rendimiento', 'Revisar SIEMPRE fármacos, alcohol y tóxicos', 'Preguntar por antecedentes familiares y mirar los pies', 'Ampliar el estudio solo según las pistas obtenidas', 'Tratar el dolor neuropático y proteger el pie insensible']
    },
    {
      nombre: 'Polineuropatía distal simétrica',
      color: '#3f6b52',
      definicion: 'Afectación simétrica y dependiente de la longitud de los nervios periféricos, que comienza en los pies y asciende, y que constituye el patrón más frecuente de neuropatía.',
      fisiopatologia: 'Las fibras más largas son las más vulnerables porque dependen de un transporte axonal que recorre distancias enormes desde el cuerpo neuronal. Cualquier agresion metabólica, tóxica o carencial compromete primero su extremo distal, y el daño progresa desde ahi hacia proximal. Por eso las manos no se afectan hasta que la alteración de las piernas alcanza aproximadamente las rodillas, lo que da el patrón clásico en calcetín y después en guante. En la diabetes se suman la via del poliol, los productos de glicacion avanzada, el estrés oxidativo y la isquemia de los vasa nervorum.',
      epidemiologia: 'La diabetes es la causa más frecuente. Una proporción importante de los pacientes con neuropatía distal simétrica y estudio negativo tiene en realidad prediabetes, que solo se detecta con sobrecarga oral de glucosa. Tras un estudio completo, una parte sigue siendo criptogénica.',
      factores_riesgo: ['Diabetes de larga evolución y mal control glucémico', 'Prediabetes y síndrome metabólico', 'Consumo excesivo de alcohol', 'Déficit de vitamina B12', 'Insuficiencia renal crónica', 'Hipotiroidismo', 'Gammapatía monoclonal', 'Quimioterapia neurotoxica', 'Edad avanzada', 'Talla alta, por la mayor longitud axonal', 'Tabaquismo e hipertrigliceridemia en el diabético', 'Cirugía bariátrica con malabsorción'],
      clinica: 'Comienza por acorchamiento y hormigueo en los DEDOS DE LOS PIES, de forma simétrica, y asciende con el tiempo. Puede haber dolor quemante de predominio NOCTURNO. Después aparecen pérdida de la sensibilidad vibratoria, arreflexia aquilea, inestabilidad en la oscuridad y, en fases avanzadas, debilidad distal con dificultad para levantar el pie. La ausencia de dolor no significa ausencia de riesgo: la forma indolora es la que produce úlceras.',
      criterios_dx: 'Clínicos, apoyados por el electroneurograma. En el diabético con cuadro típico y cribado positivo puede no hacer falta neurofisiologia. Ver la Figura 2 de Definición.',
      laboratorio: 'GLUCEMIA con sobrecarga oral, VITAMINA B12 con ácido metilmalónico e INMUNOFIJACIÓN en suero. Ampliación dirigida: función tiroidea y renal, serologías, cobre y ceruloplasmina, y estudio de celiaquía.',
      imagen: 'No suele ser necesaria en el patrón típico.',
      complementarios: 'Electroneurograma, habitualmente con patrón AXONAL. CRIBADO DEL PIE con monofilamento de 10 g y una segunda prueba en todo diabético, al menos una vez al año. Biopsia cutánea si predomina el dolor y la neurofisiologia es normal.',
      dx_diferencial: 'Neuropatía de fibra fina, polineuropatía desmielinizante crónica (que añade afectación proximal y arreflexia difusa), mielopatía por déficit de B12 o de cobre, estenosis de canal lumbar y neuropatía hereditaria, que hay que sospechar ante pies cavos y antecedente familiar.',
      tx_medico: 'CONTROL GLUCÉMICO estricto, que en la diabetes tipo 1 previene la neuropatía de forma clara y en la tipo 2 tiene un efecto más modesto. Abstinencia de alcohol. Corrección de los déficits. CUIDADO DEL PIE: inspección diaria, calzado adecuado, tratamiento de las callosidades y educación, porque el objetivo aquí es evitar la úlcera y la amputación.',
      tx_farmacologico: 'Para el dolor neuropático: pregabalina o gabapentina, duloxetina o amitriptilina, eligiendo según comorbilidad y efectos adversos. Combinar si la respuesta es parcial. Los OPIOIDES no son primera línea. Los parches de capsaicina o de lidocaina son una opción en dolor localizado.',
      tx_intervencionista: 'Estimulación medular en casos muy seleccionados de dolor refractario. Cirugía del pie diabético según la complicación.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Protección del pie insensible durante el ingreso: retirar dispositivos compresivos, inspeccionar los talones a diario y evitar apoyos prolongados.',
      seguimiento_ambulatorio: 'Cribado anual del pie en el diabético. Reevaluar si el patrón cambia a asimétrico. Vigilar la aparición de síntomas autónomos, que en el diabético marcan peor pronóstico.',
      pronostico: 'Progresión lenta. El control de la causa frena el avance pero rara vez revierte lo perdido. Lo que más cambia el pronóstico funcional no es el dolor sino la pérdida de sensibilidad protectora, por el riesgo de úlcera y amputación.',
      algoritmo: ['Confirmar el patrón simétrico, distal y dependiente de la longitud', 'Pedir glucemia con SOBRECARGA ORAL, que detecta la prediabetes', 'Pedir vitamina B12 con ácido metilmalónico', 'Pedir electroforesis con INMUNOFIJACIÓN en suero', 'Revisar fármacos, alcohol y tóxicos, incluido el óxido nitroso', 'Preguntar por antecedente familiar y mirar si hay pies cavos', 'Ampliar el estudio solo según las pistas', 'Hacer cribado del pie con monofilamento en todo diabético', 'Tratar el dolor con gabapentinoide, duloxetina o amitriptilina', 'Educar sobre el cuidado del pie insensible']
    },
    {
      nombre: 'Mononeuropatias y mononeuritis múltiple',
      color: '#8c3a34',
      definicion: 'Afectación de un solo nervio periférico (mononeuropatia), casi siempre por atrapamiento, o de varios nervios de forma sucesiva y asimétrica (mononeuritis múltiple), que obliga a descartar una vasculitis.',
      fisiopatologia: 'En la mononeuropatia por atrapamiento, la compresión mecánica repetida en un punto anatómico estrecho produce desmielinización focal y, si se mantiene, pérdida axonal. En la mononeuritis múltiple el mecanismo es distinto y explica su urgencia: la inflamación de los vasos que nutren el nervio (los vasa nervorum) produce INFARTOS en el tronco nervioso, en puntos aleatorios y de forma sucesiva. Cada infarto es una pérdida axonal establecida, y por eso el retraso terapéutico se traduce en déficit permanente.',
      epidemiologia: 'El síndrome del túnel carpiano es la mononeuropatia más frecuente. La mononeuritis múltiple es rara pero de las presentaciones neurológicas que más urgen: la vasculitis sistémica o la vasculitis no sistémica del nervio periférico son las causas principales en muchas series.',
      factores_riesgo: ['Movimientos repetitivos y posturas mantenidas para los atrapamientos', 'Embarazo, hipotiroidismo, acromegalia y amiloidosis para el túnel carpiano', 'Diabetes, que aumenta la susceptibilidad del nervio a la compresión', 'Apoyo prolongado del codo o de la rodilla en el paciente encamado o anestesiado', 'Pérdida de peso rápida, que reduce la almohadilla grasa protectora', 'Vasculitis sistémica: poliarteritis nodosa, granulomatosis con poliangeítis, Churg-Strauss', 'Crioglobulinemia asociada a hepatitis C', 'Artritis reumatoide y otras conectivopatias', 'Infección por VIH, lepra y enfermedad de Lyme', 'Sarcoidosis y amiloidosis'],
      clinica: 'MONONEUROPATIA: déficit sensitivo y motor limitado al territorio de un nervio. Túnel carpiano con parestesias nocturnas en los tres primeros dedos que despiertan al paciente y que se alivian al sacudir la mano. Cubital en el codo con afectación del cuarto y quinto dedos. Radial con mano caída. Peroneo con pie caído e imposibilidad de elevar el pie. MONONEURITIS MÚLTIPLE: déficits asimétricos que van sumandose en días o semanas, a menudo DOLOROSOS, con frecuencia acompañados de síntomas sistémicos (fiebre, pérdida de peso, artralgias, lesiones cutáneas).',
      criterios_dx: 'Clínicos y neurofisiologicos, con localización de la lesión. Ante mononeuritis múltiple, el diagnóstico es de la ENFERMEDAD DE BASE y no del nervio. Ver la Figura 1 de Definición.',
      laboratorio: 'En la mononeuritis múltiple, estudio URGENTE de vasculitis: velocidad de sedimentación, proteína C reactiva, ANCA, factor reumatoide, crioglobulinas, complemento, anticuerpos antinucleares, serologías de hepatitis B y C, y VIH.',
      imagen: 'Ecografía de nervio, que muestra el aumento del área de sección en el punto de atrapamiento y permite localizar la compresión. Resonancia si se sospecha lesión ocupante de espacio.',
      complementarios: 'Electroneurograma con localización del bloqueo o de la lesión. BIOPSIA DE NERVIO SURAL, con o sin biopsia muscular asociada, ante sospecha de vasculitis cuando el diagnóstico no se alcanza de otro modo.',
      dx_diferencial: 'Radiculopatía (que sigue un dermatoma y suele doler en el cuello o la espalda), plexopatia, neuropatía por compresión externa en el paciente encamado, diabetes con mononeuropatias múltiples, y las polineuropatías asimétricas de otras causas.',
      tx_medico: 'En el atrapamiento: modificación de la actividad, ferula (nocturna en el túnel carpiano), evitar el apoyo del codo o de la rodilla, y fisioterapia. En el paciente ingresado, protección postural para prevenir nuevos atrapamientos.',
      tx_farmacologico: 'Infiltración con corticoide en el túnel carpiano, con efecto habitualmente transitorio. En la MONONEURITIS MÚLTIPLE por vasculitis: corticoides a dosis altas más inmunosupresor, sin esperar a la biopsia si la sospecha es alta, porque cada dia de retraso son axones perdidos.',
      tx_intervencionista: 'DESCOMPRESIÓN QUIRÚRGICA en el atrapamiento con déficit motor, atrofia o falta de respuesta al tratamiento conservador. En el túnel carpiano, la cirugía es más eficaz que el tratamiento conservador a medio plazo.',
      criterios_uci: 'Los de la vasculitis sistémica grave con afectación de otros órganos.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante una mononeuritis múltiple, coordinar sin demora con reumatología o con la unidad correspondiente. No esperar a completar todo el estudio para iniciar tratamiento si la sospecha de vasculitis es alta.',
      seguimiento_ambulatorio: 'En el atrapamiento, valorar la respuesta y la recuperación neurofisiologica. En la vasculitis, seguimiento de la enfermedad de base y de la toxicidad del tratamiento.',
      pronostico: 'Bueno en el atrapamiento tratado antes de que haya pérdida axonal significativa. En la mononeuritis múltiple, el pronóstico depende directamente de la precocidad del tratamiento: la recuperación axonal es lenta y a menudo incompleta.',
      algoritmo: ['Determinar si la afectación es de un nervio o de varios', 'Si es de varios y ASIMÉTRICA, pensar en vasculitis desde el primer momento', 'Buscar síntomas sistémicos: fiebre, pérdida de peso, lesiones cutáneas, artralgias', 'Pedir estudio de vasculitis con urgencia', 'Localizar la lesión con electroneurograma y ecografía', 'En la mononeuropatia, buscar el punto de atrapamiento y su causa', 'Tratar el atrapamiento con ferula y modificación de la actividad', 'Operar si hay déficit motor, atrofia o fracaso del tratamiento conservador', 'En la vasculitis, NO retrasar corticoides e inmunosupresor', 'Valorar biopsia de nervio sural solo si va a cambiar el tratamiento']
    },
    {
      nombre: 'Parálisis facial periférica',
      color: '#8a6a1f',
      definicion: 'Debilidad o parálisis de toda la musculatura de una hemicara, INCLUIDA la frente, por lesión del nervio facial en su trayecto periférico. La forma idiopática se denomina parálisis de Bell.',
      fisiopatologia: 'El nervio facial recorre un canal óseo estrecho en el peñasco. Cualquier proceso que produzca inflamación y edema del nervio en ese trayecto lo comprime contra una pared que no cede, lo que produce isquemia y bloqueo de la conducción. La hipótesis más aceptada para la forma idiopática es la reactivación de un virus neurotropo, sobre todo el herpes simple. Esa fisiopatología explica el tratamiento: el corticoide reduce el edema dentro del canal, y por eso funciona mejor cuanto antes se administre.',
      epidemiologia: 'Es la mononeuropatia craneal más frecuente. La mayoría de los pacientes con parálisis de Bell recupera de forma completa o casi completa, y la proporción mejora de forma significativa con corticoide precoz.',
      factores_riesgo: ['Embarazo, sobre todo en el tercer trimestre y el posparto', 'Diabetes mellitus', 'Hipertensión arterial', 'Obesidad', 'Infección respiratoria de vías altas previa', 'Inmunosupresion', 'Antecedente personal o familiar de parálisis facial', 'Enfermedad de Lyme en zonas endémicas', 'Infección por VIH', 'Sarcoidosis'],
      clinica: 'Instauración en HORAS o pocos días, con máximo déficit en 72 horas. No arruga la frente, no cierra el ojo (signo de Bell: el globo ocular se desvia hacia arriba al intentar cerrarlo), la comisura cae, el surco nasogeniano se borra. Puede añadir hiperacusia, alteración del gusto en los dos tercios anteriores de la lengua, sequedad ocular y dolor retroauricular, que a menudo precede a la parálisis.',
      criterios_dx: 'CLÍNICO. La clave es comprobar que la frente esta afectada: si la frente se conserva, la lesión es CENTRAL y el manejo es el de un ictus. Ver la Figura 3 de Definición.',
      laboratorio: 'No de rutina en la forma típica. Serología de Lyme en zonas endémicas o ante exposición, glucemia, serología de VIH y enzima convertidora de angiotensina si el cuadro es atípico, bilateral o recurrente.',
      imagen: 'No indicada en la parálisis de Bell típica. Resonancia craneal y de peñasco si es bilateral, recurrente, de instauración progresiva en más de 3 semanas, con otros pares craneales afectados, con masa parotídea o sin mejoría a los 3 o 4 meses.',
      complementarios: 'Exploración OTOSCOPICA buscando vesiculas en el pabellon y en el conducto auditivo, que definen el síndrome de Ramsay Hunt. Electroneurografia en casos graves para valorar el pronóstico, aunque su utilidad práctica es limitada.',
      dx_diferencial: 'PARÁLISIS CENTRAL por ictus o lesión hemisférica, que respeta la frente. Síndrome de Ramsay Hunt. Enfermedad de Lyme, sobre todo si es bilateral. Síndrome de Guillain-Barré y síndrome de Miller Fisher. Sarcoidosis con síndrome de Heerfordt. Tumor de parótida o del angulo pontocerebeloso. Otitis media complicada y colesteatoma. Traumatismo del peñasco.',
      tx_medico: 'PROTECCIÓN OCULAR, que es lo que evita la única secuela grave: lágrimas artificiales frecuentes durante el dia, pomada lubricante y OCLUSIÓN del ojo por la noche, gafas de sol en el exterior. Sin cierre palpebral completo, la cornea se deseca y se úlcera. Fisioterapia facial y ejercicios, con evidencia moderada.',
      tx_farmacologico: 'CORTICOIDE ORAL cuanto antes, idealmente en las primeras 72 horas: es la intervención con mejor respaldo y mejora la probabilidad de recuperación completa. El ANTIVIRAL añadido al corticoide tiene beneficio pequeno y discutido en la parálisis de Bell, y se reserva a las formas graves; en cambio, en el síndrome de RAMSAY HUNT el antiviral si esta indicado de forma clara junto con el corticoide.',
      tx_intervencionista: 'Descompresión quirúrgica del nervio, controvertida y reservada a casos muy seleccionados en centros con experiencia. Cirugía oculoplastica (pesa palpebral, tarsorrafia) si la falta de cierre se prolonga. Cirugía reconstructiva en las secuelas establecidas.',
      criterios_uci: 'No aplica, salvo que forme parte de un cuadro sistémico grave como un síndrome de Guillain-Barré.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez ingresa. Si ingresa por otro motivo con una parálisis facial, asegurar que la protección ocular esta prescrita y que se cumple, porque es lo que más se olvida en planta.',
      seguimiento_ambulatorio: 'Revisión a las 2 o 3 semanas y a los 3 meses. Si NO ha empezado a mejorar a los 3 o 4 meses, hay que replantear el diagnóstico y pedir imagen: eso ya no se comporta como una parálisis de Bell. Vigilar la aparición de sincinesias y de lágrimas de cocodrilo como secuela de regeneración aberrante.',
      pronostico: 'La mayoría recupera. Los factores de peor pronóstico son la parálisis completa desde el inicio, la edad avanzada, la diabetes, el dolor intenso y el síndrome de Ramsay Hunt, que recupera peor que la parálisis de Bell.',
      algoritmo: ['MIRAR LA FRENTE: si se conserva, es central y se maneja como un ictus', 'Confirmar instauración en horas o pocos días', 'Explorar el conducto y el pabellon buscando VESICULAS', 'Iniciar CORTICOIDE oral dentro de las primeras 72 horas', 'Añadir antiviral si hay Ramsay Hunt o forma grave', 'Prescribir PROTECCIÓN OCULAR: lágrimas, pomada y oclusión nocturna', 'No pedir imagen en la forma típica', 'Pedir imagen y estudio si es bilateral, recurrente o progresiva', 'Revisar a las 2 o 3 semanas y a los 3 meses', 'Si no mejora a los 3 o 4 meses, replantear el diagnóstico']
    },
    {
      nombre: 'Polineuropatía desmielinizante crónica y neuropatía de fibra fina',
      color: '#6b4a8c',
      definicion: 'Dos entidades que comparten una característica: se diagnostican mal porque no encajan en el patrón habitual. La primera es tratable y se infradiagnostica o se sobrediagnostica según el contexto; la segunda cursa con electroneurograma NORMAL.',
      fisiopatologia: 'En la polineuropatía desmielinizante inflamatoria crónica, una respuesta inmunitaria dirigida contra componentes de la mielina periférica produce desmielinización segmentaria en raíces y troncos nerviosos, lo que enlentece o bloquea la conducción. Al afectar a raíces y troncos, la debilidad es PROXIMAL Y DISTAL y los reflejos desaparecen de forma difusa, a diferencia del patrón dependiente de la longitud. En la neuropatía de fibra fina se dañan las fibras A-delta y C, que son las que llevan dolor, temperatura y función autónoma; como el electroneurograma explora la fibra gruesa, sale NORMAL.',
      epidemiologia: 'La polineuropatía desmielinizante crónica es poco frecuente pero importante por ser tratable. Es objeto de SOBREDIAGNOSTICO: una parte de los pacientes etiquetados y tratados durante años no la tiene. La neuropatía de fibra fina es mucho más común de lo que sugiere su tasa de diagnóstico, y la diabetes y la prediabetes son sus causas más frecuentes.',
      factores_riesgo: ['Para la forma desmielinizante crónica: gammapatía monoclonal, infección por VIH, linfoma y enfermedad inflamatoria intestinal', 'Diabetes, que puede coexistir y complicar el diagnóstico', 'Para la fibra fina: diabetes y PREDIABETES', 'Síndrome de Sjogren', 'Amiloidosis, hereditaria y adquirida', 'Sarcoidosis', 'Enfermedad de Fabry', 'Infección por VIH y por hepatitis C', 'Celiaquia', 'Consumo excesivo de alcohol', 'Quimioterapia', 'Déficit de vitamina B12'],
      clinica: 'DESMIELINIZANTE CRÓNICA: debilidad simétrica PROXIMAL Y DISTAL que progresa durante más de 8 semanas, con arreflexia difusa y alteración sensitiva de fibra gruesa. Puede tener curso progresivo o en brotes. FIBRA FINA: dolor quemante en pies, alodinia, sensación de quemazón que empeora de noche, con fuerza y reflejos NORMALES y con frecuencia síntomas autónomos asociados (sequedad, alteración de la sudoración, molestias digestivas).',
      criterios_dx: 'La desmielinizante crónica exige criterios neurofisiologicos de desmielinización. La de fibra fina exige clínica compatible con electroneurograma normal, confirmada preferentemente con biopsia cutánea.',
      laboratorio: 'En la desmielinizante crónica: inmunofijación en suero (obligada, por la asociación con gammapatía monoclonal), anticuerpos antinodales y paranodales en casos seleccionados, y líquido cefalorraquídeo con disociación albuminocitologica. En la fibra fina: glucemia con SOBRECARGA ORAL, anticuerpos anti-Ro y anti-La, enzima convertidora, estudio de amiloidosis y de Fabry según contexto.',
      imagen: 'Resonancia de plexos y de raíces en la forma desmielinizante crónica, que puede mostrar engrosamiento y realce radicular cuando la neurofisiologia no es concluyente.',
      complementarios: 'ELECTRONEUROGRAMA, que es el eje del diagnóstico de la desmielinizante crónica y que en la fibra fina es NORMAL. BIOPSIA CUTÁNEA con densidad de fibras nerviosas intraepidérmicas en la pierna distal, que es la prueba de referencia para la fibra fina.',
      dx_diferencial: 'Para la desmielinizante crónica: síndrome de Guillain-Barré (que se define por progresión de menos de 4 semanas), neuropatía asociada a gammapatía monoclonal, neuropatía motora multifocal con bloqueos de conducción, neuropatía diabética, amiloidosis y las hereditarias, que pueden dar velocidades muy lentas y confundirse. Para la fibra fina: dolor de origen musculoesquelético, síndrome de dolor regional complejo, fibromialgia y enfermedad arterial periférica.',
      tx_medico: 'En la fibra fina, buscar y tratar la causa, sobre todo la prediabetes, con dieta, ejercicio y pérdida de peso. Manejo del dolor y educación sobre la evolución esperable.',
      tx_farmacologico: 'DESMIELINIZANTE CRÓNICA: corticoides, inmunoglobulinas intravenosas o plasmaféresis como opciones de primera línea, con eficacia comparable y elección según perfil del paciente. Es imprescindible REEVALUAR la respuesta de forma objetiva y retirar el tratamiento si no la hay, para no perpetuar una inmunoterapia costosa en alguien que no tiene la enfermedad. FIBRA FINA: tratamiento del dolor con gabapentinoides, duloxetina o amitriptilina, y tratamiento específico si se identifica una causa (por ejemplo, en la amiloidosis por transtiretina).',
      tx_intervencionista: 'No aplica de forma habitual.',
      criterios_uci: 'En la desmielinizante crónica con exacerbación grave y afectación respiratoria o bulbar, aunque es poco frecuente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Durante un ciclo de inmunoglobulinas, vigilar la sobrecarga de volumen, la cefalea, el riesgo trombótico y la función renal. Durante la plasmaféresis, el acceso vascular y las alteraciones electrolíticas.',
      seguimiento_ambulatorio: 'Medir la respuesta con escalas de fuerza y de discapacidad, no solo con la impresión del paciente. Intentar de forma periódica bajar o espaciar el tratamiento para comprobar que sigue siendo necesario.',
      pronostico: 'La desmielinizante crónica responde bien al tratamiento en la mayoría de los pacientes y ese es el motivo por el que no se puede pasar por alto, aunque muchos requieren tratamiento de mantenimiento prolongado. La fibra fina tiene curso variable, con dolor que puede ser muy limitante pero sin la discapacidad motora de otras neuropatías.',
      algoritmo: ['Ante debilidad PROXIMAL Y DISTAL con arreflexia, pensar en poliradiculoneuropatia', 'Comprobar el curso: más de 8 semanas apunta a la forma crónica', 'Pedir electroneurograma buscando criterios de DESMIELINIZACIÓN', 'Pedir inmunofijación en suero, que es obligada', 'Analizar el líquido cefalorraquídeo buscando disociación albuminocitologica', 'Iniciar corticoides, inmunoglobulinas o plasmaféresis', 'REEVALUAR la respuesta de forma objetiva y retirar si no la hay', 'Ante dolor quemante con electroneurograma NORMAL, pensar en fibra fina', 'Pedir sobrecarga oral de glucosa y estudio de Sjogren y amiloidosis', 'Confirmar con biopsia cutánea y tratar la causa y el dolor']
    },
    {
      nombre: 'Disautonomia',
      color: '#3d5a73',
      definicion: 'Disfunción del sistema nervioso autónomo, que puede afectar al control cardiovascular, digestivo, urinario, sudomotor y pupilar, y que abarca desde la hipotensión ortostática neurogénica hasta el síndrome de taquicardia postural y la disreflexia autonómica.',
      fisiopatologia: 'Al ponerse de pie, la gravedad desplaza sangre hacia las extremidades inferiores y el retorno venoso cae. En condiciones normales, los barorreceptores detectan la caída y activan el simpático, que aumenta la frecuencia cardiaca y produce vasoconstricción. Si la via aferente, central o eferente esta dañada, esa compensación no ocurre: la presión cae y la frecuencia cardiaca NO sube lo que debería. Ese es el sello de la hipotensión ortostática NEUROGÉNICA, y la razón de que el pulso informe más que la propia presión.',
      epidemiologia: 'La hipotensión ortostática es muy frecuente en el mayor y se asocia a caídas, ingresos y mortalidad. En una proporción importante de los casos la causa es FARMACOLÓGICA y por tanto corregible. La disautonomía diabética es frecuente en la diabetes de larga evolución y su presencia marca peor pronóstico cardiovascular.',
      factores_riesgo: ['Edad avanzada', 'Diabetes de larga evolución', 'Enfermedad de Parkinson y otras sinucleinopatias', 'Atrofia multisistémica y fallo autonómico puro', 'Amiloidosis', 'Insuficiencia renal crónica', 'FÁRMACOS: antihipertensivos, diuréticos, alfabloqueantes, antidepresivos tricíclicos, antipsicóticos, agonistas dopaminérgicos', 'Deshidratación y encamamiento prolongado', 'Insuficiencia suprarrenal', 'Lesión medular a nivel de T6 o superior', 'Neuropatía por VIH o por quimioterapia', 'Síndrome de Sjogren y otras causas de neuropatía de fibra fina'],
      clinica: 'CARDIOVASCULAR: mareo, visión borrosa o en túnel, dolor cervical y de hombros en percha al ponerse de pie, síncope, y de forma característica hipertensión EN DECÚBITO que convive con hipotensión de pie. DIGESTIVA: gastroparesia con saciedad precoz y vómitos, estreñimiento o diarrea nocturna. URINARIA: retención, vaciamiento incompleto e infecciones de repetición. SUDOMOTORA: anhidrosis distal con hiperhidrosis compensadora. Y disfunción eréctil, que en el varón diabético suele ser el primer síntoma autónomo.',
      criterios_dx: 'Hipotensión ortostática: caída de 20 mmHg o más en la sistólica, o de 10 mmHg o más en la diastólica, a los 3 minutos de bipedestación. El origen neurogenico se sospecha por la respuesta INSUFICIENTE de la frecuencia cardiaca. Ver la Figura 4 de Definición.',
      laboratorio: 'Hemograma para descartar anemia, función renal e iones, glucemia y hemoglobina glucosilada, cortisol basal si se sospecha insuficiencia suprarrenal, y estudio de amiloidosis o de Sjogren según el contexto.',
      imagen: 'Según la sospecha etiológica. La gammagrafía cardiaca con MIBG reducida apoya el fallo autonómico posganglionar de las sinucleinopatias.',
      complementarios: 'PRUEBA DE BIPEDESTACIÓN ACTIVA a pie de cama, midiendo presión y frecuencia en decúbito y a los 3 minutos, que es lo que más rinde y casi nunca se hace bien. Mesa basculante si la prueba de cama no es concluyente. Estudios autónomos formales (variabilidad de la frecuencia cardiaca, respuesta sudomotora) en centros especializados.',
      dx_diferencial: 'Síncope vasovagal, síncope cardiogénico (arritmia, estenosis aórtica, miocardiopatía), hipovolemia, anemia, insuficiencia suprarrenal, efecto farmacológico, desacondicionamiento físico y síndrome de taquicardia postural, que es una entidad distinta y no cursa con hipotensión ortostática.',
      tx_medico: 'PRIMERO, LO NO FARMACOLÓGICO, que es lo que más rinde: revisar y retirar los fármacos implicados, aumentar la ingesta de sal y de agua, medias de compresión hasta la cintura, ELEVAR EL CABECERO de la cama por la noche (que reduce la natriuresis nocturna y mejora la hipotensión de la mañana), levantarse en dos tiempos, evitar comidas copiosas, alcohol y calor, y maniobras de contrapresion como cruzar las piernas o tensar los músculos.',
      tx_farmacologico: 'Si las medidas no bastan: MIDODRINA, FLUDROCORTISONA o droxidopa. Hay que vigilar la hipertensión en decúbito, que es el efecto adverso limitante, y por eso no se administran en las horas previas a acostarse. En el síndrome de taquicardia postural, betabloqueantes a dosis bajas, ivabradina o piridostigmina, siempre junto con el ejercicio progresivo, que es la base del tratamiento.',
      tx_intervencionista: 'No aplica de forma habitual.',
      criterios_uci: 'DISREFLEXIA AUTONÓMICA grave con crisis hipertensiva y riesgo de hemorragia cerebral, y las complicaciones del síncope.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente con lesión medular a nivel de T6 o superior, la DISREFLEXIA AUTONÓMICA es una urgencia: cefalea intensa, hipertensión, sudoración por encima de la lesión y bradicardia. Se maneja SENTANDO al paciente, aflojando ropa y dispositivos, y buscando el desencadenante por debajo de la lesión, que casi siempre es una vejiga distendida o un fecaloma. El antihipertensivo de acción corta va DESPUÉS, no antes.',
      seguimiento_ambulatorio: 'Medir la presión arterial de pie en cada revisión, no solo sentado. Revisar la medicación de forma periódica. Educar al paciente y a la familia sobre las medidas posturales y sobre el riesgo de caídas.',
      pronostico: 'Depende de la causa. La hipotensión ortostática farmacológica se corrige al retirar el fármaco. La neurogénica de las sinucleinopatias es progresiva y se maneja de forma sintomática. En cualquier caso, es un marcador de riesgo de caídas, de fracturas y de mortalidad que merece atención activa.',
      algoritmo: ['Medir la presión arterial en decúbito y a los 3 MINUTOS de pie', 'Medir también la FRECUENCIA CARDIACA en ambas posiciones', 'Confirmar la caída de 20 sistólica o de 10 diastólica', 'Mirar el pulso: si no sube, sospechar origen NEUROGENICO', 'Si sube mucho, buscar hipovolemia, anemia o fármacos', 'REVISAR Y RETIRAR los fármacos implicados antes de añadir ninguno', 'Aplicar medidas no farmacológicas: sal, agua, medias, cabecero elevado', 'Añadir midodrina o fludrocortisona si no basta, vigilando el decúbito', 'Ante taquicardia postural sin hipotensión, pensar en el síndrome específico', 'En lesión medular alta con crisis hipertensiva, sentar y buscar el desencadenante']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En neuropatía periférica se pierde tiempo pidiendo analíticas enormes antes de haber definido el patrón, y se pierden nervios cuando no se reconoce la única presentación urgente. Y hay dos errores concretos que dejan secuela: no proteger el ojo en una parálisis facial y no mirar la frente antes de etiquetarla.',
    parametros: ['Definir el PATRÓN antes de pedir ninguna prueba etiológica', 'Ante afectación asimétrica y sucesiva, pensar en VASCULITIS y actuar sin demora', 'Pedir las tres pruebas de alto rendimiento: glucemia, B12 con metilmalónico e inmunofijación', 'Añadir sobrecarga oral de glucosa, que detecta la prediabetes', 'No descartar el déficit de B12 por un hemograma normal', 'Revisar fármacos y tóxicos, incluido el óxido nitroso inhalado', 'En la parálisis facial, MIRAR LA FRENTE antes de nada', 'Dar corticoide en las primeras 72 horas y PROTEGER EL OJO', 'Estudiar toda parálisis facial bilateral, recurrente o de instauración lenta', 'Ante dolor quemante con electroneurograma normal, pensar en fibra fina', 'Medir la presión arterial DE PIE y mirar también el pulso', 'Ante crisis hipertensiva en lesión medular alta, sentar al paciente y buscar el desencadenante'],
    criterios_uci_general: 'La neuropatía crónica no ingresa en cuidados intensivos. Si lo hacen: la poliradiculoneuropatia aguda con afectación respiratoria o bulbar, que se maneja como síndrome de Guillain-Barré; la vasculitis sistémica grave con afectación de otros órganos; y la disreflexia autonómica con crisis hipertensiva y riesgo de hemorragia cerebral.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma habitual. La excepción histórica es la amiloidosis hereditaria por transtiretina, en la que el trasplante hepático fue una opción antes de la llegada de los tratamientos específicos actuales.',
    prevencion: 'Primaria: control glucémico, que en la diabetes tipo 1 previene la neuropatía de forma clara; moderacion del alcohol; prevención de déficits nutricionales, con especial atención tras cirugía bariátrica; suplementación con piridoxina en el tratamiento con isoniazida; y protección postural en el paciente encamado o anestesiado para evitar atrapamientos del cubital y del peroneo. Secundaria: cribado anual del pie con monofilamento en el diabético, cuyo objetivo no es diagnosticar la neuropatía sino identificar el pie EN RIESGO de úlcera, y medición periódica de la presión arterial de pie en el paciente mayor o polimedicado. Terciaria: cuidado del pie insensible, prevención de caídas, tratamiento del dolor neuropático y revisión periódica de la medicación.'
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
  'Enfoque de la neuropatía: el patrón antes que la causa': { definicion: [1, 2, 14], criterios_dx: [1, 2, 14], laboratorio: [1, 2, 14], tx_farmacologico: [1, 2, 14] },
  'Polineuropatía distal simétrica': { definicion: [1, 9, 10], criterios_dx: [1, 9, 10], laboratorio: [1, 9, 10], tx_farmacologico: [1, 9, 10] },
  'Mononeuropatias y mononeuritis múltiple': { definicion: [11, 15], criterios_dx: [11, 15], laboratorio: [11, 15], tx_farmacologico: [11, 15] },
  'Parálisis facial periférica': { definicion: [3, 4], criterios_dx: [3, 4], laboratorio: [3, 4], tx_farmacologico: [3, 4] },
  'Polineuropatía desmielinizante crónica y neuropatía de fibra fina': { definicion: [5, 12], criterios_dx: [5, 12], laboratorio: [5, 12], tx_farmacologico: [5, 12] },
  'Disautonomia': { definicion: [6, 7, 8, 13], criterios_dx: [6, 7, 8, 13], laboratorio: [6, 7, 8, 13], tx_farmacologico: [6, 7, 8, 13] }
};
export const estigmasTitulo = 'Signos y pistas que orientan ante una neuropatía';
export const estigmas = [
  { s: 'Acorchamiento en calcetín que asciende', p: 'Patrón dependiente de la longitud', photo: null, desc: 'Empieza en los dedos de los pies y sube de forma simétrica; las manos no se afectan hasta que la alteración llega a las rodillas. Es el patrón más frecuente y apunta a causas metabólicas, tóxicas y carenciales.' },
  { s: 'Déficits asimétricos que se van sumando', p: 'Mononeuritis múltiple', photo: null, desc: 'Varios nervios afectados de forma sucesiva, cada uno en su territorio, a menudo con dolor y con síntomas sistémicos. Es una VASCULITIS hasta que se demuestre lo contrario y la única presentación neuropática que urge de verdad.' },
  { s: 'Pies cavos y dedos en martillo', p: 'Neuropatía hereditaria', photo: null, desc: 'La deformidad del pie indica que el proceso lleva años, desde el desarrollo. Junto con un antecedente familiar, orienta a una neuropatía hereditaria y ahorra un estudio etiológico largo e inútil.' },
  { s: 'Parestesias nocturnas en los tres primeros dedos', p: 'Túnel carpiano', photo: null, desc: 'Despiertan al paciente y se alivian al sacudir la mano. Es la mononeuropatia más frecuente. En casos de larga evolución aparece atrofia de la eminencia tenar, que ya indica pérdida axonal y peor recuperación.' },
  { s: 'Pie caído con imposibilidad de elevar el pie', p: 'Peroneo en la cabeza del perone', photo: null, desc: 'Suele deberse a compresión externa en un paciente encamado, tras una pérdida de peso rápida o por cruzar las piernas de forma mantenida. Su prevención es puramente postural y se olvida con frecuencia en planta.' },
  { s: 'Dolor quemante con exploración y estudio normales', p: 'Fibra fina', photo: null, desc: 'El electroneurograma explora la fibra gruesa y por eso sale NORMAL. Hay que pedir sobrecarga oral de glucosa y, si hace falta, biopsia cutánea con densidad de fibras intraepidérmicas.' },
  { s: 'Debilidad proximal Y distal con arreflexia', p: 'Poliradiculoneuropatia', photo: null, desc: 'Rompe el patrón dependiente de la longitud y apunta a afectación de raíces. Si progresa en menos de 4 semanas es un síndrome de Guillain-Barré; si lleva más de 8 semanas, una forma inflamatoria crónica, que es tratable.' },
  { s: 'No arruga la frente', p: 'Parálisis facial PERIFÉRICA', photo: null, desc: 'La frente recibe inervación de los dos hemisferios, de modo que una lesión central la respeta. Que la frente este afectada es lo que confirma que la lesión es periférica, y esa comprobacion de segundos evita confundirla con un ictus.' },
  { s: 'Vesiculas en el pabellon auricular', p: 'Síndrome de Ramsay Hunt', photo: null, desc: 'Reactivación del virus varicela-zóster en el ganglio geniculado. Recupera peor que la parálisis de Bell y aquí el antiviral si esta claramente indicado junto con el corticoide. Hay que mirar el conducto, no solo el pabellon.' },
  { s: 'Parálisis facial bilateral', p: 'Nunca es una parálisis de Bell', photo: null, desc: 'Obliga a estudiar: síndrome de Guillain-Barré, enfermedad de Lyme, sarcoidosis, VIH y linfoma son las causas a descartar. La forma idiopática bilateral simultánea es excepcional.' },
  { s: 'Marea al levantarse y el pulso no sube', p: 'Hipotensión ortostática neurogénica', photo: null, desc: 'Si la presión cae y la frecuencia cardiaca no aumenta, el arco reflejo simpático esta dañado. Si el pulso sube mucho, el reflejo funciona y hay que buscar hipovolemia, anemia o un fármaco.' },
  { s: 'Hipertensión en decúbito con hipotensión de pie', p: 'Fallo autonómico', photo: null, desc: 'Es una combinación característica y un problema terapéutico real: los fármacos que corrigen la hipotensión de pie empeoran la hipertensión acostado. Por eso se elevan el cabecero y no se administran antes de acostarse.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Patrón de la neuropatía (calculadora disponible)': [1, 14],
  'Estudio etiológico mínimo (calculadora disponible)': [1, 2],
  'Escala de House-Brackmann (calculadora disponible)': [4],
  'Hipotensión ortostática y su origen (calculadora disponible)': [6, 7],
  'Axonal frente a desmielinizante': [5],
  'Criterios de síndrome de taquicardia postural': [8]
};
export const escalaCalc = {
  'Patrón de la neuropatía (calculadora disponible)': 'patron-neuropatia',
  'Estudio etiológico mínimo (calculadora disponible)': 'estudio-neuropatia',
  'Escala de House-Brackmann (calculadora disponible)': 'house-brackmann',
  'Hipotensión ortostática y su origen (calculadora disponible)': 'ortostatismo'
};
export const compGroups = [
  { name: 'El enfoque y lo más frecuente', items: ['Enfoque de la neuropatía: el patrón antes que la causa', 'Polineuropatía distal simétrica'] },
  { name: 'Lo focal y lo urgente', items: ['Mononeuropatias y mononeuritis múltiple', 'Parálisis facial periférica'] },
  { name: 'Lo que se diagnostica mal', items: ['Polineuropatía desmielinizante crónica y neuropatía de fibra fina', 'Disautonomia'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el método y el patrón más frecuente: definir la distribución antes de pedir nada, y el estudio corto de la polineuropatía distal simétrica. Las dos siguientes son lo focal: los atrapamientos, que son banales, y la mononeuritis múltiple, que es la única presentación urgente del tema, junto con la parálisis facial, donde dos gestos de segundos evitan confundirla con un ictus y evitan la única secuela grave. Las dos últimas son las entidades que se diagnostican peor: la desmielinizante crónica, que es tratable y se sobrediagnostica a la vez, y la disautonomía, donde el dato esta en el pulso.';
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
  root: { title: 'NEUROPATÍA PERIFÉRICA', color: '#2e6b6b', target: 'definicion' },
  branches: [
    { title: 'QUE PATRÓN', sub: 'Antes que la causa', color: '#2e6b6b', target: 'clasificacion', leaves: [
      { title: 'Simétrica distal', sub: 'Metabólico, tóxico, carencial', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Un solo nervio', sub: 'Atrapamiento', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Asimétrica y sucesiva', sub: 'VASCULITIS: urgente', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Proximal y distal', sub: 'Poliradiculoneuropatia', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'QUE PEDIR', sub: 'Tres pruebas, no un panel', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Glucemia con sobrecarga', sub: 'Detecta la prediabetes', color: '#3f6b52', target: 'diagnostico' },
      { title: 'B12 con metilmalónico', sub: 'El hemograma no descarta', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Inmunofijación en suero', sub: 'La que más se olvida', color: '#6b4a8c', target: 'diagnostico' },
      { title: 'Fármacos y tóxicos', sub: 'Preguntar por óxido nitroso', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'LO FOCAL', sub: 'Cara y sistema autónomo', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Mirar la frente', sub: 'Central respeta, periférica no', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Corticoide en 72 horas', sub: 'Y proteger el ojo', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Presión de pie', sub: 'A los 3 minutos', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Mirar el pulso', sub: 'Separa neurogénica de la otra', color: '#6b4a8c', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 4, 6], imagen: [4, 11] };
export const clasificacionCite = [1, 4, 6, 8];
export const seguimientoCite = [1, 3, 9];
