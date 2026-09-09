// topics/estado-de-choque/content.js: Estado de choque, enfoque integrador.
// Cubre DOS items del temario, de dos clusters distintos del bloque IV (Medicina Critica):
// "Falla cardiovascular / estado de choque (enfoque integrador)" del cluster Fallas organicas, y
// "Estado de choque (hipovolemico y distributivo)" del cluster Choque, sepsis y soporte vital.
//
// DELIMITACION: aqui esta el ENFOQUE del choque como sindrome (reconocerlo, clasificarlo por
// perfil y reanimarlo). El detalle de cada causa vive en su tema: `sepsis`, `vasopresores-sedantes`,
// `insuficiencia-respiratoria-sdra`, y el marco general en `disfuncion-organica-multiple`.
//
// Fuentes verificadas en Bibliografia/ ([[feedback-verificar-edicion-guias]]): manual ATLS 10.a
// edicion en espa&#241;ol (la tabla de grados de hemorragia se transcribio del PDF, no de memoria),
// Surviving Sepsis Campaign 2026, declaracion cientifica de la AHA sobre choque cardiogenico de
// 2017, guia AHA/ACC de embolia pulmonar de 2026 y parametro de practica de anafilaxia de 2020.
//
// Solo `diagnostico`, `clasificacion`, `complicaciones` y `seguimiento_intrahospitalario` van
// ANIDADOS dentro de `export const content = {...}`. `factores_riesgo` y `algoritmo` son ARRAY.
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash. Texto sin acentos.

export const meta = {
  id: 'estado-de-choque',
  titulo: 'Estado de Choque',
  subtitulo: 'Modulo 69 · Medicina Interna',
  accent: '#8c2e3a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const reconocerHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c2e3a;border-radius:8px;padding:5px 9px;background:#8c2e3a12;margin-bottom:6px;">
    <strong style="color:#8c2e3a;">El choque no se define por la tension arterial sino por la HIPOPERFUSION.</strong> <span style="color:var(--ink-dim);">Un tercio largo de los pacientes en choque tiene la tension todavia normal cuando llega, porque la vasoconstriccion la sostiene hasta que ya no puede.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:92px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a3f2e22;border:1px solid #7a3f2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a3f2e;">LA PIEL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Frialdad, palidez, <strong style="color:var(--ink);">MOTEADO</strong> de rodillas y relleno capilar lento. Es la ventana mas barata al estado de la microcirculacion y tiene valor pronostico demostrado. En el choque distributivo, en cambio, la piel puede estar CALIENTE, y eso confunde.</div>
    </div>
    <div style="display:grid;grid-template-columns:92px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">EL RI&#209;ON</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">OLIGURIA</strong>, por debajo de 0.5 mL/kg/h. Es el organo que primero avisa y el mas facil de medir, y sin embargo se pierde constantemente porque nadie sonda ni cuantifica hasta que el paciente ya lleva horas sin orinar.</div>
    </div>
    <div style="display:grid;grid-template-columns:92px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a8c;">EL CEREBRO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inquietud, agitacion, desorientacion y despues somnolencia. La <strong style="color:var(--ink);">AGITACION</strong> del paciente en choque se confunde con ansiedad y se trata con sedantes, que es exactamente lo que no hay que hacer.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">El LACTATO cierra el circulo.</strong> Por encima de 2 mmol/L apoya hipoperfusion, aunque no es especifico: sube tambien con adrenergicos, insuficiencia hepatica, convulsiones y metformina. Lo que mas pronostico aporta no es la cifra sino su <strong>ACLARAMIENTO</strong> con el tratamiento.
    </div>
    <div style="border:1px solid #8c2e3a;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c2e3a;">Dos trampas de la tension arterial.</strong> La primera, el <strong>choque NORMOTENSO</strong>: hipoperfusion con tension conservada. La segunda, la tension "normal" del hipertenso cronico: 110/70 en quien vive en 170/90 puede ser una hipotension grave. Lo que importa es el cambio respecto a SU basal.
    </div>
  </div>
</div>`;

const perfilesHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c2e3a;border-radius:8px;padding:5px 9px;background:#8c2e3a12;margin-bottom:6px;">
    <strong style="color:#8c2e3a;">Tres preguntas clasifican cualquier choque:</strong> <span style="color:var(--ink-dim);">&#191;falta VOLUMEN, falla la BOMBA, o se ha perdido el TONO? Y una cuarta que hay que descartar siempre porque se resuelve con las manos: &#191;hay algo que OBSTRUYE?</span>
  </div>
  <div style="overflow-x:auto;margin-bottom:6px;">
  <table style="width:100%;border-collapse:collapse;font-size:8.5px;">
    <tr style="background:#8c2e3a15;">
      <th style="border:1px solid var(--line);padding:3px 5px;text-align:left;">Perfil</th>
      <th style="border:1px solid var(--line);padding:3px 5px;">Precarga</th>
      <th style="border:1px solid var(--line);padding:3px 5px;">Gasto</th>
      <th style="border:1px solid var(--line);padding:3px 5px;">Resistencias</th>
      <th style="border:1px solid var(--line);padding:3px 5px;">Piel</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#7a3f2e;">HIPOVOLEMICO</strong><br><span style="color:var(--ink-dim);">Hemorragia, deshidratacion, tercer espacio</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Baja</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Bajo</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Altas</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Fria</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3f6b52;">DISTRIBUTIVO</strong><br><span style="color:var(--ink-dim);">Septico, anafilactico, neurogenico</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Baja o normal</td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong>Alto</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3f6b52;">BAJAS</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong>Caliente</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3d5a73;">CARDIOGENICO</strong><br><span style="color:var(--ink-dim);">Infarto, arritmia, valvulopatia aguda</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3d5a73;">ALTA</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Bajo</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Altas</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Fria</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#6b4a8c;">OBSTRUCTIVO</strong><br><span style="color:var(--ink-dim);">Neumotorax, taponamiento, embolia</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Alta</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Bajo</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Altas</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Fria</td>
    </tr>
  </table>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">La ecografia a pie de cama contesta las tres preguntas en minutos.</strong> Corazon (contractilidad y dilatacion del ventriculo derecho), vena cava (volumen), pulmon (lineas B, deslizamiento, derrame) y abdomen (liquido libre, aorta). Es lo que mas ha cambiado el manejo del choque en la ultima decada.
    </div>
    <div style="border:1px solid #8c2e3a;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c2e3a;">Y una advertencia que evita errores graves:</strong> los perfiles se MEZCLAN. Un choque septico con miocardiopatia asociada, un politraumatizado con neumotorax y hemorragia, o un infarto con hipovolemia por vomitos. Encontrar una causa no autoriza a dejar de buscar las demas.
    </div>
  </div>
</div>`;

const reanimarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;margin-bottom:6px;">
    <strong style="color:#8a6a1f;">La pregunta de la reanimacion no es cuanto volumen dar, sino cuando PARAR.</strong> <span style="color:var(--ink-dim);">Solo la mitad de los pacientes en choque responde a un bolo de volumen, y al resto se le a&#241;ade edema sin ganar nada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">FLUIDOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CRISTALOIDES BALANCEADOS</strong> en bolos, reevaluando despues de cada uno. La elevacion pasiva de las piernas es la prueba de respuesta a volumen mas util y no cuesta nada: es un bolo reversible. La presion venosa central <strong style="color:#8c3a34;">NO predice</strong> la respuesta a volumen y no debe usarse para eso.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c2e3a22;border:1px solid #8c2e3a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c2e3a;">VASOACTIVOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">NORADRENALINA</strong> es el vasopresor de primera linea. No hay que esperar a "terminar el volumen" para empezarla: iniciarla pronto acorta el tiempo en hipotension y permite dar MENOS fluido. Se puede empezar por via periferica mientras se canaliza una central.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">OBJETIVOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Tension arterial media en torno a <strong style="color:var(--ink);">65 mmHg</strong>, individualizada segun el basal del paciente. Y por encima de ese numero, los objetivos que de verdad importan: <strong>diuresis, nivel de conciencia, temperatura y relleno de la piel, y aclaramiento del lactato</strong>.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Y lo que ordena todo lo anterior: la CAUSA.</strong> El mejor vasopresor no compensa un neumotorax a tension sin drenar, un taponamiento sin puncionar, una hemorragia sin controlar o un foco septico sin drenar. En el choque, la reanimacion compra TIEMPO; lo que salva al paciente es corregir el mecanismo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El choque es un fallo circulatorio agudo y generalizado en el que el aporte de oxigeno no cubre las necesidades del tejido. Su definicion es por tanto de <strong>perfusion</strong>, no de tension arterial, y esa distincion no es academica: una parte relevante de los pacientes en choque llega con la tension todavia normal, sostenida por la vasoconstriccion hasta que esta claudica.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: reconocerlo.</strong></p>
<p style="margin:0 0 12px;">Tres ventanas clinicas cuentan lo que pasa en la microcirculacion sin necesidad de aparatos: la <strong>piel</strong>, el <strong>ri&#241;on</strong> y el <strong>cerebro</strong>. El lactato cierra el circulo, con la advertencia de que lo que aporta pronostico es su aclaramiento y no la cifra aislada.</p>
${figBlock('Figura 1', 'Reconocer el choque: tres ventanas y dos trampas de la tension', reconocerHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: clasificarlo.</strong></p>
<p style="margin:0 0 12px;">Tres preguntas bastan (&#191;falta volumen, falla la bomba, se ha perdido el tono?) mas una cuarta que hay que descartar siempre porque se resuelve con las manos: &#191;hay algo que obstruye? La ecografia a pie de cama contesta las cuatro en minutos, y conviene recordar que los perfiles se <strong>mezclan</strong>.</p>
${figBlock('Figura 2', 'Los cuatro perfiles hemodinamicos y como se separan', perfilesHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: reanimarlo.</strong></p>
<p style="margin:0 0 12px;">La pregunta relevante no es cuanto volumen dar sino cuando parar, porque solo la mitad de los pacientes responde a un bolo y al resto se le a&#241;ade edema. Noradrenalina precoz, objetivos de perfusion mas alla del numero de tension, y sobre todo la correccion de la <strong>causa</strong>, que es lo unico que resuelve el cuadro.</p>
${figBlock('Figura 3', 'Reanimacion: fluidos, vasoactivos, objetivos y la causa', reanimarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No exigir hipotension para diagnosticar un choque. No leer la tension sin conocer el basal del paciente. No sedar la agitacion de quien esta hipoperfundido. No usar la presion venosa central para decidir si dar volumen. No seguir dando bolos sin comprobar que el paciente responde. No retrasar la noradrenalina hasta "terminar" el volumen, ni retrasarla por no tener una via central. No dar volumen a ciegas en el choque cardiogenico. No olvidar las causas que se resuelven con las manos: <strong>neumotorax a tension, taponamiento y hemorragia</strong>. No conformarse con normalizar la tension mientras el lactato no baja y el paciente no orina. Y no dar por cerrado el diagnostico al encontrar una causa, porque los perfiles se mezclan.</p>`;

export const bibliografia = [
  'Vincent JL, De Backer D. Circulatory shock. N Engl J Med. 2013;369(18):1726-1734.',
  'Cecconi M, De Backer D, Antonelli M, et al. Consensus on circulatory shock and hemodynamic monitoring. Task force of the European Society of Intensive Care Medicine. Intensive Care Med. 2014;40(12):1795-1815.',
  'American College of Surgeons Committee on Trauma. ATLS: Soporte Vital Avanzado en Trauma. Manual del curso para estudiantes. 10.a ed. Chicago: American College of Surgeons; 2018.',
  'Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Intensive Care Med. 2026. doi:10.1007/s00134-026-08361-1.',
  'Van Diepen S, Katz JN, Albert NM, et al. Contemporary management of cardiogenic shock: a scientific statement from the American Heart Association. Circulation. 2017;136(16):e232-e268.',
  'Creager MA, et al. 2026 guideline for the management of acute pulmonary embolism: a report of the American Heart Association and American College of Cardiology Joint Committee on Clinical Practice Guidelines. Circulation. 2026;153. doi:10.1161/CIR.0000000000001415.',
  'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis: a 2020 practice parameter update, systematic review, and Grading of Recommendations, Assessment, Development and Evaluation (GRADE) analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
  'Monnet X, Marik PE, Teboul JL. Passive leg raising for predicting fluid responsiveness: a systematic review and meta-analysis. Intensive Care Med. 2016;42(12):1935-1947.',
  'Marik PE, Cavallazzi R. Does the central venous pressure predict fluid responsiveness? An updated meta-analysis and a plea for some common sense. Crit Care Med. 2013;41(7):1774-1781.',
  'Semler MW, Self WH, Wanderer JP, et al. Balanced crystalloids versus saline in critically ill adults. N Engl J Med. 2018;378(9):829-839.',
  'De Backer D, Biston P, Devriendt J, et al. Comparison of dopamine and norepinephrine in the treatment of shock. N Engl J Med. 2010;362(9):779-789.',
  'Hernandez G, Ospina-Tascon GA, Damiani LP, et al. Effect of a resuscitation strategy targeting peripheral perfusion status vs serum lactate levels on 28-day mortality among patients with septic shock: the ANDROMEDA-SHOCK randomized clinical trial. JAMA. 2019;321(7):654-664.',
  'Thiele H, Akin I, Sandri M, et al. PCI strategies in patients with acute myocardial infarction and cardiogenic shock. N Engl J Med. 2017;377(25):2419-2432.',
  'Thiele H, Zeymer U, Neumann FJ, et al. Intraaortic balloon support for myocardial infarction with cardiogenic shock. N Engl J Med. 2012;367(14):1287-1296.',
  'Holcomb JB, Tilley BC, Baraniuk S, et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 versus a 1:1:2 ratio and mortality in patients with severe trauma: the PROPPR randomized clinical trial. JAMA. 2015;313(5):471-482.',
  'CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage: a randomised, placebo-controlled trial. Lancet. 2010;376(9734):23-32.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Choque frio',
      tituloB: 'Choque caliente',
      compensada: 'Piel FRIA, palida, con moteado de rodillas y relleno capilar lento, que es el patron del choque hipovolemico, cardiogenico y obstructivo. La vasoconstriccion compensadora eleva la diastolica y por eso lo primero que se estrecha es la PRESION DE PULSO, mucho antes de que caiga la sistolica. Hay taquicardia, oliguria, inquietud y despues somnolencia. Ojo con dos situaciones que enmascaran la taquicardia: el paciente betabloqueado y el choque neurogenico, donde la respuesta cronotropa esta abolida.',
      descompensada: 'Piel CALIENTE y bien perfundida con hipotension, que es el patron del choque DISTRIBUTIVO en su fase inicial: el gasto cardiaco esta alto y lo que ha caido son las resistencias. Ese aspecto enga&#241;a, porque un paciente rosado y caliente puede estar profundamente hipoperfundido a nivel tisular, con lactato elevado y oliguria. En fases avanzadas el choque distributivo tambien se vuelve frio, por la disfuncion miocardica asociada y por el agotamiento de la respuesta. La presencia de exantema, angioedema o broncoespasmo orienta a anafilaxia, y la bradicardia paradojica con piel caliente y seca, a un origen neurogenico.'
    },
    laboratorio: [
      { prueba: 'Lactato arterial seriado', utilidad: 'Por encima de 2 mmol/L apoya hipoperfusion y forma parte de la definicion de choque septico. Lo que mas pronostico aporta es el ACLARAMIENTO: un lactato que no baja con la reanimacion obliga a replantear el mecanismo, no a repetir el mismo bolo.' },
      { prueba: 'Gasometria con exceso de base', utilidad: 'El DEFICIT DE BASE es uno de los indicadores mas sensibles de hemorragia oculta y forma parte de la clasificacion de la hemorragia de la ultima edicion del manual de trauma. Se altera antes que la tension arterial.' },
      { prueba: 'Hemograma y pruebas cruzadas', utilidad: 'En la hemorragia aguda, la HEMOGLOBINA INICIAL PUEDE SER NORMAL, porque todavia no ha habido tiempo de hemodilucion. Un valor normal en las primeras horas no descarta un sangrado importante y no debe tranquilizar.' },
      { prueba: 'Coagulacion, fibrinogeno y calcio', utilidad: 'La coagulopatia del traumatizado aparece pronto y empeora con la hipotermia y la acidosis, que junto a ella forman la triada letal. El calcio ionico cae con la transfusion masiva por el citrato y hay que reponerlo.' },
      { prueba: 'Troponina y peptidos natriureticos', utilidad: 'Orientan al origen cardiogenico, pero conviene saber que la troponina se eleva en casi cualquier choque por sufrimiento miocardico secundario: su elevacion no prueba que la causa sea cardiaca.' },
      { prueba: 'Funcion renal, hepatica e ionograma', utilidad: 'Documentan la repercusion sobre otros organos y detectan las alteraciones que empeoran el cuadro: hipopotasemia, hipocalcemia, hipomagnesemia y acidosis, todas ellas corregibles.' },
      { prueba: 'Hemocultivos y cultivos del foco', utilidad: 'Antes del antibiotico siempre que no lo retrasen. En el choque septico, cada hora de retraso del antimicrobiano cuenta, de modo que el orden correcto es extraer y tratar, no esperar.' },
      { prueba: 'Triptasa serica', utilidad: 'Apoya el diagnostico de anafilaxia si se extrae en las primeras horas y se compara con un valor basal posterior. NUNCA hay que esperarla para tratar: la anafilaxia es un diagnostico clinico y el tratamiento es inmediato.' }
    ],
    no_invasivos: [
      { metodo: 'Perfil hemodinamico del choque (calculadora disponible)', interpretacion: 'Cruza los datos de exploracion y de ecografia para orientar hacia un perfil hipovolemico, distributivo, cardiogenico u obstructivo, y recuerda que se mezclan.', cutoff: 'Piel caliente con gasto alto y resistencias bajas: distributivo' },
      { metodo: 'Prediccion de respuesta a volumen (calculadora disponible)', interpretacion: 'Reune las pruebas dinamicas que si predicen respuesta (elevacion pasiva de las piernas, variacion de la presion de pulso) y advierte de las estaticas que no la predicen.', cutoff: 'Solo la mitad de los pacientes en choque responde a un bolo de volumen' },
      { metodo: 'Grado de hemorragia del manual de trauma (calculadora disponible)', interpretacion: 'Clasifica la hemorragia en cuatro grados con frecuencia cardiaca, tension, presion de pulso, diuresis, conciencia y deficit de base.', cutoff: 'La sistolica se mantiene normal hasta el grado III: lo primero que cae es la presion de pulso' },
      { metodo: 'Ecografia clinica del paciente en choque', interpretacion: 'Corazon, vena cava, pulmon y abdomen en pocos minutos. Busca contractilidad, dilatacion del ventriculo derecho, derrame pericardico, liquido libre, neumotorax y aneurisma de aorta.', cutoff: 'Es lo que mas ha cambiado el manejo del choque en la ultima decada' },
      { metodo: 'Indice de choque', interpretacion: 'Frecuencia cardiaca dividida entre la tension arterial sistolica. Se altera antes que cualquiera de los dos por separado y es especialmente util en la hemorragia y en la embarazada.', cutoff: 'Por encima de 0.9 sugiere compromiso hemodinamico aunque la tension sea normal' },
      { metodo: 'Relleno capilar y temperatura de la piel', interpretacion: 'Objetivos de reanimacion validados frente al lactato en un ensayo aleatorizado. No cuestan nada, se pueden repetir cada 30 minutos y no dependen de ningun aparato.', cutoff: 'Relleno capilar mayor de 3 segundos indica hipoperfusion periferica' }
    ],
    imagen: [
      { modalidad: 'Ecografia a pie de cama', hallazgos: 'La prueba de imagen mas util del paciente en choque. Ventriculo izquierdo hipocontractil (cardiogenico), ventriculo derecho dilatado con septo aplanado (embolia), derrame pericardico con colapso de cavidades (taponamiento), ausencia de deslizamiento pleural (neumotorax), liquido libre abdominal (hemorragia) y vena cava colapsada (hipovolemia).' },
      { modalidad: 'Radiografia de torax', hallazgos: 'Rapida y disponible. Busca neumotorax, ensanchamiento mediastinico, congestion, derrame y foco neumonico. En el neumotorax a TENSION no hay que esperarla: el diagnostico es clinico y el tratamiento, inmediato.' },
      { modalidad: 'Angiografia por tomografia', hallazgos: 'Confirma la embolia pulmonar, la diseccion aortica y el punto de sangrado, y localiza el foco abdominal. La decision de trasladar a un paciente inestable se toma pensando en si el resultado va a cambiar la conducta en los proximos minutos.' },
      { modalidad: 'Electrocardiograma', hallazgos: 'No es imagen pero se pide en el mismo gesto. Busca infarto, arritmia y los signos de sobrecarga derecha de la embolia. Un electrocardiograma normal no descarta un origen cardiogenico ni una embolia.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion que manda es la <strong>fisiopatologica</strong>, en cuatro perfiles: <strong>hipovolemico</strong> (falta volumen), <strong>distributivo</strong> (se ha perdido el tono), <strong>cardiogenico</strong> (falla la bomba) y <strong>obstructivo</strong> (algo impide el llenado o la eyeccion). Cada uno tiene un patron distinto de precarga, gasto y resistencias, y sobre todo un tratamiento distinto. En paralelo se clasifica por <strong>gravedad</strong>, y en la hemorragia existe una gradacion propia en cuatro grados. Y una advertencia transversal: los perfiles se <strong>mezclan</strong> con frecuencia.`,
    escalas: [
      { nombre: 'Perfil hemodinamico del choque (calculadora disponible)', componentes: 'Temperatura y relleno de la piel, presion de pulso, ingurgitacion yugular, y hallazgos ecograficos de contractilidad, ventriculo derecho, vena cava, pulmon y abdomen.', formula: 'Combinacion de esos datos en cuatro patrones: hipovolemico, distributivo, cardiogenico y obstructivo.', interpretacion: 'La piel CALIENTE con hipotension es lo que mas separa el distributivo del resto. Y encontrar un perfil no autoriza a dejar de buscar los demas: la mezcla de perfiles es frecuente y explica muchas reanimaciones que no funcionan.' },
      { nombre: 'Prediccion de respuesta a volumen (calculadora disponible)', componentes: 'Elevacion pasiva de las piernas, variacion de la presion de pulso en el ventilado sin esfuerzos, colapsabilidad de la vena cava, y presencia de signos de sobrecarga.', formula: 'Se considera respondedor el que aumenta el gasto o la presion de pulso de forma significativa tras la maniobra o el bolo.', interpretacion: 'La PRESION VENOSA CENTRAL no predice la respuesta a volumen y no debe usarse para eso, pese a lo extendido de la costumbre. La elevacion pasiva de las piernas es la prueba mas util porque equivale a un bolo REVERSIBLE.' },
      { nombre: 'Grado de hemorragia del manual de trauma (calculadora disponible)', componentes: 'Perdida sanguinea estimada, frecuencia cardiaca, tension arterial, presion de pulso, frecuencia respiratoria, diuresis, escala de coma de Glasgow y deficit de base.', formula: 'Cuatro grados: I con menos del 15% de perdida, II del 15 al 30%, III del 31 al 40% y IV por encima del 40%.', interpretacion: 'El dato mas util para la practica es que la TENSION SISTOLICA se mantiene normal hasta el grado III: lo primero que se altera es la PRESION DE PULSO, por el ascenso de la diastolica que produce la vasoconstriccion. El grado IV exige protocolo de transfusion masiva.' },
      { nombre: 'Indice de choque', componentes: 'Frecuencia cardiaca y tension arterial sistolica.', formula: 'Frecuencia cardiaca dividida entre la tension sistolica.', interpretacion: 'Por encima de 0.9 sugiere compromiso hemodinamico aunque ambos valores esten dentro de rango. Es especialmente util en la hemorragia, en la embarazada y en el paciente joven, que compensan muy bien hasta que se descompensan de golpe.' },
      { nombre: 'Criterios de choque septico', componentes: 'Sepsis, necesidad de vasopresores y lactato.', formula: 'Sepsis mas necesidad de vasopresores para mantener una tension arterial media de 65 mmHg o mas, mas lactato por encima de 2 mmol/L, ambas cosas pese a una reanimacion adecuada.', interpretacion: 'Exige las DOS condiciones a la vez. Un paciente con vasopresores y lactato normal, o con lactato alto sin vasopresores, no cumple la definicion y tiene un pronostico distinto.' },
      { nombre: 'Estadios de choque cardiogenico', componentes: 'Situacion clinica, hemodinamica y necesidad de soporte, en una gradacion de cinco estadios desde el paciente en riesgo hasta el que esta en parada refractaria.', formula: 'Gradacion progresiva: en riesgo, comienzo, clasico, deteriorandose y extremo.', interpretacion: 'Su utilidad es homogeneizar el lenguaje y decidir el momento del soporte mecanico o del traslado a un centro con esa capacidad, que es una decision muy dependiente del tiempo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer el choque',
      color: '#8c2e3a',
      definicion: 'Fallo circulatorio agudo y generalizado en el que el aporte de oxigeno no cubre las necesidades del tejido, con independencia de cual sea la cifra de tension arterial.',
      fisiopatologia: 'Cuando el gasto cardiaco o el tono vascular caen, el organismo responde con vasoconstriccion selectiva: sacrifica piel, musculo, ri&#241;on y territorio esplacnico para preservar corazon y cerebro. Esa redistribucion explica toda la clinica precoz (piel fria y moteada, oliguria, inquietud) y explica tambien la trampa central del tema: mientras la vasoconstriccion aguanta, la TENSION SE MANTIENE. La hipotension no es el comienzo del choque sino el momento en que la compensacion se agota, y por eso esperar a que aparezca es esperar demasiado. En paralelo, el metabolismo anaerobio genera lactato, que es el marcador bioquimico de que ese sacrificio ya se esta pagando.',
      epidemiologia: 'Una proporcion relevante de los pacientes en choque llega con la tension arterial todavia dentro de rango, lo que se conoce como choque normotenso u oculto. El retraso en reconocerlo es uno de los determinantes mas consistentes del pronostico, y es un retraso evitable con una exploracion que no cuesta nada.',
      factores_riesgo: ['Edad avanzada, con menor capacidad de compensacion', 'Hipertension cronica, que desplaza el umbral de hipotension hacia arriba', 'Tratamiento con betabloqueantes, que enmascara la taquicardia', 'Marcapasos, que impide la respuesta cronotropa', 'Insuficiencia cardiaca previa', 'Insuficiencia suprarrenal o corticoterapia cronica', 'Embarazo, que aumenta la reserva y retrasa los signos', 'Deportistas y pacientes jovenes, que compensan hasta desplomarse', 'Diabetes con neuropatia autonomica', 'Hipotermia, que enmascara la respuesta adrenergica'],
      clinica: 'Tres ventanas: PIEL fria, palida, moteada y con relleno capilar lento (aunque puede estar caliente en el distributivo); RI&#209;ON con oliguria por debajo de 0.5 mL/kg/h; y CEREBRO con inquietud, agitacion y despues somnolencia. La agitacion se confunde con ansiedad y se trata con sedantes, que es exactamente lo contrario de lo que hace falta.',
      criterios_dx: 'Signos de hipoperfusion en al menos una de las tres ventanas, con o sin hipotension, habitualmente con lactato por encima de 2 mmol/L. Ver la Figura 1 de Definicion.',
      laboratorio: 'LACTATO seriado y gasometria con DEFICIT DE BASE. Hemograma (recordando que la hemoglobina inicial puede ser normal en la hemorragia aguda), coagulacion, funcion renal y hepatica, ionograma y calcio. Hemocultivos si hay sospecha de infeccion.',
      imagen: 'ECOGRAFIA A PIE DE CAMA, que orienta el perfil en minutos. Radiografia de torax. Electrocardiograma en el mismo gesto.',
      complementarios: 'Monitorizacion continua, sonda vesical para cuantificar la diuresis (que se olvida hasta que el paciente lleva horas sin orinar) y dos vias venosas de grueso calibre.',
      dx_diferencial: 'Sincope, hipotension ortostatica, deshidratacion sin choque, crisis de ansiedad, hipoglucemia, intoxicacion y sepsis sin choque. La diferencia esta en los signos de HIPOPERFUSION, no en la cifra de tension.',
      tx_medico: 'Oxigeno, dos accesos vasculares, monitorizacion y reanimacion inicial mientras se busca la causa. Posicion y medidas generales segun el perfil sospechado.',
      tx_farmacologico: 'Cristaloides balanceados en bolos con reevaluacion tras cada uno, y NORADRENALINA precoz sin esperar a terminar el volumen. El resto depende de la causa.',
      tx_intervencionista: 'Lo que exija el mecanismo: drenaje, puncion, hemostasia o revascularizacion.',
      criterios_uci: 'Todo choque establecido. La necesidad de vasoactivos, la hipoperfusion mantenida o el lactato que no aclara son criterios claros.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion frecuente y estructurada: piel, diuresis, conciencia y lactato. Si el paciente no mejora, la pregunta no es cuanto mas volumen sino QUE MECANISMO se ha pasado por alto.',
      seguimiento_ambulatorio: 'Depende de la causa. Los supervivientes de un choque prolongado tienen secuelas fisicas y cognitivas que conviene buscar de forma activa.',
      pronostico: 'Depende de la causa, de la duracion de la hipoperfusion y de la precocidad del tratamiento. El tiempo en hipoperfusion es el factor mas modificable.',
      algoritmo: ['Buscar signos de HIPOPERFUSION, no esperar a la hipotension', 'Mirar la piel: temperatura, moteado y relleno capilar', 'Cuantificar la DIURESIS, con sonda si hace falta', 'Valorar el nivel de conciencia y no sedar la agitacion', 'Pedir LACTATO y repetirlo', 'Comparar la tension con el BASAL del paciente', 'Poner dos vias de grueso calibre y monitorizar', 'Hacer ECOGRAFIA a pie de cama para orientar el perfil', 'Iniciar reanimacion mientras se busca la causa', 'Reevaluar de forma frecuente y estructurada']
    },
    {
      nombre: 'Choque hipovolemico y hemorragico',
      color: '#7a3f2e',
      definicion: 'Choque por descenso del volumen intravascular, ya sea por perdida de sangre (hemorragico) o de agua y electrolitos (no hemorragico).',
      fisiopatologia: 'La caida de la precarga reduce el volumen de eyeccion y el gasto cardiaco. La respuesta adrenergica produce taquicardia y vasoconstriccion, y esta ultima eleva la DIASTOLICA: por eso lo primero que se altera es el estrechamiento de la presion de pulso, mucho antes de que caiga la sistolica. En la hemorragia se a&#241;ade la coagulopatia precoz del traumatizado, que se retroalimenta con la HIPOTERMIA y la ACIDOSIS formando la triada letal: cada una empeora a las otras dos, y por eso la reanimacion moderna intenta romper el circulo desde el principio en lugar de corregirlas por separado.',
      epidemiologia: 'La hemorragia es la causa de muerte evitable mas frecuente en el traumatizado. En el paciente medico, la hipovolemia por perdidas digestivas, por diureticos o por tercer espacio es una causa muy frecuente de choque y con frecuencia se subestima.',
      factores_riesgo: ['Traumatismo, sobre todo cerrado de abdomen y pelvis', 'Anticoagulacion o antiagregacion', 'Hemorragia digestiva y varices esofagicas', 'Aneurisma de aorta abdominal', 'Embarazo ectopico y hemorragia posparto', 'Vomitos y diarrea prolongados', 'Quemaduras extensas, por perdida hacia el tercer espacio', 'Diureticos a dosis alta', 'Cetoacidosis y estado hiperosmolar', 'Pancreatitis aguda grave'],
      clinica: 'Piel FRIA, palida y sudorosa, taquicardia, estrechamiento de la PRESION DE PULSO, oliguria e inquietud. La sistolica se mantiene normal hasta que la perdida supera el 30%, lo que explica por que confiar en ella retrasa el diagnostico. En el sangrado externo el origen es evidente; en el interno hay que buscarlo en torax, abdomen, pelvis, retroperitoneo y huesos largos.',
      criterios_dx: 'Signos de hipoperfusion con datos de hipovolemia y respuesta a la reposicion. La gradacion de la hemorragia se detalla en la calculadora del tema. Ver la Figura 2 de Definicion.',
      laboratorio: 'HEMOGLOBINA, sabiendo que puede ser NORMAL al principio. Pruebas cruzadas urgentes. GASOMETRIA CON DEFICIT DE BASE, que es mas sensible que la tension. Coagulacion, fibrinogeno y CALCIO IONICO, que cae con la transfusion masiva por el citrato. Lactato seriado.',
      imagen: 'ECOGRAFIA abdominal urgente buscando liquido libre, y toracica buscando derrame y neumotorax. Radiografia de torax y de pelvis en el traumatizado. Angiografia por tomografia si el paciente se estabiliza y hace falta localizar el punto de sangrado.',
      complementarios: 'Dos vias de grueso calibre. Sonda vesical para cuantificar. Y medidas contra la HIPOTERMIA desde el primer minuto: mantas, fluidos calientes y control de la temperatura ambiental, porque el enfriamiento agrava la coagulopatia.',
      dx_diferencial: 'Otros perfiles de choque, sobre todo el obstructivo, que tambien cursa con piel fria y baja precarga aparente. El taponamiento y el neumotorax a tension pueden confundirse con hipovolemia si no se explora la ingurgitacion yugular ni se hace ecografia.',
      tx_medico: 'CONTROL DE LA HEMORRAGIA como prioridad absoluta: compresion directa, torniquete en la extremidad, empaquetamiento, faja pelvica y traslado urgente a quirofano o a radiologia intervencionista. Reposicion con cristaloides balanceados de forma limitada y paso precoz a HEMODERIVADOS.',
      tx_farmacologico: 'ACIDO TRANEXAMICO precoz en el traumatizado con hemorragia significativa. Transfusion con proporciones equilibradas de concentrados, plasma y plaquetas en la hemorragia masiva. Calcio para corregir la hipocalcemia por citrato. Vasopresores solo como puente, porque no sustituyen al volumen ni a la hemostasia.',
      tx_intervencionista: 'CIRUGIA DE CONTROL DE DA&#209;OS, embolizacion, endoscopia hemostatica o reparacion endovascular segun el origen. En la hemorragia, la mejor reanimacion es cerrar el punto que sangra.',
      criterios_uci: 'Hemorragia grado III o IV, necesidad de transfusion masiva, coagulopatia establecida e inestabilidad pese a la reposicion.',
      criterios_tips: 'La derivacion portosistemica intrahepatica transyugular es una opcion en la hemorragia variceal refractaria, cuyo detalle esta en el tema de cirrosis hepatica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Vigilar la triada letal (hipotermia, acidosis y coagulopatia), el calcio ionico y el resangrado. La reevaluacion frecuente detecta antes el sangrado que continua que cualquier cifra aislada.',
      seguimiento_ambulatorio: 'Corregir la causa y prevenir la recurrencia: control de la anticoagulacion, tratamiento de la lesion sangrante y reposicion de hierro.',
      pronostico: 'Bueno si la hemorragia se controla pronto. Empeora de forma marcada con el retraso en la hemostasia y con la instauracion de la triada letal.',
      algoritmo: ['Buscar el estrechamiento de la PRESION DE PULSO, no esperar a la sistolica', 'Localizar el sangrado: externo, torax, abdomen, pelvis, retroperitoneo, huesos largos', 'Comprimir, empaquetar o poner faja pelvica de inmediato', 'Poner dos vias de grueso calibre y pedir pruebas cruzadas', 'No confiar en una hemoglobina inicial normal', 'Pedir gasometria y mirar el DEFICIT DE BASE', 'Dar acido tranexamico precoz en el traumatizado', 'Pasar pronto a hemoderivados en proporciones equilibradas', 'Prevenir la HIPOTERMIA desde el primer minuto', 'Llevar al paciente a hemostasia definitiva sin demora']
    },
    {
      nombre: 'Choque distributivo',
      color: '#3f6b52',
      definicion: 'Choque por perdida del tono vascular y redistribucion del flujo, con gasto cardiaco alto o normal y resistencias perifericas bajas. Incluye el septico, el anafilactico y el neurogenico.',
      fisiopatologia: 'La vasodilatacion arteriolar y venular produce un desajuste entre el continente y el contenido: hay volumen, pero el lecho vascular se ha ampliado y la sangre se redistribuye mal. En la sepsis se a&#241;aden la fuga capilar y una alteracion de la microcirculacion que hace que el tejido siga hipoperfundido incluso con un flujo global alto, lo que explica el lactato elevado con la piel caliente. En la anafilaxia el mecanismo es la liberacion masiva de mediadores por mastocitos y basofilos. Y en el choque neurogenico se pierde el tono simpatico por lesion medular alta, con vasodilatacion Y ausencia de taquicardia compensadora, que es lo que lo hace unico.',
      epidemiologia: 'El septico es, con diferencia, el mas frecuente de los cuatro perfiles en el hospital. La anafilaxia es menos frecuente pero su desenlace depende por completo de la rapidez del tratamiento. El neurogenico aparece en lesiones medulares por encima del sexto segmento toracico.',
      factores_riesgo: ['Infeccion grave, sobre todo respiratoria, urinaria y abdominal', 'Inmunodepresion', 'Dispositivos intravasculares y sondas', 'Alergia conocida a farmacos, alimentos o himenopteros', 'Antecedente de anafilaxia previa', 'Tratamiento con betabloqueantes, que dificulta la respuesta a la adrenalina', 'Lesion medular cervical o toracica alta', 'Insuficiencia suprarrenal', 'Pancreatitis y quemaduras extensas', 'Hepatopatia avanzada, que cursa con vasodilatacion basal'],
      clinica: 'Hipotension con piel CALIENTE, bien perfundida y con relleno capilar rapido en la fase inicial, lo que enga&#241;a mucho. En la ANAFILAXIA hay exantema, prurito, angioedema, broncoespasmo y sintomas digestivos, y el cuadro se instaura en minutos. En el NEUROGENICO la combinacion es muy caracteristica: hipotension con BRADICARDIA y piel caliente y SECA, mas el deficit neurologico correspondiente.',
      criterios_dx: 'Perfil hemodinamico con gasto alto y resistencias bajas mas una causa compatible. En la anafilaxia el diagnostico es CLINICO y no se espera a ninguna prueba. Ver la Figura 2 de Definicion.',
      laboratorio: 'Lactato, hemocultivos y cultivos del foco en el septico. TRIPTASA en la anafilaxia, extraida en las primeras horas y comparada con un basal posterior, pero SIN retrasar el tratamiento. Estudio general en todos.',
      imagen: 'La dirigida a localizar el foco en el septico. Resonancia o tomografia de columna en el neurogenico. La ecografia a pie de cama muestra un corazon hiperdinamico, que apoya el perfil.',
      complementarios: 'Monitorizacion continua. En la anafilaxia, observacion prolongada por el riesgo de reaccion BIFASICA, que puede aparecer horas despues de la resolucion aparente.',
      dx_diferencial: 'Entre los tres tipos, y frente a otros perfiles. Un choque septico avanzado se vuelve frio y se confunde con el cardiogenico. Una anafilaxia sin exantema se etiqueta de asma o de sincope. Y un choque neurogenico coexiste a menudo con hemorragia en el politraumatizado: asumir que la hipotension es neurogenica sin descartar sangrado es un error grave.',
      tx_medico: 'SEPTICO: control del foco, antibiotico precoz, cristaloides y noradrenalina. ANAFILACTICO: retirar el desencadenante, posicion en decubito con las piernas elevadas y oxigeno. NEUROGENICO: inmovilizacion, volumen y vasopresor, valorando atropina si la bradicardia es sintomatica.',
      tx_farmacologico: 'En la anafilaxia, ADRENALINA INTRAMUSCULAR en la cara anterolateral del muslo, repetible cada 5 a 15 minutos: es el tratamiento y no tiene sustituto. Los antihistaminicos y los corticoides son coadyuvantes y NO deben retrasarla ni sustituirla. En el septico, noradrenalina de primera linea. En el neurogenico, vasopresor con actividad tanto vasoconstrictora como cronotropa.',
      tx_intervencionista: 'Drenaje del foco en el septico. Manejo de la via aerea en la anafilaxia con angioedema, que puede hacerse imposible en minutos y obliga a asegurarla pronto.',
      criterios_uci: 'Choque septico establecido, anafilaxia con compromiso de via aerea o refractaria a adrenalina, y choque neurogenico con lesion medular alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el septico, reevaluar el foco si no mejora. En la anafilaxia, vigilancia prolongada por la reaccion bifasica y prescripcion de ADRENALINA AUTOINYECTABLE al alta, con formacion sobre su uso, que se omite con enorme frecuencia.',
      seguimiento_ambulatorio: 'Derivacion a alergologia tras una anafilaxia, con plan escrito de actuacion. Rehabilitacion y manejo de la disautonomia en la lesion medular.',
      pronostico: 'El septico depende del control del foco y de la precocidad del tratamiento. La anafilaxia tiene excelente pronostico si se trata pronto con adrenalina, y las muertes se concentran en los casos en que esta se retrasa o no se administra.',
      algoritmo: ['Reconocer el patron: hipotension con piel CALIENTE', 'Buscar exantema, angioedema y broncoespasmo', 'Si hay anafilaxia, ADRENALINA INTRAMUSCULAR de inmediato', 'No sustituir la adrenalina por antihistaminicos ni corticoides', 'Si hay sospecha de infeccion, hemocultivos y antibiotico precoz', 'Buscar y CONTROLAR el foco septico', 'Iniciar cristaloides y noradrenalina precoz', 'En el traumatizado, descartar hemorragia antes de asumir origen neurogenico', 'Vigilar la reaccion bifasica tras una anafilaxia', 'Prescribir adrenalina autoinyectable y derivar a alergologia']
    },
    {
      nombre: 'Choque cardiogenico',
      color: '#3d5a73',
      definicion: 'Choque por fallo primario de la bomba, con gasto cardiaco bajo y presiones de llenado elevadas, pese a un volumen intravascular adecuado.',
      fisiopatologia: 'La caida de la contractilidad reduce el volumen de eyeccion y eleva las presiones de llenado, lo que produce a la vez hipoperfusion anterograda y congestion retrograda. Se establece entonces una espiral: la hipotension reduce la presion de perfusion coronaria, lo que empeora la isquemia, lo que empeora la contractilidad. A eso se suma un componente inflamatorio con vasodilatacion que explica por que algunos pacientes tienen resistencias mas bajas de lo esperado. Romper esa espiral pronto, sobre todo revascularizando cuando la causa es un infarto, es lo unico que ha demostrado modificar el pronostico.',
      epidemiologia: 'La causa mas frecuente es el infarto agudo de miocardio, y su mortalidad sigue siendo elevada pese a la revascularizacion. Las complicaciones mecanicas del infarto (rotura de pared libre, comunicacion interventricular e insuficiencia mitral aguda por rotura de musculo papilar) son menos frecuentes pero exigen cirugia y se diagnostican con ecografia.',
      factores_riesgo: ['Infarto agudo de miocardio, sobre todo anterior extenso', 'Edad avanzada', 'Diabetes mellitus', 'Insuficiencia cardiaca previa', 'Enfermedad coronaria de varios vasos', 'Retraso en la reperfusion', 'Miocarditis aguda', 'Valvulopatia aguda o rotura de cuerdas', 'Arritmias mal toleradas', 'Farmacos con efecto inotropo negativo y toxicos'],
      clinica: 'Hipotension con piel FRIA, sudorosa y moteada, oliguria, alteracion de la conciencia y, a diferencia del hipovolemico, signos de CONGESTION: ingurgitacion yugular, crepitantes y a veces tercer ruido. Esa combinacion de hipoperfusion CON congestion es la firma del perfil.',
      criterios_dx: 'Hipotension mantenida con signos de hipoperfusion, presiones de llenado elevadas y evidencia de disfuncion cardiaca, habiendo descartado hipovolemia. Ver la Figura 2 de Definicion.',
      laboratorio: 'TROPONINA y peptidos natriureticos, recordando que la troponina se eleva en casi cualquier choque. Lactato, funcion renal y hepatica (la hepatitis isquemica y el ri&#241;on congestivo son frecuentes), gasometria y ionograma.',
      imagen: 'ECOCARDIOGRAMA URGENTE, que es la prueba clave: valora la contractilidad, identifica las complicaciones mecanicas y descarta otros perfiles. Radiografia de torax con congestion. Coronariografia urgente si la causa es isquemica.',
      complementarios: 'ELECTROCARDIOGRAMA inmediato buscando infarto y arritmia. Monitorizacion continua. En casos seleccionados, cateterismo derecho para caracterizar el perfil cuando la situacion es ambigua.',
      dx_diferencial: 'Choque obstructivo, sobre todo embolia pulmonar y taponamiento, que tambien cursan con hipotension e ingurgitacion yugular y se separan con ecografia. Choque septico con disfuncion miocardica. Y sobrecarga de volumen sin choque.',
      tx_medico: 'REVASCULARIZACION URGENTE si la causa es isquemica, que es la medida que mas modifica el pronostico. Con enfermedad de varios vasos, la evidencia apoya revascularizar de entrada solo la arteria responsable. Oxigenacion y ventilacion adecuadas, correccion de arritmias y de alteraciones electroliticas, y VOLUMEN CON MUCHA CAUTELA porque puede empeorar la congestion.',
      tx_farmacologico: 'NORADRENALINA como vasopresor de eleccion, que ha mostrado menos arritmias que la dopamina. Inotropicos como dobutamina o levosimendan cuando el gasto es bajo pese a una tension aceptable. Diureticos una vez estabilizada la perfusion. Y retirada de los farmacos inotropos negativos.',
      tx_intervencionista: 'Intervencionismo coronario percutaneo. Cirugia urgente en las complicaciones mecanicas. Soporte circulatorio mecanico en casos seleccionados y como puente a recuperacion, a cirugia o a trasplante: conviene saber que el balon de contrapulsacion NO demostro reducir la mortalidad en el infarto con choque.',
      criterios_uci: 'Todo choque cardiogenico. El traslado precoz a un centro con capacidad de revascularizacion y de soporte mecanico es una decision muy dependiente del tiempo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Valoracion de trasplante cardiaco o de asistencia ventricular de larga duracion en el choque refractario de causa no reversible.',
      seguimiento_hospitalario: 'Vigilar la funcion renal y hepatica, el equilibrio entre congestion y perfusion, y las complicaciones del soporte. Reevaluar con ecocardiograma la respuesta y las complicaciones mecanicas.',
      seguimiento_ambulatorio: 'Tratamiento de la insuficiencia cardiaca segun la funcion residual, rehabilitacion cardiaca y valoracion de dispositivos.',
      pronostico: 'Sigue siendo la forma de choque con mayor mortalidad. Lo que mas la modifica es la revascularizacion precoz cuando la causa es isquemica.',
      algoritmo: ['Reconocer la combinacion de hipoperfusion CON congestion', 'Hacer ELECTROCARDIOGRAMA de inmediato', 'Hacer ECOCARDIOGRAMA urgente', 'Buscar complicaciones mecanicas del infarto', 'Descartar embolia y taponamiento con la misma ecografia', 'Dar volumen con mucha cautela y reevaluando', 'Iniciar NORADRENALINA y a&#241;adir inotropico si el gasto es bajo', 'Activar la revascularizacion urgente si la causa es isquemica', 'Revascularizar solo la arteria responsable de entrada', 'Valorar traslado a un centro con soporte mecanico']
    },
    {
      nombre: 'Choque obstructivo',
      color: '#6b4a8c',
      definicion: 'Choque por un obstaculo mecanico al llenado o a la eyeccion del corazon, en el que la bomba y el volumen pueden ser normales y el problema es puramente fisico.',
      fisiopatologia: 'Tres mecanismos distintos con el mismo resultado. En el NEUMOTORAX A TENSION, el aire acumulado a presion colapsa el pulmon, desplaza el mediastino y comprime las venas cavas, impidiendo el retorno venoso. En el TAPONAMIENTO, el liquido pericardico eleva la presion intrapericardica por encima de la de llenado de las cavidades derechas y las colapsa en diastole. Y en la EMBOLIA PULMONAR masiva, la obstruccion vascular eleva de golpe la poscarga del ventriculo derecho, que se dilata, desplaza el septo hacia la izquierda y reduce el llenado izquierdo. Los tres comparten una caracteristica decisiva: son <strong>reversibles en minutos</strong> si se identifican.',
      epidemiologia: 'Es el perfil menos frecuente de los cuatro y el que mas se pasa por alto, precisamente porque sus causas son pocas y hay que pensar en ellas de forma activa. Y es tambien el que ofrece las recuperaciones mas espectaculares cuando se resuelve a tiempo.',
      factores_riesgo: ['Ventilacion mecanica y presion positiva, por el neumotorax', 'Traumatismo toracico', 'Canalizacion de via central reciente', 'Enfermedad pulmonar bullosa', 'Neoplasia con afectacion pericardica', 'Pericarditis, uremia y tuberculosis', 'Inmovilizacion, cirugia reciente y neoplasia, por la embolia', 'Trombofilia y antecedente de tromboembolia', 'Diseccion aortica con extension al pericardio', 'Procedimientos cardiacos percutaneos'],
      clinica: 'Hipotension con INGURGITACION YUGULAR, que es el hallazgo que lo separa del hipovolemico y que se explora en segundos. En el neumotorax a tension hay ademas ausencia de murmullo, timpanismo y desviacion traqueal. En el taponamiento, tonos apagados y PULSO PARADOJICO. Y en la embolia masiva, hipoxemia, taquipnea y signos de sobrecarga derecha.',
      criterios_dx: 'Sospecha clinica confirmada por ecografia, que muestra el signo correspondiente en cada caso. En el neumotorax a TENSION no se espera a ninguna prueba. Ver la Figura 2 de Definicion.',
      laboratorio: 'Poco util para el diagnostico. Gasometria con hipoxemia en la embolia. Dimero D, cuya utilidad esta en descartar en pacientes de baja probabilidad, no en confirmar en un paciente en choque.',
      imagen: 'ECOGRAFIA A PIE DE CAMA: ausencia de deslizamiento pleural con punto pulmon (neumotorax), derrame pericardico con colapso de cavidades derechas y vena cava dilatada (taponamiento), ventriculo derecho dilatado con septo aplanado (embolia). ANGIOGRAFIA POR TOMOGRAFIA para confirmar la embolia si el paciente lo tolera.',
      complementarios: 'ELECTROCARDIOGRAMA con signos de sobrecarga derecha o alternancia electrica. Monitorizacion continua. Y una regla practica: en el paciente ventilado que se deteriora de golpe, pensar SIEMPRE en neumotorax.',
      dx_diferencial: 'Choque cardiogenico, que comparte la ingurgitacion yugular y se separa con ecografia. Choque hipovolemico, que se descarta mirando las yugulares. E hipertension pulmonar cronica descompensada.',
      tx_medico: 'La descompresion o la desobstruccion es el tratamiento; todo lo demas es soporte. Volumen con cautela en la embolia, porque la sobrecarga puede empeorar la dilatacion del ventriculo derecho. Noradrenalina para mantener la perfusion coronaria del ventriculo derecho.',
      tx_farmacologico: 'TROMBOLISIS SISTEMICA en la embolia pulmonar de alto riesgo, es decir, con inestabilidad hemodinamica, salvo contraindicacion absoluta. Anticoagulacion de inicio inmediato ante la sospecha.',
      tx_intervencionista: 'DESCOMPRESION INMEDIATA con aguja seguida de drenaje toracico en el neumotorax a tension, sin esperar a la radiografia. PERICARDIOCENTESIS en el taponamiento. Y trombectomia percutanea o quirurgica en la embolia cuando la trombolisis esta contraindicada o fracasa.',
      criterios_uci: 'Todos, tras la descompresion inicial. La embolia de alto riesgo y el taponamiento requieren vigilancia estrecha por el riesgo de recurrencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la reacumulacion del derrame o del neumotorax, la funcion del ventriculo derecho y las complicaciones de la trombolisis. Estudio etiologico del derrame pericardico y de la tromboembolia.',
      seguimiento_ambulatorio: 'Anticoagulacion y estudio de la causa en la tromboembolia, incluida la valoracion de la hipertension pulmonar tromboembolica cronica. Seguimiento del derrame pericardico.',
      pronostico: 'Excelente si se identifica y se resuelve a tiempo, y muy malo si no se piensa en el. Es el perfil donde la diferencia entre pensarlo y no pensarlo se mide en minutos.',
      algoritmo: ['Mirar las YUGULARES: si estan ingurgitadas, no es hipovolemico', 'Auscultar y percutir el torax', 'Si hay sospecha de neumotorax a TENSION, descomprimir sin esperar imagen', 'Hacer ECOGRAFIA: pulmon, pericardio y ventriculo derecho', 'Buscar derrame con colapso de cavidades derechas', 'Buscar dilatacion del ventriculo derecho y septo aplanado', 'Puncionar el pericardio si hay taponamiento', 'Anticoagular ante la sospecha de embolia', 'Trombolisar la embolia de alto riesgo salvo contraindicacion', 'En el ventilado que se deteriora de golpe, pensar en neumotorax']
    },
    {
      nombre: 'Reanimacion: fluidos, vasoactivos y objetivos',
      color: '#8a6a1f',
      definicion: 'Conjunto de medidas de soporte hemodinamico destinadas a restaurar la perfusion tisular mientras se corrige la causa del choque.',
      fisiopatologia: 'Un bolo de volumen solo aumenta el gasto cardiaco si el corazon esta en la parte ascendente de su curva de funcion, y eso ocurre en aproximadamente la mitad de los pacientes en choque. En el resto, el fluido no mejora el gasto y se distribuye al intersticio, produciendo edema pulmonar, intestinal y renal. De ahi que la pregunta util no sea cuanto dar sino a quien: las pruebas DINAMICAS (elevacion pasiva de las piernas, variacion de la presion de pulso) predicen la respuesta, y las ESTATICAS como la presion venosa central no lo hacen, por mucho que se sigan usando para eso.',
      epidemiologia: 'El balance hidrico positivo acumulado se asocia de forma consistente a peor evolucion. Los cristaloides balanceados han mostrado ventajas frente al suero salino en el paciente critico. Y la noradrenalina se prefiere a la dopamina, que se asocio a mas arritmias.',
      factores_riesgo: ['Dar bolos sin comprobar la respuesta', 'Usar la presion venosa central para decidir el volumen', 'Retrasar la noradrenalina esperando a terminar el volumen', 'Retrasar la noradrenalina por no tener via central', 'Perseguir una tension arterial sin mirar la perfusion', 'Ignorar el basal tensional del paciente', 'No reevaluar tras cada bolo', 'Usar suero salino en grandes volumenes', 'Sedar la agitacion del paciente hipoperfundido', 'No corregir la causa mientras se optimizan los numeros'],
      clinica: 'La reevaluacion se hace con lo mismo con lo que se hizo el diagnostico: piel, diuresis, conciencia y lactato. Un ensayo aleatorizado comparo dirigir la reanimacion por el relleno capilar frente al lactato, con resultados al menos comparables, lo que devolvio valor a la exploracion mas simple.',
      criterios_dx: 'No aplica: es la fase de tratamiento. Ver la Figura 3 de Definicion.',
      laboratorio: 'Lactato seriado para valorar el aclaramiento. Gasometria, ionograma y calcio. Funcion renal. Y en la hemorragia, coagulacion y fibrinogeno.',
      imagen: 'ECOGRAFIA repetida para valorar la respuesta, la aparicion de lineas B (que indican sobrecarga y son una se&#241;al de parar) y la evolucion de la funcion cardiaca.',
      complementarios: 'Monitorizacion continua, diuresis horaria y, en casos seleccionados, monitorizacion avanzada del gasto cardiaco cuando la situacion no se aclara con lo anterior.',
      dx_diferencial: 'Ante la falta de respuesta: causa no corregida, perfil equivocado o mezclado, hipovolemia no reconocida, insuficiencia suprarrenal relativa, acidosis grave que reduce la respuesta a las catecolaminas, o una complicacion nueva.',
      tx_medico: 'Bolos de CRISTALOIDE BALANCEADO con reevaluacion tras cada uno. Elevacion pasiva de las piernas como prueba de respuesta, que equivale a un bolo REVERSIBLE. Y una vez restaurada la perfusion, dejar de dar volumen y plantear el balance negativo.',
      tx_farmacologico: 'NORADRENALINA de primera linea, iniciada PRECOZMENTE y, si hace falta, por via periferica con vigilancia mientras se canaliza una central. Vasopresina como ahorrador. Inotropico si el gasto es bajo pese a una tension aceptable. Y, en el choque septico refractario, valorar hidrocortisona.',
      tx_intervencionista: 'La que exija la causa: drenaje, puncion, hemostasia o revascularizacion. Ninguna dosis de vasopresor sustituye a la correccion del mecanismo.',
      criterios_uci: 'Todo paciente que precisa vasoactivos o que mantiene hipoperfusion pese a la reanimacion inicial.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion estructurada y frecuente. Cuando la perfusion se restablece, cambiar el objetivo: pasar de reanimar a retirar volumen, porque el balance positivo acumulado se paga en pulmon y ri&#241;on.',
      seguimiento_ambulatorio: 'Depende de la causa. Conviene explorar las secuelas de un choque prolongado, que son frecuentes y se buscan poco.',
      pronostico: 'Mejora con la precocidad y con la correccion de la causa. Empeora con el exceso de volumen y con el tiempo en hipoperfusion.',
      algoritmo: ['Comprobar si el paciente va a RESPONDER antes de dar volumen', 'Usar la elevacion pasiva de las piernas como bolo reversible', 'No usar la presion venosa central para esa decision', 'Dar cristaloides BALANCEADOS en bolos y reevaluar tras cada uno', 'Iniciar NORADRENALINA pronto, incluso por via periferica', 'Fijar una tension media en torno a 65, individualizada', 'Mirar la perfusion: piel, diuresis, conciencia y lactato', 'Parar el volumen cuando aparezcan signos de sobrecarga', 'Corregir la CAUSA, que es lo unico que resuelve el choque', 'Cuando el paciente mejore, pasar a balance negativo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El choque se diagnostica mirando la perfusion, se clasifica con tres preguntas mas la ecografia, y se trata corrigiendo la causa. Todo lo demas, incluida la mejor reanimacion, sirve para comprar tiempo.',
    parametros: ['Buscar HIPOPERFUSION y no esperar a la hipotension', 'Mirar la piel, la diuresis y el nivel de conciencia', 'Comparar la tension con el basal del paciente', 'Vigilar el estrechamiento de la PRESION DE PULSO en la hemorragia', 'Explorar las YUGULARES para separar hipovolemico de obstructivo', 'Hacer ECOGRAFIA a pie de cama en los primeros minutos', 'Comprobar la respuesta a volumen antes de seguir dando bolos', 'No usar la presion venosa central para decidir el volumen', 'Iniciar la noradrenalina pronto, sin esperar a una via central', 'Descomprimir el neumotorax a tension sin esperar imagen', 'Dar ADRENALINA intramuscular de inmediato en la anafilaxia', 'Corregir la CAUSA: ningun vasopresor la sustituye'],
    criterios_uci_general: 'Todo choque establecido: necesidad de vasoactivos, hipoperfusion mantenida pese a la reanimacion inicial, lactato que no aclara, hemorragia grado III o IV, necesidad de transfusion masiva, anafilaxia refractaria o con compromiso de la via aerea, choque cardiogenico de cualquier causa y choque obstructivo tras la descompresion inicial.',
    criterios_tips_general: 'La derivacion portosistemica intrahepatica transyugular es una opcion en la hemorragia variceal refractaria; su detalle esta en el tema de cirrosis hepatica.',
    criterios_trasplante_general: 'Valoracion de trasplante cardiaco o de asistencia ventricular de larga duracion en el choque cardiogenico refractario de causa no reversible. En el resto de los perfiles no aplica en la fase aguda.',
    prevencion: 'Primaria: profilaxis tromboembolica, control de la anticoagulacion, tratamiento precoz de la infeccion, y en la alergia conocida un plan escrito con ADRENALINA AUTOINYECTABLE prescrita y explicada, que se omite con enorme frecuencia. Secundaria: deteccion precoz del deterioro con escalas de alerta y con una exploracion que no cuesta nada, porque el choque normotenso es la forma en que este cuadro se escapa. Terciaria: prevencion de la iatrogenia de la propia reanimacion, sobre todo del exceso de volumen; vigilancia de la reaccion bifasica tras una anafilaxia; y seguimiento de las secuelas fisicas y cognitivas de los supervivientes de un choque prolongado.'
  }
};

export const compCites = {
  'Reconocer el choque': [1, 2, 12],
  'Choque hipovolemico y hemorragico': [3, 15, 16],
  'Choque distributivo': [4, 7, 11],
  'Choque cardiogenico': [5, 13, 14],
  'Choque obstructivo': [6, 2],
  'Reanimacion: fluidos, vasoactivos y objetivos': [8, 9, 10, 12]
};
export const estigmasTitulo = 'Signos que orientan el perfil';
export const estigmas = [
  { s: 'Piel moteada en las rodillas', p: 'Hipoperfusion periferica', photo: null, desc: 'La ventana mas barata a la microcirculacion y con valor pronostico demostrado. Persiste cuando la tension ya se ha normalizado, lo que recuerda que corregir el numero no equivale a perfundir el tejido.' },
  { s: 'Presion de pulso estrecha', p: 'Lo primero de la hemorragia', photo: null, desc: 'La vasoconstriccion eleva la diastolica antes de que caiga la sistolica. Por eso el estrechamiento de la presion de pulso aparece en el grado II, mucho antes que la hipotension, que no llega hasta el grado III.' },
  { s: 'Hemoglobina normal en la hemorragia aguda', p: 'No descarta nada', photo: null, desc: 'Todavia no ha habido tiempo de hemodilucion. Una hemoglobina normal en las primeras horas de un sangrado importante es lo esperable, y tomarla como tranquilizadora es un error clasico.' },
  { s: 'Deficit de base', p: 'Mas sensible que la tension', photo: null, desc: 'Forma parte de la clasificacion de la hemorragia de la ultima edicion del manual de trauma y se altera antes que la tension arterial. Un deficit creciente sugiere sangrado activo aunque las constantes aguanten.' },
  { s: 'Piel caliente con hipotension', p: 'Choque distributivo', photo: null, desc: 'El gasto esta alto y lo que ha caido son las resistencias. Un paciente rosado y caliente puede estar profundamente hipoperfundido a nivel tisular, con lactato elevado y sin orinar.' },
  { s: 'Hipotension con bradicardia y piel seca', p: 'Choque neurogenico', photo: null, desc: 'La perdida del tono simpatico por lesion medular alta produce vasodilatacion sin taquicardia compensadora. En el politraumatizado, asumir ese origen sin descartar hemorragia es un error grave.' },
  { s: 'Ingurgitacion yugular con hipotension', p: 'No es hipovolemico', photo: null, desc: 'Separa en segundos el hipovolemico del cardiogenico y del obstructivo. Es una exploracion gratuita que reorienta por completo el tratamiento, y se omite con frecuencia.' },
  { s: 'Pulso paradojico', p: 'Taponamiento', photo: null, desc: 'Descenso inspiratorio marcado de la tension sistolica. Junto con los tonos apagados y la ingurgitacion yugular completa la triada clasica, aunque la ecografia la ha desplazado como herramienta diagnostica.' },
  { s: 'Ausencia de deslizamiento pleural', p: 'Neumotorax', photo: null, desc: 'Signo ecografico rapido y fiable. En el neumotorax a TENSION, sin embargo, no hay que esperar a ninguna prueba: el diagnostico es clinico y la descompresion es inmediata.' },
  { s: 'Ventriculo derecho dilatado con septo aplanado', p: 'Embolia masiva', photo: null, desc: 'La sobrecarga aguda de presion dilata el ventriculo derecho y desplaza el septo, reduciendo el llenado izquierdo. Se ve en segundos con la ecografia a pie de cama y cambia el tratamiento de inmediato.' },
  { s: 'Anafilaxia sin exantema', p: 'Existe y despista', photo: null, desc: 'Una parte de las anafilaxias cursa sin manifestaciones cutaneas y se etiqueta de asma o de sincope. El diagnostico es clinico, el tratamiento es adrenalina intramuscular y no hay que esperar a la triptasa.' },
  { s: 'Agitacion en el paciente hipoperfundido', p: 'No es ansiedad', photo: null, desc: 'Es hipoperfusion cerebral. Se confunde con ansiedad y se trata con sedantes, que reducen aun mas la tension y enmascaran el deterioro. Ante un paciente inquieto y frio, primero hay que perfundirlo.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Perfil hemodinamico del choque (calculadora disponible)': [1, 2],
  'Prediccion de respuesta a volumen (calculadora disponible)': [8, 9],
  'Grado de hemorragia del manual de trauma (calculadora disponible)': [3],
  'Indice de choque': [3, 1],
  'Criterios de choque septico': [4],
  'Estadios de choque cardiogenico': [5]
};
export const escalaCalc = {
  'Perfil hemodinamico del choque (calculadora disponible)': 'perfil-choque',
  'Prediccion de respuesta a volumen (calculadora disponible)': 'respuesta-volumen',
  'Grado de hemorragia del manual de trauma (calculadora disponible)': 'hemorragia-atls'
};
export const compGroups = [
  { name: 'El sindrome', items: ['Reconocer el choque'] },
  { name: 'Los cuatro perfiles', items: ['Choque hipovolemico y hemorragico', 'Choque distributivo', 'Choque cardiogenico', 'Choque obstructivo'] },
  { name: 'El tratamiento', items: ['Reanimacion: fluidos, vasoactivos y objetivos'] }
];
export const complicacionesIntro = 'La primera ficha es el reconocimiento, que es donde se pierde mas tiempo: el choque se define por la perfusion y no por la tension, y una parte de los pacientes llega normotensa. Las cuatro siguientes son los perfiles, cada uno con su mecanismo y su tratamiento: el que ha perdido volumen, el que ha perdido el tono, el que ha perdido la bomba y el que tiene algo que obstruye, este ultimo el menos frecuente, el que mas se pasa por alto y el que mejor responde cuando se piensa en el. Y la ultima es la reanimacion, cuya pregunta central no es cuanto volumen dar sino cuando dejar de darlo.';
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
  root: { title: 'PACIENTE CON SIGNOS DE HIPOPERFUSION', color: '#8c2e3a', target: 'definicion' },
  branches: [
    { title: 'RECONOCERLO', sub: 'Perfusion, no tension', color: '#8c2e3a', target: 'complicaciones', leaves: [
      { title: 'La piel', sub: 'Moteado y relleno lento', color: '#7a3f2e', target: 'diagnostico' },
      { title: 'El ri&#241;on', sub: 'Oliguria, y hay que medirla', color: '#3d5a73', target: 'diagnostico' },
      { title: 'El cerebro', sub: 'Agitacion, no ansiedad', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Choque normotenso', sub: 'Existe y se escapa', color: '#8c2e3a', target: 'complicaciones' }
    ] },
    { title: 'QUE PERFIL ES', sub: 'Volumen, tono, bomba u obstaculo', color: '#3f6b52', target: 'clasificacion', leaves: [
      { title: 'Piel fria y yugulares planas', sub: 'Hipovolemico', color: '#7a3f2e', target: 'complicaciones' },
      { title: 'Piel caliente', sub: 'Distributivo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Hipoperfusion con congestion', sub: 'Cardiogenico', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Yugulares ingurgitadas', sub: 'Obstructivo: se resuelve rapido', color: '#6b4a8c', target: 'complicaciones' }
    ] },
    { title: 'REANIMAR', sub: 'Y sobre todo, corregir la causa', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Va a responder?', sub: 'Elevar las piernas', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Noradrenalina pronto', sub: 'Sin esperar via central', color: '#8c2e3a', target: 'complicaciones' },
      { title: 'Objetivos de perfusion', sub: 'Piel, diuresis y lactato', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Corregir la causa', sub: 'Nada la sustituye', color: '#3d5a73', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [3, 12], no_invasivos: [1, 8, 3], imagen: [2, 6] };
export const clasificacionCite = [1, 2, 3, 5];
export const seguimientoCite = [4, 10, 12];
