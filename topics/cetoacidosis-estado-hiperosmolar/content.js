// topics/cetoacidosis-estado-hiperosmolar/content.js: Cetoacidosis Diabetica y Estado Hiperosmolar.
// Cubre el item "Cetoacidosis diabetica y estado hiperosmolar hiperglucemico" del cluster
// "Diabetes mellitus" (bloque VII, Endocrinologia y Metabolismo) del temario. Es el tema hermano
// de `diabetes-mellitus`, que cubre el diagnostico, las metas, el tratamiento cronico y las
// complicaciones cronicas; aqui van solo las crisis hiperglucemicas agudas.
//
// Fuente principal y mas actual: Umpierrez GE, Davis GM, ElSayed NA, et al. "Hyperglycemic Crises
// in Adults With Diabetes: A Consensus Report" (ADA/EASD). Diabetes Care. 2024;47(8):1257-1275.
// Ese consenso cambia varias cosas respecto de la declaracion clasica de la ADA de 2009 (umbral
// de glucosa de la CAD, beta-hidroxibutirato como criterio de cetosis, gradacion de gravedad solo
// por pH y bicarbonato, umbral de osmolalidad del EHH, y preferencia por cristaloides balanceados
// sobre el salino 0.9%). El tema presenta los dos juegos de criterios, porque en la practica
// conviven.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 3 presentaciones (CAD, EHH, cetoacidosis euglucemica) + 4 complicaciones (edema
// cerebral; hipopotasemia y trastornos electroliticos; complicaciones del tratamiento; trombosis
// e infecciones, incluida la mucormicosis). 4 calculadoras. 5 figuras HTML a mano.
// Sin em dash en todo el archivo (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'cetoacidosis-estado-hiperosmolar',
  titulo: 'Cetoacidosis Diabetica y Estado Hiperosmolar',
  subtitulo: 'Modulo 39 · Medicina Interna',
  accent: '#9c3d2e',
  accentDim: '#c99a8e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const fisiopatoHtml = `
<div style="max-width:600px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="border:1px solid #9c3d2e;background:#9c3d2e18;border-radius:8px;padding:6px 10px;text-align:center;margin-bottom:6px;">
    <strong style="color:#9c3d2e;">Deficit de insulina + exceso de hormonas contrarreguladoras</strong><br>
    <span style="color:var(--ink-dim);">glucagon, catecolaminas, cortisol y hormona del crecimiento</span>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
    <div style="flex:1;min-width:220px;border:1px solid #3d5a73;background:#3d5a7312;border-radius:8px;padding:6px 10px;">
      <strong style="color:#3d5a73;">Via de la glucosa (comun a las dos)</strong>
      <div style="color:var(--ink-dim);margin-top:3px;">Gluconeogenesis y glucogenolisis aumentadas, captacion periferica reducida &rarr; <strong>hiperglucemia</strong> &rarr; al superar el umbral renal, <strong>diuresis osmotica</strong> &rarr; deshidratacion, perdida de sodio, potasio, fosfato y magnesio, e hiperosmolalidad.</div>
    </div>
    <div style="flex:1;min-width:220px;border:1px solid #8a6a1f;background:#8a6a1f12;border-radius:8px;padding:6px 10px;">
      <strong style="color:#8a6a1f;">Via de las cetonas (solo si falta insulina de verdad)</strong>
      <div style="color:var(--ink-dim);margin-top:3px;">Lipolisis no frenada &rarr; acidos grasos libres al higado &rarr; beta-oxidacion y <strong>cetogenesis</strong> &rarr; beta-hidroxibutirato y acetoacetato &rarr; <strong>acidosis metabolica con anion gap elevado</strong>.</div>
    </div>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <div style="flex:1;min-width:220px;border:1px solid #9c3d2e;background:#9c3d2e18;border-radius:8px;padding:6px 10px;">
      <strong style="color:#9c3d2e;">Cetoacidosis diabetica</strong>
      <div style="color:var(--ink-dim);margin-top:3px;">El deficit de insulina es <strong>absoluto o casi absoluto</strong>: las dos vias estan abiertas. Predomina la acidosis. Se instaura en <strong>horas</strong>, antes de que la deshidratacion sea extrema.</div>
    </div>
    <div style="flex:1;min-width:220px;border:1px solid #6b3a5a;background:#6b3a5a18;border-radius:8px;padding:6px 10px;">
      <strong style="color:#6b3a5a;">Estado hiperosmolar hiperglucemico</strong>
      <div style="color:var(--ink-dim);margin-top:3px;">Queda <strong>insulina residual suficiente para frenar la lipolisis</strong> (hace falta muy poca) pero no para controlar la glucemia: la via de las cetonas esta cerrada. Se instaura en <strong>dias o semanas</strong>, y la deshidratacion y la hiperosmolalidad llegan a ser extremas.</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Esa es toda la diferencia: <strong>cuanta insulina queda</strong>. Por eso hasta un tercio de los pacientes tiene una forma mixta, con hiperosmolalidad y cetoacidosis a la vez, y por eso un paciente con DM2 puede hacer una cetoacidosis si el estimulo catabolico es intenso.</div>
</div>`;

const criteriosHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <table style="border-collapse:collapse;width:100%;min-width:480px;">
    <thead><tr style="background:var(--panel2);">
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Criterio</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Cetoacidosis diabetica</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Estado hiperosmolar</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Glucosa</td><td style="padding:3px 6px;border:1px solid var(--line);">200 mg/dL o mayor (ADA/EASD 2024; el criterio clasico era 250). Puede ser normal en la forma euglucemica</td><td style="padding:3px 6px;border:1px solid var(--line);">600 mg/dL o mayor</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Cetonas</td><td style="padding:3px 6px;border:1px solid var(--line);">Beta-hidroxibutirato 3.0 mmol/L o mayor, o cetonuria de 2+ o mas</td><td style="padding:3px 6px;border:1px solid var(--line);">Ausentes o minimas (beta-hidroxibutirato menor de 3.0)</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">pH</td><td style="padding:3px 6px;border:1px solid var(--line);">Menor de 7.30</td><td style="padding:3px 6px;border:1px solid var(--line);">Mayor de 7.30</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Bicarbonato</td><td style="padding:3px 6px;border:1px solid var(--line);">Menor de 18 mmol/L</td><td style="padding:3px 6px;border:1px solid var(--line);">Mayor de 18 mmol/L</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Anion gap</td><td style="padding:3px 6px;border:1px solid var(--line);">Elevado (corregir por albumina)</td><td style="padding:3px 6px;border:1px solid var(--line);">Normal o poco elevado</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Osmolalidad efectiva</td><td style="padding:3px 6px;border:1px solid var(--line);">Variable</td><td style="padding:3px 6px;border:1px solid var(--line);">Mayor de 300 mOsm/kg (ADA/EASD 2024; el criterio clasico era 320)</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Estado mental</td><td style="padding:3px 6px;border:1px solid var(--line);">Habitualmente alerta o somnoliento</td><td style="padding:3px 6px;border:1px solid var(--line);">Alterado; proporcional a la osmolalidad</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Instauracion</td><td style="padding:3px 6px;border:1px solid var(--line);">Horas (menos de 24 h)</td><td style="padding:3px 6px;border:1px solid var(--line);">Dias o semanas</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Mortalidad</td><td style="padding:3px 6px;border:1px solid var(--line);">Menor del 1% en centros con experiencia</td><td style="padding:3px 6px;border:1px solid var(--line);">Del 5 al 20%</td></tr>
    </tbody>
  </table>
  <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:6px;">
    <div style="flex:1;min-width:150px;border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:5px 8px;"><strong style="color:#3f6b52;">CAD leve</strong><br><span style="color:var(--ink-dim);">pH 7.20 a 7.29; bicarbonato 15 a 17</span></div>
    <div style="flex:1;min-width:150px;border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:5px 8px;"><strong style="color:#8a6a1f;">CAD moderada</strong><br><span style="color:var(--ink-dim);">pH 7.10 a 7.19; bicarbonato 10 a 14</span></div>
    <div style="flex:1;min-width:150px;border:1px solid #8c3a34;background:#8c3a3418;border-radius:8px;padding:5px 8px;"><strong style="color:#8c3a34;">CAD grave</strong><br><span style="color:var(--ink-dim);">pH menor de 7.10; bicarbonato menor de 10</span></div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">El consenso de 2024 gradua la gravedad solo por el pH y el bicarbonato; la declaracion clasica de 2009 incluia ademas el estado mental. Hasta un tercio de los pacientes tiene una <strong>forma mixta</strong> que cumple criterios de las dos entidades. Una glucosa aparentemente controlada <strong>no descarta</strong> una cetoacidosis.</div>
</div>`;

const protocoloHtml = `
<div style="max-width:640px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="border:1px solid #9c3d2e;background:#9c3d2e18;border-radius:8px;padding:6px 10px;margin-bottom:6px;">
    <strong style="color:#9c3d2e;">Hora 0.</strong> Confirmar el diagnostico (glucosa, gasometria venosa, electrolitos, anion gap, beta-hidroxibutirato), canalizar dos vias, monitorizar y buscar el precipitante. <strong>Mirar el potasio antes de poner la primera unidad de insulina.</strong>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <div style="flex:1;min-width:270px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">1. LIQUIDOS</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Primera hora:</strong> 15 a 20 mL/kg (1 a 1.5 L) de cristaloide. El consenso de 2024 prefiere una <strong>solucion balanceada</strong> (Ringer lactato, Plasma-Lyte) al salino 0.9%, que produce acidosis hipercloremica y retrasa la resolucion.</li>
        <li><strong>Despues, segun el sodio corregido:</strong> si esta normal o alto, salino 0.45% a 250 a 500 mL/h; si esta bajo, salino 0.9% al mismo ritmo.</li>
        <li><strong>Anadir dextrosa</strong> al 5 o al 10% cuando la glucosa baje a 200 a 250 mg/dL en la CAD (250 a 300 en el EHH), para poder mantener la insulina.</li>
        <li>Reponer el deficit en 24 a 48 h; mas despacio en el EHH, el anciano, la cardiopatia y la enfermedad renal.</li>
      </ul>
    </div>
    <div style="flex:1;min-width:270px;border:1px solid #8a6a1f;border-radius:8px;padding:7px 10px;background:#8a6a1f10;">
      <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">2. POTASIO (mirar primero)</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong style="color:#8c3a34;">Menor de 3.3 mmol/L: NO iniciar insulina.</strong> Reponer 10 a 20 mmol/h hasta pasar de 3.3 y solo entonces empezar. Dar insulina antes puede causar arritmia mortal y paralisis respiratoria.</li>
        <li><strong>De 3.3 a 5.2:</strong> anadir 20 a 30 mmol de potasio a cada litro de fluido, con objetivo de mantenerlo entre 4 y 5.</li>
        <li><strong>Mayor de 5.2:</strong> no reponer todavia; iniciar insulina y fluidos y repetir el potasio cada 2 h.</li>
        <li>El deficit corporal total es de 3 a 5 mmol/kg aunque el potasio inicial parezca normal o alto.</li>
      </ul>
    </div>
    <div style="flex:1;min-width:270px;border:1px solid #3f6b52;border-radius:8px;padding:7px 10px;background:#3f6b5210;">
      <div style="font-weight:700;color:#3f6b52;margin-bottom:3px;">3. INSULINA</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Insulina regular intravenosa:</strong> bolo de 0.1 U/kg seguido de 0.1 U/kg/h, o bien <strong>sin bolo</strong> a 0.14 U/kg/h (equivalentes).</li>
        <li><strong>Objetivo:</strong> bajar la glucosa 50 a 75 mg/dL/h. Si no cae al menos un 10% en la primera hora, dar un bolo de 0.14 U/kg y seguir.</li>
        <li>Al anadir la dextrosa, <strong>reducir a 0.02 a 0.05 U/kg/h</strong> y mantener la glucosa en 150 a 200 (CAD) o 250 a 300 (EHH).</li>
        <li><strong>No suspender la insulina al normalizar la glucosa:</strong> se mantiene con dextrosa hasta cerrar el anion gap.</li>
        <li>En el EHH, iniciar la insulina <strong>despues</strong> de la reposicion inicial de volumen y a dosis mas baja.</li>
      </ul>
    </div>
    <div style="flex:1;min-width:270px;border:1px solid #8c3a34;border-radius:8px;padding:7px 10px;background:#8c3a3410;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">4. BICARBONATO Y FOSFATO</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Bicarbonato: no de rutina.</strong> Solo si el pH es menor de 6.9 a 7.0: 100 mmol en 400 mL con 20 mmol de cloruro potasico en 2 h, y repetir hasta pH mayor de 7.0.</li>
        <li>Sus riesgos son hipopotasemia, acidosis paradojica del sistema nervioso central, edema cerebral y retraso de la resolucion de la cetosis.</li>
        <li><strong>Fosfato: no de rutina.</strong> Reponer si es menor de 1.0 mg/dL o si hay disfuncion cardiaca, anemia hemolitica o depresion respiratoria; vigilar la calcemia.</li>
        <li>Tratar siempre el <strong>precipitante</strong> (infeccion, infarto, omision de insulina, farmacos) en paralelo.</li>
      </ul>
    </div>
  </div>
  <div style="border:1px solid var(--line);background:var(--panel2);border-radius:8px;padding:6px 10px;margin-top:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Monitorizacion.</strong> Glucemia capilar cada hora. Electrolitos, funcion renal, anion gap y gasometria venosa cada 2 a 4 h hasta la estabilizacion. Balance hidrico estricto. Profilaxis de tromboembolia con heparina de bajo peso molecular salvo contraindicacion.
  </div>
</div>`;

const resolucionHtml = `
<div style="max-width:580px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">1. Criterios de resolucion de la CAD.</strong> Glucosa menor de 200 mg/dL <strong>y al menos dos</strong> de: bicarbonato de 15 mmol/L o mayor, pH venoso mayor de 7.30, anion gap de 12 o menor. El consenso de 2024 prefiere guiarse por el <strong>cierre del anion gap</strong> o por un beta-hidroxibutirato menor de 0.6 mmol/L, no por la glucosa.</div>
    <div style="border:1px solid #6b3a5a;background:#6b3a5a18;border-radius:8px;padding:6px 10px;"><strong style="color:#6b3a5a;">1b. Criterios de resolucion del EHH.</strong> Normalizacion de la osmolalidad efectiva y <strong>recuperacion del estado mental</strong>, con glucosa por debajo de 250 a 300 mg/dL. El sensorio puede tardar mas que la analitica en recuperarse.</div>
    <div style="border:1px solid #3d5a73;background:#3d5a7318;border-radius:8px;padding:6px 10px;"><strong style="color:#3d5a73;">2. Requisito para pasar a subcutanea.</strong> Crisis resuelta <strong>y</strong> paciente capaz de comer. Si no come, se mantiene la insulina intravenosa con dextrosa.</div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">3. Calcular la dosis.</strong> Si ya usaba insulina, reanudar su pauta previa. Si no: 0.5 a 0.8 U/kg/dia, o a partir de la infusion estable de las ultimas 6 h (U/h por 24, y de eso el 70 al 80%). Repartir 50% basal y 50% en bolos con las comidas.</div>
    <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:8px;padding:6px 10px;"><strong style="color:#8c3a34;">4. Solapar, siempre.</strong> Administrar la insulina basal subcutanea <strong>1 a 2 horas antes</strong> de parar la infusion. La insulina regular intravenosa tiene una vida media de unos 7 minutos: si se corta sin solapar, la cetosis reaparece en pocas horas.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">El bicarbonato puede seguir bajo tras cerrarse el anion gap por la <strong>acidosis hipercloremica</strong> del suero salino: eso no es CAD persistente y no obliga a mantener la insulina intravenosa. Por eso se sigue el anion gap y no el bicarbonato aislado.</div>
</div>`;

const ehhHtml = `
<div style="max-width:580px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #3d5a73;background:#3d5a7312;border-radius:8px;padding:6px 10px;"><strong style="color:#3d5a73;">El deficit de agua es mucho mayor.</strong> De 100 a 200 mL/kg (unos 9 L) frente a los 100 mL/kg (unos 6 L) de la CAD. La reposicion de volumen es el pilar del tratamiento y por si sola ya baja la glucemia.</div>
    <div style="border:1px solid #8c3a34;background:#8c3a3412;border-radius:8px;padding:6px 10px;"><strong style="color:#8c3a34;">Corregir despacio.</strong> La osmolalidad efectiva no debe bajar mas de <strong>3 mOsm/kg/h</strong> y el sodio no debe corregirse mas de 10 mmol/L en 24 h: una correccion rapida provoca edema cerebral y mielinolisis osmotica.</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5212;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">Insulina despues del volumen y a dosis menor.</strong> La insulina desplaza agua al interior de la celula: darla antes de reponer volumen agrava la hipovolemia. Objetivo de glucosa 250 a 300 mg/dL hasta que se normalicen la osmolalidad y el sensorio.</div>
    <div style="border:1px solid #6b3a5a;background:#6b3a5a12;border-radius:8px;padding:6px 10px;"><strong style="color:#6b3a5a;">El sensorio se recupera despues que la analitica.</strong> Si el paciente no mejora con una osmolalidad ya normal, hay que buscar otra causa (ictus, infeccion del sistema nervioso central, edema cerebral, farmacos).</div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f12;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">Riesgo trombotico alto.</strong> Hiperosmolalidad, deshidratacion e inflamacion: profilaxis con heparina de bajo peso molecular salvo contraindicacion. La anticoagulacion plena no esta indicada de rutina.</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">El EHH aparece sobre todo en el anciano con DM2 y acceso limitado al agua, y casi siempre hay un <strong>precipitante</strong> (infeccion, infarto, ictus, farmacos): no tratarlo condena el tratamiento al fracaso y explica buena parte de la mortalidad, que es del 5 al 20%.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La cetoacidosis diabetica (CAD) y el estado hiperosmolar hiperglucemico (EHH) son las dos descompensaciones hiperglucemicas agudas de la diabetes y son urgencias vitales. Las dos nacen del mismo mecanismo (falta insulina y sobran hormonas contrarreguladoras) y se diferencian solo por <strong>cuanta insulina queda</strong>: la suficiente para frenar la lipolisis, o no.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Una sola fisiopatologia con dos salidas.</strong></p>
${figBlock('Figura 1', 'Por que una cetoacidosis y por que un estado hiperosmolar', fisiopatoHtml)}
<p style="margin:0 0 12px;">Frenar la lipolisis exige <strong>mucha menos insulina</strong> que controlar la glucemia. En la CAD el deficit es absoluto o casi absoluto, la lipolisis se dispara y el higado fabrica beta-hidroxibutirato y acetoacetato: aparece una acidosis metabolica con anion gap elevado en cuestion de horas. En el EHH queda insulina residual bastante para apagar la cetogenesis pero no para contener la glucosa, de modo que el cuadro avanza durante dias y lo que domina es una deshidratacion e hiperosmolalidad extremas sin acidosis relevante. Como es un espectro y no dos cajas, hasta <strong>un tercio de los pacientes presenta una forma mixta</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Que las desencadena.</strong></p>
<p style="margin:0 0 12px;">Casi nunca ocurren sin motivo, y buscar el precipitante forma parte del tratamiento. Los mas frecuentes son la <strong>infeccion</strong> (del 30 al 50% de los casos: neumonia, infeccion urinaria, sepsis), la <strong>omision o el ajuste insuficiente de la insulina</strong> (la primera causa en el paciente joven con DM1), los <strong>eventos isquemicos</strong> (infarto de miocardio, ictus, isquemia mesenterica), los <strong>farmacos</strong> (glucocorticoides, tiazidas, antipsicoticos de segunda generacion, inhibidores de SGLT2, inhibidores de puntos de control inmunitario) y el <strong>debut</strong> de la diabetes. En el EHH se anade cualquier situacion que limite el acceso al agua, sobre todo en el anciano dependiente.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los criterios, y como han cambiado.</strong></p>
${figBlock('Figura 2', 'Criterios diagnosticos y gravedad de la CAD y del EHH', criteriosHtml)}
<p style="margin:0 0 12px;">El consenso ADA/EASD de 2024 sobre crisis hiperglucemicas actualizo la declaracion clasica de la ADA de 2009 en cinco puntos que conviene tener claros: baja el umbral de glucosa de la CAD a <strong>200 mg/dL</strong> (y reconoce de forma explicita la cetoacidosis euglucemica), adopta el <strong>beta-hidroxibutirato</strong> (3.0 mmol/L o mayor) como criterio de cetosis preferido sobre la cetonuria, gradua la gravedad de la CAD <strong>solo por el pH y el bicarbonato</strong>, baja el umbral de osmolalidad efectiva del EHH a <strong>300 mOsm/kg</strong>, y prefiere los <strong>cristaloides balanceados</strong> al salino 0.9%. En la practica conviven los dos juegos de criterios, asi que el tema presenta ambos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuatro trampas de laboratorio que hay que anticipar.</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>El potasio enganosamente normal o alto.</strong> El potasio serico inicial no refleja un deficit corporal total de 3 a 5 mmol/kg, porque la acidosis y la falta de insulina lo sacan de la celula. Cae en picado al empezar la insulina: por eso <strong>se mira antes de tratar</strong>.</li>
  <li><strong>El sodio falsamente bajo.</strong> La hiperglucemia arrastra agua al espacio extracelular y diluye el sodio. Hay que <strong>corregirlo</strong> para decidir el tipo de suero y para calcular el deficit de agua (calculadora disponible).</li>
  <li><strong>La cetonuria que empeora mientras el paciente mejora.</strong> La tira de nitroprusiato detecta acetoacetato pero <strong>no beta-hidroxibutirato</strong>, que es el cuerpo cetonico predominante al inicio; al tratar, el beta-hidroxibutirato se convierte en acetoacetato y la tira se positiviza mas. Se sigue el beta-hidroxibutirato en sangre o el anion gap.</li>
  <li><strong>La leucocitosis que no es infeccion.</strong> Es habitual por el estres y la deshidratacion, hasta cifras de 25.000; por encima de eso o con desviacion izquierda marcada, buscar el foco. Tambien pueden elevarse la amilasa y la lipasa sin pancreatitis, y la creatinina puede salir falsamente alta por interferencia del acetoacetato.</li>
</ul>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> El tratamiento son cuatro medidas en paralelo (liquidos, potasio, insulina y el precipitante), con el bicarbonato casi siempre fuera de la ecuacion. La mortalidad de la CAD es menor del 1% en centros con experiencia, pero la del EHH llega del 5 al 20%, y en ambos casos lo que mata suele ser el precipitante o una complicacion evitable del tratamiento. Las tres presentaciones (CAD, EHH y cetoacidosis euglucemica) y las complicaciones se desarrollan en Presentaciones y complicaciones. El diagnostico, las metas y las complicaciones cronicas estan en el tema de Diabetes Mellitus.</p>`;

export const bibliografia = [
  'Umpierrez GE, Davis GM, ElSayed NA, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report by the American Diabetes Association and the European Association for the Study of Diabetes. Diabetes Care. 2024;47(8):1257-1275.',
  'Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes. Diabetes Care. 2009;32(7):1335-1343.',
  'American Diabetes Association Professional Practice Committee. Standards of Care in Diabetes 2025. Diabetes Care. 2025;48(Suppl 1):S1-S352.',
  'Dhatariya KK, Glaser NS, Codner E, Umpierrez GE. Diabetic ketoacidosis. Nat Rev Dis Primers. 2020;6(1):40.',
  'Karslioglu French E, Donihi AC, Korytkowski MT. Diabetic ketoacidosis and hyperosmolar hyperglycaemic syndrome: review of acute decompensated diabetes in adult patients. BMJ. 2019;365:l1114.',
  'Self WH, Evans CS, Jenkins CA, et al. Clinical effects of balanced crystalloids vs saline in adults with diabetic ketoacidosis: a subgroup analysis of cluster randomized clinical trials. JAMA Netw Open. 2020;3(11):e2024596.',
  'Ramanan M, Attokaran A, Murray L, et al. Sodium chloride or Plasmalyte-148 evaluation in severe diabetic ketoacidosis (SCOPE-DKA): a cluster, crossover, randomized, controlled trial. Intensive Care Med. 2021;47(11):1248-1257.',
  'Kitabchi AE, Murphy MB, Spencer J, et al. Is a priming dose of insulin necessary in a low-dose insulin protocol for the treatment of diabetic ketoacidosis? Diabetes Care. 2008;31(11):2081-2085.',
  'Umpierrez GE, Latif K, Stoever J, et al. Efficacy of subcutaneous insulin lispro versus continuous intravenous regular insulin for the treatment of patients with diabetic ketoacidosis. Am J Med. 2004;117(5):291-296.',
  'Chua HR, Schneider A, Bellomo R. Bicarbonate in diabetic ketoacidosis: a systematic review. Ann Intensive Care. 2011;1(1):23.',
  'Glaser N, Barnett P, McCaslin I, et al. Risk factors for cerebral edema in children with diabetic ketoacidosis. N Engl J Med. 2001;344(4):264-269.',
  'Kuppermann N, Ghetti S, Schunk JE, et al. Clinical trial of fluid infusion rates for pediatric diabetic ketoacidosis (PECARN FLUID). N Engl J Med. 2018;378(24):2275-2287.',
  'Hillier TA, Abbott RD, Barrett EJ. Hyponatremia: evaluating the correction factor for hyperglycemia. Am J Med. 1999;106(4):399-403.',
  'Katz MA. Hyperglycemia-induced hyponatremia: calculation of expected serum sodium depression. N Engl J Med. 1973;289(16):843-844.',
  'Figge J, Jabor A, Kazda A, Fencl V. Anion gap and hypoalbuminemia. Crit Care Med. 1998;26(11):1807-1810.',
  'Peters AL, Buschur EO, Buse JB, et al. Euglycemic diabetic ketoacidosis: a potential complication of treatment with sodium-glucose cotransporter 2 inhibition. Diabetes Care. 2015;38(9):1687-1693.',
  'Goldenberg RM, Berard LD, Cheng AYY, et al. SGLT2 inhibitor-associated diabetic ketoacidosis: clinical review and recommendations for prevention and diagnosis. Clin Ther. 2016;38(12):2654-2664.',
  'Pasquel FJ, Umpierrez GE. Hyperosmolar hyperglycemic state: a historic review of the clinical presentation, diagnosis, and treatment. Diabetes Care. 2014;37(11):3124-3131.',
  'Fayfman M, Pasquel FJ, Umpierrez GE. Management of hyperglycemic crises: diabetic ketoacidosis and hyperglycemic hyperosmolar state. Med Clin North Am. 2017;101(3):587-606.',
  'Hsia E, Seggelke S, Gibbs J, et al. Subcutaneous administration of glargine to diabetic patients receiving insulin infusion prevents rebound hyperglycemia. J Clin Endocrinol Metab. 2012;97(9):3132-3137.',
  'Umpierrez GE, Freire AX. Abdominal pain in patients with hyperglycemic crises. J Crit Care. 2002;17(1):63-67.',
  'Cornely OA, Alastruey-Izquierdo A, Arenz D, et al. Global guideline for the diagnosis and management of mucormycosis: an initiative of the ECMM and the MSG ERC. Lancet Infect Dis. 2019;19(12):e405-e421.',
  'Sibai BM, Viteri OA. Diabetic ketoacidosis in pregnancy. Obstet Gynecol. 2014;123(1):167-178.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Cetoacidosis diabetica (instauracion en horas)',
      tituloB: 'Estado hiperosmolar hiperglucemico (instauracion en dias)',
      compensada: 'Poliuria, polidipsia y perdida de peso en las horas o dias previos, seguidas de nauseas, vomitos y dolor abdominal (que puede simular un abdomen agudo y cuya intensidad se correlaciona con la gravedad de la acidosis, no con la deshidratacion). A la exploracion: deshidratacion, taquicardia, respiracion de Kussmaul (profunda y rapida, compensadora de la acidosis), aliento cetosico afrutado y sensorio habitualmente conservado o con somnolencia. La hipotermia es un signo de mal pronostico y puede enmascarar una infeccion.',
      descompensada: 'Cuadro de dias o semanas en un anciano con DM2, a menudo con acceso limitado al agua: deshidratacion profunda con hipotension y oliguria, y sobre todo <strong>alteracion del estado mental proporcional a la osmolalidad</strong>, desde la confusion hasta el coma. Puede haber focalidad neurologica, hemianopsia o crisis convulsivas focales que simulan un ictus y que revierten al corregir la osmolalidad. No hay Kussmaul ni aliento cetosico porque no hay acidosis relevante.'
    },
    laboratorio: [
      { prueba: 'Glucosa plasmatica y gasometria venosa', utilidad: 'Base del diagnostico. La gasometria venosa basta para el manejo (el pH venoso es unas 0.03 unidades menor que el arterial y el bicarbonato es equivalente); reservar la arterial para el paciente con insuficiencia respiratoria o inestabilidad.' },
      { prueba: 'Beta-hidroxibutirato en sangre capilar o venosa', utilidad: 'Criterio de cetosis preferido (3.0 mmol/L o mayor). Superior a la cetonuria por nitroprusiato, que no detecta el beta-hidroxibutirato y que puede positivizarse mas durante el tratamiento al convertirse este en acetoacetato. Sirve tambien para seguir la respuesta (resolucion por debajo de 0.6 mmol/L).' },
      { prueba: 'Sodio, cloro y bicarbonato: anion gap y sodio corregido', utilidad: 'El anion gap (sodio menos cloro menos bicarbonato), corregido por la albumina, cuantifica la cetoacidosis y es el parametro que se sigue hasta la resolucion. El sodio hay que corregirlo por la hiperglucemia para elegir el suero y calcular el deficit de agua (calculadora disponible).' },
      { prueba: 'Potasio (y magnesio y fosfato)', utilidad: 'Determina si se puede iniciar la insulina: por debajo de 3.3 mmol/L hay que reponer primero. El valor inicial subestima siempre un deficit corporal total de 3 a 5 mmol/kg. El fosfato y el magnesio tambien estan depletados y caen con el tratamiento.' },
      { prueba: 'Osmolalidad plasmatica efectiva', utilidad: 'Dos veces el sodio mas la glucosa entre 18 (excluye la urea, que atraviesa libremente las membranas). Define el EHH y guia la velocidad de correccion (no mas de 3 mOsm/kg/h). Calculadora disponible.' },
      { prueba: 'Funcion renal, hemograma y marcadores del precipitante', utilidad: 'Lesion renal aguda prerrenal frecuente; la creatinina puede salir falsamente alta por interferencia del acetoacetato. La leucocitosis de hasta 25.000 es reactiva; por encima o con desviacion izquierda, buscar infeccion. Anadir cultivos, troponina, electrocardiograma y pruebas dirigidas segun la sospecha.' },
      { prueba: 'Amilasa, lipasa y trigliceridos', utilidad: 'La amilasa y la lipasa se elevan con frecuencia sin pancreatitis; solo se interpretan junto con la clinica y la imagen. La hipertrigliceridemia grave acompanante puede a su vez desencadenar una pancreatitis y causar pseudohiponatremia.' }
    ],
    no_invasivos: [
      { metodo: 'Anion gap corregido por albumina y cociente delta (calculadora disponible)', interpretacion: 'El anion gap corregido evita infraestimar la acidosis en el paciente hipoalbuminemico. El cociente delta (incremento del anion gap dividido por el descenso del bicarbonato) detecta trastornos mixtos, muy frecuentes en estos pacientes.', cutoff: 'Anion gap corregido = anion gap + 2.5 por (4.0 menos albumina en g/dL). Cociente delta menor de 0.4: acidosis hipercloremica; de 1 a 2: cetoacidosis pura; mayor de 2: alcalosis metabolica asociada (vomitos)' },
      { metodo: 'Osmolalidad efectiva y deficit de agua libre (calculadora disponible)', interpretacion: 'Clasifica el EHH, guia la velocidad de correccion y cuantifica el agua que hay que reponer.', cutoff: 'Osmolalidad efectiva mayor de 300 mOsm/kg (ADA/EASD 2024) o mayor de 320 (criterio clasico); descenso maximo de 3 mOsm/kg/h' },
      { metodo: 'Electrocardiograma', interpretacion: 'Doble utilidad: detecta el infarto de miocardio como precipitante (que puede ser indoloro) y muestra los efectos del potasio antes de que llegue el laboratorio (ondas T picudas en la hiperpotasemia; aplanamiento de la T, onda U y descenso del ST en la hipopotasemia).', cutoff: 'Repetir ante cualquier cambio brusco del potasio o del estado clinico' },
      { metodo: 'Criterios de resolucion (calculadora disponible)', interpretacion: 'Definen cuando se puede pasar de la insulina intravenosa a la subcutanea; guiarse por el cierre del anion gap y no por la glucosa aislada.', cutoff: 'CAD: glucosa menor de 200 mg/dL mas 2 de (bicarbonato 15 o mayor, pH venoso mayor de 7.30, anion gap 12 o menor), o beta-hidroxibutirato menor de 0.6 mmol/L. EHH: osmolalidad y estado mental normalizados' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Busca la neumonia como precipitante (puede ser sutil con el paciente deshidratado y hacerse evidente tras la rehidratacion) y valora la sobrecarga de volumen durante el tratamiento.' },
      { modalidad: 'Tomografia craneal', hallazgos: 'No se pide de rutina. Indicada ante focalidad neurologica, crisis convulsivas, o deterioro del sensorio durante el tratamiento (sospecha de edema cerebral o de ictus). Si se sospecha edema cerebral, se trata primero y se hace la imagen despues.' },
      { modalidad: 'Tomografia o resonancia de senos paranasales y orbitas', hallazgos: 'Ante dolor facial, secrecion nasal oscura, escara necrotica en cornete o paladar, oftalmoplejia o proptosis: sospecha de mucormicosis rinocerebral, que exige exploracion endoscopica y biopsia urgentes.' },
      { modalidad: 'Ecografia o tomografia abdominal', hallazgos: 'Solo si el dolor abdominal persiste tras corregir la acidosis: el dolor de la CAD cede al mejorar el pH, y si no cede hay que buscar una causa estructural (pancreatitis, isquemia mesenterica, colecistitis).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las crisis hiperglucemicas se clasifican por <strong>entidad</strong> (cetoacidosis diabetica, estado hiperosmolar hiperglucemico, formas mixtas y la variante euglucemica de la cetoacidosis) y, dentro de la CAD, por <strong>gravedad</strong>, que se gradua por el pH y el bicarbonato y determina el nivel de cuidados. Los criterios comparados y la gradacion estan en la Figura 2 de Definicion. Conviene recordar que un tercio de los casos es mixto y que la glucemia por si sola nunca clasifica el cuadro: hacen falta las cetonas y la gasometria.`,
    escalas: [
      { nombre: 'Criterios diagnosticos de la CAD (ADA/EASD 2024)', componentes: 'Hiperglucemia, cetosis y acidosis metabolica.', formula: 'Glucosa de 200 mg/dL o mayor (o diabetes conocida) MAS beta-hidroxibutirato de 3.0 mmol/L o mayor (o cetonuria de 2+ o mas) MAS pH menor de 7.30 o bicarbonato menor de 18 mmol/L.', interpretacion: 'Los tres elementos deben estar presentes. La declaracion clasica de 2009 exigia glucosa mayor de 250 mg/dL; el umbral se bajo para no perder las formas euglucemicas.' },
      { nombre: 'Gravedad de la CAD', componentes: 'pH y bicarbonato venosos.', formula: 'Leve: pH 7.20 a 7.29 y bicarbonato 15 a 17. Moderada: pH 7.10 a 7.19 y bicarbonato 10 a 14. Grave: pH menor de 7.10 y bicarbonato menor de 10.', interpretacion: 'La CAD grave, la alteracion del sensorio, la inestabilidad hemodinamica y el embarazo indican ingreso en cuidados intensivos o intermedios. La CAD leve o moderada sin comorbilidad puede tratarse en planta, incluso con analogo rapido subcutaneo cada 1 a 2 h.' },
      { nombre: 'Criterios diagnosticos del EHH', componentes: 'Hiperglucemia intensa, hiperosmolalidad, ausencia de cetoacidosis y alteracion del sensorio.', formula: 'Glucosa de 600 mg/dL o mayor MAS osmolalidad efectiva mayor de 300 mOsm/kg (ADA/EASD 2024; el criterio clasico era mayor de 320) MAS pH mayor de 7.30 y bicarbonato mayor de 18 MAS alteracion del estado mental.', interpretacion: 'La osmolalidad efectiva es 2 por el sodio mas la glucosa entre 18. Un sensorio normal con osmolalidad muy alta, o alterado con osmolalidad normal, obliga a buscar otra causa neurologica.' },
      { nombre: 'Anion gap, correccion por albumina y cociente delta', componentes: 'Sodio, cloro, bicarbonato y albumina.', formula: 'Anion gap = sodio menos (cloro mas bicarbonato); corregido = anion gap + 2.5 por (4.0 menos albumina en g/dL). Cociente delta = (anion gap corregido menos 12) dividido por (24 menos bicarbonato). Calculadora disponible.', interpretacion: 'Cociente delta menor de 0.4 indica que domina una acidosis hipercloremica (habitual tras horas de salino 0.9%); de 1 a 2, cetoacidosis pura; mayor de 2, alcalosis metabolica concurrente por los vomitos.' },
      { nombre: 'Criterios de resolucion', componentes: 'Glucosa, bicarbonato, pH, anion gap y beta-hidroxibutirato; en el EHH, osmolalidad y estado mental.', formula: 'CAD: glucosa menor de 200 mg/dL y al menos 2 de (bicarbonato 15 mmol/L o mayor, pH venoso mayor de 7.30, anion gap 12 o menor). Alternativa preferida en 2024: beta-hidroxibutirato menor de 0.6 mmol/L. Calculadora disponible.', interpretacion: 'Cumplidos los criterios y con el paciente capaz de comer, se pasa a insulina subcutanea solapando 1 a 2 h antes de retirar la infusion. El bicarbonato aun bajo con anion gap ya cerrado es acidosis hipercloremica, no CAD persistente.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Cetoacidosis diabetica',
      color: '#9c3d2e',
      definicion: 'Triada de hiperglucemia (glucosa de 200 mg/dL o mayor, o diabetes conocida), cetosis (beta-hidroxibutirato de 3.0 mmol/L o mayor) y acidosis metabolica con anion gap elevado (pH menor de 7.30 o bicarbonato menor de 18 mmol/L). Es la forma de descompensacion tipica de la DM1, aunque una cuarta parte o mas de los casos ocurre en pacientes con DM2 sometidos a un estimulo catabolico intenso.',
      fisiopatologia: 'El deficit absoluto o casi absoluto de insulina, con el exceso de glucagon, catecolaminas, cortisol y hormona del crecimiento, abre las dos vias descritas en la Figura 1 de Definicion: hiperglucemia con diuresis osmotica, y lipolisis no frenada con cetogenesis hepatica. La acumulacion de beta-hidroxibutirato y acetoacetato genera la acidosis con anion gap elevado, y la diuresis osmotica vacia el agua y los electrolitos corporales.',
      epidemiologia: 'Incidencia aproximada de 4 a 8 episodios por cada 1.000 personas-ano con diabetes, y en aumento. La mortalidad es menor del 1% en centros con experiencia, pero sube por encima del 5% en el anciano y ante comorbilidad grave o un precipitante mayor. Es la forma de debut de la DM1 en una proporcion importante de los casos.',
      factores_riesgo: ['Infeccion, la causa mas frecuente (del 30 al 50%): neumonia, infeccion urinaria, sepsis', 'Omision o dosis insuficiente de insulina, incluida la disfuncion de la bomba o del cateter', 'Eventos isquemicos: infarto de miocardio, ictus, isquemia mesenterica', 'Farmacos: glucocorticoides, tiazidas, antipsicoticos de segunda generacion, inhibidores de SGLT2, inhibidores de puntos de control inmunitario', 'Consumo de alcohol o de cocaina', 'Pancreatitis aguda y cirugia o traumatismo mayores', 'Embarazo (aparece con glucemias mas bajas y progresa mas rapido)', 'Debut de la diabetes tipo 1 y trastornos de la conducta alimentaria'],
      clinica: 'Instauracion en menos de 24 horas: poliuria, polidipsia, perdida de peso, nauseas y vomitos, y dolor abdominal (del 40 al 75%, proporcional a la gravedad de la acidosis y no a la deshidratacion; cede al corregir el pH). A la exploracion, deshidratacion, taquicardia, respiracion de Kussmaul, aliento cetosico afrutado y sensorio conservado o con somnolencia. La hipotermia y la hipotension marcan gravedad.',
      criterios_dx: 'Los tres criterios de la ADA/EASD 2024: glucosa de 200 mg/dL o mayor (o diabetes conocida), beta-hidroxibutirato de 3.0 mmol/L o mayor (o cetonuria de 2+ o mas), y pH menor de 7.30 o bicarbonato menor de 18 mmol/L, con anion gap elevado. Gradar la gravedad por el pH y el bicarbonato (ver Clasificacion) y buscar siempre el precipitante.',
      laboratorio: 'Glucosa, gasometria venosa, sodio, potasio, cloro, bicarbonato, anion gap corregido por albumina, beta-hidroxibutirato, funcion renal, fosfato, magnesio, hemograma, y las pruebas dirigidas al precipitante (cultivos, troponina, electrocardiograma). Repetir glucemia cada hora y electrolitos, anion gap y gasometria cada 2 a 4 h.',
      imagen: 'Radiografia de torax para buscar el precipitante; tomografia craneal solo ante focalidad, crisis o deterioro del sensorio durante el tratamiento; imagen abdominal si el dolor persiste tras corregir la acidosis.',
      complementarios: 'Electrocardiograma al ingreso y ante cambios del potasio. Profilaxis de tromboembolia con heparina de bajo peso molecular salvo contraindicacion. Sonda vesical solo si hay anuria o alteracion del sensorio, y sonda nasogastrica si hay vomitos con bajo nivel de conciencia.',
      dx_diferencial: 'Cetoacidosis alcoholica (glucemia normal o baja, antecedente de consumo y ayuno), cetosis de ayuno (bicarbonato rara vez por debajo de 18), acidosis lactica, intoxicacion por salicilatos, metanol o etilenglicol, acidosis uremica, y estado hiperosmolar puro. En el paciente con inhibidor de SGLT2, la cetoacidosis euglucemica (ver esa ficha).',
      tx_medico: `Cuatro medidas en paralelo desde la primera hora: reposicion de volumen, potasio, insulina intravenosa y tratamiento del precipitante. El bicarbonato queda reservado a la acidosis extrema y el fosfato a situaciones concretas.${figBlock('Figura 3', 'Protocolo de tratamiento de la crisis hiperglucemica', protocoloHtml)}`,
      tx_farmacologico: 'Insulina regular intravenosa: bolo de 0.1 U/kg y despues 0.1 U/kg/h, o bien 0.14 U/kg/h sin bolo (equivalentes). Objetivo de descenso de 50 a 75 mg/dL/h; si no baja al menos un 10% en la primera hora, dar un bolo de 0.14 U/kg. Con glucosa de 200 a 250 mg/dL, anadir dextrosa al 5 o al 10% y reducir la infusion a 0.02 a 0.05 U/kg/h, manteniendo la glucosa en 150 a 200 hasta cerrar el anion gap. En la CAD leve o moderada sin comorbilidad se puede usar analogo rapido subcutaneo (lispro o aspart) cada 1 a 2 h en planta, evitando cuidados intensivos; no en la CAD grave, el embarazo, el shock ni la alteracion del sensorio.',
      tx_intervencionista: 'No aplica de forma directa; la intervencion puede ser necesaria para el precipitante (drenaje de un foco septico, revascularizacion coronaria, cirugia abdominal) o para la mucormicosis (ver esa ficha).',
      criterios_uci: 'CAD grave (pH menor de 7.10 o bicarbonato menor de 10), alteracion del sensorio, inestabilidad hemodinamica, potasio menor de 3.3 mmol/L al ingreso, comorbilidad grave, embarazo, o necesidad de monitorizacion horaria que la planta no pueda garantizar.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: `Monitorizacion horaria de la glucemia y cada 2 a 4 h de electrolitos, anion gap y gasometria venosa, con balance hidrico estricto. Una vez resuelta la crisis y con el paciente capaz de comer, transicion a insulina subcutanea con solapamiento.${figBlock('Figura 4', 'Resolucion de la crisis y transicion a insulina subcutanea', resolucionHtml)}`,
      seguimiento_ambulatorio: 'Antes del alta: identificar y corregir la causa del episodio, revisar la tecnica y la adherencia a la insulina, y ensenar las reglas de los dias de enfermedad (no suspender nunca la insulina basal, medir glucosa y cetonas, hidratarse, y cuando consultar). Cita precoz con endocrinologia o atencion primaria y valorar monitorizacion continua de glucosa; la CAD recurrente obliga a buscar barreras de acceso, problemas psicosociales o un trastorno de la conducta alimentaria.',
      pronostico: 'Con tratamiento protocolizado la mortalidad es menor del 1% y la resolucion se logra en 12 a 24 h en la mayoria de los casos. El pronostico lo marcan el precipitante (sepsis, infarto), la edad, la comorbilidad y las complicaciones evitables del tratamiento. La recurrencia es frecuente y predice peor evolucion a largo plazo.',
      algoritmo: ['Confirmar la triada: glucosa 200 o mayor (o diabetes conocida), beta-hidroxibutirato 3.0 o mayor, y pH menor de 7.30 o bicarbonato menor de 18 con anion gap alto', 'Medir el potasio ANTES de la insulina: si es menor de 3.3, reponer y no iniciarla; si es mayor de 5.2, no reponer todavia', 'Volumen: 15 a 20 mL/kg de cristaloide balanceado en la primera hora; despues 250 a 500 mL/h eligiendo el suero por el sodio corregido', 'Insulina regular intravenosa a 0.1 U/kg/h (con bolo) o 0.14 U/kg/h (sin bolo); bajar 50 a 75 mg/dL/h; anadir dextrosa con glucosa de 200 a 250 y no suspender la insulina hasta cerrar el anion gap', 'Tratar el precipitante; bicarbonato solo si el pH es menor de 6.9 a 7.0; al resolver y poder comer, pasar a subcutanea solapando 1 a 2 h antes de parar la infusion']
    },
    {
      nombre: 'Estado hiperosmolar hiperglucemico',
      color: '#6b3a5a',
      definicion: 'Hiperglucemia intensa (600 mg/dL o mayor) con hiperosmolalidad efectiva (mayor de 300 mOsm/kg segun el consenso ADA/EASD 2024, mayor de 320 con el criterio clasico) y alteracion del estado mental, en ausencia de cetoacidosis significativa (pH mayor de 7.30, bicarbonato mayor de 18). Es la descompensacion caracteristica del anciano con DM2.',
      fisiopatologia: 'Comparte el tronco de la CAD (deficit de insulina mas hormonas contrarreguladoras) pero, como queda insulina residual suficiente para frenar la lipolisis, la via de las cetonas permanece cerrada (ver la Figura 1 de Definicion). Sin la alarma de la acidosis, el cuadro progresa durante dias: la diuresis osmotica mantenida vacia el agua corporal hasta un deficit de 100 a 200 mL/kg y eleva la osmolalidad, que es lo que deprime el sensorio.',
      epidemiologia: 'Bastante menos frecuente que la CAD (menos del 1% de los ingresos relacionados con la diabetes), pero con una mortalidad muy superior, del 5 al 20%, sobre todo por la edad, la comorbilidad y el precipitante. Puede ser la forma de debut de una DM2 no conocida.',
      factores_riesgo: ['Edad avanzada y DM2 de larga evolucion', 'Acceso limitado al agua: dependencia funcional, demencia, institucionalizacion, encamamiento', 'Infeccion aguda, la causa mas frecuente', 'Infarto de miocardio, ictus, embolia pulmonar y otros eventos agudos', 'Farmacos: glucocorticoides, diureticos, antipsicoticos de segunda generacion, nutricion parenteral', 'Enfermedad renal cronica e insuficiencia cardiaca', 'Diabetes no diagnosticada o mal controlada'],
      clinica: 'Deterioro progresivo durante dias o semanas con poliuria, polidipsia, astenia y perdida de peso, hasta la deshidratacion profunda con hipotension, taquicardia y oliguria. Domina la <strong>alteracion del sensorio proporcional a la osmolalidad</strong>, desde la confusion al coma; el coma es raro por debajo de 320 a 330 mOsm/kg y su presencia con osmolalidad menor obliga a buscar otra causa. Puede haber focalidad neurologica o convulsiones focales que revierten al corregir la osmolalidad. No hay Kussmaul ni aliento cetosico.',
      criterios_dx: 'Glucosa de 600 mg/dL o mayor, osmolalidad efectiva elevada (mayor de 300 mOsm/kg en el consenso de 2024; mayor de 320 en el criterio clasico), pH mayor de 7.30 con bicarbonato mayor de 18 y cetonas ausentes o minimas, y alteracion del estado mental. Calcular siempre la osmolalidad efectiva (calculadora disponible) y el sodio corregido, y buscar el precipitante.',
      laboratorio: 'Glucosa, sodio (medido y corregido), potasio, cloro, bicarbonato, urea y creatinina, osmolalidad efectiva calculada, beta-hidroxibutirato (para descartar una forma mixta), gasometria venosa, hemograma, creatina-cinasa (rabdomiolisis) y estudio del precipitante. Repetir electrolitos y osmolalidad cada 2 a 4 h.',
      imagen: 'Radiografia de torax y estudio dirigido del precipitante. Tomografia craneal si hay focalidad, crisis convulsivas o el sensorio no mejora pese a normalizar la osmolalidad, para descartar ictus, hemorragia o edema cerebral.',
      complementarios: 'Electrocardiograma (infarto silente y efectos del potasio); profilaxis antitrombotica con heparina de bajo peso molecular; valoracion funcional y social del anciano, porque el acceso al agua y la supervision son parte del tratamiento y de la prevencion de recurrencias.',
      dx_diferencial: 'CAD y formas mixtas (medir cetonas siempre), otras causas de alteracion del sensorio en el anciano (ictus, hematoma subdural, infeccion del sistema nervioso central, farmacos, hiponatremia, uremia, encefalopatia hepatica) y la diabetes insipida con deshidratacion hipernatremica.',
      tx_medico: `El pilar es la <strong>reposicion de volumen</strong>, mas intensa y mas prolongada que en la CAD, con correccion lenta de la osmolalidad. La insulina se inicia despues de la reposicion inicial y a dosis menor. El resto del esquema (potasio, precipitante, monitorizacion) es el de la Figura 3.${figBlock('Figura 5', 'Lo que cambia en el estado hiperosmolar', ehhHtml)}`,
      tx_farmacologico: 'Tras la carga inicial de volumen y con potasio de 3.3 mmol/L o mayor, insulina regular intravenosa a 0.05 a 0.1 U/kg/h, con objetivo de glucosa de 250 a 300 mg/dL hasta que se normalicen la osmolalidad y el estado mental; anadir dextrosa al alcanzar ese rango. Reponer potasio para mantenerlo entre 4 y 5 mmol/L. Heparina de bajo peso molecular profilactica. Antibiotico empirico precoz si se sospecha infeccion.',
      tx_intervencionista: 'No aplica de forma directa; puede requerirla el precipitante (drenaje de un foco, revascularizacion). El tratamiento renal sustitutivo se reserva a la lesion renal aguda con indicacion propia.',
      criterios_uci: 'Practicamente todos los EHH: alteracion del sensorio, deshidratacion grave con inestabilidad, osmolalidad muy elevada que exige correccion controlada, edad avanzada y comorbilidad. Tambien la coexistencia de sepsis, infarto o rabdomiolisis con lesion renal.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Glucemia horaria; sodio, potasio, funcion renal y osmolalidad cada 2 a 4 h, comprobando que la osmolalidad no baja mas de 3 mOsm/kg/h ni el sodio mas de 10 mmol/L en 24 h. Balance hidrico y valoracion neurologica seriada. Transicion a insulina subcutanea con solapamiento cuando el sensorio y la osmolalidad se hayan normalizado y el paciente coma.',
      seguimiento_ambulatorio: 'Muchos pacientes quedan con requerimientos de insulina bajos o pueden volver a farmacos orales tras semanas de recuperacion de la celula beta. Plan de hidratacion y de supervision (cuidador, residencia), revision de los farmacos que precipitaron el cuadro, educacion sobre los dias de enfermedad y seguimiento estrecho, porque la recurrencia y la mortalidad al ano son altas.',
      pronostico: 'Mortalidad del 5 al 20%, muy superior a la de la CAD, determinada sobre todo por la edad, la comorbilidad y el precipitante mas que por la hiperglucemia en si. La recuperacion del sensorio puede tardar dias tras normalizar la osmolalidad; si no llega, hay que reevaluar el sistema nervioso central.',
      algoritmo: ['Confirmar: glucosa 600 o mayor, osmolalidad efectiva alta, pH mayor de 7.30 con bicarbonato mayor de 18, y alteracion del sensorio; medir cetonas para descartar forma mixta', 'Reponer volumen de forma agresiva al principio (15 a 20 mL/kg en la primera hora) y luego segun el sodio corregido, con deficit de 100 a 200 mL/kg', 'Corregir despacio: osmolalidad no mas de 3 mOsm/kg/h y sodio no mas de 10 mmol/L en 24 h', 'Insulina despues del volumen, a 0.05 a 0.1 U/kg/h, con potasio de 3.3 o mayor y objetivo de glucosa 250 a 300 mg/dL', 'Buscar y tratar el precipitante, profilaxis antitrombotica, y plan de hidratacion y supervision al alta']
    },
    {
      nombre: 'Cetoacidosis euglucemica',
      color: '#8a6a1f',
      definicion: 'Cetoacidosis con todos los criterios de la CAD salvo la hiperglucemia: la glucosa es menor de 200 a 250 mg/dL o incluso normal. Su reconocimiento es el motivo principal por el que el consenso ADA/EASD de 2024 bajo el umbral de glucosa de la CAD, y su causa mas relevante hoy son los inhibidores de SGLT2.',
      fisiopatologia: 'Sobre el mecanismo de la CAD (ver esa ficha), algo mantiene la glucemia baja mientras la cetogenesis sigue abierta. Con los inhibidores de SGLT2, la glucosuria continua baja la glucemia, y esa caida reduce la insulina y aumenta el glucagon, con lo que la lipolisis y la cetogenesis se mantienen; ademas el farmaco eleva el glucagon de forma directa y reduce el aclaramiento renal de los cuerpos cetonicos. En el embarazo, el ayuno prolongado y la hepatopatia el mecanismo es la baja disponibilidad de glucosa con reservas de glucogeno agotadas.',
      epidemiologia: 'Poco frecuente en terminos absolutos pero en aumento con el uso extendido de los inhibidores de SGLT2, y con un retraso diagnostico caracteristico porque la glucemia normal desvia la atencion. Se concentra en el periodo perioperatorio, la enfermedad aguda y el ayuno.',
      factores_riesgo: ['Tratamiento con un inhibidor de SGLT2, sobre todo si se combina con ayuno, cirugia o enfermedad aguda', 'Ayuno prolongado, dieta muy baja en carbohidratos o dieta cetogenica', 'Embarazo, en especial el tercer trimestre', 'Diabetes tipo 1 con dosis reducida de insulina pero no suspendida', 'Consumo de alcohol y hepatopatia con reservas de glucogeno bajas', 'Pancreatitis, sepsis y cirugia mayor', 'Vomitos persistentes con incapacidad para ingerir carbohidratos'],
      clinica: 'Nauseas, vomitos, malestar general, dolor abdominal, taquipnea y astenia, con una glucemia capilar normal o solo levemente alta. Es un cuadro inespecifico que se atribuye con facilidad a una gastroenteritis o al postoperatorio; la clave es sospecharlo y pedir cetonas y gasometria.',
      criterios_dx: 'Acidosis metabolica con anion gap elevado mas cetonemia franca (beta-hidroxibutirato de 3.0 mmol/L o mayor) con glucosa menor de 200 a 250 mg/dL, tras descartar otras causas de acidosis con anion gap alto. En todo paciente que tome un inhibidor de SGLT2 y consulte por malestar, nauseas o taquipnea hay que medir cetonas aunque la glucemia sea normal.',
      laboratorio: 'Beta-hidroxibutirato en sangre (la tira de cetonuria puede subestimarla), gasometria venosa, anion gap corregido, electrolitos, funcion renal, lactato (para el diferencial) y estudio del precipitante. La cetonemia puede persistir varios dias por la duracion del bloqueo del SGLT2.',
      imagen: 'No especifica; la orientada al precipitante o al diagnostico diferencial del dolor abdominal.',
      complementarios: 'Revision de la medicacion para identificar el inhibidor de SGLT2 y retirarlo; en la gestante, monitorizacion fetal simultanea, porque la cetoacidosis en el embarazo tiene una mortalidad fetal elevada.',
      dx_diferencial: 'Cetoacidosis alcoholica y de ayuno (cetonemia mas leve, contexto claro), acidosis lactica (incluida la asociada a metformina), intoxicacion por salicilatos, metanol o etilenglicol, acidosis uremica y acidosis hipercloremica. Un anion gap alto con glucosa normal en un paciente diabetico obliga a medir cetonas antes de pensar en otra cosa.',
      tx_medico: 'El mismo esquema de la CAD (ver esa ficha y la Figura 3) con una diferencia esencial: como la glucemia ya es baja, la <strong>dextrosa se administra desde el inicio</strong>, junto con la insulina, para poder mantener la insulina intravenosa el tiempo necesario hasta cerrar el anion gap sin provocar hipoglucemia. Suspender el inhibidor de SGLT2.',
      tx_farmacologico: 'Suero glucosado al 5 o al 10% desde el principio mas insulina regular intravenosa a 0.05 a 0.1 U/kg/h, ajustando la dextrosa (no la insulina) para mantener la glucemia entre 150 y 200 mg/dL hasta que se normalicen el anion gap y el beta-hidroxibutirato. Reponer potasio con las mismas reglas. No reintroducir el inhibidor de SGLT2 hasta la recuperacion completa y con una indicacion revisada.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Los mismos de la CAD: acidosis grave, inestabilidad, alteracion del sensorio o embarazo. La necesidad de perfusion simultanea de dextrosa e insulina con controles horarios suele justificar cuidados intermedios.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar que la cetosis no reaparezca al retirar la insulina, porque el efecto del inhibidor de SGLT2 persiste dias; mantener controles de beta-hidroxibutirato y anion gap durante al menos 24 h tras la resolucion antes de dar el alta.',
      seguimiento_ambulatorio: 'Educar sobre el riesgo: no suspender la insulina basal, no hacer ayunos prolongados ni dietas cetogenicas con un inhibidor de SGLT2, y consultar ante nauseas o malestar. <strong>Suspender el inhibidor de SGLT2 de 3 a 4 dias antes de una cirugia mayor</strong> o ante una enfermedad aguda con ayuno, y no reiniciarlo hasta que el paciente coma con normalidad y este estable.',
      pronostico: 'Bueno si se reconoce a tiempo; el riesgo esta en el retraso diagnostico por una glucemia tranquilizadora. La recurrencia se previene retirando el farmaco y educando sobre el ayuno y los dias de enfermedad.',
      algoritmo: ['Paciente con inhibidor de SGLT2, embarazo o ayuno prolongado que consulta por nauseas, malestar o taquipnea: medir cetonas y gasometria aunque la glucemia sea normal', 'Confirmar: anion gap elevado mas beta-hidroxibutirato 3.0 o mayor con glucosa menor de 200 a 250 mg/dL', 'Suspender el inhibidor de SGLT2 e iniciar dextrosa desde el principio junto con la insulina intravenosa', 'Ajustar la dextrosa (no la insulina) para glucemia de 150 a 200 hasta cerrar el anion gap y normalizar el beta-hidroxibutirato', 'Vigilar la recurrencia durante al menos 24 h; educar y suspender el farmaco 3 a 4 dias antes de una cirugia mayor']
    },
    {
      nombre: 'Edema cerebral',
      color: '#8c3a34',
      definicion: 'Complicacion del tratamiento de la crisis hiperglucemica (ver las fichas de CAD y de EHH): aumento del agua cerebral con hipertension intracraneal que aparece tipicamente entre 4 y 12 horas despues de iniciar la reposicion. Es rara en el adulto pero es la principal causa de muerte por CAD en ninos y adolescentes, con una mortalidad del 20 al 40% y secuelas neurologicas frecuentes en los supervivientes.',
      fisiopatologia: 'La celula cerebral genera osmoles idiogenicos para adaptarse a la hiperosmolalidad; si la osmolalidad plasmatica baja mas rapido de lo que esos osmoles se eliminan, entra agua en la celula. Contribuyen la hipoperfusion e isquemia cerebral previas con lesion de la barrera hematoencefalica y la reperfusion posterior. No re-explica el mecanismo de la crisis, ya descrito en su ficha; lo especifico aqui es la <strong>velocidad</strong> con la que se corrige.',
      epidemiologia: 'Del 0.3 al 1% de los episodios de CAD en ninos, y bastante menos en adultos, en los que aparece sobre todo en jovenes y en el debut. Es la complicacion mas temida del tratamiento pese a su baja frecuencia.',
      factores_riesgo: ['Edad joven y debut de la diabetes', 'Descenso rapido de la osmolalidad o de la glucemia', 'Volumen elevado de fluidos en las primeras 4 horas', 'Sodio corregido que no sube (o que baja) durante el tratamiento', 'Uso de bicarbonato', 'pCO2 baja y urea elevada al ingreso', 'Acidosis grave al ingreso'],
      clinica: 'Cefalea que aumenta, deterioro del nivel de conciencia o agitacion, vomitos recurrentes, incontinencia, alteraciones pupilares, paralisis de pares craneales, papiledema y, de forma tardia, la triada de Cushing (bradicardia, hipertension y respiracion irregular). Cualquier deterioro neurologico tras varias horas de mejoria analitica debe hacerlo sospechar.',
      criterios_dx: 'Diagnostico clinico y urgente: no se espera a la imagen. Se sospecha ante deterioro neurologico durante el tratamiento y se trata de inmediato; la tomografia craneal se realiza <strong>despues</strong> de iniciar el tratamiento, y sirve sobre todo para descartar trombosis, hemorragia o infarto.',
      laboratorio: 'Sodio, glucosa y osmolalidad seriados para documentar la velocidad de correccion; una caida rapida de la osmolalidad o un sodio corregido que no asciende apoyan el diagnostico.',
      imagen: 'Tomografia craneal tras iniciar el tratamiento: puede ser normal en fases precoces, por lo que un estudio normal no descarta el cuadro. Descarta las alternativas (trombosis de senos venosos, hemorragia, infarto).',
      complementarios: 'Valoracion por cuidados intensivos y neurologia; monitorizacion neurologica estrecha durante toda la fase de correccion en los pacientes de riesgo.',
      dx_diferencial: 'Hipoglucemia, ictus isquemico o hemorragico, trombosis de senos venosos (favorecida por la deshidratacion), infeccion del sistema nervioso central, hiponatremia por correccion inadecuada, y encefalopatia del propio estado hiperosmolar aun no corregido.',
      tx_medico: 'Elevar la cabecera a 30 grados, reducir la velocidad de infusion de fluidos, asegurar la via aerea y evitar la hiperventilacion agresiva. Tratar de inmediato con agente osmotico sin esperar a la imagen.',
      tx_farmacologico: 'Manitol al 20% a 0.5 a 1 g/kg por via intravenosa en 20 minutos, repetible; como alternativa o si no hay respuesta, suero salino hipertonico al 3% a 5 a 10 mL/kg en 30 minutos. Evitar nuevas cargas rapidas de fluidos hipotonicos.',
      tx_intervencionista: 'Intubacion y ventilacion mecanica si hay deterioro del nivel de conciencia; monitorizacion de la presion intracraneal o craniectomia descompresiva en casos refractarios seleccionados.',
      criterios_uci: 'Siempre: todo edema cerebral sospechado o confirmado se maneja en cuidados intensivos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurologica horaria, control estricto de la velocidad de correccion de la osmolalidad y del sodio, y revision del protocolo de fluidos empleado para corregir el error que lo favorecio.',
      seguimiento_ambulatorio: 'Valoracion neurologica y neuropsicologica de las secuelas, y rehabilitacion si procede.',
      pronostico: 'Grave: mortalidad del 20 al 40% y secuelas neurologicas permanentes en una proporcion importante de los supervivientes. El tratamiento precoz, antes de la herniacion, es lo que cambia el desenlace.',
      algoritmo: ['Deterioro neurologico entre 4 y 12 h de iniciado el tratamiento de una crisis hiperglucemica: sospechar edema cerebral', 'Tratar de inmediato, sin esperar a la imagen: manitol 0.5 a 1 g/kg en 20 min, o salino hipertonico al 3% a 5 a 10 mL/kg en 30 min', 'Elevar la cabecera, reducir la velocidad de fluidos y asegurar la via aerea', 'Tomografia craneal despues, para descartar ictus, hemorragia o trombosis de senos', 'Prevenirlo: corregir la osmolalidad despacio (no mas de 3 mOsm/kg/h), evitar cargas excesivas en las primeras 4 h y no usar bicarbonato salvo pH menor de 6.9 a 7.0']
    },
    {
      nombre: 'Hipopotasemia y trastornos electroliticos del tratamiento',
      color: '#8a6a1f',
      definicion: 'Complicacion del tratamiento de la CAD y del EHH (ver esas fichas): descenso brusco del potasio, y en menor medida del fosfato y el magnesio, al administrar insulina y corregir la acidosis. Es la complicacion metabolica mas frecuente y la que mas muertes evitables causa.',
      fisiopatologia: 'La crisis vacia el potasio corporal (deficit de 3 a 5 mmol/kg) por la diuresis osmotica, los vomitos y el hiperaldosteronismo secundario, pero la acidosis y la falta de insulina lo desplazan al espacio extracelular y lo mantienen aparentemente normal o alto. Al iniciar la insulina y corregir el pH, el potasio vuelve de golpe al interior de la celula y la cifra serica se desploma. Con el fosfato y el magnesio ocurre lo mismo.',
      epidemiologia: 'La hipopotasemia durante el tratamiento es muy frecuente si no se repone de forma anticipada. Hasta dos tercios de los pacientes necesitan aportes importantes de potasio en las primeras 24 h.',
      factores_riesgo: ['Potasio inicial en el limite bajo o ya bajo (menor de 3.3 mmol/L)', 'Insulina iniciada sin comprobar antes el potasio', 'Vomitos prolongados y uso previo de diureticos', 'Correccion rapida de la acidosis y uso de bicarbonato', 'Reposicion de volumen abundante sin aporte de potasio', 'Enfermedad renal cronica (riesgo inverso: hiperpotasemia)', 'Alcoholismo y desnutricion (para el magnesio y el fosfato)'],
      clinica: 'Debilidad muscular progresiva, ileo, calambres, parestesias y, en la hipopotasemia grave, paralisis flacida y debilidad de la musculatura respiratoria. En el electrocardiograma: aplanamiento e inversion de la onda T, onda U prominente, descenso del ST y prolongacion del QT, con riesgo de taquicardia ventricular y torsade de pointes. La hipofosfatemia grave anade debilidad, rabdomiolisis, hemolisis y depresion respiratoria.',
      criterios_dx: 'Potasio serico seriado cada 2 a 4 h durante el tratamiento (mas a menudo si esta en los extremos), junto con el electrocardiograma. Fosfato y magnesio al ingreso y a las 4 a 6 h en los pacientes de riesgo.',
      laboratorio: 'Potasio, magnesio, fosfato y calcio seriados; gasometria para conocer el pH, ya que la interpretacion del potasio depende de el. Creatina-cinasa si hay debilidad marcada o sospecha de rabdomiolisis.',
      imagen: 'No procede.',
      complementarios: 'Monitorizacion electrocardiografica continua en la hipopotasemia grave y en el paciente con reposicion rapida; acceso venoso central si se requieren concentraciones altas de potasio.',
      dx_diferencial: 'Otras causas de debilidad en el paciente critico (hipofosfatemia, hipomagnesemia, hipercalcemia, miopatia del enfermo critico) y otras causas de arritmia en la crisis hiperglucemica (isquemia, acidosis).',
      tx_medico: 'Anticipar en vez de reaccionar: comprobar el potasio antes de la insulina y anadirlo al fluido desde que sea menor de 5.2 mmol/L, con el objetivo de mantenerlo entre 4 y 5. Corregir tambien el magnesio, porque una hipomagnesemia no tratada hace refractaria la reposicion de potasio.',
      tx_farmacologico: 'Potasio menor de 3.3 mmol/L: 10 a 20 mmol/h (hasta 20 a 30 en situacion critica y con monitorizacion) y no iniciar la insulina hasta superar 3.3. Potasio de 3.3 a 5.2: 20 a 30 mmol por litro de fluido. Potasio mayor de 5.2: no reponer y repetir a las 2 h. Fosfato solo si es menor de 1.0 mg/dL o hay disfuncion cardiaca, anemia hemolitica o depresion respiratoria, en forma de fosfato potasico 20 a 30 mmol por litro, vigilando la calcemia. Magnesio si esta bajo o la hipopotasemia es refractaria.',
      tx_intervencionista: 'No aplica; solo el acceso venoso central para concentraciones altas de potasio.',
      criterios_uci: 'Potasio menor de 3.0 mmol/L, arritmia ventricular, debilidad respiratoria, o necesidad de reposicion a mas de 20 mmol/h con monitorizacion continua.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Potasio cada 2 a 4 h hasta la estabilizacion y despues cada 6 a 12 h; electrocardiograma ante cualquier cambio brusco. Al pasar a insulina subcutanea y reiniciar la ingesta, revisar de nuevo el potasio, que suele seguir descendiendo.',
      seguimiento_ambulatorio: 'Control analitico en la primera semana tras el alta si hubo hipopotasemia importante o el paciente toma diureticos, y revision del tratamiento cronico que contribuyo al deficit.',
      pronostico: 'Excelente si se anticipa; la mortalidad asociada procede de las arritmias por hipopotasemia no detectada y de la parada respiratoria, ambas evitables con la reposicion protocolizada.',
      algoritmo: ['Medir el potasio ANTES de la primera dosis de insulina, siempre', 'Menor de 3.3 mmol/L: reponer 10 a 20 mmol/h y no iniciar la insulina hasta superar ese umbral', 'De 3.3 a 5.2: anadir 20 a 30 mmol de potasio por litro de fluido, objetivo de 4 a 5 mmol/L', 'Mayor de 5.2: no reponer y repetir a las 2 h; iniciar insulina y fluidos', 'Repetir cada 2 a 4 h; corregir el magnesio si la hipopotasemia es refractaria y reponer fosfato solo en los supuestos concretos']
    },
    {
      nombre: 'Hipoglucemia, sobrecarga de volumen y acidosis hipercloremica',
      color: '#3d5a73',
      definicion: 'Las tres complicaciones yatrogenicas restantes del tratamiento de la CAD y del EHH (ver esas fichas): la hipoglucemia por mantener la insulina sin aportar dextrosa, la sobrecarga hidrica por reponer volumen mas rapido de lo que el paciente tolera, y la acidosis metabolica hipercloremica por el uso de suero salino 0.9%. Ninguna es grave si se anticipa, pero las tres confunden la evolucion.',
      fisiopatologia: 'Son consecuencias directas del propio protocolo y no de la crisis: la insulina intravenosa sigue actuando cuando la glucosa ya ha caido, el volumen infundido supera la capacidad cardiaca o renal, y el exceso de cloro del salino desplaza bicarbonato y genera una acidosis con anion gap normal. El mecanismo de la crisis esta descrito en las fichas de CAD y de EHH.',
      epidemiologia: 'La acidosis hipercloremica aparece en la mayoria de los pacientes tratados con volumenes altos de salino 0.9%. La hipoglucemia se ha reducido mucho con los protocolos de dosis baja de insulina y el uso oportuno de dextrosa, y la sobrecarga afecta sobre todo a ancianos con cardiopatia o enfermedad renal.',
      factores_riesgo: ['No anadir dextrosa cuando la glucosa baja de 200 a 250 mg/dL', 'No reducir la infusion de insulina al anadir la dextrosa', 'Insuficiencia cardiaca, enfermedad renal cronica y edad avanzada (sobrecarga)', 'Volumenes altos de suero salino 0.9% (acidosis hipercloremica)', 'Enfermedad renal que limita la excrecion del cloro', 'Interrupcion de la insulina sin solapar la subcutanea (rebote de la cetosis)'],
      clinica: 'Hipoglucemia: sudoracion, temblor, confusion; puede pasar inadvertida en el paciente con el sensorio ya alterado, de ahi la glucemia horaria. Sobrecarga: disnea, crepitantes, ingurgitacion yugular, edemas e hipoxemia. Acidosis hipercloremica: asintomatica, pero mantiene el bicarbonato bajo y hace parecer que la CAD no se resuelve.',
      criterios_dx: 'Hipoglucemia: glucemia capilar horaria menor de 70 mg/dL. Sobrecarga: exploracion, balance hidrico y radiografia de torax. Acidosis hipercloremica: bicarbonato bajo con <strong>anion gap ya normal</strong> y cloro elevado; el cociente delta por debajo de 0.4 lo confirma (calculadora disponible).',
      laboratorio: 'Glucemia capilar horaria; sodio, cloro, bicarbonato y anion gap seriados; gasometria venosa. Peptidos natriureticos si hay duda sobre la sobrecarga.',
      imagen: 'Radiografia de torax y ecografia pulmonar a pie de cama para valorar la congestion; ecocardiograma si se sospecha disfuncion ventricular.',
      complementarios: 'Balance hidrico riguroso, peso diario y ajuste de la velocidad de infusion segun la respuesta clinica, no segun una formula fija.',
      dx_diferencial: 'La acidosis hipercloremica hay que distinguirla de la CAD no resuelta (el anion gap las separa) y de una acidosis tubular renal. La sobrecarga hay que distinguirla de la neumonia precipitante y del sindrome de distres respiratorio.',
      tx_medico: 'Prevencion mas que tratamiento: anadir dextrosa al alcanzar el umbral de glucosa y reducir la infusion de insulina a 0.02 a 0.05 U/kg/h; individualizar la velocidad de fluidos en el cardiopata, el anciano y el paciente renal; y preferir cristaloides balanceados al salino 0.9%, que ademas acelera la resolucion de la CAD.',
      tx_farmacologico: 'Hipoglucemia: subir la concentracion de dextrosa (al 10%) antes que suspender la insulina, porque la insulina sigue siendo necesaria para cerrar el anion gap. Sobrecarga: reducir el aporte y valorar un diuretico de asa. Acidosis hipercloremica: no requiere tratamiento, se corrige sola en 24 a 48 h.',
      tx_intervencionista: 'Ventilacion no invasiva en el edema pulmonar por sobrecarga que no responde; tratamiento renal sustitutivo solo si hay indicacion propia.',
      criterios_uci: 'Edema pulmonar con insuficiencia respiratoria, o hipoglucemia grave y recurrente que impide mantener la insulina necesaria.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Glucemia horaria mientras dure la insulina intravenosa; anion gap y no solo bicarbonato para decidir la resolucion; auscultacion y balance en cada turno. Solapar siempre la insulina subcutanea 1 a 2 h antes de retirar la infusion para evitar el rebote de la cetosis.',
      seguimiento_ambulatorio: 'No requiere seguimiento especifico; sirve para revisar el protocolo del servicio y corregir las desviaciones que las provocaron.',
      pronostico: 'Bueno. La acidosis hipercloremica se resuelve sola, la sobrecarga responde al ajuste del aporte y la hipoglucemia se evita con dextrosa oportuna. Su importancia real es que, mal interpretadas, llevan a prolongar la insulina intravenosa o a retirarla antes de tiempo.',
      algoritmo: ['Glucosa de 200 a 250 mg/dL: anadir dextrosa al 5 o al 10% y bajar la insulina a 0.02 a 0.05 U/kg/h, sin suspenderla', 'Si aparece hipoglucemia, subir la dextrosa antes que retirar la insulina', 'Individualizar la velocidad de fluidos en el anciano, el cardiopata y el paciente renal; vigilar auscultacion, balance y peso', 'Bicarbonato bajo con anion gap normal y cloro alto: es acidosis hipercloremica, no CAD persistente; no requiere tratamiento', 'Preferir cristaloides balanceados al salino 0.9% y solapar la insulina subcutanea 1 a 2 h antes de parar la infusion']
    },
    {
      nombre: 'Complicaciones tromboticas e infecciosas',
      color: '#6b4a2e',
      definicion: 'Complicaciones de la crisis hiperglucemica en si (ver las fichas de CAD y de EHH), no de su tratamiento: el estado protrombotico de la hiperosmolalidad y la deshidratacion, y las infecciones favorecidas por la hiperglucemia y la acidosis, entre las que destaca por su gravedad la mucormicosis rinocerebral.',
      fisiopatologia: 'La deshidratacion, la hiperviscosidad, la activacion plaquetaria y el estado inflamatorio elevan el riesgo trombotico, sobre todo en el EHH. Para la mucormicosis, la acidosis reduce la union del hierro a la transferrina y libera hierro libre, que junto con la hiperglucemia y la disfuncion de los fagocitos permite el crecimiento de hongos del orden Mucorales, que invaden los vasos y producen trombosis y necrosis tisular.',
      epidemiologia: 'El riesgo trombotico es especialmente alto en el EHH. La mucormicosis es rara pero su asociacion con la CAD es clasica: la cetoacidosis es el principal factor predisponente de la forma rinocerebral, que tiene una mortalidad muy elevada incluso con tratamiento.',
      factores_riesgo: ['Estado hiperosmolar con deshidratacion profunda (trombosis)', 'Inmovilizacion, cateteres venosos centrales y edad avanzada', 'Antecedente de tromboembolia y neoplasia activa', 'Cetoacidosis con acidosis marcada (mucormicosis)', 'Hiperglucemia mantenida y mal control cronico', 'Inmunosupresion, corticoides, neutropenia y trasplante', 'Sobrecarga de hierro y tratamiento con deferoxamina'],
      clinica: 'Trombosis: trombosis venosa profunda, embolia pulmonar, trombosis de senos venosos cerebrales (a sospechar ante focalidad o cefalea intensa) e ictus arterial. Mucormicosis rinocerebral: dolor facial o sinusal desproporcionado, congestion y secrecion nasal oscura o sanguinolenta, <strong>escara negra en el cornete o el paladar</strong>, edema periorbitario, proptosis, oftalmoplejia, perdida de vision y afectacion de pares craneales. La progresion es de horas a dias.',
      criterios_dx: 'Trombosis: sospecha clinica mas ecografia Doppler, angio-TC pulmonar o venografia por resonancia segun el territorio. Mucormicosis: exploracion endoscopica nasal urgente con biopsia de las lesiones y estudio histologico (hifas anchas, no septadas, con ramificacion en angulo recto) y cultivo; la imagen (TC o resonancia de senos y orbitas) delimita la extension pero no sustituye a la biopsia.',
      laboratorio: 'Hemograma, coagulacion y dimero D (poco util por su baja especificidad en este contexto); hemocultivos y estudio microbiologico dirigido. En la mucormicosis, histologia y cultivo del tejido; los marcadores fungicos habituales (galactomanano, beta-D-glucano) son <strong>negativos</strong> y no la descartan.',
      imagen: 'Ecografia Doppler venosa, angio-TC pulmonar o venografia por resonancia para la trombosis. Tomografia o resonancia de senos paranasales, orbitas y encefalo para la mucormicosis, buscando engrosamiento mucoso, erosion osea, afectacion orbitaria o intracraneal y el signo del cornete negro.',
      complementarios: 'Valoracion urgente por otorrinolaringologia, oftalmologia, enfermedad infecciosa y cirugia ante la sospecha de mucormicosis; consulta de hematologia si la trombosis es de localizacion atipica o recurrente.',
      dx_diferencial: 'Trombosis: otras causas de disnea o dolor toracico en la crisis (acidosis, neumonia, infarto). Mucormicosis: sinusitis bacteriana aguda, aspergilosis invasiva (hifas septadas en angulo agudo, marcadores fungicos positivos), celulitis orbitaria y granulomatosis con poliangeitis.',
      tx_medico: 'Profilaxis de tromboembolia con heparina de bajo peso molecular en todo paciente ingresado por una crisis hiperglucemica, salvo contraindicacion; la anticoagulacion plena solo si hay trombosis confirmada. En la mucormicosis, correccion agresiva de la acidosis y de la hiperglucemia y retirada de la inmunosupresion y de la deferoxamina cuando sea posible.',
      tx_farmacologico: 'Trombosis confirmada: anticoagulacion a dosis terapeutica segun la indicacion. Mucormicosis: <strong>anfotericina B liposomal</strong> a dosis alta por via intravenosa de forma inmediata ante la sospecha, sin esperar a la confirmacion; isavuconazol o posaconazol como alternativa o como tratamiento de continuacion.',
      tx_intervencionista: 'La mucormicosis exige <strong>desbridamiento quirurgico urgente y repetido</strong> del tejido necrotico: el antifungico solo no basta, porque la trombosis vascular impide que llegue al tejido invadido. Puede requerir exenteracion orbitaria en casos extensos.',
      criterios_uci: 'Embolia pulmonar de alto riesgo, trombosis de senos venosos con hipertension intracraneal, o mucormicosis con afectacion orbitaria o intracraneal y sepsis.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Mantener la profilaxis antitrombotica durante todo el ingreso y reevaluar la movilidad. En la mucormicosis, controles quirurgicos y de imagen seriados, antifungico prolongado y control estricto de la glucemia.',
      seguimiento_ambulatorio: 'Duracion de la anticoagulacion segun la causa y el territorio. En la mucormicosis, tratamiento antifungico prolongado (meses), cirugia reconstructiva diferida y vigilancia de la recidiva, con optimizacion permanente del control glucemico.',
      pronostico: 'La trombosis prevenida con profilaxis rara vez complica el ingreso. La mucormicosis rinocerebral tiene una mortalidad muy alta que depende de la precocidad del desbridamiento y del antifungico y de la correccion de la acidosis y de la hiperglucemia; el retraso de horas cambia el desenlace.',
      algoritmo: ['Profilaxis con heparina de bajo peso molecular en toda crisis hiperglucemica ingresada, salvo contraindicacion', 'Sospechar trombosis ante disnea, dolor toracico, asimetria de miembros, cefalea intensa o focalidad; confirmar con la imagen del territorio', 'Ante dolor facial, secrecion nasal oscura, escara negra en cornete o paladar, proptosis u oftalmoplejia en una CAD: sospechar mucormicosis', 'Iniciar anfotericina B liposomal de inmediato y pedir endoscopia con biopsia urgente; los marcadores fungicos negativos no descartan', 'Desbridamiento quirurgico urgente y repetido, correccion de la acidosis y de la hiperglucemia, y antifungico prolongado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Toda crisis hiperglucemica se maneja ingresada, con monitorizacion protocolizada y un plan explicito de transicion. El objetivo no es solo normalizar la analitica: es cerrar el anion gap sin provocar hipopotasemia, hipoglucemia ni edema cerebral, tratar el precipitante, y salir del hospital con el motivo del episodio corregido para que no se repita.',
    parametros: ['Glucemia capilar cada hora mientras dure la insulina intravenosa', 'Electrolitos (con potasio), funcion renal, anion gap y gasometria venosa cada 2 a 4 h hasta la estabilizacion, y despues cada 6 a 12 h', 'Potasio antes de la primera dosis de insulina y con cada control: objetivo de 4 a 5 mmol/L', 'Beta-hidroxibutirato seriado, o en su defecto el anion gap, como marcador de resolucion (no la glucosa aislada)', 'Balance hidrico estricto, peso, auscultacion y valoracion de la congestion en cada turno, sobre todo en el anciano y el cardiopata', 'En el EHH, osmolalidad efectiva y sodio con cada control: descenso maximo de 3 mOsm/kg/h y de 10 mmol/L de sodio en 24 h, con exploracion neurologica seriada', 'Profilaxis de tromboembolia con heparina de bajo peso molecular salvo contraindicacion', 'Busqueda activa y tratamiento del precipitante desde la primera hora (cultivos, electrocardiograma, troponina, radiografia, revision de la medicacion)', 'Transicion a insulina subcutanea solo con la crisis resuelta y el paciente comiendo, solapando la basal 1 a 2 h antes de retirar la infusion', 'Plan de alta escrito: pauta de insulina, glucometro o sensor, reglas de los dias de enfermedad, prescripcion de glucagon si procede y cita precoz'],
    criterios_uci_general: 'CAD grave (pH menor de 7.10 o bicarbonato menor de 10), practicamente todo EHH, alteracion del sensorio, inestabilidad hemodinamica, potasio menor de 3.3 mmol/L al ingreso, edema cerebral sospechado, embarazo, comorbilidad grave, o imposibilidad de garantizar la monitorizacion horaria en planta.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. En la DM1 con cetoacidosis grave recurrente pese a un tratamiento optimo puede plantearse el trasplante de pancreas o de islotes en centros seleccionados (ver el tema de Diabetes Mellitus).',
    prevencion: 'La mayoria de los episodios es evitable. Educacion estructurada en las <strong>reglas de los dias de enfermedad</strong>: no suspender nunca la insulina basal aunque no se coma, medir la glucosa cada 2 a 4 h y las cetonas si supera 250 mg/dL o hay malestar, mantener la hidratacion y los carbohidratos, y saber cuando consultar. Asegurar el acceso a la insulina y a las tiras de cetonas, revisar la tecnica y el dispositivo, y detectar barreras economicas, psicosociales o un trastorno de la conducta alimentaria en el paciente con episodios repetidos. En el tratado con inhibidores de SGLT2, suspenderlo 3 a 4 dias antes de una cirugia mayor y ante enfermedad aguda con ayuno. En el anciano con riesgo de EHH, garantizar el acceso al agua y la supervision, y revisar los farmacos hiperglucemiantes.'
  }
};

export const compCites = {
  'Cetoacidosis diabetica': [0, 1, 3, 4],
  'Estado hiperosmolar hiperglucemico': [17, 0, 18],
  'Cetoacidosis euglucemica': [15, 16, 0],
  'Edema cerebral': [10, 11, 0],
  'Hipopotasemia y trastornos electroliticos del tratamiento': [1, 0],
  'Hipoglucemia, sobrecarga de volumen y acidosis hipercloremica': [5, 6, 0],
  'Complicaciones tromboticas e infecciosas': [21, 17]
};
export const estigmas = [
  { s: 'Poliuria, polidipsia y perdida de peso previas', p: 'Casi todos', photo: null, desc: 'Consecuencia directa de la diuresis osmotica. Es el prodromo comun a las dos entidades: de horas en la cetoacidosis y de dias o semanas en el estado hiperosmolar. Su ausencia debe hacer dudar del diagnostico.' },
  { s: 'Deshidratacion (mucosas secas, pliegue, ojos hundidos)', p: '90-100%', photo: null, desc: 'Refleja un deficit de agua de unos 100 mL/kg en la cetoacidosis y de 100 a 200 mL/kg en el estado hiperosmolar. La turgencia cutanea es poco fiable en el anciano; se valoran mejor las mucosas, el relleno capilar, la presion arterial y la diuresis.' },
  { s: 'Taquicardia', p: '~90%', photo: null, desc: 'Respuesta a la hipovolemia y al estres adrenergico. Una frecuencia normal o baja en un paciente muy deshidratado sugiere betabloqueo, neuropatia autonomica o hipotermia, y debe alertar.' },
  { s: 'Nauseas y vomitos', p: '50-80% (CAD)', photo: null, desc: 'Muy frecuentes en la cetoacidosis; agravan la deshidratacion y la perdida de potasio, y pueden generar una alcalosis metabolica sobreanadida que enmascara la gravedad de la acidosis (cociente delta mayor de 2).' },
  { s: 'Alteracion del estado mental', p: 'Variable en CAD; casi constante en EHH', photo: null, desc: 'En el estado hiperosmolar es proporcional a la osmolalidad efectiva: el coma es raro por debajo de 320 a 330 mOsm/kg. Un sensorio muy alterado con osmolalidad baja obliga a buscar otra causa neurologica.' },
  { s: 'Dolor abdominal', p: '40-75% (CAD)', photo: null, desc: 'Su intensidad se correlaciona con la gravedad de la acidosis metabolica, no con el grado de deshidratacion ni con la hiperglucemia. Cede al corregir el pH; si persiste despues, hay que buscar una causa estructural (pancreatitis, isquemia mesenterica, colecistitis).' },
  { s: 'Respiracion de Kussmaul', p: '40-60% (CAD)', photo: null, desc: 'Respiracion profunda, regular y rapida, compensadora de la acidosis metabolica. Aparece con pH por debajo de 7.20 aproximadamente. Su desaparicion puede significar mejoria o, al contrario, agotamiento muscular inminente: hay que mirar la gasometria, no solo al paciente.' },
  { s: 'Aliento cetosico (afrutado)', p: '30-50% (CAD)', photo: null, desc: 'Se debe a la acetona espirada. Es especifico de la cetoacidosis pero poco sensible, y una proporcion importante de los examinadores no lo percibe por un rasgo genetico del olfato.' },
  { s: 'Hipotension arterial', p: '20-30%', photo: null, desc: 'Marca deplecion de volumen grave o un precipitante septico. Obliga a expansion agresiva y a buscar el foco; su persistencia pese a la reposicion sugiere sepsis, infarto o hemorragia.' },
  { s: 'Focalidad neurologica o crisis convulsivas', p: '20-25% (EHH)', photo: null, desc: 'Hemiparesia, hemianopsia o crisis focales que simulan un ictus y que suelen revertir al corregir la osmolalidad. Aun asi, obligan a descartar un ictus real con imagen, sobre todo si no mejoran con el tratamiento.' },
  { s: 'Hipotermia', p: '~10%', photo: null, desc: 'La vasodilatacion periferica de la acidosis impide la respuesta febril. Es un signo de mal pronostico y, sobre todo, puede enmascarar una infeccion grave: la ausencia de fiebre nunca descarta el foco septico.' }
];
export const estigmasTitulo = 'Signos y sintomas de las crisis hiperglucemicas, en orden de frecuencia';
export const biopsia = null;
export const escalaRefs = {
  'Criterios diagnosticos de la CAD (ADA/EASD 2024)': [0, 1],
  'Gravedad de la CAD': [0, 1],
  'Criterios diagnosticos del EHH': [0, 17],
  'Anion gap, correccion por albumina y cociente delta': [14],
  'Criterios de resolucion': [0, 1]
};
export const escalaCalc = {
  'Anion gap, correccion por albumina y cociente delta': 'anion-gap-cad',
  'Criterios diagnosticos del EHH': 'osmolalidad-deficit',
  'Criterios de resolucion': 'anion-gap-cad'
};
export const compGroups = [
  { name: 'Las tres presentaciones', items: ['Cetoacidosis diabetica', 'Estado hiperosmolar hiperglucemico', 'Cetoacidosis euglucemica'] },
  { name: 'Complicaciones', items: ['Edema cerebral', 'Hipopotasemia y trastornos electroliticos del tratamiento', 'Hipoglucemia, sobrecarga de volumen y acidosis hipercloremica', 'Complicaciones tromboticas e infecciosas'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las presentaciones de la crisis hiperglucemica: la cetoacidosis diabetica, el estado hiperosmolar hiperglucemico y la cetoacidosis euglucemica, cada una con su tratamiento completo. Las cuatro ultimas son complicaciones: el edema cerebral, la hipopotasemia y los trastornos electroliticos, el trio de complicaciones yatrogenicas (hipoglucemia, sobrecarga de volumen y acidosis hipercloremica), y las complicaciones tromboticas e infecciosas de la propia crisis, incluida la mucormicosis rinocerebral.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Criterios y gravedad' },
  { id: 'complicaciones', label: 'Presentaciones y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'CRISIS HIPERGLUCEMICAS', color: '#9c3d2e', target: 'definicion' },
  branches: [
    { title: 'Las tres presentaciones', sub: 'Segun cuanta insulina queda', color: '#9c3d2e', target: 'complicaciones', leaves: [
      { title: 'Cetoacidosis diabetica', sub: 'Deficit absoluto; acidosis en horas', color: '#9c3d2e', target: 'complicaciones' },
      { title: 'Estado hiperosmolar', sub: 'Insulina residual; deshidratacion en dias', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Cetoacidosis euglucemica', sub: 'Glucosa normal; iSGLT2, embarazo, ayuno', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Los cuatro pilares', sub: 'En paralelo desde la hora 0', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Liquidos', sub: '15-20 mL/kg y luego por el sodio corregido', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Potasio', sub: 'Mirarlo antes de la insulina', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Insulina', sub: '0.1 U/kg/h hasta cerrar el anion gap', color: '#3f6b52', target: 'complicaciones' },
      { title: 'El precipitante', sub: 'Infeccion, isquemia, omision, farmacos', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'Complicaciones', sub: 'Casi todas evitables', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Edema cerebral', sub: 'Por corregir demasiado rapido', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hipopotasemia', sub: 'La mas frecuente y la mas letal', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Complicaciones del tratamiento', sub: 'Hipoglucemia, sobrecarga, hipercloremia', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Trombosis y mucormicosis', sub: 'De la crisis, no del tratamiento', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [0, 4], no_invasivos: [0, 14], imagen: [0, 21] };
export const clasificacionCite = [0, 1, 17];
export const seguimientoCite = [0, 2];
