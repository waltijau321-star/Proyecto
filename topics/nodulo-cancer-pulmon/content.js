// topics/nodulo-cancer-pulmon/content.js: Nodulo pulmonar solitario y cancer de pulmon.
// Cubre el item "Nodulo pulmonar solitario y cancer de pulmon" del cluster Enfermedad
// respiratoria cronica (bloque III, Neumologia) del temario.
//
// Fuentes principales: guia Fleischner 2017 para el nodulo incidental; guia NCCN de cancer de
// pulmon no microcitico version 4.2026 (la que hay en Bibliografia/); recomendacion del USPSTF
// de 2021 sobre cribado con tomografia de baja dosis; ensayos NLST y NELSON; novena edicion de
// la clasificacion TNM, vigente desde enero de 2025; ensayos PACIFIC, ADAURA, CheckMate 816 e
// IMpower010; y las guias ERS/ESTS y ACCP de valoracion funcional preoperatoria.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (nodulo incidental, cancer sintomatico) + 6 fichas.
// 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'nodulo-cancer-pulmon',
  titulo: 'Nodulo Pulmonar y Cancer de Pulmon',
  subtitulo: 'Modulo 55 · Medicina Interna',
  accent: '#8c5a2e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const noduloHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c5a2e;border-radius:8px;padding:5px 9px;background:#8c5a2e12;margin-bottom:6px;">
    <strong style="color:#8c5a2e;">Un nodulo es una opacidad de 30 mm o menos rodeada de pulmon.</strong> <span style="color:var(--ink-dim);">Por encima de 30 mm se llama masa y se maneja como un cancer hasta que se demuestre lo contrario, sin periodos de observacion. Y antes de aplicar cualquier tabla hay que <strong>comparar con estudios previos</strong>: un nodulo estable durante 2 a&#241;os (solido) o 5 (subsolido) ya esta resuelto.</span>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Las guias de Fleischner NO se aplican a todo el mundo.</strong> Quedan fuera: menores de 35 a&#241;os, pacientes <strong>inmunodeprimidos</strong>, pacientes con <strong>cancer conocido</strong> y los nodulos detectados en un <strong>programa de cribado</strong>, que se manejan con Lung-RADS. En todos ellos el umbral de sospecha es distinto y aplicar Fleischner puede retrasar un diagnostico.
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">NODULO SOLIDO unico</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Menor de 6 mm</strong>: sin seguimiento si el riesgo es bajo; tomografia opcional a los 12 meses si es alto.<br>
        <strong style="color:var(--ink);">De 6 a 8 mm</strong>: tomografia a los 6 a 12 meses y despues a los 18 a 24.<br>
        <strong style="color:var(--ink);">Mayor de 8 mm</strong>: tomografia a los 3 meses, <strong>tomografia por emision de positrones</strong> o toma de muestra, segun la probabilidad.
      </div>
    </div>
    <div style="border:1.5px solid #6b4a7a;border-radius:8px;padding:6px 8px;background:#6b4a7a08;">
      <div style="font-weight:700;color:#6b4a7a;text-align:center;margin-bottom:4px;">NODULO SUBSOLIDO unico</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Vidrio puro menor de 6 mm</strong>: sin seguimiento.<br>
        <strong style="color:var(--ink);">Vidrio puro de 6 mm o mas</strong>: tomografia a los 6 a 12 meses y despues cada 2 a&#241;os <strong>hasta los 5</strong>.<br>
        <strong style="color:var(--ink);">Parcialmente solido de 6 mm o mas</strong>: tomografia a los 3 a 6 meses y despues anual hasta los 5 a&#241;os. Si el <strong>componente solido llega a 6 mm</strong>, es sospechoso: positrones, biopsia o reseccion.
      </div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Por que el subsolido se sigue mas tiempo.</strong> El vidrio deslustrado puro suele corresponder a lesiones de la via adenocarcinomatosa (hiperplasia adenomatosa atipica, adenocarcinoma in situ, minimamente invasivo) que crecen muy despacio: 2 a&#241;os de estabilidad no bastan y por eso el seguimiento llega a 5. El dato que marca el cambio de comportamiento es la <strong>aparicion o el crecimiento del componente SOLIDO</strong>, que traduce invasion. Un nodulo subsolido que se hace mas grande pero sigue siendo puro preocupa menos que uno que no crece pero desarrolla un nucleo solido.
  </div>
</div>`;

const riesgoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">SUBEN la probabilidad de malignidad</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Del paciente</strong>: edad avanzada, tabaquismo actual o pasado con carga alta, antecedente de otro cancer, exposicion a asbesto, EPOC y ENFISEMA, fibrosis pulmonar, historia familiar de cancer de pulmon.<br>
        <strong style="color:var(--ink);">Del nodulo</strong>: tama&#241;o mayor, bordes <strong>espiculados</strong> o con corona radiada, localizacion en <strong>lobulo superior</strong>, componente subsolido con nucleo solido, pared gruesa e irregular si esta cavitado, y sobre todo <strong>CRECIMIENTO</strong> respecto a estudios previos.
      </div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">BAJAN la probabilidad</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Calcificacion benigna</strong>: central, laminar concentrica, difusa o en palomita de maiz (hamartoma). Las calcificaciones excentricas o punteadas NO tranquilizan.<br>
        <strong style="color:var(--ink);">Grasa</strong> en el interior: practicamente diagnostica de hamartoma.<br>
        <strong style="color:var(--ink);">Estabilidad</strong> durante 2 a&#241;os en el solido, y morfologia perifisuraria o triangular (ganglio intrapulmonar), que es una causa muy frecuente de nodulo peque&#241;o y benigno.
      </div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Tres franjas de probabilidad y tres conductas.</strong> <strong style="color:#3f6b52;">Baja (menor del 5%)</strong>: vigilancia con tomografia. <strong style="color:#8a6a1f;">Intermedia (del 5 al 65%)</strong>: tomografia por emision de positrones y, segun el resultado, biopsia; es la franja donde mas se decide y donde mas se equivoca uno. <strong style="color:#8c3a34;">Alta (mayor del 65%)</strong>: toma de muestra o reseccion directa en el paciente operable.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Los limites de la tomografia por emision de positrones.</strong> <strong>Falsos negativos</strong> en lesiones menores de 8 a 10 mm, en el <strong>adenocarcinoma de crecimiento lepidico</strong> y en el tumor carcinoide, que captan poco. <strong>Falsos positivos</strong> en la infeccion, la inflamacion granulomatosa (tuberculosis, sarcoidosis, micosis) y la artritis reumatoide. En zonas con tuberculosis o micosis endemicas su especificidad cae mucho, y un resultado positivo NO sustituye a la histologia.
  </div>
</div>`;

const cribadoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">El cribado con tomografia de baja dosis reduce la mortalidad por cancer de pulmon.</strong> <span style="color:var(--ink-dim);">Lo demostraron dos ensayos grandes: uno estadounidense frente a radiografia y otro europeo frente a no cribar. Es de las pocas intervenciones de cribado con reduccion de mortalidad demostrada, y sigue infrautilizada.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">A QUIEN</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Adultos de <strong style="color:var(--ink);">50 a 80 a&#241;os</strong> con al menos <strong style="color:var(--ink);">20 paquetes-a&#241;o</strong> que fuman actualmente o lo dejaron hace <strong>menos de 15 a&#241;os</strong>. Tomografia de baja dosis <strong>ANUAL</strong>.</div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">CUANDO SE DEJA DE CRIBAR</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Al cumplir <strong>15 a&#241;os sin fumar</strong>, o cuando aparece una <strong style="color:var(--ink);">enfermedad que limita la esperanza de vida</strong> o que impediria una cirugia curativa. Cribar a quien no podria tratarse solo produce da&#241;o.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que hay que contarle al paciente.</strong> Que la mayoria de los hallazgos seran nodulos benignos que obligaran a repetir pruebas; que hay un riesgo peque&#241;o de complicaciones por procedimientos sobre lesiones que resultan benignas; que existe sobrediagnostico; y que la radiacion acumulada es baja pero no nula. La decision es compartida y se documenta.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Lo que no se debe olvidar.</strong> El cribado <strong>NO sustituye al abandono del tabaco</strong>: la intervencion antitabaco debe ofrecerse en cada visita del programa, y su beneficio se suma al del cribado. Y los hallazgos se informan con <strong>Lung-RADS</strong>, no con las guias de Fleischner, que estan pensadas para el nodulo incidental.
    </div>
  </div>
</div>`;

const estadioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">En el cancer de pulmon avanzado, el estudio MOLECULAR es parte del diagnostico, no un extra.</strong> <span style="color:var(--ink-dim);">Empezar quimioterapia sin conocer las alteraciones diana ni la expresion de PD-L1 puede costarle al paciente el mejor tratamiento disponible.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">ESTADIO I y II<br>localizado</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CIRUGIA</strong>: lobectomia con diseccion ganglionar mediastinica, y segmentectomia en tumores perifericos peque&#241;os seleccionados. Radioterapia estereotactica si el paciente no es operable. Quimioterapia adyuvante a partir del estadio IB de alto riesgo y en el II, con <strong>osimertinib adyuvante</strong> si hay mutacion de EGFR e inmunoterapia adyuvante segun PD-L1. La quimioinmunoterapia <strong>neoadyuvante</strong> se ha incorporado en el resecable.</div>
    </div>
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">ESTADIO III<br>locorregional</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El mas heterogeneo y el que mas exige comite. En el irresecable, <strong style="color:var(--ink);">quimiorradioterapia concurrente seguida de durvalumab</strong> de consolidacion, que cambio la supervivencia de este grupo. En casos seleccionados, cirugia dentro de una estrategia multimodal.</div>
    </div>
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">ESTADIO IV<br>metastasico</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Estudio molecular OBLIGATORIO antes de tratar</strong>: EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK y HER2, mas expresion de PD-L1. Con diana: inhibidor especifico, que consigue respuestas prolongadas. Sin diana: inmunoterapia sola o con quimioterapia segun PD-L1 y clinica. <strong>Cuidados paliativos precoces</strong>, que en esta enfermedad mejoran la calidad de vida y en un ensayo clasico tambien la supervivencia.</div>
    </div>
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">MICROCITICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se maneja aparte: crece rapido, disemina pronto y responde muy bien al principio para recaer despues. <strong style="color:var(--ink);">Enfermedad limitada</strong>: quimioterapia con platino y etoposido concurrente con radioterapia toracica. <strong style="color:var(--ink);">Enfermedad extendida</strong>: quimioterapia con platino, etoposido e inmunoterapia. Irradiacion craneal profilactica o resonancias de vigilancia en los que responden.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">La estadificacion ganglionar mediastinica se confirma, no se supone.</strong> La tomografia por emision de positrones tiene falsos positivos frecuentes (infeccion, granulomas), de modo que una adenopatia captante NO basta para negarle la cirugia a un paciente: hay que confirmarla con <strong>ecobroncoscopia con puncion</strong> o mediastinoscopia. Es uno de los errores que mas cuesta, porque cambia un tratamiento potencialmente curativo por uno paliativo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema junta dos problemas muy distintos que comparten imagen: el <strong>nodulo pulmonar</strong>, que casi siempre es benigno y cuyo reto es no hacer da&#241;o buscando el cancer que rara vez esta, y el <strong>cancer de pulmon</strong>, que sigue siendo la primera causa de muerte por cancer en el mundo y cuyo reto es el contrario, no llegar tarde. La bisagra entre los dos es la <strong>probabilidad de malignidad</strong>, que se estima con datos del paciente y de la imagen antes de tocar nada.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El nodulo: primero mirar atras.</strong></p>
<p style="margin:0 0 12px;">Antes de aplicar ninguna tabla hay dos gestos que resuelven una parte enorme de los casos: <strong>buscar estudios previos</strong> (un nodulo solido estable 2 a&#241;os ya no necesita nada) y <strong>mirar si mide mas de 30 mm</strong>, porque entonces es una masa y no entra en ningun algoritmo de vigilancia. Solo despues se aplica el seguimiento por tama&#241;o y densidad. Y conviene saber a quien NO se le aplica: menores de 35 a&#241;os, inmunodeprimidos, pacientes con cancer conocido y nodulos hallados en un programa de cribado.</p>
${figBlock('Figura 1', 'Seguimiento del nodulo incidental: solido frente a subsolido', noduloHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La probabilidad de malignidad, antes de decidir nada.</strong></p>
<p style="margin:0 0 12px;">La conducta no depende solo del tama&#241;o sino de la probabilidad global, que combina el paciente (edad, tabaco, cancer previo, enfisema) con el nodulo (tama&#241;o, bordes, localizacion, densidad y sobre todo crecimiento). Tres franjas y tres conductas: vigilar por debajo del 5%, estudiar con positrones y biopsia entre el 5 y el 65%, y resecar o biopsiar directamente por encima del 65%. La franja intermedia es donde se juega el tema, y donde conviene conocer los <strong>limites de la tomografia por emision de positrones</strong>, que falla en lo peque&#241;o, en lo lepidico y en el carcinoide, y da falsos positivos en todo lo inflamatorio.</p>
${figBlock('Figura 2', 'Que sube y que baja la probabilidad de malignidad', riesgoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El cribado, que si funciona.</strong></p>
<p style="margin:0 0 12px;">La tomografia de baja dosis anual <strong>reduce la mortalidad por cancer de pulmon</strong> en la poblacion de riesgo, algo que la radiografia de torax nunca consiguio. Es una de las pocas intervenciones de cribado con reduccion de mortalidad demostrada y sigue infrautilizada. Tiene condiciones: una poblacion definida por edad y carga tabaquica, un programa con seguimiento estructurado, y una conversacion honesta sobre sus da&#241;os, que existen y son sobre todo el sobrediagnostico y las pruebas sobre lesiones benignas.</p>
${figBlock('Figura 3', 'Cribado con tomografia de baja dosis: a quien, hasta cuando y que contar', cribadoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El cancer: dos preguntas que ordenan todo.</strong></p>
<p style="margin:0 0 12px;">Ante un cancer de pulmon confirmado, todo se organiza alrededor de dos preguntas: <strong>que estirpe es</strong> (no microcitico, que es la gran mayoria, o microcitico, que se maneja aparte) y <strong>hasta donde llega</strong>, con la clasificacion TNM en su <strong>novena edicion</strong>, vigente desde 2025, que subdividio el N2 en unico y multiple y el M1c segun afecte a uno o a varios organos. En el estadio IV hay una tercera pregunta que ha cambiado la enfermedad por completo: <strong>que alteracion molecular tiene</strong>.</p>
${figBlock('Figura 4', 'Del estadio al tratamiento, y por que el estudio molecular no es opcional', estadioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No aplicar las guias de Fleischner a un inmunodeprimido, a un paciente con cancer conocido ni a un nodulo de cribado. No poner en vigilancia una masa de mas de 30 mm. No dar por benigna una calcificacion excentrica o punteada. No negarle la cirugia a un paciente por una adenopatia captante en positrones sin confirmarla con puncion. No fiarse de un positrones negativo en una lesion peque&#241;a o en vidrio deslustrado. No empezar tratamiento sistemico en un estadio IV sin el estudio molecular completo. Y no dejar de ofrecer deshabituacion tabaquica ni siquiera al paciente ya diagnosticado, porque mejora la tolerancia al tratamiento y el pronostico.</p>`;

export const bibliografia = [
  'MacMahon H, Naidich DP, Goo JM, et al. Guidelines for management of incidental pulmonary nodules detected on CT images: from the Fleischner Society 2017. Radiology. 2017;284(1):228-243.',
  'Riely GJ, Wood DE, Aisner DL, et al. NCCN clinical practice guidelines in oncology: non-small cell lung cancer, version 4.2026. J Natl Compr Canc Netw. 2026.',
  'US Preventive Services Task Force. Screening for lung cancer: US Preventive Services Task Force recommendation statement. JAMA. 2021;325(10):962-970.',
  'National Lung Screening Trial Research Team. Reduced lung-cancer mortality with low-dose computed tomographic screening. N Engl J Med. 2011;365(5):395-409.',
  'de Koning HJ, van der Aalst CM, de Jong PA, et al. Reduced lung-cancer mortality with volume CT screening in a randomized trial. N Engl J Med. 2020;382(6):503-513.',
  'McWilliams A, Tammemagi MC, Mayo JR, et al. Probability of cancer in pulmonary nodules detected on first screening CT. N Engl J Med. 2013;369(10):910-919.',
  'Gould MK, Donington J, Lynch WR, et al. Evaluation of individuals with pulmonary nodules: when is it lung cancer? Chest. 2013;143(5 Suppl):e93S-e120S.',
  'Rami-Porta R, Nishimura KK, Giroux DJ, et al. The International Association for the Study of Lung Cancer lung cancer staging project: proposals for the revision of the TNM stage groups in the forthcoming ninth edition. J Thorac Oncol. 2024;19(7):1007-1027.',
  'Antonia SJ, Villegas A, Daniel D, et al. Durvalumab after chemoradiotherapy in stage III non-small-cell lung cancer. N Engl J Med. 2017;377(20):1919-1929.',
  'Wu YL, Tsuboi M, He J, et al. Osimertinib in resected EGFR-mutated non-small-cell lung cancer. N Engl J Med. 2020;383(18):1711-1723.',
  'Forde PM, Spicer J, Lu S, et al. Neoadjuvant nivolumab plus chemotherapy in resectable lung cancer. N Engl J Med. 2022;386(21):1973-1985.',
  'Felip E, Altorki N, Zhou C, et al. Adjuvant atezolizumab after adjuvant chemotherapy in resected stage IB-IIIA non-small-cell lung cancer. Lancet. 2021;398(10308):1344-1357.',
  'Temel JS, Greer JA, Muzikansky A, et al. Early palliative care for patients with metastatic non-small-cell lung cancer. N Engl J Med. 2010;363(8):733-742.',
  'Brunelli A, Kim AW, Berger KI, Addrizzo-Harris DJ. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery. Chest. 2013;143(5 Suppl):e166S-e190S.',
  'Silvestri GA, Gonzalez AV, Jantz MA, et al. Methods for staging non-small cell lung cancer. Chest. 2013;143(5 Suppl):e211S-e250S.',
  'Horn L, Mansfield AS, Szczesna A, et al. First-line atezolizumab plus chemotherapy in extensive-stage small-cell lung cancer. N Engl J Med. 2018;379(23):2220-2229.',
  'Dingemans AC, Fruh M, Ardizzoni A, et al. Small-cell lung cancer: ESMO clinical practice guidelines. Ann Oncol. 2021;32(7):839-853.',
  'Pelosof LC, Gerber DE. Paraneoplastic syndromes: an approach to diagnosis and treatment. Mayo Clin Proc. 2010;85(9):838-854.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Nodulo pulmonar incidental',
      tituloB: 'Cancer de pulmon sintomatico',
      compensada: 'ASINTOMATICO por definicion: se encuentra en una tomografia pedida por otro motivo, y su frecuencia ha crecido con el uso de la angiotomografia y de la tomografia abdominal. Lo primero es recuperar estudios previos, porque un nodulo solido estable durante 2 a&#241;os ya no necesita nada mas. La ansiedad que genera el hallazgo es un efecto adverso real que hay que manejar con informacion clara sobre lo que se va a hacer y cuando.',
      descompensada: 'Tos persistente o cambio en el patron de la tos del fumador, hemoptisis, disnea, dolor toracico, neumonias de repeticion en el MISMO lobulo (que sugieren obstruccion bronquial) y sindrome constitucional. Segun la localizacion: disfonia por afectacion del nervio laringeo recurrente, sindrome de vena cava superior, sindrome de Pancoast con dolor de hombro, sindrome de Horner y afectacion del plexo braquial. Y las manifestaciones a distancia: dolor oseo, focalidad neurologica, ictericia o los sindromes paraneoplasicos, que pueden preceder al diagnostico.'
    },
    laboratorio: [
      { prueba: 'Estudio molecular del tumor', utilidad: 'OBLIGATORIO en el cancer no microcitico avanzado ANTES de iniciar tratamiento: EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK y HER2, ademas de la expresion de PD-L1. Se hace preferentemente en panel de secuenciacion masiva sobre tejido, y la biopsia liquida en plasma es una alternativa cuando no hay tejido suficiente o hay que empezar rapido.' },
      { prueba: 'Expresion de PD-L1', utilidad: 'Determina la eleccion entre inmunoterapia sola o combinada con quimioterapia en el tumor sin diana molecular. Se informa como porcentaje de celulas tumorales positivas, y por encima del 50% la inmunoterapia en monoterapia es una opcion de primera linea.' },
      { prueba: 'Sodio, calcio y funcion renal', utilidad: 'Cribado de sindromes paraneoplasicos: hiponatremia por secrecion inadecuada de hormona antidiuretica en el microcitico, e hipercalcemia por peptido relacionado con la parathormona en el escamoso. Ambos pueden ser la primera manifestacion de la enfermedad.' },
      { prueba: 'Perfil hepatico, lactato deshidrogenasa y fosfatasa alcalina', utilidad: 'Orientan hacia afectacion metastasica hepatica u osea. La lactato deshidrogenasa elevada es un marcador pronostico en el microcitico. No sustituyen a la imagen de estadificacion.' },
      { prueba: 'Hemograma y coagulacion', utilidad: 'Anemia de trastorno cronico, leucocitosis o trombocitosis paraneoplasicas. El estado protrombotico del cancer de pulmon es marcado y la enfermedad tromboembolica es una complicacion frecuente que conviene tener presente ante cualquier deterioro brusco.' },
      { prueba: 'Anticuerpos anti-canal de calcio dependiente de voltaje', utilidad: 'Ante debilidad proximal con hiporreflexia que MEJORA con el ejercicio repetido, en la sospecha de sindrome de Lambert-Eaton, que se asocia al carcinoma microcitico y puede preceder al diagnostico del tumor en meses o a&#241;os.' },
      { prueba: 'Citologia de esputo y del liquido pleural', utilidad: 'La citologia de esputo tiene rendimiento bajo salvo en tumores centrales y voluminosos. La del liquido pleural, en cambio, es diagnostica y estadificante a la vez: un derrame maligno confirmado hace la enfermedad irresecable, de modo que puncionarlo puede evitar una toracotomia inutil.' },
      { prueba: 'Marcadores tumorales sericos', utilidad: 'NO tienen papel en el diagnostico ni en el cribado del cancer de pulmon, y pedirlos ante un nodulo genera confusion y ansiedad sin aportar informacion util. Su uso se limita a contextos concretos de seguimiento y de investigacion.' }
    ],
    no_invasivos: [
      { metodo: 'Seguimiento del nodulo segun Fleischner (calculadora disponible)', interpretacion: 'Depende del tama&#241;o, de la densidad (solido o subsolido), del numero y del riesgo del paciente. No se aplica a menores de 35 a&#241;os, inmunodeprimidos, pacientes con cancer conocido ni a nodulos de cribado.', cutoff: 'Solido menor de 6 mm y riesgo bajo: sin seguimiento. Mayor de 8 mm: positrones, biopsia o tomografia a los 3 meses' },
      { metodo: 'Estimacion de la probabilidad de malignidad (calculadora disponible)', interpretacion: 'Combina datos del paciente (edad, tabaco, cancer previo, enfisema, historia familiar) con datos del nodulo (tama&#241;o, bordes, localizacion, densidad, crecimiento). Define tres franjas con tres conductas distintas.', cutoff: 'Menor del 5%: vigilancia. Del 5 al 65%: positrones y valorar biopsia. Mayor del 65%: muestra o reseccion' },
      { metodo: 'Criterios de cribado con tomografia de baja dosis (calculadora disponible)', interpretacion: 'Poblacion definida por edad y carga tabaquica, con tomografia anual y decision compartida sobre sus da&#241;os. Los hallazgos se informan con Lung-RADS y no con Fleischner.', cutoff: 'De 50 a 80 a&#241;os, 20 paquetes-a&#241;o o mas, fumador actual o que lo dejo hace menos de 15 a&#241;os' },
      { metodo: 'Valoracion funcional preoperatoria (calculadora disponible)', interpretacion: 'FEV1 y DLCO predichos posoperatorios calculados a partir del numero de segmentos que se van a resecar. Decide si el paciente puede tolerar la cirugia y si necesita una prueba de esfuerzo.', cutoff: 'Ambos por encima del 60%: riesgo bajo. Alguno por debajo del 30%: riesgo alto' },
      { metodo: 'Estadificacion TNM en su novena edicion', interpretacion: 'Vigente desde 2025. Subdividio el N2 en N2a (una sola estacion) y N2b (varias estaciones), y el M1c segun afecte a uno o a varios organos extratoracicos, con reagrupacion de estadios.', cutoff: 'Sin umbral unico; la estadificacion determina el tratamiento y el pronostico' },
      { metodo: 'Escala funcional del Eastern Cooperative Oncology Group', interpretacion: 'De 0 (actividad normal) a 4 (encamado). Es uno de los determinantes mas potentes de la tolerancia al tratamiento y del pronostico, por encima incluso de algunas variables tumorales.', cutoff: 'Estado funcional de 3 o 4: la mayoria de los tratamientos sistemicos aportan mas da&#241;o que beneficio' },
      { metodo: 'Prueba de esfuerzo cardiopulmonar', interpretacion: 'En el paciente con funcion predicha posoperatoria en zona intermedia. Mide el consumo maximo de oxigeno, que integra la reserva cardiaca, pulmonar y muscular mejor que cualquier parametro aislado.', cutoff: 'Consumo maximo de oxigeno mayor de 20 mL/kg/min: se puede resecar hasta neumonectomia. Menor de 10: riesgo muy alto' }
    ],
    imagen: [
      { modalidad: 'Tomografia de torax', hallazgos: 'Prueba central. Define tama&#241;o, densidad (solido, parcialmente solido o vidrio puro), bordes, calcificacion, grasa y localizacion, y permite comparar con estudios previos, que es el gesto que mas casos resuelve. La reconstruccion volumetrica detecta crecimientos que la medida en un solo plano no ve.' },
      { modalidad: 'Tomografia por emision de positrones con fluorodesoxiglucosa', hallazgos: 'Caracteriza el nodulo mayor de 8 a 10 mm y, sobre todo, ESTADIFICA: detecta afectacion ganglionar y metastasis a distancia insospechadas. Falsos negativos en lesiones peque&#241;as, en el adenocarcinoma lepidico y en el carcinoide; falsos positivos en infeccion y granulomas, de modo que una adenopatia captante debe confirmarse con puncion.' },
      { modalidad: 'Resonancia magnetica cerebral', hallazgos: 'Estadificacion del sistema nervioso central, obligada en el microcitico y en el no microcitico a partir del estadio II o ante cualquier sintoma neurologico. Es mas sensible que la tomografia craneal y detecta metastasis asintomaticas que cambian el tratamiento.' },
      { modalidad: 'Ecobroncoscopia con puncion', hallazgos: 'Prueba de eleccion para la estadificacion ganglionar mediastinica: obtiene muestra de las estaciones accesibles con menos riesgo que la mediastinoscopia. Confirma o descarta lo que sugiere el positrones, y esa confirmacion es lo que decide si el paciente es candidato a cirugia.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El tema tiene dos sistemas de clasificacion que no se mezclan. Para el <strong>nodulo</strong>, la clasificacion es por <strong>densidad</strong> (solido, parcialmente solido y vidrio deslustrado puro) y por <strong>tama&#241;o</strong>, y de ahi salen las recomendaciones de seguimiento; a ello se superpone la <strong>probabilidad de malignidad</strong>, que integra paciente e imagen. Para el <strong>cancer</strong>, la clasificacion es <strong>histologica</strong> (no microcitico frente a microcitico, y dentro del primero adenocarcinoma, escamoso y de celulas grandes), <strong>molecular</strong> (que en el estadio IV es tan determinante como la histologia) y <strong>anatomica</strong> con el sistema TNM, hoy en su novena edicion.`,
    escalas: [
      { nombre: 'Guias de Fleischner para el nodulo incidental (calculadora disponible)', componentes: 'Densidad (solido o subsolido), tama&#241;o medio, numero de nodulos y riesgo del paciente.', formula: 'Recomendaciones categoricas de seguimiento por tomografia, con intervalos distintos para el solido y el subsolido.', interpretacion: 'El subsolido se sigue hasta 5 a&#241;os porque las lesiones de la via adenocarcinomatosa crecen muy despacio. NO se aplican a menores de 35 a&#241;os, inmunodeprimidos, pacientes con cancer conocido ni a nodulos detectados en cribado, que se informan con Lung-RADS.' },
      { nombre: 'Probabilidad de malignidad del nodulo (calculadora disponible)', componentes: 'Edad, tabaquismo, antecedente de cancer, enfisema o fibrosis, historia familiar; y del nodulo: tama&#241;o, espiculacion, localizacion en lobulo superior, densidad y crecimiento.', formula: 'Estimacion clinica apoyada en modelos publicados, expresada en tres franjas de probabilidad.', interpretacion: 'Menor del 5%: vigilancia. Del 5 al 65%: tomografia por emision de positrones y valorar biopsia. Mayor del 65%: toma de muestra o reseccion directa en el paciente operable. Es la estimacion que ordena toda la conducta, por encima del tama&#241;o aislado.' },
      { nombre: 'Criterios de cribado con tomografia de baja dosis (calculadora disponible)', componentes: 'Edad, carga tabaquica en paquetes-a&#241;o, condicion de fumador actual o exfumador y a&#241;os desde el abandono, mas la expectativa de vida y la capacidad de tolerar un tratamiento curativo.', formula: 'Criterios categoricos: de 50 a 80 a&#241;os, 20 paquetes-a&#241;o o mas, fumador actual o que lo dejo hace menos de 15 a&#241;os.', interpretacion: 'Tomografia de baja dosis ANUAL, dentro de un programa con seguimiento estructurado y decision compartida. Se deja de cribar al cumplir 15 a&#241;os sin fumar o cuando aparece una condicion que impediria un tratamiento curativo.' },
      { nombre: 'Clasificacion TNM, novena edicion', componentes: 'Tama&#241;o e invasion del tumor (T), afectacion ganglionar (N) y metastasis a distancia (M).', formula: 'Vigente desde 2025. Subdivide el N2 en N2a (una sola estacion mediastinica) y N2b (varias estaciones), y el M1c segun las metastasis afecten a un solo organo extratoracico o a varios, con reagrupacion de los estadios.', interpretacion: 'Determina el tratamiento: estadios I y II quirurgicos, III multimodal con quimiorradioterapia y consolidacion, y IV sistemico guiado por el perfil molecular. La afectacion ganglionar mediastinica debe CONFIRMARSE con puncion y no suponerse por el positrones.' },
      { nombre: 'Valoracion funcional preoperatoria (calculadora disponible)', componentes: 'FEV1 y DLCO en porcentaje del predicho, y numero de segmentos funcionantes que se van a resecar.', formula: 'Valor predicho posoperatorio = valor preoperatorio por (segmentos funcionantes restantes dividido entre 19).', interpretacion: 'Ambos valores por encima del 60%: riesgo bajo, se puede operar. Entre el 30 y el 60%: prueba de esfuerzo cardiopulmonar. Alguno por debajo del 30%: riesgo alto, valorar cirugia menor, radioterapia estereotactica o tratamiento no quirurgico.' },
      { nombre: 'Clasificacion histologica', componentes: 'Estirpe tumoral en la muestra histologica o citologica, con inmunohistoquimica.', formula: 'No microcitico (adenocarcinoma, escamoso, de celulas grandes) frente a microcitico. El adenocarcinoma es hoy el mas frecuente, incluido en no fumadores.', interpretacion: 'Separa dos enfermedades con manejo distinto. El microcitico crece rapido, disemina pronto, responde muy bien al principio y recae; rara vez es quirurgico. El no microcitico se estadifica y se trata segun estadio y perfil molecular.' },
      { nombre: 'Estadificacion del carcinoma microcitico', componentes: 'Extension de la enfermedad y posibilidad de incluirla en un campo de radioterapia tolerable.', formula: 'Enfermedad LIMITADA (confinada a un hemitorax y abarcable en un campo de radioterapia) frente a EXTENDIDA.', interpretacion: 'La division clasica sigue usandose en la practica junto con el TNM. La limitada se trata con quimioterapia y radioterapia toracica concurrentes con intencion curativa; la extendida, con quimioterapia e inmunoterapia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Nodulo pulmonar solitario',
      color: '#8c5a2e',
      definicion: 'Opacidad pulmonar unica de 30 mm o menos, redondeada u ovalada, rodeada de parenquima aireado y sin atelectasia, adenopatias ni derrame asociados. Por encima de 30 mm se denomina masa y se maneja como un cancer hasta que se demuestre lo contrario.',
      fisiopatologia: 'No hay una fisiopatologia unica: el nodulo es un hallazgo morfologico compartido por decenas de procesos. Los benignos mas frecuentes son el granuloma (residual de tuberculosis o de micosis), el hamartoma y el ganglio intrapulmonar, que es una causa muy comun de nodulo peque&#241;o, perifisurario y triangular. Entre los malignos, el adenocarcinoma es el que mas se presenta como nodulo periferico, y la metastasis unica es posible pero menos frecuente que la lesion primaria.',
      epidemiologia: 'Su frecuencia ha crecido de forma espectacular con el uso de la tomografia: se detecta algun nodulo en una proporcion muy alta de las tomografias toracicas y en la mayoria de las de cribado. La inmensa mayoria son benignos, sobre todo los menores de 6 mm, cuya probabilidad de malignidad en un paciente de bajo riesgo es inferior al 1%.',
      factores_riesgo: ['Edad avanzada', 'Tabaquismo actual o pasado, con relacion dosis-respuesta', 'Antecedente personal de otro cancer', 'Enfisema y EPOC', 'Fibrosis pulmonar', 'Exposicion a asbesto, radon, silice y arsenico', 'Historia familiar de cancer de pulmon', 'Tama&#241;o mayor del nodulo', 'Bordes espiculados y localizacion en lobulo superior', 'Componente solido en un nodulo subsolido'],
      clinica: 'ASINTOMATICO por definicion. Se descubre en una prueba pedida por otro motivo, y esa es su caracteristica esencial: el paciente no consulta por el. La ansiedad que genera el hallazgo es un efecto adverso real, y se maneja explicando desde el principio que la mayoria son benignos y cual va a ser el plan.',
      criterios_dx: 'El objetivo no es diagnosticar sino estimar la PROBABILIDAD de malignidad y decidir entre vigilar, estudiar o resecar. El primer paso, antes de cualquier tabla, es buscar estudios previos: la estabilidad de 2 a&#241;os en el solido, o de 5 en el subsolido, resuelve el caso. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'Ninguno de rutina. Los marcadores tumorales NO tienen papel y su uso ante un nodulo genera confusion y ansiedad sin aportar nada. Segun el contexto epidemiologico, valorar estudio de tuberculosis o de micosis endemicas.',
      imagen: 'Tomografia de torax con cortes finos y reconstruccion volumetrica, que detecta crecimientos que la medida en un plano no ve. Tomografia por emision de positrones en el nodulo mayor de 8 a 10 mm con probabilidad intermedia. Comparacion sistematica con estudios previos.',
      complementarios: 'Broncoscopia con tecnicas de navegacion o radial en las lesiones centrales o accesibles; puncion transtoracica guiada por tomografia en las perifericas, con riesgo de neumotorax que hay que anticipar; y reseccion por videotoracoscopia como opcion diagnostica y terapeutica en una sola intervencion cuando la probabilidad es alta.',
      dx_diferencial: 'Granuloma residual (tuberculosis, histoplasmosis, coccidioidomicosis), hamartoma (con grasa o calcificacion en palomita de maiz), ganglio intrapulmonar, malformacion arteriovenosa, nodulo reumatoide, granulomatosis con poliangeitis, aspergiloma, atelectasia redonda en el expuesto a asbesto, infarto pulmonar y metastasis unica.',
      tx_medico: 'Abandono del tabaco, que reduce el riesgo futuro y mejora cualquier escenario posterior. Informacion clara sobre el plan de seguimiento y sobre lo que se busca, que es lo que reduce la ansiedad asociada al hallazgo.',
      tx_farmacologico: 'No aplica salvo que se identifique una causa infecciosa o inflamatoria concreta.',
      tx_intervencionista: 'Biopsia o reseccion segun la probabilidad y la operabilidad. La eleccion entre broncoscopia, puncion transtoracica y cirugia depende de la localizacion, del tama&#241;o, del riesgo del procedimiento y de si un resultado negativo va a cambiar realmente la conducta.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica salvo complicacion de un procedimiento, sobre todo el neumotorax tras la puncion transtoracica.',
      seguimiento_ambulatorio: 'Segun el algoritmo por densidad y tama&#241;o. Es imprescindible que el seguimiento quede REGISTRADO y con cita cerrada: el nodulo perdido en el seguimiento, encontrado a&#241;os despues convertido en un cancer avanzado, es uno de los fallos de sistema mas frecuentes y mas evitables.',
      pronostico: 'Excelente en la gran mayoria. La clave no es diagnosticar todos los canceres cuanto antes, sino no da&#241;ar a la mayoria benigna con pruebas y cirugias innecesarias mientras se detecta la minoria maligna a tiempo.',
      algoritmo: ['Buscar estudios previos: la estabilidad resuelve el caso', 'Comprobar que mide 30 mm o menos; si no, es una masa y se estudia como cancer', 'Comprobar que el paciente entra en el ambito de Fleischner', 'Clasificar por densidad: solido, parcialmente solido o vidrio puro', 'Medir el diametro medio y contar los nodulos', 'Estimar la probabilidad de malignidad con datos del paciente y del nodulo', 'Probabilidad baja: vigilancia por tomografia segun el algoritmo', 'Probabilidad intermedia: positrones y valorar biopsia', 'Probabilidad alta: toma de muestra o reseccion en el paciente operable', 'Dejar el seguimiento REGISTRADO y con cita cerrada']
    },
    {
      nombre: 'Cancer de pulmon no microcitico: diagnostico y estadificacion',
      color: '#8c3a34',
      definicion: 'Neoplasia maligna de origen epitelial pulmonar que agrupa el adenocarcinoma, el carcinoma escamoso y el de celulas grandes, y que representa alrededor del 85% de los canceres de pulmon.',
      fisiopatologia: 'La exposicion cronica a carcinogenos del humo del tabaco produce acumulacion de mutaciones en el epitelio bronquial y alveolar. En el escamoso, el proceso sigue la secuencia metaplasia, displasia y carcinoma in situ en la via aerea central. En el adenocarcinoma, que puede aparecer en no fumadores, predominan alteraciones en genes conductores concretos (EGFR, ALK, ROS1, KRAS, BRAF) que actuan como interruptores de la proliferacion, y por eso ese subgrupo responde de forma espectacular a los inhibidores dirigidos. Esa dependencia de una sola via es lo que hace del estudio molecular una parte del diagnostico y no un complemento.',
      epidemiologia: 'Primera causa de muerte por cancer en el mundo. El adenocarcinoma ha desplazado al escamoso como estirpe mas frecuente, en parte por los cambios en el tabaco y en parte por el aumento de casos en no fumadores, sobre todo mujeres, en los que las alteraciones moleculares diana son mucho mas frecuentes. La mayoria de los casos se diagnostican en estadio avanzado.',
      factores_riesgo: ['Tabaquismo, responsable de la gran mayoria de los casos', 'Exposicion pasiva al humo del tabaco', 'Radon en el domicilio', 'Asbesto, con efecto multiplicativo junto al tabaco', 'Silice, arsenico, cromo, niquel y hidrocarburos aromaticos', 'Contaminacion atmosferica', 'EPOC y fibrosis pulmonar, con riesgo independiente del tabaco', 'Antecedente familiar de cancer de pulmon', 'Radioterapia toracica previa', 'Infeccion por VIH'],
      clinica: 'Tos persistente o cambio en la tos habitual del fumador, hemoptisis, disnea, dolor toracico, neumonias de repeticion en el mismo lobulo y sindrome constitucional. Manifestaciones locorregionales: disfonia, sindrome de vena cava superior, sindrome de Pancoast. Y a distancia: dolor oseo, focalidad neurologica, adenopatias supraclaviculares y sindromes paraneoplasicos.',
      criterios_dx: 'Confirmacion HISTOLOGICA o citologica, obtenida por la via de menor riesgo que ademas aporte el estadio mas alto. Si hay derrame pleural o adenopatia supraclavicular, puncionarlos primero: diagnostica y estadifica en un solo gesto. Ver la Figura 4 de Definicion.',
      laboratorio: 'Estudio molecular completo y expresion de PD-L1 en la enfermedad avanzada. Bioquimica con sodio, calcio, funcion renal y hepatica y lactato deshidrogenasa. Hemograma y coagulacion.',
      imagen: 'Tomografia de torax y abdomen superior con contraste, tomografia por emision de positrones para la estadificacion y resonancia cerebral a partir del estadio II o ante sintomas. Gammagrafia osea solo si no se ha hecho positrones.',
      complementarios: 'ECOBRONCOSCOPIA CON PUNCION para confirmar la afectacion ganglionar mediastinica, que no debe suponerse por el positrones. Mediastinoscopia si la ecobroncoscopia no es concluyente y el resultado va a cambiar la conducta. Valoracion funcional preoperatoria en el candidato a cirugia.',
      dx_diferencial: 'Tuberculosis y micosis, linfoma, tumor carcinoide, metastasis de otro primario, neumonia organizada, granulomatosis con poliangeitis y sarcoidosis con adenopatias, que puede imitar exactamente una estadificacion ganglionar avanzada en el positrones.',
      tx_medico: 'Abandono del tabaco tambien tras el diagnostico, porque mejora la tolerancia al tratamiento, reduce las complicaciones quirurgicas y mejora la supervivencia. Soporte nutricional, control del dolor y CUIDADOS PALIATIVOS PRECOCES, que en el estadio IV mejoran la calidad de vida y en un ensayo clasico tambien la supervivencia.',
      tx_farmacologico: 'Depende del estadio y del perfil molecular; se detalla en la ficha de tratamiento. La regla que no se negocia es que en el estadio IV no se empieza ningun tratamiento sistemico sin el estudio molecular completo y la expresion de PD-L1.',
      tx_intervencionista: 'La estadificacion invasiva forma parte del diagnostico. La toracocentesis del derrame acompa&#241;ante es prioritaria porque un derrame maligno confirmado cambia el estadio y evita una cirugia inutil.',
      criterios_uci: 'Complicaciones agudas: sindrome de vena cava superior con edema laringeo, hemoptisis amenazante, obstruccion de la via aerea central y neumonitis grave por inmunoterapia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica: el cancer activo es contraindicacion de trasplante pulmonar.',
      seguimiento_hospitalario: 'Coordinacion con oncologia, cirugia toracica, radioterapia y anatomia patologica en COMITE DE TUMORES, que es donde debe decidirse el plan. Control del dolor y de los sintomas desde el ingreso.',
      seguimiento_ambulatorio: 'Segun el plan del comite. Vigilancia de la toxicidad del tratamiento, con atencion especial a la toxicidad inmunomediada, que puede afectar a cualquier organo y aparecer meses despues de iniciar el farmaco.',
      pronostico: 'Muy dependiente del estadio: la supervivencia a 5 a&#241;os pasa de superar el 70% en el estadio I a ser de meses en el IV sin diana molecular. La aparicion de los inhibidores dirigidos y de la inmunoterapia ha cambiado de forma sustancial el pronostico de subgrupos concretos del estadio IV.',
      algoritmo: ['Confirmar histologia por la via de menor riesgo y mayor rendimiento estadificante', 'Si hay derrame o adenopatia supraclavicular, puncionarlos primero', 'Tomografia de torax y abdomen con contraste', 'Tomografia por emision de positrones para la estadificacion', 'Resonancia cerebral a partir del estadio II o ante sintomas', 'CONFIRMAR la afectacion mediastinica con ecobroncoscopia, no suponerla', 'Estudio molecular y PD-L1 en la enfermedad avanzada', 'Valoracion funcional preoperatoria en el candidato a cirugia', 'Llevar el caso al comite de tumores', 'Ofrecer deshabituacion tabaquica y cuidados paliativos precoces']
    },
    {
      nombre: 'Cancer de pulmon no microcitico: tratamiento por estadio',
      color: '#3f6b52',
      definicion: 'Estrategia terapeutica organizada por estadio TNM y, en la enfermedad avanzada, por perfil molecular y expresion de PD-L1.',
      fisiopatologia: 'La logica del tratamiento sigue la biologia. En la enfermedad localizada, el objetivo es la extirpacion completa con margenes y la eliminacion de la enfermedad microscopica residual mediante tratamiento perioperatorio. En la locorregional, se combina el control local con el sistemico. Y en la metastasica, el tratamiento es sistemico y su eleccion depende de si el tumor depende de una via de se&#241;alizacion concreta (que se puede bloquear) o de si expresa marcadores que predicen respuesta a la reactivacion inmunitaria.',
      epidemiologia: 'La mayoria de los pacientes se diagnostican en estadio avanzado, lo que explica la mortalidad global de la enfermedad. En la ultima decada, los tratamientos perioperatorios y la consolidacion tras la quimiorradioterapia han mejorado los resultados de los estadios potencialmente curables.',
      factores_riesgo: ['Estadio avanzado al diagnostico', 'Mal estado funcional', 'Perdida de peso significativa', 'Comorbilidad cardiopulmonar que limita el tratamiento', 'Ausencia de alteracion molecular diana en el estadio IV', 'Expresion baja de PD-L1 en el tumor sin diana', 'Metastasis cerebrales o hepaticas', 'Tabaquismo activo durante el tratamiento', 'Retraso entre el diagnostico y el inicio del tratamiento', 'Falta de valoracion en comite multidisciplinar'],
      clinica: 'La del tumor y la de la toxicidad del tratamiento. Merece atencion especial la toxicidad inmunomediada, que puede afectar a cualquier organo (colitis, hepatitis, tiroiditis, hipofisitis, neumonitis, miocarditis) y aparecer meses despues del inicio, incluso tras suspenderlo.',
      criterios_dx: 'No aplica: es la fase terapeutica. La decision se toma en comite de tumores con la histologia, el estadio, el perfil molecular, la funcion y las preferencias del paciente.',
      laboratorio: 'Estudio molecular y PD-L1 antes de iniciar el tratamiento sistemico. Funcion tiroidea, hepatica, renal y glucemia basales y periodicas si se usa inmunoterapia. Hemograma y funcion renal para la quimioterapia.',
      imagen: 'Tomografia de reevaluacion segun el esquema. Resonancia cerebral de control en los tumores con alteraciones diana, que tienen alta incidencia de metastasis cerebrales. Atencion al fenomeno de pseudoprogresion con inmunoterapia.',
      complementarios: 'Valoracion funcional y cardiologica previa a la cirugia o a la radioterapia toracica. Registro de la toxicidad y educacion del paciente para consultar precozmente ante sintomas nuevos bajo inmunoterapia.',
      dx_diferencial: 'Ante un deterioro durante el tratamiento, separar progresion tumoral de toxicidad (neumonitis por inmunoterapia o por radioterapia), infeccion oportunista, enfermedad tromboembolica y pseudoprogresion.',
      tx_medico: 'Deshabituacion tabaquica, soporte nutricional, rehabilitacion, control del dolor y cuidados paliativos precoces integrados desde el diagnostico en la enfermedad avanzada. Profilaxis y tratamiento de las complicaciones oseas con agentes antirresortivos si hay metastasis.',
      tx_farmacologico: 'ESTADIOS I y II: quimioterapia adyuvante desde el IB de alto riesgo, con osimertinib adyuvante si hay mutacion de EGFR e inmunoterapia adyuvante segun PD-L1; la quimioinmunoterapia neoadyuvante se ha incorporado en el tumor resecable. ESTADIO III irresecable: quimiorradioterapia concurrente seguida de DURVALUMAB de consolidacion. ESTADIO IV: con diana molecular, inhibidor especifico de EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK o HER2; sin diana, inmunoterapia sola si la expresion de PD-L1 es alta, o combinada con quimioterapia en el resto.',
      tx_intervencionista: 'Lobectomia con diseccion ganglionar mediastinica como cirugia estandar, con segmentectomia en tumores perifericos peque&#241;os seleccionados. Radioterapia estereotactica corporal en el estadio I no operable, con resultados muy buenos. Radioterapia paliativa para el dolor oseo, la compresion medular y la hemoptisis. Broncoscopia intervencionista para la obstruccion de la via aerea central.',
      criterios_uci: 'Toxicidad grave por inmunoterapia (sobre todo neumonitis y miocarditis), complicaciones posquirurgicas y complicaciones locorregionales agudas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante deterioro bajo inmunoterapia, pensar SIEMPRE en toxicidad inmunomediada: se trata con corticoide a dosis altas y, si no responde, con inmunosupresores, y se hace en paralelo al descarte de infeccion.',
      seguimiento_ambulatorio: 'Seguimiento estructurado con imagen periodica. Vigilancia de toxicidad tardia. Rehabilitacion y apoyo psicologico. Cribado de un segundo primario, cuyo riesgo persiste en el superviviente.',
      pronostico: 'Ha mejorado de forma sustancial en subgrupos concretos: la supervivencia del estadio III irresecable cambio con la consolidacion, y la del estadio IV con diana molecular se mide hoy en a&#241;os. El estado funcional del paciente sigue siendo uno de los determinantes mas potentes.',
      algoritmo: ['Llevar todo caso al comite de tumores', 'Estadios I y II: cirugia si es operable, radioterapia estereotactica si no', 'A&#241;adir tratamiento perioperatorio segun estadio, EGFR y PD-L1', 'Estadio III irresecable: quimiorradioterapia concurrente', 'Consolidar con durvalumab tras la quimiorradioterapia', 'Estadio IV: NO tratar sin estudio molecular y PD-L1', 'Con diana molecular: inhibidor especifico de primera linea', 'Sin diana: inmunoterapia sola o con quimioterapia segun PD-L1', 'Cuidados paliativos precoces integrados desde el diagnostico', 'Ante deterioro bajo inmunoterapia, pensar en toxicidad inmunomediada']
    },
    {
      nombre: 'Cancer de pulmon microcitico',
      color: '#5b4a86',
      definicion: 'Tumor neuroendocrino de alto grado que representa alrededor del 15% de los canceres de pulmon, de crecimiento muy rapido, diseminacion precoz y estrecha asociacion con el tabaco.',
      fisiopatologia: 'Es un tumor neuroendocrino con inactivacion casi universal de los genes supresores TP53 y RB1, sin alteraciones diana accionables como las del adenocarcinoma. Su altisima tasa de proliferacion explica sus dos caracteristicas clinicas: responde de forma espectacular a la quimioterapia y a la radioterapia al principio, y recae pronto con clones resistentes. Su origen neuroendocrino explica ademas la frecuencia de los sindromes paraneoplasicos endocrinos y neurologicos.',
      epidemiologia: 'Practicamente exclusivo de fumadores. La mayoria de los pacientes se presentan con enfermedad extendida. Es el tumor con mayor tendencia a producir sindromes paraneoplasicos, que en ocasiones preceden en meses al diagnostico.',
      factores_riesgo: ['Tabaquismo intenso y prolongado, presente en casi todos los casos', 'Exposicion a radon', 'Exposicion ocupacional a asbesto y arsenico', 'Edad avanzada', 'EPOC asociada', 'Exposicion pasiva al humo del tabaco', 'Radioterapia toracica previa', 'Sexo masculino, aunque la diferencia se ha reducido', 'Antecedente familiar de cancer de pulmon', 'Contaminacion atmosferica'],
      clinica: 'Cuadro de instauracion RAPIDA, de semanas: tos, disnea, dolor toracico y sindrome constitucional marcado. Muy frecuentes las manifestaciones por masa central: sindrome de vena cava superior, disfonia y obstruccion bronquial. Y los sindromes paraneoplasicos: secrecion inadecuada de hormona antidiuretica con hiponatremia, sindrome de Cushing ectopico, sindrome de Lambert-Eaton y encefalitis limbica.',
      criterios_dx: 'Histologia con morfologia de celula peque&#241;a e inmunohistoquimica neuroendocrina. La estadificacion combina el TNM con la division clasica en enfermedad LIMITADA (abarcable en un campo de radioterapia tolerable) y EXTENDIDA, que sigue guiando la practica.',
      laboratorio: 'Sodio (hiponatremia por secrecion inadecuada de hormona antidiuretica), potasio y cortisol si se sospecha Cushing ectopico, lactato deshidrogenasa como marcador pronostico, y funcion hepatica y renal. Anticuerpos onconeuronales si hay sindrome neurologico.',
      imagen: 'Tomografia de torax y abdomen con contraste, tomografia por emision de positrones y RESONANCIA CEREBRAL, que es obligatoria en todos por la alta frecuencia de metastasis cerebrales, con frecuencia asintomaticas.',
      complementarios: 'Confirmacion histologica rapida, porque el tumor crece en semanas y el retraso cambia el pronostico. Valoracion urgente si hay sindrome de vena cava superior u obstruccion de la via aerea.',
      dx_diferencial: 'Otros tumores neuroendocrinos (carcinoide tipico y atipico, carcinoma neuroendocrino de celulas grandes), linfoma, carcinoma no microcitico poco diferenciado y timoma en la masa mediastinica.',
      tx_medico: 'Abandono del tabaco, soporte nutricional, control de sintomas y cuidados paliativos integrados. Correccion de la hiponatremia con restriccion hidrica y, si procede, antagonista del receptor de vasopresina, sabiendo que el mejor tratamiento de la secrecion inadecuada paraneoplasica es tratar el tumor.',
      tx_farmacologico: 'ENFERMEDAD LIMITADA: quimioterapia con platino y etoposido CONCURRENTE con radioterapia toracica, iniciada pronto. ENFERMEDAD EXTENDIDA: platino, etoposido e INMUNOTERAPIA, que mejoro la supervivencia frente a la quimioterapia sola. En la recaida, el tratamiento depende del intervalo libre y del estado funcional.',
      tx_intervencionista: 'La cirugia es excepcional y se limita al nodulo unico sin afectacion ganglionar, siempre con tratamiento sistemico posterior. Radioterapia toracica de consolidacion en la enfermedad extendida que responde. IRRADIACION CRANEAL PROFILACTICA o, como alternativa, vigilancia con resonancias seriadas en los pacientes que responden.',
      criterios_uci: 'Sindrome de vena cava superior con compromiso de la via aerea, obstruccion bronquial central, hiponatremia grave sintomatica y complicaciones del tratamiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Inicio rapido del tratamiento, que en este tumor es una urgencia relativa. Vigilancia de la hiponatremia, del sindrome de lisis tumoral en los tumores voluminosos y de la neutropenia febril.',
      seguimiento_ambulatorio: 'Reevaluacion frecuente por la alta tasa de recaida. Vigilancia neurologica y de los sindromes paraneoplasicos, que pueden persistir o reaparecer.',
      pronostico: 'Malo pese a la respuesta inicial. La enfermedad limitada tiene una minoria de largos supervivientes con el tratamiento combinado; la extendida se mide en meses, con mejoria modesta pero real desde la incorporacion de la inmunoterapia.',
      algoritmo: ['Sospechar ante masa central de crecimiento rapido en un fumador', 'Confirmar histologia SIN demora: el tumor crece en semanas', 'Estadificar con tomografia, positrones y resonancia cerebral en todos', 'Clasificar en enfermedad limitada o extendida', 'Buscar sindromes paraneoplasicos: sodio, cortisol, clinica neurologica', 'Limitada: quimioterapia con platino y etoposido concurrente con radioterapia', 'Extendida: platino, etoposido e inmunoterapia', 'Valorar radioterapia toracica de consolidacion si responde', 'Irradiacion craneal profilactica o resonancias de vigilancia', 'Cuidados paliativos integrados desde el diagnostico']
    },
    {
      nombre: 'Sindromes paraneoplasicos y complicaciones locorregionales',
      color: '#7a2f5c',
      definicion: 'Manifestaciones a distancia mediadas por sustancias o por autoinmunidad producidas por el tumor, y complicaciones derivadas del crecimiento local: sindrome de vena cava superior, tumor del sulcus superior y derrame pleural maligno.',
      fisiopatologia: 'Los sindromes paraneoplasicos endocrinos se deben a la produccion ectopica de hormonas por el tumor: vasopresina en el microcitico (hiponatremia), corticotropina (Cushing ectopico) y peptido relacionado con la parathormona en el escamoso (hipercalcemia). Los neurologicos son autoinmunes: anticuerpos dirigidos contra antigenos tumorales que reaccionan de forma cruzada con el sistema nervioso, como en el Lambert-Eaton (contra el canal de calcio dependiente de voltaje) y en la encefalitis limbica. Las complicaciones locorregionales son puramente mecanicas: compresion de la cava, invasion del plexo braquial y de la cadena simpatica, o siembra pleural.',
      epidemiologia: 'El microcitico es el que mas sindromes paraneoplasicos produce, y estos pueden preceder al diagnostico del tumor en meses. La hipercalcemia es tipica del escamoso, y las acropaquias con osteoartropatia hipertrofica, del adenocarcinoma. El sindrome de vena cava superior tiene hoy en el cancer de pulmon su causa mas frecuente.',
      factores_riesgo: ['Carcinoma microcitico para los sindromes endocrinos y neurologicos', 'Carcinoma escamoso para la hipercalcemia', 'Adenocarcinoma para la osteoartropatia hipertrofica', 'Tumor central voluminoso para el sindrome de vena cava superior', 'Cateter venoso central o electrodo de marcapasos, que a&#241;aden trombosis', 'Localizacion en el vertice pulmonar para el sindrome de Pancoast', 'Afectacion pleural para el derrame maligno', 'Enfermedad avanzada en general', 'Tabaquismo intenso', 'Retraso diagnostico'],
      clinica: 'Hiponatremia con nauseas, confusion o convulsiones. Hipercalcemia con poliuria, estre&#241;imiento, confusion y deshidratacion. Debilidad proximal con hiporreflexia que MEJORA con el ejercicio repetido en el Lambert-Eaton, al reves que la miastenia. Sindrome de Pancoast: dolor de hombro y de brazo con Horner (ptosis, miosis y anhidrosis) y debilidad de la mano. Sindrome de vena cava superior: edema en esclavina, ingurgitacion yugular y circulacion colateral toracica, que empeoran al inclinarse.',
      criterios_dx: 'Cada sindrome tiene los suyos. Lo importante en la practica es reconocerlos como pista de un tumor no diagnosticado: una hiponatremia hipoosmolar con orina concentrada en un fumador, o una debilidad proximal que mejora con el ejercicio, obligan a buscar un carcinoma microcitico.',
      laboratorio: 'Sodio y osmolalidades plasmatica y urinaria, calcio corregido con parathormona y peptido relacionado con la parathormona, cortisol y corticotropina. Anticuerpos anti-canal de calcio dependiente de voltaje y panel onconeuronal segun el cuadro neurologico.',
      imagen: 'Tomografia de torax con contraste, que en el sindrome de vena cava superior define la causa (compresion, invasion o trombosis) y guia el tratamiento. Resonancia para el sulcus superior, que valora la invasion del plexo, de los vasos subclavios y del cuerpo vertebral. Ecografia y toracocentesis en el derrame.',
      complementarios: 'Toracocentesis diagnostica en todo derrame acompa&#241;ante: su confirmacion como maligno cambia el estadio y evita cirugias inutiles. Valoracion urgente por radioterapia y por radiologia intervencionista en el sindrome de vena cava superior sintomatico.',
      dx_diferencial: 'Hiponatremia de otras causas (diureticos, insuficiencia suprarrenal, hipotiroidismo), hipercalcemia por metastasis oseas o por hiperparatiroidismo primario, miastenia gravis frente a Lambert-Eaton, y en el sindrome de vena cava superior, el linfoma, el timoma, la fibrosis mediastinica y la trombosis asociada a cateter.',
      tx_medico: 'El tratamiento de fondo es TRATAR EL TUMOR, que es lo que resuelve la mayoria de los sindromes paraneoplasicos. Mientras tanto: restriccion hidrica y correccion prudente en la hiponatremia; hidratacion intensa y bisfosfonato o denosumab en la hipercalcemia; y elevacion del cabecero, corticoide y oxigeno en el sindrome de vena cava superior.',
      tx_farmacologico: 'Antagonistas del receptor de vasopresina en la secrecion inadecuada refractaria. Bisfosfonatos o denosumab en la hipercalcemia. Corticoide e inmunoglobulinas o inmunosupresores en los sindromes neurologicos, con la advertencia de que estos responden peor y pueden dejar secuelas aunque el tumor se controle. Anticoagulacion si hay trombosis asociada a la cava.',
      tx_intervencionista: 'ENDOPROTESIS VASCULAR en el sindrome de vena cava superior sintomatico, que alivia en horas y hoy suele preferirse como primera medida en el paciente muy sintomatico. Radioterapia como alternativa o complemento. En el tumor del sulcus superior, quimiorradioterapia seguida de cirugia en el candidato adecuado. Cateter pleural permanente o pleurodesis en el derrame maligno recurrente.',
      criterios_uci: 'Sindrome de vena cava superior con edema laringeo o cerebral, hiponatremia grave sintomatica, hipercalcemia con alteracion del nivel de conciencia y obstruccion de la via aerea central.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Correccion controlada de la hiponatremia respetando los limites de velocidad para evitar la desmielinizacion osmotica. Vigilancia neurologica y del estado de hidratacion en la hipercalcemia.',
      seguimiento_ambulatorio: 'Los sindromes endocrinos suelen mejorar con el control del tumor y reaparecer con la recaida, lo que los convierte en un marcador util de actividad. Los neurologicos pueden persistir pese a la respuesta tumoral.',
      pronostico: 'Depende del tumor de base mas que del propio sindrome, con la excepcion de los neurologicos, que pueden dejar secuelas permanentes. El sindrome de vena cava superior, pese a su aparatosidad, rara vez es una urgencia vital inmediata salvo que haya edema de la via aerea.',
      algoritmo: ['Ante hiponatremia hipoosmolar en un fumador, pensar en carcinoma microcitico', 'Ante hipercalcemia con parathormona suprimida, pensar en escamoso', 'Ante debilidad proximal que MEJORA con el ejercicio, pedir anticuerpos y buscar el tumor', 'Ante dolor de hombro con Horner, hacer resonancia del vertice pulmonar', 'Ante edema en esclavina, tomografia con contraste para definir la causa', 'Puncionar todo derrame acompa&#241;ante: cambia el estadio', 'Tratar el tumor, que es lo que resuelve la mayoria de los sindromes', 'Endoprotesis o radioterapia en el sindrome de vena cava superior sintomatico', 'Corregir la hiponatremia despacio y la hipercalcemia con hidratacion y antirresortivo', 'Cateter pleural o pleurodesis en el derrame maligno recurrente']
    },
    {
      nombre: 'Cribado y valoracion funcional preoperatoria',
      color: '#3d5a73',
      definicion: 'Dos decisiones que no son diagnosticas sino de seleccion: a quien se le ofrece tomografia de baja dosis anual para detectar el cancer antes de que de sintomas, y quien puede tolerar la reseccion pulmonar que podria curarlo.',
      fisiopatologia: 'El cribado funciona porque adelanta el diagnostico a un estadio en el que la cirugia es curativa, y su beneficio depende de que la poblacion cribada tenga una prevalencia suficiente. La valoracion funcional se basa en que el pulmon resecado deja de participar en el intercambio: se puede estimar la funcion que quedara despues a partir de los segmentos que se van a quitar, y ese valor predicho es lo que predice las complicaciones.',
      epidemiologia: 'El cribado esta muy infrautilizado en relacion con su beneficio demostrado. Y una proporcion importante de los pacientes con cancer de pulmon potencialmente resecable tiene EPOC, precisamente porque comparten el tabaco como causa, lo que convierte la valoracion funcional en una parte rutinaria del proceso.',
      factores_riesgo: ['Edad de 50 a 80 a&#241;os con 20 paquetes-a&#241;o o mas para el cribado', 'Tabaquismo activo o abandono hace menos de 15 a&#241;os', 'EPOC con obstruccion moderada o grave para el riesgo quirurgico', 'DLCO baja, que predice complicaciones incluso con FEV1 conservado', 'Necesidad de neumonectomia frente a lobectomia', 'Edad avanzada y comorbilidad cardiovascular', 'Mal estado funcional', 'Desnutricion y perdida de peso', 'Tabaquismo activo en el momento de la cirugia', 'Hipertension pulmonar asociada'],
      clinica: 'Asintomatico en el cribado, por definicion. En la valoracion preoperatoria, lo que importa es la capacidad funcional real: la disnea de esfuerzo, la distancia que camina el paciente y su capacidad para subir escaleras informan tanto como algunas pruebas.',
      criterios_dx: 'Criterios de cribado: de 50 a 80 a&#241;os, 20 paquetes-a&#241;o o mas, fumador actual o que lo dejo hace menos de 15 a&#241;os, sin condiciones que impidan un tratamiento curativo. Valoracion funcional: FEV1 y DLCO predichos posoperatorios. Ver la Figura 3 de Definicion.',
      laboratorio: 'Hemograma, funcion renal y coagulacion prequirurgicas. Gasometria si hay sospecha de hipercapnia.',
      imagen: 'Tomografia de baja dosis anual en el cribado, informada con Lung-RADS. Tomografia con contraste y positrones en la valoracion prequirurgica.',
      complementarios: 'Pruebas de funcion pulmonar completas con DLCO, que debe medirse SIEMPRE aunque el FEV1 sea normal, porque predice complicaciones de forma independiente. Prueba de esfuerzo cardiopulmonar en la zona intermedia. Valoracion cardiologica segun el riesgo. Gammagrafia de perfusion cuantificada si la distribucion funcional es muy asimetrica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'DESHABITUACION TABAQUICA, que en el programa de cribado debe ofrecerse en cada visita y cuyo beneficio se suma al del propio cribado. Antes de la cirugia: optimizacion del tratamiento de la EPOC, rehabilitacion respiratoria prequirurgica, correccion de la anemia y soporte nutricional, medidas que reducen las complicaciones.',
      tx_farmacologico: 'Optimizacion broncodilatadora en el paciente obstructivo antes de la cirugia. Tratamiento sustitutivo de nicotina y farmacos de deshabituacion.',
      tx_intervencionista: 'En el paciente con funcion limitada: resecciones menores (segmentectomia), radioterapia estereotactica corporal como alternativa curativa no quirurgica, o tecnicas de ablacion. La cirugia minimamente invasiva reduce las complicaciones frente a la toracotomia.',
      criterios_uci: 'Posoperatorio de neumonectomia o de reseccion en paciente de riesgo alto.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Posoperatorio con fisioterapia respiratoria, analgesia adecuada (que es lo que permite toser y evita la atelectasia) y movilizacion precoz.',
      seguimiento_ambulatorio: 'Tomografia de baja dosis anual mientras se mantengan los criterios de cribado. En el operado, seguimiento oncologico estructurado y vigilancia de un segundo primario, cuyo riesgo persiste.',
      pronostico: 'El cribado reduce la mortalidad por cancer de pulmon en la poblacion de riesgo. En la cirugia, la funcion predicha posoperatoria y el estado funcional predicen bien las complicaciones, y una valoracion adecuada evita tanto operar a quien no lo tolerara como negar la cirugia a quien si podria beneficiarse.',
      algoritmo: ['Comprobar los criterios de cribado: edad, paquetes-a&#241;o y a&#241;os desde el abandono', 'Comprobar que el paciente podria tolerar un tratamiento curativo', 'Conversacion sobre beneficios y da&#241;os, y decision compartida documentada', 'Tomografia de baja dosis ANUAL, informada con Lung-RADS', 'Ofrecer deshabituacion tabaquica en cada visita del programa', 'En el candidato a cirugia: espirometria Y DLCO, siempre las dos', 'Calcular el FEV1 y la DLCO predichos posoperatorios', 'Ambos por encima del 60%: riesgo bajo, se puede operar', 'Entre el 30 y el 60%: prueba de esfuerzo cardiopulmonar', 'Por debajo del 30%: valorar reseccion menor o radioterapia estereotactica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En este tema los errores se reparten entre dos extremos opuestos: hacer de mas con el nodulo benigno y hacer de menos o tarde con el cancer. Lo que sigue es la lista de comprobacion que evita los dos.',
    parametros: ['Ante un nodulo, buscar SIEMPRE estudios previos antes de aplicar ninguna tabla', 'Comprobar que mide 30 mm o menos: por encima es una masa y no entra en vigilancia', 'No aplicar Fleischner a menores de 35 a&#241;os, inmunodeprimidos, pacientes con cancer conocido ni a nodulos de cribado', 'El nodulo subsolido se sigue hasta 5 a&#241;os, y lo que marca el cambio es el componente SOLIDO', 'No pedir marcadores tumorales ante un nodulo: no aportan nada y generan ansiedad', 'Conocer los limites del positrones: falla en lo peque&#241;o, en lo lepidico y en el carcinoide, y da falsos positivos en lo inflamatorio', 'CONFIRMAR con puncion toda adenopatia mediastinica captante antes de negar una cirugia', 'Puncionar todo derrame acompa&#241;ante: si es maligno, cambia el estadio y evita una cirugia inutil', 'En el estadio IV, NO iniciar tratamiento sistemico sin estudio molecular completo y PD-L1', 'Medir siempre la DLCO en la valoracion preoperatoria, aunque el FEV1 sea normal', 'Ofrecer deshabituacion tabaquica tambien tras el diagnostico: mejora tolerancia y pronostico', 'Dejar el seguimiento del nodulo registrado y con cita cerrada: el nodulo perdido es un fallo de sistema evitable'],
    criterios_uci_general: 'Sindrome de vena cava superior con edema laringeo o cerebral, obstruccion de la via aerea central, hemoptisis amenazante, hiponatremia grave sintomatica, hipercalcemia con alteracion del nivel de conciencia, y toxicidad grave por inmunoterapia, especialmente la neumonitis y la miocarditis.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica: el cancer activo es una contraindicacion para el trasplante pulmonar.',
    prevencion: 'Primaria, que es la que mas vidas salva: control del tabaquismo, con diferencia la intervencion mas eficaz, ademas de la reduccion de la exposicion al radon domestico, al asbesto y a la contaminacion. Secundaria: cribado con tomografia de baja dosis anual en la poblacion definida, dentro de un programa estructurado y con decision compartida. Terciaria: deshabituacion tabaquica tambien tras el diagnostico, seguimiento oncologico estructurado, vigilancia de un segundo primario y cuidados paliativos precoces integrados desde el diagnostico en la enfermedad avanzada.'
  }
};

export const compCites = {
  'Nodulo pulmonar solitario': [1, 6, 7],
  'Cancer de pulmon no microcitico: diagnostico y estadificacion': [2, 8, 15],
  'Cancer de pulmon no microcitico: tratamiento por estadio': [2, 9, 10, 11, 12, 13],
  'Cancer de pulmon microcitico': [16, 17],
  'Sindromes paraneoplasicos y complicaciones locorregionales': [18],
  'Cribado y valoracion funcional preoperatoria': [3, 4, 5, 14]
};
export const estigmasTitulo = 'Signos que orientan en el nodulo y en el cancer de pulmon';
export const estigmas = [
  { s: 'Nodulo asintomatico hallado por casualidad', p: 'Lo habitual', photo: null, desc: 'Es la forma de presentacion del nodulo por definicion. Su frecuencia ha crecido con el uso de la tomografia por otros motivos, y la mayoria son benignos: el reto es no da&#241;ar a esa mayoria buscando la minoria maligna.' },
  { s: 'Calcificacion central, laminar o en palomita de maiz', p: 'Muy tranquilizadora', photo: null, desc: 'Los cuatro patrones benignos son el central, el laminar concentrico, el difuso y el de palomita de maiz del hamartoma. Las calcificaciones EXCENTRICAS o punteadas no tranquilizan: pueden aparecer en tumores que engloban un granuloma previo.' },
  { s: 'Grasa en el interior del nodulo', p: 'Practicamente diagnostica', photo: null, desc: 'La presencia de grasa medida en unidades Hounsfield es casi diagnostica de hamartoma y evita cualquier otro estudio. Es uno de los pocos hallazgos radiologicos que cierran un caso por si solos.' },
  { s: 'Bordes espiculados o con corona radiada', p: 'Sugieren malignidad', photo: null, desc: 'Traducen la reaccion desmoplasica y la infiltracion del parenquima vecino. Junto con el tama&#241;o y la localizacion en lobulo superior, son las caracteristicas morfologicas que mas suben la probabilidad de malignidad.' },
  { s: 'Crecimiento respecto a estudios previos', p: 'El dato mas potente', photo: null, desc: 'Ninguna caracteristica morfologica pesa tanto como el crecimiento documentado. Por eso el primer gesto ante cualquier nodulo es buscar imagenes antiguas, incluidas las de otros hospitales y las de tomografias abdominales que incluyan las bases.' },
  { s: 'Neumonias de repeticion en el mismo lobulo', p: 'Sospecha de obstruccion', photo: null, desc: 'Sugieren obstruccion bronquial por tumor endobronquial o por compresion extrinseca. Es una de las presentaciones que mas se retrasan, porque cada episodio se trata como una neumonia mas y mejora con antibiotico.' },
  { s: 'Disfonia de nueva aparicion', p: 'Afectacion recurrencial', photo: null, desc: 'Traduce la paralisis de la cuerda vocal izquierda por afectacion del nervio laringeo recurrente en su recorrido bajo el arco aortico. En un fumador con disfonia persistente hay que mirar el torax, no solo la laringe.' },
  { s: 'Sindrome de Horner con dolor de hombro', p: 'Tumor del sulcus superior', photo: null, desc: 'Ptosis, miosis y anhidrosis por afectacion de la cadena simpatica cervical, junto con dolor de hombro y de brazo y debilidad de la mano por invasion del plexo braquial. Se confunde con una patologia del hombro durante meses.' },
  { s: 'Edema en esclavina con circulacion colateral', p: 'Vena cava superior', photo: null, desc: 'Edema de cara, cuello y brazos con ingurgitacion yugular y venas dilatadas en el torax, que empeoran al inclinarse hacia delante. Hoy su causa mas frecuente es el cancer de pulmon, seguido del linfoma y de la trombosis por cateter.' },
  { s: 'Acropaquias con dolor en las piernas', p: 'Osteoartropatia hipertrofica', photo: null, desc: 'Acropaquias con periostitis dolorosa de huesos largos, tipica del adenocarcinoma. Puede preceder al diagnostico y mejora al tratar el tumor. Su aparicion en un fumador obliga a hacer una imagen de torax.' },
  { s: 'Debilidad proximal que mejora con el ejercicio', p: 'Lambert-Eaton', photo: null, desc: 'Al reves que en la miastenia gravis, aqui la fuerza y los reflejos MEJORAN tras la contraccion repetida. Se asocia al carcinoma microcitico y puede preceder al tumor en meses o a&#241;os, de modo que obliga a buscarlo y a repetir la busqueda.' },
  { s: 'Hiponatremia hipoosmolar con orina concentrada', p: 'SIADH paraneoplasico', photo: null, desc: 'Tipica del carcinoma microcitico. Es una de las formas en que este tumor se presenta antes de dar sintomas respiratorios, y en un fumador obliga a completar el estudio con una imagen de torax.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Guias de Fleischner para el nodulo incidental (calculadora disponible)': [1],
  'Probabilidad de malignidad del nodulo (calculadora disponible)': [6, 7],
  'Criterios de cribado con tomografia de baja dosis (calculadora disponible)': [3, 4, 5],
  'Clasificacion TNM, novena edicion': [8, 2],
  'Valoracion funcional preoperatoria (calculadora disponible)': [14],
  'Clasificacion histologica': [2, 17],
  'Estadificacion del carcinoma microcitico': [17]
};
export const escalaCalc = {
  'Guias de Fleischner para el nodulo incidental (calculadora disponible)': 'fleischner',
  'Probabilidad de malignidad del nodulo (calculadora disponible)': 'riesgo-nodulo',
  'Criterios de cribado con tomografia de baja dosis (calculadora disponible)': 'cribado-pulmon',
  'Valoracion funcional preoperatoria (calculadora disponible)': 'funcion-preoperatoria'
};
export const compGroups = [
  { name: 'El hallazgo', items: ['Nodulo pulmonar solitario'] },
  { name: 'El cancer no microcitico', items: ['Cancer de pulmon no microcitico: diagnostico y estadificacion', 'Cancer de pulmon no microcitico: tratamiento por estadio'] },
  { name: 'Lo demas', items: ['Cancer de pulmon microcitico', 'Sindromes paraneoplasicos y complicaciones locorregionales', 'Cribado y valoracion funcional preoperatoria'] }
];
export const complicacionesIntro = 'La primera ficha es el nodulo, que casi siempre es benigno y donde el reto es no hacer da&#241;o. Las dos siguientes son el cancer no microcitico, separado en diagnostico y estadificacion por un lado y tratamiento por otro, porque son dos momentos con logicas distintas. La cuarta es el microcitico, que se maneja aparte porque se comporta de otra manera. La quinta recoge lo que el tumor hace a distancia y en su vecindad, que a menudo es lo que lleva al paciente a consultar. Y la ultima son las dos decisiones de seleccion del tema: a quien se criba y quien puede operarse.';
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
  root: { title: 'NODULO Y CANCER DE PULMON', color: '#8c5a2e', target: 'definicion' },
  branches: [
    { title: 'EL NODULO', sub: 'Casi siempre benigno', color: '#8c5a2e', target: 'complicaciones', leaves: [
      { title: 'Buscar estudios previos', sub: 'La estabilidad resuelve el caso', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Solido frente a subsolido', sub: 'El subsolido se sigue 5 a&#241;os', color: '#6b4a7a', target: 'clasificacion' },
      { title: 'Probabilidad de malignidad', sub: 'Tres franjas, tres conductas', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Limites del positrones', sub: 'Falla en lo peque&#241;o y lo lepidico', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'EL CANCER', sub: 'Estirpe, estadio y molecula', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Confirmar el mediastino', sub: 'Con puncion, no con positrones', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Puncionar el derrame', sub: 'Cambia el estadio', color: '#7a2f5c', target: 'complicaciones' },
      { title: 'Estudio molecular', sub: 'Antes de tratar el estadio IV', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Microcitico', sub: 'Otra enfermedad, otro manejo', color: '#5b4a86', target: 'complicaciones' }
    ] },
    { title: 'SELECCIONAR', sub: 'A quien cribar y a quien operar', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Cribado con baja dosis', sub: '50 a 80 a&#241;os y 20 paquetes-a&#241;o', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Deja de cribarse', sub: 'A los 15 a&#241;os sin fumar', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Medir siempre la DLCO', sub: 'Aunque el FEV1 sea normal', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Funcion predicha posoperatoria', sub: 'Por encima del 60%: opera', color: '#6b4a2e', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [2, 18], no_invasivos: [1, 3, 7, 14], imagen: [1, 15] };
export const clasificacionCite = [1, 3, 8, 14];
export const seguimientoCite = [1, 2, 15];
