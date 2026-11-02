// topics/encefalitis-autoinmune/content.js: Encefalitis autoinmune.
// Cubre el item "Encefalitis autoinmune" del cluster "Alteracion de conciencia y enfermedad
// neuromuscular" (bloque XII, Neurologia) del temario.
//
// DELIMITACION frente a `meningoencefalitis-infecciosa`: alli el mecanismo es infeccioso y el
// tiempo se mide en HORAS. Aqui el mecanismo es inmunitario y el tiempo se mide en SEMANAS, pero
// el retraso tambien se paga: la inmunoterapia precoz es el factor pronostico modificable.
// Frente a `deterioro-cognitivo-demencias`: alli el deterioro es de años; el perfil SUBAGUDO,
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
  subtitulo: 'Módulo 66 · Medicina Interna',
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
    <strong style="color:#2e5c7a;">El dato que abre la puerta a este diagnóstico es el TIEMPO.</strong> <span style="color:var(--ink-dim);">Un cuadro de memoria, conducta o psiquiátrico que se instaura en MENOS DE TRES MESES no es una demencia ni un trastorno psiquiátrico primario mientras no se demuestre.</span>
  </div>
  <div style="border:1.5px solid #2e5c7a;border-radius:8px;padding:6px 9px;background:#2e5c7a08;margin-bottom:6px;">
    <div style="font-weight:700;color:#2e5c7a;margin-bottom:3px;">ENCEFALITIS AUTOINMUNE POSIBLE: TRES CONDICIONES, Y LAS TRES HACEN FALTA</div>
    <div style="color:var(--ink-dim);line-height:1.7;">
      <strong style="color:var(--ink);">1.</strong> Inicio SUBAGUDO, en menos de 3 meses, de déficit de memoria de trabajo, alteración del estado mental o síntomas PSIQUIÁTRICOS.<br>
      <strong style="color:var(--ink);">2.</strong> Al menos UNO de estos cuatro: focalidad nueva del sistema nervioso central; CRISIS no explicadas por una epilepsia previa; PLEOCITOSIS en el líquido; o resonancia sugestiva de encefalitis.<br>
      <strong style="color:var(--ink);">3.</strong> Exclusión razonable de otras causas, que NO es un trámite: infección, tóxico, metabólico, vascular, neoplásico y psiquiátrico primario.
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">PARA QUE SIRVE ESTE MARCO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Para <strong style="color:var(--ink);">TRATAR SIN ESPERAR</strong> a los anticuerpos, que tardan días o semanas. Los criterios son deliberadamente clínicos: permiten iniciar la inmunoterapia sobre bases razonables, y ese adelanto es el factor pronóstico que si esta en nuestras manos.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">BANDERAS QUE OBLIGAN A PENSARLO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Psicosis <strong style="color:var(--ink);">de novo</strong> en alguien sin antecedentes; estado epiléptico <strong style="color:var(--ink);">refractario de inicio recién</strong>; crisis muy breves y muy repetidas; movimientos anormales; <strong style="color:var(--ink);">HIPONATREMIA</strong> con crisis; y un empeoramiento tras una encefalitis herpetica.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Y una regla de laboratorio que decide diagnósticos.</strong> Los anticuerpos anti-receptor de NMDA se determinan en <strong>LÍQUIDO CEFALORRAQUÍDEO</strong>. Pedirlos solo en suero produce falsos negativos y también falsos positivos, de modo que un suero negativo NO descarta y un suero positivo aislado NO confirma. La muestra correcta forma parte del diagnóstico tanto como la clínica.
  </div>
</div>`;

const anticuerposHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2e5c7a;border-radius:8px;padding:5px 9px;background:#2e5c7a12;margin-bottom:6px;">
    <strong style="color:#2e5c7a;">Toda la lista de anticuerpos se ordena con una sola pregunta:</strong> <span style="color:var(--ink-dim);">esta el antígeno en la SUPERFICIE de la neurona o DENTRO de ella? De esa respuesta dependen el mecanismo, la respuesta al tratamiento y el pronóstico.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">SUPERFICIE</div>
      <div style="color:var(--ink-dim);line-height:1.6;">NMDA, LGI1, CASPR2, GABA-B, AMPA. El anticuerpo es <strong style="color:var(--ink);">PATOGÉNICO</strong>: se une al receptor y lo desplaza, y esa unión es reversible. Por eso <strong style="color:#3f6b52;">RESPONDEN a la inmunoterapia</strong> y el pronóstico es bueno si se trata pronto. El tumor puede existir pero no siempre.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">INTRACELULAR</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hu, Ma2, CV2, anfifisina. El anticuerpo es solo un <strong style="color:var(--ink);">MARCADOR</strong>: el daño lo hacen los linfocitos T y es una destrucción neuronal. <strong style="color:#8c3a34;">RESPONDEN MAL</strong> a la inmunoterapia. Son casi siempre PARANEOPLÁSICOS, y lo que más cambia el curso es tratar el TUMOR.</div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#6b4a8c;">NMDA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mujer joven, pródromo seudogripal, debut <strong style="color:var(--ink);">PSIQUIÁTRICO</strong>, después crisis, DISCINESIAS orofaciales, disautonomía e hipoventilación central. Buscar <strong>TERATOMA de ovario</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">LGI1</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Varón mayor, encefalitis límbica con amnesia, <strong style="color:var(--ink);">HIPONATREMIA</strong> y crisis <strong style="color:var(--ink);">DISTÓNICAS FACIOBRAQUIALES</strong>: segundos de duración, decenas al dia, que se confunden con tics o mioclonías. Rara vez tumoral.</div>
    </div>
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#2e6b6b;">CASPR2</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Neuromiotonia, dolor neuropático, insomnio grave y disautonomía, que juntos forman el <strong style="color:var(--ink);">síndrome de Morvan</strong>. Buscar <strong>TIMOMA</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:70px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">GABA-B</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Encefalitis límbica en la que las <strong style="color:var(--ink);">CRISIS dominan desde el principio</strong> y son graves. Buscar <strong>CARCINOMA MICROCITICO de pulmón</strong>, y buscarlo pronto.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">De ahi sale la consecuencia práctica.</strong> Con anticuerpos de SUPERFICIE, la prioridad es la inmunoterapia y hacerla pronto. Con anticuerpos INTRACELULARES, la prioridad es <strong>ENCONTRAR EL TUMOR</strong>: el síndrome neurológico puede preceder al cáncer en meses, de modo que un cribado negativo no cierra el caso y hay que REPETIRLO de forma periódica.
  </div>
</div>`;

const tratamientoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Los dos factores pronósticos que dependen del equipo son los mismos siempre:</strong> <span style="color:var(--ink-dim);">tratar PRONTO y ESCALAR a segunda línea sin demorarse cuando la primera no funciona.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1a LÍNEA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CORTICOIDES</strong> a dosis alta, <strong style="color:var(--ink);">INMUNOGLOBULINAS</strong> o <strong style="color:var(--ink);">RECAMBIO PLASMÁTICO</strong>, solos o combinados. Se inician con criterios clínicos, SIN esperar al resultado de los anticuerpos, y siempre tras haber descartado razonablemente la infección.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">2a LÍNEA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">RITUXIMAB</strong> o <strong style="color:var(--ink);">CICLOFOSFAMIDA</strong>. La escalada precoz cuando la primera línea no responde se asocia a mejor situación funcional y a menos recaídas. Retrasarla esperando una mejoría que no llega es de los errores que más cuestan.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">TUMOR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Su <strong style="color:var(--ink);">EXTIRPACION</strong> forma parte del tratamiento, no es un asunto aparte. En la encefalitis por anticuerpos anti-NMDA, retirar el teratoma mejora el pronóstico y reduce las recaídas.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">La recuperación es LENTA, y hay que decirlo.</strong> Puede llevar muchos meses y sigue un orden aproximadamente inverso al de la instauración: primero se recuperan la disautonomía y el nivel de conciencia, después los movimientos y las crisis, y al final la conducta y la memoria. Interpretar esa lentitud como fracaso lleva a escalar sin motivo o a abandonar el tratamiento.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Cuidado con los antipsicóticos.</strong> En la encefalitis por anticuerpos anti-NMDA hay una sensibilidad aumentada: pueden producir rigidez, fiebre y un cuadro que imita al síndrome neuroléptico maligno. Ante la agitación y la catatonia de estos pacientes se prefieren las BENZODIACEPINAS, y la catatonia resistente responde a la terapia electroconvulsiva.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La encefalitis autoinmune es una inflamación del encéfalo mediada por el sistema inmunitario, con o sin tumor asociado, que se presenta como un cuadro <strong>subagudo</strong> de memoria, conducta, síntomas psiquiátricos o crisis. Su importancia práctica es doble: se confunde con facilidad con un trastorno psiquiátrico primario o con una demencia rápida, y a diferencia de esos dos es <strong>tratable</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: cuando sospecharla.</strong></p>
<p style="margin:0 0 12px;">Lo que abre la puerta es el tiempo. Un cuadro de memoria, conducta o psiquiátrico instaurado en <strong>menos de tres meses</strong> no es una demencia ni un trastorno psiquiátrico primario mientras no se demuestre. Los criterios clínicos de encefalitis autoinmune posible están diseñados a propósito para poder <strong>tratar sin esperar</strong> a unos anticuerpos que tardan días o semanas.</p>
${figBlock('Figura 1', 'Cuando sospecharla: los criterios que permiten tratar sin esperar', sospechaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el mapa de anticuerpos.</strong></p>
<p style="margin:0 0 12px;">Toda la lista se ordena con una sola pregunta: el antígeno esta en la <strong>superficie</strong> de la neurona o <strong>dentro</strong> de ella. Los de superficie son patogénicos, reversibles y responden a la inmunoterapia. Los intracelulares son marcadores de un daño mediado por linfocitos T, responden mal y son casi siempre paraneoplásicos, de modo que alli lo que cambia el curso es encontrar y tratar el tumor.</p>
${figBlock('Figura 2', 'Superficie o intracelular: la pregunta que ordena toda la lista', anticuerposHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el tratamiento y su ritmo.</strong></p>
<p style="margin:0 0 12px;">Primera línea con corticoides, inmunoglobulinas o recambio plasmático; escalada precoz a rituximab o ciclofosfamida si no responde; y extirpacion del tumor como parte del tratamiento. Conviene anticipar dos cosas: que la recuperación es <strong>lenta</strong> y sigue un orden inverso al de la instauración, y que los antipsicóticos deben usarse con cautela en la encefalitis por anticuerpos anti-NMDA.</p>
${figBlock('Figura 3', 'Inmunoterapia: primera línea, escalada y lo que hay que anticipar', tratamientoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No etiquetar de psiquiátrico un cuadro de instauración subaguda sin haberlo estudiado. No pedir los anticuerpos anti-receptor de NMDA solo en suero, porque un suero negativo no descarta y un suero positivo aislado no confirma. No esperar al resultado de los anticuerpos para empezar la inmunoterapia. No iniciarla sin haber descartado razonablemente la infección. No dar por cerrado un cribado tumoral negativo, porque el síndrome puede preceder al cáncer en meses y hay que <strong>repetirlo</strong>. No demorar la escalada a segunda línea cuando la primera no funciona. No confundir la lentitud de la recuperación con un fracaso terapéutico. No usar antipsicóticos sin cautela ante la agitación de una encefalitis por anticuerpos anti-NMDA. Y no pasar por alto que un empeoramiento tras una <strong>encefalitis herpetica</strong> puede ser una encefalitis autoinmune y no una recaída virica.</p>`;

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
      tituloB: 'Perfil paraneoplásico clásico',
      compensada: 'Instauración SUBAGUDA, en días o pocas semanas. En la encefalitis por anticuerpos anti-receptor de NMDA, típica de mujer joven, hay un pródromo seudogripal y después un debut PSIQUIÁTRICO (ansiedad, delirio, alucinaciones, conducta desorganizada) que lleva al paciente a salud mental; a las pocas semanas se añaden crisis, DISCINESIAS orofaciales, mutismo, disautonomía e hipoventilación central. En la encefalitis por anticuerpos LGI1, típica de varón mayor, hay amnesia anterógrada, HIPONATREMIA y crisis DISTÓNICAS FACIOBRAQUIALES: contracciones de segundos que afectan a la cara y al brazo del mismo lado y se repiten decenas de veces al dia, y que se confunden con tics o mioclonías.',
      descompensada: 'Perfil de anticuerpos INTRACELULARES, casi siempre paraneoplásico. Encefalitis límbica con amnesia y crisis, pero acompañada con frecuencia de afectación de OTROS niveles del sistema nervioso: neuropatía sensitiva subaguda, degeneración cerebelosa, síndrome de tronco, opsoclono-mioclono o disautonomía grave. Suele haber pérdida de peso y síntomas generales. El síndrome neurológico puede PRECEDER al diagnóstico del tumor en meses, y esa es la razón por la que un cribado inicial negativo no cierra el caso: hay que repetirlo de forma periódica.'
    },
    laboratorio: [
      { prueba: 'Anticuerpos neuronales en LÍQUIDO y en suero', utilidad: 'La regla que más errores evita: los anti-receptor de NMDA se determinan en LÍQUIDO CEFALORRAQUÍDEO. El suero aislado da falsos negativos y también falsos positivos, de modo que un suero negativo NO descarta y un suero positivo aislado NO confirma. Se envian ambas muestras y se interpretan juntas.' },
      { prueba: 'Citoquimica del líquido cefalorraquídeo', utilidad: 'Pleocitosis linfocitaria leve, proteínas normales o poco elevadas y glucosa normal. Puede ser NORMAL, sobre todo en la encefalitis por anticuerpos LGI1, y un líquido normal no descarta el diagnóstico ni autoriza a no tratar.' },
      { prueba: 'Bandas oligoclonales e índice de inmunoglobulina G', utilidad: 'Apoyan la síntesis intratecal de anticuerpos. Forman parte de los criterios de encefalitis probable por anticuerpos anti-receptor de NMDA junto con el electroencefalograma alterado, y ayudan cuando la citoquimica es anodina.' },
      { prueba: 'Estudio microbiológico completo del líquido', utilidad: 'OBLIGADO antes de inmunosuprimir: prueba molecular para virus herpes y enterovirus, cultivo, y según contexto tuberculosis y hongos. La exclusión razonable de la infección no es un trámite, es uno de los tres criterios.' },
      { prueba: 'Sodio sérico', utilidad: 'La HIPONATREMIA acompaña con frecuencia a la encefalitis por anticuerpos LGI1 y es una pista barata y fácil de pasar por alto. Ante un varón mayor con amnesia subaguda, crisis breves repetidas e hiponatremia, el diagnóstico esta prácticamente escrito.' },
      { prueba: 'Autoinmunidad sistémica y función tiroidea', utilidad: 'Anticuerpos antinucleares, anti-ADN, antifosfolípido, ANCA y enzima convertidora de angiotensina, para descartar vasculitis, lupus neuropsiquiátrico y sarcoidosis. Los anticuerpos antitiroideos son POCO específicos: la encefalopatía asociada a tiroiditis es un diagnóstico de exclusión.' },
      { prueba: 'Marcadores tumorales y estudio de neoplasia oculta', utilidad: 'Orientados por el anticuerpo encontrado. Su normalidad no descarta el tumor, de modo que no sustituyen a la imagen ni justifican dejar de repetir el cribado.' },
      { prueba: 'Analítica general y tóxicos', utilidad: 'Hemograma, función renal y hepática, amonio, vitamina B12, tiamina, serología de VIH y sífilis, y cribado toxicológico. Forman parte de la exclusión razonable de otras causas, que es lo que sostiene todo el diagnóstico.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de encefalitis autoinmune posible (calculadora disponible)', interpretacion: 'Comprueba las tres condiciones clínicas que permiten iniciar tratamiento sin esperar a los anticuerpos, y además si se cumplen los criterios de encefalitis límbica definida.', cutoff: 'Inicio en menos de 3 meses, más un criterio de apoyo, más exclusión razonable' },
      { metodo: 'Cribado tumoral según el anticuerpo (calculadora disponible)', interpretacion: 'Indica que tumor buscar, con que prueba y con que periodicidad repetir el cribado según el anticuerpo, la edad y el sexo.', cutoff: 'Repetir cada 4 a 6 meses durante al menos 2 años en los de alto riesgo' },
      { metodo: 'Escala NEOS (calculadora disponible)', interpretacion: 'Cinco variables que estiman la probabilidad de mala situación funcional al año en la encefalitis por anticuerpos anti-receptor de NMDA.', cutoff: 'De 0 a 5 puntos: a mayor puntuación, peor situación funcional esperada' },
      { metodo: 'Electroencefalograma', interpretacion: 'Casi siempre anormal. Enlentecimiento difuso o focal, actividad epileptiforme temporal y, en una minoría de las encefalitis por anticuerpos anti-receptor de NMDA, un patrón muy característico llamado cepillo delta extremo.', cutoff: 'Sirve también para detectar CRISIS NO CONVULSIVAS, que explican un bajo nivel de conciencia' },
      { metodo: 'Escala de Rankin modificada', interpretacion: 'Mide la situación funcional y es el desenlace usado en las cohortes y en los estudios de tratamiento de esta enfermedad.', cutoff: 'Puntuación de 0 a 2 se considera buena situación funcional' },
      { metodo: 'Valoración neuropsicológica', interpretacion: 'Documenta el déficit de memoria y de función ejecutiva, que es lo que más persiste y lo que peor se detecta en una consulta breve.', cutoff: 'Se repite en el seguimiento para objetivar una recuperación que es lenta' }
    ],
    imagen: [
      { modalidad: 'Resonancia craneal con contraste', hallazgos: 'Hiperintensidad en secuencias T2 y FLAIR en los lóbulos TEMPORALES MEDIALES, con frecuencia bilateral, que define la encefalitis límbica. Puede ser NORMAL en una proporción importante, sobre todo en la encefalitis por anticuerpos anti-receptor de NMDA: una resonancia normal no descarta el diagnóstico.' },
      { modalidad: 'Tomografía con emision de positrones cerebral', hallazgos: 'Más sensible que la resonancia en fases precoces. Puede mostrar hipermetabolismo temporal medial o un gradiente occipital característico en la encefalitis por anticuerpos anti-receptor de NMDA. Útil cuando la resonancia es normal y la sospecha se mantiene.' },
      { modalidad: 'Tomografía de tórax, abdomen y pelvis', hallazgos: 'Cribado tumoral basal en todos. Busca carcinoma microcitico de pulmón, timoma y otras neoplasias según el anticuerpo. Un resultado negativo NO cierra el caso y obliga a repetirlo de forma periódica.' },
      { modalidad: 'Ecografía o resonancia pélvica y ecografía testicular', hallazgos: 'TERATOMA DE OVARIO en la mujer joven con anticuerpos anti-receptor de NMDA, que puede ser pequeño y pasar desapercibido en la tomografía. Ecografía testicular en el varón joven con anticuerpos anti-Ma2. Su extirpacion forma parte del tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por la <strong>localización del antígeno</strong>, que es la división que más información práctica aporta: anticuerpos de <strong>superficie</strong> (patogénicos, reversibles, buena respuesta a la inmunoterapia) frente a <strong>intracelulares</strong> (marcadores de daño por linfocitos T, mala respuesta, casi siempre paraneoplásicos). En paralelo, por el <strong>síndrome</strong> (encefalitis límbica, encefalitis difusa, encefalomielitis, síndrome de tronco, cerebelitis o encefalitis del troncoencefalo), por la <strong>relación con el tumor</strong> y por el <strong>grado de certeza</strong> diagnóstica: posible, probable o definida.`,
    escalas: [
      { nombre: 'Criterios de encefalitis autoinmune posible (calculadora disponible)', componentes: 'Inicio subagudo en menos de 3 meses de déficit de memoria de trabajo, alteración del estado mental o síntomas psiquiátricos; al menos un criterio de apoyo (focalidad nueva, crisis no explicadas, pleocitosis o resonancia sugestiva); y exclusión razonable de otras causas.', formula: 'Se exigen las TRES condiciones. Para la encefalitis límbica definida se requieren además alteración bilateral en T2 y FLAIR restringida a los lóbulos temporales mediales, y pleocitosis o electroencefalograma con actividad temporal.', interpretacion: 'Están diseñados a propósito para ser CLÍNICOS y permitir tratar sin esperar a unos anticuerpos que tardan días o semanas. La exclusión razonable de otras causas, sobre todo infecciosas, no es un trámite sino uno de los criterios.' },
      { nombre: 'Cribado tumoral según el anticuerpo (calculadora disponible)', componentes: 'Anticuerpo identificado o sospechado, edad y sexo.', formula: 'Cada anticuerpo se asocia a un tumor preferente y a una prueba de elección, con periodicidad de repetición según el riesgo.', interpretacion: 'Con anticuerpos intracelulares, encontrar el tumor es lo que más cambia el curso. Y como el síndrome neurológico puede PRECEDER al cáncer en meses, un cribado inicial negativo obliga a repetirlo de forma periódica y no a cerrar el caso.' },
      { nombre: 'Escala NEOS (calculadora disponible)', componentes: 'Ingreso en unidad de críticos; ausencia de tratamiento en las 4 primeras semanas; ausencia de mejoría clínica en las 4 primeras semanas; resonancia alterada; y más de 20 leucocitos por mm3 en el líquido.', formula: 'Un punto por cada variable presente, de 0 a 5.', interpretacion: 'Estima la probabilidad de mala situación funcional al año en la encefalitis por anticuerpos anti-receptor de NMDA. Dos de sus cinco variables dependen del equipo (tratar pronto y comprobar la respuesta), lo que la convierte en algo más que un pronóstico.' },
      { nombre: 'Criterios de encefalitis probable por anticuerpos anti-receptor de NMDA', componentes: 'Seis grupos de síntomas: conducta o cognición, lenguaje, crisis, movimientos anormales, nivel de conciencia y disfunción autonómica o hipoventilación central. Más electroencefalograma alterado o líquido con pleocitosis o bandas oligoclonales.', formula: 'Inicio rápido en menos de 3 meses con CUATRO de los seis grupos, más un criterio paraclinico. Bastan TRES grupos si además hay un teratoma.', interpretacion: 'Permite un diagnóstico de alta probabilidad sin el anticuerpo. El diagnóstico DEFINIDO exige anticuerpos frente a la subunidad GluN1 y se confirma en LÍQUIDO, no solo en suero.' },
      { nombre: 'Criterios de síndrome neurológico paraneoplásico', componentes: 'Fenotipo clínico, tipo de anticuerpo y presencia de tumor, ponderados en una puntuación.', formula: 'Combina la especificidad del cuadro clínico, la del anticuerpo y el hallazgo de un tumor compatible para clasificar el caso como posible, probable o definido.', interpretacion: 'La versión actualizada de 2021 sustituye la división clásica en síndromes clásicos y no clásicos por un sistema graduado, y es la que orienta hoy la intensidad y la duración del cribado tumoral.' },
      { nombre: 'Escala de Rankin modificada', componentes: 'Grado de discapacidad funcional de 0 a 6.', formula: 'De 0 (sin síntomas) a 6 (muerte).', interpretacion: 'Es el desenlace usado en las cohortes de esta enfermedad. Una puntuación de 0 a 2 se considera buena situación funcional, y su recuperación puede tardar MUCHOS MESES, lo que hay que anticipar a la familia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Cuando sospecharla: el marco diagnóstico',
      color: '#2e5c7a',
      definicion: 'Conjunto de criterios clínicos que permiten identificar una encefalitis autoinmune e iniciar tratamiento sin esperar al resultado de los anticuerpos.',
      fisiopatologia: 'El sistema nervioso central puede ser blanco de una respuesta inmunitaria dirigida contra antígenos neuronales, desencadenada por un tumor que expresa esos antígenos, por una infección previa que rompe la tolerancia (el caso mejor documentado es la encefalitis herpetica) o sin desencadenante identificable. Según donde este el antígeno, el mecanismo cambia por completo: si esta en la SUPERFICIE, el anticuerpo se une al receptor, lo internaliza o lo bloquea, y produce una disfunción REVERSIBLE; si esta DENTRO de la célula, el anticuerpo no puede alcanzarlo y el daño lo hacen linfocitos T citotóxicos, con destrucción neuronal poco reversible. Esa diferencia explica el pronóstico y la respuesta al tratamiento mucho mejor que el nombre del anticuerpo.',
      epidemiologia: 'Se reconoce cada vez más y hoy figura entre las causas identificables más frecuentes de encefalitis en series prospectivas, a la altura de las causas viricas. La encefalitis por anticuerpos anti-receptor de NMDA predomina en mujeres jóvenes y en niños; la asociada a LGI1 en varones de edad avanzada. Una proporción relevante de los casos de estado epiléptico refractario de nuevo inicio tiene causa autoinmune.',
      factores_riesgo: ['Encefalitis herpetica previa, que puede desencadenarla semanas después', 'Neoplasia conocida u oculta, sobre todo microcitico de pulmón, timoma y teratoma', 'Sexo femenino y edad joven para los anticuerpos anti-receptor de NMDA', 'Sexo masculino y edad avanzada para los anticuerpos LGI1', 'Enfermedad autoinmune previa o antecedente familiar', 'Tratamiento con inhibidores del punto de control inmunitario', 'Trasplante de progenitores hematopoyéticos', 'Infección sistémica reciente como desencadenante', 'Tabaquismo, por el riesgo de carcinoma microcitico', 'Ausencia de un diagnóstico alternativo tras un estudio razonable'],
      clinica: 'Cuadro SUBAGUDO, de menos de 3 meses, de déficit de memoria de trabajo, alteración del estado mental o síntomas PSIQUIÁTRICOS. Se acompaña de al menos uno de estos: focalidad nueva, crisis no explicadas por una epilepsia previa, pleocitosis en el líquido o resonancia sugestiva de encefalitis. Y hay banderas que obligan a pensarlo: psicosis de novo, estado epiléptico refractario de nuevo inicio, crisis muy breves y repetidas, movimientos anormales e hiponatremia con crisis.',
      criterios_dx: 'Las TRES condiciones de encefalitis autoinmune posible. La encefalitis límbica definida añade alteración bilateral en T2 y FLAIR restringida a los lóbulos temporales mediales más pleocitosis o electroencefalograma con actividad temporal. Ver la Figura 1 de Definición.',
      laboratorio: 'ANTICUERPOS NEURONALES EN LÍQUIDO Y EN SUERO, interpretados juntos. Citoquimica, bandas oligoclonales, y ESTUDIO MICROBIOLÓGICO COMPLETO antes de inmunosuprimir. Sodio, autoinmunidad sistémica, función tiroidea, vitaminas, serologías y tóxicos, como parte de la exclusión razonable.',
      imagen: 'RESONANCIA con contraste, que puede ser NORMAL sin que eso descarte nada. Tomografía con emision de positrones cerebral si la resonancia es normal y la sospecha se mantiene. Y cribado tumoral basal con imagen de tórax, abdomen y pelvis.',
      complementarios: 'ELECTROENCEFALOGRAMA, casi siempre anormal y útil además para detectar crisis no convulsivas. Valoración neuropsicológica basal, que es la referencia con la que se medira después una recuperación lenta.',
      dx_diferencial: 'Encefalitis INFECCIOSA, que es lo primero a descartar; trastorno psiquiátrico primario; encefalopatía metabólica, tóxica o por fármacos; enfermedad de Creutzfeldt-Jakob y otras demencias rápidamente progresivas; vasculitis del sistema nervioso central; lupus neuropsiquiátrico; sarcoidosis; linfoma; gliomatosis; y estado epiléptico no convulsivo.',
      tx_medico: 'Manejo en un área con vigilancia neurológica estrecha. Control de crisis, prevención de complicaciones de la inmovilidad, apoyo nutricional y explicación cuidadosa a la familia de que la recuperación será lenta.',
      tx_farmacologico: 'Inmunoterapia de primera línea con criterios clínicos, SIN esperar al resultado de los anticuerpos y siempre tras haber descartado razonablemente la infección. Antiepilépticos según las crisis.',
      tx_intervencionista: 'Recambio plasmático como parte de la primera línea. Extirpacion del tumor cuando se identifica.',
      criterios_uci: 'Bajo nivel de conciencia, estado epiléptico, disautonomía grave e hipoventilación central. El ingreso en críticos es además una de las variables de la escala NEOS.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar la respuesta a las 2 a 4 semanas y ESCALAR si no la hay. Repetir el cribado tumoral si el inicial fue negativo y el anticuerpo es de riesgo. Vigilar crisis no convulsivas si el nivel de conciencia no mejora.',
      seguimiento_ambulatorio: 'Valoración neuropsicológica seriada, control de la epilepsia residual, cribado tumoral periódico y vigilancia de recaídas, que son más frecuentes de lo que se supone y pueden aparecer años después.',
      pronostico: 'Bueno en los anticuerpos de superficie tratados pronto, aunque la recuperación completa puede llevar muchos meses. Malo en los intracelulares, donde el pronóstico lo marca el tumor y el daño neuronal ya establecido.',
      algoritmo: ['Detectar el perfil SUBAGUDO, de menos de 3 meses', 'Comprobar los tres criterios de encefalitis autoinmune posible', 'Enviar anticuerpos en LÍQUIDO y en suero, no solo en suero', 'Descartar razonablemente la infección antes de inmunosuprimir', 'Pedir resonancia y electroencefalograma', 'Hacer cribado tumoral basal según el anticuerpo sospechado', 'Iniciar la primera línea SIN esperar a los anticuerpos', 'Documentar la situación funcional de partida', 'Reevaluar a las 2 a 4 semanas y escalar si no responde', 'Repetir el cribado tumoral de forma periódica']
    },
    {
      nombre: 'Encefalitis por anticuerpos anti-receptor de NMDA',
      color: '#6b4a8c',
      definicion: 'Encefalitis mediada por anticuerpos contra la subunidad GluN1 del receptor de NMDA, con un curso por fases muy reconocible y buena respuesta al tratamiento si se inicia pronto.',
      fisiopatologia: 'El anticuerpo se une al receptor de NMDA y provoca su INTERNALIZACIÓN, es decir, retira receptores de la sinapsis sin destruir la neurona. Esa hipofuncion del receptor reproduce lo que se observa con antagonistas como la ketamina y explica el cuadro psicotico, la disociación y las alteraciones del movimiento. Y explica también lo más importante desde el punto de vista practico: como no hay muerte neuronal sino un receptor retirado, el proceso es REVERSIBLE, la recuperación es posible incluso tras meses de enfermedad grave, y por eso conviene ser persistente con el tratamiento y con el soporte.',
      epidemiologia: 'Predomina en mujeres jóvenes y en niños. En mujeres jóvenes se asocia con frecuencia a TERATOMA DE OVARIO, asociación que disminuye en niñas y en mujeres de más edad. Puede aparecer semanas después de una encefalitis herpetica. Es una de las causas identificables más frecuentes de encefalitis en adultos jóvenes.',
      factores_riesgo: ['Sexo femenino y edad joven', 'Teratoma de ovario, a veces muy pequeño', 'Encefalitis herpetica previa', 'Edad pediátrica, con presentación más motora y menos psiquiátrica', 'Retraso en el inicio de la inmunoterapia', 'Ausencia de escalada cuando la primera línea no responde', 'Tumor no buscado o cribado no repetido', 'Ingreso en unidad de críticos, que marca gravedad', 'Ausencia de mejoría en las primeras 4 semanas', 'Diagnóstico erróneo inicial como cuadro psiquiátrico primario'],
      clinica: 'Curso por FASES muy reconocible: pródromo seudogripal; después debut PSIQUIÁTRICO con ansiedad, delirio, alucinaciones y conducta desorganizada, que suele llevar al paciente a salud mental; y a las pocas semanas alteración del lenguaje hasta el mutismo, CRISIS, DISCINESIAS orofaciales y de miembros, descenso del nivel de conciencia, DISAUTONOMÍA e HIPOVENTILACIÓN CENTRAL. Reconocer la secuencia es lo que evita meses de retraso.',
      criterios_dx: 'Probable con inicio rápido en menos de 3 meses y CUATRO de los seis grupos de síntomas, más electroencefalograma alterado o líquido con pleocitosis o bandas oligoclonales; bastan TRES grupos si hay teratoma. DEFINIDA con anticuerpos frente a GluN1, determinados en LÍQUIDO.',
      laboratorio: 'ANTICUERPOS EN LÍQUIDO CEFALORRAQUÍDEO, que es la muestra que decide: el suero aislado da falsos negativos y falsos positivos. Pleocitosis linfocitaria leve, bandas oligoclonales. Estudio microbiológico completo antes de inmunosuprimir.',
      imagen: 'RESONANCIA con frecuencia NORMAL, lo que no descarta nada y es una fuente habitual de retraso diagnóstico. La tomografía con emision de positrones puede mostrar un gradiente frontotemporal a occipital. ECOGRAFÍA O RESONANCIA PÉLVICA buscando TERATOMA, que puede ser pequeño y no verse en la tomografía.',
      complementarios: 'ELECTROENCEFALOGRAMA con enlentecimiento difuso y, en una minoría, el patrón de CEPILLO DELTA EXTREMO, muy característico de esta entidad. Monitorización continua si hay bajo nivel de conciencia. Vigilancia respiratoria por el riesgo de hipoventilación central.',
      dx_diferencial: 'Brote psicotico primario, que es el error inicial más frecuente; encefalitis virica; síndrome neuroléptico maligno; catatonia de otra causa; intoxicación por drogas; estado epiléptico no convulsivo; y encefalopatía metabólica.',
      tx_medico: 'Manejo en unidad de críticos si hay disautonomía, hipoventilación o estado epiléptico. Ante la agitación y la catatonia se prefieren BENZODIACEPINAS: hay sensibilidad aumentada a los antipsicóticos, que pueden producir un cuadro similar al síndrome neuroléptico maligno. La catatonia resistente responde a la terapia electroconvulsiva.',
      tx_farmacologico: 'Primera línea con corticoides a dosis alta, inmunoglobulinas o recambio plasmático. ESCALADA PRECOZ a rituximab o ciclofosfamida si no hay respuesta, que se asocia a mejor situación funcional y a menos recaídas. Antiepilépticos según las crisis.',
      tx_intervencionista: 'EXTIRPACION DEL TERATOMA, que forma parte del tratamiento y mejora el pronóstico. Recambio plasmático. Terapia electroconvulsiva en la catatonia resistente.',
      criterios_uci: 'Hipoventilación central, disautonomía grave con inestabilidad hemodinámica, estado epiléptico y bajo nivel de conciencia con incapacidad para proteger la via aérea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar la respuesta a las 4 semanas: su ausencia es una de las variables de la escala NEOS y una indicación de escalar. Buscar el teratoma con pruebas dirigidas si la tomografía fue negativa. Vigilar la respiración.',
      seguimiento_ambulatorio: 'Recuperación LENTA, de muchos meses, en orden aproximadamente inverso al de la instauración. Inmunosupresión de mantenimiento en casos seleccionados, vigilancia de recaídas y rehabilitación cognitiva y conductual.',
      pronostico: 'La mayoría alcanza una buena situación funcional, aunque la recuperación sea prolongada. Predicen peor evolución el ingreso en críticos, el retraso terapéutico, la falta de mejoría precoz, la resonancia alterada y la pleocitosis marcada, que son las cinco variables de la escala NEOS.',
      algoritmo: ['Reconocer la SECUENCIA: pródromo, psicosis, crisis, discinesias, disautonomía', 'Pedir anticuerpos en LÍQUIDO, no solo en suero', 'Descartar infección antes de inmunosuprimir', 'Pedir electroencefalograma y buscar el cepillo delta extremo', 'Buscar TERATOMA con ecografía o resonancia pélvica', 'Iniciar primera línea sin esperar al anticuerpo', 'Evitar antipsicóticos y usar benzodiacepinas ante la agitación', 'Vigilar la respiración por el riesgo de hipoventilación central', 'Escalar a segunda línea si no hay respuesta en 2 a 4 semanas', 'Extirpar el teratoma y anticipar una recuperación lenta']
    },
    {
      nombre: 'Encefalitis límbica y anticuerpos de superficie',
      color: '#8a6a1f',
      definicion: 'Inflamación de las estructuras límbicas, sobre todo hipocampo y amigdala, mediada por anticuerpos frente a antígenos de la superficie neuronal, con amnesia, crisis y síntomas psiquiátricos.',
      fisiopatologia: 'LGI1 es una proteína secretada que organiza la sinapsis excitatoria uniendo canales de potasio y receptores AMPA; el anticuerpo desorganiza esa unión y produce hiperexcitabilidad, lo que explica las crisis muy breves y muy frecuentes y la amnesia. CASPR2 se localiza en el nervio periférico y en el sistema nervioso central, y de ahi la combinación de neuromiotonia, dolor y síntomas centrales del síndrome de Morvan. Los anticuerpos frente a GABA-B suprimen una inhibición tónica, lo que explica que las crisis dominen desde el principio y sean graves. En todos ellos el antígeno esta en la superficie, es accesible y el daño es potencialmente reversible.',
      epidemiologia: 'La encefalitis por anticuerpos LGI1 predomina en varones de edad avanzada y solo en una minoría se asocia a tumor. La asociada a CASPR2 se relaciona con timoma. La asociada a GABA-B se asocia con frecuencia a carcinoma microcitico de pulmón, y la asociada a AMPA a timoma, microcitico o cáncer de mama.',
      factores_riesgo: ['Edad avanzada y sexo masculino para los anticuerpos LGI1', 'Tabaquismo, por el carcinoma microcitico asociado a GABA-B', 'Timoma para CASPR2 y AMPA', 'Miastenia gravis conocida, que puede coexistir con timoma', 'Enfermedad autoinmune previa', 'Retraso diagnóstico, que en LGI1 se traduce en amnesia residual', 'Crisis breves atribuidas a tics, mioclonías o síncopes', 'Hiponatremia atribuida solo a diuréticos', 'Neoplasia previa', 'Tratamiento con inhibidores del punto de control inmunitario'],
      clinica: 'Amnesia anterógrada subaguda, crisis y síntomas psiquiátricos o del sueño. En LGI1, las CRISIS DISTÓNICAS FACIOBRAQUIALES son casi patognomonicas: contracciones de uno o dos segundos que afectan a la cara y al brazo del mismo lado, se repiten decenas de veces al dia y PRECEDEN en semanas al deterioro de memoria. Se acompañan de HIPONATREMIA. En CASPR2, neuromiotonia, dolor neuropático e insomnio grave.',
      criterios_dx: 'Criterios de encefalitis límbica definida: inicio subagudo, alteración bilateral en T2 y FLAIR restringida a temporales mediales, pleocitosis o electroencefalograma temporal, y exclusión de otras causas. El anticuerpo confirma el subtipo. Ver la Figura 2 de Definición.',
      laboratorio: 'Panel de anticuerpos de SUPERFICIE en líquido y suero. SODIO, porque la hiponatremia es una pista barata y muy sugestiva en LGI1. Estudio microbiológico. Autoinmunidad sistémica y función tiroidea.',
      imagen: 'RESONANCIA con hiperintensidad en T2 y FLAIR en los lóbulos temporales mediales, con frecuencia bilateral, que puede evolucionar a ATROFIA hipocampal si el tratamiento se retrasa. Tomografía con emision de positrones si la resonancia es normal. Cribado tumoral según el anticuerpo.',
      complementarios: 'ELECTROENCEFALOGRAMA con actividad temporal. Conviene saber que las crisis distónicas faciobraquiales a menudo NO tienen correlato en el electroencefalograma de superficie, de modo que un registro normal no las descarta: el diagnóstico es visual.',
      dx_diferencial: 'Encefalitis herpetica, que afecta a la misma región; crisis temporales de otra causa; demencia rápidamente progresiva; enfermedad de Creutzfeldt-Jakob; gliomatosis; síndrome de Wernicke; y en la hiponatremia, sus múltiples causas habituales.',
      tx_medico: 'Corrección cuidadosa de la hiponatremia. Manejo de las crisis, teniendo en cuenta que las distónicas faciobraquiales responden POCO a los antiepilépticos y bien a la inmunoterapia, lo que es en sí mismo un dato diagnóstico.',
      tx_farmacologico: 'CORTICOIDES como primera línea, con muy buena respuesta en la encefalitis por anticuerpos LGI1, asociados o no a inmunoglobulinas o recambio plasmático. Escalada a rituximab si no responde. Y tratamiento del tumor cuando existe.',
      tx_intervencionista: 'Timectomia si hay timoma. Recambio plasmático. Tratamiento oncológico del carcinoma microcitico cuando se identifica.',
      criterios_uci: 'Estado epiléptico, sobre todo en la asociada a anticuerpos frente a GABA-B, donde las crisis pueden ser graves y refractarias desde el inicio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar el sodio y las crisis. Comprobar la respuesta clínica precoz, que en LGI1 suele ser rápida con corticoides y ayuda a confirmar el diagnóstico.',
      seguimiento_ambulatorio: 'Valoración neuropsicológica, porque la AMNESIA RESIDUAL es la secuela más frecuente y se relaciona con el retraso del tratamiento. Vigilancia de recaídas al reducir el corticoide y cribado tumoral periódico.',
      pronostico: 'Bueno si se trata pronto. El retraso deja amnesia persistente y atrofia hipocampal. Peor cuando hay tumor asociado, sobre todo carcinoma microcitico, donde el pronóstico lo marca la neoplasia.',
      algoritmo: ['Sospecharla ante amnesia SUBAGUDA con crisis', 'Buscar crisis DISTÓNICAS FACIOBRAQUIALES, breves y muy repetidas', 'Mirar el SODIO', 'Pedir panel de anticuerpos de superficie en líquido y suero', 'Pedir resonancia buscando afectación temporal medial bilateral', 'Pedir electroencefalograma, sabiendo que puede ser normal', 'Descartar encefalitis herpetica antes de inmunosuprimir', 'Iniciar corticoides, de respuesta habitualmente buena en LGI1', 'Buscar timoma en CASPR2 y microcitico en GABA-B', 'Valorar la memoria en el seguimiento y vigilar recaídas']
    },
    {
      nombre: 'Síndromes paraneoplásicos y anticuerpos intracelulares',
      color: '#8c3a34',
      definicion: 'Síndromes neurológicos mediados por una respuesta inmunitaria contra antígenos neuronales INTRACELULARES expresados por un tumor, en los que el anticuerpo es un marcador y no el agente del daño.',
      fisiopatologia: 'El tumor expresa de forma aberrante proteínas neuronales. El sistema inmunitario las reconoce y monta una respuesta que, al ser el antígeno intracelular, es fundamentalmente de LINFOCITOS T CITOTÓXICOS. Esos linfocitos destruyen neuronas, y esa destrucción es en gran medida IRREVERSIBLE. De ahi las tres consecuencias prácticas del grupo: la respuesta a la inmunoterapia es pobre, el objetivo terapéutico principal es el TUMOR, y el resultado depende de lo pronto que se encuentre, porque las neuronas pérdidas no se recuperan.',
      epidemiologia: 'Los anticuerpos anti-Hu se asocian sobre todo a carcinoma microcitico de pulmón; los anti-Ma2 a tumor de células germinales del testiculo en varones jóvenes; los anti-CV2 a microcitico y timoma; y los anti-anfifisina a mama y microcitico. El síndrome neurológico PRECEDE al diagnóstico del tumor en una proporción importante de los casos.',
      factores_riesgo: ['Tabaquismo, por el carcinoma microcitico de pulmón', 'Edad avanzada', 'Pérdida de peso y síntomas generales no explicados', 'Antecedente de neoplasia', 'Varón joven con anticuerpos anti-Ma2, por el tumor testicular', 'Tratamiento con inhibidores del punto de control inmunitario', 'Cribado tumoral inicial negativo dado por definitivo', 'Ausencia de tomografía con emision de positrones cuando la imagen basal es normal', 'Retraso en el diagnóstico del tumor', 'Afectación de varios niveles del sistema nervioso no reconocida como una unidad'],
      clinica: 'Encefalitis límbica, pero con frecuencia acompañada de afectación de OTROS niveles, lo que es en sí mismo una pista: neuropatía sensitiva subaguda, degeneración cerebelosa, encefalitis del troncoencefalo, opsoclono-mioclono, síndrome rígido y disautonomía grave. Suele haber síntomas generales y pérdida de peso. En los anticuerpos anti-Ma2 son características la afectación diencefálica con narcolepsia y la paresia de la mirada vertical.',
      criterios_dx: 'Criterios actualizados de síndrome neurológico paraneoplásico, que combinan el fenotipo clínico, el tipo de anticuerpo y la presencia de tumor en una puntuación graduada de posible a definido.',
      laboratorio: 'Panel de anticuerpos INTRACELULARES en suero y líquido: anti-Hu, anti-Ma2, anti-CV2, anti-anfifisina, anti-Ri y anti-Yo. Líquido con pleocitosis linfocitaria y bandas oligoclonales. Marcadores tumorales, cuya normalidad NO descarta nada.',
      imagen: 'Resonancia craneal, que puede ser normal o mostrar afectación límbica o de tronco. CRIBADO TUMORAL con tomografía de tórax, abdomen y pelvis; TOMOGRAFÍA CON EMISION DE POSITRONES si la imagen basal es negativa; y ecografía testicular en el varón joven con anticuerpos anti-Ma2. Mamografía y estudio ginecológico según el perfil.',
      complementarios: 'Electroneurograma si hay neuropatía sensitiva. Electroencefalograma. Y, sobre todo, un PLAN ESCRITO de repetición del cribado tumoral, porque la clave del caso suele estar en el tumor que aun no ha aparecido.',
      dx_diferencial: 'Encefalitis autoinmune por anticuerpos de superficie, que se trata distinto y responde mejor; metástasis y carcinomatosis meníngea; toxicidad neurológica de la quimioterapia; encefalitis por inhibidores del punto de control inmunitario; déficits nutricionales; e infecciones oportunistas.',
      tx_medico: 'Coordinación estrecha con oncología desde el primer dia. Manejo sintomático del dolor, de las crisis, de la disautonomía y de la ataxia. Rehabilitación. Y una comunicación honesta sobre las expectativas, porque el déficit establecido suele ser permanente.',
      tx_farmacologico: 'Inmunoterapia con respuesta habitualmente POBRE, aunque se intenta porque puede estabilizar el cuadro: corticoides, inmunoglobulinas, recambio plasmático y, en casos seleccionados, rituximab o ciclofosfamida. El objetivo realista suele ser detener la progresión, no revertir el déficit.',
      tx_intervencionista: 'TRATAMIENTO DEL TUMOR, que es la intervención que más influye en el curso neurológico. Extirpacion, quimioterapia o radioterapia según corresponda.',
      criterios_uci: 'Disautonomía grave, insuficiencia respiratoria, estado epiléptico y complicaciones del propio tumor o de su tratamiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No cerrar el caso con un cribado negativo. Ampliar con tomografía con emision de positrones y planificar por escrito la repetición, porque el tumor puede aparecer meses después del síndrome neurológico.',
      seguimiento_ambulatorio: 'REPETIR el cribado cada 4 a 6 meses durante al menos 2 años en los anticuerpos de alto riesgo. Seguimiento conjunto con oncología, rehabilitación y manejo sintomático.',
      pronostico: 'Peor que el de los anticuerpos de superficie. El déficit neurológico establecido suele ser permanente y el pronóstico vital lo marca el tumor. Encontrarlo pronto es lo que más puede cambiar, tanto en lo oncológico como en lo neurológico.',
      algoritmo: ['Sospecharlo si hay afectación de VARIOS niveles del sistema nervioso', 'Buscar pérdida de peso y síntomas generales', 'Pedir panel de anticuerpos intracelulares en suero y líquido', 'Hacer cribado tumoral con tomografía de tórax, abdomen y pelvis', 'Añadir tomografía con emision de positrones si la imagen es negativa', 'Pedir ecografía testicular en varón joven con anti-Ma2', 'Coordinar con oncología desde el primer dia', 'Intentar inmunoterapia sabiendo que la respuesta suele ser pobre', 'Tratar el TUMOR, que es lo que más cambia el curso', 'Planificar por escrito la repetición del cribado cada 4 a 6 meses']
    },
    {
      nombre: 'Inmunoterapia: primera línea y escalada',
      color: '#3f6b52',
      definicion: 'Estrategia terapéutica escalonada cuya precocidad y cuya escalada oportuna constituyen los dos factores pronósticos que dependen del equipo que atiende.',
      fisiopatologia: 'Los corticoides reducen la inflamación y la permeabilidad de la barrera; las inmunoglobulinas neutralizan anticuerpos circulantes y modulan la respuesta; el recambio plasmático retira anticuerpos del compartimento vascular, aunque llega peor al intratecal. Cuando eso no basta se pasa a fármacos que actuan sobre la fabrica: el rituximab deplecciona linfocitos B, y la ciclofosfamida actúa sobre linfocitos B y T. Esa progresión explica por que la segunda línea funciona en pacientes que no respondieron a la primera y por que su retraso cuesta caro.',
      epidemiologia: 'En la cohorte de referencia de encefalitis por anticuerpos anti-receptor de NMDA, los pacientes que no respondian a la primera línea y recibian segunda línea alcanzaban mejores desenlaces que quienes no la recibian, y con menos recaídas. Y el retraso terapéutico figura de forma consistente entre los predictores de mala evolución.',
      factores_riesgo: ['Esperar al resultado de los anticuerpos para empezar', 'Confundir la lentitud de la recuperación con un fracaso terapéutico', 'Retrasar la escalada a segunda línea', 'No haber descartado la infección antes de inmunosuprimir', 'No tratar el tumor asociado', 'Suspender el corticoide demasiado rápido, con riesgo de recaída', 'No prevenir las complicaciones de la inmunosupresión', 'Reactivación de hepatitis B con rituximab si no se criba', 'Infertilidad asociada a ciclofosfamida no informada', 'Falta de un plan escrito de reevaluación'],
      clinica: 'La decisión de escalar se toma con la CLÍNICA y con el tiempo, no con el título de anticuerpos, que no se correlaciona bien con la actividad. Se define una situación funcional de partida y se reevalua de forma estructurada a las 2 a 4 semanas.',
      criterios_dx: 'No aplica: es la fase terapéutica. La regla es iniciar la primera línea con criterios clínicos y escalar si no hay respuesta en 2 a 4 semanas. Ver la Figura 3 de Definición.',
      laboratorio: 'Antes de inmunosuprimir: serologías de hepatitis B y C, VIH, cribado de tuberculosis latente e inmunoglobulinas. Durante: hemograma, función renal y hepática, glucemia y vigilancia de infecciones.',
      imagen: 'Radiografía de tórax previa. Resonancia de control si la evolución no es la esperada, buscando una complicación o un diagnóstico alternativo.',
      complementarios: 'Escala funcional documentada al inicio y en cada reevaluación. Valoración neuropsicológica. Electroencefalograma si el nivel de conciencia no mejora, para descartar crisis no convulsivas antes de asumir un fracaso terapéutico.',
      dx_diferencial: 'Ante la ausencia de respuesta, replantear: diagnóstico erróneo, infección no descartada, tumor no tratado, crisis no convulsivas, complicación de la inmunosupresión, o simplemente una recuperación más lenta de lo esperado, que es lo más frecuente.',
      tx_medico: 'Profilaxis gástrica y ósea con corticoides prolongados, vacunación previa cuando sea posible, profilaxis de infecciones oportunistas según el esquema, y rehabilitación desde fases precoces.',
      tx_farmacologico: 'PRIMERA LÍNEA: corticoides a dosis alta, inmunoglobulinas o recambio plasmático, solos o combinados. SEGUNDA LÍNEA: rituximab o ciclofosfamida. Mantenimiento con inmunosupresor oral en casos seleccionados, sobre todo si hay recaídas o anticuerpos de alto riesgo de recurrencia.',
      tx_intervencionista: 'Recambio plasmático. Extirpacion del tumor, que forma parte del tratamiento. Terapia electroconvulsiva en la catatonia resistente.',
      criterios_uci: 'Los del cuadro de base. La inmunoterapia no se retrasa por el ingreso en críticos: al contrario, la gravedad es un argumento para tratar antes y con más intensidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación estructurada a las 2 a 4 semanas con una escala funcional. Si no hay mejoría, ESCALAR y no esperar. Vigilar infecciones, hiperglucemia y complicaciones de la inmunosupresión.',
      seguimiento_ambulatorio: 'Retirada lenta del corticoide, vigilancia de recaídas, valoración de mantenimiento inmunosupresor, rehabilitación cognitiva y cribado tumoral periódico.',
      pronostico: 'Muy dependiente de estas decisiones. Tratar pronto y escalar a tiempo son las dos variables que están en manos del equipo, y ambas figuran entre los predictores de la situación funcional al año.',
      algoritmo: ['Descartar razonablemente la infección', 'Documentar la situación funcional de partida', 'Iniciar primera línea SIN esperar a los anticuerpos', 'Tratar el tumor si se ha identificado', 'Cribar hepatitis B, VIH y tuberculosis antes de la segunda línea', 'Reevaluar de forma estructurada a las 2 a 4 semanas', 'Descartar crisis no convulsivas antes de asumir un fracaso', 'ESCALAR a rituximab o ciclofosfamida si no hay respuesta', 'Retirar el corticoide despacio para evitar recaídas', 'Anticipar a la familia que la recuperación será lenta']
    },
    {
      nombre: 'Complicaciones y los errores que más cuestan',
      color: '#3d5a73',
      definicion: 'Conjunto de complicaciones agudas y de trampas diagnosticas y terapéuticas que determinan buena parte de los desenlaces evitables de esta enfermedad.',
      fisiopatologia: 'La afectación de estructuras límbicas, diencefálicas y del tronco explica las complicaciones agudas: las crisis y el estado epiléptico por la hiperexcitabilidad cortical, la DISAUTONOMÍA por la afectación de los centros autónomos, y la HIPOVENTILACIÓN CENTRAL por la del control respiratorio bulbar. La catatonia y la agitación tienen sustrato en la disfunción de circuitos frontosubcorticales, y esa disfunción es la razón de la sensibilidad aumentada a los antipsicóticos: bloquear todavía más la transmisión dopaminérgica en un cerebro ya desregulado puede desencadenar rigidez, fiebre e inestabilidad.',
      epidemiologia: 'Una proporción relevante de los casos graves ingresa en unidad de críticos, y ese ingreso es una de las cinco variables de la escala NEOS. Las recaídas ocurren en una minoría pero pueden aparecer años después, lo que obliga a mantener el seguimiento y a educar al paciente y a la familia sobre los síntomas de alarma.',
      factores_riesgo: ['Diagnóstico inicial erróneo como cuadro psiquiátrico primario', 'Anticuerpos pedidos solo en suero', 'Inmunoterapia retrasada esperando el resultado del anticuerpo', 'Escalada a segunda línea demorada', 'Uso de antipsicóticos sin cautela en la encefalitis por anticuerpos anti-NMDA', 'Crisis no convulsivas no buscadas ante un paciente que no despierta', 'Cribado tumoral no repetido', 'Retirada rápida del corticoide', 'Empeoramiento tras encefalitis herpetica atribuido a recaída virica', 'Ausencia de plan de seguimiento a largo plazo'],
      clinica: 'Estado epiléptico, con frecuencia refractario y a veces NO CONVULSIVO. Disautonomía con oscilaciones de la tensión y de la frecuencia cardiaca, hipertermia y arritmias. Hipoventilación central. Catatonia y agitación grave. Y, más adelante, déficit de memoria, alteración conductual, epilepsia residual y fatiga.',
      criterios_dx: 'No aplica: son complicaciones y errores. El principio general es que un paciente que no mejora obliga a replantear activamente, no a esperar.',
      laboratorio: 'Vigilancia de iones, función renal, creatina cinasa (por la rigidez y el síndrome similar al neuroléptico maligno) y marcadores de infección, que es la complicación más frecuente de la inmunosupresión.',
      imagen: 'Repetir la resonancia si el curso no encaja, buscando complicaciones o un diagnóstico alternativo que se haya pasado por alto.',
      complementarios: 'ELECTROENCEFALOGRAMA, y con monitorización continua si el nivel de conciencia no mejora: las crisis no convulsivas son una causa tratable de bajo nivel de conciencia que se pasa por alto si no se busca. Monitorización cardiaca por la disautonomía.',
      dx_diferencial: 'Del empeoramiento: progresión de la enfermedad, infección nosocomial, crisis no convulsivas, efecto adverso farmacológico, síndrome similar al neuroléptico maligno, y trombosis o complicación de la inmovilidad.',
      tx_medico: 'Manejo en críticos cuando procede. BENZODIACEPINAS para la agitación y la catatonia, evitando los antipsicóticos en la encefalitis por anticuerpos anti-receptor de NMDA. Prevención de trombosis, de úlceras por presión y de la desnutrición. Y apoyo psicológico a la familia, que asiste a un cuadro largo y desconcertante.',
      tx_farmacologico: 'Antiepilépticos y anestésicos según el estado epiléptico. Tratamiento sintomático de la disautonomía. Y la propia inmunoterapia, que es el tratamiento de fondo de casi todas estas complicaciones.',
      tx_intervencionista: 'Ventilación mecánica en la hipoventilación central. Terapia electroconvulsiva en la catatonia resistente. Y extirpacion del tumor cuando se identifica.',
      criterios_uci: 'Estado epiléptico, disautonomía grave, hipoventilación central, bajo nivel de conciencia y catatonia con compromiso vital.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante un paciente que no mejora, revisar de forma sistemática: diagnóstico, infección, tumor, crisis no convulsivas, fármacos y tiempo transcurrido. Y recordar que la lentitud de la recuperación es lo más frecuente y no siempre significa fracaso.',
      seguimiento_ambulatorio: 'Rehabilitación cognitiva y conductual prolongada, control de la epilepsia residual, cribado tumoral periódico, vigilancia de recaídas y educación del paciente y de la familia sobre los síntomas de alarma.',
      pronostico: 'La mayor parte de los desenlaces evitables de esta enfermedad se explican por estos errores: retraso diagnóstico, muestra equivocada, tratamiento tardío, escalada demorada y cribado tumoral no repetido.',
      algoritmo: ['Ante un paciente que no despierta, pedir ELECTROENCEFALOGRAMA', 'Monitorizar por la disautonomía y vigilar la respiración', 'Usar benzodiacepinas y evitar antipsicóticos en la anti-NMDA', 'Pensar en terapia electroconvulsiva si la catatonia resiste', 'Revisar si la infección se descarto bien antes de inmunosuprimir', 'Comprobar que el cribado tumoral se ha repetido', 'Comprobar que la escalada no se ha demorado', 'No confundir recuperación lenta con fracaso terapéutico', 'Retirar el corticoide despacio', 'Educar al paciente y a la familia sobre las recaídas']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este tema se juega en dos decisiones que dependen por completo del equipo: tratar PRONTO, con criterios clínicos y sin esperar a los anticuerpos, y ESCALAR a segunda línea cuando la primera no funciona. La tercera es no cerrar nunca el caso con un cribado tumoral negativo.',
    parametros: ['Sospecharla ante cualquier cuadro SUBAGUDO de memoria, conducta o psiquiátrico', 'Pedir los anticuerpos en LÍQUIDO y en suero, nunca solo en suero', 'Descartar razonablemente la infección antes de inmunosuprimir', 'Iniciar la primera línea SIN esperar al resultado del anticuerpo', 'Documentar la situación funcional de partida para poder comparar', 'Reevaluar de forma estructurada a las 2 a 4 semanas', 'ESCALAR a segunda línea si no hay respuesta', 'Buscar el teratoma con prueba pélvica dirigida, no solo con tomografía', 'Repetir el cribado tumoral cada 4 a 6 meses en los de alto riesgo', 'Evitar antipsicóticos ante la agitación de la encefalitis anti-NMDA', 'Pedir electroencefalograma si el paciente no despierta', 'Anticipar que la recuperación será lenta y no confundirla con fracaso'],
    criterios_uci_general: 'Estado epiléptico, con frecuencia refractario y a veces no convulsivo. Disautonomía grave con inestabilidad hemodinámica, hipertermia y arritmias. Hipoventilación central, especialmente en la encefalitis por anticuerpos anti-receptor de NMDA. Bajo nivel de conciencia con incapacidad para proteger la via aérea. Y catatonia con compromiso vital. El ingreso en críticos es además una de las cinco variables de la escala NEOS.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema. La inmunoterapia y el tratamiento del tumor son las intervenciones que modifican el curso.',
    prevencion: 'Primaria: no es una enfermedad prevenible, pero si lo es una parte de sus desenlaces. La vigilancia neurológica tras una ENCEFALITIS HERPETICA permite detectar la encefalitis autoinmune posherpetica, y la detección precoz del tumor en los síndromes paraneoplásicos cambia el curso de ambas enfermedades. Secundaria: cribado tumoral basal en todos y REPETIDO cada 4 a 6 meses durante al menos 2 años en los anticuerpos de alto riesgo; cribado de hepatitis B, VIH y tuberculosis antes de inmunosuprimir; y educación del paciente y de la familia sobre los síntomas de recaída, que puede aparecer años después. Terciaria: rehabilitación cognitiva y conductual prolongada, control de la epilepsia residual, retirada lenta del corticoide y valoración de inmunosupresión de mantenimiento en los casos con recaídas.'
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
  'Cuando sospecharla: el marco diagnóstico': { definicion: [1, 3, 10, 15], criterios_dx: [1, 3, 10, 15], laboratorio: [1, 3, 10, 15], tx_farmacologico: [1, 3, 10, 15] },
  'Encefalitis por anticuerpos anti-receptor de NMDA': { definicion: [2, 4, 5, 12], criterios_dx: [2, 4, 5, 12], laboratorio: [2, 4, 5, 12], tx_farmacologico: [2, 4, 5, 12] },
  'Encefalitis límbica y anticuerpos de superficie': { definicion: [6, 7, 14], criterios_dx: [6, 7, 14], laboratorio: [6, 7, 14], tx_farmacologico: [6, 7, 14] },
  'Síndromes paraneoplásicos y anticuerpos intracelulares': { definicion: [8, 9, 13], criterios_dx: [8, 9, 13], laboratorio: [8, 9, 13], tx_farmacologico: [8, 9, 13] },
  'Inmunoterapia: primera línea y escalada': { definicion: [2, 10, 16], criterios_dx: [2, 10, 16], laboratorio: [2, 10, 16], tx_farmacologico: [2, 10, 16] },
  'Complicaciones y los errores que más cuestan': { definicion: [11, 16], criterios_dx: [11, 16], laboratorio: [11, 16], tx_farmacologico: [11, 16] }
};
export const estigmasTitulo = 'Pistas que cambian el diagnóstico';
export const estigmas = [
  { s: 'Instauración en menos de tres meses', p: 'La puerta de entrada', photo: null, desc: 'Es el dato que separa este tema de la demencia y del trastorno psiquiátrico primario. Un cuadro de memoria, conducta o psiquiátrico que se instala en semanas obliga a estudiarlo, porque a diferencia de aquellos es TRATABLE.' },
  { s: 'Psicosis de novo en alguien sin antecedentes', p: 'Anti-NMDA', photo: null, desc: 'Es el debut más frecuente de la encefalitis por anticuerpos anti-receptor de NMDA y el motivo por el que muchos pacientes pasan primero por salud mental. Buscar después crisis, discinesias y disautonomía confirma la secuencia.' },
  { s: 'Discinesias orofaciales', p: 'Anti-NMDA', photo: null, desc: 'Movimientos involuntarios de boca y lengua, muy característicos, que aparecen cuando ya hay deterioro del nivel de conciencia. Su presencia en un paciente joven con psicosis reciente hace el diagnóstico casi evidente.' },
  { s: 'Crisis distónicas faciobraquiales', p: 'Anti-LGI1', photo: null, desc: 'Contracciones de uno o dos segundos que afectan a la cara y al brazo del mismo lado y se repiten decenas de veces al dia. PRECEDEN en semanas a la amnesia, responden poco a los antiepilépticos y bien a la inmunoterapia.' },
  { s: 'Hiponatremia con amnesia subaguda', p: 'Anti-LGI1', photo: null, desc: 'Una pista barata y muy sugestiva que se atribuye con frecuencia a los diuréticos. En un varón mayor con amnesia de semanas y crisis breves repetidas, el diagnóstico esta prácticamente escrito.' },
  { s: 'Neuromiotonia con insomnio y dolor', p: 'Anti-CASPR2', photo: null, desc: 'Junto con la disautonomía forma el síndrome de Morvan. Refleja que el antígeno esta tanto en el nervio periférico como en el sistema nervioso central, y obliga a buscar un TIMOMA.' },
  { s: 'Crisis graves desde el primer dia', p: 'Anti-GABA-B', photo: null, desc: 'En esta encefalitis límbica las crisis dominan el cuadro desde el inicio y pueden ser refractarias. Obliga a buscar pronto un CARCINOMA MICROCITICO de pulmón, que es el tumor asociado.' },
  { s: 'Afectación de varios niveles a la vez', p: 'Anticuerpos intracelulares', photo: null, desc: 'Encefalitis límbica junto con neuropatía sensitiva, cerebelo o tronco es el perfil de los síndromes paraneoplásicos clásicos. Ahi el anticuerpo es solo un marcador y lo que cambia el curso es encontrar el tumor.' },
  { s: 'Resonancia normal', p: 'No descarta nada', photo: null, desc: 'Una proporción importante de las encefalitis por anticuerpos anti-receptor de NMDA tiene resonancia normal. Es una fuente habitual de retraso diagnóstico y una de las razones para recurrir a la tomografía con emision de positrones.' },
  { s: 'Anticuerpos pedidos solo en suero', p: 'El error de la muestra', photo: null, desc: 'Los anti-receptor de NMDA se determinan en LÍQUIDO. Un suero negativo no descarta y un suero positivo aislado no confirma. La muestra correcta forma parte del diagnóstico tanto como la clínica.' },
  { s: 'Empeora tras una encefalitis herpetica', p: 'Autoinmune posherpetica', photo: null, desc: 'Semanas después de una encefalitis por virus herpes puede aparecer una encefalitis autoinmune, con frecuencia por anticuerpos anti-receptor de NMDA. Atribuirlo a una recaída virica retrasa un tratamiento que es distinto.' },
  { s: 'Cribado tumoral negativo', p: 'No cierra el caso', photo: null, desc: 'El síndrome neurológico puede PRECEDER al tumor en meses. Por eso el cribado se repite cada 4 a 6 meses durante al menos 2 años en los anticuerpos de alto riesgo, con un plan escrito y no de memoria.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de encefalitis autoinmune posible (calculadora disponible)': [1],
  'Cribado tumoral según el anticuerpo (calculadora disponible)': [13, 8],
  'Escala NEOS (calculadora disponible)': [5],
  'Criterios de encefalitis probable por anticuerpos anti-receptor de NMDA': [1, 2],
  'Criterios de síndrome neurológico paraneoplásico': [8, 9],
  'Escala de Rankin modificada': [2]
};
export const escalaCalc = {
  'Criterios de encefalitis autoinmune posible (calculadora disponible)': 'criterios-graus',
  'Cribado tumoral según el anticuerpo (calculadora disponible)': 'cribado-tumoral-autoinmune',
  'Escala NEOS (calculadora disponible)': 'neos'
};
export const compGroups = [
  { name: 'El marco', items: ['Cuando sospecharla: el marco diagnóstico'] },
  { name: 'Anticuerpos de superficie', items: ['Encefalitis por anticuerpos anti-receptor de NMDA', 'Encefalitis límbica y anticuerpos de superficie'] },
  { name: 'Anticuerpos intracelulares', items: ['Síndromes paraneoplásicos y anticuerpos intracelulares'] },
  { name: 'Tratar y vigilar', items: ['Inmunoterapia: primera línea y escalada', 'Complicaciones y los errores que más cuestan'] }
];
export const complicacionesIntro = 'La primera ficha es el marco: los criterios clínicos que permiten reconocer el cuadro y, sobre todo, tratarlo sin esperar a unos anticuerpos que tardan semanas. Las dos siguientes son los anticuerpos de SUPERFICIE, que son patogénicos, reversibles y responden bien: la encefalitis anti-NMDA, con su curso por fases muy reconocible, y la encefalitis límbica, con dos pistas casi diagnosticas que se pasan por alto a diario. La cuarta es el grupo INTRACELULAR, donde el anticuerpo es solo un marcador y lo que de verdad cambia el curso es encontrar el tumor. Y las dos últimas son el tratamiento y la vigilancia, que es donde se juegan la mayoría de los desenlaces evitables de esta enfermedad.';
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
  root: { title: 'CUADRO SUBAGUDO DE MEMORIA, CONDUCTA O PSIQUIÁTRICO', color: '#2e5c7a', target: 'definicion' },
  branches: [
    { title: 'SOSPECHARLA', sub: 'Menos de tres meses', color: '#2e5c7a', target: 'clasificacion', leaves: [
      { title: 'Tres criterios clínicos', sub: 'Permiten tratar sin esperar', color: '#2e5c7a', target: 'clasificacion' },
      { title: 'Anticuerpos en LÍQUIDO', sub: 'El suero solo engaña', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Descartar infección', sub: 'Antes de inmunosuprimir', color: '#7a3f2e', target: 'complicaciones' },
      { title: 'Resonancia normal', sub: 'No descarta nada', color: '#3d5a73', target: 'diagnostico' }
    ] },
    { title: 'DONDE ESTA EL ANTÍGENO', sub: 'La pregunta que ordena todo', color: '#6b4a8c', target: 'complicaciones', leaves: [
      { title: 'Superficie', sub: 'Reversible, responde bien', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Intracelular', sub: 'Buscar el tumor', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Psicosis y discinesias', sub: 'Anti-NMDA, buscar teratoma', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Crisis breves e hiponatremia', sub: 'Anti-LGI1', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'TRATAR Y VIGILAR', sub: 'Pronto y escalando', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Primera línea ya', sub: 'Sin esperar al anticuerpo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Escalar a las 2 a 4 semanas', sub: 'Si no hay respuesta', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Extirpar el tumor', sub: 'Es parte del tratamiento', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Repetir el cribado', sub: 'Un negativo no cierra nada', color: '#3d5a73', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 14], no_invasivos: [1, 5, 13], imagen: [1, 3] };
export const clasificacionCite = [1, 5, 8];
export const seguimientoCite = [2, 10, 11];
