// topics/linfomas/content.js: Linfomas (Linfoma de Hodgkin, Linfoma No Hodgkin Agresivo, Linfoma
// No Hodgkin Indolente, Linfoma de Burkitt y Linfomas Altamente Agresivos). Estructura idéntica
// al contrato del motor (misma forma que los temas recientes de Hematología). Sigue la
// convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo
// por tipo).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás (compCites, estigmas, biopsia, escalaRefs, escalaCalc, compGroups, complicacionesIntro,
// categories, arbol, diagCites, clasificacionCite, seguimientoCite) debe ser un `export const`
// de nivel superior, HERMANO de `content`, no anidado dentro de él.
//
// IMPORTANTE (ver memoria del proyecto): antes de dar study.js por terminado, correr
// `grep -c "{ q: '"` y `grep -c "correct: [0-9]"` y confirmar que ambos son iguales entre sí Y
// iguales a 45 (30 sueltas + 5 cascadas × 3 pasos); además, releer cada pregunta completa
// (options+correct+explanation) para confirmar que options[correct] es realmente la respuesta
// correcta, no solo el conteo de distribución.

export const meta = {
  id: 'linfomas',
  titulo: 'Linfomas',
  subtitulo: 'Módulo 22 · Medicina Interna',
  accent: '#6b3d5c',
  accentDim: '#a37398'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const clasificacionGeneralHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:540px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Linfoma (neoplasia de células linfoides maduras)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:150px;background:#6b3d5c33;border:1px solid #6b3d5c;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Linfoma de Hodgkin</strong><br>Células de Reed-Sternberg<br>diseminación contigua predecible</div>
    <div style="flex:1;min-width:150px;background:#3d6b8c33;border:1px solid #3d6b8c;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Linfoma No Hodgkin</strong><br>Grupo heterogéneo<br>diseminación menos predecible</div>
  </div>
  <div style="color:var(--ink-dim);font-size:16px;">↓ (dentro de LNH)</div>
  <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:150px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Agresivo</strong><br>Crecimiento rápido<br>potencialmente curable con quimioterapia</div>
    <div style="flex:1;min-width:150px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Indolente</strong><br>Crecimiento lento<br>con frecuencia incurable pero de curso prolongado</div>
  </div>
</div>`;

const annArborHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:5px;max-width:520px;margin:0 auto;">
  <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:110px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:7px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Estadio I</strong><br>1 región ganglionar</div>
    <div style="flex:1;min-width:110px;background:#3d6b8c33;border:1px solid #3d6b8c;border-radius:8px;padding:7px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Estadio II</strong><br>≥2 regiones, mismo lado del diafragma</div>
    <div style="flex:1;min-width:110px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:7px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Estadio III</strong><br>Regiones a ambos lados del diafragma</div>
    <div style="flex:1;min-width:110px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:7px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Estadio IV</strong><br>Afectación extraganglionar difusa</div>
  </div>
  <div style="font-size:10px;color:var(--ink-dim);text-align:center;line-height:1.6;margin-top:2px;">Se añade la letra "B" si hay síntomas constitucionales (fiebre, sudoración nocturna, pérdida de peso &gt;10% en 6 meses); "A" si están ausentes.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Los linfomas son neoplasias de células linfoides maduras (B, T, o NK) que se originan predominantemente en los ganglios linfáticos y otros tejidos linfoides, aunque pueden surgir en cualquier sitio extraganglionar. Se dividen en 2 categorías biológicamente distintas: el linfoma de Hodgkin (definido por la presencia de células de Reed-Sternberg, con un patrón de diseminación contigua predecible entre cadenas ganglionares adyacentes) y el linfoma no Hodgkin (un grupo heterogéneo de más de 60 entidades distintas, con un patrón de diseminación menos predecible y comportamiento clínico que va desde indolente hasta altamente agresivo).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> El linfoma no Hodgkin es considerablemente más frecuente que el linfoma de Hodgkin en la población general; el linfoma de Hodgkin tiene una distribución de edad bimodal característica (un pico en adultos jóvenes de 20-30 años y un segundo pico en adultos mayores). El linfoma difuso de células B grandes es el subtipo más frecuente de linfoma no Hodgkin agresivo; el linfoma folicular es el subtipo más frecuente de linfoma no Hodgkin indolente.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Linfoma de Hodgkin</strong>: definido por la presencia de células de Reed-Sternberg (variante clásica, la mayoría de los casos) o de células linfocítico-histiocíticas (variante de predominio linfocítico nodular, menos frecuente); diseminación contigua predecible entre cadenas ganglionares adyacentes.</li>
    <li><strong>Linfoma No Hodgkin agresivo</strong>: crecimiento rápido, con frecuencia sintomático de novo; el linfoma difuso de células B grandes es el prototipo, potencialmente curable con quimioinmunoterapia estándar.</li>
    <li><strong>Linfoma No Hodgkin indolente</strong>: crecimiento lento, con frecuencia asintomático al diagnóstico; el linfoma folicular es el prototipo, con un curso prolongado pero típicamente incurable con la terapia estándar.</li>
    <li><strong>Linfoma de Burkitt y linfomas altamente agresivos</strong>: la neoplasia humana de crecimiento más rápido conocida (tiempo de duplicación tumoral de horas a pocos días); requiere reconocimiento y tratamiento urgentes.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Infección por virus de Epstein-Barr (asociada a linfoma de Hodgkin y a linfoma de Burkitt endémico)</li>
    <li>Inmunosupresión (VIH/SIDA, trasplante de órgano sólido, enfermedad autoinmune con tratamiento inmunosupresor)</li>
    <li>Infección por Helicobacter pylori (linfoma gástrico de la zona marginal tipo MALT)</li>
    <li>Enfermedad autoinmune crónica (síndrome de Sjögren, tiroiditis de Hashimoto, enfermedad celíaca)</li>
    <li>Antecedente familiar de linfoma</li>
    <li>Exposición a ciertos herbicidas/pesticidas (asociación epidemiológica descrita para el linfoma no Hodgkin)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Los linfomas surgen de mutaciones somáticas adquiridas durante el desarrollo normal del linfocito B o T, con frecuencia relacionadas con el proceso fisiológico de recombinación de inmunoglobulinas o del receptor de células T (que es intrínsecamente propenso a errores), produciendo translocaciones cromosómicas específicas que activan oncogenes o inactivan genes supresores tumorales (por ejemplo, t(14;18) con sobreexpresión de BCL2 en el linfoma folicular; t(8;14) con desregulación de MYC en el linfoma de Burkitt).${figBlock('Imagen 1', 'Clasificación general de los linfomas', clasificacionGeneralHtml)} El linfoma de Hodgkin tiene una biología particular: las células de Reed-Sternberg, aunque de origen de linfocito B del centro germinal, representan una minoría del volumen tumoral (con frecuencia &lt;1%), rodeadas de un infiltrado inflamatorio reactivo masivo (linfocitos, eosinófilos, macrófagos) que las propias células neoplásicas reclutan y del que dependen para su supervivencia, un mecanismo biológico distintivo entre las neoplasias humanas. Analogía: si el linfoma no Hodgkin agresivo es como un incendio que se propaga rápido en línea recta, el linfoma de Hodgkin es más como una hoguera que, además de quemar, atrae activamente más leña de alrededor (el infiltrado inflamatorio reactivo) para sostenerse, pese a que la llama original (las células de Reed-Sternberg) sea proporcionalmente pequeña.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde la adenopatía indolora asintomática de crecimiento lento (linfoma indolente) hasta la masa de crecimiento explosivo con síntomas constitucionales marcados y riesgo de urgencia oncológica (linfoma de Burkitt y otros linfomas altamente agresivos); el diagnóstico por biopsia excisional, la estadificación con PET-TC, y el manejo de cada complicación se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Shanbhag S, Ambinder RF. Hodgkin lymphoma: A review and update on recent progress. CA Cancer J Clin. 2018;68(2):116-132.',
  'Ansell SM. Hodgkin Lymphoma: 2023 Update on Diagnosis, Risk-Stratification, and Management. Am J Hematol. 2022;97(11):1478-1488.',
  'Susanibar-Adaniya S, Barta SK. 2021 Update on Diffuse Large B Cell Lymphoma. Am J Hematol. 2021;96(5):617-629.',
  'Freedman A, Jacobsen E. Follicular Lymphoma: 2020 update. Am J Hematol. 2020;95(3):316-327.',
  'Molyneux EM, Rochford R, Griffin B, et al. Burkitt lymphoma. Lancet. 2012;379(9822):1234-1244.',
  'International Non-Hodgkin\'s Lymphoma Prognostic Factors Project. A predictive model for aggressive non-Hodgkin\'s lymphoma. N Engl J Med. 1993;329(14):987-994.',
  'Hasenclever D, Diehl V. A prognostic score for advanced Hodgkin\'s disease. N Engl J Med. 1998;339(21):1506-1514.',
  'Wilson WH, Bromberg JE, Stetler-Stevenson M, et al. Detection and outcome of occult leptomeningeal disease in diffuse large B-cell lymphoma and Burkitt lymphoma. Haematologica. 2014;99(7):1228-1235.',
  'Rice TW, Rodriguez RM, Light RW. The superior vena cava syndrome: clinical characteristics and evolving etiology. Medicine (Baltimore). 2006;85(1):37-42.',
  'Howard SC, Jones DP, Pui CH. The tumor lysis syndrome. N Engl J Med. 2011;364(19):1844-1854.',
  'Loblaw DA, Perry J, Chambers A, Laperriere NJ. Systematic review of the diagnosis and management of malignant extradural spinal cord compression. J Clin Oncol. 2005;23(9):2028-2037.',
  'Armitage JO, Gascoyne RD, Lunning MA, Cavalli F. Non-Hodgkin lymphoma. Lancet. 2017;390(10091):298-310.',
  'Swerdlow AJ, Higgins CD, Smith P, et al. Second cancer risk after chemotherapy for Hodgkin\'s lymphoma: a collaborative British cohort study. J Clin Oncol. 2011;29(31):4096-4104.',
  'Von Hoff DD, Layard MW, Basa P, et al. Risk factors for doxorubicin-induced congestive heart failure. Ann Intern Med. 1979;91(5):710-717.',
  'Sleijfer S. Bleomycin-induced pneumonitis. Chest. 2001;120(2):617-624.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Enfermedad localizada/indolente',
      tituloB: 'Enfermedad avanzada/agresiva',
      compensada: 'Adenopatía indolora aislada o de pocas cadenas ganglionares contiguas, de crecimiento lento, sin síntomas constitucionales; hallazgo con frecuencia incidental o notado por el paciente sin otra repercusión clínica.',
      descompensada: 'Adenopatías generalizadas o masa voluminosa (particularmente mediastínica) de crecimiento rápido, síntomas B (fiebre, sudoración nocturna profusa, pérdida de peso involuntaria &gt;10% en 6 meses), síntomas de compresión de estructuras vecinas (síndrome de vena cava superior, compresión medular), o manifestaciones de una urgencia oncológica (síndrome de lisis tumoral espontáneo en el linfoma de muy alta proliferación, ver Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con diferencial', utilidad: 'Citopenias por infiltración medular en la enfermedad avanzada; linfocitosis reactiva o eosinofilia asociada en algunos casos de linfoma de Hodgkin.' },
      { prueba: 'LDH sérica', utilidad: 'Marcador indirecto de carga tumoral y de proliferación celular; componente del IPI (con calculadora) y hallazgo de alarma cuando está marcadamente elevada, particularmente sugestivo de linfoma de Burkitt u otro linfoma altamente agresivo.' },
      { prueba: 'Perfil metabólico con ácido úrico, potasio, fósforo, calcio', utilidad: 'Cribado basal de síndrome de lisis tumoral (ver Complicaciones), particularmente relevante en el linfoma de alta proliferación antes de iniciar tratamiento.' },
      { prueba: 'Serología de VIH', utilidad: 'Cribado sistemático dado que la inmunosupresión asociada a VIH es un factor de riesgo reconocido para varios subtipos de linfoma agresivo.' },
      { prueba: 'Albúmina, hemoglobina, leucocitos con diferencial', utilidad: 'Componentes del IPS de Hasenclever (con calculadora) para la estratificación de riesgo del linfoma de Hodgkin avanzado.' }
    ],
    no_invasivos: [
      { metodo: 'IPI (con calculadora)', interpretacion: 'Estratifica el riesgo pronóstico en el linfoma no Hodgkin agresivo.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'IPS de Hasenclever (con calculadora)', interpretacion: 'Estratifica el riesgo pronóstico en el linfoma de Hodgkin avanzado.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'PET-TC', interpretacion: 'Estudio central para la estadificación inicial y la evaluación de respuesta al tratamiento en la mayoría de los subtipos de linfoma.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'PET-TC de cuerpo completo', hallazgos: 'El estudio de elección para la estadificación de Ann Arbor, dado que combina la información anatómica (extensión ganglionar/extraganglionar) con la actividad metabólica (útil también para dirigir la biopsia al sitio de mayor actividad).' },
      { modalidad: 'TC de cuello/tórax/abdomen/pelvis con contraste', hallazgos: 'Alternativa cuando el PET-TC no está disponible; también usada en combinación con el PET para la planeación de radioterapia cuando está indicada.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La distinción central de este tema es Hodgkin vs. no Hodgkin (por biología e histología), y dentro del linfoma no Hodgkin, agresivo vs. indolente (por comportamiento clínico y velocidad de crecimiento); el estadio de Ann Arbor (localizado I-II vs. avanzado III-IV) y las escalas pronósticas específicas (IPI, IPS) refinan el pronóstico y orientan la intensidad del tratamiento dentro de cada categoría.${figBlock('Imagen 2', 'Estadificación de Ann Arbor', annArborHtml)}`,
    escalas: [
      { nombre: 'IPI (Índice Pronóstico Internacional)', componentes: 'Edad, LDH, estado funcional ECOG, estadio de Ann Arbor, número de sitios extraganglionares. Calculadora disponible más abajo.', formula: 'Puntaje 0-5 (1 punto por cada factor presente).', interpretacion: 'Bajo (0-1). Intermedio-bajo (2). Intermedio-alto (3). Alto (4-5). Aplicable principalmente al linfoma no Hodgkin agresivo.' },
      { nombre: 'IPS de Hasenclever', componentes: 'Albúmina, hemoglobina, sexo, estadio IV, edad, leucocitos, linfocitos. Calculadora disponible más abajo.', formula: 'Puntaje 0-7 (1 punto por cada factor presente).', interpretacion: 'A mayor puntaje, menor supervivencia libre de progresión estimada. Aplicable al linfoma de Hodgkin avanzado (estadio III-IV).' },
      { nombre: 'Estadificación de Ann Arbor (modificada de Lugano)', componentes: 'Número y localización de las regiones ganglionares/extraganglionares afectadas, distribución en relación con el diafragma.', formula: 'Estadio I: 1 región ganglionar. Estadio II: ≥2 regiones del mismo lado del diafragma. Estadio III: regiones a ambos lados del diafragma. Estadio IV: afectación extraganglionar difusa (médula ósea, hígado, entre otros).', interpretacion: 'Sistema de estadificación anatómica estándar para todos los subtipos de linfoma, complementado con la letra "B" si hay síntomas constitucionales presentes.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Linfoma de Hodgkin',
      color: '#6b3d5c',
      definicion: 'Neoplasia linfoide definida por la presencia de células de Reed-Sternberg (variante clásica, la gran mayoría de los casos) rodeadas de un infiltrado inflamatorio reactivo masivo; se distingue del linfoma no Hodgkin por su patrón característico de diseminación contigua predecible entre cadenas ganglionares adyacentes y por su excelente pronóstico global con el tratamiento moderno.',
      fisiopatologia: 'Las células de Reed-Sternberg (y su precursora mononuclear, la célula de Hodgkin) derivan de linfocitos B del centro germinal que, pese a portar reordenamientos de inmunoglobulina defectuosos que normalmente producirían apoptosis, escapan a la muerte celular por mecanismos de rescate anómalos; representan una minoría del volumen tumoral total, rodeadas de un infiltrado reactivo (linfocitos T, eosinófilos, macrófagos, células plasmáticas) que las propias células neoplásicas reclutan activamente mediante la secreción de citocinas y quimiocinas, y del cual dependen para señales de supervivencia paracrinas. La infección por el virus de Epstein-Barr está presente en una proporción significativa de los casos, particularmente en el subtipo de celularidad mixta.',
      epidemiologia: 'Distribución de edad bimodal característica: un pico en adultos jóvenes (20-30 años) y un segundo pico en adultos mayores (&gt;55 años); la variante clásica representa la gran mayoría de los casos, con el subtipo esclerosis nodular como el más frecuente en países desarrollados.',
      factores_riesgo: ['Infección por virus de Epstein-Barr', 'Edad en los 2 picos de incidencia bimodal (adulto joven o adulto mayor)', 'Inmunosupresión (VIH, trasplante de órgano sólido)', 'Antecedente familiar de linfoma de Hodgkin (mayor riesgo relativo en gemelos monocigóticos)'],
      clinica: 'Adenopatía cervical o supraclavicular indolora de crecimiento progresivo (el sitio de presentación más frecuente); masa mediastínica frecuente, particularmente en el subtipo esclerosis nodular, con riesgo de síndrome de vena cava superior si es voluminosa (ver Complicaciones); síntomas B en una proporción significativa de los casos avanzados; prurito generalizado y, característicamente aunque poco frecuente, dolor ganglionar inducido por el consumo de alcohol.',
      criterios_dx: `Biopsia excisional de ganglio linfático (preferida sobre la biopsia por aguja fina, que con frecuencia no aporta suficiente arquitectura tisular) que demuestra células de Reed-Sternberg en el contexto histológico e inmunofenotípico característico (CD15 y CD30 positivos en la variante clásica).${figBlock('Imagen 3', 'Célula de Reed-Sternberg', `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Reed-Sternberg_lymphocyte_nci-vol-7172-300.jpg/960px-Reed-Sternberg_lymphocyte_nci-vol-7172-300.jpg" alt="Célula de Reed-Sternberg (célula grande, binucleada o multinucleada) comparada con linfocitos normales de menor tamaño." style="width:100%;max-width:380px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
`)}`,
      laboratorio: 'Biometría hemática (puede mostrar anemia de enfermedad crónica, eosinofilia, o linfopenia en la enfermedad avanzada); LDH; albúmina; IPS de Hasenclever (calculadora) si la enfermedad es estadio III-IV.',
      imagen: 'PET-TC de cuerpo completo para la estadificación de Ann Arbor inicial y para la evaluación de respuesta intermedia y final al tratamiento (el llamado PET interino, que orienta decisiones de intensificación o desescalamiento terapéutico en muchos protocolos modernos).',
      complementarios: 'Evaluación cardiopulmonar basal (ecocardiograma, pruebas de función pulmonar) antes de iniciar esquemas que incluyan antraciclinas o bleomicina, dado el riesgo de toxicidad específica de estos agentes (ver la tarjeta de complicaciones del tratamiento).',
      dx_diferencial: 'Linfoma no Hodgkin (distinguible por ausencia de células de Reed-Sternberg e inmunofenotipo distinto), linfadenopatía reactiva de causa infecciosa (mononucleosis infecciosa, tuberculosis), sarcoidosis.',
      tx_medico: 'Quimioterapia combinada como pilar del tratamiento en la mayoría de los casos, con o sin radioterapia dirigida a sitios de enfermedad voluminosa residual según el estadio y la respuesta al PET interino.',
      tx_farmacologico: 'ABVD (doxorrubicina, bleomicina, vinblastina, dacarbazina) como esquema estándar histórico de primera línea; esquemas escalados (BEACOPP) considerados en la enfermedad de alto riesgo según el IPS; brentuximab vedotina (anticuerpo conjugado anti-CD30) y agentes inmunomoduladores (inhibidores de punto de control inmune) incorporados cada vez más en primera línea o en la enfermedad recidivante/refractaria.',
      tx_intervencionista: 'Trasplante autólogo de células madre hematopoyéticas considerado en la enfermedad recidivante o refractaria a la quimioterapia de primera línea, seguido en ocasiones de brentuximab vedotina de consolidación.',
      criterios_uci: 'Síndrome de vena cava superior grave con compromiso de la vía aérea, síndrome de lisis tumoral grave (menos frecuente que en el linfoma no Hodgkin agresivo dado el menor volumen de células neoplásicas verdaderas), sepsis grave por inmunosupresión relacionada con el tratamiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante autólogo de células madre hematopoyéticas en la enfermedad recidivante/refractaria con quimiosensibilidad demostrada; trasplante alogénico considerado en casos muy seleccionados de recaída tras trasplante autólogo.',
      seguimiento_hospitalario: 'Vigilancia de toxicidad aguda del tratamiento (mielosupresión, náusea, y vigilancia específica de la función pulmonar si se usa bleomicina).',
      seguimiento_ambulatorio: 'PET-TC de reevaluación según el protocolo (interino y al final del tratamiento); vigilancia a largo plazo de complicaciones tardías del tratamiento (cardiotoxicidad, toxicidad pulmonar, segundas neoplasias, ver esa tarjeta), dado el excelente pronóstico a largo plazo que hace relevante esta vigilancia prolongada.',
      pronostico: 'Excelente en la mayoría de los casos, con tasas de curación superiores al 80-90% incluso en la enfermedad avanzada con el tratamiento moderno, uno de los mejores pronósticos entre todas las neoplasias hematológicas.',
      algoritmo: ['Adenopatía cervical/supraclavicular indolora de crecimiento progresivo → biopsia excisional', 'Confirmación histológica de células de Reed-Sternberg (CD15/CD30 positivos)', 'PET-TC para estadificación de Ann Arbor', 'Estadio III-IV → calcular IPS de Hasenclever (calculadora) para intensidad del tratamiento', 'ABVD (o esquema escalado según riesgo) ± radioterapia dirigida según respuesta al PET interino']
    },
    {
      nombre: 'Linfoma No Hodgkin Agresivo',
      color: '#7a1f3d',
      definicion: 'Linfoma no Hodgkin de crecimiento rápido, con frecuencia sintomático desde su presentación inicial; el linfoma difuso de células B grandes es el prototipo y el subtipo más frecuente de linfoma no Hodgkin en general, potencialmente curable con quimioinmunoterapia estándar de primera línea en una proporción considerable de los casos.',
      fisiopatologia: 'El linfoma difuso de células B grandes es biológicamente heterogéneo, con al menos 2 subtipos moleculares principales (célula B del centro germinal y célula B activada) de comportamiento y respuesta al tratamiento algo distintos, identificables por perfil de expresión génica o, en la práctica clínica habitual, por inmunohistoquímica sustituta; una proporción de casos porta reordenamientos concurrentes de MYC junto con BCL2 y/o BCL6 ("linfoma de doble/triple hit"), una categoría de peor pronóstico que requiere identificación específica dado que puede modificar la intensidad del tratamiento de primera línea.',
      epidemiologia: 'El subtipo más frecuente de linfoma no Hodgkin en general; ocurre predominantemente en adultos de edad media a avanzada, aunque puede presentarse a cualquier edad.',
      factores_riesgo: ['Edad avanzada', 'Inmunosupresión (VIH, trasplante de órgano sólido)', 'Antecedente de linfoma indolente transformado (ver la tarjeta de linfoma no Hodgkin indolente)', 'Infección por virus de Epstein-Barr en un subgrupo de casos'],
      clinica: 'Masa ganglionar o extraganglionar de crecimiento rápido (semanas), con frecuencia sintomática desde el inicio; síntomas B en una proporción considerable de los casos; puede presentarse con afectación extraganglionar primaria (tracto gastrointestinal, sistema nervioso central, testículo, entre otros sitios).',
      criterios_dx: 'Biopsia excisional (o con aguja gruesa si la excisional no es factible) del sitio afectado, con inmunohistoquímica confirmando el inmunofenotipo de célula B madura y estudio molecular dirigido a MYC/BCL2/BCL6 para identificar el subtipo de "doble/triple hit".',
      laboratorio: 'LDH con frecuencia marcadamente elevada (reflejo de la alta carga proliferativa); biometría hemática; perfil metabólico basal para cribado de síndrome de lisis tumoral antes de iniciar tratamiento (ver esa tarjeta).',
      imagen: 'PET-TC para la estadificación de Ann Arbor inicial; resonancia magnética cerebral/punción lumbar si hay factores de riesgo de afectación del sistema nervioso central (múltiples sitios extraganglionares, LDH muy elevada, afectación testicular o de senos paranasales, entre otros).',
      complementarios: 'IPI (calculadora) para la estratificación pronóstica y para orientar la intensidad del tratamiento y la profilaxis del sistema nervioso central en el subgrupo de alto riesgo.',
      dx_diferencial: 'Linfoma de Burkitt u otros linfomas altamente agresivos (ver esa tarjeta, distinguibles por un índice proliferativo aún más elevado y hallazgos citogenéticos específicos), linfoma no Hodgkin indolente transformado a un componente agresivo.',
      tx_medico: 'Quimioinmunoterapia combinada de primera línea con intención curativa en la mayoría de los casos; profilaxis del sistema nervioso central (quimioterapia intratecal o sistémica de alta dosis) en el subgrupo de alto riesgo de afectación de ese sitio.',
      tx_farmacologico: 'R-CHOP (rituximab, ciclofosfamida, doxorrubicina, vincristina, prednisona) como esquema estándar de primera línea; esquemas más intensivos considerados en el subtipo de "doble/triple hit" dado su peor pronóstico con R-CHOP estándar; terapia de células CAR-T (dirigida contra CD19) establecida como opción en la enfermedad refractaria o en recaída temprana, con resultados que han transformado el manejo de este escenario históricamente desfavorable.',
      tx_intervencionista: 'Trasplante autólogo de células madre hematopoyéticas considerado en la primera recaída con quimiosensibilidad demostrada (particularmente si la terapia CAR-T no está disponible o no es apropiada).',
      criterios_uci: 'Síndrome de lisis tumoral grave (particularmente frecuente en este subtipo dado el alto recambio celular, ver esa tarjeta), síndrome de liberación de citocinas grave si se administra terapia CAR-T, compromiso de órgano por infiltración tumoral rápida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante autólogo de células madre hematopoyéticas en la primera recaída quimiosensible; terapia CAR-T establecida como alternativa o como opción tras el fallo del trasplante autólogo.',
      seguimiento_hospitalario: 'Vigilancia estrecha del síndrome de lisis tumoral durante el primer ciclo de quimioinmunoterapia, particularmente en la enfermedad de alta carga tumoral.',
      seguimiento_ambulatorio: 'PET-TC de reevaluación según protocolo; vigilancia de complicaciones tardías del tratamiento (cardiotoxicidad por antraciclinas, ver esa tarjeta).',
      pronostico: 'Potencialmente curable en una proporción considerable de los casos con quimioinmunoterapia estándar de primera línea (particularmente en el grupo de riesgo bajo/intermedio-bajo del IPI); el subgrupo de "doble/triple hit" y la enfermedad refractaria/en recaída temprana tienen un pronóstico considerablemente peor, aunque las terapias CAR-T han mejorado sustancialmente este escenario.',
      algoritmo: ['Masa ganglionar/extraganglionar de crecimiento rápido → biopsia excisional urgente', 'Inmunohistoquímica + estudio molecular dirigido a MYC/BCL2/BCL6', 'PET-TC para estadificación + calcular IPI (calculadora)', 'Cribado y profilaxis de síndrome de lisis tumoral ANTES de iniciar quimioinmunoterapia', 'R-CHOP de primera línea (esquema más intensivo si "doble/triple hit"); CAR-T o trasplante autólogo si recae/refractario']
    },
    {
      nombre: 'Linfoma No Hodgkin Indolente',
      color: '#8a6a1f',
      definicion: 'Linfoma no Hodgkin de crecimiento lento, con frecuencia asintomático al diagnóstico y detectado incidentalmente; el linfoma folicular es el prototipo y el subtipo más frecuente de linfoma indolente, con un curso clínico prolongado a lo largo de años pero típicamente no curable con la terapia estándar disponible actualmente, en contraste directo con el linfoma agresivo.',
      fisiopatologia: 'El linfoma folicular se caracteriza por la translocación t(14;18), que yuxtapone el gen BCL2 (antiapoptótico) al promotor de la cadena pesada de inmunoglobulina, produciendo sobreexpresión constitutiva de BCL2 y, por tanto, resistencia a la apoptosis normal de los linfocitos del centro germinal; esta resistencia a la muerte celular, más que una proliferación acelerada, explica la acumulación lenta y progresiva característica de este linfoma, de forma conceptualmente análoga al mecanismo de supervivencia clonal prolongada de la LLC (ver ese tema) aunque en un linaje y contexto anatómico distintos.',
      epidemiologia: 'El subtipo más frecuente de linfoma no Hodgkin indolente; ocurre predominantemente en adultos de edad media a avanzada.',
      factores_riesgo: ['Edad avanzada', 'Antecedente familiar de linfoma', 'Inmunosupresión crónica'],
      clinica: 'Adenopatías generalizadas indoloras de crecimiento lento, con frecuencia detectadas incidentalmente o notadas por el paciente durante meses a años sin otra repercusión clínica; síntomas B infrecuentes al momento del diagnóstico inicial (su aparición debe hacer sospechar transformación a un componente agresivo, ver el diagnóstico diferencial).',
      criterios_dx: 'Biopsia excisional de ganglio linfático con histología característica (patrón folicular) e inmunofenotipo compatible (CD10, BCL2, BCL6 positivos); confirmación citogenética/molecular de t(14;18) cuando es necesaria para el diagnóstico diferencial.',
      laboratorio: 'Biometría hemática (con frecuencia normal al diagnóstico); LDH (habitualmente normal o mínimamente elevada, a diferencia del linfoma agresivo); un valor marcadamente elevado debe hacer sospechar transformación.',
      imagen: 'PET-TC para la estadificación inicial (con frecuencia estadio avanzado III-IV al diagnóstico, dado que la enfermedad indolente con frecuencia ya se ha diseminado ampliamente antes de producir síntomas que motiven la consulta); también útil para identificar el sitio de mayor actividad metabólica si se sospecha transformación.',
      complementarios: 'Aspirado/biopsia de médula ósea como parte de la estadificación estándar, dado que la infiltración medular es frecuente incluso en la enfermedad por lo demás asintomática.',
      dx_diferencial: 'Transformación a linfoma agresivo (particularmente linfoma difuso de células B grandes, ver esa tarjeta; sospechada ante crecimiento ganglionar asimétrico rápido, LDH marcadamente elevada, o síntomas B de nueva aparición, un patrón conceptualmente análogo a la transformación de Richter en la LLC, ver ese tema), otras causas de linfadenopatía generalizada crónica de bajo grado.',
      tx_medico: 'Vigilancia activa ("vigilar y esperar") en la enfermedad asintomática de bajo volumen, dado que el inicio temprano de tratamiento no ha demostrado beneficio de supervivencia en este contexto (un principio de manejo compartido conceptualmente con la LLC de bajo riesgo, ver ese tema); tratamiento indicado ante enfermedad sintomática, de alto volumen, o de crecimiento progresivo.',
      tx_farmacologico: 'Inmunoterapia con anti-CD20 (rituximab u obinutuzumab) con o sin quimioterapia (esquemas tipo bendamustina o CHOP) según el contexto clínico; mantenimiento con anti-CD20 considerado tras la respuesta inicial en casos seleccionados para prolongar la remisión.',
      tx_intervencionista: 'No aplica de forma directa a la enfermedad no transformada (ver la tarjeta de linfoma agresivo si ocurre transformación).',
      criterios_uci: 'No aplica de forma directa a la enfermedad indolente en sí; según la complicación específica si ocurre transformación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante autólogo o alogénico de células madre hematopoyéticas considerado en casos muy seleccionados de enfermedad recidivante múltiple o de transformación a linfoma agresivo.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico en la enfermedad no transformada.',
      seguimiento_ambulatorio: 'Vigilancia periódica clínica y de laboratorio (incluida LDH) para detectar signos de progresión o transformación; PET-TC de reevaluación si hay cambio clínico sospechoso de transformación.',
      pronostico: 'Curso prolongado a lo largo de años, con supervivencia global considerable, pero típicamente no curable con la terapia estándar actual, un patrón de "enfermedad crónica oncológica" más que de curación definitiva; el pronóstico empeora significativamente si ocurre transformación a un componente agresivo.',
      algoritmo: ['Adenopatías generalizadas indoloras de crecimiento lento → biopsia excisional', 'Confirmación histológica (patrón folicular, CD10/BCL2/BCL6 positivos) + estadificación con PET-TC y biopsia de médula ósea', 'Enfermedad asintomática de bajo volumen → vigilar y esperar', 'Enfermedad sintomática/alto volumen → inmunoterapia anti-CD20 ± quimioterapia', 'LDH marcadamente elevada o crecimiento asimétrico rápido → sospechar transformación, reevaluar con biopsia dirigida']
    },
    {
      nombre: 'Linfoma de Burkitt y Linfomas Altamente Agresivos',
      color: '#8c3a34',
      definicion: 'El linfoma de Burkitt es la neoplasia humana de crecimiento más rápido conocida, con un tiempo de duplicación tumoral de horas a pocos días, definido por la desregulación del oncogén MYC (con mayor frecuencia por la translocación t(8;14)); representa el prototipo de este grupo de linfomas de proliferación extrema que también incluye variantes altamente agresivas de otros subtipos (por ejemplo, el linfoma de células del manto en su forma blastoide), y constituye una urgencia oncológica genuina que requiere diagnóstico y tratamiento inmediatos.',
      fisiopatologia: 'La translocación t(8;14) (o, con menor frecuencia, t(2;8) o t(8;22)) yuxtapone el oncogén MYC al locus de inmunoglobulina, produciendo una sobreexpresión constitutiva masiva de MYC que impulsa una proliferación celular prácticamente sin freno (a diferencia del linfoma folicular, donde la acumulación se debe principalmente a resistencia a la apoptosis en lugar de proliferación acelerada); existen 3 variantes epidemiológicas del linfoma de Burkitt (endémica, asociada casi universalmente al virus de Epstein-Barr, con afectación característica de mandíbula/huesos faciales en niños de África ecuatorial; esporádica, con afectación abdominal predominante; y asociada a inmunodeficiencia, particularmente VIH), que comparten el mecanismo molecular central pero difieren en su distribución geográfica y en el patrón de presentación clínica.',
      epidemiologia: 'Poco frecuente en términos absolutos pero desproporcionadamente relevante clínicamente por su comportamiento explosivo; la forma endémica es particularmente prevalente en niños de África ecuatorial, mientras que la forma esporádica ocurre en cualquier región geográfica.',
      factores_riesgo: ['Infección por virus de Epstein-Barr (particularmente para la variante endémica)', 'Infección por VIH/inmunosupresión (para la variante asociada a inmunodeficiencia)', 'Residencia en zona endémica de malaria (factor cofactor propuesto para la variante endémica, por su efecto sobre la inmunidad celular)'],
      clinica: 'Masa de crecimiento extremadamente rápido (días), con frecuencia abdominal (masa/dolor abdominal, a veces simulando un abdomen quirúrgico agudo) en la forma esporádica, o de mandíbula/huesos faciales en la forma endémica; síndrome de lisis tumoral con frecuencia ya presente al momento del diagnóstico o inmediatamente al iniciar tratamiento, dado el altísimo recambio celular (ver esa tarjeta en Complicaciones).',
      criterios_dx: 'Biopsia urgente (dado el crecimiento explosivo, el diagnóstico y tratamiento no deben retrasarse) con histología característica ("patrón en cielo estrellado", por la presencia de macrófagos con detritos celulares fagocitados entremezclados con las células tumorales) e inmunofenotipo compatible; confirmación citogenética/molecular de la translocación de MYC.',
      laboratorio: 'LDH marcadamente elevada, con frecuencia el hallazgo bioquímico más llamativo; perfil metabólico completo urgente para cribado de síndrome de lisis tumoral, que puede estar presente ya al momento del diagnóstico dada la altísima carga proliferativa.',
      imagen: 'TC/PET-TC urgente para la estadificación, sin retrasar el inicio del tratamiento dado el crecimiento explosivo de esta enfermedad; resonancia magnética cerebral/punción lumbar dado el riesgo elevado de afectación del sistema nervioso central.',
      complementarios: 'Cribado y profilaxis de síndrome de lisis tumoral como paso simultáneo e inseparable del estudio diagnóstico inicial, dado que el riesgo es prácticamente universal en esta enfermedad.',
      dx_diferencial: 'Linfoma difuso de células B grandes de alto grado (ver esa tarjeta, distinguible por el índice proliferativo aún más extremo del linfoma de Burkitt, con frecuencia cercano al 100% por Ki-67), leucemia linfoblástica aguda de células B madura (la misma entidad biológica cuando se presenta predominantemente en sangre/médula ósea en lugar de como masa tisular).',
      tx_medico: 'Inicio urgente de quimioterapia intensiva de muy corta duración (esquemas de ciclos cortos e intensivos, considerablemente distintos de los esquemas estándar de otros linfomas), con manejo simultáneo y agresivo del síndrome de lisis tumoral desde el primer momento, dado que ambos procesos (tratamiento de la neoplasia y manejo metabólico) deben ocurrir en paralelo sin demora.',
      tx_farmacologico: 'Esquemas de quimioterapia intensiva de ciclos cortos con profilaxis del sistema nervioso central incorporada sistemáticamente (dado el riesgo elevado de afectación de ese sitio); rituximab añadido de forma estándar al esquema citotóxico; rasburicasa como profilaxis/tratamiento estándar del síndrome de lisis tumoral dada su alta eficacia y la urgencia del contexto.',
      tx_intervencionista: 'No aplica de forma directa más allá de la biopsia diagnóstica urgente y el manejo del síndrome de lisis tumoral si progresa a requerir terapia de reemplazo renal.',
      criterios_uci: 'Síndrome de lisis tumoral grave (prácticamente esperado, no solo posible, en esta enfermedad), compromiso de órgano por la infiltración tumoral de crecimiento extremadamente rápido, complicaciones de la quimioterapia intensiva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a la primera línea; considerado en casos excepcionales de recaída con quimiosensibilidad demostrada.',
      seguimiento_hospitalario: 'Hospitalización obligatoria con vigilancia electrolítica y de función renal extremadamente estrecha desde el momento del diagnóstico, dado el riesgo prácticamente universal de síndrome de lisis tumoral grave.',
      seguimiento_ambulatorio: 'Seguimiento oncológico estándar tras completar el tratamiento intensivo; dado el curso explosivo, la mayoría de las recaídas (si ocurren) tienden a manifestarse tempranamente tras el tratamiento.',
      pronostico: 'Con el reconocimiento y tratamiento urgentes y apropiados, las tasas de curación son altas pese al comportamiento biológico extremadamente agresivo, dado que la enfermedad es, paradójicamente, altamente quimiosensible; el pronóstico se ensombrece marcadamente si el diagnóstico o el manejo del síndrome de lisis tumoral se retrasan.',
      algoritmo: ['Masa de crecimiento explosivo (días) + LDH marcadamente elevada → sospechar linfoma de Burkitt, urgencia oncológica', 'Biopsia urgente sin retrasar el estudio ("patrón en cielo estrellado")', 'Cribado y profilaxis agresiva de síndrome de lisis tumoral EN PARALELO al estudio diagnóstico', 'Hospitalización con vigilancia electrolítica extremadamente estrecha', 'Inicio urgente de quimioterapia intensiva de ciclos cortos con profilaxis del sistema nervioso central']
    },
    {
      nombre: 'Síndrome de vena cava superior',
      color: '#3d5a73',
      definicion: 'Urgencia oncológica producida por la compresión, invasión, o trombosis de la vena cava superior, con mayor frecuencia por una masa mediastínica voluminosa (particularmente frecuente en el linfoma de Hodgkin subtipo esclerosis nodular y en el linfoma no Hodgkin agresivo con afectación mediastínica), que obstruye el retorno venoso desde la cabeza, el cuello, y las extremidades superiores.',
      fisiopatologia: 'La obstrucción del flujo venoso a través de la vena cava superior (por compresión extrínseca de la masa tumoral, invasión directa de la pared vascular, o trombosis asociada al estado protrombótico de la neoplasia) produce congestión venosa retrógrada en el territorio de drenaje de la vena cava superior, con desarrollo progresivo de circulación colateral (venas del tórax superior y la pared abdominal) que intenta compensar parcialmente la obstrucción; el edema cerebral asociado al aumento de la presión venosa cefálica, si es grave, puede producir alteración del estado de conciencia y constituye la manifestación más temida.',
      epidemiologia: 'Las neoplasias malignas son la causa más frecuente de síndrome de vena cava superior en la práctica clínica actual (a diferencia de décadas pasadas, cuando predominaban las causas infecciosas); dentro de las neoplasias, el cáncer de pulmón es la causa más frecuente en general, pero el linfoma (particularmente el de Hodgkin con masa mediastínica voluminosa) es una causa reconocida y clínicamente relevante en el paciente más joven.',
      factores_riesgo: ['Masa mediastínica voluminosa al diagnóstico', 'Linfoma de Hodgkin subtipo esclerosis nodular', 'Linfoma no Hodgkin agresivo con afectación mediastínica primaria', 'Catéter venoso central de larga duración (factor de riesgo de trombosis como mecanismo contribuyente adicional)'],
      clinica: 'Edema facial y de cuello ("edema en esclavina"), distensión de las venas del cuello y la pared torácica superior, plétora facial, disnea (particularmente en decúbito), cefalea y, en los casos graves, alteración del estado de conciencia por edema cerebral; los síntomas con frecuencia empeoran al inclinarse hacia adelante o al acostarse.',
      criterios_dx: 'Diagnóstico clínico apoyado por los hallazgos característicos (edema facial/de cuello, distensión venosa, circulación colateral visible), confirmado por TC de tórax con contraste que demuestra la obstrucción y su causa (masa, trombo, o ambos).',
      laboratorio: 'No hay un marcador de laboratorio específico para el síndrome en sí; el estudio de laboratorio se orienta a la neoplasia de base sospechada.',
      imagen: 'TC de tórax con contraste como el estudio de elección para confirmar la obstrucción, caracterizar la masa causal, y planificar la biopsia diagnóstica dirigida al sitio más accesible y seguro.',
      complementarios: 'Biopsia de la masa causal (por la vía menos invasiva posible dada la friabilidad vascular regional) para establecer el diagnóstico histológico específico, que determina el tratamiento definitivo.',
      dx_diferencial: 'Otras causas de edema facial (angioedema, síndrome nefrótico), otras causas de masa mediastínica (timoma, cáncer de pulmón, teratoma), trombosis venosa central aislada sin compresión extrínseca tumoral.',
      tx_medico: 'Elevación de la cabecera de la cama para reducir la presión venosa cefálica; tratamiento definitivo dirigido a la causa de base (quimioterapia urgente si la masa es de un linfoma altamente quimiosensible, radioterapia en casos seleccionados) una vez establecido el diagnóstico histológico específico, idealmente sin retrasar el inicio del tratamiento definitivo por el propio síndrome en sí si el linfoma subyacente es de alta quimiosensibilidad.',
      tx_farmacologico: 'Corticoides sistémicos considerados como medida temporal para reducir el edema peritumoral mientras se completa el estudio diagnóstico, aunque con la advertencia de que pueden alterar la histología de un linfoma si se administran antes de obtener la biopsia diagnóstica (de ahí la importancia de biopsiar, siempre que sea clínicamente seguro, antes de iniciar corticoides).',
      tx_intervencionista: 'Colocación de una endoprótesis (stent) intravascular considerada para el alivio sintomático rápido en casos graves, particularmente si la causa de base no es de rápida quimiosensibilidad; anticoagulación si hay un componente trombótico significativo asociado, con precaución dada la friabilidad vascular regional.',
      criterios_uci: 'Compromiso grave de la vía aérea, alteración significativa del estado de conciencia por edema cerebral, inestabilidad hemodinámica asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia de la resolución progresiva del edema/síntomas con el tratamiento definitivo de la causa de base; vigilancia neurológica si hubo compromiso del estado de conciencia inicial.',
      seguimiento_ambulatorio: 'Seguimiento oncológico según el tratamiento definitivo de la neoplasia causal.',
      pronostico: 'Depende fundamentalmente de la causa de base y de su respuesta al tratamiento definitivo; en el linfoma altamente quimiosensible, la resolución del síndrome con el inicio del tratamiento oncológico puede ser notablemente rápida.',
      algoritmo: ['Edema facial/de cuello + distensión venosa + disnea → sospechar síndrome de vena cava superior', 'TC de tórax con contraste para confirmar la obstrucción y su causa', 'Elevar la cabecera de la cama; biopsia de la masa causal ANTES de corticoides si es clínicamente seguro', 'Tratamiento definitivo urgente dirigido a la causa de base una vez establecido el diagnóstico histológico', 'Endoprótesis intravascular considerada para alivio sintomático rápido si la causa no es de rápida quimiosensibilidad']
    },
    {
      nombre: 'Síndrome de lisis tumoral',
      color: '#8a6a1f',
      definicion: 'Urgencia oncológica producida por la liberación masiva y rápida del contenido intracelular de células linfomatosas que mueren, con mayor riesgo en los linfomas de mayor volumen tumoral y proliferación más acelerada (particularmente el linfoma de Burkitt, donde puede estar presente ya al momento del diagnóstico); desarrollada en detalle en el tema de Leucemia Aguda, aquí contextualizada específicamente para el linfoma.',
      fisiopatologia: 'El mecanismo es idéntico al descrito en el contexto de la leucemia aguda: liberación de potasio, fósforo, y ácidos nucleicos (metabolizados a ácido úrico) al morir las células tumorales, superando la capacidad excretora renal y produciendo hiperpotasemia, hiperfosfatemia, hipocalcemia secundaria, e hiperuricemia; en el linfoma, el riesgo es particularmente elevado en la enfermedad de gran volumen tumoral (masa voluminosa, LDH marcadamente elevada) y alta quimiosensibilidad, siendo el linfoma de Burkitt el prototipo de mayor riesgo entre todas las neoplasias hematológicas dado su altísimo índice proliferativo.',
      epidemiologia: 'El riesgo varía marcadamente según el subtipo de linfoma: prácticamente universal en el linfoma de Burkitt, considerablemente menor en el linfoma no Hodgkin agresivo de volumen tumoral moderado, y poco frecuente en el linfoma indolente o el linfoma de Hodgkin (dado su menor volumen relativo de células neoplásicas verdaderas).',
      factores_riesgo: ['Linfoma de Burkitt u otro linfoma altamente agresivo/proliferativo', 'Masa tumoral voluminosa al diagnóstico', 'LDH marcadamente elevada al diagnóstico', 'Función renal basal ya comprometida', 'Deshidratación al momento de iniciar la quimioterapia'],
      clinica: 'Náusea, vómito, y letargo por las alteraciones metabólicas; calambres musculares y tetania por la hipocalcemia; arritmia cardiaca (la manifestación más temida, por la hiperpotasemia); oliguria/anuria si progresa a lesión renal aguda.',
      criterios_dx: 'Criterios de Cairo-Bishop (ver el tema de Leucemia Aguda para el desarrollo completo): síndrome de lisis tumoral de laboratorio (2 o más alteraciones metabólicas) con o sin síndrome de lisis tumoral clínico (el de laboratorio más lesión renal aguda, arritmia cardiaca, o convulsión).',
      laboratorio: 'Potasio, fósforo, calcio, ácido úrico, creatinina, y LDH seriados, particularmente en las primeras 24-72 horas tras iniciar quimioterapia en el linfoma de alto riesgo (particularmente Burkitt).',
      imagen: 'No indicada de rutina para el diagnóstico; ecografía renal si hay sospecha de obstrucción como contribuyente adicional.',
      complementarios: 'Electrocardiograma de vigilancia en el paciente de alto riesgo o con hiperpotasemia documentada.',
      dx_diferencial: 'Lesión renal aguda de otra causa en el paciente oncológico, que puede coexistir y contribuir al cuadro.',
      tx_medico: 'Profilaxis proactiva en todo paciente de riesgo intermedio-alto ANTES de iniciar la quimioterapia (particularmente sistemática en el linfoma de Burkitt, ver esa tarjeta): hidratación intravenosa agresiva y agentes hipouricemiantes; manejo urgente de las alteraciones electrolíticas específicas una vez establecido el síndrome.',
      tx_farmacologico: 'Alopurinol como profilaxis estándar en el riesgo intermedio; rasburicasa en el riesgo alto (sistemática en el linfoma de Burkitt) o en el síndrome ya establecido; manejo estándar de la hiperpotasemia aguda si se desarrolla.',
      tx_intervencionista: 'Terapia de reemplazo renal urgente (hemodiálisis) en la lesión renal aguda grave con hiperpotasemia refractaria, sobrecarga de volumen, o acidosis grave.',
      criterios_uci: 'Arritmia cardiaca por hiperpotasemia grave, lesión renal aguda que requiere terapia de reemplazo renal urgente, convulsiones por las alteraciones metabólicas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí.',
      seguimiento_hospitalario: 'Vigilancia electrolítica y de la función renal seriada estrecha durante las primeras 72 horas de la quimioterapia en el linfoma de alto riesgo, con electrocardiograma de vigilancia si hay hiperpotasemia.',
      seguimiento_ambulatorio: 'No suele requerir seguimiento ambulatorio específico una vez resuelto el episodio agudo.',
      pronostico: 'Excelente con la profilaxis proactiva adecuada en el paciente identificado como de riesgo antes de iniciar la quimioterapia; potencialmente fatal si no se reconoce y trata oportunamente en el linfoma de alto riesgo (particularmente Burkitt).',
      algoritmo: ['Clasificar riesgo de síndrome de lisis tumoral ANTES de iniciar quimioterapia (volumen tumoral, LDH, función renal basal)', 'Linfoma de Burkitt u otro de alto riesgo → hidratación agresiva + rasburicasa sistemática', 'Vigilancia electrolítica y de función renal seriada en las primeras 72 horas', 'Alteraciones establecidas → manejo urgente específico', 'Considerar terapia de reemplazo renal si es grave y refractario al manejo médico']
    },
    {
      nombre: 'Compresión medular y otras urgencias oncológicas',
      color: '#7a1f3d',
      definicion: 'Compresión de la médula espinal por extensión epidural directa de masa linfomatosa (paravertebral con extensión al canal espinal, o afectación vertebral directa), una urgencia oncológica que requiere reconocimiento y tratamiento inmediatos para prevenir un déficit neurológico permanente; agrupada aquí junto con otras urgencias oncológicas relevantes en el contexto del linfoma.',
      fisiopatologia: 'La masa tumoral epidural comprime directamente la médula espinal y compromete su irrigación vascular (por compresión venosa inicial, seguida de compromiso arterial si progresa), produciendo edema medular progresivo y, si no se revierte con prontitud, isquemia y daño neuronal irreversible; el linfoma puede producir compresión medular por extensión desde una masa paravertebral (más característico del linfoma) o, con menor frecuencia, por afectación ósea vertebral directa con colapso y retropulsión de fragmento óseo hacia el canal.',
      epidemiologia: 'Una complicación relativamente infrecuente pero temida del linfoma, particularmente relevante cuando hay enfermedad paravertebral voluminosa; el pronóstico neurológico depende críticamente de la rapidez del reconocimiento y tratamiento.',
      factores_riesgo: ['Enfermedad paravertebral voluminosa conocida', 'Dolor de espalda de nueva aparición o de características distintas en un paciente con linfoma conocido', 'Linfoma no Hodgkin agresivo o linfoma de Burkitt (por su crecimiento más rápido, con menor margen de tiempo para el reconocimiento antes del daño neurológico establecido)'],
      clinica: 'Dolor de espalda progresivo, con frecuencia el síntoma inicial y precediendo a los síntomas neurológicos por días a semanas si se reconoce a tiempo; debilidad de extremidades inferiores progresiva, alteración sensitiva con un nivel sensitivo identificable, y disfunción de esfínteres (retención urinaria, con frecuencia el signo más tardío y de peor pronóstico si ya está presente).',
      criterios_dx: 'Resonancia magnética urgente de toda la columna (no solo del nivel clínicamente sospechado, dado que puede haber múltiples sitios de compresión) ante cualquier sospecha clínica, sin esperar la progresión completa del cuadro neurológico.',
      laboratorio: 'No hay un marcador de laboratorio específico para el diagnóstico en sí; el estudio de laboratorio se orienta al linfoma de base.',
      imagen: 'Resonancia magnética de toda la columna como el estudio de elección, urgente ante cualquier sospecha clínica; TC si la resonancia no está disponible de forma inmediata, aunque con menor sensibilidad para la afectación de tejidos blandos epidurales.',
      complementarios: 'Evaluación neuroquirúrgica y de radioterapia oncológica urgente en paralelo, dado que la decisión terapéutica (quirúrgica vs. radioterapia vs. ambas) debe tomarse sin demora una vez confirmado el diagnóstico.',
      dx_diferencial: 'Compresión medular de otra causa no oncológica (hernia discal aguda, absceso epidural), metástasis de otra neoplasia sólida en el paciente con antecedente oncológico mixto.',
      tx_medico: 'Corticoides sistémicos en dosis altas de inmediato ante la sospecha clínica razonable, sin esperar la confirmación por resonancia magnética si el cuadro es sugestivo y el estudio no está disponible de inmediato, dado que reducen el edema medular y pueden preservar función neurológica mientras se organiza el tratamiento definitivo.',
      tx_farmacologico: 'Dexametasona en dosis altas como medida inicial urgente; quimioterapia definitiva dirigida al linfoma de base, particularmente eficaz y de acción rápida si el linfoma es altamente quimiosensible (como el linfoma de Burkitt o el linfoma difuso de células B grandes), pudiendo evitar la necesidad de cirugía o radioterapia en ese contexto específico.',
      tx_intervencionista: 'Radioterapia urgente dirigida al sitio de compresión como tratamiento definitivo en la mayoría de los casos de linfoma (dado que es altamente radiosensible); descompresión quirúrgica urgente considerada si hay inestabilidad de la columna, deterioro neurológico rápido pese al tratamiento médico inicial, o cuando el diagnóstico histológico aún no está establecido y se requiere tejido para biopsia.',
      criterios_uci: 'Compromiso respiratorio si la compresión es a nivel cervical alto con afectación de la función diafragmática, inestabilidad hemodinámica asociada a disautonomía por lesión medular alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia neurológica seriada estrecha (fuerza, sensibilidad, función de esfínteres) durante el tratamiento urgente; rehabilitación temprana iniciada tan pronto como sea clínicamente apropiado.',
      seguimiento_ambulatorio: 'Rehabilitación física prolongada según el grado de déficit neurológico residual; seguimiento oncológico del linfoma de base según su tratamiento definitivo.',
      pronostico: 'Determinado críticamente por el estado neurológico al momento de iniciar el tratamiento: la recuperación funcional es considerablemente mejor si se trata antes de que se establezca un déficit motor completo o disfunción de esfínteres, de ahí la importancia central del reconocimiento temprano ante dolor de espalda de nueva aparición en un paciente con linfoma conocido.',
      algoritmo: ['Dolor de espalda de nueva aparición en paciente con linfoma conocido (particularmente con enfermedad paravertebral) → sospechar compresión medular', 'Corticoides en dosis altas de inmediato ante sospecha razonable, sin esperar confirmación si el estudio no está disponible de inmediato', 'Resonancia magnética urgente de toda la columna', 'Evaluación neuroquirúrgica y de radioterapia oncológica en paralelo', 'Radioterapia urgente (o quimioterapia si el linfoma es altamente quimiosensible) vs. descompresión quirúrgica según el contexto clínico']
    },
    {
      nombre: 'Complicaciones del tratamiento',
      color: '#6b4a2e',
      definicion: 'Efectos adversos tardíos característicos de los agentes usados en el tratamiento del linfoma, particularmente relevantes dado el excelente pronóstico a largo plazo de muchos subtipos (especialmente el linfoma de Hodgkin), lo que hace que la prevención y vigilancia de estas complicaciones tardías sea una consideración central del seguimiento a largo plazo: cardiotoxicidad por antraciclinas, toxicidad pulmonar por bleomicina, y segundas neoplasias (particularmente relacionadas con radioterapia previa).',
      fisiopatologia: 'Las antraciclinas (doxorrubicina, componente del esquema ABVD y R-CHOP) producen daño miocárdico acumulativo dependiente de la dosis total recibida, por un mecanismo que involucra la generación de especies reactivas de oxígeno y daño mitocondrial en el cardiomiocito, produciendo una miocardiopatía dilatada que puede manifestarse años después de completado el tratamiento; la bleomicina (componente del esquema ABVD) produce fibrosis pulmonar por un mecanismo de estrés oxidativo directo sobre el epitelio alveolar, con un riesgo particularmente aumentado si se combina con concentraciones altas de oxígeno suplementario (una consideración perioperatoria importante en el paciente con antecedente de exposición a bleomicina); la radioterapia (particularmente la irradiación de campo extendido usada históricamente en el linfoma de Hodgkin, en gran medida abandonada en favor de campos más limitados en la práctica moderna) se asocia a un riesgo aumentado de segundas neoplasias sólidas (cáncer de mama, pulmón, tiroides, entre otros) en el tejido irradiado, con una latencia de años a décadas.',
      epidemiologia: 'El riesgo de cardiotoxicidad por antraciclinas aumenta con la dosis acumulada total; el riesgo de toxicidad pulmonar por bleomicina, aunque menos frecuente, puede ser grave y en ocasiones fatal si no se reconoce; el riesgo de segundas neoplasias tras radioterapia es una preocupación particularmente relevante en el sobreviviente de linfoma de Hodgkin tratado en la juventud, dada la larga expectativa de vida posterior al tratamiento exitoso.',
      factores_riesgo: ['Dosis acumulada total de antraciclinas (para la cardiotoxicidad)', 'Exposición a concentraciones altas de oxígeno suplementario tras bleomicina previa (para la toxicidad pulmonar)', 'Radioterapia de campo extendido, particularmente en la juventud (para las segundas neoplasias)', 'Sexo femenino y edad joven al momento de la radioterapia torácica (mayor riesgo de cáncer de mama secundario)'],
      clinica: 'Cardiotoxicidad: síntomas de insuficiencia cardiaca (disnea, edema, fatiga), que pueden manifestarse años después del tratamiento. Toxicidad pulmonar por bleomicina: tos seca progresiva, disnea, que puede presentarse agudamente tras exposición a oxígeno suplementario en un procedimiento quirúrgico posterior. Segundas neoplasias: síntomas según el sitio y tipo específico, con frecuencia detectadas por cribado dirigido en el sobreviviente de larga evolución.',
      criterios_dx: 'Cardiotoxicidad: ecocardiograma con fracción de eyección reducida en el contexto de exposición previa a antraciclinas. Toxicidad pulmonar: hallazgos radiológicos e historia de exposición a bleomicina, con pruebas de función pulmonar mostrando un patrón restrictivo con difusión reducida. Segundas neoplasias: diagnóstico histopatológico específico.',
      laboratorio: 'Péptido natriurético (BNP/NT-proBNP) como marcador de apoyo en la sospecha de cardiotoxicidad; no hay un marcador de laboratorio específico para la toxicidad pulmonar por bleomicina.',
      imagen: 'Ecocardiograma basal antes de iniciar antraciclinas y de seguimiento periódico según el riesgo acumulado; pruebas de función pulmonar basales antes de bleomicina; mamografía/resonancia mamaria de cribado en la mujer con antecedente de radioterapia torácica en la juventud, iniciada más tempranamente que el cribado poblacional estándar.',
      complementarios: 'Evaluación cardiológica y neumológica basal antes de iniciar el tratamiento en el paciente con factores de riesgo adicionales (cardiopatía o neumopatía preexistente).',
      dx_diferencial: 'Insuficiencia cardiaca de otra causa no relacionada con el tratamiento, neumonía infecciosa u otra causa de infiltrado pulmonar en el paciente con antecedente de bleomicina, progresión/recaída del linfoma de base como causa alternativa de un nuevo hallazgo (que debe distinguirse de una segunda neoplasia genuinamente independiente).',
      tx_medico: 'Manejo estándar de la insuficiencia cardiaca establecida si ocurre cardiotoxicidad; suspensión inmediata de la bleomicina ante cualquier signo de toxicidad pulmonar incipiente, y evitar concentraciones altas de oxígeno suplementario de forma indefinida en el paciente con antecedente de exposición a bleomicina; manejo oncológico estándar de la segunda neoplasia según su tipo.',
      tx_farmacologico: 'Tratamiento farmacológico estándar de la insuficiencia cardiaca (inhibidores del sistema renina-angiotensina, betabloqueadores) si se establece cardiotoxicidad; dexrazoxano considerado como cardioprotector en pacientes seleccionados que requieren dosis acumuladas altas de antraciclinas.',
      tx_intervencionista: 'Manejo según el tipo y estadio de la segunda neoplasia específica identificada en el cribado.',
      criterios_uci: 'Insuficiencia cardiaca aguda descompensada grave, insuficiencia respiratoria aguda por toxicidad pulmonar grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante cardiaco considerado en casos excepcionales de miocardiopatía por antraciclinas terminal refractaria al manejo médico estándar.',
      seguimiento_hospitalario: 'Según la complicación aguda específica que motive la hospitalización.',
      seguimiento_ambulatorio: 'Ecocardiograma de seguimiento periódico según el riesgo acumulado de exposición a antraciclinas; cribado de segundas neoplasias apropiado para el tipo y campo de radioterapia recibidos, iniciado más tempranamente que el cribado poblacional estándar en el grupo de riesgo aumentado; educación al paciente sobre evitar oxígeno suplementario en concentraciones altas de forma indefinida si recibió bleomicina.',
      pronostico: 'Variable según la complicación específica; la vigilancia proactiva y la detección temprana (particularmente del cribado de segundas neoplasias y de la función cardiaca) mejoran sustancialmente los desenlaces en el sobreviviente de linfoma a largo plazo, un grupo poblacional cada vez más numeroso dado el excelente pronóstico oncológico de muchos subtipos.',
      algoritmo: ['Antes de iniciar antraciclinas → ecocardiograma basal; antes de bleomicina → pruebas de función pulmonar basales', 'Vigilancia periódica de función cardiaca según dosis acumulada de antraciclinas durante y después del tratamiento', 'Suspender bleomicina ante cualquier signo de toxicidad pulmonar incipiente; evitar oxígeno en concentraciones altas de forma indefinida tras exposición', 'Cribado de segundas neoplasias iniciado tempranamente en el sobreviviente con antecedente de radioterapia, particularmente cáncer de mama en la mujer joven irradiada', 'Educación al paciente sobreviviente sobre estos riesgos a largo plazo como parte estándar del seguimiento']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de los linfomas se centra en el manejo de las urgencias oncológicas al diagnóstico o durante el tratamiento inicial (síndrome de vena cava superior, síndrome de lisis tumoral, compresión medular) y en la vigilancia de la toxicidad aguda del tratamiento.',
    parametros: ['Perfil metabólico y electrolitos (particularmente al iniciar quimioterapia en linfoma de alto riesgo)', 'Estado neurológico si hay sospecha de compresión medular', 'Signos de obstrucción de vena cava superior', 'Función cardiopulmonar durante esquemas con antraciclinas/bleomicina'],
    criterios_uci_general: 'Síndrome de vena cava superior grave con compromiso de la vía aérea o del estado de conciencia, síndrome de lisis tumoral grave con arritmia o lesión renal aguda, compresión medular con compromiso respiratorio, insuficiencia cardiaca o respiratoria aguda por toxicidad del tratamiento.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'Trasplante autólogo de células madre hematopoyéticas en la enfermedad recidivante/refractaria con quimiosensibilidad demostrada (linfoma de Hodgkin, linfoma no Hodgkin agresivo); terapia CAR-T establecida como alternativa en el linfoma no Hodgkin agresivo refractario; ver las tarjetas correspondientes para el desarrollo completo.',
    prevencion: 'Cribado y profilaxis proactiva de síndrome de lisis tumoral antes de iniciar quimioterapia en el linfoma de alto riesgo (particularmente Burkitt); biopsia diagnóstica ANTES de administrar corticoides cuando sea clínicamente seguro, dado que pueden alterar la histología; reconocimiento temprano del dolor de espalda de nueva aparición como posible signo inicial de compresión medular; evaluación cardiopulmonar basal antes de esquemas con antraciclinas/bleomicina; cribado de segundas neoplasias a largo plazo en el sobreviviente con antecedente de radioterapia.'
  }
};

export const compCites = {
  'Linfoma de Hodgkin': [1, 2, 7],
  'Linfoma No Hodgkin Agresivo': [3, 6, 8],
  'Linfoma No Hodgkin Indolente': [4],
  'Linfoma de Burkitt y Linfomas Altamente Agresivos': [5],
  'Síndrome de vena cava superior': [9],
  'Síndrome de lisis tumoral': [10],
  'Compresión medular y otras urgencias oncológicas': [11],
  'Complicaciones del tratamiento': [13, 14, 15]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'IPI (Índice Pronóstico Internacional)': [6],
  'IPS de Hasenclever': [7],
  'Estadificación de Ann Arbor (modificada de Lugano)': [12]
};
export const escalaCalc = { 'IPI (Índice Pronóstico Internacional)': 'ipi', 'IPS de Hasenclever': 'ips' };
export const compGroups = [
  { name: 'Linfomas por tipo (enfermedades)', items: ['Linfoma de Hodgkin', 'Linfoma No Hodgkin Agresivo', 'Linfoma No Hodgkin Indolente', 'Linfoma de Burkitt y Linfomas Altamente Agresivos'] },
  { name: 'Complicaciones transversales', items: ['Síndrome de vena cava superior', 'Síndrome de lisis tumoral', 'Compresión medular y otras urgencias oncológicas', 'Complicaciones del tratamiento'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren los tipos principales de linfoma; las siguientes 4 son complicaciones transversales que pueden surgir al diagnóstico o durante el tratamiento, desde urgencias oncológicas agudas hasta la toxicidad tardía del tratamiento.';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { label: 'LINFOMAS', color: '#6b3d5c' },
  branches: [
    { label: 'Linfoma de Hodgkin', color: '#6b3d5c', leaves: ['Clásico', 'Predominio linfocítico nodular'] },
    { label: 'No Hodgkin agresivo', color: '#7a1f3d', leaves: ['Difuso de células B grandes', 'Burkitt'] },
    { label: 'No Hodgkin indolente', color: '#8a6a1f', leaves: ['Folicular', 'Zona marginal'] }
  ]
};
export const diagCites = { laboratorio: [6, 10], no_invasivos: [6, 7] };
export const clasificacionCite = [6, 7, 12];
export const seguimientoCite = [1, 3];
