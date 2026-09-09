// topics/disfuncion-organica-multiple/content.js: Sindrome de disfuncion organica multiple.
// Cubre tres items del cluster "Fallas organicas" (bloque IV, Medicina Critica) del temario:
// SDMO definicion y fisiopatologia, escalas de disfuncion organica (SOFA, SOFA-2, APACHE II) y
// manejo integral del paciente con falla organica multiple.
//
// DELIMITACION: aqui esta el MARCO (que es la disfuncion organica, como se mide y como se maneja
// de forma integral). El detalle de cada organo vive en su tema: `insuficiencia-respiratoria-sdra`,
// `coagulacion-intravascular-diseminada`, `delirium-coma-encefalopatias`, `cirrosis-hepatica`,
// `ventilacion-mecanica`, `sepsis` y `vasopresores-sedantes`.
//
// IMPORTANTE: la tabla de SOFA-2 esta tomada del articulo original que hay en Bibliografia/
// (Ranzani et al, JAMA 2025), leyendo el PDF, no de memoria ([[feedback-verificar-edicion-guias]]).
// Lo mismo con la recomendacion de cribado de la Surviving Sepsis Campaign 2026, que es la
// edicion presente en el repo y que RECOMIENDA DE FORMA FUERTE usar NEWS, NEWS2, MEWS o SIRS por
// encima de qSOFA como herramienta unica de cribado.
//
// Solo `diagnostico`, `clasificacion`, `complicaciones` y `seguimiento_intrahospitalario` van
// ANIDADOS dentro de `export const content = {...}`. Todo lo demas es `export const` hermano.
// `factores_riesgo` y `algoritmo` son ARRAY de strings ([[feedback-factores-riesgo-array]]).
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash ([[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'disfuncion-organica-multiple',
  titulo: 'Disfuncion Organica Multiple',
  subtitulo: 'Modulo 68 · Medicina Interna',
  accent: '#5a4a8c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const cascadaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #5a4a8c;border-radius:8px;padding:5px 9px;background:#5a4a8c12;margin-bottom:6px;">
    <strong style="color:#5a4a8c;">El sindrome de disfuncion organica multiple no es una enfermedad: es la via final comun de casi todo lo que ingresa en una unidad de criticos.</strong> <span style="color:var(--ink-dim);">Y su rasgo mas importante es que, en gran parte, es REVERSIBLE.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">EL INSULTO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Infeccion, traumatismo, pancreatitis, quemadura, cirugia mayor o isquemia y reperfusion. Da igual cual sea: a partir de cierto umbral, todos desembocan en la misma respuesta.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">RESPUESTA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Activacion inmunitaria <strong style="color:var(--ink);">DESREGULADA</strong>, con componentes proinflamatorio y antiinflamatorio a la vez. De ahi salen a la vez el da&#241;o tisular y la inmunosupresion que favorece las infecciones tardias.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">ENDOTELIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Perdida del glucocalix, aumento de permeabilidad, edema intersticial, microtrombosis y alteracion de la MICROCIRCULACION. El flujo global puede ser normal y el tejido seguir hipoperfundido: por eso una tension arterial correcta no garantiza nada.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">LA CELULA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Disfuncion mitocondrial y descenso del consumo de oxigeno. Se ha propuesto que parte de la disfuncion es una <strong style="color:#3f6b52;">ADAPTACION</strong> metabolica, algo parecido a una hibernacion celular, y eso explicaria por que los organos se recuperan casi sin cicatriz si el paciente sobrevive.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El SEGUNDO GOLPE.</strong> Un paciente ya sensibilizado por el primer insulto responde de forma desproporcionada al siguiente, que muchas veces es <strong>IATROGENICO</strong>: ventilacion con volumenes altos, sobrecarga de fluidos, sedacion profunda, transfusion innecesaria, nefrotoxicos o una infeccion asociada a dispositivos.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Primario o secundario.</strong> El <strong>PRIMARIO</strong> es da&#241;o directo del insulto y aparece pronto (contusion pulmonar, rabdomiolisis). El <strong>SECUNDARIO</strong> es consecuencia de la respuesta del huesped y aparece dias despues, con frecuencia lejos del organo lesionado. Distinguirlos cambia donde se busca la causa.
    </div>
  </div>
</div>`;

const sofa2Html = `
<div style="max-width:660px;margin:0 auto;font-size:9px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">SOFA-2 (2025) es la primera actualizacion de la escala en 30 a&#241;os.</strong> <span style="color:var(--ink-dim);">Mantiene los <strong>6 sistemas</strong> y el rango de 0 a 24: los dominios inmune y digestivo se propusieron, se evaluaron y se <strong>DESCARTARON</strong>.</span>
  </div>
  <div style="overflow-x:auto;margin-bottom:6px;">
  <table style="width:100%;border-collapse:collapse;font-size:8.5px;">
    <tr style="background:#5a4a8c18;">
      <th style="border:1px solid var(--line);padding:3px 4px;text-align:left;">Sistema</th>
      <th style="border:1px solid var(--line);padding:3px 4px;">1</th>
      <th style="border:1px solid var(--line);padding:3px 4px;">2</th>
      <th style="border:1px solid var(--line);padding:3px 4px;">3</th>
      <th style="border:1px solid var(--line);padding:3px 4px;">4</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Cerebro</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 13-14 <strong style="color:#8c3a34;">o farmacos para delirium</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 9-12</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 6-8</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 3-5</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Respiratorio</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">PaO2/FiO2 &#8804;300</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;225</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;150 <strong style="color:#8c3a34;">+ soporte avanzado</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;75 + soporte, o ECMO</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Cardiovascular</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">PAM &lt;70 sin vasoactivos</td>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong style="color:#8c3a34;">Nor+adr &#8804;0.2</strong> o cualquier otro vasoactivo</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Nor+adr &gt;0.2 y &#8804;0.4, o &#8804;0.2 con otro</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Nor+adr &gt;0.4, o soporte mecanico</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Higado</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Bilirrubina &#8804;3.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;6.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;12.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&gt;12 mg/dL</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Ri&#241;on</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Creatinina &#8804;2.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;3.5</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&gt;3.5 o anuria</td>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong style="color:#8c3a34;">Recibe o CUMPLE criterios de depuracion</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Hemostasia</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Plaquetas &#8804;150</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;100</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&#8804;80</td>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong style="color:#8c3a34;">&#8804;50</strong> (antes &lt;20)</td>
    </tr>
  </table>
  </div>
  <div style="padding:5px 9px;border:1px solid #3f6b52;border-radius:8px;background:#3f6b5210;color:var(--ink-dim);">
    <strong style="color:#3f6b52;">Tres reglas de uso que evitan la mayoria de los errores.</strong> En el paciente <strong>SEDADO</strong> se usa el ultimo Glasgow anterior a la sedacion, y si no se conoce se puntua 0. Los datos que <strong>FALTAN el primer dia</strong> se puntuan 0. A partir del segundo dia, un dato que falta se <strong>ARRASTRA</strong> del anterior, porque no haberlo medido sugiere estabilidad. Y en respiratorio, sin soporte ventilatorio avanzado el maximo posible son 2 puntos.
  </div>
</div>`;

const escalasHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">Las escalas de este tema no compiten: responden a preguntas distintas.</strong> <span style="color:var(--ink-dim);">Usar la de cribado para pronosticar, o la de pronostico para decidir sobre un paciente concreto, es el error de fondo.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">CRIBAR<br><span style="font-weight:400;font-size:8.5px;">&#191;puede estar grave?</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">NEWS2, MEWS o SIRS</strong>, con constantes de la planta. La guia de sepsis de 2026 recomienda de forma <strong style="color:#3f6b52;">FUERTE</strong> usar cualquiera de estas por encima de <strong>qSOFA</strong> como herramienta unica de cribado, porque la sensibilidad de qSOFA es baja. Un qSOFA positivo alerta, pero no vale para cribar.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">DEFINIR<br><span style="font-weight:400;font-size:8.5px;">&#191;hay disfuncion?</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">SOFA</strong>, en su version clasica o en SOFA-2. Es lo que convierte "esta grave" en un numero por organos. Con infeccion sospechada, un incremento AGUDO de <strong>2 o mas puntos</strong> sobre el basal define SEPSIS.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">PRONOSTICAR<br><span style="font-weight:400;font-size:8.5px;">&#191;como le ira al grupo?</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">APACHE II</strong> y similares, con los PEORES valores de las primeras 24 horas. Sirven para comparar poblaciones, ajustar por gravedad y auditar unidades. <strong style="color:#8c3a34;">NO sirven para decidir el techo terapeutico de un paciente concreto.</strong></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Estatico frente a dinamico.</strong> APACHE II es una foto del INGRESO y no se repite. SOFA es una pelicula: se calcula cada dia y lo que mas informa es la <strong>TENDENCIA</strong>. Un SOFA de 8 que baja y uno de 8 que sube no son el mismo paciente.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Lo que ninguna escala hace.</strong> Ninguna sustituye a mirar al paciente, ninguna decide un ingreso o una limitacion por si sola, y ninguna esta validada para predecir el desenlace de un individuo. Su valor es ordenar, comunicar y comparar.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El <strong>sindrome de disfuncion organica multiple</strong> es la alteracion aguda y potencialmente reversible de la funcion de dos o mas organos en un paciente critico, hasta el punto de que la homeostasis no puede mantenerse sin intervencion. No es una enfermedad concreta sino la <strong>via final comun</strong> de casi todo lo que ingresa en una unidad de criticos, y es la principal causa de muerte en ellas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: como se llega hasta aqui.</strong></p>
<p style="margin:0 0 12px;">Un insulto suficientemente intenso desencadena una respuesta inmunitaria <strong>desregulada</strong>, que da&#241;a el endotelio y la microcirculacion y termina alterando el metabolismo celular. Hay dos ideas con consecuencias practicas: que parte de la disfuncion parece una <strong>adaptacion</strong> metabolica y por eso es reversible, y que el <strong>segundo golpe</strong> que empeora al paciente es con frecuencia <strong>iatrogenico</strong>.</p>
${figBlock('Figura 1', 'Del insulto a la disfuncion: la cascada y el segundo golpe', cascadaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: como se mide.</strong></p>
<p style="margin:0 0 12px;">La escala SOFA se actualizo en 2025 por primera vez en treinta a&#241;os. <strong>SOFA-2</strong> mantiene los seis sistemas y el rango de 0 a 24, pero cambia los puntos de corte y, sobre todo, incorpora los soportes que hoy se usan de verdad: la canula nasal de alto flujo y la ventilacion no invasiva cuentan como soporte respiratorio avanzado, las dosis de vasoactivos sustituyen al esquema centrado en la dopamina, y la depuracion extrarrenal puntua el maximo.</p>
${figBlock('Figura 2', 'SOFA-2: los seis sistemas y lo que cambia respecto al clasico', sofa2Html)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: que escala para que pregunta.</strong></p>
<p style="margin:0 0 12px;">Cribar, definir y pronosticar son tres preguntas distintas y cada una tiene su herramienta. La guia de sepsis de 2026 zanja una de ellas con una recomendacion fuerte: para cribar en el hospital se usan <strong>NEWS, NEWS2, MEWS o SIRS</strong>, y no qSOFA como herramienta unica.</p>
${figBlock('Figura 3', 'Cribar, definir y pronosticar: tres preguntas, tres escalas', escalasHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No tratar el sindrome como si fuera una enfermedad: lo que se trata es la <strong>causa</strong>, y el resto es soporte. No usar qSOFA como herramienta unica de cribado. No usar APACHE II para decidir sobre un paciente concreto, porque predice mortalidad de poblaciones. No quedarse con el valor aislado de un SOFA en lugar de mirar su <strong>tendencia</strong>. No olvidar que en el paciente sedado el Glasgow que se puntua es el previo a la sedacion. No dar por buena una tension arterial correcta como prueba de que el tejido esta perfundido. No provocar el segundo golpe con volumenes altos, sobrecarga de fluidos, sedacion profunda o nefrotoxicos evitables. No retrasar el <strong>control del foco</strong>, que es lo unico que detiene la cascada. Y no dejar la conversacion sobre objetivos y adecuacion del esfuerzo para cuando el paciente ya no pueda participar en ella.</p>`;

export const bibliografia = [
  'Ranzani OT, Singer M, Salluh JIF, et al. Development and validation of the Sequential Organ Failure Assessment (SOFA)-2 score. JAMA. 2025;334(23):2090-2103.',
  'Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Intensive Care Med. 2026. doi:10.1007/s00134-026-08361-1.',
  'Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.',
  'Vincent JL, Moreno R, Takala J, et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction and failure. Intensive Care Med. 1996;22(7):707-710.',
  'Seymour CW, Liu VX, Iwashyna TJ, et al. Assessment of clinical criteria for sepsis: for the Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):762-774.',
  'Knaus WA, Draper EA, Wagner DP, Zimmerman JE. APACHE II: a severity of disease classification system. Crit Care Med. 1985;13(10):818-829.',
  'Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. London: RCP; 2017.',
  'Ferreira FL, Bota DP, Bross A, Melot C, Vincent JL. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA. 2001;286(14):1754-1758.',
  'Moreno R, Rhodes A, Piquilloud L, et al. The Sequential Organ Failure Assessment (SOFA) score: has the time come for an update? Crit Care. 2023;27(1):15.',
  'Marshall JC, Cook DJ, Christou NV, Bernard GR, Sprung CL, Sibbald WJ. Multiple organ dysfunction score: a reliable descriptor of a complex clinical outcome. Crit Care Med. 1995;23(10):1638-1652.',
  'Vincent JL, De Backer D. Circulatory shock. N Engl J Med. 2013;369(18):1726-1734.',
  'Deutschman CS, Tracey KJ. Sepsis: current dogma and new perspectives. Immunity. 2014;40(4):463-475.',
  'Singer M, De Santis V, Vitale D, Jeffcoate W. Multiorgan failure is an adaptive, endocrine-mediated, metabolic response to overwhelming systemic inflammation. Lancet. 2004;364(9433):545-548.',
  'Devlin JW, Skrobik Y, Gelinas C, et al. Clinical practice guidelines for the prevention and management of pain, agitation and sedation, delirium, immobility, and sleep disruption in adult patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.',
  'Iwashyna TJ, Ely EW, Smith DM, Langa KM. Long-term cognitive impairment and functional disability among survivors of severe sepsis. JAMA. 2010;304(16):1787-1794.',
  'Nates JL, Nunnally M, Kleinpell R, et al. ICU admission, discharge, and triage guidelines. Crit Care Med. 2016;44(8):1553-1602.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Disfuncion incipiente',
      tituloB: 'Falla establecida',
      compensada: 'El paciente todavia compensa y los signos son sutiles: taquipnea (que es el parametro que antes se altera y el que peor se registra), taquicardia, tension arterial en el limite bajo de lo habitual PARA ESE paciente, oliguria incipiente, inquietud o desorientacion leve, relleno capilar enlentecido y piel moteada. La analitica puede mostrar solo un lactato ligeramente elevado y un descenso de plaquetas. Es la fase en la que una escala de alerta precoz rinde de verdad, y tambien la fase en la que un paciente en planta se deteriora durante horas sin que nadie sume los datos.',
      descompensada: 'Disfuncion establecida de dos o mas organos: hipoxemia con necesidad de soporte respiratorio, hipotension dependiente de vasoactivos, oliguria o anuria con ascenso de creatinina, alteracion del nivel de conciencia, ictericia y trombocitopenia con o sin sangrado. Aparecen ademas la acidosis metabolica con lactato elevado, la hiperglucemia de estres y el balance hidrico marcadamente positivo. En esta fase el numero de organos afectados y, sobre todo, la PERSISTENCIA de la disfuncion a lo largo de los dias son los que marcan el pronostico.'
    },
    laboratorio: [
      { prueba: 'Lactato arterial', utilidad: 'Marcador de hipoperfusion y de estres metabolico. Su valor pronostico esta sobre todo en el ACLARAMIENTO: un lactato que no baja con la reanimacion es peor se&#241;al que un valor inicial alto. Ojo, tambien sube por adrenergicos, insuficiencia hepatica y convulsiones.' },
      { prueba: 'Gasometria arterial con PaO2 y FiO2', utilidad: 'Permite calcular el cociente PaO2/FiO2, que es el dominio respiratorio de la escala SOFA. Si no hay gasometria, SOFA-2 acepta el cociente de saturacion sobre FiO2, pero solo cuando la saturacion es menor del 98%.' },
      { prueba: 'Creatinina y diuresis horaria', utilidad: 'Ambas puntuan en el dominio renal. La DIURESIS se altera antes que la creatinina, que necesita dias para reflejar la caida del filtrado, de modo que vigilar solo la creatinina retrasa el diagnostico de lesion renal aguda.' },
      { prueba: 'Bilirrubina total', utilidad: 'Dominio hepatico de la escala. Conviene recordar que en el paciente critico se eleva por muchas causas ademas de la hepatica: hemolisis, transfusion, nutricion parenteral, farmacos y colestasis asociada a la propia sepsis.' },
      { prueba: 'Plaquetas y estudio de coagulacion', utilidad: 'Dominio de hemostasia. La trombocitopenia es muy frecuente y precoz, y su descenso mantenido se asocia a peor pronostico. Si se acompa&#241;a de consumo de fibrinogeno y elevacion del dimero D, hay que valorar coagulacion intravascular diseminada.' },
      { prueba: 'Hemocultivos y cultivos del foco', utilidad: 'Antes del antibiotico siempre que no lo retrasen. El CONTROL DEL FOCO es lo unico que detiene la cascada, y no se puede controlar un foco que no se ha buscado.' },
      { prueba: 'Proteina C reactiva y procalcitonina', utilidad: 'Apoyan y ayudan a acortar la duracion del antibiotico, pero NO definen disfuncion organica ni sustituyen al juicio clinico. Un valor normal no descarta y uno alto no confirma.' },
      { prueba: 'Analitica general y balance', utilidad: 'Hemograma, ionograma, funcion hepatica y renal, glucemia, calcio y magnesio, y un BALANCE HIDRICO acumulado bien registrado, que es un dato pronostico por si mismo y uno de los peor recogidos en la historia.' }
    ],
    no_invasivos: [
      { metodo: 'Escala SOFA y SOFA-2 (calculadora disponible)', interpretacion: 'Puntua de 0 a 4 la disfuncion de seis sistemas y suma de 0 a 24. La calculadora del tema devuelve a la vez la version clasica y SOFA-2, para ver donde difieren.', cutoff: 'Con infeccion sospechada, un incremento agudo de 2 o mas puntos define SEPSIS' },
      { metodo: 'Cribado con NEWS2 y qSOFA (calculadora disponible)', interpretacion: 'Calcula las dos herramientas con las constantes de cabecera y explica por que la guia de 2026 prefiere las escalas de alerta precoz frente a qSOFA.', cutoff: 'NEWS2 de 5 o mas, o 3 en un solo parametro: respuesta urgente' },
      { metodo: 'APACHE II (calculadora disponible)', interpretacion: 'Doce variables fisiologicas con los PEORES valores de las primeras 24 horas, mas edad y salud cronica previa. Se calcula una sola vez, al ingreso.', cutoff: 'De 0 a 71 puntos. Predice mortalidad de POBLACIONES, no de individuos' },
      { metodo: 'Escala de coma de Glasgow', interpretacion: 'Es el dominio cerebral de la escala SOFA. En el paciente sedado se usa el ultimo valor ANTERIOR a la sedacion, y si no se conoce se puntua 0.', cutoff: 'SOFA-2 a&#241;ade un punto si recibe farmacos para el delirium, aunque el Glasgow sea 15' },
      { metodo: 'Ecografia a pie de cama', interpretacion: 'Valora la funcion cardiaca, la volemia, el pulmon, la vena cava y descarta focos ocultos. Ha desplazado a buena parte de la monitorizacion invasiva en la valoracion inicial.', cutoff: 'Responde a la pregunta practica: es un problema de bomba, de volumen o de tono' },
      { metodo: 'Balance hidrico acumulado y peso diario', interpretacion: 'Un balance positivo acumulado se asocia de forma consistente a peor evolucion, sobre todo en el pulmon y en el ri&#241;on. Se mide sin aparatos y se registra mal.', cutoff: 'Cuando termina la fase de reanimacion, el objetivo pasa a ser el balance negativo' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Valora infiltrados, congestion, derrame y la posicion de los dispositivos. Es la prueba mas repetida en el paciente critico y con frecuencia la peor mirada: conviene compararla con la previa y no leerla aislada.' },
      { modalidad: 'Ecografia clinica multiorgano', hallazgos: 'Corazon, pulmon, vena cava, abdomen y accesos vasculares. Permite orientar el tipo de choque, detectar un foco abdominal, valorar la respuesta a volumen y guiar procedimientos, todo a pie de cama y sin trasladar al paciente.' },
      { modalidad: 'Tomografia dirigida a la busqueda del foco', hallazgos: 'Cuando el foco no aparece y el paciente no mejora. El traslado de un paciente inestable tiene riesgo, pero un foco no drenado tiene mas: la decision se toma pensando en si el resultado va a cambiar la conducta.' },
      { modalidad: 'Imagen de control de dispositivos y accesos', hallazgos: 'Cateteres, sondas y drenajes son a la vez tratamiento y puerta de entrada de infeccion. Revisar a diario si cada uno sigue siendo necesario es una de las intervenciones mas rentables y menos glamurosas del manejo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por el <strong>momento</strong> y el <strong>mecanismo</strong>: el SDMO <strong>primario</strong> es da&#241;o directo del insulto y aparece pronto, mientras que el <strong>secundario</strong> es consecuencia de la respuesta del huesped y aparece dias despues, con frecuencia lejos del organo lesionado. En paralelo se clasifica por el <strong>numero de organos</strong> afectados y por la <strong>gravedad</strong> de cada uno, que es lo que cuantifican las escalas. Y una tercera division, la mas util para el pronostico: la disfuncion que <strong>se resuelve</strong> frente a la que <strong>persiste</strong> mas alla de los primeros dias.`,
    escalas: [
      { nombre: 'Escala SOFA y SOFA-2 (calculadora disponible)', componentes: 'Seis sistemas: cerebro (Glasgow), respiratorio (PaO2/FiO2 y soporte), cardiovascular (tension media y vasoactivos), higado (bilirrubina), ri&#241;on (creatinina y diuresis) y hemostasia (plaquetas).', formula: 'Cada sistema puntua de 0 a 4 y se suman, de 0 a 24. SOFA-2, publicada en 2025, mantiene los seis sistemas y el rango pero cambia los puntos de corte y las definiciones de soporte.', interpretacion: 'Los dominios inmune y digestivo se propusieron para SOFA-2, se evaluaron y se DESCARTARON: el digestivo no demostro validez predictiva y el inmune no cumplio la de contenido. Lo que mas informa no es el valor aislado sino la TENDENCIA a lo largo de los dias.' },
      { nombre: 'Criterios de Sepsis-3', componentes: 'Infeccion sospechada o documentada mas disfuncion organica medida con SOFA.', formula: 'SEPSIS: infeccion mas incremento AGUDO de 2 o mas puntos de SOFA sobre el basal. CHOQUE SEPTICO: sepsis mas necesidad de vasopresores para mantener una tension arterial media de 65 mmHg o mas y lactato por encima de 2 mmol/L pese a una reanimacion adecuada.', interpretacion: 'Si no se conoce disfuncion previa, el basal se asume 0. La definicion abandono los criterios de respuesta inflamatoria sistemica como definitorios de sepsis, aunque siguen siendo utiles para CRIBAR.' },
      { nombre: 'Cribado con NEWS2 y qSOFA (calculadora disponible)', componentes: 'NEWS2: frecuencia respiratoria, saturacion, uso de oxigeno, tension sistolica, frecuencia cardiaca, nivel de conciencia y temperatura. qSOFA: frecuencia respiratoria de 22 o mas, alteracion del estado mental y tension sistolica de 100 mmHg o menos.', formula: 'NEWS2 suma de 0 a 20. qSOFA suma de 0 a 3 y se considera positivo con 2 o mas.', interpretacion: 'La guia de sepsis de 2026 recomienda de forma FUERTE usar NEWS, NEWS2, MEWS o SIRS por encima de qSOFA como herramienta unica de cribado, porque la sensibilidad de qSOFA es baja. Un qSOFA positivo sigue siendo una alerta valiosa de deterioro, pero no es un cribado.' },
      { nombre: 'APACHE II (calculadora disponible)', componentes: 'Doce variables fisiologicas (temperatura, tension media, frecuencia cardiaca y respiratoria, oxigenacion, pH, sodio, potasio, creatinina, hematocrito, leucocitos y Glasgow), mas puntos por edad y por salud cronica previa.', formula: 'Se usan los PEORES valores de las primeras 24 horas de ingreso. Suma de 0 a 71 puntos.', interpretacion: 'Predice mortalidad de POBLACIONES y sirve para ajustar por gravedad, comparar unidades y dise&#241;ar estudios. NO esta validada para decidir el techo terapeutico de un paciente concreto, y usarla asi es un error frecuente y grave.' },
      { nombre: 'Criterios de ingreso y de alta de la unidad de criticos', componentes: 'Necesidad actual o previsible de soporte de organos, reversibilidad del proceso, comorbilidad, situacion funcional previa y voluntad del paciente.', formula: 'Modelo de prioridades: el beneficio esperado es mayor cuanto mas reversible es el proceso y menos deteriorada esta la situacion basal.', interpretacion: 'La pregunta correcta no es si el paciente esta grave sino si el ingreso en criticos va a CAMBIAR su desenlace. Esa pregunta obliga a conocer la situacion funcional previa y las preferencias del paciente, que es lo que mas se omite.' },
      { nombre: 'Escala de alerta precoz en planta', componentes: 'Constantes vitales registradas de forma seriada y un umbral que activa una respuesta.', formula: 'Puntuacion por rangos de cada constante, con umbrales de respuesta escalonada.', interpretacion: 'Su valor no esta en el numero sino en el SISTEMA que lo acompa&#241;a: si nadie acude cuando la puntuacion sube, la escala no sirve de nada. El deterioro fisiologico precede en horas a la parada cardiaca, y la frecuencia respiratoria es el parametro que antes se altera y el que peor se registra.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Sindrome de disfuncion organica multiple',
      color: '#5a4a8c',
      definicion: 'Alteracion aguda y potencialmente reversible de la funcion de dos o mas organos en un paciente critico, de tal magnitud que la homeostasis no puede mantenerse sin intervencion.',
      fisiopatologia: 'Un insulto suficientemente intenso desencadena una respuesta inmunitaria DESREGULADA, con componentes proinflamatorio y antiinflamatorio simultaneos. Esa respuesta da&#241;a el glucocalix y el endotelio, aumenta la permeabilidad, produce edema intersticial y microtrombosis, y altera la MICROCIRCULACION: el flujo global puede ser normal y el tejido seguir hipoperfundido, que es la razon por la que una tension arterial correcta no garantiza perfusion. A nivel celular hay disfuncion mitocondrial con descenso del consumo de oxigeno, y se ha propuesto que parte de esa disfuncion es una ADAPTACION metabolica, algo parecido a una hibernacion, lo que explicaria que los organos se recuperen casi sin cicatriz en quienes sobreviven. Sobre ese terreno actua el SEGUNDO GOLPE, con frecuencia iatrogenico.',
      epidemiologia: 'Es la principal causa de muerte en las unidades de cuidados intensivos. La mortalidad aumenta de forma escalonada con el numero de organos disfuncionantes y, sobre todo, con la PERSISTENCIA de la disfuncion mas alla de los primeros dias. Muchos supervivientes quedan con secuelas fisicas, cognitivas y afectivas prolongadas.',
      factores_riesgo: ['Edad avanzada', 'Comorbilidad y fragilidad previas', 'Gravedad del insulto inicial', 'Retraso en el control del foco', 'Retraso en el antibiotico en la sepsis', 'Sobrecarga de fluidos y balance positivo acumulado', 'Ventilacion con volumenes o presiones altos', 'Sedacion profunda e inmovilidad prolongada', 'Transfusion no indicada', 'Farmacos nefrotoxicos evitables', 'Hiperglucemia mal controlada', 'Infeccion asociada a dispositivos'],
      clinica: 'Al principio, signos sutiles: TAQUIPNEA (el parametro que antes se altera y el que peor se registra), taquicardia, tension en el limite bajo para ese paciente, oliguria incipiente, inquietud, relleno capilar lento y piel moteada. Despues, disfuncion establecida de dos o mas organos con hipoxemia, hipotension dependiente de vasoactivos, oliguria, alteracion de la conciencia, ictericia y trombocitopenia.',
      criterios_dx: 'No hay un criterio dicotomico: es un continuo que se cuantifica con escalas, y en la practica se define como una puntuacion SOFA elevada o en ascenso en dos o mas sistemas. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'LACTATO y su aclaramiento. Gasometria con PaO2 y FiO2. Creatinina y DIURESIS HORARIA, que se altera antes. Bilirrubina. Plaquetas y coagulacion. Hemocultivos y cultivos del foco. Analitica general con balance hidrico acumulado bien registrado.',
      imagen: 'Radiografia de torax comparada con la previa. ECOGRAFIA CLINICA multiorgano a pie de cama, que orienta el tipo de choque y busca focos. Tomografia dirigida cuando el foco no aparece y el paciente no mejora.',
      complementarios: 'Calculo diario de la escala SOFA para seguir la TENDENCIA. Revision diaria de la necesidad de cada cateter, sonda y drenaje. Registro del balance hidrico y del peso.',
      dx_diferencial: 'Descompensacion de una insuficiencia organica CRONICA, que no es lo mismo y tiene otro pronostico; intoxicacion; sindrome neuroleptico maligno e hipertermia maligna; crisis suprarrenal; tormenta tiroidea; sindrome hemofagocitico, que se parece mucho y se pasa por alto; y sindrome de liberacion de citocinas.',
      tx_medico: 'CONTROL DEL FOCO, que es lo unico que detiene la cascada. Soporte de organos con la menor agresividad posible. Reanimacion guiada por objetivos y sin sobrecarga. Ventilacion protectora. Sedacion ligera y movilizacion precoz. Nutricion enteral cuando sea posible. Control de la glucemia y profilaxis de trombosis.',
      tx_farmacologico: 'Antimicrobiano precoz y dirigido, con desescalada en cuanto se pueda. Vasoactivos segun el perfil hemodinamico. Y una regla general: revisar a diario la lista de farmacos para RETIRAR lo que ya no aporta, porque la polifarmacia del critico es una fuente constante de segundos golpes.',
      tx_intervencionista: 'Drenaje quirurgico o percutaneo del foco. Terapias de soporte extracorporeo (depuracion extrarrenal, oxigenacion por membrana) cuando estan indicadas y dentro de un plan realista.',
      criterios_uci: 'Necesidad actual o previsible de soporte de organos en un proceso potencialmente reversible. La pregunta correcta no es si el paciente esta grave sino si el ingreso va a CAMBIAR su desenlace.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda. La infeccion activa y la disfuncion multiorganica son, de hecho, contraindicaciones temporales.',
      seguimiento_hospitalario: 'Calculo diario de la escala y valoracion de la TENDENCIA. Revision diaria de dispositivos, de farmacos y del balance. Y reevaluacion del foco si el paciente no mejora como se espera, en lugar de asumir que es la evolucion natural.',
      seguimiento_ambulatorio: 'Los supervivientes tienen secuelas fisicas, cognitivas y afectivas prolongadas. Conviene un seguimiento estructurado tras el alta, que en la practica casi nunca existe.',
      pronostico: 'Depende del numero de organos, de la persistencia de la disfuncion y de la situacion basal. Lo mas modificable sigue siendo el control precoz del foco y la prevencion de la iatrogenia.',
      algoritmo: ['Reconocer la fase precoz: taquipnea, oliguria, confusion, piel moteada', 'Medir el lactato y repetirlo para ver el aclaramiento', 'Buscar y CONTROLAR el foco sin demora', 'Reanimar con objetivos y sin sobrecargar de volumen', 'Calcular la escala SOFA y repetirla cada dia', 'Vigilar la TENDENCIA, no el valor aislado', 'Ventilar de forma protectora y sedar de forma ligera', 'Revisar a diario dispositivos y farmacos para retirar lo innecesario', 'Reevaluar el foco si no mejora', 'Abrir pronto la conversacion sobre objetivos con el paciente y la familia']
    },
    {
      nombre: 'SOFA-2: la escala actualizada',
      color: '#8c3a34',
      definicion: 'Version actualizada en 2025 de la escala de evaluacion secuencial de disfuncion organica, primera revision en treinta a&#241;os, desarrollada con un proceso Delphi y validada sobre millones de ingresos en unidades de criticos de nueve paises.',
      fisiopatologia: 'La escala clasica se dise&#241;o con la practica de los a&#241;os noventa y por eso no capturaba los soportes actuales: la canula nasal de alto flujo y la ventilacion no invasiva no existian como estandar, los vasopresores se dosificaban alrededor de la dopamina, y la depuracion extrarrenal se iniciaba mas tarde. SOFA-2 no cambia el concepto sino su calibracion: describe la misma disfuncion con los umbrales y los tratamientos de hoy, lo que mejora su rendimiento en contextos muy distintos, incluidos los paises de renta baja y media.',
      epidemiologia: 'El desarrollo se apoyo en mas de dos millones de pacientes para la fase de construccion y validacion interna, y en mas de un millon adicional para la validacion externa, procedentes de mas de mil unidades. Es, con diferencia, el mayor esfuerzo de validacion de una escala de disfuncion organica.',
      factores_riesgo: ['Puntuar el Glasgow de un paciente sedado sin usar el valor previo', 'Olvidar el punto que suman los farmacos para el delirium', 'Puntuar 3 o 4 en respiratorio sin soporte ventilatorio avanzado', 'No contar la canula de alto flujo ni la ventilacion no invasiva como soporte avanzado', 'Sumar mal las dosis de noradrenalina y adrenalina', 'Ignorar el soporte mecanico circulatorio', 'No puntuar la depuracion extrarrenal como 4 en el dominio renal', 'Usar los umbrales de plaquetas antiguos', 'Rellenar los datos faltantes con suposiciones en lugar de las reglas del score', 'Comparar puntuaciones de SOFA-1 y SOFA-2 como si fueran la misma escala'],
      clinica: 'No es un cuadro clinico sino un instrumento. Sus seis dominios son cerebro, respiratorio, cardiovascular, higado, ri&#241;on y hemostasia, cada uno de 0 a 4, con un total de 0 a 24.',
      criterios_dx: 'Cada dominio tiene sus puntos de corte, detallados en la Figura 2 de Definicion. El total es la suma de los MAXIMOS de cada sistema dentro de un periodo de 24 horas.',
      laboratorio: 'Los mismos que la escala clasica: gasometria, bilirrubina, creatinina y plaquetas, mas la diuresis. La novedad practica es que no basta el laboratorio: hay que registrar tambien el SOPORTE que recibe el paciente, porque puntua.',
      imagen: 'No aplica: la escala no incluye ningun dominio de imagen.',
      complementarios: 'Registro de las dosis exactas de vasoactivos, del tipo de soporte respiratorio y de si el paciente recibe o cumple criterios de depuracion extrarrenal. Todo eso hay que anotarlo a diario para poder calcular la escala.',
      dx_diferencial: 'Frente a otras escalas: MODS y LODS describen tambien disfuncion organica pero se usan poco; APACHE II y SAPS son de gravedad al INGRESO y no de seguimiento; y las escalas de alerta precoz sirven para cribar, no para definir disfuncion.',
      tx_medico: 'No aplica: es una herramienta de medicion. Su utilidad practica es homogeneizar el lenguaje entre turnos y entre servicios, y permitir ver la tendencia.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'La escala describe la gravedad pero NO decide el ingreso por si sola. Esa decision depende de la reversibilidad, de la situacion basal y de la voluntad del paciente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Se calcula cada 24 horas. Lo que mas informa es la TENDENCIA: una puntuacion que desciende indica respuesta al tratamiento y una que asciende obliga a reevaluar el foco y el plan antes de asumir que es la evolucion natural.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La puntuacion se correlaciona con la mortalidad de forma escalonada, y la evaluacion SERIADA predice mejor que la del primer dia. Pero sigue siendo un instrumento poblacional: no predice el desenlace de un individuo.',
      algoritmo: ['Recoger los seis dominios con los PEORES valores de las ultimas 24 horas', 'En el paciente sedado, usar el Glasgow previo a la sedacion', 'Sumar un punto si recibe farmacos para el delirium', 'Comprobar si hay SOPORTE VENTILATORIO AVANZADO antes de puntuar 3 o 4', 'Sumar las dosis de noradrenalina y adrenalina y comparar con 0.2 y 0.4', 'Registrar cualquier otro vasoactivo y el soporte mecanico', 'Puntuar 4 en renal si recibe o cumple criterios de depuracion', 'Usar los umbrales nuevos de plaquetas, hasta 50000', 'Puntuar 0 los datos que faltan el primer dia', 'Repetir cada dia y mirar la TENDENCIA']
    },
    {
      nombre: 'SOFA clasico y la definicion de sepsis',
      color: '#3d5a73',
      definicion: 'Version original de la escala, publicada en 1996, que sigue siendo la base sobre la que se construyo la definicion actual de sepsis y la que aparece en la mayoria de los estudios y protocolos vigentes.',
      fisiopatologia: 'La escala nacio para describir la disfuncion organica de la sepsis y despues se generalizo a todo el paciente critico. Su logica es sencilla y sigue siendo valida: seis organos, cada uno con una variable objetiva y disponible, y una gradacion de 0 a 4 que refleja el continuo entre la funcion normal y el fallo establecido. Esa simplicidad explica por que se impuso sobre alternativas mas complejas y por que sigue en uso.',
      epidemiologia: 'Es la escala de disfuncion organica mas utilizada del mundo. La transicion a SOFA-2 sera gradual, y durante a&#241;os convivira con la clasica en protocolos, historias electronicas y publicaciones, de modo que hay que saber usar las dos y NO comparar puntuaciones entre ellas.',
      factores_riesgo: ['Asumir un basal de 0 sin comprobar si hay disfuncion cronica', 'Confundir el valor absoluto con el incremento agudo', 'Aplicar los criterios sin sospecha de infeccion', 'Puntuar el Glasgow de un paciente sedado', 'Olvidar que el choque septico exige lactato ademas de vasopresores', 'Usar los criterios de respuesta inflamatoria sistemica como definicion de sepsis', 'No repetir la escala y quedarse con el valor del ingreso', 'Mezclar puntuaciones de la escala clasica y de SOFA-2', 'Calcularla sin diuresis horaria disponible', 'Interpretar una puntuacion alta como indicacion automatica de limitar el esfuerzo'],
      clinica: 'La escala en si no tiene clinica. Lo que si tiene consecuencias clinicas es la definicion que sostiene: SEPSIS es infeccion sospechada o documentada mas un incremento AGUDO de 2 o mas puntos de SOFA sobre el basal.',
      criterios_dx: 'CHOQUE SEPTICO: sepsis mas necesidad de vasopresores para mantener una tension arterial media de 65 mmHg o mas, mas lactato por encima de 2 mmol/L, ambas cosas PESE a una reanimacion con volumen adecuada. Ver la Figura 3 de Definicion.',
      laboratorio: 'Los seis dominios de la escala, mas el LACTATO, que no forma parte de SOFA pero si de la definicion de choque septico. Hemocultivos antes del antibiotico siempre que no lo retrasen.',
      imagen: 'La dirigida a localizar el foco. No forma parte de los criterios.',
      complementarios: 'Estimacion del basal: si no se conoce disfuncion previa, se asume 0. En un paciente con enfermedad renal o hepatica cronica conocida, ignorar ese basal SOBREESTIMA la disfuncion aguda.',
      dx_diferencial: 'Otras causas de disfuncion organica aguda sin infeccion: pancreatitis, politraumatismo, quemadura, isquemia y reperfusion, sindrome hemofagocitico y toxicidad farmacologica. Todas producen puntuaciones altas sin ser sepsis.',
      tx_medico: 'El de la sepsis, que tiene su propio tema. Aqui interesa lo conceptual: la definicion sirve para IDENTIFICAR, y una vez identificado el paciente lo que cambia el desenlace es el tratamiento precoz del foco y el soporte.',
      tx_farmacologico: 'Antimicrobiano precoz, reanimacion con cristaloides y vasopresores segun la respuesta. El detalle esta en el tema de sepsis.',
      tx_intervencionista: 'Control del foco, que sigue siendo lo determinante.',
      criterios_uci: 'El choque septico es, por definicion, un cuadro de cuidados criticos. La sepsis sin choque se valora caso a caso.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Repetir la escala a diario. Un incremento de 2 o mas puntos en un paciente ya ingresado obliga a buscar una complicacion nueva: un foco no controlado, una infeccion asociada a dispositivos o un evento vascular.',
      seguimiento_ambulatorio: 'No aplica directamente, salvo por el seguimiento de las secuelas.',
      pronostico: 'La evaluacion SERIADA predice mejor que la puntuacion inicial: un SOFA que desciende en las primeras 48 horas se asocia a mejor supervivencia, y uno que asciende, a lo contrario.',
      algoritmo: ['Comprobar que hay sospecha o documentacion de INFECCION', 'Estimar el basal, asumiendo 0 si no hay disfuncion conocida', 'Calcular la escala SOFA actual', 'Comprobar si el incremento AGUDO es de 2 o mas puntos', 'Si lo es, el paciente tiene SEPSIS', 'Comprobar si necesita vasopresores para una tension media de 65', 'Comprobar si el lactato es mayor de 2 pese a la reanimacion', 'Si ambas, el paciente tiene CHOQUE SEPTICO', 'Iniciar el tratamiento sin esperar a completar los calculos', 'Repetir la escala cada dia para seguir la tendencia']
    },
    {
      nombre: 'Cribado y deteccion precoz del deterioro',
      color: '#3f6b52',
      definicion: 'Conjunto de herramientas y sistemas que buscan identificar al paciente que se esta deteriorando ANTES de que la disfuncion organica se establezca, sobre todo fuera de la unidad de criticos.',
      fisiopatologia: 'El deterioro fisiologico no es brusco: precede en HORAS a la parada cardiaca y a la necesidad de ingreso en criticos. En esa ventana las constantes vitales ya se han alterado, y de todas ellas la FRECUENCIA RESPIRATORIA es la que antes cambia, porque el aumento de la ventilacion es la primera compensacion tanto de la hipoxemia como de la acidosis metabolica. La paradoja es que es tambien el parametro peor medido y peor registrado en planta, muchas veces anotado de memoria.',
      epidemiologia: 'Los sistemas de alerta precoz se han extendido por todo el mundo. La guia de sepsis de 2026 recomienda de forma FUERTE, con certeza moderada, usar NEWS, NEWS2, MEWS o SIRS por encima de qSOFA como herramienta unica de cribado en el paciente hospitalizado, porque las escalas de alerta precoz han demostrado ser mas sensibles.',
      factores_riesgo: ['Constantes tomadas de forma incompleta o anotadas de memoria', 'Frecuencia respiratoria no contada realmente', 'Puntuacion registrada sin que nadie acuda', 'Ausencia de un equipo de respuesta rapida', 'Uso de qSOFA como cribado unico', 'Fatiga de alarmas con demasiados falsos positivos', 'Turnos con poca dotacion', 'Barreras jerarquicas para escalar un aviso', 'Paciente con oxigeno cronico mal clasificado en la escala', 'Traslados y cambios de turno, que fragmentan la vigilancia'],
      clinica: 'Taquipnea, taquicardia, hipotension relativa, descenso de la saturacion, necesidad creciente de oxigeno, alteracion del nivel de conciencia, oliguria y fiebre o hipotermia. Ninguno de estos signos es especifico, y ese es justamente el motivo de sumarlos en una puntuacion.',
      criterios_dx: 'NEWS2 suma de 0 a 20 con siete parametros. qSOFA es positivo con 2 o mas de sus tres criterios. Ver la Figura 3 de Definicion.',
      laboratorio: 'Ninguno es necesario para cribar, y esa es su ventaja: se hace con constantes de cabecera. El laboratorio viene despues, cuando la puntuacion obliga a valorar al paciente.',
      imagen: 'No aplica al cribado.',
      complementarios: 'Un sistema de RESPUESTA asociado a la puntuacion: quien acude, en cuanto tiempo y con que autoridad para actuar. Sin eso, la escala solo genera papel.',
      dx_diferencial: 'Una puntuacion elevada no significa sepsis: puede ser dolor, ansiedad, deprivacion alcoholica, tromboembolia, hemorragia, arritmia o descompensacion de una enfermedad cronica. La escala detecta DETERIORO, no diagnostica.',
      tx_medico: 'Valoracion clinica inmediata y proporcional a la puntuacion, con revision de la via aerea, la respiracion, la circulacion y el nivel de conciencia. Y una decision explicita sobre el nivel de cuidados y sobre los objetivos de tratamiento.',
      tx_farmacologico: 'El que corresponda a la causa. Si hay sospecha de sepsis, hemocultivos y antibiotico precoz sin esperar a completar el estudio.',
      tx_intervencionista: 'La que exija la causa identificada.',
      criterios_uci: 'Una puntuacion alta y sostenida pese al tratamiento, o un deterioro rapido, obligan a valorar el traslado. Avisar tarde a criticos es uno de los factores modificables mas consistentes.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Aumentar la frecuencia de las constantes en cuanto la puntuacion sube, y dejar por escrito el plan y el umbral de reaviso. Una puntuacion que no baja tras la intervencion es una indicacion de escalar, no de repetir la misma medida.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'El impacto de estos sistemas depende mucho mas de la RESPUESTA organizativa que del calculo. Una escala sin equipo que acuda no mejora nada.',
      algoritmo: ['Tomar las constantes completas, contando de verdad la frecuencia respiratoria', 'Calcular NEWS2 o la escala que use el centro', 'No usar qSOFA como herramienta unica de cribado', 'Ante puntuacion elevada, valorar al paciente de inmediato', 'Buscar la causa: infeccion, hemorragia, arritmia, tromboembolia o farmacos', 'Si hay sospecha de sepsis, hemocultivos y antibiotico precoz', 'Aumentar la frecuencia de vigilancia y dejar un umbral de reaviso', 'Escalar si la puntuacion no baja con el tratamiento', 'Avisar a criticos antes de que el paciente claudique', 'Dejar por escrito el nivel de cuidados acordado']
    },
    {
      nombre: 'APACHE II y las escalas de gravedad al ingreso',
      color: '#8a6a1f',
      definicion: 'Sistemas de clasificacion de la gravedad que estiman la mortalidad esperada de un grupo de pacientes a partir de los datos de las primeras horas de ingreso en una unidad de criticos.',
      fisiopatologia: 'La logica es distinta a la de SOFA: en lugar de describir el estado de cada organo a lo largo del tiempo, estas escalas capturan la magnitud del desarreglo fisiologico en el momento del ingreso y la corrigen por la reserva del paciente, es decir por la edad y por la enfermedad cronica previa. De ahi sale una probabilidad esperada de muerte que permite comparar poblaciones, ajustar los resultados de un estudio y auditar una unidad.',
      epidemiologia: 'APACHE II se publico en 1985 y sigue siendo el mas citado, pese a existir versiones posteriores y otras familias de escalas. Su uso principal hoy es la investigacion y la comparacion entre centros, no la decision clinica individual.',
      factores_riesgo: ['Usar la escala para decidir el techo terapeutico de un paciente', 'Calcularla con datos incompletos', 'Recoger valores que no son los peores de las primeras 24 horas', 'Olvidar los puntos por edad y por salud cronica', 'Aplicarla fuera del contexto para el que se valido', 'Repetirla como si fuera dinamica', 'Comparar puntuaciones entre escalas distintas', 'Usarla en poblaciones muy diferentes a las de su desarrollo', 'Interpretar la probabilidad poblacional como individual', 'Comunicarla a la familia como si fuera el pronostico del paciente'],
      clinica: 'No es un cuadro clinico. Sus componentes son doce variables fisiologicas (temperatura, tension arterial media, frecuencia cardiaca y respiratoria, oxigenacion, pH, sodio, potasio, creatinina, hematocrito, leucocitos y Glasgow), mas puntos por EDAD y por SALUD CRONICA previa.',
      criterios_dx: 'Se calcula con los PEORES valores de las primeras 24 horas de ingreso. La suma va de 0 a 71 puntos.',
      laboratorio: 'Gasometria, ionograma, creatinina, hematocrito y leucocitos. Todo del primer dia.',
      imagen: 'No forma parte de la escala.',
      complementarios: 'Registro estructurado de las variables. En la practica, la mayoria de las unidades lo calculan de forma automatica desde la historia electronica, lo que reduce el error pero no elimina la necesidad de saber que mide.',
      dx_diferencial: 'Frente a SOFA: APACHE II es una FOTO del ingreso y no se repite; SOFA es una PELICULA que se calcula cada dia. Confundir sus usos es el error conceptual mas frecuente de este apartado.',
      tx_medico: 'No aplica: es un instrumento de medida.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'La escala describe la gravedad de quien YA esta ingresado en criticos; no es un criterio de ingreso ni de alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No se repite. Para el seguimiento diario se usa SOFA.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Estima la mortalidad esperada de POBLACIONES. Su uso legitimo es ajustar por gravedad y comparar; usarla para decidir sobre un paciente concreto o para comunicar un pronostico individual a la familia es un error grave y frecuente.',
      algoritmo: ['Recoger los PEORES valores de las primeras 24 horas', 'Puntuar las doce variables fisiologicas', 'A&#241;adir los puntos por EDAD', 'A&#241;adir los puntos por SALUD CRONICA previa', 'Sumar el total, de 0 a 71', 'Interpretarlo como gravedad al ingreso, no como pronostico individual', 'No repetirlo: para el seguimiento diario, usar SOFA', 'No usarlo para decidir el techo terapeutico', 'No comunicarlo a la familia como probabilidad de ese paciente', 'Usarlo para ajustar por gravedad y comparar resultados']
    },
    {
      nombre: 'Manejo integral y decisiones de adecuacion',
      color: '#7a3f2e',
      definicion: 'Estrategia de tratamiento del paciente con falla organica multiple, basada en tratar la causa, sostener los organos con la menor agresividad posible y decidir de forma explicita hasta donde se llega.',
      fisiopatologia: 'No existe un tratamiento del sindrome en si: todos los ensayos de moduladores de la respuesta inflamatoria han fracasado. Lo que si funciona es actuar sobre los dos extremos de la cascada: eliminar el ESTIMULO (control del foco) y evitar que el soporte se convierta en un SEGUNDO GOLPE. De ahi que casi todas las intervenciones que han demostrado beneficio en el paciente critico sean, en realidad, formas de hacer menos da&#241;o: volumenes corrientes bajos, menos fluidos, menos sedacion, menos transfusion, menos dias de cateter.',
      epidemiologia: 'La mortalidad de las unidades de criticos ha bajado en las ultimas decadas sin que haya aparecido ningun farmaco especifico, lo que apoya que la mejora viene de la organizacion, de la prevencion de la iatrogenia y del control precoz del foco.',
      factores_riesgo: ['Foco no controlado o controlado tarde', 'Balance hidrico positivo acumulado', 'Ventilacion con volumenes o presiones altos', 'Sedacion profunda prolongada', 'Inmovilidad', 'Transfusion sin indicacion', 'Nefrotoxicos evitables', 'Dispositivos mantenidos mas de lo necesario', 'Ausencia de objetivos de tratamiento definidos', 'Conversacion sobre adecuacion pospuesta hasta que el paciente ya no puede participar'],
      clinica: 'La valoracion diaria se organiza por sistemas y con una pregunta por cada uno: que soporte necesita hoy, cuanto se puede reducir y que hay que retirar. Esa revision sistematica es lo que evita que el soporte se perpetue por inercia.',
      criterios_dx: 'No aplica: es la fase de manejo.',
      laboratorio: 'El minimo necesario. Las analiticas diarias no justificadas producen anemia iatrogenica y hallazgos irrelevantes que generan mas pruebas.',
      imagen: 'Dirigida y con una pregunta concreta. La radiografia diaria de rutina no ha demostrado beneficio y se ha ido abandonando.',
      complementarios: 'Escala SOFA diaria. Revision estructurada de dispositivos, farmacos, nutricion, movilizacion y profilaxis. Y un registro explicito del NIVEL DE CUIDADOS acordado, que debe estar en la historia y no solo en la cabeza del equipo.',
      dx_diferencial: 'Ante el paciente que no mejora: foco no controlado, infeccion nosocomial nueva, evento vascular, efecto adverso farmacologico, insuficiencia suprarrenal relativa, sindrome hemofagocitico y, con frecuencia, simplemente un tiempo de recuperacion mas largo del esperado.',
      tx_medico: 'CONTROL DEL FOCO. Ventilacion protectora. Reanimacion con objetivos y despues balance negativo. Sedacion ligera con valoracion diaria, movilizacion precoz y prevencion del delirium. Nutricion enteral precoz cuando sea posible. Profilaxis de trombosis y de ulcera de estres cuando este indicada. Control razonable de la glucemia.',
      tx_farmacologico: 'Antimicrobiano precoz y DESESCALADO en cuanto el cultivo lo permita. Vasoactivos segun el perfil. Y revision diaria de la lista de farmacos para retirar lo que ya no aporta.',
      tx_intervencionista: 'Drenaje o cirugia del foco. Soporte extracorporeo cuando esta indicado. Traqueostomia y gastrostomia dentro de un plan realista y acordado.',
      criterios_uci: 'La pregunta correcta no es si el paciente esta grave sino si el ingreso o la continuidad en criticos van a CAMBIAR su desenlace. Esa pregunta exige conocer la situacion funcional previa, la reversibilidad del proceso y las preferencias del paciente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Revision diaria por sistemas con objetivos escritos. Reuniones periodicas con la familia, no solo cuando hay malas noticias. Y una decision explicita, revisada y anotada sobre el nivel de esfuerzo terapeutico.',
      seguimiento_ambulatorio: 'Seguimiento estructurado de las secuelas fisicas, cognitivas y afectivas de los supervivientes, que existe en muy pocos sitios y que los pacientes agradecen enormemente.',
      pronostico: 'Mejora con el control precoz del foco, con la prevencion de la iatrogenia y con una organizacion que permita detectar pronto al que empeora. Ningun farmaco ha demostrado modificar el sindrome por si mismo.',
      algoritmo: ['Controlar el FOCO cuanto antes', 'Revisar cada dia, sistema por sistema, que soporte se puede reducir', 'Ventilar de forma protectora', 'Pasar de reanimar a despejar: buscar el balance negativo cuando toque', 'Sedar de forma ligera y movilizar pronto', 'Nutrir por via enteral cuando sea posible', 'Retirar dispositivos y farmacos innecesarios', 'Calcular la escala SOFA y mirar la tendencia', 'Definir por escrito el nivel de cuidados acordado', 'Hablar con el paciente y la familia PRONTO, no solo al final']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este tema es el marco del resto del bloque: aqui estan el concepto, las escalas y el metodo. El detalle de cada organo vive en su propio tema. Y hay un mensaje que atraviesa todo: no existe tratamiento del sindrome, existe tratamiento de la causa y soporte que no da&#241;e.',
    parametros: ['Reconocer la fase precoz: taquipnea, oliguria, confusion y piel moteada', 'Contar de verdad la frecuencia respiratoria, que es lo que antes se altera', 'Cribar con NEWS2, MEWS o SIRS, no con qSOFA como herramienta unica', 'Calcular la escala SOFA cada dia y mirar la TENDENCIA', 'En el paciente sedado, usar el Glasgow previo a la sedacion', 'Recordar que sin soporte ventilatorio avanzado el maximo respiratorio son 2 puntos', 'Controlar el FOCO cuanto antes', 'Evitar el segundo golpe: menos volumen, menos sedacion, menos transfusion', 'Revisar a diario cada dispositivo y cada farmaco', 'No usar APACHE II para decidir sobre un paciente concreto', 'Reevaluar el foco si el paciente no mejora', 'Definir y anotar el nivel de cuidados acordado'],
    criterios_uci_general: 'Necesidad actual o previsible de soporte de uno o mas organos en un proceso potencialmente reversible: insuficiencia respiratoria que precisa ventilacion, inestabilidad que precisa vasoactivos, alteracion de la conciencia con riesgo para la via aerea, lesion renal aguda con criterios de depuracion y trastornos metabolicos graves. La pregunta que ordena la decision no es cuan grave esta el paciente, sino si el ingreso en criticos va a CAMBIAR su desenlace, y eso obliga a conocer la situacion funcional previa y la voluntad del paciente.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica en la fase aguda. La disfuncion multiorganica y la infeccion activa son contraindicaciones temporales para el trasplante de organo solido.',
    prevencion: 'Primaria: tratamiento precoz y correcto del proceso que puede desencadenarla, sobre todo la sepsis, y control del foco sin demora. Secundaria: sistemas de alerta precoz con un equipo que acuda de verdad, y prevencion activa de la iatrogenia, que es el segundo golpe mas frecuente: ventilacion protectora, evitar la sobrecarga de fluidos, sedacion ligera con interrupcion diaria, movilizacion precoz, transfusion restrictiva, retirada temprana de cateteres y sondas, profilaxis de trombosis y revision diaria de nefrotoxicos. Terciaria: rehabilitacion precoz durante el ingreso y seguimiento estructurado de las secuelas fisicas, cognitivas y afectivas de los supervivientes, que hoy es la parte mas descuidada de todo el proceso.'
  }
};

export const compCites = {
  'Sindrome de disfuncion organica multiple': [10, 12, 13, 15],
  'SOFA-2: la escala actualizada': [1, 9],
  'SOFA clasico y la definicion de sepsis': [3, 4, 5, 8],
  'Cribado y deteccion precoz del deterioro': [2, 7],
  'APACHE II y las escalas de gravedad al ingreso': [6],
  'Manejo integral y decisiones de adecuacion': [2, 11, 14, 16]
};
export const estigmasTitulo = 'Signos y datos que hay que saber leer';
export const estigmas = [
  { s: 'Taquipnea', p: 'Lo primero que se altera', photo: null, desc: 'Es el signo mas precoz del deterioro y el peor registrado de todos: se anota de memoria con mas frecuencia de la que se cuenta. Un aumento de la frecuencia respiratoria precede en horas al colapso y es el parametro que mas pesa en las escalas de alerta.' },
  { s: 'Piel moteada y relleno capilar lento', p: 'Hipoperfusion periferica', photo: null, desc: 'Signos de cabecera, gratuitos y con valor pronostico demostrado. Persisten cuando la tension arterial ya se ha normalizado, lo que recuerda que la macrocirculacion y la microcirculacion no van de la mano.' },
  { s: 'Tension arterial normal con lactato alto', p: 'No hay perfusion', photo: null, desc: 'La alteracion de la microcirculacion explica que el tejido siga hipoperfundido con un flujo global correcto. Por eso el objetivo de la reanimacion no es un numero de tension sino signos de perfusion y aclaramiento del lactato.' },
  { s: 'Lactato que no baja', p: 'Peor que un lactato alto', photo: null, desc: 'El valor pronostico esta en el ACLARAMIENTO, no en la cifra inicial. Un lactato que no desciende con la reanimacion obliga a replantear el foco, el volumen y el soporte, no a repetir la misma medida.' },
  { s: 'Oliguria antes que creatinina alta', p: 'La diuresis avisa antes', photo: null, desc: 'La creatinina necesita dias para reflejar la caida del filtrado. Vigilar solo la creatinina retrasa el diagnostico de lesion renal aguda, y por eso la diuresis horaria puntua en las escalas de disfuncion.' },
  { s: 'Trombocitopenia precoz', p: 'Marcador de gravedad', photo: null, desc: 'Muy frecuente y de aparicion temprana en el paciente critico. Su descenso mantenido se asocia a peor pronostico, y si se acompa&#241;a de consumo de fibrinogeno hay que valorar coagulacion intravascular diseminada.' },
  { s: 'Balance hidrico positivo acumulado', p: 'Dato pronostico', photo: null, desc: 'Se asocia de forma consistente a peor evolucion, sobre todo pulmonar y renal. Se mide sin aparatos, no cuesta nada y es de los datos peor recogidos en la historia del paciente critico.' },
  { s: 'Glasgow en el paciente sedado', p: 'Usar el previo', photo: null, desc: 'La escala SOFA puntua el ultimo Glasgow ANTERIOR a la sedacion, y si no se conoce se puntua 0. Puntuar el Glasgow bajo un sedante infla la escala y hace incomparables las mediciones entre dias.' },
  { s: 'Farmacos para el delirium', p: 'Puntuan en SOFA-2', photo: null, desc: 'Es una de las novedades de la version de 2025: recibir tratamiento farmacologico para el delirium suma un punto en el dominio cerebral aunque el Glasgow sea 15. Reconoce que el delirium es disfuncion organica.' },
  { s: 'Alto flujo o ventilacion no invasiva', p: 'Cuentan como soporte avanzado', photo: null, desc: 'En SOFA-2, la canula nasal de alto flujo, la presion positiva continua y la ventilacion no invasiva cuentan como soporte ventilatorio avanzado. Sin ese soporte, el dominio respiratorio no puede pasar de 2 puntos.' },
  { s: 'Un SOFA que sube', p: 'Peor que un SOFA alto', photo: null, desc: 'La evaluacion seriada predice mejor que la del primer dia. Un incremento en un paciente ya ingresado obliga a buscar una complicacion nueva antes de asumir que es la evolucion natural del proceso.' },
  { s: 'qSOFA positivo', p: 'Alerta, pero no criba', photo: null, desc: 'La guia de sepsis de 2026 recomienda de forma fuerte usar NEWS, NEWS2, MEWS o SIRS por encima de qSOFA como herramienta unica de cribado, porque su sensibilidad es baja. Un qSOFA positivo si debe hacer pensar en sepsis.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Escala SOFA y SOFA-2 (calculadora disponible)': [1, 4],
  'Criterios de Sepsis-3': [3, 5],
  'Cribado con NEWS2 y qSOFA (calculadora disponible)': [2, 7],
  'APACHE II (calculadora disponible)': [6],
  'Criterios de ingreso y de alta de la unidad de criticos': [16],
  'Escala de alerta precoz en planta': [7, 2]
};
export const escalaCalc = {
  'Escala SOFA y SOFA-2 (calculadora disponible)': 'sofa',
  'Cribado con NEWS2 y qSOFA (calculadora disponible)': 'cribado-deterioro',
  'APACHE II (calculadora disponible)': 'apache-ii'
};
export const compGroups = [
  { name: 'El sindrome', items: ['Sindrome de disfuncion organica multiple'] },
  { name: 'Medir la disfuncion', items: ['SOFA-2: la escala actualizada', 'SOFA clasico y la definicion de sepsis'] },
  { name: 'Detectar y pronosticar', items: ['Cribado y deteccion precoz del deterioro', 'APACHE II y las escalas de gravedad al ingreso'] },
  { name: 'Tratar y decidir', items: ['Manejo integral y decisiones de adecuacion'] }
];
export const complicacionesIntro = 'La primera ficha es el concepto: que es la disfuncion organica multiple, como se llega hasta ella y por que es reversible. Las dos siguientes son las escalas que la miden: SOFA-2, actualizada en 2025 tras treinta a&#241;os, y la version clasica, que sigue siendo la que sostiene la definicion de sepsis y con la que hay que saber convivir. Las dos siguientes responden a preguntas distintas de la anterior: cribar al que se esta deteriorando en planta, y estimar la gravedad al ingreso, con la advertencia de que esa ultima escala predice poblaciones y no personas. Y la ultima es el manejo, donde casi todo lo que ha demostrado funcionar consiste, en el fondo, en hacer menos da&#241;o.';
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
  root: { title: 'PACIENTE CRITICO CON DISFUNCION DE ORGANOS', color: '#5a4a8c', target: 'definicion' },
  branches: [
    { title: 'COMO SE LLEGA', sub: 'Insulto, respuesta, microcirculacion', color: '#5a4a8c', target: 'complicaciones', leaves: [
      { title: 'Respuesta desregulada', sub: 'Inflama y a la vez inmunodeprime', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Microcirculacion', sub: 'Tension normal no es perfusion', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Es REVERSIBLE', sub: 'Los organos se recuperan', color: '#3f6b52', target: 'complicaciones' },
      { title: 'El segundo golpe', sub: 'Casi siempre iatrogenico', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'COMO SE MIDE', sub: 'Tres preguntas, tres escalas', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Cribar', sub: 'NEWS2, no qSOFA solo', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Definir', sub: 'SOFA: 2 puntos es sepsis', color: '#3d5a73', target: 'clasificacion' },
      { title: 'SOFA-2', sub: 'Actualizada en 2025', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pronosticar', sub: 'APACHE II: poblaciones', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'QUE SE HACE', sub: 'Causa, soporte y decisiones', color: '#7a3f2e', target: 'complicaciones', leaves: [
      { title: 'Controlar el foco', sub: 'Lo unico que detiene todo', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hacer menos da&#241;o', sub: 'Menos volumen y sedacion', color: '#3f6b52', target: 'seguimiento' },
      { title: 'Mirar la tendencia', sub: 'No el valor aislado', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Definir hasta donde', sub: 'Pronto, no al final', color: '#6b4a8c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 6, 7], imagen: [11, 2] };
export const clasificacionCite = [1, 3, 6, 7];
export const seguimientoCite = [2, 14, 16];
