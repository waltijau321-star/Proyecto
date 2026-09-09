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
  titulo: 'Neuropatias Perifericas y Disautonomia',
  subtitulo: 'Modulo 62 · Medicina Interna',
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
    <strong style="color:#2e6b6b;">Ante una neuropatia, la primera pregunta no es la causa sino el PATRON.</strong> <span style="color:var(--ink-dim);">Cada patron abre un diferencial distinto y una urgencia distinta, y trabajar sin definirlo antes lleva a pedir analiticas enormes que no responden a nada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b6b;">SIMETRICA<br>distal</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Empieza en los <strong style="color:var(--ink);">PIES</strong> y asciende en calcetin; las manos se afectan cuando la alteracion llega a las rodillas. Es <strong>dependiente de la longitud</strong> del axon. Diferencial: diabetes, alcohol, deficit de B12, uremia, farmacos, hipotiroidismo, paraproteinemia y las hereditarias.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">MONONEUROPATIA<br>un solo nervio</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Deficit en el territorio de un nervio concreto. Casi siempre por <strong style="color:var(--ink);">ATRAPAMIENTO o compresion</strong>: mediano en el tunel carpiano, cubital en el codo, radial en la canaladura humeral, peroneo en la cabeza del perone, facial en su recorrido.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">MONONEURITIS<br>MULTIPLE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Varios nervios afectados de forma <strong style="color:var(--ink);">sucesiva y ASIMETRICA</strong>, cada uno en su territorio. <strong style="color:#8c3a34;">Es una VASCULITIS hasta que se demuestre lo contrario</strong> y una urgencia diagnostica. Tambien: diabetes, lepra, VIH, sarcoidosis, crioglobulinemia y amiloidosis.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">PROXIMAL<br>y distal</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad que afecta a la vez a lo proximal y a lo distal, con <strong style="color:var(--ink);">ARREFLEXIA</strong> difusa. Es una <strong>poliradiculoneuropatia</strong>: si progresa en dias o pocas semanas, sindrome de Guillain-Barre; si lleva mas de 8 semanas, forma cronica.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Y una segunda pregunta que responde el electroneurograma: axonal o desmielinizante.</strong> <strong>AXONAL</strong> (amplitudes bajas con velocidades casi normales) apunta a lo toxico, lo metabolico y lo carencial, que es la inmensa mayoria. <strong>DESMIELINIZANTE</strong> (velocidades lentas, latencias alargadas, bloqueos de conduccion) apunta a un grupo mucho mas peque&#241;o pero mucho mas TRATABLE: inflamatorias adquiridas y hereditarias. Esa distincion cambia el pronostico y el tratamiento.
  </div>
</div>`;

const estudioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">En la polineuropatia distal simetrica, TRES pruebas concentran casi todo el rendimiento.</strong> <span style="color:var(--ink-dim);">Pedir un panel enorme de entrada encuentra hallazgos irrelevantes y no aumenta el diagnostico. Estas tres si.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">GLUCEMIA</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Glucemia en ayunas y hemoglobina glucosilada. La <strong style="color:var(--ink);">sobrecarga oral de glucosa</strong> a&#241;ade rendimiento, porque detecta la PREDIABETES, que se asocia a neuropatia y que las otras dos pruebas pueden pasar por alto.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">VITAMINA B12</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Con <strong style="color:var(--ink);">ACIDO METILMALONICO</strong> si el valor queda en zona baja-normal, que es donde estan la mayoria de los deficits funcionales. Un hemograma normal NO lo descarta.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">INMUNOFIJACION</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Electroforesis con <strong style="color:var(--ink);">inmunofijacion</strong> en suero, que es mas sensible que la electroforesis sola. Busca una gammapatia monoclonal, que puede ser la causa y que abre un estudio hematologico propio.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Se amplia segun las pistas.</strong> Funcion tiroidea y renal, serologia de VIH y de sifilis, cobre y ceruloplasmina si hay mielopatia asociada o cirugia bariatrica previa, y estudio de celiaquia. Ante antecedente familiar, pies cavos o dedos en martillo, <strong>estudio genetico</strong> de neuropatia hereditaria, que evita muchas pruebas inutiles.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Y siempre, la lista de FARMACOS y TOXICOS.</strong> Quimioterapicos (platinos, taxanos, vincristina, bortezomib), amiodarona, metronidazol y nitrofurantoina prolongados, linezolid, isoniazida sin piridoxina, fenitoina, alcohol, plomo, arsenico y el <strong>oxido nitroso</strong> inhalado con fines recreativos, que produce un cuadro por deficit funcional de B12 en pacientes jovenes.
    </div>
  </div>
</div>`;

const facialHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #2e6b6b;border-radius:8px;padding:6px 8px;background:#2e6b6b08;">
      <div style="font-weight:700;color:#2e6b6b;text-align:center;margin-bottom:4px;">PERIFERICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Afecta a <strong style="color:var(--ink);">TODA la hemicara, INCLUIDA la frente</strong>: no arruga la frente ni cierra bien el ojo de ese lado. Puede a&#241;adir hiperacusia, alteracion del gusto en los dos tercios anteriores de la lengua y sequedad ocular.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">CENTRAL</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">RESPETA LA FRENTE</strong>, porque su musculatura recibe inervacion de los dos hemisferios. Solo cae la mitad inferior de la cara. <strong style="color:#8c3a34;">Es un ICTUS hasta que se demuestre lo contrario</strong> y se maneja como tal, con neuroimagen urgente.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LO QUE HAY QUE HACER EN LAS PRIMERAS 72 HORAS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. CORTICOIDE ORAL</strong> cuanto antes, idealmente dentro de las primeras 72 horas: es lo que mejora la probabilidad de recuperacion completa.<br><strong style="color:var(--ink);">2. PROTECCION OCULAR</strong>, que es lo que evita la unica secuela grave: lagrimas artificiales de dia, pomada y OCLUSION por la noche. Si no cierra el ojo, la cornea se ulcera.<br><strong style="color:var(--ink);">3. Buscar VESICULAS</strong> en el pabellon auricular y en el conducto: definen el sindrome de Ramsay Hunt, que tiene peor pronostico y si lleva antiviral.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Cuando NO es una paralisis de Bell y hay que estudiar.</strong> Si es <strong>BILATERAL</strong> (Guillain-Barre, Lyme, sarcoidosis, VIH), si es <strong>RECURRENTE</strong> o siempre del mismo lado, si progresa en mas de 3 semanas en lugar de instaurarse en horas, si hay otros pares craneales afectados, si hay masa parotidea o si no ha empezado a mejorar a los 3 o 4 meses. En esos casos, neuroimagen y estudio dirigido.
  </div>
</div>`;

const ortostatismoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a8c;border-radius:8px;padding:5px 9px;background:#6b4a8c12;margin-bottom:6px;">
    <strong style="color:#6b4a8c;">La hipotension ortostatica se define por una caida de 20 mmHg en la sistolica o de 10 en la diastolica a los 3 minutos de ponerse de pie.</strong> <span style="color:var(--ink-dim);">Pero el dato que de verdad orienta no es la presion: es lo que hace el PULSO.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">NEUROGENICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La presion cae y la frecuencia cardiaca <strong style="color:var(--ink);">NO sube lo que deberia</strong>, porque el arco reflejo simpatico esta da&#241;ado. Apunta a fallo autonomico: enfermedad de Parkinson, atrofia multisistemica, fallo autonomico puro, neuropatia diabetica o amiloidotica.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">NO NEUROGENICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La presion cae y la frecuencia cardiaca <strong style="color:var(--ink);">SI sube de forma marcada</strong>: el reflejo funciona y esta compensando. Apunta a hipovolemia, anemia, sangrado, insuficiencia suprarrenal o, muy a menudo, a un <strong>FARMACO</strong>.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Y una entidad distinta: el sindrome de taquicardia postural.</strong> Aumento de la frecuencia cardiaca de <strong>30 latidos o mas</strong> en los 10 primeros minutos de bipedestacion, <strong style="color:var(--ink);">SIN</strong> hipotension ortostatica, con sintomas persistentes. Afecta sobre todo a mujeres jovenes y se trata con sal, liquidos, medias de compresion y ejercicio progresivo, no con reposo.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">La urgencia autonomica que hay que reconocer.</strong> En una lesion medular a nivel de T6 o por encima, un estimulo por debajo de la lesion (vejiga llena, fecaloma, ulcera) desencadena una <strong>DISREFLEXIA AUTONOMICA</strong>: crisis hipertensiva con cefalea intensa, sudoracion y bradicardia. Se trata sentando al paciente, buscando y retirando el desencadenante, y solo despues con antihipertensivo de accion corta.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El nervio periferico da un numero limitado de sintomas (perdida de sensibilidad, dolor, debilidad, arreflexia y disfuncion autonoma) para un numero enorme de causas. Por eso el trabajo clinico no consiste en pedir una analitica larga y esperar, sino en <strong>definir primero el patron</strong>, que es lo que reduce el diferencial a algo manejable y decide la urgencia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: el patron manda.</strong></p>
<p style="margin:0 0 12px;">Cuatro patrones y cuatro diferenciales distintos. La <strong>polineuropatia distal simetrica</strong>, que empieza en los pies y es dependiente de la longitud del axon, apunta a lo metabolico, lo toxico y lo carencial. La <strong>mononeuropatia</strong> apunta a atrapamiento. La <strong>mononeuritis multiple</strong>, asimetrica y sucesiva, es una <strong>vasculitis hasta que se demuestre lo contrario</strong> y es la unica de las cuatro que urge. Y la afectacion <strong>proximal y distal con arreflexia</strong> es una poliradiculoneuropatia. A esa pregunta se a&#241;ade una segunda, que responde el electroneurograma: axonal o desmielinizante.</p>
${figBlock('Figura 1', 'Los cuatro patrones y lo que abre cada uno', patronHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el estudio de la polineuropatia distal simetrica.</strong></p>
<p style="margin:0 0 12px;">Es el patron mas frecuente con diferencia, y su estudio tiene una respuesta corta: <strong>glucemia</strong> (mejor con sobrecarga oral, que detecta la prediabetes), <strong>vitamina B12</strong> con acido metilmalonico, e <strong>inmunofijacion en suero</strong>. Esas tres concentran casi todo el rendimiento. Lo demas se pide segun las pistas, y hay dos que se olvidan con frecuencia: la lista completa de farmacos y toxicos, y el antecedente familiar con pies cavos, que apunta a una neuropatia hereditaria y ahorra muchas pruebas.</p>
${figBlock('Figura 2', 'Las tres pruebas de mayor rendimiento y cuando ampliar', estudioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la paralisis facial, que se decide en la frente.</strong></p>
<p style="margin:0 0 12px;">La distincion entre periferica y central se hace mirando si el paciente <strong>arruga la frente</strong>: la periferica afecta a toda la hemicara y la central respeta la frente, porque su musculatura recibe inervacion de los dos hemisferios. Una paralisis facial central es un ictus hasta que se demuestre lo contrario. En la periferica, lo que cambia el pronostico son el <strong>corticoide en las primeras 72 horas</strong> y la <strong>proteccion ocular</strong>, que es lo que evita la unica secuela realmente grave.</p>
${figBlock('Figura 3', 'Periferica o central, y las tres cosas de las primeras 72 horas', facialHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: el sistema autonomo, y el dato esta en el pulso.</strong></p>
<p style="margin:0 0 12px;">La hipotension ortostatica se define por una caida de 20 mmHg en la sistolica o de 10 en la diastolica a los 3 minutos de bipedestacion. Pero lo que separa la forma <strong>neurogenica</strong> de la que no lo es no es la presion sino la <strong>respuesta del pulso</strong>: si la frecuencia cardiaca no sube lo que deberia, el arco reflejo esta da&#241;ado; si sube mucho, el reflejo funciona y lo que hay detras es hipovolemia o un farmaco.</p>
${figBlock('Figura 4', 'Hipotension ortostatica: lo que dice el pulso', ortostatismoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No pedir un panel enorme de anticuerpos antes de haber definido el patron. No pasar por alto una mononeuritis multiple, que es la unica presentacion urgente. No olvidar la lista de farmacos y toxicos, incluido el oxido nitroso inhalado en pacientes jovenes. No descartar un deficit de B12 porque el hemograma sea normal. No confundir una paralisis facial central con una de Bell: hay que mirar la frente. No dar de alta una paralisis facial periferica sin proteccion ocular. No tratar como idiopatica una paralisis facial bilateral, recurrente o de instauracion lenta. No atribuir un mareo ortostatico al envejecimiento sin medir la presion de pie y sin mirar el pulso. Y no dar un antihipertensivo en una disreflexia autonomica antes de haber buscado y retirado el desencadenante.</p>`;

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
      tituloA: 'Sintomas del nervio periferico',
      tituloB: 'Sintomas autonomos',
      compensada: 'SENSITIVOS POSITIVOS: hormigueo, quemazon, calambres, dolor lancinante, alodinia (el roce de la sabana duele). SENSITIVOS NEGATIVOS: acorchamiento, sensacion de andar sobre algodon, inestabilidad al caminar en la oscuridad. MOTORES: debilidad distal con dificultad para levantar el pie, tropiezos, atrofia de la musculatura intrinseca de la mano. La distribucion es lo que hay que precisar: en calcetin y simetrica, o en el territorio de un nervio concreto, o parcheada y asimetrica.',
      descompensada: 'Mareo o vision borrosa al levantarse, sincope, intolerancia al ejercicio, hipohidrosis o hiperhidrosis, sequedad de boca y de ojos, estre&#241;imiento o diarrea nocturna, gastroparesia con saciedad precoz y vomitos, retencion urinaria o incontinencia, disfuncion erectil (que en el varon diabetico es a menudo el primer sintoma autonomo). Y dos situaciones de alarma: la ausencia de variabilidad de la frecuencia cardiaca en el diabetico, que se asocia a mayor mortalidad y a isquemia silente, y la DISREFLEXIA AUTONOMICA en la lesion medular alta.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayunas, hemoglobina glucosilada y sobrecarga oral de glucosa', utilidad: 'Es la primera de las tres pruebas de mayor rendimiento. La SOBRECARGA ORAL a&#241;ade valor porque detecta la prediabetes, que se asocia a polineuropatia y sobre todo a neuropatia de fibra fina, y que puede pasar desapercibida con la glucemia y la hemoglobina glucosilada normales.' },
      { prueba: 'Vitamina B12 con acido metilmalonico', utilidad: 'Segunda prueba de alto rendimiento. El deficit produce neuropatia con o sin anemia y con o sin macrocitosis, de modo que un hemograma normal no lo descarta. Si la B12 esta en zona baja-normal, el acido metilmalonico elevado confirma el deficit funcional, que es lo que importa.' },
      { prueba: 'Electroforesis con INMUNOFIJACION en suero', utilidad: 'Tercera prueba de alto rendimiento y mas sensible que la electroforesis sola. Busca una gammapatia monoclonal, que puede ser la causa de la neuropatia y que obliga a un estudio hematologico propio. Su omision es un fallo frecuente del estudio etiologico.' },
      { prueba: 'Estudio de vasculitis', utilidad: 'Ante MONONEURITIS MULTIPLE, que es el patron urgente: velocidad de sedimentacion, proteina C reactiva, ANCA, factor reumatoide, crioglobulinas, complemento, anticuerpos antinucleares, serologias de hepatitis B y C, y VIH. El retraso aqui cuesta axones que no se recuperan.' },
      { prueba: 'Funcion tiroidea y renal', utilidad: 'El hipotiroidismo y la uremia son causas reconocidas y corregibles. Se piden en la ampliacion del estudio, no en el primer escalon, salvo que la clinica las sugiera.' },
      { prueba: 'Cobre, ceruloplasmina y vitamina E', utilidad: 'Ante mielopatia asociada a la neuropatia, antecedente de CIRUGIA BARIATRICA, malabsorcion o suplementacion cronica con zinc, que induce deficit de cobre. Es una causa tratable que se pasa por alto con facilidad y que puede dejar secuelas si se detecta tarde.' },
      { prueba: 'Revision de FARMACOS y de toxicos', utilidad: 'Quimioterapicos (platinos, taxanos, vincristina, bortezomib), amiodarona, metronidazol y nitrofurantoina prolongados, linezolid, isoniazida sin piridoxina, fenitoina, alcohol, plomo y arsenico. Y el OXIDO NITROSO inhalado con fines recreativos, que produce un cuadro por deficit funcional de B12 en pacientes jovenes y que solo se detecta si se pregunta.' },
      { prueba: 'Liquido cefalorraquideo', utilidad: 'Ante sospecha de poliradiculoneuropatia inflamatoria: la disociacion albuminocitologica (proteinas elevadas con celularidad normal) apoya el diagnostico. Una pleocitosis marcada obliga a pensar en infeccion, linfoma o sarcoidosis, no en una forma inflamatoria clasica.' }
    ],
    no_invasivos: [
      { metodo: 'Definicion del patron (calculadora disponible)', interpretacion: 'Clasifica el cuadro en polineuropatia distal simetrica, mononeuropatia, mononeuritis multiple o poliradiculoneuropatia, y abre el diferencial y la urgencia correspondientes.', cutoff: 'Mononeuritis multiple: vasculitis hasta que se demuestre lo contrario, y estudio urgente' },
      { metodo: 'Estudio etiologico minimo (calculadora disponible)', interpretacion: 'Comprueba las tres pruebas de mayor rendimiento y recuerda las ampliaciones dirigidas segun las pistas clinicas.', cutoff: 'Glucemia, vitamina B12 con metilmalonico e inmunofijacion en suero' },
      { metodo: 'Escala de House-Brackmann (calculadora disponible)', interpretacion: 'Gradua la paralisis facial de I (normal) a VI (paralisis completa) y acompa&#241;a la decision sobre corticoide, antiviral y proteccion ocular.', cutoff: 'Corticoide oral dentro de las primeras 72 horas; proteccion ocular si no hay cierre completo' },
      { metodo: 'Prueba de bipedestacion activa (calculadora disponible)', interpretacion: 'Mide presion arterial y frecuencia cardiaca en decubito y a los 3 minutos de pie. Lo que separa la forma neurogenica de la que no lo es es la RESPUESTA DEL PULSO.', cutoff: 'Caida de 20 mmHg sistolica o de 10 diastolica. Cociente de aumento de la frecuencia por cada mmHg de caida menor de 0.5: neurogenica' },
      { metodo: 'Electroneurograma y electromiograma', interpretacion: 'Separan AXONAL (amplitudes bajas con velocidades casi normales) de DESMIELINIZANTE (velocidades lentas, latencias alargadas, bloqueos de conduccion), definen la distribucion y detectan la afectacion subclinica.', cutoff: 'Es NORMAL en la neuropatia de fibra fina, porque explora la fibra gruesa' },
      { metodo: 'Cribado del pie diabetico', interpretacion: 'Monofilamento de 10 g mas una segunda prueba: diapason de 128 Hz, sensibilidad al pinchazo o reflejo aquileo. Su objetivo no es diagnosticar la neuropatia sino identificar el pie EN RIESGO de ulcera.', cutoff: 'Perdida de la sensibilidad protectora: cribado anual y educacion sobre cuidado del pie' },
      { metodo: 'Biopsia cutanea con densidad de fibras intraepidermicas', interpretacion: 'Prueba de referencia para la neuropatia de FIBRA FINA en el paciente con dolor quemante y electroneurograma normal. Se toma en la pierna distal.', cutoff: 'Densidad reducida respecto a los valores de referencia por edad y sexo' }
    ],
    imagen: [
      { modalidad: 'Ecografia de nervio periferico', hallazgos: 'Cada vez mas usada. Muestra el aumento del area de seccion en los puntos de atrapamiento (mediano en el carpo, cubital en el codo) y ayuda a localizar la lesion. En las formas inflamatorias cronicas puede mostrar engrosamiento fascicular difuso.' },
      { modalidad: 'Resonancia de plexo o de raices', hallazgos: 'Ante sospecha de plexopatia, radiculopatia o infiltracion tumoral. El realce y el engrosamiento de las raices apoyan una poliradiculoneuropatia inflamatoria cuando el estudio neurofisiologico no es concluyente.' },
      { modalidad: 'Resonancia craneal y de pe&#241;asco', hallazgos: 'En la paralisis facial que NO se comporta como una paralisis de Bell: bilateral, recurrente, de instauracion lenta, con otros pares afectados o sin mejoria a los 3 o 4 meses. Busca lesion del angulo pontocerebeloso, del conducto auditivo interno o de la parotida.' },
      { modalidad: 'Biopsia de nervio sural', hallazgos: 'Reservada a la sospecha de VASCULITIS, amiloidosis o sarcoidosis cuando el diagnostico no se alcanza de otro modo. Es una prueba con secuelas sensitivas permanentes en el territorio biopsiado, de modo que solo se indica si el resultado va a cambiar el tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las neuropatias se clasifican por <strong>patron de distribucion</strong> (simetrica distal, mononeuropatia, mononeuritis multiple, poliradiculoneuropatia), por <strong>tipo de fibra</strong> afectada (gruesa, que da alteracion de la vibracion, la propiocepcion y los reflejos; fina, que da dolor y disfuncion autonoma con electroneurograma normal), por <strong>fisiopatologia</strong> (axonal frente a desmielinizante) y por <strong>curso temporal</strong> (agudo, subagudo o cronico). Responder a esas cuatro preguntas antes de pedir nada es lo que convierte un problema aparentemente inabarcable en un diferencial corto.`,
    escalas: [
      { nombre: 'Patron de la neuropatia (calculadora disponible)', componentes: 'Simetria, distribucion proximal o distal, numero de nervios afectados y forma de instauracion.', formula: 'Cuatro patrones: polineuropatia distal simetrica, mononeuropatia, mononeuritis multiple y poliradiculoneuropatia.', interpretacion: 'La polineuropatia distal simetrica apunta a lo metabolico, toxico y carencial. La mononeuropatia, a atrapamiento. La MONONEURITIS MULTIPLE es una vasculitis hasta que se demuestre lo contrario y es la unica urgente. La poliradiculoneuropatia se separa por el tiempo: aguda es Guillain-Barre, cronica es la forma inflamatoria cronica.' },
      { nombre: 'Estudio etiologico minimo (calculadora disponible)', componentes: 'Glucemia con sobrecarga oral, vitamina B12 con acido metilmalonico e inmunofijacion en suero, mas las ampliaciones dirigidas.', formula: 'Esas tres pruebas concentran el mayor rendimiento diagnostico en la polineuropatia distal simetrica.', interpretacion: 'Pedir un panel amplio de entrada encuentra hallazgos irrelevantes y no aumenta el rendimiento. Las ampliaciones se guian por las pistas: funcion tiroidea y renal, serologias, cobre, celiaquia y estudio genetico si hay antecedente familiar y pies cavos.' },
      { nombre: 'Escala de House-Brackmann (calculadora disponible)', componentes: 'Movilidad facial en reposo y con el movimiento, cierre ocular y presencia de sincinesias.', formula: 'De grado I (funcion normal) a grado VI (paralisis completa sin ningun movimiento).', interpretacion: 'Cuantifica la gravedad y permite seguir la recuperacion. Los grados altos y la ausencia de cierre ocular son los que obligan a extremar la proteccion corneal, que es lo que evita la unica secuela realmente grave.' },
      { nombre: 'Hipotension ortostatica y su origen (calculadora disponible)', componentes: 'Presion arterial y frecuencia cardiaca en decubito y a los 3 minutos de bipedestacion.', formula: 'Hipotension ortostatica: caida de 20 mmHg o mas en la sistolica, o de 10 mmHg o mas en la diastolica. El cociente entre el aumento de la frecuencia cardiaca y la caida de la sistolica separa el origen.', interpretacion: 'Un cociente por debajo de 0.5 latidos por cada mmHg de caida apunta a origen NEUROGENICO. Un aumento marcado de la frecuencia apunta a hipovolemia, anemia, insuficiencia suprarrenal o farmacos. El sindrome de taquicardia postural es otra entidad: aumento de 30 latidos o mas en 10 minutos SIN hipotension.' },
      { nombre: 'Axonal frente a desmielinizante', componentes: 'Amplitudes, velocidades de conduccion, latencias distales y presencia de bloqueos de conduccion en el electroneurograma.', formula: 'Axonal: amplitudes reducidas con velocidades relativamente conservadas. Desmielinizante: velocidades lentas, latencias alargadas, ondas F retrasadas y bloqueos de conduccion.', interpretacion: 'Es la distincion que mas cambia el manejo. Lo axonal corresponde a la gran mayoria y suele ser toxico, metabolico o carencial. Lo desmielinizante adquirido es mucho menos frecuente pero potencialmente TRATABLE con inmunoterapia, de modo que identificarlo tiene consecuencias inmediatas.' },
      { nombre: 'Criterios de sindrome de taquicardia postural', componentes: 'Aumento sostenido de la frecuencia cardiaca en bipedestacion, ausencia de hipotension ortostatica, duracion de los sintomas y exclusion de otras causas.', formula: 'Aumento de 30 latidos por minuto o mas (40 o mas en adolescentes) en los 10 primeros minutos de bipedestacion, sin caida tensional que cumpla criterio, con sintomas de al menos 3 meses.', interpretacion: 'Antes de etiquetarlo hay que descartar deshidratacion, anemia, hipertiroidismo, feocromocitoma, farmacos y desacondicionamiento. El tratamiento es sal, liquidos, medias de compresion y ejercicio PROGRESIVO, no reposo, que empeora el cuadro.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfoque de la neuropatia: el patron antes que la causa',
      color: '#2e6b6b',
      definicion: 'Metodo de aproximacion al paciente con sintomas de nervio periferico, basado en definir la distribucion, el tipo de fibra, la fisiopatologia y el curso temporal antes de solicitar ninguna prueba etiologica.',
      fisiopatologia: 'La razon de que el patron sea tan informativo es anatomica. Los procesos que afectan al metabolismo o a la nutricion del axon da&#241;an primero las fibras mas largas, porque son las que tienen mayor demanda de transporte axonal: de ahi el patron dependiente de la longitud, que empieza en los pies. Los procesos que ocluyen los vasos del nervio (los vasa nervorum) producen infartos en puntos aleatorios y dan un patron asimetrico y parcheado. Y los procesos que atacan la mielina o las raices afectan por igual a lo proximal y a lo distal y borran los reflejos de forma difusa.',
      epidemiologia: 'La polineuropatia es muy prevalente y aumenta con la edad, y la diabetes es su causa mas frecuente en los paises con alta prevalencia de la enfermedad. Una proporcion importante de los casos se queda sin causa identificada pese a un estudio correcto, y esa proporcion baja cuando se incluye la sobrecarga oral de glucosa.',
      factores_riesgo: ['Diabetes mellitus y prediabetes', 'Consumo excesivo de alcohol', 'Edad avanzada', 'Insuficiencia renal cronica', 'Quimioterapia previa', 'Deficit de vitamina B12', 'Hipotiroidismo', 'Gammapatia monoclonal', 'Infeccion por VIH', 'Antecedente familiar de neuropatia o de pies cavos', 'Cirugia bariatrica y malabsorcion', 'Exposicion a toxicos industriales'],
      clinica: 'Sintomas sensitivos positivos (hormigueo, quemazon, alodinia) y negativos (acorchamiento, inestabilidad), debilidad distal y arreflexia. Lo que hay que precisar en la consulta es la DISTRIBUCION, porque de ella sale todo lo demas.',
      criterios_dx: 'Clinicos y neurofisiologicos. Definir cuatro cosas: distribucion, tipo de fibra, axonal o desmielinizante, y curso temporal. Ver la Figura 1 de Definicion.',
      laboratorio: 'Las tres pruebas de mayor rendimiento en el patron distal simetrico: glucemia con sobrecarga oral, vitamina B12 con acido metilmalonico e inmunofijacion en suero. El resto, dirigido.',
      imagen: 'Ecografia de nervio en la sospecha de atrapamiento. Resonancia de plexo o de raices si el patron sugiere afectacion proximal.',
      complementarios: 'ELECTRONEUROGRAMA Y ELECTROMIOGRAMA, que confirman la neuropatia, definen su distribucion y separan lo axonal de lo desmielinizante. Recordar que son NORMALES en la neuropatia de fibra fina.',
      dx_diferencial: 'Mielopatia (que a&#241;ade nivel sensitivo, hiperreflexia y Babinski), radiculopatia, claudicacion neurogena por estenosis de canal, miopatia (debilidad proximal sin alteracion sensitiva), y enfermedad de motoneurona (debilidad con fasciculaciones y sin alteracion sensitiva).',
      tx_medico: 'Corregir la causa cuando se identifica, que es lo unico que modifica el curso. Cuidado del pie, prevencion de caidas y rehabilitacion. Educacion sobre la perdida de sensibilidad protectora.',
      tx_farmacologico: 'Tratamiento del dolor neuropatico cuando lo hay: gabapentina o pregabalina, duloxetina o amitriptilina como primera linea. Los opioides no son tratamiento de primera linea y su uso prolongado en dolor neuropatico cronico tiene mas riesgos que beneficios.',
      tx_intervencionista: 'Descompresion quirurgica en los atrapamientos que no responden al tratamiento conservador.',
      criterios_uci: 'No por la neuropatia cronica. Si en la forma aguda con afectacion respiratoria, que se maneja como sindrome de Guillain-Barre.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica, salvo en amiloidosis hereditaria por transtiretina, donde el trasplante hepatico fue una opcion antes de los tratamientos actuales.',
      seguimiento_hospitalario: 'En el paciente ingresado con neuropatia, prevencion de ulceras por presion en las zonas anestesicas y proteccion postural para evitar nuevos atrapamientos, sobre todo del cubital en el codo y del peroneo en la cabeza del perone.',
      seguimiento_ambulatorio: 'Reevaluacion del patron si el cuadro cambia: una polineuropatia que se vuelve asimetrica obliga a replantear el diagnostico y a descartar vasculitis.',
      pronostico: 'Depende de la causa y de si es axonal o desmielinizante. La regeneracion axonal es lenta y con frecuencia incompleta, mientras que la desmielinizacion puede revertir bien si se trata a tiempo, lo que refuerza la importancia de identificarla.',
      algoritmo: ['Precisar la DISTRIBUCION: simetrica distal, un nervio, parcheada o proximal y distal', 'Precisar el tipo de fibra: gruesa, fina o ambas', 'Precisar el curso: agudo, subagudo o cronico', 'Si es asimetrica y parcheada, pensar en VASCULITIS y actuar con urgencia', 'Pedir electroneurograma para separar axonal de desmielinizante', 'En el patron distal simetrico, pedir las tres pruebas de alto rendimiento', 'Revisar SIEMPRE farmacos, alcohol y toxicos', 'Preguntar por antecedentes familiares y mirar los pies', 'Ampliar el estudio solo segun las pistas obtenidas', 'Tratar el dolor neuropatico y proteger el pie insensible']
    },
    {
      nombre: 'Polineuropatia distal simetrica',
      color: '#3f6b52',
      definicion: 'Afectacion simetrica y dependiente de la longitud de los nervios perifericos, que comienza en los pies y asciende, y que constituye el patron mas frecuente de neuropatia.',
      fisiopatologia: 'Las fibras mas largas son las mas vulnerables porque dependen de un transporte axonal que recorre distancias enormes desde el cuerpo neuronal. Cualquier agresion metabolica, toxica o carencial compromete primero su extremo distal, y el da&#241;o progresa desde ahi hacia proximal. Por eso las manos no se afectan hasta que la alteracion de las piernas alcanza aproximadamente las rodillas, lo que da el patron clasico en calcetin y despues en guante. En la diabetes se suman la via del poliol, los productos de glicacion avanzada, el estres oxidativo y la isquemia de los vasa nervorum.',
      epidemiologia: 'La diabetes es la causa mas frecuente. Una proporcion importante de los pacientes con neuropatia distal simetrica y estudio negativo tiene en realidad prediabetes, que solo se detecta con sobrecarga oral de glucosa. Tras un estudio completo, una parte sigue siendo criptogenica.',
      factores_riesgo: ['Diabetes de larga evolucion y mal control glucemico', 'Prediabetes y sindrome metabolico', 'Consumo excesivo de alcohol', 'Deficit de vitamina B12', 'Insuficiencia renal cronica', 'Hipotiroidismo', 'Gammapatia monoclonal', 'Quimioterapia neurotoxica', 'Edad avanzada', 'Talla alta, por la mayor longitud axonal', 'Tabaquismo e hipertrigliceridemia en el diabetico', 'Cirugia bariatrica con malabsorcion'],
      clinica: 'Comienza por acorchamiento y hormigueo en los DEDOS DE LOS PIES, de forma simetrica, y asciende con el tiempo. Puede haber dolor quemante de predominio NOCTURNO. Despues aparecen perdida de la sensibilidad vibratoria, arreflexia aquilea, inestabilidad en la oscuridad y, en fases avanzadas, debilidad distal con dificultad para levantar el pie. La ausencia de dolor no significa ausencia de riesgo: la forma indolora es la que produce ulceras.',
      criterios_dx: 'Clinicos, apoyados por el electroneurograma. En el diabetico con cuadro tipico y cribado positivo puede no hacer falta neurofisiologia. Ver la Figura 2 de Definicion.',
      laboratorio: 'GLUCEMIA con sobrecarga oral, VITAMINA B12 con acido metilmalonico e INMUNOFIJACION en suero. Ampliacion dirigida: funcion tiroidea y renal, serologias, cobre y ceruloplasmina, y estudio de celiaquia.',
      imagen: 'No suele ser necesaria en el patron tipico.',
      complementarios: 'Electroneurograma, habitualmente con patron AXONAL. CRIBADO DEL PIE con monofilamento de 10 g y una segunda prueba en todo diabetico, al menos una vez al a&#241;o. Biopsia cutanea si predomina el dolor y la neurofisiologia es normal.',
      dx_diferencial: 'Neuropatia de fibra fina, polineuropatia desmielinizante cronica (que a&#241;ade afectacion proximal y arreflexia difusa), mielopatia por deficit de B12 o de cobre, estenosis de canal lumbar y neuropatia hereditaria, que hay que sospechar ante pies cavos y antecedente familiar.',
      tx_medico: 'CONTROL GLUCEMICO estricto, que en la diabetes tipo 1 previene la neuropatia de forma clara y en la tipo 2 tiene un efecto mas modesto. Abstinencia de alcohol. Correccion de los deficits. CUIDADO DEL PIE: inspeccion diaria, calzado adecuado, tratamiento de las callosidades y educacion, porque el objetivo aqui es evitar la ulcera y la amputacion.',
      tx_farmacologico: 'Para el dolor neuropatico: pregabalina o gabapentina, duloxetina o amitriptilina, eligiendo segun comorbilidad y efectos adversos. Combinar si la respuesta es parcial. Los OPIOIDES no son primera linea. Los parches de capsaicina o de lidocaina son una opcion en dolor localizado.',
      tx_intervencionista: 'Estimulacion medular en casos muy seleccionados de dolor refractario. Cirugia del pie diabetico segun la complicacion.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Proteccion del pie insensible durante el ingreso: retirar dispositivos compresivos, inspeccionar los talones a diario y evitar apoyos prolongados.',
      seguimiento_ambulatorio: 'Cribado anual del pie en el diabetico. Reevaluar si el patron cambia a asimetrico. Vigilar la aparicion de sintomas autonomos, que en el diabetico marcan peor pronostico.',
      pronostico: 'Progresion lenta. El control de la causa frena el avance pero rara vez revierte lo perdido. Lo que mas cambia el pronostico funcional no es el dolor sino la perdida de sensibilidad protectora, por el riesgo de ulcera y amputacion.',
      algoritmo: ['Confirmar el patron simetrico, distal y dependiente de la longitud', 'Pedir glucemia con SOBRECARGA ORAL, que detecta la prediabetes', 'Pedir vitamina B12 con acido metilmalonico', 'Pedir electroforesis con INMUNOFIJACION en suero', 'Revisar farmacos, alcohol y toxicos, incluido el oxido nitroso', 'Preguntar por antecedente familiar y mirar si hay pies cavos', 'Ampliar el estudio solo segun las pistas', 'Hacer cribado del pie con monofilamento en todo diabetico', 'Tratar el dolor con gabapentinoide, duloxetina o amitriptilina', 'Educar sobre el cuidado del pie insensible']
    },
    {
      nombre: 'Mononeuropatias y mononeuritis multiple',
      color: '#8c3a34',
      definicion: 'Afectacion de un solo nervio periferico (mononeuropatia), casi siempre por atrapamiento, o de varios nervios de forma sucesiva y asimetrica (mononeuritis multiple), que obliga a descartar una vasculitis.',
      fisiopatologia: 'En la mononeuropatia por atrapamiento, la compresion mecanica repetida en un punto anatomico estrecho produce desmielinizacion focal y, si se mantiene, perdida axonal. En la mononeuritis multiple el mecanismo es distinto y explica su urgencia: la inflamacion de los vasos que nutren el nervio (los vasa nervorum) produce INFARTOS en el tronco nervioso, en puntos aleatorios y de forma sucesiva. Cada infarto es una perdida axonal establecida, y por eso el retraso terapeutico se traduce en deficit permanente.',
      epidemiologia: 'El sindrome del tunel carpiano es la mononeuropatia mas frecuente. La mononeuritis multiple es rara pero de las presentaciones neurologicas que mas urgen: la vasculitis sistemica o la vasculitis no sistemica del nervio periferico son las causas principales en muchas series.',
      factores_riesgo: ['Movimientos repetitivos y posturas mantenidas para los atrapamientos', 'Embarazo, hipotiroidismo, acromegalia y amiloidosis para el tunel carpiano', 'Diabetes, que aumenta la susceptibilidad del nervio a la compresion', 'Apoyo prolongado del codo o de la rodilla en el paciente encamado o anestesiado', 'Perdida de peso rapida, que reduce la almohadilla grasa protectora', 'Vasculitis sistemica: poliarteritis nodosa, granulomatosis con poliangeitis, Churg-Strauss', 'Crioglobulinemia asociada a hepatitis C', 'Artritis reumatoide y otras conectivopatias', 'Infeccion por VIH, lepra y enfermedad de Lyme', 'Sarcoidosis y amiloidosis'],
      clinica: 'MONONEUROPATIA: deficit sensitivo y motor limitado al territorio de un nervio. Tunel carpiano con parestesias nocturnas en los tres primeros dedos que despiertan al paciente y que se alivian al sacudir la mano. Cubital en el codo con afectacion del cuarto y quinto dedos. Radial con mano caida. Peroneo con pie caido e imposibilidad de elevar el pie. MONONEURITIS MULTIPLE: deficits asimetricos que van sumandose en dias o semanas, a menudo DOLOROSOS, con frecuencia acompa&#241;ados de sintomas sistemicos (fiebre, perdida de peso, artralgias, lesiones cutaneas).',
      criterios_dx: 'Clinicos y neurofisiologicos, con localizacion de la lesion. Ante mononeuritis multiple, el diagnostico es de la ENFERMEDAD DE BASE y no del nervio. Ver la Figura 1 de Definicion.',
      laboratorio: 'En la mononeuritis multiple, estudio URGENTE de vasculitis: velocidad de sedimentacion, proteina C reactiva, ANCA, factor reumatoide, crioglobulinas, complemento, anticuerpos antinucleares, serologias de hepatitis B y C, y VIH.',
      imagen: 'Ecografia de nervio, que muestra el aumento del area de seccion en el punto de atrapamiento y permite localizar la compresion. Resonancia si se sospecha lesion ocupante de espacio.',
      complementarios: 'Electroneurograma con localizacion del bloqueo o de la lesion. BIOPSIA DE NERVIO SURAL, con o sin biopsia muscular asociada, ante sospecha de vasculitis cuando el diagnostico no se alcanza de otro modo.',
      dx_diferencial: 'Radiculopatia (que sigue un dermatoma y suele doler en el cuello o la espalda), plexopatia, neuropatia por compresion externa en el paciente encamado, diabetes con mononeuropatias multiples, y las polineuropatias asimetricas de otras causas.',
      tx_medico: 'En el atrapamiento: modificacion de la actividad, ferula (nocturna en el tunel carpiano), evitar el apoyo del codo o de la rodilla, y fisioterapia. En el paciente ingresado, proteccion postural para prevenir nuevos atrapamientos.',
      tx_farmacologico: 'Infiltracion con corticoide en el tunel carpiano, con efecto habitualmente transitorio. En la MONONEURITIS MULTIPLE por vasculitis: corticoides a dosis altas mas inmunosupresor, sin esperar a la biopsia si la sospecha es alta, porque cada dia de retraso son axones perdidos.',
      tx_intervencionista: 'DESCOMPRESION QUIRURGICA en el atrapamiento con deficit motor, atrofia o falta de respuesta al tratamiento conservador. En el tunel carpiano, la cirugia es mas eficaz que el tratamiento conservador a medio plazo.',
      criterios_uci: 'Los de la vasculitis sistemica grave con afectacion de otros organos.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante una mononeuritis multiple, coordinar sin demora con reumatologia o con la unidad correspondiente. No esperar a completar todo el estudio para iniciar tratamiento si la sospecha de vasculitis es alta.',
      seguimiento_ambulatorio: 'En el atrapamiento, valorar la respuesta y la recuperacion neurofisiologica. En la vasculitis, seguimiento de la enfermedad de base y de la toxicidad del tratamiento.',
      pronostico: 'Bueno en el atrapamiento tratado antes de que haya perdida axonal significativa. En la mononeuritis multiple, el pronostico depende directamente de la precocidad del tratamiento: la recuperacion axonal es lenta y a menudo incompleta.',
      algoritmo: ['Determinar si la afectacion es de un nervio o de varios', 'Si es de varios y ASIMETRICA, pensar en vasculitis desde el primer momento', 'Buscar sintomas sistemicos: fiebre, perdida de peso, lesiones cutaneas, artralgias', 'Pedir estudio de vasculitis con urgencia', 'Localizar la lesion con electroneurograma y ecografia', 'En la mononeuropatia, buscar el punto de atrapamiento y su causa', 'Tratar el atrapamiento con ferula y modificacion de la actividad', 'Operar si hay deficit motor, atrofia o fracaso del tratamiento conservador', 'En la vasculitis, NO retrasar corticoides e inmunosupresor', 'Valorar biopsia de nervio sural solo si va a cambiar el tratamiento']
    },
    {
      nombre: 'Paralisis facial periferica',
      color: '#8a6a1f',
      definicion: 'Debilidad o paralisis de toda la musculatura de una hemicara, INCLUIDA la frente, por lesion del nervio facial en su trayecto periferico. La forma idiopatica se denomina paralisis de Bell.',
      fisiopatologia: 'El nervio facial recorre un canal oseo estrecho en el pe&#241;asco. Cualquier proceso que produzca inflamacion y edema del nervio en ese trayecto lo comprime contra una pared que no cede, lo que produce isquemia y bloqueo de la conduccion. La hipotesis mas aceptada para la forma idiopatica es la reactivacion de un virus neurotropo, sobre todo el herpes simple. Esa fisiopatologia explica el tratamiento: el corticoide reduce el edema dentro del canal, y por eso funciona mejor cuanto antes se administre.',
      epidemiologia: 'Es la mononeuropatia craneal mas frecuente. La mayoria de los pacientes con paralisis de Bell recupera de forma completa o casi completa, y la proporcion mejora de forma significativa con corticoide precoz.',
      factores_riesgo: ['Embarazo, sobre todo en el tercer trimestre y el posparto', 'Diabetes mellitus', 'Hipertension arterial', 'Obesidad', 'Infeccion respiratoria de vias altas previa', 'Inmunosupresion', 'Antecedente personal o familiar de paralisis facial', 'Enfermedad de Lyme en zonas endemicas', 'Infeccion por VIH', 'Sarcoidosis'],
      clinica: 'Instauracion en HORAS o pocos dias, con maximo deficit en 72 horas. No arruga la frente, no cierra el ojo (signo de Bell: el globo ocular se desvia hacia arriba al intentar cerrarlo), la comisura cae, el surco nasogeniano se borra. Puede a&#241;adir hiperacusia, alteracion del gusto en los dos tercios anteriores de la lengua, sequedad ocular y dolor retroauricular, que a menudo precede a la paralisis.',
      criterios_dx: 'CLINICO. La clave es comprobar que la frente esta afectada: si la frente se conserva, la lesion es CENTRAL y el manejo es el de un ictus. Ver la Figura 3 de Definicion.',
      laboratorio: 'No de rutina en la forma tipica. Serologia de Lyme en zonas endemicas o ante exposicion, glucemia, serologia de VIH y enzima convertidora de angiotensina si el cuadro es atipico, bilateral o recurrente.',
      imagen: 'No indicada en la paralisis de Bell tipica. Resonancia craneal y de pe&#241;asco si es bilateral, recurrente, de instauracion progresiva en mas de 3 semanas, con otros pares craneales afectados, con masa parotidea o sin mejoria a los 3 o 4 meses.',
      complementarios: 'Exploracion OTOSCOPICA buscando vesiculas en el pabellon y en el conducto auditivo, que definen el sindrome de Ramsay Hunt. Electroneurografia en casos graves para valorar el pronostico, aunque su utilidad practica es limitada.',
      dx_diferencial: 'PARALISIS CENTRAL por ictus o lesion hemisferica, que respeta la frente. Sindrome de Ramsay Hunt. Enfermedad de Lyme, sobre todo si es bilateral. Sindrome de Guillain-Barre y sindrome de Miller Fisher. Sarcoidosis con sindrome de Heerfordt. Tumor de parotida o del angulo pontocerebeloso. Otitis media complicada y colesteatoma. Traumatismo del pe&#241;asco.',
      tx_medico: 'PROTECCION OCULAR, que es lo que evita la unica secuela grave: lagrimas artificiales frecuentes durante el dia, pomada lubricante y OCLUSION del ojo por la noche, gafas de sol en el exterior. Sin cierre palpebral completo, la cornea se deseca y se ulcera. Fisioterapia facial y ejercicios, con evidencia moderada.',
      tx_farmacologico: 'CORTICOIDE ORAL cuanto antes, idealmente en las primeras 72 horas: es la intervencion con mejor respaldo y mejora la probabilidad de recuperacion completa. El ANTIVIRAL a&#241;adido al corticoide tiene beneficio pequeno y discutido en la paralisis de Bell, y se reserva a las formas graves; en cambio, en el sindrome de RAMSAY HUNT el antiviral si esta indicado de forma clara junto con el corticoide.',
      tx_intervencionista: 'Descompresion quirurgica del nervio, controvertida y reservada a casos muy seleccionados en centros con experiencia. Cirugia oculoplastica (pesa palpebral, tarsorrafia) si la falta de cierre se prolonga. Cirugia reconstructiva en las secuelas establecidas.',
      criterios_uci: 'No aplica, salvo que forme parte de un cuadro sistemico grave como un sindrome de Guillain-Barre.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez ingresa. Si ingresa por otro motivo con una paralisis facial, asegurar que la proteccion ocular esta prescrita y que se cumple, porque es lo que mas se olvida en planta.',
      seguimiento_ambulatorio: 'Revision a las 2 o 3 semanas y a los 3 meses. Si NO ha empezado a mejorar a los 3 o 4 meses, hay que replantear el diagnostico y pedir imagen: eso ya no se comporta como una paralisis de Bell. Vigilar la aparicion de sincinesias y de lagrimas de cocodrilo como secuela de regeneracion aberrante.',
      pronostico: 'La mayoria recupera. Los factores de peor pronostico son la paralisis completa desde el inicio, la edad avanzada, la diabetes, el dolor intenso y el sindrome de Ramsay Hunt, que recupera peor que la paralisis de Bell.',
      algoritmo: ['MIRAR LA FRENTE: si se conserva, es central y se maneja como un ictus', 'Confirmar instauracion en horas o pocos dias', 'Explorar el conducto y el pabellon buscando VESICULAS', 'Iniciar CORTICOIDE oral dentro de las primeras 72 horas', 'A&#241;adir antiviral si hay Ramsay Hunt o forma grave', 'Prescribir PROTECCION OCULAR: lagrimas, pomada y oclusion nocturna', 'No pedir imagen en la forma tipica', 'Pedir imagen y estudio si es bilateral, recurrente o progresiva', 'Revisar a las 2 o 3 semanas y a los 3 meses', 'Si no mejora a los 3 o 4 meses, replantear el diagnostico']
    },
    {
      nombre: 'Polineuropatia desmielinizante cronica y neuropatia de fibra fina',
      color: '#6b4a8c',
      definicion: 'Dos entidades que comparten una caracteristica: se diagnostican mal porque no encajan en el patron habitual. La primera es tratable y se infradiagnostica o se sobrediagnostica segun el contexto; la segunda cursa con electroneurograma NORMAL.',
      fisiopatologia: 'En la polineuropatia desmielinizante inflamatoria cronica, una respuesta inmunitaria dirigida contra componentes de la mielina periferica produce desmielinizacion segmentaria en raices y troncos nerviosos, lo que enlentece o bloquea la conduccion. Al afectar a raices y troncos, la debilidad es PROXIMAL Y DISTAL y los reflejos desaparecen de forma difusa, a diferencia del patron dependiente de la longitud. En la neuropatia de fibra fina se da&#241;an las fibras A-delta y C, que son las que llevan dolor, temperatura y funcion autonoma; como el electroneurograma explora la fibra gruesa, sale NORMAL.',
      epidemiologia: 'La polineuropatia desmielinizante cronica es poco frecuente pero importante por ser tratable. Es objeto de SOBREDIAGNOSTICO: una parte de los pacientes etiquetados y tratados durante a&#241;os no la tiene. La neuropatia de fibra fina es mucho mas comun de lo que sugiere su tasa de diagnostico, y la diabetes y la prediabetes son sus causas mas frecuentes.',
      factores_riesgo: ['Para la forma desmielinizante cronica: gammapatia monoclonal, infeccion por VIH, linfoma y enfermedad inflamatoria intestinal', 'Diabetes, que puede coexistir y complicar el diagnostico', 'Para la fibra fina: diabetes y PREDIABETES', 'Sindrome de Sjogren', 'Amiloidosis, hereditaria y adquirida', 'Sarcoidosis', 'Enfermedad de Fabry', 'Infeccion por VIH y por hepatitis C', 'Celiaquia', 'Consumo excesivo de alcohol', 'Quimioterapia', 'Deficit de vitamina B12'],
      clinica: 'DESMIELINIZANTE CRONICA: debilidad simetrica PROXIMAL Y DISTAL que progresa durante mas de 8 semanas, con arreflexia difusa y alteracion sensitiva de fibra gruesa. Puede tener curso progresivo o en brotes. FIBRA FINA: dolor quemante en pies, alodinia, sensacion de quemazon que empeora de noche, con fuerza y reflejos NORMALES y con frecuencia sintomas autonomos asociados (sequedad, alteracion de la sudoracion, molestias digestivas).',
      criterios_dx: 'La desmielinizante cronica exige criterios neurofisiologicos de desmielinizacion. La de fibra fina exige clinica compatible con electroneurograma normal, confirmada preferentemente con biopsia cutanea.',
      laboratorio: 'En la desmielinizante cronica: inmunofijacion en suero (obligada, por la asociacion con gammapatia monoclonal), anticuerpos antinodales y paranodales en casos seleccionados, y liquido cefalorraquideo con disociacion albuminocitologica. En la fibra fina: glucemia con SOBRECARGA ORAL, anticuerpos anti-Ro y anti-La, enzima convertidora, estudio de amiloidosis y de Fabry segun contexto.',
      imagen: 'Resonancia de plexos y de raices en la forma desmielinizante cronica, que puede mostrar engrosamiento y realce radicular cuando la neurofisiologia no es concluyente.',
      complementarios: 'ELECTRONEUROGRAMA, que es el eje del diagnostico de la desmielinizante cronica y que en la fibra fina es NORMAL. BIOPSIA CUTANEA con densidad de fibras nerviosas intraepidermicas en la pierna distal, que es la prueba de referencia para la fibra fina.',
      dx_diferencial: 'Para la desmielinizante cronica: sindrome de Guillain-Barre (que se define por progresion de menos de 4 semanas), neuropatia asociada a gammapatia monoclonal, neuropatia motora multifocal con bloqueos de conduccion, neuropatia diabetica, amiloidosis y las hereditarias, que pueden dar velocidades muy lentas y confundirse. Para la fibra fina: dolor de origen musculoesqueletico, sindrome de dolor regional complejo, fibromialgia y enfermedad arterial periferica.',
      tx_medico: 'En la fibra fina, buscar y tratar la causa, sobre todo la prediabetes, con dieta, ejercicio y perdida de peso. Manejo del dolor y educacion sobre la evolucion esperable.',
      tx_farmacologico: 'DESMIELINIZANTE CRONICA: corticoides, inmunoglobulinas intravenosas o plasmaferesis como opciones de primera linea, con eficacia comparable y eleccion segun perfil del paciente. Es imprescindible REEVALUAR la respuesta de forma objetiva y retirar el tratamiento si no la hay, para no perpetuar una inmunoterapia costosa en alguien que no tiene la enfermedad. FIBRA FINA: tratamiento del dolor con gabapentinoides, duloxetina o amitriptilina, y tratamiento especifico si se identifica una causa (por ejemplo, en la amiloidosis por transtiretina).',
      tx_intervencionista: 'No aplica de forma habitual.',
      criterios_uci: 'En la desmielinizante cronica con exacerbacion grave y afectacion respiratoria o bulbar, aunque es poco frecuente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Durante un ciclo de inmunoglobulinas, vigilar la sobrecarga de volumen, la cefalea, el riesgo trombotico y la funcion renal. Durante la plasmaferesis, el acceso vascular y las alteraciones electroliticas.',
      seguimiento_ambulatorio: 'Medir la respuesta con escalas de fuerza y de discapacidad, no solo con la impresion del paciente. Intentar de forma periodica bajar o espaciar el tratamiento para comprobar que sigue siendo necesario.',
      pronostico: 'La desmielinizante cronica responde bien al tratamiento en la mayoria de los pacientes y ese es el motivo por el que no se puede pasar por alto, aunque muchos requieren tratamiento de mantenimiento prolongado. La fibra fina tiene curso variable, con dolor que puede ser muy limitante pero sin la discapacidad motora de otras neuropatias.',
      algoritmo: ['Ante debilidad PROXIMAL Y DISTAL con arreflexia, pensar en poliradiculoneuropatia', 'Comprobar el curso: mas de 8 semanas apunta a la forma cronica', 'Pedir electroneurograma buscando criterios de DESMIELINIZACION', 'Pedir inmunofijacion en suero, que es obligada', 'Analizar el liquido cefalorraquideo buscando disociacion albuminocitologica', 'Iniciar corticoides, inmunoglobulinas o plasmaferesis', 'REEVALUAR la respuesta de forma objetiva y retirar si no la hay', 'Ante dolor quemante con electroneurograma NORMAL, pensar en fibra fina', 'Pedir sobrecarga oral de glucosa y estudio de Sjogren y amiloidosis', 'Confirmar con biopsia cutanea y tratar la causa y el dolor']
    },
    {
      nombre: 'Disautonomia',
      color: '#3d5a73',
      definicion: 'Disfuncion del sistema nervioso autonomo, que puede afectar al control cardiovascular, digestivo, urinario, sudomotor y pupilar, y que abarca desde la hipotension ortostatica neurogenica hasta el sindrome de taquicardia postural y la disreflexia autonomica.',
      fisiopatologia: 'Al ponerse de pie, la gravedad desplaza sangre hacia las extremidades inferiores y el retorno venoso cae. En condiciones normales, los barorreceptores detectan la caida y activan el simpatico, que aumenta la frecuencia cardiaca y produce vasoconstriccion. Si la via aferente, central o eferente esta da&#241;ada, esa compensacion no ocurre: la presion cae y la frecuencia cardiaca NO sube lo que deberia. Ese es el sello de la hipotension ortostatica NEUROGENICA, y la razon de que el pulso informe mas que la propia presion.',
      epidemiologia: 'La hipotension ortostatica es muy frecuente en el mayor y se asocia a caidas, ingresos y mortalidad. En una proporcion importante de los casos la causa es FARMACOLOGICA y por tanto corregible. La disautonomia diabetica es frecuente en la diabetes de larga evolucion y su presencia marca peor pronostico cardiovascular.',
      factores_riesgo: ['Edad avanzada', 'Diabetes de larga evolucion', 'Enfermedad de Parkinson y otras sinucleinopatias', 'Atrofia multisistemica y fallo autonomico puro', 'Amiloidosis', 'Insuficiencia renal cronica', 'FARMACOS: antihipertensivos, diureticos, alfabloqueantes, antidepresivos triciclicos, antipsicoticos, agonistas dopaminergicos', 'Deshidratacion y encamamiento prolongado', 'Insuficiencia suprarrenal', 'Lesion medular a nivel de T6 o superior', 'Neuropatia por VIH o por quimioterapia', 'Sindrome de Sjogren y otras causas de neuropatia de fibra fina'],
      clinica: 'CARDIOVASCULAR: mareo, vision borrosa o en tunel, dolor cervical y de hombros en percha al ponerse de pie, sincope, y de forma caracteristica hipertension EN DECUBITO que convive con hipotension de pie. DIGESTIVA: gastroparesia con saciedad precoz y vomitos, estre&#241;imiento o diarrea nocturna. URINARIA: retencion, vaciamiento incompleto e infecciones de repeticion. SUDOMOTORA: anhidrosis distal con hiperhidrosis compensadora. Y disfuncion erectil, que en el varon diabetico suele ser el primer sintoma autonomo.',
      criterios_dx: 'Hipotension ortostatica: caida de 20 mmHg o mas en la sistolica, o de 10 mmHg o mas en la diastolica, a los 3 minutos de bipedestacion. El origen neurogenico se sospecha por la respuesta INSUFICIENTE de la frecuencia cardiaca. Ver la Figura 4 de Definicion.',
      laboratorio: 'Hemograma para descartar anemia, funcion renal e iones, glucemia y hemoglobina glucosilada, cortisol basal si se sospecha insuficiencia suprarrenal, y estudio de amiloidosis o de Sjogren segun el contexto.',
      imagen: 'Segun la sospecha etiologica. La gammagrafia cardiaca con MIBG reducida apoya el fallo autonomico posganglionar de las sinucleinopatias.',
      complementarios: 'PRUEBA DE BIPEDESTACION ACTIVA a pie de cama, midiendo presion y frecuencia en decubito y a los 3 minutos, que es lo que mas rinde y casi nunca se hace bien. Mesa basculante si la prueba de cama no es concluyente. Estudios autonomos formales (variabilidad de la frecuencia cardiaca, respuesta sudomotora) en centros especializados.',
      dx_diferencial: 'Sincope vasovagal, sincope cardiogenico (arritmia, estenosis aortica, miocardiopatia), hipovolemia, anemia, insuficiencia suprarrenal, efecto farmacologico, desacondicionamiento fisico y sindrome de taquicardia postural, que es una entidad distinta y no cursa con hipotension ortostatica.',
      tx_medico: 'PRIMERO, LO NO FARMACOLOGICO, que es lo que mas rinde: revisar y retirar los farmacos implicados, aumentar la ingesta de sal y de agua, medias de compresion hasta la cintura, ELEVAR EL CABECERO de la cama por la noche (que reduce la natriuresis nocturna y mejora la hipotension de la ma&#241;ana), levantarse en dos tiempos, evitar comidas copiosas, alcohol y calor, y maniobras de contrapresion como cruzar las piernas o tensar los musculos.',
      tx_farmacologico: 'Si las medidas no bastan: MIDODRINA, FLUDROCORTISONA o droxidopa. Hay que vigilar la hipertension en decubito, que es el efecto adverso limitante, y por eso no se administran en las horas previas a acostarse. En el sindrome de taquicardia postural, betabloqueantes a dosis bajas, ivabradina o piridostigmina, siempre junto con el ejercicio progresivo, que es la base del tratamiento.',
      tx_intervencionista: 'No aplica de forma habitual.',
      criterios_uci: 'DISREFLEXIA AUTONOMICA grave con crisis hipertensiva y riesgo de hemorragia cerebral, y las complicaciones del sincope.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente con lesion medular a nivel de T6 o superior, la DISREFLEXIA AUTONOMICA es una urgencia: cefalea intensa, hipertension, sudoracion por encima de la lesion y bradicardia. Se maneja SENTANDO al paciente, aflojando ropa y dispositivos, y buscando el desencadenante por debajo de la lesion, que casi siempre es una vejiga distendida o un fecaloma. El antihipertensivo de accion corta va DESPUES, no antes.',
      seguimiento_ambulatorio: 'Medir la presion arterial de pie en cada revision, no solo sentado. Revisar la medicacion de forma periodica. Educar al paciente y a la familia sobre las medidas posturales y sobre el riesgo de caidas.',
      pronostico: 'Depende de la causa. La hipotension ortostatica farmacologica se corrige al retirar el farmaco. La neurogenica de las sinucleinopatias es progresiva y se maneja de forma sintomatica. En cualquier caso, es un marcador de riesgo de caidas, de fracturas y de mortalidad que merece atencion activa.',
      algoritmo: ['Medir la presion arterial en decubito y a los 3 MINUTOS de pie', 'Medir tambien la FRECUENCIA CARDIACA en ambas posiciones', 'Confirmar la caida de 20 sistolica o de 10 diastolica', 'Mirar el pulso: si no sube, sospechar origen NEUROGENICO', 'Si sube mucho, buscar hipovolemia, anemia o farmacos', 'REVISAR Y RETIRAR los farmacos implicados antes de a&#241;adir ninguno', 'Aplicar medidas no farmacologicas: sal, agua, medias, cabecero elevado', 'A&#241;adir midodrina o fludrocortisona si no basta, vigilando el decubito', 'Ante taquicardia postural sin hipotension, pensar en el sindrome especifico', 'En lesion medular alta con crisis hipertensiva, sentar y buscar el desencadenante']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En neuropatia periferica se pierde tiempo pidiendo analiticas enormes antes de haber definido el patron, y se pierden nervios cuando no se reconoce la unica presentacion urgente. Y hay dos errores concretos que dejan secuela: no proteger el ojo en una paralisis facial y no mirar la frente antes de etiquetarla.',
    parametros: ['Definir el PATRON antes de pedir ninguna prueba etiologica', 'Ante afectacion asimetrica y sucesiva, pensar en VASCULITIS y actuar sin demora', 'Pedir las tres pruebas de alto rendimiento: glucemia, B12 con metilmalonico e inmunofijacion', 'A&#241;adir sobrecarga oral de glucosa, que detecta la prediabetes', 'No descartar el deficit de B12 por un hemograma normal', 'Revisar farmacos y toxicos, incluido el oxido nitroso inhalado', 'En la paralisis facial, MIRAR LA FRENTE antes de nada', 'Dar corticoide en las primeras 72 horas y PROTEGER EL OJO', 'Estudiar toda paralisis facial bilateral, recurrente o de instauracion lenta', 'Ante dolor quemante con electroneurograma normal, pensar en fibra fina', 'Medir la presion arterial DE PIE y mirar tambien el pulso', 'Ante crisis hipertensiva en lesion medular alta, sentar al paciente y buscar el desencadenante'],
    criterios_uci_general: 'La neuropatia cronica no ingresa en cuidados intensivos. Si lo hacen: la poliradiculoneuropatia aguda con afectacion respiratoria o bulbar, que se maneja como sindrome de Guillain-Barre; la vasculitis sistemica grave con afectacion de otros organos; y la disreflexia autonomica con crisis hipertensiva y riesgo de hemorragia cerebral.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma habitual. La excepcion historica es la amiloidosis hereditaria por transtiretina, en la que el trasplante hepatico fue una opcion antes de la llegada de los tratamientos especificos actuales.',
    prevencion: 'Primaria: control glucemico, que en la diabetes tipo 1 previene la neuropatia de forma clara; moderacion del alcohol; prevencion de deficits nutricionales, con especial atencion tras cirugia bariatrica; suplementacion con piridoxina en el tratamiento con isoniazida; y proteccion postural en el paciente encamado o anestesiado para evitar atrapamientos del cubital y del peroneo. Secundaria: cribado anual del pie con monofilamento en el diabetico, cuyo objetivo no es diagnosticar la neuropatia sino identificar el pie EN RIESGO de ulcera, y medicion periodica de la presion arterial de pie en el paciente mayor o polimedicado. Terciaria: cuidado del pie insensible, prevencion de caidas, tratamiento del dolor neuropatico y revision periodica de la medicacion.'
  }
};

export const compCites = {
  'Enfoque de la neuropatia: el patron antes que la causa': [1, 2, 14],
  'Polineuropatia distal simetrica': [1, 9, 10],
  'Mononeuropatias y mononeuritis multiple': [11, 15],
  'Paralisis facial periferica': [3, 4],
  'Polineuropatia desmielinizante cronica y neuropatia de fibra fina': [5, 12],
  'Disautonomia': [6, 7, 8, 13]
};
export const estigmasTitulo = 'Signos y pistas que orientan ante una neuropatia';
export const estigmas = [
  { s: 'Acorchamiento en calcetin que asciende', p: 'Patron dependiente de la longitud', photo: null, desc: 'Empieza en los dedos de los pies y sube de forma simetrica; las manos no se afectan hasta que la alteracion llega a las rodillas. Es el patron mas frecuente y apunta a causas metabolicas, toxicas y carenciales.' },
  { s: 'Deficits asimetricos que se van sumando', p: 'Mononeuritis multiple', photo: null, desc: 'Varios nervios afectados de forma sucesiva, cada uno en su territorio, a menudo con dolor y con sintomas sistemicos. Es una VASCULITIS hasta que se demuestre lo contrario y la unica presentacion neuropatica que urge de verdad.' },
  { s: 'Pies cavos y dedos en martillo', p: 'Neuropatia hereditaria', photo: null, desc: 'La deformidad del pie indica que el proceso lleva a&#241;os, desde el desarrollo. Junto con un antecedente familiar, orienta a una neuropatia hereditaria y ahorra un estudio etiologico largo e inutil.' },
  { s: 'Parestesias nocturnas en los tres primeros dedos', p: 'Tunel carpiano', photo: null, desc: 'Despiertan al paciente y se alivian al sacudir la mano. Es la mononeuropatia mas frecuente. En casos de larga evolucion aparece atrofia de la eminencia tenar, que ya indica perdida axonal y peor recuperacion.' },
  { s: 'Pie caido con imposibilidad de elevar el pie', p: 'Peroneo en la cabeza del perone', photo: null, desc: 'Suele deberse a compresion externa en un paciente encamado, tras una perdida de peso rapida o por cruzar las piernas de forma mantenida. Su prevencion es puramente postural y se olvida con frecuencia en planta.' },
  { s: 'Dolor quemante con exploracion y estudio normales', p: 'Fibra fina', photo: null, desc: 'El electroneurograma explora la fibra gruesa y por eso sale NORMAL. Hay que pedir sobrecarga oral de glucosa y, si hace falta, biopsia cutanea con densidad de fibras intraepidermicas.' },
  { s: 'Debilidad proximal Y distal con arreflexia', p: 'Poliradiculoneuropatia', photo: null, desc: 'Rompe el patron dependiente de la longitud y apunta a afectacion de raices. Si progresa en menos de 4 semanas es un sindrome de Guillain-Barre; si lleva mas de 8 semanas, una forma inflamatoria cronica, que es tratable.' },
  { s: 'No arruga la frente', p: 'Paralisis facial PERIFERICA', photo: null, desc: 'La frente recibe inervacion de los dos hemisferios, de modo que una lesion central la respeta. Que la frente este afectada es lo que confirma que la lesion es periferica, y esa comprobacion de segundos evita confundirla con un ictus.' },
  { s: 'Vesiculas en el pabellon auricular', p: 'Sindrome de Ramsay Hunt', photo: null, desc: 'Reactivacion del virus varicela-zoster en el ganglio geniculado. Recupera peor que la paralisis de Bell y aqui el antiviral si esta claramente indicado junto con el corticoide. Hay que mirar el conducto, no solo el pabellon.' },
  { s: 'Paralisis facial bilateral', p: 'Nunca es una paralisis de Bell', photo: null, desc: 'Obliga a estudiar: sindrome de Guillain-Barre, enfermedad de Lyme, sarcoidosis, VIH y linfoma son las causas a descartar. La forma idiopatica bilateral simultanea es excepcional.' },
  { s: 'Marea al levantarse y el pulso no sube', p: 'Hipotension ortostatica neurogenica', photo: null, desc: 'Si la presion cae y la frecuencia cardiaca no aumenta, el arco reflejo simpatico esta da&#241;ado. Si el pulso sube mucho, el reflejo funciona y hay que buscar hipovolemia, anemia o un farmaco.' },
  { s: 'Hipertension en decubito con hipotension de pie', p: 'Fallo autonomico', photo: null, desc: 'Es una combinacion caracteristica y un problema terapeutico real: los farmacos que corrigen la hipotension de pie empeoran la hipertension acostado. Por eso se elevan el cabecero y no se administran antes de acostarse.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Patron de la neuropatia (calculadora disponible)': [1, 14],
  'Estudio etiologico minimo (calculadora disponible)': [1, 2],
  'Escala de House-Brackmann (calculadora disponible)': [4],
  'Hipotension ortostatica y su origen (calculadora disponible)': [6, 7],
  'Axonal frente a desmielinizante': [5],
  'Criterios de sindrome de taquicardia postural': [8]
};
export const escalaCalc = {
  'Patron de la neuropatia (calculadora disponible)': 'patron-neuropatia',
  'Estudio etiologico minimo (calculadora disponible)': 'estudio-neuropatia',
  'Escala de House-Brackmann (calculadora disponible)': 'house-brackmann',
  'Hipotension ortostatica y su origen (calculadora disponible)': 'ortostatismo'
};
export const compGroups = [
  { name: 'El enfoque y lo mas frecuente', items: ['Enfoque de la neuropatia: el patron antes que la causa', 'Polineuropatia distal simetrica'] },
  { name: 'Lo focal y lo urgente', items: ['Mononeuropatias y mononeuritis multiple', 'Paralisis facial periferica'] },
  { name: 'Lo que se diagnostica mal', items: ['Polineuropatia desmielinizante cronica y neuropatia de fibra fina', 'Disautonomia'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el metodo y el patron mas frecuente: definir la distribucion antes de pedir nada, y el estudio corto de la polineuropatia distal simetrica. Las dos siguientes son lo focal: los atrapamientos, que son banales, y la mononeuritis multiple, que es la unica presentacion urgente del tema, junto con la paralisis facial, donde dos gestos de segundos evitan confundirla con un ictus y evitan la unica secuela grave. Las dos ultimas son las entidades que se diagnostican peor: la desmielinizante cronica, que es tratable y se sobrediagnostica a la vez, y la disautonomia, donde el dato esta en el pulso.';
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
  root: { title: 'NEUROPATIA PERIFERICA', color: '#2e6b6b', target: 'definicion' },
  branches: [
    { title: 'QUE PATRON', sub: 'Antes que la causa', color: '#2e6b6b', target: 'clasificacion', leaves: [
      { title: 'Simetrica distal', sub: 'Metabolico, toxico, carencial', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Un solo nervio', sub: 'Atrapamiento', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Asimetrica y sucesiva', sub: 'VASCULITIS: urgente', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Proximal y distal', sub: 'Poliradiculoneuropatia', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'QUE PEDIR', sub: 'Tres pruebas, no un panel', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Glucemia con sobrecarga', sub: 'Detecta la prediabetes', color: '#3f6b52', target: 'diagnostico' },
      { title: 'B12 con metilmalonico', sub: 'El hemograma no descarta', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Inmunofijacion en suero', sub: 'La que mas se olvida', color: '#6b4a8c', target: 'diagnostico' },
      { title: 'Farmacos y toxicos', sub: 'Preguntar por oxido nitroso', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'LO FOCAL', sub: 'Cara y sistema autonomo', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Mirar la frente', sub: 'Central respeta, periferica no', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Corticoide en 72 horas', sub: 'Y proteger el ojo', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Presion de pie', sub: 'A los 3 minutos', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Mirar el pulso', sub: 'Separa neurogenica de la otra', color: '#6b4a8c', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 4, 6], imagen: [4, 11] };
export const clasificacionCite = [1, 4, 6, 8];
export const seguimientoCite = [1, 3, 9];
