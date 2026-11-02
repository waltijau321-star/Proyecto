// topics/enfermedad-intersticial/content.js: Enfermedad pulmonar intersticial difusa y patron
// restrictivo.
// Cubre TRES items del cluster Enfermedad respiratoria cronica (bloque III, Neumologia) del
// temario: "Enfermedad pulmonar intersticial e hipertension pulmonar" (la mitad intersticial; la
// hipertension pulmonar es tema propio, `hipertension-pulmonar`), "Enfermedad pulmonar
// restrictiva" y "Neumoconiosis".
//
// Fuentes principales: guia ATS/ERS/JRS/ALAT 2022 de fibrosis pulmonar idiopatica y FIBROSIS
// PULMONAR PROGRESIVA (que es el concepto que reordeno el tema); guia ATS/JRS/ALAT 2020 de
// neumonitis por hipersensibilidad; clasificacion multidisciplinar ATS/ERS de las neumonias
// intersticiales idiopaticas; ensayos ASCEND, INPULSIS, INBUILD y SENSCIS; ensayo PANTHER-IPF;
// indice GAP; y las normas ERS/ATS de interpretacion de la funcion pulmonar y de la DLCO.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (EPID fibrosante, restriccion extrapulmonar) + 6 fichas.
// 4 calculadoras, 4 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'enfermedad-intersticial',
  titulo: 'Enfermedad Pulmonar Intersticial',
  subtitulo: 'Módulo 53 · Medicina Interna',
  accent: '#6b4a7a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const restrictivoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a7a;border-radius:8px;padding:5px 9px;background:#6b4a7a12;margin-bottom:6px;">
    <strong style="color:#6b4a7a;">La restricción NO se diagnostica con la espirometría.</strong> <span style="color:var(--ink-dim);">Una FVC baja con cociente FEV1/FVC normal solo <strong>sugiere</strong> restricción: hace falta la <strong>capacidad pulmonar total</strong> por pletismografia para confirmarla. Y una vez confirmada, quien dice de que se trata es la <strong>DLCO</strong>.</span>
  </div>

  <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;margin-bottom:4px;">
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">Paso 1<br>CONFIRMAR</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Capacidad pulmonar total por debajo del limite inferior de la normalidad</strong> (en la práctica, menos del 80% del predicho). El cociente FEV1/FVC es normal o incluso alto, al revés que en la obstrucción.</div>
  </div>
  <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;margin-bottom:6px;">
    <div style="background:#6b4a7a22;border:1px solid #6b4a7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a7a;">Paso 2<br>SEPARAR</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La <strong style="color:var(--ink);">DLCO</strong> divide el problema en dos mundos que se tratan de forma completamente distinta. Y la <strong>KCO</strong> (DLCO dividida por el volumen alveolar) afina: en la restricción extrapulmonar el pulmón esta sano pero poco distendido, de modo que transfiere <strong>más</strong> por unidad de volumen.</div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">INTRÍNSECA (parenquimatosa)<br><span style="font-weight:400;color:var(--ink-dim);">DLCO BAJA, KCO baja</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">El pulmón esta enfermo: fibrosis, inflamación o ocupación alveolar. Aquí viven todas las <strong style="color:var(--ink);">enfermedades intersticiales difusas</strong>, la sarcoidosis, la neumoconiosis y la EPID por fármacos. Hipoxemia que empeora con el ejercicio, crepitantes secos en velcro y acropaquias.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">EXTRÍNSECA (de la bomba)<br><span style="font-weight:400;color:var(--ink-dim);">DLCO normal, KCO NORMAL O ALTA</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">El pulmón esta sano y lo que falla es lo que lo mueve o lo contiene: <strong style="color:var(--ink);">obesidad, derrame, cifoescoliosis, espondilitis, parálisis diafragmática, miastenia, esclerosis lateral amiotrófica, Guillain-Barré</strong>. Sin crepitantes ni acropaquias. La clave funcional es la <strong>caída de la FVC en decúbito</strong>.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos pruebas de cabecera que casi nadie pide y que valen mucho.</strong> La <strong>FVC en sedestación y en decúbito supino</strong>: una caída mayor del 20% indica debilidad diafragmática y es lo que anticipa la insuficiencia ventilatoria nocturna. Y la <strong>DLCO corregida por hemoglobina</strong>: la anemia baja la DLCO sin que haya ninguna enfermedad pulmonar, y no corregirla ha llevado a más de un estudio innecesario.
  </div>
</div>`;

const tcarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a7a;border-radius:8px;padding:5px 9px;background:#6b4a7a12;margin-bottom:6px;">
    <strong style="color:#6b4a7a;">El patrón de la tomografía de alta resolución decide si hace falta biopsia.</strong> <span style="color:var(--ink-dim);">Con un patrón de <strong>neumonía intersticial usual definitivo</strong> en el contexto clínico adecuado, la biopsia no aporta nada y se evita un procedimiento con mortalidad no despreciable.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">NIU<br>DEFINITIVA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Predominio <strong style="color:var(--ink);">subpleural y basal</strong>, distribución heterogénea, <strong style="color:var(--ink);">panal de abeja</strong> con o sin bronquiectasias de tracción. <strong style="color:#8c3a34;">No hace falta biopsia</strong>: con clínica compatible y exposiciones y autoinmunidad descartadas, es fibrosis pulmonar idiopática.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">NIU<br>PROBABLE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mismo predominio subpleural y basal con reticulacion y bronquiectasias o bronquiolectasias de tracción, <strong>pero SIN panal</strong>. La biopsia se discute caso a caso en el comite: en el varón mayor fumador con clínica típica, muchos grupos ya no la hacen.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">INDETERMINADA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Fibrosis sutil o distribución que no encaja del todo. Suele requerir muestra histológica, por criobiopsia transbronquial o por cirugía, siempre pasando por el comite.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">DIAGNÓSTICO<br>ALTERNATIVO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Hallazgos que apuntan a otra cosa: predominio en <strong>lóbulos superiores</strong> o peribroncovascular, <strong>vidrio deslustrado extenso</strong>, <strong>mosaico con atrapamiento en espiración</strong> (muy sugestivo de neumonitis por hipersensibilidad), quistes, nódulos o consolidación. Cambia el diagnóstico y con el todo el tratamiento.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Signos que conviene reconocer.</strong> <strong>Panal de abeja</strong>: quistes agrupados, de pared gruesa y tamaño similar, en varias capas subpleurales; es lo que define la NIU y lo que más se sobrediagnostica confundiendolo con enfisema paraseptal. <strong>Signo de las tres densidades</strong> (vidrio, pulmón normal y atrapamiento en el mismo corte): muy sugestivo de neumonitis por hipersensibilidad fibrótica. <strong>Esófago dilatado</strong> con fibrosis basal: esclerosis sistémica.
  </div>
</div>`;

const multidisciplinarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La fibrosis pulmonar idiopática es un diagnóstico de EXCLUSIÓN.</strong> <span style="color:var(--ink-dim);">Antes de ponerle esa etiqueta hay que haber buscado activamente las tres cosas que la imitan y que si tienen tratamiento propio. Etiquetar de idiopática una neumonitis por hipersensibilidad es privar al paciente de la única intervención que la cura: retirar el antígeno.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:114px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. EXPOSICIONES</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Interrogatorio dirigido y detallado: <strong style="color:var(--ink);">aves</strong> (incluidos edredones y almohadas de pluma, y palomas del vecino), <strong style="color:var(--ink);">humedades y mohos</strong> en casa o en el trabajo, humidificadores, jacuzzi, aire acondicionado, quesos, embutidos, setas, y toda la historia <strong>laboral completa</strong>: sílice, asbesto, carbón, berilio, metales duros. Hay que preguntar por cada trabajo desde el primero, no solo por el actual.</div>
    </div>
    <div style="display:grid;grid-template-columns:114px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">2. AUTOINMUNIDAD</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Anticuerpos antinucleares, factor reumatoide, anticuerpos frente al péptido citrulinado y panel de miositis con antisintetasas. Y la <strong style="color:var(--ink);">exploración</strong>, que a menudo da el diagnóstico: fenómeno de Raynaud, esclerodactilia, capilaroscopia alterada, artritis, <strong>manos de mecánico</strong>, papulas de Gottron y debilidad proximal. La EPID puede ser la PRIMERA manifestación de la conectivopatia, a veces años antes.</div>
    </div>
    <div style="display:grid;grid-template-columns:114px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">3. FÁRMACOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Revisar TODA la medicación, incluida la retirada hace meses: <strong style="color:var(--ink);">amiodarona</strong>, metotrexato, nitrofurantoína, bleomicina, sales de oro, y de forma creciente los <strong>inhibidores del punto de control inmunitario</strong>, cuya neumonitis se trata con corticoide y con la retirada del fármaco.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #6b4a7a;border-radius:8px;background:#6b4a7a10;color:var(--ink-dim);">
    <strong style="color:#6b4a7a;">Y después, el COMITE MULTIDISCIPLINAR.</strong> Neumologo, radiólogo torácico y patologo discutiendo el caso completo es el <strong>patrón de referencia</strong> del diagnóstico de las EPID, por encima de cualquier prueba aislada, incluida la biopsia. Cambia el diagnóstico en una proporción importante de los casos remitidos y mejora la concordancia entre centros. Un paciente con EPID que no ha pasado por comite tiene un diagnóstico provisional, por convencido que este quien se lo puso.
  </div>
</div>`;

const ppfHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El concepto que reordeno el tema en 2022: la FIBROSIS PULMONAR PROGRESIVA.</strong> <span style="color:var(--ink-dim);">Muchas EPID que no son fibrosis idiopática acaban comportandose como si lo fueran. Reconocerlo importa porque ese fenotipo <strong>responde al antifibrotico</strong> con independencia de cual sea la enfermedad de base.</span>
  </div>
  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">Definición: en un paciente con EPID fibrosante DISTINTA de la fibrosis idiopática, al menos <strong>DOS de estos tres</strong> criterios en el último año, sin otra explicación</div>
    <div style="color:var(--ink-dim);line-height:1.6;">
      1. <strong style="color:var(--ink);">Empeoramiento de los síntomas</strong> respiratorios<br>
      2. <strong style="color:var(--ink);">Progresión fisiológica</strong>: caída absoluta de la FVC del <strong>5% o más</strong> del predicho, o caída absoluta de la DLCO del <strong>10% o más</strong> del predicho<br>
      3. <strong style="color:var(--ink);">Progresión radiológica</strong>: más reticulacion, más bronquiectasias de tracción, panal nuevo o más extenso, o pérdida de volumen
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">Lo que SI funciona</div>
      <div style="color:var(--ink-dim);line-height:1.55;"><strong style="color:var(--ink);">Antifibroticos</strong> (pirfenidona y nintedanib): frenan la caída de la FVC en la fibrosis idiopática, y el nintedanib también en la fibrosis progresiva y en la EPID de la esclerosis sistémica. <strong>No revierten</strong> nada: enlentecen. <strong style="color:var(--ink);">Oxígeno</strong> si hay hipoxemia, <strong>rehabilitación respiratoria</strong>, vacunas, tratamiento del reflujo sintomático, y <strong style="color:#8c3a34;">derivación PRECOZ a trasplante</strong>, en el momento del diagnóstico y no cuando el paciente ya no es candidato.</div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">Lo que NO se hace, y por que</div>
      <div style="color:var(--ink-dim);line-height:1.55;"><strong style="color:var(--ink);">Inmunosupresión en la fibrosis idiopática.</strong> El ensayo que comparo prednisona con azatioprina y N-acetilcisteina frente a placebo <strong>se detuvo antes de tiempo por MAYOR mortalidad</strong> e ingresos en el grupo tratado. Es uno de los resultados que más ha cambiado la práctica, y explica por que corticoide e inmunosupresor están contraindicados aquí, mientras que son el tratamiento de elección en la neumonitis por hipersensibilidad y en la EPID autoinmunitaria.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La excepción de la excepción: la exacerbación aguda.</strong> Deterioro respiratorio agudo, en menos de un mes, con vidrio deslustrado nuevo sobre la fibrosis previa y sin insuficiencia cardiaca ni infección que lo expliquen. Tiene una mortalidad hospitalaria muy alta, cercana al 50%, y ahi si se usa corticoide a dosis altas pese a la escasa evidencia, porque no queda otra cosa. La ventilación invasiva rara vez cambia el desenlace y conviene haber hablado antes de los objetivos de cuidado.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las enfermedades pulmonares intersticiales difusas son un grupo de más de doscientas entidades que comparten tres cosas: afectan de forma difusa al <strong>intersticio y a los espacios alveolares</strong>, producen un <strong>patrón restrictivo</strong> con descenso de la capacidad de difusión, y se parecen tanto entre si en la radiografía que el diagnóstico exige un método, no una intuición. Ese método tiene dos piezas: la <strong>tomografía de alta resolución</strong> y el <strong>comite multidisciplinar</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero, ordenar la restricción.</strong></p>
<p style="margin:0 0 12px;">Antes de entrar en el intersticio conviene tener clara la fisiología, porque el mismo patrón espirometrico esconde dos mundos distintos. Una FVC baja con cociente FEV1/FVC normal solo <strong>sugiere</strong> restricción: confirmarla exige la <strong>capacidad pulmonar total</strong>. Y una vez confirmada, quien separa la enfermedad del pulmón de la enfermedad de la bomba es la <strong>DLCO</strong>: baja en la parenquimatosa, normal o alta por unidad de volumen en la extrapulmonar.</p>
${figBlock('Figura 1', 'Patrón restrictivo: confirmarlo y después separarlo con la DLCO', restrictivoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La tomografía manda, y decide si hace falta biopsia.</strong></p>
<p style="margin:0 0 12px;">La tomografía de alta resolución clasifica el caso en cuatro patrones y esa clasificación tiene una consecuencia inmediata: con un patrón de <strong>neumonía intersticial usual definitivo</strong> en el contexto clínico adecuado, <strong>no hace falta biopsia</strong>. Es una de las pocas veces en medicina en que una imagen ahorra un procedimiento quirúrgico con mortalidad propia. En el extremo opuesto, un patrón de "diagnóstico alternativo" no es un fracaso: es información, porque el mosaico con atrapamiento aéreo o el predominio en lóbulos superiores apuntan a una enfermedad con tratamiento distinto.</p>
${figBlock('Figura 2', 'Los cuatro patrones de la tomografía de alta resolución', tcarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Idiopática significa que se ha buscado y no se ha encontrado.</strong></p>
<p style="margin:0 0 12px;">La fibrosis pulmonar idiopática es un diagnóstico de exclusión, y las tres cosas que hay que excluir tienen tratamiento propio: una <strong>exposición</strong> (que se retira), una <strong>enfermedad autoinmunitaria</strong> (que se inmunosuprime) y un <strong>fármaco</strong> (que se suspende). Confundir una neumonitis por hipersensibilidad con una fibrosis idiopática no es un matiz académico: priva al paciente de la única medida que puede detener su enfermedad. Por eso el interrogatorio de exposiciones tiene que ser exhaustivo y por eso el <strong>comite multidisciplinar</strong> es el patrón de referencia del diagnóstico, por encima de cualquier prueba aislada.</p>
${figBlock('Figura 3', 'Las tres exclusiones obligadas y el comite multidisciplinar', multidisciplinarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La idea nueva: fibrosis pulmonar progresiva.</strong></p>
<p style="margin:0 0 12px;">Durante años el pronóstico y el tratamiento dependian de la etiqueta etiológica. La guía de 2022 añadio un eje transversal: muchas EPID que no son fibrosis idiopática (por hipersensibilidad, autoinmunitarias, neumoconiosis, inclasificables) acaban <strong>comportandose</strong> como ella, y ese fenotipo se define con <strong>dos de tres criterios en un año</strong> y responde al antifibrotico con independencia de su causa. Al mismo tiempo, el tema arrastra una leccion negativa de las más importantes de la neumología moderna: en la fibrosis idiopática, la <strong>inmunosupresión aumenta la mortalidad</strong>.</p>
${figBlock('Figura 4', 'Fibrosis pulmonar progresiva: criterios, lo que funciona y lo que daña', ppfHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar restricción con una espirometría sola. No interpretar una DLCO baja sin corregirla por la hemoglobina. No etiquetar de idiopática una fibrosis sin haber preguntado por aves, humedades, trabajo y fármacos, uno por uno. No dar corticoide ni inmunosupresor en la fibrosis pulmonar idiopática. No biopsiar a quien ya tiene un patrón de neumonía intersticial usual definitivo. No cerrar el diagnóstico sin pasarlo por el comite. Y no esperar al deterioro para hablar de trasplante: la derivación es en el momento del diagnóstico.</p>`;

export const bibliografia = [
  'Raghu G, Remy-Jardin M, Richeldi L, et al. Idiopathic pulmonary fibrosis (an update) and progressive pulmonary fibrosis in adults: an official ATS/ERS/JRS/ALAT clinical practice guideline. Am J Respir Crit Care Med. 2022;205(9):e18-e47.',
  'Raghu G, Remy-Jardin M, Ryerson CJ, et al. Diagnosis of hypersensitivity pneumonitis in adults: an official ATS/JRS/ALAT clinical practice guideline. Am J Respir Crit Care Med. 2020;202(3):e36-e69.',
  'Idiopathic Pulmonary Fibrosis Clinical Research Network. Prednisone, azathioprine, and N-acetylcysteine for pulmonary fibrosis. N Engl J Med. 2012;366(21):1968-1977.',
  'King TE Jr, Bradford WZ, Castro-Bernardini S, et al. A phase 3 trial of pirfenidone in patients with idiopathic pulmonary fibrosis. N Engl J Med. 2014;370(22):2083-2092.',
  'Richeldi L, du Bois RM, Raghu G, et al. Efficacy and safety of nintedanib in idiopathic pulmonary fibrosis. N Engl J Med. 2014;370(22):2071-2082.',
  'Flaherty KR, Wells AU, Cottin V, et al. Nintedanib in progressive fibrosing interstitial lung diseases. N Engl J Med. 2019;381(18):1718-1727.',
  'Distler O, Highland KB, Gahlemann M, et al. Nintedanib for systemic sclerosis-associated interstitial lung disease. N Engl J Med. 2019;380(26):2518-2528.',
  'Ley B, Ryerson CJ, Vittinghoff E, et al. A multidimensional index and staging system for idiopathic pulmonary fibrosis. Ann Intern Med. 2012;156(10):684-691.',
  'Collard HR, Ryerson CJ, Corte TJ, et al. Acute exacerbation of idiopathic pulmonary fibrosis: an international working group report. Am J Respir Crit Care Med. 2016;194(3):265-275.',
  'Travis WD, Costabel U, Hansell DM, et al. An official ATS/ERS statement: update of the international multidisciplinary classification of the idiopathic interstitial pneumonias. Am J Respir Crit Care Med. 2013;188(6):733-748.',
  'Fischer A, Antoniou KM, Brown KK, et al. An official ERS/ATS research statement: interstitial pneumonia with autoimmune features. Eur Respir J. 2015;46(4):976-987.',
  'Graham BL, Brusasco V, Burgos F, et al. 2017 ERS/ATS standards for single-breath carbon monoxide uptake in the lung. Eur Respir J. 2017;49(1):1600016.',
  'Pellegrino R, Viegi G, Brusasco V, et al. Interpretative strategies for lung function tests. Eur Respir J. 2005;26(5):948-968.',
  'Leung CC, Yu ITS, Chen W. Silicosis. Lancet. 2012;379(9830):2008-2018.',
  'Cullinan P, Reid P. Pneumoconiosis. Prim Care Respir J. 2013;22(2):249-252.',
  'Skolnik K, Ryerson CJ. Unclassifiable interstitial lung disease: a review. Respirology. 2016;21(1):51-56.',
  'Skeoch S, Weatherley N, Swift AJ, et al. Drug-induced interstitial lung disease: a systematic review. J Clin Med. 2018;7(10):356.',
  'Boentert M, Wenninger S, Sansone VA. Respiratory involvement in neuromuscular disorders. Curr Opin Neurol. 2017;30(5):529-537.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'EPID fibrosante (restricción intrínseca)',
      tituloB: 'Restricción extrapulmonar',
      compensada: 'Disnea de esfuerzo progresiva de meses o años y tos seca persistente, que el paciente y a menudo el médico atribuyen a la edad, al peso o al tabaco. En la exploración, CREPITANTES SECOS TELEINSPIRATORIOS EN VELCRO en las bases, que no se modifican con la tos y que pueden preceder años a las alteraciones radiológicas, y ACROPAQUIAS hasta en la mitad de las fibrosis idiopáticas. Saturación normal en reposo con DESATURACIÓN AL ESFUERZO, que es el hallazgo más sensible y el que se escapa si solo se mide sentado.',
      descompensada: 'Disnea que empeora de forma llamativa EN DECÚBITO (ortopnea sin insuficiencia cardiaca), sin crepitantes ni acropaquias. Según la causa: obesidad, deformidad de la pared, espondilitis con tórax rígido, debilidad de cintura escapular o pelviana, fasciculaciones, disfagia o voz nasal. La respiración PARADÓJICA ABDOMINAL en supino indica debilidad diafragmática avanzada. La cefalea matutina y la somnolencia diurna anuncian la hipoventilación nocturna, que aparece antes que la diurna.'
    },
    laboratorio: [
      { prueba: 'Pruebas de función pulmonar completas con DLCO (calculadora disponible)', utilidad: 'Espirometría, volúmenes por pletismografia y DLCO. La espirometría SOLA no diagnóstica restricción: hace falta la capacidad pulmonar total. La DLCO separa la enfermedad parenquimatosa de la extrapulmonar y es el parámetro más sensible al deterioro precoz. Debe corregirse por hemoglobina.' },
      { prueba: 'FVC en sedestación y en decúbito supino', utilidad: 'La prueba de cabecera de la debilidad diafragmática y la que casi nadie pide. Una caída mayor del 20% al tumbarse indica disfunción diafragmática significativa y anticipa la hipoventilación nocturna antes de que la gasometría diurna se altere.' },
      { prueba: 'Panel de autoinmunidad', utilidad: 'Anticuerpos antinucleares con patrón, factor reumatoide, anticuerpos frente al péptido citrulinado, y panel de miositis con antisintetasas (Jo-1 y no Jo-1), anti-MDA5 y anti-PM/Scl. La EPID puede ser la PRIMERA manifestación de una conectivopatia, a veces años antes de la afectación articular o cutánea.' },
      { prueba: 'Precipitinas e IgG específicas frente a antígenos inhalados', utilidad: 'Frente a proteínas de aves, hongos y actinomicetos termofilos en la sospecha de neumonitis por hipersensibilidad. Un resultado positivo indica exposición, NO enfermedad, y uno negativo no la descarta si el antígeno no esta en el panel. Es un apoyo, no un criterio.' },
      { prueba: 'Enzima convertidora de angiotensina y calcio', utilidad: 'De rendimiento limitado, con sensibilidad y especificidad bajas para la sarcoidosis. La hipercalcemia y la hipercalciuria son más útiles y tienen consecuencias terapéuticas propias. No sirven para seguir la actividad.' },
      { prueba: 'Péptido natriurético y ecocardiograma', utilidad: 'La insuficiencia cardiaca es el gran imitador de la EPID en el anciano y a menudo coexiste. Además, el ecocardiograma cribar la hipertensión pulmonar, que complica la fibrosis avanzada y empeora mucho el pronóstico.' },
      { prueba: 'Gasometría arterial y pulsioximetría nocturna', utilidad: 'En la restricción extrapulmonar, para detectar la hipercapnia. La hipoventilación aparece PRIMERO durante el sueño, de modo que una gasometría diurna normal no descarta la indicación de ventilación no invasiva domiciliaria.' },
      { prueba: 'Lavado broncoalveolar', utilidad: 'No se hace de rutina en el patrón de neumonía intersticial usual definitivo. Es útil cuando se sospecha neumonitis por hipersensibilidad (linfocitosis marcada, con frecuencia por encima del 30%), infección, hemorragia alveolar, proteinosis alveolar o neoplasia.' }
    ],
    no_invasivos: [
      { metodo: 'Patrón de la tomografía de alta resolución (calculadora disponible)', interpretacion: 'Cuatro categorías: neumonía intersticial usual definitiva, probable, indeterminada y diagnóstico alternativo. Determina si hace falta muestra histológica y orienta la etiología.', cutoff: 'NIU definitiva con clínica compatible y exclusiones hechas: no se biopsia' },
      { metodo: 'Interpretación del patrón restrictivo (calculadora disponible)', interpretacion: 'Capacidad pulmonar total para confirmar la restricción, DLCO para separar intrínseca de extrínseca, y KCO para afinar: en la restricción extrapulmonar el pulmón transfiere más por unidad de volumen porque esta sano pero poco distendido.', cutoff: 'Capacidad pulmonar total menor del 80% del predicho: restricción. DLCO menor del 80%: componente parenquimatoso' },
      { metodo: 'Criterios de fibrosis pulmonar progresiva (calculadora disponible)', interpretacion: 'En un paciente con EPID fibrosante distinta de la fibrosis idiopática: al menos dos de tres criterios en el último año, sin otra explicación. Identifica al candidato a antifibrotico.', cutoff: 'Caída absoluta de la FVC del 5% o más del predicho, o de la DLCO del 10% o más, más síntomas o progresión radiológica' },
      { metodo: 'Índice GAP (calculadora disponible)', interpretacion: 'Sexo, edad y fisiología (FVC y DLCO en porcentaje del predicho). Estratifica la mortalidad en la fibrosis pulmonar idiopática en tres estadios y ayuda a decidir el momento de la derivación a trasplante.', cutoff: 'Estadio I (0 a 3 puntos), II (4 a 5) y III (6 a 8), con mortalidad al año creciente' },
      { metodo: 'Prueba de marcha de 6 minutos con oximetría', interpretacion: 'Detecta la desaturación de esfuerzo, que es el hallazgo más sensible y precoz y que la oximetría en reposo no ve. Mide además la capacidad funcional y la respuesta a la rehabilitación.', cutoff: 'Desaturación por debajo del 88% o distancia menor de 250 metros: peor pronóstico' },
      { metodo: 'Presiones inspiratoria y espiratoria máximas', interpretacion: 'Cuantifican la fuerza del músculo respiratorio en la restricción extrapulmonar de causa neuromuscular. Se alteran antes que la FVC y guian el momento de iniciar la ventilación domiciliaria.', cutoff: 'Presión inspiratoria máxima menos negativa de -60 cmH2O: debilidad significativa' },
      { metodo: 'Comite multidisciplinar', interpretacion: 'Discusión conjunta de clínica, imagen y, si la hay, histología entre neumologo, radiólogo y patologo. Es el PATRÓN DE REFERENCIA del diagnóstico de las EPID, por encima de cualquier prueba aislada.', cutoff: 'Sin umbral: un diagnóstico de EPID que no ha pasado por comite es provisional' }
    ],
    imagen: [
      { modalidad: 'Tomografía de alta resolución', hallazgos: 'La prueba central del tema, con cortes finos, en inspiración y en ESPIRACIÓN (para detectar atrapamiento aéreo) y en decúbito PRONO (para separar las densidades declives fisiológicas de la fibrosis real). Define el patrón, la extensión y la distribución, y hoy sustituye a la biopsia en una parte importante de los casos.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Poco sensible: puede ser normal con enfermedad establecida. Muestra patrón reticular o reticulonodular de predominio basal con pérdida de volumen, y sirve sobre todo para excluir otras causas y para el seguimiento grosero. Un paciente con crepitantes en velcro y radiografía normal necesita tomografía, no tranquilizacion.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Cribado de hipertensión pulmonar, que complica la EPID avanzada y empeora el pronóstico, y valoración de la función ventricular para separar la disnea cardiaca de la respiratoria. El esófago dilatado en la tomografía junto con fibrosis basal orienta a esclerosis sistémica.' },
      { modalidad: 'Ecografía diafragmática', hallazgos: 'En la restricción extrapulmonar, mide el grosor y la fracción de engrosamiento del diafragma y detecta la parálisis uni o bilateral a pie de cama, sin radiación y de forma repetible.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las EPID se ordenan en varios ejes que conviene no mezclar. Por <strong>causa</strong>: de causa conocida (exposición, fármacos, autoinmunitaria), idiopáticas, granulomatosas y las de presentación característica. Por <strong>patrón radiológico</strong> en la tomografía de alta resolución, que es lo que decide si hace falta biopsia. Por <strong>comportamiento</strong>, que es el eje que añadio la guía de 2022 con la <strong>fibrosis pulmonar progresiva</strong>: muchas EPID no idiopáticas acaban comportandose como una fibrosis idiopática y responden al antifibrotico. Y, en un plano distinto pero previo, la <strong>restricción</strong> se separa en intrínseca (parenquimatosa) y extrínseca (de la bomba) según la DLCO.`,
    escalas: [
      { nombre: 'Patrones de la tomografía de alta resolución (calculadora disponible)', componentes: 'Distribución (subpleural y basal frente a otras), presencia de panal de abeja, bronquiectasias de tracción, vidrio deslustrado, mosaico con atrapamiento aéreo, quistes, nódulos y consolidación.', formula: 'Clasificación categórica en cuatro patrones: NIU definitiva, NIU probable, indeterminada y diagnóstico alternativo.', interpretacion: 'Es la clasificación que más conducta cambia: con NIU definitiva y exclusiones hechas no se biopsia. El patrón de diagnóstico alternativo redirige el estudio hacia neumonitis por hipersensibilidad, sarcoidosis o EPID autoinmunitaria.' },
      { nombre: 'Interpretación del patrón restrictivo (calculadora disponible)', componentes: 'Capacidad pulmonar total, FVC, cociente FEV1/FVC, DLCO corregida por hemoglobina y KCO.', formula: 'Restricción si la capacidad pulmonar total esta por debajo del limite inferior de la normalidad. Intrínseca si la DLCO es baja; extrínseca si la DLCO es normal y la KCO normal o alta.', interpretacion: 'Evita dos errores frecuentes: diagnosticar restricción con una espirometría sola, y atribuir al pulmón una restricción que es de la pared o del músculo. La KCO alta con volúmenes bajos es casi patognomonica de restricción extrapulmonar.' },
      { nombre: 'Criterios de fibrosis pulmonar progresiva (calculadora disponible)', componentes: 'Empeoramiento de síntomas, progresión fisiológica (FVC o DLCO) y progresión radiológica, en el último año y sin otra explicación, en un paciente con EPID fibrosante que NO es fibrosis idiopática.', formula: 'Al menos 2 de los 3 criterios. Progresión fisiológica: caída absoluta de la FVC del 5% o más del predicho, o de la DLCO del 10% o más.', interpretacion: 'Define un fenotipo transversal que responde al nintedanib con independencia de la enfermedad de base. Cambio la lógica del tema: ya no basta con la etiqueta etiológica, hay que vigilar el comportamiento a lo largo del tiempo.' },
      { nombre: 'Índice GAP (calculadora disponible)', componentes: 'Genero (sexo), Age (edad) y Physiology (FVC y DLCO en porcentaje del predicho).', formula: 'Puntuación de 0 a 8, agrupada en estadios I (0 a 3), II (4 a 5) y III (6 a 8).', interpretacion: 'Estratifica la mortalidad en la fibrosis pulmonar idiopática y se usa también en otras EPID fibrosantes. Ayuda a decidir el momento de la derivación a trasplante y a informar al paciente, aunque no sustituye a la evolución individual, que es muy variable.' },
      { nombre: 'Clasificación de las neumonías intersticiales idiopáticas', componentes: 'Criterios clínicos, radiológicos y patológicos de la clasificación multidisciplinar ATS/ERS.', formula: 'Fibrosantes crónicas (fibrosis idiopática y neumonía intersticial no específica), asociadas al tabaco (bronquiolitis respiratoria y neumonía intersticial descamativa), agudas o subagudas (neumonía organizada criptogenetica y neumonía intersticial aguda), y raras.', interpretacion: 'La distinción clave para el internista es entre la fibrosis idiopática, que NO se inmunosuprime, y el resto, que en general si responde al corticoide. Una proporción no despreciable de casos queda como EPID inclasificable pese a estudio completo.' },
      { nombre: 'Criterios de neumonitis por hipersensibilidad', componentes: 'Exposición identificada, patrón tomográfico compatible (fibrótico o no fibrótico) y linfocitosis en el lavado broncoalveolar, integrados en el comite con la probabilidad diagnóstica.', formula: 'Categorías de confianza diagnóstica, de diagnóstico definitivo a poco probable, en lugar de una lista rígida de criterios.', interpretacion: 'La distinción entre forma fibrótica y no fibrótica sustituyo a la vieja división en aguda, subaguda y crónica, porque lo que predice el pronóstico es la fibrosis y no el tiempo de evolución. Identificar y retirar el antígeno es lo único que puede detener la enfermedad.' },
      { nombre: 'Criterios de exacerbación aguda de la fibrosis pulmonar', componentes: 'Deterioro respiratorio agudo o subagudo en menos de un mes, vidrio deslustrado o consolidación nuevos sobre la fibrosis previa, y ausencia de explicación alternativa como insuficiencia cardiaca o sobrecarga de volumen.', formula: 'Definición categórica del grupo de trabajo internacional, que abandono la exigencia de descartar la infección para clasificarla.', interpretacion: 'Mortalidad hospitalaria cercana al 50%. Es la principal causa de muerte en la fibrosis idiopática. La ventilación mecánica invasiva rara vez cambia el desenlace, lo que obliga a haber hablado antes de los objetivos de cuidado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Fibrosis pulmonar idiopática',
      color: '#8c3a34',
      definicion: 'Neumonía intersticial fibrosante crónica, progresiva y limitada al pulmón, de causa desconocida, asociada al patrón histológico y radiológico de neumonía intersticial usual y propia del adulto mayor. Es un diagnóstico de EXCLUSIÓN.',
      fisiopatologia: 'El modelo actual no es inflamatorio sino de reparación aberrante. Microlesiones repetidas del epitelio alveolar en un huésped susceptible (por envejecimiento celular, acortamiento de telómeros, variantes del promotor de MUC5B) activan una via de reparación que no se apaga: proliferación de fibroblastos en focos, depósito de matriz extracelular y remodelado con distorsión arquitectural y panal. La inflamación es escasa y secundaria, y esa es la razón biológica por la que la inmunosupresión no solo no funciona sino que perjudica.',
      epidemiologia: 'Predomina en varones mayores de 60 años, fumadores o exfumadores. Es la más frecuente de las neumonías intersticiales idiopáticas. Su supervivencia mediana sin tratamiento se ha situado clásicamente en 3 a 5 años desde el diagnóstico, peor que la de muchos tumores sólidos, aunque el curso individual es muy variable y hay pacientes estables durante años.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino', 'Tabaquismo actual o pasado', 'Variante del promotor del gen MUC5B, la más asociada de todas', 'Mutaciones de los genes del complejo de la telomerasa', 'Antecedentes familiares de fibrosis pulmonar', 'Reflujo gastroesofágico con microaspiracion crónica', 'Exposición a polvos metálicos, de madera y a la ganaderia', 'Infecciones viricas crónicas', 'Diabetes y apnea obstructiva del sueño'],
      clinica: 'Disnea de esfuerzo lentamente progresiva y tos seca de meses o años. Crepitantes secos teleinspiratorios en velcro en las bases, presentes prácticamente siempre y a menudo antes que las alteraciones radiológicas, y acropaquias hasta en la mitad de los casos. Saturación normal en reposo con desaturación al esfuerzo.',
      criterios_dx: 'Patrón de neumonía intersticial usual definitivo o probable en la tomografía de alta resolución, MÁS exclusión razonada de exposiciones, enfermedad autoinmunitaria y fármacos, MÁS discusión en comite multidisciplinar. Con patrón definitivo y exclusiones hechas, la biopsia no aporta. Ver las Figuras 2 y 3 de Definición.',
      laboratorio: 'Pruebas de función pulmonar completas con DLCO como base del seguimiento. Panel de autoinmunidad amplio, que debe ser negativo. Precipitinas si hay cualquier sospecha de exposición. Hemograma y función hepática basales antes del antifibrotico.',
      imagen: 'Tomografía de alta resolución con predominio subpleural y basal, reticulacion heterogénea, bronquiectasias de tracción y panal de abeja. Ecocardiograma para cribar hipertensión pulmonar. Radiografía insuficiente para el diagnóstico.',
      complementarios: 'Marcha de 6 minutos con oximetría y calculo del índice GAP en el diagnóstico y en el seguimiento. Cribado de reflujo, apnea del sueño, cardiopatía isquémica y cáncer de pulmón, cuya incidencia esta claramente aumentada en esta población.',
      dx_diferencial: 'Neumonitis por hipersensibilidad fibrótica (la que más se confunde y la que más importa no confundir), EPID de las conectivopatias, neumoconiosis, EPID por fármacos, neumonía intersticial no específica fibrótica, sarcoidosis en estadio fibrótico, insuficiencia cardiaca crónica y bronquiectasias por tracción de otra causa.',
      tx_medico: 'Abandono del tabaco, vacunación, rehabilitación respiratoria (que mejora la capacidad de ejercicio y la calidad de vida), oxigenoterapia si hay hipoxemia en reposo o de esfuerzo, y tratamiento de las comorbilidades: reflujo sintomático, apnea del sueño, enfisema y cardiopatía. DERIVACIÓN A TRASPLANTE EN EL MOMENTO DEL DIAGNÓSTICO, no cuando el paciente ya se ha deteriorado.',
      tx_farmacologico: 'ANTIFIBROTICOS: pirfenidona o nintedanib, que enlentecen la caída de la FVC sin revertir la enfermedad. La elección se hace por perfil de efectos adversos (fotosensibilidad y molestias digestivas con la pirfenidona; diarrea y elevación de transaminasas con el nintedanib) y por comorbilidad. <strong>CONTRAINDICADOS el corticoide y el inmunosupresor</strong>: el ensayo PANTHER-IPF se detuvo antes de tiempo por mayor mortalidad e ingresos en el grupo con prednisona, azatioprina y N-acetilcisteina. El corticoide se reserva a la exacerbación aguda y al control sintomático de la tos.',
      tx_intervencionista: 'TRASPLANTE PULMONAR, que es el único tratamiento que prolonga la supervivencia de forma sustancial. Los criterios de remisión son amplios a propósito, y la derivación tardía es una de las causas evitables de que el paciente no llegue a la lista.',
      criterios_uci: 'Muy discutible. La ventilación mecánica invasiva en la exacerbación aguda tiene una mortalidad muy alta y rara vez cambia el desenlace, salvo en el candidato a trasplante como puente. Es una de las situaciones en las que la conversación previa sobre objetivos de cuidado vale más que cualquier decisión tomada en la urgencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Remitir EN EL DIAGNÓSTICO. Incluir en lista ante caída de la FVC del 10% o más o de la DLCO del 15% o más en 6 meses, desaturación por debajo del 88% o marcha menor de 250 metros, hipertensión pulmonar u hospitalización por deterioro respiratorio.',
      seguimiento_hospitalario: 'En la exacerbación aguda: descartar infección, embolia pulmonar e insuficiencia cardiaca, oxígeno, corticoide a dosis altas pese a la escasa evidencia, y valoración honesta del techo terapéutico junto con el paciente y la familia.',
      seguimiento_ambulatorio: 'Pruebas de función pulmonar cada 3 a 6 meses, que es lo que detecta la progresión antes que los síntomas. Tomografía según evolución. Vigilancia de los efectos adversos del antifibrotico y de la aparición de cáncer de pulmón e hipertensión pulmonar. Cuidados paliativos precoces para la disnea y la tos refractarias.',
      pronostico: 'Supervivencia mediana clásica de 3 a 5 años, mejorada por los antifibroticos y muy variable entre pacientes. Los predictores más robustos son la caída de la FVC en 6 a 12 meses, la DLCO basal, la desaturación en la marcha, la hipertensión pulmonar y el índice GAP. La exacerbación aguda es la principal causa de muerte.',
      algoritmo: ['Disnea de esfuerzo y crepitantes en velcro: pedir tomografía de alta resolución, no solo radiografía', 'Interrogatorio EXHAUSTIVO de exposiciones: aves, humedades, historia laboral completa', 'Panel de autoinmunidad y exploración buscando conectivopatia', 'Revisar todos los fármacos, incluidos los suspendidos hace meses', 'Clasificar el patrón tomográfico en las cuatro categorías', 'Con NIU definitiva y exclusiones hechas: no biopsiar', 'Llevar SIEMPRE el caso al comite multidisciplinar', 'Iniciar antifibrotico y NUNCA corticoide ni inmunosupresor', 'Derivar a trasplante en el momento del diagnóstico', 'Función pulmonar cada 3 a 6 meses y cuidados paliativos precoces']
    },
    {
      nombre: 'Fibrosis pulmonar progresiva',
      color: '#6b4a7a',
      definicion: 'Fenotipo de comportamiento, no una enfermedad: EPID fibrosante DISTINTA de la fibrosis idiopática que cumple al menos dos de tres criterios de progresión en el último año sin otra explicación. Reconocerlo abre la puerta al tratamiento antifibrotico.',
      fisiopatologia: 'Sea cual sea el desencadenante inicial (antígeno inhalado, autoinmunidad, polvo mineral, fármaco), una parte de los pacientes entra en una via común de fibrogénesis autoperpetuada que ya no depende del estímulo original. Esa convergencia biológica es la que justifica que un mismo fármaco antifibrotico funcione en enfermedades de causa tan distinta, y explica por que retirar el antígeno o inmunosuprimir deja de bastar cuando el proceso ya se ha independizado.',
      epidemiologia: 'Entre un 20 y un 40% de las EPID fibrosantes no idiopáticas desarrollan este comportamiento, con variaciones importantes según la enfermedad de base. Es especialmente frecuente en la neumonitis por hipersensibilidad fibrótica, en la EPID de la artritis reumatoide y en las EPID inclasificables. Una vez establecido, el pronóstico se aproxima al de la fibrosis idiopática.',
      factores_riesgo: ['Patrón de neumonía intersticial usual en la tomografía', 'Extensión de la fibrosis mayor del 20% del parénquima', 'Exposición persistente al antígeno en la neumonitis por hipersensibilidad', 'Artritis reumatoide y esclerosis sistémica como enfermedad de base', 'Edad avanzada y sexo masculino', 'Tabaquismo', 'Mutaciones de los genes de la telomerasa', 'Hipertensión pulmonar asociada', 'Enfisema combinado con fibrosis', 'Retraso en el diagnóstico y en la retirada de la causa'],
      clinica: 'Empeoramiento de la disnea y de la tos en un paciente con EPID ya conocida, con deterioro funcional o radiológico documentado. La clave es que se reconoce COMPARANDO con estudios previos: sin función pulmonar seriada no se puede diagnosticar, y esa es la razón práctica por la que las EPID se siguen cada 3 a 6 meses.',
      criterios_dx: 'Al menos 2 de 3 en el último año y sin otra explicación: empeoramiento de los síntomas respiratorios; progresión fisiológica con caída absoluta de la FVC del 5% o más del predicho o de la DLCO del 10% o más; y progresión radiológica. Ver la Figura 4 de Definición.',
      laboratorio: 'Función pulmonar seriada con DLCO, que es el eje del diagnóstico. Reevaluar el panel de autoinmunidad, porque una conectivopatia puede declararse después. Descartar infección, insuficiencia cardiaca y progresión de la enfermedad de base como explicaciones alternativas del deterioro.',
      imagen: 'Tomografía de alta resolución comparada con la previa: más reticulacion, más bronquiectasias de tracción, panal nuevo o más extenso, y pérdida de volumen lobar. La comparación cuantitativa es lo que da valor a la prueba, de modo que conviene que las lea el mismo radiólogo torácico.',
      complementarios: 'Reevaluar la exposición en la neumonitis por hipersensibilidad: la persistencia del antígeno es una causa corregible de progresión y hay que buscarla activamente antes de asumir que el proceso es autónomo. Ecocardiograma para descartar hipertensión pulmonar.',
      dx_diferencial: 'Antes de aceptar la progresión hay que descartar lo que la imita: infección respiratoria, insuficiencia cardiaca, sobrecarga de volumen, embolia pulmonar, progresión de la conectivopatia de base, toxicidad de un fármaco nuevo y mala técnica en las pruebas de función pulmonar.',
      tx_medico: 'Retirar o reducir la exposición si persiste, optimizar el tratamiento de la enfermedad de base, rehabilitación respiratoria, oxígeno si procede, vacunación y tratamiento de comorbilidades. Valorar trasplante en el candidato.',
      tx_farmacologico: 'NINTEDANIB, que redujo la caída de la FVC en el ensayo que estudio este fenotipo con independencia de la enfermedad de base, y también en la EPID de la esclerosis sistémica. A diferencia de la fibrosis idiopática, aquí el inmunosupresor SI tiene papel cuando la enfermedad de base lo justifica (micofenolato, rituximab, tocilizumab según el caso), y con frecuencia se combinan las dos estrategias.',
      tx_intervencionista: 'Trasplante pulmonar en el candidato adecuado, con los mismos criterios de derivación precoz que en la fibrosis idiopática.',
      criterios_uci: 'Los de la exacerbación aguda, con las mismas reservas: la ventilación invasiva rara vez cambia el desenlace fuera del puente a trasplante.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Deterioro funcional progresivo pese a tratamiento, con los mismos umbrales que en la fibrosis idiopática.',
      seguimiento_hospitalario: 'Sin particularidades propias fuera de la exacerbación aguda.',
      seguimiento_ambulatorio: 'Función pulmonar cada 3 a 6 meses, que es lo único que permite detectar el fenotipo. Reevaluación periódica de la exposición y de la autoinmunidad, y vigilancia de la tolerancia al antifibrotico.',
      pronostico: 'Una vez establecido el comportamiento progresivo, la supervivencia se aproxima a la de la fibrosis idiopática, con la diferencia importante de que aquí a veces si hay una causa corregible detrás. El antifibrotico enlentece la caída funcional pero no la detiene.',
      algoritmo: ['Seguir toda EPID fibrosante con función pulmonar cada 3 a 6 meses', 'Ante deterioro, descartar primero infección, insuficiencia cardiaca y embolia', 'Comprobar si se cumplen 2 de los 3 criterios en el último año', 'Reevaluar si persiste la exposición antigénica, que es corregible', 'Optimizar el tratamiento de la enfermedad de base', 'Añadir nintedanib si se confirma el fenotipo progresivo', 'Mantener el inmunosupresor si la enfermedad de base lo justifica', 'Rehabilitación, oxígeno y vacunación', 'Valorar trasplante en el candidato', 'Reevaluar el caso en comite multidisciplinar']
    },
    {
      nombre: 'Neumonitis por hipersensibilidad',
      color: '#3f6b52',
      definicion: 'EPID inmunomediada por la inhalacion repetida de un antígeno orgánico o de una sustancia química de bajo peso molecular en un huésped sensibilizado. Se clasifica en forma FIBRÓTICA y NO FIBRÓTICA, división que sustituyo a la vieja de aguda, subaguda y crónica.',
      fisiopatologia: 'La exposición repetida desencadena una respuesta mixta: inmunocomplejos y activación del complemento en las fases tempranas, y sobre todo una respuesta celular con linfocitos T y formación de granulomas mal definidos, bronquiolocentricos. Esa localización alrededor del bronquiolo explica los dos hallazgos característicos de la imagen: el mosaico con atrapamiento aéreo en espiración y la distribución de predominio superior o difuso, distinta de la basal de la fibrosis idiopática. Si la exposición persiste, la inflamación da paso a fibrosis irreversible.',
      epidemiologia: 'Es la EPID que más se confunde con la fibrosis pulmonar idiopática, y la que más importa no confundir porque tiene una intervención curativa. En una proporción muy alta de los casos NO se identifica el antígeno pese a un interrogatorio cuidadoso, lo que no descarta el diagnóstico pero empeora el pronóstico, porque no se puede retirar lo que no se conoce.',
      factores_riesgo: ['Exposición a aves: palomas, periquitos, y también edredones y almohadas de pluma', 'Humedades y mohos domesticos o laborales', 'Humidificadores, aire acondicionado, jacuzzi y saunas', 'Trabajo agrícola y ganadero: heno enmohecido, actinomicetos termofilos', 'Industria del queso, del champiñon y de la madera', 'Isocianatos y otras sustancias químicas de bajo peso molecular', 'Metalurgia con fluidos de corte contaminados', 'Ser NO fumador, que paradójicamente aumenta el riesgo', 'Predisposición genética, incluidas variantes de la telomerasa', 'Infección viral concomitante como cofactor'],
      clinica: 'En la forma no fibrótica, episodios de tos, disnea, fiebre y malestar horas después de la exposición, con mejoría al alejarse (fines de semana, vacaciones) y recaída al volver. En la fibrótica, disnea y tos progresivas indistinguibles de una fibrosis idiopática, a veces con crepitantes y con el hallazgo característico del PIO (chirrido inspiratorio agudo) por afectación bronquiolar.',
      criterios_dx: 'Integración en comite de tres elementos: exposición identificada, patrón tomográfico compatible y linfocitosis en el lavado broncoalveolar, con categorías de confianza diagnóstica en lugar de una lista rígida. El elemento que más cambia la conducta es la EXPOSICIÓN, y encontrarla exige un interrogatorio dirigido y repetido.',
      laboratorio: 'Precipitinas e IgG específicas frente a antígenos concretos: indican exposición, no enfermedad. Lavado broncoalveolar con linfocitosis, con frecuencia por encima del 30%, que apoya con fuerza el diagnóstico y es una de las pocas indicaciones claras del procedimiento en el estudio de una EPID.',
      imagen: 'Tomografía con vidrio deslustrado, nódulos centrolobulillares mal definidos, mosaico y ATRAPAMIENTO AÉREO en espiración, de predominio superior o difuso y con relativa preservación de las bases. El SIGNO DE LAS TRES DENSIDADES (vidrio, pulmón normal y atrapamiento en el mismo corte) es muy sugestivo. En la forma fibrótica se añaden reticulacion y bronquiectasias de tracción.',
      complementarios: 'Visita o descripción detallada del domicilio y del puesto de trabajo, que a veces encuentra lo que la anamnesis no. Prueba de provocación en centros muy especializados. Criobiopsia transbronquial si el comite lo considera necesario.',
      dx_diferencial: 'Fibrosis pulmonar idiopática (la distinción clave), sarcoidosis, EPID autoinmunitaria, bronquiolitis de otras causas, neumonía organizada, EPID por fármacos y, en la forma aguda, neumonía infecciosa.',
      tx_medico: 'RETIRAR EL ANTÍGENO, que es la única medida capaz de detener la enfermedad y a menudo de revertirla en la forma no fibrótica. Puede significar deshacerse de las aves, reformar la vivienda o cambiar de puesto de trabajo, decisiones con un coste personal y económico que hay que acompañar. Cuando no se identifica el antígeno, el pronóstico empeora precisamente por esto.',
      tx_farmacologico: 'Corticoide sistémico en la forma no fibrótica sintomática o extensa, con descenso progresivo. Inmunosupresores ahorradores (micofenolato, azatioprina) en la enfermedad persistente. En la forma FIBRÓTICA con comportamiento progresivo, NINTEDANIB, solo o combinado con inmunosupresor según el caso.',
      tx_intervencionista: 'Trasplante pulmonar en la forma fibrótica avanzada. Tiene la particularidad de que la exposición debe estar retirada antes, o la enfermedad puede recurrir sobre el injerto.',
      criterios_uci: 'La forma aguda grave puede producir insuficiencia respiratoria que requiera soporte, y responde bien al corticoide y a la retirada del antígeno, con mejor pronóstico que la exacerbación de una fibrosis idiopática.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los de cualquier EPID fibrosante avanzada, con la exigencia añadida de haber eliminado la exposición.',
      seguimiento_hospitalario: 'Confirmar la mejoría tras retirar la exposición, que en la forma no fibrótica puede ser rápida y llamativa y sirve de confirmación diagnóstica.',
      seguimiento_ambulatorio: 'Función pulmonar seriada para detectar el paso a fenotipo progresivo. Reinterrogar sobre exposiciones en cada visita: es frecuente descubrir el antígeno meses después, y encontrarlo sigue cambiando el pronóstico.',
      pronostico: 'La forma no fibrótica con antígeno identificado y retirado puede resolverse por completo. La forma fibrótica tiene un pronóstico intermedio entre la no fibrótica y la fibrosis idiopática, y se acerca a esta última cuando el antígeno no se encuentra o la exposición persiste.',
      algoritmo: ['Ante EPID, interrogar de forma dirigida por aves, humedades, trabajo y aficiones', 'Preguntar si mejora fuera de casa o del trabajo', 'Tomografía en inspiración y ESPIRACIÓN para buscar atrapamiento aéreo', 'Solicitar precipitinas frente al antígeno sospechado', 'Lavado broncoalveolar buscando linfocitosis marcada', 'Llevar el caso al comite multidisciplinar', 'RETIRAR EL ANTÍGENO: es lo único que detiene la enfermedad', 'Corticoide en la forma no fibrótica sintomática o extensa', 'Nintedanib si la forma fibrótica se comporta como progresiva', 'Reinterrogar sobre exposiciones en cada revisión']
    },
    {
      nombre: 'EPID autoinmunitaria y por fármacos',
      color: '#8a6a1f',
      definicion: 'Afectación intersticial en el contexto de una enfermedad autoinmunitaria sistémica (artritis reumatoide, esclerosis sistémica, miopatías inflamatorias, Sjogren, lupus, enfermedad mixta) o producida por un fármaco. Comparten que la EPID puede ser la primera y a veces la única manifestación.',
      fisiopatologia: 'En la enfermedad autoinmunitaria, la misma desregulación inmunitaria que ataca a la articulación o a la piel afecta al pulmón, con patrones que varian según la enfermedad: neumonía intersticial no específica en la esclerosis sistémica y en las miopatías, neumonía intersticial usual con más frecuencia en la artritis reumatoide. En la toxicidad por fármacos los mecanismos son varios: citotoxicidad directa dependiente de dosis acumulada (bleomicina, amiodarona), reacción de hipersensibilidad idiosincrásica (metotrexato, nitrofurantoína) y desinhibición inmunitaria en los inhibidores del punto de control.',
      epidemiologia: 'La EPID es una de las principales causas de muerte en la esclerosis sistémica y en la artritis reumatoide. En un porcentaje relevante de los casos la afectación pulmonar precede en meses o años al diagnóstico reumatológico. La neumonitis por inhibidores del punto de control ha crecido de forma llamativa con la expansión de la inmunoterapia oncológica.',
      factores_riesgo: ['Esclerosis sistémica, sobre todo con anticuerpos anti-Scl-70', 'Artritis reumatoide de larga evolución, seropositiva y en varones fumadores', 'Miopatías inflamatorias con anticuerpos antisintetasa o anti-MDA5', 'Síndrome de Sjogren y enfermedad mixta del tejido conectivo', 'Tabaquismo, que aumenta el riesgo en la artritis reumatoide', 'Amiodarona, metotrexato, nitrofurantoína, bleomicina y sales de oro', 'Inhibidores del punto de control inmunitario', 'Dosis acumulada alta y edad avanzada para los citotóxicos', 'Radioterapia torácica previa o concomitante', 'Nefropatía, que reduce el aclaramiento de varios de estos fármacos'],
      clinica: 'Disnea y tos progresivas, a menudo atribuidas a la enfermedad de base o al desacondicionamiento. Buscar activamente los signos extrapulmonares: Raynaud, esclerodactilia, telangiectasias, artritis, manos de mecánico, papulas de Gottron, debilidad proximal, xerostomia y xeroftalmia. En la neumonitis por anti-MDA5 el cuadro puede ser rápidamente progresivo con poca afectación muscular, y es una urgencia.',
      criterios_dx: 'EPID confirmada por tomografía más criterios de la enfermedad autoinmunitaria, o relación temporal plausible con un fármaco y mejoría al retirarlo. Existe una categoría intermedia, la neumonía intersticial con características autoinmunitarias, para los casos con rasgos de autoinmunidad que no cumplen criterios de ninguna conectivopatia concreta.',
      laboratorio: 'Panel de autoinmunidad amplio, incluido el panel de miositis, que en un paciente con EPID debe pedirse aunque no haya síntomas articulares ni cutáneos. Capilaroscopia periungueal, que es sencilla y muy rentable en la sospecha de esclerosis sistémica. Creatincinasa y aldolasa si se sospecha miopatía.',
      imagen: 'Tomografía con patrón de neumonía intersticial no específica (vidrio deslustrado con reticulacion fina y preservación subpleural) en la esclerosis sistémica y en las miopatías, y con más frecuencia patrón de neumonía intersticial usual en la artritis reumatoide. El esófago dilatado acompañando a la fibrosis basal orienta a esclerosis sistémica.',
      complementarios: 'Valoración conjunta con reumatología u oncología. Cribado periódico de EPID en la esclerosis sistémica, donde la tomografía basal esta indicada en todos los pacientes al diagnóstico por la frecuencia y el impacto de la afectación pulmonar.',
      dx_diferencial: 'Fibrosis pulmonar idiopática, neumonitis por hipersensibilidad, infección oportunista en el paciente inmunosuprimido (que es el diferencial más urgente y más peligroso de confundir), edema pulmonar, hemorragia alveolar y progresión tumoral o linfangitis carcinomatosa en el paciente oncológico.',
      tx_medico: 'Tratamiento de la enfermedad de base coordinado con reumatología. En la toxicidad por fármacos, RETIRADA INMEDIATA del agente sospechoso y registro visible de la contraindicación en la historia. Rehabilitación, oxígeno y vacunación.',
      tx_farmacologico: 'Corticoide con inmunosupresor ahorrador según la enfermedad: micofenolato y ciclofosfamida en la esclerosis sistémica, rituximab en casos refractarios y en las miopatías, tocilizumab en la esclerosis sistémica con inflamación. NINTEDANIB si aparece comportamiento progresivo, y esta autorizado específicamente en la EPID de la esclerosis sistémica. En la neumonitis por inhibidores del punto de control: retirada del fármaco y corticoide, con escalada a inmunosupresor si no responde.',
      tx_intervencionista: 'Trasplante pulmonar en casos seleccionados, con la particularidad de que la afectación esofágica grave de la esclerosis sistémica complica la indicación por el riesgo de microaspiracion sobre el injerto.',
      criterios_uci: 'La neumonitis rápidamente progresiva asociada a anti-MDA5 y algunas neumonitis graves por inhibidores del punto de control pueden requerir soporte ventilatorio e inmunosupresión intensiva urgente. Tienen mal pronóstico y exigen actuar rápido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los de cualquier EPID avanzada, valorando la afectación extrapulmonar y esofágica de la enfermedad de base.',
      seguimiento_hospitalario: 'Ante deterioro en un paciente inmunosuprimido, descartar SIEMPRE infección oportunista antes de subir la inmunosupresión: es el error con consecuencias más graves de esta ficha.',
      seguimiento_ambulatorio: 'Función pulmonar cada 3 a 6 meses en la EPID establecida y cribado periódico en las enfermedades de alto riesgo. Vigilancia de la toxicidad del inmunosupresor y profilaxis de infecciones oportunistas cuando corresponda.',
      pronostico: 'Muy variable. La EPID de la esclerosis sistémica y la asociada a anti-MDA5 tienen peor curso. La toxicidad por fármacos suele mejorar al retirarlos si se detecta pronto, y ese es el argumento para revisar la medicación en toda EPID de nueva aparición.',
      algoritmo: ['En toda EPID, pedir panel de autoinmunidad amplio, incluido el de miositis', 'Explorar buscando Raynaud, esclerodactilia, manos de mecánico y debilidad proximal', 'Hacer capilaroscopia si se sospecha esclerosis sistémica', 'Revisar TODA la medicación, incluida la retirada hace meses', 'Retirar de inmediato el fármaco sospechoso y dejarlo registrado', 'Coordinar el tratamiento con reumatología u oncología', 'Corticoide con inmunosupresor ahorrador según la enfermedad de base', 'Añadir nintedanib si el comportamiento es progresivo', 'Ante deterioro bajo inmunosupresión, descartar infección ANTES de escalar', 'Cribar EPID de forma periódica en la esclerosis sistémica']
    },
    {
      nombre: 'Neumoconiosis y EPID ocupacional',
      color: '#6b4a2e',
      definicion: 'Enfermedad pulmonar parenquimatosa producida por la inhalacion y el depósito de polvo mineral en el pulmón y por la reacción tisular que desencadena. Las principales son la silicosis, la asbestosis, la neumoconiosis del minero del carbón y la beriliosis.',
      fisiopatologia: 'Las particulas respirables (de 0.5 a 5 micras) alcanzan el alveolo y son fagocitadas por el macrofago. La sílice cristalina es especialmente citotóxica: activa el inflamasoma, mata al macrofago y libera la particula, que vuelve a ser fagocitada en un ciclo autoperpetuado que produce nódulos fibróticos. El asbesto, por su forma fibrilar, no puede ser eliminado y genera inflamación crónica y daño oxidativo, con fibrosis intersticial y con la capacidad añadida de producir enfermedad pleural y mesotelioma. El berilio actúa como un antígeno y produce una enfermedad granulomatosa indistinguible de la sarcoidosis.',
      epidemiologia: 'Lejos de ser enfermedades del pasado, la silicosis ha reaparecido con fuerza asociada al corte y pulido de aglomerados de cuarzo para encimeras, con formas aceleradas en trabajadores jóvenes. La latencia de la asbestosis y del mesotelioma se mide en décadas, de modo que siguen apareciendo casos por exposiciones antiguas mucho después de que se prohibiera el material.',
      factores_riesgo: ['Corte, pulido y manipulación en seco de aglomerados de cuarzo', 'Minería, canteras, tunelado y chorreado de arena', 'Ceramica, vidrio, fundición y construcción', 'Trabajo con amianto: aislamiento, astilleros, frenos, fibrocemento', 'Minería del carbón', 'Industria aeroespacial, electrónica y dental para el berilio', 'Ausencia de protección respiratoria y de trabajo en húmedo', 'Tabaquismo, que multiplica el riesgo de cáncer con el asbesto', 'Intensidad y duración acumuladas de la exposición', 'Trabajo en empresas pequeñas sin vigilancia de la salud'],
      clinica: 'Disnea de esfuerzo y tos de instauración muy lenta, salvo en la silicosis acelerada. Puede ser un hallazgo radiológico en un trabajador asintomático, que es la situación ideal porque permite retirar la exposición. En la asbestosis, crepitantes basales y acropaquias. En la silicosis avanzada, síndrome constitucional que obliga a descartar tuberculosis y cáncer.',
      criterios_dx: 'HISTORIA DE EXPOSICIÓN suficiente en intensidad y latencia MÁS patrón radiológico compatible. La biopsia rara vez es necesaria si la exposición es clara. La clave del diagnóstico es preguntar por TODOS los trabajos desde el primero, incluidos los de juventud y los no declarados, porque la latencia puede ser de décadas.',
      laboratorio: 'Sin marcadores específicos. Prueba de proliferación linfocitaria al berilio si se sospecha beriliosis, que es lo que la separa de la sarcoidosis. Cribado de tuberculosis en la silicosis, donde el riesgo esta claramente aumentado.',
      imagen: 'Silicosis: nódulos de predominio en lóbulos superiores y posteriores, adenopatías hiliares con calcificación en cascara de huevo, y en la forma complicada masas de FIBROSIS MASIVA PROGRESIVA. Asbestosis: fibrosis intersticial basal y subpleural con bandas parenquimatosas, junto a PLACAS PLEURALES calcificadas que son el marcador de exposición. Carbón: nódulos similares a los de la silicosis.',
      complementarios: 'Notificación como ENFERMEDAD PROFESIONAL y coordinación con salud laboral, con consecuencias económicas y preventivas para el trabajador y para sus companeros. Estudio de los expuestos al mismo foco: un caso índice suele significar más casos.',
      dx_diferencial: 'Sarcoidosis (indistinguible de la beriliosis sin la prueba de proliferación al berilio), tuberculosis, metástasis miliares, fibrosis pulmonar idiopática en la asbestosis, neumonitis por hipersensibilidad y otras EPID ocupacionales como la del metal duro.',
      tx_medico: 'RETIRAR LA EXPOSICIÓN, aunque no revierta lo ya establecido: evita la progresión y protege a los companeros. Abandono del tabaco, que es especialmente importante en la exposición al asbesto por el efecto multiplicativo sobre el cáncer de pulmón. Rehabilitación, oxígeno y vacunación.',
      tx_farmacologico: 'No hay tratamiento específico que revierta la fibrosis. El corticoide no ha demostrado beneficio. En la beriliosis si se usa corticoide, porque es una enfermedad granulomatosa inmunomediada. Si el comportamiento es progresivo, valorar nintedanib. Tratamiento de la tuberculosis, activa o latente, en la silicosis.',
      tx_intervencionista: 'Trasplante pulmonar en casos avanzados seleccionados. Lavado pulmonar total en la proteinosis alveolar secundaria a exposición masiva a sílice, que es una situación poco frecuente pero tratable.',
      criterios_uci: 'Los de cualquier insuficiencia respiratoria. La silicoproteinosis aguda por exposición masiva puede producir un cuadro rápidamente progresivo y muy grave en trabajadores jóvenes.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los de cualquier EPID avanzada, valorando la edad, que en estos pacientes suele ser menor.',
      seguimiento_hospitalario: 'Sin particularidades propias.',
      seguimiento_ambulatorio: 'Vigilancia periódica con función pulmonar e imagen. CRIBADO DE TUBERCULOSIS repetido en la silicosis. Vigilancia de cáncer de pulmón y de mesotelioma en la exposición al asbesto. Seguimiento de los companeros expuestos y de la prevención en el puesto.',
      pronostico: 'Depende de la dosis acumulada y de la retirada. La silicosis simple puede permanecer estable, y la complicada con fibrosis masiva progresa aunque cese la exposición. El mesotelioma tiene mal pronóstico y una latencia que puede superar los 40 años.',
      algoritmo: ['Preguntar por TODOS los trabajos desde el primero, no solo por el actual', 'Estimar intensidad y latencia de la exposición', 'Tomografía buscando el patrón característico y las placas pleurales', 'Descartar tuberculosis en la silicosis, y repetir el cribado en el seguimiento', 'Prueba de proliferación al berilio si el cuadro parece sarcoidosis en un expuesto', 'Retirar la exposición aunque la enfermedad ya este establecida', 'Notificar como enfermedad profesional y avisar a salud laboral', 'Estudiar a los companeros expuestos al mismo foco', 'Abandono del tabaco, imprescindible con exposición al asbesto', 'Valorar nintedanib si el comportamiento es progresivo']
    },
    {
      nombre: 'Restricción extrapulmonar: pared torácica y enfermedad neuromuscular',
      color: '#3f6b52',
      definicion: 'Patrón restrictivo producido por una alteración de la bomba ventilatoria y no del parénquima: pared torácica, pleura, contenido abdominal, músculo respiratorio o su inervación. Se reconoce porque la DLCO es normal y la KCO normal o alta.',
      fisiopatologia: 'El pulmón es normal pero no se expande. En la obesidad y en el derrame, por compresión y por reducción del volumen disponible. En la cifoescoliosis y en la espondilitis, por rigidez de la caja. En la enfermedad neuromuscular, porque el músculo no genera la presión necesaria: la FVC cae, el volumen residual sube y aparecen microatelectasias que reducen la distensibilidad. El diafragma es el más vulnerable, y por eso la disnea empeora en decúbito, cuando el contenido abdominal lo empuja. La hipoventilación aparece PRIMERO durante el sueño, sobre todo en fase REM, cuando la musculatura accesoria se inhibe y todo depende del diafragma.',
      epidemiologia: 'La insuficiencia respiratoria es la principal causa de muerte en la esclerosis lateral amiotrófica y en la mayoría de las distrofias musculares. La obesidad es hoy la causa más frecuente de restricción extrapulmonar en la consulta general, y en su forma extrema produce el síndrome de hipoventilación asociado a obesidad.',
      factores_riesgo: ['Obesidad, sobre todo con índice de masa corporal por encima de 35', 'Esclerosis lateral amiotrófica y otras enfermedades de motoneurona', 'Distrofias musculares y miopatías congénitas o metabólicas', 'Miastenia gravis y síndrome de Guillain-Barré', 'Lesión medular cervical alta', 'Cifoescoliosis grave y toracoplastia antigua', 'Espondilitis anquilosante con tórax rígido', 'Parálisis diafragmática uni o bilateral, incluida la posquirúrgica', 'Ascitis a tensión y grandes masas abdominales', 'Derrame pleural crónico y fibrotorax'],
      clinica: 'Disnea que empeora claramente EN DECÚBITO, sin crepitantes ni acropaquias. Cefalea matutina, somnolencia diurna, sueño no reparador y dificultad de concentración, que son los síntomas de la hipoventilación nocturna y preceden en meses a la hipercapnia diurna. Tos débil e infecciones respiratorias de repetición por mal aclaramiento de secreciones. Respiración paradójica abdominal en supino en la debilidad avanzada.',
      criterios_dx: 'Restricción confirmada por capacidad pulmonar total baja CON DLCO NORMAL y KCO normal o alta. A partir de ahi, identificar la causa: exploración neurológica, presiones respiratorias máximas, FVC en decúbito y ecografía diafragmática. Ver la Figura 1 de Definición.',
      laboratorio: 'Gasometría arterial y bicarbonato: un bicarbonato elevado en un paciente con enfermedad neuromuscular indica hipoventilación nocturna ya establecida aunque la gasometría diurna sea normal, y es una pista barata que se pasa por alto con frecuencia. Creatincinasa y estudio de la enfermedad de base.',
      imagen: 'Radiografía con elevación diafragmática en la parálisis, y valoración de la deformidad de la pared. Ecografía diafragmática para medir grosor y fracción de engrosamiento a pie de cama. Radioscopia con la maniobra de olfateo en la parálisis unilateral.',
      complementarios: 'FVC en sedestación Y EN DECÚBITO, con una caída mayor del 20% como marcador de debilidad diafragmática. Presiones inspiratoria y espiratoria máximas y presión inspiratoria nasal. Pulsioximetría nocturna o poligrafia, que detecta la hipoventilación antes que cualquier prueba diurna. Pico de flujo de tos para valorar la eficacia del aclaramiento.',
      dx_diferencial: 'EPID (que se separa por la DLCO), insuficiencia cardiaca, hipertensión pulmonar, desacondicionamiento, anemia, y en la disnea de decúbito, la ortopnea de origen cardiaco.',
      tx_medico: 'Tratamiento de la enfermedad de base. Pérdida de peso y valoración de cirugía bariátrica en la obesidad, que es la única causa realmente reversible del grupo. Fisioterapia respiratoria, técnicas de tos asistida manual y mecánica, y vacunación, todas ellas medidas que reducen los ingresos por infección. Evitar sedantes y opioides.',
      tx_farmacologico: 'El de la enfermedad de base: inmunosupresión en la miastenia, riluzol y edaravona en la esclerosis lateral amiotrófica, tratamiento específico en las miopatías que lo tienen. No hay fármaco que mejore la mecánica en si.',
      tx_intervencionista: 'VENTILACIÓN NO INVASIVA DOMICILIARIA, que es la intervención que cambia el pronóstico: en la esclerosis lateral amiotrófica prolonga la supervivencia y mejora la calidad de vida, y en el síndrome de hipoventilación asociado a obesidad corrige la hipercapnia. Se indica ante síntomas de hipoventilación, hipercapnia diurna, desaturación nocturna significativa, FVC por debajo del 50% o presión inspiratoria máxima menos negativa de -40 cmH2O. Traqueostomía con ventilación invasiva en fases avanzadas, decidida con antelación. Cirugía de la escoliosis en casos seleccionados.',
      criterios_uci: 'Crisis miastenica, síndrome de Guillain-Barré con FVC en descenso rápido (donde se intuba por la tendencia de la FVC y no por la gasometría, que se altera tarde), y descompensación aguda de cualquier enfermedad neuromuscular avanzada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica: el problema no es el pulmón.',
      seguimiento_hospitalario: 'En la enfermedad neuromuscular aguda, medir la FVC de forma seriada y no esperar a la hipercapnia: la gasometría se altera cuando el paciente ya esta al limite. Vigilar la capacidad de tragar y de toser.',
      seguimiento_ambulatorio: 'Función pulmonar con FVC en decúbito y presiones máximas cada 3 a 6 meses en la enfermedad progresiva. Pulsioximetría nocturna periódica. Planificación anticipada de decisiones sobre ventilación y traqueostomía, hablada con tiempo y no en una urgencia.',
      pronostico: 'Depende por completo de la enfermedad de base. La ventilación no invasiva domiciliaria mejora la supervivencia y la calidad de vida en varias de estas enfermedades, lo que convierte la detección precoz de la hipoventilación nocturna en una de las intervenciones más rentables del tema.',
      algoritmo: ['Confirmar la restricción con capacidad pulmonar total, no con espirometría sola', 'Mirar la DLCO: normal con KCO normal o alta indica causa EXTRAPULMONAR', 'Explorar buscando obesidad, deformidad de la pared o debilidad muscular', 'Medir la FVC en sedestación y en DECÚBITO', 'Medir presiones inspiratoria y espiratoria máximas', 'Preguntar por cefalea matutina, somnolencia y sueño no reparador', 'Mirar el bicarbonato: elevado indica hipoventilación nocturna establecida', 'Pulsioximetría nocturna o poligrafia', 'Indicar ventilación no invasiva domiciliaria si cumple criterios', 'Enseñar técnicas de tos asistida y planificar decisiones con antelación']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La EPID es sobre todo una enfermedad de consulta, y por eso lo que más se juega aquí es el método diagnóstico y no el manejo del ingreso. Los errores se repiten: diagnosticar restricción con una espirometría, etiquetar de idiopática sin haber preguntado por aves ni por el trabajo, y dar corticoide a una fibrosis idiopática. Lo que sigue es la lista de comprobacion.',
    parametros: ['La espirometría NO diagnóstica restricción: hace falta capacidad pulmonar total por pletismografia', 'Corregir siempre la DLCO por la hemoglobina antes de interpretarla', 'Pedir la tomografía de alta resolución en inspiración, ESPIRACIÓN y prono', 'Interrogar por aves, humedades, humidificadores y TODA la historia laboral desde el primer trabajo', 'Panel de autoinmunidad amplio, incluido el de miositis, aunque no haya síntomas reumatológicos', 'Revisar todos los fármacos, incluidos los suspendidos hace meses', 'Con patrón de neumonía intersticial usual definitivo y exclusiones hechas: NO biopsiar', 'Llevar todo caso de EPID al comite multidisciplinar: sin el, el diagnóstico es provisional', 'En la fibrosis pulmonar idiopática, NUNCA corticoide ni inmunosupresor de mantenimiento', 'Derivar a trasplante EN EL MOMENTO del diagnóstico, no cuando el paciente ya se ha deteriorado', 'Medir la desaturación en la marcha de 6 minutos: en reposo se escapa', 'En la restricción extrapulmonar, medir la FVC en decúbito y mirar el bicarbonato'],
    criterios_uci_general: 'Insuficiencia respiratoria aguda por exacerbación de la fibrosis, neumonitis rápidamente progresiva (sobre todo la asociada a anti-MDA5), y crisis neuromuscular con FVC en descenso rápido, donde se intuba por la tendencia de la FVC y no por la gasometría. En la fibrosis idiopática avanzada, la ventilación invasiva rara vez cambia el desenlace fuera del puente a trasplante, y eso obliga a haber hablado antes de los objetivos de cuidado.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Remitir en el momento del diagnóstico en la fibrosis pulmonar idiopática y en cualquier EPID fibrosante progresiva. Incluir en lista ante caída de la FVC del 10% o más o de la DLCO del 15% o más en 6 meses, desaturación por debajo del 88% o marcha menor de 250 metros, hipertensión pulmonar u hospitalización por deterioro respiratorio.',
    prevencion: 'Primaria: control de la exposición laboral a sílice, asbesto, carbón y berilio, con trabajo en húmedo, aspiración localizada y protección respiratoria; control de humedades y de la exposición a aves en el domicilio; y abandono del tabaco. Secundaria: cribado de EPID en las enfermedades autoinmunitarias de alto riesgo, vigilancia de la salud en los trabajadores expuestos, y revisión de la medicación. Terciaria: retirada del antígeno o del fármaco, función pulmonar seriada para detectar el fenotipo progresivo, rehabilitación, vacunación, oxigenoterapia y derivación precoz a trasplante.'
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
  'Fibrosis pulmonar idiopática': { definicion: [1, 3, 4, 5, 8], criterios_dx: [1, 3, 8], laboratorio: [1, 3, 8], tx_farmacologico: [1, 3, 4, 5, 8] },
  'Fibrosis pulmonar progresiva': { definicion: [1, 6, 7, 16], criterios_dx: [1, 6, 7, 16], laboratorio: [1, 6, 7, 16], tx_farmacologico: [1, 6, 7, 16] },
  'Neumonitis por hipersensibilidad': { definicion: [2, 1], criterios_dx: [2, 1], laboratorio: [2, 1], tx_farmacologico: [2, 1] },
  'EPID autoinmunitaria y por fármacos': { definicion: [7, 11, 17], criterios_dx: [7, 11, 17], laboratorio: [7, 11, 17], tx_farmacologico: [7, 11, 17] },
  'Neumoconiosis y EPID ocupacional': { definicion: [14, 15], criterios_dx: [14, 15], laboratorio: [14, 15], tx_farmacologico: [14, 15] },
  'Restricción extrapulmonar: pared torácica y enfermedad neuromuscular': { definicion: [13, 18], criterios_dx: [13, 18], laboratorio: [13, 18], tx_farmacologico: [13, 18] }
};
export const estigmasTitulo = 'Signos de la enfermedad intersticial y de la restricción, y lo que significa cada uno';
export const estigmas = [
  { s: 'Crepitantes secos en velcro', p: 'Prácticamente constantes en la fibrosis', photo: null, desc: 'Teleinspiratorios, finos, que no se modifican con la tos y que recuerdan a despegar una tira de velcro. Pueden PRECEDER en años a las alteraciones radiológicas, de modo que oirlos en un paciente con radiografía normal es motivo para pedir una tomografía, no para tranquilizar.' },
  { s: 'Acropaquias', p: '~50% en la fibrosis idiopática', photo: null, desc: 'Aumento de la convexidad ungueal con pérdida del angulo de Lovibond. Frecuentes en la fibrosis idiopática y en la asbestosis, raras en la sarcoidosis y en la neumonitis por hipersensibilidad, lo que las hace un dato de orientación útil a pie de cama.' },
  { s: 'Desaturación al esfuerzo con saturación normal en reposo', p: 'El hallazgo más precoz', photo: null, desc: 'Es lo primero que se altera y lo que más se escapa, porque solo aparece si se mide caminando. Una saturación normal sentado no descarta nada: la marcha de 6 minutos con oximetría es la prueba que lo detecta.' },
  { s: 'Disnea desproporcionada a la exploración y a la radiografía', p: 'Frecuente', photo: null, desc: 'La radiografía de tórax puede ser normal con enfermedad establecida. Un paciente con disnea de esfuerzo progresiva, crepitantes y radiografía limpia necesita tomografía de alta resolución y pruebas de función pulmonar completas.' },
  { s: 'Chirrido inspiratorio breve o squawk', p: 'En la neumonitis por hipersensibilidad', photo: null, desc: 'Ruido inspiratorio corto y agudo por afectación bronquiolar, distinto del crepitante. Su presencia en un paciente con fibrosis orienta hacia la neumonitis por hipersensibilidad y en contra de la fibrosis idiopática.' },
  { s: 'Mejoría fuera de casa o del trabajo', p: 'Dato clave de anamnesis', photo: null, desc: 'No es un signo físico pero funciona como tal: la mejoría en vacaciones o los fines de semana con recaída al volver es la pista más útil de la neumonitis por hipersensibilidad y del asma ocupacional. Se pierde cuando la enfermedad se hace fibrótica.' },
  { s: 'Fenómeno de Raynaud y esclerodactilia', p: 'En la EPID autoinmunitaria', photo: null, desc: 'La EPID puede ser la PRIMERA manifestación de una conectivopatia, años antes que la piel o las articulaciones. Buscar Raynaud, esclerodactilia y alteraciones en la capilaroscopia cambia el diagnóstico y el tratamiento por completo.' },
  { s: 'Manos de mecánico y papulas de Gottron', p: 'En el síndrome antisintetasa', photo: null, desc: 'Hiperqueratosis fisurada en los bordes radiales de los dedos, y papulas violáceas sobre los nudillos. Identifican una miopatía inflamatoria en un paciente que puede tener poca o ninguna debilidad, y que responde a inmunosupresión.' },
  { s: 'Disnea que empeora en decúbito sin crepitantes', p: 'Restricción extrapulmonar', photo: null, desc: 'Ortopnea sin insuficiencia cardiaca ni crepitantes apunta a debilidad diafragmática. Se confirma con la caída de la FVC al pasar de sentado a tumbado, que si supera el 20% indica disfunción diafragmática significativa.' },
  { s: 'Respiración paradójica abdominal en supino', p: 'Debilidad avanzada', photo: null, desc: 'El abdomen se hunde en la inspiración en lugar de expandirse. Indica que el diafragma ya no genera presión suficiente y anuncia la insuficiencia ventilatoria: obliga a estudiar el sueño y a plantear la ventilación domiciliaria.' },
  { s: 'Cefalea matutina y somnolencia diurna', p: 'Hipoventilación nocturna', photo: null, desc: 'Son los síntomas de la retención de dióxido de carbono durante el sueño, que aparece meses antes que la hipercapnia diurna. Un bicarbonato elevado en un paciente neuromuscular apunta a lo mismo y cuesta muy poco mirarlo.' },
  { s: 'Tos débil e infecciones respiratorias de repetición', p: 'En la enfermedad neuromuscular', photo: null, desc: 'La debilidad de la musculatura espiratoria impide el aclaramiento de secreciones y es la via por la que estos pacientes ingresan y mueren. El pico de flujo de tos lo cuantifica, y las técnicas de tos asistida reducen los ingresos.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Patrones de la tomografía de alta resolución (calculadora disponible)': [1],
  'Interpretación del patrón restrictivo (calculadora disponible)': [13, 12],
  'Criterios de fibrosis pulmonar progresiva (calculadora disponible)': [1, 6],
  'Índice GAP (calculadora disponible)': [8],
  'Clasificación de las neumonías intersticiales idiopáticas': [10, 16],
  'Criterios de neumonitis por hipersensibilidad': [2],
  'Criterios de exacerbación aguda de la fibrosis pulmonar': [9]
};
export const escalaCalc = {
  'Patrones de la tomografía de alta resolución (calculadora disponible)': 'patron-tcar',
  'Interpretación del patrón restrictivo (calculadora disponible)': 'patron-restrictivo',
  'Criterios de fibrosis pulmonar progresiva (calculadora disponible)': 'fibrosis-progresiva',
  'Índice GAP (calculadora disponible)': 'gap'
};
export const compGroups = [
  { name: 'Fibrosis: la idiopática y el fenotipo progresivo', items: ['Fibrosis pulmonar idiopática', 'Fibrosis pulmonar progresiva'] },
  { name: 'EPID de causa identificable', items: ['Neumonitis por hipersensibilidad', 'EPID autoinmunitaria y por fármacos', 'Neumoconiosis y EPID ocupacional'] },
  { name: 'Restricción sin enfermedad del parénquima', items: ['Restricción extrapulmonar: pared torácica y enfermedad neuromuscular'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el eje del tema: la fibrosis pulmonar idiopática, que se diagnostica excluyendo, y la fibrosis pulmonar progresiva, que es un fenotipo de comportamiento y no una enfermedad. Las tres siguientes son precisamente lo que hay que excluir antes de decir idiopática, y las tres tienen tratamiento propio: retirar el antígeno, inmunosuprimir la autoinmunidad o suspender el fármaco, y apartar al trabajador de la exposición. La última queda un poco aparte pero pertenece al mismo capítulo de fisiología: la restricción que no viene del pulmón sino de la bomba que lo mueve, y que se reconoce porque la DLCO es normal.';
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
  root: { title: 'EPID Y RESTRICCIÓN', color: '#6b4a7a', target: 'definicion' },
  branches: [
    { title: 'ORDENAR LA RESTRICCIÓN', sub: 'La DLCO parte el problema en dos', color: '#3d5a73', target: 'clasificacion', leaves: [
      { title: 'Capacidad pulmonar total', sub: 'La espirometría no basta', color: '#3d5a73', target: 'diagnostico' },
      { title: 'DLCO baja', sub: 'Enfermedad del parénquima', color: '#8c3a34', target: 'complicaciones' },
      { title: 'DLCO normal, KCO alta', sub: 'Problema de la bomba', color: '#3f6b52', target: 'complicaciones' },
      { title: 'FVC en decúbito', sub: 'Caída mayor del 20%: diafragma', color: '#6b4a2e', target: 'diagnostico' }
    ] },
    { title: 'DIAGNÓSTICO DE LA EPID', sub: 'Imagen, exclusiones y comite', color: '#6b4a7a', target: 'diagnostico', leaves: [
      { title: 'NIU definitiva', sub: 'No hace falta biopsia', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Aves, humedades y trabajo', sub: 'Preguntar por todo, uno por uno', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Autoinmunidad y fármacos', sub: 'Puede ser la primera manifestación', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Comite multidisciplinar', sub: 'El patrón de referencia', color: '#6b4a7a', target: 'diagnostico' }
    ] },
    { title: 'TRATAMIENTO', sub: 'Y el error que aumenta la mortalidad', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Antifibroticos', sub: 'Enlentecen, no revierten', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Fibrosis progresiva', sub: '2 de 3 criterios en un año', color: '#6b4a7a', target: 'clasificacion' },
      { title: 'Nunca inmunosuprimir la FPI', sub: 'El ensayo se paro por mortalidad', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Trasplante desde el diagnóstico', sub: 'No cuando ya se deterioro', color: '#3f6b52', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 12, 13], no_invasivos: [1, 8, 13], imagen: [1, 2] };
export const clasificacionCite = [1, 2, 8, 10];
export const seguimientoCite = [1, 9];
