// topics/guillain-barre-miastenia/content.js: Sindrome de Guillain-Barre y miastenia gravis.
// Cubre el item "Sindrome de Guillain-Barre y miastenia gravis" del cluster "Alteracion de
// conciencia y enfermedad neuromuscular" (bloque XII, Neurologia) del temario.
//
// DELIMITACION frente a `neuropatias-perifericas`: alli esta el nervio periferico cronico y las
// formas focales. Aqui estan la debilidad neuromuscular AGUDA que amenaza la respiracion y la
// patologia de la UNION neuromuscular.
//
// Fuentes principales: guia EAN/PNS de 2023 sobre diagnostico y tratamiento del sindrome de
// Guillain-Barre (la que hay en Bibliografia/); consenso internacional de 2020 sobre el manejo de
// la miastenia gravis (tambien en Bibliografia/); escala EGRIS de prediccion de insuficiencia
// respiratoria; ensayo MGTX sobre timectomia; y las series clasicas sobre sindrome de
// Lambert-Eaton y botulismo.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'guillain-barre-miastenia',
  titulo: 'Guillain-Barré y Miastenia Gravis',
  subtitulo: 'Módulo 63 · Medicina Interna',
  accent: '#8c3a5c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const localizarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a5c;border-radius:8px;padding:5px 9px;background:#8c3a5c12;margin-bottom:6px;">
    <strong style="color:#8c3a5c;">Ante una debilidad aguda, la primera pregunta es DONDE esta la lesión.</strong> <span style="color:var(--ink-dim);">Cuatro cuadros comparten síntoma y no comparten nada más: ni el mecanismo, ni el tratamiento, ni la urgencia. Se separan con tres datos de cabecera: reflejos, pupilas y dirección de la debilidad.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a5c22;border:1px solid #8c3a5c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a5c;">GUILLAIN-BARRÉ<br><span style="font-weight:400;font-size:8.5px;">nervio y raíz</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">ASCENDENTE</strong> y simétrica con <strong style="color:var(--ink);">ARREFLEXIA</strong>, que progresa en días. Alteración sensitiva y dolor de espalda frecuentes. Antecedente infeccioso 1 a 3 semanas antes en dos tercios. Pupilas normales.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">MIASTENIA<br><span style="font-weight:400;font-size:8.5px;">unión, posinaptica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">FATIGABILIDAD</strong>: empeora con el uso y con el paso del dia, mejora con el reposo. Ptosis y diplopía al inicio en la mayoría. <strong>REFLEJOS NORMALES</strong> y <strong>SIN alteración sensitiva</strong>. Pupilas normales.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5a6b2e22;border:1px solid #5a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5a6b2e;">LAMBERT-EATON<br><span style="font-weight:400;font-size:8.5px;">unión, presinaptica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">PROXIMAL</strong> de piernas con arreflexia que <strong style="color:var(--ink);">MEJORA tras la contracción sostenida</strong> (facilitacion). Boca seca precoz y muy frecuente. Se asocia a carcinoma MICROCITICO en más de la mitad de los casos.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">BOTULISMO<br><span style="font-weight:400;font-size:8.5px;">unión, presinaptica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Parálisis <strong style="color:var(--ink);">DESCENDENTE</strong> y simétrica que empieza por los pares craneales, con <strong style="color:#8c3a34;">PUPILAS MIDRIÁTICAS y arreactivas</strong>, boca seca, estreñimiento, SIN fiebre y SIN alteración sensitiva. La antitoxina precoz cambia el curso.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Los tres datos que los separan en 30 segundos.</strong> <strong>REFLEJOS</strong>: abolidos en Guillain-Barré y en Lambert-Eaton, normales en la miastenia. <strong>PUPILAS</strong>: midriáticas y arreactivas solo en el botulismo, que es el dato que lo delata. <strong>DIRECCIÓN</strong>: ascendente en Guillain-Barré, descendente en el botulismo, y fluctuante a lo largo del dia en la miastenia. Y una regla que vale para los cuatro: lo que decide el destino del paciente no es el diagnóstico sino la <strong>VIGILANCIA RESPIRATORIA</strong>.
  </div>
</div>`;

const gbsHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a5c;border-radius:8px;padding:6px 8px;background:#8c3a5c08;">
      <div style="font-weight:700;color:#8c3a5c;text-align:center;margin-bottom:4px;">LO QUE APOYA EL DIAGNÓSTICO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Debilidad progresiva simétrica con arreflexia, que alcanza su máximo en <strong style="color:var(--ink);">menos de 4 semanas</strong> (habitualmente en 2). Antecedente de diarrea o de infección respiratoria 1 a 3 semanas antes. Dolor de espalda o radicular, que a menudo <strong>PRECEDE</strong> a la debilidad y despista.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">LO QUE OBLIGA A DUDAR</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">NIVEL SENSITIVO</strong> claro (apunta a medula), asimetría marcada y persistente, disfunción de esfínteres desde el inicio, fiebre al comienzo del cuadro, y <strong style="color:var(--ink);">pleocitosis de más de 50 células</strong> en el líquido, que obliga a pensar en VIH, Lyme, linfoma o sarcoidosis.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">DOS PRUEBAS QUE PUEDEN SER NORMALES AL PRINCIPIO Y NO DESCARTAN NADA</div>
    <div style="color:var(--ink-dim);line-height:1.6;">El <strong style="color:var(--ink);">LÍQUIDO CEFALORRAQUÍDEO</strong> muestra disociación albuminocitologica (proteínas altas con celularidad normal), pero en la <strong>PRIMERA SEMANA puede ser normal</strong> en una proporción importante de pacientes. Y el <strong style="color:var(--ink);">ELECTRONEUROGRAMA</strong> también puede ser normal en los primeros días. Si el cuadro clínico es compatible, ninguna de las dos pruebas normales autoriza a mandar al paciente a casa: el diagnóstico es clínico y la vigilancia no se suspende.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Tratamiento: inmunoglobulinas O plasmaféresis.</strong> Las dos tienen eficacia equivalente y se elige por disponibilidad y por el perfil del paciente. <strong>NO se combinan</strong>, porque añadir la segunda no aporta beneficio. Y hay una diferencia con la forma crónica que se pregunta siempre: <strong style="color:#8c3a34;">los CORTICOIDES NO son eficaces</strong> en el síndrome de Guillain-Barré.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que mata no es la debilidad de las piernas.</strong> Las dos causas de muerte son la <strong>insuficiencia respiratoria</strong> y la <strong>DISAUTONOMÍA</strong>: arritmias, bradicardia extrema con maniobras vagales, labilidad tensional, íleo y retención. Por eso la monitorización cardiaca y la vigilancia respiratoria seriada valen más que cualquier prueba diagnóstica.
    </div>
  </div>
</div>`;

const miasteniaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">La miastenia se reconoce por la FATIGABILIDAD, no por la debilidad.</strong> <span style="color:var(--ink-dim);">Empeora con el uso repetido y a lo largo del dia, y mejora con el reposo. Reflejos normales y sin alteración sensitiva: eso la separa del resto.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">DIAGNÓSTICO</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">ANTICUERPOS</strong> primero: frente al receptor de acetilcolina en la gran mayoría, frente a MuSK en un grupo pequeño con perfil propio, y frente a LRP4. Si son negativos, <strong>estimulación repetitiva</strong> (decremento) y <strong>fibra única</strong>. La <strong>PRUEBA DEL HIELO</strong> sobre el párpado, dos minutos, es sencilla y útil para la ptosis.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">LA TOMOGRAFÍA DE TÓRAX ES OBLIGADA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">A <strong style="color:var(--ink);">TODO</strong> paciente con miastenia, para buscar <strong>TIMOMA</strong>. Si lo hay, la timectomia esta indicada siempre, por el propio tumor. Y en la miastenia generalizada con anticuerpos frente al receptor de acetilcolina y de inicio precoz, la timectomia mejora los resultados aunque NO haya timoma.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">FÁRMACOS QUE PUEDEN DESENCADENAR UNA CRISIS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Antibióticos</strong>: aminoglucósidos, macrolidos y sobre todo <strong>FLUOROQUINOLONAS</strong>, que son las que más se prescriben sin pensar en esto. <strong style="color:var(--ink);">Cardiovasculares</strong>: betabloqueantes, procainamida. <strong style="color:var(--ink);">Otros</strong>: MAGNESIO intravenoso, bloqueantes neuromusculares, penicilamina, cloroquina e hidroxicloroquina, contrastes yodados e inhibidores del punto de control inmunitario. Antes de prescribir a un miastenico, comprobarlo.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Escalones del tratamiento.</strong> <strong>PIRIDOSTIGMINA</strong> sintomática, que alivia pero no modifica la enfermedad. <strong>CORTICOIDE</strong>, empezando a dosis BAJA y subiendo despacio, porque iniciarlo a dosis alta puede producir un empeoramiento transitorio grave. <strong>Ahorradores</strong>: azatioprina, micofenolato o tacrolimus, que tardan meses en actuar. Y en la enfermedad refractaria, rituximab (de elección si los anticuerpos son frente a MuSK), inhibidores del complemento y bloqueantes del receptor Fc neonatal.
  </div>
</div>`;

const crisisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">En la debilidad neuromuscular, la gasometría llega TARDE.</strong> <span style="color:var(--ink-dim);">La hipercapnia aparece cuando el paciente ya esta agotado. Lo que hay que seguir es la capacidad vital a pie de cama, de forma seriada, y actuar antes de que se descompense.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;text-align:center;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">20</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Capacidad vital por debajo de <strong style="color:var(--ink);">20 mL/kg</strong></div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;text-align:center;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">30</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Presión inspiratoria máxima por debajo de <strong style="color:var(--ink);">30 cmH2O</strong> en valor absoluto</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;text-align:center;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">40</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Presión espiratoria máxima por debajo de <strong style="color:var(--ink);">40 cmH2O</strong></div>
    </div>
  </div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:5px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Y los signos de cabecera que valen tanto como los numeros:</strong> el paciente no puede contar de corrido hasta 20 en una sola espiración, habla entrecortado, usa musculatura accesoria, no puede levantar la cabeza de la almohada, tiene respiración paradójica, o presenta debilidad bulbar con dificultad para tragar su propia saliva. <strong>La debilidad bulbar es indicación de intubación aunque los numeros aun no lo sean</strong>, porque el riesgo es la aspiración, no la fatiga.
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #8c3a5c;border-radius:8px;padding:6px 8px;background:#8c3a5c08;">
      <div style="font-weight:700;color:#8c3a5c;text-align:center;margin-bottom:4px;">CRISIS MIASTENICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Insuficiencia respiratoria por progresión de la enfermedad. Desencadenantes: <strong style="color:var(--ink);">INFECCIÓN</strong> (la más frecuente), cirugía, embarazo y parto, un fármaco nuevo, o la retirada rápida de la inmunosupresión. Tratamiento: inmunoglobulinas o plasmaféresis, soporte ventilatorio y tratar el desencadenante.</div>
    </div>
    <div style="border:1.5px solid #5a6b2e;border-radius:8px;padding:6px 8px;background:#5a6b2e08;">
      <div style="font-weight:700;color:#5a6b2e;text-align:center;margin-bottom:4px;">CRISIS COLINÉRGICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hoy es RARA. Por exceso de anticolinesterasico: añade síntomas <strong style="color:var(--ink);">muscarínicos</strong> (diarrea, cólicos, sudoración, lagrimeo, sialorrea, broncorrea), <strong>MIOSIS</strong>, bradicardia y fasciculaciones. Ante la duda, se suspende la piridostigmina y se observa, que además es lo que se hace durante la ventilación.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema reúne dos enfermedades que se estudian juntas porque comparten el mismo peligro: una <strong>debilidad que puede llegar a los músculos respiratorios</strong>. El síndrome de Guillain-Barré ataca el nervio y la raíz; la miastenia gravis ataca la unión neuromuscular. Y alrededor de ambas hay dos cuadros más que entran en el mismo diferencial y que conviene tener presentes: el síndrome de Lambert-Eaton y el botulismo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: donde esta la lesión.</strong></p>
<p style="margin:0 0 12px;">Cuatro cuadros con el mismo síntoma y ningún tratamiento en común. Se separan con tres datos que se obtienen en la exploración inicial: los <strong>reflejos</strong> (abolidos en Guillain-Barré y en Lambert-Eaton, normales en la miastenia), las <strong>pupilas</strong> (midriáticas y arreactivas solo en el botulismo) y la <strong>dirección</strong> de la debilidad (ascendente, descendente o fluctuante). Y una regla que vale para los cuatro: lo que decide el pronóstico no es acertar la etiqueta sino vigilar la respiración.</p>
${figBlock('Figura 1', 'Donde esta la lesión: cuatro cuadros y tres datos que los separan', localizarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el síndrome de Guillain-Barré.</strong></p>
<p style="margin:0 0 12px;">Debilidad ascendente, simétrica y arreflexica que alcanza su máximo en menos de cuatro semanas, con frecuencia precedida de una infección y, muy a menudo, de <strong>dolor de espalda</strong> que despista. Conviene saber que el líquido cefalorraquídeo y el electroneurograma <strong>pueden ser normales en los primeros días</strong> y no descartan nada. El tratamiento son inmunoglobulinas o plasmaféresis, que no se combinan, y hay un dato que se pregunta siempre: los <strong>corticoides no son eficaces</strong> aquí, al revés que en la forma crónica.</p>
${figBlock('Figura 2', 'Guillain-Barré: lo que apoya, lo que hace dudar y lo que mata', gbsHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la miastenia gravis.</strong></p>
<p style="margin:0 0 12px;">Lo que la define no es la debilidad sino la <strong>fatigabilidad</strong>: empeora con el uso y a lo largo del dia y mejora con el reposo, con reflejos normales y sin alteración sensitiva. El diagnóstico empieza por los anticuerpos y sigue por la neurofisiologia si son negativos. La <strong>tomografía de tórax es obligada en todos</strong> para buscar timoma. Y hay una lista de fármacos que puede desencadenar una crisis y que conviene comprobar antes de prescribir nada a un miastenico.</p>
${figBlock('Figura 3', 'Miastenia: diagnóstico, el timo y los fármacos prohibidos', miasteniaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la vigilancia respiratoria, que es lo que salva.</strong></p>
<p style="margin:0 0 12px;">En la debilidad neuromuscular la <strong>gasometría llega tarde</strong>: la hipercapnia aparece cuando el paciente ya esta agotado y a punto de claudicar. Lo que hay que seguir es la <strong>capacidad vital a pie de cama</strong>, de forma seriada, con la regla de 20, 30 y 40 y con los signos clínicos que valen tanto como los numeros. Y hay una excepción que adelanta la decisión: la debilidad bulbar con incapacidad para manejar la propia saliva.</p>
${figBlock('Figura 4', 'La regla de 20, 30 y 40, y las dos crisis', crisisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No descartar un Guillain-Barré porque el líquido cefalorraquídeo o el electroneurograma sean normales en los primeros días. No mandar a casa a un paciente con debilidad ascendente para reevaluarlo en una semana. No dar corticoides como tratamiento del Guillain-Barré. No combinar inmunoglobulinas con plasmaféresis. No esperar a la gasometría para decidir la intubación. No hacer maniobras vagales ni dar fármacos bradicardizantes sin monitorización en un paciente disautonomico. No prescribir una fluoroquinolona, un aminoglucosido o magnesio intravenoso a un miastenico sin comprobarlo antes. No iniciar el corticoide a dosis alta en una miastenia sin prever el empeoramiento transitorio. No dejar de pedir tomografía de tórax a todo paciente con miastenia. Y no olvidar el cribado tumoral repetido en el síndrome de Lambert-Eaton, donde el tumor puede aparecer después del cuadro neurológico.</p>`;

export const bibliografia = [
  'van Doorn PA, Van den Bergh PYK, Hadden RDM, et al. European Academy of Neurology/Peripheral Nerve Society guideline on diagnosis and treatment of Guillain-Barre syndrome. Eur J Neurol. 2023;30(12):3646-3674.',
  'Narayanaswami P, Sanders DB, Wolfe G, et al. International consensus guidance for management of myasthenia gravis: 2020 update. Neurology. 2021;96(3):114-122.',
  'Walgaard C, Lingsma HF, Ruts L, et al. Prediction of respiratory insufficiency in Guillain-Barre syndrome. Ann Neurol. 2010;67(6):781-787.',
  'Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barre syndrome. Lancet. 2016;388(10045):717-727.',
  'Hughes RAC, Swan AV, van Doorn PA. Intravenous immunoglobulin for Guillain-Barre syndrome. Cochrane Database Syst Rev. 2014;(9):CD002063.',
  'Chevret S, Hughes RAC, Annane D. Plasma exchange for Guillain-Barre syndrome. Cochrane Database Syst Rev. 2017;2(2):CD001798.',
  'Hughes RAC, Brassington R, Gunn AA, van Doorn PA. Corticosteroids for Guillain-Barre syndrome. Cochrane Database Syst Rev. 2016;10(10):CD001446.',
  'Wolfe GI, Kaminski HJ, Aban IB, et al. Randomized trial of thymectomy in myasthenia gravis. N Engl J Med. 2016;375(6):511-522.',
  'Gilhus NE. Myasthenia gravis. N Engl J Med. 2016;375(26):2570-2581.',
  'Howard JF, Utsugisawa K, Benatar M, et al. Safety and efficacy of eculizumab in anti-acetylcholine receptor antibody-positive refractory generalised myasthenia gravis (REGAIN). Lancet Neurol. 2017;16(12):976-986.',
  'Howard JF, Bril V, Vu T, et al. Safety, efficacy, and tolerability of efgartigimod in patients with generalised myasthenia gravis (ADAPT). Lancet Neurol. 2021;20(7):526-536.',
  'Wolfe GI, Herbelin L, Nations SP, et al. Myasthenia gravis activities of daily living profile. Neurology. 1999;52(7):1487-1489.',
  'Titulaer MJ, Lang B, Verschuuren JJ. Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol. 2011;10(12):1098-1107.',
  'Rabinstein AA, Wijdicks EFM. Warning signs of imminent respiratory failure in neurological patients. Semin Neurol. 2003;23(1):97-104.',
  'Sobel J. Botulism. Clin Infect Dis. 2005;41(8):1167-1173.',
  'Sheikh KA. Guillain-Barre syndrome. Continuum (Minneap Minn). 2020;26(5):1184-1204.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Síndrome de Guillain-Barré',
      tituloB: 'Miastenia gravis',
      compensada: 'Debilidad simétrica que suele empezar en las piernas y ASCIENDE, con ARREFLEXIA precoz. Parestesias distales y, muy a menudo, DOLOR de espalda o radicular intenso que puede preceder a la debilidad y que hace pensar en una lumbalgia o en una compresión medular. Antecedente de diarrea o de infección respiratoria 1 a 3 semanas antes en dos tercios de los casos. Puede haber afectación de pares craneales, sobre todo diplejia facial. Variantes: síndrome de Miller Fisher (oftalmoplejia, ataxia y arreflexia), variante faringo-cervico-braquial y encefalitis de Bickerstaff.',
      descompensada: 'FATIGABILIDAD: la debilidad empeora con el uso repetido y a lo largo del dia, y mejora con el reposo. En la mayoría empieza con síntomas OCULARES (ptosis y diplopía) y una parte importante generaliza en los dos primeros años. Debilidad bulbar con disartria, voz nasal, disfagia y regurgitación nasal de líquidos. Debilidad proximal de extremidades y de la musculatura cervical, con dificultad para levantar la cabeza de la almohada. REFLEJOS NORMALES y SIN alteración sensitiva, que es lo que la separa del Guillain-Barré. El subtipo con anticuerpos frente a MuSK tiene predominio bulbar, facial y cervical, con atrofia lingual y peor respuesta a los anticolinesterasicos.'
    },
    laboratorio: [
      { prueba: 'Líquido cefalorraquídeo', utilidad: 'En el Guillain-Barré busca DISOCIACIÓN ALBUMINOCITOLOGICA: proteínas elevadas con celularidad normal. Dos advertencias prácticas: puede ser NORMAL en la primera semana en una proporción importante de pacientes, de modo que no descarta; y una pleocitosis de más de 50 células obliga a replantear el diagnóstico hacia VIH, Lyme, linfoma o sarcoidosis.' },
      { prueba: 'Anticuerpos frente al receptor de acetilcolina', utilidad: 'Positivos en la gran mayoría de las miastenias generalizadas y en algo más de la mitad de las formas puramente oculares. Son muy específicos, de modo que un resultado positivo en un cuadro compatible prácticamente cierra el diagnóstico. Su título NO se correlaciona con la gravedad ni sirve para seguir la respuesta al tratamiento.' },
      { prueba: 'Anticuerpos frente a MuSK', utilidad: 'Se piden cuando los anteriores son negativos. Definen un subtipo con perfil propio: predominio bulbar, facial y cervical, atrofia lingual, peor respuesta a la piridostigmina y buena respuesta al rituximab, que en este grupo se considera de elección en la enfermedad refractaria.' },
      { prueba: 'Anticuerpos frente al canal de calcio dependiente de voltaje', utilidad: 'En la sospecha de síndrome de Lambert-Eaton. Su positividad obliga a un cribado tumoral dirigido a carcinoma MICROCITICO de pulmón, que se asocia en más de la mitad de los casos y que puede aparecer meses o años DESPUÉS del cuadro neurológico, por lo que el cribado se repite.' },
      { prueba: 'Anticuerpos antigangliosido', utilidad: 'El anti-GQ1b es muy característico del síndrome de Miller Fisher y de la encefalitis de Bickerstaff. Los anti-GM1 y anti-GD1a se asocian a las formas axonales y a la infección previa por Campylobacter jejuni. No son necesarios para el diagnóstico en la forma típica.' },
      { prueba: 'Analítica general y estudio de la infección previa', utilidad: 'Hemograma, bioquímica, función renal y hepática, y función TIROIDEA, porque la enfermedad tiroidea autoinmune se asocia a la miastenia. Serología de VIH en todo Guillain-Barré. Coprocultivo y serologías según el antecedente infeccioso.' },
      { prueba: 'Cribado antes de iniciar inmunosupresión', utilidad: 'Antes de azatioprina, micofenolato o rituximab: hemograma, función hepática, serologías de hepatitis B y C y de VIH, cribado de tuberculosis latente y actualización del calendario vacunal. La determinación de la actividad de tiopurina metiltransferasa antes de la azatioprina evita toxicidad hematológica grave.' },
      { prueba: 'Toxina botulínica en suero, heces o alimento', utilidad: 'Ante sospecha de botulismo. Es una prueba lenta y su resultado NO debe retrasar la administración de la antitoxina, cuya eficacia depende de la precocidad. Además hay que notificar el caso a salud publica de forma inmediata.' }
    ],
    no_invasivos: [
      { metodo: 'Escala EGRIS de riesgo respiratorio (calculadora disponible)', interpretacion: 'Predice la necesidad de ventilación mecánica en el síndrome de Guillain-Barré a partir de tres variables sencillas disponibles al ingreso: rapidez de instauración, afectación facial o bulbar y suma de fuerza según la escala del Medical Research Council.', cutoff: '0 a 2 riesgo bajo; 3 a 4 intermedio; 5 a 7 riesgo ALTO de necesitar ventilación' },
      { metodo: 'Regla de 20, 30 y 40 (calculadora disponible)', interpretacion: 'Umbrales de función respiratoria a pie de cama en la debilidad neuromuscular. La gasometría llega tarde, porque la hipercapnia aparece cuando el paciente ya esta agotado.', cutoff: 'Capacidad vital menor de 20 mL/kg, presión inspiratoria máxima menor de 30 o espiratoria menor de 40 cmH2O' },
      { metodo: 'Escala MG-ADL (calculadora disponible)', interpretacion: 'Ocho ítems referidos por el paciente sobre su vida diaria, de 0 a 3 puntos cada uno. Mide el impacto real de la miastenia y sirve para seguir la respuesta al tratamiento.', cutoff: 'De 0 a 24 puntos. Un cambio de 2 puntos o más se considera clínicamente relevante' },
      { metodo: 'Crisis miastenica frente a colinérgica (calculadora disponible)', interpretacion: 'Separa el empeoramiento por progresión de la enfermedad del producido por exceso de anticolinesterasico, que hoy es raro. Los síntomas muscarínicos y la miosis son la clave.', cutoff: 'Ante la duda, suspender la piridostigmina y observar, que además es lo que se hace durante la ventilación' },
      { metodo: 'Capacidad vital seriada a pie de cama', interpretacion: 'Es la medida más útil del seguimiento. Se hace cada 4 a 6 horas en la fase de progresión, y su TENDENCIA importa más que un valor aislado: una caída rápida obliga a actuar aunque el valor absoluto todavía sea aceptable.', cutoff: 'Descenso progresivo o caída por debajo de 20 mL/kg: valorar ingreso en unidad de críticos' },
      { metodo: 'Signos clínicos de claudicación respiratoria', interpretacion: 'Valen tanto como los numeros y están siempre disponibles: incapacidad para contar hasta 20 de corrido en una espiración, habla entrecortada, uso de musculatura accesoria, respiración paradójica, incapacidad para levantar la cabeza de la almohada y sudoración.', cutoff: 'La DEBILIDAD BULBAR con incapacidad para manejar la propia saliva indica intubación aunque los numeros no lo hagan' },
      { metodo: 'Prueba del hielo', interpretacion: 'Se aplica hielo sobre el párpado cerrado durante unos dos minutos. El frío enlentece la degradación de la acetilcolina y mejora la ptosis en la miastenia. Es sencilla, segura y con buen rendimiento para la ptosis.', cutoff: 'Mejoría evidente de la ptosis tras el frío: apoya el diagnóstico' },
      { metodo: 'Estimulación nerviosa repetitiva y fibra única', interpretacion: 'La estimulación repetitiva a baja frecuencia muestra DECREMENTO en la miastenia. En el síndrome de Lambert-Eaton hay lo contrario: INCREMENTO marcado tras ejercicio breve o estimulación de alta frecuencia. La fibra única es la técnica más sensible pero la menos específica.', cutoff: 'Decremento superior al 10% en la amplitud: apoya la miastenia' }
    ],
    imagen: [
      { modalidad: 'Tomografía de tórax', hallazgos: 'OBLIGADA en todo paciente con miastenia gravis para buscar TIMOMA, presente en una minoría pero con implicaciones quirúrgicas inmediatas. En el síndrome de Lambert-Eaton, la búsqueda se dirige al carcinoma microcitico de pulmón y se repite en el tiempo aunque la primera sea negativa.' },
      { modalidad: 'Resonancia de columna con contraste', hallazgos: 'En el Guillain-Barré puede mostrar realce de las raíces de la cola de caballo, que apoya el diagnóstico. Su papel principal, sin embargo, es DESCARTAR una compresión medular o un proceso medular que explique la debilidad, sobre todo cuando hay nivel sensitivo o disfunción de esfínteres.' },
      { modalidad: 'Tomografía por emision de positrones', hallazgos: 'En el síndrome de Lambert-Eaton con cribado convencional negativo, para buscar una neoplasia oculta. También en la miastenia con sospecha de timoma no concluyente en la tomografía.' },
      { modalidad: 'Radiografía de tórax y ecografía diafragmática', hallazgos: 'La radiografía detecta atelectasias y complicaciones. La ecografía del diafragma, cada vez más utilizada, permite valorar su excursión y su engrosamiento a pie de cama, lo que complementa la capacidad vital en el paciente que no colabora bien con la espirometría.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El primer eje de clasificación es la <strong>localización</strong>: nervio y raíz (síndrome de Guillain-Barré) o unión neuromuscular, y dentro de esta, posinaptica (miastenia) o presinaptica (Lambert-Eaton y botulismo). El segundo es el <strong>subtipo</strong>: en el Guillain-Barré, desmielinizante frente a axonal y las variantes regionales; en la miastenia, por anticuerpo (receptor de acetilcolina, MuSK, LRP4 o seronegativa) y por distribución (ocular o generalizada). Y el tercero, que es el que gobierna el manejo a pie de cama, es la <strong>gravedad respiratoria</strong>, que se sigue con la capacidad vital y no con la gasometría.`,
    escalas: [
      { nombre: 'Escala EGRIS de riesgo respiratorio (calculadora disponible)', componentes: 'Días entre el inicio de la debilidad y el ingreso, presencia de debilidad facial o bulbar al ingreso, y suma de fuerza según la escala del Medical Research Council en seis grupos musculares bilaterales.', formula: 'Instauración rápida, afectación bulbar y menor puntuación de fuerza suman puntos, hasta un máximo de 7.', interpretacion: 'De 0 a 2, riesgo bajo de ventilación mecánica. De 3 a 4, intermedio. De 5 a 7, riesgo ALTO, lo que justifica ingreso en un área con capacidad de intubación inmediata. Es una herramienta de predicción al ingreso y NO sustituye a la vigilancia respiratoria seriada.' },
      { nombre: 'Regla de 20, 30 y 40 (calculadora disponible)', componentes: 'Capacidad vital en mL/kg, presión inspiratoria máxima y presión espiratoria máxima, medidas a pie de cama.', formula: 'Capacidad vital menor de 20 mL/kg, presión inspiratoria máxima con valor absoluto menor de 30 cmH2O o presión espiratoria máxima menor de 40 cmH2O.', interpretacion: 'Cumplir cualquiera de los tres criterios indica riesgo alto de claudicación e ingreso en unidad de críticos. La TENDENCIA importa más que el valor aislado, y la debilidad bulbar con incapacidad para manejar la saliva adelanta la decisión aunque los numeros no la cumplan.' },
      { nombre: 'Escala MG-ADL (calculadora disponible)', componentes: 'Ocho ítems referidos por el paciente: habla, masticación, deglución, respiración, higiene personal, levantarse de una silla, diplopía y ptosis.', formula: 'Cada ítem de 0 (normal) a 3 (grave). Total de 0 a 24 puntos.', interpretacion: 'Mide el impacto de la enfermedad sobre la vida diaria y es la escala más usada para seguir la respuesta al tratamiento. Un cambio de 2 puntos o más se considera clínicamente relevante. Notar que el título de anticuerpos NO sirve para este fin.' },
      { nombre: 'Clasificación de la Fundacion Americana de Miastenia Gravis', componentes: 'Distribución y gravedad de la debilidad.', formula: 'Clase I: solo ocular. Clase II: debilidad leve generalizada. Clase III: moderada. Clase IV: grave. Clase V: necesidad de intubación. Las clases II a IV se subdividen en A (predominio de extremidades y axial) y B (predominio bulbar y respiratorio).', interpretacion: 'Ordena la gravedad y permite comparar pacientes. La distinción entre subtipo A y B tiene valor practico, porque el predominio bulbar y respiratorio marca el riesgo real de crisis.' },
      { nombre: 'Subtipos del síndrome de Guillain-Barré', componentes: 'Hallazgos del electroneurograma y distribución clínica.', formula: 'Forma desmielinizante aguda, formas axonales motora y sensitivomotora, y variantes regionales como el síndrome de Miller Fisher y la variante faringo-cervico-braquial.', interpretacion: 'La forma desmielinizante es la más frecuente en Europa y America del Norte, y las axonales predominan en Asia y se asocian a Campylobacter jejuni y a peor recuperación. El síndrome de Miller Fisher (oftalmoplejia, ataxia y arreflexia) se asocia al anticuerpo anti-GQ1b y tiene buen pronóstico.' },
      { nombre: 'Criterios de crisis miastenica frente a colinérgica (calculadora disponible)', componentes: 'Síntomas muscarínicos, tamaño pupilar, frecuencia cardiaca, fasciculaciones y dosis de anticolinesterasico.', formula: 'La crisis colinérgica añade diarrea, cólicos, sudoración, lagrimeo, sialorrea, broncorrea, MIOSIS, bradicardia y fasciculaciones.', interpretacion: 'La crisis colinérgica es hoy rara porque las dosis usadas son menores que hace décadas. Ante la duda, la conducta es suspender la piridostigmina y observar: si mejora era colinérgica, y si empeora era miastenica, y en ambos casos el soporte respiratorio es la prioridad.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Síndrome de Guillain-Barré: diagnóstico',
      color: '#8c3a5c',
      definicion: 'Poliradiculoneuropatia aguda de mecanismo inmunitario, caracterizada por debilidad simétrica progresiva con arreflexia que alcanza su máximo en menos de cuatro semanas.',
      fisiopatologia: 'Una infección previa desencadena una respuesta inmunitaria contra antígenos del microorganismo que reaccionan de forma cruzada con componentes del nervio periférico, un fenómeno de MIMETISMO MOLECULAR bien documentado con los lipooligosacaridos de <em>Campylobacter jejuni</em> y los gangliosidos del axolema. Según la diana, el resultado es desmielinización segmentaria (forma desmielinizante, la más frecuente en Occidente) o daño axonal directo (formas axonales, más frecuentes en Asia y de peor recuperación). La afectación de raíces explica que la debilidad sea proximal y distal a la vez y que el dolor radicular sea tan frecuente.',
      epidemiologia: 'Es la causa más frecuente de parálisis flácida aguda desde la práctica erradicación de la poliomielitis. Dos tercios de los pacientes refieren una infección en las 1 a 3 semanas previas. El agente identificado con más frecuencia es <em>Campylobacter jejuni</em>, seguido de citomegalovirus, virus de Epstein-Barr, <em>Mycoplasma pneumoniae</em>, virus de la hepatitis E, Zika y SARS-CoV-2.',
      factores_riesgo: ['Infección por Campylobacter jejuni, sobre todo tras diarrea', 'Infección por citomegalovirus o por virus de Epstein-Barr', 'Infección por Mycoplasma pneumoniae', 'Infección por virus de la hepatitis E', 'Infección por virus Zika', 'Infección por SARS-CoV-2', 'Cirugía reciente', 'Linfoma y otras neoplasias hematológicas', 'Inhibidores del punto de control inmunitario', 'Edad avanzada, que se asocia a peor recuperación', 'Sexo masculino', 'Trasplante de órgano o de progenitores hematopoyéticos'],
      clinica: 'Debilidad simétrica que suele empezar en las piernas y asciende, con ARREFLEXIA precoz. DOLOR de espalda o radicular intenso, muy frecuente, que a menudo precede a la debilidad y hace pensar en una lumbalgia. Parestesias distales. Afectación de pares craneales, sobre todo diplejia facial. Disautonomía en una proporción importante.',
      criterios_dx: 'CLÍNICOS: debilidad progresiva simétrica de más de un miembro con arreflexia o hiporreflexia, con progresión de menos de 4 semanas. El líquido cefalorraquídeo y el electroneurograma apoyan pero pueden ser NORMALES en los primeros días. Ver la Figura 2 de Definición.',
      laboratorio: 'Líquido cefalorraquídeo buscando disociación albuminocitologica, sabiendo que puede ser normal en la primera semana. Serología de VIH en todos. Anticuerpos antigangliosido en las variantes. Analítica general con función renal, hepática e iones.',
      imagen: 'RESONANCIA DE COLUMNA con contraste, sobre todo para descartar una compresión medular u otro proceso medular. Puede mostrar realce de las raíces de la cola de caballo, que apoya el diagnóstico.',
      complementarios: 'ELECTRONEUROGRAMA Y ELECTROMIOGRAMA, que definen el subtipo y apoyan el diagnóstico, aunque pueden ser normales en los primeros días. Repetirlos en una o dos semanas si el primero no es concluyente y persiste la duda.',
      dx_diferencial: 'Compresión medular y mielitis transversa (que añaden NIVEL SENSITIVO y afectación de esfínteres precoz), miastenia gravis, botulismo, poliomielitis y otras infecciones por enterovirus, porfiria aguda intermitente, parálisis por hipopotasemia, neuropatía del enfermo crítico, intoxicación por metales pesados o por organofosforados, vasculitis y parálisis por garrapata.',
      tx_medico: 'INGRESO en todos los casos con debilidad progresiva, incluso si el paciente camina, porque la progresión puede ser rápida e impredecible. Monitorización cardiaca por la disautonomía. Vigilancia respiratoria seriada. Profilaxis de enfermedad tromboembólica, prevención de úlceras por presión y de retracciones, y manejo del DOLOR, que se infratrata de forma sistemática.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. La regla que hay que retener del diagnóstico es que la sospecha basta para ingresar y vigilar, sin esperar a que las pruebas la confirmen.',
      tx_intervencionista: 'No aplica en la fase diagnóstica.',
      criterios_uci: 'Capacidad vital en descenso o por debajo del umbral, debilidad bulbar con incapacidad para manejar la saliva, disautonomía significativa con arritmias o labilidad tensional, y progresión rápida de la debilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Exploración neurológica y capacidad vital cada 4 a 6 horas durante la fase de progresión. Monitorización electrocardiográfica continua. Vigilancia del íleo y de la retención urinaria, que son manifestaciones disautonomicas frecuentes y que se pasan por alto.',
      seguimiento_ambulatorio: 'Rehabilitación prolongada. Vigilancia de la FATIGA residual y del dolor neuropático, que son las secuelas más frecuentes y las que más afectan a la calidad de vida a largo plazo.',
      pronostico: 'La mayoría de los pacientes recupera la marcha independiente, pero la recuperación es lenta, con frecuencia incompleta y con secuelas de fatiga y dolor muy comunes. Los factores de peor pronóstico son la edad avanzada, la instauración rápida, la debilidad grave al nadir, la forma axonal y el antecedente de diarrea.',
      algoritmo: ['Sospecharlo ante debilidad simétrica ascendente con ARREFLEXIA', 'Preguntar por infección en las 1 a 3 semanas previas', 'Explorar buscando nivel sensitivo, que apuntaria a la medula', 'INGRESAR aunque el paciente camine: la progresión es impredecible', 'Iniciar vigilancia respiratoria seriada y monitorización cardiaca', 'Analizar el líquido cefalorraquídeo, sabiendo que puede ser normal', 'Pedir electroneurograma, sabiendo que también puede serlo', 'Hacer resonancia de columna para descartar compresión medular', 'Pedir serología de VIH a todos', 'No retrasar el tratamiento esperando la confirmación de las pruebas']
    },
    {
      nombre: 'Guillain-Barré: tratamiento y vigilancia respiratoria',
      color: '#8c3a34',
      definicion: 'Manejo del síndrome de Guillain-Barré, cuyos dos pilares son la inmunoterapia y, sobre todo, la vigilancia de la función respiratoria y de la disautonomía.',
      fisiopatologia: 'Las inmunoglobulinas intravenosas actuan por varios mecanismos: bloqueo de receptores Fc, neutralizacion de autoanticuerpos por anticuerpos antiidiotipo, inhibición del complemento y modulacion de la respuesta celular. La plasmaféresis elimina de forma directa autoanticuerpos y factores del complemento circulantes. Las dos actuan sobre el mismo proceso por vías distintas, y ese es el motivo por el que combinarlas no añade beneficio. Los corticoides, que si funcionan en la forma crónica, no han demostrado eficacia en la forma aguda, posiblemente por el papel dominante de la lesión ya establecida.',
      epidemiologia: 'Una proporción apreciable de los pacientes requiere ventilación mecánica, y ese es el desenlace que la escala EGRIS trata de anticipar al ingreso. La mortalidad no es despreciable y se concentra en las complicaciones respiratorias, la disautonomía y las infecciones nosocomiales.',
      factores_riesgo: ['Progresión rápida desde el inicio de los síntomas', 'Debilidad facial o bulbar al ingreso', 'Puntuación baja en la escala de fuerza del Medical Research Council', 'Incapacidad para levantar la cabeza de la almohada', 'Capacidad vital en descenso', 'Disautonomía significativa', 'Edad avanzada', 'Comorbilidad respiratoria previa', 'Forma axonal', 'Fluctuación relacionada con el tratamiento'],
      clinica: 'La respuesta esperable es la estabilización de la progresión en días y una mejoría lenta posterior. Hay que conocer dos fenómenos: la FLUCTUACIÓN RELACIONADA CON EL TRATAMIENTO, en la que el paciente mejora y después empeora en las semanas siguientes y puede requerir un segundo ciclo, y la evolución hacia una forma crónica si la progresión se prolonga más de 8 semanas.',
      criterios_dx: 'No aplica: es la fase terapéutica. Lo que decide el manejo es la función respiratoria y la presencia de disautonomía. Ver la Figura 4 de Definición.',
      laboratorio: 'Antes de las inmunoglobulinas: función renal, inmunoglobulina A (por el riesgo de reacción en el déficit selectivo) y valoración del riesgo trombótico. Durante el tratamiento: función renal, hemograma e iones. En la plasmaféresis, coagulación, calcio y control del acceso vascular.',
      imagen: 'Radiografía de tórax para vigilar atelectasias y complicaciones infecciosas. Ecografía diafragmática como complemento en el paciente que colabora mal con la espirometría.',
      complementarios: 'CAPACIDAD VITAL Y PRESIONES MÁXIMAS cada 4 a 6 horas en la fase de progresión, valorando la TENDENCIA más que el valor aislado. Monitorización electrocardiográfica continua. Deglución valorada antes de iniciar dieta oral.',
      dx_diferencial: 'Ante un deterioro durante el tratamiento: fluctuación relacionada con el tratamiento, infección nosocomial, embolia pulmonar, atelectasia, disautonomía y evolución a forma crónica.',
      tx_medico: 'PREVENCIÓN DE COMPLICACIONES, que es donde se gana o se pierde: profilaxis de enfermedad tromboembólica, movilización y fisioterapia respiratoria precoz, prevención de úlceras y de retracciones, cuidado ocular si hay debilidad facial, soporte nutricional y apoyo psicológico, porque el paciente puede estar consciente y completamente paralizado, lo que genera una angustia enorme.',
      tx_farmacologico: 'INMUNOGLOBULINAS INTRAVENOSAS o PLASMAFÉRESIS, con eficacia equivalente; se elige por disponibilidad, acceso vascular y comorbilidad. <strong>NO se combinan.</strong> <strong style="color:#8c3a34;">Los CORTICOIDES NO son eficaces</strong> y no forman parte del tratamiento. Analgesia para el dolor neuropático con gabapentinoides, evitando en lo posible los opioides por el íleo disautonomico. Precaución extrema con fármacos bradicardizantes.',
      tx_intervencionista: 'Intubación y ventilación mecánica cuando se cumplen los criterios. Traqueostomía si la ventilación se prolonga. Marcapasos transitorio en la bradiarritmia disautonomica grave, que es una situación poco frecuente pero potencialmente mortal.',
      criterios_uci: 'Capacidad vital menor de 20 mL/kg o en descenso rápido, presión inspiratoria máxima menor de 30 o espiratoria menor de 40 cmH2O, debilidad bulbar con riesgo de aspiración, disautonomía con arritmias o inestabilidad, y progresión rápida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La vigilancia respiratoria no se suspende porque el paciente parezca estable: el deterioro puede ser rápido. Evitar las maniobras vagales y los fármacos bradicardizantes sin monitorización. Vigilar el íleo y la retención urinaria. Y no usar succinilcolina si hay que intubar, por el riesgo de hiperpotasemia grave.',
      seguimiento_ambulatorio: 'Rehabilitación prolongada e individualizada. Seguimiento de la fatiga y del dolor residuales. Reevaluar si el cuadro fluctua o progresa más allá de 8 semanas, porque entonces se comporta como una forma crónica y el tratamiento cambia, incluidos los corticoides, que alli si son eficaces.',
      pronostico: 'La mayoría recupera la marcha independiente, pero la recuperación se mide en meses y las secuelas de fatiga y dolor son frecuentes. La calidad de los cuidados de soporte pesa tanto como la inmunoterapia en el desenlace final.',
      algoritmo: ['Calcular el riesgo respiratorio al ingreso con la escala EGRIS', 'Medir capacidad vital y presiones máximas cada 4 a 6 horas', 'Valorar la TENDENCIA, no solo el valor aislado', 'Intubar si se cumple la regla de 20, 30 y 40, sin esperar a la gasometría', 'Intubar antes si hay debilidad bulbar y no maneja la saliva', 'Iniciar inmunoglobulinas O plasmaféresis, nunca las dos', 'NO dar corticoides', 'Monitorizar el electrocardiograma por la disautonomía', 'Poner profilaxis tromboembólica y tratar el DOLOR', 'Ante deterioro tras mejorar, pensar en fluctuación relacionada con el tratamiento']
    },
    {
      nombre: 'Miastenia gravis: diagnóstico',
      color: '#3d5a73',
      definicion: 'Enfermedad autoinmune de la unión neuromuscular en la que autoanticuerpos dirigidos contra el receptor de acetilcolina o contra proteínas asociadas producen debilidad fluctuante y fatigable de la musculatura esquelética.',
      fisiopatologia: 'Los anticuerpos frente al receptor de acetilcolina actuan por tres vías: bloquean el receptor, aceleran su internalización y degradación, y activan el complemento con destrucción de la membrana posinaptica y pérdida de sus pliegues. El resultado es un margen de seguridad reducido en la transmisión: con el uso repetido, la cantidad de acetilcolina liberada disminuye de forma fisiológica y ya no basta para generar potencial de acción, lo que explica la FATIGABILIDAD. Los anticuerpos frente a MuSK, en cambio, alteran el agrupamiento de los receptores sin activar el complemento de la misma manera, lo que explica su perfil clínico distinto y su peor respuesta a los anticolinesterasicos.',
      epidemiologia: 'Tiene una distribución bimodal: mujeres jóvenes en la segunda y tercera décadas, y varones mayores a partir de la sexta. La mayoría debuta con síntomas oculares y una proporción importante generaliza en los dos primeros años. Se asocia a otras enfermedades autoinmunes, sobre todo tiroideas.',
      factores_riesgo: ['Sexo femenino en la forma de inicio precoz', 'Sexo masculino y edad avanzada en la de inicio tardío', 'TIMOMA', 'Hiperplasia timica', 'Enfermedad tiroidea autoinmune asociada', 'Otras enfermedades autoinmunes: artritis reumatoide, lupus', 'Antecedente familiar de enfermedad autoinmune', 'Tratamiento con penicilamina', 'Tratamiento con inhibidores del punto de control inmunitario', 'Determinados alelos del sistema mayor de histocompatibilidad'],
      clinica: 'FATIGABILIDAD como sello: la debilidad empeora con el uso y a lo largo del dia y mejora con el reposo. La mayoría empieza con PTOSIS y DIPLOPÍA. Después, debilidad bulbar (disartria, voz nasal, disfagia, regurgitación nasal de líquidos), debilidad proximal de extremidades y debilidad cervical con dificultad para levantar la cabeza. REFLEJOS NORMALES y SIN alteración sensitiva. Las pupilas NUNCA se afectan, lo que la separa del botulismo.',
      criterios_dx: 'Clínica compatible más confirmación con ANTICUERPOS o, si son negativos, con neurofisiologia. La prueba del hielo es un apoyo sencillo para la ptosis. Ver la Figura 3 de Definición.',
      laboratorio: 'ANTICUERPOS frente al receptor de acetilcolina primero. Si son negativos, anticuerpos frente a MuSK y, si están disponibles, frente a LRP4. Función tiroidea y cribado de otras enfermedades autoinmunes.',
      imagen: 'TOMOGRAFÍA DE TÓRAX A TODOS, sin excepción, para buscar timoma. Es una de las peticiones que más se olvida y tiene consecuencias quirúrgicas inmediatas.',
      complementarios: 'ESTIMULACIÓN NERVIOSA REPETITIVA buscando decremento superior al 10%. ELECTROMIOGRAMA DE FIBRA ÚNICA, que es la técnica más sensible pero la menos específica. PRUEBA DEL HIELO sobre el párpado durante unos dos minutos, que es sencilla, segura y útil para la ptosis. La prueba con edrofonio ha caído en desuso por sus riesgos.',
      dx_diferencial: 'Síndrome de Lambert-Eaton (que tiene arreflexia y FACILITACION), botulismo (con pupilas midriáticas), oftalmoplejia externa progresiva crónica y otras miopatías mitocondriales, oftalmopatia tiroidea, lesiones del tronco encefálico, síndrome de Miller Fisher, y la miopatía inducida por inhibidores del punto de control inmunitario, que puede solaparse con una miastenia y con una miocarditis.',
      tx_medico: 'Información sobre los DESENCADENANTES: infecciones, calor, estrés, cirugía y fármacos. Entrega al paciente de una lista escrita de fármacos que debe evitar y de una tarjeta identificativa, que es una medida sencilla y muy útil cuando acude a otro centro.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. Lo que importa desde el diagnóstico es comprobar la lista de fármacos antes de prescribir cualquier cosa.',
      tx_intervencionista: 'Timectomia según los hallazgos de la tomografía y el perfil del paciente.',
      criterios_uci: 'Crisis miastenica con insuficiencia respiratoria o debilidad bulbar grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Marcar en la historia y de forma visible la lista de fármacos contraindicados. Ante cualquier prescripcion nueva, comprobarla. Vigilar la deglución y la función respiratoria en cualquier ingreso, incluso si el motivo es otro.',
      seguimiento_ambulatorio: 'Seguimiento con escalas funcionales, no con el título de anticuerpos, que no se correlaciona con la gravedad. Vigilancia de la generalización en la forma ocular durante los dos primeros años, que es cuando ocurre la mayoría.',
      pronostico: 'Con tratamiento adecuado, la mayoría alcanza una situación funcional buena y una esperanza de vida prácticamente normal. Lo que más condiciona el pronóstico es la prevención de las crisis, y buena parte de ellas son evitables porque las desencadenan una infección no tratada o un fármaco mal elegido.',
      algoritmo: ['Buscar FATIGABILIDAD: empeora con el uso y con el paso del dia', 'Comprobar que los reflejos son normales y no hay alteración sensitiva', 'Explorar ptosis, diplopía, voz nasal y fuerza cervical', 'Hacer la prueba del hielo si hay ptosis', 'Pedir anticuerpos frente al receptor de acetilcolina', 'Si son negativos, pedir anti-MuSK y valorar anti-LRP4', 'Si los anticuerpos son negativos, pedir estimulación repetitiva y fibra única', 'Pedir TOMOGRAFÍA DE TÓRAX a todos para buscar timoma', 'Pedir función tiroidea y cribar otras enfermedades autoinmunes', 'Entregar al paciente la lista escrita de fármacos que debe evitar']
    },
    {
      nombre: 'Miastenia gravis: tratamiento',
      color: '#3f6b52',
      definicion: 'Estrategia terapéutica escalonada que combina tratamiento sintomático, inmunosupresión, timectomia cuando esta indicada y terapias dirigidas en la enfermedad refractaria.',
      fisiopatologia: 'La piridostigmina inhibe la acetilcolinesterasa y prolonga la permanencia de la acetilcolina en la hendidura sinaptica, lo que compensa en parte la reducción del margen de seguridad; es puramente sintomática y no modifica la enfermedad. Los corticoides y los ahorradores actuan sobre la producción de autoanticuerpos, con un retardo de meses en el caso de los ahorradores. El rituximab depleciona linfocitos B. Los inhibidores del complemento bloquean la via final que destruye la membrana posinaptica, y los bloqueantes del receptor Fc neonatal aceleran la degradación de la inmunoglobulina G circulante, incluidos los autoanticuerpos.',
      epidemiologia: 'La mayoría de los pacientes alcanza un control aceptable con corticoide y un ahorrador. Una minoría queda como refractaria y es el grupo en el que se han incorporado los tratamientos dirigidos de los últimos años.',
      factores_riesgo: ['Anticuerpos frente a MuSK, con peor respuesta a la piridostigmina', 'Timoma asociado', 'Inicio tardío', 'Predominio bulbar y respiratorio', 'Crisis previa', 'Comorbilidad que limita el uso de corticoides', 'Mala adherencia', 'Infecciones de repetición', 'Retirada rápida de la inmunosupresión', 'Prescripcion de fármacos contraindicados'],
      clinica: 'El objetivo del tratamiento no es normalizar los anticuerpos sino que el paciente este asintomático o con síntomas mínimos y sin efectos adversos limitantes. La respuesta se sigue con escalas funcionales.',
      criterios_dx: 'No aplica: es la fase terapéutica. Ver la Figura 3 de Definición.',
      laboratorio: 'Antes de la inmunosupresión: hemograma, función hepática, serologías de hepatitis B y C y de VIH, cribado de tuberculosis latente y actividad de tiopurina metiltransferasa antes de la azatioprina. Durante el tratamiento, controles periódicos según el fármaco. Con corticoide, glucemia, presión arterial, densidad ósea y profilaxis ósea.',
      imagen: 'Tomografía de tórax basal. Control tras la timectomia si había timoma.',
      complementarios: 'Escala funcional en cada revisión para medir la respuesta. Vacunación actualizada ANTES de iniciar la inmunosupresión, y vacunas inactivadas durante ella. Con inhibidores del complemento, vacunación antimeningocócica obligada, porque aumentan de forma marcada el riesgo de infección meningocócica.',
      dx_diferencial: 'Ante falta de respuesta: mala adherencia, dosis insuficiente, fármaco desencadenante no identificado, infección intercurrente, diagnóstico erróneo y coexistencia de otra enfermedad neuromuscular.',
      tx_medico: 'Educación sobre desencadenantes. Evitar el calor extremo y el sobreesfuerzo. Planificación de la cirugía y del embarazo con el equipo. Rehabilitación adaptada, sin llegar a la fatiga.',
      tx_farmacologico: 'PIRIDOSTIGMINA sintomática, ajustando dosis según síntomas. CORTICOIDE, empezando a dosis BAJA y subiendo despacio, porque el inicio a dosis alta puede producir un empeoramiento transitorio grave en las primeras semanas. AHORRADORES: azatioprina, micofenolato o tacrolimus, que tardan meses en actuar y permiten bajar el corticoide. REFRACTARIA: rituximab, de elección si los anticuerpos son frente a MuSK; inhibidores del complemento y bloqueantes del receptor Fc neonatal en la forma con anticuerpos frente al receptor de acetilcolina.',
      tx_intervencionista: 'TIMECTOMIA: indicada siempre si hay TIMOMA, por el propio tumor. Y en la miastenia generalizada con anticuerpos frente al receptor de acetilcolina y de inicio precoz sin timoma, un ensayo aleatorizado demostró que mejora los resultados clínicos y reduce la necesidad de corticoide. No esta indicada en la forma puramente ocular ni en la asociada a MuSK.',
      criterios_uci: 'Crisis miastenica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante una cirugía programada, planificarla con el equipo: optimizar el tratamiento antes, evitar bloqueantes neuromusculares de acción prolongada, y prever vigilancia respiratoria posoperatoria prolongada. Es una situación de riesgo alto de crisis.',
      seguimiento_ambulatorio: 'Revisión con escala funcional. Retirada MUY lenta del corticoide, porque la reducción rápida es un desencadenante clásico de crisis. Vigilancia de la toxicidad del inmunosupresor y del riesgo infeccioso.',
      pronostico: 'Bueno con tratamiento adecuado. La mortalidad ha caído de forma drastica en las últimas décadas gracias al soporte ventilatorio y a la inmunoterapia, y hoy la mayoría de los pacientes lleva una vida normal o casi normal.',
      algoritmo: ['Iniciar piridostigmina como tratamiento sintomático', 'Añadir corticoide empezando a dosis BAJA y subiendo despacio', 'Prever el empeoramiento transitorio de las primeras semanas', 'Añadir un ahorrador, sabiendo que tarda meses en actuar', 'Hacer el cribado infeccioso y vacunar ANTES de inmunosuprimir', 'Valorar timectomia: siempre si hay timoma', 'Valorar timectomia también en la generalizada precoz sin timoma', 'En la refractaria, rituximab si los anticuerpos son anti-MuSK', 'Valorar inhibidor del complemento o anti-FcRn en la anti-receptor', 'Bajar el corticoide MUY despacio y seguir con escalas funcionales']
    },
    {
      nombre: 'Crisis miastenica y crisis colinérgica',
      color: '#8a6a1f',
      definicion: 'Empeoramiento agudo de la miastenia que produce insuficiencia respiratoria o debilidad bulbar grave con necesidad de soporte ventilatorio (crisis miastenica), frente al cuadro producido por exceso de anticolinesterasico (crisis colinérgica), hoy raro.',
      fisiopatologia: 'En la crisis miastenica, un desencadenante (con más frecuencia una infección) amplifica el déficit de transmisión hasta comprometer el diafragma y la musculatura bulbar. La debilidad bulbar y la respiratoria se potencian: el paciente no maneja secreciones, aspira, y la neumonía agrava a su vez la debilidad. En la crisis colinérgica, el exceso de acetilcolina produce despolarización mantenida de la placa motora, que paradójicamente bloquea la transmisión, y añade los efectos muscarínicos del exceso colinérgico en el resto del organismo.',
      epidemiologia: 'Una parte apreciable de los pacientes con miastenia sufre al menos una crisis, con más frecuencia en los primeros años de la enfermedad. La causa desencadenante más frecuente es la INFECCIÓN, y una proporción relevante de las crisis es evitable porque la desencadena un fármaco contraindicado.',
      factores_riesgo: ['INFECCIÓN intercurrente, sobre todo respiratoria', 'Cirugía, especialmente la timectomia y la cirugía mayor', 'Embarazo y parto', 'Inicio de corticoide a dosis alta', 'Retirada rápida de la inmunosupresión', 'FÁRMACOS: fluoroquinolonas, macrolidos, aminoglucósidos, betabloqueantes, magnesio intravenoso, bloqueantes neuromusculares', 'Contrastes yodados', 'Enfermedad predominantemente bulbar', 'Timoma', 'Anticuerpos frente a MuSK', 'Calor extremo', 'Mala adherencia al tratamiento'],
      clinica: 'CRISIS MIASTENICA: disnea progresiva, taquipnea, uso de musculatura accesoria, habla entrecortada, incapacidad para levantar la cabeza, disfagia con acumulo de secreciones y ansiedad. CRISIS COLINÉRGICA: añade síntomas MUSCARÍNICOS (diarrea, cólicos, sudoración, lagrimeo, sialorrea, broncorrea, incontinencia), MIOSIS, bradicardia y fasciculaciones.',
      criterios_dx: 'Clínico y funcional. La distinción entre ambas se apoya en los síntomas muscarínicos, las pupilas y la dosis de anticolinesterasico. Ante la duda, se suspende la piridostigmina y se observa. Ver la Figura 4 de Definición.',
      laboratorio: 'Estudio del desencadenante: hemograma, proteína C reactiva, cultivos, radiografía de tórax, sedimento y urocultivo. Gasometría, sabiendo que la hipercapnia es un signo TARDÍO y que no se debe esperar a ella para decidir.',
      imagen: 'Radiografía de tórax para buscar neumonía o atelectasia, que son a la vez desencadenante y consecuencia.',
      complementarios: 'CAPACIDAD VITAL Y PRESIONES MÁXIMAS seriadas, cada pocas horas. Valoración de la deglución antes de permitir la ingesta oral. Monitorización continua.',
      dx_diferencial: 'Neumonía, embolia pulmonar, insuficiencia cardiaca, crisis colinérgica, y una miopatía o polineuropatía del enfermo crítico en el paciente que lleva tiempo ingresado.',
      tx_medico: 'INGRESO EN UNIDAD DE CRÍTICOS y soporte ventilatorio precoz, sin esperar a la gasometría. Buscar y tratar el DESENCADENANTE, que es lo que más cambia la evolución. Retirar todo fármaco que pueda estar contribuyendo. Fisioterapia respiratoria y manejo de secreciones.',
      tx_farmacologico: 'INMUNOGLOBULINAS INTRAVENOSAS o PLASMAFÉRESIS, que son los tratamientos de acción rápida. Tratamiento antibiótico del desencadenante infeccioso, eligiendo con cuidado el antibiótico. Se suele SUSPENDER la piridostigmina durante la ventilación mecánica, porque aumenta las secreciones y ya no aporta beneficio con el paciente ventilado.',
      tx_intervencionista: 'Intubación y ventilación mecánica. Traqueostomía si se prolonga. Ventilación no invasiva en casos seleccionados y precoces, con vigilancia estrecha y sin retrasar la intubación si hay debilidad bulbar, porque el riesgo es la aspiración.',
      criterios_uci: 'Es por definición un cuadro de cuidados críticos: capacidad vital en descenso, cumplimiento de la regla de 20, 30 y 40, debilidad bulbar con incapacidad para manejar la saliva, o cualquier signo clínico de claudicación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Extubar solo con criterios de fuerza recuperados y no solo con criterios gasometricos, porque el fracaso de extubación es frecuente en estos pacientes. Reintroducir la piridostigmina de forma progresiva. Revisar toda la medicación antes del alta.',
      seguimiento_ambulatorio: 'Revisión precoz tras el alta. Identificar y documentar el desencadenante para prevenirlo. Reforzar la educación sobre fármacos y sobre la consulta precoz ante infecciones.',
      pronostico: 'La mortalidad de la crisis miastenica ha caído de forma notable con los cuidados críticos modernos. La recuperación es habitual, y lo que más influye en el desenlace es la precocidad del soporte ventilatorio y el control del desencadenante.',
      algoritmo: ['Reconocer la claudicación por la CLÍNICA, no por la gasometría', 'Medir capacidad vital y presiones máximas de inmediato', 'Aplicar la regla de 20, 30 y 40', 'Intubar antes si hay debilidad bulbar con secreciones', 'Ingresar en unidad de críticos', 'Buscar el DESENCADENANTE: infección, cirugía, fármaco nuevo', 'Retirar todo fármaco contraindicado', 'Iniciar inmunoglobulinas o plasmaféresis', 'Suspender la piridostigmina durante la ventilación', 'Ante la duda con la crisis colinérgica, suspender y observar']
    },
    {
      nombre: 'Lambert-Eaton, botulismo y el diferencial de la debilidad aguda',
      color: '#5a6b2e',
      definicion: 'Trastornos PRESINÁPTICOS de la unión neuromuscular que comparten síntomas con la miastenia pero se manejan de forma completamente distinta, junto con el resto del diferencial de la debilidad aguda generalizada.',
      fisiopatologia: 'En el síndrome de Lambert-Eaton, autoanticuerpos dirigidos contra los canales de calcio dependientes de voltaje de tipo P/Q en la terminal presinaptica reducen la entrada de calcio y con ella la liberación de acetilcolina. Como la contracción sostenida acumula calcio en la terminal, la fuerza y los reflejos MEJORAN tras el ejercicio: es el fenómeno de facilitacion, opuesto a lo que ocurre en la miastenia. En el botulismo, la toxina escinde las proteínas del complejo de fusión vesicular e impide de forma irreversible la liberación de acetilcolina, lo que afecta también a las sinapsis colinérgicas autónomas y explica las pupilas midriáticas, la boca seca y el estreñimiento.',
      epidemiologia: 'El síndrome de Lambert-Eaton es raro y se asocia a carcinoma microcitico de pulmón en más de la mitad de los casos, con frecuencia en fumadores mayores. El botulismo es muy raro pero exige reconocimiento inmediato: alimentario por conservas caseras, por heridas en usuarios de drogas por via parenteral, e iatrogénico por toxina botulínica.',
      factores_riesgo: ['Tabaquismo y carcinoma microcitico para el Lambert-Eaton', 'Otras enfermedades autoinmunes', 'Consumo de conservas caseras mal procesadas', 'Uso de drogas por via parenteral, sobre todo heroina negra', 'Inyección de toxina botulínica con fines estéticos o terapéuticos', 'Edad avanzada', 'Exposición ocupacional o alimentaria en brotes', 'Inmunosupresion', 'Antecedente de neoplasia', 'Consumo de miel en el lactante para el botulismo infantil'],
      clinica: 'LAMBERT-EATON: debilidad PROXIMAL de piernas, arreflexia, boca seca muy frecuente y precoz, y FACILITACION (la fuerza y los reflejos mejoran tras la contracción sostenida). BOTULISMO: parálisis DESCENDENTE simétrica que empieza por los pares craneales (diplopía, ptosis, disartria, disfagia), con PUPILAS MIDRIÁTICAS y arreactivas, boca seca, estreñimiento, SIN fiebre y SIN alteración sensitiva.',
      criterios_dx: 'LAMBERT-EATON: anticuerpos frente al canal de calcio y estudio neurofisiologico con INCREMENTO tras ejercicio breve. BOTULISMO: clínico, con confirmación por detección de toxina, que NO debe retrasar la antitoxina.',
      laboratorio: 'Anticuerpos frente al canal de calcio dependiente de voltaje. En el botulismo, detección de toxina en suero, heces o alimento sospechoso, y cultivo de la herida si procede.',
      imagen: 'TOMOGRAFÍA DE TÓRAX en el Lambert-Eaton buscando carcinoma microcitico, que se REPITE periódicamente aunque la primera sea negativa, porque el tumor puede aparecer después del cuadro neurológico. Tomografía por emision de positrones si el cribado convencional no lo encuentra.',
      complementarios: 'Estudio neurofisiologico con estimulación de alta frecuencia o tras ejercicio breve, que muestra INCREMENTO marcado en el Lambert-Eaton, al revés que el decremento de la miastenia. Notificación inmediata a salud publica en el botulismo.',
      dx_diferencial: 'El diferencial completo de la debilidad aguda generalizada: síndrome de Guillain-Barré, miastenia, compresión medular y mielitis, poliomielitis y enterovirus, porfiria aguda intermitente, parálisis periódica hipopotasemica, hipofosfatemia grave, neuropatía y miopatía del enfermo crítico, rabdomiólisis, intoxicación por organofosforados y parálisis por garrapata.',
      tx_medico: 'En el Lambert-Eaton, el tratamiento del TUMOR asociado suele mejorar el cuadro neurológico y es prioritario. En el botulismo, soporte respiratorio y cuidados intensivos, sabiendo que la recuperación es lenta porque exige regenerar terminales sinapticas.',
      tx_farmacologico: 'LAMBERT-EATON: amifampridina (3,4-diaminopiridina), que prolonga la despolarización presinaptica y aumenta la liberación de acetilcolina; piridostigmina como coadyuvante; e inmunoterapia en las formas no paraneoplásicas. BOTULISMO: ANTITOXINA lo antes posible, cuya eficacia depende de la precocidad porque solo neutraliza la toxina circulante y no la ya unida. Los aminoglucósidos están contraindicados porque agravan el bloqueo.',
      tx_intervencionista: 'Soporte ventilatorio prolongado en el botulismo. Tratamiento oncológico del tumor en el Lambert-Eaton paraneoplásico. Desbridamiento de la herida en el botulismo por herida.',
      criterios_uci: 'Insuficiencia respiratoria, que en el botulismo puede requerir ventilación durante semanas o meses.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el botulismo, notificación urgente a salud publica y búsqueda de otros casos expuestos a la misma fuente. Evitar aminoglucósidos y magnesio. En el Lambert-Eaton, coordinar el estudio oncológico sin demora.',
      seguimiento_ambulatorio: 'En el Lambert-Eaton, REPETIR el cribado tumoral de forma periódica durante al menos dos años aunque el inicial sea negativo. En el botulismo, rehabilitación prolongada.',
      pronostico: 'En el Lambert-Eaton depende sobre todo del tumor asociado. En el botulismo la mortalidad ha caído mucho con los cuidados intensivos, aunque la recuperación se mide en meses y exige ventilación prolongada en los casos graves.',
      algoritmo: ['Ante debilidad proximal con arreflexia y boca seca, pensar en Lambert-Eaton', 'Buscar FACILITACION: la fuerza mejora tras la contracción sostenida', 'Pedir anticuerpos frente al canal de calcio', 'Confirmar con estudio neurofisiologico buscando INCREMENTO', 'Hacer cribado tumoral dirigido a carcinoma microcitico y REPETIRLO', 'Ante parálisis DESCENDENTE con pupilas midriáticas, pensar en botulismo', 'Comprobar la ausencia de fiebre y de alteración sensitiva', 'Administrar la ANTITOXINA sin esperar la confirmación de laboratorio', 'Notificar el caso a salud publica y buscar otros expuestos', 'Evitar aminoglucósidos y magnesio, que agravan el bloqueo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En este tema los errores tienen consecuencias inmediatas: se manda a casa a un paciente con debilidad ascendente porque la punción lumbar salió normal, se espera a la gasometría para intubar, se dan corticoides en un Guillain-Barré, o se prescribe una fluoroquinolona a un miastenico. Lo que sigue es la lista que evita los cuatro.',
    parametros: ['No descartar un Guillain-Barré por un líquido o un electroneurograma normales al principio', 'INGRESAR a todo paciente con debilidad ascendente, aunque camine', 'Medir capacidad vital y presiones máximas cada 4 a 6 horas en la fase de progresión', 'Valorar la TENDENCIA de la capacidad vital, no el valor aislado', 'No esperar a la gasometría: la hipercapnia es un signo TARDÍO', 'Intubar antes si hay debilidad bulbar y no maneja la saliva', 'Dar inmunoglobulinas O plasmaféresis, nunca las dos juntas', 'NO dar corticoides en el síndrome de Guillain-Barré', 'Monitorizar el electrocardiograma por la disautonomía y evitar maniobras vagales', 'Pedir TOMOGRAFÍA DE TÓRAX a todo paciente con miastenia, para buscar timoma', 'Comprobar la lista de fármacos contraindicados antes de prescribir a un miastenico', 'Iniciar el corticoide de la miastenia a dosis BAJA y subir despacio'],
    criterios_uci_general: 'Capacidad vital menor de 20 mL/kg o en descenso rápido, presión inspiratoria máxima con valor absoluto menor de 30 cmH2O o espiratoria menor de 40, debilidad bulbar con incapacidad para manejar las secreciones, disautonomía con arritmias o inestabilidad hemodinámica, progresión rápida de la debilidad, y crisis miastenica establecida. En el botulismo, la ventilación puede prolongarse semanas o meses.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: en el síndrome de Guillain-Barré, higiene alimentaria para reducir la infección por <em>Campylobacter</em>, y en el botulismo, procesado correcto de las conservas caseras y no dar miel a lactantes. En la miastenia, la prevención de las crisis es donde más se gana: vacunación antigripal y antineumococica, tratamiento precoz de las infecciones, planificación cuidadosa de la cirugía y del embarazo, retirada MUY lenta de la inmunosupresión y, sobre todo, comprobar la lista de fármacos contraindicados antes de cada prescripcion, porque una proporción relevante de las crisis es iatrogénica y por tanto evitable. Secundaria: entrega al paciente de una lista escrita y de una tarjeta identificativa, y cribado tumoral repetido en el síndrome de Lambert-Eaton. Terciaria: rehabilitación prolongada y manejo de la fatiga y del dolor residuales, que son las secuelas más frecuentes del Guillain-Barré.'
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
  'Síndrome de Guillain-Barré: diagnóstico': { definicion: [1, 4, 16], criterios_dx: [1, 4, 16], laboratorio: [1, 4, 16], tx_farmacologico: [1, 4, 16] },
  'Guillain-Barré: tratamiento y vigilancia respiratoria': { definicion: [1, 3, 5, 6, 7], criterios_dx: [1, 3, 5, 6, 7], laboratorio: [1, 3, 5, 6, 7], tx_farmacologico: [1, 3, 5, 6, 7] },
  'Miastenia gravis: diagnóstico': { definicion: [2, 9], criterios_dx: [2, 9], laboratorio: [2, 9], tx_farmacologico: [2, 9] },
  'Miastenia gravis: tratamiento': { definicion: [2, 8, 10, 11], criterios_dx: [2, 8, 10, 11], laboratorio: [2, 8, 10, 11], tx_farmacologico: [2, 8, 10, 11] },
  'Crisis miastenica y crisis colinérgica': { definicion: [2, 12, 14], criterios_dx: [2, 12, 14], laboratorio: [2, 12, 14], tx_farmacologico: [2, 12, 14] },
  'Lambert-Eaton, botulismo y el diferencial de la debilidad aguda': { definicion: [13, 15], criterios_dx: [13, 15], laboratorio: [13, 15], tx_farmacologico: [13, 15] }
};
export const estigmasTitulo = 'Signos y pistas en la debilidad neuromuscular aguda';
export const estigmas = [
  { s: 'Debilidad ascendente con arreflexia', p: 'Guillain-Barre', photo: null, desc: 'La combinación de progresión ascendente, simetría y pérdida precoz de los reflejos es el retrato del síndrome. Si además hay antecedente de diarrea o de infección respiratoria en las semanas previas, la sospecha es muy alta.' },
  { s: 'Dolor de espalda intenso antes de la debilidad', p: 'Muy frecuente y despista', photo: null, desc: 'Es una de las presentaciones que más retrasan el diagnóstico, porque el paciente consulta por lumbalgia y se va a casa con analgesia. Se debe a la afectación radicular y precede a la debilidad con frecuencia.' },
  { s: 'Líquido cefalorraquídeo normal en la primera semana', p: 'No descarta nada', photo: null, desc: 'La disociación albuminocitologica tarda días en aparecer y falta en una proporción importante de los pacientes al principio. Un líquido normal con clínica compatible no autoriza a suspender la vigilancia.' },
  { s: 'Más de 50 células en el líquido', p: 'Obliga a replantear', photo: null, desc: 'Una pleocitosis marcada no encaja con un Guillain-Barré típico y obliga a pensar en VIH, enfermedad de Lyme, linfoma o sarcoidosis, que se manejan de otra manera.' },
  { s: 'Bradicardia extrema con una maniobra vagal', p: 'Disautonomia', photo: null, desc: 'La disautonomía es una de las dos causas de muerte del síndrome, junto con la insuficiencia respiratoria. Obliga a monitorización continua y a extremar la precaución con aspiración traqueal y con fármacos bradicardizantes.' },
  { s: 'No puede contar hasta 20 de corrido', p: 'Signo de cabecera', photo: null, desc: 'Es una forma rápida y sin aparatos de estimar la capacidad vital. Junto con el habla entrecortada, el uso de musculatura accesoria y la incapacidad de levantar la cabeza, anuncia la claudicación antes que ninguna gasometría.' },
  { s: 'Ptosis que mejora tras aplicar hielo', p: 'Miastenia', photo: null, desc: 'El frío enlentece la degradación de la acetilcolina y mejora la transmisión. Dos minutos de hielo sobre el párpado son una prueba barata, segura y con buen rendimiento, que además puede hacerse en la propia consulta.' },
  { s: 'Debilidad que empeora a lo largo del dia', p: 'Fatigabilidad', photo: null, desc: 'Es el sello de la miastenia: el paciente esta bien por la mañana y peor por la tarde, y mejora con el reposo. Con reflejos normales y sin alteración sensitiva, el cuadro se separa bien del Guillain-Barré.' },
  { s: 'Voz nasal y regurgitación de líquidos por la nariz', p: 'Debilidad bulbar', photo: null, desc: 'Indica afectación de la musculatura faríngea y palatina. Es el dato que más adelanta la decisión de intubar, porque el riesgo aquí no es la fatiga respiratoria sino la aspiración.' },
  { s: 'Pupilas midriáticas y arreactivas', p: 'Botulismo', photo: null, desc: 'Las pupilas NUNCA se afectan en la miastenia, de modo que una midriasis arreactiva en un paciente con parálisis descendente y boca seca es el dato que delata el botulismo y obliga a administrar antitoxina sin esperar confirmación.' },
  { s: 'La fuerza MEJORA tras la contracción sostenida', p: 'Lambert-Eaton', photo: null, desc: 'Es el fenómeno de facilitacion, opuesto al de la miastenia: la contracción acumula calcio en la terminal presinaptica y aumenta la liberación de acetilcolina. Obliga a buscar un carcinoma microcitico y a repetir el cribado.' },
  { s: 'Boca seca en un fumador con debilidad proximal', p: 'Pista de Lambert-Eaton', photo: null, desc: 'La sequedad de boca es un síntoma autónomo precoz y muy frecuente en este síndrome, y se pasa por alto porque parece banal. En un fumador mayor con debilidad proximal, es una pista de primer orden.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Escala EGRIS de riesgo respiratorio (calculadora disponible)': [3],
  'Regla de 20, 30 y 40 (calculadora disponible)': [14],
  'Escala MG-ADL (calculadora disponible)': [12],
  'Clasificación de la Fundacion Americana de Miastenia Gravis': [2],
  'Subtipos del síndrome de Guillain-Barré': [1, 4],
  'Criterios de crisis miastenica frente a colinérgica (calculadora disponible)': [2, 14]
};
export const escalaCalc = {
  'Escala EGRIS de riesgo respiratorio (calculadora disponible)': 'egris',
  'Regla de 20, 30 y 40 (calculadora disponible)': 'regla-20-30-40',
  'Escala MG-ADL (calculadora disponible)': 'mg-adl',
  'Criterios de crisis miastenica frente a colinérgica (calculadora disponible)': 'crisis-miastenica'
};
export const compGroups = [
  { name: 'Guillain-Barre', items: ['Síndrome de Guillain-Barré: diagnóstico', 'Guillain-Barré: tratamiento y vigilancia respiratoria'] },
  { name: 'Miastenia gravis', items: ['Miastenia gravis: diagnóstico', 'Miastenia gravis: tratamiento', 'Crisis miastenica y crisis colinérgica'] },
  { name: 'El diferencial', items: ['Lambert-Eaton, botulismo y el diferencial de la debilidad aguda'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el síndrome de Guillain-Barré, separado en diagnóstico y manejo porque son dos problemas distintos: el primero es de reconocer un cuadro cuyas pruebas pueden salir normales al principio, y el segundo es casi entero de vigilancia respiratoria. Las tres siguientes son la miastenia: como se diagnostica, como se trata en escalones y que hacer cuando se descompensa. Y la última recoge los dos trastornos presinápticos que comparten síntomas con la miastenia y no comparten nada más, junto con el resto del diferencial de la debilidad aguda.';
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
  root: { title: 'DEBILIDAD NEUROMUSCULAR AGUDA', color: '#8c3a5c', target: 'definicion' },
  branches: [
    { title: 'DONDE ESTA', sub: 'Reflejos, pupilas, dirección', color: '#8c3a5c', target: 'complicaciones', leaves: [
      { title: 'Ascendente y arreflexica', sub: 'Guillain-Barre', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Fatigable con reflejos normales', sub: 'Miastenia', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Mejora con el ejercicio', sub: 'Lambert-Eaton', color: '#5a6b2e', target: 'complicaciones' },
      { title: 'Descendente con midriasis', sub: 'Botulismo', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'VIGILAR', sub: 'La respiración, no la gasometría', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Capacidad vital seriada', sub: 'Cada 4 a 6 horas', color: '#8c3a34', target: 'diagnostico' },
      { title: '20, 30 y 40', sub: 'Los tres umbrales', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Contar hasta 20', sub: 'Signo de cabecera', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Debilidad bulbar', sub: 'Intubar antes', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'TRATAR', sub: 'Y lo que NO se hace', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Inmunoglobulinas o plasmaféresis', sub: 'Nunca las dos', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sin corticoides en el GBS', sub: 'Si en la forma crónica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Tomografía de tórax', sub: 'A toda miastenia', color: '#3d5a73', target: 'complicaciones' },
      { title: 'La lista de fármacos', sub: 'Comprobar antes de prescribir', color: '#8a6a1f', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [3, 12, 14], imagen: [2, 8] };
export const clasificacionCite = [1, 2, 3, 12];
export const seguimientoCite = [1, 2, 14];
