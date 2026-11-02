// topics/asma/content.js: Asma bronquial en el adulto.
// Cubre el item "Asma" del cluster Enfermedad respiratoria cronica (bloque III, Neumologia) del
// temario. Segundo de los cinco temas troncales de Neumologia.
//
// Fuentes principales: informe GINA 2026; ensayos SYGMA 1 y 2 y Novel START, que sostienen el
// abandono del SABA en monoterapia; guias ERS/ATS de asma grave; ensayos de biologicos (MENSA,
// QUEST, NAVIGATOR); ensayo 3Mg para el sulfato de magnesio; test ACT; documento del ACCP sobre
// asma ocupacional; y la declaracion ERS/TSANZ sobre embarazo y enfermedad de la via aerea.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (asma estable, crisis) + 6 fichas (asma, crisis asmatica, asma
// grave y biologicos, asma ocupacional, enfermedad respiratoria exacerbada por AINE, situaciones
// especiales). 4 calculadoras, 4 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'asma',
  titulo: 'Asma',
  subtitulo: 'Módulo 49 · Medicina Interna',
  accent: '#3f7a4a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const confirmarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f7a4a;border-radius:8px;padding:5px 9px;background:#3f7a4a12;margin-bottom:6px;">
    <strong style="color:#3f7a4a;">El asma se diagnostica documentando que la obstrucción VARIA.</strong> <span style="color:var(--ink-dim);">No basta con una espirometría obstructiva ni con una historia compatible: hace falta al menos una prueba objetiva de variabilidad, y conviene obtenerla <strong>antes</strong> de empezar el tratamiento, porque después cuesta mucho más.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f7a4a22;border:1px solid #3f7a4a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f7a4a;">1. Prueba<br>BRONCODILATADORA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Ascenso del <strong style="color:var(--ink);">FEV1 mayor del 12% Y de más de 200 mL</strong> a los 10 a 15 minutos de 200 a 400 microgramos de salbutamol. Es la via más rápida y la primera que se intenta. Un resultado negativo <strong>no descarta</strong> el asma: se repite en un dia sintomático o sin broncodilatador previo.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b7a22;border:1px solid #2e6b7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b7a;">2. VARIABILIDAD<br>del flujo pico</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Dos medidas diarias durante <strong>2 semanas</strong>. Variabilidad diaria media <strong style="color:var(--ink);">mayor del 10%</strong> en el adulto. Es barata, se hace en casa y además enseña al paciente a reconocer su propio patrón. Requiere técnica correcta y constancia.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">3. RESPUESTA al<br>tratamiento</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mejoría del <strong style="color:var(--ink);">FEV1 mayor del 12% y de más de 200 mL</strong> tras 4 semanas de corticoide inhalado. Sirve cuando el paciente llega ya tratado o muy sintomático y no se puede esperar a documentar nada más.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">4. Prueba de<br>EJERCICIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Caída del <strong style="color:var(--ink);">FEV1 mayor del 10% y de más de 200 mL</strong> tras ejercicio estandarizado. Útil en el paciente joven cuyo único síntoma aparece al correr, y en el deportista en quien hay que separar asma de simple falta de forma.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">5. Provocación<br>BRONQUIAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Caída del <strong style="color:var(--ink);">FEV1 del 20% o más</strong> con metacolina, o del 15% con manitol o suero salino hipertónico. Se reserva a la duda diagnóstica con espirometría normal. Es muy <strong>sensible y poco específica</strong>: un resultado negativo prácticamente descarta el asma, uno positivo no la confirma por si solo.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La fracción exhalada de óxido nítrico no diagnóstica asma.</strong> Un valor alto indica inflamación tipo 2 y predice respuesta al corticoide inhalado, pero sube también en la rinitis alérgica y en la bronquitis eosinofílica, y baja con el tabaco, con la broncoconstricción y con el propio corticoide. Es un biomarcador de fenotipo y de adherencia, <strong>no un criterio diagnóstico</strong>.
  </div>
</div>`;

const tracksHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El SABA en monoterapia ya no es tratamiento del asma para NADIE.</strong> <span style="color:var(--ink-dim);">Ni siquiera en el asma leve. Alivia el síntoma sin tocar la inflamación, enmascara el deterioro y su uso frecuente se asocia a exacerbaciones graves y a muerte por asma. Todo paciente con asma debe recibir <strong>corticoide inhalado</strong>, aunque sea solo cuando tiene síntomas.</span>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #3f7a4a;border-radius:8px;padding:6px 8px;background:#3f7a4a08;">
      <div style="font-weight:700;color:#3f7a4a;text-align:center;margin-bottom:4px;">VIA 1 (preferida)<br><span style="font-weight:400;color:var(--ink-dim);">rescate con corticoide inhalado y formoterol</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Pasos 1 y 2</strong>: dosis baja de corticoide inhalado con formoterol <strong>solo a demanda</strong>.<br>
        <strong style="color:var(--ink);">Paso 3</strong>: dosis baja de mantenimiento más rescate con el mismo inhalador.<br>
        <strong style="color:var(--ink);">Paso 4</strong>: dosis media de mantenimiento más rescate.<br>
        <strong style="color:var(--ink);">Paso 5</strong>: añadir LAMA, estudiar el fenotipo y valorar biológico.
      </div>
      <div style="margin-top:4px;padding:4px 6px;border:1px solid #3f7a4a;border-radius:6px;background:#3f7a4a12;color:var(--ink-dim);">Ventaja: el paciente recibe antiinflamatorio <strong>cada vez que se alivia</strong>. Reduce las exacerbaciones graves frente al SABA a demanda y frente al corticoide de mantenimiento con rescate de SABA.</div>
    </div>
    <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#2e6b7a;text-align:center;margin-bottom:4px;">VIA 2 (alternativa)<br><span style="font-weight:400;color:var(--ink-dim);">rescate con broncodilatador de acción corta</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Paso 1</strong>: corticoide inhalado <strong>siempre que</strong> se use el rescate.<br>
        <strong style="color:var(--ink);">Paso 2</strong>: dosis baja de corticoide inhalado a diario.<br>
        <strong style="color:var(--ink);">Paso 3</strong>: dosis baja de corticoide inhalado con LABA.<br>
        <strong style="color:var(--ink);">Paso 4</strong>: dosis media o alta de corticoide inhalado con LABA.<br>
        <strong style="color:var(--ink);">Paso 5</strong>: añadir LAMA y valorar biológico.
      </div>
      <div style="margin-top:4px;padding:4px 6px;border:1px solid var(--line);border-radius:6px;color:var(--ink-dim);">Se elige cuando el formoterol no esta disponible, no se tolera, o el paciente ya esta bien controlado y adherente con este esquema. Exige <strong>adherencia diaria</strong> para funcionar.</div>
    </div>
  </div>

  <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;background:#3f6b5210;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Antes de subir de paso, revisar cuatro cosas.</strong> Que el diagnóstico sea correcto, la <strong>técnica del inhalador</strong> (mal hecha en la mayoría de los pacientes), la <strong>adherencia</strong> real y los factores modificables: tabaco, alérgenos, exposición laboral, obesidad, rinosinusitis, reflujo y fármacos como los betabloqueantes o los antiinflamatorios.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Bajar de paso también forma parte del plan.</strong> Tras <strong>3 meses</strong> de buen control se reduce en torno al 25 al 50% de la dosis, nunca retirando del todo el corticoide inhalado en el adulto. Bajar demasiado deprisa o suspenderlo es una causa clásica de recaída.
    </div>
  </div>
</div>`;

const crisisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">LEVE o<br>MODERADA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Habla con frases, prefiere estar sentado, no agitado. Frecuencia respiratoria menor de 30, frecuencia cardiaca de 100 a 120, <strong>saturación del 90 al 95%</strong> y flujo pico mayor del 50% del mejor valor personal. <strong style="color:var(--ink);">Salbutamol repetido, corticoide oral y reevaluar en 1 hora.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">GRAVE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Habla con palabras sueltas, se inclina hacia delante, agitado. Frecuencia respiratoria mayor de 30, frecuencia cardiaca mayor de 120, <strong>saturación menor del 90%</strong> y flujo pico del 50% o menos. <strong style="color:var(--ink);">Añadir ipratropio, oxígeno controlado y valorar sulfato de magnesio.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RIESGO<br>VITAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Somnolencia, confusión o <strong style="color:#8c3a34;">tórax silente</strong>. <strong style="color:#8c3a34;">Una PaCO2 normal o en ascenso en plena crisis es un signo de alarma</strong>, no de mejoría: significa que el paciente ya no puede mantener la hiperventilación. Aviso a cuidados intensivos e intubación sin demorarla.</div>
    </div>
  </div>

  <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f7a4a;border-radius:8px;padding:5px 8px;background:#3f7a4a10;color:var(--ink-dim);">
      <strong style="color:#3f7a4a;">Lo que se hace.</strong> <strong style="color:var(--ink);">Salbutamol</strong> repetido, en cámara con inhalador presurizado o nebulizado. <strong style="color:var(--ink);">Corticoide sistémico</strong>: prednisona 40 a 50 mg al dia, <strong>5 a 7 días</strong>, en la primera hora. <strong style="color:var(--ink);">Oxígeno controlado</strong> con objetivo de saturación del <strong>93 al 95%</strong>. <strong style="color:var(--ink);">Ipratropio</strong> en la crisis grave. <strong style="color:var(--ink);">Sulfato de magnesio</strong> 2 g intravenosos en 20 minutos si no responde.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que NO se hace.</strong> Antibiótico de rutina (la mayoría de las crisis son virales o alérgicas). Sedantes, que enmascaran el agotamiento. Aminofilina, con más toxicidad que beneficio. Y sobre todo: <strong>dar el alta con solo un broncodilatador</strong> y sin corticoide inhalado, que es el error que más muertes evitables ha producido en este tema.
    </div>
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Antes del alta, siempre.</strong> Iniciar o subir el tratamiento de fondo con corticoide inhalado, completar el corticoide oral, entregar un <strong>plan de acción escrito</strong>, revisar la técnica del inhalador con el dispositivo real, identificar el desencadenante y citar en <strong>2 a 7 días</strong>. Una crisis siempre significa que el tratamiento de fondo era insuficiente o no se estaba tomando.
  </div>
</div>`;

const biologicosHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #5b4a86;border-radius:8px;padding:5px 9px;background:#5b4a8612;margin-bottom:6px;">
    <strong style="color:#5b4a86;">Antes de llamar grave a un asma, descartar que sea un asma mal tratada.</strong> <span style="color:var(--ink-dim);">Solo una minoría de los pacientes "no controlados con dosis altas" tienen asma realmente refractaria. Lo primero es confirmar el diagnóstico, comprobar <strong>adherencia y técnica</strong>, y tratar comorbilidades: rinosinusitis con poliposis, reflujo, obesidad, apnea del sueño, disfunción de cuerdas vocales, ansiedad y tabaquismo.</span>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Biomarcadores de inflamación tipo 2</strong> (se miden con el paciente SIN corticoide sistémico, o el resultado sale falsamente bajo): eosinófilos en sangre de <strong>150 por microlitro o más</strong>, óxido nítrico exhalado de <strong>20 partes por mil millones o más</strong>, eosinófilos en esputo del <strong>2% o más</strong>, asma claramente desencadenada por alérgenos, o necesidad de corticoide oral de mantenimiento.
  </div>

  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f7a4a22;border:1px solid #3f7a4a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f7a4a;">ALÉRGICA con<br>IgE elevada</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Omalizumab</strong> (anti-IgE). Requiere sensibilización demostrada a un aeroalergeno perenne e IgE total en rango de dosificación. Mejora también la urticaria crónica y la poliposis asociadas.</div>
    </div>
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b7a22;border:1px solid #2e6b7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b7a;">EOSINOFÍLICA<br>de inicio tardío</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Mepolizumab</strong> o <strong style="color:var(--ink);">reslizumab</strong> (anti-interleucina 5) y <strong style="color:var(--ink);">benralizumab</strong> (anti-receptor de interleucina 5). Reducen exacerbaciones y permiten retirar el corticoide oral. El beneficio crece con la cifra de eosinófilos y con el número de crisis del año previo.</div>
    </div>
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">TIPO 2 con<br>comorbilidad</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Dupilumab</strong> (anti-receptor de interleucina 4). Es el de elección si coexisten dermatitis atópica, poliposis nasosinusal o esofagitis eosinofílica, y en el paciente dependiente de corticoide oral. Puede producir una <strong>eosinofilia transitoria</strong> que casi siempre es asintomática.</div>
    </div>
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">Sin fenotipo<br>tipo 2 claro</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Tezepelumab</strong> (anti-linfopoyetina estromal timica). Actúa por encima de la cascada y es el único que ha demostrado reducir exacerbaciones también con eosinófilos bajos, lo que lo convierte en la opción cuando los demás biomarcadores no orientan.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Como se evalúa la respuesta.</strong> Se revisa a los <strong>4 meses</strong> y, si hay respuesta parcial, a los 6 a 12. Se miden exacerbaciones, dosis de corticoide oral, control sintomático y función pulmonar. Si no hay respuesta, se cambia a otro biológico antes de darlo por fracasado. El corticoide oral de mantenimiento se retira <strong>después</strong> de que el biológico funcione, y de forma lenta, vigilando la insuficiencia suprarrenal.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El asma es una enfermedad heterogénea, casi siempre con inflamación crónica de la via aérea, definida por una historia de <strong>síntomas respiratorios que varian</strong> en el tiempo y en intensidad (sibilancias, disnea, opresión torácica y tos) junto con una <strong>limitación variable al flujo aéreo espiratorio</strong>. La palabra clave de las dos mitades de esa definición es la misma: <strong>variable</strong>. Lo que separa al asma de la EPOC no es el síntoma, es que aquí la obstrucción cambia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Diagnosticar es documentar la variabilidad.</strong></p>
<p style="margin:0 0 12px;">Un patrón sintomático compatible no basta, y una espirometría obstructiva tampoco. Hace falta demostrar objetivamente que la obstrucción varia, y conviene hacerlo <strong>antes de iniciar el tratamiento</strong>: una vez que el paciente lleva semanas con corticoide inhalado, la variabilidad se aplana y el diagnóstico queda para siempre en el terreno de la suposicion. Ese es el motivo por el que tanto paciente arrastra durante años una etiqueta de asma que nadie ha confirmado, y por el que otros tantos con asma real están sin diagnosticar.</p>
${figBlock('Figura 1', 'Las cinco formas de documentar la limitación variable al flujo aéreo', confirmarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El cambio que hay que entender: se acabo el salbutamol solo.</strong></p>
<p style="margin:0 0 12px;">Durante décadas se trato el asma leve con un broncodilatador de acción corta a demanda. Hoy sabemos que eso es peligroso: el SABA alivia el síntoma sin tocar la inflamación que lo produce, permite que el paciente tolere un asma cada vez peor sin consultar, y su uso frecuente (más de un envase al mes) se asocia de forma consistente a exacerbaciones graves y a muerte por asma. Los ensayos SYGMA y Novel START demostraron que una dosis baja de <strong>corticoide inhalado con formoterol usada solo cuando hay síntomas</strong> reduce las exacerbaciones graves frente al SABA a demanda. De ahi la regla actual: <strong>todo paciente con asma debe recibir corticoide inhalado</strong>, aunque solo sea cuando se alivia.</p>
${figBlock('Figura 2', 'Las dos vías de tratamiento y los cinco pasos', tracksHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Control y riesgo son dos cosas distintas.</strong></p>
<p style="margin:0 0 12px;">El <strong>control sintomático</strong> mira las últimas 4 semanas y se resume en cuatro preguntas: síntomas diurnos más de dos veces por semana, algún despertar nocturno por asma, uso del rescate más de dos veces por semana y limitación de la actividad. Ninguna afirmativa es control bueno, una o dos es control parcial, tres o cuatro es asma no controlada. El <strong>riesgo futuro</strong> es otra dimension y no se deduce de la anterior: un paciente puede estar poco sintomático y aun así tener alto riesgo de crisis grave por haber sido intubado alguna vez, haber ingresado el último año, no usar corticoide inhalado, tener mala adherencia, gastar más de un envase de SABA al mes, tener un FEV1 bajo o una eosinofilia mantenida.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La crisis.</strong></p>
<p style="margin:0 0 12px;">El tratamiento de la crisis es corto y muy conocido, y aun así se sigue haciendo mal en dos puntos. El primero es la <strong>gasometría</strong>: en una crisis el paciente hiperventila y la PaCO2 debe estar baja, de modo que una PaCO2 normal o en ascenso significa agotamiento y no mejoría. El segundo es el <strong>alta</strong>: dar el alta con solo un broncodilatador, sin corticoide inhalado, sin plan escrito y sin cita, es el error que más muertes evitables ha producido en este tema.</p>
${figBlock('Figura 3', 'Crisis asmática: gravedad, tratamiento y lo que no se hace', crisisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Asma grave: primero descartar que sea asma mal tratada.</strong></p>
<p style="margin:0 0 12px;">Solo entre el 3 y el 10% de los asmaticos tienen asma grave de verdad, es decir, la que sigue sin control pese a dosis altas de corticoide inhalado con LABA bien tomadas, o la que necesita esa dosis para mantenerse controlada. La mayoría de los pacientes etiquetados de graves tienen en realidad mala técnica, mala adherencia, una comorbilidad no tratada o un diagnóstico equivocado. Cuando el asma es realmente grave, el siguiente paso es <strong>caracterizar el fenotipo</strong>, porque de ahi sale la elección del biológico.</p>
${figBlock('Figura 4', 'Asma grave: del fenotipo a la elección del biológico', biologicosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No tratar el asma con un broncodilatador de acción corta en monoterapia, a ninguna edad ni en ningún escalón. No etiquetar de asma sin haber documentado la variabilidad. No usar el óxido nítrico exhalado como criterio diagnóstico. No pautar antibiótico de rutina en la crisis. No sedar al asmatico agotado. No suspender el corticoide inhalado en el embarazo, donde el riesgo de la crisis supera con mucho al del fármaco. Y no subir de escalón sin haber comprobado antes la técnica y la adherencia.</p>`;

export const bibliografia = [
  'Global Initiative for Asthma. Global strategy for asthma management and prevention: 2026 report. GINA; 2025.',
  'Reddel HK, Bacharier LB, Bateman ED, et al. Global Initiative for Asthma strategy 2021: executive summary and rationale for key changes. Eur Respir J. 2022;59(1):2102730.',
  'OByrne PM, FitzGerald JM, Bateman ED, et al. Inhaled combined budesonide-formoterol as needed in mild asthma. N Engl J Med. 2018;378(20):1865-1876.',
  'Bateman ED, Reddel HK, OByrne PM, et al. As-needed budesonide-formoterol versus maintenance budesonide in mild asthma. N Engl J Med. 2018;378(20):1877-1887.',
  'Beasley R, Holliday M, Reddel HK, et al. Controlled trial of budesonide-formoterol as needed for mild asthma. N Engl J Med. 2019;380(21):2020-2030.',
  'Suissa S, Ernst P, Benayoun S, Baltzan M, Cai B. Low-dose inhaled corticosteroids and the prevention of death from asthma. N Engl J Med. 2000;343(5):332-336.',
  'Nathan RA, Sorkness CA, Kosinski M, et al. Development of the Asthma Control Test: a survey for assessing asthma control. J Allergy Clin Immunol. 2004;113(1):59-65.',
  'Chung KF, Wenzel SE, Brozek JL, et al. International ERS/ATS guidelines on definition, evaluation and treatment of severe asthma. Eur Respir J. 2014;43(2):343-373.',
  'Holguin F, Cardet JC, Chung KF, et al. Management of severe asthma: a European Respiratory Society/American Thoracic Society guideline. Eur Respir J. 2020;55(1):1900588.',
  'Ortega HG, Liu MC, Pavord ID, et al. Mepolizumab treatment in patients with severe eosinophilic asthma. N Engl J Med. 2014;371(13):1198-1207.',
  'Castro M, Corren J, Pavord ID, et al. Dupilumab efficacy and safety in moderate-to-severe uncontrolled asthma. N Engl J Med. 2018;378(26):2486-2496.',
  'Menzies-Gow A, Corren J, Bourdin A, et al. Tezepelumab in adults and adolescents with severe, uncontrolled asthma. N Engl J Med. 2021;384(19):1800-1809.',
  'Goodacre S, Cohen J, Bradburn M, et al. Intravenous or nebulised magnesium sulphate versus standard therapy for severe acute asthma: a randomised controlled trial. Lancet Respir Med. 2013;1(4):293-300.',
  'Rowe BH, Spooner CH, Ducharme FM, Bretzlaff JA, Bota GW. Corticosteroids for preventing relapse following acute exacerbations of asthma. Cochrane Database Syst Rev. 2007;(3):CD000195.',
  'Tarlo SM, Balmes J, Balkissoon R, et al. Diagnosis and management of work-related asthma: American College of Chest Physicians consensus statement. Chest. 2008;134(3 Suppl):1S-41S.',
  'Laidlaw TM, Mullol J, Woessner KM, Amin N, Mannent LP. Chronic rhinosinusitis with nasal polyps and asthma. J Allergy Clin Immunol Pract. 2021;9(3):1133-1141.',
  'Middleton PG, Gade EJ, Aguilera C, et al. ERS/TSANZ task force statement on the management of reproduction and pregnancy in women with airways diseases. Eur Respir J. 2020;55(2):1901208.',
  'Wang E, Wechsler ME, Tran TN, et al. Characterization of severe asthma worldwide: data from the International Severe Asthma Registry. Chest. 2020;157(4):790-804.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Asma en situación estable',
      tituloB: 'Crisis asmática',
      compensada: 'Sibilancias, disnea, opresión torácica y tos que VARIAN en el tiempo y en intensidad, típicamente peores de noche o al despertar, y desencadenados por ejercicio, risa, alérgenos, aire frío, infecciones virales, humo o fármacos. Entre episodios la exploración puede ser normal, lo que no descarta nada. Antecedente personal o familiar de atopia, rinitis, dermatitis o poliposis nasal. Un dato de gran valor es la respuesta previa al broncodilatador o al corticoide que el propio paciente refiere.',
      descompensada: 'Empeoramiento progresivo o brusco de disnea, tos, sibilancias y opresión, con caída del flujo pico. Taquipnea, taquicardia, uso de musculatura accesoria y dificultad para completar frases. Signos de gravedad extrema: somnolencia o confusión, agotamiento, TÓRAX SILENTE (que significa que no se mueve aire, no que la crisis haya cedido) y bradicardia. Una PaCO2 normal o alta en plena crisis indica fracaso ventilatorio inminente, porque lo esperable es que este baja por la hiperventilación.'
    },
    laboratorio: [
      { prueba: 'Espirometría con prueba broncodilatadora (calculadora disponible)', utilidad: 'Prueba inicial y la más rentable: obstrucción con ascenso del FEV1 mayor del 12% Y de más de 200 mL tras salbutamol confirma la variabilidad. Una prueba negativa no descarta el asma y se repite en un dia sintomático o tras retirar el broncodilatador de larga duración. Debe intentarse ANTES de iniciar el corticoide inhalado.' },
      { prueba: 'Registro domiciliario del flujo espiratorio pico (calculadora disponible)', utilidad: 'Dos medidas diarias durante 2 semanas. Una variabilidad diaria media mayor del 10% en el adulto documenta el diagnóstico. Barato, hecho en casa y con el valor añadido de enseñar al paciente a reconocer su propio deterioro para el plan de acción escrito.' },
      { prueba: 'Fracción exhalada de óxido nítrico', utilidad: 'Marcador de inflamación tipo 2 y de adherencia al corticoide inhalado, NO criterio diagnóstico. Un valor de 20 partes por mil millones o más apoya el fenotipo tipo 2 y predice respuesta al corticoide; sube en la rinitis alérgica y baja con el tabaco, la broncoconstricción y el propio corticoide.' },
      { prueba: 'Eosinófilos en sangre e IgE total y específica', utilidad: 'Definen el fenotipo y guian la elección del biológico: 150 eosinófilos por microlitro o más apoyan la inflamación tipo 2. La IgE total en rango y la sensibilización a un aeroalergeno perenne son requisito para el omalizumab. Se miden sin corticoide sistémico, que los suprime.' },
      { prueba: 'Gasometría arterial en la crisis', utilidad: 'Solo si la saturación es menor del 90%, hay agotamiento o la respuesta es mala. Lo esperable es alcalosis respiratoria con PaCO2 baja: una PaCO2 NORMAL O ALTA en plena crisis es signo de alarma y anuncia el fracaso ventilatorio.' },
      { prueba: 'Precipitinas frente a Aspergillus e IgE específica', utilidad: 'Ante asma de difícil control con bronquiectasias centrales, tapones de moco, eosinofilia marcada e IgE total muy alta, para descartar aspergilosis broncopulmonar alérgica, que tiene tratamiento propio con corticoide y antifúngico.' },
      { prueba: 'Anticuerpos anticitoplasma de neutrófilo', utilidad: 'Ante asma de inicio en el adulto con eosinofilia importante, poliposis, mononeuritis múltiple, infiltrados pulmonares o afectación renal, para descartar granulomatosis eosinofílica con poliangeítis, cuyo retraso diagnóstico deja secuelas neurológicas.' },
      { prueba: 'Cloruro en sudor y estudio de inmunoglobulinas', utilidad: 'En el adulto joven con asma atípica, bronquiectasias, infecciones de repetición o mala respuesta, para descartar fibrosis quística de expresión tardía, discinesia ciliar e inmunodeficiencia común variable.' }
    ],
    no_invasivos: [
      { metodo: 'Control sintomático de GINA (calculadora disponible)', interpretacion: 'Cuatro preguntas sobre las últimas 4 semanas: síntomas diurnos más de dos veces por semana, despertar nocturno por asma, uso del rescate más de dos veces por semana y limitación de la actividad.', cutoff: 'Ninguna: bien controlada. Una o dos: parcialmente controlada. Tres o cuatro: no controlada' },
      { metodo: 'Test de control del asma o ACT (calculadora disponible)', interpretacion: 'Cinco preguntas puntuadas de 1 a 5 sobre limitación de la actividad, disnea, despertares, uso del rescate y percepción global de control en las últimas 4 semanas. Es autoadministrado y sensible al cambio.', cutoff: '20 o más: bien controlada. 16 a 19: no bien controlada. 15 o menos: muy mal controlada' },
      { metodo: 'Prueba de provocación bronquial con metacolina', interpretacion: 'Se reserva a la duda diagnóstica con espirometría normal y sin variabilidad documentada. Es muy sensible y poco específica: un resultado negativo prácticamente descarta el asma activa, uno positivo aparece también en rinitis, EPOC, fibrosis quística e insuficiencia cardiaca.', cutoff: 'Caída del FEV1 del 20% o más con la dosis de metacolina establecida' },
      { metodo: 'Prueba de ejercicio', interpretacion: 'Ejercicio estandarizado con medida seriada del FEV1. Confirma la broncoconstricción inducida por ejercicio, que puede ser la única manifestación del asma en el joven y en el deportista.', cutoff: 'Caída del FEV1 mayor del 10% y de más de 200 mL respecto al basal' },
      { metodo: 'Valoración de la gravedad de la crisis (calculadora disponible)', interpretacion: 'Integra capacidad de hablar, postura, agitación, frecuencia respiratoria y cardiaca, saturación y flujo pico en porcentaje del mejor valor personal, más los signos de riesgo vital.', cutoff: 'Grave si habla con palabras, frecuencia respiratoria mayor de 30, frecuencia cardiaca mayor de 120, saturación menor del 90% o flujo pico del 50% o menos' },
      { metodo: 'Revisión de la técnica inhalatoria y de la adherencia', interpretacion: 'La prueba más rentable de todo el seguimiento y la que menos se hace. Se comprueba con el dispositivo real del paciente, no preguntando. La adherencia se estima con los registros de dispensacion, no con la respuesta a la pregunta directa.', cutoff: 'Sin umbral: una técnica incorrecta o una adherencia baja invalidan cualquier decisión de escalar el tratamiento' },
      { metodo: 'Laringoscopia o estudio de la via aérea superior', interpretacion: 'Ante estridor inspiratorio, síntomas que no responden a nada, disnea de aparición y resolución bruscas o sensación de cierre en la garganta, para diagnosticar la disfunción de cuerdas vocales, que imita el asma grave y se trata con logopedia.', cutoff: 'Sin umbral; el diagnóstico es visual durante el episodio' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Normal o con hiperinsuflación en el asma no complicada. Su papel es excluir: neumonía, neumotórax (que puede complicar una crisis), atelectasia por tapón de moco, cuerpo extraño e insuficiencia cardiaca. No se pide de rutina en cada crisis, solo si hay fiebre, dolor, asimetría o mala respuesta.' },
      { modalidad: 'Tomografía de tórax de alta resolución', hallazgos: 'Ante asma de difícil control: bronquiectasias centrales con tapones de moco (aspergilosis broncopulmonar alérgica), engrosamiento de la pared bronquial, atrapamiento aéreo en espiración, o hallazgos que apunten a otro diagnóstico como bronquiolitis o enfermedad intersticial.' },
      { modalidad: 'Tomografía de senos paranasales', hallazgos: 'Poliposis nasosinusal y rinosinusitis crónica, que acompañan al asma tipo 2 y a la enfermedad respiratoria exacerbada por antiinflamatorios. Tratarlas mejora el control del asma y a veces evita subir de escalón.' },
      { modalidad: 'Ecografía pulmonar a pie de cama', hallazgos: 'En la crisis grave, para descartar neumotórax y separar el edema pulmonar del broncoespasmo cuando el cuadro no encaja, sobre todo en el paciente mayor en el que el asma cardiaca compite como diagnóstico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El asma se ordena en <strong>tres ejes distintos</strong> que conviene no confundir. El <strong>control</strong> mira las últimas 4 semanas y se mide con las cuatro preguntas de GINA o con el ACT. La <strong>gravedad</strong> no es una propiedad basal sino retrospectiva: se define por el escalón de tratamiento que hace falta para mantener el control, de modo que no se puede etiquetar a un paciente de asma grave hasta haberlo tratado bien durante meses. Y el <strong>riesgo futuro</strong> de exacerbación es una dimension independiente del control actual: un paciente poco sintomático puede estar en altísimo riesgo. A ello se añaden la clasificación por <strong>fenotipo inflamatorio</strong>, que decide el biológico, y la escala de gravedad de la <strong>crisis</strong>.`,
    escalas: [
      { nombre: 'Control sintomático de GINA (calculadora disponible)', componentes: 'Síntomas diurnos más de dos veces por semana, cualquier despertar nocturno por asma, uso del rescate más de dos veces por semana (sin contar el previo al ejercicio) y limitación de la actividad, en las últimas 4 semanas.', formula: 'Recuento de respuestas afirmativas, de 0 a 4.', interpretacion: '0: bien controlada. 1 o 2: parcialmente controlada. 3 o 4: no controlada. Es la herramienta de cabecera de la consulta porque son cuatro preguntas y no requiere material.' },
      { nombre: 'Test de control del asma o ACT (calculadora disponible)', componentes: 'Cinco ítems de 1 a 5: limitación de la actividad, disnea, despertares nocturnos, uso del rescate y percepción global del control.', formula: 'Suma de 5 a 25 puntos.', interpretacion: '20 o más: bien controlada. De 16 a 19: no bien controlada. 15 o menos: muy mal controlada. Un cambio de 3 puntos es clínicamente relevante. Se autoadministra y sirve bien para seguimiento a distancia.' },
      { nombre: 'Escalones de tratamiento de GINA', componentes: 'Cinco pasos en dos vías: la preferida, con corticoide inhalado y formoterol como rescate, y la alternativa, con rescate de acción corta y corticoide de mantenimiento.', formula: 'No es una puntuación: se sube o se baja de escalón según el control y el riesgo.', interpretacion: 'La gravedad del asma se define a posteriori por el escalón necesario para el control: leve si se controla en los pasos 1 y 2, moderada en el 3, grave si necesita el 4 o el 5 o sigue sin control en ellos. Antes de subir hay que revisar diagnóstico, técnica, adherencia y comorbilidades.' },
      { nombre: 'Factores de riesgo de crisis grave y de muerte por asma', componentes: 'Intubación o ingreso en cuidados intensivos por asma alguna vez, ingreso o visita a urgencias en el último año, uso actual o reciente de corticoide oral, ausencia de corticoide inhalado, mala adherencia, más de un envase de rescate al mes, alergia alimentaria, problemas psicosociales y FEV1 bajo.', formula: 'Identificación clínica, no puntuación.', interpretacion: 'Es independiente del control sintomático: un paciente con pocos síntomas y varios de estos factores esta en alto riesgo. Cambia la conducta (no dar el alta sin corticoide inhalado, plan escrito y cita precoz) y es lo que hay que preguntar en la primera consulta.' },
      { nombre: 'Gravedad de la crisis asmática (calculadora disponible)', componentes: 'Capacidad de hablar, postura, agitación, frecuencia respiratoria y cardiaca, saturación de oxígeno, flujo pico en porcentaje del mejor valor personal y signos de riesgo vital.', formula: 'Clasificación categórica en leve o moderada, grave y de riesgo vital.', interpretacion: 'La forma grave exige ipratropio, oxígeno controlado y valorar magnesio. Los signos de riesgo vital (somnolencia, confusión, tórax silente, PaCO2 normal o alta) obligan a avisar a cuidados intensivos sin esperar más.' },
      { nombre: 'Fenotipos inflamatorios', componentes: 'Eosinófilos en sangre y en esputo, óxido nítrico exhalado, IgE y sensibilización alérgica, edad de inicio, obesidad y respuesta al corticoide.', formula: 'Clasificación categórica en tipo 2 alto (alérgica, eosinofílica de inicio tardío, exacerbada por antiinflamatorios, aspergilosis alérgica) y tipo 2 bajo (neutrofílica, paucigranulocitica, asociada a obesidad).', interpretacion: 'Decide la elección del biológico en el asma grave, y explica por que un asma tipo 2 bajo responde mal al corticoide por mucho que se suba la dosis. Los biomarcadores se miden sin corticoide sistémico.' },
      { nombre: 'Criterios ERS/ATS de asma grave', componentes: 'Asma que requiere dosis altas de corticoide inhalado con un segundo controlador (o corticoide oral) durante el año previo para mantener el control, o que sigue sin control pese a ese tratamiento.', formula: 'Definición categórica, tras confirmar adherencia, técnica y control de comorbilidades.', interpretacion: 'Afecta del 3 al 10% de los asmaticos. La mayoría de los pacientes etiquetados así tienen en realidad asma de difícil control por causas corregibles, no asma refractaria, y ese es el motivo de que el orden de la evaluación importe tanto.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Asma',
      color: '#3f7a4a',
      definicion: 'Enfermedad heterogénea, habitualmente con inflamación crónica de la via aérea, definida por síntomas respiratorios que varian en el tiempo y en intensidad junto con limitación VARIABLE al flujo aéreo espiratorio.',
      fisiopatologia: 'Sobre una predisposición genética y una exposición ambiental, se establece una inflamación crónica de la via aérea, en la mayoría de los casos de tipo 2, con eosinófilos, linfocitos T colaboradores tipo 2, interleucinas 4, 5 y 13, e IgE. Esa inflamación produce hiperreactividad bronquial, de modo que estímulos inocuos para otras personas desencadenan broncoconstricción. A la contracción del músculo liso se suman el edema de la mucosa y la hipersecreción de moco, que estrechan la luz de forma reversible. Con los años y las crisis repetidas aparece el remodelado (engrosamiento de la membrana basal, hipertrofia del músculo liso y fibrosis) que hace que parte de la obstrucción deje de ser reversible.',
      epidemiologia: 'Afecta a unos 260 millones de personas y causa alrededor de 450000 muertes al año, la mayoría evitables y concentradas en países de renta baja y media. Es la enfermedad crónica más frecuente de la infancia. En el adulto, el asma de inicio tardío es más frecuente en mujeres, se asocia menos a atopia y responde peor al tratamiento.',
      factores_riesgo: ['Atopia personal o familiar: rinitis, dermatitis atópica, alergia alimentaria', 'Antecedente familiar de asma', 'Exposición a acaros, epitelios, hongos y polenes', 'Tabaquismo activo o pasivo, incluido el prenatal', 'Contaminación atmosferica y exposición a biomasa', 'Obesidad, que empeora el control y responde peor al corticoide', 'Infecciones virales graves en la primera infancia', 'Exposición laboral a sensibilizantes e irritantes', 'Prematuridad y bajo peso al nacer', 'Fármacos: antiinflamatorios no esteroideos y betabloqueantes en el paciente susceptible'],
      clinica: 'Sibilancias, disnea, opresión torácica y tos que varian en el tiempo y en intensidad, típicamente peores de noche o al despertar, y desencadenados por ejercicio, risa, alérgenos, aire frío, infecciones o fármacos. La exploración entre episodios puede ser normal. La tos como único síntoma (asma tusigena) es una presentación reconocida y a menudo tardíamente diagnosticada.',
      criterios_dx: 'Patrón sintomático compatible MÁS documentación objetiva de limitación variable al flujo aéreo: prueba broncodilatadora positiva, variabilidad del flujo pico mayor del 10%, mejoría tras 4 semanas de corticoide inhalado, prueba de ejercicio positiva o provocación bronquial positiva. Debe intentarse antes de iniciar el tratamiento. Ver la Figura 1 de Definición.',
      laboratorio: 'Espirometría con prueba broncodilatadora como prueba inicial. Eosinófilos en sangre, IgE total y específica y óxido nítrico exhalado para el fenotipo. No hay ningún análisis que diagnostique el asma por si solo.',
      imagen: 'Radiografía de tórax solo para excluir otros diagnósticos. Tomografía de alta resolución y de senos si el asma es de difícil control.',
      complementarios: 'Registro domiciliario del flujo pico durante 2 semanas. Revisión de la técnica inhalatoria en cada visita. Cribado de rinitis, poliposis, reflujo, obesidad, apnea del sueño y ansiedad, que empeoran el control.',
      dx_diferencial: 'EPOC (y su coexistencia con el asma), disfunción de cuerdas vocales, insuficiencia cardiaca, bronquiectasias, tos por inhibidores de la enzima convertidora, embolia pulmonar, obstrucción de la via aérea central, síndrome de hiperventilación y, en el joven, fibrosis quística y discinesia ciliar.',
      tx_medico: 'Evitar el desencadenante identificado, sin caer en restricciones inútiles. Abandono del tabaco propio y del entorno. Pérdida de peso en el paciente obeso, que mejora el control de forma medible. Vacunación antigripal y antineumococica. Actividad física regular con precalentamiento. Educación con PLAN DE ACCIÓN ESCRITO, que es una de las pocas intervenciones con impacto demostrado en ingresos y mortalidad.',
      tx_farmacologico: 'Via preferida: dosis baja de corticoide inhalado con formoterol como rescate en los pasos 1 y 2; en el paso 3, la misma combinación de mantenimiento y rescate; en el 4, dosis media; en el 5, añadir LAMA y valorar biológico. Via alternativa: corticoide inhalado cada vez que se usa el rescate en el paso 1, de mantenimiento en el 2, con LABA en el 3 y a dosis media o alta en el 4. NUNCA broncodilatador de acción corta en monoterapia. Antileucotrienos como alternativa de segunda línea, con la advertencia de efectos neuropsiquiátricos. Ver la Figura 2 de Definición.',
      tx_intervencionista: 'Inmunoterapia sublingual con acaros en el paciente alérgico sensibilizado con rinitis y FEV1 conservado. Termoplastia bronquial solo en el contexto de registros o ensayos, porque su beneficio es modesto y su seguridad a largo plazo no esta establecida.',
      criterios_uci: 'No aplica al paciente estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional en el asma; se plantea solo en el remodelado terminal, y antes hay que reconsiderar el diagnóstico.',
      seguimiento_hospitalario: 'No aplica salvo ingreso por crisis.',
      seguimiento_ambulatorio: 'Revisión a las 4 a 8 semanas del inicio o de un cambio, y después cada 3 a 12 meses según el control. En cada visita: control sintomático o ACT, exacerbaciones y uso de rescate, técnica del inhalador, adherencia, factores de riesgo y comorbilidades. Bajar de escalón tras 3 meses de buen control, reduciendo del 25 al 50% de la dosis y sin retirar del todo el corticoide inhalado.',
      pronostico: 'Con tratamiento adecuado la mayoría de los pacientes alcanzan un control que les permite una vida normal. Las muertes por asma son casi siempre evitables y se concentran en pacientes sin corticoide inhalado, con uso excesivo de rescate o con mala adherencia. El remodelado y el declive acelerado del FEV1 se asocian a exacerbaciones repetidas y a tabaquismo.',
      algoritmo: ['Historia compatible: síntomas variables, desencadenantes y antecedente atopico', 'Espirometría con prueba broncodilatadora ANTES de iniciar tratamiento', 'Si no es concluyente: flujo pico 2 semanas, ejercicio o provocación bronquial', 'Confirmado el diagnóstico, medir control y factores de riesgo futuro', 'Iniciar en la via preferida con corticoide inhalado y formoterol', 'Educar: plan de acción escrito y técnica del inhalador con el dispositivo real', 'Revisar a las 4 a 8 semanas', 'Si no hay control: revisar diagnóstico, técnica, adherencia y comorbilidades ANTES de subir', 'Subir de escalón si todo lo anterior esta bien', 'Tras 3 meses controlada, bajar de escalón sin retirar el corticoide inhalado']
    },
    {
      nombre: 'Crisis asmática',
      color: '#8c3a34',
      definicion: 'Empeoramiento agudo o subagudo de los síntomas y de la función pulmonar respecto al estado habitual del paciente, que obliga a cambiar el tratamiento. Puede presentarse de forma progresiva en días o de forma brusca en horas.',
      fisiopatologia: 'Un desencadenante (virus respiratorio en la mayoría de los casos, alérgeno, contaminante, antiinflamatorio o abandono del tratamiento) amplifica la inflamación y produce broncoconstricción, edema de la mucosa y tapones de moco. La obstrucción alarga el tiempo espiratorio y genera atrapamiento aéreo con hiperinsuflación dinámica y presión positiva teleespiratoria intrínseca, lo que aumenta el trabajo respiratorio. Al principio el paciente hiperventila y la PaCO2 baja; cuando el músculo se agota, la PaCO2 sube y aparece acidosis respiratoria. Ese es el motivo por el que una PaCO2 normal en plena crisis es un signo ominoso.',
      epidemiologia: 'Los virus respiratorios explican la mayoría de las crisis del adulto. Existe un fenotipo de crisis de instauración rápida, más frecuente en varones, desencadenada por alérgenos o antiinflamatorios, con mayor gravedad inicial pero mejor respuesta al tratamiento. Alrededor del 10 al 20% de los pacientes atendidos en urgencias recaen en las 2 semanas siguientes, casi siempre por alta sin corticoide.',
      factores_riesgo: ['Intubación o ingreso en cuidados intensivos por asma en cualquier momento', 'Ingreso o visita a urgencias por asma en el último año', 'Uso actual o reciente de corticoide oral', 'No usar corticoide inhalado o usarlo con mala adherencia', 'Consumo de más de un envase de rescate al mes', 'Alergia alimentaria confirmada', 'Problemas psicosociales o enfermedad psiquiátrica', 'Tabaquismo activo y exposición continuada al alérgeno', 'Comorbilidad: rinosinusitis, reflujo, obesidad, apnea del sueño', 'Ausencia de plan de acción escrito'],
      clinica: 'Disnea, tos, sibilancias y opresión progresivas, con caída del flujo pico. Taquipnea, taquicardia, uso de musculatura accesoria y dificultad para hablar. Signos de riesgo vital: somnolencia, confusión, agotamiento, tórax silente y bradicardia. El pulso paradójico marcado apoya la gravedad pero su ausencia no la descarta.',
      criterios_dx: 'Clínico, en un paciente con asma conocida o compatible, tras descartar los imitadores. La gravedad se establece con la capacidad de hablar, la postura, la frecuencia respiratoria y cardiaca, la saturación y el flujo pico en porcentaje del mejor valor personal. Ver la Figura 3 de Definición.',
      laboratorio: 'Gasometría solo si la saturación es menor del 90%, hay agotamiento o mala respuesta: se espera PaCO2 baja, y una cifra normal o alta es alarma. Potasio, que baja con el salbutamol repetido. Hemograma y proteína C reactiva solo si se sospecha infección bacteriana.',
      imagen: 'Radiografía de tórax NO de rutina: solo si hay fiebre, dolor torácico, asimetría en la auscultación, sospecha de neumotórax o mala respuesta al tratamiento. Ecografía pulmonar a pie de cama para descartar neumotórax con rapidez.',
      complementarios: 'Medida del flujo pico al llegar y tras el tratamiento, que es el mejor indicador objetivo de respuesta. Monitorización de saturación. Electrocardiograma en el paciente mayor o con taquicardia extrema.',
      dx_diferencial: 'Insuficiencia cardiaca (asma cardiaca), embolia pulmonar, neumonía, neumotórax, anafilaxia (que exige adrenalina intramuscular inmediata), disfunción de cuerdas vocales, aspiración de cuerpo extraño y obstrucción de la via aérea superior.',
      tx_medico: 'Broncodilatador de acción corta repetido: salbutamol en cámara espaciadora con inhalador presurizado (tan eficaz como el nebulizador en la crisis no grave) o nebulizado. OXÍGENO CONTROLADO con objetivo de saturación del 93 al 95% en el adulto. Ipratropio añadido en la crisis grave. Posición sentada, monitorización y reevaluación frecuente. NO antibiótico de rutina, NO sedantes, NO aminofilina.',
      tx_farmacologico: 'CORTICOIDE SISTÉMICO en la primera hora en prácticamente todas las crisis: prednisona 40 a 50 mg al dia durante 5 a 7 días, sin necesidad de pauta descendente. La via oral es tan eficaz como la intravenosa si el paciente tolera. SULFATO DE MAGNESIO 2 g intravenosos en 20 minutos en la crisis grave que no responde al tratamiento inicial. Continuar o iniciar el corticoide inhalado desde el mismo dia.',
      tx_intervencionista: 'Ventilación no invasiva con precaución y solo en manos expertas, porque la evidencia es débil y puede retrasar una intubación necesaria. Intubación si hay agotamiento, deterioro del nivel de conciencia, hipoxemia refractaria o parada: se ventila con volumen bajo, frecuencia baja y tiempo espiratorio largo, aceptando hipercapnia permisiva para evitar el barotrauma. Ketamina como inductor por su efecto broncodilatador.',
      criterios_uci: 'Signos de riesgo vital (somnolencia, confusión, tórax silente), PaCO2 normal o en ascenso, hipoxemia que no corrige, agotamiento, necesidad de ventilación o falta de respuesta al tratamiento máximo. Se avisa pronto: en el asma el deterioro puede ser muy rápido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación clínica y de flujo pico tras cada tanda de broncodilatador. Vigilar potasio y lactato con salbutamol repetido. Antes del alta: flujo pico mayor del 60 al 80% del mejor personal, estabilidad al menos 1 hora tras el último broncodilatador y saturación adecuada en aire ambiente.',
      seguimiento_ambulatorio: 'Cita en 2 a 7 días. Revisar por que ocurrió la crisis, ajustar al alza el tratamiento de fondo, entregar plan de acción escrito, comprobar la técnica del inhalador y valorar derivación si hubo criterios de gravedad o es una crisis repetida.',
      pronostico: 'La mayoría de las crisis se resuelven, pero cada una identifica a un paciente en riesgo: el antecedente de crisis grave es el mejor predictor de la siguiente y de la muerte por asma. La mortalidad hospitalaria es baja, y prácticamente todas las muertes por asma se consideran evitables.',
      algoritmo: ['Valorar gravedad: habla, postura, frecuencias, saturación y flujo pico', 'Descartar anafilaxia, neumotórax y los demás imitadores', 'Salbutamol repetido en cámara o nebulizado, con ipratropio si es grave', 'Oxígeno controlado con objetivo del 93 al 95%', 'Corticoide sistémico en la PRIMERA HORA: 40 a 50 mg de prednisona', 'Reevaluar a la hora con flujo pico y clínica', 'Si no responde y es grave: sulfato de magnesio 2 g intravenosos', 'Gasometría si hay agotamiento: una PaCO2 normal o alta es alarma', 'Avisar a cuidados intensivos ante signos de riesgo vital', 'Al alta: corticoide inhalado, corticoide oral 5 a 7 días, plan escrito y cita en 2 a 7 días']
    },
    {
      nombre: 'Asma grave y biológicos',
      color: '#5b4a86',
      definicion: 'Asma que requiere dosis altas de corticoide inhalado con un segundo controlador, o corticoide oral, durante el año previo para mantenerse controlada, o que permanece sin control pese a ese tratamiento, una vez confirmadas la adherencia y la técnica.',
      fisiopatologia: 'En la mayoría de los casos hay una inflamación tipo 2 persistente e intensa, dirigida por interleucinas 4, 5, 13, IgE y linfocitos innatos, que se autoperpetua y resiste al corticoide. En un subgrupo menor la inflamación es neutrofílica o escasa, asociada a obesidad, tabaco o infección, y responde mal al corticoide por mucho que se aumente la dosis: subir la dosis en ese fenotipo solo añade efectos adversos. El remodelado estructural contribuye a la obstrucción fija.',
      epidemiologia: 'Del 3 al 10% de los asmaticos, pero consumen una proporción desmesurada del gasto y de los ingresos. La mayoría de los pacientes remitidos como graves resultan tener asma de difícil control por causas corregibles. La exposición acumulada a corticoide oral en este grupo produce una carga notable de osteoporosis, diabetes, cataratas e insuficiencia suprarrenal.',
      factores_riesgo: ['Inflamación tipo 2 persistente con eosinofilia', 'Poliposis nasosinusal y rinosinusitis crónica', 'Enfermedad respiratoria exacerbada por antiinflamatorios', 'Obesidad y apnea obstructiva del sueño', 'Tabaquismo activo o pasado', 'Exposición laboral o domestica continuada al sensibilizante', 'Reflujo gastroesofágico y disfunción de cuerdas vocales', 'Ansiedad, depresión y bajo apoyo social', 'Aspergilosis broncopulmonar alérgica', 'Uso mantenido de corticoide oral'],
      clinica: 'Síntomas diarios, despertares frecuentes, limitación importante de la actividad, exacerbaciones repetidas y dependencia de corticoide oral, pese a un tratamiento inhalado a dosis altas. Con frecuencia se acompaña de las manifestaciones de las comorbilidades tipo 2: rinosinusitis con poliposis, anosmia y dermatitis atópica.',
      criterios_dx: 'Criterios ERS/ATS, aplicados en ORDEN: primero confirmar que el diagnóstico de asma es correcto, después comprobar adherencia y técnica y tratar las comorbilidades, y solo entonces etiquetar de asma grave. Saltarse ese orden convierte un asma mal tratada en un candidato a biológico.',
      laboratorio: 'Eosinófilos en sangre, IgE total y específica, óxido nítrico exhalado y, si se dispone, eosinófilos en esputo. Se miden SIN corticoide sistémico. Precipitinas frente a Aspergillus y anticuerpos anticitoplasma de neutrófilo para descartar aspergilosis alérgica y granulomatosis eosinofílica con poliangeítis.',
      imagen: 'Tomografía de tórax de alta resolución para descartar bronquiectasias, aspergilosis alérgica y otros diagnósticos. Tomografía de senos para valorar la poliposis.',
      complementarios: 'Verificación objetiva de la adherencia mediante registros de dispensacion. Grabación o demostración de la técnica inhalatoria. Laringoscopia si se sospecha disfunción de cuerdas vocales. Estudio de sueño si hay sospecha de apnea. Densitometría y cribado de efectos del corticoide en el paciente dependiente.',
      dx_diferencial: 'Asma de difícil control por causa corregible (la situación más frecuente), disfunción de cuerdas vocales, EPOC, bronquiectasias, aspergilosis broncopulmonar alérgica, granulomatosis eosinofílica con poliangeítis, síndrome de hiperventilación, insuficiencia cardiaca y traqueobroncomalacia.',
      tx_medico: 'Programa estructurado en unidad especializada. Tratar la rinosinusitis y la poliposis, el reflujo sintomático, la obesidad, la apnea del sueño y la ansiedad. Retirar el sensibilizante laboral. Rehabilitación y entrenamiento respiratorio. Educación intensiva con plan de acción.',
      tx_farmacologico: 'Optimizar el escalón 5: dosis altas de corticoide inhalado con LABA, añadir LAMA, valorar antileucotrieno. BIOLÓGICO según el fenotipo: omalizumab en el asma alérgica con IgE en rango; mepolizumab, reslizumab o benralizumab en la eosinofílica de inicio tardío; dupilumab si hay poliposis, dermatitis atópica, esofagitis eosinofílica o dependencia de corticoide oral; tezepelumab si no hay un fenotipo tipo 2 claro, porque es el único eficaz también con eosinófilos bajos. Ver la Figura 4 de Definición. El corticoide oral de mantenimiento es el último recurso y se retira después de que el biológico funcione, de forma lenta y vigilando la insuficiencia suprarrenal.',
      tx_intervencionista: 'Termoplastia bronquial solo dentro de registros o ensayos. Cirugía endoscópica nasosinusal en la poliposis refractaria, que puede mejorar de forma llamativa el control del asma. Inmunoterapia con alérgenos en casos seleccionados con FEV1 conservado.',
      criterios_uci: 'Los mismos de cualquier crisis grave; este grupo concentra las crisis de riesgo vital.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional. Antes de plantearlo hay que reconsiderar el diagnóstico y descartar bronquiectasias y otras enfermedades de la via aérea.',
      seguimiento_hospitalario: 'En el ingreso, revisar todo el árbol: diagnóstico, adherencia, técnica, comorbilidades y necesidad de biológico. Un ingreso en un asmatico grave es una oportunidad para reordenar el tratamiento completo.',
      seguimiento_ambulatorio: 'Revisión del biológico a los 4 meses y, si la respuesta es parcial, a los 6 a 12: exacerbaciones, dosis de corticoide oral, control y función pulmonar. Si no responde, cambiar de biológico antes de darlo por fracasado. Vigilancia de los efectos del corticoide acumulado.',
      pronostico: 'Los biológicos han cambiado el pronóstico de este grupo: reducen a la mitad o más las exacerbaciones y permiten retirar el corticoide oral en una proporción importante de pacientes. El riesgo de crisis de riesgo vital persiste y justifica el plan de acción y el seguimiento estrecho.',
      algoritmo: ['Confirmar que el diagnóstico de asma es correcto', 'Comprobar adherencia con registros de dispensacion y técnica con el dispositivo real', 'Buscar y tratar comorbilidades: poliposis, reflujo, obesidad, apnea, ansiedad', 'Retirar exposiciones: tabaco, alérgeno, sensibilizante laboral', 'Solo entonces, etiquetar de asma grave y optimizar el escalón 5', 'Medir biomarcadores tipo 2 SIN corticoide sistémico', 'Elegir el biológico según el fenotipo y las comorbilidades tipo 2', 'Revaluar la respuesta a los 4 meses', 'Si no responde, cambiar de biológico antes de darlo por fracasado', 'Retirar el corticoide oral después, de forma lenta y vigilando el eje suprarrenal']
    },
    {
      nombre: 'Asma ocupacional',
      color: '#8a6a1f',
      definicion: 'Asma causada por una exposición presente en el lugar de trabajo. Se distingue del asma preexistente agravada por el trabajo, en la que el trabajo empeora un asma que ya existía, y ambas se agrupan como asma relacionada con el trabajo.',
      fisiopatologia: 'Dos mecanismos. El sensibilizante, mucho más frecuente, requiere un periodo de latencia de meses o años durante el cual el sistema inmunitario se sensibiliza a un agente de alto peso molecular (harina, latex, enzimas, animales de laboratorio) por via IgE, o de bajo peso molecular (isocianatos, resinas epoxi, persulfatos de peluqueria, maderas) por mecanismos no siempre IgE dependientes. El irritante, sin latencia, aparece tras una exposición masiva única a un irritante y da el síndrome de disfunción reactiva de la via aérea.',
      epidemiologia: 'Explica del 10 al 25% de los casos de asma de inicio en el adulto, y se diagnostica tarde o no se diagnostica. Los sectores clásicos son la panaderia, la sanidad (latex y desinfectantes), la peluqueria, la pintura y el aislamiento con isocianatos, la industria de la madera y la agricultura y ganaderia.',
      factores_riesgo: ['Atopia, sobre todo para los sensibilizantes de alto peso molecular', 'Tabaquismo, que aumenta el riesgo con varios agentes', 'Intensidad y duración de la exposición', 'Ausencia de protección respiratoria adecuada', 'Trabajo en panaderia, sanidad, peluqueria, pintura, madera o agricultura', 'Exposición accidental masiva a un irritante', 'Rinitis ocupacional previa, que suele preceder al asma', 'Predisposición genética para algunos agentes de bajo peso molecular', 'Cambio reciente de puesto o de proceso productivo', 'Trabajo en pequeñas empresas sin vigilancia de la salud'],
      clinica: 'Asma de inicio en la edad adulta cuyos síntomas mejoran en vacaciones y fines de semana y reaparecen al volver al trabajo. Ese patrón es la clave, pero se pierde cuando la enfermedad avanza, porque la inflamación tarda cada vez más en revertir. Suele ir precedida de rinitis y conjuntivitis ocupacionales, que son la señal de alarma temprana.',
      criterios_dx: 'Asma confirmada MÁS relación demostrada con el trabajo. La pregunta que hay que hacer a todo asmatico de inicio adulto es simple: mejora usted cuando no va a trabajar? La confirmación se apoya en registros seriados de flujo pico dentro y fuera del trabajo durante al menos 2 semanas en cada periodo, pruebas inmunológicas frente al agente y, en centros expertos, provocación específica.',
      laboratorio: 'IgE específica y pruebas cutáneas frente al agente sospechoso cuando existen, sobre todo en los de alto peso molecular. Eosinófilos y óxido nítrico exhalado, que pueden subir tras el periodo laboral y bajar tras el descanso.',
      imagen: 'Radiografía de tórax para excluir otras enfermedades ocupacionales. Tomografía si se sospecha neumonitis por hipersensibilidad, que comparte exposiciones y se confunde con el asma ocupacional.',
      complementarios: 'Registro seriado de flujo pico cuatro veces al dia, en periodo laboral y en periodo de descanso, que es la prueba más útil y accesible. Provocación bronquial específica en centro especializado como referencia diagnóstica. Espirometrías comparadas antes y después de la jornada.',
      dx_diferencial: 'Asma no ocupacional coincidente, neumonitis por hipersensibilidad, bronquiolitis por irritantes, disfunción de cuerdas vocales inducida por irritantes, síndrome de sensibilidad química múltiple y rinitis ocupacional aislada.',
      tx_medico: 'RETIRAR LA EXPOSICIÓN es el tratamiento, y cuanto antes mejor: la probabilidad de remisión cae con cada año de exposición continuada tras el inicio de los síntomas. Cuando la retirada completa no es posible, reducir la exposición y usar protección respiratoria adecuada, sabiendo que es una solución peor. Notificar como enfermedad profesional y coordinar con salud laboral, porque el paciente afronta consecuencias económicas que condicionan la decisión.',
      tx_farmacologico: 'El mismo tratamiento escalonado del asma, que no sustituye a la retirada de la exposición. En el asma por irritantes, el corticoide inhalado precoz y a dosis suficientes es el pilar.',
      tx_intervencionista: 'No aplica de forma específica.',
      criterios_uci: 'Los de cualquier crisis grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Sin particularidades frente al asma común.',
      seguimiento_ambulatorio: 'Espirometría y control sintomático periódicos tras la retirada, que puede tardar meses o años en mejorar y a veces no revierte. Vigilancia de compañeros expuestos al mismo agente, porque un caso índice suele significar más casos en el mismo puesto.',
      pronostico: 'La retirada precoz es lo único que se asocia a remisión. Con exposición prolongada tras el inicio de los síntomas, la hiperreactividad y la obstrucción pueden persistir de forma indefinida pese a la retirada.',
      algoritmo: ['Preguntar a TODO asmatico de inicio adulto por su trabajo', 'Preguntar si mejora en vacaciones y fines de semana', 'Identificar el agente sospechoso y el sector de riesgo', 'Registro seriado de flujo pico en periodo laboral y de descanso', 'IgE específica o pruebas cutáneas si el agente lo permite', 'Provocación específica en centro experto si persiste la duda', 'Retirar la exposición cuanto antes: es el tratamiento', 'Tratar el asma con el escalonado habitual', 'Notificar como enfermedad profesional y coordinar con salud laboral', 'Vigilar a los compañeros expuestos al mismo agente']
    },
    {
      nombre: 'Enfermedad respiratoria exacerbada por antiinflamatorios',
      color: '#2e6b7a',
      definicion: 'Triada de asma, poliposis nasosinusal y reacciones respiratorias tras la toma de ácido acetilsalicílico o de otros antiinflamatorios inhibidores de la ciclooxigenasa 1. Se conoce también como triada de Samter o de Widal.',
      fisiopatologia: 'No es una alergia: es una alteración del metabolismo del ácido araquidonico. Los pacientes tienen una sobreproducción basal de cisteinil-leucotrienos y una menor producción de prostaglandina E2, que normalmente frena esa via. Al inhibir la ciclooxigenasa 1 se retira ese freno y el sustrato se desvia masivamente hacia los leucotrienos, con broncoconstricción y síntomas nasales intensos en menos de 3 horas. Por eso la reacción aparece con CUALQUIER inhibidor de la ciclooxigenasa 1 y no con los inhibidores selectivos de la ciclooxigenasa 2, y por eso las pruebas de alergia son inútiles.',
      epidemiologia: 'Afecta a cerca del 7% de los asmaticos adultos y hasta al 15% de los que tienen asma grave. Es más frecuente en mujeres y de inicio en la tercera o cuarta década. La secuencia típica es rinitis persistente con anosmia, después poliposis, después asma, y por último la reacción a los antiinflamatorios.',
      factores_riesgo: ['Poliposis nasosinusal, sobre todo recidivante tras cirugía', 'Rinosinusitis crónica con anosmia', 'Asma de inicio en la edad adulta', 'Sexo femenino', 'Eosinofilia en sangre y en tejido nasal', 'Antecedente de reacción previa a antiinflamatorios', 'Consumo de alcohol que desencadena síntomas nasales', 'Asma grave dependiente de corticoide', 'Cirugía nasosinusal repetida', 'Historia familiar en algunos casos'],
      clinica: 'Rinorrea, obstrucción nasal intensa, anosmia y broncoespasmo en las 3 horas siguientes a la toma del antiinflamatorio, a veces con eritema facial y síntomas digestivos. La reacción puede ser grave y ha causado crisis de riesgo vital e ingresos en cuidados intensivos. Fuera de las reacciones, predomina un asma persistente con poliposis recidivante y anosmia muy incapacitante.',
      criterios_dx: 'Clínico ante la triada. La confirmación cuando hace falta es la PROVOCACIÓN controlada con ácido acetilsalicílico (oral, bronquial o nasal) en centro experto y con el asma estable: no existe ninguna prueba in vitro ni cutánea que lo diagnostique, y ese es un punto que se pregunta y se falla con frecuencia.',
      laboratorio: 'Eosinofilia en sangre, habitualmente marcada. IgE total variable y sin valor diagnóstico. Los leucotrienos urinarios están elevados pero no se usan en la práctica clínica habitual.',
      imagen: 'Tomografía de senos paranasales con poliposis extensa y ocupación difusa, típicamente más grave que en la poliposis sin sensibilidad a antiinflamatorios. Radiografía o tomografía de tórax según el asma.',
      complementarios: 'Endoscopia nasal, prueba de olfato y valoración por otorrinolaringología. Registro escrito y visible en la historia de la contraindicación farmacológica, que es una medida de seguridad de primer orden.',
      dx_diferencial: 'Urticaria y angioedema por antiinflamatorios (mecanismo y manejo distintos), alergia IgE mediada a un antiinflamatorio concreto (que permite usar otros de familia diferente), poliposis nasosinusal sin sensibilidad, granulomatosis eosinofílica con poliangeítis y mastocitosis.',
      tx_medico: 'EVITAR todos los inhibidores de la ciclooxigenasa 1. El paracetamol a dosis bajas y los inhibidores selectivos de la ciclooxigenasa 2 suelen tolerarse, y la primera toma conviene hacerla supervisada. Tratamiento intensivo de la rinosinusitis con corticoide nasal y lavados. Evitar el alcohol si lo desencadena.',
      tx_farmacologico: 'Antileucotrienos (montelukast, zafirlukast) o zileuton, que actuan sobre la via responsable y suelen dar mejor respuesta que en el asma común. Corticoide inhalado y nasal a dosis suficientes. En la enfermedad refractaria, DUPILUMAB es especialmente eficaz porque actúa a la vez sobre el asma y sobre la poliposis; también se usan mepolizumab, benralizumab y omalizumab.',
      tx_intervencionista: 'Cirugía endoscópica nasosinusal para la poliposis, sabiendo que la recidiva es la norma sin tratamiento médico posterior. DESENSIBILIZACION con ácido acetilsalicílico y mantenimiento con dosis diaria en centro experto: reduce la recidiva de los pólipos y mejora el asma, y es la única intervención que modifica el curso natural de la enfermedad.',
      criterios_uci: 'Las reacciones tras la toma pueden ser graves y requerir cuidados intensivos, con los mismos criterios que cualquier crisis de riesgo vital.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si ingresa por una reacción, revisar la lista de fármacos, dejar la contraindicación registrada de forma visible y planificar el seguimiento conjunto con otorrinolaringología.',
      seguimiento_ambulatorio: 'Seguimiento compartido entre neumología o alergologia y otorrinolaringología. Control del olfato y de la poliposis, revaluacion periódica de la necesidad de biológico y de desensibilizacion.',
      pronostico: 'Es una enfermedad persistente que no remite espontáneamente, con asma que tiende a ser más grave que la media y poliposis con alta tasa de recidiva. La desensibilizacion y los biológicos han mejorado sustancialmente ese panorama.',
      algoritmo: ['Sospechar ante asma del adulto con poliposis y anosmia', 'Preguntar de forma explícita por reacciones a antiinflamatorios y por el alcohol', 'No pedir pruebas de alergia: no sirven para este diagnóstico', 'Confirmar con provocación controlada solo si es necesario y en centro experto', 'Registrar la contraindicación de forma visible en la historia', 'Ofrecer paracetamol a dosis bajas o inhibidor selectivo de la ciclooxigenasa 2, la primera toma supervisada', 'Tratamiento intensivo de la rinosinusitis con corticoide nasal', 'Añadir antileucotrieno al tratamiento del asma', 'Valorar dupilumab si hay asma grave con poliposis', 'Valorar desensibilizacion con ácido acetilsalicílico en centro experto']
    },
    {
      nombre: 'Situaciones especiales: embarazo, ejercicio y solapamiento con EPOC',
      color: '#6b4a2e',
      definicion: 'Tres escenarios frecuentes que cambian decisiones concretas del manejo del asma sin cambiar sus principios: el embarazo, la broncoconstricción inducida por ejercicio y la coexistencia de asma y EPOC en el mismo paciente.',
      fisiopatologia: 'En el embarazo, los cambios hormonales, mecánicos e inmunitarios modifican el curso del asma de forma impredecible, y la hipoxemia materna compromete directamente la oxigenación fetal. En el ejercicio, la pérdida de agua y calor por la hiperventilación produce hiperosmolaridad de la superficie de la via aérea y liberación de mediadores, con broncoconstricción que llega a su máximo 5 a 15 minutos DESPUÉS de terminar el esfuerzo. En el solapamiento con EPOC coexisten la inflamación eosinofílica variable del asma y la obstrucción fija de la EPOC, con peor pronóstico que cualquiera de las dos por separado.',
      epidemiologia: 'El asma complica del 4 al 8% de los embarazos, y la regla clásica es que alrededor de un tercio mejora, un tercio empeora y un tercio no cambia. La broncoconstricción por ejercicio afecta a la mayoría de los asmaticos mal controlados y a un porcentaje notable de deportistas de resistencia sin asma diagnosticada. La coexistencia de asma y EPOC aparece en el 15 al 25% de los pacientes obstructivos de más de 40 años.',
      factores_riesgo: ['Asma mal controlada antes del embarazo', 'Abandono del corticoide inhalado por miedo infundado al fármaco', 'Infección respiratoria en el segundo trimestre', 'Deporte de resistencia en aire frío, seco o clorado', 'Ausencia de calentamiento previo al esfuerzo', 'Tabaquismo en el asmatico de larga evolución', 'Asma de inicio en la infancia con exposición tabaquica posterior', 'Exposición laboral a irritantes en el asmatico', 'Obesidad, que empeora las tres situaciones', 'Contaminación atmosferica'],
      clinica: 'En el embarazo, el empeoramiento se concentra en el segundo y tercer trimestre y suele mejorar en el último mes; el parto rara vez se acompaña de crisis. En el ejercicio, tos, sibilancias y opresión que aparecen al terminar el esfuerzo y ceden en 30 a 60 minutos, con periodo refractario posterior. En el solapamiento, obstrucción no del todo reversible en un paciente con historia de asma, atopia o eosinofilia, y con mayor carga sintomática y más exacerbaciones.',
      criterios_dx: 'En el embarazo, el mismo diagnóstico del asma, evitando pruebas de provocación. En el ejercicio, caída del FEV1 mayor del 10% y de más de 200 mL tras esfuerzo estandarizado. En el solapamiento no hay criterios formales: GINA ha abandonado el termino de síndrome de solapamiento y recomienda describirlo como asma más EPOC, y tratar primero el componente asmatico.',
      laboratorio: 'En el embarazo, evitar pruebas innecesarias y vigilar la saturación, con umbral bajo para gasometría en la crisis. En el solapamiento, eosinófilos en sangre para guiar el corticoide inhalado. En el ejercicio, no se necesita analítica.',
      imagen: 'En el embarazo, la radiografía de tórax NO esta contraindicada si es necesaria: con protección abdominal la dosis fetal es despreciable y el riesgo de no diagnosticar una neumonía es mucho mayor. En el solapamiento, tomografía para valorar enfisema y bronquiectasias.',
      complementarios: 'En el embarazo, control conjunto con obstetricia y monitorización fetal durante la crisis. En el ejercicio, prueba de esfuerzo con espirometrías seriadas. En el solapamiento, DLCO y volúmenes pulmonares para caracterizar el componente enfisematoso.',
      dx_diferencial: 'En el embarazo: embolia pulmonar (cuyo riesgo esta aumentado), miocardiopatía periparto, reflujo y disnea fisiológica del embarazo. En el ejercicio: disfunción de cuerdas vocales inducida por el esfuerzo, falta de forma física, anemia y cardiopatía. En el solapamiento: bronquiectasias e insuficiencia cardiaca.',
      tx_medico: 'EMBARAZO: mantener el tratamiento, porque el riesgo de una crisis para el feto supera con mucho al de los fármacos, vacunación antigripal, abandono del tabaco y control estrecho. EJERCICIO: calentamiento progresivo de 10 a 15 minutos, respirar por la nariz o usar mascara en aire frío, y mejorar el control de fondo, que suele ser la verdadera causa. SOLAPAMIENTO: abandono del tabaco, rehabilitación y vacunación.',
      tx_farmacologico: 'EMBARAZO: continuar corticoide inhalado, LABA y, si se precisa, corticoide sistémico en la crisis; se prefieren los fármacos con más experiencia acumulada, y NO se suspende nada por el hecho del embarazo. EJERCICIO: broncodilatador de acción corta o corticoide inhalado con formoterol 10 a 15 minutos antes del esfuerzo, más tratamiento de fondo con corticoide inhalado; el antileucotrieno es alternativa. SOLAPAMIENTO: el corticoide inhalado NO se retira nunca por el componente asmatico, y sobre el se añade la doble broncodilatación.',
      tx_intervencionista: 'No aplica de forma específica en ninguna de las tres situaciones.',
      criterios_uci: 'En el embarazo, umbral MÁS BAJO para vigilancia estrecha: la reserva materna es menor y el feto tolera mal la hipoxemia. El objetivo de saturación en la gestante es del 94 al 98%, más alto que en la asmática no gestante.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En la gestante con crisis, monitorización fetal y contacto con obstetricia desde el principio. En el solapamiento, revisar que no se haya retirado el corticoide inhalado por etiquetar al paciente solo de EPOC.',
      seguimiento_ambulatorio: 'Embarazo: revisión mensual del control, con espirometría o flujo pico. Ejercicio: comprobar que la profilaxis funciona y revisar el control de fondo si sigue apareciendo. Solapamiento: seguimiento con criterios de las dos enfermedades y vigilancia de la comorbilidad cardiovascular.',
      pronostico: 'El asma bien controlada en el embarazo no aumenta el riesgo obstétrico; el asma mal controlada si lo hace, con prematuridad, bajo peso y preeclampsia. La broncoconstricción por ejercicio es controlable en casi todos los casos y no debe impedir el deporte. El solapamiento tiene peor pronóstico funcional y más exacerbaciones que el asma o la EPOC aisladas.',
      algoritmo: ['Embarazo: NO suspender el corticoide inhalado, explicar el balance de riesgos', 'Embarazo: objetivo de saturación del 94 al 98% en la crisis y umbral bajo de ingreso', 'Embarazo: revisión mensual y vacunación antigripal', 'Ejercicio: confirmar con prueba de esfuerzo si hay duda', 'Ejercicio: calentar 10 a 15 minutos y usar broncodilatador antes del esfuerzo', 'Ejercicio: si persiste, el problema suele ser el control de fondo', 'Solapamiento: tratar primero el componente asmatico', 'Solapamiento: NUNCA dejar al paciente sin corticoide inhalado', 'Solapamiento: añadir doble broncodilatación sobre el corticoide inhalado', 'En las tres: revisar técnica del inhalador y plan de acción escrito']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El ingreso por crisis asmática es breve y aparentemente sencillo, y precisamente por eso concentra los errores más caros del tema. Casi todas las muertes por asma se consideran evitables, y buena parte de lo evitable se decide en la hora del alta. Lo que sigue es la lista de comprobacion del ingreso y del alta.',
    parametros: ['Valorar la gravedad con capacidad de hablar, postura, frecuencias, saturación y flujo pico, no a ojo', 'Objetivo de saturación del 93 al 95% en el adulto, y del 94 al 98% en la gestante', 'Corticoide sistémico en la PRIMERA HORA: prednisona 40 a 50 mg, 5 a 7 días, sin pauta descendente', 'Salbutamol repetido, en cámara espaciadora o nebulizado, con ipratropio añadido si la crisis es grave', 'Sulfato de magnesio 2 g intravenosos en 20 minutos si la crisis grave no responde al tratamiento inicial', 'Gasometría solo si hay agotamiento, saturación menor del 90% o mala respuesta: una PaCO2 normal o alta es SIGNO DE ALARMA', 'Radiografía solo si hay fiebre, dolor, asimetría o mala respuesta; no de rutina', 'No dar antibiótico de rutina, no sedar y no usar aminofilina', 'Vigilar el potasio y el lactato con salbutamol repetido a dosis altas', 'Antes del alta: flujo pico mayor del 60 al 80% del mejor personal y estabilidad al menos 1 hora tras el último broncodilatador', 'Antes del alta, SIEMPRE: corticoide inhalado iniciado o subido, plan de acción escrito, técnica del inhalador comprobada y cita en 2 a 7 días'],
    criterios_uci_general: 'Somnolencia, confusión o tórax silente; PaCO2 normal o en ascenso en plena crisis; hipoxemia que no corrige; agotamiento del paciente; necesidad de ventilación; o falta de respuesta al tratamiento máximo. En el asma el deterioro puede ser muy rápido, de modo que el aviso se hace pronto y no cuando ya no queda margen.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma práctica. Un asma que parece candidata a trasplante obliga antes a reconsiderar el diagnóstico y a descartar bronquiectasias y otras enfermedades de la via aérea.',
    prevencion: 'Primaria: evitar el tabaquismo materno y la exposición pasiva en la infancia, reducir la contaminación y la exposición laboral a sensibilizantes, y proteger el desarrollo pulmonar. Secundaria: diagnóstico objetivo temprano con espirometría antes de tratar, retirada precoz de la exposición en el asma ocupacional, y búsqueda activa del asma en el adulto con tos o disnea recurrentes. Terciaria, que es donde más se gana: corticoide inhalado en TODO asmatico, abandono del broncodilatador de acción corta en monoterapia, plan de acción escrito, revisión de la técnica del inhalador en cada visita, vacunación, tratamiento de las comorbilidades y cita precoz tras cada crisis.'
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
  'Asma': { definicion: [1, 2, 3, 6], criterios_dx: [1, 2, 3, 6], laboratorio: [1, 2, 3, 6], tx_farmacologico: [1, 2, 3, 6] },
  'Crisis asmática': { definicion: [13, 14, 1], criterios_dx: [14, 1], laboratorio: [14, 1], tx_farmacologico: [13, 14, 1] },
  'Asma grave y biológicos': { definicion: [8, 9, 10, 11, 12, 18], criterios_dx: [8, 9, 10, 12, 18], laboratorio: [8, 9, 10, 11, 12, 18], tx_farmacologico: [8, 9, 10, 11, 12, 18] },
  'Asma ocupacional': { definicion: [15], criterios_dx: [15], laboratorio: [15], tx_farmacologico: [15] },
  'Enfermedad respiratoria exacerbada por antiinflamatorios': { definicion: [16, 11], criterios_dx: [16], laboratorio: [16], tx_farmacologico: [16, 11] },
  'Situaciones especiales: embarazo, ejercicio y solapamiento con EPOC': { definicion: [17, 1], criterios_dx: [17, 1], laboratorio: [17, 1], tx_farmacologico: [17, 1] }
};
export const estigmasTitulo = 'Signos y datos de la exploración en el asma, del más frecuente al de mayor gravedad';
export const estigmas = [
  { s: 'Sibilancias espiratorias difusas', p: 'Frecuentes, pero no constantes', photo: null, desc: 'Son el signo clásico y a la vez el más malinterpretado. Pueden faltar por completo entre episodios y su intensidad NO se correlaciona con la gravedad: en la crisis grave el flujo es tan bajo que las sibilancias disminuyen o desaparecen.' },
  { s: 'Espiración alargada', p: 'En crisis y en asma mal controlada', photo: null, desc: 'Traduce la limitación al flujo espiratorio. Junto con la caída del flujo pico es de los datos más fiables a pie de cama para estimar la obstrucción cuando no hay espirometro disponible.' },
  { s: 'Tos seca nocturna o de madrugada', p: '~60%', photo: null, desc: 'El ritmo circadiano del tono broncomotor y del cortisol explica el predominio nocturno. En la variante tusigena del asma puede ser el ÚNICO síntoma durante años, y es una causa clásica de tos crónica mal etiquetada.' },
  { s: 'Uso de musculatura accesoria y tiraje', p: 'En crisis moderada y grave', photo: null, desc: 'Esternocleidomastoideos y escalenos visibles, con tiraje supraesternal e intercostal. Es de los primeros signos objetivos de crisis grave y aparece antes de que caiga la saturación.' },
  { s: 'Incapacidad para completar frases', p: 'Crisis grave', photo: null, desc: 'Se explora con una pregunta abierta y escuchando: si el paciente contesta con palabras sueltas en vez de frases, la crisis es grave. Es un signo que no necesita ningún aparato y que ordena el tratamiento de inmediato.' },
  { s: 'Taquipnea mayor de 30 y taquicardia mayor de 120', p: 'Crisis grave', photo: null, desc: 'Entran en la clasificación de gravedad. La taquicardia se debe a la propia crisis y al salbutamol; su descenso durante el tratamiento es un buen indicador de respuesta, mientras que la bradicardia en plena crisis anuncia la parada.' },
  { s: 'Pulso paradójico marcado', p: '~30% en crisis grave', photo: null, desc: 'Caída de la presión sistólica mayor de 10 mmHg en inspiración por las grandes oscilaciones de presión intratorácica. Su presencia apoya la gravedad, pero su ausencia no la descarta y su medida es poco fiable en el paciente agitado.' },
  { s: 'Tórax silente', p: 'Riesgo vital', photo: null, desc: 'La ausencia de sibilancias en un paciente que empeora NO es mejoría: significa que no se esta moviendo aire suficiente para producirlas. Es uno de los signos de riesgo vital y obliga a avisar a cuidados intensivos de inmediato.' },
  { s: 'Somnolencia, confusión o agitación extrema', p: 'Riesgo vital', photo: null, desc: 'Traducen hipoxemia grave, hipercapnia y agotamiento. Junto con el tórax silente y la bradicardia definen la crisis de riesgo vital. La somnolencia en un asmatico en crisis nunca se interpreta como que el paciente se ha tranquilizado.' },
  { s: 'Poliposis nasal y anosmia', p: '~7% de los asmaticos adultos', photo: null, desc: 'Orientan al fenotipo tipo 2 y a la enfermedad respiratoria exacerbada por antiinflamatorios. Buscarlos cambia el tratamiento (antileucotrieno, dupilumab, desensibilizacion) y evita una reacción grave por un analgésico prescrito sin preguntar.' },
  { s: 'Dermatitis atópica y rinoconjuntivitis', p: '~50% en el asma alérgica', photo: null, desc: 'La marcha atópica apoya el diagnóstico en el paciente joven y orienta hacia la inflamación tipo 2, que responde bien al corticoide inhalado y a los biológicos dirigidos a esa via.' },
  { s: 'Candidiasis oral y disfonia', p: '~10% con corticoide inhalado', photo: null, desc: 'Efecto local del corticoide inhalado, no de la enfermedad. Se previene con cámara espaciadora y enjuague bucal tras cada dosis. Su aparición es además una prueba indirecta de que el paciente esta usando el inhalador.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Control sintomático de GINA (calculadora disponible)': [1, 2],
  'Test de control del asma o ACT (calculadora disponible)': [7],
  'Escalones de tratamiento de GINA': [1, 3, 4, 5],
  'Factores de riesgo de crisis grave y de muerte por asma': [1, 6],
  'Gravedad de la crisis asmática (calculadora disponible)': [1, 13],
  'Fenotipos inflamatorios': [8, 9, 12],
  'Criterios ERS/ATS de asma grave': [8, 18]
};
export const escalaCalc = {
  'Control sintomático de GINA (calculadora disponible)': 'control-gina',
  'Test de control del asma o ACT (calculadora disponible)': 'act',
  'Gravedad de la crisis asmática (calculadora disponible)': 'gravedad-crisis'
};
export const compGroups = [
  { name: 'La enfermedad y su crisis', items: ['Asma', 'Crisis asmática'] },
  { name: 'Cuando no se controla', items: ['Asma grave y biológicos', 'Asma ocupacional'] },
  { name: 'Fenotipo y situaciones especiales', items: ['Enfermedad respiratoria exacerbada por antiinflamatorios', 'Situaciones especiales: embarazo, ejercicio y solapamiento con EPOC'] }
];
export const complicacionesIntro = 'La primera ficha es la enfermedad y la segunda su descompensación, que es donde se juegan las muertes evitables del tema. Las dos siguientes recogen los dos motivos por los que un asma no se controla: que sea de verdad grave, con su algoritmo de fenotipo y biológico, o que el paciente siga expuesto en su trabajo a lo que se la causo. Las dos últimas son fenotipos y situaciones que cambian decisiones concretas: la enfermedad exacerbada por antiinflamatorios, que se diagnostica preguntando y no con pruebas de alergia, y el trio de embarazo, ejercicio y coexistencia con EPOC.';
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
  root: { title: 'ASMA', color: '#3f7a4a', target: 'definicion' },
  branches: [
    { title: 'DIAGNOSTICO', sub: 'Documentar que la obstrucción VARIA', color: '#3f7a4a', target: 'diagnostico', leaves: [
      { title: 'Prueba broncodilatadora', sub: 'FEV1 más del 12% y 200 mL', color: '#3f7a4a', target: 'diagnostico' },
      { title: 'Flujo pico 2 semanas', sub: 'Variabilidad mayor del 10%', color: '#2e6b7a', target: 'diagnostico' },
      { title: 'Provocación con metacolina', sub: 'Sensible, poco específica', color: '#5b4a86', target: 'diagnostico' },
      { title: 'Hacerlo ANTES de tratar', sub: 'Después ya no se puede', color: '#8a6a1f', target: 'definicion' }
    ] },
    { title: 'TRATAMIENTO', sub: 'Nunca un broncodilatador solo', color: '#2e6b7a', target: 'clasificacion', leaves: [
      { title: 'Via preferida', sub: 'Corticoide inhalado con formoterol', color: '#3f7a4a', target: 'clasificacion' },
      { title: 'Control en 4 preguntas', sub: 'Últimas 4 semanas', color: '#2e6b7a', target: 'clasificacion' },
      { title: 'Riesgo futuro', sub: 'Independiente del control', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Antes de subir de escalón', sub: 'Técnica y adherencia', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'LA CRISIS', sub: 'Casi todas las muertes son evitables', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Corticoide en la primera hora', sub: '40 a 50 mg, 5 a 7 días', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Saturación 93 a 95%', sub: '94 a 98% en la gestante', color: '#3d5a73', target: 'complicaciones' },
      { title: 'PaCO2 normal o alta', sub: 'Signo de alarma, no de mejoría', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Nunca alta sin corticoide inhalado', sub: 'Plan escrito y cita en 2 a 7 días', color: '#8a6a1f', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 7, 8], imagen: [1, 16] };
export const clasificacionCite = [1, 2, 7, 8];
export const seguimientoCite = [1, 13, 14];
