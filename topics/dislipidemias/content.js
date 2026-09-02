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
  subtitulo: 'Modulo 36 · Medicina Interna',
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
    <title id="dl-f1-t">Relacion log-lineal entre el colesterol LDL y el riesgo cardiovascular</title>
    <desc id="dl-f1-d">Grafica en la que el riesgo relativo de enfermedad cardiovascular ateroesclerotica crece de forma continua y aproximadamente log-lineal al aumentar el colesterol LDL, sin un umbral inferior. El riesgo total depende del nivel de colesterol LDL y del tiempo de exposicion acumulada.</desc>
    <line x1="40" y1="150" x2="300" y2="150" stroke="var(--line)"/>
    <line x1="40" y1="20" x2="40" y2="150" stroke="var(--line)"/>
    <path d="M40 146 Q120 138 180 110 Q235 82 290 28" fill="none" stroke="#8c3a34" stroke-width="2.5"/>
    <text x="170" y="170" text-anchor="middle" fill="var(--ink-dim)" font-size="9">Colesterol LDL (o ApoB) circulante</text>
    <text x="16" y="90" text-anchor="middle" fill="var(--ink-dim)" font-size="9" transform="rotate(-90 16 90)">Riesgo de ECV</text>
    <circle cx="110" cy="140" r="3" fill="#3f6b52"/><text x="116" y="136" fill="var(--ink-dim)" font-size="8">55 mg/dL</text>
    <circle cx="200" cy="98" r="3" fill="#8a6a1f"/><text x="150" y="94" fill="var(--ink-dim)" font-size="8">100 mg/dL</text>
    <circle cx="270" cy="42" r="3" fill="#8c3a34"/><text x="214" y="40" fill="var(--ink-dim)" font-size="8">190 mg/dL</text>
  </svg>
  <div style="color:var(--ink-dim);margin-top:4px;">La relacion es continua y sin umbral inferior de seguridad conocido. El efecto es acumulativo: la <strong>carga de colesterol</strong> (aproximadamente nivel de cLDL en mg/dL multiplicado por los anos a ese nivel) determina cuando se manifiesta la aterosclerosis. Cada 40 mg/dL menos de cLDL reduce alrededor de un 22% los eventos cardiovasculares mayores, con independencia del valor de partida.</div>
</div>`;

const objetivosHtml = `
<div style="max-width:560px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <div style="display:grid;grid-template-columns:0.9fr 1.5fr 1fr 1.2fr;gap:2px;min-width:480px;">
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;border-radius:6px 0 0 0;">Categoria</div>
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;">Ejemplos</div>
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;">cLDL (ESC/EAS)</div>
    <div style="font-weight:700;background:var(--panel2);padding:4px 6px;border-radius:0 6px 0 0;">cLDL / no-HDL (ACC/AHA 2026)</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d22;">Extremo</div>
    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d18;">Eventos recurrentes pese a tratamiento; enfermedad polivascular</div>
    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d18;">menor de 40</div>
    <div style="padding:4px 6px;border:1px solid var(--line);background:#7a1f3d18;">menor de 55 / menor de 85</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#8c3a3418;">Muy alto</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">ECV establecida; diabetes con dano de organo; SCORE2 20% o mayor</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 55 y reduccion de al menos 50%</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 55 / menor de 85</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#8a6a1f18;">Alto</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">SCORE2 10-20%; HF; diabetes sin dano de organo; ERC moderada</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 70 y reduccion de al menos 50%</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 70 / menor de 100</div>

    <div style="padding:4px 6px;border:1px solid var(--line);background:#3f6b5218;">Moderado</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">SCORE2 5-10% (o PREVENT 5 a menos de 10%)</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 100</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 100 / menor de 130</div>

    <div style="padding:4px 6px;border:1px solid var(--line);border-radius:0 0 0 6px;background:#3f6b5218;">Bajo</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">SCORE2 menor de 5% (o PREVENT menor de 3%)</div>
    <div style="padding:4px 6px;border:1px solid var(--line);">menor de 116</div>
    <div style="padding:4px 6px;border:1px solid var(--line);border-radius:0 0 6px 0;">Estilo de vida; farmaco si hay modificadores</div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Valores en mg/dL. El porcentaje de reduccion del cLDL respecto al basal es un objetivo en si mismo en las categorias alto y muy alto. La ACC/AHA 2026 recupera objetivos explicitos de cLDL y de colesterol no-HDL.</div>
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
  <div style="color:var(--ink-dim);text-align:center;">Reduccion acumulada aproximada del cLDL respecto al basal. El acido bempedoico (reduccion adicional del 20-25%) es una alternativa oral, util en la intolerancia a las estatinas. Tras un sindrome coronario agudo se usa combinacion de entrada e intensificacion durante el ingreso ("golpear pronto y fuerte").</div>
</div>`;

const htgHtml = `
<div style="display:flex;gap:10px;flex-wrap:wrap;max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="flex:1;min-width:230px;border:1px solid #8a6a1f;border-radius:8px;padding:8px;background:#8a6a1f12;">
    <div style="font-weight:700;color:#8a6a1f;">TG 150 a 499 mg/dL</div>
    <div style="color:var(--ink-dim);margin-top:3px;">Riesgo cardiovascular residual (remanentes). Tratar causas secundarias, estilo de vida y estatina si el riesgo es alto. En riesgo alto con TG persistentes pese a estatina: icosapent etilo 2 g cada 12 h (REDUCE-IT).</div>
  </div>
  <div style="flex:1;min-width:230px;border:1px solid #8c3a34;border-radius:8px;padding:8px;background:#8c3a3418;">
    <div style="font-weight:700;color:#8c3a34;">TG 500 mg/dL o mayor</div>
    <div style="color:var(--ink-dim);margin-top:3px;">Riesgo de pancreatitis (sobre todo si es 1000 o mayor). Dieta muy baja en grasa, evitar alcohol, fibrato (fenofibrato) y omega-3 a dosis alta. Sindrome de quilomicronemia familiar con TG 1000 o mayor: olezarsen o volanesorsen.</div>
  </div>
  <div style="flex:1 1 100%;color:var(--ink-dim);text-align:center;">En la pancreatitis aguda por hipertrigliceridemia: ayuno, insulina intravenosa con glucosa y, si es grave o no desciende, plasmaferesis.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las dislipidemias son alteraciones de las concentraciones de lipidos y lipoproteinas en sangre que aumentan el riesgo de enfermedad cardiovascular ateroesclerotica (ECV) y, en la hipertrigliceridemia grave, de pancreatitis aguda. El colesterol LDL (cLDL) y, en general, todas las lipoproteinas que contienen apolipoproteina B (LDL, VLDL, IDL, remanentes y Lp(a)) son causa directa de aterosclerosis.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">La relacion con el riesgo es log-lineal y acumulativa.</strong>${figBlock('Figura 1', 'Colesterol LDL, riesgo y carga de colesterol', cldlRiesgoHtml)} El riesgo depende del nivel de cLDL y del tiempo de exposicion; mantenerlo bajo desde edades tempranas es lo que mas previene la aterosclerosis.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El perfil lipidico y sus derivados.</strong> Un perfil completo incluye colesterol total, HDL, LDL y trigliceridos. El cLDL se calcula con las formulas de Martin-Hopkins o Sampson-NIH (la de Friedewald no es valida con trigliceridos mayores de 400 mg/dL) o se mide de forma directa. El colesterol no-HDL (colesterol total menos HDL) y la ApoB reflejan mejor la carga aterogenica cuando hay trigliceridos altos, diabetes u obesidad. La Lp(a) debe medirse al menos una vez en la vida a todo adulto. La muestra no necesita ser en ayuno salvo trigliceridos muy elevados.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">El espectro.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hipercolesterolemia (cLDL alto)</strong>: la forma comun, casi siempre poligenica.</li>
    <li><strong>Hipercolesterolemia familiar</strong>: monogenica, frecuente (1/200 a 1/250) e infradiagnosticada.</li>
    <li><strong>Hipertrigliceridemia</strong>: riesgo residual (leve-moderada) o de pancreatitis (grave).</li>
    <li><strong>Lipoproteina(a) elevada</strong>: factor de riesgo causal, geneticamente determinado.</li>
    <li><strong>Dislipidemia secundaria</strong>: por otra enfermedad, un farmaco o un habito.</li>
  </ul>
</div>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> La dislipidemia esta infradiagnosticada e infratratada: solo una minoria de los pacientes de alto o muy alto riesgo alcanza el objetivo de cLDL. El tratamiento (estilo de vida mas estatinas y, si hace falta, ezetimiba, acido bempedoico, inhibidores de PCSK9 o inclisiran) reduce los eventos de forma proporcional al descenso del cLDL. Las complicaciones (ECV ateroesclerotica, pancreatitis por hipertrigliceridemia e intolerancia a las estatinas) se desarrollan en Complicaciones.</p>`;

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
      tituloA: 'Dislipidemia asintomatica (hallazgo de laboratorio)',
      tituloB: 'Dislipidemia con manifestaciones (estigmas, ECV o pancreatitis)',
      compensada: 'La gran mayoria de las dislipidemias son asintomaticas y se detectan en un perfil lipidico solicitado por cribado o por otro motivo. El cribado se recomienda a partir de los 20 anos, antes si hay antecedente familiar de dislipidemia o de enfermedad cardiovascular precoz, y en la infancia si se sospecha hipercolesterolemia familiar.',
      descompensada: 'Estigmas de dislipidemia grave: xantelasmas, arco corneal antes de los 45 anos, xantomas tendinosos (tendon de Aquiles, extensores de los dedos) en la hipercolesterolemia familiar, y xantomas eruptivos y lipemia retinalis en la hipertrigliceridemia grave. O bien la presentacion es un evento cardiovascular ateroesclerotico precoz o una pancreatitis aguda por hipertrigliceridemia.'
    },
    laboratorio: [
      { prueba: 'Perfil lipidico completo (colesterol total, HDL, LDL y trigliceridos)', utilidad: 'Base del diagnostico y del seguimiento. La muestra no necesita ser en ayuno salvo trigliceridos muy elevados o para caracterizar una hipertrigliceridemia; el perfil no en ayuno tiene el mismo valor pronostico.' },
      { prueba: 'Colesterol no-HDL y apolipoproteina B', utilidad: 'Reflejan la carga total de particulas aterogenicas mejor que el cLDL cuando hay trigliceridos altos, diabetes, obesidad o sindrome metabolico; la ApoB no depende del ayuno ni de formulas de estimacion.' },
      { prueba: 'Lipoproteina(a)', utilidad: 'Medir al menos una vez en la vida a todo adulto para refinar el riesgo; esta geneticamente determinada y no requiere repetirse salvo situaciones que la alteren (menopausia, enfermedad renal o hepatica, inflamacion).' },
      { prueba: 'TSH, glucemia y HbA1c, creatinina y filtrado glomerular, transaminasas y examen de orina', utilidad: 'Cribado de causas secundarias (hipotiroidismo, diabetes, enfermedad renal cronica, sindrome nefrotico, colestasis) antes de etiquetar una dislipidemia como primaria.' },
      { prueba: 'Creatina-cinasa', utilidad: 'Basal si hay riesgo de intolerancia a las estatinas o sintomas musculares; no se recomienda su medicion sistematica en el paciente asintomatico.' },
      { prueba: 'Proteina C reactiva de alta sensibilidad', utilidad: 'Modificador de riesgo: un valor de 2 mg/L o mayor de forma persistente, sin causa identificable, apoya intensificar el tratamiento hipolipemiante (ACC/AHA 2026).' }
    ],
    no_invasivos: [
      { metodo: 'SCORE2 y SCORE2-OP (ver el tema de Hipertension Arterial)', interpretacion: 'Estiman el riesgo de eventos cardiovasculares a 10 anos en el adulto aparentemente sano de 40 a 89 anos; SCORE2-Diabetes en la diabetes tipo 2 de 40 a 79 anos sin ECV.', cutoff: 'Riesgo muy alto si es 20% o mayor; alto entre 10 y 20% (calibracion europea)' },
      { metodo: 'Ecuaciones PREVENT (AHA)', interpretacion: 'Alternativa de la guia ACC/AHA 2026: estiman el riesgo de ECV total a 10 y 30 anos en adultos de 30 a 79 anos sin ECV, incorporando la funcion renal y factores metabolicos.', cutoff: 'A 10 anos: bajo menor de 3%; limitrofe 3 a menos de 5%; intermedio 5 a menos de 10%; alto 10% o mayor' },
      { metodo: 'Score de la Dutch Lipid Clinic Network (calculadora disponible)', interpretacion: 'Estima la probabilidad de hipercolesterolemia familiar combinando antecedentes personales y familiares, exploracion (xantomas, arco corneal) y el nivel de cLDL.', cutoff: 'Mayor de 8 puntos: HF cierta; 6 a 8: HF probable; 3 a 5: HF posible' },
      { metodo: 'Puntuacion de calcio coronario', interpretacion: 'Reclasifica el riesgo en el paciente de riesgo intermedio o limitrofe cuando la decision de tratar es incierta, y refina la intensidad del tratamiento.', cutoff: 'Cero unidades Agatston permite diferir la estatina en ausencia de condiciones de alto riesgo; 100 o mayor (o percentil 75 o mayor) indica iniciar tratamiento' }
    ],
    imagen: [
      { modalidad: 'Angio-TC coronaria o ecografia carotidea', hallazgos: 'Detectan aterosclerosis subclinica (placa) que, si esta presente, sube al paciente a una categoria de riesgo mayor y baja el objetivo de cLDL.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Valora la estenosis aortica calcificada, mas frecuente y mas precoz cuando la Lp(a) esta elevada.' },
      { modalidad: 'Ecografia del tendon de Aquiles', hallazgos: 'Engrosamiento o xantomas tendinosos, un criterio diagnostico de hipercolesterolemia familiar.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion de las dislipidemias se hace por el fenotipo lipidico predominante (hipercolesterolemia, hipertrigliceridemia, dislipidemia mixta o Lp(a) elevada), por el origen (primaria, a menudo poligenica o monogenica, o secundaria) y, sobre todo, por la categoria de riesgo cardiovascular del paciente, que define el objetivo de cLDL y de colesterol no-HDL y el porcentaje de reduccion que hay que lograr.${figBlock('Figura 2', 'Objetivos de colesterol LDL y no-HDL por categoria de riesgo', objetivosHtml)}`,
    escalas: [
      { nombre: 'Categorias de riesgo y objetivos de cLDL (ESC/EAS)', componentes: 'Riesgo extremo (eventos recurrentes pese a tratamiento, enfermedad polivascular), muy alto (ECV establecida, diabetes con dano de organo, SCORE2 20% o mayor), alto (SCORE2 10-20%, HF, diabetes sin dano de organo, ERC moderada), moderado (SCORE2 5-10%), bajo (SCORE2 menor de 5%).', formula: 'Objetivo de cLDL por categoria (ver Figura 2). Calculadora disponible.', interpretacion: 'Extremo menor de 40 mg/dL; muy alto menor de 55 y reduccion de al menos 50%; alto menor de 70 y reduccion de al menos 50%; moderado menor de 100; bajo menor de 116. Los objetivos se mantuvieron sin cambios en la actualizacion 2025.' },
      { nombre: 'Categorias de riesgo y objetivos (ACC/AHA 2026)', componentes: 'Riesgo estimado con las ecuaciones PREVENT en prevencion primaria, o categoria clinica (ECV establecida, ERC, diabetes, HF) en el resto.', formula: 'Objetivos de cLDL y de colesterol no-HDL por categoria (ver Figura 2).', interpretacion: 'Prevencion secundaria de muy alto riesgo: cLDL menor de 55 y no-HDL menor de 85. Prevencion secundaria sin muy alto riesgo y primaria de alto riesgo: cLDL menor de 70 y no-HDL menor de 100. Primaria de riesgo intermedio: cLDL menor de 100 y no-HDL menor de 130.' },
      { nombre: 'Intensidad de la estatina', componentes: 'Alta intensidad: atorvastatina 40-80 mg o rosuvastatina 20-40 mg. Moderada intensidad: atorvastatina 10-20, rosuvastatina 5-10, simvastatina 20-40, pravastatina 40-80, pitavastatina 1-4 mg.', formula: 'Reduccion esperada del cLDL respecto al basal.', interpretacion: 'Alta intensidad: reduccion del 50% o mayor. Moderada intensidad: reduccion del 30 al 49%.' },
      { nombre: 'Zonas de decision de la Lp(a)', componentes: 'Concentracion de Lp(a) en mg/dL o nmol/L.', formula: 'Menor de 30 mg/dL (75 nmol/L): descartada como modificador. 30-50 (75-125): zona gris. Mayor de 50 (125): modificador de riesgo; 100 mg/dL (250 nmol/L) o mayor: duplica el riesgo.', interpretacion: 'La Lp(a) elevada baja el umbral para tratar y obliga a un control estricto del cLDL, la presion arterial y la glucemia; todavia no hay un tratamiento especifico aprobado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipercolesterolemia (colesterol LDL elevado)',
      color: '#9a6a2e',
      definicion: 'Elevacion del colesterol LDL (y del colesterol no-HDL y de la ApoB) por encima del nivel deseable para el riesgo del paciente. La forma comun es poligenica (muchas variantes de efecto pequeno que interaccionan con la dieta, el peso y el sedentarismo); una minoria es monogenica (hipercolesterolemia familiar, ver esa tarjeta) o secundaria (ver esa tarjeta). Es el principal factor causal modificable de la enfermedad cardiovascular ateroesclerotica.',
      fisiopatologia: 'El cLDL y el resto de lipoproteinas con ApoB atraviesan el endotelio y quedan retenidas en la intima arterial, donde se oxidan y desencadenan una respuesta inflamatoria con reclutamiento de monocitos, formacion de celulas espumosas y crecimiento de la placa de ateroma. La relacion entre el cLDL y el riesgo es log-lineal y depende de la exposicion acumulada en el tiempo (carga de colesterol): mantener el cLDL bajo desde edades tempranas es lo que mas previene la aterosclerosis. Cada 40 mg/dL de descenso del cLDL reduce alrededor de un 22% los eventos cardiovasculares mayores, con independencia del valor de partida.',
      epidemiologia: 'La hipercolesterolemia es muy prevalente (mas de la mitad de los adultos en muchos paises tiene el colesterol total elevado) y esta infradiagnosticada e infratratada: solo una minoria de los pacientes de alto o muy alto riesgo alcanza el objetivo de cLDL.',
      factores_riesgo: ['Dieta rica en grasas saturadas y trans y en azucares', 'Sobrepeso y obesidad, sedentarismo y consumo excesivo de alcohol', 'Predisposicion poligenica', 'Causas secundarias (hipotiroidismo, colestasis, sindrome nefrotico, ERC, embarazo)', 'Farmacos (corticoides, ciclosporina, algunos antirretrovirales, retinoides, diureticos tiazidicos a dosis altas)', 'Edad'],
      clinica: 'Asintomatica. En las formas graves o familiares aparecen estigmas: xantelasmas, arco corneal (sugestivo de HF si es antes de los 45 anos) y xantomas tendinosos. La presentacion puede ser directamente un evento cardiovascular precoz (ver Enfermedad cardiovascular ateroesclerotica).',
      criterios_dx: 'Perfil lipidico con cLDL elevado para la categoria de riesgo del paciente, confirmado en 2 determinaciones y tras descartar causas secundarias. Calcular el cLDL con Martin-Hopkins o Sampson-NIH (la formula de Friedewald no es valida con trigliceridos mayores de 400 mg/dL) o medirlo de forma directa; usar el colesterol no-HDL y la ApoB si los trigliceridos estan altos. Estimar el riesgo con SCORE2 o SCORE2-OP o con las ecuaciones PREVENT para asignar la categoria y el objetivo (ver Clasificacion).',
      laboratorio: 'Perfil lipidico, colesterol no-HDL, ApoB, Lp(a) una vez, y cribado de causas secundarias (TSH, glucemia, funcion renal y hepatica, orina). Proteina C reactiva de alta sensibilidad como modificador de riesgo en casos seleccionados.',
      imagen: 'No necesaria para el diagnostico; puntuacion de calcio coronario o ecografia carotidea para reclasificar el riesgo cuando la decision de tratar es incierta.',
      complementarios: 'Cribado familiar en cascada si se sospecha HF o si la Lp(a) esta muy elevada; estimacion del riesgo a lo largo de la vida (modelos LIFE-CVD) en el paciente joven, ya que SCORE2 no esta validado por debajo de los 40 anos.',
      dx_diferencial: 'Hipercolesterolemia familiar (cLDL muy alto, xantomas tendinosos, antecedente familiar de ECV precoz, herencia autosomica dominante), dislipidemia secundaria (corregible al tratar la causa) y elevacion aislada de la Lp(a) que infla el cLDL medido.',
      tx_medico: 'Estilo de vida en todos: dieta cardiosaludable tipo mediterranea o DASH (rica en frutas, verduras, cereales integrales, legumbres, frutos secos y grasas insaturadas; baja en grasas saturadas y trans, azucares y carbohidratos refinados), actividad fisica de al menos 150 minutos semanales de intensidad moderada, perdida de peso, abandono del tabaco y moderacion del alcohol. Los suplementos y las vitaminas no se recomiendan para bajar el cLDL ni el riesgo (recomendacion en contra). Iniciar el farmaco segun la categoria de riesgo y la distancia al objetivo; en el paciente de alto o muy alto riesgo lejos del objetivo, empezar con una combinacion.',
      tx_farmacologico: `Estatina de alta intensidad de eleccion (atorvastatina 40-80 mg o rosuvastatina 20-40 mg; reduccion del cLDL de alrededor del 50%). Si no se alcanza el objetivo, anadir ezetimiba 10 mg (reduccion combinada de hasta el 65%). Tercer escalon: acido bempedoico (util tambien en la intolerancia a las estatinas) o un inhibidor de PCSK9, ya sea un anticuerpo monoclonal (evolocumab, alirocumab) o el ARN de interferencia inclisiran (reduccion adicional del 50 al 60%). Tras un sindrome coronario agudo, intensificar durante el ingreso y usar combinacion de entrada si la estatina sola no alcanzara el objetivo.${figBlock('Figura 3', 'Escalonamiento del tratamiento hipolipemiante', escalonHtml)}`,
      tx_intervencionista: 'La aferesis de lipoproteinas se reserva para la hipercolesterolemia refractaria (habitualmente HF con ECV progresiva pese al tratamiento maximo) y para la HF homocigota.',
      criterios_uci: 'No aplica a la dislipidemia en si.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En una hospitalizacion por evento cardiovascular, iniciar o intensificar el tratamiento hipolipemiante antes del alta y solicitar un perfil lipidico basal.',
      seguimiento_ambulatorio: 'Perfil lipidico a las 4 a 12 semanas de iniciar o cambiar el tratamiento, luego cada 3 a 12 meses; transaminasas basales y solo si hay sintomas despues; creatina-cinasa solo si hay sintomas musculares. Reforzar la adherencia (una causa mayor de no alcanzar el objetivo) y el estilo de vida.',
      pronostico: 'El beneficio es proporcional y sostenido: alcanzar y mantener el objetivo de cLDL reduce de forma marcada los eventos, y cuanto antes se logra, mayor es el beneficio a lo largo de la vida. No hay un limite inferior de seguridad conocido para el cLDL.',
      algoritmo: ['Perfil lipidico con cLDL elevado (Martin-Hopkins o Sampson si los trigliceridos estan altos), confirmado y con causas secundarias descartadas', 'Estimar el riesgo (SCORE2 o SCORE2-OP, o PREVENT) y asignar la categoria y el objetivo de cLDL y de colesterol no-HDL', 'Estilo de vida en todos; no usar suplementos', 'Estatina de alta intensidad; anadir ezetimiba si no se alcanza el objetivo; luego acido bempedoico o iPCSK9 o inclisiran', 'Tras un sindrome coronario agudo, combinacion de entrada e intensificacion durante el ingreso; perfil de control a las 4-12 semanas']
    },
    {
      nombre: 'Hipercolesterolemia familiar',
      color: '#8c3a34',
      definicion: 'Trastorno hereditario, casi siempre autosomico dominante, del aclaramiento del cLDL, por variantes patogenas en LDLR (el mas frecuente), APOB o PCSK9 (ganancia de funcion), o de herencia recesiva por variantes en LDLRAP1. La forma heterocigota es frecuente (1 de cada 200 a 250 personas) y multiplica por 10 el riesgo de enfermedad coronaria; la homocigota es rara y grave, con ECV en la infancia o la adolescencia.',
      fisiopatologia: 'La reduccion del numero o de la funcion de los receptores de LDL hepaticos disminuye el aclaramiento de las particulas LDL, que se acumulan desde el nacimiento; la exposicion acumulada muy alta explica la aterosclerosis precoz. La HF es, en esencia, una hipercolesterolemia (ver esa tarjeta) de causa monogenica y de inicio en la vida fetal.',
      epidemiologia: 'Prevalencia de la forma heterocigota de 1/200 a 1/250; solo una pequena fraccion esta diagnosticada. La homocigota afecta a alrededor de 1 de cada 300.000 a 1.000.000.',
      factores_riesgo: ['Antecedente familiar de HF o de ECV precoz (varon menor de 55 anos, mujer menor de 60)', 'cLDL muy elevado (habitualmente mayor de 190 mg/dL en el adulto sin tratamiento)', 'Coexistencia de otros factores de riesgo cardiovascular', 'Lp(a) elevada, que agrava mucho el pronostico'],
      clinica: 'cLDL muy alto de forma persistente; xantomas tendinosos (tendon de Aquiles, extensores de los dedos), arco corneal antes de los 45 anos y xantelasmas; y ECV ateroesclerotica precoz. La forma homocigota anade xantomas cutaneos y planos desde la infancia y estenosis aortica supravalvular.',
      criterios_dx: 'Criterios clinicos combinados: score de la Dutch Lipid Clinic Network (calculadora disponible) o criterios de Simon Broome, que integran el cLDL, los estigmas, el antecedente personal y familiar de ECV precoz y el antecedente familiar de cLDL alto. Un cLDL muy alto de forma aislada (por ejemplo mayor de 190-250 mg/dL segun la edad) tiene una capacidad diagnostica similar. La confirmacion genetica es util pero su ausencia no descarta la HF; en ninos con sospecha se recomienda estudio genetico directo.',
      laboratorio: 'Perfil lipidico repetido (para descartar causas secundarias y confirmar la persistencia), Lp(a) (con frecuencia elevada y aditiva al riesgo) y estudio genetico dirigido (panel de LDLR, APOB, PCSK9) cuando este disponible.',
      imagen: 'Ecografia del tendon de Aquiles (xantomas) y valoracion de aterosclerosis subclinica (calcio coronario, angio-TC, ecografia carotidea) para estratificar, sobre todo en el adulto joven.',
      complementarios: 'Cribado familiar en cascada (medicion del cLDL a los familiares de primer grado y, en cascada, a los de segundo grado) en cuanto se identifica un caso indice: es la estrategia mas eficiente para diagnosticar la HF.',
      dx_diferencial: 'Hipercolesterolemia poligenica grave (sin xantomas tendinosos, agregacion familiar menos marcada), dislipidemia secundaria (hipotiroidismo, sindrome nefrotico, colestasis) y sitosterolemia (rara, con xantomas y respuesta llamativa a la ezetimiba).',
      tx_medico: 'Estilo de vida desde el diagnostico, pero el pilar es farmacologico y precoz. En ninos con HF, considerar la estatina desde los 8 a 10 anos.',
      tx_farmacologico: 'Estatina de alta intensidad de entrada, casi siempre combinada con ezetimiba, y con un umbral bajo para anadir un inhibidor de PCSK9 o inclisiran, ya que la mayoria de los pacientes no alcanza el objetivo (cLDL menor de 55 mg/dL si hay ECV o riesgo muy alto, menor de 70 en el resto, con reduccion de al menos el 50%). En la HF homocigota se anaden evinacumab (inhibidor de ANGPTL3) o lomitapide.',
      tx_intervencionista: 'Aferesis de lipoproteinas en la HF homocigota y en la heterocigota con ECV progresiva pese al tratamiento maximo tolerado; trasplante hepatico en casos homocigotos seleccionados.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante un evento cardiovascular, confirmar el diagnostico de HF, intensificar el tratamiento e iniciar el cribado familiar.',
      seguimiento_ambulatorio: 'Perfil lipidico y adherencia periodicos, vigilancia de aterosclerosis subclinica, seguimiento en una unidad de lipidos y coordinacion del cribado familiar en cascada. En mujeres en edad fertil, planificar el embarazo (suspender estatinas, ezetimiba e iPCSK9 antes de la concepcion).',
      pronostico: 'Con diagnostico precoz y tratamiento intensivo desde la juventud, la esperanza de vida se aproxima a la de la poblacion general; sin tratamiento, el riesgo de enfermedad coronaria precoz es muy alto. La forma homocigota tiene un pronostico reservado pese al tratamiento.',
      algoritmo: ['cLDL muy alto (mayor de 190 mg/dL en el adulto), xantomas tendinosos o antecedente familiar de cLDL alto o de ECV precoz: sospechar HF', 'Aplicar el score de la Dutch Lipid Clinic Network; estudio genetico si esta disponible (directo en ninos)', 'Descartar causas secundarias con un perfil lipidico repetido y pruebas dirigidas', 'Estatina de alta intensidad mas ezetimiba de entrada; iPCSK9 o inclisiran con umbral bajo; evinacumab o lomitapide en la homocigota', 'Cribado familiar en cascada del caso indice y seguimiento en una unidad de lipidos']
    },
    {
      nombre: 'Hipertrigliceridemia',
      color: '#3d5a73',
      definicion: 'Elevacion de los trigliceridos en ayuno por encima de 150 mg/dL. La forma leve a moderada (150 a 499 mg/dL) contribuye al riesgo cardiovascular residual a traves de las lipoproteinas ricas en trigliceridos y sus remanentes; la forma grave (500 mg/dL o mayor, y sobre todo 1000 mg/dL o mayor) anade el riesgo de pancreatitis aguda (ver esa tarjeta).',
      fisiopatologia: `Los trigliceridos circulan en las VLDL (hepaticas) y, tras las comidas, en los quilomicrones (intestinales); su hidrolisis por la lipoproteina lipasa genera remanentes ricos en colesterol que, al contener ApoB, son aterogenicos. La mayor parte de la hipertrigliceridemia es poligenica y se agrava por causas secundarias; la forma mas grave (sindrome de quilomicronemia familiar) es monogenica, por deficiencia de la lipoproteina lipasa o de sus cofactores.${figBlock('Figura 4', 'Manejo de la hipertrigliceridemia segun el nivel de trigliceridos', htgHtml)}`,
      epidemiologia: 'Muy frecuente, sobre todo asociada a obesidad, sindrome metabolico y diabetes tipo 2. Los trigliceridos mayores de 1000 mg/dL, que concentran el riesgo de pancreatitis, son poco frecuentes.',
      factores_riesgo: ['Obesidad y sindrome metabolico', 'Diabetes tipo 2 mal controlada', 'Consumo de alcohol y dieta con carga glucemica alta y fructosa', 'Hipotiroidismo, enfermedad renal y sindrome nefrotico, embarazo (tercer trimestre)', 'Farmacos (estrogenos orales, corticoides, tamoxifeno, retinoides, inhibidores de proteasa, antipsicoticos de segunda generacion, betabloqueadores no selectivos, diureticos)', 'Predisposicion genetica poligenica o, en la forma grave, monogenica'],
      clinica: 'Habitualmente asintomatica. En la forma grave: xantomas eruptivos, lipemia retinalis, hepatoesplenomegalia, dolor abdominal recurrente y episodios de pancreatitis aguda. Un suero lactescente en el tubo de laboratorio orienta al diagnostico.',
      criterios_dx: 'Trigliceridos en ayuno de 12 horas de 150 mg/dL o mayor, confirmados; caracterizar la gravedad (leve-moderada frente a grave) y buscar causas secundarias antes de asumir una causa primaria. Con trigliceridos muy altos, calcular el colesterol no-HDL y medir la ApoB, ya que el cLDL no es fiable.',
      laboratorio: 'Perfil lipidico en ayuno, colesterol no-HDL, ApoB, glucemia y HbA1c, TSH, funcion renal y hepatica, orina; en la hipertrigliceridemia grave y de inicio temprano, estudio genetico del sindrome de quilomicronemia familiar.',
      imagen: 'No necesaria para el diagnostico; ecografia o TC abdominal si hay dolor abdominal para valorar pancreatitis.',
      complementarios: 'Valoracion por un dietista y, en la forma grave, plan dietetico individualizado (restriccion de grasa total, evitar el alcohol) dirigido a prevenir la pancreatitis.',
      dx_diferencial: 'Dislipidemia mixta familiar, disbetalipoproteinemia (elevacion conjunta de colesterol y trigliceridos con xantomas palmares, por homocigosis de APOE2) y elevaciones secundarias reversibles.',
      tx_medico: 'Tratar siempre las causas secundarias y optimizar el estilo de vida: perdida de peso, restriccion de alcohol, dieta baja en carbohidratos refinados y fructosa, y actividad fisica; en la hipertrigliceridemia grave, dieta muy baja en grasa. En el paciente de riesgo cardiovascular alto o muy alto, la estatina es la base del tratamiento para reducir el riesgo global, no para normalizar los trigliceridos.',
      tx_farmacologico: 'Con trigliceridos de 150 a 499 mg/dL y riesgo cardiovascular alto pese a estatina y estilo de vida optimos, se puede anadir icosapent etilo 2 g cada 12 horas (REDUCE-IT redujo los eventos; los aceites de pescado combinados no lo hicieron). Con trigliceridos de 500 mg/dL o mayor, el objetivo pasa a ser prevenir la pancreatitis: fibrato (fenofibrato), acidos grasos omega-3 a dosis alta y, en el sindrome de quilomicronemia familiar con trigliceridos de 1000 mg/dL o mayor, olezarsen (inhibidor de ApoC-III) o volanesorsen. Evitar los farmacos que elevan los trigliceridos.',
      tx_intervencionista: 'Plasmaferesis en la pancreatitis grave por hipertrigliceridemia con trigliceridos muy altos, cuando no descienden con las medidas medicas.',
      criterios_uci: 'Pancreatitis grave por hipertrigliceridemia (ver esa tarjeta).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Tras una pancreatitis por hipertrigliceridemia, descenso rapido de los trigliceridos (insulina intravenosa con glucosa, ayuno, a veces plasmaferesis), reintroduccion progresiva de la dieta y plan para mantener los trigliceridos por debajo de 500 mg/dL.',
      seguimiento_ambulatorio: 'Perfil lipidico periodico, refuerzo dietetico y del control del alcohol y de la diabetes, y ajuste del tratamiento segun el objetivo (riesgo cardiovascular frente a prevencion de pancreatitis).',
      pronostico: 'La forma leve a moderada mejora mucho con el control del peso, el alcohol y la glucemia; la forma grave requiere vigilancia de por vida para prevenir la pancreatitis recurrente.',
      algoritmo: ['Trigliceridos en ayuno de 150 mg/dL o mayor, confirmados: clasificar leve-moderada (150-499) frente a grave (500 o mayor)', 'Buscar y tratar causas secundarias (alcohol, diabetes, farmacos, hipotiroidismo, obesidad); estilo de vida', 'Riesgo cardiovascular alto con trigliceridos 150-499 pese a estatina: valorar icosapent etilo', 'Trigliceridos 500 o mayor: prevenir la pancreatitis con fibrato y omega-3 a dosis alta; olezarsen en el sindrome de quilomicronemia familiar', 'Tras una pancreatitis: descenso rapido de trigliceridos y mantenerlos por debajo de 500 mg/dL']
    },
    {
      nombre: 'Lipoproteina(a) elevada',
      color: '#6b3a5a',
      definicion: 'Concentracion elevada de Lp(a), una particula similar a la LDL con una apolipoproteina(a) unida a la ApoB, determinada geneticamente en mas del 90% y estable a lo largo de la vida. Es un factor de riesgo causal e independiente de enfermedad cardiovascular ateroesclerotica y de estenosis aortica calcificada.',
      fisiopatologia: 'La Lp(a) combina propiedades proaterogenicas (transporta colesterol y fosfolipidos oxidados hacia la pared arterial), proinflamatorias y protromboticas (la apolipoproteina(a) se parece al plasminogeno e interfiere con la fibrinolisis). El riesgo aumenta de forma continua con la concentracion y es aditivo al del cLDL.',
      epidemiologia: 'Alrededor de 1 de cada 5 personas tiene la Lp(a) elevada (mayor de 50 mg/dL o 125 nmol/L). Es mas alta en poblaciones de ascendencia africana y del sur de Asia. Esta infrautilizada como herramienta de estratificacion.',
      factores_riesgo: ['Determinante principal genetico (numero de repeticiones KIV-2 del gen LPA: menos repeticiones, mayor Lp(a))', 'Hipotiroidismo', 'Enfermedad renal y sindrome nefrotico', 'Menopausia'],
      clinica: 'Asintomatica. Su relevancia clinica esta en el antecedente de ECV precoz o recurrente sin causa aparente, la HF con fenotipo especialmente grave y la estenosis aortica calcificada de aparicion temprana.',
      criterios_dx: 'Medicion de la Lp(a) al menos una vez en la vida en todo adulto; repetir solo si hay una condicion que la altere (menopausia, enfermedad renal o hepatica, inflamacion) o en ninos con ictus. Interpretar por zonas: menor de 30 mg/dL (75 nmol/L) descarta la Lp(a) como modificador; 30 a 50 (75 a 125) es zona gris; mayor de 50 (125) es modificador de riesgo, y 100 mg/dL (250 nmol/L) o mayor duplica el riesgo (ver Clasificacion). No corregir el cLDL por el colesterol de la Lp(a) al fijar los objetivos.',
      laboratorio: 'Lp(a) con un ensayo calibrado, idealmente en nmol/L; perfil lipidico y ApoB; funcion tiroidea y renal si el valor es sorprendentemente alto.',
      imagen: 'Puntuacion de calcio coronario y ecocardiograma (estenosis aortica) para valorar el impacto de una Lp(a) elevada.',
      complementarios: 'Cribado en cascada de la Lp(a) (solo medicion, sin estudio genetico) en los familiares de primer grado cuando el caso indice tiene la Lp(a) muy elevada y antecedente familiar de ECV.',
      dx_diferencial: 'El punto no es un diagnostico diferencial clasico, sino no atribuir a la Lp(a) un cLDL calculado falsamente alto ni dejar de intensificar el resto de factores de riesgo.',
      tx_medico: 'Control estricto de todos los factores de riesgo modificables (cLDL, presion arterial, glucemia, tabaco, peso), ya que todavia no hay un tratamiento aprobado que baje la Lp(a) y reduzca eventos.',
      tx_farmacologico: 'Estatina (puede elevar ligeramente la Lp(a), sin traduccion clinica adversa) para el control del cLDL; los inhibidores de PCSK9 y el inclisiran bajan la Lp(a) un 15 al 30%, pero ese descenso es insuficiente para justificar su uso solo por la Lp(a). El acido acetilsalicilico en prevencion primaria se puede considerar en pacientes con Lp(a) muy elevada y bajo riesgo hemorragico. Estan en fase 3 farmacos especificos que reducen la Lp(a) mas del 80% (pelacarsen, olpasiran, lepodisiran, zerlasiran, muvalaplina), sin resultados de eventos todavia.',
      tx_intervencionista: 'Aferesis de lipoproteinas en pacientes con Lp(a) muy elevada (habitualmente mayor de 60 mg/dL) y ECV progresiva pese al control optimo del resto de factores.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante un evento cardiovascular sin causa clara, medir la Lp(a) e intensificar el resto del tratamiento.',
      seguimiento_ambulatorio: 'No hace falta repetir la Lp(a); el seguimiento se centra en llevar el cLDL y el resto de factores a objetivo y en el cribado familiar.',
      pronostico: 'La Lp(a) elevada aumenta el riesgo de por vida, pero ese riesgo se puede compensar en gran parte con un control agresivo del cLDL y del resto de factores; la llegada de terapias especificas puede cambiar el pronostico en los proximos anos.',
      algoritmo: ['Medir la Lp(a) una vez en la vida a todo adulto (en nmol/L si es posible)', 'Interpretar por zonas: menor de 30 mg/dL descartada, 30-50 zona gris, mayor de 50 modificador, 100 o mayor duplica el riesgo', 'No corregir el cLDL por el colesterol de la Lp(a) al fijar objetivos', 'Intensificar el control del cLDL y del resto de factores de riesgo; considerar acido acetilsalicilico en prevencion primaria si el riesgo hemorragico es bajo', 'Aferesis en Lp(a) muy elevada con ECV progresiva; cribado familiar en cascada']
    },
    {
      nombre: 'Dislipidemia secundaria',
      color: '#3f6b52',
      definicion: 'Alteracion del perfil lipidico causada por otra enfermedad, un farmaco o un habito, y no por una causa primaria. Es importante identificarla porque a menudo se corrige al tratar la causa y porque cambia la interpretacion del riesgo.',
      fisiopatologia: 'El hipotiroidismo reduce la expresion de receptores de LDL (sube el cLDL); el sindrome nefrotico aumenta la sintesis hepatica de lipoproteinas por la hipoalbuminemia (sube el cLDL y los trigliceridos); la colestasis eleva el colesterol y genera lipoproteina X; la diabetes y la obesidad producen una dislipidemia aterogenica (trigliceridos altos, HDL bajo, LDL pequenas y densas); el alcohol y los estrogenos orales elevan los trigliceridos; la enfermedad renal cronica combina varios mecanismos.',
      epidemiologia: 'Muy frecuente: buena parte de las dislipidemias nuevas en la consulta tienen un componente secundario, sobre todo por obesidad, diabetes, alcohol y farmacos.',
      factores_riesgo: ['Hipotiroidismo', 'Diabetes tipo 2 y sindrome metabolico, obesidad', 'Consumo de alcohol', 'Enfermedad renal cronica y sindrome nefrotico', 'Colestasis y hepatopatia, embarazo', 'Farmacos (corticoides, ciclosporina y tacrolimus, algunos antirretrovirales, retinoides, estrogenos orales, tamoxifeno, antipsicoticos de segunda generacion, diureticos tiazidicos a dosis altas, betabloqueadores no selectivos)'],
      clinica: 'La del trastorno de base mas la alteracion lipidica; el patron orienta a la causa (cLDL muy alto aislado sugiere hipotiroidismo o sindrome nefrotico; hipertrigliceridemia sugiere alcohol, diabetes o farmacos).',
      criterios_dx: 'Ante toda dislipidemia de nueva aparicion o de empeoramiento inesperado, solicitar TSH, glucemia y HbA1c, creatinina y filtrado glomerular, transaminasas y fosfatasa alcalina, y examen de orina con cociente albumina/creatinina, y revisar la lista de farmacos y el consumo de alcohol.',
      laboratorio: 'El descrito, mas el perfil lipidico basal y de control tras corregir la causa.',
      imagen: 'Segun la sospecha (ecografia tiroidea, ecografia renal, ecografia abdominal en la colestasis).',
      complementarios: 'Revision farmacologica estructurada; sustituir, cuando sea posible, el farmaco causal por una alternativa con menor efecto sobre los lipidos.',
      dx_diferencial: 'Dislipidemia primaria coexistente (frecuente: la causa secundaria desenmascara o agrava una predisposicion genetica), por lo que conviene repetir el perfil tras corregir la causa.',
      tx_medico: 'Tratar la enfermedad de base (levotiroxina en el hipotiroidismo, control de la diabetes, abstinencia de alcohol, tratamiento del sindrome nefrotico), retirar o sustituir el farmaco responsable y optimizar el estilo de vida.',
      tx_farmacologico: 'Si tras corregir la causa el perfil no se normaliza y el riesgo cardiovascular lo justifica, tratar como una dislipidemia primaria (estatina y escalones sucesivos). En el hipotiroidismo, corregir primero la funcion tiroidea antes de valorar la estatina, por el mayor riesgo de miopatia.',
      tx_intervencionista: 'No aplica de forma especifica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente ingresado, revisar los farmacos que elevan los lipidos y planificar el control ambulatorio del perfil tras el alta.',
      seguimiento_ambulatorio: 'Repetir el perfil lipidico 6 a 8 semanas despues de corregir la causa; si persiste la alteracion, estratificar el riesgo y tratar como primaria.',
      pronostico: 'Bueno cuando la causa es reversible; el riesgo cardiovascular acumulado durante el periodo de dislipidemia no controlada persiste, por lo que conviene corregirla pronto.',
      algoritmo: ['Dislipidemia de nueva aparicion o empeoramiento inesperado: solicitar TSH, glucemia y HbA1c, funcion renal y hepatica, orina; revisar farmacos y alcohol', 'Identificar la causa (hipotiroidismo, diabetes, sindrome nefrotico, colestasis, alcohol, farmacos)', 'Tratar la causa y retirar o sustituir el farmaco responsable', 'Repetir el perfil lipidico 6-8 semanas despues', 'Si persiste y el riesgo lo justifica, tratar como dislipidemia primaria']
    },
    {
      nombre: 'Enfermedad cardiovascular ateroesclerotica',
      color: '#7a1f3d',
      definicion: 'Complicacion principal y comun de todas las dislipidemias aterogenicas (ver Hipercolesterolemia, Hipercolesterolemia familiar, Lipoproteina(a) elevada y Dislipidemia secundaria): enfermedad coronaria (angina, infarto), enfermedad cerebrovascular (ictus isquemico, ataque isquemico transitorio) y enfermedad arterial periferica, todas por la placa de ateroma.',
      fisiopatologia: 'Sobre el mecanismo de retencion y oxidacion de las lipoproteinas con ApoB ya descrito en la tarjeta de hipercolesterolemia, la placa crece, se vuelve inestable y se rompe o erosiona, con trombosis y oclusion del vaso; el cLDL circulante es proporcional a la velocidad de progresion de la placa, y bajarlo la estabiliza e incluso la hace regresar.',
      epidemiologia: 'La enfermedad cardiovascular ateroesclerotica es la primera causa de muerte en el mundo, y la dislipidemia es uno de sus principales factores causales modificables junto con la hipertension, el tabaquismo y la diabetes.',
      factores_riesgo: ['cLDL, colesterol no-HDL y ApoB elevados y su exposicion acumulada', 'Lp(a) elevada', 'Hipertension, diabetes, tabaquismo y enfermedad renal cronica', 'Antecedente familiar de ECV precoz', 'Inflamacion (proteina C reactiva de alta sensibilidad elevada)'],
      clinica: 'La del territorio afectado (dolor toracico, disnea, focalidad neurologica, claudicacion). En la dislipidemia grave o familiar, la ECV puede debutar de forma precoz (antes de los 55 anos en el varon, 60 en la mujer).',
      criterios_dx: 'Los propios de cada sindrome (electrocardiograma y troponina, imagen coronaria, TC o RM craneal, indice tobillo-brazo). El diagnostico de ECV establecida coloca al paciente en la categoria de riesgo muy alto y fija el objetivo de cLDL en menos de 55 mg/dL (menos de 40 en el riesgo extremo).',
      laboratorio: 'Perfil lipidico, colesterol no-HDL, ApoB y Lp(a); el resto segun el evento.',
      imagen: 'La correspondiente al territorio; la puntuacion de calcio coronario es util en prevencion primaria para decidir e intensificar el tratamiento.',
      complementarios: 'Rehabilitacion cardiovascular y control integral de los factores de riesgo.',
      dx_diferencial: 'Otras causas de dolor toracico, ictus o claudicacion no ateroescleroticas; el objetivo es no infravalorar el papel de la dislipidemia y tratarla de forma intensiva.',
      tx_medico: 'Estilo de vida y control de todos los factores de riesgo; rehabilitacion cardiovascular; antiagregacion segun la indicacion del evento.',
      tx_farmacologico: 'Estatina de alta intensidad de por vida con objetivo de cLDL menor de 55 mg/dL y reduccion de al menos el 50% (menor de 40 en el riesgo extremo, es decir, eventos recurrentes o enfermedad polivascular); anadir ezetimiba y, si no se alcanza el objetivo, un inhibidor de PCSK9 o inclisiran, o acido bempedoico. Tras un sindrome coronario agudo, intensificar durante el ingreso y usar combinacion de entrada.',
      tx_intervencionista: 'La revascularizacion trata el evento, no la dislipidemia; el control del cLDL es lo que reduce la recurrencia.',
      criterios_uci: 'Los del evento agudo (sindrome coronario, ictus).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Iniciar o intensificar el tratamiento hipolipemiante antes del alta y solicitar un perfil lipidico; educar sobre la adherencia de por vida.',
      seguimiento_ambulatorio: 'Perfil lipidico a las 4 a 8 semanas del alta y luego periodico hasta alcanzar el objetivo; escalar el tratamiento sin demora si no se alcanza; rehabilitacion y control del resto de factores.',
      pronostico: 'Cada 40 mg/dL de descenso mantenido del cLDL reduce alrededor de un 22% los eventos mayores; el beneficio es mayor cuanto antes y cuanto mas se baja, sin un limite inferior de seguridad conocido.',
      algoritmo: ['Evento cardiovascular ateroesclerotico: el paciente pasa a riesgo muy alto (objetivo de cLDL menor de 55; menor de 40 si es riesgo extremo)', 'Estatina de alta intensidad de por vida con reduccion de al menos el 50%', 'Anadir ezetimiba y, si no se alcanza el objetivo, iPCSK9, inclisiran o acido bempedoico', 'Tras un sindrome coronario agudo, combinacion de entrada e intensificacion durante el ingreso', 'Perfil lipidico de control a las 4-8 semanas y escalado sin demora hasta el objetivo']
    },
    {
      nombre: 'Pancreatitis por hipertrigliceridemia grave',
      color: '#8a6a1f',
      definicion: 'Complicacion de la hipertrigliceridemia grave (ver esa tarjeta): pancreatitis aguda desencadenada por trigliceridos muy elevados, habitualmente de 1000 mg/dL o mayores, aunque el riesgo empieza a subir a partir de 500 mg/dL. Es la tercera causa de pancreatitis aguda tras la litiasis biliar y el alcohol.',
      fisiopatologia: 'La hidrolisis masiva de los trigliceridos de los quilomicrones por la lipasa pancreatica libera grandes cantidades de acidos grasos libres que son citotoxicos para las celulas acinares y el endotelio capilar, con isquemia y acidosis locales; la hiperviscosidad por la quilomicronemia contribuye. El cuadro puede ser mas grave que la pancreatitis de otras causas.',
      epidemiologia: 'Explica alrededor del 1 al 10% de las pancreatitis agudas; mas frecuente en pacientes con diabetes descontrolada, consumo de alcohol, embarazo o farmacos que elevan los trigliceridos sobre una hipertrigliceridemia de base.',
      factores_riesgo: ['Trigliceridos de 1000 mg/dL o mayores (o de 500 o mayores con un desencadenante)', 'Diabetes mal controlada', 'Alcohol', 'Embarazo (tercer trimestre)', 'Estrogenos orales y otros farmacos', 'Sindrome de quilomicronemia familiar'],
      clinica: 'Dolor abdominal epigastrico irradiado a la espalda, nauseas y vomitos, igual que otras pancreatitis; pueden coexistir xantomas eruptivos y lipemia retinalis. La amilasa puede ser falsamente normal por interferencia de los lipidos en el ensayo, por lo que la lipasa y la imagen son mas fiables.',
      criterios_dx: 'Los criterios habituales de pancreatitis aguda (dos de tres: dolor tipico, lipasa o amilasa 3 veces el limite superior, imagen compatible) con trigliceridos muy elevados y sin otra causa (descartar litiasis y alcohol). Medir los trigliceridos al ingreso, antes de que el ayuno los reduzca.',
      laboratorio: 'Trigliceridos, lipasa, calcio (puede bajar), glucemia (a menudo muy alta), gasometria, funcion renal y hemograma; perfil lipidico completo al estabilizar.',
      imagen: 'Ecografia abdominal (descartar litiasis) y TC con contraste a las 72 horas si hay duda diagnostica o sospecha de complicacion local.',
      complementarios: 'Busqueda del desencadenante (alcohol, farmacos, diabetes, embarazo) y, en la hipertrigliceridemia grave de inicio temprano, estudio del sindrome de quilomicronemia familiar.',
      dx_diferencial: 'Pancreatitis biliar o alcoholica (buscar litiasis y consumo de alcohol) y otras causas de dolor abdominal agudo; la coexistencia de varias causas es posible.',
      tx_medico: 'Manejo general de la pancreatitis aguda (fluidoterapia, analgesia, nutricion precoz) mas el descenso rapido de los trigliceridos: ayuno, insulina intravenosa en perfusion con glucosa (activa la lipoproteina lipasa) y control de la glucemia. La heparina no se recomienda de rutina.',
      tx_farmacologico: 'Tras la fase aguda, fibrato (fenofibrato) y acidos grasos omega-3 a dosis alta, mas el tratamiento de la causa; olezarsen o volanesorsen en el sindrome de quilomicronemia familiar para prevenir recurrencias.',
      tx_intervencionista: 'Plasmaferesis para bajar los trigliceridos con rapidez en la pancreatitis grave o cuando no descienden con insulina y ayuno; su beneficio sobre la mortalidad no esta demostrado en ensayos, se individualiza.',
      criterios_uci: 'Pancreatitis grave con fallo organico, necesidad de insulina intravenosa con vigilancia estrecha de la glucemia y el potasio, o plasmaferesis.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reducir los trigliceridos por debajo de 500 mg/dL antes del alta, reintroducir la dieta de forma progresiva (baja en grasa) e iniciar el tratamiento hipolipemiante oral.',
      seguimiento_ambulatorio: 'Perfil lipidico periodico con objetivo de trigliceridos por debajo de 500 mg/dL de por vida, abstinencia de alcohol, control estricto de la diabetes y del peso, y evitacion de los farmacos que elevan los trigliceridos; educacion sobre los sintomas de recurrencia.',
      pronostico: 'La mortalidad de un episodio es similar o algo mayor que la de otras pancreatitis; el riesgo real es la recurrencia si los trigliceridos no se mantienen controlados.',
      algoritmo: ['Pancreatitis aguda con trigliceridos muy elevados (habitualmente 1000 mg/dL o mayores) y sin litiasis ni alcohol como causa: pancreatitis por hipertrigliceridemia', 'Manejo general de la pancreatitis mas descenso rapido de trigliceridos: ayuno e insulina intravenosa con glucosa', 'Plasmaferesis si es grave o los trigliceridos no descienden', 'Al estabilizar: fibrato y omega-3 a dosis alta; olezarsen en el sindrome de quilomicronemia familiar', 'Mantener los trigliceridos por debajo de 500 mg/dL de por vida y tratar la causa']
    },
    {
      nombre: 'Intolerancia a las estatinas (sintomas musculares asociados a estatinas)',
      color: '#6b4a2e',
      definicion: 'Complicacion del tratamiento hipolipemiante: incapacidad de tolerar la dosis de estatina necesaria para alcanzar el objetivo por efectos adversos, casi siempre musculares (sintomas musculares asociados a estatinas), confirmados por su aparicion y desaparicion al retirar y reintroducir el farmaco. Es mucho menos frecuente de lo que se percibe: en los ensayos clinicos ronda el 5%, frente a un 15 a 20% en la practica, en buena parte por efecto nocebo.',
      fisiopatologia: 'Los mecanismos propuestos incluyen la reduccion de la sintesis de coenzima Q10 y de otros metabolitos del mevalonato en el musculo, alteraciones de la funcion mitocondrial y del calcio, y una predisposicion genetica (variantes en SLCO1B1 que reducen el aclaramiento hepatico de algunas estatinas). El efecto nocebo, la expectativa de sufrir el efecto adverso, explica una gran parte de los sintomas notificados en la practica.',
      epidemiologia: 'Prevalencia real baja (en torno al 5% en ensayos ciegos); las mujeres, los ancianos, el hipotiroidismo no tratado, la enfermedad renal o hepatica, el ejercicio intenso, la deficiencia de vitamina D y las interacciones farmacologicas aumentan el riesgo.',
      factores_riesgo: ['Dosis alta y estatina mas potente', 'Interacciones (inhibidores del CYP3A4, gemfibrozilo, ciclosporina, algunos antirretrovirales)', 'Hipotiroidismo no tratado, enfermedad renal o hepatica', 'Edad avanzada, sexo femenino, bajo indice de masa corporal', 'Ejercicio extenuante y consumo de alcohol'],
      clinica: 'Mialgias simetricas y proximales (muslos, hombros), calambres o debilidad, que aparecen en las primeras semanas o meses; sin elevacion relevante de la creatina-cinasa en la mayoria. La miopatia con creatina-cinasa muy elevada y la rabdomiolisis son excepcionales. La miositis necrosante autoinmune mediada por anticuerpos anti-HMGCR es una entidad rara que persiste tras suspender la estatina.',
      criterios_dx: 'Relacion temporal con el inicio de la estatina, mejoria en 2 a 4 semanas tras suspenderla y reaparicion al reintroducirla (idealmente con 2 o mas estatinas y a dosis distintas). Descartar y corregir antes las causas alternativas (hipotiroidismo, deficiencia de vitamina D, interacciones, ejercicio). Un cuestionario estructurado (indice de sintomas musculares por estatinas) ayuda a objetivar la relacion.',
      laboratorio: 'Creatina-cinasa (basal y durante los sintomas), TSH, vitamina D, funcion renal y hepatica; anticuerpos anti-HMGCR si la debilidad persiste tras la retirada o la creatina-cinasa esta muy elevada.',
      imagen: 'No necesaria salvo sospecha de miopatia inflamatoria (resonancia muscular, y biopsia en la miositis necrosante).',
      complementarios: 'Revision de las interacciones farmacologicas y correccion de las causas reversibles antes de etiquetar la intolerancia.',
      dx_diferencial: 'Mialgias de otra causa (ejercicio, hipotiroidismo, polimialgia reumatica, deficiencia de vitamina D, virosis), efecto nocebo (sintomas tambien con placebo en los estudios de reexposicion ciega) y miositis necrosante autoinmune por anti-HMGCR.',
      tx_medico: 'Estrategia escalonada: descartar y tratar causas alternativas; suspender la estatina 2 a 6 semanas y reintroducirla; probar otra estatina, a dosis mas baja o en pauta intermitente (por ejemplo rosuvastatina o atorvastatina 1 a 3 veces por semana), buscando la dosis maxima tolerada. No dejar al paciente sin tratamiento hipolipemiante.',
      tx_farmacologico: 'Maximizar el tratamiento no estatinico: ezetimiba, acido bempedoico (que en el estudio CLEAR redujo eventos en pacientes intolerantes a las estatinas y produce menos sintomas musculares porque no se activa en el musculo) y un inhibidor de PCSK9 o inclisiran si sigue sin alcanzarse el objetivo. En la miositis necrosante por anti-HMGCR, suspender la estatina de forma definitiva y tratar con inmunosupresion.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Solo la rabdomiolisis grave con lesion renal aguda, excepcional.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Si la intolerancia se detecta durante un ingreso por evento cardiovascular, dejar pautado un esquema no estatinico eficaz y un plan de reexposicion.',
      seguimiento_ambulatorio: 'Revalorar periodicamente la tolerancia a una estatina de baja intensidad (muchos pacientes la toleran con el tiempo), vigilar el cumplimiento del objetivo de cLDL con el esquema alternativo y reforzar que el beneficio del tratamiento supera con creces el riesgo de los sintomas musculares.',
      pronostico: 'Con una estrategia escalonada, la gran mayoria de los pacientes intolerantes acaba tolerando alguna estatina a dosis baja o alcanza el objetivo con tratamiento no estatinico; el riesgo real es quedar infratratado por abandonar el tratamiento hipolipemiante.',
      algoritmo: ['Sintomas musculares con relacion temporal con la estatina: descartar y corregir causas alternativas (hipotiroidismo, vitamina D, interacciones, ejercicio)', 'Suspender 2-6 semanas y reintroducir; probar otra estatina, a dosis baja o en pauta intermitente, hasta la dosis maxima tolerada', 'Anadir ezetimiba y acido bempedoico (menos sintomas musculares, redujo eventos en CLEAR)', 'iPCSK9 o inclisiran si no se alcanza el objetivo; no dejar al paciente sin tratamiento hipolipemiante', 'Anti-HMGCR y suspension definitiva mas inmunosupresion si hay miositis necrosante autoinmune']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La dislipidemia se maneja de forma ambulatoria; el contacto hospitalario suele ser un evento cardiovascular ateroesclerotico o una pancreatitis por hipertrigliceridemia. El seguimiento intrahospitalario aprovecha ese contacto para iniciar o intensificar el tratamiento hipolipemiante antes del alta, solicitar un perfil lipidico y la Lp(a), y dejar un plan de seguimiento y de cribado familiar cuando proceda.',
    parametros: ['Perfil lipidico basal (colesterol total, HDL, LDL y trigliceridos), colesterol no-HDL, ApoB y Lp(a) una vez', 'Inicio o intensificacion de la estatina de alta intensidad (o del esquema no estatinico si hay intolerancia) durante el ingreso por evento cardiovascular', 'En la hipertrigliceridemia grave, trigliceridos seriados, glucemia y potasio durante la insulina intravenosa, y valoracion de plasmaferesis', 'Cribado de causas secundarias (TSH, glucemia y HbA1c, funcion renal y hepatica, orina) antes de etiquetar la dislipidemia como primaria', 'Plan escrito de objetivo de cLDL, escalado de farmacos, cita para perfil de control a las 4 a 12 semanas y, si procede, cribado familiar en cascada de HF o de Lp(a)'],
    criterios_uci_general: 'Los del evento agudo (sindrome coronario, ictus) o de la pancreatitis grave por hipertrigliceridemia (fallo organico, insulina intravenosa con vigilancia estrecha, plasmaferesis).',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa, salvo la hipercolesterolemia familiar homocigota, en la que el trasplante hepatico es una opcion en casos seleccionados.',
    prevencion: 'Primaria: dieta cardiosaludable, actividad fisica, mantenimiento de un peso adecuado, no fumar y moderacion del alcohol desde edades tempranas, para mantener baja la carga de colesterol a lo largo de la vida. Deteccion: perfil lipidico a partir de los 20 anos, y antes si hay antecedente familiar de dislipidemia o de enfermedad cardiovascular precoz; medicion de la Lp(a) al menos una vez en la vida; cribado en cascada de los familiares de un caso de hipercolesterolemia familiar. Secundaria: alcanzar y mantener el objetivo de cLDL y de colesterol no-HDL con tratamiento escalonado, sin dejar de tratar por sintomas musculares atribuidos a las estatinas.'
  }
};

export const compCites = {
  'Hipercolesterolemia (colesterol LDL elevado)': [6, 2, 0, 7],
  'Hipercolesterolemia familiar': [15, 2, 0],
  'Hipertrigliceridemia': [18, 13, 1],
  'Lipoproteina(a) elevada': [8, 20, 0],
  'Dislipidemia secundaria': [2, 0],
  'Enfermedad cardiovascular ateroesclerotica': [7, 6, 9, 10],
  'Pancreatitis por hipertrigliceridemia grave': [18, 19],
  'Intolerancia a las estatinas (sintomas musculares asociados a estatinas)': [17, 11]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Categorias de riesgo y objetivos de cLDL (ESC/EAS)': [2, 3],
  'Categorias de riesgo y objetivos (ACC/AHA 2026)': [0],
  'Intensidad de la estatina': [4, 7],
  'Zonas de decision de la Lp(a)': [8]
};
export const escalaCalc = {
  'Categorias de riesgo y objetivos de cLDL (ESC/EAS)': 'objetivo-cldl'
};
export const compGroups = [
  { name: 'Fenotipos', items: ['Hipercolesterolemia (colesterol LDL elevado)', 'Hipercolesterolemia familiar', 'Hipertrigliceridemia', 'Lipoproteina(a) elevada', 'Dislipidemia secundaria'] },
  { name: 'Complicaciones', items: ['Enfermedad cardiovascular ateroesclerotica', 'Pancreatitis por hipertrigliceridemia grave', 'Intolerancia a las estatinas (sintomas musculares asociados a estatinas)'] }
];
export const complicacionesIntro = 'Las primeras 5 fichas son los fenotipos de dislipidemia: hipercolesterolemia (cLDL alto, la forma comun), hipercolesterolemia familiar (monogenica), hipertrigliceridemia, lipoproteina(a) elevada y dislipidemia secundaria. Las 3 ultimas son las complicaciones que determinan la morbimortalidad: la enfermedad cardiovascular ateroesclerotica (la complicacion comun a casi todos los fenotipos), la pancreatitis por hipertrigliceridemia grave, y la intolerancia a las estatinas como complicacion del tratamiento.';
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
    { title: 'Fenotipos', sub: 'Alteracion lipidica predominante', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Hipercolesterolemia', sub: 'cLDL alto; la forma comun', color: '#9a6a2e', target: 'complicaciones' },
      { title: 'Hipercolesterolemia familiar', sub: 'Monogenica, 1/200 a 1/250', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hipertrigliceridemia', sub: 'Riesgo residual o de pancreatitis', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Lipoproteina(a) elevada', sub: 'Factor de riesgo causal, genetico', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Dislipidemia secundaria', sub: 'Por enfermedad, farmaco o habito', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Determinan la morbimortalidad', color: '#7a1f3d', target: 'complicaciones', leaves: [
      { title: 'ECV ateroesclerotica', sub: 'La complicacion comun', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Pancreatitis por hipertrigliceridemia', sub: 'Trigliceridos muy elevados', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Intolerancia a las estatinas', sub: 'Complicacion del tratamiento', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [0, 5], imagen: [0] };
export const clasificacionCite = [2, 0, 8];
export const seguimientoCite = [0, 1];
