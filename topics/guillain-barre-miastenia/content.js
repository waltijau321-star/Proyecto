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
  titulo: 'Guillain-Barre y Miastenia Gravis',
  subtitulo: 'Modulo 63 · Medicina Interna',
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
    <strong style="color:#8c3a5c;">Ante una debilidad aguda, la primera pregunta es DONDE esta la lesion.</strong> <span style="color:var(--ink-dim);">Cuatro cuadros comparten sintoma y no comparten nada mas: ni el mecanismo, ni el tratamiento, ni la urgencia. Se separan con tres datos de cabecera: reflejos, pupilas y direccion de la debilidad.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a5c22;border:1px solid #8c3a5c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a5c;">GUILLAIN-BARRE<br><span style="font-weight:400;font-size:8.5px;">nervio y raiz</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">ASCENDENTE</strong> y simetrica con <strong style="color:var(--ink);">ARREFLEXIA</strong>, que progresa en dias. Alteracion sensitiva y dolor de espalda frecuentes. Antecedente infeccioso 1 a 3 semanas antes en dos tercios. Pupilas normales.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">MIASTENIA<br><span style="font-weight:400;font-size:8.5px;">union, posinaptica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">FATIGABILIDAD</strong>: empeora con el uso y con el paso del dia, mejora con el reposo. Ptosis y diplopia al inicio en la mayoria. <strong>REFLEJOS NORMALES</strong> y <strong>SIN alteracion sensitiva</strong>. Pupilas normales.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5a6b2e22;border:1px solid #5a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5a6b2e;">LAMBERT-EATON<br><span style="font-weight:400;font-size:8.5px;">union, presinaptica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">PROXIMAL</strong> de piernas con arreflexia que <strong style="color:var(--ink);">MEJORA tras la contraccion sostenida</strong> (facilitacion). Boca seca precoz y muy frecuente. Se asocia a carcinoma MICROCITICO en mas de la mitad de los casos.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">BOTULISMO<br><span style="font-weight:400;font-size:8.5px;">union, presinaptica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Paralisis <strong style="color:var(--ink);">DESCENDENTE</strong> y simetrica que empieza por los pares craneales, con <strong style="color:#8c3a34;">PUPILAS MIDRIATICAS y arreactivas</strong>, boca seca, estre&#241;imiento, SIN fiebre y SIN alteracion sensitiva. La antitoxina precoz cambia el curso.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Los tres datos que los separan en 30 segundos.</strong> <strong>REFLEJOS</strong>: abolidos en Guillain-Barre y en Lambert-Eaton, normales en la miastenia. <strong>PUPILAS</strong>: midriaticas y arreactivas solo en el botulismo, que es el dato que lo delata. <strong>DIRECCION</strong>: ascendente en Guillain-Barre, descendente en el botulismo, y fluctuante a lo largo del dia en la miastenia. Y una regla que vale para los cuatro: lo que decide el destino del paciente no es el diagnostico sino la <strong>VIGILANCIA RESPIRATORIA</strong>.
  </div>
</div>`;

const gbsHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a5c;border-radius:8px;padding:6px 8px;background:#8c3a5c08;">
      <div style="font-weight:700;color:#8c3a5c;text-align:center;margin-bottom:4px;">LO QUE APOYA EL DIAGNOSTICO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Debilidad progresiva simetrica con arreflexia, que alcanza su maximo en <strong style="color:var(--ink);">menos de 4 semanas</strong> (habitualmente en 2). Antecedente de diarrea o de infeccion respiratoria 1 a 3 semanas antes. Dolor de espalda o radicular, que a menudo <strong>PRECEDE</strong> a la debilidad y despista.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">LO QUE OBLIGA A DUDAR</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">NIVEL SENSITIVO</strong> claro (apunta a medula), asimetria marcada y persistente, disfuncion de esfinteres desde el inicio, fiebre al comienzo del cuadro, y <strong style="color:var(--ink);">pleocitosis de mas de 50 celulas</strong> en el liquido, que obliga a pensar en VIH, Lyme, linfoma o sarcoidosis.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">DOS PRUEBAS QUE PUEDEN SER NORMALES AL PRINCIPIO Y NO DESCARTAN NADA</div>
    <div style="color:var(--ink-dim);line-height:1.6;">El <strong style="color:var(--ink);">LIQUIDO CEFALORRAQUIDEO</strong> muestra disociacion albuminocitologica (proteinas altas con celularidad normal), pero en la <strong>PRIMERA SEMANA puede ser normal</strong> en una proporcion importante de pacientes. Y el <strong style="color:var(--ink);">ELECTRONEUROGRAMA</strong> tambien puede ser normal en los primeros dias. Si el cuadro clinico es compatible, ninguna de las dos pruebas normales autoriza a mandar al paciente a casa: el diagnostico es clinico y la vigilancia no se suspende.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Tratamiento: inmunoglobulinas O plasmaferesis.</strong> Las dos tienen eficacia equivalente y se elige por disponibilidad y por el perfil del paciente. <strong>NO se combinan</strong>, porque a&#241;adir la segunda no aporta beneficio. Y hay una diferencia con la forma cronica que se pregunta siempre: <strong style="color:#8c3a34;">los CORTICOIDES NO son eficaces</strong> en el sindrome de Guillain-Barre.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que mata no es la debilidad de las piernas.</strong> Las dos causas de muerte son la <strong>insuficiencia respiratoria</strong> y la <strong>DISAUTONOMIA</strong>: arritmias, bradicardia extrema con maniobras vagales, labilidad tensional, ileo y retencion. Por eso la monitorizacion cardiaca y la vigilancia respiratoria seriada valen mas que cualquier prueba diagnostica.
    </div>
  </div>
</div>`;

const miasteniaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">La miastenia se reconoce por la FATIGABILIDAD, no por la debilidad.</strong> <span style="color:var(--ink-dim);">Empeora con el uso repetido y a lo largo del dia, y mejora con el reposo. Reflejos normales y sin alteracion sensitiva: eso la separa del resto.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">DIAGNOSTICO</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">ANTICUERPOS</strong> primero: frente al receptor de acetilcolina en la gran mayoria, frente a MuSK en un grupo peque&#241;o con perfil propio, y frente a LRP4. Si son negativos, <strong>estimulacion repetitiva</strong> (decremento) y <strong>fibra unica</strong>. La <strong>PRUEBA DEL HIELO</strong> sobre el parpado, dos minutos, es sencilla y util para la ptosis.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">LA TOMOGRAFIA DE TORAX ES OBLIGADA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">A <strong style="color:var(--ink);">TODO</strong> paciente con miastenia, para buscar <strong>TIMOMA</strong>. Si lo hay, la timectomia esta indicada siempre, por el propio tumor. Y en la miastenia generalizada con anticuerpos frente al receptor de acetilcolina y de inicio precoz, la timectomia mejora los resultados aunque NO haya timoma.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">FARMACOS QUE PUEDEN DESENCADENAR UNA CRISIS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Antibioticos</strong>: aminoglucosidos, macrolidos y sobre todo <strong>FLUOROQUINOLONAS</strong>, que son las que mas se prescriben sin pensar en esto. <strong style="color:var(--ink);">Cardiovasculares</strong>: betabloqueantes, procainamida. <strong style="color:var(--ink);">Otros</strong>: MAGNESIO intravenoso, bloqueantes neuromusculares, penicilamina, cloroquina e hidroxicloroquina, contrastes yodados e inhibidores del punto de control inmunitario. Antes de prescribir a un miastenico, comprobarlo.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Escalones del tratamiento.</strong> <strong>PIRIDOSTIGMINA</strong> sintomatica, que alivia pero no modifica la enfermedad. <strong>CORTICOIDE</strong>, empezando a dosis BAJA y subiendo despacio, porque iniciarlo a dosis alta puede producir un empeoramiento transitorio grave. <strong>Ahorradores</strong>: azatioprina, micofenolato o tacrolimus, que tardan meses en actuar. Y en la enfermedad refractaria, rituximab (de eleccion si los anticuerpos son frente a MuSK), inhibidores del complemento y bloqueantes del receptor Fc neonatal.
  </div>
</div>`;

const crisisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">En la debilidad neuromuscular, la gasometria llega TARDE.</strong> <span style="color:var(--ink-dim);">La hipercapnia aparece cuando el paciente ya esta agotado. Lo que hay que seguir es la capacidad vital a pie de cama, de forma seriada, y actuar antes de que se descompense.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;text-align:center;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">20</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Capacidad vital por debajo de <strong style="color:var(--ink);">20 mL/kg</strong></div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;text-align:center;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">30</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Presion inspiratoria maxima por debajo de <strong style="color:var(--ink);">30 cmH2O</strong> en valor absoluto</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;text-align:center;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">40</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Presion espiratoria maxima por debajo de <strong style="color:var(--ink);">40 cmH2O</strong></div>
    </div>
  </div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:5px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Y los signos de cabecera que valen tanto como los numeros:</strong> el paciente no puede contar de corrido hasta 20 en una sola espiracion, habla entrecortado, usa musculatura accesoria, no puede levantar la cabeza de la almohada, tiene respiracion paradojica, o presenta debilidad bulbar con dificultad para tragar su propia saliva. <strong>La debilidad bulbar es indicacion de intubacion aunque los numeros aun no lo sean</strong>, porque el riesgo es la aspiracion, no la fatiga.
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #8c3a5c;border-radius:8px;padding:6px 8px;background:#8c3a5c08;">
      <div style="font-weight:700;color:#8c3a5c;text-align:center;margin-bottom:4px;">CRISIS MIASTENICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Insuficiencia respiratoria por progresion de la enfermedad. Desencadenantes: <strong style="color:var(--ink);">INFECCION</strong> (la mas frecuente), cirugia, embarazo y parto, un farmaco nuevo, o la retirada rapida de la inmunosupresion. Tratamiento: inmunoglobulinas o plasmaferesis, soporte ventilatorio y tratar el desencadenante.</div>
    </div>
    <div style="border:1.5px solid #5a6b2e;border-radius:8px;padding:6px 8px;background:#5a6b2e08;">
      <div style="font-weight:700;color:#5a6b2e;text-align:center;margin-bottom:4px;">CRISIS COLINERGICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hoy es RARA. Por exceso de anticolinesterasico: a&#241;ade sintomas <strong style="color:var(--ink);">muscarinicos</strong> (diarrea, colicos, sudoracion, lagrimeo, sialorrea, broncorrea), <strong>MIOSIS</strong>, bradicardia y fasciculaciones. Ante la duda, se suspende la piridostigmina y se observa, que ademas es lo que se hace durante la ventilacion.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema reune dos enfermedades que se estudian juntas porque comparten el mismo peligro: una <strong>debilidad que puede llegar a los musculos respiratorios</strong>. El sindrome de Guillain-Barre ataca el nervio y la raiz; la miastenia gravis ataca la union neuromuscular. Y alrededor de ambas hay dos cuadros mas que entran en el mismo diferencial y que conviene tener presentes: el sindrome de Lambert-Eaton y el botulismo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: donde esta la lesion.</strong></p>
<p style="margin:0 0 12px;">Cuatro cuadros con el mismo sintoma y ningun tratamiento en comun. Se separan con tres datos que se obtienen en la exploracion inicial: los <strong>reflejos</strong> (abolidos en Guillain-Barre y en Lambert-Eaton, normales en la miastenia), las <strong>pupilas</strong> (midriaticas y arreactivas solo en el botulismo) y la <strong>direccion</strong> de la debilidad (ascendente, descendente o fluctuante). Y una regla que vale para los cuatro: lo que decide el pronostico no es acertar la etiqueta sino vigilar la respiracion.</p>
${figBlock('Figura 1', 'Donde esta la lesion: cuatro cuadros y tres datos que los separan', localizarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el sindrome de Guillain-Barre.</strong></p>
<p style="margin:0 0 12px;">Debilidad ascendente, simetrica y arreflexica que alcanza su maximo en menos de cuatro semanas, con frecuencia precedida de una infeccion y, muy a menudo, de <strong>dolor de espalda</strong> que despista. Conviene saber que el liquido cefalorraquideo y el electroneurograma <strong>pueden ser normales en los primeros dias</strong> y no descartan nada. El tratamiento son inmunoglobulinas o plasmaferesis, que no se combinan, y hay un dato que se pregunta siempre: los <strong>corticoides no son eficaces</strong> aqui, al reves que en la forma cronica.</p>
${figBlock('Figura 2', 'Guillain-Barre: lo que apoya, lo que hace dudar y lo que mata', gbsHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la miastenia gravis.</strong></p>
<p style="margin:0 0 12px;">Lo que la define no es la debilidad sino la <strong>fatigabilidad</strong>: empeora con el uso y a lo largo del dia y mejora con el reposo, con reflejos normales y sin alteracion sensitiva. El diagnostico empieza por los anticuerpos y sigue por la neurofisiologia si son negativos. La <strong>tomografia de torax es obligada en todos</strong> para buscar timoma. Y hay una lista de farmacos que puede desencadenar una crisis y que conviene comprobar antes de prescribir nada a un miastenico.</p>
${figBlock('Figura 3', 'Miastenia: diagnostico, el timo y los farmacos prohibidos', miasteniaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la vigilancia respiratoria, que es lo que salva.</strong></p>
<p style="margin:0 0 12px;">En la debilidad neuromuscular la <strong>gasometria llega tarde</strong>: la hipercapnia aparece cuando el paciente ya esta agotado y a punto de claudicar. Lo que hay que seguir es la <strong>capacidad vital a pie de cama</strong>, de forma seriada, con la regla de 20, 30 y 40 y con los signos clinicos que valen tanto como los numeros. Y hay una excepcion que adelanta la decision: la debilidad bulbar con incapacidad para manejar la propia saliva.</p>
${figBlock('Figura 4', 'La regla de 20, 30 y 40, y las dos crisis', crisisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No descartar un Guillain-Barre porque el liquido cefalorraquideo o el electroneurograma sean normales en los primeros dias. No mandar a casa a un paciente con debilidad ascendente para reevaluarlo en una semana. No dar corticoides como tratamiento del Guillain-Barre. No combinar inmunoglobulinas con plasmaferesis. No esperar a la gasometria para decidir la intubacion. No hacer maniobras vagales ni dar farmacos bradicardizantes sin monitorizacion en un paciente disautonomico. No prescribir una fluoroquinolona, un aminoglucosido o magnesio intravenoso a un miastenico sin comprobarlo antes. No iniciar el corticoide a dosis alta en una miastenia sin prever el empeoramiento transitorio. No dejar de pedir tomografia de torax a todo paciente con miastenia. Y no olvidar el cribado tumoral repetido en el sindrome de Lambert-Eaton, donde el tumor puede aparecer despues del cuadro neurologico.</p>`;

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
      tituloA: 'Sindrome de Guillain-Barre',
      tituloB: 'Miastenia gravis',
      compensada: 'Debilidad simetrica que suele empezar en las piernas y ASCIENDE, con ARREFLEXIA precoz. Parestesias distales y, muy a menudo, DOLOR de espalda o radicular intenso que puede preceder a la debilidad y que hace pensar en una lumbalgia o en una compresion medular. Antecedente de diarrea o de infeccion respiratoria 1 a 3 semanas antes en dos tercios de los casos. Puede haber afectacion de pares craneales, sobre todo diplejia facial. Variantes: sindrome de Miller Fisher (oftalmoplejia, ataxia y arreflexia), variante faringo-cervico-braquial y encefalitis de Bickerstaff.',
      descompensada: 'FATIGABILIDAD: la debilidad empeora con el uso repetido y a lo largo del dia, y mejora con el reposo. En la mayoria empieza con sintomas OCULARES (ptosis y diplopia) y una parte importante generaliza en los dos primeros a&#241;os. Debilidad bulbar con disartria, voz nasal, disfagia y regurgitacion nasal de liquidos. Debilidad proximal de extremidades y de la musculatura cervical, con dificultad para levantar la cabeza de la almohada. REFLEJOS NORMALES y SIN alteracion sensitiva, que es lo que la separa del Guillain-Barre. El subtipo con anticuerpos frente a MuSK tiene predominio bulbar, facial y cervical, con atrofia lingual y peor respuesta a los anticolinesterasicos.'
    },
    laboratorio: [
      { prueba: 'Liquido cefalorraquideo', utilidad: 'En el Guillain-Barre busca DISOCIACION ALBUMINOCITOLOGICA: proteinas elevadas con celularidad normal. Dos advertencias practicas: puede ser NORMAL en la primera semana en una proporcion importante de pacientes, de modo que no descarta; y una pleocitosis de mas de 50 celulas obliga a replantear el diagnostico hacia VIH, Lyme, linfoma o sarcoidosis.' },
      { prueba: 'Anticuerpos frente al receptor de acetilcolina', utilidad: 'Positivos en la gran mayoria de las miastenias generalizadas y en algo mas de la mitad de las formas puramente oculares. Son muy especificos, de modo que un resultado positivo en un cuadro compatible practicamente cierra el diagnostico. Su titulo NO se correlaciona con la gravedad ni sirve para seguir la respuesta al tratamiento.' },
      { prueba: 'Anticuerpos frente a MuSK', utilidad: 'Se piden cuando los anteriores son negativos. Definen un subtipo con perfil propio: predominio bulbar, facial y cervical, atrofia lingual, peor respuesta a la piridostigmina y buena respuesta al rituximab, que en este grupo se considera de eleccion en la enfermedad refractaria.' },
      { prueba: 'Anticuerpos frente al canal de calcio dependiente de voltaje', utilidad: 'En la sospecha de sindrome de Lambert-Eaton. Su positividad obliga a un cribado tumoral dirigido a carcinoma MICROCITICO de pulmon, que se asocia en mas de la mitad de los casos y que puede aparecer meses o a&#241;os DESPUES del cuadro neurologico, por lo que el cribado se repite.' },
      { prueba: 'Anticuerpos antigangliosido', utilidad: 'El anti-GQ1b es muy caracteristico del sindrome de Miller Fisher y de la encefalitis de Bickerstaff. Los anti-GM1 y anti-GD1a se asocian a las formas axonales y a la infeccion previa por Campylobacter jejuni. No son necesarios para el diagnostico en la forma tipica.' },
      { prueba: 'Analitica general y estudio de la infeccion previa', utilidad: 'Hemograma, bioquimica, funcion renal y hepatica, y funcion TIROIDEA, porque la enfermedad tiroidea autoinmune se asocia a la miastenia. Serologia de VIH en todo Guillain-Barre. Coprocultivo y serologias segun el antecedente infeccioso.' },
      { prueba: 'Cribado antes de iniciar inmunosupresion', utilidad: 'Antes de azatioprina, micofenolato o rituximab: hemograma, funcion hepatica, serologias de hepatitis B y C y de VIH, cribado de tuberculosis latente y actualizacion del calendario vacunal. La determinacion de la actividad de tiopurina metiltransferasa antes de la azatioprina evita toxicidad hematologica grave.' },
      { prueba: 'Toxina botulinica en suero, heces o alimento', utilidad: 'Ante sospecha de botulismo. Es una prueba lenta y su resultado NO debe retrasar la administracion de la antitoxina, cuya eficacia depende de la precocidad. Ademas hay que notificar el caso a salud publica de forma inmediata.' }
    ],
    no_invasivos: [
      { metodo: 'Escala EGRIS de riesgo respiratorio (calculadora disponible)', interpretacion: 'Predice la necesidad de ventilacion mecanica en el sindrome de Guillain-Barre a partir de tres variables sencillas disponibles al ingreso: rapidez de instauracion, afectacion facial o bulbar y suma de fuerza segun la escala del Medical Research Council.', cutoff: '0 a 2 riesgo bajo; 3 a 4 intermedio; 5 a 7 riesgo ALTO de necesitar ventilacion' },
      { metodo: 'Regla de 20, 30 y 40 (calculadora disponible)', interpretacion: 'Umbrales de funcion respiratoria a pie de cama en la debilidad neuromuscular. La gasometria llega tarde, porque la hipercapnia aparece cuando el paciente ya esta agotado.', cutoff: 'Capacidad vital menor de 20 mL/kg, presion inspiratoria maxima menor de 30 o espiratoria menor de 40 cmH2O' },
      { metodo: 'Escala MG-ADL (calculadora disponible)', interpretacion: 'Ocho items referidos por el paciente sobre su vida diaria, de 0 a 3 puntos cada uno. Mide el impacto real de la miastenia y sirve para seguir la respuesta al tratamiento.', cutoff: 'De 0 a 24 puntos. Un cambio de 2 puntos o mas se considera clinicamente relevante' },
      { metodo: 'Crisis miastenica frente a colinergica (calculadora disponible)', interpretacion: 'Separa el empeoramiento por progresion de la enfermedad del producido por exceso de anticolinesterasico, que hoy es raro. Los sintomas muscarinicos y la miosis son la clave.', cutoff: 'Ante la duda, suspender la piridostigmina y observar, que ademas es lo que se hace durante la ventilacion' },
      { metodo: 'Capacidad vital seriada a pie de cama', interpretacion: 'Es la medida mas util del seguimiento. Se hace cada 4 a 6 horas en la fase de progresion, y su TENDENCIA importa mas que un valor aislado: una caida rapida obliga a actuar aunque el valor absoluto todavia sea aceptable.', cutoff: 'Descenso progresivo o caida por debajo de 20 mL/kg: valorar ingreso en unidad de criticos' },
      { metodo: 'Signos clinicos de claudicacion respiratoria', interpretacion: 'Valen tanto como los numeros y estan siempre disponibles: incapacidad para contar hasta 20 de corrido en una espiracion, habla entrecortada, uso de musculatura accesoria, respiracion paradojica, incapacidad para levantar la cabeza de la almohada y sudoracion.', cutoff: 'La DEBILIDAD BULBAR con incapacidad para manejar la propia saliva indica intubacion aunque los numeros no lo hagan' },
      { metodo: 'Prueba del hielo', interpretacion: 'Se aplica hielo sobre el parpado cerrado durante unos dos minutos. El frio enlentece la degradacion de la acetilcolina y mejora la ptosis en la miastenia. Es sencilla, segura y con buen rendimiento para la ptosis.', cutoff: 'Mejoria evidente de la ptosis tras el frio: apoya el diagnostico' },
      { metodo: 'Estimulacion nerviosa repetitiva y fibra unica', interpretacion: 'La estimulacion repetitiva a baja frecuencia muestra DECREMENTO en la miastenia. En el sindrome de Lambert-Eaton hay lo contrario: INCREMENTO marcado tras ejercicio breve o estimulacion de alta frecuencia. La fibra unica es la tecnica mas sensible pero la menos especifica.', cutoff: 'Decremento superior al 10% en la amplitud: apoya la miastenia' }
    ],
    imagen: [
      { modalidad: 'Tomografia de torax', hallazgos: 'OBLIGADA en todo paciente con miastenia gravis para buscar TIMOMA, presente en una minoria pero con implicaciones quirurgicas inmediatas. En el sindrome de Lambert-Eaton, la busqueda se dirige al carcinoma microcitico de pulmon y se repite en el tiempo aunque la primera sea negativa.' },
      { modalidad: 'Resonancia de columna con contraste', hallazgos: 'En el Guillain-Barre puede mostrar realce de las raices de la cola de caballo, que apoya el diagnostico. Su papel principal, sin embargo, es DESCARTAR una compresion medular o un proceso medular que explique la debilidad, sobre todo cuando hay nivel sensitivo o disfuncion de esfinteres.' },
      { modalidad: 'Tomografia por emision de positrones', hallazgos: 'En el sindrome de Lambert-Eaton con cribado convencional negativo, para buscar una neoplasia oculta. Tambien en la miastenia con sospecha de timoma no concluyente en la tomografia.' },
      { modalidad: 'Radiografia de torax y ecografia diafragmatica', hallazgos: 'La radiografia detecta atelectasias y complicaciones. La ecografia del diafragma, cada vez mas utilizada, permite valorar su excursion y su engrosamiento a pie de cama, lo que complementa la capacidad vital en el paciente que no colabora bien con la espirometria.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El primer eje de clasificacion es la <strong>localizacion</strong>: nervio y raiz (sindrome de Guillain-Barre) o union neuromuscular, y dentro de esta, posinaptica (miastenia) o presinaptica (Lambert-Eaton y botulismo). El segundo es el <strong>subtipo</strong>: en el Guillain-Barre, desmielinizante frente a axonal y las variantes regionales; en la miastenia, por anticuerpo (receptor de acetilcolina, MuSK, LRP4 o seronegativa) y por distribucion (ocular o generalizada). Y el tercero, que es el que gobierna el manejo a pie de cama, es la <strong>gravedad respiratoria</strong>, que se sigue con la capacidad vital y no con la gasometria.`,
    escalas: [
      { nombre: 'Escala EGRIS de riesgo respiratorio (calculadora disponible)', componentes: 'Dias entre el inicio de la debilidad y el ingreso, presencia de debilidad facial o bulbar al ingreso, y suma de fuerza segun la escala del Medical Research Council en seis grupos musculares bilaterales.', formula: 'Instauracion rapida, afectacion bulbar y menor puntuacion de fuerza suman puntos, hasta un maximo de 7.', interpretacion: 'De 0 a 2, riesgo bajo de ventilacion mecanica. De 3 a 4, intermedio. De 5 a 7, riesgo ALTO, lo que justifica ingreso en un area con capacidad de intubacion inmediata. Es una herramienta de prediccion al ingreso y NO sustituye a la vigilancia respiratoria seriada.' },
      { nombre: 'Regla de 20, 30 y 40 (calculadora disponible)', componentes: 'Capacidad vital en mL/kg, presion inspiratoria maxima y presion espiratoria maxima, medidas a pie de cama.', formula: 'Capacidad vital menor de 20 mL/kg, presion inspiratoria maxima con valor absoluto menor de 30 cmH2O o presion espiratoria maxima menor de 40 cmH2O.', interpretacion: 'Cumplir cualquiera de los tres criterios indica riesgo alto de claudicacion e ingreso en unidad de criticos. La TENDENCIA importa mas que el valor aislado, y la debilidad bulbar con incapacidad para manejar la saliva adelanta la decision aunque los numeros no la cumplan.' },
      { nombre: 'Escala MG-ADL (calculadora disponible)', componentes: 'Ocho items referidos por el paciente: habla, masticacion, deglucion, respiracion, higiene personal, levantarse de una silla, diplopia y ptosis.', formula: 'Cada item de 0 (normal) a 3 (grave). Total de 0 a 24 puntos.', interpretacion: 'Mide el impacto de la enfermedad sobre la vida diaria y es la escala mas usada para seguir la respuesta al tratamiento. Un cambio de 2 puntos o mas se considera clinicamente relevante. Notar que el titulo de anticuerpos NO sirve para este fin.' },
      { nombre: 'Clasificacion de la Fundacion Americana de Miastenia Gravis', componentes: 'Distribucion y gravedad de la debilidad.', formula: 'Clase I: solo ocular. Clase II: debilidad leve generalizada. Clase III: moderada. Clase IV: grave. Clase V: necesidad de intubacion. Las clases II a IV se subdividen en A (predominio de extremidades y axial) y B (predominio bulbar y respiratorio).', interpretacion: 'Ordena la gravedad y permite comparar pacientes. La distincion entre subtipo A y B tiene valor practico, porque el predominio bulbar y respiratorio marca el riesgo real de crisis.' },
      { nombre: 'Subtipos del sindrome de Guillain-Barre', componentes: 'Hallazgos del electroneurograma y distribucion clinica.', formula: 'Forma desmielinizante aguda, formas axonales motora y sensitivomotora, y variantes regionales como el sindrome de Miller Fisher y la variante faringo-cervico-braquial.', interpretacion: 'La forma desmielinizante es la mas frecuente en Europa y America del Norte, y las axonales predominan en Asia y se asocian a Campylobacter jejuni y a peor recuperacion. El sindrome de Miller Fisher (oftalmoplejia, ataxia y arreflexia) se asocia al anticuerpo anti-GQ1b y tiene buen pronostico.' },
      { nombre: 'Criterios de crisis miastenica frente a colinergica (calculadora disponible)', componentes: 'Sintomas muscarinicos, tama&#241;o pupilar, frecuencia cardiaca, fasciculaciones y dosis de anticolinesterasico.', formula: 'La crisis colinergica a&#241;ade diarrea, colicos, sudoracion, lagrimeo, sialorrea, broncorrea, MIOSIS, bradicardia y fasciculaciones.', interpretacion: 'La crisis colinergica es hoy rara porque las dosis usadas son menores que hace decadas. Ante la duda, la conducta es suspender la piridostigmina y observar: si mejora era colinergica, y si empeora era miastenica, y en ambos casos el soporte respiratorio es la prioridad.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Sindrome de Guillain-Barre: diagnostico',
      color: '#8c3a5c',
      definicion: 'Poliradiculoneuropatia aguda de mecanismo inmunitario, caracterizada por debilidad simetrica progresiva con arreflexia que alcanza su maximo en menos de cuatro semanas.',
      fisiopatologia: 'Una infeccion previa desencadena una respuesta inmunitaria contra antigenos del microorganismo que reaccionan de forma cruzada con componentes del nervio periferico, un fenomeno de MIMETISMO MOLECULAR bien documentado con los lipooligosacaridos de <em>Campylobacter jejuni</em> y los gangliosidos del axolema. Segun la diana, el resultado es desmielinizacion segmentaria (forma desmielinizante, la mas frecuente en Occidente) o da&#241;o axonal directo (formas axonales, mas frecuentes en Asia y de peor recuperacion). La afectacion de raices explica que la debilidad sea proximal y distal a la vez y que el dolor radicular sea tan frecuente.',
      epidemiologia: 'Es la causa mas frecuente de paralisis flacida aguda desde la practica erradicacion de la poliomielitis. Dos tercios de los pacientes refieren una infeccion en las 1 a 3 semanas previas. El agente identificado con mas frecuencia es <em>Campylobacter jejuni</em>, seguido de citomegalovirus, virus de Epstein-Barr, <em>Mycoplasma pneumoniae</em>, virus de la hepatitis E, Zika y SARS-CoV-2.',
      factores_riesgo: ['Infeccion por Campylobacter jejuni, sobre todo tras diarrea', 'Infeccion por citomegalovirus o por virus de Epstein-Barr', 'Infeccion por Mycoplasma pneumoniae', 'Infeccion por virus de la hepatitis E', 'Infeccion por virus Zika', 'Infeccion por SARS-CoV-2', 'Cirugia reciente', 'Linfoma y otras neoplasias hematologicas', 'Inhibidores del punto de control inmunitario', 'Edad avanzada, que se asocia a peor recuperacion', 'Sexo masculino', 'Trasplante de organo o de progenitores hematopoyeticos'],
      clinica: 'Debilidad simetrica que suele empezar en las piernas y asciende, con ARREFLEXIA precoz. DOLOR de espalda o radicular intenso, muy frecuente, que a menudo precede a la debilidad y hace pensar en una lumbalgia. Parestesias distales. Afectacion de pares craneales, sobre todo diplejia facial. Disautonomia en una proporcion importante.',
      criterios_dx: 'CLINICOS: debilidad progresiva simetrica de mas de un miembro con arreflexia o hiporreflexia, con progresion de menos de 4 semanas. El liquido cefalorraquideo y el electroneurograma apoyan pero pueden ser NORMALES en los primeros dias. Ver la Figura 2 de Definicion.',
      laboratorio: 'Liquido cefalorraquideo buscando disociacion albuminocitologica, sabiendo que puede ser normal en la primera semana. Serologia de VIH en todos. Anticuerpos antigangliosido en las variantes. Analitica general con funcion renal, hepatica e iones.',
      imagen: 'RESONANCIA DE COLUMNA con contraste, sobre todo para descartar una compresion medular u otro proceso medular. Puede mostrar realce de las raices de la cola de caballo, que apoya el diagnostico.',
      complementarios: 'ELECTRONEUROGRAMA Y ELECTROMIOGRAMA, que definen el subtipo y apoyan el diagnostico, aunque pueden ser normales en los primeros dias. Repetirlos en una o dos semanas si el primero no es concluyente y persiste la duda.',
      dx_diferencial: 'Compresion medular y mielitis transversa (que a&#241;aden NIVEL SENSITIVO y afectacion de esfinteres precoz), miastenia gravis, botulismo, poliomielitis y otras infecciones por enterovirus, porfiria aguda intermitente, paralisis por hipopotasemia, neuropatia del enfermo critico, intoxicacion por metales pesados o por organofosforados, vasculitis y paralisis por garrapata.',
      tx_medico: 'INGRESO en todos los casos con debilidad progresiva, incluso si el paciente camina, porque la progresion puede ser rapida e impredecible. Monitorizacion cardiaca por la disautonomia. Vigilancia respiratoria seriada. Profilaxis de enfermedad tromboembolica, prevencion de ulceras por presion y de retracciones, y manejo del DOLOR, que se infratrata de forma sistematica.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. La regla que hay que retener del diagnostico es que la sospecha basta para ingresar y vigilar, sin esperar a que las pruebas la confirmen.',
      tx_intervencionista: 'No aplica en la fase diagnostica.',
      criterios_uci: 'Capacidad vital en descenso o por debajo del umbral, debilidad bulbar con incapacidad para manejar la saliva, disautonomia significativa con arritmias o labilidad tensional, y progresion rapida de la debilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Exploracion neurologica y capacidad vital cada 4 a 6 horas durante la fase de progresion. Monitorizacion electrocardiografica continua. Vigilancia del ileo y de la retencion urinaria, que son manifestaciones disautonomicas frecuentes y que se pasan por alto.',
      seguimiento_ambulatorio: 'Rehabilitacion prolongada. Vigilancia de la FATIGA residual y del dolor neuropatico, que son las secuelas mas frecuentes y las que mas afectan a la calidad de vida a largo plazo.',
      pronostico: 'La mayoria de los pacientes recupera la marcha independiente, pero la recuperacion es lenta, con frecuencia incompleta y con secuelas de fatiga y dolor muy comunes. Los factores de peor pronostico son la edad avanzada, la instauracion rapida, la debilidad grave al nadir, la forma axonal y el antecedente de diarrea.',
      algoritmo: ['Sospecharlo ante debilidad simetrica ascendente con ARREFLEXIA', 'Preguntar por infeccion en las 1 a 3 semanas previas', 'Explorar buscando nivel sensitivo, que apuntaria a la medula', 'INGRESAR aunque el paciente camine: la progresion es impredecible', 'Iniciar vigilancia respiratoria seriada y monitorizacion cardiaca', 'Analizar el liquido cefalorraquideo, sabiendo que puede ser normal', 'Pedir electroneurograma, sabiendo que tambien puede serlo', 'Hacer resonancia de columna para descartar compresion medular', 'Pedir serologia de VIH a todos', 'No retrasar el tratamiento esperando la confirmacion de las pruebas']
    },
    {
      nombre: 'Guillain-Barre: tratamiento y vigilancia respiratoria',
      color: '#8c3a34',
      definicion: 'Manejo del sindrome de Guillain-Barre, cuyos dos pilares son la inmunoterapia y, sobre todo, la vigilancia de la funcion respiratoria y de la disautonomia.',
      fisiopatologia: 'Las inmunoglobulinas intravenosas actuan por varios mecanismos: bloqueo de receptores Fc, neutralizacion de autoanticuerpos por anticuerpos antiidiotipo, inhibicion del complemento y modulacion de la respuesta celular. La plasmaferesis elimina de forma directa autoanticuerpos y factores del complemento circulantes. Las dos actuan sobre el mismo proceso por vias distintas, y ese es el motivo por el que combinarlas no a&#241;ade beneficio. Los corticoides, que si funcionan en la forma cronica, no han demostrado eficacia en la forma aguda, posiblemente por el papel dominante de la lesion ya establecida.',
      epidemiologia: 'Una proporcion apreciable de los pacientes requiere ventilacion mecanica, y ese es el desenlace que la escala EGRIS trata de anticipar al ingreso. La mortalidad no es despreciable y se concentra en las complicaciones respiratorias, la disautonomia y las infecciones nosocomiales.',
      factores_riesgo: ['Progresion rapida desde el inicio de los sintomas', 'Debilidad facial o bulbar al ingreso', 'Puntuacion baja en la escala de fuerza del Medical Research Council', 'Incapacidad para levantar la cabeza de la almohada', 'Capacidad vital en descenso', 'Disautonomia significativa', 'Edad avanzada', 'Comorbilidad respiratoria previa', 'Forma axonal', 'Fluctuacion relacionada con el tratamiento'],
      clinica: 'La respuesta esperable es la estabilizacion de la progresion en dias y una mejoria lenta posterior. Hay que conocer dos fenomenos: la FLUCTUACION RELACIONADA CON EL TRATAMIENTO, en la que el paciente mejora y despues empeora en las semanas siguientes y puede requerir un segundo ciclo, y la evolucion hacia una forma cronica si la progresion se prolonga mas de 8 semanas.',
      criterios_dx: 'No aplica: es la fase terapeutica. Lo que decide el manejo es la funcion respiratoria y la presencia de disautonomia. Ver la Figura 4 de Definicion.',
      laboratorio: 'Antes de las inmunoglobulinas: funcion renal, inmunoglobulina A (por el riesgo de reaccion en el deficit selectivo) y valoracion del riesgo trombotico. Durante el tratamiento: funcion renal, hemograma e iones. En la plasmaferesis, coagulacion, calcio y control del acceso vascular.',
      imagen: 'Radiografia de torax para vigilar atelectasias y complicaciones infecciosas. Ecografia diafragmatica como complemento en el paciente que colabora mal con la espirometria.',
      complementarios: 'CAPACIDAD VITAL Y PRESIONES MAXIMAS cada 4 a 6 horas en la fase de progresion, valorando la TENDENCIA mas que el valor aislado. Monitorizacion electrocardiografica continua. Deglucion valorada antes de iniciar dieta oral.',
      dx_diferencial: 'Ante un deterioro durante el tratamiento: fluctuacion relacionada con el tratamiento, infeccion nosocomial, embolia pulmonar, atelectasia, disautonomia y evolucion a forma cronica.',
      tx_medico: 'PREVENCION DE COMPLICACIONES, que es donde se gana o se pierde: profilaxis de enfermedad tromboembolica, movilizacion y fisioterapia respiratoria precoz, prevencion de ulceras y de retracciones, cuidado ocular si hay debilidad facial, soporte nutricional y apoyo psicologico, porque el paciente puede estar consciente y completamente paralizado, lo que genera una angustia enorme.',
      tx_farmacologico: 'INMUNOGLOBULINAS INTRAVENOSAS o PLASMAFERESIS, con eficacia equivalente; se elige por disponibilidad, acceso vascular y comorbilidad. <strong>NO se combinan.</strong> <strong style="color:#8c3a34;">Los CORTICOIDES NO son eficaces</strong> y no forman parte del tratamiento. Analgesia para el dolor neuropatico con gabapentinoides, evitando en lo posible los opioides por el ileo disautonomico. Precaucion extrema con farmacos bradicardizantes.',
      tx_intervencionista: 'Intubacion y ventilacion mecanica cuando se cumplen los criterios. Traqueostomia si la ventilacion se prolonga. Marcapasos transitorio en la bradiarritmia disautonomica grave, que es una situacion poco frecuente pero potencialmente mortal.',
      criterios_uci: 'Capacidad vital menor de 20 mL/kg o en descenso rapido, presion inspiratoria maxima menor de 30 o espiratoria menor de 40 cmH2O, debilidad bulbar con riesgo de aspiracion, disautonomia con arritmias o inestabilidad, y progresion rapida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La vigilancia respiratoria no se suspende porque el paciente parezca estable: el deterioro puede ser rapido. Evitar las maniobras vagales y los farmacos bradicardizantes sin monitorizacion. Vigilar el ileo y la retencion urinaria. Y no usar succinilcolina si hay que intubar, por el riesgo de hiperpotasemia grave.',
      seguimiento_ambulatorio: 'Rehabilitacion prolongada e individualizada. Seguimiento de la fatiga y del dolor residuales. Reevaluar si el cuadro fluctua o progresa mas alla de 8 semanas, porque entonces se comporta como una forma cronica y el tratamiento cambia, incluidos los corticoides, que alli si son eficaces.',
      pronostico: 'La mayoria recupera la marcha independiente, pero la recuperacion se mide en meses y las secuelas de fatiga y dolor son frecuentes. La calidad de los cuidados de soporte pesa tanto como la inmunoterapia en el desenlace final.',
      algoritmo: ['Calcular el riesgo respiratorio al ingreso con la escala EGRIS', 'Medir capacidad vital y presiones maximas cada 4 a 6 horas', 'Valorar la TENDENCIA, no solo el valor aislado', 'Intubar si se cumple la regla de 20, 30 y 40, sin esperar a la gasometria', 'Intubar antes si hay debilidad bulbar y no maneja la saliva', 'Iniciar inmunoglobulinas O plasmaferesis, nunca las dos', 'NO dar corticoides', 'Monitorizar el electrocardiograma por la disautonomia', 'Poner profilaxis tromboembolica y tratar el DOLOR', 'Ante deterioro tras mejorar, pensar en fluctuacion relacionada con el tratamiento']
    },
    {
      nombre: 'Miastenia gravis: diagnostico',
      color: '#3d5a73',
      definicion: 'Enfermedad autoinmune de la union neuromuscular en la que autoanticuerpos dirigidos contra el receptor de acetilcolina o contra proteinas asociadas producen debilidad fluctuante y fatigable de la musculatura esqueletica.',
      fisiopatologia: 'Los anticuerpos frente al receptor de acetilcolina actuan por tres vias: bloquean el receptor, aceleran su internalizacion y degradacion, y activan el complemento con destruccion de la membrana posinaptica y perdida de sus pliegues. El resultado es un margen de seguridad reducido en la transmision: con el uso repetido, la cantidad de acetilcolina liberada disminuye de forma fisiologica y ya no basta para generar potencial de accion, lo que explica la FATIGABILIDAD. Los anticuerpos frente a MuSK, en cambio, alteran el agrupamiento de los receptores sin activar el complemento de la misma manera, lo que explica su perfil clinico distinto y su peor respuesta a los anticolinesterasicos.',
      epidemiologia: 'Tiene una distribucion bimodal: mujeres jovenes en la segunda y tercera decadas, y varones mayores a partir de la sexta. La mayoria debuta con sintomas oculares y una proporcion importante generaliza en los dos primeros a&#241;os. Se asocia a otras enfermedades autoinmunes, sobre todo tiroideas.',
      factores_riesgo: ['Sexo femenino en la forma de inicio precoz', 'Sexo masculino y edad avanzada en la de inicio tardio', 'TIMOMA', 'Hiperplasia timica', 'Enfermedad tiroidea autoinmune asociada', 'Otras enfermedades autoinmunes: artritis reumatoide, lupus', 'Antecedente familiar de enfermedad autoinmune', 'Tratamiento con penicilamina', 'Tratamiento con inhibidores del punto de control inmunitario', 'Determinados alelos del sistema mayor de histocompatibilidad'],
      clinica: 'FATIGABILIDAD como sello: la debilidad empeora con el uso y a lo largo del dia y mejora con el reposo. La mayoria empieza con PTOSIS y DIPLOPIA. Despues, debilidad bulbar (disartria, voz nasal, disfagia, regurgitacion nasal de liquidos), debilidad proximal de extremidades y debilidad cervical con dificultad para levantar la cabeza. REFLEJOS NORMALES y SIN alteracion sensitiva. Las pupilas NUNCA se afectan, lo que la separa del botulismo.',
      criterios_dx: 'Clinica compatible mas confirmacion con ANTICUERPOS o, si son negativos, con neurofisiologia. La prueba del hielo es un apoyo sencillo para la ptosis. Ver la Figura 3 de Definicion.',
      laboratorio: 'ANTICUERPOS frente al receptor de acetilcolina primero. Si son negativos, anticuerpos frente a MuSK y, si estan disponibles, frente a LRP4. Funcion tiroidea y cribado de otras enfermedades autoinmunes.',
      imagen: 'TOMOGRAFIA DE TORAX A TODOS, sin excepcion, para buscar timoma. Es una de las peticiones que mas se olvida y tiene consecuencias quirurgicas inmediatas.',
      complementarios: 'ESTIMULACION NERVIOSA REPETITIVA buscando decremento superior al 10%. ELECTROMIOGRAMA DE FIBRA UNICA, que es la tecnica mas sensible pero la menos especifica. PRUEBA DEL HIELO sobre el parpado durante unos dos minutos, que es sencilla, segura y util para la ptosis. La prueba con edrofonio ha caido en desuso por sus riesgos.',
      dx_diferencial: 'Sindrome de Lambert-Eaton (que tiene arreflexia y FACILITACION), botulismo (con pupilas midriaticas), oftalmoplejia externa progresiva cronica y otras miopatias mitocondriales, oftalmopatia tiroidea, lesiones del tronco encefalico, sindrome de Miller Fisher, y la miopatia inducida por inhibidores del punto de control inmunitario, que puede solaparse con una miastenia y con una miocarditis.',
      tx_medico: 'Informacion sobre los DESENCADENANTES: infecciones, calor, estres, cirugia y farmacos. Entrega al paciente de una lista escrita de farmacos que debe evitar y de una tarjeta identificativa, que es una medida sencilla y muy util cuando acude a otro centro.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. Lo que importa desde el diagnostico es comprobar la lista de farmacos antes de prescribir cualquier cosa.',
      tx_intervencionista: 'Timectomia segun los hallazgos de la tomografia y el perfil del paciente.',
      criterios_uci: 'Crisis miastenica con insuficiencia respiratoria o debilidad bulbar grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Marcar en la historia y de forma visible la lista de farmacos contraindicados. Ante cualquier prescripcion nueva, comprobarla. Vigilar la deglucion y la funcion respiratoria en cualquier ingreso, incluso si el motivo es otro.',
      seguimiento_ambulatorio: 'Seguimiento con escalas funcionales, no con el titulo de anticuerpos, que no se correlaciona con la gravedad. Vigilancia de la generalizacion en la forma ocular durante los dos primeros a&#241;os, que es cuando ocurre la mayoria.',
      pronostico: 'Con tratamiento adecuado, la mayoria alcanza una situacion funcional buena y una esperanza de vida practicamente normal. Lo que mas condiciona el pronostico es la prevencion de las crisis, y buena parte de ellas son evitables porque las desencadenan una infeccion no tratada o un farmaco mal elegido.',
      algoritmo: ['Buscar FATIGABILIDAD: empeora con el uso y con el paso del dia', 'Comprobar que los reflejos son normales y no hay alteracion sensitiva', 'Explorar ptosis, diplopia, voz nasal y fuerza cervical', 'Hacer la prueba del hielo si hay ptosis', 'Pedir anticuerpos frente al receptor de acetilcolina', 'Si son negativos, pedir anti-MuSK y valorar anti-LRP4', 'Si los anticuerpos son negativos, pedir estimulacion repetitiva y fibra unica', 'Pedir TOMOGRAFIA DE TORAX a todos para buscar timoma', 'Pedir funcion tiroidea y cribar otras enfermedades autoinmunes', 'Entregar al paciente la lista escrita de farmacos que debe evitar']
    },
    {
      nombre: 'Miastenia gravis: tratamiento',
      color: '#3f6b52',
      definicion: 'Estrategia terapeutica escalonada que combina tratamiento sintomatico, inmunosupresion, timectomia cuando esta indicada y terapias dirigidas en la enfermedad refractaria.',
      fisiopatologia: 'La piridostigmina inhibe la acetilcolinesterasa y prolonga la permanencia de la acetilcolina en la hendidura sinaptica, lo que compensa en parte la reduccion del margen de seguridad; es puramente sintomatica y no modifica la enfermedad. Los corticoides y los ahorradores actuan sobre la produccion de autoanticuerpos, con un retardo de meses en el caso de los ahorradores. El rituximab depleciona linfocitos B. Los inhibidores del complemento bloquean la via final que destruye la membrana posinaptica, y los bloqueantes del receptor Fc neonatal aceleran la degradacion de la inmunoglobulina G circulante, incluidos los autoanticuerpos.',
      epidemiologia: 'La mayoria de los pacientes alcanza un control aceptable con corticoide y un ahorrador. Una minoria queda como refractaria y es el grupo en el que se han incorporado los tratamientos dirigidos de los ultimos a&#241;os.',
      factores_riesgo: ['Anticuerpos frente a MuSK, con peor respuesta a la piridostigmina', 'Timoma asociado', 'Inicio tardio', 'Predominio bulbar y respiratorio', 'Crisis previa', 'Comorbilidad que limita el uso de corticoides', 'Mala adherencia', 'Infecciones de repeticion', 'Retirada rapida de la inmunosupresion', 'Prescripcion de farmacos contraindicados'],
      clinica: 'El objetivo del tratamiento no es normalizar los anticuerpos sino que el paciente este asintomatico o con sintomas minimos y sin efectos adversos limitantes. La respuesta se sigue con escalas funcionales.',
      criterios_dx: 'No aplica: es la fase terapeutica. Ver la Figura 3 de Definicion.',
      laboratorio: 'Antes de la inmunosupresion: hemograma, funcion hepatica, serologias de hepatitis B y C y de VIH, cribado de tuberculosis latente y actividad de tiopurina metiltransferasa antes de la azatioprina. Durante el tratamiento, controles periodicos segun el farmaco. Con corticoide, glucemia, presion arterial, densidad osea y profilaxis osea.',
      imagen: 'Tomografia de torax basal. Control tras la timectomia si habia timoma.',
      complementarios: 'Escala funcional en cada revision para medir la respuesta. Vacunacion actualizada ANTES de iniciar la inmunosupresion, y vacunas inactivadas durante ella. Con inhibidores del complemento, vacunacion antimeningococica obligada, porque aumentan de forma marcada el riesgo de infeccion meningococica.',
      dx_diferencial: 'Ante falta de respuesta: mala adherencia, dosis insuficiente, farmaco desencadenante no identificado, infeccion intercurrente, diagnostico erroneo y coexistencia de otra enfermedad neuromuscular.',
      tx_medico: 'Educacion sobre desencadenantes. Evitar el calor extremo y el sobreesfuerzo. Planificacion de la cirugia y del embarazo con el equipo. Rehabilitacion adaptada, sin llegar a la fatiga.',
      tx_farmacologico: 'PIRIDOSTIGMINA sintomatica, ajustando dosis segun sintomas. CORTICOIDE, empezando a dosis BAJA y subiendo despacio, porque el inicio a dosis alta puede producir un empeoramiento transitorio grave en las primeras semanas. AHORRADORES: azatioprina, micofenolato o tacrolimus, que tardan meses en actuar y permiten bajar el corticoide. REFRACTARIA: rituximab, de eleccion si los anticuerpos son frente a MuSK; inhibidores del complemento y bloqueantes del receptor Fc neonatal en la forma con anticuerpos frente al receptor de acetilcolina.',
      tx_intervencionista: 'TIMECTOMIA: indicada siempre si hay TIMOMA, por el propio tumor. Y en la miastenia generalizada con anticuerpos frente al receptor de acetilcolina y de inicio precoz sin timoma, un ensayo aleatorizado demostro que mejora los resultados clinicos y reduce la necesidad de corticoide. No esta indicada en la forma puramente ocular ni en la asociada a MuSK.',
      criterios_uci: 'Crisis miastenica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante una cirugia programada, planificarla con el equipo: optimizar el tratamiento antes, evitar bloqueantes neuromusculares de accion prolongada, y prever vigilancia respiratoria posoperatoria prolongada. Es una situacion de riesgo alto de crisis.',
      seguimiento_ambulatorio: 'Revision con escala funcional. Retirada MUY lenta del corticoide, porque la reduccion rapida es un desencadenante clasico de crisis. Vigilancia de la toxicidad del inmunosupresor y del riesgo infeccioso.',
      pronostico: 'Bueno con tratamiento adecuado. La mortalidad ha caido de forma drastica en las ultimas decadas gracias al soporte ventilatorio y a la inmunoterapia, y hoy la mayoria de los pacientes lleva una vida normal o casi normal.',
      algoritmo: ['Iniciar piridostigmina como tratamiento sintomatico', 'A&#241;adir corticoide empezando a dosis BAJA y subiendo despacio', 'Prever el empeoramiento transitorio de las primeras semanas', 'A&#241;adir un ahorrador, sabiendo que tarda meses en actuar', 'Hacer el cribado infeccioso y vacunar ANTES de inmunosuprimir', 'Valorar timectomia: siempre si hay timoma', 'Valorar timectomia tambien en la generalizada precoz sin timoma', 'En la refractaria, rituximab si los anticuerpos son anti-MuSK', 'Valorar inhibidor del complemento o anti-FcRn en la anti-receptor', 'Bajar el corticoide MUY despacio y seguir con escalas funcionales']
    },
    {
      nombre: 'Crisis miastenica y crisis colinergica',
      color: '#8a6a1f',
      definicion: 'Empeoramiento agudo de la miastenia que produce insuficiencia respiratoria o debilidad bulbar grave con necesidad de soporte ventilatorio (crisis miastenica), frente al cuadro producido por exceso de anticolinesterasico (crisis colinergica), hoy raro.',
      fisiopatologia: 'En la crisis miastenica, un desencadenante (con mas frecuencia una infeccion) amplifica el deficit de transmision hasta comprometer el diafragma y la musculatura bulbar. La debilidad bulbar y la respiratoria se potencian: el paciente no maneja secreciones, aspira, y la neumonia agrava a su vez la debilidad. En la crisis colinergica, el exceso de acetilcolina produce despolarizacion mantenida de la placa motora, que paradojicamente bloquea la transmision, y a&#241;ade los efectos muscarinicos del exceso colinergico en el resto del organismo.',
      epidemiologia: 'Una parte apreciable de los pacientes con miastenia sufre al menos una crisis, con mas frecuencia en los primeros a&#241;os de la enfermedad. La causa desencadenante mas frecuente es la INFECCION, y una proporcion relevante de las crisis es evitable porque la desencadena un farmaco contraindicado.',
      factores_riesgo: ['INFECCION intercurrente, sobre todo respiratoria', 'Cirugia, especialmente la timectomia y la cirugia mayor', 'Embarazo y parto', 'Inicio de corticoide a dosis alta', 'Retirada rapida de la inmunosupresion', 'FARMACOS: fluoroquinolonas, macrolidos, aminoglucosidos, betabloqueantes, magnesio intravenoso, bloqueantes neuromusculares', 'Contrastes yodados', 'Enfermedad predominantemente bulbar', 'Timoma', 'Anticuerpos frente a MuSK', 'Calor extremo', 'Mala adherencia al tratamiento'],
      clinica: 'CRISIS MIASTENICA: disnea progresiva, taquipnea, uso de musculatura accesoria, habla entrecortada, incapacidad para levantar la cabeza, disfagia con acumulo de secreciones y ansiedad. CRISIS COLINERGICA: a&#241;ade sintomas MUSCARINICOS (diarrea, colicos, sudoracion, lagrimeo, sialorrea, broncorrea, incontinencia), MIOSIS, bradicardia y fasciculaciones.',
      criterios_dx: 'Clinico y funcional. La distincion entre ambas se apoya en los sintomas muscarinicos, las pupilas y la dosis de anticolinesterasico. Ante la duda, se suspende la piridostigmina y se observa. Ver la Figura 4 de Definicion.',
      laboratorio: 'Estudio del desencadenante: hemograma, proteina C reactiva, cultivos, radiografia de torax, sedimento y urocultivo. Gasometria, sabiendo que la hipercapnia es un signo TARDIO y que no se debe esperar a ella para decidir.',
      imagen: 'Radiografia de torax para buscar neumonia o atelectasia, que son a la vez desencadenante y consecuencia.',
      complementarios: 'CAPACIDAD VITAL Y PRESIONES MAXIMAS seriadas, cada pocas horas. Valoracion de la deglucion antes de permitir la ingesta oral. Monitorizacion continua.',
      dx_diferencial: 'Neumonia, embolia pulmonar, insuficiencia cardiaca, crisis colinergica, y una miopatia o polineuropatia del enfermo critico en el paciente que lleva tiempo ingresado.',
      tx_medico: 'INGRESO EN UNIDAD DE CRITICOS y soporte ventilatorio precoz, sin esperar a la gasometria. Buscar y tratar el DESENCADENANTE, que es lo que mas cambia la evolucion. Retirar todo farmaco que pueda estar contribuyendo. Fisioterapia respiratoria y manejo de secreciones.',
      tx_farmacologico: 'INMUNOGLOBULINAS INTRAVENOSAS o PLASMAFERESIS, que son los tratamientos de accion rapida. Tratamiento antibiotico del desencadenante infeccioso, eligiendo con cuidado el antibiotico. Se suele SUSPENDER la piridostigmina durante la ventilacion mecanica, porque aumenta las secreciones y ya no aporta beneficio con el paciente ventilado.',
      tx_intervencionista: 'Intubacion y ventilacion mecanica. Traqueostomia si se prolonga. Ventilacion no invasiva en casos seleccionados y precoces, con vigilancia estrecha y sin retrasar la intubacion si hay debilidad bulbar, porque el riesgo es la aspiracion.',
      criterios_uci: 'Es por definicion un cuadro de cuidados criticos: capacidad vital en descenso, cumplimiento de la regla de 20, 30 y 40, debilidad bulbar con incapacidad para manejar la saliva, o cualquier signo clinico de claudicacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Extubar solo con criterios de fuerza recuperados y no solo con criterios gasometricos, porque el fracaso de extubacion es frecuente en estos pacientes. Reintroducir la piridostigmina de forma progresiva. Revisar toda la medicacion antes del alta.',
      seguimiento_ambulatorio: 'Revision precoz tras el alta. Identificar y documentar el desencadenante para prevenirlo. Reforzar la educacion sobre farmacos y sobre la consulta precoz ante infecciones.',
      pronostico: 'La mortalidad de la crisis miastenica ha caido de forma notable con los cuidados criticos modernos. La recuperacion es habitual, y lo que mas influye en el desenlace es la precocidad del soporte ventilatorio y el control del desencadenante.',
      algoritmo: ['Reconocer la claudicacion por la CLINICA, no por la gasometria', 'Medir capacidad vital y presiones maximas de inmediato', 'Aplicar la regla de 20, 30 y 40', 'Intubar antes si hay debilidad bulbar con secreciones', 'Ingresar en unidad de criticos', 'Buscar el DESENCADENANTE: infeccion, cirugia, farmaco nuevo', 'Retirar todo farmaco contraindicado', 'Iniciar inmunoglobulinas o plasmaferesis', 'Suspender la piridostigmina durante la ventilacion', 'Ante la duda con la crisis colinergica, suspender y observar']
    },
    {
      nombre: 'Lambert-Eaton, botulismo y el diferencial de la debilidad aguda',
      color: '#5a6b2e',
      definicion: 'Trastornos PRESINAPTICOS de la union neuromuscular que comparten sintomas con la miastenia pero se manejan de forma completamente distinta, junto con el resto del diferencial de la debilidad aguda generalizada.',
      fisiopatologia: 'En el sindrome de Lambert-Eaton, autoanticuerpos dirigidos contra los canales de calcio dependientes de voltaje de tipo P/Q en la terminal presinaptica reducen la entrada de calcio y con ella la liberacion de acetilcolina. Como la contraccion sostenida acumula calcio en la terminal, la fuerza y los reflejos MEJORAN tras el ejercicio: es el fenomeno de facilitacion, opuesto a lo que ocurre en la miastenia. En el botulismo, la toxina escinde las proteinas del complejo de fusion vesicular e impide de forma irreversible la liberacion de acetilcolina, lo que afecta tambien a las sinapsis colinergicas autonomas y explica las pupilas midriaticas, la boca seca y el estre&#241;imiento.',
      epidemiologia: 'El sindrome de Lambert-Eaton es raro y se asocia a carcinoma microcitico de pulmon en mas de la mitad de los casos, con frecuencia en fumadores mayores. El botulismo es muy raro pero exige reconocimiento inmediato: alimentario por conservas caseras, por heridas en usuarios de drogas por via parenteral, e iatrogenico por toxina botulinica.',
      factores_riesgo: ['Tabaquismo y carcinoma microcitico para el Lambert-Eaton', 'Otras enfermedades autoinmunes', 'Consumo de conservas caseras mal procesadas', 'Uso de drogas por via parenteral, sobre todo heroina negra', 'Inyeccion de toxina botulinica con fines esteticos o terapeuticos', 'Edad avanzada', 'Exposicion ocupacional o alimentaria en brotes', 'Inmunosupresion', 'Antecedente de neoplasia', 'Consumo de miel en el lactante para el botulismo infantil'],
      clinica: 'LAMBERT-EATON: debilidad PROXIMAL de piernas, arreflexia, boca seca muy frecuente y precoz, y FACILITACION (la fuerza y los reflejos mejoran tras la contraccion sostenida). BOTULISMO: paralisis DESCENDENTE simetrica que empieza por los pares craneales (diplopia, ptosis, disartria, disfagia), con PUPILAS MIDRIATICAS y arreactivas, boca seca, estre&#241;imiento, SIN fiebre y SIN alteracion sensitiva.',
      criterios_dx: 'LAMBERT-EATON: anticuerpos frente al canal de calcio y estudio neurofisiologico con INCREMENTO tras ejercicio breve. BOTULISMO: clinico, con confirmacion por deteccion de toxina, que NO debe retrasar la antitoxina.',
      laboratorio: 'Anticuerpos frente al canal de calcio dependiente de voltaje. En el botulismo, deteccion de toxina en suero, heces o alimento sospechoso, y cultivo de la herida si procede.',
      imagen: 'TOMOGRAFIA DE TORAX en el Lambert-Eaton buscando carcinoma microcitico, que se REPITE periodicamente aunque la primera sea negativa, porque el tumor puede aparecer despues del cuadro neurologico. Tomografia por emision de positrones si el cribado convencional no lo encuentra.',
      complementarios: 'Estudio neurofisiologico con estimulacion de alta frecuencia o tras ejercicio breve, que muestra INCREMENTO marcado en el Lambert-Eaton, al reves que el decremento de la miastenia. Notificacion inmediata a salud publica en el botulismo.',
      dx_diferencial: 'El diferencial completo de la debilidad aguda generalizada: sindrome de Guillain-Barre, miastenia, compresion medular y mielitis, poliomielitis y enterovirus, porfiria aguda intermitente, paralisis periodica hipopotasemica, hipofosfatemia grave, neuropatia y miopatia del enfermo critico, rabdomiolisis, intoxicacion por organofosforados y paralisis por garrapata.',
      tx_medico: 'En el Lambert-Eaton, el tratamiento del TUMOR asociado suele mejorar el cuadro neurologico y es prioritario. En el botulismo, soporte respiratorio y cuidados intensivos, sabiendo que la recuperacion es lenta porque exige regenerar terminales sinapticas.',
      tx_farmacologico: 'LAMBERT-EATON: amifampridina (3,4-diaminopiridina), que prolonga la despolarizacion presinaptica y aumenta la liberacion de acetilcolina; piridostigmina como coadyuvante; e inmunoterapia en las formas no paraneoplasicas. BOTULISMO: ANTITOXINA lo antes posible, cuya eficacia depende de la precocidad porque solo neutraliza la toxina circulante y no la ya unida. Los aminoglucosidos estan contraindicados porque agravan el bloqueo.',
      tx_intervencionista: 'Soporte ventilatorio prolongado en el botulismo. Tratamiento oncologico del tumor en el Lambert-Eaton paraneoplasico. Desbridamiento de la herida en el botulismo por herida.',
      criterios_uci: 'Insuficiencia respiratoria, que en el botulismo puede requerir ventilacion durante semanas o meses.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el botulismo, notificacion urgente a salud publica y busqueda de otros casos expuestos a la misma fuente. Evitar aminoglucosidos y magnesio. En el Lambert-Eaton, coordinar el estudio oncologico sin demora.',
      seguimiento_ambulatorio: 'En el Lambert-Eaton, REPETIR el cribado tumoral de forma periodica durante al menos dos a&#241;os aunque el inicial sea negativo. En el botulismo, rehabilitacion prolongada.',
      pronostico: 'En el Lambert-Eaton depende sobre todo del tumor asociado. En el botulismo la mortalidad ha caido mucho con los cuidados intensivos, aunque la recuperacion se mide en meses y exige ventilacion prolongada en los casos graves.',
      algoritmo: ['Ante debilidad proximal con arreflexia y boca seca, pensar en Lambert-Eaton', 'Buscar FACILITACION: la fuerza mejora tras la contraccion sostenida', 'Pedir anticuerpos frente al canal de calcio', 'Confirmar con estudio neurofisiologico buscando INCREMENTO', 'Hacer cribado tumoral dirigido a carcinoma microcitico y REPETIRLO', 'Ante paralisis DESCENDENTE con pupilas midriaticas, pensar en botulismo', 'Comprobar la ausencia de fiebre y de alteracion sensitiva', 'Administrar la ANTITOXINA sin esperar la confirmacion de laboratorio', 'Notificar el caso a salud publica y buscar otros expuestos', 'Evitar aminoglucosidos y magnesio, que agravan el bloqueo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En este tema los errores tienen consecuencias inmediatas: se manda a casa a un paciente con debilidad ascendente porque la puncion lumbar salio normal, se espera a la gasometria para intubar, se dan corticoides en un Guillain-Barre, o se prescribe una fluoroquinolona a un miastenico. Lo que sigue es la lista que evita los cuatro.',
    parametros: ['No descartar un Guillain-Barre por un liquido o un electroneurograma normales al principio', 'INGRESAR a todo paciente con debilidad ascendente, aunque camine', 'Medir capacidad vital y presiones maximas cada 4 a 6 horas en la fase de progresion', 'Valorar la TENDENCIA de la capacidad vital, no el valor aislado', 'No esperar a la gasometria: la hipercapnia es un signo TARDIO', 'Intubar antes si hay debilidad bulbar y no maneja la saliva', 'Dar inmunoglobulinas O plasmaferesis, nunca las dos juntas', 'NO dar corticoides en el sindrome de Guillain-Barre', 'Monitorizar el electrocardiograma por la disautonomia y evitar maniobras vagales', 'Pedir TOMOGRAFIA DE TORAX a todo paciente con miastenia, para buscar timoma', 'Comprobar la lista de farmacos contraindicados antes de prescribir a un miastenico', 'Iniciar el corticoide de la miastenia a dosis BAJA y subir despacio'],
    criterios_uci_general: 'Capacidad vital menor de 20 mL/kg o en descenso rapido, presion inspiratoria maxima con valor absoluto menor de 30 cmH2O o espiratoria menor de 40, debilidad bulbar con incapacidad para manejar las secreciones, disautonomia con arritmias o inestabilidad hemodinamica, progresion rapida de la debilidad, y crisis miastenica establecida. En el botulismo, la ventilacion puede prolongarse semanas o meses.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Primaria: en el sindrome de Guillain-Barre, higiene alimentaria para reducir la infeccion por <em>Campylobacter</em>, y en el botulismo, procesado correcto de las conservas caseras y no dar miel a lactantes. En la miastenia, la prevencion de las crisis es donde mas se gana: vacunacion antigripal y antineumococica, tratamiento precoz de las infecciones, planificacion cuidadosa de la cirugia y del embarazo, retirada MUY lenta de la inmunosupresion y, sobre todo, comprobar la lista de farmacos contraindicados antes de cada prescripcion, porque una proporcion relevante de las crisis es iatrogenica y por tanto evitable. Secundaria: entrega al paciente de una lista escrita y de una tarjeta identificativa, y cribado tumoral repetido en el sindrome de Lambert-Eaton. Terciaria: rehabilitacion prolongada y manejo de la fatiga y del dolor residuales, que son las secuelas mas frecuentes del Guillain-Barre.'
  }
};

export const compCites = {
  'Sindrome de Guillain-Barre: diagnostico': [1, 4, 16],
  'Guillain-Barre: tratamiento y vigilancia respiratoria': [1, 3, 5, 6, 7],
  'Miastenia gravis: diagnostico': [2, 9],
  'Miastenia gravis: tratamiento': [2, 8, 10, 11],
  'Crisis miastenica y crisis colinergica': [2, 12, 14],
  'Lambert-Eaton, botulismo y el diferencial de la debilidad aguda': [13, 15]
};
export const estigmasTitulo = 'Signos y pistas en la debilidad neuromuscular aguda';
export const estigmas = [
  { s: 'Debilidad ascendente con arreflexia', p: 'Guillain-Barre', photo: null, desc: 'La combinacion de progresion ascendente, simetria y perdida precoz de los reflejos es el retrato del sindrome. Si ademas hay antecedente de diarrea o de infeccion respiratoria en las semanas previas, la sospecha es muy alta.' },
  { s: 'Dolor de espalda intenso antes de la debilidad', p: 'Muy frecuente y despista', photo: null, desc: 'Es una de las presentaciones que mas retrasan el diagnostico, porque el paciente consulta por lumbalgia y se va a casa con analgesia. Se debe a la afectacion radicular y precede a la debilidad con frecuencia.' },
  { s: 'Liquido cefalorraquideo normal en la primera semana', p: 'No descarta nada', photo: null, desc: 'La disociacion albuminocitologica tarda dias en aparecer y falta en una proporcion importante de los pacientes al principio. Un liquido normal con clinica compatible no autoriza a suspender la vigilancia.' },
  { s: 'Mas de 50 celulas en el liquido', p: 'Obliga a replantear', photo: null, desc: 'Una pleocitosis marcada no encaja con un Guillain-Barre tipico y obliga a pensar en VIH, enfermedad de Lyme, linfoma o sarcoidosis, que se manejan de otra manera.' },
  { s: 'Bradicardia extrema con una maniobra vagal', p: 'Disautonomia', photo: null, desc: 'La disautonomia es una de las dos causas de muerte del sindrome, junto con la insuficiencia respiratoria. Obliga a monitorizacion continua y a extremar la precaucion con aspiracion traqueal y con farmacos bradicardizantes.' },
  { s: 'No puede contar hasta 20 de corrido', p: 'Signo de cabecera', photo: null, desc: 'Es una forma rapida y sin aparatos de estimar la capacidad vital. Junto con el habla entrecortada, el uso de musculatura accesoria y la incapacidad de levantar la cabeza, anuncia la claudicacion antes que ninguna gasometria.' },
  { s: 'Ptosis que mejora tras aplicar hielo', p: 'Miastenia', photo: null, desc: 'El frio enlentece la degradacion de la acetilcolina y mejora la transmision. Dos minutos de hielo sobre el parpado son una prueba barata, segura y con buen rendimiento, que ademas puede hacerse en la propia consulta.' },
  { s: 'Debilidad que empeora a lo largo del dia', p: 'Fatigabilidad', photo: null, desc: 'Es el sello de la miastenia: el paciente esta bien por la ma&#241;ana y peor por la tarde, y mejora con el reposo. Con reflejos normales y sin alteracion sensitiva, el cuadro se separa bien del Guillain-Barre.' },
  { s: 'Voz nasal y regurgitacion de liquidos por la nariz', p: 'Debilidad bulbar', photo: null, desc: 'Indica afectacion de la musculatura faringea y palatina. Es el dato que mas adelanta la decision de intubar, porque el riesgo aqui no es la fatiga respiratoria sino la aspiracion.' },
  { s: 'Pupilas midriaticas y arreactivas', p: 'Botulismo', photo: null, desc: 'Las pupilas NUNCA se afectan en la miastenia, de modo que una midriasis arreactiva en un paciente con paralisis descendente y boca seca es el dato que delata el botulismo y obliga a administrar antitoxina sin esperar confirmacion.' },
  { s: 'La fuerza MEJORA tras la contraccion sostenida', p: 'Lambert-Eaton', photo: null, desc: 'Es el fenomeno de facilitacion, opuesto al de la miastenia: la contraccion acumula calcio en la terminal presinaptica y aumenta la liberacion de acetilcolina. Obliga a buscar un carcinoma microcitico y a repetir el cribado.' },
  { s: 'Boca seca en un fumador con debilidad proximal', p: 'Pista de Lambert-Eaton', photo: null, desc: 'La sequedad de boca es un sintoma autonomo precoz y muy frecuente en este sindrome, y se pasa por alto porque parece banal. En un fumador mayor con debilidad proximal, es una pista de primer orden.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Escala EGRIS de riesgo respiratorio (calculadora disponible)': [3],
  'Regla de 20, 30 y 40 (calculadora disponible)': [14],
  'Escala MG-ADL (calculadora disponible)': [12],
  'Clasificacion de la Fundacion Americana de Miastenia Gravis': [2],
  'Subtipos del sindrome de Guillain-Barre': [1, 4],
  'Criterios de crisis miastenica frente a colinergica (calculadora disponible)': [2, 14]
};
export const escalaCalc = {
  'Escala EGRIS de riesgo respiratorio (calculadora disponible)': 'egris',
  'Regla de 20, 30 y 40 (calculadora disponible)': 'regla-20-30-40',
  'Escala MG-ADL (calculadora disponible)': 'mg-adl',
  'Criterios de crisis miastenica frente a colinergica (calculadora disponible)': 'crisis-miastenica'
};
export const compGroups = [
  { name: 'Guillain-Barre', items: ['Sindrome de Guillain-Barre: diagnostico', 'Guillain-Barre: tratamiento y vigilancia respiratoria'] },
  { name: 'Miastenia gravis', items: ['Miastenia gravis: diagnostico', 'Miastenia gravis: tratamiento', 'Crisis miastenica y crisis colinergica'] },
  { name: 'El diferencial', items: ['Lambert-Eaton, botulismo y el diferencial de la debilidad aguda'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el sindrome de Guillain-Barre, separado en diagnostico y manejo porque son dos problemas distintos: el primero es de reconocer un cuadro cuyas pruebas pueden salir normales al principio, y el segundo es casi entero de vigilancia respiratoria. Las tres siguientes son la miastenia: como se diagnostica, como se trata en escalones y que hacer cuando se descompensa. Y la ultima recoge los dos trastornos presinapticos que comparten sintomas con la miastenia y no comparten nada mas, junto con el resto del diferencial de la debilidad aguda.';
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
    { title: 'DONDE ESTA', sub: 'Reflejos, pupilas, direccion', color: '#8c3a5c', target: 'complicaciones', leaves: [
      { title: 'Ascendente y arreflexica', sub: 'Guillain-Barre', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Fatigable con reflejos normales', sub: 'Miastenia', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Mejora con el ejercicio', sub: 'Lambert-Eaton', color: '#5a6b2e', target: 'complicaciones' },
      { title: 'Descendente con midriasis', sub: 'Botulismo', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'VIGILAR', sub: 'La respiracion, no la gasometria', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Capacidad vital seriada', sub: 'Cada 4 a 6 horas', color: '#8c3a34', target: 'diagnostico' },
      { title: '20, 30 y 40', sub: 'Los tres umbrales', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Contar hasta 20', sub: 'Signo de cabecera', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Debilidad bulbar', sub: 'Intubar antes', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'TRATAR', sub: 'Y lo que NO se hace', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Inmunoglobulinas o plasmaferesis', sub: 'Nunca las dos', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sin corticoides en el GBS', sub: 'Si en la forma cronica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Tomografia de torax', sub: 'A toda miastenia', color: '#3d5a73', target: 'complicaciones' },
      { title: 'La lista de farmacos', sub: 'Comprobar antes de prescribir', color: '#8a6a1f', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [3, 12, 14], imagen: [2, 8] };
export const clasificacionCite = [1, 2, 3, 12];
export const seguimientoCite = [1, 2, 14];
