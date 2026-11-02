// topics/insuficiencia-respiratoria-sdra/content.js: Insuficiencia respiratoria aguda y SDRA.
// Cubre el item "Insuficiencia respiratoria aguda y SDRA" del cluster Insuficiencia respiratoria
// y ventilacion (bloque III, Neumologia) del temario. Cuarto de los cinco temas troncales de
// Neumologia.
//
// DELIMITACION FRENTE A `ventilacion-mecanica`: aquel tema es la TECNICA (modos, curvas, via
// aerea, sedoanalgesia, destete, VILI, asincronias) y ya trae las calculadoras de peso predicho,
// presion de distension, PaO2/FiO2 de Berlin, ROX, RSBI y poder mecanico. Este tema es el
// SINDROME: por que un paciente se hipoxemia, como se distinguen los cinco mecanismos con el
// gradiente alveolo-arterial, cuando escalar el soporte, y la SDRA como enfermedad. Las cuatro
// calculadoras de aqui (gradiente A-a, escalada de oxigeno, hipercapnia aguda o cronica y
// criterios de oxigenacion extracorporea) no repiten ninguna de aquellas.
//
// Fuentes principales: definicion de Berlin (2012) y nueva definicion global de la SDRA (2024);
// guias ESICM 2023 y ATS 2024; ensayos ARDSNet, PROSEVA, EOLIA, FLORALI, FACTT, ACURASYS, ROSE y
// DEXA-ARDS; indice ROX; guia ERS/ATS de ventilacion no invasiva; y los trabajos de Herridge
// sobre secuelas a largo plazo.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (hipoxemica, hipercapnica) + 6 fichas. 4 calculadoras, 3 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'insuficiencia-respiratoria-sdra',
  titulo: 'Insuficiencia Respiratoria y SDRA',
  subtitulo: 'Módulo 51 · Medicina Interna',
  accent: '#8a3f5c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const mecanismosHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a3f5c;border-radius:8px;padding:5px 9px;background:#8a3f5c12;margin-bottom:6px;">
    <strong style="color:#8a3f5c;">Dos preguntas separan los cinco mecanismos de la hipoxemia.</strong> <span style="color:var(--ink-dim);">Primero: <strong>esta alto el gradiente alveolo-arterial?</strong> Segundo: <strong>mejora la PaO2 al dar oxígeno?</strong> Con esas dos respuestas y la PaCO2 se llega al mecanismo sin ninguna prueba más.</span>
  </div>

  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;font-weight:700;color:var(--ink-dim);padding:0 4px 3px;border-bottom:1px solid var(--line);">
    <div>Mecanismo</div><div style="text-align:center;">Gradiente</div><div style="text-align:center;">Responde<br>al O2</div><div>Ejemplo típico y clave</div>
  </div>

  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#3d5a73;">1. HIPOVENTILACIÓN</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Normal</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);">Sobredosis de opioides, enfermedad neuromuscular, obesidad con hipoventilación. Es el único con la <strong style="color:var(--ink);">PaCO2 alta y el gradiente NORMAL</strong>: el pulmón esta sano y el problema es que no se mueve aire.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#8a6a1f;">2. DESEQUILIBRIO<br>ventilación-perfusión</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">Alto</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);"><strong style="color:var(--ink);">El más frecuente con mucha diferencia</strong>: EPOC, asma, neumonía, embolia pulmonar, atelectasia. Zonas mal ventiladas siguen perfundidas. Basta con subir la fracción inspirada para corregirlo.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#8c3a34;">3. CORTOCIRCUITO<br>(shunt)</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">Alto</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">NO</div>
    <div style="color:var(--ink-dim);">SDRA, edema pulmonar, atelectasia completa, consolidación masiva, cortocircuito intracardiaco. La sangre pasa por alvéolos <strong style="color:var(--ink);">sin ventilar ninguno</strong>, de modo que el oxígeno no la alcanza. <strong style="color:#8c3a34;">La hipoxemia que no mejora con oxígeno es cortocircuito hasta que se demuestre lo contrario</strong>: hay que abrir alvéolos (PEEP, prono), no subir la fracción inspirada.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#5b4a86;">4. ALTERACIÓN DE<br>LA DIFUSIÓN</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">Alto</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);">Enfermedad intersticial, enfisema, neumonía por Pneumocystis. Rara vez causa hipoxemia importante en reposo, pero se hace evidente <strong style="color:var(--ink);">con el ejercicio</strong>, cuando el tiempo de tránsito del hematie por el capilar se acorta.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;">
    <div style="font-weight:700;color:#2e6b7a;">5. PRESIÓN INSPIRADA<br>DE O2 BAJA</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Normal</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);">Altitud e inhalacion de gases inertes. Gradiente normal con <strong style="color:var(--ink);">PaCO2 baja o normal</strong>, al revés que la hipoventilación. Es el mecanismo que se olvida en el examen y el único que no es una enfermedad del paciente.</div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Como se calcula (calculadora disponible).</strong> Presión alveolar de oxígeno = fracción inspirada por (presión barometrica menos 47) menos PaCO2 dividida entre 0.8. A nivel del mar respirando aire: <strong>PAO2 = 0.21 x (760 menos 47) menos PaCO2/0.8</strong>, aproximadamente 150 menos 1.25 por la PaCO2. El gradiente es esa cifra menos la PaO2 medida. <strong>Lo normal sube con la edad</strong>: alrededor de la edad dividida entre 4 más 4, de modo que un gradiente de 22 es normal a los 70 años y patológico a los 25.
  </div>
</div>`;

const escaladaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. OXÍGENO<br>convencional</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Gafas nasales hasta 6 L/min, mascarilla de <strong style="color:var(--ink);">Venturi</strong> cuando hace falta fijar la fracción inspirada (el obstructivo con riesgo de hipercapnia), y mascarilla con reservorio en la hipoxemia grave transitoria. Objetivo: <strong>saturación del 92 al 96%</strong> en general y del <strong>88 al 92%</strong> en el paciente con riesgo de hipercapnia.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. CÁNULA DE<br>ALTO FLUJO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Es el soporte de elección en la insuficiencia respiratoria <strong style="color:var(--ink);">hipoxémica pura</strong>. Aporta fracción inspirada fiable, lava el espacio muerto de la via aérea superior, calienta y humidifica, y da algo de presión positiva. Se vigila con el <strong>índice ROX</strong> (saturación entre fracción inspirada, dividido por la frecuencia respiratoria): <strong style="color:#3f6b52;">4.88 o más</strong> a las 2, 6 y 12 horas predice éxito; por debajo, fracaso.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">3. VENTILACIÓN<br>NO INVASIVA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:#3f6b52;">Donde funciona muy bien</strong>: exacerbación de EPOC con pH de 7.35 o menor, y edema agudo de pulmón cardiogénico. Ahi reduce intubación y mortalidad, y la evidencia es de las mejores de la medicina respiratoria. <strong style="color:#8c3a34;">Donde es peligrosa</strong>: en la hipoxemia pura de novo (neumonía, SDRA), donde la tasa de fracaso es alta y el retraso de la intubación empeora el pronóstico.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">4. INTUBACIÓN</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Parada respiratoria, incapacidad de proteger la via aérea, descenso del nivel de conciencia, inestabilidad hemodinámica, agotamiento con respiración paradójica, o <strong style="color:var(--ink);">falta de respuesta al soporte no invasivo</strong>. La decisión es clínica y no espera a un número: <strong>el error más caro de este tema es intubar tarde a un paciente que llevaba horas fracasando</strong>.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #5b4a86;border-radius:8px;background:#5b4a8610;color:var(--ink-dim);">
    <strong style="color:#5b4a86;">La trampa fisiológica del soporte no invasivo.</strong> Un paciente con hipoxemia grave y un estímulo respiratorio intenso genera presiones intratorácicas muy negativas y volúmenes corrientes enormes, que lesionan el pulmón exactamente igual que lo haría un ventilador mal ajustado. Es la <strong>lesión pulmonar autoinfligida</strong>: el paciente parece que "aguanta" porque satura, mientras se esta dañando el pulmón. Vigilar el <strong>volumen corriente espirado, la frecuencia respiratoria y el trabajo respiratorio</strong>, no solo la saturación, y poner un limite de tiempo explícito a la prueba de soporte no invasivo.
  </div>
</div>`;

const sdraHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #8a3f5c;border-radius:8px;padding:6px 8px;background:#8a3f5c08;">
      <div style="font-weight:700;color:#8a3f5c;text-align:center;margin-bottom:4px;">Definición de BERLÍN (2012)</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Tiempo</strong>: en la semana siguiente a un factor conocido o a síntomas nuevos.<br>
        <strong style="color:var(--ink);">Imagen</strong>: opacidades bilaterales no explicadas del todo por derrame, atelectasia o nódulos.<br>
        <strong style="color:var(--ink);">Origen</strong>: no explicado solo por fallo cardiaco o sobrecarga de volumen.<br>
        <strong style="color:var(--ink);">Oxigenación</strong> con PEEP de 5 o más: leve 200 a 300, moderada 100 a 200, grave 100 o menos.
      </div>
    </div>
    <div style="border:1px solid #2e6b7a;border-radius:8px;padding:6px 8px;background:#2e6b7a08;">
      <div style="font-weight:700;color:#2e6b7a;text-align:center;margin-bottom:4px;">Definición GLOBAL (2023)</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        Añade lo que Berlín dejaba fuera:<br>
        <strong style="color:var(--ink);">Paciente NO intubado</strong> con cánula de alto flujo a 30 L/min o más, o con CPAP o binivel con PEEP de 5 o más.<br>
        <strong style="color:var(--ink);">SpO2/FiO2 de 315 o menos</strong> (con saturación del 97% o menor) como alternativa a la PaO2/FiO2.<br>
        <strong style="color:var(--ink);">Ecografía pulmonar</strong> como imagen valida.<br>
        Y una categoría para <strong>entornos con recursos limitados</strong>, sin exigir PEEP.
      </div>
    </div>
  </div>

  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La SDRA no tiene tratamiento propio: se trata la causa y se evita hacer daño.</strong> <span style="color:var(--ink-dim);">Estas son las cinco medidas con impacto demostrado en mortalidad.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. VOLUMEN<br>CORRIENTE BAJO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">4 a 8 mL/kg de peso PREDICHO</strong> (que se calcula con la talla, no con el peso real) y presión meseta de 30 cmH2O o menos. Es la única medida que ha demostrado reducir la mortalidad de forma robusta, y la que más se incumple.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. PRESIÓN DE<br>DISTENSIÓN baja</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Meseta menos PEEP, objetivo <strong style="color:var(--ink);">menor de 15 cmH2O</strong>. Es la variable que mejor se correlaciona con la supervivencia, mejor que el volumen corriente o la meseta por separado, porque tiene en cuenta cuanto pulmón aireado queda.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3. DECÚBITO<br>PRONO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si la relación PaO2/FiO2 es <strong style="color:var(--ink);">menor de 150</strong>, sesiones de <strong>16 horas o más</strong> al dia. Redujo la mortalidad casi a la mitad en el ensayo PROSEVA. Homogeneiza la ventilación, recluta zonas dorsales y descarga el corazón derecho. Se infrautiliza por logística, no por falta de evidencia.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">4. BALANCE<br>CONSERVADOR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Una vez resuelto el choque, la estrategia restrictiva de fluidos <strong style="color:var(--ink);">acorta la ventilación y la estancia</strong>. No mejoro la mortalidad en el ensayo que la probo, pero es de las medidas más fáciles de aplicar y de las que menos cuestan.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">5. TRATAR LA<br>CAUSA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La SDRA es un síndrome, no una enfermedad: sepsis, neumonía, aspiración, pancreatitis, traumatismo, transfusión. <strong style="color:var(--ink);">Sin control del foco no hay estrategia ventilatoria que sirva</strong>, y buscar la causa es tan importante como ajustar el respirador.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Lo que NO funciona o esta en discusión.</strong> La ventilación oscilatoria de alta frecuencia <strong>aumento la mortalidad</strong> y esta desaconsejada. El óxido nítrico inhalado mejora la oxigenación sin mejorar la supervivencia y queda como rescate. El bloqueo neuromuscular, que parecio beneficioso en un ensayo temprano, no lo confirmo en otro posterior con sedación más ligera: se reserva a la SDRA grave con asincronía o presiones inasumibles. El corticoide tiene datos favorables pero heterogéneos y se individualiza. La oxigenación por membrana extracorpórea es rescate en centros expertos.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La insuficiencia respiratoria aguda es la incapacidad del aparato respiratorio para mantener el intercambio gaseoso, definida por una <strong>PaO2 menor de 60 mmHg</strong> respirando aire ambiente (tipo 1 o hipoxémica) o una <strong>PaCO2 mayor de 45 mmHg con pH menor de 7.35</strong> (tipo 2 o hipercápnica). La distinción no es académica: cambia el mecanismo, el soporte que se elige y el pronóstico.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que se hipoxemia un paciente: cinco mecanismos y dos preguntas.</strong></p>
<p style="margin:0 0 12px;">Esta es la parte del tema que más rendimiento da y la que más se pasa por alto. Toda hipoxemia se explica por uno de cinco mecanismos, y para separarlos bastan dos preguntas: <strong>esta alto el gradiente alveolo-arterial de oxígeno?</strong> y <strong>mejora la PaO2 al dar oxígeno?</strong>. Con esas dos respuestas y la PaCO2 se llega al mecanismo sin ninguna prueba adicional, y de ahi sale directamente la conducta: si la hipoxemia <strong>no responde al oxígeno</strong>, hay cortocircuito y lo que hace falta es <strong>abrir alvéolos</strong> (presión positiva teleespiratoria, decúbito prono), no subir la fracción inspirada.</p>
${figBlock('Figura 1', 'Los cinco mecanismos de hipoxemia: gradiente y respuesta al oxígeno', mecanismosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La otra mitad: la hipercapnia.</strong></p>
<p style="margin:0 0 12px;">La PaCO2 depende de la producción de dióxido de carbono y de la <strong>ventilación alveolar</strong>, que es el volumen minuto menos el espacio muerto. Sube por tres motivos: porque el paciente <strong>no quiere respirar</strong> (opioides, sedantes, lesión del tronco), porque <strong>no puede</strong> (enfermedad neuromuscular, cifoescoliosis, obesidad extrema, agotamiento del músculo respiratorio) o porque <strong>el espacio muerto es enorme</strong> (EPOC avanzada, embolia pulmonar). Antes de decidir nada hay que responder a una pregunta clave: <strong>es aguda o crónica?</strong> El pH y el bicarbonato lo dicen, porque el riñón tarda días en compensar: en la hipercapnia aguda el pH cae unas 0.08 unidades por cada 10 mmHg de ascenso de la PaCO2, y en la crónica solo unas 0.03.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se escala el soporte, y donde se equivoca uno.</strong></p>
<p style="margin:0 0 12px;">El soporte se escala de las gafas nasales a la intubación, pero el escalón intermedio no es intercambiable: la <strong>ventilación no invasiva</strong> es excelente en la exacerbación de EPOC con acidosis y en el edema agudo de pulmón, y arriesgada en la hipoxemia pura de novo; la <strong>cánula de alto flujo</strong> es al revés. Y por encima de la elección del dispositivo esta el error que más cuesta: <strong>retrasar la intubación</strong> de un paciente que lleva horas fracasando con soporte no invasivo, mientras se autolesiona el pulmón con esfuerzos respiratorios enormes.</p>
${figBlock('Figura 2', 'Escalada del soporte respiratorio y donde falla cada escalón', escaladaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La SDRA.</strong></p>
<p style="margin:0 0 12px;">El síndrome de dificultad respiratoria aguda es una lesión alveolar difusa e inflamatoria, desencadenada por una agresion pulmonar directa (neumonía, aspiración, contusión, inhalacion) o indirecta (sepsis, pancreatitis, politransfusión, traumatismo). El endotelio y el epitelio alveolar pierden su barrera, el alveolo se llena de un edema rico en proteínas y el surfactante se inactiva: el resultado es un pulmón <strong>pequeño, rígido y heterogéneo</strong>, con zonas colapsadas junto a zonas normales. De ahi nacen las dos ideas que gobiernan su tratamiento: el pulmón disponible es mucho menor de lo que sugiere el tamaño del paciente (el llamado pulmón de bebe), y por eso el volumen corriente se calcula con el <strong>peso predicho por la talla</strong> y nunca con el peso real.</p>
${figBlock('Figura 3', 'SDRA: las dos definiciones y las cinco medidas que cambian la mortalidad', sdraHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La enfermedad no termina en la extubación.</strong></p>
<p style="margin:0 0 12px;">Los supervivientes de una SDRA arrastran durante años debilidad muscular, limitación funcional, deterioro cognitivo, ansiedad, depresión y estrés postraumático: es el <strong>síndrome post-cuidados intensivos</strong>. A los 5 años, la limitación dominante no suele ser la función pulmonar, que se recupera bastante, sino la <strong>debilidad y el deterioro neuropsicologico</strong>. Reducir sedación, movilizar precozmente y acompañar a la familia forman parte del tratamiento tanto como el respirador.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No subir la fracción inspirada de oxígeno indefinidamente ante una hipoxemia que no responde: eso es cortocircuito y hay que abrir alvéolos. No usar ventilación no invasiva como sustituto de la intubación en la hipoxemia grave de novo. No juzgar el soporte no invasivo solo por la saturación, ignorando el volumen corriente y el trabajo respiratorio. No calcular el volumen corriente con el peso real. No dejar la meseta por encima de 30 cmH2O ni la presión de distensión por encima de 15. No olvidar el decúbito prono cuando la PaO2/FiO2 baja de 150. Y no usar ventilación oscilatoria de alta frecuencia, que aumento la mortalidad.</p>`;

export const bibliografia = [
  'ARDS Definition Task Force; Ranieri VM, Rubenfeld GD, Thompson BT, et al. Acute respiratory distress syndrome: the Berlin definition. JAMA. 2012;307(23):2526-2533.',
  'Matthay MA, Arabi YM, Arroliga AC, et al. A new global definition of acute respiratory distress syndrome. Am J Respir Crit Care Med. 2024;209(1):37-47.',
  'Grasselli G, Calfee CS, Camporota L, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med. 2023;49(7):727-759.',
  'Qadir N, Sahetya S, Munshi L, et al. An update on management of adult patients with acute respiratory distress syndrome: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2024;209(1):24-36.',
  'Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med. 2000;342(18):1301-1308.',
  'Guerin C, Reignier J, Richard JC, et al. Prone positioning in severe acute respiratory distress syndrome. N Engl J Med. 2013;368(23):2159-2168.',
  'Amato MB, Meade MO, Slutsky AS, et al. Driving pressure and survival in the acute respiratory distress syndrome. N Engl J Med. 2015;372(8):747-755.',
  'Combes A, Hajage D, Capellier G, et al. Extracorporeal membrane oxygenation for severe acute respiratory distress syndrome. N Engl J Med. 2018;378(21):1965-1975.',
  'Frat JP, Thille AW, Mercat A, et al. High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure. N Engl J Med. 2015;372(23):2185-2196.',
  'Roca O, Caralt B, Messika J, et al. An index combining respiratory rate and oxygenation to predict outcome of nasal high-flow therapy. Am J Respir Crit Care Med. 2019;199(11):1368-1376.',
  'Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426.',
  'Brochard L, Slutsky A, Pesenti A. Mechanical ventilation to minimize progression of lung injury in acute respiratory failure. Am J Respir Crit Care Med. 2017;195(4):438-442.',
  'National Heart, Lung, and Blood Institute ARDS Clinical Trials Network. Comparison of two fluid-management strategies in acute lung injury. N Engl J Med. 2006;354(24):2564-2575.',
  'Papazian L, Forel JM, Gacouin A, et al. Neuromuscular blockers in early acute respiratory distress syndrome. N Engl J Med. 2010;363(12):1107-1116.',
  'National Heart, Lung, and Blood Institute PETAL Clinical Trials Network. Early neuromuscular blockade in the acute respiratory distress syndrome. N Engl J Med. 2019;380(21):1997-2008.',
  'Villar J, Ferrando C, Martinez D, et al. Dexamethasone treatment for the acute respiratory distress syndrome: a multicentre, randomised controlled trial. Lancet Respir Med. 2020;8(3):267-276.',
  'Herridge MS, Tansey CM, Matte A, et al. Functional disability 5 years after acute respiratory distress syndrome. N Engl J Med. 2011;364(14):1293-1304.',
  'Needham DM, Davidson J, Cohen H, et al. Improving long-term outcomes after discharge from intensive care unit: report from a stakeholders conference. Crit Care Med. 2012;40(2):502-509.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Insuficiencia respiratoria hipoxémica (tipo 1)',
      tituloB: 'Insuficiencia respiratoria hipercápnica (tipo 2)',
      compensada: 'Disnea, taquipnea, taquicardia, ansiedad e inquietud, uso de musculatura accesoria y cianosis central cuando la hipoxemia es marcada. La confusión y la agitación son manifestaciones neurológicas de la hipoxemia y se confunden a menudo con un cuadro psiquiátrico o con un delirium. PaO2 menor de 60 mmHg con PaCO2 normal o baja por la hiperventilación compensadora. La ausencia de cianosis NO descarta la hipoxemia grave, porque requiere al menos 5 g/dL de hemoglobina reducida y puede faltar en el anémico.',
      descompensada: 'Somnolencia, cefalea (sobre todo matutina), temblor, ASTERIXIS, sudoración, hipertensión y, en fases avanzadas, coma por narcosis de dióxido de carbono. PaCO2 mayor de 45 mmHg con pH menor de 7.35 si es aguda. La respiración PARADÓJICA ABDOMINAL (el abdomen se hunde en la inspiración) indica fatiga diafragmática y es un signo de fracaso ventilatorio inminente que obliga a asegurar la via aérea sin esperar más gasometrías.'
    },
    laboratorio: [
      { prueba: 'Gasometría arterial (calculadoras disponibles)', utilidad: 'La prueba central del tema. Define el tipo (PaO2 menor de 60, PaCO2 mayor de 45), permite calcular el gradiente alveolo-arterial y la relación PaO2/FiO2, y el pH separa la hipercapnia aguda de la crónica compensada. La pulsioximetría no la sustituye porque no informa de la PaCO2 ni del pH.' },
      { prueba: 'Bicarbonato y exceso de bases', utilidad: 'La huella temporal de la hipercapnia: un bicarbonato claramente elevado indica compensación renal y por tanto cronicidad de al menos varios días. En la hipercapnia aguda pura el bicarbonato sube poco, alrededor de 1 mmol/L por cada 10 mmHg de PaCO2, frente a 3.5 a 4 en la crónica.' },
      { prueba: 'Lactato', utilidad: 'Marcador de hipoperfusión y de metabolismo anaerobio. Su elevación en un paciente hipoxemico apunta a que el aporte de oxígeno a los tejidos ya no es suficiente, y obliga a valorar el gasto cardiaco y la hemoglobina además de la oxigenación.' },
      { prueba: 'Hemograma y bioquímica', utilidad: 'La anemia empeora el transporte de oxígeno aunque la saturación sea normal, y la poliglobulia sugiere hipoxemia crónica. Función renal y hepática para valorar la disfunción orgánica acompañante y ajustar fármacos.' },
      { prueba: 'Péptido natriurético y troponina', utilidad: 'Ayudan a separar el edema pulmonar cardiogénico de la SDRA, que es el diagnóstico diferencial más frecuente y más difícil. Un valor bajo hace muy improbable el origen cardiaco, pero uno alto no lo confirma en el paciente crítico.' },
      { prueba: 'Dímero D y estudio de trombofilia si procede', utilidad: 'La embolia pulmonar es una causa de hipoxemia con gradiente alto que responde al oxígeno y que puede pasar desapercibida en el paciente ya diagnosticado de otra cosa. En la SDRA sin causa clara es un diagnóstico que hay que descartar activamente.' },
      { prueba: 'Estudio microbiológico dirigido', utilidad: 'Hemocultivos, cultivo de secreciones respiratorias, antígenos urinarios y panel viral según el contexto: la causa más frecuente de SDRA es infecciosa, y sin control del foco ninguna estrategia ventilatoria funciona.' },
      { prueba: 'Carboxihemoglobina y metahemoglobina', utilidad: 'Ante inhalacion de humo, exposición a monóxido de carbono o cianosis con PaO2 normal. La pulsioximetría convencional NO las detecta y puede mostrar saturaciones falsamente normales, un error clásico en el paciente rescatado de un incendio.' }
    ],
    no_invasivos: [
      { metodo: 'Gradiente alveolo-arterial de oxígeno (calculadora disponible)', interpretacion: 'Separa la hipoventilación y la altitud (gradiente normal) del resto de mecanismos (gradiente alto). El valor normal sube con la edad, aproximadamente la edad dividida entre 4 más 4, de modo que compararlo con un único número fijo produce errores en los dos sentidos.', cutoff: 'Normal respirando aire: por debajo de la edad entre 4 más 4' },
      { metodo: 'Respuesta al oxígeno suplementario', interpretacion: 'La prueba más informativa y la que menos aparato requiere. Si la PaO2 no mejora al subir la fracción inspirada, hay CORTOCIRCUITO y la conducta es reclutar alvéolos, no dar más oxígeno.', cutoff: 'Sin umbral formal; la falta de respuesta a fracciones altas orienta a un cortocircuito superior al 30%' },
      { metodo: 'Relación PaO2/FiO2 y SpO2/FiO2', interpretacion: 'Clasifica la gravedad de la SDRA. La definición global de 2023 acepta la relación SpO2/FiO2 cuando la saturación es del 97% o menor, lo que permite clasificar sin gasometría arterial y en entornos con menos recursos.', cutoff: 'PaO2/FiO2: leve 200 a 300, moderada 100 a 200, grave 100 o menos. SpO2/FiO2 de 315 o menos' },
      { metodo: 'Índice ROX en la cánula de alto flujo', interpretacion: 'Saturación dividida entre la fracción inspirada, y ese cociente dividido entre la frecuencia respiratoria. Predice el éxito del alto flujo y ayuda a decidir la intubación antes de que el paciente se agote.', cutoff: '4.88 o más a las 2, 6 y 12 horas: éxito probable. Por debajo, riesgo de fracaso' },
      { metodo: 'Escala de esfuerzo y volumen corriente espirado', interpretacion: 'En el paciente con soporte no invasivo, un volumen corriente espirado alto (por encima de 9 a 10 mL/kg de peso predicho) con frecuencia respiratoria elevada indica esfuerzos intensos y riesgo de lesión pulmonar autoinfligida, aunque la saturación sea aceptable.', cutoff: 'Volumen corriente mayor de 9 mL/kg de peso predicho o frecuencia mayor de 30 mantenida' },
      { metodo: 'Ecografía pulmonar y ecocardiografía a pie de cama', interpretacion: 'La ecografía pulmonar distingue el patrón intersticial difuso, la consolidación, el derrame y el neumotórax, y es imagen valida para la definición global de SDRA. La ecocardiografía valora el ventrículo derecho y separa el edema cardiogénico.', cutoff: 'Sin umbral; el patrón y la función ventricular orientan el diagnóstico' },
      { metodo: 'Capnografia y presiones respiratorias máximas', interpretacion: 'La capnografia vigila la ventilación en tiempo real y confirma la posición del tubo. Las presiones inspiratoria y espiratoria máximas cuantifican la fuerza del músculo respiratorio y son clave en la insuficiencia ventilatoria neuromuscular.', cutoff: 'Presión inspiratoria máxima menos negativa de -30 cmH2O o capacidad vital menor de 20 mL/kg: riesgo de fracaso ventilatorio' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Primera prueba: opacidades bilaterales en la SDRA, consolidación focal en la neumonía, redistribución y líneas B en el edema cardiogénico, hiperinsuflación en el obstructivo, y neumotórax o derrame como causas rápidamente corregibles. Una radiografía limpia con hipoxemia grave orienta a embolia pulmonar o a cortocircuito intracardiaco.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'Muestra la heterogeneidad típica de la SDRA, con densidades dependientes de la gravedad y zonas aireadas junto a zonas colapsadas. Es lo que dio origen al concepto de pulmón de bebe. Útil para descartar causas alternativas y complicaciones como el neumotórax o el neumomediastino.' },
      { modalidad: 'Angiotomografia pulmonar', hallazgos: 'Ante hipoxemia con radiografía poco alterada, deterioro brusco o factores de riesgo trombótico. La embolia pulmonar es una causa tratable que se pasa por alto con frecuencia en el paciente ya etiquetado de otra cosa.' },
      { modalidad: 'Ecografía pulmonar', hallazgos: 'Líneas B difusas y bilaterales en el edema y en la SDRA, consolidación con broncograma en la neumonía, ausencia de deslizamiento pleural en el neumotórax. Se hace a pie de cama, sin trasladar al paciente, y es imagen valida para la definición global de SDRA.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La insuficiencia respiratoria se clasifica primero por su <strong>alteración gasometrica</strong> (tipo 1 hipoxémica y tipo 2 hipercápnica), después por su <strong>curso temporal</strong> (aguda, crónica y crónica agudizada, que el pH y el bicarbonato permiten separar), y por el <strong>mecanismo fisiopatológico</strong>, que es la clasificación que más cambia la conducta. La SDRA tiene además su propia clasificación de gravedad, hoy con dos versiones vigentes: la <strong>definición de Berlín</strong> de 2012 y la <strong>definición global</strong> de 2023, que amplia el síndrome al paciente no intubado y admite la relación SpO2/FiO2 y la ecografía.`,
    escalas: [
      { nombre: 'Clasificación por tipo gasometrico', componentes: 'PaO2, PaCO2 y pH en gasometría arterial.', formula: 'Tipo 1: PaO2 menor de 60 mmHg con PaCO2 normal o baja. Tipo 2: PaCO2 mayor de 45 mmHg con pH menor de 7.35.', interpretacion: 'Determina el soporte: la hipoxemia pura se beneficia sobre todo de la cánula de alto flujo, y la hipercapnia con acidosis de la ventilación no invasiva. Muchos pacientes son mixtos y evolucionan de uno a otro tipo cuando se agotan.' },
      { nombre: 'Gradiente alveolo-arterial de oxígeno (calculadora disponible)', componentes: 'Fracción inspirada de oxígeno, presión barometrica, PaCO2 y PaO2 medida.', formula: 'PAO2 = FiO2 x (presión barometrica menos 47) menos PaCO2/0.8. Gradiente = PAO2 menos PaO2. Normal aproximado: edad entre 4 más 4.', interpretacion: 'Con la respuesta al oxígeno, identifica el mecanismo: gradiente normal en la hipoventilación y en la altitud; alto y con respuesta al oxígeno en el desequilibrio ventilación-perfusión y en la alteración de la difusión; alto y SIN respuesta en el cortocircuito.' },
      { nombre: 'Hipercapnia aguda frente a crónica (calculadora disponible)', componentes: 'PaCO2, pH y bicarbonato.', formula: 'Aguda: el pH baja unas 0.08 unidades y el bicarbonato sube alrededor de 1 mmol/L por cada 10 mmHg de ascenso de la PaCO2. Crónica: el pH baja unas 0.03 y el bicarbonato sube de 3.5 a 4.', interpretacion: 'Es la distinción que evita dos errores opuestos: tratar como aguda una hipercapnia crónica bien compensada, y dar por crónica una descompensación que necesita ventilación. Un componente agudo sobre una hipercapnia crónica se reconoce por el pH bajo con bicarbonato ya elevado.' },
      { nombre: 'Definición de Berlín de la SDRA', componentes: 'Tiempo (una semana), imagen bilateral, origen no explicado solo por fallo cardiaco, y oxigenación con PEEP de 5 o más.', formula: 'Leve: PaO2/FiO2 de 200 a 300. Moderada: de 100 a 200. Grave: 100 o menos.', interpretacion: 'Guía la escalada terapéutica: prono si la relación es menor de 150, y valoración de oxigenación extracorpórea en la forma grave refractaria. Su limitación es que exige PEEP y por tanto deja fuera al paciente no intubado.' },
      { nombre: 'Definición global de la SDRA (2023)', componentes: 'Los mismos criterios de Berlín, ampliados al paciente con cánula de alto flujo a 30 L/min o más o con CPAP o binivel con PEEP de 5 o más, con la relación SpO2/FiO2 como alternativa y la ecografía pulmonar como imagen valida.', formula: 'SpO2/FiO2 de 315 o menos, con saturación del 97% o menor para evitar el techo de la curva de la hemoglobina.', interpretacion: 'Reconoce como SDRA cuadros que Berlín no clasificaba, permite el diagnóstico sin gasometría arterial y añade una categoría para entornos con recursos limitados. Convive con la de Berlín, que sigue siendo la referencia en la mayoría de los ensayos.' },
      { nombre: 'Índice ROX', componentes: 'Saturación de oxígeno, fracción inspirada y frecuencia respiratoria, en el paciente con cánula nasal de alto flujo.', formula: 'ROX = (SpO2 / FiO2) / frecuencia respiratoria.', interpretacion: '4.88 o más a las 2, 6 y 12 horas predice éxito del alto flujo. Valores decrecientes anuncian el fracaso y permiten intubar antes del agotamiento, que es justo lo que mejora el pronóstico.' },
      { nombre: 'Criterios de oxigenación por membrana extracorpórea (calculadora disponible)', componentes: 'PaO2/FiO2, pH, PaCO2 y tiempo de persistencia pese a ventilación optimizada con prono y bloqueo neuromuscular.', formula: 'PaO2/FiO2 menor de 50 durante más de 3 horas, o menor de 80 durante más de 6 horas, o pH menor de 7.25 con PaCO2 de 60 mmHg o más durante más de 6 horas.', interpretacion: 'Son los criterios del ensayo EOLIA. Antes de aplicarlos hay que haber optimizado de verdad la ventilación, incluido el decúbito prono: la mayoría de los pacientes que parecen candidatos mejoran al hacerlo. La derivación debe ser precoz y a un centro con experiencia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Insuficiencia respiratoria aguda hipoxémica',
      color: '#8a3f5c',
      definicion: 'Incapacidad aguda para mantener una oxigenación adecuada, con PaO2 menor de 60 mmHg respirando aire ambiente y PaCO2 normal o baja. Es el tipo 1 o fallo del intercambio.',
      fisiopatologia: 'Cinco mecanismos posibles: hipoventilación (con gradiente normal), desequilibrio ventilación-perfusión (el más frecuente), cortocircuito, alteración de la difusión y presión inspirada de oxígeno baja. El gradiente alveolo-arterial y la respuesta al oxígeno los separan. A ellos se suma un amplificador que se olvida: una saturación venosa mixta baja, por gasto cardiaco insuficiente o anemia, empeora cualquier hipoxemia porque la sangre que atraviesa las zonas mal ventiladas llega más desaturada. Ver la Figura 1 de Definición.',
      epidemiologia: 'Es el motivo más frecuente de ingreso urgente en cuidados intensivos. Las causas dominantes son la neumonía, el edema pulmonar cardiogénico, la SDRA, la embolia pulmonar y la agudizacion de la enfermedad respiratoria crónica.',
      factores_riesgo: ['Neumonía y otras infecciones respiratorias', 'Insuficiencia cardiaca y cardiopatía isquémica', 'Enfermedad pulmonar crónica de base', 'Sepsis de cualquier origen', 'Aspiración y alteración de la deglución', 'Traumatismo torácico y politraumatismo', 'Pancreatitis aguda grave', 'Transfusión masiva de hemoderivados', 'Inmunodepresion', 'Cirugía torácica o abdominal alta'],
      clinica: 'Disnea, taquipnea, taquicardia, uso de musculatura accesoria, ansiedad, inquietud, confusión y cianosis central si la hipoxemia es marcada. La agitación y la confusión son manifestaciones neurológicas de la hipoxemia y se confunden con delirium o con un cuadro psiquiátrico, un error con consecuencias si se responde con sedantes.',
      criterios_dx: 'Gasometría arterial con PaO2 menor de 60 mmHg respirando aire ambiente, o relación PaO2/FiO2 baja con oxígeno suplementario. La pulsioximetría orienta pero no basta: no informa de la PaCO2 ni del pH, y falla ante carboxihemoglobina, metahemoglobina, mala perfusión o pigmentación de la uña.',
      laboratorio: 'Gasometría arterial con calculo del gradiente alveolo-arterial. Hemograma, lactato, función renal, péptido natriurético y troponina. Dímero D si se sospecha embolia. Estudio microbiológico dirigido según el contexto.',
      imagen: 'Radiografía de tórax en todos. Ecografía pulmonar a pie de cama, rápida y muy útil para separar edema, consolidación, derrame y neumotórax. Angiotomografia si la radiografía es poco alterada o hay sospecha de embolia. Ecocardiografía para valorar el origen cardiaco.',
      complementarios: 'Prueba de respuesta al oxígeno, que orienta el mecanismo mejor que ninguna otra maniobra. Monitorización continua de saturación y frecuencia respiratoria, que es la constante que antes se altera y la que menos se registra.',
      dx_diferencial: 'Neumonía, edema pulmonar cardiogénico, SDRA, embolia pulmonar, exacerbación de EPOC o asma, neumotórax, derrame masivo, atelectasia, hemorragia alveolar, cortocircuito intracardiaco y síndrome hepatopulmonar.',
      tx_medico: 'Tratar la causa, que es lo que resuelve el cuadro. Oxigenoterapia con objetivo de saturación del 92 al 96% (del 88 al 92% si hay riesgo de hipercapnia), evitando tanto la hipoxemia como la hiperoxia, que también se asocia a peor evolución. Posición sentada, control del dolor y de la ansiedad sin sedar, y corrección de la anemia y del bajo gasto que amplifican la hipoxemia.',
      tx_farmacologico: 'El de la causa: antibiótico en la neumonía, diurético y vasodilatador en el edema cardiogénico, anticoagulación en la embolia, broncodilatadores en el obstructivo. No hay fármaco que trate la hipoxemia en si.',
      tx_intervencionista: 'Escalada del soporte: cánula nasal de alto flujo como opción preferente en la hipoxemia pura, ventilación no invasiva en escenarios seleccionados, e intubación sin demora si el paciente no responde. Drenaje del neumotórax o del derrame masivo cuando son la causa. Ver la Figura 2 de Definición.',
      criterios_uci: 'Necesidad de fracción inspirada alta para mantener una saturación aceptable, trabajo respiratorio importante, deterioro del nivel de conciencia, inestabilidad hemodinámica o necesidad de soporte no invasivo con vigilancia estrecha.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Reevaluación frecuente de saturación, frecuencia respiratoria y trabajo respiratorio. Gasometría de control tras cada cambio de soporte. Vigilar la evolución hacia el tipo 2 cuando el paciente se agota, que es el momento en el que hay que decidir la intubación.',
      seguimiento_ambulatorio: 'Seguimiento de la enfermedad causal y valoración de la función pulmonar residual. Rehabilitación respiratoria si la recuperación funcional es incompleta.',
      pronostico: 'Depende sobre todo de la causa y de la disfunción orgánica acompañante. El pronóstico empeora de forma clara cuando la intubación se retrasa en un paciente que ya estaba fracasando con soporte no invasivo.',
      algoritmo: ['Confirmar con gasometría: PaO2 menor de 60 mmHg o PaO2/FiO2 baja', 'Calcular el gradiente alveolo-arterial y compararlo con el esperado para la edad', 'Comprobar si la PaO2 mejora al subir la fracción inspirada', 'Si NO mejora: hay cortocircuito, abrir alvéolos en vez de dar más oxígeno', 'Radiografía y ecografía pulmonar para identificar la causa', 'Descartar de forma activa neumotórax, derrame masivo y embolia pulmonar', 'Objetivo de saturación del 92 al 96%, o del 88 al 92% si hay riesgo de hipercapnia', 'Tratar la causa: es lo único que resuelve el cuadro', 'Escalar el soporte y fijar un limite de tiempo explícito a cada escalón', 'Reevaluar el trabajo respiratorio, no solo la saturación']
    },
    {
      nombre: 'Insuficiencia respiratoria aguda hipercápnica',
      color: '#3d5a73',
      definicion: 'Fallo de la bomba ventilatoria con PaCO2 mayor de 45 mmHg y pH menor de 7.35. Es el tipo 2, y el problema no esta en el intercambio sino en el volumen de aire que se moviliza.',
      fisiopatologia: 'La PaCO2 depende de la producción de dióxido de carbono y de la ventilación alveolar, que es el volumen minuto menos el espacio muerto. Sube cuando el estímulo central falla (opioides, sedantes, lesión del tronco), cuando la bomba no puede (enfermedad neuromuscular, cifoescoliosis, obesidad extrema, fatiga del diafragma) o cuando el espacio muerto es enorme (EPOC avanzada, embolia pulmonar). La compensación renal tarda días, y ese retraso es lo que permite distinguir la forma aguda de la crónica mirando el pH y el bicarbonato.',
      epidemiologia: 'La causa más frecuente en el hospital es la exacerbación de la EPOC. Le siguen la sobredosis de sedantes y opioides, el síndrome de hipoventilación asociado a obesidad, las enfermedades neuromusculares y la fatiga del músculo respiratorio en cualquier cuadro prolongado.',
      factores_riesgo: ['EPOC avanzada y otras enfermedades obstructivas', 'Obesidad con hipoventilación y apnea del sueño', 'Enfermedad neuromuscular: esclerosis lateral amiotrófica, miastenia, Guillain-Barré', 'Cifoescoliosis y enfermedad restrictiva de la pared torácica', 'Opioides, benzodiacepinas y otros sedantes', 'Hipotiroidismo grave y alteraciones electrolíticas', 'Desnutrición y debilidad adquirida en cuidados intensivos', 'Ictus de tronco y lesión medular alta', 'Oxigenoterapia mal dosificada en el paciente con riesgo de hipercapnia', 'Cirugía abdominal alta o torácica reciente'],
      clinica: 'Somnolencia, cefalea sobre todo matutina, temblor, ASTERIXIS, sudoración, hipertensión, vasodilatación cutánea y, en fases avanzadas, coma. La respiración paradójica abdominal indica fatiga del diafragma y anuncia el fracaso ventilatorio. En la forma crónica el paciente puede estar prácticamente asintomático con cifras que en una forma aguda serían críticas.',
      criterios_dx: 'Gasometría arterial con PaCO2 mayor de 45 mmHg y pH menor de 7.35. La distinción entre aguda y crónica se hace con el pH y el bicarbonato, y es imprescindible antes de decidir el soporte y los objetivos de oxigenación.',
      laboratorio: 'Gasometría con bicarbonato y exceso de bases. Iones, función renal, tiroideas si hay sospecha, y niveles de fármacos o tocixologia si se sospecha sobredosis. Hemograma para valorar la poliglobulia de la hipoxemia crónica.',
      imagen: 'Radiografía de tórax para identificar la causa. Tomografía si se sospecha embolia o enfermedad estructural. Ecografía diafragmática para valorar la contractilidad del diafragma en la sospecha de disfunción o de parálisis.',
      complementarios: 'Presiones inspiratoria y espiratoria máximas y capacidad vital en la sospecha de causa neuromuscular, que son las que detectan el fracaso antes de que la gasometría se altere. Estudio de sueño cuando se sospecha hipoventilación nocturna.',
      dx_diferencial: 'Exacerbación de EPOC, sobredosis de sedantes u opioides, síndrome de hipoventilación por obesidad, crisis miastenica, síndrome de Guillain-Barré, hipotiroidismo grave, alcalosis metabólica con hipoventilación compensadora y lesión del sistema nervioso central.',
      tx_medico: 'Tratar la causa y retirar el desencadenante: revertir el opioide con naloxona si procede, corregir electrolitos, tratar la infección o el broncoespasmo. OXÍGENO CONTROLADO con objetivo del 88 al 92%: el exceso de oxígeno empeora la hipercapnia al abolir la vasoconstricción hipóxica y por el efecto Haldane. Evitar sedantes.',
      tx_farmacologico: 'El de la causa. En la exacerbación de EPOC, broncodilatadores, corticoide y antibiótico si procede. No existe un estimulante respiratorio con papel establecido en el manejo agudo, y la aminofilina no se recomienda.',
      tx_intervencionista: 'VENTILACIÓN NO INVASIVA como primera línea si el pH es 7.35 o menor con PaCO2 mayor de 45 mmHg: en la exacerbación de EPOC reduce intubación, estancia y mortalidad, con una de las mejores evidencias de la medicina respiratoria. Intubación si fracasa, si hay descenso del nivel de conciencia con incapacidad para proteger la via aérea, o si hay inestabilidad hemodinámica.',
      criterios_uci: 'pH menor de 7.25, deterioro pese a ventilación no invasiva, alteración del nivel de conciencia, inestabilidad hemodinámica o necesidad de intubación. El paciente con ventilación no invasiva por acidosis necesita un entorno con vigilancia estrecha y capacidad de intubar sin demora.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Gasometría de control 30 a 60 minutos después de iniciar el oxígeno o la ventilación no invasiva: la mejoría del pH en esa primera hora es el mejor predictor de éxito. Vigilar el nivel de conciencia y el trabajo respiratorio.',
      seguimiento_ambulatorio: 'Revaluar a las 2 a 4 semanas la hipercapnia residual, que es lo que decide la ventilación no invasiva domiciliaria, nunca con los valores del episodio agudo. Estudio de sueño si se sospecha hipoventilación nocturna, y revisión de sedantes.',
      pronostico: 'La hipercapnia persistente tras el alta identifica un grupo de alto riesgo, con mortalidad al año cercana al 40% si no se trata. La respuesta del pH en la primera hora de ventilación no invasiva es el mejor indicador precoz de evolución.',
      algoritmo: ['Gasometría: PaCO2 mayor de 45 mmHg con pH menor de 7.35', 'Determinar si es AGUDA o CRÓNICA con el pH y el bicarbonato', 'Buscar la causa: estímulo central, bomba o espacio muerto', 'Retirar sedantes y revertir opioides si procede', 'Oxígeno controlado con objetivo del 88 al 92%', 'Tratar la causa: broncodilatadores, corticoide, antibiótico o lo que corresponda', 'Si pH 7.35 o menor: ventilación no invasiva SIN demora', 'Gasometría de control en 30 a 60 minutos', 'Intubar si empeora, si baja el nivel de conciencia o si hay inestabilidad', 'Revaluar la hipercapnia a las 2 a 4 semanas del alta para la ventilación domiciliaria']
    },
    {
      nombre: 'Síndrome de dificultad respiratoria aguda',
      color: '#8c3a34',
      definicion: 'Lesión alveolar difusa inflamatoria de inicio agudo, con opacidades bilaterales e hipoxemia no explicada solo por fallo cardiaco o sobrecarga de volumen. Se clasifica en leve, moderada y grave por la oxigenación.',
      fisiopatologia: 'Una agresion directa (neumonía, aspiración, contusión, inhalacion) o indirecta (sepsis, pancreatitis, politransfusión, traumatismo) activa una cascada inflamatoria que rompe la barrera alveolo-capilar. El alveolo se llena de un edema rico en proteínas, el surfactante se inactiva y aparecen colapso y consolidación, sobre todo en las zonas dependientes. El pulmón resultante es pequeño, rígido y HETEROGÉNEO: quedan zonas normales junto a zonas colapsadas, de modo que un volumen corriente normal para el tamaño del paciente sobredistiende lo poco que queda aireado. De ahi el concepto de pulmón de bebe y la necesidad de calcular el volumen con el peso PREDICHO.',
      epidemiologia: 'Representa una proporción importante de los ingresos en cuidados intensivos con ventilación mecánica. La mortalidad global ronda el 35 al 45% y aumenta con la gravedad. Esta claramente infradiagnosticada: en estudios internacionales, una parte sustancial de los casos no se reconoce como tal a pie de cama, con lo que no se aplica la ventilación protectora.',
      factores_riesgo: ['Neumonía, que es la causa más frecuente', 'Sepsis de origen extrapulmonar', 'Aspiración de contenido gástrico', 'Politraumatismo y contusión pulmonar', 'Pancreatitis aguda grave', 'Transfusión masiva de hemoderivados', 'Inhalacion de humo o de tóxicos', 'Cirugía mayor, sobre todo torácica y cardiaca', 'Consumo de alcohol y tabaquismo, que aumentan la susceptibilidad', 'Casi ahogamiento y embolia grasa'],
      clinica: 'Disnea e hipoxemia progresivas en horas o días tras el factor desencadenante, con taquipnea, trabajo respiratorio intenso y crepitantes bilaterales. La hipoxemia responde mal al oxígeno porque el mecanismo dominante es el cortocircuito. La ausencia de signos de congestión sistémica ayuda a separarla del edema cardiogénico, aunque ambos coexisten con frecuencia.',
      criterios_dx: 'Definición de Berlín: inicio en la semana siguiente al factor conocido, opacidades bilaterales no explicadas del todo por derrame, atelectasia o nódulos, origen no explicado solo por fallo cardiaco o sobrecarga, e hipoxemia con PEEP de 5 o más. La definición global de 2023 añade al paciente con alto flujo a 30 L/min o más, la relación SpO2/FiO2 de 315 o menos y la ecografía pulmonar. Ver la Figura 3 de Definición.',
      laboratorio: 'Gasometría seriada con relación PaO2/FiO2. Péptido natriurético y troponina para valorar el componente cardiaco. Estudio microbiológico completo dirigido a la causa. Lactato y perfil de disfunción orgánica.',
      imagen: 'Radiografía con opacidades bilaterales. Tomografía que muestra la heterogeneidad característica, útil para descartar alternativas y complicaciones. Ecografía pulmonar con líneas B difusas y consolidaciones subpleurales, valida como imagen para la definición global. Ecocardiografía para excluir el origen cardiogénico y valorar el ventrículo derecho.',
      complementarios: 'Monitorización de mecánica respiratoria: presión meseta, presión de distensión y distensibilidad. Valoración diaria de la indicación de decúbito prono. Balance hídrico estricto una vez resuelto el choque.',
      dx_diferencial: 'Edema pulmonar cardiogénico (el diferencial más frecuente), neumonía bilateral extensa, hemorragia alveolar difusa, neumonía organizada aguda, neumonitis por hipersensibilidad aguda, toxicidad por fármacos, neumonía eosinofila aguda y exacerbación aguda de una enfermedad intersticial.',
      tx_medico: 'Tratar la CAUSA, que es la única intervención realmente curativa. Balance hídrico conservador una vez resuelto el choque, que acorta la ventilación y la estancia. Profilaxis antitrombótica, nutrición adecuada, prevención de la neumonía asociada a la ventilación y sedación ligera con movilización precoz.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico. El corticoide tiene datos favorables en algunos ensayos y heterogéneos en conjunto, y se individualiza. El óxido nítrico inhalado mejora la oxigenación sin mejorar la supervivencia y queda como rescate. El bloqueo neuromuscular se reserva a la forma grave con asincronía o presiones inasumibles.',
      tx_intervencionista: 'Ventilación protectora: volumen corriente de 4 a 8 mL/kg de peso PREDICHO, meseta de 30 cmH2O o menos y presión de distensión menor de 15. PEEP titulada, más alta en la forma moderada y grave. DECÚBITO PRONO 16 horas o más al dia si la relación PaO2/FiO2 es menor de 150. Oxigenación por membrana extracorpórea como rescate en centro experto. La ventilación oscilatoria de alta frecuencia esta DESACONSEJADA porque aumento la mortalidad.',
      criterios_uci: 'Todos los pacientes con SDRA requieren cuidados intensivos. La forma moderada y grave exige además capacidad de pronar y valoración precoz para derivación a un centro con oxigenación extracorpórea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional. La fibrosis residual grave que no se recupera puede plantear la valoración a largo plazo en pacientes seleccionados.',
      seguimiento_hospitalario: 'Revaluacion diaria de la mecánica respiratoria y de la indicación de prono. Vigilar el neumotórax y el neumomediastino, la disfunción del ventrículo derecho y la infección nosocomial. Interrumpir la sedación a diario y movilizar en cuanto sea posible.',
      seguimiento_ambulatorio: 'Valoración funcional respiratoria a los 3 y 6 meses, que suele recuperarse bastante. Cribado sistemático de debilidad, deterioro cognitivo, ansiedad, depresión y estrés postraumático, que son las secuelas dominantes a largo plazo. Rehabilitación multidisciplinar.',
      pronostico: 'Mortalidad global del 35 al 45%, mayor cuanto peor es la oxigenación y más órganos fallan. La causa de muerte suele ser la disfunción multiorgánica y no la hipoxemia refractaria. Los supervivientes recuperan función pulmonar razonable pero arrastran limitación física y neuropsicológica durante años.',
      algoritmo: ['Identificar el factor desencadenante y el inicio en menos de una semana', 'Confirmar opacidades bilaterales por radiografía, tomografía o ecografía', 'Descartar que el edema se explique solo por causa cardiaca o sobrecarga', 'Clasificar la gravedad con PaO2/FiO2 o con SpO2/FiO2', 'Iniciar ventilación protectora: 4 a 8 mL/kg de peso PREDICHO', 'Meseta de 30 cmH2O o menos y presión de distensión menor de 15', 'Titular la PEEP según la gravedad', 'Si la PaO2/FiO2 es menor de 150: decúbito prono 16 horas o más al dia', 'Balance conservador de fluidos una vez resuelto el choque', 'Tratar la causa y contactar pronto con un centro de oxigenación extracorpórea si es refractaria']
    },
    {
      nombre: 'SDRA grave y terapias de rescate',
      color: '#7a1f3d',
      definicion: 'SDRA con relación PaO2/FiO2 de 100 o menos pese a ventilación optimizada, o con hipercapnia y acidosis que no se corrigen sin abandonar la ventilación protectora. Es el escenario en el que entran las terapias de rescate.',
      fisiopatologia: 'Cuando el pulmón aireado se reduce mucho, mantener el intercambio exige presiones y volúmenes que lesionan lo que queda: ese es el círculo de la lesión inducida por el ventilador. Además, la hipoxemia, la hipercapnia y las presiones altas aumentan la resistencia vascular pulmonar y sobrecargan el ventrículo derecho, que puede claudicar y producir el llamado cor pulmonale agudo. Las terapias de rescate buscan romper ese círculo: el decúbito prono homogeneiza la ventilación y descarga el ventrículo derecho, y la oxigenación extracorpórea permite ventilar con presiones mínimas mientras el pulmón se recupera.',
      epidemiologia: 'La forma grave representa alrededor de la cuarta parte de los casos de SDRA y concentra la mortalidad. El decúbito prono es la única de las terapias de rescate con reducción de mortalidad demostrada de forma robusta, y sin embargo sigue infrautilizado por razones logísticas y de formación, no de evidencia.',
      factores_riesgo: ['SDRA de causa pulmonar directa extensa', 'Sepsis y disfunción multiorgánica acompañante', 'Sobrecarga de volumen mantenida', 'Ventilación con volumen corriente o presiones excesivas', 'Retraso en la intubación con esfuerzos respiratorios intensos previos', 'Obesidad, que dificulta la mecánica y el reclutamiento', 'Disfunción previa del ventrículo derecho', 'Neumotórax o barotrauma establecido', 'Inmunodepresion', 'Retraso en la indicación del decúbito prono'],
      clinica: 'Hipoxemia refractaria pese a fracción inspirada alta y PEEP elevada, con presiones de la via aérea altas y distensibilidad muy baja. Puede añadirse hipotensión por sobrecarga del ventrículo derecho, con ingurgitación yugular y signos ecocardiográficos de dilatación y de septo paradójico.',
      criterios_dx: 'PaO2/FiO2 de 100 o menos con PEEP de 5 o más. Para plantear la oxigenación extracorpórea se usan los criterios del ensayo EOLIA: relación menor de 50 durante más de 3 horas, menor de 80 durante más de 6 horas, o pH menor de 7.25 con PaCO2 de 60 mmHg o más durante más de 6 horas, siempre pese a ventilación optimizada.',
      laboratorio: 'Gasometrías seriadas. Lactato y marcadores de disfunción orgánica. Péptido natriurético y troponina como marcadores de sobrecarga del ventrículo derecho. Coagulación y hemograma seriados si se plantea circuito extracorpóreo.',
      imagen: 'Ecocardiografía repetida para vigilar el ventrículo derecho, que es lo que decide parte del manejo. Tomografía si se sospecha complicación o si hay que valorar el potencial de reclutamiento. Radiografía diaria para detectar neumotórax, que en este contexto puede ser mortal.',
      complementarios: 'Monitorización detallada de mecánica: meseta, presión de distensión, distensibilidad y, cuando se dispone, presión transpulmonar con catéter esofágico. Valoración de la respuesta al prono en cada sesión.',
      dx_diferencial: 'Antes de etiquetar de refractaria una SDRA hay que descartar causas corregibles del deterioro: neumotórax, obstrucción del tubo, atelectasia masiva, sobrecarga de volumen, embolia pulmonar, derrame significativo, asincronía grave y auto-PEEP.',
      tx_medico: 'Optimizar de verdad antes de escalar: comprobar la ventilación protectora, el balance hídrico, la sedación y la ausencia de causas corregibles. Es la parte del algoritmo que más se salta y la que más pacientes rescata sin ninguna terapia adicional.',
      tx_farmacologico: 'Bloqueo neuromuscular en las primeras 48 horas de la forma grave con asincronía o presiones inasumibles; el beneficio observado en un ensayo temprano no se confirmo en otro posterior con sedación más ligera, de modo que se usa de forma selectiva. Corticoide individualizado. Óxido nítrico inhalado o prostaciclina nebulizada como rescate transitorio de la oxigenación o de la sobrecarga derecha.',
      tx_intervencionista: 'DECÚBITO PRONO 16 horas o más al dia si la PaO2/FiO2 es menor de 150: es la medida de rescate con mejor evidencia y redujo la mortalidad de forma marcada. Maniobras de reclutamiento con prudencia, porque las agresivas se asociaron a daño. OXIGENACIÓN POR MEMBRANA EXTRACORPÓREA venovenosa en centro experto, con derivación PRECOZ: trasladar tarde a un paciente ya en fallo multiorgánico anula el beneficio.',
      criterios_uci: 'Por definición. Precisa una unidad con capacidad de pronar de forma segura, monitorización avanzada y contacto establecido con un centro de oxigenación extracorpórea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional y solo tras la fase aguda, en la fibrosis residual grave e irreversible de pacientes seleccionados.',
      seguimiento_hospitalario: 'Vigilancia estrecha de complicaciones del prono (úlceras por presión, edema facial, extubación accidental, pérdida de accesos) y del circuito extracorpóreo (sangrado, hemólisis, trombosis, infección). Revaluacion diaria de la posibilidad de desescalar.',
      seguimiento_ambulatorio: 'Seguimiento prolongado por la alta carga de secuelas físicas y neuropsicológicas de este grupo, que es el que peor lo pasa después.',
      pronostico: 'Mortalidad elevada, aunque mejor de lo que se asumia hace una década gracias al prono y a la ventilación protectora. La derivación precoz a un centro con oxigenación extracorpórea, antes del fallo multiorgánico, es uno de los factores modificables más importantes.',
      algoritmo: ['Confirmar que la ventilación protectora esta realmente aplicada', 'Descartar causas corregibles: neumotórax, tubo obstruido, atelectasia, sobrecarga', 'Optimizar sedación y balance hídrico', 'Si la PaO2/FiO2 es menor de 150: DECÚBITO PRONO 16 horas o más', 'Valorar bloqueo neuromuscular si hay asincronía o presiones inasumibles', 'Titular la PEEP y evitar maniobras de reclutamiento agresivas', 'Vigilar el ventrículo derecho con ecocardiografía', 'Aplicar los criterios EOLIA para valorar oxigenación extracorpórea', 'Contactar PRONTO con el centro de referencia, antes del fallo multiorgánico', 'No usar ventilación oscilatoria de alta frecuencia']
    },
    {
      nombre: 'Fracaso del soporte no invasivo y lesión autoinfligida',
      color: '#8a6a1f',
      definicion: 'Deterioro del paciente tratado con cánula de alto flujo o ventilación no invasiva, con retraso en la intubación y lesión pulmonar producida por los propios esfuerzos respiratorios del paciente, conocida como lesión pulmonar autoinfligida.',
      fisiopatologia: 'Un paciente hipoxemico con estímulo respiratorio intenso genera presiones pleurales muy negativas. Esas presiones producen volúmenes corrientes grandes, aumentan la presión transpulmonar y desplazan gas entre zonas del pulmón con distinta constante de tiempo, lo que lesiona el parénquima exactamente igual que un ventilador mal ajustado. El efecto se agrava porque la presión negativa aumenta el retorno venoso y la presión hidrostática capilar, favoreciendo más edema. Todo ello ocurre mientras la saturación puede parecer aceptable.',
      epidemiologia: 'El fracaso de la ventilación no invasiva en la insuficiencia respiratoria hipoxémica de novo es alto y se asocia de forma consistente a mayor mortalidad que la intubación inicial. La ventilación no invasiva mantenida más allá de unas horas sin mejoría clara es uno de los patrones de mal pronóstico más reconocibles.',
      factores_riesgo: ['Insuficiencia respiratoria hipoxémica de novo (neumonía, SDRA)', 'Volumen corriente espirado alto durante el soporte no invasivo', 'Frecuencia respiratoria mantenida por encima de 30', 'Índice ROX bajo o en descenso', 'Fracción inspirada alta necesaria para mantener la saturación', 'Disfunción orgánica acompañante', 'Ausencia de mejoría en las primeras 1 a 2 horas de soporte', 'Uso de ventilación no invasiva fuera de un entorno vigilado', 'Sedación para tolerar la interfase', 'Falta de un limite de tiempo explícito para reevaluar'],
      clinica: 'Persistencia o aumento del trabajo respiratorio pese al soporte, taquipnea mantenida, uso de musculatura accesoria, volumen corriente espirado alto, intolerancia a la interfase, agitación y, finalmente, deterioro del nivel de conciencia. La saturación puede mantenerse aceptable hasta poco antes del colapso.',
      criterios_dx: 'No hay un criterio único. Se reconoce por el conjunto: ausencia de mejoría del trabajo respiratorio y de la oxigenación en las primeras 1 a 2 horas, índice ROX bajo o descendente, volumen corriente espirado alto y frecuencia respiratoria mantenida. La saturación aislada NO sirve para juzgarlo.',
      laboratorio: 'Gasometrías seriadas para valorar la evolución del intercambio y la aparición de hipercapnia por agotamiento. Lactato como marcador de deterioro sistémico.',
      imagen: 'Radiografía o ecografía pulmonar seriada para valorar la progresión de los infiltrados y descartar complicaciones como el neumotórax o el neumomediastino, que aparecen precisamente en este contexto.',
      complementarios: 'Medida del volumen corriente espirado en los dispositivos que lo permiten, calculo del índice ROX de forma seriada, y valoración estructurada del trabajo respiratorio a pie de cama en lugar de mirar solo el monitor.',
      dx_diferencial: 'Progresión de la enfermedad de base, aparición de una complicación (neumotórax, embolia, sobreinfección), edema pulmonar sobreañadido y delirium con agitación, que puede confundirse con el aumento del trabajo respiratorio.',
      tx_medico: 'Fijar de entrada un LIMITE DE TIEMPO explícito para la prueba de soporte no invasivo y unos criterios objetivos de éxito. Optimizar la causa. Evitar la sedación para tolerar la mascarilla, que enmascara el deterioro. Vigilar en un entorno con capacidad de intubar sin demora.',
      tx_farmacologico: 'El de la causa. No hay fármaco que prevenga la lesión autoinfligida; lo que la limita es reducir el estímulo respiratorio tratando la causa y, cuando procede, asumiendo el control de la ventilación.',
      tx_intervencionista: 'INTUBACIÓN sin más demora cuando no hay mejoría clara en el plazo fijado, cuando el índice ROX es bajo o descendente, cuando el trabajo respiratorio se mantiene alto o cuando aparecen inestabilidad o deterioro de la conciencia. Una vez intubado, ventilación protectora desde el primer minuto.',
      criterios_uci: 'Todo paciente con soporte no invasivo por insuficiencia respiratoria aguda debe estar en un entorno con vigilancia continua y con posibilidad de intubación inmediata. Usarlo en planta convencional sin esas condiciones es una de las causas evitables de mala evolución.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación horaria las primeras horas con criterios objetivos: frecuencia respiratoria, trabajo respiratorio, volumen corriente, índice ROX y gasometría. Documentar la decisión y el plazo, para que el relevo sepa cuando actuar.',
      seguimiento_ambulatorio: 'Sin particularidades propias; el seguimiento es el de la enfermedad causal y el de las secuelas del ingreso.',
      pronostico: 'El retraso de la intubación en el paciente que ya estaba fracasando se asocia de forma consistente a mayor mortalidad. Es uno de los pocos factores completamente modificables del tema, y depende solo de la organizacion y de la decisión clínica.',
      algoritmo: ['Elegir el soporte según el tipo: alto flujo en la hipoxemia pura, ventilación no invasiva en la hipercapnia y en el edema', 'Fijar un LIMITE DE TIEMPO y criterios objetivos de éxito antes de empezar', 'Vigilar en un entorno con capacidad de intubar de inmediato', 'Reevaluar a la hora: trabajo respiratorio, frecuencia, volumen corriente e índice ROX', 'No juzgar la respuesta solo por la saturación', 'Evitar sedar para tolerar la interfase', 'Si el ROX es bajo o desciende, o el trabajo sigue alto: intubar', 'No repetir pruebas sucesivas de soporte no invasivo en un paciente que ya fracaso', 'Ventilación protectora desde el primer minuto tras la intubación', 'Documentar la decisión y el plazo para el equipo de guardia']
    },
    {
      nombre: 'Secuelas y síndrome post-cuidados intensivos',
      color: '#5b4a86',
      definicion: 'Conjunto de alteraciones físicas, cognitivas y psicológicas que persisten tras el alta de cuidados intensivos, y que en los supervivientes de una SDRA pueden durar años. Afecta también a las familias.',
      fisiopatologia: 'La inmovilidad, la inflamación sistémica, la hiperglucemia, los corticoides, los bloqueantes neuromusculares y la propia sepsis producen una miopatía y una polineuropatía del paciente crítico. La sedación profunda, el delirium, la privación de sueño y la hipoxemia contribuyen al deterioro cognitivo. Y la experiencia del ingreso, con recuerdos delirantes frecuentes, explica la ansiedad, la depresión y el estrés postraumático posteriores.',
      epidemiologia: 'Una proporción muy alta de los supervivientes presenta alguna de las tres dimensiones al año. En la cohorte clásica de supervivientes de SDRA seguida durante 5 años, la limitación dominante no fue la función pulmonar, que se recupero bastante, sino la debilidad muscular y la limitación en la distancia recorrida, junto con el deterioro psicológico.',
      factores_riesgo: ['Ventilación mecánica prolongada', 'Sedación profunda y delirium durante el ingreso', 'Inmovilidad y ausencia de rehabilitación precoz', 'Sepsis y disfunción multiorgánica', 'Hiperglucemia mantenida', 'Bloqueo neuromuscular y corticoide a dosis altas', 'Edad avanzada y fragilidad previa', 'Antecedentes de ansiedad o depresión', 'Bajo apoyo social', 'Estancia prolongada en cuidados intensivos'],
      clinica: 'Debilidad muscular proximal y simétrica con dificultad para caminar y subir escaleras, fatiga, disnea de esfuerzo, pérdida de peso, alteraciones de la memoria y de la atención, ansiedad, ánimo bajo, insomnio, pesadillas y recuerdos intrusivos. En la familia, ansiedad, depresión y duelo complicado.',
      criterios_dx: 'Clínico, mediante cribado estructurado en la revisión tras el alta. Sin buscarlo activamente se pasa por alto, porque el paciente atribuye los síntomas a "lo mal que lo paso" y el médico se centra en la función pulmonar.',
      laboratorio: 'Creatincinasa y estudio metabólico básico si hay debilidad marcada. Estudio de anemia y de déficits nutricionales, frecuentes tras el ingreso prolongado.',
      imagen: 'Radiografía o tomografía de control en el que tuvo SDRA extensa, para valorar la fibrosis residual. Suele haber menos secuela radiológica de la que hace temer el ingreso.',
      complementarios: 'Pruebas de función respiratoria con DLCO a los 3 y 6 meses. Marcha de 6 minutos como medida funcional global. Cuestionarios de cribado de ansiedad, depresión y estrés postraumático. Valoración cognitiva breve. Electromiografía si la debilidad es marcada o asimétrica.',
      dx_diferencial: 'Enfermedad neuromuscular previa no diagnosticada, miopatía por corticoides, déficits nutricionales, hipotiroidismo, depresión mayor primaria, deterioro cognitivo previo y secuelas específicas de la enfermedad causal.',
      tx_medico: 'La mejor intervención es preventiva y ocurre durante el ingreso: sedación ligera con interrupción diaria, prevención y tratamiento del delirium, movilización precoz, higiene del sueño, control glucémico, nutrición adecuada y participación de la familia. Después del alta, rehabilitación multidisciplinar y consultas de seguimiento específicas.',
      tx_farmacologico: 'Tratamiento de la ansiedad, la depresión y el estrés postraumático cuando están indicados. Evitar las benzodiacepinas de mantenimiento, que empeoran la cognición y el sueño a largo plazo. Suplementación nutricional dirigida.',
      tx_intervencionista: 'No aplica de forma específica. Los diarios de cuidados intensivos escritos por el equipo y la familia han mostrado reducir el estrés postraumático y ayudan a reconstruir el relato del ingreso.',
      criterios_uci: 'No aplica; es la fase posterior.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica salvo fibrosis residual grave excepcional.',
      seguimiento_hospitalario: 'Iniciar la rehabilitación antes del alta de la unidad, no después. Informar al paciente y a la familia de lo que cabe esperar en los meses siguientes, que reduce la angustia y mejora la adherencia al seguimiento.',
      seguimiento_ambulatorio: 'Revisión estructurada al mes y a los 3 y 6 meses, con cribado de las tres dimensiones. Rehabilitación física y respiratoria. Apoyo psicológico y valoración de la reincorporacion laboral, que se retrasa mucho más de lo que el paciente espera.',
      pronostico: 'La función pulmonar se recupera en buena medida en el primer año. La limitación física y el deterioro neuropsicologico pueden persistir 5 años o más, y son los que determinan la calidad de vida y el regreso al trabajo.',
      algoritmo: ['Prevenir durante el ingreso: sedación ligera, movilización precoz y control del delirium', 'Involucrar a la familia y considerar un diario del ingreso', 'Iniciar rehabilitación antes del alta de la unidad', 'Informar al paciente y a la familia de lo que cabe esperar', 'Revisión estructurada al mes y a los 3 y 6 meses', 'Cribar de forma activa debilidad, cognición y estado de ánimo', 'Pruebas de función respiratoria con DLCO y marcha de 6 minutos', 'Rehabilitación física y respiratoria multidisciplinar', 'Tratar ansiedad, depresión y estrés postraumático, evitando benzodiacepinas de mantenimiento', 'Planificar la reincorporacion laboral con expectativas realistas']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En la insuficiencia respiratoria aguda casi todo se juega en las primeras horas, y los errores son siempre los mismos: no identificar el mecanismo, subir la fracción inspirada ante un cortocircuito, juzgar el soporte no invasivo solo por la saturación, y retrasar la intubación de un paciente que ya estaba fracasando. Lo que sigue es la lista de comprobacion.',
    parametros: ['Gasometría arterial en todo paciente con sospecha: la pulsioximetría no dice nada de la PaCO2 ni del pH', 'Calcular el gradiente alveolo-arterial y compararlo con el esperado para la edad, no con un número fijo', 'Comprobar si la PaO2 mejora al subir la fracción inspirada: si no mejora, es cortocircuito', 'Ante cortocircuito, abrir alvéolos (PEEP, prono) en vez de subir la fracción inspirada', 'Objetivo de saturación del 92 al 96%, y del 88 al 92% si hay riesgo de hipercapnia', 'En la hipercapnia, distinguir aguda de crónica con el pH y el bicarbonato antes de decidir nada', 'Ventilación no invasiva de primera línea si pH 7.35 o menor con PaCO2 mayor de 45 mmHg', 'Cánula de alto flujo como soporte preferente en la hipoxemia pura, vigilada con el índice ROX', 'Fijar un limite de tiempo explícito a cada prueba de soporte no invasivo y documentarlo', 'Vigilar volumen corriente, frecuencia y trabajo respiratorio, no solo la saturación', 'En la SDRA: volumen corriente de 4 a 8 mL/kg de peso PREDICHO, meseta 30 o menos y presión de distensión menor de 15', 'Decúbito prono 16 horas o más si la PaO2/FiO2 es menor de 150, y contacto precoz con el centro de oxigenación extracorpórea si es refractaria'],
    criterios_uci_general: 'Necesidad de soporte no invasivo por insuficiencia respiratoria aguda (que exige entorno con vigilancia continua y posibilidad de intubar de inmediato), trabajo respiratorio importante, hipoxemia que requiere fracción inspirada alta, hipercapnia con acidosis, deterioro del nivel de conciencia o inestabilidad hemodinámica. Toda SDRA es criterio de cuidados intensivos.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica en la fase aguda. Solo de forma excepcional se plantea a largo plazo ante una fibrosis residual grave e irreversible en un paciente seleccionado.',
    prevencion: 'Primaria: vacunación, control de la enfermedad respiratoria crónica, prevención de la aspiración y del traumatismo, y uso prudente de sedantes y opioides. Secundaria: reconocer pronto el deterioro con la frecuencia respiratoria, que es la constante que antes se altera y la que menos se registra, y aplicar sistemas de alerta precoz. Terciaria, durante el ingreso: ventilación protectora en TODO paciente ventilado y no solo en la SDRA, balance hídrico conservador, sedación ligera con interrupción diaria, movilización precoz, prevención del delirium y de la neumonía asociada a la ventilación, y planificación del seguimiento de secuelas antes del alta.'
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
  'Insuficiencia respiratoria aguda hipoxémica': { definicion: [9, 11, 12], criterios_dx: [9, 11, 12], laboratorio: [9, 11, 12], tx_farmacologico: [9, 11, 12] },
  'Insuficiencia respiratoria aguda hipercápnica': { definicion: [11], criterios_dx: [11], laboratorio: [11], tx_farmacologico: [11] },
  'Síndrome de dificultad respiratoria aguda': { definicion: [1, 2, 3, 4, 5, 7, 13], criterios_dx: [1, 2, 3, 4, 5, 7], laboratorio: [1, 2, 3, 4, 5, 7], tx_farmacologico: [1, 2, 3, 4, 5, 7, 13] },
  'SDRA grave y terapias de rescate': { definicion: [6, 8, 14, 15, 16], criterios_dx: [6, 8, 14], laboratorio: [6, 8, 14], tx_farmacologico: [6, 8, 14, 15, 16] },
  'Fracaso del soporte no invasivo y lesión autoinfligida': { definicion: [10, 12, 9], criterios_dx: [10, 12, 9], laboratorio: [10, 12, 9], tx_farmacologico: [10, 12, 9] },
  'Secuelas y síndrome post-cuidados intensivos': { definicion: [17, 18], criterios_dx: [17, 18], laboratorio: [17, 18], tx_farmacologico: [17, 18] }
};
export const estigmasTitulo = 'Signos de la insuficiencia respiratoria aguda, en orden creciente de gravedad';
export const estigmas = [
  { s: 'Taquipnea', p: 'El primer signo', photo: null, desc: 'Es la constante que antes se altera y la que peor se registra en las gráficas. Una frecuencia respiratoria mantenida por encima de 25 a 30 identifica al paciente que se va a deteriorar horas antes que la saturación, y por eso todos los sistemas de alerta precoz la incluyen.' },
  { s: 'Uso de musculatura accesoria y tiraje', p: 'Muy frecuente', photo: null, desc: 'Esternocleidomastoideos y escalenos visibles, con tiraje supraesternal e intercostal. Traduce que la carga supera la capacidad del músculo respiratorio y es uno de los criterios para iniciar soporte antes incluso de tener la gasometría.' },
  { s: 'Incapacidad para completar frases', p: 'Signo de gravedad', photo: null, desc: 'Se explora con una pregunta abierta y escuchando. Si el paciente contesta con palabras sueltas, el trabajo respiratorio ya consume casi toda su reserva. No necesita ningún aparato y ordena la conducta de inmediato.' },
  { s: 'Cianosis central', p: 'Tardío y poco fiable', photo: null, desc: 'Requiere al menos 5 g/dL de hemoglobina reducida: falta en el anémico pese a hipoxemia grave y es llamativa en el poliglobulico con hipoxemia moderada. Nunca sustituye a la pulsioximetría ni a la gasometría.' },
  { s: 'Agitación y confusión', p: '~30%', photo: null, desc: 'Son manifestaciones NEUROLÓGICAS de la hipoxemia y se confunden con delirium o con un cuadro psiquiátrico. El error con consecuencias es responder con sedantes a un paciente que lo que tiene es hipoxemia.' },
  { s: 'Sudoración e hipertensión', p: 'Frecuente en la hipercapnia', photo: null, desc: 'La hipercapnia produce vasodilatación cutánea, sudoración, ojos rojos y aumento de la presión arterial por descarga adrenergica. Junto con la cefalea matutina son los primeros signos de la retención de dióxido de carbono.' },
  { s: 'Asterixis', p: 'En hipercapnia establecida', photo: null, desc: 'El mismo temblor aleteante de la encefalopatía hepática, aquí por narcosis de dióxido de carbono. Su aparición en un paciente con enfermedad respiratoria obliga a gasometría inmediata y a revisar el flujo de oxígeno.' },
  { s: 'Respiración paradójica abdominal', p: 'Signo de alarma', photo: null, desc: 'El abdomen se hunde en la inspiración en lugar de expandirse, porque el diafragma agotado es arrastrado hacia arriba. Indica fatiga diafragmática y fracaso ventilatorio inminente: obliga a asegurar la via aérea sin esperar más gasometrías.' },
  { s: 'Volumen corriente espirado alto con alto flujo o ventilación no invasiva', p: 'Marcador de riesgo', photo: null, desc: 'Volúmenes por encima de 9 a 10 mL/kg de peso predicho con frecuencia alta indican esfuerzos intensos y riesgo de lesión pulmonar autoinfligida, aunque la saturación sea aceptable. Es el dato que separa al paciente que mejora del que se esta lesionando.' },
  { s: 'Descenso del nivel de conciencia', p: 'Indicación de intubar', photo: null, desc: 'Traduce hipoxemia grave, hipercapnia o agotamiento. En un paciente con soporte no invasivo es una indicación clara de intubación, porque añade la incapacidad de proteger la via aérea al fracaso ventilatorio.' },
  { s: 'Bradipnea o bradicardia en plena insuficiencia', p: 'Preterminal', photo: null, desc: 'La disminución de la frecuencia respiratoria o cardiaca en un paciente que estaba taquipneico y taquicardico NO es mejoría: anuncia la parada. Es el equivalente al tórax silente del asma.' },
  { s: 'Ingurgitación yugular con hipotensión en el ventilado', p: 'Sobrecarga derecha', photo: null, desc: 'Sugiere cor pulmonale agudo por hipertensión pulmonar en la SDRA grave, o auto-PEEP en el obstructivo, o neumotórax a tensión. Los tres se tratan de forma distinta, y la ecografía a pie de cama los separa en minutos.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación por tipo gasometrico': [11, 12],
  'Gradiente alveolo-arterial de oxígeno (calculadora disponible)': [12],
  'Hipercapnia aguda frente a crónica (calculadora disponible)': [11],
  'Definición de Berlín de la SDRA': [1],
  'Definición global de la SDRA (2023)': [2, 3],
  'Índice ROX': [10, 9],
  'Criterios de oxigenación por membrana extracorpórea (calculadora disponible)': [8, 4]
};
export const escalaCalc = {
  'Gradiente alveolo-arterial de oxígeno (calculadora disponible)': 'gradiente-aa',
  'Hipercapnia aguda frente a crónica (calculadora disponible)': 'hipercapnia-temporal',
  'Criterios de oxigenación por membrana extracorpórea (calculadora disponible)': 'criterios-ecmo'
};
export const compGroups = [
  { name: 'Los dos tipos de fallo', items: ['Insuficiencia respiratoria aguda hipoxémica', 'Insuficiencia respiratoria aguda hipercápnica'] },
  { name: 'SDRA', items: ['Síndrome de dificultad respiratoria aguda', 'SDRA grave y terapias de rescate'] },
  { name: 'Errores y consecuencias', items: ['Fracaso del soporte no invasivo y lesión autoinfligida', 'Secuelas y síndrome post-cuidados intensivos'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son los dos tipos de fallo, el del intercambio y el de la bomba, que se distinguen con la gasometría y exigen soportes distintos. Las dos siguientes son la SDRA y su forma grave, donde entran el decúbito prono y la oxigenación extracorpórea. Las dos últimas recogen lo que ocurre cuando algo se hace tarde: el fracaso del soporte no invasivo con la lesión que el propio paciente se produce al respirar, y las secuelas físicas y neuropsicológicas que arrastran los supervivientes durante años.';
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
  root: { title: 'INSUFICIENCIA RESPIRATORIA', color: '#8a3f5c', target: 'definicion' },
  branches: [
    { title: 'POR QUE SE HIPOXEMIA', sub: 'Dos preguntas, cinco mecanismos', color: '#8a3f5c', target: 'definicion', leaves: [
      { title: 'Gradiente alveolo-arterial', sub: 'Edad entre 4 más 4', color: '#8a3f5c', target: 'clasificacion' },
      { title: 'Responde al oxígeno?', sub: 'Si no responde, es cortocircuito', color: '#8c3a34', target: 'definicion' },
      { title: 'Cortocircuito', sub: 'Abrir alvéolos, no subir la FiO2', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hipoventilacion', sub: 'PaCO2 alta con gradiente normal', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'QUE SOPORTE', sub: 'Y cuando dejar de esperar', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Alto flujo', sub: 'Hipoxemia pura, vigilado con ROX', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Ventilación no invasiva', sub: 'EPOC con acidosis y edema', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Lesión autoinfligida', sub: 'Satura bien y se esta dañando', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Intubar a tiempo', sub: 'El error más caro es esperar', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'SDRA', sub: 'Un síndrome, no una enfermedad', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Berlín y definición global', sub: 'SpO2/FiO2 y alto flujo', color: '#2e6b7a', target: 'clasificacion' },
      { title: 'Peso PREDICHO', sub: '4 a 8 mL/kg, nunca peso real', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Presión de distensión', sub: 'Menor de 15 cmH2O', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Prono si PaO2/FiO2 menor de 150', sub: '16 horas o más al dia', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [11, 12], no_invasivos: [2, 10, 12], imagen: [1, 2, 3] };
export const clasificacionCite = [1, 2, 3, 8, 10];
export const seguimientoCite = [3, 4, 5, 6];
