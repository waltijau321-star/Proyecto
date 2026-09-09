// topics/encefalitis-autoinmune/content.js: Encefalitis autoinmune.
// Cubre el item "Encefalitis autoinmune" del cluster "Alteracion de conciencia y enfermedad
// neuromuscular" (bloque XII, Neurologia) del temario.
//
// DELIMITACION frente a `meningoencefalitis-infecciosa`: alli el mecanismo es infeccioso y el
// tiempo se mide en HORAS. Aqui el mecanismo es inmunitario y el tiempo se mide en SEMANAS, pero
// el retraso tambien se paga: la inmunoterapia precoz es el factor pronostico modificable.
// Frente a `deterioro-cognitivo-demencias`: alli el deterioro es de a&#241;os; el perfil SUBAGUDO,
// de menos de tres meses, es precisamente lo que obliga a pensar en este tema.
//
// Fuentes principales: criterios clinicos de Graus y colaboradores de 2016, que son el marco que
// permite tratar sin esperar a los anticuerpos; cohorte de Titulaer sobre pronostico y escalada
// terapeutica en la encefalitis por anticuerpos anti-receptor de NMDA; escala NEOS; criterios
// actualizados de sindromes neurologicos paraneoplasicos de 2021; y las recomendaciones de buena
// practica de 2021 para el diagnostico, el manejo agudo y el seguimiento.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'encefalitis-autoinmune',
  titulo: 'Encefalitis Autoinmune',
  subtitulo: 'Modulo 66 · Medicina Interna',
  accent: '#2e5c7a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const sospechaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2e5c7a;border-radius:8px;padding:5px 9px;background:#2e5c7a12;margin-bottom:6px;">
    <strong style="color:#2e5c7a;">El dato que abre la puerta a este diagnostico es el TIEMPO.</strong> <span style="color:var(--ink-dim);">Un cuadro de memoria, conducta o psiquiatrico que se instaura en MENOS DE TRES MESES no es una demencia ni un trastorno psiquiatrico primario mientras no se demuestre.</span>
  </div>
  <div style="border:1.5px solid #2e5c7a;border-radius:8px;padding:6px 9px;background:#2e5c7a08;margin-bottom:6px;">
    <div style="font-weight:700;color:#2e5c7a;margin-bottom:3px;">ENCEFALITIS AUTOINMUNE POSIBLE: TRES CONDICIONES, Y LAS TRES HACEN FALTA</div>
    <div style="color:var(--ink-dim);line-height:1.7;">
      <strong style="color:var(--ink);">1.</strong> Inicio SUBAGUDO, en menos de 3 meses, de deficit de memoria de trabajo, alteracion del estado mental o sintomas PSIQUIATRICOS.<br>
      <strong style="color:var(--ink);">2.</strong> Al menos UNO de estos cuatro: focalidad nueva del sistema nervioso central; CRISIS no explicadas por una epilepsia previa; PLEOCITOSIS en el liquido; o resonancia sugestiva de encefalitis.<br>
      <strong style="color:var(--ink);">3.</strong> Exclusion razonable de otras causas, que NO es un tramite: infeccion, toxico, metabolico, vascular, neoplasico y psiquiatrico primario.
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">PARA QUE SIRVE ESTE MARCO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Para <strong style="color:var(--ink);">TRATAR SIN ESPERAR</strong> a los anticuerpos, que tardan dias o semanas. Los criterios son deliberadamente clinicos: permiten iniciar la inmunoterapia sobre bases razonables, y ese adelanto es el factor pronostico que si esta en nuestras manos.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">BANDERAS QUE OBLIGAN A PENSARLO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Psicosis <strong style="color:var(--ink);">de novo</strong> en alguien sin antecedentes; estado epileptico <strong style="color:var(--ink);">refractario de inicio recien</strong>; crisis muy breves y muy repetidas; movimientos anormales; <strong style="color:var(--ink);">HIPONATREMIA</strong> con crisis; y un empeoramiento tras una encefalitis herpetica.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Y una regla de laboratorio que decide diagnosticos.</strong> Los anticuerpos anti-receptor de NMDA se determinan en <strong>LIQUIDO CEFALORRAQUIDEO</strong>. Pedirlos solo en suero produce falsos negativos y tambien falsos positivos, de modo que un suero negativo NO descarta y un suero positivo aislado NO confirma. La muestra correcta forma parte del diagnostico tanto como la clinica.
  </div>
</div>`;

const anticuerposHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2e5c7a;border-radius:8px;padding:5px 9px;background:#2e5c7a12;margin-bottom:6px;">
    <strong style="color:#2e5c7a;">Toda la lista de anticuerpos se ordena con una sola pregunta:</strong> <span style="color:var(--ink-dim);">esta el antigeno en la SUPERFICIE de la neurona o DENTRO de ella? De esa respuesta dependen el mecanismo, la respuesta al tratamiento y el pronostico.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">SUPERFICIE</div>
      <div style="color:var(--ink-dim);line-height:1.6;">NMDA, LGI1, CASPR2, GABA-B, AMPA. El anticuerpo es <strong style="color:var(--ink);">PATOGENICO</strong>: se une al receptor y lo desplaza, y esa union es reversible. Por eso <strong style="color:#3f6b52;">RESPONDEN a la inmunoterapia</strong> y el pronostico es bueno si se trata pronto. El tumor puede existir pero no siempre.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">INTRACELULAR</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hu, Ma2, CV2, anfifisina. El anticuerpo es solo un <strong style="color:var(--ink);">MARCADOR</strong>: el da&#241;o lo hacen los linfocitos T y es una destruccion neuronal. <strong style="color:#8c3a34;">RESPONDEN MAL</strong> a la inmunoterapia. Son casi siempre PARANEOPLASICOS, y lo que mas cambia el curso es tratar el TUMOR.</div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#6b4a8c;">NMDA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mujer joven, prodromo seudogripal, debut <strong style="color:var(--ink);">PSIQUIATRICO</strong>, despues crisis, DISCINESIAS orofaciales, disautonomia e hipoventilacion central. Buscar <strong>TERATOMA de ovario</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">LGI1</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Varon mayor, encefalitis limbica con amnesia, <strong style="color:var(--ink);">HIPONATREMIA</strong> y crisis <strong style="color:var(--ink);">DISTONICAS FACIOBRAQUIALES</strong>: segundos de duracion, decenas al dia, que se confunden con tics o mioclonias. Rara vez tumoral.</div>
    </div>
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#2e6b6b;">CASPR2</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Neuromiotonia, dolor neuropatico, insomnio grave y disautonomia, que juntos forman el <strong style="color:var(--ink);">sindrome de Morvan</strong>. Buscar <strong>TIMOMA</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">GABA-B</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Encefalitis limbica en la que las <strong style="color:var(--ink);">CRISIS dominan desde el principio</strong> y son graves. Buscar <strong>CARCINOMA MICROCITICO de pulmon</strong>, y buscarlo pronto.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">De ahi sale la consecuencia practica.</strong> Con anticuerpos de SUPERFICIE, la prioridad es la inmunoterapia y hacerla pronto. Con anticuerpos INTRACELULARES, la prioridad es <strong>ENCONTRAR EL TUMOR</strong>: el sindrome neurologico puede preceder al cancer en meses, de modo que un cribado negativo no cierra el caso y hay que REPETIRLO de forma periodica.
  </div>
</div>`;

const tratamientoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Los dos factores pronosticos que dependen del equipo son los mismos siempre:</strong> <span style="color:var(--ink-dim);">tratar PRONTO y ESCALAR a segunda linea sin demorarse cuando la primera no funciona.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1a LINEA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CORTICOIDES</strong> a dosis alta, <strong style="color:var(--ink);">INMUNOGLOBULINAS</strong> o <strong style="color:var(--ink);">RECAMBIO PLASMATICO</strong>, solos o combinados. Se inician con criterios clinicos, SIN esperar al resultado de los anticuerpos, y siempre tras haber descartado razonablemente la infeccion.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">2a LINEA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">RITUXIMAB</strong> o <strong style="color:var(--ink);">CICLOFOSFAMIDA</strong>. La escalada precoz cuando la primera linea no responde se asocia a mejor situacion funcional y a menos recaidas. Retrasarla esperando una mejoria que no llega es de los errores que mas cuestan.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">TUMOR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Su <strong style="color:var(--ink);">EXTIRPACION</strong> forma parte del tratamiento, no es un asunto aparte. En la encefalitis por anticuerpos anti-NMDA, retirar el teratoma mejora el pronostico y reduce las recaidas.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">La recuperacion es LENTA, y hay que decirlo.</strong> Puede llevar muchos meses y sigue un orden aproximadamente inverso al de la instauracion: primero se recuperan la disautonomia y el nivel de conciencia, despues los movimientos y las crisis, y al final la conducta y la memoria. Interpretar esa lentitud como fracaso lleva a escalar sin motivo o a abandonar el tratamiento.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Cuidado con los antipsicoticos.</strong> En la encefalitis por anticuerpos anti-NMDA hay una sensibilidad aumentada: pueden producir rigidez, fiebre y un cuadro que imita al sindrome neuroleptico maligno. Ante la agitacion y la catatonia de estos pacientes se prefieren las BENZODIACEPINAS, y la catatonia resistente responde a la terapia electroconvulsiva.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La encefalitis autoinmune es una inflamacion del encefalo mediada por el sistema inmunitario, con o sin tumor asociado, que se presenta como un cuadro <strong>subagudo</strong> de memoria, conducta, sintomas psiquiatricos o crisis. Su importancia practica es doble: se confunde con facilidad con un trastorno psiquiatrico primario o con una demencia rapida, y a diferencia de esos dos es <strong>tratable</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: cuando sospecharla.</strong></p>
<p style="margin:0 0 12px;">Lo que abre la puerta es el tiempo. Un cuadro de memoria, conducta o psiquiatrico instaurado en <strong>menos de tres meses</strong> no es una demencia ni un trastorno psiquiatrico primario mientras no se demuestre. Los criterios clinicos de encefalitis autoinmune posible estan dise&#241;ados a proposito para poder <strong>tratar sin esperar</strong> a unos anticuerpos que tardan dias o semanas.</p>
${figBlock('Figura 1', 'Cuando sospecharla: los criterios que permiten tratar sin esperar', sospechaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el mapa de anticuerpos.</strong></p>
<p style="margin:0 0 12px;">Toda la lista se ordena con una sola pregunta: el antigeno esta en la <strong>superficie</strong> de la neurona o <strong>dentro</strong> de ella. Los de superficie son patogenicos, reversibles y responden a la inmunoterapia. Los intracelulares son marcadores de un da&#241;o mediado por linfocitos T, responden mal y son casi siempre paraneoplasicos, de modo que alli lo que cambia el curso es encontrar y tratar el tumor.</p>
${figBlock('Figura 2', 'Superficie o intracelular: la pregunta que ordena toda la lista', anticuerposHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el tratamiento y su ritmo.</strong></p>
<p style="margin:0 0 12px;">Primera linea con corticoides, inmunoglobulinas o recambio plasmatico; escalada precoz a rituximab o ciclofosfamida si no responde; y extirpacion del tumor como parte del tratamiento. Conviene anticipar dos cosas: que la recuperacion es <strong>lenta</strong> y sigue un orden inverso al de la instauracion, y que los antipsicoticos deben usarse con cautela en la encefalitis por anticuerpos anti-NMDA.</p>
${figBlock('Figura 3', 'Inmunoterapia: primera linea, escalada y lo que hay que anticipar', tratamientoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No etiquetar de psiquiatrico un cuadro de instauracion subaguda sin haberlo estudiado. No pedir los anticuerpos anti-receptor de NMDA solo en suero, porque un suero negativo no descarta y un suero positivo aislado no confirma. No esperar al resultado de los anticuerpos para empezar la inmunoterapia. No iniciarla sin haber descartado razonablemente la infeccion. No dar por cerrado un cribado tumoral negativo, porque el sindrome puede preceder al cancer en meses y hay que <strong>repetirlo</strong>. No demorar la escalada a segunda linea cuando la primera no funciona. No confundir la lentitud de la recuperacion con un fracaso terapeutico. No usar antipsicoticos sin cautela ante la agitacion de una encefalitis por anticuerpos anti-NMDA. Y no pasar por alto que un empeoramiento tras una <strong>encefalitis herpetica</strong> puede ser una encefalitis autoinmune y no una recaida virica.</p>`;

export const bibliografia = [
  'Graus F, Titulaer MJ, Balu R, et al. A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurol. 2016;15(4):391-404.',
  'Titulaer MJ, McCracken L, Gabilondo I, et al. Treatment and prognostic factors for long-term outcome in patients with anti-NMDA receptor encephalitis: an observational cohort study. Lancet Neurol. 2013;12(2):157-165.',
  'Dalmau J, Graus F. Antibody-mediated encephalitis. N Engl J Med. 2018;378(9):840-851.',
  'Dalmau J, Gleichman AJ, Hughes EG, et al. Anti-NMDA-receptor encephalitis: case series and analysis of the effects of antibodies. Lancet Neurol. 2008;7(12):1091-1098.',
  'Balu R, McCracken L, Lancaster E, et al. A score that predicts 1-year functional status in patients with anti-NMDA receptor encephalitis. Neurology. 2019;92(3):e244-e252.',
  'Irani SR, Alexander S, Waters P, et al. Antibodies to Kv1 potassium channel-complex proteins LGI1 and CASPR2 in limbic encephalitis, Morvan syndrome and acquired neuromyotonia. Brain. 2010;133(9):2734-2748.',
  'van Sonderen A, Thijs RD, Coenders EC, et al. Anti-LGI1 encephalitis: clinical syndrome and long-term follow-up. Neurology. 2016;87(14):1449-1456.',
  'Graus F, Vogrig A, Muniz-Castrillo S, et al. Updated diagnostic criteria for paraneoplastic neurologic syndromes. Neurol Neuroimmunol Neuroinflamm. 2021;8(4):e1014.',
  'Graus F, Delattre JY, Antoine JC, et al. Recommended diagnostic criteria for paraneoplastic neurological syndromes. J Neurol Neurosurg Psychiatry. 2004;75(8):1135-1140.',
  'Abboud H, Probasco JC, Irani S, et al. Autoimmune encephalitis: proposed best practice recommendations for diagnosis and acute management. J Neurol Neurosurg Psychiatry. 2021;92(7):757-768.',
  'Abboud H, Probasco J, Irani SR, et al. Autoimmune encephalitis: proposed recommendations for symptomatic and long-term management. J Neurol Neurosurg Psychiatry. 2021;92(8):897-907.',
  'Armangue T, Spatola M, Vlagea A, et al. Frequency, symptoms, risk factors, and outcomes of autoimmune encephalitis after herpes simplex encephalitis. Lancet Neurol. 2018;17(9):760-772.',
  'Titulaer MJ, Soffietti R, Dalmau J, et al. Screening for tumours in paraneoplastic syndromes: report of an EFNS task force. Eur J Neurol. 2011;18(1):19-e3.',
  'Lancaster E, Dalmau J. Neuronal autoantigens: pathogenesis, associated disorders and antibody testing. Nat Rev Neurol. 2012;8(7):380-390.',
  'Gaspard N, Foreman BP, Alvarez V, et al. New-onset refractory status epilepticus: etiology, clinical features, and outcome. Neurology. 2015;85(18):1604-1613.',
  'Zuliani L, Nosadini M, Gastaldi M, et al. Management of antibody-mediated autoimmune encephalitis in adults and children: literature review and consensus-based practical recommendations. Neurol Sci. 2019;40(10):2017-2030.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Perfil de superficie',
      tituloB: 'Perfil paraneoplasico clasico',
      compensada: 'Instauracion SUBAGUDA, en dias o pocas semanas. En la encefalitis por anticuerpos anti-receptor de NMDA, tipica de mujer joven, hay un prodromo seudogripal y despues un debut PSIQUIATRICO (ansiedad, delirio, alucinaciones, conducta desorganizada) que lleva al paciente a salud mental; a las pocas semanas se a&#241;aden crisis, DISCINESIAS orofaciales, mutismo, disautonomia e hipoventilacion central. En la encefalitis por anticuerpos LGI1, tipica de varon mayor, hay amnesia anterograda, HIPONATREMIA y crisis DISTONICAS FACIOBRAQUIALES: contracciones de segundos que afectan a la cara y al brazo del mismo lado y se repiten decenas de veces al dia, y que se confunden con tics o mioclonias.',
      descompensada: 'Perfil de anticuerpos INTRACELULARES, casi siempre paraneoplasico. Encefalitis limbica con amnesia y crisis, pero acompa&#241;ada con frecuencia de afectacion de OTROS niveles del sistema nervioso: neuropatia sensitiva subaguda, degeneracion cerebelosa, sindrome de tronco, opsoclono-mioclono o disautonomia grave. Suele haber perdida de peso y sintomas generales. El sindrome neurologico puede PRECEDER al diagnostico del tumor en meses, y esa es la razon por la que un cribado inicial negativo no cierra el caso: hay que repetirlo de forma periodica.'
    },
    laboratorio: [
      { prueba: 'Anticuerpos neuronales en LIQUIDO y en suero', utilidad: 'La regla que mas errores evita: los anti-receptor de NMDA se determinan en LIQUIDO CEFALORRAQUIDEO. El suero aislado da falsos negativos y tambien falsos positivos, de modo que un suero negativo NO descarta y un suero positivo aislado NO confirma. Se envian ambas muestras y se interpretan juntas.' },
      { prueba: 'Citoquimica del liquido cefalorraquideo', utilidad: 'Pleocitosis linfocitaria leve, proteinas normales o poco elevadas y glucosa normal. Puede ser NORMAL, sobre todo en la encefalitis por anticuerpos LGI1, y un liquido normal no descarta el diagnostico ni autoriza a no tratar.' },
      { prueba: 'Bandas oligoclonales e indice de inmunoglobulina G', utilidad: 'Apoyan la sintesis intratecal de anticuerpos. Forman parte de los criterios de encefalitis probable por anticuerpos anti-receptor de NMDA junto con el electroencefalograma alterado, y ayudan cuando la citoquimica es anodina.' },
      { prueba: 'Estudio microbiologico completo del liquido', utilidad: 'OBLIGADO antes de inmunosuprimir: prueba molecular para virus herpes y enterovirus, cultivo, y segun contexto tuberculosis y hongos. La exclusion razonable de la infeccion no es un tramite, es uno de los tres criterios.' },
      { prueba: 'Sodio serico', utilidad: 'La HIPONATREMIA acompa&#241;a con frecuencia a la encefalitis por anticuerpos LGI1 y es una pista barata y facil de pasar por alto. Ante un varon mayor con amnesia subaguda, crisis breves repetidas e hiponatremia, el diagnostico esta practicamente escrito.' },
      { prueba: 'Autoinmunidad sistemica y funcion tiroidea', utilidad: 'Anticuerpos antinucleares, anti-ADN, antifosfolipido, ANCA y enzima convertidora de angiotensina, para descartar vasculitis, lupus neuropsiquiatrico y sarcoidosis. Los anticuerpos antitiroideos son POCO especificos: la encefalopatia asociada a tiroiditis es un diagnostico de exclusion.' },
      { prueba: 'Marcadores tumorales y estudio de neoplasia oculta', utilidad: 'Orientados por el anticuerpo encontrado. Su normalidad no descarta el tumor, de modo que no sustituyen a la imagen ni justifican dejar de repetir el cribado.' },
      { prueba: 'Analitica general y toxicos', utilidad: 'Hemograma, funcion renal y hepatica, amonio, vitamina B12, tiamina, serologia de VIH y sifilis, y cribado toxicologico. Forman parte de la exclusion razonable de otras causas, que es lo que sostiene todo el diagnostico.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de encefalitis autoinmune posible (calculadora disponible)', interpretacion: 'Comprueba las tres condiciones clinicas que permiten iniciar tratamiento sin esperar a los anticuerpos, y ademas si se cumplen los criterios de encefalitis limbica definida.', cutoff: 'Inicio en menos de 3 meses, mas un criterio de apoyo, mas exclusion razonable' },
      { metodo: 'Cribado tumoral segun el anticuerpo (calculadora disponible)', interpretacion: 'Indica que tumor buscar, con que prueba y con que periodicidad repetir el cribado segun el anticuerpo, la edad y el sexo.', cutoff: 'Repetir cada 4 a 6 meses durante al menos 2 a&#241;os en los de alto riesgo' },
      { metodo: 'Escala NEOS (calculadora disponible)', interpretacion: 'Cinco variables que estiman la probabilidad de mala situacion funcional al a&#241;o en la encefalitis por anticuerpos anti-receptor de NMDA.', cutoff: 'De 0 a 5 puntos: a mayor puntuacion, peor situacion funcional esperada' },
      { metodo: 'Electroencefalograma', interpretacion: 'Casi siempre anormal. Enlentecimiento difuso o focal, actividad epileptiforme temporal y, en una minoria de las encefalitis por anticuerpos anti-receptor de NMDA, un patron muy caracteristico llamado cepillo delta extremo.', cutoff: 'Sirve tambien para detectar CRISIS NO CONVULSIVAS, que explican un bajo nivel de conciencia' },
      { metodo: 'Escala de Rankin modificada', interpretacion: 'Mide la situacion funcional y es el desenlace usado en las cohortes y en los estudios de tratamiento de esta enfermedad.', cutoff: 'Puntuacion de 0 a 2 se considera buena situacion funcional' },
      { metodo: 'Valoracion neuropsicologica', interpretacion: 'Documenta el deficit de memoria y de funcion ejecutiva, que es lo que mas persiste y lo que peor se detecta en una consulta breve.', cutoff: 'Se repite en el seguimiento para objetivar una recuperacion que es lenta' }
    ],
    imagen: [
      { modalidad: 'Resonancia craneal con contraste', hallazgos: 'Hiperintensidad en secuencias T2 y FLAIR en los lobulos TEMPORALES MEDIALES, con frecuencia bilateral, que define la encefalitis limbica. Puede ser NORMAL en una proporcion importante, sobre todo en la encefalitis por anticuerpos anti-receptor de NMDA: una resonancia normal no descarta el diagnostico.' },
      { modalidad: 'Tomografia con emision de positrones cerebral', hallazgos: 'Mas sensible que la resonancia en fases precoces. Puede mostrar hipermetabolismo temporal medial o un gradiente occipital caracteristico en la encefalitis por anticuerpos anti-receptor de NMDA. Util cuando la resonancia es normal y la sospecha se mantiene.' },
      { modalidad: 'Tomografia de torax, abdomen y pelvis', hallazgos: 'Cribado tumoral basal en todos. Busca carcinoma microcitico de pulmon, timoma y otras neoplasias segun el anticuerpo. Un resultado negativo NO cierra el caso y obliga a repetirlo de forma periodica.' },
      { modalidad: 'Ecografia o resonancia pelvica y ecografia testicular', hallazgos: 'TERATOMA DE OVARIO en la mujer joven con anticuerpos anti-receptor de NMDA, que puede ser peque&#241;o y pasar desapercibido en la tomografia. Ecografia testicular en el varon joven con anticuerpos anti-Ma2. Su extirpacion forma parte del tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por la <strong>localizacion del antigeno</strong>, que es la division que mas informacion practica aporta: anticuerpos de <strong>superficie</strong> (patogenicos, reversibles, buena respuesta a la inmunoterapia) frente a <strong>intracelulares</strong> (marcadores de da&#241;o por linfocitos T, mala respuesta, casi siempre paraneoplasicos). En paralelo, por el <strong>sindrome</strong> (encefalitis limbica, encefalitis difusa, encefalomielitis, sindrome de tronco, cerebelitis o encefalitis del troncoencefalo), por la <strong>relacion con el tumor</strong> y por el <strong>grado de certeza</strong> diagnostica: posible, probable o definida.`,
    escalas: [
      { nombre: 'Criterios de encefalitis autoinmune posible (calculadora disponible)', componentes: 'Inicio subagudo en menos de 3 meses de deficit de memoria de trabajo, alteracion del estado mental o sintomas psiquiatricos; al menos un criterio de apoyo (focalidad nueva, crisis no explicadas, pleocitosis o resonancia sugestiva); y exclusion razonable de otras causas.', formula: 'Se exigen las TRES condiciones. Para la encefalitis limbica definida se requieren ademas alteracion bilateral en T2 y FLAIR restringida a los lobulos temporales mediales, y pleocitosis o electroencefalograma con actividad temporal.', interpretacion: 'Estan dise&#241;ados a proposito para ser CLINICOS y permitir tratar sin esperar a unos anticuerpos que tardan dias o semanas. La exclusion razonable de otras causas, sobre todo infecciosas, no es un tramite sino uno de los criterios.' },
      { nombre: 'Cribado tumoral segun el anticuerpo (calculadora disponible)', componentes: 'Anticuerpo identificado o sospechado, edad y sexo.', formula: 'Cada anticuerpo se asocia a un tumor preferente y a una prueba de eleccion, con periodicidad de repeticion segun el riesgo.', interpretacion: 'Con anticuerpos intracelulares, encontrar el tumor es lo que mas cambia el curso. Y como el sindrome neurologico puede PRECEDER al cancer en meses, un cribado inicial negativo obliga a repetirlo de forma periodica y no a cerrar el caso.' },
      { nombre: 'Escala NEOS (calculadora disponible)', componentes: 'Ingreso en unidad de criticos; ausencia de tratamiento en las 4 primeras semanas; ausencia de mejoria clinica en las 4 primeras semanas; resonancia alterada; y mas de 20 leucocitos por mm3 en el liquido.', formula: 'Un punto por cada variable presente, de 0 a 5.', interpretacion: 'Estima la probabilidad de mala situacion funcional al a&#241;o en la encefalitis por anticuerpos anti-receptor de NMDA. Dos de sus cinco variables dependen del equipo (tratar pronto y comprobar la respuesta), lo que la convierte en algo mas que un pronostico.' },
      { nombre: 'Criterios de encefalitis probable por anticuerpos anti-receptor de NMDA', componentes: 'Seis grupos de sintomas: conducta o cognicion, lenguaje, crisis, movimientos anormales, nivel de conciencia y disfuncion autonomica o hipoventilacion central. Mas electroencefalograma alterado o liquido con pleocitosis o bandas oligoclonales.', formula: 'Inicio rapido en menos de 3 meses con CUATRO de los seis grupos, mas un criterio paraclinico. Bastan TRES grupos si ademas hay un teratoma.', interpretacion: 'Permite un diagnostico de alta probabilidad sin el anticuerpo. El diagnostico DEFINIDO exige anticuerpos frente a la subunidad GluN1 y se confirma en LIQUIDO, no solo en suero.' },
      { nombre: 'Criterios de sindrome neurologico paraneoplasico', componentes: 'Fenotipo clinico, tipo de anticuerpo y presencia de tumor, ponderados en una puntuacion.', formula: 'Combina la especificidad del cuadro clinico, la del anticuerpo y el hallazgo de un tumor compatible para clasificar el caso como posible, probable o definido.', interpretacion: 'La version actualizada de 2021 sustituye la division clasica en sindromes clasicos y no clasicos por un sistema graduado, y es la que orienta hoy la intensidad y la duracion del cribado tumoral.' },
      { nombre: 'Escala de Rankin modificada', componentes: 'Grado de discapacidad funcional de 0 a 6.', formula: 'De 0 (sin sintomas) a 6 (muerte).', interpretacion: 'Es el desenlace usado en las cohortes de esta enfermedad. Una puntuacion de 0 a 2 se considera buena situacion funcional, y su recuperacion puede tardar MUCHOS MESES, lo que hay que anticipar a la familia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Cuando sospecharla: el marco diagnostico',
      color: '#2e5c7a',
      definicion: 'Conjunto de criterios clinicos que permiten identificar una encefalitis autoinmune e iniciar tratamiento sin esperar al resultado de los anticuerpos.',
      fisiopatologia: 'El sistema nervioso central puede ser blanco de una respuesta inmunitaria dirigida contra antigenos neuronales, desencadenada por un tumor que expresa esos antigenos, por una infeccion previa que rompe la tolerancia (el caso mejor documentado es la encefalitis herpetica) o sin desencadenante identificable. Segun donde este el antigeno, el mecanismo cambia por completo: si esta en la SUPERFICIE, el anticuerpo se une al receptor, lo internaliza o lo bloquea, y produce una disfuncion REVERSIBLE; si esta DENTRO de la celula, el anticuerpo no puede alcanzarlo y el da&#241;o lo hacen linfocitos T citotoxicos, con destruccion neuronal poco reversible. Esa diferencia explica el pronostico y la respuesta al tratamiento mucho mejor que el nombre del anticuerpo.',
      epidemiologia: 'Se reconoce cada vez mas y hoy figura entre las causas identificables mas frecuentes de encefalitis en series prospectivas, a la altura de las causas viricas. La encefalitis por anticuerpos anti-receptor de NMDA predomina en mujeres jovenes y en ni&#241;os; la asociada a LGI1 en varones de edad avanzada. Una proporcion relevante de los casos de estado epileptico refractario de nuevo inicio tiene causa autoinmune.',
      factores_riesgo: ['Encefalitis herpetica previa, que puede desencadenarla semanas despues', 'Neoplasia conocida u oculta, sobre todo microcitico de pulmon, timoma y teratoma', 'Sexo femenino y edad joven para los anticuerpos anti-receptor de NMDA', 'Sexo masculino y edad avanzada para los anticuerpos LGI1', 'Enfermedad autoinmune previa o antecedente familiar', 'Tratamiento con inhibidores del punto de control inmunitario', 'Trasplante de progenitores hematopoyeticos', 'Infeccion sistemica reciente como desencadenante', 'Tabaquismo, por el riesgo de carcinoma microcitico', 'Ausencia de un diagnostico alternativo tras un estudio razonable'],
      clinica: 'Cuadro SUBAGUDO, de menos de 3 meses, de deficit de memoria de trabajo, alteracion del estado mental o sintomas PSIQUIATRICOS. Se acompa&#241;a de al menos uno de estos: focalidad nueva, crisis no explicadas por una epilepsia previa, pleocitosis en el liquido o resonancia sugestiva de encefalitis. Y hay banderas que obligan a pensarlo: psicosis de novo, estado epileptico refractario de nuevo inicio, crisis muy breves y repetidas, movimientos anormales e hiponatremia con crisis.',
      criterios_dx: 'Las TRES condiciones de encefalitis autoinmune posible. La encefalitis limbica definida a&#241;ade alteracion bilateral en T2 y FLAIR restringida a los lobulos temporales mediales mas pleocitosis o electroencefalograma con actividad temporal. Ver la Figura 1 de Definicion.',
      laboratorio: 'ANTICUERPOS NEURONALES EN LIQUIDO Y EN SUERO, interpretados juntos. Citoquimica, bandas oligoclonales, y ESTUDIO MICROBIOLOGICO COMPLETO antes de inmunosuprimir. Sodio, autoinmunidad sistemica, funcion tiroidea, vitaminas, serologias y toxicos, como parte de la exclusion razonable.',
      imagen: 'RESONANCIA con contraste, que puede ser NORMAL sin que eso descarte nada. Tomografia con emision de positrones cerebral si la resonancia es normal y la sospecha se mantiene. Y cribado tumoral basal con imagen de torax, abdomen y pelvis.',
      complementarios: 'ELECTROENCEFALOGRAMA, casi siempre anormal y util ademas para detectar crisis no convulsivas. Valoracion neuropsicologica basal, que es la referencia con la que se medira despues una recuperacion lenta.',
      dx_diferencial: 'Encefalitis INFECCIOSA, que es lo primero a descartar; trastorno psiquiatrico primario; encefalopatia metabolica, toxica o por farmacos; enfermedad de Creutzfeldt-Jakob y otras demencias rapidamente progresivas; vasculitis del sistema nervioso central; lupus neuropsiquiatrico; sarcoidosis; linfoma; gliomatosis; y estado epileptico no convulsivo.',
      tx_medico: 'Manejo en un area con vigilancia neurologica estrecha. Control de crisis, prevencion de complicaciones de la inmovilidad, apoyo nutricional y explicacion cuidadosa a la familia de que la recuperacion sera lenta.',
      tx_farmacologico: 'Inmunoterapia de primera linea con criterios clinicos, SIN esperar al resultado de los anticuerpos y siempre tras haber descartado razonablemente la infeccion. Antiepilepticos segun las crisis.',
      tx_intervencionista: 'Recambio plasmatico como parte de la primera linea. Extirpacion del tumor cuando se identifica.',
      criterios_uci: 'Bajo nivel de conciencia, estado epileptico, disautonomia grave e hipoventilacion central. El ingreso en criticos es ademas una de las variables de la escala NEOS.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar la respuesta a las 2 a 4 semanas y ESCALAR si no la hay. Repetir el cribado tumoral si el inicial fue negativo y el anticuerpo es de riesgo. Vigilar crisis no convulsivas si el nivel de conciencia no mejora.',
      seguimiento_ambulatorio: 'Valoracion neuropsicologica seriada, control de la epilepsia residual, cribado tumoral periodico y vigilancia de recaidas, que son mas frecuentes de lo que se supone y pueden aparecer a&#241;os despues.',
      pronostico: 'Bueno en los anticuerpos de superficie tratados pronto, aunque la recuperacion completa puede llevar muchos meses. Malo en los intracelulares, donde el pronostico lo marca el tumor y el da&#241;o neuronal ya establecido.',
      algoritmo: ['Detectar el perfil SUBAGUDO, de menos de 3 meses', 'Comprobar los tres criterios de encefalitis autoinmune posible', 'Enviar anticuerpos en LIQUIDO y en suero, no solo en suero', 'Descartar razonablemente la infeccion antes de inmunosuprimir', 'Pedir resonancia y electroencefalograma', 'Hacer cribado tumoral basal segun el anticuerpo sospechado', 'Iniciar la primera linea SIN esperar a los anticuerpos', 'Documentar la situacion funcional de partida', 'Reevaluar a las 2 a 4 semanas y escalar si no responde', 'Repetir el cribado tumoral de forma periodica']
    },
    {
      nombre: 'Encefalitis por anticuerpos anti-receptor de NMDA',
      color: '#6b4a8c',
      definicion: 'Encefalitis mediada por anticuerpos contra la subunidad GluN1 del receptor de NMDA, con un curso por fases muy reconocible y buena respuesta al tratamiento si se inicia pronto.',
      fisiopatologia: 'El anticuerpo se une al receptor de NMDA y provoca su INTERNALIZACION, es decir, retira receptores de la sinapsis sin destruir la neurona. Esa hipofuncion del receptor reproduce lo que se observa con antagonistas como la ketamina y explica el cuadro psicotico, la disociacion y las alteraciones del movimiento. Y explica tambien lo mas importante desde el punto de vista practico: como no hay muerte neuronal sino un receptor retirado, el proceso es REVERSIBLE, la recuperacion es posible incluso tras meses de enfermedad grave, y por eso conviene ser persistente con el tratamiento y con el soporte.',
      epidemiologia: 'Predomina en mujeres jovenes y en ni&#241;os. En mujeres jovenes se asocia con frecuencia a TERATOMA DE OVARIO, asociacion que disminuye en ni&#241;as y en mujeres de mas edad. Puede aparecer semanas despues de una encefalitis herpetica. Es una de las causas identificables mas frecuentes de encefalitis en adultos jovenes.',
      factores_riesgo: ['Sexo femenino y edad joven', 'Teratoma de ovario, a veces muy peque&#241;o', 'Encefalitis herpetica previa', 'Edad pediatrica, con presentacion mas motora y menos psiquiatrica', 'Retraso en el inicio de la inmunoterapia', 'Ausencia de escalada cuando la primera linea no responde', 'Tumor no buscado o cribado no repetido', 'Ingreso en unidad de criticos, que marca gravedad', 'Ausencia de mejoria en las primeras 4 semanas', 'Diagnostico erroneo inicial como cuadro psiquiatrico primario'],
      clinica: 'Curso por FASES muy reconocible: prodromo seudogripal; despues debut PSIQUIATRICO con ansiedad, delirio, alucinaciones y conducta desorganizada, que suele llevar al paciente a salud mental; y a las pocas semanas alteracion del lenguaje hasta el mutismo, CRISIS, DISCINESIAS orofaciales y de miembros, descenso del nivel de conciencia, DISAUTONOMIA e HIPOVENTILACION CENTRAL. Reconocer la secuencia es lo que evita meses de retraso.',
      criterios_dx: 'Probable con inicio rapido en menos de 3 meses y CUATRO de los seis grupos de sintomas, mas electroencefalograma alterado o liquido con pleocitosis o bandas oligoclonales; bastan TRES grupos si hay teratoma. DEFINIDA con anticuerpos frente a GluN1, determinados en LIQUIDO.',
      laboratorio: 'ANTICUERPOS EN LIQUIDO CEFALORRAQUIDEO, que es la muestra que decide: el suero aislado da falsos negativos y falsos positivos. Pleocitosis linfocitaria leve, bandas oligoclonales. Estudio microbiologico completo antes de inmunosuprimir.',
      imagen: 'RESONANCIA con frecuencia NORMAL, lo que no descarta nada y es una fuente habitual de retraso diagnostico. La tomografia con emision de positrones puede mostrar un gradiente frontotemporal a occipital. ECOGRAFIA O RESONANCIA PELVICA buscando TERATOMA, que puede ser peque&#241;o y no verse en la tomografia.',
      complementarios: 'ELECTROENCEFALOGRAMA con enlentecimiento difuso y, en una minoria, el patron de CEPILLO DELTA EXTREMO, muy caracteristico de esta entidad. Monitorizacion continua si hay bajo nivel de conciencia. Vigilancia respiratoria por el riesgo de hipoventilacion central.',
      dx_diferencial: 'Brote psicotico primario, que es el error inicial mas frecuente; encefalitis virica; sindrome neuroleptico maligno; catatonia de otra causa; intoxicacion por drogas; estado epileptico no convulsivo; y encefalopatia metabolica.',
      tx_medico: 'Manejo en unidad de criticos si hay disautonomia, hipoventilacion o estado epileptico. Ante la agitacion y la catatonia se prefieren BENZODIACEPINAS: hay sensibilidad aumentada a los antipsicoticos, que pueden producir un cuadro similar al sindrome neuroleptico maligno. La catatonia resistente responde a la terapia electroconvulsiva.',
      tx_farmacologico: 'Primera linea con corticoides a dosis alta, inmunoglobulinas o recambio plasmatico. ESCALADA PRECOZ a rituximab o ciclofosfamida si no hay respuesta, que se asocia a mejor situacion funcional y a menos recaidas. Antiepilepticos segun las crisis.',
      tx_intervencionista: 'EXTIRPACION DEL TERATOMA, que forma parte del tratamiento y mejora el pronostico. Recambio plasmatico. Terapia electroconvulsiva en la catatonia resistente.',
      criterios_uci: 'Hipoventilacion central, disautonomia grave con inestabilidad hemodinamica, estado epileptico y bajo nivel de conciencia con incapacidad para proteger la via aerea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar la respuesta a las 4 semanas: su ausencia es una de las variables de la escala NEOS y una indicacion de escalar. Buscar el teratoma con pruebas dirigidas si la tomografia fue negativa. Vigilar la respiracion.',
      seguimiento_ambulatorio: 'Recuperacion LENTA, de muchos meses, en orden aproximadamente inverso al de la instauracion. Inmunosupresion de mantenimiento en casos seleccionados, vigilancia de recaidas y rehabilitacion cognitiva y conductual.',
      pronostico: 'La mayoria alcanza una buena situacion funcional, aunque la recuperacion sea prolongada. Predicen peor evolucion el ingreso en criticos, el retraso terapeutico, la falta de mejoria precoz, la resonancia alterada y la pleocitosis marcada, que son las cinco variables de la escala NEOS.',
      algoritmo: ['Reconocer la SECUENCIA: prodromo, psicosis, crisis, discinesias, disautonomia', 'Pedir anticuerpos en LIQUIDO, no solo en suero', 'Descartar infeccion antes de inmunosuprimir', 'Pedir electroencefalograma y buscar el cepillo delta extremo', 'Buscar TERATOMA con ecografia o resonancia pelvica', 'Iniciar primera linea sin esperar al anticuerpo', 'Evitar antipsicoticos y usar benzodiacepinas ante la agitacion', 'Vigilar la respiracion por el riesgo de hipoventilacion central', 'Escalar a segunda linea si no hay respuesta en 2 a 4 semanas', 'Extirpar el teratoma y anticipar una recuperacion lenta']
    },
    {
      nombre: 'Encefalitis limbica y anticuerpos de superficie',
      color: '#8a6a1f',
      definicion: 'Inflamacion de las estructuras limbicas, sobre todo hipocampo y amigdala, mediada por anticuerpos frente a antigenos de la superficie neuronal, con amnesia, crisis y sintomas psiquiatricos.',
      fisiopatologia: 'LGI1 es una proteina secretada que organiza la sinapsis excitatoria uniendo canales de potasio y receptores AMPA; el anticuerpo desorganiza esa union y produce hiperexcitabilidad, lo que explica las crisis muy breves y muy frecuentes y la amnesia. CASPR2 se localiza en el nervio periferico y en el sistema nervioso central, y de ahi la combinacion de neuromiotonia, dolor y sintomas centrales del sindrome de Morvan. Los anticuerpos frente a GABA-B suprimen una inhibicion tonica, lo que explica que las crisis dominen desde el principio y sean graves. En todos ellos el antigeno esta en la superficie, es accesible y el da&#241;o es potencialmente reversible.',
      epidemiologia: 'La encefalitis por anticuerpos LGI1 predomina en varones de edad avanzada y solo en una minoria se asocia a tumor. La asociada a CASPR2 se relaciona con timoma. La asociada a GABA-B se asocia con frecuencia a carcinoma microcitico de pulmon, y la asociada a AMPA a timoma, microcitico o cancer de mama.',
      factores_riesgo: ['Edad avanzada y sexo masculino para los anticuerpos LGI1', 'Tabaquismo, por el carcinoma microcitico asociado a GABA-B', 'Timoma para CASPR2 y AMPA', 'Miastenia gravis conocida, que puede coexistir con timoma', 'Enfermedad autoinmune previa', 'Retraso diagnostico, que en LGI1 se traduce en amnesia residual', 'Crisis breves atribuidas a tics, mioclonias o sincopes', 'Hiponatremia atribuida solo a diureticos', 'Neoplasia previa', 'Tratamiento con inhibidores del punto de control inmunitario'],
      clinica: 'Amnesia anterograda subaguda, crisis y sintomas psiquiatricos o del sue&#241;o. En LGI1, las CRISIS DISTONICAS FACIOBRAQUIALES son casi patognomonicas: contracciones de uno o dos segundos que afectan a la cara y al brazo del mismo lado, se repiten decenas de veces al dia y PRECEDEN en semanas al deterioro de memoria. Se acompa&#241;an de HIPONATREMIA. En CASPR2, neuromiotonia, dolor neuropatico e insomnio grave.',
      criterios_dx: 'Criterios de encefalitis limbica definida: inicio subagudo, alteracion bilateral en T2 y FLAIR restringida a temporales mediales, pleocitosis o electroencefalograma temporal, y exclusion de otras causas. El anticuerpo confirma el subtipo. Ver la Figura 2 de Definicion.',
      laboratorio: 'Panel de anticuerpos de SUPERFICIE en liquido y suero. SODIO, porque la hiponatremia es una pista barata y muy sugestiva en LGI1. Estudio microbiologico. Autoinmunidad sistemica y funcion tiroidea.',
      imagen: 'RESONANCIA con hiperintensidad en T2 y FLAIR en los lobulos temporales mediales, con frecuencia bilateral, que puede evolucionar a ATROFIA hipocampal si el tratamiento se retrasa. Tomografia con emision de positrones si la resonancia es normal. Cribado tumoral segun el anticuerpo.',
      complementarios: 'ELECTROENCEFALOGRAMA con actividad temporal. Conviene saber que las crisis distonicas faciobraquiales a menudo NO tienen correlato en el electroencefalograma de superficie, de modo que un registro normal no las descarta: el diagnostico es visual.',
      dx_diferencial: 'Encefalitis herpetica, que afecta a la misma region; crisis temporales de otra causa; demencia rapidamente progresiva; enfermedad de Creutzfeldt-Jakob; gliomatosis; sindrome de Wernicke; y en la hiponatremia, sus multiples causas habituales.',
      tx_medico: 'Correccion cuidadosa de la hiponatremia. Manejo de las crisis, teniendo en cuenta que las distonicas faciobraquiales responden POCO a los antiepilepticos y bien a la inmunoterapia, lo que es en si mismo un dato diagnostico.',
      tx_farmacologico: 'CORTICOIDES como primera linea, con muy buena respuesta en la encefalitis por anticuerpos LGI1, asociados o no a inmunoglobulinas o recambio plasmatico. Escalada a rituximab si no responde. Y tratamiento del tumor cuando existe.',
      tx_intervencionista: 'Timectomia si hay timoma. Recambio plasmatico. Tratamiento oncologico del carcinoma microcitico cuando se identifica.',
      criterios_uci: 'Estado epileptico, sobre todo en la asociada a anticuerpos frente a GABA-B, donde las crisis pueden ser graves y refractarias desde el inicio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar el sodio y las crisis. Comprobar la respuesta clinica precoz, que en LGI1 suele ser rapida con corticoides y ayuda a confirmar el diagnostico.',
      seguimiento_ambulatorio: 'Valoracion neuropsicologica, porque la AMNESIA RESIDUAL es la secuela mas frecuente y se relaciona con el retraso del tratamiento. Vigilancia de recaidas al reducir el corticoide y cribado tumoral periodico.',
      pronostico: 'Bueno si se trata pronto. El retraso deja amnesia persistente y atrofia hipocampal. Peor cuando hay tumor asociado, sobre todo carcinoma microcitico, donde el pronostico lo marca la neoplasia.',
      algoritmo: ['Sospecharla ante amnesia SUBAGUDA con crisis', 'Buscar crisis DISTONICAS FACIOBRAQUIALES, breves y muy repetidas', 'Mirar el SODIO', 'Pedir panel de anticuerpos de superficie en liquido y suero', 'Pedir resonancia buscando afectacion temporal medial bilateral', 'Pedir electroencefalograma, sabiendo que puede ser normal', 'Descartar encefalitis herpetica antes de inmunosuprimir', 'Iniciar corticoides, de respuesta habitualmente buena en LGI1', 'Buscar timoma en CASPR2 y microcitico en GABA-B', 'Valorar la memoria en el seguimiento y vigilar recaidas']
    },
    {
      nombre: 'Sindromes paraneoplasicos y anticuerpos intracelulares',
      color: '#8c3a34',
      definicion: 'Sindromes neurologicos mediados por una respuesta inmunitaria contra antigenos neuronales INTRACELULARES expresados por un tumor, en los que el anticuerpo es un marcador y no el agente del da&#241;o.',
      fisiopatologia: 'El tumor expresa de forma aberrante proteinas neuronales. El sistema inmunitario las reconoce y monta una respuesta que, al ser el antigeno intracelular, es fundamentalmente de LINFOCITOS T CITOTOXICOS. Esos linfocitos destruyen neuronas, y esa destruccion es en gran medida IRREVERSIBLE. De ahi las tres consecuencias practicas del grupo: la respuesta a la inmunoterapia es pobre, el objetivo terapeutico principal es el TUMOR, y el resultado depende de lo pronto que se encuentre, porque las neuronas perdidas no se recuperan.',
      epidemiologia: 'Los anticuerpos anti-Hu se asocian sobre todo a carcinoma microcitico de pulmon; los anti-Ma2 a tumor de celulas germinales del testiculo en varones jovenes; los anti-CV2 a microcitico y timoma; y los anti-anfifisina a mama y microcitico. El sindrome neurologico PRECEDE al diagnostico del tumor en una proporcion importante de los casos.',
      factores_riesgo: ['Tabaquismo, por el carcinoma microcitico de pulmon', 'Edad avanzada', 'Perdida de peso y sintomas generales no explicados', 'Antecedente de neoplasia', 'Varon joven con anticuerpos anti-Ma2, por el tumor testicular', 'Tratamiento con inhibidores del punto de control inmunitario', 'Cribado tumoral inicial negativo dado por definitivo', 'Ausencia de tomografia con emision de positrones cuando la imagen basal es normal', 'Retraso en el diagnostico del tumor', 'Afectacion de varios niveles del sistema nervioso no reconocida como una unidad'],
      clinica: 'Encefalitis limbica, pero con frecuencia acompa&#241;ada de afectacion de OTROS niveles, lo que es en si mismo una pista: neuropatia sensitiva subaguda, degeneracion cerebelosa, encefalitis del troncoencefalo, opsoclono-mioclono, sindrome rigido y disautonomia grave. Suele haber sintomas generales y perdida de peso. En los anticuerpos anti-Ma2 son caracteristicas la afectacion diencefalica con narcolepsia y la paresia de la mirada vertical.',
      criterios_dx: 'Criterios actualizados de sindrome neurologico paraneoplasico, que combinan el fenotipo clinico, el tipo de anticuerpo y la presencia de tumor en una puntuacion graduada de posible a definido.',
      laboratorio: 'Panel de anticuerpos INTRACELULARES en suero y liquido: anti-Hu, anti-Ma2, anti-CV2, anti-anfifisina, anti-Ri y anti-Yo. Liquido con pleocitosis linfocitaria y bandas oligoclonales. Marcadores tumorales, cuya normalidad NO descarta nada.',
      imagen: 'Resonancia craneal, que puede ser normal o mostrar afectacion limbica o de tronco. CRIBADO TUMORAL con tomografia de torax, abdomen y pelvis; TOMOGRAFIA CON EMISION DE POSITRONES si la imagen basal es negativa; y ecografia testicular en el varon joven con anticuerpos anti-Ma2. Mamografia y estudio ginecologico segun el perfil.',
      complementarios: 'Electroneurograma si hay neuropatia sensitiva. Electroencefalograma. Y, sobre todo, un PLAN ESCRITO de repeticion del cribado tumoral, porque la clave del caso suele estar en el tumor que aun no ha aparecido.',
      dx_diferencial: 'Encefalitis autoinmune por anticuerpos de superficie, que se trata distinto y responde mejor; metastasis y carcinomatosis meningea; toxicidad neurologica de la quimioterapia; encefalitis por inhibidores del punto de control inmunitario; deficits nutricionales; e infecciones oportunistas.',
      tx_medico: 'Coordinacion estrecha con oncologia desde el primer dia. Manejo sintomatico del dolor, de las crisis, de la disautonomia y de la ataxia. Rehabilitacion. Y una comunicacion honesta sobre las expectativas, porque el deficit establecido suele ser permanente.',
      tx_farmacologico: 'Inmunoterapia con respuesta habitualmente POBRE, aunque se intenta porque puede estabilizar el cuadro: corticoides, inmunoglobulinas, recambio plasmatico y, en casos seleccionados, rituximab o ciclofosfamida. El objetivo realista suele ser detener la progresion, no revertir el deficit.',
      tx_intervencionista: 'TRATAMIENTO DEL TUMOR, que es la intervencion que mas influye en el curso neurologico. Extirpacion, quimioterapia o radioterapia segun corresponda.',
      criterios_uci: 'Disautonomia grave, insuficiencia respiratoria, estado epileptico y complicaciones del propio tumor o de su tratamiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No cerrar el caso con un cribado negativo. Ampliar con tomografia con emision de positrones y planificar por escrito la repeticion, porque el tumor puede aparecer meses despues del sindrome neurologico.',
      seguimiento_ambulatorio: 'REPETIR el cribado cada 4 a 6 meses durante al menos 2 a&#241;os en los anticuerpos de alto riesgo. Seguimiento conjunto con oncologia, rehabilitacion y manejo sintomatico.',
      pronostico: 'Peor que el de los anticuerpos de superficie. El deficit neurologico establecido suele ser permanente y el pronostico vital lo marca el tumor. Encontrarlo pronto es lo que mas puede cambiar, tanto en lo oncologico como en lo neurologico.',
      algoritmo: ['Sospecharlo si hay afectacion de VARIOS niveles del sistema nervioso', 'Buscar perdida de peso y sintomas generales', 'Pedir panel de anticuerpos intracelulares en suero y liquido', 'Hacer cribado tumoral con tomografia de torax, abdomen y pelvis', 'A&#241;adir tomografia con emision de positrones si la imagen es negativa', 'Pedir ecografia testicular en varon joven con anti-Ma2', 'Coordinar con oncologia desde el primer dia', 'Intentar inmunoterapia sabiendo que la respuesta suele ser pobre', 'Tratar el TUMOR, que es lo que mas cambia el curso', 'Planificar por escrito la repeticion del cribado cada 4 a 6 meses']
    },
    {
      nombre: 'Inmunoterapia: primera linea y escalada',
      color: '#3f6b52',
      definicion: 'Estrategia terapeutica escalonada cuya precocidad y cuya escalada oportuna constituyen los dos factores pronosticos que dependen del equipo que atiende.',
      fisiopatologia: 'Los corticoides reducen la inflamacion y la permeabilidad de la barrera; las inmunoglobulinas neutralizan anticuerpos circulantes y modulan la respuesta; el recambio plasmatico retira anticuerpos del compartimento vascular, aunque llega peor al intratecal. Cuando eso no basta se pasa a farmacos que actuan sobre la fabrica: el rituximab deplecciona linfocitos B, y la ciclofosfamida act&#250;a sobre linfocitos B y T. Esa progresion explica por que la segunda linea funciona en pacientes que no respondieron a la primera y por que su retraso cuesta caro.',
      epidemiologia: 'En la cohorte de referencia de encefalitis por anticuerpos anti-receptor de NMDA, los pacientes que no respondian a la primera linea y recibian segunda linea alcanzaban mejores desenlaces que quienes no la recibian, y con menos recaidas. Y el retraso terapeutico figura de forma consistente entre los predictores de mala evolucion.',
      factores_riesgo: ['Esperar al resultado de los anticuerpos para empezar', 'Confundir la lentitud de la recuperacion con un fracaso terapeutico', 'Retrasar la escalada a segunda linea', 'No haber descartado la infeccion antes de inmunosuprimir', 'No tratar el tumor asociado', 'Suspender el corticoide demasiado rapido, con riesgo de recaida', 'No prevenir las complicaciones de la inmunosupresion', 'Reactivacion de hepatitis B con rituximab si no se criba', 'Infertilidad asociada a ciclofosfamida no informada', 'Falta de un plan escrito de reevaluacion'],
      clinica: 'La decision de escalar se toma con la CLINICA y con el tiempo, no con el titulo de anticuerpos, que no se correlaciona bien con la actividad. Se define una situacion funcional de partida y se reevalua de forma estructurada a las 2 a 4 semanas.',
      criterios_dx: 'No aplica: es la fase terapeutica. La regla es iniciar la primera linea con criterios clinicos y escalar si no hay respuesta en 2 a 4 semanas. Ver la Figura 3 de Definicion.',
      laboratorio: 'Antes de inmunosuprimir: serologias de hepatitis B y C, VIH, cribado de tuberculosis latente e inmunoglobulinas. Durante: hemograma, funcion renal y hepatica, glucemia y vigilancia de infecciones.',
      imagen: 'Radiografia de torax previa. Resonancia de control si la evolucion no es la esperada, buscando una complicacion o un diagnostico alternativo.',
      complementarios: 'Escala funcional documentada al inicio y en cada reevaluacion. Valoracion neuropsicologica. Electroencefalograma si el nivel de conciencia no mejora, para descartar crisis no convulsivas antes de asumir un fracaso terapeutico.',
      dx_diferencial: 'Ante la ausencia de respuesta, replantear: diagnostico erroneo, infeccion no descartada, tumor no tratado, crisis no convulsivas, complicacion de la inmunosupresion, o simplemente una recuperacion mas lenta de lo esperado, que es lo mas frecuente.',
      tx_medico: 'Profilaxis gastrica y osea con corticoides prolongados, vacunacion previa cuando sea posible, profilaxis de infecciones oportunistas segun el esquema, y rehabilitacion desde fases precoces.',
      tx_farmacologico: 'PRIMERA LINEA: corticoides a dosis alta, inmunoglobulinas o recambio plasmatico, solos o combinados. SEGUNDA LINEA: rituximab o ciclofosfamida. Mantenimiento con inmunosupresor oral en casos seleccionados, sobre todo si hay recaidas o anticuerpos de alto riesgo de recurrencia.',
      tx_intervencionista: 'Recambio plasmatico. Extirpacion del tumor, que forma parte del tratamiento. Terapia electroconvulsiva en la catatonia resistente.',
      criterios_uci: 'Los del cuadro de base. La inmunoterapia no se retrasa por el ingreso en criticos: al contrario, la gravedad es un argumento para tratar antes y con mas intensidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion estructurada a las 2 a 4 semanas con una escala funcional. Si no hay mejoria, ESCALAR y no esperar. Vigilar infecciones, hiperglucemia y complicaciones de la inmunosupresion.',
      seguimiento_ambulatorio: 'Retirada lenta del corticoide, vigilancia de recaidas, valoracion de mantenimiento inmunosupresor, rehabilitacion cognitiva y cribado tumoral periodico.',
      pronostico: 'Muy dependiente de estas decisiones. Tratar pronto y escalar a tiempo son las dos variables que estan en manos del equipo, y ambas figuran entre los predictores de la situacion funcional al a&#241;o.',
      algoritmo: ['Descartar razonablemente la infeccion', 'Documentar la situacion funcional de partida', 'Iniciar primera linea SIN esperar a los anticuerpos', 'Tratar el tumor si se ha identificado', 'Cribar hepatitis B, VIH y tuberculosis antes de la segunda linea', 'Reevaluar de forma estructurada a las 2 a 4 semanas', 'Descartar crisis no convulsivas antes de asumir un fracaso', 'ESCALAR a rituximab o ciclofosfamida si no hay respuesta', 'Retirar el corticoide despacio para evitar recaidas', 'Anticipar a la familia que la recuperacion sera lenta']
    },
    {
      nombre: 'Complicaciones y los errores que mas cuestan',
      color: '#3d5a73',
      definicion: 'Conjunto de complicaciones agudas y de trampas diagnosticas y terapeuticas que determinan buena parte de los desenlaces evitables de esta enfermedad.',
      fisiopatologia: 'La afectacion de estructuras limbicas, diencefalicas y del tronco explica las complicaciones agudas: las crisis y el estado epileptico por la hiperexcitabilidad cortical, la DISAUTONOMIA por la afectacion de los centros autonomos, y la HIPOVENTILACION CENTRAL por la del control respiratorio bulbar. La catatonia y la agitacion tienen sustrato en la disfuncion de circuitos frontosubcorticales, y esa disfuncion es la razon de la sensibilidad aumentada a los antipsicoticos: bloquear todavia mas la transmision dopaminergica en un cerebro ya desregulado puede desencadenar rigidez, fiebre e inestabilidad.',
      epidemiologia: 'Una proporcion relevante de los casos graves ingresa en unidad de criticos, y ese ingreso es una de las cinco variables de la escala NEOS. Las recaidas ocurren en una minoria pero pueden aparecer a&#241;os despues, lo que obliga a mantener el seguimiento y a educar al paciente y a la familia sobre los sintomas de alarma.',
      factores_riesgo: ['Diagnostico inicial erroneo como cuadro psiquiatrico primario', 'Anticuerpos pedidos solo en suero', 'Inmunoterapia retrasada esperando el resultado del anticuerpo', 'Escalada a segunda linea demorada', 'Uso de antipsicoticos sin cautela en la encefalitis por anticuerpos anti-NMDA', 'Crisis no convulsivas no buscadas ante un paciente que no despierta', 'Cribado tumoral no repetido', 'Retirada rapida del corticoide', 'Empeoramiento tras encefalitis herpetica atribuido a recaida virica', 'Ausencia de plan de seguimiento a largo plazo'],
      clinica: 'Estado epileptico, con frecuencia refractario y a veces NO CONVULSIVO. Disautonomia con oscilaciones de la tension y de la frecuencia cardiaca, hipertermia y arritmias. Hipoventilacion central. Catatonia y agitacion grave. Y, mas adelante, deficit de memoria, alteracion conductual, epilepsia residual y fatiga.',
      criterios_dx: 'No aplica: son complicaciones y errores. El principio general es que un paciente que no mejora obliga a replantear activamente, no a esperar.',
      laboratorio: 'Vigilancia de iones, funcion renal, creatina cinasa (por la rigidez y el sindrome similar al neuroleptico maligno) y marcadores de infeccion, que es la complicacion mas frecuente de la inmunosupresion.',
      imagen: 'Repetir la resonancia si el curso no encaja, buscando complicaciones o un diagnostico alternativo que se haya pasado por alto.',
      complementarios: 'ELECTROENCEFALOGRAMA, y con monitorizacion continua si el nivel de conciencia no mejora: las crisis no convulsivas son una causa tratable de bajo nivel de conciencia que se pasa por alto si no se busca. Monitorizacion cardiaca por la disautonomia.',
      dx_diferencial: 'Del empeoramiento: progresion de la enfermedad, infeccion nosocomial, crisis no convulsivas, efecto adverso farmacologico, sindrome similar al neuroleptico maligno, y trombosis o complicacion de la inmovilidad.',
      tx_medico: 'Manejo en criticos cuando procede. BENZODIACEPINAS para la agitacion y la catatonia, evitando los antipsicoticos en la encefalitis por anticuerpos anti-receptor de NMDA. Prevencion de trombosis, de ulceras por presion y de la desnutricion. Y apoyo psicologico a la familia, que asiste a un cuadro largo y desconcertante.',
      tx_farmacologico: 'Antiepilepticos y anestesicos segun el estado epileptico. Tratamiento sintomatico de la disautonomia. Y la propia inmunoterapia, que es el tratamiento de fondo de casi todas estas complicaciones.',
      tx_intervencionista: 'Ventilacion mecanica en la hipoventilacion central. Terapia electroconvulsiva en la catatonia resistente. Y extirpacion del tumor cuando se identifica.',
      criterios_uci: 'Estado epileptico, disautonomia grave, hipoventilacion central, bajo nivel de conciencia y catatonia con compromiso vital.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante un paciente que no mejora, revisar de forma sistematica: diagnostico, infeccion, tumor, crisis no convulsivas, farmacos y tiempo transcurrido. Y recordar que la lentitud de la recuperacion es lo mas frecuente y no siempre significa fracaso.',
      seguimiento_ambulatorio: 'Rehabilitacion cognitiva y conductual prolongada, control de la epilepsia residual, cribado tumoral periodico, vigilancia de recaidas y educacion del paciente y de la familia sobre los sintomas de alarma.',
      pronostico: 'La mayor parte de los desenlaces evitables de esta enfermedad se explican por estos errores: retraso diagnostico, muestra equivocada, tratamiento tardio, escalada demorada y cribado tumoral no repetido.',
      algoritmo: ['Ante un paciente que no despierta, pedir ELECTROENCEFALOGRAMA', 'Monitorizar por la disautonomia y vigilar la respiracion', 'Usar benzodiacepinas y evitar antipsicoticos en la anti-NMDA', 'Pensar en terapia electroconvulsiva si la catatonia resiste', 'Revisar si la infeccion se descarto bien antes de inmunosuprimir', 'Comprobar que el cribado tumoral se ha repetido', 'Comprobar que la escalada no se ha demorado', 'No confundir recuperacion lenta con fracaso terapeutico', 'Retirar el corticoide despacio', 'Educar al paciente y a la familia sobre las recaidas']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este tema se juega en dos decisiones que dependen por completo del equipo: tratar PRONTO, con criterios clinicos y sin esperar a los anticuerpos, y ESCALAR a segunda linea cuando la primera no funciona. La tercera es no cerrar nunca el caso con un cribado tumoral negativo.',
    parametros: ['Sospecharla ante cualquier cuadro SUBAGUDO de memoria, conducta o psiquiatrico', 'Pedir los anticuerpos en LIQUIDO y en suero, nunca solo en suero', 'Descartar razonablemente la infeccion antes de inmunosuprimir', 'Iniciar la primera linea SIN esperar al resultado del anticuerpo', 'Documentar la situacion funcional de partida para poder comparar', 'Reevaluar de forma estructurada a las 2 a 4 semanas', 'ESCALAR a segunda linea si no hay respuesta', 'Buscar el teratoma con prueba pelvica dirigida, no solo con tomografia', 'Repetir el cribado tumoral cada 4 a 6 meses en los de alto riesgo', 'Evitar antipsicoticos ante la agitacion de la encefalitis anti-NMDA', 'Pedir electroencefalograma si el paciente no despierta', 'Anticipar que la recuperacion sera lenta y no confundirla con fracaso'],
    criterios_uci_general: 'Estado epileptico, con frecuencia refractario y a veces no convulsivo. Disautonomia grave con inestabilidad hemodinamica, hipertermia y arritmias. Hipoventilacion central, especialmente en la encefalitis por anticuerpos anti-receptor de NMDA. Bajo nivel de conciencia con incapacidad para proteger la via aerea. Y catatonia con compromiso vital. El ingreso en criticos es ademas una de las cinco variables de la escala NEOS.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema. La inmunoterapia y el tratamiento del tumor son las intervenciones que modifican el curso.',
    prevencion: 'Primaria: no es una enfermedad prevenible, pero si lo es una parte de sus desenlaces. La vigilancia neurologica tras una ENCEFALITIS HERPETICA permite detectar la encefalitis autoinmune posherpetica, y la deteccion precoz del tumor en los sindromes paraneoplasicos cambia el curso de ambas enfermedades. Secundaria: cribado tumoral basal en todos y REPETIDO cada 4 a 6 meses durante al menos 2 a&#241;os en los anticuerpos de alto riesgo; cribado de hepatitis B, VIH y tuberculosis antes de inmunosuprimir; y educacion del paciente y de la familia sobre los sintomas de recaida, que puede aparecer a&#241;os despues. Terciaria: rehabilitacion cognitiva y conductual prolongada, control de la epilepsia residual, retirada lenta del corticoide y valoracion de inmunosupresion de mantenimiento en los casos con recaidas.'
  }
};

export const compCites = {
  'Cuando sospecharla: el marco diagnostico': [1, 3, 10, 15],
  'Encefalitis por anticuerpos anti-receptor de NMDA': [2, 4, 5, 12],
  'Encefalitis limbica y anticuerpos de superficie': [6, 7, 14],
  'Sindromes paraneoplasicos y anticuerpos intracelulares': [8, 9, 13],
  'Inmunoterapia: primera linea y escalada': [2, 10, 16],
  'Complicaciones y los errores que mas cuestan': [11, 16]
};
export const estigmasTitulo = 'Pistas que cambian el diagnostico';
export const estigmas = [
  { s: 'Instauracion en menos de tres meses', p: 'La puerta de entrada', photo: null, desc: 'Es el dato que separa este tema de la demencia y del trastorno psiquiatrico primario. Un cuadro de memoria, conducta o psiquiatrico que se instala en semanas obliga a estudiarlo, porque a diferencia de aquellos es TRATABLE.' },
  { s: 'Psicosis de novo en alguien sin antecedentes', p: 'Anti-NMDA', photo: null, desc: 'Es el debut mas frecuente de la encefalitis por anticuerpos anti-receptor de NMDA y el motivo por el que muchos pacientes pasan primero por salud mental. Buscar despues crisis, discinesias y disautonomia confirma la secuencia.' },
  { s: 'Discinesias orofaciales', p: 'Anti-NMDA', photo: null, desc: 'Movimientos involuntarios de boca y lengua, muy caracteristicos, que aparecen cuando ya hay deterioro del nivel de conciencia. Su presencia en un paciente joven con psicosis reciente hace el diagnostico casi evidente.' },
  { s: 'Crisis distonicas faciobraquiales', p: 'Anti-LGI1', photo: null, desc: 'Contracciones de uno o dos segundos que afectan a la cara y al brazo del mismo lado y se repiten decenas de veces al dia. PRECEDEN en semanas a la amnesia, responden poco a los antiepilepticos y bien a la inmunoterapia.' },
  { s: 'Hiponatremia con amnesia subaguda', p: 'Anti-LGI1', photo: null, desc: 'Una pista barata y muy sugestiva que se atribuye con frecuencia a los diureticos. En un varon mayor con amnesia de semanas y crisis breves repetidas, el diagnostico esta practicamente escrito.' },
  { s: 'Neuromiotonia con insomnio y dolor', p: 'Anti-CASPR2', photo: null, desc: 'Junto con la disautonomia forma el sindrome de Morvan. Refleja que el antigeno esta tanto en el nervio periferico como en el sistema nervioso central, y obliga a buscar un TIMOMA.' },
  { s: 'Crisis graves desde el primer dia', p: 'Anti-GABA-B', photo: null, desc: 'En esta encefalitis limbica las crisis dominan el cuadro desde el inicio y pueden ser refractarias. Obliga a buscar pronto un CARCINOMA MICROCITICO de pulmon, que es el tumor asociado.' },
  { s: 'Afectacion de varios niveles a la vez', p: 'Anticuerpos intracelulares', photo: null, desc: 'Encefalitis limbica junto con neuropatia sensitiva, cerebelo o tronco es el perfil de los sindromes paraneoplasicos clasicos. Ahi el anticuerpo es solo un marcador y lo que cambia el curso es encontrar el tumor.' },
  { s: 'Resonancia normal', p: 'No descarta nada', photo: null, desc: 'Una proporcion importante de las encefalitis por anticuerpos anti-receptor de NMDA tiene resonancia normal. Es una fuente habitual de retraso diagnostico y una de las razones para recurrir a la tomografia con emision de positrones.' },
  { s: 'Anticuerpos pedidos solo en suero', p: 'El error de la muestra', photo: null, desc: 'Los anti-receptor de NMDA se determinan en LIQUIDO. Un suero negativo no descarta y un suero positivo aislado no confirma. La muestra correcta forma parte del diagnostico tanto como la clinica.' },
  { s: 'Empeora tras una encefalitis herpetica', p: 'Autoinmune posherpetica', photo: null, desc: 'Semanas despues de una encefalitis por virus herpes puede aparecer una encefalitis autoinmune, con frecuencia por anticuerpos anti-receptor de NMDA. Atribuirlo a una recaida virica retrasa un tratamiento que es distinto.' },
  { s: 'Cribado tumoral negativo', p: 'No cierra el caso', photo: null, desc: 'El sindrome neurologico puede PRECEDER al tumor en meses. Por eso el cribado se repite cada 4 a 6 meses durante al menos 2 a&#241;os en los anticuerpos de alto riesgo, con un plan escrito y no de memoria.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de encefalitis autoinmune posible (calculadora disponible)': [1],
  'Cribado tumoral segun el anticuerpo (calculadora disponible)': [13, 8],
  'Escala NEOS (calculadora disponible)': [5],
  'Criterios de encefalitis probable por anticuerpos anti-receptor de NMDA': [1, 2],
  'Criterios de sindrome neurologico paraneoplasico': [8, 9],
  'Escala de Rankin modificada': [2]
};
export const escalaCalc = {
  'Criterios de encefalitis autoinmune posible (calculadora disponible)': 'criterios-graus',
  'Cribado tumoral segun el anticuerpo (calculadora disponible)': 'cribado-tumoral-autoinmune',
  'Escala NEOS (calculadora disponible)': 'neos'
};
export const compGroups = [
  { name: 'El marco', items: ['Cuando sospecharla: el marco diagnostico'] },
  { name: 'Anticuerpos de superficie', items: ['Encefalitis por anticuerpos anti-receptor de NMDA', 'Encefalitis limbica y anticuerpos de superficie'] },
  { name: 'Anticuerpos intracelulares', items: ['Sindromes paraneoplasicos y anticuerpos intracelulares'] },
  { name: 'Tratar y vigilar', items: ['Inmunoterapia: primera linea y escalada', 'Complicaciones y los errores que mas cuestan'] }
];
export const complicacionesIntro = 'La primera ficha es el marco: los criterios clinicos que permiten reconocer el cuadro y, sobre todo, tratarlo sin esperar a unos anticuerpos que tardan semanas. Las dos siguientes son los anticuerpos de SUPERFICIE, que son patogenicos, reversibles y responden bien: la encefalitis anti-NMDA, con su curso por fases muy reconocible, y la encefalitis limbica, con dos pistas casi diagnosticas que se pasan por alto a diario. La cuarta es el grupo INTRACELULAR, donde el anticuerpo es solo un marcador y lo que de verdad cambia el curso es encontrar el tumor. Y las dos ultimas son el tratamiento y la vigilancia, que es donde se juegan la mayoria de los desenlaces evitables de esta enfermedad.';
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
  root: { title: 'CUADRO SUBAGUDO DE MEMORIA, CONDUCTA O PSIQUIATRICO', color: '#2e5c7a', target: 'definicion' },
  branches: [
    { title: 'SOSPECHARLA', sub: 'Menos de tres meses', color: '#2e5c7a', target: 'clasificacion', leaves: [
      { title: 'Tres criterios clinicos', sub: 'Permiten tratar sin esperar', color: '#2e5c7a', target: 'clasificacion' },
      { title: 'Anticuerpos en LIQUIDO', sub: 'El suero solo enga&#241;a', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Descartar infeccion', sub: 'Antes de inmunosuprimir', color: '#7a3f2e', target: 'complicaciones' },
      { title: 'Resonancia normal', sub: 'No descarta nada', color: '#3d5a73', target: 'diagnostico' }
    ] },
    { title: 'DONDE ESTA EL ANTIGENO', sub: 'La pregunta que ordena todo', color: '#6b4a8c', target: 'complicaciones', leaves: [
      { title: 'Superficie', sub: 'Reversible, responde bien', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Intracelular', sub: 'Buscar el tumor', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Psicosis y discinesias', sub: 'Anti-NMDA, buscar teratoma', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Crisis breves e hiponatremia', sub: 'Anti-LGI1', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'TRATAR Y VIGILAR', sub: 'Pronto y escalando', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Primera linea ya', sub: 'Sin esperar al anticuerpo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Escalar a las 2 a 4 semanas', sub: 'Si no hay respuesta', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Extirpar el tumor', sub: 'Es parte del tratamiento', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Repetir el cribado', sub: 'Un negativo no cierra nada', color: '#3d5a73', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 14], no_invasivos: [1, 5, 13], imagen: [1, 3] };
export const clasificacionCite = [1, 5, 8];
export const seguimientoCite = [2, 10, 11];
