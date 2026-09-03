// topics/mieloma-multiple/content.js: Mieloma Múltiple (Gammapatía Monoclonal de Significado
// Incierto, Mieloma Múltiple Smoldering, Mieloma Múltiple Activo, Amiloidosis de Cadenas Ligeras
// y Plasmocitoma Solitario). Estructura idéntica al contrato del motor (misma forma que los temas
// recientes de Hematología). Sigue la convención de figuras en línea (figBlock(), numerada
// "Tabla N"/"Imagen N" con conteo continuo por tipo).
//
// Nota de alcance: como la LLC, el mieloma múltiple es fundamentalmente UN espectro de una sola
// línea celular (célula plasmática clonal); las 4 tarjetas de "enfermedad" reflejan ese espectro
// clínico y entidades relacionadas, no 4 enfermedades independientes.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás (compCites, estigmas, biopsia, escalaRefs, escalaCalc, compGroups, complicacionesIntro,
// categories, arbol, diagCites, clasificacionCite, seguimientoCite) debe ser un `export const`
// de nivel superior, HERMANO de `content`, no anidado dentro de él.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): al escribir el quiz, construir CADA
// pregunta con la respuesta correcta en options[0]/correct:0 primero (trivialmente verificable),
// verificar el conteo (`grep -c "{ q: '"` == `grep -c "correct: [0-9]"` == 45), y solo entonces
// redistribuir las posiciones con un script mecánico (no a mano) para lograr balance sin arriesgar
// la correctness.

export const meta = {
  id: 'mieloma-multiple',
  titulo: 'Mieloma Múltiple',
  subtitulo: 'Módulo 23 · Medicina Interna',
  accent: '#7a1f3d',
  accentDim: '#b06a86'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const rankRanklHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;max-width:520px;margin:0 auto;">
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Célula de mieloma (señalización paracrina)</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:150px;background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;">↑ RANKL<br><strong>Activa osteoclastos</strong><br>↑ resorción ósea</div>
    <div style="flex:1;min-width:150px;background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;">Señales inhibitorias<br><strong>Suprime osteoblastos</strong><br>↓ formación ósea</div>
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Desacoplamiento resorción/formación → pérdida ósea neta (lesiones líticas "en sacabocado", sin reparación osteoblástica)</div>
</div>`;

const espectroClinicoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:560px;margin:0 auto;">
  <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:110px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>MGUS</strong><br>Proteína M &lt;3 g/dL<br>&lt;10% células plasmáticas<br><span style="color:var(--ink-dim);">sin CRAB/SLiM</span></div>
  <div style="color:var(--ink-dim);align-self:center;">→</div>
    <div style="flex:1;min-width:110px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Smoldering</strong><br>Proteína M ≥3 g/dL o<br>10-59% células plasmáticas<br><span style="color:var(--ink-dim);">sin CRAB/SLiM</span></div>
  <div style="color:var(--ink-dim);align-self:center;">→</div>
    <div style="flex:1;min-width:110px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Mieloma activo</strong><br>≥1 criterio CRAB o<br>biomarcador SLiM<br><span style="color:var(--ink-dim);">requiere tratamiento</span></div>
  </div>
  <div style="width:100%;height:1px;background:var(--line);margin:2px 0;"></div>
  <div style="font-size:10px;color:var(--ink-dim);text-align:center;line-height:1.6;">Las 3 categorías comparten el mismo origen (expansión clonal de células plasmáticas productoras de una inmunoglobulina monoclonal); la progresión de una a otra ocurre a una tasa aproximada (por año) de ~1% (MGUS) y ~10% (smoldering) en los primeros años.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El mieloma múltiple es una neoplasia de células plasmáticas clonales que producen una inmunoglobulina monoclonal (proteína M) en exceso, infiltran la médula ósea, y producen daño de órgano característico (lesiones óseas líticas, insuficiencia renal, anemia, hipercalcemia). Forma parte de un espectro continuo de trastornos de células plasmáticas que comparten el mismo origen biológico: la gammapatía monoclonal de significado incierto (MGUS, la entidad precursora asintomática más frecuente), el mieloma múltiple smoldering (asintomático pero de mayor volumen clonal), y el mieloma múltiple activo (sintomático, que cumple criterios de tratamiento).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> El mieloma múltiple es la segunda neoplasia hematológica más frecuente después del linfoma no Hodgkin; la mediana de edad al diagnóstico es de aproximadamente 65-70 años, con una incidencia considerablemente mayor en la población afrodescendiente que en la población caucásica. La MGUS es mucho más frecuente que el mieloma franco, detectándose en una proporción considerable de adultos mayores de 50 años sometidos a electroforesis de proteínas por otro motivo.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Gammapatía Monoclonal de Significado Incierto (MGUS)</strong>: proteína M &lt;3 g/dL, &lt;10% de células plasmáticas clonales en médula ósea, SIN criterios CRAB/SLiM; progresa a mieloma franco a una tasa aproximada de 1% anual.</li>
    <li><strong>Mieloma Múltiple Smoldering</strong>: proteína M ≥3 g/dL o 10-59% de células plasmáticas clonales, SIN criterios CRAB/SLiM; mayor riesgo de progresión que la MGUS, particularmente en los primeros 5 años.</li>
    <li><strong>Mieloma Múltiple Activo</strong>: cumple 1 o más criterios CRAB (hipercalcemia, insuficiencia renal, anemia, lesiones óseas) o biomarcadores SLiM de malignidad; requiere tratamiento sistémico.</li>
    <li><strong>Amiloidosis de Cadenas Ligeras y Plasmocitoma Solitario</strong>: trastornos de células plasmáticas relacionados pero biológicamente distintos, con manifestaciones y manejo específicos.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada</li>
    <li>Sexo masculino</li>
    <li>Ascendencia afrodescendiente (incidencia considerablemente mayor)</li>
    <li>Antecedente de MGUS o de mieloma smoldering conocidos (progresión)</li>
    <li>Antecedente familiar de mieloma múltiple u otro trastorno de células plasmáticas</li>
    <li>Obesidad</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Un clon de células plasmáticas (derivadas de linfocitos B que ya completaron la recombinación de inmunoglobulinas en el centro germinal) adquiere mutaciones somáticas adicionales que le confieren una ventaja de supervivencia y proliferación dentro del microambiente medular, produciendo cantidades crecientes de una inmunoglobulina monoclonal idéntica (la proteína M) que carece de la diversidad funcional de las inmunoglobulinas normales.${figBlock('Imagen 1', 'Espectro clínico: MGUS, smoldering, y mieloma activo', espectroClinicoHtml)} El daño de órgano característico (criterios CRAB) refleja mecanismos directos e indirectos de la actividad del clon: las células plasmáticas activan a los osteoclastos y suprimen a los osteoblastos mediante señalización paracrina, produciendo las lesiones óseas líticas y la hipercalcemia asociada; las cadenas ligeras libres en exceso son directamente tóxicas para el túbulo renal, produciendo la nefropatía característica; la infiltración medular masiva y la supresión de la hematopoyesis normal producen la anemia. Analogía: si la LLC es una acumulación lenta de agua que no logra drenar, el mieloma múltiple es más como una fábrica que, además de acumular un producto defectuoso (la proteína M) en exceso, activamente daña la infraestructura circundante (el hueso, el riñón) como efecto colateral directo de su actividad, no solo por ocupar espacio.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de una proteína monoclonal asintomática (MGUS) hasta la enfermedad activa con dolor óseo, fracturas patológicas, insuficiencia renal, anemia sintomática, e infecciones recurrentes; el diagnóstico por electroforesis de proteínas, cuantificación de cadenas ligeras libres, y aspirado/biopsia de médula ósea, la clasificación del espectro clínico y la estadificación pronóstica, y el manejo de cada complicación se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Kumar SK, Rajkumar SV. The multiple myelomas — current concepts in cytogenetic classification and therapy. Nat Rev Clin Oncol. 2018;15(7):409-421.',
  'Rajkumar SV. Multiple myeloma: 2022 update on diagnosis, risk-stratification and management. Am J Hematol. 2022;97(8):1086-1107.',
  'Rajkumar SV, Dimopoulos MA, Palumbo A, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol. 2014;15(12):e538-e548.',
  'Kyle RA, Rajkumar SV. Monoclonal gammopathy of undetermined significance and smouldering multiple myeloma: emphasis on risk factors for progression. Br J Haematol. 2007;139(5):730-743.',
  'Palumbo A, Avet-Loiseau H, Oliva S, et al. Revised International Staging System for Multiple Myeloma: A Report From International Myeloma Working Group. J Clin Oncol. 2015;33(26):2863-2869.',
  'Terpos E, Ntanasis-Stathopoulos I, Gavriatopoulou M, Dimopoulos MA. Pathogenesis of bone disease in multiple myeloma. Blood. 2019;133(7):654-663.',
  'Terpos E, Kleber M, Engelhardt M, et al. European Myeloma Network guidelines for the management of multiple myeloma-related complications. Haematologica. 2015;100(10):1254-1266.',
  'Dimopoulos MA, Sonneveld P, Leung N, et al. International Myeloma Working Group Recommendations for the Diagnosis and Management of Myeloma-Related Renal Impairment. J Clin Oncol. 2016;34(13):1544-1557.',
  'Nucci M, Anaissie E. Infections in patients with multiple myeloma in the era of high-dose therapy and novel agents. Clin Infect Dis. 2009;49(8):1211-1225.',
  'Gertz MA. Immunoglobulin light chain amyloidosis: 2018 update on diagnosis, prognosis, and treatment. Am J Hematol. 2018;93(9):1169-1180.',
  'Ozsahin M, Tsang RW, Poortmans P, et al. Outcomes and patterns of failure in solitary plasmacytoma: a multicenter Rare Cancer Network study. Int J Radiat Oncol Biol Phys. 2006;64(1):210-217.',
  'Mena E, Bhutani M, Morrison C, et al. Hyperviscosity syndrome. Cancer Treat Res. 2019;179:169-181.',
  'Chng WJ, Dispenzieri A, Chim CS, et al. IMWG consensus on risk stratification in multiple myeloma. Leukemia. 2014;28(2):269-277.',
  'Loblaw DA, Perry J, Chambers A, Laperriere NJ. Systematic review of the diagnosis and management of malignant extradural spinal cord compression. J Clin Oncol. 2005;23(9):2028-2037.',
  'Rajkumar SV, Kumar S. Multiple Myeloma: Diagnosis and Treatment. Mayo Clin Proc. 2016;91(1):101-119.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Enfermedad asintomática (MGUS/smoldering)',
      tituloB: 'Enfermedad activa (criterios CRAB/SLiM)',
      compensada: 'Proteína monoclonal detectada incidentalmente en una electroforesis de proteínas solicitada por otro motivo, sin dolor óseo, sin insuficiencia renal, sin anemia atribuible, sin hipercalcemia; hallazgo con frecuencia asintomático durante años.',
      descompensada: 'Dolor óseo (particularmente lumbar, por lesiones líticas o fracturas por compresión vertebral), fatiga por anemia, síntomas de insuficiencia renal, síntomas de hipercalcemia (poliuria, estreñimiento, confusión), infecciones recurrentes, o síntomas neurológicos por compresión medular (ver Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Electroforesis de proteínas séricas y urinarias con inmunofijación', utilidad: 'Identifica y caracteriza la proteína monoclonal (proteína M); estudio inicial central ante sospecha de un trastorno de células plasmáticas.' },
      { prueba: 'Cuantificación de cadenas ligeras libres en suero', utilidad: 'Complementa la electroforesis, particularmente sensible en el mieloma de cadenas ligeras (sin componente de cadena pesada detectable) y útil como biomarcador SLiM (razón de cadenas ligeras ≥100).' },
      { prueba: 'Calcio, creatinina, hemoglobina', utilidad: 'Cribado directo de 3 de los 4 criterios CRAB (hipercalcemia, insuficiencia renal, anemia).' },
      { prueba: 'Beta-2-microglobulina y albúmina séricas, LDH', utilidad: 'Componentes del R-ISS (con calculadora) para la estratificación pronóstica.' },
      { prueba: 'Aspirado/biopsia de médula ósea con inmunofenotipo y citogenética', utilidad: 'Cuantifica el porcentaje de células plasmáticas clonales y establece el perfil citogenético (del17p, t(4;14), t(14;16)) para la estratificación de riesgo.' }
    ],
    no_invasivos: [
      { metodo: 'R-ISS (con calculadora)', interpretacion: 'Estratifica el riesgo pronóstico global combinando factores bioquímicos y citogenéticos.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Criterios CRAB/SLiM (con calculadora)', interpretacion: 'Distingue mieloma activo (requiere tratamiento) de la enfermedad asintomática (MGUS/smoldering, vigilancia).', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'PET-TC o resonancia magnética de cuerpo completo', interpretacion: 'Cribado de lesiones óseas/focales, particularmente sensible para detectar enfermedad ósea temprana no visible en la radiografía simple.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Serie ósea radiológica o, preferentemente, PET-TC/RM de cuerpo completo', hallazgos: 'Cribado de lesiones líticas ("en sacabocado"), fracturas patológicas, y osteopenia difusa; la RM y el PET-TC han desplazado en gran medida a la serie ósea radiológica convencional por su mayor sensibilidad.' },
      { modalidad: 'Resonancia magnética de columna urgente', hallazgos: 'Ante sospecha de compresión medular por plasmocitoma o fractura vertebral con retropulsión (ver Complicaciones).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es enfermedad asintomática (MGUS, smoldering) vs. mieloma activo que cumple criterios CRAB/SLiM (con calculadora) y, por tanto, requiere tratamiento; dentro del mieloma activo, el R-ISS (con calculadora) refina el pronóstico combinando factores bioquímicos y citogenéticos.',
    escalas: [
      { nombre: 'R-ISS (Estadificación Revisada)', componentes: 'Beta-2-microglobulina, albúmina, LDH, citogenética de alto riesgo. Calculadora disponible más abajo.', formula: 'R-ISS I: β2M &lt;3.5 + albúmina normal + citogenética estándar + LDH normal. R-ISS III: β2M ≥5.5 + (citogenética de alto riesgo o LDH elevada). R-ISS II: el resto.', interpretacion: 'Estratifica el pronóstico global del mieloma activo; el R-ISS III tiene una supervivencia considerablemente menor que el R-ISS I.' },
      { nombre: 'Criterios CRAB/SLiM', componentes: 'Calcio, función renal, hemoglobina, lesiones óseas, biomarcadores de malignidad (SLiM). Calculadora disponible más abajo.', formula: 'La presencia de cualquier criterio define mieloma activo.', interpretacion: 'Cualquier criterio CRAB o biomarcador SLiM presente define mieloma activo (requiere tratamiento); su ausencia completa sugiere MGUS o mieloma smoldering (vigilancia).' },
      { nombre: 'Clasificación citogenética de riesgo', componentes: 'FISH/citogenética de la médula ósea.', formula: 'Alto riesgo: del17p, t(4;14), t(14;16). Riesgo estándar: el resto.', interpretacion: 'El grupo de riesgo citogenético orienta el pronóstico y, cada vez más, la elección e intensidad del tratamiento.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Gammapatía Monoclonal de Significado Incierto',
      color: '#3f6b52',
      definicion: 'La entidad precursora asintomática del espectro de trastornos de células plasmáticas: proteína M &lt;3 g/dL y &lt;10% de células plasmáticas clonales en médula ósea, SIN ningún criterio CRAB ni biomarcador SLiM; la más frecuente de las 4 entidades de este tema, detectada incidentalmente en una proporción considerable de la población adulta mayor.',
      fisiopatologia: 'Un clon de células plasmáticas de bajo volumen produce una cantidad detectable pero clínicamente silente de proteína M; el mecanismo exacto que determina por qué algunos clones permanecen estables durante décadas mientras otros progresan a mieloma franco no está completamente establecido, aunque se han identificado factores de riesgo asociados a mayor probabilidad de progresión (tipo de inmunoglobulina no IgG, razón de cadenas ligeras anómala, nivel de proteína M más elevado dentro del rango de MGUS).',
      epidemiologia: 'Se detecta en una proporción considerable de adultos mayores de 50 años sometidos a electroforesis de proteínas por otro motivo; su prevalencia aumenta marcadamente con la edad; progresa a mieloma franco (u otro trastorno linfoproliferativo de células B) a una tasa aproximada de 1% por año, un riesgo que persiste indefinidamente sin meseta.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino', 'Ascendencia afrodescendiente', 'Antecedente familiar de MGUS o mieloma múltiple', 'Nivel de proteína M más elevado dentro del rango de MGUS (mayor riesgo de progresión)'],
      clinica: 'Completamente asintomática por definición; hallazgo incidental de una proteína monoclonal en un estudio solicitado por otro motivo.',
      criterios_dx: 'Proteína M sérica &lt;3 g/dL, &lt;10% de células plasmáticas clonales en médula ósea (si se realiza el estudio), y ausencia completa de criterios CRAB o biomarcadores SLiM.',
      laboratorio: 'Electroforesis de proteínas con inmunofijación confirmando la proteína monoclonal; cuantificación de cadenas ligeras libres; calcio, creatinina, y hemoglobina normales (cribado de CRAB negativo).',
      imagen: 'No indicada de rutina en la MGUS de bajo riesgo; considerada en casos seleccionados de riesgo intermedio-alto de progresión para descartar enfermedad ósea subclínica.',
      complementarios: 'Aspirado/biopsia de médula ósea no siempre necesaria de rutina en la MGUS típica de bajo riesgo, pero considerada si hay características atípicas o de mayor riesgo de progresión.',
      dx_diferencial: 'Mieloma múltiple smoldering (mayor proteína M o mayor porcentaje de células plasmáticas, ver esa tarjeta), mieloma múltiple activo (criterios CRAB/SLiM presentes, ver esa tarjeta).',
      tx_medico: 'Ninguno; la MGUS no requiere ni se beneficia de tratamiento citorreductor, dado que no representa enfermedad clínicamente activa.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Vigilancia periódica con electroforesis de proteínas y biometría hemática (la frecuencia depende del grupo de riesgo de progresión estimado), de por vida dado que el riesgo de progresión persiste indefinidamente.',
      pronostico: 'Excelente en cuanto a la MGUS en sí; la mayoría de los pacientes nunca progresa a mieloma franco durante su vida, aunque el riesgo acumulado aumenta con el tiempo de seguimiento.',
      algoritmo: ['Proteína monoclonal detectada incidentalmente → electroforesis con inmunofijación + cadenas ligeras libres', 'Cribado de criterios CRAB (calcio, creatinina, hemoglobina) → todos normales', 'Proteína M &lt;3 g/dL + &lt;10% células plasmáticas clonales (si se estudia médula) → MGUS', 'Estratificar riesgo de progresión según tipo de inmunoglobulina, nivel de proteína M, y razón de cadenas ligeras', 'Vigilancia periódica de por vida, sin tratamiento']
    },
    {
      nombre: 'Mieloma Múltiple Smoldering',
      color: '#8a6a1f',
      definicion: 'Estadio intermedio del espectro: proteína M ≥3 g/dL o 10-59% de células plasmáticas clonales en médula ósea, pero SIN ningún criterio CRAB ni biomarcador SLiM presente; representa un mayor volumen de enfermedad que la MGUS, con un riesgo de progresión a mieloma activo considerablemente mayor, particularmente en los primeros años tras el diagnóstico.',
      fisiopatologia: 'El clon de células plasmáticas ha alcanzado un volumen considerablemente mayor que en la MGUS, pero aún no ha producido el daño de órgano medible que define la enfermedad activa; el riesgo de progresión no es uniforme dentro de esta categoría, y se han desarrollado modelos de estratificación de riesgo (que incorporan el porcentaje de células plasmáticas clonales, el nivel de proteína M, y la razón de cadenas ligeras libres) para identificar el subgrupo de mayor riesgo de progresión a corto plazo, que en años recientes se ha reclasificado en parte hacia la categoría de mieloma activo mediante la incorporación de los biomarcadores SLiM.',
      epidemiologia: 'Menos frecuente que la MGUS pero con una tasa de progresión considerablemente mayor, aproximadamente 10% anual en los primeros 5 años tras el diagnóstico, disminuyendo progresivamente con el tiempo de seguimiento.',
      factores_riesgo: ['Mayor porcentaje de células plasmáticas clonales en médula ósea (dentro del rango 10-59%)', 'Mayor nivel de proteína M', 'Razón de cadenas ligeras libres marcadamente anómala (aunque por debajo del umbral SLiM de ≥100)', 'Citogenética de alto riesgo identificada incidentalmente'],
      clinica: 'Asintomática por definición (sin criterios CRAB), aunque con mayor volumen de enfermedad que la MGUS; el paciente permanece sin síntomas atribuibles al mieloma pese al mayor volumen clonal.',
      criterios_dx: 'Proteína M sérica ≥3 g/dL o 10-59% de células plasmáticas clonales en médula ósea, sin ningún criterio CRAB ni biomarcador SLiM presente.',
      laboratorio: 'Electroforesis con proteína M en el rango de smoldering; aspirado/biopsia de médula ósea sistemática (a diferencia de la MGUS típica) para cuantificar el porcentaje de células plasmáticas clonales; cribado completo de CRAB negativo.',
      imagen: 'PET-TC o resonancia magnética de cuerpo completo recomendada sistemáticamente (a diferencia de la MGUS) para descartar lesiones óseas subclínicas no detectables por la serie ósea convencional, dado el mayor riesgo de enfermedad ósea temprana.',
      complementarios: 'Estratificación de riesgo de progresión mediante modelos validados (que incorporan porcentaje de células plasmáticas, nivel de proteína M, y razón de cadenas ligeras) para identificar el subgrupo de mayor riesgo a corto plazo.',
      dx_diferencial: 'MGUS (menor proteína M/porcentaje de células plasmáticas, ver esa tarjeta), mieloma múltiple activo (criterios CRAB/SLiM presentes, ver esa tarjeta).',
      tx_medico: 'Vigilancia activa en la mayoría de los casos, dado que el tratamiento sistemático de toda la enfermedad smoldering no ha demostrado beneficio consistente sobre la vigilancia en todos los subgrupos de riesgo; en el subgrupo de muy alto riesgo de progresión a corto plazo, algunos protocolos y ensayos clínicos consideran tratamiento temprano, un área de investigación activa y de práctica clínica en evolución.',
      tx_farmacologico: 'Ninguno de rutina fuera del contexto de ensayo clínico o del subgrupo de muy alto riesgo según protocolos específicos.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta fase de la enfermedad.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Vigilancia más estrecha que la MGUS (con frecuencia cada 3-4 meses inicialmente) con electroforesis, biometría hemática, calcio, y función renal, dado el mayor riesgo de progresión a corto plazo, particularmente en el subgrupo de alto riesgo.',
      pronostico: 'Variable según el grupo de riesgo de progresión: el subgrupo de bajo riesgo tiene un curso similar a la MGUS, mientras que el subgrupo de alto riesgo progresa a mieloma activo en una proporción considerable dentro de los primeros 2 años.',
      algoritmo: ['Proteína M ≥3 g/dL o 10-59% células plasmáticas clonales, SIN criterios CRAB/SLiM → mieloma smoldering', 'PET-TC/RM de cuerpo completo sistemática para descartar enfermedad ósea subclínica', 'Estratificar riesgo de progresión con modelos validados', 'Vigilancia activa estrecha (cada 3-4 meses) en la mayoría de los casos', 'Considerar tratamiento temprano solo en el subgrupo de muy alto riesgo, idealmente en el contexto de un ensayo clínico']
    },
    {
      nombre: 'Mieloma Múltiple Activo',
      color: '#7a1f3d',
      definicion: 'Mieloma múltiple que cumple 1 o más criterios CRAB (hipercalcemia, insuficiencia renal, anemia, lesiones óseas) o biomarcadores SLiM de malignidad (≥60% células plasmáticas clonales, razón de cadenas ligeras ≥100, o &gt;1 lesión focal en resonancia magnética), indicando el inicio de tratamiento sistémico; representa la forma sintomática y clínicamente activa del espectro de este tema.',
      fisiopatologia: 'La incorporación de los biomarcadores SLiM en la definición moderna de mieloma activo (además de los criterios CRAB clásicos basados en daño de órgano ya establecido) permite identificar a un subgrupo de pacientes con un riesgo tan alto de desarrollar daño de órgano inminente (≥80% a 2 años en algunos estudios) que se benefician de iniciar tratamiento antes de que el daño de órgano ya sea clínicamente evidente, un cambio de paradigma respecto al enfoque histórico de esperar hasta el daño de órgano establecido.',
      epidemiologia: 'Representa la forma de presentación de una proporción considerable de los casos nuevos de mieloma, dado que muchos pacientes son diagnosticados ya en la fase sintomática; la mediana de edad al diagnóstico es de aproximadamente 65-70 años.',
      factores_riesgo: ['Progresión desde MGUS o mieloma smoldering conocidos', 'Citogenética de alto riesgo', 'R-ISS avanzado al momento del diagnóstico (ver la calculadora)', 'Ausencia de vigilancia previa que hubiera permitido detección más temprana'],
      clinica: 'Dolor óseo (particularmente lumbar, por lesiones líticas o fracturas por compresión vertebral), fatiga por anemia, síntomas de insuficiencia renal, síntomas de hipercalcemia (poliuria, estreñimiento, confusión, letargo), infecciones recurrentes por la inmunodeficiencia funcional asociada.',
      criterios_dx: '≥10% de células plasmáticas clonales en médula ósea (o plasmocitoma confirmado por biopsia) MÁS 1 o más criterios CRAB o biomarcadores SLiM (calculadora); la proteína M está presente en la gran mayoría de los casos, aunque una minoría (mieloma no secretor) puede carecer de ella.',
      laboratorio: 'Electroforesis con proteína M; calcio, creatinina, hemoglobina (cribado de CRAB); cuantificación de cadenas ligeras libres (cribado de SLiM); aspirado/biopsia de médula ósea con citogenética completa; beta-2-microglobulina, albúmina, LDH (R-ISS, calculadora).',
      imagen: 'PET-TC o resonancia magnética de cuerpo completo como estándar actual para la evaluación de la enfermedad ósea, con mayor sensibilidad que la serie ósea radiológica convencional.',
      complementarios: 'Estudio citogenético completo (FISH) para estratificación de riesgo, dado que orienta cada vez más la elección e intensidad del tratamiento de primera línea.',
      dx_diferencial: 'MGUS o mieloma smoldering (sin criterios CRAB/SLiM, ver esas tarjetas), amiloidosis de cadenas ligeras (manifestaciones de órgano distintas, particularmente cardiacas y renales de otro patrón, ver esa tarjeta), otras causas de daño de órgano en un paciente con proteína monoclonal incidental (que deben descartarse antes de atribuir el daño al mieloma).',
      tx_medico: 'Inicio de tratamiento sistémico dirigido, con la elección del esquema orientada por la elegibilidad del paciente para trasplante autólogo de células madre hematopoyéticas y por el perfil de riesgo citogenético.',
      tx_farmacologico: 'Esquemas combinados con un inhibidor de proteasoma (bortezomib), un agente inmunomodulador (lenalidomida), y dexametasona (esquema tipo VRd) como pilar de la inducción de primera línea; anticuerpos monoclonales anti-CD38 (daratumumab) incorporados cada vez más desde primera línea; bifosfonatos sistemáticos para el manejo de la enfermedad ósea (ver esa tarjeta en Complicaciones).',
      tx_intervencionista: 'Trasplante autólogo de células madre hematopoyéticas de consolidación tras la inducción en el paciente elegible, un pilar establecido del tratamiento que mejora la profundidad y duración de la respuesta.',
      criterios_uci: 'Hipercalcemia grave con alteración del estado de conciencia, insuficiencia renal aguda grave (particularmente por nefropatía por cilindros, ver esa tarjeta), compresión medular con compromiso neurológico grave, sepsis grave por la inmunodeficiencia asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante autólogo de células madre hematopoyéticas de consolidación en el paciente elegible tras la inducción; trasplante alogénico considerado en casos muy seleccionados de enfermedad de alto riesgo o recaída temprana tras trasplante autólogo.',
      seguimiento_hospitalario: 'Vigilancia de la función renal y del calcio durante el inicio del tratamiento; manejo de soporte de la enfermedad ósea y de las citopenias inducidas por el tratamiento.',
      seguimiento_ambulatorio: 'Vigilancia periódica de la respuesta (electroforesis, cadenas ligeras libres, en ocasiones enfermedad residual mínima por citometría de flujo o secuenciación); mantenimiento con lenalidomida u otro agente tras la consolidación en muchos protocolos, dado que prolonga la duración de la respuesta.',
      pronostico: 'Ha mejorado considerablemente con las terapias modernas (inhibidores de proteasoma, agentes inmunomoduladores, anticuerpos monoclonales, trasplante autólogo), aunque el mieloma sigue considerándose generalmente incurable con la terapia estándar actual, con un curso de remisiones y recaídas a lo largo de los años; el R-ISS y la citogenética determinan sustancialmente el pronóstico individual.',
      algoritmo: ['≥10% células plasmáticas clonales + ≥1 criterio CRAB/SLiM (calculadora) → mieloma activo, indicar tratamiento', 'Estudio molecular/citogenético completo + R-ISS (calculadora) antes de elegir el esquema', 'Evaluar elegibilidad para trasplante autólogo de células madre hematopoyéticas', 'Inducción (esquema tipo VRd ± anti-CD38) → consolidación con trasplante autólogo si es elegible → mantenimiento', 'Vigilancia periódica de la respuesta y de las complicaciones específicas del tratamiento']
    },
    {
      nombre: 'Amiloidosis de Cadenas Ligeras y Plasmocitoma Solitario',
      color: '#6b4a2e',
      definicion: 'Dos trastornos de células plasmáticas relacionados pero biológicamente distintos del mieloma múltiple clásico: la amiloidosis de cadenas ligeras (AL), en la que cadenas ligeras libres monoclonales se pliegan anómalamente y se depositan como fibrillas de amiloide en órganos vitales (corazón, riñón, sistema nervioso periférico, entre otros); y el plasmocitoma solitario, una masa única de células plasmáticas clonales (ósea o de tejidos blandos) sin evidencia de enfermedad sistémica difusa.',
      fisiopatologia: 'En la amiloidosis AL, las cadenas ligeras libres producidas por un clon de células plasmáticas (con frecuencia de bajo volumen, incluso del rango de MGUS, a diferencia del mieloma franco) adoptan una conformación tridimensional anómala que las predispone a agregarse en fibrillas de amiloide insolubles, que se depositan progresivamente en el intersticio de órganos vitales, alterando su arquitectura y función normal (particularmente miocardiopatía restrictiva cuando afecta al corazón, síndrome nefrótico cuando afecta al riñón); a diferencia del mieloma múltiple, el daño de órgano en la amiloidosis AL no depende del volumen del clon de células plasmáticas sino de la cantidad y propiedades fisicoquímicas específicas de las cadenas ligeras depositadas. El plasmocitoma solitario representa una proliferación clonal localizada sin la diseminación medular difusa característica del mieloma múltiple, aunque un subgrupo progresa a enfermedad sistémica con el tiempo.',
      epidemiologia: 'La amiloidosis AL es considerablemente menos frecuente que el mieloma múltiple, pero clínicamente crítica por el daño cardiaco potencialmente fatal si no se reconoce a tiempo; el plasmocitoma solitario es poco frecuente, con un subgrupo (particularmente el óseo) que progresa a mieloma múltiple sistémico en los años siguientes al diagnóstico inicial.',
      factores_riesgo: ['Clon de células plasmáticas subyacente (con frecuencia de bajo volumen) para la amiloidosis AL', 'Ausencia de otras causas de amiloidosis (hereditaria, secundaria a inflamación crónica) para confirmar el subtipo AL específicamente', 'Localización ósea del plasmocitoma (mayor riesgo de progresión a mieloma sistémico que la localización en tejidos blandos)'],
      clinica: 'Amiloidosis AL: síntomas según el órgano afectado predominante, particularmente insuficiencia cardiaca (con frecuencia de patrón restrictivo), síndrome nefrótico, neuropatía periférica sensitivomotora, macroglosia (hallazgo característico aunque no universal), síndrome del túnel carpiano bilateral. Plasmocitoma solitario: dolor localizado en el sitio de la masa (con frecuencia ósea, particularmente vertebral) sin síntomas sistémicos de mieloma difuso.',
      criterios_dx: 'Amiloidosis AL: biopsia del tejido afectado (o de un sitio subrogado como la grasa abdominal) con tinción de rojo Congo positiva y birrefringencia verde manzana bajo luz polarizada, con tipificación confirmando el subtipo de cadena ligera (no otro tipo de amiloide). Plasmocitoma solitario: biopsia de la masa única confirmando células plasmáticas clonales, CON estudio sistémico completo (médula ósea, PET-TC/RM de cuerpo completo) negativo para enfermedad diseminada.',
      laboratorio: 'Amiloidosis AL: cadenas ligeras libres séricas (con frecuencia el estudio más sensible), péptido natriurético (NT-proBNP) y troponina como marcadores de afectación cardiaca (también componentes de sistemas de estadificación específicos de la amiloidosis). Plasmocitoma solitario: electroforesis de proteínas (puede ser negativa o mostrar una proteína M de bajo nivel), estudio de médula ósea sistémico negativo por definición.',
      imagen: 'Amiloidosis AL: ecocardiograma (patrón restrictivo característico, "brillo granular" del miocardio) y, cada vez más, resonancia magnética cardiaca con realce tardío de gadolinio característico. Plasmocitoma solitario: PET-TC/RM de cuerpo completo obligatoria para excluir enfermedad sistémica antes de confirmar el diagnóstico de plasmocitoma verdaderamente solitario.',
      complementarios: 'Biopsia de grasa abdominal como sitio subrogado de cribado inicial menos invasivo en la sospecha de amiloidosis sistémica, con sensibilidad razonable aunque menor que la biopsia del órgano directamente afectado.',
      dx_diferencial: 'Mieloma múltiple activo con afectación renal por otro mecanismo (nefropatía por cilindros, ver esa tarjeta, en lugar de depósito de amiloide), otros tipos de amiloidosis (hereditaria por transtiretina, secundaria a inflamación crónica, que requieren tipificación específica para distinguirlas de la AL), otras causas de plasmocitoma o masa localizada.',
      tx_medico: 'Amiloidosis AL: tratamiento dirigido al clon de células plasmáticas subyacente (similar en principio al del mieloma, aunque con dosis con frecuencia ajustadas dado el compromiso de órgano, particularmente cardiaco, que limita la tolerancia); el objetivo es suprimir rápidamente la producción de cadenas ligeras libres para detener el depósito progresivo de amiloide, dado que el daño de órgano ya establecido tiene capacidad de recuperación limitada. Plasmocitoma solitario: radioterapia local como tratamiento definitivo de primera línea, dado que la enfermedad es, por definición, localizada.',
      tx_farmacologico: 'Amiloidosis AL: esquemas basados en inhibidores de proteasoma y anticuerpos anti-CD38, similares a los del mieloma pero con atención particular a la tolerancia cardiaca. Plasmocitoma solitario: quimioterapia sistémica no indicada de rutina si el estudio sistémico es genuinamente negativo, dado que la radioterapia local suele ser curativa en ese contexto.',
      tx_intervencionista: 'Trasplante autólogo de células madre hematopoyéticas considerado en la amiloidosis AL en el paciente seleccionado con función de órgano adecuada para tolerar el procedimiento; radioterapia como el pilar intervencionista del plasmocitoma solitario.',
      criterios_uci: 'Insuficiencia cardiaca aguda descompensada grave por miocardiopatía amiloide, arritmia grave asociada a infiltración amiloide del sistema de conducción cardiaco.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante autólogo de células madre hematopoyéticas en la amiloidosis AL con función de órgano adecuada; trasplante cardiaco considerado en casos muy seleccionados de miocardiopatía amiloide avanzada con clon de células plasmáticas controlado.',
      seguimiento_hospitalario: 'Vigilancia cardiológica estrecha durante el tratamiento de la amiloidosis AL con compromiso cardiaco, dado el margen terapéutico con frecuencia estrecho en este contexto.',
      seguimiento_ambulatorio: 'Amiloidosis AL: vigilancia seriada de cadenas ligeras libres, NT-proBNP/troponina, y función renal para evaluar respuesta hematológica y de órgano. Plasmocitoma solitario: vigilancia periódica con electroforesis y estudio de imagen para detectar progresión a mieloma sistémico, dado el riesgo reconocido particularmente en la localización ósea.',
      pronostico: 'Amiloidosis AL: variable, determinado en gran medida por el grado de compromiso cardiaco al momento del diagnóstico (el factor pronóstico más importante); el reconocimiento temprano antes de que el daño cardiaco sea extenso mejora sustancialmente el desenlace. Plasmocitoma solitario: favorable con radioterapia local, aunque con vigilancia a largo plazo necesaria por el riesgo de progresión a mieloma sistémico, particularmente en la forma ósea.',
      algoritmo: ['Síntomas de daño de órgano desproporcionado (particularmente cardiaco/renal) en un paciente con proteína monoclonal → sospechar amiloidosis AL', 'Biopsia (grasa abdominal como cribado, u órgano afectado) con rojo Congo + tipificación del subtipo', 'Ecocardiograma/RM cardiaca para evaluar compromiso cardiaco (determinante pronóstico principal)', 'Masa única de células plasmáticas → estudio sistémico completo (médula ósea, PET-TC/RM) para confirmar plasmocitoma verdaderamente solitario', 'Plasmocitoma confirmado como solitario → radioterapia local definitiva + vigilancia a largo plazo de progresión sistémica']
    },
    {
      nombre: 'Enfermedad ósea mielomatosa',
      color: '#8c3a34',
      definicion: 'Complicación característica y con frecuencia la manifestación de presentación del mieloma múltiple activo: lesiones óseas líticas, osteopenia difusa, fracturas patológicas (particularmente vertebrales), y la hipercalcemia asociada a la resorción ósea acelerada; representa uno de los 4 criterios CRAB y una fuente importante de morbilidad (dolor crónico, discapacidad, compresión medular) en el paciente con mieloma.',
      fisiopatologia: `Las células de mieloma alteran directamente el equilibrio normal de remodelación ósea mediante señalización paracrina: activan a los osteoclastos (mediante la vía RANK-RANKL, entre otros mecanismos) mientras simultáneamente suprimen la diferenciación y función de los osteoblastos, produciendo un desacoplamiento entre resorción y formación ósea que resulta en pérdida ósea neta progresiva; a diferencia de la osteoporosis común, este proceso es focal y produce lesiones líticas discretas ("en sacabocado") además de la osteopenia difusa generalizada, y no se acompaña de la respuesta osteoblástica reparadora que normalmente se observaría tras el daño óseo (de ahí que la gammagrafía ósea, que depende de la actividad osteoblástica, sea poco sensible para detectar las lesiones del mieloma, a diferencia de otras neoplasias óseas metastásicas).${figBlock('Imagen 2', 'Mecanismo RANK-RANKL: desacoplamiento óseo', rankRanklHtml)}`,
      epidemiologia: 'Presente en una proporción considerable de los pacientes con mieloma activo al momento del diagnóstico, y una fuente importante de morbilidad a lo largo del curso de la enfermedad incluso con tratamiento sistémico eficaz del clon subyacente.',
      factores_riesgo: ['Mayor carga tumoral de células plasmáticas', 'Mieloma de larga evolución sin tratamiento adecuado', 'Ausencia de bifosfonatos u otro agente antirresortivo en el esquema terapéutico', 'Actividad física de alto impacto en el paciente con lesiones líticas ya establecidas (riesgo de fractura patológica)'],
      clinica: 'Dolor óseo, característicamente de espalda (por afectación vertebral) o de otros huesos con médula hematopoyética activa (costillas, pelvis, cráneo); fracturas patológicas con traumatismo mínimo o ausente; síntomas de hipercalcemia (poliuria, polidipsia, estreñimiento, confusión, letargo, en casos graves arritmia y coma) si la resorción ósea es marcada.',
      criterios_dx: 'Lesión lítica identificada en imagen (PET-TC, RM, o serie ósea) en el contexto de mieloma confirmado; hipercalcemia documentada por laboratorio (&gt;11 mg/dL o &gt;1 mg/dL sobre el límite superior normal, uno de los criterios CRAB).',
      laboratorio: 'Calcio sérico (corregido por albúmina); fósforo; hormona paratiroidea (característicamente suprimida en la hipercalcemia del mieloma, a diferencia del hiperparatiroidismo primario, útil para el diagnóstico diferencial); marcadores de recambio óseo en ocasiones útiles para monitorización.',
      imagen: `PET-TC o resonancia magnética de cuerpo completo como estándar actual, considerablemente más sensible que la serie ósea radiológica convencional para detectar lesiones líticas tempranas; la gammagrafía ósea NO es útil dada la escasa actividad osteoblástica reparadora característica de esta enfermedad.${figBlock('Imagen 3', 'Lesión lítica craneal por mieloma (TC)', '<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Multiple_myeloma_skull_CT_arrows.PNG" alt="TC de cráneo mostrando una lesión lítica en el hueso temporal izquierdo (flechas rojas) en un paciente con mieloma múltiple conocido; la flecha verde señala el canal facial contralateral normal." style="width:100%;max-width:380px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">')}`,
      complementarios: 'Densitometría ósea de utilidad limitada en el mieloma (dado el patrón focal característico, a diferencia de la osteoporosis difusa); evaluación ortopédica/neuroquirúrgica si hay fractura vertebral con compromiso neurológico o inestabilidad de la columna.',
      dx_diferencial: 'Metástasis óseas de otra neoplasia sólida (que con frecuencia sí muestran actividad osteoblástica y son visibles en gammagrafía ósea, a diferencia del mieloma), osteoporosis común (patrón difuso sin lesiones líticas focales discretas), hiperparatiroidismo primario (hormona paratiroidea elevada, a diferencia de la supresión característica en el mieloma).',
      tx_medico: 'Tratamiento sistémico del mieloma de base como medida central para detener la actividad osteoclástica excesiva; hidratación intravenosa agresiva como primera medida ante hipercalcemia sintomática, dado que la deshidratación con frecuencia contribuye y agrava el cuadro.',
      tx_farmacologico: 'Bifosfonatos intravenosos (ácido zoledrónico o pamidronato) de forma sistemática en todo paciente con mieloma activo con enfermedad ósea, independientemente de si hay lesiones líticas ya evidentes, dado que reducen el riesgo de eventos óseos futuros; denosumab (anticuerpo anti-RANKL) como alternativa, particularmente útil en la insuficiencia renal donde los bifosfonatos requieren ajuste o están contraindicados; calcitonina o bifosfonatos intravenosos de acción rápida para la hipercalcemia aguda sintomática grave.',
      tx_intervencionista: 'Vertebroplastia o cifoplastia consideradas para el manejo del dolor en fracturas vertebrales por compresión sintomáticas y refractarias al manejo médico; radioterapia paliativa localizada para el dolor óseo focal refractario o para prevenir una fractura inminente en un sitio de riesgo.',
      criterios_uci: 'Hipercalcemia grave con alteración significativa del estado de conciencia o arritmia cardiaca asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia del calcio sérico seriado durante el manejo de la hipercalcemia aguda; manejo del dolor óseo agudo.',
      seguimiento_ambulatorio: 'Bifosfonatos/denosumab de mantenimiento continuado; vigilancia dental antes y durante el tratamiento con bifosfonatos/denosumab dado el riesgo de osteonecrosis mandibular asociado a estos agentes; vigilancia de imagen periódica de la respuesta ósea al tratamiento sistémico.',
      pronostico: 'Mejora considerablemente con el tratamiento sistémico eficaz del mieloma de base combinado con el agente antirresortivo apropiado; el dolor óseo crónico y la discapacidad residual pueden persistir en el paciente con enfermedad ósea extensa ya establecida, incluso tras lograr control hematológico de la enfermedad.',
      algoritmo: ['Dolor óseo o hipercalcemia en paciente con mieloma conocido o sospechado → PET-TC/RM de cuerpo completo (NO gammagrafía ósea)', 'Hipercalcemia sintomática aguda → hidratación intravenosa agresiva + bifosfonato intravenoso de acción rápida', 'Iniciar bifosfonato/denosumab de mantenimiento sistemático en todo paciente con mieloma activo con enfermedad ósea', 'Fractura vertebral sintomática refractaria → considerar vertebroplastia/cifoplastia', 'Tratamiento sistémico eficaz del mieloma de base como medida central a largo plazo']
    },
    {
      nombre: 'Nefropatía por cilindros (riñón de mieloma)',
      color: '#3d5a73',
      definicion: 'Causa más frecuente de insuficiencia renal aguda en el mieloma múltiple activo: obstrucción tubular directa por la precipitación de cadenas ligeras libres en exceso, formando cilindros intratubulares característicos ("riñón de mieloma" o "cast nephropathy"); un mecanismo de daño renal distinto de la amiloidosis AL (depósito de fibrillas) y de otras causas de nefropatía en el mieloma (hipercalcemia, deshidratación, nefrotoxicidad farmacológica).',
      fisiopatologia: 'Las cadenas ligeras libres monoclonales, filtradas en exceso por el glomérulo dado su bajo peso molecular, superan la capacidad de reabsorción tubular proximal normal y llegan al túbulo distal, donde interactúan con la proteína de Tamm-Horsfall (uromodulina) para formar cilindros densos que obstruyen la luz tubular, produciendo daño tubular directo, inflamación intersticial, y obstrucción del flujo tubular; factores que concentran aún más la orina en el túbulo distal (deshidratación, diuréticos de asa, medios de contraste yodados, antiinflamatorios no esteroideos) precipitan o agravan agudamente el cuadro al favorecer la formación de cilindros.',
      epidemiologia: 'La causa más frecuente de insuficiencia renal en el paciente con mieloma múltiple activo; la insuficiencia renal está presente en una proporción considerable de los pacientes al momento del diagnóstico inicial de mieloma.',
      factores_riesgo: ['Alta carga de cadenas ligeras libres circulantes (proteína M elevada)', 'Deshidratación', 'Uso de medios de contraste yodados', 'Uso de antiinflamatorios no esteroideos', 'Hipercalcemia concomitante (contribuye adicionalmente al daño renal)', 'Uso de diuréticos de asa (favorecen la concentración tubular distal)'],
      clinica: 'Con frecuencia asintomática hasta que la función renal está considerablemente comprometida, detectada por elevación de creatinina en el laboratorio de rutina; en casos graves, síntomas de uremia (náusea, letargo, prurito) o de sobrecarga de volumen.',
      criterios_dx: 'Insuficiencia renal (creatinina &gt;2 mg/dL o depuración &lt;40 mL/min, uno de los criterios CRAB) en un paciente con proteína monoclonal y cadenas ligeras libres elevadas, sin otra causa que explique mejor el cuadro; la biopsia renal (reservada para casos atípicos o dudosos) mostraría los cilindros característicos.',
      laboratorio: 'Creatinina y depuración de creatinina estimada; cuantificación de cadenas ligeras libres séricas (con frecuencia marcadamente elevadas); examen general de orina (proteinuria con frecuencia predominantemente de cadenas ligeras, un patrón distinto de la proteinuria glomerular albuminúrica de otras nefropatías).',
      imagen: 'Ecografía renal para evaluar el tamaño renal (con frecuencia normal o ligeramente aumentado en la fase aguda, a diferencia de la enfermedad renal crónica establecida de otra causa) y descartar obstrucción de otra etiología.',
      complementarios: 'Biopsia renal reservada para casos donde el diagnóstico es incierto o donde coexiste sospecha de otro mecanismo de daño renal (amiloidosis, enfermedad de depósito de cadenas ligeras) que cambiaría el manejo.',
      dx_diferencial: 'Amiloidosis renal (patrón de proteinuria predominantemente albuminúrica/nefrótica, a diferencia del patrón de cadenas ligeras de la nefropatía por cilindros, ver esa tarjeta), hipercalcemia como causa contribuyente independiente, nefrotoxicidad farmacológica (medios de contraste, antiinflamatorios no esteroideos, ciertos antibióticos), deshidratación aislada.',
      tx_medico: 'Hidratación intravenosa agresiva como medida urgente inicial para diluir la concentración tubular de cadenas ligeras y mejorar el flujo urinario; inicio urgente de tratamiento sistémico dirigido al mieloma de base, dado que la reducción rápida de la producción de cadenas ligeras es la medida más eficaz para revertir el daño renal si se logra a tiempo; evitar activamente los factores precipitantes/agravantes identificables (medios de contraste, antiinflamatorios no esteroideos, deshidratación).',
      tx_farmacologico: 'Esquema de inducción del mieloma con inicio urgente (con frecuencia basado en un inhibidor de proteasoma, de acción particularmente rápida en la reducción de cadenas ligeras) dado que la recuperación de la función renal depende críticamente de la rapidez con que se controle la producción del clon subyacente.',
      tx_intervencionista: 'Terapia de reemplazo renal (hemodiálisis) en la insuficiencia renal grave con indicaciones estándar (sobrecarga de volumen, hiperpotasemia, acidosis grave, uremia sintomática); plasmaféresis o hemodiálisis de alto flujo con filtros de poro grande considerada en casos seleccionados para la remoción física acelerada de cadenas ligeras, aunque su beneficio adicional sobre el tratamiento sistémico urgente por sí solo sigue siendo objeto de investigación.',
      criterios_uci: 'Insuficiencia renal aguda grave que requiere terapia de reemplazo renal urgente, hiperpotasemia grave asociada, sobrecarga de volumen grave con compromiso respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante renal considerado en casos muy seleccionados de enfermedad renal terminal con el mieloma de base bajo control hematológico sostenido, evaluado caso por caso.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la función renal seriada durante el tratamiento urgente; ajuste de dosis de los fármacos del esquema de mieloma según la función renal.',
      seguimiento_ambulatorio: 'Vigilancia continuada de la función renal y de las cadenas ligeras libres como marcador de respuesta; educación sobre evitar factores precipitantes (deshidratación, antiinflamatorios no esteroideos, medios de contraste sin premedicación/hidratación adecuada) de por vida dado el riesgo de recurrencia.',
      pronostico: 'La recuperación de la función renal es posible, particularmente si el tratamiento sistémico se inicia con prontitud y logra una reducción rápida de las cadenas ligeras libres; el retraso en el reconocimiento o tratamiento reduce sustancialmente la probabilidad de recuperación renal significativa.',
      algoritmo: ['Insuficiencia renal aguda en paciente con mieloma conocido o sospechado → cuantificar cadenas ligeras libres séricas', 'Hidratación intravenosa agresiva urgente + evitar factores precipitantes (contraste, AINE)', 'Inicio urgente de tratamiento sistémico del mieloma (esquema basado en inhibidor de proteasoma) sin demora', 'Terapia de reemplazo renal si hay indicaciones estándar (sobrecarga, hiperpotasemia, uremia)', 'Vigilancia estrecha de la función renal seriada; la recuperación depende de la rapidez del tratamiento']
    },
    {
      nombre: 'Infecciones recurrentes',
      color: '#8a6a1f',
      definicion: 'Complicación frecuente y una causa importante de morbimortalidad en el mieloma múltiple: riesgo marcadamente aumentado de infecciones (particularmente respiratorias, por organismos encapsulados) por la inmunodeficiencia funcional característica de la enfermedad, agravada por el efecto inmunosupresor de la mayoría de los esquemas de tratamiento sistémico disponibles.',
      fisiopatologia: 'A diferencia de otras neoplasias hematológicas donde el riesgo infeccioso se relaciona predominantemente con la neutropenia, en el mieloma la inmunodeficiencia es en gran medida humoral: las células plasmáticas normales residuales son suprimidas funcionalmente por el clon neoplásico dominante, produciendo hipogammaglobulinemia funcional (niveles bajos de inmunoglobulinas policlonales normales pese a, o incluso a pesar de, un nivel total de proteína elevado por la proteína M monoclonal); esta disfunción humoral se agrava considerablemente por el efecto inmunosupresor de la quimioterapia, los corticoides en dosis altas (componente estándar de la mayoría de los esquemas), y en particular por los anticuerpos anti-CD38, que también depletan células plasmáticas normales además del clon neoplásico.',
      epidemiologia: 'Las infecciones son una de las principales causas de muerte en el paciente con mieloma múltiple, particularmente en los primeros meses tras el diagnóstico (cuando la enfermedad activa y el inicio del tratamiento inmunosupresor coinciden) y durante los episodios de recaída.',
      factores_riesgo: ['Hipogammaglobulinemia funcional grave', 'Neutropenia inducida por el tratamiento (particularmente con ciertos esquemas de quimioterapia)', 'Uso de corticoides en dosis altas', 'Tratamiento con anticuerpos anti-CD38 (depleción adicional de células plasmáticas normales)', 'Enfermedad ósea con inmovilidad asociada (mayor riesgo de neumonía por hipoventilación)'],
      clinica: 'Infecciones respiratorias recurrentes (particularmente neumonía por Streptococcus pneumoniae y otros organismos encapsulados), infecciones urinarias, y una mayor susceptibilidad a la reactivación de virus herpes (particularmente herpes zóster, un riesgo específico y reconocido con ciertos agentes del tratamiento moderno, como los inhibidores de proteasoma).',
      criterios_dx: 'Documentación de infecciones recurrentes en el contexto de mieloma conocido; cuantificación de inmunoglobulinas séricas normales residuales (no la proteína M en sí) para evaluar el grado de hipogammaglobulinemia funcional.',
      laboratorio: 'Cuantificación de inmunoglobulinas policlonales normales (distintas de la proteína M monoclonal); biometría hemática para evaluar neutropenia concomitante; cultivos dirigidos según el sitio de infección sospechado.',
      imagen: 'Radiografía o TC de tórax dirigida según el sitio de infección respiratoria sospechado.',
      complementarios: 'Revisión del calendario de vacunación (vacunas inactivadas apropiadas; evitar vacunas de virus vivos atenuados dado el estado de inmunosupresión); profilaxis antiviral (particularmente contra el virus varicela-zóster) considerada sistemáticamente en el paciente que recibe inhibidores de proteasoma, dado el riesgo específicamente aumentado de reactivación con esta clase de agentes.',
      dx_diferencial: 'Progresión/recaída del mieloma de base presentándose con síntomas que pueden simular infección (fiebre, fatiga), que debe distinguirse mediante el estudio hematológico dirigido correspondiente.',
      tx_medico: 'Manejo estándar de cada episodio infeccioso agudo según el sitio y el organismo sospechado/confirmado; vacunación apropiada actualizada (inactivada) desde el momento del diagnóstico.',
      tx_farmacologico: 'Profilaxis antiviral sistemática (aciclovir/valaciclovir en dosis profilácticas) en todo paciente que reciba un inhibidor de proteasoma, dado el riesgo específicamente aumentado de reactivación de herpes zóster con esta clase de fármacos; inmunoglobulina de reemplazo considerada en el paciente con hipogammaglobulinemia grave e infecciones recurrentes graves pese a las medidas preventivas estándar; profilaxis antibiótica considerada en el paciente de muy alto riesgo según protocolos específicos.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Sepsis grave o choque séptico secundario a una infección en el paciente con inmunodeficiencia de base (ver el tema de Sepsis).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Umbral bajo para hospitalización ante cualquier infección dado el riesgo de progresión rápida en el paciente inmunocomprometido.',
      seguimiento_ambulatorio: 'Vigilancia activa de la frecuencia y gravedad de las infecciones; actualización continua del calendario de vacunación (inactivada); mantenimiento de la profilaxis antiviral mientras el paciente reciba un inhibidor de proteasoma.',
      pronostico: 'Las infecciones son una causa significativa de morbimortalidad en el mieloma; la vigilancia proactiva (vacunación, profilaxis antiviral sistemática con inhibidores de proteasoma, inmunoglobulina de reemplazo en casos seleccionados) reduce este riesgo mensurablemente.',
      algoritmo: ['Paciente con mieloma múltiple → actualizar vacunación (inactivada) desde el diagnóstico', 'Iniciar profilaxis antiviral sistemática si el esquema incluye un inhibidor de proteasoma', 'Infección recurrente grave → cuantificar inmunoglobulinas normales residuales', 'Hipogammaglobulinemia grave con infecciones recurrentes graves → considerar inmunoglobulina de reemplazo', 'Umbral bajo para hospitalización ante cualquier infección dado el riesgo de progresión rápida']
    },
    {
      nombre: 'Hiperviscosidad y complicaciones neurológicas',
      color: '#6b3d5c',
      definicion: 'Espectro de complicaciones neurológicas del mieloma múltiple: el síndrome de hiperviscosidad (producido por la elevada concentración de proteína M circulante, particularmente cuando es de tipo IgA o IgM), la compresión medular por plasmocitoma vertebral con extensión epidural, y la neuropatía periférica (de la enfermedad de base o inducida por ciertos agentes del tratamiento).',
      fisiopatologia: 'El síndrome de hiperviscosidad ocurre cuando la concentración de proteína M circulante alcanza un nivel suficiente para aumentar significativamente la viscosidad sanguínea, alterando el flujo microvascular en la retina, el sistema nervioso central, y la mucosa (produciendo sangrado mucocutáneo por disfunción plaquetaria adquirida secundaria); es particularmente frecuente con proteínas M de tipo IgA (que tienden a formar polímeros de alto peso molecular) o, con mayor frecuencia aún, en la macroglobulinemia de Waldenström (IgM), aunque también puede ocurrir en el mieloma IgG en menor proporción de casos dado su menor tendencia a la polimerización. La compresión medular ocurre por extensión epidural directa de un plasmocitoma vertebral o por retropulsión de fragmento óseo tras una fractura por compresión vertebral patológica, con el mismo mecanismo de compromiso vascular y edema medular progresivo descrito en el tema de Linfomas. La neuropatía periférica puede ser una manifestación directa del mieloma (particularmente en el síndrome POEMS, una variante rara) o, con mayor frecuencia en la práctica clínica, un efecto adverso dependiente de dosis de ciertos agentes del tratamiento (particularmente bortezomib).',
      epidemiologia: 'El síndrome de hiperviscosidad es relativamente infrecuente en el mieloma múltiple clásico (más característico de la macroglobulinemia de Waldenström), pero debe reconocerse cuando ocurre dado su potencial de urgencia; la compresión medular es una complicación temida pero relativamente infrecuente; la neuropatía periférica inducida por tratamiento es considerablemente más frecuente y con frecuencia el factor limitante de dosis de ciertos agentes.',
      factores_riesgo: ['Proteína M de tipo IgA o de concentración muy elevada (para hiperviscosidad)', 'Enfermedad ósea vertebral voluminosa o plasmocitoma paravertebral conocido (para compresión medular)', 'Uso de bortezomib u otros agentes neurotóxicos, particularmente en dosis acumuladas altas (para neuropatía periférica)', 'Neuropatía preexistente de otra causa (diabetes, alcohol) que aumenta la susceptibilidad a la neurotoxicidad del tratamiento'],
      clinica: 'Hiperviscosidad: cefalea, alteración visual (por cambios retinianos característicos, incluida la apariencia de "salchichas" de las venas retinianas dilatadas y segmentadas), sangrado mucocutáneo, y en casos graves alteración del estado de conciencia. Compresión medular: dolor de espalda progresivo, debilidad de extremidades, alteración sensitiva con nivel identificable, disfunción de esfínteres. Neuropatía periférica: parestesias y disestesias distales simétricas, con frecuencia dolorosas, de inicio insidioso y relacionadas con la dosis acumulada del agente causal.',
      criterios_dx: 'Hiperviscosidad: diagnóstico clínico apoyado por el examen de fondo de ojo característico y, cuando está disponible, la medición directa de la viscosidad sérica. Compresión medular: resonancia magnética urgente de toda la columna (ver el tema de Linfomas para el desarrollo completo del enfoque diagnóstico). Neuropatía periférica: diagnóstico clínico basado en el patrón de síntomas y la relación temporal con el agente causal, apoyado por estudios de conducción nerviosa en casos dudosos.',
      laboratorio: 'Viscosidad sérica directa cuando está disponible; nivel de proteína M como correlato indirecto del riesgo.',
      imagen: 'Fondo de ojo (examen directo, no propiamente "imagen" pero central en el diagnóstico) para la hiperviscosidad; resonancia magnética de toda la columna urgente para la compresión medular.',
      complementarios: 'Estudios de conducción nerviosa para caracterizar y graduar la neuropatía periférica inducida por tratamiento, útiles para decisiones de ajuste de dosis.',
      dx_diferencial: 'Otras causas de alteración visual/cefalea en el paciente con mieloma (hipercalcemia, otra causa vascular), otras causas de compresión medular (ver el tema de Linfomas), otras causas de neuropatía periférica (diabetes, deficiencia de vitamina B12, alcohol) que pueden coexistir y contribuir.',
      tx_medico: 'Hiperviscosidad sintomática: plasmaféresis urgente como medida temporal eficaz para reducir agudamente la concentración de proteína M circulante, mientras se inicia o intensifica el tratamiento sistémico dirigido al clon subyacente. Compresión medular: corticoides en dosis altas de inmediato ante sospecha razonable (ver el tema de Linfomas para el enfoque completo). Neuropatía periférica: ajuste de dosis o cambio del agente causal según el grado de neuropatía documentado, dado que es en gran medida reversible si se reconoce y actúa tempranamente, pero puede volverse permanente si se continúa el agente causal pese a la progresión.',
      tx_farmacologico: 'Tratamiento sistémico urgente del mieloma de base tras la plasmaféresis inicial en la hiperviscosidad sintomática; dexametasona en dosis altas para la compresión medular; agentes específicos para el dolor neuropático (gabapentinoides, entre otros) como manejo sintomático de la neuropatía periférica establecida.',
      tx_intervencionista: 'Plasmaféresis como el procedimiento central para la hiperviscosidad sintomática aguda; radioterapia o descompresión quirúrgica urgente según el contexto de la compresión medular (ver el tema de Linfomas).',
      criterios_uci: 'Hiperviscosidad grave con alteración del estado de conciencia, compresión medular con compromiso respiratorio (nivel cervical alto), sangrado mayor asociado a hiperviscosidad grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a estas complicaciones en sí.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la plasmaféresis (síntomas, viscosidad si está disponible) en la hiperviscosidad; vigilancia neurológica seriada en la compresión medular.',
      seguimiento_ambulatorio: 'Vigilancia oftalmológica de seguimiento tras un episodio de hiperviscosidad con afectación retiniana; vigilancia clínica seriada del grado de neuropatía periférica durante el tratamiento con agentes neurotóxicos, con ajuste proactivo de dosis antes de que la neuropatía se vuelva grave o irreversible.',
      pronostico: 'La hiperviscosidad responde con frecuencia rápidamente a la plasmaféresis; la compresión medular depende críticamente de la rapidez del reconocimiento y tratamiento (ver el tema de Linfomas); la neuropatía periférica inducida por tratamiento es en gran medida reversible si se detecta y actúa tempranamente, pero puede dejar secuelas permanentes si se permite progresar.',
      algoritmo: ['Cefalea/alteración visual/sangrado mucocutáneo en paciente con proteína M elevada → sospechar hiperviscosidad, examen de fondo de ojo', 'Hiperviscosidad sintomática confirmada → plasmaféresis urgente + inicio/intensificación del tratamiento sistémico', 'Dolor de espalda con síntomas neurológicos → sospechar compresión medular, manejo urgente (ver el tema de Linfomas)', 'Parestesias distales durante tratamiento con agente neurotóxico → graduar la neuropatía y ajustar dosis proactivamente', 'Vigilancia clínica seriada para detectar neurotoxicidad temprana antes de que se vuelva irreversible']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario del mieloma múltiple se centra en el manejo de las complicaciones agudas (hipercalcemia, insuficiencia renal aguda por nefropatía por cilindros, hiperviscosidad, compresión medular) y en la vigilancia durante el inicio del tratamiento sistémico.',
    parametros: ['Calcio sérico seriado', 'Función renal seriada (creatinina, cadenas ligeras libres)', 'Signos de infección activa', 'Estado neurológico si hay sospecha de compresión medular o hiperviscosidad'],
    criterios_uci_general: 'Hipercalcemia grave con alteración del estado de conciencia, insuficiencia renal aguda grave que requiere terapia de reemplazo renal urgente, hiperviscosidad grave con alteración del estado de conciencia, compresión medular con compromiso respiratorio, sepsis grave por la inmunodeficiencia asociada.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'Trasplante autólogo de células madre hematopoyéticas de consolidación en el mieloma activo tras la inducción, y en la amiloidosis AL con función de órgano adecuada; ver las tarjetas correspondientes para el desarrollo completo.',
    prevencion: 'Bifosfonatos/denosumab sistemáticos en todo paciente con mieloma activo con enfermedad ósea; profilaxis antiviral sistemática con inhibidores de proteasoma; vacunación apropiada desde el diagnóstico; hidratación adecuada y evitar factores precipitantes (contraste, antiinflamatorios no esteroideos) del daño renal agudo; vigilancia proactiva de neuropatía periférica durante el tratamiento con agentes neurotóxicos.'
  }
};

export const compCites = {
  'Gammapatía Monoclonal de Significado Incierto': [3, 4],
  'Mieloma Múltiple Smoldering': [3, 4],
  'Mieloma Múltiple Activo': [2, 3, 5],
  'Amiloidosis de Cadenas Ligeras y Plasmocitoma Solitario': [10, 11],
  'Enfermedad ósea mielomatosa': [6, 7],
  'Nefropatía por cilindros (riñón de mieloma)': [8],
  'Infecciones recurrentes': [9],
  'Hiperviscosidad y complicaciones neurológicas': [12, 14]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'R-ISS (Estadificación Revisada)': [5],
  'Criterios CRAB/SLiM': [3],
  'Clasificación citogenética de riesgo': [13]
};
export const escalaCalc = { 'R-ISS (Estadificación Revisada)': 'riss', 'Criterios CRAB/SLiM': 'crab' };
export const compGroups = [
  { name: 'Mieloma por espectro clínico (enfermedades)', items: ['Gammapatía Monoclonal de Significado Incierto', 'Mieloma Múltiple Smoldering', 'Mieloma Múltiple Activo', 'Amiloidosis de Cadenas Ligeras y Plasmocitoma Solitario'] },
  { name: 'Complicaciones transversales', items: ['Enfermedad ósea mielomatosa', 'Nefropatía por cilindros (riñón de mieloma)', 'Infecciones recurrentes', 'Hiperviscosidad y complicaciones neurológicas'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren el espectro clínico de células plasmáticas (MGUS, smoldering, mieloma activo) y 2 entidades relacionadas (amiloidosis AL, plasmocitoma solitario); las siguientes 4 son complicaciones transversales que pueden surgir en el mieloma activo, desde la enfermedad ósea hasta las complicaciones neurológicas.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Clasificación' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'MIELOMA MÚLTIPLE', color: '#7a1f3d', target: 'definicion' },
  branches: [
    { title: 'Por espectro clínico (enfermedades)', sub: 'De asintomático a activo', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Gammapatía Monoclonal de Significado Incierto', sub: 'MGUS, asintomática', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Mieloma Múltiple Smoldering', sub: 'Mayor volumen, asintomático', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Mieloma Múltiple Activo', sub: 'Criterios CRAB/SLiM', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Amiloidosis de Cadenas Ligeras y Plasmocitoma Solitario', sub: 'Entidades relacionadas', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: 'Del mieloma activo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Enfermedad ósea mielomatosa', sub: 'Lesiones líticas', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Nefropatía por cilindros', sub: 'Riñón de mieloma', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Infecciones recurrentes', sub: 'Hipogammaglobulinemia funcional', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Hiperviscosidad y complicaciones neurológicas', sub: 'IgA/IgG elevada', color: '#6b3d5c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 3], no_invasivos: [3, 5] };
export const clasificacionCite = [3, 5, 13];
export const seguimientoCite = [7, 8];
