// topics/epoc/content.js: EPOC (enfermedad pulmonar obstructiva cronica), estable y exacerbada.
// Cubre el item "EPOC estable y exacerbacion" del cluster Enfermedad respiratoria cronica
// (bloque III, Neumologia) del temario. Primero de los cinco temas troncales de Neumologia.
//
// Fuentes principales: informe GOLD 2026; propuesta de Roma para la definicion y la gravedad de
// la exacerbacion; criterios de Anthonisen; escala DECAF; indice BODE; guias ERS/ATS de
// exacerbacion y de ventilacion no invasiva; ensayos NOTT, MRC, LOTT, HOT-HMV, REDUCE, IMPACT,
// ETHOS, BOREAS y NETT; y la declaracion de la ERS sobre deficiencia de alfa-1-antitripsina.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (estable, exacerbacion) + 6 fichas (EPOC estable, exacerbacion,
// insuficiencia respiratoria cronica y oxigenoterapia, hipertension pulmonar y cor pulmonale,
// deficiencia de alfa-1-antitripsina, comorbilidades y complicaciones del tratamiento).
// 4 calculadoras, 3 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'epoc',
  titulo: 'EPOC',
  subtitulo: 'Módulo 48 · Medicina Interna',
  accent: '#2f5d6e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const curvaHtml = `
<svg viewBox="0 0 660 345" role="img" aria-labelledby="epoc-curva-t epoc-curva-d" style="width:100%;height:auto;">
  <title id="epoc-curva-t">Curva flujo-volumen espiratoria: normal, obstructiva y restrictiva</title>
  <desc id="epoc-curva-d">En la EPOC el pico de flujo espiratorio es bajo y la rama descendente se hace cóncava hacia el eje de volumen, con el volumen residual desplazado a la derecha; en la restricción la curva es estrecha y desplazada, con flujos conservados para el volumen que mueve.</desc>

  <rect x="20" y="4" width="620" height="34" rx="6" fill="none" stroke="var(--line)"/>
  <text x="32" y="19" font-size="11" fill="var(--ink)">La obstrucción se define por el cociente <tspan font-weight="700">FEV1/FVC menor de 0.70 POSBRONCODILATADOR</tspan>.</text>
  <text x="32" y="33" font-size="11" fill="var(--ink-dim)">La forma de la curva dice el patrón; el cociente lo confirma.</text>

  <line x1="70" y1="290" x2="435" y2="290" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="70" y1="290" x2="70" y2="55" stroke="var(--line)" stroke-width="1.5"/>
  <text x="70" y="313" font-size="10.5" fill="var(--ink-dim)">TLC</text>
  <text x="410" y="313" font-size="10.5" fill="var(--ink-dim)">RV</text>
  <text x="150" y="313" font-size="10.5" fill="var(--ink-dim)">Volumen espirado (de TLC a RV)</text>
  <text x="14" y="175" font-size="10.5" fill="var(--ink-dim)" transform="rotate(-90 20 175)">Flujo espiratorio</text>

  <path d="M 90 290 L 130 75 L 340 290" fill="none" stroke="var(--ink-dim)" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="130" cy="75" r="3.5" fill="var(--ink-dim)"/>
  <path d="M 90 290 L 125 170 C 165 246, 230 272, 428 286" fill="none" stroke="#2f5d6e" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="125" cy="170" r="3.5" fill="#2f5d6e"/>
  <path d="M 250 290 L 280 116 L 370 290" fill="none" stroke="#5b4a86" stroke-width="2.2" stroke-linejoin="round" stroke-dasharray="6 4"/>

  <line x1="452" y1="92" x2="484" y2="92" stroke="var(--ink-dim)" stroke-width="2.5"/>
  <text x="492" y="96" font-size="11.5" fill="var(--ink-dim)" font-weight="600">Normal</text>
  <text x="452" y="112" font-size="10" fill="var(--ink-dim)">Pico de flujo alto y rama</text>
  <text x="452" y="125" font-size="10" fill="var(--ink-dim)">descendente rectilinea.</text>

  <line x1="452" y1="162" x2="484" y2="162" stroke="#2f5d6e" stroke-width="3"/>
  <text x="492" y="166" font-size="11.5" fill="#2f5d6e" font-weight="600">EPOC (obstructiva)</text>
  <text x="452" y="182" font-size="10" fill="var(--ink-dim)">Pico bajo y rama descendente</text>
  <text x="452" y="195" font-size="10" fill="var(--ink-dim)">CÓNCAVA, arrastrada sobre el eje.</text>
  <text x="452" y="208" font-size="10" fill="var(--ink-dim)">RV desplazado a la derecha:</text>
  <text x="452" y="221" font-size="10" fill="var(--ink-dim)">atrapamiento aéreo.</text>

  <line x1="452" y1="252" x2="484" y2="252" stroke="#5b4a86" stroke-width="2.2" stroke-dasharray="6 4"/>
  <text x="492" y="256" font-size="11.5" fill="#5b4a86" font-weight="600">Restrictiva</text>
  <text x="452" y="272" font-size="10" fill="var(--ink-dim)">Curva estrecha y desplazada,</text>
  <text x="452" y="285" font-size="10" fill="var(--ink-dim)">con flujos conservados</text>
  <text x="452" y="298" font-size="10" fill="var(--ink-dim)">para el volumen que mueve.</text>
</svg>
<div style="max-width:660px;margin:6px auto 0;font-size:9.5px;color:var(--ink-dim);border:1px solid var(--line);border-radius:8px;padding:5px 9px;">
  <strong style="color:var(--ink);">Como leerla en la práctica.</strong> Antes de mirar ningún número, la forma de la rama espiratoria ya separa los dos patrones: <strong>cóncava y arrastrada</strong> en la obstrucción, <strong>estrecha y de aspecto normal</strong> en la restricción. El cociente FEV1/FVC posbroncodilatador por debajo de 0.70 confirma la obstrucción y es <strong>obligatorio</strong> para diagnosticar EPOC: sin espirometría no hay diagnóstico. El FEV1 en porcentaje del predicho <strong>gradua</strong> la obstrucción (GOLD 1 a 4) pero no decide el tratamiento, que depende de los síntomas y de las exacerbaciones.
</div>`;

const hiperinsuflacionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2f5d6e;border-radius:8px;padding:5px 9px;background:#2f5d6e12;margin-bottom:6px;">
    <strong style="color:#2f5d6e;">La disnea de la EPOC no viene del FEV1, viene de no poder vaciar el pulmón.</strong> <span style="color:var(--ink-dim);">Por eso un broncodilatador puede cambiar la vida del paciente moviendo el FEV1 apenas 100 mL.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2f5d6e22;border:1px solid #2f5d6e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2f5d6e;">1. Limitación al<br>FLUJO ESPIRATORIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La pérdida de retracción elástica (enfisema) y el estrechamiento de la via aérea pequeña (bronquiolitis) hacen que la espiración sea lenta. El pulmón <strong style="color:var(--ink);">no termina de vaciarse</strong> antes de que empiece la siguiente inspiración.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. ATRAPAMIENTO<br>AÉREO y auto-PEEP</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El volumen que queda al final de la espiración sube, y con el la presión alveolar teleespiratoria: es la <strong style="color:var(--ink);">PEEP intrínseca</strong>. El paciente tiene que generar esa presión negativa <strong>antes</strong> de que entre nada de aire: es una carga umbral inspiratoria que se paga en cada respiración.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3. HIPERINSUFLACIÓN<br>DINÁMICA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Al esforzarse el paciente respira más deprisa, el tiempo espiratorio se acorta y el atrapamiento <strong>aumenta con el ejercicio</strong>. La capacidad inspiratoria cae, el diafragma se aplana y trabaja en desventaja mecánica. <strong style="color:var(--ink);">La caída de la capacidad inspiratoria en esfuerzo predice la disnea y la tolerancia al ejercicio mejor que el FEV1.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. DESINFLAR es<br>el objetivo</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Los broncodilatadores de larga duración alargan el tiempo espiratorio útil y <strong style="color:var(--ink);">reducen el volumen atrapado</strong>. La mejoría sintomática se explica por ahi, no por el cambio del FEV1, que puede ser mínimo. La rehabilitación respiratoria actúa sobre el mismo eje entrenando el músculo y enseñando a espirar con labios fruncidos.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">En el paciente ventilado, el mismo mecanismo mata.</strong> La auto-PEEP impide disparar el respirador (el paciente hace esfuerzos que la maquina no ve), reduce el retorno venoso y puede producir hipotensión y actividad eléctrica sin pulso. Se trata <strong>alargando el tiempo espiratorio</strong> (bajar la frecuencia y el volumen minuto, subir el flujo inspiratorio), con broncodilatadores, y añadiendo PEEP externa hasta alrededor del 80% de la intrínseca para facilitar el disparo. Ante hipotensión brusca en un obstructivo ventilado: <strong style="color:#8c3a34;">desconectar del respirador y dejar espirar</strong>.
  </div>
</div>`;

const goldHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2f5d6e;border-radius:8px;padding:5px 9px;background:#2f5d6e12;margin-bottom:6px;">
    <strong style="color:#2f5d6e;">Dos ejes independientes.</strong> <span style="color:var(--ink-dim);">El <strong>grado GOLD 1 a 4</strong> mide la obstrucción por el FEV1 y sirve para el pronóstico. El <strong>grupo A, B o E</strong> mide síntomas y exacerbaciones y es el que decide el tratamiento inicial. Un GOLD 4 puede ser grupo A y un GOLD 2 puede ser grupo E.</span>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;">
      <div style="font-weight:700;color:#2f5d6e;margin-bottom:3px;">Grado espirometrico (FEV1 % del predicho, con FEV1/FVC menor de 0.70)</div>
      <div style="color:var(--ink-dim);line-height:1.5;">GOLD 1 leve: 80% o más<br>GOLD 2 moderada: 50 a 79%<br>GOLD 3 grave: 30 a 49%<br>GOLD 4 muy grave: menos de 30%</div>
    </div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;">
      <div style="font-weight:700;color:#2f5d6e;margin-bottom:3px;">Los dos datos del grupo</div>
      <div style="color:var(--ink-dim);line-height:1.5;"><strong style="color:var(--ink);">Síntomas</strong>: mMRC 0 a 1 o CAT menor de 10 = poco sintomático; mMRC 2 o más o CAT 10 o más = sintomático.<br><strong style="color:var(--ink);">Exacerbaciones del último año</strong>: cuenta el número de moderadas y si alguna requirió ingreso.</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;"><span style="font-size:15px;">E</span>2 o más moderadas<br>o 1 con ingreso</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">LABA + LAMA</strong> de entrada. Si los <strong>eosinófilos en sangre son 300/microlitro o más</strong>, triple terapia LABA + LAMA + corticoide inhalado desde el inicio. El grupo E ignora los síntomas a propósito: la historia de exacerbaciones pesa más.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;"><span style="font-size:15px;">B</span>0 o 1 moderada sin ingreso<br>mMRC 2 o más / CAT 10 o más</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">LABA + LAMA</strong>. La doble broncodilatación es superior a cualquier monoterapia en síntomas y en función pulmonar, y es la razón por la que GOLD abandono la monoterapia en el paciente sintomático.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;"><span style="font-size:15px;">A</span>0 o 1 moderada sin ingreso<br>mMRC 0 a 1 / CAT menor de 10</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Un broncodilatador</strong>, de acción corta o larga según el síntoma. Es el único grupo en el que la monoterapia sigue siendo aceptable.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #3f6b52;border-radius:8px;background:#3f6b5210;color:var(--ink-dim);">
    <strong style="color:#3f6b52;">Lo que se hace en TODOS los grupos, y pesa más que el inhalador.</strong> Dejar de fumar (la única medida que frena la caída del FEV1), vacunación (gripe anual, neumococo, COVID-19, tosferina y virus respiratorio sincitial según la edad), <strong>rehabilitación respiratoria</strong> (sobre todo en las 4 semanas siguientes a un ingreso por exacerbación, cuando reduce reingresos y mortalidad), actividad física, revisión de la técnica inhalatoria en cada consulta y tratamiento de las comorbilidades.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">El seguimiento NO repite el mapa ABE.</strong> A partir de la primera revisión se decide por el rasgo que domina: si lo que persiste es la <strong>disnea</strong>, se optimiza la broncodilatación y la técnica; si lo que persiste son las <strong>exacerbaciones</strong>, se sube a triple terapia y, si aun así recurren, se valoran roflumilast (bronquitis crónica con FEV1 menor del 50%), azitromicina (sobre todo en exfumadores) o dupilumab (inflamación tipo 2 con eosinófilos 300 o más). Antes de escalar nada: comprobar adherencia y técnica del inhalador.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La EPOC es una enfermedad heterogénea que combina síntomas respiratorios crónicos (disnea, tos, expectoración, exacerbaciones) con una <strong>obstrucción al flujo aéreo persistente</strong>, producida por alteraciones de la via aérea (bronquitis y bronquiolitis) y del alveolo (enfisema) en proporciones distintas según el paciente. Dos ideas ordenan todo el tema: el diagnóstico <strong>exige espirometría</strong> con un cociente FEV1/FVC posbroncodilatador por debajo de 0.70, y el tratamiento <strong>no se decide por el FEV1</strong> sino por los síntomas y las exacerbaciones.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Sin espirometría no hay EPOC.</strong></p>
<p style="margin:0 0 12px;">Es el error más repetido del tema: etiquetar de EPOC a un fumador con disnea y tos sin haberle hecho nunca una espirometría. Hasta un tercio de los pacientes tratados como EPOC en atención primaria no cumplen el criterio funcional, y una proporción parecida de los que si lo cumplen esta sin diagnosticar. La espirometría debe ser <strong>posbroncodilatador</strong>, porque el asma y la EPOC no se separan bien con la basal, y debe repetirse si el resultado esta cerca del limite. El uso de un cociente fijo de 0.70 sobrediagnostica al anciano e infradiagnostica al joven, y por eso se compara siempre con la clínica y, cuando hay dudas, con el limite inferior de la normalidad.</p>
${figBlock('Figura 1', 'Curva flujo-volumen: como se reconoce el patrón antes de mirar los numeros', curvaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que se ahoga el paciente.</strong></p>
<p style="margin:0 0 12px;">La respuesta intuitiva (porque el aire no entra) es la equivocada. En la EPOC el aire entra: <strong>lo que no puede es salir</strong>. La espiración lenta deja aire atrapado, el volumen teleespiratorio sube y aparece una presión positiva residual en el alveolo, la <strong>PEEP intrínseca</strong>, que el paciente tiene que vencer antes de poder inspirar. Con el esfuerzo la frecuencia respiratoria sube, el tiempo espiratorio se acorta y el atrapamiento crece: es la <strong>hiperinsuflación dinámica</strong>, que explica por que la disnea de esfuerzo se correlaciona mal con el FEV1 y bien con la caída de la capacidad inspiratoria.</p>
${figBlock('Figura 2', 'Hiperinsuflación dinámica: del atrapamiento aéreo a la disnea', hiperinsuflacionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se clasifica y como se trata.</strong></p>
<p style="margin:0 0 12px;">GOLD separa deliberadamente dos ejes. El <strong>grado 1 a 4</strong> mide cuanta obstrucción hay por el FEV1 en porcentaje del predicho y sirve para el pronóstico. El <strong>grupo A, B o E</strong> combina la carga de síntomas (mMRC o CAT) con la historia de exacerbaciones del último año y es el que dicta el tratamiento inicial. El cambio conceptual de las últimas ediciones fue crear el <strong>grupo E</strong>, que agrupa a todo exacerbador con independencia de los síntomas: quien exacerba tiene un problema distinto del que solo se ahoga, y necesita un tratamiento distinto.</p>
${figBlock('Figura 3', 'Mapa GOLD ABE y tratamiento inicial', goldHtml)}
<p style="margin:0 0 12px;">Los <strong>eosinófilos en sangre periférica</strong> son el biomarcador que más ha cambiado la práctica: por debajo de 100 por microlitro el corticoide inhalado prácticamente no aporta nada y si aporta riesgo de neumonía, y a partir de 300 el beneficio en prevención de exacerbaciones es claro. Otros datos empujan hacia el corticoide inhalado (ingreso previo por exacerbación, dos o más exacerbaciones moderadas al año, antecedente de asma) y otros lo desaconsejan (neumonías de repetición, infección micobacteriana previa).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La exacerbación.</strong></p>
<p style="margin:0 0 12px;">Es un empeoramiento agudo de la disnea, la tos o la expectoración en menos de 14 días, con inflamación local y sistémica, causado por infección, contaminación u otra agresion. Cada exacerbación deja huella: acelera la caída del FEV1, empeora la calidad de vida y aumenta el riesgo de la siguiente y de muerte. El tratamiento tiene cuatro piezas: <strong>broncodilatador de acción corta</strong>, <strong>corticoide sistémico</strong> 40 mg de prednisona durante <strong>5 días</strong> (no 14), <strong>antibiótico</strong> solo si hay aumento de la purulencia del esputo con aumento de la disnea o del volumen, o si el paciente necesita ventilación, y <strong>oxígeno con objetivo de 88 a 92%</strong> de saturación. Si hay acidosis respiratoria con pH de 7.35 o menos, la <strong>ventilación no invasiva</strong> es tratamiento de primera línea y reduce intubación y mortalidad.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que cambia la mortalidad.</strong></p>
<p style="margin:0 0 12px;">La lista es corta y conviene saberla de memoria: <strong>dejar de fumar</strong>, <strong>oxigenoterapia domiciliaria</strong> en el hipoxemico crónico grave, <strong>ventilación no invasiva domiciliaria</strong> en el hipercapnico seleccionado tras un ingreso, <strong>cirugía o valvulas de reducción de volumen</strong> en el enfisema de predominio en lóbulos superiores con baja tolerancia al ejercicio, <strong>rehabilitación respiratoria</strong> precoz tras la exacerbación y, en el exacerbador sintomático, la <strong>triple terapia</strong> frente a la doble broncodilatación. Todo lo demás mejora síntomas o exacerbaciones, que no es poco, pero no la supervivencia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar EPOC sin espirometría. No dar corticoide inhalado a un paciente con eosinófilos por debajo de 100 y sin exacerbaciones. No dar oxígeno a alto flujo en la exacerbación buscando saturaciones del 98%: se empeora la hipercapnia y se puede llegar a la narcosis. No prolongar el corticoide sistémico más allá de 5 a 7 días. No pautar antibiótico a toda exacerbación. No olvidar cribar la deficiencia de alfa-1-antitripsina al menos una vez en la vida de todo paciente con EPOC. Y no escalar el tratamiento sin haber comprobado antes la adherencia y la técnica del inhalador.</p>`;

export const bibliografia = [
  'Global Initiative for Chronic Obstructive Lung Disease. Global strategy for the prevention, diagnosis and management of COPD: 2026 report. GOLD; 2025.',
  'Celli BR, Fabbri LM, Aaron SD, et al. An updated definition and severity classification of COPD exacerbations: the Rome proposal. Am J Respir Crit Care Med. 2021;204(11):1251-1258.',
  'Anthonisen NR, Manfreda J, Warren CP, Hershfield ES, Harding GK, Nelson NA. Antibiotic therapy in exacerbations of chronic obstructive pulmonary disease. Ann Intern Med. 1987;106(2):196-204.',
  'Steer J, Gibson J, Bourke SC. The DECAF score: predicting hospital mortality in exacerbations of chronic obstructive pulmonary disease. Thorax. 2012;67(11):970-976.',
  'Celli BR, Cote CG, Marin JM, et al. The body-mass index, airflow obstruction, dyspnea, and exercise capacity index in chronic obstructive pulmonary disease. N Engl J Med. 2004;350(10):1005-1012.',
  'Leuppi JD, Schuetz P, Bingisser R, et al. Short-term vs conventional glucocorticoid therapy in acute exacerbations of COPD: the REDUCE randomized clinical trial. JAMA. 2013;309(21):2223-2231.',
  'Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426.',
  'Wedzicha JA, Miravitlles M, Hurst JR, et al. Management of COPD exacerbations: a European Respiratory Society/American Thoracic Society guideline. Eur Respir J. 2017;49(3):1600791.',
  'Nocturnal Oxygen Therapy Trial Group. Continuous or nocturnal oxygen therapy in hypoxemic chronic obstructive lung disease. Ann Intern Med. 1980;93(3):391-398.',
  'Long-Term Oxygen Treatment Trial Research Group. A randomized trial of long-term oxygen for COPD with moderate desaturation. N Engl J Med. 2016;375(17):1617-1627.',
  'Murphy PB, Rehal S, Arbane G, et al. Effect of home noninvasive ventilation with oxygen therapy vs oxygen therapy alone on hospital readmission or death after an acute COPD exacerbation: the HOT-HMV randomized clinical trial. JAMA. 2017;317(21):2177-2186.',
  'Lipson DA, Barnhart F, Brealey N, et al. Once-daily single-inhaler triple versus dual therapy in patients with COPD (IMPACT). N Engl J Med. 2018;378(18):1671-1680.',
  'Rabe KF, Martinez FJ, Ferguson GT, et al. Triple inhaled therapy at two glucocorticoid doses in moderate-to-very-severe COPD (ETHOS). N Engl J Med. 2020;383(1):35-48.',
  'Bhatt SP, Rabe KF, Hanania NA, et al. Dupilumab for COPD with type 2 inflammation indicated by eosinophil counts. N Engl J Med. 2023;389(3):205-214.',
  'Fishman A, Martinez F, Naunheim K, et al. A randomized trial comparing lung-volume-reduction surgery with medical therapy for severe emphysema. N Engl J Med. 2003;348(21):2059-2073.',
  'Miravitlles M, Dirksen A, Ferrarotti I, et al. European Respiratory Society statement: diagnosis and treatment of pulmonary disease in alpha-1 antitrypsin deficiency. Eur Respir J. 2017;50(5):1700610.',
  'Nici L, Mammen MJ, Charbek E, et al. Pharmacologic management of chronic obstructive pulmonary disease: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2020;201(9):e56-e69.',
  'ODonnell DE, Laveneziana P. The clinical importance of dynamic lung hyperinflation in COPD. COPD. 2006;3(4):219-232.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'EPOC estable',
      tituloB: 'Exacerbacion',
      compensada: 'Disnea de esfuerzo progresiva, persistente y que el paciente lleva años minimizando ("es la edad", "es el tabaco"). Tos crónica con o sin expectoración, a menudo matutina. Sibilancias y opresión torácica variables. Exploración con espiración alargada, tórax en tonel, disminución global del murmullo vesicular, uso de musculatura accesoria y respiración con labios fruncidos. En fases avanzadas, pérdida de peso y de masa muscular, edemas y cianosis. Hasta la mitad de los pacientes con obstrucción no refieren disnea espontáneamente: hay que preguntar por la actividad que han dejado de hacer.',
      descompensada: 'Empeoramiento agudo de disnea, tos o expectoración en MENOS DE 14 DÍAS, con cambio en el color o el volumen del esputo. Taquipnea, taquicardia, sibilancias o tórax silente si la obstrucción es extrema, uso de musculatura accesoria y respiración paradójica abdominal. Signos de alarma: incapacidad para hablar en frases, somnolencia o agitación (narcosis por dióxido de carbono), asterixis, cianosis, inestabilidad hemodinámica y descenso del nivel de conciencia. El tórax silente y la bradipnea anuncian la parada respiratoria.'
    },
    laboratorio: [
      { prueba: 'Espirometría posbroncodilatador (calculadora de grupo GOLD disponible)', utilidad: 'IMPRESCINDIBLE para el diagnóstico: cociente FEV1/FVC menor de 0.70 tras broncodilatador. El FEV1 en porcentaje del predicho gradua la obstrucción (GOLD 1 a 4). No se diagnostica EPOC sin ella, y no se hace durante una exacerbación porque infraestima la función basal.' },
      { prueba: 'Eosinófilos en sangre periférica', utilidad: 'Biomarcador que decide el corticoide inhalado. Menos de 100 por microlitro: beneficio mínimo y riesgo de neumonía. 300 o más: beneficio claro en prevención de exacerbaciones y criterio para triple terapia de inicio en el grupo E. En la exacerbación, la eosinopenia por debajo de 0.05 x10^9/L puntúa en la escala DECAF y marca peor pronóstico.' },
      { prueba: 'Gasometría arterial', utilidad: 'Obligada en la exacerbación con saturación menor del 92%, en toda sospecha de hipercapnia y para indicar oxigenoterapia domiciliaria. Define la insuficiencia respiratoria (PaO2 menor de 60 mmHg) y su tipo (hipercápnica si la PaCO2 supera 45 mmHg). El pH separa la acidosis aguda de la hipercapnia crónica compensada.' },
      { prueba: 'Alfa-1-antitripsina sérica', utilidad: 'Cribado UNA VEZ en la vida en TODO paciente con EPOC, según recomendación de la OMS. Prioritario si hay enfisema antes de los 45 años, predominio en lóbulos inferiores, escasa carga tabaquica, historia familiar o hepatopatía asociada. Un valor bajo obliga a genotipar.' },
      { prueba: 'Hemograma y bioquímica', utilidad: 'Poliglobulia por hipoxemia crónica o, más frecuentemente, anemia, que empeora la disnea y el pronóstico. Hipoalbuminemia y pérdida de masa magra como marcadores de gravedad sistémica. Glucemia y perfil lipídico por la comorbilidad cardiometabolica.' },
      { prueba: 'Péptido natriurético y troponina', utilidad: 'Ayudan a separar la exacerbación de la insuficiencia cardiaca descompensada, que se le parece mucho y a menudo coexiste. La troponina elevada en la exacerbación es frecuente e identifica un subgrupo con mayor mortalidad.' },
      { prueba: 'Cultivo de esputo', utilidad: 'No de rutina en la exacerbación simple. Indicado si hay fracaso del tratamiento, exacerbaciones frecuentes, obstrucción muy grave, bronquiectasias o sospecha de Pseudomonas aeruginosa (que exige cobertura antipseudomónica).' },
      { prueba: 'Dímero D y angiotomografia si procede', utilidad: 'La embolia pulmonar esta presente en una proporción nada despreciable de las exacerbaciones sin causa clara, sobre todo si hay dolor torácico pleurítico, hipoxemia desproporcionada o ausencia de infección. Es el diagnóstico que más se pasa por alto en este contexto.' }
    ],
    no_invasivos: [
      { metodo: 'Escala mMRC de disnea', interpretacion: 'Grado 0: disnea solo con ejercicio intenso. 1: al andar deprisa en llano o subir una cuesta ligera. 2: anda más despacio que otros de su edad o tiene que parar. 3: para a los 100 metros o a los pocos minutos. 4: no sale de casa o se ahoga al vestirse.', cutoff: 'mMRC 2 o más: paciente sintomático (grupo B o E)' },
      { metodo: 'Cuestionario CAT (COPD Assessment Test)', interpretacion: 'Ocho preguntas puntuadas de 0 a 5 sobre tos, flemas, opresión, disnea al subir, actividades domésticas, salir de casa, sueño y energía. Mide impacto global, no solo disnea, y es más sensible al cambio que la mMRC.', cutoff: '10 o más: paciente sintomático. Cambio mínimo relevante: 2 puntos' },
      { metodo: 'Índice BODE (calculadora disponible)', interpretacion: 'Combina índice de masa corporal, obstrucción (FEV1 %), disnea (mMRC) y capacidad de ejercicio (marcha de 6 minutos). Predice mortalidad mejor que el FEV1 aislado porque incorpora la dimension sistémica y funcional de la enfermedad.', cutoff: '0 a 2, 3 a 4, 5 a 6 y 7 a 10 puntos: supervivencia a 4 años aproximada del 80, 67, 57 y 18%' },
      { metodo: 'Escala DECAF en la exacerbación ingresada (calculadora disponible)', interpretacion: 'Disnea (eMRCD 5a o 5b), Eosinopenia, Consolidación, Acidemia y Fibrilación auricular. Predice mortalidad intrahospitalaria y ayuda a decidir el nivel de cuidados y la posibilidad de manejo domiciliario asistido.', cutoff: '0 a 1: bajo riesgo. 2: intermedio. 3 o más: alto riesgo, mortalidad del 24% o superior' },
      { metodo: 'Criterios de Anthonisen (calculadora disponible)', interpretacion: 'Los tres síntomas cardinales de la exacerbación son aumento de la disnea, del volumen del esputo y de la purulencia. Tipo I los tres, tipo II dos, tipo III uno más un criterio menor. Solo el aumento de la PURULENCIA identifica de forma fiable la carga bacteriana.', cutoff: 'Antibiótico si hay purulencia junto con aumento de disnea o de volumen, o si el paciente requiere ventilación' },
      { metodo: 'Prueba de marcha de 6 minutos y pulsioximetría de esfuerzo', interpretacion: 'Mide la capacidad funcional real y detecta la desaturación de esfuerzo que la oximetría en reposo no ve. Entra en el índice BODE y es la referencia para valorar la respuesta a la rehabilitación respiratoria.', cutoff: 'Menos de 350 metros: peor pronóstico. Desaturación por debajo del 88% en el esfuerzo' },
      { metodo: 'Volúmenes pulmonares y capacidad de difusión (DLCO)', interpretacion: 'La pletismografia cuantifica el atrapamiento aéreo (volumen residual y capacidad pulmonar total altos, capacidad inspiratoria baja). La DLCO baja indica enfisema y ayuda a separarlo del componente bronquitico; también orienta el riesgo quirúrgico.', cutoff: 'Cociente volumen residual/capacidad pulmonar total elevado; DLCO menor del 60% sugiere enfisema significativo' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Poco sensible para el diagnóstico, imprescindible en la exacerbación. Hiperinsuflación con aplanamiento diafragmático, aumento del espacio retroesternal y silueta cardiaca en gota. Su papel real es EXCLUIR: neumonía, neumotórax, derrame, insuficiencia cardiaca y masa.' },
      { modalidad: 'Tomografía computarizada de tórax', hallazgos: 'Cuantifica y localiza el enfisema (centrolobulillar de predominio superior en el fumador, panlobulillar de predominio inferior en la deficiencia de alfa-1-antitripsina), detecta bronquiectasias asociadas y es imprescindible para valorar cirugía o valvulas de reducción de volumen. Permite además el cribado de cáncer de pulmón en el fumador que cumple criterios.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Ante sospecha de hipertensión pulmonar o cor pulmonale: dilatación y disfunción del ventrículo derecho, velocidad de regurgitación tricuspídea aumentada. También separa la disnea de origen cardiaco de la respiratoria cuando ambas compiten.' },
      { modalidad: 'Angiotomografia pulmonar', hallazgos: 'Ante exacerbación sin causa aparente, hipoxemia desproporcionada o factores de riesgo trombótico. La prevalencia de embolia pulmonar en las exacerbaciones ingresadas sin foco infeccioso claro es lo bastante alta como para justificar un umbral bajo de sospecha.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La EPOC se clasifica en <strong>dos ejes que no hay que mezclar</strong>. El primero es funcional: el <strong>grado GOLD 1 a 4</strong> según el FEV1 en porcentaje del predicho, que informa del pronóstico pero no dicta el tratamiento. El segundo es clínico: el <strong>grupo A, B o E</strong>, que combina la carga de síntomas (mMRC o CAT) con las exacerbaciones del último año y si que decide el tratamiento inicial. A ellos se añaden los índices pronósticos multidimensionales (BODE), las escalas de la exacerbación (Anthonisen para el antibiótico, DECAF para el pronóstico) y la clasificación etiológica por "etiotipos" que GOLD ha ido incorporando: tabaquica, por biomasa o contaminación, genética, del desarrollo pulmonar, por infección y asociada a asma.`,
    escalas: [
      { nombre: 'Grado espirometrico GOLD 1 a 4', componentes: 'FEV1 en porcentaje del predicho, en pacientes que ya cumplen FEV1/FVC posbroncodilatador menor de 0.70.', formula: 'GOLD 1: 80% o más. GOLD 2: 50 a 79%. GOLD 3: 30 a 49%. GOLD 4: menos de 30%.', interpretacion: 'Mide la obstrucción y aporta información pronostica, pero se correlaciona mal con los síntomas y con la calidad de vida. No decide el tratamiento: un GOLD 4 poco sintomático y sin exacerbaciones es grupo A.' },
      { nombre: 'Grupo GOLD A, B o E (calculadora disponible)', componentes: 'Síntomas medidos por mMRC o CAT, y número de exacerbaciones moderadas o graves en el último año.', formula: 'E: 2 o más exacerbaciones moderadas, o 1 o más que requirieron ingreso. B: 0 a 1 moderada sin ingreso con mMRC 2 o más o CAT 10 o más. A: 0 a 1 moderada sin ingreso con mMRC 0 a 1 o CAT menor de 10.', interpretacion: 'Determina el tratamiento inicial: A un broncodilatador, B doble broncodilatación LABA + LAMA, E doble broncodilatación y triple terapia de inicio si los eosinófilos son 300 o más. El grupo E ignora los síntomas de forma deliberada.' },
      { nombre: 'Escala mMRC de disnea', componentes: 'Un único ítem de 0 a 4 sobre la actividad que desencadena la disnea.', formula: 'Grado 0 a 4 según el nivel de esfuerzo que produce disnea.', interpretacion: '2 o más define al paciente sintomático para el mapa ABE. Es rápida y reproducible, pero solo mide disnea: puede infravalorar al paciente cuya carga principal es la tos, la expectoración o el insomnio.' },
      { nombre: 'Cuestionario CAT', componentes: 'Ocho ítems de 0 a 5: tos, flemas, opresión torácica, disnea al subir, limitación en actividades domésticas, confianza para salir de casa, sueño y energía.', formula: 'Suma de 0 a 40 puntos.', interpretacion: '10 o más define al paciente sintomático. Mide impacto global y es sensible al cambio: una diferencia de 2 puntos ya es clínicamente relevante. Preferible a la mMRC para seguimiento.' },
      { nombre: 'Índice BODE (calculadora disponible)', componentes: 'Índice de masa corporal, FEV1 en porcentaje del predicho, disnea mMRC y distancia recorrida en la marcha de 6 minutos.', formula: 'Cada componente aporta de 0 a 3 puntos, salvo el índice de masa corporal que aporta 0 o 1. Total de 0 a 10.', interpretacion: 'Predice mortalidad mejor que el FEV1 aislado. Cuartiles de 0 a 2, 3 a 4, 5 a 6 y 7 a 10 con supervivencia a 4 años aproximada del 80, 67, 57 y 18%. Útil para priorizar rehabilitación y valorar trasplante.' },
      { nombre: 'Definición y gravedad de Roma para la exacerbación', componentes: 'Disnea medida en escala visual analogica, frecuencia respiratoria, frecuencia cardiaca, saturación de oxígeno, proteína C reactiva y gasometría arterial.', formula: 'Leve, moderada o grave según la combinación de variables; la forma grave exige PaCO2 mayor de 45 mmHg con pH menor de 7.35.', interpretacion: 'Sustituye a la clasificación clásica basada en el recurso consumido (leve con broncodilatador, moderada con corticoide o antibiótico, grave con ingreso), que describia el sistema sanitario más que al paciente. La forma grave identifica al candidato a ventilación no invasiva.' },
      { nombre: 'Criterios de Anthonisen (calculadora disponible)', componentes: 'Tres síntomas cardinales: aumento de la disnea, del volumen del esputo y de la purulencia. Criterios menores: infección respiratoria alta en los 5 días previos, fiebre sin otra causa, aumento de sibilancias o de la tos, y ascenso del 20% de la frecuencia cardiaca o respiratoria.', formula: 'Tipo I: los tres cardinales. Tipo II: dos. Tipo III: uno más un criterio menor.', interpretacion: 'Base de la indicación de antibiótico desde 1987. La lectura moderna es más estricta: el dato que manda es la PURULENCIA del esputo, junto con el aumento de disnea o de volumen, o bien la necesidad de ventilación.' },
      { nombre: 'Escala DECAF (calculadora disponible)', componentes: 'Disnea extrema (eMRCD 5a: no sale de casa pero se viste solo, 1 punto; 5b: además no puede vestirse solo, 2 puntos), Eosinopenia menor de 0.05 x10^9/L, Consolidación radiológica, Acidemia con pH menor de 7.30 y Fibrilación auricular.', formula: 'Suma de 0 a 6 puntos.', interpretacion: '0 a 1: bajo riesgo, mortalidad intrahospitalaria en torno al 1%, candidato a alta precoz o ingreso domiciliario. 2: intermedio, cerca del 5%. 3 o más: alto riesgo, del 24% al 45%, con necesidad de valorar cuidados intensivos y decisiones de techo terapéutico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'EPOC estable',
      color: '#2f5d6e',
      definicion: 'Enfermedad heterogénea con síntomas respiratorios crónicos y obstrucción al flujo aéreo persistente, por alteraciones de la via aérea y del alveolo. El diagnóstico EXIGE un cociente FEV1/FVC posbroncodilatador menor de 0.70.',
      fisiopatologia: 'La inhalacion crónica de humo de tabaco, biomasa o contaminantes produce inflamación de la via aérea pequeña con remodelado y fibrosis peribronquiolar, y destrucción de los septos alveolares con pérdida de retracción elástica. Las dos lesiones convergen en lo mismo: la espiración se vuelve lenta y el pulmón no se vacia. El volumen teleespiratorio sube, aparece PEEP intrínseca, el diafragma se aplana y trabaja en desventaja, y en el esfuerzo el fenómeno se agrava (hiperinsuflación dinámica). Ver la Figura 2 de Definición. A ello se suman el desequilibrio ventilación-perfusión, la inflamación sistémica de bajo grado y la disfunción muscular periférica, que explican la dimension extrapulmonar de la enfermedad.',
      epidemiologia: 'Afecta a cerca del 10% de los adultos mayores de 40 años y es la tercera causa de muerte en el mundo. Esta infradiagnosticada en más de la mitad de los casos y sobrediagnosticada en una proporción parecida de los que ya reciben tratamiento. El tabaco es la causa dominante en los países de renta alta; la exposición a biomasa y la contaminación domestica lo son en amplias regiones del mundo, con mayor afectación de mujeres.',
      factores_riesgo: ['Tabaquismo activo o pasivo, el factor dominante', 'Exposición a humo de biomasa para cocinar o calentar', 'Contaminación atmosferica y exposición laboral a polvos, humos y vapores', 'Deficiencia de alfa-1-antitripsina', 'Desarrollo pulmonar deficiente: prematuridad, bajo peso al nacer, infecciones respiratorias en la infancia', 'Asma de larga evolución y mal controlada', 'Tuberculosis previa y bronquiectasias', 'Infección por VIH', 'Nivel socioeconómico bajo', 'Edad avanzada y sexo femenino para una misma carga tabaquica'],
      clinica: 'Disnea de esfuerzo progresiva y persistente, tos crónica con o sin expectoración, sibilancias y opresión torácica. En fases avanzadas, pérdida de peso y de masa muscular, edemas, cianosis y limitación grave de la actividad. Muchos pacientes no refieren disnea de forma espontánea porque han ido reduciendo su actividad: hay que preguntar por lo que han dejado de hacer.',
      criterios_dx: 'Síntomas respiratorios crónicos y exposición de riesgo, más espirometría posbroncodilatador con FEV1/FVC menor de 0.70. Sin espirometría no hay diagnóstico. Si el cociente esta en el limite, repetir en otra ocasión y comparar con el limite inferior de la normalidad para la edad.',
      laboratorio: 'Eosinófilos en sangre para decidir el corticoide inhalado. Alfa-1-antitripsina al menos una vez en la vida. Gasometría si la saturación es menor del 92% o hay sospecha de hipercapnia. Hemograma para detectar anemia o poliglobulia.',
      imagen: 'Radiografía de tórax para excluir otras causas. Tomografía si se plantea cirugía o valvulas, si hay sospecha de bronquiectasias o enfisema significativo, o para cribado de cáncer de pulmón en el fumador que cumple criterios.',
      complementarios: 'Volúmenes pulmonares y DLCO cuando hay disociación entre síntomas y FEV1. Marcha de 6 minutos para el índice BODE y para valorar la rehabilitación. Ecocardiograma si se sospecha hipertensión pulmonar. Estudio de sueño si hay sospecha de síndrome de solapamiento con apnea obstructiva.',
      dx_diferencial: 'Asma (inicio precoz, variabilidad, reversibilidad marcada, atopia), bronquiectasias, insuficiencia cardiaca, tuberculosis y sus secuelas, bronquiolitis obliterante, panbronquiolitis difusa, y en el enfisema precoz o de predominio inferior, la deficiencia de alfa-1-antitripsina.',
      tx_medico: 'DEJAR DE FUMAR es la única medida que frena la caída acelerada del FEV1, y se ofrece en cada visita con apoyo conductual y farmacológico. Vacunación frente a gripe, neumococo, COVID-19, tosferina y virus respiratorio sincitial según edad y comorbilidad. Rehabilitación respiratoria, especialmente en las 4 semanas siguientes a un ingreso. Actividad física regular, soporte nutricional en el paciente con pérdida de masa magra, y revisión de la técnica del inhalador en CADA consulta.',
      tx_farmacologico: 'Grupo A: un broncodilatador de acción corta o larga. Grupo B: LABA + LAMA. Grupo E: LABA + LAMA, y triple terapia con corticoide inhalado desde el inicio si los eosinófilos son 300 o más por microlitro. En el seguimiento se decide por el rasgo dominante: si persiste la DISNEA se optimiza la broncodilatación y la técnica; si persisten las EXACERBACIONES se sube a triple terapia y, si aun así recurren, roflumilast (bronquitis crónica con FEV1 menor del 50%), azitromicina (preferentemente en exfumadores) o dupilumab (eosinófilos 300 o más). El corticoide inhalado se evita con eosinófilos por debajo de 100, neumonías de repetición o infección micobacteriana previa.',
      tx_intervencionista: 'Cirugía de reducción de volumen pulmonar en el enfisema heterogéneo de predominio en lóbulos superiores con baja capacidad de ejercicio tras rehabilitación: es una de las pocas intervenciones con beneficio en supervivencia. Valvulas endobronquiales en el enfisema sin ventilación colateral. Bullectomia en la bulla gigante. Trasplante pulmonar en el paciente joven muy avanzado tras agotar el resto.',
      criterios_uci: 'No aplica al paciente estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Valorar remisión a trasplante con BODE de 7 a 10, FEV1 menor del 20%, hipercapnia o hipertensión pulmonar progresivas, o exacerbaciones graves repetidas pese a tratamiento óptimo.',
      seguimiento_hospitalario: 'No aplica al paciente estable, salvo que ingrese por exacerbación u otra causa.',
      seguimiento_ambulatorio: 'Revisión al menos anual con síntomas (CAT o mMRC), exacerbaciones del periodo, técnica y adherencia al inhalador, saturación, peso y comorbilidades. Espirometría anual para vigilar la caída del FEV1. Reforzar el abandono del tabaco en cada contacto.',
      pronostico: 'Muy variable. El índice BODE predice mejor que el FEV1 aislado: con 7 a 10 puntos la supervivencia a 4 años baja al 18%. Las exacerbaciones, la hipercapnia, la hipertensión pulmonar, la pérdida de peso y las comorbilidades cardiovasculares empeoran el pronóstico. Dejar de fumar lo modifica a cualquier edad.',
      algoritmo: ['Sospecha por síntomas crónicos más exposición de riesgo', 'Espirometría POSBRONCODILATADOR: FEV1/FVC menor de 0.70 confirma', 'Graduar el FEV1 (GOLD 1 a 4) y medir síntomas (mMRC o CAT)', 'Contar las exacerbaciones del último año y si hubo ingreso', 'Asignar grupo A, B o E', 'Medir eosinófilos y solicitar alfa-1-antitripsina una vez en la vida', 'Iniciar tratamiento: A un broncodilatador, B y E doble broncodilatación, E con eosinófilos 300 o más triple terapia', 'Añadir siempre abandono del tabaco, vacunas y rehabilitación', 'Revisar en 1 a 3 meses: comprobar técnica y adherencia ANTES de escalar', 'Escalar según el rasgo dominante: disnea o exacerbaciones']
    },
    {
      nombre: 'Exacerbación de la EPOC',
      color: '#8c3a34',
      definicion: 'Empeoramiento agudo de la disnea, la tos o la expectoración instaurado en MENOS DE 14 DÍAS, con inflamación local y sistémica, causado por infección, contaminación u otra agresion (definición de Roma).',
      fisiopatologia: 'Un desencadenante, casi siempre viral o bacteriano, amplifica la inflamación de la via aérea. El edema, el broncoespasmo y la hipersecreción estrechan aun más una luz ya comprometida, empeoran la limitación al flujo y aumentan el atrapamiento aéreo. La hiperinsuflación dinámica sube la carga umbral inspiratoria justo cuando la demanda ventilatoria es máxima, y el músculo respiratorio, ya en desventaja, se agota: aparece hipoventilación alveolar con hipercapnia y acidosis respiratoria. El desequilibrio ventilación-perfusión agrava la hipoxemia, y el oxígeno mal dosificado la empeora aun más al abolir la vasoconstricción pulmonar hipóxica y desplazar dióxido de carbono de la hemoglobina (efecto Haldane).',
      epidemiologia: 'La media es de 1 a 2 exacerbaciones por paciente y año, con un fenotipo exacerbador frecuente bien definido: el mejor predictor de exacerbar es haber exacerbado antes. La mortalidad intrahospitalaria oscila entre el 4 y el 10%, sube por encima del 20% si hay acidosis respiratoria y llega al 40% al año tras un ingreso con hipercapnia. Cerca de una quinta parte de los pacientes reingresan en los 30 días siguientes.',
      factores_riesgo: ['Exacerbaciones previas, el predictor más potente', 'Obstrucción grave (GOLD 3 y 4)', 'Bronquitis crónica con hipersecreción', 'Bronquiectasias asociadas y colonizacion por Pseudomonas aeruginosa', 'Tabaquismo activo y contaminación ambiental', 'Comorbilidad cardiovascular, reflujo gastroesofágico y ansiedad o depresión', 'Mala adherencia y técnica inhalatoria deficiente', 'Ausencia de vacunación antigripal y antineumococica', 'Eosinofilia en sangre para el fenotipo exacerbador tipo 2', 'Invierno y epidemias virales'],
      clinica: 'Aumento de disnea, tos y expectoración, con cambio de color o volumen del esputo. Taquipnea, taquicardia, sibilancias o tórax silente, uso de musculatura accesoria y respiración paradójica. La somnolencia, la asterixis y la confusión indican narcosis por dióxido de carbono. La incapacidad para hablar en frases completas, la bradipnea y el descenso del nivel de conciencia anuncian el fracaso ventilatorio inminente.',
      criterios_dx: 'Clínico y de exclusión. No hay ninguna prueba que confirme la exacerbación: el diagnóstico consiste en reconocer el empeoramiento agudo Y descartar de forma activa neumonía, insuficiencia cardiaca, embolia pulmonar, neumotórax y arritmia, que se le parecen y a menudo coexisten. La gravedad se gradua por la propuesta de Roma; la forma grave exige PaCO2 mayor de 45 mmHg con pH menor de 7.35.',
      laboratorio: 'Gasometría arterial si la saturación es menor del 92%: define la insuficiencia respiratoria y detecta la acidosis. Hemograma (la eosinopenia puntúa en DECAF y marca peor pronóstico; la eosinofilia predice respuesta al corticoide). Proteína C reactiva, función renal e iones. Péptido natriurético y troponina para separar de la insuficiencia cardiaca. Cultivo de esputo solo si hay fracaso, exacerbaciones frecuentes o sospecha de Pseudomonas.',
      imagen: 'Radiografía de tórax SIEMPRE en la exacerbación que acude al hospital: la consolidación cambia el diagnóstico a neumonía, puntúa en DECAF y modifica el pronóstico. Angiotomografia si hay sospecha de embolia pulmonar. Ecografía pulmonar a pie de cama para separar edema de neumotórax y de derrame.',
      complementarios: 'Electrocardiograma en toda exacerbación: la fibrilación auricular es frecuente, puntúa en DECAF y suele ser consecuencia y no causa. Monitorización de la saturación con objetivo del 88 al 92% y gasometría de control a los 30 a 60 minutos de iniciar el oxígeno o la ventilación no invasiva.',
      dx_diferencial: 'Neumonía (la consolidación la separa y empeora el pronóstico), insuficiencia cardiaca descompensada, embolia pulmonar (el diagnóstico que más se escapa), neumotórax, derrame pleural, arritmia rápida, síndrome coronario agudo y obstrucción de la via aérea superior.',
      tx_medico: 'OXÍGENO con objetivo de saturación del 88 al 92%, preferentemente con mascarilla de Venturi que permite fijar la fracción inspirada: más oxígeno no es mejor y empeora la hipercapnia. Broncodilatadores de acción corta, salbutamol con o sin bromuro de ipratropio, en cámara o nebulizados con aire comprimido si se teme la hipercapnia. Profilaxis antitrombótica. Tratamiento de la comorbilidad descompensada. Movilización precoz y rehabilitación iniciada antes del alta o en las 4 semanas siguientes.',
      tx_farmacologico: 'PREDNISONA 40 mg al dia durante 5 DÍAS, no 14: el ensayo REDUCE demostró no inferioridad con menos exposición a corticoide, y no hace falta pauta descendente. ANTIBIÓTICO solo si hay aumento de la purulencia del esputo junto con aumento de la disnea o del volumen, o si el paciente requiere ventilación; 5 a 7 días, con amoxicilina-clavulanico, macrolido o tetraciclina según el patrón local, y cobertura antipseudomónica si hay bronquiectasias, obstrucción muy grave, ingresos recientes o aislamiento previo.',
      tx_intervencionista: 'VENTILACIÓN NO INVASIVA de primera línea si el pH es 7.35 o menor con PaCO2 mayor de 45 mmHg, o si hay trabajo respiratorio importante pese a tratamiento óptimo: reduce intubación, estancia y mortalidad, y es una de las indicaciones con mejor nivel de evidencia de toda la medicina respiratoria. Intubación si fracasa la ventilación no invasiva, hay parada, inestabilidad hemodinámica, incapacidad para proteger la via aérea o descenso del nivel de conciencia. La cánula nasal de alto flujo es alternativa en la insuficiencia hipoxémica sin acidosis, no sustituye a la ventilación no invasiva en la hipercapnia.',
      criterios_uci: 'Acidosis o hipercapnia progresivas pese a ventilación no invasiva, necesidad de intubación, inestabilidad hemodinámica, alteración del nivel de conciencia y necesidad de vasopresores. La decisión debe integrarse con la situación basal y las voluntades del paciente, porque muchos ingresos tienen techo terapéutico razonable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda; una exacerbación grave en un paciente muy avanzado es motivo para plantear la valoración posterior.',
      seguimiento_hospitalario: 'Gasometría de control tras iniciar oxígeno o ventilación no invasiva. Revaluacion diaria de disnea, trabajo respiratorio y nivel de conciencia. Antes del alta: comprobar la técnica del inhalador, ajustar el tratamiento de fondo (una exacerbación casi siempre significa que hay que escalarlo), vacunar si procede, planificar la rehabilitación y programar revisión en 1 a 4 semanas.',
      seguimiento_ambulatorio: 'Revisión precoz tras el alta, porque el riesgo de reingreso se concentra en los primeros 30 días. Rehabilitación respiratoria en las 4 semanas siguientes. Reevaluar en 2 a 3 meses la necesidad de oxigenoterapia domiciliaria o de ventilación no invasiva domiciliaria, que no se indican con los valores de la fase aguda.',
      pronostico: 'Cada exacerbación acelera la caída del FEV1 y aumenta el riesgo de la siguiente. La mortalidad intrahospitalaria sube por encima del 20% con acidosis respiratoria, y alcanza el 40% al año tras un ingreso con hipercapnia. La escala DECAF estratifica bien ese riesgo al ingreso.',
      algoritmo: ['Confirmar empeoramiento agudo en menos de 14 días y descartar los imitadores', 'Radiografía, gasometría si la saturación es menor del 92%, electrocardiograma y analítica', 'Oxígeno con objetivo de saturación del 88 al 92%, mejor con Venturi', 'Broncodilatador de acción corta a demanda', 'Prednisona 40 mg durante 5 días', 'Antibiótico solo si hay purulencia con disnea o volumen aumentados, o si va a ventilarse', 'Calcular DECAF para estratificar el riesgo y decidir el nivel de cuidados', 'Si pH 7.35 o menor con PaCO2 mayor de 45: ventilación NO invasiva sin demora', 'Gasometría de control en 30 a 60 minutos; si empeora, valorar intubación', 'Antes del alta: escalar el tratamiento de fondo, técnica del inhalador, vacunas, rehabilitación y cita en 1 a 4 semanas']
    },
    {
      nombre: 'Insuficiencia respiratoria crónica y oxigenoterapia domiciliaria',
      color: '#3d5a73',
      definicion: 'Hipoxemia arterial persistente (PaO2 menor de 60 mmHg respirando aire ambiente en situación estable), con o sin hipercapnia, que define la fase avanzada de la enfermedad y abre la indicación de oxigenoterapia domiciliaria y, en casos seleccionados, de ventilación no invasiva domiciliaria.',
      fisiopatologia: 'El desequilibrio ventilación-perfusión es el mecanismo dominante de la hipoxemia; la destrucción del lecho capilar por el enfisema añade un componente de alteración de la difusión. Cuando la carga mecánica supera de forma sostenida la capacidad del músculo respiratorio, el paciente adopta un patrón rápido y superficial que reduce el trabajo pero aumenta el espacio muerto: aparece la hipercapnia crónica, compensada por retención renal de bicarbonato, con pH normal o casi normal. Esa compensación es la clave para distinguir la hipercapnia crónica estable de la agudizacion, en la que el pH cae.',
      epidemiologia: 'Afecta sobre todo a los pacientes GOLD 3 y 4. La oxigenoterapia domiciliaria es el tratamiento crónico que más prolonga la vida en la EPOC hipoxémica grave: los ensayos NOTT y del Medical Research Council mostraron beneficio en supervivencia y establecieron que el efecto depende de las horas de uso. Alrededor de un tercio de los pacientes que ingresan con hipercapnia siguen hipercapnicos a las 2 a 4 semanas, que es el grupo candidato a ventilación domiciliaria.',
      factores_riesgo: ['Obstrucción grave o muy grave (GOLD 3 y 4)', 'Enfisema extenso con DLCO muy baja', 'Hipercapnia persistente tras una exacerbación', 'Síndrome de solapamiento con apnea obstructiva del sueño', 'Obesidad con hipoventilación asociada', 'Debilidad muscular respiratoria y desnutrición', 'Hipertensión pulmonar y cor pulmonale', 'Tabaquismo activo, que además contraindica el oxígeno domiciliario por riesgo de quemadura', 'Exacerbaciones graves repetidas', 'Uso de sedantes u opioides'],
      clinica: 'Disnea de mínimos esfuerzos o de reposo, cianosis, poliglobulia, edemas, cefalea matutina y somnolencia diurna (que sugieren hipercapnia nocturna), insomnio, deterioro cognitivo y pérdida de peso. La desaturación puede ser solo de esfuerzo o nocturna y pasar desapercibida en la oximetría de consulta.',
      criterios_dx: 'Gasometría arterial en situación ESTABLE, al menos 4 a 8 semanas después de una exacerbación y con tratamiento optimizado, repetida en dos ocasiones separadas por 3 semanas. Nunca se indica oxigenoterapia domiciliaria con la gasometría del ingreso.',
      laboratorio: 'Gasometría arterial basal (no pulsioximetría) para la indicación. Hematocrito para detectar poliglobulia. Bicarbonato elevado como huella de hipercapnia crónica. Control gasometrico tras iniciar el oxígeno para comprobar que no aumenta la PaCO2 de forma peligrosa.',
      imagen: 'Ecocardiograma para valorar hipertensión pulmonar y función del ventrículo derecho. Tomografía si se plantea reducción de volumen o trasplante.',
      complementarios: 'Pulsioximetría nocturna o poligrafia si hay sospecha de desaturación nocturna o de apnea del sueño asociada. Prueba de marcha de 6 minutos con oximetría para detectar la desaturación de esfuerzo y ajustar el flujo de deambulación.',
      dx_diferencial: 'Hipoxemia por insuficiencia cardiaca, embolia pulmonar crónica, enfermedad intersticial asociada, síndrome de hipoventilación-obesidad y apnea obstructiva del sueño, que pueden coexistir y requieren tratamiento propio.',
      tx_medico: 'Optimizar primero el tratamiento broncodilatador, la rehabilitación y el abandono del tabaco, que es requisito de seguridad para el oxígeno domiciliario. Corregir anemia y desnutrición. Tratar la apnea del sueño asociada.',
      tx_farmacologico: 'Sin fármacos específicos para la insuficiencia respiratoria crónica. Los opioides a dosis bajas tienen un papel establecido en la disnea refractaria del paciente muy avanzado, con vigilancia de la hipercapnia. Evitar benzodiacepinas.',
      tx_intervencionista: 'OXIGENOTERAPIA DOMICILIARIA si en situación estable la PaO2 es 55 mmHg o menor (o la saturación 88% o menor), o bien la PaO2 esta entre 56 y 59 mmHg con cor pulmonale, hipertensión pulmonar, edemas o hematocrito mayor del 55%. El objetivo es una PaO2 de 60 mmHg o más y se necesitan AL MENOS 15 HORAS AL DIA: por debajo de ese umbral no hay beneficio en supervivencia. El ensayo LOTT demostró que la desaturación moderada aislada NO se beneficia. VENTILACIÓN NO INVASIVA DOMICILIARIA en el paciente con hipercapnia persistente (PaCO2 de 52 mmHg o más) 2 a 4 semanas después de un ingreso: con presiones altas reduce reingresos y mortalidad. Valvulas o cirugía de reducción de volumen y trasplante en casos seleccionados.',
      criterios_uci: 'No aplica en la fase estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La insuficiencia respiratoria crónica con hipercapnia progresiva o hipertensión pulmonar es uno de los criterios para remitir a una unidad de trasplante.',
      seguimiento_hospitalario: 'No aplica salvo ingreso.',
      seguimiento_ambulatorio: 'Revaluar la indicación de oxígeno a los 60 a 90 días, porque muchos pacientes dejan de cumplir criterios tras la recuperación. Comprobar las horas reales de uso, el flujo en reposo, en esfuerzo y nocturno, y la ausencia de tabaquismo. Vigilar la aparición de hipercapnia con el oxígeno.',
      pronostico: 'La hipoxemia crónica grave sin tratar tiene una supervivencia muy limitada; la oxigenoterapia correctamente usada la mejora de forma clara. La hipercapnia persistente tras un ingreso identifica un grupo de altísimo riesgo, con mortalidad al año cercana al 40% si no se trata.',
      algoritmo: ['Optimizar el tratamiento y esperar 4 a 8 semanas de estabilidad tras la exacerbación', 'Gasometría arterial basal en aire ambiente, repetida a las 3 semanas', 'PaO2 55 mmHg o menos, o saturación 88% o menos: indicar oxigenoterapia', 'PaO2 de 56 a 59 mmHg: indicar solo si hay cor pulmonale, edemas o hematocrito mayor del 55%', 'Ajustar el flujo para PaO2 de 60 mmHg o más y prescribir 15 horas al dia como mínimo', 'Comprobar la ausencia de tabaquismo activo por seguridad', 'Valorar desaturación de esfuerzo y nocturna para ajustar flujos', 'Si persiste PaCO2 de 52 mmHg o más a las 2 a 4 semanas del alta: ventilación no invasiva domiciliaria', 'Revaluar la indicación a los 60 a 90 días', 'Valorar reducción de volumen o trasplante si sigue progresando']
    },
    {
      nombre: 'Hipertensión pulmonar y cor pulmonale',
      color: '#7a1f3d',
      definicion: 'Elevación de la presión arterial pulmonar media por encima de 20 mmHg secundaria a la enfermedad pulmonar (grupo 3 de la clasificación), con sobrecarga y finalmente fallo del ventrículo derecho, que es lo que se denomina cor pulmonale.',
      fisiopatologia: 'Tres mecanismos se suman. La vasoconstricción pulmonar hipóxica, inicialmente adaptativa, se hace sostenida y produce remodelado vascular. La destrucción enfisematosa reduce el lecho capilar y aumenta la resistencia. Y la hiperinsuflación comprime los vasos alveolares. El ventrículo derecho, diseñado para una circulación de baja presión, se hipertrofia y después se dilata; al dilatarse desplaza el tabique y compromete el llenado del izquierdo. La hipercapnia y la acidosis potencian la vasoconstricción, y la poliglobulia aumenta la viscosidad.',
      epidemiologia: 'Alguna elevación de la presión pulmonar aparece en cerca de la mitad de los pacientes con EPOC avanzada, pero la hipertensión pulmonar grave (resistencia vascular pulmonar mayor de 5 unidades Wood) afecta a menos del 5% y obliga a buscar otra causa añadida. Su presencia multiplica el riesgo de ingreso y de muerte y es uno de los predictores independientes más potentes en la EPOC avanzada.',
      factores_riesgo: ['Hipoxemia crónica mantenida', 'Hipercapnia y acidosis respiratoria', 'Enfisema extenso con DLCO muy reducida', 'Apnea obstructiva del sueño asociada (síndrome de solapamiento)', 'Desaturación nocturna y de esfuerzo no corregida', 'Exacerbaciones graves repetidas', 'Tromboembolia pulmonar previa', 'Poliglobulia secundaria', 'Cardiopatía izquierda concomitante', 'Altitud elevada'],
      clinica: 'Disnea desproporcionada a la obstrucción, síncope o presíncope de esfuerzo, dolor torácico y fatiga. En la exploración, ingurgitación yugular, segundo tono pulmonar reforzado, soplo de insuficiencia tricuspídea, hepatomegalia pulsátil, ascitis y edemas. La disociación entre una función pulmonar solo moderadamente alterada y una disnea grave con hipoxemia marcada es la señal de alarma.',
      criterios_dx: 'Sospecha por ecocardiograma (velocidad de regurgitación tricuspídea, dilatación y disfunción del ventrículo derecho). La confirmación requiere cateterismo cardiaco derecho, que solo se indica si el resultado va a cambiar la conducta: sospecha de hipertensión pulmonar grave, valoración de trasplante o duda entre grupo 1 y grupo 3.',
      laboratorio: 'Péptido natriurético elevado como marcador de sobrecarga derecha y de pronóstico. Gasometría con hipoxemia e hipercapnia. Hematocrito para la poliglobulia. Función hepática y renal alteradas por congestión en el fallo derecho avanzado.',
      imagen: 'Ecocardiograma como prueba inicial. Tomografía con dilatación de la arteria pulmonar (cociente arteria pulmonar/aorta mayor de 1) y valoración del enfisema. Gammagrafía de ventilación-perfusión o angiotomografia si se sospecha enfermedad tromboembólica crónica, que es tratable y no debe pasarse por alto.',
      complementarios: 'Electrocardiograma con P pulmonale, desviación derecha del eje, patrón S1Q3T3 o bloqueo de rama derecha. Marcha de 6 minutos como marcador funcional y pronóstico. Estudio de sueño si hay sospecha de apnea asociada.',
      dx_diferencial: 'Hipertensión arterial pulmonar del grupo 1 (que exige tratamiento específico), hipertensión pulmonar por cardiopatía izquierda del grupo 2, hipertensión pulmonar tromboembólica crónica del grupo 4 (potencialmente curable con endarterectomía), y la coexistencia de fibrosis y enfisema, que produce presiones especialmente altas.',
      tx_medico: 'El tratamiento es el de la enfermedad de base: optimizar la broncodilatación, corregir la hipoxemia con oxigenoterapia (la única medida con efecto demostrado sobre la presión pulmonar en la EPOC), tratar la apnea del sueño asociada, rehabilitación y abandono del tabaco. Diuréticos con prudencia en el fallo derecho congestivo, evitando la depleccion excesiva, que reduce la precarga de un ventrículo derecho que la necesita.',
      tx_farmacologico: 'Los vasodilatadores pulmonares NO están indicados de forma general en la hipertensión pulmonar del grupo 3: empeoran el desequilibrio ventilación-perfusión al vasodilatar zonas mal ventiladas y pueden agravar la hipoxemia. Solo se plantean en centros expertos, en el fenotipo de hipertensión pulmonar grave con obstrucción leve, y siempre de forma individualizada. La sangría se reserva a la poliglobulia extrema sintomática.',
      tx_intervencionista: 'Remisión a unidad experta si se sospecha hipertensión pulmonar grave. Trasplante pulmonar en el paciente candidato. Endarterectomía o angioplastia pulmonar si el mecanismo resulta ser tromboembólico crónico.',
      criterios_uci: 'Fallo derecho agudo con hipotensión, oliguria o hipoperfusión, que en este contexto tiene mal pronóstico y exige un balance de volumen muy fino y, con frecuencia, vasopresores en lugar de más diurético o más volumen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La hipertensión pulmonar progresiva es uno de los criterios de remisión a trasplante en la EPOC avanzada.',
      seguimiento_hospitalario: 'Control de balance hídrico, peso y función renal en el fallo derecho descompensado. Vigilar la respuesta a la corrección de la hipoxemia.',
      seguimiento_ambulatorio: 'Ecocardiograma periódico, marcha de 6 minutos, cumplimiento y eficacia de la oxigenoterapia, y control de la apnea del sueño. Vigilar los signos de congestión derecha.',
      pronostico: 'Marcador independiente de mortalidad: su presencia empeora claramente la supervivencia y la capacidad funcional. La forma grave con obstrucción leve tiene un pronóstico especialmente malo y se comporta más como una enfermedad vascular que como una EPOC.',
      algoritmo: ['Sospechar ante disnea o hipoxemia desproporcionadas a la obstrucción', 'Ecocardiograma como primera prueba', 'Descartar cardiopatía izquierda y enfermedad tromboembólica crónica', 'Optimizar oxigenación: gasometría y oxigenoterapia si cumple criterios', 'Tratar la apnea del sueño asociada y optimizar la broncodilatación', 'Diuréticos con prudencia si hay congestión derecha', 'NO iniciar vasodilatadores pulmonares de forma rutinaria', 'Cateterismo derecho solo si va a cambiar la conducta', 'Remitir a unidad experta si la hipertensión pulmonar es grave', 'Valorar trasplante en el candidato adecuado']
    },
    {
      nombre: 'Deficiencia de alfa-1-antitripsina',
      color: '#5b4a86',
      definicion: 'Trastorno hereditario autosómico codominante por variantes del gen SERPINA1 que reducen la concentración o la función de la alfa-1-antitripsina, principal inhibidor de la elastasa del neutrófilo, y producen enfisema precoz y, en algunos genotipos, hepatopatía.',
      fisiopatologia: 'Sin suficiente inhibidor, la elastasa liberada por los neutrófilos destruye sin freno la elastina del parénquima pulmonar: el resultado es un enfisema PANLOBULILLAR de predominio en LÓBULOS INFERIORES, al revés de la distribución del enfisema del fumador. El tabaco multiplica el daño porque oxida e inactiva el poco inhibidor disponible y recluta más neutrófilos. En el genotipo ZZ, la proteína anómala polimeriza dentro del hepatocito y se acumula: de ahi la hepatopatía, que no depende de la falta en el pulmón sino del acumulo en el hígado.',
      epidemiologia: 'El genotipo grave PiZZ afecta aproximadamente a 1 de cada 2000 a 5000 personas de ascendencia europea y esta muy infradiagnosticado: la demora media entre el primer síntoma y el diagnóstico se mide en años y son frecuentes varios médicos consultados antes de llegar a el. Explica entre el 1 y el 2% de todos los casos de EPOC.',
      factores_riesgo: ['Genotipo PiZZ, y en menor medida PiSZ y variantes nulas', 'Tabaquismo, que adelanta la aparición del enfisema en décadas', 'Exposición laboral a polvos y humos', 'Antecedentes familiares de enfisema o hepatopatía precoces', 'Infecciones respiratorias de repetición en la infancia', 'Asma o bronquiectasias asociadas', 'Ascendencia del norte y del oeste de Europa', 'Colestasis neonatal en la historia personal', 'Paniculitis o vasculitis asociada a anticuerpos anticitoplasma de neutrófilo', 'Sexo masculino para una misma carga tabaquica'],
      clinica: 'EPOC de aparición temprana, típicamente entre los 30 y los 50 años, con escasa o nula carga tabaquica, disnea desproporcionada y a menudo etiquetada de asma durante años. Puede asociar bronquiectasias, hepatopatía crónica o cirrosis, paniculitis necrosante y vasculitis. En el niño, colestasis neonatal.',
      criterios_dx: 'Concentración sérica de alfa-1-antitripsina baja (por debajo de 1.1 g/L o de 20 micromol/L, con matices según el laboratorio) seguida de determinación del fenotipo o del genotipo, que es lo que confirma. La OMS y las guías recomiendan cribar AL MENOS UNA VEZ a todo paciente con EPOC, no solo a los jóvenes. Al confirmarse, ofrecer estudio familiar y consejo genético.',
      laboratorio: 'Alfa-1-antitripsina sérica, que es un reactante de fase aguda y puede resultar falsamente normal si hay inflamación: conviene medir a la vez la proteína C reactiva. Fenotipado o genotipado confirmatorio. Perfil hepático completo y estudio de fibrosis en el genotipo ZZ.',
      imagen: 'Tomografía de tórax con enfisema panlobulillar de predominio BASAL, patrón que por si solo debe hacer pensar en el diagnóstico. Bronquiectasias asociadas con relativa frecuencia. Ecografía o elastografía hepática en el ZZ para el cribado de fibrosis.',
      complementarios: 'Espirometría y DLCO seriadas para valorar la progresión, que en estos pacientes puede ser más rápida. Estudio familiar de primer grado.',
      dx_diferencial: 'EPOC del fumador (enfisema centrolobulillar de predominio superior), asma de larga evolución, bronquiectasias de otra causa, síndrome de Swyer-James, histiocitosis de células de Langerhans y linfangioleiomiomatosis en la mujer joven.',
      tx_medico: 'Todo lo de la EPOC común, con especial insistencia en el ABANDONO ABSOLUTO DEL TABACO, que es la medida que más modifica el curso, y en evitar la exposición laboral. Vacunación completa, incluida la de la hepatitis A y B por la afectación hepática. Evitar el alcohol.',
      tx_farmacologico: 'Broncodilatadores y corticoide inhalado según los mismos criterios que en la EPOC común. TRATAMIENTO SUSTITUTIVO con alfa-1-antitripsina purificada intravenosa semanal en el déficit grave con enfisema demostrado y obstrucción establecida: enlentece la pérdida de densidad pulmonar medida por tomografía, con efecto menos claro sobre síntomas y exacerbaciones. No esta indicado si no hay enfermedad pulmonar, ni en el paciente que sigue fumando, ni en la hepatopatía, sobre la que no actúa.',
      tx_intervencionista: 'Valvulas o cirugía de reducción de volumen con resultados peores que en el enfisema del fumador por la distribución basal y homogénea. Trasplante pulmonar en el paciente avanzado, con buenos resultados y a edad más temprana que en la EPOC común. Trasplante hepático si la hepatopatía progresa, y es curativo del defecto porque el hígado nuevo produce la proteína normal.',
      criterios_uci: 'Los mismos que en cualquier exacerbación grave de EPOC.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfisema avanzado con criterios habituales, generalmente a edad más temprana. Trasplante hepático si hay cirrosis descompensada o carcinoma hepatocelular.',
      seguimiento_hospitalario: 'Sin particularidades frente a la EPOC común durante el ingreso.',
      seguimiento_ambulatorio: 'Espirometría y DLCO periódicas, tomografía para cuantificar el enfisema si se plantea sustitución, y vigilancia hepática en el genotipo ZZ (perfil hepático, elastografía y cribado de carcinoma hepatocelular si hay cirrosis). Estudio y consejo genético familiar.',
      pronostico: 'Muy dependiente del tabaco: el no fumador con genotipo ZZ puede tener una esperanza de vida prácticamente normal, mientras que el fumador desarrolla enfisema grave décadas antes. El diagnóstico precoz importa sobre todo porque permite actuar sobre esa variable.',
      algoritmo: ['Cribar con alfa-1-antitripsina sérica a TODO paciente con EPOC al menos una vez', 'Priorizar si hay enfisema precoz, basal, poca carga tabaquica o historia familiar', 'Medir proteína C reactiva a la vez para evitar el falso normal', 'Si el valor es bajo: fenotipado o genotipado confirmatorio', 'Confirmado el déficit grave: valorar enfisema con tomografía y función con espirometría y DLCO', 'Insistir en el abandono absoluto del tabaco y evitar exposiciones laborales', 'Vacunación completa, incluidas hepatitis A y B', 'Valorar tratamiento sustitutivo intravenoso si hay enfisema con obstrucción establecida', 'Cribado hepático periódico en el genotipo ZZ', 'Ofrecer estudio familiar y consejo genético']
    },
    {
      nombre: 'Comorbilidades y complicaciones del tratamiento',
      color: '#6b4a2e',
      definicion: 'Conjunto de enfermedades que acompañan a la EPOC con una frecuencia muy superior a la esperable por la edad, y efectos adversos de su tratamiento. Determinan buena parte de los ingresos y de las muertes, sobre todo en la enfermedad leve y moderada.',
      fisiopatologia: 'Comparten con la EPOC factores de exposición (tabaco, contaminación), envejecimiento acelerado del tejido, inflamación sistémica de bajo grado, estrés oxidativo, sedentarismo e hipoxemia. La hiperinsuflación comprime el corazón y reduce el llenado, lo que explica en parte el vínculo cardiopulmonar. Del lado del tratamiento, el corticoide inhalado deposita fármaco en la orofaringe y deprime la inmunidad local de la via aérea, y el corticoide sistémico repetido produce los efectos conocidos de la exposición acumulada.',
      epidemiologia: 'En la EPOC leve y moderada la mayoría de las muertes NO son respiratorias: son cardiovasculares y por cáncer de pulmón. La enfermedad cardiovascular afecta a más de la mitad de los pacientes, el cáncer de pulmón multiplica su riesgo entre 2 y 5 veces respecto al fumador sin EPOC, y la ansiedad y la depresión afectan a un tercio y están sistemáticamente infratratadas.',
      factores_riesgo: ['Tabaquismo compartido como causa común', 'Edad avanzada e inflamación sistémica', 'Sedentarismo y pérdida de masa muscular', 'Hipoxemia crónica', 'Uso mantenido de corticoide inhalado a dosis altas', 'Ciclos repetidos de corticoide sistémico', 'Obstrucción grave y exacerbaciones frecuentes', 'Aislamiento social y bajo nivel socioeconómico', 'Reflujo gastroesofágico', 'Apnea obstructiva del sueño coexistente'],
      clinica: 'Depende de la comorbilidad: angina o disnea de origen cardiaco confundida con la respiratoria, palpitaciones por fibrilación auricular, fracturas por fragilidad, ánimo bajo y aislamiento, pérdida de peso y debilidad. Del lado del tratamiento: candidiasis orofaringea y disfonia por el corticoide inhalado, neumonías de repetición, sequedad de boca y retención urinaria por el anticolinérgico inhalado, temblor y taquicardia por el beta-2, e hiperglucemia e insomnio por el corticoide sistémico.',
      criterios_dx: 'No hay criterio único: la clave es BUSCARLAS ACTIVAMENTE en cada revisión, porque sus síntomas se atribuyen por inercia a la EPOC. Un paciente con disnea que no encaja con su función pulmonar tiene una comorbilidad hasta que se demuestre lo contrario.',
      laboratorio: 'Hemograma (anemia, frecuente e infratratada), glucemia y hemoglobina glucosilada, perfil lipídico, función renal, péptido natriurético y troponina si hay sospecha cardiaca, y vitamina D y calcio en el paciente con corticoide.',
      imagen: 'Tomografía de baja dosis para cribado de cáncer de pulmón en el fumador que cumple criterios de edad y carga tabaquica: la EPOC es un multiplicador de riesgo y no una razón para no cribar. Densitometría ósea en el paciente con corticoide sistémico repetido o inhalado a dosis altas. Ecocardiograma ante sospecha cardiaca.',
      complementarios: 'Cuestionarios de cribado de ansiedad y depresión. Valoración nutricional y de masa muscular. Estudio de sueño si hay ronquido, somnolencia o desaturación nocturna. Revisión de la salud bucodental por el corticoide inhalado.',
      dx_diferencial: 'El principal es separar la disnea de origen respiratorio de la cardiaca, que coexisten con enorme frecuencia. El péptido natriurético, el ecocardiograma y la respuesta al tratamiento ayudan, pero muchas veces la respuesta correcta es que hay las dos.',
      tx_medico: 'Tratar cada comorbilidad según su guía, sin infratratarla por miedo a la EPOC. Los BETABLOQUEANTES cardioselectivos NO están contraindicados y deben mantenerse si hay indicación cardiaca: su beneficio supera al riesgo respiratorio. Rehabilitación respiratoria, que mejora a la vez capacidad funcional, ánimo y masa muscular. Soporte nutricional y prevención de caídas.',
      tx_farmacologico: 'Prevenir los efectos del corticoide inhalado con cámara espaciadora y enjuague bucal tras cada dosis, y usar la dosis mínima eficaz. Retirar el corticoide inhalado si no hay indicación (eosinófilos bajos, sin exacerbaciones), preferentemente de forma gradual y manteniendo la doble broncodilatación. Limitar el corticoide sistémico a 5 días por exacerbación. Profilaxis de osteoporosis y suplementos de calcio y vitamina D cuando corresponda.',
      tx_intervencionista: 'Los propios de cada comorbilidad: revascularización, ablación de fibrilación auricular, cirugía del cáncer de pulmón con valoración funcional previa (FEV1 y DLCO predichos posoperatorios y prueba de esfuerzo).',
      criterios_uci: 'Los de la comorbilidad descompensada, no los de la EPOC en si.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Las comorbilidades mal controladas son la principal causa de exclusión en la valoración de trasplante.',
      seguimiento_hospitalario: 'Aprovechar el ingreso para revisar comorbilidades no diagnosticadas, especialmente cardiovasculares, anemia y desnutrición.',
      seguimiento_ambulatorio: 'Revisión anual estructurada: riesgo cardiovascular, cribado de cáncer de pulmón si procede, densitometría si hay exposición a corticoide, cribado de ansiedad y depresión, estado nutricional, salud bucodental y revisión de la indicación del corticoide inhalado.',
      pronostico: 'La carga de comorbilidad predice mortalidad de forma independiente de la función pulmonar. En la EPOC leve y moderada, tratar bien la comorbilidad cardiovascular y cribar el cáncer de pulmón salva más vidas que optimizar el inhalador.',
      algoritmo: ['Asumir que la disnea desproporcionada esconde una comorbilidad', 'Cribar riesgo cardiovascular y no retirar betabloqueantes cardioselectivos indicados', 'Ofrecer cribado de cáncer de pulmón con tomografía de baja dosis si cumple criterios', 'Buscar y tratar anemia, desnutrición y pérdida de masa muscular', 'Cribar ansiedad y depresión con cuestionario, no a ojo', 'Valorar apnea del sueño si hay ronquido o somnolencia', 'Revisar en cada visita la indicación real del corticoide inhalado', 'Enseñar cámara espaciadora y enjuague bucal tras cada dosis', 'Limitar el corticoide sistémico a 5 días por exacerbación', 'Densitometría y profilaxis ósea si hay exposición acumulada a corticoide']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El ingreso por exacerbación es el momento de mayor riesgo y también la mejor oportunidad de la enfermedad: uno de cada cinco pacientes reingresa en 30 días, y buena parte de esos reingresos se decide por lo que se hace (o no se hace) en las horas previas al alta. Lo que sigue es la lista de comprobacion del ingreso y del alta.',
    parametros: ['Objetivo de saturación del 88 al 92%, mejor con mascarilla de Venturi: más oxígeno empeora la hipercapnia', 'Gasometría de control 30 a 60 minutos después de iniciar oxígeno o ventilación no invasiva', 'Si pH 7.35 o menor con PaCO2 mayor de 45 mmHg: ventilación no invasiva sin demora, no "a ver como evoluciona"', 'Prednisona 40 mg durante 5 días, sin pauta descendente', 'Antibiótico solo si hay purulencia con aumento de disnea o de volumen, o si el paciente va a ventilarse', 'Radiografía y electrocardiograma a todos: buscar consolidación, fibrilación auricular, neumotórax e insuficiencia cardiaca', 'Descartar activamente embolia pulmonar si la exacerbación no tiene causa clara', 'Calcular DECAF al ingreso para estratificar el riesgo y ajustar el nivel de cuidados', 'Antes del alta: revisar y ESCALAR el tratamiento de fondo, porque una exacerbación casi siempre significa que era insuficiente', 'Antes del alta: comprobar la técnica del inhalador con el dispositivo real, vacunar, ofrecer deshabituacion tabaquica y derivar a rehabilitación', 'Cita en 1 a 4 semanas y revaluacion de oxigenoterapia o ventilación domiciliaria a las 4 a 8 semanas, nunca con los datos del ingreso'],
    criterios_uci_general: 'Acidosis o hipercapnia progresivas pese a ventilación no invasiva, necesidad de intubación, inestabilidad hemodinámica, alteración del nivel de conciencia o necesidad de vasopresores. La decisión se toma junto con la situación funcional basal y las voluntades del paciente: en la EPOC muy avanzada, definir el techo terapéutico ANTES de la crisis forma parte del buen tratamiento.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Remisión a unidad de trasplante con BODE de 7 a 10, FEV1 menor del 20%, DLCO menor del 20%, enfisema homogéneo, hipercapnia o hipertensión pulmonar progresivas, o exacerbaciones graves repetidas pese a tratamiento óptimo.',
    prevencion: 'Primaria: control del tabaquismo (la medida de salud publica de mayor impacto), reducción de la exposición a biomasa y a contaminantes laborales y atmosfericos, y protección del desarrollo pulmonar en la infancia. Secundaria: búsqueda activa de casos con espirometría en el fumador sintomático mayor de 40 años, cribado de alfa-1-antitripsina una vez en la vida y detección precoz de comorbilidades. Terciaria: vacunación, rehabilitación respiratoria, tratamiento de fondo ajustado al rasgo dominante, revisión de la técnica inhalatoria, planes de acción escritos para la exacerbación y consulta precoz tras el alta.'
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
  'EPOC estable': { definicion: [1, 5, 17, 18], criterios_dx: [1, 5, 17, 18], laboratorio: [1, 5, 17, 18], tx_farmacologico: [1, 5, 17, 18] },
  'Exacerbación de la EPOC': { definicion: [2, 3, 6, 7, 8], criterios_dx: [2, 3, 6, 7, 8], laboratorio: [2, 3, 6, 7, 8], tx_farmacologico: [2, 3, 6, 7, 8] },
  'Insuficiencia respiratoria crónica y oxigenoterapia domiciliaria': { definicion: [9, 10, 11], criterios_dx: [9, 10, 11], laboratorio: [9, 10, 11], tx_farmacologico: [9, 10, 11] },
  'Hipertensión pulmonar y cor pulmonale': { definicion: [1, 17], criterios_dx: [1, 17], laboratorio: [1, 17], tx_farmacologico: [1, 17] },
  'Deficiencia de alfa-1-antitripsina': { definicion: [16], criterios_dx: [16], laboratorio: [16], tx_farmacologico: [16] },
  'Comorbilidades y complicaciones del tratamiento': { definicion: [1, 12, 13, 15], criterios_dx: [1, 12, 13, 15], laboratorio: [1, 12, 13, 15], tx_farmacologico: [1, 12, 13, 15] }
};
export const estigmasTitulo = 'Signos de exploración en la EPOC, del más frecuente al de peor pronóstico';
export const estigmas = [
  { s: 'Espiración alargada', p: 'Casi constante', photo: null, desc: 'La espiración normal dura menos de 4 segundos; en la EPOC se prolonga y a menudo se acompaña de sibilancias teleespiratorias. Es la traduccion directa de la limitación al flujo y aparece antes que la disnea de reposo.' },
  { s: 'Respiración con labios fruncidos', p: '60-80% en fases avanzadas', photo: null, desc: 'El paciente la descubre solo. Al frenar la salida del aire crea una presión positiva que mantiene abierta la via aérea pequeña y reduce el colapso espiratorio: es autoterapia de la hiperinsuflación dinámica, y merece enseñarse formalmente en rehabilitación.' },
  { s: 'Tórax en tonel con aumento del diámetro anteroposterior', p: '~50%', photo: null, desc: 'Traduce la hiperinsuflación crónica. Se acompaña de aplanamiento diafragmático, que en la radiografía se ve como diafragmas planos y aumento del espacio retroesternal.' },
  { s: 'Disminución global del murmullo vesicular', p: '~70%', photo: null, desc: 'El signo auscultatorio más útil y el que mejor se correlaciona con la gravedad de la obstrucción. Un tórax "silencioso" en plena exacerbación no es tranquilizador: significa que apenas se mueve aire.' },
  { s: 'Uso de musculatura accesoria', p: 'En exacerbación y fases avanzadas', photo: null, desc: 'Esternocleidomastoideos y escalenos visibles, con tiraje. Indica que la carga mecánica supera la capacidad del diafragma aplanado y es uno de los criterios para iniciar ventilación no invasiva antes incluso de tener la gasometría.' },
  { s: 'Signo de Hoover', p: '~30% en obstrucción grave', photo: null, desc: 'Retracción paradójica del borde costal inferior en la inspiración, porque el diafragma aplanado tira de las costillas hacia dentro en vez de expandirlas. Su presencia indica hiperinsuflación importante y se asocia a peor FEV1 y mayor disnea.' },
  { s: 'Respiración paradójica abdominal', p: 'Signo de alarma', photo: null, desc: 'El abdomen se hunde en la inspiración en lugar de expandirse: significa fatiga diafragmática. Es un signo de fracaso ventilatorio inminente y obliga a asegurar la via aérea o a iniciar soporte sin esperar.' },
  { s: 'Cianosis central', p: '~20% en avanzada', photo: null, desc: 'Requiere al menos 5 g/dL de hemoglobina reducida, de modo que puede faltar en el paciente anémico pese a hipoxemia grave y ser llamativa en el poliglobulico con hipoxemia moderada. Nunca sustituye a la pulsioximetría ni a la gasometría.' },
  { s: 'Asterixis y somnolencia', p: 'En hipercapnia aguda', photo: null, desc: 'Traducen narcosis por dióxido de carbono. Junto con la cefalea matutina y el temblor son la señal de que la PaCO2 esta subiendo rápido, y obligan a gasometría inmediata y a replantear el flujo de oxígeno.' },
  { s: 'Ingurgitación yugular, hepatomegalia y edemas', p: '~25% en avanzada', photo: null, desc: 'Cor pulmonale. Hay que separarlo de la insuficiencia cardiaca izquierda, que coexiste con frecuencia: en el cor pulmonale puro no hay ortopnea marcada ni crepitantes bibasales de edema, y el ecocardiograma muestra el ventrículo derecho dilatado con el izquierdo conservado.' },
  { s: 'Pérdida de masa muscular y de peso', p: '~25%', photo: null, desc: 'Marcador de gravedad sistémica y componente del índice BODE. Un índice de masa corporal de 21 o menos empeora el pronóstico de forma independiente del FEV1, y es reversible en parte con rehabilitación y soporte nutricional.' },
  { s: 'Candidiasis orofaringea y disfonia', p: '~10% con corticoide inhalado', photo: null, desc: 'Efecto local del corticoide inhalado, no de la enfermedad. Se previene con cámara espaciadora y enjuague bucal tras cada dosis, y su aparición es una buena excusa para revisar si el corticoide inhalado sigue estando indicado.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Grado espirometrico GOLD 1 a 4': [1],
  'Grupo GOLD A, B o E (calculadora disponible)': [1],
  'Escala mMRC de disnea': [1, 5],
  'Cuestionario CAT': [1],
  'Índice BODE (calculadora disponible)': [5],
  'Definición y gravedad de Roma para la exacerbación': [2],
  'Criterios de Anthonisen (calculadora disponible)': [3, 8],
  'Escala DECAF (calculadora disponible)': [4]
};
export const escalaCalc = {
  'Grupo GOLD A, B o E (calculadora disponible)': 'gold-abe',
  'Índice BODE (calculadora disponible)': 'bode',
  'Criterios de Anthonisen (calculadora disponible)': 'anthonisen',
  'Escala DECAF (calculadora disponible)': 'decaf'
};
export const compGroups = [
  { name: 'La enfermedad y su descompensación', items: ['EPOC estable', 'Exacerbación de la EPOC'] },
  { name: 'Consecuencias de la enfermedad avanzada', items: ['Insuficiencia respiratoria crónica y oxigenoterapia domiciliaria', 'Hipertensión pulmonar y cor pulmonale'] },
  { name: 'Forma especial y carga añadida', items: ['Deficiencia de alfa-1-antitripsina', 'Comorbilidades y complicaciones del tratamiento'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la enfermedad misma en sus dos estados: estable y exacerbada. Las dos siguientes son a lo que conduce cuando avanza: la insuficiencia respiratoria crónica, donde se decide la oxigenoterapia domiciliaria, y la hipertensión pulmonar con cor pulmonale. La quinta es la forma que no hay que dejar de buscar, porque cambia el consejo genético y añade un tratamiento propio. La última recoge lo que mata a la mayoría de los pacientes con EPOC leve y moderada, que no es la EPOC: la comorbilidad cardiovascular y el cáncer de pulmón, junto con los efectos adversos del propio tratamiento.';
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
  root: { title: 'EPOC', color: '#2f5d6e', target: 'definicion' },
  branches: [
    { title: 'DIAGNOSTICO', sub: 'Sin espirometría no hay EPOC', color: '#2f5d6e', target: 'diagnostico', leaves: [
      { title: 'FEV1/FVC menor de 0.70', sub: 'Posbroncodilatador', color: '#2f5d6e', target: 'diagnostico' },
      { title: 'Grado GOLD 1 a 4', sub: 'FEV1: pronóstico', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Grupo A, B o E', sub: 'Síntomas y exacerbaciones', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Eosinofilos', sub: '300 o más: corticoide inhalado', color: '#5b4a86', target: 'diagnostico' }
    ] },
    { title: 'EXACERBACION', sub: 'Menos de 14 días, y descartar imitadores', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Saturación 88 a 92%', sub: 'Más oxígeno no es mejor', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Prednisona 5 días', sub: 'No 14, sin descenso', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Antibiótico si purulencia', sub: 'Criterios de Anthonisen', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'pH 7.35 o menor', sub: 'Ventilación no invasiva ya', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'ENFERMEDAD AVANZADA', sub: 'Lo que cambia la mortalidad', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Dejar de fumar', sub: 'Frena la caída del FEV1', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Oxígeno 15 horas al dia', sub: 'PaO2 55 o menos', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Cor pulmonale', sub: 'No vasodilatadores de rutina', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Comorbilidad y cáncer', sub: 'Lo que mata en la EPOC leve', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 4, 16], no_invasivos: [1, 3, 4, 5], imagen: [1, 15] };
export const clasificacionCite = [1, 2, 3, 4, 5];
export const seguimientoCite = [1, 6, 7, 8];
