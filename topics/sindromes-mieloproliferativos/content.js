// topics/sindromes-mieloproliferativos/content.js: Neoplasias Mieloproliferativas clásicas
// BCR-ABL1 negativas (policitemia vera, trombocitemia esencial, mielofibrosis prefibrótica y
// manifiesta). Estructura idéntica al contrato del motor (misma forma que
// sindromes-mielodisplasicos/miocardiopatias/enfermedad-cerebrovascular). Sigue la convención de
// figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'sindromes-mieloproliferativos',
  titulo: 'Síndromes Mieloproliferativos',
  subtitulo: 'Módulo 7 · Medicina Interna',
  accent: '#4a6b8c',
  accentDim: '#7a9cb8'
};

export const definicionText = `<p style="margin:0 0 14px;">Las neoplasias mieloproliferativas (NMP) clásicas BCR-ABL1 negativas son un grupo de neoplasias mieloides clonales originadas en la célula madre hematopoyética, caracterizadas por proliferación excesiva y EFICAZ (a diferencia de la hematopoyesis ineficaz del síndrome mielodisplásico) de una o más líneas mieloides maduras, con bajo riesgo basal de citopenia y alto riesgo trombohemorrágico. Comprende tres entidades: policitemia vera (PV, proliferación predominantemente eritroide), trombocitemia esencial (TE, proliferación megacariocítica/plaquetaria), y mielofibrosis primaria (con una forma prefibrótica/temprana y una forma manifiesta/fibrótica), unificadas por la activación constitutiva de la vía de señalización JAK-STAT, casi siempre por una de tres mutaciones "driver" mutuamente excluyentes: JAK2 (V617F o exón 12), CALR, o MPL. La leucemia mieloide crónica (BCR-ABL1 positiva) se excluye de este grupo por su fisiopatología y manejo radicalmente distintos.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La policitemia vera y la trombocitemia esencial tienen una incidencia similar (~0.5-2 casos por 100,000 habitantes al año), con una mediana de edad al diagnóstico de ~60 años; la trombocitemia esencial tiene además un segundo pico en mujeres jóvenes en edad reproductiva. La mielofibrosis es la menos frecuente y la de peor pronóstico de las tres, con una mediana de edad al diagnóstico de ~65-70 años, y puede ser primaria (de novo) o secundaria a la evolución de una policitemia vera o una trombocitemia esencial previas.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Policitemia vera</strong>: mutación de JAK2 en prácticamente el 100% de los casos (V617F ~95-98%, exón 12 en la mayoría del resto).</li>
    <li><strong>Trombocitemia esencial</strong>: JAK2 V617F (~50-60%), CALR (~20-25%, con dos tipos de valor pronóstico distinto), MPL (~3-5%), o "triple negativa" sin mutación driver identificable (~10-15%).</li>
    <li><strong>Mielofibrosis prefibrótica/temprana</strong>: mismo perfil mutacional que la manifiesta, pero sin fibrosis reticulínica significativa (grado 0-1) en la biopsia.</li>
    <li><strong>Mielofibrosis manifiesta</strong>: fibrosis reticulínica o colágena de grado ≥2, de novo o secundaria a PV/TE previas (post-PV MF, post-ET MF).</li>
  </ul>
  ${figBlock('Imagen 2', 'El espectro evolutivo de las NMP clásicas', `
  <div style="display:flex;align-items:flex-start;justify-content:center;gap:20px;max-width:560px;margin:0 auto;flex-wrap:wrap;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <div style="background:#966b3533;border:1px solid #966b35;border-radius:8px;padding:10px 14px;font-size:10.5px;color:var(--ink);text-align:center;min-width:150px;"><strong>Trombocitemia esencial</strong><br>Trombocitosis aislada</div>
      <div style="color:var(--ink-dim);font-size:12.5px;text-align:center;">↓ progresión<br>(~5-10% a 15-20 años)</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:10px 14px;font-size:10.5px;color:var(--ink);text-align:center;min-width:150px;"><strong>Policitemia vera</strong><br>Eritrocitosis ± leucocitosis/trombocitosis</div>
      <div style="color:var(--ink-dim);font-size:12.5px;text-align:center;">↓ progresión<br>(~10-20% a 15-20 años)</div>
    </div>
  </div>
  <div style="display:flex;justify-content:center;margin-top:4px;">
    <div style="background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:10px 16px;font-size:10.5px;color:var(--ink);text-align:center;max-width:340px;"><strong>Mielofibrosis</strong> (post-ET / post-PV / primaria)<br>Fibrosis progresiva, esplenomegalia, citopenias</div>
  </div>
  <div class="figure-grade-box">Las 3 entidades comparten el mismo sustrato molecular (JAK2/CALR/MPL); la mielofibrosis es el punto de convergencia evolutivo de todo el grupo, sea primaria o secundaria a una PV/TE previa.</div>`)}
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada: el factor más importante para el diagnóstico y para el riesgo trombótico</li>
    <li>Sexo: predominio masculino en la policitemia vera, predominio femenino en el segundo pico (mujeres jóvenes) de la trombocitemia esencial</li>
    <li>Mutación driver de alto riesgo: triple negativa o CALR tipo 2/like en la trombocitemia esencial y la mielofibrosis, asociadas a peor pronóstico y mayor riesgo de progresión</li>
    <li>Antecedente de trombosis previa: el predictor más fuerte de recurrencia trombótica</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Las tres mutaciones driver convergen en la activación constitutiva de la vía JAK-STAT independiente de citocinas: JAK2 V617F (dominio pseudocinasa JH2, pierde su función autoinhibitoria) es la más frecuente y la única presente en las tres entidades; CALR (exón 9, genera una nueva secuencia C-terminal que activa el receptor de trombopoyetina MPL de forma constitutiva, mecanismo casi exclusivo de la trombocitemia esencial y la mielofibrosis); MPL (dominio transmembrana/yuxtamembrana, activación constitutiva directa del receptor de trombopoyetina). El resultado es proliferación clonal excesiva con maduración conservada (hematopoyesis eficaz), a diferencia de la apoptosis intramedular del síndrome mielodisplásico. El fenotipo clínico depende de la carga alélica de la mutación y de mutaciones adicionales cooperantes; en la mielofibrosis, los megacariocitos atípicos liberan un exceso de citocinas profibróticas (TGF-β, PDGF) que estimulan a fibroblastos medulares policlonales (no parte del clon neoplásico) a depositar colágeno y reticulina en exceso.${figBlock('Imagen 1', 'Vía JAK-STAT y las 3 mutaciones driver', `
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;max-width:440px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">Receptor de trombopoyetina (MPL)<br><span style="font-weight:400;color:var(--ink-dim);font-size:10px;">membrana celular</span></div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);">JAK2</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">STAT<br><span style="font-weight:400;color:var(--ink-dim);font-size:10px;">fosforilado, dimeriza y migra al núcleo</span></div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:10px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">NÚCLEO<br><span style="font-weight:400;font-size:10.5px;">Transcripción de genes de proliferación y supervivencia clonal</span></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:520px;margin:14px auto 0;">
  <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:6px;padding:8px 10px;font-size:10.5px;color:var(--ink);grid-column:span 2;"><strong style="color:#8c3a34;">JAK2 V617F</strong> (dominio pseudocinasa JH2): pierde la autoinhibición. La ÚNICA mutación presente en las 3 entidades (PV, TE, mielofibrosis).</div>
  <div style="background:#966b3522;border:1px solid #966b35;border-radius:6px;padding:8px 10px;font-size:10.5px;color:var(--ink);"><strong style="color:#966b35;">CALR</strong> (~20-25% de TE/mielofibrosis): genera una secuencia nueva que activa a MPL de forma anómala.</div>
  <div style="background:#5c6b8c22;border:1px solid #5c6b8c;border-radius:6px;padding:8px 10px;font-size:10.5px;color:var(--ink);"><strong style="color:#5c6b8c;">Mutación de MPL</strong> (~3-8% de TE/mielofibrosis): activa el receptor directamente, sin necesidad de su ligando.</div>
</div>`)}</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> El espectro va desde el hallazgo incidental en una biometría hemática de rutina hasta síntomas constitucionales (sudoración nocturna, pérdida de peso, prurito acuagénico en la policitemia vera, saciedad precoz por esplenomegalia), y el evento trombótico (arterial o venoso, incluyendo sitios atípicos como la trombosis esplácnica) como manifestación inicial en hasta un tercio de los casos de policitemia vera/trombocitemia esencial. El diagnóstico definitivo, el manejo específico de cada subtipo y de sus complicaciones se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Khoury JD, Solary E, Abla O, et al. The 5th edition of the World Health Organization Classification of Haematolymphoid Tumours: Myeloid and Histiocytic/Dendritic Neoplasms. Leukemia. 2022;36(7):1703-1719.',
  'Arber DA, Orazi A, Hasserjian RP, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias: integrating morphologic, clinical, and genomic data. Blood. 2022;140(11):1200-1228.',
  'Marchetti M, Vannucchi AM, Griesshammer M, et al. Appropriate management of polycythaemia vera with cytoreductive drug therapy: European LeukemiaNet 2021 recommendations. Lancet Haematol. 2022;9(4):e301-e311.',
  'Barbui T, Tefferi A, Vannucchi AM, et al. Philadelphia chromosome-negative classical myeloproliferative neoplasms: revised management recommendations from European LeukemiaNet. Leukemia. 2018;32(5):1057-1069.',
  'Marchioli R, Finazzi G, Specchia G, et al. Cardiovascular events and intensity of treatment in polycythemia vera (CYTO-PV). N Engl J Med. 2013;368(1):22-33.',
  'Barbui T, Finazzi G, Carobbio A, et al. Development and validation of an International Prognostic Score of thrombosis in World Health Organization-essential thrombocythemia (IPSET-thrombosis). Blood. 2012;120(26):5128-5133.',
  'Passamonti F, Thiele J, Girodon F, et al. A prognostic model to predict survival in 867 World Health Organization-defined essential thrombocythemia at diagnosis. Blood. 2012;120(6):1197-1201.',
  'Passamonti F, Cervantes F, Vannucchi AM, et al. A dynamic prognostic model to predict survival in primary myelofibrosis: a study by the IWG-MRT (DIPSS). Blood. 2010;115(9):1703-1708.',
  'Gangat N, Caramazza D, Vaidya R, et al. DIPSS plus: a refined Dynamic International Prognostic Scoring System for primary myelofibrosis that incorporates prognostic information from karyotype, platelet count, and transfusion status. J Clin Oncol. 2011;29(4):392-397.',
  'Verstovsek S, Mesa RA, Gotlib J, et al. A double-blind, placebo-controlled trial of ruxolitinib for myelofibrosis (COMFORT-I). N Engl J Med. 2012;366(9):799-807.',
  'Vannucchi AM, Kiladjian JJ, Griesshammer M, et al. Ruxolitinib versus standard therapy for the treatment of polycythemia vera (RESPONSE). N Engl J Med. 2015;372(5):426-435.',
  'Tefferi A, Barbui T. Polycythemia vera and essential thrombocythemia: 2021 update on diagnosis, risk-stratification and management. Am J Hematol. 2020;95(12):1599-1613.',
  'Rumi E, Cazzola M. Diagnosis, risk stratification, and response evaluation in classical myeloproliferative neoplasms. Blood. 2017;129(6):680-692.',
  'Tefferi A. Primary myelofibrosis: 2021 update on diagnosis, risk-stratification and management. Am J Hematol. 2021;96(1):145-162.',
  'Budde U, van Genderen PJ. Acquired von Willebrand disease in patients with high platelet counts. Semin Thromb Hemost. 1997;23(5):425-431.',
  'De Stefano V, Za T, Rossi E, et al. Splanchnic vein thrombosis in myeloproliferative neoplasms: risk factors for recurrences in a cohort of 181 patients. Blood. 2008;112(2):298-305.'
];

// Reproduce el marcado de .modal-figure (mismo helper que SMD/miocardiopatías/ECV) para insertar
// tablas EN LÍNEA justo debajo del párrafo que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const teVsPmfTable = `
  <div class="table-wrap">
    <table>
      <thead><tr><th>Característica</th><th>Trombocitemia esencial</th><th>Mielofibrosis prefibrótica</th></tr></thead>
      <tbody>
        <tr><td class="figure-org">Morfología megacariocítica</td><td>Grandes, maduros, núcleo hiperlobulado, SIN atipia marcada</td><td>Atípicos, agrupados, alteraciones nucleares displásicas</td></tr>
        <tr><td class="figure-org">Fibrosis reticulínica</td><td>Ausente o mínima</td><td>Ausente por definición (grado 0-1), pero con atipia megacariocítica ya presente</td></tr>
        <tr><td class="figure-org">Celularidad medular</td><td>Habitualmente normal para la edad</td><td>Hipercelular, con proliferación granulocítica e hipoeritropoyesis</td></tr>
        <tr><td class="figure-org">LDH / esplenomegalia</td><td>Habitualmente normal / infrecuente</td><td>Con frecuencia ya elevada / más frecuente</td></tr>
        <tr><td class="figure-org">Pronóstico</td><td>El más favorable del grupo</td><td>Intermedio; mayor riesgo de progresión a fibrosis franca</td></tr>
      </tbody>
    </table>
  </div>
  <div class="figure-grade-box">La distinción histológica entre ambas entidades, antes agrupadas como "trombocitemia esencial", tiene impacto pronóstico real desde la revisión de la clasificación OMS 2016.</div>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'PV y TE (fase proliferativa)',
      tituloB: 'Mielofibrosis (fase fibrótica / esplenomegalia sintomática)',
      compensada: 'Muchos pacientes están asintomáticos, con hallazgo incidental en una biometría hemática de rutina. Cuando hay síntomas: cefalea, mareo, acúfenos, visión borrosa transitoria (hiperviscosidad, más típico de la policitemia vera), eritromelalgia (dolor/eritema/calor quemante en manos o pies, por microvasculopatía), prurito acuagénico (tras el baño, muy específico de la policitemia vera, por activación de basófilos/mastocitos), plétora facial, y esplenomegalia leve-moderada. El evento trombótico (arterial o venoso, incluyendo la trombosis esplácnica —Budd-Chiari, porta, mesentérica—) puede ser la manifestación inicial en hasta un tercio de los casos; la trombosis esplácnica en un paciente joven sin otro factor de riesgo evidente es especialmente sugestiva de una neoplasia mieloproliferativa subyacente.',
      descompensada: 'Síntomas constitucionales marcados (sudoración nocturna profusa, pérdida de peso &gt;10% en 6 meses, fiebre de bajo grado sin infección), fatiga intensa por anemia progresiva, esplenomegalia masiva sintomática (saciedad precoz, dolor/plenitud en hipocondrio izquierdo, infartos esplénicos con dolor referido al hombro izquierdo), y hematopoyesis extramedular (hepatomegalia y, con menor frecuencia, masas paravertebrales o derrames serosos). A diferencia de la fase proliferativa temprana (hemograma elevado), predominan las citopenias progresivas por insuficiencia medular avanzada.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con diferencial', utilidad: 'Documenta eritrocitosis (PV), trombocitosis (TE), o el cuadro leucoeritroblástico con dacriocitos "en lágrima" en el frotis (MFP), un hallazgo morfológico clave que orienta hacia mielofibrosis antes incluso de la biopsia.' },
      { prueba: 'Eritropoyetina sérica', utilidad: 'Baja/suprimida en la policitemia vera (por retroalimentación negativa de la eritrocitosis autónoma), a diferencia de la eritrocitosis secundaria donde está normal o elevada; es la prueba que primero orienta el diagnóstico diferencial de la eritrocitosis.' },
      { prueba: 'Panel de mutaciones driver (JAK2 V617F, JAK2 exón 12 si V617F negativo, CALR, MPL)', utilidad: 'Esencial para el diagnóstico OMS de las 4 entidades de esta sección; el tipo de mutación también aporta valor pronóstico (CALR tipo 2/like y "triple negativo" peor pronóstico en TE/MFP).' },
      { prueba: 'LDH', utilidad: 'Elevada en la mielofibrosis, proporcional a la actividad proliferativa/recambio celular; también se eleva con la transformación a fase blástica.' },
      { prueba: 'Ácido úrico', utilidad: 'Elevado por el recambio celular aumentado, característico del estado hiperproliferativo del grupo.' }
    ],
    no_invasivos: [
      { metodo: 'IPSET-thrombosis', interpretacion: 'Estratifica el riesgo trombótico en la trombocitemia esencial y guía la indicación de citorreducción; ver Escalas.', cutoff: '3 categorías de riesgo' },
      { metodo: 'DIPSS / DIPSS-plus', interpretacion: 'Estratifica el pronóstico global en la mielofibrosis y es el criterio central para decidir el momento del trasplante alogénico; ver Escalas.', cutoff: '4-6 categorías de riesgo' }
    ],
    imagen: [
      { modalidad: 'Biopsia de médula ósea con tinción de reticulina/tricrómico', hallazgos: 'Estudio OBLIGATORIO para el diagnóstico de las 4 entidades: evalúa celularidad, morfología megacariocítica (el dato más discriminativo entre TE y mielofibrosis prefibrótica) y el grado de fibrosis reticulínica/colágena; con frecuencia el aspirado es "seco" (no productivo) en la mielofibrosis manifiesta, por lo que la biopsia es indispensable.' },
      { modalidad: 'Ecografía abdominal / TC', hallazgos: 'Cuantifica objetivamente el tamaño esplénico (relevante para decisiones terapéuticas) y detecta trombosis esplácnica.' },
      { modalidad: 'Cariotipo/FISH de médula ósea (excluir BCR-ABL1)', hallazgos: 'Excluye leucemia mieloide crónica en todo paciente con trombocitosis/leucocitosis antes de diagnosticar una NMP BCR-ABL1 negativa; alteraciones citogenéticas adicionales en la mielofibrosis tienen valor pronóstico independiente (incorporadas al DIPSS-plus).' },
      { modalidad: 'Angio-TC/RM o Doppler dirigido', hallazgos: 'Ante sospecha de trombosis en un sitio atípico (esplácnica, senos venosos cerebrales), incluso con biometría hemática aparentemente normal.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'Dos escalas de referencia con roles distintos: el IPSET-thrombosis estratifica el riesgo trombótico en la trombocitemia esencial para decidir la intensidad de la citorreducción; el DIPSS/DIPSS-plus estratifica el pronóstico global en la mielofibrosis y es el criterio central para decidir el momento del trasplante alogénico, la única opción curativa del grupo.',
    escalas: [
      { nombre: 'Criterios diagnósticos OMS 2022', componentes: 'Hemoglobina/hematocrito y masa eritrocitaria (PV), recuento plaquetario (TE), histología medular y grado de fibrosis (mielofibrosis), presencia de mutación driver, eritropoyetina sérica baja (PV).', formula: 'Combinación de criterios mayores/menores específicos por entidad (ver cada tarjeta en Complicaciones).', interpretacion: 'Define cada uno de los 4 subtipos de esta sección; ningún criterio aislado (ni siquiera la mutación driver) es diagnóstico por sí solo sin el resto del contexto morfológico.' },
      { nombre: 'IPSET-thrombosis', componentes: 'Edad &gt;60 años, antecedente de trombosis previa, presencia de factores de riesgo cardiovascular, mutación de JAK2.', formula: 'Puntaje ponderado (el antecedente de trombosis y la edad avanzada pesan más que los otros dos componentes). Calculadora disponible más abajo.', interpretacion: 'Bajo riesgo (sin trombosis previa, edad &lt;60, sin JAK2): considerar solo aspirina o vigilancia; riesgo intermedio: individualizar; alto riesgo (trombosis previa, o edad &gt;60 + JAK2 positivo): citorreducción indicada.' },
      { nombre: 'DIPSS', componentes: 'Edad &gt;65 años, síntomas constitucionales, hemoglobina &lt;10 g/dL, leucocitos &gt;25x10⁹/L, blastos circulantes ≥1%.', formula: 'Suma ponderada, 4 categorías de riesgo. Calculadora disponible más abajo.', interpretacion: 'Guía la decisión de trasplante alogénico; la supervivencia mediana va desde años en el riesgo bajo hasta menos de 2 años en el riesgo alto sin trasplante.' },
      { nombre: 'DIPSS-plus', componentes: 'Las mismas 5 variables del DIPSS, más cariotipo desfavorable, dependencia transfusional, y plaquetas &lt;100x10⁹/L.', formula: 'Suma ponderada, 6 categorías de riesgo (refinamiento del DIPSS, no se resume en la calculadora simple de más abajo).', interpretacion: 'Refina aún más la estratificación pronóstica del DIPSS al incorporar variables citogenéticas y transfusionales.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Policitemia vera',
      color: '#8c3a34',
      definicion: 'NMP caracterizada por proliferación clonal predominantemente eritroide, con eritrocitosis absoluta (Hgb &gt;16.5 g/dL en varones o &gt;16 g/dL en mujeres, o Hto &gt;49%/48% respectivamente, o masa eritrocitaria elevada), casi siempre asociada a mutación de JAK2 (V617F o exón 12).',
      fisiopatologia: 'La mutación de JAK2 (V617F en el dominio pseudocinasa JH2, que pierde su función autoinhibitoria; o del exón 12, menos frecuente) activa de forma constitutiva la vía JAK-STAT independiente de eritropoyetina, produciendo proliferación eritroide autónoma; la retroalimentación negativa resultante suprime la eritropoyetina endógena a niveles bajos, el hallazgo bioquímico distintivo frente a la eritrocitosis secundaria.',
      epidemiologia: 'Incidencia ~0.5-2 casos por 100,000 habitantes al año, mediana de edad al diagnóstico ~60 años, ligero predominio masculino.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino', 'Mutación de JAK2 (prácticamente universal, forma parte de la definición)'],
      clinica: 'Plétora facial, cefalea, mareo, acúfenos, visión borrosa transitoria (hiperviscosidad), eritromelalgia, prurito acuagénico (muy específico), esplenomegalia palpable en la mayoría; el evento trombótico (arterial o venoso, incluyendo trombosis esplácnica) puede ser la manifestación inicial.',
      criterios_dx: 'Criterios mayores OMS: (1) Hgb &gt;16.5 g/dL (varón) / &gt;16 g/dL (mujer), o Hto &gt;49%/48%, o masa eritrocitaria elevada; (2) biopsia de médula ósea con hipercelularidad y panmielosis trilineal con proliferación megacariocítica pleomórfica madura; (3) mutación de JAK2 V617F o exón 12. Criterio menor: eritropoyetina sérica baja. Diagnóstico con los 3 mayores, o los 2 primeros mayores más el menor.',
      laboratorio: 'Eritropoyetina sérica baja/suprimida (diferencia clave con la eritrocitosis secundaria); JAK2 V617F positivo en ~95-98% (JAK2 exón 12 en la mayoría del resto); frecuente leucocitosis y trombocitosis concomitantes (panmielosis).',
      imagen: 'Biopsia de médula ósea (criterio diagnóstico obligatorio, no opcional, incluso con JAK2 positivo y Hgb/Hto claramente elevados); ecografía abdominal para esplenomegalia; angio-TC/RM si hay sospecha de trombosis esplácnica.',
      complementarios: 'Cálculo del riesgo trombótico (edad &gt;60 años y/o antecedente de trombosis definen alto riesgo en PV, de forma más simple que el IPSET usado en TE).',
      dx_diferencial: 'Eritrocitosis secundaria (hipoxia crónica, EPOC, apnea del sueño, tabaquismo, tumores productores de eritropoyetina, dopaje), eritrocitosis congénita, deshidratación (eritrocitosis relativa/espuria).',
      tx_medico: 'Flebotomía terapéutica para mantener el hematocrito &lt;45% en ambos sexos (el objetivo con mayor evidencia de reducción de eventos trombóticos, estudio CYTO-PV); control agresivo de factores de riesgo cardiovascular.',
      tx_farmacologico: 'Ácido acetilsalicílico a dosis baja (81-100 mg/día) en todo paciente sin contraindicación; citorreducción con hidroxiurea de primera línea en alto riesgo (edad &gt;60 años o trombosis previa) o intolerancia a flebotomía; ruxolitinib (inhibidor de JAK1/2) de segunda línea si hay resistencia/intolerancia a hidroxiurea, con buen control adicional del prurito y la esplenomegalia; interferón alfa pegilado como alternativa de primera línea en el paciente joven o en el embarazo.',
      tx_intervencionista: 'No aplica de forma directa, salvo tratamiento de una complicación trombótica específica.',
      criterios_uci: 'Complicación trombótica mayor (ACV, IAM, TEP masivo), síndrome de hiperviscosidad grave.',
      criterios_tips: 'No aplica de forma directa, salvo Budd-Chiari agudo con compromiso hepático grave (ver la tarjeta de trombosis).',
      criterios_trasplante: 'No aplica en la fase proliferativa; considerar solo si evoluciona a mielofibrosis secundaria (post-PV MF, ver Complicaciones).',
      seguimiento_hospitalario: 'Vigilancia de complicación trombótica aguda si es el motivo de ingreso.',
      seguimiento_ambulatorio: 'Biometría hemática seriada con ajuste de la frecuencia de flebotomía/dosis de citorreductor para mantener el hematocrito objetivo, vigilancia de progresión a mielofibrosis secundaria o transformación blástica.',
      pronostico: 'Supervivencia mediana prolongada (&gt;20 años) con tratamiento adecuado del riesgo trombótico; la principal causa de morbimortalidad es la trombosis, no la transformación leucémica, aunque esta también puede ocurrir.',
      algoritmo: ['Eritrocitosis (Hgb/Hto elevados) → eritropoyetina sérica', 'EPO baja → JAK2 V617F/exón 12', 'Positivo + biopsia de médula ósea compatible → confirma PV', 'Estratificar riesgo trombótico (edad &gt;60/trombosis previa)', 'Flebotomía a Hto &lt;45% + aspirina en todos', 'Alto riesgo → agregar hidroxiurea (o interferón si joven/embarazo)']
    },
    {
      nombre: 'Trombocitemia esencial',
      color: '#966b35',
      definicion: 'NMP caracterizada por proliferación clonal predominantemente megacariocítica con trombocitosis sostenida (plaquetas ≥450x10⁹/L), sin eritrocitosis, fibrosis significativa, ni otra neoplasia mieloide que la explique.',
      fisiopatologia: 'Activación constitutiva de la vía JAK-STAT por una de tres mutaciones driver mutuamente excluyentes: JAK2 V617F (~50-60%), CALR (~20-25%, con dos tipos —1/like y 2/like— de valor pronóstico distinto), o MPL (~3-5%); ~10-15% son "triple negativas" (sin mutación driver identificable). El efecto dominante sobre la línea megacariocítica, sin la panmielosis de la PV, explica la trombocitosis relativamente aislada.',
      epidemiologia: 'Incidencia similar a la PV; distribución bimodal por edad, con un segundo pico en mujeres jóvenes en edad reproductiva, relevante para la planificación de embarazo.',
      factores_riesgo: ['Edad avanzada (primer pico)', 'Sexo femenino (segundo pico, mujeres jóvenes)', 'Mutación driver de alto riesgo (triple negativa o CALR tipo 2/like) asociada a peor pronóstico'],
      clinica: 'Frecuentemente asintomática, hallazgo incidental de trombocitosis; cuando hay síntomas, predominan los vasomotores (eritromelalgia, cefalea, alteraciones visuales transitorias) sobre los constitucionales; el evento trombótico (arterial más que venoso, a diferencia de la PV) puede ser la manifestación inicial; sangrado paradójico infrecuente pero posible con trombocitosis extrema (ver Complicaciones).',
      criterios_dx: 'Criterios mayores OMS: (1) plaquetas ≥450x10⁹/L sostenidas; (2) biopsia de médula ósea con proliferación predominante de la línea megacariocítica, megacariocitos grandes y maduros con núcleo hiperlobulado, sin incremento significativo de la granulopoyesis/eritropoyesis ni fibrosis reticulínica relevante; (3) no cumple criterios OMS de LMC, PV, mielofibrosis, SMD u otra neoplasia mieloide; (4) mutación driver (JAK2/CALR/MPL) o, en su ausencia, otro marcador clonal o exclusión razonable de trombocitosis reactiva. Diagnóstico con los 4 criterios mayores.',
      laboratorio: 'Panel de mutaciones driver (JAK2, CALR, MPL); ferritina y proteína C reactiva para excluir trombocitosis reactiva (ferropenia, inflamación) si el panel es negativo.',
      imagen: `Biopsia de médula ósea obligatoria: el criterio que distingue de forma más confiable la TE de la mielofibrosis prefibrótica, que tiene un pronóstico claramente peor.${figBlock('Tabla 1', 'Trombocitemia esencial vs. mielofibrosis prefibrótica', teVsPmfTable)} Ecografía abdominal si hay esplenomegalia palpable.`,
      complementarios: 'Cálculo del IPSET-thrombosis (ver Escalas) en todo paciente al diagnóstico.',
      dx_diferencial: 'Trombocitosis reactiva (ferropenia, inflamación/infección crónica, esplenectomía, hemorragia, neoplasia sólida), mielofibrosis primaria prefibrótica (la distinción histológica es central, ver tabla), leucemia mieloide crónica (excluir BCR-ABL1 siempre antes de diagnosticar TE).',
      tx_medico: 'Control de factores de riesgo cardiovascular modificables en todos los pacientes, independientemente del riesgo trombótico calculado.',
      tx_farmacologico: 'Ácido acetilsalicílico a dosis baja en la mayoría de los pacientes (salvo bajo riesgo sin mutación de JAK2 ni factores de riesgo cardiovascular, donde el beneficio es incierto, y salvo trombocitosis extrema con sospecha de enfermedad de von Willebrand adquirida no descartada); citorreducción con hidroxiurea de primera línea en el alto riesgo por IPSET-thrombosis; anagrelide (inhibidor selectivo de la maduración megacariocítica) o interferón alfa pegilado como alternativas, este último de elección en el embarazo o en el paciente joven que desea evitar el potencial leucemogénico teórico de la hidroxiurea a muy largo plazo.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Complicación trombótica mayor, sangrado mayor asociado a enfermedad de von Willebrand adquirida no reconocida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase habitual; considerar solo si evoluciona a mielofibrosis secundaria (post-ET MF).',
      seguimiento_hospitalario: 'Vigilancia de la complicación aguda si es el motivo de ingreso.',
      seguimiento_ambulatorio: 'Biometría hemática seriada, reevaluación periódica del riesgo trombótico, vigilancia de progresión a mielofibrosis secundaria.',
      pronostico: 'El más favorable de las 4 tarjetas de esta sección; supervivencia cercana a la de la población general si el riesgo trombótico se controla adecuadamente; riesgo de transformación a mielofibrosis o leucemia bajo pero presente a largo plazo.',
      algoritmo: ['Trombocitosis sostenida ≥450x10⁹/L → excluir causa reactiva (ferritina, PCR)', 'Panel de mutaciones driver (JAK2/CALR/MPL) + excluir BCR-ABL1', 'Biopsia de médula ósea → distingue de mielofibrosis prefibrótica', 'Calcular IPSET-thrombosis', 'Bajo riesgo → aspirina (individualizar) o vigilancia', 'Alto riesgo → agregar hidroxiurea (o interferón si joven/embarazo)']
    },
    {
      nombre: 'Mielofibrosis prefibrótica',
      color: '#5c6b8c',
      definicion: 'Forma temprana de mielofibrosis primaria (OMS 2016/2022), caracterizada por hipercelularidad medular con proliferación megacariocítica atípica sin fibrosis reticulínica significativa (grado 0-1), que la distingue histológicamente de la trombocitemia esencial (proliferación megacariocítica sin atipia marcada) y de la mielofibrosis manifiesta (fibrosis grado ≥2); tiene un curso clínico intermedio entre ambas.',
      fisiopatologia: 'Igual sustrato molecular que la mielofibrosis manifiesta (mutaciones driver de JAK2, CALR o MPL, con el mismo perfil de frecuencias), pero en una fase biológica más temprana, con menor liberación de citocinas profibróticas (TGF-β, PDGF) por los megacariocitos atípicos y, por tanto, sin la fibrosis reticulínica/colágena que define la fase manifiesta.',
      epidemiologia: 'Representa una proporción relevante de los casos históricamente diagnosticados como TE antes de la revisión histológica sistemática de la OMS 2016; su reconocimiento como entidad separada tiene impacto pronóstico real (peor que la TE verdadera).',
      factores_riesgo: ['Los mismos perfiles mutacionales de la mielofibrosis manifiesta', 'Mutación driver de alto riesgo (CALR tipo 2/like, triple negativa) asociada a mayor probabilidad de progresión a la forma manifiesta'],
      clinica: 'Con frecuencia indistinguible clínicamente de la TE al momento del diagnóstico (trombocitosis, síntomas vasomotores); la esplenomegalia y los síntomas constitucionales, cuando presentes, son más marcados que en la TE verdadera y orientan hacia esta entidad.',
      criterios_dx: 'Criterios mayores OMS: (1) proliferación y atipia megacariocítica sin fibrosis reticulínica &gt;grado 1, con hipercelularidad ajustada a la edad, proliferación granulocítica e hipoeritropoyesis; (2) no cumple criterios de LMC, PV, TE, SMD u otra neoplasia mieloide; (3) mutación driver o, en su ausencia, otro marcador clonal o ausencia de fibrosis reactiva menor. Criterios menores (≥1 requerido): anemia no atribuible a comorbilidad, leucocitosis ≥11x10⁹/L, esplenomegalia palpable, LDH elevada.',
      laboratorio: 'Panel de mutaciones driver; LDH con frecuencia ya elevada (a diferencia de la TE típica), un dato de sospecha antes incluso de la biopsia.',
      imagen: 'Biopsia de médula ósea (el estudio que establece la distinción definitiva con la TE, ver la tabla en esa tarjeta); ecografía abdominal para documentar esplenomegalia basal.',
      complementarios: 'Aplicar DIPSS si ya hay criterios de mielofibrosis manifiesta; en la forma prefibrótica pura, el pronóstico se extrapola con cautela dado que las escalas se validaron principalmente en la forma manifiesta.',
      dx_diferencial: 'Trombocitemia esencial (la distinción histológica es el punto central), mielofibrosis manifiesta (grado de fibrosis), mielofibrosis secundaria a otra causa (infecciosa, autoinmune, metastásica).',
      tx_medico: 'Igual enfoque general que la TE si el fenotipo es predominantemente trombocitósico, con vigilancia más estrecha de progresión dado el peor pronóstico basal.',
      tx_farmacologico: 'Citorreducción con hidroxiurea si hay indicación por riesgo trombótico o trombocitosis extrema, igual que en la TE; manejo de la anemia/esplenomegalia sintomática si ya presentes, extrapolado del manejo de la mielofibrosis manifiesta.',
      tx_intervencionista: 'No aplica de forma directa en la mayoría; evaluar trasplante si progresa a manifiesta con alto riesgo por DIPSS.',
      criterios_uci: 'Complicación trombótica mayor.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No indicado en la fase prefibrótica pura salvo progresión documentada a la forma manifiesta de alto riesgo.',
      seguimiento_hospitalario: 'Igual que la TE si esa es la presentación predominante.',
      seguimiento_ambulatorio: 'Vigilancia más estrecha que la TE verdadera (biometría, tamaño esplénico, LDH) por el mayor riesgo de progresión a la forma manifiesta.',
      pronostico: 'Intermedio entre la TE (mejor) y la mielofibrosis manifiesta (peor); mayor riesgo de progresión a fibrosis franca y de transformación leucémica que la TE verdadera.',
      algoritmo: ['Trombocitosis con esplenomegalia/LDH elevada desproporcionadas → sospechar sobre TE simple', 'Biopsia de médula ósea → proliferación megacariocítica atípica SIN fibrosis &gt;grado 1', 'Confirma mielofibrosis prefibrótica (distinta de TE)', 'Panel de mutaciones driver', 'Manejo similar a TE si el fenotipo es trombocitósico, con vigilancia más estrecha', 'Progresión a fibrosis grado ≥2 → reclasificar y manejar como mielofibrosis manifiesta']
    },
    {
      nombre: 'Mielofibrosis manifiesta',
      color: '#7a1f3d',
      definicion: 'Forma avanzada de mielofibrosis primaria, caracterizada por fibrosis reticulínica o colágena de grado ≥2 en la médula ósea, con el cuadro clínico clásico de esplenomegalia progresiva, síntomas constitucionales marcados, y citopenias por insuficiencia medular progresiva pese a hematopoyesis extramedular compensadora (bazo, hígado).',
      fisiopatologia: 'Los megacariocitos displásicos/atípicos del clon mutado liberan un exceso de citocinas profibróticas (TGF-β, factor de crecimiento derivado de plaquetas, factor de crecimiento endotelial vascular) que estimulan a los fibroblastos medulares (policlonales, no parte del clon neoplásico) a depositar colágeno y reticulina en exceso, desplazando progresivamente la hematopoyesis normal hacia sitios extramedulares (bazo, hígado); la fibrosis en sí es una reacción reactiva-secundaria a la neoplasia, no la neoplasia misma.',
      epidemiologia: 'La menos frecuente y de peor pronóstico de las NMP clásicas; puede ser primaria (de novo) o secundaria a la evolución de una PV (post-PV MF) o una TE (post-ET MF) previas, ver Complicaciones para esta última.',
      factores_riesgo: ['Edad avanzada', 'Mutación driver de alto riesgo (triple negativa, CALR tipo 2/like)', 'Mutaciones adicionales de alto riesgo molecular (ASXL1, SRSF2, EZH2, IDH1/2)', 'Cariotipo desfavorable'],
      clinica: 'Esplenomegalia con frecuencia masiva y sintomática (saciedad precoz, dolor/plenitud en hipocondrio izquierdo, infartos esplénicos con dolor agudo referido al hombro izquierdo), síntomas constitucionales marcados (sudoración nocturna profusa, pérdida de peso, fiebre de bajo grado, prurito), fatiga por anemia progresiva, dolor óseo; la hematopoyesis extramedular puede producir hepatomegalia y, con menor frecuencia, masas paravertebrales o derrames serosos.',
      criterios_dx: 'Criterios mayores OMS: (1) proliferación y atipia megacariocítica con fibrosis reticulínica o colágena de grado 2-3; (2) no cumple criterios de LMC, PV, TE, SMD u otra neoplasia mieloide; (3) mutación driver o marcador clonal, o fibrosis reactiva secundaria excluida. Criterios menores (≥1): anemia no atribuible a comorbilidad, leucocitosis ≥11x10⁹/L, esplenomegalia palpable, LDH elevada, leucoeritroblastosis en frotis periférico.',
      laboratorio: `Frotis periférico con cuadro leucoeritroblástico característico (precursores mieloides y eritroides inmaduros circulantes) y dacriocitos ("células en lágrima"), el hallazgo morfológico más sugestivo en sangre periférica; LDH marcadamente elevada; panel de mutaciones driver más panel extendido de mutaciones de alto riesgo molecular (ASXL1, SRSF2, EZH2, IDH1/2) para el pronóstico.${figBlock('Imagen 3', 'Dacriocitos ("células en lágrima") en mielofibrosis', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tear_drop_poikilocytes_in_Myelofibrosis.jpg/960px-Tear_drop_poikilocytes_in_Myelofibrosis.jpg" alt="Frotis de sangre periférica con dacriocitos: eritrocitos con forma característica de lágrima, típicos de la mielofibrosis." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Dacriocitos (eritrocitos "en lágrima"), hallazgo frecuente en mielofibrosis, infiltración medular metastásica y síndrome mielodisplásico. Osaretin, Wikimedia Commons, CC BY-SA 4.0.</p>`)}`,
      imagen: `Biopsia de médula ósea (con frecuencia "seca", aspirado no productivo, por lo que la biopsia es indispensable); ecografía/TC abdominal para cuantificar objetivamente el tamaño esplénico, relevante para decisiones terapéuticas y quirúrgicas.${figBlock('Imagen 4', 'Fibrosis reticulínica (tinción de plata)', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Myelofibrosis%2C_Reticulin_Stain_%286032644716%29.jpg/960px-Myelofibrosis%2C_Reticulin_Stain_%286032644716%29.jpg" alt="Biopsia de médula ósea con tinción de reticulina mostrando un exceso de fibras de reticulina, compatible con mielofibrosis grado avanzado." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Tinción de reticulina: la densidad de la red de fibras (no visible con Wright-Giemsa) es lo que define el grado de fibrosis (0-3) y distingue la mielofibrosis prefibrótica de la manifiesta. Ed Uthman, Wikimedia Commons, CC BY 2.0.</p>`)}`,
      complementarios: 'Cálculo de DIPSS/DIPSS-plus (ver Escalas) en todo paciente al diagnóstico y ante cualquier cambio clínico relevante; tipificación HLA temprana en todo paciente con riesgo intermedio-2/alto elegible a trasplante.',
      dx_diferencial: 'Mielofibrosis secundaria a otra neoplasia mieloide (post-PV MF, post-ET MF, ver Complicaciones), mielofibrosis reactiva (infecciosa, autoinmune, metastásica, por radiación), leucemia mieloide crónica con fibrosis medular asociada (excluir BCR-ABL1).',
      tx_medico: 'Soporte transfusional guiado por síntomas; manejo multidisciplinario temprano dado el pronóstico limitado sin trasplante en el riesgo alto.',
      tx_farmacologico: 'Inhibidores de JAK (ruxolitinib de primera línea; fedratinib de segunda línea o en trombocitopenia leve-moderada; pacritinib específicamente útil en trombocitopenia grave &lt;50x10⁹/L; momelotinib con beneficio adicional sobre la anemia) para el control de la esplenomegalia y los síntomas constitucionales, sin modificar de forma establecida la historia natural de la fibrosis en la mayoría de los pacientes; agentes estimulantes de la eritropoyesis, danazol, o luspatercept para la anemia sintomática en pacientes seleccionados.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas: única opción potencialmente curativa, indicado en riesgo intermedio-2/alto por DIPSS en el paciente elegible; esplenectomía o radioterapia esplénica paliativa en la esplenomegalia masiva refractaria a inhibidores de JAK, con riesgo perioperatorio no despreciable.',
      criterios_uci: 'Complicación trombótica mayor, infarto esplénico masivo con inestabilidad, síndrome de lisis tumoral si progresa a fase blástica.',
      criterios_tips: 'No aplica de forma directa.',
      criterios_trasplante: 'Riesgo intermedio-2 o alto por DIPSS/DIPSS-plus en paciente elegible: indicación firme de trasplante alogénico temprano, dado que es la única opción curativa y el pronóstico sin él es limitado en ese grupo.',
      seguimiento_hospitalario: 'Vigilancia de citopenias durante el ajuste de dosis de inhibidores de JAK (pueden inducir o empeorar anemia/trombocitopenia), profilaxis de reactivación de infecciones oportunistas (herpes zóster documentado con ruxolitinib).',
      seguimiento_ambulatorio: 'Reevaluación periódica de DIPSS/DIPSS-plus, tamaño esplénico y síntomas (escalas de síntomas validadas), preparación/seguimiento del proceso de trasplante en el elegible.',
      pronostico: 'El más desfavorable de las 4 tarjetas de esta sección; la mediana de supervivencia varía ampliamente según la categoría DIPSS, desde años en el riesgo bajo hasta menos de 2 años en el riesgo alto sin trasplante.',
      algoritmo: ['Esplenomegalia + síntomas constitucionales + citopenias → frotis (leucoeritroblastosis, dacriocitos) + LDH', 'Biopsia de médula ósea → fibrosis reticulínica/colágena grado ≥2', 'Panel de mutaciones driver + panel de alto riesgo molecular', 'Calcular DIPSS/DIPSS-plus', 'Riesgo bajo/intermedio-1 → inhibidor de JAK para síntomas/esplenomegalia', 'Riesgo intermedio-2/alto y elegible → trasplante alogénico temprano']
    },
    {
      nombre: 'Trombosis arterial y venosa',
      color: '#3f6b52',
      definicion: 'Complicación transversal que puede ocurrir sobre cualquiera de las 4 entidades de esta sección (ver cada tarjeta), particularmente frecuente en la policitemia vera y la trombocitemia esencial: evento trombótico arterial (ACV, IAM, isquemia arterial periférica) o venoso (trombosis venosa profunda, tromboembolia pulmonar, trombosis venosa esplácnica —Budd-Chiari, porta, mesentérica, esplénica—), esta última especialmente característica y sugestiva de una NMP subyacente incluso antes de que se manifieste la alteración hematológica franca.',
      fisiopatologia: 'No repite el mecanismo de base de cada subtipo (ya descrito en su tarjeta); refleja el estado protrombótico intrínseco de las NMP: activación endotelial y leucocitaria mediada por la señalización JAK-STAT constitutiva, formación de trampas extracelulares de neutrófilos (NETs) protrombóticas, agregación plaquetaria aumentada, y micropartículas procoagulantes circulantes, independientemente (aunque agravado) del recuento absoluto de células.',
      epidemiologia: 'La trombosis es la manifestación inicial en hasta un tercio de los casos de PV/TE, y la principal causa de morbimortalidad en la PV; la trombosis venosa esplácnica tiene una prevalencia de NMP subyacente de hasta 30-40% cuando se investiga sistemáticamente, particularmente en el paciente joven sin otro factor de riesgo evidente.',
      factores_riesgo: ['Edad &gt;60 años', 'Antecedente de trombosis previa (el predictor más fuerte de recurrencia)', 'Mutación de JAK2 (mayor riesgo trombótico que CALR/MPL)', 'Leucocitosis marcada', 'Factores de riesgo cardiovascular tradicionales concomitantes'],
      clinica: 'Según el territorio afectado: déficit neurológico focal (ACV), dolor torácico/disnea (IAM, TEP), dolor abdominal con ascitis/hepatomegalia de instalación relativamente rápida (Budd-Chiari), dolor abdominal difuso con o sin datos de isquemia intestinal (trombosis mesentérica).',
      criterios_dx: 'Confirmación por el estudio de imagen dirigido al territorio sospechado (angio-TC/RM, Doppler, ecocardiograma); en todo paciente joven con trombosis venosa esplácnica sin otro factor de riesgo evidente, investigar activamente una NMP subyacente (JAK2, biopsia de médula ósea) incluso con biometría hemática aparentemente normal (puede estar enmascarada por hemodilución/hiperesplenismo secundario a la propia trombosis).',
      laboratorio: 'Biometría hemática (puede estar falsamente normal en la trombosis esplácnica, ver arriba), panel de mutaciones driver si no se había realizado previamente.',
      imagen: `Angio-TC/RM del territorio sospechado; ecografía Doppler para trombosis venosa profunda de extremidades.${figBlock('Imagen 5', 'Trombosis de la vena porta en TC contrastada', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pfortaderthrombose_mit_grossem_Thrombus_59M_-_CT_-_001.jpg/960px-Pfortaderthrombose_mit_grossem_Thrombus_59M_-_CT_-_001.jpg" alt="TC de abdomen con contraste mostrando un gran trombo hiperdenso ocupando la vena porta." style="width:100%;max-width:520px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Trombosis venosa portal con un trombo de gran tamaño, ya hiperdenso en la fase arterial (izquierda). La trombosis esplácnica en un paciente joven sin otro factor de riesgo obliga a descartar una NMP subyacente. Hellerhoff, Wikimedia Commons, CC BY-SA 4.0.</p>`)}`,
      complementarios: 'Reevaluación del riesgo trombótico global (IPSET-thrombosis en TE) tras el evento, que por definición reclasifica al paciente como alto riesgo.',
      dx_diferencial: 'Trombofilia hereditaria concomitante (no excluye una NMP subyacente, pueden coexistir), otras causas de trombosis venosa esplácnica (cirrosis, neoplasia sólida local, estados protrombóticos adquiridos).',
      tx_medico: 'Manejo de soporte según el territorio afectado, con la particularidad de que el control hematológico agresivo de la enfermedad de base es tan importante como la anticoagulación/antiagregación específica.',
      tx_farmacologico: 'Anticoagulación terapéutica estándar para la trombosis venosa (incluyendo la esplácnica, donde también está indicada pese a la presencia frecuente de trombocitosis, salvo sangrado activo), habitualmente indefinida dado que el estado protrombótico de base persiste; intensificación de la citorreducción independientemente del recuento celular previo, porque el evento trombótico por sí solo ya reclasifica al paciente como alto riesgo.',
      tx_intervencionista: 'Trombectomía/trombólisis dirigida por catéter en casos seleccionados de trombosis venosa esplácnica extensa con compromiso isquémico; derivación portosistémica intrahepática transyugular (TIPS) en el Budd-Chiari con hipertensión portal refractaria al manejo médico.',
      criterios_uci: 'ACV/IAM con inestabilidad, TEP masivo, Budd-Chiari agudo con insuficiencia hepática, isquemia mesentérica con datos de abdomen agudo.',
      criterios_tips: 'Budd-Chiari con hipertensión portal sintomática refractaria al manejo médico (ascitis refractaria, sangrado variceal recurrente).',
      criterios_trasplante: 'No aplica de forma directa a esta complicación (salvo trasplante hepático en el Budd-Chiari con falla hepática fulminante, un escenario infrecuente, no relacionado al trasplante hematopoyético de las demás tarjetas).',
      seguimiento_hospitalario: 'Vigilancia neurológica/hemodinámica según el territorio afectado, inicio precoz de anticoagulación una vez descartada contraindicación.',
      seguimiento_ambulatorio: 'Anticoagulación/antiagregación a largo plazo (con frecuencia indefinida), control estricto del hematocrito/recuento plaquetario objetivo, reevaluación periódica del riesgo trombótico.',
      pronostico: 'El evento trombótico inicial reclasifica al paciente como alto riesgo de forma permanente; con manejo hematológico y antitrombótico adecuado, el riesgo de recurrencia se reduce sustancialmente aunque nunca se iguala al de la población general.',
      algoritmo: ['Trombosis arterial/venosa (particularmente esplácnica o en sitio atípico) → sospechar NMP subyacente si no hay otro factor evidente', 'Biometría hemática + panel de mutaciones driver + biopsia de médula ósea si hay alta sospecha', 'Confirmado NMP → anticoagulación/antiagregación específica del territorio', 'Reclasificar automáticamente como alto riesgo trombótico', 'Intensificar citorreducción independientemente del recuento celular previo', 'TIPS si Budd-Chiari con hipertensión portal refractaria']
    },
    {
      nombre: 'Transformación a mielofibrosis secundaria',
      color: '#6b4a2e',
      definicion: 'Complicación evolutiva que puede desarrollarse sobre la policitemia vera (post-PV MF) o la trombocitemia esencial (post-ET MF) ya establecidas (ver esas tarjetas): progresión de la enfermedad de base hacia un fenotipo de mielofibrosis manifiesta, clínica e histológicamente indistinguible de la mielofibrosis primaria salvo por el antecedente documentado de PV/TE previa.',
      fisiopatologia: 'Adquisición progresiva de mutaciones adicionales cooperantes por el clon ya establecido, que aumentan la liberación de citocinas profibróticas por los megacariocitos atípicos, con el mismo mecanismo de fibrosis reactiva secundaria descrito en la tarjeta de mielofibrosis manifiesta, pero desarrollado sobre un sustrato clonal ya evolucionado durante años.',
      epidemiologia: 'Ocurre en aproximadamente 10-20% de los pacientes con PV y 5-10% de los pacientes con TE a los 15-20 años de evolución, con una incidencia acumulada que aumenta con el tiempo de enfermedad.',
      factores_riesgo: ['Mayor tiempo de evolución de la PV/TE de base', 'Mutación driver de alto riesgo (triple negativa, CALR tipo 2/like en la TE de base)', 'Mutaciones adicionales de alto riesgo molecular adquiridas (ASXL1, SRSF2, entre otras)', 'Leucocitosis marcada durante el curso de la enfermedad de base'],
      clinica: 'Igual que la mielofibrosis manifiesta de novo (esplenomegalia progresiva, síntomas constitucionales, citopenias progresivas), pero con el antecedente característico de haber cursado años con eritrocitosis/trombocitosis franca antes de la transición.',
      criterios_dx: 'Criterios del International Working Group (IWG-MRT): fibrosis reticulínica/colágena grado ≥2 sobre un diagnóstico previo documentado de PV o TE, más al menos criterios adicionales (anemia, leucoeritroblastosis, esplenomegalia progresiva, síntomas constitucionales, LDH elevada) según el caso.',
      laboratorio: 'Igual que la mielofibrosis manifiesta; comparación con el hemograma histórico del paciente para documentar la transición (descenso progresivo de hemoglobina/plaquetas que antes estaban elevadas).',
      imagen: 'Biopsia de médula ósea de reevaluación (comparación con la biopsia diagnóstica original si está disponible); ecografía/TC para documentar la progresión del tamaño esplénico.',
      complementarios: 'Cálculo de DIPSS/DIPSS-plus una vez confirmada la transición, igual que en la mielofibrosis manifiesta de novo.',
      dx_diferencial: 'Fibrosis medular reactiva por otra causa intercurrente, mielofibrosis primaria de novo con antecedente incidental de trombocitosis/eritrocitosis leve no diagnosticada previamente.',
      tx_medico: 'Igual que la mielofibrosis manifiesta de novo, ver esa tarjeta.',
      tx_farmacologico: 'Igual que la mielofibrosis manifiesta de novo (inhibidores de JAK, agentes para la anemia).',
      tx_intervencionista: 'Igual que la mielofibrosis manifiesta de novo, incluyendo la evaluación de trasplante alogénico según DIPSS.',
      criterios_uci: 'Igual que la mielofibrosis manifiesta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Igual que la mielofibrosis manifiesta de novo, según categoría DIPSS/DIPSS-plus.',
      seguimiento_hospitalario: 'Igual que la mielofibrosis manifiesta.',
      seguimiento_ambulatorio: 'Igual que la mielofibrosis manifiesta, con la particularidad de que el seguimiento a largo plazo de todo paciente con PV/TE debe incluir vigilancia activa de signos de esta transición (biometría, tamaño esplénico, síntomas, LDH) en cada consulta.',
      pronostico: 'Similar al de la mielofibrosis primaria manifiesta de la misma categoría DIPSS, en general algo más desfavorable que la forma de novo por la mayor edad y el tiempo de exposición acumulado a mutaciones cooperantes.',
      algoritmo: ['PV/TE conocida con descenso progresivo de hemoglobina/plaquetas antes elevadas, esplenomegalia progresiva o síntomas constitucionales nuevos → sospechar transformación', 'Biopsia de médula ósea de reevaluación → fibrosis grado ≥2 confirma la transición', 'Reclasificar como post-PV MF/post-ET MF', 'Calcular DIPSS/DIPSS-plus', 'Manejo idéntico a la mielofibrosis manifiesta de novo según el riesgo calculado']
    },
    {
      nombre: 'Transformación a fase blástica',
      color: '#5c3d5c',
      definicion: 'Complicación transversal que puede ocurrir sobre cualquiera de las 4 entidades de esta sección (ver cada tarjeta), con mayor frecuencia en la mielofibrosis (manifiesta o secundaria) que en la PV/TE en fase crónica: progresión a leucemia mieloide aguda, definida por ≥20% de blastos en médula ósea o sangre periférica, la evolución más temida y de peor pronóstico de todo el grupo.',
      fisiopatologia: 'No repite el mecanismo de base de cada subtipo (ya descrito en su tarjeta); refleja la adquisición secuencial de mutaciones cooperantes adicionales (TP53, RUNX1, mutaciones de la vía RAS, entre otras) por el clon mieloproliferativo ya establecido, que le confieren una ventaja proliferativa decisiva sobre la maduración.',
      epidemiologia: 'Riesgo acumulado a 10 años de aproximadamente 1-3% en la PV, 1-4% en la TE, y hasta 10-20% en la mielofibrosis manifiesta (mayor aún en el riesgo alto por DIPSS); la exposición prolongada a ciertos citorreductores ha sido implicada como factor contribuyente, aunque la evidencia es debatida para la hidroxiurea específicamente.',
      factores_riesgo: ['Diagnóstico de base de mielofibrosis (mayor riesgo que PV/TE)', 'Mutaciones de alto riesgo molecular adicionales (TP53, ASXL1, SRSF2)', 'Mayor tiempo de evolución de la enfermedad', 'Exposición prolongada a agentes citorreductores alquilantes', 'Cariotipo desfavorable'],
      clinica: 'Empeoramiento progresivo de las citopenias, aparición de blastos circulantes, síntomas sistémicos de leucemia aguda (fiebre, pérdida de peso, dolor óseo); puede presentarse también con progresión rápida de la esplenomegalia y del estado general.',
      criterios_dx: 'Documentación de ≥20% de blastos en médula ósea o sangre periférica en un paciente con NMP crónica ya conocida.',
      laboratorio: 'Biometría hemática con blastos circulantes; NGS repetido para documentar la evolución clonal.',
      imagen: 'Aspirado/biopsia de médula ósea de reevaluación (con frecuencia técnicamente difícil por la fibrosis subyacente si la enfermedad de base era mielofibrosis).',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Aumento transitorio de blastos por proceso infeccioso/inflamatorio intercurrente, que debe descartarse antes de etiquetar la transformación como definitiva.',
      tx_medico: 'Reevaluación completa del objetivo terapéutico (curativo vs. paliativo) según edad, comorbilidades y disponibilidad de donante, igual que en cualquier LMA secundaria.',
      tx_farmacologico: 'Manejo similar al de la leucemia mieloide aguda secundaria a neoplasia mieloide previa: quimioterapia de inducción intensiva en el paciente apto, o agente hipometilante (con o sin venetoclax) en el no apto para intensidad completa; tasas de respuesta generalmente inferiores a las de la LMA de novo.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas si se alcanza remisión y el paciente es elegible; es la única opción potencialmente curativa en este punto.',
      criterios_uci: 'Síndrome de lisis tumoral al iniciar citorreducción, leucostasis si hay hiperleucocitosis blástica marcada, sepsis neutropénica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Elegibilidad evaluada igual que en cualquier LMA secundaria; el pronóstico postrasplante es peor que en la LMA de novo equivalente.',
      seguimiento_hospitalario: 'Igual que el manejo hospitalario estándar de la leucemia mieloide aguda de nuevo diagnóstico.',
      seguimiento_ambulatorio: 'Igual que el seguimiento post-tratamiento estándar de LMA.',
      pronostico: 'Muy desfavorable, con supervivencia mediana de semanas a pocos meses sin tratamiento y limitada incluso con tratamiento intensivo; el trasplante ofrece la única posibilidad realista de supervivencia prolongada en los pocos pacientes que alcanzan remisión y son elegibles.',
      algoritmo: ['NMP crónica conocida con empeoramiento clínico/citopenias → biometría + aspirado-biopsia de médula ósea de reevaluación', 'Blastos ≥20% → confirma transformación a fase blástica', 'Descartar causa reactiva transitoria', 'Evaluar aptitud para intensidad completa', 'Apto → inducción intensiva + trasplante si remisión', 'No apto → hipometilante ± venetoclax, con enfoque predominantemente paliativo']
    },
    {
      nombre: 'Sangrado por enfermedad de von Willebrand adquirida',
      color: '#2e5f6b',
      definicion: 'Complicación paradójica que puede desarrollarse sobre la trombocitemia esencial o la fase proliferativa de la policitemia vera (ver esas tarjetas) con trombocitosis extrema: sangrado mucocutáneo o, con menor frecuencia, hemorragia mayor, en un paciente cuyo trastorno de base predispone característicamente a trombosis, no a sangrado.',
      fisiopatologia: 'Con un recuento plaquetario muy elevado (habitualmente &gt;1,000-1,500x10⁹/L), los multímeros de alto peso molecular del factor de von Willebrand se adsorben a la superficie del exceso de plaquetas circulantes y son proteolizados en exceso por ADAMTS13, reduciendo su disponibilidad plasmática funcional; el resultado es un fenotipo adquirido de enfermedad de von Willebrand tipo 2A, pese a un recuento plaquetario alto en apariencia protrombótico.',
      epidemiologia: 'El riesgo aumenta de forma proporcional al grado de trombocitosis, con relevancia clínica principalmente por encima de 1,000-1,500x10⁹/L, aunque el umbral exacto varía entre pacientes.',
      factores_riesgo: ['Trombocitosis extrema (&gt;1,000-1,500x10⁹/L)', 'Uso concomitante de antiagregantes/anticoagulantes sin haber descartado antes la enfermedad de von Willebrand adquirida', 'Procedimiento invasivo/quirúrgico planeado sin tamizaje previo en trombocitosis extrema'],
      clinica: 'Sangrado mucocutáneo (equimosis, epistaxis, sangrado gastrointestinal, particularmente angiodisplasias), a menudo desencadenado o agravado por el uso de ácido acetilsalicílico en un paciente no tamizado previamente; puede manifestarse como sangrado excesivo durante o después de un procedimiento invasivo.',
      criterios_dx: 'Actividad de cofactor de ristocetina (o equivalente funcional) reducida en el contexto de trombocitosis extrema, con corrección esperada tras reducir el recuento plaquetario.',
      laboratorio: 'Panel de enfermedad de von Willebrand (antígeno, actividad de cofactor de ristocetina, multímeros de alto peso molecular reducidos).',
      imagen: 'Ninguno específico, salvo dirigido al sitio de sangrado sospechado.',
      complementarios: 'Reevaluación del recuento plaquetario seriado tras iniciar citorreducción, para confirmar la corrección paralela de la actividad del factor de von Willebrand.',
      dx_diferencial: 'Otras coagulopatías adquiridas, efecto de antiagregantes/anticoagulantes por otra indicación, enfermedad de von Willebrand hereditaria concomitante (infrecuente, distinguida por la falta de corrección tras normalizar el recuento plaquetario).',
      tx_medico: 'Suspender ácido acetilsalicílico y cualquier otro antiagregante/anticoagulante hasta confirmar y corregir la enfermedad de von Willebrand adquirida.',
      tx_farmacologico: 'Citorreducción con hidroxiurea (u otro citorreductor según la entidad de base) para reducir el recuento plaquetario, la medida más eficaz y específica; desmopresina o concentrado de factor de von Willebrand/factor VIII en el sangrado activo agudo significativo, como medida puente mientras se logra la citorreducción.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Sangrado mayor con inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de nuevos sitios de sangrado mientras se reduce el recuento plaquetario.',
      seguimiento_ambulatorio: 'Tamizaje sistemático de enfermedad de von Willebrand adquirida (actividad de cofactor de ristocetina) ANTES de iniciar aspirina en todo paciente con trombocitosis extrema, y antes de cualquier procedimiento invasivo planeado en ese contexto.',
      pronostico: 'Reversible por completo al corregir la trombocitosis extrema mediante citorreducción; el riesgo principal es el sangrado no reconocido en el paciente ya antiagregado sin tamizaje previo.',
      algoritmo: ['Trombocitosis extrema (&gt;1,000-1,500x10⁹/L) → tamizar enfermedad de von Willebrand adquirida ANTES de indicar aspirina o un procedimiento invasivo', 'Actividad de cofactor de ristocetina reducida → confirma el diagnóstico', 'Suspender antiagregantes/anticoagulantes', 'Iniciar/intensificar citorreducción para reducir el recuento plaquetario', 'Sangrado activo → desmopresina o concentrado de factor de von Willebrand como puente', 'Reevaluar la actividad del factor tras normalizar el recuento plaquetario']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia del riesgo trombótico, el control del hemograma objetivo (hematocrito/plaquetas) y la reevaluación periódica de progresión (a mielofibrosis secundaria o a fase blástica) son comunes a las 4 entidades de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Hematocrito objetivo &lt;45% en la policitemia vera, con ajuste de la frecuencia de flebotomía/citorreducción.',
      'Recuento plaquetario en la trombocitemia esencial, con vigilancia adicional de trombocitosis extrema (&gt;1,000-1,500x10⁹/L) por el riesgo de enfermedad de von Willebrand adquirida.',
      'Tamaño esplénico (clínico o por imagen) y síntomas constitucionales en la mielofibrosis, para guiar la intensidad del tratamiento con inhibidores de JAK.',
      'Vigilancia activa de signos de progresión: descenso de hemoglobina/plaquetas antes elevadas (transformación a mielofibrosis secundaria), blastos circulantes (transformación a fase blástica).',
      'Vigilancia de eventos trombóticos en cada consulta, dado que reclasifican al paciente como alto riesgo de forma permanente.'
    ],
    criterios_uci_general: 'Complicación trombótica mayor (ACV, IAM, TEP masivo, Budd-Chiari agudo), sangrado mayor, síndrome de lisis tumoral o leucostasis si progresa a fase blástica.',
    criterios_tips_general: 'Budd-Chiari con hipertensión portal sintomática refractaria al manejo médico.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas: única opción potencialmente curativa; indicado en la mielofibrosis (de novo o secundaria) con riesgo intermedio-2/alto por DIPSS/DIPSS-plus en el paciente elegible. No indicado de rutina en la PV/TE en fase proliferativa. Los matices específicos se detallan en cada tarjeta.',
    prevencion: 'Control estricto del hematocrito/recuento plaquetario objetivo, antiagregación/anticoagulación según el riesgo trombótico calculado, tamizaje de enfermedad de von Willebrand adquirida antes de antiagregar en la trombocitosis extrema, y reevaluación periódica del riesgo (IPSET-thrombosis, DIPSS/DIPSS-plus) para no retrasar la discusión de trasplante en el paciente con mielofibrosis elegible.'
  }
};

export const compCites = {
  'Policitemia vera': { tx_medico: [5], tx_farmacologico: [3, 11] },
  'Trombocitemia esencial': { criterios_dx: [1], complementarios: [6] },
  'Mielofibrosis manifiesta': { tx_farmacologico: [10], tx_intervencionista: [8, 9] },
  'Trombosis arterial y venosa': { epidemiologia: [16] },
  'Sangrado por enfermedad de von Willebrand adquirida': { fisiopatologia: [15] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios diagnósticos OMS 2022': [1], 'IPSET-thrombosis': [6], 'DIPSS': [8], 'DIPSS-plus': [9]
};
export const escalaCalc = { 'IPSET-thrombosis': 'ipset', 'DIPSS': 'dipss' };
export const compGroups = [
  { title: 'Neoplasias mieloproliferativas (enfermedades)', items: ['Policitemia vera', 'Trombocitemia esencial', 'Mielofibrosis prefibrótica', 'Mielofibrosis manifiesta'] },
  { title: 'Complicaciones transversales (cualquier NMP)', items: ['Trombosis arterial y venosa', 'Transformación a mielofibrosis secundaria', 'Transformación a fase blástica', 'Sangrado por enfermedad de von Willebrand adquirida'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son los 4 subtipos de NMP; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellos, no diagnósticos independientes.';
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
  root: { title: 'NEOPLASIAS MIELOPROLIFERATIVAS', color: '#4a6b8c', target: 'definicion' },
  branches: [
    { title: 'Fase proliferativa', sub: 'PV y TE', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Policitemia vera', sub: 'Eritrocitosis, JAK2 ~100%', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Trombocitemia esencial', sub: 'Trombocitosis aislada', color: '#966b35', target: 'complicaciones' }
    ] },
    { title: 'Fase fibrótica', sub: 'Mielofibrosis', color: '#7a1f3d', target: 'diagnostico', leaves: [
      { title: 'Prefibrótica', sub: 'Sin fibrosis, atipia megacariocítica', color: '#5c6b8c', target: 'complicaciones' },
      { title: 'Manifiesta', sub: 'Fibrosis ≥2, esplenomegalia', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [12], imagen: [13] };
export const clasificacionCite = [6, 8];
export const seguimientoCite = [4];
