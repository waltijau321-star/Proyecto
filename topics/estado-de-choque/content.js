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
// edicion en español (la tabla de grados de hemorragia se transcribio del PDF, no de memoria),
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
  subtitulo: 'Módulo 69 · Medicina Interna',
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
    <strong style="color:#8c2e3a;">El choque no se define por la tensión arterial sino por la HIPOPERFUSIÓN.</strong> <span style="color:var(--ink-dim);">Un tercio largo de los pacientes en choque tiene la tensión todavía normal cuando llega, porque la vasoconstricción la sostiene hasta que ya no puede.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:92px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a3f2e22;border:1px solid #7a3f2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a3f2e;">LA PIEL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Frialdad, palidez, <strong style="color:var(--ink);">MOTEADO</strong> de rodillas y relleno capilar lento. Es la ventana más barata al estado de la microcirculación y tiene valor pronóstico demostrado. En el choque distributivo, en cambio, la piel puede estar CALIENTE, y eso confunde.</div>
    </div>
    <div style="display:grid;grid-template-columns:92px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">EL RIÑÓN</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">OLIGURIA</strong>, por debajo de 0.5 mL/kg/h. Es el órgano que primero avisa y el más fácil de medir, y sin embargo se pierde constantemente porque nadie sonda ni cuantifica hasta que el paciente ya lleva horas sin orinar.</div>
    </div>
    <div style="display:grid;grid-template-columns:92px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a8c;">EL CEREBRO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inquietud, agitación, desorientación y después somnolencia. La <strong style="color:var(--ink);">AGITACIÓN</strong> del paciente en choque se confunde con ansiedad y se trata con sedantes, que es exactamente lo que no hay que hacer.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">El LACTATO cierra el círculo.</strong> Por encima de 2 mmol/L apoya hipoperfusión, aunque no es específico: sube también con adrenérgicos, insuficiencia hepática, convulsiones y metformina. Lo que más pronóstico aporta no es la cifra sino su <strong>ACLARAMIENTO</strong> con el tratamiento.
    </div>
    <div style="border:1px solid #8c2e3a;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c2e3a;">Dos trampas de la tensión arterial.</strong> La primera, el <strong>choque NORMOTENSO</strong>: hipoperfusión con tensión conservada. La segunda, la tensión "normal" del hipertenso crónico: 110/70 en quien vive en 170/90 puede ser una hipotensión grave. Lo que importa es el cambio respecto a SU basal.
    </div>
  </div>
</div>`;

const perfilesHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c2e3a;border-radius:8px;padding:5px 9px;background:#8c2e3a12;margin-bottom:6px;">
    <strong style="color:#8c2e3a;">Tres preguntas clasifican cualquier choque:</strong> <span style="color:var(--ink-dim);">¿falta VOLUMEN, falla la BOMBA, o se ha perdido el TONO? Y una cuarta que hay que descartar siempre porque se resuelve con las manos: ¿hay algo que OBSTRUYE?</span>
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
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#7a3f2e;">HIPOVOLÉMICO</strong><br><span style="color:var(--ink-dim);">Hemorragia, deshidratación, tercer espacio</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Baja</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Bajo</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Altas</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Fría</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3f6b52;">DISTRIBUTIVO</strong><br><span style="color:var(--ink-dim);">Séptico, anafiláctico, neurogenico</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Baja o normal</td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong>Alto</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3f6b52;">BAJAS</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong>Caliente</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3d5a73;">CARDIOGÉNICO</strong><br><span style="color:var(--ink-dim);">Infarto, arritmia, valvulopatía aguda</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#3d5a73;">ALTA</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Bajo</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Altas</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Fría</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#6b4a8c;">OBSTRUCTIVO</strong><br><span style="color:var(--ink-dim);">Neumotórax, taponamiento, embolia</span></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Alta</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Bajo</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Altas</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Fría</td>
    </tr>
  </table>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">La ecografía a pie de cama contesta las tres preguntas en minutos.</strong> Corazón (contractilidad y dilatación del ventrículo derecho), vena cava (volumen), pulmón (líneas B, deslizamiento, derrame) y abdomen (líquido libre, aorta). Es lo que más ha cambiado el manejo del choque en la última década.
    </div>
    <div style="border:1px solid #8c2e3a;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c2e3a;">Y una advertencia que evita errores graves:</strong> los perfiles se MEZCLAN. Un choque séptico con miocardiopatía asociada, un politraumatizado con neumotórax y hemorragia, o un infarto con hipovolemia por vómitos. Encontrar una causa no autoriza a dejar de buscar las demás.
    </div>
  </div>
</div>`;

const reanimarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;margin-bottom:6px;">
    <strong style="color:#8a6a1f;">La pregunta de la reanimación no es cuanto volumen dar, sino cuando PARAR.</strong> <span style="color:var(--ink-dim);">Solo la mitad de los pacientes en choque responde a un bolo de volumen, y al resto se le añade edema sin ganar nada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">FLUIDOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CRISTALOIDES BALANCEADOS</strong> en bolos, reevaluando después de cada uno. La elevación pasiva de las piernas es la prueba de respuesta a volumen más útil y no cuesta nada: es un bolo reversible. La presión venosa central <strong style="color:#8c3a34;">NO predice</strong> la respuesta a volumen y no debe usarse para eso.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c2e3a22;border:1px solid #8c2e3a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c2e3a;">VASOACTIVOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">NORADRENALINA</strong> es el vasopresor de primera línea. No hay que esperar a "terminar el volumen" para empezarla: iniciarla pronto acorta el tiempo en hipotensión y permite dar MENOS fluido. Se puede empezar por via periférica mientras se canaliza una central.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">OBJETIVOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Tensión arterial media en torno a <strong style="color:var(--ink);">65 mmHg</strong>, individualizada según el basal del paciente. Y por encima de ese número, los objetivos que de verdad importan: <strong>diuresis, nivel de conciencia, temperatura y relleno de la piel, y aclaramiento del lactato</strong>.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8c3a34;border-radius:8px;background:#8c3a3410;color:var(--ink-dim);">
    <strong style="color:#8c3a34;">Y lo que ordena todo lo anterior: la CAUSA.</strong> El mejor vasopresor no compensa un neumotórax a tensión sin drenar, un taponamiento sin puncionar, una hemorragia sin controlar o un foco séptico sin drenar. En el choque, la reanimación compra TIEMPO; lo que salva al paciente es corregir el mecanismo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El choque es un fallo circulatorio agudo y generalizado en el que el aporte de oxígeno no cubre las necesidades del tejido. Su definición es por tanto de <strong>perfusión</strong>, no de tensión arterial, y esa distinción no es académica: una parte relevante de los pacientes en choque llega con la tensión todavía normal, sostenida por la vasoconstricción hasta que esta claudica.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: reconocerlo.</strong></p>
<p style="margin:0 0 12px;">Tres ventanas clínicas cuentan lo que pasa en la microcirculación sin necesidad de aparatos: la <strong>piel</strong>, el <strong>riñón</strong> y el <strong>cerebro</strong>. El lactato cierra el círculo, con la advertencia de que lo que aporta pronóstico es su aclaramiento y no la cifra aislada.</p>
${figBlock('Figura 1', 'Reconocer el choque: tres ventanas y dos trampas de la tensión', reconocerHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: clasificarlo.</strong></p>
<p style="margin:0 0 12px;">Tres preguntas bastan (¿falta volumen, falla la bomba, se ha perdido el tono?) más una cuarta que hay que descartar siempre porque se resuelve con las manos: ¿hay algo que obstruye? La ecografía a pie de cama contesta las cuatro en minutos, y conviene recordar que los perfiles se <strong>mezclan</strong>.</p>
${figBlock('Figura 2', 'Los cuatro perfiles hemodinámicos y como se separan', perfilesHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: reanimarlo.</strong></p>
<p style="margin:0 0 12px;">La pregunta relevante no es cuanto volumen dar sino cuando parar, porque solo la mitad de los pacientes responde a un bolo y al resto se le añade edema. Noradrenalina precoz, objetivos de perfusión más allá del número de tensión, y sobre todo la corrección de la <strong>causa</strong>, que es lo único que resuelve el cuadro.</p>
${figBlock('Figura 3', 'Reanimación: fluidos, vasoactivos, objetivos y la causa', reanimarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No exigir hipotensión para diagnosticar un choque. No leer la tensión sin conocer el basal del paciente. No sedar la agitación de quien esta hipoperfundido. No usar la presión venosa central para decidir si dar volumen. No seguir dando bolos sin comprobar que el paciente responde. No retrasar la noradrenalina hasta "terminar" el volumen, ni retrasarla por no tener una via central. No dar volumen a ciegas en el choque cardiogénico. No olvidar las causas que se resuelven con las manos: <strong>neumotórax a tensión, taponamiento y hemorragia</strong>. No conformarse con normalizar la tensión mientras el lactato no baja y el paciente no orina. Y no dar por cerrado el diagnóstico al encontrar una causa, porque los perfiles se mezclan.</p>`;

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
      tituloA: 'Choque frío',
      tituloB: 'Choque caliente',
      compensada: 'Piel FRÍA, pálida, con moteado de rodillas y relleno capilar lento, que es el patrón del choque hipovolémico, cardiogénico y obstructivo. La vasoconstricción compensadora eleva la diastólica y por eso lo primero que se estrecha es la PRESIÓN DE PULSO, mucho antes de que caiga la sistólica. Hay taquicardia, oliguria, inquietud y después somnolencia. Ojo con dos situaciones que enmascaran la taquicardia: el paciente betabloqueado y el choque neurogenico, donde la respuesta cronotropa esta abolida.',
      descompensada: 'Piel CALIENTE y bien perfundida con hipotensión, que es el patrón del choque DISTRIBUTIVO en su fase inicial: el gasto cardiaco esta alto y lo que ha caído son las resistencias. Ese aspecto engaña, porque un paciente rosado y caliente puede estar profundamente hipoperfundido a nivel tisular, con lactato elevado y oliguria. En fases avanzadas el choque distributivo también se vuelve frío, por la disfunción miocárdica asociada y por el agotamiento de la respuesta. La presencia de exantema, angioedema o broncoespasmo orienta a anafilaxia, y la bradicardia paradójica con piel caliente y seca, a un origen neurogenico.'
    },
    laboratorio: [
      { prueba: 'Lactato arterial seriado', utilidad: 'Por encima de 2 mmol/L apoya hipoperfusión y forma parte de la definición de choque séptico. Lo que más pronóstico aporta es el ACLARAMIENTO: un lactato que no baja con la reanimación obliga a replantear el mecanismo, no a repetir el mismo bolo.' },
      { prueba: 'Gasometría con exceso de base', utilidad: 'El DÉFICIT DE BASE es uno de los indicadores más sensibles de hemorragia oculta y forma parte de la clasificación de la hemorragia de la última edicion del manual de trauma. Se altera antes que la tensión arterial.' },
      { prueba: 'Hemograma y pruebas cruzadas', utilidad: 'En la hemorragia aguda, la HEMOGLOBINA INICIAL PUEDE SER NORMAL, porque todavía no ha habido tiempo de hemodilución. Un valor normal en las primeras horas no descarta un sangrado importante y no debe tranquilizar.' },
      { prueba: 'Coagulación, fibrinógeno y calcio', utilidad: 'La coagulopatía del traumatizado aparece pronto y empeora con la hipotermia y la acidosis, que junto a ella forman la triada letal. El calcio iónico cae con la transfusión masiva por el citrato y hay que reponerlo.' },
      { prueba: 'Troponina y péptidos natriuréticos', utilidad: 'Orientan al origen cardiogénico, pero conviene saber que la troponina se eleva en casi cualquier choque por sufrimiento miocárdico secundario: su elevación no prueba que la causa sea cardiaca.' },
      { prueba: 'Función renal, hepática e ionograma', utilidad: 'Documentan la repercusión sobre otros órganos y detectan las alteraciones que empeoran el cuadro: hipopotasemia, hipocalcemia, hipomagnesemia y acidosis, todas ellas corregibles.' },
      { prueba: 'Hemocultivos y cultivos del foco', utilidad: 'Antes del antibiótico siempre que no lo retrasen. En el choque séptico, cada hora de retraso del antimicrobiano cuenta, de modo que el orden correcto es extraer y tratar, no esperar.' },
      { prueba: 'Triptasa sérica', utilidad: 'Apoya el diagnóstico de anafilaxia si se extrae en las primeras horas y se compara con un valor basal posterior. NUNCA hay que esperarla para tratar: la anafilaxia es un diagnóstico clínico y el tratamiento es inmediato.' }
    ],
    no_invasivos: [
      { metodo: 'Perfil hemodinámico del choque (calculadora disponible)', interpretacion: 'Cruza los datos de exploración y de ecografía para orientar hacia un perfil hipovolémico, distributivo, cardiogénico u obstructivo, y recuerda que se mezclan.', cutoff: 'Piel caliente con gasto alto y resistencias bajas: distributivo' },
      { metodo: 'Predicción de respuesta a volumen (calculadora disponible)', interpretacion: 'Reúne las pruebas dinámicas que si predicen respuesta (elevación pasiva de las piernas, variación de la presión de pulso) y advierte de las estáticas que no la predicen.', cutoff: 'Solo la mitad de los pacientes en choque responde a un bolo de volumen' },
      { metodo: 'Grado de hemorragia del manual de trauma (calculadora disponible)', interpretacion: 'Clasifica la hemorragia en cuatro grados con frecuencia cardiaca, tensión, presión de pulso, diuresis, conciencia y déficit de base.', cutoff: 'La sistólica se mantiene normal hasta el grado III: lo primero que cae es la presión de pulso' },
      { metodo: 'Ecografía clínica del paciente en choque', interpretacion: 'Corazón, vena cava, pulmón y abdomen en pocos minutos. Busca contractilidad, dilatación del ventrículo derecho, derrame pericárdico, líquido libre, neumotórax y aneurisma de aorta.', cutoff: 'Es lo que más ha cambiado el manejo del choque en la última década' },
      { metodo: 'Índice de choque', interpretacion: 'Frecuencia cardiaca dividida entre la tensión arterial sistólica. Se altera antes que cualquiera de los dos por separado y es especialmente útil en la hemorragia y en la embarazada.', cutoff: 'Por encima de 0.9 sugiere compromiso hemodinámico aunque la tensión sea normal' },
      { metodo: 'Relleno capilar y temperatura de la piel', interpretacion: 'Objetivos de reanimación validados frente al lactato en un ensayo aleatorizado. No cuestan nada, se pueden repetir cada 30 minutos y no dependen de ningún aparato.', cutoff: 'Relleno capilar mayor de 3 segundos indica hipoperfusión periférica' }
    ],
    imagen: [
      { modalidad: 'Ecografía a pie de cama', hallazgos: 'La prueba de imagen más útil del paciente en choque. Ventrículo izquierdo hipocontractil (cardiogénico), ventrículo derecho dilatado con septo aplanado (embolia), derrame pericárdico con colapso de cavidades (taponamiento), ausencia de deslizamiento pleural (neumotórax), líquido libre abdominal (hemorragia) y vena cava colapsada (hipovolemia).' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Rápida y disponible. Busca neumotórax, ensanchamiento mediastínico, congestión, derrame y foco neumónico. En el neumotórax a TENSIÓN no hay que esperarla: el diagnóstico es clínico y el tratamiento, inmediato.' },
      { modalidad: 'Angiografía por tomografía', hallazgos: 'Confirma la embolia pulmonar, la disección aórtica y el punto de sangrado, y localiza el foco abdominal. La decisión de trasladar a un paciente inestable se toma pensando en si el resultado va a cambiar la conducta en los proximos minutos.' },
      { modalidad: 'Electrocardiograma', hallazgos: 'No es imagen pero se pide en el mismo gesto. Busca infarto, arritmia y los signos de sobrecarga derecha de la embolia. Un electrocardiograma normal no descarta un origen cardiogénico ni una embolia.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación que manda es la <strong>fisiopatológica</strong>, en cuatro perfiles: <strong>hipovolémico</strong> (falta volumen), <strong>distributivo</strong> (se ha perdido el tono), <strong>cardiogénico</strong> (falla la bomba) y <strong>obstructivo</strong> (algo impide el llenado o la eyección). Cada uno tiene un patrón distinto de precarga, gasto y resistencias, y sobre todo un tratamiento distinto. En paralelo se clasifica por <strong>gravedad</strong>, y en la hemorragia existe una gradación propia en cuatro grados. Y una advertencia transversal: los perfiles se <strong>mezclan</strong> con frecuencia.`,
    escalas: [
      { nombre: 'Perfil hemodinámico del choque (calculadora disponible)', componentes: 'Temperatura y relleno de la piel, presión de pulso, ingurgitación yugular, y hallazgos ecográficos de contractilidad, ventrículo derecho, vena cava, pulmón y abdomen.', formula: 'Combinación de esos datos en cuatro patrones: hipovolémico, distributivo, cardiogénico y obstructivo.', interpretacion: 'La piel CALIENTE con hipotensión es lo que más separa el distributivo del resto. Y encontrar un perfil no autoriza a dejar de buscar los demás: la mezcla de perfiles es frecuente y explica muchas reanimaciones que no funcionan.' },
      { nombre: 'Predicción de respuesta a volumen (calculadora disponible)', componentes: 'Elevación pasiva de las piernas, variación de la presión de pulso en el ventilado sin esfuerzos, colapsabilidad de la vena cava, y presencia de signos de sobrecarga.', formula: 'Se considera respondedor el que aumenta el gasto o la presión de pulso de forma significativa tras la maniobra o el bolo.', interpretacion: 'La PRESIÓN VENOSA CENTRAL no predice la respuesta a volumen y no debe usarse para eso, pese a lo extendido de la costumbre. La elevación pasiva de las piernas es la prueba más útil porque equivale a un bolo REVERSIBLE.' },
      { nombre: 'Grado de hemorragia del manual de trauma (calculadora disponible)', componentes: 'Pérdida sanguínea estimada, frecuencia cardiaca, tensión arterial, presión de pulso, frecuencia respiratoria, diuresis, escala de coma de Glasgow y déficit de base.', formula: 'Cuatro grados: I con menos del 15% de pérdida, II del 15 al 30%, III del 31 al 40% y IV por encima del 40%.', interpretacion: 'El dato más útil para la práctica es que la TENSIÓN SISTÓLICA se mantiene normal hasta el grado III: lo primero que se altera es la PRESIÓN DE PULSO, por el ascenso de la diastólica que produce la vasoconstricción. El grado IV exige protocolo de transfusión masiva.' },
      { nombre: 'Índice de choque', componentes: 'Frecuencia cardiaca y tensión arterial sistólica.', formula: 'Frecuencia cardiaca dividida entre la tensión sistólica.', interpretacion: 'Por encima de 0.9 sugiere compromiso hemodinámico aunque ambos valores esten dentro de rango. Es especialmente útil en la hemorragia, en la embarazada y en el paciente joven, que compensan muy bien hasta que se descompensan de golpe.' },
      { nombre: 'Criterios de choque séptico', componentes: 'Sepsis, necesidad de vasopresores y lactato.', formula: 'Sepsis más necesidad de vasopresores para mantener una tensión arterial media de 65 mmHg o más, más lactato por encima de 2 mmol/L, ambas cosas pese a una reanimación adecuada.', interpretacion: 'Exige las DOS condiciones a la vez. Un paciente con vasopresores y lactato normal, o con lactato alto sin vasopresores, no cumple la definición y tiene un pronóstico distinto.' },
      { nombre: 'Estadios de choque cardiogénico', componentes: 'Situación clínica, hemodinámica y necesidad de soporte, en una gradación de cinco estadios desde el paciente en riesgo hasta el que esta en parada refractaria.', formula: 'Gradación progresiva: en riesgo, comienzo, clásico, deteriorandose y extremo.', interpretacion: 'Su utilidad es homogeneizar el lenguaje y decidir el momento del soporte mecánico o del traslado a un centro con esa capacidad, que es una decisión muy dependiente del tiempo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Reconocer el choque',
      color: '#8c2e3a',
      definicion: 'Fallo circulatorio agudo y generalizado en el que el aporte de oxígeno no cubre las necesidades del tejido, con independencia de cual sea la cifra de tensión arterial.',
      fisiopatologia: 'Cuando el gasto cardiaco o el tono vascular caen, el organismo responde con vasoconstricción selectiva: sacrifica piel, músculo, riñón y territorio esplácnico para preservar corazón y cerebro. Esa redistribución explica toda la clínica precoz (piel fría y moteada, oliguria, inquietud) y explica también la trampa central del tema: mientras la vasoconstricción aguanta, la TENSIÓN SE MANTIENE. La hipotensión no es el comienzo del choque sino el momento en que la compensación se agota, y por eso esperar a que aparezca es esperar demasiado. En paralelo, el metabolismo anaerobio genera lactato, que es el marcador bioquímico de que ese sacrificio ya se esta pagando.',
      epidemiologia: 'Una proporción relevante de los pacientes en choque llega con la tensión arterial todavía dentro de rango, lo que se conoce como choque normotenso u oculto. El retraso en reconocerlo es uno de los determinantes más consistentes del pronóstico, y es un retraso evitable con una exploración que no cuesta nada.',
      factores_riesgo: ['Edad avanzada, con menor capacidad de compensación', 'Hipertensión crónica, que desplaza el umbral de hipotensión hacia arriba', 'Tratamiento con betabloqueantes, que enmascara la taquicardia', 'Marcapasos, que impide la respuesta cronotropa', 'Insuficiencia cardiaca previa', 'Insuficiencia suprarrenal o corticoterapia crónica', 'Embarazo, que aumenta la reserva y retrasa los signos', 'Deportistas y pacientes jóvenes, que compensan hasta desplomarse', 'Diabetes con neuropatía autonómica', 'Hipotermia, que enmascara la respuesta adrenergica'],
      clinica: 'Tres ventanas: PIEL fría, pálida, moteada y con relleno capilar lento (aunque puede estar caliente en el distributivo); RIÑÓN con oliguria por debajo de 0.5 mL/kg/h; y CEREBRO con inquietud, agitación y después somnolencia. La agitación se confunde con ansiedad y se trata con sedantes, que es exactamente lo contrario de lo que hace falta.',
      criterios_dx: 'Signos de hipoperfusión en al menos una de las tres ventanas, con o sin hipotensión, habitualmente con lactato por encima de 2 mmol/L. Ver la Figura 1 de Definición.',
      laboratorio: 'LACTATO seriado y gasometría con DÉFICIT DE BASE. Hemograma (recordando que la hemoglobina inicial puede ser normal en la hemorragia aguda), coagulación, función renal y hepática, ionograma y calcio. Hemocultivos si hay sospecha de infección.',
      imagen: 'ECOGRAFÍA A PIE DE CAMA, que orienta el perfil en minutos. Radiografía de tórax. Electrocardiograma en el mismo gesto.',
      complementarios: 'Monitorización continua, sonda vesical para cuantificar la diuresis (que se olvida hasta que el paciente lleva horas sin orinar) y dos vías venosas de grueso calibre.',
      dx_diferencial: 'Síncope, hipotensión ortostática, deshidratación sin choque, crisis de ansiedad, hipoglucemia, intoxicación y sepsis sin choque. La diferencia esta en los signos de HIPOPERFUSIÓN, no en la cifra de tensión.',
      tx_medico: 'Oxígeno, dos accesos vasculares, monitorización y reanimación inicial mientras se busca la causa. Posición y medidas generales según el perfil sospechado.',
      tx_farmacologico: 'Cristaloides balanceados en bolos con reevaluación tras cada uno, y NORADRENALINA precoz sin esperar a terminar el volumen. El resto depende de la causa.',
      tx_intervencionista: 'Lo que exija el mecanismo: drenaje, punción, hemostasia o revascularización.',
      criterios_uci: 'Todo choque establecido. La necesidad de vasoactivos, la hipoperfusión mantenida o el lactato que no aclara son criterios claros.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación frecuente y estructurada: piel, diuresis, conciencia y lactato. Si el paciente no mejora, la pregunta no es cuanto más volumen sino QUE MECANISMO se ha pasado por alto.',
      seguimiento_ambulatorio: 'Depende de la causa. Los supervivientes de un choque prolongado tienen secuelas físicas y cognitivas que conviene buscar de forma activa.',
      pronostico: 'Depende de la causa, de la duración de la hipoperfusión y de la precocidad del tratamiento. El tiempo en hipoperfusión es el factor más modificable.',
      algoritmo: ['Buscar signos de HIPOPERFUSIÓN, no esperar a la hipotensión', 'Mirar la piel: temperatura, moteado y relleno capilar', 'Cuantificar la DIURESIS, con sonda si hace falta', 'Valorar el nivel de conciencia y no sedar la agitación', 'Pedir LACTATO y repetirlo', 'Comparar la tensión con el BASAL del paciente', 'Poner dos vías de grueso calibre y monitorizar', 'Hacer ECOGRAFÍA a pie de cama para orientar el perfil', 'Iniciar reanimación mientras se busca la causa', 'Reevaluar de forma frecuente y estructurada']
    },
    {
      nombre: 'Choque hipovolémico y hemorrágico',
      color: '#7a3f2e',
      definicion: 'Choque por descenso del volumen intravascular, ya sea por pérdida de sangre (hemorrágico) o de agua y electrolitos (no hemorrágico).',
      fisiopatologia: 'La caída de la precarga reduce el volumen de eyección y el gasto cardiaco. La respuesta adrenergica produce taquicardia y vasoconstricción, y esta última eleva la DIASTÓLICA: por eso lo primero que se altera es el estrechamiento de la presión de pulso, mucho antes de que caiga la sistólica. En la hemorragia se añade la coagulopatía precoz del traumatizado, que se retroalimenta con la HIPOTERMIA y la ACIDOSIS formando la triada letal: cada una empeora a las otras dos, y por eso la reanimación moderna intenta romper el círculo desde el principio en lugar de corregirlas por separado.',
      epidemiologia: 'La hemorragia es la causa de muerte evitable más frecuente en el traumatizado. En el paciente médico, la hipovolemia por pérdidas digestivas, por diuréticos o por tercer espacio es una causa muy frecuente de choque y con frecuencia se subestima.',
      factores_riesgo: ['Traumatismo, sobre todo cerrado de abdomen y pelvis', 'Anticoagulación o antiagregación', 'Hemorragia digestiva y varices esofágicas', 'Aneurisma de aorta abdominal', 'Embarazo ectópico y hemorragia posparto', 'Vómitos y diarrea prolongados', 'Quemaduras extensas, por pérdida hacia el tercer espacio', 'Diuréticos a dosis alta', 'Cetoacidosis y estado hiperosmolar', 'Pancreatitis aguda grave'],
      clinica: 'Piel FRÍA, pálida y sudorosa, taquicardia, estrechamiento de la PRESIÓN DE PULSO, oliguria e inquietud. La sistólica se mantiene normal hasta que la pérdida supera el 30%, lo que explica por que confiar en ella retrasa el diagnóstico. En el sangrado externo el origen es evidente; en el interno hay que buscarlo en tórax, abdomen, pelvis, retroperitoneo y huesos largos.',
      criterios_dx: 'Signos de hipoperfusión con datos de hipovolemia y respuesta a la reposición. La gradación de la hemorragia se detalla en la calculadora del tema. Ver la Figura 2 de Definición.',
      laboratorio: 'HEMOGLOBINA, sabiendo que puede ser NORMAL al principio. Pruebas cruzadas urgentes. GASOMETRÍA CON DÉFICIT DE BASE, que es más sensible que la tensión. Coagulación, fibrinógeno y CALCIO IÓNICO, que cae con la transfusión masiva por el citrato. Lactato seriado.',
      imagen: 'ECOGRAFÍA abdominal urgente buscando líquido libre, y torácica buscando derrame y neumotórax. Radiografía de tórax y de pelvis en el traumatizado. Angiografía por tomografía si el paciente se estabiliza y hace falta localizar el punto de sangrado.',
      complementarios: 'Dos vías de grueso calibre. Sonda vesical para cuantificar. Y medidas contra la HIPOTERMIA desde el primer minuto: mantas, fluidos calientes y control de la temperatura ambiental, porque el enfriamiento agrava la coagulopatía.',
      dx_diferencial: 'Otros perfiles de choque, sobre todo el obstructivo, que también cursa con piel fría y baja precarga aparente. El taponamiento y el neumotórax a tensión pueden confundirse con hipovolemia si no se explora la ingurgitación yugular ni se hace ecografía.',
      tx_medico: 'CONTROL DE LA HEMORRAGIA como prioridad absoluta: compresión directa, torniquete en la extremidad, empaquetamiento, faja pélvica y traslado urgente a quirófano o a radiología intervencionista. Reposición con cristaloides balanceados de forma limitada y paso precoz a HEMODERIVADOS.',
      tx_farmacologico: 'ÁCIDO TRANEXÁMICO precoz en el traumatizado con hemorragia significativa. Transfusión con proporciones equilibradas de concentrados, plasma y plaquetas en la hemorragia masiva. Calcio para corregir la hipocalcemia por citrato. Vasopresores solo como puente, porque no sustituyen al volumen ni a la hemostasia.',
      tx_intervencionista: 'CIRUGÍA DE CONTROL DE DAÑOS, embolización, endoscopia hemostática o reparación endovascular según el origen. En la hemorragia, la mejor reanimación es cerrar el punto que sangra.',
      criterios_uci: 'Hemorragia grado III o IV, necesidad de transfusión masiva, coagulopatía establecida e inestabilidad pese a la reposición.',
      criterios_tips: 'La derivación portosistémica intrahepática transyugular es una opción en la hemorragia variceal refractaria, cuyo detalle esta en el tema de cirrosis hepática.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Vigilar la triada letal (hipotermia, acidosis y coagulopatía), el calcio iónico y el resangrado. La reevaluación frecuente detecta antes el sangrado que continua que cualquier cifra aislada.',
      seguimiento_ambulatorio: 'Corregir la causa y prevenir la recurrencia: control de la anticoagulación, tratamiento de la lesión sangrante y reposición de hierro.',
      pronostico: 'Bueno si la hemorragia se controla pronto. Empeora de forma marcada con el retraso en la hemostasia y con la instauración de la triada letal.',
      algoritmo: ['Buscar el estrechamiento de la PRESIÓN DE PULSO, no esperar a la sistólica', 'Localizar el sangrado: externo, tórax, abdomen, pelvis, retroperitoneo, huesos largos', 'Comprimir, empaquetar o poner faja pélvica de inmediato', 'Poner dos vías de grueso calibre y pedir pruebas cruzadas', 'No confiar en una hemoglobina inicial normal', 'Pedir gasometría y mirar el DÉFICIT DE BASE', 'Dar ácido tranexámico precoz en el traumatizado', 'Pasar pronto a hemoderivados en proporciones equilibradas', 'Prevenir la HIPOTERMIA desde el primer minuto', 'Llevar al paciente a hemostasia definitiva sin demora']
    },
    {
      nombre: 'Choque distributivo',
      color: '#3f6b52',
      definicion: 'Choque por pérdida del tono vascular y redistribución del flujo, con gasto cardiaco alto o normal y resistencias periféricas bajas. Incluye el séptico, el anafiláctico y el neurogenico.',
      fisiopatologia: 'La vasodilatación arteriolar y venular produce un desajuste entre el continente y el contenido: hay volumen, pero el lecho vascular se ha ampliado y la sangre se redistribuye mal. En la sepsis se añaden la fuga capilar y una alteración de la microcirculación que hace que el tejido siga hipoperfundido incluso con un flujo global alto, lo que explica el lactato elevado con la piel caliente. En la anafilaxia el mecanismo es la liberación masiva de mediadores por mastocitos y basófilos. Y en el choque neurogenico se pierde el tono simpático por lesión medular alta, con vasodilatación Y ausencia de taquicardia compensadora, que es lo que lo hace único.',
      epidemiologia: 'El séptico es, con diferencia, el más frecuente de los cuatro perfiles en el hospital. La anafilaxia es menos frecuente pero su desenlace depende por completo de la rapidez del tratamiento. El neurogenico aparece en lesiones medulares por encima del sexto segmento torácico.',
      factores_riesgo: ['Infección grave, sobre todo respiratoria, urinaria y abdominal', 'Inmunodepresion', 'Dispositivos intravasculares y sondas', 'Alergia conocida a fármacos, alimentos o himenopteros', 'Antecedente de anafilaxia previa', 'Tratamiento con betabloqueantes, que dificulta la respuesta a la adrenalina', 'Lesión medular cervical o torácica alta', 'Insuficiencia suprarrenal', 'Pancreatitis y quemaduras extensas', 'Hepatopatía avanzada, que cursa con vasodilatación basal'],
      clinica: 'Hipotensión con piel CALIENTE, bien perfundida y con relleno capilar rápido en la fase inicial, lo que engaña mucho. En la ANAFILAXIA hay exantema, prurito, angioedema, broncoespasmo y síntomas digestivos, y el cuadro se instaura en minutos. En el NEUROGENICO la combinación es muy característica: hipotensión con BRADICARDIA y piel caliente y SECA, más el déficit neurológico correspondiente.',
      criterios_dx: 'Perfil hemodinámico con gasto alto y resistencias bajas más una causa compatible. En la anafilaxia el diagnóstico es CLÍNICO y no se espera a ninguna prueba. Ver la Figura 2 de Definición.',
      laboratorio: 'Lactato, hemocultivos y cultivos del foco en el séptico. TRIPTASA en la anafilaxia, extraida en las primeras horas y comparada con un basal posterior, pero SIN retrasar el tratamiento. Estudio general en todos.',
      imagen: 'La dirigida a localizar el foco en el séptico. Resonancia o tomografía de columna en el neurogenico. La ecografía a pie de cama muestra un corazón hiperdinámico, que apoya el perfil.',
      complementarios: 'Monitorización continua. En la anafilaxia, observación prolongada por el riesgo de reacción BIFÁSICA, que puede aparecer horas después de la resolución aparente.',
      dx_diferencial: 'Entre los tres tipos, y frente a otros perfiles. Un choque séptico avanzado se vuelve frío y se confunde con el cardiogénico. Una anafilaxia sin exantema se etiqueta de asma o de síncope. Y un choque neurogenico coexiste a menudo con hemorragia en el politraumatizado: asumir que la hipotensión es neurogénica sin descartar sangrado es un error grave.',
      tx_medico: 'SÉPTICO: control del foco, antibiótico precoz, cristaloides y noradrenalina. ANAFILÁCTICO: retirar el desencadenante, posición en decúbito con las piernas elevadas y oxígeno. NEUROGENICO: inmovilización, volumen y vasopresor, valorando atropina si la bradicardia es sintomática.',
      tx_farmacologico: 'En la anafilaxia, ADRENALINA INTRAMUSCULAR en la cara anterolateral del muslo, repetible cada 5 a 15 minutos: es el tratamiento y no tiene sustituto. Los antihistamínicos y los corticoides son coadyuvantes y NO deben retrasarla ni sustituirla. En el séptico, noradrenalina de primera línea. En el neurogenico, vasopresor con actividad tanto vasoconstrictora como cronotropa.',
      tx_intervencionista: 'Drenaje del foco en el séptico. Manejo de la via aérea en la anafilaxia con angioedema, que puede hacerse imposible en minutos y obliga a asegurarla pronto.',
      criterios_uci: 'Choque séptico establecido, anafilaxia con compromiso de via aérea o refractaria a adrenalina, y choque neurogenico con lesión medular alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el séptico, reevaluar el foco si no mejora. En la anafilaxia, vigilancia prolongada por la reacción bifásica y prescripcion de ADRENALINA AUTOINYECTABLE al alta, con formación sobre su uso, que se omite con enorme frecuencia.',
      seguimiento_ambulatorio: 'Derivación a alergologia tras una anafilaxia, con plan escrito de actuacion. Rehabilitación y manejo de la disautonomía en la lesión medular.',
      pronostico: 'El séptico depende del control del foco y de la precocidad del tratamiento. La anafilaxia tiene excelente pronóstico si se trata pronto con adrenalina, y las muertes se concentran en los casos en que esta se retrasa o no se administra.',
      algoritmo: ['Reconocer el patrón: hipotensión con piel CALIENTE', 'Buscar exantema, angioedema y broncoespasmo', 'Si hay anafilaxia, ADRENALINA INTRAMUSCULAR de inmediato', 'No sustituir la adrenalina por antihistamínicos ni corticoides', 'Si hay sospecha de infección, hemocultivos y antibiótico precoz', 'Buscar y CONTROLAR el foco séptico', 'Iniciar cristaloides y noradrenalina precoz', 'En el traumatizado, descartar hemorragia antes de asumir origen neurogenico', 'Vigilar la reacción bifásica tras una anafilaxia', 'Prescribir adrenalina autoinyectable y derivar a alergologia']
    },
    {
      nombre: 'Choque cardiogénico',
      color: '#3d5a73',
      definicion: 'Choque por fallo primario de la bomba, con gasto cardiaco bajo y presiones de llenado elevadas, pese a un volumen intravascular adecuado.',
      fisiopatologia: 'La caída de la contractilidad reduce el volumen de eyección y eleva las presiones de llenado, lo que produce a la vez hipoperfusión anterógrada y congestión retrógrada. Se establece entonces una espiral: la hipotensión reduce la presión de perfusión coronaria, lo que empeora la isquemia, lo que empeora la contractilidad. A eso se suma un componente inflamatorio con vasodilatación que explica por que algunos pacientes tienen resistencias más bajas de lo esperado. Romper esa espiral pronto, sobre todo revascularizando cuando la causa es un infarto, es lo único que ha demostrado modificar el pronóstico.',
      epidemiologia: 'La causa más frecuente es el infarto agudo de miocardio, y su mortalidad sigue siendo elevada pese a la revascularización. Las complicaciones mecánicas del infarto (rotura de pared libre, comunicación interventricular e insuficiencia mitral aguda por rotura de músculo papilar) son menos frecuentes pero exigen cirugía y se diagnostican con ecografía.',
      factores_riesgo: ['Infarto agudo de miocardio, sobre todo anterior extenso', 'Edad avanzada', 'Diabetes mellitus', 'Insuficiencia cardiaca previa', 'Enfermedad coronaria de varios vasos', 'Retraso en la reperfusión', 'Miocarditis aguda', 'Valvulopatía aguda o rotura de cuerdas', 'Arritmias mal toleradas', 'Fármacos con efecto inótropo negativo y tóxicos'],
      clinica: 'Hipotensión con piel FRÍA, sudorosa y moteada, oliguria, alteración de la conciencia y, a diferencia del hipovolémico, signos de CONGESTIÓN: ingurgitación yugular, crepitantes y a veces tercer ruido. Esa combinación de hipoperfusión CON congestión es la firma del perfil.',
      criterios_dx: 'Hipotensión mantenida con signos de hipoperfusión, presiones de llenado elevadas y evidencia de disfunción cardiaca, habiendo descartado hipovolemia. Ver la Figura 2 de Definición.',
      laboratorio: 'TROPONINA y péptidos natriuréticos, recordando que la troponina se eleva en casi cualquier choque. Lactato, función renal y hepática (la hepatitis isquémica y el riñón congestivo son frecuentes), gasometría y ionograma.',
      imagen: 'ECOCARDIOGRAMA URGENTE, que es la prueba clave: valora la contractilidad, identifica las complicaciones mecánicas y descarta otros perfiles. Radiografía de tórax con congestión. Coronariografía urgente si la causa es isquémica.',
      complementarios: 'ELECTROCARDIOGRAMA inmediato buscando infarto y arritmia. Monitorización continua. En casos seleccionados, cateterismo derecho para caracterizar el perfil cuando la situación es ambigua.',
      dx_diferencial: 'Choque obstructivo, sobre todo embolia pulmonar y taponamiento, que también cursan con hipotensión e ingurgitación yugular y se separan con ecografía. Choque séptico con disfunción miocárdica. Y sobrecarga de volumen sin choque.',
      tx_medico: 'REVASCULARIZACIÓN URGENTE si la causa es isquémica, que es la medida que más modifica el pronóstico. Con enfermedad de varios vasos, la evidencia apoya revascularizar de entrada solo la arteria responsable. Oxigenación y ventilación adecuadas, corrección de arritmias y de alteraciones electrolíticas, y VOLUMEN CON MUCHA CAUTELA porque puede empeorar la congestión.',
      tx_farmacologico: 'NORADRENALINA como vasopresor de elección, que ha mostrado menos arritmias que la dopamina. Inotrópicos como dobutamina o levosimendan cuando el gasto es bajo pese a una tensión aceptable. Diuréticos una vez estabilizada la perfusión. Y retirada de los fármacos inótropos negativos.',
      tx_intervencionista: 'Intervencionismo coronario percutáneo. Cirugía urgente en las complicaciones mecánicas. Soporte circulatorio mecánico en casos seleccionados y como puente a recuperación, a cirugía o a trasplante: conviene saber que el balón de contrapulsación NO demostró reducir la mortalidad en el infarto con choque.',
      criterios_uci: 'Todo choque cardiogénico. El traslado precoz a un centro con capacidad de revascularización y de soporte mecánico es una decisión muy dependiente del tiempo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Valoración de trasplante cardiaco o de asistencia ventricular de larga duración en el choque refractario de causa no reversible.',
      seguimiento_hospitalario: 'Vigilar la función renal y hepática, el equilibrio entre congestión y perfusión, y las complicaciones del soporte. Reevaluar con ecocardiograma la respuesta y las complicaciones mecánicas.',
      seguimiento_ambulatorio: 'Tratamiento de la insuficiencia cardiaca según la función residual, rehabilitación cardiaca y valoración de dispositivos.',
      pronostico: 'Sigue siendo la forma de choque con mayor mortalidad. Lo que más la modifica es la revascularización precoz cuando la causa es isquémica.',
      algoritmo: ['Reconocer la combinación de hipoperfusión CON congestión', 'Hacer ELECTROCARDIOGRAMA de inmediato', 'Hacer ECOCARDIOGRAMA urgente', 'Buscar complicaciones mecánicas del infarto', 'Descartar embolia y taponamiento con la misma ecografía', 'Dar volumen con mucha cautela y reevaluando', 'Iniciar NORADRENALINA y añadir inotrópico si el gasto es bajo', 'Activar la revascularización urgente si la causa es isquémica', 'Revascularizar solo la arteria responsable de entrada', 'Valorar traslado a un centro con soporte mecánico']
    },
    {
      nombre: 'Choque obstructivo',
      color: '#6b4a8c',
      definicion: 'Choque por un obstáculo mecánico al llenado o a la eyección del corazón, en el que la bomba y el volumen pueden ser normales y el problema es puramente físico.',
      fisiopatologia: 'Tres mecanismos distintos con el mismo resultado. En el NEUMOTÓRAX A TENSIÓN, el aire acumulado a presión colapsa el pulmón, desplaza el mediastino y comprime las venas cavas, impidiendo el retorno venoso. En el TAPONAMIENTO, el líquido pericárdico eleva la presión intrapericardica por encima de la de llenado de las cavidades derechas y las colapsa en diástole. Y en la EMBOLIA PULMONAR masiva, la obstrucción vascular eleva de golpe la poscarga del ventrículo derecho, que se dilata, desplaza el septo hacia la izquierda y reduce el llenado izquierdo. Los tres comparten una característica decisiva: son <strong>reversibles en minutos</strong> si se identifican.',
      epidemiologia: 'Es el perfil menos frecuente de los cuatro y el que más se pasa por alto, precisamente porque sus causas son pocas y hay que pensar en ellas de forma activa. Y es también el que ofrece las recuperaciones más espectaculares cuando se resuelve a tiempo.',
      factores_riesgo: ['Ventilación mecánica y presión positiva, por el neumotórax', 'Traumatismo torácico', 'Canalizacion de via central reciente', 'Enfermedad pulmonar bullosa', 'Neoplasia con afectación pericárdica', 'Pericarditis, uremia y tuberculosis', 'Inmovilización, cirugía reciente y neoplasia, por la embolia', 'Trombofilia y antecedente de tromboembolia', 'Disección aórtica con extensión al pericardio', 'Procedimientos cardiacos percutáneos'],
      clinica: 'Hipotensión con INGURGITACIÓN YUGULAR, que es el hallazgo que lo separa del hipovolémico y que se explora en segundos. En el neumotórax a tensión hay además ausencia de murmullo, timpanismo y desviación traqueal. En el taponamiento, tonos apagados y PULSO PARADÓJICO. Y en la embolia masiva, hipoxemia, taquipnea y signos de sobrecarga derecha.',
      criterios_dx: 'Sospecha clínica confirmada por ecografía, que muestra el signo correspondiente en cada caso. En el neumotórax a TENSIÓN no se espera a ninguna prueba. Ver la Figura 2 de Definición.',
      laboratorio: 'Poco útil para el diagnóstico. Gasometría con hipoxemia en la embolia. Dímero D, cuya utilidad esta en descartar en pacientes de baja probabilidad, no en confirmar en un paciente en choque.',
      imagen: 'ECOGRAFÍA A PIE DE CAMA: ausencia de deslizamiento pleural con punto pulmón (neumotórax), derrame pericárdico con colapso de cavidades derechas y vena cava dilatada (taponamiento), ventrículo derecho dilatado con septo aplanado (embolia). ANGIOGRAFÍA POR TOMOGRAFÍA para confirmar la embolia si el paciente lo tolera.',
      complementarios: 'ELECTROCARDIOGRAMA con signos de sobrecarga derecha o alternancia eléctrica. Monitorización continua. Y una regla práctica: en el paciente ventilado que se deteriora de golpe, pensar SIEMPRE en neumotórax.',
      dx_diferencial: 'Choque cardiogénico, que comparte la ingurgitación yugular y se separa con ecografía. Choque hipovolémico, que se descarta mirando las yugulares. E hipertensión pulmonar crónica descompensada.',
      tx_medico: 'La descompresión o la desobstruccion es el tratamiento; todo lo demás es soporte. Volumen con cautela en la embolia, porque la sobrecarga puede empeorar la dilatación del ventrículo derecho. Noradrenalina para mantener la perfusión coronaria del ventrículo derecho.',
      tx_farmacologico: 'TROMBÓLISIS SISTÉMICA en la embolia pulmonar de alto riesgo, es decir, con inestabilidad hemodinámica, salvo contraindicación absoluta. Anticoagulación de inicio inmediato ante la sospecha.',
      tx_intervencionista: 'DESCOMPRESIÓN INMEDIATA con aguja seguida de drenaje torácico en el neumotórax a tensión, sin esperar a la radiografía. PERICARDIOCENTESIS en el taponamiento. Y trombectomía percutánea o quirúrgica en la embolia cuando la trombólisis esta contraindicada o fracasa.',
      criterios_uci: 'Todos, tras la descompresión inicial. La embolia de alto riesgo y el taponamiento requieren vigilancia estrecha por el riesgo de recurrencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la reacumulacion del derrame o del neumotórax, la función del ventrículo derecho y las complicaciones de la trombólisis. Estudio etiológico del derrame pericárdico y de la tromboembolia.',
      seguimiento_ambulatorio: 'Anticoagulación y estudio de la causa en la tromboembolia, incluida la valoración de la hipertensión pulmonar tromboembólica crónica. Seguimiento del derrame pericárdico.',
      pronostico: 'Excelente si se identifica y se resuelve a tiempo, y muy malo si no se piensa en el. Es el perfil donde la diferencia entre pensarlo y no pensarlo se mide en minutos.',
      algoritmo: ['Mirar las YUGULARES: si están ingurgitadas, no es hipovolémico', 'Auscultar y percutir el tórax', 'Si hay sospecha de neumotórax a TENSIÓN, descomprimir sin esperar imagen', 'Hacer ECOGRAFÍA: pulmón, pericardio y ventrículo derecho', 'Buscar derrame con colapso de cavidades derechas', 'Buscar dilatación del ventrículo derecho y septo aplanado', 'Puncionar el pericardio si hay taponamiento', 'Anticoagular ante la sospecha de embolia', 'Trombolisar la embolia de alto riesgo salvo contraindicación', 'En el ventilado que se deteriora de golpe, pensar en neumotórax']
    },
    {
      nombre: 'Reanimación: fluidos, vasoactivos y objetivos',
      color: '#8a6a1f',
      definicion: 'Conjunto de medidas de soporte hemodinámico destinadas a restaurar la perfusión tisular mientras se corrige la causa del choque.',
      fisiopatologia: 'Un bolo de volumen solo aumenta el gasto cardiaco si el corazón esta en la parte ascendente de su curva de función, y eso ocurre en aproximadamente la mitad de los pacientes en choque. En el resto, el fluido no mejora el gasto y se distribuye al intersticio, produciendo edema pulmonar, intestinal y renal. De ahi que la pregunta útil no sea cuanto dar sino a quien: las pruebas DINÁMICAS (elevación pasiva de las piernas, variación de la presión de pulso) predicen la respuesta, y las ESTÁTICAS como la presión venosa central no lo hacen, por mucho que se sigan usando para eso.',
      epidemiologia: 'El balance hídrico positivo acumulado se asocia de forma consistente a peor evolución. Los cristaloides balanceados han mostrado ventajas frente al suero salino en el paciente crítico. Y la noradrenalina se prefiere a la dopamina, que se asoció a más arritmias.',
      factores_riesgo: ['Dar bolos sin comprobar la respuesta', 'Usar la presión venosa central para decidir el volumen', 'Retrasar la noradrenalina esperando a terminar el volumen', 'Retrasar la noradrenalina por no tener via central', 'Perseguir una tensión arterial sin mirar la perfusión', 'Ignorar el basal tensional del paciente', 'No reevaluar tras cada bolo', 'Usar suero salino en grandes volúmenes', 'Sedar la agitación del paciente hipoperfundido', 'No corregir la causa mientras se optimizan los numeros'],
      clinica: 'La reevaluación se hace con lo mismo con lo que se hizo el diagnóstico: piel, diuresis, conciencia y lactato. Un ensayo aleatorizado comparo dirigir la reanimación por el relleno capilar frente al lactato, con resultados al menos comparables, lo que devolvio valor a la exploración más simple.',
      criterios_dx: 'No aplica: es la fase de tratamiento. Ver la Figura 3 de Definición.',
      laboratorio: 'Lactato seriado para valorar el aclaramiento. Gasometría, ionograma y calcio. Función renal. Y en la hemorragia, coagulación y fibrinógeno.',
      imagen: 'ECOGRAFÍA repetida para valorar la respuesta, la aparición de líneas B (que indican sobrecarga y son una señal de parar) y la evolución de la función cardiaca.',
      complementarios: 'Monitorización continua, diuresis horaria y, en casos seleccionados, monitorización avanzada del gasto cardiaco cuando la situación no se aclara con lo anterior.',
      dx_diferencial: 'Ante la falta de respuesta: causa no corregida, perfil equivocado o mezclado, hipovolemia no reconocida, insuficiencia suprarrenal relativa, acidosis grave que reduce la respuesta a las catecolaminas, o una complicación nueva.',
      tx_medico: 'Bolos de CRISTALOIDE BALANCEADO con reevaluación tras cada uno. Elevación pasiva de las piernas como prueba de respuesta, que equivale a un bolo REVERSIBLE. Y una vez restaurada la perfusión, dejar de dar volumen y plantear el balance negativo.',
      tx_farmacologico: 'NORADRENALINA de primera línea, iniciada PRECOZMENTE y, si hace falta, por via periférica con vigilancia mientras se canaliza una central. Vasopresina como ahorrador. Inotrópico si el gasto es bajo pese a una tensión aceptable. Y, en el choque séptico refractario, valorar hidrocortisona.',
      tx_intervencionista: 'La que exija la causa: drenaje, punción, hemostasia o revascularización. Ninguna dosis de vasopresor sustituye a la corrección del mecanismo.',
      criterios_uci: 'Todo paciente que precisa vasoactivos o que mantiene hipoperfusión pese a la reanimación inicial.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación estructurada y frecuente. Cuando la perfusión se restablece, cambiar el objetivo: pasar de reanimar a retirar volumen, porque el balance positivo acumulado se paga en pulmón y riñón.',
      seguimiento_ambulatorio: 'Depende de la causa. Conviene explorar las secuelas de un choque prolongado, que son frecuentes y se buscan poco.',
      pronostico: 'Mejora con la precocidad y con la corrección de la causa. Empeora con el exceso de volumen y con el tiempo en hipoperfusión.',
      algoritmo: ['Comprobar si el paciente va a RESPONDER antes de dar volumen', 'Usar la elevación pasiva de las piernas como bolo reversible', 'No usar la presión venosa central para esa decisión', 'Dar cristaloides BALANCEADOS en bolos y reevaluar tras cada uno', 'Iniciar NORADRENALINA pronto, incluso por via periférica', 'Fijar una tensión media en torno a 65, individualizada', 'Mirar la perfusión: piel, diuresis, conciencia y lactato', 'Parar el volumen cuando aparezcan signos de sobrecarga', 'Corregir la CAUSA, que es lo único que resuelve el choque', 'Cuando el paciente mejore, pasar a balance negativo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El choque se diagnostica mirando la perfusión, se clasifica con tres preguntas más la ecografía, y se trata corrigiendo la causa. Todo lo demás, incluida la mejor reanimación, sirve para comprar tiempo.',
    parametros: ['Buscar HIPOPERFUSIÓN y no esperar a la hipotensión', 'Mirar la piel, la diuresis y el nivel de conciencia', 'Comparar la tensión con el basal del paciente', 'Vigilar el estrechamiento de la PRESIÓN DE PULSO en la hemorragia', 'Explorar las YUGULARES para separar hipovolémico de obstructivo', 'Hacer ECOGRAFÍA a pie de cama en los primeros minutos', 'Comprobar la respuesta a volumen antes de seguir dando bolos', 'No usar la presión venosa central para decidir el volumen', 'Iniciar la noradrenalina pronto, sin esperar a una via central', 'Descomprimir el neumotórax a tensión sin esperar imagen', 'Dar ADRENALINA intramuscular de inmediato en la anafilaxia', 'Corregir la CAUSA: ningún vasopresor la sustituye'],
    criterios_uci_general: 'Todo choque establecido: necesidad de vasoactivos, hipoperfusión mantenida pese a la reanimación inicial, lactato que no aclara, hemorragia grado III o IV, necesidad de transfusión masiva, anafilaxia refractaria o con compromiso de la via aérea, choque cardiogénico de cualquier causa y choque obstructivo tras la descompresión inicial.',
    criterios_tips_general: 'La derivación portosistémica intrahepática transyugular es una opción en la hemorragia variceal refractaria; su detalle esta en el tema de cirrosis hepática.',
    criterios_trasplante_general: 'Valoración de trasplante cardiaco o de asistencia ventricular de larga duración en el choque cardiogénico refractario de causa no reversible. En el resto de los perfiles no aplica en la fase aguda.',
    prevencion: 'Primaria: profilaxis tromboembólica, control de la anticoagulación, tratamiento precoz de la infección, y en la alergia conocida un plan escrito con ADRENALINA AUTOINYECTABLE prescrita y explicada, que se omite con enorme frecuencia. Secundaria: detección precoz del deterioro con escalas de alerta y con una exploración que no cuesta nada, porque el choque normotenso es la forma en que este cuadro se escapa. Terciaria: prevención de la iatrogenia de la propia reanimación, sobre todo del exceso de volumen; vigilancia de la reacción bifásica tras una anafilaxia; y seguimiento de las secuelas físicas y cognitivas de los supervivientes de un choque prolongado.'
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
  'Reconocer el choque': { definicion: [1, 2, 12], criterios_dx: [1, 2, 12], laboratorio: [1, 2, 12], tx_farmacologico: [1, 2, 12] },
  'Choque hipovolémico y hemorrágico': { definicion: [3, 15, 16], criterios_dx: [3, 15, 16], laboratorio: [3, 15, 16], tx_farmacologico: [3, 15, 16] },
  'Choque distributivo': { definicion: [4, 7, 11], criterios_dx: [4, 7, 11], laboratorio: [4, 7, 11], tx_farmacologico: [4, 7, 11] },
  'Choque cardiogénico': { definicion: [5, 13, 14], criterios_dx: [5, 13, 14], laboratorio: [5, 13, 14], tx_farmacologico: [5, 13, 14] },
  'Choque obstructivo': { definicion: [6, 2], criterios_dx: [6, 2], laboratorio: [6, 2], tx_farmacologico: [6, 2] },
  'Reanimación: fluidos, vasoactivos y objetivos': { definicion: [8, 9, 10, 12], criterios_dx: [8, 9, 10, 12], laboratorio: [8, 9, 10, 12], tx_farmacologico: [8, 9, 10, 12] }
};
export const estigmasTitulo = 'Signos que orientan el perfil';
export const estigmas = [
  { s: 'Piel moteada en las rodillas', p: 'Hipoperfusión periférica', photo: null, desc: 'La ventana más barata a la microcirculación y con valor pronóstico demostrado. Persiste cuando la tensión ya se ha normalizado, lo que recuerda que corregir el número no equivale a perfundir el tejido.' },
  { s: 'Presión de pulso estrecha', p: 'Lo primero de la hemorragia', photo: null, desc: 'La vasoconstricción eleva la diastólica antes de que caiga la sistólica. Por eso el estrechamiento de la presión de pulso aparece en el grado II, mucho antes que la hipotensión, que no llega hasta el grado III.' },
  { s: 'Hemoglobina normal en la hemorragia aguda', p: 'No descarta nada', photo: null, desc: 'Todavía no ha habido tiempo de hemodilución. Una hemoglobina normal en las primeras horas de un sangrado importante es lo esperable, y tomarla como tranquilizadora es un error clásico.' },
  { s: 'Déficit de base', p: 'Más sensible que la tensión', photo: null, desc: 'Forma parte de la clasificación de la hemorragia de la última edicion del manual de trauma y se altera antes que la tensión arterial. Un déficit creciente sugiere sangrado activo aunque las constantes aguanten.' },
  { s: 'Piel caliente con hipotensión', p: 'Choque distributivo', photo: null, desc: 'El gasto esta alto y lo que ha caído son las resistencias. Un paciente rosado y caliente puede estar profundamente hipoperfundido a nivel tisular, con lactato elevado y sin orinar.' },
  { s: 'Hipotensión con bradicardia y piel seca', p: 'Choque neurogenico', photo: null, desc: 'La pérdida del tono simpático por lesión medular alta produce vasodilatación sin taquicardia compensadora. En el politraumatizado, asumir ese origen sin descartar hemorragia es un error grave.' },
  { s: 'Ingurgitación yugular con hipotensión', p: 'No es hipovolémico', photo: null, desc: 'Separa en segundos el hipovolémico del cardiogénico y del obstructivo. Es una exploración gratuita que reorienta por completo el tratamiento, y se omite con frecuencia.' },
  { s: 'Pulso paradójico', p: 'Taponamiento', photo: null, desc: 'Descenso inspiratorio marcado de la tensión sistólica. Junto con los tonos apagados y la ingurgitación yugular completa la triada clásica, aunque la ecografía la ha desplazado como herramienta diagnóstica.' },
  { s: 'Ausencia de deslizamiento pleural', p: 'Neumotorax', photo: null, desc: 'Signo ecográfico rápido y fiable. En el neumotórax a TENSIÓN, sin embargo, no hay que esperar a ninguna prueba: el diagnóstico es clínico y la descompresión es inmediata.' },
  { s: 'Ventrículo derecho dilatado con septo aplanado', p: 'Embolia masiva', photo: null, desc: 'La sobrecarga aguda de presión dilata el ventrículo derecho y desplaza el septo, reduciendo el llenado izquierdo. Se ve en segundos con la ecografía a pie de cama y cambia el tratamiento de inmediato.' },
  { s: 'Anafilaxia sin exantema', p: 'Existe y despista', photo: null, desc: 'Una parte de las anafilaxias cursa sin manifestaciones cutáneas y se etiqueta de asma o de síncope. El diagnóstico es clínico, el tratamiento es adrenalina intramuscular y no hay que esperar a la triptasa.' },
  { s: 'Agitación en el paciente hipoperfundido', p: 'No es ansiedad', photo: null, desc: 'Es hipoperfusión cerebral. Se confunde con ansiedad y se trata con sedantes, que reducen aun más la tensión y enmascaran el deterioro. Ante un paciente inquieto y frío, primero hay que perfundirlo.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Perfil hemodinámico del choque (calculadora disponible)': [1, 2],
  'Predicción de respuesta a volumen (calculadora disponible)': [8, 9],
  'Grado de hemorragia del manual de trauma (calculadora disponible)': [3],
  'Índice de choque': [3, 1],
  'Criterios de choque séptico': [4],
  'Estadios de choque cardiogénico': [5]
};
export const escalaCalc = {
  'Perfil hemodinámico del choque (calculadora disponible)': 'perfil-choque',
  'Predicción de respuesta a volumen (calculadora disponible)': 'respuesta-volumen',
  'Grado de hemorragia del manual de trauma (calculadora disponible)': 'hemorragia-atls'
};
export const compGroups = [
  { name: 'El síndrome', items: ['Reconocer el choque'] },
  { name: 'Los cuatro perfiles', items: ['Choque hipovolémico y hemorrágico', 'Choque distributivo', 'Choque cardiogénico', 'Choque obstructivo'] },
  { name: 'El tratamiento', items: ['Reanimación: fluidos, vasoactivos y objetivos'] }
];
export const complicacionesIntro = 'La primera ficha es el reconocimiento, que es donde se pierde más tiempo: el choque se define por la perfusión y no por la tensión, y una parte de los pacientes llega normotensa. Las cuatro siguientes son los perfiles, cada uno con su mecanismo y su tratamiento: el que ha perdido volumen, el que ha perdido el tono, el que ha perdido la bomba y el que tiene algo que obstruye, este último el menos frecuente, el que más se pasa por alto y el que mejor responde cuando se piensa en el. Y la última es la reanimación, cuya pregunta central no es cuanto volumen dar sino cuando dejar de darlo.';
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
  root: { title: 'PACIENTE CON SIGNOS DE HIPOPERFUSIÓN', color: '#8c2e3a', target: 'definicion' },
  branches: [
    { title: 'RECONOCERLO', sub: 'Perfusión, no tensión', color: '#8c2e3a', target: 'complicaciones', leaves: [
      { title: 'La piel', sub: 'Moteado y relleno lento', color: '#7a3f2e', target: 'diagnostico' },
      { title: 'El riñón', sub: 'Oliguria, y hay que medirla', color: '#3d5a73', target: 'diagnostico' },
      { title: 'El cerebro', sub: 'Agitación, no ansiedad', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Choque normotenso', sub: 'Existe y se escapa', color: '#8c2e3a', target: 'complicaciones' }
    ] },
    { title: 'QUE PERFIL ES', sub: 'Volumen, tono, bomba u obstáculo', color: '#3f6b52', target: 'clasificacion', leaves: [
      { title: 'Piel fría y yugulares planas', sub: 'Hipovolemico', color: '#7a3f2e', target: 'complicaciones' },
      { title: 'Piel caliente', sub: 'Distributivo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Hipoperfusión con congestión', sub: 'Cardiogenico', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Yugulares ingurgitadas', sub: 'Obstructivo: se resuelve rápido', color: '#6b4a8c', target: 'complicaciones' }
    ] },
    { title: 'REANIMAR', sub: 'Y sobre todo, corregir la causa', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Va a responder?', sub: 'Elevar las piernas', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Noradrenalina pronto', sub: 'Sin esperar via central', color: '#8c2e3a', target: 'complicaciones' },
      { title: 'Objetivos de perfusión', sub: 'Piel, diuresis y lactato', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Corregir la causa', sub: 'Nada la sustituye', color: '#3d5a73', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [3, 12], no_invasivos: [1, 8, 3], imagen: [2, 6] };
export const clasificacionCite = [1, 2, 3, 5];
export const seguimientoCite = [4, 10, 12];
