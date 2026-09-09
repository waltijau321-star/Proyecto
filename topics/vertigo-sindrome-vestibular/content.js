// topics/vertigo-sindrome-vestibular/content.js: Vertigo y sindrome vestibular agudo.
// Cubre el item "Vertigo central (sindrome vestibular agudo)" del cluster "Enfermedad
// cerebrovascular" (bloque XII, Neurologia) del temario, con el enfoque completo del mareo
// porque el vertigo central solo se reconoce sabiendo de que se le separa.
//
// DELIMITACION frente a `ictus-isquemico` y al resto del cluster vascular: alli esta el ictus
// con focalidad evidente. Aqui esta el ictus que se presenta SOLO como mareo, que es el que se
// va a casa con el diagnostico de laberintitis, y el metodo de cabecera que lo detecta.
//
// Fuentes principales: guia interdisciplinar sobre vertigo y mareo de 2025 (la que hay en
// Bibliografia/), estudio original de HINTS, marco de tiempo y desencadenantes de Newman-Toker y
// Edlow, guia de vertigo posicional paroxistico benigno de 2017, criterios diagnosticos de
// enfermedad de Meniere y de migra&#241;a vestibular, y ensayo de corticoides en neuritis vestibular.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'vertigo-sindrome-vestibular',
  titulo: 'Vertigo y Sindrome Vestibular',
  subtitulo: 'Modulo 67 · Medicina Interna',
  accent: '#4a7a5c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const sindromesHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La pregunta que hay que dejar de hacer es "&#191;como es el mareo?".</strong> <span style="color:var(--ink-dim);">La descripcion del sintoma no separa lo grave de lo banal: los pacientes cambian de respuesta al repreguntar. Lo que si separa son el TIEMPO y el DESENCADENANTE.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:108px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">AGUDO<br>Y CONTINUO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Dura <strong style="color:var(--ink);">DIAS</strong>, sin interrupcion, con nauseas, nistagmo e intolerancia al movimiento de la cabeza. Es el <strong>SINDROME VESTIBULAR AGUDO</strong>, y la pregunta unica es neuritis o ICTUS. Aqui se aplica el <strong style="color:#8c3a34;">HINTS</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:108px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">EPISODICO<br>ESPONTANEO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Crisis que empiezan <strong style="color:var(--ink);">SIN que nada las provoque</strong> y ceden solas. Meniere (de 20 minutos a 12 horas, con hipoacusia), migra&#241;a vestibular (de 5 minutos a 72 horas) y <strong style="color:#8c3a34;">ACCIDENTE ISQUEMICO TRANSITORIO vertebrobasilar</strong>, que puede ser solo vertigo.</div>
    </div>
    <div style="display:grid;grid-template-columns:108px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">EPISODICO<br>PROVOCADO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Crisis de <strong style="color:var(--ink);">SEGUNDOS</strong> que aparecen al cambiar de posicion o al levantarse. Vertigo posicional paroxistico benigno (girar en la cama, mirar arriba) e <strong>HIPOTENSION ORTOSTATICA</strong> (al ponerse de pie). Aqui se hace <strong style="color:#3f6b52;">DIX-HALLPIKE</strong> o se toma la tension de pie.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">Y una condicion previa a todo lo anterior:</strong> el <strong>CONTEXTO</strong>. Un mareo con anemia aguda, sepsis, hipoglucemia, intoxicacion o un farmaco nuevo no entra en esta clasificacion, y buscar alli un nistagmo es perder el tiempo. La clasificacion sirve una vez descartado el mareo <strong>SINTOMATICO</strong> de una enfermedad general.
  </div>
</div>`;

const hintsHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">HINTS es una exploracion de tres pasos, no una prueba de imagen, y es MAS sensible que la resonancia precoz</strong> <span style="color:var(--ink-dim);">para detectar el ictus de fosa posterior en el sindrome vestibular agudo. Pero solo vale ahi: en el mareo episodico no significa nada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:98px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">IMPULSO<br>CEFALICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Giro rapido y peque&#241;o de la cabeza mirando a la nariz del explorador. Si aparece una <strong style="color:#3f6b52;">SACADA de correccion, es PERIFERICO</strong> (el reflejo esta roto). Si el ojo se queda clavado en el objetivo, es decir si el impulso es <strong style="color:#8c3a34;">NORMAL, eso es lo preocupante</strong>: en un paciente que lleva dias mareado, un reflejo intacto apunta al cerebro.</div>
    </div>
    <div style="display:grid;grid-template-columns:98px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">NISTAGMO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Periferico: horizontal, <strong style="color:#3f6b52;">SIEMPRE en la misma direccion</strong> mire donde mire, y aumenta al mirar hacia el lado rapido. Central: <strong style="color:#8c3a34;">CAMBIA de direccion</strong> con la mirada, o es puramente VERTICAL o TORSIONAL.</div>
    </div>
    <div style="display:grid;grid-template-columns:98px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a8c;">DESVIACION<br>VERTICAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se tapa y destapa cada ojo de forma alterna. Si al destaparlo el ojo hace un movimiento <strong style="color:#8c3a34;">VERTICAL de reajuste, es CENTRAL</strong>. Es el paso que mas se olvida y el mas especifico de los tres.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">BASTA UN SOLO HALLAZGO CENTRAL PARA QUE SEA CENTRAL</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Impulso NORMAL, nistagmo que CAMBIA de direccion o desviacion vertical presente: cualquiera de los tres, por si solo, obliga a manejarlo como un ictus. El patron tranquilizador exige los tres a la vez: impulso anormal, nistagmo unidireccional y sin desviacion vertical. Y la version ampliada a&#241;ade la <strong style="color:var(--ink);">HIPOACUSIA NUEVA</strong>, que tambien apunta a central, porque el territorio de la arteria cerebelosa anteroinferior irriga el oido interno.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Los dos errores que anulan la herramienta.</strong> Aplicarla <strong>FUERA</strong> del sindrome vestibular agudo, es decir a un mareo episodico o a un paciente sin nistagmo, donde no ha sido validada y no significa nada. Y darse por tranquilo con una <strong>TOMOGRAFIA normal</strong>, que apenas ve la fosa posterior, o incluso con una <strong>RESONANCIA precoz normal</strong>, que en las primeras 24 a 48 horas deja escapar una parte de los infartos peque&#241;os de esa region.
  </div>
</div>`;

const vppbHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">El vertigo posicional paroxistico benigno se diagnostica y se cura en la misma consulta,</strong> <span style="color:var(--ink-dim);">sin analitica, sin imagen y sin farmacos. Lo unico que hace falta es colocar bien la cabeza y mirar los ojos.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">CANAL POSTERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Es el 8 de cada 10. Se busca con <strong style="color:var(--ink);">DIX-HALLPIKE</strong>. Nistagmo <strong style="color:var(--ink);">hacia arriba y torsional</strong> hacia el oido de abajo, con <strong>LATENCIA</strong> de segundos, duracion menor de un minuto y agotamiento al repetir. Se trata con la maniobra de <strong style="color:#3f6b52;">EPLEY</strong>.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">CANAL HORIZONTAL</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Se busca con la <strong style="color:var(--ink);">MANIOBRA DE ROTACION EN DECUBITO</strong>, no con Dix-Hallpike. Nistagmo horizontal que bate <strong>HACIA EL SUELO</strong> (canalolitiasis) o <strong>HACIA EL TECHO</strong> (cupulolitiasis). Se trata con maniobras propias, no con Epley.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">CUANDO EL NISTAGMO POSICIONAL NO ES UN VERTIGO BENIGNO</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Nistagmo posicional que bate <strong style="color:var(--ink);">HACIA ABAJO</strong>, que <strong>NO tiene latencia</strong>, que <strong>NO se agota</strong>, que dura mas de un minuto o que se acompa&#241;a de cefalea intensa o de otra focalidad. Eso es un <strong style="color:#8c3a34;">POSICIONAL CENTRAL</strong> y obliga a pedir imagen de fosa posterior, no a repetir maniobras.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que NO hay que hacer.</strong> No pedir tomografia ni resonancia en un caso tipico. No dar sedantes vestibulares, que no curan y ademas <strong>RETRASAN la compensacion</strong>. Y no dar por bueno el diagnostico si el paciente esta mareado de forma continua entre las crisis, porque entonces no es un vertigo posicional.
    </div>
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Y lo que si conviene decir al paciente.</strong> Que la maniobra es eficaz y con frecuencia resuelve el cuadro en una o dos sesiones; que puede quedar inestabilidad unos dias sin que eso signifique fracaso; y que <strong>RECURRE</strong> en una parte de los casos, de modo que volver no es una mala se&#241;al sino algo previsible.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El mareo es uno de los motivos de consulta mas frecuentes en urgencias y uno de los que peor se resuelven. La razon es concreta: durante decadas el enfoque partia de preguntar <strong>como</strong> es el mareo, y esa pregunta no discrimina. Los pacientes cambian de respuesta al repreguntar, y describir el sintoma como giratorio o como inestabilidad no separa una neuritis de un infarto cerebeloso. El enfoque moderno cambia la pregunta.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: tiempo y desencadenante, no descripcion.</strong></p>
<p style="margin:0 0 12px;">Con dos preguntas (&#191;cuanto dura? y &#191;que lo provoca?) el mareo se reparte en tres sindromes que llevan a tres exploraciones distintas: el <strong>agudo y continuo</strong>, donde la pregunta es neuritis o ictus; el <strong>episodico espontaneo</strong>, donde estan Meniere, la migra&#241;a vestibular y el accidente isquemico transitorio; y el <strong>episodico provocado</strong>, donde estan el vertigo posicional y la hipotension ortostatica. Antes de todo eso hay que descartar el mareo sintomatico de una enfermedad general.</p>
${figBlock('Figura 1', 'Los tres sindromes: que dura, que lo provoca y que se explora', sindromesHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el sindrome vestibular agudo y el HINTS.</strong></p>
<p style="margin:0 0 12px;">Cuando el vertigo lleva dias sin interrupcion, la unica pregunta que importa es si es una neuritis o un ictus de fosa posterior. Y la respuesta se obtiene con una exploracion de tres pasos que, en manos entrenadas, es <strong>mas sensible que la resonancia precoz</strong>. Su hallazgo mas contraintuitivo es que un impulso cefalico <strong>normal</strong> es lo preocupante.</p>
${figBlock('Figura 2', 'HINTS: los tres pasos y por que lo normal asusta', hintsHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el vertigo posicional.</strong></p>
<p style="margin:0 0 12px;">Es la causa mas frecuente de vertigo y una de las pocas enfermedades que se diagnostican y se curan en la misma consulta, sin analitica, sin imagen y sin farmacos. Lo que hay que dominar es que canal esta afectado, porque la maniobra de tratamiento es distinta, y cuando un nistagmo posicional deja de ser benigno.</p>
${figBlock('Figura 3', 'Vertigo posicional: que canal, que maniobra y cuando desconfiar', vppbHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No basar el diagnostico en como describe el paciente el mareo. No aplicar el HINTS fuera del sindrome vestibular agudo, es decir a un mareo episodico o a un paciente sin nistagmo. No tranquilizarse con una tomografia normal, que apenas ve la fosa posterior, ni con una <strong>resonancia precoz</strong> normal en las primeras horas. No etiquetar de laberintitis a un paciente que <strong>no puede sentarse ni caminar sin ayuda</strong>, porque eso es una bandera de ictus cerebeloso. No pasar por alto la cefalea o la cervicalgia intensas de inicio brusco, que pueden ser una diseccion arterial. No prolongar los sedantes vestibulares, porque retrasan la compensacion. No pedir imagen en un vertigo posicional tipico. No dar por benigno un nistagmo posicional que bate hacia abajo o que no se agota. Y no olvidar que un vertigo <strong>episodico y aislado</strong>, sin ningun otro sintoma, puede ser un accidente isquemico transitorio vertebrobasilar.</p>`;

export const bibliografia = [
  'Tarnutzer AA, Bassetti CLA, Bertholon P, et al. Vertigo and dizziness: interdisciplinary guidance. HNO. 2025;73(Suppl 3):S357-S369.',
  'Kattah JC, Talkad AV, Wang DZ, Hsieh YH, Newman-Toker DE. HINTS to diagnose stroke in the acute vestibular syndrome: three-step bedside oculomotor examination more sensitive than early MRI diffusion-weighted imaging. Stroke. 2009;40(11):3504-3510.',
  'Newman-Toker DE, Edlow JA. TiTrATE: a novel, evidence-based approach to diagnosing acute dizziness and vertigo. Neurol Clin. 2015;33(3):577-599.',
  'Edlow JA, Gurley KL, Newman-Toker DE. A new diagnostic approach to the adult patient with acute dizziness. J Emerg Med. 2018;54(4):469-483.',
  'Bhattacharyya N, Gubbels SP, Schwartz SR, et al. Clinical practice guideline: benign paroxysmal positional vertigo (update). Otolaryngol Head Neck Surg. 2017;156(3 Suppl):S1-S47.',
  'von Brevern M, Bertholon P, Brandt T, et al. Benign paroxysmal positional vertigo: diagnostic criteria. J Vestib Res. 2015;25(3-4):105-117.',
  'Lopez-Escamez JA, Carey J, Chung WH, et al. Diagnostic criteria for Meniere disease. J Vestib Res. 2015;25(1):1-7.',
  'Lempert T, Olesen J, Furman J, et al. Vestibular migraine: diagnostic criteria. J Vestib Res. 2012;22(4):167-172.',
  'Strupp M, Zingler VC, Arbusow V, et al. Methylprednisolone, valacyclovir, or the combination for vestibular neuritis. N Engl J Med. 2004;351(4):354-361.',
  'Saber Tehrani AS, Kattah JC, Kerber KA, et al. Diagnosing stroke in acute dizziness and vertigo: pitfalls and pearls. Stroke. 2018;49(3):788-795.',
  'Newman-Toker DE, Kerber KA, Hsieh YH, et al. HINTS outperforms ABCD2 to screen for stroke in acute continuous vertigo and dizziness. Acad Emerg Med. 2013;20(10):986-996.',
  'Choi KD, Lee H, Kim JS. Vertigo in brainstem and cerebellar strokes. Curr Opin Neurol. 2013;26(1):90-95.',
  'Hotson JR, Baloh RW. Acute vestibular syndrome. N Engl J Med. 1998;339(10):680-685.',
  'Bisdorff A, von Brevern M, Lempert T, Newman-Toker DE. Classification of vestibular symptoms: towards an international classification of vestibular disorders. J Vestib Res. 2009;19(1-2):1-13.',
  'Strupp M, Kim JS, Murofushi T, et al. Bilateral vestibulopathy: diagnostic criteria. J Vestib Res. 2017;27(4):177-189.',
  'Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the early management of patients with acute ischemic stroke: 2019 update. Stroke. 2019;50(12):e344-e418.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Perfil periferico',
      tituloB: 'Perfil central',
      compensada: 'Vertigo intenso con nauseas y vomitos, que el paciente tolera mal pero que le permite MANTENERSE DE PIE con ayuda y caminar, aunque se desvie hacia un lado. Nistagmo horizontal y torsional, SIEMPRE en la misma direccion mire donde mire, que aumenta al mirar hacia el lado de la fase rapida y disminuye al fijar la vista. Impulso cefalico ANORMAL, con sacada de correccion hacia el lado enfermo. Sin desviacion vertical. Puede haber acufeno o sensacion de plenitud, y en la enfermedad de Meniere hipoacusia fluctuante de tonos graves y medios.',
      descompensada: 'A veces el vertigo es MENOS intenso que en el periferico, y esa aparente levedad enga&#241;a. Los datos que delatan el origen central son otros: INCAPACIDAD PARA SENTARSE O CAMINAR sin ayuda, que es la bandera roja mas util a pie de cama; nistagmo que CAMBIA de direccion con la mirada, o puramente vertical o torsional; DESVIACION VERTICAL en la prueba de tapar y destapar; impulso cefalico NORMAL; hipoacusia de nueva aparicion; y cualquier otra focalidad, como diplopia, disartria, disfagia, hipo persistente, sindrome de Horner o alteracion sensitiva cruzada. La cefalea o la cervicalgia intensas de inicio brusco obligan a pensar en una DISECCION arterial.'
    },
    laboratorio: [
      { prueba: 'Glucemia capilar', utilidad: 'Inmediata y obligatoria: la hipoglucemia produce mareo y focalidad, y es reversible en minutos. Forma parte del descarte del mareo SINTOMATICO de una enfermedad general, que precede a toda la clasificacion vestibular.' },
      { prueba: 'Hemograma', utilidad: 'La anemia aguda y el sangrado producen mareo de tipo presincopal, que no es un sindrome vestibular y no se estudia con maniobras. Buscar alli un nistagmo es perder tiempo mientras el paciente sigue sangrando.' },
      { prueba: 'Iones, funcion renal y calcio', utilidad: 'La hiponatremia, la deshidratacion y las alteraciones del calcio y del magnesio producen mareo e inestabilidad. Son causas frecuentes y facilmente corregibles en el anciano polimedicado.' },
      { prueba: 'Revision de la lista de farmacos', utilidad: 'No es una prueba pero rinde mas que muchas: antihipertensivos, alfabloqueantes, antidepresivos, benzodiacepinas, antiepilepticos, aminoglucosidos (ototoxicos) y sedantes vestibulares prolongados producen o perpetuan el mareo.' },
      { prueba: 'Electrocardiograma', utilidad: 'Obligado ante un mareo desencadenado por ponerse de pie o con perfil presincopal. Busca bradiarritmia, taquiarritmia y trastornos de conduccion, que son causas de mareo que no responden a ninguna maniobra vestibular.' },
      { prueba: 'Tension arterial en decubito y en bipedestacion', utilidad: 'La prueba mas barata del tema y una de las mas rentables en el mareo episodico PROVOCADO por levantarse. Se mide tras 3 minutos de pie y se considera positiva con un descenso de 20 mmHg en la sistolica o de 10 en la diastolica.' },
      { prueba: 'Funcion tiroidea y vitamina B12', utilidad: 'En la inestabilidad cronica y en el mareo persistente, sobre todo del anciano, donde el problema suele ser multifactorial: vestibular, visual, propioceptivo, farmacologico y cognitivo a la vez.' },
      { prueba: 'Estudio de causa vascular tras un ictus confirmado', utilidad: 'Cuando el vertigo resulta ser un ictus de fosa posterior, el estudio es el mismo que en cualquier otro: imagen de vasos cervicales e intracraneales, ecocardiograma, monitorizacion del ritmo y perfil de riesgo vascular.' }
    ],
    no_invasivos: [
      { metodo: 'Clasificacion por tiempo y desencadenante (calculadora disponible)', interpretacion: 'Reparte el mareo en agudo continuo, episodico espontaneo y episodico provocado, y devuelve la exploracion que corresponde a cada uno.', cutoff: 'Sustituye a la pregunta de como es el mareo, que no discrimina' },
      { metodo: 'HINTS ampliado (calculadora disponible)', interpretacion: 'Tres pasos oculomotores mas la audicion en el sindrome vestibular agudo. Un solo hallazgo central basta para manejarlo como ictus.', cutoff: 'Impulso NORMAL, nistagmo que cambia de direccion o desviacion vertical: central' },
      { metodo: 'Nistagmo posicional (calculadora disponible)', interpretacion: 'Interpreta el nistagmo del Dix-Hallpike y de la maniobra de rotacion en decubito para identificar el canal y elegir la maniobra de reposicion.', cutoff: 'Sin latencia, sin agotamiento o batiendo hacia abajo: sospecha de causa central' },
      { metodo: 'Prueba del impulso cefalico', interpretacion: 'Explora el reflejo vestibuloocular con un giro rapido y de peque&#241;a amplitud. La aparicion de una sacada de correccion indica lesion PERIFERICA de ese lado.', cutoff: 'Impulso NORMAL en un paciente con vertigo continuo: sospecha de ictus' },
      { metodo: 'Prueba de tapar y destapar alterno', interpretacion: 'Busca la desviacion vertical: al destapar un ojo, este hace un movimiento vertical de reajuste. Es el paso mas especifico del HINTS y el que mas se olvida.', cutoff: 'Su presencia indica origen CENTRAL' },
      { metodo: 'Marcha y equilibrio', interpretacion: 'Sentarse sin apoyo, ponerse de pie y caminar. Es la exploracion mas util y la mas rapida: no depende de aparatos ni de entrenamiento especial.', cutoff: 'INCAPACIDAD para sentarse o caminar sin ayuda: bandera roja de ictus cerebeloso' }
    ],
    imagen: [
      { modalidad: 'Tomografia craneal sin contraste', hallazgos: 'Poco util para la fosa posterior por el artefacto oseo: deja escapar la mayoria de los infartos cerebelosos y de tronco. Sirve sobre todo para descartar HEMORRAGIA. Una tomografia normal no descarta un ictus de fosa posterior y no debe tranquilizar.' },
      { modalidad: 'Resonancia con difusion', hallazgos: 'Es la prueba de imagen de eleccion, pero con una advertencia importante: en las primeras 24 a 48 horas deja escapar una parte de los infartos PEQUE&#209;OS de fosa posterior. Ante una exploracion central y una resonancia precoz normal, hay que repetirla y no dar el alta.' },
      { modalidad: 'Angiografia por tomografia o resonancia de troncos y poligono', hallazgos: 'Busca estenosis vertebrobasilar y sobre todo DISECCION VERTEBRAL, que hay que sospechar ante cefalea o cervicalgia intensas de inicio brusco, sobre todo en pacientes jovenes o tras un traumatismo o una manipulacion cervical.' },
      { modalidad: 'Resonancia de oido interno y angulo pontocerebeloso', hallazgos: 'Indicada ante hipoacusia neurosensorial unilateral progresiva o inestabilidad con acufeno unilateral, buscando un schwannoma vestibular. No es una peticion de urgencias sino del estudio ambulatorio dirigido.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion util no es por la <strong>calidad</strong> del sintoma (giratorio, inestabilidad, presincope o mareo inespecifico), que ha demostrado no discriminar, sino por el <strong>TIEMPO</strong> y el <strong>DESENCADENANTE</strong>. De ahi salen tres sindromes: <strong>agudo continuo</strong>, <strong>episodico espontaneo</strong> y <strong>episodico provocado</strong>, cada uno con su lista corta de causas y su exploracion propia. Dentro del agudo continuo, la division que decide todo es <strong>periferico frente a central</strong>. Y por encima de toda la clasificacion esta el mareo <strong>sintomatico</strong> de una enfermedad general, que hay que descartar antes.`,
    escalas: [
      { nombre: 'Clasificacion por tiempo y desencadenante (calculadora disponible)', componentes: 'Duracion del episodio, presencia o ausencia de desencadenante, continuidad de los sintomas entre episodios y contexto sistemico.', formula: 'Agudo continuo: dias sin interrupcion. Episodico espontaneo: crisis que empiezan sin causa. Episodico provocado: segundos, al cambiar de posicion o al levantarse.', interpretacion: 'Cada sindrome lleva a una exploracion distinta: HINTS en el agudo continuo, historia dirigida y estudio vascular en el episodico espontaneo, y Dix-Hallpike o tension en bipedestacion en el provocado. Aplicar la exploracion del sindrome equivocado es el error de metodo mas frecuente.' },
      { nombre: 'HINTS ampliado (calculadora disponible)', componentes: 'Impulso cefalico, direccion del nistagmo, desviacion vertical en la prueba de tapar y destapar, y audicion de nueva aparicion.', formula: 'Central si el impulso es NORMAL, o el nistagmo CAMBIA de direccion, o hay desviacion vertical, o hay hipoacusia nueva. Periferico solo si el impulso es anormal, el nistagmo es unidireccional y no hay desviacion vertical.', interpretacion: 'En manos entrenadas es MAS sensible que la resonancia precoz para el ictus de fosa posterior. Solo es valida en el SINDROME VESTIBULAR AGUDO, con vertigo continuo y nistagmo: fuera de ese escenario no ha sido validada y no significa nada.' },
      { nombre: 'Nistagmo posicional (calculadora disponible)', componentes: 'Maniobra realizada, direccion del nistagmo, latencia, duracion y agotamiento al repetir.', formula: 'Dix-Hallpike con nistagmo hacia arriba y torsional: canal posterior, maniobra de Epley. Rotacion en decubito con nistagmo horizontal: canal horizontal, maniobras propias.', interpretacion: 'Un nistagmo posicional que bate HACIA ABAJO, sin latencia, sin agotamiento o de duracion prolongada obliga a pensar en causa CENTRAL y a pedir imagen de fosa posterior en lugar de repetir maniobras.' },
      { nombre: 'Criterios diagnosticos de enfermedad de Meniere', componentes: 'Episodios de vertigo espontaneo, hipoacusia documentada, sintomas auditivos fluctuantes y exclusion de otras causas.', formula: 'Dos o mas episodios espontaneos de 20 minutos a 12 horas, con hipoacusia neurosensorial de tonos graves y medios documentada en al menos una ocasion, mas acufeno o plenitud fluctuantes en el mismo oido.', interpretacion: 'La duracion y la HIPOACUSIA DOCUMENTADA son lo que la separa de la migra&#241;a vestibular. Exige audiometria: sin ella el diagnostico no se sostiene y con frecuencia se usa como etiqueta comoda.' },
      { nombre: 'Criterios diagnosticos de migra&#241;a vestibular', componentes: 'Episodios vestibulares, antecedente de migra&#241;a y caracteristicas migra&#241;osas durante las crisis.', formula: 'Al menos cinco episodios de sintomas vestibulares de intensidad moderada o grave, de 5 minutos a 72 horas, con antecedente de migra&#241;a y rasgos migra&#241;osos (cefalea, fotofobia, fonofobia o aura) en al menos la mitad de los episodios.', interpretacion: 'Es una causa muy frecuente e infradiagnosticada de vertigo episodico. La clave esta en preguntar por la cefalea y por la fotofobia DURANTE la crisis, algo que el paciente no relaciona ni cuenta de forma espontanea.' },
      { nombre: 'Banderas rojas del mareo agudo', componentes: 'Marcha, cefalea y cervicalgia, focalidad neurologica, perfil de riesgo vascular y edad.', formula: 'Incapacidad para caminar o sentarse sin ayuda, cefalea o cervicalgia intensas de inicio brusco, cualquier focalidad, hipoacusia nueva, nistagmo central o factores de riesgo vascular acumulados.', interpretacion: 'La INCAPACIDAD PARA MANTENERSE DE PIE es la mas util a pie de cama y la que menos entrenamiento exige. Un paciente que no puede sentarse sin ayuda no tiene una laberintitis.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfoque del mareo: tiempo y desencadenante',
      color: '#4a7a5c',
      definicion: 'Metodo de aproximacion al paciente con mareo basado en la duracion y en el desencadenante de los sintomas, y no en como el paciente describe la sensacion.',
      fisiopatologia: 'El equilibrio depende de tres entradas (vestibular, visual y propioceptiva) integradas en el tronco y en el cerebelo. Un fallo agudo y asimetrico del sistema vestibular produce una se&#241;al de giro constante y por eso el vertigo agudo es continuo. Un fallo intermitente, como el hidrops de la enfermedad de Meniere o la disfuncion transitoria de la migra&#241;a, produce crisis espontaneas. Y un estimulo mecanico intermitente, como los otoconios desplazados dentro de un canal, produce crisis muy breves provocadas por el movimiento. Esa logica es exactamente la que sostiene la clasificacion por tiempo y desencadenante.',
      epidemiologia: 'El mareo es uno de los motivos de consulta mas frecuentes en urgencias. Una proporcion relevante de los ictus de fosa posterior se presenta como mareo aislado, y una parte de ellos se va a casa con un diagnostico de vertigo periferico, lo que constituye uno de los errores diagnosticos mas estudiados de la medicina de urgencias.',
      factores_riesgo: ['Edad avanzada', 'Hipertension arterial, diabetes y dislipemia', 'Tabaquismo', 'Fibrilacion auricular', 'Antecedente de ictus o de accidente isquemico transitorio', 'Traumatismo cervical o manipulacion cervical reciente', 'Polifarmacia, sobre todo antihipertensivos y psicofarmacos', 'Deficit visual y neuropatia periferica en el anciano', 'Antecedente de migra&#241;a', 'Consumo de alcohol y de sedantes'],
      clinica: 'Dos preguntas ordenan el caso: cuanto DURA y que lo PROVOCA. Y una tercera que precede a las otras: hay una enfermedad general que lo explique (anemia, sepsis, hipoglucemia, farmaco nuevo o intoxicacion). La pregunta de COMO es el mareo se ha demostrado poco fiable, porque los pacientes cambian de respuesta al repreguntar.',
      criterios_dx: 'No hay criterios unicos: es un metodo. De el salen tres sindromes con tres exploraciones distintas. Ver la Figura 1 de Definicion.',
      laboratorio: 'GLUCEMIA CAPILAR inmediata. Hemograma, iones, funcion renal y calcio segun el contexto. Electrocardiograma en el perfil presincopal. Y una revision cuidadosa de la lista de FARMACOS, que rinde mas que muchas pruebas.',
      imagen: 'No de entrada. Se pide segun el sindrome y la exploracion, no por el sintoma. Pedir una tomografia a todo paciente mareado consume tiempo, tranquiliza en falso y no responde a la pregunta.',
      complementarios: 'Tension arterial en decubito y tras 3 minutos de pie, que es la prueba mas barata y una de las mas rentables en el mareo provocado por levantarse.',
      dx_diferencial: 'Mareo SINTOMATICO de enfermedad general (anemia, sepsis, hipoglucemia, farmacos, intoxicacion), presincope de causa cardiaca, inestabilidad multifactorial del anciano, mareo perceptual postural persistente y trastorno de ansiedad.',
      tx_medico: 'El del sindrome identificado. La regla general: los sedantes vestibulares se usan poco tiempo y solo en la fase aguda muy sintomatica, porque RETRASAN la compensacion central si se prolongan.',
      tx_farmacologico: 'Especifico de cada causa. En el mareo del anciano, con frecuencia el mejor tratamiento es RETIRAR farmacos en lugar de a&#241;adirlos.',
      tx_intervencionista: 'Maniobras de reposicion en el vertigo posicional. Nada en la fase de clasificacion.',
      criterios_uci: 'No por el mareo en si, sino por su causa: ictus de fosa posterior con deterioro, arritmia grave o enfermedad sistemica descompensada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar si el cuadro no encaja con el sindrome asignado. Un mareo que cambia de patron obliga a reclasificar desde el principio y no a insistir con la misma exploracion.',
      seguimiento_ambulatorio: 'En el mareo cronico del anciano, abordaje multifactorial: revision de farmacos, vision, propiocepcion, fuerza, rehabilitacion vestibular y prevencion de caidas.',
      pronostico: 'Excelente en la mayoria de las causas. Lo que empeora el pronostico global es no reconocer la minoria de origen vascular, que es precisamente lo que este metodo pretende evitar.',
      algoritmo: ['Descartar primero el mareo SINTOMATICO de enfermedad general', 'Medir glucemia capilar', 'Preguntar cuanto DURA', 'Preguntar que lo PROVOCA', 'No basar el diagnostico en como lo describe el paciente', 'Clasificar en agudo continuo, episodico espontaneo o provocado', 'Aplicar la exploracion propia de ese sindrome', 'Explorar SIEMPRE la marcha y la sedestacion', 'Revisar la lista de farmacos', 'Pedir imagen solo si la exploracion lo justifica']
    },
    {
      nombre: 'Sindrome vestibular agudo: neuritis o ictus',
      color: '#8c3a34',
      definicion: 'Vertigo de instauracion aguda y curso CONTINUO durante dias, con nauseas, nistagmo, intolerancia al movimiento cefalico e inestabilidad, cuya unica pregunta relevante es si el origen es periferico o central.',
      fisiopatologia: 'Un desequilibrio agudo entre los nucleos vestibulares de ambos lados genera una se&#241;al permanente de giro. Ese desequilibrio puede producirse por lesion del nervio vestibular (neuritis) o por infarto del tronco o del cerebelo. Los territorios que producen vertigo aislado son sobre todo el de la arteria cerebelosa posteroinferior, que puede da&#241;ar el pedunculo cerebeloso inferior sin dar otra focalidad, y el de la anteroinferior, que ademas irriga el OIDO INTERNO y por eso puede producir HIPOACUSIA, lo que hace que un infarto se parezca a un problema del oido. Esa anatomia explica por que la clinica sola no basta y hace falta una exploracion oculomotora dirigida.',
      epidemiologia: 'La causa mas frecuente es la neuritis vestibular, pero una minoria relevante de estos cuadros es un ictus, y esa minoria es la que importa. El riesgo de que el ictus pase desapercibido es mayor en pacientes jovenes y en los que solo tienen mareo, porque la ausencia de otra focalidad se interpreta como tranquilizadora cuando no lo es.',
      factores_riesgo: ['Factores de riesgo vascular acumulados', 'Edad avanzada', 'Fibrilacion auricular', 'Antecedente de ictus o de accidente isquemico transitorio', 'Cefalea o cervicalgia intensas de inicio brusco, por diseccion', 'Traumatismo o manipulacion cervical recientes', 'Hipoacusia de nueva aparicion', 'Incapacidad para caminar o sentarse sin ayuda', 'Nistagmo que cambia de direccion con la mirada', 'Impulso cefalico normal en un paciente con vertigo continuo'],
      clinica: 'Vertigo CONTINUO de dias, nauseas, vomitos, nistagmo espontaneo, intolerancia al movimiento de la cabeza e inestabilidad. Lo que separa periferico de central no es la intensidad del vertigo, que puede ser MENOR en el central, sino la exploracion: marcha, impulso cefalico, direccion del nistagmo, desviacion vertical, audicion y cualquier otra focalidad.',
      criterios_dx: 'Sindrome vestibular agudo definido por vertigo continuo de mas de 24 horas con nistagmo. Sobre el se aplica el HINTS ampliado. Ver la Figura 2 de Definicion.',
      laboratorio: 'Glucemia, hemograma, iones y funcion renal. Si se confirma un ictus, estudio etiologico completo: perfil vascular, ecocardiograma y monitorizacion del ritmo.',
      imagen: 'RESONANCIA CON DIFUSION como prueba de eleccion, sabiendo que en las primeras 24 a 48 horas deja escapar una parte de los infartos peque&#241;os de fosa posterior. La TOMOGRAFIA apenas ve esa region y sirve sobre todo para descartar hemorragia. Angiografia si se sospecha DISECCION.',
      complementarios: 'HINTS AMPLIADO a pie de cama. Exploracion de la marcha y de la sedestacion, que es la mas util y la que menos entrenamiento exige. Audiometria si hay hipoacusia.',
      dx_diferencial: 'Neuritis vestibular, laberintitis, ictus de fosa posterior, esclerosis multiple con brote de tronco, primer episodio de migra&#241;a vestibular prolongada, intoxicacion farmacologica y encefalopatia de Wernicke, que produce nistagmo, ataxia y oftalmoparesia y es tratable con tiamina.',
      tx_medico: 'Si la exploracion es central, se maneja como un ICTUS desde el primer minuto, con la via correspondiente y valorando reperfusion si esta en ventana. Si es periferica, hidratacion, antiemeticos y movilizacion precoz.',
      tx_farmacologico: 'En la neuritis vestibular, CORTICOIDES en fase precoz, que mejoran la recuperacion de la funcion vestibular. Sedantes vestibulares solo unos POCOS DIAS y en la fase mas sintomatica, porque prolongarlos retrasa la compensacion central.',
      tx_intervencionista: 'En el ictus de fosa posterior, tratamiento de reperfusion si procede, y CRANIECTOMIA DESCOMPRESIVA o drenaje ventricular en el infarto cerebeloso con efecto de masa, que es una complicacion tratable y potencialmente mortal.',
      criterios_uci: 'Infarto cerebeloso extenso con riesgo de edema y compresion del tronco o hidrocefalia, deterioro del nivel de conciencia y compromiso respiratorio o de la deglucion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el infarto cerebeloso, vigilancia estrecha durante las primeras 48 a 72 horas por el riesgo de EDEMA con deterioro brusco. En la neuritis, rehabilitacion vestibular precoz y retirada temprana de los sedantes.',
      seguimiento_ambulatorio: 'Rehabilitacion vestibular, que es el tratamiento con mas respaldo en la recuperacion. Prevencion secundaria completa si fue un ictus. Y reevaluacion si el cuadro no mejora como se espera.',
      pronostico: 'La neuritis mejora en semanas con compensacion central, aunque puede quedar inestabilidad al movimiento rapido. El ictus de fosa posterior tiene pronostico variable y su principal riesgo evitable es no haberlo reconocido a tiempo.',
      algoritmo: ['Confirmar que el vertigo es CONTINUO y hay nistagmo', 'Explorar la MARCHA: si no puede sentarse ni caminar, pensar en ictus', 'Hacer la prueba del IMPULSO CEFALICO', 'Mirar si el nistagmo CAMBIA de direccion con la mirada', 'Hacer la prueba de tapar y destapar buscando DESVIACION VERTICAL', 'Preguntar por HIPOACUSIA de nueva aparicion', 'Un solo hallazgo central obliga a manejarlo como ictus', 'No tranquilizarse con una tomografia normal', 'Repetir la resonancia si fue precoz y la exploracion era central', 'Si es periferico, corticoides precoces y rehabilitacion vestibular']
    },
    {
      nombre: 'Vertigo posicional paroxistico benigno',
      color: '#3f6b52',
      definicion: 'Vertigo breve y recurrente desencadenado por cambios de posicion de la cabeza, producido por el desplazamiento de otoconios dentro de un canal semicircular.',
      fisiopatologia: 'Los otoconios, cristales de carbonato calcico que normalmente estan adheridos a la macula del utriculo, se desprenden y entran en un canal semicircular. Al mover la cabeza, esa masa se desplaza por gravedad y arrastra la endolinfa, estimulando el canal como si la cabeza girase. Eso explica todas las caracteristicas del cuadro: la LATENCIA de segundos (el tiempo que tardan en moverse), la duracion menor de un minuto (lo que tardan en asentarse), el AGOTAMIENTO al repetir (se dispersan) y el hecho de que la maniobra de reposicion cure, porque simplemente los devuelve al utriculo.',
      epidemiologia: 'Es la causa mas frecuente de vertigo. Predomina en mujeres y aumenta con la edad. El canal POSTERIOR es el afectado en la gran mayoria de los casos, y el horizontal en una minoria. Recurre en una proporcion relevante de pacientes, lo que conviene anticipar para que la recurrencia no se viva como un fracaso.',
      factores_riesgo: ['Edad avanzada', 'Sexo femenino', 'Traumatismo craneal, incluso leve', 'Reposo prolongado en cama', 'Neuritis vestibular previa', 'Enfermedad de Meniere', 'Migra&#241;a', 'Osteoporosis y deficit de vitamina D', 'Cirugia otologica o dental prolongada', 'Antecedente de episodios previos'],
      clinica: 'Crisis de SEGUNDOS, siempre menores de un minuto, desencadenadas por girarse en la cama, tumbarse, incorporarse, mirar hacia arriba o agacharse. Entre las crisis el paciente esta BIEN, aunque puede quedar una sensacion de inestabilidad. NO hay hipoacusia, ni acufeno, ni focalidad, ni cefalea.',
      criterios_dx: 'Episodios recurrentes de vertigo posicional mas nistagmo caracteristico provocado por la maniobra correspondiente. Canal posterior con Dix-Hallpike, canal horizontal con la maniobra de rotacion en decubito. Ver la Figura 3 de Definicion.',
      laboratorio: 'NINGUNO. El diagnostico es de exploracion, y pedir analitica en un caso tipico no aporta nada.',
      imagen: 'NO INDICADA en el caso tipico. Se reserva para los casos atipicos: nistagmo que bate hacia abajo, sin latencia, sin agotamiento, prolongado, o acompa&#241;ado de cefalea o de focalidad.',
      complementarios: 'DIX-HALLPIKE para el canal posterior. MANIOBRA DE ROTACION EN DECUBITO para el horizontal, que es la que se omite y la razon por la que algunos casos se etiquetan de resistentes. Idealmente con gafas que impidan la fijacion visual, que enmascara el nistagmo.',
      dx_diferencial: 'Vertigo posicional CENTRAL, sobre todo por lesiones de la fosa posterior; hipotension ortostatica; migra&#241;a vestibular con componente posicional; mareo perceptual postural persistente; y ansiedad.',
      tx_medico: 'MANIOBRAS DE REPOSICION, que son el tratamiento: Epley para el canal posterior y maniobras propias para el horizontal. Se pueden repetir en la misma sesion y en visitas sucesivas. Rehabilitacion vestibular si queda inestabilidad residual.',
      tx_farmacologico: 'NINGUNO como tratamiento. Los sedantes vestibulares no curan, no acortan el cuadro y RETRASAN la compensacion; a lo sumo se usa un antiemetico puntual antes de la maniobra en un paciente muy sintomatico.',
      tx_intervencionista: 'Excepcional. Obliteracion quirurgica del canal en casos incapacitantes, resistentes y bien documentados tras multiples tratamientos correctamente realizados.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso. Si el paciente ingresado presenta vertigo posicional, la maniobra se puede hacer a pie de cama y evita dias de sedantes innecesarios.',
      seguimiento_ambulatorio: 'Revision para confirmar la resolucion. Explicar que RECURRE en una parte de los casos y que volver no es una mala se&#241;al. Corregir el deficit de vitamina D si existe.',
      pronostico: 'Excelente. La mayoria se resuelve con una o dos maniobras. Lo que empeora la experiencia del paciente no es la enfermedad sino el circuito: meses de sedantes, pruebas de imagen y consultas sin que nadie le coloque la cabeza.',
      algoritmo: ['Confirmar crisis de SEGUNDOS provocadas por el movimiento', 'Comprobar que entre las crisis el paciente esta bien', 'Descartar hipoacusia, acufeno, cefalea y focalidad', 'Hacer DIX-HALLPIKE de los dos lados', 'Observar direccion, latencia, duracion y agotamiento del nistagmo', 'Si es hacia arriba y torsional, hacer EPLEY', 'Si el Dix-Hallpike es negativo, hacer la rotacion en decubito', 'Tratar el canal horizontal con su maniobra propia', 'NO pedir imagen ni dar sedantes en el caso tipico', 'Advertir de la posible recurrencia y citar para comprobar']
    },
    {
      nombre: 'Vertigo episodico espontaneo',
      color: '#8a6a1f',
      definicion: 'Crisis recurrentes de vertigo que comienzan sin desencadenante identificable y ceden espontaneamente, con un intervalo asintomatico o casi asintomatico entre ellas.',
      fisiopatologia: 'En la enfermedad de Meniere el mecanismo propuesto es el HIDROPS ENDOLINFATICO: un aumento de volumen de la endolinfa que distiende el laberinto membranoso y produce disfuncion episodica, lo que explica que se afecten a la vez el equilibrio y la audicion y que los sintomas fluctuen. En la migra&#241;a vestibular se postula una disfuncion transitoria de las vias de integracion vestibular, con los mismos mecanismos que generan el aura y la sensibilizacion central. Y en el accidente isquemico transitorio vertebrobasilar la causa es una hipoperfusion transitoria del territorio posterior, que puede afectar de forma aislada a las estructuras vestibulares del tronco.',
      epidemiologia: 'La migra&#241;a vestibular es muy frecuente y esta infradiagnosticada, en parte porque el paciente no relaciona el vertigo con su migra&#241;a y no lo cuenta. La enfermedad de Meniere es menos frecuente y se sobrediagnostica cuando no se documenta la hipoacusia. Y el vertigo puede ser la unica manifestacion de un accidente isquemico transitorio vertebrobasilar, que precede en ocasiones a un infarto establecido.',
      factores_riesgo: ['Antecedente personal o familiar de migra&#241;a', 'Sexo femenino para la migra&#241;a vestibular', 'Factores de riesgo vascular para el origen isquemico', 'Edad avanzada', 'Fibrilacion auricular', 'Estenosis vertebrobasilar conocida', 'Antecedente de hipoacusia fluctuante', 'Estres, privacion de sue&#241;o y ayuno como desencadenantes de migra&#241;a', 'Consumo elevado de sal en la enfermedad de Meniere', 'Traumatismo craneal previo'],
      clinica: 'MENIERE: crisis de 20 minutos a 12 horas con hipoacusia, acufeno y plenitud en el mismo oido, que fluctuan. MIGRA&#209;A VESTIBULAR: crisis de 5 minutos a 72 horas, con antecedente de migra&#241;a y rasgos migra&#241;osos (cefalea, fotofobia, fonofobia o aura) en al menos la mitad de los episodios; hay que PREGUNTARLO, porque el paciente no lo relaciona. ACCIDENTE ISQUEMICO TRANSITORIO: crisis breves, con factores de riesgo vascular, a veces con otros sintomas de territorio posterior.',
      criterios_dx: 'Criterios especificos para la enfermedad de Meniere (que exigen hipoacusia DOCUMENTADA con audiometria) y para la migra&#241;a vestibular. El accidente isquemico transitorio es un diagnostico clinico que obliga a estudio vascular urgente.',
      laboratorio: 'Perfil vascular completo si se sospecha origen isquemico. Analitica general para descartar causas sistemicas. Ninguna prueba de laboratorio confirma por si sola una enfermedad de Meniere ni una migra&#241;a vestibular.',
      imagen: 'RESONANCIA Y ESTUDIO VASCULAR con urgencia si se sospecha accidente isquemico transitorio, con el mismo circuito que cualquier otro. En la migra&#241;a vestibular y en la enfermedad de Meniere la imagen sirve para excluir otras causas, no para confirmarlas.',
      complementarios: 'AUDIOMETRIA, imprescindible: sin ella el diagnostico de enfermedad de Meniere no se sostiene. Diario de crisis, que es muy util para identificar patrones y desencadenantes. Ecocardiograma y monitorizacion del ritmo si se sospecha origen embolico.',
      dx_diferencial: 'Entre ellas tres, que es lo mas frecuente; schwannoma vestibular; fistula perilinfatica; dehiscencia del canal semicircular superior; crisis de panico; y arritmia con perfil presincopal.',
      tx_medico: 'MENIERE: reduccion de sal, control de desencadenantes y rehabilitacion vestibular. MIGRA&#209;A VESTIBULAR: higiene de sue&#241;o, regularidad de comidas, identificacion de desencadenantes y tratamiento de la migra&#241;a. ISQUEMICO: prevencion secundaria completa e inmediata.',
      tx_farmacologico: 'En la enfermedad de Meniere, diureticos y betahistina segun disponibilidad, con evidencia limitada, y corticoide intratimpanico en casos seleccionados. En la migra&#241;a vestibular, tratamiento preventivo de la migra&#241;a. En el accidente isquemico transitorio, antiagregacion o anticoagulacion segun la causa, iniciada sin demora.',
      tx_intervencionista: 'En la enfermedad de Meniere refractaria e incapacitante, gentamicina intratimpanica o cirugia, valorando el riesgo de perdida auditiva. Revascularizacion si la causa isquemica lo indica.',
      criterios_uci: 'No por el vertigo, sino por la causa: ictus establecido o inestabilidad hemodinamica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Un vertigo episodico con factores de riesgo vascular NO se estudia de forma diferida: se maneja como un accidente isquemico transitorio, con el mismo circuito y la misma urgencia que cualquier otro.',
      seguimiento_ambulatorio: 'Diario de crisis, audiometrias seriadas en la enfermedad de Meniere, ajuste del tratamiento preventivo en la migra&#241;a vestibular y rehabilitacion vestibular si queda inestabilidad.',
      pronostico: 'La migra&#241;a vestibular responde bien al tratamiento preventivo. La enfermedad de Meniere tiende a producir perdida auditiva progresiva del oido afectado. Y el accidente isquemico transitorio tiene un riesgo elevado de infarto precoz, que es exactamente lo que hace urgente distinguirlo.',
      algoritmo: ['Confirmar que las crisis empiezan SIN desencadenante', 'Medir cuanto duran, que es lo que mas separa las causas', 'Preguntar por hipoacusia, acufeno y plenitud del oido', 'Preguntar por cefalea y fotofobia DURANTE las crisis', 'Revisar los factores de riesgo vascular', 'Pedir AUDIOMETRIA si se sospecha Meniere', 'Si hay perfil vascular, manejarlo como accidente isquemico transitorio', 'Iniciar prevencion secundaria sin demora si es isquemico', 'Tratar la migra&#241;a de forma preventiva si ese es el diagnostico', 'Usar un diario de crisis para el seguimiento']
    },
    {
      nombre: 'Ictus de fosa posterior con vertigo aislado',
      color: '#3d5a73',
      definicion: 'Infarto o hemorragia de tronco o de cerebelo que se manifiesta unicamente como mareo o vertigo, sin la focalidad evidente que hace pensar en un ictus.',
      fisiopatologia: 'El territorio de la arteria cerebelosa posteroinferior irriga el cerebelo inferior y la parte lateral del bulbo. Un infarto limitado al pedunculo cerebeloso inferior o al nodulo puede producir vertigo INTENSO sin debilidad, sin alteracion del habla y sin ningun otro signo, porque esas regiones no contienen vias motoras ni sensitivas principales. El territorio de la anteroinferior a&#241;ade el oido interno, y por eso puede producir hipoacusia y simular un problema otologico. Esa anatomia es la razon por la que el vertigo aislado puede ser un ictus y por la que hace falta una exploracion oculomotora dirigida en lugar de confiar en la ausencia de focalidad.',
      epidemiologia: 'Una minoria de los sindromes vestibulares agudos es vascular, pero es una minoria de consecuencias graves. El vertigo aislado como forma de presentacion del ictus se asocia a mayor probabilidad de diagnostico erroneo inicial, sobre todo en pacientes jovenes, en quienes se asume con demasiada facilidad un origen periferico.',
      factores_riesgo: ['Factores de riesgo vascular acumulados', 'Edad avanzada', 'Fibrilacion auricular', 'Antecedente de ictus o de accidente isquemico transitorio', 'Diseccion vertebral, sobre todo en jovenes', 'Traumatismo o manipulacion cervical reciente', 'Cefalea o cervicalgia intensas de inicio brusco', 'Consumo de cocaina y de otros simpaticomimeticos', 'Estados protromboticos', 'Ausencia de exploracion oculomotora dirigida'],
      clinica: 'Vertigo continuo que puede ser MENOS intenso que el de una neuritis, lo que enga&#241;a. Los datos que lo delatan son la INCAPACIDAD PARA SENTARSE O CAMINAR sin ayuda, el nistagmo que cambia de direccion o es vertical o torsional, la desviacion vertical, el impulso cefalico normal y la hipoacusia nueva. Hay que buscar ademas diplopia, disartria, disfagia, hipo persistente, sindrome de Horner y alteracion sensitiva cruzada.',
      criterios_dx: 'Sospecha por exploracion, confirmacion por imagen. Y una advertencia central: una resonancia PRECOZ normal no descarta el diagnostico si la exploracion es central.',
      laboratorio: 'Glucemia, hemograma, coagulacion y perfil vascular. Estudio etiologico completo del ictus una vez confirmado.',
      imagen: 'RESONANCIA CON DIFUSION, sabiendo que en las primeras 24 a 48 horas deja escapar una parte de los infartos peque&#241;os de fosa posterior. La tomografia apenas ve esa region. ANGIOGRAFIA de troncos y de circulacion posterior buscando estenosis y sobre todo DISECCION VERTEBRAL.',
      complementarios: 'HINTS AMPLIADO, mas sensible que la resonancia precoz en manos entrenadas. Ecocardiograma y monitorizacion prolongada del ritmo. Y vigilancia neurologica estrecha durante las primeras 72 horas.',
      dx_diferencial: 'Neuritis vestibular, laberintitis, brote de esclerosis multiple, encefalopatia de Wernicke, intoxicacion farmacologica, migra&#241;a de tronco y tumor de fosa posterior.',
      tx_medico: 'Via de ictus completa desde el primer minuto, con valoracion de reperfusion si esta en ventana. Control de la tension, de la glucemia y de la temperatura. Prevencion de la aspiracion y valoracion de la deglucion.',
      tx_farmacologico: 'Trombolisis si cumple criterios y esta en ventana. Antiagregacion o anticoagulacion segun la causa. Estatina y control de los factores de riesgo.',
      tx_intervencionista: 'Trombectomia si hay oclusion de gran vaso accesible. Y, muy importante en esta localizacion, CRANIECTOMIA DESCOMPRESIVA o drenaje ventricular en el infarto cerebeloso con edema: es una complicacion tratable que sin cirugia puede ser mortal.',
      criterios_uci: 'Infarto cerebeloso extenso con riesgo de edema, hidrocefalia obstructiva, compresion del tronco, deterioro del nivel de conciencia y compromiso respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'VIGILANCIA ESTRECHA durante las primeras 48 a 72 horas, porque el edema cerebeloso puede producir un deterioro brusco en un paciente que hasta ese momento parecia estable. Un descenso del nivel de conciencia obliga a repetir la imagen de inmediato.',
      seguimiento_ambulatorio: 'Prevencion secundaria completa, rehabilitacion vestibular y del equilibrio, y control de los factores de riesgo. Valorar secuelas de coordinacion y de marcha.',
      pronostico: 'Muy variable. La complicacion mas temida es el edema cerebeloso de las primeras 72 horas, que es tratable si se anticipa. Y el mayor riesgo evitable sigue siendo el diagnostico erroneo inicial como vertigo periferico.',
      algoritmo: ['Sospecharlo en TODO sindrome vestibular agudo, no solo si hay focalidad', 'Explorar la marcha: no poder sentarse ni caminar es bandera roja', 'Hacer HINTS ampliado', 'Buscar otra focalidad de territorio posterior', 'Preguntar por cefalea o cervicalgia bruscas, por la diseccion', 'No conformarse con una tomografia normal', 'Pedir resonancia con difusion', 'Repetirla si fue precoz y la exploracion era central', 'Activar la via de ictus y valorar reperfusion', 'Vigilar el edema cerebeloso durante 48 a 72 horas']
    },
    {
      nombre: 'Mareo cronico y trampas del seguimiento',
      color: '#6b4a8c',
      definicion: 'Mareo o inestabilidad que persiste durante meses, con frecuencia multifactorial, y conjunto de errores que perpetuan el problema en el seguimiento.',
      fisiopatologia: 'Tras un episodio vestibular agudo, el sistema nervioso central COMPENSA reajustando la ganancia del reflejo vestibuloocular y las estrategias posturales. Esa compensacion necesita movimiento y exposicion: por eso el reposo prolongado y los sedantes vestibulares la RETRASAN, y por eso la rehabilitacion la acelera. En el mareo perceptual postural persistente se a&#241;ade un mecanismo distinto: una dependencia excesiva de la informacion visual y un control postural rigido y anticipatorio, que se mantienen despues de que la lesion original se haya resuelto y que empeoran en entornos visuales complejos.',
      epidemiologia: 'El mareo cronico es muy frecuente en el anciano y es un factor de riesgo de CAIDAS, de perdida de autonomia y de aislamiento social. Con frecuencia hay varias causas a la vez, y esa es precisamente la razon por la que buscar una sola explicacion suele fracasar.',
      factores_riesgo: ['Edad avanzada', 'Polifarmacia', 'Deficit visual no corregido', 'Neuropatia periferica', 'Debilidad y sarcopenia', 'Deterioro cognitivo', 'Ansiedad y depresion', 'Episodio vestibular agudo previo mal rehabilitado', 'Uso prolongado de sedantes vestibulares', 'Miedo a caer con restriccion de la actividad'],
      clinica: 'Inestabilidad continua, sensacion de flotar o de caminar sobre algodon, que empeora al estar de pie, al caminar y en entornos visuales complejos como los supermercados. En el mareo perceptual postural persistente los sintomas duran meses y hay una clara relacion con la postura y con los estimulos visuales.',
      criterios_dx: 'Diagnostico clinico tras excluir causas activas. Requiere una anamnesis larga y una exploracion completa que incluya marcha, vision, sensibilidad y farmacos.',
      laboratorio: 'Hemograma, funcion tiroidea, vitamina B12, iones, funcion renal y vitamina D. Buscando causas corregibles, que en el anciano son mas frecuentes de lo que parece.',
      imagen: 'Rara vez util. Se pide si aparece focalidad, si hay hipoacusia unilateral progresiva o si la exploracion sugiere una causa estructural. Repetir imagenes normales no resuelve un mareo cronico y refuerza la preocupacion del paciente.',
      complementarios: 'Valoracion de la marcha y del equilibrio, revision de la agudeza visual, exploracion de la sensibilidad profunda y valoracion cognitiva. Y una revision sistematica de la LISTA DE FARMACOS.',
      dx_diferencial: 'Mareo perceptual postural persistente, inestabilidad multifactorial del anciano, hipotension ortostatica, efecto farmacologico, vestibulopatia bilateral, neuropatia periferica, deterioro cognitivo y trastorno de ansiedad.',
      tx_medico: 'REHABILITACION VESTIBULAR, que es el tratamiento con mas respaldo y el que menos se prescribe. Retirada de sedantes vestibulares. Correccion visual, ejercicio de fuerza y equilibrio, adaptaciones del domicilio y prevencion de caidas.',
      tx_farmacologico: 'Retirar mas que a&#241;adir. En el mareo perceptual postural persistente, los inhibidores selectivos de la recaptacion de serotonina tienen respaldo, asociados a rehabilitacion y a terapia cognitivo-conductual.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente ingresado, movilizacion precoz y revision de la medicacion sedante, que es una causa habitual de mareo y de caidas intrahospitalarias.',
      seguimiento_ambulatorio: 'Programa de rehabilitacion con objetivos concretos, revision periodica de farmacos, valoracion de caidas y abordaje de la ansiedad asociada, que forma parte del problema y no es un a&#241;adido.',
      pronostico: 'Mejora con rehabilitacion y con un abordaje multifactorial. Empeora con el reposo, con los sedantes y con la restriccion de la actividad por miedo a caer, que es un circulo que hay que romper de forma explicita.',
      algoritmo: ['Aceptar que suele haber VARIAS causas a la vez', 'Revisar la lista de farmacos y retirar los sedantes', 'Medir la tension en decubito y de pie', 'Explorar vision, sensibilidad profunda y fuerza', 'Descartar causas corregibles con analitica basica', 'No repetir imagenes normales sin motivo nuevo', 'Prescribir REHABILITACION VESTIBULAR', 'Abordar la ansiedad y el miedo a caer', 'Valorar tratamiento del mareo perceptual postural persistente', 'Fijar objetivos concretos y revisar el progreso']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Todo este tema descansa en un cambio de pregunta: dejar de preguntar COMO es el mareo y empezar a preguntar CUANTO dura y QUE lo provoca. De ahi salen tres sindromes, tres exploraciones y una unica decision realmente grave, que es no dejar marchar a casa un ictus de fosa posterior.',
    parametros: ['No basar el diagnostico en como describe el paciente el mareo', 'Descartar primero el mareo sintomatico de una enfermedad general', 'Clasificar por TIEMPO y por DESENCADENANTE', 'Explorar SIEMPRE la marcha y la sedestacion', 'Aplicar el HINTS solo en el sindrome vestibular agudo', 'Recordar que un impulso cefalico NORMAL es lo preocupante', 'No hacer el HINTS si no hay nistagmo', 'No tranquilizarse con una tomografia normal', 'Repetir la resonancia si fue precoz y la exploracion era central', 'Hacer Dix-Hallpike y tambien la rotacion en decubito', 'No dar sedantes vestibulares mas de unos pocos dias', 'Prescribir rehabilitacion vestibular, que casi nunca se prescribe'],
    criterios_uci_general: 'Infarto cerebeloso extenso con riesgo de edema y de compresion del tronco, hidrocefalia obstructiva, deterioro del nivel de conciencia, compromiso respiratorio o de la deglucion, y hemorragia de fosa posterior. La vigilancia de las primeras 48 a 72 horas es lo que permite detectar el deterioro brusco por edema, que es tratable con cirugia.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: control de los factores de riesgo vascular, que es lo que previene el ictus de fosa posterior; prevencion de caidas y correccion del deficit de vitamina D; y evitar la manipulacion cervical de alta velocidad, que se ha relacionado con la diseccion vertebral. Secundaria: prevencion completa e inmediata tras un accidente isquemico transitorio vertebrobasilar, que puede presentarse SOLO como vertigo episodico; tratamiento preventivo de la migra&#241;a en la migra&#241;a vestibular; y maniobras de reposicion precoces en el vertigo posicional para evitar meses de sedantes y de pruebas. Terciaria: REHABILITACION VESTIBULAR, retirada de sedantes, revision de farmacos, correccion visual y programas de fuerza y equilibrio para prevenir caidas y romper el circulo del miedo a caer.'
  }
};

export const compCites = {
  'Enfoque del mareo: tiempo y desencadenante': [3, 4, 14],
  'Sindrome vestibular agudo: neuritis o ictus': [2, 9, 13],
  'Vertigo posicional paroxistico benigno': [5, 6],
  'Vertigo episodico espontaneo': [7, 8, 1],
  'Ictus de fosa posterior con vertigo aislado': [10, 11, 12, 16],
  'Mareo cronico y trampas del seguimiento': [1, 15]
};
export const estigmasTitulo = 'Signos y datos que cambian la conducta';
export const estigmas = [
  { s: 'No puede sentarse ni caminar sin ayuda', p: 'Bandera roja de ictus', photo: null, desc: 'Es el dato mas util a pie de cama y el que menos entrenamiento exige. Un paciente con una neuritis vestibular esta muy mareado pero puede mantenerse de pie con ayuda; quien no puede hacerlo tiene un problema cerebeloso hasta que se demuestre lo contrario.' },
  { s: 'Impulso cefalico NORMAL', p: 'Lo normal es lo preocupante', photo: null, desc: 'Es el hallazgo mas contraintuitivo del tema. En un paciente que lleva dias con vertigo continuo, un reflejo vestibuloocular intacto significa que el nervio esta bien y que el problema esta en el cerebro.' },
  { s: 'Nistagmo que cambia de direccion', p: 'Central', photo: null, desc: 'El nistagmo periferico bate SIEMPRE hacia el mismo lado, mire donde mire el paciente. Si al mirar a un lado bate a la derecha y al otro a la izquierda, el origen es central.' },
  { s: 'Nistagmo puramente vertical o torsional', p: 'Central', photo: null, desc: 'El nistagmo del vertigo periferico agudo es horizontal con un componente torsional. Uno puramente vertical, y en particular el que bate hacia abajo, apunta a la fosa posterior o a la union craneocervical.' },
  { s: 'Desviacion vertical al destapar el ojo', p: 'Central', photo: null, desc: 'Se explora tapando y destapando cada ojo de forma alterna. Es el paso mas especifico del HINTS y tambien el que mas se olvida, quiza porque no forma parte de la exploracion neurologica habitual.' },
  { s: 'Hipoacusia de nueva aparicion', p: 'Puede ser central', photo: null, desc: 'Parece un dato otologico y por eso tranquiliza, pero la arteria cerebelosa anteroinferior irriga el oido interno: un infarto de ese territorio produce vertigo con hipoacusia y se confunde con una laberintitis.' },
  { s: 'Cefalea o cervicalgia intensas y bruscas', p: 'Pensar en diseccion', photo: null, desc: 'Sobre todo en pacientes jovenes o tras un traumatismo o una manipulacion cervical. Obliga a pedir estudio de los vasos y no solo imagen del parenquima.' },
  { s: 'Tomografia craneal normal', p: 'No descarta nada', photo: null, desc: 'El artefacto oseo hace que la tomografia apenas vea la fosa posterior y deje escapar la mayoria de los infartos de esa region. Sirve para descartar hemorragia y poco mas.' },
  { s: 'Resonancia precoz normal', p: 'Tampoco descarta', photo: null, desc: 'En las primeras 24 a 48 horas, la difusion deja escapar una parte de los infartos peque&#241;os de fosa posterior. Si la exploracion era central, hay que repetirla y no dar el alta.' },
  { s: 'Nistagmo hacia arriba y torsional en el Dix-Hallpike', p: 'Canal posterior', photo: null, desc: 'Con latencia de segundos, duracion menor de un minuto y agotamiento al repetir. Es el vertigo posicional mas frecuente y se trata con la maniobra de Epley en la misma consulta.' },
  { s: 'Nistagmo posicional sin latencia y que no se agota', p: 'Posicional central', photo: null, desc: 'Sobre todo si bate hacia abajo o dura mas de un minuto. Obliga a pedir imagen de fosa posterior en lugar de repetir maniobras de reposicion que no van a funcionar.' },
  { s: 'Vertigo episodico aislado con riesgo vascular', p: 'Puede ser un ataque isquemico', photo: null, desc: 'Un vertigo breve y recurrente, sin ningun otro sintoma, puede ser un accidente isquemico transitorio vertebrobasilar. No se estudia de forma diferida: se maneja con el mismo circuito urgente que cualquier otro.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion por tiempo y desencadenante (calculadora disponible)': [3, 4],
  'HINTS ampliado (calculadora disponible)': [2, 11],
  'Nistagmo posicional (calculadora disponible)': [5, 6],
  'Criterios diagnosticos de enfermedad de Meniere': [7],
  'Criterios diagnosticos de migra&#241;a vestibular': [8],
  'Banderas rojas del mareo agudo': [10, 1]
};
export const escalaCalc = {
  'Clasificacion por tiempo y desencadenante (calculadora disponible)': 'sindrome-vestibular',
  'HINTS ampliado (calculadora disponible)': 'hints',
  'Nistagmo posicional (calculadora disponible)': 'nistagmo-posicional'
};
export const compGroups = [
  { name: 'El metodo', items: ['Enfoque del mareo: tiempo y desencadenante'] },
  { name: 'Agudo y continuo', items: ['Sindrome vestibular agudo: neuritis o ictus', 'Ictus de fosa posterior con vertigo aislado'] },
  { name: 'Episodico', items: ['Vertigo posicional paroxistico benigno', 'Vertigo episodico espontaneo'] },
  { name: 'Cuando se cronifica', items: ['Mareo cronico y trampas del seguimiento'] }
];
export const complicacionesIntro = 'La primera ficha es el metodo, y es la que sostiene todo lo demas: preguntar cuanto dura y que lo provoca en lugar de como es. Las dos siguientes son el sindrome vestibular agudo, separadas a proposito porque reconocer el cuadro es un problema distinto de no dejar escapar el ictus que se esconde dentro de el. Las dos siguientes son los sindromes episodicos: el posicional, que se cura en la misma consulta con las manos, y el espontaneo, donde conviven una enfermedad benigna muy infradiagnosticada y un accidente isquemico transitorio que hay que estudiar con urgencia. Y la ultima es lo que ocurre cuando nada de esto se hace bien: un mareo cronico, multifactorial, que se perpetua con reposo y con sedantes.';
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
  root: { title: 'PACIENTE CON MAREO', color: '#4a7a5c', target: 'definicion' },
  branches: [
    { title: 'CUANTO DURA Y QUE LO PROVOCA', sub: 'No como es', color: '#4a7a5c', target: 'clasificacion', leaves: [
      { title: 'Descartar lo sistemico', sub: 'Glucemia, anemia, farmacos', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Agudo y continuo', sub: 'Dias: hacer HINTS', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Episodico espontaneo', sub: 'Meniere, migra&#241;a o isquemia', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Episodico provocado', sub: 'Segundos: Dix-Hallpike', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'HINTS', sub: 'Solo en el vertigo continuo', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Impulso NORMAL', sub: 'Lo normal es lo malo', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Nistagmo que cambia', sub: 'Central', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Desviacion vertical', sub: 'Central, y se olvida', color: '#6b4a8c', target: 'diagnostico' },
      { title: 'No puede caminar', sub: 'Bandera roja de ictus', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'EL POSICIONAL', sub: 'Se cura con las manos', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Dix-Hallpike', sub: 'Canal posterior: Epley', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Rotacion en decubito', sub: 'Canal horizontal', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Sin imagen ni sedantes', sub: 'En el caso tipico', color: '#4a7a5c', target: 'complicaciones' },
      { title: 'Si bate hacia abajo', sub: 'Sospechar central', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [4, 1], no_invasivos: [2, 3, 5], imagen: [10, 12] };
export const clasificacionCite = [1, 2, 3, 7];
export const seguimientoCite = [1, 2, 10];
