// topics/enfermedad-cerebrovascular/content.js: Enfermedad Cerebrovascular (ECV isquémico +
// hemorragia intracraneal/subaracnoidea). Estructura idéntica al contrato del motor (misma forma
// que sepsis/cirrosis-hepatica). Sigue la convención NUEVA de figuras (agosto 2026, ver memoria
// residentemed-r1-kardex): toda tabla/imagen/video se inserta EN LÍNEA dentro del campo que la
// menciona, vía figBlock()/videoBlock(), numerada "Tabla N"/"Imagen N"/"Video N" con conteo
// continuo POR TIPO a lo largo de TODO el tema (no por tarjeta): no se usa el mecanismo
// `figuras{}` + `figurasClasificacion` de temas anteriores.

export const meta = {
  id: 'enfermedad-cerebrovascular',
  titulo: 'Enfermedad Cerebrovascular',
  subtitulo: 'Módulo 4 · Medicina Interna',
  accent: '#4a2d5e',
  accentDim: '#7a5a92'
};

export const definicionText = `<p style="margin:0 0 14px;">La enfermedad cerebrovascular (ECV) es un síndrome clínico caracterizado por el desarrollo súbito de un déficit neurológico focal (o global, si compromete el estado de consciencia) atribuible a una alteración aguda del flujo sanguíneo cerebral, de duración mayor a 24 horas o con evidencia de lesión aguda en neuroimagen. Se divide en dos grandes mecanismos con manejo inicial radicalmente distinto: el ECV isquémico (~85% de los casos), por oclusión arterial que interrumpe el aporte de oxígeno y glucosa a un territorio cerebral, y el ECV hemorrágico (~15%), por extravasación de sangre hacia el parénquima cerebral (hemorragia intracerebral) o el espacio subaracnoideo (hemorragia subaracnoidea), casi siempre por rotura vascular. Ambos comparten una premisa fundamental ("el tiempo es cerebro"), pero exigen conductas opuestas: la neuroimagen urgente para distinguirlos, dado que la clínica sola no es confiable para diferenciarlos, es el primer paso obligado antes de cualquier terapia, porque la intervención que salva tejido en uno (la reperfusión) puede ser catastrófica en el otro.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> Segunda causa de muerte y primera causa de discapacidad adquirida en el adulto a nivel mundial. Del total de ECV, ~85% es isquémico y ~15% hemorrágico (10-15% hemorragia intracerebral, ~5% hemorragia subaracnoidea), pero esa proporción se invierte en morbimortalidad: el hemorrágico concentra una fracción desproporcionada de las muertes y la discapacidad grave pese a ser menos frecuente. La incidencia aumenta de forma exponencial con la edad en el isquémico y en la hemorragia intracerebral, mientras que la hemorragia subaracnoidea afecta a una población más joven (pico 40-60 años) y la trombosis de senos venosos predomina en mujeres jóvenes (embarazo, puerperio, anticonceptivos con estrógenos).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>ECV isquémico</strong>, subclasificado por mecanismo según los criterios TOAST: aterotrombótico de gran vaso, cardioembólico (la fibrilación auricular es la causa más frecuente), oclusión de pequeño vaso (lacunar), otra etiología determinada (disección, vasculitis, estados protrombóticos), o indeterminada.</li>
    <li><strong>Trombosis de senos venosos cerebrales</strong>, una categoría aparte: mecanismo isquémico pero de origen venoso, no arterial.</li>
    <li><strong>Hemorragia intracerebral (HIC)</strong>, intraparenquimatosa, típicamente por hipertensión arterial crónica en localización profunda (ganglios basales, tálamo, protuberancia, cerebelo) o por angiopatía amiloide cerebral en el anciano (localización lobar).</li>
    <li><strong>Hemorragia subaracnoidea (HSA)</strong>, extraaxial, en la gran mayoría de los casos por rotura de un aneurisma sacular.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">Modificables (los que más impactan la prevención):</p>
  <ul style="margin:0 0 8px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Hipertensión arterial: el más importante, compartido entre isquémico y hemorrágico</li>
    <li>Fibrilación auricular</li>
    <li>Diabetes mellitus y dislipidemia</li>
    <li>Tabaquismo y consumo de alcohol</li>
    <li>Estenosis carotídea</li>
    <li>Factores hormonales o protrombóticos (embarazo, puerperio, anticonceptivos con estrógenos), específicos de la trombosis venosa</li>
  </ul>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">No modificables:</p>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada</li>
    <li>Sexo: predominio femenino en la incidencia global acumulada por mayor esperanza de vida; predominio masculino específico en la hemorragia subaracnoidea hasta la menopausia</li>
    <li>Ascendencia: mayor incidencia de hemorragia intracerebral en poblaciones asiática y afrodescendiente</li>
    <li>Predisposición genética: enfermedad renal poliquística y síndrome de Ehlers-Danlos vascular para el aneurisma intracraneal</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> En el isquémico, la oclusión arterial interrumpe el aporte de oxígeno y glucosa, generando un núcleo de infarto irreversible rodeado de una zona de penumbra hipoperfundida pero salvable durante horas gracias a la circulación colateral: ahí actúan la trombólisis y la trombectomía. En el hemorrágico, la sangre extravasada actúa por un mecanismo doble: el efecto de masa directo sobre el tejido circundante, y una cascada secundaria de neurotoxicidad por los productos de degradación de la hemoglobina y edema perilesional que se prolonga días después del sangrado inicial, sin una ventana de reperfusión equivalente que ofrecer.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> El síndrome depende de la localización (territorios vasculares y síndromes clásicos, detallados en Diagnóstico): el isquémico produce déficits "negativos" de instalación súbita (pérdida de función), mientras que el hemorrágico añade con frecuencia cefalea, vómito y deterioro progresivo del estado de alerta. Ninguno de los dos patrones es, por sí solo, lo bastante específico para diferenciarlos sin neuroimagen. El detalle operativo de cada entidad y de sus complicaciones (diagnóstico diferencial específico, dosis, criterios de UCI, algoritmo) se desarrolla como recurso de consulta en la sección Complicaciones.</p>`;

export const bibliografia = [
  'Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke. Stroke. 2019;50(12):e344-e418.',
  'Greenberg SM, Ziai WC, Cordonnier C, et al. 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2022;53(7):e282-e361.',
  'Hoh BL, Ko NU, Amin-Hanjani S, et al. 2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2023;54(7):e314-e370.',
  'Cook AM, Morgan Jones G, Hawryluk GWJ, et al. Guidelines for the Acute Treatment of Cerebral Edema in Neurocritical Care Patients. Neurocrit Care. 2020;32(3):647-666.',
  'Adams HP Jr, Bendixen BH, Kappelle LJ, et al. Classification of subtype of acute ischemic stroke. Definitions for use in a multicenter clinical trial (TOAST). Stroke. 1993;24(1):35-41.',
  'Johnston SC, Rothwell PM, Nguyen-Huynh MN, et al. Validation and refinement of scores to predict very early stroke risk after transient ischaemic attack. Lancet. 2007;369(9558):283-292.',
  'Barber PA, Demchuk AM, Zhang J, Buchan AM. Validity and reliability of a quantitative computed tomography score in predicting outcome of hyperacute stroke before thrombolytic therapy (ASPECTS). Lancet. 2000;355(9216):1670-1674.',
  'Bamford J, Sandercock P, Dennis M, Burn J, Warlow C. Classification and natural history of clinically identifiable subtypes of cerebral infarction. Lancet. 1991;337(8756):1521-1526.',
  'van Swieten JC, Koudstaal PJ, Visser MC, Schouten HJ, van Gijn J. Interobserver agreement for the assessment of handicap in stroke patients. Stroke. 1988;19(5):604-607.',
  'Johnston KC, Bruno A, Pauls Q, et al. Intensive vs Standard Treatment of Hyperglycemia and Functional Outcome in Patients With Acute Ischemic Stroke: The SHINE Randomized Clinical Trial. JAMA. 2019;322(4):326-335.',
  'Nogueira RG, Jadhav AP, Haussen DC, et al. Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct (DAWN). N Engl J Med. 2018;378(1):11-21.',
  'Albers GW, Marks MP, Kemp S, et al. Thrombectomy for Stroke at 6 to 16 Hours with Selection by Perfusion Imaging (DEFUSE 3). N Engl J Med. 2018;378(8):708-718.',
  'Johnston SC, Easton JD, Farrant M, et al. Clopidogrel and Aspirin in Acute Ischemic Stroke and High-Risk TIA (POINT). N Engl J Med. 2018;379(3):215-225.',
  'Wang Y, Wang Y, Zhao X, et al. Clopidogrel with Aspirin in Acute Minor Stroke or Transient Ischemic Attack (CHANCE). N Engl J Med. 2013;369(1):11-19.',
  'Anderson CS, Heeley E, Huang Y, et al. Rapid Blood-Pressure Lowering in Patients with Acute Intracerebral Hemorrhage (INTERACT2). N Engl J Med. 2013;368(25):2355-2365.',
  'Qureshi AI, Palesch YY, Barsan WG, et al. Intensive Blood-Pressure Lowering in Patients with Acute Cerebral Hemorrhage (ATACH-2). N Engl J Med. 2016;375(11):1033-1043.',
  'Mendelow AD, Gregson BA, Rowan EN, et al. Early surgery versus initial conservative treatment in patients with spontaneous supratentorial lobar intracerebral haematomas (STICH II). Lancet. 2013;382(9890):397-408.',
  'Hanley DF, Thompson RE, Rosenblum M, et al. Efficacy and safety of minimally invasive surgery with thrombolysis in intracerebral haemorrhage evacuation (MISTIE III). Lancet. 2019;393(10175):1021-1032.',
  'Molyneux A, Kerr R, Stratton I, et al. International Subarachnoid Aneurysm Trial (ISAT) of neurosurgical clipping versus endovascular coiling in 2143 patients with ruptured intracranial aneurysms: a randomised trial. Lancet. 2002;360(9342):1267-1274.',
  'Pollack CV Jr, Reilly PA, van Ryn J, et al. Idarucizumab for Dabigatran Reversal: Full Cohort Analysis (RE-VERSE AD). N Engl J Med. 2017;377(5):431-441.',
  'Connolly SJ, Crowther M, Eikelboom JW, et al. Full Study Report of Andexanet Alfa for Bleeding Associated with Factor Xa Inhibitors (ANNEXA-4). N Engl J Med. 2019;380(14):1326-1335.',
  'Allen GS, Ahn HS, Preziosi TJ, et al. Cerebral arterial spasm: a controlled trial of nimodipine in patients with subarachnoid hemorrhage. N Engl J Med. 1983;308(11):619-624.',
  'Diringer MN, Bleck TP, Claude Hemphill J 3rd, et al. Critical care management of patients following aneurysmal subarachnoid hemorrhage: recommendations from the Neurocritical Care Society Multidisciplinary Consensus Conference. Neurocrit Care. 2011;15(2):211-240.',
  'Frontera JA, Claassen J, Schmidt JM, et al. Prediction of symptomatic vasospasm after subarachnoid hemorrhage: the modified Fisher scale. Neurosurgery. 2006;59(1):21-27.',
  'Hemphill JC 3rd, Bonovich DC, Besmertis L, Manley GT, Johnston SC. The ICH Score: a simple, reliable grading scale for intracerebral hemorrhage. Stroke. 2001;32(4):891-897.',
  'Report of World Federation of Neurological Surgeons Committee on a Universal Subarachnoid Hemorrhage Grading Scale. J Neurosurg. 1988;68(6):985-986.',
  'Hunt WE, Hess RM. Surgical risk as related to time of intervention in the repair of intracranial aneurysms. J Neurosurg. 1968;28(1):14-20.',
  'Saposnik G, Barinagarrementeria F, Brown RD Jr, et al. Diagnosis and Management of Cerebral Venous Thrombosis: A Statement for Healthcare Professionals From the American Heart Association/American Stroke Association. Stroke. 2011;42(4):1158-1192.'
];

// Reproduce el marcado de .modal-figure (mismo helper que ya usa topics/sepsis/content.js) para
// insertar tablas/diagramas EN LÍNEA justo debajo del párrafo que los menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}
// Embebe un video de YouTube (mismo patrón que exploracion-cardiovascular/exploracion-respiratoria).
function videoBlock(label, titulo, youtubeId, fuente) {
  return figBlock(label, titulo, `<div style="width:100%;max-width:480px;aspect-ratio:16/9;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);overflow:hidden;">
    <iframe src="https://www.youtube.com/embed/${youtubeId}" title="${titulo}" style="width:100%;height:100%;border:0;display:block;" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
  </div>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">${fuente}</p>`);
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'ECV isquémico',
      tituloB: 'ECV hemorrágico',
      compensada: `Déficit neurológico focal de instalación súbita (segundos a minutos), con síntomas "negativos" (pérdida de función: debilidad, adormecimiento, pérdida del habla, del campo visual) más que "positivos". El mnemotecnico FAST (Face-Arm-Speech-Time) resume el tamizaje prehospitalario: asimetría facial, debilidad de un brazo, alteración del habla, hora de inicio. El patrón temporal orienta la etiología: déficit máximo desde el inicio sugiere embolia; instalación escalonada sugiere trombosis in situ o infarto lacunar. A diferencia del hemorrágico, típicamente NO hay cefalea intensa, vómito ni pérdida de consciencia precoz: si estos están presentes, replantear el diagnóstico. El síndrome depende del territorio vascular afectado.${figBlock('Imagen 1', 'Territorios vasculares cerebrales y síndromes clínicos típicos', `
      <svg viewBox="0 0 300 290" role="img" aria-labelledby="terr-title terr-desc" style="width:100%;max-width:300px;display:block;margin:0 auto;">
        <title id="terr-title">Territorios vasculares cerebrales</title>
        <desc id="terr-desc">Corte axial esquemático de un hemisferio a nivel de los ganglios basales, dividido en tres sectores: territorio de la arteria cerebral anterior (ACA), arteria cerebral media (ACM) y arteria cerebral posterior (ACP).</desc>
        <path d="M150,140 L54.7,85 A110,110 0 0 1 245.3,85 Z" fill="#3d5a73" fill-opacity="0.28" stroke="var(--line)" stroke-width="1.5"/>
        <path d="M150,140 L245.3,85 A110,110 0 0 1 112.4,243.4 Z" fill="#8c3a34" fill-opacity="0.28" stroke="var(--line)" stroke-width="1.5"/>
        <path d="M150,140 L112.4,243.4 A110,110 0 0 1 54.7,85 Z" fill="#3f6b52" fill-opacity="0.28" stroke="var(--line)" stroke-width="1.5"/>
        <text x="150" y="58" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">ACA</text>
        <text x="218" y="152" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">ACM</text>
        <text x="128" y="212" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">ACP</text>
        <text x="150" y="16" text-anchor="middle" font-size="11" fill="var(--ink-faint)">Anterior</text>
        <text x="150" y="278" text-anchor="middle" font-size="11" fill="var(--ink-faint)">Posterior</text>
      </svg>
      <div class="table-wrap" style="margin-top:10px;">
        <table>
          <thead><tr><th>Territorio</th><th>Déficit clínico típico</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">ACA</td><td>Hemiparesia/hemihipoestesia de predominio crural (pierna &gt; brazo), abulia, incontinencia urinaria, reflejo de prensión (grasping).</td></tr>
            <tr><td class="figure-org">ACM (~2/3 de los ECV isquémicos)</td><td>Hemiparesia/hemihipoestesia faciobraquial (cara y brazo &gt; pierna); afasia si el hemisferio afectado es el dominante, o heminegligencia/anosognosia si es el no dominante; hemianopsia homónima; desviación oculocefálica hacia el lado de la lesión.</td></tr>
            <tr><td class="figure-org">ACP</td><td>Hemianopsia homónima contralateral que respeta la visión macular; alexia sin agrafia si afecta el esplenio del cuerpo calloso (hemisferio dominante); déficit sensitivo talámico si compromete ramas talamoperforantes.</td></tr>
            <tr><td class="figure-org">Circulación posterior (tronco/cerebelo)</td><td>Síndromes cruzados (déficit de par craneal ipsilateral + déficit motor/sensitivo contralateral), vértigo, ataxia, diplopía, disartria, disfagia: sospechar ante las "5 D": dizziness, diplopia, dysarthria, dysphagia, dystaxia.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La ACM es la más afectada por su calibre y por ser la continuación directa de la carótida interna; explica la mayoría de los ECV isquémicos de circulación anterior.</div>`)}`,
      descompensada: 'Además del déficit focal (que empeora progresivamente en minutos-horas, a diferencia del isquémico), predominan cefalea intensa de instalación súbita, vómito y disminución del estado de alerta. En la hemorragia intracerebral (HIC), el síndrome depende de la localización (putaminal, talámica, protuberancial, cerebelosa). En la hemorragia subaracnoidea (HSA), el síntoma cardinal es la cefalea "en trueno" (la peor de la vida del paciente, con pico de intensidad en segundos), con o sin pérdida transitoria de consciencia y signos meníngeos (rigidez de nuca, Kernig, Brudzinski); hasta 20-40% refieren una cefalea centinela (sangrado leve previo) en los días-semanas previos, que pasa desapercibida si no se interroga de forma dirigida. Ni la HIC ni la HSA se distinguen del isquémico de forma confiable solo por la clínica: la neuroimagen urgente es obligatoria en ambos sentidos. Considerar siempre mimics de ECV: hipoglucemia, crisis convulsiva con parálisis de Todd, migraña con aura, encefalopatía hipertensiva, trastorno funcional.'
    },
    laboratorio: [
      { prueba: 'Glucosa capilar inmediata', utilidad: 'Descarta hipoglucemia, el mimic de ECV más frecuente y corregible; se realiza ANTES que cualquier otro estudio, incluso antes de la TC en la valoración prehospitalaria.' },
      { prueba: 'Biometría hemática completa', utilidad: 'Descarta trombocitopenia (<100,000/µL contraindica trombólisis) y policitemia como causa/factor agravante.' },
      { prueba: 'INR, TP, TTPa', utilidad: 'Fundamental para elegibilidad de trombólisis (INR >1.7 o uso de anticoagulante oral directo en las últimas 48h contraindica salvo reversión) y para el manejo de la hemorragia intracerebral asociada a anticoagulación.' },
      { prueba: 'Electrolitos y función renal', utilidad: 'Necesarios antes de la angio-TC con contraste y para el ajuste de fármacos; el sodio es especialmente relevante en la HSA (síndrome perdedor de sal vs. SIADH).' },
      { prueba: 'Perfil lipídico y HbA1c', utilidad: 'Estratificación del riesgo aterosclerótico y guía de la prevención secundaria (estatina de alta intensidad, control metabólico).' },
      { prueba: 'Troponina y ECG de 12 derivaciones', utilidad: 'Descarta infarto agudo de miocardio concurrente y detecta arritmia como fibrilación auricular de nuevo diagnóstico (fuente cardioembólica) o cambios de "stroke-heart" (QT prolongado, inversión de T).' }
    ],
    no_invasivos: [
      { metodo: 'NIHSS', interpretacion: 'Cuantifica la gravedad neurológica; guía elegibilidad terapéutica y pronóstico.', cutoff: '0-42' },
      { metodo: 'ABCD2', interpretacion: 'Estratifica el riesgo de ECV a 2 días tras un ataque isquémico transitorio (AIT).', cutoff: '0-7' },
      { metodo: 'Escala de Glasgow', interpretacion: 'Ya descrita como escala de exploración en Exploración Neurológica; se usa aquí como parámetro de vigilancia seriada, especialmente en hemorragia y edema maligno.', cutoff: '3-15' },
      { metodo: 'Escalas prehospitalarias (Cincinnati, FAST-ED)', interpretacion: 'Tamizaje de campo para activar el código ictus antes de la llegada al hospital.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'TC simple de cráneo sin contraste', hallazgos: 'Primera línea siempre, en minutos: excluye hemorragia antes de cualquier terapia de reperfusión. Regla de oro: no hay tratamiento de reperfusión sin TC negativa para sangre. Puede ser normal en el ECV isquémico hiperagudo.' },
      { modalidad: 'Angio-TC de cabeza y cuello', hallazgos: 'Identifica oclusión de gran vaso (candidato a trombectomía), disección arterial y estenosis carotídea; el "signo de la mancha" (spot sign) en la hemorragia intracerebral predice expansión del hematoma.' },
      { modalidad: 'TC de perfusión', hallazgos: 'Cuantifica el núcleo infartado (irreversible) frente a la penumbra salvable; esencial para seleccionar candidatos a trombectomía en la ventana extendida (6-24h).' },
      { modalidad: 'RM con secuencia de difusión (DWI) / FLAIR', hallazgos: 'Más sensible que la TC para el infarto hiperagudo (minutos); el desajuste DWI-FLAIR ayuda a estimar el tiempo de evolución cuando la hora de inicio se desconoce ("wake-up stroke").' },
      { modalidad: 'Angiografía por sustracción digital (DSA)', hallazgos: 'Estándar de oro para caracterizar aneurismas antes de asegurarlos y para la trombectomía misma.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La gravedad y el pronóstico del ECV se cuantifican con escalas específicas según el momento del cuadro: al ingreso del isquémico (NIHSS, ABCD2 para el AIT, ASPECTS y TOAST para clasificarlo), en la hemorragia (Hunt y Hess/WFNS y Fisher/Fisher modificada para la HSA, ICH Score para la HIC), y al egreso para medir discapacidad (escala de Rankin modificada). Antes de aplicar cualquier escala pronóstica, conviene ubicar el síndrome clínico dentro de la clasificación anatomoclínica de Bamford, que orienta el territorio probable incluso antes de la neuroimagen.${figBlock('Tabla 1', 'Clasificación anatomoclínica de Bamford/OCSP', `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Síndrome</th><th>Criterios</th><th>Frecuencia</th><th>Mortalidad a 1 año</th></tr></thead>
        <tbody>
          <tr><td class="figure-org">TACS (circulación anterior total)</td><td>Los 3: disfunción cortical superior (afasia/negligencia/discalculia) + hemianopsia homónima + déficit motor/sensitivo de al menos 2 de cara/brazo/pierna</td><td>~15%</td><td><span class="figure-tag fail">~60%</span></td></tr>
          <tr><td class="figure-org">PACS (circulación anterior parcial)</td><td>2 de los 3 criterios de TACS, disfunción cortical superior aislada, o déficit motor/sensitivo más restringido</td><td>~35%</td><td><span class="figure-tag dys">~16%</span></td></tr>
          <tr><td class="figure-org">LACS (síndrome lacunar)</td><td>Déficit motor puro, sensitivo puro, sensitivomotor, hemiparesia-ataxia o disartria-mano torpe; SIN disfunción cortical superior ni hemianopsia</td><td>~25%</td><td>~10%</td></tr>
          <tr><td class="figure-org">POCS (circulación posterior)</td><td>Déficit de par craneal ipsilateral + déficit contralateral, déficit motor/sensitivo bilateral, alteración de la mirada conjugada, disfunción cerebelosa aislada, o hemianopsia aislada</td><td>~25%</td><td>~19%</td></tr>
        </tbody>
      </table>
    </div>
    <div class="figure-grade-box">Clasificación clínica de Bamford (Oxfordshire Community Stroke Project): orienta el territorio probable ANTES de la neuroimagen, útil junto a la cama del paciente.</div>`)}`,
    escalas: [
      { nombre: 'NIHSS', componentes: 'Nivel de conciencia (respuesta, orientación, órdenes), mirada, campos visuales, paresia facial, fuerza de las 4 extremidades, ataxia, sensibilidad, lenguaje, disartria, extinción/inatención.', formula: 'Suma de 15 ítems, 0-42', interpretacion: `0 sin síntomas; 1-4 leve; 5-15 moderado; 16-20 moderado-grave; 21-42 grave. NIHSS ≥6 se asocia a mayor probabilidad de oclusión de gran vaso; puntajes muy altos (&gt;25) son criterio relativo de exclusión para trombólisis IV.${videoBlock('Video 1', 'NIH Stroke Scale: instrucción básica de cada ítem', 'gzHuNvDhVwE', 'National Institute of Neurological Disorders and Stroke (NINDS), distribuido por PublicResourceOrg: NIH Stroke Scale Training, Parte 2: Instrucción básica.')}` },
      { nombre: 'ABCD2', componentes: 'Edad, presión arterial, características clínicas, duración de los síntomas, diabetes.', formula: 'Suma de 5 componentes, 0-7', interpretacion: '0-3 riesgo bajo (~1% de ECV a 2 días); 4-5 riesgo moderado (~4%); 6-7 riesgo alto (~8%). Guía si se requiere observación urgente hospitalaria o seguimiento ambulatorio estrecho tras un AIT.' },
      { nombre: 'ASPECTS', componentes: 'Diez regiones del territorio de la ACM en la TC simple: caudado, lentiforme, cápsula interna, ínsula, y M1-M6 (corteza a nivel ganglionar y supraganglionar).', formula: '10 menos 1 punto por cada región con hipodensidad/pérdida de diferenciación gris-blanca temprana', interpretacion: `10 = TC normal. ≥6 identifica candidatos razonables a trombectomía; &lt;6 sugiere infarto ya extenso, con mayor riesgo de transformación hemorrágica y peor respuesta a la reperfusión.${figBlock('Imagen 2', 'TC simple: infarto isquémico establecido (hipodensidad)', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Infarction.svg" alt="TC simple con infarto establecido de la ACM: hipodensidad del hemisferio afectado" style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">TC simple sin contraste: infarto ya establecido en el territorio de la ACM, con hipodensidad del parénquima afectado frente al hemisferio sano. Este es el hallazgo que puntúa el ASPECTS. Lucien Monfils / W2eK, Wikimedia Commons, CC BY-SA 3.0.</p>`)}${figBlock('Tabla 2', 'Grid ASPECTS (10 regiones)', `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;max-width:420px;margin:0 auto;">
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 4px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">Caudado</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 4px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">Lentiforme</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 4px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">Cápsula interna</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 4px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">Ínsula</div>
      </div>
      <div style="text-align:center;font-size:10.5px;color:var(--ink-faint);margin:6px 0;">Nivel de ganglios basales</div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;max-width:420px;margin:10px auto 0;">
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 2px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">M1</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 2px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">M2</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 2px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">M3</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 2px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">M4</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 2px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">M5</div>
        <div style="border:1px solid var(--line);border-radius:6px;padding:8px 2px;text-align:center;font-size:11.5px;color:var(--ink);background:var(--panel2);">M6</div>
      </div>
      <div style="text-align:center;font-size:10.5px;color:var(--ink-faint);margin:6px 0 10px;">Nivel supraganglionar (M4-M6, superiores a M1-M3 respectivamente)</div>
      <div class="figure-grade-box">Se resta 1 punto por cada una de las 10 regiones con hipodensidad o pérdida de la diferenciación gris-blanca temprana.</div>`)}` },
      { nombre: 'TOAST', componentes: 'Aterotrombótico de gran vaso, cardioembólico, oclusión de pequeño vaso (lacunar), otra etiología determinada (disección, vasculitis, estados protrombóticos), o indeterminada (dos o más causas posibles, estudio negativo, o estudio incompleto).', formula: 'Clasificación etiológica, sin puntaje numérico', interpretacion: 'No mide gravedad sino mecanismo; guía el estudio complementario y la prevención secundaria dirigida (p. ej. anticoagulación si cardioembólico, endarterectomía si aterotrombótico carotídeo sintomático).' },
      { nombre: 'Escala de Rankin modificada (mRS)', componentes: 'Grado de discapacidad global, de 0 (sin síntomas) a 6 (muerte).', formula: 'Escala ordinal, 0-6', interpretacion: '0-2 independiente/buen resultado funcional; 3-5 dependencia creciente; 6 muerte. Es el desenlace primario estándar en los ensayos clínicos de ECV, medido típicamente a los 90 días.' },
      { nombre: 'Hunt y Hess / WFNS', componentes: 'Nivel de consciencia y déficit motor al ingreso en la HSA.', formula: 'Hunt-Hess: 5 grados clínicos (I-V). WFNS: combina Glasgow + déficit motor, también 5 grados.', interpretacion: `Correlaciona con la mortalidad quirúrgica y guía el momento de la intervención; el WFNS es más objetivo y reproducible (basado en Glasgow), y es el estándar actual en ensayos clínicos.${figBlock('Tabla 3', 'Hunt-Hess/WFNS y Fisher/Fisher modificada', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Hunt y Hess</th><th>Cuadro clínico</th><th>WFNS equivalente</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">I</td><td>Asintomático o cefalea leve, rigidez de nuca leve</td><td>I (Glasgow 15, sin déficit motor)</td></tr>
            <tr><td class="figure-org">II</td><td>Cefalea moderada-severa, rigidez de nuca, sin déficit salvo parálisis de par craneal</td><td>II (Glasgow 13-14, sin déficit motor)</td></tr>
            <tr><td class="figure-org">III</td><td>Somnolencia, confusión, o déficit focal leve</td><td>III (Glasgow 13-14, CON déficit motor)</td></tr>
            <tr><td class="figure-org">IV</td><td>Estupor, hemiparesia moderada-severa, posible rigidez de descerebración temprana</td><td>IV (Glasgow 7-12)</td></tr>
            <tr><td class="figure-org">V</td><td>Coma profundo, rigidez de descerebración, aspecto moribundo</td><td>V (Glasgow 3-6)</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:14px;">
        <table>
          <thead><tr><th>Fisher modificada</th><th>Hallazgo en TC</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">0</td><td>Sin hemorragia subaracnoidea (HSA) ni hemorragia intraventricular (HIV)</td></tr>
            <tr><td class="figure-org">1</td><td>HSA focal o difusa delgada, sin HIV</td></tr>
            <tr><td class="figure-org">2</td><td>HSA focal o difusa delgada, CON HIV</td></tr>
            <tr><td class="figure-org">3</td><td>HSA gruesa, sin HIV</td></tr>
            <tr><td class="figure-org">4</td><td>HSA gruesa, CON HIV: mayor riesgo de vasoespasmo/isquemia cerebral tardía de toda la escala</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Hunt-Hess/WFNS cuantifican la gravedad clínica al ingreso (predictor pronóstico más fuerte); Fisher/Fisher modificada cuantifica la sangre en la TC y predice vasoespasmo: son escalas complementarias, no intercambiables.</div>`)}` },
      { nombre: 'Fisher / Fisher modificada', componentes: 'Cuantía y distribución de la sangre subaracnoidea, con o sin hemorragia intraventricular, en la TC de ingreso.', formula: 'Fisher original: 4 grados. Fisher modificada: 0-4, incorpora la HIV.', interpretacion: 'Predice el riesgo de vasoespasmo/isquemia cerebral tardía; la Fisher modificada añade la hemorragia intraventricular como factor independiente de mayor riesgo (ver Tabla 3).' },
      { nombre: 'ICH Score', componentes: 'Glasgow al ingreso, volumen del hematoma, hemorragia intraventricular, origen infratentorial, edad.', formula: 'Suma de 5 componentes, 0-6', interpretacion: 'La mortalidad a 30 días aumenta con cada punto (0 pts ≈0%; 6 pts ≈100%). No debe usarse de forma aislada para limitar el esfuerzo terapéutico temprano: existe evidencia de que hacerlo se convierte en una profecía autocumplida.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Ataque isquémico transitorio (AIT)',
      color: '#5c6b8c',
      definicion: 'Episodio transitorio de disfunción neurológica causado por isquemia focal cerebral, medular o retiniana, sin evidencia de infarto agudo en estudios de imagen (definición tisular moderna, que reemplaza a la clásica basada únicamente en la duración menor a 24 horas).',
      fisiopatologia: 'Comparte el mismo espectro etiológico que el ECV isquémico establecido (aterotrombótico, cardioembólico, lacunar): es una advertencia clínica de que el mecanismo isquémico ya está activo. Hasta 15-20% de los AIT tienen un infarto agudo silente en la RM-difusión pese a la resolución clínica completa del déficit.',
      epidemiologia: 'Precede hasta al 15-20% de los ECV isquémicos establecidos; el riesgo de ECV es máximo en las primeras 48-72 horas tras el evento (hasta 5-10% en ese periodo sin intervención dirigida).',
      factores_riesgo: ['Hipertensión arterial', 'Fibrilación auricular', 'Estenosis carotídea sintomática', 'Edad avanzada', 'Tabaquismo', 'Diabetes mellitus'],
      clinica: 'Déficit focal de instalación súbita y resolución completa (minutos a horas, casi siempre menor a 1 hora); mismo espectro de síntomas negativos que el ECV establecido, sin secuela clínica identificable al examen posterior.',
      criterios_dx: 'Clínica compatible más ausencia de infarto agudo en la RM-difusión (o TC si la RM no está disponible); si hay una lesión aguda en imagen pese a la resolución clínica, se reclasifica como ECV isquémico menor, no como AIT.',
      laboratorio: 'Mismo panel que el ECV isquémico: glucosa, biometría hemática, coagulación, perfil lipídico, HbA1c.',
      imagen: 'RM-difusión de elección por su mayor sensibilidad; angio-TC/angio-RM de cabeza y cuello para buscar estenosis o disección; ecocardiograma y monitorización de ritmo (Holter) si se sospecha fuente cardioembólica.',
      complementarios: 'ABCD2 para estratificar el riesgo; ecografía Doppler carotídea si la angio no está disponible de inmediato.',
      dx_diferencial: 'Migraña con aura, crisis focal con parálisis de Todd, hipoglucemia, síncope, vértigo periférico, esclerosis múltiple, tumor con síntomas fluctuantes, hematoma subdural crónico.',
      tx_medico: 'Hospitalización u observación urgente si ABCD2 ≥4 o etiología de alto riesgo (estenosis carotídea significativa, fibrilación auricular); evaluación completa idealmente dentro de las primeras 24-48 horas, sea ambulatoria u hospitalaria.',
      tx_farmacologico: 'Doble antiagregación (ácido acetilsalicílico + clopidogrel) por 21 días en el AIT de alto riesgo (ABCD2 ≥4), iniciada dentro de las primeras 12-24 horas y seguida de monoterapia (evidencia de CHANCE/POINT); anticoagulación si se confirma fibrilación auricular, una vez descartado un infarto extenso; estatina de alta intensidad; control estricto de la presión arterial.',
      tx_intervencionista: 'Endarterectomía o angioplastia/colocación de stent carotídeo si hay estenosis sintomática ≥50-70%, idealmente dentro de los primeros 14 días.',
      criterios_uci: 'No aplica de forma directa, salvo AIT en crescendo (recurrencia múltiple en 24 horas), donde se considera unidad de ictus/UCI por el riesgo inminente de ECV establecido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica seriada, telemetría para detectar fibrilación auricular paroxística, inicio del estudio etiológico completo. Si el déficit no revierte por completo, reclasificar como ECV isquémico agudo (ver la tarjeta correspondiente) en vez de AIT.',
      seguimiento_ambulatorio: 'Control de factores de riesgo vascular, adherencia a la antiagregación/estatina, Holter prolongado si persiste alta sospecha de fibrilación auricular no detectada inicialmente.',
      pronostico: 'Con manejo urgente y prevención secundaria adecuada, el riesgo de ECV a 90 días se reduce de ~10-20% a ~1-2%.',
      algoritmo: ['Déficit focal transitorio ya resuelto → RM-difusión urgente', 'Sin infarto agudo → confirma AIT; calcular ABCD2', 'ABCD2 ≥4 o alto riesgo → hospitalizar/observación urgente + doble antiagregación 21 días', 'Estudio etiológico: angio de cuello, ecocardiograma, Holter', 'Estenosis carotídea ≥50-70% sintomática → revascularización dentro de 14 días']
    },
    {
      nombre: 'ECV isquémico agudo',
      color: '#8c3a34',
      definicion: 'Infarto de tejido nervioso central causado por isquemia, con evidencia objetiva de lesión aguda focal en neuroimagen o clínica persistente mayor a 24 horas; es la causa más frecuente de ECV y la primera causa de discapacidad adquirida en el adulto.',
      fisiopatologia: 'La oclusión arterial (trombótica, embólica o hemodinámica) interrumpe el flujo sanguíneo cerebral; se forma un núcleo isquémico irreversible rodeado de una zona de penumbra hipoperfundida pero potencialmente viable durante horas gracias a la circulación colateral, cuya recuperación es el objetivo de toda terapia de reperfusión ("el tiempo es cerebro"): se estima que se pierden cerca de 1.9 millones de neuronas por minuto sin reperfusión.',
      epidemiologia: 'Representa ~85-87% de todos los ECV; su incidencia y mortalidad aumentan de forma exponencial con la edad.',
      factores_riesgo: ['Hipertensión arterial (el más importante y modificable)', 'Fibrilación auricular', 'Diabetes mellitus', 'Dislipidemia', 'Tabaquismo', 'Estenosis carotídea', 'Cardiopatía estructural', 'Estados protrombóticos'],
      clinica: 'Déficit focal súbito según el territorio afectado (hemiparesia, afasia, hemianopsia, ataxia, disartria); el patrón temporal orienta la etiología (déficit máximo instantáneo sugiere embolia, evolución escalonada sugiere trombosis in situ o infarto lacunar).',
      criterios_dx: `Déficit neurológico focal agudo, más TC simple sin evidencia de hemorragia, más confirmación de isquemia en la RM-difusión o evolución clínica/imagen compatible.${videoBlock('Video 2', 'NIH Stroke Scale: aplicación en un paciente real (Demo Patient B)', 'wlrbCzpIHac', 'National Institute of Neurological Disorders and Stroke (NINDS), distribuido por PublicResourceOrg: NIH Stroke Scale Training, Parte 4: paciente de demostración.')}`,
      laboratorio: 'Glucosa, biometría hemática, coagulación (INR/TTPa esencial para la elegibilidad de trombólisis), perfil lipídico, HbA1c, troponina.',
      imagen: `TC simple inmediata (excluye hemorragia); angio-TC de cabeza y cuello (identifica oclusión de gran vaso); TC de perfusión o RM-difusión para cuantificar núcleo/penumbra en la ventana extendida; ASPECTS calculado sobre la TC simple.${figBlock('Imagen 3', 'TC simple: signo de la arteria hiperdensa (trombo agudo)', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/ThrombusRtMCAM1Mark.png" alt="Signo de la arteria cerebral media hiperdensa por trombo agudo en el segmento M1" style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Signo de la arteria cerebral media hiperdensa (flecha): trombo agudo en el segmento M1 derecho, un signo temprano visible ya en la TC simple, antes de que aparezca la hipodensidad del infarto establecido. James Heilman, MD, Wikimedia Commons, CC BY-SA 4.0.</p>`)}`,
      complementarios: 'NIHSS seriado; ecocardiograma transtorácico/transesofágico y monitorización de ritmo para el estudio etiológico (TOAST).',
      dx_diferencial: 'Hemorragia intracraneal, crisis convulsiva con parálisis de Todd, hipoglucemia, migraña con aura, encefalopatía hipertensiva, esclerosis múltiple, tumor, trastorno funcional.',
      tx_medico: 'Vía aérea, oxigenación y circulación (ABC); glucemia objetivo 140-180 mg/dL; temperatura menor a 37.5°C; cabecera a 0-15° si hay hipoperfusión limítrofe o a 30° si hay riesgo de aspiración/hipertensión intracraneal; evitar la hipotensión.',
      tx_farmacologico: `Alteplasa IV 0.9 mg/kg (máximo 90 mg), 10% en bolo en 1 minuto y 90% en infusión de 60 minutos, dentro de las primeras 4.5 horas desde el inicio de los síntomas (o la última vez visto bien), tras excluir contraindicaciones (hemorragia en la TC, cirugía mayor o sangrado reciente, INR &gt;1.7, plaquetas &lt;100,000, presión arterial no controlable &lt;185/110, uso reciente de anticoagulante directo sin reversión). La tenecteplasa 0.25 mg/kg en bolo único IV es una alternativa razonable, especialmente antes de la trombectomía por su facilidad de administración. Control estricto de la presión arterial &lt;185/110 antes y &lt;180/105 en las primeras 24 horas post-trombólisis. Antiagregación con ácido acetilsalicílico 24-48 horas después de la trombólisis (o de inmediato si no se trombolizó); doble antiagregación por 21 días en el infarto menor de alto riesgo. Estatina de alta intensidad.${figBlock('Imagen 4', 'Ventana terapéutica: trombólisis IV y trombectomía mecánica', `
      <div style="display:flex;flex-direction:column;gap:10px;max-width:480px;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:78px;font-size:11.5px;font-weight:600;color:var(--ink);">0 – 4.5 h</div>
          <div style="flex:1;background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Trombólisis IV: alteplasa (0.9 mg/kg, máx. 90 mg) o tenecteplasa (0.25 mg/kg, bolo único)</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:78px;font-size:11.5px;font-weight:600;color:var(--ink);">0 – 6 h</div>
          <div style="flex:1;background:#3d5a7333;border:1px solid #3d5a73;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Trombectomía mecánica: ventana estándar, oclusión de gran vaso proximal</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:78px;font-size:11.5px;font-weight:600;color:var(--ink);">6 – 24 h</div>
          <div style="flex:1;background:#966b3533;border:1px solid #966b35;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Trombectomía mecánica: ventana extendida, solo con criterios de perfusión (DAWN/DEFUSE-3) y ASPECTS ≥6</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:78px;font-size:11.5px;font-weight:600;color:var(--ink);">&gt; 24 h</div>
          <div style="flex:1;background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Fuera de ventana de reperfusión: manejo médico y prevención secundaria dirigida por etiología</div>
        </div>
      </div>
      <div class="figure-grade-box">La trombectomía puede combinarse con la trombólisis IV previa si no hay contraindicación: no se retrasa la trombectomía esperando el efecto del trombolítico.</div>`)}`,
      tx_intervencionista: 'Trombectomía mecánica en oclusión de gran vaso proximal (carótida interna, M1, basilar): ventana estándar 0-6h; ventana extendida 6-24h en pacientes seleccionados por discordancia clínico-radiológica (criterios DAWN: discordancia edad/NIHSS/volumen del núcleo; DEFUSE-3: discordancia núcleo-penumbra por perfusión) con ASPECTS ≥6.',
      criterios_uci: 'Deterioro del estado de consciencia, infarto extenso con riesgo de edema maligno, necesidad de ventilación o soporte hemodinámico, post-trombectomía con riesgo de reperfusión.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Unidad de ictus con NIHSS seriado, monitorización de presión arterial/glucemia/temperatura, TC de control a las 24 horas (antes de iniciar antiagregación/anticoagulación post-trombólisis), tamizaje de disfagia antes de la vía oral, profilaxis de trombosis venosa profunda (mecánica desde el ingreso, farmacológica diferida 24 horas post-trombólisis), movilización temprana. Vigilar activamente dos complicaciones tempranas con tarjeta propia: transformación hemorrágica (más frecuente tras la reperfusión, primeras 24 horas) y edema cerebral maligno en infartos extensos (ventana días 2-5).',
      seguimiento_ambulatorio: 'Rehabilitación multidisciplinaria (fisioterapia, terapia del lenguaje, terapia ocupacional), control estricto de factores de riesgo vascular, prevención secundaria dirigida por etiología (TOAST).',
      pronostico: 'El NIHSS inicial y la edad son los predictores más fuertes del desenlace funcional (mRS a 90 días); la reperfusión oportuna (trombólisis/trombectomía) es el factor modificable más determinante.',
      algoritmo: ['Déficit focal agudo → activar código ictus, NIHSS, glucosa capilar', 'TC simple urgente → descarta hemorragia', 'Candidato a trombólisis (&lt;4.5h, sin contraindicación) → alteplasa/tenecteplasa IV', 'Angio-TC → oclusión de gran vaso → evaluar trombectomía (0-6h estándar, 6-24h con criterios de perfusión)', 'Ingreso a unidad de ictus, TC de control a 24h, iniciar antiagregación', 'Estudio etiológico (TOAST) y prevención secundaria dirigida']
    },
    {
      nombre: 'Transformación hemorrágica del infarto',
      color: '#7a4363',
      definicion: 'Complicación del ECV isquémico agudo (ver la tarjeta correspondiente): conversión del infarto ya establecido en una lesión con componente hemorrágico sobreañadido, espontánea o precipitada por la reperfusión (trombólisis/trombectomía); espectro que va desde el petequial asintomático hasta el hematoma parenquimatoso sintomático.',
      fisiopatologia: 'La isquemia ya descrita en el infarto de base daña la barrera hematoencefálica; al restablecerse el flujo, sea de forma espontánea por lisis del trombo o farmacológica, la sangre se extravasa hacia ese lecho capilar dañado. El riesgo es proporcional a la extensión del infarto (ASPECTS bajo) y aumenta con hiperglucemia, hipertensión arterial no controlada y el uso de trombolítico o antitrombóticos.',
      epidemiologia: 'Complica hasta 30-40% de los infartos reperfundidos en su forma asintomática; la forma sintomática (hemorragia intracraneal sintomática) ocurre en ~2-7% tras la trombólisis.',
      factores_riesgo: ['Infarto extenso (ASPECTS bajo)', 'Hiperglucemia', 'Hipertensión arterial no controlada', 'Edad avanzada', 'Uso de trombolítico', 'Cardioembolismo (infartos grandes)'],
      clinica: 'Deterioro neurológico agudo (caída ≥4 puntos en el NIHSS) en las horas posteriores a un infarto ya diagnosticado, especialmente tras la trombólisis, con o sin cefalea, vómito o deterioro de la consciencia.',
      criterios_dx: 'Deterioro clínico más hemorragia de nueva aparición en la TC de control (clasificación ECASS: petequial HI1/HI2 vs. hematoma parenquimatoso PH1/PH2, este último con efecto de masa y peor pronóstico).',
      laboratorio: 'Biometría hemática, coagulación, fibrinógeno (relevante si se administró trombolítico y se requiere reversión).',
      imagen: 'TC simple urgente ante cualquier deterioro neurológico dentro de las 24 horas post-trombólisis.',
      complementarios: 'Grupo y pruebas cruzadas si se anticipa necesidad de hemoderivados.',
      dx_diferencial: 'Edema cerebral maligno progresivo, crisis convulsiva postictal, nueva isquemia en otro territorio.',
      tx_medico: 'Suspender de inmediato cualquier infusión de trombolítico en curso; control estricto de la presión arterial; elevación de la cabecera y manejo de la presión intracraneal si hay efecto de masa.',
      tx_farmacologico: 'Reversión del efecto trombolítico si aplica (crioprecipitado 10 U, o ácido tranexámico/aminocaproico según disponibilidad, dentro de las primeras horas); reversión de cualquier anticoagulante concomitante; suspender la antiagregación temporalmente si hay un hematoma significativo.',
      tx_intervencionista: 'Evacuación quirúrgica si hay un hematoma con efecto de masa significativo y deterioro clínico (mismos criterios generales que la hemorragia intracerebral espontánea).',
      criterios_uci: 'Todo caso sintomático (con deterioro clínico) requiere UCI/unidad de ictus para vigilancia neurológica estrecha.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'TC seriada, vigilancia neurológica horaria hasta estabilizar, diferir el reinicio de antitrombóticos según la extensión del sangrado.',
      seguimiento_ambulatorio: 'Reevaluar de forma individualizada el riesgo-beneficio de reiniciar antiagregación/anticoagulación a mediano plazo.',
      pronostico: 'La transformación petequial asintomática no empeora el pronóstico; el hematoma parenquimatoso sintomático se asocia a mortalidad elevada y peor desenlace funcional.',
      algoritmo: ['Deterioro neurológico agudo post-infarto (caída ≥4 NIHSS) → TC simple urgente', 'Confirma hemorragia → suspender trombolítico/antitrombóticos', 'Sintomática con trombólisis reciente → revertir (crioprecipitado/antifibrinolítico)', 'Efecto de masa con deterioro → valorar evacuación quirúrgica', 'Vigilancia neurológica estrecha en UCI/unidad de ictus']
    },
    {
      nombre: 'Edema cerebral maligno / infarto maligno de la ACM',
      color: '#5c3d5c',
      definicion: 'La complicación más temida del ECV isquémico agudo (ver la tarjeta correspondiente): edema citotóxico progresivo tras un infarto extenso, típicamente mayor al 50% del territorio de la arteria cerebral media, que provoca elevación crítica de la presión intracraneal, herniación y muerte si no se trata.',
      fisiopatologia: 'Sobre el infarto extenso ya descrito se desarrolla edema citotóxico que alcanza su pico entre el día 2 y el 5; en el cráneo, un compartimento rígido, ese aumento de volumen desplaza estructuras de la línea media y puede producir herniación subfalcina, transtentorial o amigdalina.',
      epidemiologia: 'Complica ~1-10% de todos los ECV isquémicos, con hasta 80% de mortalidad sin tratamiento quirúrgico en pacientes jóvenes con infarto maligno completo de la ACM.',
      factores_riesgo: ['Edad joven (menor atrofia cerebral, menos espacio de reserva)', 'Infarto de todo el territorio de la ACM ± ACA/ACP', 'Oclusión de la carótida interna terminal', 'NIHSS inicial alto', 'ASPECTS bajo'],
      clinica: 'Deterioro del estado de alerta, cefalea, vómito, midriasis unilateral progresiva (herniación uncal), respiración anormal en fases avanzadas; típicamente entre el 2º y el 5º día post-ictus.',
      criterios_dx: 'Infarto extenso confirmado en imagen más deterioro clínico compatible con hipertensión intracraneal, con o sin desplazamiento de la línea media en la TC de control.',
      laboratorio: 'Sin hallazgo específico; relevante para descartar causas metabólicas concomitantes del deterioro.',
      imagen: 'TC seriada mostrando desplazamiento progresivo de la línea media, borramiento de las cisternas basales, herniación.',
      complementarios: 'Monitorización neurológica horaria (escala de Glasgow); en centros seleccionados, monitorización de la presión intracraneal.',
      dx_diferencial: 'Transformación hemorrágica, crisis convulsiva, hidrocefalia obstructiva, nuevo evento isquémico.',
      tx_medico: 'Medidas generales de manejo de la presión intracraneal: cabecera a 30°, normotermia, normoglucemia, evitar soluciones IV hipotónicas, sedación/analgesia adecuada, evitar hipercapnia/hipoxia.',
      tx_farmacologico: 'Osmoterapia con solución salina hipertónica o manitol como puente a la cirugía (no sustituye a la hemicraniectomía en el infarto maligno establecido); evitar corticoides, sin beneficio y con riesgo en el edema citotóxico, a diferencia del edema vasogénico tumoral.',
      tx_intervencionista: 'Hemicraniectomía descompresiva antes de las 48 horas del inicio del deterioro (idealmente antes de la herniación establecida) reduce drásticamente la mortalidad en pacientes de 60 años o menos con infarto maligno de la ACM; en mayores de 60 años reduce la mortalidad pero con mayor proporción de sobrevivientes con discapacidad grave: decisión individualizada, discutida con el paciente/familia.',
      criterios_uci: 'Todo paciente con infarto extenso de alto riesgo de edema maligno requiere vigilancia en UCI/unidad de ictus desde el ingreso, anticipando el deterioro.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica horaria en la ventana de riesgo (días 2-5), TC seriada ante cualquier deterioro, discusión temprana con neurocirugía antes de que se instale la herniación.',
      seguimiento_ambulatorio: 'Rehabilitación intensiva; muchos sobrevivientes de hemicraniectomía requieren craneoplastia diferida.',
      pronostico: 'Sin cirugía, mortalidad ~80%; con hemicraniectomía oportuna, la mortalidad se reduce a ~20-30%, con mayor proporción de sobrevivientes con discapacidad moderada-grave, especialmente en mayores de 60 años.',
      algoritmo: ['Infarto extenso de la ACM (&gt;50% del territorio) → anticipar riesgo, UCI/unidad de ictus', 'Vigilancia horaria días 2-5 (ventana de edema máximo)', 'Deterioro de consciencia/midriasis → TC urgente, medidas generales de presión intracraneal', 'Osmoterapia como puente, NO corticoides', 'Discutir hemicraniectomía descompresiva temprana (&lt;48h del deterioro) según edad/pronóstico']
    },
    {
      nombre: 'Trombosis de senos venosos cerebrales',
      color: '#3d5a73',
      definicion: 'Oclusión trombótica de uno o más senos venosos durales o venas corticales cerebrales; causa infrecuente pero importante de ECV, especialmente en pacientes jóvenes.',
      fisiopatologia: 'La oclusión venosa eleva la presión venosa retrógrada, produce congestión y edema (vasogénico y citotóxico), y puede progresar a infarto venoso con transformación hemorrágica; a diferencia del ECV arterial, el territorio afectado no respeta límites arteriales clásicos.',
      epidemiologia: 'Representa menos del 1% de todos los ECV, pero es una causa relevante de ECV en adultos jóvenes, especialmente mujeres (asociación con embarazo/puerperio y anticonceptivos orales).',
      factores_riesgo: ['Estados protrombóticos (trombofilias hereditarias, síndrome antifosfolípido)', 'Embarazo/puerperio', 'Anticonceptivos orales con estrógenos', 'Deshidratación', 'Infección local (mastoiditis, sinusitis)', 'Neoplasia', 'Enfermedad inflamatoria intestinal'],
      clinica: 'Cefalea de instalación subaguda (síntoma más frecuente, presente en más del 90%), que puede acompañarse de papiledema/síndrome de hipertensión intracraneal, crisis convulsivas focales (más frecuentes que en el ECV arterial), déficit focal que no respeta un territorio arterial único, y alteración del estado de consciencia en casos graves.',
      criterios_dx: 'Angio-TC o angio-RM venosa que demuestra ausencia de flujo en el seno/vena afectada (signo del "delta vacío" en la TC con contraste).',
      laboratorio: 'Dímero D (sensible, pero un valor normal no descarta la trombosis en casos de bajo volumen); estudio de trombofilia diferido, no en fase aguda, ya que puede alterarse por el propio evento agudo o por la anticoagulación.',
      imagen: 'Angio-RM/angio-TC venosa de elección; la TC simple puede mostrar el signo de la cuerda densa (trombo hiperdenso en el seno) o ser normal.',
      complementarios: 'Fondo de ojo (papiledema); estudio etiológico dirigido según el contexto (perfil de trombofilia, evaluación ginecológica/obstétrica si aplica).',
      dx_diferencial: 'ECV arterial, meningoencefalitis, tumor, hipertensión intracraneal idiopática (pseudotumor cerebri, que debe descartar trombosis venosa antes de establecerse como diagnóstico primario).',
      tx_medico: 'Manejo de crisis convulsivas si están presentes; control de la hipertensión intracraneal si hay papiledema significativo.',
      tx_farmacologico: 'Anticoagulación sistémica (heparina de bajo peso molecular o no fraccionada) como tratamiento de primera línea, incluso en presencia de transformación hemorrágica: el infarto venoso hemorrágico NO es contraindicación para anticoagular, a diferencia del ECV arterial hemorrágico: con puente a anticoagulación oral por 3-12 meses según si el factor de riesgo es transitorio o permanente.',
      tx_intervencionista: 'Trombectomía endovascular/trombólisis local en casos refractarios a la anticoagulación con deterioro clínico progresivo (evidencia limitada, individualizar); hemicraniectomía descompresiva si hay un infarto venoso extenso con herniación inminente.',
      criterios_uci: 'Deterioro de la consciencia, crisis convulsivas refractarias, signos de herniación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica, control de crisis convulsivas (ver la tarjeta de complicación transversal si aparecen), imagen de control para confirmar recanalización.',
      seguimiento_ambulatorio: 'Anticoagulación oral prolongada según la etiología, estudio de trombofilia diferido (≥6 semanas post-evento, fuera de anticoagulación si es posible), evitar estrógenos en el futuro si no hay una indicación médica imperiosa.',
      pronostico: 'Mejor pronóstico global que el ECV arterial (mortalidad ~5-10%); la mayoría recanaliza parcial o completamente con anticoagulación oportuna.',
      algoritmo: ['Cefalea subaguda + papiledema/crisis focal/déficit atípico → sospechar trombosis venosa', 'Angio-RM/angio-TC venosa confirmatoria', 'Anticoagulación inmediata (incluso con transformación hemorrágica)', 'Manejo de crisis/presión intracraneal si presentes', 'Estudio etiológico diferido + anticoagulación oral 3-12 meses']
    },
    {
      nombre: 'Hemorragia intracerebral (HIC) espontánea',
      color: '#7c2d2d',
      definicion: 'Sangrado dentro del parénquima cerebral de causa no traumática; la forma más letal de ECV. Se distingue de la hemorragia subaracnoidea por su localización intraaxial (dentro del tejido cerebral) en vez de en el espacio subaracnoideo.',
      fisiopatologia: 'Rotura de pequeñas arterias perforantes crónicamente dañadas por hipertensión arterial (arteriolosclerosis, microaneurismas de Charcot-Bouchard) en localización profunda (ganglios basales, tálamo, protuberancia, cerebelo), o por angiopatía amiloide cerebral en localización lobar en el anciano (depósito de amiloide-β en la pared de vasos corticales/leptomeníngeos); el hematoma crece en las primeras horas hasta en un tercio de los casos ("expansión del hematoma"), generando lesión secundaria por efecto de masa, edema perilesional y toxicidad de los productos de degradación de la sangre.',
      epidemiologia: '~10-15% de todos los ECV, pero responsable de una proporción desproporcionada de la mortalidad (30-50% a 30 días); su incidencia aumenta con la edad y es mayor en poblaciones asiática y afrodescendiente.',
      factores_riesgo: ['Hipertensión arterial crónica mal controlada (el más importante)', 'Angiopatía amiloide cerebral (edad avanzada, HIC lobar recurrente)', 'Anticoagulación', 'Consumo de alcohol', 'Simpaticomiméticos (cocaína)', 'Malformaciones vasculares subyacentes en jóvenes'],
      clinica: 'Déficit focal de instalación súbita con empeoramiento progresivo en minutos-horas (a diferencia del isquémico, cuyo déficit suele ser máximo desde el inicio), cefalea, vómito, disminución del estado de alerta; la localización determina el síndrome: putaminal (hemiparesia + hemianopsia), talámico (déficit sensitivo predominante + desviación ocular hacia abajo), protuberancial (coma + pupilas puntiformes + cuadriparesia, alta mortalidad), cerebeloso (ataxia, vértigo, incapacidad para la marcha, riesgo de herniación e hidrocefalia obstructiva: emergencia neuroquirúrgica).',
      criterios_dx: `TC simple de cráneo que demuestra hiperdensidad intraparenquimatosa aguda; el "signo de la mancha" (spot sign) en la angio-TC identifica sangrado activo y predice la expansión del hematoma.${figBlock('Imagen 5', 'TC simple: hemorragia intracerebral hipertensiva de ganglios basales', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/CT_of_basal_ganglionic_hemorrhage.png" alt="TC simple con hemorragia intracerebral hipertensiva en ganglios basales, con edema perilesional" style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">TC simple sin contraste: hemorragia hipertensiva de ganglios basales (asterisco), con la hiperdensidad característica de sangre aguda y edema perilesional hipodenso (flechas). Shazia Mirza y Sankalp Gokhale, vía Mikael Häggström, Wikimedia Commons, CC BY 4.0.</p>`)}`,
      laboratorio: 'Coagulación completa (INR, TTPa) para identificar coagulopatía/anticoagulación reversible; biometría hemática (plaquetas); función renal/hepática.',
      imagen: 'TC simple (diagnóstico inicial); angio-TC con signo de la mancha (riesgo de expansión); RM con secuencias de susceptibilidad magnética (gradiente eco/SWI) para buscar microsangrados sugestivos de angiopatía amiloide en el estudio etiológico diferido.',
      complementarios: 'ICH Score al ingreso, con la advertencia de no usarlo para limitar cuidados tempranamente; en jóvenes sin hipertensión, estudio vascular (angio-TC/RM, angiografía) para descartar malformación arteriovenosa o cavernoma subyacente.',
      dx_diferencial: 'Transformación hemorrágica de un infarto isquémico previo, hemorragia subaracnoidea con extensión parenquimatosa, tumor hemorrágico, malformación vascular sangrante.',
      tx_medico: 'Manejo en unidad de cuidados neurocríticos; cabecera a 30°, control de la vía aérea si Glasgow ≤8, normoglucemia, normotermia, profilaxis de crisis solo si hay convulsión clínica documentada, no de forma rutinaria.',
      tx_farmacologico: 'Reducción intensiva y rápida de la presión arterial, con objetivo de presión sistólica menor a 140 mmHg dentro de la primera hora (evidencia de INTERACT2, sin aumento de eventos isquémicos y con tendencia a mejor desenlace funcional; ATACH-2 no mostró beneficio adicional de metas más agresivas cercanas a 120 y sí más eventos renales, por lo que menor a 140 es el objetivo práctico). Reversión inmediata de la anticoagulación según el fármaco causante: warfarina → concentrado de complejo protrombínico de 4 factores más vitamina K IV; dabigatrán → idarucizumab; inhibidores directos del factor Xa (rivaroxabán, apixabán) → andexanet alfa o, si no está disponible, concentrado de complejo protrombínico; heparina → protamina.',
      tx_intervencionista: 'La evacuación quirúrgica no se recomienda de rutina en la HIC supratentorial (sin beneficio claro en la mayoría de los pacientes), salvo deterioro progresivo o hematoma lobar superficial (menor a 1 cm de la corteza); técnicas mínimamente invasivas (aspiración estereotáctica con o sin trombolítico) muestran beneficio funcional a largo plazo en centros con experiencia. La hemorragia cerebelosa mayor a 3 cm, con compresión del tronco o hidrocefalia asociada, o con deterioro clínico, tiene indicación absoluta de evacuación quirúrgica urgente, a diferencia de la supratentorial. Drenaje ventricular externo si hay hidrocefalia obstructiva asociada.',
      criterios_uci: 'Todo paciente con HIC requiere vigilancia neurocrítica; indicación absoluta si Glasgow ≤8, hematoma mayor a 30 cc, hemorragia intraventricular significativa, o deterioro progresivo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'TC de control a las 6 y 24 horas (o antes si hay deterioro) para vigilar la expansión; vigilancia neurológica horaria; manejo de la presión intracraneal si hay efecto de masa; profilaxis de trombosis venosa profunda mecánica desde el ingreso y farmacológica diferida 24-48 horas tras documentar la estabilidad de la hemorragia. Vigilar hidrocefalia si hay extensión intraventricular y crisis convulsivas, sobre todo en localización lobar (ver las tarjetas de complicaciones correspondientes).',
      seguimiento_ambulatorio: 'Rehabilitación; control estricto de la presión arterial a largo plazo (el factor modificable más importante para prevenir la recurrencia); reevaluación individualizada del riesgo-beneficio de reiniciar la anticoagulación si existía una indicación previa (fibrilación auricular, prótesis valvular).',
      pronostico: 'Mortalidad a 30 días de 30-50%; el volumen del hematoma, el Glasgow al ingreso y la presencia de hemorragia intraventricular son los predictores más fuertes (componentes del ICH Score). Se debe evitar el nihilismo terapéutico temprano basado únicamente en el score al ingreso, dado el riesgo documentado de que se convierta en una profecía autocumplida por limitación prematura del esfuerzo terapéutico.',
      algoritmo: ['Déficit focal + deterioro progresivo → TC simple urgente', 'Confirma hiperdensidad parenquimatosa → calcular ICH Score (no limitar cuidados solo por el score)', 'Revertir la anticoagulación de inmediato según el fármaco', 'Presión sistólica objetivo &lt;140 mmHg en la primera hora', 'Cerebelosa &gt;3cm o deterioro/hidrocefalia → evacuación quirúrgica urgente; supratentorial → manejo médico salvo deterioro/lobar superficial', 'UCI neurocrítica, TC de control a 6-24h']
    },
    {
      nombre: 'Hemorragia subaracnoidea (HSA) aneurismática',
      color: '#966b35',
      definicion: 'Extravasación de sangre al espacio subaracnoideo, en la mayoría de los casos espontánea por rotura de un aneurisma sacular; emergencia neuroquirúrgica con alta mortalidad prehospitalaria.',
      fisiopatologia: 'La rotura del aneurisma libera sangre a presión arterial directamente al espacio subaracnoideo, produciendo una elevación aguda y marcada de la presión intracraneal (puede igualar la presión arterial media, causando pérdida transitoria de consciencia en el momento de la rotura), irritación meníngea química, y desencadenando una cascada de complicaciones secundarias (resangrado, hidrocefalia, vasoespasmo/isquemia cerebral tardía) que determinan la mayor parte de la morbimortalidad tras el evento inicial.',
      epidemiologia: '~5% de todos los ECV, pero afecta a una población más joven que el resto (pico 40-60 años) y tiene alta mortalidad prehospitalaria (hasta 10-15% mueren antes de llegar al hospital).',
      factores_riesgo: ['Tabaquismo', 'Hipertensión arterial', 'Consumo de alcohol', 'Antecedente familiar de aneurisma/HSA (2 o más familiares de primer grado)', 'Enfermedad renal poliquística autosómica dominante', 'Síndrome de Ehlers-Danlos vascular', 'Sexo femenino'],
      clinica: 'Cefalea súbita, intensa, descrita como "el peor dolor de cabeza de mi vida" (cefalea en trueno, con pico de intensidad en segundos), a menudo con pérdida transitoria de consciencia en el momento del evento, náusea/vómito, rigidez de nuca y otros signos meníngeos (Kernig, Brudzinski), fotofobia; hasta 20-40% refieren una cefalea centinela (sangrado leve/fisura previa) en los días-semanas previos, que pasa desapercibida si no se interroga de forma dirigida.',
      criterios_dx: `TC simple de cráneo, con sensibilidad mayor a 95% en las primeras 6 horas del inicio de la cefalea (decrece con el tiempo); si la TC es negativa con alta sospecha clínica y han pasado más de 6 horas, punción lumbar buscando xantocromía (sobrenadante amarillento por degradación de hemoglobina, más específica que el simple recuento de eritrocitos, que puede deberse a una punción traumática) o RM con secuencias sensibles a sangre (FLAIR/SWI).${figBlock('Imagen 6', 'TC simple: hemorragia subaracnoidea en las cisternas basales', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/SAB_basal_bei_Aneurysma.jpg" alt="TC simple con hemorragia subaracnoidea: hiperdensidad ocupando las cisternas basales" style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">TC simple sin contraste: hemorragia subaracnoidea, con sangre hiperdensa ocupando las cisternas basales. Hellerhoff, Wikimedia Commons, CC BY-SA 3.0.</p>`)}`,
      laboratorio: 'Biometría hemática, coagulación, electrolitos: la hiponatremia es frecuente y multifactorial (síndrome perdedor de sal cerebral vs. SIADH, distinción clínicamente relevante porque el manejo es opuesto).',
      imagen: 'Angio-TC de cabeza como estudio inicial para localizar el aneurisma; la angiografía por sustracción digital sigue siendo el estándar de oro, especialmente si la angio-TC es negativa con alta sospecha, o para planear el tratamiento endovascular.',
      complementarios: 'Hunt-Hess/WFNS al ingreso (gravedad clínica); Fisher/Fisher modificada en la TC (riesgo de vasoespasmo); ECG (cambios isquémicos/QT prolongado por descarga catecolaminérgica, "stroke-heart"); ecocardiograma si hay inestabilidad hemodinámica o troponina elevada (miocardiopatía por estrés asociada a la HSA).',
      dx_diferencial: 'Migraña, disección arterial cervical, trombosis venosa cerebral, meningitis, síndrome de vasoconstricción cerebral reversible (cefaleas en trueno recurrentes con vasoconstricción segmentaria reversible en la angiografía, sin aneurisma).',
      tx_medico: 'Ingreso a unidad de cuidados neurocríticos, reposo, analgesia adecuada (el dolor no controlado eleva la presión arterial y el riesgo de resangrado), control estricto de la presión arterial (sistólica menor a 160 mmHg hasta el aseguramiento del aneurisma, evitando la hipotensión que comprometa la perfusión), profilaxis de trombosis venosa profunda mecánica (farmacológica diferida hasta el aseguramiento del aneurisma).',
      tx_farmacologico: 'Nimodipino 60 mg vía oral/sonda nasogástrica cada 4 horas por 21 días desde el diagnóstico: reduce el infarto cerebral por vasoespasmo y mejora el desenlace funcional, aunque no revierte el vasoespasmo angiográfico en sí; su beneficio es neuroprotector, no vasodilatador puro. Los antiepilépticos NO se usan de rutina como profilaxis, solo si hay una crisis clínica. Los antifibrinolíticos de acción corta (ácido tranexámico) pueden considerarse como puente muy breve (menor a 24-72 horas) mientras se asegura el aneurisma en centros con demora al tratamiento definitivo, sopesando el riesgo de isquemia asociado a su uso prolongado.',
      tx_intervencionista: 'Aseguramiento temprano del aneurisma (idealmente antes de 24-72 horas) mediante clipaje quirúrgico o embolización endovascular con coils (o técnicas adyuvantes como stent/flow diverter); el ensayo ISAT mostró mejor desenlace funcional con la embolización endovascular en aneurismas anatómicamente favorables para ambas técnicas, por lo que la elección se individualiza según localización, morfología del aneurisma, edad y comorbilidad, en un equipo multidisciplinario neurovascular.',
      criterios_uci: 'Todo caso de HSA confirmada requiere manejo en UCI neurocrítica desde el diagnóstico, independientemente del grado clínico inicial.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica horaria/cada 2 horas durante la ventana de mayor riesgo de resangrado (primeras 24 horas, ver la tarjeta de esa complicación) y de vasoespasmo (días 4-14, ver la tarjeta correspondiente), Doppler transcraneal seriado, manejo de euvolemia e hipertensión inducida si se desarrolla isquemia cerebral tardía tras el aseguramiento del aneurisma; vigilar también hidrocefalia aguda en las primeras 72 horas.',
      seguimiento_ambulatorio: 'Rehabilitación; cribado de aneurismas no rotos adicionales/familiares en casos con antecedente familiar; control de factores de riesgo (tabaquismo, hipertensión arterial).',
      pronostico: 'Mortalidad global ~25-50% (incluyendo la prehospitalaria); el grado clínico inicial (Hunt-Hess/WFNS) es el predictor pronóstico más fuerte; hasta un tercio de los sobrevivientes queda con déficit cognitivo residual pese a un buen desenlace motor.',
      algoritmo: ['Cefalea en trueno/"la peor de mi vida" → TC simple urgente', 'TC negativa + sospecha alta + &gt;6h → punción lumbar (xantocromía) o RM', 'Confirmada → angio-TC/angiografía para localizar el aneurisma, Hunt-Hess/WFNS y Fisher', 'UCI neurocrítica, nimodipino 60mg c/4h, presión sistólica &lt;160 hasta asegurar', 'Aseguramiento temprano &lt;24-72h: clipaje vs. coiling (equipo neurovascular)', 'Vigilancia de resangrado/vasoespasmo días 4-14 tras el aseguramiento']
    },
    {
      nombre: 'Resangrado aneurismático',
      color: '#8a3030',
      definicion: 'Complicación temprana de la HSA aneurismática (ver la tarjeta correspondiente): nueva hemorragia por rerruptura del mismo aneurisma antes de su aseguramiento definitivo; la más letal y potencialmente prevenible de la fase aguda.',
      fisiopatologia: 'El coágulo que sella transitoriamente el punto de rotura descrito en la HSA es inestable; fluctuaciones de la presión arterial, agitación, dolor no controlado o maniobras que aumenten la presión intracraneal/transmural pueden precipitar la rerruptura antes de que el aneurisma quede excluido de la circulación.',
      epidemiologia: 'Riesgo máximo en las primeras 24 horas (hasta 4-13.6% según series, mayor en las primeras 6 horas), con una segunda ventana de riesgo elevado en las primeras 2 semanas si el aneurisma no se asegura.',
      factores_riesgo: ['Retraso en el aseguramiento del aneurisma', 'Presión arterial no controlada', 'Aneurisma grande', 'Grado clínico inicial grave (Hunt-Hess alto)', 'Cefalea centinela previa no diagnosticada'],
      clinica: 'Deterioro neurológico súbito y grave (cefalea intensa recurrente, pérdida de consciencia, nuevo déficit focal) en un paciente con HSA ya diagnosticada, antes del aseguramiento del aneurisma.',
      criterios_dx: 'TC simple que demuestra un incremento del volumen de sangre subaracnoidea respecto al estudio previo, en el contexto de un deterioro clínico agudo.',
      laboratorio: 'Sin hallazgo específico; relevante la coagulación si hubo uso de antifibrinolíticos o anticoagulación previa.',
      imagen: 'TC simple urgente ante cualquier deterioro neurológico; angiografía urgente si se decide un aseguramiento emergente.',
      complementarios: 'Reevaluación del grado clínico (Hunt-Hess/WFNS) tras el resangrado, generalmente empeorado.',
      dx_diferencial: 'Hidrocefalia aguda, vasoespasmo/isquemia cerebral tardía (aunque esta última es más tardía, días 4-14), crisis convulsiva.',
      tx_medico: 'La prevención es la piedra angular: control estricto de la presión arterial (sistólica menor a 160 mmHg), analgesia/sedación adecuada, ambiente tranquilo, evitar el Valsalva (laxantes profilácticos, evitar sondas nasogástricas traumáticas innecesarias).',
      tx_farmacologico: 'Si el resangrado ocurre antes de poder asegurar el aneurisma de forma inmediata, el ácido tranexámico de muy corta duración puede considerarse como puente, sopesando el riesgo isquémico de su uso prolongado.',
      tx_intervencionista: 'Aseguramiento emergente del aneurisma (clipaje o embolización) en cuanto sea técnicamente posible; es la única medida que elimina de forma definitiva el riesgo.',
      criterios_uci: 'Todo resangrado es una emergencia neuroquirúrgica que requiere manejo neurocrítico inmediato.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Aceleración del aseguramiento del aneurisma como prioridad absoluta tras el evento.',
      seguimiento_ambulatorio: 'No aplica de forma directa (evento agudo intrahospitalario); a largo plazo, igual que la HSA aneurismática de base.',
      pronostico: 'La mortalidad asociada al resangrado llega hasta 70%; es la razón principal para asegurar el aneurisma lo antes posible tras el diagnóstico inicial.',
      algoritmo: ['HSA diagnosticada, aneurisma aún no asegurado → presión sistólica &lt;160, analgesia/sedación, ambiente tranquilo', 'Deterioro súbito → TC simple urgente', 'Confirma resangrado → priorizar el aseguramiento emergente (clipaje/coiling)', 'Manejo neurocrítico inmediato']
    },
    {
      nombre: 'Vasoespasmo cerebral / isquemia cerebral tardía (DCI)',
      color: '#2d5f6b',
      definicion: 'Complicación tardía de la HSA aneurismática (ver la tarjeta correspondiente): estrechamiento reversible de las arterias cerebrales que puede producir isquemia cerebral tardía sintomática (DCI, delayed cerebral ischemia), la principal causa de morbilidad tardía en los sobrevivientes del sangrado inicial.',
      fisiopatologia: 'Los productos de degradación de la sangre subaracnoidea (oxihemoglobina y sus derivados) desencadenan disfunción endotelial, inflamación de la pared vascular y alteración del tono vascular con vasoconstricción sostenida; el vasoespasmo angiográfico no siempre se correlaciona con la isquemia clínica (DCI), que además puede involucrar mecanismos de disfunción de la microcirculación y despolarizaciones corticales propagadas, independientes del calibre de los grandes vasos.',
      epidemiologia: 'Vasoespasmo angiográfico hasta en 50-70% de los pacientes con HSA; DCI sintomática en ~20-30%, con pico de incidencia entre los días 4 y 14 tras el sangrado.',
      factores_riesgo: ['Mayor cantidad de sangre subaracnoidea en la TC inicial (Fisher/Fisher modificada alto)', 'Hemorragia intraventricular', 'Grado clínico inicial grave', 'Tabaquismo', 'Hiperglucemia'],
      clinica: 'Deterioro neurológico focal o del estado de alerta de instalación subaguda (horas), típicamente entre el día 4 y 14 post-sangrado, en ausencia de otra causa identificable (resangrado, hidrocefalia, crisis, alteración metabólica).',
      criterios_dx: 'Diagnóstico clínico de exclusión, apoyado por Doppler transcraneal (velocidades elevadas, índice de Lindegaard) y confirmado por angio-TC/angiografía convencional que demuestra un estrechamiento vascular correlacionado con el territorio del déficit.',
      laboratorio: 'Descartar causas metabólicas concomitantes (glucosa, electrolitos, especialmente sodio).',
      imagen: 'Doppler transcraneal diario como tamizaje no invasivo; angio-TC de perfusión para confirmar isquemia establecida; angiografía convencional si se planea tratamiento endovascular.',
      complementarios: 'Monitorización neurológica horaria en la ventana de riesgo; en centros seleccionados, monitorización multimodal (presión intracraneal, oxigenación tisular cerebral).',
      dx_diferencial: 'Resangrado, hidrocefalia, crisis convulsiva no convulsiva, encefalopatía metabólica/hiponatremia.',
      tx_medico: 'Mantener euvolemia (evitar la hipovolemia, que empeora la isquemia) e inducir hipertensión (elevar la presión arterial por encima del basal del paciente) una vez asegurado el aneurisma, para mejorar la perfusión colateral en el territorio comprometido: sustituye al concepto histórico de "triple H", ya que no se recomienda la hemodilución ni la sobrecarga hídrica profiláctica.',
      tx_farmacologico: 'Continuar el nimodipino, ya iniciado desde el diagnóstico de la HSA; vasopresores (noradrenalina) para lograr la hipertensión inducida terapéutica una vez que el aneurisma está asegurado.',
      tx_intervencionista: 'Angioplastia transluminal con balón y/o infusión intraarterial de vasodilatadores (nicardipino, verapamilo) en el vasoespasmo focal refractario a la hipertensión inducida, en centros con capacidad neurointervencionista.',
      criterios_uci: 'Toda HSA en la ventana de riesgo de vasoespasmo (días 4-14) requiere vigilancia neurocrítica continua, con o sin DCI establecida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Doppler transcraneal diario, vigilancia neurológica seriada, ajuste de las metas hemodinámicas según la respuesta clínica.',
      seguimiento_ambulatorio: 'Rehabilitación de secuelas isquémicas residuales si ocurrió un infarto establecido pese al tratamiento.',
      pronostico: 'El DCI es la principal causa de morbimortalidad tardía en los sobrevivientes de la fase aguda de la HSA; el diagnóstico y tratamiento oportuno (hipertensión inducida, angioplastia de rescate) reduce significativamente el infarto establecido.',
      algoritmo: ['HSA asegurada, ventana de riesgo días 4-14 → Doppler transcraneal diario + vigilancia neurológica seriada', 'Deterioro neurológico subagudo sin otra causa → sospechar DCI', 'Descartar resangrado/hidrocefalia/crisis/metabólico', 'Euvolemia + hipertensión inducida (noradrenalina) + continuar nimodipino', 'Refractario → angioplastia/vasodilatador intraarterial']
    },
    {
      nombre: 'Hidrocefalia aguda',
      color: '#3f6b52',
      definicion: 'Complicación mecánica que puede seguir tanto a la HIC espontánea con extensión intraventricular como a la HSA aneurismática (ver las tarjetas correspondientes): dilatación aguda del sistema ventricular por alteración del flujo o la reabsorción del líquido cefalorraquídeo.',
      fisiopatologia: 'La sangre proveniente de cualquiera de esas dos hemorragias, al llegar al espacio subaracnoideo o intraventricular, obstruye mecánicamente las vías de flujo del líquido cefalorraquídeo (hidrocefalia obstructiva aguda) o interfiere con su reabsorción a nivel de las granulaciones aracnoideas (hidrocefalia comunicante, más tardía/subaguda).',
      epidemiologia: 'Hidrocefalia aguda hasta en 20-30% de las HSA en las primeras 72 horas; también complica hasta un tercio de las HIC con extensión intraventricular significativa, especialmente las de localización talámica/ganglios basales cercanas al sistema ventricular.',
      factores_riesgo: ['Mayor cantidad de sangre intraventricular', 'HSA de localización que obstruye el cuarto ventrículo/acueducto', 'Hemorragia cerebelosa'],
      clinica: 'Deterioro del estado de alerta (a menudo el signo más temprano y sensible), cefalea, vómito; en casos avanzados, tríada con alteración de la marcha e incontinencia, más típica de la forma crónica comunicante que de la aguda.',
      criterios_dx: 'TC simple que demuestra dilatación ventricular aguda con o sin trasudado periependimario, en el contexto clínico compatible.',
      laboratorio: 'Sin hallazgo específico.',
      imagen: 'TC simple como estudio de elección por su rapidez; índice de Evans o valoración cualitativa de la dilatación de las astas temporales/tercer ventrículo.',
      complementarios: 'Escala de Glasgow seriada como parámetro clínico más sensible al cambio.',
      dx_diferencial: 'Vasoespasmo/DCI, resangrado, edema cerebral progresivo, encefalopatía metabólica.',
      tx_medico: 'Vigilancia neurológica estrecha; en la hidrocefalia leve-moderada sin deterioro significativo, el manejo expectante con vigilancia es razonable.',
      tx_farmacologico: 'No hay un tratamiento farmacológico específico de la hidrocefalia aguda en sí, a diferencia de la forma crónica, donde la acetazolamida tiene un rol limitado.',
      tx_intervencionista: 'Drenaje ventricular externo urgente si hay deterioro del estado de consciencia atribuible a la hidrocefalia; en la HSA con drenaje ventricular externo, el manejo debe ser cuidadoso (apertura controlada/clampeo gradual), porque una descompresión brusca puede favorecer el resangrado antes del aseguramiento del aneurisma; derivación ventriculoperitoneal definitiva si la hidrocefalia persiste de forma crónica tras la fase aguda.',
      criterios_uci: 'Todo paciente con hidrocefalia aguda sintomática requiere manejo neurocrítico y colocación urgente de un drenaje ventricular externo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la necesidad de derivación definitiva (fracaso de retiro del drenaje en pruebas de clampeo), vigilancia de infección asociada al catéter.',
      seguimiento_ambulatorio: 'Seguimiento de la válvula de derivación ventriculoperitoneal si se colocó, vigilancia de disfunción/infección de la válvula a largo plazo.',
      pronostico: 'El tratamiento oportuno con drenaje ventricular externo revierte el deterioro asociado en la mayoría de los casos; la necesidad de derivación definitiva se asocia a peor pronóstico funcional global (marcador de mayor gravedad del sangrado inicial).',
      algoritmo: ['HSA/HIC con extensión intraventricular → vigilar deterioro del estado de alerta', 'TC simple → confirma dilatación ventricular aguda', 'Deterioro atribuible → drenaje ventricular externo urgente (apertura controlada en HSA con aneurisma no asegurado)', 'Prueba de clampeo antes del retiro', 'Persistencia → derivación ventriculoperitoneal definitiva']
    },
    {
      nombre: 'Crisis convulsivas asociadas a ECV',
      color: '#6b4a2e',
      definicion: 'Complicación transversal que puede seguir a cualquiera de las formas de ECV ya descritas (isquémico, HIC o HSA), más frecuente en la HSA y en la HIC lobar que en el isquémico: crisis epilépticas en relación temporal con el evento vascular, en la fase aguda (crisis sintomáticas agudas, dentro de los primeros 7 días) o como epilepsia postictus establecida (crisis no provocadas tardías, después de la primera semana).',
      fisiopatologia: 'En la fase aguda, la lesión cortical isquémica o hemorrágica genera irritabilidad neuronal directa (más frecuente en lesiones corticales que subcorticales, y en la HSA/HIC lobar que en el infarto profundo); las crisis tardías reflejan la formación de un foco epileptogénico cicatricial estable.',
      epidemiologia: 'Crisis en la fase aguda en ~5-9% de los ECV (más frecuentes en la HSA e HIC lobar que en el isquémico); el riesgo de epilepsia postictus a largo plazo es mayor tras la HIC lobar y la HSA que tras el ECV isquémico.',
      factores_riesgo: ['Localización cortical de la lesión', 'HIC lobar', 'HSA', 'Mayor gravedad/extensión de la lesión', 'Transformación hemorrágica'],
      clinica: 'Crisis focales con o sin generalización secundaria; pueden ser sutiles (mioclonías focales, desviación oculocefálica) y confundirse con la progresión del déficit neurológico de base, o presentarse como estado epiléptico no convulsivo (deterioro de la consciencia sin manifestación motora evidente).',
      criterios_dx: 'Clínico, apoyado por electroencefalograma cuando hay sospecha de estado epiléptico no convulsivo (deterioro de la consciencia inexplicado) o para caracterizar crisis sutiles.',
      laboratorio: 'Glucosa, electrolitos (especialmente sodio), función renal/hepática: descartar causas metabólicas concomitantes que bajen el umbral convulsivo.',
      imagen: 'TC/RM ya realizada para el ECV de base; electroencefalograma continuo en UCI si hay alta sospecha de crisis no convulsivas.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Progresión del déficit por extensión de la lesión, mioclonías postanóxicas (contexto distinto), temblor/postura anormal no epiléptica.',
      tx_medico: 'Corregir factores metabólicos precipitantes (glucosa, sodio); no hay indicación de profilaxis anticonvulsivante de rutina en el ECV isquémico ni en la HIC/HSA sin crisis clínica documentada: la profilaxis rutinaria no reduce el riesgo de epilepsia futura y se ha asociado a peor desenlace funcional.',
      tx_farmacologico: 'Tratar la crisis clínica aguda con benzodiacepina de rescate, seguida de un antiepiléptico de mantenimiento (levetiracetam es de primera elección por su perfil de interacciones favorable y disponibilidad IV); la duración del tratamiento tras una crisis sintomática aguda aislada suele ser corta (semanas), a diferencia de la epilepsia postictus tardía, que requiere tratamiento prolongado.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'El estado epiléptico (convulsivo o no convulsivo) requiere manejo neurocrítico inmediato con electroencefalograma continuo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Electroencefalograma continuo si hay sospecha de crisis no convulsivas persistentes, vigilancia de recurrencia.',
      seguimiento_ambulatorio: 'Reevaluación neurológica para decidir la suspensión del antiepiléptico tras una crisis aguda aislada resuelta; seguimiento en epilepsia postictus establecida (crisis tardías no provocadas) como cualquier epilepsia estructural.',
      pronostico: 'Las crisis sintomáticas agudas aisladas generalmente no requieren tratamiento antiepiléptico indefinido; una crisis tardía (mayor a 7 días) ya constituye epilepsia postictus y sí amerita tratamiento de mantenimiento prolongado.',
      algoritmo: ['Crisis clínica o deterioro de consciencia inexplicado en ECV → electroencefalograma si se sospecha no convulsiva', 'Corregir factores metabólicos', 'Crisis clínica confirmada → benzodiacepina de rescate + levetiracetam de mantenimiento', 'NO profilaxis anticonvulsivante rutinaria sin crisis documentada', 'Crisis tardía (&gt;7 días) → reclasificar como epilepsia postictus, tratamiento prolongado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia neurológica seriada y el control estricto de las variables fisiológicas (glucemia, temperatura, presión arterial, oxigenación) en la unidad de ictus/UCI neurocrítica son la base del manejo de todo ECV, independientemente de su etiología, y reducen la morbimortalidad de forma comparable a las terapias de reperfusión específicas.',
    parametros: [
      'Estado neurológico: NIHSS o Glasgow seriado según el tipo de ECV, con especial atención en las ventanas de mayor riesgo (24h post-trombólisis, días 2-5 para el edema maligno, días 4-14 para el vasoespasmo en HSA).',
      'Presión arterial: metas específicas según el escenario (permisiva en el isquémico sin trombólisis, menor a 185/110 pre-trombólisis, menor a 140 en la HIC, menor a 160 en la HSA no asegurada, hipertensión inducida en la DCI ya asegurada).',
      'Glucemia: objetivo 140-180 mg/dL; evitar tanto la hiperglucemia (empeora el desenlace) como la hipoglucemia (mimetiza o agrava el déficit).',
      'Temperatura: mantener normotermia estricta (menor a 37.5°C); la fiebre empeora el desenlace neurológico en cualquier tipo de ECV.',
      'Tamizaje de disfagia antes de iniciar la vía oral, para prevenir la neumonía por aspiración, la complicación infecciosa más frecuente tras el ECV.',
      'Profilaxis de trombosis venosa profunda: mecánica (compresión neumática intermitente) desde el ingreso en todos los casos; farmacológica diferida según el tipo de ECV (24h post-trombólisis, 24-48h en HIC/HSA tras confirmar estabilidad).',
      'Movilización temprana y rehabilitación multidisciplinaria desde las primeras 24-48 horas si la condición clínica lo permite.'
    ],
    criterios_uci_general: 'Deterioro del estado de consciencia, necesidad de soporte ventilatorio o hemodinámico, riesgo alto de edema maligno o resangrado, cualquier hemorragia intracraneal (HIC/HSA) en su fase aguda, y todo paciente post-trombectomía o post-aseguramiento de aneurisma en las primeras 24-48 horas.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Prevención secundaria dirigida por etiología: control estricto de la presión arterial (el factor modificable más importante en ambos tipos de ECV), antiagregación o anticoagulación según corresponda, estatina de alta intensidad en el isquémico aterotrombótico, cese del tabaquismo, control glucémico, y corrección quirúrgica/endovascular de la fuente estructural identificada (estenosis carotídea, aneurisma adicional, foramen oval permeable en el ECV criptogénico del joven).'
  }
};

export const compCites = {
  'Ataque isquémico transitorio (AIT)': { epidemiologia: [6], criterios_dx: [6], tx_farmacologico: [13, 14] },
  'ECV isquémico agudo': { fisiopatologia: [1], criterios_dx: [1], imagen: [7, 11, 12], tx_medico: [10], tx_farmacologico: [1], tx_intervencionista: [1, 11, 12] },
  'Transformación hemorrágica del infarto': { tx_farmacologico: [1] },
  'Edema cerebral maligno / infarto maligno de la ACM': { fisiopatologia: [4], tx_intervencionista: [4] },
  'Trombosis de senos venosos cerebrales': { epidemiologia: [28], tx_farmacologico: [28] },
  'Hemorragia intracerebral (HIC) espontánea': { fisiopatologia: [2], tx_farmacologico: [2, 15, 16, 20, 21], tx_intervencionista: [2, 17, 18], pronostico: [2, 25] },
  'Hemorragia subaracnoidea (HSA) aneurismática': { epidemiologia: [3], criterios_dx: [3], tx_farmacologico: [3, 22], tx_intervencionista: [3, 19], pronostico: [3, 26, 27] },
  'Resangrado aneurismático': { epidemiologia: [3] },
  'Vasoespasmo cerebral / isquemia cerebral tardía (DCI)': { fisiopatologia: [23], tx_medico: [23], tx_farmacologico: [22, 23] },
  'Hidrocefalia aguda': { tx_intervencionista: [3] },
  'Crisis convulsivas asociadas a ECV': { tx_farmacologico: [1, 2] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'NIHSS': [1], 'ABCD2': [6], 'ASPECTS': [7], 'TOAST': [5], 'Escala de Rankin modificada (mRS)': [9],
  'Hunt y Hess / WFNS': [26, 27], 'Fisher / Fisher modificada': [24], 'ICH Score': [25]
};
export const escalaCalc = {
  'NIHSS': 'nihss', 'ABCD2': 'abcd2', 'ASPECTS': 'aspects', 'Hunt y Hess / WFNS': 'hunthess',
  'Fisher / Fisher modificada': 'fishermod', 'ICH Score': 'ichscore'
};
export const compGroups = [
  { title: 'ECV isquémico (enfermedades)', items: ['Ataque isquémico transitorio (AIT)', 'ECV isquémico agudo', 'Trombosis de senos venosos cerebrales'] },
  { title: 'Complicaciones del ECV isquémico', items: ['Transformación hemorrágica del infarto', 'Edema cerebral maligno / infarto maligno de la ACM'] },
  { title: 'Hemorragia intracraneal (enfermedades)', items: ['Hemorragia intracerebral (HIC) espontánea', 'Hemorragia subaracnoidea (HSA) aneurismática'] },
  { title: 'Complicaciones de la hemorragia intracraneal', items: ['Resangrado aneurismático', 'Vasoespasmo cerebral / isquemia cerebral tardía (DCI)', 'Hidrocefalia aguda'] },
  { title: 'Complicación transversal (cualquier ECV)', items: ['Crisis convulsivas asociadas a ECV'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI y el algoritmo paso a paso. Los grupos "(enfermedades)" son las entidades principales; los grupos "Complicaciones de..." son eventos que pueden surgir sobre esa enfermedad ya diagnosticada, no diagnósticos independientes.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'ENFERMEDAD CEREBROVASCULAR', color: '#4a2d5e', target: 'definicion' },
  branches: [
    { title: 'ECV isquémico', sub: '~85% · oclusión arterial', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'AIT', sub: 'Déficit transitorio sin infarto', color: '#5c6b8c', target: 'complicaciones' },
      { title: 'Trombólisis/trombectomía', sub: 'Ventana 0-4.5h / 0-24h', color: '#966b35', target: 'complicaciones' }
    ] },
    { title: 'ECV hemorrágico', sub: '~15% · HIC + HSA', color: '#7c2d2d', target: 'diagnostico', leaves: [
      { title: 'HIC espontánea', sub: 'HTA, angiopatía amiloide', color: '#7c2d2d', target: 'complicaciones' },
      { title: 'HSA aneurismática', sub: 'Cefalea en trueno', color: '#966b35', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1, 6], imagen: [1, 2, 3, 7] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 2, 3, 4];
