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
  titulo: 'Disfunción Orgánica Múltiple',
  subtitulo: 'Módulo 68 · Medicina Interna',
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
    <strong style="color:#5a4a8c;">El síndrome de disfunción orgánica múltiple no es una enfermedad: es la via final común de casi todo lo que ingresa en una unidad de críticos.</strong> <span style="color:var(--ink-dim);">Y su rasgo más importante es que, en gran parte, es REVERSIBLE.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">EL INSULTO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Infección, traumatismo, pancreatitis, quemadura, cirugía mayor o isquemia y reperfusión. Da igual cual sea: a partir de cierto umbral, todos desembocan en la misma respuesta.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">RESPUESTA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Activación inmunitaria <strong style="color:var(--ink);">DESREGULADA</strong>, con componentes proinflamatorio y antiinflamatorio a la vez. De ahi salen a la vez el daño tisular y la inmunosupresión que favorece las infecciones tardías.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">ENDOTELIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Pérdida del glucocalix, aumento de permeabilidad, edema intersticial, microtrombosis y alteración de la MICROCIRCULACIÓN. El flujo global puede ser normal y el tejido seguir hipoperfundido: por eso una tensión arterial correcta no garantiza nada.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">LA CÉLULA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Disfunción mitocondrial y descenso del consumo de oxígeno. Se ha propuesto que parte de la disfunción es una <strong style="color:#3f6b52;">ADAPTACIÓN</strong> metabólica, algo parecido a una hibernacion celular, y eso explicaría por que los órganos se recuperan casi sin cicatriz si el paciente sobrevive.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El SEGUNDO GOLPE.</strong> Un paciente ya sensibilizado por el primer insulto responde de forma desproporcionada al siguiente, que muchas veces es <strong>IATROGÉNICO</strong>: ventilación con volúmenes altos, sobrecarga de fluidos, sedación profunda, transfusión innecesaria, nefrotóxicos o una infección asociada a dispositivos.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Primario o secundario.</strong> El <strong>PRIMARIO</strong> es daño directo del insulto y aparece pronto (contusión pulmonar, rabdomiólisis). El <strong>SECUNDARIO</strong> es consecuencia de la respuesta del huésped y aparece días después, con frecuencia lejos del órgano lesionado. Distinguirlos cambia donde se busca la causa.
    </div>
  </div>
</div>`;

const sofa2Html = `
<div style="max-width:660px;margin:0 auto;font-size:9px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">SOFA-2 (2025) es la primera actualización de la escala en 30 años.</strong> <span style="color:var(--ink-dim);">Mantiene los <strong>6 sistemas</strong> y el rango de 0 a 24: los dominios inmune y digestivo se propusieron, se evaluaron y se <strong>DESCARTARON</strong>.</span>
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
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 13-14 <strong style="color:#8c3a34;">o fármacos para delirium</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 9-12</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 6-8</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Glasgow 3-5</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Respiratorio</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">PaO2/FiO2 ≤300</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤225</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤150 <strong style="color:#8c3a34;">+ soporte avanzado</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤75 + soporte, o ECMO</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Cardiovascular</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">PAM &lt;70 sin vasoactivos</td>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong style="color:#8c3a34;">Nor+adr ≤0.2</strong> o cualquier otro vasoactivo</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Nor+adr &gt;0.2 y ≤0.4, o ≤0.2 con otro</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Nor+adr &gt;0.4, o soporte mecánico</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Hígado</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Bilirrubina ≤3.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤6.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤12.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&gt;12 mg/dL</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Riñón</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Creatinina ≤2.0</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤3.5</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">&gt;3.5 o anuria</td>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong style="color:#8c3a34;">Recibe o CUMPLE criterios de depuración</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong>Hemostasia</strong></td>
      <td style="border:1px solid var(--line);padding:3px 4px;">Plaquetas ≤150</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤100</td>
      <td style="border:1px solid var(--line);padding:3px 4px;">≤80</td>
      <td style="border:1px solid var(--line);padding:3px 4px;"><strong style="color:#8c3a34;">≤50</strong> (antes &lt;20)</td>
    </tr>
  </table>
  </div>
  <div style="padding:5px 9px;border:1px solid #3f6b52;border-radius:8px;background:#3f6b5210;color:var(--ink-dim);">
    <strong style="color:#3f6b52;">Tres reglas de uso que evitan la mayoría de los errores.</strong> En el paciente <strong>SEDADO</strong> se usa el último Glasgow anterior a la sedación, y si no se conoce se puntúa 0. Los datos que <strong>FALTAN el primer dia</strong> se puntuan 0. A partir del segundo dia, un dato que falta se <strong>ARRASTRA</strong> del anterior, porque no haberlo medido sugiere estabilidad. Y en respiratorio, sin soporte ventilatorio avanzado el máximo posible son 2 puntos.
  </div>
</div>`;

const escalasHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">Las escalas de este tema no compiten: responden a preguntas distintas.</strong> <span style="color:var(--ink-dim);">Usar la de cribado para pronosticar, o la de pronóstico para decidir sobre un paciente concreto, es el error de fondo.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">CRIBAR<br><span style="font-weight:400;font-size:8.5px;">¿puede estar grave?</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">NEWS2, MEWS o SIRS</strong>, con constantes de la planta. La guía de sepsis de 2026 recomienda de forma <strong style="color:#3f6b52;">FUERTE</strong> usar cualquiera de estas por encima de <strong>qSOFA</strong> como herramienta única de cribado, porque la sensibilidad de qSOFA es baja. Un qSOFA positivo alerta, pero no vale para cribar.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">DEFINIR<br><span style="font-weight:400;font-size:8.5px;">¿hay disfunción?</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">SOFA</strong>, en su versión clásica o en SOFA-2. Es lo que convierte "esta grave" en un número por órganos. Con infección sospechada, un incremento AGUDO de <strong>2 o más puntos</strong> sobre el basal define SEPSIS.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">PRONOSTICAR<br><span style="font-weight:400;font-size:8.5px;">¿cómo le ira al grupo?</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">APACHE II</strong> y similares, con los PEORES valores de las primeras 24 horas. Sirven para comparar poblaciones, ajustar por gravedad y auditar unidades. <strong style="color:#8c3a34;">NO sirven para decidir el techo terapéutico de un paciente concreto.</strong></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Estático frente a dinámico.</strong> APACHE II es una foto del INGRESO y no se repite. SOFA es una pelicula: se calcula cada dia y lo que más informa es la <strong>TENDENCIA</strong>. Un SOFA de 8 que baja y uno de 8 que sube no son el mismo paciente.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Lo que ninguna escala hace.</strong> Ninguna sustituye a mirar al paciente, ninguna decide un ingreso o una limitación por si sola, y ninguna esta validada para predecir el desenlace de un individuo. Su valor es ordenar, comunicar y comparar.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El <strong>síndrome de disfunción orgánica múltiple</strong> es la alteración aguda y potencialmente reversible de la función de dos o más órganos en un paciente crítico, hasta el punto de que la homeostasis no puede mantenerse sin intervención. No es una enfermedad concreta sino la <strong>via final común</strong> de casi todo lo que ingresa en una unidad de críticos, y es la principal causa de muerte en ellas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: como se llega hasta aquí.</strong></p>
<p style="margin:0 0 12px;">Un insulto suficientemente intenso desencadena una respuesta inmunitaria <strong>desregulada</strong>, que daña el endotelio y la microcirculación y termina alterando el metabolismo celular. Hay dos ideas con consecuencias prácticas: que parte de la disfunción parece una <strong>adaptación</strong> metabólica y por eso es reversible, y que el <strong>segundo golpe</strong> que empeora al paciente es con frecuencia <strong>iatrogénico</strong>.</p>
${figBlock('Figura 1', 'Del insulto a la disfunción: la cascada y el segundo golpe', cascadaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: como se mide.</strong></p>
<p style="margin:0 0 12px;">La escala SOFA se actualizo en 2025 por primera vez en treinta años. <strong>SOFA-2</strong> mantiene los seis sistemas y el rango de 0 a 24, pero cambia los puntos de corte y, sobre todo, incorpora los soportes que hoy se usan de verdad: la cánula nasal de alto flujo y la ventilación no invasiva cuentan como soporte respiratorio avanzado, las dosis de vasoactivos sustituyen al esquema centrado en la dopamina, y la depuración extrarrenal puntúa el máximo.</p>
${figBlock('Figura 2', 'SOFA-2: los seis sistemas y lo que cambia respecto al clásico', sofa2Html)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: que escala para que pregunta.</strong></p>
<p style="margin:0 0 12px;">Cribar, definir y pronosticar son tres preguntas distintas y cada una tiene su herramienta. La guía de sepsis de 2026 zanja una de ellas con una recomendación fuerte: para cribar en el hospital se usan <strong>NEWS, NEWS2, MEWS o SIRS</strong>, y no qSOFA como herramienta única.</p>
${figBlock('Figura 3', 'Cribar, definir y pronosticar: tres preguntas, tres escalas', escalasHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No tratar el síndrome como si fuera una enfermedad: lo que se trata es la <strong>causa</strong>, y el resto es soporte. No usar qSOFA como herramienta única de cribado. No usar APACHE II para decidir sobre un paciente concreto, porque predice mortalidad de poblaciones. No quedarse con el valor aislado de un SOFA en lugar de mirar su <strong>tendencia</strong>. No olvidar que en el paciente sedado el Glasgow que se puntúa es el previo a la sedación. No dar por buena una tensión arterial correcta como prueba de que el tejido esta perfundido. No provocar el segundo golpe con volúmenes altos, sobrecarga de fluidos, sedación profunda o nefrotóxicos evitables. No retrasar el <strong>control del foco</strong>, que es lo único que detiene la cascada. Y no dejar la conversación sobre objetivos y adecuación del esfuerzo para cuando el paciente ya no pueda participar en ella.</p>`;

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
      tituloA: 'Disfunción incipiente',
      tituloB: 'Falla establecida',
      compensada: 'El paciente todavía compensa y los signos son sutiles: taquipnea (que es el parámetro que antes se altera y el que peor se registra), taquicardia, tensión arterial en el limite bajo de lo habitual PARA ESE paciente, oliguria incipiente, inquietud o desorientación leve, relleno capilar enlentecido y piel moteada. La analítica puede mostrar solo un lactato ligeramente elevado y un descenso de plaquetas. Es la fase en la que una escala de alerta precoz rinde de verdad, y también la fase en la que un paciente en planta se deteriora durante horas sin que nadie sume los datos.',
      descompensada: 'Disfunción establecida de dos o más órganos: hipoxemia con necesidad de soporte respiratorio, hipotensión dependiente de vasoactivos, oliguria o anuria con ascenso de creatinina, alteración del nivel de conciencia, ictericia y trombocitopenia con o sin sangrado. Aparecen además la acidosis metabólica con lactato elevado, la hiperglucemia de estrés y el balance hídrico marcadamente positivo. En esta fase el número de órganos afectados y, sobre todo, la PERSISTENCIA de la disfunción a lo largo de los días son los que marcan el pronóstico.'
    },
    laboratorio: [
      { prueba: 'Lactato arterial', utilidad: 'Marcador de hipoperfusión y de estrés metabólico. Su valor pronóstico esta sobre todo en el ACLARAMIENTO: un lactato que no baja con la reanimación es peor señal que un valor inicial alto. Ojo, también sube por adrenérgicos, insuficiencia hepática y convulsiones.' },
      { prueba: 'Gasometría arterial con PaO2 y FiO2', utilidad: 'Permite calcular el cociente PaO2/FiO2, que es el dominio respiratorio de la escala SOFA. Si no hay gasometría, SOFA-2 acepta el cociente de saturación sobre FiO2, pero solo cuando la saturación es menor del 98%.' },
      { prueba: 'Creatinina y diuresis horaria', utilidad: 'Ambas puntuan en el dominio renal. La DIURESIS se altera antes que la creatinina, que necesita días para reflejar la caída del filtrado, de modo que vigilar solo la creatinina retrasa el diagnóstico de lesión renal aguda.' },
      { prueba: 'Bilirrubina total', utilidad: 'Dominio hepático de la escala. Conviene recordar que en el paciente crítico se eleva por muchas causas además de la hepática: hemólisis, transfusión, nutrición parenteral, fármacos y colestasis asociada a la propia sepsis.' },
      { prueba: 'Plaquetas y estudio de coagulación', utilidad: 'Dominio de hemostasia. La trombocitopenia es muy frecuente y precoz, y su descenso mantenido se asocia a peor pronóstico. Si se acompaña de consumo de fibrinógeno y elevación del dímero D, hay que valorar coagulación intravascular diseminada.' },
      { prueba: 'Hemocultivos y cultivos del foco', utilidad: 'Antes del antibiótico siempre que no lo retrasen. El CONTROL DEL FOCO es lo único que detiene la cascada, y no se puede controlar un foco que no se ha buscado.' },
      { prueba: 'Proteína C reactiva y procalcitonina', utilidad: 'Apoyan y ayudan a acortar la duración del antibiótico, pero NO definen disfunción orgánica ni sustituyen al juicio clínico. Un valor normal no descarta y uno alto no confirma.' },
      { prueba: 'Analítica general y balance', utilidad: 'Hemograma, ionograma, función hepática y renal, glucemia, calcio y magnesio, y un BALANCE HÍDRICO acumulado bien registrado, que es un dato pronóstico por sí mismo y uno de los peor recogidos en la historia.' }
    ],
    no_invasivos: [
      { metodo: 'Escala SOFA y SOFA-2 (calculadora disponible)', interpretacion: 'Puntúa de 0 a 4 la disfunción de seis sistemas y suma de 0 a 24. La calculadora del tema devuelve a la vez la versión clásica y SOFA-2, para ver donde difieren.', cutoff: 'Con infección sospechada, un incremento agudo de 2 o más puntos define SEPSIS' },
      { metodo: 'Cribado con NEWS2 y qSOFA (calculadora disponible)', interpretacion: 'Calcula las dos herramientas con las constantes de cabecera y explica por que la guía de 2026 prefiere las escalas de alerta precoz frente a qSOFA.', cutoff: 'NEWS2 de 5 o más, o 3 en un solo parámetro: respuesta urgente' },
      { metodo: 'APACHE II (calculadora disponible)', interpretacion: 'Doce variables fisiológicas con los PEORES valores de las primeras 24 horas, más edad y salud crónica previa. Se calcula una sola vez, al ingreso.', cutoff: 'De 0 a 71 puntos. Predice mortalidad de POBLACIONES, no de individuos' },
      { metodo: 'Escala de coma de Glasgow', interpretacion: 'Es el dominio cerebral de la escala SOFA. En el paciente sedado se usa el último valor ANTERIOR a la sedación, y si no se conoce se puntúa 0.', cutoff: 'SOFA-2 añade un punto si recibe fármacos para el delirium, aunque el Glasgow sea 15' },
      { metodo: 'Ecografía a pie de cama', interpretacion: 'Valora la función cardiaca, la volemia, el pulmón, la vena cava y descarta focos ocultos. Ha desplazado a buena parte de la monitorización invasiva en la valoración inicial.', cutoff: 'Responde a la pregunta práctica: es un problema de bomba, de volumen o de tono' },
      { metodo: 'Balance hídrico acumulado y peso diario', interpretacion: 'Un balance positivo acumulado se asocia de forma consistente a peor evolución, sobre todo en el pulmón y en el riñón. Se mide sin aparatos y se registra mal.', cutoff: 'Cuando termina la fase de reanimación, el objetivo pasa a ser el balance negativo' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Valora infiltrados, congestión, derrame y la posición de los dispositivos. Es la prueba más repetida en el paciente crítico y con frecuencia la peor mirada: conviene compararla con la previa y no leerla aislada.' },
      { modalidad: 'Ecografía clínica multiorgano', hallazgos: 'Corazón, pulmón, vena cava, abdomen y accesos vasculares. Permite orientar el tipo de choque, detectar un foco abdominal, valorar la respuesta a volumen y guiar procedimientos, todo a pie de cama y sin trasladar al paciente.' },
      { modalidad: 'Tomografía dirigida a la búsqueda del foco', hallazgos: 'Cuando el foco no aparece y el paciente no mejora. El traslado de un paciente inestable tiene riesgo, pero un foco no drenado tiene más: la decisión se toma pensando en si el resultado va a cambiar la conducta.' },
      { modalidad: 'Imagen de control de dispositivos y accesos', hallazgos: 'Catéteres, sondas y drenajes son a la vez tratamiento y puerta de entrada de infección. Revisar a diario si cada uno sigue siendo necesario es una de las intervenciones más rentables y menos glamurosas del manejo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por el <strong>momento</strong> y el <strong>mecanismo</strong>: el SDMO <strong>primario</strong> es daño directo del insulto y aparece pronto, mientras que el <strong>secundario</strong> es consecuencia de la respuesta del huésped y aparece días después, con frecuencia lejos del órgano lesionado. En paralelo se clasifica por el <strong>número de órganos</strong> afectados y por la <strong>gravedad</strong> de cada uno, que es lo que cuantifican las escalas. Y una tercera división, la más útil para el pronóstico: la disfunción que <strong>se resuelve</strong> frente a la que <strong>persiste</strong> más allá de los primeros días.`,
    escalas: [
      { nombre: 'Escala SOFA y SOFA-2 (calculadora disponible)', componentes: 'Seis sistemas: cerebro (Glasgow), respiratorio (PaO2/FiO2 y soporte), cardiovascular (tensión media y vasoactivos), hígado (bilirrubina), riñón (creatinina y diuresis) y hemostasia (plaquetas).', formula: 'Cada sistema puntúa de 0 a 4 y se suman, de 0 a 24. SOFA-2, publicada en 2025, mantiene los seis sistemas y el rango pero cambia los puntos de corte y las definiciones de soporte.', interpretacion: 'Los dominios inmune y digestivo se propusieron para SOFA-2, se evaluaron y se DESCARTARON: el digestivo no demostró validez predictiva y el inmune no cumplio la de contenido. Lo que más informa no es el valor aislado sino la TENDENCIA a lo largo de los días.' },
      { nombre: 'Criterios de Sepsis-3', componentes: 'Infección sospechada o documentada más disfunción orgánica medida con SOFA.', formula: 'SEPSIS: infección más incremento AGUDO de 2 o más puntos de SOFA sobre el basal. CHOQUE SÉPTICO: sepsis más necesidad de vasopresores para mantener una tensión arterial media de 65 mmHg o más y lactato por encima de 2 mmol/L pese a una reanimación adecuada.', interpretacion: 'Si no se conoce disfunción previa, el basal se asume 0. La definición abandono los criterios de respuesta inflamatoria sistémica como definitorios de sepsis, aunque siguen siendo útiles para CRIBAR.' },
      { nombre: 'Cribado con NEWS2 y qSOFA (calculadora disponible)', componentes: 'NEWS2: frecuencia respiratoria, saturación, uso de oxígeno, tensión sistólica, frecuencia cardiaca, nivel de conciencia y temperatura. qSOFA: frecuencia respiratoria de 22 o más, alteración del estado mental y tensión sistólica de 100 mmHg o menos.', formula: 'NEWS2 suma de 0 a 20. qSOFA suma de 0 a 3 y se considera positivo con 2 o más.', interpretacion: 'La guía de sepsis de 2026 recomienda de forma FUERTE usar NEWS, NEWS2, MEWS o SIRS por encima de qSOFA como herramienta única de cribado, porque la sensibilidad de qSOFA es baja. Un qSOFA positivo sigue siendo una alerta valiosa de deterioro, pero no es un cribado.' },
      { nombre: 'APACHE II (calculadora disponible)', componentes: 'Doce variables fisiológicas (temperatura, tensión media, frecuencia cardiaca y respiratoria, oxigenación, pH, sodio, potasio, creatinina, hematocrito, leucocitos y Glasgow), más puntos por edad y por salud crónica previa.', formula: 'Se usan los PEORES valores de las primeras 24 horas de ingreso. Suma de 0 a 71 puntos.', interpretacion: 'Predice mortalidad de POBLACIONES y sirve para ajustar por gravedad, comparar unidades y diseñar estudios. NO esta validada para decidir el techo terapéutico de un paciente concreto, y usarla así es un error frecuente y grave.' },
      { nombre: 'Criterios de ingreso y de alta de la unidad de críticos', componentes: 'Necesidad actual o previsible de soporte de órganos, reversibilidad del proceso, comorbilidad, situación funcional previa y voluntad del paciente.', formula: 'Modelo de prioridades: el beneficio esperado es mayor cuanto más reversible es el proceso y menos deteriorada esta la situación basal.', interpretacion: 'La pregunta correcta no es si el paciente esta grave sino si el ingreso en críticos va a CAMBIAR su desenlace. Esa pregunta obliga a conocer la situación funcional previa y las preferencias del paciente, que es lo que más se omite.' },
      { nombre: 'Escala de alerta precoz en planta', componentes: 'Constantes vitales registradas de forma seriada y un umbral que activa una respuesta.', formula: 'Puntuación por rangos de cada constante, con umbrales de respuesta escalonada.', interpretacion: 'Su valor no esta en el número sino en el SISTEMA que lo acompaña: si nadie acude cuando la puntuación sube, la escala no sirve de nada. El deterioro fisiológico precede en horas a la parada cardiaca, y la frecuencia respiratoria es el parámetro que antes se altera y el que peor se registra.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Síndrome de disfunción orgánica múltiple',
      color: '#5a4a8c',
      definicion: 'Alteración aguda y potencialmente reversible de la función de dos o más órganos en un paciente crítico, de tal magnitud que la homeostasis no puede mantenerse sin intervención.',
      fisiopatologia: 'Un insulto suficientemente intenso desencadena una respuesta inmunitaria DESREGULADA, con componentes proinflamatorio y antiinflamatorio simultáneos. Esa respuesta daña el glucocalix y el endotelio, aumenta la permeabilidad, produce edema intersticial y microtrombosis, y altera la MICROCIRCULACIÓN: el flujo global puede ser normal y el tejido seguir hipoperfundido, que es la razón por la que una tensión arterial correcta no garantiza perfusión. A nivel celular hay disfunción mitocondrial con descenso del consumo de oxígeno, y se ha propuesto que parte de esa disfunción es una ADAPTACIÓN metabólica, algo parecido a una hibernacion, lo que explicaría que los órganos se recuperen casi sin cicatriz en quienes sobreviven. Sobre ese terreno actúa el SEGUNDO GOLPE, con frecuencia iatrogénico.',
      epidemiologia: 'Es la principal causa de muerte en las unidades de cuidados intensivos. La mortalidad aumenta de forma escalonada con el número de órganos disfuncionantes y, sobre todo, con la PERSISTENCIA de la disfunción más allá de los primeros días. Muchos supervivientes quedan con secuelas físicas, cognitivas y afectivas prolongadas.',
      factores_riesgo: ['Edad avanzada', 'Comorbilidad y fragilidad previas', 'Gravedad del insulto inicial', 'Retraso en el control del foco', 'Retraso en el antibiótico en la sepsis', 'Sobrecarga de fluidos y balance positivo acumulado', 'Ventilación con volúmenes o presiones altos', 'Sedación profunda e inmovilidad prolongada', 'Transfusión no indicada', 'Fármacos nefrotóxicos evitables', 'Hiperglucemia mal controlada', 'Infección asociada a dispositivos'],
      clinica: 'Al principio, signos sutiles: TAQUIPNEA (el parámetro que antes se altera y el que peor se registra), taquicardia, tensión en el limite bajo para ese paciente, oliguria incipiente, inquietud, relleno capilar lento y piel moteada. Después, disfunción establecida de dos o más órganos con hipoxemia, hipotensión dependiente de vasoactivos, oliguria, alteración de la conciencia, ictericia y trombocitopenia.',
      criterios_dx: 'No hay un criterio dicotomico: es un continuo que se cuantifica con escalas, y en la práctica se define como una puntuación SOFA elevada o en ascenso en dos o más sistemas. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'LACTATO y su aclaramiento. Gasometría con PaO2 y FiO2. Creatinina y DIURESIS HORARIA, que se altera antes. Bilirrubina. Plaquetas y coagulación. Hemocultivos y cultivos del foco. Analítica general con balance hídrico acumulado bien registrado.',
      imagen: 'Radiografía de tórax comparada con la previa. ECOGRAFÍA CLÍNICA multiorgano a pie de cama, que orienta el tipo de choque y busca focos. Tomografía dirigida cuando el foco no aparece y el paciente no mejora.',
      complementarios: 'Calculo diario de la escala SOFA para seguir la TENDENCIA. Revisión diaria de la necesidad de cada catéter, sonda y drenaje. Registro del balance hídrico y del peso.',
      dx_diferencial: 'Descompensación de una insuficiencia orgánica CRÓNICA, que no es lo mismo y tiene otro pronóstico; intoxicación; síndrome neuroléptico maligno e hipertermia maligna; crisis suprarrenal; tormenta tiroidea; síndrome hemofagocitico, que se parece mucho y se pasa por alto; y síndrome de liberación de citocinas.',
      tx_medico: 'CONTROL DEL FOCO, que es lo único que detiene la cascada. Soporte de órganos con la menor agresividad posible. Reanimación guiada por objetivos y sin sobrecarga. Ventilación protectora. Sedación ligera y movilización precoz. Nutrición enteral cuando sea posible. Control de la glucemia y profilaxis de trombosis.',
      tx_farmacologico: 'Antimicrobiano precoz y dirigido, con desescalada en cuanto se pueda. Vasoactivos según el perfil hemodinámico. Y una regla general: revisar a diario la lista de fármacos para RETIRAR lo que ya no aporta, porque la polifarmacia del crítico es una fuente constante de segundos golpes.',
      tx_intervencionista: 'Drenaje quirúrgico o percutáneo del foco. Terapias de soporte extracorpóreo (depuración extrarrenal, oxigenación por membrana) cuando están indicadas y dentro de un plan realista.',
      criterios_uci: 'Necesidad actual o previsible de soporte de órganos en un proceso potencialmente reversible. La pregunta correcta no es si el paciente esta grave sino si el ingreso va a CAMBIAR su desenlace.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda. La infección activa y la disfunción multiorgánica son, de hecho, contraindicaciones temporales.',
      seguimiento_hospitalario: 'Calculo diario de la escala y valoración de la TENDENCIA. Revisión diaria de dispositivos, de fármacos y del balance. Y reevaluación del foco si el paciente no mejora como se espera, en lugar de asumir que es la evolución natural.',
      seguimiento_ambulatorio: 'Los supervivientes tienen secuelas físicas, cognitivas y afectivas prolongadas. Conviene un seguimiento estructurado tras el alta, que en la práctica casi nunca existe.',
      pronostico: 'Depende del número de órganos, de la persistencia de la disfunción y de la situación basal. Lo más modificable sigue siendo el control precoz del foco y la prevención de la iatrogenia.',
      algoritmo: ['Reconocer la fase precoz: taquipnea, oliguria, confusión, piel moteada', 'Medir el lactato y repetirlo para ver el aclaramiento', 'Buscar y CONTROLAR el foco sin demora', 'Reanimar con objetivos y sin sobrecargar de volumen', 'Calcular la escala SOFA y repetirla cada dia', 'Vigilar la TENDENCIA, no el valor aislado', 'Ventilar de forma protectora y sedar de forma ligera', 'Revisar a diario dispositivos y fármacos para retirar lo innecesario', 'Reevaluar el foco si no mejora', 'Abrir pronto la conversación sobre objetivos con el paciente y la familia']
    },
    {
      nombre: 'SOFA-2: la escala actualizada',
      color: '#8c3a34',
      definicion: 'Versión actualizada en 2025 de la escala de evaluación secuencial de disfunción orgánica, primera revisión en treinta años, desarrollada con un proceso Delphi y validada sobre millones de ingresos en unidades de críticos de nueve países.',
      fisiopatologia: 'La escala clásica se diseño con la práctica de los años noventa y por eso no capturaba los soportes actuales: la cánula nasal de alto flujo y la ventilación no invasiva no existian como estándar, los vasopresores se dosificaban alrededor de la dopamina, y la depuración extrarrenal se iniciaba más tarde. SOFA-2 no cambia el concepto sino su calibración: describe la misma disfunción con los umbrales y los tratamientos de hoy, lo que mejora su rendimiento en contextos muy distintos, incluidos los países de renta baja y media.',
      epidemiologia: 'El desarrollo se apoyo en más de dos millones de pacientes para la fase de construcción y validación interna, y en más de un millón adicional para la validación externa, procedentes de más de mil unidades. Es, con diferencia, el mayor esfuerzo de validación de una escala de disfunción orgánica.',
      factores_riesgo: ['Puntuar el Glasgow de un paciente sedado sin usar el valor previo', 'Olvidar el punto que suman los fármacos para el delirium', 'Puntuar 3 o 4 en respiratorio sin soporte ventilatorio avanzado', 'No contar la cánula de alto flujo ni la ventilación no invasiva como soporte avanzado', 'Sumar mal las dosis de noradrenalina y adrenalina', 'Ignorar el soporte mecánico circulatorio', 'No puntuar la depuración extrarrenal como 4 en el dominio renal', 'Usar los umbrales de plaquetas antiguos', 'Rellenar los datos faltantes con suposiciones en lugar de las reglas del score', 'Comparar puntuaciones de SOFA-1 y SOFA-2 como si fueran la misma escala'],
      clinica: 'No es un cuadro clínico sino un instrumento. Sus seis dominios son cerebro, respiratorio, cardiovascular, hígado, riñón y hemostasia, cada uno de 0 a 4, con un total de 0 a 24.',
      criterios_dx: 'Cada dominio tiene sus puntos de corte, detallados en la Figura 2 de Definición. El total es la suma de los MÁXIMOS de cada sistema dentro de un periodo de 24 horas.',
      laboratorio: 'Los mismos que la escala clásica: gasometría, bilirrubina, creatinina y plaquetas, más la diuresis. La novedad práctica es que no basta el laboratorio: hay que registrar también el SOPORTE que recibe el paciente, porque puntúa.',
      imagen: 'No aplica: la escala no incluye ningún dominio de imagen.',
      complementarios: 'Registro de las dosis exactas de vasoactivos, del tipo de soporte respiratorio y de si el paciente recibe o cumple criterios de depuración extrarrenal. Todo eso hay que anotarlo a diario para poder calcular la escala.',
      dx_diferencial: 'Frente a otras escalas: MODS y LODS describen también disfunción orgánica pero se usan poco; APACHE II y SAPS son de gravedad al INGRESO y no de seguimiento; y las escalas de alerta precoz sirven para cribar, no para definir disfunción.',
      tx_medico: 'No aplica: es una herramienta de medición. Su utilidad práctica es homogeneizar el lenguaje entre turnos y entre servicios, y permitir ver la tendencia.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'La escala describe la gravedad pero NO decide el ingreso por si sola. Esa decisión depende de la reversibilidad, de la situación basal y de la voluntad del paciente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Se calcula cada 24 horas. Lo que más informa es la TENDENCIA: una puntuación que desciende indica respuesta al tratamiento y una que asciende obliga a reevaluar el foco y el plan antes de asumir que es la evolución natural.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'La puntuación se correlaciona con la mortalidad de forma escalonada, y la evaluación SERIADA predice mejor que la del primer dia. Pero sigue siendo un instrumento poblacional: no predice el desenlace de un individuo.',
      algoritmo: ['Recoger los seis dominios con los PEORES valores de las últimas 24 horas', 'En el paciente sedado, usar el Glasgow previo a la sedación', 'Sumar un punto si recibe fármacos para el delirium', 'Comprobar si hay SOPORTE VENTILATORIO AVANZADO antes de puntuar 3 o 4', 'Sumar las dosis de noradrenalina y adrenalina y comparar con 0.2 y 0.4', 'Registrar cualquier otro vasoactivo y el soporte mecánico', 'Puntuar 4 en renal si recibe o cumple criterios de depuración', 'Usar los umbrales nuevos de plaquetas, hasta 50000', 'Puntuar 0 los datos que faltan el primer dia', 'Repetir cada dia y mirar la TENDENCIA']
    },
    {
      nombre: 'SOFA clásico y la definición de sepsis',
      color: '#3d5a73',
      definicion: 'Versión original de la escala, publicada en 1996, que sigue siendo la base sobre la que se construyo la definición actual de sepsis y la que aparece en la mayoría de los estudios y protocolos vigentes.',
      fisiopatologia: 'La escala nació para describir la disfunción orgánica de la sepsis y después se generalizo a todo el paciente crítico. Su lógica es sencilla y sigue siendo valida: seis órganos, cada uno con una variable objetiva y disponible, y una gradación de 0 a 4 que refleja el continuo entre la función normal y el fallo establecido. Esa simplicidad explica por que se impuso sobre alternativas más complejas y por que sigue en uso.',
      epidemiologia: 'Es la escala de disfunción orgánica más utilizada del mundo. La transición a SOFA-2 será gradual, y durante años convivira con la clásica en protocolos, historias electrónicas y publicaciones, de modo que hay que saber usar las dos y NO comparar puntuaciones entre ellas.',
      factores_riesgo: ['Asumir un basal de 0 sin comprobar si hay disfunción crónica', 'Confundir el valor absoluto con el incremento agudo', 'Aplicar los criterios sin sospecha de infección', 'Puntuar el Glasgow de un paciente sedado', 'Olvidar que el choque séptico exige lactato además de vasopresores', 'Usar los criterios de respuesta inflamatoria sistémica como definición de sepsis', 'No repetir la escala y quedarse con el valor del ingreso', 'Mezclar puntuaciones de la escala clásica y de SOFA-2', 'Calcularla sin diuresis horaria disponible', 'Interpretar una puntuación alta como indicación automática de limitar el esfuerzo'],
      clinica: 'La escala en si no tiene clínica. Lo que si tiene consecuencias clínicas es la definición que sostiene: SEPSIS es infección sospechada o documentada más un incremento AGUDO de 2 o más puntos de SOFA sobre el basal.',
      criterios_dx: 'CHOQUE SÉPTICO: sepsis más necesidad de vasopresores para mantener una tensión arterial media de 65 mmHg o más, más lactato por encima de 2 mmol/L, ambas cosas PESE a una reanimación con volumen adecuada. Ver la Figura 3 de Definición.',
      laboratorio: 'Los seis dominios de la escala, más el LACTATO, que no forma parte de SOFA pero si de la definición de choque séptico. Hemocultivos antes del antibiótico siempre que no lo retrasen.',
      imagen: 'La dirigida a localizar el foco. No forma parte de los criterios.',
      complementarios: 'Estimación del basal: si no se conoce disfunción previa, se asume 0. En un paciente con enfermedad renal o hepática crónica conocida, ignorar ese basal SOBREESTIMA la disfunción aguda.',
      dx_diferencial: 'Otras causas de disfunción orgánica aguda sin infección: pancreatitis, politraumatismo, quemadura, isquemia y reperfusión, síndrome hemofagocitico y toxicidad farmacológica. Todas producen puntuaciones altas sin ser sepsis.',
      tx_medico: 'El de la sepsis, que tiene su propio tema. Aquí interesa lo conceptual: la definición sirve para IDENTIFICAR, y una vez identificado el paciente lo que cambia el desenlace es el tratamiento precoz del foco y el soporte.',
      tx_farmacologico: 'Antimicrobiano precoz, reanimación con cristaloides y vasopresores según la respuesta. El detalle esta en el tema de sepsis.',
      tx_intervencionista: 'Control del foco, que sigue siendo lo determinante.',
      criterios_uci: 'El choque séptico es, por definición, un cuadro de cuidados críticos. La sepsis sin choque se valora caso a caso.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Repetir la escala a diario. Un incremento de 2 o más puntos en un paciente ya ingresado obliga a buscar una complicación nueva: un foco no controlado, una infección asociada a dispositivos o un evento vascular.',
      seguimiento_ambulatorio: 'No aplica directamente, salvo por el seguimiento de las secuelas.',
      pronostico: 'La evaluación SERIADA predice mejor que la puntuación inicial: un SOFA que desciende en las primeras 48 horas se asocia a mejor supervivencia, y uno que asciende, a lo contrario.',
      algoritmo: ['Comprobar que hay sospecha o documentación de INFECCIÓN', 'Estimar el basal, asumiendo 0 si no hay disfunción conocida', 'Calcular la escala SOFA actual', 'Comprobar si el incremento AGUDO es de 2 o más puntos', 'Si lo es, el paciente tiene SEPSIS', 'Comprobar si necesita vasopresores para una tensión media de 65', 'Comprobar si el lactato es mayor de 2 pese a la reanimación', 'Si ambas, el paciente tiene CHOQUE SÉPTICO', 'Iniciar el tratamiento sin esperar a completar los cálculos', 'Repetir la escala cada dia para seguir la tendencia']
    },
    {
      nombre: 'Cribado y detección precoz del deterioro',
      color: '#3f6b52',
      definicion: 'Conjunto de herramientas y sistemas que buscan identificar al paciente que se esta deteriorando ANTES de que la disfunción orgánica se establezca, sobre todo fuera de la unidad de críticos.',
      fisiopatologia: 'El deterioro fisiológico no es brusco: precede en HORAS a la parada cardiaca y a la necesidad de ingreso en críticos. En esa ventana las constantes vitales ya se han alterado, y de todas ellas la FRECUENCIA RESPIRATORIA es la que antes cambia, porque el aumento de la ventilación es la primera compensación tanto de la hipoxemia como de la acidosis metabólica. La paradoja es que es también el parámetro peor medido y peor registrado en planta, muchas veces anotado de memoria.',
      epidemiologia: 'Los sistemas de alerta precoz se han extendido por todo el mundo. La guía de sepsis de 2026 recomienda de forma FUERTE, con certeza moderada, usar NEWS, NEWS2, MEWS o SIRS por encima de qSOFA como herramienta única de cribado en el paciente hospitalizado, porque las escalas de alerta precoz han demostrado ser más sensibles.',
      factores_riesgo: ['Constantes tomadas de forma incompleta o anotadas de memoria', 'Frecuencia respiratoria no contada realmente', 'Puntuación registrada sin que nadie acuda', 'Ausencia de un equipo de respuesta rápida', 'Uso de qSOFA como cribado único', 'Fatiga de alarmas con demasiados falsos positivos', 'Turnos con poca dotacion', 'Barreras jerárquicas para escalar un aviso', 'Paciente con oxígeno crónico mal clasificado en la escala', 'Traslados y cambios de turno, que fragmentan la vigilancia'],
      clinica: 'Taquipnea, taquicardia, hipotensión relativa, descenso de la saturación, necesidad creciente de oxígeno, alteración del nivel de conciencia, oliguria y fiebre o hipotermia. Ninguno de estos signos es específico, y ese es justamente el motivo de sumarlos en una puntuación.',
      criterios_dx: 'NEWS2 suma de 0 a 20 con siete parámetros. qSOFA es positivo con 2 o más de sus tres criterios. Ver la Figura 3 de Definición.',
      laboratorio: 'Ninguno es necesario para cribar, y esa es su ventaja: se hace con constantes de cabecera. El laboratorio viene después, cuando la puntuación obliga a valorar al paciente.',
      imagen: 'No aplica al cribado.',
      complementarios: 'Un sistema de RESPUESTA asociado a la puntuación: quien acude, en cuanto tiempo y con que autoridad para actuar. Sin eso, la escala solo genera papel.',
      dx_diferencial: 'Una puntuación elevada no significa sepsis: puede ser dolor, ansiedad, deprivación alcohólica, tromboembolia, hemorragia, arritmia o descompensación de una enfermedad crónica. La escala detecta DETERIORO, no diagnóstica.',
      tx_medico: 'Valoración clínica inmediata y proporcional a la puntuación, con revisión de la via aérea, la respiración, la circulación y el nivel de conciencia. Y una decisión explícita sobre el nivel de cuidados y sobre los objetivos de tratamiento.',
      tx_farmacologico: 'El que corresponda a la causa. Si hay sospecha de sepsis, hemocultivos y antibiótico precoz sin esperar a completar el estudio.',
      tx_intervencionista: 'La que exija la causa identificada.',
      criterios_uci: 'Una puntuación alta y sostenida pese al tratamiento, o un deterioro rápido, obligan a valorar el traslado. Avisar tarde a críticos es uno de los factores modificables más consistentes.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Aumentar la frecuencia de las constantes en cuanto la puntuación sube, y dejar por escrito el plan y el umbral de reaviso. Una puntuación que no baja tras la intervención es una indicación de escalar, no de repetir la misma medida.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'El impacto de estos sistemas depende mucho más de la RESPUESTA organizativa que del calculo. Una escala sin equipo que acuda no mejora nada.',
      algoritmo: ['Tomar las constantes completas, contando de verdad la frecuencia respiratoria', 'Calcular NEWS2 o la escala que use el centro', 'No usar qSOFA como herramienta única de cribado', 'Ante puntuación elevada, valorar al paciente de inmediato', 'Buscar la causa: infección, hemorragia, arritmia, tromboembolia o fármacos', 'Si hay sospecha de sepsis, hemocultivos y antibiótico precoz', 'Aumentar la frecuencia de vigilancia y dejar un umbral de reaviso', 'Escalar si la puntuación no baja con el tratamiento', 'Avisar a críticos antes de que el paciente claudique', 'Dejar por escrito el nivel de cuidados acordado']
    },
    {
      nombre: 'APACHE II y las escalas de gravedad al ingreso',
      color: '#8a6a1f',
      definicion: 'Sistemas de clasificación de la gravedad que estiman la mortalidad esperada de un grupo de pacientes a partir de los datos de las primeras horas de ingreso en una unidad de críticos.',
      fisiopatologia: 'La lógica es distinta a la de SOFA: en lugar de describir el estado de cada órgano a lo largo del tiempo, estas escalas capturan la magnitud del desarreglo fisiológico en el momento del ingreso y la corrigen por la reserva del paciente, es decir por la edad y por la enfermedad crónica previa. De ahi sale una probabilidad esperada de muerte que permite comparar poblaciones, ajustar los resultados de un estudio y auditar una unidad.',
      epidemiologia: 'APACHE II se publico en 1985 y sigue siendo el más citado, pese a existir versiones posteriores y otras familias de escalas. Su uso principal hoy es la investigación y la comparación entre centros, no la decisión clínica individual.',
      factores_riesgo: ['Usar la escala para decidir el techo terapéutico de un paciente', 'Calcularla con datos incompletos', 'Recoger valores que no son los peores de las primeras 24 horas', 'Olvidar los puntos por edad y por salud crónica', 'Aplicarla fuera del contexto para el que se valido', 'Repetirla como si fuera dinámica', 'Comparar puntuaciones entre escalas distintas', 'Usarla en poblaciones muy diferentes a las de su desarrollo', 'Interpretar la probabilidad poblacional como individual', 'Comunicarla a la familia como si fuera el pronóstico del paciente'],
      clinica: 'No es un cuadro clínico. Sus componentes son doce variables fisiológicas (temperatura, tensión arterial media, frecuencia cardiaca y respiratoria, oxigenación, pH, sodio, potasio, creatinina, hematocrito, leucocitos y Glasgow), más puntos por EDAD y por SALUD CRÓNICA previa.',
      criterios_dx: 'Se calcula con los PEORES valores de las primeras 24 horas de ingreso. La suma va de 0 a 71 puntos.',
      laboratorio: 'Gasometría, ionograma, creatinina, hematocrito y leucocitos. Todo del primer dia.',
      imagen: 'No forma parte de la escala.',
      complementarios: 'Registro estructurado de las variables. En la práctica, la mayoría de las unidades lo calculan de forma automática desde la historia electrónica, lo que reduce el error pero no elimina la necesidad de saber que mide.',
      dx_diferencial: 'Frente a SOFA: APACHE II es una FOTO del ingreso y no se repite; SOFA es una PELICULA que se calcula cada dia. Confundir sus usos es el error conceptual más frecuente de este apartado.',
      tx_medico: 'No aplica: es un instrumento de medida.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'La escala describe la gravedad de quien YA esta ingresado en críticos; no es un criterio de ingreso ni de alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No se repite. Para el seguimiento diario se usa SOFA.',
      seguimiento_ambulatorio: 'No aplica.',
      pronostico: 'Estima la mortalidad esperada de POBLACIONES. Su uso legitimo es ajustar por gravedad y comparar; usarla para decidir sobre un paciente concreto o para comunicar un pronóstico individual a la familia es un error grave y frecuente.',
      algoritmo: ['Recoger los PEORES valores de las primeras 24 horas', 'Puntuar las doce variables fisiológicas', 'Añadir los puntos por EDAD', 'Añadir los puntos por SALUD CRÓNICA previa', 'Sumar el total, de 0 a 71', 'Interpretarlo como gravedad al ingreso, no como pronóstico individual', 'No repetirlo: para el seguimiento diario, usar SOFA', 'No usarlo para decidir el techo terapéutico', 'No comunicarlo a la familia como probabilidad de ese paciente', 'Usarlo para ajustar por gravedad y comparar resultados']
    },
    {
      nombre: 'Manejo integral y decisiones de adecuación',
      color: '#7a3f2e',
      definicion: 'Estrategia de tratamiento del paciente con falla orgánica múltiple, basada en tratar la causa, sostener los órganos con la menor agresividad posible y decidir de forma explícita hasta donde se llega.',
      fisiopatologia: 'No existe un tratamiento del síndrome en si: todos los ensayos de moduladores de la respuesta inflamatoria han fracasado. Lo que si funciona es actuar sobre los dos extremos de la cascada: eliminar el ESTÍMULO (control del foco) y evitar que el soporte se convierta en un SEGUNDO GOLPE. De ahi que casi todas las intervenciones que han demostrado beneficio en el paciente crítico sean, en realidad, formas de hacer menos daño: volúmenes corrientes bajos, menos fluidos, menos sedación, menos transfusión, menos días de catéter.',
      epidemiologia: 'La mortalidad de las unidades de críticos ha bajado en las últimas décadas sin que haya aparecido ningún fármaco específico, lo que apoya que la mejora viene de la organizacion, de la prevención de la iatrogenia y del control precoz del foco.',
      factores_riesgo: ['Foco no controlado o controlado tarde', 'Balance hídrico positivo acumulado', 'Ventilación con volúmenes o presiones altos', 'Sedación profunda prolongada', 'Inmovilidad', 'Transfusión sin indicación', 'Nefrotóxicos evitables', 'Dispositivos mantenidos más de lo necesario', 'Ausencia de objetivos de tratamiento definidos', 'Conversación sobre adecuación pospuesta hasta que el paciente ya no puede participar'],
      clinica: 'La valoración diaria se organiza por sistemas y con una pregunta por cada uno: que soporte necesita hoy, cuanto se puede reducir y que hay que retirar. Esa revisión sistemática es lo que evita que el soporte se perpetue por inercia.',
      criterios_dx: 'No aplica: es la fase de manejo.',
      laboratorio: 'El mínimo necesario. Las analíticas diarias no justificadas producen anemia iatrogénica y hallazgos irrelevantes que generan más pruebas.',
      imagen: 'Dirigida y con una pregunta concreta. La radiografía diaria de rutina no ha demostrado beneficio y se ha ido abandonando.',
      complementarios: 'Escala SOFA diaria. Revisión estructurada de dispositivos, fármacos, nutrición, movilización y profilaxis. Y un registro explícito del NIVEL DE CUIDADOS acordado, que debe estar en la historia y no solo en la cabeza del equipo.',
      dx_diferencial: 'Ante el paciente que no mejora: foco no controlado, infección nosocomial nueva, evento vascular, efecto adverso farmacológico, insuficiencia suprarrenal relativa, síndrome hemofagocitico y, con frecuencia, simplemente un tiempo de recuperación más largo del esperado.',
      tx_medico: 'CONTROL DEL FOCO. Ventilación protectora. Reanimación con objetivos y después balance negativo. Sedación ligera con valoración diaria, movilización precoz y prevención del delirium. Nutrición enteral precoz cuando sea posible. Profilaxis de trombosis y de úlcera de estrés cuando este indicada. Control razonable de la glucemia.',
      tx_farmacologico: 'Antimicrobiano precoz y DESESCALADO en cuanto el cultivo lo permita. Vasoactivos según el perfil. Y revisión diaria de la lista de fármacos para retirar lo que ya no aporta.',
      tx_intervencionista: 'Drenaje o cirugía del foco. Soporte extracorpóreo cuando esta indicado. Traqueostomía y gastrostomía dentro de un plan realista y acordado.',
      criterios_uci: 'La pregunta correcta no es si el paciente esta grave sino si el ingreso o la continuidad en críticos van a CAMBIAR su desenlace. Esa pregunta exige conocer la situación funcional previa, la reversibilidad del proceso y las preferencias del paciente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Revisión diaria por sistemas con objetivos escritos. Reuniones periódicas con la familia, no solo cuando hay malas noticias. Y una decisión explícita, revisada y anotada sobre el nivel de esfuerzo terapéutico.',
      seguimiento_ambulatorio: 'Seguimiento estructurado de las secuelas físicas, cognitivas y afectivas de los supervivientes, que existe en muy pocos sitios y que los pacientes agradecen enormemente.',
      pronostico: 'Mejora con el control precoz del foco, con la prevención de la iatrogenia y con una organizacion que permita detectar pronto al que empeora. Ningún fármaco ha demostrado modificar el síndrome por sí mismo.',
      algoritmo: ['Controlar el FOCO cuanto antes', 'Revisar cada dia, sistema por sistema, que soporte se puede reducir', 'Ventilar de forma protectora', 'Pasar de reanimar a despejar: buscar el balance negativo cuando toque', 'Sedar de forma ligera y movilizar pronto', 'Nutrir por via enteral cuando sea posible', 'Retirar dispositivos y fármacos innecesarios', 'Calcular la escala SOFA y mirar la tendencia', 'Definir por escrito el nivel de cuidados acordado', 'Hablar con el paciente y la familia PRONTO, no solo al final']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este tema es el marco del resto del bloque: aquí están el concepto, las escalas y el método. El detalle de cada órgano vive en su propio tema. Y hay un mensaje que atraviesa todo: no existe tratamiento del síndrome, existe tratamiento de la causa y soporte que no dañe.',
    parametros: ['Reconocer la fase precoz: taquipnea, oliguria, confusión y piel moteada', 'Contar de verdad la frecuencia respiratoria, que es lo que antes se altera', 'Cribar con NEWS2, MEWS o SIRS, no con qSOFA como herramienta única', 'Calcular la escala SOFA cada dia y mirar la TENDENCIA', 'En el paciente sedado, usar el Glasgow previo a la sedación', 'Recordar que sin soporte ventilatorio avanzado el máximo respiratorio son 2 puntos', 'Controlar el FOCO cuanto antes', 'Evitar el segundo golpe: menos volumen, menos sedación, menos transfusión', 'Revisar a diario cada dispositivo y cada fármaco', 'No usar APACHE II para decidir sobre un paciente concreto', 'Reevaluar el foco si el paciente no mejora', 'Definir y anotar el nivel de cuidados acordado'],
    criterios_uci_general: 'Necesidad actual o previsible de soporte de uno o más órganos en un proceso potencialmente reversible: insuficiencia respiratoria que precisa ventilación, inestabilidad que precisa vasoactivos, alteración de la conciencia con riesgo para la via aérea, lesión renal aguda con criterios de depuración y trastornos metabólicos graves. La pregunta que ordena la decisión no es cuan grave esta el paciente, sino si el ingreso en críticos va a CAMBIAR su desenlace, y eso obliga a conocer la situación funcional previa y la voluntad del paciente.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica en la fase aguda. La disfunción multiorgánica y la infección activa son contraindicaciones temporales para el trasplante de órgano sólido.',
    prevencion: 'Primaria: tratamiento precoz y correcto del proceso que puede desencadenarla, sobre todo la sepsis, y control del foco sin demora. Secundaria: sistemas de alerta precoz con un equipo que acuda de verdad, y prevención activa de la iatrogenia, que es el segundo golpe más frecuente: ventilación protectora, evitar la sobrecarga de fluidos, sedación ligera con interrupción diaria, movilización precoz, transfusión restrictiva, retirada temprana de catéteres y sondas, profilaxis de trombosis y revisión diaria de nefrotóxicos. Terciaria: rehabilitación precoz durante el ingreso y seguimiento estructurado de las secuelas físicas, cognitivas y afectivas de los supervivientes, que hoy es la parte más descuidada de todo el proceso.'
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
  'Síndrome de disfunción orgánica múltiple': { definicion: [10, 12, 13, 15], criterios_dx: [10, 12, 13, 15], laboratorio: [10, 12, 13, 15], tx_farmacologico: [10, 12, 13, 15] },
  'SOFA-2: la escala actualizada': { definicion: [1, 9], criterios_dx: [1, 9], laboratorio: [1, 9] },
  'SOFA clásico y la definición de sepsis': { definicion: [3, 4, 5, 8], criterios_dx: [3, 4, 5, 8], laboratorio: [3, 4, 5, 8], tx_farmacologico: [3, 4, 5, 8] },
  'Cribado y detección precoz del deterioro': { definicion: [2, 7], criterios_dx: [2, 7], laboratorio: [2, 7], tx_farmacologico: [2, 7] },
  'APACHE II y las escalas de gravedad al ingreso': { definicion: [6], criterios_dx: [6], laboratorio: [6] },
  'Manejo integral y decisiones de adecuación': { definicion: [2, 11, 14, 16], criterios_dx: [2, 11, 14, 16], laboratorio: [2, 11, 14, 16], tx_farmacologico: [2, 11, 14, 16] }
};
export const estigmasTitulo = 'Signos y datos que hay que saber leer';
export const estigmas = [
  { s: 'Taquipnea', p: 'Lo primero que se altera', photo: null, desc: 'Es el signo más precoz del deterioro y el peor registrado de todos: se anota de memoria con más frecuencia de la que se cuenta. Un aumento de la frecuencia respiratoria precede en horas al colapso y es el parámetro que más pesa en las escalas de alerta.' },
  { s: 'Piel moteada y relleno capilar lento', p: 'Hipoperfusión periférica', photo: null, desc: 'Signos de cabecera, gratuitos y con valor pronóstico demostrado. Persisten cuando la tensión arterial ya se ha normalizado, lo que recuerda que la macrocirculacion y la microcirculación no van de la mano.' },
  { s: 'Tensión arterial normal con lactato alto', p: 'No hay perfusión', photo: null, desc: 'La alteración de la microcirculación explica que el tejido siga hipoperfundido con un flujo global correcto. Por eso el objetivo de la reanimación no es un número de tensión sino signos de perfusión y aclaramiento del lactato.' },
  { s: 'Lactato que no baja', p: 'Peor que un lactato alto', photo: null, desc: 'El valor pronóstico esta en el ACLARAMIENTO, no en la cifra inicial. Un lactato que no desciende con la reanimación obliga a replantear el foco, el volumen y el soporte, no a repetir la misma medida.' },
  { s: 'Oliguria antes que creatinina alta', p: 'La diuresis avisa antes', photo: null, desc: 'La creatinina necesita días para reflejar la caída del filtrado. Vigilar solo la creatinina retrasa el diagnóstico de lesión renal aguda, y por eso la diuresis horaria puntúa en las escalas de disfunción.' },
  { s: 'Trombocitopenia precoz', p: 'Marcador de gravedad', photo: null, desc: 'Muy frecuente y de aparición temprana en el paciente crítico. Su descenso mantenido se asocia a peor pronóstico, y si se acompaña de consumo de fibrinógeno hay que valorar coagulación intravascular diseminada.' },
  { s: 'Balance hídrico positivo acumulado', p: 'Dato pronóstico', photo: null, desc: 'Se asocia de forma consistente a peor evolución, sobre todo pulmonar y renal. Se mide sin aparatos, no cuesta nada y es de los datos peor recogidos en la historia del paciente crítico.' },
  { s: 'Glasgow en el paciente sedado', p: 'Usar el previo', photo: null, desc: 'La escala SOFA puntúa el último Glasgow ANTERIOR a la sedación, y si no se conoce se puntúa 0. Puntuar el Glasgow bajo un sedante infla la escala y hace incomparables las mediciones entre días.' },
  { s: 'Fármacos para el delirium', p: 'Puntuan en SOFA-2', photo: null, desc: 'Es una de las novedades de la versión de 2025: recibir tratamiento farmacológico para el delirium suma un punto en el dominio cerebral aunque el Glasgow sea 15. Reconoce que el delirium es disfunción orgánica.' },
  { s: 'Alto flujo o ventilación no invasiva', p: 'Cuentan como soporte avanzado', photo: null, desc: 'En SOFA-2, la cánula nasal de alto flujo, la presión positiva continua y la ventilación no invasiva cuentan como soporte ventilatorio avanzado. Sin ese soporte, el dominio respiratorio no puede pasar de 2 puntos.' },
  { s: 'Un SOFA que sube', p: 'Peor que un SOFA alto', photo: null, desc: 'La evaluación seriada predice mejor que la del primer dia. Un incremento en un paciente ya ingresado obliga a buscar una complicación nueva antes de asumir que es la evolución natural del proceso.' },
  { s: 'qSOFA positivo', p: 'Alerta, pero no criba', photo: null, desc: 'La guía de sepsis de 2026 recomienda de forma fuerte usar NEWS, NEWS2, MEWS o SIRS por encima de qSOFA como herramienta única de cribado, porque su sensibilidad es baja. Un qSOFA positivo si debe hacer pensar en sepsis.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Escala SOFA y SOFA-2 (calculadora disponible)': [1, 4],
  'Criterios de Sepsis-3': [3, 5],
  'Cribado con NEWS2 y qSOFA (calculadora disponible)': [2, 7],
  'APACHE II (calculadora disponible)': [6],
  'Criterios de ingreso y de alta de la unidad de críticos': [16],
  'Escala de alerta precoz en planta': [7, 2]
};
export const escalaCalc = {
  'Escala SOFA y SOFA-2 (calculadora disponible)': 'sofa',
  'Cribado con NEWS2 y qSOFA (calculadora disponible)': 'cribado-deterioro',
  'APACHE II (calculadora disponible)': 'apache-ii'
};
export const compGroups = [
  { name: 'El síndrome', items: ['Síndrome de disfunción orgánica múltiple'] },
  { name: 'Medir la disfunción', items: ['SOFA-2: la escala actualizada', 'SOFA clásico y la definición de sepsis'] },
  { name: 'Detectar y pronosticar', items: ['Cribado y detección precoz del deterioro', 'APACHE II y las escalas de gravedad al ingreso'] },
  { name: 'Tratar y decidir', items: ['Manejo integral y decisiones de adecuación'] }
];
export const complicacionesIntro = 'La primera ficha es el concepto: que es la disfunción orgánica múltiple, como se llega hasta ella y por que es reversible. Las dos siguientes son las escalas que la miden: SOFA-2, actualizada en 2025 tras treinta años, y la versión clásica, que sigue siendo la que sostiene la definición de sepsis y con la que hay que saber convivir. Las dos siguientes responden a preguntas distintas de la anterior: cribar al que se esta deteriorando en planta, y estimar la gravedad al ingreso, con la advertencia de que esa última escala predice poblaciones y no personas. Y la última es el manejo, donde casi todo lo que ha demostrado funcionar consiste, en el fondo, en hacer menos daño.';
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
  root: { title: 'PACIENTE CRÍTICO CON DISFUNCIÓN DE ÓRGANOS', color: '#5a4a8c', target: 'definicion' },
  branches: [
    { title: 'COMO SE LLEGA', sub: 'Insulto, respuesta, microcirculación', color: '#5a4a8c', target: 'complicaciones', leaves: [
      { title: 'Respuesta desregulada', sub: 'Inflama y a la vez inmunodeprime', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Microcirculacion', sub: 'Tensión normal no es perfusión', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Es REVERSIBLE', sub: 'Los órganos se recuperan', color: '#3f6b52', target: 'complicaciones' },
      { title: 'El segundo golpe', sub: 'Casi siempre iatrogénico', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'COMO SE MIDE', sub: 'Tres preguntas, tres escalas', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Cribar', sub: 'NEWS2, no qSOFA solo', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Definir', sub: 'SOFA: 2 puntos es sepsis', color: '#3d5a73', target: 'clasificacion' },
      { title: 'SOFA-2', sub: 'Actualizada en 2025', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pronosticar', sub: 'APACHE II: poblaciones', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'QUE SE HACE', sub: 'Causa, soporte y decisiones', color: '#7a3f2e', target: 'complicaciones', leaves: [
      { title: 'Controlar el foco', sub: 'Lo único que detiene todo', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hacer menos daño', sub: 'Menos volumen y sedación', color: '#3f6b52', target: 'seguimiento' },
      { title: 'Mirar la tendencia', sub: 'No el valor aislado', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Definir hasta donde', sub: 'Pronto, no al final', color: '#6b4a8c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 6, 7], imagen: [11, 2] };
export const clasificacionCite = [1, 3, 6, 7];
export const seguimientoCite = [2, 14, 16];
