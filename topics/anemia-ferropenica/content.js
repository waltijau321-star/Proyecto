// topics/anemia-ferropenica/content.js: Anemia Ferropénica (por pérdida crónica de sangre, por
// disminución de aporte/absorción, del embarazo, refractaria al hierro oral). Estructura idéntica
// al contrato del motor (misma forma que anemia-aplasica/anemias-hemoliticas-*). Sigue la
// convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo
// por tipo).

export const meta = {
  id: 'anemia-ferropenica',
  titulo: 'Anemia Ferropénica',
  subtitulo: 'Módulo 13 · Medicina Interna',
  accent: '#8c6b2d',
  accentDim: '#b89a5c'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const etapasHtml = `
<div style="display:flex;gap:10px;max-width:640px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
  <div style="flex:1;min-width:180px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#3f6b52;text-align:center;">ETAPA 1 · Depósitos agotados</div>
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:8px 10px;font-size:10.5px;color:var(--ink);text-align:center;width:100%;">Ferritina baja</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:9.5px;color:var(--ink-dim);text-align:center;width:100%;">Hierro sérico, TIBC, VCM y Hb todavía NORMALES</div>
    <div style="font-size:9.5px;color:var(--ink-faint);text-align:center;">Ferropenia sin anemia (latente)</div>
  </div>
  <div style="align-self:center;color:var(--ink-dim);font-size:18px;">→</div>
  <div style="flex:1;min-width:180px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#966b35;text-align:center;">ETAPA 2 · Eritropoyesis deficiente de hierro</div>
    <div style="background:#966b3533;border:1px solid #966b35;border-radius:6px;padding:8px 10px;font-size:10.5px;color:var(--ink);text-align:center;width:100%;">Ferritina baja + saturación de transferrina baja</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:9.5px;color:var(--ink-dim);text-align:center;width:100%;">VCM en el límite inferior, Hb todavía normal o límite</div>
    <div style="font-size:9.5px;color:var(--ink-faint);text-align:center;">Ya hay síntomas extrahematológicos posibles (pica, piernas inquietas)</div>
  </div>
  <div style="align-self:center;color:var(--ink-dim);font-size:18px;">→</div>
  <div style="flex:1;min-width:180px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#8c3a34;text-align:center;">ETAPA 3 · Anemia ferropénica franca</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:8px 10px;font-size:10.5px;color:var(--ink);text-align:center;width:100%;">Ferritina y saturación de transferrina bajas</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:9.5px;color:var(--ink-dim);text-align:center;width:100%;">VCM bajo (microcítica), Hb baja, RDW elevado</div>
    <div style="font-size:9.5px;color:var(--ink-faint);text-align:center;">Fatiga, disnea de esfuerzo, palidez</div>
  </div>
</div>
<div class="figure-grade-box">La ferritina cae primero, sola; la saturación de transferrina cae después, junto con ella; el VCM y la hemoglobina son los últimos en alterarse. Por eso una ferritina baja con VCM/Hb todavía normales no descarta ferropenia: la confirma en su etapa más temprana.</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La anemia ferropénica es la causa más frecuente de anemia en el mundo y la causa más común de anemia microcítica; resulta de un balance negativo sostenido entre el aporte/absorción de hierro y sus pérdidas o demandas, hasta agotar los depósitos (reflejados por la ferritina) y comprometer la síntesis de hemoglobina. A diferencia de otras anemias, el diagnóstico de ferropenia NUNCA es un punto final en sí mismo: siempre obliga a buscar activamente la causa subyacente, porque en el adulto (especialmente el varón y la mujer posmenopáusica) la causa más frecuente y potencialmente más grave es una pérdida crónica de sangre digestiva, con riesgo de que esa pérdida sea la primera manifestación de una neoplasia gastrointestinal oculta.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> Afecta hasta ~25% de la población mundial en algún grado, con mayor prevalencia en mujeres en edad reproductiva (pérdidas menstruales), embarazadas, y adultos mayores (donde la pérdida digestiva oculta predomina como causa). Es la causa más frecuente de anemia referida a consulta de medicina interna en el adulto.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Pérdida crónica de sangre</strong>: digestiva (la causa más frecuente en varones y mujeres posmenopáusicas: enfermedad ulcerosa péptica, uso de AINE/antiagregantes/anticoagulantes, neoplasia colorrectal o gástrica, angiodisplasia, enfermedad inflamatoria intestinal) y ginecológica (menorragia, la causa más frecuente en mujeres en edad reproductiva).</li>
    <li><strong>Disminución del aporte o la absorción</strong>: dieta insuficiente en hierro biodisponible (vegetarianismo/veganismo estricto sin suplementación), malabsorción (enfermedad celíaca, gastrectomía o cirugía bariátrica que excluye el duodeno, aclorhidria por inhibidores de bomba de protones crónicos, infección por Helicobacter pylori).</li>
    <li><strong>Aumento de la demanda</strong>: embarazo (particularmente segundo/tercer trimestre), lactancia, donación de sangre frecuente.</li>
    <li><strong>Refractaria al hierro oral</strong>: IRIDA (mutación bialélica de TMPRSS6, congénita) o refractariedad adquirida (malabsorción no reconocida, pérdida continua no controlada, mala adherencia).</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Menstruación abundante</li>
    <li>Embarazo</li>
    <li>Dieta vegetariana/vegana sin suplementación</li>
    <li>Uso crónico de AINE, antiagregantes o anticoagulantes</li>
    <li>Cirugía bariátrica previa</li>
    <li>Enfermedad celíaca conocida o no diagnosticada</li>
    <li>Edad avanzada (mayor prevalencia de neoplasia digestiva oculta)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> El hierro es esencial para la síntesis del grupo hemo de la hemoglobina; cuando el aporte/absorción no compensa las pérdidas o la demanda, el organismo agota primero los depósitos de hierro (ferritina baja, con eritropoyesis todavía normal: ferropenia sin anemia), y solo después, al no haber suficiente hierro disponible para la eritropoyesis, se compromete la síntesis de hemoglobina, produciendo eritrocitos progresivamente más pequeños (microcíticos) y pálidos (hipocrómicos).${figBlock('Imagen 1', 'Las 3 etapas de la ferropenia', etapasHtml)} La hepcidina, la hormona reguladora central del metabolismo del hierro (producida por el hígado), normalmente disminuye en la ferropenia para favorecer la absorción intestinal y la liberación de hierro desde los depósitos; en la anemia ferropénica refractaria genética (IRIDA), una mutación de TMPRSS6 impide esta supresión fisiológica de hepcidina, manteniendo el hierro "secuestrado" y bloqueando su absorción pese a los depósitos vacíos. Analogía: la hepcidina funciona como la llave que cierra o abre la puerta de salida del hierro hacia la sangre; en la ferropenia normal, el cuerpo "suelta" esa llave para dejar salir todo el hierro disponible, pero en la IRIDA la llave queda atascada en la posición de "cerrado" sin importar cuánta hambre de hierro tenga el cuerpo, así que el hierro oral que se traga nunca logra cruzar esa puerta.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde la ferropenia latente asintomática (solo detectable por laboratorio) hasta la anemia franca sintomática (fatiga, disnea de esfuerzo, palidez) y manifestaciones específicas de la ferropenia más allá de la anemia en sí (pica, síndrome de piernas inquietas, caída de cabello, coiloniquia, glositis).${figBlock('Imagen 2', 'Coiloniquia (uñas en cuchara)', `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Koilonychia_iron_deficiency_anemia.jpg/960px-Koilonychia_iron_deficiency_anemia.jpg" alt="Coiloniquia: uñas cóncavas en forma de cuchara, una manifestación extrahematológica clásica de la ferropenia crónica." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
<p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Coiloniquia (uñas en cuchara), una manifestación extrahematológica clásica de la ferropenia crónica, no siempre presente ni proporcional a la gravedad de la anemia. CHeitz, Wikimedia Commons, CC BY 2.0.</p>`)} El diagnóstico definitivo, el estudio etiológico dirigido y el manejo de cada forma se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Camaschella C. Iron-Deficiency Anemia. N Engl J Med. 2015;372(19):1832-1843.',
  'DeLoughery TG. Iron Deficiency Anemia. Med Clin North Am. 2017;101(2):319-332.',
  'Snook J, Bhala N, Beales ILP, et al. British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults. Gut. 2021;70(11):2030-2051.',
  'Ning S, Zeller MP. Management of iron deficiency. Hematology Am Soc Hematol Educ Program. 2019;2019(1):315-322.',
  'Auerbach M, Adamson JW. How we diagnose and treat iron deficiency anemia. Am J Hematol. 2016;91(1):31-38.',
  'Pasricha SR, Tye-Din J, Muckenthaler MU, Swinkels DW. Iron deficiency. Lancet. 2021;397(10270):233-248.',
  'Breymann C, Auerbach M. Iron deficiency in gynecology and obstetrics: clinical implications and management. Hematology Am Soc Hematol Educ Program. 2017;2017(1):152-159.',
  'Pavord S, Daru J, Prasannan N, et al. UK guidelines on the management of iron deficiency in pregnancy. Br J Haematol. 2020;188(6):819-830.',
  'Finberg KE, Heeney MM, Campagna DR, et al. Mutations in TMPRSS6 cause iron-refractory iron deficiency anemia (IRIDA). Nat Genet. 2008;40(5):569-571.',
  'Stoffel NU, Cercamondi CI, Brittenham G, et al. Iron absorption from oral iron supplements given on consecutive versus alternate days. Lancet Haematol. 2017;4(11):e524-e533.',
  'Wolf M, Rubin J, Achebe M, et al. Effects of Iron Isomaltoside vs Ferric Carboxymaltose on Hypophosphatemia in Iron-Deficiency Anemia (PHOSPHARE-IDA). JAMA. 2020;323(5):432-443.',
  'Novacek G. Plummer-Vinson syndrome. Orphanet J Rare Dis. 2006;1:36.',
  'Rimon E, Kagansky N, Kagansky M, et al. Are we giving too much iron? Low-dose iron therapy is effective in octogenarians. Am J Med. 2005;118(10):1142-1147.',
  'Reinisch W, Staun M, Bhandari S, Muñoz M. State of the iron: how to diagnose and efficiently treat iron deficiency anemia in inflammatory bowel disease. J Crohns Colitis. 2013;7(6):429-440.',
  'Anker SD, Comin Colet J, Filippatos G, et al. Ferric carboxymaltose in patients with heart failure and iron deficiency (FAIR-HF). N Engl J Med. 2009;361(25):2436-2448.',
  'Ganzoni AM. Eisen-Dextran intravenös: therapeutische und experimentelle Möglichkeiten. Schweiz Med Wochenschr. 1970;100(7):301-303.'
];

const perfilHierroTable = `
  <div class="table-wrap">
    <table>
      <thead><tr><th>Parámetro</th><th>Ferropenia</th><th>Anemia de enfermedad crónica</th><th>Rasgo talasémico</th></tr></thead>
      <tbody>
        <tr><td class="figure-org">Ferritina</td><td>Baja</td><td>Normal o alta (reactante de fase aguda)</td><td>Normal</td></tr>
        <tr><td class="figure-org">Hierro sérico</td><td>Bajo</td><td>Bajo</td><td>Normal</td></tr>
        <tr><td class="figure-org">TIBC</td><td>Alta</td><td>Baja o normal</td><td>Normal</td></tr>
        <tr><td class="figure-org">Saturación de transferrina</td><td>Baja (con frecuencia &lt;15%)</td><td>Baja, pero menos que en ferropenia</td><td>Normal</td></tr>
        <tr><td class="figure-org">RDW</td><td>Elevado</td><td>Normal</td><td>Normal (a diferencia de la ferropenia)</td></tr>
        <tr><td class="figure-org">Índice de Mentzer</td><td>&gt;13 (ver Escalas)</td><td>Variable</td><td>&lt;13</td></tr>
      </tbody>
    </table>
  </div>
  <div class="figure-grade-box">La saturación de transferrina y el RDW son los datos que mejor distinguen la ferropenia de la anemia de la enfermedad crónica cuando la ferritina es ambigua (por ejemplo, elevada como reactante de fase aguda pese a depósitos realmente bajos).</div>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Ferropenia sin anemia / anemia leve compensada',
      tituloB: 'Anemia ferropénica sintomática / manifestaciones extrahematológicas',
      compensada: 'Fatiga leve o ausente, sin síntomas específicos; puede haber ferropenia (ferritina baja) sin anemia manifiesta (etapa más temprana, ver Imagen 1), detectada de forma incidental en un perfil de hierro solicitado por otro motivo. Palidez leve si hay anemia leve concomitante.',
      descompensada: 'Fatiga marcada, disnea de esfuerzo, palpitaciones, palidez mucocutánea; manifestaciones específicas de la ferropenia más allá de la anemia (pica, con frecuencia por hielo -pagofagia-, tierra o almidón; síndrome de piernas inquietas; caída de cabello; coiloniquia -uñas en cuchara-; glositis atrófica y queilitis angular; disfagia si hay membranas esofágicas asociadas, ver el síndrome de Plummer-Vinson en Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con índices eritrocitarios', utilidad: 'Anemia microcítica (VCM bajo) e hipocrómica (HCM bajo), con amplitud de distribución eritrocitaria (RDW) elevada (refleja la anisocitosis, un dato que ayuda a distinguir de la talasemia, ver Tabla 1); reticulocitos bajos o inapropiadamente normales.' },
      { prueba: 'Perfil de hierro completo (ferritina, hierro sérico, TIBC, saturación de transferrina)', utilidad: `Ferritina baja (el marcador más sensible y específico de depósitos agotados, aunque es un reactante de fase aguda que puede estar falsamente normal/elevado en inflamación/infección concurrente); hierro sérico bajo, TIBC elevada, saturación de transferrina baja (&lt;20%, con frecuencia &lt;15%).${figBlock('Tabla 1', 'Perfil de hierro: ferropenia vs. enfermedad crónica vs. talasemia', perfilHierroTable)}` },
      { prueba: 'Índice de Mentzer (VCM/recuento de eritrocitos, con calculadora)', utilidad: 'Ayuda a distinguir la ferropenia del rasgo talasémico cuando la anemia microcítica es leve y el cuadro no es clínicamente obvio (ver Escalas).' },
      { prueba: 'Frotis de sangre periférica', utilidad: 'Microcitosis, hipocromía, anisocitosis y poiquilocitosis (incluyendo "células en lápiz", eritrocitos alargados y estrechos característicos de la ferropenia marcada).' }
    ],
    no_invasivos: [
      { metodo: 'Fórmula de Ganzoni (con calculadora)', interpretacion: 'Estima el déficit total de hierro corporal para calcular la dosis de reposición de hierro intravenoso.', cutoff: 'Peso × (Hb objetivo − Hb actual) × 2.4 + depósito' },
      { metodo: 'Serología de enfermedad celíaca (anti-transglutaminasa IgA + IgA total)', interpretacion: 'Parte del estudio etiológico de rutina, incluso sin síntomas digestivos floridos.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Endoscopia digestiva alta y colonoscopia', hallazgos: 'Estudio de primera línea en todo varón adulto y mujer posmenopáusica con anemia ferropénica sin causa evidente, para descartar una fuente de pérdida digestiva oculta, incluida neoplasia.' },
      { modalidad: 'Cápsula endoscópica / enteroscopia', hallazgos: 'Si la endoscopia alta y la colonoscopia son negativas y persiste la sospecha de pérdida digestiva de intestino delgado.' },
      { modalidad: 'Ecografía pélvica', hallazgos: 'Si se sospecha causa ginecológica estructural (miomatosis, pólipos endometriales) como fuente de la pérdida sanguínea.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'El perfil de hierro (ferritina, saturación de transferrina) es el eje diagnóstico central; el índice de Mentzer ayuda en la anemia microcítica leve dudosa, y la fórmula de Ganzoni traduce el déficit a una dosis concreta de hierro intravenoso cuando la vía oral no es suficiente o no es tolerada.',
    escalas: [
      { nombre: 'Perfil de hierro (interpretación por etapas)', componentes: 'Ferritina, hierro sérico, TIBC, saturación de transferrina.', formula: 'Interpretación categórica combinada, ver Tabla 1 en Diagnóstico.', interpretacion: 'Ferritina baja aislada (depósitos agotados, etapa más temprana) → saturación de transferrina también baja (eritropoyesis ya deficiente de hierro) → VCM y hemoglobina bajos (anemia franca, ver Imagen 1 en Definición).' },
      { nombre: 'Índice de Mentzer', componentes: 'VCM (fL) dividido entre el recuento de eritrocitos (millones/µL). Calculadora disponible más abajo.', formula: 'VCM / eritrocitos.', interpretacion: '&lt;13: sugestivo de rasgo talasémico. ≥13: sugestivo de anemia ferropénica. Orientador, no diagnóstico: confirmar con perfil de hierro y/o electroforesis de hemoglobina.' },
      { nombre: 'Fórmula de Ganzoni', componentes: 'Peso corporal, hemoglobina actual, hemoglobina objetivo, depósito de hierro a reponer. Calculadora disponible más abajo.', formula: 'Déficit total (mg) = peso (kg) × (Hb objetivo − Hb actual, g/dL) × 2.4 + depósito (mg, habitualmente 500 mg en el adulto ≥35 kg).', interpretacion: 'El resultado es la dosis TOTAL de hierro elemental a administrar por vía intravenosa, que se fracciona en una o varias sesiones según la formulación y su dosis máxima por infusión.' },
      { nombre: 'Puntos de corte de anemia en el embarazo (OMS, ajustados por trimestre)', componentes: 'Hemoglobina materna según trimestre gestacional.', formula: 'Categórico por trimestre.', interpretacion: '&lt;11 g/dL en el primer y tercer trimestre; &lt;10.5 g/dL en el segundo trimestre (por la hemodilución fisiológica máxima). Ver la tarjeta de ferropenia del embarazo en Complicaciones.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Ferropenia por pérdida crónica de sangre',
      color: '#7a1f3d',
      definicion: 'Anemia ferropénica producida por pérdida crónica y sostenida de sangre que supera la capacidad de reposición de hierro por la dieta; la causa más frecuente de anemia ferropénica en el adulto, predominantemente digestiva en varones y mujeres posmenopáusicas, y ginecológica (menorragia) en mujeres en edad reproductiva.',
      fisiopatologia: 'Cada mililitro de sangre perdida contiene aproximadamente 0.5 mg de hierro; una pérdida crónica de bajo volumen pero sostenida en el tiempo (con frecuencia clínicamente inaparente, "oculta") agota progresivamente los depósitos de hierro más rápido de lo que la dieta puede reponerlos, incluso cuando la pérdida por evento aislado sería, en sí misma, hemodinámicamente insignificante.',
      epidemiologia: 'Es la causa más frecuente de anemia ferropénica en el varón adulto y en la mujer posmenopáusica; en este grupo, una proporción relevante de los casos sin causa evidente al estudio inicial tienen una neoplasia gastrointestinal oculta como causa subyacente. La menorragia es la causa más frecuente en la mujer en edad reproductiva.',
      factores_riesgo: ['Uso crónico de AINE, antiagregantes o anticoagulantes', 'Enfermedad ulcerosa péptica o infección por Helicobacter pylori', 'Antecedente familiar o personal de neoplasia colorrectal', 'Menorragia no evaluada', 'Edad avanzada (mayor prevalencia de neoplasia digestiva oculta y angiodisplasia)'],
      clinica: 'Los síntomas de la anemia (fatiga, disnea de esfuerzo, palidez) predominan sobre los síntomas de la causa de base, que con frecuencia es clínicamente silenciosa (sangrado digestivo oculto, sin melena ni hematoquecia evidentes); interrogar dirigidamente sobre cambios del hábito intestinal, pérdida de peso, y patrón menstrual.',
      criterios_dx: 'Anemia microcítica hipocrómica con ferritina baja y saturación de transferrina baja, más la identificación de una fuente de pérdida crónica de sangre mediante el estudio dirigido (endoscopia digestiva alta y colonoscopia en el adulto sin causa ginecológica evidente).',
      laboratorio: 'Perfil de hierro completo (ferritina baja, hierro sérico bajo, TIBC elevada, saturación de transferrina baja); la prueba de sangre oculta en heces tiene utilidad limitada como tamizaje único (un resultado negativo no descarta una fuente digestiva).',
      imagen: 'Endoscopia digestiva alta y colonoscopia como estudio de primera línea en el varón adulto y la mujer posmenopáusica; cápsula endoscópica si ambas son negativas y persiste la sospecha de pérdida digestiva de intestino delgado; ecografía pélvica si se sospecha causa ginecológica estructural.',
      complementarios: 'Evaluación ginecológica dirigida (incluida la posibilidad de biopsia endometrial según edad y factores de riesgo) en la mujer con menorragia como causa sospechada.',
      dx_diferencial: 'Anemia de la enfermedad crónica (ferritina normal/elevada, saturación de transferrina con frecuencia menos reducida, contexto de enfermedad inflamatoria/infecciosa/neoplásica de base), rasgo talasémico (índice de Mentzer bajo, electroforesis de hemoglobina, ver Escalas).',
      tx_medico: 'Corrección de la causa de base siempre que sea identificable y tratable (erradicación de Helicobacter pylori, suspensión o protección gástrica si el AINE/antiagregante es indispensable, manejo ginecológico de la menorragia).',
      tx_farmacologico: 'Hierro oral (sulfato ferroso u otra sal) como primera línea si la vía oral es tolerada y no hay malabsorción; hierro intravenoso (dosis calculada por la fórmula de Ganzoni, ver Escalas) si hay intolerancia oral, malabsorción, pérdida continua que supera la capacidad de reposición oral, o necesidad de corrección más rápida.',
      tx_intervencionista: 'Tratamiento endoscópico o quirúrgico dirigido a la fuente de sangrado identificada (polipectomía, resección de neoplasia, tratamiento de angiodisplasia).',
      criterios_uci: 'Anemia sintomática grave con inestabilidad hemodinámica por sangrado agudo sobreañadido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la transfusión si se requiere por anemia sintomática grave, coordinación del estudio endoscópico.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática y el perfil de hierro a las 4-6 semanas de iniciado el tratamiento (elevación esperada de hemoglobina ~1-2 g/dL en ese plazo); continuar el hierro varios meses después de normalizada la hemoglobina para replecionar los depósitos.',
      pronostico: 'Favorable una vez identificada y corregida la causa de base; la falta de respuesta al tratamiento obliga a reconsiderar el diagnóstico o la adherencia, no a asumir simplemente "hierro insuficiente".',
      algoritmo: ['Anemia microcítica hipocrómica + ferritina baja → confirma ferropenia', 'Varón adulto o mujer posmenopáusica sin causa evidente → endoscopia digestiva alta + colonoscopia', 'Mujer en edad reproductiva con menorragia → evaluación ginecológica dirigida', 'Fuente identificada → tratamiento dirigido de la causa + hierro oral o IV según tolerancia', 'Sin fuente identificada tras estudio completo → cápsula endoscópica de intestino delgado']
    },
    {
      nombre: 'Ferropenia por disminución del aporte o la absorción',
      color: '#3d5a73',
      definicion: 'Anemia ferropénica producida por ingesta insuficiente de hierro biodisponible o por malabsorción intestinal del hierro dietético/suplementado, en ausencia de pérdida sanguínea aumentada como causa principal.',
      fisiopatologia: 'El hierro dietético se absorbe predominantemente en el duodeno y el yeyuno proximal, en un proceso que requiere un pH gástrico ácido (para reducir el hierro férrico a ferroso, la forma absorbible) y la integridad de la mucosa duodenal. La dieta vegetariana/vegana estricta aporta predominantemente hierro no hemo, de biodisponibilidad sustancialmente menor que el hierro hemo de origen animal. La enfermedad celíaca produce atrofia vellositaria duodenal que reduce la superficie absortiva; la gastrectomía o la cirugía bariátrica con reconstrucción que excluye el duodeno (bypass gástrico en Y de Roux) elimina el sitio anatómico principal de absorción; la aclorhidria (uso crónico de inhibidores de bomba de protones, gastritis atrófica autoinmune, infección por Helicobacter pylori) impide la reducción del hierro férrico a la forma absorbible.',
      epidemiologia: 'Relevante en poblaciones vegetarianas/veganas sin suplementación adecuada, en el paciente con cirugía bariátrica previa (donde el déficit de hierro es una de las deficiencias nutricionales más frecuentes y persistentes a largo plazo), y en la enfermedad celíaca, que puede debutar únicamente con ferropenia sin síntomas digestivos evidentes.',
      factores_riesgo: ['Dieta vegetariana o vegana estricta sin suplementación', 'Enfermedad celíaca diagnosticada o no reconocida', 'Cirugía bariátrica previa (particularmente bypass gástrico)', 'Uso crónico de inhibidores de bomba de protones', 'Infección por Helicobacter pylori', 'Gastritis atrófica autoinmune'],
      clinica: 'Igual que el cuadro general de ferropenia (fatiga, disnea de esfuerzo, manifestaciones específicas); interrogar dirigidamente sobre patrón dietético, antecedente quirúrgico gástrico/bariátrico, y síntomas digestivos sugestivos de malabsorción (diarrea crónica, distensión, pérdida de peso) que orienten hacia enfermedad celíaca.',
      criterios_dx: 'Ferropenia documentada (ferritina baja, saturación de transferrina baja) en un paciente sin evidencia de pérdida sanguínea aumentada, con un factor de riesgo dietético o de malabsorción identificado o descubierto en el estudio dirigido.',
      laboratorio: 'Perfil de hierro completo; serología de enfermedad celíaca (anti-transglutaminasa IgA, con IgA total sérica para excluir un falso negativo por deficiencia selectiva de IgA) como parte del estudio etiológico de rutina, incluso sin síntomas digestivos floridos.',
      imagen: 'Endoscopia digestiva alta con biopsia duodenal si la serología celíaca es positiva o la sospecha clínica persiste pese a serología negativa; estudio de la anatomía posquirúrgica en el paciente con cirugía bariátrica previa si hay sospecha de complicación adicional.',
      complementarios: 'Prueba de aliento o antígeno fecal para Helicobacter pylori.',
      dx_diferencial: 'Ferropenia por pérdida crónica de sangre concomitante (ambos mecanismos pueden coexistir, particularmente en el paciente con enfermedad celíaca y sangrado digestivo asociado), anemia de la enfermedad crónica.',
      tx_medico: 'Dieta rica en hierro hemo (carnes rojas, vísceras) cuando sea culturalmente/personalmente aceptable, o educación sobre combinaciones que mejoran la absorción del hierro no hemo (vitamina C concomitante) y evitan inhibidores (té, café, calcio en la misma comida) en el paciente vegetariano/vegano.',
      tx_farmacologico: 'Hierro oral como primera línea si la absorción intestinal está preservada (dieta insuficiente sin malabsorción verdadera); hierro intravenoso como primera línea (no de rescate) en la malabsorción estructural establecida (enfermedad celíaca activa, poscirugía bariátrica con anatomía que excluye el duodeno), dado que el hierro oral tiene eficacia limitada en ese contexto.',
      tx_intervencionista: 'Ninguno específico más allá del tratamiento de la causa de base (dieta sin gluten estricta en la enfermedad celíaca, erradicación de Helicobacter pylori).',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Reevaluación de la respuesta a las 4-6 semanas; en la enfermedad celíaca, vigilancia de la adherencia a la dieta sin gluten y de la normalización serológica/histológica a mediano plazo.',
      pronostico: 'Favorable con la corrección de la causa (dieta, erradicación de H. pylori) o el uso de hierro IV cuando la malabsorción es estructural y no corregible; la enfermedad celíaca bien tratada normaliza la absorción de hierro en la mayoría de los casos.',
      algoritmo: ['Ferropenia sin evidencia de pérdida sanguínea aumentada → investigar aporte dietético y absorción', 'Serología de enfermedad celíaca de rutina en el estudio etiológico', 'Antecedente de cirugía bariátrica/gástrica → considerar hierro IV de primera línea', 'Serología celíaca positiva → biopsia duodenal confirmatoria + dieta sin gluten estricta', 'Erradicar Helicobacter pylori si está presente']
    },
    {
      nombre: 'Ferropenia del embarazo',
      color: '#5c3d73',
      definicion: 'Anemia ferropénica producida por el aumento fisiológico de la demanda de hierro durante el embarazo (expansión del volumen eritrocitario materno, crecimiento fetal y placentario, y preparación para la pérdida sanguínea del parto), particularmente marcada en el segundo y tercer trimestre.',
      fisiopatologia: 'El embarazo aumenta los requerimientos de hierro de forma progresiva a lo largo de la gestación, con un requerimiento acumulado total que supera ampliamente las reservas habituales de una mujer con estado de hierro previo normal, y mucho más si la mujer inicia el embarazo con depósitos ya bajos (frecuente, dado que la ferropenia previa es común en mujeres en edad reproductiva por pérdidas menstruales). La hemodilución fisiológica del embarazo (expansión del volumen plasmático proporcionalmente mayor que la del volumen eritrocitario) contribuye a la caída de la hemoglobina medida, por lo que los puntos de corte diagnósticos de anemia se ajustan por trimestre (ver Escalas).',
      epidemiologia: 'La ferropenia es la causa más frecuente de anemia en el embarazo; su prevalencia aumenta progresivamente conforme avanza la gestación si no hay suplementación adecuada.',
      factores_riesgo: ['Embarazo múltiple', 'Intervalo intergenésico corto', 'Ferropenia o anemia previas al embarazo no corregidas', 'Hiperémesis gravídica con ingesta oral limitada', 'Nivel socioeconómico bajo con acceso limitado a suplementación'],
      clinica: 'Fatiga (con frecuencia atribuida inicialmente al embarazo mismo, lo que puede retrasar el reconocimiento), disnea de esfuerzo, palidez; la anemia materna grave no corregida se asocia a mayor riesgo de parto pretérmino, bajo peso al nacer, y peor tolerancia materna a la pérdida sanguínea del parto.',
      criterios_dx: 'Hemoglobina por debajo del punto de corte ajustado por trimestre (ver Escalas), con perfil de hierro compatible con ferropenia.',
      laboratorio: 'Perfil de hierro completo; tamizaje universal de hemoglobina/ferritina recomendado en el control prenatal de rutina, dado que la ferropenia asintomática es frecuente y tratable de forma preventiva.',
      imagen: 'Ninguno específico salvo indicación obstétrica no relacionada con la ferropenia en sí.',
      complementarios: 'Ninguno adicional específico salvo descartar una causa concomitante si la anemia es desproporcionada al embarazo o no responde a la suplementación esperada.',
      dx_diferencial: 'Anemia dilucional fisiológica del embarazo sin verdadera ferropenia (ferritina normal), otras anemias del embarazo (megaloblástica por deficiencia de folato/B12, menos frecuente con la fortificación alimentaria actual).',
      tx_medico: 'Suplementación universal de hierro oral profiláctica recomendada durante el embarazo en la mayoría de las guías, independientemente de la hemoglobina basal, dado el aumento fisiológico y predecible de la demanda.',
      tx_farmacologico: 'Hierro oral como primera línea si es tolerado; hierro intravenoso considerado en el segundo/tercer trimestre si hay intolerancia oral grave, anemia moderada-grave que requiere corrección más rápida antes del parto, o falta de respuesta al hierro oral, con un perfil de seguridad establecido en el embarazo a partir del segundo trimestre para las formulaciones modernas.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario reservada para la anemia grave sintomática cercana al término o con inestabilidad, no como manejo de rutina de la ferropenia del embarazo.',
      criterios_uci: 'Anemia grave con inestabilidad hemodinámica, particularmente periparto.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la hemoglobina periparto, particularmente si hubo anemia moderada-grave no corregida antes del parto.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática y el perfil de hierro en cada control prenatal según el esquema local; continuar suplementación en el puerperio si persiste la ferropenia.',
      pronostico: 'Favorable con suplementación oportuna; la anemia materna grave no corregida se asocia a peores desenlaces obstétricos y neonatales, lo que respalda el tamizaje y la suplementación universal.',
      algoritmo: ['Hemoglobina por debajo del punto de corte ajustado por trimestre → confirmar ferropenia con perfil de hierro', 'Suplementación universal de hierro oral en el control prenatal, independientemente de la hemoglobina basal', 'Intolerancia oral grave o anemia moderada-grave → hierro intravenoso desde el segundo trimestre', 'Anemia grave cercana al término → transfusión si hay inestabilidad o riesgo periparto significativo']
    },
    {
      nombre: 'Ferropenia refractaria al hierro oral',
      color: '#5c6b8c',
      definicion: 'Falta de respuesta hematológica adecuada (incremento de hemoglobina &lt;1 g/dL) tras 4-6 semanas de hierro oral a dosis e intervalo adecuados, en ausencia de una causa evidente de fracaso terapéutico como mala adherencia o pérdida continua no controlada; incluye la forma genética verdadera (IRIDA, por mutación bialélica de TMPRSS6) y, más frecuentemente, causas adquiridas de refractariedad aparente.',
      fisiopatologia: 'En la IRIDA, la mutación de TMPRSS6 (que codifica la matriptasa-2, un regulador negativo de la producción de hepcidina) impide la supresión fisiológica de la hepcidina que normalmente ocurre en la ferropenia, manteniendo niveles inapropiadamente elevados que bloquean tanto la absorción intestinal de hierro (por degradación de la ferroportina duodenal) como la liberación de hierro desde los macrófagos, produciendo una ferropenia que no responde al hierro oral y responde solo parcialmente al hierro intravenoso. En las causas adquiridas de refractariedad aparente, el mecanismo es variable: malabsorción no reconocida, pérdida continua de sangre que supera la tasa de reposición oral posible, mala adherencia (efectos gastrointestinales del hierro oral), o interacción con alimentos/fármacos que reducen la absorción (calcio, inhibidores de bomba de protones, café/té concomitantes).',
      epidemiologia: 'La IRIDA verdadera es rara; la refractariedad adquirida es mucho más frecuente en la práctica clínica y, en la gran mayoría de los casos, tiene una causa identificable y corregible al estudio dirigido.',
      factores_riesgo: ['Antecedente familiar de anemia ferropénica de difícil manejo desde la infancia (sugestivo de IRIDA)', 'Enfermedad celíaca o gastritis atrófica no diagnosticadas', 'Pérdida sanguínea continua no controlada', 'Uso concomitante de inhibidores de bomba de protones o suplementos de calcio junto con el hierro oral', 'Mala tolerancia gastrointestinal al hierro oral con adherencia deficiente no reconocida (ver esa complicación)'],
      clinica: 'Persistencia de los síntomas de ferropenia pese al tratamiento oral aparentemente adecuado; en la IRIDA, el patrón característico es anemia microcítica hipocrómica grave de inicio en la infancia, con ferritina baja-normal y saturación de transferrina muy baja, refractaria de por vida al hierro oral.',
      criterios_dx: 'Ausencia de respuesta hematológica adecuada tras 4-6 semanas de hierro oral a dosis correcta, confirmada la adherencia y descartada una pérdida continua no controlada; el estudio genético de TMPRSS6 confirma la IRIDA en el caso sugestivo (inicio en la infancia, antecedente familiar, refractariedad también al hierro IV en su forma más clásica aunque con mejor respuesta que al oral).',
      laboratorio: 'Perfil de hierro de control tras el ensayo terapéutico; en la sospecha de IRIDA, hepcidina sérica (inapropiadamente elevada para el grado de ferropenia) y estudio genético dirigido a TMPRSS6.',
      imagen: 'Endoscopia digestiva alta con biopsia duodenal si no se ha descartado enfermedad celíaca u otra causa de malabsorción.',
      complementarios: 'Revisión estructurada de la técnica de administración (con el estómago vacío o con vitamina C, evitando calcio/antiácidos/té-café concomitantes) antes de concluir refractariedad verdadera.',
      dx_diferencial: 'Mala adherencia no reconocida (la causa más frecuente de "refractariedad" aparente), pérdida continua de sangre no controlada, malabsorción no diagnosticada (enfermedad celíaca), anemia de la enfermedad crónica superpuesta (ferritina inapropiadamente normal/elevada para el contexto).',
      tx_medico: 'Optimizar la técnica de administración del hierro oral (dosis en días alternos en vez de diaria, que mejora la absorción fraccional al evitar el pico de hepcidina inducido por cada dosis, una estrategia respaldada por evidencia reciente) antes de escalar a hierro IV.',
      tx_farmacologico: 'Hierro intravenoso como siguiente paso en la refractariedad confirmada al hierro oral optimizado; en la IRIDA verdadera, el hierro IV logra una respuesta parcial (mejora la hemoglobina sin normalizarla completamente en muchos casos), reflejando que el bloqueo de hepcidina también limita la utilización del hierro parenteral, aunque en menor grado que la del hierro oral.',
      tx_intervencionista: 'Ninguno específico más allá del tratamiento de la causa identificada si la refractariedad es adquirida (por ejemplo, control endoscópico/quirúrgico de una fuente de sangrado persistente).',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Reevaluación seriada del perfil de hierro tras cada ajuste terapéutico, asesoría genética familiar si se confirma IRIDA.',
      pronostico: 'La refractariedad adquirida tiene buen pronóstico una vez identificada y corregida la causa; la IRIDA verdadera requiere manejo de por vida con hierro IV periódico, con una respuesta hematológica habitualmente parcial pero clínicamente útil.',
      algoritmo: ['Sin respuesta a hierro oral tras 4-6 semanas → confirmar adherencia y técnica de administración antes de asumir refractariedad', 'Descartar pérdida continua no controlada y malabsorción no diagnosticada (serología celíaca)', 'Optimizar esquema (días alternos) antes de escalar', 'Persiste sin respuesta → hierro intravenoso', 'Inicio en la infancia + antecedente familiar + refractaria también a hierro IV → estudio genético de TMPRSS6 (IRIDA)']
    },
    {
      nombre: 'Síndrome de Plummer-Vinson',
      color: '#6b4a2e',
      definicion: 'Complicación rara de la ferropenia crónica grave y prolongada, caracterizada por la tríada de disfagia, membranas esofágicas (predominantemente en el esófago cervical superior) y anemia ferropénica; también llamado síndrome de Paterson-Kelly-Brown.',
      fisiopatologia: 'El mecanismo exacto por el que la ferropenia crónica grave produce membranas esofágicas no está completamente esclarecido, pero se postula que la deficiencia de hierro compromete la integridad de las enzimas dependientes de hierro necesarias para el recambio normal del epitelio mucoso, favoreciendo atrofia de la mucosa esofágica superior y la formación de membranas de tejido fibroso submucoso que protruyen hacia la luz.',
      epidemiologia: 'Muy raro en la actualidad en países con acceso a diagnóstico y tratamiento oportuno de la ferropenia; predomina en mujeres de edad media, con una asociación reconocida (aunque de causalidad debatida) con un mayor riesgo de carcinoma escamoso de esófago/hipofaringe a largo plazo.',
      factores_riesgo: ['Ferropenia crónica grave y prolongada, no corregida durante años', 'Sexo femenino', 'Edad media (40-70 años)'],
      clinica: 'Disfagia progresiva, predominantemente para sólidos, de localización cervical alta; glositis atrófica y queilitis angular acompañantes (manifestaciones extrahematológicas de la ferropenia crónica grave, ver Definición); la disfagia puede preceder al diagnóstico de la ferropenia de base.',
      criterios_dx: 'Confirmación endoscópica o por esofagograma con bario de la membrana esofágica cervical, en el contexto de ferropenia crónica grave documentada, tras excluir otras causas de disfagia alta (anillo de Schatzki, estenosis péptica, neoplasia).',
      laboratorio: 'Perfil de hierro documentando ferropenia grave y de larga evolución.',
      imagen: `Esofagograma con bario (muestra la membrana como un defecto de llenado delgado en el esófago cervical) o endoscopia digestiva alta directa, que además permite biopsia si hay sospecha de transformación maligna.${figBlock('Imagen 3', 'Membrana esofágica cervical', `
      <svg viewBox="0 0 480 260" role="img" aria-labelledby="pv-title pv-desc" style="width:100%;max-width:380px;display:block;margin:0 auto;">
        <title id="pv-title">Esófago normal vs. membrana esofágica cervical (síndrome de Plummer-Vinson)</title>
        <desc id="pv-desc">Comparación esquemática de un esófago cervical normal, con luz amplia y uniforme, frente a un esófago con una membrana delgada de tejido fibroso que protruye hacia la luz en el síndrome de Plummer-Vinson, estrechando el paso.</desc>
        <text x="120" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">NORMAL</text>
        <text x="360" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">MEMBRANA CERVICAL</text>
        <g>
          <path d="M 90 40 C 80 90, 80 170, 90 220 L 150 220 C 160 170, 160 90, 150 40 Z" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2.5"/>
          <text x="120" y="245" text-anchor="middle" fill="var(--ink-dim)" font-size="10">Luz amplia y uniforme</text>
        </g>
        <g transform="translate(240,0)">
          <path d="M 90 40 C 80 90, 80 170, 90 220 L 150 220 C 160 170, 160 90, 150 40 Z" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2.5"/>
          <path d="M 90 75 Q 120 95 150 75" fill="none" stroke="#8c3a34" stroke-width="4"/>
          <text x="185" y="80" fill="#8c3a34" font-size="10" font-weight="600">Membrana</text>
          <text x="120" y="245" text-anchor="middle" fill="var(--ink-dim)" font-size="10">Estrechamiento de la luz</text>
        </g>
      </svg>`)}`,
      complementarios: 'Biopsia de cualquier lesión sospechosa dado el riesgo aumentado de carcinoma escamoso asociado a largo plazo.',
      dx_diferencial: 'Anillo de Schatzki (unión gastroesofágica, no cervical), estenosis péptica por reflujo (contexto clínico distinto), acalasia (manometría esofágica), carcinoma esofágico/hipofaríngeo (biopsia).',
      tx_medico: 'Reposición agresiva de hierro (con frecuencia intravenosa dada la gravedad y cronicidad de la ferropenia en este síndrome) como tratamiento de primera línea; la disfagia mejora en una proporción relevante de los casos solo con la corrección de la ferropenia, sin necesidad de intervención mecánica sobre la membrana.',
      tx_farmacologico: 'Hierro intravenoso de elección dada la gravedad habitual de la ferropenia asociada a este síndrome.',
      tx_intervencionista: 'Dilatación endoscópica de la membrana esofágica si la disfagia persiste pese a la corrección adecuada de la ferropenia.',
      criterios_uci: 'No aplica de forma directa, salvo obstrucción esofágica aguda con broncoaspiración.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo el propio de la corrección de la ferropenia grave.',
      seguimiento_ambulatorio: 'Vigilancia endoscópica a largo plazo dado el riesgo aumentado de carcinoma escamoso esofágico/hipofaríngeo asociado.',
      pronostico: 'Favorable en la mayoría de los casos con corrección de la ferropenia y, si es necesario, dilatación de la membrana; el riesgo oncológico a largo plazo obliga a vigilancia continuada incluso después de la resolución sintomática.',
      algoritmo: ['Disfagia alta + ferropenia crónica grave → sospechar síndrome de Plummer-Vinson', 'Esofagograma con bario o endoscopia → confirma la membrana esofágica cervical', 'Reposición agresiva de hierro (con frecuencia IV) como primera línea', 'Disfagia persistente pese a corrección de la ferropenia → dilatación endoscópica', 'Vigilancia oncológica a largo plazo por el riesgo de carcinoma escamoso asociado']
    },
    {
      nombre: 'Insuficiencia cardiaca de alto gasto',
      color: '#8c3a34',
      definicion: 'Complicación de la anemia ferropénica grave y de instalación crónica (habitualmente hemoglobina muy baja, alcanzada de forma gradual que permite mecanismos compensadores), en la que el gasto cardiaco aumentado de forma sostenida para compensar la menor capacidad de transporte de oxígeno termina por sobrepasar la capacidad funcional del corazón.',
      fisiopatologia: 'La anemia grave reduce la viscosidad sanguínea y el contenido arterial de oxígeno, lo que produce vasodilatación periférica compensadora y taquicardia refleja para mantener el aporte tisular de oxígeno; el resultado es un estado circulatorio de alto gasto sostenido que, mantenido en el tiempo, produce remodelado cardiaco (dilatación e hipertrofia excéntrica) y eventualmente disfunción ventricular manifiesta, con congestión y síntomas de insuficiencia cardiaca pese a que el problema primario no es una falla de la bomba cardiaca en sí, sino una demanda circulatoria excesiva y sostenida.',
      epidemiologia: 'Ocurre casi exclusivamente en la anemia ferropénica grave (hemoglobina con frecuencia &lt;7 g/dL) de instalación gradual que ha permitido el desarrollo de mecanismos compensadores hemodinámicos; más frecuente en el paciente con reserva cardiovascular ya limitada de base.',
      factores_riesgo: ['Anemia ferropénica grave (hemoglobina muy baja) de instalación crónica no reconocida', 'Enfermedad cardiovascular estructural de base', 'Edad avanzada', 'Retraso diagnóstico prolongado de la ferropenia de base'],
      clinica: 'Disnea, edema de miembros inferiores, taquicardia, soplo sistólico funcional (por el flujo aumentado), en ocasiones datos de congestión franca (ortopnea, ingurgitación yugular); el reconocimiento de que la causa es la anemia, no una cardiopatía estructural primaria, es clave para el manejo correcto.',
      criterios_dx: 'Datos clínicos/ecocardiográficos de insuficiencia cardiaca de alto gasto (gasto cardiaco elevado, no reducido) en el contexto de anemia ferropénica grave, con mejoría significativa tras la corrección de la anemia.',
      laboratorio: 'Hemoglobina muy baja, BNP/NT-proBNP con frecuencia elevado en proporción al grado de sobrecarga hemodinámica.',
      imagen: 'Ecocardiograma mostrando gasto cardiaco elevado, dilatación de cavidades sin necesariamente disfunción sistólica primaria intrínseca marcada; puede coexistir cierto grado de disfunción sistólica secundaria en los casos más prolongados/graves.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Insuficiencia cardiaca de causa estructural primaria coexistente (que también puede descompensarse en el contexto de la anemia, sin ser un estado de alto gasto puro), tirotoxicosis y otras causas de estado circulatorio hipercinético.',
      tx_medico: 'Corrección de la anemia como la medida terapéutica central y más eficaz; transfusión cuidadosa y lenta (con diurético concomitante si hay datos de sobrecarga) en la anemia sintomática grave, para evitar empeorar agudamente la sobrecarga de volumen en un corazón ya trabajando a alto gasto.',
      tx_farmacologico: 'Hierro intravenoso para la corrección más rápida y eficaz de la anemia de base; diurético de asa si hay datos de congestión franca mientras se corrige la anemia.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario en la anemia sintomática grave, con las precauciones de volumen/velocidad señaladas.',
      criterios_uci: 'Insuficiencia cardiaca descompensada grave con inestabilidad hemodinámica o compromiso respiratorio significativo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del balance hídrico durante la corrección de la anemia, particularmente si se transfunde.',
      seguimiento_ambulatorio: 'Reevaluación de la función cardiaca tras la corrección completa de la anemia; la mayoría de los casos revierte completamente sin secuela estructural permanente si el diagnóstico y tratamiento fueron oportunos.',
      pronostico: 'Favorable con la corrección de la anemia de base, con reversión completa del estado de alto gasto en la mayoría de los casos; el retraso diagnóstico prolongado puede dejar cierto grado de remodelado cardiaco residual.',
      algoritmo: ['Disnea/edema/taquicardia + anemia ferropénica grave de instalación crónica → sospechar insuficiencia cardiaca de alto gasto', 'Ecocardiograma para confirmar el patrón de alto gasto y descartar cardiopatía estructural primaria coexistente', 'Corrección de la anemia (hierro IV, transfusión cuidadosa si es sintomática grave) como medida central', 'Diurético si hay congestión franca durante la corrección', 'Reevaluación de la función cardiaca tras la corrección completa']
    },
    {
      nombre: 'Efectos adversos e intolerancia al hierro oral',
      color: '#966b35',
      definicion: 'Complicación frecuente y clínicamente relevante del tratamiento con hierro oral, que compromete la adherencia y es la causa más común de aparente "refractariedad" al tratamiento (ver esa tarjeta); incluye síntomas gastrointestinales (el motivo de consulta/suspensión más frecuente) y, más raramente, coloración oscura de las heces que puede generar preocupación innecesaria si no se anticipa.',
      fisiopatologia: 'El hierro oral no absorbido en el tracto gastrointestinal superior tiene un efecto irritante directo sobre la mucosa gástrica e intestinal, y altera la microbiota intestinal, produciendo el espectro típico de síntomas gastrointestinales dosis-dependientes; estos síntomas son, paradójicamente, más frecuentes con los esquemas de dosificación diaria tradicionales que con esquemas de días alternos, porque la dosis diaria mantiene una exposición luminal de hierro no absorbido más constante.',
      epidemiologia: 'Ocurre en una proporción relevante de los pacientes tratados con hierro oral, y es la causa más frecuente de suspensión no supervisada del tratamiento por parte del paciente.',
      factores_riesgo: ['Dosis alta de hierro elemental por toma', 'Esquema de dosificación diaria en vez de días alternos', 'Toma del hierro con el estómago vacío sin ninguna tolerancia previa', 'Antecedente de intolerancia gastrointestinal a hierro oral en el pasado'],
      clinica: 'Náusea, dolor epigástrico, estreñimiento o diarrea, heces oscuras (un hallazgo esperado y benigno que debe anticiparse al paciente para evitar preocupación innecesaria o confusión con melena verdadera).',
      criterios_dx: 'Clínico, en el contexto temporal apropiado tras el inicio o el ajuste de dosis del hierro oral.',
      laboratorio: 'Ninguno específico; sin embargo, ante heces oscuras con dolor abdominal significativo o datos de alarma, debe descartarse sangrado digestivo verdadero antes de atribuir el cuadro únicamente al hierro oral.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Melena verdadera por sangrado digestivo activo (debe distinguirse activamente de la simple coloración oscura de las heces por el hierro no absorbido, particularmente si hay dolor abdominal significativo o inestabilidad asociada).',
      tx_medico: 'Tomar el hierro oral con alimentos (reduce la irritación gástrica aunque también reduce algo la absorción, un intercambio razonable si mejora la adherencia global), cambiar a un esquema de días alternos en vez de diario (mejora tanto la tolerancia como, paradójicamente, la absorción fraccional total), o cambiar la sal de hierro utilizada.',
      tx_farmacologico: 'Reducir la dosis por toma si persiste la intolerancia pese a los ajustes anteriores; considerar hierro intravenoso si la intolerancia oral es limitante pese a todas las estrategias de optimización.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Reevaluación temprana de la tolerancia tras cualquier ajuste de esquema, para evitar la suspensión no supervisada prolongada del tratamiento.',
      pronostico: 'La mayoría de los casos de intolerancia mejora con los ajustes de esquema descritos, sin necesidad de escalar a la vía intravenosa.',
      algoritmo: ['Síntomas gastrointestinales tras iniciar hierro oral → educar sobre heces oscuras esperadas, descartar melena verdadera si hay duda clínica', 'Cambiar a esquema de días alternos y/o tomar con alimentos', 'Persiste intolerancia → reducir dosis por toma o cambiar la sal de hierro', 'Intolerancia limitante pese a optimización → hierro intravenoso']
    },
    {
      nombre: 'Reacciones al hierro intravenoso',
      color: '#2e5f6b',
      definicion: 'Complicación del tratamiento con hierro intravenoso, que incluye reacciones de hipersensibilidad (desde leves hasta anafilaxia verdadera, poco frecuente con las formulaciones modernas) y, con las formulaciones de mayor dosis por infusión más usadas actualmente, hipofosfatemia inducida por hierro, una complicación metabólica menos conocida pero clínicamente relevante.',
      fisiopatologia: 'Las reacciones de hipersensibilidad verdaderas al hierro IV son, en su mayoría, reacciones de activación del complemento asociadas a la infusión (pseudoalergia), no anafilaxia mediada por IgE clásica, lo que explica por qué la premedicación con antihistamínicos/corticoide tiene un rol limitado y por qué muchas reacciones leves permiten continuar la infusión a menor velocidad tras una pausa breve. La hipofosfatemia inducida por hierro (particularmente con carboximaltosa férrica) obedece a un aumento marcado e inapropiado del factor de crecimiento de fibroblastos 23 (FGF23) inducido por la formulación, que incrementa la excreción renal de fosfato; en casos prolongados o con dosis repetidas, puede producir osteomalacia hipofosfatémica sintomática.',
      epidemiologia: 'Las reacciones de hipersensibilidad graves son poco frecuentes con las formulaciones modernas (dextrano de bajo peso molecular ya en desuso por su mayor riesgo, sustituido por carboximaltosa férrica, hierro sacarosa, hierro isomaltósido, entre otras); la hipofosfatemia significativa es más frecuente de lo históricamente reconocido, particularmente con dosis altas repetidas de carboximaltosa férrica.',
      factores_riesgo: ['Antecedente de reacción previa a hierro IV o a otras infusiones', 'Enfermedad autoinmune sistémica de base (mayor riesgo de reacciones de activación del complemento)', 'Uso de carboximaltosa férrica en dosis altas repetidas (mayor riesgo de hipofosfatemia)', 'Insuficiencia renal crónica de base (altera el metabolismo del fosfato)'],
      clinica: 'Reacciones de hipersensibilidad: rubor, dolor lumbar/torácico transitorio, disnea leve (el patrón más frecuente, con frecuencia autolimitado); anafilaxia verdadera (hipotensión, broncoespasmo, angioedema) es rara pero requiere reconocimiento y manejo inmediatos. Hipofosfatemia: con frecuencia asintomática y transitoria; en casos prolongados, fatiga, dolor óseo difuso, debilidad muscular proximal, y fracturas por fragilidad en la osteomalacia establecida.',
      criterios_dx: 'Reacciones de hipersensibilidad: clínico, durante o inmediatamente después de la infusión. Hipofosfatemia: fósforo sérico bajo, medido de rutina antes de repetir una dosis de hierro IV en el paciente con dosis acumuladas altas o síntomas sugestivos.',
      laboratorio: 'Fósforo sérico basal y de control en el paciente que recibe dosis repetidas de hierro IV, particularmente carboximaltosa férrica; FGF23 en el estudio dirigido de la hipofosfatemia persistente si se considera relevante.',
      imagen: 'Densitometría ósea y, en casos graves, radiografía dirigida si hay sospecha de fractura por fragilidad en la osteomalacia establecida.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Anafilaxia verdadera mediada por IgE de otra causa concomitante, otras causas de hipofosfatemia (hiperparatiroidismo, síndrome de realimentación, uso de antiácidos que ligan fosfato).',
      tx_medico: 'Pausar la infusión y observar ante una reacción leve-moderada (rubor, dolor transitorio), reiniciando a menor velocidad si los síntomas se resuelven; en la hipofosfatemia asintomática leve-moderada, con frecuencia solo vigilancia sin intervención específica, dado que suele ser transitoria.',
      tx_farmacologico: 'Manejo estándar de anafilaxia (epinefrina intramuscular como primera línea) si se confirma reacción anafiláctica verdadera; suplementación oral de fosfato si la hipofosfatemia es sintomática o marcada; considerar una formulación alternativa de hierro IV (con menor riesgo de hipofosfatemia, como hierro sacarosa o hierro isomaltósido) si se requieren dosis repetidas y hay antecedente de hipofosfatemia significativa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Anafilaxia con compromiso hemodinámico o respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia durante y después de cada infusión de hierro IV según protocolo institucional (tiempo de observación posinfusión).',
      seguimiento_ambulatorio: 'Vigilancia de fósforo sérico en el paciente con dosis acumuladas altas de carboximaltosa férrica o síntomas sugestivos de osteomalacia.',
      pronostico: 'Las reacciones de hipersensibilidad leves-moderadas se manejan sin secuela en la gran mayoría de los casos; la hipofosfatemia es reversible en la mayoría de los casos al suspender o espaciar las dosis, aunque la osteomalacia establecida puede requerir tiempo prolongado para resolverse.',
      algoritmo: ['Síntomas durante la infusión de hierro IV → pausar y evaluar gravedad', 'Reacción leve-moderada → reiniciar a menor velocidad tras resolución', 'Anafilaxia verdadera → epinefrina intramuscular + manejo estándar de anafilaxia', 'Dosis repetidas de carboximaltosa férrica → vigilar fósforo sérico basal y de control', 'Hipofosfatemia sintomática/marcada → suplementación de fosfato ± cambio de formulación de hierro IV']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La confirmación del perfil de hierro y el estudio etiológico dirigido (particularmente descartar una fuente digestiva oculta en el adulto sin causa evidente) son comunes a las 4 formas de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Biometría hemática con índices eritrocitarios y perfil de hierro completo al ingreso en la anemia ferropénica sintomática que requiere manejo hospitalario.',
      'Vigilancia hemodinámica y de signos de insuficiencia cardiaca de alto gasto en la anemia grave de instalación crónica.',
      'Vigilancia durante y después de cada infusión de hierro IV, según protocolo institucional.',
      'Fósforo sérico en el paciente que recibe dosis repetidas de hierro IV, particularmente carboximaltosa férrica.'
    ],
    criterios_uci_general: 'Anemia sintomática grave con inestabilidad hemodinámica, insuficiencia cardiaca de alto gasto descompensada, anafilaxia por hierro IV con compromiso hemodinámico o respiratorio.',
    criterios_tips_general: 'No aplica a ninguna de las 4 formas de esta sección.',
    criterios_trasplante_general: 'No aplica a ninguna de las 4 formas de esta sección.',
    prevencion: 'Estudio etiológico activo en todo adulto con anemia ferropénica sin causa evidente (nunca asumir "solo falta de hierro" sin buscar la causa), tamizaje universal de ferropenia en el embarazo, y anticipación educada de los efectos gastrointestinales del hierro oral para preservar la adherencia.'
  }
};

export const compCites = {
  'Ferropenia por pérdida crónica de sangre': { epidemiologia: [3, 4] },
  'Ferropenia por disminución del aporte o la absorción': { fisiopatologia: [7] },
  'Ferropenia del embarazo': { epidemiologia: [7, 8] },
  'Ferropenia refractaria al hierro oral': { fisiopatologia: [9], tx_medico: [10] },
  'Síndrome de Plummer-Vinson': { definicion: [12] },
  'Insuficiencia cardiaca de alto gasto': { tx_farmacologico: [15] },
  'Reacciones al hierro intravenoso': { fisiopatologia: [11], laboratorio: [11] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Índice de Mentzer': [],
  'Fórmula de Ganzoni': [15],
  'Puntos de corte de anemia en el embarazo (OMS, ajustados por trimestre)': [8]
};
export const escalaCalc = { 'Índice de Mentzer': 'mentzer', 'Fórmula de Ganzoni': 'ganzoni' };
export const compGroups = [
  { title: 'Anemia ferropénica por etiología (enfermedades)', items: ['Ferropenia por pérdida crónica de sangre', 'Ferropenia por disminución del aporte o la absorción', 'Ferropenia del embarazo', 'Ferropenia refractaria al hierro oral'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Síndrome de Plummer-Vinson', 'Insuficiencia cardiaca de alto gasto', 'Efectos adversos e intolerancia al hierro oral', 'Reacciones al hierro intravenoso'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son las 4 formas de anemia ferropénica según su etiología; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
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
  root: { title: 'ANEMIA FERROPÉNICA', color: '#8c6b2d', target: 'definicion' },
  branches: [
    { title: 'Por pérdida o demanda', sub: 'Sangrado, embarazo', color: '#7a1f3d', target: 'diagnostico', leaves: [
      { title: 'Pérdida crónica de sangre', sub: 'GI/ginecológica, endoscopia+colonoscopia', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Embarazo', sub: 'Suplementación universal', color: '#5c3d73', target: 'complicaciones' }
    ] },
    { title: 'Por aporte/absorción', sub: 'Dieta, malabsorción', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Aporte/absorción disminuidos', sub: 'Celiaquía, bariátrica, H. pylori', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Refractaria al hierro oral', sub: 'IRIDA, TMPRSS6', color: '#5c6b8c', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [16] };
export const clasificacionCite = [15];
export const seguimientoCite = [3, 5];
