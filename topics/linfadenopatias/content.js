// topics/linfadenopatias/content.js: Linfadenopatías.
// Tema de enfoque diagnóstico (no una sola entidad biológica): a diferencia de los temas de
// espectro biológico único (LLC, Linfomas, Mieloma), aquí las 4 tarjetas de "enfermedad" son
// categorías clínicas por localización y riesgo (localizada reactiva, localizada de alto riesgo,
// generalizada infecciosa/autoinmune, generalizada por neoplasia diseminada), y las 4
// complicaciones son las consecuencias transversales del enfoque diagnóstico y sus fallas.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.

export const meta = {
  id: 'linfadenopatias',
  titulo: 'Linfadenopatías',
  subtitulo: 'Módulo 24 · Medicina Interna',
  accent: '#2d6b5c',
  accentDim: '#6ba396'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const territoriosDrenajeHtml = `
<div style="display:flex;flex-direction:column;gap:6px;max-width:560px;margin:0 auto;font-size:10px;line-height:1.5;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1.6fr;gap:6px;">
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 8px;font-weight:600;">Cervical</div>
    <div style="padding:6px 0;">Cabeza y cuello: faringe, cavidad oral, piel de cara/cuero cabelludo (con frecuencia reactiva a infecciones locales)</div>
    <div style="background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:6px;padding:6px 8px;font-weight:600;">Supraclavicular izq. (Virchow)</div>
    <div style="padding:6px 0;">Tórax y abdomen profundos vía conducto torácico; casi siempre patológico, alto riesgo de malignidad</div>
    <div style="background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:6px;padding:6px 8px;font-weight:600;">Axilar</div>
    <div style="padding:6px 0;">Miembro superior, pared torácica, mama ipsilateral (unilateral: descartar patología mamaria)</div>
    <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:6px;padding:6px 8px;font-weight:600;">Epitroclear</div>
    <div style="padding:6px 0;">Mano y antebrazo; cualquier ganglio palpable aquí ya es anómalo (umbral bajo)</div>
    <div style="background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:6px;padding:6px 8px;font-weight:600;">Inguinal</div>
    <div style="padding:6px 0;">Miembro inferior, genitales externos, periné (tolera fisiológicamente mayor tamaño basal)</div>
  </div>
</div>`;

const enfoqueDiagnosticoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:560px;margin:0 auto;">
  <div style="background:#2d6b5c33;border:1px solid #2d6b5c;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Linfadenopatía detectada</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:150px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Localizada</strong><br>1 región ganglionar</div>
    <div style="flex:1;min-width:150px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Generalizada</strong><br>≥2 regiones no contiguas</div>
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:7px 14px;font-size:10px;color:var(--ink);text-align:center;max-width:480px;">Criterios de alarma (calculadora): tamaño &gt;2cm, supraclavicular, &gt;4-6 semanas, dura/fija, síntomas B, edad &gt;40</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:150px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Sin alarma</strong><br>Observación 4-6 semanas</div>
    <div style="flex:1;min-width:150px;background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Con alarma</strong><br>Biopsia excisional</div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La linfadenopatía es el aumento anómalo del tamaño, número, o consistencia de uno o más ganglios linfáticos, un hallazgo clínico frecuente que puede representar desde una respuesta reactiva transitoria y completamente benigna hasta la manifestación de presentación de una neoplasia hematológica o sólida. El reto clínico central no es reconocer la linfadenopatía (con frecuencia evidente a la palpación), sino distinguir de forma eficiente cuáles casos requieren observación expectante y cuáles requieren biopsia urgente, sin someter a la mayoría de los pacientes (en quienes la causa es benigna y autolimitada) a procedimientos invasivos innecesarios, ni retrasar el diagnóstico en la minoría con enfermedad grave subyacente.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La linfadenopatía es un motivo de consulta extremadamente frecuente en atención primaria; la gran mayoría de los casos en el paciente joven y sin factores de riesgo son de causa reactiva benigna (con frecuencia infecciosa) y se resuelven espontáneamente, mientras que la probabilidad de malignidad aumenta considerablemente con la edad, la localización supraclavicular, y la persistencia más allá de varias semanas.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Linfadenopatía Localizada Reactiva/Benigna</strong>: 1 sola región ganglionar, con frecuencia secundaria a una infección local drenada por esa cadena, de curso autolimitado.</li>
    <li><strong>Linfadenopatía Localizada de Alto Riesgo</strong>: 1 región ganglionar pero con 1 o más criterios de alarma presentes (calculadora), que orientan biopsia sobre observación.</li>
    <li><strong>Linfadenopatía Generalizada Infecciosa/Autoinmune</strong>: ≥2 regiones ganglionares no contiguas, de causa sistémica no neoplásica (VIH, mononucleosis infecciosa, tuberculosis, lupus eritematoso sistémico, entre otras).</li>
    <li><strong>Linfadenopatía Generalizada por Neoplasia Diseminada</strong>: ≥2 regiones ganglionares no contiguas por infiltración neoplásica diseminada (leucemia, linfoma avanzado, metástasis de un primario sólido).</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo (para malignidad subyacente).</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad mayor de 40 años</li>
    <li>Localización supraclavicular (signo de Troisier/ganglio de Virchow, casi siempre patológico)</li>
    <li>Tamaño mayor de 2 cm y crecimiento progresivo</li>
    <li>Consistencia dura, fija a planos profundos, o no dolorosa</li>
    <li>Persistencia más allá de 4-6 semanas sin regresión</li>
    <li>Síntomas B acompañantes (fiebre, sudoración nocturna, pérdida de peso involuntaria)</li>
    <li>Inmunosupresión de base (VIH, trasplante, tratamiento inmunosupresor crónico)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> El ganglio linfático se agranda por 1 de 2 mecanismos amplios: hiperplasia reactiva (proliferación policlonal normal de linfocitos y células presentadoras de antígeno en respuesta a un estímulo antigénico local o sistémico, un proceso fisiológico y autolimitado) o infiltración (por células neoplásicas clonales, ya sea de origen linfoide primario del propio ganglio o metastásicas de un sitio distante, o por microorganismos y granulomas en infecciones específicas como la tuberculosis).${figBlock('Imagen 1', 'Enfoque diagnóstico de la linfadenopatía', enfoqueDiagnosticoHtml)} La localización anatómica orienta considerablemente la etiología probable: la adenopatía cervical con frecuencia refleja un proceso de cabeza y cuello (infeccioso la mayoría de las veces, aunque el ganglio de Virchow supraclavicular izquierdo es la excepción clásica que señala malignidad abdominal); la adenopatía axilar unilateral obliga a descartar patología mamaria; la adenopatía inguinal aislada con frecuencia es reactiva a procesos de miembros inferiores o infecciones de transmisión sexual.${figBlock('Imagen 2', 'Regiones ganglionares y sus territorios de drenaje típicos', territoriosDrenajeHtml)} Analogía: el sistema linfático funciona como una red de "puestos de control" distribuidos por todo el cuerpo; un ganglio agrandado es, la mayoría de las veces, simplemente un puesto de control trabajando horas extra ante una amenaza local ya controlada, pero ocasionalmente es el primer puesto de control tomado por un invasor que se está estableciendo, y distinguir un caso del otro es precisamente el trabajo clínico central de este tema.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de una adenopatía cervical pequeña, blanda, y dolorosa en el contexto de una faringitis viral reciente (bajo riesgo, observación) hasta una adenopatía supraclavicular dura, fija, indolora, con síntomas B (alto riesgo, biopsia urgente); el enfoque diagnóstico completo, la clasificación por criterios de alarma, y las complicaciones tanto de la enfermedad subyacente como del proceso diagnóstico mismo se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Bazemore AW, Smucker DR. Lymphadenopathy and malignancy. Am Fam Physician. 2002;66(11):2103-2110.',
  'Gaddey HL, Riegel AM. Unexplained Lymphadenopathy: Evaluation and Differential Diagnosis. Am Fam Physician. 2016;94(11):896-903.',
  'Habermann TM, Steensma DP. Lymphadenopathy. Mayo Clin Proc. 2000;75(7):723-732.',
  'Ferrer R. Lymphadenopathy: differential diagnosis and evaluation. Am Fam Physician. 1998;58(6):1313-1320.',
  'Mohseni S, Shojaiefard A, Khorgami Z, et al. Peripheral lymphadenopathy: approach and diagnostic tools. Iran J Med Sci. 2014;39(2 Suppl):158-170.',
  'Freeman AM, Matto P. Adenopathy. StatPearls. Treasure Island (FL): StatPearls Publishing; 2023.',
  'Chau I, Kelleher MT, Cunningham D, et al. Rapid access multidisciplinary lymph node diagnostic clinic: analysis of 550 patients. Br J Cancer. 2003;88(3):354-361.',
  'Loblaw DA, Perry J, Chambers A, Laperriere NJ. Systematic review of the diagnosis and management of malignant extradural spinal cord compression. J Clin Oncol. 2005;23(9):2028-2037.',
  'Wilson LD, Detterbeck FC, Yahalom J. Superior vena cava syndrome with malignant causes. N Engl J Med. 2007;356(18):1862-1869.',
  'Yaris N, Cakir M, Sozen E, Cobanoglu U. Analysis of children with peripheral lymphadenopathy. Clin Pediatr (Phila). 2006;45(6):544-549.',
  'Meier JD, Grimmer JF. Evaluation and management of neck masses in children. Am Fam Physician. 2014;89(5):353-358.',
  'Slap GB, Brooks JS, Schwartz JS. When to perform biopsies of enlarged peripheral lymph nodes in young patients. JAMA. 1984;252(11):1321-1326.',
  'Pangalis GA, Vassilakopoulos TP, Boussiotis VA, Fessas P. Clinical approach to lymphadenopathy. Semin Oncol. 1993;20(6):570-582.',
  'Vassilakopoulos TP, Pangalis GA. Application of a prediction rule to select which patients presenting with lymphadenopathy should undergo a lymph node biopsy. Medicine (Baltimore). 2000;79(5):338-347.',
  'Weinstock MS, Patel NA, Smith LP. Pediatric Cervical Lymphadenopathy. Pediatr Rev. 2018;39(9):433-443.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Linfadenopatía de bajo riesgo (reactiva)',
      tituloB: 'Linfadenopatía de alto riesgo',
      compensada: 'Ganglio pequeño (con frecuencia &lt;2 cm), blando o elástico, móvil, doloroso a la palpación, de aparición reciente y con frecuencia asociado a un foco infeccioso identificable en la región drenada (faringitis, infección cutánea local, entre otros); regresión esperada en 2-4 semanas.',
      descompensada: 'Ganglio grande (&gt;2 cm), duro o de consistencia pétrea, fijo a planos profundos, indoloro, de crecimiento progresivo, persistente más de 4-6 semanas, localización supraclavicular, o acompañado de síntomas B (fiebre, sudoración nocturna, pérdida de peso involuntaria).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática completa con frotis de sangre periférica', utilidad: 'Cribado inicial de citopenias, linfocitosis atípica (mononucleosis), o blastos circulantes (leucemia aguda); orienta considerablemente el diagnóstico diferencial inicial.' },
      { prueba: 'Serologías dirigidas (VIH, virus de Epstein-Barr, citomegalovirus)', utilidad: 'Causas infecciosas frecuentes de linfadenopatía generalizada, particularmente relevantes en el paciente joven sin otra explicación evidente.' },
      { prueba: 'Velocidad de sedimentación globular y proteína C reactiva', utilidad: 'Marcadores inespecíficos de inflamación sistémica; útiles como apoyo, no como prueba diagnóstica definitiva.' },
      { prueba: 'LDH y ácido úrico', utilidad: 'Marcadores indirectos de alto recambio celular, elevados con frecuencia en neoplasias hematológicas de alta proliferación; apoyan la sospecha de malignidad sin ser diagnósticos por sí solos.' },
      { prueba: 'Anticuerpos antinucleares y otros marcadores autoinmunes dirigidos', utilidad: 'Cuando la sospecha clínica orienta hacia una causa autoinmune sistémica (lupus eritematoso sistémico, artritis reumatoide) como causa de linfadenopatía generalizada.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de alarma para biopsia (con calculadora)', interpretacion: 'Sintetiza los factores clínicos que orientan biopsia sobre observación.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Ecografía ganglionar', interpretacion: 'Distingue características de benignidad (forma ovalada, hilio graso conservado) de características sospechosas (forma redondeada, pérdida del hilio, hipervascularización periférica).', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Ecografía de la región ganglionar afectada', hallazgos: 'Primera línea para caracterizar adenopatías superficiales; distingue rasgos benignos de sospechosos y puede guiar la biopsia.' },
      { modalidad: 'Tomografía computarizada de tórax/abdomen/pelvis o PET-TC', hallazgos: 'Indicada ante linfadenopatía generalizada o sospecha de enfermedad diseminada, para mapear la extensión y orientar el sitio de biopsia más accesible y representativo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es localizada vs. generalizada (≥2 regiones ganglionares no contiguas), y dentro de cada una, la presencia o ausencia de criterios de alarma (calculadora) que determinan si el manejo apropiado es observación expectante o biopsia excisional.',
    escalas: [
      { nombre: 'Criterios de Alarma para Biopsia', componentes: 'Tamaño, localización, duración, consistencia, síntomas B, edad. Calculadora disponible más abajo.', formula: 'La localización supraclavicular por sí sola, o ≥3 criterios combinados, indican biopsia.', interpretacion: 'Orienta la decisión entre observación expectante (4-6 semanas) y biopsia excisional temprana.' },
      { nombre: 'Tamaño ganglionar normal por región', componentes: 'Referencia anatómica de tamaño esperado según la cadena ganglionar.', formula: 'Cervical/axilar: hasta 1-1.5 cm normal. Inguinal: hasta 1.5-2 cm normal (fisiológicamente mayor). Epitroclear: &gt;0.5 cm ya anómalo. Cualquier ganglio supraclavicular palpable: anómalo.', interpretacion: 'El umbral de "normalidad" varía por región; aplicar un único punto de corte a todas las cadenas sobreestima o subestima el riesgo según la localización.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Linfadenopatía Localizada Reactiva/Benigna',
      color: '#3f6b52',
      definicion: 'La categoría más frecuente de linfadenopatía: aumento de una sola región ganglionar, sin ningún criterio de alarma presente, con frecuencia secundaria a una infección local reciente en el territorio de drenaje de esa cadena; representa la gran mayoría de los casos evaluados en atención primaria.',
      fisiopatologia: 'Hiperplasia folicular reactiva: expansión policlonal normal de linfocitos B y T, y activación de células presentadoras de antígeno, en respuesta a un estímulo antigénico local (con frecuencia infeccioso) drenado por esa cadena ganglionar específica; un proceso fisiológico completamente reversible una vez resuelto el estímulo que lo originó.',
      epidemiologia: 'La causa más frecuente de linfadenopatía evaluada en atención primaria, particularmente en el paciente joven sin factores de riesgo; la mayoría se resuelve espontáneamente sin necesidad de estudio extenso.',
      factores_riesgo: ['Infección local reciente en el territorio de drenaje (faringitis, infección cutánea, otitis)', 'Edad joven', 'Ausencia de inmunosupresión de base', 'Exposición reciente a un patógeno identificable'],
      clinica: 'Ganglio único o de pocos ganglios en una sola cadena, pequeño, blando o elástico, móvil, doloroso a la palpación, de aparición reciente (días), con frecuencia acompañado de signos del foco infeccioso causal.',
      criterios_dx: 'Ninguno de los criterios de alarma presente (calculadora); regresión esperada dentro de 2-4 semanas tras la resolución del estímulo causal.',
      laboratorio: 'Con frecuencia no se requiere ningún estudio de laboratorio si el cuadro es clínicamente claro; biometría hemática considerada si hay duda diagnóstica.',
      imagen: 'No indicada de rutina; considerada solo si el ganglio no sigue el curso esperado.',
      complementarios: 'Ninguno de rutina.',
      dx_diferencial: 'Linfadenopatía localizada de alto riesgo (criterios de alarma presentes, ver esa tarjeta), linfadenitis supurativa (si hay eritema, fluctuación, o dolor desproporcionado, ver Complicaciones).',
      tx_medico: 'Tratamiento del foco infeccioso subyacente si se identifica; observación expectante del ganglio en sí, que se espera regrese sin tratamiento específico dirigido al ganglio.',
      tx_farmacologico: 'Analgésicos simples si hay molestia local; antibióticos solo si hay un foco bacteriano identificado que los justifique, no dirigidos al ganglio en sí.',
      tx_intervencionista: 'No indicado.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Reevaluación clínica a las 4-6 semanas para confirmar la regresión esperada; si el ganglio persiste, crece, o desarrolla algún criterio de alarma nuevo, reclasificar como alto riesgo y proceder a biopsia.',
      pronostico: 'Excelente; la resolución completa es la regla una vez tratado o resuelto el estímulo causal.',
      algoritmo: ['Adenopatía única, blanda, dolorosa, con foco infeccioso identificable → sospechar reactiva', 'Calcular criterios de alarma (calculadora): todos ausentes', 'Observación expectante 4-6 semanas sin estudio extenso', 'Reevaluación clínica al final del periodo de observación', 'Regresión completa esperada; reclasificar si no regresa o aparece un criterio de alarma']
    },
    {
      nombre: 'Linfadenopatía Localizada de Alto Riesgo',
      color: '#8c3a34',
      definicion: 'Aumento de una sola región ganglionar con 1 o más criterios de alarma presentes (calculadora): tamaño &gt;2 cm, localización supraclavicular, persistencia &gt;4-6 semanas, consistencia dura/fija, síntomas B, o edad &gt;40 años; esta combinación de hallazgos aumenta sustancialmente la probabilidad de malignidad subyacente y orienta biopsia excisional sobre observación.',
      fisiopatologia: 'Los mismos hallazgos que definen "alto riesgo" reflejan mecanismos biológicos distintos de la hiperplasia reactiva simple: un ganglio duro y fijo sugiere infiltración por células neoplásicas que alteran la arquitectura normal y lo adhieren a tejidos circundantes; el crecimiento progresivo y persistente más allá del tiempo esperado para una respuesta reactiva autolimitada sugiere un proceso proliferativo autónomo no controlado por los mecanismos regulatorios normales; la localización supraclavicular es especialmente informativa porque esa cadena ganglionar (particularmente la izquierda, el ganglio de Virchow) drena estructuras torácicas y abdominales profundas, por lo que su afectación con frecuencia señala malignidad visceral oculta más que un proceso local benigno.',
      epidemiologia: 'Menos frecuente que la linfadenopatía reactiva, pero la categoría donde se concentra la mayor parte del rendimiento diagnóstico de la biopsia; la probabilidad de malignidad aumenta considerablemente con el número de criterios de alarma presentes simultáneamente.',
      factores_riesgo: ['Edad mayor de 40 años', 'Localización supraclavicular', 'Ausencia de un foco infeccioso local que explique el hallazgo', 'Inmunosupresión de base', 'Antecedente personal de neoplasia previa'],
      clinica: 'Ganglio único, con frecuencia &gt;2 cm, duro o de consistencia pétrea, fijo a planos profundos o adherido a piel suprayacente, indoloro, de crecimiento progresivo documentado; puede acompañarse de síntomas B.',
      criterios_dx: '1 o más criterios de alarma presentes (calculadora), particularmente la localización supraclavicular, que por sí sola ya justifica biopsia independientemente de los demás criterios.',
      laboratorio: 'Biometría hemática con frotis, LDH, ácido úrico; estudio dirigido según la sospecha clínica de un primario específico si hay hallazgos orientadores adicionales.',
      imagen: `Ecografía ganglionar para caracterizar rasgos sospechosos (pérdida del hilio, forma redondeada); TC de la región correspondiente para evaluar extensión y planear el sitio de biopsia.${figBlock('Imagen 3', 'Ecografía de un ganglio sospechoso', '<img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Ultrasonography_of_a_suspected_malignant_lymph_node.jpg" alt="Ecografía axilar mostrando un ganglio sospechoso: ausencia del hilio graso, engrosamiento cortical focal mayor de 3 mm, y flujo Doppler anómalo (no hiliar)." style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">')}`,
      complementarios: 'Biopsia excisional del ganglio (preferida sobre la biopsia por aguja fina, que con frecuencia no aporta suficiente arquitectura tisular para un diagnóstico definitivo, particularmente si se sospecha linfoma).',
      dx_diferencial: 'Linfadenopatía localizada reactiva/benigna (ningún criterio de alarma, ver esa tarjeta), linfadenitis supurativa (dolor y signos inflamatorios agudos desproporcionados, ver Complicaciones).',
      tx_medico: 'Biopsia excisional temprana como paso central del manejo, sin retrasar el procedimiento con ciclos empíricos repetidos de antibióticos u observación prolongada una vez presente un criterio de alarma claro.',
      tx_farmacologico: 'Ninguno dirigido al ganglio en sí hasta contar con un diagnóstico histológico; el tratamiento específico depende por completo del resultado de la biopsia.',
      tx_intervencionista: 'Biopsia excisional del ganglio completo como procedimiento diagnóstico definitivo.',
      criterios_uci: 'No aplica directamente a esta categoría.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de rutina, salvo que la biopsia se realice en un contexto hospitalario.',
      seguimiento_ambulatorio: 'Seguimiento estrecho hasta obtener el resultado histológico definitivo; manejo dirigido según el diagnóstico específico establecido por la biopsia.',
      pronostico: 'Depende enteramente de la causa subyacente identificada por la biopsia; el reconocimiento y biopsia oportunos evitan el retraso diagnóstico que empeora el pronóstico de una neoplasia subyacente no detectada a tiempo.',
      algoritmo: ['Adenopatía con 1 o más criterios de alarma (calculadora) → alto riesgo', 'Ecografía ganglionar + estudio de laboratorio dirigido', 'No retrasar con ciclos empíricos repetidos de antibióticos sin foco infeccioso claro', 'Biopsia excisional temprana (preferida sobre aguja fina)', 'Manejo dirigido según el diagnóstico histológico definitivo']
    },
    {
      nombre: 'Linfadenopatía Generalizada Infecciosa/Autoinmune',
      color: '#3d5a73',
      definicion: 'Aumento de ≥2 regiones ganglionares no contiguas de causa sistémica no neoplásica: infecciones sistémicas (VIH, mononucleosis infecciosa por virus de Epstein-Barr, citomegalovirus, tuberculosis, sífilis secundaria) o enfermedades autoinmunes sistémicas (lupus eritematoso sistémico, artritis reumatoide, sarcoidosis); representa una proporción considerable de la linfadenopatía generalizada, particularmente en el paciente joven.',
      fisiopatologia: 'A diferencia de la linfadenopatía localizada reactiva (respuesta a un estímulo antigénico circunscrito a un territorio de drenaje), aquí el estímulo inmunológico es sistémico: una infección diseminada por vía hematógena (VIH, virus de Epstein-Barr) o un proceso autoinmune con activación inmunológica generalizada estimula hiperplasia reactiva simultánea en múltiples cadenas ganglionares no contiguas, reflejando la naturaleza sistémica del proceso subyacente más que un evento local aislado.',
      epidemiologia: 'Particularmente frecuente en el adulto joven, donde la mononucleosis infecciosa y las infecciones virales sistémicas son causas comunes; la tuberculosis ganglionar y el VIH son consideraciones importantes según el contexto epidemiológico y los factores de riesgo del paciente.',
      factores_riesgo: ['Conductas de riesgo para infecciones de transmisión sexual/VIH', 'Exposición epidemiológica a tuberculosis', 'Antecedente o síntomas sugestivos de enfermedad autoinmune sistémica', 'Contacto reciente con un caso de mononucleosis infecciosa'],
      clinica: 'Adenopatías simétricas o asimétricas en ≥2 regiones no contiguas (con frecuencia cervical, axilar, e inguinal simultáneamente), de consistencia con frecuencia elástica más que pétrea, acompañadas de manifestaciones sistémicas específicas de la causa (fiebre, faringitis, y esplenomegalia en la mononucleosis; artralgias y exantema malar en el lupus; síntomas constitucionales en la tuberculosis).',
      criterios_dx: 'Confirmación serológica o microbiológica de la infección causal (VIH, virus de Epstein-Barr, prueba cutánea o cultivo para tuberculosis), o criterios clínicos/serológicos establecidos para la enfermedad autoinmune sospechada.',
      laboratorio: 'Serologías dirigidas (VIH, virus de Epstein-Barr, citomegalovirus), prueba cutánea de tuberculina o ensayo de liberación de interferón gamma si hay sospecha de tuberculosis, anticuerpos antinucleares y otros marcadores autoinmunes dirigidos según la sospecha clínica.',
      imagen: 'Radiografía o TC de tórax si hay sospecha de tuberculosis pulmonar concomitante o sarcoidosis; ecografía abdominal si hay esplenomegalia asociada.',
      complementarios: 'Biopsia ganglionar reservada para casos donde el diagnóstico serológico/clínico no es concluyente, o donde persiste la duda diagnóstica con malignidad tras el estudio inicial.',
      dx_diferencial: 'Linfadenopatía generalizada por neoplasia diseminada (ver esa tarjeta, particularmente si hay síntomas B marcados sin causa infecciosa/autoinmune identificada), linfadenopatía localizada (afectación de una sola región, ver esas tarjetas).',
      tx_medico: 'Tratamiento dirigido a la causa identificada: antirretroviral para VIH, manejo de soporte para mononucleosis infecciosa (con frecuencia autolimitada), esquema antituberculoso completo para tuberculosis confirmada, inmunosupresión dirigida para la enfermedad autoinmune subyacente.',
      tx_farmacologico: 'Específico según la causa confirmada; evitar ampicilina/amoxicilina empírica ante sospecha de mononucleosis infecciosa (riesgo de exantema característico asociado).',
      tx_intervencionista: 'No indicado de rutina salvo biopsia diagnóstica en casos dudosos.',
      criterios_uci: 'Complicaciones graves de la infección o enfermedad autoinmune subyacente según su propio contexto (ver los temas específicos correspondientes).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Según la gravedad de la enfermedad causal específica.',
      seguimiento_ambulatorio: 'Vigilancia de la resolución de la adenopatía en paralelo con el tratamiento de la causa identificada; reconsiderar biopsia si la adenopatía no regresa pese al tratamiento apropiado de la causa presuntamente identificada.',
      pronostico: 'Generalmente favorable una vez tratada la causa subyacente, aunque depende de la enfermedad específica (por ejemplo, el pronóstico del VIH no tratado difiere sustancialmente del de una mononucleosis infecciosa autolimitada).',
      algoritmo: ['Adenopatía en ≥2 regiones no contiguas + manifestaciones sistémicas → sospechar causa infecciosa/autoinmune', 'Serologías dirigidas (VIH, virus de Epstein-Barr) + estudio de tuberculosis si hay exposición epidemiológica', 'Marcadores autoinmunes si hay síntomas sugestivos de enfermedad sistémica', 'Tratamiento dirigido a la causa confirmada', 'Biopsia ganglionar solo si el diagnóstico no es concluyente o persiste la duda con malignidad']
    },
    {
      nombre: 'Linfadenopatía Generalizada por Neoplasia Diseminada',
      color: '#7a1f3d',
      definicion: 'Aumento de ≥2 regiones ganglionares no contiguas por infiltración neoplásica diseminada: leucemia (particularmente linfocítica), linfoma en estadio avanzado, o metástasis ganglionares diseminadas de un primario sólido distante; representa la categoría de mayor gravedad dentro de la linfadenopatía generalizada y requiere reconocimiento oportuno.',
      fisiopatologia: 'A diferencia de la hiperplasia reactiva policlonal, aquí el ganglio se agranda por infiltración de una población celular clonal (leucémica, linfomatosa, o metastásica) que reemplaza progresivamente la arquitectura ganglionar normal; la afectación de múltiples cadenas no contiguas simultáneamente refleja diseminación hematógena o linfática amplia de la enfermedad, un marcador de estadio avanzado con implicaciones pronósticas y terapéuticas sustanciales frente a la enfermedad localizada.',
      epidemiologia: 'Menos frecuente que las causas infecciosas/autoinmunes de linfadenopatía generalizada en el paciente joven, pero su probabilidad aumenta considerablemente con la edad; representa la manifestación de presentación en una proporción relevante de los linfomas y leucemias diagnosticados.',
      factores_riesgo: ['Edad avanzada', 'Síntomas B marcados y progresivos', 'Antecedente personal de neoplasia previa', 'Ausencia de una causa infecciosa/autoinmune identificable que explique el cuadro'],
      clinica: 'Adenopatías en múltiples regiones no contiguas, con frecuencia de consistencia dura o pétrea, indoloras, de crecimiento progresivo; síntomas B marcados (fiebre, sudoración nocturna profusa, pérdida de peso involuntaria); hallazgos asociados según el primario (esplenomegalia en leucemia/linfoma, síntomas del órgano de origen en metástasis de un primario sólido).',
      criterios_dx: 'Confirmación histológica por biopsia excisional del ganglio más accesible y representativo (preferido el de mayor tamaño o el de localización más segura para biopsiar), con inmunofenotipo y estudio molecular dirigido según los hallazgos.',
      laboratorio: 'Biometría hemática con frotis (citopenias, blastos circulantes, linfocitosis atípica), LDH y ácido úrico marcadamente elevados con frecuencia (alto recambio celular), estudio molecular/citogenético dirigido tras la confirmación histológica.',
      imagen: 'PET-TC de cuerpo completo para mapear la extensión de la enfermedad y orientar el estadiaje; TC dirigida si hay sospecha de un primario sólido específico.',
      complementarios: 'Aspirado/biopsia de médula ósea si hay sospecha de infiltración medular concomitante (leucemia, linfoma con afectación medular).',
      dx_diferencial: 'Linfadenopatía generalizada infecciosa/autoinmune (ver esa tarjeta, particularmente cuando el cuadro es menos florido o hay una causa infecciosa/autoinmune identificable), linfadenopatía localizada de alto riesgo (afectación de una sola región, ver esa tarjeta).',
      tx_medico: 'Referencia oportuna a oncología/hematología tras la confirmación histológica; el tratamiento específico depende por completo del diagnóstico definitivo (leucemia, linfoma específico, o el primario sólido identificado, ver los temas correspondientes de cada entidad).',
      tx_farmacologico: 'Específico según el diagnóstico histológico definitivo; no debe iniciarse tratamiento empírico sin diagnóstico tisular confirmado, salvo urgencias oncológicas que amenacen la vida (ver Complicaciones).',
      tx_intervencionista: 'Biopsia excisional diagnóstica; procedimientos adicionales según el estadiaje y el plan terapéutico específico de la neoplasia identificada.',
      criterios_uci: 'Urgencias oncológicas asociadas (síndrome de lisis tumoral, compresión medular, síndrome de vena cava superior, ver Complicaciones y los temas de Linfomas/Leucemia Aguda).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Según el diagnóstico específico establecido (ver los temas correspondientes de cada neoplasia).',
      seguimiento_hospitalario: 'Vigilancia de complicaciones agudas mientras se completa el estudio diagnóstico y de estadiaje.',
      seguimiento_ambulatorio: 'Manejo y seguimiento dirigidos por el equipo de oncología/hematología según el diagnóstico definitivo establecido.',
      pronostico: 'Depende enteramente del diagnóstico histológico específico y el estadio al momento del diagnóstico; el reconocimiento oportuno (evitando el retraso diagnóstico, ver Complicaciones) mejora sustancialmente las opciones terapéuticas disponibles.',
      algoritmo: ['Adenopatía generalizada + síntomas B marcados + edad avanzada → sospechar neoplasia diseminada', 'Biopsia excisional temprana del ganglio más accesible y representativo', 'PET-TC de cuerpo completo para estadiaje una vez confirmado el diagnóstico histológico', 'Referencia oportuna a oncología/hematología', 'Tratamiento específico según el diagnóstico definitivo, sin retraso']
    },
    {
      nombre: 'Complicaciones de la biopsia ganglionar',
      color: '#6b4a2e',
      definicion: 'Complicaciones asociadas al procedimiento diagnóstico central de este tema: sangrado local, infección de la herida quirúrgica, lesión de estructuras adyacentes (particularmente nervios en la biopsia de ganglios cervicales o axilares), y el resultado no concluyente que obliga a repetir el procedimiento o ampliar el estudio.',
      fisiopatologia: 'La biopsia excisional, aunque un procedimiento generalmente seguro, no está exenta de riesgo dado que con frecuencia se realiza cerca de estructuras vasculares y nerviosas relevantes (el nervio espinal accesorio en la cadena cervical posterior, el plexo braquial en la región axilar); el resultado no concluyente ocurre con mayor frecuencia cuando se opta por biopsia por aguja fina en lugar de excisional ante sospecha de linfoma, dado que esta última aporta la arquitectura tisular completa necesaria para la clasificación histológica precisa, mientras que la aguja fina con frecuencia solo aporta células aisladas insuficientes.',
      epidemiologia: 'Las complicaciones mayores de la biopsia excisional ganglionar son infrecuentes en manos experimentadas, pero el resultado no concluyente (que obliga a repetir el procedimiento) ocurre con una frecuencia no despreciable, particularmente cuando se elige inicialmente una técnica menos invasiva pero menos rentable diagnósticamente.',
      factores_riesgo: ['Localización cervical posterior o axilar (proximidad a estructuras nerviosas relevantes)', 'Uso de biopsia por aguja fina en lugar de excisional ante sospecha de linfoma', 'Trastorno de la coagulación no corregido antes del procedimiento', 'Ganglio de pequeño tamaño o de difícil acceso'],
      clinica: 'Sangrado o hematoma en el sitio quirúrgico, signos de infección de la herida (eritema, calor, salida de material purulento), parestesias o debilidad en el territorio del nervio potencialmente lesionado, o un informe de patología no concluyente que no permite establecer un diagnóstico definitivo.',
      criterios_dx: 'Evaluación clínica del sitio quirúrgico; revisión del informe de patología para confirmar si aporta material suficiente y diagnóstico concluyente.',
      laboratorio: 'Estudio de coagulación previo al procedimiento en el paciente con factores de riesgo hemorrágico conocidos.',
      imagen: 'Ecografía del sitio quirúrgico si hay sospecha de hematoma significativo o colección.',
      complementarios: 'Evaluación por cirugía/otorrinolaringología si hay sospecha de lesión nerviosa tras biopsia cervical o axilar.',
      dx_diferencial: 'Recurrencia o persistencia de la linfadenopatía original (no una complicación del procedimiento en sí, sino del proceso subyacente no resuelto).',
      tx_medico: 'Manejo conservador de hematomas pequeños; drenaje si el hematoma es grande o sintomático; antibióticos si hay infección de la herida confirmada.',
      tx_farmacologico: 'Antibióticos dirigidos si se confirma infección del sitio quirúrgico; analgesia según necesidad.',
      tx_intervencionista: 'Repetición de la biopsia (preferentemente excisional si la primera fue por aguja fina y resultó no concluyente) cuando el resultado inicial no permite establecer diagnóstico; drenaje quirúrgico de un hematoma significativo.',
      criterios_uci: 'Sangrado mayor con compromiso hemodinámico (infrecuente en este contexto).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia posoperatoria estándar según el procedimiento realizado.',
      seguimiento_ambulatorio: 'Revisión de la herida quirúrgica; seguimiento activo hasta contar con un resultado histológico definitivo y concluyente.',
      pronostico: 'Excelente para las complicaciones del procedimiento en sí; el resultado no concluyente retrasa pero no necesariamente empeora el pronóstico si se repite oportunamente con la técnica adecuada.',
      algoritmo: ['Planificar biopsia excisional (no aguja fina) desde el inicio si la sospecha clínica es de linfoma', 'Evaluar coagulación previa en el paciente con factores de riesgo hemorrágico', 'Vigilancia posoperatoria del sitio quirúrgico', 'Revisión del informe de patología: ¿material suficiente y diagnóstico concluyente?', 'Si no concluyente → repetir biopsia excisional sin demora injustificada']
    },
    {
      nombre: 'Síndrome de vena cava superior por adenopatía mediastínica masiva',
      color: '#7a1f3d',
      definicion: 'Urgencia oncológica producida por la compresión, invasión, o trombosis de la vena cava superior secundaria a una masa ganglionar mediastínica voluminosa (con frecuencia por linfoma o metástasis ganglionares diseminadas), que obstruye el retorno venoso de la cabeza, el cuello, y las extremidades superiores.',
      fisiopatologia: 'La vena cava superior es una estructura de pared delgada y baja presión rodeada de estructuras rígidas (esternón, tráquea, bronquio principal derecho, arteria pulmonar) dentro del mediastino, por lo que es particularmente vulnerable a la compresión externa por una masa ganglionar mediastínica voluminosa; la obstrucción del retorno venoso produce congestión progresiva de la cabeza, el cuello, y las extremidades superiores, con desarrollo de circulación colateral visible en la pared torácica como mecanismo compensatorio.',
      epidemiologia: 'Menos frecuente que las otras complicaciones de este tema, pero de reconocimiento crítico dado su potencial de compromiso respiratorio y neurológico si progresa sin tratamiento; con mayor frecuencia asociada a linfoma mediastínico voluminoso o a metástasis ganglionares mediastínicas de un primario pulmonar.',
      factores_riesgo: ['Linfadenopatía mediastínica voluminosa de cualquier causa neoplásica', 'Linfoma de crecimiento rápido con afectación mediastínica extensa', 'Presencia de un catéter venoso central que predisponga a trombosis asociada'],
      clinica: 'Edema facial y de cuello progresivo, particularmente notorio al despertar o al inclinarse hacia adelante; distensión de las venas del cuello y la pared torácica anterior; disnea; en casos graves, cefalea, alteración visual, o alteración del estado de conciencia por edema cerebral asociado.',
      criterios_dx: 'Diagnóstico clínico apoyado por TC de tórax con contraste, que confirma la compresión/obstrucción de la vena cava superior y caracteriza la masa causal.',
      laboratorio: 'No específico para el diagnóstico del síndrome en sí; dirigido según la sospecha de la neoplasia causal subyacente.',
      imagen: 'TC de tórax con contraste como estudio de elección, que confirma la obstrucción y permite planear la biopsia de la masa causal de forma segura.',
      complementarios: 'Biopsia de la masa mediastínica o de un sitio ganglionar periférico accesible, si está disponible, para evitar el riesgo asociado a un procedimiento mediastínico invasivo en un paciente con compromiso venoso ya establecido.',
      dx_diferencial: 'Otras causas de edema facial/cervical (angioedema, insuficiencia cardiaca derecha, trombosis venosa profunda de miembro superior aislada sin compresión extrínseca).',
      tx_medico: 'Elevar la cabecera de la cama para reducir la presión venosa cefálica; obtener el diagnóstico tisular antes de iniciar corticoides cuando sea clínicamente seguro hacerlo, dado que los corticoides pueden alterar la histología si se administran antes de la biopsia (ver el tema de Linfomas para el desarrollo completo de este principio).',
      tx_farmacologico: 'Corticoides en dosis altas si hay compromiso respiratorio o neurológico grave que no permite esperar a la biopsia; tratamiento sistémico definitivo dirigido a la neoplasia causal una vez confirmado el diagnóstico histológico.',
      tx_intervencionista: 'Colocación de una endoprótesis (stent) intravascular en la vena cava superior para alivio sintomático rápido en casos graves; radioterapia local dirigida a la masa causal en casos seleccionados.',
      criterios_uci: 'Compromiso respiratorio grave, alteración del estado de conciencia por edema cerebral asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia respiratoria y neurológica estrecha mientras se completa el estudio diagnóstico y se inicia el tratamiento definitivo.',
      seguimiento_ambulatorio: 'Seguimiento dirigido por el manejo específico de la neoplasia causal identificada.',
      pronostico: 'Depende de la neoplasia causal subyacente; el alivio sintomático con las medidas descritas es generalmente rápido, pero el pronóstico a largo plazo depende del diagnóstico y tratamiento definitivos de la causa.',
      algoritmo: ['Edema facial/cervical progresivo + distensión venosa → sospechar síndrome de vena cava superior', 'TC de tórax con contraste urgente para confirmar y caracterizar la masa causal', 'Elevar cabecera de la cama; obtener biopsia antes de corticoides si es clínicamente seguro', 'Compromiso respiratorio/neurológico grave → corticoides en dosis altas sin esperar biopsia', 'Endoprótesis intravascular para alivio rápido en casos graves; tratamiento definitivo según la neoplasia causal']
    },
    {
      nombre: 'Linfadenitis supurativa',
      color: '#8a6a1f',
      definicion: 'Infección bacteriana aguda del ganglio linfático con formación de absceso, que se distingue de la linfadenopatía reactiva simple por la presencia de signos inflamatorios agudos marcados (eritema, calor, fluctuación) y con frecuencia requiere drenaje además de antibióticos.',
      fisiopatologia: 'A diferencia de la hiperplasia reactiva simple (proliferación linfocitaria sin destrucción tisular), aquí un patógeno bacteriano (con frecuencia Staphylococcus aureus o Streptococcus del grupo A) infecta directamente el parénquima ganglionar, produciendo necrosis licuefactiva y formación de una colección purulenta franca dentro del ganglio, un proceso que requiere con frecuencia drenaje mecánico además de la cobertura antibiótica, dado que el absceso establecido responde de forma limitada a los antibióticos solos.',
      epidemiologia: 'Más frecuente en el paciente pediátrico (particularmente linfadenitis cervical aguda) que en el adulto, aunque ocurre en cualquier edad; con frecuencia secundaria a un foco de entrada identificable (infección dental, faríngea, o cutánea) en el territorio de drenaje de la cadena afectada.',
      factores_riesgo: ['Infección bacteriana activa en el territorio de drenaje de la cadena ganglionar afectada', 'Inmunosupresión de base', 'Higiene dental deficiente (linfadenitis cervical)', 'Lesión cutánea previa en el territorio de drenaje'],
      clinica: 'Ganglio marcadamente doloroso, con eritema y calor de la piel suprayacente, de crecimiento rápido (días), con frecuencia fluctuante a la palpación una vez formado el absceso; puede acompañarse de fiebre y malestar sistémico.',
      criterios_dx: 'Diagnóstico clínico basado en los signos inflamatorios agudos característicos; la ecografía confirma la presencia de una colección líquida (absceso) dentro del ganglio cuando el diagnóstico clínico es dudoso.',
      laboratorio: 'Biometría hemática con frecuencia muestra leucocitosis con neutrofilia; cultivo del material purulento obtenido por drenaje o aspiración para dirigir el ajuste antibiótico.',
      imagen: 'Ecografía para confirmar la presencia y extensión de la colección purulenta y guiar el drenaje si es necesario.',
      complementarios: 'Cultivo y antibiograma del material purulento drenado.',
      dx_diferencial: 'Linfadenopatía reactiva simple (sin los signos inflamatorios agudos marcados ni fluctuación), linfadenopatía de alto riesgo por malignidad (habitualmente indolora y sin signos inflamatorios agudos, a diferencia de la linfadenitis supurativa).',
      tx_medico: 'Antibióticos empíricos dirigidos a los patógenos más probables (cobertura para Staphylococcus aureus y Streptococcus del grupo A) como primera línea; drenaje si hay fluctuación o colección confirmada por imagen que no responde a antibióticos solos.',
      tx_farmacologico: 'Antibióticos empíricos con cobertura antiestafilocócica/antiestreptocócica, ajustados según el resultado del cultivo del material drenado cuando esté disponible.',
      tx_intervencionista: 'Drenaje quirúrgico o guiado por imagen del absceso una vez confirmado o ante fluctuación clínica clara, particularmente si no hay respuesta adecuada a los antibióticos solos en 48-72 horas.',
      criterios_uci: 'Sepsis grave secundaria a la infección, infrecuente pero posible en el paciente inmunocomprometido o con retraso en el tratamiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta clínica a las 48-72 horas de iniciado el tratamiento antibiótico para decidir sobre la necesidad de drenaje si no hay mejoría.',
      seguimiento_ambulatorio: 'Revisión de la herida si se realizó drenaje; confirmación de la resolución completa del proceso inflamatorio.',
      pronostico: 'Excelente con tratamiento antibiótico oportuno y drenaje cuando esté indicado; la demora en el drenaje de un absceso ya establecido prolonga la evolución y aumenta el riesgo de complicaciones locales.',
      algoritmo: ['Ganglio doloroso, eritematoso, de crecimiento rápido → sospechar linfadenitis supurativa', 'Ecografía si hay duda diagnóstica, para confirmar colección purulenta', 'Antibióticos empíricos con cobertura antiestafilocócica/antiestreptocócica', 'Evaluar fluctuación/respuesta clínica a las 48-72 horas', 'Sin mejoría o colección confirmada → drenaje quirúrgico o guiado por imagen, con cultivo dirigido']
    },
    {
      nombre: 'Retraso diagnóstico de malignidad',
      color: '#3d3d3d',
      definicion: 'Complicación del proceso diagnóstico mismo, no de una enfermedad biológica específica: la prolongación innecesaria de la observación expectante o de ciclos empíricos repetidos de antibióticos en un paciente que ya presenta 1 o más criterios de alarma, retrasando la biopsia y, con ella, el diagnóstico y tratamiento oportuno de una neoplasia subyacente.',
      fisiopatologia: 'No representa un mecanismo biológico de enfermedad, sino una falla del proceso de decisión clínica: la tendencia a favorecer un manejo conservador y no invasivo (comprensible dado que la mayoría de las linfadenopatías son benignas) puede, en el paciente equivocado, prolongar innecesariamente el tiempo entre la aparición de los primeros criterios de alarma y la obtención del diagnóstico histológico definitivo, permitiendo que una neoplasia subyacente progrese sin tratamiento durante ese intervalo.',
      epidemiologia: 'Un problema reconocido en la práctica clínica general, particularmente en el contexto de atención primaria donde la presión por evitar procedimientos invasivos innecesarios en un contexto de alta prevalencia de causas benignas puede, en el subgrupo minoritario con enfermedad grave, retrasar sistemáticamente el reconocimiento oportuno.',
      factores_riesgo: ['Manejo empírico repetido con antibióticos sin foco infeccioso claro que lo justifique', 'Ausencia de un criterio explícito y sistemático (como el checklist de alarma) para decidir cuándo biopsiar', 'Atribución prematura de la adenopatía a una causa benigna sin reevaluación en el tiempo esperado', 'Continuidad de atención fragmentada que dificulta el seguimiento longitudinal del mismo ganglio'],
      clinica: 'No tiene una presentación clínica propia; se manifiesta como la persistencia o progresión de los síntomas de la neoplasia subyacente (crecimiento ganglionar continuado, aparición de síntomas B, u otros signos de diseminación) durante el intervalo de manejo conservador prolongado e injustificado.',
      criterios_dx: 'Se reconoce retrospectivamente al constatar que 1 o más criterios de alarma estuvieron presentes durante un periodo prolongado antes de proceder a la biopsia diagnóstica.',
      laboratorio: 'No aplica de forma directa; el problema es de proceso de decisión, no de un hallazgo de laboratorio específico.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'La aplicación sistemática del checklist de criterios de alarma (calculadora) en cada evaluación de linfadenopatía es la medida más eficaz para prevenir esta complicación.',
      dx_diferencial: 'No aplica (es una complicación del proceso, no una entidad clínica con diagnóstico diferencial propio).',
      tx_medico: 'Aplicación sistemática y documentada de los criterios de alarma en cada consulta de seguimiento de una linfadenopatía; establecer de antemano un plazo explícito (4-6 semanas) para la reevaluación y decisión de biopsiar si no hay regresión.',
      tx_farmacologico: 'No aplica; evitar específicamente los ciclos repetidos de antibióticos empíricos sin un foco infeccioso identificado como sustituto de la decisión diagnóstica apropiada.',
      tx_intervencionista: 'Biopsia excisional sin demora adicional una vez reconocido el retraso.',
      criterios_uci: 'No aplica directamente, aunque la neoplasia subyacente no tratada puede eventualmente producir alguna de las urgencias oncológicas descritas en las otras tarjetas de este tema.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Instaurar un sistema explícito de seguimiento con fecha de reevaluación programada (no dejada a la iniciativa del paciente) para toda linfadenopatía en observación, de forma que la ausencia de regresión en el plazo esperado dispare automáticamente la indicación de biopsia.',
      pronostico: 'El retraso diagnóstico empeora el pronóstico de la neoplasia subyacente en proporción directa a su duración; la prevención mediante un enfoque sistemático y basado en criterios explícitos es completamente evitable.',
      algoritmo: ['Toda linfadenopatía en observación debe tener una fecha explícita de reevaluación (4-6 semanas)', 'En cada reevaluación, recalcular los criterios de alarma (calculadora), no solo la impresión subjetiva', 'Evitar ciclos repetidos de antibióticos empíricos sin foco infeccioso claro como sustituto de la decisión diagnóstica', 'Ante persistencia o progresión, o aparición de un nuevo criterio de alarma → biopsia sin demora adicional', 'Documentar explícitamente la decisión de observar vs. biopsiar en cada evaluación']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de la linfadenopatía se centra en el manejo de las urgencias oncológicas asociadas a una masa ganglionar voluminosa (síndrome de vena cava superior) y en la vigilancia perioperatoria de la biopsia diagnóstica.',
    parametros: ['Estado respiratorio y neurológico si hay sospecha de compresión de vena cava superior', 'Signos de infección o sangrado del sitio de biopsia', 'Resultado histológico de la biopsia una vez disponible'],
    criterios_uci_general: 'Compromiso respiratorio o neurológico grave por síndrome de vena cava superior, sepsis grave secundaria a linfadenitis supurativa no controlada.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica directamente; depende del diagnóstico específico establecido por la biopsia (ver los temas correspondientes de cada neoplasia).',
    prevencion: 'Aplicación sistemática de los criterios de alarma (calculadora) en cada evaluación de linfadenopatía, con una fecha explícita de reevaluación para toda adenopatía en observación, como medida central para evitar el retraso diagnóstico; biopsia excisional (no aguja fina) desde el inicio cuando la sospecha clínica sea de linfoma.'
  }
};

export const compCites = {
  'Linfadenopatía Localizada Reactiva/Benigna': [0, 2],
  'Linfadenopatía Localizada de Alto Riesgo': [0, 1, 13],
  'Linfadenopatía Generalizada Infecciosa/Autoinmune': [2, 4],
  'Linfadenopatía Generalizada por Neoplasia Diseminada': [1, 12],
  'Complicaciones de la biopsia ganglionar': [6, 11],
  'Síndrome de vena cava superior por adenopatía mediastínica masiva': [7, 8],
  'Linfadenitis supurativa': [9, 14],
  'Retraso diagnóstico de malignidad': [1, 13]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de Alarma para Biopsia': [0, 1, 13],
  'Tamaño ganglionar normal por región': [2, 4]
};
export const escalaCalc = { 'Criterios de Alarma para Biopsia': 'alarma-adenopatia' };
export const compGroups = [
  { name: 'Linfadenopatía por localización y riesgo', items: ['Linfadenopatía Localizada Reactiva/Benigna', 'Linfadenopatía Localizada de Alto Riesgo', 'Linfadenopatía Generalizada Infecciosa/Autoinmune', 'Linfadenopatía Generalizada por Neoplasia Diseminada'] },
  { name: 'Complicaciones transversales', items: ['Complicaciones de la biopsia ganglionar', 'Síndrome de vena cava superior por adenopatía mediastínica masiva', 'Linfadenitis supurativa', 'Retraso diagnóstico de malignidad'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas organizan el enfoque clínico de la linfadenopatía por localización (localizada vs. generalizada) y riesgo (bajo vs. alto); las siguientes 4 son complicaciones transversales, tanto de la enfermedad subyacente como del propio proceso diagnóstico.';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { title: 'LINFADENOPATÍA', color: '#2d6b5c', target: 'definicion' },
  branches: [
    { title: 'Por localización y riesgo (enfermedades)', sub: 'Localizada vs. generalizada', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Localizada Reactiva/Benigna', sub: 'Bajo riesgo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Localizada de Alto Riesgo', sub: 'Criterios de alarma', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Generalizada Infecciosa/Autoinmune', sub: 'VIH, VEB, tuberculosis', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Generalizada por Neoplasia Diseminada', sub: 'Leucemia, linfoma avanzado', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: 'De la enfermedad y del proceso diagnóstico', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Complicaciones de la biopsia ganglionar', sub: 'Sangrado, lesión nerviosa', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Síndrome de vena cava superior', sub: 'Adenopatía mediastínica masiva', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Linfadenitis supurativa', sub: 'Absceso, requiere drenaje', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Retraso diagnóstico de malignidad', sub: 'Falla del proceso', color: '#3d3d3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [0, 1], no_invasivos: [0, 2] };
export const clasificacionCite = [0, 1, 13];
export const seguimientoCite = [7, 8];
