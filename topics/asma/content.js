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
  subtitulo: 'Modulo 49 · Medicina Interna',
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
    <strong style="color:#3f7a4a;">El asma se diagnostica documentando que la obstruccion VARIA.</strong> <span style="color:var(--ink-dim);">No basta con una espirometria obstructiva ni con una historia compatible: hace falta al menos una prueba objetiva de variabilidad, y conviene obtenerla <strong>antes</strong> de empezar el tratamiento, porque despues cuesta mucho mas.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f7a4a22;border:1px solid #3f7a4a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f7a4a;">1. Prueba<br>BRONCODILATADORA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Ascenso del <strong style="color:var(--ink);">FEV1 mayor del 12% Y de mas de 200 mL</strong> a los 10 a 15 minutos de 200 a 400 microgramos de salbutamol. Es la via mas rapida y la primera que se intenta. Un resultado negativo <strong>no descarta</strong> el asma: se repite en un dia sintomatico o sin broncodilatador previo.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b7a22;border:1px solid #2e6b7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b7a;">2. VARIABILIDAD<br>del flujo pico</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Dos medidas diarias durante <strong>2 semanas</strong>. Variabilidad diaria media <strong style="color:var(--ink);">mayor del 10%</strong> en el adulto. Es barata, se hace en casa y ademas ense&#241;a al paciente a reconocer su propio patron. Requiere tecnica correcta y constancia.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">3. RESPUESTA al<br>tratamiento</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mejoria del <strong style="color:var(--ink);">FEV1 mayor del 12% y de mas de 200 mL</strong> tras 4 semanas de corticoide inhalado. Sirve cuando el paciente llega ya tratado o muy sintomatico y no se puede esperar a documentar nada mas.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">4. Prueba de<br>EJERCICIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Caida del <strong style="color:var(--ink);">FEV1 mayor del 10% y de mas de 200 mL</strong> tras ejercicio estandarizado. Util en el paciente joven cuyo unico sintoma aparece al correr, y en el deportista en quien hay que separar asma de simple falta de forma.</div>
    </div>
    <div style="display:grid;grid-template-columns:126px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">5. Provocacion<br>BRONQUIAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Caida del <strong style="color:var(--ink);">FEV1 del 20% o mas</strong> con metacolina, o del 15% con manitol o suero salino hipertonico. Se reserva a la duda diagnostica con espirometria normal. Es muy <strong>sensible y poco especifica</strong>: un resultado negativo practicamente descarta el asma, uno positivo no la confirma por si solo.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La fraccion exhalada de oxido nitrico no diagnostica asma.</strong> Un valor alto indica inflamacion tipo 2 y predice respuesta al corticoide inhalado, pero sube tambien en la rinitis alergica y en la bronquitis eosinofilica, y baja con el tabaco, con la broncoconstriccion y con el propio corticoide. Es un biomarcador de fenotipo y de adherencia, <strong>no un criterio diagnostico</strong>.
  </div>
</div>`;

const tracksHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El SABA en monoterapia ya no es tratamiento del asma para NADIE.</strong> <span style="color:var(--ink-dim);">Ni siquiera en el asma leve. Alivia el sintoma sin tocar la inflamacion, enmascara el deterioro y su uso frecuente se asocia a exacerbaciones graves y a muerte por asma. Todo paciente con asma debe recibir <strong>corticoide inhalado</strong>, aunque sea solo cuando tiene sintomas.</span>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #3f7a4a;border-radius:8px;padding:6px 8px;background:#3f7a4a08;">
      <div style="font-weight:700;color:#3f7a4a;text-align:center;margin-bottom:4px;">VIA 1 (preferida)<br><span style="font-weight:400;color:var(--ink-dim);">rescate con corticoide inhalado y formoterol</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Pasos 1 y 2</strong>: dosis baja de corticoide inhalado con formoterol <strong>solo a demanda</strong>.<br>
        <strong style="color:var(--ink);">Paso 3</strong>: dosis baja de mantenimiento mas rescate con el mismo inhalador.<br>
        <strong style="color:var(--ink);">Paso 4</strong>: dosis media de mantenimiento mas rescate.<br>
        <strong style="color:var(--ink);">Paso 5</strong>: a&#241;adir LAMA, estudiar el fenotipo y valorar biologico.
      </div>
      <div style="margin-top:4px;padding:4px 6px;border:1px solid #3f7a4a;border-radius:6px;background:#3f7a4a12;color:var(--ink-dim);">Ventaja: el paciente recibe antiinflamatorio <strong>cada vez que se alivia</strong>. Reduce las exacerbaciones graves frente al SABA a demanda y frente al corticoide de mantenimiento con rescate de SABA.</div>
    </div>
    <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#2e6b7a;text-align:center;margin-bottom:4px;">VIA 2 (alternativa)<br><span style="font-weight:400;color:var(--ink-dim);">rescate con broncodilatador de accion corta</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Paso 1</strong>: corticoide inhalado <strong>siempre que</strong> se use el rescate.<br>
        <strong style="color:var(--ink);">Paso 2</strong>: dosis baja de corticoide inhalado a diario.<br>
        <strong style="color:var(--ink);">Paso 3</strong>: dosis baja de corticoide inhalado con LABA.<br>
        <strong style="color:var(--ink);">Paso 4</strong>: dosis media o alta de corticoide inhalado con LABA.<br>
        <strong style="color:var(--ink);">Paso 5</strong>: a&#241;adir LAMA y valorar biologico.
      </div>
      <div style="margin-top:4px;padding:4px 6px;border:1px solid var(--line);border-radius:6px;color:var(--ink-dim);">Se elige cuando el formoterol no esta disponible, no se tolera, o el paciente ya esta bien controlado y adherente con este esquema. Exige <strong>adherencia diaria</strong> para funcionar.</div>
    </div>
  </div>

  <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;background:#3f6b5210;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Antes de subir de paso, revisar cuatro cosas.</strong> Que el diagnostico sea correcto, la <strong>tecnica del inhalador</strong> (mal hecha en la mayoria de los pacientes), la <strong>adherencia</strong> real y los factores modificables: tabaco, alergenos, exposicion laboral, obesidad, rinosinusitis, reflujo y farmacos como los betabloqueantes o los antiinflamatorios.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Bajar de paso tambien forma parte del plan.</strong> Tras <strong>3 meses</strong> de buen control se reduce en torno al 25 al 50% de la dosis, nunca retirando del todo el corticoide inhalado en el adulto. Bajar demasiado deprisa o suspenderlo es una causa clasica de recaida.
    </div>
  </div>
</div>`;

const crisisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">LEVE o<br>MODERADA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Habla con frases, prefiere estar sentado, no agitado. Frecuencia respiratoria menor de 30, frecuencia cardiaca de 100 a 120, <strong>saturacion del 90 al 95%</strong> y flujo pico mayor del 50% del mejor valor personal. <strong style="color:var(--ink);">Salbutamol repetido, corticoide oral y reevaluar en 1 hora.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">GRAVE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Habla con palabras sueltas, se inclina hacia delante, agitado. Frecuencia respiratoria mayor de 30, frecuencia cardiaca mayor de 120, <strong>saturacion menor del 90%</strong> y flujo pico del 50% o menos. <strong style="color:var(--ink);">A&#241;adir ipratropio, oxigeno controlado y valorar sulfato de magnesio.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RIESGO<br>VITAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Somnolencia, confusion o <strong style="color:#8c3a34;">torax silente</strong>. <strong style="color:#8c3a34;">Una PaCO2 normal o en ascenso en plena crisis es un signo de alarma</strong>, no de mejoria: significa que el paciente ya no puede mantener la hiperventilacion. Aviso a cuidados intensivos e intubacion sin demorarla.</div>
    </div>
  </div>

  <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f7a4a;border-radius:8px;padding:5px 8px;background:#3f7a4a10;color:var(--ink-dim);">
      <strong style="color:#3f7a4a;">Lo que se hace.</strong> <strong style="color:var(--ink);">Salbutamol</strong> repetido, en camara con inhalador presurizado o nebulizado. <strong style="color:var(--ink);">Corticoide sistemico</strong>: prednisona 40 a 50 mg al dia, <strong>5 a 7 dias</strong>, en la primera hora. <strong style="color:var(--ink);">Oxigeno controlado</strong> con objetivo de saturacion del <strong>93 al 95%</strong>. <strong style="color:var(--ink);">Ipratropio</strong> en la crisis grave. <strong style="color:var(--ink);">Sulfato de magnesio</strong> 2 g intravenosos en 20 minutos si no responde.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que NO se hace.</strong> Antibiotico de rutina (la mayoria de las crisis son virales o alergicas). Sedantes, que enmascaran el agotamiento. Aminofilina, con mas toxicidad que beneficio. Y sobre todo: <strong>dar el alta con solo un broncodilatador</strong> y sin corticoide inhalado, que es el error que mas muertes evitables ha producido en este tema.
    </div>
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Antes del alta, siempre.</strong> Iniciar o subir el tratamiento de fondo con corticoide inhalado, completar el corticoide oral, entregar un <strong>plan de accion escrito</strong>, revisar la tecnica del inhalador con el dispositivo real, identificar el desencadenante y citar en <strong>2 a 7 dias</strong>. Una crisis siempre significa que el tratamiento de fondo era insuficiente o no se estaba tomando.
  </div>
</div>`;

const biologicosHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #5b4a86;border-radius:8px;padding:5px 9px;background:#5b4a8612;margin-bottom:6px;">
    <strong style="color:#5b4a86;">Antes de llamar grave a un asma, descartar que sea un asma mal tratada.</strong> <span style="color:var(--ink-dim);">Solo una minoria de los pacientes "no controlados con dosis altas" tienen asma realmente refractaria. Lo primero es confirmar el diagnostico, comprobar <strong>adherencia y tecnica</strong>, y tratar comorbilidades: rinosinusitis con poliposis, reflujo, obesidad, apnea del sue&#241;o, disfuncion de cuerdas vocales, ansiedad y tabaquismo.</span>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Biomarcadores de inflamacion tipo 2</strong> (se miden con el paciente SIN corticoide sistemico, o el resultado sale falsamente bajo): eosinofilos en sangre de <strong>150 por microlitro o mas</strong>, oxido nitrico exhalado de <strong>20 partes por mil millones o mas</strong>, eosinofilos en esputo del <strong>2% o mas</strong>, asma claramente desencadenada por alergenos, o necesidad de corticoide oral de mantenimiento.
  </div>

  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f7a4a22;border:1px solid #3f7a4a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f7a4a;">ALERGICA con<br>IgE elevada</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Omalizumab</strong> (anti-IgE). Requiere sensibilizacion demostrada a un aeroalergeno perenne e IgE total en rango de dosificacion. Mejora tambien la urticaria cronica y la poliposis asociadas.</div>
    </div>
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b7a22;border:1px solid #2e6b7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b7a;">EOSINOFILICA<br>de inicio tardio</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Mepolizumab</strong> o <strong style="color:var(--ink);">reslizumab</strong> (anti-interleucina 5) y <strong style="color:var(--ink);">benralizumab</strong> (anti-receptor de interleucina 5). Reducen exacerbaciones y permiten retirar el corticoide oral. El beneficio crece con la cifra de eosinofilos y con el numero de crisis del a&#241;o previo.</div>
    </div>
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">TIPO 2 con<br>comorbilidad</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Dupilumab</strong> (anti-receptor de interleucina 4). Es el de eleccion si coexisten dermatitis atopica, poliposis nasosinusal o esofagitis eosinofilica, y en el paciente dependiente de corticoide oral. Puede producir una <strong>eosinofilia transitoria</strong> que casi siempre es asintomatica.</div>
    </div>
    <div style="display:grid;grid-template-columns:128px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">Sin fenotipo<br>tipo 2 claro</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Tezepelumab</strong> (anti-linfopoyetina estromal timica). Actua por encima de la cascada y es el unico que ha demostrado reducir exacerbaciones tambien con eosinofilos bajos, lo que lo convierte en la opcion cuando los demas biomarcadores no orientan.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Como se evalua la respuesta.</strong> Se revisa a los <strong>4 meses</strong> y, si hay respuesta parcial, a los 6 a 12. Se miden exacerbaciones, dosis de corticoide oral, control sintomatico y funcion pulmonar. Si no hay respuesta, se cambia a otro biologico antes de darlo por fracasado. El corticoide oral de mantenimiento se retira <strong>despues</strong> de que el biologico funcione, y de forma lenta, vigilando la insuficiencia suprarrenal.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El asma es una enfermedad heterogenea, casi siempre con inflamacion cronica de la via aerea, definida por una historia de <strong>sintomas respiratorios que varian</strong> en el tiempo y en intensidad (sibilancias, disnea, opresion toracica y tos) junto con una <strong>limitacion variable al flujo aereo espiratorio</strong>. La palabra clave de las dos mitades de esa definicion es la misma: <strong>variable</strong>. Lo que separa al asma de la EPOC no es el sintoma, es que aqui la obstruccion cambia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Diagnosticar es documentar la variabilidad.</strong></p>
<p style="margin:0 0 12px;">Un patron sintomatico compatible no basta, y una espirometria obstructiva tampoco. Hace falta demostrar objetivamente que la obstruccion varia, y conviene hacerlo <strong>antes de iniciar el tratamiento</strong>: una vez que el paciente lleva semanas con corticoide inhalado, la variabilidad se aplana y el diagnostico queda para siempre en el terreno de la suposicion. Ese es el motivo por el que tanto paciente arrastra durante a&#241;os una etiqueta de asma que nadie ha confirmado, y por el que otros tantos con asma real estan sin diagnosticar.</p>
${figBlock('Figura 1', 'Las cinco formas de documentar la limitacion variable al flujo aereo', confirmarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El cambio que hay que entender: se acabo el salbutamol solo.</strong></p>
<p style="margin:0 0 12px;">Durante decadas se trato el asma leve con un broncodilatador de accion corta a demanda. Hoy sabemos que eso es peligroso: el SABA alivia el sintoma sin tocar la inflamacion que lo produce, permite que el paciente tolere un asma cada vez peor sin consultar, y su uso frecuente (mas de un envase al mes) se asocia de forma consistente a exacerbaciones graves y a muerte por asma. Los ensayos SYGMA y Novel START demostraron que una dosis baja de <strong>corticoide inhalado con formoterol usada solo cuando hay sintomas</strong> reduce las exacerbaciones graves frente al SABA a demanda. De ahi la regla actual: <strong>todo paciente con asma debe recibir corticoide inhalado</strong>, aunque solo sea cuando se alivia.</p>
${figBlock('Figura 2', 'Las dos vias de tratamiento y los cinco pasos', tracksHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Control y riesgo son dos cosas distintas.</strong></p>
<p style="margin:0 0 12px;">El <strong>control sintomatico</strong> mira las ultimas 4 semanas y se resume en cuatro preguntas: sintomas diurnos mas de dos veces por semana, algun despertar nocturno por asma, uso del rescate mas de dos veces por semana y limitacion de la actividad. Ninguna afirmativa es control bueno, una o dos es control parcial, tres o cuatro es asma no controlada. El <strong>riesgo futuro</strong> es otra dimension y no se deduce de la anterior: un paciente puede estar poco sintomatico y aun asi tener alto riesgo de crisis grave por haber sido intubado alguna vez, haber ingresado el ultimo a&#241;o, no usar corticoide inhalado, tener mala adherencia, gastar mas de un envase de SABA al mes, tener un FEV1 bajo o una eosinofilia mantenida.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La crisis.</strong></p>
<p style="margin:0 0 12px;">El tratamiento de la crisis es corto y muy conocido, y aun asi se sigue haciendo mal en dos puntos. El primero es la <strong>gasometria</strong>: en una crisis el paciente hiperventila y la PaCO2 debe estar baja, de modo que una PaCO2 normal o en ascenso significa agotamiento y no mejoria. El segundo es el <strong>alta</strong>: dar el alta con solo un broncodilatador, sin corticoide inhalado, sin plan escrito y sin cita, es el error que mas muertes evitables ha producido en este tema.</p>
${figBlock('Figura 3', 'Crisis asmatica: gravedad, tratamiento y lo que no se hace', crisisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Asma grave: primero descartar que sea asma mal tratada.</strong></p>
<p style="margin:0 0 12px;">Solo entre el 3 y el 10% de los asmaticos tienen asma grave de verdad, es decir, la que sigue sin control pese a dosis altas de corticoide inhalado con LABA bien tomadas, o la que necesita esa dosis para mantenerse controlada. La mayoria de los pacientes etiquetados de graves tienen en realidad mala tecnica, mala adherencia, una comorbilidad no tratada o un diagnostico equivocado. Cuando el asma es realmente grave, el siguiente paso es <strong>caracterizar el fenotipo</strong>, porque de ahi sale la eleccion del biologico.</p>
${figBlock('Figura 4', 'Asma grave: del fenotipo a la eleccion del biologico', biologicosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No tratar el asma con un broncodilatador de accion corta en monoterapia, a ninguna edad ni en ningun escalon. No etiquetar de asma sin haber documentado la variabilidad. No usar el oxido nitrico exhalado como criterio diagnostico. No pautar antibiotico de rutina en la crisis. No sedar al asmatico agotado. No suspender el corticoide inhalado en el embarazo, donde el riesgo de la crisis supera con mucho al del farmaco. Y no subir de escalon sin haber comprobado antes la tecnica y la adherencia.</p>`;

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
      tituloA: 'Asma en situacion estable',
      tituloB: 'Crisis asmatica',
      compensada: 'Sibilancias, disnea, opresion toracica y tos que VARIAN en el tiempo y en intensidad, tipicamente peores de noche o al despertar, y desencadenados por ejercicio, risa, alergenos, aire frio, infecciones virales, humo o farmacos. Entre episodios la exploracion puede ser normal, lo que no descarta nada. Antecedente personal o familiar de atopia, rinitis, dermatitis o poliposis nasal. Un dato de gran valor es la respuesta previa al broncodilatador o al corticoide que el propio paciente refiere.',
      descompensada: 'Empeoramiento progresivo o brusco de disnea, tos, sibilancias y opresion, con caida del flujo pico. Taquipnea, taquicardia, uso de musculatura accesoria y dificultad para completar frases. Signos de gravedad extrema: somnolencia o confusion, agotamiento, TORAX SILENTE (que significa que no se mueve aire, no que la crisis haya cedido) y bradicardia. Una PaCO2 normal o alta en plena crisis indica fracaso ventilatorio inminente, porque lo esperable es que este baja por la hiperventilacion.'
    },
    laboratorio: [
      { prueba: 'Espirometria con prueba broncodilatadora (calculadora disponible)', utilidad: 'Prueba inicial y la mas rentable: obstruccion con ascenso del FEV1 mayor del 12% Y de mas de 200 mL tras salbutamol confirma la variabilidad. Una prueba negativa no descarta el asma y se repite en un dia sintomatico o tras retirar el broncodilatador de larga duracion. Debe intentarse ANTES de iniciar el corticoide inhalado.' },
      { prueba: 'Registro domiciliario del flujo espiratorio pico (calculadora disponible)', utilidad: 'Dos medidas diarias durante 2 semanas. Una variabilidad diaria media mayor del 10% en el adulto documenta el diagnostico. Barato, hecho en casa y con el valor a&#241;adido de ense&#241;ar al paciente a reconocer su propio deterioro para el plan de accion escrito.' },
      { prueba: 'Fraccion exhalada de oxido nitrico', utilidad: 'Marcador de inflamacion tipo 2 y de adherencia al corticoide inhalado, NO criterio diagnostico. Un valor de 20 partes por mil millones o mas apoya el fenotipo tipo 2 y predice respuesta al corticoide; sube en la rinitis alergica y baja con el tabaco, la broncoconstriccion y el propio corticoide.' },
      { prueba: 'Eosinofilos en sangre e IgE total y especifica', utilidad: 'Definen el fenotipo y guian la eleccion del biologico: 150 eosinofilos por microlitro o mas apoyan la inflamacion tipo 2. La IgE total en rango y la sensibilizacion a un aeroalergeno perenne son requisito para el omalizumab. Se miden sin corticoide sistemico, que los suprime.' },
      { prueba: 'Gasometria arterial en la crisis', utilidad: 'Solo si la saturacion es menor del 90%, hay agotamiento o la respuesta es mala. Lo esperable es alcalosis respiratoria con PaCO2 baja: una PaCO2 NORMAL O ALTA en plena crisis es signo de alarma y anuncia el fracaso ventilatorio.' },
      { prueba: 'Precipitinas frente a Aspergillus e IgE especifica', utilidad: 'Ante asma de dificil control con bronquiectasias centrales, tapones de moco, eosinofilia marcada e IgE total muy alta, para descartar aspergilosis broncopulmonar alergica, que tiene tratamiento propio con corticoide y antifungico.' },
      { prueba: 'Anticuerpos anticitoplasma de neutrofilo', utilidad: 'Ante asma de inicio en el adulto con eosinofilia importante, poliposis, mononeuritis multiple, infiltrados pulmonares o afectacion renal, para descartar granulomatosis eosinofilica con poliangeitis, cuyo retraso diagnostico deja secuelas neurologicas.' },
      { prueba: 'Cloruro en sudor y estudio de inmunoglobulinas', utilidad: 'En el adulto joven con asma atipica, bronquiectasias, infecciones de repeticion o mala respuesta, para descartar fibrosis quistica de expresion tardia, discinesia ciliar e inmunodeficiencia comun variable.' }
    ],
    no_invasivos: [
      { metodo: 'Control sintomatico de GINA (calculadora disponible)', interpretacion: 'Cuatro preguntas sobre las ultimas 4 semanas: sintomas diurnos mas de dos veces por semana, despertar nocturno por asma, uso del rescate mas de dos veces por semana y limitacion de la actividad.', cutoff: 'Ninguna: bien controlada. Una o dos: parcialmente controlada. Tres o cuatro: no controlada' },
      { metodo: 'Test de control del asma o ACT (calculadora disponible)', interpretacion: 'Cinco preguntas puntuadas de 1 a 5 sobre limitacion de la actividad, disnea, despertares, uso del rescate y percepcion global de control en las ultimas 4 semanas. Es autoadministrado y sensible al cambio.', cutoff: '20 o mas: bien controlada. 16 a 19: no bien controlada. 15 o menos: muy mal controlada' },
      { metodo: 'Prueba de provocacion bronquial con metacolina', interpretacion: 'Se reserva a la duda diagnostica con espirometria normal y sin variabilidad documentada. Es muy sensible y poco especifica: un resultado negativo practicamente descarta el asma activa, uno positivo aparece tambien en rinitis, EPOC, fibrosis quistica e insuficiencia cardiaca.', cutoff: 'Caida del FEV1 del 20% o mas con la dosis de metacolina establecida' },
      { metodo: 'Prueba de ejercicio', interpretacion: 'Ejercicio estandarizado con medida seriada del FEV1. Confirma la broncoconstriccion inducida por ejercicio, que puede ser la unica manifestacion del asma en el joven y en el deportista.', cutoff: 'Caida del FEV1 mayor del 10% y de mas de 200 mL respecto al basal' },
      { metodo: 'Valoracion de la gravedad de la crisis (calculadora disponible)', interpretacion: 'Integra capacidad de hablar, postura, agitacion, frecuencia respiratoria y cardiaca, saturacion y flujo pico en porcentaje del mejor valor personal, mas los signos de riesgo vital.', cutoff: 'Grave si habla con palabras, frecuencia respiratoria mayor de 30, frecuencia cardiaca mayor de 120, saturacion menor del 90% o flujo pico del 50% o menos' },
      { metodo: 'Revision de la tecnica inhalatoria y de la adherencia', interpretacion: 'La prueba mas rentable de todo el seguimiento y la que menos se hace. Se comprueba con el dispositivo real del paciente, no preguntando. La adherencia se estima con los registros de dispensacion, no con la respuesta a la pregunta directa.', cutoff: 'Sin umbral: una tecnica incorrecta o una adherencia baja invalidan cualquier decision de escalar el tratamiento' },
      { metodo: 'Laringoscopia o estudio de la via aerea superior', interpretacion: 'Ante estridor inspiratorio, sintomas que no responden a nada, disnea de aparicion y resolucion bruscas o sensacion de cierre en la garganta, para diagnosticar la disfuncion de cuerdas vocales, que imita el asma grave y se trata con logopedia.', cutoff: 'Sin umbral; el diagnostico es visual durante el episodio' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Normal o con hiperinsuflacion en el asma no complicada. Su papel es excluir: neumonia, neumotorax (que puede complicar una crisis), atelectasia por tapon de moco, cuerpo extra&#241;o e insuficiencia cardiaca. No se pide de rutina en cada crisis, solo si hay fiebre, dolor, asimetria o mala respuesta.' },
      { modalidad: 'Tomografia de torax de alta resolucion', hallazgos: 'Ante asma de dificil control: bronquiectasias centrales con tapones de moco (aspergilosis broncopulmonar alergica), engrosamiento de la pared bronquial, atrapamiento aereo en espiracion, o hallazgos que apunten a otro diagnostico como bronquiolitis o enfermedad intersticial.' },
      { modalidad: 'Tomografia de senos paranasales', hallazgos: 'Poliposis nasosinusal y rinosinusitis cronica, que acompa&#241;an al asma tipo 2 y a la enfermedad respiratoria exacerbada por antiinflamatorios. Tratarlas mejora el control del asma y a veces evita subir de escalon.' },
      { modalidad: 'Ecografia pulmonar a pie de cama', hallazgos: 'En la crisis grave, para descartar neumotorax y separar el edema pulmonar del broncoespasmo cuando el cuadro no encaja, sobre todo en el paciente mayor en el que el asma cardiaca compite como diagnostico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El asma se ordena en <strong>tres ejes distintos</strong> que conviene no confundir. El <strong>control</strong> mira las ultimas 4 semanas y se mide con las cuatro preguntas de GINA o con el ACT. La <strong>gravedad</strong> no es una propiedad basal sino retrospectiva: se define por el escalon de tratamiento que hace falta para mantener el control, de modo que no se puede etiquetar a un paciente de asma grave hasta haberlo tratado bien durante meses. Y el <strong>riesgo futuro</strong> de exacerbacion es una dimension independiente del control actual: un paciente poco sintomatico puede estar en altisimo riesgo. A ello se a&#241;aden la clasificacion por <strong>fenotipo inflamatorio</strong>, que decide el biologico, y la escala de gravedad de la <strong>crisis</strong>.`,
    escalas: [
      { nombre: 'Control sintomatico de GINA (calculadora disponible)', componentes: 'Sintomas diurnos mas de dos veces por semana, cualquier despertar nocturno por asma, uso del rescate mas de dos veces por semana (sin contar el previo al ejercicio) y limitacion de la actividad, en las ultimas 4 semanas.', formula: 'Recuento de respuestas afirmativas, de 0 a 4.', interpretacion: '0: bien controlada. 1 o 2: parcialmente controlada. 3 o 4: no controlada. Es la herramienta de cabecera de la consulta porque son cuatro preguntas y no requiere material.' },
      { nombre: 'Test de control del asma o ACT (calculadora disponible)', componentes: 'Cinco items de 1 a 5: limitacion de la actividad, disnea, despertares nocturnos, uso del rescate y percepcion global del control.', formula: 'Suma de 5 a 25 puntos.', interpretacion: '20 o mas: bien controlada. De 16 a 19: no bien controlada. 15 o menos: muy mal controlada. Un cambio de 3 puntos es clinicamente relevante. Se autoadministra y sirve bien para seguimiento a distancia.' },
      { nombre: 'Escalones de tratamiento de GINA', componentes: 'Cinco pasos en dos vias: la preferida, con corticoide inhalado y formoterol como rescate, y la alternativa, con rescate de accion corta y corticoide de mantenimiento.', formula: 'No es una puntuacion: se sube o se baja de escalon segun el control y el riesgo.', interpretacion: 'La gravedad del asma se define a posteriori por el escalon necesario para el control: leve si se controla en los pasos 1 y 2, moderada en el 3, grave si necesita el 4 o el 5 o sigue sin control en ellos. Antes de subir hay que revisar diagnostico, tecnica, adherencia y comorbilidades.' },
      { nombre: 'Factores de riesgo de crisis grave y de muerte por asma', componentes: 'Intubacion o ingreso en cuidados intensivos por asma alguna vez, ingreso o visita a urgencias en el ultimo a&#241;o, uso actual o reciente de corticoide oral, ausencia de corticoide inhalado, mala adherencia, mas de un envase de rescate al mes, alergia alimentaria, problemas psicosociales y FEV1 bajo.', formula: 'Identificacion clinica, no puntuacion.', interpretacion: 'Es independiente del control sintomatico: un paciente con pocos sintomas y varios de estos factores esta en alto riesgo. Cambia la conducta (no dar el alta sin corticoide inhalado, plan escrito y cita precoz) y es lo que hay que preguntar en la primera consulta.' },
      { nombre: 'Gravedad de la crisis asmatica (calculadora disponible)', componentes: 'Capacidad de hablar, postura, agitacion, frecuencia respiratoria y cardiaca, saturacion de oxigeno, flujo pico en porcentaje del mejor valor personal y signos de riesgo vital.', formula: 'Clasificacion categorica en leve o moderada, grave y de riesgo vital.', interpretacion: 'La forma grave exige ipratropio, oxigeno controlado y valorar magnesio. Los signos de riesgo vital (somnolencia, confusion, torax silente, PaCO2 normal o alta) obligan a avisar a cuidados intensivos sin esperar mas.' },
      { nombre: 'Fenotipos inflamatorios', componentes: 'Eosinofilos en sangre y en esputo, oxido nitrico exhalado, IgE y sensibilizacion alergica, edad de inicio, obesidad y respuesta al corticoide.', formula: 'Clasificacion categorica en tipo 2 alto (alergica, eosinofilica de inicio tardio, exacerbada por antiinflamatorios, aspergilosis alergica) y tipo 2 bajo (neutrofilica, paucigranulocitica, asociada a obesidad).', interpretacion: 'Decide la eleccion del biologico en el asma grave, y explica por que un asma tipo 2 bajo responde mal al corticoide por mucho que se suba la dosis. Los biomarcadores se miden sin corticoide sistemico.' },
      { nombre: 'Criterios ERS/ATS de asma grave', componentes: 'Asma que requiere dosis altas de corticoide inhalado con un segundo controlador (o corticoide oral) durante el a&#241;o previo para mantener el control, o que sigue sin control pese a ese tratamiento.', formula: 'Definicion categorica, tras confirmar adherencia, tecnica y control de comorbilidades.', interpretacion: 'Afecta del 3 al 10% de los asmaticos. La mayoria de los pacientes etiquetados asi tienen en realidad asma de dificil control por causas corregibles, no asma refractaria, y ese es el motivo de que el orden de la evaluacion importe tanto.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Asma',
      color: '#3f7a4a',
      definicion: 'Enfermedad heterogenea, habitualmente con inflamacion cronica de la via aerea, definida por sintomas respiratorios que varian en el tiempo y en intensidad junto con limitacion VARIABLE al flujo aereo espiratorio.',
      fisiopatologia: 'Sobre una predisposicion genetica y una exposicion ambiental, se establece una inflamacion cronica de la via aerea, en la mayoria de los casos de tipo 2, con eosinofilos, linfocitos T colaboradores tipo 2, interleucinas 4, 5 y 13, e IgE. Esa inflamacion produce hiperreactividad bronquial, de modo que estimulos inocuos para otras personas desencadenan broncoconstriccion. A la contraccion del musculo liso se suman el edema de la mucosa y la hipersecrecion de moco, que estrechan la luz de forma reversible. Con los a&#241;os y las crisis repetidas aparece el remodelado (engrosamiento de la membrana basal, hipertrofia del musculo liso y fibrosis) que hace que parte de la obstruccion deje de ser reversible.',
      epidemiologia: 'Afecta a unos 260 millones de personas y causa alrededor de 450000 muertes al a&#241;o, la mayoria evitables y concentradas en paises de renta baja y media. Es la enfermedad cronica mas frecuente de la infancia. En el adulto, el asma de inicio tardio es mas frecuente en mujeres, se asocia menos a atopia y responde peor al tratamiento.',
      factores_riesgo: ['Atopia personal o familiar: rinitis, dermatitis atopica, alergia alimentaria', 'Antecedente familiar de asma', 'Exposicion a acaros, epitelios, hongos y polenes', 'Tabaquismo activo o pasivo, incluido el prenatal', 'Contaminacion atmosferica y exposicion a biomasa', 'Obesidad, que empeora el control y responde peor al corticoide', 'Infecciones virales graves en la primera infancia', 'Exposicion laboral a sensibilizantes e irritantes', 'Prematuridad y bajo peso al nacer', 'Farmacos: antiinflamatorios no esteroideos y betabloqueantes en el paciente susceptible'],
      clinica: 'Sibilancias, disnea, opresion toracica y tos que varian en el tiempo y en intensidad, tipicamente peores de noche o al despertar, y desencadenados por ejercicio, risa, alergenos, aire frio, infecciones o farmacos. La exploracion entre episodios puede ser normal. La tos como unico sintoma (asma tusigena) es una presentacion reconocida y a menudo tardiamente diagnosticada.',
      criterios_dx: 'Patron sintomatico compatible MAS documentacion objetiva de limitacion variable al flujo aereo: prueba broncodilatadora positiva, variabilidad del flujo pico mayor del 10%, mejoria tras 4 semanas de corticoide inhalado, prueba de ejercicio positiva o provocacion bronquial positiva. Debe intentarse antes de iniciar el tratamiento. Ver la Figura 1 de Definicion.',
      laboratorio: 'Espirometria con prueba broncodilatadora como prueba inicial. Eosinofilos en sangre, IgE total y especifica y oxido nitrico exhalado para el fenotipo. No hay ningun analisis que diagnostique el asma por si solo.',
      imagen: 'Radiografia de torax solo para excluir otros diagnosticos. Tomografia de alta resolucion y de senos si el asma es de dificil control.',
      complementarios: 'Registro domiciliario del flujo pico durante 2 semanas. Revision de la tecnica inhalatoria en cada visita. Cribado de rinitis, poliposis, reflujo, obesidad, apnea del sue&#241;o y ansiedad, que empeoran el control.',
      dx_diferencial: 'EPOC (y su coexistencia con el asma), disfuncion de cuerdas vocales, insuficiencia cardiaca, bronquiectasias, tos por inhibidores de la enzima convertidora, embolia pulmonar, obstruccion de la via aerea central, sindrome de hiperventilacion y, en el joven, fibrosis quistica y discinesia ciliar.',
      tx_medico: 'Evitar el desencadenante identificado, sin caer en restricciones inutiles. Abandono del tabaco propio y del entorno. Perdida de peso en el paciente obeso, que mejora el control de forma medible. Vacunacion antigripal y antineumococica. Actividad fisica regular con precalentamiento. Educacion con PLAN DE ACCION ESCRITO, que es una de las pocas intervenciones con impacto demostrado en ingresos y mortalidad.',
      tx_farmacologico: 'Via preferida: dosis baja de corticoide inhalado con formoterol como rescate en los pasos 1 y 2; en el paso 3, la misma combinacion de mantenimiento y rescate; en el 4, dosis media; en el 5, a&#241;adir LAMA y valorar biologico. Via alternativa: corticoide inhalado cada vez que se usa el rescate en el paso 1, de mantenimiento en el 2, con LABA en el 3 y a dosis media o alta en el 4. NUNCA broncodilatador de accion corta en monoterapia. Antileucotrienos como alternativa de segunda linea, con la advertencia de efectos neuropsiquiatricos. Ver la Figura 2 de Definicion.',
      tx_intervencionista: 'Inmunoterapia sublingual con acaros en el paciente alergico sensibilizado con rinitis y FEV1 conservado. Termoplastia bronquial solo en el contexto de registros o ensayos, porque su beneficio es modesto y su seguridad a largo plazo no esta establecida.',
      criterios_uci: 'No aplica al paciente estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional en el asma; se plantea solo en el remodelado terminal, y antes hay que reconsiderar el diagnostico.',
      seguimiento_hospitalario: 'No aplica salvo ingreso por crisis.',
      seguimiento_ambulatorio: 'Revision a las 4 a 8 semanas del inicio o de un cambio, y despues cada 3 a 12 meses segun el control. En cada visita: control sintomatico o ACT, exacerbaciones y uso de rescate, tecnica del inhalador, adherencia, factores de riesgo y comorbilidades. Bajar de escalon tras 3 meses de buen control, reduciendo del 25 al 50% de la dosis y sin retirar del todo el corticoide inhalado.',
      pronostico: 'Con tratamiento adecuado la mayoria de los pacientes alcanzan un control que les permite una vida normal. Las muertes por asma son casi siempre evitables y se concentran en pacientes sin corticoide inhalado, con uso excesivo de rescate o con mala adherencia. El remodelado y el declive acelerado del FEV1 se asocian a exacerbaciones repetidas y a tabaquismo.',
      algoritmo: ['Historia compatible: sintomas variables, desencadenantes y antecedente atopico', 'Espirometria con prueba broncodilatadora ANTES de iniciar tratamiento', 'Si no es concluyente: flujo pico 2 semanas, ejercicio o provocacion bronquial', 'Confirmado el diagnostico, medir control y factores de riesgo futuro', 'Iniciar en la via preferida con corticoide inhalado y formoterol', 'Educar: plan de accion escrito y tecnica del inhalador con el dispositivo real', 'Revisar a las 4 a 8 semanas', 'Si no hay control: revisar diagnostico, tecnica, adherencia y comorbilidades ANTES de subir', 'Subir de escalon si todo lo anterior esta bien', 'Tras 3 meses controlada, bajar de escalon sin retirar el corticoide inhalado']
    },
    {
      nombre: 'Crisis asmatica',
      color: '#8c3a34',
      definicion: 'Empeoramiento agudo o subagudo de los sintomas y de la funcion pulmonar respecto al estado habitual del paciente, que obliga a cambiar el tratamiento. Puede presentarse de forma progresiva en dias o de forma brusca en horas.',
      fisiopatologia: 'Un desencadenante (virus respiratorio en la mayoria de los casos, alergeno, contaminante, antiinflamatorio o abandono del tratamiento) amplifica la inflamacion y produce broncoconstriccion, edema de la mucosa y tapones de moco. La obstruccion alarga el tiempo espiratorio y genera atrapamiento aereo con hiperinsuflacion dinamica y presion positiva teleespiratoria intrinseca, lo que aumenta el trabajo respiratorio. Al principio el paciente hiperventila y la PaCO2 baja; cuando el musculo se agota, la PaCO2 sube y aparece acidosis respiratoria. Ese es el motivo por el que una PaCO2 normal en plena crisis es un signo ominoso.',
      epidemiologia: 'Los virus respiratorios explican la mayoria de las crisis del adulto. Existe un fenotipo de crisis de instauracion rapida, mas frecuente en varones, desencadenada por alergenos o antiinflamatorios, con mayor gravedad inicial pero mejor respuesta al tratamiento. Alrededor del 10 al 20% de los pacientes atendidos en urgencias recaen en las 2 semanas siguientes, casi siempre por alta sin corticoide.',
      factores_riesgo: ['Intubacion o ingreso en cuidados intensivos por asma en cualquier momento', 'Ingreso o visita a urgencias por asma en el ultimo a&#241;o', 'Uso actual o reciente de corticoide oral', 'No usar corticoide inhalado o usarlo con mala adherencia', 'Consumo de mas de un envase de rescate al mes', 'Alergia alimentaria confirmada', 'Problemas psicosociales o enfermedad psiquiatrica', 'Tabaquismo activo y exposicion continuada al alergeno', 'Comorbilidad: rinosinusitis, reflujo, obesidad, apnea del sue&#241;o', 'Ausencia de plan de accion escrito'],
      clinica: 'Disnea, tos, sibilancias y opresion progresivas, con caida del flujo pico. Taquipnea, taquicardia, uso de musculatura accesoria y dificultad para hablar. Signos de riesgo vital: somnolencia, confusion, agotamiento, torax silente y bradicardia. El pulso paradojico marcado apoya la gravedad pero su ausencia no la descarta.',
      criterios_dx: 'Clinico, en un paciente con asma conocida o compatible, tras descartar los imitadores. La gravedad se establece con la capacidad de hablar, la postura, la frecuencia respiratoria y cardiaca, la saturacion y el flujo pico en porcentaje del mejor valor personal. Ver la Figura 3 de Definicion.',
      laboratorio: 'Gasometria solo si la saturacion es menor del 90%, hay agotamiento o mala respuesta: se espera PaCO2 baja, y una cifra normal o alta es alarma. Potasio, que baja con el salbutamol repetido. Hemograma y proteina C reactiva solo si se sospecha infeccion bacteriana.',
      imagen: 'Radiografia de torax NO de rutina: solo si hay fiebre, dolor toracico, asimetria en la auscultacion, sospecha de neumotorax o mala respuesta al tratamiento. Ecografia pulmonar a pie de cama para descartar neumotorax con rapidez.',
      complementarios: 'Medida del flujo pico al llegar y tras el tratamiento, que es el mejor indicador objetivo de respuesta. Monitorizacion de saturacion. Electrocardiograma en el paciente mayor o con taquicardia extrema.',
      dx_diferencial: 'Insuficiencia cardiaca (asma cardiaca), embolia pulmonar, neumonia, neumotorax, anafilaxia (que exige adrenalina intramuscular inmediata), disfuncion de cuerdas vocales, aspiracion de cuerpo extra&#241;o y obstruccion de la via aerea superior.',
      tx_medico: 'Broncodilatador de accion corta repetido: salbutamol en camara espaciadora con inhalador presurizado (tan eficaz como el nebulizador en la crisis no grave) o nebulizado. OXIGENO CONTROLADO con objetivo de saturacion del 93 al 95% en el adulto. Ipratropio a&#241;adido en la crisis grave. Posicion sentada, monitorizacion y reevaluacion frecuente. NO antibiotico de rutina, NO sedantes, NO aminofilina.',
      tx_farmacologico: 'CORTICOIDE SISTEMICO en la primera hora en practicamente todas las crisis: prednisona 40 a 50 mg al dia durante 5 a 7 dias, sin necesidad de pauta descendente. La via oral es tan eficaz como la intravenosa si el paciente tolera. SULFATO DE MAGNESIO 2 g intravenosos en 20 minutos en la crisis grave que no responde al tratamiento inicial. Continuar o iniciar el corticoide inhalado desde el mismo dia.',
      tx_intervencionista: 'Ventilacion no invasiva con precaucion y solo en manos expertas, porque la evidencia es debil y puede retrasar una intubacion necesaria. Intubacion si hay agotamiento, deterioro del nivel de conciencia, hipoxemia refractaria o parada: se ventila con volumen bajo, frecuencia baja y tiempo espiratorio largo, aceptando hipercapnia permisiva para evitar el barotrauma. Ketamina como inductor por su efecto broncodilatador.',
      criterios_uci: 'Signos de riesgo vital (somnolencia, confusion, torax silente), PaCO2 normal o en ascenso, hipoxemia que no corrige, agotamiento, necesidad de ventilacion o falta de respuesta al tratamiento maximo. Se avisa pronto: en el asma el deterioro puede ser muy rapido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion clinica y de flujo pico tras cada tanda de broncodilatador. Vigilar potasio y lactato con salbutamol repetido. Antes del alta: flujo pico mayor del 60 al 80% del mejor personal, estabilidad al menos 1 hora tras el ultimo broncodilatador y saturacion adecuada en aire ambiente.',
      seguimiento_ambulatorio: 'Cita en 2 a 7 dias. Revisar por que ocurrio la crisis, ajustar al alza el tratamiento de fondo, entregar plan de accion escrito, comprobar la tecnica del inhalador y valorar derivacion si hubo criterios de gravedad o es una crisis repetida.',
      pronostico: 'La mayoria de las crisis se resuelven, pero cada una identifica a un paciente en riesgo: el antecedente de crisis grave es el mejor predictor de la siguiente y de la muerte por asma. La mortalidad hospitalaria es baja, y practicamente todas las muertes por asma se consideran evitables.',
      algoritmo: ['Valorar gravedad: habla, postura, frecuencias, saturacion y flujo pico', 'Descartar anafilaxia, neumotorax y los demas imitadores', 'Salbutamol repetido en camara o nebulizado, con ipratropio si es grave', 'Oxigeno controlado con objetivo del 93 al 95%', 'Corticoide sistemico en la PRIMERA HORA: 40 a 50 mg de prednisona', 'Reevaluar a la hora con flujo pico y clinica', 'Si no responde y es grave: sulfato de magnesio 2 g intravenosos', 'Gasometria si hay agotamiento: una PaCO2 normal o alta es alarma', 'Avisar a cuidados intensivos ante signos de riesgo vital', 'Al alta: corticoide inhalado, corticoide oral 5 a 7 dias, plan escrito y cita en 2 a 7 dias']
    },
    {
      nombre: 'Asma grave y biologicos',
      color: '#5b4a86',
      definicion: 'Asma que requiere dosis altas de corticoide inhalado con un segundo controlador, o corticoide oral, durante el a&#241;o previo para mantenerse controlada, o que permanece sin control pese a ese tratamiento, una vez confirmadas la adherencia y la tecnica.',
      fisiopatologia: 'En la mayoria de los casos hay una inflamacion tipo 2 persistente e intensa, dirigida por interleucinas 4, 5, 13, IgE y linfocitos innatos, que se autoperpetua y resiste al corticoide. En un subgrupo menor la inflamacion es neutrofilica o escasa, asociada a obesidad, tabaco o infeccion, y responde mal al corticoide por mucho que se aumente la dosis: subir la dosis en ese fenotipo solo a&#241;ade efectos adversos. El remodelado estructural contribuye a la obstruccion fija.',
      epidemiologia: 'Del 3 al 10% de los asmaticos, pero consumen una proporcion desmesurada del gasto y de los ingresos. La mayoria de los pacientes remitidos como graves resultan tener asma de dificil control por causas corregibles. La exposicion acumulada a corticoide oral en este grupo produce una carga notable de osteoporosis, diabetes, cataratas e insuficiencia suprarrenal.',
      factores_riesgo: ['Inflamacion tipo 2 persistente con eosinofilia', 'Poliposis nasosinusal y rinosinusitis cronica', 'Enfermedad respiratoria exacerbada por antiinflamatorios', 'Obesidad y apnea obstructiva del sue&#241;o', 'Tabaquismo activo o pasado', 'Exposicion laboral o domestica continuada al sensibilizante', 'Reflujo gastroesofagico y disfuncion de cuerdas vocales', 'Ansiedad, depresion y bajo apoyo social', 'Aspergilosis broncopulmonar alergica', 'Uso mantenido de corticoide oral'],
      clinica: 'Sintomas diarios, despertares frecuentes, limitacion importante de la actividad, exacerbaciones repetidas y dependencia de corticoide oral, pese a un tratamiento inhalado a dosis altas. Con frecuencia se acompa&#241;a de las manifestaciones de las comorbilidades tipo 2: rinosinusitis con poliposis, anosmia y dermatitis atopica.',
      criterios_dx: 'Criterios ERS/ATS, aplicados en ORDEN: primero confirmar que el diagnostico de asma es correcto, despues comprobar adherencia y tecnica y tratar las comorbilidades, y solo entonces etiquetar de asma grave. Saltarse ese orden convierte un asma mal tratada en un candidato a biologico.',
      laboratorio: 'Eosinofilos en sangre, IgE total y especifica, oxido nitrico exhalado y, si se dispone, eosinofilos en esputo. Se miden SIN corticoide sistemico. Precipitinas frente a Aspergillus y anticuerpos anticitoplasma de neutrofilo para descartar aspergilosis alergica y granulomatosis eosinofilica con poliangeitis.',
      imagen: 'Tomografia de torax de alta resolucion para descartar bronquiectasias, aspergilosis alergica y otros diagnosticos. Tomografia de senos para valorar la poliposis.',
      complementarios: 'Verificacion objetiva de la adherencia mediante registros de dispensacion. Grabacion o demostracion de la tecnica inhalatoria. Laringoscopia si se sospecha disfuncion de cuerdas vocales. Estudio de sue&#241;o si hay sospecha de apnea. Densitometria y cribado de efectos del corticoide en el paciente dependiente.',
      dx_diferencial: 'Asma de dificil control por causa corregible (la situacion mas frecuente), disfuncion de cuerdas vocales, EPOC, bronquiectasias, aspergilosis broncopulmonar alergica, granulomatosis eosinofilica con poliangeitis, sindrome de hiperventilacion, insuficiencia cardiaca y traqueobroncomalacia.',
      tx_medico: 'Programa estructurado en unidad especializada. Tratar la rinosinusitis y la poliposis, el reflujo sintomatico, la obesidad, la apnea del sue&#241;o y la ansiedad. Retirar el sensibilizante laboral. Rehabilitacion y entrenamiento respiratorio. Educacion intensiva con plan de accion.',
      tx_farmacologico: 'Optimizar el escalon 5: dosis altas de corticoide inhalado con LABA, a&#241;adir LAMA, valorar antileucotrieno. BIOLOGICO segun el fenotipo: omalizumab en el asma alergica con IgE en rango; mepolizumab, reslizumab o benralizumab en la eosinofilica de inicio tardio; dupilumab si hay poliposis, dermatitis atopica, esofagitis eosinofilica o dependencia de corticoide oral; tezepelumab si no hay un fenotipo tipo 2 claro, porque es el unico eficaz tambien con eosinofilos bajos. Ver la Figura 4 de Definicion. El corticoide oral de mantenimiento es el ultimo recurso y se retira despues de que el biologico funcione, de forma lenta y vigilando la insuficiencia suprarrenal.',
      tx_intervencionista: 'Termoplastia bronquial solo dentro de registros o ensayos. Cirugia endoscopica nasosinusal en la poliposis refractaria, que puede mejorar de forma llamativa el control del asma. Inmunoterapia con alergenos en casos seleccionados con FEV1 conservado.',
      criterios_uci: 'Los mismos de cualquier crisis grave; este grupo concentra las crisis de riesgo vital.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Excepcional. Antes de plantearlo hay que reconsiderar el diagnostico y descartar bronquiectasias y otras enfermedades de la via aerea.',
      seguimiento_hospitalario: 'En el ingreso, revisar todo el arbol: diagnostico, adherencia, tecnica, comorbilidades y necesidad de biologico. Un ingreso en un asmatico grave es una oportunidad para reordenar el tratamiento completo.',
      seguimiento_ambulatorio: 'Revision del biologico a los 4 meses y, si la respuesta es parcial, a los 6 a 12: exacerbaciones, dosis de corticoide oral, control y funcion pulmonar. Si no responde, cambiar de biologico antes de darlo por fracasado. Vigilancia de los efectos del corticoide acumulado.',
      pronostico: 'Los biologicos han cambiado el pronostico de este grupo: reducen a la mitad o mas las exacerbaciones y permiten retirar el corticoide oral en una proporcion importante de pacientes. El riesgo de crisis de riesgo vital persiste y justifica el plan de accion y el seguimiento estrecho.',
      algoritmo: ['Confirmar que el diagnostico de asma es correcto', 'Comprobar adherencia con registros de dispensacion y tecnica con el dispositivo real', 'Buscar y tratar comorbilidades: poliposis, reflujo, obesidad, apnea, ansiedad', 'Retirar exposiciones: tabaco, alergeno, sensibilizante laboral', 'Solo entonces, etiquetar de asma grave y optimizar el escalon 5', 'Medir biomarcadores tipo 2 SIN corticoide sistemico', 'Elegir el biologico segun el fenotipo y las comorbilidades tipo 2', 'Revaluar la respuesta a los 4 meses', 'Si no responde, cambiar de biologico antes de darlo por fracasado', 'Retirar el corticoide oral despues, de forma lenta y vigilando el eje suprarrenal']
    },
    {
      nombre: 'Asma ocupacional',
      color: '#8a6a1f',
      definicion: 'Asma causada por una exposicion presente en el lugar de trabajo. Se distingue del asma preexistente agravada por el trabajo, en la que el trabajo empeora un asma que ya existia, y ambas se agrupan como asma relacionada con el trabajo.',
      fisiopatologia: 'Dos mecanismos. El sensibilizante, mucho mas frecuente, requiere un periodo de latencia de meses o a&#241;os durante el cual el sistema inmunitario se sensibiliza a un agente de alto peso molecular (harina, latex, enzimas, animales de laboratorio) por via IgE, o de bajo peso molecular (isocianatos, resinas epoxi, persulfatos de peluqueria, maderas) por mecanismos no siempre IgE dependientes. El irritante, sin latencia, aparece tras una exposicion masiva unica a un irritante y da el sindrome de disfuncion reactiva de la via aerea.',
      epidemiologia: 'Explica del 10 al 25% de los casos de asma de inicio en el adulto, y se diagnostica tarde o no se diagnostica. Los sectores clasicos son la panaderia, la sanidad (latex y desinfectantes), la peluqueria, la pintura y el aislamiento con isocianatos, la industria de la madera y la agricultura y ganaderia.',
      factores_riesgo: ['Atopia, sobre todo para los sensibilizantes de alto peso molecular', 'Tabaquismo, que aumenta el riesgo con varios agentes', 'Intensidad y duracion de la exposicion', 'Ausencia de proteccion respiratoria adecuada', 'Trabajo en panaderia, sanidad, peluqueria, pintura, madera o agricultura', 'Exposicion accidental masiva a un irritante', 'Rinitis ocupacional previa, que suele preceder al asma', 'Predisposicion genetica para algunos agentes de bajo peso molecular', 'Cambio reciente de puesto o de proceso productivo', 'Trabajo en peque&#241;as empresas sin vigilancia de la salud'],
      clinica: 'Asma de inicio en la edad adulta cuyos sintomas mejoran en vacaciones y fines de semana y reaparecen al volver al trabajo. Ese patron es la clave, pero se pierde cuando la enfermedad avanza, porque la inflamacion tarda cada vez mas en revertir. Suele ir precedida de rinitis y conjuntivitis ocupacionales, que son la se&#241;al de alarma temprana.',
      criterios_dx: 'Asma confirmada MAS relacion demostrada con el trabajo. La pregunta que hay que hacer a todo asmatico de inicio adulto es simple: mejora usted cuando no va a trabajar? La confirmacion se apoya en registros seriados de flujo pico dentro y fuera del trabajo durante al menos 2 semanas en cada periodo, pruebas inmunologicas frente al agente y, en centros expertos, provocacion especifica.',
      laboratorio: 'IgE especifica y pruebas cutaneas frente al agente sospechoso cuando existen, sobre todo en los de alto peso molecular. Eosinofilos y oxido nitrico exhalado, que pueden subir tras el periodo laboral y bajar tras el descanso.',
      imagen: 'Radiografia de torax para excluir otras enfermedades ocupacionales. Tomografia si se sospecha neumonitis por hipersensibilidad, que comparte exposiciones y se confunde con el asma ocupacional.',
      complementarios: 'Registro seriado de flujo pico cuatro veces al dia, en periodo laboral y en periodo de descanso, que es la prueba mas util y accesible. Provocacion bronquial especifica en centro especializado como referencia diagnostica. Espirometrias comparadas antes y despues de la jornada.',
      dx_diferencial: 'Asma no ocupacional coincidente, neumonitis por hipersensibilidad, bronquiolitis por irritantes, disfuncion de cuerdas vocales inducida por irritantes, sindrome de sensibilidad quimica multiple y rinitis ocupacional aislada.',
      tx_medico: 'RETIRAR LA EXPOSICION es el tratamiento, y cuanto antes mejor: la probabilidad de remision cae con cada a&#241;o de exposicion continuada tras el inicio de los sintomas. Cuando la retirada completa no es posible, reducir la exposicion y usar proteccion respiratoria adecuada, sabiendo que es una solucion peor. Notificar como enfermedad profesional y coordinar con salud laboral, porque el paciente afronta consecuencias economicas que condicionan la decision.',
      tx_farmacologico: 'El mismo tratamiento escalonado del asma, que no sustituye a la retirada de la exposicion. En el asma por irritantes, el corticoide inhalado precoz y a dosis suficientes es el pilar.',
      tx_intervencionista: 'No aplica de forma especifica.',
      criterios_uci: 'Los de cualquier crisis grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Sin particularidades frente al asma comun.',
      seguimiento_ambulatorio: 'Espirometria y control sintomatico periodicos tras la retirada, que puede tardar meses o a&#241;os en mejorar y a veces no revierte. Vigilancia de compa&#241;eros expuestos al mismo agente, porque un caso indice suele significar mas casos en el mismo puesto.',
      pronostico: 'La retirada precoz es lo unico que se asocia a remision. Con exposicion prolongada tras el inicio de los sintomas, la hiperreactividad y la obstruccion pueden persistir de forma indefinida pese a la retirada.',
      algoritmo: ['Preguntar a TODO asmatico de inicio adulto por su trabajo', 'Preguntar si mejora en vacaciones y fines de semana', 'Identificar el agente sospechoso y el sector de riesgo', 'Registro seriado de flujo pico en periodo laboral y de descanso', 'IgE especifica o pruebas cutaneas si el agente lo permite', 'Provocacion especifica en centro experto si persiste la duda', 'Retirar la exposicion cuanto antes: es el tratamiento', 'Tratar el asma con el escalonado habitual', 'Notificar como enfermedad profesional y coordinar con salud laboral', 'Vigilar a los compa&#241;eros expuestos al mismo agente']
    },
    {
      nombre: 'Enfermedad respiratoria exacerbada por antiinflamatorios',
      color: '#2e6b7a',
      definicion: 'Triada de asma, poliposis nasosinusal y reacciones respiratorias tras la toma de acido acetilsalicilico o de otros antiinflamatorios inhibidores de la ciclooxigenasa 1. Se conoce tambien como triada de Samter o de Widal.',
      fisiopatologia: 'No es una alergia: es una alteracion del metabolismo del acido araquidonico. Los pacientes tienen una sobreproduccion basal de cisteinil-leucotrienos y una menor produccion de prostaglandina E2, que normalmente frena esa via. Al inhibir la ciclooxigenasa 1 se retira ese freno y el sustrato se desvia masivamente hacia los leucotrienos, con broncoconstriccion y sintomas nasales intensos en menos de 3 horas. Por eso la reaccion aparece con CUALQUIER inhibidor de la ciclooxigenasa 1 y no con los inhibidores selectivos de la ciclooxigenasa 2, y por eso las pruebas de alergia son inutiles.',
      epidemiologia: 'Afecta a cerca del 7% de los asmaticos adultos y hasta al 15% de los que tienen asma grave. Es mas frecuente en mujeres y de inicio en la tercera o cuarta decada. La secuencia tipica es rinitis persistente con anosmia, despues poliposis, despues asma, y por ultimo la reaccion a los antiinflamatorios.',
      factores_riesgo: ['Poliposis nasosinusal, sobre todo recidivante tras cirugia', 'Rinosinusitis cronica con anosmia', 'Asma de inicio en la edad adulta', 'Sexo femenino', 'Eosinofilia en sangre y en tejido nasal', 'Antecedente de reaccion previa a antiinflamatorios', 'Consumo de alcohol que desencadena sintomas nasales', 'Asma grave dependiente de corticoide', 'Cirugia nasosinusal repetida', 'Historia familiar en algunos casos'],
      clinica: 'Rinorrea, obstruccion nasal intensa, anosmia y broncoespasmo en las 3 horas siguientes a la toma del antiinflamatorio, a veces con eritema facial y sintomas digestivos. La reaccion puede ser grave y ha causado crisis de riesgo vital e ingresos en cuidados intensivos. Fuera de las reacciones, predomina un asma persistente con poliposis recidivante y anosmia muy incapacitante.',
      criterios_dx: 'Clinico ante la triada. La confirmacion cuando hace falta es la PROVOCACION controlada con acido acetilsalicilico (oral, bronquial o nasal) en centro experto y con el asma estable: no existe ninguna prueba in vitro ni cutanea que lo diagnostique, y ese es un punto que se pregunta y se falla con frecuencia.',
      laboratorio: 'Eosinofilia en sangre, habitualmente marcada. IgE total variable y sin valor diagnostico. Los leucotrienos urinarios estan elevados pero no se usan en la practica clinica habitual.',
      imagen: 'Tomografia de senos paranasales con poliposis extensa y ocupacion difusa, tipicamente mas grave que en la poliposis sin sensibilidad a antiinflamatorios. Radiografia o tomografia de torax segun el asma.',
      complementarios: 'Endoscopia nasal, prueba de olfato y valoracion por otorrinolaringologia. Registro escrito y visible en la historia de la contraindicacion farmacologica, que es una medida de seguridad de primer orden.',
      dx_diferencial: 'Urticaria y angioedema por antiinflamatorios (mecanismo y manejo distintos), alergia IgE mediada a un antiinflamatorio concreto (que permite usar otros de familia diferente), poliposis nasosinusal sin sensibilidad, granulomatosis eosinofilica con poliangeitis y mastocitosis.',
      tx_medico: 'EVITAR todos los inhibidores de la ciclooxigenasa 1. El paracetamol a dosis bajas y los inhibidores selectivos de la ciclooxigenasa 2 suelen tolerarse, y la primera toma conviene hacerla supervisada. Tratamiento intensivo de la rinosinusitis con corticoide nasal y lavados. Evitar el alcohol si lo desencadena.',
      tx_farmacologico: 'Antileucotrienos (montelukast, zafirlukast) o zileuton, que actuan sobre la via responsable y suelen dar mejor respuesta que en el asma comun. Corticoide inhalado y nasal a dosis suficientes. En la enfermedad refractaria, DUPILUMAB es especialmente eficaz porque actua a la vez sobre el asma y sobre la poliposis; tambien se usan mepolizumab, benralizumab y omalizumab.',
      tx_intervencionista: 'Cirugia endoscopica nasosinusal para la poliposis, sabiendo que la recidiva es la norma sin tratamiento medico posterior. DESENSIBILIZACION con acido acetilsalicilico y mantenimiento con dosis diaria en centro experto: reduce la recidiva de los polipos y mejora el asma, y es la unica intervencion que modifica el curso natural de la enfermedad.',
      criterios_uci: 'Las reacciones tras la toma pueden ser graves y requerir cuidados intensivos, con los mismos criterios que cualquier crisis de riesgo vital.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Si ingresa por una reaccion, revisar la lista de farmacos, dejar la contraindicacion registrada de forma visible y planificar el seguimiento conjunto con otorrinolaringologia.',
      seguimiento_ambulatorio: 'Seguimiento compartido entre neumologia o alergologia y otorrinolaringologia. Control del olfato y de la poliposis, revaluacion periodica de la necesidad de biologico y de desensibilizacion.',
      pronostico: 'Es una enfermedad persistente que no remite espontaneamente, con asma que tiende a ser mas grave que la media y poliposis con alta tasa de recidiva. La desensibilizacion y los biologicos han mejorado sustancialmente ese panorama.',
      algoritmo: ['Sospechar ante asma del adulto con poliposis y anosmia', 'Preguntar de forma explicita por reacciones a antiinflamatorios y por el alcohol', 'No pedir pruebas de alergia: no sirven para este diagnostico', 'Confirmar con provocacion controlada solo si es necesario y en centro experto', 'Registrar la contraindicacion de forma visible en la historia', 'Ofrecer paracetamol a dosis bajas o inhibidor selectivo de la ciclooxigenasa 2, la primera toma supervisada', 'Tratamiento intensivo de la rinosinusitis con corticoide nasal', 'A&#241;adir antileucotrieno al tratamiento del asma', 'Valorar dupilumab si hay asma grave con poliposis', 'Valorar desensibilizacion con acido acetilsalicilico en centro experto']
    },
    {
      nombre: 'Situaciones especiales: embarazo, ejercicio y solapamiento con EPOC',
      color: '#6b4a2e',
      definicion: 'Tres escenarios frecuentes que cambian decisiones concretas del manejo del asma sin cambiar sus principios: el embarazo, la broncoconstriccion inducida por ejercicio y la coexistencia de asma y EPOC en el mismo paciente.',
      fisiopatologia: 'En el embarazo, los cambios hormonales, mecanicos e inmunitarios modifican el curso del asma de forma impredecible, y la hipoxemia materna compromete directamente la oxigenacion fetal. En el ejercicio, la perdida de agua y calor por la hiperventilacion produce hiperosmolaridad de la superficie de la via aerea y liberacion de mediadores, con broncoconstriccion que llega a su maximo 5 a 15 minutos DESPUES de terminar el esfuerzo. En el solapamiento con EPOC coexisten la inflamacion eosinofilica variable del asma y la obstruccion fija de la EPOC, con peor pronostico que cualquiera de las dos por separado.',
      epidemiologia: 'El asma complica del 4 al 8% de los embarazos, y la regla clasica es que alrededor de un tercio mejora, un tercio empeora y un tercio no cambia. La broncoconstriccion por ejercicio afecta a la mayoria de los asmaticos mal controlados y a un porcentaje notable de deportistas de resistencia sin asma diagnosticada. La coexistencia de asma y EPOC aparece en el 15 al 25% de los pacientes obstructivos de mas de 40 a&#241;os.',
      factores_riesgo: ['Asma mal controlada antes del embarazo', 'Abandono del corticoide inhalado por miedo infundado al farmaco', 'Infeccion respiratoria en el segundo trimestre', 'Deporte de resistencia en aire frio, seco o clorado', 'Ausencia de calentamiento previo al esfuerzo', 'Tabaquismo en el asmatico de larga evolucion', 'Asma de inicio en la infancia con exposicion tabaquica posterior', 'Exposicion laboral a irritantes en el asmatico', 'Obesidad, que empeora las tres situaciones', 'Contaminacion atmosferica'],
      clinica: 'En el embarazo, el empeoramiento se concentra en el segundo y tercer trimestre y suele mejorar en el ultimo mes; el parto rara vez se acompa&#241;a de crisis. En el ejercicio, tos, sibilancias y opresion que aparecen al terminar el esfuerzo y ceden en 30 a 60 minutos, con periodo refractario posterior. En el solapamiento, obstruccion no del todo reversible en un paciente con historia de asma, atopia o eosinofilia, y con mayor carga sintomatica y mas exacerbaciones.',
      criterios_dx: 'En el embarazo, el mismo diagnostico del asma, evitando pruebas de provocacion. En el ejercicio, caida del FEV1 mayor del 10% y de mas de 200 mL tras esfuerzo estandarizado. En el solapamiento no hay criterios formales: GINA ha abandonado el termino de sindrome de solapamiento y recomienda describirlo como asma mas EPOC, y tratar primero el componente asmatico.',
      laboratorio: 'En el embarazo, evitar pruebas innecesarias y vigilar la saturacion, con umbral bajo para gasometria en la crisis. En el solapamiento, eosinofilos en sangre para guiar el corticoide inhalado. En el ejercicio, no se necesita analitica.',
      imagen: 'En el embarazo, la radiografia de torax NO esta contraindicada si es necesaria: con proteccion abdominal la dosis fetal es despreciable y el riesgo de no diagnosticar una neumonia es mucho mayor. En el solapamiento, tomografia para valorar enfisema y bronquiectasias.',
      complementarios: 'En el embarazo, control conjunto con obstetricia y monitorizacion fetal durante la crisis. En el ejercicio, prueba de esfuerzo con espirometrias seriadas. En el solapamiento, DLCO y volumenes pulmonares para caracterizar el componente enfisematoso.',
      dx_diferencial: 'En el embarazo: embolia pulmonar (cuyo riesgo esta aumentado), miocardiopatia periparto, reflujo y disnea fisiologica del embarazo. En el ejercicio: disfuncion de cuerdas vocales inducida por el esfuerzo, falta de forma fisica, anemia y cardiopatia. En el solapamiento: bronquiectasias e insuficiencia cardiaca.',
      tx_medico: 'EMBARAZO: mantener el tratamiento, porque el riesgo de una crisis para el feto supera con mucho al de los farmacos, vacunacion antigripal, abandono del tabaco y control estrecho. EJERCICIO: calentamiento progresivo de 10 a 15 minutos, respirar por la nariz o usar mascara en aire frio, y mejorar el control de fondo, que suele ser la verdadera causa. SOLAPAMIENTO: abandono del tabaco, rehabilitacion y vacunacion.',
      tx_farmacologico: 'EMBARAZO: continuar corticoide inhalado, LABA y, si se precisa, corticoide sistemico en la crisis; se prefieren los farmacos con mas experiencia acumulada, y NO se suspende nada por el hecho del embarazo. EJERCICIO: broncodilatador de accion corta o corticoide inhalado con formoterol 10 a 15 minutos antes del esfuerzo, mas tratamiento de fondo con corticoide inhalado; el antileucotrieno es alternativa. SOLAPAMIENTO: el corticoide inhalado NO se retira nunca por el componente asmatico, y sobre el se a&#241;ade la doble broncodilatacion.',
      tx_intervencionista: 'No aplica de forma especifica en ninguna de las tres situaciones.',
      criterios_uci: 'En el embarazo, umbral MAS BAJO para vigilancia estrecha: la reserva materna es menor y el feto tolera mal la hipoxemia. El objetivo de saturacion en la gestante es del 94 al 98%, mas alto que en la asmatica no gestante.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En la gestante con crisis, monitorizacion fetal y contacto con obstetricia desde el principio. En el solapamiento, revisar que no se haya retirado el corticoide inhalado por etiquetar al paciente solo de EPOC.',
      seguimiento_ambulatorio: 'Embarazo: revision mensual del control, con espirometria o flujo pico. Ejercicio: comprobar que la profilaxis funciona y revisar el control de fondo si sigue apareciendo. Solapamiento: seguimiento con criterios de las dos enfermedades y vigilancia de la comorbilidad cardiovascular.',
      pronostico: 'El asma bien controlada en el embarazo no aumenta el riesgo obstetrico; el asma mal controlada si lo hace, con prematuridad, bajo peso y preeclampsia. La broncoconstriccion por ejercicio es controlable en casi todos los casos y no debe impedir el deporte. El solapamiento tiene peor pronostico funcional y mas exacerbaciones que el asma o la EPOC aisladas.',
      algoritmo: ['Embarazo: NO suspender el corticoide inhalado, explicar el balance de riesgos', 'Embarazo: objetivo de saturacion del 94 al 98% en la crisis y umbral bajo de ingreso', 'Embarazo: revision mensual y vacunacion antigripal', 'Ejercicio: confirmar con prueba de esfuerzo si hay duda', 'Ejercicio: calentar 10 a 15 minutos y usar broncodilatador antes del esfuerzo', 'Ejercicio: si persiste, el problema suele ser el control de fondo', 'Solapamiento: tratar primero el componente asmatico', 'Solapamiento: NUNCA dejar al paciente sin corticoide inhalado', 'Solapamiento: a&#241;adir doble broncodilatacion sobre el corticoide inhalado', 'En las tres: revisar tecnica del inhalador y plan de accion escrito']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El ingreso por crisis asmatica es breve y aparentemente sencillo, y precisamente por eso concentra los errores mas caros del tema. Casi todas las muertes por asma se consideran evitables, y buena parte de lo evitable se decide en la hora del alta. Lo que sigue es la lista de comprobacion del ingreso y del alta.',
    parametros: ['Valorar la gravedad con capacidad de hablar, postura, frecuencias, saturacion y flujo pico, no a ojo', 'Objetivo de saturacion del 93 al 95% en el adulto, y del 94 al 98% en la gestante', 'Corticoide sistemico en la PRIMERA HORA: prednisona 40 a 50 mg, 5 a 7 dias, sin pauta descendente', 'Salbutamol repetido, en camara espaciadora o nebulizado, con ipratropio a&#241;adido si la crisis es grave', 'Sulfato de magnesio 2 g intravenosos en 20 minutos si la crisis grave no responde al tratamiento inicial', 'Gasometria solo si hay agotamiento, saturacion menor del 90% o mala respuesta: una PaCO2 normal o alta es SIGNO DE ALARMA', 'Radiografia solo si hay fiebre, dolor, asimetria o mala respuesta; no de rutina', 'No dar antibiotico de rutina, no sedar y no usar aminofilina', 'Vigilar el potasio y el lactato con salbutamol repetido a dosis altas', 'Antes del alta: flujo pico mayor del 60 al 80% del mejor personal y estabilidad al menos 1 hora tras el ultimo broncodilatador', 'Antes del alta, SIEMPRE: corticoide inhalado iniciado o subido, plan de accion escrito, tecnica del inhalador comprobada y cita en 2 a 7 dias'],
    criterios_uci_general: 'Somnolencia, confusion o torax silente; PaCO2 normal o en ascenso en plena crisis; hipoxemia que no corrige; agotamiento del paciente; necesidad de ventilacion; o falta de respuesta al tratamiento maximo. En el asma el deterioro puede ser muy rapido, de modo que el aviso se hace pronto y no cuando ya no queda margen.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma practica. Un asma que parece candidata a trasplante obliga antes a reconsiderar el diagnostico y a descartar bronquiectasias y otras enfermedades de la via aerea.',
    prevencion: 'Primaria: evitar el tabaquismo materno y la exposicion pasiva en la infancia, reducir la contaminacion y la exposicion laboral a sensibilizantes, y proteger el desarrollo pulmonar. Secundaria: diagnostico objetivo temprano con espirometria antes de tratar, retirada precoz de la exposicion en el asma ocupacional, y busqueda activa del asma en el adulto con tos o disnea recurrentes. Terciaria, que es donde mas se gana: corticoide inhalado en TODO asmatico, abandono del broncodilatador de accion corta en monoterapia, plan de accion escrito, revision de la tecnica del inhalador en cada visita, vacunacion, tratamiento de las comorbilidades y cita precoz tras cada crisis.'
  }
};

export const compCites = {
  'Asma': [1, 2, 3, 6],
  'Crisis asmatica': [13, 14, 1],
  'Asma grave y biologicos': [8, 9, 10, 11, 12, 18],
  'Asma ocupacional': [15],
  'Enfermedad respiratoria exacerbada por antiinflamatorios': [16, 11],
  'Situaciones especiales: embarazo, ejercicio y solapamiento con EPOC': [17, 1]
};
export const estigmasTitulo = 'Signos y datos de la exploracion en el asma, del mas frecuente al de mayor gravedad';
export const estigmas = [
  { s: 'Sibilancias espiratorias difusas', p: 'Frecuentes, pero no constantes', photo: null, desc: 'Son el signo clasico y a la vez el mas malinterpretado. Pueden faltar por completo entre episodios y su intensidad NO se correlaciona con la gravedad: en la crisis grave el flujo es tan bajo que las sibilancias disminuyen o desaparecen.' },
  { s: 'Espiracion alargada', p: 'En crisis y en asma mal controlada', photo: null, desc: 'Traduce la limitacion al flujo espiratorio. Junto con la caida del flujo pico es de los datos mas fiables a pie de cama para estimar la obstruccion cuando no hay espirometro disponible.' },
  { s: 'Tos seca nocturna o de madrugada', p: '~60%', photo: null, desc: 'El ritmo circadiano del tono broncomotor y del cortisol explica el predominio nocturno. En la variante tusigena del asma puede ser el UNICO sintoma durante a&#241;os, y es una causa clasica de tos cronica mal etiquetada.' },
  { s: 'Uso de musculatura accesoria y tiraje', p: 'En crisis moderada y grave', photo: null, desc: 'Esternocleidomastoideos y escalenos visibles, con tiraje supraesternal e intercostal. Es de los primeros signos objetivos de crisis grave y aparece antes de que caiga la saturacion.' },
  { s: 'Incapacidad para completar frases', p: 'Crisis grave', photo: null, desc: 'Se explora con una pregunta abierta y escuchando: si el paciente contesta con palabras sueltas en vez de frases, la crisis es grave. Es un signo que no necesita ningun aparato y que ordena el tratamiento de inmediato.' },
  { s: 'Taquipnea mayor de 30 y taquicardia mayor de 120', p: 'Crisis grave', photo: null, desc: 'Entran en la clasificacion de gravedad. La taquicardia se debe a la propia crisis y al salbutamol; su descenso durante el tratamiento es un buen indicador de respuesta, mientras que la bradicardia en plena crisis anuncia la parada.' },
  { s: 'Pulso paradojico marcado', p: '~30% en crisis grave', photo: null, desc: 'Caida de la presion sistolica mayor de 10 mmHg en inspiracion por las grandes oscilaciones de presion intratoracica. Su presencia apoya la gravedad, pero su ausencia no la descarta y su medida es poco fiable en el paciente agitado.' },
  { s: 'Torax silente', p: 'Riesgo vital', photo: null, desc: 'La ausencia de sibilancias en un paciente que empeora NO es mejoria: significa que no se esta moviendo aire suficiente para producirlas. Es uno de los signos de riesgo vital y obliga a avisar a cuidados intensivos de inmediato.' },
  { s: 'Somnolencia, confusion o agitacion extrema', p: 'Riesgo vital', photo: null, desc: 'Traducen hipoxemia grave, hipercapnia y agotamiento. Junto con el torax silente y la bradicardia definen la crisis de riesgo vital. La somnolencia en un asmatico en crisis nunca se interpreta como que el paciente se ha tranquilizado.' },
  { s: 'Poliposis nasal y anosmia', p: '~7% de los asmaticos adultos', photo: null, desc: 'Orientan al fenotipo tipo 2 y a la enfermedad respiratoria exacerbada por antiinflamatorios. Buscarlos cambia el tratamiento (antileucotrieno, dupilumab, desensibilizacion) y evita una reaccion grave por un analgesico prescrito sin preguntar.' },
  { s: 'Dermatitis atopica y rinoconjuntivitis', p: '~50% en el asma alergica', photo: null, desc: 'La marcha atopica apoya el diagnostico en el paciente joven y orienta hacia la inflamacion tipo 2, que responde bien al corticoide inhalado y a los biologicos dirigidos a esa via.' },
  { s: 'Candidiasis oral y disfonia', p: '~10% con corticoide inhalado', photo: null, desc: 'Efecto local del corticoide inhalado, no de la enfermedad. Se previene con camara espaciadora y enjuague bucal tras cada dosis. Su aparicion es ademas una prueba indirecta de que el paciente esta usando el inhalador.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Control sintomatico de GINA (calculadora disponible)': [1, 2],
  'Test de control del asma o ACT (calculadora disponible)': [7],
  'Escalones de tratamiento de GINA': [1, 3, 4, 5],
  'Factores de riesgo de crisis grave y de muerte por asma': [1, 6],
  'Gravedad de la crisis asmatica (calculadora disponible)': [1, 13],
  'Fenotipos inflamatorios': [8, 9, 12],
  'Criterios ERS/ATS de asma grave': [8, 18]
};
export const escalaCalc = {
  'Control sintomatico de GINA (calculadora disponible)': 'control-gina',
  'Test de control del asma o ACT (calculadora disponible)': 'act',
  'Gravedad de la crisis asmatica (calculadora disponible)': 'gravedad-crisis'
};
export const compGroups = [
  { name: 'La enfermedad y su crisis', items: ['Asma', 'Crisis asmatica'] },
  { name: 'Cuando no se controla', items: ['Asma grave y biologicos', 'Asma ocupacional'] },
  { name: 'Fenotipo y situaciones especiales', items: ['Enfermedad respiratoria exacerbada por antiinflamatorios', 'Situaciones especiales: embarazo, ejercicio y solapamiento con EPOC'] }
];
export const complicacionesIntro = 'La primera ficha es la enfermedad y la segunda su descompensacion, que es donde se juegan las muertes evitables del tema. Las dos siguientes recogen los dos motivos por los que un asma no se controla: que sea de verdad grave, con su algoritmo de fenotipo y biologico, o que el paciente siga expuesto en su trabajo a lo que se la causo. Las dos ultimas son fenotipos y situaciones que cambian decisiones concretas: la enfermedad exacerbada por antiinflamatorios, que se diagnostica preguntando y no con pruebas de alergia, y el trio de embarazo, ejercicio y coexistencia con EPOC.';
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
    { title: 'DIAGNOSTICO', sub: 'Documentar que la obstruccion VARIA', color: '#3f7a4a', target: 'diagnostico', leaves: [
      { title: 'Prueba broncodilatadora', sub: 'FEV1 mas del 12% y 200 mL', color: '#3f7a4a', target: 'diagnostico' },
      { title: 'Flujo pico 2 semanas', sub: 'Variabilidad mayor del 10%', color: '#2e6b7a', target: 'diagnostico' },
      { title: 'Provocacion con metacolina', sub: 'Sensible, poco especifica', color: '#5b4a86', target: 'diagnostico' },
      { title: 'Hacerlo ANTES de tratar', sub: 'Despues ya no se puede', color: '#8a6a1f', target: 'definicion' }
    ] },
    { title: 'TRATAMIENTO', sub: 'Nunca un broncodilatador solo', color: '#2e6b7a', target: 'clasificacion', leaves: [
      { title: 'Via preferida', sub: 'Corticoide inhalado con formoterol', color: '#3f7a4a', target: 'clasificacion' },
      { title: 'Control en 4 preguntas', sub: 'Ultimas 4 semanas', color: '#2e6b7a', target: 'clasificacion' },
      { title: 'Riesgo futuro', sub: 'Independiente del control', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Antes de subir de escalon', sub: 'Tecnica y adherencia', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'LA CRISIS', sub: 'Casi todas las muertes son evitables', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Corticoide en la primera hora', sub: '40 a 50 mg, 5 a 7 dias', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Saturacion 93 a 95%', sub: '94 a 98% en la gestante', color: '#3d5a73', target: 'complicaciones' },
      { title: 'PaCO2 normal o alta', sub: 'Signo de alarma, no de mejoria', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Nunca alta sin corticoide inhalado', sub: 'Plan escrito y cita en 2 a 7 dias', color: '#8a6a1f', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 7, 8], imagen: [1, 16] };
export const clasificacionCite = [1, 2, 7, 8];
export const seguimientoCite = [1, 13, 14];
