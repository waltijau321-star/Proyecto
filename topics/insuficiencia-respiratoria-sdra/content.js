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
  subtitulo: 'Modulo 51 · Medicina Interna',
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
    <strong style="color:#8a3f5c;">Dos preguntas separan los cinco mecanismos de la hipoxemia.</strong> <span style="color:var(--ink-dim);">Primero: <strong>esta alto el gradiente alveolo-arterial?</strong> Segundo: <strong>mejora la PaO2 al dar oxigeno?</strong> Con esas dos respuestas y la PaCO2 se llega al mecanismo sin ninguna prueba mas.</span>
  </div>

  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;font-weight:700;color:var(--ink-dim);padding:0 4px 3px;border-bottom:1px solid var(--line);">
    <div>Mecanismo</div><div style="text-align:center;">Gradiente</div><div style="text-align:center;">Responde<br>al O2</div><div>Ejemplo tipico y clave</div>
  </div>

  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#3d5a73;">1. HIPOVENTILACION</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Normal</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);">Sobredosis de opioides, enfermedad neuromuscular, obesidad con hipoventilacion. Es el unico con la <strong style="color:var(--ink);">PaCO2 alta y el gradiente NORMAL</strong>: el pulmon esta sano y el problema es que no se mueve aire.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#8a6a1f;">2. DESEQUILIBRIO<br>ventilacion-perfusion</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">Alto</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);"><strong style="color:var(--ink);">El mas frecuente con mucha diferencia</strong>: EPOC, asma, neumonia, embolia pulmonar, atelectasia. Zonas mal ventiladas siguen perfundidas. Basta con subir la fraccion inspirada para corregirlo.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#8c3a34;">3. CORTOCIRCUITO<br>(shunt)</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">Alto</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">NO</div>
    <div style="color:var(--ink-dim);">SDRA, edema pulmonar, atelectasia completa, consolidacion masiva, cortocircuito intracardiaco. La sangre pasa por alveolos <strong style="color:var(--ink);">sin ventilar ninguno</strong>, de modo que el oxigeno no la alcanza. <strong style="color:#8c3a34;">La hipoxemia que no mejora con oxigeno es cortocircuito hasta que se demuestre lo contrario</strong>: hay que abrir alveolos (PEEP, prono), no subir la fraccion inspirada.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;border-bottom:1px solid var(--line);">
    <div style="font-weight:700;color:#5b4a86;">4. ALTERACION DE<br>LA DIFUSION</div>
    <div style="text-align:center;color:#8c3a34;font-weight:700;">Alto</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);">Enfermedad intersticial, enfisema, neumonia por Pneumocystis. Rara vez causa hipoxemia importante en reposo, pero se hace evidente <strong style="color:var(--ink);">con el ejercicio</strong>, cuando el tiempo de transito del hematie por el capilar se acorta.</div>
  </div>
  <div style="display:grid;grid-template-columns:118px 62px 62px 1fr;gap:4px;align-items:center;padding:5px 4px;">
    <div style="font-weight:700;color:#2e6b7a;">5. PRESION INSPIRADA<br>DE O2 BAJA</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Normal</div>
    <div style="text-align:center;color:#3f6b52;font-weight:700;">Si</div>
    <div style="color:var(--ink-dim);">Altitud e inhalacion de gases inertes. Gradiente normal con <strong style="color:var(--ink);">PaCO2 baja o normal</strong>, al reves que la hipoventilacion. Es el mecanismo que se olvida en el examen y el unico que no es una enfermedad del paciente.</div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Como se calcula (calculadora disponible).</strong> Presion alveolar de oxigeno = fraccion inspirada por (presion barometrica menos 47) menos PaCO2 dividida entre 0.8. A nivel del mar respirando aire: <strong>PAO2 = 0.21 x (760 menos 47) menos PaCO2/0.8</strong>, aproximadamente 150 menos 1.25 por la PaCO2. El gradiente es esa cifra menos la PaO2 medida. <strong>Lo normal sube con la edad</strong>: alrededor de la edad dividida entre 4 mas 4, de modo que un gradiente de 22 es normal a los 70 a&#241;os y patologico a los 25.
  </div>
</div>`;

const escaladaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. OXIGENO<br>convencional</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Gafas nasales hasta 6 L/min, mascarilla de <strong style="color:var(--ink);">Venturi</strong> cuando hace falta fijar la fraccion inspirada (el obstructivo con riesgo de hipercapnia), y mascarilla con reservorio en la hipoxemia grave transitoria. Objetivo: <strong>saturacion del 92 al 96%</strong> en general y del <strong>88 al 92%</strong> en el paciente con riesgo de hipercapnia.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. CANULA DE<br>ALTO FLUJO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Es el soporte de eleccion en la insuficiencia respiratoria <strong style="color:var(--ink);">hipoxemica pura</strong>. Aporta fraccion inspirada fiable, lava el espacio muerto de la via aerea superior, calienta y humidifica, y da algo de presion positiva. Se vigila con el <strong>indice ROX</strong> (saturacion entre fraccion inspirada, dividido por la frecuencia respiratoria): <strong style="color:#3f6b52;">4.88 o mas</strong> a las 2, 6 y 12 horas predice exito; por debajo, fracaso.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">3. VENTILACION<br>NO INVASIVA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:#3f6b52;">Donde funciona muy bien</strong>: exacerbacion de EPOC con pH de 7.35 o menor, y edema agudo de pulmon cardiogenico. Ahi reduce intubacion y mortalidad, y la evidencia es de las mejores de la medicina respiratoria. <strong style="color:#8c3a34;">Donde es peligrosa</strong>: en la hipoxemia pura de novo (neumonia, SDRA), donde la tasa de fracaso es alta y el retraso de la intubacion empeora el pronostico.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">4. INTUBACION</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Parada respiratoria, incapacidad de proteger la via aerea, descenso del nivel de conciencia, inestabilidad hemodinamica, agotamiento con respiracion paradojica, o <strong style="color:var(--ink);">falta de respuesta al soporte no invasivo</strong>. La decision es clinica y no espera a un numero: <strong>el error mas caro de este tema es intubar tarde a un paciente que llevaba horas fracasando</strong>.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #5b4a86;border-radius:8px;background:#5b4a8610;color:var(--ink-dim);">
    <strong style="color:#5b4a86;">La trampa fisiologica del soporte no invasivo.</strong> Un paciente con hipoxemia grave y un estimulo respiratorio intenso genera presiones intratoracicas muy negativas y volumenes corrientes enormes, que lesionan el pulmon exactamente igual que lo haria un ventilador mal ajustado. Es la <strong>lesion pulmonar autoinfligida</strong>: el paciente parece que "aguanta" porque satura, mientras se esta da&#241;ando el pulmon. Vigilar el <strong>volumen corriente espirado, la frecuencia respiratoria y el trabajo respiratorio</strong>, no solo la saturacion, y poner un limite de tiempo explicito a la prueba de soporte no invasivo.
  </div>
</div>`;

const sdraHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #8a3f5c;border-radius:8px;padding:6px 8px;background:#8a3f5c08;">
      <div style="font-weight:700;color:#8a3f5c;text-align:center;margin-bottom:4px;">Definicion de BERLIN (2012)</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Tiempo</strong>: en la semana siguiente a un factor conocido o a sintomas nuevos.<br>
        <strong style="color:var(--ink);">Imagen</strong>: opacidades bilaterales no explicadas del todo por derrame, atelectasia o nodulos.<br>
        <strong style="color:var(--ink);">Origen</strong>: no explicado solo por fallo cardiaco o sobrecarga de volumen.<br>
        <strong style="color:var(--ink);">Oxigenacion</strong> con PEEP de 5 o mas: leve 200 a 300, moderada 100 a 200, grave 100 o menos.
      </div>
    </div>
    <div style="border:1px solid #2e6b7a;border-radius:8px;padding:6px 8px;background:#2e6b7a08;">
      <div style="font-weight:700;color:#2e6b7a;text-align:center;margin-bottom:4px;">Definicion GLOBAL (2023)</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        A&#241;ade lo que Berlin dejaba fuera:<br>
        <strong style="color:var(--ink);">Paciente NO intubado</strong> con canula de alto flujo a 30 L/min o mas, o con CPAP o binivel con PEEP de 5 o mas.<br>
        <strong style="color:var(--ink);">SpO2/FiO2 de 315 o menos</strong> (con saturacion del 97% o menor) como alternativa a la PaO2/FiO2.<br>
        <strong style="color:var(--ink);">Ecografia pulmonar</strong> como imagen valida.<br>
        Y una categoria para <strong>entornos con recursos limitados</strong>, sin exigir PEEP.
      </div>
    </div>
  </div>

  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La SDRA no tiene tratamiento propio: se trata la causa y se evita hacer da&#241;o.</strong> <span style="color:var(--ink-dim);">Estas son las cinco medidas con impacto demostrado en mortalidad.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. VOLUMEN<br>CORRIENTE BAJO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">4 a 8 mL/kg de peso PREDICHO</strong> (que se calcula con la talla, no con el peso real) y presion meseta de 30 cmH2O o menos. Es la unica medida que ha demostrado reducir la mortalidad de forma robusta, y la que mas se incumple.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. PRESION DE<br>DISTENSION baja</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Meseta menos PEEP, objetivo <strong style="color:var(--ink);">menor de 15 cmH2O</strong>. Es la variable que mejor se correlaciona con la supervivencia, mejor que el volumen corriente o la meseta por separado, porque tiene en cuenta cuanto pulmon aireado queda.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3. DECUBITO<br>PRONO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si la relacion PaO2/FiO2 es <strong style="color:var(--ink);">menor de 150</strong>, sesiones de <strong>16 horas o mas</strong> al dia. Redujo la mortalidad casi a la mitad en el ensayo PROSEVA. Homogeneiza la ventilacion, recluta zonas dorsales y descarga el corazon derecho. Se infrautiliza por logistica, no por falta de evidencia.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">4. BALANCE<br>CONSERVADOR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Una vez resuelto el choque, la estrategia restrictiva de fluidos <strong style="color:var(--ink);">acorta la ventilacion y la estancia</strong>. No mejoro la mortalidad en el ensayo que la probo, pero es de las medidas mas faciles de aplicar y de las que menos cuestan.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">5. TRATAR LA<br>CAUSA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La SDRA es un sindrome, no una enfermedad: sepsis, neumonia, aspiracion, pancreatitis, traumatismo, transfusion. <strong style="color:var(--ink);">Sin control del foco no hay estrategia ventilatoria que sirva</strong>, y buscar la causa es tan importante como ajustar el respirador.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Lo que NO funciona o esta en discusion.</strong> La ventilacion oscilatoria de alta frecuencia <strong>aumento la mortalidad</strong> y esta desaconsejada. El oxido nitrico inhalado mejora la oxigenacion sin mejorar la supervivencia y queda como rescate. El bloqueo neuromuscular, que parecio beneficioso en un ensayo temprano, no lo confirmo en otro posterior con sedacion mas ligera: se reserva a la SDRA grave con asincronia o presiones inasumibles. El corticoide tiene datos favorables pero heterogeneos y se individualiza. La oxigenacion por membrana extracorporea es rescate en centros expertos.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La insuficiencia respiratoria aguda es la incapacidad del aparato respiratorio para mantener el intercambio gaseoso, definida por una <strong>PaO2 menor de 60 mmHg</strong> respirando aire ambiente (tipo 1 o hipoxemica) o una <strong>PaCO2 mayor de 45 mmHg con pH menor de 7.35</strong> (tipo 2 o hipercapnica). La distincion no es academica: cambia el mecanismo, el soporte que se elige y el pronostico.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que se hipoxemia un paciente: cinco mecanismos y dos preguntas.</strong></p>
<p style="margin:0 0 12px;">Esta es la parte del tema que mas rendimiento da y la que mas se pasa por alto. Toda hipoxemia se explica por uno de cinco mecanismos, y para separarlos bastan dos preguntas: <strong>esta alto el gradiente alveolo-arterial de oxigeno?</strong> y <strong>mejora la PaO2 al dar oxigeno?</strong>. Con esas dos respuestas y la PaCO2 se llega al mecanismo sin ninguna prueba adicional, y de ahi sale directamente la conducta: si la hipoxemia <strong>no responde al oxigeno</strong>, hay cortocircuito y lo que hace falta es <strong>abrir alveolos</strong> (presion positiva teleespiratoria, decubito prono), no subir la fraccion inspirada.</p>
${figBlock('Figura 1', 'Los cinco mecanismos de hipoxemia: gradiente y respuesta al oxigeno', mecanismosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La otra mitad: la hipercapnia.</strong></p>
<p style="margin:0 0 12px;">La PaCO2 depende de la produccion de dioxido de carbono y de la <strong>ventilacion alveolar</strong>, que es el volumen minuto menos el espacio muerto. Sube por tres motivos: porque el paciente <strong>no quiere respirar</strong> (opioides, sedantes, lesion del tronco), porque <strong>no puede</strong> (enfermedad neuromuscular, cifoescoliosis, obesidad extrema, agotamiento del musculo respiratorio) o porque <strong>el espacio muerto es enorme</strong> (EPOC avanzada, embolia pulmonar). Antes de decidir nada hay que responder a una pregunta clave: <strong>es aguda o cronica?</strong> El pH y el bicarbonato lo dicen, porque el ri&#241;on tarda dias en compensar: en la hipercapnia aguda el pH cae unas 0.08 unidades por cada 10 mmHg de ascenso de la PaCO2, y en la cronica solo unas 0.03.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se escala el soporte, y donde se equivoca uno.</strong></p>
<p style="margin:0 0 12px;">El soporte se escala de las gafas nasales a la intubacion, pero el escalon intermedio no es intercambiable: la <strong>ventilacion no invasiva</strong> es excelente en la exacerbacion de EPOC con acidosis y en el edema agudo de pulmon, y arriesgada en la hipoxemia pura de novo; la <strong>canula de alto flujo</strong> es al reves. Y por encima de la eleccion del dispositivo esta el error que mas cuesta: <strong>retrasar la intubacion</strong> de un paciente que lleva horas fracasando con soporte no invasivo, mientras se autolesiona el pulmon con esfuerzos respiratorios enormes.</p>
${figBlock('Figura 2', 'Escalada del soporte respiratorio y donde falla cada escalon', escaladaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La SDRA.</strong></p>
<p style="margin:0 0 12px;">El sindrome de dificultad respiratoria aguda es una lesion alveolar difusa e inflamatoria, desencadenada por una agresion pulmonar directa (neumonia, aspiracion, contusion, inhalacion) o indirecta (sepsis, pancreatitis, politransfusion, traumatismo). El endotelio y el epitelio alveolar pierden su barrera, el alveolo se llena de un edema rico en proteinas y el surfactante se inactiva: el resultado es un pulmon <strong>peque&#241;o, rigido y heterogeneo</strong>, con zonas colapsadas junto a zonas normales. De ahi nacen las dos ideas que gobiernan su tratamiento: el pulmon disponible es mucho menor de lo que sugiere el tama&#241;o del paciente (el llamado pulmon de bebe), y por eso el volumen corriente se calcula con el <strong>peso predicho por la talla</strong> y nunca con el peso real.</p>
${figBlock('Figura 3', 'SDRA: las dos definiciones y las cinco medidas que cambian la mortalidad', sdraHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La enfermedad no termina en la extubacion.</strong></p>
<p style="margin:0 0 12px;">Los supervivientes de una SDRA arrastran durante a&#241;os debilidad muscular, limitacion funcional, deterioro cognitivo, ansiedad, depresion y estres postraumatico: es el <strong>sindrome post-cuidados intensivos</strong>. A los 5 a&#241;os, la limitacion dominante no suele ser la funcion pulmonar, que se recupera bastante, sino la <strong>debilidad y el deterioro neuropsicologico</strong>. Reducir sedacion, movilizar precozmente y acompa&#241;ar a la familia forman parte del tratamiento tanto como el respirador.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No subir la fraccion inspirada de oxigeno indefinidamente ante una hipoxemia que no responde: eso es cortocircuito y hay que abrir alveolos. No usar ventilacion no invasiva como sustituto de la intubacion en la hipoxemia grave de novo. No juzgar el soporte no invasivo solo por la saturacion, ignorando el volumen corriente y el trabajo respiratorio. No calcular el volumen corriente con el peso real. No dejar la meseta por encima de 30 cmH2O ni la presion de distension por encima de 15. No olvidar el decubito prono cuando la PaO2/FiO2 baja de 150. Y no usar ventilacion oscilatoria de alta frecuencia, que aumento la mortalidad.</p>`;

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
      tituloA: 'Insuficiencia respiratoria hipoxemica (tipo 1)',
      tituloB: 'Insuficiencia respiratoria hipercapnica (tipo 2)',
      compensada: 'Disnea, taquipnea, taquicardia, ansiedad e inquietud, uso de musculatura accesoria y cianosis central cuando la hipoxemia es marcada. La confusion y la agitacion son manifestaciones neurologicas de la hipoxemia y se confunden a menudo con un cuadro psiquiatrico o con un delirium. PaO2 menor de 60 mmHg con PaCO2 normal o baja por la hiperventilacion compensadora. La ausencia de cianosis NO descarta la hipoxemia grave, porque requiere al menos 5 g/dL de hemoglobina reducida y puede faltar en el anemico.',
      descompensada: 'Somnolencia, cefalea (sobre todo matutina), temblor, ASTERIXIS, sudoracion, hipertension y, en fases avanzadas, coma por narcosis de dioxido de carbono. PaCO2 mayor de 45 mmHg con pH menor de 7.35 si es aguda. La respiracion PARADOJICA ABDOMINAL (el abdomen se hunde en la inspiracion) indica fatiga diafragmatica y es un signo de fracaso ventilatorio inminente que obliga a asegurar la via aerea sin esperar mas gasometrias.'
    },
    laboratorio: [
      { prueba: 'Gasometria arterial (calculadoras disponibles)', utilidad: 'La prueba central del tema. Define el tipo (PaO2 menor de 60, PaCO2 mayor de 45), permite calcular el gradiente alveolo-arterial y la relacion PaO2/FiO2, y el pH separa la hipercapnia aguda de la cronica compensada. La pulsioximetria no la sustituye porque no informa de la PaCO2 ni del pH.' },
      { prueba: 'Bicarbonato y exceso de bases', utilidad: 'La huella temporal de la hipercapnia: un bicarbonato claramente elevado indica compensacion renal y por tanto cronicidad de al menos varios dias. En la hipercapnia aguda pura el bicarbonato sube poco, alrededor de 1 mmol/L por cada 10 mmHg de PaCO2, frente a 3.5 a 4 en la cronica.' },
      { prueba: 'Lactato', utilidad: 'Marcador de hipoperfusion y de metabolismo anaerobio. Su elevacion en un paciente hipoxemico apunta a que el aporte de oxigeno a los tejidos ya no es suficiente, y obliga a valorar el gasto cardiaco y la hemoglobina ademas de la oxigenacion.' },
      { prueba: 'Hemograma y bioquimica', utilidad: 'La anemia empeora el transporte de oxigeno aunque la saturacion sea normal, y la poliglobulia sugiere hipoxemia cronica. Funcion renal y hepatica para valorar la disfuncion organica acompa&#241;ante y ajustar farmacos.' },
      { prueba: 'Peptido natriuretico y troponina', utilidad: 'Ayudan a separar el edema pulmonar cardiogenico de la SDRA, que es el diagnostico diferencial mas frecuente y mas dificil. Un valor bajo hace muy improbable el origen cardiaco, pero uno alto no lo confirma en el paciente critico.' },
      { prueba: 'Dimero D y estudio de trombofilia si procede', utilidad: 'La embolia pulmonar es una causa de hipoxemia con gradiente alto que responde al oxigeno y que puede pasar desapercibida en el paciente ya diagnosticado de otra cosa. En la SDRA sin causa clara es un diagnostico que hay que descartar activamente.' },
      { prueba: 'Estudio microbiologico dirigido', utilidad: 'Hemocultivos, cultivo de secreciones respiratorias, antigenos urinarios y panel viral segun el contexto: la causa mas frecuente de SDRA es infecciosa, y sin control del foco ninguna estrategia ventilatoria funciona.' },
      { prueba: 'Carboxihemoglobina y metahemoglobina', utilidad: 'Ante inhalacion de humo, exposicion a monoxido de carbono o cianosis con PaO2 normal. La pulsioximetria convencional NO las detecta y puede mostrar saturaciones falsamente normales, un error clasico en el paciente rescatado de un incendio.' }
    ],
    no_invasivos: [
      { metodo: 'Gradiente alveolo-arterial de oxigeno (calculadora disponible)', interpretacion: 'Separa la hipoventilacion y la altitud (gradiente normal) del resto de mecanismos (gradiente alto). El valor normal sube con la edad, aproximadamente la edad dividida entre 4 mas 4, de modo que compararlo con un unico numero fijo produce errores en los dos sentidos.', cutoff: 'Normal respirando aire: por debajo de la edad entre 4 mas 4' },
      { metodo: 'Respuesta al oxigeno suplementario', interpretacion: 'La prueba mas informativa y la que menos aparato requiere. Si la PaO2 no mejora al subir la fraccion inspirada, hay CORTOCIRCUITO y la conducta es reclutar alveolos, no dar mas oxigeno.', cutoff: 'Sin umbral formal; la falta de respuesta a fracciones altas orienta a un cortocircuito superior al 30%' },
      { metodo: 'Relacion PaO2/FiO2 y SpO2/FiO2', interpretacion: 'Clasifica la gravedad de la SDRA. La definicion global de 2023 acepta la relacion SpO2/FiO2 cuando la saturacion es del 97% o menor, lo que permite clasificar sin gasometria arterial y en entornos con menos recursos.', cutoff: 'PaO2/FiO2: leve 200 a 300, moderada 100 a 200, grave 100 o menos. SpO2/FiO2 de 315 o menos' },
      { metodo: 'Indice ROX en la canula de alto flujo', interpretacion: 'Saturacion dividida entre la fraccion inspirada, y ese cociente dividido entre la frecuencia respiratoria. Predice el exito del alto flujo y ayuda a decidir la intubacion antes de que el paciente se agote.', cutoff: '4.88 o mas a las 2, 6 y 12 horas: exito probable. Por debajo, riesgo de fracaso' },
      { metodo: 'Escala de esfuerzo y volumen corriente espirado', interpretacion: 'En el paciente con soporte no invasivo, un volumen corriente espirado alto (por encima de 9 a 10 mL/kg de peso predicho) con frecuencia respiratoria elevada indica esfuerzos intensos y riesgo de lesion pulmonar autoinfligida, aunque la saturacion sea aceptable.', cutoff: 'Volumen corriente mayor de 9 mL/kg de peso predicho o frecuencia mayor de 30 mantenida' },
      { metodo: 'Ecografia pulmonar y ecocardiografia a pie de cama', interpretacion: 'La ecografia pulmonar distingue el patron intersticial difuso, la consolidacion, el derrame y el neumotorax, y es imagen valida para la definicion global de SDRA. La ecocardiografia valora el ventriculo derecho y separa el edema cardiogenico.', cutoff: 'Sin umbral; el patron y la funcion ventricular orientan el diagnostico' },
      { metodo: 'Capnografia y presiones respiratorias maximas', interpretacion: 'La capnografia vigila la ventilacion en tiempo real y confirma la posicion del tubo. Las presiones inspiratoria y espiratoria maximas cuantifican la fuerza del musculo respiratorio y son clave en la insuficiencia ventilatoria neuromuscular.', cutoff: 'Presion inspiratoria maxima menos negativa de -30 cmH2O o capacidad vital menor de 20 mL/kg: riesgo de fracaso ventilatorio' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Primera prueba: opacidades bilaterales en la SDRA, consolidacion focal en la neumonia, redistribucion y lineas B en el edema cardiogenico, hiperinsuflacion en el obstructivo, y neumotorax o derrame como causas rapidamente corregibles. Una radiografia limpia con hipoxemia grave orienta a embolia pulmonar o a cortocircuito intracardiaco.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'Muestra la heterogeneidad tipica de la SDRA, con densidades dependientes de la gravedad y zonas aireadas junto a zonas colapsadas. Es lo que dio origen al concepto de pulmon de bebe. Util para descartar causas alternativas y complicaciones como el neumotorax o el neumomediastino.' },
      { modalidad: 'Angiotomografia pulmonar', hallazgos: 'Ante hipoxemia con radiografia poco alterada, deterioro brusco o factores de riesgo trombotico. La embolia pulmonar es una causa tratable que se pasa por alto con frecuencia en el paciente ya etiquetado de otra cosa.' },
      { modalidad: 'Ecografia pulmonar', hallazgos: 'Lineas B difusas y bilaterales en el edema y en la SDRA, consolidacion con broncograma en la neumonia, ausencia de deslizamiento pleural en el neumotorax. Se hace a pie de cama, sin trasladar al paciente, y es imagen valida para la definicion global de SDRA.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La insuficiencia respiratoria se clasifica primero por su <strong>alteracion gasometrica</strong> (tipo 1 hipoxemica y tipo 2 hipercapnica), despues por su <strong>curso temporal</strong> (aguda, cronica y cronica agudizada, que el pH y el bicarbonato permiten separar), y por el <strong>mecanismo fisiopatologico</strong>, que es la clasificacion que mas cambia la conducta. La SDRA tiene ademas su propia clasificacion de gravedad, hoy con dos versiones vigentes: la <strong>definicion de Berlin</strong> de 2012 y la <strong>definicion global</strong> de 2023, que amplia el sindrome al paciente no intubado y admite la relacion SpO2/FiO2 y la ecografia.`,
    escalas: [
      { nombre: 'Clasificacion por tipo gasometrico', componentes: 'PaO2, PaCO2 y pH en gasometria arterial.', formula: 'Tipo 1: PaO2 menor de 60 mmHg con PaCO2 normal o baja. Tipo 2: PaCO2 mayor de 45 mmHg con pH menor de 7.35.', interpretacion: 'Determina el soporte: la hipoxemia pura se beneficia sobre todo de la canula de alto flujo, y la hipercapnia con acidosis de la ventilacion no invasiva. Muchos pacientes son mixtos y evolucionan de uno a otro tipo cuando se agotan.' },
      { nombre: 'Gradiente alveolo-arterial de oxigeno (calculadora disponible)', componentes: 'Fraccion inspirada de oxigeno, presion barometrica, PaCO2 y PaO2 medida.', formula: 'PAO2 = FiO2 x (presion barometrica menos 47) menos PaCO2/0.8. Gradiente = PAO2 menos PaO2. Normal aproximado: edad entre 4 mas 4.', interpretacion: 'Con la respuesta al oxigeno, identifica el mecanismo: gradiente normal en la hipoventilacion y en la altitud; alto y con respuesta al oxigeno en el desequilibrio ventilacion-perfusion y en la alteracion de la difusion; alto y SIN respuesta en el cortocircuito.' },
      { nombre: 'Hipercapnia aguda frente a cronica (calculadora disponible)', componentes: 'PaCO2, pH y bicarbonato.', formula: 'Aguda: el pH baja unas 0.08 unidades y el bicarbonato sube alrededor de 1 mmol/L por cada 10 mmHg de ascenso de la PaCO2. Cronica: el pH baja unas 0.03 y el bicarbonato sube de 3.5 a 4.', interpretacion: 'Es la distincion que evita dos errores opuestos: tratar como aguda una hipercapnia cronica bien compensada, y dar por cronica una descompensacion que necesita ventilacion. Un componente agudo sobre una hipercapnia cronica se reconoce por el pH bajo con bicarbonato ya elevado.' },
      { nombre: 'Definicion de Berlin de la SDRA', componentes: 'Tiempo (una semana), imagen bilateral, origen no explicado solo por fallo cardiaco, y oxigenacion con PEEP de 5 o mas.', formula: 'Leve: PaO2/FiO2 de 200 a 300. Moderada: de 100 a 200. Grave: 100 o menos.', interpretacion: 'Guia la escalada terapeutica: prono si la relacion es menor de 150, y valoracion de oxigenacion extracorporea en la forma grave refractaria. Su limitacion es que exige PEEP y por tanto deja fuera al paciente no intubado.' },
      { nombre: 'Definicion global de la SDRA (2023)', componentes: 'Los mismos criterios de Berlin, ampliados al paciente con canula de alto flujo a 30 L/min o mas o con CPAP o binivel con PEEP de 5 o mas, con la relacion SpO2/FiO2 como alternativa y la ecografia pulmonar como imagen valida.', formula: 'SpO2/FiO2 de 315 o menos, con saturacion del 97% o menor para evitar el techo de la curva de la hemoglobina.', interpretacion: 'Reconoce como SDRA cuadros que Berlin no clasificaba, permite el diagnostico sin gasometria arterial y a&#241;ade una categoria para entornos con recursos limitados. Convive con la de Berlin, que sigue siendo la referencia en la mayoria de los ensayos.' },
      { nombre: 'Indice ROX', componentes: 'Saturacion de oxigeno, fraccion inspirada y frecuencia respiratoria, en el paciente con canula nasal de alto flujo.', formula: 'ROX = (SpO2 / FiO2) / frecuencia respiratoria.', interpretacion: '4.88 o mas a las 2, 6 y 12 horas predice exito del alto flujo. Valores decrecientes anuncian el fracaso y permiten intubar antes del agotamiento, que es justo lo que mejora el pronostico.' },
      { nombre: 'Criterios de oxigenacion por membrana extracorporea (calculadora disponible)', componentes: 'PaO2/FiO2, pH, PaCO2 y tiempo de persistencia pese a ventilacion optimizada con prono y bloqueo neuromuscular.', formula: 'PaO2/FiO2 menor de 50 durante mas de 3 horas, o menor de 80 durante mas de 6 horas, o pH menor de 7.25 con PaCO2 de 60 mmHg o mas durante mas de 6 horas.', interpretacion: 'Son los criterios del ensayo EOLIA. Antes de aplicarlos hay que haber optimizado de verdad la ventilacion, incluido el decubito prono: la mayoria de los pacientes que parecen candidatos mejoran al hacerlo. La derivacion debe ser precoz y a un centro con experiencia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Insuficiencia respiratoria aguda hipoxemica',
      color: '#8a3f5c',
      definicion: 'Incapacidad aguda para mantener una oxigenacion adecuada, con PaO2 menor de 60 mmHg respirando aire ambiente y PaCO2 normal o baja. Es el tipo 1 o fallo del intercambio.',
      fisiopatologia: 'Cinco mecanismos posibles: hipoventilacion (con gradiente normal), desequilibrio ventilacion-perfusion (el mas frecuente), cortocircuito, alteracion de la difusion y presion inspirada de oxigeno baja. El gradiente alveolo-arterial y la respuesta al oxigeno los separan. A ellos se suma un amplificador que se olvida: una saturacion venosa mixta baja, por gasto cardiaco insuficiente o anemia, empeora cualquier hipoxemia porque la sangre que atraviesa las zonas mal ventiladas llega mas desaturada. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Es el motivo mas frecuente de ingreso urgente en cuidados intensivos. Las causas dominantes son la neumonia, el edema pulmonar cardiogenico, la SDRA, la embolia pulmonar y la agudizacion de la enfermedad respiratoria cronica.',
      factores_riesgo: ['Neumonia y otras infecciones respiratorias', 'Insuficiencia cardiaca y cardiopatia isquemica', 'Enfermedad pulmonar cronica de base', 'Sepsis de cualquier origen', 'Aspiracion y alteracion de la deglucion', 'Traumatismo toracico y politraumatismo', 'Pancreatitis aguda grave', 'Transfusion masiva de hemoderivados', 'Inmunodepresion', 'Cirugia toracica o abdominal alta'],
      clinica: 'Disnea, taquipnea, taquicardia, uso de musculatura accesoria, ansiedad, inquietud, confusion y cianosis central si la hipoxemia es marcada. La agitacion y la confusion son manifestaciones neurologicas de la hipoxemia y se confunden con delirium o con un cuadro psiquiatrico, un error con consecuencias si se responde con sedantes.',
      criterios_dx: 'Gasometria arterial con PaO2 menor de 60 mmHg respirando aire ambiente, o relacion PaO2/FiO2 baja con oxigeno suplementario. La pulsioximetria orienta pero no basta: no informa de la PaCO2 ni del pH, y falla ante carboxihemoglobina, metahemoglobina, mala perfusion o pigmentacion de la u&#241;a.',
      laboratorio: 'Gasometria arterial con calculo del gradiente alveolo-arterial. Hemograma, lactato, funcion renal, peptido natriuretico y troponina. Dimero D si se sospecha embolia. Estudio microbiologico dirigido segun el contexto.',
      imagen: 'Radiografia de torax en todos. Ecografia pulmonar a pie de cama, rapida y muy util para separar edema, consolidacion, derrame y neumotorax. Angiotomografia si la radiografia es poco alterada o hay sospecha de embolia. Ecocardiografia para valorar el origen cardiaco.',
      complementarios: 'Prueba de respuesta al oxigeno, que orienta el mecanismo mejor que ninguna otra maniobra. Monitorizacion continua de saturacion y frecuencia respiratoria, que es la constante que antes se altera y la que menos se registra.',
      dx_diferencial: 'Neumonia, edema pulmonar cardiogenico, SDRA, embolia pulmonar, exacerbacion de EPOC o asma, neumotorax, derrame masivo, atelectasia, hemorragia alveolar, cortocircuito intracardiaco y sindrome hepatopulmonar.',
      tx_medico: 'Tratar la causa, que es lo que resuelve el cuadro. Oxigenoterapia con objetivo de saturacion del 92 al 96% (del 88 al 92% si hay riesgo de hipercapnia), evitando tanto la hipoxemia como la hiperoxia, que tambien se asocia a peor evolucion. Posicion sentada, control del dolor y de la ansiedad sin sedar, y correccion de la anemia y del bajo gasto que amplifican la hipoxemia.',
      tx_farmacologico: 'El de la causa: antibiotico en la neumonia, diuretico y vasodilatador en el edema cardiogenico, anticoagulacion en la embolia, broncodilatadores en el obstructivo. No hay farmaco que trate la hipoxemia en si.',
      tx_intervencionista: 'Escalada del soporte: canula nasal de alto flujo como opcion preferente en la hipoxemia pura, ventilacion no invasiva en escenarios seleccionados, e intubacion sin demora si el paciente no responde. Drenaje del neumotorax o del derrame masivo cuando son la causa. Ver la Figura 2 de Definicion.',
      criterios_uci: 'Necesidad de fraccion inspirada alta para mantener una saturacion aceptable, trabajo respiratorio importante, deterioro del nivel de conciencia, inestabilidad hemodinamica o necesidad de soporte no invasivo con vigilancia estrecha.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Reevaluacion frecuente de saturacion, frecuencia respiratoria y trabajo respiratorio. Gasometria de control tras cada cambio de soporte. Vigilar la evolucion hacia el tipo 2 cuando el paciente se agota, que es el momento en el que hay que decidir la intubacion.',
      seguimiento_ambulatorio: 'Seguimiento de la enfermedad causal y valoracion de la funcion pulmonar residual. Rehabilitacion respiratoria si la recuperacion funcional es incompleta.',
      pronostico: 'Depende sobre todo de la causa y de la disfuncion organica acompa&#241;ante. El pronostico empeora de forma clara cuando la intubacion se retrasa en un paciente que ya estaba fracasando con soporte no invasivo.',
      algoritmo: ['Confirmar con gasometria: PaO2 menor de 60 mmHg o PaO2/FiO2 baja', 'Calcular el gradiente alveolo-arterial y compararlo con el esperado para la edad', 'Comprobar si la PaO2 mejora al subir la fraccion inspirada', 'Si NO mejora: hay cortocircuito, abrir alveolos en vez de dar mas oxigeno', 'Radiografia y ecografia pulmonar para identificar la causa', 'Descartar de forma activa neumotorax, derrame masivo y embolia pulmonar', 'Objetivo de saturacion del 92 al 96%, o del 88 al 92% si hay riesgo de hipercapnia', 'Tratar la causa: es lo unico que resuelve el cuadro', 'Escalar el soporte y fijar un limite de tiempo explicito a cada escalon', 'Reevaluar el trabajo respiratorio, no solo la saturacion']
    },
    {
      nombre: 'Insuficiencia respiratoria aguda hipercapnica',
      color: '#3d5a73',
      definicion: 'Fallo de la bomba ventilatoria con PaCO2 mayor de 45 mmHg y pH menor de 7.35. Es el tipo 2, y el problema no esta en el intercambio sino en el volumen de aire que se moviliza.',
      fisiopatologia: 'La PaCO2 depende de la produccion de dioxido de carbono y de la ventilacion alveolar, que es el volumen minuto menos el espacio muerto. Sube cuando el estimulo central falla (opioides, sedantes, lesion del tronco), cuando la bomba no puede (enfermedad neuromuscular, cifoescoliosis, obesidad extrema, fatiga del diafragma) o cuando el espacio muerto es enorme (EPOC avanzada, embolia pulmonar). La compensacion renal tarda dias, y ese retraso es lo que permite distinguir la forma aguda de la cronica mirando el pH y el bicarbonato.',
      epidemiologia: 'La causa mas frecuente en el hospital es la exacerbacion de la EPOC. Le siguen la sobredosis de sedantes y opioides, el sindrome de hipoventilacion asociado a obesidad, las enfermedades neuromusculares y la fatiga del musculo respiratorio en cualquier cuadro prolongado.',
      factores_riesgo: ['EPOC avanzada y otras enfermedades obstructivas', 'Obesidad con hipoventilacion y apnea del sue&#241;o', 'Enfermedad neuromuscular: esclerosis lateral amiotrofica, miastenia, Guillain-Barre', 'Cifoescoliosis y enfermedad restrictiva de la pared toracica', 'Opioides, benzodiacepinas y otros sedantes', 'Hipotiroidismo grave y alteraciones electroliticas', 'Desnutricion y debilidad adquirida en cuidados intensivos', 'Ictus de tronco y lesion medular alta', 'Oxigenoterapia mal dosificada en el paciente con riesgo de hipercapnia', 'Cirugia abdominal alta o toracica reciente'],
      clinica: 'Somnolencia, cefalea sobre todo matutina, temblor, ASTERIXIS, sudoracion, hipertension, vasodilatacion cutanea y, en fases avanzadas, coma. La respiracion paradojica abdominal indica fatiga del diafragma y anuncia el fracaso ventilatorio. En la forma cronica el paciente puede estar practicamente asintomatico con cifras que en una forma aguda serian criticas.',
      criterios_dx: 'Gasometria arterial con PaCO2 mayor de 45 mmHg y pH menor de 7.35. La distincion entre aguda y cronica se hace con el pH y el bicarbonato, y es imprescindible antes de decidir el soporte y los objetivos de oxigenacion.',
      laboratorio: 'Gasometria con bicarbonato y exceso de bases. Iones, funcion renal, tiroideas si hay sospecha, y niveles de farmacos o tocixologia si se sospecha sobredosis. Hemograma para valorar la poliglobulia de la hipoxemia cronica.',
      imagen: 'Radiografia de torax para identificar la causa. Tomografia si se sospecha embolia o enfermedad estructural. Ecografia diafragmatica para valorar la contractilidad del diafragma en la sospecha de disfuncion o de paralisis.',
      complementarios: 'Presiones inspiratoria y espiratoria maximas y capacidad vital en la sospecha de causa neuromuscular, que son las que detectan el fracaso antes de que la gasometria se altere. Estudio de sue&#241;o cuando se sospecha hipoventilacion nocturna.',
      dx_diferencial: 'Exacerbacion de EPOC, sobredosis de sedantes u opioides, sindrome de hipoventilacion por obesidad, crisis miastenica, sindrome de Guillain-Barre, hipotiroidismo grave, alcalosis metabolica con hipoventilacion compensadora y lesion del sistema nervioso central.',
      tx_medico: 'Tratar la causa y retirar el desencadenante: revertir el opioide con naloxona si procede, corregir electrolitos, tratar la infeccion o el broncoespasmo. OXIGENO CONTROLADO con objetivo del 88 al 92%: el exceso de oxigeno empeora la hipercapnia al abolir la vasoconstriccion hipoxica y por el efecto Haldane. Evitar sedantes.',
      tx_farmacologico: 'El de la causa. En la exacerbacion de EPOC, broncodilatadores, corticoide y antibiotico si procede. No existe un estimulante respiratorio con papel establecido en el manejo agudo, y la aminofilina no se recomienda.',
      tx_intervencionista: 'VENTILACION NO INVASIVA como primera linea si el pH es 7.35 o menor con PaCO2 mayor de 45 mmHg: en la exacerbacion de EPOC reduce intubacion, estancia y mortalidad, con una de las mejores evidencias de la medicina respiratoria. Intubacion si fracasa, si hay descenso del nivel de conciencia con incapacidad para proteger la via aerea, o si hay inestabilidad hemodinamica.',
      criterios_uci: 'pH menor de 7.25, deterioro pese a ventilacion no invasiva, alteracion del nivel de conciencia, inestabilidad hemodinamica o necesidad de intubacion. El paciente con ventilacion no invasiva por acidosis necesita un entorno con vigilancia estrecha y capacidad de intubar sin demora.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Gasometria de control 30 a 60 minutos despues de iniciar el oxigeno o la ventilacion no invasiva: la mejoria del pH en esa primera hora es el mejor predictor de exito. Vigilar el nivel de conciencia y el trabajo respiratorio.',
      seguimiento_ambulatorio: 'Revaluar a las 2 a 4 semanas la hipercapnia residual, que es lo que decide la ventilacion no invasiva domiciliaria, nunca con los valores del episodio agudo. Estudio de sue&#241;o si se sospecha hipoventilacion nocturna, y revision de sedantes.',
      pronostico: 'La hipercapnia persistente tras el alta identifica un grupo de alto riesgo, con mortalidad al a&#241;o cercana al 40% si no se trata. La respuesta del pH en la primera hora de ventilacion no invasiva es el mejor indicador precoz de evolucion.',
      algoritmo: ['Gasometria: PaCO2 mayor de 45 mmHg con pH menor de 7.35', 'Determinar si es AGUDA o CRONICA con el pH y el bicarbonato', 'Buscar la causa: estimulo central, bomba o espacio muerto', 'Retirar sedantes y revertir opioides si procede', 'Oxigeno controlado con objetivo del 88 al 92%', 'Tratar la causa: broncodilatadores, corticoide, antibiotico o lo que corresponda', 'Si pH 7.35 o menor: ventilacion no invasiva SIN demora', 'Gasometria de control en 30 a 60 minutos', 'Intubar si empeora, si baja el nivel de conciencia o si hay inestabilidad', 'Revaluar la hipercapnia a las 2 a 4 semanas del alta para la ventilacion domiciliaria']
    },
    {
      nombre: 'Sindrome de dificultad respiratoria aguda',
      color: '#8c3a34',
      definicion: 'Lesion alveolar difusa inflamatoria de inicio agudo, con opacidades bilaterales e hipoxemia no explicada solo por fallo cardiaco o sobrecarga de volumen. Se clasifica en leve, moderada y grave por la oxigenacion.',
      fisiopatologia: 'Una agresion directa (neumonia, aspiracion, contusion, inhalacion) o indirecta (sepsis, pancreatitis, politransfusion, traumatismo) activa una cascada inflamatoria que rompe la barrera alveolo-capilar. El alveolo se llena de un edema rico en proteinas, el surfactante se inactiva y aparecen colapso y consolidacion, sobre todo en las zonas dependientes. El pulmon resultante es peque&#241;o, rigido y HETEROGENEO: quedan zonas normales junto a zonas colapsadas, de modo que un volumen corriente normal para el tama&#241;o del paciente sobredistiende lo poco que queda aireado. De ahi el concepto de pulmon de bebe y la necesidad de calcular el volumen con el peso PREDICHO.',
      epidemiologia: 'Representa una proporcion importante de los ingresos en cuidados intensivos con ventilacion mecanica. La mortalidad global ronda el 35 al 45% y aumenta con la gravedad. Esta claramente infradiagnosticada: en estudios internacionales, una parte sustancial de los casos no se reconoce como tal a pie de cama, con lo que no se aplica la ventilacion protectora.',
      factores_riesgo: ['Neumonia, que es la causa mas frecuente', 'Sepsis de origen extrapulmonar', 'Aspiracion de contenido gastrico', 'Politraumatismo y contusion pulmonar', 'Pancreatitis aguda grave', 'Transfusion masiva de hemoderivados', 'Inhalacion de humo o de toxicos', 'Cirugia mayor, sobre todo toracica y cardiaca', 'Consumo de alcohol y tabaquismo, que aumentan la susceptibilidad', 'Casi ahogamiento y embolia grasa'],
      clinica: 'Disnea e hipoxemia progresivas en horas o dias tras el factor desencadenante, con taquipnea, trabajo respiratorio intenso y crepitantes bilaterales. La hipoxemia responde mal al oxigeno porque el mecanismo dominante es el cortocircuito. La ausencia de signos de congestion sistemica ayuda a separarla del edema cardiogenico, aunque ambos coexisten con frecuencia.',
      criterios_dx: 'Definicion de Berlin: inicio en la semana siguiente al factor conocido, opacidades bilaterales no explicadas del todo por derrame, atelectasia o nodulos, origen no explicado solo por fallo cardiaco o sobrecarga, e hipoxemia con PEEP de 5 o mas. La definicion global de 2023 a&#241;ade al paciente con alto flujo a 30 L/min o mas, la relacion SpO2/FiO2 de 315 o menos y la ecografia pulmonar. Ver la Figura 3 de Definicion.',
      laboratorio: 'Gasometria seriada con relacion PaO2/FiO2. Peptido natriuretico y troponina para valorar el componente cardiaco. Estudio microbiologico completo dirigido a la causa. Lactato y perfil de disfuncion organica.',
      imagen: 'Radiografia con opacidades bilaterales. Tomografia que muestra la heterogeneidad caracteristica, util para descartar alternativas y complicaciones. Ecografia pulmonar con lineas B difusas y consolidaciones subpleurales, valida como imagen para la definicion global. Ecocardiografia para excluir el origen cardiogenico y valorar el ventriculo derecho.',
      complementarios: 'Monitorizacion de mecanica respiratoria: presion meseta, presion de distension y distensibilidad. Valoracion diaria de la indicacion de decubito prono. Balance hidrico estricto una vez resuelto el choque.',
      dx_diferencial: 'Edema pulmonar cardiogenico (el diferencial mas frecuente), neumonia bilateral extensa, hemorragia alveolar difusa, neumonia organizada aguda, neumonitis por hipersensibilidad aguda, toxicidad por farmacos, neumonia eosinofila aguda y exacerbacion aguda de una enfermedad intersticial.',
      tx_medico: 'Tratar la CAUSA, que es la unica intervencion realmente curativa. Balance hidrico conservador una vez resuelto el choque, que acorta la ventilacion y la estancia. Profilaxis antitrombotica, nutricion adecuada, prevencion de la neumonia asociada a la ventilacion y sedacion ligera con movilizacion precoz.',
      tx_farmacologico: 'No hay tratamiento farmacologico especifico. El corticoide tiene datos favorables en algunos ensayos y heterogeneos en conjunto, y se individualiza. El oxido nitrico inhalado mejora la oxigenacion sin mejorar la supervivencia y queda como rescate. El bloqueo neuromuscular se reserva a la forma grave con asincronia o presiones inasumibles.',
      tx_intervencionista: 'Ventilacion protectora: volumen corriente de 4 a 8 mL/kg de peso PREDICHO, meseta de 30 cmH2O o menos y presion de distension menor de 15. PEEP titulada, mas alta en la forma moderada y grave. DECUBITO PRONO 16 horas o mas al dia si la relacion PaO2/FiO2 es menor de 150. Oxigenacion por membrana extracorporea como rescate en centro experto. La ventilacion oscilatoria de alta frecuencia esta DESACONSEJADA porque aumento la mortalidad.',
      criterios_uci: 'Todos los pacientes con SDRA requieren cuidados intensivos. La forma moderada y grave exige ademas capacidad de pronar y valoracion precoz para derivacion a un centro con oxigenacion extracorporea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional. La fibrosis residual grave que no se recupera puede plantear la valoracion a largo plazo en pacientes seleccionados.',
      seguimiento_hospitalario: 'Revaluacion diaria de la mecanica respiratoria y de la indicacion de prono. Vigilar el neumotorax y el neumomediastino, la disfuncion del ventriculo derecho y la infeccion nosocomial. Interrumpir la sedacion a diario y movilizar en cuanto sea posible.',
      seguimiento_ambulatorio: 'Valoracion funcional respiratoria a los 3 y 6 meses, que suele recuperarse bastante. Cribado sistematico de debilidad, deterioro cognitivo, ansiedad, depresion y estres postraumatico, que son las secuelas dominantes a largo plazo. Rehabilitacion multidisciplinar.',
      pronostico: 'Mortalidad global del 35 al 45%, mayor cuanto peor es la oxigenacion y mas organos fallan. La causa de muerte suele ser la disfuncion multiorganica y no la hipoxemia refractaria. Los supervivientes recuperan funcion pulmonar razonable pero arrastran limitacion fisica y neuropsicologica durante a&#241;os.',
      algoritmo: ['Identificar el factor desencadenante y el inicio en menos de una semana', 'Confirmar opacidades bilaterales por radiografia, tomografia o ecografia', 'Descartar que el edema se explique solo por causa cardiaca o sobrecarga', 'Clasificar la gravedad con PaO2/FiO2 o con SpO2/FiO2', 'Iniciar ventilacion protectora: 4 a 8 mL/kg de peso PREDICHO', 'Meseta de 30 cmH2O o menos y presion de distension menor de 15', 'Titular la PEEP segun la gravedad', 'Si la PaO2/FiO2 es menor de 150: decubito prono 16 horas o mas al dia', 'Balance conservador de fluidos una vez resuelto el choque', 'Tratar la causa y contactar pronto con un centro de oxigenacion extracorporea si es refractaria']
    },
    {
      nombre: 'SDRA grave y terapias de rescate',
      color: '#7a1f3d',
      definicion: 'SDRA con relacion PaO2/FiO2 de 100 o menos pese a ventilacion optimizada, o con hipercapnia y acidosis que no se corrigen sin abandonar la ventilacion protectora. Es el escenario en el que entran las terapias de rescate.',
      fisiopatologia: 'Cuando el pulmon aireado se reduce mucho, mantener el intercambio exige presiones y volumenes que lesionan lo que queda: ese es el circulo de la lesion inducida por el ventilador. Ademas, la hipoxemia, la hipercapnia y las presiones altas aumentan la resistencia vascular pulmonar y sobrecargan el ventriculo derecho, que puede claudicar y producir el llamado cor pulmonale agudo. Las terapias de rescate buscan romper ese circulo: el decubito prono homogeneiza la ventilacion y descarga el ventriculo derecho, y la oxigenacion extracorporea permite ventilar con presiones minimas mientras el pulmon se recupera.',
      epidemiologia: 'La forma grave representa alrededor de la cuarta parte de los casos de SDRA y concentra la mortalidad. El decubito prono es la unica de las terapias de rescate con reduccion de mortalidad demostrada de forma robusta, y sin embargo sigue infrautilizado por razones logisticas y de formacion, no de evidencia.',
      factores_riesgo: ['SDRA de causa pulmonar directa extensa', 'Sepsis y disfuncion multiorganica acompa&#241;ante', 'Sobrecarga de volumen mantenida', 'Ventilacion con volumen corriente o presiones excesivas', 'Retraso en la intubacion con esfuerzos respiratorios intensos previos', 'Obesidad, que dificulta la mecanica y el reclutamiento', 'Disfuncion previa del ventriculo derecho', 'Neumotorax o barotrauma establecido', 'Inmunodepresion', 'Retraso en la indicacion del decubito prono'],
      clinica: 'Hipoxemia refractaria pese a fraccion inspirada alta y PEEP elevada, con presiones de la via aerea altas y distensibilidad muy baja. Puede a&#241;adirse hipotension por sobrecarga del ventriculo derecho, con ingurgitacion yugular y signos ecocardiograficos de dilatacion y de septo paradojico.',
      criterios_dx: 'PaO2/FiO2 de 100 o menos con PEEP de 5 o mas. Para plantear la oxigenacion extracorporea se usan los criterios del ensayo EOLIA: relacion menor de 50 durante mas de 3 horas, menor de 80 durante mas de 6 horas, o pH menor de 7.25 con PaCO2 de 60 mmHg o mas durante mas de 6 horas, siempre pese a ventilacion optimizada.',
      laboratorio: 'Gasometrias seriadas. Lactato y marcadores de disfuncion organica. Peptido natriuretico y troponina como marcadores de sobrecarga del ventriculo derecho. Coagulacion y hemograma seriados si se plantea circuito extracorporeo.',
      imagen: 'Ecocardiografia repetida para vigilar el ventriculo derecho, que es lo que decide parte del manejo. Tomografia si se sospecha complicacion o si hay que valorar el potencial de reclutamiento. Radiografia diaria para detectar neumotorax, que en este contexto puede ser mortal.',
      complementarios: 'Monitorizacion detallada de mecanica: meseta, presion de distension, distensibilidad y, cuando se dispone, presion transpulmonar con cateter esofagico. Valoracion de la respuesta al prono en cada sesion.',
      dx_diferencial: 'Antes de etiquetar de refractaria una SDRA hay que descartar causas corregibles del deterioro: neumotorax, obstruccion del tubo, atelectasia masiva, sobrecarga de volumen, embolia pulmonar, derrame significativo, asincronia grave y auto-PEEP.',
      tx_medico: 'Optimizar de verdad antes de escalar: comprobar la ventilacion protectora, el balance hidrico, la sedacion y la ausencia de causas corregibles. Es la parte del algoritmo que mas se salta y la que mas pacientes rescata sin ninguna terapia adicional.',
      tx_farmacologico: 'Bloqueo neuromuscular en las primeras 48 horas de la forma grave con asincronia o presiones inasumibles; el beneficio observado en un ensayo temprano no se confirmo en otro posterior con sedacion mas ligera, de modo que se usa de forma selectiva. Corticoide individualizado. Oxido nitrico inhalado o prostaciclina nebulizada como rescate transitorio de la oxigenacion o de la sobrecarga derecha.',
      tx_intervencionista: 'DECUBITO PRONO 16 horas o mas al dia si la PaO2/FiO2 es menor de 150: es la medida de rescate con mejor evidencia y redujo la mortalidad de forma marcada. Maniobras de reclutamiento con prudencia, porque las agresivas se asociaron a da&#241;o. OXIGENACION POR MEMBRANA EXTRACORPOREA venovenosa en centro experto, con derivacion PRECOZ: trasladar tarde a un paciente ya en fallo multiorganico anula el beneficio.',
      criterios_uci: 'Por definicion. Precisa una unidad con capacidad de pronar de forma segura, monitorizacion avanzada y contacto establecido con un centro de oxigenacion extracorporea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional y solo tras la fase aguda, en la fibrosis residual grave e irreversible de pacientes seleccionados.',
      seguimiento_hospitalario: 'Vigilancia estrecha de complicaciones del prono (ulceras por presion, edema facial, extubacion accidental, perdida de accesos) y del circuito extracorporeo (sangrado, hemolisis, trombosis, infeccion). Revaluacion diaria de la posibilidad de desescalar.',
      seguimiento_ambulatorio: 'Seguimiento prolongado por la alta carga de secuelas fisicas y neuropsicologicas de este grupo, que es el que peor lo pasa despues.',
      pronostico: 'Mortalidad elevada, aunque mejor de lo que se asumia hace una decada gracias al prono y a la ventilacion protectora. La derivacion precoz a un centro con oxigenacion extracorporea, antes del fallo multiorganico, es uno de los factores modificables mas importantes.',
      algoritmo: ['Confirmar que la ventilacion protectora esta realmente aplicada', 'Descartar causas corregibles: neumotorax, tubo obstruido, atelectasia, sobrecarga', 'Optimizar sedacion y balance hidrico', 'Si la PaO2/FiO2 es menor de 150: DECUBITO PRONO 16 horas o mas', 'Valorar bloqueo neuromuscular si hay asincronia o presiones inasumibles', 'Titular la PEEP y evitar maniobras de reclutamiento agresivas', 'Vigilar el ventriculo derecho con ecocardiografia', 'Aplicar los criterios EOLIA para valorar oxigenacion extracorporea', 'Contactar PRONTO con el centro de referencia, antes del fallo multiorganico', 'No usar ventilacion oscilatoria de alta frecuencia']
    },
    {
      nombre: 'Fracaso del soporte no invasivo y lesion autoinfligida',
      color: '#8a6a1f',
      definicion: 'Deterioro del paciente tratado con canula de alto flujo o ventilacion no invasiva, con retraso en la intubacion y lesion pulmonar producida por los propios esfuerzos respiratorios del paciente, conocida como lesion pulmonar autoinfligida.',
      fisiopatologia: 'Un paciente hipoxemico con estimulo respiratorio intenso genera presiones pleurales muy negativas. Esas presiones producen volumenes corrientes grandes, aumentan la presion transpulmonar y desplazan gas entre zonas del pulmon con distinta constante de tiempo, lo que lesiona el parenquima exactamente igual que un ventilador mal ajustado. El efecto se agrava porque la presion negativa aumenta el retorno venoso y la presion hidrostatica capilar, favoreciendo mas edema. Todo ello ocurre mientras la saturacion puede parecer aceptable.',
      epidemiologia: 'El fracaso de la ventilacion no invasiva en la insuficiencia respiratoria hipoxemica de novo es alto y se asocia de forma consistente a mayor mortalidad que la intubacion inicial. La ventilacion no invasiva mantenida mas alla de unas horas sin mejoria clara es uno de los patrones de mal pronostico mas reconocibles.',
      factores_riesgo: ['Insuficiencia respiratoria hipoxemica de novo (neumonia, SDRA)', 'Volumen corriente espirado alto durante el soporte no invasivo', 'Frecuencia respiratoria mantenida por encima de 30', 'Indice ROX bajo o en descenso', 'Fraccion inspirada alta necesaria para mantener la saturacion', 'Disfuncion organica acompa&#241;ante', 'Ausencia de mejoria en las primeras 1 a 2 horas de soporte', 'Uso de ventilacion no invasiva fuera de un entorno vigilado', 'Sedacion para tolerar la interfase', 'Falta de un limite de tiempo explicito para reevaluar'],
      clinica: 'Persistencia o aumento del trabajo respiratorio pese al soporte, taquipnea mantenida, uso de musculatura accesoria, volumen corriente espirado alto, intolerancia a la interfase, agitacion y, finalmente, deterioro del nivel de conciencia. La saturacion puede mantenerse aceptable hasta poco antes del colapso.',
      criterios_dx: 'No hay un criterio unico. Se reconoce por el conjunto: ausencia de mejoria del trabajo respiratorio y de la oxigenacion en las primeras 1 a 2 horas, indice ROX bajo o descendente, volumen corriente espirado alto y frecuencia respiratoria mantenida. La saturacion aislada NO sirve para juzgarlo.',
      laboratorio: 'Gasometrias seriadas para valorar la evolucion del intercambio y la aparicion de hipercapnia por agotamiento. Lactato como marcador de deterioro sistemico.',
      imagen: 'Radiografia o ecografia pulmonar seriada para valorar la progresion de los infiltrados y descartar complicaciones como el neumotorax o el neumomediastino, que aparecen precisamente en este contexto.',
      complementarios: 'Medida del volumen corriente espirado en los dispositivos que lo permiten, calculo del indice ROX de forma seriada, y valoracion estructurada del trabajo respiratorio a pie de cama en lugar de mirar solo el monitor.',
      dx_diferencial: 'Progresion de la enfermedad de base, aparicion de una complicacion (neumotorax, embolia, sobreinfeccion), edema pulmonar sobrea&#241;adido y delirium con agitacion, que puede confundirse con el aumento del trabajo respiratorio.',
      tx_medico: 'Fijar de entrada un LIMITE DE TIEMPO explicito para la prueba de soporte no invasivo y unos criterios objetivos de exito. Optimizar la causa. Evitar la sedacion para tolerar la mascarilla, que enmascara el deterioro. Vigilar en un entorno con capacidad de intubar sin demora.',
      tx_farmacologico: 'El de la causa. No hay farmaco que prevenga la lesion autoinfligida; lo que la limita es reducir el estimulo respiratorio tratando la causa y, cuando procede, asumiendo el control de la ventilacion.',
      tx_intervencionista: 'INTUBACION sin mas demora cuando no hay mejoria clara en el plazo fijado, cuando el indice ROX es bajo o descendente, cuando el trabajo respiratorio se mantiene alto o cuando aparecen inestabilidad o deterioro de la conciencia. Una vez intubado, ventilacion protectora desde el primer minuto.',
      criterios_uci: 'Todo paciente con soporte no invasivo por insuficiencia respiratoria aguda debe estar en un entorno con vigilancia continua y con posibilidad de intubacion inmediata. Usarlo en planta convencional sin esas condiciones es una de las causas evitables de mala evolucion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion horaria las primeras horas con criterios objetivos: frecuencia respiratoria, trabajo respiratorio, volumen corriente, indice ROX y gasometria. Documentar la decision y el plazo, para que el relevo sepa cuando actuar.',
      seguimiento_ambulatorio: 'Sin particularidades propias; el seguimiento es el de la enfermedad causal y el de las secuelas del ingreso.',
      pronostico: 'El retraso de la intubacion en el paciente que ya estaba fracasando se asocia de forma consistente a mayor mortalidad. Es uno de los pocos factores completamente modificables del tema, y depende solo de la organizacion y de la decision clinica.',
      algoritmo: ['Elegir el soporte segun el tipo: alto flujo en la hipoxemia pura, ventilacion no invasiva en la hipercapnia y en el edema', 'Fijar un LIMITE DE TIEMPO y criterios objetivos de exito antes de empezar', 'Vigilar en un entorno con capacidad de intubar de inmediato', 'Reevaluar a la hora: trabajo respiratorio, frecuencia, volumen corriente e indice ROX', 'No juzgar la respuesta solo por la saturacion', 'Evitar sedar para tolerar la interfase', 'Si el ROX es bajo o desciende, o el trabajo sigue alto: intubar', 'No repetir pruebas sucesivas de soporte no invasivo en un paciente que ya fracaso', 'Ventilacion protectora desde el primer minuto tras la intubacion', 'Documentar la decision y el plazo para el equipo de guardia']
    },
    {
      nombre: 'Secuelas y sindrome post-cuidados intensivos',
      color: '#5b4a86',
      definicion: 'Conjunto de alteraciones fisicas, cognitivas y psicologicas que persisten tras el alta de cuidados intensivos, y que en los supervivientes de una SDRA pueden durar a&#241;os. Afecta tambien a las familias.',
      fisiopatologia: 'La inmovilidad, la inflamacion sistemica, la hiperglucemia, los corticoides, los bloqueantes neuromusculares y la propia sepsis producen una miopatia y una polineuropatia del paciente critico. La sedacion profunda, el delirium, la privacion de sue&#241;o y la hipoxemia contribuyen al deterioro cognitivo. Y la experiencia del ingreso, con recuerdos delirantes frecuentes, explica la ansiedad, la depresion y el estres postraumatico posteriores.',
      epidemiologia: 'Una proporcion muy alta de los supervivientes presenta alguna de las tres dimensiones al a&#241;o. En la cohorte clasica de supervivientes de SDRA seguida durante 5 a&#241;os, la limitacion dominante no fue la funcion pulmonar, que se recupero bastante, sino la debilidad muscular y la limitacion en la distancia recorrida, junto con el deterioro psicologico.',
      factores_riesgo: ['Ventilacion mecanica prolongada', 'Sedacion profunda y delirium durante el ingreso', 'Inmovilidad y ausencia de rehabilitacion precoz', 'Sepsis y disfuncion multiorganica', 'Hiperglucemia mantenida', 'Bloqueo neuromuscular y corticoide a dosis altas', 'Edad avanzada y fragilidad previa', 'Antecedentes de ansiedad o depresion', 'Bajo apoyo social', 'Estancia prolongada en cuidados intensivos'],
      clinica: 'Debilidad muscular proximal y simetrica con dificultad para caminar y subir escaleras, fatiga, disnea de esfuerzo, perdida de peso, alteraciones de la memoria y de la atencion, ansiedad, animo bajo, insomnio, pesadillas y recuerdos intrusivos. En la familia, ansiedad, depresion y duelo complicado.',
      criterios_dx: 'Clinico, mediante cribado estructurado en la revision tras el alta. Sin buscarlo activamente se pasa por alto, porque el paciente atribuye los sintomas a "lo mal que lo paso" y el medico se centra en la funcion pulmonar.',
      laboratorio: 'Creatincinasa y estudio metabolico basico si hay debilidad marcada. Estudio de anemia y de deficits nutricionales, frecuentes tras el ingreso prolongado.',
      imagen: 'Radiografia o tomografia de control en el que tuvo SDRA extensa, para valorar la fibrosis residual. Suele haber menos secuela radiologica de la que hace temer el ingreso.',
      complementarios: 'Pruebas de funcion respiratoria con DLCO a los 3 y 6 meses. Marcha de 6 minutos como medida funcional global. Cuestionarios de cribado de ansiedad, depresion y estres postraumatico. Valoracion cognitiva breve. Electromiografia si la debilidad es marcada o asimetrica.',
      dx_diferencial: 'Enfermedad neuromuscular previa no diagnosticada, miopatia por corticoides, deficits nutricionales, hipotiroidismo, depresion mayor primaria, deterioro cognitivo previo y secuelas especificas de la enfermedad causal.',
      tx_medico: 'La mejor intervencion es preventiva y ocurre durante el ingreso: sedacion ligera con interrupcion diaria, prevencion y tratamiento del delirium, movilizacion precoz, higiene del sue&#241;o, control glucemico, nutricion adecuada y participacion de la familia. Despues del alta, rehabilitacion multidisciplinar y consultas de seguimiento especificas.',
      tx_farmacologico: 'Tratamiento de la ansiedad, la depresion y el estres postraumatico cuando estan indicados. Evitar las benzodiacepinas de mantenimiento, que empeoran la cognicion y el sue&#241;o a largo plazo. Suplementacion nutricional dirigida.',
      tx_intervencionista: 'No aplica de forma especifica. Los diarios de cuidados intensivos escritos por el equipo y la familia han mostrado reducir el estres postraumatico y ayudan a reconstruir el relato del ingreso.',
      criterios_uci: 'No aplica; es la fase posterior.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica salvo fibrosis residual grave excepcional.',
      seguimiento_hospitalario: 'Iniciar la rehabilitacion antes del alta de la unidad, no despues. Informar al paciente y a la familia de lo que cabe esperar en los meses siguientes, que reduce la angustia y mejora la adherencia al seguimiento.',
      seguimiento_ambulatorio: 'Revision estructurada al mes y a los 3 y 6 meses, con cribado de las tres dimensiones. Rehabilitacion fisica y respiratoria. Apoyo psicologico y valoracion de la reincorporacion laboral, que se retrasa mucho mas de lo que el paciente espera.',
      pronostico: 'La funcion pulmonar se recupera en buena medida en el primer a&#241;o. La limitacion fisica y el deterioro neuropsicologico pueden persistir 5 a&#241;os o mas, y son los que determinan la calidad de vida y el regreso al trabajo.',
      algoritmo: ['Prevenir durante el ingreso: sedacion ligera, movilizacion precoz y control del delirium', 'Involucrar a la familia y considerar un diario del ingreso', 'Iniciar rehabilitacion antes del alta de la unidad', 'Informar al paciente y a la familia de lo que cabe esperar', 'Revision estructurada al mes y a los 3 y 6 meses', 'Cribar de forma activa debilidad, cognicion y estado de animo', 'Pruebas de funcion respiratoria con DLCO y marcha de 6 minutos', 'Rehabilitacion fisica y respiratoria multidisciplinar', 'Tratar ansiedad, depresion y estres postraumatico, evitando benzodiacepinas de mantenimiento', 'Planificar la reincorporacion laboral con expectativas realistas']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En la insuficiencia respiratoria aguda casi todo se juega en las primeras horas, y los errores son siempre los mismos: no identificar el mecanismo, subir la fraccion inspirada ante un cortocircuito, juzgar el soporte no invasivo solo por la saturacion, y retrasar la intubacion de un paciente que ya estaba fracasando. Lo que sigue es la lista de comprobacion.',
    parametros: ['Gasometria arterial en todo paciente con sospecha: la pulsioximetria no dice nada de la PaCO2 ni del pH', 'Calcular el gradiente alveolo-arterial y compararlo con el esperado para la edad, no con un numero fijo', 'Comprobar si la PaO2 mejora al subir la fraccion inspirada: si no mejora, es cortocircuito', 'Ante cortocircuito, abrir alveolos (PEEP, prono) en vez de subir la fraccion inspirada', 'Objetivo de saturacion del 92 al 96%, y del 88 al 92% si hay riesgo de hipercapnia', 'En la hipercapnia, distinguir aguda de cronica con el pH y el bicarbonato antes de decidir nada', 'Ventilacion no invasiva de primera linea si pH 7.35 o menor con PaCO2 mayor de 45 mmHg', 'Canula de alto flujo como soporte preferente en la hipoxemia pura, vigilada con el indice ROX', 'Fijar un limite de tiempo explicito a cada prueba de soporte no invasivo y documentarlo', 'Vigilar volumen corriente, frecuencia y trabajo respiratorio, no solo la saturacion', 'En la SDRA: volumen corriente de 4 a 8 mL/kg de peso PREDICHO, meseta 30 o menos y presion de distension menor de 15', 'Decubito prono 16 horas o mas si la PaO2/FiO2 es menor de 150, y contacto precoz con el centro de oxigenacion extracorporea si es refractaria'],
    criterios_uci_general: 'Necesidad de soporte no invasivo por insuficiencia respiratoria aguda (que exige entorno con vigilancia continua y posibilidad de intubar de inmediato), trabajo respiratorio importante, hipoxemia que requiere fraccion inspirada alta, hipercapnia con acidosis, deterioro del nivel de conciencia o inestabilidad hemodinamica. Toda SDRA es criterio de cuidados intensivos.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica en la fase aguda. Solo de forma excepcional se plantea a largo plazo ante una fibrosis residual grave e irreversible en un paciente seleccionado.',
    prevencion: 'Primaria: vacunacion, control de la enfermedad respiratoria cronica, prevencion de la aspiracion y del traumatismo, y uso prudente de sedantes y opioides. Secundaria: reconocer pronto el deterioro con la frecuencia respiratoria, que es la constante que antes se altera y la que menos se registra, y aplicar sistemas de alerta precoz. Terciaria, durante el ingreso: ventilacion protectora en TODO paciente ventilado y no solo en la SDRA, balance hidrico conservador, sedacion ligera con interrupcion diaria, movilizacion precoz, prevencion del delirium y de la neumonia asociada a la ventilacion, y planificacion del seguimiento de secuelas antes del alta.'
  }
};

export const compCites = {
  'Insuficiencia respiratoria aguda hipoxemica': [9, 11, 12],
  'Insuficiencia respiratoria aguda hipercapnica': [11],
  'Sindrome de dificultad respiratoria aguda': [1, 2, 3, 4, 5, 7, 13],
  'SDRA grave y terapias de rescate': [6, 8, 14, 15, 16],
  'Fracaso del soporte no invasivo y lesion autoinfligida': [10, 12, 9],
  'Secuelas y sindrome post-cuidados intensivos': [17, 18]
};
export const estigmasTitulo = 'Signos de la insuficiencia respiratoria aguda, en orden creciente de gravedad';
export const estigmas = [
  { s: 'Taquipnea', p: 'El primer signo', photo: null, desc: 'Es la constante que antes se altera y la que peor se registra en las graficas. Una frecuencia respiratoria mantenida por encima de 25 a 30 identifica al paciente que se va a deteriorar horas antes que la saturacion, y por eso todos los sistemas de alerta precoz la incluyen.' },
  { s: 'Uso de musculatura accesoria y tiraje', p: 'Muy frecuente', photo: null, desc: 'Esternocleidomastoideos y escalenos visibles, con tiraje supraesternal e intercostal. Traduce que la carga supera la capacidad del musculo respiratorio y es uno de los criterios para iniciar soporte antes incluso de tener la gasometria.' },
  { s: 'Incapacidad para completar frases', p: 'Signo de gravedad', photo: null, desc: 'Se explora con una pregunta abierta y escuchando. Si el paciente contesta con palabras sueltas, el trabajo respiratorio ya consume casi toda su reserva. No necesita ningun aparato y ordena la conducta de inmediato.' },
  { s: 'Cianosis central', p: 'Tardio y poco fiable', photo: null, desc: 'Requiere al menos 5 g/dL de hemoglobina reducida: falta en el anemico pese a hipoxemia grave y es llamativa en el poliglobulico con hipoxemia moderada. Nunca sustituye a la pulsioximetria ni a la gasometria.' },
  { s: 'Agitacion y confusion', p: '~30%', photo: null, desc: 'Son manifestaciones NEUROLOGICAS de la hipoxemia y se confunden con delirium o con un cuadro psiquiatrico. El error con consecuencias es responder con sedantes a un paciente que lo que tiene es hipoxemia.' },
  { s: 'Sudoracion e hipertension', p: 'Frecuente en la hipercapnia', photo: null, desc: 'La hipercapnia produce vasodilatacion cutanea, sudoracion, ojos rojos y aumento de la presion arterial por descarga adrenergica. Junto con la cefalea matutina son los primeros signos de la retencion de dioxido de carbono.' },
  { s: 'Asterixis', p: 'En hipercapnia establecida', photo: null, desc: 'El mismo temblor aleteante de la encefalopatia hepatica, aqui por narcosis de dioxido de carbono. Su aparicion en un paciente con enfermedad respiratoria obliga a gasometria inmediata y a revisar el flujo de oxigeno.' },
  { s: 'Respiracion paradojica abdominal', p: 'Signo de alarma', photo: null, desc: 'El abdomen se hunde en la inspiracion en lugar de expandirse, porque el diafragma agotado es arrastrado hacia arriba. Indica fatiga diafragmatica y fracaso ventilatorio inminente: obliga a asegurar la via aerea sin esperar mas gasometrias.' },
  { s: 'Volumen corriente espirado alto con alto flujo o ventilacion no invasiva', p: 'Marcador de riesgo', photo: null, desc: 'Volumenes por encima de 9 a 10 mL/kg de peso predicho con frecuencia alta indican esfuerzos intensos y riesgo de lesion pulmonar autoinfligida, aunque la saturacion sea aceptable. Es el dato que separa al paciente que mejora del que se esta lesionando.' },
  { s: 'Descenso del nivel de conciencia', p: 'Indicacion de intubar', photo: null, desc: 'Traduce hipoxemia grave, hipercapnia o agotamiento. En un paciente con soporte no invasivo es una indicacion clara de intubacion, porque a&#241;ade la incapacidad de proteger la via aerea al fracaso ventilatorio.' },
  { s: 'Bradipnea o bradicardia en plena insuficiencia', p: 'Preterminal', photo: null, desc: 'La disminucion de la frecuencia respiratoria o cardiaca en un paciente que estaba taquipneico y taquicardico NO es mejoria: anuncia la parada. Es el equivalente al torax silente del asma.' },
  { s: 'Ingurgitacion yugular con hipotension en el ventilado', p: 'Sobrecarga derecha', photo: null, desc: 'Sugiere cor pulmonale agudo por hipertension pulmonar en la SDRA grave, o auto-PEEP en el obstructivo, o neumotorax a tension. Los tres se tratan de forma distinta, y la ecografia a pie de cama los separa en minutos.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion por tipo gasometrico': [11, 12],
  'Gradiente alveolo-arterial de oxigeno (calculadora disponible)': [12],
  'Hipercapnia aguda frente a cronica (calculadora disponible)': [11],
  'Definicion de Berlin de la SDRA': [1],
  'Definicion global de la SDRA (2023)': [2, 3],
  'Indice ROX': [10, 9],
  'Criterios de oxigenacion por membrana extracorporea (calculadora disponible)': [8, 4]
};
export const escalaCalc = {
  'Gradiente alveolo-arterial de oxigeno (calculadora disponible)': 'gradiente-aa',
  'Hipercapnia aguda frente a cronica (calculadora disponible)': 'hipercapnia-temporal',
  'Criterios de oxigenacion por membrana extracorporea (calculadora disponible)': 'criterios-ecmo'
};
export const compGroups = [
  { name: 'Los dos tipos de fallo', items: ['Insuficiencia respiratoria aguda hipoxemica', 'Insuficiencia respiratoria aguda hipercapnica'] },
  { name: 'SDRA', items: ['Sindrome de dificultad respiratoria aguda', 'SDRA grave y terapias de rescate'] },
  { name: 'Errores y consecuencias', items: ['Fracaso del soporte no invasivo y lesion autoinfligida', 'Secuelas y sindrome post-cuidados intensivos'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son los dos tipos de fallo, el del intercambio y el de la bomba, que se distinguen con la gasometria y exigen soportes distintos. Las dos siguientes son la SDRA y su forma grave, donde entran el decubito prono y la oxigenacion extracorporea. Las dos ultimas recogen lo que ocurre cuando algo se hace tarde: el fracaso del soporte no invasivo con la lesion que el propio paciente se produce al respirar, y las secuelas fisicas y neuropsicologicas que arrastran los supervivientes durante a&#241;os.';
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
      { title: 'Gradiente alveolo-arterial', sub: 'Edad entre 4 mas 4', color: '#8a3f5c', target: 'clasificacion' },
      { title: 'Responde al oxigeno?', sub: 'Si no responde, es cortocircuito', color: '#8c3a34', target: 'definicion' },
      { title: 'Cortocircuito', sub: 'Abrir alveolos, no subir la FiO2', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hipoventilacion', sub: 'PaCO2 alta con gradiente normal', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'QUE SOPORTE', sub: 'Y cuando dejar de esperar', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Alto flujo', sub: 'Hipoxemia pura, vigilado con ROX', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Ventilacion no invasiva', sub: 'EPOC con acidosis y edema', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Lesion autoinfligida', sub: 'Satura bien y se esta da&#241;ando', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Intubar a tiempo', sub: 'El error mas caro es esperar', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'SDRA', sub: 'Un sindrome, no una enfermedad', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Berlin y definicion global', sub: 'SpO2/FiO2 y alto flujo', color: '#2e6b7a', target: 'clasificacion' },
      { title: 'Peso PREDICHO', sub: '4 a 8 mL/kg, nunca peso real', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Presion de distension', sub: 'Menor de 15 cmH2O', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Prono si PaO2/FiO2 menor de 150', sub: '16 horas o mas al dia', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [11, 12], no_invasivos: [2, 10, 12], imagen: [1, 2, 3] };
export const clasificacionCite = [1, 2, 3, 8, 10];
export const seguimientoCite = [3, 4, 5, 6];
