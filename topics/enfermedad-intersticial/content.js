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
  subtitulo: 'Modulo 53 · Medicina Interna',
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
    <strong style="color:#6b4a7a;">La restriccion NO se diagnostica con la espirometria.</strong> <span style="color:var(--ink-dim);">Una FVC baja con cociente FEV1/FVC normal solo <strong>sugiere</strong> restriccion: hace falta la <strong>capacidad pulmonar total</strong> por pletismografia para confirmarla. Y una vez confirmada, quien dice de que se trata es la <strong>DLCO</strong>.</span>
  </div>

  <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;margin-bottom:4px;">
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">Paso 1<br>CONFIRMAR</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Capacidad pulmonar total por debajo del limite inferior de la normalidad</strong> (en la practica, menos del 80% del predicho). El cociente FEV1/FVC es normal o incluso alto, al reves que en la obstruccion.</div>
  </div>
  <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;margin-bottom:6px;">
    <div style="background:#6b4a7a22;border:1px solid #6b4a7a;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a7a;">Paso 2<br>SEPARAR</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La <strong style="color:var(--ink);">DLCO</strong> divide el problema en dos mundos que se tratan de forma completamente distinta. Y la <strong>KCO</strong> (DLCO dividida por el volumen alveolar) afina: en la restriccion extrapulmonar el pulmon esta sano pero poco distendido, de modo que transfiere <strong>mas</strong> por unidad de volumen.</div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">INTRINSECA (parenquimatosa)<br><span style="font-weight:400;color:var(--ink-dim);">DLCO BAJA, KCO baja</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">El pulmon esta enfermo: fibrosis, inflamacion o ocupacion alveolar. Aqui viven todas las <strong style="color:var(--ink);">enfermedades intersticiales difusas</strong>, la sarcoidosis, la neumoconiosis y la EPID por farmacos. Hipoxemia que empeora con el ejercicio, crepitantes secos en velcro y acropaquias.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">EXTRINSECA (de la bomba)<br><span style="font-weight:400;color:var(--ink-dim);">DLCO normal, KCO NORMAL O ALTA</span></div>
      <div style="color:var(--ink-dim);line-height:1.55;">El pulmon esta sano y lo que falla es lo que lo mueve o lo contiene: <strong style="color:var(--ink);">obesidad, derrame, cifoescoliosis, espondilitis, paralisis diafragmatica, miastenia, esclerosis lateral amiotrofica, Guillain-Barre</strong>. Sin crepitantes ni acropaquias. La clave funcional es la <strong>caida de la FVC en decubito</strong>.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos pruebas de cabecera que casi nadie pide y que valen mucho.</strong> La <strong>FVC en sedestacion y en decubito supino</strong>: una caida mayor del 20% indica debilidad diafragmatica y es lo que anticipa la insuficiencia ventilatoria nocturna. Y la <strong>DLCO corregida por hemoglobina</strong>: la anemia baja la DLCO sin que haya ninguna enfermedad pulmonar, y no corregirla ha llevado a mas de un estudio innecesario.
  </div>
</div>`;

const tcarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a7a;border-radius:8px;padding:5px 9px;background:#6b4a7a12;margin-bottom:6px;">
    <strong style="color:#6b4a7a;">El patron de la tomografia de alta resolucion decide si hace falta biopsia.</strong> <span style="color:var(--ink-dim);">Con un patron de <strong>neumonia intersticial usual definitivo</strong> en el contexto clinico adecuado, la biopsia no aporta nada y se evita un procedimiento con mortalidad no despreciable.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">NIU<br>DEFINITIVA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Predominio <strong style="color:var(--ink);">subpleural y basal</strong>, distribucion heterogenea, <strong style="color:var(--ink);">panal de abeja</strong> con o sin bronquiectasias de traccion. <strong style="color:#8c3a34;">No hace falta biopsia</strong>: con clinica compatible y exposiciones y autoinmunidad descartadas, es fibrosis pulmonar idiopatica.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">NIU<br>PROBABLE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mismo predominio subpleural y basal con reticulacion y bronquiectasias o bronquiolectasias de traccion, <strong>pero SIN panal</strong>. La biopsia se discute caso a caso en el comite: en el varon mayor fumador con clinica tipica, muchos grupos ya no la hacen.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">INDETERMINADA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Fibrosis sutil o distribucion que no encaja del todo. Suele requerir muestra histologica, por criobiopsia transbronquial o por cirugia, siempre pasando por el comite.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">DIAGNOSTICO<br>ALTERNATIVO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Hallazgos que apuntan a otra cosa: predominio en <strong>lobulos superiores</strong> o peribroncovascular, <strong>vidrio deslustrado extenso</strong>, <strong>mosaico con atrapamiento en espiracion</strong> (muy sugestivo de neumonitis por hipersensibilidad), quistes, nodulos o consolidacion. Cambia el diagnostico y con el todo el tratamiento.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Signos que conviene reconocer.</strong> <strong>Panal de abeja</strong>: quistes agrupados, de pared gruesa y tama&#241;o similar, en varias capas subpleurales; es lo que define la NIU y lo que mas se sobrediagnostica confundiendolo con enfisema paraseptal. <strong>Signo de las tres densidades</strong> (vidrio, pulmon normal y atrapamiento en el mismo corte): muy sugestivo de neumonitis por hipersensibilidad fibrotica. <strong>Esofago dilatado</strong> con fibrosis basal: esclerosis sistemica.
  </div>
</div>`;

const multidisciplinarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La fibrosis pulmonar idiopatica es un diagnostico de EXCLUSION.</strong> <span style="color:var(--ink-dim);">Antes de ponerle esa etiqueta hay que haber buscado activamente las tres cosas que la imitan y que si tienen tratamiento propio. Etiquetar de idiopatica una neumonitis por hipersensibilidad es privar al paciente de la unica intervencion que la cura: retirar el antigeno.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:114px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. EXPOSICIONES</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Interrogatorio dirigido y detallado: <strong style="color:var(--ink);">aves</strong> (incluidos edredones y almohadas de pluma, y palomas del vecino), <strong style="color:var(--ink);">humedades y mohos</strong> en casa o en el trabajo, humidificadores, jacuzzi, aire acondicionado, quesos, embutidos, setas, y toda la historia <strong>laboral completa</strong>: silice, asbesto, carbon, berilio, metales duros. Hay que preguntar por cada trabajo desde el primero, no solo por el actual.</div>
    </div>
    <div style="display:grid;grid-template-columns:114px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">2. AUTOINMUNIDAD</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Anticuerpos antinucleares, factor reumatoide, anticuerpos frente al peptido citrulinado y panel de miositis con antisintetasas. Y la <strong style="color:var(--ink);">exploracion</strong>, que a menudo da el diagnostico: fenomeno de Raynaud, esclerodactilia, capilaroscopia alterada, artritis, <strong>manos de mecanico</strong>, papulas de Gottron y debilidad proximal. La EPID puede ser la PRIMERA manifestacion de la conectivopatia, a veces a&#241;os antes.</div>
    </div>
    <div style="display:grid;grid-template-columns:114px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">3. FARMACOS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Revisar TODA la medicacion, incluida la retirada hace meses: <strong style="color:var(--ink);">amiodarona</strong>, metotrexato, nitrofurantoina, bleomicina, sales de oro, y de forma creciente los <strong>inhibidores del punto de control inmunitario</strong>, cuya neumonitis se trata con corticoide y con la retirada del farmaco.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #6b4a7a;border-radius:8px;background:#6b4a7a10;color:var(--ink-dim);">
    <strong style="color:#6b4a7a;">Y despues, el COMITE MULTIDISCIPLINAR.</strong> Neumologo, radiologo toracico y patologo discutiendo el caso completo es el <strong>patron de referencia</strong> del diagnostico de las EPID, por encima de cualquier prueba aislada, incluida la biopsia. Cambia el diagnostico en una proporcion importante de los casos remitidos y mejora la concordancia entre centros. Un paciente con EPID que no ha pasado por comite tiene un diagnostico provisional, por convencido que este quien se lo puso.
  </div>
</div>`;

const ppfHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El concepto que reordeno el tema en 2022: la FIBROSIS PULMONAR PROGRESIVA.</strong> <span style="color:var(--ink-dim);">Muchas EPID que no son fibrosis idiopatica acaban comportandose como si lo fueran. Reconocerlo importa porque ese fenotipo <strong>responde al antifibrotico</strong> con independencia de cual sea la enfermedad de base.</span>
  </div>
  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;">
    <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">Definicion: en un paciente con EPID fibrosante DISTINTA de la fibrosis idiopatica, al menos <strong>DOS de estos tres</strong> criterios en el ultimo a&#241;o, sin otra explicacion</div>
    <div style="color:var(--ink-dim);line-height:1.6;">
      1. <strong style="color:var(--ink);">Empeoramiento de los sintomas</strong> respiratorios<br>
      2. <strong style="color:var(--ink);">Progresion fisiologica</strong>: caida absoluta de la FVC del <strong>5% o mas</strong> del predicho, o caida absoluta de la DLCO del <strong>10% o mas</strong> del predicho<br>
      3. <strong style="color:var(--ink);">Progresion radiologica</strong>: mas reticulacion, mas bronquiectasias de traccion, panal nuevo o mas extenso, o perdida de volumen
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">Lo que SI funciona</div>
      <div style="color:var(--ink-dim);line-height:1.55;"><strong style="color:var(--ink);">Antifibroticos</strong> (pirfenidona y nintedanib): frenan la caida de la FVC en la fibrosis idiopatica, y el nintedanib tambien en la fibrosis progresiva y en la EPID de la esclerosis sistemica. <strong>No revierten</strong> nada: enlentecen. <strong style="color:var(--ink);">Oxigeno</strong> si hay hipoxemia, <strong>rehabilitacion respiratoria</strong>, vacunas, tratamiento del reflujo sintomatico, y <strong style="color:#8c3a34;">derivacion PRECOZ a trasplante</strong>, en el momento del diagnostico y no cuando el paciente ya no es candidato.</div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">Lo que NO se hace, y por que</div>
      <div style="color:var(--ink-dim);line-height:1.55;"><strong style="color:var(--ink);">Inmunosupresion en la fibrosis idiopatica.</strong> El ensayo que comparo prednisona con azatioprina y N-acetilcisteina frente a placebo <strong>se detuvo antes de tiempo por MAYOR mortalidad</strong> e ingresos en el grupo tratado. Es uno de los resultados que mas ha cambiado la practica, y explica por que corticoide e inmunosupresor estan contraindicados aqui, mientras que son el tratamiento de eleccion en la neumonitis por hipersensibilidad y en la EPID autoinmunitaria.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La excepcion de la excepcion: la exacerbacion aguda.</strong> Deterioro respiratorio agudo, en menos de un mes, con vidrio deslustrado nuevo sobre la fibrosis previa y sin insuficiencia cardiaca ni infeccion que lo expliquen. Tiene una mortalidad hospitalaria muy alta, cercana al 50%, y ahi si se usa corticoide a dosis altas pese a la escasa evidencia, porque no queda otra cosa. La ventilacion invasiva rara vez cambia el desenlace y conviene haber hablado antes de los objetivos de cuidado.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las enfermedades pulmonares intersticiales difusas son un grupo de mas de doscientas entidades que comparten tres cosas: afectan de forma difusa al <strong>intersticio y a los espacios alveolares</strong>, producen un <strong>patron restrictivo</strong> con descenso de la capacidad de difusion, y se parecen tanto entre si en la radiografia que el diagnostico exige un metodo, no una intuicion. Ese metodo tiene dos piezas: la <strong>tomografia de alta resolucion</strong> y el <strong>comite multidisciplinar</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero, ordenar la restriccion.</strong></p>
<p style="margin:0 0 12px;">Antes de entrar en el intersticio conviene tener clara la fisiologia, porque el mismo patron espirometrico esconde dos mundos distintos. Una FVC baja con cociente FEV1/FVC normal solo <strong>sugiere</strong> restriccion: confirmarla exige la <strong>capacidad pulmonar total</strong>. Y una vez confirmada, quien separa la enfermedad del pulmon de la enfermedad de la bomba es la <strong>DLCO</strong>: baja en la parenquimatosa, normal o alta por unidad de volumen en la extrapulmonar.</p>
${figBlock('Figura 1', 'Patron restrictivo: confirmarlo y despues separarlo con la DLCO', restrictivoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La tomografia manda, y decide si hace falta biopsia.</strong></p>
<p style="margin:0 0 12px;">La tomografia de alta resolucion clasifica el caso en cuatro patrones y esa clasificacion tiene una consecuencia inmediata: con un patron de <strong>neumonia intersticial usual definitivo</strong> en el contexto clinico adecuado, <strong>no hace falta biopsia</strong>. Es una de las pocas veces en medicina en que una imagen ahorra un procedimiento quirurgico con mortalidad propia. En el extremo opuesto, un patron de "diagnostico alternativo" no es un fracaso: es informacion, porque el mosaico con atrapamiento aereo o el predominio en lobulos superiores apuntan a una enfermedad con tratamiento distinto.</p>
${figBlock('Figura 2', 'Los cuatro patrones de la tomografia de alta resolucion', tcarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Idiopatica significa que se ha buscado y no se ha encontrado.</strong></p>
<p style="margin:0 0 12px;">La fibrosis pulmonar idiopatica es un diagnostico de exclusion, y las tres cosas que hay que excluir tienen tratamiento propio: una <strong>exposicion</strong> (que se retira), una <strong>enfermedad autoinmunitaria</strong> (que se inmunosuprime) y un <strong>farmaco</strong> (que se suspende). Confundir una neumonitis por hipersensibilidad con una fibrosis idiopatica no es un matiz academico: priva al paciente de la unica medida que puede detener su enfermedad. Por eso el interrogatorio de exposiciones tiene que ser exhaustivo y por eso el <strong>comite multidisciplinar</strong> es el patron de referencia del diagnostico, por encima de cualquier prueba aislada.</p>
${figBlock('Figura 3', 'Las tres exclusiones obligadas y el comite multidisciplinar', multidisciplinarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La idea nueva: fibrosis pulmonar progresiva.</strong></p>
<p style="margin:0 0 12px;">Durante a&#241;os el pronostico y el tratamiento dependian de la etiqueta etiologica. La guia de 2022 a&#241;adio un eje transversal: muchas EPID que no son fibrosis idiopatica (por hipersensibilidad, autoinmunitarias, neumoconiosis, inclasificables) acaban <strong>comportandose</strong> como ella, y ese fenotipo se define con <strong>dos de tres criterios en un a&#241;o</strong> y responde al antifibrotico con independencia de su causa. Al mismo tiempo, el tema arrastra una leccion negativa de las mas importantes de la neumologia moderna: en la fibrosis idiopatica, la <strong>inmunosupresion aumenta la mortalidad</strong>.</p>
${figBlock('Figura 4', 'Fibrosis pulmonar progresiva: criterios, lo que funciona y lo que da&#241;a', ppfHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar restriccion con una espirometria sola. No interpretar una DLCO baja sin corregirla por la hemoglobina. No etiquetar de idiopatica una fibrosis sin haber preguntado por aves, humedades, trabajo y farmacos, uno por uno. No dar corticoide ni inmunosupresor en la fibrosis pulmonar idiopatica. No biopsiar a quien ya tiene un patron de neumonia intersticial usual definitivo. No cerrar el diagnostico sin pasarlo por el comite. Y no esperar al deterioro para hablar de trasplante: la derivacion es en el momento del diagnostico.</p>`;

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
      tituloA: 'EPID fibrosante (restriccion intrinseca)',
      tituloB: 'Restriccion extrapulmonar',
      compensada: 'Disnea de esfuerzo progresiva de meses o a&#241;os y tos seca persistente, que el paciente y a menudo el medico atribuyen a la edad, al peso o al tabaco. En la exploracion, CREPITANTES SECOS TELEINSPIRATORIOS EN VELCRO en las bases, que no se modifican con la tos y que pueden preceder a&#241;os a las alteraciones radiologicas, y ACROPAQUIAS hasta en la mitad de las fibrosis idiopaticas. Saturacion normal en reposo con DESATURACION AL ESFUERZO, que es el hallazgo mas sensible y el que se escapa si solo se mide sentado.',
      descompensada: 'Disnea que empeora de forma llamativa EN DECUBITO (ortopnea sin insuficiencia cardiaca), sin crepitantes ni acropaquias. Segun la causa: obesidad, deformidad de la pared, espondilitis con torax rigido, debilidad de cintura escapular o pelviana, fasciculaciones, disfagia o voz nasal. La respiracion PARADOJICA ABDOMINAL en supino indica debilidad diafragmatica avanzada. La cefalea matutina y la somnolencia diurna anuncian la hipoventilacion nocturna, que aparece antes que la diurna.'
    },
    laboratorio: [
      { prueba: 'Pruebas de funcion pulmonar completas con DLCO (calculadora disponible)', utilidad: 'Espirometria, volumenes por pletismografia y DLCO. La espirometria SOLA no diagnostica restriccion: hace falta la capacidad pulmonar total. La DLCO separa la enfermedad parenquimatosa de la extrapulmonar y es el parametro mas sensible al deterioro precoz. Debe corregirse por hemoglobina.' },
      { prueba: 'FVC en sedestacion y en decubito supino', utilidad: 'La prueba de cabecera de la debilidad diafragmatica y la que casi nadie pide. Una caida mayor del 20% al tumbarse indica disfuncion diafragmatica significativa y anticipa la hipoventilacion nocturna antes de que la gasometria diurna se altere.' },
      { prueba: 'Panel de autoinmunidad', utilidad: 'Anticuerpos antinucleares con patron, factor reumatoide, anticuerpos frente al peptido citrulinado, y panel de miositis con antisintetasas (Jo-1 y no Jo-1), anti-MDA5 y anti-PM/Scl. La EPID puede ser la PRIMERA manifestacion de una conectivopatia, a veces a&#241;os antes de la afectacion articular o cutanea.' },
      { prueba: 'Precipitinas e IgG especificas frente a antigenos inhalados', utilidad: 'Frente a proteinas de aves, hongos y actinomicetos termofilos en la sospecha de neumonitis por hipersensibilidad. Un resultado positivo indica exposicion, NO enfermedad, y uno negativo no la descarta si el antigeno no esta en el panel. Es un apoyo, no un criterio.' },
      { prueba: 'Enzima convertidora de angiotensina y calcio', utilidad: 'De rendimiento limitado, con sensibilidad y especificidad bajas para la sarcoidosis. La hipercalcemia y la hipercalciuria son mas utiles y tienen consecuencias terapeuticas propias. No sirven para seguir la actividad.' },
      { prueba: 'Peptido natriuretico y ecocardiograma', utilidad: 'La insuficiencia cardiaca es el gran imitador de la EPID en el anciano y a menudo coexiste. Ademas, el ecocardiograma cribar la hipertension pulmonar, que complica la fibrosis avanzada y empeora mucho el pronostico.' },
      { prueba: 'Gasometria arterial y pulsioximetria nocturna', utilidad: 'En la restriccion extrapulmonar, para detectar la hipercapnia. La hipoventilacion aparece PRIMERO durante el sue&#241;o, de modo que una gasometria diurna normal no descarta la indicacion de ventilacion no invasiva domiciliaria.' },
      { prueba: 'Lavado broncoalveolar', utilidad: 'No se hace de rutina en el patron de neumonia intersticial usual definitivo. Es util cuando se sospecha neumonitis por hipersensibilidad (linfocitosis marcada, con frecuencia por encima del 30%), infeccion, hemorragia alveolar, proteinosis alveolar o neoplasia.' }
    ],
    no_invasivos: [
      { metodo: 'Patron de la tomografia de alta resolucion (calculadora disponible)', interpretacion: 'Cuatro categorias: neumonia intersticial usual definitiva, probable, indeterminada y diagnostico alternativo. Determina si hace falta muestra histologica y orienta la etiologia.', cutoff: 'NIU definitiva con clinica compatible y exclusiones hechas: no se biopsia' },
      { metodo: 'Interpretacion del patron restrictivo (calculadora disponible)', interpretacion: 'Capacidad pulmonar total para confirmar la restriccion, DLCO para separar intrinseca de extrinseca, y KCO para afinar: en la restriccion extrapulmonar el pulmon transfiere mas por unidad de volumen porque esta sano pero poco distendido.', cutoff: 'Capacidad pulmonar total menor del 80% del predicho: restriccion. DLCO menor del 80%: componente parenquimatoso' },
      { metodo: 'Criterios de fibrosis pulmonar progresiva (calculadora disponible)', interpretacion: 'En un paciente con EPID fibrosante distinta de la fibrosis idiopatica: al menos dos de tres criterios en el ultimo a&#241;o, sin otra explicacion. Identifica al candidato a antifibrotico.', cutoff: 'Caida absoluta de la FVC del 5% o mas del predicho, o de la DLCO del 10% o mas, mas sintomas o progresion radiologica' },
      { metodo: 'Indice GAP (calculadora disponible)', interpretacion: 'Sexo, edad y fisiologia (FVC y DLCO en porcentaje del predicho). Estratifica la mortalidad en la fibrosis pulmonar idiopatica en tres estadios y ayuda a decidir el momento de la derivacion a trasplante.', cutoff: 'Estadio I (0 a 3 puntos), II (4 a 5) y III (6 a 8), con mortalidad al a&#241;o creciente' },
      { metodo: 'Prueba de marcha de 6 minutos con oximetria', interpretacion: 'Detecta la desaturacion de esfuerzo, que es el hallazgo mas sensible y precoz y que la oximetria en reposo no ve. Mide ademas la capacidad funcional y la respuesta a la rehabilitacion.', cutoff: 'Desaturacion por debajo del 88% o distancia menor de 250 metros: peor pronostico' },
      { metodo: 'Presiones inspiratoria y espiratoria maximas', interpretacion: 'Cuantifican la fuerza del musculo respiratorio en la restriccion extrapulmonar de causa neuromuscular. Se alteran antes que la FVC y guian el momento de iniciar la ventilacion domiciliaria.', cutoff: 'Presion inspiratoria maxima menos negativa de -60 cmH2O: debilidad significativa' },
      { metodo: 'Comite multidisciplinar', interpretacion: 'Discusion conjunta de clinica, imagen y, si la hay, histologia entre neumologo, radiologo y patologo. Es el PATRON DE REFERENCIA del diagnostico de las EPID, por encima de cualquier prueba aislada.', cutoff: 'Sin umbral: un diagnostico de EPID que no ha pasado por comite es provisional' }
    ],
    imagen: [
      { modalidad: 'Tomografia de alta resolucion', hallazgos: 'La prueba central del tema, con cortes finos, en inspiracion y en ESPIRACION (para detectar atrapamiento aereo) y en decubito PRONO (para separar las densidades declives fisiologicas de la fibrosis real). Define el patron, la extension y la distribucion, y hoy sustituye a la biopsia en una parte importante de los casos.' },
      { modalidad: 'Radiografia de torax', hallazgos: 'Poco sensible: puede ser normal con enfermedad establecida. Muestra patron reticular o reticulonodular de predominio basal con perdida de volumen, y sirve sobre todo para excluir otras causas y para el seguimiento grosero. Un paciente con crepitantes en velcro y radiografia normal necesita tomografia, no tranquilizacion.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Cribado de hipertension pulmonar, que complica la EPID avanzada y empeora el pronostico, y valoracion de la funcion ventricular para separar la disnea cardiaca de la respiratoria. El esofago dilatado en la tomografia junto con fibrosis basal orienta a esclerosis sistemica.' },
      { modalidad: 'Ecografia diafragmatica', hallazgos: 'En la restriccion extrapulmonar, mide el grosor y la fraccion de engrosamiento del diafragma y detecta la paralisis uni o bilateral a pie de cama, sin radiacion y de forma repetible.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las EPID se ordenan en varios ejes que conviene no mezclar. Por <strong>causa</strong>: de causa conocida (exposicion, farmacos, autoinmunitaria), idiopaticas, granulomatosas y las de presentacion caracteristica. Por <strong>patron radiologico</strong> en la tomografia de alta resolucion, que es lo que decide si hace falta biopsia. Por <strong>comportamiento</strong>, que es el eje que a&#241;adio la guia de 2022 con la <strong>fibrosis pulmonar progresiva</strong>: muchas EPID no idiopaticas acaban comportandose como una fibrosis idiopatica y responden al antifibrotico. Y, en un plano distinto pero previo, la <strong>restriccion</strong> se separa en intrinseca (parenquimatosa) y extrinseca (de la bomba) segun la DLCO.`,
    escalas: [
      { nombre: 'Patrones de la tomografia de alta resolucion (calculadora disponible)', componentes: 'Distribucion (subpleural y basal frente a otras), presencia de panal de abeja, bronquiectasias de traccion, vidrio deslustrado, mosaico con atrapamiento aereo, quistes, nodulos y consolidacion.', formula: 'Clasificacion categorica en cuatro patrones: NIU definitiva, NIU probable, indeterminada y diagnostico alternativo.', interpretacion: 'Es la clasificacion que mas conducta cambia: con NIU definitiva y exclusiones hechas no se biopsia. El patron de diagnostico alternativo redirige el estudio hacia neumonitis por hipersensibilidad, sarcoidosis o EPID autoinmunitaria.' },
      { nombre: 'Interpretacion del patron restrictivo (calculadora disponible)', componentes: 'Capacidad pulmonar total, FVC, cociente FEV1/FVC, DLCO corregida por hemoglobina y KCO.', formula: 'Restriccion si la capacidad pulmonar total esta por debajo del limite inferior de la normalidad. Intrinseca si la DLCO es baja; extrinseca si la DLCO es normal y la KCO normal o alta.', interpretacion: 'Evita dos errores frecuentes: diagnosticar restriccion con una espirometria sola, y atribuir al pulmon una restriccion que es de la pared o del musculo. La KCO alta con volumenes bajos es casi patognomonica de restriccion extrapulmonar.' },
      { nombre: 'Criterios de fibrosis pulmonar progresiva (calculadora disponible)', componentes: 'Empeoramiento de sintomas, progresion fisiologica (FVC o DLCO) y progresion radiologica, en el ultimo a&#241;o y sin otra explicacion, en un paciente con EPID fibrosante que NO es fibrosis idiopatica.', formula: 'Al menos 2 de los 3 criterios. Progresion fisiologica: caida absoluta de la FVC del 5% o mas del predicho, o de la DLCO del 10% o mas.', interpretacion: 'Define un fenotipo transversal que responde al nintedanib con independencia de la enfermedad de base. Cambio la logica del tema: ya no basta con la etiqueta etiologica, hay que vigilar el comportamiento a lo largo del tiempo.' },
      { nombre: 'Indice GAP (calculadora disponible)', componentes: 'Genero (sexo), Age (edad) y Physiology (FVC y DLCO en porcentaje del predicho).', formula: 'Puntuacion de 0 a 8, agrupada en estadios I (0 a 3), II (4 a 5) y III (6 a 8).', interpretacion: 'Estratifica la mortalidad en la fibrosis pulmonar idiopatica y se usa tambien en otras EPID fibrosantes. Ayuda a decidir el momento de la derivacion a trasplante y a informar al paciente, aunque no sustituye a la evolucion individual, que es muy variable.' },
      { nombre: 'Clasificacion de las neumonias intersticiales idiopaticas', componentes: 'Criterios clinicos, radiologicos y patologicos de la clasificacion multidisciplinar ATS/ERS.', formula: 'Fibrosantes cronicas (fibrosis idiopatica y neumonia intersticial no especifica), asociadas al tabaco (bronquiolitis respiratoria y neumonia intersticial descamativa), agudas o subagudas (neumonia organizada criptogenetica y neumonia intersticial aguda), y raras.', interpretacion: 'La distincion clave para el internista es entre la fibrosis idiopatica, que NO se inmunosuprime, y el resto, que en general si responde al corticoide. Una proporcion no despreciable de casos queda como EPID inclasificable pese a estudio completo.' },
      { nombre: 'Criterios de neumonitis por hipersensibilidad', componentes: 'Exposicion identificada, patron tomografico compatible (fibrotico o no fibrotico) y linfocitosis en el lavado broncoalveolar, integrados en el comite con la probabilidad diagnostica.', formula: 'Categorias de confianza diagnostica, de diagnostico definitivo a poco probable, en lugar de una lista rigida de criterios.', interpretacion: 'La distincion entre forma fibrotica y no fibrotica sustituyo a la vieja division en aguda, subaguda y cronica, porque lo que predice el pronostico es la fibrosis y no el tiempo de evolucion. Identificar y retirar el antigeno es lo unico que puede detener la enfermedad.' },
      { nombre: 'Criterios de exacerbacion aguda de la fibrosis pulmonar', componentes: 'Deterioro respiratorio agudo o subagudo en menos de un mes, vidrio deslustrado o consolidacion nuevos sobre la fibrosis previa, y ausencia de explicacion alternativa como insuficiencia cardiaca o sobrecarga de volumen.', formula: 'Definicion categorica del grupo de trabajo internacional, que abandono la exigencia de descartar la infeccion para clasificarla.', interpretacion: 'Mortalidad hospitalaria cercana al 50%. Es la principal causa de muerte en la fibrosis idiopatica. La ventilacion mecanica invasiva rara vez cambia el desenlace, lo que obliga a haber hablado antes de los objetivos de cuidado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Fibrosis pulmonar idiopatica',
      color: '#8c3a34',
      definicion: 'Neumonia intersticial fibrosante cronica, progresiva y limitada al pulmon, de causa desconocida, asociada al patron histologico y radiologico de neumonia intersticial usual y propia del adulto mayor. Es un diagnostico de EXCLUSION.',
      fisiopatologia: 'El modelo actual no es inflamatorio sino de reparacion aberrante. Microlesiones repetidas del epitelio alveolar en un huesped susceptible (por envejecimiento celular, acortamiento de telomeros, variantes del promotor de MUC5B) activan una via de reparacion que no se apaga: proliferacion de fibroblastos en focos, deposito de matriz extracelular y remodelado con distorsion arquitectural y panal. La inflamacion es escasa y secundaria, y esa es la razon biologica por la que la inmunosupresion no solo no funciona sino que perjudica.',
      epidemiologia: 'Predomina en varones mayores de 60 a&#241;os, fumadores o exfumadores. Es la mas frecuente de las neumonias intersticiales idiopaticas. Su supervivencia mediana sin tratamiento se ha situado clasicamente en 3 a 5 a&#241;os desde el diagnostico, peor que la de muchos tumores solidos, aunque el curso individual es muy variable y hay pacientes estables durante a&#241;os.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino', 'Tabaquismo actual o pasado', 'Variante del promotor del gen MUC5B, la mas asociada de todas', 'Mutaciones de los genes del complejo de la telomerasa', 'Antecedentes familiares de fibrosis pulmonar', 'Reflujo gastroesofagico con microaspiracion cronica', 'Exposicion a polvos metalicos, de madera y a la ganaderia', 'Infecciones viricas cronicas', 'Diabetes y apnea obstructiva del sue&#241;o'],
      clinica: 'Disnea de esfuerzo lentamente progresiva y tos seca de meses o a&#241;os. Crepitantes secos teleinspiratorios en velcro en las bases, presentes practicamente siempre y a menudo antes que las alteraciones radiologicas, y acropaquias hasta en la mitad de los casos. Saturacion normal en reposo con desaturacion al esfuerzo.',
      criterios_dx: 'Patron de neumonia intersticial usual definitivo o probable en la tomografia de alta resolucion, MAS exclusion razonada de exposiciones, enfermedad autoinmunitaria y farmacos, MAS discusion en comite multidisciplinar. Con patron definitivo y exclusiones hechas, la biopsia no aporta. Ver las Figuras 2 y 3 de Definicion.',
      laboratorio: 'Pruebas de funcion pulmonar completas con DLCO como base del seguimiento. Panel de autoinmunidad amplio, que debe ser negativo. Precipitinas si hay cualquier sospecha de exposicion. Hemograma y funcion hepatica basales antes del antifibrotico.',
      imagen: 'Tomografia de alta resolucion con predominio subpleural y basal, reticulacion heterogenea, bronquiectasias de traccion y panal de abeja. Ecocardiograma para cribar hipertension pulmonar. Radiografia insuficiente para el diagnostico.',
      complementarios: 'Marcha de 6 minutos con oximetria y calculo del indice GAP en el diagnostico y en el seguimiento. Cribado de reflujo, apnea del sue&#241;o, cardiopatia isquemica y cancer de pulmon, cuya incidencia esta claramente aumentada en esta poblacion.',
      dx_diferencial: 'Neumonitis por hipersensibilidad fibrotica (la que mas se confunde y la que mas importa no confundir), EPID de las conectivopatias, neumoconiosis, EPID por farmacos, neumonia intersticial no especifica fibrotica, sarcoidosis en estadio fibrotico, insuficiencia cardiaca cronica y bronquiectasias por traccion de otra causa.',
      tx_medico: 'Abandono del tabaco, vacunacion, rehabilitacion respiratoria (que mejora la capacidad de ejercicio y la calidad de vida), oxigenoterapia si hay hipoxemia en reposo o de esfuerzo, y tratamiento de las comorbilidades: reflujo sintomatico, apnea del sue&#241;o, enfisema y cardiopatia. DERIVACION A TRASPLANTE EN EL MOMENTO DEL DIAGNOSTICO, no cuando el paciente ya se ha deteriorado.',
      tx_farmacologico: 'ANTIFIBROTICOS: pirfenidona o nintedanib, que enlentecen la caida de la FVC sin revertir la enfermedad. La eleccion se hace por perfil de efectos adversos (fotosensibilidad y molestias digestivas con la pirfenidona; diarrea y elevacion de transaminasas con el nintedanib) y por comorbilidad. <strong>CONTRAINDICADOS el corticoide y el inmunosupresor</strong>: el ensayo PANTHER-IPF se detuvo antes de tiempo por mayor mortalidad e ingresos en el grupo con prednisona, azatioprina y N-acetilcisteina. El corticoide se reserva a la exacerbacion aguda y al control sintomatico de la tos.',
      tx_intervencionista: 'TRASPLANTE PULMONAR, que es el unico tratamiento que prolonga la supervivencia de forma sustancial. Los criterios de remision son amplios a proposito, y la derivacion tardia es una de las causas evitables de que el paciente no llegue a la lista.',
      criterios_uci: 'Muy discutible. La ventilacion mecanica invasiva en la exacerbacion aguda tiene una mortalidad muy alta y rara vez cambia el desenlace, salvo en el candidato a trasplante como puente. Es una de las situaciones en las que la conversacion previa sobre objetivos de cuidado vale mas que cualquier decision tomada en la urgencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Remitir EN EL DIAGNOSTICO. Incluir en lista ante caida de la FVC del 10% o mas o de la DLCO del 15% o mas en 6 meses, desaturacion por debajo del 88% o marcha menor de 250 metros, hipertension pulmonar u hospitalizacion por deterioro respiratorio.',
      seguimiento_hospitalario: 'En la exacerbacion aguda: descartar infeccion, embolia pulmonar e insuficiencia cardiaca, oxigeno, corticoide a dosis altas pese a la escasa evidencia, y valoracion honesta del techo terapeutico junto con el paciente y la familia.',
      seguimiento_ambulatorio: 'Pruebas de funcion pulmonar cada 3 a 6 meses, que es lo que detecta la progresion antes que los sintomas. Tomografia segun evolucion. Vigilancia de los efectos adversos del antifibrotico y de la aparicion de cancer de pulmon e hipertension pulmonar. Cuidados paliativos precoces para la disnea y la tos refractarias.',
      pronostico: 'Supervivencia mediana clasica de 3 a 5 a&#241;os, mejorada por los antifibroticos y muy variable entre pacientes. Los predictores mas robustos son la caida de la FVC en 6 a 12 meses, la DLCO basal, la desaturacion en la marcha, la hipertension pulmonar y el indice GAP. La exacerbacion aguda es la principal causa de muerte.',
      algoritmo: ['Disnea de esfuerzo y crepitantes en velcro: pedir tomografia de alta resolucion, no solo radiografia', 'Interrogatorio EXHAUSTIVO de exposiciones: aves, humedades, historia laboral completa', 'Panel de autoinmunidad y exploracion buscando conectivopatia', 'Revisar todos los farmacos, incluidos los suspendidos hace meses', 'Clasificar el patron tomografico en las cuatro categorias', 'Con NIU definitiva y exclusiones hechas: no biopsiar', 'Llevar SIEMPRE el caso al comite multidisciplinar', 'Iniciar antifibrotico y NUNCA corticoide ni inmunosupresor', 'Derivar a trasplante en el momento del diagnostico', 'Funcion pulmonar cada 3 a 6 meses y cuidados paliativos precoces']
    },
    {
      nombre: 'Fibrosis pulmonar progresiva',
      color: '#6b4a7a',
      definicion: 'Fenotipo de comportamiento, no una enfermedad: EPID fibrosante DISTINTA de la fibrosis idiopatica que cumple al menos dos de tres criterios de progresion en el ultimo a&#241;o sin otra explicacion. Reconocerlo abre la puerta al tratamiento antifibrotico.',
      fisiopatologia: 'Sea cual sea el desencadenante inicial (antigeno inhalado, autoinmunidad, polvo mineral, farmaco), una parte de los pacientes entra en una via comun de fibrogenesis autoperpetuada que ya no depende del estimulo original. Esa convergencia biologica es la que justifica que un mismo farmaco antifibrotico funcione en enfermedades de causa tan distinta, y explica por que retirar el antigeno o inmunosuprimir deja de bastar cuando el proceso ya se ha independizado.',
      epidemiologia: 'Entre un 20 y un 40% de las EPID fibrosantes no idiopaticas desarrollan este comportamiento, con variaciones importantes segun la enfermedad de base. Es especialmente frecuente en la neumonitis por hipersensibilidad fibrotica, en la EPID de la artritis reumatoide y en las EPID inclasificables. Una vez establecido, el pronostico se aproxima al de la fibrosis idiopatica.',
      factores_riesgo: ['Patron de neumonia intersticial usual en la tomografia', 'Extension de la fibrosis mayor del 20% del parenquima', 'Exposicion persistente al antigeno en la neumonitis por hipersensibilidad', 'Artritis reumatoide y esclerosis sistemica como enfermedad de base', 'Edad avanzada y sexo masculino', 'Tabaquismo', 'Mutaciones de los genes de la telomerasa', 'Hipertension pulmonar asociada', 'Enfisema combinado con fibrosis', 'Retraso en el diagnostico y en la retirada de la causa'],
      clinica: 'Empeoramiento de la disnea y de la tos en un paciente con EPID ya conocida, con deterioro funcional o radiologico documentado. La clave es que se reconoce COMPARANDO con estudios previos: sin funcion pulmonar seriada no se puede diagnosticar, y esa es la razon practica por la que las EPID se siguen cada 3 a 6 meses.',
      criterios_dx: 'Al menos 2 de 3 en el ultimo a&#241;o y sin otra explicacion: empeoramiento de los sintomas respiratorios; progresion fisiologica con caida absoluta de la FVC del 5% o mas del predicho o de la DLCO del 10% o mas; y progresion radiologica. Ver la Figura 4 de Definicion.',
      laboratorio: 'Funcion pulmonar seriada con DLCO, que es el eje del diagnostico. Reevaluar el panel de autoinmunidad, porque una conectivopatia puede declararse despues. Descartar infeccion, insuficiencia cardiaca y progresion de la enfermedad de base como explicaciones alternativas del deterioro.',
      imagen: 'Tomografia de alta resolucion comparada con la previa: mas reticulacion, mas bronquiectasias de traccion, panal nuevo o mas extenso, y perdida de volumen lobar. La comparacion cuantitativa es lo que da valor a la prueba, de modo que conviene que las lea el mismo radiologo toracico.',
      complementarios: 'Reevaluar la exposicion en la neumonitis por hipersensibilidad: la persistencia del antigeno es una causa corregible de progresion y hay que buscarla activamente antes de asumir que el proceso es autonomo. Ecocardiograma para descartar hipertension pulmonar.',
      dx_diferencial: 'Antes de aceptar la progresion hay que descartar lo que la imita: infeccion respiratoria, insuficiencia cardiaca, sobrecarga de volumen, embolia pulmonar, progresion de la conectivopatia de base, toxicidad de un farmaco nuevo y mala tecnica en las pruebas de funcion pulmonar.',
      tx_medico: 'Retirar o reducir la exposicion si persiste, optimizar el tratamiento de la enfermedad de base, rehabilitacion respiratoria, oxigeno si procede, vacunacion y tratamiento de comorbilidades. Valorar trasplante en el candidato.',
      tx_farmacologico: 'NINTEDANIB, que redujo la caida de la FVC en el ensayo que estudio este fenotipo con independencia de la enfermedad de base, y tambien en la EPID de la esclerosis sistemica. A diferencia de la fibrosis idiopatica, aqui el inmunosupresor SI tiene papel cuando la enfermedad de base lo justifica (micofenolato, rituximab, tocilizumab segun el caso), y con frecuencia se combinan las dos estrategias.',
      tx_intervencionista: 'Trasplante pulmonar en el candidato adecuado, con los mismos criterios de derivacion precoz que en la fibrosis idiopatica.',
      criterios_uci: 'Los de la exacerbacion aguda, con las mismas reservas: la ventilacion invasiva rara vez cambia el desenlace fuera del puente a trasplante.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Deterioro funcional progresivo pese a tratamiento, con los mismos umbrales que en la fibrosis idiopatica.',
      seguimiento_hospitalario: 'Sin particularidades propias fuera de la exacerbacion aguda.',
      seguimiento_ambulatorio: 'Funcion pulmonar cada 3 a 6 meses, que es lo unico que permite detectar el fenotipo. Reevaluacion periodica de la exposicion y de la autoinmunidad, y vigilancia de la tolerancia al antifibrotico.',
      pronostico: 'Una vez establecido el comportamiento progresivo, la supervivencia se aproxima a la de la fibrosis idiopatica, con la diferencia importante de que aqui a veces si hay una causa corregible detras. El antifibrotico enlentece la caida funcional pero no la detiene.',
      algoritmo: ['Seguir toda EPID fibrosante con funcion pulmonar cada 3 a 6 meses', 'Ante deterioro, descartar primero infeccion, insuficiencia cardiaca y embolia', 'Comprobar si se cumplen 2 de los 3 criterios en el ultimo a&#241;o', 'Reevaluar si persiste la exposicion antigenica, que es corregible', 'Optimizar el tratamiento de la enfermedad de base', 'A&#241;adir nintedanib si se confirma el fenotipo progresivo', 'Mantener el inmunosupresor si la enfermedad de base lo justifica', 'Rehabilitacion, oxigeno y vacunacion', 'Valorar trasplante en el candidato', 'Reevaluar el caso en comite multidisciplinar']
    },
    {
      nombre: 'Neumonitis por hipersensibilidad',
      color: '#3f6b52',
      definicion: 'EPID inmunomediada por la inhalacion repetida de un antigeno organico o de una sustancia quimica de bajo peso molecular en un huesped sensibilizado. Se clasifica en forma FIBROTICA y NO FIBROTICA, division que sustituyo a la vieja de aguda, subaguda y cronica.',
      fisiopatologia: 'La exposicion repetida desencadena una respuesta mixta: inmunocomplejos y activacion del complemento en las fases tempranas, y sobre todo una respuesta celular con linfocitos T y formacion de granulomas mal definidos, bronquiolocentricos. Esa localizacion alrededor del bronquiolo explica los dos hallazgos caracteristicos de la imagen: el mosaico con atrapamiento aereo en espiracion y la distribucion de predominio superior o difuso, distinta de la basal de la fibrosis idiopatica. Si la exposicion persiste, la inflamacion da paso a fibrosis irreversible.',
      epidemiologia: 'Es la EPID que mas se confunde con la fibrosis pulmonar idiopatica, y la que mas importa no confundir porque tiene una intervencion curativa. En una proporcion muy alta de los casos NO se identifica el antigeno pese a un interrogatorio cuidadoso, lo que no descarta el diagnostico pero empeora el pronostico, porque no se puede retirar lo que no se conoce.',
      factores_riesgo: ['Exposicion a aves: palomas, periquitos, y tambien edredones y almohadas de pluma', 'Humedades y mohos domesticos o laborales', 'Humidificadores, aire acondicionado, jacuzzi y saunas', 'Trabajo agricola y ganadero: heno enmohecido, actinomicetos termofilos', 'Industria del queso, del champi&#241;on y de la madera', 'Isocianatos y otras sustancias quimicas de bajo peso molecular', 'Metalurgia con fluidos de corte contaminados', 'Ser NO fumador, que paradojicamente aumenta el riesgo', 'Predisposicion genetica, incluidas variantes de la telomerasa', 'Infeccion viral concomitante como cofactor'],
      clinica: 'En la forma no fibrotica, episodios de tos, disnea, fiebre y malestar horas despues de la exposicion, con mejoria al alejarse (fines de semana, vacaciones) y recaida al volver. En la fibrotica, disnea y tos progresivas indistinguibles de una fibrosis idiopatica, a veces con crepitantes y con el hallazgo caracteristico del PIO (chirrido inspiratorio agudo) por afectacion bronquiolar.',
      criterios_dx: 'Integracion en comite de tres elementos: exposicion identificada, patron tomografico compatible y linfocitosis en el lavado broncoalveolar, con categorias de confianza diagnostica en lugar de una lista rigida. El elemento que mas cambia la conducta es la EXPOSICION, y encontrarla exige un interrogatorio dirigido y repetido.',
      laboratorio: 'Precipitinas e IgG especificas frente a antigenos concretos: indican exposicion, no enfermedad. Lavado broncoalveolar con linfocitosis, con frecuencia por encima del 30%, que apoya con fuerza el diagnostico y es una de las pocas indicaciones claras del procedimiento en el estudio de una EPID.',
      imagen: 'Tomografia con vidrio deslustrado, nodulos centrolobulillares mal definidos, mosaico y ATRAPAMIENTO AEREO en espiracion, de predominio superior o difuso y con relativa preservacion de las bases. El SIGNO DE LAS TRES DENSIDADES (vidrio, pulmon normal y atrapamiento en el mismo corte) es muy sugestivo. En la forma fibrotica se a&#241;aden reticulacion y bronquiectasias de traccion.',
      complementarios: 'Visita o descripcion detallada del domicilio y del puesto de trabajo, que a veces encuentra lo que la anamnesis no. Prueba de provocacion en centros muy especializados. Criobiopsia transbronquial si el comite lo considera necesario.',
      dx_diferencial: 'Fibrosis pulmonar idiopatica (la distincion clave), sarcoidosis, EPID autoinmunitaria, bronquiolitis de otras causas, neumonia organizada, EPID por farmacos y, en la forma aguda, neumonia infecciosa.',
      tx_medico: 'RETIRAR EL ANTIGENO, que es la unica medida capaz de detener la enfermedad y a menudo de revertirla en la forma no fibrotica. Puede significar deshacerse de las aves, reformar la vivienda o cambiar de puesto de trabajo, decisiones con un coste personal y economico que hay que acompa&#241;ar. Cuando no se identifica el antigeno, el pronostico empeora precisamente por esto.',
      tx_farmacologico: 'Corticoide sistemico en la forma no fibrotica sintomatica o extensa, con descenso progresivo. Inmunosupresores ahorradores (micofenolato, azatioprina) en la enfermedad persistente. En la forma FIBROTICA con comportamiento progresivo, NINTEDANIB, solo o combinado con inmunosupresor segun el caso.',
      tx_intervencionista: 'Trasplante pulmonar en la forma fibrotica avanzada. Tiene la particularidad de que la exposicion debe estar retirada antes, o la enfermedad puede recurrir sobre el injerto.',
      criterios_uci: 'La forma aguda grave puede producir insuficiencia respiratoria que requiera soporte, y responde bien al corticoide y a la retirada del antigeno, con mejor pronostico que la exacerbacion de una fibrosis idiopatica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los de cualquier EPID fibrosante avanzada, con la exigencia a&#241;adida de haber eliminado la exposicion.',
      seguimiento_hospitalario: 'Confirmar la mejoria tras retirar la exposicion, que en la forma no fibrotica puede ser rapida y llamativa y sirve de confirmacion diagnostica.',
      seguimiento_ambulatorio: 'Funcion pulmonar seriada para detectar el paso a fenotipo progresivo. Reinterrogar sobre exposiciones en cada visita: es frecuente descubrir el antigeno meses despues, y encontrarlo sigue cambiando el pronostico.',
      pronostico: 'La forma no fibrotica con antigeno identificado y retirado puede resolverse por completo. La forma fibrotica tiene un pronostico intermedio entre la no fibrotica y la fibrosis idiopatica, y se acerca a esta ultima cuando el antigeno no se encuentra o la exposicion persiste.',
      algoritmo: ['Ante EPID, interrogar de forma dirigida por aves, humedades, trabajo y aficiones', 'Preguntar si mejora fuera de casa o del trabajo', 'Tomografia en inspiracion y ESPIRACION para buscar atrapamiento aereo', 'Solicitar precipitinas frente al antigeno sospechado', 'Lavado broncoalveolar buscando linfocitosis marcada', 'Llevar el caso al comite multidisciplinar', 'RETIRAR EL ANTIGENO: es lo unico que detiene la enfermedad', 'Corticoide en la forma no fibrotica sintomatica o extensa', 'Nintedanib si la forma fibrotica se comporta como progresiva', 'Reinterrogar sobre exposiciones en cada revision']
    },
    {
      nombre: 'EPID autoinmunitaria y por farmacos',
      color: '#8a6a1f',
      definicion: 'Afectacion intersticial en el contexto de una enfermedad autoinmunitaria sistemica (artritis reumatoide, esclerosis sistemica, miopatias inflamatorias, Sjogren, lupus, enfermedad mixta) o producida por un farmaco. Comparten que la EPID puede ser la primera y a veces la unica manifestacion.',
      fisiopatologia: 'En la enfermedad autoinmunitaria, la misma desregulacion inmunitaria que ataca a la articulacion o a la piel afecta al pulmon, con patrones que varian segun la enfermedad: neumonia intersticial no especifica en la esclerosis sistemica y en las miopatias, neumonia intersticial usual con mas frecuencia en la artritis reumatoide. En la toxicidad por farmacos los mecanismos son varios: citotoxicidad directa dependiente de dosis acumulada (bleomicina, amiodarona), reaccion de hipersensibilidad idiosincrasica (metotrexato, nitrofurantoina) y desinhibicion inmunitaria en los inhibidores del punto de control.',
      epidemiologia: 'La EPID es una de las principales causas de muerte en la esclerosis sistemica y en la artritis reumatoide. En un porcentaje relevante de los casos la afectacion pulmonar precede en meses o a&#241;os al diagnostico reumatologico. La neumonitis por inhibidores del punto de control ha crecido de forma llamativa con la expansion de la inmunoterapia oncologica.',
      factores_riesgo: ['Esclerosis sistemica, sobre todo con anticuerpos anti-Scl-70', 'Artritis reumatoide de larga evolucion, seropositiva y en varones fumadores', 'Miopatias inflamatorias con anticuerpos antisintetasa o anti-MDA5', 'Sindrome de Sjogren y enfermedad mixta del tejido conectivo', 'Tabaquismo, que aumenta el riesgo en la artritis reumatoide', 'Amiodarona, metotrexato, nitrofurantoina, bleomicina y sales de oro', 'Inhibidores del punto de control inmunitario', 'Dosis acumulada alta y edad avanzada para los citotoxicos', 'Radioterapia toracica previa o concomitante', 'Nefropatia, que reduce el aclaramiento de varios de estos farmacos'],
      clinica: 'Disnea y tos progresivas, a menudo atribuidas a la enfermedad de base o al desacondicionamiento. Buscar activamente los signos extrapulmonares: Raynaud, esclerodactilia, telangiectasias, artritis, manos de mecanico, papulas de Gottron, debilidad proximal, xerostomia y xeroftalmia. En la neumonitis por anti-MDA5 el cuadro puede ser rapidamente progresivo con poca afectacion muscular, y es una urgencia.',
      criterios_dx: 'EPID confirmada por tomografia mas criterios de la enfermedad autoinmunitaria, o relacion temporal plausible con un farmaco y mejoria al retirarlo. Existe una categoria intermedia, la neumonia intersticial con caracteristicas autoinmunitarias, para los casos con rasgos de autoinmunidad que no cumplen criterios de ninguna conectivopatia concreta.',
      laboratorio: 'Panel de autoinmunidad amplio, incluido el panel de miositis, que en un paciente con EPID debe pedirse aunque no haya sintomas articulares ni cutaneos. Capilaroscopia periungueal, que es sencilla y muy rentable en la sospecha de esclerosis sistemica. Creatincinasa y aldolasa si se sospecha miopatia.',
      imagen: 'Tomografia con patron de neumonia intersticial no especifica (vidrio deslustrado con reticulacion fina y preservacion subpleural) en la esclerosis sistemica y en las miopatias, y con mas frecuencia patron de neumonia intersticial usual en la artritis reumatoide. El esofago dilatado acompa&#241;ando a la fibrosis basal orienta a esclerosis sistemica.',
      complementarios: 'Valoracion conjunta con reumatologia u oncologia. Cribado periodico de EPID en la esclerosis sistemica, donde la tomografia basal esta indicada en todos los pacientes al diagnostico por la frecuencia y el impacto de la afectacion pulmonar.',
      dx_diferencial: 'Fibrosis pulmonar idiopatica, neumonitis por hipersensibilidad, infeccion oportunista en el paciente inmunosuprimido (que es el diferencial mas urgente y mas peligroso de confundir), edema pulmonar, hemorragia alveolar y progresion tumoral o linfangitis carcinomatosa en el paciente oncologico.',
      tx_medico: 'Tratamiento de la enfermedad de base coordinado con reumatologia. En la toxicidad por farmacos, RETIRADA INMEDIATA del agente sospechoso y registro visible de la contraindicacion en la historia. Rehabilitacion, oxigeno y vacunacion.',
      tx_farmacologico: 'Corticoide con inmunosupresor ahorrador segun la enfermedad: micofenolato y ciclofosfamida en la esclerosis sistemica, rituximab en casos refractarios y en las miopatias, tocilizumab en la esclerosis sistemica con inflamacion. NINTEDANIB si aparece comportamiento progresivo, y esta autorizado especificamente en la EPID de la esclerosis sistemica. En la neumonitis por inhibidores del punto de control: retirada del farmaco y corticoide, con escalada a inmunosupresor si no responde.',
      tx_intervencionista: 'Trasplante pulmonar en casos seleccionados, con la particularidad de que la afectacion esofagica grave de la esclerosis sistemica complica la indicacion por el riesgo de microaspiracion sobre el injerto.',
      criterios_uci: 'La neumonitis rapidamente progresiva asociada a anti-MDA5 y algunas neumonitis graves por inhibidores del punto de control pueden requerir soporte ventilatorio e inmunosupresion intensiva urgente. Tienen mal pronostico y exigen actuar rapido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los de cualquier EPID avanzada, valorando la afectacion extrapulmonar y esofagica de la enfermedad de base.',
      seguimiento_hospitalario: 'Ante deterioro en un paciente inmunosuprimido, descartar SIEMPRE infeccion oportunista antes de subir la inmunosupresion: es el error con consecuencias mas graves de esta ficha.',
      seguimiento_ambulatorio: 'Funcion pulmonar cada 3 a 6 meses en la EPID establecida y cribado periodico en las enfermedades de alto riesgo. Vigilancia de la toxicidad del inmunosupresor y profilaxis de infecciones oportunistas cuando corresponda.',
      pronostico: 'Muy variable. La EPID de la esclerosis sistemica y la asociada a anti-MDA5 tienen peor curso. La toxicidad por farmacos suele mejorar al retirarlos si se detecta pronto, y ese es el argumento para revisar la medicacion en toda EPID de nueva aparicion.',
      algoritmo: ['En toda EPID, pedir panel de autoinmunidad amplio, incluido el de miositis', 'Explorar buscando Raynaud, esclerodactilia, manos de mecanico y debilidad proximal', 'Hacer capilaroscopia si se sospecha esclerosis sistemica', 'Revisar TODA la medicacion, incluida la retirada hace meses', 'Retirar de inmediato el farmaco sospechoso y dejarlo registrado', 'Coordinar el tratamiento con reumatologia u oncologia', 'Corticoide con inmunosupresor ahorrador segun la enfermedad de base', 'A&#241;adir nintedanib si el comportamiento es progresivo', 'Ante deterioro bajo inmunosupresion, descartar infeccion ANTES de escalar', 'Cribar EPID de forma periodica en la esclerosis sistemica']
    },
    {
      nombre: 'Neumoconiosis y EPID ocupacional',
      color: '#6b4a2e',
      definicion: 'Enfermedad pulmonar parenquimatosa producida por la inhalacion y el deposito de polvo mineral en el pulmon y por la reaccion tisular que desencadena. Las principales son la silicosis, la asbestosis, la neumoconiosis del minero del carbon y la beriliosis.',
      fisiopatologia: 'Las particulas respirables (de 0.5 a 5 micras) alcanzan el alveolo y son fagocitadas por el macrofago. La silice cristalina es especialmente citotoxica: activa el inflamasoma, mata al macrofago y libera la particula, que vuelve a ser fagocitada en un ciclo autoperpetuado que produce nodulos fibroticos. El asbesto, por su forma fibrilar, no puede ser eliminado y genera inflamacion cronica y da&#241;o oxidativo, con fibrosis intersticial y con la capacidad a&#241;adida de producir enfermedad pleural y mesotelioma. El berilio actua como un antigeno y produce una enfermedad granulomatosa indistinguible de la sarcoidosis.',
      epidemiologia: 'Lejos de ser enfermedades del pasado, la silicosis ha reaparecido con fuerza asociada al corte y pulido de aglomerados de cuarzo para encimeras, con formas aceleradas en trabajadores jovenes. La latencia de la asbestosis y del mesotelioma se mide en decadas, de modo que siguen apareciendo casos por exposiciones antiguas mucho despues de que se prohibiera el material.',
      factores_riesgo: ['Corte, pulido y manipulacion en seco de aglomerados de cuarzo', 'Mineria, canteras, tunelado y chorreado de arena', 'Ceramica, vidrio, fundicion y construccion', 'Trabajo con amianto: aislamiento, astilleros, frenos, fibrocemento', 'Mineria del carbon', 'Industria aeroespacial, electronica y dental para el berilio', 'Ausencia de proteccion respiratoria y de trabajo en humedo', 'Tabaquismo, que multiplica el riesgo de cancer con el asbesto', 'Intensidad y duracion acumuladas de la exposicion', 'Trabajo en empresas peque&#241;as sin vigilancia de la salud'],
      clinica: 'Disnea de esfuerzo y tos de instauracion muy lenta, salvo en la silicosis acelerada. Puede ser un hallazgo radiologico en un trabajador asintomatico, que es la situacion ideal porque permite retirar la exposicion. En la asbestosis, crepitantes basales y acropaquias. En la silicosis avanzada, sindrome constitucional que obliga a descartar tuberculosis y cancer.',
      criterios_dx: 'HISTORIA DE EXPOSICION suficiente en intensidad y latencia MAS patron radiologico compatible. La biopsia rara vez es necesaria si la exposicion es clara. La clave del diagnostico es preguntar por TODOS los trabajos desde el primero, incluidos los de juventud y los no declarados, porque la latencia puede ser de decadas.',
      laboratorio: 'Sin marcadores especificos. Prueba de proliferacion linfocitaria al berilio si se sospecha beriliosis, que es lo que la separa de la sarcoidosis. Cribado de tuberculosis en la silicosis, donde el riesgo esta claramente aumentado.',
      imagen: 'Silicosis: nodulos de predominio en lobulos superiores y posteriores, adenopatias hiliares con calcificacion en cascara de huevo, y en la forma complicada masas de FIBROSIS MASIVA PROGRESIVA. Asbestosis: fibrosis intersticial basal y subpleural con bandas parenquimatosas, junto a PLACAS PLEURALES calcificadas que son el marcador de exposicion. Carbon: nodulos similares a los de la silicosis.',
      complementarios: 'Notificacion como ENFERMEDAD PROFESIONAL y coordinacion con salud laboral, con consecuencias economicas y preventivas para el trabajador y para sus companeros. Estudio de los expuestos al mismo foco: un caso indice suele significar mas casos.',
      dx_diferencial: 'Sarcoidosis (indistinguible de la beriliosis sin la prueba de proliferacion al berilio), tuberculosis, metastasis miliares, fibrosis pulmonar idiopatica en la asbestosis, neumonitis por hipersensibilidad y otras EPID ocupacionales como la del metal duro.',
      tx_medico: 'RETIRAR LA EXPOSICION, aunque no revierta lo ya establecido: evita la progresion y protege a los companeros. Abandono del tabaco, que es especialmente importante en la exposicion al asbesto por el efecto multiplicativo sobre el cancer de pulmon. Rehabilitacion, oxigeno y vacunacion.',
      tx_farmacologico: 'No hay tratamiento especifico que revierta la fibrosis. El corticoide no ha demostrado beneficio. En la beriliosis si se usa corticoide, porque es una enfermedad granulomatosa inmunomediada. Si el comportamiento es progresivo, valorar nintedanib. Tratamiento de la tuberculosis, activa o latente, en la silicosis.',
      tx_intervencionista: 'Trasplante pulmonar en casos avanzados seleccionados. Lavado pulmonar total en la proteinosis alveolar secundaria a exposicion masiva a silice, que es una situacion poco frecuente pero tratable.',
      criterios_uci: 'Los de cualquier insuficiencia respiratoria. La silicoproteinosis aguda por exposicion masiva puede producir un cuadro rapidamente progresivo y muy grave en trabajadores jovenes.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los de cualquier EPID avanzada, valorando la edad, que en estos pacientes suele ser menor.',
      seguimiento_hospitalario: 'Sin particularidades propias.',
      seguimiento_ambulatorio: 'Vigilancia periodica con funcion pulmonar e imagen. CRIBADO DE TUBERCULOSIS repetido en la silicosis. Vigilancia de cancer de pulmon y de mesotelioma en la exposicion al asbesto. Seguimiento de los companeros expuestos y de la prevencion en el puesto.',
      pronostico: 'Depende de la dosis acumulada y de la retirada. La silicosis simple puede permanecer estable, y la complicada con fibrosis masiva progresa aunque cese la exposicion. El mesotelioma tiene mal pronostico y una latencia que puede superar los 40 a&#241;os.',
      algoritmo: ['Preguntar por TODOS los trabajos desde el primero, no solo por el actual', 'Estimar intensidad y latencia de la exposicion', 'Tomografia buscando el patron caracteristico y las placas pleurales', 'Descartar tuberculosis en la silicosis, y repetir el cribado en el seguimiento', 'Prueba de proliferacion al berilio si el cuadro parece sarcoidosis en un expuesto', 'Retirar la exposicion aunque la enfermedad ya este establecida', 'Notificar como enfermedad profesional y avisar a salud laboral', 'Estudiar a los companeros expuestos al mismo foco', 'Abandono del tabaco, imprescindible con exposicion al asbesto', 'Valorar nintedanib si el comportamiento es progresivo']
    },
    {
      nombre: 'Restriccion extrapulmonar: pared toracica y enfermedad neuromuscular',
      color: '#3f6b52',
      definicion: 'Patron restrictivo producido por una alteracion de la bomba ventilatoria y no del parenquima: pared toracica, pleura, contenido abdominal, musculo respiratorio o su inervacion. Se reconoce porque la DLCO es normal y la KCO normal o alta.',
      fisiopatologia: 'El pulmon es normal pero no se expande. En la obesidad y en el derrame, por compresion y por reduccion del volumen disponible. En la cifoescoliosis y en la espondilitis, por rigidez de la caja. En la enfermedad neuromuscular, porque el musculo no genera la presion necesaria: la FVC cae, el volumen residual sube y aparecen microatelectasias que reducen la distensibilidad. El diafragma es el mas vulnerable, y por eso la disnea empeora en decubito, cuando el contenido abdominal lo empuja. La hipoventilacion aparece PRIMERO durante el sue&#241;o, sobre todo en fase REM, cuando la musculatura accesoria se inhibe y todo depende del diafragma.',
      epidemiologia: 'La insuficiencia respiratoria es la principal causa de muerte en la esclerosis lateral amiotrofica y en la mayoria de las distrofias musculares. La obesidad es hoy la causa mas frecuente de restriccion extrapulmonar en la consulta general, y en su forma extrema produce el sindrome de hipoventilacion asociado a obesidad.',
      factores_riesgo: ['Obesidad, sobre todo con indice de masa corporal por encima de 35', 'Esclerosis lateral amiotrofica y otras enfermedades de motoneurona', 'Distrofias musculares y miopatias congenitas o metabolicas', 'Miastenia gravis y sindrome de Guillain-Barre', 'Lesion medular cervical alta', 'Cifoescoliosis grave y toracoplastia antigua', 'Espondilitis anquilosante con torax rigido', 'Paralisis diafragmatica uni o bilateral, incluida la posquirurgica', 'Ascitis a tension y grandes masas abdominales', 'Derrame pleural cronico y fibrotorax'],
      clinica: 'Disnea que empeora claramente EN DECUBITO, sin crepitantes ni acropaquias. Cefalea matutina, somnolencia diurna, sue&#241;o no reparador y dificultad de concentracion, que son los sintomas de la hipoventilacion nocturna y preceden en meses a la hipercapnia diurna. Tos debil e infecciones respiratorias de repeticion por mal aclaramiento de secreciones. Respiracion paradojica abdominal en supino en la debilidad avanzada.',
      criterios_dx: 'Restriccion confirmada por capacidad pulmonar total baja CON DLCO NORMAL y KCO normal o alta. A partir de ahi, identificar la causa: exploracion neurologica, presiones respiratorias maximas, FVC en decubito y ecografia diafragmatica. Ver la Figura 1 de Definicion.',
      laboratorio: 'Gasometria arterial y bicarbonato: un bicarbonato elevado en un paciente con enfermedad neuromuscular indica hipoventilacion nocturna ya establecida aunque la gasometria diurna sea normal, y es una pista barata que se pasa por alto con frecuencia. Creatincinasa y estudio de la enfermedad de base.',
      imagen: 'Radiografia con elevacion diafragmatica en la paralisis, y valoracion de la deformidad de la pared. Ecografia diafragmatica para medir grosor y fraccion de engrosamiento a pie de cama. Radioscopia con la maniobra de olfateo en la paralisis unilateral.',
      complementarios: 'FVC en sedestacion Y EN DECUBITO, con una caida mayor del 20% como marcador de debilidad diafragmatica. Presiones inspiratoria y espiratoria maximas y presion inspiratoria nasal. Pulsioximetria nocturna o poligrafia, que detecta la hipoventilacion antes que cualquier prueba diurna. Pico de flujo de tos para valorar la eficacia del aclaramiento.',
      dx_diferencial: 'EPID (que se separa por la DLCO), insuficiencia cardiaca, hipertension pulmonar, desacondicionamiento, anemia, y en la disnea de decubito, la ortopnea de origen cardiaco.',
      tx_medico: 'Tratamiento de la enfermedad de base. Perdida de peso y valoracion de cirugia bariatrica en la obesidad, que es la unica causa realmente reversible del grupo. Fisioterapia respiratoria, tecnicas de tos asistida manual y mecanica, y vacunacion, todas ellas medidas que reducen los ingresos por infeccion. Evitar sedantes y opioides.',
      tx_farmacologico: 'El de la enfermedad de base: inmunosupresion en la miastenia, riluzol y edaravona en la esclerosis lateral amiotrofica, tratamiento especifico en las miopatias que lo tienen. No hay farmaco que mejore la mecanica en si.',
      tx_intervencionista: 'VENTILACION NO INVASIVA DOMICILIARIA, que es la intervencion que cambia el pronostico: en la esclerosis lateral amiotrofica prolonga la supervivencia y mejora la calidad de vida, y en el sindrome de hipoventilacion asociado a obesidad corrige la hipercapnia. Se indica ante sintomas de hipoventilacion, hipercapnia diurna, desaturacion nocturna significativa, FVC por debajo del 50% o presion inspiratoria maxima menos negativa de -40 cmH2O. Traqueostomia con ventilacion invasiva en fases avanzadas, decidida con antelacion. Cirugia de la escoliosis en casos seleccionados.',
      criterios_uci: 'Crisis miastenica, sindrome de Guillain-Barre con FVC en descenso rapido (donde se intuba por la tendencia de la FVC y no por la gasometria, que se altera tarde), y descompensacion aguda de cualquier enfermedad neuromuscular avanzada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica: el problema no es el pulmon.',
      seguimiento_hospitalario: 'En la enfermedad neuromuscular aguda, medir la FVC de forma seriada y no esperar a la hipercapnia: la gasometria se altera cuando el paciente ya esta al limite. Vigilar la capacidad de tragar y de toser.',
      seguimiento_ambulatorio: 'Funcion pulmonar con FVC en decubito y presiones maximas cada 3 a 6 meses en la enfermedad progresiva. Pulsioximetria nocturna periodica. Planificacion anticipada de decisiones sobre ventilacion y traqueostomia, hablada con tiempo y no en una urgencia.',
      pronostico: 'Depende por completo de la enfermedad de base. La ventilacion no invasiva domiciliaria mejora la supervivencia y la calidad de vida en varias de estas enfermedades, lo que convierte la deteccion precoz de la hipoventilacion nocturna en una de las intervenciones mas rentables del tema.',
      algoritmo: ['Confirmar la restriccion con capacidad pulmonar total, no con espirometria sola', 'Mirar la DLCO: normal con KCO normal o alta indica causa EXTRAPULMONAR', 'Explorar buscando obesidad, deformidad de la pared o debilidad muscular', 'Medir la FVC en sedestacion y en DECUBITO', 'Medir presiones inspiratoria y espiratoria maximas', 'Preguntar por cefalea matutina, somnolencia y sue&#241;o no reparador', 'Mirar el bicarbonato: elevado indica hipoventilacion nocturna establecida', 'Pulsioximetria nocturna o poligrafia', 'Indicar ventilacion no invasiva domiciliaria si cumple criterios', 'Ense&#241;ar tecnicas de tos asistida y planificar decisiones con antelacion']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La EPID es sobre todo una enfermedad de consulta, y por eso lo que mas se juega aqui es el metodo diagnostico y no el manejo del ingreso. Los errores se repiten: diagnosticar restriccion con una espirometria, etiquetar de idiopatica sin haber preguntado por aves ni por el trabajo, y dar corticoide a una fibrosis idiopatica. Lo que sigue es la lista de comprobacion.',
    parametros: ['La espirometria NO diagnostica restriccion: hace falta capacidad pulmonar total por pletismografia', 'Corregir siempre la DLCO por la hemoglobina antes de interpretarla', 'Pedir la tomografia de alta resolucion en inspiracion, ESPIRACION y prono', 'Interrogar por aves, humedades, humidificadores y TODA la historia laboral desde el primer trabajo', 'Panel de autoinmunidad amplio, incluido el de miositis, aunque no haya sintomas reumatologicos', 'Revisar todos los farmacos, incluidos los suspendidos hace meses', 'Con patron de neumonia intersticial usual definitivo y exclusiones hechas: NO biopsiar', 'Llevar todo caso de EPID al comite multidisciplinar: sin el, el diagnostico es provisional', 'En la fibrosis pulmonar idiopatica, NUNCA corticoide ni inmunosupresor de mantenimiento', 'Derivar a trasplante EN EL MOMENTO del diagnostico, no cuando el paciente ya se ha deteriorado', 'Medir la desaturacion en la marcha de 6 minutos: en reposo se escapa', 'En la restriccion extrapulmonar, medir la FVC en decubito y mirar el bicarbonato'],
    criterios_uci_general: 'Insuficiencia respiratoria aguda por exacerbacion de la fibrosis, neumonitis rapidamente progresiva (sobre todo la asociada a anti-MDA5), y crisis neuromuscular con FVC en descenso rapido, donde se intuba por la tendencia de la FVC y no por la gasometria. En la fibrosis idiopatica avanzada, la ventilacion invasiva rara vez cambia el desenlace fuera del puente a trasplante, y eso obliga a haber hablado antes de los objetivos de cuidado.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Remitir en el momento del diagnostico en la fibrosis pulmonar idiopatica y en cualquier EPID fibrosante progresiva. Incluir en lista ante caida de la FVC del 10% o mas o de la DLCO del 15% o mas en 6 meses, desaturacion por debajo del 88% o marcha menor de 250 metros, hipertension pulmonar u hospitalizacion por deterioro respiratorio.',
    prevencion: 'Primaria: control de la exposicion laboral a silice, asbesto, carbon y berilio, con trabajo en humedo, aspiracion localizada y proteccion respiratoria; control de humedades y de la exposicion a aves en el domicilio; y abandono del tabaco. Secundaria: cribado de EPID en las enfermedades autoinmunitarias de alto riesgo, vigilancia de la salud en los trabajadores expuestos, y revision de la medicacion. Terciaria: retirada del antigeno o del farmaco, funcion pulmonar seriada para detectar el fenotipo progresivo, rehabilitacion, vacunacion, oxigenoterapia y derivacion precoz a trasplante.'
  }
};

export const compCites = {
  'Fibrosis pulmonar idiopatica': [1, 3, 4, 5, 8],
  'Fibrosis pulmonar progresiva': [1, 6, 7, 16],
  'Neumonitis por hipersensibilidad': [2, 1],
  'EPID autoinmunitaria y por farmacos': [7, 11, 17],
  'Neumoconiosis y EPID ocupacional': [14, 15],
  'Restriccion extrapulmonar: pared toracica y enfermedad neuromuscular': [13, 18]
};
export const estigmasTitulo = 'Signos de la enfermedad intersticial y de la restriccion, y lo que significa cada uno';
export const estigmas = [
  { s: 'Crepitantes secos en velcro', p: 'Practicamente constantes en la fibrosis', photo: null, desc: 'Teleinspiratorios, finos, que no se modifican con la tos y que recuerdan a despegar una tira de velcro. Pueden PRECEDER en a&#241;os a las alteraciones radiologicas, de modo que oirlos en un paciente con radiografia normal es motivo para pedir una tomografia, no para tranquilizar.' },
  { s: 'Acropaquias', p: '~50% en la fibrosis idiopatica', photo: null, desc: 'Aumento de la convexidad ungueal con perdida del angulo de Lovibond. Frecuentes en la fibrosis idiopatica y en la asbestosis, raras en la sarcoidosis y en la neumonitis por hipersensibilidad, lo que las hace un dato de orientacion util a pie de cama.' },
  { s: 'Desaturacion al esfuerzo con saturacion normal en reposo', p: 'El hallazgo mas precoz', photo: null, desc: 'Es lo primero que se altera y lo que mas se escapa, porque solo aparece si se mide caminando. Una saturacion normal sentado no descarta nada: la marcha de 6 minutos con oximetria es la prueba que lo detecta.' },
  { s: 'Disnea desproporcionada a la exploracion y a la radiografia', p: 'Frecuente', photo: null, desc: 'La radiografia de torax puede ser normal con enfermedad establecida. Un paciente con disnea de esfuerzo progresiva, crepitantes y radiografia limpia necesita tomografia de alta resolucion y pruebas de funcion pulmonar completas.' },
  { s: 'Chirrido inspiratorio breve o squawk', p: 'En la neumonitis por hipersensibilidad', photo: null, desc: 'Ruido inspiratorio corto y agudo por afectacion bronquiolar, distinto del crepitante. Su presencia en un paciente con fibrosis orienta hacia la neumonitis por hipersensibilidad y en contra de la fibrosis idiopatica.' },
  { s: 'Mejoria fuera de casa o del trabajo', p: 'Dato clave de anamnesis', photo: null, desc: 'No es un signo fisico pero funciona como tal: la mejoria en vacaciones o los fines de semana con recaida al volver es la pista mas util de la neumonitis por hipersensibilidad y del asma ocupacional. Se pierde cuando la enfermedad se hace fibrotica.' },
  { s: 'Fenomeno de Raynaud y esclerodactilia', p: 'En la EPID autoinmunitaria', photo: null, desc: 'La EPID puede ser la PRIMERA manifestacion de una conectivopatia, a&#241;os antes que la piel o las articulaciones. Buscar Raynaud, esclerodactilia y alteraciones en la capilaroscopia cambia el diagnostico y el tratamiento por completo.' },
  { s: 'Manos de mecanico y papulas de Gottron', p: 'En el sindrome antisintetasa', photo: null, desc: 'Hiperqueratosis fisurada en los bordes radiales de los dedos, y papulas violaceas sobre los nudillos. Identifican una miopatia inflamatoria en un paciente que puede tener poca o ninguna debilidad, y que responde a inmunosupresion.' },
  { s: 'Disnea que empeora en decubito sin crepitantes', p: 'Restriccion extrapulmonar', photo: null, desc: 'Ortopnea sin insuficiencia cardiaca ni crepitantes apunta a debilidad diafragmatica. Se confirma con la caida de la FVC al pasar de sentado a tumbado, que si supera el 20% indica disfuncion diafragmatica significativa.' },
  { s: 'Respiracion paradojica abdominal en supino', p: 'Debilidad avanzada', photo: null, desc: 'El abdomen se hunde en la inspiracion en lugar de expandirse. Indica que el diafragma ya no genera presion suficiente y anuncia la insuficiencia ventilatoria: obliga a estudiar el sue&#241;o y a plantear la ventilacion domiciliaria.' },
  { s: 'Cefalea matutina y somnolencia diurna', p: 'Hipoventilacion nocturna', photo: null, desc: 'Son los sintomas de la retencion de dioxido de carbono durante el sue&#241;o, que aparece meses antes que la hipercapnia diurna. Un bicarbonato elevado en un paciente neuromuscular apunta a lo mismo y cuesta muy poco mirarlo.' },
  { s: 'Tos debil e infecciones respiratorias de repeticion', p: 'En la enfermedad neuromuscular', photo: null, desc: 'La debilidad de la musculatura espiratoria impide el aclaramiento de secreciones y es la via por la que estos pacientes ingresan y mueren. El pico de flujo de tos lo cuantifica, y las tecnicas de tos asistida reducen los ingresos.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Patrones de la tomografia de alta resolucion (calculadora disponible)': [1],
  'Interpretacion del patron restrictivo (calculadora disponible)': [13, 12],
  'Criterios de fibrosis pulmonar progresiva (calculadora disponible)': [1, 6],
  'Indice GAP (calculadora disponible)': [8],
  'Clasificacion de las neumonias intersticiales idiopaticas': [10, 16],
  'Criterios de neumonitis por hipersensibilidad': [2],
  'Criterios de exacerbacion aguda de la fibrosis pulmonar': [9]
};
export const escalaCalc = {
  'Patrones de la tomografia de alta resolucion (calculadora disponible)': 'patron-tcar',
  'Interpretacion del patron restrictivo (calculadora disponible)': 'patron-restrictivo',
  'Criterios de fibrosis pulmonar progresiva (calculadora disponible)': 'fibrosis-progresiva',
  'Indice GAP (calculadora disponible)': 'gap'
};
export const compGroups = [
  { name: 'Fibrosis: la idiopatica y el fenotipo progresivo', items: ['Fibrosis pulmonar idiopatica', 'Fibrosis pulmonar progresiva'] },
  { name: 'EPID de causa identificable', items: ['Neumonitis por hipersensibilidad', 'EPID autoinmunitaria y por farmacos', 'Neumoconiosis y EPID ocupacional'] },
  { name: 'Restriccion sin enfermedad del parenquima', items: ['Restriccion extrapulmonar: pared toracica y enfermedad neuromuscular'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el eje del tema: la fibrosis pulmonar idiopatica, que se diagnostica excluyendo, y la fibrosis pulmonar progresiva, que es un fenotipo de comportamiento y no una enfermedad. Las tres siguientes son precisamente lo que hay que excluir antes de decir idiopatica, y las tres tienen tratamiento propio: retirar el antigeno, inmunosuprimir la autoinmunidad o suspender el farmaco, y apartar al trabajador de la exposicion. La ultima queda un poco aparte pero pertenece al mismo capitulo de fisiologia: la restriccion que no viene del pulmon sino de la bomba que lo mueve, y que se reconoce porque la DLCO es normal.';
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
  root: { title: 'EPID Y RESTRICCION', color: '#6b4a7a', target: 'definicion' },
  branches: [
    { title: 'ORDENAR LA RESTRICCION', sub: 'La DLCO parte el problema en dos', color: '#3d5a73', target: 'clasificacion', leaves: [
      { title: 'Capacidad pulmonar total', sub: 'La espirometria no basta', color: '#3d5a73', target: 'diagnostico' },
      { title: 'DLCO baja', sub: 'Enfermedad del parenquima', color: '#8c3a34', target: 'complicaciones' },
      { title: 'DLCO normal, KCO alta', sub: 'Problema de la bomba', color: '#3f6b52', target: 'complicaciones' },
      { title: 'FVC en decubito', sub: 'Caida mayor del 20%: diafragma', color: '#6b4a2e', target: 'diagnostico' }
    ] },
    { title: 'DIAGNOSTICO DE LA EPID', sub: 'Imagen, exclusiones y comite', color: '#6b4a7a', target: 'diagnostico', leaves: [
      { title: 'NIU definitiva', sub: 'No hace falta biopsia', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Aves, humedades y trabajo', sub: 'Preguntar por todo, uno por uno', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Autoinmunidad y farmacos', sub: 'Puede ser la primera manifestacion', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Comite multidisciplinar', sub: 'El patron de referencia', color: '#6b4a7a', target: 'diagnostico' }
    ] },
    { title: 'TRATAMIENTO', sub: 'Y el error que aumenta la mortalidad', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Antifibroticos', sub: 'Enlentecen, no revierten', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Fibrosis progresiva', sub: '2 de 3 criterios en un a&#241;o', color: '#6b4a7a', target: 'clasificacion' },
      { title: 'Nunca inmunosuprimir la FPI', sub: 'El ensayo se paro por mortalidad', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Trasplante desde el diagnostico', sub: 'No cuando ya se deterioro', color: '#3f6b52', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 12, 13], no_invasivos: [1, 8, 13], imagen: [1, 2] };
export const clasificacionCite = [1, 2, 8, 10];
export const seguimientoCite = [1, 9];
