// topics/dislipidemias/content.js: Dislipidemias.
// Cubre el item "Dislipidemias" del bloque VII (Endocrinologia y Metabolismo, cluster Metabolismo)
// del temario. Tema nuevo (nada lo cubria antes).
//
// Fuentes principales (PDF nuevos que el usuario dejo, movidos a
// Bibliografia/V. Endocrinologia y Metabolismo/Metabolismo/):
//   - Blumenthal RS, et al. 2026 ACC/AHA Guideline on the Management of Dyslipidemia. JACC 2026.
//   - Siegel PM, et al. A practical guide to the management of dyslipidaemia. Clin Res Cardiol 2026
//     (incorpora la actualizacion enfocada ESC/EAS 2025 de la guia de 2019).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`.
//
// Estructura (decision del usuario): 5 fenotipos (hipercolesterolemia -cLDL alto-, hipercoles-
// terolemia familiar, hipertrigliceridemia, Lp(a) elevada, dislipidemia secundaria) + 3
// complicaciones (enfermedad cardiovascular ateroesclerotica, pancreatitis por hipertrigliceri-
// demia grave, intolerancia a las estatinas). 4 calculadoras (panel lipidico derivado, objetivo
// de cLDL por riesgo, DLCN de HF, descenso esperado de cLDL por esquema). 4 figuras SVG/HTML a
// mano. Sin em dash en todo el archivo (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'dislipidemias',
  titulo: 'Dislipidemias',
  subtitulo: 'Módulo 36 · Medicina Interna',
  accent: '#9a6a2e',
  accentDim: '#c9a97e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const cldlRiesgoHtml = `
<div style="max-width:520px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dl-f1-t dl-f1-d" style="width:100%;max-width:340px;display:block;margin:0 auto;">
    <title id="dl-f1-t">Relación log-lineal entre el colesterol LDL y el riesgo cardiovascular</title>
    <desc id="dl-f1-d">Gráfica en la que el riesgo relativo de enfermedad cardiovascular ateroesclerótica crece de forma continua y aproximadamente log-lineal al aumentar el colesterol LDL, sin un umbral inferior. El riesgo total depende del nivel de colesterol LDL y del tiempo de exposición acumulada.</desc>
    <line x1="40" y1="150" x2="300" y2="150" stroke="var(--line)"/>
    <line x1="40" y1="20" x2="40" y2="150" stroke="var(--line)"/>
    <path d="M40 146 Q120 138 180 110 Q235 82 290 28" fill="none" stroke="#8c3a34" stroke-width="2.5"/>
    <text x="170" y="170" text-anchor="middle" fill="var(--ink-dim)" font-size="9">Colesterol LDL (o ApoB) circulante</text>
    <text x="16" y="90" text-anchor="middle" fill="var(--ink-dim)" font-size="9" transform="rotate(-90 16 90)">Riesgo de ECV</text>
    <circle cx="110" cy="140" r="3" fill="#3f6b52"/><text x="116" y="136" fill="var(--ink-dim)" font-size="8">55 mg/dL</text>
    <circle cx="200" cy="98" r="3" fill="#8a6a1f"/><text x="150" y="94" fill="var(--ink-dim)" font-size="8">100 mg/dL</text>
    <circle cx="270" cy="42" r="3" fill="#8c3a34"/><text x="214" y="40" fill="var(--ink-dim)" font-size="8">190 mg/dL</text>
  </svg>
  <div style="color:var(--ink-dim);margin-top:4px;">La relación es continua y sin umbral inferior de seguridad conocido. El efecto es acumulativo: la <strong>carga de colesterol</strong> (aproximadamente nivel de cLDL en mg/dL multiplicado por los anos a ese nivel) determina cuando se manifiesta la aterosclerosis. Cada 40 mg/dL menos de cLDL reduce alrededor de un 22% los eventos cardiovasculares mayores, con independencia del valor de partida.</div>
</div>`;

const objetivosHtml = `
<div style="max-width:560px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <div style="display:grid;grid-template-columns:0.9fr 1.5fr 1fr 1.2fr;gap:2px;min-width:480px;">
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;border-radius:6px 0 0 0;">Categoría</div>
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;">Ejemplos</div>
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;">cLDL (ESC/EAS)</div>
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;border-radius:0 6px 0 0;">cLDL / no-HDL (ACC/AHA 2026)</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d22;">Extremo</div>
    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d18;">Eventos recurrentes pese a tratamiento; enfermedad polivascular</div>
    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d18;">menor de 40</div>
    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d18;">menor de 55 / menor de 85</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#8c3a3418;">Muy alto</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">ECV establecida; diabetes con dano de órgano; SCORE2 20% o mayor</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 55 y reducción de al menos 50%</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 55 / menor de 85</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#8a6a1f18;">Alto</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">SCORE2 10-20%; HF; diabetes sin dano de órgano; ERC moderada</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 70 y reducción de al menos 50%</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 70 / menor de 100</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#3f6b5218;">Moderado</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">SCORE2 5-10% (o PREVENT 5 a menos de 10%)</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 100</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 100 / menor de 130</div>

    <div style="padding:4px 6px;border:1px solid var(--line);border-radius:0 0 0 6px;background:#3f6b5218;">Bajo</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">SCORE2 menor de 5% (o PREVENT menor de 3%)</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 116</div>
    <div style="padding:4px 6px;border:1px solid var(--line);border-radius:0 0 6px 0;">Estilo de vida; fármaco si hay modificadores</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Valores en mg/dL. El porcentaje de reducción del cLDL respecto al basal es un objetivo en sí mismo en las categorías alto y muy alto. La ACC/AHA 2026 recupera objetivos explícitos de cLDL y de colesterol no-HDL.</div>
</div>`;

const escalonHtml = `
<div style="display:flex;flex-direction:column;gap:6px;max-width:520px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:78px 1fr 58px;gap:6px;align-items:center;">
    <div style="font-weight:700;color:#3d5a73;text-align:center;">Paso 1</div>
    <div style="background:#3d5a7318;border:1px solid #3d5a73;border-radius:8px;padding:6px 10px;">Estatina de alta intensidad (atorvastatina 40-80 mg o rosuvastatina 20-40 mg)</div>
    <div style="text-align:center;font-weight:700;color:#3d5a73;">-50%</div>

    <div style="font-weight:700;color:#3f6b52;text-align:center;">Paso 2</div>
    <div style="background:#3f6b5218;border:1px solid #3f6b52;border-radius:8px;padding:6px 10px;">Anadir ezetimiba 10 mg</div>
    <div style="text-align:center;font-weight:700;color:#3f6b52;">-65%</div>

    <div style="font-weight:700;color:#8a6a1f;text-align:center;">Paso 3</div>
    <div style="background:#8a6a1f18;border:1px solid #8a6a1f;border-radius:8px;padding:6px 10px;">Anadir un inhibidor de PCSK9 (evolocumab, alirocumab) o inclisiran</div>
    <div style="text-align:center;font-weight:700;color:#8a6a1f;">-85%</div>
  </div>
  <div style="color:var(--ink-dim);text-align:center;">Reducción acumulada aproximada del cLDL respecto al basal. El ácido bempedoico (reducción adicional del 20-25%) es una alternativa oral, útil en la intolerancia a las estatinas. Tras un síndrome coronario agudo se usa combinación de entrada e intensificación durante el ingreso ("golpear pronto y fuerte").</div>
</div>`;

const htgHtml = `
<div style="display:flex;gap:10px;flex-wrap:wrap;max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="flex:1;min-width:230px;border:1px solid #8a6a1f;border-radius:8px;padding:8px;background:#8a6a1f12;">
    <div style="font-weight:700;color:#8a6a1f;">TG 150 a 499 mg/dL</div>
    <div style="color:var(--ink-dim);margin-top:3px;">Riesgo cardiovascular residual (remanentes). Tratar causas secundarias, estilo de vida y estatina si el riesgo es alto. En riesgo alto con TG persistentes pese a estatina: icosapent etilo 2 g cada 12 h (REDUCE-IT).</div>
  </div>
  <div style="flex:1;min-width:230px;border:1px solid #8c3a34;border-radius:8px;padding:8px;background:#8c3a3418;">
    <div style="font-weight:700;color:#8c3a34;">TG 500 mg/dL o mayor</div>
    <div style="color:var(--ink-dim);margin-top:3px;">Riesgo de pancreatitis (sobre todo si es 1000 o mayor). Dieta muy baja en grasa, evitar alcohol, fibrato (fenofibrato) y omega-3 a dosis alta. Síndrome de quilomicronemia familiar con TG 1000 o mayor: olezarsen o volanesorsen.</div>
  </div>
  <div style="flex:1 1 100%;color:var(--ink-dim);text-align:center;">En la pancreatitis aguda por hipertrigliceridemia: ayuno, insulina intravenosa con glucosa y, si es grave o no desciende, plasmaféresis.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las dislipidemias son alteraciones de las concentraciones de lípidos y lipoproteinas en sangre que aumentan el riesgo de enfermedad cardiovascular ateroesclerótica (ECV) y, en la hipertrigliceridemia grave, de pancreatitis aguda. El colesterol LDL (cLDL) y, en general, todas las lipoproteinas que contienen apolipoproteína B (LDL, VLDL, IDL, remanentes y Lp(a)) son causa directa de aterosclerosis.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">La relación con el riesgo es log-lineal y acumulativa.</strong>${figBlock('Figura 1', 'Colesterol LDL, riesgo y carga de colesterol', cldlRiesgoHtml)} El riesgo depende del nivel de cLDL y del tiempo de exposición; mantenerlo bajo desde edades tempranas es lo que más previene la aterosclerosis.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El perfil lipídico y sus derivados.</strong> Un perfil completo incluye colesterol total, HDL, LDL y triglicéridos. El cLDL se calcula con las fórmulas de Martin-Hopkins o Sampson-NIH (la de Friedewald no es valida con triglicéridos mayores de 400 mg/dL) o se mide de forma directa. El colesterol no-HDL (colesterol total menos HDL) y la ApoB reflejan mejor la carga aterogenica cuando hay triglicéridos altos, diabetes u obesidad. La Lp(a) debe medirse al menos una vez en la vida a todo adulto. La muestra no necesita ser en ayuno salvo triglicéridos muy elevados.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El espectro.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hipercolesterolemia (cLDL alto)</strong>: la forma común, casi siempre poligenica.</li>
    <li><strong>Hipercolesterolemia familiar</strong>: monogenica, frecuente (1/200 a 1/250) e infradiagnosticada.</li>
    <li><strong>Hipertrigliceridemia</strong>: riesgo residual (leve-moderada) o de pancreatitis (grave).</li>
    <li><strong>Lipoproteina(a) elevada</strong>: factor de riesgo causal, genéticamente determinado.</li>
    <li><strong>Dislipidemia secundaria</strong>: por otra enfermedad, un fármaco o un habito.</li>
  </ul>
</div>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> La dislipidemia esta infradiagnosticada e infratratada: solo una minoría de los pacientes de alto o muy alto riesgo alcanza el objetivo de cLDL. El tratamiento (estilo de vida más estatinas y, si hace falta, ezetimiba, ácido bempedoico, inhibidores de PCSK9 o inclisiran) reduce los eventos de forma proporcional al descenso del cLDL. Las complicaciones (ECV ateroesclerótica, pancreatitis por hipertrigliceridemia e intolerancia a las estatinas) se desarrollan en Complicaciones.</p>`;

export const bibliografia = [
  'Blumenthal RS, Morris PB, Gaudino M, et al. 2026 ACC/AHA/AACVPR/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Dyslipidemia. J Am Coll Cardiol. 2026;87(19):2624-2757.',
  'Siegel PM, Katzmann JL, Weinmann-Menke J, et al. A practical guide to the management of dyslipidaemia. Clin Res Cardiol. 2026;115(2):185-197.',
  'Mach F, Baigent C, Catapano AL, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J. 2020;41(1):111-188.',
  'European Atherosclerosis Society and European Society of Cardiology. 2025 Focused Update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. 2025 (resumido en Siegel PM, et al. Clin Res Cardiol. 2026).',
  'Grundy SM, Stone NJ, Bailey AL, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082-e1143.',
  'Khan SS, Coresh J, Pencina MJ, et al. Novel prediction equations for absolute risk assessment of total cardiovascular disease incorporating cardiovascular-kidney-metabolic health: a scientific statement from the American Heart Association (PREVENT). Circulation. 2024;149(6):e1091-e1120.',
  'Ference BA, Ginsberg HN, Graham I, et al. Low-density lipoproteins cause atherosclerotic cardiovascular disease. Evidence from genetic, epidemiologic, and clinical studies. A consensus statement from the European Atherosclerosis Society Consensus Panel. Eur Heart J. 2017;38(32):2459-2472.',
  'Cholesterol Treatment Trialists Collaboration. Efficacy and safety of more intensive lowering of LDL cholesterol: a meta-analysis of data from 170,000 participants in 26 randomised trials. Lancet. 2010;376(9753):1670-1681.',
  'Kronenberg F, Mora S, Stroes ESG, et al. Lipoprotein(a) in atherosclerotic cardiovascular disease and aortic stenosis: a European Atherosclerosis Society consensus statement. Eur Heart J. 2022;43(39):3925-3946.',
  'Sabatine MS, Giugliano RP, Keech AC, et al. Evolocumab and clinical outcomes in patients with cardiovascular disease (FOURIER). N Engl J Med. 2017;376(18):1713-1722.',
  'Schwartz GG, Steg PG, Szarek M, et al. Alirocumab and cardiovascular outcomes after acute coronary syndrome (ODYSSEY OUTCOMES). N Engl J Med. 2018;379(22):2097-2107.',
  'Nissen SE, Lincoff AM, Brennan D, et al. Bempedoic acid and cardiovascular outcomes in statin-intolerant patients (CLEAR Outcomes). N Engl J Med. 2023;388(15):1353-1364.',
  'Cannon CP, Blazing MA, Giugliano RP, et al. Ezetimibe added to statin therapy after acute coronary syndromes (IMPROVE-IT). N Engl J Med. 2015;372(25):2387-2397.',
  'Bhatt DL, Steg PG, Miller M, et al. Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia (REDUCE-IT). N Engl J Med. 2019;380(1):11-22.',
  'Ray KK, Wright RS, Kallend D, et al. Two phase 3 trials of inclisiran in patients with elevated LDL cholesterol (ORION-10 and ORION-11). N Engl J Med. 2020;382(16):1507-1519.',
  'Nordestgaard BG, Chapman MJ, Humphries SE, et al. Familial hypercholesterolaemia is underdiagnosed and undertreated in the general population: guidance for clinicians to prevent coronary heart disease. Eur Heart J. 2013;34(45):3478-3490.',
  'Martin SS, Blaha MJ, Elshazly MB, et al. Comparison of a novel method vs the Friedewald equation for estimating low-density lipoprotein cholesterol levels from the standard lipid profile. JAMA. 2013;310(19):2061-2068.',
  'Cheeley MK, Saseen JJ, Agarwala A, et al. NLA scientific statement on statin intolerance: a new definition and key considerations for ASCVD risk reduction in the statin intolerant patient. J Clin Lipidol. 2022;16(4):361-375.',
  'Berglund L, Brunzell JD, Goldberg AC, et al. Evaluation and treatment of hypertriglyceridemia: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2012;97(9):2969-2989.',
  'Stroes ESG, Alexander VJ, Karwatowska-Prokopczuk E, et al. Olezarsen, acute pancreatitis, and familial chylomicronemia syndrome. N Engl J Med. 2024;390(19):1781-1792.',
  'Willeit P, Ridker PM, Nestel PJ, et al. Baseline and on-statin treatment lipoprotein(a) levels for prediction of cardiovascular events: individual patient-data meta-analysis of statin outcome trials. Lancet. 2018;392(10155):1311-1320.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Dislipidemia asintomática (hallazgo de laboratorio)',
      tituloB: 'Dislipidemia con manifestaciones (estigmas, ECV o pancreatitis)',
      compensada: 'La gran mayoría de las dislipidemias son asintomáticas y se detectan en un perfil lipídico solicitado por cribado o por otro motivo. El cribado se recomienda a partir de los 20 anos, antes si hay antecedente familiar de dislipidemia o de enfermedad cardiovascular precoz, y en la infancia si se sospecha hipercolesterolemia familiar.',
      descompensada: 'Estigmas de dislipidemia grave: xantelasmas, arco corneal antes de los 45 anos, xantomas tendinosos (tendón de Aquiles, extensores de los dedos) en la hipercolesterolemia familiar, y xantomas eruptivos y lipemia retinalis en la hipertrigliceridemia grave. O bien la presentación es un evento cardiovascular ateroesclerótico precoz o una pancreatitis aguda por hipertrigliceridemia.'
    },
    laboratorio: [
      { prueba: 'Perfil lipídico completo (colesterol total, HDL, LDL y triglicéridos)', utilidad: 'Base del diagnóstico y del seguimiento. La muestra no necesita ser en ayuno salvo triglicéridos muy elevados o para caracterizar una hipertrigliceridemia; el perfil no en ayuno tiene el mismo valor pronóstico.' },
      { prueba: 'Colesterol no-HDL y apolipoproteína B', utilidad: 'Reflejan la carga total de particulas aterogenicas mejor que el cLDL cuando hay triglicéridos altos, diabetes, obesidad o síndrome metabólico; la ApoB no depende del ayuno ni de fórmulas de estimación.' },
      { prueba: 'Lipoproteina(a)', utilidad: 'Medir al menos una vez en la vida a todo adulto para refinar el riesgo; esta genéticamente determinada y no requiere repetirse salvo situaciones que la alteren (menopausia, enfermedad renal o hepática, inflamación).' },
      { prueba: 'TSH, glucemia y HbA1c, creatinina y filtrado glomerular, transaminasas y examen de orina', utilidad: 'Cribado de causas secundarias (hipotiroidismo, diabetes, enfermedad renal crónica, síndrome nefrótico, colestasis) antes de etiquetar una dislipidemia como primaria.' },
      { prueba: 'Creatina-cinasa', utilidad: 'Basal si hay riesgo de intolerancia a las estatinas o síntomas musculares; no se recomienda su medición sistemática en el paciente asintomático.' },
      { prueba: 'Proteína C reactiva de alta sensibilidad', utilidad: 'Modificador de riesgo: un valor de 2 mg/L o mayor de forma persistente, sin causa identificable, apoya intensificar el tratamiento hipolipemiante (ACC/AHA 2026).' }
    ],
    no_invasivos: [
      { metodo: 'SCORE2 y SCORE2-OP (ver el tema de Hipertensión Arterial)', interpretacion: 'Estiman el riesgo de eventos cardiovasculares a 10 anos en el adulto aparentemente sano de 40 a 89 anos; SCORE2-Diabetes en la diabetes tipo 2 de 40 a 79 anos sin ECV.', cutoff: 'Riesgo muy alto si es 20% o mayor; alto entre 10 y 20% (calibración europea)' },
      { metodo: 'Ecuaciones PREVENT (AHA)', interpretacion: 'Alternativa de la guía ACC/AHA 2026: estiman el riesgo de ECV total a 10 y 30 anos en adultos de 30 a 79 anos sin ECV, incorporando la función renal y factores metabólicos.', cutoff: 'A 10 anos: bajo menor de 3%; limítrofe 3 a menos de 5%; intermedio 5 a menos de 10%; alto 10% o mayor' },
      { metodo: 'Score de la Dutch Lipid Clinic Network (calculadora disponible)', interpretacion: 'Estima la probabilidad de hipercolesterolemia familiar combinando antecedentes personales y familiares, exploración (xantomas, arco corneal) y el nivel de cLDL.', cutoff: 'Mayor de 8 puntos: HF cierta; 6 a 8: HF probable; 3 a 5: HF posible' },
      { metodo: 'Puntuación de calcio coronario', interpretacion: 'Reclasifica el riesgo en el paciente de riesgo intermedio o limítrofe cuando la decisión de tratar es incierta, y refina la intensidad del tratamiento.', cutoff: 'Cero unidades Agatston permite diferir la estatina en ausencia de condiciones de alto riesgo; 100 o mayor (o percentil 75 o mayor) indica iniciar tratamiento' }
    ],
    imagen: [
      { modalidad: 'Angio-TC coronaria o ecografía carotídea', hallazgos: 'Detectan aterosclerosis subclínica (placa) que, si esta presente, sube al paciente a una categoría de riesgo mayor y baja el objetivo de cLDL.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Valora la estenosis aórtica calcificada, más frecuente y más precoz cuando la Lp(a) esta elevada.' },
      { modalidad: 'Ecografía del tendón de Aquiles', hallazgos: 'Engrosamiento o xantomas tendinosos, un criterio diagnóstico de hipercolesterolemia familiar.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación de las dislipidemias se hace por el fenotipo lipídico predominante (hipercolesterolemia, hipertrigliceridemia, dislipidemia mixta o Lp(a) elevada), por el origen (primaria, a menudo poligenica o monogenica, o secundaria) y, sobre todo, por la categoría de riesgo cardiovascular del paciente, que define el objetivo de cLDL y de colesterol no-HDL y el porcentaje de reducción que hay que lograr.${figBlock('Figura 2', 'Objetivos de colesterol LDL y no-HDL por categoría de riesgo', objetivosHtml)}`,
    escalas: [
      { nombre: 'Categorías de riesgo y objetivos de cLDL (ESC/EAS)', componentes: 'Riesgo extremo (eventos recurrentes pese a tratamiento, enfermedad polivascular), muy alto (ECV establecida, diabetes con dano de órgano, SCORE2 20% o mayor), alto (SCORE2 10-20%, HF, diabetes sin dano de órgano, ERC moderada), moderado (SCORE2 5-10%), bajo (SCORE2 menor de 5%).', formula: 'Objetivo de cLDL por categoría (ver Figura 2). Calculadora disponible.', interpretacion: 'Extremo menor de 40 mg/dL; muy alto menor de 55 y reducción de al menos 50%; alto menor de 70 y reducción de al menos 50%; moderado menor de 100; bajo menor de 116. Los objetivos se mantuvieron sin cambios en la actualización 2025.' },
      { nombre: 'Categorías de riesgo y objetivos (ACC/AHA 2026)', componentes: 'Riesgo estimado con las ecuaciones PREVENT en prevención primaria, o categoría clínica (ECV establecida, ERC, diabetes, HF) en el resto.', formula: 'Objetivos de cLDL y de colesterol no-HDL por categoría (ver Figura 2).', interpretacion: 'Prevención secundaria de muy alto riesgo: cLDL menor de 55 y no-HDL menor de 85. Prevención secundaria sin muy alto riesgo y primaria de alto riesgo: cLDL menor de 70 y no-HDL menor de 100. Primaria de riesgo intermedio: cLDL menor de 100 y no-HDL menor de 130.' },
      { nombre: 'Intensidad de la estatina', componentes: 'Alta intensidad: atorvastatina 40-80 mg o rosuvastatina 20-40 mg. Moderada intensidad: atorvastatina 10-20, rosuvastatina 5-10, simvastatina 20-40, pravastatina 40-80, pitavastatina 1-4 mg.', formula: 'Reducción esperada del cLDL respecto al basal.', interpretacion: 'Alta intensidad: reducción del 50% o mayor. Moderada intensidad: reducción del 30 al 49%.' },
      { nombre: 'Zonas de decisión de la Lp(a)', componentes: 'Concentración de Lp(a) en mg/dL o nmol/L.', formula: 'Menor de 30 mg/dL (75 nmol/L): descartada como modificador. 30-50 (75-125): zona gris. Mayor de 50 (125): modificador de riesgo; 100 mg/dL (250 nmol/L) o mayor: duplica el riesgo.', interpretacion: 'La Lp(a) elevada baja el umbral para tratar y obliga a un control estricto del cLDL, la presión arterial y la glucemia; todavía no hay un tratamiento específico aprobado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipercolesterolemia (colesterol LDL elevado)',
      color: '#9a6a2e',
      definicion: 'Elevación del colesterol LDL (y del colesterol no-HDL y de la ApoB) por encima del nivel deseable para el riesgo del paciente. La forma común es poligenica (muchas variantes de efecto pequeno que interaccionan con la dieta, el peso y el sedentarismo); una minoría es monogenica (hipercolesterolemia familiar, ver esa tarjeta) o secundaria (ver esa tarjeta). Es el principal factor causal modificable de la enfermedad cardiovascular ateroesclerótica.',
      fisiopatologia: 'El cLDL y el resto de lipoproteinas con ApoB atraviesan el endotelio y quedan retenidas en la íntima arterial, donde se oxidan y desencadenan una respuesta inflamatoria con reclutamiento de monocitos, formación de células espumosas y crecimiento de la placa de ateroma. La relación entre el cLDL y el riesgo es log-lineal y depende de la exposición acumulada en el tiempo (carga de colesterol): mantener el cLDL bajo desde edades tempranas es lo que más previene la aterosclerosis. Cada 40 mg/dL de descenso del cLDL reduce alrededor de un 22% los eventos cardiovasculares mayores, con independencia del valor de partida.',
      epidemiologia: 'La hipercolesterolemia es muy prevalente (más de la mitad de los adultos en muchos países tiene el colesterol total elevado) y esta infradiagnosticada e infratratada: solo una minoría de los pacientes de alto o muy alto riesgo alcanza el objetivo de cLDL.',
      factores_riesgo: ['Dieta rica en grasas saturadas y trans y en azucares', 'Sobrepeso y obesidad, sedentarismo y consumo excesivo de alcohol', 'Predisposición poligenica', 'Causas secundarias (hipotiroidismo, colestasis, síndrome nefrótico, ERC, embarazo)', 'Fármacos (corticoides, ciclosporina, algunos antirretrovirales, retinoides, diuréticos tiazídicos a dosis altas)', 'Edad'],
      clinica: 'Asintomática. En las formas graves o familiares aparecen estigmas: xantelasmas, arco corneal (sugestivo de HF si es antes de los 45 anos) y xantomas tendinosos. La presentación puede ser directamente un evento cardiovascular precoz (ver Enfermedad cardiovascular ateroesclerótica).',
      criterios_dx: 'Perfil lipídico con cLDL elevado para la categoría de riesgo del paciente, confirmado en 2 determinaciones y tras descartar causas secundarias. Calcular el cLDL con Martin-Hopkins o Sampson-NIH (la fórmula de Friedewald no es valida con triglicéridos mayores de 400 mg/dL) o medirlo de forma directa; usar el colesterol no-HDL y la ApoB si los triglicéridos están altos. Estimar el riesgo con SCORE2 o SCORE2-OP o con las ecuaciones PREVENT para asignar la categoría y el objetivo (ver Clasificación).',
      laboratorio: 'Perfil lipídico, colesterol no-HDL, ApoB, Lp(a) una vez, y cribado de causas secundarias (TSH, glucemia, función renal y hepática, orina). Proteína C reactiva de alta sensibilidad como modificador de riesgo en casos seleccionados.',
      imagen: 'No necesaria para el diagnóstico; puntuación de calcio coronario o ecografía carotídea para reclasificar el riesgo cuando la decisión de tratar es incierta.',
      complementarios: 'Cribado familiar en cascada si se sospecha HF o si la Lp(a) esta muy elevada; estimación del riesgo a lo largo de la vida (modelos LIFE-CVD) en el paciente joven, ya que SCORE2 no esta validado por debajo de los 40 anos.',
      dx_diferencial: 'Hipercolesterolemia familiar (cLDL muy alto, xantomas tendinosos, antecedente familiar de ECV precoz, herencia autosómica dominante), dislipidemia secundaria (corregible al tratar la causa) y elevación aislada de la Lp(a) que infla el cLDL medido.',
      tx_medico: 'Estilo de vida en todos: dieta cardiosaludable tipo mediterránea o DASH (rica en frutas, verduras, cereales integrales, legumbres, frutos secos y grasas insaturadas; baja en grasas saturadas y trans, azucares y carbohidratos refinados), actividad física de al menos 150 minutos semanales de intensidad moderada, pérdida de peso, abandono del tabaco y moderacion del alcohol. Los suplementos y las vitaminas no se recomiendan para bajar el cLDL ni el riesgo (recomendación en contra). Iniciar el fármaco según la categoría de riesgo y la distancia al objetivo; en el paciente de alto o muy alto riesgo lejos del objetivo, empezar con una combinación.',
      tx_farmacologico: `Estatina de alta intensidad de elección (atorvastatina 40-80 mg o rosuvastatina 20-40 mg; reducción del cLDL de alrededor del 50%). Si no se alcanza el objetivo, anadir ezetimiba 10 mg (reducción combinada de hasta el 65%). Tercer escalón: ácido bempedoico (útil también en la intolerancia a las estatinas) o un inhibidor de PCSK9, ya sea un anticuerpo monoclonal (evolocumab, alirocumab) o el ARN de interferencia inclisiran (reducción adicional del 50 al 60%). Tras un síndrome coronario agudo, intensificar durante el ingreso y usar combinación de entrada si la estatina sola no alcanzara el objetivo.${figBlock('Figura 3', 'Escalonamiento del tratamiento hipolipemiante', escalonHtml)}`,
      tx_intervencionista: 'La aféresis de lipoproteinas se reserva para la hipercolesterolemia refractaria (habitualmente HF con ECV progresiva pese al tratamiento máximo) y para la HF homocigota.',
      criterios_uci: 'No aplica a la dislipidemia en si.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En una hospitalización por evento cardiovascular, iniciar o intensificar el tratamiento hipolipemiante antes del alta y solicitar un perfil lipídico basal.',
      seguimiento_ambulatorio: 'Perfil lipídico a las 4 a 12 semanas de iniciar o cambiar el tratamiento, luego cada 3 a 12 meses; transaminasas basales y solo si hay síntomas después; creatina-cinasa solo si hay síntomas musculares. Reforzar la adherencia (una causa mayor de no alcanzar el objetivo) y el estilo de vida.',
      pronostico: 'El beneficio es proporcional y sostenido: alcanzar y mantener el objetivo de cLDL reduce de forma marcada los eventos, y cuanto antes se logra, mayor es el beneficio a lo largo de la vida. No hay un limite inferior de seguridad conocido para el cLDL.',
      algoritmo: ['Perfil lipídico con cLDL elevado (Martin-Hopkins o Sampson si los triglicéridos están altos), confirmado y con causas secundarias descartadas', 'Estimar el riesgo (SCORE2 o SCORE2-OP, o PREVENT) y asignar la categoría y el objetivo de cLDL y de colesterol no-HDL', 'Estilo de vida en todos; no usar suplementos', 'Estatina de alta intensidad; anadir ezetimiba si no se alcanza el objetivo; luego ácido bempedoico o iPCSK9 o inclisiran', 'Tras un síndrome coronario agudo, combinación de entrada e intensificación durante el ingreso; perfil de control a las 4-12 semanas']
    },
    {
      nombre: 'Hipercolesterolemia familiar',
      color: '#8c3a34',
      definicion: 'Trastorno hereditario, casi siempre autosómico dominante, del aclaramiento del cLDL, por variantes patogenas en LDLR (el más frecuente), APOB o PCSK9 (ganancia de función), o de herencia recesiva por variantes en LDLRAP1. La forma heterocigota es frecuente (1 de cada 200 a 250 personas) y multiplica por 10 el riesgo de enfermedad coronaria; la homocigota es rara y grave, con ECV en la infancia o la adolescencia.',
      fisiopatologia: 'La reducción del número o de la función de los receptores de LDL hepáticos disminuye el aclaramiento de las particulas LDL, que se acumulan desde el nacimiento; la exposición acumulada muy alta explica la aterosclerosis precoz. La HF es, en esencia, una hipercolesterolemia (ver esa tarjeta) de causa monogenica y de inicio en la vida fetal.',
      epidemiologia: 'Prevalencia de la forma heterocigota de 1/200 a 1/250; solo una pequena fracción esta diagnosticada. La homocigota afecta a alrededor de 1 de cada 300.000 a 1.000.000.',
      factores_riesgo: ['Antecedente familiar de HF o de ECV precoz (varón menor de 55 anos, mujer menor de 60)', 'cLDL muy elevado (habitualmente mayor de 190 mg/dL en el adulto sin tratamiento)', 'Coexistencia de otros factores de riesgo cardiovascular', 'Lp(a) elevada, que agrava mucho el pronóstico'],
      clinica: 'cLDL muy alto de forma persistente; xantomas tendinosos (tendón de Aquiles, extensores de los dedos), arco corneal antes de los 45 anos y xantelasmas; y ECV ateroesclerótica precoz. La forma homocigota anade xantomas cutáneos y planos desde la infancia y estenosis aórtica supravalvular.',
      criterios_dx: 'Criterios clínicos combinados: score de la Dutch Lipid Clinic Network (calculadora disponible) o criterios de Simon Broome, que integran el cLDL, los estigmas, el antecedente personal y familiar de ECV precoz y el antecedente familiar de cLDL alto. Un cLDL muy alto de forma aislada (por ejemplo mayor de 190-250 mg/dL según la edad) tiene una capacidad diagnóstica similar. La confirmación genética es útil pero su ausencia no descarta la HF; en ninos con sospecha se recomienda estudio genético directo.',
      laboratorio: 'Perfil lipídico repetido (para descartar causas secundarias y confirmar la persistencia), Lp(a) (con frecuencia elevada y aditiva al riesgo) y estudio genético dirigido (panel de LDLR, APOB, PCSK9) cuando este disponible.',
      imagen: 'Ecografía del tendón de Aquiles (xantomas) y valoración de aterosclerosis subclínica (calcio coronario, angio-TC, ecografía carotídea) para estratificar, sobre todo en el adulto joven.',
      complementarios: 'Cribado familiar en cascada (medición del cLDL a los familiares de primer grado y, en cascada, a los de segundo grado) en cuanto se identifica un caso índice: es la estrategia más eficiente para diagnosticar la HF.',
      dx_diferencial: 'Hipercolesterolemia poligenica grave (sin xantomas tendinosos, agregación familiar menos marcada), dislipidemia secundaria (hipotiroidismo, síndrome nefrótico, colestasis) y sitosterolemia (rara, con xantomas y respuesta llamativa a la ezetimiba).',
      tx_medico: 'Estilo de vida desde el diagnóstico, pero el pilar es farmacológico y precoz. En ninos con HF, considerar la estatina desde los 8 a 10 anos.',
      tx_farmacologico: 'Estatina de alta intensidad de entrada, casi siempre combinada con ezetimiba, y con un umbral bajo para anadir un inhibidor de PCSK9 o inclisiran, ya que la mayoría de los pacientes no alcanza el objetivo (cLDL menor de 55 mg/dL si hay ECV o riesgo muy alto, menor de 70 en el resto, con reducción de al menos el 50%). En la HF homocigota se anaden evinacumab (inhibidor de ANGPTL3) o lomitapide.',
      tx_intervencionista: 'Aféresis de lipoproteinas en la HF homocigota y en la heterocigota con ECV progresiva pese al tratamiento máximo tolerado; trasplante hepático en casos homocigotos seleccionados.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante un evento cardiovascular, confirmar el diagnóstico de HF, intensificar el tratamiento e iniciar el cribado familiar.',
      seguimiento_ambulatorio: 'Perfil lipídico y adherencia periódicos, vigilancia de aterosclerosis subclínica, seguimiento en una unidad de lípidos y coordinación del cribado familiar en cascada. En mujeres en edad fértil, planificar el embarazo (suspender estatinas, ezetimiba e iPCSK9 antes de la concepcion).',
      pronostico: 'Con diagnóstico precoz y tratamiento intensivo desde la juventud, la esperanza de vida se aproxima a la de la población general; sin tratamiento, el riesgo de enfermedad coronaria precoz es muy alto. La forma homocigota tiene un pronóstico reservado pese al tratamiento.',
      algoritmo: ['cLDL muy alto (mayor de 190 mg/dL en el adulto), xantomas tendinosos o antecedente familiar de cLDL alto o de ECV precoz: sospechar HF', 'Aplicar el score de la Dutch Lipid Clinic Network; estudio genético si esta disponible (directo en ninos)', 'Descartar causas secundarias con un perfil lipídico repetido y pruebas dirigidas', 'Estatina de alta intensidad más ezetimiba de entrada; iPCSK9 o inclisiran con umbral bajo; evinacumab o lomitapide en la homocigota', 'Cribado familiar en cascada del caso índice y seguimiento en una unidad de lípidos']
    },
    {
      nombre: 'Hipertrigliceridemia',
      color: '#3d5a73',
      definicion: 'Elevación de los triglicéridos en ayuno por encima de 150 mg/dL. La forma leve a moderada (150 a 499 mg/dL) contribuye al riesgo cardiovascular residual a través de las lipoproteinas ricas en triglicéridos y sus remanentes; la forma grave (500 mg/dL o mayor, y sobre todo 1000 mg/dL o mayor) anade el riesgo de pancreatitis aguda (ver esa tarjeta).',
      fisiopatologia: `Los triglicéridos circulan en las VLDL (hepáticas) y, tras las comidas, en los quilomicrones (intestinales); su hidrolisis por la lipoproteina lipasa genera remanentes ricos en colesterol que, al contener ApoB, son aterogenicos. La mayor parte de la hipertrigliceridemia es poligenica y se agrava por causas secundarias; la forma más grave (síndrome de quilomicronemia familiar) es monogenica, por deficiencia de la lipoproteina lipasa o de sus cofactores.${figBlock('Figura 4', 'Manejo de la hipertrigliceridemia según el nivel de triglicéridos', htgHtml)}`,
      epidemiologia: 'Muy frecuente, sobre todo asociada a obesidad, síndrome metabólico y diabetes tipo 2. Los triglicéridos mayores de 1000 mg/dL, que concentran el riesgo de pancreatitis, son poco frecuentes.',
      factores_riesgo: ['Obesidad y síndrome metabólico', 'Diabetes tipo 2 mal controlada', 'Consumo de alcohol y dieta con carga glucémica alta y fructosa', 'Hipotiroidismo, enfermedad renal y síndrome nefrótico, embarazo (tercer trimestre)', 'Fármacos (estrógenos orales, corticoides, tamoxifeno, retinoides, inhibidores de proteasa, antipsicóticos de segunda generación, betabloqueadores no selectivos, diuréticos)', 'Predisposición genética poligenica o, en la forma grave, monogenica'],
      clinica: 'Habitualmente asintomática. En la forma grave: xantomas eruptivos, lipemia retinalis, hepatoesplenomegalia, dolor abdominal recurrente y episodios de pancreatitis aguda. Un suero lactescente en el tubo de laboratorio orienta al diagnóstico.',
      criterios_dx: 'Triglicéridos en ayuno de 12 horas de 150 mg/dL o mayor, confirmados; caracterizar la gravedad (leve-moderada frente a grave) y buscar causas secundarias antes de asumir una causa primaria. Con triglicéridos muy altos, calcular el colesterol no-HDL y medir la ApoB, ya que el cLDL no es fiable.',
      laboratorio: 'Perfil lipídico en ayuno, colesterol no-HDL, ApoB, glucemia y HbA1c, TSH, función renal y hepática, orina; en la hipertrigliceridemia grave y de inicio temprano, estudio genético del síndrome de quilomicronemia familiar.',
      imagen: 'No necesaria para el diagnóstico; ecografía o TC abdominal si hay dolor abdominal para valorar pancreatitis.',
      complementarios: 'Valoración por un dietista y, en la forma grave, plan dietético individualizado (restricción de grasa total, evitar el alcohol) dirigido a prevenir la pancreatitis.',
      dx_diferencial: 'Dislipidemia mixta familiar, disbetalipoproteinemia (elevación conjunta de colesterol y triglicéridos con xantomas palmares, por homocigosis de APOE2) y elevaciones secundarias reversibles.',
      tx_medico: 'Tratar siempre las causas secundarias y optimizar el estilo de vida: pérdida de peso, restricción de alcohol, dieta baja en carbohidratos refinados y fructosa, y actividad física; en la hipertrigliceridemia grave, dieta muy baja en grasa. En el paciente de riesgo cardiovascular alto o muy alto, la estatina es la base del tratamiento para reducir el riesgo global, no para normalizar los triglicéridos.',
      tx_farmacologico: 'Con triglicéridos de 150 a 499 mg/dL y riesgo cardiovascular alto pese a estatina y estilo de vida óptimos, se puede anadir icosapent etilo 2 g cada 12 horas (REDUCE-IT redujo los eventos; los aceites de pescado combinados no lo hicieron). Con triglicéridos de 500 mg/dL o mayor, el objetivo pasa a ser prevenir la pancreatitis: fibrato (fenofibrato), ácidos grasos omega-3 a dosis alta y, en el síndrome de quilomicronemia familiar con triglicéridos de 1000 mg/dL o mayor, olezarsen (inhibidor de ApoC-III) o volanesorsen. Evitar los fármacos que elevan los triglicéridos.',
      tx_intervencionista: 'Plasmaféresis en la pancreatitis grave por hipertrigliceridemia con triglicéridos muy altos, cuando no descienden con las medidas médicas.',
      criterios_uci: 'Pancreatitis grave por hipertrigliceridemia (ver esa tarjeta).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Tras una pancreatitis por hipertrigliceridemia, descenso rápido de los triglicéridos (insulina intravenosa con glucosa, ayuno, a veces plasmaféresis), reintroducción progresiva de la dieta y plan para mantener los triglicéridos por debajo de 500 mg/dL.',
      seguimiento_ambulatorio: 'Perfil lipídico periódico, refuerzo dietético y del control del alcohol y de la diabetes, y ajuste del tratamiento según el objetivo (riesgo cardiovascular frente a prevención de pancreatitis).',
      pronostico: 'La forma leve a moderada mejora mucho con el control del peso, el alcohol y la glucemia; la forma grave requiere vigilancia de por vida para prevenir la pancreatitis recurrente.',
      algoritmo: ['Triglicéridos en ayuno de 150 mg/dL o mayor, confirmados: clasificar leve-moderada (150-499) frente a grave (500 o mayor)', 'Buscar y tratar causas secundarias (alcohol, diabetes, fármacos, hipotiroidismo, obesidad); estilo de vida', 'Riesgo cardiovascular alto con triglicéridos 150-499 pese a estatina: valorar icosapent etilo', 'Triglicéridos 500 o mayor: prevenir la pancreatitis con fibrato y omega-3 a dosis alta; olezarsen en el síndrome de quilomicronemia familiar', 'Tras una pancreatitis: descenso rápido de triglicéridos y mantenerlos por debajo de 500 mg/dL']
    },
    {
      nombre: 'Lipoproteina(a) elevada',
      color: '#6b3a5a',
      definicion: 'Concentración elevada de Lp(a), una particula similar a la LDL con una apolipoproteína(a) unida a la ApoB, determinada genéticamente en más del 90% y estable a lo largo de la vida. Es un factor de riesgo causal e independiente de enfermedad cardiovascular ateroesclerótica y de estenosis aórtica calcificada.',
      fisiopatologia: 'La Lp(a) combina propiedades proaterogenicas (transporta colesterol y fosfolípidos oxidados hacia la pared arterial), proinflamatorias y protrombóticas (la apolipoproteína(a) se parece al plasminógeno e interfiere con la fibrinólisis). El riesgo aumenta de forma continua con la concentración y es aditivo al del cLDL.',
      epidemiologia: 'Alrededor de 1 de cada 5 personas tiene la Lp(a) elevada (mayor de 50 mg/dL o 125 nmol/L). Es más alta en poblaciones de ascendencia africana y del sur de Asia. Esta infrautilizada como herramienta de estratificación.',
      factores_riesgo: ['Determinante principal genético (número de repeticiones KIV-2 del gen LPA: menos repeticiones, mayor Lp(a))', 'Hipotiroidismo', 'Enfermedad renal y síndrome nefrótico', 'Menopausia'],
      clinica: 'Asintomática. Su relevancia clínica esta en el antecedente de ECV precoz o recurrente sin causa aparente, la HF con fenotipo especialmente grave y la estenosis aórtica calcificada de aparición temprana.',
      criterios_dx: 'Medición de la Lp(a) al menos una vez en la vida en todo adulto; repetir solo si hay una condición que la altere (menopausia, enfermedad renal o hepática, inflamación) o en ninos con ictus. Interpretar por zonas: menor de 30 mg/dL (75 nmol/L) descarta la Lp(a) como modificador; 30 a 50 (75 a 125) es zona gris; mayor de 50 (125) es modificador de riesgo, y 100 mg/dL (250 nmol/L) o mayor duplica el riesgo (ver Clasificación). No corregir el cLDL por el colesterol de la Lp(a) al fijar los objetivos.',
      laboratorio: 'Lp(a) con un ensayo calibrado, idealmente en nmol/L; perfil lipídico y ApoB; función tiroidea y renal si el valor es sorprendentemente alto.',
      imagen: 'Puntuación de calcio coronario y ecocardiograma (estenosis aórtica) para valorar el impacto de una Lp(a) elevada.',
      complementarios: 'Cribado en cascada de la Lp(a) (solo medición, sin estudio genético) en los familiares de primer grado cuando el caso índice tiene la Lp(a) muy elevada y antecedente familiar de ECV.',
      dx_diferencial: 'El punto no es un diagnóstico diferencial clásico, sino no atribuir a la Lp(a) un cLDL calculado falsamente alto ni dejar de intensificar el resto de factores de riesgo.',
      tx_medico: 'Control estricto de todos los factores de riesgo modificables (cLDL, presión arterial, glucemia, tabaco, peso), ya que todavía no hay un tratamiento aprobado que baje la Lp(a) y reduzca eventos.',
      tx_farmacologico: 'Estatina (puede elevar ligeramente la Lp(a), sin traduccion clínica adversa) para el control del cLDL; los inhibidores de PCSK9 y el inclisiran bajan la Lp(a) un 15 al 30%, pero ese descenso es insuficiente para justificar su uso solo por la Lp(a). El ácido acetilsalicílico en prevención primaria se puede considerar en pacientes con Lp(a) muy elevada y bajo riesgo hemorrágico. Están en fase 3 fármacos específicos que reducen la Lp(a) más del 80% (pelacarsen, olpasiran, lepodisiran, zerlasiran, muvalaplina), sin resultados de eventos todavía.',
      tx_intervencionista: 'Aféresis de lipoproteinas en pacientes con Lp(a) muy elevada (habitualmente mayor de 60 mg/dL) y ECV progresiva pese al control óptimo del resto de factores.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante un evento cardiovascular sin causa clara, medir la Lp(a) e intensificar el resto del tratamiento.',
      seguimiento_ambulatorio: 'No hace falta repetir la Lp(a); el seguimiento se centra en llevar el cLDL y el resto de factores a objetivo y en el cribado familiar.',
      pronostico: 'La Lp(a) elevada aumenta el riesgo de por vida, pero ese riesgo se puede compensar en gran parte con un control agresivo del cLDL y del resto de factores; la llegada de terapias específicas puede cambiar el pronóstico en los proximos anos.',
      algoritmo: ['Medir la Lp(a) una vez en la vida a todo adulto (en nmol/L si es posible)', 'Interpretar por zonas: menor de 30 mg/dL descartada, 30-50 zona gris, mayor de 50 modificador, 100 o mayor duplica el riesgo', 'No corregir el cLDL por el colesterol de la Lp(a) al fijar objetivos', 'Intensificar el control del cLDL y del resto de factores de riesgo; considerar ácido acetilsalicílico en prevención primaria si el riesgo hemorrágico es bajo', 'Aféresis en Lp(a) muy elevada con ECV progresiva; cribado familiar en cascada']
    },
    {
      nombre: 'Dislipidemia secundaria',
      color: '#3f6b52',
      definicion: 'Alteración del perfil lipídico causada por otra enfermedad, un fármaco o un habito, y no por una causa primaria. Es importante identificarla porque a menudo se corrige al tratar la causa y porque cambia la interpretación del riesgo.',
      fisiopatologia: 'El hipotiroidismo reduce la expresión de receptores de LDL (sube el cLDL); el síndrome nefrótico aumenta la síntesis hepática de lipoproteinas por la hipoalbuminemia (sube el cLDL y los triglicéridos); la colestasis eleva el colesterol y genera lipoproteina X; la diabetes y la obesidad producen una dislipidemia aterogenica (triglicéridos altos, HDL bajo, LDL pequenas y densas); el alcohol y los estrógenos orales elevan los triglicéridos; la enfermedad renal crónica combina varios mecanismos.',
      epidemiologia: 'Muy frecuente: buena parte de las dislipidemias nuevas en la consulta tienen un componente secundario, sobre todo por obesidad, diabetes, alcohol y fármacos.',
      factores_riesgo: ['Hipotiroidismo', 'Diabetes tipo 2 y síndrome metabólico, obesidad', 'Consumo de alcohol', 'Enfermedad renal crónica y síndrome nefrótico', 'Colestasis y hepatopatía, embarazo', 'Fármacos (corticoides, ciclosporina y tacrolimus, algunos antirretrovirales, retinoides, estrógenos orales, tamoxifeno, antipsicóticos de segunda generación, diuréticos tiazídicos a dosis altas, betabloqueadores no selectivos)'],
      clinica: 'La del trastorno de base más la alteración lipídica; el patrón orienta a la causa (cLDL muy alto aislado sugiere hipotiroidismo o síndrome nefrótico; hipertrigliceridemia sugiere alcohol, diabetes o fármacos).',
      criterios_dx: 'Ante toda dislipidemia de nueva aparición o de empeoramiento inesperado, solicitar TSH, glucemia y HbA1c, creatinina y filtrado glomerular, transaminasas y fosfatasa alcalina, y examen de orina con cociente albúmina/creatinina, y revisar la lista de fármacos y el consumo de alcohol.',
      laboratorio: 'El descrito, más el perfil lipídico basal y de control tras corregir la causa.',
      imagen: 'Según la sospecha (ecografía tiroidea, ecografía renal, ecografía abdominal en la colestasis).',
      complementarios: 'Revisión farmacológica estructurada; sustituir, cuando sea posible, el fármaco causal por una alternativa con menor efecto sobre los lípidos.',
      dx_diferencial: 'Dislipidemia primaria coexistente (frecuente: la causa secundaria desenmascara o agrava una predisposición genética), por lo que conviene repetir el perfil tras corregir la causa.',
      tx_medico: 'Tratar la enfermedad de base (levotiroxina en el hipotiroidismo, control de la diabetes, abstinencia de alcohol, tratamiento del síndrome nefrótico), retirar o sustituir el fármaco responsable y optimizar el estilo de vida.',
      tx_farmacologico: 'Si tras corregir la causa el perfil no se normaliza y el riesgo cardiovascular lo justifica, tratar como una dislipidemia primaria (estatina y escalones sucesivos). En el hipotiroidismo, corregir primero la función tiroidea antes de valorar la estatina, por el mayor riesgo de miopatía.',
      tx_intervencionista: 'No aplica de forma específica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente ingresado, revisar los fármacos que elevan los lípidos y planificar el control ambulatorio del perfil tras el alta.',
      seguimiento_ambulatorio: 'Repetir el perfil lipídico 6 a 8 semanas después de corregir la causa; si persiste la alteración, estratificar el riesgo y tratar como primaria.',
      pronostico: 'Bueno cuando la causa es reversible; el riesgo cardiovascular acumulado durante el periodo de dislipidemia no controlada persiste, por lo que conviene corregirla pronto.',
      algoritmo: ['Dislipidemia de nueva aparición o empeoramiento inesperado: solicitar TSH, glucemia y HbA1c, función renal y hepática, orina; revisar fármacos y alcohol', 'Identificar la causa (hipotiroidismo, diabetes, síndrome nefrótico, colestasis, alcohol, fármacos)', 'Tratar la causa y retirar o sustituir el fármaco responsable', 'Repetir el perfil lipídico 6-8 semanas después', 'Si persiste y el riesgo lo justifica, tratar como dislipidemia primaria']
    },
    {
      nombre: 'Enfermedad cardiovascular ateroesclerótica',
      color: '#7a1f3d',
      definicion: 'Complicación principal y común de todas las dislipidemias aterogenicas (ver Hipercolesterolemia, Hipercolesterolemia familiar, Lipoproteina(a) elevada y Dislipidemia secundaria): enfermedad coronaria (angina, infarto), enfermedad cerebrovascular (ictus isquémico, ataque isquémico transitorio) y enfermedad arterial periférica, todas por la placa de ateroma.',
      fisiopatologia: 'Sobre el mecanismo de retención y oxidación de las lipoproteinas con ApoB ya descrito en la tarjeta de hipercolesterolemia, la placa crece, se vuelve inestable y se rompe o erosiona, con trombosis y oclusión del vaso; el cLDL circulante es proporcional a la velocidad de progresión de la placa, y bajarlo la estabiliza e incluso la hace regresar.',
      epidemiologia: 'La enfermedad cardiovascular ateroesclerótica es la primera causa de muerte en el mundo, y la dislipidemia es uno de sus principales factores causales modificables junto con la hipertensión, el tabaquismo y la diabetes.',
      factores_riesgo: ['cLDL, colesterol no-HDL y ApoB elevados y su exposición acumulada', 'Lp(a) elevada', 'Hipertensión, diabetes, tabaquismo y enfermedad renal crónica', 'Antecedente familiar de ECV precoz', 'Inflamación (proteína C reactiva de alta sensibilidad elevada)'],
      clinica: 'La del territorio afectado (dolor torácico, disnea, focalidad neurológica, claudicación). En la dislipidemia grave o familiar, la ECV puede debutar de forma precoz (antes de los 55 anos en el varón, 60 en la mujer).',
      criterios_dx: 'Los propios de cada síndrome (electrocardiograma y troponina, imagen coronaria, TC o RM craneal, índice tobillo-brazo). El diagnóstico de ECV establecida coloca al paciente en la categoría de riesgo muy alto y fija el objetivo de cLDL en menos de 55 mg/dL (menos de 40 en el riesgo extremo).',
      laboratorio: 'Perfil lipídico, colesterol no-HDL, ApoB y Lp(a); el resto según el evento.',
      imagen: 'La correspondiente al territorio; la puntuación de calcio coronario es útil en prevención primaria para decidir e intensificar el tratamiento.',
      complementarios: 'Rehabilitación cardiovascular y control integral de los factores de riesgo.',
      dx_diferencial: 'Otras causas de dolor torácico, ictus o claudicación no ateroescleróticas; el objetivo es no infravalorar el papel de la dislipidemia y tratarla de forma intensiva.',
      tx_medico: 'Estilo de vida y control de todos los factores de riesgo; rehabilitación cardiovascular; antiagregación según la indicación del evento.',
      tx_farmacologico: 'Estatina de alta intensidad de por vida con objetivo de cLDL menor de 55 mg/dL y reducción de al menos el 50% (menor de 40 en el riesgo extremo, es decir, eventos recurrentes o enfermedad polivascular); anadir ezetimiba y, si no se alcanza el objetivo, un inhibidor de PCSK9 o inclisiran, o ácido bempedoico. Tras un síndrome coronario agudo, intensificar durante el ingreso y usar combinación de entrada.',
      tx_intervencionista: 'La revascularización trata el evento, no la dislipidemia; el control del cLDL es lo que reduce la recurrencia.',
      criterios_uci: 'Los del evento agudo (síndrome coronario, ictus).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Iniciar o intensificar el tratamiento hipolipemiante antes del alta y solicitar un perfil lipídico; educar sobre la adherencia de por vida.',
      seguimiento_ambulatorio: 'Perfil lipídico a las 4 a 8 semanas del alta y luego periódico hasta alcanzar el objetivo; escalar el tratamiento sin demora si no se alcanza; rehabilitación y control del resto de factores.',
      pronostico: 'Cada 40 mg/dL de descenso mantenido del cLDL reduce alrededor de un 22% los eventos mayores; el beneficio es mayor cuanto antes y cuanto más se baja, sin un limite inferior de seguridad conocido.',
      algoritmo: ['Evento cardiovascular ateroesclerótico: el paciente pasa a riesgo muy alto (objetivo de cLDL menor de 55; menor de 40 si es riesgo extremo)', 'Estatina de alta intensidad de por vida con reducción de al menos el 50%', 'Anadir ezetimiba y, si no se alcanza el objetivo, iPCSK9, inclisiran o ácido bempedoico', 'Tras un síndrome coronario agudo, combinación de entrada e intensificación durante el ingreso', 'Perfil lipídico de control a las 4-8 semanas y escalado sin demora hasta el objetivo']
    },
    {
      nombre: 'Pancreatitis por hipertrigliceridemia grave',
      color: '#8a6a1f',
      definicion: 'Complicación de la hipertrigliceridemia grave (ver esa tarjeta): pancreatitis aguda desencadenada por triglicéridos muy elevados, habitualmente de 1000 mg/dL o mayores, aunque el riesgo empieza a subir a partir de 500 mg/dL. Es la tercera causa de pancreatitis aguda tras la litiasis biliar y el alcohol.',
      fisiopatologia: 'La hidrolisis masiva de los triglicéridos de los quilomicrones por la lipasa pancreática libera grandes cantidades de ácidos grasos libres que son citotóxicos para las células acinares y el endotelio capilar, con isquemia y acidosis locales; la hiperviscosidad por la quilomicronemia contribuye. El cuadro puede ser más grave que la pancreatitis de otras causas.',
      epidemiologia: 'Explica alrededor del 1 al 10% de las pancreatitis agudas; más frecuente en pacientes con diabetes descontrolada, consumo de alcohol, embarazo o fármacos que elevan los triglicéridos sobre una hipertrigliceridemia de base.',
      factores_riesgo: ['Triglicéridos de 1000 mg/dL o mayores (o de 500 o mayores con un desencadenante)', 'Diabetes mal controlada', 'Alcohol', 'Embarazo (tercer trimestre)', 'Estrógenos orales y otros fármacos', 'Síndrome de quilomicronemia familiar'],
      clinica: 'Dolor abdominal epigástrico irradiado a la espalda, náuseas y vómitos, igual que otras pancreatitis; pueden coexistir xantomas eruptivos y lipemia retinalis. La amilasa puede ser falsamente normal por interferencia de los lípidos en el ensayo, por lo que la lipasa y la imagen son más fiables.',
      criterios_dx: 'Los criterios habituales de pancreatitis aguda (dos de tres: dolor típico, lipasa o amilasa 3 veces el limite superior, imagen compatible) con triglicéridos muy elevados y sin otra causa (descartar litiasis y alcohol). Medir los triglicéridos al ingreso, antes de que el ayuno los reduzca.',
      laboratorio: 'Triglicéridos, lipasa, calcio (puede bajar), glucemia (a menudo muy alta), gasometría, función renal y hemograma; perfil lipídico completo al estabilizar.',
      imagen: 'Ecografía abdominal (descartar litiasis) y TC con contraste a las 72 horas si hay duda diagnóstica o sospecha de complicación local.',
      complementarios: 'Búsqueda del desencadenante (alcohol, fármacos, diabetes, embarazo) y, en la hipertrigliceridemia grave de inicio temprano, estudio del síndrome de quilomicronemia familiar.',
      dx_diferencial: 'Pancreatitis biliar o alcohólica (buscar litiasis y consumo de alcohol) y otras causas de dolor abdominal agudo; la coexistencia de varias causas es posible.',
      tx_medico: 'Manejo general de la pancreatitis aguda (fluidoterapia, analgesia, nutrición precoz) más el descenso rápido de los triglicéridos: ayuno, insulina intravenosa en perfusión con glucosa (activa la lipoproteina lipasa) y control de la glucemia. La heparina no se recomienda de rutina.',
      tx_farmacologico: 'Tras la fase aguda, fibrato (fenofibrato) y ácidos grasos omega-3 a dosis alta, más el tratamiento de la causa; olezarsen o volanesorsen en el síndrome de quilomicronemia familiar para prevenir recurrencias.',
      tx_intervencionista: 'Plasmaféresis para bajar los triglicéridos con rapidez en la pancreatitis grave o cuando no descienden con insulina y ayuno; su beneficio sobre la mortalidad no esta demostrado en ensayos, se individualiza.',
      criterios_uci: 'Pancreatitis grave con fallo orgánico, necesidad de insulina intravenosa con vigilancia estrecha de la glucemia y el potasio, o plasmaféresis.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reducir los triglicéridos por debajo de 500 mg/dL antes del alta, reintroducir la dieta de forma progresiva (baja en grasa) e iniciar el tratamiento hipolipemiante oral.',
      seguimiento_ambulatorio: 'Perfil lipídico periódico con objetivo de triglicéridos por debajo de 500 mg/dL de por vida, abstinencia de alcohol, control estricto de la diabetes y del peso, y evitación de los fármacos que elevan los triglicéridos; educación sobre los síntomas de recurrencia.',
      pronostico: 'La mortalidad de un episodio es similar o algo mayor que la de otras pancreatitis; el riesgo real es la recurrencia si los triglicéridos no se mantienen controlados.',
      algoritmo: ['Pancreatitis aguda con triglicéridos muy elevados (habitualmente 1000 mg/dL o mayores) y sin litiasis ni alcohol como causa: pancreatitis por hipertrigliceridemia', 'Manejo general de la pancreatitis más descenso rápido de triglicéridos: ayuno e insulina intravenosa con glucosa', 'Plasmaféresis si es grave o los triglicéridos no descienden', 'Al estabilizar: fibrato y omega-3 a dosis alta; olezarsen en el síndrome de quilomicronemia familiar', 'Mantener los triglicéridos por debajo de 500 mg/dL de por vida y tratar la causa']
    },
    {
      nombre: 'Intolerancia a las estatinas (síntomas musculares asociados a estatinas)',
      color: '#6b4a2e',
      definicion: 'Complicación del tratamiento hipolipemiante: incapacidad de tolerar la dosis de estatina necesaria para alcanzar el objetivo por efectos adversos, casi siempre musculares (síntomas musculares asociados a estatinas), confirmados por su aparición y desaparición al retirar y reintroducir el fármaco. Es mucho menos frecuente de lo que se percibe: en los ensayos clínicos ronda el 5%, frente a un 15 a 20% en la práctica, en buena parte por efecto nocebo.',
      fisiopatologia: 'Los mecanismos propuestos incluyen la reducción de la síntesis de coenzima Q10 y de otros metabolitos del mevalonato en el músculo, alteraciones de la función mitocondrial y del calcio, y una predisposición genética (variantes en SLCO1B1 que reducen el aclaramiento hepático de algunas estatinas). El efecto nocebo, la expectativa de sufrir el efecto adverso, explica una gran parte de los síntomas notificados en la práctica.',
      epidemiologia: 'Prevalencia real baja (en torno al 5% en ensayos ciegos); las mujeres, los ancianos, el hipotiroidismo no tratado, la enfermedad renal o hepática, el ejercicio intenso, la deficiencia de vitamina D y las interacciones farmacológicas aumentan el riesgo.',
      factores_riesgo: ['Dosis alta y estatina más potente', 'Interacciones (inhibidores del CYP3A4, gemfibrozilo, ciclosporina, algunos antirretrovirales)', 'Hipotiroidismo no tratado, enfermedad renal o hepática', 'Edad avanzada, sexo femenino, bajo índice de masa corporal', 'Ejercicio extenuante y consumo de alcohol'],
      clinica: 'Mialgias simétricas y proximales (muslos, hombros), calambres o debilidad, que aparecen en las primeras semanas o meses; sin elevación relevante de la creatina-cinasa en la mayoría. La miopatía con creatina-cinasa muy elevada y la rabdomiólisis son excepcionales. La miositis necrosante autoinmune mediada por anticuerpos anti-HMGCR es una entidad rara que persiste tras suspender la estatina.',
      criterios_dx: 'Relación temporal con el inicio de la estatina, mejoría en 2 a 4 semanas tras suspenderla y reaparición al reintroducirla (idealmente con 2 o más estatinas y a dosis distintas). Descartar y corregir antes las causas alternativas (hipotiroidismo, deficiencia de vitamina D, interacciones, ejercicio). Un cuestionario estructurado (índice de síntomas musculares por estatinas) ayuda a objetivar la relación.',
      laboratorio: 'Creatina-cinasa (basal y durante los síntomas), TSH, vitamina D, función renal y hepática; anticuerpos anti-HMGCR si la debilidad persiste tras la retirada o la creatina-cinasa esta muy elevada.',
      imagen: 'No necesaria salvo sospecha de miopatía inflamatoria (resonancia muscular, y biopsia en la miositis necrosante).',
      complementarios: 'Revisión de las interacciones farmacológicas y corrección de las causas reversibles antes de etiquetar la intolerancia.',
      dx_diferencial: 'Mialgias de otra causa (ejercicio, hipotiroidismo, polimialgia reumática, deficiencia de vitamina D, virosis), efecto nocebo (síntomas también con placebo en los estudios de reexposición ciega) y miositis necrosante autoinmune por anti-HMGCR.',
      tx_medico: 'Estrategia escalonada: descartar y tratar causas alternativas; suspender la estatina 2 a 6 semanas y reintroducirla; probar otra estatina, a dosis más baja o en pauta intermitente (por ejemplo rosuvastatina o atorvastatina 1 a 3 veces por semana), buscando la dosis máxima tolerada. No dejar al paciente sin tratamiento hipolipemiante.',
      tx_farmacologico: 'Maximizar el tratamiento no estatinico: ezetimiba, ácido bempedoico (que en el estudio CLEAR redujo eventos en pacientes intolerantes a las estatinas y produce menos síntomas musculares porque no se activa en el músculo) y un inhibidor de PCSK9 o inclisiran si sigue sin alcanzarse el objetivo. En la miositis necrosante por anti-HMGCR, suspender la estatina de forma definitiva y tratar con inmunosupresión.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Solo la rabdomiólisis grave con lesión renal aguda, excepcional.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Si la intolerancia se detecta durante un ingreso por evento cardiovascular, dejar pautado un esquema no estatinico eficaz y un plan de reexposición.',
      seguimiento_ambulatorio: 'Revalorar periódicamente la tolerancia a una estatina de baja intensidad (muchos pacientes la toleran con el tiempo), vigilar el cumplimiento del objetivo de cLDL con el esquema alternativo y reforzar que el beneficio del tratamiento supera con creces el riesgo de los síntomas musculares.',
      pronostico: 'Con una estrategia escalonada, la gran mayoría de los pacientes intolerantes acaba tolerando alguna estatina a dosis baja o alcanza el objetivo con tratamiento no estatinico; el riesgo real es quedar infratratado por abandonar el tratamiento hipolipemiante.',
      algoritmo: ['Síntomas musculares con relación temporal con la estatina: descartar y corregir causas alternativas (hipotiroidismo, vitamina D, interacciones, ejercicio)', 'Suspender 2-6 semanas y reintroducir; probar otra estatina, a dosis baja o en pauta intermitente, hasta la dosis máxima tolerada', 'Anadir ezetimiba y ácido bempedoico (menos síntomas musculares, redujo eventos en CLEAR)', 'iPCSK9 o inclisiran si no se alcanza el objetivo; no dejar al paciente sin tratamiento hipolipemiante', 'Anti-HMGCR y suspensión definitiva más inmunosupresión si hay miositis necrosante autoinmune']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La dislipidemia se maneja de forma ambulatoria; el contacto hospitalario suele ser un evento cardiovascular ateroesclerótico o una pancreatitis por hipertrigliceridemia. El seguimiento intrahospitalario aprovecha ese contacto para iniciar o intensificar el tratamiento hipolipemiante antes del alta, solicitar un perfil lipídico y la Lp(a), y dejar un plan de seguimiento y de cribado familiar cuando proceda.',
    parametros: ['Perfil lipídico basal (colesterol total, HDL, LDL y triglicéridos), colesterol no-HDL, ApoB y Lp(a) una vez', 'Inicio o intensificación de la estatina de alta intensidad (o del esquema no estatinico si hay intolerancia) durante el ingreso por evento cardiovascular', 'En la hipertrigliceridemia grave, triglicéridos seriados, glucemia y potasio durante la insulina intravenosa, y valoración de plasmaféresis', 'Cribado de causas secundarias (TSH, glucemia y HbA1c, función renal y hepática, orina) antes de etiquetar la dislipidemia como primaria', 'Plan escrito de objetivo de cLDL, escalado de fármacos, cita para perfil de control a las 4 a 12 semanas y, si procede, cribado familiar en cascada de HF o de Lp(a)'],
    criterios_uci_general: 'Los del evento agudo (síndrome coronario, ictus) o de la pancreatitis grave por hipertrigliceridemia (fallo orgánico, insulina intravenosa con vigilancia estrecha, plasmaféresis).',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa, salvo la hipercolesterolemia familiar homocigota, en la que el trasplante hepático es una opción en casos seleccionados.',
    prevencion: 'Primaria: dieta cardiosaludable, actividad física, mantenimiento de un peso adecuado, no fumar y moderacion del alcohol desde edades tempranas, para mantener baja la carga de colesterol a lo largo de la vida. Detección: perfil lipídico a partir de los 20 anos, y antes si hay antecedente familiar de dislipidemia o de enfermedad cardiovascular precoz; medición de la Lp(a) al menos una vez en la vida; cribado en cascada de los familiares de un caso de hipercolesterolemia familiar. Secundaria: alcanzar y mantener el objetivo de cLDL y de colesterol no-HDL con tratamiento escalonado, sin dejar de tratar por síntomas musculares atribuidos a las estatinas.'
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
  'Hipercolesterolemia (colesterol LDL elevado)': { definicion: [7, 3, 1, 8], criterios_dx: [7, 3, 1, 8], laboratorio: [7, 3, 1, 8], tx_farmacologico: [7, 3, 1, 8] },
  'Hipercolesterolemia familiar': { definicion: [16, 3, 1], criterios_dx: [16, 3, 1], laboratorio: [16, 3, 1], tx_farmacologico: [16, 3, 1] },
  'Hipertrigliceridemia': { definicion: [19, 14, 2], criterios_dx: [19, 14, 2], laboratorio: [19, 14, 2], tx_farmacologico: [19, 14, 2] },
  'Lipoproteina(a) elevada': { definicion: [9, 21, 1], criterios_dx: [9, 21, 1], laboratorio: [9, 21, 1], tx_farmacologico: [9, 21, 1] },
  'Dislipidemia secundaria': { definicion: [3, 1], criterios_dx: [3, 1], laboratorio: [3, 1], tx_farmacologico: [3, 1] },
  'Enfermedad cardiovascular ateroesclerótica': { definicion: [8, 7, 10, 11], criterios_dx: [8, 7, 10, 11], laboratorio: [8, 7, 10, 11], tx_farmacologico: [8, 7, 10, 11] },
  'Pancreatitis por hipertrigliceridemia grave': { definicion: [19, 20], criterios_dx: [19, 20], laboratorio: [19, 20], tx_farmacologico: [19, 20] },
  'Intolerancia a las estatinas (síntomas musculares asociados a estatinas)': { definicion: [18, 12], criterios_dx: [18, 12], laboratorio: [18, 12], tx_farmacologico: [18, 12] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Categorías de riesgo y objetivos de cLDL (ESC/EAS)': [3, 4],
  'Categorías de riesgo y objetivos (ACC/AHA 2026)': [1],
  'Intensidad de la estatina': [5, 8],
  'Zonas de decisión de la Lp(a)': [9]
};
export const escalaCalc = {
  'Categorías de riesgo y objetivos de cLDL (ESC/EAS)': 'objetivo-cldl'
};
export const compGroups = [
  { name: 'Fenotipos', items: ['Hipercolesterolemia (colesterol LDL elevado)', 'Hipercolesterolemia familiar', 'Hipertrigliceridemia', 'Lipoproteina(a) elevada', 'Dislipidemia secundaria'] },
  { name: 'Complicaciones', items: ['Enfermedad cardiovascular ateroesclerótica', 'Pancreatitis por hipertrigliceridemia grave', 'Intolerancia a las estatinas (síntomas musculares asociados a estatinas)'] }
];
export const complicacionesIntro = 'Las primeras 5 fichas son los fenotipos de dislipidemia: hipercolesterolemia (cLDL alto, la forma común), hipercolesterolemia familiar (monogenica), hipertrigliceridemia, lipoproteina(a) elevada y dislipidemia secundaria. Las 3 últimas son las complicaciones que determinan la morbimortalidad: la enfermedad cardiovascular ateroesclerótica (la complicación común a casi todos los fenotipos), la pancreatitis por hipertrigliceridemia grave, y la intolerancia a las estatinas como complicación del tratamiento.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificacion' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'DISLIPIDEMIAS', color: '#9a6a2e', target: 'definicion' },
  branches: [
    { title: 'Fenotipos', sub: 'Alteración lipídica predominante', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Hipercolesterolemia', sub: 'cLDL alto; la forma común', color: '#9a6a2e', target: 'complicaciones' },
      { title: 'Hipercolesterolemia familiar', sub: 'Monogenica, 1/200 a 1/250', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hipertrigliceridemia', sub: 'Riesgo residual o de pancreatitis', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Lipoproteina(a) elevada', sub: 'Factor de riesgo causal, genético', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Dislipidemia secundaria', sub: 'Por enfermedad, fármaco o habito', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Determinan la morbimortalidad', color: '#7a1f3d', target: 'complicaciones', leaves: [
      { title: 'ECV ateroesclerótica', sub: 'La complicación común', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Pancreatitis por hipertrigliceridemia', sub: 'Triglicéridos muy elevados', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Intolerancia a las estatinas', sub: 'Complicación del tratamiento', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [1, 6], imagen: [1] };
export const clasificacionCite = [3, 1, 9];
export const seguimientoCite = [1, 2];
