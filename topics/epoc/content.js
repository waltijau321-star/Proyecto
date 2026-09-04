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
  subtitulo: 'Modulo 48 · Medicina Interna',
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
  <desc id="epoc-curva-d">En la EPOC el pico de flujo espiratorio es bajo y la rama descendente se hace concava hacia el eje de volumen, con el volumen residual desplazado a la derecha; en la restriccion la curva es estrecha y desplazada, con flujos conservados para el volumen que mueve.</desc>

  <rect x="20" y="4" width="620" height="34" rx="6" fill="none" stroke="var(--line)"/>
  <text x="32" y="19" font-size="11" fill="var(--ink)">La obstruccion se define por el cociente <tspan font-weight="700">FEV1/FVC menor de 0.70 POSBRONCODILATADOR</tspan>.</text>
  <text x="32" y="33" font-size="11" fill="var(--ink-dim)">La forma de la curva dice el patron; el cociente lo confirma.</text>

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
  <text x="452" y="195" font-size="10" fill="var(--ink-dim)">CONCAVA, arrastrada sobre el eje.</text>
  <text x="452" y="208" font-size="10" fill="var(--ink-dim)">RV desplazado a la derecha:</text>
  <text x="452" y="221" font-size="10" fill="var(--ink-dim)">atrapamiento aereo.</text>

  <line x1="452" y1="252" x2="484" y2="252" stroke="#5b4a86" stroke-width="2.2" stroke-dasharray="6 4"/>
  <text x="492" y="256" font-size="11.5" fill="#5b4a86" font-weight="600">Restrictiva</text>
  <text x="452" y="272" font-size="10" fill="var(--ink-dim)">Curva estrecha y desplazada,</text>
  <text x="452" y="285" font-size="10" fill="var(--ink-dim)">con flujos conservados</text>
  <text x="452" y="298" font-size="10" fill="var(--ink-dim)">para el volumen que mueve.</text>
</svg>
<div style="max-width:660px;margin:6px auto 0;font-size:9.5px;color:var(--ink-dim);border:1px solid var(--line);border-radius:8px;padding:5px 9px;">
  <strong style="color:var(--ink);">Como leerla en la practica.</strong> Antes de mirar ningun numero, la forma de la rama espiratoria ya separa los dos patrones: <strong>concava y arrastrada</strong> en la obstruccion, <strong>estrecha y de aspecto normal</strong> en la restriccion. El cociente FEV1/FVC posbroncodilatador por debajo de 0.70 confirma la obstruccion y es <strong>obligatorio</strong> para diagnosticar EPOC: sin espirometria no hay diagnostico. El FEV1 en porcentaje del predicho <strong>gradua</strong> la obstruccion (GOLD 1 a 4) pero no decide el tratamiento, que depende de los sintomas y de las exacerbaciones.
</div>`;

const hiperinsuflacionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2f5d6e;border-radius:8px;padding:5px 9px;background:#2f5d6e12;margin-bottom:6px;">
    <strong style="color:#2f5d6e;">La disnea de la EPOC no viene del FEV1, viene de no poder vaciar el pulmon.</strong> <span style="color:var(--ink-dim);">Por eso un broncodilatador puede cambiar la vida del paciente moviendo el FEV1 apenas 100 mL.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2f5d6e22;border:1px solid #2f5d6e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2f5d6e;">1. Limitacion al<br>FLUJO ESPIRATORIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La perdida de retraccion elastica (enfisema) y el estrechamiento de la via aerea peque&#241;a (bronquiolitis) hacen que la espiracion sea lenta. El pulmon <strong style="color:var(--ink);">no termina de vaciarse</strong> antes de que empiece la siguiente inspiracion.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. ATRAPAMIENTO<br>AEREO y auto-PEEP</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El volumen que queda al final de la espiracion sube, y con el la presion alveolar teleespiratoria: es la <strong style="color:var(--ink);">PEEP intrinseca</strong>. El paciente tiene que generar esa presion negativa <strong>antes</strong> de que entre nada de aire: es una carga umbral inspiratoria que se paga en cada respiracion.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3. HIPERINSUFLACION<br>DINAMICA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Al esforzarse el paciente respira mas deprisa, el tiempo espiratorio se acorta y el atrapamiento <strong>aumenta con el ejercicio</strong>. La capacidad inspiratoria cae, el diafragma se aplana y trabaja en desventaja mecanica. <strong style="color:var(--ink);">La caida de la capacidad inspiratoria en esfuerzo predice la disnea y la tolerancia al ejercicio mejor que el FEV1.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. DESINFLAR es<br>el objetivo</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Los broncodilatadores de larga duracion alargan el tiempo espiratorio util y <strong style="color:var(--ink);">reducen el volumen atrapado</strong>. La mejoria sintomatica se explica por ahi, no por el cambio del FEV1, que puede ser minimo. La rehabilitacion respiratoria actua sobre el mismo eje entrenando el musculo y ense&#241;ando a espirar con labios fruncidos.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">En el paciente ventilado, el mismo mecanismo mata.</strong> La auto-PEEP impide disparar el respirador (el paciente hace esfuerzos que la maquina no ve), reduce el retorno venoso y puede producir hipotension y actividad electrica sin pulso. Se trata <strong>alargando el tiempo espiratorio</strong> (bajar la frecuencia y el volumen minuto, subir el flujo inspiratorio), con broncodilatadores, y a&#241;adiendo PEEP externa hasta alrededor del 80% de la intrinseca para facilitar el disparo. Ante hipotension brusca en un obstructivo ventilado: <strong style="color:#8c3a34;">desconectar del respirador y dejar espirar</strong>.
  </div>
</div>`;

const goldHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2f5d6e;border-radius:8px;padding:5px 9px;background:#2f5d6e12;margin-bottom:6px;">
    <strong style="color:#2f5d6e;">Dos ejes independientes.</strong> <span style="color:var(--ink-dim);">El <strong>grado GOLD 1 a 4</strong> mide la obstruccion por el FEV1 y sirve para el pronostico. El <strong>grupo A, B o E</strong> mide sintomas y exacerbaciones y es el que decide el tratamiento inicial. Un GOLD 4 puede ser grupo A y un GOLD 2 puede ser grupo E.</span>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;">
      <div style="font-weight:700;color:#2f5d6e;margin-bottom:3px;">Grado espirometrico (FEV1 % del predicho, con FEV1/FVC menor de 0.70)</div>
      <div style="color:var(--ink-dim);line-height:1.5;">GOLD 1 leve: 80% o mas<br>GOLD 2 moderada: 50 a 79%<br>GOLD 3 grave: 30 a 49%<br>GOLD 4 muy grave: menos de 30%</div>
    </div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;">
      <div style="font-weight:700;color:#2f5d6e;margin-bottom:3px;">Los dos datos del grupo</div>
      <div style="color:var(--ink-dim);line-height:1.5;"><strong style="color:var(--ink);">Sintomas</strong>: mMRC 0 a 1 o CAT menor de 10 = poco sintomatico; mMRC 2 o mas o CAT 10 o mas = sintomatico.<br><strong style="color:var(--ink);">Exacerbaciones del ultimo a&#241;o</strong>: cuenta el numero de moderadas y si alguna requirio ingreso.</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;"><span style="font-size:15px;">E</span>2 o mas moderadas<br>o 1 con ingreso</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">LABA + LAMA</strong> de entrada. Si los <strong>eosinofilos en sangre son 300/microlitro o mas</strong>, triple terapia LABA + LAMA + corticoide inhalado desde el inicio. El grupo E ignora los sintomas a proposito: la historia de exacerbaciones pesa mas.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;"><span style="font-size:15px;">B</span>0 o 1 moderada sin ingreso<br>mMRC 2 o mas / CAT 10 o mas</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">LABA + LAMA</strong>. La doble broncodilatacion es superior a cualquier monoterapia en sintomas y en funcion pulmonar, y es la razon por la que GOLD abandono la monoterapia en el paciente sintomatico.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;"><span style="font-size:15px;">A</span>0 o 1 moderada sin ingreso<br>mMRC 0 a 1 / CAT menor de 10</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Un broncodilatador</strong>, de accion corta o larga segun el sintoma. Es el unico grupo en el que la monoterapia sigue siendo aceptable.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #3f6b52;border-radius:8px;background:#3f6b5210;color:var(--ink-dim);">
    <strong style="color:#3f6b52;">Lo que se hace en TODOS los grupos, y pesa mas que el inhalador.</strong> Dejar de fumar (la unica medida que frena la caida del FEV1), vacunacion (gripe anual, neumococo, COVID-19, tosferina y virus respiratorio sincitial segun la edad), <strong>rehabilitacion respiratoria</strong> (sobre todo en las 4 semanas siguientes a un ingreso por exacerbacion, cuando reduce reingresos y mortalidad), actividad fisica, revision de la tecnica inhalatoria en cada consulta y tratamiento de las comorbilidades.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">El seguimiento NO repite el mapa ABE.</strong> A partir de la primera revision se decide por el rasgo que domina: si lo que persiste es la <strong>disnea</strong>, se optimiza la broncodilatacion y la tecnica; si lo que persiste son las <strong>exacerbaciones</strong>, se sube a triple terapia y, si aun asi recurren, se valoran roflumilast (bronquitis cronica con FEV1 menor del 50%), azitromicina (sobre todo en exfumadores) o dupilumab (inflamacion tipo 2 con eosinofilos 300 o mas). Antes de escalar nada: comprobar adherencia y tecnica del inhalador.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La EPOC es una enfermedad heterogenea que combina sintomas respiratorios cronicos (disnea, tos, expectoracion, exacerbaciones) con una <strong>obstruccion al flujo aereo persistente</strong>, producida por alteraciones de la via aerea (bronquitis y bronquiolitis) y del alveolo (enfisema) en proporciones distintas segun el paciente. Dos ideas ordenan todo el tema: el diagnostico <strong>exige espirometria</strong> con un cociente FEV1/FVC posbroncodilatador por debajo de 0.70, y el tratamiento <strong>no se decide por el FEV1</strong> sino por los sintomas y las exacerbaciones.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Sin espirometria no hay EPOC.</strong></p>
<p style="margin:0 0 12px;">Es el error mas repetido del tema: etiquetar de EPOC a un fumador con disnea y tos sin haberle hecho nunca una espirometria. Hasta un tercio de los pacientes tratados como EPOC en atencion primaria no cumplen el criterio funcional, y una proporcion parecida de los que si lo cumplen esta sin diagnosticar. La espirometria debe ser <strong>posbroncodilatador</strong>, porque el asma y la EPOC no se separan bien con la basal, y debe repetirse si el resultado esta cerca del limite. El uso de un cociente fijo de 0.70 sobrediagnostica al anciano e infradiagnostica al joven, y por eso se compara siempre con la clinica y, cuando hay dudas, con el limite inferior de la normalidad.</p>
${figBlock('Figura 1', 'Curva flujo-volumen: como se reconoce el patron antes de mirar los numeros', curvaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que se ahoga el paciente.</strong></p>
<p style="margin:0 0 12px;">La respuesta intuitiva (porque el aire no entra) es la equivocada. En la EPOC el aire entra: <strong>lo que no puede es salir</strong>. La espiracion lenta deja aire atrapado, el volumen teleespiratorio sube y aparece una presion positiva residual en el alveolo, la <strong>PEEP intrinseca</strong>, que el paciente tiene que vencer antes de poder inspirar. Con el esfuerzo la frecuencia respiratoria sube, el tiempo espiratorio se acorta y el atrapamiento crece: es la <strong>hiperinsuflacion dinamica</strong>, que explica por que la disnea de esfuerzo se correlaciona mal con el FEV1 y bien con la caida de la capacidad inspiratoria.</p>
${figBlock('Figura 2', 'Hiperinsuflacion dinamica: del atrapamiento aereo a la disnea', hiperinsuflacionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se clasifica y como se trata.</strong></p>
<p style="margin:0 0 12px;">GOLD separa deliberadamente dos ejes. El <strong>grado 1 a 4</strong> mide cuanta obstruccion hay por el FEV1 en porcentaje del predicho y sirve para el pronostico. El <strong>grupo A, B o E</strong> combina la carga de sintomas (mMRC o CAT) con la historia de exacerbaciones del ultimo a&#241;o y es el que dicta el tratamiento inicial. El cambio conceptual de las ultimas ediciones fue crear el <strong>grupo E</strong>, que agrupa a todo exacerbador con independencia de los sintomas: quien exacerba tiene un problema distinto del que solo se ahoga, y necesita un tratamiento distinto.</p>
${figBlock('Figura 3', 'Mapa GOLD ABE y tratamiento inicial', goldHtml)}
<p style="margin:0 0 12px;">Los <strong>eosinofilos en sangre periferica</strong> son el biomarcador que mas ha cambiado la practica: por debajo de 100 por microlitro el corticoide inhalado practicamente no aporta nada y si aporta riesgo de neumonia, y a partir de 300 el beneficio en prevencion de exacerbaciones es claro. Otros datos empujan hacia el corticoide inhalado (ingreso previo por exacerbacion, dos o mas exacerbaciones moderadas al a&#241;o, antecedente de asma) y otros lo desaconsejan (neumonias de repeticion, infeccion micobacteriana previa).</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La exacerbacion.</strong></p>
<p style="margin:0 0 12px;">Es un empeoramiento agudo de la disnea, la tos o la expectoracion en menos de 14 dias, con inflamacion local y sistemica, causado por infeccion, contaminacion u otra agresion. Cada exacerbacion deja huella: acelera la caida del FEV1, empeora la calidad de vida y aumenta el riesgo de la siguiente y de muerte. El tratamiento tiene cuatro piezas: <strong>broncodilatador de accion corta</strong>, <strong>corticoide sistemico</strong> 40 mg de prednisona durante <strong>5 dias</strong> (no 14), <strong>antibiotico</strong> solo si hay aumento de la purulencia del esputo con aumento de la disnea o del volumen, o si el paciente necesita ventilacion, y <strong>oxigeno con objetivo de 88 a 92%</strong> de saturacion. Si hay acidosis respiratoria con pH de 7.35 o menos, la <strong>ventilacion no invasiva</strong> es tratamiento de primera linea y reduce intubacion y mortalidad.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que cambia la mortalidad.</strong></p>
<p style="margin:0 0 12px;">La lista es corta y conviene saberla de memoria: <strong>dejar de fumar</strong>, <strong>oxigenoterapia domiciliaria</strong> en el hipoxemico cronico grave, <strong>ventilacion no invasiva domiciliaria</strong> en el hipercapnico seleccionado tras un ingreso, <strong>cirugia o valvulas de reduccion de volumen</strong> en el enfisema de predominio en lobulos superiores con baja tolerancia al ejercicio, <strong>rehabilitacion respiratoria</strong> precoz tras la exacerbacion y, en el exacerbador sintomatico, la <strong>triple terapia</strong> frente a la doble broncodilatacion. Todo lo demas mejora sintomas o exacerbaciones, que no es poco, pero no la supervivencia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar EPOC sin espirometria. No dar corticoide inhalado a un paciente con eosinofilos por debajo de 100 y sin exacerbaciones. No dar oxigeno a alto flujo en la exacerbacion buscando saturaciones del 98%: se empeora la hipercapnia y se puede llegar a la narcosis. No prolongar el corticoide sistemico mas alla de 5 a 7 dias. No pautar antibiotico a toda exacerbacion. No olvidar cribar la deficiencia de alfa-1-antitripsina al menos una vez en la vida de todo paciente con EPOC. Y no escalar el tratamiento sin haber comprobado antes la adherencia y la tecnica del inhalador.</p>`;

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
      compensada: 'Disnea de esfuerzo progresiva, persistente y que el paciente lleva a&#241;os minimizando ("es la edad", "es el tabaco"). Tos cronica con o sin expectoracion, a menudo matutina. Sibilancias y opresion toracica variables. Exploracion con espiracion alargada, torax en tonel, disminucion global del murmullo vesicular, uso de musculatura accesoria y respiracion con labios fruncidos. En fases avanzadas, perdida de peso y de masa muscular, edemas y cianosis. Hasta la mitad de los pacientes con obstruccion no refieren disnea espontaneamente: hay que preguntar por la actividad que han dejado de hacer.',
      descompensada: 'Empeoramiento agudo de disnea, tos o expectoracion en MENOS DE 14 DIAS, con cambio en el color o el volumen del esputo. Taquipnea, taquicardia, sibilancias o torax silente si la obstruccion es extrema, uso de musculatura accesoria y respiracion paradojica abdominal. Signos de alarma: incapacidad para hablar en frases, somnolencia o agitacion (narcosis por dioxido de carbono), asterixis, cianosis, inestabilidad hemodinamica y descenso del nivel de conciencia. El torax silente y la bradipnea anuncian la parada respiratoria.'
    },
    laboratorio: [
      { prueba: 'Espirometria posbroncodilatador (calculadora de grupo GOLD disponible)', utilidad: 'IMPRESCINDIBLE para el diagnostico: cociente FEV1/FVC menor de 0.70 tras broncodilatador. El FEV1 en porcentaje del predicho gradua la obstruccion (GOLD 1 a 4). No se diagnostica EPOC sin ella, y no se hace durante una exacerbacion porque infraestima la funcion basal.' },
      { prueba: 'Eosinofilos en sangre periferica', utilidad: 'Biomarcador que decide el corticoide inhalado. Menos de 100 por microlitro: beneficio minimo y riesgo de neumonia. 300 o mas: beneficio claro en prevencion de exacerbaciones y criterio para triple terapia de inicio en el grupo E. En la exacerbacion, la eosinopenia por debajo de 0.05 x10^9/L puntua en la escala DECAF y marca peor pronostico.' },
      { prueba: 'Gasometria arterial', utilidad: 'Obligada en la exacerbacion con saturacion menor del 92%, en toda sospecha de hipercapnia y para indicar oxigenoterapia domiciliaria. Define la insuficiencia respiratoria (PaO2 menor de 60 mmHg) y su tipo (hipercapnica si la PaCO2 supera 45 mmHg). El pH separa la acidosis aguda de la hipercapnia cronica compensada.' },
      { prueba: 'Alfa-1-antitripsina serica', utilidad: 'Cribado UNA VEZ en la vida en TODO paciente con EPOC, segun recomendacion de la OMS. Prioritario si hay enfisema antes de los 45 a&#241;os, predominio en lobulos inferiores, escasa carga tabaquica, historia familiar o hepatopatia asociada. Un valor bajo obliga a genotipar.' },
      { prueba: 'Hemograma y bioquimica', utilidad: 'Poliglobulia por hipoxemia cronica o, mas frecuentemente, anemia, que empeora la disnea y el pronostico. Hipoalbuminemia y perdida de masa magra como marcadores de gravedad sistemica. Glucemia y perfil lipidico por la comorbilidad cardiometabolica.' },
      { prueba: 'Peptido natriuretico y troponina', utilidad: 'Ayudan a separar la exacerbacion de la insuficiencia cardiaca descompensada, que se le parece mucho y a menudo coexiste. La troponina elevada en la exacerbacion es frecuente e identifica un subgrupo con mayor mortalidad.' },
      { prueba: 'Cultivo de esputo', utilidad: 'No de rutina en la exacerbacion simple. Indicado si hay fracaso del tratamiento, exacerbaciones frecuentes, obstruccion muy grave, bronquiectasias o sospecha de Pseudomonas aeruginosa (que exige cobertura antipseudomonica).' },
      { prueba: 'Dimero D y angiotomografia si procede', utilidad: 'La embolia pulmonar esta presente en una proporcion nada despreciable de las exacerbaciones sin causa clara, sobre todo si hay dolor toracico pleuritico, hipoxemia desproporcionada o ausencia de infeccion. Es el diagnostico que mas se pasa por alto en este contexto.' }
    ],
    no_invasivos: [
      { metodo: 'Escala mMRC de disnea', interpretacion: 'Grado 0: disnea solo con ejercicio intenso. 1: al andar deprisa en llano o subir una cuesta ligera. 2: anda mas despacio que otros de su edad o tiene que parar. 3: para a los 100 metros o a los pocos minutos. 4: no sale de casa o se ahoga al vestirse.', cutoff: 'mMRC 2 o mas: paciente sintomatico (grupo B o E)' },
      { metodo: 'Cuestionario CAT (COPD Assessment Test)', interpretacion: 'Ocho preguntas puntuadas de 0 a 5 sobre tos, flemas, opresion, disnea al subir, actividades domesticas, salir de casa, sue&#241;o y energia. Mide impacto global, no solo disnea, y es mas sensible al cambio que la mMRC.', cutoff: '10 o mas: paciente sintomatico. Cambio minimo relevante: 2 puntos' },
      { metodo: 'Indice BODE (calculadora disponible)', interpretacion: 'Combina indice de masa corporal, obstruccion (FEV1 %), disnea (mMRC) y capacidad de ejercicio (marcha de 6 minutos). Predice mortalidad mejor que el FEV1 aislado porque incorpora la dimension sistemica y funcional de la enfermedad.', cutoff: '0 a 2, 3 a 4, 5 a 6 y 7 a 10 puntos: supervivencia a 4 a&#241;os aproximada del 80, 67, 57 y 18%' },
      { metodo: 'Escala DECAF en la exacerbacion ingresada (calculadora disponible)', interpretacion: 'Disnea (eMRCD 5a o 5b), Eosinopenia, Consolidacion, Acidemia y Fibrilacion auricular. Predice mortalidad intrahospitalaria y ayuda a decidir el nivel de cuidados y la posibilidad de manejo domiciliario asistido.', cutoff: '0 a 1: bajo riesgo. 2: intermedio. 3 o mas: alto riesgo, mortalidad del 24% o superior' },
      { metodo: 'Criterios de Anthonisen (calculadora disponible)', interpretacion: 'Los tres sintomas cardinales de la exacerbacion son aumento de la disnea, del volumen del esputo y de la purulencia. Tipo I los tres, tipo II dos, tipo III uno mas un criterio menor. Solo el aumento de la PURULENCIA identifica de forma fiable la carga bacteriana.', cutoff: 'Antibiotico si hay purulencia junto con aumento de disnea o de volumen, o si el paciente requiere ventilacion' },
      { metodo: 'Prueba de marcha de 6 minutos y pulsioximetria de esfuerzo', interpretacion: 'Mide la capacidad funcional real y detecta la desaturacion de esfuerzo que la oximetria en reposo no ve. Entra en el indice BODE y es la referencia para valorar la respuesta a la rehabilitacion respiratoria.', cutoff: 'Menos de 350 metros: peor pronostico. Desaturacion por debajo del 88% en el esfuerzo' },
      { metodo: 'Volumenes pulmonares y capacidad de difusion (DLCO)', interpretacion: 'La pletismografia cuantifica el atrapamiento aereo (volumen residual y capacidad pulmonar total altos, capacidad inspiratoria baja). La DLCO baja indica enfisema y ayuda a separarlo del componente bronquitico; tambien orienta el riesgo quirurgico.', cutoff: 'Cociente volumen residual/capacidad pulmonar total elevado; DLCO menor del 60% sugiere enfisema significativo' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Poco sensible para el diagnostico, imprescindible en la exacerbacion. Hiperinsuflacion con aplanamiento diafragmatico, aumento del espacio retroesternal y silueta cardiaca en gota. Su papel real es EXCLUIR: neumonia, neumotorax, derrame, insuficiencia cardiaca y masa.' },
      { modalidad: 'Tomografia computarizada de torax', hallazgos: 'Cuantifica y localiza el enfisema (centrolobulillar de predominio superior en el fumador, panlobulillar de predominio inferior en la deficiencia de alfa-1-antitripsina), detecta bronquiectasias asociadas y es imprescindible para valorar cirugia o valvulas de reduccion de volumen. Permite ademas el cribado de cancer de pulmon en el fumador que cumple criterios.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Ante sospecha de hipertension pulmonar o cor pulmonale: dilatacion y disfuncion del ventriculo derecho, velocidad de regurgitacion tricuspidea aumentada. Tambien separa la disnea de origen cardiaco de la respiratoria cuando ambas compiten.' },
      { modalidad: 'Angiotomografia pulmonar', hallazgos: 'Ante exacerbacion sin causa aparente, hipoxemia desproporcionada o factores de riesgo trombotico. La prevalencia de embolia pulmonar en las exacerbaciones ingresadas sin foco infeccioso claro es lo bastante alta como para justificar un umbral bajo de sospecha.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La EPOC se clasifica en <strong>dos ejes que no hay que mezclar</strong>. El primero es funcional: el <strong>grado GOLD 1 a 4</strong> segun el FEV1 en porcentaje del predicho, que informa del pronostico pero no dicta el tratamiento. El segundo es clinico: el <strong>grupo A, B o E</strong>, que combina la carga de sintomas (mMRC o CAT) con las exacerbaciones del ultimo a&#241;o y si que decide el tratamiento inicial. A ellos se a&#241;aden los indices pronosticos multidimensionales (BODE), las escalas de la exacerbacion (Anthonisen para el antibiotico, DECAF para el pronostico) y la clasificacion etiologica por "etiotipos" que GOLD ha ido incorporando: tabaquica, por biomasa o contaminacion, genetica, del desarrollo pulmonar, por infeccion y asociada a asma.`,
    escalas: [
      { nombre: 'Grado espirometrico GOLD 1 a 4', componentes: 'FEV1 en porcentaje del predicho, en pacientes que ya cumplen FEV1/FVC posbroncodilatador menor de 0.70.', formula: 'GOLD 1: 80% o mas. GOLD 2: 50 a 79%. GOLD 3: 30 a 49%. GOLD 4: menos de 30%.', interpretacion: 'Mide la obstruccion y aporta informacion pronostica, pero se correlaciona mal con los sintomas y con la calidad de vida. No decide el tratamiento: un GOLD 4 poco sintomatico y sin exacerbaciones es grupo A.' },
      { nombre: 'Grupo GOLD A, B o E (calculadora disponible)', componentes: 'Sintomas medidos por mMRC o CAT, y numero de exacerbaciones moderadas o graves en el ultimo a&#241;o.', formula: 'E: 2 o mas exacerbaciones moderadas, o 1 o mas que requirieron ingreso. B: 0 a 1 moderada sin ingreso con mMRC 2 o mas o CAT 10 o mas. A: 0 a 1 moderada sin ingreso con mMRC 0 a 1 o CAT menor de 10.', interpretacion: 'Determina el tratamiento inicial: A un broncodilatador, B doble broncodilatacion LABA + LAMA, E doble broncodilatacion y triple terapia de inicio si los eosinofilos son 300 o mas. El grupo E ignora los sintomas de forma deliberada.' },
      { nombre: 'Escala mMRC de disnea', componentes: 'Un unico item de 0 a 4 sobre la actividad que desencadena la disnea.', formula: 'Grado 0 a 4 segun el nivel de esfuerzo que produce disnea.', interpretacion: '2 o mas define al paciente sintomatico para el mapa ABE. Es rapida y reproducible, pero solo mide disnea: puede infravalorar al paciente cuya carga principal es la tos, la expectoracion o el insomnio.' },
      { nombre: 'Cuestionario CAT', componentes: 'Ocho items de 0 a 5: tos, flemas, opresion toracica, disnea al subir, limitacion en actividades domesticas, confianza para salir de casa, sue&#241;o y energia.', formula: 'Suma de 0 a 40 puntos.', interpretacion: '10 o mas define al paciente sintomatico. Mide impacto global y es sensible al cambio: una diferencia de 2 puntos ya es clinicamente relevante. Preferible a la mMRC para seguimiento.' },
      { nombre: 'Indice BODE (calculadora disponible)', componentes: 'Indice de masa corporal, FEV1 en porcentaje del predicho, disnea mMRC y distancia recorrida en la marcha de 6 minutos.', formula: 'Cada componente aporta de 0 a 3 puntos, salvo el indice de masa corporal que aporta 0 o 1. Total de 0 a 10.', interpretacion: 'Predice mortalidad mejor que el FEV1 aislado. Cuartiles de 0 a 2, 3 a 4, 5 a 6 y 7 a 10 con supervivencia a 4 a&#241;os aproximada del 80, 67, 57 y 18%. Util para priorizar rehabilitacion y valorar trasplante.' },
      { nombre: 'Definicion y gravedad de Roma para la exacerbacion', componentes: 'Disnea medida en escala visual analogica, frecuencia respiratoria, frecuencia cardiaca, saturacion de oxigeno, proteina C reactiva y gasometria arterial.', formula: 'Leve, moderada o grave segun la combinacion de variables; la forma grave exige PaCO2 mayor de 45 mmHg con pH menor de 7.35.', interpretacion: 'Sustituye a la clasificacion clasica basada en el recurso consumido (leve con broncodilatador, moderada con corticoide o antibiotico, grave con ingreso), que describia el sistema sanitario mas que al paciente. La forma grave identifica al candidato a ventilacion no invasiva.' },
      { nombre: 'Criterios de Anthonisen (calculadora disponible)', componentes: 'Tres sintomas cardinales: aumento de la disnea, del volumen del esputo y de la purulencia. Criterios menores: infeccion respiratoria alta en los 5 dias previos, fiebre sin otra causa, aumento de sibilancias o de la tos, y ascenso del 20% de la frecuencia cardiaca o respiratoria.', formula: 'Tipo I: los tres cardinales. Tipo II: dos. Tipo III: uno mas un criterio menor.', interpretacion: 'Base de la indicacion de antibiotico desde 1987. La lectura moderna es mas estricta: el dato que manda es la PURULENCIA del esputo, junto con el aumento de disnea o de volumen, o bien la necesidad de ventilacion.' },
      { nombre: 'Escala DECAF (calculadora disponible)', componentes: 'Disnea extrema (eMRCD 5a: no sale de casa pero se viste solo, 1 punto; 5b: ademas no puede vestirse solo, 2 puntos), Eosinopenia menor de 0.05 x10^9/L, Consolidacion radiologica, Acidemia con pH menor de 7.30 y Fibrilacion auricular.', formula: 'Suma de 0 a 6 puntos.', interpretacion: '0 a 1: bajo riesgo, mortalidad intrahospitalaria en torno al 1%, candidato a alta precoz o ingreso domiciliario. 2: intermedio, cerca del 5%. 3 o mas: alto riesgo, del 24% al 45%, con necesidad de valorar cuidados intensivos y decisiones de techo terapeutico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'EPOC estable',
      color: '#2f5d6e',
      definicion: 'Enfermedad heterogenea con sintomas respiratorios cronicos y obstruccion al flujo aereo persistente, por alteraciones de la via aerea y del alveolo. El diagnostico EXIGE un cociente FEV1/FVC posbroncodilatador menor de 0.70.',
      fisiopatologia: 'La inhalacion cronica de humo de tabaco, biomasa o contaminantes produce inflamacion de la via aerea peque&#241;a con remodelado y fibrosis peribronquiolar, y destruccion de los septos alveolares con perdida de retraccion elastica. Las dos lesiones convergen en lo mismo: la espiracion se vuelve lenta y el pulmon no se vacia. El volumen teleespiratorio sube, aparece PEEP intrinseca, el diafragma se aplana y trabaja en desventaja, y en el esfuerzo el fenomeno se agrava (hiperinsuflacion dinamica). Ver la Figura 2 de Definicion. A ello se suman el desequilibrio ventilacion-perfusion, la inflamacion sistemica de bajo grado y la disfuncion muscular periferica, que explican la dimension extrapulmonar de la enfermedad.',
      epidemiologia: 'Afecta a cerca del 10% de los adultos mayores de 40 a&#241;os y es la tercera causa de muerte en el mundo. Esta infradiagnosticada en mas de la mitad de los casos y sobrediagnosticada en una proporcion parecida de los que ya reciben tratamiento. El tabaco es la causa dominante en los paises de renta alta; la exposicion a biomasa y la contaminacion domestica lo son en amplias regiones del mundo, con mayor afectacion de mujeres.',
      factores_riesgo: ['Tabaquismo activo o pasivo, el factor dominante', 'Exposicion a humo de biomasa para cocinar o calentar', 'Contaminacion atmosferica y exposicion laboral a polvos, humos y vapores', 'Deficiencia de alfa-1-antitripsina', 'Desarrollo pulmonar deficiente: prematuridad, bajo peso al nacer, infecciones respiratorias en la infancia', 'Asma de larga evolucion y mal controlada', 'Tuberculosis previa y bronquiectasias', 'Infeccion por VIH', 'Nivel socioeconomico bajo', 'Edad avanzada y sexo femenino para una misma carga tabaquica'],
      clinica: 'Disnea de esfuerzo progresiva y persistente, tos cronica con o sin expectoracion, sibilancias y opresion toracica. En fases avanzadas, perdida de peso y de masa muscular, edemas, cianosis y limitacion grave de la actividad. Muchos pacientes no refieren disnea de forma espontanea porque han ido reduciendo su actividad: hay que preguntar por lo que han dejado de hacer.',
      criterios_dx: 'Sintomas respiratorios cronicos y exposicion de riesgo, mas espirometria posbroncodilatador con FEV1/FVC menor de 0.70. Sin espirometria no hay diagnostico. Si el cociente esta en el limite, repetir en otra ocasion y comparar con el limite inferior de la normalidad para la edad.',
      laboratorio: 'Eosinofilos en sangre para decidir el corticoide inhalado. Alfa-1-antitripsina al menos una vez en la vida. Gasometria si la saturacion es menor del 92% o hay sospecha de hipercapnia. Hemograma para detectar anemia o poliglobulia.',
      imagen: 'Radiografia de torax para excluir otras causas. Tomografia si se plantea cirugia o valvulas, si hay sospecha de bronquiectasias o enfisema significativo, o para cribado de cancer de pulmon en el fumador que cumple criterios.',
      complementarios: 'Volumenes pulmonares y DLCO cuando hay disociacion entre sintomas y FEV1. Marcha de 6 minutos para el indice BODE y para valorar la rehabilitacion. Ecocardiograma si se sospecha hipertension pulmonar. Estudio de sue&#241;o si hay sospecha de sindrome de solapamiento con apnea obstructiva.',
      dx_diferencial: 'Asma (inicio precoz, variabilidad, reversibilidad marcada, atopia), bronquiectasias, insuficiencia cardiaca, tuberculosis y sus secuelas, bronquiolitis obliterante, panbronquiolitis difusa, y en el enfisema precoz o de predominio inferior, la deficiencia de alfa-1-antitripsina.',
      tx_medico: 'DEJAR DE FUMAR es la unica medida que frena la caida acelerada del FEV1, y se ofrece en cada visita con apoyo conductual y farmacologico. Vacunacion frente a gripe, neumococo, COVID-19, tosferina y virus respiratorio sincitial segun edad y comorbilidad. Rehabilitacion respiratoria, especialmente en las 4 semanas siguientes a un ingreso. Actividad fisica regular, soporte nutricional en el paciente con perdida de masa magra, y revision de la tecnica del inhalador en CADA consulta.',
      tx_farmacologico: 'Grupo A: un broncodilatador de accion corta o larga. Grupo B: LABA + LAMA. Grupo E: LABA + LAMA, y triple terapia con corticoide inhalado desde el inicio si los eosinofilos son 300 o mas por microlitro. En el seguimiento se decide por el rasgo dominante: si persiste la DISNEA se optimiza la broncodilatacion y la tecnica; si persisten las EXACERBACIONES se sube a triple terapia y, si aun asi recurren, roflumilast (bronquitis cronica con FEV1 menor del 50%), azitromicina (preferentemente en exfumadores) o dupilumab (eosinofilos 300 o mas). El corticoide inhalado se evita con eosinofilos por debajo de 100, neumonias de repeticion o infeccion micobacteriana previa.',
      tx_intervencionista: 'Cirugia de reduccion de volumen pulmonar en el enfisema heterogeneo de predominio en lobulos superiores con baja capacidad de ejercicio tras rehabilitacion: es una de las pocas intervenciones con beneficio en supervivencia. Valvulas endobronquiales en el enfisema sin ventilacion colateral. Bullectomia en la bulla gigante. Trasplante pulmonar en el paciente joven muy avanzado tras agotar el resto.',
      criterios_uci: 'No aplica al paciente estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Valorar remision a trasplante con BODE de 7 a 10, FEV1 menor del 20%, hipercapnia o hipertension pulmonar progresivas, o exacerbaciones graves repetidas pese a tratamiento optimo.',
      seguimiento_hospitalario: 'No aplica al paciente estable, salvo que ingrese por exacerbacion u otra causa.',
      seguimiento_ambulatorio: 'Revision al menos anual con sintomas (CAT o mMRC), exacerbaciones del periodo, tecnica y adherencia al inhalador, saturacion, peso y comorbilidades. Espirometria anual para vigilar la caida del FEV1. Reforzar el abandono del tabaco en cada contacto.',
      pronostico: 'Muy variable. El indice BODE predice mejor que el FEV1 aislado: con 7 a 10 puntos la supervivencia a 4 a&#241;os baja al 18%. Las exacerbaciones, la hipercapnia, la hipertension pulmonar, la perdida de peso y las comorbilidades cardiovasculares empeoran el pronostico. Dejar de fumar lo modifica a cualquier edad.',
      algoritmo: ['Sospecha por sintomas cronicos mas exposicion de riesgo', 'Espirometria POSBRONCODILATADOR: FEV1/FVC menor de 0.70 confirma', 'Graduar el FEV1 (GOLD 1 a 4) y medir sintomas (mMRC o CAT)', 'Contar las exacerbaciones del ultimo a&#241;o y si hubo ingreso', 'Asignar grupo A, B o E', 'Medir eosinofilos y solicitar alfa-1-antitripsina una vez en la vida', 'Iniciar tratamiento: A un broncodilatador, B y E doble broncodilatacion, E con eosinofilos 300 o mas triple terapia', 'A&#241;adir siempre abandono del tabaco, vacunas y rehabilitacion', 'Revisar en 1 a 3 meses: comprobar tecnica y adherencia ANTES de escalar', 'Escalar segun el rasgo dominante: disnea o exacerbaciones']
    },
    {
      nombre: 'Exacerbacion de la EPOC',
      color: '#8c3a34',
      definicion: 'Empeoramiento agudo de la disnea, la tos o la expectoracion instaurado en MENOS DE 14 DIAS, con inflamacion local y sistemica, causado por infeccion, contaminacion u otra agresion (definicion de Roma).',
      fisiopatologia: 'Un desencadenante, casi siempre viral o bacteriano, amplifica la inflamacion de la via aerea. El edema, el broncoespasmo y la hipersecrecion estrechan aun mas una luz ya comprometida, empeoran la limitacion al flujo y aumentan el atrapamiento aereo. La hiperinsuflacion dinamica sube la carga umbral inspiratoria justo cuando la demanda ventilatoria es maxima, y el musculo respiratorio, ya en desventaja, se agota: aparece hipoventilacion alveolar con hipercapnia y acidosis respiratoria. El desequilibrio ventilacion-perfusion agrava la hipoxemia, y el oxigeno mal dosificado la empeora aun mas al abolir la vasoconstriccion pulmonar hipoxica y desplazar dioxido de carbono de la hemoglobina (efecto Haldane).',
      epidemiologia: 'La media es de 1 a 2 exacerbaciones por paciente y a&#241;o, con un fenotipo exacerbador frecuente bien definido: el mejor predictor de exacerbar es haber exacerbado antes. La mortalidad intrahospitalaria oscila entre el 4 y el 10%, sube por encima del 20% si hay acidosis respiratoria y llega al 40% al a&#241;o tras un ingreso con hipercapnia. Cerca de una quinta parte de los pacientes reingresan en los 30 dias siguientes.',
      factores_riesgo: ['Exacerbaciones previas, el predictor mas potente', 'Obstruccion grave (GOLD 3 y 4)', 'Bronquitis cronica con hipersecrecion', 'Bronquiectasias asociadas y colonizacion por Pseudomonas aeruginosa', 'Tabaquismo activo y contaminacion ambiental', 'Comorbilidad cardiovascular, reflujo gastroesofagico y ansiedad o depresion', 'Mala adherencia y tecnica inhalatoria deficiente', 'Ausencia de vacunacion antigripal y antineumococica', 'Eosinofilia en sangre para el fenotipo exacerbador tipo 2', 'Invierno y epidemias virales'],
      clinica: 'Aumento de disnea, tos y expectoracion, con cambio de color o volumen del esputo. Taquipnea, taquicardia, sibilancias o torax silente, uso de musculatura accesoria y respiracion paradojica. La somnolencia, la asterixis y la confusion indican narcosis por dioxido de carbono. La incapacidad para hablar en frases completas, la bradipnea y el descenso del nivel de conciencia anuncian el fracaso ventilatorio inminente.',
      criterios_dx: 'Clinico y de exclusion. No hay ninguna prueba que confirme la exacerbacion: el diagnostico consiste en reconocer el empeoramiento agudo Y descartar de forma activa neumonia, insuficiencia cardiaca, embolia pulmonar, neumotorax y arritmia, que se le parecen y a menudo coexisten. La gravedad se gradua por la propuesta de Roma; la forma grave exige PaCO2 mayor de 45 mmHg con pH menor de 7.35.',
      laboratorio: 'Gasometria arterial si la saturacion es menor del 92%: define la insuficiencia respiratoria y detecta la acidosis. Hemograma (la eosinopenia puntua en DECAF y marca peor pronostico; la eosinofilia predice respuesta al corticoide). Proteina C reactiva, funcion renal e iones. Peptido natriuretico y troponina para separar de la insuficiencia cardiaca. Cultivo de esputo solo si hay fracaso, exacerbaciones frecuentes o sospecha de Pseudomonas.',
      imagen: 'Radiografia de torax SIEMPRE en la exacerbacion que acude al hospital: la consolidacion cambia el diagnostico a neumonia, puntua en DECAF y modifica el pronostico. Angiotomografia si hay sospecha de embolia pulmonar. Ecografia pulmonar a pie de cama para separar edema de neumotorax y de derrame.',
      complementarios: 'Electrocardiograma en toda exacerbacion: la fibrilacion auricular es frecuente, puntua en DECAF y suele ser consecuencia y no causa. Monitorizacion de la saturacion con objetivo del 88 al 92% y gasometria de control a los 30 a 60 minutos de iniciar el oxigeno o la ventilacion no invasiva.',
      dx_diferencial: 'Neumonia (la consolidacion la separa y empeora el pronostico), insuficiencia cardiaca descompensada, embolia pulmonar (el diagnostico que mas se escapa), neumotorax, derrame pleural, arritmia rapida, sindrome coronario agudo y obstruccion de la via aerea superior.',
      tx_medico: 'OXIGENO con objetivo de saturacion del 88 al 92%, preferentemente con mascarilla de Venturi que permite fijar la fraccion inspirada: mas oxigeno no es mejor y empeora la hipercapnia. Broncodilatadores de accion corta, salbutamol con o sin bromuro de ipratropio, en camara o nebulizados con aire comprimido si se teme la hipercapnia. Profilaxis antitrombotica. Tratamiento de la comorbilidad descompensada. Movilizacion precoz y rehabilitacion iniciada antes del alta o en las 4 semanas siguientes.',
      tx_farmacologico: 'PREDNISONA 40 mg al dia durante 5 DIAS, no 14: el ensayo REDUCE demostro no inferioridad con menos exposicion a corticoide, y no hace falta pauta descendente. ANTIBIOTICO solo si hay aumento de la purulencia del esputo junto con aumento de la disnea o del volumen, o si el paciente requiere ventilacion; 5 a 7 dias, con amoxicilina-clavulanico, macrolido o tetraciclina segun el patron local, y cobertura antipseudomonica si hay bronquiectasias, obstruccion muy grave, ingresos recientes o aislamiento previo.',
      tx_intervencionista: 'VENTILACION NO INVASIVA de primera linea si el pH es 7.35 o menor con PaCO2 mayor de 45 mmHg, o si hay trabajo respiratorio importante pese a tratamiento optimo: reduce intubacion, estancia y mortalidad, y es una de las indicaciones con mejor nivel de evidencia de toda la medicina respiratoria. Intubacion si fracasa la ventilacion no invasiva, hay parada, inestabilidad hemodinamica, incapacidad para proteger la via aerea o descenso del nivel de conciencia. La canula nasal de alto flujo es alternativa en la insuficiencia hipoxemica sin acidosis, no sustituye a la ventilacion no invasiva en la hipercapnia.',
      criterios_uci: 'Acidosis o hipercapnia progresivas pese a ventilacion no invasiva, necesidad de intubacion, inestabilidad hemodinamica, alteracion del nivel de conciencia y necesidad de vasopresores. La decision debe integrarse con la situacion basal y las voluntades del paciente, porque muchos ingresos tienen techo terapeutico razonable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda; una exacerbacion grave en un paciente muy avanzado es motivo para plantear la valoracion posterior.',
      seguimiento_hospitalario: 'Gasometria de control tras iniciar oxigeno o ventilacion no invasiva. Revaluacion diaria de disnea, trabajo respiratorio y nivel de conciencia. Antes del alta: comprobar la tecnica del inhalador, ajustar el tratamiento de fondo (una exacerbacion casi siempre significa que hay que escalarlo), vacunar si procede, planificar la rehabilitacion y programar revision en 1 a 4 semanas.',
      seguimiento_ambulatorio: 'Revision precoz tras el alta, porque el riesgo de reingreso se concentra en los primeros 30 dias. Rehabilitacion respiratoria en las 4 semanas siguientes. Reevaluar en 2 a 3 meses la necesidad de oxigenoterapia domiciliaria o de ventilacion no invasiva domiciliaria, que no se indican con los valores de la fase aguda.',
      pronostico: 'Cada exacerbacion acelera la caida del FEV1 y aumenta el riesgo de la siguiente. La mortalidad intrahospitalaria sube por encima del 20% con acidosis respiratoria, y alcanza el 40% al a&#241;o tras un ingreso con hipercapnia. La escala DECAF estratifica bien ese riesgo al ingreso.',
      algoritmo: ['Confirmar empeoramiento agudo en menos de 14 dias y descartar los imitadores', 'Radiografia, gasometria si la saturacion es menor del 92%, electrocardiograma y analitica', 'Oxigeno con objetivo de saturacion del 88 al 92%, mejor con Venturi', 'Broncodilatador de accion corta a demanda', 'Prednisona 40 mg durante 5 dias', 'Antibiotico solo si hay purulencia con disnea o volumen aumentados, o si va a ventilarse', 'Calcular DECAF para estratificar el riesgo y decidir el nivel de cuidados', 'Si pH 7.35 o menor con PaCO2 mayor de 45: ventilacion NO invasiva sin demora', 'Gasometria de control en 30 a 60 minutos; si empeora, valorar intubacion', 'Antes del alta: escalar el tratamiento de fondo, tecnica del inhalador, vacunas, rehabilitacion y cita en 1 a 4 semanas']
    },
    {
      nombre: 'Insuficiencia respiratoria cronica y oxigenoterapia domiciliaria',
      color: '#3d5a73',
      definicion: 'Hipoxemia arterial persistente (PaO2 menor de 60 mmHg respirando aire ambiente en situacion estable), con o sin hipercapnia, que define la fase avanzada de la enfermedad y abre la indicacion de oxigenoterapia domiciliaria y, en casos seleccionados, de ventilacion no invasiva domiciliaria.',
      fisiopatologia: 'El desequilibrio ventilacion-perfusion es el mecanismo dominante de la hipoxemia; la destruccion del lecho capilar por el enfisema a&#241;ade un componente de alteracion de la difusion. Cuando la carga mecanica supera de forma sostenida la capacidad del musculo respiratorio, el paciente adopta un patron rapido y superficial que reduce el trabajo pero aumenta el espacio muerto: aparece la hipercapnia cronica, compensada por retencion renal de bicarbonato, con pH normal o casi normal. Esa compensacion es la clave para distinguir la hipercapnia cronica estable de la agudizacion, en la que el pH cae.',
      epidemiologia: 'Afecta sobre todo a los pacientes GOLD 3 y 4. La oxigenoterapia domiciliaria es el tratamiento cronico que mas prolonga la vida en la EPOC hipoxemica grave: los ensayos NOTT y del Medical Research Council mostraron beneficio en supervivencia y establecieron que el efecto depende de las horas de uso. Alrededor de un tercio de los pacientes que ingresan con hipercapnia siguen hipercapnicos a las 2 a 4 semanas, que es el grupo candidato a ventilacion domiciliaria.',
      factores_riesgo: ['Obstruccion grave o muy grave (GOLD 3 y 4)', 'Enfisema extenso con DLCO muy baja', 'Hipercapnia persistente tras una exacerbacion', 'Sindrome de solapamiento con apnea obstructiva del sue&#241;o', 'Obesidad con hipoventilacion asociada', 'Debilidad muscular respiratoria y desnutricion', 'Hipertension pulmonar y cor pulmonale', 'Tabaquismo activo, que ademas contraindica el oxigeno domiciliario por riesgo de quemadura', 'Exacerbaciones graves repetidas', 'Uso de sedantes u opioides'],
      clinica: 'Disnea de minimos esfuerzos o de reposo, cianosis, poliglobulia, edemas, cefalea matutina y somnolencia diurna (que sugieren hipercapnia nocturna), insomnio, deterioro cognitivo y perdida de peso. La desaturacion puede ser solo de esfuerzo o nocturna y pasar desapercibida en la oximetria de consulta.',
      criterios_dx: 'Gasometria arterial en situacion ESTABLE, al menos 4 a 8 semanas despues de una exacerbacion y con tratamiento optimizado, repetida en dos ocasiones separadas por 3 semanas. Nunca se indica oxigenoterapia domiciliaria con la gasometria del ingreso.',
      laboratorio: 'Gasometria arterial basal (no pulsioximetria) para la indicacion. Hematocrito para detectar poliglobulia. Bicarbonato elevado como huella de hipercapnia cronica. Control gasometrico tras iniciar el oxigeno para comprobar que no aumenta la PaCO2 de forma peligrosa.',
      imagen: 'Ecocardiograma para valorar hipertension pulmonar y funcion del ventriculo derecho. Tomografia si se plantea reduccion de volumen o trasplante.',
      complementarios: 'Pulsioximetria nocturna o poligrafia si hay sospecha de desaturacion nocturna o de apnea del sue&#241;o asociada. Prueba de marcha de 6 minutos con oximetria para detectar la desaturacion de esfuerzo y ajustar el flujo de deambulacion.',
      dx_diferencial: 'Hipoxemia por insuficiencia cardiaca, embolia pulmonar cronica, enfermedad intersticial asociada, sindrome de hipoventilacion-obesidad y apnea obstructiva del sue&#241;o, que pueden coexistir y requieren tratamiento propio.',
      tx_medico: 'Optimizar primero el tratamiento broncodilatador, la rehabilitacion y el abandono del tabaco, que es requisito de seguridad para el oxigeno domiciliario. Corregir anemia y desnutricion. Tratar la apnea del sue&#241;o asociada.',
      tx_farmacologico: 'Sin farmacos especificos para la insuficiencia respiratoria cronica. Los opioides a dosis bajas tienen un papel establecido en la disnea refractaria del paciente muy avanzado, con vigilancia de la hipercapnia. Evitar benzodiacepinas.',
      tx_intervencionista: 'OXIGENOTERAPIA DOMICILIARIA si en situacion estable la PaO2 es 55 mmHg o menor (o la saturacion 88% o menor), o bien la PaO2 esta entre 56 y 59 mmHg con cor pulmonale, hipertension pulmonar, edemas o hematocrito mayor del 55%. El objetivo es una PaO2 de 60 mmHg o mas y se necesitan AL MENOS 15 HORAS AL DIA: por debajo de ese umbral no hay beneficio en supervivencia. El ensayo LOTT demostro que la desaturacion moderada aislada NO se beneficia. VENTILACION NO INVASIVA DOMICILIARIA en el paciente con hipercapnia persistente (PaCO2 de 52 mmHg o mas) 2 a 4 semanas despues de un ingreso: con presiones altas reduce reingresos y mortalidad. Valvulas o cirugia de reduccion de volumen y trasplante en casos seleccionados.',
      criterios_uci: 'No aplica en la fase estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La insuficiencia respiratoria cronica con hipercapnia progresiva o hipertension pulmonar es uno de los criterios para remitir a una unidad de trasplante.',
      seguimiento_hospitalario: 'No aplica salvo ingreso.',
      seguimiento_ambulatorio: 'Revaluar la indicacion de oxigeno a los 60 a 90 dias, porque muchos pacientes dejan de cumplir criterios tras la recuperacion. Comprobar las horas reales de uso, el flujo en reposo, en esfuerzo y nocturno, y la ausencia de tabaquismo. Vigilar la aparicion de hipercapnia con el oxigeno.',
      pronostico: 'La hipoxemia cronica grave sin tratar tiene una supervivencia muy limitada; la oxigenoterapia correctamente usada la mejora de forma clara. La hipercapnia persistente tras un ingreso identifica un grupo de altisimo riesgo, con mortalidad al a&#241;o cercana al 40% si no se trata.',
      algoritmo: ['Optimizar el tratamiento y esperar 4 a 8 semanas de estabilidad tras la exacerbacion', 'Gasometria arterial basal en aire ambiente, repetida a las 3 semanas', 'PaO2 55 mmHg o menos, o saturacion 88% o menos: indicar oxigenoterapia', 'PaO2 de 56 a 59 mmHg: indicar solo si hay cor pulmonale, edemas o hematocrito mayor del 55%', 'Ajustar el flujo para PaO2 de 60 mmHg o mas y prescribir 15 horas al dia como minimo', 'Comprobar la ausencia de tabaquismo activo por seguridad', 'Valorar desaturacion de esfuerzo y nocturna para ajustar flujos', 'Si persiste PaCO2 de 52 mmHg o mas a las 2 a 4 semanas del alta: ventilacion no invasiva domiciliaria', 'Revaluar la indicacion a los 60 a 90 dias', 'Valorar reduccion de volumen o trasplante si sigue progresando']
    },
    {
      nombre: 'Hipertension pulmonar y cor pulmonale',
      color: '#7a1f3d',
      definicion: 'Elevacion de la presion arterial pulmonar media por encima de 20 mmHg secundaria a la enfermedad pulmonar (grupo 3 de la clasificacion), con sobrecarga y finalmente fallo del ventriculo derecho, que es lo que se denomina cor pulmonale.',
      fisiopatologia: 'Tres mecanismos se suman. La vasoconstriccion pulmonar hipoxica, inicialmente adaptativa, se hace sostenida y produce remodelado vascular. La destruccion enfisematosa reduce el lecho capilar y aumenta la resistencia. Y la hiperinsuflacion comprime los vasos alveolares. El ventriculo derecho, dise&#241;ado para una circulacion de baja presion, se hipertrofia y despues se dilata; al dilatarse desplaza el tabique y compromete el llenado del izquierdo. La hipercapnia y la acidosis potencian la vasoconstriccion, y la poliglobulia aumenta la viscosidad.',
      epidemiologia: 'Alguna elevacion de la presion pulmonar aparece en cerca de la mitad de los pacientes con EPOC avanzada, pero la hipertension pulmonar grave (resistencia vascular pulmonar mayor de 5 unidades Wood) afecta a menos del 5% y obliga a buscar otra causa a&#241;adida. Su presencia multiplica el riesgo de ingreso y de muerte y es uno de los predictores independientes mas potentes en la EPOC avanzada.',
      factores_riesgo: ['Hipoxemia cronica mantenida', 'Hipercapnia y acidosis respiratoria', 'Enfisema extenso con DLCO muy reducida', 'Apnea obstructiva del sue&#241;o asociada (sindrome de solapamiento)', 'Desaturacion nocturna y de esfuerzo no corregida', 'Exacerbaciones graves repetidas', 'Tromboembolia pulmonar previa', 'Poliglobulia secundaria', 'Cardiopatia izquierda concomitante', 'Altitud elevada'],
      clinica: 'Disnea desproporcionada a la obstruccion, sincope o presincope de esfuerzo, dolor toracico y fatiga. En la exploracion, ingurgitacion yugular, segundo tono pulmonar reforzado, soplo de insuficiencia tricuspidea, hepatomegalia pulsatil, ascitis y edemas. La disociacion entre una funcion pulmonar solo moderadamente alterada y una disnea grave con hipoxemia marcada es la se&#241;al de alarma.',
      criterios_dx: 'Sospecha por ecocardiograma (velocidad de regurgitacion tricuspidea, dilatacion y disfuncion del ventriculo derecho). La confirmacion requiere cateterismo cardiaco derecho, que solo se indica si el resultado va a cambiar la conducta: sospecha de hipertension pulmonar grave, valoracion de trasplante o duda entre grupo 1 y grupo 3.',
      laboratorio: 'Peptido natriuretico elevado como marcador de sobrecarga derecha y de pronostico. Gasometria con hipoxemia e hipercapnia. Hematocrito para la poliglobulia. Funcion hepatica y renal alteradas por congestion en el fallo derecho avanzado.',
      imagen: 'Ecocardiograma como prueba inicial. Tomografia con dilatacion de la arteria pulmonar (cociente arteria pulmonar/aorta mayor de 1) y valoracion del enfisema. Gammagrafia de ventilacion-perfusion o angiotomografia si se sospecha enfermedad tromboembolica cronica, que es tratable y no debe pasarse por alto.',
      complementarios: 'Electrocardiograma con P pulmonale, desviacion derecha del eje, patron S1Q3T3 o bloqueo de rama derecha. Marcha de 6 minutos como marcador funcional y pronostico. Estudio de sue&#241;o si hay sospecha de apnea asociada.',
      dx_diferencial: 'Hipertension arterial pulmonar del grupo 1 (que exige tratamiento especifico), hipertension pulmonar por cardiopatia izquierda del grupo 2, hipertension pulmonar tromboembolica cronica del grupo 4 (potencialmente curable con endarterectomia), y la coexistencia de fibrosis y enfisema, que produce presiones especialmente altas.',
      tx_medico: 'El tratamiento es el de la enfermedad de base: optimizar la broncodilatacion, corregir la hipoxemia con oxigenoterapia (la unica medida con efecto demostrado sobre la presion pulmonar en la EPOC), tratar la apnea del sue&#241;o asociada, rehabilitacion y abandono del tabaco. Diureticos con prudencia en el fallo derecho congestivo, evitando la depleccion excesiva, que reduce la precarga de un ventriculo derecho que la necesita.',
      tx_farmacologico: 'Los vasodilatadores pulmonares NO estan indicados de forma general en la hipertension pulmonar del grupo 3: empeoran el desequilibrio ventilacion-perfusion al vasodilatar zonas mal ventiladas y pueden agravar la hipoxemia. Solo se plantean en centros expertos, en el fenotipo de hipertension pulmonar grave con obstruccion leve, y siempre de forma individualizada. La sangria se reserva a la poliglobulia extrema sintomatica.',
      tx_intervencionista: 'Remision a unidad experta si se sospecha hipertension pulmonar grave. Trasplante pulmonar en el paciente candidato. Endarterectomia o angioplastia pulmonar si el mecanismo resulta ser tromboembolico cronico.',
      criterios_uci: 'Fallo derecho agudo con hipotension, oliguria o hipoperfusion, que en este contexto tiene mal pronostico y exige un balance de volumen muy fino y, con frecuencia, vasopresores en lugar de mas diuretico o mas volumen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La hipertension pulmonar progresiva es uno de los criterios de remision a trasplante en la EPOC avanzada.',
      seguimiento_hospitalario: 'Control de balance hidrico, peso y funcion renal en el fallo derecho descompensado. Vigilar la respuesta a la correccion de la hipoxemia.',
      seguimiento_ambulatorio: 'Ecocardiograma periodico, marcha de 6 minutos, cumplimiento y eficacia de la oxigenoterapia, y control de la apnea del sue&#241;o. Vigilar los signos de congestion derecha.',
      pronostico: 'Marcador independiente de mortalidad: su presencia empeora claramente la supervivencia y la capacidad funcional. La forma grave con obstruccion leve tiene un pronostico especialmente malo y se comporta mas como una enfermedad vascular que como una EPOC.',
      algoritmo: ['Sospechar ante disnea o hipoxemia desproporcionadas a la obstruccion', 'Ecocardiograma como primera prueba', 'Descartar cardiopatia izquierda y enfermedad tromboembolica cronica', 'Optimizar oxigenacion: gasometria y oxigenoterapia si cumple criterios', 'Tratar la apnea del sue&#241;o asociada y optimizar la broncodilatacion', 'Diureticos con prudencia si hay congestion derecha', 'NO iniciar vasodilatadores pulmonares de forma rutinaria', 'Cateterismo derecho solo si va a cambiar la conducta', 'Remitir a unidad experta si la hipertension pulmonar es grave', 'Valorar trasplante en el candidato adecuado']
    },
    {
      nombre: 'Deficiencia de alfa-1-antitripsina',
      color: '#5b4a86',
      definicion: 'Trastorno hereditario autosomico codominante por variantes del gen SERPINA1 que reducen la concentracion o la funcion de la alfa-1-antitripsina, principal inhibidor de la elastasa del neutrofilo, y producen enfisema precoz y, en algunos genotipos, hepatopatia.',
      fisiopatologia: 'Sin suficiente inhibidor, la elastasa liberada por los neutrofilos destruye sin freno la elastina del parenquima pulmonar: el resultado es un enfisema PANLOBULILLAR de predominio en LOBULOS INFERIORES, al reves de la distribucion del enfisema del fumador. El tabaco multiplica el da&#241;o porque oxida e inactiva el poco inhibidor disponible y recluta mas neutrofilos. En el genotipo ZZ, la proteina anomala polimeriza dentro del hepatocito y se acumula: de ahi la hepatopatia, que no depende de la falta en el pulmon sino del acumulo en el higado.',
      epidemiologia: 'El genotipo grave PiZZ afecta aproximadamente a 1 de cada 2000 a 5000 personas de ascendencia europea y esta muy infradiagnosticado: la demora media entre el primer sintoma y el diagnostico se mide en a&#241;os y son frecuentes varios medicos consultados antes de llegar a el. Explica entre el 1 y el 2% de todos los casos de EPOC.',
      factores_riesgo: ['Genotipo PiZZ, y en menor medida PiSZ y variantes nulas', 'Tabaquismo, que adelanta la aparicion del enfisema en decadas', 'Exposicion laboral a polvos y humos', 'Antecedentes familiares de enfisema o hepatopatia precoces', 'Infecciones respiratorias de repeticion en la infancia', 'Asma o bronquiectasias asociadas', 'Ascendencia del norte y del oeste de Europa', 'Colestasis neonatal en la historia personal', 'Paniculitis o vasculitis asociada a anticuerpos anticitoplasma de neutrofilo', 'Sexo masculino para una misma carga tabaquica'],
      clinica: 'EPOC de aparicion temprana, tipicamente entre los 30 y los 50 a&#241;os, con escasa o nula carga tabaquica, disnea desproporcionada y a menudo etiquetada de asma durante a&#241;os. Puede asociar bronquiectasias, hepatopatia cronica o cirrosis, paniculitis necrosante y vasculitis. En el ni&#241;o, colestasis neonatal.',
      criterios_dx: 'Concentracion serica de alfa-1-antitripsina baja (por debajo de 1.1 g/L o de 20 micromol/L, con matices segun el laboratorio) seguida de determinacion del fenotipo o del genotipo, que es lo que confirma. La OMS y las guias recomiendan cribar AL MENOS UNA VEZ a todo paciente con EPOC, no solo a los jovenes. Al confirmarse, ofrecer estudio familiar y consejo genetico.',
      laboratorio: 'Alfa-1-antitripsina serica, que es un reactante de fase aguda y puede resultar falsamente normal si hay inflamacion: conviene medir a la vez la proteina C reactiva. Fenotipado o genotipado confirmatorio. Perfil hepatico completo y estudio de fibrosis en el genotipo ZZ.',
      imagen: 'Tomografia de torax con enfisema panlobulillar de predominio BASAL, patron que por si solo debe hacer pensar en el diagnostico. Bronquiectasias asociadas con relativa frecuencia. Ecografia o elastografia hepatica en el ZZ para el cribado de fibrosis.',
      complementarios: 'Espirometria y DLCO seriadas para valorar la progresion, que en estos pacientes puede ser mas rapida. Estudio familiar de primer grado.',
      dx_diferencial: 'EPOC del fumador (enfisema centrolobulillar de predominio superior), asma de larga evolucion, bronquiectasias de otra causa, sindrome de Swyer-James, histiocitosis de celulas de Langerhans y linfangioleiomiomatosis en la mujer joven.',
      tx_medico: 'Todo lo de la EPOC comun, con especial insistencia en el ABANDONO ABSOLUTO DEL TABACO, que es la medida que mas modifica el curso, y en evitar la exposicion laboral. Vacunacion completa, incluida la de la hepatitis A y B por la afectacion hepatica. Evitar el alcohol.',
      tx_farmacologico: 'Broncodilatadores y corticoide inhalado segun los mismos criterios que en la EPOC comun. TRATAMIENTO SUSTITUTIVO con alfa-1-antitripsina purificada intravenosa semanal en el deficit grave con enfisema demostrado y obstruccion establecida: enlentece la perdida de densidad pulmonar medida por tomografia, con efecto menos claro sobre sintomas y exacerbaciones. No esta indicado si no hay enfermedad pulmonar, ni en el paciente que sigue fumando, ni en la hepatopatia, sobre la que no actua.',
      tx_intervencionista: 'Valvulas o cirugia de reduccion de volumen con resultados peores que en el enfisema del fumador por la distribucion basal y homogenea. Trasplante pulmonar en el paciente avanzado, con buenos resultados y a edad mas temprana que en la EPOC comun. Trasplante hepatico si la hepatopatia progresa, y es curativo del defecto porque el higado nuevo produce la proteina normal.',
      criterios_uci: 'Los mismos que en cualquier exacerbacion grave de EPOC.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfisema avanzado con criterios habituales, generalmente a edad mas temprana. Trasplante hepatico si hay cirrosis descompensada o carcinoma hepatocelular.',
      seguimiento_hospitalario: 'Sin particularidades frente a la EPOC comun durante el ingreso.',
      seguimiento_ambulatorio: 'Espirometria y DLCO periodicas, tomografia para cuantificar el enfisema si se plantea sustitucion, y vigilancia hepatica en el genotipo ZZ (perfil hepatico, elastografia y cribado de carcinoma hepatocelular si hay cirrosis). Estudio y consejo genetico familiar.',
      pronostico: 'Muy dependiente del tabaco: el no fumador con genotipo ZZ puede tener una esperanza de vida practicamente normal, mientras que el fumador desarrolla enfisema grave decadas antes. El diagnostico precoz importa sobre todo porque permite actuar sobre esa variable.',
      algoritmo: ['Cribar con alfa-1-antitripsina serica a TODO paciente con EPOC al menos una vez', 'Priorizar si hay enfisema precoz, basal, poca carga tabaquica o historia familiar', 'Medir proteina C reactiva a la vez para evitar el falso normal', 'Si el valor es bajo: fenotipado o genotipado confirmatorio', 'Confirmado el deficit grave: valorar enfisema con tomografia y funcion con espirometria y DLCO', 'Insistir en el abandono absoluto del tabaco y evitar exposiciones laborales', 'Vacunacion completa, incluidas hepatitis A y B', 'Valorar tratamiento sustitutivo intravenoso si hay enfisema con obstruccion establecida', 'Cribado hepatico periodico en el genotipo ZZ', 'Ofrecer estudio familiar y consejo genetico']
    },
    {
      nombre: 'Comorbilidades y complicaciones del tratamiento',
      color: '#6b4a2e',
      definicion: 'Conjunto de enfermedades que acompa&#241;an a la EPOC con una frecuencia muy superior a la esperable por la edad, y efectos adversos de su tratamiento. Determinan buena parte de los ingresos y de las muertes, sobre todo en la enfermedad leve y moderada.',
      fisiopatologia: 'Comparten con la EPOC factores de exposicion (tabaco, contaminacion), envejecimiento acelerado del tejido, inflamacion sistemica de bajo grado, estres oxidativo, sedentarismo e hipoxemia. La hiperinsuflacion comprime el corazon y reduce el llenado, lo que explica en parte el vinculo cardiopulmonar. Del lado del tratamiento, el corticoide inhalado deposita farmaco en la orofaringe y deprime la inmunidad local de la via aerea, y el corticoide sistemico repetido produce los efectos conocidos de la exposicion acumulada.',
      epidemiologia: 'En la EPOC leve y moderada la mayoria de las muertes NO son respiratorias: son cardiovasculares y por cancer de pulmon. La enfermedad cardiovascular afecta a mas de la mitad de los pacientes, el cancer de pulmon multiplica su riesgo entre 2 y 5 veces respecto al fumador sin EPOC, y la ansiedad y la depresion afectan a un tercio y estan sistematicamente infratratadas.',
      factores_riesgo: ['Tabaquismo compartido como causa comun', 'Edad avanzada e inflamacion sistemica', 'Sedentarismo y perdida de masa muscular', 'Hipoxemia cronica', 'Uso mantenido de corticoide inhalado a dosis altas', 'Ciclos repetidos de corticoide sistemico', 'Obstruccion grave y exacerbaciones frecuentes', 'Aislamiento social y bajo nivel socioeconomico', 'Reflujo gastroesofagico', 'Apnea obstructiva del sue&#241;o coexistente'],
      clinica: 'Depende de la comorbilidad: angina o disnea de origen cardiaco confundida con la respiratoria, palpitaciones por fibrilacion auricular, fracturas por fragilidad, animo bajo y aislamiento, perdida de peso y debilidad. Del lado del tratamiento: candidiasis orofaringea y disfonia por el corticoide inhalado, neumonias de repeticion, sequedad de boca y retencion urinaria por el anticolinergico inhalado, temblor y taquicardia por el beta-2, e hiperglucemia e insomnio por el corticoide sistemico.',
      criterios_dx: 'No hay criterio unico: la clave es BUSCARLAS ACTIVAMENTE en cada revision, porque sus sintomas se atribuyen por inercia a la EPOC. Un paciente con disnea que no encaja con su funcion pulmonar tiene una comorbilidad hasta que se demuestre lo contrario.',
      laboratorio: 'Hemograma (anemia, frecuente e infratratada), glucemia y hemoglobina glucosilada, perfil lipidico, funcion renal, peptido natriuretico y troponina si hay sospecha cardiaca, y vitamina D y calcio en el paciente con corticoide.',
      imagen: 'Tomografia de baja dosis para cribado de cancer de pulmon en el fumador que cumple criterios de edad y carga tabaquica: la EPOC es un multiplicador de riesgo y no una razon para no cribar. Densitometria osea en el paciente con corticoide sistemico repetido o inhalado a dosis altas. Ecocardiograma ante sospecha cardiaca.',
      complementarios: 'Cuestionarios de cribado de ansiedad y depresion. Valoracion nutricional y de masa muscular. Estudio de sue&#241;o si hay ronquido, somnolencia o desaturacion nocturna. Revision de la salud bucodental por el corticoide inhalado.',
      dx_diferencial: 'El principal es separar la disnea de origen respiratorio de la cardiaca, que coexisten con enorme frecuencia. El peptido natriuretico, el ecocardiograma y la respuesta al tratamiento ayudan, pero muchas veces la respuesta correcta es que hay las dos.',
      tx_medico: 'Tratar cada comorbilidad segun su guia, sin infratratarla por miedo a la EPOC. Los BETABLOQUEANTES cardioselectivos NO estan contraindicados y deben mantenerse si hay indicacion cardiaca: su beneficio supera al riesgo respiratorio. Rehabilitacion respiratoria, que mejora a la vez capacidad funcional, animo y masa muscular. Soporte nutricional y prevencion de caidas.',
      tx_farmacologico: 'Prevenir los efectos del corticoide inhalado con camara espaciadora y enjuague bucal tras cada dosis, y usar la dosis minima eficaz. Retirar el corticoide inhalado si no hay indicacion (eosinofilos bajos, sin exacerbaciones), preferentemente de forma gradual y manteniendo la doble broncodilatacion. Limitar el corticoide sistemico a 5 dias por exacerbacion. Profilaxis de osteoporosis y suplementos de calcio y vitamina D cuando corresponda.',
      tx_intervencionista: 'Los propios de cada comorbilidad: revascularizacion, ablacion de fibrilacion auricular, cirugia del cancer de pulmon con valoracion funcional previa (FEV1 y DLCO predichos posoperatorios y prueba de esfuerzo).',
      criterios_uci: 'Los de la comorbilidad descompensada, no los de la EPOC en si.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Las comorbilidades mal controladas son la principal causa de exclusion en la valoracion de trasplante.',
      seguimiento_hospitalario: 'Aprovechar el ingreso para revisar comorbilidades no diagnosticadas, especialmente cardiovasculares, anemia y desnutricion.',
      seguimiento_ambulatorio: 'Revision anual estructurada: riesgo cardiovascular, cribado de cancer de pulmon si procede, densitometria si hay exposicion a corticoide, cribado de ansiedad y depresion, estado nutricional, salud bucodental y revision de la indicacion del corticoide inhalado.',
      pronostico: 'La carga de comorbilidad predice mortalidad de forma independiente de la funcion pulmonar. En la EPOC leve y moderada, tratar bien la comorbilidad cardiovascular y cribar el cancer de pulmon salva mas vidas que optimizar el inhalador.',
      algoritmo: ['Asumir que la disnea desproporcionada esconde una comorbilidad', 'Cribar riesgo cardiovascular y no retirar betabloqueantes cardioselectivos indicados', 'Ofrecer cribado de cancer de pulmon con tomografia de baja dosis si cumple criterios', 'Buscar y tratar anemia, desnutricion y perdida de masa muscular', 'Cribar ansiedad y depresion con cuestionario, no a ojo', 'Valorar apnea del sue&#241;o si hay ronquido o somnolencia', 'Revisar en cada visita la indicacion real del corticoide inhalado', 'Ense&#241;ar camara espaciadora y enjuague bucal tras cada dosis', 'Limitar el corticoide sistemico a 5 dias por exacerbacion', 'Densitometria y profilaxis osea si hay exposicion acumulada a corticoide']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El ingreso por exacerbacion es el momento de mayor riesgo y tambien la mejor oportunidad de la enfermedad: uno de cada cinco pacientes reingresa en 30 dias, y buena parte de esos reingresos se decide por lo que se hace (o no se hace) en las horas previas al alta. Lo que sigue es la lista de comprobacion del ingreso y del alta.',
    parametros: ['Objetivo de saturacion del 88 al 92%, mejor con mascarilla de Venturi: mas oxigeno empeora la hipercapnia', 'Gasometria de control 30 a 60 minutos despues de iniciar oxigeno o ventilacion no invasiva', 'Si pH 7.35 o menor con PaCO2 mayor de 45 mmHg: ventilacion no invasiva sin demora, no "a ver como evoluciona"', 'Prednisona 40 mg durante 5 dias, sin pauta descendente', 'Antibiotico solo si hay purulencia con aumento de disnea o de volumen, o si el paciente va a ventilarse', 'Radiografia y electrocardiograma a todos: buscar consolidacion, fibrilacion auricular, neumotorax e insuficiencia cardiaca', 'Descartar activamente embolia pulmonar si la exacerbacion no tiene causa clara', 'Calcular DECAF al ingreso para estratificar el riesgo y ajustar el nivel de cuidados', 'Antes del alta: revisar y ESCALAR el tratamiento de fondo, porque una exacerbacion casi siempre significa que era insuficiente', 'Antes del alta: comprobar la tecnica del inhalador con el dispositivo real, vacunar, ofrecer deshabituacion tabaquica y derivar a rehabilitacion', 'Cita en 1 a 4 semanas y revaluacion de oxigenoterapia o ventilacion domiciliaria a las 4 a 8 semanas, nunca con los datos del ingreso'],
    criterios_uci_general: 'Acidosis o hipercapnia progresivas pese a ventilacion no invasiva, necesidad de intubacion, inestabilidad hemodinamica, alteracion del nivel de conciencia o necesidad de vasopresores. La decision se toma junto con la situacion funcional basal y las voluntades del paciente: en la EPOC muy avanzada, definir el techo terapeutico ANTES de la crisis forma parte del buen tratamiento.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Remision a unidad de trasplante con BODE de 7 a 10, FEV1 menor del 20%, DLCO menor del 20%, enfisema homogeneo, hipercapnia o hipertension pulmonar progresivas, o exacerbaciones graves repetidas pese a tratamiento optimo.',
    prevencion: 'Primaria: control del tabaquismo (la medida de salud publica de mayor impacto), reduccion de la exposicion a biomasa y a contaminantes laborales y atmosfericos, y proteccion del desarrollo pulmonar en la infancia. Secundaria: busqueda activa de casos con espirometria en el fumador sintomatico mayor de 40 a&#241;os, cribado de alfa-1-antitripsina una vez en la vida y deteccion precoz de comorbilidades. Terciaria: vacunacion, rehabilitacion respiratoria, tratamiento de fondo ajustado al rasgo dominante, revision de la tecnica inhalatoria, planes de accion escritos para la exacerbacion y consulta precoz tras el alta.'
  }
};

export const compCites = {
  'EPOC estable': [1, 5, 17, 18],
  'Exacerbacion de la EPOC': [2, 3, 6, 7, 8],
  'Insuficiencia respiratoria cronica y oxigenoterapia domiciliaria': [9, 10, 11],
  'Hipertension pulmonar y cor pulmonale': [1, 17],
  'Deficiencia de alfa-1-antitripsina': [16],
  'Comorbilidades y complicaciones del tratamiento': [1, 12, 13, 15]
};
export const estigmasTitulo = 'Signos de exploracion en la EPOC, del mas frecuente al de peor pronostico';
export const estigmas = [
  { s: 'Espiracion alargada', p: 'Casi constante', photo: null, desc: 'La espiracion normal dura menos de 4 segundos; en la EPOC se prolonga y a menudo se acompa&#241;a de sibilancias teleespiratorias. Es la traduccion directa de la limitacion al flujo y aparece antes que la disnea de reposo.' },
  { s: 'Respiracion con labios fruncidos', p: '60-80% en fases avanzadas', photo: null, desc: 'El paciente la descubre solo. Al frenar la salida del aire crea una presion positiva que mantiene abierta la via aerea peque&#241;a y reduce el colapso espiratorio: es autoterapia de la hiperinsuflacion dinamica, y merece ense&#241;arse formalmente en rehabilitacion.' },
  { s: 'Torax en tonel con aumento del diametro anteroposterior', p: '~50%', photo: null, desc: 'Traduce la hiperinsuflacion cronica. Se acompa&#241;a de aplanamiento diafragmatico, que en la radiografia se ve como diafragmas planos y aumento del espacio retroesternal.' },
  { s: 'Disminucion global del murmullo vesicular', p: '~70%', photo: null, desc: 'El signo auscultatorio mas util y el que mejor se correlaciona con la gravedad de la obstruccion. Un torax "silencioso" en plena exacerbacion no es tranquilizador: significa que apenas se mueve aire.' },
  { s: 'Uso de musculatura accesoria', p: 'En exacerbacion y fases avanzadas', photo: null, desc: 'Esternocleidomastoideos y escalenos visibles, con tiraje. Indica que la carga mecanica supera la capacidad del diafragma aplanado y es uno de los criterios para iniciar ventilacion no invasiva antes incluso de tener la gasometria.' },
  { s: 'Signo de Hoover', p: '~30% en obstruccion grave', photo: null, desc: 'Retraccion paradojica del borde costal inferior en la inspiracion, porque el diafragma aplanado tira de las costillas hacia dentro en vez de expandirlas. Su presencia indica hiperinsuflacion importante y se asocia a peor FEV1 y mayor disnea.' },
  { s: 'Respiracion paradojica abdominal', p: 'Signo de alarma', photo: null, desc: 'El abdomen se hunde en la inspiracion en lugar de expandirse: significa fatiga diafragmatica. Es un signo de fracaso ventilatorio inminente y obliga a asegurar la via aerea o a iniciar soporte sin esperar.' },
  { s: 'Cianosis central', p: '~20% en avanzada', photo: null, desc: 'Requiere al menos 5 g/dL de hemoglobina reducida, de modo que puede faltar en el paciente anemico pese a hipoxemia grave y ser llamativa en el poliglobulico con hipoxemia moderada. Nunca sustituye a la pulsioximetria ni a la gasometria.' },
  { s: 'Asterixis y somnolencia', p: 'En hipercapnia aguda', photo: null, desc: 'Traducen narcosis por dioxido de carbono. Junto con la cefalea matutina y el temblor son la se&#241;al de que la PaCO2 esta subiendo rapido, y obligan a gasometria inmediata y a replantear el flujo de oxigeno.' },
  { s: 'Ingurgitacion yugular, hepatomegalia y edemas', p: '~25% en avanzada', photo: null, desc: 'Cor pulmonale. Hay que separarlo de la insuficiencia cardiaca izquierda, que coexiste con frecuencia: en el cor pulmonale puro no hay ortopnea marcada ni crepitantes bibasales de edema, y el ecocardiograma muestra el ventriculo derecho dilatado con el izquierdo conservado.' },
  { s: 'Perdida de masa muscular y de peso', p: '~25%', photo: null, desc: 'Marcador de gravedad sistemica y componente del indice BODE. Un indice de masa corporal de 21 o menos empeora el pronostico de forma independiente del FEV1, y es reversible en parte con rehabilitacion y soporte nutricional.' },
  { s: 'Candidiasis orofaringea y disfonia', p: '~10% con corticoide inhalado', photo: null, desc: 'Efecto local del corticoide inhalado, no de la enfermedad. Se previene con camara espaciadora y enjuague bucal tras cada dosis, y su aparicion es una buena excusa para revisar si el corticoide inhalado sigue estando indicado.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Grado espirometrico GOLD 1 a 4': [1],
  'Grupo GOLD A, B o E (calculadora disponible)': [1],
  'Escala mMRC de disnea': [1, 5],
  'Cuestionario CAT': [1],
  'Indice BODE (calculadora disponible)': [5],
  'Definicion y gravedad de Roma para la exacerbacion': [2],
  'Criterios de Anthonisen (calculadora disponible)': [3, 8],
  'Escala DECAF (calculadora disponible)': [4]
};
export const escalaCalc = {
  'Grupo GOLD A, B o E (calculadora disponible)': 'gold-abe',
  'Indice BODE (calculadora disponible)': 'bode',
  'Criterios de Anthonisen (calculadora disponible)': 'anthonisen',
  'Escala DECAF (calculadora disponible)': 'decaf'
};
export const compGroups = [
  { name: 'La enfermedad y su descompensacion', items: ['EPOC estable', 'Exacerbacion de la EPOC'] },
  { name: 'Consecuencias de la enfermedad avanzada', items: ['Insuficiencia respiratoria cronica y oxigenoterapia domiciliaria', 'Hipertension pulmonar y cor pulmonale'] },
  { name: 'Forma especial y carga a&#241;adida', items: ['Deficiencia de alfa-1-antitripsina', 'Comorbilidades y complicaciones del tratamiento'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la enfermedad misma en sus dos estados: estable y exacerbada. Las dos siguientes son a lo que conduce cuando avanza: la insuficiencia respiratoria cronica, donde se decide la oxigenoterapia domiciliaria, y la hipertension pulmonar con cor pulmonale. La quinta es la forma que no hay que dejar de buscar, porque cambia el consejo genetico y a&#241;ade un tratamiento propio. La ultima recoge lo que mata a la mayoria de los pacientes con EPOC leve y moderada, que no es la EPOC: la comorbilidad cardiovascular y el cancer de pulmon, junto con los efectos adversos del propio tratamiento.';
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
    { title: 'DIAGNOSTICO', sub: 'Sin espirometria no hay EPOC', color: '#2f5d6e', target: 'diagnostico', leaves: [
      { title: 'FEV1/FVC menor de 0.70', sub: 'Posbroncodilatador', color: '#2f5d6e', target: 'diagnostico' },
      { title: 'Grado GOLD 1 a 4', sub: 'FEV1: pronostico', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Grupo A, B o E', sub: 'Sintomas y exacerbaciones', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Eosinofilos', sub: '300 o mas: corticoide inhalado', color: '#5b4a86', target: 'diagnostico' }
    ] },
    { title: 'EXACERBACION', sub: 'Menos de 14 dias, y descartar imitadores', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Saturacion 88 a 92%', sub: 'Mas oxigeno no es mejor', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Prednisona 5 dias', sub: 'No 14, sin descenso', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Antibiotico si purulencia', sub: 'Criterios de Anthonisen', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'pH 7.35 o menor', sub: 'Ventilacion no invasiva ya', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'ENFERMEDAD AVANZADA', sub: 'Lo que cambia la mortalidad', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Dejar de fumar', sub: 'Frena la caida del FEV1', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Oxigeno 15 horas al dia', sub: 'PaO2 55 o menos', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Cor pulmonale', sub: 'No vasodilatadores de rutina', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Comorbilidad y cancer', sub: 'Lo que mata en la EPOC leve', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 4, 16], no_invasivos: [1, 3, 4, 5], imagen: [1, 15] };
export const clasificacionCite = [1, 2, 3, 4, 5];
export const seguimientoCite = [1, 6, 7, 8];
