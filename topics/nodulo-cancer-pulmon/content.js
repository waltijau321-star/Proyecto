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
  titulo: 'Nódulo Pulmonar y Cáncer de Pulmón',
  subtitulo: 'Módulo 55 · Medicina Interna',
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
    <strong style="color:#8c5a2e;">Un nódulo es una opacidad de 30 mm o menos rodeada de pulmón.</strong> <span style="color:var(--ink-dim);">Por encima de 30 mm se llama masa y se maneja como un cáncer hasta que se demuestre lo contrario, sin periodos de observación. Y antes de aplicar cualquier tabla hay que <strong>comparar con estudios previos</strong>: un nódulo estable durante 2 años (sólido) o 5 (subsolido) ya esta resuelto.</span>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Las guías de Fleischner NO se aplican a todo el mundo.</strong> Quedan fuera: menores de 35 años, pacientes <strong>inmunodeprimidos</strong>, pacientes con <strong>cáncer conocido</strong> y los nódulos detectados en un <strong>programa de cribado</strong>, que se manejan con Lung-RADS. En todos ellos el umbral de sospecha es distinto y aplicar Fleischner puede retrasar un diagnóstico.
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">NÓDULO SÓLIDO único</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Menor de 6 mm</strong>: sin seguimiento si el riesgo es bajo; tomografía opcional a los 12 meses si es alto.<br>
        <strong style="color:var(--ink);">De 6 a 8 mm</strong>: tomografía a los 6 a 12 meses y después a los 18 a 24.<br>
        <strong style="color:var(--ink);">Mayor de 8 mm</strong>: tomografía a los 3 meses, <strong>tomografía por emision de positrones</strong> o toma de muestra, según la probabilidad.
      </div>
    </div>
    <div style="border:1.5px solid #6b4a7a;border-radius:8px;padding:6px 8px;background:#6b4a7a08;">
      <div style="font-weight:700;color:#6b4a7a;text-align:center;margin-bottom:4px;">NÓDULO SUBSOLIDO único</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Vidrio puro menor de 6 mm</strong>: sin seguimiento.<br>
        <strong style="color:var(--ink);">Vidrio puro de 6 mm o más</strong>: tomografía a los 6 a 12 meses y después cada 2 años <strong>hasta los 5</strong>.<br>
        <strong style="color:var(--ink);">Parcialmente sólido de 6 mm o más</strong>: tomografía a los 3 a 6 meses y después anual hasta los 5 años. Si el <strong>componente sólido llega a 6 mm</strong>, es sospechoso: positrones, biopsia o resección.
      </div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Por que el subsolido se sigue más tiempo.</strong> El vidrio deslustrado puro suele corresponder a lesiones de la via adenocarcinomatosa (hiperplasia adenomatosa atípica, adenocarcinoma in situ, mínimamente invasivo) que crecen muy despacio: 2 años de estabilidad no bastan y por eso el seguimiento llega a 5. El dato que marca el cambio de comportamiento es la <strong>aparición o el crecimiento del componente SÓLIDO</strong>, que traduce invasión. Un nódulo subsolido que se hace más grande pero sigue siendo puro preocupa menos que uno que no crece pero desarrolla un nucleo sólido.
  </div>
</div>`;

const riesgoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">SUBEN la probabilidad de malignidad</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Del paciente</strong>: edad avanzada, tabaquismo actual o pasado con carga alta, antecedente de otro cáncer, exposición a asbesto, EPOC y ENFISEMA, fibrosis pulmonar, historia familiar de cáncer de pulmón.<br>
        <strong style="color:var(--ink);">Del nódulo</strong>: tamaño mayor, bordes <strong>espiculados</strong> o con corona radiada, localización en <strong>lóbulo superior</strong>, componente subsolido con nucleo sólido, pared gruesa e irregular si esta cavitado, y sobre todo <strong>CRECIMIENTO</strong> respecto a estudios previos.
      </div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">BAJAN la probabilidad</div>
      <div style="color:var(--ink-dim);line-height:1.6;">
        <strong style="color:var(--ink);">Calcificación benigna</strong>: central, laminar concéntrica, difusa o en palomita de maiz (hamartoma). Las calcificaciones excéntricas o punteadas NO tranquilizan.<br>
        <strong style="color:var(--ink);">Grasa</strong> en el interior: prácticamente diagnóstica de hamartoma.<br>
        <strong style="color:var(--ink);">Estabilidad</strong> durante 2 años en el sólido, y morfología perifisuraria o triangular (ganglio intrapulmonar), que es una causa muy frecuente de nódulo pequeño y benigno.
      </div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Tres franjas de probabilidad y tres conductas.</strong> <strong style="color:#3f6b52;">Baja (menor del 5%)</strong>: vigilancia con tomografía. <strong style="color:#8a6a1f;">Intermedia (del 5 al 65%)</strong>: tomografía por emision de positrones y, según el resultado, biopsia; es la franja donde más se decide y donde más se equivoca uno. <strong style="color:#8c3a34;">Alta (mayor del 65%)</strong>: toma de muestra o resección directa en el paciente operable.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Los límites de la tomografía por emision de positrones.</strong> <strong>Falsos negativos</strong> en lesiones menores de 8 a 10 mm, en el <strong>adenocarcinoma de crecimiento lepidico</strong> y en el tumor carcinoide, que captan poco. <strong>Falsos positivos</strong> en la infección, la inflamación granulomatosa (tuberculosis, sarcoidosis, micosis) y la artritis reumatoide. En zonas con tuberculosis o micosis endémicas su especificidad cae mucho, y un resultado positivo NO sustituye a la histología.
  </div>
</div>`;

const cribadoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">El cribado con tomografía de baja dosis reduce la mortalidad por cáncer de pulmón.</strong> <span style="color:var(--ink-dim);">Lo demostraron dos ensayos grandes: uno estadounidense frente a radiografía y otro europeo frente a no cribar. Es de las pocas intervenciones de cribado con reducción de mortalidad demostrada, y sigue infrautilizada.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">A QUIEN</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Adultos de <strong style="color:var(--ink);">50 a 80 años</strong> con al menos <strong style="color:var(--ink);">20 paquetes-año</strong> que fuman actualmente o lo dejaron hace <strong>menos de 15 años</strong>. Tomografía de baja dosis <strong>ANUAL</strong>.</div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">CUANDO SE DEJA DE CRIBAR</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Al cumplir <strong>15 años sin fumar</strong>, o cuando aparece una <strong style="color:var(--ink);">enfermedad que limita la esperanza de vida</strong> o que impediria una cirugía curativa. Cribar a quien no podría tratarse solo produce daño.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que hay que contarle al paciente.</strong> Que la mayoría de los hallazgos seran nódulos benignos que obligaran a repetir pruebas; que hay un riesgo pequeño de complicaciones por procedimientos sobre lesiones que resultan benignas; que existe sobrediagnostico; y que la radiación acumulada es baja pero no nula. La decisión es compartida y se documenta.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Lo que no se debe olvidar.</strong> El cribado <strong>NO sustituye al abandono del tabaco</strong>: la intervención antitabaco debe ofrecerse en cada visita del programa, y su beneficio se suma al del cribado. Y los hallazgos se informan con <strong>Lung-RADS</strong>, no con las guías de Fleischner, que están pensadas para el nódulo incidental.
    </div>
  </div>
</div>`;

const estadioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">En el cáncer de pulmón avanzado, el estudio MOLECULAR es parte del diagnóstico, no un extra.</strong> <span style="color:var(--ink-dim);">Empezar quimioterapia sin conocer las alteraciones diana ni la expresión de PD-L1 puede costarle al paciente el mejor tratamiento disponible.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">ESTADIO I y II<br>localizado</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CIRUGÍA</strong>: lobectomia con disección ganglionar mediastínica, y segmentectomia en tumores periféricos pequeños seleccionados. Radioterapia estereotáctica si el paciente no es operable. Quimioterapia adyuvante a partir del estadio IB de alto riesgo y en el II, con <strong>osimertinib adyuvante</strong> si hay mutación de EGFR e inmunoterapia adyuvante según PD-L1. La quimioinmunoterapia <strong>neoadyuvante</strong> se ha incorporado en el resecable.</div>
    </div>
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">ESTADIO III<br>locorregional</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El más heterogéneo y el que más exige comite. En el irresecable, <strong style="color:var(--ink);">quimiorradioterapia concurrente seguida de durvalumab</strong> de consolidación, que cambio la supervivencia de este grupo. En casos seleccionados, cirugía dentro de una estrategia multimodal.</div>
    </div>
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">ESTADIO IV<br>metastásico</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Estudio molecular OBLIGATORIO antes de tratar</strong>: EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK y HER2, más expresión de PD-L1. Con diana: inhibidor específico, que consigue respuestas prolongadas. Sin diana: inmunoterapia sola o con quimioterapia según PD-L1 y clínica. <strong>Cuidados paliativos precoces</strong>, que en esta enfermedad mejoran la calidad de vida y en un ensayo clásico también la supervivencia.</div>
    </div>
    <div style="display:grid;grid-template-columns:106px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">MICROCITICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se maneja aparte: crece rápido, disemina pronto y responde muy bien al principio para recaer después. <strong style="color:var(--ink);">Enfermedad limitada</strong>: quimioterapia con platino y etoposido concurrente con radioterapia torácica. <strong style="color:var(--ink);">Enfermedad extendida</strong>: quimioterapia con platino, etoposido e inmunoterapia. Irradiación craneal profiláctica o resonancias de vigilancia en los que responden.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">La estadificación ganglionar mediastínica se confirma, no se supone.</strong> La tomografía por emision de positrones tiene falsos positivos frecuentes (infección, granulomas), de modo que una adenopatía captante NO basta para negarle la cirugía a un paciente: hay que confirmarla con <strong>ecobroncoscopia con punción</strong> o mediastinoscopia. Es uno de los errores que más cuesta, porque cambia un tratamiento potencialmente curativo por uno paliativo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema junta dos problemas muy distintos que comparten imagen: el <strong>nódulo pulmonar</strong>, que casi siempre es benigno y cuyo reto es no hacer daño buscando el cáncer que rara vez esta, y el <strong>cáncer de pulmón</strong>, que sigue siendo la primera causa de muerte por cáncer en el mundo y cuyo reto es el contrario, no llegar tarde. La bisagra entre los dos es la <strong>probabilidad de malignidad</strong>, que se estima con datos del paciente y de la imagen antes de tocar nada.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El nódulo: primero mirar atrás.</strong></p>
<p style="margin:0 0 12px;">Antes de aplicar ninguna tabla hay dos gestos que resuelven una parte enorme de los casos: <strong>buscar estudios previos</strong> (un nódulo sólido estable 2 años ya no necesita nada) y <strong>mirar si mide más de 30 mm</strong>, porque entonces es una masa y no entra en ningún algoritmo de vigilancia. Solo después se aplica el seguimiento por tamaño y densidad. Y conviene saber a quien NO se le aplica: menores de 35 años, inmunodeprimidos, pacientes con cáncer conocido y nódulos hallados en un programa de cribado.</p>
${figBlock('Figura 1', 'Seguimiento del nódulo incidental: sólido frente a subsolido', noduloHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La probabilidad de malignidad, antes de decidir nada.</strong></p>
<p style="margin:0 0 12px;">La conducta no depende solo del tamaño sino de la probabilidad global, que combina el paciente (edad, tabaco, cáncer previo, enfisema) con el nódulo (tamaño, bordes, localización, densidad y sobre todo crecimiento). Tres franjas y tres conductas: vigilar por debajo del 5%, estudiar con positrones y biopsia entre el 5 y el 65%, y resecar o biopsiar directamente por encima del 65%. La franja intermedia es donde se juega el tema, y donde conviene conocer los <strong>límites de la tomografía por emision de positrones</strong>, que falla en lo pequeño, en lo lepidico y en el carcinoide, y da falsos positivos en todo lo inflamatorio.</p>
${figBlock('Figura 2', 'Que sube y que baja la probabilidad de malignidad', riesgoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El cribado, que si funciona.</strong></p>
<p style="margin:0 0 12px;">La tomografía de baja dosis anual <strong>reduce la mortalidad por cáncer de pulmón</strong> en la población de riesgo, algo que la radiografía de tórax nunca consiguio. Es una de las pocas intervenciones de cribado con reducción de mortalidad demostrada y sigue infrautilizada. Tiene condiciones: una población definida por edad y carga tabaquica, un programa con seguimiento estructurado, y una conversación honesta sobre sus daños, que existen y son sobre todo el sobrediagnostico y las pruebas sobre lesiones benignas.</p>
${figBlock('Figura 3', 'Cribado con tomografía de baja dosis: a quien, hasta cuando y que contar', cribadoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El cáncer: dos preguntas que ordenan todo.</strong></p>
<p style="margin:0 0 12px;">Ante un cáncer de pulmón confirmado, todo se organiza alrededor de dos preguntas: <strong>que estirpe es</strong> (no microcitico, que es la gran mayoría, o microcitico, que se maneja aparte) y <strong>hasta donde llega</strong>, con la clasificación TNM en su <strong>novena edicion</strong>, vigente desde 2025, que subdividio el N2 en único y múltiple y el M1c según afecte a uno o a varios órganos. En el estadio IV hay una tercera pregunta que ha cambiado la enfermedad por completo: <strong>que alteración molecular tiene</strong>.</p>
${figBlock('Figura 4', 'Del estadio al tratamiento, y por que el estudio molecular no es opcional', estadioHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No aplicar las guías de Fleischner a un inmunodeprimido, a un paciente con cáncer conocido ni a un nódulo de cribado. No poner en vigilancia una masa de más de 30 mm. No dar por benigna una calcificación excéntrica o punteada. No negarle la cirugía a un paciente por una adenopatía captante en positrones sin confirmarla con punción. No fiarse de un positrones negativo en una lesión pequeña o en vidrio deslustrado. No empezar tratamiento sistémico en un estadio IV sin el estudio molecular completo. Y no dejar de ofrecer deshabituacion tabaquica ni siquiera al paciente ya diagnosticado, porque mejora la tolerancia al tratamiento y el pronóstico.</p>`;

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
      tituloA: 'Nódulo pulmonar incidental',
      tituloB: 'Cáncer de pulmón sintomático',
      compensada: 'ASINTOMÁTICO por definición: se encuentra en una tomografía pedida por otro motivo, y su frecuencia ha crecido con el uso de la angiotomografia y de la tomografía abdominal. Lo primero es recuperar estudios previos, porque un nódulo sólido estable durante 2 años ya no necesita nada más. La ansiedad que genera el hallazgo es un efecto adverso real que hay que manejar con información clara sobre lo que se va a hacer y cuando.',
      descompensada: 'Tos persistente o cambio en el patrón de la tos del fumador, hemoptisis, disnea, dolor torácico, neumonías de repetición en el MISMO lóbulo (que sugieren obstrucción bronquial) y síndrome constitucional. Según la localización: disfonia por afectación del nervio laríngeo recurrente, síndrome de vena cava superior, síndrome de Pancoast con dolor de hombro, síndrome de Horner y afectación del plexo braquial. Y las manifestaciones a distancia: dolor óseo, focalidad neurológica, ictericia o los síndromes paraneoplásicos, que pueden preceder al diagnóstico.'
    },
    laboratorio: [
      { prueba: 'Estudio molecular del tumor', utilidad: 'OBLIGATORIO en el cáncer no microcitico avanzado ANTES de iniciar tratamiento: EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK y HER2, además de la expresión de PD-L1. Se hace preferentemente en panel de secuenciación masiva sobre tejido, y la biopsia líquida en plasma es una alternativa cuando no hay tejido suficiente o hay que empezar rápido.' },
      { prueba: 'Expresión de PD-L1', utilidad: 'Determina la elección entre inmunoterapia sola o combinada con quimioterapia en el tumor sin diana molecular. Se informa como porcentaje de células tumorales positivas, y por encima del 50% la inmunoterapia en monoterapia es una opción de primera línea.' },
      { prueba: 'Sodio, calcio y función renal', utilidad: 'Cribado de síndromes paraneoplásicos: hiponatremia por secreción inadecuada de hormona antidiurética en el microcitico, e hipercalcemia por péptido relacionado con la parathormona en el escamoso. Ambos pueden ser la primera manifestación de la enfermedad.' },
      { prueba: 'Perfil hepático, lactato deshidrogenasa y fosfatasa alcalina', utilidad: 'Orientan hacia afectación metastásica hepática u ósea. La lactato deshidrogenasa elevada es un marcador pronóstico en el microcitico. No sustituyen a la imagen de estadificación.' },
      { prueba: 'Hemograma y coagulación', utilidad: 'Anemia de trastorno crónico, leucocitosis o trombocitosis paraneoplásicas. El estado protrombótico del cáncer de pulmón es marcado y la enfermedad tromboembólica es una complicación frecuente que conviene tener presente ante cualquier deterioro brusco.' },
      { prueba: 'Anticuerpos anti-canal de calcio dependiente de voltaje', utilidad: 'Ante debilidad proximal con hiporreflexia que MEJORA con el ejercicio repetido, en la sospecha de síndrome de Lambert-Eaton, que se asocia al carcinoma microcitico y puede preceder al diagnóstico del tumor en meses o años.' },
      { prueba: 'Citología de esputo y del líquido pleural', utilidad: 'La citología de esputo tiene rendimiento bajo salvo en tumores centrales y voluminosos. La del líquido pleural, en cambio, es diagnóstica y estadificante a la vez: un derrame maligno confirmado hace la enfermedad irresecable, de modo que puncionarlo puede evitar una toracotomia inútil.' },
      { prueba: 'Marcadores tumorales séricos', utilidad: 'NO tienen papel en el diagnóstico ni en el cribado del cáncer de pulmón, y pedirlos ante un nódulo genera confusión y ansiedad sin aportar información útil. Su uso se limita a contextos concretos de seguimiento y de investigación.' }
    ],
    no_invasivos: [
      { metodo: 'Seguimiento del nódulo según Fleischner (calculadora disponible)', interpretacion: 'Depende del tamaño, de la densidad (sólido o subsolido), del número y del riesgo del paciente. No se aplica a menores de 35 años, inmunodeprimidos, pacientes con cáncer conocido ni a nódulos de cribado.', cutoff: 'Sólido menor de 6 mm y riesgo bajo: sin seguimiento. Mayor de 8 mm: positrones, biopsia o tomografía a los 3 meses' },
      { metodo: 'Estimación de la probabilidad de malignidad (calculadora disponible)', interpretacion: 'Combina datos del paciente (edad, tabaco, cáncer previo, enfisema, historia familiar) con datos del nódulo (tamaño, bordes, localización, densidad, crecimiento). Define tres franjas con tres conductas distintas.', cutoff: 'Menor del 5%: vigilancia. Del 5 al 65%: positrones y valorar biopsia. Mayor del 65%: muestra o resección' },
      { metodo: 'Criterios de cribado con tomografía de baja dosis (calculadora disponible)', interpretacion: 'Población definida por edad y carga tabaquica, con tomografía anual y decisión compartida sobre sus daños. Los hallazgos se informan con Lung-RADS y no con Fleischner.', cutoff: 'De 50 a 80 años, 20 paquetes-año o más, fumador actual o que lo dejo hace menos de 15 años' },
      { metodo: 'Valoración funcional preoperatoria (calculadora disponible)', interpretacion: 'FEV1 y DLCO predichos posoperatorios calculados a partir del número de segmentos que se van a resecar. Decide si el paciente puede tolerar la cirugía y si necesita una prueba de esfuerzo.', cutoff: 'Ambos por encima del 60%: riesgo bajo. Alguno por debajo del 30%: riesgo alto' },
      { metodo: 'Estadificación TNM en su novena edicion', interpretacion: 'Vigente desde 2025. Subdividio el N2 en N2a (una sola estación) y N2b (varias estaciones), y el M1c según afecte a uno o a varios órganos extratoracicos, con reagrupacion de estadios.', cutoff: 'Sin umbral único; la estadificación determina el tratamiento y el pronóstico' },
      { metodo: 'Escala funcional del Eastern Cooperative Oncology Group', interpretacion: 'De 0 (actividad normal) a 4 (encamado). Es uno de los determinantes más potentes de la tolerancia al tratamiento y del pronóstico, por encima incluso de algunas variables tumorales.', cutoff: 'Estado funcional de 3 o 4: la mayoría de los tratamientos sistémicos aportan más daño que beneficio' },
      { metodo: 'Prueba de esfuerzo cardiopulmonar', interpretacion: 'En el paciente con función predicha posoperatoria en zona intermedia. Mide el consumo máximo de oxígeno, que integra la reserva cardiaca, pulmonar y muscular mejor que cualquier parámetro aislado.', cutoff: 'Consumo máximo de oxígeno mayor de 20 mL/kg/min: se puede resecar hasta neumonectomia. Menor de 10: riesgo muy alto' }
    ],
    imagen: [
      { modalidad: 'Tomografía de tórax', hallazgos: 'Prueba central. Define tamaño, densidad (sólido, parcialmente sólido o vidrio puro), bordes, calcificación, grasa y localización, y permite comparar con estudios previos, que es el gesto que más casos resuelve. La reconstrucción volumetrica detecta crecimientos que la medida en un solo plano no ve.' },
      { modalidad: 'Tomografía por emision de positrones con fluorodesoxiglucosa', hallazgos: 'Caracteriza el nódulo mayor de 8 a 10 mm y, sobre todo, ESTADIFICA: detecta afectación ganglionar y metástasis a distancia insospechadas. Falsos negativos en lesiones pequeñas, en el adenocarcinoma lepidico y en el carcinoide; falsos positivos en infección y granulomas, de modo que una adenopatía captante debe confirmarse con punción.' },
      { modalidad: 'Resonancia magnética cerebral', hallazgos: 'Estadificación del sistema nervioso central, obligada en el microcitico y en el no microcitico a partir del estadio II o ante cualquier síntoma neurológico. Es más sensible que la tomografía craneal y detecta metástasis asintomáticas que cambian el tratamiento.' },
      { modalidad: 'Ecobroncoscopia con punción', hallazgos: 'Prueba de elección para la estadificación ganglionar mediastínica: obtiene muestra de las estaciones accesibles con menos riesgo que la mediastinoscopia. Confirma o descarta lo que sugiere el positrones, y esa confirmación es lo que decide si el paciente es candidato a cirugía.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El tema tiene dos sistemas de clasificación que no se mezclan. Para el <strong>nódulo</strong>, la clasificación es por <strong>densidad</strong> (sólido, parcialmente sólido y vidrio deslustrado puro) y por <strong>tamaño</strong>, y de ahi salen las recomendaciones de seguimiento; a ello se superpone la <strong>probabilidad de malignidad</strong>, que integra paciente e imagen. Para el <strong>cáncer</strong>, la clasificación es <strong>histológica</strong> (no microcitico frente a microcitico, y dentro del primero adenocarcinoma, escamoso y de células grandes), <strong>molecular</strong> (que en el estadio IV es tan determinante como la histología) y <strong>anatómica</strong> con el sistema TNM, hoy en su novena edicion.`,
    escalas: [
      { nombre: 'Guías de Fleischner para el nódulo incidental (calculadora disponible)', componentes: 'Densidad (sólido o subsolido), tamaño medio, número de nódulos y riesgo del paciente.', formula: 'Recomendaciones categóricas de seguimiento por tomografía, con intervalos distintos para el sólido y el subsolido.', interpretacion: 'El subsolido se sigue hasta 5 años porque las lesiones de la via adenocarcinomatosa crecen muy despacio. NO se aplican a menores de 35 años, inmunodeprimidos, pacientes con cáncer conocido ni a nódulos detectados en cribado, que se informan con Lung-RADS.' },
      { nombre: 'Probabilidad de malignidad del nódulo (calculadora disponible)', componentes: 'Edad, tabaquismo, antecedente de cáncer, enfisema o fibrosis, historia familiar; y del nódulo: tamaño, espiculacion, localización en lóbulo superior, densidad y crecimiento.', formula: 'Estimación clínica apoyada en modelos publicados, expresada en tres franjas de probabilidad.', interpretacion: 'Menor del 5%: vigilancia. Del 5 al 65%: tomografía por emision de positrones y valorar biopsia. Mayor del 65%: toma de muestra o resección directa en el paciente operable. Es la estimación que ordena toda la conducta, por encima del tamaño aislado.' },
      { nombre: 'Criterios de cribado con tomografía de baja dosis (calculadora disponible)', componentes: 'Edad, carga tabaquica en paquetes-año, condición de fumador actual o exfumador y años desde el abandono, más la expectativa de vida y la capacidad de tolerar un tratamiento curativo.', formula: 'Criterios categóricos: de 50 a 80 años, 20 paquetes-año o más, fumador actual o que lo dejo hace menos de 15 años.', interpretacion: 'Tomografía de baja dosis ANUAL, dentro de un programa con seguimiento estructurado y decisión compartida. Se deja de cribar al cumplir 15 años sin fumar o cuando aparece una condición que impediria un tratamiento curativo.' },
      { nombre: 'Clasificación TNM, novena edicion', componentes: 'Tamaño e invasión del tumor (T), afectación ganglionar (N) y metástasis a distancia (M).', formula: 'Vigente desde 2025. Subdivide el N2 en N2a (una sola estación mediastínica) y N2b (varias estaciones), y el M1c según las metástasis afecten a un solo órgano extratoracico o a varios, con reagrupacion de los estadios.', interpretacion: 'Determina el tratamiento: estadios I y II quirúrgicos, III multimodal con quimiorradioterapia y consolidación, y IV sistémico guiado por el perfil molecular. La afectación ganglionar mediastínica debe CONFIRMARSE con punción y no suponerse por el positrones.' },
      { nombre: 'Valoración funcional preoperatoria (calculadora disponible)', componentes: 'FEV1 y DLCO en porcentaje del predicho, y número de segmentos funcionantes que se van a resecar.', formula: 'Valor predicho posoperatorio = valor preoperatorio por (segmentos funcionantes restantes dividido entre 19).', interpretacion: 'Ambos valores por encima del 60%: riesgo bajo, se puede operar. Entre el 30 y el 60%: prueba de esfuerzo cardiopulmonar. Alguno por debajo del 30%: riesgo alto, valorar cirugía menor, radioterapia estereotáctica o tratamiento no quirúrgico.' },
      { nombre: 'Clasificación histológica', componentes: 'Estirpe tumoral en la muestra histológica o citologica, con inmunohistoquímica.', formula: 'No microcitico (adenocarcinoma, escamoso, de células grandes) frente a microcitico. El adenocarcinoma es hoy el más frecuente, incluido en no fumadores.', interpretacion: 'Separa dos enfermedades con manejo distinto. El microcitico crece rápido, disemina pronto, responde muy bien al principio y recae; rara vez es quirúrgico. El no microcitico se estadifica y se trata según estadio y perfil molecular.' },
      { nombre: 'Estadificación del carcinoma microcitico', componentes: 'Extensión de la enfermedad y posibilidad de incluirla en un campo de radioterapia tolerable.', formula: 'Enfermedad LIMITADA (confinada a un hemitórax y abarcable en un campo de radioterapia) frente a EXTENDIDA.', interpretacion: 'La división clásica sigue usandose en la práctica junto con el TNM. La limitada se trata con quimioterapia y radioterapia torácica concurrentes con intención curativa; la extendida, con quimioterapia e inmunoterapia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Nódulo pulmonar solitario',
      color: '#8c5a2e',
      definicion: 'Opacidad pulmonar única de 30 mm o menos, redondeada u ovalada, rodeada de parénquima aireado y sin atelectasia, adenopatías ni derrame asociados. Por encima de 30 mm se denomina masa y se maneja como un cáncer hasta que se demuestre lo contrario.',
      fisiopatologia: 'No hay una fisiopatología única: el nódulo es un hallazgo morfológico compartido por decenas de procesos. Los benignos más frecuentes son el granuloma (residual de tuberculosis o de micosis), el hamartoma y el ganglio intrapulmonar, que es una causa muy común de nódulo pequeño, perifisurario y triangular. Entre los malignos, el adenocarcinoma es el que más se presenta como nódulo periférico, y la metástasis única es posible pero menos frecuente que la lesión primaria.',
      epidemiologia: 'Su frecuencia ha crecido de forma espectacular con el uso de la tomografía: se detecta algún nódulo en una proporción muy alta de las tomografías torácicas y en la mayoría de las de cribado. La inmensa mayoría son benignos, sobre todo los menores de 6 mm, cuya probabilidad de malignidad en un paciente de bajo riesgo es inferior al 1%.',
      factores_riesgo: ['Edad avanzada', 'Tabaquismo actual o pasado, con relación dosis-respuesta', 'Antecedente personal de otro cáncer', 'Enfisema y EPOC', 'Fibrosis pulmonar', 'Exposición a asbesto, radon, sílice y arsénico', 'Historia familiar de cáncer de pulmón', 'Tamaño mayor del nódulo', 'Bordes espiculados y localización en lóbulo superior', 'Componente sólido en un nódulo subsolido'],
      clinica: 'ASINTOMÁTICO por definición. Se descubre en una prueba pedida por otro motivo, y esa es su característica esencial: el paciente no consulta por el. La ansiedad que genera el hallazgo es un efecto adverso real, y se maneja explicando desde el principio que la mayoría son benignos y cual va a ser el plan.',
      criterios_dx: 'El objetivo no es diagnosticar sino estimar la PROBABILIDAD de malignidad y decidir entre vigilar, estudiar o resecar. El primer paso, antes de cualquier tabla, es buscar estudios previos: la estabilidad de 2 años en el sólido, o de 5 en el subsolido, resuelve el caso. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'Ninguno de rutina. Los marcadores tumorales NO tienen papel y su uso ante un nódulo genera confusión y ansiedad sin aportar nada. Según el contexto epidemiológico, valorar estudio de tuberculosis o de micosis endémicas.',
      imagen: 'Tomografía de tórax con cortes finos y reconstrucción volumetrica, que detecta crecimientos que la medida en un plano no ve. Tomografía por emision de positrones en el nódulo mayor de 8 a 10 mm con probabilidad intermedia. Comparación sistemática con estudios previos.',
      complementarios: 'Broncoscopia con técnicas de navegacion o radial en las lesiones centrales o accesibles; punción transtoracica guiada por tomografía en las periféricas, con riesgo de neumotórax que hay que anticipar; y resección por videotoracoscopia como opción diagnóstica y terapéutica en una sola intervención cuando la probabilidad es alta.',
      dx_diferencial: 'Granuloma residual (tuberculosis, histoplasmosis, coccidioidomicosis), hamartoma (con grasa o calcificación en palomita de maiz), ganglio intrapulmonar, malformación arteriovenosa, nódulo reumatoide, granulomatosis con poliangeítis, aspergiloma, atelectasia redonda en el expuesto a asbesto, infarto pulmonar y metástasis única.',
      tx_medico: 'Abandono del tabaco, que reduce el riesgo futuro y mejora cualquier escenario posterior. Información clara sobre el plan de seguimiento y sobre lo que se busca, que es lo que reduce la ansiedad asociada al hallazgo.',
      tx_farmacologico: 'No aplica salvo que se identifique una causa infecciosa o inflamatoria concreta.',
      tx_intervencionista: 'Biopsia o resección según la probabilidad y la operabilidad. La elección entre broncoscopia, punción transtoracica y cirugía depende de la localización, del tamaño, del riesgo del procedimiento y de si un resultado negativo va a cambiar realmente la conducta.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica salvo complicación de un procedimiento, sobre todo el neumotórax tras la punción transtoracica.',
      seguimiento_ambulatorio: 'Según el algoritmo por densidad y tamaño. Es imprescindible que el seguimiento quede REGISTRADO y con cita cerrada: el nódulo perdido en el seguimiento, encontrado años después convertido en un cáncer avanzado, es uno de los fallos de sistema más frecuentes y más evitables.',
      pronostico: 'Excelente en la gran mayoría. La clave no es diagnosticar todos los canceres cuanto antes, sino no dañar a la mayoría benigna con pruebas y cirugías innecesarias mientras se detecta la minoría maligna a tiempo.',
      algoritmo: ['Buscar estudios previos: la estabilidad resuelve el caso', 'Comprobar que mide 30 mm o menos; si no, es una masa y se estudia como cáncer', 'Comprobar que el paciente entra en el ambito de Fleischner', 'Clasificar por densidad: sólido, parcialmente sólido o vidrio puro', 'Medir el diámetro medio y contar los nódulos', 'Estimar la probabilidad de malignidad con datos del paciente y del nódulo', 'Probabilidad baja: vigilancia por tomografía según el algoritmo', 'Probabilidad intermedia: positrones y valorar biopsia', 'Probabilidad alta: toma de muestra o resección en el paciente operable', 'Dejar el seguimiento REGISTRADO y con cita cerrada']
    },
    {
      nombre: 'Cáncer de pulmón no microcitico: diagnóstico y estadificación',
      color: '#8c3a34',
      definicion: 'Neoplasia maligna de origen epitelial pulmonar que agrupa el adenocarcinoma, el carcinoma escamoso y el de células grandes, y que representa alrededor del 85% de los canceres de pulmón.',
      fisiopatologia: 'La exposición crónica a carcinogenos del humo del tabaco produce acumulación de mutaciones en el epitelio bronquial y alveolar. En el escamoso, el proceso sigue la secuencia metaplasia, displasia y carcinoma in situ en la via aérea central. En el adenocarcinoma, que puede aparecer en no fumadores, predominan alteraciones en genes conductores concretos (EGFR, ALK, ROS1, KRAS, BRAF) que actuan como interruptores de la proliferación, y por eso ese subgrupo responde de forma espectacular a los inhibidores dirigidos. Esa dependencia de una sola via es lo que hace del estudio molecular una parte del diagnóstico y no un complemento.',
      epidemiologia: 'Primera causa de muerte por cáncer en el mundo. El adenocarcinoma ha desplazado al escamoso como estirpe más frecuente, en parte por los cambios en el tabaco y en parte por el aumento de casos en no fumadores, sobre todo mujeres, en los que las alteraciones moleculares diana son mucho más frecuentes. La mayoría de los casos se diagnostican en estadio avanzado.',
      factores_riesgo: ['Tabaquismo, responsable de la gran mayoría de los casos', 'Exposición pasiva al humo del tabaco', 'Radon en el domicilio', 'Asbesto, con efecto multiplicativo junto al tabaco', 'Sílice, arsénico, cromo, niquel y hidrocarburos aromáticos', 'Contaminación atmosferica', 'EPOC y fibrosis pulmonar, con riesgo independiente del tabaco', 'Antecedente familiar de cáncer de pulmón', 'Radioterapia torácica previa', 'Infección por VIH'],
      clinica: 'Tos persistente o cambio en la tos habitual del fumador, hemoptisis, disnea, dolor torácico, neumonías de repetición en el mismo lóbulo y síndrome constitucional. Manifestaciones locorregionales: disfonia, síndrome de vena cava superior, síndrome de Pancoast. Y a distancia: dolor óseo, focalidad neurológica, adenopatías supraclaviculares y síndromes paraneoplásicos.',
      criterios_dx: 'Confirmación HISTOLÓGICA o citologica, obtenida por la via de menor riesgo que además aporte el estadio más alto. Si hay derrame pleural o adenopatía supraclavicular, puncionarlos primero: diagnóstica y estadifica en un solo gesto. Ver la Figura 4 de Definición.',
      laboratorio: 'Estudio molecular completo y expresión de PD-L1 en la enfermedad avanzada. Bioquímica con sodio, calcio, función renal y hepática y lactato deshidrogenasa. Hemograma y coagulación.',
      imagen: 'Tomografía de tórax y abdomen superior con contraste, tomografía por emision de positrones para la estadificación y resonancia cerebral a partir del estadio II o ante síntomas. Gammagrafía ósea solo si no se ha hecho positrones.',
      complementarios: 'ECOBRONCOSCOPIA CON PUNCIÓN para confirmar la afectación ganglionar mediastínica, que no debe suponerse por el positrones. Mediastinoscopia si la ecobroncoscopia no es concluyente y el resultado va a cambiar la conducta. Valoración funcional preoperatoria en el candidato a cirugía.',
      dx_diferencial: 'Tuberculosis y micosis, linfoma, tumor carcinoide, metástasis de otro primario, neumonía organizada, granulomatosis con poliangeítis y sarcoidosis con adenopatías, que puede imitar exactamente una estadificación ganglionar avanzada en el positrones.',
      tx_medico: 'Abandono del tabaco también tras el diagnóstico, porque mejora la tolerancia al tratamiento, reduce las complicaciones quirúrgicas y mejora la supervivencia. Soporte nutricional, control del dolor y CUIDADOS PALIATIVOS PRECOCES, que en el estadio IV mejoran la calidad de vida y en un ensayo clásico también la supervivencia.',
      tx_farmacologico: 'Depende del estadio y del perfil molecular; se detalla en la ficha de tratamiento. La regla que no se negocia es que en el estadio IV no se empieza ningún tratamiento sistémico sin el estudio molecular completo y la expresión de PD-L1.',
      tx_intervencionista: 'La estadificación invasiva forma parte del diagnóstico. La toracocentesis del derrame acompañante es prioritaria porque un derrame maligno confirmado cambia el estadio y evita una cirugía inútil.',
      criterios_uci: 'Complicaciones agudas: síndrome de vena cava superior con edema laríngeo, hemoptisis amenazante, obstrucción de la via aérea central y neumonitis grave por inmunoterapia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica: el cáncer activo es contraindicación de trasplante pulmonar.',
      seguimiento_hospitalario: 'Coordinación con oncología, cirugía torácica, radioterapia y anatomía patológica en COMITE DE TUMORES, que es donde debe decidirse el plan. Control del dolor y de los síntomas desde el ingreso.',
      seguimiento_ambulatorio: 'Según el plan del comite. Vigilancia de la toxicidad del tratamiento, con atención especial a la toxicidad inmunomediada, que puede afectar a cualquier órgano y aparecer meses después de iniciar el fármaco.',
      pronostico: 'Muy dependiente del estadio: la supervivencia a 5 años pasa de superar el 70% en el estadio I a ser de meses en el IV sin diana molecular. La aparición de los inhibidores dirigidos y de la inmunoterapia ha cambiado de forma sustancial el pronóstico de subgrupos concretos del estadio IV.',
      algoritmo: ['Confirmar histología por la via de menor riesgo y mayor rendimiento estadificante', 'Si hay derrame o adenopatía supraclavicular, puncionarlos primero', 'Tomografía de tórax y abdomen con contraste', 'Tomografía por emision de positrones para la estadificación', 'Resonancia cerebral a partir del estadio II o ante síntomas', 'CONFIRMAR la afectación mediastínica con ecobroncoscopia, no suponerla', 'Estudio molecular y PD-L1 en la enfermedad avanzada', 'Valoración funcional preoperatoria en el candidato a cirugía', 'Llevar el caso al comite de tumores', 'Ofrecer deshabituacion tabaquica y cuidados paliativos precoces']
    },
    {
      nombre: 'Cáncer de pulmón no microcitico: tratamiento por estadio',
      color: '#3f6b52',
      definicion: 'Estrategia terapéutica organizada por estadio TNM y, en la enfermedad avanzada, por perfil molecular y expresión de PD-L1.',
      fisiopatologia: 'La lógica del tratamiento sigue la biología. En la enfermedad localizada, el objetivo es la extirpacion completa con márgenes y la eliminación de la enfermedad microscopica residual mediante tratamiento perioperatorio. En la locorregional, se combina el control local con el sistémico. Y en la metastásica, el tratamiento es sistémico y su elección depende de si el tumor depende de una via de señalización concreta (que se puede bloquear) o de si expresa marcadores que predicen respuesta a la reactivación inmunitaria.',
      epidemiologia: 'La mayoría de los pacientes se diagnostican en estadio avanzado, lo que explica la mortalidad global de la enfermedad. En la última década, los tratamientos perioperatorios y la consolidación tras la quimiorradioterapia han mejorado los resultados de los estadios potencialmente curables.',
      factores_riesgo: ['Estadio avanzado al diagnóstico', 'Mal estado funcional', 'Pérdida de peso significativa', 'Comorbilidad cardiopulmonar que limita el tratamiento', 'Ausencia de alteración molecular diana en el estadio IV', 'Expresión baja de PD-L1 en el tumor sin diana', 'Metástasis cerebrales o hepáticas', 'Tabaquismo activo durante el tratamiento', 'Retraso entre el diagnóstico y el inicio del tratamiento', 'Falta de valoración en comite multidisciplinar'],
      clinica: 'La del tumor y la de la toxicidad del tratamiento. Merece atención especial la toxicidad inmunomediada, que puede afectar a cualquier órgano (colitis, hepatitis, tiroiditis, hipofisitis, neumonitis, miocarditis) y aparecer meses después del inicio, incluso tras suspenderlo.',
      criterios_dx: 'No aplica: es la fase terapéutica. La decisión se toma en comite de tumores con la histología, el estadio, el perfil molecular, la función y las preferencias del paciente.',
      laboratorio: 'Estudio molecular y PD-L1 antes de iniciar el tratamiento sistémico. Función tiroidea, hepática, renal y glucemia basales y periódicas si se usa inmunoterapia. Hemograma y función renal para la quimioterapia.',
      imagen: 'Tomografía de reevaluación según el esquema. Resonancia cerebral de control en los tumores con alteraciones diana, que tienen alta incidencia de metástasis cerebrales. Atención al fenómeno de pseudoprogresión con inmunoterapia.',
      complementarios: 'Valoración funcional y cardiológica previa a la cirugía o a la radioterapia torácica. Registro de la toxicidad y educación del paciente para consultar precozmente ante síntomas nuevos bajo inmunoterapia.',
      dx_diferencial: 'Ante un deterioro durante el tratamiento, separar progresión tumoral de toxicidad (neumonitis por inmunoterapia o por radioterapia), infección oportunista, enfermedad tromboembólica y pseudoprogresión.',
      tx_medico: 'Deshabituacion tabaquica, soporte nutricional, rehabilitación, control del dolor y cuidados paliativos precoces integrados desde el diagnóstico en la enfermedad avanzada. Profilaxis y tratamiento de las complicaciones óseas con agentes antirresortivos si hay metástasis.',
      tx_farmacologico: 'ESTADIOS I y II: quimioterapia adyuvante desde el IB de alto riesgo, con osimertinib adyuvante si hay mutación de EGFR e inmunoterapia adyuvante según PD-L1; la quimioinmunoterapia neoadyuvante se ha incorporado en el tumor resecable. ESTADIO III irresecable: quimiorradioterapia concurrente seguida de DURVALUMAB de consolidación. ESTADIO IV: con diana molecular, inhibidor específico de EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK o HER2; sin diana, inmunoterapia sola si la expresión de PD-L1 es alta, o combinada con quimioterapia en el resto.',
      tx_intervencionista: 'Lobectomia con disección ganglionar mediastínica como cirugía estándar, con segmentectomia en tumores periféricos pequeños seleccionados. Radioterapia estereotáctica corporal en el estadio I no operable, con resultados muy buenos. Radioterapia paliativa para el dolor óseo, la compresión medular y la hemoptisis. Broncoscopia intervencionista para la obstrucción de la via aérea central.',
      criterios_uci: 'Toxicidad grave por inmunoterapia (sobre todo neumonitis y miocarditis), complicaciones posquirúrgicas y complicaciones locorregionales agudas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante deterioro bajo inmunoterapia, pensar SIEMPRE en toxicidad inmunomediada: se trata con corticoide a dosis altas y, si no responde, con inmunosupresores, y se hace en paralelo al descarte de infección.',
      seguimiento_ambulatorio: 'Seguimiento estructurado con imagen periódica. Vigilancia de toxicidad tardía. Rehabilitación y apoyo psicológico. Cribado de un segundo primario, cuyo riesgo persiste en el superviviente.',
      pronostico: 'Ha mejorado de forma sustancial en subgrupos concretos: la supervivencia del estadio III irresecable cambio con la consolidación, y la del estadio IV con diana molecular se mide hoy en años. El estado funcional del paciente sigue siendo uno de los determinantes más potentes.',
      algoritmo: ['Llevar todo caso al comite de tumores', 'Estadios I y II: cirugía si es operable, radioterapia estereotáctica si no', 'Añadir tratamiento perioperatorio según estadio, EGFR y PD-L1', 'Estadio III irresecable: quimiorradioterapia concurrente', 'Consolidar con durvalumab tras la quimiorradioterapia', 'Estadio IV: NO tratar sin estudio molecular y PD-L1', 'Con diana molecular: inhibidor específico de primera línea', 'Sin diana: inmunoterapia sola o con quimioterapia según PD-L1', 'Cuidados paliativos precoces integrados desde el diagnóstico', 'Ante deterioro bajo inmunoterapia, pensar en toxicidad inmunomediada']
    },
    {
      nombre: 'Cáncer de pulmón microcitico',
      color: '#5b4a86',
      definicion: 'Tumor neuroendocrino de alto grado que representa alrededor del 15% de los canceres de pulmón, de crecimiento muy rápido, diseminación precoz y estrecha asociación con el tabaco.',
      fisiopatologia: 'Es un tumor neuroendocrino con inactivación casi universal de los genes supresores TP53 y RB1, sin alteraciones diana accionables como las del adenocarcinoma. Su altísima tasa de proliferación explica sus dos características clínicas: responde de forma espectacular a la quimioterapia y a la radioterapia al principio, y recae pronto con clones resistentes. Su origen neuroendocrino explica además la frecuencia de los síndromes paraneoplásicos endocrinos y neurológicos.',
      epidemiologia: 'Prácticamente exclusivo de fumadores. La mayoría de los pacientes se presentan con enfermedad extendida. Es el tumor con mayor tendencia a producir síndromes paraneoplásicos, que en ocasiones preceden en meses al diagnóstico.',
      factores_riesgo: ['Tabaquismo intenso y prolongado, presente en casi todos los casos', 'Exposición a radon', 'Exposición ocupacional a asbesto y arsénico', 'Edad avanzada', 'EPOC asociada', 'Exposición pasiva al humo del tabaco', 'Radioterapia torácica previa', 'Sexo masculino, aunque la diferencia se ha reducido', 'Antecedente familiar de cáncer de pulmón', 'Contaminación atmosferica'],
      clinica: 'Cuadro de instauración RÁPIDA, de semanas: tos, disnea, dolor torácico y síndrome constitucional marcado. Muy frecuentes las manifestaciones por masa central: síndrome de vena cava superior, disfonia y obstrucción bronquial. Y los síndromes paraneoplásicos: secreción inadecuada de hormona antidiurética con hiponatremia, síndrome de Cushing ectópico, síndrome de Lambert-Eaton y encefalitis límbica.',
      criterios_dx: 'Histología con morfología de célula pequeña e inmunohistoquímica neuroendocrina. La estadificación combina el TNM con la división clásica en enfermedad LIMITADA (abarcable en un campo de radioterapia tolerable) y EXTENDIDA, que sigue guiando la práctica.',
      laboratorio: 'Sodio (hiponatremia por secreción inadecuada de hormona antidiurética), potasio y cortisol si se sospecha Cushing ectópico, lactato deshidrogenasa como marcador pronóstico, y función hepática y renal. Anticuerpos onconeuronales si hay síndrome neurológico.',
      imagen: 'Tomografía de tórax y abdomen con contraste, tomografía por emision de positrones y RESONANCIA CEREBRAL, que es obligatoria en todos por la alta frecuencia de metástasis cerebrales, con frecuencia asintomáticas.',
      complementarios: 'Confirmación histológica rápida, porque el tumor crece en semanas y el retraso cambia el pronóstico. Valoración urgente si hay síndrome de vena cava superior u obstrucción de la via aérea.',
      dx_diferencial: 'Otros tumores neuroendocrinos (carcinoide típico y atípico, carcinoma neuroendocrino de células grandes), linfoma, carcinoma no microcitico poco diferenciado y timoma en la masa mediastínica.',
      tx_medico: 'Abandono del tabaco, soporte nutricional, control de síntomas y cuidados paliativos integrados. Corrección de la hiponatremia con restricción hídrica y, si procede, antagonista del receptor de vasopresina, sabiendo que el mejor tratamiento de la secreción inadecuada paraneoplásica es tratar el tumor.',
      tx_farmacologico: 'ENFERMEDAD LIMITADA: quimioterapia con platino y etoposido CONCURRENTE con radioterapia torácica, iniciada pronto. ENFERMEDAD EXTENDIDA: platino, etoposido e INMUNOTERAPIA, que mejoro la supervivencia frente a la quimioterapia sola. En la recaída, el tratamiento depende del intervalo libre y del estado funcional.',
      tx_intervencionista: 'La cirugía es excepcional y se limita al nódulo único sin afectación ganglionar, siempre con tratamiento sistémico posterior. Radioterapia torácica de consolidación en la enfermedad extendida que responde. IRRADIACIÓN CRANEAL PROFILÁCTICA o, como alternativa, vigilancia con resonancias seriadas en los pacientes que responden.',
      criterios_uci: 'Síndrome de vena cava superior con compromiso de la via aérea, obstrucción bronquial central, hiponatremia grave sintomática y complicaciones del tratamiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Inicio rápido del tratamiento, que en este tumor es una urgencia relativa. Vigilancia de la hiponatremia, del síndrome de lisis tumoral en los tumores voluminosos y de la neutropenia febril.',
      seguimiento_ambulatorio: 'Reevaluación frecuente por la alta tasa de recaída. Vigilancia neurológica y de los síndromes paraneoplásicos, que pueden persistir o reaparecer.',
      pronostico: 'Malo pese a la respuesta inicial. La enfermedad limitada tiene una minoría de largos supervivientes con el tratamiento combinado; la extendida se mide en meses, con mejoría modesta pero real desde la incorporación de la inmunoterapia.',
      algoritmo: ['Sospechar ante masa central de crecimiento rápido en un fumador', 'Confirmar histología SIN demora: el tumor crece en semanas', 'Estadificar con tomografía, positrones y resonancia cerebral en todos', 'Clasificar en enfermedad limitada o extendida', 'Buscar síndromes paraneoplásicos: sodio, cortisol, clínica neurológica', 'Limitada: quimioterapia con platino y etoposido concurrente con radioterapia', 'Extendida: platino, etoposido e inmunoterapia', 'Valorar radioterapia torácica de consolidación si responde', 'Irradiación craneal profiláctica o resonancias de vigilancia', 'Cuidados paliativos integrados desde el diagnóstico']
    },
    {
      nombre: 'Síndromes paraneoplásicos y complicaciones locorregionales',
      color: '#7a2f5c',
      definicion: 'Manifestaciones a distancia mediadas por sustancias o por autoinmunidad producidas por el tumor, y complicaciones derivadas del crecimiento local: síndrome de vena cava superior, tumor del sulcus superior y derrame pleural maligno.',
      fisiopatologia: 'Los síndromes paraneoplásicos endocrinos se deben a la producción ectópica de hormonas por el tumor: vasopresina en el microcitico (hiponatremia), corticotropina (Cushing ectópico) y péptido relacionado con la parathormona en el escamoso (hipercalcemia). Los neurológicos son autoinmunes: anticuerpos dirigidos contra antígenos tumorales que reaccionan de forma cruzada con el sistema nervioso, como en el Lambert-Eaton (contra el canal de calcio dependiente de voltaje) y en la encefalitis límbica. Las complicaciones locorregionales son puramente mecánicas: compresión de la cava, invasión del plexo braquial y de la cadena simpática, o siembra pleural.',
      epidemiologia: 'El microcitico es el que más síndromes paraneoplásicos produce, y estos pueden preceder al diagnóstico del tumor en meses. La hipercalcemia es típica del escamoso, y las acropaquias con osteoartropatia hipertrófica, del adenocarcinoma. El síndrome de vena cava superior tiene hoy en el cáncer de pulmón su causa más frecuente.',
      factores_riesgo: ['Carcinoma microcitico para los síndromes endocrinos y neurológicos', 'Carcinoma escamoso para la hipercalcemia', 'Adenocarcinoma para la osteoartropatia hipertrófica', 'Tumor central voluminoso para el síndrome de vena cava superior', 'Catéter venoso central o electrodo de marcapasos, que añaden trombosis', 'Localización en el vertice pulmonar para el síndrome de Pancoast', 'Afectación pleural para el derrame maligno', 'Enfermedad avanzada en general', 'Tabaquismo intenso', 'Retraso diagnóstico'],
      clinica: 'Hiponatremia con náuseas, confusión o convulsiones. Hipercalcemia con poliuria, estreñimiento, confusión y deshidratación. Debilidad proximal con hiporreflexia que MEJORA con el ejercicio repetido en el Lambert-Eaton, al revés que la miastenia. Síndrome de Pancoast: dolor de hombro y de brazo con Horner (ptosis, miosis y anhidrosis) y debilidad de la mano. Síndrome de vena cava superior: edema en esclavina, ingurgitación yugular y circulación colateral torácica, que empeoran al inclinarse.',
      criterios_dx: 'Cada síndrome tiene los suyos. Lo importante en la práctica es reconocerlos como pista de un tumor no diagnosticado: una hiponatremia hipoosmolar con orina concentrada en un fumador, o una debilidad proximal que mejora con el ejercicio, obligan a buscar un carcinoma microcitico.',
      laboratorio: 'Sodio y osmolalidades plasmática y urinaria, calcio corregido con parathormona y péptido relacionado con la parathormona, cortisol y corticotropina. Anticuerpos anti-canal de calcio dependiente de voltaje y panel onconeuronal según el cuadro neurológico.',
      imagen: 'Tomografía de tórax con contraste, que en el síndrome de vena cava superior define la causa (compresión, invasión o trombosis) y guía el tratamiento. Resonancia para el sulcus superior, que valora la invasión del plexo, de los vasos subclavios y del cuerpo vertebral. Ecografía y toracocentesis en el derrame.',
      complementarios: 'Toracocentesis diagnóstica en todo derrame acompañante: su confirmación como maligno cambia el estadio y evita cirugías inútiles. Valoración urgente por radioterapia y por radiología intervencionista en el síndrome de vena cava superior sintomático.',
      dx_diferencial: 'Hiponatremia de otras causas (diuréticos, insuficiencia suprarrenal, hipotiroidismo), hipercalcemia por metástasis óseas o por hiperparatiroidismo primario, miastenia gravis frente a Lambert-Eaton, y en el síndrome de vena cava superior, el linfoma, el timoma, la fibrosis mediastínica y la trombosis asociada a catéter.',
      tx_medico: 'El tratamiento de fondo es TRATAR EL TUMOR, que es lo que resuelve la mayoría de los síndromes paraneoplásicos. Mientras tanto: restricción hídrica y corrección prudente en la hiponatremia; hidratación intensa y bisfosfonato o denosumab en la hipercalcemia; y elevación del cabecero, corticoide y oxígeno en el síndrome de vena cava superior.',
      tx_farmacologico: 'Antagonistas del receptor de vasopresina en la secreción inadecuada refractaria. Bisfosfonatos o denosumab en la hipercalcemia. Corticoide e inmunoglobulinas o inmunosupresores en los síndromes neurológicos, con la advertencia de que estos responden peor y pueden dejar secuelas aunque el tumor se controle. Anticoagulación si hay trombosis asociada a la cava.',
      tx_intervencionista: 'ENDOPRÓTESIS VASCULAR en el síndrome de vena cava superior sintomático, que alivia en horas y hoy suele preferirse como primera medida en el paciente muy sintomático. Radioterapia como alternativa o complemento. En el tumor del sulcus superior, quimiorradioterapia seguida de cirugía en el candidato adecuado. Catéter pleural permanente o pleurodesis en el derrame maligno recurrente.',
      criterios_uci: 'Síndrome de vena cava superior con edema laríngeo o cerebral, hiponatremia grave sintomática, hipercalcemia con alteración del nivel de conciencia y obstrucción de la via aérea central.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Corrección controlada de la hiponatremia respetando los límites de velocidad para evitar la desmielinización osmótica. Vigilancia neurológica y del estado de hidratación en la hipercalcemia.',
      seguimiento_ambulatorio: 'Los síndromes endocrinos suelen mejorar con el control del tumor y reaparecer con la recaída, lo que los convierte en un marcador útil de actividad. Los neurológicos pueden persistir pese a la respuesta tumoral.',
      pronostico: 'Depende del tumor de base más que del propio síndrome, con la excepción de los neurológicos, que pueden dejar secuelas permanentes. El síndrome de vena cava superior, pese a su aparatosidad, rara vez es una urgencia vital inmediata salvo que haya edema de la via aérea.',
      algoritmo: ['Ante hiponatremia hipoosmolar en un fumador, pensar en carcinoma microcitico', 'Ante hipercalcemia con parathormona suprimida, pensar en escamoso', 'Ante debilidad proximal que MEJORA con el ejercicio, pedir anticuerpos y buscar el tumor', 'Ante dolor de hombro con Horner, hacer resonancia del vertice pulmonar', 'Ante edema en esclavina, tomografía con contraste para definir la causa', 'Puncionar todo derrame acompañante: cambia el estadio', 'Tratar el tumor, que es lo que resuelve la mayoría de los síndromes', 'Endoprótesis o radioterapia en el síndrome de vena cava superior sintomático', 'Corregir la hiponatremia despacio y la hipercalcemia con hidratación y antirresortivo', 'Catéter pleural o pleurodesis en el derrame maligno recurrente']
    },
    {
      nombre: 'Cribado y valoración funcional preoperatoria',
      color: '#3d5a73',
      definicion: 'Dos decisiones que no son diagnosticas sino de selección: a quien se le ofrece tomografía de baja dosis anual para detectar el cáncer antes de que de síntomas, y quien puede tolerar la resección pulmonar que podría curarlo.',
      fisiopatologia: 'El cribado funciona porque adelanta el diagnóstico a un estadio en el que la cirugía es curativa, y su beneficio depende de que la población cribada tenga una prevalencia suficiente. La valoración funcional se basa en que el pulmón resecado deja de participar en el intercambio: se puede estimar la función que quedara después a partir de los segmentos que se van a quitar, y ese valor predicho es lo que predice las complicaciones.',
      epidemiologia: 'El cribado esta muy infrautilizado en relación con su beneficio demostrado. Y una proporción importante de los pacientes con cáncer de pulmón potencialmente resecable tiene EPOC, precisamente porque comparten el tabaco como causa, lo que convierte la valoración funcional en una parte rutinaria del proceso.',
      factores_riesgo: ['Edad de 50 a 80 años con 20 paquetes-año o más para el cribado', 'Tabaquismo activo o abandono hace menos de 15 años', 'EPOC con obstrucción moderada o grave para el riesgo quirúrgico', 'DLCO baja, que predice complicaciones incluso con FEV1 conservado', 'Necesidad de neumonectomia frente a lobectomia', 'Edad avanzada y comorbilidad cardiovascular', 'Mal estado funcional', 'Desnutrición y pérdida de peso', 'Tabaquismo activo en el momento de la cirugía', 'Hipertensión pulmonar asociada'],
      clinica: 'Asintomático en el cribado, por definición. En la valoración preoperatoria, lo que importa es la capacidad funcional real: la disnea de esfuerzo, la distancia que camina el paciente y su capacidad para subir escaleras informan tanto como algunas pruebas.',
      criterios_dx: 'Criterios de cribado: de 50 a 80 años, 20 paquetes-año o más, fumador actual o que lo dejo hace menos de 15 años, sin condiciones que impidan un tratamiento curativo. Valoración funcional: FEV1 y DLCO predichos posoperatorios. Ver la Figura 3 de Definición.',
      laboratorio: 'Hemograma, función renal y coagulación prequirúrgicas. Gasometría si hay sospecha de hipercapnia.',
      imagen: 'Tomografía de baja dosis anual en el cribado, informada con Lung-RADS. Tomografía con contraste y positrones en la valoración prequirúrgica.',
      complementarios: 'Pruebas de función pulmonar completas con DLCO, que debe medirse SIEMPRE aunque el FEV1 sea normal, porque predice complicaciones de forma independiente. Prueba de esfuerzo cardiopulmonar en la zona intermedia. Valoración cardiológica según el riesgo. Gammagrafía de perfusión cuantificada si la distribución funcional es muy asimétrica.',
      dx_diferencial: 'No aplica.',
      tx_medico: 'DESHABITUACION TABAQUICA, que en el programa de cribado debe ofrecerse en cada visita y cuyo beneficio se suma al del propio cribado. Antes de la cirugía: optimización del tratamiento de la EPOC, rehabilitación respiratoria prequirúrgica, corrección de la anemia y soporte nutricional, medidas que reducen las complicaciones.',
      tx_farmacologico: 'Optimización broncodilatadora en el paciente obstructivo antes de la cirugía. Tratamiento sustitutivo de nicotina y fármacos de deshabituacion.',
      tx_intervencionista: 'En el paciente con función limitada: resecciones menores (segmentectomia), radioterapia estereotáctica corporal como alternativa curativa no quirúrgica, o técnicas de ablación. La cirugía mínimamente invasiva reduce las complicaciones frente a la toracotomia.',
      criterios_uci: 'Posoperatorio de neumonectomia o de resección en paciente de riesgo alto.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Posoperatorio con fisioterapia respiratoria, analgesia adecuada (que es lo que permite toser y evita la atelectasia) y movilización precoz.',
      seguimiento_ambulatorio: 'Tomografía de baja dosis anual mientras se mantengan los criterios de cribado. En el operado, seguimiento oncológico estructurado y vigilancia de un segundo primario, cuyo riesgo persiste.',
      pronostico: 'El cribado reduce la mortalidad por cáncer de pulmón en la población de riesgo. En la cirugía, la función predicha posoperatoria y el estado funcional predicen bien las complicaciones, y una valoración adecuada evita tanto operar a quien no lo tolerara como negar la cirugía a quien si podría beneficiarse.',
      algoritmo: ['Comprobar los criterios de cribado: edad, paquetes-año y años desde el abandono', 'Comprobar que el paciente podría tolerar un tratamiento curativo', 'Conversación sobre beneficios y daños, y decisión compartida documentada', 'Tomografía de baja dosis ANUAL, informada con Lung-RADS', 'Ofrecer deshabituacion tabaquica en cada visita del programa', 'En el candidato a cirugía: espirometría Y DLCO, siempre las dos', 'Calcular el FEV1 y la DLCO predichos posoperatorios', 'Ambos por encima del 60%: riesgo bajo, se puede operar', 'Entre el 30 y el 60%: prueba de esfuerzo cardiopulmonar', 'Por debajo del 30%: valorar resección menor o radioterapia estereotáctica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En este tema los errores se reparten entre dos extremos opuestos: hacer de más con el nódulo benigno y hacer de menos o tarde con el cáncer. Lo que sigue es la lista de comprobacion que evita los dos.',
    parametros: ['Ante un nódulo, buscar SIEMPRE estudios previos antes de aplicar ninguna tabla', 'Comprobar que mide 30 mm o menos: por encima es una masa y no entra en vigilancia', 'No aplicar Fleischner a menores de 35 años, inmunodeprimidos, pacientes con cáncer conocido ni a nódulos de cribado', 'El nódulo subsolido se sigue hasta 5 años, y lo que marca el cambio es el componente SÓLIDO', 'No pedir marcadores tumorales ante un nódulo: no aportan nada y generan ansiedad', 'Conocer los límites del positrones: falla en lo pequeño, en lo lepidico y en el carcinoide, y da falsos positivos en lo inflamatorio', 'CONFIRMAR con punción toda adenopatía mediastínica captante antes de negar una cirugía', 'Puncionar todo derrame acompañante: si es maligno, cambia el estadio y evita una cirugía inútil', 'En el estadio IV, NO iniciar tratamiento sistémico sin estudio molecular completo y PD-L1', 'Medir siempre la DLCO en la valoración preoperatoria, aunque el FEV1 sea normal', 'Ofrecer deshabituacion tabaquica también tras el diagnóstico: mejora tolerancia y pronóstico', 'Dejar el seguimiento del nódulo registrado y con cita cerrada: el nódulo perdido es un fallo de sistema evitable'],
    criterios_uci_general: 'Síndrome de vena cava superior con edema laríngeo o cerebral, obstrucción de la via aérea central, hemoptisis amenazante, hiponatremia grave sintomática, hipercalcemia con alteración del nivel de conciencia, y toxicidad grave por inmunoterapia, especialmente la neumonitis y la miocarditis.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica: el cáncer activo es una contraindicación para el trasplante pulmonar.',
    prevencion: 'Primaria, que es la que más vidas salva: control del tabaquismo, con diferencia la intervención más eficaz, además de la reducción de la exposición al radon domestico, al asbesto y a la contaminación. Secundaria: cribado con tomografía de baja dosis anual en la población definida, dentro de un programa estructurado y con decisión compartida. Terciaria: deshabituacion tabaquica también tras el diagnóstico, seguimiento oncológico estructurado, vigilancia de un segundo primario y cuidados paliativos precoces integrados desde el diagnóstico en la enfermedad avanzada.'
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
  'Nódulo pulmonar solitario': { definicion: [1, 6, 7], criterios_dx: [1, 6, 7], laboratorio: [1, 6, 7], tx_farmacologico: [1, 6, 7] },
  'Cáncer de pulmón no microcitico: diagnóstico y estadificación': { definicion: [2, 8, 15], criterios_dx: [2, 8, 15], laboratorio: [2, 8, 15], tx_farmacologico: [2, 8, 15] },
  'Cáncer de pulmón no microcitico: tratamiento por estadio': { definicion: [2, 9, 10, 11, 12, 13], criterios_dx: [2, 9, 10, 11, 12, 13], laboratorio: [2, 9, 10, 11, 12, 13], tx_farmacologico: [2, 9, 10, 11, 12, 13] },
  'Cáncer de pulmón microcitico': { definicion: [16, 17], criterios_dx: [16, 17], laboratorio: [16, 17], tx_farmacologico: [16, 17] },
  'Síndromes paraneoplásicos y complicaciones locorregionales': { definicion: [18], criterios_dx: [18], laboratorio: [18], tx_farmacologico: [18] },
  'Cribado y valoración funcional preoperatoria': { definicion: [3, 4, 5, 14], criterios_dx: [3, 14], laboratorio: [3, 14], tx_farmacologico: [3, 4, 5, 14] }
};
export const estigmasTitulo = 'Signos que orientan en el nódulo y en el cáncer de pulmón';
export const estigmas = [
  { s: 'Nódulo asintomático hallado por casualidad', p: 'Lo habitual', photo: null, desc: 'Es la forma de presentación del nódulo por definición. Su frecuencia ha crecido con el uso de la tomografía por otros motivos, y la mayoría son benignos: el reto es no dañar a esa mayoría buscando la minoría maligna.' },
  { s: 'Calcificación central, laminar o en palomita de maiz', p: 'Muy tranquilizadora', photo: null, desc: 'Los cuatro patrones benignos son el central, el laminar concentrico, el difuso y el de palomita de maiz del hamartoma. Las calcificaciones EXCÉNTRICAS o punteadas no tranquilizan: pueden aparecer en tumores que engloban un granuloma previo.' },
  { s: 'Grasa en el interior del nódulo', p: 'Prácticamente diagnóstica', photo: null, desc: 'La presencia de grasa medida en unidades Hounsfield es casi diagnóstica de hamartoma y evita cualquier otro estudio. Es uno de los pocos hallazgos radiológicos que cierran un caso por si solos.' },
  { s: 'Bordes espiculados o con corona radiada', p: 'Sugieren malignidad', photo: null, desc: 'Traducen la reacción desmoplasica y la infiltración del parénquima vecino. Junto con el tamaño y la localización en lóbulo superior, son las características morfológicas que más suben la probabilidad de malignidad.' },
  { s: 'Crecimiento respecto a estudios previos', p: 'El dato más potente', photo: null, desc: 'Ninguna característica morfológica pesa tanto como el crecimiento documentado. Por eso el primer gesto ante cualquier nódulo es buscar imagenes antiguas, incluidas las de otros hospitales y las de tomografías abdominales que incluyan las bases.' },
  { s: 'Neumonías de repetición en el mismo lóbulo', p: 'Sospecha de obstrucción', photo: null, desc: 'Sugieren obstrucción bronquial por tumor endobronquial o por compresión extrínseca. Es una de las presentaciones que más se retrasan, porque cada episodio se trata como una neumonía más y mejora con antibiótico.' },
  { s: 'Disfonia de nueva aparición', p: 'Afectación recurrencial', photo: null, desc: 'Traduce la parálisis de la cuerda vocal izquierda por afectación del nervio laríngeo recurrente en su recorrido bajo el arco aórtico. En un fumador con disfonia persistente hay que mirar el tórax, no solo la laringe.' },
  { s: 'Síndrome de Horner con dolor de hombro', p: 'Tumor del sulcus superior', photo: null, desc: 'Ptosis, miosis y anhidrosis por afectación de la cadena simpática cervical, junto con dolor de hombro y de brazo y debilidad de la mano por invasión del plexo braquial. Se confunde con una patología del hombro durante meses.' },
  { s: 'Edema en esclavina con circulación colateral', p: 'Vena cava superior', photo: null, desc: 'Edema de cara, cuello y brazos con ingurgitación yugular y venas dilatadas en el tórax, que empeoran al inclinarse hacia delante. Hoy su causa más frecuente es el cáncer de pulmón, seguido del linfoma y de la trombosis por catéter.' },
  { s: 'Acropaquias con dolor en las piernas', p: 'Osteoartropatia hipertrófica', photo: null, desc: 'Acropaquias con periostitis dolorosa de huesos largos, típica del adenocarcinoma. Puede preceder al diagnóstico y mejora al tratar el tumor. Su aparición en un fumador obliga a hacer una imagen de tórax.' },
  { s: 'Debilidad proximal que mejora con el ejercicio', p: 'Lambert-Eaton', photo: null, desc: 'Al revés que en la miastenia gravis, aquí la fuerza y los reflejos MEJORAN tras la contracción repetida. Se asocia al carcinoma microcitico y puede preceder al tumor en meses o años, de modo que obliga a buscarlo y a repetir la búsqueda.' },
  { s: 'Hiponatremia hipoosmolar con orina concentrada', p: 'SIADH paraneoplásico', photo: null, desc: 'Típica del carcinoma microcitico. Es una de las formas en que este tumor se presenta antes de dar síntomas respiratorios, y en un fumador obliga a completar el estudio con una imagen de tórax.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Guías de Fleischner para el nódulo incidental (calculadora disponible)': [1],
  'Probabilidad de malignidad del nódulo (calculadora disponible)': [6, 7],
  'Criterios de cribado con tomografía de baja dosis (calculadora disponible)': [3, 4, 5],
  'Clasificación TNM, novena edicion': [8, 2],
  'Valoración funcional preoperatoria (calculadora disponible)': [14],
  'Clasificación histológica': [2, 17],
  'Estadificación del carcinoma microcitico': [17]
};
export const escalaCalc = {
  'Guías de Fleischner para el nódulo incidental (calculadora disponible)': 'fleischner',
  'Probabilidad de malignidad del nódulo (calculadora disponible)': 'riesgo-nodulo',
  'Criterios de cribado con tomografía de baja dosis (calculadora disponible)': 'cribado-pulmon',
  'Valoración funcional preoperatoria (calculadora disponible)': 'funcion-preoperatoria'
};
export const compGroups = [
  { name: 'El hallazgo', items: ['Nódulo pulmonar solitario'] },
  { name: 'El cáncer no microcitico', items: ['Cáncer de pulmón no microcitico: diagnóstico y estadificación', 'Cáncer de pulmón no microcitico: tratamiento por estadio'] },
  { name: 'Lo demás', items: ['Cáncer de pulmón microcitico', 'Síndromes paraneoplásicos y complicaciones locorregionales', 'Cribado y valoración funcional preoperatoria'] }
];
export const complicacionesIntro = 'La primera ficha es el nódulo, que casi siempre es benigno y donde el reto es no hacer daño. Las dos siguientes son el cáncer no microcitico, separado en diagnóstico y estadificación por un lado y tratamiento por otro, porque son dos momentos con lógicas distintas. La cuarta es el microcitico, que se maneja aparte porque se comporta de otra manera. La quinta recoge lo que el tumor hace a distancia y en su vecindad, que a menudo es lo que lleva al paciente a consultar. Y la última son las dos decisiones de selección del tema: a quien se criba y quien puede operarse.';
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
  root: { title: 'NÓDULO Y CÁNCER DE PULMÓN', color: '#8c5a2e', target: 'definicion' },
  branches: [
    { title: 'EL NÓDULO', sub: 'Casi siempre benigno', color: '#8c5a2e', target: 'complicaciones', leaves: [
      { title: 'Buscar estudios previos', sub: 'La estabilidad resuelve el caso', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Sólido frente a subsolido', sub: 'El subsolido se sigue 5 años', color: '#6b4a7a', target: 'clasificacion' },
      { title: 'Probabilidad de malignidad', sub: 'Tres franjas, tres conductas', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Límites del positrones', sub: 'Falla en lo pequeño y lo lepidico', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'EL CÁNCER', sub: 'Estirpe, estadio y molecula', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Confirmar el mediastino', sub: 'Con punción, no con positrones', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Puncionar el derrame', sub: 'Cambia el estadio', color: '#7a2f5c', target: 'complicaciones' },
      { title: 'Estudio molecular', sub: 'Antes de tratar el estadio IV', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Microcitico', sub: 'Otra enfermedad, otro manejo', color: '#5b4a86', target: 'complicaciones' }
    ] },
    { title: 'SELECCIONAR', sub: 'A quien cribar y a quien operar', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Cribado con baja dosis', sub: '50 a 80 años y 20 paquetes-año', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Deja de cribarse', sub: 'A los 15 años sin fumar', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Medir siempre la DLCO', sub: 'Aunque el FEV1 sea normal', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Función predicha posoperatoria', sub: 'Por encima del 60%: opera', color: '#6b4a2e', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [2, 18], no_invasivos: [1, 3, 7, 14], imagen: [1, 15] };
export const clasificacionCite = [1, 3, 8, 14];
export const seguimientoCite = [1, 2, 15];
