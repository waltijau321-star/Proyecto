// topics/leucemia-linfocitica-cronica/content.js: Leucemia Linfocítica Crónica (LLC de bajo
// riesgo, LLC que requiere tratamiento, Linfoma Linfocítico Pequeño, Linfocitosis B Monoclonal).
// Estructura idéntica al contrato del motor (misma forma que los temas recientes de Hematología).
// Sigue la convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo
// continuo por tipo).
//
// Nota de alcance: la LLC es fundamentalmente UNA sola enfermedad biológica (a diferencia de los
// temas previos con 4 entidades distintas); las 4 tarjetas de "enfermedad" de este tema reflejan
// el espectro clínico y las entidades biológicamente relacionadas (SLL, MBL), no 4 enfermedades
// independientes.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás (compCites, estigmas, biopsia, escalaRefs, escalaCalc, compGroups, complicacionesIntro,
// categories, arbol, diagCites, clasificacionCite, seguimientoCite) debe ser un `export const`
// de nivel superior, HERMANO de `content`, no anidado dentro de él.
//
// IMPORTANTE (ver memoria del proyecto): antes de dar study.js por terminado, correr
// `grep -c "q:"` y `grep -c "correct: [0-9]"` y confirmar que ambos son iguales entre sí Y
// iguales a 45 (30 sueltas + 5 cascadas × 3 pasos); además, releer cada pregunta completa
// (options+correct+explanation) para confirmar que options[correct] es realmente la respuesta
// correcta, no solo el conteo de distribución.

export const meta = {
  id: 'leucemia-linfocitica-cronica',
  titulo: 'Leucemia Linfocítica Crónica',
  subtitulo: 'Módulo 21 · Medicina Interna',
  accent: '#5c3d8c',
  accentDim: '#9678b8'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const espectroClinicoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:540px;margin:0 auto;">
  <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:110px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>MBL</strong><br>Clon B &lt;5,000/µL<br><span style="color:var(--ink-dim);">sin adenopatías/citopenias</span></div>
  <div style="color:var(--ink-dim);align-self:center;">→</div>
    <div style="flex:1;min-width:110px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>LLC bajo riesgo</strong><br>Clon B ≥5,000/µL<br><span style="color:var(--ink-dim);">asintomática, vigilar y esperar</span></div>
  <div style="color:var(--ink-dim);align-self:center;">→</div>
    <div style="flex:1;min-width:110px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>LLC activa</strong><br>Criterios iwCLL<br><span style="color:var(--ink-dim);">requiere tratamiento</span></div>
  </div>
  <div style="width:100%;height:1px;background:var(--line);margin:2px 0;"></div>
  <div style="font-size:10px;color:var(--ink-dim);text-align:center;line-height:1.6;"><strong style="color:var(--ink);">Linfoma linfocítico pequeño (SLL):</strong> misma célula neoplásica que la LLC, pero con predominio de adenopatías/infiltración tisular sobre la linfocitosis en sangre periférica; se considera la misma enfermedad biológica con una presentación predominantemente ganglionar en lugar de leucémica.</div>
</div>`;

const decisionTerapeuticaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Criterios iwCLL de enfermedad activa cumplidos</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Estudio molecular: IGHV + FISH/TP53</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:150px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>TP53 alterado</strong><br>→ Terapia dirigida (inhibidor de BTK o venetoclax); NO quimioinmunoterapia con fludarabina</div>
    <div style="flex:1;min-width:150px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>TP53 no alterado</strong><br>→ Terapia dirigida preferida en la mayoría; quimioinmunoterapia clásica reservada a un subgrupo seleccionado</div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La leucemia linfocítica crónica (LLC) es la leucemia más frecuente en el adulto en países occidentales: una neoplasia clonal de linfocitos B maduros pequeños, morfológicamente normales en apariencia pero funcionalmente incompetentes, que se acumulan progresivamente en la sangre periférica, la médula ósea, los ganglios linfáticos y el bazo. Comparte el mismo origen biológico con el linfoma linfocítico pequeño (SLL, la misma célula neoplásica con predominio de presentación ganglionar/tisular sobre la leucémica) y tiene como entidad precursora a la linfocitosis B monoclonal (MBL, un clon B de bajo volumen sin criterios diagnósticos de LLC).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La leucemia más frecuente en el adulto en países occidentales; la mediana de edad al diagnóstico es de aproximadamente 70 años, con una incidencia que aumenta marcadamente con la edad; es infrecuente antes de los 40 años. Predomina en varones. La MBL, su entidad precursora, se detecta incidentalmente en una proporción considerable de adultos mayores sanos sometidos a citometría de flujo sensible.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>LLC de bajo riesgo</strong>: enfermedad detectada incidentalmente, asintomática, sin criterios de tratamiento activo; manejo con vigilancia activa ("vigilar y esperar").</li>
    <li><strong>LLC que requiere tratamiento</strong>: cumple criterios iwCLL de enfermedad activa (citopenias progresivas, síntomas constitucionales, adenopatías/organomegalia sintomáticas o de crecimiento rápido, entre otros).</li>
    <li><strong>Linfoma linfocítico pequeño (SLL)</strong>: la misma neoplasia biológica que la LLC, con predominio de adenopatías/infiltración tisular sobre la linfocitosis en sangre periférica.</li>
    <li><strong>Linfocitosis B monoclonal (MBL)</strong>: entidad precursora, un clon B circulante de bajo volumen (&lt;5,000/µL) sin adenopatías, organomegalia, ni citopenias; progresa a LLC franca a una tasa aproximada de 1-2% anual.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada</li>
    <li>Sexo masculino</li>
    <li>Antecedente familiar de LLC u otro síndrome linfoproliferativo (riesgo relativo aumentado en familiares de primer grado)</li>
    <li>Ascendencia caucásica (menor incidencia en poblaciones asiáticas)</li>
    <li>Antecedente de linfocitosis B monoclonal conocida</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La célula de LLC es un linfocito B maduro que ha escapado de la apoptosis normal y se acumula progresivamente, en gran medida por supervivencia prolongada más que por proliferación rápida (a diferencia de las leucemias agudas); la señalización crónica a través del receptor de células B (BCR), sostenida por el microambiente de los ganglios linfáticos y la médula ósea, es un mecanismo central que impulsa la supervivencia del clon y es el blanco terapéutico de los inhibidores de BTK.${figBlock('Imagen 1', 'Espectro clínico: MBL, LLC y SLL', espectroClinicoHtml)} El estado mutacional del gen de la cadena pesada de inmunoglobulina (IGHV) es uno de los factores biológicos más determinantes: la LLC con IGHV mutado (que indica que el linfocito B pasó por el centro germinal) tiene un curso considerablemente más indolente que la LLC con IGHV no mutado. Las citopenias autoinmunes (ver Complicaciones) reflejan una disfunción inmunológica secundaria característica de la enfermedad, distinta de la citopenia por infiltración medular directa. Analogía: la LLC es menos como un incendio que se propaga rápidamente (la leucemia aguda) y más como una acumulación lenta de agua que no logra drenar: las células no proliferan de forma explosiva, simplemente se niegan a morir cuando deberían, acumulándose gota a gota durante años.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de linfocitosis asintomática en una biometría de rutina (la forma de presentación más frecuente) hasta la enfermedad sintomática con adenopatías generalizadas, esplenomegalia, síntomas constitucionales ("síntomas B"), y citopenias progresivas; el diagnóstico por citometría de flujo, la clasificación por estadio y factores pronósticos, y el manejo de cada complicación se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Hallek M, Al-Sawaf O. Chronic lymphocytic leukemia: 2021 update on diagnosis, risk stratification and treatment. Am J Hematol. 2021;96(12):1679-1705.',
  'Hallek M, Cheson BD, Catovsky D, et al. iwCLL guidelines for diagnosis, indications for treatment, response assessment, and supportive management of CLL. Blood. 2018;131(25):2745-2760.',
  'International CLL-IPI working group. An international prognostic index for patients with chronic lymphocytic leukaemia (CLL-IPI): a meta-analysis of individual patient data. Lancet Oncol. 2016;17(6):779-790.',
  'Rai KR, Sawitsky A, Cronkite EP, et al. Clinical staging of chronic lymphocytic leukemia. Blood. 1975;46(2):219-234.',
  'Binet JL, Auquier A, Dighiero G, et al. A new prognostic classification of chronic lymphocytic leukemia derived from a multivariate survival analysis. Cancer. 1981;48(1):198-206.',
  'Strati P, Shanafelt TD. Monoclonal B-cell lymphocytosis and early-stage chronic lymphocytic leukemia: diagnosis, natural history, and risk stratification. Blood. 2015;126(4):454-462.',
  'Rossi D, Spina V, Gaidano G. Biology and treatment of Richter syndrome. Blood. 2018;131(25):2761-2772.',
  'Zent CS, Kay NE. Autoimmune complications in chronic lymphocytic leukaemia (CLL). Best Pract Res Clin Haematol. 2010;23(1):47-59.',
  'Morrison VA. Infectious complications of chronic lymphocytic leukaemia: pathogenesis, spectrum of infection, and approaches to prophylaxis. Clin Lymphoma Myeloma. 2009;9(5):365-370.',
  'Sun C, Wiestner A. Immune modulation by chronic lymphocytic leukemia cells: implications for therapeutic strategies. Semin Hematol. 2014;51(3):219-227.',
  'Howard SC, Jones DP, Pui CH. The tumor lysis syndrome. N Engl J Med. 2011;364(19):1844-1854.',
  'Roeker LE, Fox CP, Eyre TA, et al. Tumor Lysis, Adverse Events, and Dose Adjustments in 297 Venetoclax-Treated CLL Patients. Clin Cancer Res. 2019;25(14):4264-4270.',
  'Falchi L, Vitale C, Keating MJ, et al. Incidence and prognostic value of concurrent CLL and Richter syndrome in patients with fludarabine-refractory CLL. Blood. 2013;121(24):4894-4899.',
  'Van der Straten L, Levin MD, Visser O, et al. Increased risk of second malignancies in patients with chronic lymphocytic leukaemia. Leuk Lymphoma. 2020;61(9):2170-2178.',
  'Wierda WG, Byrd JC, Abramson JS, et al. Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma, NCCN Clinical Practice Guidelines in Oncology. J Natl Compr Canc Netw. 2020;18(2):185-217.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Enfermedad asintomática (MBL/LLC de bajo riesgo)',
      tituloB: 'Enfermedad activa (requiere tratamiento)',
      compensada: 'Hallazgo incidental de linfocitosis en una biometría hemática de rutina, sin adenopatías palpables, sin organomegalia, sin citopenias, sin síntomas constitucionales; la forma de presentación más frecuente en la práctica clínica actual.',
      descompensada: 'Adenopatías generalizadas de crecimiento progresivo, esplenomegalia (con o sin hiperesplenismo), síntomas constitucionales ("síntomas B": fiebre no infecciosa, sudoración nocturna profusa, pérdida de peso involuntaria &gt;10% en 6 meses, fatiga incapacitante), citopenias progresivas por infiltración medular o por un mecanismo autoinmune (ver Complicaciones), o infecciones recurrentes por la inmunodeficiencia secundaria característica de la enfermedad.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con diferencial', utilidad: 'Linfocitosis absoluta (con frecuencia ≥5,000 linfocitos B clonales/µL para el diagnóstico de LLC franca); citopenias asociadas en la enfermedad avanzada o por complicación autoinmune.' },
      { prueba: 'Citometría de flujo de sangre periférica', utilidad: 'Prueba diagnóstica definitiva: confirma la clonalidad B y el inmunofenotipo característico (CD5, CD19, CD20 débil, CD23 positivos; restricción de cadena ligera).' },
      { prueba: 'Frotis de sangre periférica', utilidad: '"Sombras de Gumprecht" (linfocitos frágiles rotos durante la preparación del frotis), un hallazgo morfológico característico aunque no exclusivo de la LLC.' },
      { prueba: 'FISH/citogenética dirigida a del(17p), del(11q), trisomía 12, del(13q)', utilidad: 'Estratificación pronóstica y orientación terapéutica; del(17p)/mutación de TP53 identifica el grupo de peor pronóstico y resistencia relativa a la quimioinmunoterapia convencional.' },
      { prueba: 'Estado mutacional de IGHV', utilidad: 'Factor pronóstico central: IGHV mutado predice un curso considerablemente más indolente que IGHV no mutado.' }
    ],
    no_invasivos: [
      { metodo: 'CLL-IPI (con calculadora)', interpretacion: 'Estratifica el riesgo global combinando edad, estadio clínico, IGHV, TP53, y beta-2-microglobulina.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Estadificación de Rai o Binet', interpretacion: 'Estadificación clínica clásica basada en el examen físico y la biometría hemática, sin requerir estudios moleculares.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Prueba de antiglobulina directa (Coombs directo)', interpretacion: 'Cribado de anemia hemolítica autoinmune, una complicación característica de la LLC (ver Complicaciones).', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'TC de cuello/tórax/abdomen/pelvis', hallazgos: 'No indicada de rutina para el diagnóstico ni la estadificación estándar (que es clínica), pero útil si hay sospecha de adenopatía voluminosa, organomegalia marcada, o transformación de Richter (ver esa tarjeta).' },
      { modalidad: 'PET-TC', hallazgos: 'Dirigida a identificar el sitio de mayor actividad metabólica cuando se sospecha transformación de Richter, para guiar la biopsia dirigida al sitio de mayor captación.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es enfermedad asintomática/vigilar-y-esperar (MBL, LLC de bajo riesgo) vs. enfermedad activa que cumple criterios iwCLL de tratamiento; dentro de la enfermedad activa, el CLL-IPI y los estudios moleculares (IGHV, TP53) determinan el pronóstico y orientan la elección terapéutica.',
    escalas: [
      { nombre: 'CLL-IPI', componentes: 'Edad, estadio clínico, estado mutacional de IGHV, TP53, beta-2-microglobulina. Calculadora disponible más abajo.', formula: 'Puntaje 0-10 (TP53 alterado: 4 puntos; IGHV no mutado: 2 puntos; beta-2-microglobulina elevada: 2 puntos; estadio avanzado: 1 punto; edad &gt;65: 1 punto).', interpretacion: 'Bajo riesgo (0-1, SV5 ~93%). Intermedio (2-3, SV5 ~79%). Alto (4-6, SV5 ~64%). Muy alto (7-10, SV5 ~23%).' },
      { nombre: 'Estadificación de Rai (modificada)', componentes: 'Linfocitosis, adenopatías, organomegalia, anemia, trombocitopenia.', formula: 'Riesgo bajo: 0 (solo linfocitosis). Riesgo intermedio: I-II (linfocitosis + adenopatías/organomegalia). Riesgo alto: III-IV (anemia y/o trombocitopenia).', interpretacion: 'Sistema de estadificación clínica clásico, ampliamente usado en Norteamérica; orienta el pronóstico sin requerir estudios moleculares.' },
      { nombre: 'Estadificación de Binet', componentes: 'Número de áreas linfoides afectadas, hemoglobina, plaquetas.', formula: 'Estadio A: &lt;3 áreas afectadas, sin citopenias. Estadio B: ≥3 áreas afectadas, sin citopenias. Estadio C: anemia (Hb &lt;10 g/dL) y/o trombocitopenia (plaquetas &lt;100,000/µL).', interpretacion: 'Sistema de estadificación clínica clásico, ampliamente usado en Europa; equivalente conceptual al sistema de Rai con distinta agrupación.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'LLC de bajo riesgo',
      color: '#3f6b52',
      definicion: 'Leucemia linfocítica crónica confirmada por citometría de flujo pero sin criterios iwCLL de enfermedad activa: sin citopenias progresivas significativas, sin adenopatías/organomegalia voluminosas o de crecimiento rápido, sin síntomas constitucionales; representa la forma de presentación más frecuente en la práctica clínica actual, dado el diagnóstico incidental temprano por el uso extendido de la biometría hemática de rutina.',
      fisiopatologia: 'El clon de LLC está presente y es biológicamente activo, pero su carga tumoral y su comportamiento clínico no han alcanzado el umbral que justifica el inicio de tratamiento activo; la observación cuidadosa (vigilar y esperar) evita la toxicidad de un tratamiento que, en estudios controlados, no ha demostrado beneficio de supervivencia cuando se inicia antes de que la enfermedad se vuelva sintomática o progresiva, a diferencia de la mayoría de las neoplasias sólidas donde el tratamiento temprano es la norma.',
      epidemiologia: 'Representa la mayoría de los casos al momento del diagnóstico inicial, dado el hallazgo incidental frecuente de linfocitosis asintomática; una proporción de estos pacientes nunca progresará a requerir tratamiento durante su vida.',
      factores_riesgo: ['Edad avanzada al momento del diagnóstico incidental', 'IGHV mutado (predictor de curso más indolente y de menor probabilidad de progresión a corto plazo)', 'Ausencia de del(17p)/mutación de TP53', 'CLL-IPI de riesgo bajo al momento del diagnóstico'],
      clinica: 'Asintomática por definición; hallazgo incidental de linfocitosis en una biometría hemática solicitada por otro motivo, sin adenopatías palpables, sin organomegalia, sin síntomas constitucionales.',
      criterios_dx: 'Linfocitosis B clonal ≥5,000/µL confirmada por citometría de flujo, sin cumplir ninguno de los criterios iwCLL de enfermedad activa que indicarían inicio de tratamiento.',
      laboratorio: `Biometría hemática con linfocitosis estable en el seguimiento seriado; citometría de flujo confirmatoria; estudio molecular (IGHV, FISH/TP53) considerado al momento del diagnóstico para estratificación pronóstica basal, aunque no cambie el manejo inmediato.${figBlock('Imagen 2', 'Frotis de sangre periférica en LLC', `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Chronic_Lymphocytic_Leukaemia_%28lymphocytosis_and_smear_cells%29.jpg/960px-Chronic_Lymphocytic_Leukaemia_%28lymphocytosis_and_smear_cells%29.jpg" alt="Frotis de sangre periférica en leucemia linfocítica crónica: marcada linfocitosis con linfocitos pequeños de aspecto maduro y sombras de Gumprecht (smear cells)." style="width:100%;max-width:380px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
`)}`,
      imagen: 'No indicada de rutina.',
      complementarios: 'CLL-IPI (calculadora) o estadificación de Rai/Binet para establecer el pronóstico basal y planificar la frecuencia del seguimiento.',
      dx_diferencial: 'Linfocitosis B monoclonal (MBL, si el clon es &lt;5,000/µL, ver esa tarjeta), linfocitosis reactiva de otra causa (ver el tema de Alteraciones de la Serie Blanca).',
      tx_medico: 'Vigilancia activa ("vigilar y esperar") con biometría hemática y exploración física periódicas, sin tratamiento citorreductor, dado que el inicio temprano de tratamiento no ha demostrado beneficio de supervivencia en la enfermedad asintomática.',
      tx_farmacologico: 'Ninguno específico dirigido a la LLC en esta fase; vacunación apropiada (evitando vacunas de virus vivos atenuados) como medida preventiva general dada la inmunodeficiencia subyacente progresiva.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa a esta fase de la enfermedad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta fase de la enfermedad.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Biometría hemática y exploración física cada 3-6 meses (con menor frecuencia si la enfermedad es muy estable en el tiempo), vigilando la aparición de criterios iwCLL de enfermedad activa que indiquen reevaluación para inicio de tratamiento.',
      pronostico: 'Favorable a mediano plazo dado que, por definición, la enfermedad no está causando morbilidad activa; el pronóstico a largo plazo depende de los factores biológicos basales (IGHV, TP53, CLL-IPI).',
      algoritmo: ['Linfocitosis B clonal ≥5,000/µL confirmada → LLC diagnosticada', 'Evaluar criterios iwCLL de enfermedad activa', 'Sin criterios de enfermedad activa → vigilar y esperar, sin tratamiento', 'Establecer pronóstico basal (CLL-IPI, IGHV, TP53) para planificar seguimiento', 'Reevaluar en cada visita de seguimiento la aparición de criterios de tratamiento']
    },
    {
      nombre: 'LLC que requiere tratamiento',
      color: '#7a1f3d',
      definicion: 'Leucemia linfocítica crónica que cumple 1 o más criterios iwCLL de enfermedad activa, indicando el inicio de tratamiento citorreductor: citopenias progresivas por infiltración medular, adenopatías/organomegalia sintomáticas o de crecimiento rápido, síntomas constitucionales, linfocitosis de duplicación rápida, o anemia/trombocitopenia autoinmune que no responde adecuadamente a corticoides (ver la tarjeta de citopenias autoinmunes en Complicaciones).',
      fisiopatologia: 'La progresión a enfermedad activa refleja un aumento de la carga tumoral y de la infiltración de médula ósea, ganglios linfáticos, y bazo por encima del umbral que produce morbilidad clínica; la elección del tratamiento depende centralmente del estado de TP53/del(17p) (que predice resistencia relativa a la quimioinmunoterapia clásica basada en fludarabina) y, cada vez más, se orienta hacia terapias dirigidas (inhibidores de BTK, inhibidores de BCL2) que han desplazado a la quimioinmunoterapia convencional como primera línea preferida en la mayoría de los pacientes, independientemente del estado de TP53.',
      epidemiologia: 'La proporción de pacientes que eventualmente progresa a requerir tratamiento varía según los factores pronósticos basales (CLL-IPI, IGHV); el tiempo hasta el primer tratamiento es altamente variable, desde meses hasta nunca en el curso de vida del paciente.',
      factores_riesgo: ['IGHV no mutado', 'del(17p)/mutación de TP53', 'CLL-IPI de riesgo alto/muy alto', 'Estadio Rai III-IV o Binet C al momento del diagnóstico inicial', 'Linfocitosis de duplicación rápida (tiempo de duplicación linfocitaria &lt;6 meses)'],
      clinica: 'Adenopatías generalizadas de crecimiento progresivo, esplenomegalia sintomática, síntomas constitucionales ("síntomas B"), fatiga incapacitante, anemia y/o trombocitopenia progresivas (por infiltración medular o por un mecanismo autoinmune concomitante).',
      criterios_dx: 'Cumplimiento de 1 o más criterios iwCLL de enfermedad activa: anemia y/o trombocitopenia progresivas atribuibles a infiltración medular; esplenomegalia masiva o progresiva; adenopatía masiva (≥10 cm) o progresiva/sintomática; linfocitosis progresiva con tiempo de duplicación &lt;6 meses; anemia hemolítica autoinmune o trombocitopenia inmune que no responde adecuadamente a corticoides; síntomas constitucionales.',
      laboratorio: 'Biometría hemática seriada documentando la progresión; estudio molecular completo (IGHV, FISH/TP53) previo al inicio de tratamiento, dado que determina la elección terapéutica.',
      imagen: 'TC de cuello/tórax/abdomen/pelvis si hay sospecha de adenopatía voluminosa o organomegalia marcada no completamente caracterizada por el examen físico.',
      complementarios: 'Perfil de hierro/vitaminas y estudio de hemólisis (reticulocitos, LDH, haptoglobina, Coombs) si hay anemia, para distinguir infiltración medular de un mecanismo autoinmune concomitante (ver Complicaciones).',
      dx_diferencial: 'Citopenia autoinmune superpuesta sin verdadera progresión de la carga tumoral de base (ver esa tarjeta, un escenario que puede simular criterios de tratamiento sin representar progresión clonal genuina), transformación de Richter (ver esa tarjeta, que se presenta con un patrón clínico distinto: crecimiento ganglionar asimétrico rápido y desproporcionado, LDH marcadamente elevada).',
      tx_medico: `Inicio de tratamiento sistémico dirigido según el perfil molecular (TP53, IGHV) y las comorbilidades del paciente; discusión de la elección entre terapias dirigidas continuas (inhibidores de BTK) y esquemas de duración fija (inhibidor de BCL2 con o sin anticuerpo anti-CD20).${figBlock('Imagen 3', 'Decisión terapéutica según TP53', decisionTerapeuticaHtml)}`,
      tx_farmacologico: 'Inhibidores de BTK (ibrutinib, acalabrutinib, zanubrutinib) como pilar del tratamiento dirigido continuo, con eficacia mantenida independientemente del estado de TP53; venetoclax (inhibidor de BCL2) con o sin obinutuzumab/rituximab como esquema de duración fija alternativo, con precaución particular por el riesgo de síndrome de lisis tumoral en el inicio (ver la tarjeta de segundas neoplasias/complicaciones del tratamiento); la quimioinmunoterapia clásica (fludarabina-ciclofosfamida-rituximab) queda reservada para un subgrupo seleccionado sin comorbilidades y con biología favorable, dado el desplazamiento hacia las terapias dirigidas.',
      tx_intervencionista: 'No aplica de forma directa (salvo el manejo de complicaciones específicas, ver esa sección).',
      criterios_uci: 'Complicaciones graves del tratamiento (síndrome de lisis tumoral grave con venetoclax, sepsis grave por la inmunodeficiencia de base).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en casos muy seleccionados de enfermedad refractaria a múltiples líneas de terapia dirigida, incluida la transformación de Richter con quimiosensibilidad demostrada.',
      seguimiento_hospitalario: 'Vigilancia estrecha del riesgo de síndrome de lisis tumoral durante el escalonamiento inicial de dosis de venetoclax, particularmente en la enfermedad de alta carga tumoral (ver el tema de Leucemia Aguda para el desarrollo completo del síndrome de lisis tumoral).',
      seguimiento_ambulatorio: 'Vigilancia de la respuesta al tratamiento (biometría hemática, examen físico, y en ocasiones enfermedad residual mínima); vigilancia de efectos adversos específicos del inhibidor de BTK elegido (fibrilación auricular, hipertensión, sangrado) o del venetoclax (citopenias, síndrome de lisis tumoral inicial).',
      pronostico: 'Ha mejorado dramáticamente con las terapias dirigidas modernas, incluso en el subgrupo de peor pronóstico biológico (del(17p)/TP53 mutado), que históricamente respondía mal a la quimioinmunoterapia convencional.',
      algoritmo: ['Criterios iwCLL de enfermedad activa cumplidos → indicar tratamiento', 'Estudio molecular completo (IGHV, FISH/TP53) antes de elegir el esquema', 'Discutir terapia dirigida continua (inhibidor de BTK) vs. duración fija (venetoclax ± anti-CD20) según perfil del paciente', 'Vigilancia estrecha de síndrome de lisis tumoral si se elige venetoclax en enfermedad de alta carga', 'Vigilancia de efectos adversos específicos del esquema elegido durante el seguimiento']
    },
    {
      nombre: 'Linfoma Linfocítico Pequeño',
      color: '#6b4a2e',
      definicion: 'La misma neoplasia biológica que la leucemia linfocítica crónica (idéntico inmunofenotipo y comportamiento clonal), pero con una presentación predominantemente ganglionar/tisular (adenopatías, infiltración esplénica o de otros órganos) sin la linfocitosis en sangre periférica que define a la LLC franca; se considera una variante de presentación de la misma enfermedad, no una entidad biológicamente distinta.',
      fisiopatologia: 'El mecanismo biológico subyacente (supervivencia clonal prolongada de linfocitos B maduros, señalización crónica del receptor de células B) es idéntico al de la LLC; la diferencia es puramente de distribución anatómica del clon neoplásico: en el SLL, el clon se acumula predominantemente en los ganglios linfáticos y otros tejidos, con menor derrame hacia la sangre periférica, mientras que en la LLC franca el clon circula en cantidad suficiente para cumplir el umbral diagnóstico de linfocitosis.',
      epidemiologia: 'Representa una proporción minoritaria de los casos del espectro LLC/SLL en comparación con la presentación leucémica clásica; el diagnóstico con frecuencia se establece por biopsia de una adenopatía en el estudio de una linfadenopatía de causa no aclarada, más que por un hallazgo incidental en la biometría hemática.',
      factores_riesgo: ['Los mismos factores de riesgo generales de la LLC (edad avanzada, sexo masculino, antecedente familiar)', 'Ausencia de linfocitosis significativa en sangre periférica al momento de la presentación inicial (lo que orienta hacia SLL en lugar de LLC franca)'],
      clinica: 'Adenopatías (con frecuencia el hallazgo de presentación), esplenomegalia, síntomas constitucionales si la enfermedad es avanzada; puede ser asintomático y detectarse incidentalmente por adenopatía palpable o por hallazgo de imagen.',
      criterios_dx: 'Biopsia de ganglio linfático (o de otro tejido afectado) con histología e inmunofenotipo compatibles con LLC/SLL, en ausencia de la linfocitosis en sangre periférica que definiría LLC franca (o con linfocitosis presente pero por debajo del umbral diagnóstico).',
      laboratorio: 'Biometría hemática que puede ser normal o mostrar linfocitosis leve insuficiente para el diagnóstico de LLC franca; citometría de flujo de sangre periférica (puede ser negativa o mostrar un clon de bajo volumen) y del tejido biopsiado.',
      imagen: 'TC de cuello/tórax/abdomen/pelvis para la estadificación de la extensión ganglionar/extraganglionar, un componente más central del estudio inicial que en la LLC franca (donde la estadificación es predominantemente clínica).',
      complementarios: 'Biopsia excisional de ganglio linfático (preferida sobre la biopsia por aguja fina cuando es posible) para caracterización histológica completa, particularmente relevante para descartar transformación a un linfoma más agresivo desde el momento del diagnóstico inicial.',
      dx_diferencial: 'Otros linfomas de células B pequeñas (linfoma folicular, linfoma de la zona marginal, linfoma de células del manto, distinguibles por inmunofenotipo y citogenética), LLC franca con linfocitosis ya presente pero adenopatías predominantes.',
      tx_medico: 'Idéntico en principio al de la LLC según el mismo criterio de enfermedad activa (iwCLL, adaptado a la presentación predominantemente ganglionar) vs. vigilancia activa si es asintomático; los mismos esquemas terapéuticos dirigidos utilizados en la LLC franca son eficaces en el SLL, dado que es la misma enfermedad biológica.',
      tx_farmacologico: 'Los mismos agentes utilizados en la LLC que requiere tratamiento (inhibidores de BTK, venetoclax ± anti-CD20), seleccionados según el mismo perfil molecular (IGHV, TP53).',
      tx_intervencionista: 'No aplica de forma directa más allá de la biopsia diagnóstica inicial.',
      criterios_uci: 'Los mismos criterios que la LLC que requiere tratamiento, según la complicación específica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los mismos criterios que la LLC que requiere tratamiento (casos muy seleccionados de enfermedad refractaria).',
      seguimiento_hospitalario: 'Igual que la LLC que requiere tratamiento si se inicia terapia dirigida.',
      seguimiento_ambulatorio: 'Vigilancia clínica y de imagen periódica de las adenopatías/organomegalia; el mismo enfoque de seguimiento molecular y de respuesta que la LLC franca una vez iniciado el tratamiento.',
      pronostico: 'Similar al de la LLC franca con el mismo perfil molecular (IGHV, TP53), dado que es la misma enfermedad biológica; el pronóstico depende de estos mismos factores, no de la distribución anatómica de presentación en sí.',
      algoritmo: ['Adenopatía o esplenomegalia sin linfocitosis significativa → considerar SLL en el diagnóstico diferencial', 'Biopsia excisional de ganglio linfático para confirmación histológica e inmunofenotípica', 'Estudio molecular (IGHV, FISH/TP53) como en la LLC franca', 'Vigilar y esperar si es asintomático, según los mismos criterios iwCLL adaptados', 'Tratamiento con los mismos esquemas dirigidos que la LLC si cumple criterios de enfermedad activa']
    },
    {
      nombre: 'Linfocitosis B Monoclonal',
      color: '#8c6b2d',
      definicion: 'Entidad precursora de la LLC: la presencia de un clon de linfocitos B con el mismo inmunofenotipo característico de la LLC, pero en un volumen inferior al umbral diagnóstico (&lt;5,000 células clonales/µL), sin adenopatías, sin organomegalia, y sin citopenias atribuibles al clon; detectada incidentalmente en una proporción considerable de adultos mayores sanos cuando se realiza citometría de flujo sensible.',
      fisiopatologia: 'La MBL representa el extremo más temprano y de menor volumen del mismo espectro biológico que culmina en la LLC franca; se distinguen 2 subtipos con comportamiento distinto: la MBL de "bajo conteo" (clon muy pequeño, con un riesgo de progresión a LLC franca extremadamente bajo, prácticamente sin relevancia clínica) y la MBL de "alto conteo" (clon más cercano al umbral diagnóstico de LLC, con progresión a LLC franca a una tasa aproximada de 1-2% anual, biológicamente más relevante de vigilar).',
      epidemiologia: 'Se detecta incidentalmente en una proporción considerable de adultos mayores sanos sometidos a citometría de flujo sensible por otro motivo; su prevalencia aumenta marcadamente con la edad, siendo infrecuente antes de los 40 años.',
      factores_riesgo: ['Edad avanzada', 'Antecedente familiar de LLC u otro síndrome linfoproliferativo (mayor prevalencia de MBL en familiares de primer grado de pacientes con LLC)'],
      clinica: 'Completamente asintomática por definición; hallazgo incidental en un estudio de citometría de flujo realizado por otro motivo (por ejemplo, estudio de una linfocitosis leve inespecífica, o cribado en un familiar de un paciente con LLC).',
      criterios_dx: 'Clon de linfocitos B con inmunofenotipo compatible con LLC, en cantidad &lt;5,000 células clonales/µL, SIN adenopatías palpables, SIN organomegalia, y SIN citopenias atribuibles al clon.',
      laboratorio: 'Citometría de flujo de sangre periférica cuantificando el volumen del clon B; biometría hemática habitualmente normal o con linfocitosis leve insuficiente para el diagnóstico de LLC franca.',
      imagen: 'No indicada de rutina, dado que por definición no hay adenopatías ni organomegalia detectables.',
      complementarios: 'Ninguno adicional de rutina; el seguimiento periódico con biometría hemática es la principal medida de vigilancia.',
      dx_diferencial: 'LLC franca (clon ≥5,000/µL, ver esa tarjeta), linfocitosis reactiva policlonal (ver el tema de Alteraciones de la Serie Blanca, distinguible por la ausencia de restricción de cadena ligera en la citometría de flujo).',
      tx_medico: 'Ninguno; la MBL, por definición, no requiere ni se beneficia de tratamiento citorreductor, dado que no representa enfermedad clínicamente activa.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Biometría hemática de seguimiento periódico (anual es razonable en la mayoría de los casos, con mayor frecuencia en la MBL de "alto conteo") para detectar progresión a LLC franca; no se recomienda un estudio extenso adicional en ausencia de progresión.',
      pronostico: 'Excelente; la mayoría de los casos de MBL, particularmente la de "bajo conteo", nunca progresa a LLC franca clínicamente relevante durante la vida del paciente.',
      algoritmo: ['Clon B &lt;5,000/µL detectado incidentalmente, sin adenopatías/organomegalia/citopenias → MBL', 'Clasificar como "bajo conteo" o "alto conteo" según la cercanía al umbral diagnóstico de LLC', 'Ningún tratamiento indicado por definición', 'Seguimiento periódico con biometría hemática (frecuencia según el subtipo)', 'Progresión a clon ≥5,000/µL con o sin síntomas → reclasificar como LLC (ver las tarjetas correspondientes)']
    },
    {
      nombre: 'Citopenias autoinmunes',
      color: '#7a1f3d',
      definicion: 'Complicación inmunológica característica de la LLC: destrucción autoinmune de una o más líneas celulares (anemia hemolítica autoinmune, la más frecuente; trombocitopenia inmune; con menor frecuencia aplasia pura de la serie roja o neutropenia autoinmune) mediada por el propio sistema inmune desregulado del paciente, un mecanismo distinto de la citopenia por infiltración medular directa del clon leucémico.',
      fisiopatologia: 'La disfunción inmunológica característica de la LLC (que también explica el riesgo infeccioso, ver esa tarjeta) puede paradójicamente coexistir con la producción de autoanticuerpos dirigidos contra antígenos de la superficie eritrocitaria (produciendo anemia hemolítica autoinmune, con frecuencia de tipo caliente/IgG) o plaquetaria (produciendo trombocitopenia inmune); el mecanismo exacto de esta desregulación no está completamente establecido, pero se cree que involucra tanto la disfunción de las células T reguladoras como, en algunos casos, la producción de autoanticuerpos por el propio clon B neoplásico o por clones B residuales no neoplásicos desregulados por el microambiente alterado.',
      epidemiologia: 'La anemia hemolítica autoinmune es la citopenia autoinmune más frecuente en la LLC, ocurriendo en una proporción significativa de pacientes en algún momento del curso de la enfermedad; puede ocurrir en cualquier estadio, incluida la enfermedad por lo demás de bajo riesgo.',
      factores_riesgo: ['LLC de cualquier estadio (puede ocurrir incluso en enfermedad de bajo riesgo)', 'Antecedente previo de citopenia autoinmune', 'Ciertos agentes terapéuticos (particularmente la fludarabina en monoterapia, un desencadenante reconocido de anemia hemolítica autoinmune)'],
      clinica: 'Síntomas de anemia (fatiga, palidez, disnea de esfuerzo) de instauración con frecuencia más aguda que la anemia por infiltración medular progresiva; ictericia leve si hay hemólisis significativa; sangrado mucocutáneo si predomina la trombocitopenia inmune.',
      criterios_dx: 'Anemia hemolítica autoinmune: prueba de antiglobulina directa (Coombs directo) positiva, con reticulocitosis, LDH elevada, haptoglobina baja, y bilirrubina indirecta elevada. Trombocitopenia inmune: trombocitopenia aislada sin evidencia de infiltración medular megacariocítica reducida (médula ósea con megacariocitos normales o aumentados), tras excluir otras causas.',
      laboratorio: 'Coombs directo, reticulocitos, LDH, haptoglobina, bilirrubina indirecta para la anemia hemolítica; biometría hemática seriada; aspirado/biopsia de médula ósea considerada si hay duda diagnóstica sobre el mecanismo de la citopenia (infiltración vs. autoinmune).',
      imagen: 'No indicada de rutina para el diagnóstico de la citopenia autoinmune en sí.',
      complementarios: 'Distinguir cuidadosamente el mecanismo autoinmune de la citopenia por infiltración medular directa, dado que el manejo es completamente distinto (inmunosupresión en el mecanismo autoinmune vs. tratamiento citorreductor de la LLC de base en la infiltración).',
      dx_diferencial: 'Citopenia por infiltración medular directa del clon de LLC (que indicaría criterio de tratamiento de la LLC de base, no inmunosupresión), citopenia inducida por fármacos (particularmente fludarabina).',
      tx_medico: 'Corticoides sistémicos como tratamiento de primera línea de la citopenia autoinmune, independientemente de si la LLC de base cumple criterios de tratamiento en ese momento; la citopenia autoinmune NO es, por sí sola, indicación automática de iniciar tratamiento citorreductor de la LLC (aunque puede coexistir con enfermedad activa que sí lo requiera).',
      tx_farmacologico: 'Corticoides sistémicos en dosis altas como primera línea; rituximab (anti-CD20) considerado en la citopenia refractaria o recurrente a corticoides; inmunoglobulina intravenosa considerada en la trombocitopenia inmune grave con sangrado activo; tratamiento dirigido de la LLC de base si la citopenia autoinmune es refractaria al manejo inmunosupresor de primera línea, o si coexiste enfermedad activa que ya cumple criterios de tratamiento por otros motivos.',
      tx_intervencionista: 'Esplenectomía considerada en casos muy seleccionados de citopenia autoinmune refractaria a múltiples líneas de inmunosupresión.',
      criterios_uci: 'Anemia hemolítica grave con inestabilidad hemodinámica, sangrado mayor por trombocitopenia inmune grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia de la hemoglobina/plaquetas seriadas y de la respuesta a corticoides durante el manejo agudo.',
      seguimiento_ambulatorio: 'Vigilancia de recurrencia de la citopenia autoinmune; evitar fludarabina en monoterapia en pacientes con antecedente de anemia hemolítica autoinmune, dado el riesgo reconocido de exacerbación.',
      pronostico: 'Favorable en la mayoría de los casos con corticoides de primera línea; el pronóstico global depende de si la citopenia autoinmune coexiste con enfermedad activa que requiera tratamiento dirigido de la LLC de base.',
      algoritmo: ['Citopenia de nueva aparición en un paciente con LLC → distinguir mecanismo autoinmune vs. infiltración medular directa', 'Anemia: Coombs directo, reticulocitos, LDH, haptoglobina. Trombocitopenia: considerar médula ósea si hay duda', 'Mecanismo autoinmune confirmado → corticoides sistémicos de primera línea', 'Refractario a corticoides → rituximab u otra inmunosupresión de segunda línea', 'Citopenia autoinmune NO implica automáticamente criterio de tratamiento de la LLC de base, salvo que coexista enfermedad activa por otros motivos']
    },
    {
      nombre: 'Hipogammaglobulinemia e infecciones recurrentes',
      color: '#8a6a1f',
      definicion: 'Complicación inmunológica progresiva de la LLC: producción reducida de inmunoglobulinas normales (hipogammaglobulinemia) y disfunción de la inmunidad celular, produciendo un riesgo marcadamente aumentado de infecciones recurrentes (particularmente respiratorias, por organismos encapsulados) que constituye una de las principales causas de morbimortalidad en la LLC, independiente de la carga tumoral en sí.',
      fisiopatologia: 'El clon neoplásico de LLC desplaza y suprime funcionalmente a los linfocitos B normales residuales, reduciendo progresivamente la producción de inmunoglobulinas policlonales normales; adicionalmente, existe una disfunción concomitante de la inmunidad celular (linfocitos T) y de la función de los neutrófilos, agravada por el efecto inmunosupresor acumulativo de los tratamientos recibidos (quimioinmunoterapia, y en menor medida las terapias dirigidas); el resultado neto es un estado de inmunodeficiencia combinada progresiva que se agrava con la duración de la enfermedad y el número de líneas de tratamiento recibidas.',
      epidemiologia: 'La hipogammaglobulinemia es prácticamente universal en algún grado en la enfermedad de larga evolución; las infecciones son una de las principales causas de muerte en la LLC, comparable en importancia a la progresión de la enfermedad en sí o a la transformación de Richter.',
      factores_riesgo: ['Duración prolongada de la enfermedad', 'Múltiples líneas de tratamiento previas recibidas', 'Hipogammaglobulinemia grave documentada (IgG particularmente baja)', 'Neutropenia concomitante (por infiltración medular, autoinmune, o inducida por tratamiento)', 'Ausencia de vacunación apropiada'],
      clinica: 'Infecciones respiratorias recurrentes (sinusitis, bronquitis, neumonía), particularmente por organismos encapsulados (Streptococcus pneumoniae, Haemophilus influenzae); mayor susceptibilidad a infecciones virales (incluida reactivación de virus herpes) e infecciones oportunistas en el paciente con inmunosupresión más profunda por tratamiento acumulado.',
      criterios_dx: 'Documentación de infecciones recurrentes (con frecuencia definidas como ≥2 episodios en 6 meses o ≥3 en 12 meses en un contexto clínico de riesgo) junto con hipogammaglobulinemia demostrada por cuantificación de inmunoglobulinas séricas (IgG particularmente).',
      laboratorio: 'Cuantificación de inmunoglobulinas séricas (IgG, IgA, IgM) periódica, particularmente antes de decisiones sobre inmunoglobulina de reemplazo; cultivos dirigidos según el sitio de infección sospechado.',
      imagen: 'Radiografía o TC de tórax dirigida según el sitio de infección respiratoria sospechado.',
      complementarios: 'Revisión del calendario de vacunación (vacunas inactivadas apropiadas; evitar vacunas de virus vivos atenuados dado el estado de inmunosupresión) y consideración de profilaxis antimicrobiana dirigida en el paciente de alto riesgo.',
      dx_diferencial: 'Infección aislada sin patrón recurrente franco (no necesariamente indica hipogammaglobulinemia clínicamente significativa), neutropenia por otra causa como contribuyente adicional al riesgo infeccioso (ver el tema de Alteraciones de la Serie Blanca).',
      tx_medico: 'Manejo estándar de cada episodio infeccioso agudo según el sitio y el organismo sospechado/confirmado; vacunación apropiada actualizada (inactivada) desde el momento del diagnóstico, idealmente antes de iniciar tratamiento inmunosupresor cuando sea posible.',
      tx_farmacologico: 'Inmunoglobulina intravenosa o subcutánea de reemplazo considerada en el paciente con hipogammaglobulinemia grave e infecciones recurrentes graves pese a las medidas preventivas estándar, dado que ha demostrado reducir la frecuencia de infecciones graves en este contexto; profilaxis antimicrobiana dirigida (por ejemplo, contra Pneumocystis jirovecii con ciertos regímenes inmunosupresores específicos) según el riesgo individual.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Sepsis grave o choque séptico secundario a una infección en el paciente con inmunodeficiencia de base (ver el tema de Sepsis).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Manejo estándar de la infección aguda según protocolo, con umbral bajo para hospitalización dado el riesgo de progresión rápida en el paciente inmunocomprometido.',
      seguimiento_ambulatorio: 'Cuantificación periódica de inmunoglobulinas séricas; vigilancia activa de la frecuencia y gravedad de las infecciones; actualización continua del calendario de vacunación (inactivada).',
      pronostico: 'Las infecciones recurrentes son una causa significativa de morbimortalidad en la LLC; el reconocimiento y manejo proactivo (vacunación, inmunoglobulina de reemplazo en casos seleccionados) reduce este riesgo mensurablemente.',
      algoritmo: ['Infecciones recurrentes en un paciente con LLC → cuantificar inmunoglobulinas séricas', 'Hipogammaglobulinemia confirmada + infecciones recurrentes graves → considerar inmunoglobulina de reemplazo', 'Actualizar calendario de vacunación con vacunas inactivadas desde el diagnóstico', 'Evitar vacunas de virus vivos atenuados dado el estado de inmunosupresión', 'Umbral bajo para hospitalización ante cualquier infección dado el riesgo de progresión rápida']
    },
    {
      nombre: 'Transformación de Richter',
      color: '#6b3d5c',
      definicion: 'Transformación de la LLC a un linfoma agresivo, con mayor frecuencia linfoma difuso de células B grandes (la forma más común, en la mayoría de los casos clonalmente relacionado con la LLC de base) o, con menor frecuencia, linfoma de Hodgkin; representa un cambio biológico fundamental con pronóstico marcadamente peor que la LLC de base no transformada, y requiere reconocimiento clínico oportuno dado que el manejo es completamente distinto.',
      fisiopatologia: 'La transformación ocurre por la adquisición de alteraciones genéticas y moleculares adicionales sobre el clon de LLC de base (con frecuencia mutaciones adicionales de TP53, alteraciones de MYC, entre otras), que transforman el fenotipo biológico de una neoplasia indolente de baja proliferación a un linfoma agresivo de alta proliferación; en la mayoría de los casos (transformación "clonalmente relacionada"), el linfoma agresivo resultante comparte el origen clonal con la LLC de base, aunque en una minoría de casos surge un clon genéticamente no relacionado (transformación "de novo", con un pronóstico relativamente mejor que la forma clonalmente relacionada).',
      epidemiologia: 'Ocurre en una proporción minoritaria pero clínicamente crítica de los pacientes con LLC a lo largo de su curso; el riesgo puede estar aumentado tras múltiples líneas de tratamiento previo, aunque también puede ocurrir en pacientes no tratados previamente.',
      factores_riesgo: ['Múltiples líneas de tratamiento previo para la LLC', 'Alteraciones genéticas adicionales sobre el clon de base (particularmente relacionadas con TP53/MYC)', 'LLC con IGHV no mutado', 'Deleción de NOTCH1 (asociada a mayor riesgo de transformación en algunos estudios)'],
      clinica: 'Crecimiento ganglionar asimétrico, rápido, y desproporcionado (en contraste con el crecimiento simétrico y más lento típico de la progresión de la LLC no transformada); síntomas constitucionales marcados de nueva aparición o de intensificación súbita; elevación marcada y desproporcionada de LDH; puede presentarse con afectación extraganglionar.',
      criterios_dx: 'Biopsia (idealmente excisional, dirigida al sitio de mayor captación en PET-TC si hay múltiples sitios afectados) del ganglio o tejido de crecimiento sospechoso, confirmando histológicamente linfoma difuso de células B grandes u otro linfoma agresivo sobre el trasfondo de LLC conocida.',
      laboratorio: 'LDH marcadamente elevada (con frecuencia el hallazgo bioquímico más sugestivo), desproporcionada a la elevación esperada por la LLC de base sola; biometría hemática y perfil metabólico basal antes de iniciar el tratamiento del linfoma agresivo.',
      imagen: 'PET-TC como el estudio de elección para identificar el sitio de mayor actividad metabólica (que orienta la biopsia dirigida) y para la estadificación completa una vez confirmado el diagnóstico histológico.',
      complementarios: 'Estudio de clonalidad molecular comparando el linfoma agresivo con la LLC de base (transformación clonalmente relacionada vs. de novo), dado que tiene implicaciones pronósticas.',
      dx_diferencial: 'Progresión no transformada de la LLC de base con adenopatía voluminosa (sin el patrón de crecimiento asimétrico rápido característico de la transformación), otra neoplasia secundaria no relacionada con la LLC (ver la tarjeta de segundas neoplasias).',
      tx_medico: 'Tratamiento del linfoma agresivo resultante según su tipo histológico específico (habitualmente esquemas tipo R-CHOP u otros regímenes de quimioinmunoterapia intensiva para linfoma difuso de células B grandes), distinto del tratamiento dirigido usado para la LLC no transformada.',
      tx_farmacologico: 'Quimioinmunoterapia intensiva según el tipo histológico de linfoma agresivo confirmado; terapias más nuevas (incluida la terapia de células CAR-T) consideradas en la enfermedad refractaria, un área de desarrollo activo dado el pronóstico históricamente desfavorable de esta complicación.',
      tx_intervencionista: 'No aplica de forma directa más allá de la biopsia diagnóstica.',
      criterios_uci: 'Síndrome de lisis tumoral grave al inicio de la quimioinmunoterapia intensiva (dado el alto recambio celular del linfoma agresivo), compromiso de órgano por la infiltración tumoral rápida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en casos seleccionados con quimiosensibilidad demostrada, dado el pronóstico generalmente reservado de esta complicación con quimioterapia sola.',
      seguimiento_hospitalario: 'Vigilancia estrecha del riesgo de síndrome de lisis tumoral al inicio del tratamiento intensivo, dado el alto recambio celular del linfoma agresivo.',
      seguimiento_ambulatorio: 'Seguimiento oncológico según el protocolo del linfoma agresivo confirmado; vigilancia de recaída tanto del componente transformado como de la LLC de base subyacente.',
      pronostico: 'Considerablemente peor que la LLC no transformada, particularmente en la transformación clonalmente relacionada (comparada con la transformación "de novo", de pronóstico relativamente mejor); representa una de las principales causas de muerte relacionada con la enfermedad en el curso de la LLC.',
      algoritmo: ['Crecimiento ganglionar asimétrico rápido + LDH marcadamente elevada en paciente con LLC conocida → sospechar transformación de Richter', 'PET-TC para identificar el sitio de mayor actividad metabólica', 'Biopsia dirigida al sitio de mayor captación para confirmación histológica', 'Estudio de clonalidad (relacionada vs. de novo) con implicaciones pronósticas', 'Tratamiento con esquema de linfoma agresivo específico (no el esquema usado para LLC no transformada)']
    },
    {
      nombre: 'Segundas neoplasias y complicaciones del tratamiento',
      color: '#966b35',
      definicion: 'Riesgo aumentado de neoplasias secundarias no relacionadas clonalmente con la LLC (particularmente cáncer de piel no melanoma, y otras neoplasias sólidas) por la inmunodeficiencia de base y el efecto inmunosupresor acumulativo del tratamiento; agrupado aquí junto con las complicaciones específicas del tratamiento moderno de la LLC, particularmente el síndrome de lisis tumoral asociado al inicio de venetoclax.',
      fisiopatologia: 'La inmunovigilancia tumoral reducida por la inmunodeficiencia de base de la LLC, junto con el efecto inmunosupresor acumulativo de las líneas de tratamiento recibidas a lo largo del curso de la enfermedad, reduce la capacidad del sistema inmune para eliminar células con transformación maligna incipiente en otros tejidos, aumentando el riesgo de neoplasias secundarias genuinamente independientes (no relacionadas clonalmente con la LLC, a diferencia de la transformación de Richter). El síndrome de lisis tumoral asociado a venetoclax merece mención específica: el venetoclax es extraordinariamente eficaz para inducir apoptosis rápida y masiva de las células de LLC, lo que, en la enfermedad de alta carga tumoral, puede producir lisis celular tan rápida que supera la capacidad excretora renal, de ahí el protocolo obligatorio de escalonamiento gradual de dosis con profilaxis y vigilancia estrecha al inicio del tratamiento.',
      epidemiologia: 'El riesgo de segundas neoplasias está claramente aumentado en cohortes de seguimiento a largo plazo de pacientes con LLC comparado con la población general, particularmente cáncer de piel no melanoma; el síndrome de lisis tumoral con venetoclax es un riesgo bien caracterizado y anticipado desde el diseño del protocolo de escalonamiento de dosis, por lo que su incidencia clínicamente grave se ha reducido considerablemente con la adherencia al protocolo estandarizado.',
      factores_riesgo: ['Duración prolongada de la enfermedad y de la inmunodeficiencia acumulada', 'Múltiples líneas de tratamiento inmunosupresor previo', 'Exposición solar acumulada (para el cáncer de piel no melanoma específicamente)', 'Alta carga tumoral (adenopatía voluminosa, linfocitosis marcada) al momento de iniciar venetoclax, para el riesgo de síndrome de lisis tumoral'],
      clinica: 'Segundas neoplasias: se presentan según el sitio y tipo específico (lesión cutánea nueva sospechosa, síntomas del órgano afectado según la neoplasia). Síndrome de lisis tumoral por venetoclax: náusea, calambres musculares, arritmia cardiaca (por las alteraciones electrolíticas), oliguria si progresa a lesión renal aguda, en las primeras horas tras la dosis inicial o el escalonamiento de dosis.',
      criterios_dx: 'Segundas neoplasias: diagnóstico histopatológico específico según el sitio afectado. Síndrome de lisis tumoral: criterios de Cairo-Bishop (ver el tema de Leucemia Aguda para el desarrollo completo de este síndrome), aplicados en el contexto específico del inicio de venetoclax.',
      laboratorio: 'Vigilancia electrolítica estrecha (potasio, fósforo, calcio, ácido úrico, creatinina) antes y después de cada escalonamiento de dosis de venetoclax, particularmente en la enfermedad de alta carga tumoral.',
      imagen: 'Cribado dermatológico periódico (examen de piel completo) dado el riesgo aumentado de cáncer de piel no melanoma; estudio de imagen dirigido según el sitio sospechoso de una segunda neoplasia.',
      complementarios: 'Evaluación de la carga tumoral (linfocitosis, tamaño de adenopatías, función renal basal) antes de iniciar venetoclax para clasificar el riesgo de síndrome de lisis tumoral y determinar la intensidad de la profilaxis/vigilancia requerida.',
      dx_diferencial: 'Transformación de Richter (ver esa tarjeta, un cambio biológico clonalmente relacionado, distinto de una segunda neoplasia genuinamente independiente), progresión de la LLC de base sin segunda neoplasia verdadera.',
      tx_medico: 'Manejo oncológico estándar de la segunda neoplasia según su tipo histológico específico; para el síndrome de lisis tumoral por venetoclax, profilaxis obligatoria (hidratación, agente hipouricemiante) y escalonamiento gradual de dosis según protocolo estandarizado, con hospitalización para la vigilancia inicial en el paciente de alto riesgo.',
      tx_farmacologico: 'Según el tipo de segunda neoplasia confirmada; alopurinol o rasburicasa según el riesgo estratificado antes de iniciar/escalonar venetoclax (ver el tema de Leucemia Aguda para el desarrollo completo del manejo farmacológico del síndrome de lisis tumoral).',
      tx_intervencionista: 'Resección quirúrgica u otro manejo local según el tipo y estadio de la segunda neoplasia (particularmente eficaz y curativo en el cáncer de piel no melanoma detectado tempranamente); terapia de reemplazo renal urgente en el síndrome de lisis tumoral grave con hiperpotasemia refractaria.',
      criterios_uci: 'Síndrome de lisis tumoral grave con arritmia o lesión renal aguda que requiere terapia de reemplazo renal urgente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a estas complicaciones en sí (salvo consideraciones de trasplante renal en el caso excepcional de lesión renal terminal por lisis tumoral grave no revertida).',
      seguimiento_hospitalario: 'Hospitalización para la vigilancia inicial del escalonamiento de dosis de venetoclax en el paciente de alto riesgo de síndrome de lisis tumoral, con electrolitos seriados según protocolo.',
      seguimiento_ambulatorio: 'Cribado dermatológico periódico anual (o más frecuente según el riesgo individual); cribado oncológico general apropiado para la edad, con umbral bajo para investigar síntomas nuevos dado el riesgo aumentado de segundas neoplasias.',
      pronostico: 'Variable según el tipo de segunda neoplasia (favorable en el cáncer de piel no melanoma detectado tempranamente); el síndrome de lisis tumoral por venetoclax es altamente prevenible con la adherencia estricta al protocolo de escalonamiento de dosis y la profilaxis apropiada.',
      algoritmo: ['Antes de iniciar venetoclax → evaluar carga tumoral y función renal basal para clasificar riesgo de síndrome de lisis tumoral', 'Profilaxis (hidratación, hipouricemiante) según el riesgo, con escalonamiento gradual de dosis según protocolo', 'Vigilancia electrolítica estrecha en cada escalonamiento, hospitalización si es de alto riesgo', 'Cribado dermatológico periódico y cribado oncológico general apropiado para la edad', 'Lesión cutánea u otro síntoma nuevo sospechoso → biopsia/estudio dirigido sin demora dado el riesgo aumentado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de la LLC se centra en el manejo de las complicaciones agudas (citopenias autoinmunes graves, infecciones, síndrome de lisis tumoral al inicio de venetoclax) y en el reconocimiento oportuno de la transformación de Richter.',
    parametros: ['Biometría hemática seriada', 'Perfil metabólico y electrolitos (particularmente al iniciar/escalonar venetoclax)', 'Signos de infección activa', 'LDH si hay sospecha de transformación de Richter'],
    criterios_uci_general: 'Anemia hemolítica grave con inestabilidad hemodinámica, sangrado mayor por trombocitopenia inmune grave, sepsis grave secundaria a la inmunodeficiencia de base, síndrome de lisis tumoral grave con arritmia o lesión renal aguda.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas considerado en casos muy seleccionados de LLC refractaria a múltiples líneas de terapia dirigida, o en la transformación de Richter con quimiosensibilidad demostrada; ver las tarjetas correspondientes para el desarrollo completo.',
    prevencion: 'Vacunación apropiada (inactivada) desde el momento del diagnóstico; evitar fludarabina en monoterapia en el paciente con antecedente de citopenia autoinmune; profilaxis y escalonamiento gradual de dosis estrictos al iniciar venetoclax en la enfermedad de alta carga tumoral; cribado dermatológico y oncológico general periódico dado el riesgo aumentado de segundas neoplasias.'
  }
};

export const compCites = {
  'LLC de bajo riesgo': [1, 2],
  'LLC que requiere tratamiento': [1, 2, 3],
  'Linfoma Linfocítico Pequeño': [1, 15],
  'Linfocitosis B Monoclonal': [6],
  'Citopenias autoinmunes': [7],
  'Hipogammaglobulinemia e infecciones recurrentes': [8, 9],
  'Transformación de Richter': [7, 13],
  'Segundas neoplasias y complicaciones del tratamiento': [11, 12, 14]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'CLL-IPI': [3],
  'Estadificación de Rai (modificada)': [4],
  'Estadificación de Binet': [5]
};
export const escalaCalc = { 'CLL-IPI': 'cllipi' };
export const compGroups = [
  { name: 'LLC por espectro clínico (enfermedades)', items: ['LLC de bajo riesgo', 'LLC que requiere tratamiento', 'Linfoma Linfocítico Pequeño', 'Linfocitosis B Monoclonal'] },
  { name: 'Complicaciones transversales', items: ['Citopenias autoinmunes', 'Hipogammaglobulinemia e infecciones recurrentes', 'Transformación de Richter', 'Segundas neoplasias y complicaciones del tratamiento'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren el espectro clínico de la misma enfermedad biológica (LLC/SLL/MBL), no 4 entidades independientes; las siguientes 4 son complicaciones transversales que pueden surgir en cualquier punto de ese espectro, desde las citopenias autoinmunes hasta la transformación a un linfoma agresivo.';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { label: 'LLC / SLL / MBL', color: '#5c3d8c' },
  branches: [
    { label: 'Por volumen del clon', color: '#8c6b2d', leaves: ['MBL (&lt;5,000/µL)', 'LLC (≥5,000/µL)'] },
    { label: 'Por actividad clínica', color: '#7a1f3d', leaves: ['Bajo riesgo (vigilar y esperar)', 'Requiere tratamiento (iwCLL)'] },
    { label: 'Por distribución', color: '#6b4a2e', leaves: ['Leucémica (LLC)', 'Ganglionar/tisular (SLL)'] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [3, 4] };
export const clasificacionCite = [3, 4, 5];
export const seguimientoCite = [1, 2];
