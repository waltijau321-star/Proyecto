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
// enfermedad de Meniere y de migraña vestibular, y ensayo de corticoides en neuritis vestibular.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'vertigo-sindrome-vestibular',
  titulo: 'Vértigo y Síndrome Vestibular',
  subtitulo: 'Módulo 67 · Medicina Interna',
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
    <strong style="color:#8c3a34;">La pregunta que hay que dejar de hacer es "¿cómo es el mareo?".</strong> <span style="color:var(--ink-dim);">La descripción del síntoma no separa lo grave de lo banal: los pacientes cambian de respuesta al repreguntar. Lo que si separa son el TIEMPO y el DESENCADENANTE.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:108px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">AGUDO<br>Y CONTINUO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Dura <strong style="color:var(--ink);">DÍAS</strong>, sin interrupción, con náuseas, nistagmo e intolerancia al movimiento de la cabeza. Es el <strong>SÍNDROME VESTIBULAR AGUDO</strong>, y la pregunta única es neuritis o ICTUS. Aquí se aplica el <strong style="color:#8c3a34;">HINTS</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:108px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">EPISÓDICO<br>ESPONTÁNEO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Crisis que empiezan <strong style="color:var(--ink);">SIN que nada las provoque</strong> y ceden solas. Meniere (de 20 minutos a 12 horas, con hipoacusia), migraña vestibular (de 5 minutos a 72 horas) y <strong style="color:#8c3a34;">ACCIDENTE ISQUÉMICO TRANSITORIO vertebrobasilar</strong>, que puede ser solo vértigo.</div>
    </div>
    <div style="display:grid;grid-template-columns:108px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">EPISÓDICO<br>PROVOCADO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Crisis de <strong style="color:var(--ink);">SEGUNDOS</strong> que aparecen al cambiar de posición o al levantarse. Vértigo posicional paroxístico benigno (girar en la cama, mirar arriba) e <strong>HIPOTENSIÓN ORTOSTÁTICA</strong> (al ponerse de pie). Aquí se hace <strong style="color:#3f6b52;">DIX-HALLPIKE</strong> o se toma la tensión de pie.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">Y una condición previa a todo lo anterior:</strong> el <strong>CONTEXTO</strong>. Un mareo con anemia aguda, sepsis, hipoglucemia, intoxicación o un fármaco nuevo no entra en esta clasificación, y buscar alli un nistagmo es perder el tiempo. La clasificación sirve una vez descartado el mareo <strong>SINTOMÁTICO</strong> de una enfermedad general.
  </div>
</div>`;

const hintsHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">HINTS es una exploración de tres pasos, no una prueba de imagen, y es MÁS sensible que la resonancia precoz</strong> <span style="color:var(--ink-dim);">para detectar el ictus de fosa posterior en el síndrome vestibular agudo. Pero solo vale ahi: en el mareo episódico no significa nada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:98px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">IMPULSO<br>CEFÁLICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Giro rápido y pequeño de la cabeza mirando a la nariz del explorador. Si aparece una <strong style="color:#3f6b52;">SACADA de corrección, es PERIFÉRICO</strong> (el reflejo esta roto). Si el ojo se queda clavado en el objetivo, es decir si el impulso es <strong style="color:#8c3a34;">NORMAL, eso es lo preocupante</strong>: en un paciente que lleva días mareado, un reflejo intacto apunta al cerebro.</div>
    </div>
    <div style="display:grid;grid-template-columns:98px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">NISTAGMO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Periférico: horizontal, <strong style="color:#3f6b52;">SIEMPRE en la misma dirección</strong> mire donde mire, y aumenta al mirar hacia el lado rápido. Central: <strong style="color:#8c3a34;">CAMBIA de dirección</strong> con la mirada, o es puramente VERTICAL o TORSIONAL.</div>
    </div>
    <div style="display:grid;grid-template-columns:98px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a8c;">DESVIACIÓN<br>VERTICAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se tapa y destapa cada ojo de forma alterna. Si al destaparlo el ojo hace un movimiento <strong style="color:#8c3a34;">VERTICAL de reajuste, es CENTRAL</strong>. Es el paso que más se olvida y el más específico de los tres.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">BASTA UN SOLO HALLAZGO CENTRAL PARA QUE SEA CENTRAL</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Impulso NORMAL, nistagmo que CAMBIA de dirección o desviación vertical presente: cualquiera de los tres, por si solo, obliga a manejarlo como un ictus. El patrón tranquilizador exige los tres a la vez: impulso anormal, nistagmo unidireccional y sin desviación vertical. Y la versión ampliada añade la <strong style="color:var(--ink);">HIPOACUSIA NUEVA</strong>, que también apunta a central, porque el territorio de la arteria cerebelosa anteroinferior irriga el oído interno.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Los dos errores que anulan la herramienta.</strong> Aplicarla <strong>FUERA</strong> del síndrome vestibular agudo, es decir a un mareo episódico o a un paciente sin nistagmo, donde no ha sido validada y no significa nada. Y darse por tranquilo con una <strong>TOMOGRAFÍA normal</strong>, que apenas ve la fosa posterior, o incluso con una <strong>RESONANCIA precoz normal</strong>, que en las primeras 24 a 48 horas deja escapar una parte de los infartos pequeños de esa región.
  </div>
</div>`;

const vppbHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">El vértigo posicional paroxístico benigno se diagnostica y se cura en la misma consulta,</strong> <span style="color:var(--ink-dim);">sin analítica, sin imagen y sin fármacos. Lo único que hace falta es colocar bien la cabeza y mirar los ojos.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">CANAL POSTERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Es el 8 de cada 10. Se busca con <strong style="color:var(--ink);">DIX-HALLPIKE</strong>. Nistagmo <strong style="color:var(--ink);">hacia arriba y torsional</strong> hacia el oído de abajo, con <strong>LATENCIA</strong> de segundos, duración menor de un minuto y agotamiento al repetir. Se trata con la maniobra de <strong style="color:#3f6b52;">EPLEY</strong>.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">CANAL HORIZONTAL</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Se busca con la <strong style="color:var(--ink);">MANIOBRA DE ROTACIÓN EN DECÚBITO</strong>, no con Dix-Hallpike. Nistagmo horizontal que bate <strong>HACIA EL SUELO</strong> (canalolitiasis) o <strong>HACIA EL TECHO</strong> (cupulolitiasis). Se trata con maniobras propias, no con Epley.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">CUANDO EL NISTAGMO POSICIONAL NO ES UN VÉRTIGO BENIGNO</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Nistagmo posicional que bate <strong style="color:var(--ink);">HACIA ABAJO</strong>, que <strong>NO tiene latencia</strong>, que <strong>NO se agota</strong>, que dura más de un minuto o que se acompaña de cefalea intensa o de otra focalidad. Eso es un <strong style="color:#8c3a34;">POSICIONAL CENTRAL</strong> y obliga a pedir imagen de fosa posterior, no a repetir maniobras.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que NO hay que hacer.</strong> No pedir tomografía ni resonancia en un caso típico. No dar sedantes vestibulares, que no curan y además <strong>RETRASAN la compensación</strong>. Y no dar por bueno el diagnóstico si el paciente esta mareado de forma continua entre las crisis, porque entonces no es un vértigo posicional.
    </div>
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Y lo que si conviene decir al paciente.</strong> Que la maniobra es eficaz y con frecuencia resuelve el cuadro en una o dos sesiones; que puede quedar inestabilidad unos días sin que eso signifique fracaso; y que <strong>RECURRE</strong> en una parte de los casos, de modo que volver no es una mala señal sino algo previsible.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El mareo es uno de los motivos de consulta más frecuentes en urgencias y uno de los que peor se resuelven. La razón es concreta: durante décadas el enfoque partia de preguntar <strong>como</strong> es el mareo, y esa pregunta no discrimina. Los pacientes cambian de respuesta al repreguntar, y describir el síntoma como giratorio o como inestabilidad no separa una neuritis de un infarto cerebeloso. El enfoque moderno cambia la pregunta.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: tiempo y desencadenante, no descripción.</strong></p>
<p style="margin:0 0 12px;">Con dos preguntas (¿cuánto dura? y ¿qué lo provoca?) el mareo se reparte en tres síndromes que llevan a tres exploraciones distintas: el <strong>agudo y continuo</strong>, donde la pregunta es neuritis o ictus; el <strong>episódico espontáneo</strong>, donde están Meniere, la migraña vestibular y el accidente isquémico transitorio; y el <strong>episódico provocado</strong>, donde están el vértigo posicional y la hipotensión ortostática. Antes de todo eso hay que descartar el mareo sintomático de una enfermedad general.</p>
${figBlock('Figura 1', 'Los tres síndromes: que dura, que lo provoca y que se explora', sindromesHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el síndrome vestibular agudo y el HINTS.</strong></p>
<p style="margin:0 0 12px;">Cuando el vértigo lleva días sin interrupción, la única pregunta que importa es si es una neuritis o un ictus de fosa posterior. Y la respuesta se obtiene con una exploración de tres pasos que, en manos entrenadas, es <strong>más sensible que la resonancia precoz</strong>. Su hallazgo más contraintuitivo es que un impulso cefálico <strong>normal</strong> es lo preocupante.</p>
${figBlock('Figura 2', 'HINTS: los tres pasos y por que lo normal asusta', hintsHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el vértigo posicional.</strong></p>
<p style="margin:0 0 12px;">Es la causa más frecuente de vértigo y una de las pocas enfermedades que se diagnostican y se curan en la misma consulta, sin analítica, sin imagen y sin fármacos. Lo que hay que dominar es que canal esta afectado, porque la maniobra de tratamiento es distinta, y cuando un nistagmo posicional deja de ser benigno.</p>
${figBlock('Figura 3', 'Vértigo posicional: que canal, que maniobra y cuando desconfiar', vppbHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No basar el diagnóstico en como describe el paciente el mareo. No aplicar el HINTS fuera del síndrome vestibular agudo, es decir a un mareo episódico o a un paciente sin nistagmo. No tranquilizarse con una tomografía normal, que apenas ve la fosa posterior, ni con una <strong>resonancia precoz</strong> normal en las primeras horas. No etiquetar de laberintitis a un paciente que <strong>no puede sentarse ni caminar sin ayuda</strong>, porque eso es una bandera de ictus cerebeloso. No pasar por alto la cefalea o la cervicalgia intensas de inicio brusco, que pueden ser una disección arterial. No prolongar los sedantes vestibulares, porque retrasan la compensación. No pedir imagen en un vértigo posicional típico. No dar por benigno un nistagmo posicional que bate hacia abajo o que no se agota. Y no olvidar que un vértigo <strong>episódico y aislado</strong>, sin ningún otro síntoma, puede ser un accidente isquémico transitorio vertebrobasilar.</p>`;

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
      tituloA: 'Perfil periférico',
      tituloB: 'Perfil central',
      compensada: 'Vértigo intenso con náuseas y vómitos, que el paciente tolera mal pero que le permite MANTENERSE DE PIE con ayuda y caminar, aunque se desvie hacia un lado. Nistagmo horizontal y torsional, SIEMPRE en la misma dirección mire donde mire, que aumenta al mirar hacia el lado de la fase rápida y disminuye al fijar la vista. Impulso cefálico ANORMAL, con sacada de corrección hacia el lado enfermo. Sin desviación vertical. Puede haber acúfeno o sensación de plenitud, y en la enfermedad de Meniere hipoacusia fluctuante de tonos graves y medios.',
      descompensada: 'A veces el vértigo es MENOS intenso que en el periférico, y esa aparente levedad engaña. Los datos que delatan el origen central son otros: INCAPACIDAD PARA SENTARSE O CAMINAR sin ayuda, que es la bandera roja más útil a pie de cama; nistagmo que CAMBIA de dirección con la mirada, o puramente vertical o torsional; DESVIACIÓN VERTICAL en la prueba de tapar y destapar; impulso cefálico NORMAL; hipoacusia de nueva aparición; y cualquier otra focalidad, como diplopía, disartria, disfagia, hipo persistente, síndrome de Horner o alteración sensitiva cruzada. La cefalea o la cervicalgia intensas de inicio brusco obligan a pensar en una DISECCIÓN arterial.'
    },
    laboratorio: [
      { prueba: 'Glucemia capilar', utilidad: 'Inmediata y obligatoria: la hipoglucemia produce mareo y focalidad, y es reversible en minutos. Forma parte del descarte del mareo SINTOMÁTICO de una enfermedad general, que precede a toda la clasificación vestibular.' },
      { prueba: 'Hemograma', utilidad: 'La anemia aguda y el sangrado producen mareo de tipo presincopal, que no es un síndrome vestibular y no se estudia con maniobras. Buscar alli un nistagmo es perder tiempo mientras el paciente sigue sangrando.' },
      { prueba: 'Iones, función renal y calcio', utilidad: 'La hiponatremia, la deshidratación y las alteraciones del calcio y del magnesio producen mareo e inestabilidad. Son causas frecuentes y fácilmente corregibles en el anciano polimedicado.' },
      { prueba: 'Revisión de la lista de fármacos', utilidad: 'No es una prueba pero rinde más que muchas: antihipertensivos, alfabloqueantes, antidepresivos, benzodiacepinas, antiepilépticos, aminoglucósidos (ototoxicos) y sedantes vestibulares prolongados producen o perpetuan el mareo.' },
      { prueba: 'Electrocardiograma', utilidad: 'Obligado ante un mareo desencadenado por ponerse de pie o con perfil presincopal. Busca bradiarritmia, taquiarritmia y trastornos de conducción, que son causas de mareo que no responden a ninguna maniobra vestibular.' },
      { prueba: 'Tensión arterial en decúbito y en bipedestación', utilidad: 'La prueba más barata del tema y una de las más rentables en el mareo episódico PROVOCADO por levantarse. Se mide tras 3 minutos de pie y se considera positiva con un descenso de 20 mmHg en la sistólica o de 10 en la diastólica.' },
      { prueba: 'Función tiroidea y vitamina B12', utilidad: 'En la inestabilidad crónica y en el mareo persistente, sobre todo del anciano, donde el problema suele ser multifactorial: vestibular, visual, propioceptivo, farmacológico y cognitivo a la vez.' },
      { prueba: 'Estudio de causa vascular tras un ictus confirmado', utilidad: 'Cuando el vértigo resulta ser un ictus de fosa posterior, el estudio es el mismo que en cualquier otro: imagen de vasos cervicales e intracraneales, ecocardiograma, monitorización del ritmo y perfil de riesgo vascular.' }
    ],
    no_invasivos: [
      { metodo: 'Clasificación por tiempo y desencadenante (calculadora disponible)', interpretacion: 'Reparte el mareo en agudo continuo, episódico espontáneo y episódico provocado, y devuelve la exploración que corresponde a cada uno.', cutoff: 'Sustituye a la pregunta de como es el mareo, que no discrimina' },
      { metodo: 'HINTS ampliado (calculadora disponible)', interpretacion: 'Tres pasos oculomotores más la audición en el síndrome vestibular agudo. Un solo hallazgo central basta para manejarlo como ictus.', cutoff: 'Impulso NORMAL, nistagmo que cambia de dirección o desviación vertical: central' },
      { metodo: 'Nistagmo posicional (calculadora disponible)', interpretacion: 'Interpreta el nistagmo del Dix-Hallpike y de la maniobra de rotación en decúbito para identificar el canal y elegir la maniobra de reposición.', cutoff: 'Sin latencia, sin agotamiento o batiendo hacia abajo: sospecha de causa central' },
      { metodo: 'Prueba del impulso cefálico', interpretacion: 'Explora el reflejo vestibuloocular con un giro rápido y de pequeña amplitud. La aparición de una sacada de corrección indica lesión PERIFÉRICA de ese lado.', cutoff: 'Impulso NORMAL en un paciente con vértigo continuo: sospecha de ictus' },
      { metodo: 'Prueba de tapar y destapar alterno', interpretacion: 'Busca la desviación vertical: al destapar un ojo, este hace un movimiento vertical de reajuste. Es el paso más específico del HINTS y el que más se olvida.', cutoff: 'Su presencia indica origen CENTRAL' },
      { metodo: 'Marcha y equilibrio', interpretacion: 'Sentarse sin apoyo, ponerse de pie y caminar. Es la exploración más útil y la más rápida: no depende de aparatos ni de entrenamiento especial.', cutoff: 'INCAPACIDAD para sentarse o caminar sin ayuda: bandera roja de ictus cerebeloso' }
    ],
    imagen: [
      { modalidad: 'Tomografía craneal sin contraste', hallazgos: 'Poco útil para la fosa posterior por el artefacto óseo: deja escapar la mayoría de los infartos cerebelosos y de tronco. Sirve sobre todo para descartar HEMORRAGIA. Una tomografía normal no descarta un ictus de fosa posterior y no debe tranquilizar.' },
      { modalidad: 'Resonancia con difusión', hallazgos: 'Es la prueba de imagen de elección, pero con una advertencia importante: en las primeras 24 a 48 horas deja escapar una parte de los infartos PEQUEÑOS de fosa posterior. Ante una exploración central y una resonancia precoz normal, hay que repetirla y no dar el alta.' },
      { modalidad: 'Angiografía por tomografía o resonancia de troncos y poligono', hallazgos: 'Busca estenosis vertebrobasilar y sobre todo DISECCIÓN VERTEBRAL, que hay que sospechar ante cefalea o cervicalgia intensas de inicio brusco, sobre todo en pacientes jóvenes o tras un traumatismo o una manipulación cervical.' },
      { modalidad: 'Resonancia de oído interno y angulo pontocerebeloso', hallazgos: 'Indicada ante hipoacusia neurosensorial unilateral progresiva o inestabilidad con acúfeno unilateral, buscando un schwannoma vestibular. No es una peticion de urgencias sino del estudio ambulatorio dirigido.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación útil no es por la <strong>calidad</strong> del síntoma (giratorio, inestabilidad, presíncope o mareo inespecífico), que ha demostrado no discriminar, sino por el <strong>TIEMPO</strong> y el <strong>DESENCADENANTE</strong>. De ahi salen tres síndromes: <strong>agudo continuo</strong>, <strong>episódico espontáneo</strong> y <strong>episódico provocado</strong>, cada uno con su lista corta de causas y su exploración propia. Dentro del agudo continuo, la división que decide todo es <strong>periférico frente a central</strong>. Y por encima de toda la clasificación esta el mareo <strong>sintomático</strong> de una enfermedad general, que hay que descartar antes.`,
    escalas: [
      { nombre: 'Clasificación por tiempo y desencadenante (calculadora disponible)', componentes: 'Duración del episodio, presencia o ausencia de desencadenante, continuidad de los síntomas entre episodios y contexto sistémico.', formula: 'Agudo continuo: días sin interrupción. Episódico espontáneo: crisis que empiezan sin causa. Episódico provocado: segundos, al cambiar de posición o al levantarse.', interpretacion: 'Cada síndrome lleva a una exploración distinta: HINTS en el agudo continuo, historia dirigida y estudio vascular en el episódico espontáneo, y Dix-Hallpike o tensión en bipedestación en el provocado. Aplicar la exploración del síndrome equivocado es el error de método más frecuente.' },
      { nombre: 'HINTS ampliado (calculadora disponible)', componentes: 'Impulso cefálico, dirección del nistagmo, desviación vertical en la prueba de tapar y destapar, y audición de nueva aparición.', formula: 'Central si el impulso es NORMAL, o el nistagmo CAMBIA de dirección, o hay desviación vertical, o hay hipoacusia nueva. Periférico solo si el impulso es anormal, el nistagmo es unidireccional y no hay desviación vertical.', interpretacion: 'En manos entrenadas es MÁS sensible que la resonancia precoz para el ictus de fosa posterior. Solo es valida en el SÍNDROME VESTIBULAR AGUDO, con vértigo continuo y nistagmo: fuera de ese escenario no ha sido validada y no significa nada.' },
      { nombre: 'Nistagmo posicional (calculadora disponible)', componentes: 'Maniobra realizada, dirección del nistagmo, latencia, duración y agotamiento al repetir.', formula: 'Dix-Hallpike con nistagmo hacia arriba y torsional: canal posterior, maniobra de Epley. Rotación en decúbito con nistagmo horizontal: canal horizontal, maniobras propias.', interpretacion: 'Un nistagmo posicional que bate HACIA ABAJO, sin latencia, sin agotamiento o de duración prolongada obliga a pensar en causa CENTRAL y a pedir imagen de fosa posterior en lugar de repetir maniobras.' },
      { nombre: 'Criterios diagnósticos de enfermedad de Meniere', componentes: 'Episodios de vértigo espontáneo, hipoacusia documentada, síntomas auditivos fluctuantes y exclusión de otras causas.', formula: 'Dos o más episodios espontáneos de 20 minutos a 12 horas, con hipoacusia neurosensorial de tonos graves y medios documentada en al menos una ocasión, más acúfeno o plenitud fluctuantes en el mismo oído.', interpretacion: 'La duración y la HIPOACUSIA DOCUMENTADA son lo que la separa de la migraña vestibular. Exige audiometría: sin ella el diagnóstico no se sostiene y con frecuencia se usa como etiqueta comoda.' },
      { nombre: 'Criterios diagnósticos de migraña vestibular', componentes: 'Episodios vestibulares, antecedente de migraña y características migrañosas durante las crisis.', formula: 'Al menos cinco episodios de síntomas vestibulares de intensidad moderada o grave, de 5 minutos a 72 horas, con antecedente de migraña y rasgos migrañosos (cefalea, fotofobia, fonofobia o aura) en al menos la mitad de los episodios.', interpretacion: 'Es una causa muy frecuente e infradiagnosticada de vértigo episódico. La clave esta en preguntar por la cefalea y por la fotofobia DURANTE la crisis, algo que el paciente no relaciona ni cuenta de forma espontánea.' },
      { nombre: 'Banderas rojas del mareo agudo', componentes: 'Marcha, cefalea y cervicalgia, focalidad neurológica, perfil de riesgo vascular y edad.', formula: 'Incapacidad para caminar o sentarse sin ayuda, cefalea o cervicalgia intensas de inicio brusco, cualquier focalidad, hipoacusia nueva, nistagmo central o factores de riesgo vascular acumulados.', interpretacion: 'La INCAPACIDAD PARA MANTENERSE DE PIE es la más útil a pie de cama y la que menos entrenamiento exige. Un paciente que no puede sentarse sin ayuda no tiene una laberintitis.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfoque del mareo: tiempo y desencadenante',
      color: '#4a7a5c',
      definicion: 'Método de aproximación al paciente con mareo basado en la duración y en el desencadenante de los síntomas, y no en como el paciente describe la sensación.',
      fisiopatologia: 'El equilibrio depende de tres entradas (vestibular, visual y propioceptiva) integradas en el tronco y en el cerebelo. Un fallo agudo y asimétrico del sistema vestibular produce una señal de giro constante y por eso el vértigo agudo es continuo. Un fallo intermitente, como el hidrops de la enfermedad de Meniere o la disfunción transitoria de la migraña, produce crisis espontáneas. Y un estímulo mecánico intermitente, como los otoconios desplazados dentro de un canal, produce crisis muy breves provocadas por el movimiento. Esa lógica es exactamente la que sostiene la clasificación por tiempo y desencadenante.',
      epidemiologia: 'El mareo es uno de los motivos de consulta más frecuentes en urgencias. Una proporción relevante de los ictus de fosa posterior se presenta como mareo aislado, y una parte de ellos se va a casa con un diagnóstico de vértigo periférico, lo que constituye uno de los errores diagnósticos más estudiados de la medicina de urgencias.',
      factores_riesgo: ['Edad avanzada', 'Hipertensión arterial, diabetes y dislipemia', 'Tabaquismo', 'Fibrilación auricular', 'Antecedente de ictus o de accidente isquémico transitorio', 'Traumatismo cervical o manipulación cervical reciente', 'Polifarmacia, sobre todo antihipertensivos y psicofarmacos', 'Déficit visual y neuropatía periférica en el anciano', 'Antecedente de migraña', 'Consumo de alcohol y de sedantes'],
      clinica: 'Dos preguntas ordenan el caso: cuanto DURA y que lo PROVOCA. Y una tercera que precede a las otras: hay una enfermedad general que lo explique (anemia, sepsis, hipoglucemia, fármaco nuevo o intoxicación). La pregunta de COMO es el mareo se ha demostrado poco fiable, porque los pacientes cambian de respuesta al repreguntar.',
      criterios_dx: 'No hay criterios únicos: es un método. De el salen tres síndromes con tres exploraciones distintas. Ver la Figura 1 de Definición.',
      laboratorio: 'GLUCEMIA CAPILAR inmediata. Hemograma, iones, función renal y calcio según el contexto. Electrocardiograma en el perfil presincopal. Y una revisión cuidadosa de la lista de FÁRMACOS, que rinde más que muchas pruebas.',
      imagen: 'No de entrada. Se pide según el síndrome y la exploración, no por el síntoma. Pedir una tomografía a todo paciente mareado consume tiempo, tranquiliza en falso y no responde a la pregunta.',
      complementarios: 'Tensión arterial en decúbito y tras 3 minutos de pie, que es la prueba más barata y una de las más rentables en el mareo provocado por levantarse.',
      dx_diferencial: 'Mareo SINTOMÁTICO de enfermedad general (anemia, sepsis, hipoglucemia, fármacos, intoxicación), presíncope de causa cardiaca, inestabilidad multifactorial del anciano, mareo perceptual postural persistente y trastorno de ansiedad.',
      tx_medico: 'El del síndrome identificado. La regla general: los sedantes vestibulares se usan poco tiempo y solo en la fase aguda muy sintomática, porque RETRASAN la compensación central si se prolongan.',
      tx_farmacologico: 'Específico de cada causa. En el mareo del anciano, con frecuencia el mejor tratamiento es RETIRAR fármacos en lugar de añadirlos.',
      tx_intervencionista: 'Maniobras de reposición en el vértigo posicional. Nada en la fase de clasificación.',
      criterios_uci: 'No por el mareo en si, sino por su causa: ictus de fosa posterior con deterioro, arritmia grave o enfermedad sistémica descompensada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar si el cuadro no encaja con el síndrome asignado. Un mareo que cambia de patrón obliga a reclasificar desde el principio y no a insistir con la misma exploración.',
      seguimiento_ambulatorio: 'En el mareo crónico del anciano, abordaje multifactorial: revisión de fármacos, visión, propiocepción, fuerza, rehabilitación vestibular y prevención de caídas.',
      pronostico: 'Excelente en la mayoría de las causas. Lo que empeora el pronóstico global es no reconocer la minoría de origen vascular, que es precisamente lo que este método pretende evitar.',
      algoritmo: ['Descartar primero el mareo SINTOMÁTICO de enfermedad general', 'Medir glucemia capilar', 'Preguntar cuanto DURA', 'Preguntar que lo PROVOCA', 'No basar el diagnóstico en como lo describe el paciente', 'Clasificar en agudo continuo, episódico espontáneo o provocado', 'Aplicar la exploración propia de ese síndrome', 'Explorar SIEMPRE la marcha y la sedestación', 'Revisar la lista de fármacos', 'Pedir imagen solo si la exploración lo justifica']
    },
    {
      nombre: 'Síndrome vestibular agudo: neuritis o ictus',
      color: '#8c3a34',
      definicion: 'Vértigo de instauración aguda y curso CONTINUO durante días, con náuseas, nistagmo, intolerancia al movimiento cefálico e inestabilidad, cuya única pregunta relevante es si el origen es periférico o central.',
      fisiopatologia: 'Un desequilibrio agudo entre los núcleos vestibulares de ambos lados genera una señal permanente de giro. Ese desequilibrio puede producirse por lesión del nervio vestibular (neuritis) o por infarto del tronco o del cerebelo. Los territorios que producen vértigo aislado son sobre todo el de la arteria cerebelosa posteroinferior, que puede dañar el pedunculo cerebeloso inferior sin dar otra focalidad, y el de la anteroinferior, que además irriga el OÍDO INTERNO y por eso puede producir HIPOACUSIA, lo que hace que un infarto se parezca a un problema del oído. Esa anatomía explica por que la clínica sola no basta y hace falta una exploración oculomotora dirigida.',
      epidemiologia: 'La causa más frecuente es la neuritis vestibular, pero una minoría relevante de estos cuadros es un ictus, y esa minoría es la que importa. El riesgo de que el ictus pase desapercibido es mayor en pacientes jóvenes y en los que solo tienen mareo, porque la ausencia de otra focalidad se interpreta como tranquilizadora cuando no lo es.',
      factores_riesgo: ['Factores de riesgo vascular acumulados', 'Edad avanzada', 'Fibrilación auricular', 'Antecedente de ictus o de accidente isquémico transitorio', 'Cefalea o cervicalgia intensas de inicio brusco, por disección', 'Traumatismo o manipulación cervical recientes', 'Hipoacusia de nueva aparición', 'Incapacidad para caminar o sentarse sin ayuda', 'Nistagmo que cambia de dirección con la mirada', 'Impulso cefálico normal en un paciente con vértigo continuo'],
      clinica: 'Vértigo CONTINUO de días, náuseas, vómitos, nistagmo espontáneo, intolerancia al movimiento de la cabeza e inestabilidad. Lo que separa periférico de central no es la intensidad del vértigo, que puede ser MENOR en el central, sino la exploración: marcha, impulso cefálico, dirección del nistagmo, desviación vertical, audición y cualquier otra focalidad.',
      criterios_dx: 'Síndrome vestibular agudo definido por vértigo continuo de más de 24 horas con nistagmo. Sobre el se aplica el HINTS ampliado. Ver la Figura 2 de Definición.',
      laboratorio: 'Glucemia, hemograma, iones y función renal. Si se confirma un ictus, estudio etiológico completo: perfil vascular, ecocardiograma y monitorización del ritmo.',
      imagen: 'RESONANCIA CON DIFUSIÓN como prueba de elección, sabiendo que en las primeras 24 a 48 horas deja escapar una parte de los infartos pequeños de fosa posterior. La TOMOGRAFÍA apenas ve esa región y sirve sobre todo para descartar hemorragia. Angiografía si se sospecha DISECCIÓN.',
      complementarios: 'HINTS AMPLIADO a pie de cama. Exploración de la marcha y de la sedestación, que es la más útil y la que menos entrenamiento exige. Audiometría si hay hipoacusia.',
      dx_diferencial: 'Neuritis vestibular, laberintitis, ictus de fosa posterior, esclerosis múltiple con brote de tronco, primer episodio de migraña vestibular prolongada, intoxicación farmacológica y encefalopatía de Wernicke, que produce nistagmo, ataxia y oftalmoparesia y es tratable con tiamina.',
      tx_medico: 'Si la exploración es central, se maneja como un ICTUS desde el primer minuto, con la via correspondiente y valorando reperfusión si esta en ventana. Si es periférica, hidratación, antieméticos y movilización precoz.',
      tx_farmacologico: 'En la neuritis vestibular, CORTICOIDES en fase precoz, que mejoran la recuperación de la función vestibular. Sedantes vestibulares solo unos POCOS DÍAS y en la fase más sintomática, porque prolongarlos retrasa la compensación central.',
      tx_intervencionista: 'En el ictus de fosa posterior, tratamiento de reperfusión si procede, y CRANIECTOMÍA DESCOMPRESIVA o drenaje ventricular en el infarto cerebeloso con efecto de masa, que es una complicación tratable y potencialmente mortal.',
      criterios_uci: 'Infarto cerebeloso extenso con riesgo de edema y compresión del tronco o hidrocefalia, deterioro del nivel de conciencia y compromiso respiratorio o de la deglución.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el infarto cerebeloso, vigilancia estrecha durante las primeras 48 a 72 horas por el riesgo de EDEMA con deterioro brusco. En la neuritis, rehabilitación vestibular precoz y retirada temprana de los sedantes.',
      seguimiento_ambulatorio: 'Rehabilitación vestibular, que es el tratamiento con más respaldo en la recuperación. Prevención secundaria completa si fue un ictus. Y reevaluación si el cuadro no mejora como se espera.',
      pronostico: 'La neuritis mejora en semanas con compensación central, aunque puede quedar inestabilidad al movimiento rápido. El ictus de fosa posterior tiene pronóstico variable y su principal riesgo evitable es no haberlo reconocido a tiempo.',
      algoritmo: ['Confirmar que el vértigo es CONTINUO y hay nistagmo', 'Explorar la MARCHA: si no puede sentarse ni caminar, pensar en ictus', 'Hacer la prueba del IMPULSO CEFÁLICO', 'Mirar si el nistagmo CAMBIA de dirección con la mirada', 'Hacer la prueba de tapar y destapar buscando DESVIACIÓN VERTICAL', 'Preguntar por HIPOACUSIA de nueva aparición', 'Un solo hallazgo central obliga a manejarlo como ictus', 'No tranquilizarse con una tomografía normal', 'Repetir la resonancia si fue precoz y la exploración era central', 'Si es periférico, corticoides precoces y rehabilitación vestibular']
    },
    {
      nombre: 'Vértigo posicional paroxístico benigno',
      color: '#3f6b52',
      definicion: 'Vértigo breve y recurrente desencadenado por cambios de posición de la cabeza, producido por el desplazamiento de otoconios dentro de un canal semicircular.',
      fisiopatologia: 'Los otoconios, cristales de carbonato cálcico que normalmente están adheridos a la macula del utriculo, se desprenden y entran en un canal semicircular. Al mover la cabeza, esa masa se desplaza por gravedad y arrastra la endolinfa, estimulando el canal como si la cabeza girase. Eso explica todas las características del cuadro: la LATENCIA de segundos (el tiempo que tardan en moverse), la duración menor de un minuto (lo que tardan en asentarse), el AGOTAMIENTO al repetir (se dispersan) y el hecho de que la maniobra de reposición cure, porque simplemente los devuelve al utriculo.',
      epidemiologia: 'Es la causa más frecuente de vértigo. Predomina en mujeres y aumenta con la edad. El canal POSTERIOR es el afectado en la gran mayoría de los casos, y el horizontal en una minoría. Recurre en una proporción relevante de pacientes, lo que conviene anticipar para que la recurrencia no se viva como un fracaso.',
      factores_riesgo: ['Edad avanzada', 'Sexo femenino', 'Traumatismo craneal, incluso leve', 'Reposo prolongado en cama', 'Neuritis vestibular previa', 'Enfermedad de Meniere', 'Migraña', 'Osteoporosis y déficit de vitamina D', 'Cirugía otologica o dental prolongada', 'Antecedente de episodios previos'],
      clinica: 'Crisis de SEGUNDOS, siempre menores de un minuto, desencadenadas por girarse en la cama, tumbarse, incorporarse, mirar hacia arriba o agacharse. Entre las crisis el paciente esta BIEN, aunque puede quedar una sensación de inestabilidad. NO hay hipoacusia, ni acúfeno, ni focalidad, ni cefalea.',
      criterios_dx: 'Episodios recurrentes de vértigo posicional más nistagmo característico provocado por la maniobra correspondiente. Canal posterior con Dix-Hallpike, canal horizontal con la maniobra de rotación en decúbito. Ver la Figura 3 de Definición.',
      laboratorio: 'NINGUNO. El diagnóstico es de exploración, y pedir analítica en un caso típico no aporta nada.',
      imagen: 'NO INDICADA en el caso típico. Se reserva para los casos atípicos: nistagmo que bate hacia abajo, sin latencia, sin agotamiento, prolongado, o acompañado de cefalea o de focalidad.',
      complementarios: 'DIX-HALLPIKE para el canal posterior. MANIOBRA DE ROTACIÓN EN DECÚBITO para el horizontal, que es la que se omite y la razón por la que algunos casos se etiquetan de resistentes. Idealmente con gafas que impidan la fijación visual, que enmascara el nistagmo.',
      dx_diferencial: 'Vértigo posicional CENTRAL, sobre todo por lesiones de la fosa posterior; hipotensión ortostática; migraña vestibular con componente posicional; mareo perceptual postural persistente; y ansiedad.',
      tx_medico: 'MANIOBRAS DE REPOSICIÓN, que son el tratamiento: Epley para el canal posterior y maniobras propias para el horizontal. Se pueden repetir en la misma sesión y en visitas sucesivas. Rehabilitación vestibular si queda inestabilidad residual.',
      tx_farmacologico: 'NINGUNO como tratamiento. Los sedantes vestibulares no curan, no acortan el cuadro y RETRASAN la compensación; a lo sumo se usa un antiemetico puntual antes de la maniobra en un paciente muy sintomático.',
      tx_intervencionista: 'Excepcional. Obliteracion quirúrgica del canal en casos incapacitantes, resistentes y bien documentados tras múltiples tratamientos correctamente realizados.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso. Si el paciente ingresado presenta vértigo posicional, la maniobra se puede hacer a pie de cama y evita días de sedantes innecesarios.',
      seguimiento_ambulatorio: 'Revisión para confirmar la resolución. Explicar que RECURRE en una parte de los casos y que volver no es una mala señal. Corregir el déficit de vitamina D si existe.',
      pronostico: 'Excelente. La mayoría se resuelve con una o dos maniobras. Lo que empeora la experiencia del paciente no es la enfermedad sino el circuito: meses de sedantes, pruebas de imagen y consultas sin que nadie le coloque la cabeza.',
      algoritmo: ['Confirmar crisis de SEGUNDOS provocadas por el movimiento', 'Comprobar que entre las crisis el paciente esta bien', 'Descartar hipoacusia, acúfeno, cefalea y focalidad', 'Hacer DIX-HALLPIKE de los dos lados', 'Observar dirección, latencia, duración y agotamiento del nistagmo', 'Si es hacia arriba y torsional, hacer EPLEY', 'Si el Dix-Hallpike es negativo, hacer la rotación en decúbito', 'Tratar el canal horizontal con su maniobra propia', 'NO pedir imagen ni dar sedantes en el caso típico', 'Advertir de la posible recurrencia y citar para comprobar']
    },
    {
      nombre: 'Vértigo episódico espontáneo',
      color: '#8a6a1f',
      definicion: 'Crisis recurrentes de vértigo que comienzan sin desencadenante identificable y ceden espontáneamente, con un intervalo asintomático o casi asintomático entre ellas.',
      fisiopatologia: 'En la enfermedad de Meniere el mecanismo propuesto es el HIDROPS ENDOLINFATICO: un aumento de volumen de la endolinfa que distiende el laberinto membranoso y produce disfunción episódica, lo que explica que se afecten a la vez el equilibrio y la audición y que los síntomas fluctuen. En la migraña vestibular se postula una disfunción transitoria de las vías de integración vestibular, con los mismos mecanismos que generan el aura y la sensibilización central. Y en el accidente isquémico transitorio vertebrobasilar la causa es una hipoperfusión transitoria del territorio posterior, que puede afectar de forma aislada a las estructuras vestibulares del tronco.',
      epidemiologia: 'La migraña vestibular es muy frecuente y esta infradiagnosticada, en parte porque el paciente no relaciona el vértigo con su migraña y no lo cuenta. La enfermedad de Meniere es menos frecuente y se sobrediagnostica cuando no se documenta la hipoacusia. Y el vértigo puede ser la única manifestación de un accidente isquémico transitorio vertebrobasilar, que precede en ocasiones a un infarto establecido.',
      factores_riesgo: ['Antecedente personal o familiar de migraña', 'Sexo femenino para la migraña vestibular', 'Factores de riesgo vascular para el origen isquémico', 'Edad avanzada', 'Fibrilación auricular', 'Estenosis vertebrobasilar conocida', 'Antecedente de hipoacusia fluctuante', 'Estrés, privación de sueño y ayuno como desencadenantes de migraña', 'Consumo elevado de sal en la enfermedad de Meniere', 'Traumatismo craneal previo'],
      clinica: 'MENIERE: crisis de 20 minutos a 12 horas con hipoacusia, acúfeno y plenitud en el mismo oído, que fluctuan. MIGRAÑA VESTIBULAR: crisis de 5 minutos a 72 horas, con antecedente de migraña y rasgos migrañosos (cefalea, fotofobia, fonofobia o aura) en al menos la mitad de los episodios; hay que PREGUNTARLO, porque el paciente no lo relaciona. ACCIDENTE ISQUÉMICO TRANSITORIO: crisis breves, con factores de riesgo vascular, a veces con otros síntomas de territorio posterior.',
      criterios_dx: 'Criterios específicos para la enfermedad de Meniere (que exigen hipoacusia DOCUMENTADA con audiometría) y para la migraña vestibular. El accidente isquémico transitorio es un diagnóstico clínico que obliga a estudio vascular urgente.',
      laboratorio: 'Perfil vascular completo si se sospecha origen isquémico. Analítica general para descartar causas sistémicas. Ninguna prueba de laboratorio confirma por si sola una enfermedad de Meniere ni una migraña vestibular.',
      imagen: 'RESONANCIA Y ESTUDIO VASCULAR con urgencia si se sospecha accidente isquémico transitorio, con el mismo circuito que cualquier otro. En la migraña vestibular y en la enfermedad de Meniere la imagen sirve para excluir otras causas, no para confirmarlas.',
      complementarios: 'AUDIOMETRÍA, imprescindible: sin ella el diagnóstico de enfermedad de Meniere no se sostiene. Diario de crisis, que es muy útil para identificar patrones y desencadenantes. Ecocardiograma y monitorización del ritmo si se sospecha origen embólico.',
      dx_diferencial: 'Entre ellas tres, que es lo más frecuente; schwannoma vestibular; fístula perilinfatica; dehiscencia del canal semicircular superior; crisis de panico; y arritmia con perfil presincopal.',
      tx_medico: 'MENIERE: reducción de sal, control de desencadenantes y rehabilitación vestibular. MIGRAÑA VESTIBULAR: higiene de sueño, regularidad de comidas, identificación de desencadenantes y tratamiento de la migraña. ISQUÉMICO: prevención secundaria completa e inmediata.',
      tx_farmacologico: 'En la enfermedad de Meniere, diuréticos y betahistina según disponibilidad, con evidencia limitada, y corticoide intratimpanico en casos seleccionados. En la migraña vestibular, tratamiento preventivo de la migraña. En el accidente isquémico transitorio, antiagregación o anticoagulación según la causa, iniciada sin demora.',
      tx_intervencionista: 'En la enfermedad de Meniere refractaria e incapacitante, gentamicina intratimpanica o cirugía, valorando el riesgo de pérdida auditiva. Revascularización si la causa isquémica lo indica.',
      criterios_uci: 'No por el vértigo, sino por la causa: ictus establecido o inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Un vértigo episódico con factores de riesgo vascular NO se estudia de forma diferida: se maneja como un accidente isquémico transitorio, con el mismo circuito y la misma urgencia que cualquier otro.',
      seguimiento_ambulatorio: 'Diario de crisis, audiometrías seriadas en la enfermedad de Meniere, ajuste del tratamiento preventivo en la migraña vestibular y rehabilitación vestibular si queda inestabilidad.',
      pronostico: 'La migraña vestibular responde bien al tratamiento preventivo. La enfermedad de Meniere tiende a producir pérdida auditiva progresiva del oído afectado. Y el accidente isquémico transitorio tiene un riesgo elevado de infarto precoz, que es exactamente lo que hace urgente distinguirlo.',
      algoritmo: ['Confirmar que las crisis empiezan SIN desencadenante', 'Medir cuanto duran, que es lo que más separa las causas', 'Preguntar por hipoacusia, acúfeno y plenitud del oído', 'Preguntar por cefalea y fotofobia DURANTE las crisis', 'Revisar los factores de riesgo vascular', 'Pedir AUDIOMETRÍA si se sospecha Meniere', 'Si hay perfil vascular, manejarlo como accidente isquémico transitorio', 'Iniciar prevención secundaria sin demora si es isquémico', 'Tratar la migraña de forma preventiva si ese es el diagnóstico', 'Usar un diario de crisis para el seguimiento']
    },
    {
      nombre: 'Ictus de fosa posterior con vértigo aislado',
      color: '#3d5a73',
      definicion: 'Infarto o hemorragia de tronco o de cerebelo que se manifiesta únicamente como mareo o vértigo, sin la focalidad evidente que hace pensar en un ictus.',
      fisiopatologia: 'El territorio de la arteria cerebelosa posteroinferior irriga el cerebelo inferior y la parte lateral del bulbo. Un infarto limitado al pedunculo cerebeloso inferior o al nódulo puede producir vértigo INTENSO sin debilidad, sin alteración del habla y sin ningún otro signo, porque esas regiones no contienen vías motoras ni sensitivas principales. El territorio de la anteroinferior añade el oído interno, y por eso puede producir hipoacusia y simular un problema otologico. Esa anatomía es la razón por la que el vértigo aislado puede ser un ictus y por la que hace falta una exploración oculomotora dirigida en lugar de confiar en la ausencia de focalidad.',
      epidemiologia: 'Una minoría de los síndromes vestibulares agudos es vascular, pero es una minoría de consecuencias graves. El vértigo aislado como forma de presentación del ictus se asocia a mayor probabilidad de diagnóstico erróneo inicial, sobre todo en pacientes jóvenes, en quienes se asume con demasiada facilidad un origen periférico.',
      factores_riesgo: ['Factores de riesgo vascular acumulados', 'Edad avanzada', 'Fibrilación auricular', 'Antecedente de ictus o de accidente isquémico transitorio', 'Disección vertebral, sobre todo en jóvenes', 'Traumatismo o manipulación cervical reciente', 'Cefalea o cervicalgia intensas de inicio brusco', 'Consumo de cocaína y de otros simpaticomiméticos', 'Estados protrombóticos', 'Ausencia de exploración oculomotora dirigida'],
      clinica: 'Vértigo continuo que puede ser MENOS intenso que el de una neuritis, lo que engaña. Los datos que lo delatan son la INCAPACIDAD PARA SENTARSE O CAMINAR sin ayuda, el nistagmo que cambia de dirección o es vertical o torsional, la desviación vertical, el impulso cefálico normal y la hipoacusia nueva. Hay que buscar además diplopía, disartria, disfagia, hipo persistente, síndrome de Horner y alteración sensitiva cruzada.',
      criterios_dx: 'Sospecha por exploración, confirmación por imagen. Y una advertencia central: una resonancia PRECOZ normal no descarta el diagnóstico si la exploración es central.',
      laboratorio: 'Glucemia, hemograma, coagulación y perfil vascular. Estudio etiológico completo del ictus una vez confirmado.',
      imagen: 'RESONANCIA CON DIFUSIÓN, sabiendo que en las primeras 24 a 48 horas deja escapar una parte de los infartos pequeños de fosa posterior. La tomografía apenas ve esa región. ANGIOGRAFÍA de troncos y de circulación posterior buscando estenosis y sobre todo DISECCIÓN VERTEBRAL.',
      complementarios: 'HINTS AMPLIADO, más sensible que la resonancia precoz en manos entrenadas. Ecocardiograma y monitorización prolongada del ritmo. Y vigilancia neurológica estrecha durante las primeras 72 horas.',
      dx_diferencial: 'Neuritis vestibular, laberintitis, brote de esclerosis múltiple, encefalopatía de Wernicke, intoxicación farmacológica, migraña de tronco y tumor de fosa posterior.',
      tx_medico: 'Via de ictus completa desde el primer minuto, con valoración de reperfusión si esta en ventana. Control de la tensión, de la glucemia y de la temperatura. Prevención de la aspiración y valoración de la deglución.',
      tx_farmacologico: 'Trombólisis si cumple criterios y esta en ventana. Antiagregación o anticoagulación según la causa. Estatina y control de los factores de riesgo.',
      tx_intervencionista: 'Trombectomía si hay oclusión de gran vaso accesible. Y, muy importante en esta localización, CRANIECTOMÍA DESCOMPRESIVA o drenaje ventricular en el infarto cerebeloso con edema: es una complicación tratable que sin cirugía puede ser mortal.',
      criterios_uci: 'Infarto cerebeloso extenso con riesgo de edema, hidrocefalia obstructiva, compresión del tronco, deterioro del nivel de conciencia y compromiso respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'VIGILANCIA ESTRECHA durante las primeras 48 a 72 horas, porque el edema cerebeloso puede producir un deterioro brusco en un paciente que hasta ese momento parecia estable. Un descenso del nivel de conciencia obliga a repetir la imagen de inmediato.',
      seguimiento_ambulatorio: 'Prevención secundaria completa, rehabilitación vestibular y del equilibrio, y control de los factores de riesgo. Valorar secuelas de coordinación y de marcha.',
      pronostico: 'Muy variable. La complicación más temida es el edema cerebeloso de las primeras 72 horas, que es tratable si se anticipa. Y el mayor riesgo evitable sigue siendo el diagnóstico erróneo inicial como vértigo periférico.',
      algoritmo: ['Sospecharlo en TODO síndrome vestibular agudo, no solo si hay focalidad', 'Explorar la marcha: no poder sentarse ni caminar es bandera roja', 'Hacer HINTS ampliado', 'Buscar otra focalidad de territorio posterior', 'Preguntar por cefalea o cervicalgia bruscas, por la disección', 'No conformarse con una tomografía normal', 'Pedir resonancia con difusión', 'Repetirla si fue precoz y la exploración era central', 'Activar la via de ictus y valorar reperfusión', 'Vigilar el edema cerebeloso durante 48 a 72 horas']
    },
    {
      nombre: 'Mareo crónico y trampas del seguimiento',
      color: '#6b4a8c',
      definicion: 'Mareo o inestabilidad que persiste durante meses, con frecuencia multifactorial, y conjunto de errores que perpetuan el problema en el seguimiento.',
      fisiopatologia: 'Tras un episodio vestibular agudo, el sistema nervioso central COMPENSA reajustando la ganancia del reflejo vestibuloocular y las estrategias posturales. Esa compensación necesita movimiento y exposición: por eso el reposo prolongado y los sedantes vestibulares la RETRASAN, y por eso la rehabilitación la acelera. En el mareo perceptual postural persistente se añade un mecanismo distinto: una dependencia excesiva de la información visual y un control postural rígido y anticipatorio, que se mantienen después de que la lesión original se haya resuelto y que empeoran en entornos visuales complejos.',
      epidemiologia: 'El mareo crónico es muy frecuente en el anciano y es un factor de riesgo de CAÍDAS, de pérdida de autonomia y de aislamiento social. Con frecuencia hay varias causas a la vez, y esa es precisamente la razón por la que buscar una sola explicación suele fracasar.',
      factores_riesgo: ['Edad avanzada', 'Polifarmacia', 'Déficit visual no corregido', 'Neuropatía periférica', 'Debilidad y sarcopenia', 'Deterioro cognitivo', 'Ansiedad y depresión', 'Episodio vestibular agudo previo mal rehabilitado', 'Uso prolongado de sedantes vestibulares', 'Miedo a caer con restricción de la actividad'],
      clinica: 'Inestabilidad continua, sensación de flotar o de caminar sobre algodón, que empeora al estar de pie, al caminar y en entornos visuales complejos como los supermercados. En el mareo perceptual postural persistente los síntomas duran meses y hay una clara relación con la postura y con los estímulos visuales.',
      criterios_dx: 'Diagnóstico clínico tras excluir causas activas. Requiere una anamnesis larga y una exploración completa que incluya marcha, visión, sensibilidad y fármacos.',
      laboratorio: 'Hemograma, función tiroidea, vitamina B12, iones, función renal y vitamina D. Buscando causas corregibles, que en el anciano son más frecuentes de lo que parece.',
      imagen: 'Rara vez útil. Se pide si aparece focalidad, si hay hipoacusia unilateral progresiva o si la exploración sugiere una causa estructural. Repetir imagenes normales no resuelve un mareo crónico y refuerza la preocupación del paciente.',
      complementarios: 'Valoración de la marcha y del equilibrio, revisión de la agudeza visual, exploración de la sensibilidad profunda y valoración cognitiva. Y una revisión sistemática de la LISTA DE FÁRMACOS.',
      dx_diferencial: 'Mareo perceptual postural persistente, inestabilidad multifactorial del anciano, hipotensión ortostática, efecto farmacológico, vestibulopatia bilateral, neuropatía periférica, deterioro cognitivo y trastorno de ansiedad.',
      tx_medico: 'REHABILITACIÓN VESTIBULAR, que es el tratamiento con más respaldo y el que menos se prescribe. Retirada de sedantes vestibulares. Corrección visual, ejercicio de fuerza y equilibrio, adaptaciones del domicilio y prevención de caídas.',
      tx_farmacologico: 'Retirar más que añadir. En el mareo perceptual postural persistente, los inhibidores selectivos de la recaptación de serotonina tienen respaldo, asociados a rehabilitación y a terapia cognitivo-conductual.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente ingresado, movilización precoz y revisión de la medicación sedante, que es una causa habitual de mareo y de caídas intrahospitalarias.',
      seguimiento_ambulatorio: 'Programa de rehabilitación con objetivos concretos, revisión periódica de fármacos, valoración de caídas y abordaje de la ansiedad asociada, que forma parte del problema y no es un añadido.',
      pronostico: 'Mejora con rehabilitación y con un abordaje multifactorial. Empeora con el reposo, con los sedantes y con la restricción de la actividad por miedo a caer, que es un círculo que hay que romper de forma explícita.',
      algoritmo: ['Aceptar que suele haber VARIAS causas a la vez', 'Revisar la lista de fármacos y retirar los sedantes', 'Medir la tensión en decúbito y de pie', 'Explorar visión, sensibilidad profunda y fuerza', 'Descartar causas corregibles con analítica básica', 'No repetir imagenes normales sin motivo nuevo', 'Prescribir REHABILITACIÓN VESTIBULAR', 'Abordar la ansiedad y el miedo a caer', 'Valorar tratamiento del mareo perceptual postural persistente', 'Fijar objetivos concretos y revisar el progreso']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Todo este tema descansa en un cambio de pregunta: dejar de preguntar COMO es el mareo y empezar a preguntar CUANTO dura y QUE lo provoca. De ahi salen tres síndromes, tres exploraciones y una única decisión realmente grave, que es no dejar marchar a casa un ictus de fosa posterior.',
    parametros: ['No basar el diagnóstico en como describe el paciente el mareo', 'Descartar primero el mareo sintomático de una enfermedad general', 'Clasificar por TIEMPO y por DESENCADENANTE', 'Explorar SIEMPRE la marcha y la sedestación', 'Aplicar el HINTS solo en el síndrome vestibular agudo', 'Recordar que un impulso cefálico NORMAL es lo preocupante', 'No hacer el HINTS si no hay nistagmo', 'No tranquilizarse con una tomografía normal', 'Repetir la resonancia si fue precoz y la exploración era central', 'Hacer Dix-Hallpike y también la rotación en decúbito', 'No dar sedantes vestibulares más de unos pocos días', 'Prescribir rehabilitación vestibular, que casi nunca se prescribe'],
    criterios_uci_general: 'Infarto cerebeloso extenso con riesgo de edema y de compresión del tronco, hidrocefalia obstructiva, deterioro del nivel de conciencia, compromiso respiratorio o de la deglución, y hemorragia de fosa posterior. La vigilancia de las primeras 48 a 72 horas es lo que permite detectar el deterioro brusco por edema, que es tratable con cirugía.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: control de los factores de riesgo vascular, que es lo que previene el ictus de fosa posterior; prevención de caídas y corrección del déficit de vitamina D; y evitar la manipulación cervical de alta velocidad, que se ha relacionado con la disección vertebral. Secundaria: prevención completa e inmediata tras un accidente isquémico transitorio vertebrobasilar, que puede presentarse SOLO como vértigo episódico; tratamiento preventivo de la migraña en la migraña vestibular; y maniobras de reposición precoces en el vértigo posicional para evitar meses de sedantes y de pruebas. Terciaria: REHABILITACIÓN VESTIBULAR, retirada de sedantes, revisión de fármacos, corrección visual y programas de fuerza y equilibrio para prevenir caídas y romper el círculo del miedo a caer.'
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
  'Enfoque del mareo: tiempo y desencadenante': { definicion: [3, 4, 14], criterios_dx: [3, 4, 14], laboratorio: [3, 4, 14], tx_farmacologico: [3, 4, 14] },
  'Síndrome vestibular agudo: neuritis o ictus': { definicion: [2, 9, 13], criterios_dx: [2, 9, 13], laboratorio: [2, 9, 13], tx_farmacologico: [2, 9, 13] },
  'Vértigo posicional paroxístico benigno': { definicion: [5, 6], criterios_dx: [5, 6], laboratorio: [5, 6], tx_farmacologico: [5, 6] },
  'Vértigo episódico espontáneo': { definicion: [7, 8, 1], criterios_dx: [7, 8, 1], laboratorio: [7, 8, 1], tx_farmacologico: [7, 8, 1] },
  'Ictus de fosa posterior con vértigo aislado': { definicion: [10, 11, 12, 16], criterios_dx: [10, 11, 12, 16], laboratorio: [10, 11, 12, 16], tx_farmacologico: [10, 11, 12, 16] },
  'Mareo crónico y trampas del seguimiento': { definicion: [1, 15], criterios_dx: [1, 15], laboratorio: [1, 15], tx_farmacologico: [1, 15] }
};
export const estigmasTitulo = 'Signos y datos que cambian la conducta';
export const estigmas = [
  { s: 'No puede sentarse ni caminar sin ayuda', p: 'Bandera roja de ictus', photo: null, desc: 'Es el dato más útil a pie de cama y el que menos entrenamiento exige. Un paciente con una neuritis vestibular esta muy mareado pero puede mantenerse de pie con ayuda; quien no puede hacerlo tiene un problema cerebeloso hasta que se demuestre lo contrario.' },
  { s: 'Impulso cefálico NORMAL', p: 'Lo normal es lo preocupante', photo: null, desc: 'Es el hallazgo más contraintuitivo del tema. En un paciente que lleva días con vértigo continuo, un reflejo vestibuloocular intacto significa que el nervio esta bien y que el problema esta en el cerebro.' },
  { s: 'Nistagmo que cambia de dirección', p: 'Central', photo: null, desc: 'El nistagmo periférico bate SIEMPRE hacia el mismo lado, mire donde mire el paciente. Si al mirar a un lado bate a la derecha y al otro a la izquierda, el origen es central.' },
  { s: 'Nistagmo puramente vertical o torsional', p: 'Central', photo: null, desc: 'El nistagmo del vértigo periférico agudo es horizontal con un componente torsional. Uno puramente vertical, y en particular el que bate hacia abajo, apunta a la fosa posterior o a la unión craneocervical.' },
  { s: 'Desviación vertical al destapar el ojo', p: 'Central', photo: null, desc: 'Se explora tapando y destapando cada ojo de forma alterna. Es el paso más específico del HINTS y también el que más se olvida, quiza porque no forma parte de la exploración neurológica habitual.' },
  { s: 'Hipoacusia de nueva aparición', p: 'Puede ser central', photo: null, desc: 'Parece un dato otologico y por eso tranquiliza, pero la arteria cerebelosa anteroinferior irriga el oído interno: un infarto de ese territorio produce vértigo con hipoacusia y se confunde con una laberintitis.' },
  { s: 'Cefalea o cervicalgia intensas y bruscas', p: 'Pensar en disección', photo: null, desc: 'Sobre todo en pacientes jóvenes o tras un traumatismo o una manipulación cervical. Obliga a pedir estudio de los vasos y no solo imagen del parénquima.' },
  { s: 'Tomografía craneal normal', p: 'No descarta nada', photo: null, desc: 'El artefacto óseo hace que la tomografía apenas vea la fosa posterior y deje escapar la mayoría de los infartos de esa región. Sirve para descartar hemorragia y poco más.' },
  { s: 'Resonancia precoz normal', p: 'Tampoco descarta', photo: null, desc: 'En las primeras 24 a 48 horas, la difusión deja escapar una parte de los infartos pequeños de fosa posterior. Si la exploración era central, hay que repetirla y no dar el alta.' },
  { s: 'Nistagmo hacia arriba y torsional en el Dix-Hallpike', p: 'Canal posterior', photo: null, desc: 'Con latencia de segundos, duración menor de un minuto y agotamiento al repetir. Es el vértigo posicional más frecuente y se trata con la maniobra de Epley en la misma consulta.' },
  { s: 'Nistagmo posicional sin latencia y que no se agota', p: 'Posicional central', photo: null, desc: 'Sobre todo si bate hacia abajo o dura más de un minuto. Obliga a pedir imagen de fosa posterior en lugar de repetir maniobras de reposición que no van a funcionar.' },
  { s: 'Vértigo episódico aislado con riesgo vascular', p: 'Puede ser un ataque isquémico', photo: null, desc: 'Un vértigo breve y recurrente, sin ningún otro síntoma, puede ser un accidente isquémico transitorio vertebrobasilar. No se estudia de forma diferida: se maneja con el mismo circuito urgente que cualquier otro.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación por tiempo y desencadenante (calculadora disponible)': [3, 4],
  'HINTS ampliado (calculadora disponible)': [2, 11],
  'Nistagmo posicional (calculadora disponible)': [5, 6],
  'Criterios diagnósticos de enfermedad de Meniere': [7],
  'Criterios diagnósticos de migraña vestibular': [8],
  'Banderas rojas del mareo agudo': [10, 1]
};
export const escalaCalc = {
  'Clasificación por tiempo y desencadenante (calculadora disponible)': 'sindrome-vestibular',
  'HINTS ampliado (calculadora disponible)': 'hints',
  'Nistagmo posicional (calculadora disponible)': 'nistagmo-posicional'
};
export const compGroups = [
  { name: 'El método', items: ['Enfoque del mareo: tiempo y desencadenante'] },
  { name: 'Agudo y continuo', items: ['Síndrome vestibular agudo: neuritis o ictus', 'Ictus de fosa posterior con vértigo aislado'] },
  { name: 'Episodico', items: ['Vértigo posicional paroxístico benigno', 'Vértigo episódico espontáneo'] },
  { name: 'Cuando se cronifica', items: ['Mareo crónico y trampas del seguimiento'] }
];
export const complicacionesIntro = 'La primera ficha es el método, y es la que sostiene todo lo demás: preguntar cuanto dura y que lo provoca en lugar de como es. Las dos siguientes son el síndrome vestibular agudo, separadas a propósito porque reconocer el cuadro es un problema distinto de no dejar escapar el ictus que se esconde dentro de el. Las dos siguientes son los síndromes episódicos: el posicional, que se cura en la misma consulta con las manos, y el espontáneo, donde conviven una enfermedad benigna muy infradiagnosticada y un accidente isquémico transitorio que hay que estudiar con urgencia. Y la última es lo que ocurre cuando nada de esto se hace bien: un mareo crónico, multifactorial, que se perpetua con reposo y con sedantes.';
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
      { title: 'Descartar lo sistémico', sub: 'Glucemia, anemia, fármacos', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Agudo y continuo', sub: 'Días: hacer HINTS', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Episódico espontáneo', sub: 'Meniere, migraña o isquemia', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Episódico provocado', sub: 'Segundos: Dix-Hallpike', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'HINTS', sub: 'Solo en el vértigo continuo', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Impulso NORMAL', sub: 'Lo normal es lo malo', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Nistagmo que cambia', sub: 'Central', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Desviación vertical', sub: 'Central, y se olvida', color: '#6b4a8c', target: 'diagnostico' },
      { title: 'No puede caminar', sub: 'Bandera roja de ictus', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'EL POSICIONAL', sub: 'Se cura con las manos', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Dix-Hallpike', sub: 'Canal posterior: Epley', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Rotación en decúbito', sub: 'Canal horizontal', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Sin imagen ni sedantes', sub: 'En el caso típico', color: '#4a7a5c', target: 'complicaciones' },
      { title: 'Si bate hacia abajo', sub: 'Sospechar central', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [4, 1], no_invasivos: [2, 3, 5], imagen: [10, 12] };
export const clasificacionCite = [1, 2, 3, 7];
export const seguimientoCite = [1, 2, 10];
